import "server-only";
import crypto from "crypto";
import { prisma } from "./db";
import { sendEmail } from "./email";
import { inviteEmail } from "./emailTemplates";

export async function createInviteAndSend(userId: string, name: string, email: string, projectName: string) {
  const token = crypto.randomBytes(32).toString("base64url");
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  await prisma.inviteToken.create({ data: { userId, token, expiresAt } });

  const appUrl = process.env.APP_URL ?? "http://localhost:3000";
  const setupUrl = `${appUrl}/set-password?token=${token}`;
  const { subject, text, html } = inviteEmail({ name, projectName, setupUrl });
  return sendEmail({ to: email, subject, text, html });
}
