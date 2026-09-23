import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("size-9", className)}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="10" fill="currentColor" />
      <path
        d="M8 27.5c3.2-2.2 6.4-3.3 12-3.3s8.8 1.1 12 3.3"
        fill="none"
        stroke="var(--color-primary-fg)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M9 22c2.8-1.8 5.8-2.7 11-2.7s8.2.9 11 2.7"
        fill="none"
        stroke="var(--color-primary-fg)"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M10.5 16.8c2.4-1.5 5-2.2 9.5-2.2s7.1.7 9.5 2.2"
        fill="none"
        stroke="var(--color-primary-fg)"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M20 10.5c.4 1.6.2 2.8 0 4.2"
        fill="none"
        stroke="var(--color-primary-fg)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M20 13.2c-1.6-.2-2.6-1.2-3.4-2.2"
        fill="none"
        stroke="var(--color-primary-fg)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 13.2c1.6-.2 2.6-1.2 3.4-2.2"
        fill="none"
        stroke="var(--color-primary-fg)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Wordmark({
  className,
  inverse = false,
}: {
  className?: string;
  inverse?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className={inverse ? "text-primary-fg" : "text-primary"} />
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-lg font-semibold tracking-tight",
            inverse ? "text-primary-fg" : "text-fg",
          )}
        >
          Kenya Shamb
        </span>
        <span
          className={cn(
            "block text-xs font-medium uppercase tracking-widest",
            inverse ? "text-primary-fg/70" : "text-muted",
          )}
        >
          Farm marketplace
        </span>
      </span>
    </span>
  );
}
