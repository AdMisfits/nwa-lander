import { LOCATION } from "@/lib/config";

export default function ContactInfo() {
  return (
    <section id="contact-info" className="bg-slate-50 py-20 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            {LOCATION.googleMapsEmbed ? (
              <iframe
                src={LOCATION.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1rem", minHeight: 360 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="bg-white rounded-2xl aspect-[4/3] flex items-center justify-center border border-slate-200">
                <div className="text-center p-8">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-7 h-7 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Map embed
                    <br />
                    Set googleMapsEmbed in config
                  </p>
                </div>
              </div>
            )}
          </div>

          <div>
            <p className="text-slate-500 text-sm mb-1">{LOCATION.address}</p>
            <p className="mb-8">
              <a
                href={`tel:${LOCATION.phone.replace(/\D/g, "")}`}
                className="text-brand-600 font-semibold text-lg hover:text-brand-700 transition-colors"
              >
                {LOCATION.phone}
              </a>
            </p>

            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Hours
            </h3>
            <div className="space-y-0 mb-8">
              {[
                ["Mon – Fri", LOCATION.hours.weekday],
                ["Saturday", LOCATION.hours.saturday],
                ["Sunday", LOCATION.hours.sunday],
              ].map(([day, time]) => (
                <div
                  key={day}
                  className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0"
                >
                  <span className="text-sm text-slate-500">{day}</span>
                  <span className="text-sm font-medium text-slate-900">
                    {time}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-brand-50 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Emergency service
                </p>
                <p className="text-sm text-slate-500">
                  Available {LOCATION.hours.emergency}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">
            Service areas near {LOCATION.city}
          </h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {LOCATION.serviceArea.map((city) => (
              <div
                key={city}
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-slate-100"
              >
                <svg
                  className="w-4 h-4 text-brand-600 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="text-sm text-slate-700">
                  {city}, {LOCATION.state}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
