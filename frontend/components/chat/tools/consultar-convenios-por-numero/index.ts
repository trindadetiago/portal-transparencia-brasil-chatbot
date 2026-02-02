import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarConveniosPorNumeroInput, ConsultarConveniosPorNumeroOutput } from "./types";
import { renderConsultarConveniosPorNumeroInput, renderConsultarConveniosPorNumeroOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarConveniosPorNumeroMetadata: ToolMetadata = { label: "Convênios por Número", category: "convenios" };
export const consultarConveniosPorNumeroRenderer: ToolRenderer<ConsultarConveniosPorNumeroInput, ConsultarConveniosPorNumeroOutput> = {
  renderInput: renderConsultarConveniosPorNumeroInput,
  renderOutput: renderConsultarConveniosPorNumeroOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
