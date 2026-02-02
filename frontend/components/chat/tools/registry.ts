/**
 * Tool registry - Central place to register all tools
 */

import type { ToolMetadata, ToolRenderer } from "./base/types";

// Internal tools
import { writeTodosMetadata, writeTodosRenderer } from "./write-todos";
import { internetSearchMetadata, internetSearchRenderer } from "./internet-search";

// Servidores
import { consultarServidoresMetadata, consultarServidoresRenderer } from "./consultar-servidores";
import { consultarServidorPorIdMetadata, consultarServidorPorIdRenderer } from "./consultar-servidor-por-id";
import { consultarRemuneracaoServidoresMetadata, consultarRemuneracaoServidoresRenderer } from "./consultar-remuneracao-servidores";
import { consultarServidoresFuncoesECargosMetadata, consultarServidoresFuncoesECargosRenderer } from "./consultar-servidores-funcoes-e-cargos";
import { consultarServidoresPorOrgaoMetadata, consultarServidoresPorOrgaoRenderer } from "./consultar-servidores-por-orgao";

// Despesas
import { consultarDespesasPorOrgaoMetadata, consultarDespesasPorOrgaoRenderer } from "./consultar-despesas-por-orgao";
import { consultarRecursosRecebidosMetadata, consultarRecursosRecebidosRenderer } from "./consultar-recursos-recebidos";
import { consultarDespesasDocumentosMetadata, consultarDespesasDocumentosRenderer } from "./consultar-despesas-documentos";
import { consultarDespesasDocumentosPorFavorecidoMetadata, consultarDespesasDocumentosPorFavorecidoRenderer } from "./consultar-despesas-documentos-por-favorecido";
import { consultarDespesasDocumentosRelacionadosMetadata, consultarDespesasDocumentosRelacionadosRenderer } from "./consultar-despesas-documentos-relacionados";
import { consultarDespesasDocumentoPorCodigoMetadata, consultarDespesasDocumentoPorCodigoRenderer } from "./consultar-despesas-documento-por-codigo";
import { consultarDespesasEmpenhosImpactadosMetadata, consultarDespesasEmpenhosImpactadosRenderer } from "./consultar-despesas-empenhos-impactados";
import { consultarDespesasFavorecidosFinaisPorDocumentoMetadata, consultarDespesasFavorecidosFinaisPorDocumentoRenderer } from "./consultar-despesas-favorecidos-finais-por-documento";
import { consultarDespesasFuncionalProgramaticaAcoesMetadata, consultarDespesasFuncionalProgramaticaAcoesRenderer } from "./consultar-despesas-funcional-programatica-acoes";
import { consultarDespesasFuncionalProgramaticaFuncoesMetadata, consultarDespesasFuncionalProgramaticaFuncoesRenderer } from "./consultar-despesas-funcional-programatica-funcoes";
import { consultarDespesasFuncionalProgramaticaListarMetadata, consultarDespesasFuncionalProgramaticaListarRenderer } from "./consultar-despesas-funcional-programatica-listar";
import { consultarDespesasFuncionalProgramaticaProgramasMetadata, consultarDespesasFuncionalProgramaticaProgramasRenderer } from "./consultar-despesas-funcional-programatica-programas";
import { consultarDespesasFuncionalProgramaticaSubfuncoesMetadata, consultarDespesasFuncionalProgramaticaSubfuncoesRenderer } from "./consultar-despesas-funcional-programatica-subfuncoes";
import { consultarDespesasItensEmpenhoMetadata, consultarDespesasItensEmpenhoRenderer } from "./consultar-despesas-itens-empenho";
import { consultarDespesasItensEmpenhoHistoricoMetadata, consultarDespesasItensEmpenhoHistoricoRenderer } from "./consultar-despesas-itens-empenho-historico";
import { consultarDespesasPlanoOrcamentarioMetadata, consultarDespesasPlanoOrcamentarioRenderer } from "./consultar-despesas-plano-orcamentario";
import { consultarDespesasPorFuncionalProgramaticaMetadata, consultarDespesasPorFuncionalProgramaticaRenderer } from "./consultar-despesas-por-funcional-programatica";
import { consultarDespesasPorFuncionalProgramaticaMovimentacaoLiquidaMetadata, consultarDespesasPorFuncionalProgramaticaMovimentacaoLiquidaRenderer } from "./consultar-despesas-por-funcional-programatica-movimentacao-liquida";
import { consultarDespesasTipoTransferenciaMetadata, consultarDespesasTipoTransferenciaRenderer } from "./consultar-despesas-tipo-transferencia";

