import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarDespesasItensEmpenhoHistoricoInput, ConsultarDespesasItensEmpenhoHistoricoOutput } from "./types";
import { renderConsultarDespesasItensEmpenhoHistoricoInput, renderConsultarDespesasItensEmpenhoHistoricoOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarDespesasItensEmpenhoHistoricoMetadata: ToolMetadata = { label: "Histórico Itens Empenho", category: "despesas" };
export const consultarDespesasItensEmpenhoHistoricoRenderer: ToolRenderer<ConsultarDespesasItensEmpenhoHistoricoInput, ConsultarDespesasItensEmpenhoHistoricoOutput> = {
  renderInput: renderConsultarDespesasItensEmpenhoHistoricoInput,
  renderOutput: renderConsultarDespesasItensEmpenhoHistoricoOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
