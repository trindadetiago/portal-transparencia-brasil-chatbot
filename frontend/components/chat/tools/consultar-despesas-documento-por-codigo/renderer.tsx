import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray, parseToObject } from "../base/utils/parsers";
import type { ConsultarDespesasDocumentoPorCodigoInput, ConsultarDespesasDocumentoPorCodigoOutput, DespesasPorDocumentoDTO } from "./types";

export function renderConsultarDespesasDocumentoPorCodigoInput(input: ConsultarDespesasDocumentoPorCodigoInput) {
  return <InfoField label="Consulta" value={JSON.stringify(input)} />;
}

export function renderConsultarDespesasDocumentoPorCodigoOutput(output: ConsultarDespesasDocumentoPorCodigoOutput | string) {
  const item = parseToObject<DespesasPorDocumentoDTO>(output);
  if (!item) return <EmptyState message="Não encontrado" />;
  
  return (
    <DataCard variant="bordered">
      <DataCardTitle>Documento {item.documentoResumido || item.documento}</DataCardTitle>
      <DataCardContent>
        <div className="space-y-2">
          <InfoField label="Documento" value={item.documento} />
          <InfoField label="Favorecido" value={item.nomeFavorecido || item.favorecido} />
          <InfoField label="Valor" value={item.valor} />
          <InfoField label="Data" value={item.data} />
          <InfoField label="Órgão" value={item.orgao} />
        </div>
      </DataCardContent>
    </DataCard>
  );
}