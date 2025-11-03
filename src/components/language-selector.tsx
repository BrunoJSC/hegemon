import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const languages = [
    { code: "pt", name: "Português", flag: "🇧🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  // Versão inline para mobile
  if (isMobile) {
    return (
      <div className="flex items-center justify-center gap-2 py-2">
        {languages.map((lang) => (
          <motion.button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`flex flex-col items-center px-3 py-2 rounded-lg transition-all duration-200 ${
              currentLanguage.code === lang.code
                ? "bg-[#A76B3F] text-white"
                : "bg-white/50 hover:bg-[#A76B3F]/10"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl mb-1">{lang.flag}</span>
            <span className="text-xs font-medium">
              {lang.code.toUpperCase()}
            </span>
          </motion.button>
        ))}
      </div>
    );
  }

  // Versão dropdown para desktop
  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-[#A76B3F]/10 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-2xl">{currentLanguage.flag}</span>
        <span className="text-sm font-medium text-[#2A1A12]">
          {currentLanguage.code.toUpperCase()}
        </span>
        <motion.svg
          className="w-4 h-4 text-[#2A1A12]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-[#A76B3F]/10 transition-colors duration-200 ${
                  currentLanguage.code === lang.code ? "bg-[#A76B3F]/5" : ""
                }`}
                whileHover={{ x: 4 }}
              >
                <span className="text-2xl">{lang.flag}</span>
                <span className="text-sm font-medium text-[#2A1A12]">
                  {lang.name}
                </span>
                {currentLanguage.code === lang.code && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto text-[#A76B3F]"
                  >
                    ✓
                  </motion.span>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
