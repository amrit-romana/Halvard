import Link from "next/link";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import PortalActions from "@/components/PortalActions";

export const dynamic = "force-dynamic";

export default async function PortalPage() {
  const session = await getSession();
  const user = await prisma.user.findUnique({
    where: { id: session!.userId },
    include: { projects: true, apiKeys: { orderBy: { createdAt: "desc" } } },
  });

  const project = user?.projects[0];

  return (
    <div className="max-w-2xl">
      <h1 className="font-display text-2xl font-medium">Welcome back, {user?.name}.</h1>
      <p className="mt-1 text-sm text-ink/60">Here's where your project stands.</p>

      {project ? (
        <div className="mt-6">
          <PortalActions project={project} apiKeys={user?.apiKeys ?? []} />
        </div>
      ) : (
        <p className="mt-6 text-sm text-ink/50">
          No project on this account yet. Reach out on the{" "}
          <Link href="/contact" className="underline">
            contact page
          </Link>{" "}
          if that seems wrong.
        </p>
      )}
    </div>
  );
}
