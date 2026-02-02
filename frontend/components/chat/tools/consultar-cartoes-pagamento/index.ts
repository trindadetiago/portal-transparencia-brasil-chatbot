import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarCartoesPagamentoInput, ConsultarCartoesPagamentoOutput } from "./types";
import { renderConsultarCartoesPagamentoInput, renderConsultarCartoesPagamentoOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarCartoesPagamentoMetadata: ToolMetadata = { label: "Cartões de Pagamento", category: "cartoes" };
export const consultarCartoesPagamentoRenderer: ToolRenderer<ConsultarCartoesPagamentoInput, ConsultarCartoesPagamentoOutput> = {
  renderInput: renderConsultarCartoesPagamentoInput,
  renderOutput: renderConsultarCartoesPagamentoOutput,
  getInputLabel: (v) => v === "raw" ? "Parâmetros" : "Filtros",
  getOutputLabel: (v) => v === "raw" ? "Resultado" : "Gastos com Cartão",
};
