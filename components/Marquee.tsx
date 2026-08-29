import BrandIcon, { integrationNames } from "./BrandIcon";

export default function Marquee({
  reverse = false,
}: {
  reverse?: boolean;
}) {
  const items = [...integrationNames, ...integrationNames];

  return (
    <div className="marquee-row relative overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent sm:w-28" />
      <div
        className="marquee-track flex w-max items-center gap-3"
        style={
          reverse
            ? { animationDirection: "reverse" }
            : undefined
        }
      >
        {items.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center gap-2.5 rounded-full border border-ink/10 bg-white/70 py-2 pl-2.5 pr-4 shadow-softer"
          >
            <BrandIcon name={name} size={28} rounded="rounded-full" />
            <span className="text-sm font-medium text-ink/70">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
