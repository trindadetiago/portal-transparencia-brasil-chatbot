import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { InfoField } from "../base/components/InfoField";
import { CPFCNPJDisplay } from "../base/components/CPFCNPJDisplay";
import { DateDisplay } from "../base/components/DateDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import { truncate } from "../base/utils/formatters";
import type { ConsultarCeafInput, ConsultarCeafOutput, CeafDTO } from "./types";
import { UserX } from "lucide-react";

export function renderConsultarCeafInput(input: ConsultarCeafInput) {
  return <InfoField label="Página" value={input.pagina} />;
}

export function renderConsultarCeafOutput(output: ConsultarCeafOutput | string) {
  const registros = parseToArray<CeafDTO>(output);
  if (registros.length === 0) return <EmptyState message="Nenhuma expulsão encontrada" icon={<UserX className="w-4 h-4" />} />;
  
  return (
    <div className="space-y-2">
      {registros.slice(0, 4).map((r, i) => (
        <DataCard key={i} variant="bordered" className="border-red-300/50 dark:border-red-800/50">
          <DataCardTitle>{r.pessoa?.nome || ""}</DataCardTitle>
          <DataCardContent>
            <InfoField label="CPF" value={<CPFCNPJDisplay value={r.pessoa?.cpfFormatado || ""} mask />} />
            <InfoField label="Órgão" value={truncate(r.orgaoLotacao?.nome || "", 30)} />
            <InfoField label="Punição" value={truncate(r.punicao?.descricao || "", 35)} />
            <InfoField label="Data" value={<DateDisplay value={r.dataPublicacao} />} />
          </DataCardContent>
        </DataCard>
      ))}
    </div>
  );
}
