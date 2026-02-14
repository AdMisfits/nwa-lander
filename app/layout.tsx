import type { Metadata } from "next";
import { LOCATION } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  title: `Water Treatment Services & Solutions in ${LOCATION.city}, ${LOCATION.state} | National Water Alliance`,
  description: `Free water testing in ${LOCATION.city}, ${LOCATION.state}. Expert water softening, filtration, and treatment solutions. Local team backed by national resources. Schedule your free consultation today.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
