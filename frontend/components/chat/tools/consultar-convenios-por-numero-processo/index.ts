import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarConveniosPorNumeroProcessoInput, ConsultarConveniosPorNumeroProcessoOutput } from "./types";
import { renderConsultarConveniosPorNumeroProcessoInput, renderConsultarConveniosPorNumeroProcessoOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarConveniosPorNumeroProcessoMetadata: ToolMetadata = { label: "Convênios por Processo", category: "convenios" };
export const consultarConveniosPorNumeroProcessoRenderer: ToolRenderer<ConsultarConveniosPorNumeroProcessoInput, ConsultarConveniosPorNumeroProcessoOutput> = {
  renderInput: renderConsultarConveniosPorNumeroProcessoInput,
  renderOutput: renderConsultarConveniosPorNumeroProcessoOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
