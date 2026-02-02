import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray, parseToObject } from "../base/utils/parsers";
import type { ConsultarNotaFiscalPorChaveInput, ConsultarNotaFiscalPorChaveOutput, DetalheNotaFiscalDTO } from "./types";

export function renderConsultarNotaFiscalPorChaveInput(input: ConsultarNotaFiscalPorChaveInput) {
  return <InfoField label="Consulta" value={JSON.stringify(input)} />;
}

export function renderConsultarNotaFiscalPorChaveOutput(output: ConsultarNotaFiscalPorChaveOutput | string) {
  const item = parseToObject<DetalheNotaFiscalDTO>(output);
  if (!item) return <EmptyState message="Não encontrado" />;
  
  const nota = item.notaFiscalDTO;
  return (
    <DataCard variant="bordered">
      <DataCardTitle>Nota Fiscal {nota?.chaveNotaFiscal || nota?.numero?.toString() || ""}</DataCardTitle>
      <DataCardContent>
        <div className="space-y-2">
          {nota && (
            <>
              <InfoField label="Número" value={nota.numero?.toString()} />
              <InfoField label="CNPJ Fornecedor" value={nota.cnpjFornecedor} />
              <InfoField label="Valor Total" value={nota.valorNotaFiscal} />
              <InfoField label="Data Emissão" value={nota.dataEmissao} />
              <InfoField label="Fornecedor" value={nota.nomeFornecedor} />
              <InfoField label="Órgão Destinatário" value={nota.orgaoDestinatario} />
            </>
          )}
          {item.itensNotaFiscal && item.itensNotaFiscal.length > 0 && (
            <div className="mt-4">
              <div className="text-sm font-semibold mb-2">Itens ({item.itensNotaFiscal.length})</div>
              <DataTable
                columns={[
                  { key: "descricaoProdutoServico", label: "Descrição", render: (v: string) => v || "-" },
                  { key: "quantidade", label: "Qtd", render: (v: string) => v || "-", align: "right" as const },
                  { key: "valor", label: "Valor", render: (v: string) => v || "-", align: "right" as const },
                ]}
                data={item.itensNotaFiscal}
                maxRows={5}
              />
            </div>
          )}
        </div>
      </DataCardContent>
    </DataCard>
  );
}