// Contratos
import { consultarContratosMetadata, consultarContratosRenderer } from "./consultar-contratos";
import { consultarContratoPorIdMetadata, consultarContratoPorIdRenderer } from "./consultar-contrato-por-id";
import { consultarContratosPorCpfCnpjMetadata, consultarContratosPorCpfCnpjRenderer } from "./consultar-contratos-por-cpf-cnpj";
import { consultarContratosApostilamentoMetadata, consultarContratosApostilamentoRenderer } from "./consultar-contratos-apostilamento";
import { consultarContratosDocumentosRelacionadosMetadata, consultarContratosDocumentosRelacionadosRenderer } from "./consultar-contratos-documentos-relacionados";
import { consultarContratosItensContratadosMetadata, consultarContratosItensContratadosRenderer } from "./consultar-contratos-itens-contratados";
import { consultarContratosPorNumeroMetadata, consultarContratosPorNumeroRenderer } from "./consultar-contratos-por-numero";
import { consultarContratosPorProcessoMetadata, consultarContratosPorProcessoRenderer } from "./consultar-contratos-por-processo";
import { consultarContratosTermoAditivoMetadata, consultarContratosTermoAditivoRenderer } from "./consultar-contratos-termo-aditivo";

// Licitações
import { consultarLicitacoesMetadata, consultarLicitacoesRenderer } from "./consultar-licitacoes";
import { consultarLicitacaoPorIdMetadata, consultarLicitacaoPorIdRenderer } from "./consultar-licitacao-por-id";
import { consultarLicitacoesContratosRelacionadosMetadata, consultarLicitacoesContratosRelacionadosRenderer } from "./consultar-licitacoes-contratos-relacionados";
import { consultarLicitacoesEmpenhosMetadata, consultarLicitacoesEmpenhosRenderer } from "./consultar-licitacoes-empenhos";
import { consultarLicitacoesItensLicitadosMetadata, consultarLicitacoesItensLicitadosRenderer } from "./consultar-licitacoes-itens-licitados";
import { consultarLicitacoesModalidadesMetadata, consultarLicitacoesModalidadesRenderer } from "./consultar-licitacoes-modalidades";
import { consultarLicitacoesParticipantesMetadata, consultarLicitacoesParticipantesRenderer } from "./consultar-licitacoes-participantes";
import { consultarLicitacoesPorProcessoMetadata, consultarLicitacoesPorProcessoRenderer } from "./consultar-licitacoes-por-processo";
import { consultarLicitacoesPorUgModalidadeNumeroMetadata, consultarLicitacoesPorUgModalidadeNumeroRenderer } from "./consultar-licitacoes-por-ug-modalidade-numero";
import { consultarLicitacoesUgsMetadata, consultarLicitacoesUgsRenderer } from "./consultar-licitacoes-ugs";

// Convênios
import { consultarConveniosMetadata, consultarConveniosRenderer } from "./consultar-convenios";
import { consultarConvenioPorIdMetadata, consultarConvenioPorIdRenderer } from "./consultar-convenio-por-id";
import { consultarConveniosPorNumeroMetadata, consultarConveniosPorNumeroRenderer } from "./consultar-convenios-por-numero";
import { consultarConveniosPorNumeroOriginalMetadata, consultarConveniosPorNumeroOriginalRenderer } from "./consultar-convenios-por-numero-original";
import { consultarConveniosPorNumeroProcessoMetadata, consultarConveniosPorNumeroProcessoRenderer } from "./consultar-convenios-por-numero-processo";
import { consultarConveniosTipoInstrumentoMetadata, consultarConveniosTipoInstrumentoRenderer } from "./consultar-convenios-tipo-instrumento";

