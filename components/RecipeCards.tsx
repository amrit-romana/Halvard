"use client";

import { motion } from "framer-motion";
import {
  Flame,
  Magnet,
  ClipboardList,
  MailCheck,
  UserPlus,
  RotateCcw,
  Receipt,
  FileText,
  CheckCircle2,
  LayoutTemplate,
  RefreshCw,
  FlaskConical,
  CalendarClock,
  Moon,
  BarChart3,
  Wrench,
  Plug,
  Puzzle,
  type LucideIcon,
} from "lucide-react";
import { revealItem, RevealGroup } from "./Reveal";

export type Recipe = {
  tag: string;
  icon: LucideIcon;
  title: string;
  body: string;
  color: string;
  dashed?: boolean;
};

const NEUTRAL = "bg-ink/8 text-ink";
const SIGNAL = "bg-signal/10 text-signal-ink";

export const allRecipes: Recipe[] = [
  // Pipeline & Leads
  {
    tag: "Pipeline & Leads",
    icon: Flame,
    title: "Revive a cold lead",
    body: "Spots leads that have gone quiet in your CRM and drafts a low-pressure check-in to get the conversation moving again.",
    color: NEUTRAL,
  },
  {
    tag: "Pipeline & Leads",
    icon: Magnet,
    title: "Enrich a new inquiry",
    body: "The moment a lead comes in, looks up their company and role, then routes them to the right person automatically.",
    color: NEUTRAL,
  },
  {
    tag: "Pipeline & Leads",
    icon: ClipboardList,
    title: "Log every call and email",
    body: "Matches calls and emails to the right deal in your CRM so pipeline reporting is always accurate, with zero manual entry.",
    color: NEUTRAL,
  },
  // Follow-ups & Email
  {
    tag: "Follow-ups & Email",
    icon: MailCheck,
    title: "Chase an unanswered quote",
    body: "Sends a sequence of friendly nudges until someone replies — timed so it never feels pushy.",
    color: NEUTRAL,
  },
  {
    tag: "Follow-ups & Email",
    icon: UserPlus,
    title: "Welcome a new client",
    body: "Sends a warm onboarding sequence the moment a deal closes, so nothing about getting started falls through the cracks.",
    color: NEUTRAL,
  },
  {
    tag: "Follow-ups & Email",
    icon: RotateCcw,
    title: "Re-engage a churned client",
    body: "Reaches out on a schedule to past clients who haven't booked in a while, with an offer worth coming back for.",
    color: NEUTRAL,
  },
  // Invoicing & Payments
  {
    tag: "Invoicing & Payments",
    icon: Receipt,
    title: "Chase an overdue invoice",
    body: "Checks your accounting tool daily and sends polite, on-brand follow-ups the moment an invoice goes overdue.",
    color: SIGNAL,
  },
  {
    tag: "Invoicing & Payments",
    icon: FileText,
    title: "Draft a quote from history",
    body: "Pulls pricing from your last similar job and drafts a ready-to-send quote, waiting on your review before it goes out.",
    color: SIGNAL,
  },
  {
    tag: "Invoicing & Payments",
    icon: CheckCircle2,
    title: "Reconcile paid invoices",
    body: "Marks invoices paid the moment payment lands and matches it against the right job, no manual bookkeeping required.",
    color: SIGNAL,
  },
  // Landing Pages & Sites
  {
    tag: "Landing Pages & Sites",
    icon: LayoutTemplate,
    title: "Launch a campaign page",
    body: "Builds and publishes a new landing page for a campaign or offer, on-brand and ready in hours, not weeks.",
    color: NEUTRAL,
  },
  {
    tag: "Landing Pages & Sites",
    icon: RefreshCw,
    title: "Update pricing across the site",
    body: "Pushes a pricing or copy change to every page it appears on at once, so nothing goes stale after launch.",
    color: NEUTRAL,
  },
  {
    tag: "Landing Pages & Sites",
    icon: FlaskConical,
    title: "Spin up an A/B test page",
    body: "Publishes a variant of a page for testing, then reports back which version actually converts better.",
    color: NEUTRAL,
  },
  // Daily Operations
  {
    tag: "Daily Operations",
    icon: CalendarClock,
    title: "Fill a last-minute cancellation",
    body: "The moment a booking is cancelled, texts your waitlist to offer the freed-up slot — first to reply gets it.",
    color: NEUTRAL,
  },
  {
    tag: "Daily Operations",
    icon: Moon,
    title: "Prep tomorrow tonight",
    body: "Reviews tomorrow's schedule tonight, flags conflicts, and preps the tasks so the day starts ready to go.",
    color: NEUTRAL,
  },
  {
    tag: "Daily Operations",
    icon: BarChart3,
    title: "Monday morning recap",
    body: "A short summary of last week's jobs, payments, and open quotes, delivered before your first coffee.",
    color: NEUTRAL,
  },
  // Built to Order
  {
    tag: "Built to Order",
    icon: Wrench,
    title: "Whatever else eats your week",
    body: "No fixed shape by design. Tell us the repetitive task and we'll design a system that handles it.",
    color: NEUTRAL,
    dashed: true,
  },
  {
    tag: "Built to Order",
    icon: Plug,
    title: "Connect a tool we don't list",
    body: "If it has an API, we can probably wire it into the rest of your systems — no fixed integration list.",
    color: NEUTRAL,
    dashed: true,
  },
  {
    tag: "Built to Order",
    icon: Puzzle,
    title: "Combine two pillars into one flow",
    body: "Some processes cross pillars — a lead that becomes an invoice that becomes a landing page update. We build the whole chain.",
    color: NEUTRAL,
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
      {recipes.map((r) => {
        const Icon = r.icon;
        return (
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
              <Icon className="h-5 w-5 text-ink/70" strokeWidth={1.75} />
            </div>
            <h3 className="font-display text-xl font-bold leading-snug">
              {r.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink/60">{r.body}</p>
          </motion.div>
        );
      })}
    </RevealGroup>
  );
}
