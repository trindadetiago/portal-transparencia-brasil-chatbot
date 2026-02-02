import { DataCard, DataCardContent, DataCardHeader, DataCardTitle } from "../base/components/DataCard";
import { InfoField } from "../base/components/InfoField";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { DateDisplay } from "../base/components/DateDisplay";
import { SmartStatusBadge, StatusBadge } from "../base/components/StatusBadge";
import { EmptyState } from "../base/components/EmptyState";
import { parseToObject } from "../base/utils/parsers";
import type { ConsultarLicitacaoPorIdInput, ConsultarLicitacaoPorIdOutput } from "./types";
import { Gavel } from "lucide-react";

export function renderConsultarLicitacaoPorIdInput(input: ConsultarLicitacaoPorIdInput) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] font-semibold text-muted-foreground">ID:</span>
      <StatusBadge status={`#${input.id}`} variant="info" />
    </div>
  );
}

export function renderConsultarLicitacaoPorIdOutput(output: ConsultarLicitacaoPorIdOutput | string) {
  const licitacao = parseToObject<ConsultarLicitacaoPorIdOutput>(output);
  
  if (!licitacao) {
    return <EmptyState message="Licitação não encontrada" />;
  }
  
  return (
    <DataCard variant="bordered">
      <DataCardHeader>
        <div className="flex items-start gap-2">
          <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
            <Gavel className="w-4 h-4 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <DataCardTitle>Licitação {licitacao.licitacao?.numero || licitacao.id}</DataCardTitle>
            <p className="text-[10px] text-muted-foreground mt-0.5">{licitacao.licitacao?.objeto || ""}</p>
          </div>
        </div>
      </DataCardHeader>
      
      <DataCardContent>
        <InfoField label="Órgão" value={licitacao.unidadeGestora?.nome || ""} />
        <InfoField label="Modalidade" value={<StatusBadge status={licitacao.modalidadeLicitacao} variant="info" />} />
        <InfoField label="Valor" value={<CurrencyDisplay value={licitacao.valor} size="lg" />} />
        <InfoField label="Abertura" value={<DateDisplay value={licitacao.dataAbertura} />} />
        <InfoField label="Situação" value={<SmartStatusBadge status={licitacao.situacaoCompra} />} />
        {licitacao.instrumentoLegal && <InfoField label="Instrumento Legal" value={licitacao.instrumentoLegal} />}
      </DataCardContent>
    </DataCard>
  );
}
