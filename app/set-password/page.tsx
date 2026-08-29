import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { HeroBlobs } from "@/components/Blobs";
import Logo from "@/components/Logo";
import SetPasswordForm from "@/components/SetPasswordForm";

export const metadata: Metadata = {
  title: "Set your password — Halvard",
};

export default function SetPasswordPage({
  searchParams,
}: {
  searchParams: { token?: string };
}) {
  const token = searchParams.token ?? "";

  return (
    <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden py-16">
      <HeroBlobs />
      <Reveal className="w-full max-w-sm px-5">
        <div className="card p-8">
          <Link href="/" className="mb-6 inline-flex">
            <Logo size={26} />
          </Link>
          {token ? (
            <>
              <h1 className="font-display text-2xl font-semibold">
                Set your password
              </h1>
              <p className="mt-2 text-sm text-ink/60">
                Choose a password to finish setting up your Halvard account.
              </p>
              <SetPasswordForm token={token} />
            </>
          ) : (
            <>
              <h1 className="font-display text-2xl font-semibold">
                Missing link
              </h1>
              <p className="mt-2 text-sm text-ink/60">
                This page needs the link from your invite email.{" "}
                <Link href="/contact" className="underline underline-offset-4">
                  Contact us
                </Link>{" "}
                if yours didn&apos;t arrive.
              </p>
            </>
          )}
        </div>
      </Reveal>
    </section>
  );
}
