import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Star } from "../_libs/lucide-react.mjs";
import { T as cn, x as getSeller } from "./router-DCjYCEER.mjs";
import { t as formatKes } from "./format-DIyIwLIV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-CTeY20rr.js
var import_jsx_runtime = require_jsx_runtime();
function Badge({ className, tone = "muted", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide", tone === "muted" && "bg-fg/6 text-muted", tone === "primary" && "bg-primary text-primary-fg", tone === "leaf" && "bg-leaf/15 text-primary", tone === "inverse" && "bg-primary-fg/12 text-primary-fg", className),
		children
	});
}
function ProductCard({ product, className }) {
	const seller = getSeller(product.sellerId);
	const soldOut = product.stock <= 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/products/$id",
		params: { id: product.id },
		className: cn("group flex flex-col overflow-hidden rounded-xl bg-surface shadow-border transition-[box-shadow,transform] duration-200 ease-out hover:shadow-border-hover motion-safe:hover:-translate-y-0.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-4/3 overflow-hidden bg-fg/5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: product.name,
				className: "media size-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-3 left-3 flex flex-wrap gap-1.5",
				children: [
					product.kephis ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "inverse",
						children: "KEPHIS"
					}) : null,
					product.kebs ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "inverse",
						children: "KEBS"
					}) : null,
					product.pcpb ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "inverse",
						children: "PCPB"
					}) : null,
					soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "primary",
						children: "Out of stock"
					}) : null
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-2 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-medium tracking-wide text-muted uppercase",
					children: [
						seller?.county ?? product.origin,
						" · ",
						product.unit
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg leading-snug font-semibold tracking-tight text-fg",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "line-clamp-2 text-sm leading-relaxed text-muted",
					children: product.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex items-end justify-between gap-3 pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-fg tabular-nums",
						children: formatKes(product.price)
					}), product.compareAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted line-through tabular-nums",
						children: formatKes(product.compareAt)
					}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-1 text-xs text-muted tabular-nums",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								className: "size-3.5 fill-primary text-primary",
								"aria-hidden": true
							}),
							product.rating.toFixed(1),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted/70",
								children: [
									"(",
									product.reviews,
									")"
								]
							})
						]
					})]
				})
			]
		})]
	});
}
function ProductGrid({ products }) {
	if (products.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface px-6 py-16 text-center shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl text-fg",
			children: "No lots match that filter."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted",
			children: "Widen the county, category or search terms."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
		children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
	});
}
//#endregion
export { ProductCard as n, ProductGrid as r, Badge as t };
