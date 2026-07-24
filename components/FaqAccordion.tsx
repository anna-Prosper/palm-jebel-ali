import { ChevronDown } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqAccordionProps {
  faqs: FaqItem[];
  emitJsonLd?: boolean;
}

function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function FAQJsonLd({ faqs }: { faqs: FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }} />;
}

/**
 * FAQ accordion built on native <details>/<summary>, the answer text is
 * always present in the server-rendered HTML, only the toggle is interactive.
 */
export function FaqAccordion({ faqs, emitJsonLd = true }: FaqAccordionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-2 sm:space-y-3">
      {emitJsonLd && <FAQJsonLd faqs={faqs} />}
      {faqs.map((faq, i) => (
        <details
          key={i}
          className="group rounded-xl overflow-hidden border border-black/10 transition-colors hover:border-black/20 open:bg-black/[0.03]"
        >
          <summary className="w-full flex items-center justify-between p-3 sm:p-5 text-left gap-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <span className="text-xs sm:text-sm font-semibold text-[#0E1C22]">{faq.question}</span>
            <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#6B7782] flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <div className="px-3 sm:px-5 pb-3 sm:pb-5">
            <div className="w-10 h-px bg-black/10 mb-2 sm:mb-3" />
            <p className="text-xs sm:text-sm text-[#6B7782] leading-relaxed">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
