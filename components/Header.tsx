"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { label: "Automations", href: "/product" },
  { label: "Integrations", href: "/integrations" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Recipes", href: "/recipes" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="container-page-wide flex h-16 items-center justify-between">
        <Link href="/">
          <Logo size={30} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition ${
                  active ? "text-ink" : "text-ink/60 hover:text-ink"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white shadow-softer"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/pricing" className="btn-primary btn-sm">
            See Pricing
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1">
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 3 : 0 }}
              className="h-0.5 w-4 origin-center bg-ink"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -3 : 0 }}
              className="h-0.5 w-4 origin-center bg-ink"
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink/10 bg-paper lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-2 py-2 text-sm font-medium text-ink/80 hover:bg-ink/5"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="my-2 h-px bg-ink/10" />
              <Link
                href="/pricing"
                className="btn-primary mt-1"
                onClick={() => setOpen(false)}
              >
                See Pricing
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
