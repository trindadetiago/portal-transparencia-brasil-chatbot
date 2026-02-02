/**
 * Types for consultar_bolsa_familia_sacado_beneficiario_por_municipio tool
 * Based on Portal da Transparência API: /api-de-dados/bolsa-familia-sacado-beneficiario-por-municipio
 */

import type { BolsaFamiliaPagoDTO } from "../base/api-types";

export interface ConsultarBolsaFamiliaSacadoBeneficiarioPorMunicipioInput {
  /** Ano e mês de referência (AAAAMM) */
  mes_ano: number;
  /** Código IBGE */
  codigo_ibge: string;
  /** Página consultada */
  pagina: number;
}

export type { BolsaFamiliaPagoDTO };
export type ConsultarBolsaFamiliaSacadoBeneficiarioPorMunicipioOutput = BolsaFamiliaPagoDTO[];
