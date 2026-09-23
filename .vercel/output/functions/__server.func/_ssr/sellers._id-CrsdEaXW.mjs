import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as BadgeCheck, m as Mail, p as MapPin, u as Phone } from "../_libs/lucide-react.mjs";
import { S as productsBySeller, h as Button, n as Route, x as getSeller } from "./router-DCjYCEER.mjs";
import { r as ProductGrid } from "./product-card-CTeY20rr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sellers._id-CrsdEaXW.js
var import_jsx_runtime = require_jsx_runtime();
function SellerPage() {
	const { id } = Route.useParams();
	const seller = getSeller(id);
	const lots = seller ? productsBySeller(seller.id) : [];
	if (!seller) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-20 text-center sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl font-semibold",
			children: "Seller not found"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-6",
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/sellers",
				children: "All sellers"
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-72 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: seller.cover,
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-fg/55" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-72 max-w-6xl flex-col justify-end px-4 py-10 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.18em] text-primary-fg/70 uppercase",
						children: seller.speciality
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-2 flex flex-wrap items-center gap-2 font-display text-4xl font-semibold text-primary-fg",
						children: [seller.name, seller.verified ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "size-7" }) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-primary-fg/80",
						children: [
							seller.owner,
							" · ",
							seller.town,
							", ",
							seller.county
						]
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "space-y-4 lg:col-span-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: seller.bio
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2 text-fg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-primary" }),
								seller.town,
								", ",
								seller.county
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${seller.phone.replace(/\s/g, "")}`,
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-primary" }), seller.phone]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${seller.email}`,
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-primary" }), seller.email]
						}) })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted tabular-nums",
					children: [
						seller.rating.toFixed(1),
						" rating · ",
						seller.reviews,
						" reviews · ",
						seller.years,
						" years on the floor"
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-semibold",
				children: "Lots from this desk"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { products: lots })
			})]
		})]
	})] });
}
//#endregion
export { SellerPage as component };
