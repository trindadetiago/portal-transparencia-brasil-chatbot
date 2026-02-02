/**
 * Types for consultar_auxilio_emergencial_por_municipio tool
 * Based on Portal da Transparência API: /api-de-dados/auxilio-emergencial-por-municipio
 */

import type { BeneficioPorMunicipioDTO } from "../base/api-types";

export interface ConsultarAuxilioEmergencialPorMunicipioInput {
  /** Ano e mês de referência (AAAAMM) */
  mes_ano: number;
  /** Código IBGE */
  codigo_ibge: string;
  /** Página consultada */
  pagina: number;
}

export type { BeneficioPorMunicipioDTO };
export type ConsultarAuxilioEmergencialPorMunicipioOutput = BeneficioPorMunicipioDTO[];
