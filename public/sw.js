// Service Worker para cache offline - Hegemon Consultoria
const CACHE_NAME = 'hegemon-v1';
const STATIC_CACHE_NAME = 'hegemon-static-v1';
const DYNAMIC_CACHE_NAME = 'hegemon-dynamic-v1';

// Assets estáticos para cache imediato
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/logo.png',
  '/manifest.json',
  '/robots.txt',
  '/sitemap.xml',
];

// Recursos que devem ser cacheados dinamicamente
const DYNAMIC_CACHE_PATTERNS = [
  /\.(js|css)$/,
  /\.(png|jpg|jpeg|svg|webp|avif)$/,
  /\/api\//,
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching static assets');
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[Service Worker] Failed to cache some assets:', err);
      });
    })
  );
  self.skipWaiting();
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            return (
              cacheName !== STATIC_CACHE_NAME &&
              cacheName !== DYNAMIC_CACHE_NAME &&
              cacheName !== CACHE_NAME
            );
          })
          .map((cacheName) => {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          })
      );
    })
  );
  return self.clients.claim();
});

// Estratégia: Network First com fallback para cache
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('[Service Worker] Network failed, using cache:', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    // Fallback para página offline se disponível
    if (request.destination === 'document') {
      const offlinePage = await caches.match('/');
      if (offlinePage) {
        return offlinePage;
      }
    }
    throw error;
  }
}

// Estratégia: Cache First para assets estáticos
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('[Service Worker] Failed to fetch:', error);
    throw error;
  }
}

// Interceptação de requisições
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorar requisições não-GET
  if (request.method !== 'GET') {
    return;
  }

  // Ignorar requisições externas (exceto assets importantes)
  if (url.origin !== location.origin) {
    // Permitir cache de recursos externos importantes se necessário
    return;
  }

  // Estratégia baseada no tipo de recurso
  if (
    request.destination === 'image' ||
    request.destination === 'font' ||
    url.pathname.match(/\.(png|jpg|jpeg|svg|webp|avif|woff|woff2|ttf)$/i)
  ) {
    // Cache First para imagens e fontes
    event.respondWith(cacheFirst(request));
  } else if (
    request.destination === 'script' ||
    request.destination === 'style' ||
    url.pathname.match(/\.(js|css)$/i)
  ) {
    // Network First para scripts e estilos (atualizações importantes)
    event.respondWith(networkFirst(request));
  } else if (request.destination === 'document') {
    // Network First para páginas HTML
    event.respondWith(networkFirst(request));
  } else {
    // Network First como padrão
    event.respondWith(networkFirst(request));
  }
});

// Mensagens do cliente para atualizar cache
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
        return cache.addAll(event.data.urls);
      })
    );
  }
});

