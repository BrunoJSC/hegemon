import { StructuredData } from "./structured-data";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

/**
 * Componente para adicionar FAQ Schema (JSON-LD)
 * Melhora SEO e pode resultar em rich snippets no Google
 */
export function FAQSchema({ faqs }: FAQSchemaProps) {
  const questions = faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  }));

  return <StructuredData type="FAQPage" data={{ questions }} />;
}

