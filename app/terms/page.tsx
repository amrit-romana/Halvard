import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service — Halvard",
};

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page max-w-2xl">
        <Reveal>
          <span className="eyebrow">Legal</span>
          <h1 className="section-heading-sm mt-5 text-3xl sm:text-4xl">
            Terms of Service
          </h1>
          <div className="mt-6 rounded-xl3 border border-ink/10 bg-white/60 p-6 shadow-softer">
            <p className="text-sm leading-relaxed text-ink/60">
              Our full Terms of Service are being finalised. In the
              meantime, if you have any questions about working with
              Halvard, email us at{" "}
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
