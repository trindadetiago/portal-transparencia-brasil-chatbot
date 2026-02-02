import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarConveniosPorNumeroOriginalInput, ConsultarConveniosPorNumeroOriginalOutput } from "./types";
import { renderConsultarConveniosPorNumeroOriginalInput, renderConsultarConveniosPorNumeroOriginalOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarConveniosPorNumeroOriginalMetadata: ToolMetadata = { label: "Convênios por Número Original", category: "convenios" };
export const consultarConveniosPorNumeroOriginalRenderer: ToolRenderer<ConsultarConveniosPorNumeroOriginalInput, ConsultarConveniosPorNumeroOriginalOutput> = {
  renderInput: renderConsultarConveniosPorNumeroOriginalInput,
  renderOutput: renderConsultarConveniosPorNumeroOriginalOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
