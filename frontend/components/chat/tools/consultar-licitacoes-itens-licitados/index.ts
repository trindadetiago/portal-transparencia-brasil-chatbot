import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarLicitacoesItensLicitadosInput, ConsultarLicitacoesItensLicitadosOutput } from "./types";
import { renderConsultarLicitacoesItensLicitadosInput, renderConsultarLicitacoesItensLicitadosOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarLicitacoesItensLicitadosMetadata: ToolMetadata = { label: "Itens Licitados", category: "licitacoes" };
export const consultarLicitacoesItensLicitadosRenderer: ToolRenderer<ConsultarLicitacoesItensLicitadosInput, ConsultarLicitacoesItensLicitadosOutput> = {
  renderInput: renderConsultarLicitacoesItensLicitadosInput,
  renderOutput: renderConsultarLicitacoesItensLicitadosOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
