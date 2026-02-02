/**
 * Types for consultar_despesas_empenhos_impactados tool
 * Based on Portal da Transparência API: /api-de-dados/despesas/empenhos-impactados
 */

import type { EmpenhoImpactadoBasicoDTO } from "../base/api-types";

export interface ConsultarDespesasEmpenhosImpactadosInput {
  /** Código do documento (Unidade Gestora + Gestão + Número do do */
  codigo_documento: string;
  /** Fase da despesa (2 - Liquidação, 3 - Pagamento) */
  fase: number;
  /** Página consultada */
  pagina: number;
}

export type { EmpenhoImpactadoBasicoDTO };
export type ConsultarDespesasEmpenhosImpactadosOutput = EmpenhoImpactadoBasicoDTO[];
