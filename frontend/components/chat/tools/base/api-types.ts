/**
 * Shared API Types for Portal da Transparência
 * Based on OpenAPI spec: https://api.portaldatransparencia.gov.br/v3/api-docs
 * 
 * These types match the API schemas exactly for strong typing.
 */

// ============================================================================
// Common/Shared DTOs
// ============================================================================

export interface CodigoDescricaoDTO {
  codigo: string;
  descricao: string;
}

export interface IdDescricaoDTO {
  id: number;
  descricao: string;
}

export interface IdCodigoDescricaoDTO {
  id: number;
  codigo: string;
  descricao: string;
}

export interface MunicipioDTO {
  codigoIBGE: string;
  nomeIBGE: string;
  ppiStoplg: string;
  uf: UFDTO;
}

export interface UFDTO {
  sigla: string;
  nome: string;
}

export interface UFLotacaoDTO {
  sigla: string;
  nome: string;
}

// ============================================================================
// Órgão DTOs
// ============================================================================

export interface OrgaoMaximoDTO {
  codigo: string;
  nome: string;
  sigla: string;
}

export interface OrgaoDTO {
  nome: string;
  codigoSIAFI: string;
  cnpj: string;
  sigla: string;
  descricaoPoder: string;
  orgaoMaximo: OrgaoMaximoDTO;
}

export interface OrgaoVinculadoDTO {
  codigoSIAFI: string;
  nome: string;
  sigla: string;
  cnpj: string;
  codigoDescricaoPoder: string;
  descricaoPoder: string;
}

export interface OrgaoServidorDTO {
  codigo: string;
  nome: string;
  sigla?: string;
}

export interface OrgaoSancionadorDTO {
  nome: string;
  poder: string;
  sigla: string;
}

export interface OrgaoResponsavelDTO {
  codigo: string;
  codigoSIAFI: string;
  nome: string;
}

export interface OrgaoCeafDTO {
  codigo: string;
  nome: string;
}

export interface UnidadeGestoraDTO {
  codigo: string;
  nome: string;
  descricaoPoder: string;
  orgaoVinculado: OrgaoVinculadoDTO;
  orgaoMaximo: OrgaoMaximoDTO;
}

// ============================================================================
// Pessoa DTOs
// ============================================================================

export interface PessoaDTO {
  cpfFormatado?: string;
  cnpjFormatado?: string;
  nome: string;
  tipo?: string;
  codigoFormatado?: string;
  numeroInscricaoSocial?: string;
}

export interface BeneficiarioDTO {
  cpfFormatado: string;
  nis: string;
  nome: string;
}

export interface PessoaFisicaDTO {
  cpf: string;
  nome: string;
  nis: string;
  favorecidoDespesas: boolean;
  servidor: boolean;
  beneficiarioDiarias: boolean;
  permissionario: boolean;
  contratado: boolean;
  sancionadoCEIS: boolean;
  sancionadoCNEP: boolean;
  sancionadoCEAF: boolean;
  portadorCPDC: boolean;
  portadorCPGF: boolean;
  favorecidoBolsaFamilia: boolean;
  favorecidoPeti: boolean;
  favorecidoSafra: boolean;
  favorecidoSeguroDefeso: boolean;
  favorecidoBpc: boolean;
  favorecidoTransferencias: boolean;
  favorecidoCPCC: boolean;
  favorecidoCPDC: boolean;
  favorecidoCPGF: boolean;
  participanteLicitacao: boolean;
  servidorInativo: boolean;
  pensionistaOuRepresentanteLegal: boolean;
  instituidorPensao: boolean;
  auxilioEmergencial: boolean;
  favorecidoAuxilioBrasil: boolean;
  favorecidoNovoBolsaFamilia: boolean;
  favorecidoAuxilioReconstrucao: boolean;
}

export interface PessoaJuridicaDTO {
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  favorecidoDespesas: boolean;
  possuiContratacao: boolean;
  convenios: boolean;
  favorecidoTransferencias: boolean;
  sancionadoCEPIM: boolean;
  sancionadoCEIS: boolean;
  sancionadoCNEP: boolean;
  sancionadoCEAF: boolean;
  participanteLicitacao: boolean;
  emitiuNFe: boolean;
  beneficiadoRenunciaFiscal: boolean;
  isentoImuneRenunciaFiscal: boolean;
  habilitadoRenunciaFiscal: boolean;
}

