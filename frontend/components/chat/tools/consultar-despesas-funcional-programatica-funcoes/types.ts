/**
 * Types for consultar_despesas_funcional_programatica_funcoes tool
 * Based on Portal da Transparência API: /api-de-dados/despesas/funcional-programatica/funcoes
 */

import type { FuncionalProgramaticaDTO } from "../base/api-types";

export interface ConsultarDespesasFuncionalProgramaticaFuncoesInput {
  /** anoInicio */
  ano_inicio: number;
  /** codigo */
  codigo?: string;
  /** pagina */
  pagina: number;
}

export type { FuncionalProgramaticaDTO };
export type ConsultarDespesasFuncionalProgramaticaFuncoesOutput = FuncionalProgramaticaDTO[];
