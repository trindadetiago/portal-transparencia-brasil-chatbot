/**
 * Types for consultar_peti_por_cpf_ou_nis tool
 * Based on Portal da Transparência API: /api-de-dados/peti-por-cpf-ou-nis
 */

import type { PetiDTO } from "../base/api-types";

export interface ConsultarPetiPorCpfOuNisInput {
  /** CPF/NIS */
  codigo: string;
  /** Página consultada */
  pagina: number;
}

export type { PetiDTO };
export type ConsultarPetiPorCpfOuNisOutput = PetiDTO[];
