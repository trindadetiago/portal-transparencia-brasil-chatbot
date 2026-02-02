import { InfoField } from "../base/components/InfoField";
import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { DateDisplay } from "../base/components/DateDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { parseToObject } from "../base/utils/parsers";
import type { ConsultarCeafPorIdInput, ConsultarCeafPorIdOutput, CeafDTO } from "./types";
import { AlertTriangle } from "lucide-react";

export function renderConsultarCeafPorIdInput(input: ConsultarCeafPorIdInput) {
  return <InfoField label="ID" value={input.id.toString()} />;
}

export function renderConsultarCeafPorIdOutput(output: ConsultarCeafPorIdOutput | string) {
  const registro = parseToObject<CeafDTO>(output);
  if (!registro) return <EmptyState message="Registro não encontrado" icon={<AlertTriangle className="w-4 h-4" />} />;
  
  return (
    <DataCard variant="bordered">
      <DataCardTitle>CEAF #{registro.id}</DataCardTitle>
      <DataCardContent>
        <div className="space-y-2">
          <InfoField label="Pessoa" value={registro.pessoa?.nome || "-"} />
          <InfoField label="Órgão Lotação" value={registro.orgaoLotacao?.nome || "-"} />
          <InfoField label="Punição" value={registro.punicao?.descricao || "-"} />
          <InfoField label="Tipo Punição" value={registro.tipoPunicao?.descricao || "-"} />
          <InfoField label="Data Publicação" value={<DateDisplay value={registro.dataPublicacao} />} />
        </div>
      </DataCardContent>
    </DataCard>
  );
}
