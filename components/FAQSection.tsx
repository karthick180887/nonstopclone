"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
}: {
  faqs: { question: string; answer: string }[];
  title?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] text-center mb-8">
          {title}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.question} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-[#0F172A] hover:bg-gray-50"
                aria-expanded={open === i}
              >
                {faq.question}
                <ChevronDown className={cn("shrink-0 transition", open === i && "rotate-180")} />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
