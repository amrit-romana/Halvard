"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { RevealGroup, revealItem } from "./Reveal";

const stats = [
  { value: 12000, suffix: "+", label: "tasks handled weekly", decimals: 0 },
  { value: 4.3, suffix: " min", label: "average response time", decimals: 1 },
  { value: 85, suffix: "+", label: "integrations supported", decimals: 0 },
  { value: 500, suffix: "+", label: "small businesses onboard", decimals: 0 },
];

function CountUp({
  target,
  suffix,
  decimals,
}: {
  target: number;
  suffix: string;
  decimals: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <p
      ref={ref}
      className="font-display text-3xl font-medium tabular-nums text-ink sm:text-4xl"
    >
      {display.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </p>
  );
}

export default function Stats() {
  return (
    <RevealGroup className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
      {stats.map((s) => (
        <motion.div key={s.label} variants={revealItem} className="text-center">
          <CountUp target={s.value} suffix={s.suffix} decimals={s.decimals} />
          <p className="mt-1 text-xs text-ink/50 sm:text-sm">{s.label}</p>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
