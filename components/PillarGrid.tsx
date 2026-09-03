"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Target, MailCheck, Receipt, LayoutTemplate, CalendarClock, Wrench, type LucideIcon } from "lucide-react";
import { revealItem, RevealGroup } from "./Reveal";
import { getAccent } from "./pillarAccent";

export type Pillar = {
  key: string;
  icon: LucideIcon;
  name: string;
  body: string;
  dashed?: boolean;
};

export const pillars: Pillar[] = [
  {
    key: "leads",
    icon: Target,
    name: "Pipeline & Leads",
    body: "Capture, enrich, route, and revive leads before they go cold.",
  },
  {
    key: "follow-ups",
    icon: MailCheck,
    name: "Follow-ups & Email",
    body: "Sequences and nudges that keep every thread moving.",
  },
  {
    key: "invoicing",
    icon: Receipt,
    name: "Invoicing & Payments",
    body: "Quotes, invoices, and the chase for a paid one.",
  },
  {
    key: "landing-pages",
    icon: LayoutTemplate,
    name: "Landing Pages & Sites",
    body: "Builds and updates the pages a campaign needs.",
  },
  {
    key: "daily-ops",
    icon: CalendarClock,
    name: "Daily Operations",
    body: "The recurring tasks a business runs every day, on autopilot.",
  },
  {
    key: "built-to-order",
    icon: Wrench,
    name: "Built to Order",
    body: "No fixed shape by design — if it can be automated, this is where it lives.",
    dashed: true,
  },
];

export default function PillarGrid({ linkTo }: { linkTo?: (key: string) => string }) {
  return (
    <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
      {pillars.map((p) => {
        const Icon = p.icon;
        const accent = getAccent(p.name);
        const content = (
          <motion.div
            variants={revealItem}
            whileHover={{ y: -4 }}
            className={`card flex h-full flex-col gap-3 border-l-4 p-6 border-l-current ${accent.text} ${
              p.dashed ? "border-dashed" : ""
            }`}
          >
            <span className={`flex h-10 w-10 items-center justify-center rounded-xl2 ${accent.tint}`}>
              <Icon className={`h-5 w-5 ${accent.text}`} strokeWidth={1.75} />
            </span>
            <p className={`font-display text-base font-bold text-ink`}>{p.name}</p>
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
