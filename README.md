<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=LTM-AI-Agent%20🧠&fontSize=42&fontColor=fff&animation=twinkling&fontAlignY=32&desc=Long-Term%20Memory%20AI%20Assistant%20%7C%20MERN%20%2B%20Python%20%7C%20Vector%20Embeddings&descAlignY=55&descSize=16"/>

![Node.js](https://img.shields.io/badge/Node.js-6DA55F?style=plastic&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-%23404d59.svg?style=plastic&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/React-%2320232a.svg?style=plastic&logo=react&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=plastic&logo=mongodb&logoColor=white)
![Python](https://img.shields.io/badge/Python-3670A0?style=plastic&logo=python&logoColor=ffdd54)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=plastic&logo=openai&logoColor=white)
![Groq](https://img.shields.io/badge/Groq-%23F55036.svg?style=plastic&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=plastic&logo=vite&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active%20🔥-green?style=plastic)

> 🧠 An AI Assistant that **remembers you across conversations** using vector embeddings,
> semantic search & a Node.js ↔ Python agent bridge — built as part of my **AI Engineering journey!**

</div>

---

## 💫 About This Project

Most chatbots forget you the moment a conversation ends.

**LTM-AI-Agent** is different.

It uses **Long-Term Memory (LTM)** powered by **vector embeddings** and **semantic search** to
remember users across conversations — their names, facts, preferences — and uses that
context to deliver **personalized, memory-aware AI responses** every single time.
```
User: Hello, I am Nani
AI:   Hello Nani 👋 Nice to meet you!

--- next conversation ---

User: Do you remember me?
AI:   Yes, Nani! You introduced yourself earlier 😊
```

---

 🏗️ Architecture


<div align="center">

<img src="[https://github.com/Nani10011001/LTM-AI-Agent/assets/your-asset-id/architecture.png](https://github.com/user-attachments/assets/6dfec8c2-1641-4d39-800d-96e747a275f6)" alt="LTM-AI-Agent Architecture" width="850"/>
</div>
</div>


---

 🚀 Features

| Feature | Description |
|---|---|
| 🧠 Long-Term Memory | Remembers users across all conversations |
| 🔍 Semantic Recall | Finds relevant memories via vector similarity |
| 🔁 Persistent Identity | Remembers names, facts & preferences |
| 🐍 Node ↔ Python Bridge | `spawn()` connects JS backend to Python agent |
| 💬 Chat UI | Clean React-based chat interface |
| 📦 Modular Architecture | Clean separation of concerns |
| ⚡ Scalable Design | Ready for Redis caching & Docker |

---

## 🛠️ Tech Stack

### 🌐 Frontend
![React](https://img.shields.io/badge/React-%2320232a.svg?style=plastic&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=plastic&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=plastic&logo=css3&logoColor=white)

### ⚙️ Backend
![Node.js](https://img.shields.io/badge/Node.js-6DA55F?style=plastic&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-%23404d59.svg?style=plastic&logo=express&logoColor=%2361DAFB)
![JWT](https://img.shields.io/badge/JWT-black?style=plastic&logo=JSON%20web%20tokens)

### 🤖 AI Agent
![Python](https://img.shields.io/badge/Python-3670A0?style=plastic&logo=python&logoColor=ffdd54)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=plastic&logo=openai&logoColor=white)
![Groq](https://img.shields.io/badge/Groq-%23F55036.svg?style=plastic&logoColor=white)

### 🗄️ Database & Infrastructure
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=plastic&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-%230db7ed.svg?style=plastic&logo=docker&logoColor=white)

---

📂 Project Structure
```
LTM-AI-Agent/
│
├── backend/
│   ├── schema/
│   │   └── schema.chat.js          # MongoDB memory schema
│   │
│   └── src/
│       ├── controller/
│       │   ├── callpythonagent.js  # 🐍 spawn() Python agent
│       │   ├── controllerschema.js # 💾 Save memory to MongoDB
│       │   └── recallmemory.js     # 🔍 Semantic memory recall
│       │
│       ├── db/
│       │   └── dbconnect.js        # MongoDB connection
│       │
│       ├── LTM_Agent/
│       │   ├── main.py             # 🤖 Python AI orchestrator
│       │   └── memory_store.py     # 🧠 Embed + recall logic
│       │
│       ├── router/
│       │   └── chat.routes.js      # API routes
│       │
│       ├── utils/
│       │   ├── embText.js          # 📐 Vector embedding generator
│       │   ├── memory_store.js     # 📦 Memory storage handler
│       │   └── semantic_search.js  # 🔎 Vector similarity search
│       │
│       └── index.js                # 🚀 Server entry point
│
├── frontend/
│   └── src/
│       ├── App.jsx                 # Root component
│       ├── Message.jsx             # Chat message component
│       ├── main.jsx                # Entry point
│       └── index.css               # Styles
│
└── README.md
```

---

 🧠 How Memory Works
```
1. User sends message
        │
        ▼
2. Message embedded → vector (embText.js)
        │
        ▼
3. Stored in MongoDB with userId + metadata
        │
        ▼
4. On next message:
   Similar memories retrieved via semantic search
        │
        ▼
5. Memory context injected into LLM prompt
        │
        ▼
6. AI responds with context + past memory 🎯
```

 🔗 Node ↔ Python Bridge (spawn)
```javascript
// callpythonagent.js
const { spawn } = require('child_process')

const agent = spawn('python', ['./LTM_Agent/main.py'])

agent.stdin.write(JSON.stringify({ userId, message, memories }))
agent.stdout.on('data', (data) => {
  res.json({ reply: data.toString() })
})
```

> The Node.js backend spawns the Python agent as a **child process**,
> passes data via `stdin`, and reads the AI response from `stdout`.
> Pure JS ↔ Python bridge — no REST API needed between them.

---

 ⚙️ Setup & Run

 1️⃣ Clone the Repository
```bash
git clone https://github.com/Nani10011001/LTM-AI-Agent.git
cd LTM-AI-Agent
```

 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create `.env` file:
```env
MONGODB_URI=your_mongodb_atlas_uri
OPENAI_API_KEY=your_openai_key
GROQ_API_KEY=your_groq_key
PORT=5000
```

Start backend:
```bash
npm run dev
```

 3️⃣ Python Agent Setup
```bash
cd backend/src/LTM_Agent
pip install openai langchain python-dotenv
```

> Python agent is launched automatically by Node via `spawn()` —
> no need to run it separately!

 4️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Open in browser:
```
http://localhost:5173
```

---

 🧪 API Reference

 POST `/chat`
```json
{
  "userId": "nani_001",
  "content": "Hello, I am Nani"
}
```

Response:
```json
{
  "reply": "Hello Nani! 👋 Great to meet you!",
  "memoriesSaved": true
}
```

---


---

🔮 Future Improvements

- [ ] 🐳 **Docker** containerization
- [ ] ⚡ **Redis** caching for faster memory retrieval
- [ ] 🧩 **Episodic vs factual** memory separation
- [ ] ⏳ **Time-based memory decay** system
- [ ] 🔐 **User authentication** & profiles
- [ ] 🎙️ **Voice assistant** integration
- [ ] 📊 **Memory importance scoring**
- [ ] 🤖 **Multi-agent architecture**

---

 💡 Why This Project Matters

| Concept | What It Demonstrates |
|---|---|
| 🧠 Vector Embeddings | Real AI memory engineering |
| 🔍 Semantic Search | Similarity-based retrieval |
| 🐍 Cross-language Design | Node.js + Python via spawn() |
| 📦 Scalable Architecture | Production-ready patterns |
| 🤖 LLM Engineering | Prompt injection with memory context |

> Most people build chatbots.
> **This builds memory.** 🧠

---

💡 Learning Roadmap
```
React ✅ → MERN ✅ → Python Agent ✅ → LTM Memory ✅ → Multi-Agent Systems 🔥
```

---

<div align="center">

 🔥 Part of my AI Engineering Journey

![](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=tokyonight)

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer"/>

</div>
