"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import BrowserFrame from "./BrowserFrame";

const staff = [
  { name: "Dana Ruiz", role: "Site technician", status: "Available", job: null },
  { name: "Marcus Ellwood", role: "Site technician", status: "On a job", job: "Redgate Roofing — 11:00" },
  { name: "Priya Nair", role: "Install lead", status: "On a job", job: "Northside Physio — 2:30" },
  { name: "Tomas Vidal", role: "Site technician", status: "Off today", job: null },
];


export default function StaffMockup() {
  return (
    <BrowserFrame title="app.halvard.com/team">
      <div className="flex flex-col gap-3 bg-canvas p-5 sm:p-6">
        {staff.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="flex items-center gap-3 rounded-xl2 border border-ink/10 bg-white p-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink/8 text-xs font-bold text-ink">
              {s.name
                .split(" ")
                .map((p) => p[0])
                .join("")}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink">{s.name}</p>
              <p className="truncate text-[11px] text-ink/50">{s.job ?? s.role}</p>
            </div>
            <div className="flex shrink-0 items-center">
              <span className="text-[11px] font-medium text-ink/55">{s.status}</span>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.4 }}
          className="flex items-center gap-2.5 rounded-xl2 border border-signal/25 bg-signal/5 p-3"
        >
          <Zap className="h-4 w-4 shrink-0 text-signal-ink" strokeWidth={1.75} />
          <p className="text-[11px] leading-relaxed text-ink/65">
            New job assigned to <span className="font-semibold text-ink">Dana Ruiz</span> — next
            available with the right skill set.
          </p>
        </motion.div>
      </div>
    </BrowserFrame>
  );
}
