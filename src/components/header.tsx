import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onServiceClick?: (serviceId: string) => void;
  onContactClick?: () => void;
  onNavigateHome?: () => void;
  isHomePage?: boolean;
}

export function Header({
  onServiceClick,
  onContactClick,
  onNavigateHome,
  isHomePage = true,
}: HeaderProps = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      // Se estiver na home, faz scroll suave
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Se não estiver na home, volta para home e depois faz scroll
      onNavigateHome?.();
      // Aguarda a navegação e renderização da home
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  };

  const services = [
    {
      name: "Defesa Técnica em Autuações do INMETRO e IPEM",
      id: "1",
      icon: "/security.svg",
      description:
        "Enfrentar uma autuação do INMETRO ou IPEM pode ser um desafio complexo...",
    },
    {
      name: "Vigilância Sanitária | Anvisa | CNES | Mapa",
      id: "2",
      icon: "/eyes.svg",
      description:
        "Licenciamento completo para sua empresa junto aos órgãos reguladores...",
    },
    {
      name: "Laudo de Ergonomia 100% Conforme a NR-17",
      id: "3",
      icon: "/paper.svg",
      description:
        "Melhor Preço e Qualidade. Técnica em Laudos. Ergonomistas para empresas...",
    },
    {
      name: "Boas Práticas de Distribuição (BPD) - Certificação",
      id: "4",
      icon: "/certification.svg",
      description:
        "A Diretriz da UE 'Boas Práticas na Distribuição' é destinada às empresas...",
    },
    {
      name: "Inspeção & Controle de Qualidade (China)",
      id: "5",
      icon: "/inspection.svg",
      description:
        "Na CERTIFICAMAIS, garantimos que cada produto atenda aos mais...",
    },
    {
      name: "Desenvolvimento de Produto & Outsourcing Internacional",
      id: "6",
      icon: "/product.svg",
      description:
        "Atuar como ponte estratégica entre o mercado brasileiro e os polos...",
    },
    {
      name: "Consultoria Reguladora",
      id: "7",
      icon: "/testing.svg",
      description:
        "Consultoria completa para certificações do Inmetro, Anvisa e Anatel.",
    },
    {
      name: "Cumprimento de Exigências",
      id: "8",
      icon: "/business.svg",
      description:
        "Ajudando cada cliente a entender e cumprir as exigências específicas...",
    },
    {
      name: "Processo de Burocrácia",
      id: "10",
      icon: "/process.svg",
      description:
        "Facilidade nos processos burocráticos e técnicos, economizando tempo...",
    },
    {
      name: "Orientação Rotulagem de Produtos",
      id: "11",
      icon: "/piece.svg",
      description:
        "Na CERTIFICAMAIS, oferecemos um serviço especializado em...",
    },
    {
      name: "Processo de Registro Simplificado",
      id: "12",
      icon: "/problem.svg",
      description:
        "Com uma equipe de especialistas altamente especializados...",
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-[#F6EBD8]"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden cursor-pointer text-[#2A1A12] p-2 hover:bg-[#A76B3F]/10 rounded-lg transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
                className="w-6 h-0.5 bg-current block transition-all duration-300"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="w-6 h-0.5 bg-current block mt-1.5 transition-all duration-300"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 },
                }}
                className="w-6 h-0.5 bg-current block mt-1.5 transition-all duration-300"
              />
            </motion.div>
          </button>

          {/* Logo principal */}
          <a href="/">
            <motion.div
              title="Certifica Mais"
              className="header-logo shrink-0 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="/logo.png"
                alt="Certifica Mais"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain transition-transform duration-300"
              />
            </motion.div>
          </a>

          {/* Menu de navegação para desktop */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <nav className="flex space-x-6 xl:space-x-8">
              <motion.div
                onClick={() => handleNavigation("home")}
                className={`font-medium transition-colors duration-300 cursor-pointer ${
                  isScrolled
                    ? "text-[#2A1A12] hover:text-[#A76B3F]"
                    : "text-[#2A1A12] hover:text-[#A76B3F]"
                }`}
                whileHover={{ y: -2 }}
              >
                Início
              </motion.div>

              <motion.div
                onClick={() => handleNavigation("about")}
                className={`font-medium transition-colors duration-300 cursor-pointer ${
                  isScrolled
                    ? "text-[#2A1A12] hover:text-[#A76B3F]"
                    : "text-[#2A1A12] hover:text-[#A76B3F]"
                }`}
                whileHover={{ y: -2 }}
              >
                Quem Somos
              </motion.div>

              {/* Menu dropdown de Serviços */}
              <div className="relative group">
                <motion.div
                  onClick={() => handleNavigation("services")}
                  className={`font-medium flex items-center transition-colors duration-300 cursor-pointer ${
                    isScrolled
                      ? "text-[#2A1A12] hover:text-[#A76B3F]"
                      : "text-[#2A1A12] hover:text-[#A76B3F]"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  Serviços
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </motion.div>

                <motion.div
                  className={`absolute left-0 mt-2 w-96 shadow-xl rounded-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 max-h-[500px] overflow-y-auto ${
                    isScrolled
                      ? "bg-white border border-gray-200"
                      : "bg-[#F6EBD8] border border-[#E9C89C]"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  <div className="px-3 py-2">
                    <h3
                      className={`text-sm font-semibold mb-3 ${
                        isScrolled ? "text-[#2A1A12]" : "text-[#4E3C2A]"
                      }`}
                    >
                      Nossos Serviços
                    </h3>
                    <div className="grid gap-2">
                      {services.map((service, index) => (
                        <motion.div
                          key={service.name}
                          onClick={() => onServiceClick?.(service.id)}
                          className={`flex items-start space-x-3 p-3 rounded-lg transition-all duration-300 cursor-pointer group/item ${
                            isScrolled
                              ? "hover:bg-gray-50 hover:shadow-sm"
                              : "hover:bg-[#E9C89C] hover:shadow-sm"
                          }`}
                          whileHover={{ x: 2, scale: 1.01 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.03 }}
                        >
                          <div className="w-8 h-8 flex items-center justify-center bg-[#A76B3F]/10 rounded-lg shrink-0 group-hover/item:bg-[#A76B3F]/20 transition-colors duration-300">
                            <img
                              src={service.icon}
                              alt={service.name}
                              className="w-4 h-4 object-contain"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4
                              className={`text-sm font-medium leading-tight mb-1 group-hover/item:text-[#A76B3F] transition-colors duration-300 ${
                                isScrolled ? "text-[#2A1A12]" : "text-[#4E3C2A]"
                              }`}
                            >
                              {service.name.length > 45
                                ? `${service.name.substring(0, 45)}...`
                                : service.name}
                            </h4>
                            <p
                              className={`text-xs leading-relaxed ${
                                isScrolled ? "text-gray-600" : "text-[#6B5B4F]"
                              }`}
                            >
                              {service.description.length > 60
                                ? `${service.description.substring(0, 60)}...`
                                : service.description}
                            </p>
                          </div>
                          <div className="shrink-0">
                            <svg
                              className={`w-4 h-4 transition-transform duration-300 group-hover/item:translate-x-1 ${
                                isScrolled ? "text-gray-400" : "text-[#8B7355]"
                              }`}
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
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <motion.div
                        onClick={() => handleNavigation("services")}
                        className="flex items-center justify-center space-x-2 py-2 px-4 bg-[#A76B3F] text-white rounded-lg hover:bg-[#7B4A2E] transition-colors duration-300 text-sm font-medium cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Ver Todos os Serviços</span>
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
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                onClick={() => handleNavigation("products")}
                className={`font-medium transition-colors duration-300 cursor-pointer ${
                  isScrolled
                    ? "text-[#2A1A12] hover:text-[#A76B3F]"
                    : "text-[#2A1A12] hover:text-[#A76B3F]"
                }`}
                whileHover={{ y: -2 }}
              >
                Produtos
              </motion.div>
            </nav>

            <div className="flex items-center space-x-4">
              <motion.div
                onClick={onContactClick}
                className={`px-4 py-2 rounded-full border-2 transition-all duration-300 font-medium text-sm xl:text-base cursor-pointer ${
                  isScrolled
                    ? "bg-[#A76B3F] text-white border-[#A76B3F] hover:bg-white hover:text-[#A76B3F]"
                    : "bg-[#A76B3F] text-[#F6EBD8] border-[#A76B3F] hover:bg-white hover:text-[#A76B3F]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contato
              </motion.div>

              <motion.a
                href="tel:11972916967"
                className={`hidden xl:flex items-center transition-colors duration-300 ${
                  isScrolled
                    ? "text-[#2A1A12] hover:text-[#A76B3F]"
                    : "text-[#2A1A12] hover:text-[#A76B3F]"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm">Fale Conosco!</div>
                  <div className="font-medium">11 97291-6967</div>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center space-x-2">
            <motion.a
              href="tel:11972916967"
              className="text-[#2A1A12] p-2 hover:bg-[#A76B3F]/10 rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden border-t border-[#A76B3F]/20 overflow-hidden"
            >
              <motion.nav
                className="py-4 space-y-2"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div
                  onClick={() => {
                    closeMobileMenu();
                    setTimeout(() => handleNavigation("home"), 100);
                  }}
                  className="block px-4 py-3 text-[#2A1A12] hover:bg-[#A76B3F]/10 rounded-lg transition-colors duration-300 font-medium cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  Início
                </motion.div>

                <motion.div
                  onClick={() => {
                    closeMobileMenu();
                    setTimeout(() => handleNavigation("about"), 100);
                  }}
                  className="block px-4 py-3 text-[#2A1A12] hover:bg-[#A76B3F]/10 rounded-lg transition-colors duration-300 font-medium cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  Quem Somos
                </motion.div>

                {/* Mobile Services Dropdown */}
                <div>
                  <motion.button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-[#2A1A12] hover:bg-[#A76B3F]/10 rounded-lg transition-colors duration-300 font-medium"
                    whileHover={{ x: 4 }}
                  >
                    Serviços
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ rotate: isServicesOpen ? 180 : 0 }}
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
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-2 mt-2 space-y-2 max-h-80 overflow-y-auto"
                      >
                        {services.map((service, index) => (
                          <motion.div
                            key={service.name}
                            onClick={() => {
                              onServiceClick?.(service.id);
                              closeMobileMenu();
                            }}
                            className="flex items-start space-x-3 p-3 bg-white/50 hover:bg-[#A76B3F]/10 rounded-lg transition-colors duration-300 cursor-pointer border border-gray-100"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ x: 2 }}
                          >
                            <div className="w-8 h-8 flex items-center justify-center bg-[#A76B3F]/10 rounded-lg shrink-0">
                              <img
                                src={service.icon}
                                alt={service.name}
                                className="w-4 h-4 object-contain"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-[#2A1A12] leading-tight mb-1">
                                {service.name.length > 35
                                  ? `${service.name.substring(0, 35)}...`
                                  : service.name}
                              </h4>
                              <p className="text-xs text-[#6B5B4F] leading-relaxed">
                                {service.description.length > 50
                                  ? `${service.description.substring(0, 50)}...`
                                  : service.description}
                              </p>
                            </div>
                            <div className="shrink-0">
                              <svg
                                className="w-4 h-4 text-[#A76B3F]"
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
                            </div>
                          </motion.div>
                        ))}

                        <div className="pt-2">
                          <motion.div
                            onClick={() => {
                              closeMobileMenu();
                              setTimeout(
                                () => handleNavigation("services"),
                                100
                              );
                            }}
                            className="flex items-center justify-center space-x-2 py-3 px-4 bg-[#A76B3F] text-white rounded-lg hover:bg-[#7B4A2E] transition-colors duration-300 text-sm font-medium cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>Ver Todos os Serviços</span>
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
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.div
                  onClick={() => {
                    closeMobileMenu();
                    setTimeout(() => handleNavigation("products"), 100);
                  }}
                  className="block px-4 py-3 text-[#2A1A12] hover:bg-[#A76B3F]/10 rounded-lg transition-colors duration-300 font-medium cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  Produtos
                </motion.div>

                <motion.a
                  href="https://www.certificmais.com.br/blog"
                  className="block px-4 py-3 text-[#2A1A12] hover:bg-[#A76B3F]/10 rounded-lg transition-colors duration-300 font-medium"
                  onClick={closeMobileMenu}
                  whileHover={{ x: 4 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </motion.a>

                {/* Mobile Contact Button */}
                <motion.div className="pt-4 px-4">
                  <motion.div
                    onClick={() => {
                      onContactClick?.();
                      closeMobileMenu();
                    }}
                    className="block w-full text-center px-6 py-3 bg-[#A76B3F] text-white rounded-full font-medium transition-colors duration-300 hover:bg-[#7B4A2E] cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contato
                  </motion.div>
                </motion.div>

                {/* Mobile Phone */}
                <motion.div className="px-4 pt-2">
                  <motion.a
                    href="tel:11972916967"
                    className="flex items-center justify-center space-x-2 text-[#A76B3F] font-medium"
                    onClick={closeMobileMenu}
                    whileHover={{ scale: 1.05 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>(11) 97291-6967</span>
                  </motion.a>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
