import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarRenunciasFiscaisEmpresasHabilitadasInput, ConsultarRenunciasFiscaisEmpresasHabilitadasOutput } from "./types";
import { renderConsultarRenunciasFiscaisEmpresasHabilitadasInput, renderConsultarRenunciasFiscaisEmpresasHabilitadasOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarRenunciasFiscaisEmpresasHabilitadasMetadata: ToolMetadata = { label: "Empresas Habilitadas Benefício Fiscal", category: "renuncias" };
export const consultarRenunciasFiscaisEmpresasHabilitadasRenderer: ToolRenderer<ConsultarRenunciasFiscaisEmpresasHabilitadasInput, ConsultarRenunciasFiscaisEmpresasHabilitadasOutput> = {
  renderInput: renderConsultarRenunciasFiscaisEmpresasHabilitadasInput,
  renderOutput: renderConsultarRenunciasFiscaisEmpresasHabilitadasOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
