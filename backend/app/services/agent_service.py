"""
Agent service for managing the Deep Agent lifecycle.

Implements the singleton pattern with thread safety for agent management.
"""

import threading
from typing import Any

from deepagents import create_deep_agent
from langgraph.checkpoint.memory import MemorySaver
from langgraph.store.memory import InMemoryStore

from app.config import Settings, get_settings
from app.core.exceptions import MissingAPIKeyError
from app.core.logging import get_logger
from app.tools.search import internet_search
from app.tools.transparencia import (
    # Acordos de Leniência
    consultar_acordos_leniencia,
    consultar_acordo_leniencia_por_id,
    # Benefícios
    consultar_auxilio_brasil_por_municipio,
    consultar_auxilio_brasil_sacado_beneficiario_por_municipio,
    consultar_auxilio_brasil_sacado_por_nis,
    consultar_auxilio_emergencial_beneficiario_por_municipio,
    consultar_auxilio_emergencial_por_cpf_ou_nis,
    consultar_auxilio_emergencial_por_municipio,
    consultar_bolsa_familia_antiga_por_municipio,
    consultar_bolsa_familia_disponivel_beneficiario_por_municipio,
    consultar_bolsa_familia_disponivel_por_cpf_ou_nis,
    consultar_bolsa_familia_por_municipio,
    consultar_bolsa_familia_por_nis,
    consultar_bolsa_familia_sacado_beneficiario_por_municipio,
    consultar_bolsa_familia_sacado_por_nis,
    consultar_bpc_beneficiario_por_municipio,
    consultar_bpc_por_cpf_ou_nis,
    consultar_bpc_por_municipio,
    consultar_garantia_safra_por_municipio,
    consultar_novo_bolsa_familia_sacado_beneficiario_por_municipio,
    consultar_peti_beneficiario_por_municipio,
    consultar_peti_por_cpf_ou_nis,
    consultar_peti_por_municipio,
    consultar_safra_beneficiario_por_municipio,
    consultar_safra_por_cpf_ou_nis,
    consultar_seguro_defeso_beneficiario_por_municipio,
    consultar_seguro_defeso_por_codigo,
    consultar_seguro_defeso_por_municipio,
    # Cartões
    consultar_cartoes_pagamento,
    consultar_ceaf,
    consultar_ceaf_por_id,
    # Sanções
    consultar_ceis,
    consultar_ceis_por_id,
    consultar_cepim,
    consultar_cepim_por_id,
    consultar_cnep,
    consultar_cnep_por_id,
    consultar_contrato_por_id,
    # Contratos
    consultar_contratos,
    consultar_contratos_apostilamento,
    consultar_contratos_documentos_relacionados,
    consultar_contratos_itens_contratados,
    consultar_contratos_por_cpf_cnpj,
    consultar_contratos_por_numero,
    consultar_contratos_por_processo,
    consultar_contratos_termo_aditivo,
    consultar_convenio_por_id,
    # Convênios
    consultar_convenios,
    consultar_convenios_por_numero,
    consultar_convenios_por_numero_original,
    consultar_convenios_por_numero_processo,
    consultar_convenios_tipo_instrumento,
    # COVID-19
    consultar_coronavirus_movimento_liquido_despesa,
    consultar_coronavirus_transferencias,
    # Despesas
    consultar_despesas_documento_por_codigo,
    consultar_despesas_documentos,
    consultar_despesas_documentos_por_favorecido,
    consultar_despesas_documentos_relacionados,
    consultar_despesas_empenhos_impactados,
    consultar_despesas_favorecidos_finais_por_documento,
    consultar_despesas_funcional_programatica_acoes,
    consultar_despesas_funcional_programatica_funcoes,
    consultar_despesas_funcional_programatica_listar,
    consultar_despesas_funcional_programatica_programas,
    consultar_despesas_funcional_programatica_subfuncoes,
    consultar_despesas_itens_empenho,
    consultar_despesas_itens_empenho_historico,
    consultar_despesas_plano_orcamentario,
    consultar_despesas_por_funcional_programatica,
    consultar_despesas_por_funcional_programatica_movimentacao_liquida,
    consultar_despesas_por_orgao,
    consultar_despesas_tipo_transferencia,
    consultar_recursos_recebidos,
    # Emendas
    consultar_emendas,
    consultar_emendas_documentos,
    # Imóveis
    consultar_imoveis_funcionais,
    consultar_situacao_imovel,
    consultar_licitacao_por_id,
    # Licitações
    consultar_licitacoes,
    consultar_licitacoes_contratos_relacionados,
    consultar_licitacoes_empenhos,
    consultar_licitacoes_itens_licitados,
    consultar_licitacoes_modalidades,
    consultar_licitacoes_participantes,
    consultar_licitacoes_por_processo,
    consultar_licitacoes_por_ug_modalidade_numero,
    consultar_licitacoes_ugs,
    # Notas Fiscais
    consultar_nota_fiscal_por_chave,
    consultar_notas_fiscais,
    # Órgãos
    consultar_orgaos_siafi,
    consultar_orgaos_siape,
    consultar_peps,
    consultar_pessoa_fisica,
    # Pessoas
    consultar_pessoa_juridica,
    consultar_permissionarios,
    # Renúncias Fiscais
    consultar_renuncias_fiscais_empresas_habilitadas,
    consultar_renuncias_fiscais_empresas_imunes_isentas,
    consultar_renuncias_valor,
    consultar_remuneracao_servidores,
    consultar_servidor_por_id,
    # Servidores
    consultar_servidores,
    consultar_servidores_funcoes_e_cargos,
    consultar_servidores_por_orgao,
    # Viagens
    consultar_viagem_por_id,
    consultar_viagens,
    consultar_viagens_por_cpf,
)

