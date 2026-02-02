import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray, parseToObject } from "../base/utils/parsers";
import type { ConsultarLicitacoesUgsInput, ConsultarLicitacoesUgsOutput, UnidadeGestoraDTO } from "./types";

export function renderConsultarLicitacoesUgsInput(input: ConsultarLicitacoesUgsInput) {
  return <InfoField label="Consulta" value={JSON.stringify(input)} />;
}

export function renderConsultarLicitacoesUgsOutput(output: ConsultarLicitacoesUgsOutput | string) {
  const items = parseToArray<UnidadeGestoraDTO>(output);
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