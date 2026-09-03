"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Puzzle, Plug, Radar, ClipboardList } from "lucide-react";
import { revealItem, RevealGroup } from "./Reveal";

const steps = [
  {
    number: "01",
    title: "A conversation, not a pitch",
    body: "We sit down with you — a call or a visit — and learn how your business actually runs before we talk about anything technical.",
  },
  {
    number: "02",
    title: "We scope only what's worth automating",
    body: "If part of your process doesn't need automating, we'll tell you. No padded scope, no upsell to a bigger package.",
  },
  {
    number: "03",
    title: "One fixed quote, agreed up front",
    body: "You get a clear price for the exact system before any work starts — no hourly billing, no surprise invoices.",
  },
];

const factors = [
  {
    icon: Puzzle,
    title: "How many pillars are involved",
    body: "One process automated end to end costs less than several wired together.",
  },
  {
    icon: Plug,
    title: "Tools and systems to connect",
    body: "More integrations mean more to build, test, and keep in sync.",
  },
  {
    icon: Radar,
    title: "Ongoing monitoring needed",
    body: "Some systems run and report back; others need a closer eye while they bed in.",
  },
  {
    icon: ClipboardList,
    title: "How manual it is today",
    body: "The more manual steps we're replacing, the more there is to design around.",
  },
];

export default function PricingProcess({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-col gap-16">
      <RevealGroup className="grid gap-6 sm:grid-cols-3" stagger={0.1}>
        {steps.map((s) => (
          <motion.div key={s.number} variants={revealItem} className="card p-6">
            <span className="font-display text-3xl font-medium text-ink/15">{s.number}</span>
            <h3 className="mt-3 font-display text-lg font-medium">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.body}</p>
          </motion.div>
        ))}
      </RevealGroup>

      {!compact && (
        <div>
          <p className="text-center font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink/40">
            What shapes your quote
          </p>
          <RevealGroup className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {factors.map((f) => (
              <motion.div key={f.title} variants={revealItem} className="card p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl2 bg-ink/8">
                  <f.icon className="h-4 w-4 text-ink" strokeWidth={1.75} />
                </span>
                <p className="mt-3 text-sm font-semibold leading-snug">{f.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-ink/55">{f.body}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      )}

      <div className="text-center">
        <Link href="/contact" className="btn-primary">
          Start with a conversation
        </Link>
        <p className="mt-3 text-xs text-ink/40">
          No pricing calculator — every quote is built around your business.
        </p>
      </div>
    </div>
  );
}
