import "server-only";
import { Resend } from "resend";
import { prisma } from "./db";

// Note: Resend requires sending from a domain you've verified with them —
// a plain gmail.com address will be rejected once RESEND_API_KEY is set.
// Until then, EMAIL_FROM is only used for the console/EmailLog dev fallback.
const FROM = process.env.EMAIL_FROM ?? "Halvard <connectwithhalvard@gmail.com>";

export async function sendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string;
  subject: string;
  html: string;
  text: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    const resend = new Resend(apiKey);
    await resend.emails.send({ from: FROM, to, subject, html, text });
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
