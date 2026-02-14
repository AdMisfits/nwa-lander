import { LOCATION } from "@/lib/config";

const products = [
  {
    title: "Water softening",
    desc: "Protect your home, hair and skin from the damage hard water can do.",
    img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&h=450&fit=crop&q=80",
  },
  {
    title: "Reverse osmosis & filtration",
    desc: "Solve common well and city water problems in your home's water.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=450&fit=crop&q=80",
  },
  {
    title: "Water coolers & dispensers",
    desc: "Sip on hot or cold filtered water whenever you need it most.",
    img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&h=450&fit=crop&q=80",
  },
  {
    title: "Home & well water testing",
    desc: "Find out what's in your water. Our experts recommend the best solution.",
    img: "https://images.unsplash.com/photo-1562016600-ece13b8c8f14?w=600&h=450&fit=crop&q=80",
  },
];

export default function Products() {
  return (
    <section id="services" className="bg-slate-50 pattern-bg py-14 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-brand-600 text-sm font-medium tracking-wider uppercase mb-3">
            Our Solutions
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-slate-900 leading-tight">
            Products &amp; services in {LOCATION.city}
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, i) => (
            <a key={i} href="#contact" className="group block">
              <div className="card-elevated bg-white rounded-2xl overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900 mb-1.5">
                    {product.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">
                    {product.desc}
                  </p>
                  <span className="text-brand-600 text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    View products
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
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
