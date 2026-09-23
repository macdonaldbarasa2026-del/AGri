import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as BadgeCheck, h as Landmark, n as Truck, v as ArrowRight } from "../_libs/lucide-react.mjs";
import { b as TRUST_STATS, g as CATEGORIES, h as Button, v as PRODUCTS, y as SELLERS } from "./router-DCjYCEER.mjs";
import { t as formatKes } from "./format-DIyIwLIV.mjs";
import { n as ProductCard } from "./product-card-CTeY20rr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B0QYjWrq.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const featured = PRODUCTS.filter((p) => p.featured).slice(0, 8);
	const tractor = PRODUCTS.find((p) => p.id === "highland-45hp");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[78vh] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-highlands.jpg",
					alt: "Kenyan highland tea terraces at golden hour",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-fg/80 via-fg/35 to-fg/15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-24 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-[0.22em] text-primary-fg/80 uppercase",
							children: "Karibu · Kenya’s farm marketplace"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 max-w-2xl font-display text-4xl leading-[1.08] font-semibold tracking-tight text-primary-fg sm:text-6xl",
							children: "The farm. The market. One Shamb."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-base leading-relaxed text-primary-fg/85 sm:text-lg",
							children: "Seeds, soil, crop medicines, tractors and harvest — listed by verified Kenyan sellers, priced in shillings, paid on M-Pesa."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "inverse",
								size: "lg",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/marketplace",
									children: ["Shop the floor", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "lg",
								className: "border-0 bg-transparent text-primary-fg shadow-[0_0_0_1px_rgba(246,243,234,0.35)] hover:bg-primary-fg/10",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/sell",
									children: "List your lot"
								})
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border md:grid-cols-4",
				children: TRUST_STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-surface px-5 py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-semibold tracking-tight text-fg tabular-nums sm:text-3xl",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: s.label
					})]
				}, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.18em] text-muted uppercase",
					children: "Departments"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-semibold tracking-tight",
					children: "Everything a shamba needs"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/marketplace",
					className: "hidden text-sm font-medium text-primary sm:inline-flex sm:items-center sm:gap-1",
					children: ["All lots ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-2 gap-3 md:grid-cols-4",
				children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/marketplace",
					search: { category: c.id },
					className: "group relative overflow-hidden rounded-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.image,
							alt: "",
							className: "media aspect-4/3 size-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-fg/75 via-fg/20 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 p-3 sm:p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-wide text-primary-fg/70 uppercase",
								children: c.kicker
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-semibold text-primary-fg",
								children: c.name
							})]
						})
					]
				}, c.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.18em] text-muted uppercase",
						children: "On the floor"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold tracking-tight",
						children: "Featured lots this week"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/marketplace",
						className: "hidden text-sm font-medium text-primary sm:inline-flex sm:items-center sm:gap-1",
						children: ["Browse all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
				})]
			})
		}),
		tractor ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-stretch gap-0 px-4 py-16 sm:px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-tractor.jpg",
					alt: "Tractor working Kenyan red soil",
					className: "media size-full min-h-72 object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center rounded-b-2xl bg-primary px-6 py-10 text-primary-fg sm:px-10 lg:rounded-r-2xl lg:rounded-bl-none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.18em] text-primary-fg/70 uppercase",
						children: "Machinery desk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl",
						children: tractor.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-sm leading-relaxed text-primary-fg/80",
						children: tractor.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-display text-3xl tabular-nums",
						children: formatKes(tractor.price)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-primary-fg/70",
						children: [tractor.unit, " · Eldoret yard"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "inverse",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/products/$id",
								params: { id: tractor.id },
								children: ["Inspect this unit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						})
					})
				]
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.18em] text-muted uppercase",
						children: "Wauzaji"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold tracking-tight",
						children: "Verified Kenyan sellers"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/sellers",
						className: "hidden text-sm font-medium text-primary sm:inline-flex sm:items-center sm:gap-1",
						children: ["All sellers ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: SELLERS.slice(0, 4).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/sellers/$id",
						params: { id: s.id },
						className: "group overflow-hidden rounded-xl bg-surface shadow-border transition-[box-shadow] hover:shadow-border-hover",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-16/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.cover,
								alt: "",
								className: "media size-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-fg/55 to-transparent" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-1.5 font-display text-lg font-semibold",
								children: [s.name, s.verified ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
									className: "size-4 text-primary",
									"aria-label": "Verified"
								}) : null]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted",
								children: [
									s.town,
									", ",
									s.county,
									" · ",
									s.speciality
								]
							})]
						})]
					}, s.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.18em] text-muted uppercase",
					children: "How Shamb works"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-semibold tracking-tight",
					children: "Buy like a grocer. Sell like a packhouse."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: [
						{
							icon: Landmark,
							title: "Verified lots",
							body: "Sellers are county-listed. Seed is KEPHIS, crop medicines PCPB, food packs KEBS where marked."
						},
						{
							icon: BadgeCheck,
							title: "Pay in Kenya",
							body: "M-Pesa paybill and till, cards, or pay on delivery in Nairobi. Every price is in Kenyan shillings."
						},
						{
							icon: Truck,
							title: "Move the goods",
							body: "Same-day Nairobi, two to five days nationwide. Tractors ride a low-bed from the Eldoret yard."
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-surface p-6 shadow-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
								className: "size-5 text-primary",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-xl font-semibold",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: item.body
							})
						]
					}, item.title))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-harvest.jpg",
					alt: "Kenyan harvest on a wooden table",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-fg/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-6xl px-4 py-20 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-xl font-display text-3xl font-semibold tracking-tight text-primary-fg sm:text-4xl",
							children: "Have a harvest, a yard or an agrovet? List it on Shamb."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-lg text-sm leading-relaxed text-primary-fg/80",
							children: "Growers, mills, tractor yards and agrovets publish lots in minutes. Buyers across 47 counties see them the same day."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "inverse",
								size: "lg",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/sell",
									children: ["Start selling", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							})
						})
					]
				})
			]
		})
	] });
}
//#endregion
export { Home as component };
