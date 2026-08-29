"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import BrowserFrame from "./BrowserFrame";

export default function ApprovalCard() {
  const [auto, setAuto] = useState(false);

  return (
    <BrowserFrame title="app.halvard.com/approvals">
      <div className="flex flex-col gap-4 bg-canvas p-5">
        <div className="flex items-center justify-between rounded-xl2 border border-ink/6 bg-white p-4">
          <div>
            <p className="text-sm font-semibold">Autopilot mode</p>
            <p className="mt-0.5 text-xs text-ink/50">
              {auto ? "Halvard sends without waiting" : "Halvard waits for your review"}
            </p>
          </div>
          <button
            onClick={() => setAuto((v) => !v)}
            className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
              auto ? "bg-signal" : "bg-ink/15"
            }`}
          >
            <motion.span
              className="absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm"
              animate={{ left: auto ? 26 : 4 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
        </div>

        <div className="rounded-xl2 border border-ink/6 bg-white p-4 shadow-softer">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
            Drafted quote #114
          </p>
          <p className="mt-2 text-sm text-ink/70">
            Millar deck job — $2,450, based on job #98. Ready to send to
            millar@email.com.
          </p>
          <div className="mt-3 flex gap-2">
            <span className="rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-paper">
              {auto ? "Sending automatically…" : "Approve & send"}
            </span>
            {!auto && (
              <span className="rounded-full border border-ink/15 px-4 py-1.5 text-xs font-semibold text-ink/60">
                Edit first
              </span>
            )}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
