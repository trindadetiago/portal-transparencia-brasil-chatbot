import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarRenunciasFiscaisEmpresasImunesIsentasInput, ConsultarRenunciasFiscaisEmpresasImunesIsentasOutput } from "./types";
import { renderConsultarRenunciasFiscaisEmpresasImunesIsentasInput, renderConsultarRenunciasFiscaisEmpresasImunesIsentasOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarRenunciasFiscaisEmpresasImunesIsentasMetadata: ToolMetadata = { label: "Empresas Imunes/Isentas", category: "renuncias" };
export const consultarRenunciasFiscaisEmpresasImunesIsentasRenderer: ToolRenderer<ConsultarRenunciasFiscaisEmpresasImunesIsentasInput, ConsultarRenunciasFiscaisEmpresasImunesIsentasOutput> = {
  renderInput: renderConsultarRenunciasFiscaisEmpresasImunesIsentasInput,
  renderOutput: renderConsultarRenunciasFiscaisEmpresasImunesIsentasOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
