import type { Config } from "tailwindcss";

// Every integer 0-100, so any `/N` opacity modifier (e.g. border-ink/12) just works.
const fullOpacityScale = Object.fromEntries(
  Array.from({ length: 101 }, (_, n) => [n, `${n / 100}`])
);

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      opacity: fullOpacityScale,
      colors: {
        ink: "#15171C",
        paper: "#F5F3ED",
        canvas: "#FFFFFF",
        "surface-2": "#ECE9DF",
        signal: "#0A6B4F",
        "signal-ink": "#073F2E",
        ember: "#E8572E",
        cobalt: "#2C5CE0",
        violet: "#7C5CFC",
        amber: "#B8790E",
        slate: "#4A5A63",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl2: "1rem",
        xl3: "1.5rem",
        xl4: "2rem",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(21, 23, 28, 0.06)",
        softer: "0 4px 16px rgba(21, 23, 28, 0.05)",
        lift: "0 16px 40px rgba(21, 23, 28, 0.10)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 80%, 100%": { opacity: "0.2", transform: "scale(0.85)" },
          "40%": { opacity: "1", transform: "scale(1)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        blink: "blink 1.4s infinite ease-in-out both",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      transitionTimingFunction: {
        signal: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
