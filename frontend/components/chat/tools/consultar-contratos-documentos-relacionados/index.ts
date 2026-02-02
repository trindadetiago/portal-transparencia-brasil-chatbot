import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarContratosDocumentosRelacionadosInput, ConsultarContratosDocumentosRelacionadosOutput } from "./types";
import { renderConsultarContratosDocumentosRelacionadosInput, renderConsultarContratosDocumentosRelacionadosOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarContratosDocumentosRelacionadosMetadata: ToolMetadata = { label: "Documentos Relacionados Contrato", category: "contratos" };
export const consultarContratosDocumentosRelacionadosRenderer: ToolRenderer<ConsultarContratosDocumentosRelacionadosInput, ConsultarContratosDocumentosRelacionadosOutput> = {
  renderInput: renderConsultarContratosDocumentosRelacionadosInput,
  renderOutput: renderConsultarContratosDocumentosRelacionadosOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
