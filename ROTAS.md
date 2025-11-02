# Sistema de Rotas - Hegemon Consultoria

## Rotas Implementadas

### 1. Página Inicial

- **URL**: `/`
- **Componente**: `HomePage`
- **Descrição**: Página principal com todas as seções (Hero, Serviços, Produtos, Sobre, Contato)
- **Navegação por hash**: Suporta navegação para seções específicas usando `/#section-id`

### 2. Detalhes do Serviço

- **URL**: `/servicos/:id`
- **Componente**: `ServiceDetailPageRoute`
- **Parâmetro**: `id` - ID do serviço (1, 4, 5, 6, 7, 8, 10, 11, 12)
- **Exemplo**: `/servicos/1` - Defesa Técnica em Autuações

### 3. Página de Contato

- **URL**: `/contato`
- **Componente**: `ContactPage`
- **Descrição**: Formulário de contato completo

## Navegação por Seções (Hash)

Na página inicial, você pode navegar diretamente para seções específicas:

- `/#home` - Topo da página
- `/#services` - Seção de serviços
- `/#products` - Seção de produtos
- `/#about` - Seção sobre nós
- `/#contact` - Seção de contato

## Funcionalidades

### ✅ URLs Reais

- Cada página tem sua própria URL
- Usuários podem compartilhar links diretos
- Funciona com botões voltar/avançar do navegador

### ✅ Scroll Automático

- Ao mudar de página, scroll automático para o topo
- Suporte para navegação por hash (#section)
- Scroll suave entre seções

### ✅ SEO Friendly

- URLs semânticas e descritivas
- Cada página pode ter seus próprios meta tags
- Melhor indexação pelos motores de busca

### ✅ Histórico do Navegador

- Navegação funciona com botões voltar/avançar
- Estado da aplicação sincronizado com a URL

## Estrutura de Arquivos

```
src/
├── app.tsx                          # Configuração do Router
├── pages/
│   ├── home.tsx                     # Página inicial
│   ├── service-detail.tsx           # Página de detalhes do serviço
│   └── contact.tsx                  # Página de contato
├── components/
│   ├── header.tsx                   # Header com navegação
│   └── layout/
│       └── main-layout.tsx          # Layout principal compartilhado
```

## Como Usar

### Navegação Programática

```tsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

// Ir para home
navigate("/");

// Ir para serviço específico
navigate("/servicos/1");

// Ir para contato
navigate("/contato");

// Ir para seção específica na home
navigate("/#services");
```

### Links Diretos

```tsx
import { Link } from 'react-router-dom';

<Link to="/">Home</Link>
<Link to="/servicos/1">Ver Serviço</Link>
<Link to="/contato">Contato</Link>
```

## Melhorias Implementadas

1. **Eliminação de State Management Complexo**: Removido useState para controle de páginas
2. **URLs Compartilháveis**: Cada página tem URL única
3. **Melhor UX**: Botões voltar/avançar funcionam corretamente
4. **SEO**: Motores de busca podem indexar todas as páginas
5. **Código Mais Limpo**: Separação clara entre páginas e componentes
6. **Layout Reutilizável**: MainLayout evita duplicação de código

## Próximos Passos (Opcional)

- [ ] Adicionar lazy loading para páginas
- [ ] Implementar página 404
- [ ] Adicionar meta tags dinâmicos por página
- [ ] Implementar breadcrumbs
- [ ] Adicionar transições entre páginas
