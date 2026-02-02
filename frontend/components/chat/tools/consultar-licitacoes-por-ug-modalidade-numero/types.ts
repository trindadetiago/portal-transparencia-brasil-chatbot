/**
 * Types for consultar_licitacoes_por_ug_modalidade_numero tool
 * Based on Portal da Transparência API: /api-de-dados/licitacoes/por-ug-modalidade-numero
 */

import type { LicitacaoDTO } from "../base/api-types";

export interface ConsultarLicitacoesPorUgModalidadeNumeroInput {
  /** <a href='/swagger-ui.html#!/Licita231245es32do32Poder32Execu */
  codigo_ug: string;
  /** Número da Licitação (NNNNNAAAA) */
  numero: string;
  /** <a href='/swagger-ui.html#!/Licita231245es32do32Poder32Execu */
  codigo_modalidade: string;
}

export type { LicitacaoDTO };
export type ConsultarLicitacoesPorUgModalidadeNumeroOutput = LicitacaoDTO[];
