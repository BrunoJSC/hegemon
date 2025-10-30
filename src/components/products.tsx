import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Product } from "./layout/product";
import { useTranslation } from "react-i18next";

export function Products() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      image: "/eletro.png",
      title: t("products.items.appliances"),
      badge: "INMETRO",
    },
    {
      id: 2,
      image: "/power.jpg",
      title: t("products.items.charger"),
      badge: "ANATEL",
    },
    {
      id: 3,
      image: "/fone.png",
      title: t("products.items.headphone"),
      badge: "ANATEL",
    },
    {
      id: 4,
      image: "/caixa.jpg",
      title: t("products.items.speaker"),
      badge: "ANATEL",
    },
    {
      id: 5,
      image: "/material.png",
      title: t("products.items.school"),
      badge: "INMETRO",
    },
    {
      id: 6,
      image: "/brinquedo.png",
      title: t("products.items.toys"),
      badge: "INMETRO",
    },
  ];

  // Função para calcular quantos produtos mostrar por vez baseado no tamanho da tela
  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 4; // lg
      if (window.innerWidth >= 768) return 3; // md
      if (window.innerWidth >= 640) return 2; // sm
      return 1; // mobile
    }
    return 4; // default
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  // Atualizar itemsPerView quando a tela redimensionar
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="products" className="py-12 md:py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-[#A76B3F] text-[#F6EBD8] font-semibold uppercase tracking-wider rounded-full text-xs sm:text-sm mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {t("products.badge")}
          </motion.div>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {t("products.title")}
          </motion.h2>
        </motion.div>

        {/* Products Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Navigation Arrows - Hidden on mobile */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#2A1A12] p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 -ml-4 sm:-ml-6 hidden sm:block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#2A1A12] p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 -mr-4 sm:-mr-6 hidden sm:block"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>

          {/* Products Grid */}
          <motion.div
            className="overflow-hidden mx-4 sm:mx-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  className={`shrink-0 px-2 sm:px-3 ${
                    itemsPerView === 1
                      ? "w-full"
                      : itemsPerView === 2
                      ? "w-1/2"
                      : itemsPerView === 3
                      ? "w-1/3"
                      : "w-1/4"
                  }`}
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.9 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <Product {...product} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile Navigation Dots */}
          <motion.div
            className="flex justify-center mt-6 space-x-2 sm:hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#A76B3F] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>

          {/* Mobile Swipe Navigation Buttons */}
          <motion.div
            className="flex justify-center mt-4 space-x-4 sm:hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <motion.button
              onClick={prevSlide}
              className="bg-[#A76B3F] text-white p-2 rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="bg-[#A76B3F] text-white p-2 rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
