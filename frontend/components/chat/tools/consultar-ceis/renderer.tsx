import { InfoField } from "../base/components/InfoField";
import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { CPFCNPJDisplay } from "../base/components/CPFCNPJDisplay";
import { DateDisplay } from "../base/components/DateDisplay";
import { StatusBadge } from "../base/components/StatusBadge";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import { truncate } from "../base/utils/formatters";
import type { ConsultarCeisInput, ConsultarCeisOutput, CeisDTO } from "./types";
import { AlertTriangle } from "lucide-react";

export function renderConsultarCeisInput(input: ConsultarCeisInput) {
  const filters = [];
  if (input.nome_sancionado) filters.push({ label: "Nome", value: input.nome_sancionado });
  return filters.length > 0 ? <div className="flex gap-1">{filters.map((f, i) => <StatusBadge key={i} status={`${f.label}: ${f.value}`} variant="info" />)}</div> : <InfoField label="Página" value={input.pagina} />;
}

export function renderConsultarCeisOutput(output: ConsultarCeisOutput | string) {
  const registros = parseToArray<CeisDTO>(output);
  if (registros.length === 0) return <EmptyState message="Nenhuma sanção encontrada" icon={<AlertTriangle className="w-4 h-4" />} />;
  
  return (
    <div className="space-y-2">
      {registros.slice(0, 4).map((r, i) => (
        <DataCard key={i} variant="bordered" className="border-red-200/50 dark:border-red-900/50">
          <DataCardTitle>{truncate(r.sancionado?.nome || r.pessoa?.nome || "", 35)}</DataCardTitle>
          <DataCardContent>
            <InfoField label="CNPJ" value={<CPFCNPJDisplay value={r.sancionado?.codigoFormatado || r.pessoa?.cnpjFormatado || ""} />} />
            <InfoField label="Órgão" value={truncate(r.orgaoSancionador?.nome || "", 30)} />
            <InfoField label="Data" value={<DateDisplay value={r.dataPublicacaoSancao} />} />
            <InfoField label="Tipo" value={truncate(r.tipoSancao?.descricaoPortal || "", 40)} />
          </DataCardContent>
        </DataCard>
      ))}
      {registros.length > 4 && <div className="text-[9px] text-muted-foreground/60 text-center">+{registros.length - 4} não exibidos</div>}
    </div>
  );
}
