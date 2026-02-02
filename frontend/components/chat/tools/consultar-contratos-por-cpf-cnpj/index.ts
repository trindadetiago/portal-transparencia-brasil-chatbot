import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarContratosPorCpfCnpjInput, ConsultarContratosPorCpfCnpjOutput } from "./types";
import { renderConsultarContratosPorCpfCnpjInput, renderConsultarContratosPorCpfCnpjOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarContratosPorCpfCnpjMetadata: ToolMetadata = { label: "Contratos por CPF/CNPJ", category: "contratos" };
export const consultarContratosPorCpfCnpjRenderer: ToolRenderer<ConsultarContratosPorCpfCnpjInput, ConsultarContratosPorCpfCnpjOutput> = {
  renderInput: renderConsultarContratosPorCpfCnpjInput,
  renderOutput: renderConsultarContratosPorCpfCnpjOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Contratos do Fornecedor",
};
