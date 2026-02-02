import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarCoronavirusMovimentoLiquidoDespesaInput, ConsultarCoronavirusMovimentoLiquidoDespesaOutput } from "./types";
import { renderConsultarCoronavirusMovimentoLiquidoDespesaInput, renderConsultarCoronavirusMovimentoLiquidoDespesaOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarCoronavirusMovimentoLiquidoDespesaMetadata: ToolMetadata = { label: "COVID Movimentação Líquida", category: "covid" };
export const consultarCoronavirusMovimentoLiquidoDespesaRenderer: ToolRenderer<ConsultarCoronavirusMovimentoLiquidoDespesaInput, ConsultarCoronavirusMovimentoLiquidoDespesaOutput> = {
  renderInput: renderConsultarCoronavirusMovimentoLiquidoDespesaInput,
  renderOutput: renderConsultarCoronavirusMovimentoLiquidoDespesaOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
