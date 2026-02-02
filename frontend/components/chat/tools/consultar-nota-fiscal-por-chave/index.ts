import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarNotaFiscalPorChaveInput, ConsultarNotaFiscalPorChaveOutput } from "./types";
import { renderConsultarNotaFiscalPorChaveInput, renderConsultarNotaFiscalPorChaveOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarNotaFiscalPorChaveMetadata: ToolMetadata = { label: "Nota Fiscal por Chave", category: "notas-fiscais" };
export const consultarNotaFiscalPorChaveRenderer: ToolRenderer<ConsultarNotaFiscalPorChaveInput, ConsultarNotaFiscalPorChaveOutput> = {
  renderInput: renderConsultarNotaFiscalPorChaveInput,
  renderOutput: renderConsultarNotaFiscalPorChaveOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
