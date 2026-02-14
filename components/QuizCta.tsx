export default function QuizCta() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504197885166-974f41e2f5dd?w=1400&h=500&fit=crop&q=80')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/80 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/10">
            <span className="text-white/80 text-sm font-medium">
              2-minute quiz
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Find the right system for your home
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Whether you have city or well water, take our quick quiz to find
            out what&apos;s happening with your water and get personalized
            recommendations.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-slate-900 text-base font-semibold px-7 py-3.5 rounded-full hover:bg-slate-100 transition-all hover:shadow-lg"
          >
            Take the quiz
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
        </div>
      </div>
    </section>
  );
}
