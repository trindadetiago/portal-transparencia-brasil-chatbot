/**
 * Types for consultar_licitacoes tool
 * Based on Portal da Transparência API: /api-de-dados/licitacoes
 */

import type { LicitacaoDTO } from "../base/api-types";

export interface ConsultarLicitacoesInput {
  /** Código SIAFI do órgão - obrigatório */
  codigo_orgao: string;
  /** Página consultada (padrão: 1) */
  pagina?: number;
  /** Data inicial (DD/MM/AAAA) */
  data_inicial?: string;
  /** Data final (DD/MM/AAAA) */
  data_final?: string;
}

export type { LicitacaoDTO };
export type ConsultarLicitacoesOutput = LicitacaoDTO[];
