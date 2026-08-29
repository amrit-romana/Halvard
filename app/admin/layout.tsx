import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import Logo from "@/components/Logo";
import LogoutButton from "@/components/LogoutButton";

export const metadata: Metadata = {
  title: "Admin — Halvard",
  robots: { index: false, follow: false },
};

const navLinks = [
  { label: "Dashboard", href: "/admin" },
  { label: "Customers", href: "/admin/customers" },
  { label: "Meetings", href: "/admin/meetings" },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session || session.role !== "ADMIN") {
    redirect("/login");
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-paper">
      <div className="border-b border-ink/10 bg-white/70">
        <div className="container-page-wide flex h-14 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/admin">
              <Logo size={24} />
            </Link>
            <nav className="hidden items-center gap-1 sm:flex">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-full px-3 py-1.5 text-sm font-medium text-ink/60 transition hover:bg-ink/5 hover:text-ink"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-wide text-ink/40">
              {session.email}
            </span>
            <LogoutButton className="text-sm font-medium text-ink/60 hover:text-ink" />
          </div>
        </div>
      </div>
      <div className="container-page-wide py-10">{children}</div>
    </div>
  );
}
