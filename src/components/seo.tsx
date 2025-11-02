import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: "website" | "article";
  author?: string;
}

export function SEO({
  title,
  description,
  keywords = "certificação INMETRO, consultoria regulatória, certificação produtos, ANVISA, ANATEL, conformidade técnica, certificação Brasil",
  image = "/logo.svg",
  type = "website",
  author = "Hegemon Consultoria",
}: SEOProps) {
  const location = useLocation();
  const siteUrl = window.location.origin;
  const currentUrl = `${siteUrl}${location.pathname}`;

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
    updateMetaTag("og:image", `${siteUrl}${image}`, "property");
    updateMetaTag("og:site_name", "Hegemon Consultoria", "property");
    updateMetaTag("og:locale", "pt_BR", "property");

    // Twitter Card
    updateMetaTag("twitter:card", "summary_large_image", "name");
    updateMetaTag("twitter:title", title, "name");
    updateMetaTag("twitter:description", description, "name");
    updateMetaTag("twitter:image", `${siteUrl}${image}`, "name");

    // Canonical URL
    updateLinkTag("canonical", currentUrl);

    // Robots
    updateMetaTag("robots", "index, follow", "name");

    // Viewport (já deve estar no HTML, mas garantir)
    updateMetaTag("viewport", "width=device-width, initial-scale=1.0", "name");

    // Theme color
    updateMetaTag("theme-color", "#A76B3F", "name");
  }, [title, description, keywords, image, type, author, currentUrl, siteUrl]);

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
