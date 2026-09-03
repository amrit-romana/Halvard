// A restrained, single muted hue per pillar — just enough color for an
// icon to read as "this pillar" at a glance, without reintroducing the
// bright, saturated accent palette the brand book moved away from.
// Tag/name strings are shared verbatim with PillarGrid, FeatureTabs, and
// the recipe library, so this map is keyed on those exact strings.
export type Accent = {
  tint: string; // icon tile background
  text: string; // icon + heading color
  solid: string; // small dot / solid badge background
};

export const pillarAccent: Record<string, Accent> = {
  "Pipeline & Leads": {
    tint: "bg-[#B5652F]/10",
    text: "text-[#B5652F]",
    solid: "bg-[#B5652F]",
  },
  "Follow-ups & Email": {
    tint: "bg-[#3E6690]/10",
    text: "text-[#3E6690]",
    solid: "bg-[#3E6690]",
  },
  "Invoicing & Payments": {
    tint: "bg-signal/10",
    text: "text-signal-ink",
    solid: "bg-signal",
  },
  "Landing Pages & Sites": {
    tint: "bg-[#7A5688]/10",
    text: "text-[#7A5688]",
    solid: "bg-[#7A5688]",
  },
  "Daily Operations": {
    tint: "bg-[#4F7A6E]/10",
    text: "text-[#4F7A6E]",
    solid: "bg-[#4F7A6E]",
  },
  "Built to Order": {
    tint: "bg-ink/8",
    text: "text-ink",
    solid: "bg-ink",
  },
};

export const neutralAccent: Accent = {
  tint: "bg-ink/8",
  text: "text-ink",
  solid: "bg-ink",
};

export function getAccent(tag: string): Accent {
  return pillarAccent[tag] ?? neutralAccent;
}
