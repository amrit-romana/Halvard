import type { Metadata } from "next";
import Marquee from "@/components/Marquee";
import IntegrationsGrid from "@/components/IntegrationsGrid";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { HeroBlobs } from "@/components/Blobs";

export const metadata: Metadata = {
  title: "Integrations — Halvard",
  description:
    "Halvard connects to Google Workspace, your CRM, accounting software, and messaging tools so nothing falls through the cracks.",
};

const categories: { name: string; blurb: string; tools: string[] }[] = [
  {
    name: "Email & calendar",
    blurb: "The foundation — Halvard reads context and books time directly.",
    tools: ["Gmail", "Google Calendar", "Google Sheets", "Google Drive", "Calendly"],
  },
  {
    name: "CRM & sales",
    blurb: "Keeps your pipeline moving without manual data entry.",
    tools: ["HubSpot", "Salesforce", "Pipedrive"],
  },
  {
    name: "Accounting & payments",
    blurb: "Quotes, invoices, and payment status, always in sync.",
    tools: ["QuickBooks", "Xero", "Stripe"],
  },
  {
    name: "Messaging",
    blurb: "Meet clients and teammates wherever they already are.",
    tools: ["WhatsApp", "Telegram", "Slack"],
  },
  {
    name: "Productivity & automation",
    blurb: "Plug Halvard into the rest of your stack.",
    tools: ["Notion", "Asana", "Trello", "Zapier"],
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-14 text-center sm:pt-20">
        <HeroBlobs />
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">18 integrations and counting</span>
            <h1 className="section-heading mx-auto mt-5 max-w-2xl">
              Fits into your business, not the other way around.
            </h1>
            <p className="mx-auto mt-5 max-w-md text-ink/60 sm:text-lg">
              Halvard plugs straight into the tools you already run your
              business on — no migrations, no new dashboards to check.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <Marquee />
      </section>

      {categories.map((cat, i) => (
        <section key={cat.name} className={i % 2 ? "bg-surface-2/60 py-16 sm:py-20" : "py-16 sm:py-20"}>
          <div className="container-page">
            <Reveal className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="section-heading-sm text-2xl sm:text-3xl">{cat.name}</h2>
                <p className="mt-2 max-w-md text-sm text-ink/55">{cat.blurb}</p>
              </div>
            </Reveal>
            <IntegrationsGrid names={cat.tools} />
          </div>
        </section>
      ))}

      <CTASection
        heading="Don't see your tool yet?"
        body="Halvard Kitchen lets developers build custom recipes for any API."
        primary={{ label: "Read the docs", href: "/docs" }}
        secondary={{ label: "Request an integration", href: "/contact" }}
      />
    </>
  );
}
