import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarDespesasDocumentoPorCodigoInput, ConsultarDespesasDocumentoPorCodigoOutput } from "./types";
import { renderConsultarDespesasDocumentoPorCodigoInput, renderConsultarDespesasDocumentoPorCodigoOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarDespesasDocumentoPorCodigoMetadata: ToolMetadata = { label: "Despesa por Código", category: "despesas" };
export const consultarDespesasDocumentoPorCodigoRenderer: ToolRenderer<ConsultarDespesasDocumentoPorCodigoInput, ConsultarDespesasDocumentoPorCodigoOutput> = {
  renderInput: renderConsultarDespesasDocumentoPorCodigoInput,
  renderOutput: renderConsultarDespesasDocumentoPorCodigoOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
