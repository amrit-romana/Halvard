import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/guards";
import { createInviteAndSend } from "@/lib/tokens";

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const customers = await prisma.user.findMany({
    where: { role: "CUSTOMER" },
    include: { projects: true, apiKeys: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ customers });
}

export async function POST(req: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { name, email, projectName, amountDueCents } = await req.json();

  if (!name || !email || !projectName) {
    return NextResponse.json({ error: "Name, email, and project name are required." }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email: String(email).toLowerCase() } });
  if (existing) {
    return NextResponse.json({ error: "A customer with this email already exists." }, { status: 409 });
  }

  const user = await prisma.user.create({
    data: {
      name,
      email: String(email).toLowerCase(),
      role: "CUSTOMER",
      projects: {
        create: {
          name: projectName,
          amountDueCents: Number(amountDueCents) || 0,
        },
      },
    },
    include: { projects: true },
  });

  const result = await createInviteAndSend(user.id, user.name, user.email, projectName);

  return NextResponse.json({ user, invite: result });
}
