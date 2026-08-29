import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import Logo from "@/components/Logo";
import LogoutButton from "@/components/LogoutButton";

export const metadata: Metadata = {
  title: "Portal — Halvard",
  robots: { index: false, follow: false },
};

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session) redirect("/login");

  return (
    <div className="min-h-[calc(100vh-64px)] bg-paper">
      <div className="border-b border-ink/10 bg-white/70">
        <div className="container-page flex h-14 items-center justify-between">
          <Link href="/portal">
            <Logo size={24} />
          </Link>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-wide text-ink/40">
              {session.email}
            </span>
            <LogoutButton className="text-sm font-medium text-ink/60 hover:text-ink" />
          </div>
        </div>
      </div>
      <div className="container-page py-10">{children}</div>
    </div>
  );
}
