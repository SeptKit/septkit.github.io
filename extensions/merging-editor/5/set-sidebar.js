(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`h2[data-v-d9ad9877]{padding:1rem;font-size:2rem}`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})();import { F as e, R as t, et as n, f as r, g as i, lt as a, n as o, w as s, x as c } from "./app-1ycVpfQA.js";
var l = /* @__PURE__ */ ((e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
})({
	__name: "sidebar-primary",
	setup(r) {
		let i = n((/* @__PURE__ */ new Date()).toISOString());
		return e(() => {
			i.value = (/* @__PURE__ */ new Date()).toLocaleTimeString();
		}), (e, n) => (t(), s("div", null, [n[0] ||= c("h2", null, "Primary Sidebar Widget", -1), c("span", null, "Mount Time: " + a(i.value), 1)]));
	}
}, [["__scopeId", "data-v-d9ad9877"]]);
//#endregion
//#region set-sidebar.ts
function u(e, t) {
	o(document.getElementById(e), { detail: `could not find root element: ${e}` });
	let n = i(l);
	return n.use(r()), n.provide("sclProject", t.project), n.provide("activeDocumentId", t.activeDocumentId), n.mount(`#${e}`), () => {
		n.unmount();
	};
}
//#endregion
export { u as default };
