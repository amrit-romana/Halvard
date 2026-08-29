import Link from "next/link";
import Reveal from "./Reveal";

export default function CTASection({
  heading = "Ready to automate the busywork?",
  body = "Tell us what's eating your week. We'll design, build, and run the system that handles it.",
  primary = { label: "Get Started", href: "/pricing" },
  secondary = { label: "Talk to us", href: "/contact" },
}: {
  heading?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page">
        <div className="rounded-xl4 border border-ink/10 bg-white/70 px-6 py-16 text-center sm:px-16 sm:py-20">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              AI Automation Studio
            </span>
            <h2 className="section-heading-sm mx-auto mt-6 max-w-xl">{heading}</h2>
            <p className="mx-auto mt-4 max-w-md text-ink/60">{body}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href={primary.href} className="btn-primary">
                {primary.label}
              </Link>
              <Link href={secondary.href} className="btn-ghost">
                {secondary.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
