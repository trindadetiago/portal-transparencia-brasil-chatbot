/**
 * Types for consultar_despesas_itens_empenho tool
 * Based on Portal da Transparência API: /api-de-dados/despesas/itens-de-empenho
 */

import type { EmpenhoComprasDTO } from "../base/api-types";

export interface ConsultarDespesasItensEmpenhoInput {
  /** Código do empenho (Unidade Gestora + Gestão + Número do docu */
  codigo_documento: string;
  /** Página consultada */
  pagina: number;
}

export type { EmpenhoComprasDTO };
export type ConsultarDespesasItensEmpenhoOutput = EmpenhoComprasDTO[];
