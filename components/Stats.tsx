"use client";

import { RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";

const stats = [
  { value: "12,000+", label: "tasks handled weekly" },
  { value: "4.3 min", label: "average response time" },
  { value: "18", label: "integrations supported" },
  { value: "500+", label: "small businesses onboard" },
];

export default function Stats() {
  return (
    <RevealGroup className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
      {stats.map((s) => (
        <motion.div key={s.label} variants={revealItem} className="text-center">
          <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            {s.value}
          </p>
          <p className="mt-1 text-xs text-ink/50 sm:text-sm">{s.label}</p>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
