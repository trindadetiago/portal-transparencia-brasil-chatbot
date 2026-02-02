import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarCoronavirusTransferenciasInput, ConsultarCoronavirusTransferenciasOutput } from "./types";
import { renderConsultarCoronavirusTransferenciasInput, renderConsultarCoronavirusTransferenciasOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarCoronavirusTransferenciasMetadata: ToolMetadata = { label: "Transferências COVID-19", category: "covid" };
export const consultarCoronavirusTransferenciasRenderer: ToolRenderer<ConsultarCoronavirusTransferenciasInput, ConsultarCoronavirusTransferenciasOutput> = {
  renderInput: renderConsultarCoronavirusTransferenciasInput,
  renderOutput: renderConsultarCoronavirusTransferenciasOutput,
  getInputLabel: (v) => v === "raw" ? "Parâmetros" : "Filtros",
  getOutputLabel: (v) => v === "raw" ? "Resultado" : "Transferências COVID-19",
};
