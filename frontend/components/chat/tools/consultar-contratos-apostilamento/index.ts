import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarContratosApostilamentoInput, ConsultarContratosApostilamentoOutput } from "./types";
import { renderConsultarContratosApostilamentoInput, renderConsultarContratosApostilamentoOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarContratosApostilamentoMetadata: ToolMetadata = { label: "Apostilamentos de Contrato", category: "contratos" };
export const consultarContratosApostilamentoRenderer: ToolRenderer<ConsultarContratosApostilamentoInput, ConsultarContratosApostilamentoOutput> = {
  renderInput: renderConsultarContratosApostilamentoInput,
  renderOutput: renderConsultarContratosApostilamentoOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
