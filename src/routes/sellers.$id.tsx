import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Mail, MapPin, Phone } from "lucide-react";
import { ProductGrid } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { getSeller, productsBySeller } from "@/lib/catalog";

export const Route = createFileRoute("/sellers/$id")({
  component: SellerPage,
});

function SellerPage() {
  const { id } = Route.useParams();
  const seller = getSeller(id);
  const lots = seller ? productsBySeller(seller.id) : [];

  if (!seller) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <h1 className="font-display text-3xl font-semibold">Seller not found</h1>
        <Button className="mt-6" asChild>
          <Link to="/sellers">All sellers</Link>
        </Button>
      </main>
    );
  }

  return (
    <main>
      <section className="relative min-h-72 overflow-hidden">
        <img src={seller.cover} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-fg/55" />
        <div className="relative mx-auto flex min-h-72 max-w-6xl flex-col justify-end px-4 py-10 sm:px-6">
          <p className="text-xs tracking-[0.18em] text-primary-fg/70 uppercase">{seller.speciality}</p>
          <h1 className="mt-2 flex flex-wrap items-center gap-2 font-display text-4xl font-semibold text-primary-fg">
            {seller.name}
            {seller.verified ? <BadgeCheck className="size-7" /> : null}
          </h1>
          <p className="mt-2 text-sm text-primary-fg/80">
            {seller.owner} · {seller.town}, {seller.county}
          </p>
        </div>
      </section>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3">
        <aside className="space-y-4 lg:col-span-1">
          <p className="text-sm leading-relaxed text-muted">{seller.bio}</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 text-fg">
              <MapPin className="size-4 text-primary" />
              {seller.town}, {seller.county}
            </li>
            <li>
              <a href={`tel:${seller.phone.replace(/\s/g, "")}`} className="flex items-center gap-2">
                <Phone className="size-4 text-primary" />
                {seller.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${seller.email}`} className="flex items-center gap-2">
                <Mail className="size-4 text-primary" />
                {seller.email}
              </a>
            </li>
          </ul>
          <p className="text-sm text-muted tabular-nums">
            {seller.rating.toFixed(1)} rating · {seller.reviews} reviews · {seller.years} years on
            the floor
          </p>
        </aside>
        <div className="lg:col-span-2">
          <h2 className="font-display text-2xl font-semibold">Lots from this desk</h2>
          <div className="mt-6">
            <ProductGrid products={lots} />
          </div>
        </div>
      </div>
    </main>
  );
}
