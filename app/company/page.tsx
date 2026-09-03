import type { Metadata } from "next";
import { Target, ShieldCheck, Puzzle } from "lucide-react";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import Reveal, { RevealGroup } from "@/components/Reveal";
import { HeroBlobs } from "@/components/Blobs";

export const metadata: Metadata = {
  title: "Company — Halvard",
  description:
    "Halvard is an AI automation studio for growing businesses — we design, build, and run the systems behind the busywork.",
};

const values = [
  {
    icon: Target,
    title: "Proactive, not passive",
    body: "A good system doesn't wait to be asked twice. Halvard is built to notice what needs attention before you do.",
  },
  {
    icon: ShieldCheck,
    title: "Private by default",
    body: "Your client data, your pricing, your conversations — never used to train models, never sold, never shared.",
  },
  {
    icon: Puzzle,
    title: "Fits your stack",
    body: "We meet businesses where they already work instead of asking them to change tools.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-14 text-center sm:pt-20">
        <HeroBlobs />
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">About Halvard</span>
            <h1 className="section-heading mx-auto mt-5 max-w-2xl">
              We build the automations every growing business wishes it
              had time for.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-ink/60 sm:text-lg">
              Halvard started with a simple observation: business owners
              lose hours a week to leads, follow-ups, invoicing, and admin
              that a well-built system could handle without being asked.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="container-page rounded-xl4 border border-ink/10 bg-white/60 px-6 py-10 shadow-softer sm:px-12">
          <Stats />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-lg text-center">
            <h2 className="section-heading-sm">What we believe.</h2>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-3" stagger={0.1}>
            {values.map((v) => (
              <div key={v.title} className="card flex flex-col gap-3 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl2 bg-ink/8">
                  <v.icon className="h-5 w-5 text-ink" strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-lg font-bold">{v.title}</h3>
                <p className="text-sm leading-relaxed text-ink/60">{v.body}</p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal>
            <div className="card flex flex-col items-center gap-4 p-10 text-center sm:p-16">
              <h2 className="section-heading-sm max-w-xl">
                Placeholder team section.
              </h2>
              <p className="max-w-md text-ink/60">
                Replace this with real founder/team bios and photos before
                launch. For now, this is a structural placeholder.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        heading="Want to partner with us?"
        body="Reach out and we'll get back to you within a day."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "Read the docs", href: "/docs" }}
      />
    </>
  );
}
