"use client";

import { motion } from "framer-motion";
import { Headset, Cloud, Wifi, Phone, ShieldCheck, Puzzle, type LucideIcon } from "lucide-react";
import { revealItem, RevealGroup } from "./Reveal";

const ACCENT_TINT = "bg-[#4A5D72]/10";
const ACCENT_TEXT = "text-[#4A5D72]";

const categories: { icon: LucideIcon; name: string; body: string }[] = [
  {
    icon: Headset,
    name: "Managed IT & Support",
    body: "IT service desk, field service, procurement, and mobile device management — a team on call for the day-to-day.",
  },
  {
    icon: Cloud,
    name: "Cloud & Infrastructure",
    body: "Private and public cloud, Microsoft 365, and data centre migration handled end to end.",
  },
  {
    icon: Wifi,
    name: "Network & Connectivity",
    body: "Managed Wi-Fi, secure networking, business internet, and SD-WAN — the backbone everything else runs on.",
  },
  {
    icon: Phone,
    name: "Unified Communications",
    body: "Teams calling, VoIP, telephony, and video conferencing set up and kept running.",
  },
  {
    icon: ShieldCheck,
    name: "Cybersecurity & Compliance",
    body: "Risk assessment, security hardening, and awareness training that keeps your business audit-ready.",
  },
  {
    icon: Puzzle,
    name: "Continuity & Consulting",
    body: "Disaster recovery, IT consulting, digital transformation, and managed print — planned for, not scrambled for.",
  },
];

export default function ITSupportCategories() {
  return (
    <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
      {categories.map((c) => {
        const Icon = c.icon;
        return (
          <motion.div
            key={c.name}
            variants={revealItem}
            whileHover={{ y: -4 }}
            className={`card flex h-full flex-col gap-3 border-l-4 p-6 border-l-current ${ACCENT_TEXT}`}
          >
            <span className={`flex h-10 w-10 items-center justify-center rounded-xl2 ${ACCENT_TINT}`}>
              <Icon className={`h-5 w-5 ${ACCENT_TEXT}`} strokeWidth={1.75} />
            </span>
            <p className="font-display text-base font-bold text-ink">{c.name}</p>
            <p className="text-sm leading-relaxed text-ink/60">{c.body}</p>
          </motion.div>
        );
      })}
    </RevealGroup>
  );
}
