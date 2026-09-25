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
              Our full Privacy Policy is being finalised. In the meantime,
              if you have any questions about how we handle your data,
              email us at{" "}
              <a
                href="mailto:info@halvard.com.au"
                className="font-medium text-ink underline underline-offset-4"
              >
                info@halvard.com.au
              </a>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
