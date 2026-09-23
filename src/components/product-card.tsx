import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getSeller, type Product } from "@/lib/catalog";
import { formatKes } from "@/lib/format";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const seller = getSeller(product.sellerId);
  const soldOut = product.stock <= 0;

  return (
    <Link
      to="/products/$id"
      params={{ id: product.id }}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl bg-surface shadow-border transition-[box-shadow,transform] duration-200 ease-out hover:shadow-border-hover motion-safe:hover:-translate-y-0.5",
        className,
      )}
    >
      <div className="relative aspect-4/3 overflow-hidden bg-fg/5">
        <img
          src={product.image}
          alt={product.name}
          className="media size-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.kephis ? <Badge tone="inverse">KEPHIS</Badge> : null}
          {product.kebs ? <Badge tone="inverse">KEBS</Badge> : null}
          {product.pcpb ? <Badge tone="inverse">PCPB</Badge> : null}
          {soldOut ? <Badge tone="primary">Out of stock</Badge> : null}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs font-medium tracking-wide text-muted uppercase">
          {seller?.county ?? product.origin} · {product.unit}
        </p>
        <h3 className="font-display text-lg leading-snug font-semibold tracking-tight text-fg">
          {product.name}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted">{product.summary}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-3">
          <div>
            <p className="font-medium text-fg tabular-nums">{formatKes(product.price)}</p>
            {product.compareAt ? (
              <p className="text-xs text-muted line-through tabular-nums">
                {formatKes(product.compareAt)}
              </p>
            ) : null}
          </div>
          <p className="flex items-center gap-1 text-xs text-muted tabular-nums">
            <Star className="size-3.5 fill-primary text-primary" aria-hidden />
            {product.rating.toFixed(1)}
            <span className="text-muted/70">({product.reviews})</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="rounded-xl bg-surface px-6 py-16 text-center shadow-border">
        <p className="font-display text-2xl text-fg">No lots match that filter.</p>
        <p className="mt-2 text-sm text-muted">Widen the county, category or search terms.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
