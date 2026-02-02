import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarDespesasPorFuncionalProgramaticaInput, ConsultarDespesasPorFuncionalProgramaticaOutput } from "./types";
import { renderConsultarDespesasPorFuncionalProgramaticaInput, renderConsultarDespesasPorFuncionalProgramaticaOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarDespesasPorFuncionalProgramaticaMetadata: ToolMetadata = { label: "Despesas Funcional Programática", category: "despesas" };
export const consultarDespesasPorFuncionalProgramaticaRenderer: ToolRenderer<ConsultarDespesasPorFuncionalProgramaticaInput, ConsultarDespesasPorFuncionalProgramaticaOutput> = {
  renderInput: renderConsultarDespesasPorFuncionalProgramaticaInput,
  renderOutput: renderConsultarDespesasPorFuncionalProgramaticaOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
