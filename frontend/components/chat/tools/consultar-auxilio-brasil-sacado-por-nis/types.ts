/**
 * Types for consultar_auxilio_brasil_sacado_por_nis tool
 * Based on Portal da Transparência API: /api-de-dados/auxilio-brasil-sacado-por-nis
 */

import type { AuxilioBrasilPagoDTO } from "../base/api-types";

export interface ConsultarAuxilioBrasilSacadoPorNisInput {
  /** NIS (sem máscara, somente números) */
  nis: string;
  /** Ano e mês de referência (AAAAMM) */
  ano_mes_referencia?: number;
  /** Ano e mês de competência (AAAAMM) */
  ano_mes_competencia?: number;
  /** Página consultada */
  pagina: number;
}

export type { AuxilioBrasilPagoDTO };
export type ConsultarAuxilioBrasilSacadoPorNisOutput = AuxilioBrasilPagoDTO[];
