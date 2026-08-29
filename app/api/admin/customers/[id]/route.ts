import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/guards";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin();
  if (error) return error;

  const customer = await prisma.user.findUnique({
    where: { id: params.id },
    include: { projects: true, apiKeys: true },
  });
  if (!customer) return NextResponse.json({ error: "Not found." }, { status: 404 });
  return NextResponse.json({ customer });
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin();
  if (error) return error;

  const body = await req.json();
  const { projectId, status, amountDueCents, paymentStatus, notes } = body;

  if (!projectId) {
    return NextResponse.json({ error: "projectId is required." }, { status: 400 });
  }

  const project = await prisma.project.update({
    where: { id: projectId },
    data: {
      ...(status ? { status } : {}),
      ...(amountDueCents !== undefined ? { amountDueCents: Number(amountDueCents) } : {}),
      ...(paymentStatus ? { paymentStatus } : {}),
      ...(notes !== undefined ? { notes } : {}),
    },
  });

  return NextResponse.json({ project });
}
