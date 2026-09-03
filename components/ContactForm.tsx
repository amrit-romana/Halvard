"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, User, Mail, Building2, MessageSquare, X } from "lucide-react";

const TIME_WINDOWS = ["Morning (9–12)", "Afternoon (12–3)", "Late afternoon (3–5:30)"];

function nextWeekday(daysAhead: number) {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  while (d.getDay() === 0 || d.getDay() === 6) {
    d.setDate(d.getDate() + 1);
  }
  return d;
}

function toDateInputValue(d: Date) {
  return d.toISOString().slice(0, 10);
}

const fieldIconClass = "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/30";
const fieldClass =
  "w-full rounded-full border border-ink/15 bg-white py-2.5 pl-11 pr-4 text-sm outline-none transition focus:border-signal/50 focus:ring-4 focus:ring-signal/10";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const recipe = searchParams.get("recipe");

  const [mode, setMode] = useState<"message" | "call">("message");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState(
    recipe ? `I'd like to set up "${recipe}" — tell me more about scope and timing.` : ""
  );
  const [showRecipeChip, setShowRecipeChip] = useState(Boolean(recipe));
  const [date, setDate] = useState("");
  const [timeWindow, setTimeWindow] = useState(TIME_WINDOWS[0]);
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const minDate = toDateInputValue(nextWeekday(1));

  function isWeekday(value: string) {
    if (!value) return true;
    const day = new Date(`${value}T00:00:00`).getDay();
    return day !== 0 && day !== 6;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (mode === "call" && date && !isWeekday(date)) {
      setError("Pick a weekday — we're closed on weekends.");
      return;
    }

    setStatus("loading");
    setError(null);
    try {
      const preferredAt =
        mode === "call" && date ? `${date} ${timeWindow}` : null;

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message, preferredAt }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setError("Couldn't reach the server. Try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-4 p-8 text-center sm:p-10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-signal/10">
          <CheckCircle2 className="h-7 w-7 text-signal-ink" strokeWidth={1.75} />
        </span>
        <h3 className="font-display text-xl font-bold">Got it, thanks.</h3>
        <p className="max-w-xs text-sm text-ink/60">
          We&apos;ll get back to you within a business day
          {mode === "call" && date ? " to confirm the call." : "."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 sm:p-8">
      {showRecipeChip && recipe && (
        <div className="flex items-center gap-2 rounded-2xl border border-signal/25 bg-signal/5 px-4 py-2.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
          <p className="flex-1 text-xs text-ink/70">
            Asking about <span className="font-semibold text-ink">{recipe}</span>
          </p>
          <button
            type="button"
            onClick={() => setShowRecipeChip(false)}
            aria-label="Dismiss"
            className="shrink-0 text-ink/30 transition hover:text-ink/60"
          >
            <X className="h-3.5 w-3.5" strokeWidth={2} />
          </button>
        </div>
      )}

      <div className="flex gap-2 rounded-full bg-ink/5 p-1">
        {(["message", "call"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
              mode === m ? "bg-white text-ink shadow-softer" : "text-ink/50 hover:text-ink"
            }`}
          >
            {m === "message" ? "Send a message" : "Request a call"}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-ink/50">Name</label>
          <div className="relative">
            <User className={fieldIconClass} strokeWidth={1.75} />
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={fieldClass}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-ink/50">Email</label>
          <div className="relative">
            <Mail className={fieldIconClass} strokeWidth={1.75} />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={fieldClass}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-ink/50">Business (optional)</label>
        <div className="relative">
          <Building2 className={fieldIconClass} strokeWidth={1.75} />
          <input value={company} onChange={(e) => setCompany(e.target.value)} className={fieldClass} />
        </div>
      </div>

      {mode === "call" ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-ink/50">Preferred date</label>
            <input
              type="date"
              min={minDate}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-signal/50 focus:ring-4 focus:ring-signal/10"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-ink/50">Preferred time</label>
            <select
              value={timeWindow}
              onChange={(e) => setTimeWindow(e.target.value)}
              className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-signal/50 focus:ring-4 focus:ring-signal/10"
            >
              {TIME_WINDOWS.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : null}

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-ink/50">
          What&apos;s eating your week?
        </label>
        <div className="relative">
          <MessageSquare className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-ink/30" strokeWidth={1.75} />
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us a bit about your business and what you'd like automated…"
            className="w-full rounded-2xl border border-ink/15 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-signal/50 focus:ring-4 focus:ring-signal/10"
          />
        </div>
      </div>

      {error && <p className="text-sm font-semibold text-ink">{error}</p>}
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "loading"}>
          {status === "loading"
            ? "Sending…"
            : mode === "call"
              ? "Request this call"
              : "Send message"}
        </button>
        <p className="text-xs text-ink/40">We usually reply within a business day.</p>
      </div>
    </form>
  );
}
