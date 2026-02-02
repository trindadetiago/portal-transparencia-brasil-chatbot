import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarConvenioPorIdInput, ConsultarConvenioPorIdOutput } from "./types";
import { renderConsultarConvenioPorIdInput, renderConsultarConvenioPorIdOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarConvenioPorIdMetadata: ToolMetadata = { label: "Convênio por ID", category: "convenios" };
export const consultarConvenioPorIdRenderer: ToolRenderer<ConsultarConvenioPorIdInput, ConsultarConvenioPorIdOutput> = {
  renderInput: renderConsultarConvenioPorIdInput,
  renderOutput: renderConsultarConvenioPorIdOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Identificação",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Dados do Convênio",
};
