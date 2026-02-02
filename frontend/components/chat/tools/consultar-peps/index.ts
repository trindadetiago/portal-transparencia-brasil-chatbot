import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarPepsInput, ConsultarPepsOutput } from "./types";
import { renderConsultarPepsInput, renderConsultarPepsOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarPepsMetadata: ToolMetadata = { label: "PEPs", category: "pessoas" };
export const consultarPepsRenderer: ToolRenderer<ConsultarPepsInput, ConsultarPepsOutput> = {
  renderInput: renderConsultarPepsInput,
  renderOutput: renderConsultarPepsOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
