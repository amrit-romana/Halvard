import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/guards";
import { createInviteAndSend } from "@/lib/tokens";

export async function POST(_req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin();
  if (error) return error;

  const user = await prisma.user.findUnique({ where: { id: params.id }, include: { projects: true } });
  if (!user) return NextResponse.json({ error: "Not found." }, { status: 404 });

  const projectName = user.projects[0]?.name ?? "your project";
  const result = await createInviteAndSend(user.id, user.name, user.email, projectName);
  return NextResponse.json({ invite: result });
}
