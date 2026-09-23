import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { FieldLabel, Input, NativeSelect } from "@/components/ui/input";
import { COUNTIES } from "@/lib/catalog";
import { formatKes } from "@/lib/format";
import { findProduct, newOrderId, useShop, type Order } from "@/lib/store";

export const Route = createFileRoute("/checkout")({ component: CheckoutPage });

function deliveryFeeFor(county: string, subtotal: number, heavy: boolean) {
  if (heavy) return 12500;
  if (county === "Nairobi") return subtotal >= 4000 ? 0 : 350;
  return subtotal >= 8000 ? 650 : 950;
}

function CheckoutPage() {
  const cart = useShop((s) => s.cart);
  const listings = useShop((s) => s.listings);
  const placeOrder = useShop((s) => s.placeOrder);
  const navigate = useNavigate();
  const [method, setMethod] = useState<Order["payment"]>("mpesa");
  const [county, setCounty] = useState("Nairobi");
  const [busy, setBusy] = useState(false);

  const lines = useMemo(
    () =>
      cart
        .map((l) => {
          const product = findProduct(l.productId, listings);
          return product ? { ...l, product } : null;
        })
        .filter((l) => l !== null),
    [cart, listings],
  );

  const subtotal = lines.reduce((n, l) => n + l.product.price * l.qty, 0);
  const heavy = lines.some((l) => l.product.category === "machinery" && l.product.price >= 80000);
  const deliveryFee = deliveryFeeFor(county, subtotal, heavy);
  const total = subtotal + deliveryFee;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (lines.length === 0) return;
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const town = String(fd.get("town") ?? "").trim();
    const address = String(fd.get("address") ?? "").trim();
    const mpesaPhone = String(fd.get("mpesaPhone") ?? phone).trim();
    if (!name || !phone || !address) {
      toast.error("Add your name, phone and a delivery address.");
      return;
    }
    setBusy(true);
    if (method === "mpesa") {
      toast.message("STK push sent", {
        description: `Approve ${formatKes(total)} on ${mpesaPhone}.`,
      });
      await new Promise((r) => setTimeout(r, 1800));
    } else if (method === "card") {
      await new Promise((r) => setTimeout(r, 900));
    }
    const order: Order = {
      id: newOrderId(),
      createdAt: Date.now(),
      customer: { name, phone, email, county, town, address },
      payment: method,
      mpesaPhone: method === "mpesa" ? mpesaPhone : undefined,
      items: lines.map((l) => ({
        productId: l.product.id,
        name: l.product.name,
        unit: l.product.unit,
        price: l.product.price,
        qty: l.qty,
        image: l.product.image,
      })),
      subtotal,
      deliveryFee,
      total,
      status: method === "delivery" ? "pending" : "paid",
    };
    placeOrder(order);
    toast.success(method === "delivery" ? "Order placed — pay on delivery." : "Payment received.");
    void navigate({ to: "/orders/$id", params: { id: order.id } });
  }

  if (lines.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h1 className="font-display text-3xl font-semibold">Nothing to check out</h1>
        <Button className="mt-6" asChild>
          <Link to="/marketplace">Shop the floor</Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-5">
      <form onSubmit={onSubmit} className="space-y-8 lg:col-span-3">
        <div>
          <h1 className="font-display text-4xl font-semibold tracking-tight">Checkout</h1>
          <p className="mt-2 text-sm text-muted">
            M-Pesa, card, or pay on delivery in the Nairobi radius.
          </p>
        </div>
        <section className="rounded-xl bg-surface p-5 shadow-border sm:p-6">
          <h2 className="font-display text-xl font-semibold">Delivery</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <FieldLabel htmlFor="name">Full name</FieldLabel>
              <Input id="name" name="name" required autoComplete="name" />
            </div>
            <div>
              <FieldLabel htmlFor="phone">Phone</FieldLabel>
              <Input id="phone" name="phone" required placeholder="+254 7XX XXX XXX" />
            </div>
            <div>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" name="email" type="email" autoComplete="email" />
            </div>
            <div>
              <FieldLabel htmlFor="county">County</FieldLabel>
              <NativeSelect
                id="county"
                name="county"
                value={county}
                onChange={(e) => setCounty(e.target.value)}
              >
                {COUNTIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </NativeSelect>
            </div>
            <div>
              <FieldLabel htmlFor="town">Town</FieldLabel>
              <Input id="town" name="town" placeholder="Westlands" />
            </div>
            <div className="sm:col-span-2">
              <FieldLabel htmlFor="address">Address / landmark</FieldLabel>
              <Input id="address" name="address" required placeholder="Gate, building, stage" />
            </div>
          </div>
        </section>

        <section className="rounded-xl bg-surface p-5 shadow-border sm:p-6">
          <h2 className="font-display text-xl font-semibold">Payment</h2>
          <div className="mt-4 grid gap-2">
            {(
              [
                ["mpesa", "M-Pesa STK push"],
                ["card", "Visa / Mastercard"],
                ["delivery", "Pay on delivery (Nairobi radius)"],
              ] as const
            ).map(([value, label]) => (
              <label
                key={value}
                className="flex min-h-11 cursor-pointer items-center gap-3 rounded-md px-3 py-2 shadow-border"
              >
                <input
                  type="radio"
                  name="method"
                  checked={method === value}
                  onChange={() => setMethod(value)}
                  className="accent-primary"
                />
                <span className="text-sm font-medium">{label}</span>
              </label>
            ))}
          </div>
          {method === "mpesa" ? (
            <div className="mt-4">
              <FieldLabel htmlFor="mpesaPhone">M-Pesa number</FieldLabel>
              <Input id="mpesaPhone" name="mpesaPhone" placeholder="07XX XXX XXX" />
              <p className="mt-2 text-xs text-muted">
                Paybill 400200 · Till 847562. A prompt is sent to this handset.
              </p>
            </div>
          ) : null}
          {method === "card" ? (
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <FieldLabel htmlFor="cardName">Name on card</FieldLabel>
                <Input id="cardName" name="cardName" autoComplete="cc-name" />
              </div>
              <div className="sm:col-span-2">
                <FieldLabel htmlFor="cardNumber">Card number</FieldLabel>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  inputMode="numeric"
                  autoComplete="cc-number"
                  placeholder="•••• •••• •••• ••••"
                />
              </div>
              <div>
                <FieldLabel htmlFor="expiry">Expiry</FieldLabel>
                <Input id="expiry" name="expiry" placeholder="MM/YY" autoComplete="cc-exp" />
              </div>
              <div>
                <FieldLabel htmlFor="cvc">CVC</FieldLabel>
                <Input id="cvc" name="cvc" placeholder="123" autoComplete="cc-csc" />
              </div>
            </div>
          ) : null}
        </section>

        <Button type="submit" size="lg" disabled={busy} className="w-full sm:w-auto">
          {busy
            ? "Processing…"
            : method === "mpesa"
              ? `Pay ${formatKes(total)} on M-Pesa`
              : `Place order · ${formatKes(total)}`}
        </Button>
      </form>

      <aside className="h-fit rounded-xl bg-surface p-5 shadow-border lg:col-span-2">
        <h2 className="font-display text-xl font-semibold">Order</h2>
        <ul className="mt-4 space-y-3">
          {lines.map((l) => (
            <li key={l.product.id} className="flex justify-between gap-3 text-sm">
              <span className="min-w-0">
                <span className="block truncate font-medium">{l.product.name}</span>
                <span className="text-muted tabular-nums">
                  {l.qty} × {formatKes(l.product.price)}
                </span>
              </span>
              <span className="shrink-0 tabular-nums">{formatKes(l.product.price * l.qty)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
          <div className="flex justify-between">
            <span className="text-muted">Subtotal</span>
            <span className="tabular-nums">{formatKes(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Delivery</span>
            <span className="tabular-nums">
              {deliveryFee === 0 ? "Free in Nairobi" : formatKes(deliveryFee)}
            </span>
          </div>
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span className="tabular-nums">{formatKes(total)}</span>
          </div>
        </div>
      </aside>
    </main>
  );
}
