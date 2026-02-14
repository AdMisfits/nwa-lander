"use client";

import { useRef, useState } from "react";

const reviews = [
  {
    quote: "Like we moved into a new house",
    body: "We had white buildup on everything. After the softener install, skin feels different, laundry is softer, and no more scrubbing scale off the glass.",
    name: "Sarah M.",
  },
  {
    quote: "Wonderful, trustworthy service.",
    body: "Installing a water softener was the best decision. My pipes and bathroom fixtures thank me and my hair is soft again!",
    name: "Kristin H.",
  },
  {
    quote: "Safe, clean-tasting water from the tap",
    body: "Had we realized how affordable and stress-free the installation was, we would've done it years ago.",
    name: "Anthony M.",
  },
  {
    quote: "They explained everything about my water!",
    body: "They showed me options, the installation was quick and clean. Maintenance is hassle-free too.",
    name: "Steph L.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div className="card-elevated bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 snap-start">
      <Stars />
      <h4 className="text-lg sm:text-xl font-semibold text-slate-900 leading-snug mt-4 mb-3">
        &ldquo;{review.quote}&rdquo;
      </h4>
      <p className="text-slate-500 text-sm leading-relaxed mb-5">
        {review.body}
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 text-sm font-bold">
          {review.name.charAt(0)}
        </div>
        <span className="text-sm font-medium text-slate-700">
          {review.name}
        </span>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [pos, setPos] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="reviews" className="bg-slate-50 py-14 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <div>
            <p className="text-brand-600 text-sm font-medium tracking-wider uppercase mb-3">
              Testimonials
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-slate-900">
              Ratings &amp; reviews
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-sm text-slate-400 mr-1">
              {pos + 1} / {reviews.length}
            </span>
            <button
              onClick={() => setPos(Math.max(0, pos - 1))}
              className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-100 hover:border-slate-300 transition-all disabled:opacity-30"
              disabled={pos === 0}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => setPos(Math.min(reviews.length - 1, pos + 1))}
              className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-100 hover:border-slate-300 transition-all disabled:opacity-30"
              disabled={pos === reviews.length - 1}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile: horizontal scroll with snap */}
        <div
          ref={scrollRef}
          className="sm:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-2"
        >
          {reviews.map((review, i) => (
            <div key={i} className="w-[80vw] flex-shrink-0">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* Desktop: button-controlled carousel */}
        <div className="hidden sm:block relative overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${pos * 404}px)`,
            }}
          >
            {reviews.map((review, i) => (
              <div key={i} className="w-[380px] flex-shrink-0">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
