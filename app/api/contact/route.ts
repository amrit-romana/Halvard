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

  // The enquiry is already saved above, so email failures must never lose
  // it or 500 the form. Each send is best-effort and independent — a
  // failed customer confirmation must not block the internal notification.

  // Notify the Halvard inbox first (most important), reply-to the enquirer.
  const lines = [
    `New enquiry from ${name} <${email}>`,
    company ? `Business: ${company}` : null,
    preferredAt ? `Preferred call time: ${preferredAt}` : null,
    "",
    message || "(no message)",
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await sendEmail({
      to: NOTIFY_TO,
      replyTo: email,
      subject: `New enquiry — ${name}${company ? ` (${company})` : ""}`,
      text: lines,
      html: `<pre style="font-family:ui-monospace,monospace;white-space:pre-wrap">${lines
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")}</pre>`,
    });
  } catch (err) {
    console.error("[contact] notification email failed:", err);
  }

  // Confirm to the person who reached out (best-effort).
  try {
    const confirmation = meetingRequestConfirmation({ name });
    await sendEmail({
      to: email,
      subject: confirmation.subject,
      text: confirmation.text,
      html: confirmation.html,
    });
  } catch (err) {
    console.error("[contact] confirmation email failed:", err);
  }

  return NextResponse.json({ meeting });
}
