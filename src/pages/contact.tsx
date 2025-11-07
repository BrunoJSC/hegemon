import { useNavigate } from "react-router-dom";
import { ContactFormPage } from "../components/contact-form-page";
import { SEO } from "../components/seo";
import { Hreflang } from "../components/hreflang";
import { useEffect } from "react";

export function ContactPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  const handleServiceClick = (serviceId: string) => {
    navigate(`/servicos/${serviceId}`);
  };

  return (
    <>
      <SEO
        title="Contato - Hegemon Consultoria | Solicite um Orçamento"
        description="Entre em contato com a Hegemon Consultoria para certificação INMETRO, ANVISA e ANATEL. Atendimento personalizado e orçamento sem compromisso. WhatsApp: (11) 99387-7119"
        keywords="contato Hegemon, orçamento certificação INMETRO, consultoria certificação, falar com especialista"
        type="website"
      />
      <Hreflang />
      <ContactFormPage
        onBack={handleBack}
        onServiceClick={handleServiceClick}
      />
    </>
  );
}
