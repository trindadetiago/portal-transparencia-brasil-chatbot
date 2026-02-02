/**
 * Types for consultar_bolsa_familia_sacado_por_nis tool
 * Based on Portal da Transparência API: /api-de-dados/bolsa-familia-sacado-por-nis
 */

import type { BolsaFamiliaPagoDTO } from "../base/api-types";

export interface ConsultarBolsaFamiliaSacadoPorNisInput {
  /** NIS (sem máscara, somente números) */
  nis: string;
  /** Ano e mês de referência (AAAAMM) */
  ano_mes_referencia?: number;
  /** Ano e mês de competência (AAAAMM) */
  ano_mes_competencia?: number;
  /** Página consultada */
  pagina: number;
}

export type { BolsaFamiliaPagoDTO };
export type ConsultarBolsaFamiliaSacadoPorNisOutput = BolsaFamiliaPagoDTO[];
