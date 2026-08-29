"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Message = {
  from: "user" | "halvard";
  text: string;
};

type Scenario = {
  label: string;
  messages: Message[];
};

const scenarios: Scenario[] = [
  {
    label: "Invoicing",
    messages: [
      {
        from: "halvard",
        text: "Invoice #221 to Henderson & Co is 9 days overdue. Sent a follow-up — I'll nudge again in 3 days if it's still unpaid.",
      },
      { from: "user", text: "Perfect, thank you" },
    ],
  },
  {
    label: "Follow-ups",
    messages: [
      {
        from: "halvard",
        text: "Quote #114 for the Millar deck job is ready in Xero, based on your last similar job. Send now or hold for review?",
      },
      { from: "user", text: "Send it" },
      { from: "halvard", text: "Sent ✅ I'll follow up in 4 days if there's no reply." },
    ],
  },
  {
    label: "Daily Ops",
    messages: [
      {
        from: "halvard",
        text: "Tomorrow's 9am with Priya conflicted with a site visit — moved it to Thursday 9am and let her know.",
      },
      { from: "user", text: "Good call, thanks" },
    ],
  },
];

export default function PhoneMockup() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
    setVisibleCount(0);
    setTyping(false);

    const messages = scenarios[scenarioIndex].messages;
    let t = 500;

    messages.forEach((m, i) => {
      if (m.from === "halvard") {
        timeouts.current.push(setTimeout(() => setTyping(true), t));
        t += 900;
        timeouts.current.push(
          setTimeout(() => {
            setTyping(false);
            setVisibleCount(i + 1);
          }, t)
        );
        t += 500;
      } else {
        timeouts.current.push(setTimeout(() => setVisibleCount(i + 1), t));
        t += 900;
      }
    });

    timeouts.current.push(
      setTimeout(() => {
        setScenarioIndex((s) => (s + 1) % scenarios.length);
      }, t + 2200)
    );

    return () => timeouts.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scenarioIndex]);

  const visibleMessages = scenarios[scenarioIndex].messages.slice(0, visibleCount);

  return (
    <div className="relative mx-auto w-[280px] sm:w-[310px]">
      <div className="relative rounded-[3rem] border-[6px] border-ink bg-ink p-2 shadow-lift">
        <div className="absolute left-1/2 top-3 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-ink" />
        <div className="absolute -left-[8px] top-24 h-8 w-1.5 rounded-l-full bg-ink" />
        <div className="absolute -left-[8px] top-36 h-12 w-1.5 rounded-l-full bg-ink" />
        <div className="absolute -right-[8px] top-32 h-16 w-1.5 rounded-r-full bg-ink" />

        <div className="flex h-[570px] flex-col overflow-hidden rounded-[2.4rem] bg-canvas">
          <div className="flex items-center justify-between px-5 pb-1 pt-4 text-[11px] font-semibold text-ink/70">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="h-2.5 w-3.5 rounded-sm border border-ink/60" />
            </span>
          </div>

          <div className="flex items-center gap-2 border-b border-ink/10 px-4 py-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-signal text-xs font-bold text-white">
              H
            </div>
            <div>
              <p className="text-sm font-semibold leading-none">Halvard</p>
              <p className="mt-1 text-[11px] text-signal-ink">● Running automatically</p>
            </div>
            <span className="ml-auto rounded-full bg-ink/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink/50">
              {scenarios[scenarioIndex].label}
            </span>
          </div>

          <div className="flex flex-1 flex-col gap-2.5 overflow-hidden px-4 py-4">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleMessages.map((m, i) => (
                <motion.div
                  key={`${scenarioIndex}-${i}`}
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={
                    m.from === "user"
                      ? "ml-auto max-w-[82%] rounded-2xl rounded-tr-sm bg-signal px-4 py-2.5 text-[13px] leading-snug text-white"
                      : "mr-auto max-w-[82%] rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 text-[13px] leading-snug text-ink shadow-softer"
                  }
                >
                  {m.text}
                </motion.div>
              ))}
              {typing && (
                <motion.div
                  key={`typing-${scenarioIndex}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mr-auto flex items-center gap-1 rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-softer"
                >
                  <span className="dot h-1.5 w-1.5 rounded-full bg-ink/40" />
                  <span className="dot h-1.5 w-1.5 rounded-full bg-ink/40" />
                  <span className="dot h-1.5 w-1.5 rounded-full bg-ink/40" />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="mt-auto" />
          </div>

          <div className="border-t border-ink/10 px-4 py-3">
            <div className="rounded-full bg-white px-4 py-2 text-xs text-ink/30 shadow-inner">
              Ask Halvard anything…
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5">
        {scenarios.map((s, i) => (
          <span
            key={s.label}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === scenarioIndex ? "w-5 bg-signal" : "w-1.5 bg-ink/15"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