logger = get_logger(__name__)


class AgentService:
    """
    Service for managing the Deep Agent instance.

    Implements a thread-safe singleton pattern for agent creation.
    """

    _instance: "AgentService | None" = None
    _lock = threading.Lock()

    def __new__(cls, settings: Settings | None = None) -> "AgentService":
        """Ensure only one instance exists (singleton pattern)."""
        if cls._instance is None:
            with cls._lock:
                if cls._instance is None:
                    instance = super().__new__(cls)
                    instance._initialized = False
                    cls._instance = instance
        return cls._instance

    def __init__(self, settings: Settings | None = None) -> None:
        """
        Initialize the agent service.

        Args:
            settings: Application settings. If None, loads from environment.
        """
        if self._initialized:
            return

        self._settings = settings or get_settings()
        self._agent: Any = None
        self._store: InMemoryStore | None = None
        self._checkpointer: MemorySaver | None = None
        self._initialized = True

    def _validate_configuration(self) -> None:
        """Validate that required API keys are configured."""
        if not self._settings.has_anthropic_key:
            raise MissingAPIKeyError("ANTHROPIC_API_KEY")

    def _create_agent(self) -> Any:
        """
        Create and configure the Deep Agent instance.

        Returns:
            The configured agent instance.
        """
        self._validate_configuration()

        logger.info("Initializing Deep Agent with model: %s", self._settings.agent_model)

        self._checkpointer = MemorySaver()
        self._store = InMemoryStore()

        # Build tools list
        tools = [
            internet_search,
            # Portal da Transparência tools
            # Acordos de Leniência
            consultar_acordos_leniencia,
            consultar_acordo_leniencia_por_id,
            # Servidores
            consultar_servidores,
            consultar_servidor_por_id,
            consultar_remuneracao_servidores,
            consultar_servidores_funcoes_e_cargos,
            consultar_servidores_por_orgao,
            # Despesas
            consultar_despesas_por_orgao,
            consultar_recursos_recebidos,
            consultar_despesas_documentos,
            consultar_despesas_documentos_por_favorecido,
            consultar_despesas_documentos_relacionados,
            consultar_despesas_documento_por_codigo,
            consultar_despesas_empenhos_impactados,
            consultar_despesas_favorecidos_finais_por_documento,
            consultar_despesas_funcional_programatica_acoes,
            consultar_despesas_funcional_programatica_funcoes,
            consultar_despesas_funcional_programatica_listar,
            consultar_despesas_funcional_programatica_programas,
            consultar_despesas_funcional_programatica_subfuncoes,
            consultar_despesas_itens_empenho,
            consultar_despesas_itens_empenho_historico,
            consultar_despesas_plano_orcamentario,
            consultar_despesas_por_funcional_programatica,
            consultar_despesas_por_funcional_programatica_movimentacao_liquida,
            consultar_despesas_tipo_transferencia,
            # Contratos
            consultar_contratos,
            consultar_contrato_por_id,
            consultar_contratos_por_cpf_cnpj,
            consultar_contratos_apostilamento,
            consultar_contratos_documentos_relacionados,
            consultar_contratos_itens_contratados,
            consultar_contratos_por_numero,
            consultar_contratos_por_processo,
            consultar_contratos_termo_aditivo,
            # Licitações
            consultar_licitacoes,
            consultar_licitacao_por_id,
            consultar_licitacoes_contratos_relacionados,
            consultar_licitacoes_empenhos,
            consultar_licitacoes_itens_licitados,
            consultar_licitacoes_modalidades,
            consultar_licitacoes_participantes,
            consultar_licitacoes_por_processo,
            consultar_licitacoes_por_ug_modalidade_numero,
            consultar_licitacoes_ugs,
            # Convênios
            consultar_convenios,
            consultar_convenio_por_id,
            consultar_convenios_por_numero,
            consultar_convenios_por_numero_original,
            consultar_convenios_por_numero_processo,
            consultar_convenios_tipo_instrumento,
            # Benefícios
            consultar_auxilio_brasil_por_municipio,
            consultar_auxilio_brasil_sacado_beneficiario_por_municipio,
            consultar_auxilio_brasil_sacado_por_nis,
            consultar_auxilio_emergencial_beneficiario_por_municipio,
            consultar_auxilio_emergencial_por_cpf_ou_nis,
            consultar_auxilio_emergencial_por_municipio,
            consultar_bolsa_familia_por_municipio,
            consultar_bolsa_familia_por_nis,
            consultar_bolsa_familia_disponivel_beneficiario_por_municipio,
            consultar_bolsa_familia_disponivel_por_cpf_ou_nis,
            consultar_bolsa_familia_antiga_por_municipio,
            consultar_bolsa_familia_sacado_beneficiario_por_municipio,
            consultar_bolsa_familia_sacado_por_nis,
            consultar_bpc_beneficiario_por_municipio,
            consultar_bpc_por_cpf_ou_nis,
            consultar_bpc_por_municipio,
            consultar_garantia_safra_por_municipio,
            consultar_safra_beneficiario_por_municipio,
            consultar_safra_por_cpf_ou_nis,
            consultar_seguro_defeso_por_municipio,
            consultar_seguro_defeso_beneficiario_por_municipio,
            consultar_seguro_defeso_por_codigo,
            consultar_novo_bolsa_familia_sacado_beneficiario_por_municipio,
            consultar_peti_beneficiario_por_municipio,
            consultar_peti_por_cpf_ou_nis,
            consultar_peti_por_municipio,
            # Sanções
            consultar_ceis,
            consultar_ceis_por_id,
            consultar_cnep,
            consultar_cnep_por_id,
            consultar_cepim,
            consultar_cepim_por_id,
            consultar_ceaf,
            consultar_ceaf_por_id,
            # Viagens
            consultar_viagens,
            consultar_viagens_por_cpf,
            consultar_viagem_por_id,
            # Emendas
            consultar_emendas,
            consultar_emendas_documentos,
            # Órgãos
            consultar_orgaos_siafi,
            consultar_orgaos_siape,
            # Pessoas
            consultar_pessoa_juridica,
            consultar_pessoa_fisica,
            consultar_peps,
            consultar_permissionarios,
            # Cartões
            consultar_cartoes_pagamento,
            # Imóveis
            consultar_imoveis_funcionais,
            consultar_situacao_imovel,
            # COVID-19
            consultar_coronavirus_transferencias,
            consultar_coronavirus_movimento_liquido_despesa,
            # Notas Fiscais
            consultar_notas_fiscais,
            consultar_nota_fiscal_por_chave,
            # Renúncias Fiscais
            consultar_renuncias_fiscais_empresas_habilitadas,
            consultar_renuncias_fiscais_empresas_imunes_isentas,
            consultar_renuncias_valor,
        ]

        logger.info("Registering %d tools with agent", len(tools))

        agent = create_deep_agent(
            tools=tools,
            checkpointer=self._checkpointer,
            store=self._store,
            model=self._settings.agent_model,
        )

        logger.info("Deep Agent initialized successfully")
        return agent

    def get_agent(self) -> Any:
        """
        Get or create the agent instance.

        Returns:
            The Deep Agent instance.

        Raises:
            MissingAPIKeyError: If required API keys are not configured.
        """
        if self._agent is None:
            with self._lock:
                if self._agent is None:
                    self._agent = self._create_agent()
        return self._agent

    def get_config(self, thread_id: str | None = None) -> dict[str, Any]:
        """
        Get the configuration for agent invocation.

        Args:
            thread_id: The conversation thread ID.

        Returns:
            Configuration dictionary for the agent.
        """
        return {
            "configurable": {
                "thread_id": thread_id or self._settings.default_thread_id,
            }
        }

    @property
    def is_initialized(self) -> bool:
        """Check if the agent has been initialized."""
        return self._agent is not None

    @property
    def store(self) -> InMemoryStore | None:
        """Get the memory store instance."""
        return self._store

    @classmethod
    def reset(cls) -> None:
        """
        Reset the singleton instance.

        Useful for testing or reconfiguration.
        """
        with cls._lock:
            if cls._instance is not None:
                cls._instance._agent = None
                cls._instance._store = None
                cls._instance._checkpointer = None
                cls._instance._initialized = False
            cls._instance = None
