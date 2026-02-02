import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarSituacaoImovelInput, ConsultarSituacaoImovelOutput } from "./types";
import { renderConsultarSituacaoImovelInput, renderConsultarSituacaoImovelOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarSituacaoImovelMetadata: ToolMetadata = { label: "Situações de Imóvel", category: "imoveis" };
export const consultarSituacaoImovelRenderer: ToolRenderer<ConsultarSituacaoImovelInput, ConsultarSituacaoImovelOutput> = {
  renderInput: renderConsultarSituacaoImovelInput,
  renderOutput: renderConsultarSituacaoImovelOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
