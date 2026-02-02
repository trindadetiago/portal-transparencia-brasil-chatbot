/**
 * Types for consultar_licitacoes_empenhos tool
 * Based on Portal da Transparência API: /api-de-dados/licitacoes/empenhos
 */

import type { EmpenhoComprasDTO } from "../base/api-types";

export interface ConsultarLicitacoesEmpenhosInput {
  /** <a href='/swagger-ui.html#!/Licita231245es32do32Poder32Execu */
  codigo_ug: string;
  /** Número da Licitação (NNNNNAAAA) */
  numero: string;
  /** <a href='/swagger-ui.html#!/Licita231245es32do32Poder32Execu */
  codigo_modalidade: string;
  /** Página consultada */
  pagina: number;
}

export type { EmpenhoComprasDTO };
export type ConsultarLicitacoesEmpenhosOutput = EmpenhoComprasDTO[];
