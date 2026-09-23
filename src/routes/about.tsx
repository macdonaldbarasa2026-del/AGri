import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <main>
      <section className="relative min-h-80 overflow-hidden">
        <img
          src="/images/hero-highlands.jpg"
          alt="Kenyan highland terraces"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-fg/60" />
        <div className="relative mx-auto flex min-h-80 max-w-6xl flex-col justify-end px-4 py-12 sm:px-6">
          <p className="text-xs font-medium tracking-[0.18em] text-primary-fg/70 uppercase">
            The house
          </p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold tracking-tight text-primary-fg sm:text-5xl">
            Built for Kenyan farms, not imported catalogues.
          </h1>
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="text-lg leading-relaxed text-fg">
          Kenya Shamb is a marketplace for the things a shamba actually runs on: certified seed,
          depot fertilizer, licensed crop and vet medicines, irrigation, machinery, and the harvest
          that pays for it all.
        </p>
        <p className="mt-5 text-sm leading-relaxed text-muted">
          We started from a simple failure of the middle. A grower in Kitale and a buyer in Changamwe
          should not need five phone calls and a broker who never sees the lot. Shamb puts the desk
          in public — price in Kenyan shillings, seller named, county listed, payment on M-Pesa.
        </p>
        <p className="mt-5 text-sm leading-relaxed text-muted">
          Seed lots marked KEPHIS are merchant-certified. Crop medicines marked PCPB are sold by
          licensed agrovets. Food packs marked KEBS have been through a packhouse inspection. We are
          not a government subsidy desk; NCPB fertilizer at KES 2,000 is a public programme, and we
          publish commercial highland prices beside it so farmers can tell the two apart.
        </p>
        <h2 className="mt-12 font-display text-2xl font-semibold">How we trade</h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
          <li>Sellers publish lots from any of Kenya’s 47 counties.</li>
          <li>Buyers pay by M-Pesa (Paybill 400200 / Till 847562), card, or cash on Nairobi delivery.</li>
          <li>Nairobi dispatch is same-day on qualifying lots. Upcountry is two to five days. Tractors leave Eldoret on a low-bed.</li>
          <li>Headquarters: Westlands, Nairobi. Depots in Eldoret, Kisumu and Mombasa.</li>
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/sell">List a lot</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/contact">Talk to the desk</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
