"use client";

import { motion } from "framer-motion";
import { ArrowRight, MailCheck } from "lucide-react";
import BrandIcon from "./BrandIcon";
import BrowserFrame from "./BrowserFrame";

const sources = [
  { tool: "Gmail", label: "Last reply", value: "6 days ago" },
  { tool: "Google Calendar", label: "Next meeting", value: "None booked" },
  { tool: "HubSpot", label: "Deal stage", value: "Unchanged 9 days" },
];

export default function CrossCheckMockup() {
  return (
    <BrowserFrame title="app.halvard.com/activity">
      <div className="flex flex-col gap-5 bg-canvas p-5 sm:p-6">
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink/40">
          Before following up with Henderson &amp; Co
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {sources.map((s, i) => (
            <motion.div
              key={s.tool}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="flex items-center gap-3 rounded-xl2 border border-ink/10 bg-white p-3"
            >
              <BrandIcon name={s.tool} size={32} />
              <div className="min-w-0">
                <p className="truncate text-xs text-ink/45">{s.label}</p>
                <p className="truncate text-sm font-medium text-ink">{s.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center py-1">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex items-center gap-2 text-ink/30"
          >
            <span className="h-px w-10 bg-ink/15" />
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            <span className="h-px w-10 bg-ink/15" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.55 }}
          className="flex items-start gap-3 rounded-xl2 border border-signal/30 bg-signal/5 p-4"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl2 bg-signal/15">
            <MailCheck className="h-5 w-5 text-signal-ink" strokeWidth={1.75} />
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">
              Three signals agree — sending a follow-up
            </p>
            <p className="mt-1 text-xs leading-relaxed text-ink/55">
              No reply, no meeting, no movement in the deal. Halvard drafts a
              check-in referencing the last conversation, and waits for your
              review before it sends.
            </p>
          </div>
        </motion.div>
      </div>
    </BrowserFrame>
  );
}
