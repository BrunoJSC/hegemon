# Favicon e PWA - Hegemon Consultoria

## ✅ Favicon Configurado

### Arquivos

- **Logo Principal**: `/public/logo.svg`
- **Manifest PWA**: `/public/manifest.json`

### Formatos Suportados

```html
<!-- SVG (moderno, escalável) -->
<link rel="icon" type="image/svg+xml" href="/logo.svg" />

<!-- PNG para compatibilidade -->
<link rel="icon" type="image/png" sizes="32x32" href="/logo.svg" />
<link rel="icon" type="image/png" sizes="16x16" href="/logo.svg" />

<!-- Apple Touch Icon (iOS) -->
<link rel="apple-touch-icon" sizes="180x180" href="/logo.svg" />

<!-- Shortcut Icon (fallback) -->
<link rel="shortcut icon" href="/logo.svg" />
```

## 📱 PWA (Progressive Web App)

### Manifest.json

Configurado com:

- ✅ Nome da aplicação
- ✅ Nome curto
- ✅ Descrição
- ✅ Ícones (SVG)
- ✅ Cores do tema
- ✅ Modo de exibição (standalone)
- ✅ Orientação (portrait)
- ✅ Idioma (pt-BR)

### Benefícios do PWA

1. **Instalável**

   - Usuários podem instalar o site como app
   - Ícone na tela inicial do celular
   - Experiência similar a app nativo

2. **Offline-first** (futuro)

   - Service Worker pode ser adicionado
   - Cache de recursos
   - Funciona sem internet

3. **Engajamento**
   - Push notifications (futuro)
   - Melhor retenção de usuários
   - Experiência mais rápida

## 🎨 Logo SVG

### Características

- **Formato**: SVG (Scalable Vector Graphics)
- **Vantagens**:
  - Escalável sem perda de qualidade
  - Tamanho pequeno
  - Suporte a cores e gradientes
  - Animações possíveis

### Montanhas Hegemon

A logo representa:

- Montanhas em tons de marrom/bege
- Simboliza solidez e confiança
- Texto "HEGEMON CONSULTORIA"

## 🔧 Como Testar

### 1. Favicon no Navegador

```
1. Abrir o site
2. Verificar ícone na aba do navegador
3. Adicionar aos favoritos
4. Verificar ícone nos favoritos
```

### 2. PWA no Mobile

```
1. Abrir site no Chrome mobile
2. Menu > "Adicionar à tela inicial"
3. Verificar ícone na tela inicial
4. Abrir app instalado
5. Verificar modo standalone (sem barra de navegação)
```

### 3. Lighthouse Audit

```bash
# Chrome DevTools > Lighthouse
# Selecionar "Progressive Web App"
# Gerar relatório
```

## 📊 Checklist PWA

### Básico (Implementado)

- [x] Manifest.json configurado
- [x] Ícones definidos
- [x] Theme color configurado
- [x] Viewport configurado
- [x] HTTPS (necessário em produção)

### Avançado (Futuro)

- [ ] Service Worker
- [ ] Offline support
- [ ] Push notifications
- [ ] Background sync
- [ ] Install prompt customizado

## 🚀 Melhorias Futuras

### 1. Ícones PNG

Criar versões PNG da logo para melhor compatibilidade:

```
/public/icons/
  ├── icon-16x16.png
  ├── icon-32x32.png
  ├── icon-48x48.png
  ├── icon-72x72.png
  ├── icon-96x96.png
  ├── icon-128x128.png
  ├── icon-144x144.png
  ├── icon-152x152.png
  ├── icon-192x192.png
  ├── icon-384x384.png
  └── icon-512x512.png
```

### 2. Service Worker

```javascript
// public/sw.js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("hegemon-v1").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/logo.svg",
        // outros recursos
      ]);
    })
  );
});
```

### 3. Install Prompt

```javascript
// Customizar prompt de instalação
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // Mostrar botão customizado
});
```

## 🎯 Cores do Tema

### Paleta Hegemon

```css
--primary: #a76b3f; /* Marrom principal */
--background: #f6ebd8; /* Bege claro */
--text: #2a1a12; /* Marrom escuro */
--accent: #7b4a2e; /* Marrom médio */
```

### Theme Color

```html
<meta name="theme-color" content="#A76B3F" />
<meta name="msapplication-TileColor" content="#A76B3F" />
```

## 📱 Compatibilidade

### Navegadores

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ✅ Samsung Internet

### Sistemas Operacionais

- ✅ Android
- ✅ iOS
- ✅ Windows
- ✅ macOS
- ✅ Linux

## 🔍 Verificação

### Manifest Validator

```
https://manifest-validator.appspot.com/
```

### PWA Builder

```
https://www.pwabuilder.com/
```

### Lighthouse Score

Objetivo: 100/100 em PWA

## 📝 Notas

1. **SVG vs PNG**

   - SVG é preferível (escalável)
   - PNG como fallback para navegadores antigos

2. **HTTPS Obrigatório**

   - PWA requer HTTPS em produção
   - Localhost funciona sem HTTPS

3. **Cache Strategy**

   - Cache-first para assets estáticos
   - Network-first para conteúdo dinâmico

4. **Update Strategy**
   - Versionar manifest e service worker
   - Notificar usuário sobre atualizações

## ✨ Resultado

- ✅ Favicon personalizado com logo Hegemon
- ✅ PWA manifest configurado
- ✅ Instalável em dispositivos móveis
- ✅ Ícone consistente em todas as plataformas
- ✅ Pronto para melhorias futuras (Service Worker)
