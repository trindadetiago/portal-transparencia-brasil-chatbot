import { InfoField } from "../base/components/InfoField";
import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { DateDisplay } from "../base/components/DateDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { parseToObject } from "../base/utils/parsers";
import type { ConsultarAcordoLenienciaPorIdInput, ConsultarAcordoLenienciaPorIdOutput, AcordosLenienciaDTO } from "./types";
import { FileText } from "lucide-react";

export function renderConsultarAcordoLenienciaPorIdInput(input: ConsultarAcordoLenienciaPorIdInput) {
  return <InfoField label="ID" value={input.id.toString()} />;
}

export function renderConsultarAcordoLenienciaPorIdOutput(output: ConsultarAcordoLenienciaPorIdOutput | string) {
  const acordo = parseToObject<AcordosLenienciaDTO>(output);
  if (!acordo) return <EmptyState message="Acordo não encontrado" icon={<FileText className="w-4 h-4" />} />;
  
  return (
    <DataCard variant="bordered">
      <DataCardTitle>Acordo de Leniência #{acordo.id}</DataCardTitle>
      <DataCardContent>
        <div className="space-y-2">
          <InfoField label="Órgão Responsável" value={acordo.orgaoResponsavel} />
          <InfoField label="Situação" value={acordo.situacaoAcordo} />
          <InfoField label="Data Início" value={<DateDisplay value={acordo.dataInicioAcordo} />} />
          <InfoField label="Data Fim" value={<DateDisplay value={acordo.dataFimAcordo} />} />
          <InfoField label="Quantidade de Sanções" value={acordo.quantidade?.toLocaleString('pt-BR')} />
        </div>
      </DataCardContent>
    </DataCard>
  );
}
