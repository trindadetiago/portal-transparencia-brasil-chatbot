import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarViagensInput, ConsultarViagensOutput } from "./types";
import { renderConsultarViagensInput, renderConsultarViagensOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarViagensMetadata: ToolMetadata = { label: "Viagens a Serviço", category: "viagens" };
export const consultarViagensRenderer: ToolRenderer<ConsultarViagensInput, ConsultarViagensOutput> = {
  renderInput: renderConsultarViagensInput,
  renderOutput: renderConsultarViagensOutput,
  getInputLabel: (v) => v === "raw" ? "Parâmetros" : "Filtros",
  getOutputLabel: (v) => v === "raw" ? "Resultado" : "Viagens",
};
