🧠 LTM-AI-Agent

LTM-AI-Agent is a **Long-Term Memory AI Assistant** that remembers users across conversations using vector embeddings and semantic search.  
It combines Node.js + MongoDB + Python AI Agent to deliver personalized, memory-aware responses.

---

 🚀 Features

- ✅ Long-Term Memory (LTM) using vector embeddings
- 🧠 Semantic memory recall (context-aware)
- 🔁 Persistent user identity (remembers names & facts)
- 🗂️ Memory storage & retrieval pipeline
- 🧩 Node.js ↔ Python AI Agent integration
- 💬 Chat-style frontend (React)
- ⚡ Scalable & modular architecture

---

🏗️ Tech Stack

Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Vector Embeddings
- Semantic Search

AI Agent
- Python
- LLM-based response generation
- Memory embedding & recall logic

 Frontend
- React
- Vite
- CSS (minimal chat UI)

---

## 📂 Project Structure

LTM-AI-Agent/
│
├── backend/
│ ├── schema/
│ │ └── schema.chat.js # MongoDB memory schema
│ │
│ ├── src/
│ │ ├── controller/
│ │ │ ├── callpythonagent.js
│ │ │ ├── controllerschema.js
│ │ │ └── recallmemory.js
│ │ │
│ │ ├── db/
│ │ │ └── dbconnect.js
│ │ │
│ │ ├── LTM_Agent/
│ │ │ ├── main.py # Python AI agent
│ │ │ └── memory_store.py
│ │ │
│ │ ├── router/
│ │ │ └── chat.routes.js
│ │ │
│ │ ├── utils/
│ │ │ ├── embText.js # Embedding generator
│ │ │ ├── memory_store.js
│ │ │ └── semantic_search.js
│ │ │
│ │ └── index.js # Server entry point
│ │
│ ├── .env
│ ├── package.json
│ └── README.md
│
├── frontend/
│ ├── src/
│ │ ├── assets/
│ │ ├── App.jsx
│ │ ├── Message.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ │
│ ├── public/
│ ├── package.json
│ └── .gitignore
│
└── README.md


---

 🧠 How Memory Works

1. User sends a message
2. Message is embedded into a vector
3. Stored in MongoDB with userId + metadata
4. On next message:
   - Similar memories are retrieved via semantic search
5. AI responds with **context + past memory**

Example:
User: Hello, I am Jai
AI: Hello Jai 👋

User: Do you remember me?
AI: Yes, Jai! You introduced yourself earlier 😊

---

 ⚙️ Installation & Setup

1️⃣ Clone the Repository


git clone https://github.com/your-username/LTM-AI-Agent.git
cd LTM-AI-Agent
2️⃣ Backend Setup
cd backend
npm install


Create .env file:

MONGODB_URI=your_mongodb_uri
LLM_API_KEY=your_llm_api_key

Start backend:
npm run dev

3️⃣ Python Agent Setup
cd backend/src/LTM_Agent
pip install -r requirements.txt   # if you have one
python main.py

4️⃣ Frontend Setup
cd frontend
npm install
npm run dev
🧪 Sample API Flow

POST /chat
{
  "userId": "jai_123",
  "content": "Hello, I am Jai"
}
📌 Why This Project Matters

This project demonstrates:

Real AI memory engineering

Vector databases & semantic search

Cross-language system design (Node + Python)

Scalable agent architecture

Practical LLM limitations & solutions

Most people build chatbots
This builds memory

🔮 Future Enhancements

Episodic vs factual memory separation

Memory importance scoring

Time-based memory decay

Multi-agent architecture

Voice-based assistant

Authentication & user profiles

👤 Author

Jai
AI Engineer | Full-Stack Developer
Building real-world AI systems 🚀



