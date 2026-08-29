import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/guards";
import { generateApiKey, encryptSecret, lastFour } from "@/lib/apiKey";
import { sendEmail } from "@/lib/email";
import { apiKeyEmail } from "@/lib/emailTemplates";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin();
  if (error) return error;

  const user = await prisma.user.findUnique({ where: { id: params.id } });
  if (!user) return NextResponse.json({ error: "Not found." }, { status: 404 });

  const body = await req.json().catch(() => ({}));
  const label = body.label || "Production";

  const key = generateApiKey();
  const apiKey = await prisma.apiKey.create({
    data: {
      userId: user.id,
      label,
      encrypted: encryptSecret(key),
      lastFour: lastFour(key),
    },
  });

  const { subject, text, html } = apiKeyEmail({ name: user.name, label, key });
  await sendEmail({ to: user.email, subject, text, html });

  return NextResponse.json({ apiKey: { id: apiKey.id, label, lastFour: apiKey.lastFour }, key });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { keyId } = await req.json();
  await prisma.apiKey.update({ where: { id: keyId }, data: { revoked: true } });
  return NextResponse.json({ ok: true });
}
