/**
 * Types for consultar_despesas_funcional_programatica_acoes tool
 * Based on Portal da Transparência API: /api-de-dados/despesas/funcional-programatica/acoes
 */

import type { FuncionalProgramaticaDTO } from "../base/api-types";

export interface ConsultarDespesasFuncionalProgramaticaAcoesInput {
  /** anoInicio */
  ano_inicio: number;
  /** codigo */
  codigo?: string;
  /** pagina */
  pagina: number;
}

export type { FuncionalProgramaticaDTO };
export type ConsultarDespesasFuncionalProgramaticaAcoesOutput = FuncionalProgramaticaDTO[];
