import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as Button } from "./router-DCjYCEER.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BClivEm7.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-80 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero-highlands.jpg",
				alt: "Kenyan highland terraces",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-fg/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-80 max-w-6xl flex-col justify-end px-4 py-12 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.18em] text-primary-fg/70 uppercase",
					children: "The house"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 max-w-2xl font-display text-4xl font-semibold tracking-tight text-primary-fg sm:text-5xl",
					children: "Built for Kenyan farms, not imported catalogues."
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-14 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg leading-relaxed text-fg",
				children: "Kenya Shamb is a marketplace for the things a shamba actually runs on: certified seed, depot fertilizer, licensed crop and vet medicines, irrigation, machinery, and the harvest that pays for it all."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-sm leading-relaxed text-muted",
				children: "We started from a simple failure of the middle. A grower in Kitale and a buyer in Changamwe should not need five phone calls and a broker who never sees the lot. Shamb puts the desk in public — price in Kenyan shillings, seller named, county listed, payment on M-Pesa."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-sm leading-relaxed text-muted",
				children: "Seed lots marked KEPHIS are merchant-certified. Crop medicines marked PCPB are sold by licensed agrovets. Food packs marked KEBS have been through a packhouse inspection. We are not a government subsidy desk; NCPB fertilizer at KES 2,000 is a public programme, and we publish commercial highland prices beside it so farmers can tell the two apart."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl font-semibold",
				children: "How we trade"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-4 space-y-3 text-sm leading-relaxed text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sellers publish lots from any of Kenya’s 47 counties." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Buyers pay by M-Pesa (Paybill 400200 / Till 847562), card, or cash on Nairobi delivery." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Nairobi dispatch is same-day on qualifying lots. Upcountry is two to five days. Tractors leave Eldoret on a low-bed." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Headquarters: Westlands, Nairobi. Depots in Eldoret, Kisumu and Mombasa." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/sell",
						children: "List a lot"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						children: "Talk to the desk"
					})
				})]
			})
		]
	})] });
}
//#endregion
export { AboutPage as component };
