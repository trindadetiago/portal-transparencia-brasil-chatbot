import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarRenunciasValorInput, ConsultarRenunciasValorOutput } from "./types";
import { renderConsultarRenunciasValorInput, renderConsultarRenunciasValorOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarRenunciasValorMetadata: ToolMetadata = { label: "Valores Renunciados", category: "renuncias" };
export const consultarRenunciasValorRenderer: ToolRenderer<ConsultarRenunciasValorInput, ConsultarRenunciasValorOutput> = {
  renderInput: renderConsultarRenunciasValorInput,
  renderOutput: renderConsultarRenunciasValorOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
