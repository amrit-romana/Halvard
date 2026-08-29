"use client";

import { motion } from "framer-motion";

const alerts = [
  {
    icon: "⚠️",
    title: "Unhappy client flagged",
    body: "Sentiment in the Carver thread turned negative — drafted a check-in for your review.",
    time: "2m ago",
    accent: "border-l-ember",
  },
  {
    icon: "⏳",
    title: "Quote #108 stalled",
    body: "No reply in 6 days. Halvard sent a gentle nudge to keep it moving.",
    time: "1h ago",
    accent: "border-l-amber",
  },
  {
    icon: "💸",
    title: "Payment received",
    body: "Henderson & Co paid invoice #221 in full. Marked as paid in Xero.",
    time: "3h ago",
    accent: "border-l-signal",
  },
];

export default function NotificationStack() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-3">
      {alerts.map((a, i) => (
        <motion.div
          key={a.title}
          initial={{ opacity: 0, y: 24, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ rotate: 0, y: -3 }}
          className={`flex gap-3 rounded-2xl border-l-4 bg-white p-4 shadow-lift ${a.accent}`}
        >
          <span className="text-xl leading-none">{a.icon}</span>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-semibold text-ink">{a.title}</p>
              <span className="whitespace-nowrap text-[11px] text-ink/35">{a.time}</span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-ink/55">{a.body}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
