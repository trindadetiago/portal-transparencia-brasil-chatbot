import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarDespesasFuncionalProgramaticaSubfuncoesInput, ConsultarDespesasFuncionalProgramaticaSubfuncoesOutput } from "./types";
import { renderConsultarDespesasFuncionalProgramaticaSubfuncoesInput, renderConsultarDespesasFuncionalProgramaticaSubfuncoesOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarDespesasFuncionalProgramaticaSubfuncoesMetadata: ToolMetadata = { label: "Subfunções Funcional Programática", category: "despesas" };
export const consultarDespesasFuncionalProgramaticaSubfuncoesRenderer: ToolRenderer<ConsultarDespesasFuncionalProgramaticaSubfuncoesInput, ConsultarDespesasFuncionalProgramaticaSubfuncoesOutput> = {
  renderInput: renderConsultarDespesasFuncionalProgramaticaSubfuncoesInput,
  renderOutput: renderConsultarDespesasFuncionalProgramaticaSubfuncoesOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
