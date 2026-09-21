"use client";

import { motion, useReducedMotion } from "framer-motion";

type Orb = {
  className: string;
  color: string;
  x: number[];
  y: number[];
  duration: number;
};

// Soft, slow-drifting light orbs — warm accent tones, heavily blurred, low
// opacity. Ambient depth, never loud. Pointer-events off; parent must clip
// overflow. Honors reduced-motion by holding still.
const ORBS: Orb[] = [
  {
    className: "left-[8%] top-[6%] h-64 w-64 sm:h-80 sm:w-80",
    color: "#E9C91A",
    x: [0, 40, -20, 0],
    y: [0, 30, 60, 0],
    duration: 24,
  },
  {
    className: "right-[6%] top-[18%] h-72 w-72 sm:h-96 sm:w-96",
    color: "#E9642F",
    x: [0, -30, 25, 0],
    y: [0, 40, -20, 0],
    duration: 30,
  },
  {
    className: "left-[38%] top-[42%] h-56 w-56 sm:h-72 sm:w-72",
    color: "#E9A23F",
    x: [0, 25, -35, 0],
    y: [0, -30, 20, 0],
    duration: 27,
  },
];

export default function Orbs() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {ORBS.map((orb, i) => (
        <motion.span
          key={i}
          className={`absolute rounded-full blur-3xl ${orb.className}`}
          style={{ background: orb.color, opacity: 0.16 }}
          animate={reduce ? undefined : { x: orb.x, y: orb.y }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
