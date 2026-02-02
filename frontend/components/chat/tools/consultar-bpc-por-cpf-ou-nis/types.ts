/**
 * Types for consultar_bpc_por_cpf_ou_nis tool
 * Based on Portal da Transparência API: /api-de-dados/bpc-por-cpf-ou-nis
 */

import type { BPCDTO } from "../base/api-types";

export interface ConsultarBpcPorCpfOuNisInput {
  /** CPF/NIS */
  codigo: string;
  /** Página consultada */
  pagina: number;
}

export type { BPCDTO };
export type ConsultarBpcPorCpfOuNisOutput = BPCDTO[];
