"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Project = {
  id: string;
  name: string;
  status: string;
  amountDueCents: number;
  currency: string;
  paymentStatus: string;
};

type ApiKeyRow = {
  id: string;
  label: string;
  lastFour: string;
  revoked: boolean;
};

const statusLabel: Record<string, string> = {
  SCOPING: "Being scoped",
  IN_PROGRESS: "In progress",
  REVIEW: "In review",
  LIVE: "Live",
  PAUSED: "Paused",
};

export default function PortalActions({
  project,
  apiKeys,
}: {
  project: Project;
  apiKeys: ApiKeyRow[];
}) {
  const router = useRouter();
  const [payLoading, setPayLoading] = useState(false);
  const [payError, setPayError] = useState<string | null>(null);
  const [revealed, setRevealed] = useState<Record<string, string>>({});
  const [requesting, setRequesting] = useState(false);
  const [requestMessage, setRequestMessage] = useState<string | null>(null);

  async function payNow() {
    setPayLoading(true);
    setPayError(null);
    const res = await fetch("/api/portal/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectId: project.id }),
    });
    const data = await res.json();
    if (!res.ok) {
      setPayError(data.error ?? "Couldn't start checkout.");
      setPayLoading(false);
      return;
    }
    window.location.href = data.url;
  }

  async function reveal(keyId: string) {
    const res = await fetch(`/api/portal/api-key?id=${keyId}`);
    const data = await res.json();
    if (res.ok) setRevealed((r) => ({ ...r, [keyId]: data.key }));
  }

  async function requestNewKey() {
    setRequesting(true);
    setRequestMessage(null);
    const res = await fetch("/api/portal/api-key", { method: "POST" });
    setRequesting(false);
    setRequestMessage(res.ok ? "New key generated and emailed to you." : "Something went wrong.");
    if (res.ok) router.refresh();
  }

  const amount = (project.amountDueCents / 100).toFixed(2);

  return (
    <div className="flex flex-col gap-6">
      <div className="card flex flex-col gap-4 p-6">
        <p className="font-mono text-xs uppercase tracking-wide text-ink/40">
          {project.name}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-ink/8 px-3 py-1 text-sm font-medium text-ink">
            {statusLabel[project.status] ?? project.status}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              project.paymentStatus === "PAID"
                ? "bg-signal/10 text-signal-ink"
                : "border border-ink/20 text-ink"
            }`}
          >
            {project.paymentStatus === "PAID" ? "Paid" : `$${amount} due`}
          </span>
        </div>
        {project.paymentStatus !== "PAID" && project.amountDueCents > 0 && (
          <div>
            <button onClick={payNow} className="btn-primary btn-sm" disabled={payLoading}>
              {payLoading ? "Redirecting…" : `Pay $${amount} now`}
            </button>
            {payError && <p className="mt-2 text-xs font-semibold text-ink">{payError}</p>}
          </div>
        )}
      </div>

      <div className="card flex flex-col gap-4 p-6">
        <p className="font-mono text-xs uppercase tracking-wide text-ink/40">API keys</p>
        <div className="flex flex-col gap-2">
          {apiKeys.length === 0 && <p className="text-sm text-ink/50">No keys yet.</p>}
          {apiKeys
            .filter((k) => !k.revoked)
            .map((k) => (
              <div
                key={k.id}
                className="flex items-center justify-between rounded-xl2 border border-ink/10 bg-white px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium">{k.label}</p>
                  <p className="font-mono text-xs text-ink/50">
                    {revealed[k.id] ?? `•••• ${k.lastFour}`}
                  </p>
                </div>
                {!revealed[k.id] && (
                  <button
                    onClick={() => reveal(k.id)}
                    className="text-xs font-medium text-signal-ink hover:underline"
                  >
                    Reveal
                  </button>
                )}
              </div>
            ))}
        </div>
        <button onClick={requestNewKey} className="btn-ghost btn-sm w-fit" disabled={requesting}>
          {requesting ? "Requesting…" : "Request new API key"}
        </button>
        {requestMessage && <p className="text-xs text-ink/50">{requestMessage}</p>}
      </div>
    </div>
  );
}
