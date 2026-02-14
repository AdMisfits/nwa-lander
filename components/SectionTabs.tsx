"use client";

import { useState } from "react";

const tabs = [
  { label: "Products", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact info", href: "#contact-info" },
];

export default function SectionTabs() {
  const [active, setActive] = useState(0);

  const handleClick = (idx: number, href: string) => {
    setActive(idx);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="border-b border-slate-200 sticky top-16 bg-white/95 backdrop-blur-md z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 overflow-x-auto text-sm font-medium -mb-px scrollbar-hide">
          {tabs.map((tab, i) => (
            <button
              key={tab.href}
              onClick={() => handleClick(i, tab.href)}
              className={`whitespace-nowrap py-4 border-b-2 transition-colors ${
                active === i
                  ? "text-slate-900 border-brand-600"
                  : "text-slate-500 border-transparent hover:text-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
