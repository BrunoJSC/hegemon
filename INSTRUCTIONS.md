# Sistema de Páginas de Serviços - Certifica Mais

## Como Funciona

Este sistema permite que os usuários cliquem nos serviços no footer e sejam redirecionados para uma página de detalhes específica.

## Estrutura

### 1. Footer Adaptado (`src/components/footer.tsx`)

- Os serviços agora são clicáveis
- Cada serviço redireciona para `/service-details.html?service=chave-do-servico`
- Animações de hover incluídas

### 2. Página de Detalhes (`src/pages/ServiceDetails.tsx`)

- Uma única página que mostra conteúdo dinâmico baseado no parâmetro da URL
- Contém informações completas sobre cada serviço:
  - Descrição detalhada
  - Benefícios
  - Processo de trabalho (4 etapas)
  - Áreas de atuação
  - Setores atendidos
  - Call-to-action com WhatsApp e Email

### 3. Serviços Disponíveis

| Serviço                   | Chave da URL             |
| ------------------------- | ------------------------ |
| Consultoria Reguladora    | `consultoria-reguladora` |
| Cumprimento de Exigências | `cumprimento-exigencias` |
| Defesa Técnica INMETRO    | `defesa-tecnica-inmetro` |
| Vigilância Sanitária      | `vigilancia-sanitaria`   |
| Laudo de Ergonomia NR-17  | `laudo-ergonomia-nr17`   |

## Como Usar

### 1. No Footer

Os serviços já estão configurados para serem clicáveis. Quando o usuário clica em um serviço, é redirecionado automaticamente.

### 2. Em Cards de Serviços (Opcional)

Use o componente `ServiceCard` para criar cards clicáveis:

```tsx
import { ServiceCard } from "./components/ServiceCard";
import { Shield } from "lucide-react";

<ServiceCard
  title="Consultoria Reguladora"
  description="Orientação especializada..."
  icon={<Shield className="w-12 h-12" />}
  serviceKey="consultoria-reguladora"
/>;
```

### 3. Links Diretos

Você pode criar links diretos para qualquer serviço:

```tsx
<a href="/service-details.html?service=consultoria-reguladora">
  Ver Consultoria Reguladora
</a>
```

## Desenvolvimento

### Para rodar o projeto:

```bash
npm run dev
```

### Para fazer build:

```bash
npm run build
```

### Estrutura de arquivos:

```
src/
├── components/
│   ├── footer.tsx          # Footer com serviços clicáveis
│   └── ServiceCard.tsx     # Card de serviço (opcional)
├── pages/
│   ├── ServiceDetails.tsx  # Página de detalhes dinâmica
│   └── Services.tsx        # Página de listagem (opcional)
├── App.tsx                 # Página principal
└── service-details-main.tsx # Entry point para página de detalhes

public/
└── service-details.html    # HTML para página de detalhes
```

## Personalização

### Adicionar Novo Serviço

1. Adicione o serviço no array `services` do footer
2. Adicione os dados completos no objeto `servicesData` em `ServiceDetails.tsx`
3. Use a mesma estrutura de dados existente

### Modificar Conteúdo

Edite o objeto `servicesData` em `ServiceDetails.tsx` para alterar:

- Títulos e descrições
- Benefícios
- Processo de trabalho
- Áreas de atuação
- Setores atendidos

### Estilização

As cores e estilos seguem o padrão da marca:

- Fundo: `#F6EBD8`
- Texto principal: `#2A1A12`
- Destaque: `#A76B3F`
- Texto secundário: `#E9C89C` e `#5D4E37`

## Funcionalidades

- ✅ Navegação suave entre seções
- ✅ Redirecionamento para páginas de detalhes
- ✅ Conteúdo dinâmico baseado em parâmetros da URL
- ✅ Animações com Framer Motion
- ✅ Design responsivo
- ✅ Links para WhatsApp e Email
- ✅ Botão de voltar
- ✅ SEO-friendly URLs
