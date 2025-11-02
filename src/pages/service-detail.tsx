import { useParams, useNavigate } from "react-router-dom";
import { ServiceDetailPage } from "../components/service-detail-page";
import { useEffect } from "react";

export function ServiceDetailPageRoute() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  const handleBack = () => {
    navigate("/");
  };

  const handleServiceClick = (serviceId: string) => {
    navigate(`/servicos/${serviceId}`);
  };

  const handleContactClick = () => {
    navigate("/contato");
  };

  return (
    <ServiceDetailPage
      serviceId={id || ""}
      onBack={handleBack}
      onServiceClick={handleServiceClick}
      onContactClick={handleContactClick}
    />
  );
}
