# Otimizações de Performance - Hegemon Consultoria

## ✅ Implementações Realizadas

### 1. Service Worker para Cache Offline

#### Funcionalidades

- ✅ **Cache de Assets Estáticos**: HTML, CSS, JS, imagens e fontes
- ✅ **Estratégia Network First**: Prioriza rede, usa cache como fallback
- ✅ **Estratégia Cache First**: Para assets estáticos (imagens, fontes)
- ✅ **Atualização Automática**: Verifica atualizações a cada hora
- ✅ **Cache Dinâmico**: Cache de recursos conforme são acessados
- ✅ **Offline Support**: Funciona offline após primeiro carregamento

#### Estratégias de Cache

1. **Network First** (Páginas HTML, Scripts, CSS)
   - Tenta buscar da rede primeiro
   - Se falhar, usa cache
   - Atualiza cache se resposta da rede for bem-sucedida

2. **Cache First** (Imagens, Fontes)
   - Verifica cache primeiro
   - Se não encontrar, busca da rede
   - Armazena no cache para uso futuro

#### Arquivos

- `public/sw.js` - Service Worker principal
- `src/utils/service-worker.ts` - Utilitários de registro e gerenciamento

#### Como Funciona

1. Service Worker é registrado automaticamente no carregamento da página
2. Assets estáticos são cacheados na instalação
3. Recursos dinâmicos são cacheados conforme acesso
4. Atualizações são verificadas periodicamente
5. Usuário pode atualizar manualmente quando nova versão estiver disponível

### 2. Otimização de Imagens (WebP/AVIF)

#### Componente OptimizedImage

- ✅ **Suporte a WebP**: Fallback automático
- ✅ **Suporte a AVIF**: Formato mais moderno e eficiente
- ✅ **Fallback Automático**: Usa formato original se WebP/AVIF não disponível
- ✅ **Lazy Loading**: Carregamento sob demanda
- ✅ **Picture Element**: Usa elemento `<picture>` para seleção automática

#### Uso

```tsx
import { OptimizedImage } from "./components/optimized-image";

// Com WebP
<OptimizedImage
  src="/image.jpg"
  webpSrc="/image.webp"
  alt="Descrição"
  loading="lazy"
/>

// Com AVIF e WebP
<OptimizedImage
  src="/image.jpg"
  avifSrc="/image.avif"
  webpSrc="/image.webp"
  alt="Descrição"
  loading="lazy"
/>
```

#### Benefícios

- **Redução de Tamanho**: WebP é ~30% menor que JPEG
- **AVIF**: Até 50% menor que JPEG com mesma qualidade
- **Melhor Performance**: Carregamento mais rápido
- **Compatibilidade**: Fallback automático para navegadores antigos

### 3. Prefetch de Rotas ao Hover

#### Funcionalidades

- ✅ **Prefetch Inteligente**: Carrega rotas ao hover com delay de 100ms
- ✅ **Prefetch de Recursos**: Prefetch de imagens, fontes, etc.
- ✅ **Otimização de Largura de Banda**: Apenas prefetch quando necessário
- ✅ **Cancelamento**: Cancela prefetch se hover sair antes do delay

#### Implementação

- `src/utils/prefetch.ts` - Utilitários de prefetch
- Prefetch automático em links do header
- Prefetch em cards de serviços

#### Uso

```tsx
import { prefetchOnHover } from "../utils/prefetch";

<div
  {...prefetchOnHover("/contato")}
  onClick={() => navigate("/contato")}
>
  Contato
</div>
```

#### Benefícios

- **Carregamento Instantâneo**: Rotas já estão carregadas ao clicar
- **Melhor UX**: Reduz tempo de espera
- **Otimização**: Apenas prefetch quando há intenção de navegação

### 4. Compressão Brotli no Servidor

#### Configuração Vercel

