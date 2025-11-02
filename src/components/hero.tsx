import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      badge: t("hero.badge1"),
      title: t("hero.title1"),
      description: t("hero.description1"),
      buttonText: t("hero.button1"),
      buttonAction: () => navigate("/cumprimento-exigencias"),
      image: "/image3.png",
    },
    {
      id: 2,
      badge: t("hero.badge2"),
      title: t("hero.title2"),
      description: t("hero.description2"),
      buttonText: t("hero.button2"),
      buttonAction: () => {
        const element = document.getElementById("services");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      },
      image: "/people.png",
    },
    {
      id: 3,
      badge: t("hero.badge3"),
      title: t("hero.title3"),
      description: t("hero.description3"),
      buttonText: t("hero.button3"),
      buttonAction: () => navigate("/defesa-tecnica"),
      image: "/user.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative h-[70vh] min-h-[500px] overflow-hidden"
    >
      {/* Slides Container */}
      <motion.div
        className="flex h-full"
        animate={{
          x: `-${currentSlide * 100}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          duration: 0.8,
        }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="min-w-full h-full relative">
            {/* Background Image */}
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-slate-800/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center h-full pt-16">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{
                      opacity: index === currentSlide ? 1 : 0,
                      x: index === currentSlide ? 0 : -50,
                    }}
                    transition={{
                      delay: index === currentSlide ? 0.3 : 0,
                      duration: 1.2,
                      ease: "easeOut",
                    }}
                    className="mb-6"
                  >
                    <span className="inline-block bg-[#A76B3F] text-[#F6EBD8] px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg">
                      {slide.badge}
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, x: -80 }}
                    animate={{
                      opacity: index === currentSlide ? 1 : 0,
                      x: index === currentSlide ? 0 : -80,
                    }}
                    transition={{
                      delay: index === currentSlide ? 0.6 : 0,
                      duration: 1.4,
                      ease: "easeOut",
                    }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, x: -60 }}
                    animate={{
                      opacity: index === currentSlide ? 1 : 0,
                      x: index === currentSlide ? 0 : -60,
                    }}
                    transition={{
                      delay: index === currentSlide ? 0.9 : 0,
                      duration: 1.2,
                      ease: "easeOut",
                    }}
                    className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{
                      opacity: index === currentSlide ? 1 : 0,
                      x: index === currentSlide ? 0 : -40,
                    }}
                    transition={{
                      delay: index === currentSlide ? 1.2 : 0,
                      duration: 1.0,
                      ease: "easeOut",
                    }}
                  >
                    <button
                      onClick={slide.buttonAction}
                      className="bg-[#A76B3F] hover:bg-[#bd550c] rounded-full text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                    >
                      {slide.buttonText}
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
      >
        <svg
          className="w-6 h-6"
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
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
      >
        <svg
          className="w-6 h-6"
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
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
