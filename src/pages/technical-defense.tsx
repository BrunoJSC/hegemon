import { useNavigate } from "react-router-dom";
import { MainLayout } from "../components/layout/main-layout";
import { SEO } from "../components/seo";
import { Hreflang } from "../components/hreflang";
import { Breadcrumbs } from "../components/breadcrumbs";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function TechnicalDefensePage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <MainLayout isHomePage={false}>
      <SEO
        title="Defesa Técnica em Autuações e Processos - Hegemon Consultoria"
        description="Conte com nossa expertise para defender sua empresa em processos do INMETRO, IPEM e outros órgãos reguladores. Suporte técnico especializado e defesa completa."
        keywords="defesa técnica INMETRO, defesa IPEM, autuações, processos regulatórios, suporte técnico, contestação multas"
        type="article"
      />
      <Hreflang />
      <section className="py-20 bg-[#F6EBD8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
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
              {t("technicalDefensePage.badge")}
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2A1A12] mb-6">
              {t("technicalDefensePage.title")}
            </h1>
            <p className="text-xl text-[#4E3C2A] leading-relaxed">
              {t("technicalDefensePage.subtitle")}
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
                {t("technicalDefensePage.protectionTitle")}
              </h2>
              <p className="text-[#4E3C2A] leading-relaxed mb-4">
                {t("technicalDefensePage.protectionText1")}
              </p>
              <p className="text-[#4E3C2A] leading-relaxed">
                {t("technicalDefensePage.protectionText2")}
              </p>
            </div>

            {/* Quando Precisar */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#A76B3F] mb-6">
                {t("technicalDefensePage.whenNeedTitle")}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <h3 className="font-semibold text-[#2A1A12] mb-2">
                    {t("technicalDefensePage.situation1Title")}
                  </h3>
                  <p className="text-sm text-[#4E3C2A]">
                    {t("technicalDefensePage.situation1Text")}
                  </p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <h3 className="font-semibold text-[#2A1A12] mb-2">
                    {t("technicalDefensePage.situation2Title")}
                  </h3>
                  <p className="text-sm text-[#4E3C2A]">
                    {t("technicalDefensePage.situation2Text")}
                  </p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <h3 className="font-semibold text-[#2A1A12] mb-2">
                    {t("technicalDefensePage.situation3Title")}
                  </h3>
                  <p className="text-sm text-[#4E3C2A]">
                    {t("technicalDefensePage.situation3Text")}
                  </p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <h3 className="font-semibold text-[#2A1A12] mb-2">
                    {t("technicalDefensePage.situation4Title")}
                  </h3>
                  <p className="text-sm text-[#4E3C2A]">
                    {t("technicalDefensePage.situation4Text")}
                  </p>
                </div>
              </div>
            </div>

            {/* Nossa Atuação */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#A76B3F] mb-6">
                {t("technicalDefensePage.howWeActTitle")}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#A76B3F] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2A1A12] mb-2">
                      {t("technicalDefensePage.step1Title")}
                    </h3>
                    <p className="text-[#4E3C2A]">
                      {t("technicalDefensePage.step1Text")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#A76B3F] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2A1A12] mb-2">
                      {t("technicalDefensePage.step2Title")}
                    </h3>
                    <p className="text-[#4E3C2A]">
                      {t("technicalDefensePage.step2Text")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#A76B3F] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2A1A12] mb-2">
                      {t("technicalDefensePage.step3Title")}
                    </h3>
                    <p className="text-[#4E3C2A]">
                      {t("technicalDefensePage.step3Text")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#A76B3F] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2A1A12] mb-2">
                      {t("technicalDefensePage.step4Title")}
                    </h3>
                    <p className="text-[#4E3C2A]">
                      {t("technicalDefensePage.step4Text")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#A76B3F] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2A1A12] mb-2">
                      {t("technicalDefensePage.step5Title")}
                    </h3>
                    <p className="text-[#4E3C2A]">
                      {t("technicalDefensePage.step5Text")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resultados */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#A76B3F] mb-6">
                {t("technicalDefensePage.resultsTitle")}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-[#F6EBD8] rounded-xl">
                  <div className="text-4xl font-bold text-[#A76B3F] mb-2">
                    {t("technicalDefensePage.result1Value")}
                  </div>
                  <p className="text-[#2A1A12] font-semibold mb-1">
                    {t("technicalDefensePage.result1Title")}
                  </p>
                  <p className="text-sm text-[#4E3C2A]">
                    {t("technicalDefensePage.result1Text")}
                  </p>
                </div>
                <div className="text-center p-6 bg-[#F6EBD8] rounded-xl">
                  <div className="text-4xl font-bold text-[#A76B3F] mb-2">
                    {t("technicalDefensePage.result2Value")}
                  </div>
                  <p className="text-[#2A1A12] font-semibold mb-1">
                    {t("technicalDefensePage.result2Title")}
                  </p>
                  <p className="text-sm text-[#4E3C2A]">
                    {t("technicalDefensePage.result2Text")}
                  </p>
                </div>
                <div className="text-center p-6 bg-[#F6EBD8] rounded-xl">
                  <div className="text-4xl font-bold text-[#A76B3F] mb-2">
                    {t("technicalDefensePage.result3Value")}
                  </div>
                  <p className="text-[#2A1A12] font-semibold mb-1">
                    {t("technicalDefensePage.result3Title")}
                  </p>
                  <p className="text-sm text-[#4E3C2A]">
                    {t("technicalDefensePage.result3Text")}
                  </p>
                </div>
              </div>
            </div>

            {/* Diferenciais */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#A76B3F] mb-6">
                {t("technicalDefensePage.differentialsTitle")}
              </h2>
              <div className="space-y-4">
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
                      {t("technicalDefensePage.differential1Title")}
                    </h3>
                    <p className="text-[#4E3C2A] text-sm">
                      {t("technicalDefensePage.differential1Text")}
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
                      {t("technicalDefensePage.differential2Title")}
                    </h3>
                    <p className="text-[#4E3C2A] text-sm">
                      {t("technicalDefensePage.differential2Text")}
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
                      {t("technicalDefensePage.differential3Title")}
                    </h3>
                    <p className="text-[#4E3C2A] text-sm">
                      {t("technicalDefensePage.differential3Text")}
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
                      {t("technicalDefensePage.differential4Title")}
                    </h3>
                    <p className="text-[#4E3C2A] text-sm">
                      {t("technicalDefensePage.differential4Text")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Urgente */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center text-white"
            >
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                {t("technicalDefensePage.urgentCtaTitle")}
              </h2>
              <p className="text-lg mb-2 opacity-90">
                {t("technicalDefensePage.urgentCtaSubtitle")}
              </p>
              <p className="text-base mb-6 opacity-80">
                {t("technicalDefensePage.urgentCtaDescription")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/contato")}
                  className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {t("technicalDefensePage.contactNow")}
                </button>
                <a
                  href="tel:11993877119"
                  className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  (11) 99387-7119
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
