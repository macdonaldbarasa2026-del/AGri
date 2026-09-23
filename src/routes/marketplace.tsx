import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProductGrid } from "@/components/product-card";
import { Input, NativeSelect } from "@/components/ui/input";
import { CATEGORIES, COUNTIES, getSeller, searchProducts, type CategoryId } from "@/lib/catalog";
import { allProducts, useShop } from "@/lib/store";
import { cn } from "@/lib/utils";

type SortKey = "featured" | "price-asc" | "price-desc" | "rating";

type MarketplaceSearch = {
  q?: string;
  category?: CategoryId;
};

export const Route = createFileRoute("/marketplace")({
  validateSearch: (search: Record<string, unknown>): MarketplaceSearch => ({
    q: typeof search.q === "string" ? search.q : undefined,
    category:
      typeof search.category === "string" &&
      CATEGORIES.some((c) => c.id === search.category)
        ? (search.category as CategoryId)
        : undefined,
  }),
  component: MarketplacePage,
});

function MarketplacePage() {
  const { q, category } = Route.useSearch();
  const navigate = Route.useNavigate();
  const listings = useShop((s) => s.listings);
  const [county, setCounty] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");
  const [query, setQuery] = useState(q ?? "");

  const products = useMemo(() => {
    let list = allProducts(listings);
    if (category) list = list.filter((p) => p.category === category);
    if (county) {
      list = list.filter((p) => {
        const seller = getSeller(p.sellerId);
        return seller?.county === county || p.origin === county;
      });
    }
    list = searchProducts(q ?? "", list);
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    else list = [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
    return list;
  }, [listings, category, county, q, sort]);

  function setCategory(next?: CategoryId) {
    void navigate({
      search: (prev) => ({ ...prev, category: next }),
    });
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">Bidhaa</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">Marketplace</h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
        Certified seed, depot fertilizer, licensed crop medicines, yard machinery and
        farm-gate harvest. Filter by department or county.
      </p>

      <form
        className="mt-6 flex flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          void navigate({ search: (prev) => ({ ...prev, q: query.trim() || undefined }) });
        }}
      >
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search lots, sellers, counties"
          className="sm:max-w-sm"
        />
        <NativeSelect
          value={county}
          onChange={(e) => setCounty(e.target.value)}
          className="sm:max-w-48"
          aria-label="County"
        >
          <option value="">All counties</option>
          {COUNTIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </NativeSelect>
        <NativeSelect
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="sm:max-w-48"
          aria-label="Sort"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price, low to high</option>
          <option value="price-desc">Price, high to low</option>
          <option value="rating">Top rated</option>
        </NativeSelect>
      </form>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
        <button
          type="button"
          onClick={() => setCategory(undefined)}
          className={cn(
            "h-10 shrink-0 rounded-full px-4 text-sm font-medium",
            !category ? "bg-primary text-primary-fg" : "bg-surface text-fg shadow-border",
          )}
        >
          All
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCategory(c.id)}
            className={cn(
              "h-10 shrink-0 rounded-full px-4 text-sm font-medium",
              category === c.id ? "bg-primary text-primary-fg" : "bg-surface text-fg shadow-border",
            )}
          >
            {c.name}
          </button>
        ))}
      </div>

      <p className="mt-6 mb-4 text-sm text-muted tabular-nums">{products.length} lots</p>
      <ProductGrid products={products} />
    </main>
  );
}
