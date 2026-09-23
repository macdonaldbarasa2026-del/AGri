import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatKes } from "@/lib/format";
import { findProduct, useShop } from "@/lib/store";

export const Route = createFileRoute("/cart")({ component: CartPage });

function CartPage() {
  const cart = useShop((s) => s.cart);
  const listings = useShop((s) => s.listings);
  const setQty = useShop((s) => s.setQty);
  const removeFromCart = useShop((s) => s.removeFromCart);

  const lines = cart
    .map((l) => {
      const product = findProduct(l.productId, listings);
      return product ? { ...l, product } : null;
    })
    .filter((l) => l !== null);

  const subtotal = lines.reduce((n, l) => n + l.product.price * l.qty, 0);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Basket</h1>
      {lines.length === 0 ? (
        <div className="mt-8 rounded-xl bg-surface px-6 py-16 text-center shadow-border">
          <p className="font-display text-2xl">Your basket is empty.</p>
          <p className="mt-2 text-sm text-muted">The floor is open — seed, soil, steel and harvest.</p>
          <Button className="mt-6" asChild>
            <Link to="/marketplace">Shop the floor</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          <ul className="space-y-4 lg:col-span-3">
            {lines.map(({ product, qty }) => (
              <li
                key={product.id}
                className="flex gap-4 rounded-xl bg-surface p-3 shadow-border sm:p-4"
              >
                <Link
                  to="/products/$id"
                  params={{ id: product.id }}
                  className="size-24 shrink-0 overflow-hidden rounded-md"
                >
                  <img src={product.image} alt="" className="media size-full object-cover" />
                </Link>
                <div className="min-w-0 flex-1">
                  <Link
                    to="/products/$id"
                    params={{ id: product.id }}
                    className="font-display text-lg font-semibold leading-snug"
                  >
                    {product.name}
                  </Link>
                  <p className="text-sm text-muted">{product.unit}</p>
                  <p className="mt-1 font-medium tabular-nums">{formatKes(product.price)}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="inline-flex h-10 items-center rounded-md bg-bg shadow-border">
                      <button
                        type="button"
                        className="inline-flex size-10 items-center justify-center"
                        aria-label="Decrease"
                        onClick={() => setQty(product.id, qty - 1)}
                      >
                        <Minus className="size-4" />
                      </button>
                      <span className="min-w-6 text-center text-sm tabular-nums">{qty}</span>
                      <button
                        type="button"
                        className="inline-flex size-10 items-center justify-center"
                        aria-label="Increase"
                        onClick={() => setQty(product.id, qty + 1)}
                      >
                        <Plus className="size-4" />
                      </button>
                    </div>
                    <button
                      type="button"
                      className="inline-flex size-10 items-center justify-center text-muted hover:text-danger"
                      aria-label="Remove"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <aside className="h-fit rounded-xl bg-surface p-5 shadow-border lg:col-span-2">
            <h2 className="font-display text-xl font-semibold">Summary</h2>
            <div className="mt-4 flex justify-between text-sm">
              <span className="text-muted">Subtotal</span>
              <span className="font-medium tabular-nums">{formatKes(subtotal)}</span>
            </div>
            <p className="mt-2 text-xs text-muted">Delivery calculated at checkout, by county.</p>
            <Button className="mt-6 w-full" size="lg" asChild>
              <Link to="/checkout">Checkout</Link>
            </Button>
          </aside>
        </div>
      )}
    </main>
  );
}
