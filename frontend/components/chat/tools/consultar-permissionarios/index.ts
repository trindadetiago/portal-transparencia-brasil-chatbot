import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarPermissionariosInput, ConsultarPermissionariosOutput } from "./types";
import { renderConsultarPermissionariosInput, renderConsultarPermissionariosOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarPermissionariosMetadata: ToolMetadata = { label: "Permissionários", category: "imoveis" };
export const consultarPermissionariosRenderer: ToolRenderer<ConsultarPermissionariosInput, ConsultarPermissionariosOutput> = {
  renderInput: renderConsultarPermissionariosInput,
  renderOutput: renderConsultarPermissionariosOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
