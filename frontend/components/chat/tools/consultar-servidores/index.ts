/**
 * consultar_servidores tool exports
 */

import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarServidoresInput, ConsultarServidoresOutput } from "./types";
import {
  renderConsultarServidoresInput,
  renderConsultarServidoresOutput,
} from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarServidoresMetadata: ToolMetadata = {
  label: "Consultar Servidores",
  category: "servidores",
};

export const consultarServidoresRenderer: ToolRenderer<
  ConsultarServidoresInput,
  ConsultarServidoresOutput
> = {
  renderInput: renderConsultarServidoresInput,
  renderOutput: renderConsultarServidoresOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Filtros",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Servidores Encontrados",
};
