"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const STATUSES = ["NEW", "SCHEDULED", "DONE", "CANCELLED"];

export default function MeetingRow({
  id,
  name,
  email,
  message,
  preferredAt,
  status,
}: {
  id: string;
  name: string;
  email: string;
  message: string | null;
  preferredAt: string | null;
  status: string;
}) {
  const router = useRouter();
  const [current, setCurrent] = useState(status);
  const [saving, setSaving] = useState(false);

  async function updateStatus(next: string) {
    setCurrent(next);
    setSaving(true);
    await fetch(`/api/admin/meetings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: next }),
    });
    setSaving(false);
    router.refresh();
  }

  return (
    <div className="card flex flex-col gap-2 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-ink/50">{email}</p>
        </div>
        <select
          value={current}
          onChange={(e) => updateStatus(e.target.value)}
          disabled={saving}
          className="rounded-full border border-ink/15 bg-white px-3 py-1.5 text-xs font-medium outline-none"
        >
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      {preferredAt && (
        <p className="text-xs text-signal-ink">
          Requested: {new Date(preferredAt).toLocaleString()}
        </p>
      )}
      {message && <p className="text-sm text-ink/60">{message}</p>}
    </div>
  );
}
