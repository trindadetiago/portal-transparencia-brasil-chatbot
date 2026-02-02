/**
 * Types for consultar_contratos_itens_contratados tool
 * Based on Portal da Transparência API: /api-de-dados/contratos/itens-contratados
 */

import type { ItemContratadoDTO } from "../base/api-types";

export interface ConsultarContratosItensContratadosInput {
  /** ID do registro */
  id: number;
  /** Página consultada */
  pagina: number;
}

export type { ItemContratadoDTO };
export type ConsultarContratosItensContratadosOutput = ItemContratadoDTO[];
