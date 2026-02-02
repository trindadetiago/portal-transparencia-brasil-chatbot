import { InfoField } from "../base/components/InfoField";
import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { DateDisplay } from "../base/components/DateDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { parseToObject } from "../base/utils/parsers";
import type { ConsultarViagemPorIdInput, ConsultarViagemPorIdOutput, ViagemDTO } from "./types";
import { Plane } from "lucide-react";

export function renderConsultarViagemPorIdInput(input: ConsultarViagemPorIdInput) {
  return <InfoField label="ID" value={input.id.toString()} />;
}

export function renderConsultarViagemPorIdOutput(output: ConsultarViagemPorIdOutput | string) {
  const viagem = parseToObject<ViagemDTO>(output);
  if (!viagem) return <EmptyState message="Viagem não encontrada" icon={<Plane className="w-4 h-4" />} />;
  
  return (
    <DataCard variant="bordered">
      <DataCardTitle>Viagem #{viagem.id}</DataCardTitle>
      <DataCardContent>
        <div className="space-y-2">
          <InfoField label="Viajante" value={viagem.beneficiario?.nome || "-"} />
          <InfoField label="Motivo" value={viagem.viagem?.motivo || "-"} />
          <InfoField label="Órgão" value={viagem.orgao?.sigla || viagem.orgao?.nome || "-"} />
          <InfoField label="Situação" value={viagem.situacao || "-"} />
          <InfoField label="Data Início" value={<DateDisplay value={viagem.dataInicioAfastamento} />} />
          <InfoField label="Data Fim" value={<DateDisplay value={viagem.dataFimAfastamento} />} />
          <InfoField label="Valor Total" value={<CurrencyDisplay value={viagem.valorTotalViagem} size="sm" />} />
        </div>
      </DataCardContent>
    </DataCard>
  );
}
