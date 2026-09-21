"use client";

import { motion } from "framer-motion";
import BrandIcon from "./BrandIcon";
import BrowserFrame from "./BrowserFrame";

const schedule = [
  { task: "Follow up with 3 leads", cadence: "Every Mon, 9am", tool: "HubSpot" },
  { task: "Chase overdue invoices", cadence: "Daily, 8am", tool: "Xero" },
  { task: "Prep tomorrow's quotes", cadence: "Tonight, 6pm", tool: "QuickBooks" },
  { task: "Post review request", cadence: "2 days after job", tool: "Gmail" },
];

export default function DashboardMockup() {
  return (
    <BrowserFrame title="app.halvard.com/automations">
      <div className="bg-canvas p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-ink/70">Scheduled automations</p>
          <span className="rounded-full bg-signal/10 px-2.5 py-1 text-[11px] font-semibold text-signal-ink">
            All synced
          </span>
        </div>
        <div className="flex flex-col gap-2.5">
          {schedule.map((item, i) => (
            <motion.div
              key={item.task}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 rounded-xl2 border border-ink/6 bg-white px-3.5 py-3 shadow-softer"
            >
              <BrandIcon name={item.tool} size={30} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{item.task}</p>
                <p className="text-xs text-ink/45">{item.cadence}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}
