/**
 * Types for consultar_acordo_leniencia_por_id tool
 * Based on Portal da Transparência API: /api-de-dados/acordos-leniencia/{id}
 */

import type { AcordosLenienciaDTO } from "../base/api-types";

export interface ConsultarAcordoLenienciaPorIdInput {
  /** ID do acordo - obrigatório */
  id: number;
}

export type { AcordosLenienciaDTO };
export type ConsultarAcordoLenienciaPorIdOutput = AcordosLenienciaDTO;
