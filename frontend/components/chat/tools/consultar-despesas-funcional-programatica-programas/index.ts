import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarDespesasFuncionalProgramaticaProgramasInput, ConsultarDespesasFuncionalProgramaticaProgramasOutput } from "./types";
import { renderConsultarDespesasFuncionalProgramaticaProgramasInput, renderConsultarDespesasFuncionalProgramaticaProgramasOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarDespesasFuncionalProgramaticaProgramasMetadata: ToolMetadata = { label: "Programas Funcional Programática", category: "despesas" };
export const consultarDespesasFuncionalProgramaticaProgramasRenderer: ToolRenderer<ConsultarDespesasFuncionalProgramaticaProgramasInput, ConsultarDespesasFuncionalProgramaticaProgramasOutput> = {
  renderInput: renderConsultarDespesasFuncionalProgramaticaProgramasInput,
  renderOutput: renderConsultarDespesasFuncionalProgramaticaProgramasOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
