"use client";

import { motion } from "framer-motion";
import BrandIcon, { integrationNames } from "./BrandIcon";
import { revealItem, RevealGroup } from "./Reveal";

export default function IntegrationsGrid({
  names = integrationNames,
}: {
  names?: string[];
}) {
  return (
    <RevealGroup
      className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
      stagger={0.04}
    >
      {names.map((name) => (
        <motion.div
          key={name}
          variants={revealItem}
          whileHover={{ y: -4, rotate: -1 }}
          className="card flex items-center gap-3 px-4 py-4 transition-shadow hover:shadow-lift"
        >
          <BrandIcon name={name} size={40} />
          <span className="text-sm font-semibold text-ink/80">{name}</span>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
