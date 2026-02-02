# Portal da Transparência API - Endpoint Implementation Status

This document tracks all available API endpoints from the Portal da Transparência API
and their implementation status in both backend and frontend.

**API Documentation**: https://api.portaldatransparencia.gov.br/swagger-ui/index.html  
**OpenAPI Spec**: https://api.portaldatransparencia.gov.br/v3/api-docs

---

## Summary

| Category | Total | Implemented | Missing |
|----------|-------|-------------|---------|
| **Total Endpoints** | 106 | 38 | 68 |

---

## Implemented Endpoints (38)

### Servidores (Federal Employees)
| Endpoint | Backend | Frontend | Notes |
|----------|---------|----------|-------|
| `GET /servidores` | ✅ | ✅ | Strongly typed |
| `GET /servidores/{id}` | ✅ | ✅ | Strongly typed |
| `GET /servidores/remuneracao` | ✅ | ✅ | Strongly typed |

### Despesas (Expenditures)
| Endpoint | Backend | Frontend | Notes |
|----------|---------|----------|-------|
| `GET /despesas/por-orgao` | ✅ | ✅ | Strongly typed |
| `GET /despesas/recursos-recebidos` | ✅ | ✅ | Strongly typed |

### Contratos (Contracts)
| Endpoint | Backend | Frontend | Notes |
|----------|---------|----------|-------|
| `GET /contratos` | ✅ | ✅ | Strongly typed |
| `GET /contratos/id` | ✅ | ✅ | Strongly typed |
| `GET /contratos/cpf-cnpj` | ✅ | ✅ | Strongly typed |

### Licitações (Procurements)
| Endpoint | Backend | Frontend | Notes |
|----------|---------|----------|-------|
| `GET /licitacoes` | ✅ | ✅ | Strongly typed |
| `GET /licitacoes/{id}` | ✅ | ✅ | Strongly typed |

### Convênios (Agreements)
| Endpoint | Backend | Frontend | Notes |
|----------|---------|----------|-------|
| `GET /convenios` | ✅ | ✅ | Strongly typed |
| `GET /convenios/id` | ✅ | ✅ | Strongly typed |

### Benefícios Sociais (Social Benefits)
| Endpoint | Backend | Frontend | Notes |
|----------|---------|----------|-------|
| `GET /novo-bolsa-familia-por-municipio` | ✅ | ✅ | Strongly typed |
| `GET /novo-bolsa-familia-sacado-por-nis` | ✅ | ✅ | Strongly typed |
| `GET /safra-por-municipio` | ✅ | ✅ | Strongly typed |
| `GET /seguro-defeso-por-municipio` | ✅ | ✅ | Strongly typed |

### Sanções (Sanctions)
| Endpoint | Backend | Frontend | Notes |
|----------|---------|----------|-------|
| `GET /ceis` | ✅ | ✅ | Strongly typed |
| `GET /ceis/{id}` | ✅ | ⏳ | Needs frontend |
| `GET /cnep` | ✅ | ✅ | Strongly typed |
| `GET /cnep/{id}` | ✅ | ⏳ | Needs frontend |
| `GET /cepim` | ✅ | ✅ | Strongly typed |
| `GET /cepim/{id}` | ✅ | ⏳ | Needs frontend |
| `GET /ceaf` | ✅ | ✅ | Strongly typed |
| `GET /ceaf/{id}` | ✅ | ⏳ | Needs frontend |

### Viagens (Travel)
| Endpoint | Backend | Frontend | Notes |
|----------|---------|----------|-------|
| `GET /viagens` | ✅ | ✅ | Strongly typed |
| `GET /viagens/{id}` | ✅ | ⏳ | Needs frontend |
| `GET /viagens-por-cpf` | ✅ | ✅ | Strongly typed |

### Emendas Parlamentares
| Endpoint | Backend | Frontend | Notes |
|----------|---------|----------|-------|
| `GET /emendas` | ✅ | ✅ | Strongly typed |

### Órgãos (Government Agencies)
| Endpoint | Backend | Frontend | Notes |
|----------|---------|----------|-------|
| `GET /orgaos-siafi` | ✅ | ✅ | Strongly typed |
| `GET /orgaos-siape` | ✅ | ✅ | Strongly typed |

### Pessoas (People/Companies)
| Endpoint | Backend | Frontend | Notes |
|----------|---------|----------|-------|
| `GET /pessoa-fisica` | ✅ | ✅ | Strongly typed |
| `GET /pessoa-juridica` | ✅ | ✅ | Strongly typed |

### Cartões de Pagamento
| Endpoint | Backend | Frontend | Notes |
|----------|---------|----------|-------|
| `GET /cartoes` | ✅ | ✅ | Strongly typed |

