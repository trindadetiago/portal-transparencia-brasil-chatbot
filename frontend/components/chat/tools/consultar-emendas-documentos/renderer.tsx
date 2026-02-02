import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray, parseToObject } from "../base/utils/parsers";
import type { ConsultarEmendasDocumentosInput, ConsultarEmendasDocumentosOutput, DocumentoRelacionadoEmendaDTO } from "./types";

export function renderConsultarEmendasDocumentosInput(input: ConsultarEmendasDocumentosInput) {
  return <InfoField label="Consulta" value={JSON.stringify(input)} />;
}

export function renderConsultarEmendasDocumentosOutput(output: ConsultarEmendasDocumentosOutput | string) {
  const items = parseToArray<DocumentoRelacionadoEmendaDTO>(output);
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