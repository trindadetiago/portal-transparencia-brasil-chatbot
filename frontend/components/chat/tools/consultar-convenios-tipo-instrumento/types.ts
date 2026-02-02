/**
 * Types for consultar_convenios_tipo_instrumento tool
 * Based on Portal da Transparência API: /api-de-dados/convenios/tipo-instrumento
 */

import type { TipoInstrumentoDTO } from "../base/api-types";

export interface ConsultarConveniosTipoInstrumentoInput {
}

export type { TipoInstrumentoDTO };
export type ConsultarConveniosTipoInstrumentoOutput = TipoInstrumentoDTO[];
