/**
 * Types for consultar_contrato_por_id tool
 * Based on Portal da Transparência API: /api-de-dados/contratos/id
 */

import type { ContratoDTO } from "../base/api-types";

export interface ConsultarContratoPorIdInput {
  /** ID do contrato - obrigatório */
  id: number;
}

export type { ContratoDTO };
export type ConsultarContratoPorIdOutput = ContratoDTO;
