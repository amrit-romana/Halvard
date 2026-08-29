import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendEmail } from "@/lib/email";
import { meetingRequestConfirmation } from "@/lib/emailTemplates";

export async function POST(req: NextRequest) {
  const { name, email, company, message, preferredAt } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const meeting = await prisma.meetingRequest.create({
    data: {
      name,
      email,
      company: company || null,
      message: message || null,
      preferredAt: preferredAt ? new Date(preferredAt) : null,
    },
  });

  const { subject, text, html } = meetingRequestConfirmation({ name });
  await sendEmail({ to: email, subject, text, html });

  return NextResponse.json({ meeting });
}