// Benefícios
import { consultarBolsaFamiliaPorMunicipioMetadata, consultarBolsaFamiliaPorMunicipioRenderer } from "./consultar-bolsa-familia-por-municipio";
import { consultarBolsaFamiliaPorNisMetadata, consultarBolsaFamiliaPorNisRenderer } from "./consultar-bolsa-familia-por-nis";
import { consultarAuxilioBrasilPorMunicipioMetadata, consultarAuxilioBrasilPorMunicipioRenderer } from "./consultar-auxilio-brasil-por-municipio";
import { consultarAuxilioBrasilSacadoBeneficiarioPorMunicipioMetadata, consultarAuxilioBrasilSacadoBeneficiarioPorMunicipioRenderer } from "./consultar-auxilio-brasil-sacado-beneficiario-por-municipio";
import { consultarAuxilioBrasilSacadoPorNisMetadata, consultarAuxilioBrasilSacadoPorNisRenderer } from "./consultar-auxilio-brasil-sacado-por-nis";
import { consultarAuxilioEmergencialBeneficiarioPorMunicipioMetadata, consultarAuxilioEmergencialBeneficiarioPorMunicipioRenderer } from "./consultar-auxilio-emergencial-beneficiario-por-municipio";
import { consultarAuxilioEmergencialPorCpfOuNisMetadata, consultarAuxilioEmergencialPorCpfOuNisRenderer } from "./consultar-auxilio-emergencial-por-cpf-ou-nis";
import { consultarAuxilioEmergencialPorMunicipioMetadata, consultarAuxilioEmergencialPorMunicipioRenderer } from "./consultar-auxilio-emergencial-por-municipio";
import { consultarBolsaFamiliaDisponivelBeneficiarioPorMunicipioMetadata, consultarBolsaFamiliaDisponivelBeneficiarioPorMunicipioRenderer } from "./consultar-bolsa-familia-disponivel-beneficiario-por-municipio";
import { consultarBolsaFamiliaDisponivelPorCpfOuNisMetadata, consultarBolsaFamiliaDisponivelPorCpfOuNisRenderer } from "./consultar-bolsa-familia-disponivel-por-cpf-ou-nis";
import { consultarBolsaFamiliaAntigaPorMunicipioMetadata, consultarBolsaFamiliaAntigaPorMunicipioRenderer } from "./consultar-bolsa-familia-antiga-por-municipio";
import { consultarBolsaFamiliaSacadoBeneficiarioPorMunicipioMetadata, consultarBolsaFamiliaSacadoBeneficiarioPorMunicipioRenderer } from "./consultar-bolsa-familia-sacado-beneficiario-por-municipio";
import { consultarBolsaFamiliaSacadoPorNisMetadata, consultarBolsaFamiliaSacadoPorNisRenderer } from "./consultar-bolsa-familia-sacado-por-nis";
import { consultarBpcBeneficiarioPorMunicipioMetadata, consultarBpcBeneficiarioPorMunicipioRenderer } from "./consultar-bpc-beneficiario-por-municipio";
import { consultarBpcPorCpfOuNisMetadata, consultarBpcPorCpfOuNisRenderer } from "./consultar-bpc-por-cpf-ou-nis";
import { consultarBpcPorMunicipioMetadata, consultarBpcPorMunicipioRenderer } from "./consultar-bpc-por-municipio";
import { consultarGarantiaSafraPorMunicipioMetadata, consultarGarantiaSafraPorMunicipioRenderer } from "./consultar-garantia-safra-por-municipio";
import { consultarSafraBeneficiarioPorMunicipioMetadata, consultarSafraBeneficiarioPorMunicipioRenderer } from "./consultar-safra-beneficiario-por-municipio";
import { consultarSafraPorCpfOuNisMetadata, consultarSafraPorCpfOuNisRenderer } from "./consultar-safra-por-cpf-ou-nis";
import { consultarSeguroDefesoPorMunicipioMetadata, consultarSeguroDefesoPorMunicipioRenderer } from "./consultar-seguro-defeso-por-municipio";
import { consultarSeguroDefesoBeneficiarioPorMunicipioMetadata, consultarSeguroDefesoBeneficiarioPorMunicipioRenderer } from "./consultar-seguro-defeso-beneficiario-por-municipio";
import { consultarSeguroDefesoPorCodigoMetadata, consultarSeguroDefesoPorCodigoRenderer } from "./consultar-seguro-defeso-por-codigo";
import { consultarNovoBolsaFamiliaSacadoBeneficiarioPorMunicipioMetadata, consultarNovoBolsaFamiliaSacadoBeneficiarioPorMunicipioRenderer } from "./consultar-novo-bolsa-familia-sacado-beneficiario-por-municipio";
import { consultarPetiBeneficiarioPorMunicipioMetadata, consultarPetiBeneficiarioPorMunicipioRenderer } from "./consultar-peti-beneficiario-por-municipio";
import { consultarPetiPorCpfOuNisMetadata, consultarPetiPorCpfOuNisRenderer } from "./consultar-peti-por-cpf-ou-nis";
import { consultarPetiPorMunicipioMetadata, consultarPetiPorMunicipioRenderer } from "./consultar-peti-por-municipio";

// Acordos de Leniência
import { consultarAcordosLenienciaMetadata, consultarAcordosLenienciaRenderer } from "./consultar-acordos-leniencia";
import { consultarAcordoLenienciaPorIdMetadata, consultarAcordoLenienciaPorIdRenderer } from "./consultar-acordo-leniencia-por-id";

// Sanções
import { consultarCeisMetadata, consultarCeisRenderer } from "./consultar-ceis";
import { consultarCeisPorIdMetadata, consultarCeisPorIdRenderer } from "./consultar-ceis-por-id";
import { consultarCnepMetadata, consultarCnepRenderer } from "./consultar-cnep";
import { consultarCnepPorIdMetadata, consultarCnepPorIdRenderer } from "./consultar-cnep-por-id";
import { consultarCepimMetadata, consultarCepimRenderer } from "./consultar-cepim";
import { consultarCepimPorIdMetadata, consultarCepimPorIdRenderer } from "./consultar-cepim-por-id";
import { consultarCeafMetadata, consultarCeafRenderer } from "./consultar-ceaf";
import { consultarCeafPorIdMetadata, consultarCeafPorIdRenderer } from "./consultar-ceaf-por-id";

