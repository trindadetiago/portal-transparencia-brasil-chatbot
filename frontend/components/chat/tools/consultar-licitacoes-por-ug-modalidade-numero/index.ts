import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarLicitacoesPorUgModalidadeNumeroInput, ConsultarLicitacoesPorUgModalidadeNumeroOutput } from "./types";
import { renderConsultarLicitacoesPorUgModalidadeNumeroInput, renderConsultarLicitacoesPorUgModalidadeNumeroOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarLicitacoesPorUgModalidadeNumeroMetadata: ToolMetadata = { label: "Licitação por UG/Modalidade/Número", category: "licitacoes" };
export const consultarLicitacoesPorUgModalidadeNumeroRenderer: ToolRenderer<ConsultarLicitacoesPorUgModalidadeNumeroInput, ConsultarLicitacoesPorUgModalidadeNumeroOutput> = {
  renderInput: renderConsultarLicitacoesPorUgModalidadeNumeroInput,
  renderOutput: renderConsultarLicitacoesPorUgModalidadeNumeroOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
