"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  LayoutGrid,
  Inbox,
  Receipt,
  CalendarClock,
  Settings2,
  Check,
  Sparkles,
} from "lucide-react";

const rail = [LayoutGrid, Inbox, Receipt, CalendarClock, Settings2];

const done = [
  "Chased 3 overdue invoices in Xero",
  "Revived 12 cold leads in HubSpot",
  "Re-keyed yesterday's orders into SAP",
  "Sent Monday's recap to the team",
];

const running = "Reconciling this week's payments";

const cards = [
  { title: "Invoice #221 paid", body: "Henderson & Co · matched to job", tone: "signal" },
  { title: "Tomorrow, prepped", body: "9 tasks queued for the morning", tone: "ink" },
];

export default function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      {/* Warm backdrop panel the window floats on */}
      <div className="absolute inset-x-2 -inset-y-4 -z-10 rounded-[2rem] bg-surface-2/70 sm:inset-x-6" />

      {/* App window */}
      <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-lift">
        {/* Title bar */}
        <div className="flex items-center gap-3 border-b border-ink/8 px-4 py-2.5">
          <div className="flex gap-1">
            <span className="h-0.5 w-3 rounded-full bg-ink/15" />
            <span className="h-0.5 w-3 rounded-full bg-ink/15" />
          </div>
          <div className="mx-auto rounded-full bg-ink/5 px-3 py-1 text-[11px] text-ink/40">
            halvard.app / workspace
          </div>
        </div>

        <div className="flex">
          {/* Icon rail */}
          <div className="hidden flex-col items-center gap-1 border-r border-ink/8 py-4 sm:flex">
            {rail.map((Icon, i) => (
              <span
                key={i}
                className={`flex h-9 w-9 items-center justify-center rounded-xl2 ${
                  i === 0 ? "bg-ink text-white" : "text-ink/35"
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
            ))}
          </div>

          {/* Main panel */}
          <div className="min-w-0 flex-1 p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-lg text-ink">Today&apos;s automations</p>
                <p className="mt-0.5 text-xs text-ink/45">Running while you focus elsewhere</p>
              </div>
              <span className="rounded-md bg-signal/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-signal-ink">
                Live
              </span>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              {done.map((task, i) => (
                <motion.div
                  key={task}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  className="flex items-center gap-3 rounded-xl2 border border-ink/8 bg-white px-3.5 py-2.5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal/12">
                    <Check className="h-3 w-3 text-signal-ink" strokeWidth={2.5} />
                  </span>
                  <span className="truncate text-sm text-ink/70">{task}</span>
                </motion.div>
              ))}

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + done.length * 0.1 }}
                className="flex items-center gap-3 rounded-xl2 border border-ink/15 bg-white px-3.5 py-3 shadow-softer"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink/8">
                  <Sparkles className="h-3 w-3 text-ink/60" strokeWidth={2} />
                </span>
                <span className="truncate text-sm font-medium text-ink">{running}</span>
                <span className="ml-auto text-[11px] text-ink/35">now</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification cards */}
      {cards.map((c, i) => (
        <motion.div
          key={c.title}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
          className={`absolute hidden w-56 rounded-xl2 border border-ink/10 bg-white p-3.5 shadow-lift lg:block ${
            i === 0 ? "-right-10 top-16" : "-right-6 bottom-16"
          }`}
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, i === 0 ? -6 : 6, 0] }}
            transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-2">
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full ${
                  c.tone === "signal" ? "bg-signal/12" : "bg-ink/8"
                }`}
              >
                <Check
                  className={`h-3 w-3 ${c.tone === "signal" ? "text-signal-ink" : "text-ink/60"}`}
                  strokeWidth={2.5}
                />
              </span>
              <p className="text-xs font-semibold text-ink">{c.title}</p>
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-ink/50">{c.body}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
