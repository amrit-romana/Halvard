import "server-only";
import { NextResponse } from "next/server";
import { getSession } from "./auth";

export async function requireAdmin() {
  const session = await getSession();
  if (!session || session.role !== "ADMIN") {
    return { session: null, error: NextResponse.json({ error: "Not authorized." }, { status: 403 }) };
  }
  return { session, error: null };
}

export async function requireUser() {
  const session = await getSession();
  if (!session) {
    return { session: null, error: NextResponse.json({ error: "Not authenticated." }, { status: 401 }) };
  }
  return { session, error: null };
}
