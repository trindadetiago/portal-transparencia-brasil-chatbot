/**
 * Types for consultar_contratos_documentos_relacionados tool
 * Based on Portal da Transparência API: /api-de-dados/contratos/documentos-relacionados
 */

import type { DocumentoRelacionadoDTO } from "../base/api-types";

export interface ConsultarContratosDocumentosRelacionadosInput {
  /** ID do registro */
  id: number;
}

export type { DocumentoRelacionadoDTO };
export type ConsultarContratosDocumentosRelacionadosOutput = DocumentoRelacionadoDTO[];
