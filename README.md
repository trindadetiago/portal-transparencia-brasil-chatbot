# Portal Transparência - Deep Agents Chat

Full-stack chat application with LangChain Deep Agents, FastAPI backend, and Next.js frontend.

## Setup

### 1. Backend

```bash
cd backend

# Use Python 3.10-3.13 (NOT 3.14)
python3.12 -m venv venv  # or python3.11, python3.10
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -e .

# Create .env from .env.example and add your API keys
cp .env.example .env
# Edit .env and add ANTHROPIC_API_KEY and TAVILY_API_KEY
```

### 2. Frontend

```bash
cd frontend
bun install
```

## Run

### Backend (Terminal 1)
```bash
cd backend
source venv/bin/activate  # Windows: venv\Scripts\activate
python main.py
```
Backend runs on http://localhost:8000

### Frontend (Terminal 2)
```bash
cd frontend
bun dev
```
Frontend runs on http://localhost:3000

Open http://localhost:3000 in your browser and start chatting!
