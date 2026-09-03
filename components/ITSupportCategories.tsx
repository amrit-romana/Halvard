"use client";

import { motion } from "framer-motion";
import { revealItem, RevealGroup } from "./Reveal";

const categories = [
  {
    emoji: "🖥️",
    name: "Managed IT & Support",
    body: "IT service desk, field service, procurement, and mobile device management — a team on call for the day-to-day.",
    color: "text-cobalt",
    border: "border-l-cobalt",
  },
  {
    emoji: "☁️",
    name: "Cloud & Infrastructure",
    body: "Private and public cloud, Microsoft 365, and data centre migration handled end to end.",
    color: "text-signal-ink",
    border: "border-l-signal",
  },
  {
    emoji: "📡",
    name: "Network & Connectivity",
    body: "Managed Wi-Fi, secure networking, business internet, and SD-WAN — the backbone everything else runs on.",
    color: "text-violet",
    border: "border-l-violet",
  },
  {
    emoji: "📞",
    name: "Unified Communications",
    body: "Teams calling, VoIP, telephony, and video conferencing set up and kept running.",
    color: "text-amber",
    border: "border-l-amber",
  },
  {
    emoji: "🔒",
    name: "Cybersecurity & Compliance",
    body: "Risk assessment, security hardening, and awareness training that keeps your business audit-ready.",
    color: "text-ember",
    border: "border-l-ember",
  },
  {
    emoji: "🧩",
    name: "Continuity & Consulting",
    body: "Disaster recovery, IT consulting, digital transformation, and managed print — planned for, not scrambled for.",
    color: "text-slate",
    border: "border-l-slate",
  },
];

export default function ITSupportCategories() {
  return (
    <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
      {categories.map((c) => (
        <motion.div
          key={c.name}
          variants={revealItem}
          whileHover={{ y: -4 }}
          className={`card flex h-full flex-col gap-2 border-l-4 p-6 ${c.border}`}
        >
          <span className="text-2xl">{c.emoji}</span>
          <p className={`font-display text-base font-bold ${c.color}`}>{c.name}</p>
          <p className="text-sm leading-relaxed text-ink/60">{c.body}</p>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
