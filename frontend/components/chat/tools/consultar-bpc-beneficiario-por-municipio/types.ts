/**
 * Types for consultar_bpc_beneficiario_por_municipio tool
 * Based on Portal da Transparência API: /api-de-dados/bpc-beneficiario-por-municipio
 */

import type { BPCDTO } from "../base/api-types";

export interface ConsultarBpcBeneficiarioPorMunicipioInput {
  /** Ano e mês de referência (AAAAMM) */
  mes_ano: number;
  /** Código IBGE */
  codigo_ibge: string;
  /** Página consultada */
  pagina: number;
}

export type { BPCDTO };
export type ConsultarBpcBeneficiarioPorMunicipioOutput = BPCDTO[];
