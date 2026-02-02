import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarPessoaFisicaInput, ConsultarPessoaFisicaOutput } from "./types";
import { renderConsultarPessoaFisicaInput, renderConsultarPessoaFisicaOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarPessoaFisicaMetadata: ToolMetadata = { label: "Pessoa Física", category: "pessoas" };
export const consultarPessoaFisicaRenderer: ToolRenderer<ConsultarPessoaFisicaInput, ConsultarPessoaFisicaOutput> = {
  renderInput: renderConsultarPessoaFisicaInput,
  renderOutput: renderConsultarPessoaFisicaOutput,
  getInputLabel: (v) => v === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (v) => v === "raw" ? "Resultado" : "Dados da Pessoa",
};
