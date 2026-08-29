"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import BrandIcon from "./BrandIcon";
import BrowserFrame from "./BrowserFrame";

type Feature = {
  key: string;
  label: string;
  emoji: string;
  heading: string;
  body: string;
  points: string[];
  tools: string[];
  accent: string;
  dashed?: boolean;
};

const features: Feature[] = [
  {
    key: "leads",
    label: "Pipeline & Leads",
    emoji: "📈",
    heading: "A pipeline that never goes cold.",
    body: "Halvard captures, enriches, and routes leads automatically, then reaches back out to anyone who's gone quiet — before they slip away entirely.",
    points: [
      "Auto-logs calls and emails to the right deal",
      "Flags leads with no activity in 7+ days",
      "Drafts a low-pressure re-engagement message",
    ],
    tools: ["HubSpot", "Salesforce", "Pipedrive"],
    accent: "bg-cobalt",
  },
  {
    key: "follow-ups",
    label: "Follow-ups & Email",
    emoji: "✉️",
    heading: "Every thread, followed all the way through.",
    body: "Halvard sends the sequence of nudges a human would send — timed, on-brand, and persistent — until someone actually replies.",
    points: [
      "Sequences timed to feel human, not automated",
      "Stops the moment a reply comes in",
      "Escalates to you when it needs a judgment call",
    ],
    tools: ["Gmail", "Slack", "WhatsApp"],
    accent: "bg-ember",
  },
  {
    key: "invoicing",
    label: "Invoicing & Payments",
    emoji: "💸",
    heading: "Invoices that chase themselves.",
    body: "Halvard watches every invoice you send and follows up automatically the moment one goes overdue — on a tone and cadence you set.",
    points: [
      "Daily checks across your accounting tool",
      "Friendly, on-brand follow-up messages",
      "Auto-marks paid invoices, no manual reconciling",
    ],
    tools: ["Xero", "QuickBooks", "Stripe"],
    accent: "bg-signal",
  },
  {
    key: "landing-pages",
    label: "Landing Pages & Sites",
    emoji: "🖥️",
    heading: "A new page, live before the campaign is.",
    body: "Halvard designs and publishes landing pages for new campaigns and offers — on-brand, fast, and ready to update the moment something changes.",
    points: [
      "Matches your existing brand and site",
      "Live in hours, not a design-sprint away",
      "Updated the moment copy or pricing changes",
    ],
    tools: ["Google Drive", "Notion", "Calendly"],
    accent: "bg-violet",
  },
  {
    key: "daily-ops",
    label: "Daily Operations",
    emoji: "📅",
    heading: "Tomorrow, planned tonight.",
    body: "Halvard fills cancellations, syncs calendars, and gets a head start on tomorrow's work the night before — so mornings start ready.",
    points: [
      "Fills cancellations from your waitlist automatically",
      "Syncs every change to Google Calendar & Calendly",
      "Preps tomorrow's tasks before you clock in",
    ],
    tools: ["Google Calendar", "Calendly", "Asana"],
    accent: "bg-amber",
  },
  {
    key: "built-to-order",
    label: "Built to Order",
    emoji: "🛠️",
    heading: "No fixed shape by design.",
    body: "If it's repetitive, rule-based, and eating your week, Halvard can probably automate it — even if it doesn't fit neatly into a pillar above.",
    points: [
      "We scope it with you, then design the system",
      "Built on the tools you already use",
      "Reviewed and refined as your business changes",
    ],
    tools: ["Zapier", "Notion", "Trello"],
    accent: "bg-slate",
    dashed: true,
  },
];

export default function FeatureTabs() {
  const [active, setActive] = useState(features[0].key);
  const feature = features.find((f) => f.key === active)!;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {features.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`relative rounded-full px-4 py-2.5 text-sm font-semibold transition-colors sm:px-5 ${
              active === f.key ? "text-paper" : "text-ink/60 hover:text-ink"
            }`}
          >
            {active === f.key && (
              <motion.span
                layoutId="feature-pill"
                className="absolute inset-0 rounded-full bg-ink"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative flex items-center gap-1.5">
              <span>{f.emoji}</span>
              {f.label}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={feature.key}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className={`inline-block rounded-full ${feature.accent} px-3 py-1 text-xs font-bold uppercase tracking-wide text-white ${
                feature.dashed ? "border border-dashed border-white/50" : ""
              }`}
            >
              {feature.label}
            </span>
            <h3 className="section-heading-sm mt-4">{feature.heading}</h3>
            <p className="mt-4 max-w-md text-ink/60">{feature.body}</p>
            <ul className="mt-6 flex flex-col gap-3">
              {feature.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-ink/75">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink/10 text-[10px] font-bold">
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2">
              {feature.tools.map((t) => (
                <BrandIcon key={t} name={t} size={34} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={feature.key}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <BrowserFrame title={`app.halvard.com/${feature.key}`}>
              <div className="flex min-h-[260px] flex-col justify-center gap-3 bg-canvas p-6">
                <div className="flex items-center gap-3 rounded-xl2 bg-white p-4 shadow-softer">
                  <span className="text-2xl">{feature.emoji}</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{feature.heading}</p>
                    <p className="mt-1 text-xs text-ink/50">
                      Running automatically · monitored by Halvard
                    </p>
                  </div>
                  <span className={`h-2.5 w-2.5 rounded-full ${feature.accent}`} />
                </div>
                {feature.points.slice(0, 2).map((p) => (
                  <div
                    key={p}
                    className="rounded-xl2 border border-ink/10 bg-white/70 p-3 text-xs text-ink/55"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </BrowserFrame>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
