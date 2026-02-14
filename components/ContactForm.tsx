"use client";

import { useState } from "react";
import { LOCATION } from "@/lib/config";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    (data as Record<string, string>).location_city = LOCATION.city;
    (data as Record<string, string>).location_state = LOCATION.state;

    if (LOCATION.formAction) {
      try {
        await fetch(LOCATION.formAction, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } catch {
        // still show success
      }
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-14 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <p className="text-brand-600 text-sm font-medium tracking-wider uppercase mb-3">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 leading-tight mb-4">
              Schedule your free water consultation
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-6">
              Our NWA water experts are ready to help you find the right
              solution, starting with your free in-home water test.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-sm text-slate-600">Free in-home water test &amp; analysis</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-sm text-slate-600">Personalized recommendation based on your water</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-sm text-slate-600">No obligation, no pressure</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {/* Step indicator */}
            <div className="flex items-center gap-0 mb-8">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold shadow-lg shadow-brand-600/20">
                  1
                </span>
                <span className="hidden sm:inline text-sm font-medium text-slate-900">
                  Information
                </span>
              </div>
              <div className="flex-1 h-px bg-slate-200 mx-2 sm:mx-4" />
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-7 h-7 sm:w-8 sm:h-8 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold">
                  2
                </span>
                <span className="hidden sm:inline text-sm text-slate-400">Appointment</span>
              </div>
              <div className="flex-1 h-px bg-slate-200 mx-2 sm:mx-4" />
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-7 h-7 sm:w-8 sm:h-8 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold">
                  3
                </span>
                <span className="hidden sm:inline text-sm text-slate-400">Confirmation</span>
              </div>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-semibold text-slate-900 mb-1">
                  Enter your information
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  Fields marked * are required.
                </p>

                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        First Name*
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-slate-50/50 hover:border-slate-300 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-slate-50/50 hover:border-slate-300 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Address*
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-slate-50/50 hover:border-slate-300 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        City*
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-slate-50/50 hover:border-slate-300 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        State*
                      </label>
                      <input
                        type="text"
                        name="state"
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-slate-50/50 hover:border-slate-300 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Zip Code*
                      </label>
                      <input
                        type="text"
                        name="zip"
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-slate-50/50 hover:border-slate-300 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-slate-50/50 hover:border-slate-300 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone*
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-slate-50/50 hover:border-slate-300 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone Type*
                      </label>
                      <div className="flex items-center gap-6 py-3">
                        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                          <input
                            type="radio"
                            name="phone_type"
                            value="mobile"
                            defaultChecked
                            className="accent-brand-600"
                          />
                          Mobile
                        </label>
                        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                          <input
                            type="radio"
                            name="phone_type"
                            value="home"
                            className="accent-brand-600"
                          />
                          Home
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-slate-900 hover:bg-slate-800 text-white text-base font-medium px-8 py-3.5 rounded-full transition-all hover:shadow-lg mt-2"
                  >
                    Next: Choose date &amp; time
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-8 h-8 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                  You&apos;re all set!
                </h3>
                <p className="text-slate-500 text-sm max-w-sm mx-auto">
                  We&apos;ll be in touch within 1 business day to confirm your
                  free water consultation appointment.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
