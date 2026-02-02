import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarDespesasDocumentosRelacionadosInput, ConsultarDespesasDocumentosRelacionadosOutput } from "./types";
import { renderConsultarDespesasDocumentosRelacionadosInput, renderConsultarDespesasDocumentosRelacionadosOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarDespesasDocumentosRelacionadosMetadata: ToolMetadata = { label: "Documentos Relacionados", category: "despesas" };
export const consultarDespesasDocumentosRelacionadosRenderer: ToolRenderer<ConsultarDespesasDocumentosRelacionadosInput, ConsultarDespesasDocumentosRelacionadosOutput> = {
  renderInput: renderConsultarDespesasDocumentosRelacionadosInput,
  renderOutput: renderConsultarDespesasDocumentosRelacionadosOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
