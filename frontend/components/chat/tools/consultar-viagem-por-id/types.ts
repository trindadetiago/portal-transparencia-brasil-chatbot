/**
 * Types for consultar_viagem_por_id tool
 * Based on Portal da Transparência API: /api-de-dados/viagens/{id}
 */

import type { ViagemDTO } from "../base/api-types";

export interface ConsultarViagemPorIdInput {
  /** ID da viagem - obrigatório */
  id: number;
}

export type { ViagemDTO };
export type ConsultarViagemPorIdOutput = ViagemDTO;
