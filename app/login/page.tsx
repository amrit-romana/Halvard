import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { HeroBlobs } from "@/components/Blobs";
import Logo from "@/components/Logo";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Log in — Halvard",
};

export default function LoginPage() {
  return (
    <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden py-16">
      <HeroBlobs />
      <Reveal className="w-full max-w-sm px-5">
        <div className="card p-8">
          <Link href="/" className="mb-6 inline-flex">
            <Logo size={26} />
          </Link>
          <h1 className="font-display text-2xl font-semibold">Log in</h1>
          <p className="mt-2 text-sm text-ink/60">
            Accounts are created by Halvard when your project starts —
            there&apos;s no public sign-up.
          </p>
          <LoginForm />
          <p className="mt-6 text-center text-xs text-ink/40">
            New client?{" "}
            <Link href="/contact" className="font-medium text-ink underline underline-offset-4">
              Get in touch
            </Link>{" "}
            and we&apos;ll set you up.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
