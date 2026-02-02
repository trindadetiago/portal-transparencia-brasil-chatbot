import { InfoField } from "../base/components/InfoField";
import { ListItem } from "../base/components/ListItem";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { DateDisplay } from "../base/components/DateDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import { formatMonthYear, maskCPF } from "../base/utils/formatters";
import type { ConsultarBolsaFamiliaPorNisInput, ConsultarBolsaFamiliaPorNisOutput, NovoBolsaFamiliaPagoDTO } from "./types";
import { DollarSign } from "lucide-react";

export function renderConsultarBolsaFamiliaPorNisInput(input: ConsultarBolsaFamiliaPorNisInput) {
  return <InfoField label="NIS" value={maskCPF(input.nis)} />;
}

export function renderConsultarBolsaFamiliaPorNisOutput(output: ConsultarBolsaFamiliaPorNisOutput | string) {
  const pagamentos = parseToArray<NovoBolsaFamiliaPagoDTO>(output);
  if (pagamentos.length === 0) return <EmptyState message="Nenhum pagamento encontrado" icon={<DollarSign className="w-4 h-4" />} />;
  
  return (
    <div className="space-y-1">
      {pagamentos.slice(0, 6).map((p, i) => (
        <ListItem 
          key={i} 
          title={p.dataMesReferencia || p.dataMesCompetencia || ""} 
          subtitle={p.municipio?.nomeIBGE || p.municipio?.codigoIBGE || ""} 
          meta={<CurrencyDisplay value={p.valorSaque} size="sm" />} 
        />
      ))}
    </div>
  );
}