- ✅ **Brotli**: Compressão mais eficiente que Gzip
- ✅ **Gzip Fallback**: Fallback para navegadores que não suportam Brotli
- ✅ **Cache Headers**: Headers otimizados para cache
- ✅ **Security Headers**: Headers de segurança configurados

#### Tipos MIME Suportados

- `text/html`
- `text/css`
- `text/javascript`
- `application/javascript`
- `application/json`
- `application/xml`
- `image/svg+xml`
- `font/woff`
- `font/woff2`

#### Headers de Cache

- **Assets (JS/CSS)**: Cache de 1 ano (immutable)
- **Imagens**: Cache de 30 dias
- **HTML**: Sem cache (sempre atualizado)

#### Benefícios

- **Redução de Tamanho**: Brotli é ~15-20% melhor que Gzip
- **Menor Largura de Banda**: Transferência mais rápida
- **Melhor Performance**: Carregamento mais rápido
- **Cache Eficiente**: Headers otimizados reduzem requisições

## 📊 Resultados Esperados

### Performance

- **First Contentful Paint (FCP)**: Redução de 20-30%
- **Largest Contentful Paint (LCP)**: Redução de 15-25%
- **Time to Interactive (TTI)**: Redução de 10-20%
- **Total Blocking Time (TBT)**: Redução de 20-30%

### Tamanho de Transferência

- **HTML/CSS/JS**: Redução de 60-70% com Brotli
- **Imagens**: Redução de 30-50% com WebP/AVIF
- **Cache Hit Rate**: 80-90% em visitas subsequentes

### Experiência do Usuário

- **Carregamento Offline**: Site funciona offline após primeiro acesso
- **Navegação Instantânea**: Prefetch reduz tempo de carregamento
- **Melhor Performance**: Carregamento mais rápido em geral

## 🔍 Como Verificar

### Service Worker

1. Abrir DevTools > Application > Service Workers
2. Verificar se está registrado e ativo
3. Testar modo offline (Network > Offline)
4. Verificar cache em Application > Cache Storage

### Prefetch

1. Abrir DevTools > Network
2. Hover sobre links no header
3. Verificar requisições de prefetch
4. Verificar chunks sendo carregados

### Compressão

1. Abrir DevTools > Network
2. Selecionar um recurso
3. Verificar header `Content-Encoding`
4. Verificar tamanho transferido vs. tamanho real

### Imagens

1. Abrir DevTools > Network
2. Filtrar por imagens
3. Verificar formato sendo carregado (WebP/AVIF)
4. Comparar tamanhos de arquivo

## 📝 Notas Técnicas

### Service Worker

- Cache versionado para invalidação
- Atualização automática a cada hora
- Limpeza de cache antigo na ativação
- Suporte a mensagens do cliente

### Prefetch

- Delay de 100ms para evitar prefetch desnecessário
- Cancelamento automático se hover sair
- Prefetch apenas em conexões não-móveis (opcional)

### Imagens

- Picture element para seleção automática
- Fallback para formato original
- Lazy loading por padrão
- Suporte a todas as props de img

### Compressão

- Brotli com nível 6 (balanço entre compressão e velocidade)
- Gzip como fallback
- Headers de cache configurados
- Security headers adicionados

## 🚀 Próximos Passos (Opcional)

- [ ] Implementar precache de rotas críticas
- [ ] Adicionar background sync para formulários
- [ ] Implementar push notifications
- [ ] Adicionar métricas de performance
- [ ] Otimizar imagens automaticamente no build
- [ ] Implementar image CDN
- [ ] Adicionar service worker analytics

## ✨ Conclusão

Todas as otimizações de performance foram implementadas:

- ✅ Service Worker para cache offline
- ✅ Otimização de imagens (WebP/AVIF)
- ✅ Prefetch de rotas ao hover
- ✅ Compressão Brotli no servidor

O site agora está otimizado para performance máxima, com suporte offline e carregamento mais rápido.

