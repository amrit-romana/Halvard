"use client";

import { motion } from "framer-motion";
import { revealItem, RevealGroup } from "./Reveal";

export type Recipe = {
  tag: string;
  emoji: string;
  title: string;
  body: string;
  color: string;
  dashed?: boolean;
};

export const allRecipes: Recipe[] = [
  // Pipeline & Leads
  {
    tag: "Pipeline & Leads",
    emoji: "📈",
    title: "Revive a cold lead",
    body: "Spots leads that have gone quiet in your CRM and drafts a low-pressure check-in to get the conversation moving again.",
    color: "bg-cobalt/10 text-cobalt",
  },
  {
    tag: "Pipeline & Leads",
    emoji: "🧲",
    title: "Enrich a new inquiry",
    body: "The moment a lead comes in, looks up their company and role, then routes them to the right person automatically.",
    color: "bg-cobalt/10 text-cobalt",
  },
  {
    tag: "Pipeline & Leads",
    emoji: "🗂️",
    title: "Log every call and email",
    body: "Matches calls and emails to the right deal in your CRM so pipeline reporting is always accurate, with zero manual entry.",
    color: "bg-cobalt/10 text-cobalt",
  },
  // Follow-ups & Email
  {
    tag: "Follow-ups & Email",
    emoji: "✉️",
    title: "Chase an unanswered quote",
    body: "Sends a sequence of friendly nudges until someone replies — timed so it never feels pushy.",
    color: "bg-ember/10 text-ember",
  },
  {
    tag: "Follow-ups & Email",
    emoji: "🙋",
    title: "Welcome a new client",
    body: "Sends a warm onboarding sequence the moment a deal closes, so nothing about getting started falls through the cracks.",
    color: "bg-ember/10 text-ember",
  },
  {
    tag: "Follow-ups & Email",
    emoji: "🔁",
    title: "Re-engage a churned client",
    body: "Reaches out on a schedule to past clients who haven't booked in a while, with an offer worth coming back for.",
    color: "bg-ember/10 text-ember",
  },
  // Invoicing & Payments
  {
    tag: "Invoicing & Payments",
    emoji: "💸",
    title: "Chase an overdue invoice",
    body: "Checks your accounting tool daily and sends polite, on-brand follow-ups the moment an invoice goes overdue.",
    color: "bg-signal/10 text-signal-ink",
  },
  {
    tag: "Invoicing & Payments",
    emoji: "🧾",
    title: "Draft a quote from history",
    body: "Pulls pricing from your last similar job and drafts a ready-to-send quote, waiting on your review before it goes out.",
    color: "bg-signal/10 text-signal-ink",
  },
  {
    tag: "Invoicing & Payments",
    emoji: "✅",
    title: "Reconcile paid invoices",
    body: "Marks invoices paid the moment payment lands and matches it against the right job, no manual bookkeeping required.",
    color: "bg-signal/10 text-signal-ink",
  },
  // Landing Pages & Sites
  {
    tag: "Landing Pages & Sites",
    emoji: "🖥️",
    title: "Launch a campaign page",
    body: "Builds and publishes a new landing page for a campaign or offer, on-brand and ready in hours, not weeks.",
    color: "bg-violet/10 text-violet",
  },
  {
    tag: "Landing Pages & Sites",
    emoji: "🔄",
    title: "Update pricing across the site",
    body: "Pushes a pricing or copy change to every page it appears on at once, so nothing goes stale after launch.",
    color: "bg-violet/10 text-violet",
  },
  {
    tag: "Landing Pages & Sites",
    emoji: "🧪",
    title: "Spin up an A/B test page",
    body: "Publishes a variant of a page for testing, then reports back which version actually converts better.",
    color: "bg-violet/10 text-violet",
  },
  // Daily Operations
  {
    tag: "Daily Operations",
    emoji: "📅",
    title: "Fill a last-minute cancellation",
    body: "The moment a booking is cancelled, texts your waitlist to offer the freed-up slot — first to reply gets it.",
    color: "bg-amber/10 text-amber",
  },
  {
    tag: "Daily Operations",
    emoji: "🌙",
    title: "Prep tomorrow tonight",
    body: "Reviews tomorrow's schedule tonight, flags conflicts, and preps the tasks so the day starts ready to go.",
    color: "bg-amber/10 text-amber",
  },
  {
    tag: "Daily Operations",
    emoji: "📊",
    title: "Monday morning recap",
    body: "A short summary of last week's jobs, payments, and open quotes, delivered before your first coffee.",
    color: "bg-amber/10 text-amber",
  },
  // Built to Order
  {
    tag: "Built to Order",
    emoji: "🛠️",
    title: "Whatever else eats your week",
    body: "No fixed shape by design. Tell us the repetitive task and we'll design a system that handles it.",
    color: "bg-slate/10 text-slate",
    dashed: true,
  },
  {
    tag: "Built to Order",
    emoji: "🔌",
    title: "Connect a tool we don't list",
    body: "If it has an API, we can probably wire it into the rest of your systems — no fixed integration list.",
    color: "bg-slate/10 text-slate",
    dashed: true,
  },
  {
    tag: "Built to Order",
    emoji: "🧩",
    title: "Combine two pillars into one flow",
    body: "Some processes cross pillars — a lead that becomes an invoice that becomes a landing page update. We build the whole chain.",
    color: "bg-slate/10 text-slate",
    dashed: true,
  },
];

export default function RecipeCards({
  recipes = allRecipes.slice(0, 3),
}: {
  recipes?: Recipe[];
}) {
  return (
    <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
      {recipes.map((r) => (
        <motion.div
          key={r.title}
          variants={revealItem}
          whileHover={{ y: -6 }}
          className={`card flex flex-col gap-3 p-6 transition-transform ${
            r.dashed ? "border-dashed" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <span
              className={`w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${r.color}`}
            >
              {r.tag}
            </span>
            <span className="text-2xl">{r.emoji}</span>
          </div>
          <h3 className="font-display text-xl font-bold leading-snug">
            {r.title}
          </h3>
          <p className="text-sm leading-relaxed text-ink/60">{r.body}</p>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
