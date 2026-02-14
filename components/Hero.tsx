import { LOCATION } from "@/lib/config";

export default function Hero() {
  return (
    <section className="bg-navy-950 py-24 sm:py-32 lg:py-36 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-8 border border-white/10">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/70 text-sm font-normal">
            Serving {LOCATION.city} &amp; surrounding areas
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.15] tracking-tight mb-6">
          Cleaner, safer water for your{" "}
          <span className="text-brand-400">{LOCATION.city}</span> home
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
          Certified experts backed by national resources. Free in-home water
          testing, professional installation, and a 100% satisfaction
          guarantee.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white text-base font-medium px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-brand-600/30"
          >
            Schedule free consultation
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
          <a
            href={`tel:${LOCATION.phone.replace(/\D/g, "")}`}
            className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/15 text-white text-base font-normal px-8 py-4 rounded-full transition-all border border-white/15"
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
            Call {LOCATION.phone}
          </a>
        </div>

        {/* Trust stats */}
        <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
          <div>
            <p className="text-2xl sm:text-3xl font-light text-white">100%</p>
            <p className="text-sm text-slate-500">Satisfaction guarantee</p>
          </div>
          <div className="w-px bg-white/10 hidden sm:block" />
          <div>
            <p className="text-2xl sm:text-3xl font-light text-white">24/7</p>
            <p className="text-sm text-slate-500">Emergency service</p>
          </div>
          <div className="w-px bg-white/10 hidden sm:block" />
          <div>
            <p className="text-2xl sm:text-3xl font-light text-white">Same-Day</p>
            <p className="text-sm text-slate-500">Appointments available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
