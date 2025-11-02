import { useNavigate } from "react-router-dom";
import { ContactFormPage } from "../components/contact-form-page";
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
    <ContactFormPage onBack={handleBack} onServiceClick={handleServiceClick} />
  );
}
