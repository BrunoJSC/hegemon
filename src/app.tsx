import { useState, useEffect } from "react";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Products } from "./components/products";
import { Services } from "./components/services";
import { ServiceDetailPage } from "./components/service-detail-page";
import { ContactFormPage } from "./components/contact-form-page";
import { About } from "./components/about";

export function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    null
  );
  const [showContactForm, setShowContactForm] = useState(false);

  // Scroll ao topo quando mudar de página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [selectedServiceId, showContactForm]);

  const handleNavigateHome = () => {
    setSelectedServiceId(null);
    setShowContactForm(false);
  };

  if (showContactForm) {
    return (
      <ContactFormPage
        onBack={handleNavigateHome}
        onServiceClick={setSelectedServiceId}
      />
    );
  }

  if (selectedServiceId) {
    return (
      <ServiceDetailPage
        serviceId={selectedServiceId}
        onBack={handleNavigateHome}
        onServiceClick={setSelectedServiceId}
        onContactClick={() => {
          setSelectedServiceId(null);
          setShowContactForm(true);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F6EBD8]">
      <Header
        onServiceClick={setSelectedServiceId}
        onContactClick={() => setShowContactForm(true)}
        onNavigateHome={handleNavigateHome}
        isHomePage={true}
      />
      <Hero />
      <Services onServiceClick={setSelectedServiceId} />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
