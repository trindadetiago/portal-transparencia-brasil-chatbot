import { DataCard, DataCardContent, DataCardHeader, DataCardTitle } from "../base/components/DataCard";
import { InfoField } from "../base/components/InfoField";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { DateDisplay } from "../base/components/DateDisplay";
import { CPFCNPJDisplay } from "../base/components/CPFCNPJDisplay";
import { StatusBadge } from "../base/components/StatusBadge";
import { EmptyState } from "../base/components/EmptyState";
import { parseToObject } from "../base/utils/parsers";
import type { ConsultarContratoPorIdInput, ConsultarContratoPorIdOutput } from "./types";
import { FileText } from "lucide-react";

export function renderConsultarContratoPorIdInput(input: ConsultarContratoPorIdInput) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] font-semibold text-muted-foreground">ID:</span>
      <StatusBadge status={`#${input.id}`} variant="info" />
    </div>
  );
}

export function renderConsultarContratoPorIdOutput(output: ConsultarContratoPorIdOutput | string) {
  const contrato = parseToObject<ConsultarContratoPorIdOutput>(output);
  
  if (!contrato) {
    return <EmptyState message="Contrato não encontrado" />;
  }
  
  return (
    <DataCard variant="bordered">
      <DataCardHeader>
        <div className="flex items-start gap-2">
          <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
            <FileText className="w-4 h-4 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <DataCardTitle>Contrato {contrato.numero}</DataCardTitle>
            <p className="text-[10px] text-muted-foreground mt-0.5">{contrato.objeto}</p>
          </div>
        </div>
      </DataCardHeader>
      
      <DataCardContent>
        <InfoField label="Fornecedor" value={contrato.fornecedor?.nome} />
        <InfoField label="CNPJ" value={<CPFCNPJDisplay value={contrato.fornecedor?.cnpjFormatado || contrato.fornecedor?.codigoFormatado || ""} />} />
        <InfoField label="Valor Inicial" value={<CurrencyDisplay value={contrato.valorInicialCompra} size="lg" />} />
        <InfoField label="Valor Final" value={<CurrencyDisplay value={contrato.valorFinalCompra} size="lg" />} />
        <InfoField label="Assinatura" value={<DateDisplay value={contrato.dataAssinatura} />} />
        <InfoField label="Vigência" value={`${contrato.dataInicioVigencia || ""} - ${contrato.dataFimVigencia || ""}`} />
        <InfoField label="Modalidade" value={<StatusBadge status={contrato.modalidadeCompra} variant="info" />} />
        <InfoField label="Situação" value={<StatusBadge status={contrato.situacaoContrato} variant="info" />} />
      </DataCardContent>
    </DataCard>
  );
}
