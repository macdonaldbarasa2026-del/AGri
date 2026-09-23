import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Search, ShoppingBasket, X } from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";
import { Wordmark } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cartCount, useShop } from "@/lib/store";

const NAV = [
  { to: "/marketplace" as const, label: "Marketplace" },
  { to: "/sellers" as const, label: "Sellers" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();
  const count = useShop((s) => cartCount(s.cart));

  useEffect(() => {
    setMounted(true);
  }, []);

  function onSearch(e: FormEvent) {
    e.preventDefault();
    const query = q.trim();
    setOpen(false);
    void navigate({
      to: "/marketplace",
      search: query ? { q: query } : {},
    });
  }

  return (
    <header className="sticky top-0 z-40 bg-primary text-primary-fg">
      <div className="border-b border-primary-fg/10">
        <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-4 text-xs tracking-wide text-primary-fg/75 sm:px-6">
          <p className="truncate">Karibu · M-Pesa · Dispatch to 47 counties</p>
          <p className="hidden sm:block">hello@kenyashamb.co.ke · +254 20 764 2100</p>
        </div>
      </div>
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Wordmark inverse />
        </Link>
        <nav className="ml-4 hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm text-primary-fg/85 transition-colors hover:bg-primary-fg/8 hover:text-primary-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <form onSubmit={onSearch} className="ml-auto hidden min-w-0 flex-1 max-w-sm md:flex">
          <label className="sr-only" htmlFor="header-search">
            Search the marketplace
          </label>
          <div className="relative w-full">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-primary/50" />
            <Input
              id="header-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search maize, tractors, Hass…"
              className="h-10 border-0 bg-primary-fg pl-9 text-fg shadow-none"
            />
          </div>
        </form>
        <div className="ml-auto flex items-center gap-1 md:ml-2">
          <Button variant="inverse" size="sm" className="hidden sm:inline-flex" asChild>
            <Link to="/sell">Sell on Shamb</Link>
          </Button>
          <Link
            to="/cart"
            className="relative inline-flex size-11 items-center justify-center rounded-md text-primary-fg hover:bg-primary-fg/8"
            aria-label={`Cart, ${mounted ? count : 0} items`}
          >
            <ShoppingBasket className="size-5" />
            {mounted && count > 0 ? (
              <span className="absolute top-1.5 right-1.5 min-w-4 rounded-full bg-leaf px-1 text-center text-xs leading-4 font-semibold text-primary-fg tabular-nums">
                {count}
              </span>
            ) : null}
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-primary-fg/10 bg-primary px-4 py-4 lg:hidden">
          <form onSubmit={onSearch} className="mb-3 md:hidden">
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search the marketplace"
              className="bg-primary-fg text-fg"
            />
          </form>
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base text-primary-fg"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/sell"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base text-primary-fg"
            >
              Sell on Shamb
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function MarketTicker({ className }: { className?: string }) {
  return (
    <div
      className={
        "overflow-hidden border-b border-border bg-surface text-xs text-muted" +
        (className ? ` ${className}` : "")
      }
    >
      <div className="mx-auto flex max-w-6xl gap-8 overflow-x-auto px-4 py-2.5 whitespace-nowrap sm:px-6">
        <span className="font-medium text-fg">Desk prices</span>
        <TickerItems />
      </div>
    </div>
  );
}

function TickerItems() {
  const items = [
    ["Maize 90 kg", "KES 6,000", "Awasi"],
    ["DAP 50 kg", "KES 4,150", "Commercial"],
    ["Subsidy fertilizer", "KES 2,000", "NCPB"],
    ["Maize seed 2 kg", "KES 300", "Subsidy"],
    ["Beans 2 kg", "KES 250–300", "Market"],
  ];
  return (
    <>
      {items.map(([label, value, note]) => (
        <span key={label} className="flex items-center gap-2">
          <span>{label}</span>
          <span className="font-medium text-fg tabular-nums">{value}</span>
          <span className="text-muted/80">{note}</span>
        </span>
      ))}
    </>
  );
}
