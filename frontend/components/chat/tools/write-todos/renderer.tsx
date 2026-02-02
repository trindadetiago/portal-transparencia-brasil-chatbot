/**
 * Renderer for write_todos tool
 */

import { cn } from "@/lib/utils";
import { CheckCircle2, Clock, Circle, X } from "lucide-react";
import type { WriteTodosInput, Todo } from "./types";

export function renderWriteTodosInput(input: WriteTodosInput) {
  const todos = input?.todos || [];
  
  if (!Array.isArray(todos) || todos.length === 0) {
    return (
      <div className="text-[10px] text-muted-foreground/60 italic">
        Nenhuma tarefa
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400" />;
      case "in_progress":
        return <Clock className="w-3 h-3 text-blue-600 dark:text-blue-400" />;
      case "cancelled":
        return <X className="w-3 h-3 text-red-600 dark:text-red-400" />;
      default:
        return <Circle className="w-3 h-3 text-muted-foreground" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Concluída";
      case "in_progress":
        return "Em andamento";
      case "cancelled":
        return "Cancelada";
      case "pending":
        return "Pendente";
      default:
        return status;
    }
  };

  return (
    <div className="space-y-1.5">
      {todos.map((todo: Todo, index: number) => (
        <div
          key={todo.id || index}
          className={cn(
            "flex items-start gap-2 rounded p-2 text-[11px] transition-colors",
            todo.status === "completed"
              ? "bg-green-50/50 dark:bg-green-950/20"
              : todo.status === "in_progress"
              ? "bg-blue-50/50 dark:bg-blue-950/20"
              : "bg-muted/30"
          )}
        >
          <div className="shrink-0 mt-0.5">{getStatusIcon(todo.status)}</div>
          <div className="flex-1 min-w-0">
            <p
              className={cn(
                "font-medium",
                todo.status === "completed"
                  ? "text-green-700 dark:text-green-300 line-through"
                  : "text-foreground"
              )}
            >
              {todo.content}
            </p>
            <p className="text-[9px] text-muted-foreground mt-0.5">
              {getStatusLabel(todo.status)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
