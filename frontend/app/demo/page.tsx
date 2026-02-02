"use client";

import ChatMessage from "@/components/chat-message";
import { UIMessage } from "ai";
import { Bot, Sparkles } from "lucide-react";

// Fake conversation showcasing ALL tools
const demoMessages: UIMessage[] = [
  {
    id: "1",
    role: "user",
    parts: [
      {
        type: "text",
        text: "Me mostre exemplos de todas as ferramentas disponíveis no portal",
      },
    ],
  },
  {
    id: "2",
    role: "assistant",
    parts: [
      {
        type: "text",
        text: "Ótimo! Vou demonstrar todas as ferramentas disponíveis. Começando com buscas na internet e dados de transparência...",
      },
      // Write Todos (DeepAgents internal tool)
      {
        type: "tool-write_todos",
        toolCallId: "call_0",
        state: "output-available",
        input: {
          todos: [
            { id: "1", content: "Buscar dados na internet", status: "in_progress" },
            { id: "2", content: "Consultar servidores públicos", status: "pending" },
            { id: "3", content: "Consultar despesas e contratos", status: "pending" },
          ],
          merge: false,
        },
        output: "Todos created successfully",
      },
      // Internet Search
      {
        type: "tool-internet_search",
        toolCallId: "call_1",
        state: "output-available",
        input: {
          query: "Portal da Transparência Brasil API",
          max_results: 3,
        },
        output: JSON.stringify({
          results: [
            { title: "Portal da Transparência", url: "https://portaldatransparencia.gov.br", content: "Dados públicos do governo federal..." },
            { title: "API Documentation", url: "https://api.portaldatransparencia.gov.br", content: "Documentação completa da API..." },
          ],
        }),
      },
      {
        type: "text",
        text: "## 1. Consultas de Servidores\n\nBuscando informações sobre servidores públicos federais:",
      },
      // Servidores
      {
        type: "tool-consultar_servidores",
        toolCallId: "call_2",
        state: "output-available",
        input: {
          pagina: 1,
          tipo_servidor: 1,
          nome: "JOAO",
        },
        output: JSON.stringify([
          {
            servidor: {
              id: 12345,
              pessoa: { nome: "JOAO DA SILVA", cpfFormatado: "***.123.456-**" },
              orgaoServidorExercicio: { codigo: "26000", nome: "MINISTERIO DA EDUCACAO", sigla: "MEC" },
              funcao: { codigoFuncaoCargo: "ANALISTA", descricaoFuncaoCargo: "ANALISTA ADMINISTRATIVO" }
            },
            fichasCargoEfetivo: [],
            fichasFuncao: []
          },
          {
            servidor: {
              id: 12346,
              pessoa: { nome: "JOAO SANTOS", cpfFormatado: "***.654.321-**" },
              orgaoServidorExercicio: { codigo: "36000", nome: "MINISTERIO DA SAUDE", sigla: "MS" },
              funcao: { codigoFuncaoCargo: "TECNICO", descricaoFuncaoCargo: "TECNICO ADMINISTRATIVO" }
            },
            fichasCargoEfetivo: [],
            fichasFuncao: []
          },
        ]),
      },
      {
        type: "tool-consultar_servidor_por_id",
        toolCallId: "call_3",
        state: "output-available",
        input: { id: 12345 },
        output: JSON.stringify({
          id: 12345,
          nome: "JOAO DA SILVA",
          cpf: "***123456**",
          orgaoExercicio: "MINISTERIO DA EDUCACAO",
          cargo: "ANALISTA ADMINISTRATIVO",
          classe: "A",
          dataIngressoCargo: "2015-03-10",
        }),
      },
      {
        type: "tool-consultar_remuneracao_servidores",
        toolCallId: "call_4",
        state: "output-available",
        input: { mes_ano: "202501", pagina: 1, id: 12345 },
        output: JSON.stringify({
          remuneracaoBasica: 8500.00,
          gratificacoes: 2300.00,
          descontos: 1200.00,
          remuneracaoLiquida: 9600.00,
          mesAno: "202501",
        }),
      },
      {
        type: "tool-write_todos",
        toolCallId: "call_4a",
        state: "output-available",
        input: {
          todos: [
            { id: "1", content: "Buscar dados na internet", status: "completed" },
            { id: "2", content: "Consultar servidores públicos", status: "completed" },
            { id: "3", content: "Consultar despesas e contratos", status: "in_progress" },
          ],
          merge: true,
        },
        output: "Todos updated successfully",
      },
      {
        type: "text",
        text: "## 2. Despesas Públicas\n\nConsultando gastos governamentais por órgão e recursos recebidos:",
      },
      // Despesas
      {
        type: "tool-consultar_despesas_por_orgao",
        toolCallId: "call_5",
        state: "output-available",
        input: { ano: 2025, pagina: 1, orgao_superior: "20101" },
        output: JSON.stringify({
          orgao: "PRESIDENCIA DA REPUBLICA",
          anoExercicio: 2025,
          empenhado: 21675976476.23,
          liquidado: 7579541034.50,
          pago: 7448110842.15,
        }),
      },
      {
        type: "tool-consultar_recursos_recebidos",
        toolCallId: "call_6",
        state: "output-available",
        input: {
          mes_ano_inicio: "202501",
          mes_ano_fim: "202501",
          pagina: 1,
          uf: "SP",
        },
        output: JSON.stringify([
          { favorecido: "PREFEITURA DE SAO PAULO", cnpj: "46.395.000/0001-39", valor: 5000000.00, data: "2025-01-15", uf: "SP" },
          { favorecido: "HOSPITAL DAS CLINICAS", cnpj: "60.448.040/0001-22", valor: 2500000.00, data: "2025-01-20", uf: "SP" },
        ]),
      },
      {
        type: "text",
        text: "## 3. Contratos Públicos\n\nVerificando contratos firmados pelo governo:",
      },
      // Contratos
      {
        type: "tool-consultar_contratos",
        toolCallId: "call_7",
        state: "output-available",
        input: {
          codigo_orgao: "26101",
          pagina: 1,
          data_inicial: "01/01/2025",
          data_final: "31/01/2025",
        },
        output: JSON.stringify([
          {
            id: 98765,
            numero: "00001/2025",
            objeto: "PRESTACAO DE SERVICOS DE LIMPEZA",
            fornecedor: "EMPRESA XYZ LTDA",
            valor: 450000.00,
            dataAssinatura: "15/01/2025",
          },
          {
            id: 98766,
            numero: "00002/2025",
            objeto: "FORNECIMENTO DE EQUIPAMENTOS DE TI",
            fornecedor: "TECH SOLUTIONS SA",
            valor: 1200000.00,
            dataAssinatura: "20/01/2025",
          },
        ]),
      },
      {
        type: "tool-consultar_contrato_por_id",
        toolCallId: "call_8",
        state: "output-available",
        input: { id: 98765 },
        output: JSON.stringify({
          id: 98765,
          numero: "00001/2025",
          objeto: "PRESTACAO DE SERVICOS DE LIMPEZA E CONSERVACAO",
          fornecedor: { nome: "EMPRESA XYZ LTDA", cnpj: "12.345.678/0001-90" },
          valor: 450000.00,
          dataAssinatura: "15/01/2025",
          vigencia: "12 meses",
          modalidade: "PREGAO ELETRONICO",
        }),
      },
      {
        type: "tool-consultar_contratos_por_cpf_cnpj",
        toolCallId: "call_9",
        state: "output-available",
        input: { cpf_cnpj: "12.345.678/0001-90", pagina: 1 },
        output: JSON.stringify([
          { id: 98765, orgao: "MINISTERIO DA EDUCACAO", valor: 450000.00, ano: 2025 },
          { id: 87654, orgao: "MINISTERIO DA SAUDE", valor: 300000.00, ano: 2024 },
        ]),
      },
      {
        type: "text",
        text: "## 4. Licitações\n\nPesquisando processos licitatórios:",
      },
      // Licitações
      {
        type: "tool-consultar_licitacoes",
        toolCallId: "call_10",
        state: "output-available",
        input: {
          codigo_orgao: "26101",
          pagina: 1,
          data_inicial: "01/01/2025",
        },
        output: JSON.stringify([
          {
            id: 555001,
            numero: "001/2025",
            modalidade: "PREGAO ELETRONICO",
            objeto: "AQUISICAO DE MATERIAL DE EXPEDIENTE",
            situacao: "EM ANDAMENTO",
            dataAbertura: "15/02/2025",
          },
          {
            id: 555002,
            numero: "002/2025",
            modalidade: "CONCORRENCIA",
            objeto: "CONSTRUCAO DE EDIFICIO ADMINISTRATIVO",
            situacao: "PUBLICADO",
            dataAbertura: "20/03/2025",
          },
        ]),
      },
      {
        type: "tool-consultar_licitacao_por_id",
        toolCallId: "call_11",
        state: "output-available",
        input: { id: 555001 },
        output: JSON.stringify({
          id: 555001,
          numero: "001/2025",
          modalidade: "PREGAO ELETRONICO",
          objeto: "AQUISICAO DE MATERIAL DE EXPEDIENTE PARA O ANO DE 2025",
          orgao: "MINISTERIO DA EDUCACAO",
          valorEstimado: 250000.00,
          dataAbertura: "15/02/2025",
          situacao: "EM ANDAMENTO",
          numeroProcesso: "23000.012345/2024-99",
        }),
      },
      {
        type: "text",
        text: "## 5. Convênios\n\nConsultando convênios firmados:",
      },
      // Convênios
      {
        type: "tool-consultar_convenios",
        toolCallId: "call_12",
        state: "output-available",
        input: {
          pagina: 1,
          uf: "RJ",
          situacao: "ATIVO",
        },
        output: JSON.stringify([
          {
            id: 777001,
            numero: "800001/2025",
            objeto: "MELHORIA DA INFRAESTRUTURA URBANA",
            convenente: "PREFEITURA DO RIO DE JANEIRO",
            valor: 5000000.00,
            situacao: "ATIVO",
          },
        ]),
      },
      {
        type: "tool-consultar_convenio_por_id",
        toolCallId: "call_13",
        state: "output-available",
        input: { id: 777001 },
        output: JSON.stringify({
          id: 777001,
          numero: "800001/2025",
          objeto: "MELHORIA DA INFRAESTRUTURA URBANA",
          convenente: { nome: "PREFEITURA DO RIO DE JANEIRO", cnpj: "42.498.600/0001-71" },
          concedente: "MINISTERIO DAS CIDADES",
          valor: 5000000.00,
          dataAssinatura: "10/01/2025",
          situacao: "ATIVO",
        }),
      },
      {
        type: "text",
        text: "## 6. Benefícios Sociais\n\nConsultando programas de assistência social:",
      },
      // Benefícios
      {
        type: "tool-consultar_bolsa_familia_por_municipio",
        toolCallId: "call_14",
        state: "output-available",
        input: { mes_ano: "202501", codigo_ibge: "3550308", pagina: 1 },
        output: JSON.stringify({
          municipio: "SAO PAULO",
          mesAno: "202501",
          totalBeneficiarios: 450000,
          valorTotal: 67500000.00,
          valorMedio: 150.00,
        }),
      },
      {
        type: "tool-consultar_bolsa_familia_por_nis",
        toolCallId: "call_15",
        state: "output-available",
        input: { nis: "12345678901", ano_mes_referencia: "202501" },
        output: JSON.stringify([
          { mesAno: "202501", valor: 600.00, dataPagamento: "20/01/2025" },
        ]),
      },
      {
        type: "tool-consultar_garantia_safra_por_municipio",
        toolCallId: "call_16",
        state: "output-available",
        input: { mes_ano: "202501", codigo_ibge: "2304400", pagina: 1 },
        output: JSON.stringify({
          municipio: "FORTALEZA",
          totalBeneficiarios: 250,
          valorTotal: 312500.00,
        }),
      },
      {
        type: "tool-consultar_seguro_defeso_por_municipio",
        toolCallId: "call_17",
        state: "output-available",
        input: { mes_ano: "202501", codigo_ibge: "1501402", pagina: 1 },
        output: JSON.stringify({
          municipio: "BELEM",
          totalBeneficiarios: 1200,
          valorTotal: 1440000.00,
        }),
      },
      {
        type: "text",
        text: "## 7. Sanções\n\nVerificando cadastros de sanções:",
      },
      // Sanções
      {
        type: "tool-consultar_ceis",
        toolCallId: "call_18",
        state: "output-available",
        input: { pagina: 1, nome_sancionado: "EMPRESA" },
        output: JSON.stringify([
          {
            sancionado: "EMPRESA ABC CONSTRUCOES LTDA",
            cnpj: "98.765.432/0001-10",
            orgaoSancionador: "CGU",
            dataPublicacao: "15/06/2024",
            fundamentacao: "FRAUDE EM LICITACAO",
          },
        ]),
      },
      {
        type: "tool-consultar_cnep",
        toolCallId: "call_19",
        state: "output-available",
        input: { pagina: 1 },
        output: JSON.stringify([
          {
            sancionado: "CONSTRUTORA XYZ SA",
            cnpj: "11.222.333/0001-44",
            tipoSancao: "DECLARACAO DE INIDONEIDADE",
            dataFinalSancao: "31/12/2026",
          },
        ]),
      },
      {
        type: "tool-consultar_cepim",
        toolCallId: "call_20",
        state: "output-available",
        input: { pagina: 1, uf_sancionado: "SP" },
        output: JSON.stringify([
          {
            entidade: "INSTITUTO EXEMPLO",
            cnpj: "55.666.777/0001-88",
            uf: "SP",
            motivoImpedimento: "IRREGULARIDADE NA PRESTACAO DE CONTAS",
          },
        ]),
      },
      {
        type: "tool-consultar_ceaf",
        toolCallId: "call_21",
        state: "output-available",
        input: { pagina: 1 },
        output: JSON.stringify([
          {
            nome: "FULANO DE TAL",
            cpf: "***111222**",
            orgao: "MINISTERIO DA FAZENDA",
            motivoExpulsao: "CORRUPCAO",
            dataExpulsao: "10/03/2023",
          },
        ]),
      },
      {
        type: "text",
        text: "## 8. Viagens a Serviço\n\nConsultando viagens oficiais:",
      },
      // Viagens
      {
        type: "tool-consultar_viagens",
        toolCallId: "call_22",
        state: "output-available",
        input: {
          data_ida_de: "01/01/2025",
          data_ida_ate: "31/01/2025",
          pagina: 1,
        },
        output: JSON.stringify([
          {
            id: 333001,
            viajante: "MARIA OLIVEIRA",
            destino: "BRASILIA/DF",
            motivo: "REUNIAO TECNICA",
            valor: 2500.00,
            dataIda: "15/01/2025",
            dataRetorno: "17/01/2025",
          },
          {
            id: 333002,
            viajante: "JOSE SANTOS",
            destino: "PARIS/FRANCA",
            motivo: "CONFERENCIA INTERNACIONAL",
            valor: 15000.00,
            dataIda: "20/01/2025",
            dataRetorno: "28/01/2025",
          },
        ]),
      },
      {
        type: "tool-consultar_viagens_por_cpf",
        toolCallId: "call_23",
        state: "output-available",
        input: { cpf: "12345678900", pagina: 1 },
        output: JSON.stringify([
          { destino: "BRASILIA/DF", valor: 2500.00, dataIda: "15/01/2025" },
          { destino: "SAO PAULO/SP", valor: 1200.00, dataIda: "05/12/2024" },
        ]),
      },
      {
        type: "text",
        text: "## 9. Emendas Parlamentares\n\nPesquisando emendas ao orçamento:",
      },
      // Emendas
      {
        type: "tool-consultar_emendas",
        toolCallId: "call_24",
        state: "output-available",
        input: { pagina: 1, ano: 2025 },
        output: JSON.stringify([
          {
            numeroEmenda: "12340001",
            autor: "DEPUTADO FEDERAL FULANO",
            valor: 5000000.00,
            ano: 2025,
            tipoEmenda: "INDIVIDUAL",
            finalidade: "SAUDE",
          },
          {
            numeroEmenda: "12340002",
            autor: "SENADOR CICLANO",
            valor: 10000000.00,
            ano: 2025,
            tipoEmenda: "BANCADA",
            finalidade: "EDUCACAO",
          },
        ]),
      },
      {
        type: "text",
        text: "## 10. Órgãos Governamentais\n\nListando órgãos SIAFI e SIAPE:",
      },
      // Órgãos
      {
        type: "tool-consultar_orgaos_siafi",
        toolCallId: "call_25",
        state: "output-available",
        input: { pagina: 1, descricao: "MINISTERIO" },
        output: JSON.stringify([
          { codigo: "26101", nome: "MINISTERIO DA EDUCACAO" },
          { codigo: "36201", nome: "MINISTERIO DA SAUDE" },
          { codigo: "52101", nome: "MINISTERIO DA DEFESA" },
        ]),
      },
      {
        type: "tool-consultar_orgaos_siape",
        toolCallId: "call_26",
        state: "output-available",
        input: { pagina: 1 },
        output: JSON.stringify([
          { codigo: "00001", nome: "PRESIDENCIA DA REPUBLICA" },
          { codigo: "00002", nome: "VICE-PRESIDENCIA DA REPUBLICA" },
        ]),
      },
      {
        type: "text",
        text: "## 11. Pessoas Físicas e Jurídicas\n\nConsultando dados cadastrais:",
      },
      // Pessoas
      {
        type: "tool-consultar_pessoa_juridica",
        toolCallId: "call_27",
        state: "output-available",
        input: { cnpj: "12.345.678/0001-90" },
        output: JSON.stringify({
          cnpj: "12.345.678/0001-90",
          razaoSocial: "EMPRESA XYZ LTDA",
          nomeFantasia: "XYZ SERVICOS",
          endereco: "RUA EXEMPLO, 123 - SAO PAULO/SP",
          situacao: "ATIVA",
        }),
      },
      {
        type: "tool-consultar_pessoa_fisica",
        toolCallId: "call_28",
        state: "output-available",
        input: { cpf: "12345678900" },
        output: JSON.stringify({
          cpf: "***678900",
          nome: "JOAO DA SILVA",
          dataNascimento: "01/01/1980",
        }),
      },
      {
        type: "text",
        text: "## 12. Cartões de Pagamento\n\nVerificando gastos com cartão corporativo:",
      },
      // Cartões
      {
        type: "tool-consultar_cartoes_pagamento",
        toolCallId: "call_29",
        state: "output-available",
        input: {
          pagina: 1,
          mes_extrato_inicio: "202501",
          mes_extrato_fim: "202501",
        },
        output: JSON.stringify([
          {
            portador: "MARIA SILVA",
            cpfPortador: "***123456**",
            favorecido: "POSTO DE GASOLINA ABC",
            valor: 250.00,
            data: "15/01/2025",
            orgao: "MINISTERIO DA EDUCACAO",
          },
          {
            portador: "JOSE SANTOS",
            cpfPortador: "***654321**",
            favorecido: "RESTAURANTE XYZ",
            valor: 89.50,
            data: "16/01/2025",
            orgao: "MINISTERIO DA SAUDE",
          },
        ]),
      },
      {
        type: "text",
        text: "## 13. Imóveis Funcionais\n\nConsultando imóveis do governo:",
      },
      // Imóveis
      {
        type: "tool-consultar_imoveis_funcionais",
        toolCallId: "call_30",
        state: "output-available",
        input: { pagina: 1, situacao: "OCUPADO" },
        output: JSON.stringify([
          {
            codigo: "IM-001",
            endereco: "SQN 123 BLOCO A - BRASILIA/DF",
            situacao: "OCUPADO",
            orgaoResponsavel: "PRESIDENCIA DA REPUBLICA",
            valorAvaliado: 850000.00,
          },
        ]),
      },
      {
        type: "text",
        text: "## 14. COVID-19 / Transferências\n\nDados de transferências relacionadas à pandemia:",
      },
      // COVID
      {
        type: "tool-consultar_coronavirus_transferencias",
        toolCallId: "call_31",
        state: "output-available",
        input: { mes_ano: "202012", pagina: 1, uf: "SP" },
        output: JSON.stringify([
          {
            municipio: "SAO PAULO",
            valor: 50000000.00,
            finalidade: "AQUISICAO DE EQUIPAMENTOS HOSPITALARES",
            data: "15/12/2020",
          },
        ]),
      },
      {
        type: "text",
        text: "## 15. Notas Fiscais\n\nConsultando notas fiscais eletrônicas:",
      },
      // Notas Fiscais
      {
        type: "tool-consultar_notas_fiscais",
        toolCallId: "call_32",
        state: "output-available",
        input: { pagina: 1, nome_produto: "COMPUTADOR" },
        output: JSON.stringify([
          {
            numero: "12345",
            emitente: "TECH SOLUTIONS SA",
            cnpjEmitente: "11.222.333/0001-44",
            produto: "COMPUTADOR DESKTOP",
            quantidade: 50,
            valorUnitario: 3500.00,
            valorTotal: 175000.00,
            dataEmissao: "20/01/2025",
          },
        ]),
      },
      {
        type: "text",
        text: "---\n\n## 🎉 Demonstração Completa!\n\nExemplo de **todas as ferramentas** disponíveis:\n\n### Categorias:\n- ✅ Gerenciamento Interno (1 ferramenta) - write_todos\n- ✅ Busca na Internet (1 ferramenta)\n- ✅ Servidores Públicos (3 ferramentas)\n- ✅ Despesas Públicas (2 ferramentas)\n- ✅ Contratos (3 ferramentas)\n- ✅ Licitações (2 ferramentas)\n- ✅ Convênios (2 ferramentas)\n- ✅ Benefícios Sociais (4 ferramentas)\n- ✅ Sanções (4 ferramentas)\n- ✅ Viagens (2 ferramentas)\n- ✅ Emendas Parlamentares (1 ferramenta)\n- ✅ Órgãos (2 ferramentas)\n- ✅ Pessoas (2 ferramentas)\n- ✅ Cartões de Pagamento (1 ferramenta)\n- ✅ Imóveis (1 ferramenta)\n- ✅ COVID-19 (1 ferramenta)\n- ✅ Notas Fiscais (1 ferramenta)\n\n**Total: 32 ferramentas do Portal + 1 busca + 1 gerenciamento = 34 chamadas demonstradas!**\n\n*(Nota: write_todos é uma ferramenta interna do agente para gerenciar suas próprias tarefas)*",
      },
      // Final write_todos (simulating the original bug scenario)
      {
        type: "tool-write_todos",
        toolCallId: "call_final",
        state: "output-available",
        input: {
          todos: [
            { id: "1", content: "Buscar dados na internet", status: "completed" },
            { id: "2", content: "Consultar servidores públicos", status: "completed" },
            { id: "3", content: "Consultar despesas e contratos", status: "completed" },
            { id: "4", content: "Demonstrar todas as ferramentas", status: "completed" },
          ],
          merge: true,
        },
        output: "All todos completed successfully",
      },
      {
        type: "text",
        text: "Pronto! Todas as ferramentas foram demonstradas. 🎉\n\nEsta última mensagem deve aparecer mesmo depois do `write_todos` acima!",
      },
    ],
  },
];

export default function DemoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Brazilian Color Stripe */}
      <div className="gov-header-stripe h-1 w-full flex-shrink-0" />

      {/* Header */}
      <header className="border-b border-border/50 bg-background">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <div>
              <h1 className="text-lg font-semibold text-foreground">
                Demo: Todas as Ferramentas
              </h1>
              <p className="text-sm text-muted-foreground">
                Página de teste com todas as ferramentas disponíveis
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col gap-5 pb-4">
            {demoMessages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
                userMessageVariant="raised"
                assistantMessageVariant="raised"
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer Info */}
      <footer className="border-t border-border bg-muted/30 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Bot className="w-4 h-4" />
            <span>
              Esta é uma página de demonstração com dados fictícios para testar
              a interface de todas as ferramentas
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
