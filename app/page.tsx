import Link from "next/link";
import Marquee from "@/components/Marquee";
import PillarGrid from "@/components/PillarGrid";
import RecipeCards from "@/components/RecipeCards";
import PricingProcess from "@/components/PricingProcess";
import Testimonials from "@/components/Testimonials";
import DashboardMockup from "@/components/DashboardMockup";
import NotificationStack from "@/components/NotificationStack";
import PhoneMockup from "@/components/PhoneMockup";
import CrossCheckMockup from "@/components/CrossCheckMockup";
import HeroVisual from "@/components/HeroVisual";
import FeatureRow from "@/components/FeatureRow";
import FAQ from "@/components/FAQ";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Orbs from "@/components/Orbs";
import RotatingWord from "@/components/RotatingWord";

export default function Home() {
  return (
    <>
      {/* Hero — centered, orbs behind, big mockup below */}
      <section className="relative overflow-hidden pb-8 pt-20 sm:pt-28">
        <Orbs />
        <div className="container-page flex flex-col items-center text-center">
          <Reveal>
            <span className="eyebrow">AI Automation Studio</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="section-heading mt-6 max-w-4xl">
              Put your{" "}
              <span className="italic text-signal-ink">
                <RotatingWord
                  words={[
                    "leads",
                    "invoices",
                    "follow-ups",
                    "quotes",
                    "operations",
                    "busywork",
                  ]}
                />
              </span>
              <br />
              on autopilot.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-stone">
              Halvard designs, builds, and runs the automation behind the
              work your business does by hand — wired into the tools you
              already use, right down to the legacy software nobody wants to
              touch.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link href="/pricing" className="btn-primary">
                Get Started
              </Link>
              <Link href="/how-it-works" className="btn-ghost">
                See how it works
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.12em] text-stone">
              Works across 85+ tools · One fixed quote · Live in days
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.28} y={40} className="mt-16">
          <div className="container-page">
            <HeroVisual />
          </div>
        </Reveal>
      </section>

      {/* Logo wall */}
      <section className="py-16 sm:py-20">
        <Reveal>
          <p className="mb-8 text-center font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink/40">
            Works inside the tools you already run your business on
          </p>
        </Reveal>
        <Marquee />
      </section>

      {/* Why Halvard automation holds up */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading-sm">
              Automation that actually holds up.
            </h2>
            <p className="mt-4 text-lg text-ink/60">
              Not a chatbot you have to babysit. Systems we build to check
              their own work, run on schedule, and handle the repetitive
              parts of your operations without supervision.
            </p>
          </Reveal>

          <div className="mt-16 flex flex-col gap-24 sm:gap-32">
            <FeatureRow
              number="01"
              label="Checks before it acts"
              heading="Cross-references every tool before it moves."
              body="Halvard reads inbox, calendar, and CRM together before deciding a client needs a nudge — so it never chases someone who already replied or already has a meeting booked."
              href="/how-it-works"
              mockup={<CrossCheckMockup />}
            />
            <FeatureRow
              number="02"
              label="Runs on your schedule"
              heading="Handles work on a cadence, not just on request."
              body="It chases clients on the schedule you set and gets a head start on tomorrow's work tonight — all synced with the tools you already use, running while you sleep."
              href="/how-it-works"
              linkText="See a full walkthrough"
              mockup={<DashboardMockup />}
              reversed
            />
            <FeatureRow
              number="03"
              label="Proactive by default"
              heading="Flags what needs you before you go looking."
              body="An unhappy client, a stalled quote, a payment that just landed — Halvard surfaces what matters and drafts the next step, so you just have to say go."
              href="/product"
              linkText="Explore proactive alerts"
              mockup={<NotificationStack />}
            />
            <FeatureRow
              number="04"
              label="Wherever you already are"
              heading="Approvals land where you actually work."
              body="Text, WhatsApp, Slack, or email — Halvard sends what needs a decision to whichever channel you check first, and handles the rest without waiting on you."
              href="/integrations"
              linkText="See supported channels"
              mockup={<PhoneMockup />}
              reversed
            />
          </div>
        </div>
      </section>

      {/* What we automate */}
      <section id="pillars" className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading-sm">What teams hand to Halvard.</h2>
            <p className="mt-4 text-lg text-ink/60">
              Six pillars of work, each running on its own — and if yours
              doesn&apos;t fit, that&apos;s what the sixth one is for.
            </p>
          </Reveal>
          <div className="mt-14">
            <PillarGrid />
          </div>
          <div className="mt-10 text-center">
            <Link href="/product" className="btn-ghost">
              See how each pillar works
            </Link>
          </div>
        </div>
      </section>

      {/* Recipes */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading-sm">
              Ready-made automations to start from.
            </h2>
            <p className="mt-4 text-lg text-ink/60">
              Turn one on in a tap, tweak it to match how you work, or have
              us build one from scratch.
            </p>
          </Reveal>
          <div className="mt-14">
            <RecipeCards />
          </div>
          <div className="mt-10 text-center">
            <Link href="/recipes" className="btn-ghost">
              Browse all recipes
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container-page rounded-xl4 border border-ink/10 bg-white/60 px-6 py-12 sm:px-12">
          <Stats />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading-sm">
              Small businesses running on Halvard.
            </h2>
          </Reveal>
          <div className="mt-14">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading-sm">
              Priced around your business, not a menu.
            </h2>
            <p className="mt-4 text-lg text-ink/60">
              We sit down with you, learn how your business runs, and quote
              exactly what&apos;s worth automating.
            </p>
          </Reveal>
          <div className="mt-14">
            <PricingProcess compact />
          </div>
          <div className="mt-10 text-center">
            <Link href="/pricing" className="btn-ghost">
              See how pricing works
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading-sm">Questions, answered.</h2>
          </Reveal>
          <div className="mt-12">
            <FAQ />
          </div>
        </div>
      </section>

      <CTASection heading="Ready when you are." />
    </>
  );
}
