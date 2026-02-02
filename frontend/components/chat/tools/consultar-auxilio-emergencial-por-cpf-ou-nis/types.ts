/**
 * Types for consultar_auxilio_emergencial_por_cpf_ou_nis tool
 * Based on Portal da Transparência API: /api-de-dados/auxilio-emergencial-por-cpf-ou-nis
 */

import type { AuxilioEmergencialDTO } from "../base/api-types";

export interface ConsultarAuxilioEmergencialPorCpfOuNisInput {
  /** CPF/NIS Beneficiário */
  codigo_beneficiario?: string;
  /** CPF/NIS Responsável Familiar */
  codigo_responsavel_familiar?: string;
  /** Página consultada */
  pagina: number;
}

export type { AuxilioEmergencialDTO };
export type ConsultarAuxilioEmergencialPorCpfOuNisOutput = AuxilioEmergencialDTO[];
