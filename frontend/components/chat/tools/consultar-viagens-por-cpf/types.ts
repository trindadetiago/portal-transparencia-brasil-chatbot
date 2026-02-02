/**
 * Types for consultar_viagens_por_cpf tool
 * Based on Portal da Transparência API: /api-de-dados/viagens-por-cpf
 */

import type { ViagemDTO } from "../base/api-types";

export interface ConsultarViagensPorCpfInput {
  /** CPF do servidor - obrigatório */
  cpf: string;
  /** Página consultada (padrão: 1) */
  pagina?: number;
}

// Re-export from api-types for convenience
export type { ViagemDTO } from "../base/api-types";

export type ConsultarViagensPorCpfOutput = ViagemDTO[];
