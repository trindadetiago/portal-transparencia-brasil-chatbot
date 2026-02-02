import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarPessoaJuridicaInput, ConsultarPessoaJuridicaOutput } from "./types";
import { renderConsultarPessoaJuridicaInput, renderConsultarPessoaJuridicaOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarPessoaJuridicaMetadata: ToolMetadata = { label: "Pessoa Jurídica", category: "pessoas" };
export const consultarPessoaJuridicaRenderer: ToolRenderer<ConsultarPessoaJuridicaInput, ConsultarPessoaJuridicaOutput> = {
  renderInput: renderConsultarPessoaJuridicaInput,
  renderOutput: renderConsultarPessoaJuridicaOutput,
  getInputLabel: (v) => v === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (v) => v === "raw" ? "Resultado" : "Dados da Empresa",
};
