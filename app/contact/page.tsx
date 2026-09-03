import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { HeroBlobs } from "@/components/Blobs";

export const metadata: Metadata = {
  title: "Contact — Halvard",
  description:
    "Get in touch with Halvard or schedule a time to talk through what you'd like automated.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-14 text-center sm:pt-20">
        <HeroBlobs />
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">Get in touch</span>
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
        <div className="container-page max-w-2xl">
          <Reveal delay={0.1} y={24}>
            <ContactForm />
          </Reveal>
          <p className="mt-6 text-center text-xs text-ink/40">
            Prefer email? Reach us directly at{" "}
            <a href="mailto:connectwithhalvard@gmail.com" className="underline underline-offset-4">
              connectwithhalvard@gmail.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
