// Utilitário para prefetch de rotas e recursos

/**
 * Prefetch de um recurso (imagem, fonte, etc)
 */
export function prefetchResource(href: string, as: 'image' | 'font' | 'script' | 'style' = 'image') {
  // Verificar se já foi feito prefetch
  const existing = document.querySelector(`link[rel="prefetch"][href="${href}"]`);
  if (existing) {
    return;
  }

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.as = as;
  link.href = href;
  document.head.appendChild(link);
}

/**
 * Prefetch de múltiplos recursos
 */
export function prefetchResources(resources: Array<{ href: string; as?: 'image' | 'font' | 'script' | 'style' }>) {
  resources.forEach(({ href, as = 'image' }) => {
    prefetchResource(href, as);
  });
}

/**
 * Prefetch de rota
 * Como os chunks têm hash, prefetchamos de forma mais genérica
 * O React Router faz o prefetch automaticamente ao usar Link, mas podemos ajudar
 */
export function prefetchRoute(_path: string) {
  // Para rotas específicas, podemos tentar prefetch de recursos conhecidos
  // Mas como os chunks têm hash, é difícil prever
  
  // Prefetch de imagens ou outros recursos que sabemos que a rota usa
  // Isso pode ser expandido conforme necessário
  // Por enquanto, deixamos o React Router fazer o prefetch automático
}

/**
 * Prefetch ao hover (usar em eventos onMouseEnter)
 * Retorna handlers de mouse para adicionar aos elementos
 */
export function prefetchOnHover(path: string) {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let hasPrefetched = false;
  
  return {
    onMouseEnter: () => {
      if (hasPrefetched) {
        return;
      }

      timeout = setTimeout(() => {
        // Prefetch usando requestIdleCallback para não bloquear
        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
          window.requestIdleCallback(() => {
            prefetchRoute(path);
            hasPrefetched = true;
          }, { timeout: 2000 });
        } else {
          // Fallback para navegadores sem requestIdleCallback
          setTimeout(() => {
            prefetchRoute(path);
            hasPrefetched = true;
          }, 200);
        }
      }, 100); // Delay de 100ms para evitar prefetch desnecessário
    },
    onMouseLeave: () => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    },
  };
}

/**
 * Prefetch inteligente baseado em conexão
 * Só faz prefetch se a conexão não for lenta (2G)
 */
export function prefetchIfGoodConnection(path: string) {
  if (typeof navigator !== 'undefined' && 'connection' in navigator) {
    const connection = (navigator as any).connection;
    if (connection) {
      // Se a conexão for 2G ou slower, não prefetch
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        return;
      }
      
      // Se estiver em modo de economia de dados, não prefetch
      if (connection.saveData) {
        return;
      }
    }
  }
  
  prefetchRoute(path);
}
