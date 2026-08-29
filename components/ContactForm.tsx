"use client";

import { useState } from "react";

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

export default function ContactForm() {
  const [mode, setMode] = useState<"message" | "call">("message");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
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
      <div className="card p-8 text-center">
        <span className="text-3xl">✅</span>
        <h3 className="mt-4 font-display text-xl font-bold">Got it, thanks.</h3>
        <p className="mt-2 text-sm text-ink/60">
          We&apos;ll get back to you within a day
          {mode === "call" && date ? " to confirm the call." : "."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-6 p-6 sm:p-8">
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
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-signal/50"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-ink/50">Email</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-signal/50"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-ink/50">Business (optional)</label>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-signal/50"
        />
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
              className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-signal/50"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-ink/50">Preferred time</label>
            <select
              value={timeWindow}
              onChange={(e) => setTimeWindow(e.target.value)}
              className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-signal/50"
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
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us a bit about your business and what you'd like automated…"
          className="rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-signal/50"
        />
      </div>

      {error && <p className="text-sm text-ember">{error}</p>}
      <button type="submit" className="btn-primary" disabled={status === "loading"}>
        {status === "loading"
          ? "Sending…"
          : mode === "call"
            ? "Request this call"
            : "Send message"}
      </button>
    </form>
  );
}