// ============================================================================
// Sanção DTOs
// ============================================================================

export interface TipoSancaoDTO {
  descricaoResumida: string;
  descricaoPortal: string;
}

export interface FonteSancaoDTO {
  nomeExibicao: string;
  endpoint: string;
}

export interface SancionadoDTO {
  nome: string;
  codigoFormatado: string;
  tipo: string;
}

export interface TipoPunicaoDTO {
  descricao: string;
}

export interface PunicaoDTO {
  codigo: string;
  descricao: string;
}

export interface CeisDTO {
  id: number;
  dataReferencia: string;
  dataInicioSancao: string;
  dataFimSancao: string;
  dataPublicacaoSancao: string;
  dataTransitadoJulgado: string;
  dataOrigemInformacao: string;
  tipoSancao: TipoSancaoDTO;
  fonteSancao: FonteSancaoDTO;
  fundamentacao: CodigoDescricaoDTO[];
  orgaoSancionador: OrgaoSancionadorDTO;
  sancionado: SancionadoDTO;
  pessoa: PessoaDTO;
  textoPublicacao: string;
  linkPublicacao: string;
  detalhamentoPublicacao: string;
  numeroProcesso: string;
  abrangenciaDefinidaDecisaoJudicial: string;
  informacoesAdicionaisDoOrgaoSancionador: string;
}

export interface CnepDTO {
  id: number;
  dataReferencia: string;
  dataInicioSancao: string;
  dataFimSancao: string;
  dataPublicacaoSancao: string;
  dataTransitadoJulgado: string;
  dataOrigemInformacao: string;
  tipoSancao: TipoSancaoDTO;
  fonteSancao: FonteSancaoDTO;
  fundamentacao: CodigoDescricaoDTO[];
  orgaoSancionador: OrgaoSancionadorDTO;
  sancionado: SancionadoDTO;
  valorMulta: string;
  pessoa: PessoaDTO;
  textoPublicacao: string;
  linkPublicacao: string;
  detalhamentoPublicacao: string;
  numeroProcesso: string;
  abrangenciaDefinidaDecisaoJudicial: string;
  informacoesAdicionaisDoOrgaoSancionador: string;
}

export interface DimConvenioDTO {
  numero: string;
  objeto: string;
}

export interface CepimDTO {
  id: number;
  dataReferencia: string;
  motivo: string;
  orgaoSuperior: OrgaoDTO;
  pessoaJuridica: PessoaDTO;
  convenio: DimConvenioDTO;
}

export interface CeafDTO {
  id: number;
  dataPublicacao: string;
  dataReferencia: string;
  punicao: PunicaoDTO;
  tipoPunicao: TipoPunicaoDTO;
  pessoa: PessoaDTO;
  orgaoLotacao: OrgaoCeafDTO;
  ufLotacaoPessoa: UFLotacaoDTO;
  cargoEfetivo: string;
  codigoCargoComissao: string;
  cargoComissao: string;
  fundamentacao: CodigoDescricaoDTO[];
}

// ============================================================================
// Servidor DTOs
// ============================================================================

export interface FuncaoServidorDTO {
  codigoFuncaoCargo: string;
  descricaoFuncaoCargo: string;
}

export interface ServidorInativoDTO {
  id: number;
  pessoa: PessoaDTO;
  tipoServidor: string;
  situacao: string;
}

export interface PensionistaRepresentanteDTO {
  cpfRepresentanteLegal: string;
  nomeRepresentanteLegal: string;
}

export interface ServidorAposentadoPensionistaDTO {
  id: number;
  idServidorAposentadoPensionista: number;
  pessoa: PessoaDTO;
  situacao: string;
  orgaoServidorLotacao: OrgaoServidorDTO;
  orgaoServidorExercicio: OrgaoServidorDTO;
  estadoExercicio: UFDTO;
  tipoServidor: string;
  funcao: FuncaoServidorDTO;
  servidorInativoInstuidorPensao: ServidorInativoDTO;
  pensionistaRepresentante: PensionistaRepresentanteDTO;
  codigoMatriculaFormatado: string;
  flagAfastado: number;
}

