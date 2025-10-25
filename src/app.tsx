import { useState } from "react";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Products } from "./components/products";
import { Services } from "./components/services";
import { ServiceDetailPage } from "./components/service-detail-page";

export function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    null
  );

  if (selectedServiceId) {
    return (
      <ServiceDetailPage
        serviceId={selectedServiceId}
        onBack={() => setSelectedServiceId(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F6EBD8]">
      <Header />
      <Hero />
      <Services onServiceClick={setSelectedServiceId} />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}
