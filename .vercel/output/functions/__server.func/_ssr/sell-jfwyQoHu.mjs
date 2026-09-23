import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as COUNTIES, c as newListingId, d as FieldLabel, f as Input, g as CATEGORIES, h as Button, m as Textarea, p as NativeSelect, u as useShop } from "./router-BhauvmKg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sell-jfwyQoHu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SellPage() {
	const publish = useShop((s) => s.publishListing);
	const navigate = useNavigate();
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [uploadedImage, setUploadedImage] = (0, import_react.useState)(null);
	function onImageChange(e) {
		const file = e.target.files?.[0];
		if (!file) {
			setUploadedImage(null);
			return;
		}
		const reader = new FileReader();
		reader.onload = () => {
			setUploadedImage(typeof reader.result === "string" ? reader.result : null);
		};
		reader.readAsDataURL(file);
	}
	function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const name = String(fd.get("name") ?? "").trim();
		const business = String(fd.get("business") ?? "").trim();
		const category = String(fd.get("category") ?? "produce");
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
		const listingImage = uploadedImage || cat?.image || "/images/hero-harvest.jpg";
		const listing = {
			id: newListingId(),
			name,
			category,
			sellerId: "independent",
			price: Math.round(price),
			unit,
			image: listingImage,
			gallery: uploadedImage ? [listingImage] : void 0,
			rating: 5,
			reviews: 0,
			stock: Math.max(1, Math.round(stock)),
			featured: true,
			origin: town,
			leadDays: 3,
			summary: description.slice(0, 140) || `Listed by ${business} in ${county}.`,
			description: description || `${name} listed by ${business} (${town}, ${county}). Contact ${phone}.`,
			specs: [
				{
					label: "Seller",
					value: business
				},
				{
					label: "County",
					value: county
				},
				{
					label: "Phone",
					value: phone
				}
			],
			listedBy: business,
			listedAt: Date.now(),
			contactPhone: phone,
			contactEmail: email
		};
		setBusy(true);
		publish(listing);
		toast.success("Your lot is on the floor.");
		navigate({
			to: "/products/$id",
			params: { id: listing.id }
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.18em] text-muted uppercase",
				children: "Uza kwenye Shamb"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold tracking-tight",
				children: "List a lot"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: "Growers, agrovets, yards and packhouses publish here. Your listing appears on the marketplace immediately, priced in Kenyan shillings."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "mt-8 space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-xl bg-surface p-5 shadow-border sm:p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-semibold",
							children: "Your desk"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
										htmlFor: "business",
										children: "Business name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "business",
										name: "business",
										required: true,
										placeholder: "e.g. Kitale Seed House"
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
									placeholder: "you@farm.co.ke"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
									htmlFor: "county",
									children: "County"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
									id: "county",
									name: "county",
									defaultValue: "Nairobi",
									children: COUNTIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: c,
										children: c
									}, c))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
									htmlFor: "town",
									children: "Town / market"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "town",
									name: "town",
									placeholder: "Eldoret"
								})] })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-xl bg-surface p-5 shadow-border sm:p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-semibold",
							children: "The lot"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
										htmlFor: "name",
										children: "Product name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "name",
										name: "name",
										required: true,
										placeholder: "Hass avocado crate, 4 kg"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
									htmlFor: "category",
									children: "Department"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
									id: "category",
									name: "category",
									defaultValue: "produce",
									children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: c.id,
										children: c.name
									}, c.id))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
									htmlFor: "unit",
									children: "Unit"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "unit",
									name: "unit",
									placeholder: "50 kg bag"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
									htmlFor: "price",
									children: "Price (KES)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "price",
									name: "price",
									type: "number",
									min: 1,
									step: 1,
									required: true,
									placeholder: "1850"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
									htmlFor: "stock",
									children: "Quantity in yard"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "stock",
									name: "stock",
									type: "number",
									min: 1,
									defaultValue: 10
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
											htmlFor: "product-image",
											children: "Product photo"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "product-image",
											type: "file",
											accept: "image/*",
											onChange: onImageChange,
											className: "file:mr-3 file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-2 file:text-sm file:font-medium file:text-primary-fg"
										}),
										uploadedImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 overflow-hidden rounded-lg border border-border bg-surface-alt",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: uploadedImage,
												alt: "Uploaded product preview",
												className: "h-44 w-full object-cover"
											})
										}) : null
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
										htmlFor: "description",
										children: "Description"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "description",
										name: "description",
										placeholder: "Variety, grade, packing, where it sits, how it travels."
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						disabled: busy,
						children: "Publish on Kenya Shamb"
					})
				]
			})
		]
	});
}
//#endregion
export { SellPage as component };