export interface FichaCargoEfetivoDTO {
  cargo: string;
  classe: string;
  padrao: string;
  orgaoIngresso: OrgaoServidorDTO;
  diplomaIngresso: string;
  dataOcorrenciaIngresso: string;
}

export interface FichaFuncaoDTO {
  funcao: string;
  nivelFuncao: string;
  atividadeFuncao: string;
  opcaoVcOuFc: string;
  dataOcorrenciaIngresso: string;
}

export interface FichaMilitarDTO {
  posto: string;
  especialidade: string;
}

export interface FichaServidorCivilDTO {
  situacao: string;
  dataOcorrenciaIngresso: string;
}

export interface FichaAposentadoriaDTO {
  tipoAposentadoria: string;
  dataAposentadoria: string;
}

export interface FichaReformadoDTO {
  tipoReforma: string;
  dataReforma: string;
}

export interface FichaPensaoCivilDTO {
  tipoPensao: string;
  dataInicioPensao: string;
}

export interface FichaPensaoMilitarDTO {
  tipoPensao: string;
  dataInicioPensao: string;
}

export interface CadastroServidorDTO {
  servidor: ServidorAposentadoPensionistaDTO;
  fichasCargoEfetivo: FichaCargoEfetivoDTO[];
  fichasFuncao: FichaFuncaoDTO[];
  fichasMilitar: FichaMilitarDTO[];
  fichasDemaisSituacoes: FichaServidorCivilDTO[];
  fichasAposentadoria: FichaAposentadoriaDTO[];
  fichasReformado: FichaReformadoDTO[];
  fichasPensaoCivil: FichaPensaoCivilDTO[];
  fichasPensaoMilitar: FichaPensaoMilitarDTO[];
}

// ============================================================================
// Remuneração DTOs
// ============================================================================

export interface RubricaDTO {
  codigo: string;
  descricao: string;
  valor: string;
}

export interface JetomDTO {
  codigo: string;
  descricao: string;
  valor: string;
  empresa: string;
}

export interface HonorariosAdvocaticiosDTO {
  codigo: string;
  descricao: string;
  valor: string;
}

export interface RemuneracaoDTO {
  skMesReferencia: string;
  mesAno: string;
  valorTotalRemuneracaoAposDeducoes: string;
  valorTotalRemuneracaoDolarAposDeducoes: string;
  valorTotalJetons: string;
  valorTotalHonorariosAdvocaticios: string;
  rubricas: RubricaDTO[];
  jetons: JetomDTO[];
  honorariosAdvocaticios: HonorariosAdvocaticiosDTO[];
  observacoes: string[];
  remuneracaoBasicaBruta: string;
  remuneracaoBasicaBrutaDolar: string;
  abateRemuneracaoBasicaBruta: string;
  abateRemuneracaoBasicaBrutaDolar: string;
  gratificacaoNatalina: string;
  gratificacaoNatalinaDolar: string;
  abateGratificacaoNatalina: string;
  abateGratificacaoNatalinaDolar: string;
  ferias: string;
  feriasDolar: string;
  outrasRemuneracoesEventuais: string;
  outrasRemuneracoesEventuaisDolar: string;
  impostoRetidoNaFonte: string;
  impostoRetidoNaFonteDolar: string;
  previdenciaOficial: string;
  previdenciaOficialDolar: string;
  outrasDeducoesObrigatorias: string;
  outrasDeducoesObrigatoriasDolar: string;
  pensaoMilitar: string;
  pensaoMilitarDolar: string;
  fundoSaude: string;
  fundoSaudeDolar: string;
  taxaOcupacaoImovelFuncional: string;
  taxaOcupacaoImovelFuncionalDolar: string;
  verbasIndenizatoriasCivil: string;
  verbasIndenizatoriasCivilDolar: string;
  verbasIndenizatoriasMilitar: string;
  verbasIndenizatoriasMilitarDolar: string;
  verbasIndenizatoriasReferentesPDV: string;
  verbasIndenizatoriasReferentesPDVDolar: string;
  remuneracaoEmpresaPublica: boolean;
  existeValorMes: boolean;
  verbasIndenizatorias: string;
  verbasIndenizatoriasDolar: string;
  mesAnoPorExtenso: string;
}

