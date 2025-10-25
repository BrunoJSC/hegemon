export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  fullDescription: string;
  benefits?: string[];
  process?: string[];
  requirements?: string[];
}

export const servicesData: Service[] = [
  {
    id: 1,
    icon: "/security.svg",
    title: "Defesa Técnica em Autuações do INMETRO e IPEM",
    description:
      "Enfrentar uma autuação do INMETRO ou IPEM pode ser um desafio complexo para...",
    fullDescription:
      "Enfrentar uma autuação do INMETRO ou IPEM pode ser um desafio complexo para qualquer empresa. Nossa equipe especializada oferece defesa técnica completa, analisando cada aspecto da autuação e preparando a documentação necessária para contestação.",
    benefits: [
      "Análise detalhada da autuação",
      "Preparação de defesa técnica especializada",
      "Acompanhamento do processo até conclusão",
      "Redução ou eliminação de multas",
      "Orientação para evitar futuras autuações",
    ],
    process: [
      "Análise inicial da autuação e documentação",
      "Levantamento de evidências técnicas",
      "Elaboração da defesa técnica",
      "Protocolo da defesa nos órgãos competentes",
      "Acompanhamento até decisão final",
    ],
    requirements: [
      "Cópia da autuação recebida",
      "Documentação da empresa",
      "Laudos e certificados relacionados ao produto",
      "Histórico de conformidade (se disponível)",
    ],
  },
  {
    id: 2,
    icon: "/eyes.svg",
    title: "Vigilância Sanitária | Anvisa | CNES | Mapa",
    description:
      "Licenciamento completo para sua empresa junto aos órgãos reguladores...",
    fullDescription:
      "Oferecemos licenciamento completo para sua empresa junto aos principais órgãos reguladores de saúde e segurança. Nossa equipe cuida de todo o processo burocrático, garantindo conformidade com as normas da Vigilância Sanitária, Anvisa, CNES e Mapa.",
    benefits: [
      "Licenciamento ágil e sem complicações",
      "Conformidade com todas as normas sanitárias",
      "Acompanhamento de todo o processo",
      "Renovações e atualizações de licenças",
      "Suporte contínuo pós-licenciamento",
    ],
    process: [
      "Diagnóstico inicial das necessidades",
      "Preparação da documentação necessária",
      "Adequação das instalações (se necessário)",
      "Protocolo nos órgãos competentes",
      "Acompanhamento de vistorias",
      "Emissão das licenças",
    ],
    requirements: [
      "Documentação da empresa atualizada",
      "Planta baixa das instalações",
      "Descrição dos processos e produtos",
      "Responsável técnico habilitado",
    ],
  },
  {
    id: 3,
    icon: "/paper.svg",
    title:
      "Laudo de Ergonomia 100% Conforme a NR-17: Evite multas e processos trabalhistas",
    description:
      "Melhor Preço e Qualidade. Técnica em Laudos. Ergonomistas para empresas...",
    fullDescription:
      "Elaboramos laudos ergonômicos completos e 100% conformes com a NR-17, protegendo sua empresa de multas e processos trabalhistas. Nossa equipe de ergonomistas certificados realiza análise detalhada de todos os postos de trabalho.",
    benefits: [
      "Conformidade total com a NR-17",
      "Prevenção de multas e processos",
      "Melhoria das condições de trabalho",
      "Redução de afastamentos por LER/DORT",
      "Aumento da produtividade",
      "Laudo assinado por ergonomista certificado",
    ],
    process: [
      "Visita técnica às instalações",
      "Análise ergonômica dos postos de trabalho",
      "Avaliação de riscos ergonômicos",
      "Elaboração do laudo técnico",
      "Recomendações de melhorias",
      "Entrega do laudo final",
    ],
    requirements: [
      "Acesso às instalações da empresa",
      "Layout dos postos de trabalho",
      "Descrição das atividades realizadas",
      "Número de funcionários por posto",
    ],
  },
  {
    id: 4,
    icon: "/certification.svg",
    title: "Boas Práticas de Distribuição (BPD) - Certificação",
    description:
      "A Diretriz da UE 'Boas Práticas na Distribuição' é destinada às empresas do...",
    fullDescription:
      "A certificação em Boas Práticas de Distribuição (BPD) é essencial para empresas que atuam na distribuição de produtos regulados. Auxiliamos na implementação e certificação conforme as diretrizes nacionais e internacionais.",
    benefits: [
      "Certificação reconhecida nacionalmente",
      "Conformidade com diretrizes da UE",
      "Melhoria dos processos de distribuição",
      "Credibilidade no mercado",
      "Acesso a novos mercados",
    ],
    process: [
      "Diagnóstico inicial dos processos",
      "Implementação das Boas Práticas",
      "Treinamento da equipe",
      "Auditoria interna",
      "Certificação oficial",
    ],
    requirements: [
      "Empresa regularizada",
      "Instalações adequadas",
      "Equipe treinada",
      "Documentação de processos",
    ],
  },
  {
    id: 5,
    icon: "/inspection.svg",
    title: "Inspeção & Controle de Qualidade (China)",
    description:
      "Na CERTIFICAMAIS, garantimos que cada produto atenda aos mais...",
    fullDescription:
      "Oferecemos serviços completos de inspeção e controle de qualidade para produtos importados da China. Nossa equipe local garante que cada produto atenda aos mais altos padrões de qualidade antes do embarque.",
    benefits: [
      "Inspeção in loco na China",
      "Redução de produtos defeituosos",
      "Conformidade com normas brasileiras",
      "Relatórios detalhados com fotos",
      "Economia com devoluções e retrabalho",
    ],
    process: [
      "Definição dos critérios de qualidade",
      "Agendamento da inspeção",
      "Inspeção no fornecedor",
      "Testes e verificações",
      "Relatório fotográfico detalhado",
      "Aprovação ou rejeição do lote",
    ],
    requirements: [
      "Especificações do produto",
      "Critérios de aceitação",
      "Dados do fornecedor chinês",
      "Cronograma de produção",
    ],
  },
  {
    id: 6,
    icon: "/product.svg",
    title: "Desenvolvimento de Produto & Outsourcing Internacional",
    description:
      "Atuar como ponte estratégica entre o mercado brasileiro e os polos...",
    fullDescription:
      "Atuamos como ponte estratégica entre o mercado brasileiro e os principais polos de manufatura internacional. Desenvolvemos produtos customizados e gerenciamos todo o processo de outsourcing.",
    benefits: [
      "Acesso a fornecedores qualificados",
      "Desenvolvimento de produtos customizados",
      "Redução de custos de produção",
      "Gestão completa do processo",
      "Garantia de qualidade",
    ],
    process: [
      "Briefing e especificações do produto",
      "Seleção de fornecedores",
      "Desenvolvimento de protótipos",
      "Aprovação de amostras",
      "Produção e controle de qualidade",
      "Logística e importação",
    ],
    requirements: [
      "Especificações técnicas do produto",
      "Volume estimado de produção",
      "Orçamento disponível",
      "Prazo desejado",
    ],
  },
  {
    id: 7,
    icon: "/business.svg",
    title: "Consultoria Reguladora",
    description:
      "Consultoria completa para certificações do Inmetro, Anvisa e Anatel.",
    fullDescription:
      "Oferecemos consultoria especializada para certificações junto aos principais órgãos reguladores brasileiros: Inmetro, Anvisa e Anatel. Nossa equipe conhece profundamente os requisitos e processos de cada órgão.",
    benefits: [
      "Expertise em múltiplos órgãos reguladores",
      "Agilidade nos processos de certificação",
      "Redução de custos com retrabalho",
      "Orientação estratégica",
      "Suporte contínuo",
    ],
    process: [
      "Análise do produto e requisitos aplicáveis",
      "Planejamento da certificação",
      "Preparação da documentação",
      "Seleção de laboratórios",
      "Acompanhamento dos ensaios",
      "Protocolo e obtenção da certificação",
    ],
    requirements: [
      "Informações técnicas do produto",
      "Amostras para ensaios",
      "Documentação da empresa",
      "Definição do escopo de certificação",
    ],
  },
  {
    id: 8,
    icon: "/business.svg",
    title: "Cumprimento de Exigências",
    description:
      "Ajudando cada cliente a entender e cumprir as exigências específicas de...",
    fullDescription:
      "Auxiliamos empresas a entenderem e cumprirem todas as exigências regulatórias específicas de seu segmento. Oferecemos suporte completo para adequação às normas e regulamentos aplicáveis.",
    benefits: [
      "Conformidade regulatória garantida",
      "Evita multas e sanções",
      "Processos otimizados",
      "Documentação organizada",
      "Tranquilidade operacional",
    ],
    process: [
      "Levantamento das exigências aplicáveis",
      "Gap analysis da situação atual",
      "Plano de ação para adequação",
      "Implementação das melhorias",
      "Verificação de conformidade",
    ],
    requirements: [
      "Informações sobre o negócio",
      "Produtos/serviços oferecidos",
      "Documentação atual disponível",
    ],
  },
  {
    id: 10,
    icon: "/process.svg",
    title: "Processo de Burocrácia",
    description:
      "Facilidade nos processos burocráticos e técnicos, economizando tempo e...",
    fullDescription:
      "Simplificamos todos os processos burocráticos e técnicos necessários para certificações e licenciamentos. Nossa equipe cuida de toda a papelada, economizando seu tempo e recursos.",
    benefits: [
      "Economia de tempo",
      "Redução de custos operacionais",
      "Processos mais rápidos",
      "Menos erros e retrabalho",
      "Foco no core business",
    ],
    process: [
      "Identificação dos processos necessários",
      "Coleta de documentação",
      "Preparação e organização",
      "Protocolos nos órgãos competentes",
      "Acompanhamento até conclusão",
    ],
    requirements: [
      "Documentação básica da empresa",
      "Procuração (se necessário)",
      "Informações sobre os processos desejados",
    ],
  },
  {
    id: 11,
    icon: "/piece.svg",
    title: "Orientação Rotulagem de Produtos",
    description: "Na CERTIFICAMAIS, oferecemos um serviço especializado em...",
    fullDescription:
      "Oferecemos serviço especializado em orientação para rotulagem de produtos, garantindo conformidade com todas as normas do Inmetro, Anvisa e legislação aplicável. Evite problemas com fiscalização e recalls.",
    benefits: [
      "Rotulagem 100% conforme",
      "Evita autuações e recalls",
      "Adequação a múltiplas normas",
      "Revisão técnica especializada",
      "Orientação para diferentes categorias de produtos",
    ],
    process: [
      "Análise do produto e categoria",
      "Identificação das normas aplicáveis",
      "Revisão do rótulo atual",
      "Elaboração de proposta de adequação",
      "Validação final",
    ],
    requirements: [
      "Informações técnicas do produto",
      "Rótulo atual (se existente)",
      "Categoria do produto",
      "Mercado de destino",
    ],
  },
  {
    id: 12,
    icon: "/problem.svg",
    title: "Processo de Registro Simplificado",
    description:
      "Com uma equipe de especialistas altamente especializados, a...",
    fullDescription:
      "Com uma equipe de especialistas altamente qualificados, oferecemos processo de registro simplificado para diversos tipos de produtos. Tornamos o complexo processo de registro mais rápido e eficiente.",
    benefits: [
      "Processo mais rápido",
      "Menos burocracia",
      "Expertise especializada",
      "Acompanhamento personalizado",
      "Taxa de aprovação elevada",
    ],
    process: [
      "Análise de viabilidade do registro",
      "Preparação da documentação técnica",
      "Protocolo do pedido",
      "Acompanhamento junto aos órgãos",
      "Obtenção do registro",
    ],
    requirements: [
      "Dados técnicos do produto",
      "Documentação da empresa",
      "Amostras (quando aplicável)",
      "Laudos e certificados existentes",
    ],
  },
];
