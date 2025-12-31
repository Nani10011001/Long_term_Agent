how run the fastapi server

uvicorn agent_server:app --reload --port 8000
Frontend
   ↓
Node.js (Single Source of Truth)
   ├── storeMemory (embeddings + MongoDB)
   ├── recallMemory (vector search)
   └── call Python agent
            ↓
         Python Agent
            ├── recall memory via Node
            ├── reason
            └── return reply
