"use client";

import { useEffect, useState } from "react";
import { LOCATION } from "@/lib/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const phoneDigits = LOCATION.phone.replace(/\D/g, "");

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-center py-2.5 px-4">
        <a
          href="#contact"
          className="text-white/90 text-sm hover:text-white transition-colors"
        >
          Get Started with a Free Water Consultation &rarr;
        </a>
      </div>

      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "nav-scrolled border-slate-200/60"
            : "bg-white border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                    fill="currentColor"
                    opacity="0"
                  />
                  <path
                    d="M5 14c3-4 5-3 7-6s5-3 7 1"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 18c3-4 5-3 7-6s5-3 7 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold text-slate-900 tracking-tight">
                NWA
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-500">
              <a
                href="#services"
                className="hover:text-slate-900 transition-colors"
              >
                Water Softening
              </a>
              <a
                href="#services"
                className="hover:text-slate-900 transition-colors"
              >
                Water Filtration
              </a>
              <a
                href="#services"
                className="hover:text-slate-900 transition-colors"
              >
                Well Water
              </a>
              <a
                href="#faq"
                className="hover:text-slate-900 transition-colors"
              >
                Resources
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={`tel:${phoneDigits}`}
                className="hidden sm:flex items-center gap-1.5 text-sm text-slate-700 font-medium hover:text-slate-900 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                {LOCATION.phone}
              </a>
              <a
                href="#contact"
                className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-brand-600/25"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
