/**
 * Types for consultar_despesas_por_funcional_programatica tool
 * Based on Portal da Transparência API: /api-de-dados/despesas/por-funcional-programatica
 */

import type { DespesaAnualPorFuncaoESubfuncaoDTO } from "../base/api-types";

export interface ConsultarDespesasPorFuncionalProgramaticaInput {
  /** Ano da despesa (AAAA) */
  ano: number;
  /** Função (código SIAFI) */
  funcao?: string;
  /** Subfunção (código SIAFI) */
  subfuncao?: string;
  /** Programa (código SIAFI) */
  programa?: string;
  /** Ação (código SIAFI) */
  acao?: string;
  /** Página consultada */
  pagina: number;
}

export type { DespesaAnualPorFuncaoESubfuncaoDTO };
export type ConsultarDespesasPorFuncionalProgramaticaOutput = DespesaAnualPorFuncaoESubfuncaoDTO[];
