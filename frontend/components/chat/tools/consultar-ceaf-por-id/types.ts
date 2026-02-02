/**
 * Types for consultar_ceaf_por_id tool
 * Based on Portal da Transparência API: /api-de-dados/ceaf/{id}
 */

import type { CeafDTO } from "../base/api-types";

export interface ConsultarCeafPorIdInput {
  /** ID do registro - obrigatório */
  id: number;
}

export type { CeafDTO };
export type ConsultarCeafPorIdOutput = CeafDTO;
