import type { Metadata } from "next";
import PricingProcess from "@/components/PricingProcess";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { HeroBlobs } from "@/components/Blobs";

export const metadata: Metadata = {
  title: "Pricing — Halvard",
  description:
    "Halvard is quoted per business, not sold off a price list. See how we get from a conversation to a fixed quote.",
};

const faqs = [
  {
    q: "Why isn't there a price list?",
    a: "Every business automates different things, so a generic price would either overcharge simple work or undersell complex work. We'd rather quote what your business actually needs.",
  },
  {
    q: "Do I have to commit to anything for a quote?",
    a: "No. The first conversation is free and no-obligation — it's how we understand your business well enough to scope something worth building.",
  },
  {
    q: "How does a project actually start?",
    a: "You tell us what's eating your time. We have a conversation to scope it properly, send a fixed quote for the build, and agree on a start date before anything is charged.",
  },
  {
    q: "Is there an ongoing cost after the build?",
    a: "Some systems need light ongoing monitoring, which is quoted separately and clearly, up front — never a surprise recurring charge.",
  },
  {
    q: "Is my business data used to train models?",
    a: "Never. Your conversations and connected data are used only to run your systems.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-14 text-center sm:pt-20">
        <HeroBlobs />
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">Quoted, not listed</span>
            <h1 className="section-heading mx-auto mt-5 max-w-2xl">
              Priced around your business, not a menu.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-ink/60 sm:text-lg">
              We don&apos;t sell fixed packages. We sit down with you, learn
              how your business runs, and quote exactly what&apos;s worth
              automating — nothing more.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container-page">
          <PricingProcess />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page max-w-2xl">
          <Reveal className="text-center">
            <h2 className="section-heading-sm">Questions, answered.</h2>
          </Reveal>
          <div className="mt-10 flex flex-col divide-y divide-ink/10 rounded-xl3 border border-ink/10 bg-white/60">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink">
                  {f.q}
                  <span className="shrink-0 text-ink/40 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Tell us what's eating your week."
        body="The first conversation costs nothing — we'll tell you honestly what's worth automating."
        primary={{ label: "Start with a conversation", href: "/contact" }}
        secondary={{ label: "See how it works", href: "/how-it-works" }}
      />
    </>
  );
}
