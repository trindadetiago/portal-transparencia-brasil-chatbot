/**
 * Types for consultar_bolsa_familia_por_nis tool
 * Based on Portal da Transparência API: /api-de-dados/novo-bolsa-familia-sacado-por-nis
 */

import type { NovoBolsaFamiliaPagoDTO } from "../base/api-types";

export interface ConsultarBolsaFamiliaPorNisInput {
  /** Número de Identificação Social (NIS) - obrigatório */
  nis: string;
  /** Ano/Mês de referência (YYYYMM) */
  ano_mes_referencia?: string;
  /** Página consultada (padrão: 1) */
  pagina?: number;
}

export type { NovoBolsaFamiliaPagoDTO };
export type ConsultarBolsaFamiliaPorNisOutput = NovoBolsaFamiliaPagoDTO[];
