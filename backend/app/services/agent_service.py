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
    # Benefícios
    consultar_bolsa_familia_por_municipio,
    consultar_bolsa_familia_por_nis,
    # Cartões
    consultar_cartoes_pagamento,
    consultar_ceaf,
    # Sanções
    consultar_ceis,
    consultar_cepim,
    consultar_cnep,
    consultar_contrato_por_id,
    # Contratos
    consultar_contratos,
    consultar_contratos_por_cpf_cnpj,
    consultar_convenio_por_id,
    # Convênios
    consultar_convenios,
    # COVID-19
    consultar_coronavirus_transferencias,
    # Despesas
    consultar_despesas_por_orgao,
    # Emendas
    consultar_emendas,
    consultar_garantia_safra_por_municipio,
    # Imóveis
    consultar_imoveis_funcionais,
    consultar_licitacao_por_id,
    # Licitações
    consultar_licitacoes,
    # Notas Fiscais
    consultar_notas_fiscais,
    # Órgãos
    consultar_orgaos_siafi,
    consultar_orgaos_siape,
    consultar_pessoa_fisica,
    # Pessoas
    consultar_pessoa_juridica,
    consultar_recursos_recebidos,
    consultar_remuneracao_servidores,
    consultar_seguro_defeso_por_municipio,
    consultar_servidor_por_id,
    # Servidores
    consultar_servidores,
    # Viagens
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
            consultar_servidores,
            consultar_servidor_por_id,
            consultar_remuneracao_servidores,
            consultar_despesas_por_orgao,
            consultar_recursos_recebidos,
            consultar_contratos,
            consultar_contrato_por_id,
            consultar_contratos_por_cpf_cnpj,
            consultar_licitacoes,
            consultar_licitacao_por_id,
            consultar_convenios,
            consultar_convenio_por_id,
            consultar_bolsa_familia_por_municipio,
            consultar_bolsa_familia_por_nis,
            consultar_garantia_safra_por_municipio,
            consultar_seguro_defeso_por_municipio,
            consultar_ceis,
            consultar_cnep,
            consultar_cepim,
            consultar_ceaf,
            consultar_viagens,
            consultar_viagens_por_cpf,
            consultar_emendas,
            consultar_orgaos_siafi,
            consultar_orgaos_siape,
            consultar_pessoa_juridica,
            consultar_pessoa_fisica,
            consultar_cartoes_pagamento,
            consultar_imoveis_funcionais,
            consultar_coronavirus_transferencias,
            consultar_notas_fiscais,
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
