/**
 * Types for consultar_notas_fiscais tool
 * Based on Portal da Transparência API: /api-de-dados/notas-fiscais
 */

import type { NotaFiscalDTO } from "../base/api-types";

export interface ConsultarNotasFiscaisInput {
  /** Página consultada (padrão: 1) */
  pagina?: number;
  /** CNPJ do emitente */
  cnpj_emitente?: string;
  /** Código do órgão */
  codigo_orgao?: string;
  /** Nome do produto */
  nome_produto?: string;
}

export type { NotaFiscalDTO };
export type ConsultarNotasFiscaisOutput = NotaFiscalDTO[];
