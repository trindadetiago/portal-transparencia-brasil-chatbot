/**
 * Types for consultar_nota_fiscal_por_chave tool
 * Based on Portal da Transparência API: /api-de-dados/notas-fiscais-por-chave
 */

import type { DetalheNotaFiscalDTO } from "../base/api-types";

export interface ConsultarNotaFiscalPorChaveInput {
  /** Chave única da nota fiscal */
  chave_unica_nota_fiscal: string;
}

export type { DetalheNotaFiscalDTO };
export type ConsultarNotaFiscalPorChaveOutput = DetalheNotaFiscalDTO;
