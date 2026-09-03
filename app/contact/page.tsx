import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, Clock3, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { HeroBlobs } from "@/components/Blobs";

export const metadata: Metadata = {
  title: "Contact — Halvard",
  description:
    "Get in touch with Halvard or schedule a time to talk through what you'd like automated.",
};

const signals = [
  {
    icon: Clock3,
    title: "Replies within a business day",
    body: "A real person reads every message — no ticket queue.",
  },
  {
    icon: ShieldCheck,
    title: "No pressure, no pitch",
    body: "We listen first. If it's not worth automating, we'll say so.",
  },
  {
    icon: Mail,
    title: "connectwithhalvard@gmail.com",
    body: "Prefer email? That reaches us directly too.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-14 text-center sm:pt-20">
        <HeroBlobs />
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Get in touch
            </span>
            <h1 className="section-heading mx-auto mt-5 max-w-2xl">
              Tell us what&apos;s eating your week.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-ink/60 sm:text-lg">
              Send a message, or pick a time below and we&apos;ll call you —
              whichever&apos;s easier.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container-page max-w-4xl">
          <Reveal delay={0.1} y={24}>
            <div className="grid overflow-hidden rounded-xl4 border border-ink/10 bg-white shadow-lift lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col gap-8 border-b border-ink/10 bg-surface-2/60 px-7 py-9 sm:px-9 sm:py-11 lg:border-b-0 lg:border-r">
                <div>
                  <h2 className="font-display text-2xl font-bold leading-tight text-ink">
                    A real conversation, before any code gets written.
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">
                    We sit down with you, learn how your business runs, and
                    quote exactly what&apos;s worth automating.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  {signals.map((s) => (
                    <div key={s.title} className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl2 bg-ink/8">
                        <s.icon className="h-4 w-4 text-ink" strokeWidth={1.75} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink">{s.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-ink/55">{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Suspense fallback={<div className="p-8" />}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
