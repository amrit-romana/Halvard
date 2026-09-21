import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendEmail, NOTIFY_TO } from "@/lib/email";
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

  // Confirm to the person who reached out.
  const confirmation = meetingRequestConfirmation({ name });
  await sendEmail({
    to: email,
    subject: confirmation.subject,
    text: confirmation.text,
    html: confirmation.html,
  });

  // Notify the Halvard inbox, with reply-to set to the enquirer so a
  // reply goes straight back to them.
  const lines = [
    `New enquiry from ${name} <${email}>`,
    company ? `Business: ${company}` : null,
    preferredAt ? `Preferred call time: ${preferredAt}` : null,
    "",
    message || "(no message)",
  ]
    .filter(Boolean)
    .join("\n");

  await sendEmail({
    to: NOTIFY_TO,
    replyTo: email,
    subject: `New enquiry — ${name}${company ? ` (${company})` : ""}`,
    text: lines,
    html: `<pre style="font-family:ui-monospace,monospace;white-space:pre-wrap">${lines
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")}</pre>`,
  });

  return NextResponse.json({ meeting });
}
