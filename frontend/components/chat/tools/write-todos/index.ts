/**
 * write_todos tool exports
 */

import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { WriteTodosInput, WriteTodosOutput } from "./types";
import { renderWriteTodosInput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const writeTodosMetadata: ToolMetadata = {
  label: "Lista de Tarefas",
  category: "internal",
};

export const writeTodosRenderer: ToolRenderer<WriteTodosInput, WriteTodosOutput> = {
  renderInput: renderWriteTodosInput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Tarefas",
};
