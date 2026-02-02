import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarContratoPorIdInput, ConsultarContratoPorIdOutput } from "./types";
import { renderConsultarContratoPorIdInput, renderConsultarContratoPorIdOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarContratoPorIdMetadata: ToolMetadata = { label: "Contrato por ID", category: "contratos" };
export const consultarContratoPorIdRenderer: ToolRenderer<ConsultarContratoPorIdInput, ConsultarContratoPorIdOutput> = {
  renderInput: renderConsultarContratoPorIdInput,
  renderOutput: renderConsultarContratoPorIdOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Identificação",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Dados do Contrato",
};
