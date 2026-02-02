/**
 * Types for consultar_licitacoes_contratos_relacionados tool
 * Based on Portal da Transparência API: /api-de-dados/licitacoes/contratos-relacionados-licitacao
 */

import type { ContratoDTO } from "../base/api-types";

export interface ConsultarLicitacoesContratosRelacionadosInput {
  /** <a href='/swagger-ui.html#!/Licita231245es32do32Poder32Execu */
  codigo_ug: string;
  /** Número da Licitação (NNNNNAAAA) */
  numero: string;
  /** <a href='/swagger-ui.html#!/Licita231245es32do32Poder32Execu */
  codigo_modalidade: string;
}

export type { ContratoDTO };
export type ConsultarLicitacoesContratosRelacionadosOutput = ContratoDTO[];
