//#region node_modules/.nitro/vite/services/ssr/assets/format-DIyIwLIV.js
var kes = new Intl.NumberFormat("en-KE", {
	style: "currency",
	currency: "KES",
	maximumFractionDigits: 0
});
function formatKes(amount) {
	return kes.format(amount);
}
//#endregion
export { formatKes as t };
