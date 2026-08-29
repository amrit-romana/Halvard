import type { Metadata } from "next";
import Link from "next/link";
import FeatureTabs from "@/components/FeatureTabs";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { HeroBlobs } from "@/components/Blobs";
import DashboardMockup from "@/components/DashboardMockup";

export const metadata: Metadata = {
  title: "What we automate — Halvard",
  description:
    "A tour of what Halvard automates: leads, follow-ups, invoicing, landing pages, and daily operations — built on the tools you already run your business on.",
};

export default function ProductPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-14 sm:pt-20">
        <HeroBlobs />
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">What we automate</span>
            <h1 className="section-heading mt-5">
              Six pillars, each running on its own.
            </h1>
            <p className="mt-5 max-w-md text-ink/60 sm:text-lg">
              One studio, six jobs — leads, follow-ups, invoicing, landing
              pages, daily operations, and anything else worth automating —
              all wired into the tools you already run your business on.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/pricing" className="btn-primary">
                Get Started
              </Link>
              <Link href="/how-it-works" className="btn-ghost">
                See a walkthrough
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15} y={32}>
            <DashboardMockup />
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-lg text-center">
            <h2 className="section-heading-sm">Six pillars, done automatically.</h2>
            <p className="mt-4 text-ink/60">
              Tap through to see how Halvard handles each part of running
              your business.
            </p>
          </Reveal>
          <div className="mt-12">
            <FeatureTabs />
          </div>
        </div>
      </section>

      <CTASection
        heading="See it running on your own tools."
        body="Connect your first integration in minutes — no setup calls required."
      />
    </>
  );
}
