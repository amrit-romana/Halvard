"use client";

import { motion } from "framer-motion";
import { ClipboardList, Wrench, CheckCircle2 } from "lucide-react";
import BrowserFrame from "./BrowserFrame";

const columns = [
  {
    key: "SCOPING",
    label: "Scoping",
    icon: ClipboardList,
    jobs: [{ client: "Marlow Dental", job: "Intake automation", days: "2d" }],
  },
  {
    key: "IN_PROGRESS",
    label: "In progress",
    icon: Wrench,
    jobs: [
      { client: "Redgate Roofing", job: "Lead follow-up flow", days: "6d" },
      { client: "Northside Physio", job: "Invoice reminders", days: "3d" },
    ],
  },
  {
    key: "LIVE",
    label: "Live",
    icon: CheckCircle2,
    jobs: [{ client: "Henderson & Co", job: "Client onboarding", days: "Running" }],
  },
] as const;

export default function JobTrackerMockup() {
  return (
    <BrowserFrame title="app.halvard.com/jobs">
      <div className="grid gap-3 bg-canvas p-5 sm:grid-cols-3 sm:p-6">
        {columns.map((col, ci) => (
          <div key={col.key} className="flex flex-col gap-2.5">
            <div className="flex items-center gap-1.5 px-0.5">
              <col.icon
                className={col.key === "LIVE" ? "h-3.5 w-3.5 text-signal-ink" : "h-3.5 w-3.5 text-ink/50"}
                strokeWidth={1.75}
              />
              <p className="font-mono text-[10px] font-medium uppercase tracking-wide text-ink/45">
                {col.label}
              </p>
              <span className="ml-auto text-[10px] text-ink/30">{col.jobs.length}</span>
            </div>
            <div className="flex flex-col gap-2">
              {col.jobs.map((j, ji) => (
                <motion.div
                  key={j.client}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: ci * 0.12 + ji * 0.08 }}
                  className={`rounded-xl2 border p-3 ${
                    col.key === "LIVE"
                      ? "border-signal/25 bg-signal/5"
                      : "border-ink/10 bg-white"
                  }`}
                >
                  <p className="text-xs font-semibold text-ink">{j.client}</p>
                  <p className="mt-0.5 text-[11px] text-ink/55">{j.job}</p>
                  <p
                    className={`mt-2 text-[10px] font-medium ${
                      col.key === "LIVE" ? "text-signal-ink" : "text-ink/35"
                    }`}
                  >
                    {j.days}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}
