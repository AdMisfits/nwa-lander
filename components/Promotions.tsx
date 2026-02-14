import { LOCATION } from "@/lib/config";

const offers = [
  {
    title: "Get Soft Water for $9.95/month",
    desc: "For a limited time, rent soft water for only $9.95/month for the first 3 months.*",
  },
  {
    title: "Save $500 on a Complete Home Bundle",
    desc: "Save $500 on a NWA Home Bundle Purchase. Limited time offer.**",
  },
  {
    title: "12 Months No Interest Financing",
    desc: "Save on cleaner water and fuel your wellness! Enjoy no interest for 12 months.*",
  },
];

export default function Promotions() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800" />
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-200 text-sm font-semibold tracking-wider uppercase mb-3">
            Limited-Time Offers
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Exclusive promotions in {LOCATION.city}
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {offers.map((offer, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-7 border border-white/20 hover:border-white/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center mb-5">
                <svg
                  className="w-5 h-5 text-brand-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                {offer.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                {offer.desc}
              </p>
              <a
                href="#contact"
                className="text-brand-600 text-sm font-semibold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
              >
                Redeem offer
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
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <p className="text-brand-200/60 text-xs text-center">
          *Dealer participation may vary. See dealer for details.
          <br />
          **On approved credit. Offer ends 03/31/2026. Dealer participation may
          vary.
        </p>
      </div>
    </section>
  );
}