// Viagens
import { consultarViagensMetadata, consultarViagensRenderer } from "./consultar-viagens";
import { consultarViagensPorCpfMetadata, consultarViagensPorCpfRenderer } from "./consultar-viagens-por-cpf";
import { consultarViagemPorIdMetadata, consultarViagemPorIdRenderer } from "./consultar-viagem-por-id";

// Emendas
import { consultarEmendasMetadata, consultarEmendasRenderer } from "./consultar-emendas";
import { consultarEmendasDocumentosMetadata, consultarEmendasDocumentosRenderer } from "./consultar-emendas-documentos";

// Órgãos
import { consultarOrgaosSiafiMetadata, consultarOrgaosSiafiRenderer } from "./consultar-orgaos-siafi";
import { consultarOrgaosSiapeMetadata, consultarOrgaosSiapeRenderer } from "./consultar-orgaos-siape";

// Pessoas
import { consultarPessoaJuridicaMetadata, consultarPessoaJuridicaRenderer } from "./consultar-pessoa-juridica";
import { consultarPessoaFisicaMetadata, consultarPessoaFisicaRenderer } from "./consultar-pessoa-fisica";
import { consultarPepsMetadata, consultarPepsRenderer } from "./consultar-peps";
import { consultarPermissionariosMetadata, consultarPermissionariosRenderer } from "./consultar-permissionarios";

// Cartões
import { consultarCartoesPagamentoMetadata, consultarCartoesPagamentoRenderer } from "./consultar-cartoes-pagamento";

// Imóveis
import { consultarImoveisFuncionaisMetadata, consultarImoveisFuncionaisRenderer } from "./consultar-imoveis-funcionais";
import { consultarSituacaoImovelMetadata, consultarSituacaoImovelRenderer } from "./consultar-situacao-imovel";

// COVID-19
import { consultarCoronavirusTransferenciasMetadata, consultarCoronavirusTransferenciasRenderer } from "./consultar-coronavirus-transferencias";
import { consultarCoronavirusMovimentoLiquidoDespesaMetadata, consultarCoronavirusMovimentoLiquidoDespesaRenderer } from "./consultar-coronavirus-movimento-liquido-despesa";

// Notas Fiscais
import { consultarNotasFiscaisMetadata, consultarNotasFiscaisRenderer } from "./consultar-notas-fiscais";
import { consultarNotaFiscalPorChaveMetadata, consultarNotaFiscalPorChaveRenderer } from "./consultar-nota-fiscal-por-chave";

// Renúncias Fiscais
import { consultarRenunciasFiscaisEmpresasHabilitadasMetadata, consultarRenunciasFiscaisEmpresasHabilitadasRenderer } from "./consultar-renuncias-fiscais-empresas-habilitadas";
import { consultarRenunciasFiscaisEmpresasImunesIsentasMetadata, consultarRenunciasFiscaisEmpresasImunesIsentasRenderer } from "./consultar-renuncias-fiscais-empresas-imunes-isentas";
import { consultarRenunciasValorMetadata, consultarRenunciasValorRenderer } from "./consultar-renuncias-valor";

