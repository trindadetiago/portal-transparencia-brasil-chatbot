/**
 * Types for consultar_despesas_funcional_programatica_programas tool
 * Based on Portal da Transparência API: /api-de-dados/despesas/funcional-programatica/programas
 */

import type { FuncionalProgramaticaDTO } from "../base/api-types";

export interface ConsultarDespesasFuncionalProgramaticaProgramasInput {
  /** anoInicio */
  ano_inicio: number;
  /** codigo */
  codigo?: string;
  /** pagina */
  pagina: number;
}

export type { FuncionalProgramaticaDTO };
export type ConsultarDespesasFuncionalProgramaticaProgramasOutput = FuncionalProgramaticaDTO[];
