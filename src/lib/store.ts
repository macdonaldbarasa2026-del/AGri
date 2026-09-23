import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PRODUCTS, type CategoryId, type Product } from "@/lib/catalog";

export type CartLine = {
  productId: string;
  qty: number;
};

export type SellerListing = Product & {
  listedBy: string;
  listedAt: number;
  contactPhone: string;
  contactEmail: string;
};

export type Order = {
  id: string;
  createdAt: number;
  customer: {
    name: string;
    phone: string;
    email: string;
    county: string;
    town: string;
    address: string;
  };
  payment: "mpesa" | "card" | "delivery";
  mpesaPhone?: string;
  items: { productId: string; name: string; unit: string; price: number; qty: number; image: string }[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: "paid" | "pending";
};

type ShopState = {
  cart: CartLine[];
  saved: string[];
  listings: SellerListing[];
  orders: Order[];
  addToCart: (productId: string, qty?: number) => void;
  setQty: (productId: string, qty: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  toggleSaved: (productId: string) => void;
  publishListing: (listing: SellerListing) => void;
  placeOrder: (order: Order) => void;
};

export const useShop = create<ShopState>()(
  persist(
    (set, get) => ({
      cart: [],
      saved: [],
      listings: [],
      orders: [],
      addToCart: (productId, qty = 1) => {
        const cart = [...get().cart];
        const i = cart.findIndex((l) => l.productId === productId);
        if (i >= 0) cart[i] = { productId, qty: cart[i].qty + qty };
        else cart.push({ productId, qty });
        set({ cart });
      },
      setQty: (productId, qty) => {
        if (qty <= 0) {
          set({ cart: get().cart.filter((l) => l.productId !== productId) });
          return;
        }
        set({
          cart: get().cart.map((l) => (l.productId === productId ? { ...l, qty } : l)),
        });
      },
      removeFromCart: (productId) =>
        set({ cart: get().cart.filter((l) => l.productId !== productId) }),
      clearCart: () => set({ cart: [] }),
      toggleSaved: (productId) => {
        const saved = get().saved;
        set({
          saved: saved.includes(productId)
            ? saved.filter((id) => id !== productId)
            : [...saved, productId],
        });
      },
      publishListing: (listing) => set({ listings: [listing, ...get().listings] }),
      placeOrder: (order) => set({ orders: [order, ...get().orders], cart: [] }),
    }),
    { name: "kenya-shamb-shop" },
  ),
);

export function allProducts(listings: SellerListing[]): Product[] {
  return [...listings, ...PRODUCTS];
}

export function findProduct(id: string, listings: SellerListing[]): Product | undefined {
  return listings.find((p) => p.id === id) ?? PRODUCTS.find((p) => p.id === id);
}

export function cartCount(cart: CartLine[]): number {
  return cart.reduce((n, l) => n + l.qty, 0);
}

export function newListingId(): string {
  return `listing-${Date.now().toString(36)}`;
}

export function newOrderId(): string {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `KS-2026-${n}`;
}

export const CATEGORY_IDS: CategoryId[] = [
  "seeds",
  "fertilizer",
  "protection",
  "produce",
  "machinery",
  "livestock",
  "irrigation",
  "tools",
];
