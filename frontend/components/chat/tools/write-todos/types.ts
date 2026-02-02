/**
 * Types for write_todos tool
 */

export interface Todo {
  id: string;
  content: string;
  status: "completed" | "in_progress" | "pending" | "cancelled";
}

export interface WriteTodosInput {
  todos: Todo[];
  merge?: boolean;
}

export interface WriteTodosOutput {
  success?: boolean;
  message?: string;
}
