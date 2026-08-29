import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/guards";

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const meetings = await prisma.meetingRequest.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json({ meetings });
}
