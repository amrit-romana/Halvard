export function HeroBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-8 top-10 hidden items-center gap-0 sm:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-signal" />
        <span className="h-px w-16 bg-ink/12" />
      </div>
      <div className="absolute bottom-10 right-8 hidden items-center gap-0 sm:flex">
        <span className="h-px w-16 bg-ink/12" />
        <span className="h-1.5 w-1.5 rounded-full bg-signal" />
      </div>
    </div>
  );
}

export function SectionBlob() {
  return null;
}
