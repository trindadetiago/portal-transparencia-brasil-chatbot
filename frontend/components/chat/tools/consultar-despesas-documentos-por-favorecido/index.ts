import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarDespesasDocumentosPorFavorecidoInput, ConsultarDespesasDocumentosPorFavorecidoOutput } from "./types";
import { renderConsultarDespesasDocumentosPorFavorecidoInput, renderConsultarDespesasDocumentosPorFavorecidoOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarDespesasDocumentosPorFavorecidoMetadata: ToolMetadata = { label: "Despesas por Favorecido", category: "despesas" };
export const consultarDespesasDocumentosPorFavorecidoRenderer: ToolRenderer<ConsultarDespesasDocumentosPorFavorecidoInput, ConsultarDespesasDocumentosPorFavorecidoOutput> = {
  renderInput: renderConsultarDespesasDocumentosPorFavorecidoInput,
  renderOutput: renderConsultarDespesasDocumentosPorFavorecidoOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
