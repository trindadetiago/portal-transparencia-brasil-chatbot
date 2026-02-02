/**
 * Types for consultar_bpc_por_municipio tool
 * Based on Portal da Transparência API: /api-de-dados/bpc-por-municipio
 */

import type { BeneficioPorMunicipioDTO } from "../base/api-types";

export interface ConsultarBpcPorMunicipioInput {
  /** Ano e mês de referência (AAAAMM) */
  mes_ano: number;
  /** Código IBGE */
  codigo_ibge: string;
  /** Página consultada */
  pagina: number;
}

export type { BeneficioPorMunicipioDTO };
export type ConsultarBpcPorMunicipioOutput = BeneficioPorMunicipioDTO[];