export interface ServidorRemuneracaoDTO {
  servidor: ServidorAposentadoPensionistaDTO;
  remuneracoesDTO: RemuneracaoDTO[];
}

// ============================================================================
// Contrato DTOs
// ============================================================================

export interface CompraDTO {
  numero: string;
  objeto: string;
}

export interface ContratoDTO {
  id: number;
  numero: string;
  objeto: string;
  numeroProcesso: string;
  fundamentoLegal: string;
  compra: CompraDTO;
  situacaoContrato: string;
  modalidadeCompra: string;
  unidadeGestora: UnidadeGestoraDTO;
  unidadeGestoraCompras: UnidadeGestoraDTO;
  dataAssinatura: string;
  dataPublicacaoDOU: string;
  dataInicioVigencia: string;
  dataFimVigencia: string;
  fornecedor: PessoaDTO;
  valorInicialCompra: number;
  valorFinalCompra: number;
}

// ============================================================================
// Licitação DTOs
// ============================================================================

export interface LicitacaoDTO {
  id: number;
  licitacao: CompraDTO;
  dataResultadoCompra: string;
  dataAbertura: string;
  dataReferencia: string;
  dataPublicacao: string;
  situacaoCompra: string;
  modalidadeLicitacao: string;
  instrumentoLegal: string;
  valor: number;
  municipio: MunicipioDTO;
  unidadeGestora: UnidadeGestoraDTO;
}

// ============================================================================
// Convênio DTOs
// ============================================================================

export interface TipoInstrumentoDTO {
  codigo: string;
  descricao: string;
}

export interface SubfuncaoDTO {
  codigo: string;
  descricao: string;
}

export interface ConvenioDTO {
  id: number;
  dataReferencia: string;
  dataInicioVigencia: string;
  dataFinalVigencia: string;
  dataPublicacao: string;
  dataUltimaLiberacao: string;
  dataConclusao: string;
  dimConvenio: DimConvenioDTO;
  situacao: string;
  convenente: PessoaDTO;
  localidadePessoa: IdDescricaoDTO;
  municipioConvenente: MunicipioDTO;
  orgao: OrgaoDTO;
  unidadeGestora: UnidadeGestoraDTO;
  subfuncao: SubfuncaoDTO;
  tipoInstrumento: TipoInstrumentoDTO;
  valor: number;
  valorLiberado: number;
  valorContrapartida: number;
  valorDaUltimaLiberacao: number;
  numeroProcesso: string;
}

// ============================================================================
// Viagem DTOs
// ============================================================================

export interface CargoBeneficiarioDTO {
  codigo: string;
  descricao: string;
  uorg: string;
  orgao: string;
}

export interface FuncaoBeneficiarioDTO {
  codigo: string;
  descricao: string;
  nivelFuncao: string;
}

export interface DimViagemDTO {
  motivo: string;
  pcdp: string;
  ano: number;
  numPcdp: string;
  justificativaUrgente: string;
  urgenciaViagem: string;
}

export interface ViagemDTO {
  id: number;
  viagem: DimViagemDTO;
  situacao: string;
  beneficiario: BeneficiarioDTO;
  cargo: CargoBeneficiarioDTO;
  funcao: FuncaoBeneficiarioDTO;
  tipoViagem: string;
  orgao: OrgaoDTO;
  orgaoPagamento: OrgaoDTO;
  unidadeGestoraResponsavel: UnidadeGestoraDTO;
  dataInicioAfastamento: string;
  dataFimAfastamento: string;
  valorTotalRestituicao: number;
  valorTotalTaxaAgenciamento: number;
  valorMulta: number;
  valorTotalDiarias: number;
  valorTotalPassagem: number;
  valorTotalViagem: number;
  valorTotalDevolucao: number;
}

// ============================================================================
// Benefício Social DTOs
// ============================================================================

