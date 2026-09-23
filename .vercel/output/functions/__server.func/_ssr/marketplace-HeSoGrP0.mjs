import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as cn, _ as COUNTIES, a as Route$5, f as Input, g as CATEGORIES, o as allProducts, p as NativeSelect, u as useShop, w as searchProducts, x as getSeller } from "./router-BhauvmKg.mjs";
import { r as ProductGrid } from "./product-card-DqrN__HA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/marketplace-HeSoGrP0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MarketplacePage() {
	const { q, category } = Route$5.useSearch();
	const navigate = Route$5.useNavigate();
	const listings = useShop((s) => s.listings);
	const [county, setCounty] = (0, import_react.useState)("");
	const [sort, setSort] = (0, import_react.useState)("featured");
	const [query, setQuery] = (0, import_react.useState)(q ?? "");
	const products = (0, import_react.useMemo)(() => {
		let list = allProducts(listings);
		if (category) list = list.filter((p) => p.category === category);
		if (county) list = list.filter((p) => {
			return getSeller(p.sellerId)?.county === county || p.origin === county;
		});
		list = searchProducts(q ?? "", list);
		if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
		else if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
		else if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
		else list = [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
		return list;
	}, [
		listings,
		category,
		county,
		q,
		sort
	]);
	function setCategory(next) {
		navigate({ search: (prev) => ({
			...prev,
			category: next
		}) });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.18em] text-muted uppercase",
				children: "Bidhaa"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold tracking-tight",
				children: "Marketplace"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
				children: "Certified seed, depot fertilizer, licensed crop medicines, yard machinery and farm-gate harvest. Filter by department or county."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-6 flex flex-col gap-3 sm:flex-row",
				onSubmit: (e) => {
					e.preventDefault();
					navigate({ search: (prev) => ({
						...prev,
						q: query.trim() || void 0
					}) });
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search lots, sellers, counties",
						className: "sm:max-w-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
						value: county,
						onChange: (e) => setCounty(e.target.value),
						className: "sm:max-w-48",
						"aria-label": "County",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "All counties"
						}), COUNTIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c,
							children: c
						}, c))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
						value: sort,
						onChange: (e) => setSort(e.target.value),
						className: "sm:max-w-48",
						"aria-label": "Sort",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "featured",
								children: "Featured"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "price-asc",
								children: "Price, low to high"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "price-desc",
								children: "Price, high to low"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "rating",
								children: "Top rated"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex gap-2 overflow-x-auto pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setCategory(void 0),
					className: cn("h-10 shrink-0 rounded-full px-4 text-sm font-medium", !category ? "bg-primary text-primary-fg" : "bg-surface text-fg shadow-border"),
					children: "All"
				}), CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setCategory(c.id),
					className: cn("h-10 shrink-0 rounded-full px-4 text-sm font-medium", category === c.id ? "bg-primary text-primary-fg" : "bg-surface text-fg shadow-border"),
					children: c.name
				}, c.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 mb-4 text-sm text-muted tabular-nums",
				children: [products.length, " lots"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { products })
		]
	});
}
//#endregion
export { MarketplacePage as component };
