import React from "react";
import { motion } from "motion/react";
import { Card } from "./layout/card";

interface ServicesProps {
  onServiceClick?: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const servicos = [
    {
      id: 1,
      icon: "/security.svg",
      title: "Defesa Técnica em Autuações do INMETRO e IPEM",
      description:
        "Enfrentar uma autuação do INMETRO ou IPEM pode ser um desafio complexo para...",
      link: "#",
    },

    {
      id: 4,
      icon: "/certification.svg",
      title: "Boas Práticas de Distribuição (BPD) - Certificação",
      description:
        "A Diretriz da UE 'Boas Práticas na Distribuição' é destinada às empresas do...",
      link: "#",
    },
    {
      id: 5,
      icon: "/inspection.svg",
      title: "Inspeção & Controle de Qualidade (China)",
      description: "Na Hegemon, garantimos que cada produto atenda aos mais...",
      link: "#",
    },
    {
      id: 6,
      icon: "/product.svg",
      title: "Desenvolvimento de Produto & Outsourcing Internacional",
      description:
        "Atuar como ponte estratégica entre o mercado brasileiro e os polos...",
      link: "#",
    },
    {
      id: 7,
      icon: "/testing.svg",
      title: "Consultoria Reguladora",
      description:
        "Consultoria completa para certificações do Inmetro, Anvisa e Anatel.",
      link: "#",
    },
    {
      id: 8,
      icon: "/business.svg",
      title: "Cumprimento de Exigências",
      description:
        "Ajudando cada cliente a entender e cumprir as exigências específicas de...",
      link: "#",
    },

    {
      id: 10,
      icon: "/process.svg",
      title: "Processo de Burocrácia",
      description:
        "Facilidade nos processos burocráticos e técnicos, economizando tempo e...",
      link: "#",
    },
    {
      id: 11,
      icon: "/piece.svg",
      title: "Orientação Rotulagem de Produtos",
      description: "Na Hegemon, oferecemos um serviço especializado em...",
      link: "#",
    },
    {
      id: 12,
      icon: "/problem.svg",
      title: "Processo de Registro Simplificado",
      description:
        "Com uma equipe de especialistas altamente especializados, a...",
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
            NOSSOS SERVIÇOS
          </motion.div>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Certificação Rápida, Eficiente e
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Sem Complicações
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
