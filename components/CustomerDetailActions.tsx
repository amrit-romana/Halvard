"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Project = {
  id: string;
  name: string;
  status: string;
  amountDueCents: number;
  paymentStatus: string;
  notes: string | null;
};

type ApiKeyRow = {
  id: string;
  label: string;
  lastFour: string;
  revoked: boolean;
};

const STATUSES = ["SCOPING", "IN_PROGRESS", "REVIEW", "LIVE", "PAUSED"];
const PAYMENT_STATUSES = ["UNPAID", "PAID", "OVERDUE"];

export default function CustomerDetailActions({
  customerId,
  project,
  apiKeys,
  hasPassword,
}: {
  customerId: string;
  project: Project;
  apiKeys: ApiKeyRow[];
  hasPassword: boolean;
}) {
  const router = useRouter();
  const [status, setStatus] = useState(project.status);
  const [paymentStatus, setPaymentStatus] = useState(project.paymentStatus);
  const [amount, setAmount] = useState((project.amountDueCents / 100).toFixed(2));
  const [notes, setNotes] = useState(project.notes ?? "");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [newKey, setNewKey] = useState<string | null>(null);

  async function save() {
    setSaving(true);
    setMessage(null);
    const res = await fetch(`/api/admin/customers/${customerId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        projectId: project.id,
        status,
        paymentStatus,
        amountDueCents: Math.round(parseFloat(amount || "0") * 100),
        notes,
      }),
    });
    setSaving(false);
    if (res.ok) {
      setMessage("Saved.");
      router.refresh();
    } else {
      setMessage("Couldn't save.");
    }
  }

  async function resendInvite() {
    setMessage(null);
    const res = await fetch(`/api/admin/customers/${customerId}/resend-invite`, { method: "POST" });
    setMessage(res.ok ? "Invite sent." : "Couldn't send invite.");
  }

  async function generateKey() {
    setMessage(null);
    const res = await fetch(`/api/admin/customers/${customerId}/api-key`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ label: "Production" }),
    });
    const data = await res.json();
    if (res.ok) {
      setNewKey(data.key);
      router.refresh();
    } else {
      setMessage("Couldn't generate key.");
    }
  }

  async function revokeKey(keyId: string) {
    await fetch(`/api/admin/customers/${customerId}/api-key`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ keyId }),
    });
    router.refresh();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="card flex flex-col gap-4 p-6">
        <p className="font-mono text-xs uppercase tracking-wide text-ink/40">Project</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-ink/50">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none"
            >
              {STATUSES.map((s) => (
                <option key={s} value={s}>
                  {s.replace("_", " ")}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-ink/50">Payment status</label>
            <select
              value={paymentStatus}
              onChange={(e) => setPaymentStatus(e.target.value)}
              className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none"
            >
              {PAYMENT_STATUSES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-ink/50">Amount due (USD)</label>
            <input
              type="number"
              step="0.01"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-ink/50">Internal notes</label>
          <textarea
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none"
          />
        </div>
        <div className="flex items-center gap-3">
          <button onClick={save} className="btn-primary btn-sm" disabled={saving}>
            {saving ? "Saving…" : "Save changes"}
          </button>
          {message && <span className="text-xs text-ink/50">{message}</span>}
        </div>
      </div>

      <div className="card flex flex-col gap-4 p-6">
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-wide text-ink/40">Account</p>
          {!hasPassword && (
            <span className="rounded-full bg-amber/10 px-2.5 py-1 text-xs font-medium text-amber">
              Invite not yet accepted
            </span>
          )}
        </div>
        <button onClick={resendInvite} className="btn-ghost btn-sm w-fit">
          Resend invite email
        </button>
      </div>

      <div className="card flex flex-col gap-4 p-6">
        <p className="font-mono text-xs uppercase tracking-wide text-ink/40">API keys</p>
        <div className="flex flex-col gap-2">
          {apiKeys.length === 0 && <p className="text-sm text-ink/50">No keys yet.</p>}
          {apiKeys.map((k) => (
            <div
              key={k.id}
              className="flex items-center justify-between rounded-xl2 border border-ink/10 bg-white px-4 py-3"
            >
              <div>
                <p className="text-sm font-medium">{k.label}</p>
                <p className="font-mono text-xs text-ink/50">•••• {k.lastFour}</p>
              </div>
              {k.revoked ? (
                <span className="text-xs text-ink/40">Revoked</span>
              ) : (
                <button
                  onClick={() => revokeKey(k.id)}
                  className="text-xs font-medium text-ember hover:underline"
                >
                  Revoke
                </button>
              )}
            </div>
          ))}
        </div>
        {newKey && (
          <div className="rounded-xl2 border border-signal/30 bg-signal/5 p-4">
            <p className="text-xs font-medium text-signal-ink">
              New key generated and emailed. Shown once — copy it now:
            </p>
            <p className="mt-2 break-all font-mono text-xs">{newKey}</p>
          </div>
        )}
        <button onClick={generateKey} className="btn-ghost btn-sm w-fit">
          Generate new API key
        </button>
      </div>
    </div>
  );
}
