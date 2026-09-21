import type { ReactNode } from "react";

export default function BrowserFrame({
  children,
  title = "app.halvard.com",
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-lift">
      <div className="flex items-center gap-3 border-b border-ink/10 bg-canvas px-4 py-2.5">
        <div className="flex gap-1">
          <span className="h-0.5 w-3 rounded-full bg-ink/15" />
          <span className="h-0.5 w-3 rounded-full bg-ink/15" />
        </div>
        <div className="mx-auto flex items-center gap-1.5 rounded-full bg-ink/5 px-3 py-1 text-[11px] text-ink/40">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2a5 5 0 0 0-5 5v3H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z"
              fill="currentColor"
            />
          </svg>
          {title}
        </div>
      </div>
      {children}
    </div>
  );
}
