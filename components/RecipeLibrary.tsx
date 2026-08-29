"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { allRecipes } from "./RecipeCards";
import { revealItem, RevealGroup } from "./Reveal";

const tags = ["All", ...Array.from(new Set(allRecipes.map((r) => r.tag)))];

export default function RecipeLibrary() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? allRecipes : allRecipes.filter((r) => r.tag === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            className={`rounded-full border-[1.5px] px-4 py-2 text-sm font-semibold transition ${
              active === tag
                ? "border-ink bg-ink text-paper"
                : "border-ink/12 text-ink/60 hover:border-ink/30 hover:text-ink"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <RevealGroup
        key={active}
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        stagger={0.06}
      >
        {filtered.map((r) => (
          <motion.div
            key={r.title}
            variants={revealItem}
            whileHover={{ y: -6 }}
            className="card flex flex-col gap-3 p-6"
          >
            <div className="flex items-center justify-between">
              <span
                className={`w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${r.color}`}
              >
                {r.tag}
              </span>
              <span className="text-2xl">{r.emoji}</span>
            </div>
            <h3 className="font-display text-xl font-semibold leading-snug">
              {r.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink/60">{r.body}</p>
            <button className="btn-ghost btn-sm mt-2 w-fit">Use this recipe</button>
          </motion.div>
        ))}
      </RevealGroup>
    </div>
  );
}
