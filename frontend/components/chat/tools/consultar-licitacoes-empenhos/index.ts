import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarLicitacoesEmpenhosInput, ConsultarLicitacoesEmpenhosOutput } from "./types";
import { renderConsultarLicitacoesEmpenhosInput, renderConsultarLicitacoesEmpenhosOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarLicitacoesEmpenhosMetadata: ToolMetadata = { label: "Empenhos da Licitação", category: "licitacoes" };
export const consultarLicitacoesEmpenhosRenderer: ToolRenderer<ConsultarLicitacoesEmpenhosInput, ConsultarLicitacoesEmpenhosOutput> = {
  renderInput: renderConsultarLicitacoesEmpenhosInput,
  renderOutput: renderConsultarLicitacoesEmpenhosOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
