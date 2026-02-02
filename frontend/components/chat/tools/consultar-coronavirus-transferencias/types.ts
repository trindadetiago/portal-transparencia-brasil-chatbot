/**
 * Types for consultar_coronavirus_transferencias tool
 * Based on Portal da Transparência API: /api-de-dados/coronavirus/transferencias
 */

import type { TransferenciaCoronavirusDTO } from "../base/api-types";

export interface ConsultarCoronavirusTransferenciasInput {
  /** Mês/Ano no formato YYYYMM (ex: 202003) - obrigatório */
  mes_ano: string;
  /** Página consultada (padrão: 1) */
  pagina?: number;
  /** Código do órgão */
  codigo_orgao?: string;
  /** Sigla da UF */
  uf?: string;
  /** Código IBGE do município */
  codigo_ibge?: string;
}

export type { TransferenciaCoronavirusDTO };
export type ConsultarCoronavirusTransferenciasOutput = TransferenciaCoronavirusDTO[];
