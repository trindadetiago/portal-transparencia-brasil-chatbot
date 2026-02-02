/**
 * Types for consultar_servidores_funcoes_e_cargos tool
 * Based on Portal da Transparência API: /api-de-dados/servidores/funcoes-e-cargos
 */

import type { FuncaoServidorDTO } from "../base/api-types";

export interface ConsultarServidoresFuncoesECargosInput {
  /** Página consultada */
  pagina: number;
}

export type { FuncaoServidorDTO };
export type ConsultarServidoresFuncoesECargosOutput = FuncaoServidorDTO[];
