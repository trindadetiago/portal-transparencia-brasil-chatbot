import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarCepimPorIdInput, ConsultarCepimPorIdOutput } from "./types";
import { renderConsultarCepimPorIdInput, renderConsultarCepimPorIdOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarCepimPorIdMetadata: ToolMetadata = { label: "CEPIM por ID", category: "sancoes" };
export const consultarCepimPorIdRenderer: ToolRenderer<ConsultarCepimPorIdInput, ConsultarCepimPorIdOutput> = {
  renderInput: renderConsultarCepimPorIdInput,
  renderOutput: renderConsultarCepimPorIdOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Detalhes do Registro",
};
