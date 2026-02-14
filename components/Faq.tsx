"use client";

import { useState } from "react";
import { LOCATION } from "@/lib/config";

const faqs = [
  {
    q: `What cities does NWA of ${LOCATION.city} serve?`,
    a: `We serve ${LOCATION.city} and the entire surrounding metro area including ${LOCATION.serviceArea.slice(1).join(", ")}, and more. Same-day and next-day appointments usually available.`,
  },
  {
    q: "How do I find the best water treatment solution for my home?",
    a: "Start with a free water test. We'll analyze your water for 100+ contaminants and give you a personalized recommendation based on your specific water chemistry, household size, and budget.",
  },
  {
    q: `What are the signs of hard water in ${LOCATION.city}?`,
    a: "Common signs: white scale buildup on faucets, dry or itchy skin after bathing, spots on dishes, water that tastes or smells off, or stiff laundry. A free water test is the only way to know exactly what's in your water.",
  },
  {
    q: "How does installation work?",
    a: "Most residential systems are installed in 2-4 hours by our certified technicians. They handle everything: installation, testing, and a full walkthrough of your new system. Many customers have clean water the same day.",
  },
  {
    q: "What about warranties and manuals?",
    a: "Contact your local NWA team for warranty details and product manuals. All systems come with our 100% satisfaction guarantee. If you're not completely satisfied within 30 days, we'll refund the cost.",
  },
  {
    q: `Does NWA treat both city water and well water?`,
    a: "Yes. City water and well water have different challenges, and we have solutions for both. City water often needs chlorine removal and softening. Well water may need iron filtration, UV treatment, or more. We test first, then recommend the right approach.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-20 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-600 text-sm font-semibold tracking-wider uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Frequently asked questions
          </h2>
        </div>

        <div className="divide-y divide-slate-100">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item py-6 cursor-pointer ${openIndex === i ? "open" : ""}`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-slate-900 pr-8">
                  {faq.q}
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="faq-chevron w-4 h-4 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div className="faq-answer">
                <p className="text-slate-500 text-sm leading-relaxed pt-3">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
