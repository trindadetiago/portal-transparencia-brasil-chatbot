import { InfoField } from "../base/components/InfoField";
import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { DateDisplay } from "../base/components/DateDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { parseToObject } from "../base/utils/parsers";
import type { ConsultarCepimPorIdInput, ConsultarCepimPorIdOutput, CepimDTO } from "./types";
import { AlertTriangle } from "lucide-react";

export function renderConsultarCepimPorIdInput(input: ConsultarCepimPorIdInput) {
  return <InfoField label="ID" value={input.id.toString()} />;
}

export function renderConsultarCepimPorIdOutput(output: ConsultarCepimPorIdOutput | string) {
  const registro = parseToObject<CepimDTO>(output);
  if (!registro) return <EmptyState message="Registro não encontrado" icon={<AlertTriangle className="w-4 h-4" />} />;
  
  return (
    <DataCard variant="bordered">
      <DataCardTitle>CEPIM #{registro.id}</DataCardTitle>
      <DataCardContent>
        <div className="space-y-2">
          <InfoField label="Motivo" value={registro.motivo || "-"} />
          <InfoField label="Órgão Superior" value={registro.orgaoSuperior?.nome || "-"} />
          <InfoField label="Pessoa Jurídica" value={registro.pessoaJuridica?.nome || "-"} />
        </div>
      </DataCardContent>
    </DataCard>
  );
}
