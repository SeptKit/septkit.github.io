(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`h2[data-v-d9ad9877]{padding:1rem;font-size:2rem}`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})();import { D as e, H as t, Z as n, a as r, n as i, p as a, t as o, u as s, w as c } from "./app-WpLGAYk8.js";
var l = /* @__PURE__ */ ((e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
})({
	__name: "sidebar-primary",
	setup(r) {
		let i = t((/* @__PURE__ */ new Date()).toISOString());
		return c(() => {
			i.value = (/* @__PURE__ */ new Date()).toLocaleTimeString();
		}), (t, r) => (e(), a("div", null, [r[0] ||= s("h2", null, "Primary Sidebar Widget", -1), s("span", null, "Mount Time: " + n(i.value), 1)]));
	}
}, [["__scopeId", "data-v-d9ad9877"]]);
//#endregion
//#region set-sidebar.ts
function u(e, t) {
	o(document.getElementById(e), { detail: `could not find root element: ${e}` });
	let n = r(l);
	return n.use(i()), n.provide("sclProject", t.project), n.provide("activeDocumentId", t.activeDocumentId), n.mount(`#${e}`), () => {
		n.unmount();
	};
}
//#endregion
export { u as default };