export interface TipoBeneficioDTO {
  id: number;
  descricao: string;
  descricaoDetalhada: string;
}

export interface BeneficioPorMunicipioDTO {
  id: number;
  dataReferencia: string;
  municipio: MunicipioDTO;
  tipo: TipoBeneficioDTO;
  valor: number;
  quantidadeBeneficiados: number;
}

export interface NovoBolsaFamiliaPagoDTO {
  id: number;
  dataMesCompetencia: string;
  dataMesReferencia: string;
  municipio: MunicipioDTO;
  beneficiarioNovoBolsaFamilia: BeneficiarioDTO;
  valorSaque: number;
}

export interface SafraDTO {
  id: number;
  beneficiarioSafra: BeneficiarioDTO;
  dataMesReferencia: string;
  municipio: MunicipioDTO;
  valor: number;
}

export interface SeguroDefesoDTO {
  id: number;
  pessoaSeguroDefeso: BeneficiarioDTO;
  municipio: MunicipioDTO;
  portaria: string;
  dataMesReferencia: string;
  dataSaque: string;
  dataEmissaoParcela: string;
  situacao: string;
  rgp: string;
  parcela: string;
  valor: number;
}

// ============================================================================
// Imóvel Funcional DTOs
// ============================================================================

export interface ImovelFuncionalDTO {
  id: number;
  dataReferencia: string;
  orgaoResponsavel: OrgaoResponsavelDTO;
  situacao: IdDescricaoDTO;
  regiao: IdDescricaoDTO;
  endereco: string;
  cep: string;
}

// ============================================================================
// Cartão de Pagamento DTOs
// ============================================================================

export interface CartoesDTO {
  id: number;
  mesExtrato: string;
  dataTransacao: string;
  valorTransacao: string;
  tipoCartao: IdCodigoDescricaoDTO;
  estabelecimento: PessoaDTO;
  unidadeGestora: UnidadeGestoraDTO;
  portador: BeneficiarioDTO;
}

// ============================================================================
// Nota Fiscal DTOs
// ============================================================================

export interface NotaFiscalDTO {
  id: number;
  codigoOrgaoSuperiorDestinatario: string;
  orgaoSuperiorDestinatario: string;
  codigoOrgaoDestinatario: string;
  orgaoDestinatario: string;
  nomeFornecedor: string;
  cnpjFornecedor: string;
  municipioFornecedor: string;
  chaveNotaFiscal: string;
  valorNotaFiscal: string;
  tipoEventoMaisRecente: string;
  dataTipoEventoMaisRecente: string;
  dataEmissao: string;
  numero: number;
  serie: number;
}

// ============================================================================
// Emenda Parlamentar DTOs
// ============================================================================

export interface ConsultaEmendasDTO {
  codigoEmenda: string;
  ano: number;
  tipoEmenda: string;
  autor: string;
  nomeAutor: string;
  numeroEmenda: string;
  localidadeDoGasto: string;
  funcao: string;
  subfuncao: string;
  valorEmpenhado: string;
  valorLiquidado: string;
  valorPago: string;
  valorRestoInscrito: string;
  valorRestoCancelado: string;
  valorRestoPago: string;
}

// ============================================================================
// Despesa DTOs
// ============================================================================

export interface DespesaAnualPorOrgaoDTO {
  ano: number;
  orgao: string;
  codigoOrgao: string;
  orgaoSuperior: string;
  codigoOrgaoSuperior: string;
  empenhado: string;
  liquidado: string;
  pago: string;
}

export interface PessoaRecursosRecebidosUGMesDesnormalizadaDTO {
  anoMes: number;
  codigoPessoa: string;
  nomePessoa: string;
  tipoPessoa: string;
  municipioPessoa: string;
  siglaUFPessoa: string;
  codigoUG: string;
  nomeUG: string;
  codigoOrgao: string;
  nomeOrgao: string;
  codigoOrgaoSuperior: string;
  nomeOrgaoSuperior: string;
  valor: number;
}

// ============================================================================
// COVID-19 DTOs
// ============================================================================

