/**
 * Types for consultar_despesas_funcional_programatica_subfuncoes tool
 * Based on Portal da Transparência API: /api-de-dados/despesas/funcional-programatica/subfuncoes
 */

import type { FuncionalProgramaticaDTO } from "../base/api-types";

export interface ConsultarDespesasFuncionalProgramaticaSubfuncoesInput {
  /** anoInicio */
  ano_inicio: number;
  /** codigo */
  codigo?: string;
  /** pagina */
  pagina: number;
}

export type { FuncionalProgramaticaDTO };
export type ConsultarDespesasFuncionalProgramaticaSubfuncoesOutput = FuncionalProgramaticaDTO[];
