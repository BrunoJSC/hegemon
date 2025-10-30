import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Header } from "./header";
import { Footer } from "./footer";
import { SEO } from "./seo";
import { servicesData } from "../data/services-data";

interface ServiceDetailPageProps {
  serviceId: string | null;
  onBack: () => void;
  onServiceClick?: (serviceId: string) => void;
  onContactClick?: () => void;
}

export function ServiceDetailPage({
  serviceId,
  onBack,
  onServiceClick,
  onContactClick,
}: ServiceDetailPageProps) {
  const whatsappMessage = `Oi! 👋Que bom ter você por aqui! 🚀Sua mensagem já chegou e nosso time vai te responder o quanto antes.Enquanto isso, fique à vontade pra contar um pouquinho do que precisa. 💬`;
  const whatsappUrl = `https://wa.me/5511993877119?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const [activeTab, setActiveTab] = useState<
    "overview" | "benefits" | "process" | "requirements"
  >("overview");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [serviceId]);

  const service = servicesData.find((s) => s.id.toString() === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header
          onServiceClick={onServiceClick}
          onContactClick={onContactClick}
          onNavigateHome={onBack}
          isHomePage={false}
        />
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Serviço não encontrado
          </h1>
          <button
            onClick={onBack}
            className="text-[#A76B3F] hover:text-[#7B4A2E] font-medium"
          >
            ← Voltar para página inicial
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO
        title={`${service.title} - Hegemon`}
        description={service.description}
      />
      <Header
        onServiceClick={onServiceClick}
        onContactClick={onContactClick}
        onNavigateHome={onBack}
        isHomePage={false}
      />
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <button
                onClick={onBack}
                className="text-[#A76B3F] hover:text-[#7B4A2E] font-medium mb-4 inline-block"
              >
                ← Voltar para página inicial
              </button>
              <div className="flex items-center mb-6">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 mr-4"
                />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {service.title}
                </h1>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex space-x-8 overflow-x-auto">
                {[
                  { key: "overview", label: "Visão Geral" },
                  { key: "benefits", label: "Benefícios" },
                  { key: "process", label: "Processo" },
                  { key: "requirements", label: "Requisitos" },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() =>
                      setActiveTab(
                        tab.key as
                          | "overview"
                          | "benefits"
                          | "process"
                          | "requirements"
                      )
                    }
                    className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                      activeTab === tab.key
                        ? "border-[#A76B3F] text-[#A76B3F]"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="prose max-w-none">
              {activeTab === "overview" && (
                <div>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.fullDescription}
                  </p>
                </div>
              )}

              {activeTab === "benefits" && service.benefits && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Benefícios</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#A76B3F] mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "process" && service.process && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Processo</h3>
                  <ol className="space-y-3">
                    {service.process.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-[#A76B3F] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                          {index + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {activeTab === "requirements" && service.requirements && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Requisitos</h3>
                  <ul className="space-y-2">
                    {service.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#A76B3F] mr-2">•</span>
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 bg-[#F6EBD8] rounded-lg text-center">
              <h3 className="text-xl font-semibold text-[#2A1A12] mb-4">
                Interessado neste serviço?
              </h3>
              <p className="text-[#4E3C2A] mb-6">
                Entre em contato conosco para mais informações e orçamento
                personalizado.
              </p>
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#A76B3F] text-white px-8 py-3 rounded-full font-medium hover:bg-[#7B4A2E] transition-colors inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
