// Service Worker Registration - Hegemon Consultoria

export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('[Service Worker] Registered successfully:', registration.scope);

          // Verificar atualizações periodicamente
          setInterval(() => {
            registration.update();
          }, 60 * 60 * 1000); // A cada hora

          // Escutar atualizações do service worker
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // Novo service worker disponível
                  console.log('[Service Worker] New version available');
                  // Opcional: mostrar notificação para o usuário
                  if (confirm('Nova versão disponível! Deseja recarregar a página?')) {
                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                    window.location.reload();
                  }
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error('[Service Worker] Registration failed:', error);
        });
    });

    // Escutar mudanças de controle do service worker
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });
  }
}

// Cachear URLs específicas manualmente
export function cacheUrls(urls: string[]) {
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'CACHE_URLS',
      urls,
    });
  }
}

// Verificar se está offline
export function isOnline(): boolean {
  return navigator.onLine;
}

// Escutar mudanças de status online/offline
export function onOnlineStatusChange(callback: (online: boolean) => void) {
  window.addEventListener('online', () => callback(true));
  window.addEventListener('offline', () => callback(false));
}

