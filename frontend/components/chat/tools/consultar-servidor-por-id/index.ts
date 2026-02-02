/**
 * consultar_servidor_por_id tool exports
 */

import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarServidorPorIdInput, ConsultarServidorPorIdOutput } from "./types";
import {
  renderConsultarServidorPorIdInput,
  renderConsultarServidorPorIdOutput,
} from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarServidorPorIdMetadata: ToolMetadata = {
  label: "Servidor por ID",
  category: "servidores",
};

export const consultarServidorPorIdRenderer: ToolRenderer<
  ConsultarServidorPorIdInput,
  ConsultarServidorPorIdOutput
> = {
  renderInput: renderConsultarServidorPorIdInput,
  renderOutput: renderConsultarServidorPorIdOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Identificação",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Dados do Servidor",
};
