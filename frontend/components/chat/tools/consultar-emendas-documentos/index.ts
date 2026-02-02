import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarEmendasDocumentosInput, ConsultarEmendasDocumentosOutput } from "./types";
import { renderConsultarEmendasDocumentosInput, renderConsultarEmendasDocumentosOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarEmendasDocumentosMetadata: ToolMetadata = { label: "Documentos da Emenda", category: "emendas" };
export const consultarEmendasDocumentosRenderer: ToolRenderer<ConsultarEmendasDocumentosInput, ConsultarEmendasDocumentosOutput> = {
  renderInput: renderConsultarEmendasDocumentosInput,
  renderOutput: renderConsultarEmendasDocumentosOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
