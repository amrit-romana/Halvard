import type { ReactNode } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

// One big alternating feature row: a numbered label + heading + copy on
// one side, a live mockup on the other. The rhythm the whole "how it
// works" stretch of the homepage is built from.
export default function FeatureRow({
  number,
  label,
  heading,
  body,
  href,
  linkText = "See how it works",
  mockup,
  reversed = false,
}: {
  number: string;
  label: string;
  heading: string;
  body: string;
  href?: string;
  linkText?: string;
  mockup: ReactNode;
  reversed?: boolean;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <Reveal className={reversed ? "lg:order-2" : ""}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-signal">
            {number}
          </span>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/40">
            {label}
          </span>
        </div>
        <h3 className="section-heading-sm mt-4 max-w-md">{heading}</h3>
        <p className="mt-4 max-w-md text-ink/60 sm:text-lg">{body}</p>
        {href && (
          <Link href={href} className="btn-ghost mt-7 inline-flex">
            {linkText}
          </Link>
        )}
      </Reveal>
      <Reveal delay={0.1} y={32} className={reversed ? "lg:order-1" : ""}>
        {mockup}
      </Reveal>
    </div>
  );
}