export interface TransferenciaCoronavirusDTO {
  mesAno: number;
  tipoTransferencia: string;
  codigoOrgao: string;
  orgao: string;
  tipoFavorecido: string;
  codigoFavorecido: string;
  favorecido: string;
  codigoFuncao: string;
  funcao: string;
  codigoPrograma: string;
  programa: string;
  codigoAcao: string;
  acao: string;
  codigoGrupoDespesa: string;
  grupoDespesa: string;
  codigoModalidadeAplicacaoDespesa: string;
  modalidadeAplicacaoDespesa: string;
  codigoElementoDespesa: string;
  elementoDespesa: string;
  valor: string;
}
// ============================================================================
// Additional DTOs for missing endpoints
// ============================================================================

export interface AcordosLenienciaDTO {
  id: number;
  dataInicioAcordo: string;
  dataFimAcordo: string;
  orgaoResponsavel: string;
  situacaoAcordo: string;
  sancoes: EmpresaSancionadaDTO[];
  quantidade: number;
}

export interface AuxilioBrasilPagoDTO {
  id: number;
  dataMesCompetencia: string;
  dataMesReferencia: string;
  municipio: MunicipioDTO;
  beneficiarioAuxilioBrasil: BeneficiarioDTO;
  dataSaque: string;
  valorSaque: number;
}

export interface AuxilioEmergencialDTO {
  id: number;
  mesDisponibilizacao: string;
  beneficiario: BeneficiarioDTO;
  responsavelAuxilioEmergencial: BeneficiarioDTO;
  municipio: MunicipioDTO;
  situacaoAuxilioEmergencial: string;
  enquadramentoAuxilioEmergencial: string;
  valor: number;
  numeroParcela: string;
}

export interface BolsaFamiliaDTO {
  id: number;
  dataMesCompetencia: string;
  dataMesReferencia: string;
  titularBolsaFamilia: BeneficiarioDTO;
  municipio: MunicipioDTO;
  valor: number;
  quantidadeDependentes: number;
}

export interface BolsaFamiliaPagoDTO {
  id: number;
  dataMesCompetencia: string;
  dataMesReferencia: string;
  municipio: MunicipioDTO;
  beneficiarioBolsaFamilia: BeneficiarioDTO;
  dataSaque: string;
  valorSaque: number;
}

export interface BPCDTO {
  id: number;
  dataMesCompetencia: string;
  dataMesReferencia: string;
  beneficiario: BeneficiarioBPCDTO;
  municipio: MunicipioDTO;
  valor: number;
  concedidoJudicialmente: boolean;
  menor16anos: boolean;
}

export interface PetiDTO {
  id: number;
  beneficiarioPeti: BeneficiarioDTO;
  dataDisponibilizacaoRecurso: string;
  dataMesReferencia: string;
  municipio: MunicipioDTO;
  situacao: string;
  valor: number;
}

export interface ApostilamentoDTO {
  numero: string;
  descricao: string;
  dataInclusao: string;
  situacao: string;
  valor: string;
}

export interface DocumentoRelacionadoDTO {
  data: string;
  fase: string;
  documento: string;
  documentoResumido: string;
  especie: string;
  orgaoSuperior: string;
  orgaoVinculado: string;
  unidadeGestora: string;
  elementoDespesa: string;
  favorecido: string;
  valor: string;
}

export interface ItemContratadoDTO {
  numero: string;
  descricao: string;
  quantidade: number;
  valor: string;
  descComplementarItemCompra: string;
}

export interface TermoAditivoDTO {
  numero: string;
  dataPublicacao: string;
  objetoAditivo: string;
}

export interface DespesasPorDocumentoDTO {
  data: string;
  documento: string;
  documentoResumido: string;
  observacao: string;
  funcao: string;
  subfuncao: string;
  programa: string;
  acao: string;
  subTitulo: string;
  localizadorGasto: string;
  fase: string;
  especie: string;
  favorecido: string;
  codigoFavorecido: string;
  nomeFavorecido: string;
  ufFavorecido: string;
  valor: string;
  codigoUg: string;
  ug: string;
  codigoUo: string;
  uo: string;
  codigoOrgao: string;
  orgao: string;
  codigoOrgaoSuperior: string;
  orgaoSuperior: string;
  categoria: string;
  grupo: string;
  elemento: string;
  modalidade: string;
  numeroProcesso: string;
  planoOrcamentario: string;
  autor: string;
  favorecidoIntermediario: boolean;
  favorecidoListaFaturas: boolean;
}

