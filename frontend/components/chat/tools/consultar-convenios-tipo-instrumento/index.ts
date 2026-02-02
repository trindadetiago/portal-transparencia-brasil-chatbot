import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarConveniosTipoInstrumentoInput, ConsultarConveniosTipoInstrumentoOutput } from "./types";
import { renderConsultarConveniosTipoInstrumentoInput, renderConsultarConveniosTipoInstrumentoOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarConveniosTipoInstrumentoMetadata: ToolMetadata = { label: "Tipos de Instrumento", category: "convenios" };
export const consultarConveniosTipoInstrumentoRenderer: ToolRenderer<ConsultarConveniosTipoInstrumentoInput, ConsultarConveniosTipoInstrumentoOutput> = {
  renderInput: renderConsultarConveniosTipoInstrumentoInput,
  renderOutput: renderConsultarConveniosTipoInstrumentoOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