### Imóveis Funcionais
| Endpoint | Backend | Frontend | Notes |
|----------|---------|----------|-------|
| `GET /imoveis` | ✅ | ✅ | Strongly typed |

### COVID-19
| Endpoint | Backend | Frontend | Notes |
|----------|---------|----------|-------|
| `GET /coronavirus/transferencias` | ✅ | ✅ | Strongly typed |

### Notas Fiscais
| Endpoint | Backend | Frontend | Notes |
|----------|---------|----------|-------|
| `GET /notas-fiscais` | ✅ | ✅ | Strongly typed |

---

## Missing Endpoints (68)

### Acordos de Leniência
| Endpoint | Priority | Description |
|----------|----------|-------------|
| `GET /acordos-leniencia` | Medium | Lista acordos de leniência |
| `GET /acordos-leniencia/{id}` | Low | Detalhe de acordo |

### Auxílio Brasil
| Endpoint | Priority | Description |
|----------|----------|-------------|
| `GET /auxilio-brasil-por-municipio` | High | Parcelas por município |
| `GET /auxilio-brasil-sacado-beneficiario-por-municipio` | Medium | Beneficiários por município |
| `GET /auxilio-brasil-sacado-por-nis` | High | Consulta por NIS |

### Auxílio Emergencial
| Endpoint | Priority | Description |
|----------|----------|-------------|
| `GET /auxilio-emergencial-beneficiario-por-municipio` | Medium | Beneficiários por município |
| `GET /auxilio-emergencial-por-cpf-ou-nis` | High | Consulta por CPF/NIS |
| `GET /auxilio-emergencial-por-municipio` | Medium | Totais por município |

### Bolsa Família (Antigo)
| Endpoint | Priority | Description |
|----------|----------|-------------|
| `GET /bolsa-familia-disponivel-beneficiario-por-municipio` | Low | Parcelas disponíveis |
| `GET /bolsa-familia-disponivel-por-cpf-ou-nis` | Low | Disponível por CPF/NIS |
| `GET /bolsa-familia-por-municipio` | Low | Totais por município |
| `GET /bolsa-familia-sacado-beneficiario-por-municipio` | Low | Sacados por município |
| `GET /bolsa-familia-sacado-por-nis` | Low | Sacado por NIS |

### BPC (Benefício de Prestação Continuada)
| Endpoint | Priority | Description |
|----------|----------|-------------|
| `GET /bpc-beneficiario-por-municipio` | High | Beneficiários BPC |
| `GET /bpc-por-cpf-ou-nis` | High | Consulta por CPF/NIS |
| `GET /bpc-por-municipio` | Medium | Totais por município |

### Contratos (Adicionais)
| Endpoint | Priority | Description |
|----------|----------|-------------|
| `GET /contratos/apostilamento` | Low | Apostilamentos |
| `GET /contratos/documentos-relacionados` | Medium | Documentos relacionados |
| `GET /contratos/itens-contratados` | Medium | Itens contratados |
| `GET /contratos/numero` | Medium | Busca por número |
| `GET /contratos/processo` | Medium | Busca por processo |
| `GET /contratos/termo-aditivo` | Low | Termos aditivos |

### Convênios (Adicionais)
| Endpoint | Priority | Description |
|----------|----------|-------------|
| `GET /convenios/numero` | Medium | Busca por número |
| `GET /convenios/numero-original` | Low | Busca por número original |
| `GET /convenios/numero-processo` | Medium | Busca por processo |
| `GET /convenios/tipo-instrumento` | Low | Tipos de instrumento |

### COVID-19 (Adicionais)
| Endpoint | Priority | Description |
|----------|----------|-------------|
| `GET /coronavirus/movimento-liquido-despesa` | Medium | Movimentação líquida |

### Despesas (Adicionais)
| Endpoint | Priority | Description |
|----------|----------|-------------|
| `GET /despesas/documentos` | High | Documentos de despesa |
| `GET /despesas/documentos-por-favorecido` | High | Por favorecido |
| `GET /despesas/documentos-relacionados` | Medium | Relacionados |
| `GET /despesas/documentos/{codigo}` | Medium | Por código |
| `GET /despesas/empenhos-impactados` | Medium | Empenhos impactados |
| `GET /despesas/favorecidos-finais-por-documento` | Medium | Favorecidos finais |
| `GET /despesas/funcional-programatica/acoes` | Medium | Ações |
| `GET /despesas/funcional-programatica/funcoes` | Medium | Funções |
| `GET /despesas/funcional-programatica/listar` | Medium | Listagem |
| `GET /despesas/funcional-programatica/programas` | Medium | Programas |
| `GET /despesas/funcional-programatica/subfuncoes` | Medium | Subfunções |
| `GET /despesas/itens-de-empenho` | High | Itens de empenho |
| `GET /despesas/itens-de-empenho/historico` | Medium | Histórico |
| `GET /despesas/plano-orcamentario` | Medium | Plano orçamentário |
| `GET /despesas/por-funcional-programatica` | High | Por funcional programática |
| `GET /despesas/por-funcional-programatica/movimentacao-liquida` | Medium | Movimentação líquida |
| `GET /despesas/tipo-transferencia` | Low | Tipos de transferência |

