import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: "website" | "article";
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export function SEO({
  title,
  description,
  keywords = "certificação INMETRO, consultoria regulatória, certificação produtos, ANVISA, ANATEL, conformidade técnica, certificação Brasil",
  image = "/logo.png",
  type = "website",
  author = "Hegemon Consultoria",
  publishedTime,
  modifiedTime,
  noindex = false,
  nofollow = false,
}: SEOProps) {
  const location = useLocation();
  const siteUrl = window.location.origin;
  const currentUrl = `${siteUrl}${location.pathname}`;
  const fullImageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  useEffect(() => {
    // Title
    document.title = title;

    // Meta tags básicas
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", author);

    // Open Graph (Facebook, LinkedIn)
    updateMetaTag("og:title", title, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:type", type, "property");
    updateMetaTag("og:url", currentUrl, "property");
    updateMetaTag("og:image", fullImageUrl, "property");
    updateMetaTag("og:image:width", "1200", "property");
    updateMetaTag("og:image:height", "630", "property");
    updateMetaTag("og:image:alt", title, "property");
    updateMetaTag("og:site_name", "Hegemon Consultoria", "property");
    updateMetaTag("og:locale", "pt_BR", "property");
    
    if (publishedTime) {
      updateMetaTag("og:published_time", publishedTime, "property");
    }
    if (modifiedTime) {
      updateMetaTag("og:modified_time", modifiedTime, "property");
    }
    if (author) {
      updateMetaTag("og:author", author, "property");
    }

    // Twitter Card
    updateMetaTag("twitter:card", "summary_large_image", "name");
    updateMetaTag("twitter:title", title, "name");
    updateMetaTag("twitter:description", description, "name");
    updateMetaTag("twitter:image", fullImageUrl, "name");
    updateMetaTag("twitter:image:alt", title, "name");
    updateMetaTag("twitter:site", "@hegemonconsultoria", "name"); // Adicionar quando tiver Twitter
    updateMetaTag("twitter:creator", "@hegemonconsultoria", "name");

    // Article meta tags (se for artigo)
    if (type === "article") {
      if (publishedTime) {
        updateMetaTag("article:published_time", publishedTime, "property");
      }
      if (modifiedTime) {
        updateMetaTag("article:modified_time", modifiedTime, "property");
      }
      if (author) {
        updateMetaTag("article:author", author, "property");
      }
      updateMetaTag("article:section", "Consultoria", "property");
      updateMetaTag("article:tag", keywords, "property");
    }

    // Canonical URL
    updateLinkTag("canonical", currentUrl);

    // Robots
    const robotsContent = noindex
      ? nofollow
        ? "noindex, nofollow"
        : "noindex, follow"
      : nofollow
      ? "index, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
    updateMetaTag("robots", robotsContent, "name");

    // Viewport (já deve estar no HTML, mas garantir)
    updateMetaTag("viewport", "width=device-width, initial-scale=1.0", "name");

    // Theme color
    updateMetaTag("theme-color", "#A76B3F", "name");

    // Additional SEO meta tags
    updateMetaTag("format-detection", "telephone=yes", "name");
    updateMetaTag("mobile-web-app-capable", "yes", "name");
    updateMetaTag("apple-mobile-web-app-capable", "yes", "name");
    updateMetaTag("apple-mobile-web-app-status-bar-style", "default", "name");
    updateMetaTag("apple-mobile-web-app-title", "Hegemon", "name");

    // Language
    updateMetaTag("language", "Portuguese", "name");
    // content-language usando httpEquiv
    let contentLang = document.querySelector('meta[http-equiv="content-language"]') as HTMLMetaElement;
    if (contentLang) {
      contentLang.content = "pt-BR";
    } else {
      contentLang = document.createElement("meta");
      contentLang.setAttribute("http-equiv", "content-language");
      contentLang.content = "pt-BR";
      document.head.appendChild(contentLang);
    }
  }, [
    title,
    description,
    keywords,
    image,
    type,
    author,
    currentUrl,
    siteUrl,
    fullImageUrl,
    publishedTime,
    modifiedTime,
    noindex,
    nofollow,
  ]);

  return null;
}

function updateMetaTag(
  name: string,
  content: string,
  attribute: "name" | "property" = "name"
) {
  let element = document.querySelector(
    `meta[${attribute}="${name}"]`
  ) as HTMLMetaElement;

  if (element) {
    element.content = content;
  } else {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    element.content = content;
    document.head.appendChild(element);
  }
}

function updateLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;

  if (element) {
    element.href = href;
  } else {
    element = document.createElement("link");
    element.rel = rel;
    element.href = href;
    document.head.appendChild(element);
  }
}
