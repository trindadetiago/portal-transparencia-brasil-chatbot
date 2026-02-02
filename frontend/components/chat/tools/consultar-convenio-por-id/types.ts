/**
 * Types for consultar_convenio_por_id tool
 * Based on Portal da Transparência API: /api-de-dados/convenios/id
 */

import type { ConvenioDTO } from "../base/api-types";

export interface ConsultarConvenioPorIdInput {
  /** ID do convênio - obrigatório */
  id: number;
}

export type { ConvenioDTO };
export type ConsultarConvenioPorIdOutput = ConvenioDTO;
