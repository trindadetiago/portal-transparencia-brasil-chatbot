import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarCeafInput, ConsultarCeafOutput } from "./types";
import { renderConsultarCeafInput, renderConsultarCeafOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarCeafMetadata: ToolMetadata = { label: "CEAF - Expulsões", category: "sancoes" };
export const consultarCeafRenderer: ToolRenderer<ConsultarCeafInput, ConsultarCeafOutput> = {
  renderInput: renderConsultarCeafInput,
  renderOutput: renderConsultarCeafOutput,
  getInputLabel: (v) => v === "raw" ? "Parâmetros" : "Filtros",
  getOutputLabel: (v) => v === "raw" ? "Resultado" : "Expulsões (CEAF)",
};
