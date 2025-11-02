# Troubleshooting - Hegemon Consultoria

## Erro: "Cannot set properties of undefined (setting 'Activity')"

### Causa

Este erro ocorria quando o Vite separava incorretamente as dependências do `lucide-react` em chunks diferentes, causando problemas de inicialização.

### Solução Aplicada

Mudamos de `manualChunks` com função para objeto estático:

```typescript
// ❌ ANTES (causava erro)
manualChunks: (id) => {
  if (id.includes("lucide-react")) {
    return "icons"; // Separava lucide incorretamente
  }
}

// ✅ DEPOIS (funciona)
manualChunks: {
  "react-vendor": ["react", "react-dom", "react-router-dom"],
  motion: ["motion"],
  i18n: ["i18next", "react-i18next", "i18next-browser-languagedetector"],
}
// Outras libs ficam no chunk principal
```

### Como Verificar se Está Funcionando

1. **Build de produção:**

```bash
npm run build
```

2. **Preview local:**

```bash
npm run preview
```

3. **Abrir no navegador:**

```
http://localhost:4173/
```

4. **Verificar console:**

- Não deve haver erros
- Todas as páginas devem carregar corretamente

## Outros Problemas Comuns

### 1. Erro de Roteamento

**Sintoma:** Página 404 ao recarregar em rota diferente de `/`

**Solução:** Configurar servidor para SPA (Single Page Application)

Para desenvolvimento:

```bash
npm run dev  # Vite já configura automaticamente
```

Para produção (exemplo com Nginx):

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### 2. Lazy Loading Não Funciona

**Sintoma:** Componentes lazy não carregam

**Verificar:**

1. Suspense está envolvendo o componente?
2. Fallback está definido?
3. Import está correto?

```tsx
// ✅ Correto
const Component = lazy(() =>
  import("./Component").then((m) => ({ default: m.Component }))
);

<Suspense fallback={<Loading />}>
  <Component />
</Suspense>;
```

### 3. Chunks Muito Grandes

**Sintoma:** Warning sobre chunk size

**Solução:** Já implementada no `vite.config.ts`

- Separação de vendors
- Lazy loading de páginas
- Lazy loading de componentes pesados

### 4. Erro de Tradução (i18n)

**Sintoma:** Textos não aparecem ou aparecem chaves

**Verificar:**

1. Arquivos de tradução existem?
2. Chaves estão corretas?
3. i18n está inicializado?

```tsx
// Verificar se a chave existe
console.log(t("header.home")); // Deve retornar "Início"
```

### 5. Imagens Não Carregam

**Sintoma:** Imagens quebradas

**Verificar:**

1. Imagens estão na pasta `public/`?
2. Caminho começa com `/`?

```tsx
// ✅ Correto
<img src="/logo.svg" alt="Logo" />

// ❌ Errado
<img src="logo.svg" alt="Logo" />
```

## Comandos Úteis

### Desenvolvimento

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run preview      # Preview do build
npm run lint         # Verificar erros de lint
```

### Debug

```bash
# Limpar cache e node_modules
rm -rf node_modules dist .vite
npm install

# Build com logs detalhados
npm run build -- --debug

# Analisar bundle (instalar primeiro)
npm install -D rollup-plugin-visualizer
```

## Logs Importantes

### Build Bem-Sucedido

```
✓ 488 modules transformed.
✓ built in 2.07s
```

### Chunks Esperados

```
react-vendor.js    ~44 KB   # React, ReactDOM, Router
motion.js          ~56 KB   # Framer Motion
i18n.js            ~54 KB   # i18next
header.js          ~76 KB   # Header component
index.js           ~229 KB  # App principal
```

## Contato para Suporte

Se o problema persistir:

1. Verificar console do navegador (F12)
2. Verificar logs do build
3. Limpar cache e reinstalar dependências
4. Verificar versões das dependências no `package.json`

## Versões Testadas

```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router-dom": "^6.x",
  "motion": "^12.23.24",
  "i18next": "^25.6.0",
  "vite": "^7.1.7"
}
```

## Checklist de Verificação

- [ ] `npm install` executado sem erros
- [ ] `npm run build` completa sem erros
- [ ] `npm run preview` inicia sem erros
- [ ] Página inicial carrega corretamente
- [ ] Navegação entre páginas funciona
- [ ] Menu dropdown funciona
- [ ] Traduções aparecem corretamente
- [ ] Imagens carregam
- [ ] Console sem erros
