import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import { SELLERS } from "@/lib/catalog";

export const Route = createFileRoute("/sellers")({ component: SellersPage });

function SellersPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">Wauzaji</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">Sellers</h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
        Co-ops, tractor yards, packhouses and agrovets. Every desk on this floor is
        county-listed and reachable by phone.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SELLERS.map((s) => (
          <Link
            key={s.id}
            to="/sellers/$id"
            params={{ id: s.id }}
            className="group overflow-hidden rounded-xl bg-surface shadow-border transition-[box-shadow] hover:shadow-border-hover"
          >
            <div className="relative aspect-16/9">
              <img src={s.cover} alt="" className="media size-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-fg/60 to-transparent" />
              <span className="absolute bottom-3 left-3 inline-flex size-11 items-center justify-center rounded-md bg-primary font-display font-semibold text-primary-fg">
                {s.initials}
              </span>
            </div>
            <div className="p-5">
              <h2 className="flex items-center gap-1.5 font-display text-xl font-semibold">
                {s.name}
                {s.verified ? <BadgeCheck className="size-4 text-primary" /> : null}
              </h2>
              <p className="mt-1 text-sm text-muted">
                {s.owner} · {s.town}, {s.county}
              </p>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{s.bio}</p>
              <p className="mt-4 text-xs tracking-wide text-muted uppercase">
                {s.speciality} · {s.rating.toFixed(1)} · {s.years} yrs
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
