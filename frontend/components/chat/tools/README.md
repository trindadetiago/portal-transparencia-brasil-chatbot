# Tools Architecture

Esta pasta contém a estrutura modular para customização de ferramentas do chat.

## 📁 Estrutura

```
tools/
├── README.md                 ← Você está aqui
├── index.ts                  ← Export principal (use este!)
├── registry.ts               ← Registro central de ferramentas
├── base/                     ← Types e componentes compartilhados
│   └── types.ts
├── write-todos/              ← Ferramenta 1
│   ├── index.ts
│   ├── types.ts
│   ├── renderer.tsx
│   └── metadata.ts (opcional)
└── internet-search/          ← Ferramenta 2
    ├── index.ts
    ├── types.ts
    └── renderer.tsx
```

## 🚀 Como Usar

### Import simples:

```tsx
import { getToolLabel, renderCustomInput } from '@/components/chat/tools';

// Get label
const label = getToolLabel('internet_search', input);

// Render custom view
const view = renderCustomInput('internet_search', input);
```

## ➕ Como Adicionar Nova Ferramenta

### 1. Criar pasta para a ferramenta:

```bash
mkdir -p tools/consultar-servidores
```

### 2. Criar arquivos:

**`types.ts`** - Define tipos de entrada e saída:
```tsx
export interface ConsultarServidoresInput {
  pagina: number;
  nome?: string;
}

export interface ConsultarServidoresOutput {
  servidores: Servidor[];
  total: number;
}
```

**`renderer.tsx`** - Componente de visualização:
```tsx
import type { ConsultarServidoresInput, ConsultarServidoresOutput } from './types';

export function renderConsultarServidoresInput(input: ConsultarServidoresInput) {
  return (
    <div>
      {/* Seu componente aqui */}
    </div>
  );
}

export function renderConsultarServidoresOutput(output: ConsultarServidoresOutput) {
  return (
    <div>
      {/* Seu componente aqui */}
    </div>
  );
}
```

**`index.ts`** - Exports e metadata:
```tsx
import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarServidoresInput, ConsultarServidoresOutput } from "./types";
import { renderConsultarServidoresInput, renderConsultarServidoresOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarServidoresMetadata: ToolMetadata = {
  label: "Consultar Servidores",
  category: "servidores",
};

export const consultarServidoresRenderer: ToolRenderer<
  ConsultarServidoresInput,
  ConsultarServidoresOutput
> = {
  renderInput: renderConsultarServidoresInput,
  renderOutput: renderConsultarServidoresOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Filtros",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Servidores Encontrados",
};
```

### 3. Registrar no `registry.ts`:

```tsx
import {
  consultarServidoresMetadata,
  consultarServidoresRenderer,
} from "./consultar-servidores";

// Adicionar no toolRegistry:
consultar_servidores: {
  metadata: consultarServidoresMetadata,
  renderer: consultarServidoresRenderer,
},
```

### 4. Re-exportar no `index.ts`:

```tsx
export * from "./consultar-servidores";
```

## 🎨 Opções de Customização

### Métodos disponíveis no ToolRenderer:

```tsx
interface ToolRenderer<TInput, TOutput> {
  // Renderizar input customizado
  renderInput?: (input: TInput) => React.ReactNode;
  
  // Renderizar output customizado
  renderOutput?: (output: TOutput) => React.ReactNode;
  
  // Label dinâmico baseado no input
  getLabel?: (input?: TInput) => string;
  
  // Label da seção de input
  getInputLabel?: (viewMode: "normal" | "raw") => string;
  
  // Label da seção de output
  getOutputLabel?: (viewMode: "normal" | "raw") => string;
}
```

## 📊 Ferramentas Customizadas Atualmente

- ✅ `write_todos` - Lista de tarefas com checklist
- ✅ `internet_search` - Busca com cards de resultados

## 🎯 Próximas Ferramentas a Customizar

- [ ] `consultar_servidores` - Tabela de servidores
- [ ] `consultar_despesas_por_orgao` - Gráficos de despesas
- [ ] `consultar_contratos` - Cards de contratos
- [ ] ... (28 ferramentas restantes)

## 💡 Dicas

1. **Reutilize componentes**: Use componentes do `/components/ui` quando possível
2. **Mantenha simples**: Não é necessário customizar todas as ferramentas
3. **Types first**: Sempre defina os types antes de criar renderers
4. **Teste no /demo**: Use a página `/demo` para testar visualizações
5. **Consistência**: Siga o padrão visual das outras ferramentas

## 🔍 Debugging

Se uma ferramenta não aparecer customizada:

1. Verifique se está registrada no `registry.ts`
2. Verifique se o nome da ferramenta está correto (ex: `write_todos` não `writeTodos`)
3. Verifique se exportou no `index.ts` da ferramenta
4. Verifique console do browser para erros
