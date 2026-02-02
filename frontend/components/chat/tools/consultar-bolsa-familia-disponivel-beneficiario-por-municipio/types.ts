/**
 * Types for consultar_bolsa_familia_disponivel_beneficiario_por_municipio tool
 * Based on Portal da Transparência API: /api-de-dados/bolsa-familia-disponivel-beneficiario-por-municipio
 */

import type { BolsaFamiliaDTO } from "../base/api-types";

export interface ConsultarBolsaFamiliaDisponivelBeneficiarioPorMunicipioInput {
  /** Ano e mês de referência (AAAAMM) */
  mes_ano: number;
  /** Código IBGE */
  codigo_ibge: string;
  /** Página consultada */
  pagina: number;
}

export type { BolsaFamiliaDTO };
export type ConsultarBolsaFamiliaDisponivelBeneficiarioPorMunicipioOutput = BolsaFamiliaDTO[];
