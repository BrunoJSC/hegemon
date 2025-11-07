import React from "react";
import { motion } from "motion/react";
import { Card } from "./layout/card";
import { useTranslation } from "react-i18next";
import { prefetchOnHover } from "../utils/prefetch";

interface ServicesProps {
  onServiceClick?: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const { t } = useTranslation();
  const servicos = [
    {
      id: 1,
      icon: "/security.svg",
      title: t("services.service1.title"),
      description: t("services.service1.description"),
      link: "#",
    },

    {
      id: 4,
      icon: "/certification.svg",
      title: t("services.service4.title"),
      description: t("services.service4.description"),
      link: "#",
    },
    {
      id: 5,
      icon: "/inspection.svg",
      title: t("services.service5.title"),
      description: t("services.service5.description"),
      link: "#",
    },
    {
      id: 6,
      icon: "/product.svg",
      title: t("services.service6.title"),
      description: t("services.service6.description"),
      link: "#",
    },
    {
      id: 7,
      icon: "/testing.svg",
      title: t("services.service7.title"),
      description: t("services.service7.description"),
      link: "#",
    },
    {
      id: 8,
      icon: "/business.svg",
      title: t("services.service8.title"),
      description: t("services.service8.description"),
      link: "#",
    },

    {
      id: 10,
      icon: "/process.svg",
      title: t("services.service10.title"),
      description: t("services.service10.description"),
      link: "#",
    },
    {
      id: 11,
      icon: "/piece.svg",
      title: t("services.service11.title"),
      description: t("services.service11.description"),
      link: "#",
    },
    {
      id: 12,
      icon: "/problem.svg",
      title: t("services.service12.title"),
      description: t("services.service12.description"),
      link: "#",
    },
  ];

  return (
    <section id="services" className="py-12 md:py-16">
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
            {t("services.badge")}
          </motion.div>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {t("services.title")}
          </motion.h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {servicos.map((servico, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.8 + index * 0.1,
                ease: "easeOut",
              }}
            >
              <div
                onClick={() => onServiceClick?.(servico.id.toString())}
                {...prefetchOnHover(`/servicos/${servico.id}`)}
                className="cursor-pointer"
              >
                <Card {...servico} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
