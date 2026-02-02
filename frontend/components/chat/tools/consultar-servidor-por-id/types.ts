/**
 * Types for consultar_servidor_por_id tool
 * Based on Portal da Transparência API: /api-de-dados/servidores/{id}
 */

import type { CadastroServidorDTO } from "../base/api-types";

export interface ConsultarServidorPorIdInput {
  /** ID do servidor (idServidorAposentadoPensionista) - obrigatório */
  id: number;
}

export type { CadastroServidorDTO };
export type ConsultarServidorPorIdOutput = CadastroServidorDTO;
