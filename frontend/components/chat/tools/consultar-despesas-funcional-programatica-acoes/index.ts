import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarDespesasFuncionalProgramaticaAcoesInput, ConsultarDespesasFuncionalProgramaticaAcoesOutput } from "./types";
import { renderConsultarDespesasFuncionalProgramaticaAcoesInput, renderConsultarDespesasFuncionalProgramaticaAcoesOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarDespesasFuncionalProgramaticaAcoesMetadata: ToolMetadata = { label: "Ações Funcional Programática", category: "despesas" };
export const consultarDespesasFuncionalProgramaticaAcoesRenderer: ToolRenderer<ConsultarDespesasFuncionalProgramaticaAcoesInput, ConsultarDespesasFuncionalProgramaticaAcoesOutput> = {
  renderInput: renderConsultarDespesasFuncionalProgramaticaAcoesInput,
  renderOutput: renderConsultarDespesasFuncionalProgramaticaAcoesOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
