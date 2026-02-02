import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarDespesasTipoTransferenciaInput, ConsultarDespesasTipoTransferenciaOutput } from "./types";
import { renderConsultarDespesasTipoTransferenciaInput, renderConsultarDespesasTipoTransferenciaOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarDespesasTipoTransferenciaMetadata: ToolMetadata = { label: "Tipos de Transferência", category: "despesas" };
export const consultarDespesasTipoTransferenciaRenderer: ToolRenderer<ConsultarDespesasTipoTransferenciaInput, ConsultarDespesasTipoTransferenciaOutput> = {
  renderInput: renderConsultarDespesasTipoTransferenciaInput,
  renderOutput: renderConsultarDespesasTipoTransferenciaOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
