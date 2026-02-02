/**
 * Types for consultar_convenios tool
 * Based on Portal da Transparência API: /api-de-dados/convenios
 */

import type { ConvenioDTO } from "../base/api-types";

export interface ConsultarConveniosInput {
  /** Página consultada (padrão: 1) */
  pagina?: number;
  /** Data inicial (DD/MM/AAAA) */
  data_inicial?: string;
  /** Data final (DD/MM/AAAA) */
  data_final?: string;
  /** CPF ou CNPJ do convenente */
  convenente?: string;
  /** Código SIAFI do órgão concedente */
  codigo_orgao?: string;
  /** Sigla da UF */
  uf?: string;
  /** Situação do convênio */
  situacao?: string;
}

export type { ConvenioDTO };
export type ConsultarConveniosOutput = ConvenioDTO[];
