import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as BadgeCheck } from "../_libs/lucide-react.mjs";
import { y as SELLERS } from "./router-BhauvmKg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sellers-BKph_kkb.js
var import_jsx_runtime = require_jsx_runtime();
function SellersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.18em] text-muted uppercase",
				children: "Wauzaji"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold tracking-tight",
				children: "Sellers"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
				children: "Co-ops, tractor yards, packhouses and agrovets. Every desk on this floor is county-listed and reachable by phone."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: SELLERS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/sellers/$id",
					params: { id: s.id },
					className: "group overflow-hidden rounded-xl bg-surface shadow-border transition-[box-shadow] hover:shadow-border-hover",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-16/9",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.cover,
								alt: "",
								className: "media size-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-fg/60 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute bottom-3 left-3 inline-flex size-11 items-center justify-center rounded-md bg-primary font-display font-semibold text-primary-fg",
								children: s.initials
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "flex items-center gap-1.5 font-display text-xl font-semibold",
								children: [s.name, s.verified ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "size-4 text-primary" }) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted",
								children: [
									s.owner,
									" · ",
									s.town,
									", ",
									s.county
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 line-clamp-3 text-sm leading-relaxed text-muted",
								children: s.bio
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-xs tracking-wide text-muted uppercase",
								children: [
									s.speciality,
									" · ",
									s.rating.toFixed(1),
									" · ",
									s.years,
									" yrs"
								]
							})
						]
					})]
				}, s.id))
			})
		]
	});
}
//#endregion
export { SellersPage as component };
