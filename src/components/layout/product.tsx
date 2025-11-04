import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ProductProps {
  id: number;
  image: string;
  title: string;
  badge: string;
  detailKey: string;
}

export function Product({ image, title, badge, detailKey }: ProductProps) {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const details = {
    title: t(`products.details.${detailKey}.title`),
    description: t(`products.details.${detailKey}.description`),
    requirements: t(`products.details.${detailKey}.requirements`),
  };

  return (
    <>
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col cursor-pointer"
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsDialogOpen(true)}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden h-56 flex-shrink-0 bg-white">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            whileHover={{ scale: 1.1 }}
          />

          {/* Badge */}
          <motion.div
            className="absolute top-3 right-3 bg-[#A76B3F] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {badge}
          </motion.div>

          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </div>

        {/* Content */}
        <motion.div
          className="p-4 sm:p-6 flex flex-col flex-grow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-[#2A1A12] mb-3 group-hover:text-[#A76B3F] transition-colors duration-300 min-h-[3.5rem] flex items-center">
            {title}
          </h3>

          <motion.button
            className="text-[#A76B3F] font-semibold text-sm hover:text-[#8B4513] transition-colors duration-300 mt-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("products.learnMore")}
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Dialog - Rendered via Portal */}
      {isDialogOpen &&
        createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
              onClick={() => setIsDialogOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header with Image */}
                <div className="relative h-72 bg-gradient-to-br from-[#F6EBD8] to-[#E9C89C] overflow-hidden">
                  <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="absolute top-6 right-6 bg-[#A76B3F] text-white px-5 py-2 rounded-full text-sm font-bold shadow-xl flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {badge}
                  </motion.div>

                  {/* Close Button */}
                  <motion.button
                    onClick={() => setIsDialogOpen(false)}
                    className="absolute top-6 left-6 bg-white/95 hover:bg-white text-[#2A1A12] p-2.5 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-18rem)]">
                  <div className="p-6 sm:p-8">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl sm:text-4xl font-bold text-[#2A1A12] mb-6"
                    >
                      {details.title}
                    </motion.h2>

                    <div className="space-y-6">
                      {/* About Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-gradient-to-br from-[#F6EBD8] to-[#E9C89C] p-6 rounded-2xl"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="bg-[#A76B3F] p-2 rounded-lg shrink-0">
                            <svg
                              className="w-5 h-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-[#2A1A12]">
                            {t("products.aboutProduct")}
                          </h3>
                        </div>
                        <p className="text-[#4E3C2A] leading-relaxed">
                          {details.description}
                        </p>
                      </motion.div>

                      {/* Requirements Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="border-2 border-[#A76B3F]/20 p-6 rounded-2xl"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="bg-[#A76B3F] p-2 rounded-lg shrink-0">
                            <svg
                              className="w-5 h-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-[#A76B3F]">
                            {t("products.certificationRequirements")}
                          </h3>
                        </div>
                        <p className="text-[#4E3C2A] leading-relaxed">
                          {details.requirements}
                        </p>
                      </motion.div>

                      {/* Important Notice */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg"
                      >
                        <div className="flex items-start gap-3">
                          <svg
                            className="w-6 h-6 text-amber-600 shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div>
                            <p className="font-semibold text-amber-900 mb-1">
                              {t("products.importantTitle")}
                            </p>
                            <p className="text-sm text-amber-800 leading-relaxed">
                              {t("products.importantMessage")}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="mt-8 flex flex-col sm:flex-row gap-4"
                    >
                      <motion.button
                        onClick={() => {
                          setIsDialogOpen(false);
                          const contactSection =
                            document.getElementById("contact");
                          if (contactSection) {
                            contactSection.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          }
                        }}
                        className="flex-1 bg-gradient-to-r from-[#A76B3F] to-[#8B5A3C] text-white px-6 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        {t("products.requestCertification")}
                      </motion.button>
                      <motion.button
                        onClick={() => setIsDialogOpen(false)}
                        className="sm:w-auto px-6 py-4 bg-gray-100 text-[#2A1A12] rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {t("products.close")}
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
