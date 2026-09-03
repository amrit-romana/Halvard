"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SetPasswordForm({ token }: { token: string }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/set-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
        setLoading(false);
        return;
      }
      router.push(data.role === "ADMIN" ? "/admin" : "/portal");
      router.refresh();
    } catch {
      setError("Couldn't reach the server. Try again.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
      <input
        type="password"
        placeholder="New password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-signal/50"
      />
      <input
        type="password"
        placeholder="Confirm password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        required
        className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-signal/50"
      />
      {error && <p className="text-sm font-semibold text-ink">{error}</p>}
      <button type="submit" className="btn-primary mt-1" disabled={loading}>
        {loading ? "Setting password…" : "Set password & log in"}
      </button>
    </form>
  );
}
