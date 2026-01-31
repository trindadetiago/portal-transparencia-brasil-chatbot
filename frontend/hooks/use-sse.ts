/**
 * SSE parsing hook for handling Server-Sent Events.
 *
 * Provides reusable SSE stream processing with proper error handling.
 */

import { useCallback } from "react";
import { StreamEvent } from "@/types";

export interface SSEParseResult {
  event: StreamEvent | null;
  error: Error | null;
}

export function useSSE() {
  /**
   * Parse a single SSE line into a StreamEvent.
   */
  const parseLine = useCallback((line: string): SSEParseResult => {
    if (!line.startsWith("data: ")) {
      return { event: null, error: null };
    }

    try {
      const data = JSON.parse(line.substring(6));
      return { event: data as StreamEvent, error: null };
    } catch (error) {
      return {
        event: null,
        error: error instanceof Error ? error : new Error("Parse error"),
      };
    }
  }, []);

  /**
   * Process a ReadableStream and yield parsed events.
   */
  const processStream = useCallback(
    async function* (
      reader: ReadableStreamDefaultReader<Uint8Array>
    ): AsyncGenerator<StreamEvent, void, unknown> {
      const decoder = new TextDecoder();
      let buffer = "";

      try {
        while (true) {
          const { done, value } = await reader.read();

          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");

          // Keep the last incomplete line in buffer
          buffer = lines.pop() || "";

          for (const line of lines) {
            const { event, error } = parseLine(line);

            if (error) {
              console.error("SSE parse error:", error);
              continue;
            }

            if (event) {
              yield event;

              // Stop processing on done or error
              if (event.type === "done" || event.type === "error") {
                return;
              }
            }
          }
        }

        // Process any remaining data in buffer
        if (buffer.trim()) {
          const { event } = parseLine(buffer);
          if (event) {
            yield event;
          }
        }
      } finally {
        reader.releaseLock();
      }
    },
    [parseLine]
  );

  return { parseLine, processStream };
}
