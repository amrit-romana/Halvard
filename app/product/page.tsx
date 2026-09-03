import type { Metadata } from "next";
import Link from "next/link";
import FeatureTabs from "@/components/FeatureTabs";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { HeroBlobs } from "@/components/Blobs";
import DashboardMockup from "@/components/DashboardMockup";
import JobTrackerMockup from "@/components/JobTrackerMockup";
import StaffMockup from "@/components/StaffMockup";

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

      {/* Job tracking */}
      <section className="py-16 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Every job, tracked</span>
            <h2 className="section-heading-sm mt-5">
              Every job stays visible from scoping to live.
            </h2>
            <p className="mt-4 max-w-md text-ink/60">
              No more digging through email threads to find out where a job
              stands. Halvard keeps every client&apos;s status current, so
              you can see what&apos;s scoped, in progress, and live at a
              glance.
            </p>
          </Reveal>
          <Reveal delay={0.1} y={32}>
            <JobTrackerMockup />
          </Reveal>
        </div>
      </section>

      {/* Staff management */}
      <section className="py-16 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1" y={32}>
            <StaffMockup />
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <span className="eyebrow">Staff, managed</span>
            <h2 className="section-heading-sm mt-5">
              Knows who&apos;s free before it assigns the next job.
            </h2>
            <p className="mt-4 max-w-md text-ink/60">
              Halvard tracks who&apos;s available, who&apos;s on-site, and
              who&apos;s off today — and routes new jobs to the right person
              automatically.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        heading="See it running on your own tools."
        body="Connect your first integration in minutes — no setup calls required."
      />
    </>
  );
}
