/**
 * Types for consultar_despesas_documentos_relacionados tool
 * Based on Portal da Transparência API: /api-de-dados/despesas/documentos-relacionados
 */

import type { DocumentoRelacionadoDTO } from "../base/api-types";

export interface ConsultarDespesasDocumentosRelacionadosInput {
  /** Código do documento (Unidade Gestora + Gestão + Número do do */
  codigo_documento: string;
  /** Fase da despesa (1 - Empenho, 2 - Liquidação, 3 - Pagamento) */
  fase: number;
}

export type { DocumentoRelacionadoDTO };
export type ConsultarDespesasDocumentosRelacionadosOutput = DocumentoRelacionadoDTO[];
