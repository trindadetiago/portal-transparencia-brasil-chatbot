/**
 * Types for consultar_despesas_documentos_por_favorecido tool
 * Based on Portal da Transparência API: /api-de-dados/despesas/documentos-por-favorecido
 */

import type { DespesasPorDocumentoDTO } from "../base/api-types";

export interface ConsultarDespesasDocumentosPorFavorecidoInput {
  /** Código do Favorecido (CPF, CNPJ ou código do SIAFI) */
  codigo_pessoa: string;
  /** Fase da despesa (1 - Empenho, 2 - Liquidação, 3 - Pagamento) */
  fase: number;
  /** Ano de emissão do documento */
  ano: number;
  /** Código da unidade gestora emissora do documento */
  ug?: string;
  /** Código da gestão do documento */
  gestao?: string;
  /** Ordenação de Resultado (1 - Valor Ascendente, 2 - Valor Desc */
  ordenacao_resultado?: number;
  /** Página consultada */
  pagina: number;
}

export type { DespesasPorDocumentoDTO };
export type ConsultarDespesasDocumentosPorFavorecidoOutput = DespesasPorDocumentoDTO[];
