from langchain_groq import ChatGroq
from langgraph.graph import StateGraph, START, END
from dotenv import load_dotenv
from typing import TypedDict, List
from langchain_core.messages import (
    HumanMessage,
    SystemMessage,
    BaseMessage,
    AIMessage
)
from fastapi import FastAPI
from pydantic import BaseModel
import os

from memory_store import MemoryClient  #your custom adapter

load_dotenv()


# Memory client (Node service)

memory = MemoryClient(base_url="http://localhost:8000")


# Agent state

class Agent_state(TypedDict):
    messages: List[BaseMessage]
    userId: str


# API models

class chatRequest(BaseModel):
    userId: str
    content: str

class chatResponse(BaseModel):
    reply: str


# LLM

llm = ChatGroq(
    model_name="llama-3.1-8b-instant",
    api_key=os.getenv("GROQ_API_KEY")
)


# System prompt

system_prompt = SystemMessage(
    content="You are a helpful, intelligent AI assistant. you will also generate the emoji based with related to the user information"
)
memory_update_prompt = SystemMessage(
    content="""
You are a memory manager.

Given the user's new message, decide:
- should_store: true or false
- updated_content: rewritten memory if this message updates or corrects past info

Rules:
- Store ONLY stable facts, preferences, goals, projects, habits
- Ignore casual chat
- If the message changes previous info, rewrite it cleanly

Respond ONLY in JSON:
{
  "should_store": boolean,
  "updated_content": "string or null"
}
"""
)



# Agent logic

import json

def chatAgent(state: Agent_state):
    user_query = state["messages"][-1].content
    user_id = state["userId"]

    # Recall memory
    memories = memory.search(
        query=user_query,
        user_id=user_id
    )

    messages = [system_prompt]

    if memories:
        memory_block = (
            "Relevant long-term context:\n" +
            "\n".join(f"- {m}" for m in memories)
        )
        messages.append(SystemMessage(content=memory_block))

    messages.extend(state["messages"])

    # main reply
    response = llm.invoke(messages)

    # memory behaviou thing of ai (mem0 behavior)
    decision_messages = [
        memory_update_prompt,
        HumanMessage(
            content=f"""
User message:
{user_query}

Existing memories:
{memories}
"""
        )
    ]

    decision_raw = llm.invoke(decision_messages)

    try:
        memory_decision = json.loads(decision_raw.content)
    except:
        memory_decision = {"should_store": False}

    return {
        "messages": state["messages"] + [
            AIMessage(content=response.content)
        ],
        "userId": user_id,
        "memory_decision": memory_decision  #decison making of it
    }

graph = StateGraph(Agent_state)
graph.add_node("chat", chatAgent)
graph.add_edge(START, "chat")
graph.add_edge("chat", END)
agent_app = graph.compile()


# FastAPI

app_connect = FastAPI()

@app_connect.post("/chatpython", response_model=chatResponse)
def chat_endpoint(req: chatRequest):
    try:
        result = agent_app.invoke({
            "messages": [HumanMessage(content=req.content)],
            "userId": req.userId
        })

        reply = result["messages"][-1].content
        decision = result.get("memory_decision", {})

        #  mem0-style memory write-back
        if decision.get("should_store") and decision.get("updated_content"):
            memory.add(
                content=decision["updated_content"],
                user_id=req.userId,
                type="fact",
                importance=0.8
            )

        return {"reply": reply}

    except Exception as e:
        print("pythonAgent error:", e)
        return {"reply": "Internal error"}
