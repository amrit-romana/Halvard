"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Hourglass, CheckCircle2 } from "lucide-react";

const alerts = [
  {
    icon: AlertTriangle,
    title: "Unhappy client flagged",
    body: "Sentiment in the Carver thread turned negative — drafted a check-in for your review.",
    time: "2m ago",
    accent: "border-l-ink",
    iconColor: "text-ink",
  },
  {
    icon: Hourglass,
    title: "Quote #108 stalled",
    body: "No reply in 6 days. Halvard sent a gentle nudge to keep it moving.",
    time: "1h ago",
    accent: "border-l-ink",
    iconColor: "text-ink",
  },
  {
    icon: CheckCircle2,
    title: "Payment received",
    body: "Henderson & Co paid invoice #221 in full. Marked as paid in Xero.",
    time: "3h ago",
    accent: "border-l-signal",
    iconColor: "text-signal-ink",
  },
];

export default function NotificationStack() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-3">
      {alerts.map((a, i) => {
        const Icon = a.icon;
        return (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 24, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 0, y: -3 }}
            className={`flex gap-3 rounded-2xl border-l-4 bg-white p-4 shadow-lift ${a.accent}`}
          >
            <Icon className={`h-5 w-5 shrink-0 ${a.iconColor}`} strokeWidth={1.75} />
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-ink">{a.title}</p>
                <span className="whitespace-nowrap text-[11px] text-ink/35">{a.time}</span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-ink/55">{a.body}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
