/**
 * Types for consultar_despesas_favorecidos_finais_por_documento tool
 * Based on Portal da Transparência API: /api-de-dados/despesas/favorecidos-finais-por-documento
 */

import type { ConsultaFavorecidosFinaisPorDocumentoDTO } from "../base/api-types";

export interface ConsultarDespesasFavorecidosFinaisPorDocumentoInput {
  /** Código do documento (Unidade Gestora + Gestão + Número do do */
  codigo_documento: string;
  /** Página consultada */
  pagina: number;
}

export type { ConsultaFavorecidosFinaisPorDocumentoDTO };
export type ConsultarDespesasFavorecidosFinaisPorDocumentoOutput = ConsultaFavorecidosFinaisPorDocumentoDTO[];
