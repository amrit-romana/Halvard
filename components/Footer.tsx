import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    heading: "Automations",
    links: [
      { label: "What we automate", href: "/product" },
      { label: "Integrations", href: "/integrations" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Recipes", href: "/recipes" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Log in", href: "/login" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "IT Support", href: "/it-support" },
      { label: "Twitter", href: "https://twitter.com" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="container-page-wide grid grid-cols-2 gap-10 py-14 sm:grid-cols-5">
        <div className="col-span-2 sm:col-span-1">
          <Link href="/">
            <Logo size={28} />
          </Link>
          <p className="mt-3 max-w-[22ch] text-sm text-ink/50">
            The AI automation studio for growing businesses.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.heading}>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-wide text-ink/40">
              {col.heading}
            </p>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink/70 transition hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-page-wide flex flex-col gap-2 border-t border-ink/10 py-6 text-xs text-ink/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Halvard, Inc. All rights reserved.</p>
        <p className="font-mono uppercase tracking-wide">AI Automation Studio</p>
      </div>
    </footer>
  );
}
