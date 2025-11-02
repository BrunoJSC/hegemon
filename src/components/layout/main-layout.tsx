import { ReactNode } from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { useNavigate } from "react-router-dom";

interface MainLayoutProps {
  children: ReactNode;
  isHomePage?: boolean;
}

export function MainLayout({ children, isHomePage = false }: MainLayoutProps) {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    navigate(`/servicos/${serviceId}`);
  };

  const handleContactClick = () => {
    navigate("/contato");
  };

  return (
    <div className="min-h-screen bg-[#F6EBD8]">
      <Header
        onServiceClick={handleServiceClick}
        onContactClick={handleContactClick}
        isHomePage={isHomePage}
      />
      {children}
      <Footer />
    </div>
  );
}
