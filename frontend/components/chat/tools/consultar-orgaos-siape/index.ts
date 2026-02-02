import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarOrgaosSiapeInput, ConsultarOrgaosSiapeOutput } from "./types";
import { renderConsultarOrgaosSiapeInput, renderConsultarOrgaosSiapeOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarOrgaosSiapeMetadata: ToolMetadata = { label: "Órgãos SIAPE", category: "orgaos" };
export const consultarOrgaosSiapeRenderer: ToolRenderer<ConsultarOrgaosSiapeInput, ConsultarOrgaosSiapeOutput> = {
  renderInput: renderConsultarOrgaosSiapeInput,
  renderOutput: renderConsultarOrgaosSiapeOutput,
  getInputLabel: (v) => v === "raw" ? "Parâmetros" : "Filtros",
  getOutputLabel: (v) => v === "raw" ? "Resultado" : "Órgãos SIAPE",
};
