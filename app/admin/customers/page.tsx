import Link from "next/link";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

const statusColor: Record<string, string> = {
  SCOPING: "bg-ink/5 text-ink/60",
  IN_PROGRESS: "bg-ink/10 text-ink",
  REVIEW: "border border-ink/25 text-ink",
  LIVE: "bg-signal/10 text-signal-ink",
  PAUSED: "bg-ink/5 text-ink/35",
};

export default async function CustomersPage() {
  const customers = await prisma.user.findMany({
    where: { role: "CUSTOMER" },
    include: { projects: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-medium">Customers</h1>
        <Link href="/admin/customers/new" className="btn-primary btn-sm">
          Add customer
        </Link>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        {customers.length === 0 && (
          <p className="text-sm text-ink/50">No customers yet.</p>
        )}
        {customers.map((c) => {
          const project = c.projects[0];
          return (
            <Link
              key={c.id}
              href={`/admin/customers/${c.id}`}
              className="card flex flex-wrap items-center justify-between gap-3 p-4 transition hover:shadow-softer"
            >
              <div>
                <p className="text-sm font-semibold">{c.name}</p>
                <p className="text-xs text-ink/50">{c.email}</p>
              </div>
              <div className="flex items-center gap-2">
                {project && (
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      statusColor[project.status] ?? "bg-ink/5 text-ink/60"
                    }`}
                  >
                    {project.status.replace("_", " ")}
                  </span>
                )}
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    project?.paymentStatus === "PAID"
                      ? "bg-signal/10 text-signal-ink"
                      : "border border-ink/20 text-ink"
                  }`}
                >
                  {project?.paymentStatus ?? "—"}
                </span>
                {!c.passwordHash && (
                  <span className="rounded-full bg-ink/5 px-2.5 py-1 text-xs font-medium text-ink/50">
                    Invite pending
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
