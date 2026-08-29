import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { hashPassword, signSession, SESSION_COOKIE_NAME, sessionCookieOptions } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { token, password } = await req.json();

  if (!token || !password || String(password).length < 8) {
    return NextResponse.json(
      { error: "A token and a password of at least 8 characters are required." },
      { status: 400 }
    );
  }

  const invite = await prisma.inviteToken.findUnique({ where: { token }, include: { user: true } });

  if (!invite || invite.usedAt || invite.expiresAt < new Date()) {
    return NextResponse.json({ error: "This link is invalid or has expired." }, { status: 400 });
  }

  const passwordHash = await hashPassword(password);

  await prisma.$transaction([
    prisma.user.update({ where: { id: invite.userId }, data: { passwordHash } }),
    prisma.inviteToken.update({ where: { id: invite.id }, data: { usedAt: new Date() } }),
  ]);

  const sessionToken = signSession({
    userId: invite.user.id,
    role: invite.user.role,
    email: invite.user.email,
  });
  const res = NextResponse.json({ role: invite.user.role });
  res.cookies.set(SESSION_COOKIE_NAME, sessionToken, sessionCookieOptions());
  return res;
}