// Registry of all tools
const toolRegistry: Record<string, {
  metadata: ToolMetadata;
  renderer?: ToolRenderer;
}> = {
  // Internal tools
  write_todos: { metadata: writeTodosMetadata, renderer: writeTodosRenderer },
  
  // Search
  internet_search: { metadata: internetSearchMetadata, renderer: internetSearchRenderer },
  
  // Servidores
  consultar_servidores: { metadata: consultarServidoresMetadata, renderer: consultarServidoresRenderer },
  consultar_servidor_por_id: { metadata: consultarServidorPorIdMetadata, renderer: consultarServidorPorIdRenderer },
  consultar_remuneracao_servidores: { metadata: consultarRemuneracaoServidoresMetadata, renderer: consultarRemuneracaoServidoresRenderer },
  consultar_servidores_funcoes_e_cargos: { metadata: consultarServidoresFuncoesECargosMetadata, renderer: consultarServidoresFuncoesECargosRenderer },
  consultar_servidores_por_orgao: { metadata: consultarServidoresPorOrgaoMetadata, renderer: consultarServidoresPorOrgaoRenderer },
  
  // Despesas
  consultar_despesas_por_orgao: { metadata: consultarDespesasPorOrgaoMetadata, renderer: consultarDespesasPorOrgaoRenderer },
  consultar_recursos_recebidos: { metadata: consultarRecursosRecebidosMetadata, renderer: consultarRecursosRecebidosRenderer },
  consultar_despesas_documentos: { metadata: consultarDespesasDocumentosMetadata, renderer: consultarDespesasDocumentosRenderer },
  consultar_despesas_documentos_por_favorecido: { metadata: consultarDespesasDocumentosPorFavorecidoMetadata, renderer: consultarDespesasDocumentosPorFavorecidoRenderer },
  consultar_despesas_documentos_relacionados: { metadata: consultarDespesasDocumentosRelacionadosMetadata, renderer: consultarDespesasDocumentosRelacionadosRenderer },
  consultar_despesas_documento_por_codigo: { metadata: consultarDespesasDocumentoPorCodigoMetadata, renderer: consultarDespesasDocumentoPorCodigoRenderer },
  consultar_despesas_empenhos_impactados: { metadata: consultarDespesasEmpenhosImpactadosMetadata, renderer: consultarDespesasEmpenhosImpactadosRenderer },
  consultar_despesas_favorecidos_finais_por_documento: { metadata: consultarDespesasFavorecidosFinaisPorDocumentoMetadata, renderer: consultarDespesasFavorecidosFinaisPorDocumentoRenderer },
  consultar_despesas_funcional_programatica_acoes: { metadata: consultarDespesasFuncionalProgramaticaAcoesMetadata, renderer: consultarDespesasFuncionalProgramaticaAcoesRenderer },
  consultar_despesas_funcional_programatica_funcoes: { metadata: consultarDespesasFuncionalProgramaticaFuncoesMetadata, renderer: consultarDespesasFuncionalProgramaticaFuncoesRenderer },
  consultar_despesas_funcional_programatica_listar: { metadata: consultarDespesasFuncionalProgramaticaListarMetadata, renderer: consultarDespesasFuncionalProgramaticaListarRenderer },
  consultar_despesas_funcional_programatica_programas: { metadata: consultarDespesasFuncionalProgramaticaProgramasMetadata, renderer: consultarDespesasFuncionalProgramaticaProgramasRenderer },
  consultar_despesas_funcional_programatica_subfuncoes: { metadata: consultarDespesasFuncionalProgramaticaSubfuncoesMetadata, renderer: consultarDespesasFuncionalProgramaticaSubfuncoesRenderer },
  consultar_despesas_itens_empenho: { metadata: consultarDespesasItensEmpenhoMetadata, renderer: consultarDespesasItensEmpenhoRenderer },
  consultar_despesas_itens_empenho_historico: { metadata: consultarDespesasItensEmpenhoHistoricoMetadata, renderer: consultarDespesasItensEmpenhoHistoricoRenderer },
  consultar_despesas_plano_orcamentario: { metadata: consultarDespesasPlanoOrcamentarioMetadata, renderer: consultarDespesasPlanoOrcamentarioRenderer },
  consultar_despesas_por_funcional_programatica: { metadata: consultarDespesasPorFuncionalProgramaticaMetadata, renderer: consultarDespesasPorFuncionalProgramaticaRenderer },
  consultar_despesas_por_funcional_programatica_movimentacao_liquida: { metadata: consultarDespesasPorFuncionalProgramaticaMovimentacaoLiquidaMetadata, renderer: consultarDespesasPorFuncionalProgramaticaMovimentacaoLiquidaRenderer },
  consultar_despesas_tipo_transferencia: { metadata: consultarDespesasTipoTransferenciaMetadata, renderer: consultarDespesasTipoTransferenciaRenderer },
  
  // Contratos
  consultar_contratos: { metadata: consultarContratosMetadata, renderer: consultarContratosRenderer },
  consultar_contrato_por_id: { metadata: consultarContratoPorIdMetadata, renderer: consultarContratoPorIdRenderer },
  consultar_contratos_por_cpf_cnpj: { metadata: consultarContratosPorCpfCnpjMetadata, renderer: consultarContratosPorCpfCnpjRenderer },
  consultar_contratos_apostilamento: { metadata: consultarContratosApostilamentoMetadata, renderer: consultarContratosApostilamentoRenderer },
  consultar_contratos_documentos_relacionados: { metadata: consultarContratosDocumentosRelacionadosMetadata, renderer: consultarContratosDocumentosRelacionadosRenderer },
  consultar_contratos_itens_contratados: { metadata: consultarContratosItensContratadosMetadata, renderer: consultarContratosItensContratadosRenderer },
  consultar_contratos_por_numero: { metadata: consultarContratosPorNumeroMetadata, renderer: consultarContratosPorNumeroRenderer },
  consultar_contratos_por_processo: { metadata: consultarContratosPorProcessoMetadata, renderer: consultarContratosPorProcessoRenderer },
  consultar_contratos_termo_aditivo: { metadata: consultarContratosTermoAditivoMetadata, renderer: consultarContratosTermoAditivoRenderer },
  
  // Licitações
  consultar_licitacoes: { metadata: consultarLicitacoesMetadata, renderer: consultarLicitacoesRenderer },
  consultar_licitacao_por_id: { metadata: consultarLicitacaoPorIdMetadata, renderer: consultarLicitacaoPorIdRenderer },
  consultar_licitacoes_contratos_relacionados: { metadata: consultarLicitacoesContratosRelacionadosMetadata, renderer: consultarLicitacoesContratosRelacionadosRenderer },
  consultar_licitacoes_empenhos: { metadata: consultarLicitacoesEmpenhosMetadata, renderer: consultarLicitacoesEmpenhosRenderer },
  consultar_licitacoes_itens_licitados: { metadata: consultarLicitacoesItensLicitadosMetadata, renderer: consultarLicitacoesItensLicitadosRenderer },
  consultar_licitacoes_modalidades: { metadata: consultarLicitacoesModalidadesMetadata, renderer: consultarLicitacoesModalidadesRenderer },
  consultar_licitacoes_participantes: { metadata: consultarLicitacoesParticipantesMetadata, renderer: consultarLicitacoesParticipantesRenderer },
  consultar_licitacoes_por_processo: { metadata: consultarLicitacoesPorProcessoMetadata, renderer: consultarLicitacoesPorProcessoRenderer },
  consultar_licitacoes_por_ug_modalidade_numero: { metadata: consultarLicitacoesPorUgModalidadeNumeroMetadata, renderer: consultarLicitacoesPorUgModalidadeNumeroRenderer },
  consultar_licitacoes_ugs: { metadata: consultarLicitacoesUgsMetadata, renderer: consultarLicitacoesUgsRenderer },
  
  // Convênios
  consultar_convenios: { metadata: consultarConveniosMetadata, renderer: consultarConveniosRenderer },
  consultar_convenio_por_id: { metadata: consultarConvenioPorIdMetadata, renderer: consultarConvenioPorIdRenderer },
  consultar_convenios_por_numero: { metadata: consultarConveniosPorNumeroMetadata, renderer: consultarConveniosPorNumeroRenderer },
  consultar_convenios_por_numero_original: { metadata: consultarConveniosPorNumeroOriginalMetadata, renderer: consultarConveniosPorNumeroOriginalRenderer },
  consultar_convenios_por_numero_processo: { metadata: consultarConveniosPorNumeroProcessoMetadata, renderer: consultarConveniosPorNumeroProcessoRenderer },
  consultar_convenios_tipo_instrumento: { metadata: consultarConveniosTipoInstrumentoMetadata, renderer: consultarConveniosTipoInstrumentoRenderer },
  
  // Benefícios
  consultar_auxilio_brasil_por_municipio: { metadata: consultarAuxilioBrasilPorMunicipioMetadata, renderer: consultarAuxilioBrasilPorMunicipioRenderer },
  consultar_auxilio_brasil_sacado_beneficiario_por_municipio: { metadata: consultarAuxilioBrasilSacadoBeneficiarioPorMunicipioMetadata, renderer: consultarAuxilioBrasilSacadoBeneficiarioPorMunicipioRenderer },
  consultar_auxilio_brasil_sacado_por_nis: { metadata: consultarAuxilioBrasilSacadoPorNisMetadata, renderer: consultarAuxilioBrasilSacadoPorNisRenderer },
  consultar_auxilio_emergencial_beneficiario_por_municipio: { metadata: consultarAuxilioEmergencialBeneficiarioPorMunicipioMetadata, renderer: consultarAuxilioEmergencialBeneficiarioPorMunicipioRenderer },
  consultar_auxilio_emergencial_por_cpf_ou_nis: { metadata: consultarAuxilioEmergencialPorCpfOuNisMetadata, renderer: consultarAuxilioEmergencialPorCpfOuNisRenderer },
  consultar_auxilio_emergencial_por_municipio: { metadata: consultarAuxilioEmergencialPorMunicipioMetadata, renderer: consultarAuxilioEmergencialPorMunicipioRenderer },
  consultar_bolsa_familia_por_municipio: { metadata: consultarBolsaFamiliaPorMunicipioMetadata, renderer: consultarBolsaFamiliaPorMunicipioRenderer },
  consultar_bolsa_familia_por_nis: { metadata: consultarBolsaFamiliaPorNisMetadata, renderer: consultarBolsaFamiliaPorNisRenderer },
  consultar_bolsa_familia_disponivel_beneficiario_por_municipio: { metadata: consultarBolsaFamiliaDisponivelBeneficiarioPorMunicipioMetadata, renderer: consultarBolsaFamiliaDisponivelBeneficiarioPorMunicipioRenderer },
  consultar_bolsa_familia_disponivel_por_cpf_ou_nis: { metadata: consultarBolsaFamiliaDisponivelPorCpfOuNisMetadata, renderer: consultarBolsaFamiliaDisponivelPorCpfOuNisRenderer },
  consultar_bolsa_familia_antiga_por_municipio: { metadata: consultarBolsaFamiliaAntigaPorMunicipioMetadata, renderer: consultarBolsaFamiliaAntigaPorMunicipioRenderer },
  consultar_bolsa_familia_sacado_beneficiario_por_municipio: { metadata: consultarBolsaFamiliaSacadoBeneficiarioPorMunicipioMetadata, renderer: consultarBolsaFamiliaSacadoBeneficiarioPorMunicipioRenderer },
  consultar_bolsa_familia_sacado_por_nis: { metadata: consultarBolsaFamiliaSacadoPorNisMetadata, renderer: consultarBolsaFamiliaSacadoPorNisRenderer },
  consultar_bpc_beneficiario_por_municipio: { metadata: consultarBpcBeneficiarioPorMunicipioMetadata, renderer: consultarBpcBeneficiarioPorMunicipioRenderer },
  consultar_bpc_por_cpf_ou_nis: { metadata: consultarBpcPorCpfOuNisMetadata, renderer: consultarBpcPorCpfOuNisRenderer },
  consultar_bpc_por_municipio: { metadata: consultarBpcPorMunicipioMetadata, renderer: consultarBpcPorMunicipioRenderer },
  consultar_garantia_safra_por_municipio: { metadata: consultarGarantiaSafraPorMunicipioMetadata, renderer: consultarGarantiaSafraPorMunicipioRenderer },
  consultar_safra_beneficiario_por_municipio: { metadata: consultarSafraBeneficiarioPorMunicipioMetadata, renderer: consultarSafraBeneficiarioPorMunicipioRenderer },
  consultar_safra_por_cpf_ou_nis: { metadata: consultarSafraPorCpfOuNisMetadata, renderer: consultarSafraPorCpfOuNisRenderer },
  consultar_seguro_defeso_por_municipio: { metadata: consultarSeguroDefesoPorMunicipioMetadata, renderer: consultarSeguroDefesoPorMunicipioRenderer },
  consultar_seguro_defeso_beneficiario_por_municipio: { metadata: consultarSeguroDefesoBeneficiarioPorMunicipioMetadata, renderer: consultarSeguroDefesoBeneficiarioPorMunicipioRenderer },
  consultar_seguro_defeso_por_codigo: { metadata: consultarSeguroDefesoPorCodigoMetadata, renderer: consultarSeguroDefesoPorCodigoRenderer },
  consultar_novo_bolsa_familia_sacado_beneficiario_por_municipio: { metadata: consultarNovoBolsaFamiliaSacadoBeneficiarioPorMunicipioMetadata, renderer: consultarNovoBolsaFamiliaSacadoBeneficiarioPorMunicipioRenderer },
  consultar_peti_beneficiario_por_municipio: { metadata: consultarPetiBeneficiarioPorMunicipioMetadata, renderer: consultarPetiBeneficiarioPorMunicipioRenderer },
  consultar_peti_por_cpf_ou_nis: { metadata: consultarPetiPorCpfOuNisMetadata, renderer: consultarPetiPorCpfOuNisRenderer },
  consultar_peti_por_municipio: { metadata: consultarPetiPorMunicipioMetadata, renderer: consultarPetiPorMunicipioRenderer },
  
  // Acordos de Leniência
  consultar_acordos_leniencia: { metadata: consultarAcordosLenienciaMetadata, renderer: consultarAcordosLenienciaRenderer },
  consultar_acordo_leniencia_por_id: { metadata: consultarAcordoLenienciaPorIdMetadata, renderer: consultarAcordoLenienciaPorIdRenderer },
  
  // Sanções
  consultar_ceis: { metadata: consultarCeisMetadata, renderer: consultarCeisRenderer },
  consultar_ceis_por_id: { metadata: consultarCeisPorIdMetadata, renderer: consultarCeisPorIdRenderer },
  consultar_cnep: { metadata: consultarCnepMetadata, renderer: consultarCnepRenderer },
  consultar_cnep_por_id: { metadata: consultarCnepPorIdMetadata, renderer: consultarCnepPorIdRenderer },
  consultar_cepim: { metadata: consultarCepimMetadata, renderer: consultarCepimRenderer },
  consultar_cepim_por_id: { metadata: consultarCepimPorIdMetadata, renderer: consultarCepimPorIdRenderer },
  consultar_ceaf: { metadata: consultarCeafMetadata, renderer: consultarCeafRenderer },
  consultar_ceaf_por_id: { metadata: consultarCeafPorIdMetadata, renderer: consultarCeafPorIdRenderer },
  
  // Viagens
  consultar_viagens: { metadata: consultarViagensMetadata, renderer: consultarViagensRenderer },
  consultar_viagens_por_cpf: { metadata: consultarViagensPorCpfMetadata, renderer: consultarViagensPorCpfRenderer },
  consultar_viagem_por_id: { metadata: consultarViagemPorIdMetadata, renderer: consultarViagemPorIdRenderer },
  
  // Emendas
  consultar_emendas: { metadata: consultarEmendasMetadata, renderer: consultarEmendasRenderer },
  consultar_emendas_documentos: { metadata: consultarEmendasDocumentosMetadata, renderer: consultarEmendasDocumentosRenderer },
  
  // Órgãos
  consultar_orgaos_siafi: { metadata: consultarOrgaosSiafiMetadata, renderer: consultarOrgaosSiafiRenderer },
  consultar_orgaos_siape: { metadata: consultarOrgaosSiapeMetadata, renderer: consultarOrgaosSiapeRenderer },
  
  // Pessoas
  consultar_pessoa_juridica: { metadata: consultarPessoaJuridicaMetadata, renderer: consultarPessoaJuridicaRenderer },
  consultar_pessoa_fisica: { metadata: consultarPessoaFisicaMetadata, renderer: consultarPessoaFisicaRenderer },
  consultar_peps: { metadata: consultarPepsMetadata, renderer: consultarPepsRenderer },
  consultar_permissionarios: { metadata: consultarPermissionariosMetadata, renderer: consultarPermissionariosRenderer },
  
  // Cartões
  consultar_cartoes_pagamento: { metadata: consultarCartoesPagamentoMetadata, renderer: consultarCartoesPagamentoRenderer },
  
  // Imóveis
  consultar_imoveis_funcionais: { metadata: consultarImoveisFuncionaisMetadata, renderer: consultarImoveisFuncionaisRenderer },
  consultar_situacao_imovel: { metadata: consultarSituacaoImovelMetadata, renderer: consultarSituacaoImovelRenderer },
  
  // COVID-19
  consultar_coronavirus_transferencias: { metadata: consultarCoronavirusTransferenciasMetadata, renderer: consultarCoronavirusTransferenciasRenderer },
  consultar_coronavirus_movimento_liquido_despesa: { metadata: consultarCoronavirusMovimentoLiquidoDespesaMetadata, renderer: consultarCoronavirusMovimentoLiquidoDespesaRenderer },
  
  // Notas Fiscais
  consultar_notas_fiscais: { metadata: consultarNotasFiscaisMetadata, renderer: consultarNotasFiscaisRenderer },
  consultar_nota_fiscal_por_chave: { metadata: consultarNotaFiscalPorChaveMetadata, renderer: consultarNotaFiscalPorChaveRenderer },
  
  // Renúncias Fiscais
  consultar_renuncias_fiscais_empresas_habilitadas: { metadata: consultarRenunciasFiscaisEmpresasHabilitadasMetadata, renderer: consultarRenunciasFiscaisEmpresasHabilitadasRenderer },
  consultar_renuncias_fiscais_empresas_imunes_isentas: { metadata: consultarRenunciasFiscaisEmpresasImunesIsentasMetadata, renderer: consultarRenunciasFiscaisEmpresasImunesIsentasRenderer },
  consultar_renuncias_valor: { metadata: consultarRenunciasValorMetadata, renderer: consultarRenunciasValorRenderer },
};

