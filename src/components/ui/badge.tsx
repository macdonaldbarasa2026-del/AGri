import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "muted",
  children,
}: {
  className?: string;
  tone?: "muted" | "primary" | "leaf" | "inverse";
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide",
        tone === "muted" && "bg-fg/6 text-muted",
        tone === "primary" && "bg-primary text-primary-fg",
        tone === "leaf" && "bg-leaf/15 text-primary",
        tone === "inverse" && "bg-primary-fg/12 text-primary-fg",
        className,
      )}
    >
      {children}
    </span>
  );
}
