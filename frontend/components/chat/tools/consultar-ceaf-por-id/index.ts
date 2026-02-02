import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarCeafPorIdInput, ConsultarCeafPorIdOutput } from "./types";
import { renderConsultarCeafPorIdInput, renderConsultarCeafPorIdOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarCeafPorIdMetadata: ToolMetadata = { label: "CEAF por ID", category: "sancoes" };
export const consultarCeafPorIdRenderer: ToolRenderer<ConsultarCeafPorIdInput, ConsultarCeafPorIdOutput> = {
  renderInput: renderConsultarCeafPorIdInput,
  renderOutput: renderConsultarCeafPorIdOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Detalhes do Registro",
};
