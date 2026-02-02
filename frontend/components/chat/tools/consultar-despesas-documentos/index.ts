import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarDespesasDocumentosInput, ConsultarDespesasDocumentosOutput } from "./types";
import { renderConsultarDespesasDocumentosInput, renderConsultarDespesasDocumentosOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarDespesasDocumentosMetadata: ToolMetadata = { label: "Documentos de Despesa", category: "despesas" };
export const consultarDespesasDocumentosRenderer: ToolRenderer<ConsultarDespesasDocumentosInput, ConsultarDespesasDocumentosOutput> = {
  renderInput: renderConsultarDespesasDocumentosInput,
  renderOutput: renderConsultarDespesasDocumentosOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
