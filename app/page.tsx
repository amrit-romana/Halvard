import Link from "next/link";
import Marquee from "@/components/Marquee";
import SyncDiagram from "@/components/SyncDiagram";
import PillarGrid from "@/components/PillarGrid";
import RecipeCards from "@/components/RecipeCards";
import PricingProcess from "@/components/PricingProcess";
import Testimonials from "@/components/Testimonials";
import DashboardMockup from "@/components/DashboardMockup";
import NotificationStack from "@/components/NotificationStack";
import PhoneMockup from "@/components/PhoneMockup";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { HeroBlobs } from "@/components/Blobs";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-12 pt-14 sm:pt-20">
        <HeroBlobs />
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                AI Automation Studio
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="section-heading mt-6">
                Automate the busywork.
                <br />
                Focus on what matters.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-5 max-w-md text-base text-ink/60 sm:text-lg lg:mx-0">
                Halvard designs, builds, and runs the automated systems behind
                your leads, follow-ups, invoicing, landing pages, and daily
                operations.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link href="/pricing" className="btn-primary">
                  Get Started
                </Link>
                <Link href="/how-it-works" className="btn-ghost">
                  See how it works
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} y={32}>
            <SyncDiagram />
          </Reveal>
        </div>
      </section>

      {/* Logo marquee */}
      <section className="pb-16 sm:pb-20">
        <Reveal>
          <p className="mb-6 text-center font-mono text-xs font-medium uppercase tracking-[0.16em] text-ink/40">
            Built on the tools you already run your business on
          </p>
        </Reveal>
        <Marquee />
      </section>

      {/* Automation Pillars */}
      <section id="pillars" className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-lg text-center">
            <span className="eyebrow">What we automate</span>
            <h2 className="section-heading-sm mt-5">
              Six pillars. One operator.
            </h2>
            <p className="mt-4 text-ink/60">
              Every system Halvard builds falls under one of these — and if
              yours doesn&apos;t, that&apos;s what the sixth one is for.
            </p>
          </Reveal>
          <div className="mt-12">
            <PillarGrid />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/product"
              className="text-sm font-medium text-ink/60 underline underline-offset-4 hover:text-ink"
            >
              See how each pillar works
            </Link>
          </div>
        </div>
      </section>

      {/* Feature: proactive alerts */}
      <section className="py-16 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Proactive by default</span>
            <h2 className="section-heading-sm mt-5">
              Keeps you in the loop before you have to go looking.
            </h2>
            <p className="mt-4 max-w-md text-ink/60">
              Halvard flags what needs your attention — an unhappy client, a
              stalled quote, a payment that just landed — and drafts the next
              step so you just have to say go.
            </p>
            <Link href="/product" className="btn-ghost mt-6 inline-flex">
              Explore proactive alerts
            </Link>
          </Reveal>
          <Reveal delay={0.1} y={32}>
            <NotificationStack />
          </Reveal>
        </div>
      </section>

      {/* Feature: scheduling / dashboard */}
      <section className="py-16 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1" y={32}>
            <DashboardMockup />
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <span className="eyebrow">Runs on your schedule</span>
            <h2 className="section-heading-sm mt-5">
              Handles tasks according to your schedule, not just on request.
            </h2>
            <p className="mt-4 max-w-md text-ink/60">
              Halvard can chase clients on a cadence you set and get a head
              start on tomorrow&apos;s work tonight — all synced with the
              tools you already use.
            </p>
            <Link href="/how-it-works" className="btn-ghost mt-6 inline-flex">
              See a full walkthrough
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Feature: wherever you already are */}
      <section className="py-16 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Wherever you already are</span>
            <h2 className="section-heading-sm mt-5">
              Approvals and updates land where you actually work.
            </h2>
            <p className="mt-4 max-w-md text-ink/60">
              Text, WhatsApp, Slack, or email — Halvard sends what needs a
              decision to whichever channel you check first, and handles the
              rest without waiting on you.
            </p>
            <Link href="/integrations" className="btn-ghost mt-6 inline-flex">
              See supported channels
            </Link>
          </Reveal>
          <Reveal delay={0.1} y={32}>
            <PhoneMockup />
          </Reveal>
        </div>
      </section>

      {/* Recipes */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-lg text-center">
            <span className="eyebrow">Halvard Recipes</span>
            <h2 className="section-heading-sm mt-5">
              Ready-made automations across every pillar.
            </h2>
            <p className="mt-4 text-ink/60">
              Turn one on in a tap, tweak it to match how you work, or build
              your own from scratch.
            </p>
          </Reveal>
          <div className="mt-12">
            <RecipeCards />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/recipes"
              className="text-sm font-medium text-ink/60 underline underline-offset-4 hover:text-ink"
            >
              Browse all recipes
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container-page rounded-xl4 border border-ink/10 bg-white/60 px-6 py-10 shadow-softer sm:px-12">
          <Stats />
        </div>
      </section>

      {/* Built to order callout */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal>
            <div className="card flex flex-col items-center gap-4 border-dashed p-10 text-center sm:p-16">
              <span className="eyebrow">Built to order</span>
              <h2 className="section-heading-sm max-w-xl">
                Don&apos;t see your process listed? We build it anyway.
              </h2>
              <p className="max-w-md text-ink/60">
                Developers can use the Halvard Kitchen to build custom
                automations and connect internal tools beyond the six
                pillars.
              </p>
              <Link href="/docs" className="btn-ghost mt-2">
                Read the docs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-lg text-center">
            <span className="eyebrow">Quoted, not listed</span>
            <h2 className="section-heading-sm mt-5">
              Priced around your business, not a menu.
            </h2>
            <p className="mt-4 text-ink/60">
              We sit down with you, learn how your business runs, and quote
              exactly what&apos;s worth automating.
            </p>
          </Reveal>
          <div className="mt-12">
            <PricingProcess compact />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/pricing"
              className="text-sm font-medium text-ink/60 underline underline-offset-4 hover:text-ink"
            >
              See how pricing works
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="text-center">
            <h2 className="section-heading-sm">
              Small businesses running on Halvard.
            </h2>
          </Reveal>
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
