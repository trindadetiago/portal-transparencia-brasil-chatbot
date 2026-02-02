import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarOrgaosSiafiInput, ConsultarOrgaosSiafiOutput } from "./types";
import { renderConsultarOrgaosSiafiInput, renderConsultarOrgaosSiafiOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarOrgaosSiafiMetadata: ToolMetadata = { label: "Órgãos SIAFI", category: "orgaos" };
export const consultarOrgaosSiafiRenderer: ToolRenderer<ConsultarOrgaosSiafiInput, ConsultarOrgaosSiafiOutput> = {
  renderInput: renderConsultarOrgaosSiafiInput,
  renderOutput: renderConsultarOrgaosSiafiOutput,
  getInputLabel: (v) => v === "raw" ? "Parâmetros" : "Filtros",
  getOutputLabel: (v) => v === "raw" ? "Resultado" : "Órgãos SIAFI",
};
