import { i as __toESM } from "../_runtime.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, b as useRouter, d as HeadContent, g as createFileRoute, h as lazyRouteComponent, m as Outlet, p as createRouter, u as Scripts, v as Link, x as require_jsx_runtime, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Search, f as Menu, o as ShoppingBasket, r as TriangleAlert, t as X } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-CSsFI3Dl.js
var COUNTIES = [
	"Baringo",
	"Bomet",
	"Bungoma",
	"Busia",
	"Elgeyo-Marakwet",
	"Embu",
	"Garissa",
	"Homa Bay",
	"Isiolo",
	"Kajiado",
	"Kakamega",
	"Kericho",
	"Kiambu",
	"Kilifi",
	"Kirinyaga",
	"Kisii",
	"Kisumu",
	"Kitui",
	"Kwale",
	"Laikipia",
	"Lamu",
	"Machakos",
	"Makueni",
	"Mandera",
	"Marsabit",
	"Meru",
	"Migori",
	"Mombasa",
	"Murang'a",
	"Nairobi",
	"Nakuru",
	"Nandi",
	"Narok",
	"Nyamira",
	"Nyandarua",
	"Nyeri",
	"Samburu",
	"Siaya",
	"Taita-Taveta",
	"Tana River",
	"Tharaka-Nithi",
	"Trans Nzoia",
	"Turkana",
	"Uasin Gishu",
	"Vihiga",
	"Wajir",
	"West Pokot"
];
var CATEGORIES = [
	{
		id: "seeds",
		name: "Seeds & planting",
		kicker: "Certified",
		description: "KEPHIS-certified maize, pulses, vegetables and potato seed.",
		image: "/images/cat-seeds.jpg",
		countLabel: "Planting stock"
	},
	{
		id: "fertilizer",
		name: "Fertilizers & soil",
		kicker: "Plant nutrition",
		description: "DAP, CAN, NPK and compost — depot prices, 47-county delivery.",
		image: "/images/cat-fertilizer.jpg",
		countLabel: "Soil nutrition"
	},
	{
		id: "protection",
		name: "Crop protection",
		kicker: "PCPB listed",
		description: "Fungicides, herbicides and field medicines from licensed sellers.",
		image: "/images/cat-protection.jpg",
		countLabel: "Field medicines"
	},
	{
		id: "produce",
		name: "Fresh harvest",
		kicker: "Farm-gate",
		description: "Avocado, mango, tea, coffee, potato and milk, packed to grade.",
		image: "/images/cat-produce.jpg",
		countLabel: "Harvest lots"
	},
	{
		id: "machinery",
		name: "Machinery",
		kicker: "Yard inspected",
		description: "Tractors, ploughs and sprayers from highland yards.",
		image: "/images/cat-machinery.jpg",
		countLabel: "Equipment"
	},
	{
		id: "livestock",
		name: "Livestock & vet",
		kicker: "Dairy & poultry",
		description: "Feeds, vaccines, incubators and acaricides for the herd.",
		image: "/images/cat-livestock.jpg",
		countLabel: "Herd & flock"
	},
	{
		id: "irrigation",
		name: "Water & greenhouse",
		kicker: "Year-round",
		description: "Drip kits, solar pumps and tunnel houses for intensive plots.",
		image: "/images/cat-irrigation.jpg",
		countLabel: "Water systems"
	},
	{
		id: "tools",
		name: "Farm tools",
		kicker: "Daily kit",
		description: "Jembes, pangas, sprayers and barrows built for Kenyan soil.",
		image: "/images/cat-tools.jpg",
		countLabel: "Hand tools"
	}
];
var SELLERS = [
	{
		id: "kiambu-greens",
		name: "Kiambu Greens Co-op",
		owner: "Amina Wanjiku",
		county: "Kiambu",
		town: "Limuru",
		verified: true,
		rating: 4.9,
		reviews: 312,
		years: 11,
		bio: "A 240-member greenhouse co-operative supplying seedlings and salad crops into Nairobi within a day. Packhouse KEBS-inspected.",
		phone: "+254 712 448 210",
		email: "amina@kiambugreens.co.ke",
		cover: "/images/hero-greenhouse.jpg",
		initials: "KG",
		speciality: "Greenhouse seedlings"
	},
	{
		id: "eldoret-yard",
		name: "Highlands Tractor Yard",
		owner: "David Kiptoo",
		county: "Uasin Gishu",
		town: "Eldoret",
		verified: true,
		rating: 4.8,
		reviews: 186,
		years: 15,
		bio: "Yard-inspected compact tractors and implements for the North Rift. Every machine is serviced, documented and delivered on a low-bed.",
		phone: "+254 722 901 445",
		email: "david@highlandsyard.co.ke",
		cover: "/images/hero-tractor.jpg",
		initials: "HY",
		speciality: "Tractors & implements"
	},
	{
		id: "coast-fresh",
		name: "Coast Fresh Exports",
		owner: "Fatma Hassan",
		county: "Mombasa",
		town: "Changamwe",
		verified: true,
		rating: 4.7,
		reviews: 254,
		years: 9,
		bio: "Cold-chain packer moving graded Hass and Kent from the coast and upper eastern into hotels, grocers and the port.",
		phone: "+254 733 220 118",
		email: "fatma@coastfresh.co.ke",
		cover: "/images/cat-produce.jpg",
		initials: "CF",
		speciality: "Export produce"
	},
	{
		id: "nyanza-water",
		name: "Nyanza Irrigation Works",
		owner: "Peter Otieno",
		county: "Kisumu",
		town: "Kisumu",
		verified: true,
		rating: 4.8,
		reviews: 141,
		years: 8,
		bio: "Designs and installs acre-scale drip, solar pumping and tunnel houses across the lake basin and western Kenya.",
		phone: "+254 701 556 773",
		email: "peter@nyanzawater.co.ke",
		cover: "/images/hero-greenhouse.jpg",
		initials: "NW",
		speciality: "Irrigation systems"
	},
	{
		id: "kitale-seed",
		name: "Trans Nzoia Seed House",
		owner: "Grace Chebet",
		county: "Trans Nzoia",
		town: "Kitale",
		verified: true,
		rating: 4.9,
		reviews: 408,
		years: 14,
		bio: "KEPHIS-registered merchant of highland maize, bean and potato seed, with fertilizer lots from Eldoret depots.",
		phone: "+254 720 334 890",
		email: "grace@kitaleseed.co.ke",
		cover: "/images/cat-seeds.jpg",
		initials: "TS",
		speciality: "Certified seed"
	},
	{
		id: "machakos-vet",
		name: "Machakos Vet & Crop Care",
		owner: "Joseph Mutua",
		county: "Machakos",
		town: "Machakos",
		verified: true,
		rating: 4.6,
		reviews: 198,
		years: 12,
		bio: "Licensed agrovet covering lower eastern — PCPB crop medicines, acaricides and poultry vaccines with cold-chain last mile.",
		phone: "+254 715 667 204",
		email: "joseph@machakosvet.co.ke",
		cover: "/images/cat-protection.jpg",
		initials: "MV",
		speciality: "Agrovet medicines"
	},
	{
		id: "kericho-leaf",
		name: "Kericho Leaf Desk",
		owner: "Mary Cherono",
		county: "Kericho",
		town: "Kericho",
		verified: true,
		rating: 4.8,
		reviews: 167,
		years: 20,
		bio: "Smallholder tea desk aggregating green leaf and packed orthodox lots from the western highlands.",
		phone: "+254 728 441 032",
		email: "mary@kericholeaf.co.ke",
		cover: "/images/hero-highlands.jpg",
		initials: "KL",
		speciality: "Tea lots"
	},
	{
		id: "meru-hass",
		name: "Meru Avocado Growers",
		owner: "Samuel Mwenda",
		county: "Meru",
		town: "Maua",
		verified: true,
		rating: 4.9,
		reviews: 221,
		years: 7,
		bio: "Grower-owned Hass and coffee parchment desk. Fruit is picked to oil content, packed in the highlands and moved same week.",
		phone: "+254 708 912 560",
		email: "samuel@meruhass.co.ke",
		cover: "/images/cat-produce.jpg",
		initials: "MA",
		speciality: "Hass & coffee"
	}
];
var PRODUCTS = [
	{
		id: "h614-maize-2kg",
		name: "ShambaGold H614 maize seed",
		category: "seeds",
		sellerId: "kitale-seed",
		price: 850,
		compareAt: 1500,
		unit: "2 kg pack",
		image: "/images/cat-seeds.jpg",
		gallery: ["/images/cat-seeds.jpg", "/images/hero-harvest.jpg"],
		rating: 4.9,
		reviews: 640,
		stock: 420,
		featured: true,
		kephis: true,
		origin: "Kitale",
		leadDays: 2,
		summary: "Highland workhorse maize. One pack plants about an acre.",
		description: "H614 remains the altitude standard above 1,800 metres — 160 to 180 days, tight husk cover and reliable cob fill on Trans Nzoia and Uasin Gishu soils. This KEPHIS-certified 2 kg pack is treated and lot-traced. Sow at 75 × 25 cm; a pack covers roughly one acre. Commercial pack — NCPB subsidy lots are listed separately when available.",
		specs: [
			{
				label: "Variety",
				value: "H614 (highland)"
			},
			{
				label: "Maturity",
				value: "160–180 days"
			},
			{
				label: "Coverage",
				value: "~1 acre / 2 kg"
			},
			{
				label: "Certification",
				value: "KEPHIS"
			}
		]
	},
	{
		id: "nyayo-beans-2kg",
		name: "Nyayo rose coco beans",
		category: "seeds",
		sellerId: "kitale-seed",
		price: 720,
		unit: "2 kg pack",
		image: "/images/hero-harvest.jpg",
		rating: 4.7,
		reviews: 214,
		stock: 310,
		kephis: true,
		origin: "Kitale",
		leadDays: 2,
		summary: "The breakfast bean. Clean, graded planting stock.",
		description: "Rose coco Nyayo is the Kenyan household bean — cream with red speckle, cooks evenly, holds its skin. This lot is hand-graded planting stock, not food-grade sweepings. Suitable for intercrop with maize in the highlands and mid-altitude zones.",
		specs: [
			{
				label: "Type",
				value: "Rose coco / Nyayo"
			},
			{
				label: "Use",
				value: "Planting or food"
			},
			{
				label: "Germination",
				value: "≥ 90%"
			}
		]
	},
	{
		id: "tomato-tray-50",
		name: "Hybrid tomato seedling tray",
		category: "seeds",
		sellerId: "kiambu-greens",
		price: 480,
		unit: "50-cell tray",
		image: "/images/hero-greenhouse.jpg",
		gallery: ["/images/hero-greenhouse.jpg", "/images/cat-protection.jpg"],
		rating: 4.8,
		reviews: 390,
		stock: 180,
		featured: true,
		origin: "Limuru",
		leadDays: 1,
		summary: "Hardened Anna F1-type seedlings, ready for the tunnel.",
		description: "Raised in Limuru highland tunnels, hardened for a week before dispatch. Determinate salad type suited to greenhouse and open field around Nairobi, Nakuru and Meru. Transplant into moist soil; first harvest from week eight under drip.",
		specs: [
			{
				label: "Cells",
				value: "50"
			},
			{
				label: "Habit",
				value: "Determinate hybrid"
			},
			{
				label: "Dispatch",
				value: "Nairobi next day"
			}
		]
	},
	{
		id: "potato-seed-50kg",
		name: "Certified Irish potato seed",
		category: "seeds",
		sellerId: "kitale-seed",
		price: 4200,
		unit: "50 kg bag",
		image: "/images/hero-harvest.jpg",
		rating: 4.6,
		reviews: 128,
		stock: 64,
		kephis: true,
		origin: "Nyandarua",
		leadDays: 3,
		summary: "Shangi-type seed potato, sprouted and size-graded.",
		description: "Size-graded Shangi-type seed from Nyandarua multipliers. Sprouted eyes, no soft rot in the inspected lot. One 50 kg bag plants a third to half an acre depending on spacing. Keep bags in shade until the lorry arrives.",
		specs: [
			{
				label: "Variety",
				value: "Shangi type"
			},
			{
				label: "Grade",
				value: "Seed, 35–55 mm"
			},
			{
				label: "Source",
				value: "Nyandarua multipliers"
			}
		]
	},
	{
		id: "terraken-dap-50",
		name: "TerraKen DAP 18:46:0",
		category: "fertilizer",
		sellerId: "kitale-seed",
		price: 4150,
		compareAt: 5250,
		unit: "50 kg bag",
		image: "/images/cat-fertilizer.jpg",
		rating: 4.8,
		reviews: 890,
		stock: 760,
		featured: true,
		kebs: true,
		origin: "Eldoret",
		leadDays: 2,
		summary: "Planting phosphorus. Commercial depot price, not the subsidy desk.",
		description: "Diammonium phosphate 18:46:0 for maize, wheat and potato at planting. Apply 50 kg per acre banded with the seed, not in the hole. This is the commercial highland depot price (board average around KES 4,100–4,400). NCPB subsidy bags, when in season, list nearer KES 2,000 at designated desks.",
		specs: [
			{
				label: "Analysis",
				value: "18-46-0"
			},
			{
				label: "Rate",
				value: "50 kg / acre at planting"
			},
			{
				label: "Desk",
				value: "Commercial (not NCPB)"
			}
		]
	},
	{
		id: "terraken-can-50",
		name: "TerraKen CAN 27N",
		category: "fertilizer",
		sellerId: "kitale-seed",
		price: 3100,
		unit: "50 kg bag",
		image: "/images/cat-fertilizer.jpg",
		rating: 4.7,
		reviews: 512,
		stock: 540,
		kebs: true,
		origin: "Eldoret",
		leadDays: 2,
		summary: "Top-dress nitrogen with calcium for maize at tasselling.",
		description: "Calcium ammonium nitrate, 27% N. The highland top-dress: 50 kg per acre at 45–60 days, when maize is knee-high to tasselling. Calcium helps on acidic Rift soils. Store dry; CAN cakes if the store leaks.",
		specs: [
			{
				label: "Nitrogen",
				value: "27%"
			},
			{
				label: "Timing",
				value: "Day 45–60"
			},
			{
				label: "Rate",
				value: "50 kg / acre"
			}
		]
	},
	{
		id: "terraken-npk-50",
		name: "TerraKen NPK 23:23:0",
		category: "fertilizer",
		sellerId: "kitale-seed",
		price: 3450,
		unit: "50 kg bag",
		image: "/images/cat-fertilizer.jpg",
		rating: 4.6,
		reviews: 301,
		stock: 410,
		kebs: true,
		origin: "Nakuru",
		leadDays: 2,
		summary: "Early vegetative feed when the stand needs a second push.",
		description: "Balanced nitrogen-phosphorus for the second dressing on maize and wheat, typically day 21–28. Works on the same acre plan as DAP at planting and CAN at tasselling. Nakuru depot dispatch.",
		specs: [
			{
				label: "Analysis",
				value: "23-23-0"
			},
			{
				label: "Window",
				value: "Day 21–28"
			},
			{
				label: "Crop",
				value: "Maize, wheat, barley"
			}
		]
	},
	{
		id: "compost-tonne",
		name: "Cured compost blend",
		category: "fertilizer",
		sellerId: "kiambu-greens",
		price: 2200,
		unit: "1 tonne",
		image: "/images/hero-harvest.jpg",
		rating: 4.5,
		reviews: 88,
		stock: 40,
		origin: "Kiambu",
		leadDays: 4,
		summary: "Well-cured farmyard compost for tunnels and kitchen gardens.",
		description: "Six-month cured manure and green waste from the Kiambu co-op. Dark, earthy, no raw ammonia. A tonne covers a greenhouse bay or a quarter-acre kitchen plot when mixed into the top 15 cm.",
		specs: [{
			label: "Maturity",
			value: "Cured ≥ 6 months"
		}, {
			label: "Delivery",
			value: "Tipper, Kiambu–Nairobi"
		}]
	},
	{
		id: "leafguard-copper",
		name: "LeafGuard copper fungicide",
		category: "protection",
		sellerId: "machakos-vet",
		price: 890,
		unit: "500 g",
		image: "/images/cat-protection.jpg",
		rating: 4.6,
		reviews: 276,
		stock: 230,
		pcpb: true,
		featured: true,
		origin: "Machakos",
		leadDays: 2,
		summary: "Protectant copper for tomato, potato and coffee rust pressure.",
		description: "Wettable copper hydroxide for early blight, late blight and coffee leaf rust. PCPB-listed. Mix 50 g per 20 L knapsack; cover both leaf faces. Observe pre-harvest intervals on salad crops. Not a cure-all — rotate modes of action in the rains.",
		specs: [
			{
				label: "Active",
				value: "Copper hydroxide"
			},
			{
				label: "Mix",
				value: "50 g / 20 L"
			},
			{
				label: "Register",
				value: "PCPB"
			}
		]
	},
	{
		id: "broadclear-1l",
		name: "BroadClear herbicide 1 L",
		category: "protection",
		sellerId: "machakos-vet",
		price: 2150,
		unit: "1 litre",
		image: "/images/cat-protection.jpg",
		rating: 4.5,
		reviews: 194,
		stock: 160,
		pcpb: true,
		origin: "Machakos",
		leadDays: 2,
		summary: "Non-selective burndown for seedbeds and orchard floors.",
		description: "Glyphosate 480 g/L equivalent for stale seedbeds, fence lines and orchard alleys. One litre treats about two acres as a directed spray. Keep off green crop. Use clean water — red laterite in the tank weakens the kill.",
		specs: [
			{
				label: "Type",
				value: "Non-selective"
			},
			{
				label: "Coverage",
				value: "~2 acres / L"
			},
			{
				label: "Register",
				value: "PCPB"
			}
		]
	},
	{
		id: "tickstop-100",
		name: "TickStop pour-on acaricide",
		category: "livestock",
		sellerId: "machakos-vet",
		price: 1480,
		unit: "100 ml",
		image: "/images/cat-livestock.jpg",
		rating: 4.7,
		reviews: 331,
		stock: 210,
		pcpb: true,
		origin: "Machakos",
		leadDays: 2,
		summary: "East Coast fever country — keep the dip or pour-on on schedule.",
		description: "Amitraz-class pour-on for cattle in Machakos, Kajiado and the coast hinterland. 10 ml per 100 kg along the backline. Rotate with a dip chemistry every season to slow resistance. Withdrawal: milk 48 hours, meat 14 days.",
		specs: [
			{
				label: "Species",
				value: "Cattle"
			},
			{
				label: "Dose",
				value: "10 ml / 100 kg"
			},
			{
				label: "Cold chain",
				value: "Not required"
			}
		]
	},
	{
		id: "newcastle-1000",
		name: "Newcastle vaccine, 1,000 doses",
		category: "livestock",
		sellerId: "machakos-vet",
		price: 1150,
		unit: "1,000 doses",
		image: "/images/cat-livestock.jpg",
		rating: 4.8,
		reviews: 157,
		stock: 90,
		origin: "Nairobi",
		leadDays: 1,
		summary: "Lasota-type live vaccine. Ships on ice packs from the agrovet.",
		description: "Live lentogenic Newcastle vaccine for layers and broilers. Reconstitute with cool, non-chlorinated water and use within two hours. Ice-pack dispatch from Nairobi; open the box on arrival. Do not freeze the diluent.",
		specs: [
			{
				label: "Type",
				value: "Live, lentogenic"
			},
			{
				label: "Route",
				value: "Water or eye drop"
			},
			{
				label: "Dispatch",
				value: "Ice pack"
			}
		]
	},
	{
		id: "hass-crate-4kg",
		name: "Hass avocado export crate",
		category: "produce",
		sellerId: "meru-hass",
		price: 1850,
		compareAt: 2400,
		unit: "4 kg crate",
		image: "/images/cat-produce.jpg",
		gallery: ["/images/cat-produce.jpg", "/images/hero-harvest.jpg"],
		rating: 4.9,
		reviews: 470,
		stock: 220,
		featured: true,
		kebs: true,
		origin: "Meru",
		leadDays: 2,
		summary: "Count 16–18 fruit, dry matter checked, packed in the highlands.",
		description: "Export-grade Hass from Meru smallholders. Fruit is picked to oil content, not calendar, then packed as count 16–18 in a ventilated 4 kg crate. Suitable for grocers, hotels and home boxes. Keep at 5–7 °C; ripen at room temperature.",
		specs: [
			{
				label: "Count",
				value: "16–18 fruit"
			},
			{
				label: "Grade",
				value: "Export / Class I"
			},
			{
				label: "Season",
				value: "Peak Mar–Sep"
			}
		]
	},
	{
		id: "kent-mango-5kg",
		name: "Kent mango crate",
		category: "produce",
		sellerId: "coast-fresh",
		price: 2400,
		unit: "5 kg crate",
		image: "/images/hero-harvest.jpg",
		rating: 4.7,
		reviews: 188,
		stock: 95,
		origin: "Kilifi",
		leadDays: 3,
		summary: "Fibre-low Kent from the coast, packed at Changamwe.",
		description: "Kent mangoes from Kilifi orchards, harvested mature-green for the Nairobi desk. Low fibre, deep orange flesh. Five-kilo crate, fruit wrapped. Best eaten after three to five days of ripening.",
		specs: [
			{
				label: "Variety",
				value: "Kent"
			},
			{
				label: "Source",
				value: "Kilifi"
			},
			{
				label: "Pack",
				value: "5 kg ventilated"
			}
		]
	},
	{
		id: "aa-coffee-1kg",
		name: "AA coffee parchment",
		category: "produce",
		sellerId: "meru-hass",
		price: 1240,
		unit: "1 kg",
		image: "/images/hero-harvest.jpg",
		rating: 4.8,
		reviews: 143,
		stock: 80,
		featured: true,
		origin: "Meru",
		leadDays: 3,
		summary: "Washed AA from the Nyambene slopes. Roast at home or mill.",
		description: "Fully washed Arabica parchment, AA screen, from Nyambene co-ops. Bright citrus, blackcurrant, clean finish. Sold as parchment so roasters and serious home mills can take it through hulling. Not a supermarket roast bag.",
		specs: [
			{
				label: "Grade",
				value: "AA parchment"
			},
			{
				label: "Process",
				value: "Washed"
			},
			{
				label: "Altitude",
				value: "1,600–1,900 m"
			}
		]
	},
	{
		id: "kericho-tea-1kg",
		name: "Kericho orthodox tea",
		category: "produce",
		sellerId: "kericho-leaf",
		price: 680,
		unit: "1 kg",
		image: "/images/hero-highlands.jpg",
		rating: 4.8,
		reviews: 256,
		stock: 340,
		origin: "Kericho",
		leadDays: 3,
		summary: "Broken-leaf orthodox from western highland bushes.",
		description: "Smallholder orthodox lots from Kericho, brisk and coppery, the cup Kenya is known for. Packed in a lined kilo bag. Brew 2.5 g per 150 ml at a rolling boil; 3–4 minutes.",
		specs: [
			{
				label: "Style",
				value: "Orthodox broken leaf"
			},
			{
				label: "Region",
				value: "Kericho"
			},
			{
				label: "Use",
				value: "Breakfast cup, blending"
			}
		]
	},
	{
		id: "ware-potato-50",
		name: "Ware potatoes, 50 kg",
		category: "produce",
		sellerId: "kitale-seed",
		price: 3200,
		unit: "50 kg bag",
		image: "/images/hero-harvest.jpg",
		rating: 4.5,
		reviews: 97,
		stock: 120,
		origin: "Nyandarua",
		leadDays: 3,
		summary: "Food-grade Shangi, not seed. Kitchen and hotel bags.",
		description: "Ware (table) potatoes from the Aberdares. Firm, short-dormancy Shangi that chips and mashes well. 50 kg gunny. Not for planting — ask for the certified seed lot if you are putting a crop in.",
		specs: [{
			label: "Grade",
			value: "Ware / table"
		}, {
			label: "Bag",
			value: "50 kg"
		}]
	},
	{
		id: "fresh-milk-20l",
		name: "Chilled milk, 20 litre can",
		category: "produce",
		sellerId: "kiambu-greens",
		price: 1600,
		unit: "20 L",
		image: "/images/cat-livestock.jpg",
		rating: 4.6,
		reviews: 74,
		stock: 28,
		origin: "Kiambu",
		leadDays: 1,
		summary: "Morning milk, chilled, Nairobi-radius delivery only.",
		description: "Pooled morning milk from the Limuru dairy circle, chilled below 4 °C. 20-litre food can. Sold to cafés, schools and homes inside the Nairobi–Kiambu belt. Not dispatched upcountry — milk does not travel warm.",
		specs: [
			{
				label: "Volume",
				value: "20 litres"
			},
			{
				label: "Radius",
				value: "Nairobi / Kiambu"
			},
			{
				label: "Window",
				value: "Same-day morning"
			}
		]
	},
	{
		id: "highland-45hp",
		name: "Highland 45HP 2WD tractor",
		category: "machinery",
		sellerId: "eldoret-yard",
		price: 185e4,
		unit: "unit, serviced",
		image: "/images/cat-machinery.jpg",
		gallery: ["/images/cat-machinery.jpg", "/images/hero-tractor.jpg"],
		rating: 4.8,
		reviews: 42,
		stock: 4,
		featured: true,
		origin: "Eldoret",
		leadDays: 10,
		summary: "Yard-inspected compact tractor. Low-bed delivery nationwide.",
		description: "A 45 horsepower two-wheel-drive workhorse for 10–50 acre mixed farms — plough, harrow, trailer, maize sheller. Hours and service book verified at the Eldoret yard. Implements sold separately. A technician rides with the first start on your shamba.",
		specs: [
			{
				label: "Power",
				value: "45 HP, 2WD"
			},
			{
				label: "Hours",
				value: "Yard verified"
			},
			{
				label: "Delivery",
				value: "Low-bed, 47 counties"
			}
		]
	},
	{
		id: "disc-plough-3",
		name: "Three-furrow disc plough",
		category: "machinery",
		sellerId: "eldoret-yard",
		price: 95e3,
		unit: "implement",
		image: "/images/hero-tractor.jpg",
		rating: 4.7,
		reviews: 61,
		stock: 11,
		origin: "Eldoret",
		leadDays: 7,
		summary: "Heavy discs for breaking Kenyan red soils after harvest.",
		description: "Three-furrow disc plough matched to 40–60 HP tractors. Hardened discs, greaseable bearings. The yard sets the linkage before the lorry leaves Eldoret. Suitable for maize land after stover and for opening new shambas.",
		specs: [{
			label: "Furrows",
			value: "3"
		}, {
			label: "Match",
			value: "40–60 HP"
		}]
	},
	{
		id: "knapsack-16l",
		name: "16 litre knapsack sprayer",
		category: "tools",
		sellerId: "machakos-vet",
		price: 3450,
		unit: "sprayer",
		image: "/images/cat-protection.jpg",
		rating: 4.6,
		reviews: 412,
		stock: 150,
		featured: true,
		origin: "Nairobi",
		leadDays: 2,
		summary: "Brass lance, padded straps, the daily spray kit.",
		description: "Sixteen-litre backpack sprayer with a brass lance and two nozzles (fan and hollow cone). Padded straps, lockable trigger. The tank that earns its keep from sukuma plots to coffee. Rinse after copper or herbicide — never store mixed chemical overnight.",
		specs: [
			{
				label: "Volume",
				value: "16 L"
			},
			{
				label: "Lance",
				value: "Brass"
			},
			{
				label: "Nozzles",
				value: "Fan + cone"
			}
		]
	},
	{
		id: "greenhouse-8x24",
		name: "Greenhouse kit, 8 × 24 m",
		category: "irrigation",
		sellerId: "nyanza-water",
		price: 185e3,
		unit: "kit",
		image: "/images/hero-greenhouse.jpg",
		gallery: ["/images/hero-greenhouse.jpg", "/images/cat-irrigation.jpg"],
		rating: 4.8,
		reviews: 79,
		stock: 9,
		featured: true,
		origin: "Kisumu",
		leadDays: 14,
		summary: "Galvanised tunnel, 200 micron film, installation extra.",
		description: "An 8 by 24 metre commercial tunnel — galvanised hoop frame, 200 micron UV film, insect net on the gables. Kit price is materials; a Nyanza Irrigation crew can erect in three days inside Kisumu, Kericho, Kisii and Nakuru for a quoted labour fee.",
		specs: [
			{
				label: "Footprint",
				value: "8 × 24 m"
			},
			{
				label: "Film",
				value: "200 micron UV"
			},
			{
				label: "Install",
				value: "Quoted separately"
			}
		]
	},
	{
		id: "drip-1acre",
		name: "One-acre drip kit",
		category: "irrigation",
		sellerId: "nyanza-water",
		price: 48500,
		unit: "kit",
		image: "/images/cat-irrigation.jpg",
		rating: 4.7,
		reviews: 133,
		stock: 22,
		origin: "Kisumu",
		leadDays: 7,
		summary: "Laterals, drippers, filter and header for an acre of rows.",
		description: "A complete acre kit: 16 mm laterals, 30 cm dripper spacing, disc filter, header and takeoff valves. Sized for tomato, onion and French bean beds. Pair with the solar pump if you are off the river. Layout drawing included.",
		specs: [
			{
				label: "Area",
				value: "1 acre"
			},
			{
				label: "Spacing",
				value: "30 cm drippers"
			},
			{
				label: "Filter",
				value: "Disc, included"
			}
		]
	},
	{
		id: "solar-pump-1hp",
		name: "Solar surface pump, 1 HP",
		category: "irrigation",
		sellerId: "nyanza-water",
		price: 72e3,
		unit: "pump + controller",
		image: "/images/cat-irrigation.jpg",
		rating: 4.6,
		reviews: 58,
		stock: 14,
		origin: "Kisumu",
		leadDays: 8,
		summary: "Daylight pumping from a river, dam or shallow well.",
		description: "One-horsepower surface solar pump with MPPT controller. Panels quoted to site (not in this price) because roof and ground mounts differ. Lifts from a river, dam or well under 8 metres suction. Enough for the acre drip kit on a clear highland day.",
		specs: [
			{
				label: "Power",
				value: "1 HP surface"
			},
			{
				label: "Suction",
				value: "≤ 8 m"
			},
			{
				label: "Panels",
				value: "Quoted to site"
			}
		]
	},
	{
		id: "broiler-starter-50",
		name: "Broiler starter mash, 50 kg",
		category: "livestock",
		sellerId: "machakos-vet",
		price: 3850,
		unit: "50 kg bag",
		image: "/images/cat-livestock.jpg",
		rating: 4.7,
		reviews: 265,
		stock: 200,
		origin: "Nairobi",
		leadDays: 2,
		summary: "Day-old to day-21 broiler mash, mill-fresh.",
		description: "High-protein starter mash for broilers from day one to day 21. Mill date stamped on the bag. Store off the floor; use within three weeks of milling. Follow with grower from the same desk.",
		specs: [{
			label: "Phase",
			value: "Starter, d1–d21"
		}, {
			label: "Bag",
			value: "50 kg"
		}]
	},
	{
		id: "incubator-528",
		name: "Automatic incubator, 528 egg",
		category: "livestock",
		sellerId: "machakos-vet",
		price: 28500,
		unit: "unit",
		image: "/images/cat-livestock.jpg",
		rating: 4.5,
		reviews: 49,
		stock: 7,
		origin: "Nairobi",
		leadDays: 5,
		summary: "Turner, thermostat and humidity pan. Kuku business in a box.",
		description: "A 528-egg cabinet incubator with automatic turning and a digital thermostat. Runs on mains with a socket for a small UPS. Suitable for kienyeji and layer eggs. A setter tray plan is in the crate.",
		specs: [
			{
				label: "Capacity",
				value: "528 eggs"
			},
			{
				label: "Turn",
				value: "Automatic"
			},
			{
				label: "Power",
				value: "240 V"
			}
		]
	},
	{
		id: "dairy-meal-70",
		name: "Dairy meal, 70 kg",
		category: "livestock",
		sellerId: "kiambu-greens",
		price: 3200,
		unit: "70 kg bag",
		image: "/images/cat-livestock.jpg",
		rating: 4.6,
		reviews: 118,
		stock: 85,
		origin: "Kiambu",
		leadDays: 2,
		summary: "Production ration for Friesians on zero-graze.",
		description: "Eighteen-percent protein dairy meal for high producers on Napier and maize silage. Feed 1 kg meal per 1.5 litres of milk above maintenance, split morning and evening. Kiambu mill, bagged 70 kg.",
		specs: [{
			label: "Protein",
			value: "18%"
		}, {
			label: "Bag",
			value: "70 kg"
		}]
	},
	{
		id: "jembe-panga-kit",
		name: "Jembe and panga kit",
		category: "tools",
		sellerId: "machakos-vet",
		price: 1250,
		unit: "pair",
		image: "/images/cat-tools.jpg",
		rating: 4.8,
		reviews: 520,
		stock: 300,
		origin: "Nairobi",
		leadDays: 2,
		summary: "The two tools every Kenyan shamba actually uses.",
		description: "Forged jembe with a seasoned handle and a full-tang panga in a leather sheath. Not decorative. The kit we send to first-time plot owners and to schools. Oil the blade; do not leave it in the rain.",
		specs: [{
			label: "Jembe",
			value: "Forged, hardwood"
		}, {
			label: "Panga",
			value: "Full tang"
		}]
	},
	{
		id: "wheelbarrow-hd",
		name: "Heavy-duty wheelbarrow",
		category: "tools",
		sellerId: "eldoret-yard",
		price: 4800,
		unit: "barrow",
		image: "/images/cat-tools.jpg",
		rating: 4.6,
		reviews: 203,
		stock: 48,
		origin: "Eldoret",
		leadDays: 4,
		summary: "Pneumatic tyre, welded tray, manure and harvest work.",
		description: "A farm barrow, not a hardware-store toy. Welded tray, pneumatic tyre that copes with red-soil ruts, hardwood handles. Moves manure, harvest sacks and greenhouse mix without folding.",
		specs: [{
			label: "Tyre",
			value: "Pneumatic"
		}, {
			label: "Tray",
			value: "Welded steel"
		}]
	}
];
var TRUST_STATS = [
	{
		value: "8,400",
		label: "Verified sellers"
	},
	{
		value: "47",
		label: "Counties served"
	},
	{
		value: "KES 2.1B",
		label: "Last-year GMV"
	},
	{
		value: "24h",
		label: "Nairobi dispatch"
	}
];
function getSeller(id) {
	return SELLERS.find((s) => s.id === id);
}
function productsBySeller(id) {
	return PRODUCTS.filter((p) => p.sellerId === id);
}
function relatedProducts(product, limit = 4) {
	return PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, limit);
}
function searchProducts(query, list) {
	const q = query.trim().toLowerCase();
	if (!q) return list;
	return list.filter((p) => {
		const seller = getSeller(p.sellerId);
		return `${p.name} ${p.summary} ${p.description} ${p.origin} ${p.unit} ${seller?.name ?? ""} ${seller?.county ?? ""}`.toLowerCase().includes(q);
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DCjYCEER.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 40 40",
		className: cn("size-9", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "40",
				height: "40",
				rx: "10",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 27.5c3.2-2.2 6.4-3.3 12-3.3s8.8 1.1 12 3.3",
				fill: "none",
				stroke: "var(--color-primary-fg)",
				strokeWidth: "1.6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M9 22c2.8-1.8 5.8-2.7 11-2.7s8.2.9 11 2.7",
				fill: "none",
				stroke: "var(--color-primary-fg)",
				strokeWidth: "1.6",
				strokeLinecap: "round",
				opacity: "0.85"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M10.5 16.8c2.4-1.5 5-2.2 9.5-2.2s7.1.7 9.5 2.2",
				fill: "none",
				stroke: "var(--color-primary-fg)",
				strokeWidth: "1.6",
				strokeLinecap: "round",
				opacity: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20 10.5c.4 1.6.2 2.8 0 4.2",
				fill: "none",
				stroke: "var(--color-primary-fg)",
				strokeWidth: "1.6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20 13.2c-1.6-.2-2.6-1.2-3.4-2.2",
				fill: "none",
				stroke: "var(--color-primary-fg)",
				strokeWidth: "1.5",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20 13.2c1.6-.2 2.6-1.2 3.4-2.2",
				fill: "none",
				stroke: "var(--color-primary-fg)",
				strokeWidth: "1.5",
				strokeLinecap: "round"
			})
		]
	});
}
function Wordmark({ className, inverse = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: inverse ? "text-primary-fg" : "text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("block font-display text-lg font-semibold tracking-tight", inverse ? "text-primary-fg" : "text-fg"),
				children: "Kenya Shamb"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("block text-xs font-medium uppercase tracking-widest", inverse ? "text-primary-fg/70" : "text-muted"),
				children: "Farm marketplace"
			})]
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-auto border-t border-border bg-primary text-primary-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { inverse: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm leading-relaxed text-primary-fg/75",
						children: "Kenya’s agricultural marketplace — seed, soil, medicine, machinery and harvest, listed by verified sellers from the highlands to the coast."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-sm font-semibold tracking-wide",
					children: "Trade"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-primary-fg/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/marketplace",
							className: "hover:text-primary-fg",
							children: "Marketplace"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sellers",
							className: "hover:text-primary-fg",
							children: "Sellers"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sell",
							className: "hover:text-primary-fg",
							children: "List a lot"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/cart",
							className: "hover:text-primary-fg",
							children: "Basket"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-sm font-semibold tracking-wide",
					children: "House"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-primary-fg/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-primary-fg",
							children: "About Shamb"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-primary-fg",
							children: "Contact"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:hello@kenyashamb.co.ke",
							className: "hover:text-primary-fg",
							children: "hello@kenyashamb.co.ke"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:sell@kenyashamb.co.ke",
							className: "hover:text-primary-fg",
							children: "sell@kenyashamb.co.ke"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-sm font-semibold tracking-wide",
					children: "Pay & collect"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-primary-fg/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "M-Pesa Paybill 400200" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Till 847562" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Westlands, Nairobi" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Depots: Eldoret · Kisumu · Mombasa" })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-primary-fg/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-primary-fg/60 sm:flex-row sm:items-center sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Kenya Shamb Ltd. Nairobi, Kenya."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Prices in Kenyan shillings. Licensed agrovet lots marked PCPB." })]
			})
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:bg-primary/92",
			leaf: "bg-leaf text-primary-fg hover:bg-leaf/90",
			outline: "bg-transparent text-fg shadow-border hover:shadow-border-hover hover:bg-surface",
			ghost: "bg-transparent text-fg hover:bg-fg/6",
			inverse: "bg-primary-fg text-primary hover:bg-primary-fg/90",
			danger: "bg-danger text-primary-fg hover:bg-danger/90"
		},
		size: {
			default: "h-11 rounded-md px-4",
			sm: "h-9 rounded-sm px-3 text-sm",
			lg: "h-12 rounded-lg px-6",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function Input({ className, type = "text", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md bg-surface px-3 text-sm text-fg shadow-border outline-none transition-[box-shadow] duration-150 placeholder:text-muted/80 focus-visible:ring-2 focus-visible:ring-primary/35 disabled:opacity-50", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-28 w-full rounded-lg bg-surface px-3 py-2.5 text-sm text-fg shadow-border outline-none transition-[box-shadow] duration-150 placeholder:text-muted/80 focus-visible:ring-2 focus-visible:ring-primary/35", className),
		...props
	});
}
function NativeSelect({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: cn("flex h-11 w-full rounded-md bg-surface px-3 text-sm text-fg shadow-border outline-none transition-[box-shadow] duration-150 focus-visible:ring-2 focus-visible:ring-primary/35", className),
		...props
	});
}
function FieldLabel({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("mb-1.5 block text-sm font-medium text-fg", className),
		...props
	});
}
var useShop = create()(persist((set, get) => ({
	cart: [],
	saved: [],
	listings: [],
	orders: [],
	addToCart: (productId, qty = 1) => {
		const cart = [...get().cart];
		const i = cart.findIndex((l) => l.productId === productId);
		if (i >= 0) cart[i] = {
			productId,
			qty: cart[i].qty + qty
		};
		else cart.push({
			productId,
			qty
		});
		set({ cart });
	},
	setQty: (productId, qty) => {
		if (qty <= 0) {
			set({ cart: get().cart.filter((l) => l.productId !== productId) });
			return;
		}
		set({ cart: get().cart.map((l) => l.productId === productId ? {
			...l,
			qty
		} : l) });
	},
	removeFromCart: (productId) => set({ cart: get().cart.filter((l) => l.productId !== productId) }),
	clearCart: () => set({ cart: [] }),
	toggleSaved: (productId) => {
		const saved = get().saved;
		set({ saved: saved.includes(productId) ? saved.filter((id) => id !== productId) : [...saved, productId] });
	},
	publishListing: (listing) => set({ listings: [listing, ...get().listings] }),
	placeOrder: (order) => set({
		orders: [order, ...get().orders],
		cart: []
	})
}), { name: "kenya-shamb-shop" }));
function allProducts(listings) {
	return [...listings, ...PRODUCTS];
}
function findProduct(id, listings) {
	return listings.find((p) => p.id === id) ?? PRODUCTS.find((p) => p.id === id);
}
function cartCount(cart) {
	return cart.reduce((n, l) => n + l.qty, 0);
}
function newListingId() {
	return `listing-${Date.now().toString(36)}`;
}
function newOrderId() {
	return `KS-2026-${Math.floor(1e3 + Math.random() * 9e3)}`;
}
var NAV = [
	{
		to: "/marketplace",
		label: "Marketplace"
	},
	{
		to: "/sellers",
		label: "Sellers"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [q, setQ] = (0, import_react.useState)("");
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const count = useShop((s) => cartCount(s.cart));
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	function onSearch(e) {
		e.preventDefault();
		const query = q.trim();
		setOpen(false);
		navigate({
			to: "/marketplace",
			search: query ? { q: query } : {}
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 bg-primary text-primary-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-primary-fg/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-9 max-w-6xl items-center justify-between px-4 text-xs tracking-wide text-primary-fg/75 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate",
						children: "Karibu · M-Pesa · Dispatch to 47 counties"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hidden sm:block",
						children: "hello@kenyashamb.co.ke · +254 20 764 2100"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "shrink-0",
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { inverse: true })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "ml-4 hidden items-center gap-1 lg:flex",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "rounded-md px-3 py-2 text-sm text-primary-fg/85 transition-colors hover:bg-primary-fg/8 hover:text-primary-fg",
							children: item.label
						}, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: onSearch,
						className: "ml-auto hidden min-w-0 flex-1 max-w-sm md:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "sr-only",
							htmlFor: "header-search",
							children: "Search the marketplace"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-primary/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "header-search",
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: "Search maize, tractors, Hass…",
								className: "h-10 border-0 bg-primary-fg pl-9 text-fg shadow-none"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-1 md:ml-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "inverse",
								size: "sm",
								className: "hidden sm:inline-flex",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/sell",
									children: "Sell on Shamb"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/cart",
								className: "relative inline-flex size-11 items-center justify-center rounded-md text-primary-fg hover:bg-primary-fg/8",
								"aria-label": `Cart, ${mounted ? count : 0} items`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBasket, { className: "size-5" }), mounted && count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute top-1.5 right-1.5 min-w-4 rounded-full bg-leaf px-1 text-center text-xs leading-4 font-semibold text-primary-fg tabular-nums",
									children: count
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center rounded-md lg:hidden",
								"aria-label": open ? "Close menu" : "Open menu",
								onClick: () => setOpen((v) => !v),
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
							})
						]
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-primary-fg/10 bg-primary px-4 py-4 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
					onSubmit: onSearch,
					className: "mb-3 md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Search the marketplace",
						className: "bg-primary-fg text-fg"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						onClick: () => setOpen(false),
						className: "rounded-md px-3 py-3 text-base text-primary-fg",
						children: item.label
					}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/sell",
						onClick: () => setOpen(false),
						className: "rounded-md px-3 py-3 text-base text-primary-fg",
						children: "Sell on Shamb"
					})]
				})]
			}) : null
		]
	});
}
function MarketTicker({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden border-b border-border bg-surface text-xs text-muted" + (className ? ` ${className}` : ""),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl gap-8 overflow-x-auto px-4 py-2.5 whitespace-nowrap sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium text-fg",
				children: "Desk prices"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TickerItems, {})]
		})
	});
}
function TickerItems() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: [
		[
			"Maize 90 kg",
			"KES 6,000",
			"Awasi"
		],
		[
			"DAP 50 kg",
			"KES 4,150",
			"Commercial"
		],
		[
			"Subsidy fertilizer",
			"KES 2,000",
			"NCPB"
		],
		[
			"Maize seed 2 kg",
			"KES 300",
			"Subsidy"
		],
		[
			"Beans 2 kg",
			"KES 250–300",
			"Market"
		]
	].map(([label, value, note]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium text-fg tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted/80",
				children: note
			})
		]
	}, label)) });
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketTicker, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var styles_default = "/assets/styles-CEp3g9-J.css";
var APP_NAME = "Kenya Shamb";
var Route$11 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Kenya Shamb is Kenya’s agricultural marketplace — seeds, fertilizers, crop medicines, machinery, livestock supplies and harvest, priced in Kenyan shillings."
			},
			{
				name: "theme-color",
				content: "#1F5C3A"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Outfit:wght@400;500;600;700&display=swap"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "top-center",
				toastOptions: { className: "font-sans" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$10 = () => import("./routes-B0QYjWrq.mjs");
var Route$10 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./about-BClivEm7.mjs");
var Route$9 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./cart-CDO82p-l.mjs");
var Route$8 = createFileRoute("/cart")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./checkout-BTLKW3K1.mjs");
var Route$7 = createFileRoute("/checkout")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./contact-CQYzdMn7.mjs");
var Route$6 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./marketplace-D2M5ED6C.mjs");
var Route$5 = createFileRoute("/marketplace")({
	validateSearch: (search) => ({
		q: typeof search.q === "string" ? search.q : void 0,
		category: typeof search.category === "string" && CATEGORIES.some((c) => c.id === search.category) ? search.category : void 0
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./sell-BCV6CQlp.mjs");
var Route$4 = createFileRoute("/sell")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./sellers-CxmgZIl4.mjs");
var Route$3 = createFileRoute("/sellers")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./orders._id-DhJ_Bx-b.mjs");
var Route$2 = createFileRoute("/orders/$id")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./products._id-C7fZ3LiF.mjs");
var Route$1 = createFileRoute("/products/$id")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./sellers._id-CrsdEaXW.mjs");
var Route = createFileRoute("/sellers/$id")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var AboutRoute = Route$9.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$11
});
var CartRoute = Route$8.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$11
});
var CheckoutRoute = Route$7.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$6.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var MarketplaceRoute = Route$5.update({
	id: "/marketplace",
	path: "/marketplace",
	getParentRoute: () => Route$11
});
var SellRoute = Route$4.update({
	id: "/sell",
	path: "/sell",
	getParentRoute: () => Route$11
});
var SellersRoute = Route$3.update({
	id: "/sellers",
	path: "/sellers",
	getParentRoute: () => Route$11
});
var OrdersIdRoute = Route$2.update({
	id: "/orders/$id",
	path: "/orders/$id",
	getParentRoute: () => Route$11
});
var ProductsIdRoute = Route$1.update({
	id: "/products/$id",
	path: "/products/$id",
	getParentRoute: () => Route$11
});
var SellersRouteChildren = { SellersIdRoute: Route.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => SellersRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CartRoute,
	CheckoutRoute,
	ContactRoute,
	MarketplaceRoute,
	SellRoute,
	SellersRoute: SellersRoute._addFileChildren(SellersRouteChildren),
	OrdersIdRoute,
	ProductsIdRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { relatedProducts as C, productsBySeller as S, cn as T, COUNTIES as _, Route$5 as a, TRUST_STATS as b, newListingId as c, FieldLabel as d, Input as f, CATEGORIES as g, Button as h, Route$2 as i, newOrderId as l, Textarea as m, Route as n, allProducts as o, NativeSelect as p, Route$1 as r, findProduct as s, router_exports as t, useShop as u, PRODUCTS as v, searchProducts as w, getSeller as x, SELLERS as y };
