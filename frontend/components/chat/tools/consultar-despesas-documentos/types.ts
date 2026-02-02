/**
 * Types for consultar_despesas_documentos tool
 * Based on Portal da Transparência API: /api-de-dados/despesas/documentos
 */

import type { DespesasPorDocumentoDTO } from "../base/api-types";

export interface ConsultarDespesasDocumentosInput {
  /** Unidade gestora emitente (código SIAFI) */
  unidade_gestora?: string;
  /** Gestão (código SIAFI) */
  gestao?: string;
  /** Data de emissão (DD/MM/AAAA) */
  data_emissao: string;
  /** Fase da despesa (1 - Empenho, 2 - Liquidação, 3 - Pagamento) */
  fase: number;
  /** Página consultada */
  pagina: number;
}

export type { DespesasPorDocumentoDTO };
export type ConsultarDespesasDocumentosOutput = DespesasPorDocumentoDTO[];
