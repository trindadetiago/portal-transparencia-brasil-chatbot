import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarDespesasFuncionalProgramaticaListarInput, ConsultarDespesasFuncionalProgramaticaListarOutput } from "./types";
import { renderConsultarDespesasFuncionalProgramaticaListarInput, renderConsultarDespesasFuncionalProgramaticaListarOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarDespesasFuncionalProgramaticaListarMetadata: ToolMetadata = { label: "Listar Funcional Programática", category: "despesas" };
export const consultarDespesasFuncionalProgramaticaListarRenderer: ToolRenderer<ConsultarDespesasFuncionalProgramaticaListarInput, ConsultarDespesasFuncionalProgramaticaListarOutput> = {
  renderInput: renderConsultarDespesasFuncionalProgramaticaListarInput,
  renderOutput: renderConsultarDespesasFuncionalProgramaticaListarOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
