import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarConveniosInput, ConsultarConveniosOutput } from "./types";
import { renderConsultarConveniosInput, renderConsultarConveniosOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarConveniosMetadata: ToolMetadata = { label: "Convênios", category: "convenios" };
export const consultarConveniosRenderer: ToolRenderer<ConsultarConveniosInput, ConsultarConveniosOutput> = {
  renderInput: renderConsultarConveniosInput,
  renderOutput: renderConsultarConveniosOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Filtros",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Convênios",
};
