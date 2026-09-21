"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// Cycles a list of words in place. Used in the hero headline to name,
// one at a time, the things Halvard automates. Width animates to the
// current word so the line re-centers smoothly.
export default function RotatingWord({
  words,
  interval = 2200,
  className = "",
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval, reduce]);

  return (
    <span className={`relative inline-flex items-baseline ${className}`}>
      {/* Invisible sizer keeps the widest word's width so nothing jumps. */}
      <span aria-hidden className="invisible whitespace-nowrap">
        {words.reduce((a, b) => (b.length > a.length ? b : a), "")}
      </span>
      <span className="absolute inset-0 flex items-baseline justify-start">
        <AnimatePresence initial={false}>
          <motion.span
            key={words[i]}
            initial={reduce ? false : { y: "0.4em", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduce ? undefined : { y: "-0.4em", opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute whitespace-nowrap"
          >
            {words[i]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
