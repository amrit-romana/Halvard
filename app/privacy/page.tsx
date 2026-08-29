import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy — Halvard",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page max-w-2xl">
        <Reveal>
          <span className="eyebrow">Legal</span>
          <h1 className="section-heading-sm mt-5 text-3xl sm:text-4xl">
            Privacy Policy
          </h1>
          <div className="mt-6 rounded-xl3 border border-ink/10 bg-white/60 p-6 shadow-softer">
            <p className="text-sm leading-relaxed text-ink/60">
              Placeholder — replace with Halvard&apos;s actual privacy
              policy before launch.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