### Emendas (Adicionais)
| Endpoint | Priority | Description |
|----------|----------|-------------|
| `GET /emendas/documentos/{codigo}` | Medium | Documentos por emenda |

### Licitações (Adicionais)
| Endpoint | Priority | Description |
|----------|----------|-------------|
| `GET /licitacoes/contratos-relacionados-licitacao` | High | Contratos relacionados |
| `GET /licitacoes/empenhos` | High | Empenhos da licitação |
| `GET /licitacoes/itens-licitados` | High | Itens licitados |
| `GET /licitacoes/modalidades` | Medium | Modalidades |
| `GET /licitacoes/participantes` | High | Participantes |
| `GET /licitacoes/por-processo` | Medium | Por processo |
| `GET /licitacoes/por-ug-modalidade-numero` | Medium | Por UG/modalidade/número |
| `GET /licitacoes/ugs` | Low | Unidades gestoras |

### Notas Fiscais (Adicionais)
| Endpoint | Priority | Description |
|----------|----------|-------------|
| `GET /notas-fiscais-por-chave` | High | Por chave única |

### PEPs (Pessoas Expostas Politicamente)
| Endpoint | Priority | Description |
|----------|----------|-------------|
| `GET /peps` | High | Lista PEPs |

### Permissionários
| Endpoint | Priority | Description |
|----------|----------|-------------|
| `GET /permissionarios` | Medium | Ocupantes de imóveis |

### PETI (Erradicação do Trabalho Infantil)
| Endpoint | Priority | Description |
|----------|----------|-------------|
| `GET /peti-beneficiario-por-municipio` | Medium | Por município |
| `GET /peti-por-cpf-ou-nis` | Medium | Por CPF/NIS |
| `GET /peti-por-municipio` | Medium | Totais por município |

### Renúncias Fiscais
| Endpoint | Priority | Description |
|----------|----------|-------------|
| `GET /renuncias-fiscais-empresas-habilitadas-beneficios-fiscais` | Medium | Empresas habilitadas |
| `GET /renuncias-fiscais-empresas-imunes-isentas` | Medium | Imunes e isentas |
| `GET /renuncias-valor` | High | Valores renunciados |

### Garantia-Safra (Adicionais)
| Endpoint | Priority | Description |
|----------|----------|-------------|
| `GET /safra-beneficiario-por-municipio` | Medium | Beneficiários |
| `GET /safra-codigo-por-cpf-ou-nis` | High | Por CPF/NIS |

### Seguro Defeso (Adicionais)
| Endpoint | Priority | Description |
|----------|----------|-------------|
| `GET /seguro-defeso-beneficiario-por-municipio` | Medium | Beneficiários |
| `GET /seguro-defeso-codigo` | High | Por CPF/NIS |

### Servidores (Adicionais)
| Endpoint | Priority | Description |
|----------|----------|-------------|
| `GET /servidores/funcoes-e-cargos` | Medium | Funções e cargos |
| `GET /servidores/por-orgao` | High | Agregado por órgão |

### Imóveis (Adicionais)
| Endpoint | Priority | Description |
|----------|----------|-------------|
| `GET /situacao-imovel` | Low | Situações possíveis |

---

## Implementation Priority Guide

### High Priority (Recommended for immediate implementation)
- Endpoints frequently requested by users
- Endpoints that complement existing features
- Endpoints with unique data not available elsewhere

### Medium Priority
- Endpoints that provide additional detail
- Administrative/lookup endpoints
- Specialized queries

### Low Priority
- Historical/legacy endpoints
- Rarely used queries
- Endpoints with overlapping functionality

---

## Type Definitions

All implemented endpoints now use strongly-typed DTOs defined in:
- Backend: Return types documented in docstrings
- Frontend: `/frontend/components/chat/tools/base/api-types.ts`

When implementing new endpoints, follow the existing pattern:
1. Add backend function in `transparencia.py`
2. Add to `__all__` export list
3. Create frontend tool folder with `types.ts`, `renderer.tsx`, `index.ts`
4. Register in `registry.ts`
5. Add new agent service import if needed

---

*Last updated: 2026-01-31*
