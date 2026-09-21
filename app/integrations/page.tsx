import type { Metadata } from "next";
import Marquee from "@/components/Marquee";
import IntegrationsGrid from "@/components/IntegrationsGrid";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { integrationCatalog } from "@/components/BrandIcon";

export const metadata: Metadata = {
  title: "Integrations — Halvard",
  description:
    "Halvard connects to your CRM, accounting, messaging, commerce, and developer tools — from Google Workspace to SAP — so nothing falls through the cracks.",
};

const totalTools = integrationCatalog.reduce((n, c) => n + c.tools.length, 0);

export default function IntegrationsPage() {
  return (
    <>
      <section className="pb-10 pt-16 text-center sm:pt-24">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">{totalTools}+ integrations and counting</span>
            <h1 className="section-heading mx-auto mt-5 max-w-3xl">
              Fits into your business, not the other way around.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-stone">
              Halvard plugs straight into the tools you already run your
              business on — from Google Workspace to SAP — with no
              migrations and no new dashboards to check.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <Marquee />
      </section>

      {integrationCatalog.map((cat, i) => (
        <section
          key={cat.category}
          className={i % 2 ? "bg-surface-2/60 py-14 sm:py-16" : "py-14 sm:py-16"}
        >
          <div className="container-page">
            <Reveal className="mb-8">
              <h2 className="font-display text-3xl font-normal sm:text-4xl">
                {cat.category}
              </h2>
            </Reveal>
            <IntegrationsGrid names={cat.tools} />
          </div>
        </section>
      ))}

      <CTASection
        heading="Don't see your tool?"
        body="If it has a login or an API, we can almost certainly automate work inside it. Tell us what you run on."
        primary={{ label: "Request an integration", href: "/contact" }}
        secondary={{ label: "Read the docs", href: "/docs" }}
      />
    </>
  );
}
