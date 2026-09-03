import type { Metadata } from "next";
import Link from "next/link";
import { Target, MailCheck, Receipt, LayoutTemplate, CalendarClock, Plug } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Docs — Halvard",
  description:
    "Learn what Halvard automates, how systems are built, and how to get your business connected.",
};

const capabilities = [
  {
    name: "Pipeline & Leads",
    icon: Target,
    detail:
      "Captures, enriches, and routes leads, then follows up with anyone who's gone quiet before they slip away.",
  },
  {
    name: "Follow-ups & Email",
    icon: MailCheck,
    detail:
      "Sends the sequence of nudges a human would send — timed, on-brand, and persistent — until someone replies.",
  },
  {
    name: "Invoicing & Payments",
    icon: Receipt,
    detail:
      "Watches your accounting tool and chases overdue invoices automatically, on a cadence you control.",
  },
  {
    name: "Landing Pages & Sites",
    icon: LayoutTemplate,
    detail:
      "Designs and publishes campaign pages, on-brand and live in hours instead of a design sprint.",
  },
  {
    name: "Daily Operations",
    icon: CalendarClock,
    detail:
      "Creates reminders, fills cancellations, and gets a head start on tomorrow's tasks tonight.",
  },
  {
    name: "Integrations",
    icon: Plug,
    detail:
      "Connects Google Workspace, your CRM, accounting, and messaging tools so everything stays in sync.",
  },
];

const sidebarLinks = [
  { label: "Overview", href: "#overview" },
  { label: "What you can automate", href: "#capabilities" },
  { label: "Getting started", href: "#getting-started" },
  { label: "Support", href: "#support" },
];

export default function DocsPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page-wide grid gap-12 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 flex flex-col gap-1">
            <p className="mb-3 px-3 font-mono text-xs font-medium uppercase tracking-wide text-ink/40">
              On this page
            </p>
            {sidebarLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink/60 transition hover:bg-white/60 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
        </aside>

        <div className="max-w-2xl">
          <Reveal id="overview">
            <span className="eyebrow">Documentation</span>
            <h1 className="section-heading-sm mt-5">Welcome to Halvard.</h1>
            <p className="mt-5 text-base leading-relaxed text-ink/60 sm:text-lg">
              Halvard is an AI automation studio for growing businesses. We
              design, build, and run the systems behind leads, follow-ups,
              invoicing, landing pages, and daily operations — connected to
              Google Workspace, your CRM, accounting, and messaging tools —
              so nothing falls through the cracks.
            </p>
          </Reveal>

          <div id="capabilities" className="scroll-mt-24">
            <Reveal>
              <h2 className="mt-16 font-display text-2xl font-bold">
                What you can automate
              </h2>
            </Reveal>
            <ul className="mt-6 flex flex-col gap-3">
              {capabilities.map((c, i) => (
                <Reveal key={c.name} delay={i * 0.05}>
                  <li className="flex gap-4 rounded-xl2 border border-ink/10 bg-white/60 p-4 shadow-softer">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl2 bg-ink/8">
                      <c.icon className="h-4 w-4 text-ink" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-medium">{c.name}</p>
                      <p className="mt-1 text-sm text-ink/60">{c.detail}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div id="getting-started" className="scroll-mt-24">
            <Reveal>
              <h2 className="mt-16 font-display text-2xl font-bold">
                Getting started
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <ol className="mt-6 flex flex-col gap-4">
                {[
                  "Tell us what's eating your week — a form, a call, or a message all work.",
                  "We scope the system and connect your first integration, starting with email and calendar.",
                  "Add your CRM and accounting tools from your dashboard whenever you're ready.",
                  "Review the first drafts, then decide what runs on autopilot.",
                ].map((step, i) => (
                  <li key={step} className="flex gap-4 text-sm text-ink/70">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-paper">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <div id="support" className="scroll-mt-24">
            <Reveal>
              <div className="mt-16 rounded-xl3 border border-ink/10 bg-white/70 p-6 shadow-softer">
                <p className="text-sm text-ink/70">
                  Need help? Reach us at{" "}
                  <a
                    href="mailto:connectwithhalvard@gmail.com"
                    className="font-medium text-ink underline underline-offset-4"
                  >
                    connectwithhalvard@gmail.com
                  </a>
                  .
                </p>
                <Link href="/pricing" className="btn-primary mt-4 inline-flex">
                  Sign up
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
