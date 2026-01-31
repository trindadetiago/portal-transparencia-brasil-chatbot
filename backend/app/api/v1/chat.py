"""
Chat endpoints for the Deep Agents API.

Provides both streaming and non-streaming chat interfaces.
"""

from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import StreamingResponse

from app.config import Settings, get_settings
from app.core.exceptions import EmptyMessageError, MissingAPIKeyError
from app.core.logging import get_logger
from app.dependencies import get_agent_service, get_stream_service
from app.models.schemas import ChatRequest, ChatResponse
from app.services.agent_service import AgentService
from app.services.stream_service import StreamService

logger = get_logger(__name__)

router = APIRouter(prefix="/chat", tags=["chat"])


# Minimal test endpoint
@router.post("/test")
async def test_chat(chat_request: ChatRequest):
    return {"received": True, "messages_count": len(chat_request.messages)}


@router.post(
    "/stream",
    summary="Streaming chat",
    description="Stream chat responses using Server-Sent Events (SSE).",
    responses={
        200: {
            "description": "SSE stream of chat events",
            "content": {"text/event-stream": {}},
        },
        400: {"description": "Invalid request"},
        500: {"description": "Server error"},
    },
)
async def chat_stream(
    chat_request: ChatRequest,
    settings: Settings = Depends(get_settings),
    agent_service: AgentService = Depends(get_agent_service),
    stream_service: StreamService = Depends(get_stream_service),
) -> StreamingResponse:
    """
    Stream the agent's response using Server-Sent Events.

    The response will include events for:
    - `content`: Text content from the agent
    - `reasoning`: Agent's reasoning/thinking process
    - `tool`: Tool invocations
    - `tool_result`: Results from tool executions
    - `error`: Error messages
    - `done`: Stream completion signal
    """
    # Validate API key
    if not settings.has_anthropic_key:
        raise MissingAPIKeyError("ANTHROPIC_API_KEY")

    # Get user message
    if not chat_request.messages:
        raise EmptyMessageError()

    user_message = chat_request.messages[-1].content
    if not user_message.strip():
        raise EmptyMessageError()

    logger.info(
        "Processing stream request: '%s...' | Thread: %s",
        user_message[:50],
        chat_request.thread_id,
    )

    # Get agent and config
    agent = agent_service.get_agent()
    config = agent_service.get_config(chat_request.thread_id)

    return StreamingResponse(
        stream_service.process_agent_stream(agent, user_message, config),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        },
    )


@router.post(
    "",
    response_model=ChatResponse,
    summary="Non-streaming chat",
    description="Get a complete chat response (for backwards compatibility).",
)
async def chat(
    chat_request: ChatRequest,
    settings: Settings = Depends(get_settings),
    agent_service: AgentService = Depends(get_agent_service),
) -> ChatResponse:
    """
    Get a complete response from the agent.

    This endpoint waits for the full response before returning.
    For real-time updates, use the streaming endpoint instead.
    """
    # Validate API key
    if not settings.has_anthropic_key:
        raise MissingAPIKeyError("ANTHROPIC_API_KEY")

    # Get user message
    if not chat_request.messages:
        raise EmptyMessageError()

    user_message = chat_request.messages[-1].content
    if not user_message.strip():
        raise EmptyMessageError()

    logger.info(
        "Processing non-streaming request: '%s...' | Thread: %s",
        user_message[:50],
        chat_request.thread_id,
    )

    try:
        # Get agent and config
        agent = agent_service.get_agent()
        config = agent_service.get_config(chat_request.thread_id)

        # Collect the complete response
        response_text = ""
        for event in agent.stream(
            {"messages": [{"role": "user", "content": user_message}]},
            config=config,
            stream_mode="values",
        ):
            if "messages" in event and event["messages"]:
                last_message = event["messages"][-1]
                message_type = getattr(last_message, "type", None)
                if message_type == "ai":
                    content = getattr(last_message, "content", "")
                    if isinstance(content, str) and content.strip():
                        response_text = content

        logger.info("Response generated: %s...", response_text[:100] if response_text else "empty")

        return ChatResponse(
            message=response_text or "No response from agent",
            role="assistant",
        )

    except MissingAPIKeyError:
        raise
    except Exception as e:
        logger.error("Chat error: %s", str(e), exc_info=True)
        raise HTTPException(status_code=500, detail=str(e)) from e