export interface EmpenhoImpactadoBasicoDTO {
  empenho: string;
  subitem: string;
  empenhoResumido: string;
  valorLiquidado: string;
  valorPago: string;
  valorRestoInscrito: string;
  valorRestoCancelado: string;
  valorRestoPago: string;
}

export interface ConsultaFavorecidosFinaisPorDocumentoDTO {
  skFatDW: number;
  codigoPagamento: string;
  codigoListaCredor: string;
  valorFinal: string;
  tipoOB: string;
  tipoDocumento: string;
  dataCarga: string;
  skPessoaFinal: number;
  codigoFavorecidoFinal: string;
  nomeFavorecidoFinal: string;
  tipoFavorecidoFinal: string;
  ufFavorecidoFinal: string;
  municipioFavorecidoFinal: string;
  skPessoaDespesa: number;
  codigoFavorecidoDespesa: string;
  nomeFavorecidoDespesa: string;
  tipoFavorecidoDespesa: string;
  codigoOrgaoSuperior: string;
  orgaoSuperior: string;
  codigoOrgaoVinculado: string;
  orgaoVinculado: string;
  codigoUnidadeGestora: string;
  unidadeGestora: string;
}

export interface FuncionalProgramaticaDTO {
  id: number;
  codigoFuncao: string;
  codigoSubfuncao: string;
  codigoPrograma: string;
  codigoAcao: string;
  ano: number;
}

export interface DimFuncionalProgramaticaDTO {
  id: number;
  codigo: string;
  descricao: string;
  ano: number;
}

export interface DespesasPorPlanoOrcamentarioDTO {
  id: number;
  codigo: string;
  descricao: string;
  codUnidadeOrcamentaria: string;
  codigoFuncao: string;
  codigoSubFuncao: string;
  codigoPrograma: string;
  codigoAcao: string;
  codPOIdAcompanhamento: string;
  descPOIdAcompanhamento: string;
  numAno: number;
}

export interface DespesaLiquidaAnualPorFuncaoESubfuncaoDTO {
  ano: number;
  funcao: string;
  codigoFuncao: string;
  subfuncao: string;
  codigoSubfuncao: string;
  programa: string;
  codigoPrograma: string;
  acao: string;
  codigoAcao: string;
  planoOrcamentario: string;
  idPlanoOrcamentario: number;
  codigoPlanoOrcamentario: string;
  grupoDespesa: string;
  codigoGrupoDespesa: string;
  elementoDespesa: string;
  codigoElementoDespesa: string;
  modalidadeDespesa: string;
  codigoModalidadeDespesa: string;
  empenhado: string;
  liquidado: string;
  pago: string;
}

export interface DocumentoRelacionadoEmendaDTO {
  id: number;
  data: string;
  fase: string;
  codigoDocumento: string;
  codigoDocumentoResumido: string;
  especieTipo: string;
  tipoEmenda: string;
}

export interface ItemLicitacaoDTO {
  codigoItemCompra: string;
  numero: string;
  descricao: string;
  quantidade: number;
  valor: string;
  cpfCnpjVencedor: string;
  tipoPessoa: string;
  idVencedor: string;
  nome: string;
  descComplementarItemCompra: string;
  descUnidadeFornecimento: string;
}

export interface ParticipanteLicitacaoDTO {
  tipoParticipante: string;
  idParticipante: string;
  cpfCnpj: string;
  nome: string;
}

export interface DetalheNotaFiscalDTO {
  notaFiscalDTO: NotaFiscalDTO;
  itensNotaFiscal: ItemNotaFiscalDTO[];
  eventosNotaFiscal: EventoNotaFiscalDTO[];
}

export interface PEPDTO {
  cpf: string;
  nome: string;
  sigla_funcao: string;
  descricao_funcao: string;
  nivel_funcao: string;
  cod_orgao: string;
  nome_orgao: string;
  dt_inicio_exercicio: string;
  dt_fim_exercicio: string;
  dt_fim_carencia: string;
}

