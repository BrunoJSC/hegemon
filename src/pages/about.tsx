import { MainLayout } from "../components/layout/main-layout";
import { SEO } from "../components/seo";
import { Hreflang } from "../components/hreflang";
import { Breadcrumbs } from "../components/breadcrumbs";
import { About } from "../components/about";
import { useEffect } from "react";

export function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <MainLayout isHomePage={false}>
      <SEO
        title="Quem Somos - Hegemon Consultoria | Especialistas em Certificação"
        description="Conheça a Hegemon Consultoria, especialistas em certificação INMETRO, ANVISA e ANATEL. Equipe qualificada, experiência comprovada e atendimento personalizado para seu negócio."
        keywords="sobre Hegemon, quem somos, consultoria certificação, equipe especializada, experiência INMETRO"
        type="website"
      />
      <Hreflang />
      <Breadcrumbs />
      <About />
    </MainLayout>
  );
}
