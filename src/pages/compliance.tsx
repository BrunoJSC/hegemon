import { useNavigate } from "react-router-dom";
import { MainLayout } from "../components/layout/main-layout";
import { SEO } from "../components/seo";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function CompliancePage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <MainLayout isHomePage={false}>
      <SEO
        title="Garantimos que sua Empresa Cumpra Todas as Exigências - Hegemon"
        description="Ao seu lado em cada etapa, garantindo que sua empresa compreenda e cumpra todas as exigências regulatórias. Acompanhamento personalizado e suporte completo."
        keywords="cumprimento de exigências, conformidade regulatória, acompanhamento personalizado, consultoria INMETRO, adequação normas"
        type="article"
      />

      <section className="py-20 bg-[#F6EBD8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-6 py-3 bg-[#A76B3F] text-[#F6EBD8] font-semibold uppercase tracking-wider rounded-full text-sm mb-6"
            >
              {t("compliancePage.badge")}
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2A1A12] mb-6">
              {t("compliancePage.title")}
            </h1>
            <p className="text-xl text-[#4E3C2A] leading-relaxed">
              {t("compliancePage.subtitle")}
            </p>
          </motion.div>

          {/* Conteúdo Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Introdução */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#A76B3F] mb-4">
                {t("compliancePage.missionTitle")}
              </h2>
              <p className="text-[#4E3C2A] leading-relaxed mb-4">
                {t("compliancePage.missionText1")}
              </p>
              <p className="text-[#4E3C2A] leading-relaxed">
                {t("compliancePage.missionText2")}
              </p>
            </div>

            {/* Como Trabalhamos */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#A76B3F] mb-6">
                {t("compliancePage.howWeWorkTitle")}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#A76B3F] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2A1A12] mb-2">
                      {t("compliancePage.step1Title")}
                    </h3>
                    <p className="text-[#4E3C2A]">
                      {t("compliancePage.step1Text")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#A76B3F] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2A1A12] mb-2">
                      {t("compliancePage.step2Title")}
                    </h3>
                    <p className="text-[#4E3C2A]">
                      {t("compliancePage.step2Text")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#A76B3F] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2A1A12] mb-2">
                      {t("compliancePage.step3Title")}
                    </h3>
                    <p className="text-[#4E3C2A]">
                      {t("compliancePage.step3Text")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#A76B3F] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2A1A12] mb-2">
                      {t("compliancePage.step4Title")}
                    </h3>
                    <p className="text-[#4E3C2A]">
                      {t("compliancePage.step4Text")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefícios */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#A76B3F] mb-6">
                {t("compliancePage.benefitsTitle")}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-[#A76B3F] flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-[#2A1A12] mb-1">
                      {t("compliancePage.benefit1Title")}
                    </h3>
                    <p className="text-[#4E3C2A] text-sm">
                      {t("compliancePage.benefit1Text")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-[#A76B3F] flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-[#2A1A12] mb-1">
                      {t("compliancePage.benefit2Title")}
                    </h3>
                    <p className="text-[#4E3C2A] text-sm">
                      {t("compliancePage.benefit2Text")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-[#A76B3F] flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-[#2A1A12] mb-1">
                      {t("compliancePage.benefit3Title")}
                    </h3>
                    <p className="text-[#4E3C2A] text-sm">
                      {t("compliancePage.benefit3Text")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-[#A76B3F] flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-[#2A1A12] mb-1">
                      {t("compliancePage.benefit4Title")}
                    </h3>
                    <p className="text-[#4E3C2A] text-sm">
                      {t("compliancePage.benefit4Text")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Áreas de Atuação */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#A76B3F] mb-6">
                {t("compliancePage.areasTitle")}
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#F6EBD8] p-4 rounded-lg text-center">
                  <h3 className="font-semibold text-[#2A1A12]">
                    {t("compliancePage.area1Title")}
                  </h3>
                  <p className="text-sm text-[#4E3C2A] mt-2">
                    {t("compliancePage.area1Text")}
                  </p>
                </div>
                <div className="bg-[#F6EBD8] p-4 rounded-lg text-center">
                  <h3 className="font-semibold text-[#2A1A12]">
                    {t("compliancePage.area2Title")}
                  </h3>
                  <p className="text-sm text-[#4E3C2A] mt-2">
                    {t("compliancePage.area2Text")}
                  </p>
                </div>
                <div className="bg-[#F6EBD8] p-4 rounded-lg text-center">
                  <h3 className="font-semibold text-[#2A1A12]">
                    {t("compliancePage.area3Title")}
                  </h3>
                  <p className="text-sm text-[#4E3C2A] mt-2">
                    {t("compliancePage.area3Text")}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-[#A76B3F] to-[#7B4A2E] rounded-2xl p-8 text-center text-white"
            >
              <h2 className="text-3xl font-bold mb-4">
                {t("compliancePage.ctaTitle")}
              </h2>
              <p className="text-lg mb-6 opacity-90">
                {t("compliancePage.ctaText")}
              </p>
              <button
                onClick={() => navigate("/contato")}
                className="bg-white text-[#A76B3F] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#F6EBD8] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t("compliancePage.ctaButton")}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
