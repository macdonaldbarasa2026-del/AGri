import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as BadgeCheck, d as Minus, g as Heart, l as Plus, n as Truck, s as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as relatedProducts, h as Button, r as Route$1, s as findProduct, u as useShop, x as getSeller } from "./router-DCjYCEER.mjs";
import { t as formatKes } from "./format-DIyIwLIV.mjs";
import { n as ProductCard, t as Badge } from "./product-card-CTeY20rr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._id-C7fZ3LiF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function IndependentDesk({ productId, origin }) {
	const listing = useShop((s) => s.listings.find((l) => l.id === productId));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8 rounded-xl bg-surface p-4 shadow-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: listing?.listedBy ?? "Independent listing"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [origin, listing?.contactPhone ? ` · ${listing.contactPhone}` : ""]
			}),
			listing?.contactEmail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `mailto:${listing.contactEmail}`,
				className: "mt-1 block text-sm text-primary",
				children: listing.contactEmail
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Published on Kenya Shamb by a Kenyan seller."
			})
		]
	});
}
function ProductPage() {
	const { id } = Route$1.useParams();
	const listings = useShop((s) => s.listings);
	const addToCart = useShop((s) => s.addToCart);
	const saved = useShop((s) => s.saved);
	const toggleSaved = useShop((s) => s.toggleSaved);
	const product = findProduct(id, listings);
	const [qty, setQty] = (0, import_react.useState)(1);
	const [photo, setPhoto] = (0, import_react.useState)(0);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-20 text-center sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-semibold",
				children: "Lot not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "It may have been withdrawn from the floor."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-6",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/marketplace",
					children: "Back to marketplace"
				})
			})
		]
	});
	const seller = getSeller(product.sellerId);
	const gallery = product.gallery?.length ? product.gallery : [product.image];
	const related = relatedProducts(product);
	const isSaved = saved.includes(product.id);
	function add() {
		addToCart(product.id, qty);
		toast.success(`${product.name} added to basket`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/marketplace",
						className: "hover:text-fg",
						children: "Marketplace"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-2",
						children: "/"
					}),
					product.name
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl bg-fg/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: gallery[photo] ?? product.image,
						alt: product.name,
						className: "media aspect-4/3 w-full object-cover"
					})
				}), gallery.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex gap-2",
					children: gallery.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setPhoto(i),
						className: `size-16 overflow-hidden rounded-md ${i === photo ? "ring-2 ring-primary ring-offset-2 ring-offset-bg" : ""}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: "",
							className: "size-full object-cover"
						})
					}, src + String(i)))
				}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-medium tracking-widest text-muted uppercase",
						children: [
							product.origin,
							" · ",
							product.unit
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl font-semibold tracking-tight",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [
							product.kephis ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "leaf",
								children: "KEPHIS"
							}) : null,
							product.kebs ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "leaf",
								children: "KEBS"
							}) : null,
							product.pcpb ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "leaf",
								children: "PCPB"
							}) : null,
							product.stock > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: [product.stock, " in yard"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "primary",
								children: "Out of stock"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-end gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-4xl font-semibold tabular-nums",
							children: formatKes(product.price)
						}), product.compareAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pb-1 text-muted line-through tabular-nums",
							children: formatKes(product.compareAt)
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: product.unit
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-relaxed text-muted",
						children: product.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex h-11 items-center rounded-md bg-surface shadow-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "inline-flex size-11 items-center justify-center",
										"aria-label": "Decrease quantity",
										onClick: () => setQty((n) => Math.max(1, n - 1)),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-8 text-center text-sm tabular-nums",
										children: qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "inline-flex size-11 items-center justify-center",
										"aria-label": "Increase quantity",
										onClick: () => setQty((n) => n + 1),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								onClick: add,
								disabled: product.stock <= 0,
								children: "Add to basket"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "icon",
								"aria-label": isSaved ? "Remove from saved" : "Save lot",
								onClick: () => toggleSaved(product.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `size-4 ${isSaved ? "fill-primary text-primary" : ""}` })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 space-y-3 text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "mt-0.5 size-4 text-primary" }),
								"Dispatch in ",
								product.leadDays,
								" day",
								product.leadDays === 1 ? "" : "s",
								" · Nairobi same-day on qualifying lots"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 size-4 text-primary" }), "Pay on M-Pesa, card, or delivery in the Nairobi radius"]
						})]
					}),
					seller ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/sellers/$id",
						params: { id: seller.id },
						className: "mt-8 flex items-center gap-3 rounded-xl bg-surface p-4 shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex size-11 items-center justify-center rounded-md bg-primary font-display font-semibold text-primary-fg",
							children: seller.initials
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 font-medium text-fg",
							children: [seller.name, seller.verified ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "size-4 text-primary" }) : null]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block text-sm text-muted",
							children: [
								seller.town,
								", ",
								seller.county,
								" · ",
								seller.rating.toFixed(1),
								" · ",
								seller.reviews,
								" ",
								"reviews"
							]
						})] })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndependentDesk, {
						productId: product.id,
						origin: product.origin
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14 grid gap-8 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: "About this lot"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
						children: product.description
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface p-5 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold",
						children: "Specifications"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-3 divide-y divide-border",
						children: product.specs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: s.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-right font-medium",
								children: s.value
							})]
						}, s.label))
					})]
				})]
			}),
			related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: "Related lots"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
				})]
			}) : null
		]
	});
}
//#endregion
export { ProductPage as component };
