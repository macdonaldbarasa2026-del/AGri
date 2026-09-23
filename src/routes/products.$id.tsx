import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Heart, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getSeller, relatedProducts } from "@/lib/catalog";
import { formatKes } from "@/lib/format";
import { findProduct, useShop } from "@/lib/store";

export const Route = createFileRoute("/products/$id")({
  component: ProductPage,
});

function IndependentDesk({ productId, origin }: { productId: string; origin: string }) {
  const listing = useShop((s) => s.listings.find((l) => l.id === productId));
  return (
    <div className="mt-8 rounded-xl bg-surface p-4 shadow-border">
      <p className="font-medium">{listing?.listedBy ?? "Independent listing"}</p>
      <p className="text-sm text-muted">
        {origin}
        {listing?.contactPhone ? ` · ${listing.contactPhone}` : ""}
      </p>
      {listing?.contactEmail ? (
        <a href={`mailto:${listing.contactEmail}`} className="mt-1 block text-sm text-primary">
          {listing.contactEmail}
        </a>
      ) : (
        <p className="text-sm text-muted">Published on Kenya Shamb by a Kenyan seller.</p>
      )}
    </div>
  );
}

function ProductPage() {
  const { id } = Route.useParams();
  const listings = useShop((s) => s.listings);
  const addToCart = useShop((s) => s.addToCart);
  const saved = useShop((s) => s.saved);
  const toggleSaved = useShop((s) => s.toggleSaved);
  const found = findProduct(id, listings);
  const [qty, setQty] = useState(1);
  const [photo, setPhoto] = useState(0);

  if (!found) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <h1 className="font-display text-3xl font-semibold">Lot not found</h1>
        <p className="mt-2 text-muted">It may have been withdrawn from the floor.</p>
        <Button className="mt-6" asChild>
          <Link to="/marketplace">Back to marketplace</Link>
        </Button>
      </main>
    );
  }

  const product = found;
  const seller = getSeller(product.sellerId);
  const gallery = product.gallery?.length ? product.gallery : [product.image];
  const related = relatedProducts(product);
  const isSaved = saved.includes(product.id);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-xs text-muted">
        <Link to="/marketplace" className="hover:text-fg">
          Marketplace
        </Link>
        <span className="mx-2">/</span>
        {product.name}
      </p>
      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-2xl bg-fg/5">
            <img
              src={gallery[photo] ?? product.image}
              alt={product.name}
              className="media aspect-4/3 w-full object-cover"
            />
          </div>
          {gallery.length > 1 ? (
            <div className="mt-3 flex gap-2">
              {gallery.map((src, i) => (
                <button
                  key={src + String(i)}
                  type="button"
                  onClick={() => setPhoto(i)}
                  className={`size-16 overflow-hidden rounded-md ${
                    i === photo ? "ring-2 ring-primary ring-offset-2 ring-offset-bg" : ""
                  }`}
                >
                  <img src={src} alt="" className="size-full object-cover" />
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div>
          <p className="text-xs font-medium tracking-widest text-muted uppercase">
            {product.origin} · {product.unit}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">{product.name}</h1>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.kephis ? <Badge tone="leaf">KEPHIS</Badge> : null}
            {product.kebs ? <Badge tone="leaf">KEBS</Badge> : null}
            {product.pcpb ? <Badge tone="leaf">PCPB</Badge> : null}
            {product.stock > 0 ? (
              <Badge>{product.stock} in yard</Badge>
            ) : (
              <Badge tone="primary">Out of stock</Badge>
            )}
          </div>
          <div className="mt-6 flex items-end gap-3">
            <p className="font-display text-4xl font-semibold tabular-nums">
              {formatKes(product.price)}
            </p>
            {product.compareAt ? (
              <p className="pb-1 text-muted line-through tabular-nums">
                {formatKes(product.compareAt)}
              </p>
            ) : null}
          </div>
          <p className="mt-1 text-sm text-muted">{product.unit}</p>
          <p className="mt-5 text-sm leading-relaxed text-muted">{product.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="inline-flex h-11 items-center rounded-md bg-surface shadow-border">
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center"
                aria-label="Decrease quantity"
                onClick={() => setQty((n) => Math.max(1, n - 1))}
              >
                <Minus className="size-4" />
              </button>
              <span className="min-w-8 text-center text-sm tabular-nums">{qty}</span>
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center"
                aria-label="Increase quantity"
                onClick={() => setQty((n) => n + 1)}
              >
                <Plus className="size-4" />
              </button>
            </div>
            <Button
              size="lg"
              disabled={product.stock <= 0}
              onClick={() => {
                addToCart(product.id, qty);
                toast.success(`${product.name} added to basket`);
              }}
            >
              Add to basket
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label={isSaved ? "Remove from saved" : "Save lot"}
              onClick={() => toggleSaved(product.id)}
            >
              <Heart className={`size-4 ${isSaved ? "fill-primary text-primary" : ""}`} />
            </Button>
          </div>

          <ul className="mt-8 space-y-3 text-sm text-muted">
            <li className="flex gap-2">
              <Truck className="mt-0.5 size-4 text-primary" />
              Dispatch in {product.leadDays} day{product.leadDays === 1 ? "" : "s"} · Nairobi
              same-day on qualifying lots
            </li>
            <li className="flex gap-2">
              <ShieldCheck className="mt-0.5 size-4 text-primary" />
              Pay on M-Pesa, card, or delivery in the Nairobi radius
            </li>
          </ul>

          {seller ? (
            <Link
              to="/sellers/$id"
              params={{ id: seller.id }}
              className="mt-8 flex items-center gap-3 rounded-xl bg-surface p-4 shadow-border"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-md bg-primary font-display font-semibold text-primary-fg">
                {seller.initials}
              </span>
              <span>
                <span className="flex items-center gap-1 font-medium text-fg">
                  {seller.name}
                  {seller.verified ? <BadgeCheck className="size-4 text-primary" /> : null}
                </span>
                <span className="block text-sm text-muted">
                  {seller.town}, {seller.county} · {seller.rating.toFixed(1)} · {seller.reviews}{" "}
                  reviews
                </span>
              </span>
            </Link>
          ) : (
            <IndependentDesk productId={product.id} origin={product.origin} />
          )}
        </div>
      </div>

      <section className="mt-14 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="font-display text-2xl font-semibold">About this lot</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{product.description}</p>
        </div>
        <div className="rounded-xl bg-surface p-5 shadow-border">
          <h3 className="font-display text-lg font-semibold">Specifications</h3>
          <dl className="mt-3 divide-y divide-border">
            {product.specs.map((s) => (
              <div key={s.label} className="flex justify-between gap-4 py-2 text-sm">
                <dt className="text-muted">{s.label}</dt>
                <dd className="text-right font-medium">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold">Related lots</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
