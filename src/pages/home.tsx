import { Hero } from "../components/hero";
import { Services } from "../components/services";
import { Products } from "../components/products";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { MainLayout } from "../components/layout/main-layout";
import { SEO } from "../components/seo";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll para o topo ao carregar a página
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.hash]);

  useEffect(() => {
    // Se houver hash na URL, faz scroll para a seção
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location.hash]);

  const handleServiceClick = (serviceId: string) => {
    navigate(`/servicos/${serviceId}`);
  };

  return (
    <MainLayout isHomePage={true}>
      <SEO
        title="Hegemon Consultoria - Certificação INMETRO, ANVISA e ANATEL | Consultoria Regulatória"
        description="Especialistas em certificação de produtos junto ao INMETRO, ANVISA e ANATEL. Consultoria regulatória completa, defesa técnica em autuações e conformidade técnica. Certificação rápida, eficiente e sem complicações."
        keywords="certificação INMETRO, consultoria INMETRO, certificação produtos, ANVISA, ANATEL, conformidade técnica, defesa técnica IPEM, consultoria regulatória Brasil"
        type="website"
      />
      <div id="home">
        <Hero />
      </div>
      <Services onServiceClick={handleServiceClick} />
      <Products />
      <About />
      <Contact />
    </MainLayout>
  );
}
