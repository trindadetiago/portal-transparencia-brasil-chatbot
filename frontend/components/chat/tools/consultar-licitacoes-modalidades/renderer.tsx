import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray, parseToObject } from "../base/utils/parsers";
import type { ConsultarLicitacoesModalidadesInput, ConsultarLicitacoesModalidadesOutput, CodigoDescricaoDTO } from "./types";

export function renderConsultarLicitacoesModalidadesInput(input: ConsultarLicitacoesModalidadesInput) {
  return <InfoField label="Consulta" value={JSON.stringify(input)} />;
}

export function renderConsultarLicitacoesModalidadesOutput(output: ConsultarLicitacoesModalidadesOutput | string) {
  const items = parseToArray<CodigoDescricaoDTO>(output);
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