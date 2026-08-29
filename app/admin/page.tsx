import Link from "next/link";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [customerCount, projects, meetings] = await Promise.all([
    prisma.user.count({ where: { role: "CUSTOMER" } }),
    prisma.project.findMany(),
    prisma.meetingRequest.findMany({
      where: { status: "NEW" },
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
  ]);

  const unpaid = projects.filter((p) => p.paymentStatus !== "PAID");
  const totalDueCents = unpaid.reduce((sum, p) => sum + p.amountDueCents, 0);

  return (
    <div>
      <h1 className="font-display text-2xl font-bold">Dashboard</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="card p-6">
          <p className="font-mono text-xs uppercase tracking-wide text-ink/40">Customers</p>
          <p className="mt-2 font-display text-3xl font-bold">{customerCount}</p>
        </div>
        <div className="card p-6">
          <p className="font-mono text-xs uppercase tracking-wide text-ink/40">
            Outstanding
          </p>
          <p className="mt-2 font-display text-3xl font-bold">
            ${(totalDueCents / 100).toFixed(2)}
          </p>
          <p className="mt-1 text-xs text-ink/50">{unpaid.length} unpaid project(s)</p>
        </div>
        <div className="card p-6">
          <p className="font-mono text-xs uppercase tracking-wide text-ink/40">
            New requests
          </p>
          <p className="mt-2 font-display text-3xl font-bold">{meetings.length}</p>
          <Link href="/admin/meetings" className="mt-1 inline-block text-xs text-signal-ink underline">
            View meetings
          </Link>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <h2 className="font-display text-lg font-bold">Recent meeting requests</h2>
        <Link href="/admin/customers/new" className="btn-primary btn-sm">
          Add customer
        </Link>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        {meetings.length === 0 && (
          <p className="text-sm text-ink/50">No new requests.</p>
        )}
        {meetings.map((m) => (
          <div key={m.id} className="card flex items-center justify-between gap-4 p-4">
            <div>
              <p className="text-sm font-semibold">{m.name}</p>
              <p className="text-xs text-ink/50">{m.email}</p>
            </div>
            {m.preferredAt && (
              <span className="rounded-full bg-signal/10 px-2.5 py-1 text-xs font-medium text-signal-ink">
                {new Date(m.preferredAt).toLocaleString()}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
