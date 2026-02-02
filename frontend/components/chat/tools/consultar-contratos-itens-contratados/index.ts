import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarContratosItensContratadosInput, ConsultarContratosItensContratadosOutput } from "./types";
import { renderConsultarContratosItensContratadosInput, renderConsultarContratosItensContratadosOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarContratosItensContratadosMetadata: ToolMetadata = { label: "Itens Contratados", category: "contratos" };
export const consultarContratosItensContratadosRenderer: ToolRenderer<ConsultarContratosItensContratadosInput, ConsultarContratosItensContratadosOutput> = {
  renderInput: renderConsultarContratosItensContratadosInput,
  renderOutput: renderConsultarContratosItensContratadosOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
