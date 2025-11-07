import { useLocation, Link } from "react-router-dom";
import { StructuredData } from "./structured-data";
import { useTranslation } from "react-i18next";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  showHome?: boolean;
}

/**
 * Componente de Breadcrumbs com Structured Data
 * Melhora a navegação e SEO
 */
export function Breadcrumbs({ items, showHome = true }: BreadcrumbsProps) {
  const location = useLocation();
  const { t } = useTranslation();
  const siteUrl = window.location.origin;

  // Gerar breadcrumbs automaticamente baseado na rota
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];

    if (showHome) {
      breadcrumbs.push({ label: t("header.home"), path: "/" });
    }

    // Mapeamento de rotas para labels
    const routeLabels: Record<string, string> = {
      sobre: t("header.about"),
      contato: t("header.contact"),
      servicos: t("header.services"),
      "cumprimento-exigencias": "Cumprimento de Exigências",
      "defesa-tecnica": "Defesa Técnica",
    };

    let currentPath = "";
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      const label = routeLabels[segment] || segment;
      breadcrumbs.push({ label, path: currentPath });
    });

    return breadcrumbs;
  };

  const breadcrumbs = items || generateBreadcrumbs();

  // Structured Data para BreadcrumbList
  const breadcrumbStructuredData = {
    itemListElement: breadcrumbs.map((item, position) => ({
      "@type": "ListItem",
      position: position + 1,
      name: item.label,
      item: `${siteUrl}${item.path}`,
    })),
  };

  if (breadcrumbs.length <= 1) {
    return null; // Não mostrar breadcrumbs se só tiver home
  }

  return (
    <>
      <StructuredData type="BreadcrumbList" data={breadcrumbStructuredData} />
      <nav
        className="flex items-center space-x-2 text-sm text-gray-600 mb-6"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center space-x-2">
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400" aria-hidden="true">
                  /
                </span>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-[#A76B3F] font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-[#A76B3F] transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

