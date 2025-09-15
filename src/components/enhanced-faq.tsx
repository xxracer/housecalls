"use client";

import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

type EnhancedFaqProps = {
  faqData: FaqItem[];
  enhancedFaqContent: string;
};

export function EnhancedFaq({ faqData, enhancedFaqContent }: EnhancedFaqProps) {
  useEffect(() => {
    if (typeof window === "undefined" || !enhancedFaqContent) return;

    const scriptId = 'faq-json-ld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    if (script.innerHTML !== enhancedFaqContent) {
        script.innerHTML = enhancedFaqContent;
    }

  }, [enhancedFaqContent]);

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqData.map((faq, index) => (
        <AccordionItem value={`item-${index}`} key={index} className="border-b">
          <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline group">
            <span className="flex-1">{faq.question}</span>
            <div className="relative h-6 w-6 ml-4">
              <Plus className="h-6 w-6 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0" />
              <Minus className="absolute inset-0 h-6 w-6 shrink-0 transition-transform duration-200 opacity-0 group-data-[state=open]:opacity-100" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground pt-2">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
