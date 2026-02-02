import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarDespesasItensEmpenhoInput, ConsultarDespesasItensEmpenhoOutput } from "./types";
import { renderConsultarDespesasItensEmpenhoInput, renderConsultarDespesasItensEmpenhoOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarDespesasItensEmpenhoMetadata: ToolMetadata = { label: "Itens de Empenho", category: "despesas" };
export const consultarDespesasItensEmpenhoRenderer: ToolRenderer<ConsultarDespesasItensEmpenhoInput, ConsultarDespesasItensEmpenhoOutput> = {
  renderInput: renderConsultarDespesasItensEmpenhoInput,
  renderOutput: renderConsultarDespesasItensEmpenhoOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
