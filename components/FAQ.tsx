"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What does Halvard actually do?",
    a: "We design, build, and run automated systems for your business — lead capture and follow-up, invoicing, quoting, landing pages, and the repetitive daily operations your team does by hand. The automation runs inside the tools you already use.",
  },
  {
    q: "Does it only work with Google tools?",
    a: "No. Google Workspace is common, but Halvard automates across HubSpot, Salesforce, Pipedrive, Xero, QuickBooks, Stripe, Slack, WhatsApp, Notion, Airtable, Microsoft 365, and even older enterprise software like SAP. If it has a login or an API, we can usually automate work inside it.",
  },
  {
    q: "Can it handle work stuck in legacy software?",
    a: "Yes — that's often the highest-value work. We automate the clunky, repetitive tasks nobody wants to touch: re-keying invoices into old accounting tools, exporting batches from a legacy ERP, reconciling PDF statements. The system does it every day without complaint.",
  },
  {
    q: "Will it do things without asking me?",
    a: "Only where you tell it to. Every action is drafted first — you review and send with one tap. For the systems you trust completely, you flip on autopilot and it runs on its own. You stay in control of that line.",
  },
  {
    q: "How does pricing work?",
    a: "There's no menu and no per-seat calculator. We sit down with you, learn how your business runs, and quote a fixed price for the exact system worth building. You get that price up front, before any work starts.",
  },
  {
    q: "How long does it take to get running?",
    a: "Most first systems are live within days, not months. We scope what's worth automating, connect your first tools, and get the automation running — then expand from there as you see it pay off.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={f.q}
            className="overflow-hidden rounded-xl2 border border-ink/10 bg-white/70"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-semibold text-ink">
                {f.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0 text-ink/50"
              >
                <Plus className="h-5 w-5" strokeWidth={1.75} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-ink/60">
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
