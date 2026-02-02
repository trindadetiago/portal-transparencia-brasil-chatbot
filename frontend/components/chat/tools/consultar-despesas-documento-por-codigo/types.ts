/**
 * Types for consultar_despesas_documento_por_codigo tool
 * Based on Portal da Transparência API: /api-de-dados/despesas/documentos/{codigo}
 */

import type { DespesasPorDocumentoDTO } from "../base/api-types";

export interface ConsultarDespesasDocumentoPorCodigoInput {
  /** Código do registro */
  codigo: string;
}

export type { DespesasPorDocumentoDTO };
export type ConsultarDespesasDocumentoPorCodigoOutput = DespesasPorDocumentoDTO;
