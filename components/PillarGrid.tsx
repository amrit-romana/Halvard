"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { revealItem, RevealGroup } from "./Reveal";

export type Pillar = {
  key: string;
  emoji: string;
  name: string;
  body: string;
  color: string;
  border: string;
  dashed?: boolean;
};

export const pillars: Pillar[] = [
  {
    key: "leads",
    emoji: "📈",
    name: "Pipeline & Leads",
    body: "Capture, enrich, route, and revive leads before they go cold.",
    color: "text-cobalt",
    border: "border-l-cobalt",
  },
  {
    key: "follow-ups",
    emoji: "✉️",
    name: "Follow-ups & Email",
    body: "Sequences and nudges that keep every thread moving.",
    color: "text-ember",
    border: "border-l-ember",
  },
  {
    key: "invoicing",
    emoji: "💸",
    name: "Invoicing & Payments",
    body: "Quotes, invoices, and the chase for a paid one.",
    color: "text-signal-ink",
    border: "border-l-signal",
  },
  {
    key: "landing-pages",
    emoji: "🖥️",
    name: "Landing Pages & Sites",
    body: "Builds and updates the pages a campaign needs.",
    color: "text-violet",
    border: "border-l-violet",
  },
  {
    key: "daily-ops",
    emoji: "📅",
    name: "Daily Operations",
    body: "The recurring tasks a business runs every day, on autopilot.",
    color: "text-amber",
    border: "border-l-amber",
  },
  {
    key: "built-to-order",
    emoji: "🛠️",
    name: "Built to Order",
    body: "No fixed shape by design — if it can be automated, this is where it lives.",
    color: "text-slate",
    border: "border-l-slate",
    dashed: true,
  },
];

export default function PillarGrid({ linkTo }: { linkTo?: (key: string) => string }) {
  return (
    <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
      {pillars.map((p) => {
        const content = (
          <motion.div
            variants={revealItem}
            whileHover={{ y: -4 }}
            className={`card flex h-full flex-col gap-2 border-l-4 p-6 ${p.border} ${
              p.dashed ? "border-dashed" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl">{p.emoji}</span>
            </div>
            <p className={`font-display text-base font-bold ${p.color}`}>{p.name}</p>
            <p className="text-sm leading-relaxed text-ink/60">{p.body}</p>
          </motion.div>
        );

        return linkTo ? (
          <Link key={p.key} href={linkTo(p.key)} className="block h-full">
            {content}
          </Link>
        ) : (
          <div key={p.key}>{content}</div>
        );
      })}
    </RevealGroup>
  );
}
