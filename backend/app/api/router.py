"""
API router aggregation.

Combines all API version routers into the main API router.
"""

from fastapi import APIRouter

from app.api.v1 import chat, health

# Create the main API router
api_router = APIRouter()

# Include v1 routers
api_router.include_router(health.router, prefix="/v1")
api_router.include_router(chat.router, prefix="/v1")

# Also include at root level for backwards compatibility
api_router.include_router(health.router)
api_router.include_router(chat.router)
