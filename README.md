# ✍️ TiaType – Full-Stack AI-Powered Long-Form Writing Platform

**TiaType** is a full-stack, distraction-free writing app designed for students, bloggers, and content creators.  
It combines clean frontend design with an intelligent AI backend that enhances grammar in real-time using LLMs via LangChain.

Built during a personal 15-Day AI Sprint, it reflects the power of practical AI + web development coming together.

---

## 🚀 Features

- 📝 Long-form writing editor with auto-expanding textarea
- 🤖 Real-time grammar improvement using OpenAI or HuggingFace (via LangChain)
- 💾 Auto-save drafts to browser `localStorage`
- 🧠 Backend powered by Node.js + Express + MongoDB
- 📊 Optional: Save entries to MongoDB for session/analytics
- 📂 Easily extendable to include login, export to PDF, or cloud sync
- 🔐 Environment-based secure key loading for OpenAI

---

## 🧠 Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Frontend    | HTML, CSS, JavaScript               |
| Dev Server  | Vite                                |
| AI Layer    | LangChain + OpenAI    |
| Backend     | Node.js, Express                    |
| Database    | MongoDB (Mongoose)                  |
| Styling     |  ( Tailwind)  |


---
## ⚠️ Known Limitation: API Key Issues

This project uses OpenRouter API (free tier). Sometimes you may experience:

- `401 No Auth Credentials` errors
- AI features not working
- Random failures after pushing to GitHub

### 🔑 Why This Happens
- Free API keys can **expire**, be **revoked**, or hit **rate limits**
- `.env.local` is required and must have a working key
- The project does NOT ship with a production-grade API key

### ✅ How to Fix It
1. Create `.env.local` file in root
2. Add your own valid OpenRouter API key:
```env
OPENROUTER_API_KEY=your_key_here
3.
Restart your dev server

⚠️ Tip: You can get a new free key from https://openrouter.ai
---

## 🛠️ How to Run Locally (Full Stack)

> 📦 Requires: Node.js ≥ 16.x and npm

### 🔧 1. Clone the repo

```bash
git clone https://github.com/TIA1106/tiatype.git
cd tiatype
npm install
npm run dev


🙋‍♀️ Why I Built This
I wanted a writing app that didn’t distract me, but also helped me improve.
So I built TiaType — a smart writing environment backed by modern AI.
It’s more than a frontend toy — it taught me LangChain, OpenAI integration, MongoDB, and building a clean user experience.

This is my journey into serious full-stack development with AI.

👩‍💻 Author
Tia Sukhnanni
🎓 BTech @ JKLU Jaipur
💻 Full Stack & AI Developer
