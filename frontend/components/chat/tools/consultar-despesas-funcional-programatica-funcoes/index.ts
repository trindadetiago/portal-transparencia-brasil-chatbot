import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarDespesasFuncionalProgramaticaFuncoesInput, ConsultarDespesasFuncionalProgramaticaFuncoesOutput } from "./types";
import { renderConsultarDespesasFuncionalProgramaticaFuncoesInput, renderConsultarDespesasFuncionalProgramaticaFuncoesOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarDespesasFuncionalProgramaticaFuncoesMetadata: ToolMetadata = { label: "Funções Funcional Programática", category: "despesas" };
export const consultarDespesasFuncionalProgramaticaFuncoesRenderer: ToolRenderer<ConsultarDespesasFuncionalProgramaticaFuncoesInput, ConsultarDespesasFuncionalProgramaticaFuncoesOutput> = {
  renderInput: renderConsultarDespesasFuncionalProgramaticaFuncoesInput,
  renderOutput: renderConsultarDespesasFuncionalProgramaticaFuncoesOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
