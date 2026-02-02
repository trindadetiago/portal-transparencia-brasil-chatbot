/**
 * Types for consultar_safra_por_cpf_ou_nis tool
 * Based on Portal da Transparência API: /api-de-dados/safra-codigo-por-cpf-ou-nis
 */

import type { SafraDTO } from "../base/api-types";

export interface ConsultarSafraPorCpfOuNisInput {
  /** CPF/NIS */
  codigo: string;
  /** Página consultada */
  pagina: number;
}

export type { SafraDTO };
export type ConsultarSafraPorCpfOuNisOutput = SafraDTO[];
