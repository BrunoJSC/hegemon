import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Componente para adicionar hreflang tags para SEO internacional
 * Melhora o SEO para sites multilíngue
 */
export function Hreflang() {
  const location = useLocation();
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
  const currentPath = location.pathname;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const languages = [
      { code: "pt-BR", path: "" },
      { code: "en", path: "/en" },
      { code: "zh", path: "/zh" },
    ];

    // Remover hreflang tags existentes
    const existingLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingLinks.forEach((link) => link.remove());

    // Adicionar novos hreflang tags
    languages.forEach((lang) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.setAttribute("hreflang", lang.code);
      link.href = `${siteUrl}${lang.path}${currentPath}`;
      document.head.appendChild(link);
    });

    // x-default para idioma padrão
    const defaultLink = document.createElement("link");
    defaultLink.rel = "alternate";
    defaultLink.setAttribute("hreflang", "x-default");
    defaultLink.href = `${siteUrl}${currentPath}`;
    document.head.appendChild(defaultLink);
  }, [currentPath, siteUrl]);

  return null;
}