export interface PermissionarioDTO {
  id: number;
  dataReferencia: string;
  orgaoResponsavel: OrgaoResponsavelDTO;
  dataInicioOcupacao: string;
  pessoaPermissionario: PessoaDTO;
  permissionario: BeneficiarioDTO;
  orgaoPermissionario: string;
  cargo: string;
  valorPagoMes: number;
}

export interface EmpresaHabilitadaBeneficioFiscalDTO {
  fruicaoVigente: string;
  dataInicioFruicao: string;
  dataFimFruicao: string;
  cnpj: string;
  beneficiario: string;
  nomeFantasia: string;
  uf: string;
  codigoIBGEMunicipio: string;
  municipio: string;
  cnaeCodigoGrupo: string;
  cnaeCodigoClasse: string;
  cnaeCodigoSubClasse: string;
  cnaeNomeClasse: string;
  cnaeDivisao: string;
  beneficioFiscal: string;
  descricao: string;
  fundamentoLegal: string;
}

export interface EmpresaImuneIsentaDTO {
  cnpj: string;
  beneficiario: string;
  nomeFantasia: string;
  uf: string;
  codigoIBGEMunicipio: string;
  municipio: string;
  cnaeCodigoGrupo: string;
  cnaeCodigoClasse: string;
  cnaeCodigoSubClasse: string;
  cnaeNomeClasse: string;
  cnaeDivisao: string;
  tipoEntidade: string;
  beneficioFiscal: string;
}

export interface RenunciaDTO {
  ano: number;
  valorRenunciado: number;
  tipoRenuncia: string;
  descricaoBeneficioFiscal: string;
  descricaoFundamentoLegal: string;
  tributo: string;
  formaTributacao: string;
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  cnaeCodigoGrupo: string;
  cnaeCodigoClasse: string;
  cnaeCodigoSubClasse: string;
  cnaeNomeClasse: string;
  cnaeDivisao: string;
  uf: string;
  municipio: string;
  codigoIBGE: string;
}

export interface ServidorPorOrgaoDTO {
  qntPessoas: number;
  qntVinculos: number;
  skSituacao: number;
  descSituacao: string;
  skTipoVinculo: number;
  descTipoVinculo: string;
  skTipoServidor: number;
  descTipoServidor: string;
  licenca: number;
  codOrgaoExercicioSiape: string;
  nomOrgaoExercicioSiape: string;
  codOrgaoSuperiorExercicioSiape: string;
  nomOrgaoSuperiorExercicioSiape: string;
}

export interface EmpresaSancionadaDTO {
  nomeInformadoOrgaoResponsavel: string;
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: string;
  cnpjFormatado: string;
}

export interface BeneficiarioBPCDTO {
  cpfFormatado: string;
  nis: string;
  nome: string;
  cpfRepresentanteLegalFormatado: string;
  nisRepresentanteLegal: string;
  nomeRepresentanteLegal: string;
}

export interface ItemNotaFiscalDTO {
  numeroProduto: string;
  descricaoProdutoServico: string;
  codigoNcmSh: string;
  ncmSh: string;
  cfop: string;
  quantidade: string;
  unidade: string;
  valorUnitario: string;
  valor: string;
}

export interface EventoNotaFiscalDTO {
  dataEvento: string;
  tipoEvento: string;
  evento: string;
  motivo: string;
}

export interface EmpenhoComprasDTO {
  empenho: string;
  empenhoResumido: string;
  dataEmissao: string;
  observacao: string;
  valor: string;
}

export interface HistoricoSubItemEmpenhoDTO {
  data: string;
  operacao: string;
  quantidade: string;
  valorUnitario: string;
  valorTotal: string;
}

export interface DespesaAnualPorFuncaoESubfuncaoDTO {
  ano: number;
  funcao: string;
  codigoFuncao: string;
  subfuncao: string;
  codigoSubfuncao: string;
  programa: string;
  codigoPrograma: string;
  acao: string;
  codigoAcao: string;
  empenhado: string;
  liquidado: string;
  pago: string;
}

