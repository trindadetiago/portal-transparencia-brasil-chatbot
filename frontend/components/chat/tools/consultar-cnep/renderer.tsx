import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { InfoField } from "../base/components/InfoField";
import { CPFCNPJDisplay } from "../base/components/CPFCNPJDisplay";
import { DateDisplay } from "../base/components/DateDisplay";
import { StatusBadge } from "../base/components/StatusBadge";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import { truncate } from "../base/utils/formatters";
import type { ConsultarCnepInput, ConsultarCnepOutput, CnepDTO } from "./types";
import { ShieldAlert } from "lucide-react";

export function renderConsultarCnepInput(input: ConsultarCnepInput) {
  return input.nome_sancionado ? <StatusBadge status={`Nome: ${input.nome_sancionado}`} variant="info" /> : <InfoField label="Página" value={input.pagina} />;
}

export function renderConsultarCnepOutput(output: ConsultarCnepOutput | string) {
  const registros = parseToArray<CnepDTO>(output);
  if (registros.length === 0) return <EmptyState message="Nenhuma punição encontrada" icon={<ShieldAlert className="w-4 h-4" />} />;
  
  return (
    <div className="space-y-2">
      {registros.slice(0, 4).map((r, i) => (
        <DataCard key={i} variant="bordered" className="border-red-300/50 dark:border-red-800/50 bg-red-50/30 dark:bg-red-950/10">
          <DataCardTitle>{truncate(r.sancionado?.nome || r.pessoa?.nome || "", 35)}</DataCardTitle>
          <DataCardContent>
            <InfoField label="CNPJ" value={<CPFCNPJDisplay value={r.sancionado?.codigoFormatado || r.pessoa?.cnpjFormatado || ""} />} />
            <InfoField label="Sanção" value={<StatusBadge status={r.tipoSancao?.descricaoPortal || ""} variant="danger" />} />
            <InfoField label="Vigente até" value={<DateDisplay value={r.dataFimSancao} />} />
            <InfoField label="Valor Multa" value={r.valorMulta} />
          </DataCardContent>
        </DataCard>
      ))}
    </div>
  );
}
