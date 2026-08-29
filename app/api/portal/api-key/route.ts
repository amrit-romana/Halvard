import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/guards";
import { generateApiKey, encryptSecret, decryptSecret, lastFour } from "@/lib/apiKey";
import { sendEmail } from "@/lib/email";
import { apiKeyEmail } from "@/lib/emailTemplates";

/** Customer requests a new API key for themselves — self-serve, emailed immediately. */
export async function POST() {
  const { session, error } = await requireUser();
  if (error) return error;

  const user = await prisma.user.findUnique({ where: { id: session!.userId } });
  if (!user) return NextResponse.json({ error: "Not found." }, { status: 404 });

  const label = "Requested from portal";
  const key = generateApiKey();
  const apiKey = await prisma.apiKey.create({
    data: {
      userId: user.id,
      label,
      encrypted: encryptSecret(key),
      lastFour: lastFour(key),
      requestedAt: new Date(),
    },
  });

  const { subject, text, html } = apiKeyEmail({ name: user.name, label, key });
  await sendEmail({ to: user.email, subject, text, html });

  return NextResponse.json({ apiKey: { id: apiKey.id, label, lastFour: apiKey.lastFour } });
}

/** Reveal an existing key's full value (only the owner can do this). */
export async function GET(req: Request) {
  const { session, error } = await requireUser();
  if (error) return error;

  const url = new URL(req.url);
  const keyId = url.searchParams.get("id");
  if (!keyId) return NextResponse.json({ error: "id is required." }, { status: 400 });

  const apiKey = await prisma.apiKey.findUnique({ where: { id: keyId } });
  if (!apiKey || apiKey.userId !== session!.userId) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  return NextResponse.json({ key: decryptSecret(apiKey.encrypted) });
}
