import { ListItem } from "../base/components/ListItem";
import { StatusBadge } from "../base/components/StatusBadge";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import { truncate } from "../base/utils/formatters";
import type { ConsultarOrgaosSiafiInput, ConsultarOrgaosSiafiOutput, CodigoDescricaoDTO } from "./types";
import { Building2 } from "lucide-react";

export function renderConsultarOrgaosSiafiInput(input: ConsultarOrgaosSiafiInput) {
  return input.descricao ? <StatusBadge status={`Busca: ${input.descricao}`} variant="info" /> : null;
}

export function renderConsultarOrgaosSiafiOutput(output: ConsultarOrgaosSiafiOutput | string) {
  const orgaos = parseToArray<CodigoDescricaoDTO>(output);
  if (orgaos.length === 0) return <EmptyState message="Nenhum órgão encontrado" icon={<Building2 className="w-4 h-4" />} />;
  
  return (
    <div className="space-y-1">
      {orgaos.slice(0, 8).map((o, i) => (
        <ListItem key={i} title={truncate(o.descricao || "", 40)} meta={<StatusBadge status={o.codigo || ""} />} icon={<Building2 className="w-3 h-3 text-muted-foreground" />} />
      ))}
    </div>
  );
}
