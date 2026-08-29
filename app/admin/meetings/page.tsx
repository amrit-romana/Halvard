import { prisma } from "@/lib/db";
import MeetingRow from "@/components/MeetingRow";

export const dynamic = "force-dynamic";

export default async function MeetingsPage() {
  const meetings = await prisma.meetingRequest.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="max-w-2xl">
      <h1 className="font-display text-2xl font-bold">Meeting requests</h1>
      <div className="mt-6 flex flex-col gap-3">
        {meetings.length === 0 && <p className="text-sm text-ink/50">No requests yet.</p>}
        {meetings.map((m) => (
          <MeetingRow
            key={m.id}
            id={m.id}
            name={m.name}
            email={m.email}
            message={m.message}
            preferredAt={m.preferredAt ? m.preferredAt.toISOString() : null}
            status={m.status}
          />
        ))}
      </div>
    </div>
  );
}
