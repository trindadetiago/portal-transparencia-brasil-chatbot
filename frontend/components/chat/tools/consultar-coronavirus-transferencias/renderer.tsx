import { InfoField } from "../base/components/InfoField";
import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { DateDisplay } from "../base/components/DateDisplay";
import { StatusBadge } from "../base/components/StatusBadge";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import { formatMonthYear, truncate } from "../base/utils/formatters";
import type { ConsultarCoronavirusTransferenciasInput, ConsultarCoronavirusTransferenciasOutput, TransferenciaCoronavirusDTO } from "./types";
import { Activity } from "lucide-react";

export function renderConsultarCoronavirusTransferenciasInput(input: ConsultarCoronavirusTransferenciasInput) {
  return (
    <div className="space-y-1">
      <InfoField label="Período" value={formatMonthYear(input.mes_ano)} />
      {input.uf && <StatusBadge status={`UF: ${input.uf}`} variant="info" />}
    </div>
  );
}

export function renderConsultarCoronavirusTransferenciasOutput(output: ConsultarCoronavirusTransferenciasOutput | string) {
  const transferencias = parseToArray<TransferenciaCoronavirusDTO>(output);
  if (transferencias.length === 0) return <EmptyState message="Nenhuma transferência encontrada" icon={<Activity className="w-4 h-4" />} />;
  
  return (
    <div className="space-y-2">
      {transferencias.slice(0, 5).map((t, i) => (
        <DataCard key={i} variant="bordered" className="border-red-200/50 dark:border-red-900/50 bg-red-50/20 dark:bg-red-950/10">
          <DataCardTitle>{t.favorecido || ""}</DataCardTitle>
          <DataCardContent>
            <InfoField label="Valor" value={<CurrencyDisplay value={parseFloat(t.valor)} />} />
            <InfoField label="Órgão" value={truncate(t.orgao || "", 40)} />
            <InfoField label="Função" value={truncate(t.funcao || "", 30)} />
          </DataCardContent>
        </DataCard>
      ))}
    </div>
  );
}
