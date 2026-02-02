/**
 * Types for consultar_despesas_tipo_transferencia tool
 * Based on Portal da Transparência API: /api-de-dados/despesas/tipo-transferencia
 */

import type { IdDescricaoDTO } from "../base/api-types";

export interface ConsultarDespesasTipoTransferenciaInput {
}

export type { IdDescricaoDTO };
export type ConsultarDespesasTipoTransferenciaOutput = IdDescricaoDTO[];