// Helper functions
export function getToolMetadata(toolName: string): ToolMetadata {
  return toolRegistry[toolName]?.metadata || { label: toolName };
}

export function getToolRenderer(toolName: string): ToolRenderer | undefined {
  return toolRegistry[toolName]?.renderer;
}

export function hasCustomRenderer(toolName: string): boolean {
  return !!toolRegistry[toolName]?.renderer;
}

export function hasCustomInputRenderer(toolName: string): boolean {
  return !!toolRegistry[toolName]?.renderer?.renderInput;
}

export function hasCustomOutputRenderer(toolName: string): boolean {
  return !!toolRegistry[toolName]?.renderer?.renderOutput;
}

export function getToolLabel(toolName: string, input?: any): string {
  const tool = toolRegistry[toolName];
  if (tool?.renderer?.getLabel) {
    return tool.renderer.getLabel(input);
  }
  return tool?.metadata?.label || toolName;
}

export function getInputLabel(toolName: string, viewMode: "normal" | "raw"): string {
  const tool = toolRegistry[toolName];
  if (tool?.renderer?.getInputLabel) {
    return tool.renderer.getInputLabel(viewMode);
  }
  return viewMode === "raw" ? "Parâmetros" : "Parâmetros";
}

export function getOutputLabel(toolName: string, viewMode: "normal" | "raw"): string {
  const tool = toolRegistry[toolName];
  if (tool?.renderer?.getOutputLabel) {
    return tool.renderer.getOutputLabel(viewMode);
  }
  return viewMode === "raw" ? "Resultado" : "Resultado";
}

export function renderCustomInput(toolName: string, input: any): React.ReactNode | null {
  const renderer = toolRegistry[toolName]?.renderer;
  if (renderer?.renderInput) {
    return renderer.renderInput(input);
  }
  return null;
}

export function renderCustomOutput(toolName: string, output: any): React.ReactNode | null {
  const renderer = toolRegistry[toolName]?.renderer;
  if (renderer?.renderOutput) {
    return renderer.renderOutput(output);
  }
  return null;
}

export { toolRegistry };
