/**
 * Types for consultar_licitacoes_modalidades tool
 * Based on Portal da Transparência API: /api-de-dados/licitacoes/modalidades
 */

import type { CodigoDescricaoDTO } from "../base/api-types";

export interface ConsultarLicitacoesModalidadesInput {
}

export type { CodigoDescricaoDTO };
export type ConsultarLicitacoesModalidadesOutput = CodigoDescricaoDTO[];
