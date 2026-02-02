import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarDespesasFavorecidosFinaisPorDocumentoInput, ConsultarDespesasFavorecidosFinaisPorDocumentoOutput } from "./types";
import { renderConsultarDespesasFavorecidosFinaisPorDocumentoInput, renderConsultarDespesasFavorecidosFinaisPorDocumentoOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarDespesasFavorecidosFinaisPorDocumentoMetadata: ToolMetadata = { label: "Favorecidos Finais", category: "despesas" };
export const consultarDespesasFavorecidosFinaisPorDocumentoRenderer: ToolRenderer<ConsultarDespesasFavorecidosFinaisPorDocumentoInput, ConsultarDespesasFavorecidosFinaisPorDocumentoOutput> = {
  renderInput: renderConsultarDespesasFavorecidosFinaisPorDocumentoInput,
  renderOutput: renderConsultarDespesasFavorecidosFinaisPorDocumentoOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
