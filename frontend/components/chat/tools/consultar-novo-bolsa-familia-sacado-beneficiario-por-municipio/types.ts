/**
 * Types for consultar_novo_bolsa_familia_sacado_beneficiario_por_municipio tool
 * Based on Portal da Transparência API: /api-de-dados/novo-bolsa-familia-sacado-beneficiario-por-municipio
 */

import type { NovoBolsaFamiliaPagoDTO } from "../base/api-types";

export interface ConsultarNovoBolsaFamiliaSacadoBeneficiarioPorMunicipioInput {
  /** mesAno */
  mes_ano: number;
  /** codigoIbge */
  codigo_ibge: string;
  /** pagina */
  pagina?: number;
}

export type { NovoBolsaFamiliaPagoDTO };
export type ConsultarNovoBolsaFamiliaSacadoBeneficiarioPorMunicipioOutput = NovoBolsaFamiliaPagoDTO[];
