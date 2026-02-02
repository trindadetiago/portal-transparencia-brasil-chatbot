import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarViagensPorCpfInput, ConsultarViagensPorCpfOutput } from "./types";
import { renderConsultarViagensPorCpfInput, renderConsultarViagensPorCpfOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarViagensPorCpfMetadata: ToolMetadata = { label: "Viagens por CPF", category: "viagens" };
export const consultarViagensPorCpfRenderer: ToolRenderer<ConsultarViagensPorCpfInput, ConsultarViagensPorCpfOutput> = {
  renderInput: renderConsultarViagensPorCpfInput,
  renderOutput: renderConsultarViagensPorCpfOutput,
  getInputLabel: (v) => v === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (v) => v === "raw" ? "Resultado" : "Histórico de Viagens",
};
