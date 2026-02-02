/**
 * Types for consultar_emendas_documentos tool
 * Based on Portal da Transparência API: /api-de-dados/emendas/documentos/{codigo}
 */

import type { DocumentoRelacionadoEmendaDTO } from "../base/api-types";

export interface ConsultarEmendasDocumentosInput {
  /** Código da emenda */
  codigo: string;
  /** Página consultada */
  pagina: number;
}

export type { DocumentoRelacionadoEmendaDTO };
export type ConsultarEmendasDocumentosOutput = DocumentoRelacionadoEmendaDTO[];
