/**
 * Types for consultar_despesas_itens_empenho_historico tool
 * Based on Portal da Transparência API: /api-de-dados/despesas/itens-de-empenho/historico
 */

import type { HistoricoSubItemEmpenhoDTO } from "../base/api-types";

export interface ConsultarDespesasItensEmpenhoHistoricoInput {
  /** Código do empenho (Unidade Gestora + Gestão + Número do documento) */
  codigo_documento: string;
  /** Número sequencial do item de empenho */
  numero_item: string;
  /** Página consultada */
  pagina: number;
}

export type { HistoricoSubItemEmpenhoDTO };
export type ConsultarDespesasItensEmpenhoHistoricoOutput = HistoricoSubItemEmpenhoDTO[];
