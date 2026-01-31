"""
Stream service for handling SSE event generation.

Processes agent responses and converts them to typed stream events.
"""

import asyncio
import json
from collections.abc import AsyncIterator
from typing import Any, Protocol

from app.core.logging import get_logger
from app.models.schemas import (
    ContentEvent,
    DoneEvent,
    ErrorEvent,
    ReasoningEvent,
    StreamEvent,
    ToolCallEvent,
    ToolResultEvent,
)

logger = get_logger(__name__)


class LangChainMessage(Protocol):
    """Protocol for LangChain message objects."""

    type: str
    content: str | list[Any]
    additional_kwargs: dict[str, Any]


class StreamService:
    """
    Service for generating SSE stream events from agent responses.

    Handles the conversion of LangChain events to typed stream events.
    """

    @staticmethod
    def format_sse(event: StreamEvent) -> str:
        """
        Format a stream event as an SSE data line.

        Args:
            event: The stream event to format.

        Returns:
            The formatted SSE string.
        """
        return f"data: {event.model_dump_json()}\n\n"

    @staticmethod
    def format_sse_dict(data: dict[str, Any]) -> str:
        """
        Format a dictionary as an SSE data line.

        Args:
            data: The data dictionary to format.

        Returns:
            The formatted SSE string.
        """
        return f"data: {json.dumps(data)}\n\n"

    def _extract_reasoning(self, message: Any) -> list[str]:
        """
        Extract reasoning/thinking content from an AI message.

        Args:
            message: The LangChain AI message.

        Returns:
            A list of reasoning text strings.
        """
        reasoning_parts: list[str] = []
        additional_kwargs = getattr(message, "additional_kwargs", {})

        # Check various locations for reasoning content
        reasoning = None
        for key in ("thinking", "reasoning", "thoughts"):
            if key in additional_kwargs:
                reasoning = additional_kwargs[key]
                break

        # Also check response_metadata
        response_metadata = getattr(message, "response_metadata", {})
        if response_metadata and "thinking" in response_metadata:
            reasoning = response_metadata["thinking"]

        if reasoning:
            if isinstance(reasoning, list):
                for block in reasoning:
                    if isinstance(block, dict) and block.get("type") == "thinking":
                        text = block.get("thinking", "")
                        if text:
                            reasoning_parts.append(str(text))
                    elif isinstance(block, str):
                        reasoning_parts.append(block)
            else:
                reasoning_parts.append(str(reasoning))

        return reasoning_parts

    def _extract_text_content(self, content: str | list[Any]) -> tuple[str, list[str]]:
        """
        Extract text content and any embedded thinking blocks.

        Args:
            content: The message content (string or list of blocks).

        Returns:
            A tuple of (text_content, thinking_parts).
        """
        thinking_parts: list[str] = []

        if isinstance(content, str):
            return content, thinking_parts

        text_parts: list[str] = []
        for block in content:
            if isinstance(block, dict):
                if block.get("type") == "text":
                    text_parts.append(block.get("text", ""))
                elif block.get("type") == "thinking":
                    thinking_text = block.get("thinking", "")
                    if thinking_text:
                        thinking_parts.append(thinking_text)
            elif isinstance(block, str):
                text_parts.append(block)

        return "".join(text_parts), thinking_parts

    def _extract_tool_calls(self, message: Any) -> list[ToolCallEvent]:
        """
        Extract tool calls from an AI message.

        Args:
            message: The LangChain AI message.

        Returns:
            A list of ToolCallEvent objects.
        """
        events: list[ToolCallEvent] = []
        tool_calls = getattr(message, "tool_calls", None) or getattr(
            message, "tool_call_chunks", None
        )

        if not tool_calls:
            return events

        for idx, tool_call in enumerate(tool_calls):
            if isinstance(tool_call, dict):
                name = tool_call.get("name", "unknown")
                args = tool_call.get("args", {})
                tool_id = tool_call.get("id", f"tool_{idx}")
            else:
                name = getattr(tool_call, "name", "unknown")
                args = getattr(tool_call, "args", {})
                tool_id = getattr(tool_call, "id", f"tool_{idx}")

            events.append(ToolCallEvent(name=name, args=args, id=tool_id))

        return events

    async def process_agent_stream(
        self,
        agent: Any,
        user_message: str,
        config: dict[str, Any],
    ) -> AsyncIterator[str]:
        """
        Process an agent stream and yield SSE events.

        Args:
            agent: The Deep Agent instance.
            user_message: The user's message.
            config: The agent configuration.

        Yields:
            SSE-formatted strings for each event.
        """
        event_count = 0

        # Track what we've already emitted to avoid duplicates
        emitted_tool_calls: set[str] = set()  # tool call IDs
        emitted_tool_results: set[str] = set()  # tool_call_id for results
        last_ai_content: str = ""  # Track last content to detect changes

        try:
            async for event in agent.astream(
                {"messages": [{"role": "user", "content": user_message}]},
                config=config,
                stream_mode="values",
            ):
                event_count += 1
                logger.debug("Processing event #%d", event_count)

                if "messages" not in event or not event["messages"]:
                    continue

                messages = event["messages"]

                # Process ALL messages to find new tool results
                for message in messages:
                    message_type = getattr(message, "type", None)

                    if message_type == "tool":
                        tool_call_id = getattr(message, "tool_call_id", None)

                        # Skip if we've already emitted this result
                        if tool_call_id and tool_call_id in emitted_tool_results:
                            continue

                        tool_name = getattr(message, "name", "unknown")
                        tool_content = str(getattr(message, "content", ""))

                        logger.info("Tool result from '%s' (id=%s): %s...",
                                   tool_name, tool_call_id, tool_content[:100])
                        yield self.format_sse(
                            ToolResultEvent(name=tool_name, content=tool_content, id=tool_call_id)
                        )

                        if tool_call_id:
                            emitted_tool_results.add(tool_call_id)

                # Process the last message for AI content and tool calls
                last_message = messages[-1]
                message_type = getattr(last_message, "type", None)

                if message_type == "ai":
                    # Process reasoning
                    for reasoning_text in self._extract_reasoning(last_message):
                        logger.info("Reasoning: %s...", reasoning_text[:100])
                        yield self.format_sse(ReasoningEvent(content=reasoning_text))

                    # Process content
                    content = getattr(last_message, "content", "")
                    text_content, embedded_thinking = self._extract_text_content(content)

                    # Yield any embedded thinking blocks
                    for thinking_text in embedded_thinking:
                        logger.info("Thinking block: %s...", thinking_text[:100])
                        yield self.format_sse(ReasoningEvent(content=thinking_text))

                    # Yield text content only if it changed
                    if text_content.strip() and text_content != last_ai_content:
                        logger.info("Content: %s...", text_content[:100])
                        yield self.format_sse(ContentEvent(content=text_content))
                        last_ai_content = text_content

                    # Process tool calls - only emit new ones
                    for tool_event in self._extract_tool_calls(last_message):
                        if tool_event.id not in emitted_tool_calls:
                            logger.info("Tool call: %s with args %s", tool_event.name, tool_event.args)
                            yield self.format_sse(tool_event)
                            emitted_tool_calls.add(tool_event.id)

                # Small delay to ensure events are flushed
                await asyncio.sleep(0.05)

            logger.info("Completed processing. Total events: %d", event_count)
            yield self.format_sse(DoneEvent())

        except Exception as e:
            error_msg = str(e)
            logger.error("Stream error: %s", error_msg, exc_info=True)
            yield self.format_sse(ErrorEvent(content=error_msg))
