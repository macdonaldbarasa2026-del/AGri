import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Landmark, Truck } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { CATEGORIES, PRODUCTS, SELLERS, TRUST_STATS } from "@/lib/catalog";
import { formatKes } from "@/lib/format";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 8);
  const tractor = PRODUCTS.find((p) => p.id === "highland-45hp");

  return (
    <main>
      <section className="relative min-h-[78vh] overflow-hidden">
        <img
          src="/images/hero-highlands.jpg"
          alt="Kenyan highland tea terraces at golden hour"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-fg/80 via-fg/35 to-fg/15" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-24 sm:px-6">
          <p className="text-xs font-medium tracking-[0.22em] text-primary-fg/80 uppercase">
            Karibu · Kenya’s farm marketplace
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl leading-[1.08] font-semibold tracking-tight text-primary-fg sm:text-6xl">
            The farm. The market. One Shamb.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-fg/85 sm:text-lg">
            Seeds, soil, crop medicines, tractors and harvest — listed by verified Kenyan
            sellers, priced in shillings, paid on M-Pesa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="inverse" size="lg" asChild>
              <Link to="/marketplace">
                Shop the floor
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-0 bg-transparent text-primary-fg shadow-[0_0_0_1px_rgba(246,243,234,0.35)] hover:bg-primary-fg/10"
              asChild
            >
              <Link to="/sell">List your lot</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {TRUST_STATS.map((s) => (
            <div key={s.label} className="bg-surface px-5 py-6">
              <p className="font-display text-2xl font-semibold tracking-tight text-fg tabular-nums sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">Departments</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
              Everything a shamba needs
            </h2>
          </div>
          <Link
            to="/marketplace"
            className="hidden text-sm font-medium text-primary sm:inline-flex sm:items-center sm:gap-1"
          >
            All lots <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              to="/marketplace"
              search={{ category: c.id }}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={c.image}
                alt=""
                className="media aspect-4/3 size-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-fg/75 via-fg/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                <p className="text-xs tracking-wide text-primary-fg/70 uppercase">{c.kicker}</p>
                <p className="font-display text-lg font-semibold text-primary-fg">{c.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">On the floor</p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
                Featured lots this week
              </h2>
            </div>
            <Link
              to="/marketplace"
              className="hidden text-sm font-medium text-primary sm:inline-flex sm:items-center sm:gap-1"
            >
              Browse all <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {tractor ? (
        <section className="mx-auto grid max-w-6xl items-stretch gap-0 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
            <img
              src="/images/hero-tractor.jpg"
              alt="Tractor working Kenyan red soil"
              className="media size-full min-h-72 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center rounded-b-2xl bg-primary px-6 py-10 text-primary-fg sm:px-10 lg:rounded-r-2xl lg:rounded-bl-none">
            <p className="text-xs font-medium tracking-[0.18em] text-primary-fg/70 uppercase">
              Machinery desk
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {tractor.name}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-fg/80">
              {tractor.description}
            </p>
            <p className="mt-6 font-display text-3xl tabular-nums">{formatKes(tractor.price)}</p>
            <p className="text-sm text-primary-fg/70">{tractor.unit} · Eldoret yard</p>
            <div className="mt-8">
              <Button variant="inverse" asChild>
                <Link to="/products/$id" params={{ id: tractor.id }}>
                  Inspect this unit
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-y border-border py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">Wauzaji</p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
                Verified Kenyan sellers
              </h2>
            </div>
            <Link
              to="/sellers"
              className="hidden text-sm font-medium text-primary sm:inline-flex sm:items-center sm:gap-1"
            >
              All sellers <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SELLERS.slice(0, 4).map((s) => (
              <Link
                key={s.id}
                to="/sellers/$id"
                params={{ id: s.id }}
                className="group overflow-hidden rounded-xl bg-surface shadow-border transition-[box-shadow] hover:shadow-border-hover"
              >
                <div className="relative aspect-16/10">
                  <img src={s.cover} alt="" className="media size-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-fg/55 to-transparent" />
                </div>
                <div className="p-4">
                  <p className="flex items-center gap-1.5 font-display text-lg font-semibold">
                    {s.name}
                    {s.verified ? (
                      <BadgeCheck className="size-4 text-primary" aria-label="Verified" />
                    ) : null}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {s.town}, {s.county} · {s.speciality}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">How Shamb works</p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
          Buy like a grocer. Sell like a packhouse.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Landmark,
              title: "Verified lots",
              body: "Sellers are county-listed. Seed is KEPHIS, crop medicines PCPB, food packs KEBS where marked.",
            },
            {
              icon: BadgeCheck,
              title: "Pay in Kenya",
              body: "M-Pesa paybill and till, cards, or pay on delivery in Nairobi. Every price is in Kenyan shillings.",
            },
            {
              icon: Truck,
              title: "Move the goods",
              body: "Same-day Nairobi, two to five days nationwide. Tractors ride a low-bed from the Eldoret yard.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl bg-surface p-6 shadow-border">
              <item.icon className="size-5 text-primary" aria-hidden />
              <h3 className="mt-4 font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src="/images/hero-harvest.jpg"
          alt="Kenyan harvest on a wooden table"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-fg/70" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-primary-fg sm:text-4xl">
            Have a harvest, a yard or an agrovet? List it on Shamb.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-primary-fg/80">
            Growers, mills, tractor yards and agrovets publish lots in minutes. Buyers across
            47 counties see them the same day.
          </p>
          <div className="mt-8">
            <Button variant="inverse" size="lg" asChild>
              <Link to="/sell">
                Start selling
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
