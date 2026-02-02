import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarViagemPorIdInput, ConsultarViagemPorIdOutput } from "./types";
import { renderConsultarViagemPorIdInput, renderConsultarViagemPorIdOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarViagemPorIdMetadata: ToolMetadata = { label: "Viagem por ID", category: "viagens" };
export const consultarViagemPorIdRenderer: ToolRenderer<ConsultarViagemPorIdInput, ConsultarViagemPorIdOutput> = {
  renderInput: renderConsultarViagemPorIdInput,
  renderOutput: renderConsultarViagemPorIdOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Detalhes da Viagem",
};
