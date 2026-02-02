import { InfoField } from "../base/components/InfoField";
import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { DateDisplay } from "../base/components/DateDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { parseToObject } from "../base/utils/parsers";
import type { ConsultarCeisPorIdInput, ConsultarCeisPorIdOutput, CeisDTO } from "./types";
import { AlertTriangle } from "lucide-react";

export function renderConsultarCeisPorIdInput(input: ConsultarCeisPorIdInput) {
  return <InfoField label="ID" value={input.id.toString()} />;
}

export function renderConsultarCeisPorIdOutput(output: ConsultarCeisPorIdOutput | string) {
  const registro = parseToObject<CeisDTO>(output);
  if (!registro) return <EmptyState message="Registro não encontrado" icon={<AlertTriangle className="w-4 h-4" />} />;
  
  return (
    <DataCard variant="bordered">
      <DataCardTitle>CEIS #{registro.id}</DataCardTitle>
      <DataCardContent>
        <div className="space-y-2">
          <InfoField label="Sancionado" value={registro.sancionado?.nome || "-"} />
          <InfoField label="Órgão Sancionador" value={registro.orgaoSancionador?.nome || "-"} />
          <InfoField label="Data Publicação" value={<DateDisplay value={registro.dataPublicacaoSancao} />} />
          <InfoField label="Tipo Sanção" value={registro.tipoSancao?.descricaoPortal || "-"} />
        </div>
      </DataCardContent>
    </DataCard>
  );
}
