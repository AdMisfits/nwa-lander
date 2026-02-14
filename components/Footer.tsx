import { LOCATION } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src="/logo.png"
                alt={`${LOCATION.city} Water Alliance`}
                className="h-10 w-auto"
              />
              <span className="text-base font-semibold text-white tracking-tight leading-tight">
                {LOCATION.city} Water Alliance
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm mb-5 leading-relaxed">
              Clean water for every home. Local service backed by national
              expertise and a 100% satisfaction guarantee.
            </p>
            <div className="text-slate-400 text-sm space-y-1.5">
              <p>
                <a
                  href={`tel:${LOCATION.phone.replace(/\D/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {LOCATION.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${LOCATION.email}`}
                  className="hover:text-white transition-colors"
                >
                  {LOCATION.email}
                </a>
              </p>
              <p>{LOCATION.address}</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-white text-sm mb-4">Services</p>
            <ul className="text-slate-400 text-sm space-y-2.5">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Water Softening
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Water Filtration
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Reverse Osmosis
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Water Testing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white text-sm mb-4">Company</p>
            <ul className="text-slate-400 text-sm space-y-2.5">
              <li>
                <a
                  href="#why-nwa"
                  className="hover:text-white transition-colors"
                >
                  About NWA
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6">
          <p className="text-xs text-slate-500">
            &copy; 2026 National Water Alliance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
