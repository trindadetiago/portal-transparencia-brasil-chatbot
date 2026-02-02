/**
 * Renderer for consultar_servidor_por_id tool
 */

import { DataCard, DataCardContent, DataCardHeader, DataCardTitle } from "../base/components/DataCard";
import { InfoField } from "../base/components/InfoField";
import { CPFCNPJDisplay } from "../base/components/CPFCNPJDisplay";
import { DateDisplay } from "../base/components/DateDisplay";
import { StatusBadge } from "../base/components/StatusBadge";
import { EmptyState } from "../base/components/EmptyState";
import { parseToObject } from "../base/utils/parsers";
import type { ConsultarServidorPorIdInput, ConsultarServidorPorIdOutput } from "./types";
import { User } from "lucide-react";

export function renderConsultarServidorPorIdInput(input: ConsultarServidorPorIdInput) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] font-semibold text-muted-foreground">ID:</span>
      <StatusBadge status={`#${input.id}`} variant="info" />
    </div>
  );
}

export function renderConsultarServidorPorIdOutput(output: ConsultarServidorPorIdOutput | string) {
  const servidor = parseToObject<ConsultarServidorPorIdOutput>(output);
  
  if (!servidor) {
    return <EmptyState message="Servidor não encontrado" />;
  }
  
  return (
    <DataCard variant="bordered">
      <DataCardHeader>
        <div className="flex items-start gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <User className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <DataCardTitle>{servidor.servidor?.pessoa?.nome || ""}</DataCardTitle>
            <CPFCNPJDisplay value={servidor.servidor?.pessoa?.cpfFormatado || ""} mask className="text-[9px]" />
          </div>
        </div>
      </DataCardHeader>
      
      <DataCardContent>
        <InfoField label="Tipo" value={servidor.servidor?.tipoServidor || ""} />
        <InfoField label="Situação" value={servidor.servidor?.situacao || ""} />
        <InfoField label="Órgão Lotação" value={servidor.servidor?.orgaoServidorLotacao?.nome || ""} />
        <InfoField label="Órgão Exercício" value={servidor.servidor?.orgaoServidorExercicio?.nome || ""} />
        {servidor.servidor?.funcao && <InfoField label="Função" value={servidor.servidor.funcao.descricaoFuncaoCargo || ""} />}
        {servidor.fichasCargoEfetivo && servidor.fichasCargoEfetivo.length > 0 && (
          <InfoField label="Cargo Efetivo" value={servidor.fichasCargoEfetivo[0].cargo || ""} />
        )}
      </DataCardContent>
    </DataCard>
  );
}
