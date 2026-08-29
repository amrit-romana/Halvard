import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/guards";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { status } = await req.json();
  const meeting = await prisma.meetingRequest.update({ where: { id: params.id }, data: { status } });
  return NextResponse.json({ meeting });
}
