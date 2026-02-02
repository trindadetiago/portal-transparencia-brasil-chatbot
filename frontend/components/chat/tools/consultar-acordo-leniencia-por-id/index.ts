import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarAcordoLenienciaPorIdInput, ConsultarAcordoLenienciaPorIdOutput } from "./types";
import { renderConsultarAcordoLenienciaPorIdInput, renderConsultarAcordoLenienciaPorIdOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarAcordoLenienciaPorIdMetadata: ToolMetadata = { label: "Acordo de Leniência por ID", category: "sancoes" };
export const consultarAcordoLenienciaPorIdRenderer: ToolRenderer<ConsultarAcordoLenienciaPorIdInput, ConsultarAcordoLenienciaPorIdOutput> = {
  renderInput: renderConsultarAcordoLenienciaPorIdInput,
  renderOutput: renderConsultarAcordoLenienciaPorIdOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Detalhes do Acordo",
};
