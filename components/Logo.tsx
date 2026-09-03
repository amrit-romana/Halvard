export function LogoMark({
  size = 32,
  variant = "ink",
}: {
  size?: number;
  variant?: "ink" | "signal" | "outline";
}) {
  const bg =
    variant === "ink" ? "#15171C" : variant === "signal" ? "#0A6B4F" : "transparent";
  const stroke = variant === "outline" ? "#15171C" : "#F5F3ED";

  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-xl2"
      style={{ width: size, height: size, background: bg }}
    >
      <svg width={size * 0.68} height={size * 0.68} viewBox="0 0 48 48" fill="none">
        <rect x="15" y="9" width="6.5" height="30" rx="2.2" fill={stroke} />
        <rect x="26.5" y="9" width="6.5" height="30" rx="2.2" fill={stroke} />
        <line
          x1="17"
          y1="32"
          x2="31"
          y2="16"
          stroke={stroke}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="3.6" fill="#0A6B4F" stroke={stroke} strokeWidth="2" />
      </svg>
    </span>
  );
}

export default function Logo({
  size = 32,
  showWord = true,
  variant = "ink",
  className = "",
}: {
  size?: number;
  showWord?: boolean;
  variant?: "ink" | "signal" | "outline";
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} variant={variant} />
      {showWord && (
        <span
          className="font-display text-lg font-medium text-ink"
          style={{ letterSpacing: "-0.01em" }}
        >
          Halvard
        </span>
      )}
    </span>
  );
}
