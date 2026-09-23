import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { formatKes } from "@/lib/format";
import { useShop } from "@/lib/store";

export const Route = createFileRoute("/orders/$id")({
  component: OrderPage,
});

function OrderPage() {
  const { id } = Route.useParams();
  const order = useShop((s) => s.orders.find((o) => o.id === id));

  if (!order) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h1 className="font-display text-3xl font-semibold">Order not found</h1>
        <p className="mt-2 text-sm text-muted">It may only exist on the device that placed it.</p>
        <Button className="mt-6" asChild>
          <Link to="/marketplace">Marketplace</Link>
        </Button>
      </main>
    );
  }

  const paid = order.status === "paid";

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
        {paid ? "Paid" : "Pending payment"}
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">Asante. Order placed.</h1>
      <p className="mt-2 text-sm text-muted">
        Reference <span className="font-medium text-fg tabular-nums">{order.id}</span>
        {order.payment === "mpesa" ? " · M-Pesa" : order.payment === "card" ? " · Card" : " · Pay on delivery"}
      </p>

      <div className="mt-8 rounded-xl bg-surface p-5 shadow-border sm:p-6">
        <h2 className="font-display text-xl font-semibold">Lots</h2>
        <ul className="mt-4 divide-y divide-border">
          {order.items.map((item) => (
            <li key={item.productId} className="flex items-center gap-3 py-3">
              <img src={item.image} alt="" className="media size-14 rounded-md object-cover" />
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{item.name}</p>
                <p className="text-sm text-muted tabular-nums">
                  {item.qty} × {formatKes(item.price)} · {item.unit}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 space-y-1 border-t border-border pt-4 text-sm">
          <div className="flex justify-between">
            <span className="text-muted">Subtotal</span>
            <span className="tabular-nums">{formatKes(order.subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Delivery</span>
            <span className="tabular-nums">{formatKes(order.deliveryFee)}</span>
          </div>
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span className="tabular-nums">{formatKes(order.total)}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-surface p-5 shadow-border sm:p-6">
        <h2 className="font-display text-xl font-semibold">Ship to</h2>
        <p className="mt-3 text-sm leading-relaxed">
          {order.customer.name}
          <br />
          {order.customer.address}
          <br />
          {order.customer.town ? `${order.customer.town}, ` : ""}
          {order.customer.county}
          <br />
          {order.customer.phone}
          {order.customer.email ? (
            <>
              <br />
              {order.customer.email}
            </>
          ) : null}
        </p>
        <p className="mt-4 text-xs text-muted">
          Questions: hello@kenyashamb.co.ke · +254 20 764 2100
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/marketplace">Continue shopping</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/">Home</Link>
        </Button>
      </div>
    </main>
  );
}
