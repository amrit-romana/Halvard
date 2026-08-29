"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewCustomerForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectName, setProjectName] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/admin/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          projectName,
          amountDueCents: Math.round(parseFloat(amount || "0") * 100),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
        setLoading(false);
        return;
      }
      router.push(`/admin/customers/${data.user.id}`);
      router.refresh();
    } catch {
      setError("Couldn't reach the server. Try again.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-ink/50">Customer name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-signal/50"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-ink/50">Email</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-signal/50"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-ink/50">Project name</label>
          <input
            required
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="e.g. Invoice follow-ups"
            className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-signal/50"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-ink/50">Amount due (USD)</label>
          <input
            type="number"
            step="0.01"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-signal/50"
          />
        </div>
      </div>
      {error && <p className="text-sm text-ember">{error}</p>}
      <button type="submit" className="btn-primary" disabled={loading}>
        {loading ? "Creating…" : "Create & send invite"}
      </button>
      <p className="text-xs text-ink/40">
        This creates the account and emails them a link to set their
        password.
      </p>
    </form>
  );
}
