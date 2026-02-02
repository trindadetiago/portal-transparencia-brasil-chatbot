import { InfoField } from "../base/components/InfoField";
import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { DateDisplay } from "../base/components/DateDisplay";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { parseToObject } from "../base/utils/parsers";
import type { ConsultarCnepPorIdInput, ConsultarCnepPorIdOutput, CnepDTO } from "./types";
import { AlertTriangle } from "lucide-react";

export function renderConsultarCnepPorIdInput(input: ConsultarCnepPorIdInput) {
  return <InfoField label="ID" value={input.id.toString()} />;
}

export function renderConsultarCnepPorIdOutput(output: ConsultarCnepPorIdOutput | string) {
  const registro = parseToObject<CnepDTO>(output);
  if (!registro) return <EmptyState message="Registro não encontrado" icon={<AlertTriangle className="w-4 h-4" />} />;
  
  return (
    <DataCard variant="bordered">
      <DataCardTitle>CNEP #{registro.id}</DataCardTitle>
      <DataCardContent>
        <div className="space-y-2">
          <InfoField label="Sancionado" value={registro.sancionado?.nome || "-"} />
          <InfoField label="Órgão Sancionador" value={registro.orgaoSancionador?.nome || "-"} />
          <InfoField label="Data Publicação" value={<DateDisplay value={registro.dataPublicacaoSancao} />} />
          <InfoField label="Valor Multa" value={registro.valorMulta ? <CurrencyDisplay value={parseFloat(registro.valorMulta)} size="sm" /> : "-"} />
          <InfoField label="Tipo Sanção" value={registro.tipoSancao?.descricaoPortal || "-"} />
        </div>
      </DataCardContent>
    </DataCard>
  );
}
