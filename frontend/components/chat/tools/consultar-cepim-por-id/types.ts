/**
 * Types for consultar_cepim_por_id tool
 * Based on Portal da Transparência API: /api-de-dados/cepim/{id}
 */

import type { CepimDTO } from "../base/api-types";

export interface ConsultarCepimPorIdInput {
  /** ID do registro - obrigatório */
  id: number;
}

export type { CepimDTO };
export type ConsultarCepimPorIdOutput = CepimDTO;
