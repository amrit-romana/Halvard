import Link from "next/link";
import Reveal from "./Reveal";
import Orbs from "./Orbs";

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
        <div className="relative overflow-hidden rounded-xl4 border border-ink/10 bg-surface-2/50 px-6 py-16 text-center sm:px-16 sm:py-20">
          <Orbs />
          <Reveal>
            <span className="eyebrow">AI Automation Studio</span>
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
