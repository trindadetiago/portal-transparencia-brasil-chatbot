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
    mes_ano: str,
    pagina: int = 1,
    id: int | None = None,
    cpf: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta remunerações de servidores.

    Args:
        mes_ano: Mês/Ano no formato YYYYMM (ex: 202401)
        pagina: Número da página
        id: ID do servidor
        cpf: CPF do servidor

    Returns:
        Lista de remunerações
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


# =============================================================================
# Benefícios Sociais (Social Benefits)
# =============================================================================

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
        Lista de registros do CEAF
    """
    return make_request("ceaf", {
        "pagina": pagina,
        "cpfSancionado": cpf_sancionado,
        "nomeSancionado": nome_sancionado,
        "orgaoLotacao": orgao_lotacao,
    })


# =============================================================================
# Viagens (Travel)
# =============================================================================

def consultar_viagens(
    data_ida_de: str,
    data_ida_ate: str,
    pagina: int = 1,
    codigo_orgao: str | None = None,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta viagens a serviço.

    Args:
        data_ida_de: Data inicial da ida (DD/MM/AAAA)
        data_ida_ate: Data final da ida (DD/MM/AAAA)
        pagina: Número da página
        codigo_orgao: Código SIAFI do órgão

    Returns:
        Lista de viagens
    """
    return make_request("viagens", {
        "dataIdaDe": data_ida_de,
        "dataIdaAte": data_ida_ate,
        "pagina": pagina,
        "codigoOrgao": codigo_orgao,
    })


def consultar_viagens_por_cpf(
    cpf: str,
    pagina: int = 1,
) -> dict[str, Any] | list[Any] | str:
    """
    Consulta viagens a serviço por CPF.

    Args:
        cpf: CPF do servidor
        pagina: Número da página

    Returns:
        Lista de viagens do servidor
    """
    return make_request("viagens-por-cpf", {
        "cpf": cpf,
        "pagina": pagina,
    })


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


# Export all tools
__all__ = [
    # Servidores
    "consultar_servidores",
    "consultar_servidor_por_id",
    "consultar_remuneracao_servidores",
    # Despesas
    "consultar_despesas_por_orgao",
    "consultar_recursos_recebidos",
    # Contratos
    "consultar_contratos",
    "consultar_contrato_por_id",
    "consultar_contratos_por_cpf_cnpj",
    # Licitações
    "consultar_licitacoes",
    "consultar_licitacao_por_id",
    # Convênios
    "consultar_convenios",
    "consultar_convenio_por_id",
    # Benefícios
    "consultar_bolsa_familia_por_municipio",
    "consultar_bolsa_familia_por_nis",
    "consultar_garantia_safra_por_municipio",
    "consultar_seguro_defeso_por_municipio",
    # Sanções
    "consultar_ceis",
    "consultar_cnep",
    "consultar_cepim",
    "consultar_ceaf",
    # Viagens
    "consultar_viagens",
    "consultar_viagens_por_cpf",
    # Emendas
    "consultar_emendas",
    # Órgãos
    "consultar_orgaos_siafi",
    "consultar_orgaos_siape",
    # Pessoas
    "consultar_pessoa_juridica",
    "consultar_pessoa_fisica",
    # Cartões
    "consultar_cartoes_pagamento",
    # Imóveis
    "consultar_imoveis_funcionais",
    # COVID-19
    "consultar_coronavirus_transferencias",
    # Notas Fiscais
    "consultar_notas_fiscais",
]
