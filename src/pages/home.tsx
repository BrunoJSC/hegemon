import { Hero } from "../components/hero";
import { Services } from "../components/services";
import { Products } from "../components/products";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { MainLayout } from "../components/layout/main-layout";
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
