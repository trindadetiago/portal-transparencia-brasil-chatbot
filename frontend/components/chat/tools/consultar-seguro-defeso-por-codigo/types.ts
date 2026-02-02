/**
 * Types for consultar_seguro_defeso_por_codigo tool
 * Based on Portal da Transparência API: /api-de-dados/seguro-defeso-codigo
 */

import type { SeguroDefesoDTO } from "../base/api-types";

export interface ConsultarSeguroDefesoPorCodigoInput {
  /** CPF/NIS */
  codigo: string;
  /** Página consultada */
  pagina: number;
}

export type { SeguroDefesoDTO };
export type ConsultarSeguroDefesoPorCodigoOutput = SeguroDefesoDTO[];
