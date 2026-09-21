import type { Metadata } from "next";
import { Manrope, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Body/UI face — Manrope. Clean, warm, neutral.
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Display face — Instrument Serif, editorial and large. Weight 400 only.
const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Halvard — AI automation studio",
  description:
    "Halvard is an AI automation studio for growing businesses. We design, build, and run the systems behind leads, follow-ups, invoicing, landing pages, and daily operations — so you can focus on what matters.",
  openGraph: {
    title: "Halvard — AI automation studio",
    description:
      "Automate the busywork. Focus on what matters. Halvard builds and runs the automated systems behind your leads, follow-ups, invoicing, landing pages, and daily operations.",
    siteName: "Halvard",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrument.variable} ${plexMono.variable}`}>
      <body className="relative flex min-h-screen flex-col overflow-x-clip font-sans bg-paper text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
