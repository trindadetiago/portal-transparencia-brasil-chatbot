import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarLicitacoesContratosRelacionadosInput, ConsultarLicitacoesContratosRelacionadosOutput } from "./types";
import { renderConsultarLicitacoesContratosRelacionadosInput, renderConsultarLicitacoesContratosRelacionadosOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarLicitacoesContratosRelacionadosMetadata: ToolMetadata = { label: "Contratos Relacionados", category: "licitacoes" };
export const consultarLicitacoesContratosRelacionadosRenderer: ToolRenderer<ConsultarLicitacoesContratosRelacionadosInput, ConsultarLicitacoesContratosRelacionadosOutput> = {
  renderInput: renderConsultarLicitacoesContratosRelacionadosInput,
  renderOutput: renderConsultarLicitacoesContratosRelacionadosOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
