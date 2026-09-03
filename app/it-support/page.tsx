import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { HeroBlobs } from "@/components/Blobs";
import ITSupportCategories from "@/components/ITSupportCategories";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "IT Support — Halvard",
  description:
    "Halvard partners with Interlinked for managed IT support — so the systems we automate run on infrastructure that's monitored, secured, and supported.",
};

export default function ITSupportPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-14 text-center sm:pt-20">
        <HeroBlobs />
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">In partnership with Interlinked</span>
            <h1 className="section-heading mx-auto mt-5 max-w-2xl">
              The infrastructure behind the automation.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-ink/60 sm:text-lg">
              Halvard automates what your business does. Interlinked — a
              Sydney-based managed IT provider — keeps the systems it runs
              on monitored, secured, and supported.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://interlinked.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit Interlinked
              </a>
              <Link href="/contact" className="btn-ghost">
                Talk to us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-10 sm:pb-16">
        <div className="container-page">
          <Reveal>
            <div className="card p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-ink/70">
                Interlinked is an integrated managed IT services provider —
                <span className="italic"> &ldquo;your strategic partner in business technology&rdquo;</span>,
                in their own words. One team, one view of your
                infrastructure, covering everything from help desk support
                to cybersecurity, based in Sydney and serving businesses
                across Australia.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-lg text-center">
            <span className="eyebrow">What Interlinked covers</span>
            <h2 className="section-heading-sm mt-5">
              Six areas. One accountable partner.
            </h2>
          </Reveal>
          <div className="mt-12">
            <ITSupportCategories />
          </div>
        </div>
      </section>

      <CTASection
        heading="Want both handled by people who talk to each other?"
        body="Tell us what you need automated, or ask about IT support — we'll point you the right way."
        primary={{ label: "Start with a conversation", href: "/contact" }}
        secondary={{ label: "Visit Interlinked", href: "https://interlinked.com.au/" }}
      />
    </>
  );
}
