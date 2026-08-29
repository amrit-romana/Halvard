"use client";

import { motion } from "framer-motion";
import { revealItem, RevealGroup } from "./Reveal";

const testimonials = [
  {
    quote:
      "Placeholder testimonial — replace with a real, permission-given quote before launch.",
    name: "Placeholder Name",
    role: "Placeholder Business",
    color: "bg-signal",
  },
  {
    quote:
      "Placeholder testimonial — replace with a real, permission-given quote before launch.",
    name: "Placeholder Name",
    role: "Placeholder Business",
    color: "bg-cobalt",
  },
  {
    quote:
      "Placeholder testimonial — replace with a real, permission-given quote before launch.",
    name: "Placeholder Name",
    role: "Placeholder Business",
    color: "bg-slate",
  },
];

export default function Testimonials() {
  return (
    <RevealGroup className="grid gap-5 sm:grid-cols-3" stagger={0.1}>
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          variants={revealItem}
          whileHover={{ y: -5 }}
          className="card flex flex-col gap-4 p-6"
        >
          <span className="w-fit rounded-full bg-ink/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink/40">
            Placeholder
          </span>
          <p className="font-display text-base leading-relaxed text-ink/80">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="mt-auto flex items-center gap-3">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white ${t.color}`}
            >
              {t.name.slice(0, 1)}
            </div>
            <div>
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-ink/50">{t.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
