"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import BrowserFrame from "./BrowserFrame";

type Task = {
  id: number;
  text: string;
  tag: string;
};

const TASK_POOL: Task[] = [
  { text: "Export a batch from the legacy ERP", tag: "Legacy system" },
  { text: "Re-key an invoice into the old accounting tool", tag: "Legacy system" },
  { text: "Reconcile a stack of PDF statements", tag: "Repetitive" },
  { text: "Copy new leads out of the intake spreadsheet", tag: "Repetitive" },
  { text: "Chase a signature stuck in someone's inbox", tag: "Follow-up" },
  { text: "Update the CRM the sales team actually uses", tag: "Repetitive" },
  { text: "File the weekly report", tag: "Repetitive" },
  { text: "Sync the spreadsheet nobody else opens", tag: "Legacy system" },
  { text: "Match a payment to the right job", tag: "Repetitive" },
  { text: "Re-enter a form submission by hand", tag: "Legacy system" },
].map((t, i) => ({ ...t, id: i }));

function randomTask(excludeIds: number[]): Task {
  const pool = TASK_POOL.filter((t) => !excludeIds.includes(t.id));
  const base = pool.length ? pool : TASK_POOL;
  const picked = base[Math.floor(Math.random() * base.length)];
  return { ...picked, id: Math.random() };
}

export default function AgentAtWork() {
  const [queue, setQueue] = useState<Task[]>(() => [
    TASK_POOL[0],
    TASK_POOL[1],
    TASK_POOL[2],
  ]);
  const [active, setActive] = useState<Task>(() => TASK_POOL[3]);
  const [justDone, setJustDone] = useState<Task | null>(null);
  const [count, setCount] = useState(238);
  const idsSoFar = useRef([0, 1, 2, 3]);

  useEffect(() => {
    const tick = setInterval(() => {
      setJustDone(active);
      setCount((c) => c + 1);
      setQueue((q) => {
        const [next, ...rest] = q;
        setActive(next);
        const fresh = randomTask(idsSoFar.current.slice(-6));
        idsSoFar.current = [...idsSoFar.current.slice(-6), fresh.id];
        return [...rest, fresh];
      });
    }, 1900);
    return () => clearInterval(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <BrowserFrame title="app.halvard.com/agent">
      <div className="flex flex-col gap-4 bg-canvas p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            <span className="text-xs font-semibold text-ink">
              AI Agent &middot; always on
            </span>
          </div>
          <motion.span
            key={count}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs text-ink/40"
          >
            {count.toLocaleString()} tasks today
          </motion.span>
        </div>

        <div className="relative flex flex-col gap-2">
          <AnimatePresence mode="popLayout">
            {justDone && (
              <motion.div
                key={`done-${justDone.id}`}
                layout
                initial={{ opacity: 1, y: 0, height: "auto" }}
                animate={{ opacity: 0.5, y: 0 }}
                exit={{ opacity: 0, y: -14, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onAnimationComplete={() => {}}
                className="flex items-center gap-2.5 overflow-hidden rounded-xl2 border border-signal/20 bg-signal/5 px-3.5 py-2.5"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-signal-ink" strokeWidth={1.75} />
                <span className="truncate text-xs text-ink/50 line-through decoration-signal/40">
                  {justDone.text}
                </span>
              </motion.div>
            )}

            <motion.div
              key={`active-${active.id}`}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 rounded-xl2 border border-ink/15 bg-white p-3.5 shadow-lift"
            >
              <Loader2 className="h-4 w-4 shrink-0 animate-spin text-ink/50" strokeWidth={1.75} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{active.text}</p>
                <span className="mt-0.5 inline-block rounded-full bg-ink/8 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink/50">
                  {active.tag}
                </span>
              </div>
            </motion.div>

            {queue.map((t, i) => (
              <motion.div
                key={`queued-${t.id}`}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1 - i * 0.22, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2.5 rounded-xl2 border border-ink/8 bg-white/60 px-3.5 py-2.5"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink/20" />
                <span className="truncate text-xs text-ink/45">{t.text}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </BrowserFrame>
  );
}
