import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy loading das páginas
const HomePage = lazy(() =>
  import("./pages/home").then((module) => ({ default: module.HomePage }))
);
const ServiceDetailPageRoute = lazy(() =>
  import("./pages/service-detail").then((module) => ({
    default: module.ServiceDetailPageRoute,
  }))
);
const ContactPage = lazy(() =>
  import("./pages/contact").then((module) => ({ default: module.ContactPage }))
);

// Componente de loading
function PageLoader() {
  return (
    <div className="min-h-screen bg-[#F6EBD8] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#A76B3F]"></div>
        <p className="mt-4 text-[#2A1A12] font-medium">Carregando...</p>
      </div>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicos/:id" element={<ServiceDetailPageRoute />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
