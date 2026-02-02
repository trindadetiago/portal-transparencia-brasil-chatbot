/**
 * Types for consultar_despesas_funcional_programatica_listar tool
 * Based on Portal da Transparência API: /api-de-dados/despesas/funcional-programatica/listar
 */

import type { DimFuncionalProgramaticaDTO } from "../base/api-types";

export interface ConsultarDespesasFuncionalProgramaticaListarInput {
  /** ano */
  ano: number;
  /** pagina */
  pagina: number;
}

export type { DimFuncionalProgramaticaDTO };
export type ConsultarDespesasFuncionalProgramaticaListarOutput = DimFuncionalProgramaticaDTO[];
