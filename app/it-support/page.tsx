import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { HeroBlobs } from "@/components/Blobs";
import ITSupportCategories from "@/components/ITSupportCategories";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "IT Support — Halvard",
  description:
    "Automation runs on infrastructure. If you need help desk, cloud, networking, or cybersecurity support sorted too, we can point you the right way.",
};

export default function ITSupportPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-14 text-center sm:pt-20">
        <HeroBlobs />
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">Beyond automation</span>
            <h1 className="section-heading mx-auto mt-5 max-w-2xl">
              The infrastructure behind the automation.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-ink/60 sm:text-lg">
              Halvard automates what your business does. If the systems it
              runs on need help too — help desk, cloud, networking,
              cybersecurity — we can point you to trusted IT support.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Talk to us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-lg text-center">
            <span className="eyebrow">What we can help you sort</span>
            <h2 className="section-heading-sm mt-5">
              Six areas, covered.
            </h2>
          </Reveal>
          <div className="mt-12">
            <ITSupportCategories />
          </div>
        </div>
      </section>

      <CTASection
        heading="Want both sorted in one conversation?"
        body="Tell us what you need automated, or ask about IT support — we'll point you the right way."
        primary={{ label: "Start with a conversation", href: "/contact" }}
        secondary={{ label: "See how it works", href: "/how-it-works" }}
      />
    </>
  );
}
