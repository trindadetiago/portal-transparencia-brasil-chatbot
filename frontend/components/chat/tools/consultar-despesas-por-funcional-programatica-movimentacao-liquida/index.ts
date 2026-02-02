import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarDespesasPorFuncionalProgramaticaMovimentacaoLiquidaInput, ConsultarDespesasPorFuncionalProgramaticaMovimentacaoLiquidaOutput } from "./types";
import { renderConsultarDespesasPorFuncionalProgramaticaMovimentacaoLiquidaInput, renderConsultarDespesasPorFuncionalProgramaticaMovimentacaoLiquidaOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarDespesasPorFuncionalProgramaticaMovimentacaoLiquidaMetadata: ToolMetadata = { label: "Movimentação Líquida Funcional", category: "despesas" };
export const consultarDespesasPorFuncionalProgramaticaMovimentacaoLiquidaRenderer: ToolRenderer<ConsultarDespesasPorFuncionalProgramaticaMovimentacaoLiquidaInput, ConsultarDespesasPorFuncionalProgramaticaMovimentacaoLiquidaOutput> = {
  renderInput: renderConsultarDespesasPorFuncionalProgramaticaMovimentacaoLiquidaInput,
  renderOutput: renderConsultarDespesasPorFuncionalProgramaticaMovimentacaoLiquidaOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
