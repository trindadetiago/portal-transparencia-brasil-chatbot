import { DataCard, DataCardContent, DataCardHeader, DataCardTitle } from "../base/components/DataCard";
import { InfoField } from "../base/components/InfoField";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { DateDisplay } from "../base/components/DateDisplay";
import { CPFCNPJDisplay } from "../base/components/CPFCNPJDisplay";
import { SmartStatusBadge, StatusBadge } from "../base/components/StatusBadge";
import { EmptyState } from "../base/components/EmptyState";
import { parseToObject } from "../base/utils/parsers";
import type { ConsultarConvenioPorIdInput, ConsultarConvenioPorIdOutput } from "./types";
import { Handshake } from "lucide-react";

export function renderConsultarConvenioPorIdInput(input: ConsultarConvenioPorIdInput) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] font-semibold text-muted-foreground">ID:</span>
      <StatusBadge status={`#${input.id}`} variant="info" />
    </div>
  );
}

export function renderConsultarConvenioPorIdOutput(output: ConsultarConvenioPorIdOutput | string) {
  const convenio = parseToObject<ConsultarConvenioPorIdOutput>(output);
  
  if (!convenio) {
    return <EmptyState message="Convênio não encontrado" />;
  }
  
  return (
    <DataCard variant="bordered">
      <DataCardHeader>
        <div className="flex items-start gap-2">
          <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
            <Handshake className="w-4 h-4 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <DataCardTitle>Convênio {convenio.dimConvenio?.numero || convenio.id}</DataCardTitle>
            <p className="text-[10px] text-muted-foreground mt-0.5">{convenio.dimConvenio?.objeto || ""}</p>
          </div>
        </div>
      </DataCardHeader>
      
      <DataCardContent>
        <InfoField label="Convenente" value={convenio.convenente?.nome} />
        <InfoField label="CNPJ" value={<CPFCNPJDisplay value={convenio.convenente?.cnpjFormatado || convenio.convenente?.codigoFormatado || ""} />} />
        <InfoField label="Órgão Concedente" value={convenio.orgao?.nome || convenio.unidadeGestora?.nome || ""} />
        <InfoField label="Valor" value={<CurrencyDisplay value={convenio.valor} size="lg" />} />
        <InfoField label="Valor Liberado" value={<CurrencyDisplay value={convenio.valorLiberado} size="sm" />} />
        <InfoField label="Publicação" value={<DateDisplay value={convenio.dataPublicacao} />} />
        <InfoField label="Vigência" value={`${convenio.dataInicioVigencia || ""} - ${convenio.dataFinalVigencia || ""}`} />
        <InfoField label="Situação" value={<SmartStatusBadge status={convenio.situacao} />} />
      </DataCardContent>
    </DataCard>
  );
}
