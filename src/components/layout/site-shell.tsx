import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { MarketTicker, SiteHeader } from "@/components/layout/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <SiteHeader />
      <MarketTicker />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
