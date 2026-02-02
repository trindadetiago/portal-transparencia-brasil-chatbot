import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarCeisPorIdInput, ConsultarCeisPorIdOutput } from "./types";
import { renderConsultarCeisPorIdInput, renderConsultarCeisPorIdOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarCeisPorIdMetadata: ToolMetadata = { label: "CEIS por ID", category: "sancoes" };
export const consultarCeisPorIdRenderer: ToolRenderer<ConsultarCeisPorIdInput, ConsultarCeisPorIdOutput> = {
  renderInput: renderConsultarCeisPorIdInput,
  renderOutput: renderConsultarCeisPorIdOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Detalhes do Registro",
};
