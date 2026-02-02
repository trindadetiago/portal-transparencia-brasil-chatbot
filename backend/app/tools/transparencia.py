"""
Portal da Transparência Tools.

Tools for accessing Brazilian Federal Government transparency data.
API Documentation: https://api.portaldatransparencia.gov.br/swagger-ui/index.html
"""

from typing import Any

from app.core.logging import get_logger
from app.tools.transparencia_client import make_request

logger = get_logger(__name__)


# =============================================================================
# Servidores (Federal Employees)
# =============================================================================

def consultar_servidores(
    pagina: int = 1,
    tipo_servidor: int | None = None,
    cpf: str | None = None,
    nome: str | None = None,
    orgao_exercicio: str | None = None,
    orgao_lotacao: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta servidores do Poder Executivo Federal.

    Args:
        pagina: Número da página (obrigatório)
        tipo_servidor: 1=Civil, 2=Militar
        cpf: CPF do servidor
        nome: Nome do servidor
        orgao_exercicio: Código SIAPE do órgão de exercício
        orgao_lotacao: Código SIAPE do órgão de lotação

    Returns:
        Lista de servidores encontrados
    """
    return make_request("servidores", {
        "pagina": pagina,
        "tipoServidor": tipo_servidor,
        "cpf": cpf,
        "nome": nome,
        "orgaoServidorExercicio": orgao_exercicio,
        "orgaoServidorLotacao": orgao_lotacao,
    })


def consultar_servidor_por_id(id: int) -> dict[str, Any] | str:
    """
    Consulta um servidor específico pelo ID.

    Args:
        id: ID do servidor

    Returns:
        Dados do servidor
    """
    return make_request(f"servidores/{id}")


def consultar_remuneracao_servidores(
    mes_ano: int,
    pagina: int = 1,
    id: int | None = None,
    cpf: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta remunerações de servidores.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM (ex: 202401) - obrigatório
        pagina: Número da página (padrão: 1)
        id: ID do servidor (idServidorAposentadoPensionista)
        cpf: CPF do servidor

    Returns:
        Lista de remunerações (ServidorRemuneracaoDTO[])
    """
    return make_request("servidores/remuneracao", {
        "mesAno": mes_ano,
        "pagina": pagina,
        "id": id,
        "cpf": cpf,
    })


# =============================================================================
# Despesas Públicas (Public Expenditures)
# =============================================================================

def consultar_despesas_por_orgao(
    ano: int,
    pagina: int = 1,
    orgao_superior: str | None = None,
    orgao: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta despesas públicas por órgão.

    Args:
        ano: Ano da despesa
        pagina: Número da página
        orgao_superior: Código do órgão superior
        orgao: Código do órgão

    Returns:
        Lista de despesas por órgão
    """
    return make_request("despesas/por-orgao", {
        "ano": ano,
        "pagina": pagina,
        "orgaoSuperior": orgao_superior,
        "orgao": orgao,
    })


def consultar_recursos_recebidos(
    mes_ano_inicio: str,
    mes_ano_fim: str,
    pagina: int = 1,
    nome_favorecido: str | None = None,
    codigo_favorecido: str | None = None,
    uf: str | None = None,
    codigo_ibge: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta recebimento de recursos por favorecido.

    Args:
        mes_ano_inicio: Mês/Ano inicial no formato YYYYMM
        mes_ano_fim: Mês/Ano final no formato YYYYMM
        pagina: Número da página
        nome_favorecido: Nome do favorecido
        codigo_favorecido: CPF ou CNPJ do favorecido
        uf: Sigla da UF
        codigo_ibge: Código IBGE do município

    Returns:
        Lista de recursos recebidos
    """
    return make_request("despesas/recursos-recebidos", {
        "mesAnoInicio": mes_ano_inicio,
        "mesAnoFim": mes_ano_fim,
        "pagina": pagina,
        "nomeFavorecido": nome_favorecido,
        "codigoFavorecido": codigo_favorecido,
        "uf": uf,
        "codigoIBGE": codigo_ibge,
    })


def consultar_despesas_documentos(
    pagina: int = 1,
    codigo_orgao: str | None = None,
    mes_ano: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta documentos de despesas.

    Args:
        pagina: Número da página (padrão: 1) - obrigatório
        codigo_orgao: Código do órgão
        mes_ano: Mês/Ano no formato YYYYMM

    Returns:
        Lista de documentos (DespesasPorDocumentoDTO[])
    """
    return make_request("despesas/documentos", {
        "pagina": pagina,
        "codigoOrgao": codigo_orgao,
        "mesAno": mes_ano,
    })


def consultar_despesas_documentos_por_favorecido(
    mes_ano: str,
    codigo_favorecido: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta documentos de despesas por favorecido.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM - obrigatório
        codigo_favorecido: CPF ou CNPJ do favorecido - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de documentos (DespesasPorDocumentoDTO[])
    """
    return make_request("despesas/documentos-por-favorecido", {
        "mesAno": mes_ano,
        "codigoFavorecido": codigo_favorecido,
        "pagina": pagina,
    })


def consultar_despesas_documentos_relacionados(
    codigo_documento: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta documentos relacionados a uma despesa.

    Args:
        codigo_documento: Código do documento - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de documentos relacionados (DocumentoRelacionadoDTO[])
    """
    return make_request("despesas/documentos-relacionados", {
        "codigoDocumento": codigo_documento,
        "pagina": pagina,
    })


def consultar_despesas_documento_por_codigo(
    codigo: str,
) -> dict[str, Any] | str:
    """
    Consulta um documento de despesa por código.

    Args:
        codigo: Código do documento - obrigatório

    Returns:
        Dados do documento (DespesasPorDocumentoDTO)
    """
    return make_request(f"despesas/documentos/{codigo}")


def consultar_despesas_empenhos_impactados(
    codigo_documento: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta empenhos impactados por um documento.

    Args:
        codigo_documento: Código do documento - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de empenhos impactados (EmpenhoImpactadoBasicoDTO[])
    """
    return make_request("despesas/empenhos-impactados", {
        "codigoDocumento": codigo_documento,
        "pagina": pagina,
    })


def consultar_despesas_favorecidos_finais_por_documento(
    codigo_documento: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta favorecidos finais por documento.

    Args:
        codigo_documento: Código do documento - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de favorecidos finais (ConsultaFavorecidosFinaisPorDocumentoDTO[])
    """
    return make_request("despesas/favorecidos-finais-por-documento", {
        "codigoDocumento": codigo_documento,
        "pagina": pagina,
    })


def consultar_despesas_funcional_programatica_acoes(
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta ações da classificação funcional programática.

    Args:
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de ações (FuncionalProgramaticaDTO[])
    """
    return make_request("despesas/funcional-programatica/acoes", {
        "pagina": pagina,
    })


def consultar_despesas_funcional_programatica_funcoes(
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta funções da classificação funcional programática.

    Args:
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de funções (FuncionalProgramaticaDTO[])
    """
    return make_request("despesas/funcional-programatica/funcoes", {
        "pagina": pagina,
    })


def consultar_despesas_funcional_programatica_listar(
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta classificação funcional programática completa.

    Args:
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista completa (DimFuncionalProgramaticaDTO[])
    """
    return make_request("despesas/funcional-programatica/listar", {
        "pagina": pagina,
    })


def consultar_despesas_funcional_programatica_programas(
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta programas da classificação funcional programática.

    Args:
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de programas (FuncionalProgramaticaDTO[])
    """
    return make_request("despesas/funcional-programatica/programas", {
        "pagina": pagina,
    })


def consultar_despesas_funcional_programatica_subfuncoes(
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta subfunções da classificação funcional programática.

    Args:
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de subfunções (FuncionalProgramaticaDTO[])
    """
    return make_request("despesas/funcional-programatica/subfuncoes", {
        "pagina": pagina,
    })


def consultar_despesas_itens_empenho(
    codigo_documento: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta itens de empenho.

    Args:
        codigo_documento: Código do documento - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de itens de empenho (EmpenhoComprasDTO[])
    """
    return make_request("despesas/itens-de-empenho", {
        "codigoDocumento": codigo_documento,
        "pagina": pagina,
    })


def consultar_despesas_itens_empenho_historico(
    codigo_documento: str,
    numero_item: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta histórico de itens de empenho.

    Args:
        codigo_documento: Código do documento - obrigatório
        numero_item: Número do item - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de histórico (HistoricoSubItemEmpenhoDTO[])
    """
    return make_request("despesas/itens-de-empenho/historico", {
        "codigoDocumento": codigo_documento,
        "numeroItem": numero_item,
        "pagina": pagina,
    })


def consultar_despesas_plano_orcamentario(
    ano: int,
    pagina: int = 1,
    codigo_orgao: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta despesas por plano orçamentário.

    Args:
        ano: Ano da despesa - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório
        codigo_orgao: Código do órgão

    Returns:
        Lista de despesas (DespesasPorPlanoOrcamentarioDTO[])
    """
    return make_request("despesas/plano-orcamentario", {
        "ano": ano,
        "pagina": pagina,
        "codigoOrgao": codigo_orgao,
    })


def consultar_despesas_por_funcional_programatica(
    ano: int,
    pagina: int = 1,
    funcao: str | None = None,
    subfuncao: str | None = None,
    programa: str | None = None,
    acao: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta as despesas do Poder Executivo Federal pela classificação funcional programática.

    Args:
        ano: Ano da despesa - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório
        funcao: Código da função
        subfuncao: Código da subfunção
        programa: Código do programa
        acao: Código da ação

    Returns:
        Lista de despesas (DespesaAnualPorFuncaoESubfuncaoDTO[])
    """
    return make_request("despesas/por-funcional-programatica", {
        "ano": ano,
        "pagina": pagina,
        "funcao": funcao,
        "subfuncao": subfuncao,
        "programa": programa,
        "acao": acao,
    })


def consultar_despesas_por_funcional_programatica_movimentacao_liquida(
    ano: int,
    pagina: int = 1,
    funcao: str | None = None,
    subfuncao: str | None = None,
    programa: str | None = None,
    acao: str | None = None,
    grupo_despesa: str | None = None,
    elemento_despesa: str | None = None,
    modalidade_aplicacao: str | None = None,
    id_plano_orcamentario: int | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta de movimentação líquida anual das despesas do Poder Executivo Federal pela classificação funcional programática.

    Args:
        ano: Ano da despesa - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório
        funcao: Código da função
        subfuncao: Código da subfunção
        programa: Código do programa
        acao: Código da ação
        grupo_despesa: Código do grupo de despesa
        elemento_despesa: Código do elemento de despesa
        modalidade_aplicacao: Código da modalidade de aplicação
        id_plano_orcamentario: ID do plano orçamentário

    Returns:
        Lista de movimentação líquida (DespesaLiquidaAnualPorFuncaoESubfuncaoDTO[])
    """
    return make_request("despesas/por-funcional-programatica/movimentacao-liquida", {
        "ano": ano,
        "pagina": pagina,
        "funcao": funcao,
        "subfuncao": subfuncao,
        "programa": programa,
        "acao": acao,
        "grupoDespesa": grupo_despesa,
        "elementoDespesa": elemento_despesa,
        "modalidadeAplicacao": modalidade_aplicacao,
        "idPlanoOrcamentario": id_plano_orcamentario,
    })


def consultar_despesas_tipo_transferencia(
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta os tipos de transferências usados nas despesas.

    Returns:
        Lista de tipos de transferência (IdDescricaoDTO[])
    """
    return make_request("despesas/tipo-transferencia")


# =============================================================================
# Contratos (Contracts)
# =============================================================================

def consultar_contratos(
    codigo_orgao: str,
    pagina: int = 1,
    data_inicial: str | None = None,
    data_final: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta contratos do Poder Executivo Federal.

    Args:
        codigo_orgao: Código SIAFI do órgão
        pagina: Número da página
        data_inicial: Data inicial (DD/MM/AAAA)
        data_final: Data final (DD/MM/AAAA)

    Returns:
        Lista de contratos
    """
    return make_request("contratos", {
        "codigoOrgao": codigo_orgao,
        "pagina": pagina,
        "dataInicial": data_inicial,
        "dataFinal": data_final,
    })


def consultar_contrato_por_id(id: int) -> dict[str, Any] | str:
    """
    Consulta um contrato específico pelo ID.

    Args:
        id: ID do contrato

    Returns:
        Dados do contrato
    """
    return make_request("contratos/id", {"id": id})


def consultar_contratos_por_cpf_cnpj(
    cpf_cnpj: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta contratos por CPF ou CNPJ do fornecedor.

    Args:
        cpf_cnpj: CPF ou CNPJ do fornecedor
        pagina: Número da página

    Returns:
        Lista de contratos
    """
    return make_request("contratos/cpf-cnpj", {
        "cpfCnpj": cpf_cnpj,
        "pagina": pagina,
    })


def consultar_contratos_apostilamento(
    codigo_ug: str,
    numero: str,
    codigo_modalidade: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta apostilamentos de contratos.

    Args:
        codigo_ug: Código da Unidade Gestora - obrigatório
        numero: Número do contrato - obrigatório
        codigo_modalidade: Código da modalidade - obrigatório
        pagina: Número da página (padrão: 1)

    Returns:
        Lista de apostilamentos (ApostilamentoDTO[])
    """
    return make_request("contratos/apostilamento", {
        "codigoUG": codigo_ug,
        "numero": numero,
        "codigoModalidade": codigo_modalidade,
        "pagina": pagina,
    })


def consultar_contratos_documentos_relacionados(
    codigo_ug: str,
    numero: str,
    codigo_modalidade: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta documentos relacionados ao contrato.

    Args:
        codigo_ug: Código da Unidade Gestora - obrigatório
        numero: Número do contrato - obrigatório
        codigo_modalidade: Código da modalidade - obrigatório
        pagina: Número da página (padrão: 1)

    Returns:
        Lista de documentos relacionados (DocumentoRelacionadoDTO[])
    """
    return make_request("contratos/documentos-relacionados", {
        "codigoUG": codigo_ug,
        "numero": numero,
        "codigoModalidade": codigo_modalidade,
        "pagina": pagina,
    })


def consultar_contratos_itens_contratados(
    codigo_ug: str,
    numero: str,
    codigo_modalidade: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta itens contratados.

    Args:
        codigo_ug: Código da Unidade Gestora - obrigatório
        numero: Número do contrato - obrigatório
        codigo_modalidade: Código da modalidade - obrigatório
        pagina: Número da página (padrão: 1)

    Returns:
        Lista de itens contratados (ItemContratadoDTO[])
    """
    return make_request("contratos/itens-contratados", {
        "codigoUG": codigo_ug,
        "numero": numero,
        "codigoModalidade": codigo_modalidade,
        "pagina": pagina,
    })


def consultar_contratos_por_numero(
    codigo_ug: str,
    numero: str,
    codigo_modalidade: str,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta contratos por número.

    Args:
        codigo_ug: Código da Unidade Gestora - obrigatório
        numero: Número do contrato - obrigatório
        codigo_modalidade: Código da modalidade - obrigatório

    Returns:
        Lista de contratos (ContratoDTO[])
    """
    return make_request("contratos/numero", {
        "codigoUG": codigo_ug,
        "numero": numero,
        "codigoModalidade": codigo_modalidade,
    })


def consultar_contratos_por_processo(
    numero_processo: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta contratos por processo.

    Args:
        numero_processo: Número do processo - obrigatório
        pagina: Número da página (padrão: 1)

    Returns:
        Lista de contratos (ContratoDTO[])
    """
    return make_request("contratos/processo", {
        "numeroProcesso": numero_processo,
        "pagina": pagina,
    })


def consultar_contratos_termo_aditivo(
    codigo_ug: str,
    numero: str,
    codigo_modalidade: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta termos aditivos do contrato.

    Args:
        codigo_ug: Código da Unidade Gestora - obrigatório
        numero: Número do contrato - obrigatório
        codigo_modalidade: Código da modalidade - obrigatório
        pagina: Número da página (padrão: 1)

    Returns:
        Lista de termos aditivos (TermoAditivoDTO[])
    """
    return make_request("contratos/termo-aditivo", {
        "codigoUG": codigo_ug,
        "numero": numero,
        "codigoModalidade": codigo_modalidade,
        "pagina": pagina,
    })


# =============================================================================
# Licitações (Procurement/Bidding)
# =============================================================================

def consultar_licitacoes(
    codigo_orgao: str,
    pagina: int = 1,
    data_inicial: str | None = None,
    data_final: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta licitações do Poder Executivo Federal.

    Args:
        codigo_orgao: Código SIAFI do órgão
        pagina: Número da página
        data_inicial: Data inicial (DD/MM/AAAA)
        data_final: Data final (DD/MM/AAAA)

    Returns:
        Lista de licitações
    """
    return make_request("licitacoes", {
        "codigoOrgao": codigo_orgao,
        "pagina": pagina,
        "dataInicial": data_inicial,
        "dataFinal": data_final,
    })


def consultar_licitacao_por_id(id: int) -> dict[str, Any] | str:
    """
    Consulta uma licitação específica pelo ID.

    Args:
        id: ID da licitação

    Returns:
        Dados da licitação
    """
    return make_request(f"licitacoes/{id}")


def consultar_licitacoes_contratos_relacionados(
    codigo_ug: str,
    numero: str,
    codigo_modalidade: str,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta os contratos relacionados a licitação.

    Args:
        codigo_ug: Código da Unidade Gestora - obrigatório
        numero: Número da licitação - obrigatório
        codigo_modalidade: Código da modalidade - obrigatório

    Returns:
        Lista de contratos relacionados (ContratoDTO[])
    """
    return make_request("licitacoes/contratos-relacionados-licitacao", {
        "codigoUG": codigo_ug,
        "numero": numero,
        "codigoModalidade": codigo_modalidade,
    })


def consultar_licitacoes_empenhos(
    codigo_ug: str,
    numero: str,
    codigo_modalidade: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta os empenhos de uma licitação.

    Args:
        codigo_ug: Código da Unidade Gestora - obrigatório
        numero: Número da licitação - obrigatório
        codigo_modalidade: Código da modalidade - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de empenhos (EmpenhoComprasDTO[])
    """
    return make_request("licitacoes/empenhos", {
        "codigoUG": codigo_ug,
        "numero": numero,
        "codigoModalidade": codigo_modalidade,
        "pagina": pagina,
    })


def consultar_licitacoes_itens_licitados(
    id: int,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta os itens licitados pelo id licitação.

    Args:
        id: ID da licitação - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de itens licitados (ItemLicitacaoDTO[])
    """
    return make_request("licitacoes/itens-licitados", {
        "id": id,
        "pagina": pagina,
    })


def consultar_licitacoes_modalidades(
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta as modalidades de licitação.

    Returns:
        Lista de modalidades (CodigoDescricaoDTO[])
    """
    return make_request("licitacoes/modalidades")


def consultar_licitacoes_participantes(
    codigo_ug: str,
    numero: str,
    codigo_modalidade: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta os participantes de uma licitação.

    Args:
        codigo_ug: Código da Unidade Gestora - obrigatório
        numero: Número da licitação - obrigatório
        codigo_modalidade: Código da modalidade - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de participantes (ParticipanteLicitacaoDTO[])
    """
    return make_request("licitacoes/participantes", {
        "codigoUG": codigo_ug,
        "numero": numero,
        "codigoModalidade": codigo_modalidade,
        "pagina": pagina,
    })


def consultar_licitacoes_por_processo(
    processo: str,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta uma licitação pelo número do processo.

    Args:
        processo: Número do processo - obrigatório

    Returns:
        Lista de licitações (LicitacaoDTO[])
    """
    return make_request("licitacoes/por-processo", {
        "processo": processo,
    })


def consultar_licitacoes_por_ug_modalidade_numero(
    codigo_ug: str,
    numero: str,
    codigo_modalidade: str,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta uma licitação pelo código da Unidade Gestora, número e modalidade.

    Args:
        codigo_ug: Código da Unidade Gestora - obrigatório
        numero: Número da licitação - obrigatório
        codigo_modalidade: Código da modalidade - obrigatório

    Returns:
        Lista de licitações (LicitacaoDTO[])
    """
    return make_request("licitacoes/por-ug-modalidade-numero", {
        "codigoUG": codigo_ug,
        "numero": numero,
        "codigoModalidade": codigo_modalidade,
    })


def consultar_licitacoes_ugs(
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta as Unidades Gestoras que realizaram licitações.

    Args:
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de unidades gestoras (UnidadeGestoraDTO[])
    """
    return make_request("licitacoes/ugs", {
        "pagina": pagina,
    })


# =============================================================================
# Convênios (Agreements)
# =============================================================================

def consultar_convenios(
    pagina: int = 1,
    data_inicial: str | None = None,
    data_final: str | None = None,
    convenente: str | None = None,
    codigo_orgao: str | None = None,
    uf: str | None = None,
    situacao: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta convênios do Poder Executivo Federal.

    Args:
        pagina: Número da página
        data_inicial: Data inicial (DD/MM/AAAA)
        data_final: Data final (DD/MM/AAAA)
        convenente: CPF ou CNPJ do convenente
        codigo_orgao: Código SIAFI do órgão concedente
        uf: Sigla da UF
        situacao: Situação do convênio

    Returns:
        Lista de convênios
    """
    return make_request("convenios", {
        "pagina": pagina,
        "dataInicial": data_inicial,
        "dataFinal": data_final,
        "convenente": convenente,
        "codigoOrgao": codigo_orgao,
        "uf": uf,
        "situacao": situacao,
    })


def consultar_convenio_por_id(id: int) -> dict[str, Any] | str:
    """
    Consulta um convênio específico pelo ID.

    Args:
        id: ID do convênio

    Returns:
        Dados do convênio
    """
    return make_request("convenios/id", {"id": id})


def consultar_convenios_por_numero(
    numero: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta convênios por número.

    Args:
        numero: Número do convênio - obrigatório
        pagina: Número da página (padrão: 1)

    Returns:
        Lista de convênios (ConvenioDTO[])
    """
    return make_request("convenios/numero", {
        "numero": numero,
        "pagina": pagina,
    })


def consultar_convenios_por_numero_original(
    numero_original: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta convênios por número original.

    Args:
        numero_original: Número original do convênio - obrigatório
        pagina: Número da página (padrão: 1)

    Returns:
        Lista de convênios (ConvenioDTO[])
    """
    return make_request("convenios/numero-original", {
        "numeroOriginal": numero_original,
        "pagina": pagina,
    })


def consultar_convenios_por_numero_processo(
    numero_processo: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta convênios por número do processo.

    Args:
        numero_processo: Número do processo - obrigatório
        pagina: Número da página (padrão: 1)

    Returns:
        Lista de convênios (ConvenioDTO[])
    """
    return make_request("convenios/numero-processo", {
        "numeroProcesso": numero_processo,
        "pagina": pagina,
    })


def consultar_convenios_tipo_instrumento(
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta tipos de instrumento de convênios.

    Returns:
        Lista de tipos de instrumento (TipoInstrumentoDTO[])
    """
    return make_request("convenios/tipo-instrumento")


# =============================================================================
# Benefícios Sociais (Social Benefits)
# =============================================================================

def consultar_auxilio_brasil_por_municipio(
    mes_ano: int,
    codigo_ibge: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta as parcelas do Auxílio Brasil por Município.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM (ex: 202401) - obrigatório
        codigo_ibge: Código IBGE do município - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de parcelas do Auxílio Brasil (BeneficioPorMunicipioDTO[])
    """
    return make_request("auxilio-brasil-por-municipio", {
        "mesAno": mes_ano,
        "codigoIbge": codigo_ibge,
        "pagina": pagina,
    })


def consultar_auxilio_brasil_sacado_beneficiario_por_municipio(
    mes_ano: int,
    codigo_ibge: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta as parcelas do Auxílio Brasil Sacado dos Beneficiários por Município e Mes/Ano.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM (ex: 202401) - obrigatório
        codigo_ibge: Código IBGE do município - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de parcelas sacadas (AuxilioBrasilPagoDTO[])
    """
    return make_request("auxilio-brasil-sacado-beneficiario-por-municipio", {
        "mesAno": mes_ano,
        "codigoIbge": codigo_ibge,
        "pagina": pagina,
    })


def consultar_auxilio_brasil_sacado_por_nis(
    nis: str,
    pagina: int = 1,
    ano_mes_referencia: int | None = None,
    ano_mes_competencia: int | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta as parcelas disponibilizadas pelo Auxílio Brasil pelo NIS.

    Args:
        nis: Número de Identificação Social - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório
        ano_mes_referencia: Ano/Mês de referência (YYYYMM)
        ano_mes_competencia: Ano/Mês de competência (YYYYMM)

    Returns:
        Lista de parcelas (AuxilioBrasilPagoDTO[])
    """
    return make_request("auxilio-brasil-sacado-por-nis", {
        "nis": nis,
        "pagina": pagina,
        "anoMesReferencia": ano_mes_referencia,
        "anoMesCompetencia": ano_mes_competencia,
    })


def consultar_bolsa_familia_por_municipio(
    mes_ano: str,
    codigo_ibge: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta pagamentos do Novo Bolsa Família por município.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM
        codigo_ibge: Código IBGE do município
        pagina: Número da página

    Returns:
        Lista de pagamentos do Bolsa Família
    """
    return make_request("novo-bolsa-familia-por-municipio", {
        "mesAno": mes_ano,
        "codigoIbge": codigo_ibge,
        "pagina": pagina,
    })


def consultar_auxilio_emergencial_beneficiario_por_municipio(
    mes_ano: int,
    codigo_ibge: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta os registros dos beneficiários por município e mês/ano.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM (ex: 202003) - obrigatório
        codigo_ibge: Código IBGE do município - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de beneficiários (AuxilioEmergencialDTO[])
    """
    return make_request("auxilio-emergencial-beneficiario-por-municipio", {
        "mesAno": mes_ano,
        "codigoIbge": codigo_ibge,
        "pagina": pagina,
    })


def consultar_auxilio_emergencial_por_cpf_ou_nis(
    pagina: int = 1,
    codigo_beneficiario: str | None = None,
    codigo_responsavel_familiar: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta os registros de auxílio emergencial por CPF/NIS.

    Args:
        pagina: Número da página (padrão: 1) - obrigatório
        codigo_beneficiario: CPF ou NIS do beneficiário
        codigo_responsavel_familiar: CPF ou NIS do responsável familiar

    Returns:
        Lista de registros (AuxilioEmergencialDTO[])
    """
    return make_request("auxilio-emergencial-por-cpf-ou-nis", {
        "pagina": pagina,
        "codigoBeneficiario": codigo_beneficiario,
        "codigoResponsavelFamiliar": codigo_responsavel_familiar,
    })


def consultar_auxilio_emergencial_por_municipio(
    mes_ano: int,
    codigo_ibge: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta os registros de auxílio emergencial por Município.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM (ex: 202003) - obrigatório
        codigo_ibge: Código IBGE do município - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de registros (BeneficioPorMunicipioDTO[])
    """
    return make_request("auxilio-emergencial-por-municipio", {
        "mesAno": mes_ano,
        "codigoIbge": codigo_ibge,
        "pagina": pagina,
    })


def consultar_bolsa_familia_disponivel_beneficiario_por_municipio(
    mes_ano: int,
    codigo_ibge: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta as parcelas do Bolsa Família Disponível dos Beneficiários por Município e Mes/Ano.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM (ex: 202401) - obrigatório
        codigo_ibge: Código IBGE do município - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de parcelas (BolsaFamiliaDTO[])
    """
    return make_request("bolsa-familia-disponivel-beneficiario-por-municipio", {
        "mesAno": mes_ano,
        "codigoIbge": codigo_ibge,
        "pagina": pagina,
    })


def consultar_bolsa_familia_disponivel_por_cpf_ou_nis(
    codigo: str,
    pagina: int = 1,
    ano_mes_referencia: int | None = None,
    ano_mes_competencia: int | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta as parcelas disponibilizadas pelo Bolsa Família pelo CPF/NIS.

    Args:
        codigo: CPF ou NIS - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório
        ano_mes_referencia: Ano/Mês de referência (YYYYMM)
        ano_mes_competencia: Ano/Mês de competência (YYYYMM)

    Returns:
        Lista de parcelas (BolsaFamiliaDTO[])
    """
    return make_request("bolsa-familia-disponivel-por-cpf-ou-nis", {
        "codigo": codigo,
        "pagina": pagina,
        "anoMesReferencia": ano_mes_referencia,
        "anoMesCompetencia": ano_mes_competencia,
    })


def consultar_bolsa_familia_antiga_por_municipio(
    mes_ano: int,
    codigo_ibge: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta as parcelas do Bolsa Família por Município.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM (ex: 202401) - obrigatório
        codigo_ibge: Código IBGE do município - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de parcelas (BeneficioPorMunicipioDTO[])
    """
    return make_request("bolsa-familia-por-municipio", {
        "mesAno": mes_ano,
        "codigoIbge": codigo_ibge,
        "pagina": pagina,
    })


def consultar_bolsa_familia_sacado_beneficiario_por_municipio(
    mes_ano: int,
    codigo_ibge: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta as parcelas do Bolsa Família Sacado dos Beneficiários por Município e Mes/Ano.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM (ex: 202401) - obrigatório
        codigo_ibge: Código IBGE do município - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de parcelas sacadas (BolsaFamiliaPagoDTO[])
    """
    return make_request("bolsa-familia-sacado-beneficiario-por-municipio", {
        "mesAno": mes_ano,
        "codigoIbge": codigo_ibge,
        "pagina": pagina,
    })


def consultar_bolsa_familia_sacado_por_nis(
    nis: str,
    pagina: int = 1,
    ano_mes_referencia: int | None = None,
    ano_mes_competencia: int | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta as parcelas sacadas pelo Bolsa Família pelo NIS.

    Args:
        nis: Número de Identificação Social - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório
        ano_mes_referencia: Ano/Mês de referência (YYYYMM)
        ano_mes_competencia: Ano/Mês de competência (YYYYMM)

    Returns:
        Lista de parcelas sacadas (BolsaFamiliaPagoDTO[])
    """
    return make_request("bolsa-familia-sacado-por-nis", {
        "nis": nis,
        "pagina": pagina,
        "anoMesReferencia": ano_mes_referencia,
        "anoMesCompetencia": ano_mes_competencia,
    })


def consultar_bpc_beneficiario_por_municipio(
    mes_ano: int,
    codigo_ibge: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta os registros de Benefício de Prestação Continuada dos Beneficiários por Município e Mes/Ano.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM (ex: 202401) - obrigatório
        codigo_ibge: Código IBGE do município - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de beneficiários (BPCDTO[])
    """
    return make_request("bpc-beneficiario-por-municipio", {
        "mesAno": mes_ano,
        "codigoIbge": codigo_ibge,
        "pagina": pagina,
    })


def consultar_bpc_por_cpf_ou_nis(
    codigo: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta os registros de Benefício de Prestação Continuada por CPF/NIS.

    Args:
        codigo: CPF ou NIS - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de registros (BPCDTO[])
    """
    return make_request("bpc-por-cpf-ou-nis", {
        "codigo": codigo,
        "pagina": pagina,
    })


def consultar_bpc_por_municipio(
    mes_ano: int,
    codigo_ibge: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta os registros de Benefício de Prestação Continuada por Município.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM (ex: 202401) - obrigatório
        codigo_ibge: Código IBGE do município - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de registros (BeneficioPorMunicipioDTO[])
    """
    return make_request("bpc-por-municipio", {
        "mesAno": mes_ano,
        "codigoIbge": codigo_ibge,
        "pagina": pagina,
    })


def consultar_bolsa_familia_por_nis(
    nis: str,
    ano_mes_referencia: str | None = None,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta pagamentos do Novo Bolsa Família por NIS.

    Args:
        nis: Número de Identificação Social
        ano_mes_referencia: Ano/Mês de referência (YYYYMM)
        pagina: Número da página

    Returns:
        Lista de pagamentos do Bolsa Família
    """
    return make_request("novo-bolsa-familia-sacado-por-nis", {
        "nis": nis,
        "anoMesReferencia": ano_mes_referencia,
        "pagina": pagina,
    })


def consultar_garantia_safra_por_municipio(
    mes_ano: str,
    codigo_ibge: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta pagamentos do Garantia-Safra por município.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM
        codigo_ibge: Código IBGE do município
        pagina: Número da página

    Returns:
        Lista de pagamentos do Garantia-Safra
    """
    return make_request("safra-por-municipio", {
        "mesAno": mes_ano,
        "codigoIbge": codigo_ibge,
        "pagina": pagina,
    })


def consultar_seguro_defeso_por_municipio(
    mes_ano: str,
    codigo_ibge: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta pagamentos do Seguro Defeso por município.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM
        codigo_ibge: Código IBGE do município
        pagina: Número da página

    Returns:
        Lista de pagamentos do Seguro Defeso
    """
    return make_request("seguro-defeso-por-municipio", {
        "mesAno": mes_ano,
        "codigoIbge": codigo_ibge,
        "pagina": pagina,
    })


# =============================================================================
# Sanções (Sanctions)
# =============================================================================

def consultar_ceis(
    pagina: int = 1,
    codigo_sancionado: str | None = None,
    nome_sancionado: str | None = None,
    orgao_sancionador: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta Cadastro de Empresas Inidôneas e Suspensas (CEIS).

    Args:
        pagina: Número da página
        codigo_sancionado: CPF ou CNPJ do sancionado
        nome_sancionado: Nome do sancionado
        orgao_sancionador: Nome do órgão sancionador

    Returns:
        Lista de registros do CEIS
    """
    return make_request("ceis", {
        "pagina": pagina,
        "codigoSancionado": codigo_sancionado,
        "nomeSancionado": nome_sancionado,
        "orgaoSancionador": orgao_sancionador,
    })


def consultar_cnep(
    pagina: int = 1,
    codigo_sancionado: str | None = None,
    nome_sancionado: str | None = None,
    orgao_sancionador: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta Cadastro Nacional de Empresas Punidas (CNEP).

    Args:
        pagina: Número da página
        codigo_sancionado: CPF ou CNPJ do sancionado
        nome_sancionado: Nome do sancionado
        orgao_sancionador: Nome do órgão sancionador

    Returns:
        Lista de registros do CNEP
    """
    return make_request("cnep", {
        "pagina": pagina,
        "codigoSancionado": codigo_sancionado,
        "nomeSancionado": nome_sancionado,
        "orgaoSancionador": orgao_sancionador,
    })


def consultar_cepim(
    pagina: int = 1,
    cnpj_sancionado: str | None = None,
    nome_sancionado: str | None = None,
    uf_sancionado: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta Cadastro de Entidades Privadas Sem Fins Lucrativos Impedidas (CEPIM).

    Args:
        pagina: Número da página
        cnpj_sancionado: CNPJ do sancionado
        nome_sancionado: Nome do sancionado
        uf_sancionado: UF do sancionado

    Returns:
        Lista de registros do CEPIM
    """
    return make_request("cepim", {
        "pagina": pagina,
        "cnpjSancionado": cnpj_sancionado,
        "nomeSancionado": nome_sancionado,
        "ufSancionado": uf_sancionado,
    })


def consultar_ceaf(
    pagina: int = 1,
    cpf_sancionado: str | None = None,
    nome_sancionado: str | None = None,
    orgao_lotacao: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta Cadastro de Expulsões da Administração Federal (CEAF).

    Args:
        pagina: Número da página
        cpf_sancionado: CPF do sancionado
        nome_sancionado: Nome do sancionado
        orgao_lotacao: Órgão de lotação

    Returns:
        Lista de registros do CEAF (CeafDTO[])
    """
    return make_request("ceaf", {
        "pagina": pagina,
        "cpfSancionado": cpf_sancionado,
        "nomeSancionado": nome_sancionado,
        "orgaoLotacao": orgao_lotacao,
    })


def consultar_ceis_por_id(id: int) -> dict[str, Any] | str:
    """
    Consulta um registro do CEIS pelo ID.

    Args:
        id: ID do registro

    Returns:
        Registro do CEIS (CeisDTO)
    """
    return make_request(f"ceis/{id}")


def consultar_cnep_por_id(id: int) -> dict[str, Any] | str:
    """
    Consulta um registro do CNEP pelo ID.

    Args:
        id: ID do registro

    Returns:
        Registro do CNEP (CnepDTO)
    """
    return make_request(f"cnep/{id}")


def consultar_cepim_por_id(id: int) -> dict[str, Any] | str:
    """
    Consulta um registro do CEPIM pelo ID.

    Args:
        id: ID do registro

    Returns:
        Registro do CEPIM (CepimDTO)
    """
    return make_request(f"cepim/{id}")


def consultar_ceaf_por_id(id: int) -> dict[str, Any] | str:
    """
    Consulta um registro do CEAF pelo ID.

    Args:
        id: ID do registro

    Returns:
        Registro do CEAF (CeafDTO)
    """
    return make_request(f"ceaf/{id}")


# =============================================================================
# Viagens (Travel)
# =============================================================================

def consultar_viagens(
    data_ida_de: str,
    data_ida_ate: str,
    data_retorno_de: str,
    data_retorno_ate: str,
    codigo_orgao: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta viagens a serviço por período e órgão.

    Args:
        data_ida_de: Data inicial da ida (DD/MM/AAAA) - obrigatório
        data_ida_ate: Data final da ida (DD/MM/AAAA) - obrigatório
        data_retorno_de: Data inicial do retorno (DD/MM/AAAA) - obrigatório
        data_retorno_ate: Data final do retorno (DD/MM/AAAA) - obrigatório
        codigo_orgao: Código SIAFI do órgão - obrigatório
        pagina: Número da página (padrão: 1)

    Returns:
        Lista de viagens (ViagemDTO[])
    """
    return make_request("viagens", {
        "dataIdaDe": data_ida_de,
        "dataIdaAte": data_ida_ate,
        "dataRetornoDe": data_retorno_de,
        "dataRetornoAte": data_retorno_ate,
        "codigoOrgao": codigo_orgao,
        "pagina": pagina,
    })


def consultar_viagens_por_cpf(
    cpf: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta viagens a serviço por CPF.

    Args:
        cpf: CPF do servidor - obrigatório
        pagina: Número da página (padrão: 1)

    Returns:
        Lista de viagens do servidor (ViagemDTO[])
    """
    return make_request("viagens-por-cpf", {
        "cpf": cpf,
        "pagina": pagina,
    })


def consultar_viagem_por_id(id: int) -> dict[str, Any] | str:
    """
    Consulta uma viagem específica pelo ID.

    Args:
        id: ID da viagem - obrigatório

    Returns:
        Dados da viagem (ViagemDTO)
    """
    return make_request(f"viagens/{id}")


# =============================================================================
# Emendas Parlamentares (Parliamentary Amendments)
# =============================================================================

def consultar_emendas(
    pagina: int = 1,
    ano: int | None = None,
    codigo_emenda: str | None = None,
    nome_autor: str | None = None,
    tipo_emenda: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta emendas parlamentares.

    Args:
        pagina: Número da página
        ano: Ano da emenda
        codigo_emenda: Código da emenda
        nome_autor: Nome do autor da emenda
        tipo_emenda: Tipo da emenda

    Returns:
        Lista de emendas parlamentares
    """
    return make_request("emendas", {
        "pagina": pagina,
        "ano": ano,
        "codigoEmenda": codigo_emenda,
        "nomeAutor": nome_autor,
        "tipoEmenda": tipo_emenda,
    })


def consultar_emendas_documentos(
    codigo: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta os documentos relacionados à emenda parlamentar pelo código da emenda.

    Args:
        codigo: Código da emenda - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de documentos relacionados (DocumentoRelacionadoEmendaDTO[])
    """
    return make_request(f"emendas/documentos/{codigo}", {
        "pagina": pagina,
    })


# =============================================================================
# Órgãos (Government Agencies)
# =============================================================================

def consultar_orgaos_siafi(
    pagina: int = 1,
    codigo: str | None = None,
    descricao: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta órgãos do SIAFI (Sistema Integrado de Administração Financeira).

    Args:
        pagina: Número da página
        codigo: Código do órgão
        descricao: Descrição/nome do órgão

    Returns:
        Lista de órgãos SIAFI
    """
    return make_request("orgaos-siafi", {
        "pagina": pagina,
        "codigo": codigo,
        "descricao": descricao,
    })


def consultar_orgaos_siape(
    pagina: int = 1,
    codigo: str | None = None,
    descricao: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta órgãos do SIAPE (Sistema Integrado de Administração de Pessoal).

    Args:
        pagina: Número da página
        codigo: Código do órgão
        descricao: Descrição/nome do órgão

    Returns:
        Lista de órgãos SIAPE
    """
    return make_request("orgaos-siape", {
        "pagina": pagina,
        "codigo": codigo,
        "descricao": descricao,
    })


# =============================================================================
# Pessoas (People and Companies)
# =============================================================================

def consultar_pessoa_juridica(cnpj: str) -> dict[str, Any] | str:
    """
    Consulta dados de pessoa jurídica (empresa).

    Args:
        cnpj: CNPJ da empresa

    Returns:
        Dados da empresa
    """
    return make_request("pessoa-juridica", {"cnpj": cnpj})


def consultar_pessoa_fisica(
    cpf: str | None = None,
    nis: str | None = None,
) -> dict[str, Any] | str:
    """
    Consulta dados de pessoa física.

    Args:
        cpf: CPF da pessoa (obrigatório se NIS não informado)
        nis: NIS da pessoa (obrigatório se CPF não informado)

    Returns:
        Dados da pessoa
    """
    params = {}
    if cpf:
        params["cpf"] = cpf
    if nis:
        params["nis"] = nis
    return make_request("pessoa-fisica", params)


# =============================================================================
# Cartões de Pagamento (Payment Cards)
# =============================================================================

def consultar_cartoes_pagamento(
    pagina: int = 1,
    mes_extrato_inicio: str | None = None,
    mes_extrato_fim: str | None = None,
    codigo_orgao: str | None = None,
    cpf_portador: str | None = None,
    cpf_cnpj_favorecido: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta gastos por cartão de pagamento do governo.

    Args:
        pagina: Número da página
        mes_extrato_inicio: Mês/Ano inicial do extrato (YYYYMM)
        mes_extrato_fim: Mês/Ano final do extrato (YYYYMM)
        codigo_orgao: Código SIAFI do órgão
        cpf_portador: CPF do portador do cartão
        cpf_cnpj_favorecido: CPF ou CNPJ do favorecido

    Returns:
        Lista de gastos com cartão
    """
    return make_request("cartoes", {
        "pagina": pagina,
        "mesExtratoInicio": mes_extrato_inicio,
        "mesExtratoFim": mes_extrato_fim,
        "codigoOrgao": codigo_orgao,
        "cpfPortador": cpf_portador,
        "cpfCnpjFavorecido": cpf_cnpj_favorecido,
    })


# =============================================================================
# Imóveis Funcionais (Government Properties)
# =============================================================================

def consultar_imoveis_funcionais(
    pagina: int = 1,
    codigo_orgao: str | None = None,
    situacao: str | None = None,
    regiao: str | None = None,
    cep: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta imóveis funcionais do governo.

    Args:
        pagina: Número da página
        codigo_orgao: Código SIAFI do órgão responsável
        situacao: Situação do imóvel
        regiao: Região administrativa
        cep: CEP do imóvel

    Returns:
        Lista de imóveis funcionais
    """
    return make_request("imoveis", {
        "pagina": pagina,
        "codigoOrgaoSiafiResponsavelGestao": codigo_orgao,
        "situacao": situacao,
        "regiao": regiao,
        "cep": cep,
    })


# =============================================================================
# COVID-19 / Coronavírus
# =============================================================================

def consultar_coronavirus_transferencias(
    mes_ano: str,
    pagina: int = 1,
    codigo_orgao: str | None = None,
    uf: str | None = None,
    codigo_ibge: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta transferências relacionadas ao Coronavírus.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM
        pagina: Número da página
        codigo_orgao: Código do órgão
        uf: Sigla da UF
        codigo_ibge: Código IBGE do município

    Returns:
        Lista de transferências COVID-19
    """
    return make_request("coronavirus/transferencias", {
        "mesAno": mes_ano,
        "pagina": pagina,
        "codigoOrgao": codigo_orgao,
        "uf": uf,
        "codigoIbge": codigo_ibge,
    })


def consultar_coronavirus_movimento_liquido_despesa(
    ano: int,
    pagina: int = 1,
    funcao: str | None = None,
    subfuncao: str | None = None,
    programa: str | None = None,
    acao: str | None = None,
    grupo_despesa: str | None = None,
    elemento_despesa: str | None = None,
    modalidade_aplicacao: str | None = None,
    id_plano_orcamentario: int | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta de movimentação líquida anual das despesas do Poder Executivo Federal pela classificação funcional programática (COVID-19).

    Args:
        ano: Ano da despesa - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório
        funcao: Código da função
        subfuncao: Código da subfunção
        programa: Código do programa
        acao: Código da ação
        grupo_despesa: Código do grupo de despesa
        elemento_despesa: Código do elemento de despesa
        modalidade_aplicacao: Código da modalidade de aplicação
        id_plano_orcamentario: ID do plano orçamentário

    Returns:
        Lista de movimentação líquida (DespesaLiquidaAnualPorFuncaoESubfuncaoDTO[])
    """
    return make_request("coronavirus/movimento-liquido-despesa", {
        "ano": ano,
        "pagina": pagina,
        "funcao": funcao,
        "subfuncao": subfuncao,
        "programa": programa,
        "acao": acao,
        "grupoDespesa": grupo_despesa,
        "elementoDespesa": elemento_despesa,
        "modalidadeAplicacao": modalidade_aplicacao,
        "idPlanoOrcamentario": id_plano_orcamentario,
    })


# =============================================================================
# Acordos de Leniência (Leniency Agreements)
# =============================================================================

def consultar_acordos_leniencia(
    pagina: int = 1,
    cnpj_sancionado: str | None = None,
    nome_sancionado: str | None = None,
    situacao: str | None = None,
    data_inicial_sancao: str | None = None,
    data_final_sancao: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta os registros de Acordos de Leniência por Nome ou CNPJ do Sancionado/Situação/Período.

    Args:
        pagina: Número da página (padrão: 1) - obrigatório
        cnpj_sancionado: CNPJ do sancionado
        nome_sancionado: Nome do sancionado
        situacao: Situação do acordo
        data_inicial_sancao: Data inicial da sanção (DD/MM/AAAA)
        data_final_sancao: Data final da sanção (DD/MM/AAAA)

    Returns:
        Lista de acordos de leniência (AcordosLenienciaDTO[])
    """
    return make_request("acordos-leniencia", {
        "pagina": pagina,
        "cnpjSancionado": cnpj_sancionado,
        "nomeSancionado": nome_sancionado,
        "situacao": situacao,
        "dataInicialSancao": data_inicial_sancao,
        "dataFinalSancao": data_final_sancao,
    })


def consultar_acordo_leniencia_por_id(id: int) -> dict[str, Any] | str:
    """
    Consulta um registro de Acordo de Leniência pelo ID.

    Args:
        id: ID do acordo - obrigatório

    Returns:
        Dados do acordo de leniência (AcordosLenienciaDTO)
    """
    return make_request(f"acordos-leniencia/{id}")


# =============================================================================
# Notas Fiscais (Invoices)
# =============================================================================

def consultar_notas_fiscais(
    pagina: int = 1,
    cnpj_emitente: str | None = None,
    codigo_orgao: str | None = None,
    nome_produto: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta notas fiscais eletrônicas.

    Args:
        pagina: Número da página
        cnpj_emitente: CNPJ do emitente
        codigo_orgao: Código do órgão
        nome_produto: Nome do produto

    Returns:
        Lista de notas fiscais
    """
    return make_request("notas-fiscais", {
        "pagina": pagina,
        "cnpjEmitente": cnpj_emitente,
        "codigoOrgao": codigo_orgao,
        "nomeProduto": nome_produto,
    })


def consultar_nota_fiscal_por_chave(
    chave_unica_nota_fiscal: str,
) -> dict[str, Any] | str:
    """
    Consulta uma nota fiscal eletrônica (NFe) do Poder Executivo Federal pela chave única.

    Args:
        chave_unica_nota_fiscal: Chave única da nota fiscal - obrigatório

    Returns:
        Dados da nota fiscal (DetalheNotaFiscalDTO)
    """
    return make_request("notas-fiscais-por-chave", {
        "chaveUnicaNotaFiscal": chave_unica_nota_fiscal,
    })


def consultar_novo_bolsa_familia_sacado_beneficiario_por_municipio(
    mes_ano: int,
    codigo_ibge: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta as parcelas do Novo Bolsa Família Sacado dos Beneficiários por Município e Mes/Ano.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM (ex: 202401) - obrigatório
        codigo_ibge: Código IBGE do município - obrigatório
        pagina: Número da página (padrão: 1)

    Returns:
        Lista de parcelas sacadas (NovoBolsaFamiliaPagoDTO[])
    """
    return make_request("novo-bolsa-familia-sacado-beneficiario-por-municipio", {
        "mesAno": mes_ano,
        "codigoIbge": codigo_ibge,
        "pagina": pagina,
    })


def consultar_peps(
    pagina: int = 1,
    cpf: str | None = None,
    nome: str | None = None,
    descricao_funcao: str | None = None,
    orgao_servidor_lotacao: str | None = None,
    data_inicio_exercicio_de: str | None = None,
    data_inicio_exercicio_ate: str | None = None,
    data_fim_exercicio_de: str | None = None,
    data_fim_exercicio_ate: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta PEPs (Pessoas Expostas Politicamente).

    Args:
        pagina: Número da página (padrão: 1) - obrigatório
        cpf: CPF da pessoa
        nome: Nome da pessoa
        descricao_funcao: Descrição da função
        orgao_servidor_lotacao: Órgão de lotação do servidor
        data_inicio_exercicio_de: Data início exercício (DD/MM/AAAA)
        data_inicio_exercicio_ate: Data início exercício até (DD/MM/AAAA)
        data_fim_exercicio_de: Data fim exercício (DD/MM/AAAA)
        data_fim_exercicio_ate: Data fim exercício até (DD/MM/AAAA)

    Returns:
        Lista de PEPs (PEPDTO[])
    """
    return make_request("peps", {
        "pagina": pagina,
        "cpf": cpf,
        "nome": nome,
        "descricaoFuncao": descricao_funcao,
        "orgaoServidorLotacao": orgao_servidor_lotacao,
        "dataInicioExercicioDe": data_inicio_exercicio_de,
        "datInicioExercicioAte": data_inicio_exercicio_ate,
        "dataFimExercicioDe": data_fim_exercicio_de,
        "datFimExercicioAte": data_fim_exercicio_ate,
    })


def consultar_permissionarios(
    pagina: int = 1,
    codigo_orgao_responsavel_gestao_siafi: str | None = None,
    descricao_orgao_ocupante: str | None = None,
    cpf_ocupante: str | None = None,
    data_inicio_ocupacao: str | None = None,
    data_fim_ocupacao: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta relação de ocupantes (permissionários).

    Args:
        pagina: Número da página (padrão: 1) - obrigatório
        codigo_orgao_responsavel_gestao_siafi: Código SIAFI do órgão responsável pela gestão
        descricao_orgao_ocupante: Descrição do órgão ocupante
        cpf_ocupante: CPF do ocupante
        data_inicio_ocupacao: Data início ocupação (DD/MM/AAAA)
        data_fim_ocupacao: Data fim ocupação (DD/MM/AAAA)

    Returns:
        Lista de permissionários (PermissionarioDTO[])
    """
    return make_request("permissionarios", {
        "pagina": pagina,
        "codigoOrgaoResponsavelGestaoSiafi": codigo_orgao_responsavel_gestao_siafi,
        "descricaoOrgaoOcupante": descricao_orgao_ocupante,
        "cpfOcupante": cpf_ocupante,
        "dataInicioOcupacao": data_inicio_ocupacao,
        "dataFimOcupacao": data_fim_ocupacao,
    })


def consultar_peti_beneficiario_por_municipio(
    mes_ano: int,
    codigo_ibge: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta os registros PETI dos beneficiários por município e mês/ano.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM (ex: 202401) - obrigatório
        codigo_ibge: Código IBGE do município - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de beneficiários (PetiDTO[])
    """
    return make_request("peti-beneficiario-por-municipio", {
        "mesAno": mes_ano,
        "codigoIbge": codigo_ibge,
        "pagina": pagina,
    })


def consultar_peti_por_cpf_ou_nis(
    codigo: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta os registros Programa de Erradicação do Trabalho Infantil por CPF/NIS.

    Args:
        codigo: CPF ou NIS - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de registros (PetiDTO[])
    """
    return make_request("peti-por-cpf-ou-nis", {
        "codigo": codigo,
        "pagina": pagina,
    })


def consultar_peti_por_municipio(
    mes_ano: int,
    codigo_ibge: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta os registros Programa de Erradicação do Trabalho Infantil.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM (ex: 202401) - obrigatório
        codigo_ibge: Código IBGE do município - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de registros (BeneficioPorMunicipioDTO[])
    """
    return make_request("peti-por-municipio", {
        "mesAno": mes_ano,
        "codigoIbge": codigo_ibge,
        "pagina": pagina,
    })


def consultar_renuncias_fiscais_empresas_habilitadas(
    pagina: int = 1,
    nome_sigla_uf: str | None = None,
    codigo_ibge: str | None = None,
    cnpj: str | None = None,
    beneficiario_nome_fantasia: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta Pessoas Jurídicas Habilitadas a Benefício Fiscal.

    Args:
        pagina: Número da página (padrão: 1) - obrigatório
        nome_sigla_uf: Nome ou sigla da UF
        codigo_ibge: Código IBGE do município
        cnpj: CNPJ da empresa
        beneficiario_nome_fantasia: Nome fantasia do beneficiário

    Returns:
        Lista de empresas habilitadas (EmpresaHabilitadaBeneficioFiscalDTO[])
    """
    return make_request("renuncias-fiscais-empresas-habilitadas-beneficios-fiscais", {
        "pagina": pagina,
        "nomeSiglaUF": nome_sigla_uf,
        "codigoIbge": codigo_ibge,
        "cnpj": cnpj,
        "beneficiarioNomeFantasia": beneficiario_nome_fantasia,
    })


def consultar_renuncias_fiscais_empresas_imunes_isentas(
    pagina: int = 1,
    nome_sigla_uf: str | None = None,
    codigo_ibge: str | None = None,
    cnpj: str | None = None,
    beneficiario_nome_fantasia: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta Pessoas Jurídicas Imunes e Isentas.

    Args:
        pagina: Número da página (padrão: 1) - obrigatório
        nome_sigla_uf: Nome ou sigla da UF
        codigo_ibge: Código IBGE do município
        cnpj: CNPJ da empresa
        beneficiario_nome_fantasia: Nome fantasia do beneficiário

    Returns:
        Lista de empresas imunes/isentas (EmpresaImuneIsentaDTO[])
    """
    return make_request("renuncias-fiscais-empresas-imunes-isentas", {
        "pagina": pagina,
        "nomeSiglaUF": nome_sigla_uf,
        "codigoIbge": codigo_ibge,
        "cnpj": cnpj,
        "beneficiarioNomeFantasia": beneficiario_nome_fantasia,
    })


def consultar_renuncias_valor(
    pagina: int = 1,
    nome_sigla_uf: str | None = None,
    codigo_ibge: str | None = None,
    cnpj: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta de Valores Renunciados.

    Args:
        pagina: Número da página (padrão: 1) - obrigatório
        nome_sigla_uf: Nome ou sigla da UF
        codigo_ibge: Código IBGE do município
        cnpj: CNPJ da empresa

    Returns:
        Lista de renúncias (RenunciaDTO[])
    """
    return make_request("renuncias-valor", {
        "pagina": pagina,
        "nomeSiglaUF": nome_sigla_uf,
        "codigoIbge": codigo_ibge,
        "cnpj": cnpj,
    })


def consultar_safra_beneficiario_por_municipio(
    mes_ano: int,
    codigo_ibge: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta os registros Garantia-Safra dos beneficiários por município e mes/ano.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM (ex: 202401) - obrigatório
        codigo_ibge: Código IBGE do município - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de beneficiários (SafraDTO[])
    """
    return make_request("safra-beneficiario-por-municipio", {
        "mesAno": mes_ano,
        "codigoIbge": codigo_ibge,
        "pagina": pagina,
    })


def consultar_safra_por_cpf_ou_nis(
    codigo: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta os registros Garantia-Safra por CPF/NIS.

    Args:
        codigo: CPF ou NIS - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de registros (SafraDTO[])
    """
    return make_request("safra-codigo-por-cpf-ou-nis", {
        "codigo": codigo,
        "pagina": pagina,
    })


def consultar_seguro_defeso_beneficiario_por_municipio(
    mes_ano: int,
    codigo_ibge: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta os registros Seguro Defeso dos Beneficiários por Município e Mes/Ano.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM (ex: 202401) - obrigatório
        codigo_ibge: Código IBGE do município - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de beneficiários (SeguroDefesoDTO[])
    """
    return make_request("seguro-defeso-beneficiario-por-municipio", {
        "mesAno": mes_ano,
        "codigoIbge": codigo_ibge,
        "pagina": pagina,
    })


def consultar_seguro_defeso_por_codigo(
    codigo: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta os registros Seguro Defeso por CPF/NIS.

    Args:
        codigo: CPF ou NIS - obrigatório
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de registros (SeguroDefesoDTO[])
    """
    return make_request("seguro-defeso-codigo", {
        "codigo": codigo,
        "pagina": pagina,
    })


def consultar_servidores_funcoes_e_cargos(
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta código da Função ou Cargo de Confiança.

    Args:
        pagina: Número da página (padrão: 1) - obrigatório

    Returns:
        Lista de funções e cargos (FuncaoServidorDTO[])
    """
    return make_request("servidores/funcoes-e-cargos", {
        "pagina": pagina,
    })


def consultar_servidores_por_orgao(
    pagina: int = 1,
    orgao_lotacao: str | None = None,
    orgao_exercicio: str | None = None,
    tipo_servidor: int | None = None,
    tipo_vinculo: int | None = None,
    licenca: int | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta de servidores agregados por órgão.

    Args:
        pagina: Número da página (padrão: 1) - obrigatório
        orgao_lotacao: Código SIAPE do órgão de lotação
        orgao_exercicio: Código SIAPE do órgão de exercício
        tipo_servidor: Tipo do servidor (1=Civil, 2=Militar)
        tipo_vinculo: Tipo de vínculo
        licenca: Licença (0=Não, 1=Sim)

    Returns:
        Lista de servidores por órgão (ServidorPorOrgaoDTO[])
    """
    return make_request("servidores/por-orgao", {
        "pagina": pagina,
        "orgaoLotacao": orgao_lotacao,
        "orgaoExercicio": orgao_exercicio,
        "tipoServidor": tipo_servidor,
        "tipoVinculo": tipo_vinculo,
        "licenca": licenca,
    })


def consultar_situacao_imovel(
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta situações dos imóveis funcionais.

    Returns:
        Lista de situações (string[])
    """
    return make_request("situacao-imovel")


# Export all tools
__all__ = [
    # Acordos de Leniência
    "consultar_acordos_leniencia",
    "consultar_acordo_leniencia_por_id",
    # Servidores
    "consultar_servidores",
    "consultar_servidor_por_id",
    "consultar_remuneracao_servidores",
    "consultar_servidores_funcoes_e_cargos",
    "consultar_servidores_por_orgao",
    # Despesas
    "consultar_despesas_por_orgao",
    "consultar_recursos_recebidos",
    "consultar_despesas_documentos",
    "consultar_despesas_documentos_por_favorecido",
    "consultar_despesas_documentos_relacionados",
    "consultar_despesas_documento_por_codigo",
    "consultar_despesas_empenhos_impactados",
    "consultar_despesas_favorecidos_finais_por_documento",
    "consultar_despesas_funcional_programatica_acoes",
    "consultar_despesas_funcional_programatica_funcoes",
    "consultar_despesas_funcional_programatica_listar",
    "consultar_despesas_funcional_programatica_programas",
    "consultar_despesas_funcional_programatica_subfuncoes",
    "consultar_despesas_itens_empenho",
    "consultar_despesas_itens_empenho_historico",
    "consultar_despesas_plano_orcamentario",
    "consultar_despesas_por_funcional_programatica",
    "consultar_despesas_por_funcional_programatica_movimentacao_liquida",
    "consultar_despesas_tipo_transferencia",
    # Contratos
    "consultar_contratos",
    "consultar_contrato_por_id",
    "consultar_contratos_por_cpf_cnpj",
    "consultar_contratos_apostilamento",
    "consultar_contratos_documentos_relacionados",
    "consultar_contratos_itens_contratados",
    "consultar_contratos_por_numero",
    "consultar_contratos_por_processo",
    "consultar_contratos_termo_aditivo",
    # Licitações
    "consultar_licitacoes",
    "consultar_licitacao_por_id",
    "consultar_licitacoes_contratos_relacionados",
    "consultar_licitacoes_empenhos",
    "consultar_licitacoes_itens_licitados",
    "consultar_licitacoes_modalidades",
    "consultar_licitacoes_participantes",
    "consultar_licitacoes_por_processo",
    "consultar_licitacoes_por_ug_modalidade_numero",
    "consultar_licitacoes_ugs",
    # Convênios
    "consultar_convenios",
    "consultar_convenio_por_id",
    "consultar_convenios_por_numero",
    "consultar_convenios_por_numero_original",
    "consultar_convenios_por_numero_processo",
    "consultar_convenios_tipo_instrumento",
    # Benefícios
    "consultar_auxilio_brasil_por_municipio",
    "consultar_auxilio_brasil_sacado_beneficiario_por_municipio",
    "consultar_auxilio_brasil_sacado_por_nis",
    "consultar_auxilio_emergencial_beneficiario_por_municipio",
    "consultar_auxilio_emergencial_por_cpf_ou_nis",
    "consultar_auxilio_emergencial_por_municipio",
    "consultar_bolsa_familia_por_municipio",
    "consultar_bolsa_familia_por_nis",
    "consultar_bolsa_familia_disponivel_beneficiario_por_municipio",
    "consultar_bolsa_familia_disponivel_por_cpf_ou_nis",
    "consultar_bolsa_familia_antiga_por_municipio",
    "consultar_bolsa_familia_sacado_beneficiario_por_municipio",
    "consultar_bolsa_familia_sacado_por_nis",
    "consultar_bpc_beneficiario_por_municipio",
    "consultar_bpc_por_cpf_ou_nis",
    "consultar_bpc_por_municipio",
    "consultar_garantia_safra_por_municipio",
    "consultar_safra_beneficiario_por_municipio",
    "consultar_safra_por_cpf_ou_nis",
    "consultar_seguro_defeso_por_municipio",
    "consultar_seguro_defeso_beneficiario_por_municipio",
    "consultar_seguro_defeso_por_codigo",
    "consultar_novo_bolsa_familia_sacado_beneficiario_por_municipio",
    "consultar_peti_beneficiario_por_municipio",
    "consultar_peti_por_cpf_ou_nis",
    "consultar_peti_por_municipio",
    # Sanções
    "consultar_ceis",
    "consultar_ceis_por_id",
    "consultar_cnep",
    "consultar_cnep_por_id",
    "consultar_cepim",
    "consultar_cepim_por_id",
    "consultar_ceaf",
    "consultar_ceaf_por_id",
    # Viagens
    "consultar_viagens",
    "consultar_viagens_por_cpf",
    "consultar_viagem_por_id",
    # Emendas
    "consultar_emendas",
    "consultar_emendas_documentos",
    # Órgãos
    "consultar_orgaos_siafi",
    "consultar_orgaos_siape",
    # Pessoas
    "consultar_pessoa_juridica",
    "consultar_pessoa_fisica",
    "consultar_peps",
    "consultar_permissionarios",
    # Cartões
    "consultar_cartoes_pagamento",
    # Imóveis
    "consultar_imoveis_funcionais",
    "consultar_situacao_imovel",
    # COVID-19
    "consultar_coronavirus_transferencias",
    "consultar_coronavirus_movimento_liquido_despesa",
    # Notas Fiscais
    "consultar_notas_fiscais",
    "consultar_nota_fiscal_por_chave",
    # Renúncias Fiscais
    "consultar_renuncias_fiscais_empresas_habilitadas",
    "consultar_renuncias_fiscais_empresas_imunes_isentas",
    "consultar_renuncias_valor",
]
