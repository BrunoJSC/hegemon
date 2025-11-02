import type { ReactNode } from "react";
import { lazy, Suspense } from "react";
import { Header } from "../header";
import { useNavigate } from "react-router-dom";

// Lazy load do Footer
const Footer = lazy(() =>
  import("../footer").then((module) => ({ default: module.Footer }))
);

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
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
