import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { FieldLabel, Input, NativeSelect, Textarea } from "@/components/ui/input";
import { CATEGORIES, COUNTIES, type CategoryId } from "@/lib/catalog";
import { newListingId, useShop, type SellerListing } from "@/lib/store";

export const Route = createFileRoute("/sell")({ component: SellPage });

function SellPage() {
  const publish = useShop((s) => s.publishListing);
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const business = String(fd.get("business") ?? "").trim();
    const category = String(fd.get("category") ?? "produce") as CategoryId;
    const price = Number(fd.get("price"));
    const unit = String(fd.get("unit") ?? "").trim() || "unit";
    const stock = Number(fd.get("stock") || 1);
    const county = String(fd.get("county") ?? "Nairobi");
    const town = String(fd.get("town") ?? "").trim() || county;
    const phone = String(fd.get("phone") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const description = String(fd.get("description") ?? "").trim();
    const cat = CATEGORIES.find((c) => c.id === category);

    if (!name || !business || !phone || !Number.isFinite(price) || price <= 0) {
      toast.error("Add a product name, desk name, phone and a price in shillings.");
      return;
    }

    const listing: SellerListing = {
      id: newListingId(),
      name,
      category,
      sellerId: "independent",
      price: Math.round(price),
      unit,
      image: cat?.image ?? "/images/hero-harvest.jpg",
      rating: 5,
      reviews: 0,
      stock: Math.max(1, Math.round(stock)),
      featured: true,
      origin: town,
      leadDays: 3,
      summary: description.slice(0, 140) || `Listed by ${business} in ${county}.`,
      description:
        description ||
        `${name} listed by ${business} (${town}, ${county}). Contact ${phone}.`,
      specs: [
        { label: "Seller", value: business },
        { label: "County", value: county },
        { label: "Phone", value: phone },
      ],
      listedBy: business,
      listedAt: Date.now(),
      contactPhone: phone,
      contactEmail: email,
    };

    setBusy(true);
    publish(listing);
    toast.success("Your lot is on the floor.");
    void navigate({ to: "/products/$id", params: { id: listing.id } });
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">Uza kwenye Shamb</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">List a lot</h1>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Growers, agrovets, yards and packhouses publish here. Your listing appears on the
        marketplace immediately, priced in Kenyan shillings.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-8">
        <section className="rounded-xl bg-surface p-5 shadow-border sm:p-6">
          <h2 className="font-display text-xl font-semibold">Your desk</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <FieldLabel htmlFor="business">Business name</FieldLabel>
              <Input id="business" name="business" required placeholder="e.g. Kitale Seed House" />
            </div>
            <div>
              <FieldLabel htmlFor="phone">Phone</FieldLabel>
              <Input id="phone" name="phone" required placeholder="+254 7XX XXX XXX" />
            </div>
            <div>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" name="email" type="email" placeholder="you@farm.co.ke" />
            </div>
            <div>
              <FieldLabel htmlFor="county">County</FieldLabel>
              <NativeSelect id="county" name="county" defaultValue="Nairobi">
                {COUNTIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </NativeSelect>
            </div>
            <div>
              <FieldLabel htmlFor="town">Town / market</FieldLabel>
              <Input id="town" name="town" placeholder="Eldoret" />
            </div>
          </div>
        </section>

        <section className="rounded-xl bg-surface p-5 shadow-border sm:p-6">
          <h2 className="font-display text-xl font-semibold">The lot</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <FieldLabel htmlFor="name">Product name</FieldLabel>
              <Input id="name" name="name" required placeholder="Hass avocado crate, 4 kg" />
            </div>
            <div>
              <FieldLabel htmlFor="category">Department</FieldLabel>
              <NativeSelect id="category" name="category" defaultValue="produce">
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </NativeSelect>
            </div>
            <div>
              <FieldLabel htmlFor="unit">Unit</FieldLabel>
              <Input id="unit" name="unit" placeholder="50 kg bag" />
            </div>
            <div>
              <FieldLabel htmlFor="price">Price (KES)</FieldLabel>
              <Input id="price" name="price" type="number" min={1} step={1} required placeholder="1850" />
            </div>
            <div>
              <FieldLabel htmlFor="stock">Quantity in yard</FieldLabel>
              <Input id="stock" name="stock" type="number" min={1} defaultValue={10} />
            </div>
            <div className="sm:col-span-2">
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <Textarea
                id="description"
                name="description"
                placeholder="Variety, grade, packing, where it sits, how it travels."
              />
            </div>
          </div>
        </section>

        <Button type="submit" size="lg" disabled={busy}>
          Publish on Kenya Shamb
        </Button>
      </form>
    </main>
  );
}
