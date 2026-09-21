"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroBlobs() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-signal/10 blur-3xl sm:h-96 sm:w-96"
        animate={
          reduce
            ? undefined
            : { x: [0, 30, -10, 0], y: [0, 20, 40, 0] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-ink/5 blur-3xl sm:h-[26rem] sm:w-[26rem]"
        animate={
          reduce
            ? undefined
            : { x: [0, -25, 15, 0], y: [0, -20, -35, 0] }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-8 top-10 hidden items-center gap-0 sm:flex"
        animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-signal" />
        <span className="h-px w-16 bg-ink/12" />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-8 hidden items-center gap-0 sm:flex"
        animate={reduce ? undefined : { opacity: [1, 0.5, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="h-px w-16 bg-ink/12" />
        <span className="h-1.5 w-1.5 rounded-full bg-signal" />
      </motion.div>
    </div>
  );
}

export function SectionBlob({
  side = "left",
}: {
  side?: "left" | "right";
}) {
  const reduce = useReducedMotion();
  const pos = side === "left" ? "-left-32" : "-right-32";

  return (
    <motion.div
      className={`pointer-events-none absolute ${pos} top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-signal/[0.06] blur-3xl`}
      animate={reduce ? undefined : { y: ["-55%", "-45%", "-55%"] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
