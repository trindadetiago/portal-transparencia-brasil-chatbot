import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray, parseToObject } from "../base/utils/parsers";
import type { ConsultarDespesasFavorecidosFinaisPorDocumentoInput, ConsultarDespesasFavorecidosFinaisPorDocumentoOutput, ConsultaFavorecidosFinaisPorDocumentoDTO } from "./types";

export function renderConsultarDespesasFavorecidosFinaisPorDocumentoInput(input: ConsultarDespesasFavorecidosFinaisPorDocumentoInput) {
  return <InfoField label="Consulta" value={JSON.stringify(input)} />;
}

export function renderConsultarDespesasFavorecidosFinaisPorDocumentoOutput(output: ConsultarDespesasFavorecidosFinaisPorDocumentoOutput | string) {
  const items = parseToArray<ConsultaFavorecidosFinaisPorDocumentoDTO>(output);
  if (items.length === 0) return <EmptyState message="Nenhum resultado encontrado" />;
  
  return (
    <DataTable
      columns={[
        { key: "id", label: "ID", render: (v: number) => v?.toString() || "-" },
      ]}
      data={items}
      maxRows={5}
    />
  );
}