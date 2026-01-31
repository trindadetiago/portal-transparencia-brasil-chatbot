#!/bin/bash

# Start script for Portal Transparência Chat Application

echo "🚀 Starting Portal Transparência Chat Application..."

# Check if virtual environment exists for backend
if [ ! -d "backend/venv" ]; then
    echo "⚠️  Backend virtual environment not found. Please run setup first:"
    echo "   cd backend && python3.12 -m venv venv && source venv/bin/activate && pip install -e ."
    exit 1
fi

# Check if frontend node_modules exists
if [ ! -d "frontend/node_modules" ]; then
    echo "⚠️  Frontend dependencies not installed. Please run:"
    echo "   cd frontend && bun install"
    exit 1
fi

# Start backend in background
echo "🔧 Starting FastAPI backend..."
cd backend
source venv/bin/activate
python -m app.main &
BACKEND_PID=$!
cd ..

# Wait a bit for backend to start
sleep 2

# Start frontend
echo "🎨 Starting Next.js frontend..."
cd frontend
bun dev &
FRONTEND_PID=$!
cd ..

echo ""
echo "✅ Application started!"
echo "   Backend:  http://localhost:8000"
echo "   Frontend: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for Ctrl+C
trap "echo ''; echo '🛑 Stopping servers...'; kill $BACKEND_PID $FRONTEND_PID; exit" INT
wait
