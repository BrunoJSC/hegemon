import { useLocation } from "react-router-dom";

interface StructuredDataProps {
  type: "Organization" | "Service" | "BreadcrumbList" | "FAQPage" | "WebSite";
  data?: Record<string, any>;
}

/**
 * Componente para inserir Structured Data (JSON-LD) no head
 * Suporta múltiplos tipos de schema.org
 */
export function StructuredData({ type, data }: StructuredDataProps) {
  const location = useLocation();
  const siteUrl = window.location.origin;
  const currentUrl = `${siteUrl}${location.pathname}`;

  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
    };

    switch (type) {
      case "Organization":
        return {
          ...baseData,
          name: "Hegemon Consultoria",
          url: siteUrl,
          logo: `${siteUrl}/logo.png`,
          image: `${siteUrl}/logo.png`,
          description:
            "Consultoria especializada em certificação de produtos junto ao INMETRO, ANVISA e ANATEL. Oferecemos soluções completas em conformidade regulatória.",
          telephone: "+55-11-99387-7119",
          email: "contato@hegemon.com.br",
          address: {
            "@type": "PostalAddress",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            addressCountry: "BR",
            streetAddress: "São Paulo, SP",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "-23.550520",
            longitude: "-46.633308",
          },
          areaServed: {
            "@type": "Country",
            name: "Brasil",
          },
          sameAs: [
            "https://wa.me/5511993877119",
            // Adicionar redes sociais quando disponíveis
          ],
          ...data,
        };

      case "Service":
        return {
          ...baseData,
          serviceType: data?.serviceType || "Consultoria Regulatória",
          provider: {
            "@type": "Organization",
            name: "Hegemon Consultoria",
            url: siteUrl,
          },
          areaServed: {
            "@type": "Country",
            name: "Brasil",
          },
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: currentUrl,
            servicePhone: {
              "@type": "ContactPoint",
              telephone: "+55-11-99387-7119",
              contactType: "customer service",
              availableLanguage: ["Portuguese", "English", "Chinese"],
            },
          },
          ...data,
        };

      case "BreadcrumbList":
        return {
          ...baseData,
          itemListElement: data?.itemListElement || [
            {
              "@type": "ListItem",
              position: 1,
              name: "Início",
              item: siteUrl,
            },
          ],
        };

      case "FAQPage":
        return {
          ...baseData,
          mainEntity: data?.questions || [],
        };

      case "WebSite":
        return {
          ...baseData,
          name: "Hegemon Consultoria",
          url: siteUrl,
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${siteUrl}/?s={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
          ...data,
        };

      default:
        return baseData;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2),
      }}
    />
  );
}

