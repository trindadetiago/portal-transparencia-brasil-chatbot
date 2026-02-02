import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray, parseToObject } from "../base/utils/parsers";
import type { ConsultarSituacaoImovelInput, ConsultarSituacaoImovelOutput } from "./types";

export function renderConsultarSituacaoImovelInput(input: ConsultarSituacaoImovelInput) {
  return <InfoField label="Consulta" value={JSON.stringify(input)} />;
}

export function renderConsultarSituacaoImovelOutput(output: ConsultarSituacaoImovelOutput | string) {
  const items = parseToArray<string>(output);
  if (items.length === 0) return <EmptyState message="Nenhum resultado encontrado" />;
  
  return (
    <DataTable
      columns={[
        { key: "value", label: "Situação", render: (v: string) => v || "-" },
      ]}
      data={items.map(item => ({value: item}))}
      maxRows={10}
    />
  );
}