import type { Metadata } from "next";
import RecipeLibrary from "@/components/RecipeLibrary";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { HeroBlobs } from "@/components/Blobs";

export const metadata: Metadata = {
  title: "Recipes — Halvard",
  description:
    "Browse ready-made recipes for invoicing, quoting, sales follow-ups, scheduling, and more.",
};

export default function RecipesPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-14 text-center sm:pt-20">
        <HeroBlobs />
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">Halvard Recipes</span>
            <h1 className="section-heading mx-auto mt-5 max-w-2xl">
              Ready-made automations for the busywork you already do.
            </h1>
            <p className="mx-auto mt-5 max-w-md text-ink/60 sm:text-lg">
              Turn one on in a tap, tweak it to match how you work, or build
              your own from scratch in the Halvard Kitchen.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="container-page">
          <RecipeLibrary />
        </div>
      </section>

      <CTASection
        heading="Can't find the recipe you need?"
        body="Developers can build custom recipes with the Halvard Kitchen."
        primary={{ label: "Read the docs", href: "/docs" }}
        secondary={{ label: "Get Started", href: "/pricing" }}
      />
    </>
  );
}
