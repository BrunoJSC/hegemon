import type { ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string;
  alt: string;
  webpSrc?: string;
  avifSrc?: string;
  fallbackSrc?: string;
  loading?: "lazy" | "eager";
  className?: string;
}

/**
 * Componente de imagem otimizada com suporte a WebP/AVIF e fallbacks
 * Usa o elemento <picture> para detectar automaticamente o suporte do navegador
 */
export function OptimizedImage({
  src,
  alt,
  webpSrc,
  avifSrc,
  fallbackSrc,
  loading = "lazy",
  className,
  ...props
}: OptimizedImageProps) {
  const finalSrc = fallbackSrc || src;

  // Se temos versões WebP/AVIF, usar picture element para fallback automático
  if (webpSrc || avifSrc) {
    return (
      <picture>
        {avifSrc && (
          <source srcSet={avifSrc} type="image/avif" />
        )}
        {webpSrc && (
          <source srcSet={webpSrc} type="image/webp" />
        )}
        <img
          src={finalSrc}
          alt={alt}
          loading={loading}
          className={className}
          {...props}
        />
      </picture>
    );
  }

  // Caso contrário, usar img normal
  return (
    <img
      src={finalSrc}
      alt={alt}
      loading={loading}
      className={className}
      {...props}
    />
  );
}
