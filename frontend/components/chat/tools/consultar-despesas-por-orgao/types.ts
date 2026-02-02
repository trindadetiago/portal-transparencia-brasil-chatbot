/**
 * Types for consultar_despesas_por_orgao tool
 * Based on Portal da Transparência API: /api-de-dados/despesas/por-orgao
 */

import type { DespesaAnualPorOrgaoDTO } from "../base/api-types";

export interface ConsultarDespesasPorOrgaoInput {
  /** Ano da despesa - obrigatório */
  ano: number;
  /** Página consultada (padrão: 1) */
  pagina?: number;
  /** Código do órgão superior */
  orgao_superior?: string;
  /** Código do órgão */
  orgao?: string;
}

export type { DespesaAnualPorOrgaoDTO };
export type ConsultarDespesasPorOrgaoOutput = DespesaAnualPorOrgaoDTO[];
