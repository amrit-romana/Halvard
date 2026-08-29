import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PhoneMockup from "@/components/PhoneMockup";
import SyncDiagram from "@/components/SyncDiagram";
import ApprovalCard from "@/components/ApprovalCard";
import NotificationStack from "@/components/NotificationStack";
import CTASection from "@/components/CTASection";
import { HeroBlobs } from "@/components/Blobs";

export const metadata: Metadata = {
  title: "How it works — Halvard",
  description:
    "A step-by-step walkthrough of how Halvard goes from a repetitive task to a fully running automated system.",
};

const steps = [
  {
    number: "01",
    title: "Tell us what's eating your time",
    body: "A repetitive task, a process you're tired of doing by hand — describe it in a message and we scope what it would take to automate.",
    mockup: <PhoneMockup />,
  },
  {
    number: "02",
    title: "We connect to your tools",
    body: "Halvard pulls the context it needs — pricing history, calendar availability, deal stage — from every tool you've connected, in seconds.",
    mockup: <SyncDiagram />,
  },
  {
    number: "03",
    title: "You approve, or let it run on autopilot",
    body: "Every action is drafted first. Review and send with one tap, or flip on autopilot for the systems you trust completely.",
    mockup: <ApprovalCard />,
  },
  {
    number: "04",
    title: "It keeps running and reporting back",
    body: "Halvard keeps watching after the system goes live — flagging what needs you, and handling what doesn't, for as long as you run it.",
    mockup: <NotificationStack />,
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-14 text-center sm:pt-20">
        <HeroBlobs />
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">The walkthrough</span>
            <h1 className="section-heading mx-auto mt-5 max-w-2xl">
              From a repetitive task to a running system.
            </h1>
            <p className="mx-auto mt-5 max-w-md text-ink/60 sm:text-lg">
              Here&apos;s exactly what happens behind the scenes every time
              we build an automation for your business.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="container-page flex flex-col gap-24 sm:gap-32">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <span className="font-display text-6xl font-bold text-ink/10 sm:text-7xl">
                  {step.number}
                </span>
                <h2 className="section-heading-sm mt-2">{step.title}</h2>
                <p className="mt-4 max-w-md text-ink/60">{step.body}</p>
              </Reveal>
              <Reveal delay={0.1} y={32}>
                <div className="flex justify-center">{step.mockup}</div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        heading="Try it on your own business."
        body="Tell us what's eating your week — most systems are live within days."
      />
    </>
  );
}
