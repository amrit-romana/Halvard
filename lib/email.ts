import "server-only";
import { Resend } from "resend";
import { prisma } from "./db";

// Send FROM a dedicated address on the verified domain — deliberately NOT
// info@halvard.com.au. Enquiry notifications are addressed TO info@, and a
// message whose From and To are the same address gets dropped or misfiled
// by most mail servers (self-send). A distinct sender avoids that; replies
// are routed back to info@ via reply-to.
const FROM = process.env.EMAIL_FROM ?? "Halvard <notifications@halvard.com.au>";

// Where new enquiries land, and where customer replies are routed.
export const NOTIFY_TO = process.env.CONTACT_NOTIFY_TO ?? "info@halvard.com.au";

export async function sendEmail({
  to,
  subject,
  html,
  text,
  replyTo,
}: {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: FROM,
      to,
      subject,
      html,
      text,
      ...(replyTo ? { replyTo } : {}),
    });
    await prisma.emailLog.create({
      data: { to, subject, body: text, sentVia: "resend" },
    });
    return { sentVia: "resend" as const };
  }

  // Dev fallback: no email provider configured yet. Log it and save it so it's
  // visible in the admin panel instead of silently disappearing.
  console.log(`\n[email:dev-fallback] to=${to} subject="${subject}"\n${text}\n`);
  await prisma.emailLog.create({
    data: { to, subject, body: text, sentVia: "console" },
  });
  return { sentVia: "console" as const };
}
