import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link, x as require_jsx_runtime, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as COUNTIES, d as FieldLabel, f as Input, h as Button, l as newOrderId, p as NativeSelect, s as findProduct, u as useShop } from "./router-BhauvmKg.mjs";
import { t as formatKes } from "./format-DIyIwLIV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-U9d346l_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function deliveryFeeFor(county, subtotal, heavy) {
	if (heavy) return 12500;
	if (county === "Nairobi") return subtotal >= 4e3 ? 0 : 350;
	return subtotal >= 8e3 ? 650 : 950;
}
function CheckoutPage() {
	const cart = useShop((s) => s.cart);
	const listings = useShop((s) => s.listings);
	const placeOrder = useShop((s) => s.placeOrder);
	const navigate = useNavigate();
	const [method, setMethod] = (0, import_react.useState)("mpesa");
	const [county, setCounty] = (0, import_react.useState)("Nairobi");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const lines = (0, import_react.useMemo)(() => cart.map((l) => {
		const product = findProduct(l.productId, listings);
		return product ? {
			...l,
			product
		} : null;
	}).filter((l) => l !== null), [cart, listings]);
	const subtotal = lines.reduce((n, l) => n + l.product.price * l.qty, 0);
	const deliveryFee = deliveryFeeFor(county, subtotal, lines.some((l) => l.product.category === "machinery" && l.product.price >= 8e4));
	const total = subtotal + deliveryFee;
	async function onSubmit(e) {
		e.preventDefault();
		if (lines.length === 0) return;
		const fd = new FormData(e.currentTarget);
		const name = String(fd.get("name") ?? "").trim();
		const phone = String(fd.get("phone") ?? "").trim();
		const email = String(fd.get("email") ?? "").trim();
		const town = String(fd.get("town") ?? "").trim();
		const address = String(fd.get("address") ?? "").trim();
		const mpesaPhone = String(fd.get("mpesaPhone") ?? phone).trim();
		if (!name || !phone || !address) {
			toast.error("Add your name, phone and a delivery address.");
			return;
		}
		setBusy(true);
		if (method === "mpesa") {
			toast.message("STK push sent", { description: `Approve ${formatKes(total)} on ${mpesaPhone}.` });
			await new Promise((r) => setTimeout(r, 1800));
		} else if (method === "card") await new Promise((r) => setTimeout(r, 900));
		const order = {
			id: newOrderId(),
			createdAt: Date.now(),
			customer: {
				name,
				phone,
				email,
				county,
				town,
				address
			},
			payment: method,
			mpesaPhone: method === "mpesa" ? mpesaPhone : void 0,
			items: lines.map((l) => ({
				productId: l.product.id,
				name: l.product.name,
				unit: l.product.unit,
				price: l.product.price,
				qty: l.qty,
				image: l.product.image
			})),
			subtotal,
			deliveryFee,
			total,
			status: method === "delivery" ? "pending" : "paid"
		};
		placeOrder(order);
		toast.success(method === "delivery" ? "Order placed — pay on delivery." : "Payment received.");
		navigate({
			to: "/orders/$id",
			params: { id: order.id }
		});
	}
	if (lines.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-16 text-center sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl font-semibold",
			children: "Nothing to check out"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-6",
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/marketplace",
				children: "Shop the floor"
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "space-y-8 lg:col-span-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-semibold tracking-tight",
					children: "Checkout"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "M-Pesa, card, or pay on delivery in the Nairobi radius."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl bg-surface p-5 shadow-border sm:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold",
						children: "Delivery"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
									htmlFor: "name",
									children: "Full name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									name: "name",
									required: true,
									autoComplete: "name"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
								htmlFor: "phone",
								children: "Phone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "phone",
								name: "phone",
								required: true,
								placeholder: "+254 7XX XXX XXX"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
								htmlFor: "email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								name: "email",
								type: "email",
								autoComplete: "email"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
								htmlFor: "county",
								children: "County"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
								id: "county",
								name: "county",
								value: county,
								onChange: (e) => setCounty(e.target.value),
								children: COUNTIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c,
									children: c
								}, c))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
								htmlFor: "town",
								children: "Town"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "town",
								name: "town",
								placeholder: "Westlands"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
									htmlFor: "address",
									children: "Address / landmark"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "address",
									name: "address",
									required: true,
									placeholder: "Gate, building, stage"
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl bg-surface p-5 shadow-border sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-semibold",
							children: "Payment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid gap-2",
							children: [
								["mpesa", "M-Pesa STK push"],
								["card", "Visa / Mastercard"],
								["delivery", "Pay on delivery (Nairobi radius)"]
							].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex min-h-11 cursor-pointer items-center gap-3 rounded-md px-3 py-2 shadow-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									name: "method",
									checked: method === value,
									onChange: () => setMethod(value),
									className: "accent-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: label
								})]
							}, value))
						}),
						method === "mpesa" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
									htmlFor: "mpesaPhone",
									children: "M-Pesa number"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "mpesaPhone",
									name: "mpesaPhone",
									placeholder: "07XX XXX XXX"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted",
									children: "Paybill 400200 · Till 847562. A prompt is sent to this handset."
								})
							]
						}) : null,
						method === "card" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
										htmlFor: "cardName",
										children: "Name on card"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "cardName",
										name: "cardName",
										autoComplete: "cc-name"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
										htmlFor: "cardNumber",
										children: "Card number"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "cardNumber",
										name: "cardNumber",
										inputMode: "numeric",
										autoComplete: "cc-number",
										placeholder: "•••• •••• •••• ••••"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
									htmlFor: "expiry",
									children: "Expiry"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "expiry",
									name: "expiry",
									placeholder: "MM/YY",
									autoComplete: "cc-exp"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
									htmlFor: "cvc",
									children: "CVC"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "cvc",
									name: "cvc",
									placeholder: "123",
									autoComplete: "cc-csc"
								})] })
							]
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "lg",
					disabled: busy,
					className: "w-full sm:w-auto",
					children: busy ? "Processing…" : method === "mpesa" ? `Pay ${formatKes(total)} on M-Pesa` : `Place order · ${formatKes(total)}`
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "h-fit rounded-xl bg-surface p-5 shadow-border lg:col-span-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold",
					children: "Order"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate font-medium",
								children: l.product.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted tabular-nums",
								children: [
									l.qty,
									" × ",
									formatKes(l.product.price)
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 tabular-nums",
							children: formatKes(l.product.price * l.qty)
						})]
					}, l.product.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-2 border-t border-border pt-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "Subtotal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: formatKes(subtotal)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "Delivery"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: deliveryFee === 0 ? "Free in Nairobi" : formatKes(deliveryFee)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: formatKes(total)
							})]
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { CheckoutPage as component };
