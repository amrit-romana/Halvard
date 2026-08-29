"use client";

import { motion } from "framer-motion";
import BrandIcon from "./BrandIcon";

const nodes = [
  { name: "Gmail", angle: -90 },
  { name: "QuickBooks", angle: -30 },
  { name: "HubSpot", angle: 30 },
  { name: "Google Calendar", angle: 90 },
  { name: "Slack", angle: 150 },
  { name: "Stripe", angle: 210 },
];

// Percentages of the container, not raw pixels — the diagram renders at
// different sizes across breakpoints, and pixel math would drift out of
// sync with the SVG's own viewBox scaling. Center (50, 50) plus a
// percentage radius keeps the lines and the icon nodes locked together
// at any size.
const CENTER = 50;
const RADIUS_PCT = 34;

function position(angle: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: CENTER + RADIUS_PCT * Math.cos(rad),
    y: CENTER + RADIUS_PCT * Math.sin(rad),
  };
}

export default function SyncDiagram() {
  return (
    <div className="relative mx-auto h-[340px] w-[340px] sm:h-[380px] sm:w-[380px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.map((n, i) => {
          const { x, y } = position(n.angle);
          return (
            <motion.line
              key={n.name}
              x1={CENTER}
              y1={CENTER}
              x2={x}
              y2={y}
              vectorEffect="non-scaling-stroke"
              stroke="#1B1611"
              strokeOpacity="0.12"
              strokeWidth="2"
              strokeDasharray="5 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
            />
          );
        })}
      </svg>

      <div
        className="absolute z-10 flex h-24 w-24 items-center justify-center rounded-full bg-ink shadow-lift"
        style={{ left: `${CENTER}%`, top: `${CENTER}%`, transform: "translate(-50%, -50%)" }}
      >
        <span className="animate-pulse-ring absolute inset-0 rounded-full border-2 border-signal" />
        <span className="font-display text-2xl font-semibold text-paper">H</span>
      </div>

      {nodes.map((n, i) => {
        const { x, y } = position(n.angle);
        return (
          // Outer plain div: static positioning + centering transform.
          // Inner motion.div: the animation. Framer Motion owns the whole
          // `transform` property on whatever element it animates scale/x/y
          // on, so a manual translate(-50%,-50%) string on that same
          // element gets silently dropped — that was the alignment bug.
          <div
            key={n.name}
            className="absolute"
            style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
            >
              <div className="rounded-2xl bg-white p-1.5 shadow-lift ring-1 ring-ink/5">
                <BrandIcon name={n.name} size={40} />
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
