import { A as e, B as t, C as n, D as r, E as i, G as a, H as o, I as s, J as c, K as l, L as u, M as d, N as f, O as p, P as m, Q as h, R as g, S as _, T as v, U as y, V as b, W as x, X as ee, Y as S, Z as C, _ as w, a as te, b as T, c as E, d as ne, f as D, g as re, h as O, i as k, j as ie, k as A, l as j, m as M, n as N, o as ae, p as P, q as oe, r as se, s as ce, t as le, u as F, v as I, w as ue, y as de, z as L } from "./app-WpLGAYk8.js";
//#region node_modules/.pnpm/@septkit+shell-lib@0.0.9/node_modules/@septkit/shell-lib/dist/index.js
var fe = "TEMP-", pe = {
	UNKNOWN: {
		code: "D0001",
		message: "An unknown error occurred"
	},
	ASSERTION_FAILED: {
		code: "D0002",
		message: "Assertion failed"
	},
	STORE_CONNECTION_FAILED: {
		code: "D1001",
		message: "Failed to open database"
	},
	STORE_COMMIT_FAILED: {
		code: "D1002",
		message: "Failed to commit changes"
	},
	STORE_RECORD_NOT_FOUND: {
		code: "D1003",
		message: "Record not found in database"
	},
	STORE_BULK_ADD_FAILED: {
		code: "D1004",
		message: "Failed to add records to database"
	},
	STORE_BULK_UPDATE_FAILED: {
		code: "D1005",
		message: "Failed to update records in database"
	},
	STORE_DELETE_FAILED: {
		code: "D1006",
		message: "Failed to delete records from database"
	},
	STORE_NOT_WRITABLE: {
		code: "D1007",
		message: "Store is not writable"
	},
	STORE_BLOB_NOT_FOUND: {
		code: "D1008",
		message: "Blob not found"
	},
	ELEMENT_NOT_FOUND: {
		code: "D2001",
		message: "Element not found"
	},
	ROOT_NOT_FOUND: {
		code: "D2002",
		message: "Root element not found"
	},
	DUPLICATE_ID: {
		code: "D2003",
		message: "Duplicate element ID"
	},
	ELEMENT_TAGNAME_MISMATCH: {
		code: "D2004",
		message: "Element tagName does not match the expected type"
	},
	INVALID_PARENT_CHILD: {
		code: "D3001",
		message: "Invalid parent-child relationship"
	},
	INVALID_ATTRIBUTE: {
		code: "D3002",
		message: "Invalid attribute for element"
	},
	PROTECTED_ROOT: {
		code: "D3003",
		message: "Root element cannot be deleted"
	},
	REQUIRED_ATTRIBUTE_MISSING: {
		code: "D3004",
		message: "Required attribute is missing"
	},
	UNIQUE_CONSTRAINT_VIOLATION: {
		code: "D3005",
		message: "Value is already used within its scope"
	},
	ALREADY_COMMITTED: {
		code: "D4001",
		message: "Transaction already committed"
	},
	ALREADY_FAILED: {
		code: "D4002",
		message: "Transaction already failed"
	},
	DATABASE_COMMIT_ERROR: {
		code: "D4003",
		message: "An error occurred while committing changes to the database"
	},
	CONCURRENT_TRANSACTION: {
		code: "D4004",
		message: "A transaction is already in progress. Concurrent transactions are not supported yet — serialize them or implement a transaction queue."
	},
	EXPORT_ROOT_NOT_FOUND: {
		code: "D5001",
		message: "Root element not found in records during export"
	},
	EXPORT_ORPHAN_CHILD_REF: {
		code: "D5002",
		message: "Parent references non-existent child record"
	},
	PARSE_ERROR: {
		code: "D5003",
		message: "Failed to parse XML"
	},
	EXTENSION_METHOD_COLLISION: {
		code: "D6001",
		message: "Extension method name collision detected"
	},
	UNKNOWN_CONFIG_KEY: {
		code: "D7001",
		message: "Unknown config key"
	},
	DOCUMENT_NOT_REGISTERED: {
		code: "D7002",
		message: "Document not registered in project"
	},
	PROJECT_NOT_OPENED: {
		code: "D7003",
		message: "Project not opened"
	},
	BLOB_NOT_FOUND: {
		code: "D7004",
		message: "Blob not found in store"
	}
};
function me(e, t) {
	let n = pe[e], r = {
		code: n.code,
		key: e,
		message: t.message ?? n.message,
		detail: t.detail,
		method: he((/* @__PURE__ */ Error()).stack),
		ref: t.ref,
		cause: t.cause
	}, i = Error(t.detail);
	throw i.cause = r, i;
}
function he(e) {
	if (!e) return "unknown";
	let t = e.split("\n").slice(1).find((e) => !/\b(throwDialecteError|assert)\b/.test(e));
	if (!t) return "unknown";
	let n = t.match(/\bat\s+(\S+)\s+\(([^)]+)\)/), r = n?.[1], i = n?.[2];
	if (!i || !r) return r ?? "unknown";
	let a = i.match(/(\w[\w-]*\/src\/[^?:]+)/);
	return a ? `${a[1].replace(/\.[^/.]+$/, "")}::${r}` : r;
}
function ge(e, t) {
	if (e) return;
	let { detail: n, key: r = "ASSERTION_FAILED", ref: i } = t;
	me(r, {
		detail: n,
		ref: i
	});
}
var _e = null;
function ve(e) {
	_e = e;
}
function ye() {
	_e = null;
}
function be() {
	return ge(_e, { detail: "getProject: shell context not set. Call setShellContext(api) before app.mount()." }), _e.project;
}
function xe() {
	return ge(_e, { detail: "getActiveDocumentId: shell context not set. Call setShellContext(api) before app.mount()." }), _e.activeDocumentId;
}
//#endregion
//#region node_modules/.pnpm/@vueuse+shared@14.2.1_vue@3.5.32_typescript@5.8.3_/node_modules/@vueuse/shared/dist/index.js
var Se = /* @__PURE__ */ new WeakMap(), Ce = (...e) => {
	let t = e[0], n = w()?.proxy ?? L();
	if (n == null && !de()) throw Error("injectLocal must be called in setup");
	return n && Se.has(n) && t in Se.get(n) ? Se.get(n)[t] : T(...e);
}, we = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var Te = Object.prototype.toString, Ee = (e) => Te.call(e) === "[object Object]";
function De(e, t) {
	if (typeof e == "number") return e + t;
	let n = e.match(/^-?\d+\.?\d*/)?.[0] || "", r = e.slice(n.length), i = Number.parseFloat(n) + t;
	return Number.isNaN(i) ? e : i + r;
}
function Oe(e) {
	return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function ke(e) {
	return Array.isArray(e) ? e : [e];
}
function Ae(e) {
	return e || w();
}
function je(e, t = !0, r) {
	Ae(r) ? ue(e, r) : t ? e() : n(e);
}
function Me(e, t, n) {
	return f(e, t, {
		...n,
		immediate: !0
	});
}
//#endregion
//#region node_modules/.pnpm/@vueuse+core@14.2.1_vue@3.5.32_typescript@5.8.3_/node_modules/@vueuse/core/dist/index.js
var R = we ? window : void 0;
we && window.document, we && window.navigator, we && window.location;
function Ne(e) {
	let t = l(e);
	return t?.$el ?? t;
}
function Pe(...e) {
	let t = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), n = j(() => {
		let t = ke(l(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	});
	return Me(() => [
		n.value?.map((e) => Ne(e)) ?? [R].filter((e) => e != null),
		ke(l(n.value ? e[1] : e[0])),
		ke(c(n.value ? e[2] : e[1])),
		l(n.value ? e[3] : e[2])
	], ([e, n, r, i], a, o) => {
		if (!e?.length || !n?.length || !r?.length) return;
		let s = Ee(i) ? { ...i } : i, c = e.flatMap((e) => n.flatMap((n) => r.map((r) => t(e, n, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
function Fe() {
	let e = y(!1), t = w();
	return t && ue(() => {
		e.value = !0;
	}, t), e;
}
/* @__NO_SIDE_EFFECTS__ */
function z(e) {
	let t = Fe();
	return j(() => (t.value, !!e()));
}
var Ie = Symbol("vueuse-ssr-width");
/* @__NO_SIDE_EFFECTS__ */
function Le() {
	let e = de() ? Ce(Ie, null) : null;
	return typeof e == "number" ? e : void 0;
}
function Re(e, t = {}) {
	let { window: n = R, ssrWidth: r = /* @__PURE__ */ Le() } = t, i = /* @__PURE__ */ z(() => n && "matchMedia" in n && typeof n.matchMedia == "function"), a = y(typeof r == "number"), o = y(), s = y(!1);
	return m(() => {
		if (a.value) {
			a.value = !i.value, s.value = l(e).split(",").some((e) => {
				let t = e.includes("not all"), n = e.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), i = e.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), a = !!(n || i);
				return n && a && (a = r >= Oe(n[1])), i && a && (a = r <= Oe(i[1])), t ? !a : a;
			});
			return;
		}
		i.value && (o.value = n.matchMedia(l(e)), s.value = o.value.matches);
	}), Pe(o, "change", (e) => {
		s.value = e.matches;
	}, { passive: !0 }), j(() => s.value);
}
var ze = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	"2xl": 1536
};
function Be(e, t = {}) {
	function n(t, n) {
		let r = l(e[l(t)]);
		return n != null && (r = De(r, n)), typeof r == "number" && (r = `${r}px`), r;
	}
	let { window: r = R, strategy: i = "min-width", ssrWidth: a = /* @__PURE__ */ Le() } = t, o = typeof a == "number", s = o ? y(!1) : { value: !0 };
	o && je(() => s.value = !!r);
	function c(e, t) {
		return !s.value && o ? e === "min" ? a >= Oe(t) : a <= Oe(t) : r ? r.matchMedia(`(${e}-width: ${t})`).matches : !1;
	}
	let u = (e) => Re(() => `(min-width: ${n(e)})`, t), d = (e) => Re(() => `(max-width: ${n(e)})`, t), f = Object.keys(e).reduce((e, t) => (Object.defineProperty(e, t, {
		get: () => i === "min-width" ? u(t) : d(t),
		enumerable: !0,
		configurable: !0
	}), e), {});
	function p() {
		let t = Object.keys(e).map((e) => [
			e,
			f[e],
			Oe(n(e))
		]).sort((e, t) => e[2] - t[2]);
		return j(() => t.filter(([, e]) => e.value).map(([e]) => e));
	}
	return Object.assign(f, {
		greaterOrEqual: u,
		smallerOrEqual: d,
		greater(e) {
			return Re(() => `(min-width: ${n(e, .1)})`, t);
		},
		smaller(e) {
			return Re(() => `(max-width: ${n(e, -.1)})`, t);
		},
		between(e, r) {
			return Re(() => `(min-width: ${n(e)}) and (max-width: ${n(r, -.1)})`, t);
		},
		isGreater(e) {
			return c("min", n(e, .1));
		},
		isGreaterOrEqual(e) {
			return c("min", n(e));
		},
		isSmaller(e) {
			return c("max", n(e, -.1));
		},
		isSmallerOrEqual(e) {
			return c("max", n(e));
		},
		isInBetween(e, t) {
			return c("min", n(e)) && c("max", n(t, -.1));
		},
		current: p,
		active() {
			let e = p();
			return j(() => e.value.length === 0 ? "" : e.value.at(i === "min-width" ? -1 : 0));
		}
	});
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/shared/arrays.js
function Ve(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/shared/browser.js
var He = typeof document < "u";
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/shared/createContext.js
function Ue(e, t) {
	let n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
	return [(t) => {
		let n = T(r, t);
		if (n || n === null) return n;
		throw Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
	}, (e) => (p(r, e), e)];
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/shared/renderSlotFragments.js
function We(e) {
	return e ? e.flatMap((e) => e.type === ce ? We(e.children) : [e]) : [];
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/ConfigProvider/ConfigProvider.js
var [Ge, Ke] = /* @__PURE__ */ Ue("ConfigProvider");
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/shared/useDirection.js
function B(e) {
	let t = Ge({ dir: o("ltr") });
	return j(() => e?.value || t.dir?.value || "ltr");
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/shared/useForwardExpose.js
function V() {
	let e = w(), t = o(), n = j(() => r());
	i(() => {
		n.value !== r() && oe(t);
	});
	function r() {
		return t.value && "$el" in t.value && ["#text", "#comment"].includes(t.value.$el.nodeName) ? t.value.$el.nextElementSibling : Ne(t);
	}
	let a = Object.assign({}, e.exposed), s = {};
	for (let t in e.props) Object.defineProperty(s, t, {
		enumerable: !0,
		configurable: !0,
		get: () => e.props[t]
	});
	if (Object.keys(a).length > 0) for (let e in a) Object.defineProperty(s, e, {
		enumerable: !0,
		configurable: !0,
		get: () => a[e]
	});
	Object.defineProperty(s, "$el", {
		enumerable: !0,
		configurable: !0,
		get: () => e.vnode.el
	}), e.exposed = s;
	function c(n) {
		if (t.value = n, n && (Object.defineProperty(s, "$el", {
			enumerable: !0,
			configurable: !0,
			get: () => n instanceof Element ? n : n.$el
		}), !(n instanceof Element) && !Object.hasOwn(n, "$el"))) {
			let t = n.$.exposed, r = Object.assign({}, s);
			for (let e in t) Object.defineProperty(r, e, {
				enumerable: !0,
				configurable: !0,
				get: () => t[e]
			});
			e.exposed = r;
		}
	}
	return {
		forwardRef: c,
		currentRef: t,
		currentElement: n
	};
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/shared/useId.js
var qe = 0;
function Je(e, t = "reka") {
	if (e) return e;
	let n;
	return n = "useId" in k ? d?.() : Ge({ useId: void 0 }).useId?.() ?? `${++qe}`, t ? `${t}-${n}` : n;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/Primitive/Slot.js
var Ye = /* @__PURE__ */ re({
	name: "PrimitiveSlot",
	inheritAttrs: !1,
	setup(e, { attrs: t, slots: n }) {
		return () => {
			if (!n.default) return null;
			let e = We(n.default()), r = e.findIndex((e) => e.type !== ae);
			if (r === -1) return e;
			let i = e[r];
			delete i.props?.ref;
			let a = i.props ? _(t, i.props) : t, o = E({
				...i,
				props: {}
			}, a);
			return e.length === 1 ? o : (e[r] = o, e);
		};
	}
}), Xe = [
	"area",
	"img",
	"input"
], Ze = /* @__PURE__ */ re({
	name: "Primitive",
	inheritAttrs: !1,
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: {
			type: [String, Object],
			default: "div"
		}
	},
	setup(e, { attrs: t, slots: n }) {
		let r = e.asChild ? "template" : e.as;
		return typeof r == "string" && Xe.includes(r) ? () => I(r, t) : r === "template" ? () => I(Ye, t, { default: n.default }) : () => I(e.as, t, { default: n.default });
	}
});
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/utils/assert.js
function H(e, t = "Assertion failed!") {
	if (!e) throw console.error(t), Error(t);
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/utils/dom.js
function Qe(e, t = document) {
	return He ? t instanceof HTMLElement && t?.dataset?.panelGroupId === e ? t : t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`) || null : null;
}
function $e(e, t = document) {
	return He && t.querySelector(`[data-panel-resize-handle-id="${e}"]`) || null;
}
function et(e, t, n = document) {
	return He ? tt(e, n).findIndex((e) => e.getAttribute("data-panel-resize-handle-id") === t) ?? null : null;
}
function tt(e, t = document) {
	return He ? Array.from(t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`)) : [];
}
function nt(e, t, n, r = document) {
	let i = $e(t, r), a = tt(e, r), o = i ? a.indexOf(i) : -1;
	return [n[o]?.id ?? null, n[o + 1]?.id ?? null];
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/utils/events.js
function rt(e) {
	return e.type === "keydown";
}
function it(e) {
	return e.type.startsWith("mouse");
}
function at(e) {
	return e.type.startsWith("touch");
}
function ot(e) {
	if (it(e)) return {
		x: e.clientX,
		y: e.clientY
	};
	if (at(e)) {
		let t = e.touches[0];
		if (t && t.clientX && t.clientY) return {
			x: t.clientX,
			y: t.clientY
		};
	}
	return {
		x: Infinity,
		y: Infinity
	};
}
function U(e, t) {
	let n = e === "horizontal", { x: r, y: i } = ot(t);
	return n ? r : i;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/utils/calculate.js
function st(e, t, n, r, i) {
	let a = n === "horizontal", o = $e(t, i);
	H(o);
	let s = o.getAttribute("data-panel-group-id");
	H(s);
	let { initialCursorPosition: c } = r, l = U(n, e), u = Qe(s, i);
	H(u);
	let d = u.getBoundingClientRect(), f = a ? d.width : d.height;
	return (l - c) / f * 100;
}
function ct(e, t, n, r, i, a) {
	if (rt(e)) {
		let t = n === "horizontal", r = 0;
		r = e.shiftKey ? 100 : i ?? 10;
		let a = 0;
		switch (e.key) {
			case "ArrowDown":
				a = t ? 0 : r;
				break;
			case "ArrowLeft":
				a = t ? -r : 0;
				break;
			case "ArrowRight":
				a = t ? r : 0;
				break;
			case "ArrowUp":
				a = t ? 0 : -r;
				break;
			case "End":
				a = 100;
				break;
			case "Home":
				a = -100;
				break;
		}
		return a;
	} else return r == null ? 0 : st(e, t, n, r, a);
}
function lt({ layout: e, panelsArray: t, pivotIndices: n }) {
	let r = 0, i = 100, a = 0, o = 0, s = n[0];
	return H(s != null), t.forEach((e, t) => {
		let { constraints: n } = e, { maxSize: c = 100, minSize: l = 0 } = n;
		t === s ? (r = l, i = c) : (a += l, o += c);
	}), {
		valueMax: Math.min(i, 100 - a),
		valueMin: Math.max(r, 100 - o),
		valueNow: e[s]
	};
}
function ut({ panelDataArray: e }) {
	let t = Array.from({ length: e.length }), n = e.map((e) => e.constraints), r = 0, i = 100;
	for (let a = 0; a < e.length; a++) {
		let e = n[a];
		H(e);
		let { defaultSize: o } = e;
		o != null && (r++, t[a] = o, i -= o);
	}
	for (let a = 0; a < e.length; a++) {
		let o = n[a];
		H(o);
		let { defaultSize: s } = o;
		if (s != null) continue;
		let c = e.length - r, l = i / c;
		r++, t[a] = l, i -= l;
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/utils/compare.js
function dt(e, t, n = 10) {
	e = Number.parseFloat(e.toFixed(n)), t = Number.parseFloat(t.toFixed(n));
	let r = e - t;
	return r === 0 ? 0 : r > 0 ? 1 : -1;
}
function W(e, t, n) {
	return dt(e, t, n) === 0;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/utils/callPanelCallbacks.js
function ft(e, t, n, r) {
	t.forEach((t, i) => {
		let a = e[i];
		H(a);
		let { callbacks: o, constraints: s, id: c } = a, { collapsedSize: l = 0, collapsible: u, sizeUnit: d } = s, f = t;
		d === "px" && r != null && (f = t / 100 * r);
		let p = n[c];
		if (p == null || !W(f, p)) {
			n[c] = f;
			let { onCollapse: e, onExpand: t, onResize: r } = o;
			r && r(f, p), u && (e || t) && (t && (p == null || W(p, l)) && !W(f, l) && t(), e && (p == null || !W(p, l)) && W(f, l) && e());
		}
	});
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/utils/debounce.js
function pt(e, t = 10) {
	let n = null;
	return (...r) => {
		n !== null && clearTimeout(n), n = setTimeout(() => {
			e(...r);
		}, t);
	};
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/utils/resizePanel.js
function mt({ panelConstraints: e, panelIndex: t, size: n }) {
	let r = e[t];
	H(r != null);
	let { collapsedSize: i = 0, collapsible: a, maxSize: o = 100, minSize: s = 0 } = r;
	if (dt(n, s) < 0) if (a) {
		let e = (i + s) / 2;
		n = dt(n, e) < 0 ? i : s;
	} else n = s;
	return n = Math.min(o, n), n = Number.parseFloat(n.toFixed(10)), n;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/utils/layout.js
function ht(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function gt({ delta: e, layout: t, panelConstraints: n, pivotIndices: r, trigger: i }) {
	if (W(e, 0)) return t;
	let a = [...t], [o, s] = r;
	H(o != null), H(s != null);
	let c = 0;
	if (i === "keyboard") {
		{
			let r = e < 0 ? s : o, i = n[r];
			if (H(i), i.collapsible) {
				let i = t[r];
				H(i != null);
				let a = n[r];
				H(a);
				let { collapsedSize: o = 0, minSize: s = 0 } = a;
				if (W(i, o)) {
					let t = s - i;
					dt(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
		{
			let r = e < 0 ? o : s, i = n[r];
			H(i);
			let { collapsible: a } = i;
			if (a) {
				let i = t[r];
				H(i != null);
				let a = n[r];
				H(a);
				let { collapsedSize: o = 0, minSize: s = 0 } = a;
				if (W(i, s)) {
					let t = i - o;
					dt(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
	}
	{
		let r = e < 0 ? 1 : -1, i = e < 0 ? s : o, a = 0;
		for (;;) {
			let e = t[i];
			H(e != null);
			let o = mt({
				panelConstraints: n,
				panelIndex: i,
				size: 100
			}) - e;
			if (a += o, i += r, i < 0 || i >= n.length) break;
		}
		let c = Math.min(Math.abs(e), Math.abs(a));
		e = e < 0 ? 0 - c : c;
	}
	{
		let r = e < 0 ? o : s;
		for (; r >= 0 && r < n.length;) {
			let i = Math.abs(e) - Math.abs(c), o = t[r];
			H(o != null);
			let s = o - i, l = mt({
				panelConstraints: n,
				panelIndex: r,
				size: s
			});
			if (!W(o, l) && (c += o - l, a[r] = l, c.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, { numeric: !0 }) >= 0)) break;
			e < 0 ? r-- : r++;
		}
	}
	if (W(c, 0)) return t;
	{
		let r = e < 0 ? s : o, i = t[r];
		H(i != null);
		let l = i + c, u = mt({
			panelConstraints: n,
			panelIndex: r,
			size: l
		});
		if (a[r] = u, !W(u, l)) {
			let t = l - u, r = e < 0 ? s : o;
			for (; r >= 0 && r < n.length;) {
				let i = a[r];
				H(i != null);
				let o = i + t, s = mt({
					panelConstraints: n,
					panelIndex: r,
					size: o
				});
				if (W(i, s) || (t -= s - i, a[r] = s), W(t, 0)) break;
				e > 0 ? r-- : r++;
			}
		}
	}
	return W(a.reduce((e, t) => t + e, 0), 100) ? a : t;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/utils/pivot.js
function G(e, t, n) {
	let r = et(e, t, n);
	return r == null ? [-1, -1] : [r, r + 1];
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/utils/registry.js
function _t() {
	if (typeof matchMedia == "function") return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
_t();
var vt = /* @__PURE__ */ new Map();
function yt(e, t) {
	vt.set(e, t);
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/utils/style.js
function bt({ defaultSize: e, dragState: t, layout: n, panelData: r, panelIndex: i, precision: a = 3 }) {
	let o = n[i], s;
	return s = o == null ? e === void 0 ? "1" : e.toPrecision(a) : r.length === 1 ? "1" : o.toPrecision(a), {
		flexBasis: 0,
		flexGrow: s,
		flexShrink: 1,
		overflow: "hidden",
		pointerEvents: t === null ? void 0 : "none"
	};
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/utils/units.js
function K({ sizeUnit: e, groupSizeInPixels: t, value: n }) {
	if (n == null || e === "%") return n;
	if (!(t == null || t === 0)) return n / t * 100;
}
function xt({ panelDataArray: e, groupSizeInPixels: t }) {
	return e.some((e) => (e.constraints.sizeUnit ?? "%") === "px") && (!t || Number.isNaN(t)) ? null : e.map((e) => {
		let n = e.constraints, r = n.sizeUnit ?? "%", i = K({
			groupSizeInPixels: t,
			sizeUnit: r,
			value: n.collapsedSize
		}), a = K({
			groupSizeInPixels: t,
			sizeUnit: r,
			value: n.defaultSize
		}), o = K({
			groupSizeInPixels: t,
			sizeUnit: r,
			value: n.maxSize
		}), s = K({
			groupSizeInPixels: t,
			sizeUnit: r,
			value: n.minSize
		});
		return {
			...n,
			collapsedSize: i ?? n.collapsedSize ?? 0,
			defaultSize: a,
			maxSize: o ?? 100,
			minSize: s ?? 0,
			sizeUnit: "%"
		};
	});
}
function St(e) {
	return e.some((e) => (e.constraints.sizeUnit ?? "%") === "px");
}
function Ct({ layout: e, panelDataArray: t, prevGroupSize: n, nextGroupSize: r }) {
	if (!St(t) || n == null || r == null || n === 0 || r === 0 || Number.isNaN(n) || Number.isNaN(r)) return null;
	let i = t.reduce((e, t, n) => ((t.constraints.sizeUnit ?? "%") === "px" && e.push(n), e), []);
	if (i.length === 0) return null;
	let a = new Set(i), o = e.map((e) => e ?? 0);
	i.reduce((t, n) => t + (e[n] ?? 0), 0);
	let s = i.map((t) => (e[t] ?? 0) / 100 * n / r * 100), c = s.reduce((e, t) => e + t, 0), l = e.reduce((e, t, n) => a.has(n) ? e : e + (t ?? 0), 0), u = Math.max(0, 100 - c), d = l > 0 ? u / l : 0;
	i.forEach((e, t) => {
		o[e] = s[t];
	});
	for (let t = 0; t < o.length; t++) a.has(t) || (o[t] = (e[t] ?? 0) * d);
	let f = o.reduce((e, t) => e + t, 0);
	if (f > 0 && Math.abs(f - 100) > 1e-9) {
		let e = 100 / f;
		for (let t = 0; t < o.length; t++) o[t] = (o[t] ?? 0) * e;
	}
	return o;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/utils/validation.js
function wt({ layout: e, panelConstraints: t }) {
	let n = [...e], r = n.reduce((e, t) => e + t, 0);
	if (n.length !== t.length) throw Error(`Invalid ${t.length} panel layout: ${n.map((e) => `${e}%`).join(", ")}`);
	if (!W(r, 100)) {
		console.warn(`WARNING: Invalid layout total size: ${n.map((e) => `${e}%`).join(", ")}. Layout normalization will be applied.`);
		for (let e = 0; e < t.length; e++) {
			let t = n[e];
			H(t != null), n[e] = 100 / r * t;
		}
	}
	let i = 0;
	for (let e = 0; e < t.length; e++) {
		let r = n[e];
		H(r != null);
		let a = mt({
			panelConstraints: t,
			panelIndex: e,
			size: r
		});
		r !== a && (i += r - a, n[e] = a);
	}
	if (!W(i, 0)) for (let e = 0; e < t.length; e++) {
		let r = n[e];
		H(r != null);
		let a = r + i, o = mt({
			panelConstraints: t,
			panelIndex: e,
			size: a
		});
		if (r !== o && (i -= o - r, n[e] = o, W(i, 0))) break;
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/composables/useWindowSplitterPanelGroupBehavior.js
function Tt({ eagerValuesRef: e, groupId: t, layout: n, panelDataArray: r, panelGroupElement: i, setLayout: a, getPanelDataWithPercentConstraints: o }) {
	m((e) => {
		let r = i.value;
		if (!r) return;
		let a = o();
		if (!a) return;
		let s = tt(t, r);
		for (let e = 0; e < a.length - 1; e++) {
			let { valueMax: t, valueMin: r, valueNow: i } = lt({
				layout: n.value,
				panelsArray: a,
				pivotIndices: [e, e + 1]
			}), o = s[e];
			if (o != null) {
				let n = a[e];
				H(n), o.setAttribute("aria-controls", n.id), o.setAttribute("aria-valuemax", `${Math.round(t)}`), o.setAttribute("aria-valuemin", `${Math.round(r)}`), o.setAttribute("aria-valuenow", i == null ? "" : `${Math.round(i)}`);
			}
		}
		e(() => {
			s.forEach((e) => {
				e.removeAttribute("aria-controls"), e.removeAttribute("aria-valuemax"), e.removeAttribute("aria-valuemin"), e.removeAttribute("aria-valuenow");
			});
		});
	}), m((r) => {
		let s = i.value;
		if (!s) return;
		let c = e.value;
		H(c);
		let l = o();
		if (!l) return;
		let { panelDataArray: u } = c;
		H(Qe(t, s) != null, `No group found for id "${t}"`);
		let d = tt(t, s);
		H(d);
		let f = d.map((e) => {
			let r = e.getAttribute("data-panel-resize-handle-id");
			H(r);
			let [i, o] = nt(t, r, u, s);
			if (i == null || o == null) return () => {};
			let c = (e) => {
				if (!e.defaultPrevented) switch (e.key) {
					case "Enter": {
						e.preventDefault();
						let o = l.findIndex((e) => e.id === i);
						if (o >= 0) {
							let e = l[o];
							H(e);
							let i = n.value[o], { collapsedSize: c = 0, collapsible: u, minSize: d = 0 } = e.constraints;
							if (i != null && u) {
								let e = gt({
									delta: W(i, c) ? d - c : c - i,
									layout: n.value,
									panelConstraints: l.map((e) => e.constraints),
									pivotIndices: G(t, r, s),
									trigger: "keyboard"
								});
								n.value !== e && a(e);
							}
						}
						break;
					}
				}
			};
			return e.addEventListener("keydown", c), () => {
				e.removeEventListener("keydown", c);
			};
		});
		r(() => {
			f.forEach((e) => e());
		});
	});
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/utils/storage.js
function Et(e) {
	try {
		if (typeof localStorage < "u") e.getItem = (e) => localStorage.getItem(e), e.setItem = (e, t) => {
			localStorage.setItem(e, t);
		};
		else throw TypeError("localStorage not supported in this environment");
	} catch (t) {
		console.error(t), e.getItem = () => null, e.setItem = () => {};
	}
}
function Dt(e) {
	return `reka:${e}`;
}
function Ot(e) {
	return e.map((e) => {
		let { constraints: t, id: n, idIsFromProps: r, order: i } = e;
		return r ? n : i ? `${i}:${JSON.stringify(t)}` : JSON.stringify(t);
	}).sort((e, t) => e.localeCompare(t)).join(",");
}
function kt(e, t) {
	try {
		let n = Dt(e), r = t.getItem(n);
		if (r) {
			let e = JSON.parse(r);
			if (typeof e == "object" && e) return e;
		}
	} catch {}
	return null;
}
function At(e, t, n) {
	return (kt(e, n) ?? {})[Ot(t)] ?? null;
}
function jt(e, t, n, r, i) {
	let a = Dt(e), o = Ot(t), s = kt(e, i) ?? {}, c = {};
	t.forEach((e, t) => {
		(e.constraints.sizeUnit ?? "%") === "px" && (c[t] = "px");
	}), s[o] = {
		expandToSizes: Object.fromEntries(n.entries()),
		layout: r,
		...Object.keys(c).length > 0 && { sizeUnits: c }
	};
	try {
		i.setItem(a, JSON.stringify(s));
	} catch (e) {
		console.error(e);
	}
}
//#endregion
//#region node_modules/.pnpm/reka-ui@2.9.8_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/Splitter/SplitterGroup.js
var Mt = 100, q = {
	getItem: (e) => (Et(q), q.getItem(e)),
	setItem: (e, t) => {
		Et(q), q.setItem(e, t);
	}
}, [Nt, Pt] = /* @__PURE__ */ Ue("PanelGroup"), Ft = /* @__PURE__ */ re({
	__name: "SplitterGroup",
	props: {
		id: {
			type: [String, null],
			required: !1
		},
		autoSaveId: {
			type: [String, null],
			required: !1,
			default: null
		},
		direction: {
			type: String,
			required: !0
		},
		keyboardResizeBy: {
			type: [Number, null],
			required: !1,
			default: 10
		},
		storage: {
			type: Object,
			required: !1,
			default: () => q
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: ["layout"],
	setup(t, { emit: n }) {
		let i = t, l = n, u = {}, { direction: d } = a(i), p = Je(i.id, "reka-splitter-group"), h = B(), { forwardRef: g, currentElement: _ } = V(), v = o(null), y = o(null), b = o(null), x = o([]), S = o({}), C = o(/* @__PURE__ */ new Map()), w = o(0), te = j(() => ({
			autoSaveId: i.autoSaveId,
			direction: i.direction,
			dragState: v.value,
			id: p,
			keyboardResizeBy: i.keyboardResizeBy,
			storage: i.storage
		})), T = o({
			layout: x.value,
			panelDataArray: [],
			panelDataArrayChanged: !1
		});
		function E() {
			if (y.value != null) return y.value;
			let e = _.value;
			if (e && e instanceof HTMLElement) {
				let t = e.getBoundingClientRect(), n = d.value === "horizontal" ? t.width : t.height;
				if (!Number.isNaN(n)) return y.value = n, n;
			}
			return null;
		}
		function D(e) {
			let t = e ?? E();
			return xt({
				panelDataArray: T.value.panelDataArray,
				groupSizeInPixels: t
			});
		}
		function re(e) {
			let t = D(e);
			return t ? T.value.panelDataArray.map((e, n) => ({
				...e,
				constraints: t[n]
			})) : null;
		}
		let O = (e) => x.value = e;
		function k(e) {
			let { panelDataArray: t } = T.value, n = E();
			return e.map((e, r) => {
				let i = t[r];
				return i && (i.constraints.sizeUnit ?? "%") === "px" && n != null ? e / 100 * n : e;
			});
		}
		Tt({
			eagerValuesRef: T,
			groupId: p,
			layout: x,
			panelDataArray: T.value.panelDataArray,
			setLayout: O,
			panelGroupElement: _,
			getPanelDataWithPercentConstraints: re
		}), m((e) => {
			let t = _.value;
			if (!t || typeof ResizeObserver != "function") return;
			let n = new ResizeObserver((e) => {
				let t = e[0];
				if (!t) return;
				let { height: n, width: r } = t.contentRect, i = d.value === "horizontal" ? r : n;
				Number.isNaN(i) || (y.value = i);
			});
			t instanceof HTMLElement && n.observe(t), e(() => n.disconnect());
		}), m(() => {
			let { panelDataArray: e } = T.value, { autoSaveId: t } = i;
			if (t) {
				if (x.value.length === 0 || x.value.length !== e.length) return;
				let n = u[t];
				n || (n = pt(jt, Mt), u[t] = n);
				let r = [...e], a = new Map(C.value);
				n(t, r, a, x.value, i.storage);
			}
		});
		function ie(e, t) {
			let { panelDataArray: n } = T.value, r = de(n, e);
			return bt({
				defaultSize: t,
				dragState: v.value,
				layout: x.value,
				panelData: n,
				panelIndex: r
			});
		}
		function A(e) {
			let { panelDataArray: t } = T.value;
			t.push(e), t.sort((e, t) => {
				let n = e.order, r = t.order;
				return n == null && r == null ? 0 : n == null ? -1 : r == null ? 1 : n - r;
			}), T.value.panelDataArrayChanged = !0;
		}
		f(() => T.value.panelDataArrayChanged, () => {
			if (T.value.panelDataArrayChanged) {
				T.value.panelDataArrayChanged = !1;
				let { autoSaveId: e, storage: t } = te.value, { layout: n, panelDataArray: r } = T.value, i = null;
				if (e) {
					let n = At(e, r, t);
					n && (C.value = new Map(Object.entries(n.expandToSizes)), i = n.layout);
				}
				if (i === null) {
					let e = re();
					if (!e) return;
					i = ut({ panelDataArray: e });
				}
				let a = D();
				if (!a) return;
				let o = wt({
					layout: i,
					panelConstraints: a
				});
				b.value = E(), Ve(n, o) || (O(o), T.value.layout = o, l("layout", k(o)), ft(r, o, S.value, E()));
			}
		}), f(y, (e, t) => {
			if (t == null || e == null) return;
			let { layout: n, panelDataArray: r } = T.value;
			if (n.length === 0 || !St(r)) return;
			let i = b.value;
			if (i != null && i > 0 && i < 50 && e > i * 10) {
				T.value.panelDataArrayChanged = !0;
				return;
			}
			let a = Ct({
				layout: n,
				panelDataArray: r,
				prevGroupSize: t,
				nextGroupSize: e
			});
			if (!a) return;
			let o = D(e);
			if (!o) return;
			let s = wt({
				layout: a,
				panelConstraints: o
			});
			ht(n, s) || (O(s), T.value.layout = s, l("layout", k(s)), ft(r, s, S.value, E()));
		});
		function M(e) {
			return function(t) {
				t.preventDefault();
				let n = _.value;
				if (!n) return () => null;
				let { direction: r, dragState: i, id: a, keyboardResizeBy: o } = te.value, { layout: s, panelDataArray: c } = T.value, { initialLayout: u } = i ?? {}, d = G(a, e, n), f = ct(t, e, r, i, o, n);
				if (f === 0) return;
				let p = r === "horizontal";
				h.value === "rtl" && p && (f = -f);
				let m = D();
				if (!m) return;
				let g = gt({
					delta: f,
					layout: u ?? s,
					panelConstraints: m,
					pivotIndices: d,
					trigger: rt(t) ? "keyboard" : "mouse-or-touch"
				}), v = !ht(s, g);
				(it(t) || at(t)) && w.value !== f && (w.value = f, v ? yt(e, 0) : p ? yt(e, f < 0 ? 1 : 2) : yt(e, f < 0 ? 4 : 8)), v && (O(g), T.value.layout = g, l("layout", k(g)), ft(c, g, S.value, E()));
			};
		}
		function N(e, t) {
			let { layout: n, panelDataArray: r } = T.value, i = D();
			if (!i) return;
			let a = de(r, e), o = e.constraints.sizeUnit ?? "%", s = t;
			if (o === "px") {
				let e = E();
				e != null && (s = t / e * 100);
			}
			let { panelSize: c, pivotIndices: u } = L(r, e, n, i);
			H(c != null);
			let d = gt({
				delta: a === r.length - 1 ? c - s : s - c,
				layout: n,
				panelConstraints: i,
				pivotIndices: u,
				trigger: "imperative-api"
			});
			ht(n, d) || (O(d), T.value.layout = d, l("layout", k(d)), ft(r, d, S.value, E()));
		}
		function ae(e, t) {
			let { layout: n, panelDataArray: r } = T.value, i = de(r, e);
			r[i] = e, T.value.panelDataArrayChanged = !0;
			let a = D();
			if (!a) return;
			let o = a[i], { panelSize: s } = L(r, e, n, a);
			if (s === null) return;
			let c = o?.collapsedSize ?? 0, l = o?.maxSize ?? 100, u = o?.minSize ?? 0;
			o?.collapsible && I(e) ? s !== c && N(e, c) : s < u ? N(e, u) : s > l && N(e, l);
		}
		function P(e, t) {
			let { direction: n } = te.value, { layout: r } = T.value;
			if (!_.value) return;
			let i = $e(e, _.value);
			H(i);
			let a = U(n, t);
			v.value = {
				dragHandleId: e,
				dragHandleRect: i.getBoundingClientRect(),
				initialCursorPosition: a,
				initialLayout: r
			};
		}
		function oe() {
			v.value = null;
		}
		function se(e) {
			let { panelDataArray: t } = T.value, n = de(t, e);
			n >= 0 && (t.splice(n, 1), delete S.value[e.id], T.value.panelDataArrayChanged = !0);
		}
		function ce(e) {
			let { layout: t, panelDataArray: n } = T.value;
			if (e.constraints.collapsible) {
				let r = D();
				if (!r) return;
				let { collapsedSize: i = 0, panelSize: a, pivotIndices: o } = L(n, e, t, r);
				if (H(a != null, `Panel size not found for panel "${e.id}"`), a !== i) {
					let s = e.constraints.sizeUnit ?? "%", c = y.value ?? E(), u = s === "px" && c ? a / 100 * c : a;
					C.value.set(e.id, u);
					let d = gt({
						delta: de(n, e) === n.length - 1 ? a - i : i - a,
						layout: t,
						panelConstraints: r,
						pivotIndices: o,
						trigger: "imperative-api"
					});
					ht(t, d) || (O(d), T.value.layout = d, l("layout", k(d)), ft(n, d, S.value, E()));
				}
			}
		}
		function le(e) {
			let { layout: t, panelDataArray: n } = T.value;
			if (e.constraints.collapsible) {
				let r = D();
				if (!r) return;
				let { collapsedSize: i = 0, panelSize: a = 0, minSize: o = 0, pivotIndices: s } = L(n, e, t, r);
				if (dt(a, i) <= 0) {
					let i = C.value.get(e.id), c = e.constraints.sizeUnit ?? "%", u = y.value ?? E(), d = c === "px" && u ? i == null ? null : i / u * 100 : i, f = d != null && d >= o ? d : o, p = gt({
						delta: de(n, e) === n.length - 1 ? a - f : f - a,
						layout: t,
						panelConstraints: r,
						pivotIndices: s,
						trigger: "imperative-api"
					});
					ht(t, p) || (O(p), T.value.layout = p, l("layout", k(p)), ft(n, p, S.value, E()));
				}
			}
		}
		function F(e) {
			let { layout: t, panelDataArray: n } = T.value, { panelSize: r } = L(n, e, t);
			if (H(r != null, `Panel size not found for panel "${e.id}"`), (e.constraints.sizeUnit ?? "%") === "px") {
				let e = E();
				if (e != null) return r / 100 * e;
			}
			return r;
		}
		function I(e) {
			let { layout: t, panelDataArray: n } = T.value, r = D(), { collapsedSize: i = 0, collapsible: a, panelSize: o } = L(n, e, t, r ?? void 0);
			if (!a) return !1;
			if (o === void 0) {
				let t = de(n, e), i = r?.[t] ?? e.constraints;
				return i.defaultSize === i.collapsedSize;
			} else return o === i;
		}
		function ue(e) {
			let { layout: t, panelDataArray: n } = T.value, { collapsedSize: r = 0, collapsible: i, panelSize: a } = L(n, e, t, D() ?? void 0);
			return H(a != null, `Panel size not found for panel "${e.id}"`), !i || a > r;
		}
		Pt({
			direction: d,
			dragState: v.value,
			groupId: p,
			reevaluatePanelConstraints: ae,
			registerPanel: A,
			registerResizeHandle: M,
			resizePanel: N,
			startDragging: P,
			stopDragging: oe,
			unregisterPanel: se,
			panelGroupElement: _,
			collapsePanel: ce,
			expandPanel: le,
			isPanelCollapsed: I,
			isPanelExpanded: ue,
			getPanelSize: F,
			getPanelStyle: ie
		});
		function de(e, t) {
			return e.findIndex((e) => e === t || e.id === t.id);
		}
		function L(e, t, n, r) {
			let i = de(e, t), a = i === e.length - 1 ? [i - 1, i] : [i, i + 1], o = (r ?? D())?.[i], s = n[i];
			return {
				...o ?? t.constraints,
				panelSize: s,
				pivotIndices: a
			};
		}
		return (t, n) => (r(), ne(c(Ze), {
			ref: c(g),
			as: t.as,
			"as-child": t.asChild,
			style: ee({
				display: "flex",
				flexDirection: c(d) === "horizontal" ? "row" : "column",
				height: "100%",
				overflow: "hidden",
				width: "100%"
			}),
			"data-panel-group": "",
			"data-orientation": c(d),
			"data-panel-group-id": c(p)
		}, {
			default: s(() => [e(t.$slots, "default", { layout: x.value })]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"style",
			"data-orientation",
			"data-panel-group-id"
		]));
	}
}), J = /* @__PURE__ */ re({
	__name: "SplitterPanel",
	props: {
		collapsedSize: {
			type: Number,
			required: !1
		},
		collapsible: {
			type: Boolean,
			required: !1
		},
		defaultSize: {
			type: Number,
			required: !1
		},
		id: {
			type: String,
			required: !1
		},
		maxSize: {
			type: Number,
			required: !1
		},
		minSize: {
			type: Number,
			required: !1
		},
		order: {
			type: Number,
			required: !1
		},
		sizeUnit: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: [
		"collapse",
		"expand",
		"resize"
	],
	setup(t, { expose: n, emit: i }) {
		let a = t, o = i, l = Nt();
		if (l === null) throw Error("SplitterPanel components must be rendered within a SplitterGroup container");
		let { collapsePanel: u, expandPanel: d, getPanelSize: p, getPanelStyle: m, isPanelCollapsed: h, resizePanel: g, groupId: _, reevaluatePanelConstraints: y, registerPanel: b, unregisterPanel: x } = l, S = Je(a.id, "reka-splitter-panel"), C = j(() => ({
			callbacks: {
				onCollapse: () => o("collapse"),
				onExpand: () => o("expand"),
				onResize: (...e) => o("resize", ...e)
			},
			constraints: {
				collapsedSize: a.collapsedSize && Number.parseFloat(a.collapsedSize.toFixed(10)),
				collapsible: a.collapsible,
				defaultSize: a.defaultSize,
				maxSize: a.maxSize,
				minSize: a.minSize,
				sizeUnit: a.sizeUnit ?? "%"
			},
			id: S,
			idIsFromProps: a.id !== void 0,
			order: a.order
		}));
		f(() => C.value.constraints, (e, t) => {
			(t.collapsedSize !== e.collapsedSize || t.collapsible !== e.collapsible || t.maxSize !== e.maxSize || t.minSize !== e.minSize || t.sizeUnit !== e.sizeUnit) && y(C.value, t);
		}, { deep: !0 }), ue(() => {
			b(C.value);
		}), v(() => {
			x(C.value);
		});
		let w = j(() => m(C.value, a.defaultSize)), te = j(() => h(C.value)), T = j(() => !te.value);
		function E() {
			u(C.value);
		}
		function D() {
			d(C.value);
		}
		function re(e) {
			g(C.value, e);
		}
		return n({
			collapse: E,
			expand: D,
			getSize() {
				return p(C.value);
			},
			resize: re,
			isCollapsed: te,
			isExpanded: T
		}), (t, n) => (r(), ne(c(Ze), {
			id: c(S),
			style: ee(w.value),
			as: t.as,
			"as-child": t.asChild,
			"data-panel": "",
			"data-panel-collapsible": t.collapsible || void 0,
			"data-panel-group-id": c(_),
			"data-panel-id": c(S),
			"data-panel-size": Number.parseFloat(`${w.value.flexGrow}`).toFixed(1),
			"data-state": t.collapsible ? te.value ? "collapsed" : "expanded" : void 0
		}, {
			default: s(() => [e(t.$slots, "default", {
				isCollapsed: te.value,
				isExpanded: T.value,
				expand: D,
				collapse: E,
				resize: re
			})]),
			_: 3
		}, 8, [
			"id",
			"style",
			"as",
			"as-child",
			"data-panel-collapsible",
			"data-panel-group-id",
			"data-panel-id",
			"data-panel-size",
			"data-state"
		]));
	}
}), It = { class: "h-full w-full overflow-hidden" }, Lt = /* @__PURE__ */ re({
	__name: "app-layout",
	setup(t) {
		let n = Be(ze);
		return j(() => n.greater("2xl").value ? 20 : n.greater("xl").value ? 25 : n.greater("lg").value ? 30 : n.greater("md").value ? 35 : 0), (t, n) => (r(), P("div", It, [O(c(Ft), {
			direction: "horizontal",
			class: "h-full"
		}, {
			default: s(() => [O(c(J), { class: "h-full" }, {
				default: s(() => [e(t.$slots, "main-area")]),
				_: 3
			})]),
			_: 3
		})]));
	}
}), Rt = { class: "card bg-base-200 p-4 flex-1" }, zt = { class: "font-semibold" }, Bt = {
	key: 0,
	class: "text-sm opacity-80 mb-2"
}, Y = /* @__PURE__ */ re({
	__name: "file-input",
	props: {
		label: {},
		loaded: { type: Boolean },
		loadedName: {}
	},
	emits: ["file"],
	setup(e, { emit: t }) {
		let n = t;
		function i(e) {
			let t = e.target, r = t.files?.[0];
			r && n("file", r), t.value = "";
		}
		return (t, n) => (r(), P("div", Rt, [
			F("label", zt, C(e.label), 1),
			e.loaded ? (r(), P("div", Bt, C(e.loadedName ?? "Loaded"), 1)) : D("", !0),
			F("input", {
				type: "file",
				class: "file-input file-input-bordered file-input-sm w-full",
				accept: ".fsd,.asd,.scd,.ssd,.icd,.cid,.iid,.sed,.xml",
				onChange: i
			}, null, 32)
		]));
	}
});
//#endregion
//#region src/services/document-service.ts
function Vt() {
	return be();
}
function Ht(e) {
	return Vt().openDocument(e);
}
async function Ut(e) {
	let t = Vt(), n = `${fe}${e.name}`, r = new File([e], n, { type: e.type }), [i] = await t.import([r]), a = t.openDocument(i.documentId);
	return {
		documentId: i.documentId,
		document: a
	};
}
async function Wt(e) {
	await Vt().removeDocument(e);
}
async function Gt(e) {
	let t = (await Vt().getDocuments()).find((t) => t.id === e);
	return t ? t.extension.replace(/^\./, "") : null;
}
//#endregion
//#region src/dialecte/merge/query/profiles/validate-profile.ts
function Kt(e) {
	let t = [];
	e.sourceFileTypes.size === 0 && t.push(`${e.id}: sourceFileTypes must not be empty`), e.targetFileTypes.size === 0 && t.push(`${e.id}: targetFileTypes must not be empty`);
	let n = Object.keys(e.strategies);
	if (e.scope.kind === "anchored-function") {
		let { anchor: r } = e.scope, i = new Set([...r.functionTags, ...r.typeClosure.typeTags]);
		for (let n of i) n in e.strategies || t.push(`${e.id}: scoped tag "${n}" has no strategy (silent fallback forbidden)`);
		for (let r of n) i.has(r) || t.push(`${e.id}: strategy for "${r}" is dead — the scope never produces it`);
		e.identityMode === "path-only" && t.push(`${e.id}: identityMode "path-only" cannot anchor template lineage — use "template-uuid"`);
	}
	if (e.scope.kind === "whole-document") for (let r of n) e.scope.excludeTags.has(r) && t.push(`${e.id}: strategy for "${r}" is dead — the tag is excluded from scope`);
	return t;
}
//#endregion
//#region src/dialecte/merge/query/profiles/fsd-update-ssd.profile.ts
var qt = {
	id: "fsd-update-ssd",
	sourceFileTypes: new Set(["FSD"]),
	targetFileTypes: new Set(["SSD", "SCD"]),
	identityMode: "template-uuid",
	scope: {
		kind: "anchored-function",
		anchor: {
			fileReference: {
				tag: "SclFileReference",
				fileUuidAttribute: "fileUuid"
			},
			functionTags: new Set([
				"Function",
				"SubFunction",
				"FunctionCategory",
				"SubCategory",
				"LNode"
			]),
			functionBodyTags: new Set([
				"Function",
				"SubFunction",
				"LNode"
			]),
			functionContainerTags: new Set(["Function", "SubFunction"]),
			typeClosure: {
				typeTags: new Set([
					"LNodeType",
					"DOType",
					"DAType",
					"EnumType"
				]),
				seedAttribute: "lnType",
				referenceAttribute: "type"
			}
		}
	},
	strategies: {
		FunctionCategory: "merge",
		SubCategory: "merge",
		Function: "merge",
		SubFunction: "merge",
		LNode: "create-new",
		LNodeType: "import-optimize",
		DOType: "import-optimize",
		DAType: "import-optimize",
		EnumType: "import-optimize"
	},
	fallbackStrategy: "keep-target",
	ui: { defaultGroupBy: "Function" }
}, Jt = {
	id: "fsd-version-compare",
	sourceFileTypes: new Set(["FSD"]),
	targetFileTypes: new Set(["FSD"]),
	identityMode: "same-uuid",
	scope: {
		kind: "whole-document",
		excludeTags: new Set(["History", "Hitem"])
	},
	strategies: {
		Header: "keep-target",
		Substation: "keep-target",
		VoltageLevel: "keep-target",
		Bay: "keep-target",
		FunctionCategory: "merge",
		SubCategory: "merge",
		FunctionCatRef: "merge",
		Function: "merge",
		SubFunction: "merge",
		LNode: "merge",
		LNodeType: "import-optimize",
		DOType: "import-optimize",
		DAType: "import-optimize",
		EnumType: "import-optimize"
	},
	fallbackStrategy: "keep-target",
	ui: { defaultGroupBy: "Function" }
};
//#endregion
//#region src/dialecte/merge/query/profiles/registry.ts
function Yt(e) {
	let t = Object.values(e).flatMap((e) => e ? Kt(e) : []);
	if (t.length > 0) throw Error(`invalid merge profiles:\n${t.join("\n")}`);
	return e;
}
var Xt = Yt({
	"fsd-update-ssd": qt,
	"fsd-version-compare": Jt
});
`${{
	uri: "http://dialecte.dev/XML/DEV",
	prefix: "dev"
}.prefix}`;
function Zt(e) {
	return {
		id: e.id,
		tagName: e.tagName,
		namespace: e.namespace,
		attributes: e.attributes,
		value: e.value,
		parent: e.parent,
		children: e.children
	};
}
//#endregion
//#region node_modules/.pnpm/@dialecte+scl@0.2.8/node_modules/@dialecte/scl/dist/index-BsKA2oVp.js
var Qt = /* @__PURE__ */ "AccessControl.AccessPoint.Address.AllocationRole.AllocationRoleRef.AnalogueWiringParameters.AnalogueWiringParametersRef.Application.ApplicationSclRef.Association.Authentication.BDA.Bay.BayType.BehaviorDescription.BehaviorDescriptionRef.BehaviorReference.BinaryWiringParameters.BinaryWiringParametersRef.BitRate.CheckoutID.ClientLN.ClientServices.CommProt.Communication.CommunicationServiceSpecifications.ConductingEquipment.ConfDataSet.ConfLNs.ConfLdName.ConfLogControl.ConfReportControl.ConfSG.ConfSigRef.ConnectedAP.ConnectivityNode.ControlRef.ControllingLNode.DA.DAI.DAS.DAType.DO.DOI.DOS.DOType.DataObjectDirectory.DataSet.DataSetDirectory.DataTypeTemplates.DynAssociation.DynDataSet.EnumType.EnumVal.EqFunction.EqSubFunction.ExtCtrl.ExtRef.FCDA.FileHandling.Function.FunctionCatRef.FunctionCategory.FunctionCategoryRef.FunctionRef.FunctionRole.FunctionRoleContent.FunctionSclRef.FunctionTemplate.FunctionalSubVariant.FunctionalVariant.FunctionalVariantGroup.FunctionalVariantRef.GOOSE.GOOSEMcSecurity.GOOSESecurity.GSE.GSEControl.GSEDir.GSESettings.GSSE.GeneralEquipment.GetCBValues.GetDataObjectDefinition.GetDataSetValue.GetDirectory.GooseParameters.GooseParametersRef.Header.History.Hitem.IED.IEDName.IEDSourceFiles.InputVar.InputVarRef.Inputs.IssuerName.KDC.L2CommParameters.L3IPv4CommParameters.L3IPv6CommParameters.LDevice.LN.LN0.LNode.LNodeDataRef.LNodeInputRef.LNodeInputs.LNodeOutputRef.LNodeOutputs.LNodeSpecNaming.LNodeType.Label.Labels.Line.Log.LogControl.LogParameters.LogParametersRef.LogSettings.MaxTime.McSecurity.MinRequestedSCDFile.MinRequestedSCDFiles.MinTime.MultiAPPerSubNet.NeutralPoint.OptFields.OutputVar.OutputVarRef.Outputs.P.PhysConn.PowerSystemRelation.PowerSystemRelationRef.PowerSystemRelations.PowerTransformer.Private.Process.ProcessEcho.ProcessResource.ProcessResourceRef.ProcessResources.Project.ProjectProcessReference.ProtNs.Protocol.ReadWrite.RedProt.ReportControl.ReportParameters.ReportParametersRef.ReportSettings.Resource.RptEnabled.SCL.SCSM.SDI.SDO.SDS.SGEdit.SMV.SMVParameters.SMVParametersRef.SMVSecurity.SMVSettings.SMVsc.SVMcSecurity.SampledValueControl.SamplesPerSec.SclFileReference.SecPerSamples.Security.Server.ServerAt.ServiceSpecifications.Services.SetDataSetValue.SettingControl.SettingGroups.SignalRole.SmpRate.SmvOpts.SourceFiles.SourceRef.SubCategory.SubCheckoutID.SubEquipment.SubFunction.SubFunctionTemplate.SubNetwork.Subject.SubscriberLNode.Substation.SupSubscription.TapChanger.Terminal.Text.TimeSyncProt.TimerActivatedControl.TransformerWinding.TrgOps.Val.ValueHandling.Variable.VariableApplyTo.VariableRef.Voltage.VoltageLevel".split("."), $t = {
	AccessControl: [],
	AccessPoint: [
		"Text",
		"Private",
		"Server",
		"LN",
		"ServerAt",
		"Services",
		"GOOSESecurity",
		"SMVSecurity",
		"Labels"
	],
	Address: ["P"],
	AllocationRole: ["Text", "FunctionRef"],
	AllocationRoleRef: ["Text", "FunctionalVariantRef"],
	AnalogueWiringParameters: ["Text"],
	AnalogueWiringParametersRef: ["Text"],
	Application: [
		"Text",
		"FunctionRole",
		"FunctionalVariant",
		"FunctionalVariantGroup",
		"AllocationRoleRef",
		"ApplicationSclRef"
	],
	ApplicationSclRef: ["Text", "SclFileReference"],
	Association: [],
	Authentication: [],
	BDA: [
		"Text",
		"Private",
		"Val",
		"Labels"
	],
	Bay: [
		"Text",
		"Private",
		"Labels",
		"LNode",
		"PowerTransformer",
		"GeneralEquipment",
		"ConductingEquipment",
		"ConnectivityNode",
		"Function",
		"AllocationRole",
		"Application",
		"BehaviorDescription",
		"FunctionCategory",
		"ProcessResources",
		"Variable"
	],
	BayType: [],
	BehaviorDescription: [
		"Text",
		"InputVar",
		"OutputVar",
		"BehaviorReference"
	],
	BehaviorDescriptionRef: [
		"Text",
		"FunctionalVariantRef",
		"InputVarRef",
		"OutputVarRef"
	],
	BehaviorReference: ["Text"],
	BinaryWiringParameters: ["Text"],
	BinaryWiringParametersRef: ["Text"],
	BitRate: [],
	CheckoutID: ["SubCheckoutID"],
	ClientLN: [],
	ClientServices: [
		"TimeSyncProt",
		"GOOSEMcSecurity",
		"SVMcSecurity",
		"Security"
	],
	CommProt: [],
	Communication: [
		"Text",
		"Private",
		"SubNetwork"
	],
	CommunicationServiceSpecifications: [
		"Text",
		"GooseParameters",
		"SMVParameters",
		"ReportParameters"
	],
	ConductingEquipment: [
		"Text",
		"Private",
		"Labels",
		"LNode",
		"Terminal",
		"SubEquipment",
		"EqFunction",
		"ProcessResources",
		"Variable"
	],
	ConfDataSet: [],
	ConfLNs: [],
	ConfLdName: [],
	ConfLogControl: [],
	ConfReportControl: [],
	ConfSG: [],
	ConfSigRef: [],
	ConnectedAP: [
		"Text",
		"Private",
		"Address",
		"GSE",
		"SMV",
		"PhysConn"
	],
	ConnectivityNode: [
		"Text",
		"Private",
		"Labels",
		"LNode",
		"ProcessResources"
	],
	ControlRef: [
		"Text",
		"BinaryWiringParametersRef",
		"AnalogueWiringParametersRef"
	],
	ControllingLNode: [
		"Text",
		"BinaryWiringParametersRef",
		"AnalogueWiringParametersRef"
	],
	DA: [
		"Text",
		"Private",
		"Val",
		"Labels",
		"ProtNs"
	],
	DAI: [
		"Text",
		"Private",
		"Val",
		"Labels"
	],
	DAS: [
		"Text",
		"SubscriberLNode",
		"ControllingLNode",
		"ProcessEcho",
		"LogParametersRef",
		"Val",
		"Labels"
	],
	DAType: [
		"Text",
		"Private",
		"BDA",
		"ProtNs",
		"Labels"
	],
	DO: [
		"Text",
		"Private",
		"Labels"
	],
	DOI: [
		"Text",
		"Private",
		"SDI",
		"DAI",
		"Labels"
	],
	DOS: [
		"Text",
		"SDS",
		"DAS",
		"SubscriberLNode",
		"ControllingLNode",
		"ProcessEcho",
		"LogParametersRef",
		"Labels"
	],
	DOType: [
		"Text",
		"Private",
		"SDO",
		"DA",
		"Labels"
	],
	DataObjectDirectory: [],
	DataSet: [
		"Text",
		"Private",
		"FCDA"
	],
	DataSetDirectory: [],
	DataTypeTemplates: [
		"LNodeType",
		"DOType",
		"DAType",
		"EnumType"
	],
	DynAssociation: [],
	DynDataSet: [],
	EnumType: [
		"Text",
		"Private",
		"EnumVal"
	],
	EnumVal: [],
	EqFunction: [
		"Text",
		"Private",
		"Labels",
		"LNode",
		"GeneralEquipment",
		"EqSubFunction",
		"BehaviorDescription",
		"FunctionSclRef",
		"PowerSystemRelations",
		"ProcessResources",
		"Variable"
	],
	EqSubFunction: [
		"Text",
		"Private",
		"Labels",
		"LNode",
		"GeneralEquipment",
		"EqSubFunction",
		"BehaviorDescription",
		"FunctionSclRef",
		"PowerSystemRelations",
		"ProcessResources",
		"Variable"
	],
	ExtCtrl: ["Text", "Private"],
	ExtRef: ["Text", "Private"],
	FCDA: [],
	FileHandling: [],
	Function: [
		"Text",
		"Private",
		"Labels",
		"LNode",
		"SubFunction",
		"GeneralEquipment",
		"ConductingEquipment",
		"BehaviorDescription",
		"FunctionSclRef",
		"PowerSystemRelations",
		"ProcessResources",
		"Variable"
	],
	FunctionCatRef: ["Text"],
	FunctionCategory: [
		"Text",
		"SubCategory",
		"FunctionCatRef"
	],
	FunctionCategoryRef: ["Text", "FunctionalVariantRef"],
	FunctionRef: [
		"Text",
		"FunctionalVariantRef",
		"SignalRole"
	],
	FunctionRole: [
		"Text",
		"FunctionalVariantRef",
		"FunctionRoleContent"
	],
	FunctionRoleContent: [
		"Text",
		"FunctionRef",
		"BehaviorDescriptionRef",
		"ProcessResourceRef",
		"VariableRef",
		"FunctionCategoryRef",
		"PowerSystemRelationRef"
	],
	FunctionSclRef: ["Text", "SclFileReference"],
	FunctionTemplate: [
		"Text",
		"LNode",
		"SubFunctionTemplate",
		"GeneralEquipment",
		"ConductingEquipment"
	],
	FunctionalSubVariant: [
		"Text",
		"FunctionalSubVariant",
		"VariableRef"
	],
	FunctionalVariant: [
		"Text",
		"FunctionalSubVariant",
		"VariableRef"
	],
	FunctionalVariantGroup: ["Text", "FunctionalVariant"],
	FunctionalVariantRef: ["Text"],
	GOOSE: [],
	GOOSEMcSecurity: [],
	GOOSESecurity: [
		"Text",
		"Private",
		"Labels",
		"Subject",
		"IssuerName"
	],
	GSE: [
		"Text",
		"Private",
		"Address",
		"MinTime",
		"MaxTime"
	],
	GSEControl: [
		"Text",
		"Private",
		"IEDName",
		"Protocol"
	],
	GSEDir: [],
	GSESettings: ["McSecurity"],
	GSSE: [],
	GeneralEquipment: [
		"Text",
		"Private",
		"Labels",
		"LNode",
		"EqFunction",
		"ProcessResources",
		"Variable"
	],
	GetCBValues: [],
	GetDataObjectDefinition: [],
	GetDataSetValue: [],
	GetDirectory: [],
	GooseParameters: [
		"Text",
		"L2CommParameters",
		"L3IPv4CommParameters",
		"L3IPv6CommParameters"
	],
	GooseParametersRef: ["Text"],
	Header: [
		"Text",
		"History",
		"SourceFiles"
	],
	History: ["Hitem"],
	Hitem: ["SourceFiles"],
	IED: [
		"Text",
		"Private",
		"Services",
		"AccessPoint",
		"KDC",
		"IEDSourceFiles",
		"MinRequestedSCDFiles",
		"Labels",
		"CheckoutID"
	],
	IEDName: [],
	IEDSourceFiles: [
		"Text",
		"Private",
		"SclFileReference"
	],
	InputVar: ["Text"],
	InputVarRef: ["Text", "FunctionalVariantRef"],
	Inputs: [
		"Text",
		"Private",
		"ExtRef"
	],
	IssuerName: [],
	KDC: [],
	L2CommParameters: ["Text"],
	L3IPv4CommParameters: ["Text"],
	L3IPv6CommParameters: ["Text"],
	LDevice: [
		"Text",
		"Private",
		"LN0",
		"LN",
		"AccessControl",
		"Labels"
	],
	LN: [
		"Text",
		"Private",
		"DataSet",
		"ReportControl",
		"LogControl",
		"DOI",
		"Inputs",
		"Outputs",
		"Log",
		"Labels"
	],
	LN0: [
		"Text",
		"Private",
		"DataSet",
		"ReportControl",
		"LogControl",
		"DOI",
		"Inputs",
		"Outputs",
		"Log",
		"Labels",
		"GSEControl",
		"SampledValueControl",
		"SettingControl"
	],
	LNode: [
		"Text",
		"Private",
		"Labels",
		"BehaviorDescription",
		"DOS",
		"LNodeInputs",
		"LNodeOutputs",
		"LNodeSpecNaming"
	],
	LNodeDataRef: ["Text", "FunctionalVariantRef"],
	LNodeInputRef: ["Text", "FunctionalVariantRef"],
	LNodeInputs: ["Text", "SourceRef"],
	LNodeOutputRef: ["Text", "FunctionalVariantRef"],
	LNodeOutputs: ["Text", "ControlRef"],
	LNodeSpecNaming: ["Text"],
	LNodeType: [
		"Text",
		"Private",
		"DO",
		"Labels"
	],
	Label: [],
	Labels: [
		"Text",
		"Private",
		"Label"
	],
	Line: [
		"Text",
		"Private",
		"Labels",
		"LNode",
		"GeneralEquipment",
		"Function",
		"Voltage",
		"ConductingEquipment",
		"ConnectivityNode",
		"AllocationRole",
		"Application",
		"BehaviorDescription",
		"FunctionCategory",
		"ProcessResources",
		"Variable"
	],
	Log: ["Text", "Private"],
	LogControl: [
		"Text",
		"Private",
		"TrgOps"
	],
	LogParameters: ["Text"],
	LogParametersRef: ["Text"],
	LogSettings: [],
	MaxTime: [],
	McSecurity: [],
	MinRequestedSCDFile: [],
	MinRequestedSCDFiles: [
		"Text",
		"Private",
		"MinRequestedSCDFile"
	],
	MinTime: [],
	MultiAPPerSubNet: [],
	NeutralPoint: ["Text", "Private"],
	OptFields: [],
	OutputVar: ["Text"],
	OutputVarRef: ["Text", "FunctionalVariantRef"],
	Outputs: [
		"Text",
		"Private",
		"ExtCtrl"
	],
	P: [],
	PhysConn: [
		"Text",
		"Private",
		"P"
	],
	PowerSystemRelation: ["Text"],
	PowerSystemRelationRef: ["Text", "FunctionalVariantRef"],
	PowerSystemRelations: ["Text", "PowerSystemRelation"],
	PowerTransformer: [
		"Text",
		"Private",
		"Labels",
		"LNode",
		"TransformerWinding",
		"SubEquipment",
		"EqFunction"
	],
	Private: [],
	Process: [
		"Text",
		"Private",
		"Labels",
		"LNode",
		"GeneralEquipment",
		"Function",
		"ConductingEquipment",
		"Substation",
		"Line",
		"Process",
		"AllocationRole",
		"Application",
		"BehaviorDescription",
		"FunctionCategory",
		"ProcessResources",
		"Variable"
	],
	ProcessEcho: ["Text"],
	ProcessResource: ["Text", "Resource"],
	ProcessResourceRef: ["Text", "FunctionalVariantRef"],
	ProcessResources: ["Text", "ProcessResource"],
	Project: ["Text", "ProjectProcessReference"],
	ProjectProcessReference: ["Text"],
	ProtNs: [],
	Protocol: [],
	ReadWrite: [],
	RedProt: [],
	ReportControl: [
		"Text",
		"Private",
		"TrgOps",
		"OptFields",
		"RptEnabled"
	],
	ReportParameters: ["Text"],
	ReportParametersRef: ["Text"],
	ReportSettings: [],
	Resource: [],
	RptEnabled: [
		"Text",
		"Private",
		"ClientLN"
	],
	SCL: [
		"Text",
		"Private",
		"Header",
		"Substation",
		"Communication",
		"IED",
		"DataTypeTemplates",
		"Line",
		"Process",
		"BayType",
		"FunctionTemplate",
		"Project",
		"ServiceSpecifications"
	],
	SCSM: [],
	SDI: [
		"Text",
		"Private",
		"SDI",
		"DAI",
		"Labels"
	],
	SDO: [
		"Text",
		"Private",
		"Labels"
	],
	SDS: [
		"Text",
		"SDS",
		"DAS",
		"SubscriberLNode",
		"ControllingLNode",
		"ProcessEcho",
		"LogParametersRef",
		"Labels"
	],
	SGEdit: [],
	SMV: [
		"Text",
		"Private",
		"Address"
	],
	SMVParameters: [
		"Text",
		"L2CommParameters",
		"L3IPv4CommParameters",
		"L3IPv6CommParameters"
	],
	SMVParametersRef: ["Text"],
	SMVSecurity: [
		"Text",
		"Private",
		"Labels",
		"Subject",
		"IssuerName"
	],
	SMVSettings: [
		"SmpRate",
		"SamplesPerSec",
		"SecPerSamples",
		"McSecurity"
	],
	SMVsc: [],
	SVMcSecurity: [],
	SampledValueControl: [
		"Text",
		"Private",
		"IEDName",
		"SmvOpts",
		"Protocol"
	],
	SamplesPerSec: [],
	SclFileReference: ["Text", "Private"],
	SecPerSamples: [],
	Security: [],
	Server: [
		"Text",
		"Private",
		"Authentication",
		"LDevice",
		"Association"
	],
	ServerAt: ["Text", "Private"],
	ServiceSpecifications: [
		"Text",
		"GooseParameters",
		"SMVParameters",
		"ReportParameters",
		"BinaryWiringParameters",
		"AnalogueWiringParameters",
		"LogParameters"
	],
	Services: /* @__PURE__ */ "DynAssociation.SettingGroups.GetDirectory.GetDataObjectDefinition.DataObjectDirectory.GetDataSetValue.SetDataSetValue.DataSetDirectory.ConfDataSet.DynDataSet.ReadWrite.TimerActivatedControl.ConfReportControl.GetCBValues.ConfLogControl.ReportSettings.LogSettings.GSESettings.SMVSettings.GSEDir.GOOSE.GSSE.SMVsc.FileHandling.ConfLNs.ClientServices.ConfLdName.SupSubscription.ConfSigRef.ValueHandling.RedProt.TimeSyncProt.CommProt.SCSM.Security.MultiAPPerSubNet".split("."),
	SetDataSetValue: [],
	SettingControl: ["Text", "Private"],
	SettingGroups: ["SGEdit", "ConfSG"],
	SignalRole: [
		"Text",
		"FunctionalVariantRef",
		"LNodeInputRef",
		"LNodeOutputRef",
		"LNodeDataRef"
	],
	SmpRate: [],
	SmvOpts: [],
	SourceFiles: [
		"Text",
		"Private",
		"SclFileReference"
	],
	SourceRef: [
		"Text",
		"GooseParametersRef",
		"SMVParametersRef",
		"ReportParametersRef",
		"BinaryWiringParametersRef",
		"AnalogueWiringParametersRef"
	],
	SubCategory: [
		"Text",
		"SubCategory",
		"FunctionCatRef"
	],
	SubCheckoutID: ["SubCheckoutID"],
	SubEquipment: [
		"Text",
		"Private",
		"Labels",
		"LNode",
		"EqFunction"
	],
	SubFunction: [
		"Text",
		"Private",
		"Labels",
		"LNode",
		"GeneralEquipment",
		"ConductingEquipment",
		"SubFunction",
		"BehaviorDescription",
		"FunctionSclRef",
		"PowerSystemRelations",
		"ProcessResources",
		"Variable"
	],
	SubFunctionTemplate: [
		"Text",
		"LNode",
		"GeneralEquipment",
		"ConductingEquipment",
		"SubFunctionTemplate"
	],
	SubNetwork: [
		"Text",
		"Private",
		"Labels",
		"BitRate",
		"ConnectedAP",
		"CommunicationServiceSpecifications"
	],
	Subject: [],
	SubscriberLNode: [
		"Text",
		"GooseParametersRef",
		"SMVParametersRef",
		"ReportParametersRef",
		"BinaryWiringParametersRef"
	],
	Substation: [
		"Text",
		"Private",
		"Labels",
		"LNode",
		"PowerTransformer",
		"GeneralEquipment",
		"VoltageLevel",
		"Function",
		"AllocationRole",
		"Application",
		"BehaviorDescription",
		"FunctionCategory",
		"ProcessResources",
		"Variable"
	],
	SupSubscription: [],
	TapChanger: [
		"Text",
		"Private",
		"Labels",
		"LNode",
		"SubEquipment",
		"EqFunction"
	],
	Terminal: ["Text", "Private"],
	Text: [],
	TimeSyncProt: [],
	TimerActivatedControl: [],
	TransformerWinding: [
		"Text",
		"Private",
		"Labels",
		"LNode",
		"Terminal",
		"SubEquipment",
		"TapChanger",
		"NeutralPoint",
		"EqFunction"
	],
	TrgOps: [],
	Val: [],
	ValueHandling: [],
	Variable: ["Text", "VariableApplyTo"],
	VariableApplyTo: ["Text"],
	VariableRef: ["Text", "FunctionalVariantRef"],
	Voltage: [],
	VoltageLevel: [
		"Text",
		"Private",
		"Labels",
		"LNode",
		"PowerTransformer",
		"GeneralEquipment",
		"Voltage",
		"Bay",
		"Function",
		"AllocationRole",
		"Application",
		"BehaviorDescription",
		"FunctionCategory",
		"ProcessResources",
		"Variable"
	]
}, en = {
	AccessControl: ["LDevice"],
	AccessPoint: ["IED"],
	Address: [
		"ConnectedAP",
		"GSE",
		"SMV"
	],
	AllocationRole: [
		"Bay",
		"Line",
		"Process",
		"Substation",
		"VoltageLevel"
	],
	AllocationRoleRef: ["Application"],
	AnalogueWiringParameters: ["ServiceSpecifications"],
	AnalogueWiringParametersRef: [
		"ControlRef",
		"ControllingLNode",
		"SourceRef"
	],
	Application: [
		"Bay",
		"Line",
		"Process",
		"Substation",
		"VoltageLevel"
	],
	ApplicationSclRef: ["Application"],
	Association: ["Server"],
	Authentication: ["Server"],
	BDA: ["DAType"],
	Bay: ["VoltageLevel"],
	BayType: ["SCL"],
	BehaviorDescription: [
		"Bay",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"LNode",
		"Line",
		"Process",
		"SubFunction",
		"Substation",
		"VoltageLevel"
	],
	BehaviorDescriptionRef: ["FunctionRoleContent"],
	BehaviorReference: ["BehaviorDescription"],
	BinaryWiringParameters: ["ServiceSpecifications"],
	BinaryWiringParametersRef: [
		"ControlRef",
		"ControllingLNode",
		"SourceRef",
		"SubscriberLNode"
	],
	BitRate: ["SubNetwork"],
	CheckoutID: ["IED"],
	ClientLN: ["RptEnabled"],
	ClientServices: ["Services"],
	CommProt: ["Services"],
	Communication: ["SCL"],
	CommunicationServiceSpecifications: ["SubNetwork"],
	ConductingEquipment: [
		"Bay",
		"Function",
		"FunctionTemplate",
		"Line",
		"Process",
		"SubFunction",
		"SubFunctionTemplate"
	],
	ConfDataSet: ["Services"],
	ConfLNs: ["Services"],
	ConfLdName: ["Services"],
	ConfLogControl: ["Services"],
	ConfReportControl: ["Services"],
	ConfSG: ["SettingGroups"],
	ConfSigRef: ["Services"],
	ConnectedAP: ["SubNetwork"],
	ConnectivityNode: ["Bay", "Line"],
	ControlRef: ["LNodeOutputs"],
	ControllingLNode: [
		"DAS",
		"DOS",
		"SDS"
	],
	DA: ["DOType"],
	DAI: ["DOI", "SDI"],
	DAS: ["DOS", "SDS"],
	DAType: ["DataTypeTemplates"],
	DO: ["LNodeType"],
	DOI: ["LN", "LN0"],
	DOS: ["LNode"],
	DOType: ["DataTypeTemplates"],
	DataObjectDirectory: ["Services"],
	DataSet: ["LN", "LN0"],
	DataSetDirectory: ["Services"],
	DataTypeTemplates: ["SCL"],
	DynAssociation: ["Services"],
	DynDataSet: ["Services"],
	EnumType: ["DataTypeTemplates"],
	EnumVal: ["EnumType"],
	EqFunction: [
		"ConductingEquipment",
		"GeneralEquipment",
		"PowerTransformer",
		"SubEquipment",
		"TapChanger",
		"TransformerWinding"
	],
	EqSubFunction: ["EqFunction", "EqSubFunction"],
	ExtCtrl: ["Outputs"],
	ExtRef: ["Inputs"],
	FCDA: ["DataSet"],
	FileHandling: ["Services"],
	Function: [
		"Bay",
		"Line",
		"Process",
		"Substation",
		"VoltageLevel"
	],
	FunctionCatRef: ["FunctionCategory", "SubCategory"],
	FunctionCategory: [
		"Bay",
		"Line",
		"Process",
		"Substation",
		"VoltageLevel"
	],
	FunctionCategoryRef: ["FunctionRoleContent"],
	FunctionRef: ["AllocationRole", "FunctionRoleContent"],
	FunctionRole: ["Application"],
	FunctionRoleContent: ["FunctionRole"],
	FunctionSclRef: [
		"EqFunction",
		"EqSubFunction",
		"Function",
		"SubFunction"
	],
	FunctionTemplate: ["SCL"],
	FunctionalSubVariant: ["FunctionalSubVariant", "FunctionalVariant"],
	FunctionalVariant: ["Application", "FunctionalVariantGroup"],
	FunctionalVariantGroup: ["Application"],
	FunctionalVariantRef: [
		"AllocationRoleRef",
		"BehaviorDescriptionRef",
		"FunctionCategoryRef",
		"FunctionRef",
		"FunctionRole",
		"InputVarRef",
		"LNodeDataRef",
		"LNodeInputRef",
		"LNodeOutputRef",
		"OutputVarRef",
		"PowerSystemRelationRef",
		"ProcessResourceRef",
		"SignalRole",
		"VariableRef"
	],
	GOOSE: ["Services"],
	GOOSEMcSecurity: ["ClientServices"],
	GOOSESecurity: ["AccessPoint"],
	GSE: ["ConnectedAP"],
	GSEControl: ["LN0"],
	GSEDir: ["Services"],
	GSESettings: ["Services"],
	GSSE: ["Services"],
	GeneralEquipment: [
		"Bay",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"Line",
		"Process",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"VoltageLevel"
	],
	GetCBValues: ["Services"],
	GetDataObjectDefinition: ["Services"],
	GetDataSetValue: ["Services"],
	GetDirectory: ["Services"],
	GooseParameters: ["CommunicationServiceSpecifications", "ServiceSpecifications"],
	GooseParametersRef: ["SourceRef", "SubscriberLNode"],
	Header: ["SCL"],
	History: ["Header"],
	Hitem: ["History"],
	IED: ["SCL"],
	IEDName: ["GSEControl", "SampledValueControl"],
	IEDSourceFiles: ["IED"],
	InputVar: ["BehaviorDescription"],
	InputVarRef: ["BehaviorDescriptionRef"],
	Inputs: ["LN", "LN0"],
	IssuerName: ["GOOSESecurity", "SMVSecurity"],
	KDC: ["IED"],
	L2CommParameters: ["GooseParameters", "SMVParameters"],
	L3IPv4CommParameters: ["GooseParameters", "SMVParameters"],
	L3IPv6CommParameters: ["GooseParameters", "SMVParameters"],
	LDevice: ["Server"],
	LN: ["AccessPoint", "LDevice"],
	LN0: ["LDevice"],
	LNode: [
		"Bay",
		"ConductingEquipment",
		"ConnectivityNode",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"Line",
		"PowerTransformer",
		"Process",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	LNodeDataRef: ["SignalRole"],
	LNodeInputRef: ["SignalRole"],
	LNodeInputs: ["LNode"],
	LNodeOutputRef: ["SignalRole"],
	LNodeOutputs: ["LNode"],
	LNodeSpecNaming: ["LNode"],
	LNodeType: ["DataTypeTemplates"],
	Label: ["Labels"],
	Labels: /* @__PURE__ */ "AccessPoint.BDA.Bay.ConductingEquipment.ConnectivityNode.DA.DAI.DAS.DAType.DO.DOI.DOS.DOType.EqFunction.EqSubFunction.Function.GOOSESecurity.GeneralEquipment.IED.LDevice.LN.LN0.LNode.LNodeType.Line.PowerTransformer.Process.SDI.SDO.SDS.SMVSecurity.SubEquipment.SubFunction.SubNetwork.Substation.TapChanger.TransformerWinding.VoltageLevel".split("."),
	Line: ["Process", "SCL"],
	Log: ["LN", "LN0"],
	LogControl: ["LN", "LN0"],
	LogParameters: ["ServiceSpecifications"],
	LogParametersRef: [
		"DAS",
		"DOS",
		"SDS"
	],
	LogSettings: ["Services"],
	MaxTime: ["GSE"],
	McSecurity: ["GSESettings", "SMVSettings"],
	MinRequestedSCDFile: ["MinRequestedSCDFiles"],
	MinRequestedSCDFiles: ["IED"],
	MinTime: ["GSE"],
	MultiAPPerSubNet: ["Services"],
	NeutralPoint: ["TransformerWinding"],
	OptFields: ["ReportControl"],
	OutputVar: ["BehaviorDescription"],
	OutputVarRef: ["BehaviorDescriptionRef"],
	Outputs: ["LN", "LN0"],
	P: ["Address", "PhysConn"],
	PhysConn: ["ConnectedAP"],
	PowerSystemRelation: ["PowerSystemRelations"],
	PowerSystemRelationRef: ["FunctionRoleContent"],
	PowerSystemRelations: [
		"EqFunction",
		"EqSubFunction",
		"Function",
		"SubFunction"
	],
	PowerTransformer: [
		"Bay",
		"Substation",
		"VoltageLevel"
	],
	Private: /* @__PURE__ */ "AccessPoint.BDA.Bay.Communication.ConductingEquipment.ConnectedAP.ConnectivityNode.DA.DAI.DAType.DO.DOI.DOType.DataSet.EnumType.EqFunction.EqSubFunction.ExtCtrl.ExtRef.Function.GOOSESecurity.GSE.GSEControl.GeneralEquipment.IED.IEDSourceFiles.Inputs.LDevice.LN.LN0.LNode.LNodeType.Labels.Line.Log.LogControl.MinRequestedSCDFiles.NeutralPoint.Outputs.PhysConn.PowerTransformer.Process.ReportControl.RptEnabled.SCL.SDI.SDO.SMV.SMVSecurity.SampledValueControl.SclFileReference.Server.ServerAt.SettingControl.SourceFiles.SubEquipment.SubFunction.SubNetwork.Substation.TapChanger.Terminal.TransformerWinding.VoltageLevel".split("."),
	Process: ["Process", "SCL"],
	ProcessEcho: [
		"DAS",
		"DOS",
		"SDS"
	],
	ProcessResource: ["ProcessResources"],
	ProcessResourceRef: ["FunctionRoleContent"],
	ProcessResources: [
		"Bay",
		"ConductingEquipment",
		"ConnectivityNode",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"GeneralEquipment",
		"Line",
		"Process",
		"SubFunction",
		"Substation",
		"VoltageLevel"
	],
	Project: ["SCL"],
	ProjectProcessReference: ["Project"],
	ProtNs: ["DA", "DAType"],
	Protocol: ["GSEControl", "SampledValueControl"],
	ReadWrite: ["Services"],
	RedProt: ["Services"],
	ReportControl: ["LN", "LN0"],
	ReportParameters: ["CommunicationServiceSpecifications", "ServiceSpecifications"],
	ReportParametersRef: ["SourceRef", "SubscriberLNode"],
	ReportSettings: ["Services"],
	Resource: ["ProcessResource"],
	RptEnabled: ["ReportControl"],
	SCL: [],
	SCSM: ["Services"],
	SDI: ["DOI", "SDI"],
	SDO: ["DOType"],
	SDS: ["DOS", "SDS"],
	SGEdit: ["SettingGroups"],
	SMV: ["ConnectedAP"],
	SMVParameters: ["CommunicationServiceSpecifications", "ServiceSpecifications"],
	SMVParametersRef: ["SourceRef", "SubscriberLNode"],
	SMVSecurity: ["AccessPoint"],
	SMVSettings: ["Services"],
	SMVsc: ["Services"],
	SVMcSecurity: ["ClientServices"],
	SampledValueControl: ["LN0"],
	SamplesPerSec: ["SMVSettings"],
	SclFileReference: [
		"ApplicationSclRef",
		"FunctionSclRef",
		"IEDSourceFiles",
		"SourceFiles"
	],
	SecPerSamples: ["SMVSettings"],
	Security: ["ClientServices", "Services"],
	Server: ["AccessPoint"],
	ServerAt: ["AccessPoint"],
	ServiceSpecifications: ["SCL"],
	Services: ["AccessPoint", "IED"],
	SetDataSetValue: ["Services"],
	SettingControl: ["LN0"],
	SettingGroups: ["Services"],
	SignalRole: ["FunctionRef"],
	SmpRate: ["SMVSettings"],
	SmvOpts: ["SampledValueControl"],
	SourceFiles: ["Header", "Hitem"],
	SourceRef: ["LNodeInputs"],
	SubCategory: ["FunctionCategory", "SubCategory"],
	SubCheckoutID: ["CheckoutID", "SubCheckoutID"],
	SubEquipment: [
		"ConductingEquipment",
		"PowerTransformer",
		"TapChanger",
		"TransformerWinding"
	],
	SubFunction: ["Function", "SubFunction"],
	SubFunctionTemplate: ["FunctionTemplate", "SubFunctionTemplate"],
	SubNetwork: ["Communication"],
	Subject: ["GOOSESecurity", "SMVSecurity"],
	SubscriberLNode: [
		"DAS",
		"DOS",
		"SDS"
	],
	Substation: ["Process", "SCL"],
	SupSubscription: ["Services"],
	TapChanger: ["TransformerWinding"],
	Terminal: ["ConductingEquipment", "TransformerWinding"],
	Text: /* @__PURE__ */ "AccessPoint.AllocationRole.AllocationRoleRef.AnalogueWiringParameters.AnalogueWiringParametersRef.Application.ApplicationSclRef.BDA.Bay.BehaviorDescription.BehaviorDescriptionRef.BehaviorReference.BinaryWiringParameters.BinaryWiringParametersRef.Communication.CommunicationServiceSpecifications.ConductingEquipment.ConnectedAP.ConnectivityNode.ControlRef.ControllingLNode.DA.DAI.DAS.DAType.DO.DOI.DOS.DOType.DataSet.EnumType.EqFunction.EqSubFunction.ExtCtrl.ExtRef.Function.FunctionCatRef.FunctionCategory.FunctionCategoryRef.FunctionRef.FunctionRole.FunctionRoleContent.FunctionSclRef.FunctionTemplate.FunctionalSubVariant.FunctionalVariant.FunctionalVariantGroup.FunctionalVariantRef.GOOSESecurity.GSE.GSEControl.GeneralEquipment.GooseParameters.GooseParametersRef.Header.IED.IEDSourceFiles.InputVar.InputVarRef.Inputs.L2CommParameters.L3IPv4CommParameters.L3IPv6CommParameters.LDevice.LN.LN0.LNode.LNodeDataRef.LNodeInputRef.LNodeInputs.LNodeOutputRef.LNodeOutputs.LNodeSpecNaming.LNodeType.Labels.Line.Log.LogControl.LogParameters.LogParametersRef.MinRequestedSCDFiles.NeutralPoint.OutputVar.OutputVarRef.Outputs.PhysConn.PowerSystemRelation.PowerSystemRelationRef.PowerSystemRelations.PowerTransformer.Process.ProcessEcho.ProcessResource.ProcessResourceRef.ProcessResources.Project.ProjectProcessReference.ReportControl.ReportParameters.ReportParametersRef.RptEnabled.SCL.SDI.SDO.SDS.SMV.SMVParameters.SMVParametersRef.SMVSecurity.SampledValueControl.SclFileReference.Server.ServerAt.ServiceSpecifications.SettingControl.SignalRole.SourceFiles.SourceRef.SubCategory.SubEquipment.SubFunction.SubFunctionTemplate.SubNetwork.SubscriberLNode.Substation.TapChanger.Terminal.TransformerWinding.Variable.VariableApplyTo.VariableRef.VoltageLevel".split("."),
	TimeSyncProt: ["ClientServices", "Services"],
	TimerActivatedControl: ["Services"],
	TransformerWinding: ["PowerTransformer"],
	TrgOps: ["LogControl", "ReportControl"],
	Val: [
		"BDA",
		"DA",
		"DAI",
		"DAS"
	],
	ValueHandling: ["Services"],
	Variable: [
		"Bay",
		"ConductingEquipment",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"GeneralEquipment",
		"Line",
		"Process",
		"SubFunction",
		"Substation",
		"VoltageLevel"
	],
	VariableApplyTo: ["Variable"],
	VariableRef: [
		"FunctionRoleContent",
		"FunctionalSubVariant",
		"FunctionalVariant"
	],
	Voltage: ["Line", "VoltageLevel"],
	VoltageLevel: ["Substation"]
}, tn = {
	AccessControl: [],
	AccessPoint: /* @__PURE__ */ "AccessControl.Association.Authentication.ClientLN.ClientServices.CommProt.ConfDataSet.ConfLNs.ConfLdName.ConfLogControl.ConfReportControl.ConfSG.ConfSigRef.DAI.DOI.DataObjectDirectory.DataSet.DataSetDirectory.DynAssociation.DynDataSet.ExtCtrl.ExtRef.FCDA.FileHandling.GOOSE.GOOSEMcSecurity.GOOSESecurity.GSEControl.GSEDir.GSESettings.GSSE.GetCBValues.GetDataObjectDefinition.GetDataSetValue.GetDirectory.IEDName.Inputs.IssuerName.LDevice.LN.LN0.Label.Labels.Log.LogControl.LogSettings.McSecurity.MultiAPPerSubNet.OptFields.Outputs.Private.Protocol.ReadWrite.RedProt.ReportControl.ReportSettings.RptEnabled.SCSM.SDI.SGEdit.SMVSecurity.SMVSettings.SMVsc.SVMcSecurity.SampledValueControl.SamplesPerSec.SecPerSamples.Security.Server.ServerAt.Services.SetDataSetValue.SettingControl.SettingGroups.SmpRate.SmvOpts.Subject.SupSubscription.Text.TimeSyncProt.TimerActivatedControl.TrgOps.Val.ValueHandling".split("."),
	Address: ["P"],
	AllocationRole: [
		"FunctionRef",
		"FunctionalVariantRef",
		"LNodeDataRef",
		"LNodeInputRef",
		"LNodeOutputRef",
		"SignalRole",
		"Text"
	],
	AllocationRoleRef: ["FunctionalVariantRef", "Text"],
	AnalogueWiringParameters: ["Text"],
	AnalogueWiringParametersRef: ["Text"],
	Application: [
		"AllocationRoleRef",
		"ApplicationSclRef",
		"BehaviorDescriptionRef",
		"FunctionCategoryRef",
		"FunctionRef",
		"FunctionRole",
		"FunctionRoleContent",
		"FunctionalSubVariant",
		"FunctionalVariant",
		"FunctionalVariantGroup",
		"FunctionalVariantRef",
		"InputVarRef",
		"LNodeDataRef",
		"LNodeInputRef",
		"LNodeOutputRef",
		"OutputVarRef",
		"PowerSystemRelationRef",
		"Private",
		"ProcessResourceRef",
		"SclFileReference",
		"SignalRole",
		"Text",
		"VariableRef"
	],
	ApplicationSclRef: [
		"Private",
		"SclFileReference",
		"Text"
	],
	Association: [],
	Authentication: [],
	BDA: [
		"Label",
		"Labels",
		"Private",
		"Text",
		"Val"
	],
	Bay: /* @__PURE__ */ "AllocationRole.AllocationRoleRef.AnalogueWiringParametersRef.Application.ApplicationSclRef.BehaviorDescription.BehaviorDescriptionRef.BehaviorReference.BinaryWiringParametersRef.ConductingEquipment.ConnectivityNode.ControlRef.ControllingLNode.DAS.DOS.EqFunction.EqSubFunction.Function.FunctionCatRef.FunctionCategory.FunctionCategoryRef.FunctionRef.FunctionRole.FunctionRoleContent.FunctionSclRef.FunctionalSubVariant.FunctionalVariant.FunctionalVariantGroup.FunctionalVariantRef.GeneralEquipment.GooseParametersRef.InputVar.InputVarRef.LNode.LNodeDataRef.LNodeInputRef.LNodeInputs.LNodeOutputRef.LNodeOutputs.LNodeSpecNaming.Label.Labels.LogParametersRef.NeutralPoint.OutputVar.OutputVarRef.PowerSystemRelation.PowerSystemRelationRef.PowerSystemRelations.PowerTransformer.Private.ProcessEcho.ProcessResource.ProcessResourceRef.ProcessResources.ReportParametersRef.Resource.SDS.SMVParametersRef.SclFileReference.SignalRole.SourceRef.SubCategory.SubEquipment.SubFunction.SubscriberLNode.TapChanger.Terminal.Text.TransformerWinding.Val.Variable.VariableApplyTo.VariableRef".split("."),
	BayType: [],
	BehaviorDescription: [
		"BehaviorReference",
		"InputVar",
		"OutputVar",
		"Text"
	],
	BehaviorDescriptionRef: [
		"FunctionalVariantRef",
		"InputVarRef",
		"OutputVarRef",
		"Text"
	],
	BehaviorReference: ["Text"],
	BinaryWiringParameters: ["Text"],
	BinaryWiringParametersRef: ["Text"],
	BitRate: [],
	CheckoutID: ["SubCheckoutID"],
	ClientLN: [],
	ClientServices: [
		"GOOSEMcSecurity",
		"SVMcSecurity",
		"Security",
		"TimeSyncProt"
	],
	CommProt: [],
	Communication: [
		"Address",
		"BitRate",
		"CommunicationServiceSpecifications",
		"ConnectedAP",
		"GSE",
		"GooseParameters",
		"L2CommParameters",
		"L3IPv4CommParameters",
		"L3IPv6CommParameters",
		"Label",
		"Labels",
		"MaxTime",
		"MinTime",
		"P",
		"PhysConn",
		"Private",
		"ReportParameters",
		"SMV",
		"SMVParameters",
		"SubNetwork",
		"Text"
	],
	CommunicationServiceSpecifications: [
		"GooseParameters",
		"L2CommParameters",
		"L3IPv4CommParameters",
		"L3IPv6CommParameters",
		"ReportParameters",
		"SMVParameters",
		"Text"
	],
	ConductingEquipment: /* @__PURE__ */ "AnalogueWiringParametersRef.BehaviorDescription.BehaviorReference.BinaryWiringParametersRef.ControlRef.ControllingLNode.DAS.DOS.EqFunction.EqSubFunction.FunctionSclRef.GeneralEquipment.GooseParametersRef.InputVar.LNode.LNodeInputs.LNodeOutputs.LNodeSpecNaming.Label.Labels.LogParametersRef.OutputVar.PowerSystemRelation.PowerSystemRelations.Private.ProcessEcho.ProcessResource.ProcessResources.ReportParametersRef.Resource.SDS.SMVParametersRef.SclFileReference.SourceRef.SubEquipment.SubscriberLNode.Terminal.Text.Val.Variable.VariableApplyTo".split("."),
	ConfDataSet: [],
	ConfLNs: [],
	ConfLdName: [],
	ConfLogControl: [],
	ConfReportControl: [],
	ConfSG: [],
	ConfSigRef: [],
	ConnectedAP: [
		"Address",
		"GSE",
		"MaxTime",
		"MinTime",
		"P",
		"PhysConn",
		"Private",
		"SMV",
		"Text"
	],
	ConnectivityNode: /* @__PURE__ */ "AnalogueWiringParametersRef.BehaviorDescription.BehaviorReference.BinaryWiringParametersRef.ControlRef.ControllingLNode.DAS.DOS.GooseParametersRef.InputVar.LNode.LNodeInputs.LNodeOutputs.LNodeSpecNaming.Label.Labels.LogParametersRef.OutputVar.Private.ProcessEcho.ProcessResource.ProcessResources.ReportParametersRef.Resource.SDS.SMVParametersRef.SourceRef.SubscriberLNode.Text.Val".split("."),
	ControlRef: [
		"AnalogueWiringParametersRef",
		"BinaryWiringParametersRef",
		"Text"
	],
	ControllingLNode: [
		"AnalogueWiringParametersRef",
		"BinaryWiringParametersRef",
		"Text"
	],
	DA: [
		"Label",
		"Labels",
		"Private",
		"ProtNs",
		"Text",
		"Val"
	],
	DAI: [
		"Label",
		"Labels",
		"Private",
		"Text",
		"Val"
	],
	DAS: [
		"AnalogueWiringParametersRef",
		"BinaryWiringParametersRef",
		"ControllingLNode",
		"GooseParametersRef",
		"Label",
		"Labels",
		"LogParametersRef",
		"Private",
		"ProcessEcho",
		"ReportParametersRef",
		"SMVParametersRef",
		"SubscriberLNode",
		"Text",
		"Val"
	],
	DAType: [
		"BDA",
		"Label",
		"Labels",
		"Private",
		"ProtNs",
		"Text",
		"Val"
	],
	DO: [
		"Label",
		"Labels",
		"Private",
		"Text"
	],
	DOI: [
		"DAI",
		"Label",
		"Labels",
		"Private",
		"SDI",
		"Text",
		"Val"
	],
	DOS: [
		"AnalogueWiringParametersRef",
		"BinaryWiringParametersRef",
		"ControllingLNode",
		"DAS",
		"GooseParametersRef",
		"Label",
		"Labels",
		"LogParametersRef",
		"Private",
		"ProcessEcho",
		"ReportParametersRef",
		"SDS",
		"SMVParametersRef",
		"SubscriberLNode",
		"Text",
		"Val"
	],
	DOType: [
		"DA",
		"Label",
		"Labels",
		"Private",
		"ProtNs",
		"SDO",
		"Text",
		"Val"
	],
	DataObjectDirectory: [],
	DataSet: [
		"FCDA",
		"Private",
		"Text"
	],
	DataSetDirectory: [],
	DataTypeTemplates: [
		"BDA",
		"DA",
		"DAType",
		"DO",
		"DOType",
		"EnumType",
		"EnumVal",
		"LNodeType",
		"Label",
		"Labels",
		"Private",
		"ProtNs",
		"SDO",
		"Text",
		"Val"
	],
	DynAssociation: [],
	DynDataSet: [],
	EnumType: [
		"EnumVal",
		"Private",
		"Text"
	],
	EnumVal: [],
	EqFunction: /* @__PURE__ */ "AnalogueWiringParametersRef.BehaviorDescription.BehaviorReference.BinaryWiringParametersRef.ControlRef.ControllingLNode.DAS.DOS.EqFunction.EqSubFunction.FunctionSclRef.GeneralEquipment.GooseParametersRef.InputVar.LNode.LNodeInputs.LNodeOutputs.LNodeSpecNaming.Label.Labels.LogParametersRef.OutputVar.PowerSystemRelation.PowerSystemRelations.Private.ProcessEcho.ProcessResource.ProcessResources.ReportParametersRef.Resource.SDS.SMVParametersRef.SclFileReference.SourceRef.SubscriberLNode.Text.Val.Variable.VariableApplyTo".split("."),
	EqSubFunction: /* @__PURE__ */ "AnalogueWiringParametersRef.BehaviorDescription.BehaviorReference.BinaryWiringParametersRef.ControlRef.ControllingLNode.DAS.DOS.EqFunction.EqSubFunction.FunctionSclRef.GeneralEquipment.GooseParametersRef.InputVar.LNode.LNodeInputs.LNodeOutputs.LNodeSpecNaming.Label.Labels.LogParametersRef.OutputVar.PowerSystemRelation.PowerSystemRelations.Private.ProcessEcho.ProcessResource.ProcessResources.ReportParametersRef.Resource.SDS.SMVParametersRef.SclFileReference.SourceRef.SubscriberLNode.Text.Val.Variable.VariableApplyTo".split("."),
	ExtCtrl: ["Private", "Text"],
	ExtRef: ["Private", "Text"],
	FCDA: [],
	FileHandling: [],
	Function: /* @__PURE__ */ "AnalogueWiringParametersRef.BehaviorDescription.BehaviorReference.BinaryWiringParametersRef.ConductingEquipment.ControlRef.ControllingLNode.DAS.DOS.EqFunction.EqSubFunction.FunctionSclRef.GeneralEquipment.GooseParametersRef.InputVar.LNode.LNodeInputs.LNodeOutputs.LNodeSpecNaming.Label.Labels.LogParametersRef.OutputVar.PowerSystemRelation.PowerSystemRelations.Private.ProcessEcho.ProcessResource.ProcessResources.ReportParametersRef.Resource.SDS.SMVParametersRef.SclFileReference.SourceRef.SubEquipment.SubFunction.SubscriberLNode.Terminal.Text.Val.Variable.VariableApplyTo".split("."),
	FunctionCatRef: ["Text"],
	FunctionCategory: [
		"FunctionCatRef",
		"SubCategory",
		"Text"
	],
	FunctionCategoryRef: ["FunctionalVariantRef", "Text"],
	FunctionRef: [
		"FunctionalVariantRef",
		"LNodeDataRef",
		"LNodeInputRef",
		"LNodeOutputRef",
		"SignalRole",
		"Text"
	],
	FunctionRole: [
		"BehaviorDescriptionRef",
		"FunctionCategoryRef",
		"FunctionRef",
		"FunctionRoleContent",
		"FunctionalVariantRef",
		"InputVarRef",
		"LNodeDataRef",
		"LNodeInputRef",
		"LNodeOutputRef",
		"OutputVarRef",
		"PowerSystemRelationRef",
		"ProcessResourceRef",
		"SignalRole",
		"Text",
		"VariableRef"
	],
	FunctionRoleContent: [
		"BehaviorDescriptionRef",
		"FunctionCategoryRef",
		"FunctionRef",
		"FunctionalVariantRef",
		"InputVarRef",
		"LNodeDataRef",
		"LNodeInputRef",
		"LNodeOutputRef",
		"OutputVarRef",
		"PowerSystemRelationRef",
		"ProcessResourceRef",
		"SignalRole",
		"Text",
		"VariableRef"
	],
	FunctionSclRef: [
		"Private",
		"SclFileReference",
		"Text"
	],
	FunctionTemplate: /* @__PURE__ */ "AnalogueWiringParametersRef.BehaviorDescription.BehaviorReference.BinaryWiringParametersRef.ConductingEquipment.ControlRef.ControllingLNode.DAS.DOS.EqFunction.EqSubFunction.FunctionSclRef.GeneralEquipment.GooseParametersRef.InputVar.LNode.LNodeInputs.LNodeOutputs.LNodeSpecNaming.Label.Labels.LogParametersRef.OutputVar.PowerSystemRelation.PowerSystemRelations.Private.ProcessEcho.ProcessResource.ProcessResources.ReportParametersRef.Resource.SDS.SMVParametersRef.SclFileReference.SourceRef.SubEquipment.SubFunctionTemplate.SubscriberLNode.Terminal.Text.Val.Variable.VariableApplyTo".split("."),
	FunctionalSubVariant: [
		"FunctionalSubVariant",
		"FunctionalVariantRef",
		"Text",
		"VariableRef"
	],
	FunctionalVariant: [
		"FunctionalSubVariant",
		"FunctionalVariantRef",
		"Text",
		"VariableRef"
	],
	FunctionalVariantGroup: [
		"FunctionalSubVariant",
		"FunctionalVariant",
		"FunctionalVariantRef",
		"Text",
		"VariableRef"
	],
	FunctionalVariantRef: ["Text"],
	GOOSE: [],
	GOOSEMcSecurity: [],
	GOOSESecurity: [
		"IssuerName",
		"Label",
		"Labels",
		"Private",
		"Subject",
		"Text"
	],
	GSE: [
		"Address",
		"MaxTime",
		"MinTime",
		"P",
		"Private",
		"Text"
	],
	GSEControl: [
		"IEDName",
		"Private",
		"Protocol",
		"Text"
	],
	GSEDir: [],
	GSESettings: ["McSecurity"],
	GSSE: [],
	GeneralEquipment: /* @__PURE__ */ "AnalogueWiringParametersRef.BehaviorDescription.BehaviorReference.BinaryWiringParametersRef.ControlRef.ControllingLNode.DAS.DOS.EqFunction.EqSubFunction.FunctionSclRef.GeneralEquipment.GooseParametersRef.InputVar.LNode.LNodeInputs.LNodeOutputs.LNodeSpecNaming.Label.Labels.LogParametersRef.OutputVar.PowerSystemRelation.PowerSystemRelations.Private.ProcessEcho.ProcessResource.ProcessResources.ReportParametersRef.Resource.SDS.SMVParametersRef.SclFileReference.SourceRef.SubscriberLNode.Text.Val.Variable.VariableApplyTo".split("."),
	GetCBValues: [],
	GetDataObjectDefinition: [],
	GetDataSetValue: [],
	GetDirectory: [],
	GooseParameters: [
		"L2CommParameters",
		"L3IPv4CommParameters",
		"L3IPv6CommParameters",
		"Text"
	],
	GooseParametersRef: ["Text"],
	Header: [
		"History",
		"Hitem",
		"Private",
		"SclFileReference",
		"SourceFiles",
		"Text"
	],
	History: [
		"Hitem",
		"Private",
		"SclFileReference",
		"SourceFiles",
		"Text"
	],
	Hitem: [
		"Private",
		"SclFileReference",
		"SourceFiles",
		"Text"
	],
	IED: /* @__PURE__ */ "AccessControl.AccessPoint.Association.Authentication.CheckoutID.ClientLN.ClientServices.CommProt.ConfDataSet.ConfLNs.ConfLdName.ConfLogControl.ConfReportControl.ConfSG.ConfSigRef.DAI.DOI.DataObjectDirectory.DataSet.DataSetDirectory.DynAssociation.DynDataSet.ExtCtrl.ExtRef.FCDA.FileHandling.GOOSE.GOOSEMcSecurity.GOOSESecurity.GSEControl.GSEDir.GSESettings.GSSE.GetCBValues.GetDataObjectDefinition.GetDataSetValue.GetDirectory.IEDName.IEDSourceFiles.Inputs.IssuerName.KDC.LDevice.LN.LN0.Label.Labels.Log.LogControl.LogSettings.McSecurity.MinRequestedSCDFile.MinRequestedSCDFiles.MultiAPPerSubNet.OptFields.Outputs.Private.Protocol.ReadWrite.RedProt.ReportControl.ReportSettings.RptEnabled.SCSM.SDI.SGEdit.SMVSecurity.SMVSettings.SMVsc.SVMcSecurity.SampledValueControl.SamplesPerSec.SclFileReference.SecPerSamples.Security.Server.ServerAt.Services.SetDataSetValue.SettingControl.SettingGroups.SmpRate.SmvOpts.SubCheckoutID.Subject.SupSubscription.Text.TimeSyncProt.TimerActivatedControl.TrgOps.Val.ValueHandling".split("."),
	IEDName: [],
	IEDSourceFiles: [
		"Private",
		"SclFileReference",
		"Text"
	],
	InputVar: ["Text"],
	InputVarRef: ["FunctionalVariantRef", "Text"],
	Inputs: [
		"ExtRef",
		"Private",
		"Text"
	],
	IssuerName: [],
	KDC: [],
	L2CommParameters: ["Text"],
	L3IPv4CommParameters: ["Text"],
	L3IPv6CommParameters: ["Text"],
	LDevice: /* @__PURE__ */ "AccessControl.ClientLN.DAI.DOI.DataSet.ExtCtrl.ExtRef.FCDA.GSEControl.IEDName.Inputs.LN.LN0.Label.Labels.Log.LogControl.OptFields.Outputs.Private.Protocol.ReportControl.RptEnabled.SDI.SampledValueControl.SettingControl.SmvOpts.Text.TrgOps.Val".split("."),
	LN: [
		"ClientLN",
		"DAI",
		"DOI",
		"DataSet",
		"ExtCtrl",
		"ExtRef",
		"FCDA",
		"Inputs",
		"Label",
		"Labels",
		"Log",
		"LogControl",
		"OptFields",
		"Outputs",
		"Private",
		"ReportControl",
		"RptEnabled",
		"SDI",
		"Text",
		"TrgOps",
		"Val"
	],
	LN0: /* @__PURE__ */ "ClientLN.DAI.DOI.DataSet.ExtCtrl.ExtRef.FCDA.GSEControl.IEDName.Inputs.Label.Labels.Log.LogControl.OptFields.Outputs.Private.Protocol.ReportControl.RptEnabled.SDI.SampledValueControl.SettingControl.SmvOpts.Text.TrgOps.Val".split("."),
	LNode: /* @__PURE__ */ "AnalogueWiringParametersRef.BehaviorDescription.BehaviorReference.BinaryWiringParametersRef.ControlRef.ControllingLNode.DAS.DOS.GooseParametersRef.InputVar.LNodeInputs.LNodeOutputs.LNodeSpecNaming.Label.Labels.LogParametersRef.OutputVar.Private.ProcessEcho.ReportParametersRef.SDS.SMVParametersRef.SourceRef.SubscriberLNode.Text.Val".split("."),
	LNodeDataRef: ["FunctionalVariantRef", "Text"],
	LNodeInputRef: ["FunctionalVariantRef", "Text"],
	LNodeInputs: [
		"AnalogueWiringParametersRef",
		"BinaryWiringParametersRef",
		"GooseParametersRef",
		"ReportParametersRef",
		"SMVParametersRef",
		"SourceRef",
		"Text"
	],
	LNodeOutputRef: ["FunctionalVariantRef", "Text"],
	LNodeOutputs: [
		"AnalogueWiringParametersRef",
		"BinaryWiringParametersRef",
		"ControlRef",
		"Text"
	],
	LNodeSpecNaming: ["Text"],
	LNodeType: [
		"DO",
		"Label",
		"Labels",
		"Private",
		"Text"
	],
	Label: [],
	Labels: [
		"Label",
		"Private",
		"Text"
	],
	Line: /* @__PURE__ */ "AllocationRole.AllocationRoleRef.AnalogueWiringParametersRef.Application.ApplicationSclRef.BehaviorDescription.BehaviorDescriptionRef.BehaviorReference.BinaryWiringParametersRef.ConductingEquipment.ConnectivityNode.ControlRef.ControllingLNode.DAS.DOS.EqFunction.EqSubFunction.Function.FunctionCatRef.FunctionCategory.FunctionCategoryRef.FunctionRef.FunctionRole.FunctionRoleContent.FunctionSclRef.FunctionalSubVariant.FunctionalVariant.FunctionalVariantGroup.FunctionalVariantRef.GeneralEquipment.GooseParametersRef.InputVar.InputVarRef.LNode.LNodeDataRef.LNodeInputRef.LNodeInputs.LNodeOutputRef.LNodeOutputs.LNodeSpecNaming.Label.Labels.LogParametersRef.OutputVar.OutputVarRef.PowerSystemRelation.PowerSystemRelationRef.PowerSystemRelations.Private.ProcessEcho.ProcessResource.ProcessResourceRef.ProcessResources.ReportParametersRef.Resource.SDS.SMVParametersRef.SclFileReference.SignalRole.SourceRef.SubCategory.SubEquipment.SubFunction.SubscriberLNode.Terminal.Text.Val.Variable.VariableApplyTo.VariableRef.Voltage".split("."),
	Log: ["Private", "Text"],
	LogControl: [
		"Private",
		"Text",
		"TrgOps"
	],
	LogParameters: ["Text"],
	LogParametersRef: ["Text"],
	LogSettings: [],
	MaxTime: [],
	McSecurity: [],
	MinRequestedSCDFile: [],
	MinRequestedSCDFiles: [
		"MinRequestedSCDFile",
		"Private",
		"Text"
	],
	MinTime: [],
	MultiAPPerSubNet: [],
	NeutralPoint: ["Private", "Text"],
	OptFields: [],
	OutputVar: ["Text"],
	OutputVarRef: ["FunctionalVariantRef", "Text"],
	Outputs: [
		"ExtCtrl",
		"Private",
		"Text"
	],
	P: [],
	PhysConn: [
		"P",
		"Private",
		"Text"
	],
	PowerSystemRelation: ["Text"],
	PowerSystemRelationRef: ["FunctionalVariantRef", "Text"],
	PowerSystemRelations: ["PowerSystemRelation", "Text"],
	PowerTransformer: /* @__PURE__ */ "AnalogueWiringParametersRef.BehaviorDescription.BehaviorReference.BinaryWiringParametersRef.ControlRef.ControllingLNode.DAS.DOS.EqFunction.EqSubFunction.FunctionSclRef.GeneralEquipment.GooseParametersRef.InputVar.LNode.LNodeInputs.LNodeOutputs.LNodeSpecNaming.Label.Labels.LogParametersRef.NeutralPoint.OutputVar.PowerSystemRelation.PowerSystemRelations.Private.ProcessEcho.ProcessResource.ProcessResources.ReportParametersRef.Resource.SDS.SMVParametersRef.SclFileReference.SourceRef.SubEquipment.SubscriberLNode.TapChanger.Terminal.Text.TransformerWinding.Val.Variable.VariableApplyTo".split("."),
	Private: [],
	Process: /* @__PURE__ */ "AllocationRole.AllocationRoleRef.AnalogueWiringParametersRef.Application.ApplicationSclRef.Bay.BehaviorDescription.BehaviorDescriptionRef.BehaviorReference.BinaryWiringParametersRef.ConductingEquipment.ConnectivityNode.ControlRef.ControllingLNode.DAS.DOS.EqFunction.EqSubFunction.Function.FunctionCatRef.FunctionCategory.FunctionCategoryRef.FunctionRef.FunctionRole.FunctionRoleContent.FunctionSclRef.FunctionalSubVariant.FunctionalVariant.FunctionalVariantGroup.FunctionalVariantRef.GeneralEquipment.GooseParametersRef.InputVar.InputVarRef.LNode.LNodeDataRef.LNodeInputRef.LNodeInputs.LNodeOutputRef.LNodeOutputs.LNodeSpecNaming.Label.Labels.Line.LogParametersRef.NeutralPoint.OutputVar.OutputVarRef.PowerSystemRelation.PowerSystemRelationRef.PowerSystemRelations.PowerTransformer.Private.Process.ProcessEcho.ProcessResource.ProcessResourceRef.ProcessResources.ReportParametersRef.Resource.SDS.SMVParametersRef.SclFileReference.SignalRole.SourceRef.SubCategory.SubEquipment.SubFunction.SubscriberLNode.Substation.TapChanger.Terminal.Text.TransformerWinding.Val.Variable.VariableApplyTo.VariableRef.Voltage.VoltageLevel".split("."),
	ProcessEcho: ["Text"],
	ProcessResource: ["Resource", "Text"],
	ProcessResourceRef: ["FunctionalVariantRef", "Text"],
	ProcessResources: [
		"ProcessResource",
		"Resource",
		"Text"
	],
	Project: ["ProjectProcessReference", "Text"],
	ProjectProcessReference: ["Text"],
	ProtNs: [],
	Protocol: [],
	ReadWrite: [],
	RedProt: [],
	ReportControl: [
		"ClientLN",
		"OptFields",
		"Private",
		"RptEnabled",
		"Text",
		"TrgOps"
	],
	ReportParameters: ["Text"],
	ReportParametersRef: ["Text"],
	ReportSettings: [],
	Resource: [],
	RptEnabled: [
		"ClientLN",
		"Private",
		"Text"
	],
	SCL: /* @__PURE__ */ "AccessControl.AccessPoint.Address.AllocationRole.AllocationRoleRef.AnalogueWiringParameters.AnalogueWiringParametersRef.Application.ApplicationSclRef.Association.Authentication.BDA.Bay.BayType.BehaviorDescription.BehaviorDescriptionRef.BehaviorReference.BinaryWiringParameters.BinaryWiringParametersRef.BitRate.CheckoutID.ClientLN.ClientServices.CommProt.Communication.CommunicationServiceSpecifications.ConductingEquipment.ConfDataSet.ConfLNs.ConfLdName.ConfLogControl.ConfReportControl.ConfSG.ConfSigRef.ConnectedAP.ConnectivityNode.ControlRef.ControllingLNode.DA.DAI.DAS.DAType.DO.DOI.DOS.DOType.DataObjectDirectory.DataSet.DataSetDirectory.DataTypeTemplates.DynAssociation.DynDataSet.EnumType.EnumVal.EqFunction.EqSubFunction.ExtCtrl.ExtRef.FCDA.FileHandling.Function.FunctionCatRef.FunctionCategory.FunctionCategoryRef.FunctionRef.FunctionRole.FunctionRoleContent.FunctionSclRef.FunctionTemplate.FunctionalSubVariant.FunctionalVariant.FunctionalVariantGroup.FunctionalVariantRef.GOOSE.GOOSEMcSecurity.GOOSESecurity.GSE.GSEControl.GSEDir.GSESettings.GSSE.GeneralEquipment.GetCBValues.GetDataObjectDefinition.GetDataSetValue.GetDirectory.GooseParameters.GooseParametersRef.Header.History.Hitem.IED.IEDName.IEDSourceFiles.InputVar.InputVarRef.Inputs.IssuerName.KDC.L2CommParameters.L3IPv4CommParameters.L3IPv6CommParameters.LDevice.LN.LN0.LNode.LNodeDataRef.LNodeInputRef.LNodeInputs.LNodeOutputRef.LNodeOutputs.LNodeSpecNaming.LNodeType.Label.Labels.Line.Log.LogControl.LogParameters.LogParametersRef.LogSettings.MaxTime.McSecurity.MinRequestedSCDFile.MinRequestedSCDFiles.MinTime.MultiAPPerSubNet.NeutralPoint.OptFields.OutputVar.OutputVarRef.Outputs.P.PhysConn.PowerSystemRelation.PowerSystemRelationRef.PowerSystemRelations.PowerTransformer.Private.Process.ProcessEcho.ProcessResource.ProcessResourceRef.ProcessResources.Project.ProjectProcessReference.ProtNs.Protocol.ReadWrite.RedProt.ReportControl.ReportParameters.ReportParametersRef.ReportSettings.Resource.RptEnabled.SCSM.SDI.SDO.SDS.SGEdit.SMV.SMVParameters.SMVParametersRef.SMVSecurity.SMVSettings.SMVsc.SVMcSecurity.SampledValueControl.SamplesPerSec.SclFileReference.SecPerSamples.Security.Server.ServerAt.ServiceSpecifications.Services.SetDataSetValue.SettingControl.SettingGroups.SignalRole.SmpRate.SmvOpts.SourceFiles.SourceRef.SubCategory.SubCheckoutID.SubEquipment.SubFunction.SubFunctionTemplate.SubNetwork.Subject.SubscriberLNode.Substation.SupSubscription.TapChanger.Terminal.Text.TimeSyncProt.TimerActivatedControl.TransformerWinding.TrgOps.Val.ValueHandling.Variable.VariableApplyTo.VariableRef.Voltage.VoltageLevel".split("."),
	SCSM: [],
	SDI: [
		"DAI",
		"Label",
		"Labels",
		"Private",
		"SDI",
		"Text",
		"Val"
	],
	SDO: [
		"Label",
		"Labels",
		"Private",
		"Text"
	],
	SDS: [
		"AnalogueWiringParametersRef",
		"BinaryWiringParametersRef",
		"ControllingLNode",
		"DAS",
		"GooseParametersRef",
		"Label",
		"Labels",
		"LogParametersRef",
		"Private",
		"ProcessEcho",
		"ReportParametersRef",
		"SDS",
		"SMVParametersRef",
		"SubscriberLNode",
		"Text",
		"Val"
	],
	SGEdit: [],
	SMV: [
		"Address",
		"P",
		"Private",
		"Text"
	],
	SMVParameters: [
		"L2CommParameters",
		"L3IPv4CommParameters",
		"L3IPv6CommParameters",
		"Text"
	],
	SMVParametersRef: ["Text"],
	SMVSecurity: [
		"IssuerName",
		"Label",
		"Labels",
		"Private",
		"Subject",
		"Text"
	],
	SMVSettings: [
		"McSecurity",
		"SamplesPerSec",
		"SecPerSamples",
		"SmpRate"
	],
	SMVsc: [],
	SVMcSecurity: [],
	SampledValueControl: [
		"IEDName",
		"Private",
		"Protocol",
		"SmvOpts",
		"Text"
	],
	SamplesPerSec: [],
	SclFileReference: ["Private", "Text"],
	SecPerSamples: [],
	Security: [],
	Server: /* @__PURE__ */ "AccessControl.Association.Authentication.ClientLN.DAI.DOI.DataSet.ExtCtrl.ExtRef.FCDA.GSEControl.IEDName.Inputs.LDevice.LN.LN0.Label.Labels.Log.LogControl.OptFields.Outputs.Private.Protocol.ReportControl.RptEnabled.SDI.SampledValueControl.SettingControl.SmvOpts.Text.TrgOps.Val".split("."),
	ServerAt: ["Private", "Text"],
	ServiceSpecifications: [
		"AnalogueWiringParameters",
		"BinaryWiringParameters",
		"GooseParameters",
		"L2CommParameters",
		"L3IPv4CommParameters",
		"L3IPv6CommParameters",
		"LogParameters",
		"ReportParameters",
		"SMVParameters",
		"Text"
	],
	Services: /* @__PURE__ */ "ClientServices.CommProt.ConfDataSet.ConfLNs.ConfLdName.ConfLogControl.ConfReportControl.ConfSG.ConfSigRef.DataObjectDirectory.DataSetDirectory.DynAssociation.DynDataSet.FileHandling.GOOSE.GOOSEMcSecurity.GSEDir.GSESettings.GSSE.GetCBValues.GetDataObjectDefinition.GetDataSetValue.GetDirectory.LogSettings.McSecurity.MultiAPPerSubNet.ReadWrite.RedProt.ReportSettings.SCSM.SGEdit.SMVSettings.SMVsc.SVMcSecurity.SamplesPerSec.SecPerSamples.Security.SetDataSetValue.SettingGroups.SmpRate.SupSubscription.TimeSyncProt.TimerActivatedControl.ValueHandling".split("."),
	SetDataSetValue: [],
	SettingControl: ["Private", "Text"],
	SettingGroups: ["ConfSG", "SGEdit"],
	SignalRole: [
		"FunctionalVariantRef",
		"LNodeDataRef",
		"LNodeInputRef",
		"LNodeOutputRef",
		"Text"
	],
	SmpRate: [],
	SmvOpts: [],
	SourceFiles: [
		"Private",
		"SclFileReference",
		"Text"
	],
	SourceRef: [
		"AnalogueWiringParametersRef",
		"BinaryWiringParametersRef",
		"GooseParametersRef",
		"ReportParametersRef",
		"SMVParametersRef",
		"Text"
	],
	SubCategory: [
		"FunctionCatRef",
		"SubCategory",
		"Text"
	],
	SubCheckoutID: ["SubCheckoutID"],
	SubEquipment: /* @__PURE__ */ "AnalogueWiringParametersRef.BehaviorDescription.BehaviorReference.BinaryWiringParametersRef.ControlRef.ControllingLNode.DAS.DOS.EqFunction.EqSubFunction.FunctionSclRef.GeneralEquipment.GooseParametersRef.InputVar.LNode.LNodeInputs.LNodeOutputs.LNodeSpecNaming.Label.Labels.LogParametersRef.OutputVar.PowerSystemRelation.PowerSystemRelations.Private.ProcessEcho.ProcessResource.ProcessResources.ReportParametersRef.Resource.SDS.SMVParametersRef.SclFileReference.SourceRef.SubscriberLNode.Text.Val.Variable.VariableApplyTo".split("."),
	SubFunction: /* @__PURE__ */ "AnalogueWiringParametersRef.BehaviorDescription.BehaviorReference.BinaryWiringParametersRef.ConductingEquipment.ControlRef.ControllingLNode.DAS.DOS.EqFunction.EqSubFunction.FunctionSclRef.GeneralEquipment.GooseParametersRef.InputVar.LNode.LNodeInputs.LNodeOutputs.LNodeSpecNaming.Label.Labels.LogParametersRef.OutputVar.PowerSystemRelation.PowerSystemRelations.Private.ProcessEcho.ProcessResource.ProcessResources.ReportParametersRef.Resource.SDS.SMVParametersRef.SclFileReference.SourceRef.SubEquipment.SubFunction.SubscriberLNode.Terminal.Text.Val.Variable.VariableApplyTo".split("."),
	SubFunctionTemplate: /* @__PURE__ */ "AnalogueWiringParametersRef.BehaviorDescription.BehaviorReference.BinaryWiringParametersRef.ConductingEquipment.ControlRef.ControllingLNode.DAS.DOS.EqFunction.EqSubFunction.FunctionSclRef.GeneralEquipment.GooseParametersRef.InputVar.LNode.LNodeInputs.LNodeOutputs.LNodeSpecNaming.Label.Labels.LogParametersRef.OutputVar.PowerSystemRelation.PowerSystemRelations.Private.ProcessEcho.ProcessResource.ProcessResources.ReportParametersRef.Resource.SDS.SMVParametersRef.SclFileReference.SourceRef.SubEquipment.SubFunctionTemplate.SubscriberLNode.Terminal.Text.Val.Variable.VariableApplyTo".split("."),
	SubNetwork: [
		"Address",
		"BitRate",
		"CommunicationServiceSpecifications",
		"ConnectedAP",
		"GSE",
		"GooseParameters",
		"L2CommParameters",
		"L3IPv4CommParameters",
		"L3IPv6CommParameters",
		"Label",
		"Labels",
		"MaxTime",
		"MinTime",
		"P",
		"PhysConn",
		"Private",
		"ReportParameters",
		"SMV",
		"SMVParameters",
		"Text"
	],
	Subject: [],
	SubscriberLNode: [
		"BinaryWiringParametersRef",
		"GooseParametersRef",
		"ReportParametersRef",
		"SMVParametersRef",
		"Text"
	],
	Substation: /* @__PURE__ */ "AllocationRole.AllocationRoleRef.AnalogueWiringParametersRef.Application.ApplicationSclRef.Bay.BehaviorDescription.BehaviorDescriptionRef.BehaviorReference.BinaryWiringParametersRef.ConductingEquipment.ConnectivityNode.ControlRef.ControllingLNode.DAS.DOS.EqFunction.EqSubFunction.Function.FunctionCatRef.FunctionCategory.FunctionCategoryRef.FunctionRef.FunctionRole.FunctionRoleContent.FunctionSclRef.FunctionalSubVariant.FunctionalVariant.FunctionalVariantGroup.FunctionalVariantRef.GeneralEquipment.GooseParametersRef.InputVar.InputVarRef.LNode.LNodeDataRef.LNodeInputRef.LNodeInputs.LNodeOutputRef.LNodeOutputs.LNodeSpecNaming.Label.Labels.LogParametersRef.NeutralPoint.OutputVar.OutputVarRef.PowerSystemRelation.PowerSystemRelationRef.PowerSystemRelations.PowerTransformer.Private.ProcessEcho.ProcessResource.ProcessResourceRef.ProcessResources.ReportParametersRef.Resource.SDS.SMVParametersRef.SclFileReference.SignalRole.SourceRef.SubCategory.SubEquipment.SubFunction.SubscriberLNode.TapChanger.Terminal.Text.TransformerWinding.Val.Variable.VariableApplyTo.VariableRef.Voltage.VoltageLevel".split("."),
	SupSubscription: [],
	TapChanger: /* @__PURE__ */ "AnalogueWiringParametersRef.BehaviorDescription.BehaviorReference.BinaryWiringParametersRef.ControlRef.ControllingLNode.DAS.DOS.EqFunction.EqSubFunction.FunctionSclRef.GeneralEquipment.GooseParametersRef.InputVar.LNode.LNodeInputs.LNodeOutputs.LNodeSpecNaming.Label.Labels.LogParametersRef.OutputVar.PowerSystemRelation.PowerSystemRelations.Private.ProcessEcho.ProcessResource.ProcessResources.ReportParametersRef.Resource.SDS.SMVParametersRef.SclFileReference.SourceRef.SubEquipment.SubscriberLNode.Text.Val.Variable.VariableApplyTo".split("."),
	Terminal: ["Private", "Text"],
	Text: [],
	TimeSyncProt: [],
	TimerActivatedControl: [],
	TransformerWinding: /* @__PURE__ */ "AnalogueWiringParametersRef.BehaviorDescription.BehaviorReference.BinaryWiringParametersRef.ControlRef.ControllingLNode.DAS.DOS.EqFunction.EqSubFunction.FunctionSclRef.GeneralEquipment.GooseParametersRef.InputVar.LNode.LNodeInputs.LNodeOutputs.LNodeSpecNaming.Label.Labels.LogParametersRef.NeutralPoint.OutputVar.PowerSystemRelation.PowerSystemRelations.Private.ProcessEcho.ProcessResource.ProcessResources.ReportParametersRef.Resource.SDS.SMVParametersRef.SclFileReference.SourceRef.SubEquipment.SubscriberLNode.TapChanger.Terminal.Text.Val.Variable.VariableApplyTo".split("."),
	TrgOps: [],
	Val: [],
	ValueHandling: [],
	Variable: ["Text", "VariableApplyTo"],
	VariableApplyTo: ["Text"],
	VariableRef: ["FunctionalVariantRef", "Text"],
	Voltage: [],
	VoltageLevel: /* @__PURE__ */ "AllocationRole.AllocationRoleRef.AnalogueWiringParametersRef.Application.ApplicationSclRef.Bay.BehaviorDescription.BehaviorDescriptionRef.BehaviorReference.BinaryWiringParametersRef.ConductingEquipment.ConnectivityNode.ControlRef.ControllingLNode.DAS.DOS.EqFunction.EqSubFunction.Function.FunctionCatRef.FunctionCategory.FunctionCategoryRef.FunctionRef.FunctionRole.FunctionRoleContent.FunctionSclRef.FunctionalSubVariant.FunctionalVariant.FunctionalVariantGroup.FunctionalVariantRef.GeneralEquipment.GooseParametersRef.InputVar.InputVarRef.LNode.LNodeDataRef.LNodeInputRef.LNodeInputs.LNodeOutputRef.LNodeOutputs.LNodeSpecNaming.Label.Labels.LogParametersRef.NeutralPoint.OutputVar.OutputVarRef.PowerSystemRelation.PowerSystemRelationRef.PowerSystemRelations.PowerTransformer.Private.ProcessEcho.ProcessResource.ProcessResourceRef.ProcessResources.ReportParametersRef.Resource.SDS.SMVParametersRef.SclFileReference.SignalRole.SourceRef.SubCategory.SubEquipment.SubFunction.SubscriberLNode.TapChanger.Terminal.Text.TransformerWinding.Val.Variable.VariableApplyTo.VariableRef.Voltage".split(".")
}, nn = {
	AccessControl: [
		"AccessPoint",
		"IED",
		"LDevice",
		"SCL",
		"Server"
	],
	AccessPoint: ["IED", "SCL"],
	Address: [
		"Communication",
		"ConnectedAP",
		"GSE",
		"SCL",
		"SMV",
		"SubNetwork"
	],
	AllocationRole: [
		"Bay",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	AllocationRoleRef: [
		"Application",
		"Bay",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	AnalogueWiringParameters: ["SCL", "ServiceSpecifications"],
	AnalogueWiringParametersRef: /* @__PURE__ */ "Bay.ConductingEquipment.ConnectivityNode.ControlRef.ControllingLNode.DAS.DOS.EqFunction.EqSubFunction.Function.FunctionTemplate.GeneralEquipment.LNode.LNodeInputs.LNodeOutputs.Line.PowerTransformer.Process.SCL.SDS.SourceRef.SubEquipment.SubFunction.SubFunctionTemplate.Substation.TapChanger.TransformerWinding.VoltageLevel".split("."),
	Application: [
		"Bay",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	ApplicationSclRef: [
		"Application",
		"Bay",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	Association: [
		"AccessPoint",
		"IED",
		"SCL",
		"Server"
	],
	Authentication: [
		"AccessPoint",
		"IED",
		"SCL",
		"Server"
	],
	BDA: [
		"DAType",
		"DataTypeTemplates",
		"SCL"
	],
	Bay: [
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	BayType: ["SCL"],
	BehaviorDescription: [
		"Bay",
		"ConductingEquipment",
		"ConnectivityNode",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"LNode",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	BehaviorDescriptionRef: [
		"Application",
		"Bay",
		"FunctionRole",
		"FunctionRoleContent",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	BehaviorReference: [
		"Bay",
		"BehaviorDescription",
		"ConductingEquipment",
		"ConnectivityNode",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"LNode",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	BinaryWiringParameters: ["SCL", "ServiceSpecifications"],
	BinaryWiringParametersRef: /* @__PURE__ */ "Bay.ConductingEquipment.ConnectivityNode.ControlRef.ControllingLNode.DAS.DOS.EqFunction.EqSubFunction.Function.FunctionTemplate.GeneralEquipment.LNode.LNodeInputs.LNodeOutputs.Line.PowerTransformer.Process.SCL.SDS.SourceRef.SubEquipment.SubFunction.SubFunctionTemplate.SubscriberLNode.Substation.TapChanger.TransformerWinding.VoltageLevel".split("."),
	BitRate: [
		"Communication",
		"SCL",
		"SubNetwork"
	],
	CheckoutID: ["IED", "SCL"],
	ClientLN: [
		"AccessPoint",
		"IED",
		"LDevice",
		"LN",
		"LN0",
		"ReportControl",
		"RptEnabled",
		"SCL",
		"Server"
	],
	ClientServices: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	CommProt: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	Communication: ["SCL"],
	CommunicationServiceSpecifications: [
		"Communication",
		"SCL",
		"SubNetwork"
	],
	ConductingEquipment: [
		"Bay",
		"Function",
		"FunctionTemplate",
		"Line",
		"Process",
		"SCL",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"VoltageLevel"
	],
	ConfDataSet: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	ConfLNs: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	ConfLdName: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	ConfLogControl: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	ConfReportControl: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	ConfSG: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services",
		"SettingGroups"
	],
	ConfSigRef: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	ConnectedAP: [
		"Communication",
		"SCL",
		"SubNetwork"
	],
	ConnectivityNode: [
		"Bay",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	ControlRef: [
		"Bay",
		"ConductingEquipment",
		"ConnectivityNode",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"LNode",
		"LNodeOutputs",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	ControllingLNode: [
		"Bay",
		"ConductingEquipment",
		"ConnectivityNode",
		"DAS",
		"DOS",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"LNode",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SDS",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	DA: [
		"DOType",
		"DataTypeTemplates",
		"SCL"
	],
	DAI: [
		"AccessPoint",
		"DOI",
		"IED",
		"LDevice",
		"LN",
		"LN0",
		"SCL",
		"SDI",
		"Server"
	],
	DAS: [
		"Bay",
		"ConductingEquipment",
		"ConnectivityNode",
		"DOS",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"LNode",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SDS",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	DAType: ["DataTypeTemplates", "SCL"],
	DO: [
		"DataTypeTemplates",
		"LNodeType",
		"SCL"
	],
	DOI: [
		"AccessPoint",
		"IED",
		"LDevice",
		"LN",
		"LN0",
		"SCL",
		"Server"
	],
	DOS: [
		"Bay",
		"ConductingEquipment",
		"ConnectivityNode",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"LNode",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	DOType: ["DataTypeTemplates", "SCL"],
	DataObjectDirectory: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	DataSet: [
		"AccessPoint",
		"IED",
		"LDevice",
		"LN",
		"LN0",
		"SCL",
		"Server"
	],
	DataSetDirectory: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	DataTypeTemplates: ["SCL"],
	DynAssociation: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	DynDataSet: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	EnumType: ["DataTypeTemplates", "SCL"],
	EnumVal: [
		"DataTypeTemplates",
		"EnumType",
		"SCL"
	],
	EqFunction: [
		"Bay",
		"ConductingEquipment",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	EqSubFunction: [
		"Bay",
		"ConductingEquipment",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	ExtCtrl: [
		"AccessPoint",
		"IED",
		"LDevice",
		"LN",
		"LN0",
		"Outputs",
		"SCL",
		"Server"
	],
	ExtRef: [
		"AccessPoint",
		"IED",
		"Inputs",
		"LDevice",
		"LN",
		"LN0",
		"SCL",
		"Server"
	],
	FCDA: [
		"AccessPoint",
		"DataSet",
		"IED",
		"LDevice",
		"LN",
		"LN0",
		"SCL",
		"Server"
	],
	FileHandling: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	Function: [
		"Bay",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	FunctionCatRef: [
		"Bay",
		"FunctionCategory",
		"Line",
		"Process",
		"SCL",
		"SubCategory",
		"Substation",
		"VoltageLevel"
	],
	FunctionCategory: [
		"Bay",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	FunctionCategoryRef: [
		"Application",
		"Bay",
		"FunctionRole",
		"FunctionRoleContent",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	FunctionRef: [
		"AllocationRole",
		"Application",
		"Bay",
		"FunctionRole",
		"FunctionRoleContent",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	FunctionRole: [
		"Application",
		"Bay",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	FunctionRoleContent: [
		"Application",
		"Bay",
		"FunctionRole",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	FunctionSclRef: [
		"Bay",
		"ConductingEquipment",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	FunctionTemplate: ["SCL"],
	FunctionalSubVariant: [
		"Application",
		"Bay",
		"FunctionalSubVariant",
		"FunctionalVariant",
		"FunctionalVariantGroup",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	FunctionalVariant: [
		"Application",
		"Bay",
		"FunctionalVariantGroup",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	FunctionalVariantGroup: [
		"Application",
		"Bay",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	FunctionalVariantRef: /* @__PURE__ */ "AllocationRole.AllocationRoleRef.Application.Bay.BehaviorDescriptionRef.FunctionCategoryRef.FunctionRef.FunctionRole.FunctionRoleContent.FunctionalSubVariant.FunctionalVariant.FunctionalVariantGroup.InputVarRef.LNodeDataRef.LNodeInputRef.LNodeOutputRef.Line.OutputVarRef.PowerSystemRelationRef.Process.ProcessResourceRef.SCL.SignalRole.Substation.VariableRef.VoltageLevel".split("."),
	GOOSE: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	GOOSEMcSecurity: [
		"AccessPoint",
		"ClientServices",
		"IED",
		"SCL",
		"Services"
	],
	GOOSESecurity: [
		"AccessPoint",
		"IED",
		"SCL"
	],
	GSE: [
		"Communication",
		"ConnectedAP",
		"SCL",
		"SubNetwork"
	],
	GSEControl: [
		"AccessPoint",
		"IED",
		"LDevice",
		"LN0",
		"SCL",
		"Server"
	],
	GSEDir: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	GSESettings: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	GSSE: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	GeneralEquipment: [
		"Bay",
		"ConductingEquipment",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	GetCBValues: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	GetDataObjectDefinition: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	GetDataSetValue: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	GetDirectory: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	GooseParameters: [
		"Communication",
		"CommunicationServiceSpecifications",
		"SCL",
		"ServiceSpecifications",
		"SubNetwork"
	],
	GooseParametersRef: /* @__PURE__ */ "Bay.ConductingEquipment.ConnectivityNode.DAS.DOS.EqFunction.EqSubFunction.Function.FunctionTemplate.GeneralEquipment.LNode.LNodeInputs.Line.PowerTransformer.Process.SCL.SDS.SourceRef.SubEquipment.SubFunction.SubFunctionTemplate.SubscriberLNode.Substation.TapChanger.TransformerWinding.VoltageLevel".split("."),
	Header: ["SCL"],
	History: ["Header", "SCL"],
	Hitem: [
		"Header",
		"History",
		"SCL"
	],
	IED: ["SCL"],
	IEDName: [
		"AccessPoint",
		"GSEControl",
		"IED",
		"LDevice",
		"LN0",
		"SCL",
		"SampledValueControl",
		"Server"
	],
	IEDSourceFiles: ["IED", "SCL"],
	InputVar: [
		"Bay",
		"BehaviorDescription",
		"ConductingEquipment",
		"ConnectivityNode",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"LNode",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	InputVarRef: [
		"Application",
		"Bay",
		"BehaviorDescriptionRef",
		"FunctionRole",
		"FunctionRoleContent",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	Inputs: [
		"AccessPoint",
		"IED",
		"LDevice",
		"LN",
		"LN0",
		"SCL",
		"Server"
	],
	IssuerName: [
		"AccessPoint",
		"GOOSESecurity",
		"IED",
		"SCL",
		"SMVSecurity"
	],
	KDC: ["IED", "SCL"],
	L2CommParameters: [
		"Communication",
		"CommunicationServiceSpecifications",
		"GooseParameters",
		"SCL",
		"SMVParameters",
		"ServiceSpecifications",
		"SubNetwork"
	],
	L3IPv4CommParameters: [
		"Communication",
		"CommunicationServiceSpecifications",
		"GooseParameters",
		"SCL",
		"SMVParameters",
		"ServiceSpecifications",
		"SubNetwork"
	],
	L3IPv6CommParameters: [
		"Communication",
		"CommunicationServiceSpecifications",
		"GooseParameters",
		"SCL",
		"SMVParameters",
		"ServiceSpecifications",
		"SubNetwork"
	],
	LDevice: [
		"AccessPoint",
		"IED",
		"SCL",
		"Server"
	],
	LN: [
		"AccessPoint",
		"IED",
		"LDevice",
		"SCL",
		"Server"
	],
	LN0: [
		"AccessPoint",
		"IED",
		"LDevice",
		"SCL",
		"Server"
	],
	LNode: [
		"Bay",
		"ConductingEquipment",
		"ConnectivityNode",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	LNodeDataRef: [
		"AllocationRole",
		"Application",
		"Bay",
		"FunctionRef",
		"FunctionRole",
		"FunctionRoleContent",
		"Line",
		"Process",
		"SCL",
		"SignalRole",
		"Substation",
		"VoltageLevel"
	],
	LNodeInputRef: [
		"AllocationRole",
		"Application",
		"Bay",
		"FunctionRef",
		"FunctionRole",
		"FunctionRoleContent",
		"Line",
		"Process",
		"SCL",
		"SignalRole",
		"Substation",
		"VoltageLevel"
	],
	LNodeInputs: [
		"Bay",
		"ConductingEquipment",
		"ConnectivityNode",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"LNode",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	LNodeOutputRef: [
		"AllocationRole",
		"Application",
		"Bay",
		"FunctionRef",
		"FunctionRole",
		"FunctionRoleContent",
		"Line",
		"Process",
		"SCL",
		"SignalRole",
		"Substation",
		"VoltageLevel"
	],
	LNodeOutputs: [
		"Bay",
		"ConductingEquipment",
		"ConnectivityNode",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"LNode",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	LNodeSpecNaming: [
		"Bay",
		"ConductingEquipment",
		"ConnectivityNode",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"LNode",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	LNodeType: ["DataTypeTemplates", "SCL"],
	Label: /* @__PURE__ */ "AccessPoint.BDA.Bay.Communication.ConductingEquipment.ConnectivityNode.DA.DAI.DAS.DAType.DO.DOI.DOS.DOType.DataTypeTemplates.EqFunction.EqSubFunction.Function.FunctionTemplate.GOOSESecurity.GeneralEquipment.IED.LDevice.LN.LN0.LNode.LNodeType.Labels.Line.PowerTransformer.Process.SCL.SDI.SDO.SDS.SMVSecurity.Server.SubEquipment.SubFunction.SubFunctionTemplate.SubNetwork.Substation.TapChanger.TransformerWinding.VoltageLevel".split("."),
	Labels: /* @__PURE__ */ "AccessPoint.BDA.Bay.Communication.ConductingEquipment.ConnectivityNode.DA.DAI.DAS.DAType.DO.DOI.DOS.DOType.DataTypeTemplates.EqFunction.EqSubFunction.Function.FunctionTemplate.GOOSESecurity.GeneralEquipment.IED.LDevice.LN.LN0.LNode.LNodeType.Line.PowerTransformer.Process.SCL.SDI.SDO.SDS.SMVSecurity.Server.SubEquipment.SubFunction.SubFunctionTemplate.SubNetwork.Substation.TapChanger.TransformerWinding.VoltageLevel".split("."),
	Line: ["Process", "SCL"],
	Log: [
		"AccessPoint",
		"IED",
		"LDevice",
		"LN",
		"LN0",
		"SCL",
		"Server"
	],
	LogControl: [
		"AccessPoint",
		"IED",
		"LDevice",
		"LN",
		"LN0",
		"SCL",
		"Server"
	],
	LogParameters: ["SCL", "ServiceSpecifications"],
	LogParametersRef: [
		"Bay",
		"ConductingEquipment",
		"ConnectivityNode",
		"DAS",
		"DOS",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"LNode",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SDS",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	LogSettings: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	MaxTime: [
		"Communication",
		"ConnectedAP",
		"GSE",
		"SCL",
		"SubNetwork"
	],
	McSecurity: [
		"AccessPoint",
		"GSESettings",
		"IED",
		"SCL",
		"SMVSettings",
		"Services"
	],
	MinRequestedSCDFile: [
		"IED",
		"MinRequestedSCDFiles",
		"SCL"
	],
	MinRequestedSCDFiles: ["IED", "SCL"],
	MinTime: [
		"Communication",
		"ConnectedAP",
		"GSE",
		"SCL",
		"SubNetwork"
	],
	MultiAPPerSubNet: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	NeutralPoint: [
		"Bay",
		"PowerTransformer",
		"Process",
		"SCL",
		"Substation",
		"TransformerWinding",
		"VoltageLevel"
	],
	OptFields: [
		"AccessPoint",
		"IED",
		"LDevice",
		"LN",
		"LN0",
		"ReportControl",
		"SCL",
		"Server"
	],
	OutputVar: [
		"Bay",
		"BehaviorDescription",
		"ConductingEquipment",
		"ConnectivityNode",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"LNode",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	OutputVarRef: [
		"Application",
		"Bay",
		"BehaviorDescriptionRef",
		"FunctionRole",
		"FunctionRoleContent",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	Outputs: [
		"AccessPoint",
		"IED",
		"LDevice",
		"LN",
		"LN0",
		"SCL",
		"Server"
	],
	P: [
		"Address",
		"Communication",
		"ConnectedAP",
		"GSE",
		"PhysConn",
		"SCL",
		"SMV",
		"SubNetwork"
	],
	PhysConn: [
		"Communication",
		"ConnectedAP",
		"SCL",
		"SubNetwork"
	],
	PowerSystemRelation: [
		"Bay",
		"ConductingEquipment",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"Line",
		"PowerSystemRelations",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	PowerSystemRelationRef: [
		"Application",
		"Bay",
		"FunctionRole",
		"FunctionRoleContent",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	PowerSystemRelations: [
		"Bay",
		"ConductingEquipment",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	PowerTransformer: [
		"Bay",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	Private: /* @__PURE__ */ "AccessPoint.Application.ApplicationSclRef.BDA.Bay.Communication.ConductingEquipment.ConnectedAP.ConnectivityNode.DA.DAI.DAS.DAType.DO.DOI.DOS.DOType.DataSet.DataTypeTemplates.EnumType.EqFunction.EqSubFunction.ExtCtrl.ExtRef.Function.FunctionSclRef.FunctionTemplate.GOOSESecurity.GSE.GSEControl.GeneralEquipment.Header.History.Hitem.IED.IEDSourceFiles.Inputs.LDevice.LN.LN0.LNode.LNodeType.Labels.Line.Log.LogControl.MinRequestedSCDFiles.NeutralPoint.Outputs.PhysConn.PowerTransformer.Process.ReportControl.RptEnabled.SCL.SDI.SDO.SDS.SMV.SMVSecurity.SampledValueControl.SclFileReference.Server.ServerAt.SettingControl.SourceFiles.SubEquipment.SubFunction.SubFunctionTemplate.SubNetwork.Substation.TapChanger.Terminal.TransformerWinding.VoltageLevel".split("."),
	Process: ["Process", "SCL"],
	ProcessEcho: [
		"Bay",
		"ConductingEquipment",
		"ConnectivityNode",
		"DAS",
		"DOS",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"LNode",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SDS",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	ProcessResource: [
		"Bay",
		"ConductingEquipment",
		"ConnectivityNode",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"Line",
		"PowerTransformer",
		"Process",
		"ProcessResources",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	ProcessResourceRef: [
		"Application",
		"Bay",
		"FunctionRole",
		"FunctionRoleContent",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	ProcessResources: [
		"Bay",
		"ConductingEquipment",
		"ConnectivityNode",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	Project: ["SCL"],
	ProjectProcessReference: ["Project", "SCL"],
	ProtNs: [
		"DA",
		"DAType",
		"DOType",
		"DataTypeTemplates",
		"SCL"
	],
	Protocol: [
		"AccessPoint",
		"GSEControl",
		"IED",
		"LDevice",
		"LN0",
		"SCL",
		"SampledValueControl",
		"Server"
	],
	ReadWrite: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	RedProt: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	ReportControl: [
		"AccessPoint",
		"IED",
		"LDevice",
		"LN",
		"LN0",
		"SCL",
		"Server"
	],
	ReportParameters: [
		"Communication",
		"CommunicationServiceSpecifications",
		"SCL",
		"ServiceSpecifications",
		"SubNetwork"
	],
	ReportParametersRef: /* @__PURE__ */ "Bay.ConductingEquipment.ConnectivityNode.DAS.DOS.EqFunction.EqSubFunction.Function.FunctionTemplate.GeneralEquipment.LNode.LNodeInputs.Line.PowerTransformer.Process.SCL.SDS.SourceRef.SubEquipment.SubFunction.SubFunctionTemplate.SubscriberLNode.Substation.TapChanger.TransformerWinding.VoltageLevel".split("."),
	ReportSettings: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	Resource: [
		"Bay",
		"ConductingEquipment",
		"ConnectivityNode",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"Line",
		"PowerTransformer",
		"Process",
		"ProcessResource",
		"ProcessResources",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	RptEnabled: [
		"AccessPoint",
		"IED",
		"LDevice",
		"LN",
		"LN0",
		"ReportControl",
		"SCL",
		"Server"
	],
	SCL: [],
	SCSM: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	SDI: [
		"AccessPoint",
		"DOI",
		"IED",
		"LDevice",
		"LN",
		"LN0",
		"SCL",
		"SDI",
		"Server"
	],
	SDO: [
		"DOType",
		"DataTypeTemplates",
		"SCL"
	],
	SDS: [
		"Bay",
		"ConductingEquipment",
		"ConnectivityNode",
		"DOS",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"LNode",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SDS",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	SGEdit: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services",
		"SettingGroups"
	],
	SMV: [
		"Communication",
		"ConnectedAP",
		"SCL",
		"SubNetwork"
	],
	SMVParameters: [
		"Communication",
		"CommunicationServiceSpecifications",
		"SCL",
		"ServiceSpecifications",
		"SubNetwork"
	],
	SMVParametersRef: /* @__PURE__ */ "Bay.ConductingEquipment.ConnectivityNode.DAS.DOS.EqFunction.EqSubFunction.Function.FunctionTemplate.GeneralEquipment.LNode.LNodeInputs.Line.PowerTransformer.Process.SCL.SDS.SourceRef.SubEquipment.SubFunction.SubFunctionTemplate.SubscriberLNode.Substation.TapChanger.TransformerWinding.VoltageLevel".split("."),
	SMVSecurity: [
		"AccessPoint",
		"IED",
		"SCL"
	],
	SMVSettings: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	SMVsc: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	SVMcSecurity: [
		"AccessPoint",
		"ClientServices",
		"IED",
		"SCL",
		"Services"
	],
	SampledValueControl: [
		"AccessPoint",
		"IED",
		"LDevice",
		"LN0",
		"SCL",
		"Server"
	],
	SamplesPerSec: [
		"AccessPoint",
		"IED",
		"SCL",
		"SMVSettings",
		"Services"
	],
	SclFileReference: /* @__PURE__ */ "Application.ApplicationSclRef.Bay.ConductingEquipment.EqFunction.EqSubFunction.Function.FunctionSclRef.FunctionTemplate.GeneralEquipment.Header.History.Hitem.IED.IEDSourceFiles.Line.PowerTransformer.Process.SCL.SourceFiles.SubEquipment.SubFunction.SubFunctionTemplate.Substation.TapChanger.TransformerWinding.VoltageLevel".split("."),
	SecPerSamples: [
		"AccessPoint",
		"IED",
		"SCL",
		"SMVSettings",
		"Services"
	],
	Security: [
		"AccessPoint",
		"ClientServices",
		"IED",
		"SCL",
		"Services"
	],
	Server: [
		"AccessPoint",
		"IED",
		"SCL"
	],
	ServerAt: [
		"AccessPoint",
		"IED",
		"SCL"
	],
	ServiceSpecifications: ["SCL"],
	Services: [
		"AccessPoint",
		"IED",
		"SCL"
	],
	SetDataSetValue: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	SettingControl: [
		"AccessPoint",
		"IED",
		"LDevice",
		"LN0",
		"SCL",
		"Server"
	],
	SettingGroups: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	SignalRole: [
		"AllocationRole",
		"Application",
		"Bay",
		"FunctionRef",
		"FunctionRole",
		"FunctionRoleContent",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	SmpRate: [
		"AccessPoint",
		"IED",
		"SCL",
		"SMVSettings",
		"Services"
	],
	SmvOpts: [
		"AccessPoint",
		"IED",
		"LDevice",
		"LN0",
		"SCL",
		"SampledValueControl",
		"Server"
	],
	SourceFiles: [
		"Header",
		"History",
		"Hitem",
		"SCL"
	],
	SourceRef: [
		"Bay",
		"ConductingEquipment",
		"ConnectivityNode",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"LNode",
		"LNodeInputs",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	SubCategory: [
		"Bay",
		"FunctionCategory",
		"Line",
		"Process",
		"SCL",
		"SubCategory",
		"Substation",
		"VoltageLevel"
	],
	SubCheckoutID: [
		"CheckoutID",
		"IED",
		"SCL",
		"SubCheckoutID"
	],
	SubEquipment: [
		"Bay",
		"ConductingEquipment",
		"Function",
		"FunctionTemplate",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	SubFunction: [
		"Bay",
		"Function",
		"Line",
		"Process",
		"SCL",
		"SubFunction",
		"Substation",
		"VoltageLevel"
	],
	SubFunctionTemplate: [
		"FunctionTemplate",
		"SCL",
		"SubFunctionTemplate"
	],
	SubNetwork: ["Communication", "SCL"],
	Subject: [
		"AccessPoint",
		"GOOSESecurity",
		"IED",
		"SCL",
		"SMVSecurity"
	],
	SubscriberLNode: [
		"Bay",
		"ConductingEquipment",
		"ConnectivityNode",
		"DAS",
		"DOS",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"LNode",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SDS",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	Substation: ["Process", "SCL"],
	SupSubscription: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	TapChanger: [
		"Bay",
		"PowerTransformer",
		"Process",
		"SCL",
		"Substation",
		"TransformerWinding",
		"VoltageLevel"
	],
	Terminal: [
		"Bay",
		"ConductingEquipment",
		"Function",
		"FunctionTemplate",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TransformerWinding",
		"VoltageLevel"
	],
	Text: /* @__PURE__ */ "AccessPoint.AllocationRole.AllocationRoleRef.AnalogueWiringParameters.AnalogueWiringParametersRef.Application.ApplicationSclRef.BDA.Bay.BehaviorDescription.BehaviorDescriptionRef.BehaviorReference.BinaryWiringParameters.BinaryWiringParametersRef.Communication.CommunicationServiceSpecifications.ConductingEquipment.ConnectedAP.ConnectivityNode.ControlRef.ControllingLNode.DA.DAI.DAS.DAType.DO.DOI.DOS.DOType.DataSet.DataTypeTemplates.EnumType.EqFunction.EqSubFunction.ExtCtrl.ExtRef.Function.FunctionCatRef.FunctionCategory.FunctionCategoryRef.FunctionRef.FunctionRole.FunctionRoleContent.FunctionSclRef.FunctionTemplate.FunctionalSubVariant.FunctionalVariant.FunctionalVariantGroup.FunctionalVariantRef.GOOSESecurity.GSE.GSEControl.GeneralEquipment.GooseParameters.GooseParametersRef.Header.History.Hitem.IED.IEDSourceFiles.InputVar.InputVarRef.Inputs.L2CommParameters.L3IPv4CommParameters.L3IPv6CommParameters.LDevice.LN.LN0.LNode.LNodeDataRef.LNodeInputRef.LNodeInputs.LNodeOutputRef.LNodeOutputs.LNodeSpecNaming.LNodeType.Labels.Line.Log.LogControl.LogParameters.LogParametersRef.MinRequestedSCDFiles.NeutralPoint.OutputVar.OutputVarRef.Outputs.PhysConn.PowerSystemRelation.PowerSystemRelationRef.PowerSystemRelations.PowerTransformer.Process.ProcessEcho.ProcessResource.ProcessResourceRef.ProcessResources.Project.ProjectProcessReference.ReportControl.ReportParameters.ReportParametersRef.RptEnabled.SCL.SDI.SDO.SDS.SMV.SMVParameters.SMVParametersRef.SMVSecurity.SampledValueControl.SclFileReference.Server.ServerAt.ServiceSpecifications.SettingControl.SignalRole.SourceFiles.SourceRef.SubCategory.SubEquipment.SubFunction.SubFunctionTemplate.SubNetwork.SubscriberLNode.Substation.TapChanger.Terminal.TransformerWinding.Variable.VariableApplyTo.VariableRef.VoltageLevel".split("."),
	TimeSyncProt: [
		"AccessPoint",
		"ClientServices",
		"IED",
		"SCL",
		"Services"
	],
	TimerActivatedControl: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	TransformerWinding: [
		"Bay",
		"PowerTransformer",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	TrgOps: [
		"AccessPoint",
		"IED",
		"LDevice",
		"LN",
		"LN0",
		"LogControl",
		"ReportControl",
		"SCL",
		"Server"
	],
	Val: /* @__PURE__ */ "AccessPoint.BDA.Bay.ConductingEquipment.ConnectivityNode.DA.DAI.DAS.DAType.DOI.DOS.DOType.DataTypeTemplates.EqFunction.EqSubFunction.Function.FunctionTemplate.GeneralEquipment.IED.LDevice.LN.LN0.LNode.Line.PowerTransformer.Process.SCL.SDI.SDS.Server.SubEquipment.SubFunction.SubFunctionTemplate.Substation.TapChanger.TransformerWinding.VoltageLevel".split("."),
	ValueHandling: [
		"AccessPoint",
		"IED",
		"SCL",
		"Services"
	],
	Variable: [
		"Bay",
		"ConductingEquipment",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"VoltageLevel"
	],
	VariableApplyTo: [
		"Bay",
		"ConductingEquipment",
		"EqFunction",
		"EqSubFunction",
		"Function",
		"FunctionTemplate",
		"GeneralEquipment",
		"Line",
		"PowerTransformer",
		"Process",
		"SCL",
		"SubEquipment",
		"SubFunction",
		"SubFunctionTemplate",
		"Substation",
		"TapChanger",
		"TransformerWinding",
		"Variable",
		"VoltageLevel"
	],
	VariableRef: [
		"Application",
		"Bay",
		"FunctionRole",
		"FunctionRoleContent",
		"FunctionalSubVariant",
		"FunctionalVariant",
		"FunctionalVariantGroup",
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	Voltage: [
		"Line",
		"Process",
		"SCL",
		"Substation",
		"VoltageLevel"
	],
	VoltageLevel: [
		"Process",
		"SCL",
		"Substation"
	]
}, rn = "SCL", an = [
	"Communication",
	"DataTypeTemplates",
	"Header",
	"History",
	"SCL"
], on = {
	AccessControl: {},
	AccessPoint: {
		clock: "",
		desc: "",
		kdc: "",
		name: "",
		router: "",
		templateUuid: "",
		uuid: ""
	},
	Address: {},
	AllocationRole: {
		desc: "",
		name: "",
		originUuid: "",
		templateUuid: "",
		uuid: ""
	},
	AllocationRoleRef: {
		allocationRole: "",
		allocationRoleUuid: "",
		desc: ""
	},
	AnalogueWiringParameters: {
		desc: "",
		dsgInp: "",
		fctInp: "",
		id: "",
		inpNam: "",
		inpRef: ""
	},
	AnalogueWiringParametersRef: {
		desc: "",
		id: ""
	},
	Application: {
		desc: "",
		name: "",
		originUuid: "",
		templateUuid: "",
		type: "",
		uuid: ""
	},
	ApplicationSclRef: {},
	Association: {
		apRef: "",
		associationID: "",
		desc: "",
		iedName: "",
		initiator: "",
		kind: "",
		ldInst: "",
		lnClass: "",
		lnInst: "",
		lnUuid: "",
		prefix: ""
	},
	Authentication: {
		certificate: "",
		none: "",
		password: "",
		strong: "",
		weak: ""
	},
	BDA: {
		bType: "",
		count: "",
		desc: "",
		name: "",
		sAddr: "",
		type: "",
		valImport: "",
		valKind: ""
	},
	Bay: {
		desc: "",
		name: "",
		templateUuid: "",
		uuid: ""
	},
	BayType: {},
	BehaviorDescription: {
		desc: "",
		fileReference: "",
		format: "",
		isSimulation: "",
		isSpecification: "",
		name: "",
		originUuid: "",
		templateUuid: "",
		uuid: ""
	},
	BehaviorDescriptionRef: {
		behaviorDescription: "",
		behaviorDescriptionUuid: "",
		desc: ""
	},
	BehaviorReference: {
		behaviorReference: "",
		behaviorUuid: "",
		desc: ""
	},
	BinaryWiringParameters: {
		debTm: "",
		desc: "",
		fastOutput: "",
		id: "",
		inpNam: "",
		inpRef: "",
		outNam: "",
		outOffDl: "",
		outOnDl: "",
		outRef: "",
		outTyp: "",
		vInOff: "",
		vInOn: ""
	},
	BinaryWiringParametersRef: {
		desc: "",
		id: ""
	},
	BitRate: {
		multiplier: "",
		unit: ""
	},
	CheckoutID: {
		desc: "",
		engRight: "",
		fileName: "",
		fileType: "",
		fileUuid: "",
		headerId: "",
		revision: "",
		version: "",
		when: ""
	},
	ClientLN: {
		apRef: "",
		desc: "",
		iedName: "",
		ldInst: "",
		lnClass: "",
		lnInst: "",
		lnUuid: "",
		prefix: ""
	},
	ClientServices: {
		acceptServerInitiatedAssociation: "",
		bufReport: "",
		goose: "",
		gsse: "",
		maxAttributes: "",
		maxGOOSE: "",
		maxReports: "",
		maxSMV: "",
		noIctBinding: "",
		rGOOSE: "",
		rSV: "",
		readLog: "",
		supportsLdName: "",
		sv: "",
		unbufReport: ""
	},
	CommProt: { ipv6: "" },
	Communication: { desc: "" },
	CommunicationServiceSpecifications: { desc: "" },
	ConductingEquipment: {
		desc: "",
		name: "",
		templateUuid: "",
		type: "",
		uuid: "",
		virtual: ""
	},
	ConfDataSet: {
		max: "",
		maxAttributes: "",
		modify: ""
	},
	ConfLNs: {
		fixLnInst: "",
		fixPrefix: ""
	},
	ConfLdName: {},
	ConfLogControl: { max: "" },
	ConfReportControl: {
		bufConf: "",
		bufMode: "",
		max: "",
		maxBuf: ""
	},
	ConfSG: { resvTms: "" },
	ConfSigRef: { max: "" },
	ConnectedAP: {
		apName: "",
		apUuid: "",
		desc: "",
		iedName: "",
		redProt: ""
	},
	ConnectivityNode: {
		desc: "",
		name: "",
		pathName: "",
		templateUuid: "",
		uuid: ""
	},
	ControlRef: {
		controlled: "",
		controlledDoName: "",
		controlledLNodeUuid: "",
		desc: "",
		extCtrlAddr: "",
		extCtrlUuid: "",
		originUuid: "",
		output: "",
		outputInst: "",
		pDO: "",
		pLN: "",
		resourceName: "",
		resourceUuid: "",
		templateUuid: "",
		uuid: ""
	},
	ControllingLNode: {
		desc: "",
		outputName: "",
		pLN: "",
		resourceName: "",
		resourceUuid: ""
	},
	DA: {
		bType: "",
		count: "",
		dchg: "",
		desc: "",
		dupd: "",
		fc: "",
		name: "",
		qchg: "",
		sAddr: "",
		type: "",
		valImport: "",
		valKind: ""
	},
	DAI: {
		desc: "",
		ix: "",
		name: "",
		sAddr: "",
		valImport: "",
		valKind: ""
	},
	DAS: {
		desc: "",
		ix: "",
		mappedDaName: "",
		mappedLnUuid: "",
		name: "",
		valImport: "",
		valKind: ""
	},
	DAType: {
		desc: "",
		id: "",
		iedType: ""
	},
	DO: {
		accessControl: "",
		desc: "",
		name: "",
		transient: "",
		type: ""
	},
	DOI: {
		accessControl: "",
		desc: "",
		ix: "",
		name: ""
	},
	DOS: {
		desc: "",
		mappedDoName: "",
		mappedLnUuid: "",
		name: ""
	},
	DOType: {
		cdc: "",
		desc: "",
		id: "",
		iedType: ""
	},
	DataObjectDirectory: {},
	DataSet: {
		desc: "",
		name: "",
		templateUuid: "",
		uuid: ""
	},
	DataSetDirectory: {},
	DataTypeTemplates: {},
	DynAssociation: { max: "" },
	DynDataSet: {
		max: "",
		maxAttributes: ""
	},
	EnumType: {
		desc: "",
		id: ""
	},
	EnumVal: {
		desc: "",
		ord: ""
	},
	EqFunction: {
		desc: "",
		name: "",
		templateUuid: "",
		type: "",
		uuid: ""
	},
	EqSubFunction: {
		desc: "",
		name: "",
		templateUuid: "",
		type: "",
		uuid: ""
	},
	ExtCtrl: {
		apRef: "",
		checkInterlock: "",
		checkSynchrocheck: "",
		desc: "",
		doName: "",
		iedName: "",
		intAddr: "",
		ldInst: "",
		lnClass: "",
		lnInst: "",
		lnUuid: "",
		pDO: "",
		pLN: "",
		prefix: "",
		templateUuid: "",
		uuid: ""
	},
	ExtRef: {
		daName: "",
		desc: "",
		doName: "",
		iedName: "",
		intAddr: "",
		ldInst: "",
		lnClass: "",
		lnInst: "",
		lnUuid: "",
		pDA: "",
		pDO: "",
		pLN: "",
		pServT: "",
		prefix: "",
		serviceType: "",
		srcCBName: "",
		srcCBUuid: "",
		srcLDInst: "",
		srcLNClass: "",
		srcLNInst: "",
		srcPrefix: "",
		templateUuid: "",
		uuid: ""
	},
	FCDA: {
		daName: "",
		doName: "",
		fc: "",
		ix: "",
		ldInst: "",
		lnClass: "",
		lnInst: "",
		lnUuid: "",
		prefix: ""
	},
	FileHandling: {
		ftp: "",
		ftps: "",
		mms: ""
	},
	Function: {
		desc: "",
		name: "",
		templateUuid: "",
		type: "",
		uuid: ""
	},
	FunctionCatRef: {
		function: "",
		functionUuid: ""
	},
	FunctionCategory: {
		desc: "",
		name: "",
		originUuid: "",
		templateUuid: "",
		uuid: ""
	},
	FunctionCategoryRef: {
		desc: "",
		functionCategory: "",
		functionCategoryUuid: ""
	},
	FunctionRef: {
		desc: "",
		function: "",
		functionUuid: ""
	},
	FunctionRole: {
		cardinality: "",
		desc: "",
		max: "",
		name: "",
		originUuid: "",
		selector: "",
		templateUuid: "",
		type: "",
		uuid: ""
	},
	FunctionRoleContent: { roleInst: "" },
	FunctionSclRef: {},
	FunctionTemplate: {
		desc: "",
		name: "",
		originUuid: "",
		templateUuid: "",
		type: "",
		uuid: ""
	},
	FunctionalSubVariant: {
		desc: "",
		isBaseline: "",
		name: "",
		originUuid: "",
		templateUuid: "",
		uuid: ""
	},
	FunctionalVariant: {
		desc: "",
		isBaseline: "",
		name: "",
		originUuid: "",
		templateUuid: "",
		uuid: ""
	},
	FunctionalVariantGroup: {
		desc: "",
		name: "",
		originUuid: "",
		templateUuid: "",
		uuid: ""
	},
	FunctionalVariantRef: {
		functionalVariant: "",
		functionalVariantUuid: "",
		update: ""
	},
	GOOSE: {
		fixedOffs: "",
		goose: "",
		max: "",
		rGOOSE: ""
	},
	GOOSEMcSecurity: {
		encryption: "",
		signature: ""
	},
	GOOSESecurity: {
		desc: "",
		name: "",
		serialNumber: "",
		templateUuid: "",
		uuid: "",
		xferNumber: ""
	},
	GSE: {
		cbName: "",
		cbUuid: "",
		desc: "",
		ldInst: ""
	},
	GSEControl: {
		appID: "",
		confRev: "",
		datSet: "",
		desc: "",
		fixedOffs: "",
		name: "",
		securityEnable: "",
		templateUuid: "",
		type: "",
		uuid: ""
	},
	GSEDir: {},
	GSESettings: {
		appID: "",
		cbName: "",
		datSet: "",
		dataLabel: "",
		kdaParticipant: ""
	},
	GSSE: { max: "" },
	GeneralEquipment: {
		desc: "",
		name: "",
		templateUuid: "",
		type: "",
		uuid: "",
		virtual: ""
	},
	GetCBValues: {},
	GetDataObjectDefinition: {},
	GetDataSetValue: {},
	GetDirectory: {},
	GooseParameters: {
		cbName: "",
		desc: "",
		dsName: "",
		goId: "",
		id: "",
		maxTime: "",
		minTime: "",
		securityEnabled: ""
	},
	GooseParametersRef: {
		desc: "",
		id: ""
	},
	Header: {
		baseUuid: "",
		fileType: "",
		id: "",
		nameStructure: "",
		revision: "",
		toolID: "",
		uuid: "",
		version: ""
	},
	History: {},
	Hitem: {
		revision: "",
		version: "",
		what: "",
		when: "",
		who: "",
		why: ""
	},
	IED: {
		configVersion: "",
		desc: "",
		engRight: "",
		manufacturer: "",
		name: "",
		originalSclRelease: "",
		originalSclRevision: "",
		originalSclVersion: "",
		owner: "",
		templateUuid: "",
		type: "",
		uuid: ""
	},
	IEDName: {
		apRef: "",
		apUuid: "",
		ldInst: "",
		ldUuid: "",
		lnClass: "",
		lnInst: "",
		lnUuid: "",
		prefix: ""
	},
	IEDSourceFiles: {},
	InputVar: {
		daName: "",
		dataName: "",
		desc: "",
		doName: "",
		inputName: "",
		inputUuid: "",
		lnodeUuid: "",
		value: "",
		varName: ""
	},
	InputVarRef: {
		desc: "",
		value: "",
		variable: ""
	},
	Inputs: { desc: "" },
	IssuerName: {
		commonName: "",
		idHierarchy: ""
	},
	KDC: {
		apName: "",
		apUuid: "",
		iedName: ""
	},
	L2CommParameters: {
		appId: "",
		desc: "",
		macAddr: "",
		vlanId: "",
		vlanPriority: ""
	},
	L3IPv4CommParameters: {
		IPv4: "",
		"IPv4-IGMPv3Src": "",
		appId: "",
		desc: "",
		vlanId: "",
		vlanPriority: ""
	},
	L3IPv6CommParameters: {
		IPv6: "",
		"IPv6-IGMPv3Src": "",
		appId: "",
		desc: "",
		vlanId: "",
		vlanPriority: ""
	},
	LDevice: {
		desc: "",
		inst: "",
		ldName: "",
		templateUuid: "",
		uuid: ""
	},
	LN: {
		desc: "",
		inst: "",
		lnClass: "",
		lnType: "",
		prefix: "",
		templateUuid: "",
		uuid: ""
	},
	LN0: {
		desc: "",
		inst: "",
		lnClass: "",
		lnType: "",
		templateUuid: "",
		uuid: ""
	},
	LNode: {
		desc: "",
		iedName: "",
		ldInst: "",
		lnClass: "",
		lnInst: "",
		lnType: "",
		lnUuid: "",
		prefix: "",
		templateUuid: "",
		uuid: ""
	},
	LNodeDataRef: {
		daName: "",
		data: "",
		desc: "",
		doName: "",
		lnodeUuid: ""
	},
	LNodeInputRef: {
		desc: "",
		sourceRef: "",
		sourceRefUuid: ""
	},
	LNodeInputs: { desc: "" },
	LNodeOutputRef: {
		controlRef: "",
		controlRefUuid: "",
		desc: ""
	},
	LNodeOutputs: { desc: "" },
	LNodeSpecNaming: {
		sIedName: "",
		sLdInst: "",
		sLnClass: "",
		sLnInst: "",
		sPrefix: ""
	},
	LNodeType: {
		desc: "",
		id: "",
		iedType: "",
		lnClass: ""
	},
	Label: {
		id: "",
		lang: ""
	},
	Labels: { desc: "" },
	Line: {
		desc: "",
		name: "",
		nomFreq: "",
		numPhases: "",
		templateUuid: "",
		type: "",
		uuid: ""
	},
	Log: {
		desc: "",
		name: ""
	},
	LogControl: {
		bufTime: "",
		datSet: "",
		desc: "",
		intgPd: "",
		ldInst: "",
		lnClass: "",
		lnInst: "",
		logEna: "",
		logName: "",
		name: "",
		prefix: "",
		reasonCode: "",
		templateUuid: "",
		uuid: ""
	},
	LogParameters: {
		cbName: "",
		desc: "",
		dsName: "",
		id: "",
		intgPd: "",
		logEna: "",
		logLdInst: "",
		logLnClass: "",
		logLnInst: "",
		logName: "",
		logPrefix: "",
		reasonCode: ""
	},
	LogParametersRef: {
		desc: "",
		id: ""
	},
	LogSettings: {
		cbName: "",
		datSet: "",
		intgPd: "",
		logEna: "",
		trgOps: ""
	},
	MaxTime: {
		multiplier: "",
		unit: ""
	},
	McSecurity: {
		encryption: "",
		signature: ""
	},
	MinRequestedSCDFile: {
		desc: "",
		fileName: "",
		fileType: "",
		fileUuid: "",
		revision: "",
		version: "",
		when: ""
	},
	MinRequestedSCDFiles: {},
	MinTime: {
		multiplier: "",
		unit: ""
	},
	MultiAPPerSubNet: {},
	NeutralPoint: {
		bayName: "",
		cNodeName: "",
		cNodeUuid: "",
		connectivityNode: "",
		desc: "",
		lineName: "",
		name: "",
		processName: "",
		substationName: "",
		voltageLevelName: ""
	},
	OptFields: {
		bufOvfl: "",
		configRef: "",
		dataRef: "",
		dataSet: "",
		entryID: "",
		reasonCode: "",
		seqNum: "",
		timeStamp: ""
	},
	OutputVar: {
		daName: "",
		dataName: "",
		desc: "",
		doName: "",
		lnodeUuid: "",
		outputName: "",
		outputUuid: "",
		value: "",
		varName: ""
	},
	OutputVarRef: {
		desc: "",
		value: "",
		variable: ""
	},
	Outputs: { desc: "" },
	P: { type: "" },
	PhysConn: {
		desc: "",
		type: ""
	},
	PowerSystemRelation: {
		desc: "",
		name: "",
		originUuid: "",
		relation: "",
		relationUuid: "",
		selector: "",
		templateUuid: "",
		uuid: ""
	},
	PowerSystemRelationRef: {
		desc: "",
		powerSystemRelation: "",
		powerSystemRelationUuid: ""
	},
	PowerSystemRelations: { desc: "" },
	PowerTransformer: {
		desc: "",
		name: "",
		templateUuid: "",
		type: "",
		uuid: "",
		virtual: ""
	},
	Private: {
		source: "",
		type: ""
	},
	Process: {
		desc: "",
		name: "",
		templateUuid: "",
		type: "",
		uuid: ""
	},
	ProcessEcho: {
		desc: "",
		source: "",
		sourceDaName: "",
		sourceDoName: "",
		sourceLNodeUuid: ""
	},
	ProcessResource: {
		cardinality: "",
		desc: "",
		max: "",
		name: "",
		originUuid: "",
		selector: "",
		templateUuid: "",
		uuid: ""
	},
	ProcessResourceRef: {
		desc: "",
		processResource: "",
		processResourceUuid: ""
	},
	ProcessResources: { desc: "" },
	Project: {
		desc: "",
		name: "",
		uuid: ""
	},
	ProjectProcessReference: {
		desc: "",
		processReference: "",
		processUuid: ""
	},
	ProtNs: { type: "" },
	Protocol: { mustUnderstand: "" },
	ReadWrite: {},
	RedProt: {
		hsr: "",
		prp: "",
		rstp: ""
	},
	ReportControl: {
		bufTime: "",
		buffered: "",
		confRev: "",
		datSet: "",
		desc: "",
		indexed: "",
		intgPd: "",
		name: "",
		rptID: "",
		templateUuid: "",
		uuid: ""
	},
	ReportParameters: {
		bufTime: "",
		buffered: "",
		cbName: "",
		desc: "",
		dsName: "",
		id: "",
		intgPd: ""
	},
	ReportParametersRef: {
		desc: "",
		id: ""
	},
	ReportSettings: {
		bufTime: "",
		cbName: "",
		datSet: "",
		intgPd: "",
		optFields: "",
		owner: "",
		resvTms: "",
		rptID: "",
		trgOps: ""
	},
	Resource: {
		resInst: "",
		source: "",
		sourceUuid: ""
	},
	RptEnabled: {
		desc: "",
		max: ""
	},
	SCL: {
		release: "",
		revision: "",
		version: ""
	},
	SCSM: {
		iec61850_8_1: "",
		iec61850_8_2: "",
		serverAssociationInitiation: ""
	},
	SDI: {
		desc: "",
		ix: "",
		name: "",
		sAddr: ""
	},
	SDO: {
		count: "",
		desc: "",
		name: "",
		type: ""
	},
	SDS: {
		desc: "",
		ix: "",
		mappedDoName: "",
		mappedLnUuid: "",
		name: ""
	},
	SGEdit: { resvTms: "" },
	SMV: {
		cbName: "",
		cbUuid: "",
		desc: "",
		ldInst: ""
	},
	SMVParameters: {
		cbName: "",
		desc: "",
		dsName: "",
		id: "",
		multicast: "",
		nofASDU: "",
		securityEnabled: "",
		smpMod: "",
		smpRate: "",
		smvId: ""
	},
	SMVParametersRef: {
		desc: "",
		id: ""
	},
	SMVSecurity: {
		desc: "",
		name: "",
		serialNumber: "",
		templateUuid: "",
		uuid: "",
		xferNumber: ""
	},
	SMVSettings: {
		cbName: "",
		datSet: "",
		kdaParticipant: "",
		nofASDU: "",
		optFields: "",
		pdcTimeStamp: "",
		samplesPerSec: "",
		smpRate: "",
		svID: "",
		synchSrcId: ""
	},
	SMVsc: {
		delivery: "",
		deliveryConf: "",
		max: "",
		rSV: "",
		sv: ""
	},
	SVMcSecurity: {
		encryption: "",
		signature: ""
	},
	SampledValueControl: {
		confRev: "",
		datSet: "",
		desc: "",
		multicast: "",
		name: "",
		nofASDU: "",
		securityEnable: "",
		smpMod: "",
		smpRate: "",
		smvID: "",
		templateUuid: "",
		uuid: ""
	},
	SamplesPerSec: {},
	SclFileReference: {
		desc: "",
		fileName: "",
		fileType: "",
		fileUuid: "",
		revision: "",
		version: "",
		when: ""
	},
	SecPerSamples: {},
	Security: {
		ACSEAuthentication: "",
		E2ESecurity: ""
	},
	Server: {
		desc: "",
		timeout: ""
	},
	ServerAt: {
		apName: "",
		apUuid: "",
		desc: ""
	},
	ServiceSpecifications: { desc: "" },
	Services: { nameLength: "" },
	SetDataSetValue: {},
	SettingControl: {
		actSG: "",
		desc: "",
		numOfSGs: "",
		resvTms: ""
	},
	SettingGroups: {},
	SignalRole: {
		desc: "",
		name: "",
		originUuid: "",
		templateUuid: "",
		uuid: ""
	},
	SmpRate: {},
	SmvOpts: {
		dataSet: "",
		refreshTime: "",
		sampleMode: "",
		sampleRate: "",
		sampleSynchronized: "",
		security: "",
		synchSourceId: "",
		timestamp: ""
	},
	SourceFiles: {},
	SourceRef: {
		desc: "",
		extRefAddr: "",
		extRefUuid: "",
		input: "",
		inputInst: "",
		originUuid: "",
		pDA: "",
		pDO: "",
		pLN: "",
		resourceName: "",
		resourceUuid: "",
		service: "",
		source: "",
		sourceDaName: "",
		sourceDoName: "",
		sourceLNodeUuid: "",
		templateUuid: "",
		uuid: ""
	},
	SubCategory: {
		desc: "",
		name: "",
		originUuid: "",
		templateUuid: "",
		uuid: ""
	},
	SubCheckoutID: {
		desc: "",
		engRight: "",
		fileName: "",
		fileType: "",
		fileUuid: "",
		headerId: "",
		revision: "",
		version: "",
		when: ""
	},
	SubEquipment: {
		desc: "",
		name: "",
		phase: "",
		templateUuid: "",
		uuid: "",
		virtual: ""
	},
	SubFunction: {
		desc: "",
		name: "",
		templateUuid: "",
		type: "",
		uuid: ""
	},
	SubFunctionTemplate: {
		desc: "",
		name: "",
		originUuid: "",
		templateUuid: "",
		type: "",
		uuid: ""
	},
	SubNetwork: {
		desc: "",
		name: "",
		templateUuid: "",
		type: "",
		uuid: ""
	},
	Subject: {
		commonName: "",
		idHierarchy: ""
	},
	SubscriberLNode: {
		desc: "",
		inputName: "",
		pLN: "",
		resourceName: "",
		resourceUuid: "",
		service: ""
	},
	Substation: {
		desc: "",
		name: "",
		templateUuid: "",
		uuid: ""
	},
	SupSubscription: {
		maxGo: "",
		maxSv: ""
	},
	TapChanger: {
		desc: "",
		name: "",
		templateUuid: "",
		type: "",
		uuid: "",
		virtual: ""
	},
	Terminal: {
		bayName: "",
		cNodeName: "",
		cNodeUuid: "",
		connectivityNode: "",
		desc: "",
		lineName: "",
		name: "",
		processName: "",
		substationName: "",
		voltageLevelName: ""
	},
	Text: { source: "" },
	TimeSyncProt: {
		c37_238: "",
		iec61850_9_3: "",
		other: "",
		sntp: ""
	},
	TimerActivatedControl: {},
	TransformerWinding: {
		desc: "",
		name: "",
		templateUuid: "",
		type: "",
		uuid: "",
		virtual: ""
	},
	TrgOps: {
		dchg: "",
		dupd: "",
		gi: "",
		period: "",
		qchg: ""
	},
	Val: { sGroup: "" },
	ValueHandling: { setToRO: "" },
	Variable: {
		desc: "",
		name: "",
		originUuid: "",
		templateUuid: "",
		uuid: "",
		value: ""
	},
	VariableApplyTo: {
		attribute: "",
		daName: "",
		defaultValue: "",
		desc: "",
		doName: "",
		element: "",
		elementUuid: "",
		format: "",
		sGroup: ""
	},
	VariableRef: {
		desc: "",
		value: "",
		variable: "",
		variableUuid: ""
	},
	Voltage: {
		multiplier: "",
		unit: ""
	},
	VoltageLevel: {
		desc: "",
		name: "",
		nomFreq: "",
		numPhases: "",
		templateUuid: "",
		uuid: ""
	}
}, sn = {
	AccessControl: {
		tag: "AccessControl",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["LDevice"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [],
			any: !0,
			details: {}
		},
		textContent: {}
	},
	AccessPoint: {
		tag: "AccessPoint",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["IED"],
		attributes: {
			sequence: [
				"clock",
				"desc",
				"kdc",
				"name",
				"router",
				"templateUuid",
				"uuid"
			],
			details: {
				clock: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				kdc: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				name: {
					required: !0,
					facets: {
						pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
						maxLength: 32,
						whiteSpace: "replace"
					}
				},
				router: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: ["inst", "name"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Server",
				"LN",
				"ServerAt",
				"Services",
				"GOOSESecurity",
				"SMVSecurity",
				"Labels"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Server: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueAssociationInServer",
						selector: [{ steps: [{
							kind: "name",
							value: "Association"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "associationID",
							isAttribute: !0
						} }]
					}]
				},
				LN: {
					required: !0,
					minOccurs: 1,
					constraints: [
						{
							kind: "unique",
							name: "uniqueReportControlInLN",
							selector: [{ steps: [{
								kind: "name",
								value: "ReportControl"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "name",
								isAttribute: !0
							} }]
						},
						{
							kind: "unique",
							name: "uniqueLogControlInLN",
							selector: [{ steps: [{
								kind: "name",
								value: "LogControl"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "name",
								isAttribute: !0
							} }]
						},
						{
							kind: "key",
							name: "DataSetKeyInLN",
							selector: [{ steps: [{
								kind: "name",
								value: "DataSet"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "name",
								isAttribute: !0
							} }]
						},
						{
							kind: "keyref",
							name: "ref2DataSetReport",
							refer: "DataSetKeyInLN",
							selector: [{ steps: [{
								kind: "name",
								value: "ReportControl"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "datSet",
								isAttribute: !0
							} }]
						},
						{
							kind: "keyref",
							name: "ref2DataSetLog",
							refer: "DataSetKeyInLN",
							selector: [{ steps: [{
								kind: "name",
								value: "LogControl"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "datSet",
								isAttribute: !0
							} }]
						},
						{
							kind: "unique",
							name: "uniqueDOIinLN",
							selector: [{ steps: [{
								kind: "name",
								value: "DOI"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "name",
								isAttribute: !0
							} }]
						},
						{
							kind: "unique",
							name: "uniqueLogInLN",
							selector: [{ steps: [{
								kind: "name",
								value: "Log"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "name",
								isAttribute: !0
							} }]
						}
					]
				},
				ServerAt: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				Services: { maxOccurs: 1 },
				GOOSESecurity: { maxOccurs: 7 },
				SMVSecurity: { maxOccurs: 7 },
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabelInAP",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				}
			},
			choices: [{
				options: [
					"LN",
					"Server",
					"ServerAt"
				],
				maxOccurs: 1
			}]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueLNInAccessPoint",
			selector: [{ steps: [{
				kind: "name",
				value: "LN"
			}] }],
			fields: [
				{ target: {
					kind: "attribute",
					value: "inst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "prefix",
					isAttribute: !0
				} }
			]
		}]
	},
	Address: {
		tag: "Address",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: [
			"ConnectedAP",
			"GSE",
			"SMV"
		],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: ["P"],
			details: { P: {
				required: !0,
				minOccurs: 1
			} }
		}
	},
	AllocationRole: {
		tag: "AllocationRole",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Definition of an allocation role allowing definition of possible allocation to devices type without using virtual IED",
		parents: [
			"Process",
			"Line",
			"Substation",
			"VoltageLevel",
			"Bay"
		],
		attributes: {
			sequence: [
				"desc",
				"name",
				"originUuid",
				"templateUuid",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				originUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: ["Text", "FunctionRef"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				FunctionRef: {}
			},
			choices: [{ options: ["FunctionRef"] }]
		}
	},
	AllocationRoleRef: {
		tag: "AllocationRoleRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Allocation role attached to the application type",
		parents: ["Application"],
		attributes: {
			sequence: [
				"allocationRole",
				"allocationRoleUuid",
				"desc"
			],
			details: {
				allocationRole: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				allocationRoleUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				}
			}
		},
		children: {
			sequence: ["Text", "FunctionalVariantRef"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				FunctionalVariantRef: {}
			},
			choices: [{ options: ["FunctionalVariantRef"] }]
		}
	},
	AnalogueWiringParameters: {
		tag: "AnalogueWiringParameters",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		parents: ["ServiceSpecifications"],
		attributes: {
			sequence: [
				"desc",
				"dsgInp",
				"fctInp",
				"id",
				"inpNam",
				"inpRef"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				dsgInp: { facets: { whiteSpace: "replace" } },
				fctInp: { facets: { whiteSpace: "replace" } },
				id: {
					required: !0,
					facets: {
						pattern: ["\\S+"],
						minLength: 1,
						maxLength: 255,
						whiteSpace: "collapse"
					}
				},
				inpNam: { facets: { whiteSpace: "replace" } },
				inpRef: { facets: { whiteSpace: "replace" } }
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	AnalogueWiringParametersRef: {
		tag: "AnalogueWiringParametersRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Specification of the analogue wiring parameters expected for the current SourceRef when ServiceType is Wired",
		parents: [
			"SourceRef",
			"ControlRef",
			"ControllingLNode"
		],
		attributes: {
			sequence: ["desc", "id"],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				id: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				}
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	Application: {
		tag: "Application",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Application definition to be added at Process, Substation, Voltage Level or Bay level",
		parents: [
			"Process",
			"Line",
			"Substation",
			"VoltageLevel",
			"Bay"
		],
		attributes: {
			sequence: [
				"desc",
				"name",
				"originUuid",
				"templateUuid",
				"type",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				originUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				type: { facets: {
					pattern: ["\\S+"],
					minLength: 1,
					maxLength: 255,
					whiteSpace: "collapse"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: [
				"Text",
				"FunctionRole",
				"FunctionalVariant",
				"FunctionalVariantGroup",
				"AllocationRoleRef",
				"ApplicationSclRef"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				FunctionRole: {
					required: !0,
					minOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueRoleContent",
						selector: [{ steps: [{
							kind: "name",
							value: "FunctionRoleContent"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "roleInst",
							isAttribute: !0
						} }]
					}]
				},
				FunctionalVariant: {},
				FunctionalVariantGroup: {},
				AllocationRoleRef: {},
				ApplicationSclRef: { maxOccurs: 1 }
			}
		}
	},
	ApplicationSclRef: {
		tag: "ApplicationSclRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Reference to the ASD files used to create an Application",
		parents: ["Application"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: ["Text", "SclFileReference"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				SclFileReference: { maxOccurs: 1 }
			}
		}
	},
	Association: {
		tag: "Association",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Server"],
		attributes: {
			sequence: [
				"apRef",
				"associationID",
				"desc",
				"iedName",
				"initiator",
				"kind",
				"ldInst",
				"lnClass",
				"lnInst",
				"lnUuid",
				"prefix"
			],
			details: {
				apRef: {
					required: !0,
					facets: {
						pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
						maxLength: 32,
						whiteSpace: "replace"
					}
				},
				associationID: { facets: {
					pattern: ["[0-9A-Za-z]+"],
					minLength: 1,
					whiteSpace: "replace"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				iedName: {
					required: !0,
					facets: {
						pattern: [
							"[A-Za-z][0-9A-Za-z_]{0,2}",
							"[A-Za-z][0-9A-Za-z_]{4,63}",
							"[A-MO-Za-z][0-9A-Za-z_]{3}",
							"N[0-9A-Za-np-z_][0-9A-Za-z_]{2}",
							"No[0-9A-Za-mo-z_][0-9A-Za-z_]",
							"Non[0-9A-Za-df-z_]",
							"[A-Za-z][0-9A-Za-z_]*",
							"[A-Za-z_:][-.:0-9A-Z_a-z]*"
						],
						maxLength: 64,
						whiteSpace: "collapse"
					}
				},
				initiator: {
					default: "client",
					facets: {
						enumeration: ["client", "server"],
						whiteSpace: "collapse"
					}
				},
				kind: {
					required: !0,
					facets: {
						enumeration: ["pre-established", "predefined"],
						whiteSpace: "collapse"
					}
				},
				ldInst: {
					required: !0,
					facets: {
						pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
						maxLength: 64,
						whiteSpace: "replace"
					}
				},
				lnClass: {
					required: !0,
					facets: {
						enumeration: /* @__PURE__ */ "LLN0.LPHD.LCCH.LGOS.LSVS.LTIM.LTMS.LTRK.ANCR.ARCO.ARIS.ATCC.AVCO.CALH.CCGR.CILO.CPOW.CSWI.CSYN.FCNT.FCSD.FFIL.FLIM.FPID.FRMP.FSPT.FXOT.FXUT.GAPC.GGIO.GLOG.GSAL.IARC.IHMI.ISAF.ITCI.ITMI.ITPC.KFAN.KFIL.KPMP.KTNK.KVLV.MDIF.MENV.MFLK.MHAI.MHAN.MHYD.MMDC.MMET.MMTN.MMTR.MMXN.MMXU.MSQI.MSTA.PDIF.PDIR.PDIS.PDOP.PDUP.PFRC.PHAR.PHIZ.PIOC.PMRI.PMSS.POPF.PPAM.PRTR.PSCH.PSDE.PTEF.PTHF.PTOC.PTOF.PTOV.PTRC.PTTR.PTUC.PTUF.PTUV.PUPF.PVOC.PVPH.PZSU.QFVR.QITR.QIUB.QVTR.QVUB.QVVR.RADR.RBDR.RBRF.RDIR.RDRE.RDRS.RFLO.RMXU.RPSB.RREC.RSYN.SARC.SCBR.SIMG.SIML.SLTC.SOPM.SPDC.SPTR.SSWI.STMP.SVBR.TANG.TAXD.TCTR.TDST.TFLW.TFRQ.TGSN.THUM.TLVL.TMGF.TMVM.TPOS.TPRS.TRTN.TSND.TTMP.TTNS.TVBR.TVTR.TWPH.XCBR.XSWI.YEFN.YLTC.YPSH.YPTR.ZAXN.ZBAT.ZBSH.ZCAB.ZCAP.ZCON.ZGEN.ZGIL.ZLIN.ZMOT.ZREA.ZRES.ZRRC.ZSAR.ZSCR.ZSMC.ZTCF.ZTCR".split("."),
						pattern: [
							"[A-Z]+",
							"L[A-Z]*",
							"LLN0",
							"[A-Za-z_:][-.:0-9A-Z_a-z]*",
							"A[A-Z]*",
							"C[A-Z]*",
							"F[A-Z]*",
							"G[A-Z]*",
							"I[A-Z]*",
							"K[A-Z]*",
							"M[A-Z]*",
							"P[A-Z]*",
							"Q[A-Z]*",
							"R[A-Z]*",
							"S[A-Z]*",
							"T[A-Z]*",
							"X[A-Z]*",
							"Y[A-Z]*",
							"Z[A-Z]*"
						],
						length: 4,
						whiteSpace: "collapse"
					}
				},
				lnInst: {
					required: !0,
					facets: {
						pattern: ["[0-9]{1,12}"],
						maxLength: 0,
						whiteSpace: "replace"
					}
				},
				lnUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				prefix: {
					default: "",
					facets: {
						pattern: ["[A-Za-z][0-9A-Za-z_]*", ""],
						maxLength: 11,
						whiteSpace: "replace"
					}
				}
			},
			identityFields: ["associationID"]
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	Authentication: {
		tag: "Authentication",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Server"],
		attributes: {
			sequence: [
				"certificate",
				"none",
				"password",
				"strong",
				"weak"
			],
			details: {
				certificate: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				none: {
					default: "true",
					facets: { whiteSpace: "collapse" }
				},
				password: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				strong: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				weak: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	BDA: {
		tag: "BDA",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["DAType"],
		attributes: {
			sequence: [
				"bType",
				"count",
				"desc",
				"name",
				"sAddr",
				"type",
				"valImport",
				"valKind"
			],
			details: {
				bType: {
					required: !0,
					facets: {
						enumeration: /* @__PURE__ */ "BOOLEAN.INT8.INT16.INT24.INT32.INT64.INT128.INT8U.INT16U.INT24U.INT32U.FLOAT32.FLOAT64.Enum.Dbpos.Tcmd.Quality.Timestamp.VisString32.VisString64.VisString65.VisString129.VisString255.Octet64.Unicode255.Struct.EntryTime.Check.ObjRef.Currency.PhyComAddr.TrgOps.OptFlds.SvOptFlds.LogOptFlds.EntryID.Octet6.Octet16".split("."),
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				count: {
					default: "0",
					facets: {
						enumeration: [
							"T",
							"Test",
							"Check",
							"SIUnit",
							"Oper",
							"SBO",
							"SBOw",
							"Cancel",
							"Addr",
							"PRIORITY",
							"VID",
							"APPID",
							"TransportInUse",
							"IPClassOfTraffic",
							"IPv6FlowLabel",
							"IPAddressLength",
							"IPAddress"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*", "[a-z][0-9A-Za-z]*"],
						maxLength: 60,
						minInclusive: 0,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				},
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						enumeration: [
							"T",
							"Test",
							"Check",
							"SIUnit",
							"Oper",
							"SBO",
							"SBOw",
							"Cancel",
							"Addr",
							"PRIORITY",
							"VID",
							"APPID",
							"TransportInUse",
							"IPClassOfTraffic",
							"IPv6FlowLabel",
							"IPAddressLength",
							"IPAddress"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*", "[a-z][0-9A-Za-z]*"],
						maxLength: 60,
						whiteSpace: "collapse"
					}
				},
				sAddr: { facets: {
					maxLength: 255,
					whiteSpace: "replace"
				} },
				type: { facets: { whiteSpace: "replace" } },
				valImport: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				valKind: {
					default: "Set",
					facets: {
						enumeration: [
							"Spec",
							"Conf",
							"RO",
							"Set"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Val",
				"Labels"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Val: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabelInDA",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				}
			}
		}
	},
	Bay: {
		tag: "Bay",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["VoltageLevel"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"templateUuid",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels",
				"LNode",
				"PowerTransformer",
				"GeneralEquipment",
				"ConductingEquipment",
				"ConnectivityNode",
				"Function",
				"AllocationRole",
				"Application",
				"BehaviorDescription",
				"FunctionCategory",
				"ProcessResources",
				"Variable"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabel",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				LNode: {},
				PowerTransformer: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInPowerTransformer",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInPTR",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				GeneralEquipment: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInGeneralEquipment",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInGE",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				ConductingEquipment: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInConductingEquipment",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInCE",
					selector: [{ steps: [{
						kind: "name",
						value: "SubEquipment"
					}] }, { steps: [{
						kind: "name",
						value: "EqFunction"
					}] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				ConnectivityNode: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInConnectivityNode",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}] },
				Function: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInFunctionB",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInBayFunc",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				AllocationRole: {},
				Application: {},
				BehaviorDescription: {},
				FunctionCategory: {},
				ProcessResources: {},
				Variable: {}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueChildNameInBay",
			selector: [{ steps: [{ kind: "wildcard" }] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}, {
			kind: "unique",
			name: "uniqueLNodeInBay",
			selector: [{ steps: [{
				kind: "name",
				value: "LNode"
			}] }],
			fields: [
				{ target: {
					kind: "attribute",
					value: "lnInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "iedName",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "ldInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "prefix",
					isAttribute: !0
				} }
			]
		}]
	},
	BayType: {
		tag: "BayType",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Bay type element is keeping value of the type. It's a free string",
		parents: ["SCL"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [],
			details: {}
		},
		textContent: { facets: { whiteSpace: "replace" } }
	},
	BehaviorDescription: {
		tag: "BehaviorDescription",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Element allowing to describe the behavior its parent (Application, Bay, Function, LN...)",
		parents: [
			"Process",
			"Line",
			"Substation",
			"VoltageLevel",
			"Bay",
			"Function",
			"SubFunction",
			"EqFunction",
			"EqSubFunction",
			"LNode"
		],
		attributes: {
			sequence: [
				"desc",
				"fileReference",
				"format",
				"isSimulation",
				"isSpecification",
				"name",
				"originUuid",
				"templateUuid",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				fileReference: { facets: { whiteSpace: "collapse" } },
				format: { facets: {
					enumeration: [
						"IEC 61131",
						"Textual",
						"Graphic"
					],
					maxLength: 64,
					whiteSpace: "replace"
				} },
				isSimulation: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				isSpecification: {
					default: "true",
					facets: { whiteSpace: "collapse" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				originUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: [
				"Text",
				"InputVar",
				"OutputVar",
				"BehaviorReference"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				InputVar: {},
				OutputVar: {},
				BehaviorReference: {}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueChildNameInBehaviorDescription",
			selector: [{ steps: [{ kind: "wildcard" }] }],
			fields: [{ target: {
				kind: "attribute",
				value: "varName",
				isAttribute: !0
			} }]
		}]
	},
	BehaviorDescriptionRef: {
		tag: "BehaviorDescriptionRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Reference to a behavior description attached to current role",
		parents: ["FunctionRoleContent"],
		attributes: {
			sequence: [
				"behaviorDescription",
				"behaviorDescriptionUuid",
				"desc"
			],
			details: {
				behaviorDescription: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				behaviorDescriptionUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				}
			}
		},
		children: {
			sequence: [
				"Text",
				"FunctionalVariantRef",
				"InputVarRef",
				"OutputVarRef"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				FunctionalVariantRef: {},
				InputVarRef: {},
				OutputVarRef: {}
			},
			choices: [{ options: ["FunctionalVariantRef"] }, { options: ["InputVarRef", "OutputVarRef"] }]
		}
	},
	BehaviorReference: {
		tag: "BehaviorReference",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Reference to a behavior description when for example a manufacturer wants to indicate its implementation of a user specification described by another behavior description",
		parents: ["BehaviorDescription"],
		attributes: {
			sequence: [
				"behaviorReference",
				"behaviorUuid",
				"desc"
			],
			details: {
				behaviorReference: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				behaviorUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				}
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	BinaryWiringParameters: {
		tag: "BinaryWiringParameters",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		parents: ["ServiceSpecifications"],
		attributes: {
			sequence: [
				"debTm",
				"desc",
				"fastOutput",
				"id",
				"inpNam",
				"inpRef",
				"outNam",
				"outOffDl",
				"outOnDl",
				"outRef",
				"outTyp",
				"vInOff",
				"vInOn"
			],
			details: {
				debTm: { facets: { whiteSpace: "collapse" } },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				fastOutput: { facets: { whiteSpace: "collapse" } },
				id: {
					required: !0,
					facets: {
						pattern: ["\\S+"],
						minLength: 1,
						maxLength: 255,
						whiteSpace: "collapse"
					}
				},
				inpNam: { facets: { whiteSpace: "replace" } },
				inpRef: { facets: { whiteSpace: "replace" } },
				outNam: { facets: { whiteSpace: "replace" } },
				outOffDl: { facets: {
					pattern: ["(\\+|-)?([0-9]+(\\.[0-9]*)?|\\.[0-9]+)([Ee](\\+|-)?[0-9]+)?|INF|-INF|NaN"],
					whiteSpace: "collapse"
				} },
				outOnDl: { facets: {
					pattern: ["(\\+|-)?([0-9]+(\\.[0-9]*)?|\\.[0-9]+)([Ee](\\+|-)?[0-9]+)?|INF|-INF|NaN"],
					whiteSpace: "collapse"
				} },
				outRef: { facets: { whiteSpace: "replace" } },
				outTyp: { facets: {
					enumeration: [
						"Normally open",
						"Normally closed",
						"Change over"
					],
					whiteSpace: "replace"
				} },
				vInOff: { facets: {
					pattern: ["(\\+|-)?([0-9]+(\\.[0-9]*)?|\\.[0-9]+)([Ee](\\+|-)?[0-9]+)?|INF|-INF|NaN"],
					whiteSpace: "collapse"
				} },
				vInOn: { facets: {
					pattern: ["(\\+|-)?([0-9]+(\\.[0-9]*)?|\\.[0-9]+)([Ee](\\+|-)?[0-9]+)?|INF|-INF|NaN"],
					whiteSpace: "collapse"
				} }
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	BinaryWiringParametersRef: {
		tag: "BinaryWiringParametersRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Specification of the binary wiring parameters expected for the current SourceRef when ServiceType is Wired",
		parents: [
			"SourceRef",
			"ControlRef",
			"SubscriberLNode",
			"ControllingLNode"
		],
		attributes: {
			sequence: ["desc", "id"],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				id: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				}
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	BitRate: {
		tag: "BitRate",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["SubNetwork"],
		attributes: {
			sequence: ["multiplier", "unit"],
			details: {
				multiplier: {
					fixed: "M",
					facets: {
						enumeration: [
							"",
							"m",
							"k",
							"M",
							"mu",
							"y",
							"z",
							"a",
							"f",
							"p",
							"n",
							"c",
							"d",
							"da",
							"h",
							"G",
							"T",
							"P",
							"E",
							"Z",
							"Y"
						],
						whiteSpace: "replace"
					}
				},
				unit: {
					fixed: "b/s",
					facets: { whiteSpace: "replace" }
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		},
		textContent: { facets: { whiteSpace: "collapse" } }
	},
	CheckoutID: {
		tag: "CheckoutID",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Element used by an IED to indicates that a file has been imported to give engineering rights on this IED. This is opening a transaction between both projects to lock it on first project until the checkout is given back from current project, which then lock the IED locally",
		parents: ["IED"],
		attributes: {
			sequence: [
				"desc",
				"engRight",
				"fileName",
				"fileType",
				"fileUuid",
				"headerId",
				"revision",
				"version",
				"when"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				engRight: { facets: {
					enumeration: [
						"full",
						"fix",
						"dataflow"
					],
					whiteSpace: "replace"
				} },
				fileName: { facets: { whiteSpace: "replace" } },
				fileType: {
					required: !0,
					facets: {
						enumeration: [
							"SED",
							"SCC",
							"ICD",
							"IID",
							"CID",
							"SSD",
							"SCD"
						],
						pattern: ["[A-Z]{3}", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "replace"
					}
				},
				fileUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				headerId: { facets: { whiteSpace: "replace" } },
				revision: {
					required: !0,
					facets: { whiteSpace: "replace" }
				},
				version: {
					required: !0,
					facets: { whiteSpace: "replace" }
				},
				when: { facets: { whiteSpace: "replace" } }
			}
		},
		children: {
			sequence: ["SubCheckoutID"],
			details: { SubCheckoutID: { maxOccurs: 1 } }
		}
	},
	ClientLN: {
		tag: "ClientLN",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["RptEnabled"],
		attributes: {
			sequence: [
				"apRef",
				"desc",
				"iedName",
				"ldInst",
				"lnClass",
				"lnInst",
				"lnUuid",
				"prefix"
			],
			details: {
				apRef: {
					required: !0,
					facets: {
						pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
						maxLength: 32,
						whiteSpace: "replace"
					}
				},
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				iedName: {
					required: !0,
					facets: {
						pattern: [
							"[A-Za-z][0-9A-Za-z_]{0,2}",
							"[A-Za-z][0-9A-Za-z_]{4,63}",
							"[A-MO-Za-z][0-9A-Za-z_]{3}",
							"N[0-9A-Za-np-z_][0-9A-Za-z_]{2}",
							"No[0-9A-Za-mo-z_][0-9A-Za-z_]",
							"Non[0-9A-Za-df-z_]",
							"[A-Za-z][0-9A-Za-z_]*",
							"[A-Za-z_:][-.:0-9A-Z_a-z]*"
						],
						maxLength: 64,
						whiteSpace: "collapse"
					}
				},
				ldInst: {
					required: !0,
					facets: {
						pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
						maxLength: 64,
						whiteSpace: "replace"
					}
				},
				lnClass: {
					required: !0,
					facets: {
						enumeration: /* @__PURE__ */ "LLN0.LPHD.LCCH.LGOS.LSVS.LTIM.LTMS.LTRK.ANCR.ARCO.ARIS.ATCC.AVCO.CALH.CCGR.CILO.CPOW.CSWI.CSYN.FCNT.FCSD.FFIL.FLIM.FPID.FRMP.FSPT.FXOT.FXUT.GAPC.GGIO.GLOG.GSAL.IARC.IHMI.ISAF.ITCI.ITMI.ITPC.KFAN.KFIL.KPMP.KTNK.KVLV.MDIF.MENV.MFLK.MHAI.MHAN.MHYD.MMDC.MMET.MMTN.MMTR.MMXN.MMXU.MSQI.MSTA.PDIF.PDIR.PDIS.PDOP.PDUP.PFRC.PHAR.PHIZ.PIOC.PMRI.PMSS.POPF.PPAM.PRTR.PSCH.PSDE.PTEF.PTHF.PTOC.PTOF.PTOV.PTRC.PTTR.PTUC.PTUF.PTUV.PUPF.PVOC.PVPH.PZSU.QFVR.QITR.QIUB.QVTR.QVUB.QVVR.RADR.RBDR.RBRF.RDIR.RDRE.RDRS.RFLO.RMXU.RPSB.RREC.RSYN.SARC.SCBR.SIMG.SIML.SLTC.SOPM.SPDC.SPTR.SSWI.STMP.SVBR.TANG.TAXD.TCTR.TDST.TFLW.TFRQ.TGSN.THUM.TLVL.TMGF.TMVM.TPOS.TPRS.TRTN.TSND.TTMP.TTNS.TVBR.TVTR.TWPH.XCBR.XSWI.YEFN.YLTC.YPSH.YPTR.ZAXN.ZBAT.ZBSH.ZCAB.ZCAP.ZCON.ZGEN.ZGIL.ZLIN.ZMOT.ZREA.ZRES.ZRRC.ZSAR.ZSCR.ZSMC.ZTCF.ZTCR".split("."),
						pattern: [
							"[A-Z]+",
							"L[A-Z]*",
							"LLN0",
							"[A-Za-z_:][-.:0-9A-Z_a-z]*",
							"A[A-Z]*",
							"C[A-Z]*",
							"F[A-Z]*",
							"G[A-Z]*",
							"I[A-Z]*",
							"K[A-Z]*",
							"M[A-Z]*",
							"P[A-Z]*",
							"Q[A-Z]*",
							"R[A-Z]*",
							"S[A-Z]*",
							"T[A-Z]*",
							"X[A-Z]*",
							"Y[A-Z]*",
							"Z[A-Z]*"
						],
						length: 4,
						whiteSpace: "collapse"
					}
				},
				lnInst: {
					required: !0,
					facets: {
						pattern: ["[0-9]{1,12}"],
						maxLength: 0,
						whiteSpace: "replace"
					}
				},
				lnUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				prefix: {
					default: "",
					facets: {
						pattern: ["[A-Za-z][0-9A-Za-z_]*", ""],
						maxLength: 11,
						whiteSpace: "replace"
					}
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	ClientServices: {
		tag: "ClientServices",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [
				"acceptServerInitiatedAssociation",
				"bufReport",
				"goose",
				"gsse",
				"maxAttributes",
				"maxGOOSE",
				"maxReports",
				"maxSMV",
				"noIctBinding",
				"rGOOSE",
				"rSV",
				"readLog",
				"supportsLdName",
				"sv",
				"unbufReport"
			],
			details: {
				acceptServerInitiatedAssociation: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				bufReport: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				goose: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				gsse: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				maxAttributes: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} },
				maxGOOSE: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} },
				maxReports: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} },
				maxSMV: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} },
				noIctBinding: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				rGOOSE: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				rSV: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				readLog: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				supportsLdName: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				sv: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				unbufReport: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [
				"TimeSyncProt",
				"GOOSEMcSecurity",
				"SVMcSecurity",
				"Security"
			],
			details: {
				TimeSyncProt: { maxOccurs: 1 },
				GOOSEMcSecurity: { maxOccurs: 1 },
				SVMcSecurity: { maxOccurs: 1 },
				Security: { maxOccurs: 1 }
			}
		}
	},
	CommProt: {
		tag: "CommProt",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: ["ipv6"],
			details: { ipv6: {
				default: "false",
				facets: { whiteSpace: "collapse" }
			} }
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	Communication: {
		tag: "Communication",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["SCL"],
		attributes: {
			sequence: ["desc"],
			details: { desc: {
				default: "",
				facets: { whiteSpace: "replace" }
			} }
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"SubNetwork"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				SubNetwork: {
					required: !0,
					minOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueConnectedAP",
						selector: [{ steps: [{
							kind: "name",
							value: "ConnectedAP"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "apName",
							isAttribute: !0
						} }]
					}]
				}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueSubNetwork",
			selector: [{ steps: [{
				kind: "name",
				value: "SubNetwork"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
	},
	CommunicationServiceSpecifications: {
		tag: "CommunicationServiceSpecifications",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "The CommunicationServiceSpecifications is containing parameters used to create control blocks during implementation",
		parents: ["SubNetwork"],
		attributes: {
			sequence: ["desc"],
			details: { desc: {
				default: "",
				facets: { whiteSpace: "replace" }
			} }
		},
		children: {
			sequence: [
				"Text",
				"GooseParameters",
				"SMVParameters",
				"ReportParameters"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				GooseParameters: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				SMVParameters: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				ReportParameters: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				}
			},
			choices: [{ options: [
				"GooseParameters",
				"ReportParameters",
				"SMVParameters"
			] }]
		},
		constraints: [{
			kind: "key",
			name: "commServiceSpecKey",
			selector: [{ steps: [{ kind: "wildcard" }] }],
			fields: [{ target: {
				kind: "attribute",
				value: "id",
				isAttribute: !0
			} }]
		}]
	},
	ConductingEquipment: {
		tag: "ConductingEquipment",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: [
			"Bay",
			"SubFunction",
			"Function",
			"Line",
			"Process",
			"SubFunctionTemplate",
			"FunctionTemplate"
		],
		attributes: {
			sequence: [
				"desc",
				"name",
				"templateUuid",
				"type",
				"uuid",
				"virtual"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				type: {
					required: !0,
					facets: {
						enumeration: /* @__PURE__ */ "CBR.DIS.VTR.CTR.GEN.CAP.REA.CON.MOT.EFN.PSH.BAT.BSH.CAB.GIL.LIN.RES.RRC.SAR.TCF.TCR.IFL.FAN.SCR.SMC.PMP".split("."),
						pattern: ["E[A-Z]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 3,
						whiteSpace: "collapse"
					}
				},
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				virtual: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels",
				"LNode",
				"Terminal",
				"SubEquipment",
				"EqFunction",
				"ProcessResources",
				"Variable"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabel",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				LNode: {},
				Terminal: { maxOccurs: 2 },
				SubEquipment: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInSubEquipment",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInACESubEquipment",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				EqFunction: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInFuncForCE",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInFuncForCE",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				ProcessResources: {},
				Variable: {}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueLNodeInConductingEquipment",
			selector: [{ steps: [{
				kind: "name",
				value: "LNode"
			}] }],
			fields: [
				{ target: {
					kind: "attribute",
					value: "lnInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "iedName",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "ldInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "prefix",
					isAttribute: !0
				} }
			]
		}, {
			kind: "unique",
			name: "uniqueChildNameInCE",
			selector: [{ steps: [{
				kind: "name",
				value: "SubEquipment"
			}] }, { steps: [{
				kind: "name",
				value: "EqFunction"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
	},
	ConfDataSet: {
		tag: "ConfDataSet",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [
				"max",
				"maxAttributes",
				"modify"
			],
			details: {
				max: {
					required: !0,
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				},
				maxAttributes: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					minExclusive: 0,
					whiteSpace: "collapse"
				} },
				modify: {
					default: "true",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	ConfLNs: {
		tag: "ConfLNs",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: ["fixLnInst", "fixPrefix"],
			details: {
				fixLnInst: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				fixPrefix: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	ConfLdName: {
		tag: "ConfLdName",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	ConfLogControl: {
		tag: "ConfLogControl",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: ["max"],
			details: { max: {
				required: !0,
				facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					minExclusive: 0,
					whiteSpace: "collapse"
				}
			} }
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	ConfReportControl: {
		tag: "ConfReportControl",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [
				"bufConf",
				"bufMode",
				"max",
				"maxBuf"
			],
			details: {
				bufConf: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				bufMode: {
					default: "both",
					facets: {
						enumeration: [
							"unbuffered",
							"buffered",
							"both"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				max: {
					required: !0,
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				},
				maxBuf: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} }
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	ConfSG: {
		tag: "ConfSG",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["SettingGroups"],
		attributes: {
			sequence: ["resvTms"],
			details: { resvTms: {
				default: "false",
				facets: { whiteSpace: "collapse" }
			} }
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	ConfSigRef: {
		tag: "ConfSigRef",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: ["max"],
			details: { max: {
				required: !0,
				facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					minExclusive: 0,
					whiteSpace: "collapse"
				}
			} }
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	ConnectedAP: {
		tag: "ConnectedAP",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["SubNetwork"],
		attributes: {
			sequence: [
				"apName",
				"apUuid",
				"desc",
				"iedName",
				"redProt"
			],
			details: {
				apName: {
					required: !0,
					facets: {
						pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
						maxLength: 32,
						whiteSpace: "replace"
					}
				},
				apUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				iedName: {
					required: !0,
					facets: {
						pattern: [
							"[A-Za-z][0-9A-Za-z_]{0,2}",
							"[A-Za-z][0-9A-Za-z_]{4,63}",
							"[A-MO-Za-z][0-9A-Za-z_]{3}",
							"N[0-9A-Za-np-z_][0-9A-Za-z_]{2}",
							"No[0-9A-Za-mo-z_][0-9A-Za-z_]",
							"Non[0-9A-Za-df-z_]",
							"[A-Za-z][0-9A-Za-z_]*",
							"[A-Za-z_:][-.:0-9A-Z_a-z]*"
						],
						maxLength: 64,
						whiteSpace: "collapse"
					}
				},
				redProt: { facets: {
					enumeration: [
						"none",
						"hsr",
						"prp",
						"rstp"
					],
					pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					whiteSpace: "collapse"
				} }
			},
			identityFields: ["apName", "iedName"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Address",
				"GSE",
				"SMV",
				"PhysConn"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Address: { maxOccurs: 1 },
				GSE: {},
				SMV: {},
				PhysConn: { constraints: [{
					kind: "unique",
					name: "uniquePTypeInPhysConn",
					selector: [{ steps: [{
						kind: "name",
						value: "P"
					}] }],
					fields: [{ target: {
						kind: "attribute",
						value: "type",
						isAttribute: !0
					} }]
				}] }
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueGSEinConnectedAP",
			selector: [{ steps: [{
				kind: "name",
				value: "GSE"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "cbName",
				isAttribute: !0
			} }, { target: {
				kind: "attribute",
				value: "ldInst",
				isAttribute: !0
			} }]
		}, {
			kind: "unique",
			name: "uniqueSMVinConnectedAP",
			selector: [{ steps: [{
				kind: "name",
				value: "SMV"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "cbName",
				isAttribute: !0
			} }, { target: {
				kind: "attribute",
				value: "ldInst",
				isAttribute: !0
			} }]
		}]
	},
	ConnectivityNode: {
		tag: "ConnectivityNode",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Bay", "Line"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"pathName",
				"templateUuid",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				pathName: {
					required: !0,
					facets: {
						pattern: [".+/.+(/.+)*"],
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: ["pathName"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels",
				"LNode",
				"ProcessResources"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabel",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				LNode: {},
				ProcessResources: {}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueLNodeInConnectivityNode",
			selector: [{ steps: [{
				kind: "name",
				value: "LNode"
			}] }],
			fields: [
				{ target: {
					kind: "attribute",
					value: "lnInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "iedName",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "ldInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "prefix",
					isAttribute: !0
				} }
			]
		}]
	},
	ControlRef: {
		tag: "ControlRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Reference to a control data in the process",
		parents: ["LNodeOutputs"],
		attributes: {
			sequence: [
				"controlled",
				"controlledDoName",
				"controlledLNodeUuid",
				"desc",
				"extCtrlAddr",
				"extCtrlUuid",
				"originUuid",
				"output",
				"outputInst",
				"pDO",
				"pLN",
				"resourceName",
				"resourceUuid",
				"templateUuid",
				"uuid"
			],
			details: {
				controlled: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				controlledDoName: { facets: {
					pattern: ["[A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?"],
					whiteSpace: "replace"
				} },
				controlledLNodeUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				extCtrlAddr: { facets: { whiteSpace: "replace" } },
				extCtrlUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				originUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				output: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				outputInst: {
					default: "1",
					facets: {
						minInclusive: 1,
						whiteSpace: "collapse"
					}
				},
				pDO: { facets: { whiteSpace: "replace" } },
				pLN: { facets: { whiteSpace: "replace" } },
				resourceName: { facets: { whiteSpace: "replace" } },
				resourceUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: ["output", "outputInst"]
		},
		children: {
			sequence: [
				"Text",
				"BinaryWiringParametersRef",
				"AnalogueWiringParametersRef"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				BinaryWiringParametersRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				AnalogueWiringParametersRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				}
			},
			choices: [{
				options: ["AnalogueWiringParametersRef", "BinaryWiringParametersRef"],
				maxOccurs: 1
			}]
		}
	},
	ControllingLNode: {
		tag: "ControllingLNode",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		parents: [
			"DAS",
			"SDS",
			"DOS"
		],
		attributes: {
			sequence: [
				"desc",
				"outputName",
				"pLN",
				"resourceName",
				"resourceUuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				outputName: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				pLN: { facets: { whiteSpace: "replace" } },
				resourceName: { facets: { whiteSpace: "replace" } },
				resourceUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: [
				"Text",
				"BinaryWiringParametersRef",
				"AnalogueWiringParametersRef"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				BinaryWiringParametersRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				AnalogueWiringParametersRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				}
			},
			choices: [{
				options: ["AnalogueWiringParametersRef", "BinaryWiringParametersRef"],
				maxOccurs: 1
			}]
		}
	},
	DA: {
		tag: "DA",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["DOType"],
		attributes: {
			sequence: [
				"bType",
				"count",
				"dchg",
				"desc",
				"dupd",
				"fc",
				"name",
				"qchg",
				"sAddr",
				"type",
				"valImport",
				"valKind"
			],
			details: {
				bType: {
					required: !0,
					facets: {
						enumeration: /* @__PURE__ */ "BOOLEAN.INT8.INT16.INT24.INT32.INT64.INT128.INT8U.INT16U.INT24U.INT32U.FLOAT32.FLOAT64.Enum.Dbpos.Tcmd.Quality.Timestamp.VisString32.VisString64.VisString65.VisString129.VisString255.Octet64.Unicode255.Struct.EntryTime.Check.ObjRef.Currency.PhyComAddr.TrgOps.OptFlds.SvOptFlds.LogOptFlds.EntryID.Octet6.Octet16".split("."),
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				count: {
					default: "0",
					facets: {
						enumeration: [
							"T",
							"Test",
							"Check",
							"SIUnit",
							"Oper",
							"SBO",
							"SBOw",
							"Cancel",
							"Addr",
							"PRIORITY",
							"VID",
							"APPID",
							"TransportInUse",
							"IPClassOfTraffic",
							"IPv6FlowLabel",
							"IPAddressLength",
							"IPAddress"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*", "[a-z][0-9A-Za-z]*"],
						maxLength: 60,
						minInclusive: 0,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				},
				dchg: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				dupd: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				fc: {
					required: !0,
					facets: {
						enumeration: [
							"ST",
							"MX",
							"CO",
							"SP",
							"SG",
							"SE",
							"SV",
							"CF",
							"DC",
							"EX",
							"SR",
							"BL",
							"OR"
						],
						pattern: ["[A-Z]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1,
						maxLength: 2,
						whiteSpace: "collapse"
					}
				},
				name: {
					required: !0,
					facets: {
						enumeration: [
							"T",
							"Test",
							"Check",
							"SIUnit",
							"Oper",
							"SBO",
							"SBOw",
							"Cancel",
							"Addr",
							"PRIORITY",
							"VID",
							"APPID",
							"TransportInUse",
							"IPClassOfTraffic",
							"IPv6FlowLabel",
							"IPAddressLength",
							"IPAddress"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*", "[a-z][0-9A-Za-z]*"],
						maxLength: 60,
						whiteSpace: "collapse"
					}
				},
				qchg: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				sAddr: { facets: {
					maxLength: 255,
					whiteSpace: "replace"
				} },
				type: { facets: { whiteSpace: "replace" } },
				valImport: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				valKind: {
					default: "Set",
					facets: {
						enumeration: [
							"Spec",
							"Conf",
							"RO",
							"Set"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				}
			}
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Val",
				"Labels",
				"ProtNs"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Val: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabelInDA",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				ProtNs: {}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueProtNsInDA",
			selector: [{ steps: [{
				kind: "name",
				value: "ProtNs"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "type",
				isAttribute: !0
			} }, { target: {
				kind: "element",
				value: "."
			} }]
		}]
	},
	DAI: {
		tag: "DAI",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["SDI", "DOI"],
		attributes: {
			sequence: [
				"desc",
				"ix",
				"name",
				"sAddr",
				"valImport",
				"valKind"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				ix: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} },
				name: {
					required: !0,
					facets: {
						enumeration: [
							"T",
							"Test",
							"Check",
							"SIUnit",
							"Oper",
							"SBO",
							"SBOw",
							"Cancel",
							"Addr",
							"PRIORITY",
							"VID",
							"APPID",
							"TransportInUse",
							"IPClassOfTraffic",
							"IPv6FlowLabel",
							"IPAddressLength",
							"IPAddress"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*", "[a-z][0-9A-Za-z]*"],
						maxLength: 60,
						whiteSpace: "collapse"
					}
				},
				sAddr: { facets: {
					maxLength: 255,
					whiteSpace: "replace"
				} },
				valImport: { facets: { whiteSpace: "collapse" } },
				valKind: { facets: {
					enumeration: [
						"Spec",
						"Conf",
						"RO",
						"Set"
					],
					pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					whiteSpace: "collapse"
				} }
			},
			identityFields: ["ix", "name"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Val",
				"Labels"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Val: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabelinDAI",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				}
			}
		}
	},
	DAS: {
		tag: "DAS",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Specification of a Data attribute",
		parents: ["SDS", "DOS"],
		attributes: {
			sequence: [
				"desc",
				"ix",
				"mappedDaName",
				"mappedLnUuid",
				"name",
				"valImport",
				"valKind"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				ix: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} },
				mappedDaName: { facets: {
					pattern: ["(([A-Za-z][0-9A-Za-z_]{0,63})/([A-Za-z][0-9A-Za-z_]{0,63})/((LLN0|([A-Za-z][0-9A-Za-z_]{0,10})?[A-Z]{4}[0-9]{1,12}))\\.)?([A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?)\\.([a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?(\\.[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?)*)"],
					whiteSpace: "replace"
				} },
				mappedLnUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				name: {
					required: !0,
					facets: {
						enumeration: [
							"T",
							"Test",
							"Check",
							"SIUnit",
							"Oper",
							"SBO",
							"SBOw",
							"Cancel",
							"Addr",
							"PRIORITY",
							"VID",
							"APPID",
							"TransportInUse",
							"IPClassOfTraffic",
							"IPv6FlowLabel",
							"IPAddressLength",
							"IPAddress"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*", "[a-z][0-9A-Za-z]*"],
						maxLength: 60,
						whiteSpace: "collapse"
					}
				},
				valImport: { facets: { whiteSpace: "collapse" } },
				valKind: { facets: {
					enumeration: [
						"Spec",
						"Conf",
						"RO",
						"Set"
					],
					pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					whiteSpace: "collapse"
				} }
			},
			identityFields: ["ix", "name"]
		},
		children: {
			sequence: [
				"Text",
				"SubscriberLNode",
				"ControllingLNode",
				"ProcessEcho",
				"LogParametersRef",
				"Val",
				"Labels"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				SubscriberLNode: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				ControllingLNode: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				ProcessEcho: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				LogParametersRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				Val: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabelInDAS",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				}
			},
			choices: [{ options: [
				"ControllingLNode",
				"Labels",
				"LogParametersRef",
				"ProcessEcho",
				"SubscriberLNode",
				"Val"
			] }]
		}
	},
	DAType: {
		tag: "DAType",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["DataTypeTemplates"],
		attributes: {
			sequence: [
				"desc",
				"id",
				"iedType"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				id: {
					required: !0,
					facets: {
						pattern: ["\\S+"],
						minLength: 1,
						maxLength: 255,
						whiteSpace: "collapse"
					}
				},
				iedType: {
					default: "",
					facets: { whiteSpace: "replace" }
				}
			},
			identityFields: ["id"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"BDA",
				"ProtNs",
				"Labels"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				BDA: {
					required: !0,
					minOccurs: 1
				},
				ProtNs: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabelInDAType",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueBDAInDAType",
			selector: [{ steps: [{
				kind: "name",
				value: "BDA"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}, {
			kind: "unique",
			name: "uniqueProtNs",
			selector: [{ steps: [{
				kind: "name",
				value: "ProtNs"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "type",
				isAttribute: !0
			} }, { target: {
				kind: "element",
				value: "."
			} }]
		}]
	},
	DO: {
		tag: "DO",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["LNodeType"],
		attributes: {
			sequence: [
				"accessControl",
				"desc",
				"name",
				"transient",
				"type"
			],
			details: {
				accessControl: { facets: { whiteSpace: "replace" } },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						pattern: ["[A-Z][0-9A-Za-z]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						maxLength: 12,
						whiteSpace: "collapse"
					}
				},
				transient: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				type: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabelInDO",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				}
			}
		}
	},
	DOI: {
		tag: "DOI",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["LN0", "LN"],
		attributes: {
			sequence: [
				"accessControl",
				"desc",
				"ix",
				"name"
			],
			details: {
				accessControl: { facets: { whiteSpace: "replace" } },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				ix: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} },
				name: {
					required: !0,
					facets: {
						pattern: ["[A-Z][0-9A-Za-z]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						maxLength: 12,
						whiteSpace: "collapse"
					}
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"SDI",
				"DAI",
				"Labels"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				SDI: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueSDI_DAIinSDI",
						selector: [{ steps: [{
							kind: "name",
							value: "DAI"
						}] }, { steps: [{
							kind: "name",
							value: "SDI"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "ix",
							isAttribute: !0
						} }]
					}]
				},
				DAI: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabelinDOI",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				}
			},
			choices: [{ options: ["DAI", "SDI"] }]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueSDI_DAIinDOI",
			selector: [{ steps: [{
				kind: "name",
				value: "DAI"
			}] }, { steps: [{
				kind: "name",
				value: "SDI"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }, { target: {
				kind: "attribute",
				value: "ix",
				isAttribute: !0
			} }]
		}]
	},
	DOS: {
		tag: "DOS",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Data Object specification. To be added to LNode SCL element",
		parents: ["LNode"],
		attributes: {
			sequence: [
				"desc",
				"mappedDoName",
				"mappedLnUuid",
				"name"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				mappedDoName: { facets: {
					pattern: ["(([A-Za-z][0-9A-Za-z_]{0,63})/([A-Za-z][0-9A-Za-z_]{0,63})/((LLN0|([A-Za-z][0-9A-Za-z_]{0,10})?[A-Z]{4}[0-9]{1,12}))\\.)?([A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?)"],
					whiteSpace: "replace"
				} },
				mappedLnUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				name: {
					required: !0,
					facets: {
						pattern: ["[A-Z][0-9A-Za-z]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						maxLength: 12,
						whiteSpace: "collapse"
					}
				}
			}
		},
		children: {
			sequence: [
				"Text",
				"SDS",
				"DAS",
				"SubscriberLNode",
				"ControllingLNode",
				"ProcessEcho",
				"LogParametersRef",
				"Labels"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				SDS: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueSDS_DASinSDS",
						selector: [{ steps: [{
							kind: "name",
							value: "DAS"
						}] }, { steps: [{
							kind: "name",
							value: "SDS"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "ix",
							isAttribute: !0
						} }]
					}]
				},
				DAS: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				SubscriberLNode: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				ControllingLNode: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				ProcessEcho: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				LogParametersRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabelInDOS",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				}
			},
			choices: [{ options: [
				"ControllingLNode",
				"DAS",
				"LogParametersRef",
				"ProcessEcho",
				"SDS",
				"SubscriberLNode"
			] }]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueSDS_DASinDOS",
			selector: [{ steps: [{
				kind: "name",
				value: "DAS"
			}] }, { steps: [{
				kind: "name",
				value: "SDS"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }, { target: {
				kind: "attribute",
				value: "ix",
				isAttribute: !0
			} }]
		}]
	},
	DOType: {
		tag: "DOType",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["DataTypeTemplates"],
		attributes: {
			sequence: [
				"cdc",
				"desc",
				"id",
				"iedType"
			],
			details: {
				cdc: {
					required: !0,
					facets: {
						enumeration: /* @__PURE__ */ "SPS.DPS.INS.ENS.ACT.ACD.SEC.BCR.HST.VSS.MV.CMV.SAV.WYE.DEL.SEQ.HMV.HWYE.HDEL.SPC.DPC.INC.ENC.BSC.ISC.APC.BAC.SPG.ING.ENG.ORG.TSG.CUG.VSG.ASG.CURVE.CSG.DPL.LPL.CSD.CST.BTS.UTS.LTS.GTS.MTS.NTS.STS.CTS.OTS.VSD.ORS.TCS".split("."),
						pattern: ["[A-Za-z]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1,
						maxLength: 5,
						whiteSpace: "collapse"
					}
				},
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				id: {
					required: !0,
					facets: {
						pattern: ["\\S+"],
						minLength: 1,
						maxLength: 255,
						whiteSpace: "collapse"
					}
				},
				iedType: {
					default: "",
					facets: { whiteSpace: "replace" }
				}
			},
			identityFields: ["id"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"SDO",
				"DA",
				"Labels"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				SDO: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				DA: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueProtNsInDA",
						selector: [{ steps: [{
							kind: "name",
							value: "ProtNs"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "type",
							isAttribute: !0
						} }, { target: {
							kind: "element",
							value: "."
						} }]
					}]
				},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabelInDOType",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				}
			},
			choices: [{ options: ["DA", "SDO"] }]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueDAorSDOInDOType",
			selector: [{ steps: [{ kind: "wildcard" }] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
	},
	DataObjectDirectory: {
		tag: "DataObjectDirectory",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	DataSet: {
		tag: "DataSet",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["LN0", "LN"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"templateUuid",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						pattern: ["[A-Za-z][0-9A-Za-z_]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						maxLength: 32,
						whiteSpace: "collapse"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"FCDA"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				FCDA: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				}
			},
			choices: [{
				options: ["FCDA"],
				minOccurs: 1
			}]
		}
	},
	DataSetDirectory: {
		tag: "DataSetDirectory",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	DataTypeTemplates: {
		tag: "DataTypeTemplates",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["SCL"],
		attributes: {
			sequence: [],
			details: {},
			identityFields: ["id", "lnClass"]
		},
		children: {
			sequence: [
				"LNodeType",
				"DOType",
				"DAType",
				"EnumType"
			],
			details: {
				LNodeType: {
					required: !0,
					minOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueDOInLNodeType",
						selector: [{ steps: [{
							kind: "name",
							value: "DO"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					}]
				},
				DOType: {
					required: !0,
					minOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueDAorSDOInDOType",
						selector: [{ steps: [{ kind: "wildcard" }] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					}]
				},
				DAType: { constraints: [{
					kind: "unique",
					name: "uniqueBDAInDAType",
					selector: [{ steps: [{
						kind: "name",
						value: "BDA"
					}] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}, {
					kind: "unique",
					name: "uniqueProtNs",
					selector: [{ steps: [{
						kind: "name",
						value: "ProtNs"
					}] }],
					fields: [{ target: {
						kind: "attribute",
						value: "type",
						isAttribute: !0
					} }, { target: {
						kind: "element",
						value: "."
					} }]
				}] },
				EnumType: { constraints: [{
					kind: "unique",
					name: "uniqueOrdInEnumType",
					selector: [{ steps: [{
						kind: "name",
						value: "EnumVal"
					}] }],
					fields: [{ target: {
						kind: "attribute",
						value: "ord",
						isAttribute: !0
					} }]
				}, {
					kind: "unique",
					name: "uniqueEnumValue",
					selector: [{ steps: [{
						kind: "name",
						value: "EnumVal"
					}] }],
					fields: [{ target: {
						kind: "element",
						value: "."
					} }]
				}] }
			}
		},
		constraints: [
			{
				kind: "key",
				name: "DOTypeKey",
				selector: [{ steps: [{
					kind: "name",
					value: "DOType"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "id",
					isAttribute: !0
				} }]
			},
			{
				kind: "keyref",
				name: "ref2DOType",
				refer: "DOTypeKey",
				selector: [{ steps: [{
					kind: "name",
					value: "LNodeType"
				}, {
					kind: "name",
					value: "DO"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "type",
					isAttribute: !0
				} }]
			},
			{
				kind: "keyref",
				name: "ref2DOTypeForSDO",
				refer: "DOTypeKey",
				selector: [{ steps: [{
					kind: "name",
					value: "DOType"
				}, {
					kind: "name",
					value: "SDO"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "type",
					isAttribute: !0
				} }]
			},
			{
				kind: "unique",
				name: "uniqueDTT_ID",
				selector: [{ steps: [{ kind: "wildcard" }] }],
				fields: [{ target: {
					kind: "attribute",
					value: "id",
					isAttribute: !0
				} }]
			},
			{
				kind: "key",
				name: "EnumTypeDATypeKey",
				selector: [{ steps: [{
					kind: "name",
					value: "DAType"
				}] }, { steps: [{
					kind: "name",
					value: "EnumType"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "id",
					isAttribute: !0
				} }]
			},
			{
				kind: "keyref",
				name: "ref2EnumTypeDAType",
				refer: "EnumTypeDATypeKey",
				selector: [{ steps: [{
					kind: "name",
					value: "DOType"
				}, {
					kind: "name",
					value: "DA"
				}] }, { steps: [{
					kind: "name",
					value: "DAType"
				}, {
					kind: "name",
					value: "BDA"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "type",
					isAttribute: !0
				} }]
			}
		]
	},
	DynAssociation: {
		tag: "DynAssociation",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: ["max"],
			details: { max: { facets: {
				minInclusive: 0,
				maxInclusive: 4294967295,
				whiteSpace: "collapse"
			} } }
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	DynDataSet: {
		tag: "DynDataSet",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: ["max", "maxAttributes"],
			details: {
				max: {
					required: !0,
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				},
				maxAttributes: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					minExclusive: 0,
					whiteSpace: "collapse"
				} }
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	EnumType: {
		tag: "EnumType",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["DataTypeTemplates"],
		attributes: {
			sequence: ["desc", "id"],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				id: {
					required: !0,
					facets: {
						pattern: ["\\S+"],
						minLength: 1,
						maxLength: 255,
						whiteSpace: "collapse"
					}
				}
			},
			identityFields: ["id"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"EnumVal"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				EnumVal: {
					required: !0,
					minOccurs: 1
				}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueOrdInEnumType",
			selector: [{ steps: [{
				kind: "name",
				value: "EnumVal"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "ord",
				isAttribute: !0
			} }]
		}, {
			kind: "unique",
			name: "uniqueEnumValue",
			selector: [{ steps: [{
				kind: "name",
				value: "EnumVal"
			}] }],
			fields: [{ target: {
				kind: "element",
				value: "."
			} }]
		}]
	},
	EnumVal: {
		tag: "EnumVal",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["EnumType"],
		attributes: {
			sequence: ["desc", "ord"],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				ord: {
					required: !0,
					facets: {
						minInclusive: -2147483648,
						maxInclusive: 2147483647,
						whiteSpace: "collapse"
					}
				}
			},
			identityFields: ["ord"]
		},
		children: {
			sequence: [],
			details: {}
		},
		textContent: { facets: {
			pattern: ["[\\x00-\\x7f\\x80-\\xff]*"],
			maxLength: 127,
			whiteSpace: "replace"
		} }
	},
	EqFunction: {
		tag: "EqFunction",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: [
			"SubEquipment",
			"GeneralEquipment",
			"TapChanger",
			"TransformerWinding",
			"PowerTransformer",
			"ConductingEquipment"
		],
		attributes: {
			sequence: [
				"desc",
				"name",
				"templateUuid",
				"type",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				type: { facets: { whiteSpace: "replace" } },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels",
				"LNode",
				"GeneralEquipment",
				"EqSubFunction",
				"BehaviorDescription",
				"FunctionSclRef",
				"PowerSystemRelations",
				"ProcessResources",
				"Variable"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabel",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				LNode: {},
				GeneralEquipment: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInGeneralEquipmentOfFuncForEquipment",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInGEFuncForEquipment",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				EqSubFunction: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInSubFuncForEquipment",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueSubFuncForEquipment",
					selector: [{ steps: [{
						kind: "name",
						value: "EqSubFunction"
					}] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				BehaviorDescription: {},
				FunctionSclRef: {},
				PowerSystemRelations: {},
				ProcessResources: {},
				Variable: {}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueLNodeInFuncForSubEq",
			selector: [{ steps: [{
				kind: "name",
				value: "LNode"
			}] }],
			fields: [
				{ target: {
					kind: "attribute",
					value: "lnInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "iedName",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "ldInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "prefix",
					isAttribute: !0
				} }
			]
		}, {
			kind: "unique",
			name: "uniqueChildNameInFuncForSubEq",
			selector: [{ steps: [{ kind: "wildcard" }] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
	},
	EqSubFunction: {
		tag: "EqSubFunction",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["EqFunction", "EqSubFunction"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"templateUuid",
				"type",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				type: { facets: { whiteSpace: "replace" } },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels",
				"LNode",
				"GeneralEquipment",
				"EqSubFunction",
				"BehaviorDescription",
				"FunctionSclRef",
				"PowerSystemRelations",
				"ProcessResources",
				"Variable"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabel",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				LNode: {},
				GeneralEquipment: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInGeneralEquipmentOfFuncForEquipment",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInGEFuncForEquipment",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				EqSubFunction: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInSubFuncForEquipment",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueSubFuncForEquipment",
					selector: [{ steps: [{
						kind: "name",
						value: "EqSubFunction"
					}] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				BehaviorDescription: {},
				FunctionSclRef: {},
				PowerSystemRelations: {},
				ProcessResources: {},
				Variable: {}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueLNodeInSubFuncForEquipment",
			selector: [{ steps: [{
				kind: "name",
				value: "LNode"
			}] }],
			fields: [
				{ target: {
					kind: "attribute",
					value: "lnInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "iedName",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "ldInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "prefix",
					isAttribute: !0
				} }
			]
		}, {
			kind: "unique",
			name: "uniqueSubFuncForEquipment",
			selector: [{ steps: [{
				kind: "name",
				value: "EqSubFunction"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
	},
	ExtCtrl: {
		tag: "ExtCtrl",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Outputs"],
		attributes: {
			sequence: [
				"apRef",
				"checkInterlock",
				"checkSynchrocheck",
				"desc",
				"doName",
				"iedName",
				"intAddr",
				"ldInst",
				"lnClass",
				"lnInst",
				"lnUuid",
				"pDO",
				"pLN",
				"prefix",
				"templateUuid",
				"uuid"
			],
			details: {
				apRef: { facets: {
					pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
					maxLength: 32,
					whiteSpace: "replace"
				} },
				checkInterlock: {
					default: "true",
					facets: {
						enumeration: [
							"true",
							"false",
							"conserve"
						],
						whiteSpace: "replace"
					}
				},
				checkSynchrocheck: {
					default: "true",
					facets: {
						enumeration: [
							"true",
							"false",
							"conserve"
						],
						whiteSpace: "replace"
					}
				},
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				doName: { facets: {
					pattern: ["[A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?"],
					whiteSpace: "replace"
				} },
				iedName: { facets: {
					pattern: [
						"[A-Za-z][0-9A-Za-z_]{0,2}",
						"[A-Za-z][0-9A-Za-z_]{4,63}",
						"[A-MO-Za-z][0-9A-Za-z_]{3}",
						"N[0-9A-Za-np-z_][0-9A-Za-z_]{2}",
						"No[0-9A-Za-mo-z_][0-9A-Za-z_]",
						"Non[0-9A-Za-df-z_]",
						"@",
						"[A-Za-z][0-9A-Za-z_]*",
						"[A-Za-z_:][-.:0-9A-Z_a-z]*"
					],
					maxLength: 64,
					whiteSpace: "replace"
				} },
				intAddr: { facets: { whiteSpace: "replace" } },
				ldInst: { facets: {
					pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
					maxLength: 64,
					whiteSpace: "replace"
				} },
				lnClass: { facets: {
					enumeration: /* @__PURE__ */ "LLN0.LPHD.LCCH.LGOS.LSVS.LTIM.LTMS.LTRK.ANCR.ARCO.ARIS.ATCC.AVCO.CALH.CCGR.CILO.CPOW.CSWI.CSYN.FCNT.FCSD.FFIL.FLIM.FPID.FRMP.FSPT.FXOT.FXUT.GAPC.GGIO.GLOG.GSAL.IARC.IHMI.ISAF.ITCI.ITMI.ITPC.KFAN.KFIL.KPMP.KTNK.KVLV.MDIF.MENV.MFLK.MHAI.MHAN.MHYD.MMDC.MMET.MMTN.MMTR.MMXN.MMXU.MSQI.MSTA.PDIF.PDIR.PDIS.PDOP.PDUP.PFRC.PHAR.PHIZ.PIOC.PMRI.PMSS.POPF.PPAM.PRTR.PSCH.PSDE.PTEF.PTHF.PTOC.PTOF.PTOV.PTRC.PTTR.PTUC.PTUF.PTUV.PUPF.PVOC.PVPH.PZSU.QFVR.QITR.QIUB.QVTR.QVUB.QVVR.RADR.RBDR.RBRF.RDIR.RDRE.RDRS.RFLO.RMXU.RPSB.RREC.RSYN.SARC.SCBR.SIMG.SIML.SLTC.SOPM.SPDC.SPTR.SSWI.STMP.SVBR.TANG.TAXD.TCTR.TDST.TFLW.TFRQ.TGSN.THUM.TLVL.TMGF.TMVM.TPOS.TPRS.TRTN.TSND.TTMP.TTNS.TVBR.TVTR.TWPH.XCBR.XSWI.YEFN.YLTC.YPSH.YPTR.ZAXN.ZBAT.ZBSH.ZCAB.ZCAP.ZCON.ZGEN.ZGIL.ZLIN.ZMOT.ZREA.ZRES.ZRRC.ZSAR.ZSCR.ZSMC.ZTCF.ZTCR".split("."),
					pattern: [
						"[A-Z]+",
						"L[A-Z]*",
						"LLN0",
						"[A-Za-z_:][-.:0-9A-Z_a-z]*",
						"A[A-Z]*",
						"C[A-Z]*",
						"F[A-Z]*",
						"G[A-Z]*",
						"I[A-Z]*",
						"K[A-Z]*",
						"M[A-Z]*",
						"P[A-Z]*",
						"Q[A-Z]*",
						"R[A-Z]*",
						"S[A-Z]*",
						"T[A-Z]*",
						"X[A-Z]*",
						"Y[A-Z]*",
						"Z[A-Z]*"
					],
					length: 4,
					whiteSpace: "collapse"
				} },
				lnInst: { facets: {
					pattern: ["[0-9]{1,12}"],
					whiteSpace: "replace"
				} },
				lnUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				pDO: { facets: {
					pattern: ["[A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?"],
					whiteSpace: "replace"
				} },
				pLN: { facets: {
					enumeration: /* @__PURE__ */ "LLN0.LPHD.LCCH.LGOS.LSVS.LTIM.LTMS.LTRK.ANCR.ARCO.ARIS.ATCC.AVCO.CALH.CCGR.CILO.CPOW.CSWI.CSYN.FCNT.FCSD.FFIL.FLIM.FPID.FRMP.FSPT.FXOT.FXUT.GAPC.GGIO.GLOG.GSAL.IARC.IHMI.ISAF.ITCI.ITMI.ITPC.KFAN.KFIL.KPMP.KTNK.KVLV.MDIF.MENV.MFLK.MHAI.MHAN.MHYD.MMDC.MMET.MMTN.MMTR.MMXN.MMXU.MSQI.MSTA.PDIF.PDIR.PDIS.PDOP.PDUP.PFRC.PHAR.PHIZ.PIOC.PMRI.PMSS.POPF.PPAM.PRTR.PSCH.PSDE.PTEF.PTHF.PTOC.PTOF.PTOV.PTRC.PTTR.PTUC.PTUF.PTUV.PUPF.PVOC.PVPH.PZSU.QFVR.QITR.QIUB.QVTR.QVUB.QVVR.RADR.RBDR.RBRF.RDIR.RDRE.RDRS.RFLO.RMXU.RPSB.RREC.RSYN.SARC.SCBR.SIMG.SIML.SLTC.SOPM.SPDC.SPTR.SSWI.STMP.SVBR.TANG.TAXD.TCTR.TDST.TFLW.TFRQ.TGSN.THUM.TLVL.TMGF.TMVM.TPOS.TPRS.TRTN.TSND.TTMP.TTNS.TVBR.TVTR.TWPH.XCBR.XSWI.YEFN.YLTC.YPSH.YPTR.ZAXN.ZBAT.ZBSH.ZCAB.ZCAP.ZCON.ZGEN.ZGIL.ZLIN.ZMOT.ZREA.ZRES.ZRRC.ZSAR.ZSCR.ZSMC.ZTCF.ZTCR".split("."),
					pattern: [
						"[A-Z]+",
						"L[A-Z]*",
						"LLN0",
						"[A-Za-z_:][-.:0-9A-Z_a-z]*",
						"A[A-Z]*",
						"C[A-Z]*",
						"F[A-Z]*",
						"G[A-Z]*",
						"I[A-Z]*",
						"K[A-Z]*",
						"M[A-Z]*",
						"P[A-Z]*",
						"Q[A-Z]*",
						"R[A-Z]*",
						"S[A-Z]*",
						"T[A-Z]*",
						"X[A-Z]*",
						"Y[A-Z]*",
						"Z[A-Z]*"
					],
					length: 4,
					whiteSpace: "collapse"
				} },
				prefix: { facets: {
					pattern: ["[A-Za-z][0-9A-Za-z_]*", ""],
					maxLength: 11,
					whiteSpace: "replace"
				} },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: ["Text", "Private"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {}
			}
		}
	},
	ExtRef: {
		tag: "ExtRef",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Inputs"],
		attributes: {
			sequence: [
				"daName",
				"desc",
				"doName",
				"iedName",
				"intAddr",
				"ldInst",
				"lnClass",
				"lnInst",
				"lnUuid",
				"pDA",
				"pDO",
				"pLN",
				"pServT",
				"prefix",
				"serviceType",
				"srcCBName",
				"srcCBUuid",
				"srcLDInst",
				"srcLNClass",
				"srcLNInst",
				"srcPrefix",
				"templateUuid",
				"uuid"
			],
			details: {
				daName: { facets: {
					pattern: ["[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?(\\.[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?)*"],
					whiteSpace: "replace"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				doName: { facets: {
					pattern: ["[A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?"],
					whiteSpace: "replace"
				} },
				iedName: { facets: {
					pattern: [
						"[A-Za-z][0-9A-Za-z_]{0,2}",
						"[A-Za-z][0-9A-Za-z_]{4,63}",
						"[A-MO-Za-z][0-9A-Za-z_]{3}",
						"N[0-9A-Za-np-z_][0-9A-Za-z_]{2}",
						"No[0-9A-Za-mo-z_][0-9A-Za-z_]",
						"Non[0-9A-Za-df-z_]",
						"@",
						"[A-Za-z][0-9A-Za-z_]*",
						"[A-Za-z_:][-.:0-9A-Z_a-z]*"
					],
					maxLength: 64,
					whiteSpace: "replace"
				} },
				intAddr: { facets: { whiteSpace: "replace" } },
				ldInst: { facets: {
					pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
					maxLength: 64,
					whiteSpace: "replace"
				} },
				lnClass: { facets: {
					enumeration: /* @__PURE__ */ "LLN0.LPHD.LCCH.LGOS.LSVS.LTIM.LTMS.LTRK.ANCR.ARCO.ARIS.ATCC.AVCO.CALH.CCGR.CILO.CPOW.CSWI.CSYN.FCNT.FCSD.FFIL.FLIM.FPID.FRMP.FSPT.FXOT.FXUT.GAPC.GGIO.GLOG.GSAL.IARC.IHMI.ISAF.ITCI.ITMI.ITPC.KFAN.KFIL.KPMP.KTNK.KVLV.MDIF.MENV.MFLK.MHAI.MHAN.MHYD.MMDC.MMET.MMTN.MMTR.MMXN.MMXU.MSQI.MSTA.PDIF.PDIR.PDIS.PDOP.PDUP.PFRC.PHAR.PHIZ.PIOC.PMRI.PMSS.POPF.PPAM.PRTR.PSCH.PSDE.PTEF.PTHF.PTOC.PTOF.PTOV.PTRC.PTTR.PTUC.PTUF.PTUV.PUPF.PVOC.PVPH.PZSU.QFVR.QITR.QIUB.QVTR.QVUB.QVVR.RADR.RBDR.RBRF.RDIR.RDRE.RDRS.RFLO.RMXU.RPSB.RREC.RSYN.SARC.SCBR.SIMG.SIML.SLTC.SOPM.SPDC.SPTR.SSWI.STMP.SVBR.TANG.TAXD.TCTR.TDST.TFLW.TFRQ.TGSN.THUM.TLVL.TMGF.TMVM.TPOS.TPRS.TRTN.TSND.TTMP.TTNS.TVBR.TVTR.TWPH.XCBR.XSWI.YEFN.YLTC.YPSH.YPTR.ZAXN.ZBAT.ZBSH.ZCAB.ZCAP.ZCON.ZGEN.ZGIL.ZLIN.ZMOT.ZREA.ZRES.ZRRC.ZSAR.ZSCR.ZSMC.ZTCF.ZTCR".split("."),
					pattern: [
						"[A-Z]+",
						"L[A-Z]*",
						"LLN0",
						"[A-Za-z_:][-.:0-9A-Z_a-z]*",
						"A[A-Z]*",
						"C[A-Z]*",
						"F[A-Z]*",
						"G[A-Z]*",
						"I[A-Z]*",
						"K[A-Z]*",
						"M[A-Z]*",
						"P[A-Z]*",
						"Q[A-Z]*",
						"R[A-Z]*",
						"S[A-Z]*",
						"T[A-Z]*",
						"X[A-Z]*",
						"Y[A-Z]*",
						"Z[A-Z]*"
					],
					length: 4,
					whiteSpace: "collapse"
				} },
				lnInst: { facets: {
					pattern: ["[0-9]{1,12}"],
					whiteSpace: "replace"
				} },
				lnUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				pDA: { facets: {
					pattern: ["[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?(\\.[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?)*"],
					whiteSpace: "replace"
				} },
				pDO: { facets: {
					pattern: ["[A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?"],
					whiteSpace: "replace"
				} },
				pLN: { facets: {
					enumeration: /* @__PURE__ */ "LLN0.LPHD.LCCH.LGOS.LSVS.LTIM.LTMS.LTRK.ANCR.ARCO.ARIS.ATCC.AVCO.CALH.CCGR.CILO.CPOW.CSWI.CSYN.FCNT.FCSD.FFIL.FLIM.FPID.FRMP.FSPT.FXOT.FXUT.GAPC.GGIO.GLOG.GSAL.IARC.IHMI.ISAF.ITCI.ITMI.ITPC.KFAN.KFIL.KPMP.KTNK.KVLV.MDIF.MENV.MFLK.MHAI.MHAN.MHYD.MMDC.MMET.MMTN.MMTR.MMXN.MMXU.MSQI.MSTA.PDIF.PDIR.PDIS.PDOP.PDUP.PFRC.PHAR.PHIZ.PIOC.PMRI.PMSS.POPF.PPAM.PRTR.PSCH.PSDE.PTEF.PTHF.PTOC.PTOF.PTOV.PTRC.PTTR.PTUC.PTUF.PTUV.PUPF.PVOC.PVPH.PZSU.QFVR.QITR.QIUB.QVTR.QVUB.QVVR.RADR.RBDR.RBRF.RDIR.RDRE.RDRS.RFLO.RMXU.RPSB.RREC.RSYN.SARC.SCBR.SIMG.SIML.SLTC.SOPM.SPDC.SPTR.SSWI.STMP.SVBR.TANG.TAXD.TCTR.TDST.TFLW.TFRQ.TGSN.THUM.TLVL.TMGF.TMVM.TPOS.TPRS.TRTN.TSND.TTMP.TTNS.TVBR.TVTR.TWPH.XCBR.XSWI.YEFN.YLTC.YPSH.YPTR.ZAXN.ZBAT.ZBSH.ZCAB.ZCAP.ZCON.ZGEN.ZGIL.ZLIN.ZMOT.ZREA.ZRES.ZRRC.ZSAR.ZSCR.ZSMC.ZTCF.ZTCR".split("."),
					pattern: [
						"[A-Z]+",
						"L[A-Z]*",
						"LLN0",
						"[A-Za-z_:][-.:0-9A-Z_a-z]*",
						"A[A-Z]*",
						"C[A-Z]*",
						"F[A-Z]*",
						"G[A-Z]*",
						"I[A-Z]*",
						"K[A-Z]*",
						"M[A-Z]*",
						"P[A-Z]*",
						"Q[A-Z]*",
						"R[A-Z]*",
						"S[A-Z]*",
						"T[A-Z]*",
						"X[A-Z]*",
						"Y[A-Z]*",
						"Z[A-Z]*"
					],
					length: 4,
					whiteSpace: "collapse"
				} },
				pServT: { facets: {
					enumeration: [
						"Poll",
						"Report",
						"GOOSE",
						"SMV"
					],
					pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					whiteSpace: "collapse"
				} },
				prefix: { facets: {
					pattern: ["[A-Za-z][0-9A-Za-z_]*", ""],
					maxLength: 11,
					whiteSpace: "replace"
				} },
				serviceType: { facets: {
					enumeration: [
						"Poll",
						"Report",
						"GOOSE",
						"SMV"
					],
					pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					whiteSpace: "collapse"
				} },
				srcCBName: { facets: {
					pattern: ["[A-Za-z][0-9A-Za-z_]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					maxLength: 32,
					whiteSpace: "collapse"
				} },
				srcCBUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				srcLDInst: { facets: {
					pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
					maxLength: 64,
					whiteSpace: "replace"
				} },
				srcLNClass: { facets: {
					enumeration: /* @__PURE__ */ "LLN0.LPHD.LCCH.LGOS.LSVS.LTIM.LTMS.LTRK.ANCR.ARCO.ARIS.ATCC.AVCO.CALH.CCGR.CILO.CPOW.CSWI.CSYN.FCNT.FCSD.FFIL.FLIM.FPID.FRMP.FSPT.FXOT.FXUT.GAPC.GGIO.GLOG.GSAL.IARC.IHMI.ISAF.ITCI.ITMI.ITPC.KFAN.KFIL.KPMP.KTNK.KVLV.MDIF.MENV.MFLK.MHAI.MHAN.MHYD.MMDC.MMET.MMTN.MMTR.MMXN.MMXU.MSQI.MSTA.PDIF.PDIR.PDIS.PDOP.PDUP.PFRC.PHAR.PHIZ.PIOC.PMRI.PMSS.POPF.PPAM.PRTR.PSCH.PSDE.PTEF.PTHF.PTOC.PTOF.PTOV.PTRC.PTTR.PTUC.PTUF.PTUV.PUPF.PVOC.PVPH.PZSU.QFVR.QITR.QIUB.QVTR.QVUB.QVVR.RADR.RBDR.RBRF.RDIR.RDRE.RDRS.RFLO.RMXU.RPSB.RREC.RSYN.SARC.SCBR.SIMG.SIML.SLTC.SOPM.SPDC.SPTR.SSWI.STMP.SVBR.TANG.TAXD.TCTR.TDST.TFLW.TFRQ.TGSN.THUM.TLVL.TMGF.TMVM.TPOS.TPRS.TRTN.TSND.TTMP.TTNS.TVBR.TVTR.TWPH.XCBR.XSWI.YEFN.YLTC.YPSH.YPTR.ZAXN.ZBAT.ZBSH.ZCAB.ZCAP.ZCON.ZGEN.ZGIL.ZLIN.ZMOT.ZREA.ZRES.ZRRC.ZSAR.ZSCR.ZSMC.ZTCF.ZTCR".split("."),
					pattern: [
						"[A-Z]+",
						"L[A-Z]*",
						"LLN0",
						"[A-Za-z_:][-.:0-9A-Z_a-z]*",
						"A[A-Z]*",
						"C[A-Z]*",
						"F[A-Z]*",
						"G[A-Z]*",
						"I[A-Z]*",
						"K[A-Z]*",
						"M[A-Z]*",
						"P[A-Z]*",
						"Q[A-Z]*",
						"R[A-Z]*",
						"S[A-Z]*",
						"T[A-Z]*",
						"X[A-Z]*",
						"Y[A-Z]*",
						"Z[A-Z]*"
					],
					length: 4,
					whiteSpace: "collapse"
				} },
				srcLNInst: { facets: {
					pattern: ["[0-9]{1,12}"],
					whiteSpace: "replace"
				} },
				srcPrefix: { facets: {
					pattern: ["[A-Za-z][0-9A-Za-z_]*", ""],
					maxLength: 11,
					whiteSpace: "replace"
				} },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: ["Text", "Private"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {}
			}
		}
	},
	FCDA: {
		tag: "FCDA",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["DataSet"],
		attributes: {
			sequence: [
				"daName",
				"doName",
				"fc",
				"ix",
				"ldInst",
				"lnClass",
				"lnInst",
				"lnUuid",
				"prefix"
			],
			details: {
				daName: { facets: {
					pattern: ["[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?(\\.[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?)*"],
					whiteSpace: "replace"
				} },
				doName: { facets: {
					pattern: ["[A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?"],
					whiteSpace: "replace"
				} },
				fc: {
					required: !0,
					facets: {
						enumeration: [
							"ST",
							"MX",
							"CO",
							"SP",
							"SG",
							"SE",
							"SV",
							"CF",
							"DC",
							"EX",
							"SR",
							"BL",
							"OR"
						],
						pattern: ["[A-Z]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1,
						maxLength: 2,
						whiteSpace: "collapse"
					}
				},
				ix: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} },
				ldInst: { facets: {
					pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
					maxLength: 64,
					whiteSpace: "replace"
				} },
				lnClass: { facets: {
					enumeration: /* @__PURE__ */ "LLN0.LPHD.LCCH.LGOS.LSVS.LTIM.LTMS.LTRK.ANCR.ARCO.ARIS.ATCC.AVCO.CALH.CCGR.CILO.CPOW.CSWI.CSYN.FCNT.FCSD.FFIL.FLIM.FPID.FRMP.FSPT.FXOT.FXUT.GAPC.GGIO.GLOG.GSAL.IARC.IHMI.ISAF.ITCI.ITMI.ITPC.KFAN.KFIL.KPMP.KTNK.KVLV.MDIF.MENV.MFLK.MHAI.MHAN.MHYD.MMDC.MMET.MMTN.MMTR.MMXN.MMXU.MSQI.MSTA.PDIF.PDIR.PDIS.PDOP.PDUP.PFRC.PHAR.PHIZ.PIOC.PMRI.PMSS.POPF.PPAM.PRTR.PSCH.PSDE.PTEF.PTHF.PTOC.PTOF.PTOV.PTRC.PTTR.PTUC.PTUF.PTUV.PUPF.PVOC.PVPH.PZSU.QFVR.QITR.QIUB.QVTR.QVUB.QVVR.RADR.RBDR.RBRF.RDIR.RDRE.RDRS.RFLO.RMXU.RPSB.RREC.RSYN.SARC.SCBR.SIMG.SIML.SLTC.SOPM.SPDC.SPTR.SSWI.STMP.SVBR.TANG.TAXD.TCTR.TDST.TFLW.TFRQ.TGSN.THUM.TLVL.TMGF.TMVM.TPOS.TPRS.TRTN.TSND.TTMP.TTNS.TVBR.TVTR.TWPH.XCBR.XSWI.YEFN.YLTC.YPSH.YPTR.ZAXN.ZBAT.ZBSH.ZCAB.ZCAP.ZCON.ZGEN.ZGIL.ZLIN.ZMOT.ZREA.ZRES.ZRRC.ZSAR.ZSCR.ZSMC.ZTCF.ZTCR".split("."),
					pattern: [
						"[A-Z]+",
						"L[A-Z]*",
						"LLN0",
						"[A-Za-z_:][-.:0-9A-Z_a-z]*",
						"A[A-Z]*",
						"C[A-Z]*",
						"F[A-Z]*",
						"G[A-Z]*",
						"I[A-Z]*",
						"K[A-Z]*",
						"M[A-Z]*",
						"P[A-Z]*",
						"Q[A-Z]*",
						"R[A-Z]*",
						"S[A-Z]*",
						"T[A-Z]*",
						"X[A-Z]*",
						"Y[A-Z]*",
						"Z[A-Z]*"
					],
					length: 4,
					whiteSpace: "collapse"
				} },
				lnInst: { facets: {
					pattern: ["[0-9]{1,12}"],
					whiteSpace: "replace"
				} },
				lnUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				prefix: {
					default: "",
					facets: {
						pattern: ["[A-Za-z][0-9A-Za-z_]*", ""],
						maxLength: 11,
						whiteSpace: "replace"
					}
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	FileHandling: {
		tag: "FileHandling",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [
				"ftp",
				"ftps",
				"mms"
			],
			details: {
				ftp: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				ftps: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				mms: {
					default: "true",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	Function: {
		tag: "Function",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: [
			"Bay",
			"VoltageLevel",
			"Substation",
			"Line",
			"Process"
		],
		attributes: {
			sequence: [
				"desc",
				"name",
				"templateUuid",
				"type",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				type: { facets: { whiteSpace: "replace" } },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels",
				"LNode",
				"SubFunction",
				"GeneralEquipment",
				"ConductingEquipment",
				"BehaviorDescription",
				"FunctionSclRef",
				"PowerSystemRelations",
				"ProcessResources",
				"Variable"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabel",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				LNode: {},
				SubFunction: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInSubFunction",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInSubFunc",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				GeneralEquipment: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInGeneralEquipmentOfFunction",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInGEFunc",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				ConductingEquipment: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInConductingEquipmentOfFunction",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInCondEq",
					selector: [{ steps: [{
						kind: "name",
						value: "SubEquipment"
					}] }, { steps: [{
						kind: "name",
						value: "EqFunction"
					}] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				BehaviorDescription: {},
				FunctionSclRef: {},
				PowerSystemRelations: {},
				ProcessResources: {},
				Variable: {}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueLNodeInFunctionB",
			selector: [{ steps: [{
				kind: "name",
				value: "LNode"
			}] }],
			fields: [
				{ target: {
					kind: "attribute",
					value: "lnInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "iedName",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "ldInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "prefix",
					isAttribute: !0
				} }
			]
		}, {
			kind: "unique",
			name: "uniqueChildNameInBayFunc",
			selector: [{ steps: [{ kind: "wildcard" }] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
	},
	FunctionCatRef: {
		tag: "FunctionCatRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Reference to a function which is part of the current category",
		parents: ["SubCategory", "FunctionCategory"],
		attributes: {
			sequence: ["function", "functionUuid"],
			details: {
				function: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				functionUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	FunctionCategory: {
		tag: "FunctionCategory",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Category of functions. To be added to Process, Line, Substation, VoltageLevel and Bay SCL elements",
		parents: [
			"Substation",
			"VoltageLevel",
			"Bay",
			"Process",
			"Line"
		],
		attributes: {
			sequence: [
				"desc",
				"name",
				"originUuid",
				"templateUuid",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				originUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: [
				"Text",
				"SubCategory",
				"FunctionCatRef"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				SubCategory: {},
				FunctionCatRef: {
					required: !0,
					minOccurs: 1
				}
			}
		}
	},
	FunctionCategoryRef: {
		tag: "FunctionCategoryRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Reference to a function category attached to current role",
		parents: ["FunctionRoleContent"],
		attributes: {
			sequence: [
				"desc",
				"functionCategory",
				"functionCategoryUuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				functionCategory: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				functionCategoryUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: ["Text", "FunctionalVariantRef"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				FunctionalVariantRef: {}
			},
			choices: [{ options: ["FunctionalVariantRef"] }]
		}
	},
	FunctionRef: {
		tag: "FunctionRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Reference to a function definition attached to current allocation role",
		parents: ["AllocationRole", "FunctionRoleContent"],
		attributes: {
			sequence: [
				"desc",
				"function",
				"functionUuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				function: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				functionUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: [
				"Text",
				"FunctionalVariantRef",
				"SignalRole"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				FunctionalVariantRef: {},
				SignalRole: {}
			},
			choices: [{ options: ["FunctionalVariantRef"] }]
		}
	},
	FunctionRole: {
		tag: "FunctionRole",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Role attached to the application type",
		parents: ["Application"],
		attributes: {
			sequence: [
				"cardinality",
				"desc",
				"max",
				"name",
				"originUuid",
				"selector",
				"templateUuid",
				"type",
				"uuid"
			],
			details: {
				cardinality: {
					default: "1..1",
					facets: {
						enumeration: [
							"0..1",
							"1..1",
							"0..n",
							"1..n"
						],
						whiteSpace: "replace"
					}
				},
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				max: { facets: {
					minInclusive: 2,
					whiteSpace: "collapse"
				} },
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				originUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				selector: { facets: { whiteSpace: "replace" } },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				type: { facets: { whiteSpace: "replace" } },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: [
				"Text",
				"FunctionalVariantRef",
				"FunctionRoleContent"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				FunctionalVariantRef: {},
				FunctionRoleContent: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				}
			},
			choices: [{ options: ["FunctionalVariantRef"] }, {
				options: ["FunctionRoleContent"],
				minOccurs: 1
			}]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueRoleContent",
			selector: [{ steps: [{
				kind: "name",
				value: "FunctionRoleContent"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "roleInst",
				isAttribute: !0
			} }]
		}]
	},
	FunctionRoleContent: {
		tag: "FunctionRoleContent",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "an instance of the current role. In case of application type definition, instance 1 is the default instance",
		parents: ["FunctionRole"],
		attributes: {
			sequence: ["roleInst"],
			details: { roleInst: {
				default: "1",
				facets: {
					minInclusive: 1,
					whiteSpace: "collapse"
				}
			} },
			identityFields: ["roleInst"]
		},
		children: {
			sequence: [
				"Text",
				"FunctionRef",
				"BehaviorDescriptionRef",
				"ProcessResourceRef",
				"VariableRef",
				"FunctionCategoryRef",
				"PowerSystemRelationRef"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				FunctionRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				BehaviorDescriptionRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				ProcessResourceRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				VariableRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				FunctionCategoryRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				PowerSystemRelationRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				}
			},
			choices: [{ options: [
				"BehaviorDescriptionRef",
				"FunctionCategoryRef",
				"FunctionRef",
				"PowerSystemRelationRef",
				"ProcessResourceRef",
				"VariableRef"
			] }]
		}
	},
	FunctionSclRef: {
		tag: "FunctionSclRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Reference to the FSD files used to create a Function. Could be added under Function/SubFunction/EqFunction/EqSubFunction",
		parents: [
			"Function",
			"SubFunction",
			"EqFunction",
			"EqSubFunction"
		],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: ["Text", "SclFileReference"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				SclFileReference: { maxOccurs: 1 }
			}
		}
	},
	FunctionTemplate: {
		tag: "FunctionTemplate",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Base element for FSD format, will be used as a template element for Function/SubFunction or EqFunction/EqSubFunction",
		parents: ["SCL"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"originUuid",
				"templateUuid",
				"type",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				originUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				type: { facets: { whiteSpace: "replace" } },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: [
				"Text",
				"LNode",
				"SubFunctionTemplate",
				"GeneralEquipment",
				"ConductingEquipment"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				LNode: {},
				SubFunctionTemplate: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInSubFunctionTemplate",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInSubFuncTemplate",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				GeneralEquipment: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInGeneralEquipmentOfFunctionTemplate",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInGEFuncTemplate",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				ConductingEquipment: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInConductingEquipmentOfFunctionTemplate",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInCondEqTemplate",
					selector: [{ steps: [{
						kind: "name",
						value: "SubEquipment"
					}] }, { steps: [{
						kind: "name",
						value: "EqFunction"
					}] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] }
			}
		}
	},
	FunctionalSubVariant: {
		tag: "FunctionalSubVariant",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Sub variant of the current variant",
		parents: ["FunctionalVariant", "FunctionalSubVariant"],
		attributes: {
			sequence: [
				"desc",
				"isBaseline",
				"name",
				"originUuid",
				"templateUuid",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				isBaseline: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				originUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: [
				"Text",
				"FunctionalSubVariant",
				"VariableRef"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				FunctionalSubVariant: {},
				VariableRef: {}
			},
			choices: [{ options: ["FunctionalSubVariant", "VariableRef"] }]
		}
	},
	FunctionalVariant: {
		tag: "FunctionalVariant",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Variant attached to the application type",
		parents: ["Application", "FunctionalVariantGroup"],
		attributes: {
			sequence: [
				"desc",
				"isBaseline",
				"name",
				"originUuid",
				"templateUuid",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				isBaseline: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				originUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: [
				"Text",
				"FunctionalSubVariant",
				"VariableRef"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				FunctionalSubVariant: {},
				VariableRef: {}
			},
			choices: [{ options: ["FunctionalSubVariant", "VariableRef"] }]
		}
	},
	FunctionalVariantGroup: {
		tag: "FunctionalVariantGroup",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Group of variants attached to the application type",
		parents: ["Application"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"originUuid",
				"templateUuid",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				originUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: ["Text", "FunctionalVariant"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				FunctionalVariant: {}
			}
		}
	},
	FunctionalVariantRef: {
		tag: "FunctionalVariantRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Ref to a functional variant of the Application",
		parents: [
			"FunctionRef",
			"SignalRole",
			"LNodeInputRef",
			"LNodeOutputRef",
			"LNodeDataRef",
			"FunctionRole",
			"BehaviorDescriptionRef",
			"InputVarRef",
			"OutputVarRef",
			"ProcessResourceRef",
			"VariableRef",
			"FunctionCategoryRef",
			"PowerSystemRelationRef",
			"AllocationRoleRef"
		],
		attributes: {
			sequence: [
				"functionalVariant",
				"functionalVariantUuid",
				"update"
			],
			details: {
				functionalVariant: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				functionalVariantUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				update: {
					default: "add",
					facets: {
						enumeration: ["add", "remove"],
						whiteSpace: "preserve"
					}
				}
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	GOOSE: {
		tag: "GOOSE",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [
				"fixedOffs",
				"goose",
				"max",
				"rGOOSE"
			],
			details: {
				fixedOffs: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				goose: {
					default: "true",
					facets: { whiteSpace: "collapse" }
				},
				max: {
					required: !0,
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				},
				rGOOSE: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	GOOSEMcSecurity: {
		tag: "GOOSEMcSecurity",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["ClientServices"],
		attributes: {
			sequence: ["encryption", "signature"],
			details: {
				encryption: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				signature: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	GOOSESecurity: {
		tag: "GOOSESecurity",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["AccessPoint"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"serialNumber",
				"templateUuid",
				"uuid",
				"xferNumber"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				serialNumber: {
					required: !0,
					facets: {
						pattern: ["[0-9]+"],
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				xferNumber: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} }
			}
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels",
				"Subject",
				"IssuerName"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabel",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				Subject: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				IssuerName: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				}
			}
		}
	},
	GSE: {
		tag: "GSE",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["ConnectedAP"],
		attributes: {
			sequence: [
				"cbName",
				"cbUuid",
				"desc",
				"ldInst"
			],
			details: {
				cbName: {
					required: !0,
					facets: {
						pattern: ["[A-Za-z][0-9A-Za-z_]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						maxLength: 32,
						whiteSpace: "collapse"
					}
				},
				cbUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				ldInst: {
					required: !0,
					facets: {
						pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
						maxLength: 64,
						whiteSpace: "replace"
					}
				}
			},
			identityFields: ["cbName", "ldInst"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Address",
				"MinTime",
				"MaxTime"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Address: { maxOccurs: 1 },
				MinTime: { maxOccurs: 1 },
				MaxTime: { maxOccurs: 1 }
			}
		}
	},
	GSEControl: {
		tag: "GSEControl",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["LN0"],
		attributes: {
			sequence: [
				"appID",
				"confRev",
				"datSet",
				"desc",
				"fixedOffs",
				"name",
				"securityEnable",
				"templateUuid",
				"type",
				"uuid"
			],
			details: {
				appID: {
					required: !0,
					facets: {
						pattern: ["[ -~]*"],
						minLength: 1,
						maxLength: 129,
						whiteSpace: "replace"
					}
				},
				confRev: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} },
				datSet: { facets: {
					pattern: ["[A-Za-z][0-9A-Za-z_]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					maxLength: 32,
					whiteSpace: "collapse"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				fixedOffs: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				name: {
					required: !0,
					facets: {
						pattern: ["[A-Za-z][0-9A-Za-z_]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						maxLength: 32,
						whiteSpace: "collapse"
					}
				},
				securityEnable: {
					default: "None",
					facets: {
						enumeration: [
							"None",
							"Signature",
							"SignatureAndEncryption"
						],
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				type: {
					default: "GOOSE",
					facets: {
						enumeration: ["GSSE", "GOOSE"],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"IEDName",
				"Protocol"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				IEDName: {},
				Protocol: { maxOccurs: 1 }
			}
		}
	},
	GSEDir: {
		tag: "GSEDir",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	GSESettings: {
		tag: "GSESettings",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [
				"appID",
				"cbName",
				"datSet",
				"dataLabel",
				"kdaParticipant"
			],
			details: {
				appID: {
					default: "Fix",
					facets: {
						enumeration: [
							"Dyn",
							"Conf",
							"Fix"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				cbName: {
					default: "Fix",
					facets: {
						enumeration: ["Conf", "Fix"],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				datSet: {
					default: "Fix",
					facets: {
						enumeration: [
							"Dyn",
							"Conf",
							"Fix"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				dataLabel: {
					default: "Fix",
					facets: {
						enumeration: [
							"Dyn",
							"Conf",
							"Fix"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				kdaParticipant: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: ["McSecurity"],
			details: { McSecurity: { maxOccurs: 1 } }
		}
	},
	GSSE: {
		tag: "GSSE",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: ["max"],
			details: { max: {
				required: !0,
				facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				}
			} }
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	GeneralEquipment: {
		tag: "GeneralEquipment",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: [
			"EqFunction",
			"EqSubFunction",
			"Substation",
			"VoltageLevel",
			"Bay",
			"SubFunction",
			"Function",
			"Line",
			"Process",
			"SubFunctionTemplate",
			"FunctionTemplate"
		],
		attributes: {
			sequence: [
				"desc",
				"name",
				"templateUuid",
				"type",
				"uuid",
				"virtual"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				type: {
					required: !0,
					facets: {
						enumeration: [
							"AXN",
							"BAT",
							"MOT",
							"FAN",
							"FIL",
							"PMP",
							"TNK",
							"VLV"
						],
						pattern: ["E[A-Z]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 3,
						whiteSpace: "collapse"
					}
				},
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				virtual: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels",
				"LNode",
				"EqFunction",
				"ProcessResources",
				"Variable"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabel",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				LNode: {},
				EqFunction: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInFuncForGE",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInFuncForGE",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				ProcessResources: {},
				Variable: {}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueLNodeInGeneralEquipmentOfFuncForEquipment",
			selector: [{ steps: [{
				kind: "name",
				value: "LNode"
			}] }],
			fields: [
				{ target: {
					kind: "attribute",
					value: "lnInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "iedName",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "ldInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "prefix",
					isAttribute: !0
				} }
			]
		}, {
			kind: "unique",
			name: "uniqueChildNameInGEFuncForEquipment",
			selector: [{ steps: [{ kind: "wildcard" }] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
	},
	GetCBValues: {
		tag: "GetCBValues",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	GetDataObjectDefinition: {
		tag: "GetDataObjectDefinition",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	GetDataSetValue: {
		tag: "GetDataSetValue",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	GetDirectory: {
		tag: "GetDirectory",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	GooseParameters: {
		tag: "GooseParameters",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		parents: ["CommunicationServiceSpecifications", "ServiceSpecifications"],
		attributes: {
			sequence: [
				"cbName",
				"desc",
				"dsName",
				"goId",
				"id",
				"maxTime",
				"minTime",
				"securityEnabled"
			],
			details: {
				cbName: { facets: { whiteSpace: "replace" } },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				dsName: { facets: { whiteSpace: "replace" } },
				goId: { facets: { whiteSpace: "replace" } },
				id: {
					required: !0,
					facets: {
						pattern: ["\\S+"],
						minLength: 1,
						maxLength: 255,
						whiteSpace: "collapse"
					}
				},
				maxTime: { facets: { whiteSpace: "collapse" } },
				minTime: { facets: { whiteSpace: "collapse" } },
				securityEnabled: { facets: { whiteSpace: "collapse" } }
			}
		},
		children: {
			sequence: [
				"Text",
				"L2CommParameters",
				"L3IPv4CommParameters",
				"L3IPv6CommParameters"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				L2CommParameters: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				L3IPv4CommParameters: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				L3IPv6CommParameters: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				}
			},
			choices: [{
				options: [
					"L2CommParameters",
					"L3IPv4CommParameters",
					"L3IPv6CommParameters"
				],
				maxOccurs: 1
			}]
		}
	},
	GooseParametersRef: {
		tag: "GooseParametersRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Specification of the communication parameters expected for the current SourceRef when ServiceType is GOOSE",
		parents: ["SourceRef", "SubscriberLNode"],
		attributes: {
			sequence: ["desc", "id"],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				id: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				}
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	Header: {
		tag: "Header",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["SCL"],
		attributes: {
			sequence: [
				"baseUuid",
				"fileType",
				"id",
				"nameStructure",
				"revision",
				"toolID",
				"uuid",
				"version"
			],
			details: {
				baseUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				fileType: { facets: {
					enumeration: [
						"ICD",
						"IID",
						"CID",
						"SSD",
						"SCD",
						"SED"
					],
					pattern: ["[A-Z]{3}", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					whiteSpace: "replace"
				} },
				id: {
					required: !0,
					facets: { whiteSpace: "replace" }
				},
				nameStructure: {
					default: "IEDName",
					facets: {
						enumeration: ["IEDName"],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				revision: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				toolID: { facets: { whiteSpace: "replace" } },
				uuid: {
					required: !0,
					facets: {
						pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
						whiteSpace: "preserve"
					}
				},
				version: { facets: { whiteSpace: "replace" } }
			}
		},
		children: {
			sequence: [
				"Text",
				"History",
				"SourceFiles"
			],
			details: {
				Text: { maxOccurs: 1 },
				History: { maxOccurs: 1 },
				SourceFiles: { maxOccurs: 1 }
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueHitem",
			selector: [{ steps: [{
				kind: "name",
				value: "History"
			}, {
				kind: "name",
				value: "Hitem"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "version",
				isAttribute: !0
			} }, { target: {
				kind: "attribute",
				value: "revision",
				isAttribute: !0
			} }]
		}]
	},
	History: {
		tag: "History",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Header"],
		attributes: {
			sequence: [],
			details: {},
			identityFields: ["revision", "version"]
		},
		children: {
			sequence: ["Hitem"],
			details: { Hitem: {
				required: !0,
				minOccurs: 1
			} }
		}
	},
	Hitem: {
		tag: "Hitem",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["History"],
		attributes: {
			sequence: [
				"revision",
				"version",
				"what",
				"when",
				"who",
				"why"
			],
			details: {
				revision: {
					required: !0,
					facets: { whiteSpace: "replace" }
				},
				version: {
					required: !0,
					facets: { whiteSpace: "replace" }
				},
				what: { facets: { whiteSpace: "replace" } },
				when: {
					required: !0,
					facets: { whiteSpace: "replace" }
				},
				who: { facets: { whiteSpace: "replace" } },
				why: { facets: { whiteSpace: "replace" } }
			},
			identityFields: ["revision", "version"]
		},
		children: {
			sequence: ["SourceFiles"],
			any: !0,
			details: { SourceFiles: { maxOccurs: 1 } }
		},
		textContent: {}
	},
	IED: {
		tag: "IED",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["SCL"],
		attributes: {
			sequence: [
				"configVersion",
				"desc",
				"engRight",
				"manufacturer",
				"name",
				"originalSclRelease",
				"originalSclRevision",
				"originalSclVersion",
				"owner",
				"templateUuid",
				"type",
				"uuid"
			],
			details: {
				configVersion: { facets: { whiteSpace: "replace" } },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				engRight: {
					default: "full",
					facets: {
						enumeration: [
							"full",
							"fix",
							"dataflow"
						],
						whiteSpace: "replace"
					}
				},
				manufacturer: { facets: { whiteSpace: "replace" } },
				name: {
					required: !0,
					facets: {
						pattern: [
							"[A-Za-z][0-9A-Za-z_]{0,2}",
							"[A-Za-z][0-9A-Za-z_]{4,63}",
							"[A-MO-Za-z][0-9A-Za-z_]{3}",
							"N[0-9A-Za-np-z_][0-9A-Za-z_]{2}",
							"No[0-9A-Za-mo-z_][0-9A-Za-z_]",
							"Non[0-9A-Za-df-z_]",
							"[A-Za-z][0-9A-Za-z_]*",
							"[A-Za-z_:][-.:0-9A-Z_a-z]*"
						],
						maxLength: 64,
						whiteSpace: "collapse"
					}
				},
				originalSclRelease: {
					default: "1",
					facets: {
						minInclusive: 0,
						maxInclusive: 255,
						minExclusive: 0,
						whiteSpace: "collapse"
					}
				},
				originalSclRevision: {
					default: "A",
					facets: {
						pattern: ["[A-Z]", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				originalSclVersion: {
					default: "2003",
					facets: {
						pattern: ["2[0-2][0-9]{2}"],
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				owner: { facets: { whiteSpace: "replace" } },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				type: { facets: { whiteSpace: "replace" } },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Services",
				"AccessPoint",
				"KDC",
				"IEDSourceFiles",
				"MinRequestedSCDFiles",
				"Labels",
				"CheckoutID"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Services: { maxOccurs: 1 },
				AccessPoint: {
					required: !0,
					minOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLNInAccessPoint",
						selector: [{ steps: [{
							kind: "name",
							value: "LN"
						}] }],
						fields: [
							{ target: {
								kind: "attribute",
								value: "inst",
								isAttribute: !0
							} },
							{ target: {
								kind: "attribute",
								value: "lnClass",
								isAttribute: !0
							} },
							{ target: {
								kind: "attribute",
								value: "prefix",
								isAttribute: !0
							} }
						]
					}]
				},
				KDC: {},
				IEDSourceFiles: { maxOccurs: 1 },
				MinRequestedSCDFiles: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueProjectInReqSCD",
						selector: [{ steps: [{
							kind: "name",
							value: "MinRequestedSCDFile"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "fileUuid",
							isAttribute: !0
						} }]
					}]
				},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabelInIED",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				CheckoutID: {}
			}
		},
		constraints: [
			{
				kind: "key",
				name: "LDeviceInIEDKey",
				selector: [{ steps: [
					{
						kind: "name",
						value: "AccessPoint"
					},
					{
						kind: "name",
						value: "Server"
					},
					{
						kind: "name",
						value: "LDevice"
					}
				] }],
				fields: [{ target: {
					kind: "attribute",
					value: "inst",
					isAttribute: !0
				} }]
			},
			{
				kind: "keyref",
				name: "ref2LDeviceInDataSetForFCDAinLN",
				refer: "LDeviceInIEDKey",
				selector: [{ steps: [
					{
						kind: "name",
						value: "AccessPoint"
					},
					{
						kind: "name",
						value: "Server"
					},
					{
						kind: "name",
						value: "LDevice"
					},
					{
						kind: "name",
						value: "LN"
					},
					{
						kind: "name",
						value: "DataSet"
					},
					{
						kind: "name",
						value: "FCDA"
					}
				] }],
				fields: [{ target: {
					kind: "attribute",
					value: "ldInst",
					isAttribute: !0
				} }]
			},
			{
				kind: "keyref",
				name: "ref2LDeviceInDataSetForFCDAinLN0",
				refer: "LDeviceInIEDKey",
				selector: [{ steps: [
					{
						kind: "name",
						value: "AccessPoint"
					},
					{
						kind: "name",
						value: "Server"
					},
					{
						kind: "name",
						value: "LDevice"
					},
					{
						kind: "name",
						value: "LN0"
					},
					{
						kind: "name",
						value: "DataSet"
					},
					{
						kind: "name",
						value: "FCDA"
					}
				] }],
				fields: [{ target: {
					kind: "attribute",
					value: "ldInst",
					isAttribute: !0
				} }]
			},
			{
				kind: "key",
				name: "AccessPointInIEDKey",
				selector: [{ steps: [{
					kind: "name",
					value: "AccessPoint"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "name",
					isAttribute: !0
				} }]
			},
			{
				kind: "keyref",
				name: "ServerAtRef2AccessPoint",
				refer: "AccessPointInIEDKey",
				selector: [{ steps: [{
					kind: "name",
					value: "AccessPoint"
				}, {
					kind: "name",
					value: "ServerAt"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "apName",
					isAttribute: !0
				} }]
			}
		]
	},
	IEDName: {
		tag: "IEDName",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["GSEControl", "SampledValueControl"],
		attributes: {
			sequence: [
				"apRef",
				"apUuid",
				"ldInst",
				"ldUuid",
				"lnClass",
				"lnInst",
				"lnUuid",
				"prefix"
			],
			details: {
				apRef: {
					required: !0,
					facets: {
						pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
						maxLength: 32,
						whiteSpace: "replace"
					}
				},
				apUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				ldInst: { facets: {
					pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
					maxLength: 64,
					whiteSpace: "replace"
				} },
				ldUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				lnClass: { facets: {
					enumeration: /* @__PURE__ */ "LLN0.LPHD.LCCH.LGOS.LSVS.LTIM.LTMS.LTRK.ANCR.ARCO.ARIS.ATCC.AVCO.CALH.CCGR.CILO.CPOW.CSWI.CSYN.FCNT.FCSD.FFIL.FLIM.FPID.FRMP.FSPT.FXOT.FXUT.GAPC.GGIO.GLOG.GSAL.IARC.IHMI.ISAF.ITCI.ITMI.ITPC.KFAN.KFIL.KPMP.KTNK.KVLV.MDIF.MENV.MFLK.MHAI.MHAN.MHYD.MMDC.MMET.MMTN.MMTR.MMXN.MMXU.MSQI.MSTA.PDIF.PDIR.PDIS.PDOP.PDUP.PFRC.PHAR.PHIZ.PIOC.PMRI.PMSS.POPF.PPAM.PRTR.PSCH.PSDE.PTEF.PTHF.PTOC.PTOF.PTOV.PTRC.PTTR.PTUC.PTUF.PTUV.PUPF.PVOC.PVPH.PZSU.QFVR.QITR.QIUB.QVTR.QVUB.QVVR.RADR.RBDR.RBRF.RDIR.RDRE.RDRS.RFLO.RMXU.RPSB.RREC.RSYN.SARC.SCBR.SIMG.SIML.SLTC.SOPM.SPDC.SPTR.SSWI.STMP.SVBR.TANG.TAXD.TCTR.TDST.TFLW.TFRQ.TGSN.THUM.TLVL.TMGF.TMVM.TPOS.TPRS.TRTN.TSND.TTMP.TTNS.TVBR.TVTR.TWPH.XCBR.XSWI.YEFN.YLTC.YPSH.YPTR.ZAXN.ZBAT.ZBSH.ZCAB.ZCAP.ZCON.ZGEN.ZGIL.ZLIN.ZMOT.ZREA.ZRES.ZRRC.ZSAR.ZSCR.ZSMC.ZTCF.ZTCR".split("."),
					pattern: [
						"[A-Z]+",
						"L[A-Z]*",
						"LLN0",
						"[A-Za-z_:][-.:0-9A-Z_a-z]*",
						"A[A-Z]*",
						"C[A-Z]*",
						"F[A-Z]*",
						"G[A-Z]*",
						"I[A-Z]*",
						"K[A-Z]*",
						"M[A-Z]*",
						"P[A-Z]*",
						"Q[A-Z]*",
						"R[A-Z]*",
						"S[A-Z]*",
						"T[A-Z]*",
						"X[A-Z]*",
						"Y[A-Z]*",
						"Z[A-Z]*"
					],
					length: 4,
					whiteSpace: "collapse"
				} },
				lnInst: { facets: {
					pattern: ["[0-9]{1,12}"],
					whiteSpace: "replace"
				} },
				lnUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				prefix: { facets: {
					pattern: ["[A-Za-z][0-9A-Za-z_]*", ""],
					maxLength: 11,
					whiteSpace: "replace"
				} }
			}
		},
		children: {
			sequence: [],
			details: {}
		},
		textContent: { facets: {
			pattern: [
				"[A-Za-z][0-9A-Za-z_]{0,2}",
				"[A-Za-z][0-9A-Za-z_]{4,63}",
				"[A-MO-Za-z][0-9A-Za-z_]{3}",
				"N[0-9A-Za-np-z_][0-9A-Za-z_]{2}",
				"No[0-9A-Za-mo-z_][0-9A-Za-z_]",
				"Non[0-9A-Za-df-z_]",
				"[A-Za-z][0-9A-Za-z_]*",
				"[A-Za-z_:][-.:0-9A-Z_a-z]*"
			],
			maxLength: 64,
			whiteSpace: "collapse"
		} }
	},
	IEDSourceFiles: {
		tag: "IEDSourceFiles",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["IED"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"SclFileReference"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				SclFileReference: {}
			}
		}
	},
	InputVar: {
		tag: "InputVar",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Input variable used in the behavior description",
		parents: ["BehaviorDescription"],
		attributes: {
			sequence: [
				"daName",
				"dataName",
				"desc",
				"doName",
				"inputName",
				"inputUuid",
				"lnodeUuid",
				"value",
				"varName"
			],
			details: {
				daName: { facets: {
					pattern: ["[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?(\\.[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?)*"],
					whiteSpace: "replace"
				} },
				dataName: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				doName: { facets: {
					pattern: ["[A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?"],
					whiteSpace: "replace"
				} },
				inputName: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				inputUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				lnodeUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				value: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				varName: {
					required: !0,
					facets: { whiteSpace: "replace" }
				}
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	InputVarRef: {
		tag: "InputVarRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Reference to InputVar belonging to current behavior description",
		parents: ["BehaviorDescriptionRef"],
		attributes: {
			sequence: [
				"desc",
				"value",
				"variable"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				value: { facets: { whiteSpace: "replace" } },
				variable: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} }
			}
		},
		children: {
			sequence: ["Text", "FunctionalVariantRef"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				FunctionalVariantRef: {}
			},
			choices: [{ options: ["FunctionalVariantRef"] }]
		}
	},
	Inputs: {
		tag: "Inputs",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["LN0", "LN"],
		attributes: {
			sequence: ["desc"],
			details: { desc: {
				default: "",
				facets: { whiteSpace: "replace" }
			} }
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"ExtRef"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				ExtRef: {
					required: !0,
					minOccurs: 1
				}
			}
		}
	},
	IssuerName: {
		tag: "IssuerName",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["GOOSESecurity", "SMVSecurity"],
		attributes: {
			sequence: ["commonName", "idHierarchy"],
			details: {
				commonName: {
					required: !0,
					facets: {
						pattern: ["none", "CN=.+"],
						minLength: 4,
						whiteSpace: "replace"
					}
				},
				idHierarchy: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	KDC: {
		tag: "KDC",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["IED"],
		attributes: {
			sequence: [
				"apName",
				"apUuid",
				"iedName"
			],
			details: {
				apName: {
					required: !0,
					facets: {
						pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
						maxLength: 32,
						whiteSpace: "replace"
					}
				},
				apUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				iedName: {
					required: !0,
					facets: {
						pattern: [
							"[A-Za-z][0-9A-Za-z_]{0,2}",
							"[A-Za-z][0-9A-Za-z_]{4,63}",
							"[A-MO-Za-z][0-9A-Za-z_]{3}",
							"N[0-9A-Za-np-z_][0-9A-Za-z_]{2}",
							"No[0-9A-Za-mo-z_][0-9A-Za-z_]",
							"Non[0-9A-Za-df-z_]",
							"[A-Za-z][0-9A-Za-z_]*",
							"[A-Za-z_:][-.:0-9A-Z_a-z]*"
						],
						maxLength: 64,
						whiteSpace: "collapse"
					}
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	L2CommParameters: {
		tag: "L2CommParameters",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		parents: ["GooseParameters", "SMVParameters"],
		attributes: {
			sequence: [
				"appId",
				"desc",
				"macAddr",
				"vlanId",
				"vlanPriority"
			],
			details: {
				appId: { facets: {
					pattern: ["[0-9A-F]{4}"],
					whiteSpace: "replace"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				macAddr: { facets: {
					pattern: ["[0-9A-F]{2}\\-[0-9A-F]{2}\\-[0-9A-F]{2}\\-[0-9A-F]{2}\\-[0-9A-F]{2}\\-[0-9A-F]{2}"],
					whiteSpace: "replace"
				} },
				vlanId: { facets: {
					pattern: ["[0-9A-F]{3}"],
					whiteSpace: "replace"
				} },
				vlanPriority: { facets: {
					pattern: ["[0-7]"],
					whiteSpace: "replace"
				} }
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	L3IPv4CommParameters: {
		tag: "L3IPv4CommParameters",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		parents: ["GooseParameters", "SMVParameters"],
		attributes: {
			sequence: [
				"IPv4",
				"IPv4-IGMPv3Src",
				"appId",
				"desc",
				"vlanId",
				"vlanPriority"
			],
			details: {
				IPv4: { facets: {
					pattern: ["([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])"],
					whiteSpace: "replace"
				} },
				"IPv4-IGMPv3Src": { facets: {
					pattern: ["([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])"],
					whiteSpace: "replace"
				} },
				appId: { facets: {
					pattern: ["[0-9A-F]{4}"],
					whiteSpace: "replace"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				vlanId: { facets: {
					pattern: ["[0-9A-F]{3}"],
					whiteSpace: "replace"
				} },
				vlanPriority: { facets: {
					pattern: ["[0-7]"],
					whiteSpace: "replace"
				} }
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	L3IPv6CommParameters: {
		tag: "L3IPv6CommParameters",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		parents: ["GooseParameters", "SMVParameters"],
		attributes: {
			sequence: [
				"IPv6",
				"IPv6-IGMPv3Src",
				"appId",
				"desc",
				"vlanId",
				"vlanPriority"
			],
			details: {
				IPv6: { facets: {
					pattern: ["([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}"],
					whiteSpace: "replace"
				} },
				"IPv6-IGMPv3Src": { facets: {
					pattern: ["([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}"],
					whiteSpace: "replace"
				} },
				appId: { facets: {
					pattern: ["[0-9A-F]{4}"],
					whiteSpace: "replace"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				vlanId: { facets: {
					pattern: ["[0-9A-F]{3}"],
					whiteSpace: "replace"
				} },
				vlanPriority: { facets: {
					pattern: ["[0-7]"],
					whiteSpace: "replace"
				} }
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	LDevice: {
		tag: "LDevice",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Server"],
		attributes: {
			sequence: [
				"desc",
				"inst",
				"ldName",
				"templateUuid",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				inst: {
					required: !0,
					facets: {
						pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
						maxLength: 64,
						whiteSpace: "replace"
					}
				},
				ldName: { facets: {
					pattern: ["[A-Za-z][0-9A-Za-z_]*"],
					maxLength: 64,
					whiteSpace: "replace"
				} },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: ["inst"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"LN0",
				"LN",
				"AccessControl",
				"Labels"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				LN0: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1,
					constraints: [
						{
							kind: "unique",
							name: "uniqueReportControlInLN0",
							selector: [{ steps: [{
								kind: "name",
								value: "ReportControl"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "name",
								isAttribute: !0
							} }]
						},
						{
							kind: "unique",
							name: "uniqueLogControlInLN0",
							selector: [{ steps: [{
								kind: "name",
								value: "LogControl"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "name",
								isAttribute: !0
							} }]
						},
						{
							kind: "unique",
							name: "uniqueGSEControlInLN0",
							selector: [{ steps: [{
								kind: "name",
								value: "GSEControl"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "name",
								isAttribute: !0
							} }]
						},
						{
							kind: "unique",
							name: "uniqueSampledValueControlInLN0",
							selector: [{ steps: [{
								kind: "name",
								value: "SampledValueControl"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "name",
								isAttribute: !0
							} }]
						},
						{
							kind: "key",
							name: "DataSetKeyLN0",
							selector: [{ steps: [{
								kind: "name",
								value: "DataSet"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "name",
								isAttribute: !0
							} }]
						},
						{
							kind: "keyref",
							name: "ref2DataSetReportLN0",
							refer: "DataSetKeyLN0",
							selector: [{ steps: [{
								kind: "name",
								value: "ReportControl"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "datSet",
								isAttribute: !0
							} }]
						},
						{
							kind: "keyref",
							name: "ref2DataSetLogLN0",
							refer: "DataSetKeyLN0",
							selector: [{ steps: [{
								kind: "name",
								value: "LogControl"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "datSet",
								isAttribute: !0
							} }]
						},
						{
							kind: "keyref",
							name: "ref2DataSetGSELN0",
							refer: "DataSetKeyLN0",
							selector: [{ steps: [{
								kind: "name",
								value: "GSEControl"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "datSet",
								isAttribute: !0
							} }]
						},
						{
							kind: "keyref",
							name: "ref2DataSetSVLN0",
							refer: "DataSetKeyLN0",
							selector: [{ steps: [{
								kind: "name",
								value: "SampledValueControl"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "datSet",
								isAttribute: !0
							} }]
						},
						{
							kind: "unique",
							name: "uniqueDOIinLN0",
							selector: [{ steps: [{
								kind: "name",
								value: "DOI"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "name",
								isAttribute: !0
							} }]
						},
						{
							kind: "unique",
							name: "uniqueLogInLN0",
							selector: [{ steps: [{
								kind: "name",
								value: "Log"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "name",
								isAttribute: !0
							} }]
						}
					]
				},
				LN: { constraints: [
					{
						kind: "unique",
						name: "uniqueReportControlInLN",
						selector: [{ steps: [{
							kind: "name",
							value: "ReportControl"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					},
					{
						kind: "unique",
						name: "uniqueLogControlInLN",
						selector: [{ steps: [{
							kind: "name",
							value: "LogControl"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					},
					{
						kind: "key",
						name: "DataSetKeyInLN",
						selector: [{ steps: [{
							kind: "name",
							value: "DataSet"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					},
					{
						kind: "keyref",
						name: "ref2DataSetReport",
						refer: "DataSetKeyInLN",
						selector: [{ steps: [{
							kind: "name",
							value: "ReportControl"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "datSet",
							isAttribute: !0
						} }]
					},
					{
						kind: "keyref",
						name: "ref2DataSetLog",
						refer: "DataSetKeyInLN",
						selector: [{ steps: [{
							kind: "name",
							value: "LogControl"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "datSet",
							isAttribute: !0
						} }]
					},
					{
						kind: "unique",
						name: "uniqueDOIinLN",
						selector: [{ steps: [{
							kind: "name",
							value: "DOI"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					},
					{
						kind: "unique",
						name: "uniqueLogInLN",
						selector: [{ steps: [{
							kind: "name",
							value: "Log"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					}
				] },
				AccessControl: { maxOccurs: 1 },
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabelInLD",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueLNInLDevice",
			selector: [{ steps: [{
				kind: "name",
				value: "LN"
			}] }],
			fields: [
				{ target: {
					kind: "attribute",
					value: "inst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "prefix",
					isAttribute: !0
				} }
			]
		}]
	},
	LN: {
		tag: "LN",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["LDevice", "AccessPoint"],
		attributes: {
			sequence: [
				"desc",
				"inst",
				"lnClass",
				"lnType",
				"prefix",
				"templateUuid",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				inst: {
					required: !0,
					facets: {
						pattern: ["[0-9]{1,12}"],
						whiteSpace: "replace"
					}
				},
				lnClass: {
					required: !0,
					facets: {
						enumeration: /* @__PURE__ */ "LLN0.LPHD.LCCH.LGOS.LSVS.LTIM.LTMS.LTRK.ANCR.ARCO.ARIS.ATCC.AVCO.CALH.CCGR.CILO.CPOW.CSWI.CSYN.FCNT.FCSD.FFIL.FLIM.FPID.FRMP.FSPT.FXOT.FXUT.GAPC.GGIO.GLOG.GSAL.IARC.IHMI.ISAF.ITCI.ITMI.ITPC.KFAN.KFIL.KPMP.KTNK.KVLV.MDIF.MENV.MFLK.MHAI.MHAN.MHYD.MMDC.MMET.MMTN.MMTR.MMXN.MMXU.MSQI.MSTA.PDIF.PDIR.PDIS.PDOP.PDUP.PFRC.PHAR.PHIZ.PIOC.PMRI.PMSS.POPF.PPAM.PRTR.PSCH.PSDE.PTEF.PTHF.PTOC.PTOF.PTOV.PTRC.PTTR.PTUC.PTUF.PTUV.PUPF.PVOC.PVPH.PZSU.QFVR.QITR.QIUB.QVTR.QVUB.QVVR.RADR.RBDR.RBRF.RDIR.RDRE.RDRS.RFLO.RMXU.RPSB.RREC.RSYN.SARC.SCBR.SIMG.SIML.SLTC.SOPM.SPDC.SPTR.SSWI.STMP.SVBR.TANG.TAXD.TCTR.TDST.TFLW.TFRQ.TGSN.THUM.TLVL.TMGF.TMVM.TPOS.TPRS.TRTN.TSND.TTMP.TTNS.TVBR.TVTR.TWPH.XCBR.XSWI.YEFN.YLTC.YPSH.YPTR.ZAXN.ZBAT.ZBSH.ZCAB.ZCAP.ZCON.ZGEN.ZGIL.ZLIN.ZMOT.ZREA.ZRES.ZRRC.ZSAR.ZSCR.ZSMC.ZTCF.ZTCR".split("."),
						pattern: [
							"[A-Z]+",
							"L[A-Z]*",
							"LLN0",
							"[A-Za-z_:][-.:0-9A-Z_a-z]*",
							"A[A-Z]*",
							"C[A-Z]*",
							"F[A-Z]*",
							"G[A-Z]*",
							"I[A-Z]*",
							"K[A-Z]*",
							"M[A-Z]*",
							"P[A-Z]*",
							"Q[A-Z]*",
							"R[A-Z]*",
							"S[A-Z]*",
							"T[A-Z]*",
							"X[A-Z]*",
							"Y[A-Z]*",
							"Z[A-Z]*"
						],
						length: 4,
						whiteSpace: "collapse"
					}
				},
				lnType: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				prefix: {
					default: "",
					facets: {
						pattern: ["[A-Za-z][0-9A-Za-z_]*", ""],
						maxLength: 11,
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: [
				"inst",
				"lnClass",
				"prefix"
			]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"DataSet",
				"ReportControl",
				"LogControl",
				"DOI",
				"Inputs",
				"Outputs",
				"Log",
				"Labels"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				DataSet: {},
				ReportControl: {},
				LogControl: {},
				DOI: { constraints: [{
					kind: "unique",
					name: "uniqueSDI_DAIinDOI",
					selector: [{ steps: [{
						kind: "name",
						value: "DAI"
					}] }, { steps: [{
						kind: "name",
						value: "SDI"
					}] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }, { target: {
						kind: "attribute",
						value: "ix",
						isAttribute: !0
					} }]
				}] },
				Inputs: { maxOccurs: 1 },
				Outputs: { maxOccurs: 1 },
				Log: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabelInLN",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				}
			}
		},
		constraints: [
			{
				kind: "unique",
				name: "uniqueReportControlInLN",
				selector: [{ steps: [{
					kind: "name",
					value: "ReportControl"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "name",
					isAttribute: !0
				} }]
			},
			{
				kind: "unique",
				name: "uniqueLogControlInLN",
				selector: [{ steps: [{
					kind: "name",
					value: "LogControl"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "name",
					isAttribute: !0
				} }]
			},
			{
				kind: "key",
				name: "DataSetKeyInLN",
				selector: [{ steps: [{
					kind: "name",
					value: "DataSet"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "name",
					isAttribute: !0
				} }]
			},
			{
				kind: "keyref",
				name: "ref2DataSetReport",
				refer: "DataSetKeyInLN",
				selector: [{ steps: [{
					kind: "name",
					value: "ReportControl"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "datSet",
					isAttribute: !0
				} }]
			},
			{
				kind: "keyref",
				name: "ref2DataSetLog",
				refer: "DataSetKeyInLN",
				selector: [{ steps: [{
					kind: "name",
					value: "LogControl"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "datSet",
					isAttribute: !0
				} }]
			},
			{
				kind: "unique",
				name: "uniqueDOIinLN",
				selector: [{ steps: [{
					kind: "name",
					value: "DOI"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "name",
					isAttribute: !0
				} }]
			},
			{
				kind: "unique",
				name: "uniqueLogInLN",
				selector: [{ steps: [{
					kind: "name",
					value: "Log"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "name",
					isAttribute: !0
				} }]
			}
		]
	},
	LN0: {
		tag: "LN0",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["LDevice"],
		attributes: {
			sequence: [
				"desc",
				"inst",
				"lnClass",
				"lnType",
				"templateUuid",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				inst: {
					required: !0,
					fixed: "",
					facets: { whiteSpace: "replace" }
				},
				lnClass: {
					required: !0,
					fixed: "LLN0",
					facets: {
						enumeration: /* @__PURE__ */ "LLN0.LPHD.LCCH.LGOS.LSVS.LTIM.LTMS.LTRK.ANCR.ARCO.ARIS.ATCC.AVCO.CALH.CCGR.CILO.CPOW.CSWI.CSYN.FCNT.FCSD.FFIL.FLIM.FPID.FRMP.FSPT.FXOT.FXUT.GAPC.GGIO.GLOG.GSAL.IARC.IHMI.ISAF.ITCI.ITMI.ITPC.KFAN.KFIL.KPMP.KTNK.KVLV.MDIF.MENV.MFLK.MHAI.MHAN.MHYD.MMDC.MMET.MMTN.MMTR.MMXN.MMXU.MSQI.MSTA.PDIF.PDIR.PDIS.PDOP.PDUP.PFRC.PHAR.PHIZ.PIOC.PMRI.PMSS.POPF.PPAM.PRTR.PSCH.PSDE.PTEF.PTHF.PTOC.PTOF.PTOV.PTRC.PTTR.PTUC.PTUF.PTUV.PUPF.PVOC.PVPH.PZSU.QFVR.QITR.QIUB.QVTR.QVUB.QVVR.RADR.RBDR.RBRF.RDIR.RDRE.RDRS.RFLO.RMXU.RPSB.RREC.RSYN.SARC.SCBR.SIMG.SIML.SLTC.SOPM.SPDC.SPTR.SSWI.STMP.SVBR.TANG.TAXD.TCTR.TDST.TFLW.TFRQ.TGSN.THUM.TLVL.TMGF.TMVM.TPOS.TPRS.TRTN.TSND.TTMP.TTNS.TVBR.TVTR.TWPH.XCBR.XSWI.YEFN.YLTC.YPSH.YPTR.ZAXN.ZBAT.ZBSH.ZCAB.ZCAP.ZCON.ZGEN.ZGIL.ZLIN.ZMOT.ZREA.ZRES.ZRRC.ZSAR.ZSCR.ZSMC.ZTCF.ZTCR".split("."),
						pattern: [
							"[A-Z]+",
							"L[A-Z]*",
							"LLN0",
							"[A-Za-z_:][-.:0-9A-Z_a-z]*",
							"A[A-Z]*",
							"C[A-Z]*",
							"F[A-Z]*",
							"G[A-Z]*",
							"I[A-Z]*",
							"K[A-Z]*",
							"M[A-Z]*",
							"P[A-Z]*",
							"Q[A-Z]*",
							"R[A-Z]*",
							"S[A-Z]*",
							"T[A-Z]*",
							"X[A-Z]*",
							"Y[A-Z]*",
							"Z[A-Z]*"
						],
						length: 4,
						whiteSpace: "collapse"
					}
				},
				lnType: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"DataSet",
				"ReportControl",
				"LogControl",
				"DOI",
				"Inputs",
				"Outputs",
				"Log",
				"Labels",
				"GSEControl",
				"SampledValueControl",
				"SettingControl"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				DataSet: {},
				ReportControl: {},
				LogControl: {},
				DOI: { constraints: [{
					kind: "unique",
					name: "uniqueSDI_DAIinDOI",
					selector: [{ steps: [{
						kind: "name",
						value: "DAI"
					}] }, { steps: [{
						kind: "name",
						value: "SDI"
					}] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }, { target: {
						kind: "attribute",
						value: "ix",
						isAttribute: !0
					} }]
				}] },
				Inputs: { maxOccurs: 1 },
				Outputs: { maxOccurs: 1 },
				Log: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabelInLN",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				GSEControl: {},
				SampledValueControl: {},
				SettingControl: { maxOccurs: 1 }
			}
		},
		constraints: [
			{
				kind: "unique",
				name: "uniqueReportControlInLN0",
				selector: [{ steps: [{
					kind: "name",
					value: "ReportControl"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "name",
					isAttribute: !0
				} }]
			},
			{
				kind: "unique",
				name: "uniqueLogControlInLN0",
				selector: [{ steps: [{
					kind: "name",
					value: "LogControl"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "name",
					isAttribute: !0
				} }]
			},
			{
				kind: "unique",
				name: "uniqueGSEControlInLN0",
				selector: [{ steps: [{
					kind: "name",
					value: "GSEControl"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "name",
					isAttribute: !0
				} }]
			},
			{
				kind: "unique",
				name: "uniqueSampledValueControlInLN0",
				selector: [{ steps: [{
					kind: "name",
					value: "SampledValueControl"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "name",
					isAttribute: !0
				} }]
			},
			{
				kind: "key",
				name: "DataSetKeyLN0",
				selector: [{ steps: [{
					kind: "name",
					value: "DataSet"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "name",
					isAttribute: !0
				} }]
			},
			{
				kind: "keyref",
				name: "ref2DataSetReportLN0",
				refer: "DataSetKeyLN0",
				selector: [{ steps: [{
					kind: "name",
					value: "ReportControl"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "datSet",
					isAttribute: !0
				} }]
			},
			{
				kind: "keyref",
				name: "ref2DataSetLogLN0",
				refer: "DataSetKeyLN0",
				selector: [{ steps: [{
					kind: "name",
					value: "LogControl"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "datSet",
					isAttribute: !0
				} }]
			},
			{
				kind: "keyref",
				name: "ref2DataSetGSELN0",
				refer: "DataSetKeyLN0",
				selector: [{ steps: [{
					kind: "name",
					value: "GSEControl"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "datSet",
					isAttribute: !0
				} }]
			},
			{
				kind: "keyref",
				name: "ref2DataSetSVLN0",
				refer: "DataSetKeyLN0",
				selector: [{ steps: [{
					kind: "name",
					value: "SampledValueControl"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "datSet",
					isAttribute: !0
				} }]
			},
			{
				kind: "unique",
				name: "uniqueDOIinLN0",
				selector: [{ steps: [{
					kind: "name",
					value: "DOI"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "name",
					isAttribute: !0
				} }]
			},
			{
				kind: "unique",
				name: "uniqueLogInLN0",
				selector: [{ steps: [{
					kind: "name",
					value: "Log"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "name",
					isAttribute: !0
				} }]
			}
		]
	},
	LNode: {
		tag: "LNode",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: [
			"Substation",
			"PowerTransformer",
			"TransformerWinding",
			"SubEquipment",
			"EqFunction",
			"GeneralEquipment",
			"EqSubFunction",
			"TapChanger",
			"VoltageLevel",
			"Bay",
			"ConductingEquipment",
			"ConnectivityNode",
			"Function",
			"SubFunction",
			"Line",
			"Process",
			"FunctionTemplate",
			"SubFunctionTemplate"
		],
		attributes: {
			sequence: [
				"desc",
				"iedName",
				"ldInst",
				"lnClass",
				"lnInst",
				"lnType",
				"lnUuid",
				"prefix",
				"templateUuid",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				iedName: {
					default: "None",
					facets: {
						pattern: [
							"[A-Za-z][0-9A-Za-z_]{0,2}",
							"[A-Za-z][0-9A-Za-z_]{4,63}",
							"[A-MO-Za-z][0-9A-Za-z_]{3}",
							"N[0-9A-Za-np-z_][0-9A-Za-z_]{2}",
							"No[0-9A-Za-mo-z_][0-9A-Za-z_]",
							"Non[0-9A-Za-df-z_]",
							"None",
							"[A-Za-z][0-9A-Za-z_]*",
							"[A-Za-z_:][-.:0-9A-Z_a-z]*"
						],
						maxLength: 64,
						whiteSpace: "collapse"
					}
				},
				ldInst: {
					default: "",
					facets: {
						pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
						maxLength: 64,
						whiteSpace: "replace"
					}
				},
				lnClass: {
					required: !0,
					facets: {
						enumeration: /* @__PURE__ */ "LLN0.LPHD.LCCH.LGOS.LSVS.LTIM.LTMS.LTRK.ANCR.ARCO.ARIS.ATCC.AVCO.CALH.CCGR.CILO.CPOW.CSWI.CSYN.FCNT.FCSD.FFIL.FLIM.FPID.FRMP.FSPT.FXOT.FXUT.GAPC.GGIO.GLOG.GSAL.IARC.IHMI.ISAF.ITCI.ITMI.ITPC.KFAN.KFIL.KPMP.KTNK.KVLV.MDIF.MENV.MFLK.MHAI.MHAN.MHYD.MMDC.MMET.MMTN.MMTR.MMXN.MMXU.MSQI.MSTA.PDIF.PDIR.PDIS.PDOP.PDUP.PFRC.PHAR.PHIZ.PIOC.PMRI.PMSS.POPF.PPAM.PRTR.PSCH.PSDE.PTEF.PTHF.PTOC.PTOF.PTOV.PTRC.PTTR.PTUC.PTUF.PTUV.PUPF.PVOC.PVPH.PZSU.QFVR.QITR.QIUB.QVTR.QVUB.QVVR.RADR.RBDR.RBRF.RDIR.RDRE.RDRS.RFLO.RMXU.RPSB.RREC.RSYN.SARC.SCBR.SIMG.SIML.SLTC.SOPM.SPDC.SPTR.SSWI.STMP.SVBR.TANG.TAXD.TCTR.TDST.TFLW.TFRQ.TGSN.THUM.TLVL.TMGF.TMVM.TPOS.TPRS.TRTN.TSND.TTMP.TTNS.TVBR.TVTR.TWPH.XCBR.XSWI.YEFN.YLTC.YPSH.YPTR.ZAXN.ZBAT.ZBSH.ZCAB.ZCAP.ZCON.ZGEN.ZGIL.ZLIN.ZMOT.ZREA.ZRES.ZRRC.ZSAR.ZSCR.ZSMC.ZTCF.ZTCR".split("."),
						pattern: [
							"[A-Z]+",
							"L[A-Z]*",
							"LLN0",
							"[A-Za-z_:][-.:0-9A-Z_a-z]*",
							"A[A-Z]*",
							"C[A-Z]*",
							"F[A-Z]*",
							"G[A-Z]*",
							"I[A-Z]*",
							"K[A-Z]*",
							"M[A-Z]*",
							"P[A-Z]*",
							"Q[A-Z]*",
							"R[A-Z]*",
							"S[A-Z]*",
							"T[A-Z]*",
							"X[A-Z]*",
							"Y[A-Z]*",
							"Z[A-Z]*"
						],
						length: 4,
						whiteSpace: "collapse"
					}
				},
				lnInst: {
					default: "",
					facets: {
						pattern: ["[0-9]{1,12}"],
						maxLength: 0,
						whiteSpace: "replace"
					}
				},
				lnType: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				lnUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				prefix: {
					default: "",
					facets: {
						pattern: ["[A-Za-z][0-9A-Za-z_]*", ""],
						maxLength: 11,
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: [
				"iedName",
				"ldInst",
				"lnClass",
				"lnInst",
				"prefix"
			]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels",
				"BehaviorDescription",
				"DOS",
				"LNodeInputs",
				"LNodeOutputs",
				"LNodeSpecNaming"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabelInLNode",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				BehaviorDescription: {},
				DOS: {},
				LNodeInputs: {},
				LNodeOutputs: {},
				LNodeSpecNaming: {}
			}
		}
	},
	LNodeDataRef: {
		tag: "LNodeDataRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Reference to Data belonging to current role",
		parents: ["SignalRole"],
		attributes: {
			sequence: [
				"daName",
				"data",
				"desc",
				"doName",
				"lnodeUuid"
			],
			details: {
				daName: { facets: {
					pattern: ["[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?(\\.[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?)*"],
					whiteSpace: "replace"
				} },
				data: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				doName: { facets: {
					pattern: ["[A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?"],
					whiteSpace: "replace"
				} },
				lnodeUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: ["Text", "FunctionalVariantRef"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				FunctionalVariantRef: {}
			},
			choices: [{ options: ["FunctionalVariantRef"] }]
		}
	},
	LNodeInputRef: {
		tag: "LNodeInputRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Reference to SourceRefs belonging to current role",
		parents: ["SignalRole"],
		attributes: {
			sequence: [
				"desc",
				"sourceRef",
				"sourceRefUuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				sourceRef: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				sourceRefUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: ["Text", "FunctionalVariantRef"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				FunctionalVariantRef: {}
			},
			choices: [{ options: ["FunctionalVariantRef"] }]
		}
	},
	LNodeInputs: {
		tag: "LNodeInputs",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "List of specification inputs of the given LNode. To be added at LNode level",
		parents: ["LNode"],
		attributes: {
			sequence: ["desc"],
			details: { desc: {
				default: "",
				facets: { whiteSpace: "replace" }
			} }
		},
		children: {
			sequence: ["Text", "SourceRef"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				SourceRef: {
					required: !0,
					minOccurs: 1
				}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueSourceRef",
			selector: [{ steps: [{
				kind: "name",
				value: "SourceRef"
			}] }],
			fields: [
				{ target: {
					kind: "attribute",
					value: "input",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "inputInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "pDA",
					isAttribute: !0
				} }
			]
		}]
	},
	LNodeOutputRef: {
		tag: "LNodeOutputRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Reference to ControlRefs belonging to current role",
		parents: ["SignalRole"],
		attributes: {
			sequence: [
				"controlRef",
				"controlRefUuid",
				"desc"
			],
			details: {
				controlRef: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				controlRefUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				}
			}
		},
		children: {
			sequence: ["Text", "FunctionalVariantRef"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				FunctionalVariantRef: {}
			},
			choices: [{ options: ["FunctionalVariantRef"] }]
		}
	},
	LNodeOutputs: {
		tag: "LNodeOutputs",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "List of specification outputs of the given LNode. To be added at LNode level",
		parents: ["LNode"],
		attributes: {
			sequence: ["desc"],
			details: { desc: {
				default: "",
				facets: { whiteSpace: "replace" }
			} }
		},
		children: {
			sequence: ["Text", "ControlRef"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				ControlRef: {
					required: !0,
					minOccurs: 1
				}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueControlRef",
			selector: [{ steps: [{
				kind: "name",
				value: "ControlRef"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "output",
				isAttribute: !0
			} }, { target: {
				kind: "attribute",
				value: "outputInst",
				isAttribute: !0
			} }]
		}]
	},
	LNodeSpecNaming: {
		tag: "LNodeSpecNaming",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "LNode user specification. To be added to LNode SCL element",
		parents: ["LNode"],
		attributes: {
			sequence: [
				"sIedName",
				"sLdInst",
				"sLnClass",
				"sLnInst",
				"sPrefix"
			],
			details: {
				sIedName: { facets: {
					pattern: [
						"[A-Za-z][0-9A-Za-z_]{0,2}",
						"[A-Za-z][0-9A-Za-z_]{4,63}",
						"[A-MO-Za-z][0-9A-Za-z_]{3}",
						"N[0-9A-Za-np-z_][0-9A-Za-z_]{2}",
						"No[0-9A-Za-mo-z_][0-9A-Za-z_]",
						"Non[0-9A-Za-df-z_]",
						"None",
						"[A-Za-z][0-9A-Za-z_]*",
						"[A-Za-z_:][-.:0-9A-Z_a-z]*"
					],
					maxLength: 64,
					whiteSpace: "collapse"
				} },
				sLdInst: { facets: {
					pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
					maxLength: 64,
					whiteSpace: "replace"
				} },
				sLnClass: { facets: {
					enumeration: /* @__PURE__ */ "LLN0.LPHD.LCCH.LGOS.LSVS.LTIM.LTMS.LTRK.ANCR.ARCO.ARIS.ATCC.AVCO.CALH.CCGR.CILO.CPOW.CSWI.CSYN.FCNT.FCSD.FFIL.FLIM.FPID.FRMP.FSPT.FXOT.FXUT.GAPC.GGIO.GLOG.GSAL.IARC.IHMI.ISAF.ITCI.ITMI.ITPC.KFAN.KFIL.KPMP.KTNK.KVLV.MDIF.MENV.MFLK.MHAI.MHAN.MHYD.MMDC.MMET.MMTN.MMTR.MMXN.MMXU.MSQI.MSTA.PDIF.PDIR.PDIS.PDOP.PDUP.PFRC.PHAR.PHIZ.PIOC.PMRI.PMSS.POPF.PPAM.PRTR.PSCH.PSDE.PTEF.PTHF.PTOC.PTOF.PTOV.PTRC.PTTR.PTUC.PTUF.PTUV.PUPF.PVOC.PVPH.PZSU.QFVR.QITR.QIUB.QVTR.QVUB.QVVR.RADR.RBDR.RBRF.RDIR.RDRE.RDRS.RFLO.RMXU.RPSB.RREC.RSYN.SARC.SCBR.SIMG.SIML.SLTC.SOPM.SPDC.SPTR.SSWI.STMP.SVBR.TANG.TAXD.TCTR.TDST.TFLW.TFRQ.TGSN.THUM.TLVL.TMGF.TMVM.TPOS.TPRS.TRTN.TSND.TTMP.TTNS.TVBR.TVTR.TWPH.XCBR.XSWI.YEFN.YLTC.YPSH.YPTR.ZAXN.ZBAT.ZBSH.ZCAB.ZCAP.ZCON.ZGEN.ZGIL.ZLIN.ZMOT.ZREA.ZRES.ZRRC.ZSAR.ZSCR.ZSMC.ZTCF.ZTCR".split("."),
					pattern: [
						"[A-Z]+",
						"L[A-Z]*",
						"LLN0",
						"[A-Za-z_:][-.:0-9A-Z_a-z]*",
						"A[A-Z]*",
						"C[A-Z]*",
						"F[A-Z]*",
						"G[A-Z]*",
						"I[A-Z]*",
						"K[A-Z]*",
						"M[A-Z]*",
						"P[A-Z]*",
						"Q[A-Z]*",
						"R[A-Z]*",
						"S[A-Z]*",
						"T[A-Z]*",
						"X[A-Z]*",
						"Y[A-Z]*",
						"Z[A-Z]*"
					],
					length: 4,
					whiteSpace: "collapse"
				} },
				sLnInst: { facets: {
					pattern: ["[0-9]{1,12}"],
					whiteSpace: "replace"
				} },
				sPrefix: { facets: {
					pattern: ["[A-Za-z][0-9A-Za-z_]*", ""],
					maxLength: 11,
					whiteSpace: "replace"
				} }
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	LNodeType: {
		tag: "LNodeType",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["DataTypeTemplates"],
		attributes: {
			sequence: [
				"desc",
				"id",
				"iedType",
				"lnClass"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				id: {
					required: !0,
					facets: {
						pattern: ["\\S+"],
						minLength: 1,
						maxLength: 255,
						whiteSpace: "collapse"
					}
				},
				iedType: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				lnClass: {
					required: !0,
					facets: {
						enumeration: /* @__PURE__ */ "LLN0.LPHD.LCCH.LGOS.LSVS.LTIM.LTMS.LTRK.ANCR.ARCO.ARIS.ATCC.AVCO.CALH.CCGR.CILO.CPOW.CSWI.CSYN.FCNT.FCSD.FFIL.FLIM.FPID.FRMP.FSPT.FXOT.FXUT.GAPC.GGIO.GLOG.GSAL.IARC.IHMI.ISAF.ITCI.ITMI.ITPC.KFAN.KFIL.KPMP.KTNK.KVLV.MDIF.MENV.MFLK.MHAI.MHAN.MHYD.MMDC.MMET.MMTN.MMTR.MMXN.MMXU.MSQI.MSTA.PDIF.PDIR.PDIS.PDOP.PDUP.PFRC.PHAR.PHIZ.PIOC.PMRI.PMSS.POPF.PPAM.PRTR.PSCH.PSDE.PTEF.PTHF.PTOC.PTOF.PTOV.PTRC.PTTR.PTUC.PTUF.PTUV.PUPF.PVOC.PVPH.PZSU.QFVR.QITR.QIUB.QVTR.QVUB.QVVR.RADR.RBDR.RBRF.RDIR.RDRE.RDRS.RFLO.RMXU.RPSB.RREC.RSYN.SARC.SCBR.SIMG.SIML.SLTC.SOPM.SPDC.SPTR.SSWI.STMP.SVBR.TANG.TAXD.TCTR.TDST.TFLW.TFRQ.TGSN.THUM.TLVL.TMGF.TMVM.TPOS.TPRS.TRTN.TSND.TTMP.TTNS.TVBR.TVTR.TWPH.XCBR.XSWI.YEFN.YLTC.YPSH.YPTR.ZAXN.ZBAT.ZBSH.ZCAB.ZCAP.ZCON.ZGEN.ZGIL.ZLIN.ZMOT.ZREA.ZRES.ZRRC.ZSAR.ZSCR.ZSMC.ZTCF.ZTCR".split("."),
						pattern: [
							"[A-Z]+",
							"L[A-Z]*",
							"LLN0",
							"[A-Za-z_:][-.:0-9A-Z_a-z]*",
							"A[A-Z]*",
							"C[A-Z]*",
							"F[A-Z]*",
							"G[A-Z]*",
							"I[A-Z]*",
							"K[A-Z]*",
							"M[A-Z]*",
							"P[A-Z]*",
							"Q[A-Z]*",
							"R[A-Z]*",
							"S[A-Z]*",
							"T[A-Z]*",
							"X[A-Z]*",
							"Y[A-Z]*",
							"Z[A-Z]*"
						],
						length: 4,
						whiteSpace: "collapse"
					}
				}
			},
			identityFields: ["id", "lnClass"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"DO",
				"Labels"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				DO: {
					required: !0,
					minOccurs: 1
				},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabelInLNType",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueDOInLNodeType",
			selector: [{ steps: [{
				kind: "name",
				value: "DO"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
	},
	Label: {
		tag: "Label",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Labels"],
		attributes: {
			sequence: ["id", "lang"],
			details: {
				id: { facets: {
					pattern: ["\\S+"],
					minLength: 1,
					maxLength: 255,
					whiteSpace: "collapse"
				} },
				lang: {
					required: !0,
					facets: {
						pattern: ["[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*"],
						whiteSpace: "collapse"
					}
				}
			},
			identityFields: ["id", "lang"]
		},
		children: {
			sequence: [],
			details: {}
		},
		textContent: { facets: { whiteSpace: "replace" } }
	},
	Labels: {
		tag: "Labels",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: /* @__PURE__ */ "Substation.LNode.PowerTransformer.TransformerWinding.SubEquipment.EqFunction.GeneralEquipment.EqSubFunction.TapChanger.VoltageLevel.Bay.ConductingEquipment.ConnectivityNode.Function.SubFunction.SubNetwork.DAI.SDI.DOI.LN0.LN.LDevice.GOOSESecurity.SMVSecurity.AccessPoint.IED.DO.LNodeType.SDO.DA.DOType.BDA.DAType.Line.Process.DAS.SDS.DOS".split("."),
		attributes: {
			sequence: ["desc"],
			details: { desc: {
				default: "",
				facets: { whiteSpace: "replace" }
			} }
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Label"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Label: {
					required: !0,
					minOccurs: 1
				}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueLabel",
			selector: [{ steps: [{
				kind: "name",
				value: "Label"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "id",
				isAttribute: !0
			} }, { target: {
				kind: "attribute",
				value: "lang",
				isAttribute: !0
			} }]
		}]
	},
	Line: {
		tag: "Line",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["SCL", "Process"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"nomFreq",
				"numPhases",
				"templateUuid",
				"type",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				nomFreq: { facets: {
					minInclusive: 0,
					whiteSpace: "collapse"
				} },
				numPhases: { facets: {
					minInclusive: 0,
					maxInclusive: 255,
					minExclusive: 0,
					whiteSpace: "collapse"
				} },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				type: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels",
				"LNode",
				"GeneralEquipment",
				"Function",
				"Voltage",
				"ConductingEquipment",
				"ConnectivityNode",
				"AllocationRole",
				"Application",
				"BehaviorDescription",
				"FunctionCategory",
				"ProcessResources",
				"Variable"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabel",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				LNode: {},
				GeneralEquipment: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInGeneralEquipment2",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInGE2",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				Function: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInFunction",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInFunction",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				Voltage: { maxOccurs: 1 },
				ConductingEquipment: {
					required: !0,
					minOccurs: 1
				},
				ConnectivityNode: {},
				AllocationRole: {},
				Application: {},
				BehaviorDescription: {},
				FunctionCategory: {},
				ProcessResources: {},
				Variable: {}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueChildNameInLine",
			selector: [{ steps: [{ kind: "wildcard" }] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}, {
			kind: "unique",
			name: "uniqueLNodeInLine",
			selector: [{ steps: [{
				kind: "name",
				value: "LNode"
			}] }],
			fields: [
				{ target: {
					kind: "attribute",
					value: "lnInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "iedName",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "ldInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "prefix",
					isAttribute: !0
				} }
			]
		}]
	},
	Log: {
		tag: "Log",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["LN0", "LN"],
		attributes: {
			sequence: ["desc", "name"],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: { facets: {
					pattern: ["[A-Za-z][0-9A-Za-z_]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					maxLength: 32,
					whiteSpace: "collapse"
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: ["Text", "Private"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {}
			}
		}
	},
	LogControl: {
		tag: "LogControl",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["LN0", "LN"],
		attributes: {
			sequence: [
				"bufTime",
				"datSet",
				"desc",
				"intgPd",
				"ldInst",
				"lnClass",
				"lnInst",
				"logEna",
				"logName",
				"name",
				"prefix",
				"reasonCode",
				"templateUuid",
				"uuid"
			],
			details: {
				bufTime: {
					default: "0",
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				},
				datSet: { facets: {
					pattern: ["[A-Za-z][0-9A-Za-z_]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					maxLength: 32,
					whiteSpace: "collapse"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				intgPd: {
					default: "0",
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				},
				ldInst: { facets: {
					pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
					maxLength: 64,
					whiteSpace: "replace"
				} },
				lnClass: {
					default: "LLN0",
					facets: {
						enumeration: /* @__PURE__ */ "LLN0.LPHD.LCCH.LGOS.LSVS.LTIM.LTMS.LTRK.ANCR.ARCO.ARIS.ATCC.AVCO.CALH.CCGR.CILO.CPOW.CSWI.CSYN.FCNT.FCSD.FFIL.FLIM.FPID.FRMP.FSPT.FXOT.FXUT.GAPC.GGIO.GLOG.GSAL.IARC.IHMI.ISAF.ITCI.ITMI.ITPC.KFAN.KFIL.KPMP.KTNK.KVLV.MDIF.MENV.MFLK.MHAI.MHAN.MHYD.MMDC.MMET.MMTN.MMTR.MMXN.MMXU.MSQI.MSTA.PDIF.PDIR.PDIS.PDOP.PDUP.PFRC.PHAR.PHIZ.PIOC.PMRI.PMSS.POPF.PPAM.PRTR.PSCH.PSDE.PTEF.PTHF.PTOC.PTOF.PTOV.PTRC.PTTR.PTUC.PTUF.PTUV.PUPF.PVOC.PVPH.PZSU.QFVR.QITR.QIUB.QVTR.QVUB.QVVR.RADR.RBDR.RBRF.RDIR.RDRE.RDRS.RFLO.RMXU.RPSB.RREC.RSYN.SARC.SCBR.SIMG.SIML.SLTC.SOPM.SPDC.SPTR.SSWI.STMP.SVBR.TANG.TAXD.TCTR.TDST.TFLW.TFRQ.TGSN.THUM.TLVL.TMGF.TMVM.TPOS.TPRS.TRTN.TSND.TTMP.TTNS.TVBR.TVTR.TWPH.XCBR.XSWI.YEFN.YLTC.YPSH.YPTR.ZAXN.ZBAT.ZBSH.ZCAB.ZCAP.ZCON.ZGEN.ZGIL.ZLIN.ZMOT.ZREA.ZRES.ZRRC.ZSAR.ZSCR.ZSMC.ZTCF.ZTCR".split("."),
						pattern: [
							"[A-Z]+",
							"L[A-Z]*",
							"LLN0",
							"[A-Za-z_:][-.:0-9A-Z_a-z]*",
							"A[A-Z]*",
							"C[A-Z]*",
							"F[A-Z]*",
							"G[A-Z]*",
							"I[A-Z]*",
							"K[A-Z]*",
							"M[A-Z]*",
							"P[A-Z]*",
							"Q[A-Z]*",
							"R[A-Z]*",
							"S[A-Z]*",
							"T[A-Z]*",
							"X[A-Z]*",
							"Y[A-Z]*",
							"Z[A-Z]*"
						],
						length: 4,
						whiteSpace: "collapse"
					}
				},
				lnInst: { facets: {
					pattern: ["[0-9]{1,12}"],
					whiteSpace: "replace"
				} },
				logEna: {
					default: "true",
					facets: { whiteSpace: "collapse" }
				},
				logName: {
					required: !0,
					facets: {
						pattern: ["[A-Za-z][0-9A-Za-z_]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						maxLength: 32,
						whiteSpace: "collapse"
					}
				},
				name: {
					required: !0,
					facets: {
						pattern: ["[A-Za-z][0-9A-Za-z_]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						maxLength: 32,
						whiteSpace: "collapse"
					}
				},
				prefix: {
					default: "",
					facets: {
						pattern: ["[A-Za-z][0-9A-Za-z_]*", ""],
						maxLength: 11,
						whiteSpace: "replace"
					}
				},
				reasonCode: {
					default: "true",
					facets: { whiteSpace: "collapse" }
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"TrgOps"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				TrgOps: { maxOccurs: 1 }
			}
		}
	},
	LogParameters: {
		tag: "LogParameters",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		parents: ["ServiceSpecifications"],
		attributes: {
			sequence: [
				"cbName",
				"desc",
				"dsName",
				"id",
				"intgPd",
				"logEna",
				"logLdInst",
				"logLnClass",
				"logLnInst",
				"logName",
				"logPrefix",
				"reasonCode"
			],
			details: {
				cbName: { facets: { whiteSpace: "replace" } },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				dsName: { facets: { whiteSpace: "replace" } },
				id: {
					required: !0,
					facets: {
						pattern: ["\\S+"],
						minLength: 1,
						maxLength: 255,
						whiteSpace: "collapse"
					}
				},
				intgPd: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} },
				logEna: { facets: { whiteSpace: "collapse" } },
				logLdInst: { facets: {
					pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
					maxLength: 64,
					whiteSpace: "replace"
				} },
				logLnClass: { facets: {
					enumeration: /* @__PURE__ */ "LLN0.LPHD.LCCH.LGOS.LSVS.LTIM.LTMS.LTRK.ANCR.ARCO.ARIS.ATCC.AVCO.CALH.CCGR.CILO.CPOW.CSWI.CSYN.FCNT.FCSD.FFIL.FLIM.FPID.FRMP.FSPT.FXOT.FXUT.GAPC.GGIO.GLOG.GSAL.IARC.IHMI.ISAF.ITCI.ITMI.ITPC.KFAN.KFIL.KPMP.KTNK.KVLV.MDIF.MENV.MFLK.MHAI.MHAN.MHYD.MMDC.MMET.MMTN.MMTR.MMXN.MMXU.MSQI.MSTA.PDIF.PDIR.PDIS.PDOP.PDUP.PFRC.PHAR.PHIZ.PIOC.PMRI.PMSS.POPF.PPAM.PRTR.PSCH.PSDE.PTEF.PTHF.PTOC.PTOF.PTOV.PTRC.PTTR.PTUC.PTUF.PTUV.PUPF.PVOC.PVPH.PZSU.QFVR.QITR.QIUB.QVTR.QVUB.QVVR.RADR.RBDR.RBRF.RDIR.RDRE.RDRS.RFLO.RMXU.RPSB.RREC.RSYN.SARC.SCBR.SIMG.SIML.SLTC.SOPM.SPDC.SPTR.SSWI.STMP.SVBR.TANG.TAXD.TCTR.TDST.TFLW.TFRQ.TGSN.THUM.TLVL.TMGF.TMVM.TPOS.TPRS.TRTN.TSND.TTMP.TTNS.TVBR.TVTR.TWPH.XCBR.XSWI.YEFN.YLTC.YPSH.YPTR.ZAXN.ZBAT.ZBSH.ZCAB.ZCAP.ZCON.ZGEN.ZGIL.ZLIN.ZMOT.ZREA.ZRES.ZRRC.ZSAR.ZSCR.ZSMC.ZTCF.ZTCR".split("."),
					pattern: [
						"[A-Z]+",
						"L[A-Z]*",
						"LLN0",
						"[A-Za-z_:][-.:0-9A-Z_a-z]*",
						"A[A-Z]*",
						"C[A-Z]*",
						"F[A-Z]*",
						"G[A-Z]*",
						"I[A-Z]*",
						"K[A-Z]*",
						"M[A-Z]*",
						"P[A-Z]*",
						"Q[A-Z]*",
						"R[A-Z]*",
						"S[A-Z]*",
						"T[A-Z]*",
						"X[A-Z]*",
						"Y[A-Z]*",
						"Z[A-Z]*"
					],
					length: 4,
					whiteSpace: "collapse"
				} },
				logLnInst: { facets: {
					pattern: ["[0-9]{1,12}"],
					whiteSpace: "replace"
				} },
				logName: { facets: {
					pattern: ["[A-Za-z][0-9A-Za-z_]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					maxLength: 32,
					whiteSpace: "collapse"
				} },
				logPrefix: { facets: {
					pattern: ["[A-Za-z][0-9A-Za-z_]*", ""],
					maxLength: 11,
					whiteSpace: "replace"
				} },
				reasonCode: { facets: { whiteSpace: "collapse" } }
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	LogParametersRef: {
		tag: "LogParametersRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Specification of the Log parameters expected for the current DAS when Log capability is required",
		parents: [
			"DAS",
			"SDS",
			"DOS"
		],
		attributes: {
			sequence: ["desc", "id"],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				id: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				}
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	LogSettings: {
		tag: "LogSettings",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [
				"cbName",
				"datSet",
				"intgPd",
				"logEna",
				"trgOps"
			],
			details: {
				cbName: {
					default: "Fix",
					facets: {
						enumeration: ["Conf", "Fix"],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				datSet: {
					default: "Fix",
					facets: {
						enumeration: [
							"Dyn",
							"Conf",
							"Fix"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				intgPd: {
					default: "Fix",
					facets: {
						enumeration: [
							"Dyn",
							"Conf",
							"Fix"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				logEna: {
					default: "Fix",
					facets: {
						enumeration: [
							"Dyn",
							"Conf",
							"Fix"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				trgOps: {
					default: "Fix",
					facets: {
						enumeration: [
							"Dyn",
							"Conf",
							"Fix"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	MaxTime: {
		tag: "MaxTime",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["GSE"],
		attributes: {
			sequence: ["multiplier", "unit"],
			details: {
				multiplier: {
					fixed: "m",
					facets: {
						enumeration: [
							"",
							"m",
							"k",
							"M",
							"mu",
							"y",
							"z",
							"a",
							"f",
							"p",
							"n",
							"c",
							"d",
							"da",
							"h",
							"G",
							"T",
							"P",
							"E",
							"Z",
							"Y"
						],
						whiteSpace: "replace"
					}
				},
				unit: {
					fixed: "s",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		},
		textContent: { facets: { whiteSpace: "collapse" } }
	},
	McSecurity: {
		tag: "McSecurity",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["GSESettings", "SMVSettings"],
		attributes: {
			sequence: ["encryption", "signature"],
			details: {
				encryption: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				signature: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	MinRequestedSCDFile: {
		tag: "MinRequestedSCDFile",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["MinRequestedSCDFiles"],
		attributes: {
			sequence: [
				"desc",
				"fileName",
				"fileType",
				"fileUuid",
				"revision",
				"version",
				"when"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				fileName: { facets: { whiteSpace: "replace" } },
				fileType: {
					required: !0,
					facets: {
						enumeration: [
							"SCD",
							"ICD",
							"IID",
							"CID",
							"SSD",
							"SED"
						],
						pattern: ["[A-Z]{3}", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "replace"
					}
				},
				fileUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				revision: {
					required: !0,
					facets: { whiteSpace: "replace" }
				},
				version: {
					required: !0,
					facets: { whiteSpace: "replace" }
				},
				when: { facets: { whiteSpace: "replace" } }
			},
			identityFields: ["fileUuid"]
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	MinRequestedSCDFiles: {
		tag: "MinRequestedSCDFiles",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["IED"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"MinRequestedSCDFile"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				MinRequestedSCDFile: {}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueProjectInReqSCD",
			selector: [{ steps: [{
				kind: "name",
				value: "MinRequestedSCDFile"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "fileUuid",
				isAttribute: !0
			} }]
		}]
	},
	MinTime: {
		tag: "MinTime",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["GSE"],
		attributes: {
			sequence: ["multiplier", "unit"],
			details: {
				multiplier: {
					fixed: "m",
					facets: {
						enumeration: [
							"",
							"m",
							"k",
							"M",
							"mu",
							"y",
							"z",
							"a",
							"f",
							"p",
							"n",
							"c",
							"d",
							"da",
							"h",
							"G",
							"T",
							"P",
							"E",
							"Z",
							"Y"
						],
						whiteSpace: "replace"
					}
				},
				unit: {
					fixed: "s",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		},
		textContent: { facets: { whiteSpace: "collapse" } }
	},
	MultiAPPerSubNet: {
		tag: "MultiAPPerSubNet",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	NeutralPoint: {
		tag: "NeutralPoint",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["TransformerWinding"],
		attributes: {
			sequence: [
				"bayName",
				"cNodeName",
				"cNodeUuid",
				"connectivityNode",
				"desc",
				"lineName",
				"name",
				"processName",
				"substationName",
				"voltageLevelName"
			],
			details: {
				bayName: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				cNodeName: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				cNodeUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				connectivityNode: {
					required: !0,
					facets: {
						pattern: [".+/.+(/.+)*"],
						whiteSpace: "replace"
					}
				},
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				lineName: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				name: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				processName: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				substationName: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				voltageLevelName: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} }
			}
		},
		children: {
			sequence: ["Text", "Private"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {}
			}
		}
	},
	OptFields: {
		tag: "OptFields",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["ReportControl"],
		attributes: {
			sequence: [
				"bufOvfl",
				"configRef",
				"dataRef",
				"dataSet",
				"entryID",
				"reasonCode",
				"seqNum",
				"timeStamp"
			],
			details: {
				bufOvfl: {
					default: "true",
					facets: { whiteSpace: "collapse" }
				},
				configRef: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				dataRef: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				dataSet: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				entryID: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				reasonCode: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				seqNum: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				timeStamp: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	OutputVar: {
		tag: "OutputVar",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Output variable used in the behavior description",
		parents: ["BehaviorDescription"],
		attributes: {
			sequence: [
				"daName",
				"dataName",
				"desc",
				"doName",
				"lnodeUuid",
				"outputName",
				"outputUuid",
				"value",
				"varName"
			],
			details: {
				daName: { facets: {
					pattern: ["[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?(\\.[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?)*"],
					whiteSpace: "replace"
				} },
				dataName: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				doName: { facets: {
					pattern: ["[A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?"],
					whiteSpace: "replace"
				} },
				lnodeUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				outputName: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				outputUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				value: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				varName: {
					required: !0,
					facets: { whiteSpace: "replace" }
				}
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	OutputVarRef: {
		tag: "OutputVarRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Reference to OutputVar belonging to current behavior description",
		parents: ["BehaviorDescriptionRef"],
		attributes: {
			sequence: [
				"desc",
				"value",
				"variable"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				value: { facets: { whiteSpace: "replace" } },
				variable: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} }
			}
		},
		children: {
			sequence: ["Text", "FunctionalVariantRef"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				FunctionalVariantRef: {}
			},
			choices: [{ options: ["FunctionalVariantRef"] }]
		}
	},
	Outputs: {
		tag: "Outputs",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["LN0", "LN"],
		attributes: {
			sequence: ["desc"],
			details: { desc: {
				default: "",
				facets: { whiteSpace: "replace" }
			} }
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"ExtCtrl"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				ExtCtrl: {
					required: !0,
					minOccurs: 1
				}
			}
		}
	},
	P: {
		tag: "P",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Address", "PhysConn"],
		attributes: {
			sequence: ["type"],
			details: { type: {
				required: !0,
				facets: {
					enumeration: /* @__PURE__ */ "IP.IP-SUBNET.IP-GATEWAY.OSI-NSAP.OSI-TSEL.OSI-SSEL.OSI-PSEL.OSI-AP-Title.OSI-AP-Invoke.OSI-AE-Qualifier.OSI-AE-Invoke.MAC-Address.APPID.VLAN-PRIORITY.VLAN-ID.SNTP-Port.MMS-Port.DNSName.IPv6FlowLabel.IPv6ClassOfTraffic.C37-118-IP-Port.IP-UDP-PORT.IP-TCP-PORT.IPv6.IPv6-SUBNET.IPv6-GATEWAY.IPv6-IGMPv3Src.IP-IGMPv3Src.IP-ClassOfTraffic".split("."),
					pattern: ["[A-Z][0-9A-Za-z\\-]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					whiteSpace: "replace"
				}
			} },
			identityFields: ["type"]
		},
		children: {
			sequence: [],
			details: {}
		},
		textContent: { facets: {
			minLength: 1,
			whiteSpace: "replace"
		} }
	},
	PhysConn: {
		tag: "PhysConn",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["ConnectedAP"],
		attributes: {
			sequence: ["desc", "type"],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				type: {
					required: !0,
					facets: {
						enumeration: ["Connection", "RedConn"],
						pattern: ["[A-Z][0-9A-Za-z\\-]*"],
						whiteSpace: "replace"
					}
				}
			}
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"P"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				P: {}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniquePTypeInPhysConn",
			selector: [{ steps: [{
				kind: "name",
				value: "P"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "type",
				isAttribute: !0
			} }]
		}]
	},
	PowerSystemRelation: {
		tag: "PowerSystemRelation",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		parents: ["PowerSystemRelations"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"originUuid",
				"relation",
				"relationUuid",
				"selector",
				"templateUuid",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				originUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				relation: { facets: { whiteSpace: "replace" } },
				relationUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				selector: { facets: { whiteSpace: "replace" } },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	PowerSystemRelationRef: {
		tag: "PowerSystemRelationRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Reference to a power system relation attached to current role",
		parents: ["FunctionRoleContent"],
		attributes: {
			sequence: [
				"desc",
				"powerSystemRelation",
				"powerSystemRelationUuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				powerSystemRelation: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				powerSystemRelationUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: ["Text", "FunctionalVariantRef"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				FunctionalVariantRef: {}
			},
			choices: [{ options: ["FunctionalVariantRef"] }]
		}
	},
	PowerSystemRelations: {
		tag: "PowerSystemRelations",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Functional relation from a Function/SubFunction to another element of the process",
		parents: [
			"Function",
			"SubFunction",
			"EqFunction",
			"EqSubFunction"
		],
		attributes: {
			sequence: ["desc"],
			details: { desc: {
				default: "",
				facets: { whiteSpace: "replace" }
			} }
		},
		children: {
			sequence: ["Text", "PowerSystemRelation"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				PowerSystemRelation: {
					required: !0,
					minOccurs: 1
				}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniquePSR",
			selector: [{ steps: [{
				kind: "name",
				value: "PowerSystemRelation"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
	},
	PowerTransformer: {
		tag: "PowerTransformer",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: [
			"Substation",
			"VoltageLevel",
			"Bay"
		],
		attributes: {
			sequence: [
				"desc",
				"name",
				"templateUuid",
				"type",
				"uuid",
				"virtual"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				type: {
					required: !0,
					fixed: "PTR",
					facets: {
						enumeration: ["PTR"],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				virtual: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels",
				"LNode",
				"TransformerWinding",
				"SubEquipment",
				"EqFunction"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabel",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				LNode: {},
				TransformerWinding: {
					required: !0,
					minOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLNodeInTransformerWinding",
						selector: [{ steps: [{
							kind: "name",
							value: "LNode"
						}] }],
						fields: [
							{ target: {
								kind: "attribute",
								value: "lnInst",
								isAttribute: !0
							} },
							{ target: {
								kind: "attribute",
								value: "lnClass",
								isAttribute: !0
							} },
							{ target: {
								kind: "attribute",
								value: "iedName",
								isAttribute: !0
							} },
							{ target: {
								kind: "attribute",
								value: "ldInst",
								isAttribute: !0
							} },
							{ target: {
								kind: "attribute",
								value: "prefix",
								isAttribute: !0
							} }
						]
					}, {
						kind: "unique",
						name: "uniqueChildNameInPTW",
						selector: [
							{ steps: [{
								kind: "name",
								value: "SubEquipment"
							}] },
							{ steps: [{
								kind: "name",
								value: "TapChanger"
							}] },
							{ steps: [{
								kind: "name",
								value: "EqFunction"
							}] }
						],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					}]
				},
				SubEquipment: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInSubEquipmentPTR",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInPTRSubEquipment",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				EqFunction: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInFuncForPTR",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInFuncForPTR",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] }
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueLNodeInPowerTransformer",
			selector: [{ steps: [{
				kind: "name",
				value: "LNode"
			}] }],
			fields: [
				{ target: {
					kind: "attribute",
					value: "lnInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "iedName",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "ldInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "prefix",
					isAttribute: !0
				} }
			]
		}, {
			kind: "unique",
			name: "uniqueChildNameInPTR",
			selector: [{ steps: [{ kind: "wildcard" }] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
	},
	Private: {
		tag: "Private",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: /* @__PURE__ */ "SCL.SourceFiles.SclFileReference.Substation.Labels.LNode.PowerTransformer.TransformerWinding.Terminal.SubEquipment.EqFunction.GeneralEquipment.EqSubFunction.TapChanger.NeutralPoint.VoltageLevel.Bay.ConductingEquipment.ConnectivityNode.Function.SubFunction.Communication.SubNetwork.ConnectedAP.GSE.SMV.PhysConn.IED.AccessPoint.Server.LDevice.LN0.DataSet.ReportControl.RptEnabled.LogControl.DOI.SDI.DAI.Inputs.ExtRef.Outputs.ExtCtrl.Log.GSEControl.SampledValueControl.SettingControl.LN.ServerAt.GOOSESecurity.SMVSecurity.IEDSourceFiles.MinRequestedSCDFiles.LNodeType.DO.DOType.SDO.DA.DAType.BDA.EnumType.Line.Process".split("."),
		attributes: {
			sequence: ["source", "type"],
			details: {
				source: { facets: { whiteSpace: "collapse" } },
				type: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				}
			}
		},
		children: {
			sequence: [],
			any: !0,
			details: {}
		},
		textContent: {}
	},
	Process: {
		tag: "Process",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["SCL", "Process"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"templateUuid",
				"type",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				type: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels",
				"LNode",
				"GeneralEquipment",
				"Function",
				"ConductingEquipment",
				"Substation",
				"Line",
				"Process",
				"AllocationRole",
				"Application",
				"BehaviorDescription",
				"FunctionCategory",
				"ProcessResources",
				"Variable"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabel",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				LNode: {},
				GeneralEquipment: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInGeneralEquipment2",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInGE2",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				Function: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInFunction",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInFunction",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				ConductingEquipment: {},
				Substation: { constraints: [{
					kind: "unique",
					name: "uniqueChildNameInProcessSubstation",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}, {
					kind: "unique",
					name: "uniqueLNodeInProcessSubstation",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}] },
				Line: {},
				Process: { constraints: [{
					kind: "unique",
					name: "uniqueChildNameInSubProcess",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}, {
					kind: "unique",
					name: "uniqueLNodeInSubProcess",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}] },
				AllocationRole: {},
				Application: {},
				BehaviorDescription: {},
				FunctionCategory: {},
				ProcessResources: {},
				Variable: {}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueChildNameInProcess",
			selector: [{ steps: [{ kind: "wildcard" }] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}, {
			kind: "unique",
			name: "uniqueLNodeInProcess",
			selector: [{ steps: [{
				kind: "name",
				value: "LNode"
			}] }],
			fields: [
				{ target: {
					kind: "attribute",
					value: "lnInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "iedName",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "ldInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "prefix",
					isAttribute: !0
				} }
			]
		}]
	},
	ProcessEcho: {
		tag: "ProcessEcho",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Definition of an echo LNode, mirroring the DO of another LNode",
		parents: [
			"DAS",
			"SDS",
			"DOS"
		],
		attributes: {
			sequence: [
				"desc",
				"source",
				"sourceDaName",
				"sourceDoName",
				"sourceLNodeUuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				source: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				sourceDaName: { facets: {
					pattern: ["[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?(\\.[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?)*"],
					whiteSpace: "replace"
				} },
				sourceDoName: { facets: {
					pattern: ["[A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?"],
					whiteSpace: "replace"
				} },
				sourceLNodeUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	ProcessResource: {
		tag: "ProcessResource",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		parents: ["ProcessResources"],
		attributes: {
			sequence: [
				"cardinality",
				"desc",
				"max",
				"name",
				"originUuid",
				"selector",
				"templateUuid",
				"uuid"
			],
			details: {
				cardinality: {
					default: "1..1",
					facets: {
						enumeration: [
							"0..1",
							"1..1",
							"0..n",
							"1..n"
						],
						whiteSpace: "replace"
					}
				},
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				max: { facets: {
					minInclusive: 2,
					whiteSpace: "collapse"
				} },
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				originUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				selector: { facets: { whiteSpace: "replace" } },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: ["Text", "Resource"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Resource: {}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueResource",
			selector: [{ steps: [{
				kind: "name",
				value: "Resource"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "resInst",
				isAttribute: !0
			} }]
		}]
	},
	ProcessResourceRef: {
		tag: "ProcessResourceRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Reference to a process resource attached to current role",
		parents: ["FunctionRoleContent"],
		attributes: {
			sequence: [
				"desc",
				"processResource",
				"processResourceUuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				processResource: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				processResourceUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: ["Text", "FunctionalVariantRef"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				FunctionalVariantRef: {}
			},
			choices: [{ options: ["FunctionalVariantRef"] }]
		}
	},
	ProcessResources: {
		tag: "ProcessResources",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "List of Process Resources related to a function. to be added to the SCL elements Function, SubFunction, EqFunction and EqSubFunction",
		parents: [
			"Process",
			"Line",
			"Substation",
			"VoltageLevel",
			"Bay",
			"ConductingEquipment",
			"GeneralEquipment",
			"ConnectivityNode",
			"Function",
			"SubFunction",
			"EqFunction",
			"EqSubFunction"
		],
		attributes: {
			sequence: ["desc"],
			details: { desc: {
				default: "",
				facets: { whiteSpace: "replace" }
			} }
		},
		children: {
			sequence: ["Text", "ProcessResource"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				ProcessResource: {
					required: !0,
					minOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueResource",
						selector: [{ steps: [{
							kind: "name",
							value: "Resource"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "resInst",
							isAttribute: !0
						} }]
					}]
				}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniquePR",
			selector: [{ steps: [{
				kind: "name",
				value: "ProcessResource"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
	},
	Project: {
		tag: "Project",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Element allowing to define a project, to identify the project and the process elements defined by this project",
		parents: ["SCL"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: ["Text", "ProjectProcessReference"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				ProjectProcessReference: {}
			}
		}
	},
	ProjectProcessReference: {
		tag: "ProjectProcessReference",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Reference to the process elements belonging to the current project",
		parents: ["Project"],
		attributes: {
			sequence: [
				"desc",
				"processReference",
				"processUuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				processReference: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				processUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	ProtNs: {
		tag: "ProtNs",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["DA", "DAType"],
		attributes: {
			sequence: ["type"],
			details: { type: {
				default: "8-MMS",
				facets: {
					minLength: 1,
					whiteSpace: "replace"
				}
			} },
			identityFields: ["type"]
		},
		children: {
			sequence: [],
			details: {}
		},
		textContent: { facets: {
			pattern: ["[ -~]+:20\\d\\d[A-Z]?"],
			whiteSpace: "replace"
		} }
	},
	Protocol: {
		tag: "Protocol",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["GSEControl", "SampledValueControl"],
		attributes: {
			sequence: ["mustUnderstand"],
			details: { mustUnderstand: {
				required: !0,
				fixed: "true",
				facets: { whiteSpace: "collapse" }
			} }
		},
		children: {
			sequence: [],
			details: {}
		},
		textContent: { facets: { whiteSpace: "replace" } }
	},
	ReadWrite: {
		tag: "ReadWrite",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	RedProt: {
		tag: "RedProt",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [
				"hsr",
				"prp",
				"rstp"
			],
			details: {
				hsr: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				prp: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				rstp: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	ReportControl: {
		tag: "ReportControl",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["LN0", "LN"],
		attributes: {
			sequence: [
				"bufTime",
				"buffered",
				"confRev",
				"datSet",
				"desc",
				"indexed",
				"intgPd",
				"name",
				"rptID",
				"templateUuid",
				"uuid"
			],
			details: {
				bufTime: {
					default: "0",
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				},
				buffered: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				confRev: {
					required: !0,
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				},
				datSet: { facets: {
					pattern: ["[A-Za-z][0-9A-Za-z_]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					maxLength: 32,
					whiteSpace: "collapse"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				indexed: {
					default: "true",
					facets: { whiteSpace: "collapse" }
				},
				intgPd: {
					default: "0",
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				},
				name: {
					required: !0,
					facets: {
						pattern: ["[A-Za-z][0-9A-Za-z_]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						maxLength: 32,
						whiteSpace: "collapse"
					}
				},
				rptID: { facets: {
					pattern: ["[ -~]*"],
					minLength: 1,
					maxLength: 129,
					whiteSpace: "replace"
				} },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"TrgOps",
				"OptFields",
				"RptEnabled"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				TrgOps: { maxOccurs: 1 },
				OptFields: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				RptEnabled: { maxOccurs: 1 }
			}
		}
	},
	ReportParameters: {
		tag: "ReportParameters",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		parents: ["CommunicationServiceSpecifications", "ServiceSpecifications"],
		attributes: {
			sequence: [
				"bufTime",
				"buffered",
				"cbName",
				"desc",
				"dsName",
				"id",
				"intgPd"
			],
			details: {
				bufTime: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} },
				buffered: { facets: { whiteSpace: "collapse" } },
				cbName: { facets: { whiteSpace: "replace" } },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				dsName: { facets: { whiteSpace: "replace" } },
				id: {
					required: !0,
					facets: {
						pattern: ["\\S+"],
						minLength: 1,
						maxLength: 255,
						whiteSpace: "collapse"
					}
				},
				intgPd: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} }
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	ReportParametersRef: {
		tag: "ReportParametersRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Specification of the communication parameters expected for the current SourceRef when ServiceType is Report",
		parents: ["SourceRef", "SubscriberLNode"],
		attributes: {
			sequence: ["desc", "id"],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				id: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				}
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	ReportSettings: {
		tag: "ReportSettings",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [
				"bufTime",
				"cbName",
				"datSet",
				"intgPd",
				"optFields",
				"owner",
				"resvTms",
				"rptID",
				"trgOps"
			],
			details: {
				bufTime: {
					default: "Fix",
					facets: {
						enumeration: [
							"Dyn",
							"Conf",
							"Fix"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				cbName: {
					default: "Fix",
					facets: {
						enumeration: ["Conf", "Fix"],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				datSet: {
					default: "Fix",
					facets: {
						enumeration: [
							"Dyn",
							"Conf",
							"Fix"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				intgPd: {
					default: "Fix",
					facets: {
						enumeration: [
							"Dyn",
							"Conf",
							"Fix"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				optFields: {
					default: "Fix",
					facets: {
						enumeration: [
							"Dyn",
							"Conf",
							"Fix"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				owner: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				resvTms: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				rptID: {
					default: "Fix",
					facets: {
						enumeration: [
							"Dyn",
							"Conf",
							"Fix"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				trgOps: {
					default: "Fix",
					facets: {
						enumeration: [
							"Dyn",
							"Conf",
							"Fix"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	Resource: {
		tag: "Resource",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "resource bound to this element could be multi",
		parents: ["ProcessResource"],
		attributes: {
			sequence: [
				"resInst",
				"source",
				"sourceUuid"
			],
			details: {
				resInst: {
					default: "1",
					facets: {
						minInclusive: 1,
						whiteSpace: "collapse"
					}
				},
				source: { facets: { whiteSpace: "replace" } },
				sourceUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: ["resInst"]
		},
		children: {
			sequence: [],
			details: {}
		},
		textContent: { facets: { whiteSpace: "replace" } }
	},
	RptEnabled: {
		tag: "RptEnabled",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["ReportControl"],
		attributes: {
			sequence: ["desc", "max"],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				max: {
					default: "1",
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295,
						minExclusive: 0,
						whiteSpace: "collapse"
					}
				}
			}
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"ClientLN"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				ClientLN: {}
			}
		}
	},
	SCL: {
		tag: "SCL",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: [],
		attributes: {
			sequence: [
				"release",
				"revision",
				"version"
			],
			details: {
				release: {
					required: !0,
					fixed: "5",
					facets: {
						minInclusive: 0,
						maxInclusive: 255,
						minExclusive: 0,
						whiteSpace: "collapse"
					}
				},
				revision: {
					required: !0,
					fixed: "C",
					facets: {
						pattern: ["[A-Z]", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				version: {
					required: !0,
					fixed: "2007",
					facets: {
						pattern: ["2[0-2][0-9]{2}"],
						minLength: 1,
						whiteSpace: "replace"
					}
				}
			}
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Header",
				"Substation",
				"Communication",
				"IED",
				"DataTypeTemplates",
				"Line",
				"Process",
				"BayType",
				"FunctionTemplate",
				"Project",
				"ServiceSpecifications"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Header: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueHitem",
						selector: [{ steps: [{
							kind: "name",
							value: "History"
						}, {
							kind: "name",
							value: "Hitem"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "version",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "revision",
							isAttribute: !0
						} }]
					}]
				},
				Substation: { constraints: [{
					kind: "unique",
					name: "uniqueChildNameInSubstation",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}, {
					kind: "unique",
					name: "uniqueLNodeInSubstation",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}] },
				Communication: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueSubNetwork",
						selector: [{ steps: [{
							kind: "name",
							value: "SubNetwork"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					}]
				},
				IED: { constraints: [
					{
						kind: "key",
						name: "LDeviceInIEDKey",
						selector: [{ steps: [
							{
								kind: "name",
								value: "AccessPoint"
							},
							{
								kind: "name",
								value: "Server"
							},
							{
								kind: "name",
								value: "LDevice"
							}
						] }],
						fields: [{ target: {
							kind: "attribute",
							value: "inst",
							isAttribute: !0
						} }]
					},
					{
						kind: "keyref",
						name: "ref2LDeviceInDataSetForFCDAinLN",
						refer: "LDeviceInIEDKey",
						selector: [{ steps: [
							{
								kind: "name",
								value: "AccessPoint"
							},
							{
								kind: "name",
								value: "Server"
							},
							{
								kind: "name",
								value: "LDevice"
							},
							{
								kind: "name",
								value: "LN"
							},
							{
								kind: "name",
								value: "DataSet"
							},
							{
								kind: "name",
								value: "FCDA"
							}
						] }],
						fields: [{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} }]
					},
					{
						kind: "keyref",
						name: "ref2LDeviceInDataSetForFCDAinLN0",
						refer: "LDeviceInIEDKey",
						selector: [{ steps: [
							{
								kind: "name",
								value: "AccessPoint"
							},
							{
								kind: "name",
								value: "Server"
							},
							{
								kind: "name",
								value: "LDevice"
							},
							{
								kind: "name",
								value: "LN0"
							},
							{
								kind: "name",
								value: "DataSet"
							},
							{
								kind: "name",
								value: "FCDA"
							}
						] }],
						fields: [{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} }]
					},
					{
						kind: "key",
						name: "AccessPointInIEDKey",
						selector: [{ steps: [{
							kind: "name",
							value: "AccessPoint"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					},
					{
						kind: "keyref",
						name: "ServerAtRef2AccessPoint",
						refer: "AccessPointInIEDKey",
						selector: [{ steps: [{
							kind: "name",
							value: "AccessPoint"
						}, {
							kind: "name",
							value: "ServerAt"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "apName",
							isAttribute: !0
						} }]
					}
				] },
				DataTypeTemplates: {
					maxOccurs: 1,
					constraints: [
						{
							kind: "key",
							name: "DOTypeKey",
							selector: [{ steps: [{
								kind: "name",
								value: "DOType"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "id",
								isAttribute: !0
							} }]
						},
						{
							kind: "keyref",
							name: "ref2DOType",
							refer: "DOTypeKey",
							selector: [{ steps: [{
								kind: "name",
								value: "LNodeType"
							}, {
								kind: "name",
								value: "DO"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "type",
								isAttribute: !0
							} }]
						},
						{
							kind: "keyref",
							name: "ref2DOTypeForSDO",
							refer: "DOTypeKey",
							selector: [{ steps: [{
								kind: "name",
								value: "DOType"
							}, {
								kind: "name",
								value: "SDO"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "type",
								isAttribute: !0
							} }]
						},
						{
							kind: "unique",
							name: "uniqueDTT_ID",
							selector: [{ steps: [{ kind: "wildcard" }] }],
							fields: [{ target: {
								kind: "attribute",
								value: "id",
								isAttribute: !0
							} }]
						},
						{
							kind: "key",
							name: "EnumTypeDATypeKey",
							selector: [{ steps: [{
								kind: "name",
								value: "DAType"
							}] }, { steps: [{
								kind: "name",
								value: "EnumType"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "id",
								isAttribute: !0
							} }]
						},
						{
							kind: "keyref",
							name: "ref2EnumTypeDAType",
							refer: "EnumTypeDATypeKey",
							selector: [{ steps: [{
								kind: "name",
								value: "DOType"
							}, {
								kind: "name",
								value: "DA"
							}] }, { steps: [{
								kind: "name",
								value: "DAType"
							}, {
								kind: "name",
								value: "BDA"
							}] }],
							fields: [{ target: {
								kind: "attribute",
								value: "type",
								isAttribute: !0
							} }]
						}
					]
				},
				Line: { constraints: [{
					kind: "unique",
					name: "uniqueChildNameInLine",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}, {
					kind: "unique",
					name: "uniqueLNodeInLine",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}] },
				Process: { constraints: [{
					kind: "unique",
					name: "uniqueChildNameInProcess",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}, {
					kind: "unique",
					name: "uniqueLNodeInProcess",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}] },
				BayType: {},
				FunctionTemplate: {},
				Project: {},
				ServiceSpecifications: {}
			}
		},
		constraints: [
			{
				kind: "key",
				name: "SubstationKey",
				selector: [
					{ steps: [{
						kind: "name",
						value: "Substation"
					}] },
					{ steps: [{
						kind: "name",
						value: "Process"
					}] },
					{ steps: [{
						kind: "name",
						value: "Line"
					}] }
				],
				fields: [{ target: {
					kind: "attribute",
					value: "name",
					isAttribute: !0
				} }]
			},
			{
				kind: "key",
				name: "IEDKey",
				selector: [{ steps: [{
					kind: "name",
					value: "IED"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "name",
					isAttribute: !0
				} }]
			},
			{
				kind: "key",
				name: "LNodeTypeKey",
				selector: [{ steps: [{
					kind: "name",
					value: "DataTypeTemplates"
				}, {
					kind: "name",
					value: "LNodeType"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "id",
					isAttribute: !0
				} }, { target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} }]
			},
			{
				kind: "keyref",
				name: "ref2LNodeTypeDomain1",
				refer: "LNodeTypeKey",
				selector: [{ steps: [
					{
						kind: "name",
						value: "IED"
					},
					{
						kind: "name",
						value: "AccessPoint"
					},
					{
						kind: "name",
						value: "LN"
					}
				] }],
				fields: [{ target: {
					kind: "attribute",
					value: "lnType",
					isAttribute: !0
				} }, { target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} }]
			},
			{
				kind: "keyref",
				name: "ref2LNodeTypeDomain2",
				refer: "LNodeTypeKey",
				selector: [{ steps: [
					{
						kind: "name",
						value: "IED"
					},
					{
						kind: "name",
						value: "AccessPoint"
					},
					{
						kind: "name",
						value: "Server"
					},
					{
						kind: "name",
						value: "LDevice"
					},
					{
						kind: "name",
						value: "LN"
					}
				] }],
				fields: [{ target: {
					kind: "attribute",
					value: "lnType",
					isAttribute: !0
				} }, { target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} }]
			},
			{
				kind: "keyref",
				name: "ref2LNodeTypeLLN0",
				refer: "LNodeTypeKey",
				selector: [{ steps: [
					{
						kind: "name",
						value: "IED"
					},
					{
						kind: "name",
						value: "AccessPoint"
					},
					{
						kind: "name",
						value: "Server"
					},
					{
						kind: "name",
						value: "LDevice"
					},
					{
						kind: "name",
						value: "LN0"
					}
				] }],
				fields: [{ target: {
					kind: "attribute",
					value: "lnType",
					isAttribute: !0
				} }, { target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} }]
			},
			{
				kind: "keyref",
				name: "refConnectedAP2IED",
				refer: "IEDKey",
				selector: [{ steps: [
					{
						kind: "name",
						value: "Communication"
					},
					{
						kind: "name",
						value: "SubNetwork"
					},
					{
						kind: "name",
						value: "ConnectedAP"
					}
				] }],
				fields: [{ target: {
					kind: "attribute",
					value: "iedName",
					isAttribute: !0
				} }]
			},
			{
				kind: "keyref",
				name: "ref2SubstationFromTerminal",
				refer: "SubstationKey",
				deep: !0,
				selector: [{
					deep: !0,
					steps: [{
						kind: "name",
						value: "Terminal"
					}]
				}],
				fields: [{ target: {
					kind: "attribute",
					value: "substationName",
					isAttribute: !0
				} }]
			},
			{
				kind: "key",
				name: "ConnectivityNodeKey",
				deep: !0,
				selector: [{
					deep: !0,
					steps: [{
						kind: "name",
						value: "ConnectivityNode"
					}]
				}],
				fields: [{ target: {
					kind: "attribute",
					value: "pathName",
					isAttribute: !0
				} }]
			},
			{
				kind: "unique",
				name: "uniqueUUID",
				deep: !0,
				selector: [{
					deep: !0,
					steps: [{ kind: "wildcard" }]
				}],
				fields: [{ target: {
					kind: "attribute",
					value: "uuid",
					isAttribute: !0
				} }]
			}
		]
	},
	SCSM: {
		tag: "SCSM",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [
				"iec61850_8_1",
				"iec61850_8_2",
				"serverAssociationInitiation"
			],
			details: {
				iec61850_8_1: {
					default: "true",
					facets: { whiteSpace: "collapse" }
				},
				iec61850_8_2: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				serverAssociationInitiation: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	SDI: {
		tag: "SDI",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["DOI", "SDI"],
		attributes: {
			sequence: [
				"desc",
				"ix",
				"name",
				"sAddr"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				ix: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} },
				name: {
					required: !0,
					facets: {
						enumeration: [
							"T",
							"Test",
							"Check",
							"SIUnit",
							"Oper",
							"SBO",
							"SBOw",
							"Cancel",
							"Addr",
							"PRIORITY",
							"VID",
							"APPID",
							"TransportInUse",
							"IPClassOfTraffic",
							"IPv6FlowLabel",
							"IPAddressLength",
							"IPAddress"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*", "[a-z][0-9A-Za-z]*"],
						maxLength: 60,
						whiteSpace: "collapse"
					}
				},
				sAddr: { facets: {
					maxLength: 255,
					whiteSpace: "replace"
				} }
			},
			identityFields: ["ix", "name"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"SDI",
				"DAI",
				"Labels"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				SDI: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				DAI: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabelinSDI",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				}
			},
			choices: [{ options: ["DAI", "SDI"] }]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueSDI_DAIinSDI",
			selector: [{ steps: [{
				kind: "name",
				value: "DAI"
			}] }, { steps: [{
				kind: "name",
				value: "SDI"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }, { target: {
				kind: "attribute",
				value: "ix",
				isAttribute: !0
			} }]
		}]
	},
	SDO: {
		tag: "SDO",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["DOType"],
		attributes: {
			sequence: [
				"count",
				"desc",
				"name",
				"type"
			],
			details: {
				count: {
					default: "0",
					facets: {
						pattern: ["[a-z][0-9A-Za-z]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minInclusive: 0,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				},
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						pattern: ["[a-z][0-9A-Za-z]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1,
						maxLength: 60,
						whiteSpace: "collapse"
					}
				},
				type: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				}
			}
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabelInSDO",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				}
			}
		}
	},
	SDS: {
		tag: "SDS",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Specification of a sub-Data Object",
		parents: ["DOS", "SDS"],
		attributes: {
			sequence: [
				"desc",
				"ix",
				"mappedDoName",
				"mappedLnUuid",
				"name"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				ix: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} },
				mappedDoName: { facets: {
					pattern: ["(([A-Za-z][0-9A-Za-z_]{0,63})/([A-Za-z][0-9A-Za-z_]{0,63})/((LLN0|([A-Za-z][0-9A-Za-z_]{0,10})?[A-Z]{4}[0-9]{1,12}))\\.)?([A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?)"],
					whiteSpace: "replace"
				} },
				mappedLnUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				name: {
					required: !0,
					facets: {
						enumeration: [
							"T",
							"Test",
							"Check",
							"SIUnit",
							"Oper",
							"SBO",
							"SBOw",
							"Cancel",
							"Addr",
							"PRIORITY",
							"VID",
							"APPID",
							"TransportInUse",
							"IPClassOfTraffic",
							"IPv6FlowLabel",
							"IPAddressLength",
							"IPAddress"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*", "[a-z][0-9A-Za-z]*"],
						maxLength: 60,
						whiteSpace: "collapse"
					}
				}
			},
			identityFields: ["ix", "name"]
		},
		children: {
			sequence: [
				"Text",
				"SDS",
				"DAS",
				"SubscriberLNode",
				"ControllingLNode",
				"ProcessEcho",
				"LogParametersRef",
				"Labels"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				SDS: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				DAS: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				SubscriberLNode: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				ControllingLNode: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				ProcessEcho: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				LogParametersRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabelInSDS",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				}
			},
			choices: [{ options: [
				"ControllingLNode",
				"DAS",
				"LogParametersRef",
				"ProcessEcho",
				"SDS",
				"SubscriberLNode"
			] }]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueSDS_DASinSDS",
			selector: [{ steps: [{
				kind: "name",
				value: "DAS"
			}] }, { steps: [{
				kind: "name",
				value: "SDS"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }, { target: {
				kind: "attribute",
				value: "ix",
				isAttribute: !0
			} }]
		}]
	},
	SGEdit: {
		tag: "SGEdit",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["SettingGroups"],
		attributes: {
			sequence: ["resvTms"],
			details: { resvTms: {
				default: "false",
				facets: { whiteSpace: "collapse" }
			} }
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	SMV: {
		tag: "SMV",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["ConnectedAP"],
		attributes: {
			sequence: [
				"cbName",
				"cbUuid",
				"desc",
				"ldInst"
			],
			details: {
				cbName: {
					required: !0,
					facets: {
						pattern: ["[A-Za-z][0-9A-Za-z_]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						maxLength: 32,
						whiteSpace: "collapse"
					}
				},
				cbUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				ldInst: {
					required: !0,
					facets: {
						pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
						maxLength: 64,
						whiteSpace: "replace"
					}
				}
			},
			identityFields: ["cbName", "ldInst"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Address"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Address: { maxOccurs: 1 }
			}
		}
	},
	SMVParameters: {
		tag: "SMVParameters",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		parents: ["CommunicationServiceSpecifications", "ServiceSpecifications"],
		attributes: {
			sequence: [
				"cbName",
				"desc",
				"dsName",
				"id",
				"multicast",
				"nofASDU",
				"securityEnabled",
				"smpMod",
				"smpRate",
				"smvId"
			],
			details: {
				cbName: { facets: { whiteSpace: "replace" } },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				dsName: { facets: { whiteSpace: "replace" } },
				id: {
					required: !0,
					facets: {
						pattern: ["\\S+"],
						minLength: 1,
						maxLength: 255,
						whiteSpace: "collapse"
					}
				},
				multicast: { facets: { whiteSpace: "collapse" } },
				nofASDU: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} },
				securityEnabled: { facets: { whiteSpace: "collapse" } },
				smpMod: { facets: {
					enumeration: [
						"SmpPerPeriod",
						"SmpPerSec",
						"SecPerSmp"
					],
					whiteSpace: "replace"
				} },
				smpRate: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} },
				smvId: { facets: { whiteSpace: "replace" } }
			}
		},
		children: {
			sequence: [
				"Text",
				"L2CommParameters",
				"L3IPv4CommParameters",
				"L3IPv6CommParameters"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				L2CommParameters: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				L3IPv4CommParameters: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				L3IPv6CommParameters: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				}
			},
			choices: [{
				options: [
					"L2CommParameters",
					"L3IPv4CommParameters",
					"L3IPv6CommParameters"
				],
				maxOccurs: 1
			}]
		}
	},
	SMVParametersRef: {
		tag: "SMVParametersRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Specification of the communication parameters expected for the current SourceRef when ServiceType is SMV",
		parents: ["SourceRef", "SubscriberLNode"],
		attributes: {
			sequence: ["desc", "id"],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				id: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				}
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	SMVSecurity: {
		tag: "SMVSecurity",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["AccessPoint"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"serialNumber",
				"templateUuid",
				"uuid",
				"xferNumber"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				serialNumber: {
					required: !0,
					facets: {
						pattern: ["[0-9]+"],
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				xferNumber: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} }
			}
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels",
				"Subject",
				"IssuerName"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabel",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				Subject: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				IssuerName: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				}
			}
		}
	},
	SMVSettings: {
		tag: "SMVSettings",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [
				"cbName",
				"datSet",
				"kdaParticipant",
				"nofASDU",
				"optFields",
				"pdcTimeStamp",
				"samplesPerSec",
				"smpRate",
				"svID",
				"synchSrcId"
			],
			details: {
				cbName: {
					default: "Fix",
					facets: {
						enumeration: ["Conf", "Fix"],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				datSet: {
					default: "Fix",
					facets: {
						enumeration: [
							"Dyn",
							"Conf",
							"Fix"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				kdaParticipant: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				nofASDU: {
					default: "Fix",
					facets: {
						enumeration: ["Conf", "Fix"],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				optFields: {
					default: "Fix",
					facets: {
						enumeration: [
							"Dyn",
							"Conf",
							"Fix"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				pdcTimeStamp: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				samplesPerSec: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				smpRate: {
					default: "Fix",
					facets: {
						enumeration: [
							"Dyn",
							"Conf",
							"Fix"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				svID: {
					default: "Fix",
					facets: {
						enumeration: [
							"Dyn",
							"Conf",
							"Fix"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				synchSrcId: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [
				"SmpRate",
				"SamplesPerSec",
				"SecPerSamples",
				"McSecurity"
			],
			details: {
				SmpRate: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				SamplesPerSec: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				SecPerSamples: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				McSecurity: { maxOccurs: 1 }
			},
			choices: [{
				options: [
					"SamplesPerSec",
					"SecPerSamples",
					"SmpRate"
				],
				minOccurs: 1
			}]
		}
	},
	SMVsc: {
		tag: "SMVsc",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [
				"delivery",
				"deliveryConf",
				"max",
				"rSV",
				"sv"
			],
			details: {
				delivery: {
					default: "multicast",
					facets: {
						enumeration: [
							"unicast",
							"multicast",
							"both"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				deliveryConf: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				max: {
					required: !0,
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				},
				rSV: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				sv: {
					default: "true",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	SVMcSecurity: {
		tag: "SVMcSecurity",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["ClientServices"],
		attributes: {
			sequence: ["encryption", "signature"],
			details: {
				encryption: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				signature: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	SampledValueControl: {
		tag: "SampledValueControl",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["LN0"],
		attributes: {
			sequence: [
				"confRev",
				"datSet",
				"desc",
				"multicast",
				"name",
				"nofASDU",
				"securityEnable",
				"smpMod",
				"smpRate",
				"smvID",
				"templateUuid",
				"uuid"
			],
			details: {
				confRev: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} },
				datSet: { facets: {
					pattern: ["[A-Za-z][0-9A-Za-z_]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					maxLength: 32,
					whiteSpace: "collapse"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				multicast: {
					default: "true",
					facets: { whiteSpace: "collapse" }
				},
				name: {
					required: !0,
					facets: {
						pattern: ["[A-Za-z][0-9A-Za-z_]*", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						maxLength: 32,
						whiteSpace: "collapse"
					}
				},
				nofASDU: {
					required: !0,
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				},
				securityEnable: {
					default: "None",
					facets: {
						enumeration: [
							"None",
							"Signature",
							"SignatureAndEncryption"
						],
						whiteSpace: "replace"
					}
				},
				smpMod: {
					default: "SmpPerPeriod",
					facets: {
						enumeration: [
							"SmpPerPeriod",
							"SmpPerSec",
							"SecPerSmp"
						],
						whiteSpace: "replace"
					}
				},
				smpRate: {
					required: !0,
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				},
				smvID: {
					required: !0,
					facets: {
						pattern: ["[ -~]*"],
						minLength: 1,
						maxLength: 129,
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"IEDName",
				"SmvOpts",
				"Protocol"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				IEDName: {},
				SmvOpts: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				Protocol: { maxOccurs: 1 }
			}
		}
	},
	SamplesPerSec: {
		tag: "SamplesPerSec",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["SMVSettings"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [],
			details: {}
		},
		textContent: { facets: {
			minInclusive: 0,
			maxInclusive: 4294967295,
			minExclusive: 0,
			whiteSpace: "collapse"
		} }
	},
	SclFileReference: {
		tag: "SclFileReference",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: [
			"SourceFiles",
			"IEDSourceFiles",
			"FunctionSclRef",
			"ApplicationSclRef"
		],
		attributes: {
			sequence: [
				"desc",
				"fileName",
				"fileType",
				"fileUuid",
				"revision",
				"version",
				"when"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				fileName: { facets: { whiteSpace: "replace" } },
				fileType: {
					required: !0,
					facets: {
						enumeration: [
							"ICD",
							"IID",
							"CID",
							"SSD",
							"SCD",
							"SED"
						],
						pattern: ["[A-Z]{3}", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "replace"
					}
				},
				fileUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				revision: {
					required: !0,
					facets: { whiteSpace: "replace" }
				},
				version: {
					required: !0,
					facets: { whiteSpace: "replace" }
				},
				when: { facets: { whiteSpace: "replace" } }
			}
		},
		children: {
			sequence: ["Text", "Private"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {}
			}
		}
	},
	SecPerSamples: {
		tag: "SecPerSamples",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["SMVSettings"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [],
			details: {}
		},
		textContent: { facets: {
			minInclusive: 0,
			maxInclusive: 4294967295,
			minExclusive: 0,
			whiteSpace: "collapse"
		} }
	},
	Security: {
		tag: "Security",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["ClientServices", "Services"],
		attributes: {
			sequence: ["ACSEAuthentication", "E2ESecurity"],
			details: {
				ACSEAuthentication: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				E2ESecurity: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	Server: {
		tag: "Server",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["AccessPoint"],
		attributes: {
			sequence: ["desc", "timeout"],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				timeout: {
					default: "30",
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				}
			},
			identityFields: ["inst"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Authentication",
				"LDevice",
				"Association"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Authentication: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				LDevice: {
					required: !0,
					minOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLNInLDevice",
						selector: [{ steps: [{
							kind: "name",
							value: "LN"
						}] }],
						fields: [
							{ target: {
								kind: "attribute",
								value: "inst",
								isAttribute: !0
							} },
							{ target: {
								kind: "attribute",
								value: "lnClass",
								isAttribute: !0
							} },
							{ target: {
								kind: "attribute",
								value: "prefix",
								isAttribute: !0
							} }
						]
					}]
				},
				Association: {}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueAssociationInServer",
			selector: [{ steps: [{
				kind: "name",
				value: "Association"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "associationID",
				isAttribute: !0
			} }]
		}]
	},
	ServerAt: {
		tag: "ServerAt",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["AccessPoint"],
		attributes: {
			sequence: [
				"apName",
				"apUuid",
				"desc"
			],
			details: {
				apName: {
					required: !0,
					facets: {
						pattern: ["[A-Za-z0-9][0-9A-Za-z_]*"],
						maxLength: 32,
						whiteSpace: "replace"
					}
				},
				apUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				}
			}
		},
		children: {
			sequence: ["Text", "Private"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {}
			}
		}
	},
	ServiceSpecifications: {
		tag: "ServiceSpecifications",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "The ServiceSpecification is containing parameters used to create control blocks or physical interface (LPDI/LPDO) during implementation",
		parents: ["SCL"],
		attributes: {
			sequence: ["desc"],
			details: { desc: {
				default: "",
				facets: { whiteSpace: "replace" }
			} }
		},
		children: {
			sequence: [
				"Text",
				"GooseParameters",
				"SMVParameters",
				"ReportParameters",
				"BinaryWiringParameters",
				"AnalogueWiringParameters",
				"LogParameters"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				GooseParameters: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				SMVParameters: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				ReportParameters: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				BinaryWiringParameters: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				AnalogueWiringParameters: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				LogParameters: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				}
			},
			choices: [{ options: [
				"AnalogueWiringParameters",
				"BinaryWiringParameters",
				"GooseParameters",
				"LogParameters",
				"ReportParameters",
				"SMVParameters"
			] }]
		},
		constraints: [{
			kind: "key",
			name: "serviceSpecKey",
			selector: [{ steps: [{ kind: "wildcard" }] }],
			fields: [{ target: {
				kind: "attribute",
				value: "id",
				isAttribute: !0
			} }]
		}]
	},
	Services: {
		tag: "Services",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["IED", "AccessPoint"],
		attributes: {
			sequence: ["nameLength"],
			details: { nameLength: {
				default: "32",
				facets: {
					pattern: [
						"32",
						"64",
						"6[5-9]",
						"[7-9]\\d",
						"[1-9]\\d\\d+"
					],
					whiteSpace: "collapse"
				}
			} }
		},
		children: {
			sequence: /* @__PURE__ */ "DynAssociation.SettingGroups.GetDirectory.GetDataObjectDefinition.DataObjectDirectory.GetDataSetValue.SetDataSetValue.DataSetDirectory.ConfDataSet.DynDataSet.ReadWrite.TimerActivatedControl.ConfReportControl.GetCBValues.ConfLogControl.ReportSettings.LogSettings.GSESettings.SMVSettings.GSEDir.GOOSE.GSSE.SMVsc.FileHandling.ConfLNs.ClientServices.ConfLdName.SupSubscription.ConfSigRef.ValueHandling.RedProt.TimeSyncProt.CommProt.SCSM.Security.MultiAPPerSubNet".split("."),
			details: {
				DynAssociation: { maxOccurs: 1 },
				SettingGroups: { maxOccurs: 1 },
				GetDirectory: { maxOccurs: 1 },
				GetDataObjectDefinition: { maxOccurs: 1 },
				DataObjectDirectory: { maxOccurs: 1 },
				GetDataSetValue: { maxOccurs: 1 },
				SetDataSetValue: { maxOccurs: 1 },
				DataSetDirectory: { maxOccurs: 1 },
				ConfDataSet: { maxOccurs: 1 },
				DynDataSet: { maxOccurs: 1 },
				ReadWrite: { maxOccurs: 1 },
				TimerActivatedControl: { maxOccurs: 1 },
				ConfReportControl: { maxOccurs: 1 },
				GetCBValues: { maxOccurs: 1 },
				ConfLogControl: { maxOccurs: 1 },
				ReportSettings: { maxOccurs: 1 },
				LogSettings: { maxOccurs: 1 },
				GSESettings: { maxOccurs: 1 },
				SMVSettings: { maxOccurs: 1 },
				GSEDir: { maxOccurs: 1 },
				GOOSE: { maxOccurs: 1 },
				GSSE: { maxOccurs: 1 },
				SMVsc: { maxOccurs: 1 },
				FileHandling: { maxOccurs: 1 },
				ConfLNs: { maxOccurs: 1 },
				ClientServices: { maxOccurs: 1 },
				ConfLdName: { maxOccurs: 1 },
				SupSubscription: { maxOccurs: 1 },
				ConfSigRef: { maxOccurs: 1 },
				ValueHandling: { maxOccurs: 1 },
				RedProt: { maxOccurs: 1 },
				TimeSyncProt: { maxOccurs: 1 },
				CommProt: { maxOccurs: 1 },
				SCSM: { maxOccurs: 1 },
				Security: { maxOccurs: 1 },
				MultiAPPerSubNet: { maxOccurs: 1 }
			}
		}
	},
	SetDataSetValue: {
		tag: "SetDataSetValue",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	SettingControl: {
		tag: "SettingControl",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["LN0"],
		attributes: {
			sequence: [
				"actSG",
				"desc",
				"numOfSGs",
				"resvTms"
			],
			details: {
				actSG: {
					default: "1",
					facets: {
						minInclusive: 1,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				},
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				numOfSGs: {
					required: !0,
					facets: {
						minInclusive: 1,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				},
				resvTms: { facets: {
					minInclusive: 0,
					maxInclusive: 65535,
					whiteSpace: "collapse"
				} }
			}
		},
		children: {
			sequence: ["Text", "Private"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {}
			}
		}
	},
	SettingGroups: {
		tag: "SettingGroups",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: ["SGEdit", "ConfSG"],
			details: {
				SGEdit: { maxOccurs: 1 },
				ConfSG: { maxOccurs: 1 }
			}
		}
	},
	SignalRole: {
		tag: "SignalRole",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Signal list attached to the referenced function in the context of the cureent Role definition",
		parents: ["FunctionRef"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"originUuid",
				"templateUuid",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				originUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: [
				"Text",
				"FunctionalVariantRef",
				"LNodeInputRef",
				"LNodeOutputRef",
				"LNodeDataRef"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				FunctionalVariantRef: {},
				LNodeInputRef: {},
				LNodeOutputRef: {},
				LNodeDataRef: {}
			},
			choices: [{ options: ["FunctionalVariantRef"] }]
		}
	},
	SmpRate: {
		tag: "SmpRate",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["SMVSettings"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [],
			details: {}
		},
		textContent: { facets: {
			minInclusive: 0,
			maxInclusive: 4294967295,
			minExclusive: 0,
			whiteSpace: "collapse"
		} }
	},
	SmvOpts: {
		tag: "SmvOpts",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["SampledValueControl"],
		attributes: {
			sequence: [
				"dataSet",
				"refreshTime",
				"sampleMode",
				"sampleRate",
				"sampleSynchronized",
				"security",
				"synchSourceId",
				"timestamp"
			],
			details: {
				dataSet: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				refreshTime: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				sampleMode: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				sampleRate: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				sampleSynchronized: {
					fixed: "true",
					facets: { whiteSpace: "collapse" }
				},
				security: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				synchSourceId: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				timestamp: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	SourceFiles: {
		tag: "SourceFiles",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Hitem", "Header"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"SclFileReference"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				SclFileReference: {}
			}
		}
	},
	SourceRef: {
		tag: "SourceRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Reference to a data in the process",
		parents: ["LNodeInputs"],
		attributes: {
			sequence: [
				"desc",
				"extRefAddr",
				"extRefUuid",
				"input",
				"inputInst",
				"originUuid",
				"pDA",
				"pDO",
				"pLN",
				"resourceName",
				"resourceUuid",
				"service",
				"source",
				"sourceDaName",
				"sourceDoName",
				"sourceLNodeUuid",
				"templateUuid",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				extRefAddr: { facets: { whiteSpace: "replace" } },
				extRefUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				input: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				inputInst: {
					default: "1",
					facets: {
						minInclusive: 1,
						whiteSpace: "collapse"
					}
				},
				originUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				pDA: { facets: { whiteSpace: "replace" } },
				pDO: { facets: { whiteSpace: "replace" } },
				pLN: { facets: { whiteSpace: "replace" } },
				resourceName: { facets: { whiteSpace: "replace" } },
				resourceUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				service: { facets: {
					enumeration: [
						"Poll",
						"Report",
						"GOOSE",
						"SMV",
						"Wired",
						"Internal"
					],
					pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					whiteSpace: "collapse"
				} },
				source: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				sourceDaName: { facets: {
					pattern: ["[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?(\\.[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?)*"],
					whiteSpace: "replace"
				} },
				sourceDoName: { facets: {
					pattern: ["[A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?"],
					whiteSpace: "replace"
				} },
				sourceLNodeUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: [
				"input",
				"inputInst",
				"pDA"
			]
		},
		children: {
			sequence: [
				"Text",
				"GooseParametersRef",
				"SMVParametersRef",
				"ReportParametersRef",
				"BinaryWiringParametersRef",
				"AnalogueWiringParametersRef"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				GooseParametersRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				SMVParametersRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				ReportParametersRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				BinaryWiringParametersRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				AnalogueWiringParametersRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				}
			},
			choices: [{
				options: [
					"AnalogueWiringParametersRef",
					"BinaryWiringParametersRef",
					"GooseParametersRef",
					"ReportParametersRef",
					"SMVParametersRef"
				],
				maxOccurs: 1
			}]
		}
	},
	SubCategory: {
		tag: "SubCategory",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Recursive definition of function category",
		parents: ["FunctionCategory", "SubCategory"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"originUuid",
				"templateUuid",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				originUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: [
				"Text",
				"SubCategory",
				"FunctionCatRef"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				SubCategory: {},
				FunctionCatRef: {
					required: !0,
					minOccurs: 1
				}
			}
		}
	},
	SubCheckoutID: {
		tag: "SubCheckoutID",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "When an IED is checkedout for a collaborative work by an SCC, it may be required to give right to a subpart of the collaborative project. So a CheckoutID may have an additional SubCheckoutID giving IED to nother project",
		parents: ["CheckoutID", "SubCheckoutID"],
		attributes: {
			sequence: [
				"desc",
				"engRight",
				"fileName",
				"fileType",
				"fileUuid",
				"headerId",
				"revision",
				"version",
				"when"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				engRight: { facets: {
					enumeration: [
						"full",
						"fix",
						"dataflow"
					],
					whiteSpace: "replace"
				} },
				fileName: { facets: { whiteSpace: "replace" } },
				fileType: {
					required: !0,
					facets: {
						enumeration: [
							"SED",
							"SCC",
							"ICD",
							"IID",
							"CID",
							"SSD",
							"SCD"
						],
						pattern: ["[A-Z]{3}", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "replace"
					}
				},
				fileUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				headerId: { facets: { whiteSpace: "replace" } },
				revision: {
					required: !0,
					facets: { whiteSpace: "replace" }
				},
				version: {
					required: !0,
					facets: { whiteSpace: "replace" }
				},
				when: { facets: { whiteSpace: "replace" } }
			}
		},
		children: {
			sequence: ["SubCheckoutID"],
			details: { SubCheckoutID: { maxOccurs: 1 } }
		}
	},
	SubEquipment: {
		tag: "SubEquipment",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: [
			"TransformerWinding",
			"TapChanger",
			"PowerTransformer",
			"ConductingEquipment"
		],
		attributes: {
			sequence: [
				"desc",
				"name",
				"phase",
				"templateUuid",
				"uuid",
				"virtual"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				phase: {
					default: "none",
					facets: {
						enumeration: [
							"A",
							"B",
							"C",
							"N",
							"all",
							"none",
							"AB",
							"BC",
							"CA"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				virtual: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels",
				"LNode",
				"EqFunction"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabel",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				LNode: {},
				EqFunction: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInFuncForSubEq",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInFuncForSubEq",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] }
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueLNodeInSubEquipment",
			selector: [{ steps: [{
				kind: "name",
				value: "LNode"
			}] }],
			fields: [
				{ target: {
					kind: "attribute",
					value: "lnInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "iedName",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "ldInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "prefix",
					isAttribute: !0
				} }
			]
		}, {
			kind: "unique",
			name: "uniqueChildNameInACESubEquipment",
			selector: [{ steps: [{ kind: "wildcard" }] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
	},
	SubFunction: {
		tag: "SubFunction",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Function", "SubFunction"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"templateUuid",
				"type",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				type: { facets: { whiteSpace: "replace" } },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels",
				"LNode",
				"GeneralEquipment",
				"ConductingEquipment",
				"SubFunction",
				"BehaviorDescription",
				"FunctionSclRef",
				"PowerSystemRelations",
				"ProcessResources",
				"Variable"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabel",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				LNode: {},
				GeneralEquipment: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInGeneralEquipmentOfSubFunction",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInGESubFunc",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				ConductingEquipment: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInConductingEquipmentOfSubFunction",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueSubEquipmentSubFunc",
					selector: [{ steps: [{
						kind: "name",
						value: "SubEquipment"
					}] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				SubFunction: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInSubSubFunction",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueSubSubFunc",
					selector: [{ steps: [{
						kind: "name",
						value: "SubFunction"
					}] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				BehaviorDescription: {},
				FunctionSclRef: {},
				PowerSystemRelations: {},
				ProcessResources: {},
				Variable: {}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueLNodeInSubFunction",
			selector: [{ steps: [{
				kind: "name",
				value: "LNode"
			}] }],
			fields: [
				{ target: {
					kind: "attribute",
					value: "lnInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "iedName",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "ldInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "prefix",
					isAttribute: !0
				} }
			]
		}, {
			kind: "unique",
			name: "uniqueChildNameInSubFunc",
			selector: [{ steps: [{ kind: "wildcard" }] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
	},
	SubFunctionTemplate: {
		tag: "SubFunctionTemplate",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		parents: ["FunctionTemplate", "SubFunctionTemplate"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"originUuid",
				"templateUuid",
				"type",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				originUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				type: { facets: { whiteSpace: "replace" } },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: [
				"Text",
				"LNode",
				"GeneralEquipment",
				"ConductingEquipment",
				"SubFunctionTemplate"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				LNode: {},
				GeneralEquipment: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInGeneralEquipmentOfSubFunctionTemplate",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInGESubFuncTemplate",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				ConductingEquipment: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInConductingEquipmentOfSubFunctionTemplate",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueSubEquipmentSubFuncTemplate",
					selector: [{ steps: [{
						kind: "name",
						value: "SubEquipment"
					}] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				SubFunctionTemplate: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInSubSubFunctionTemplate",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueSubSubFuncTemplate",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] }
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueLNodeInSubFunctionTemplate",
			selector: [{ steps: [{
				kind: "name",
				value: "LNode"
			}] }],
			fields: [
				{ target: {
					kind: "attribute",
					value: "lnInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "iedName",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "ldInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "prefix",
					isAttribute: !0
				} }
			]
		}, {
			kind: "unique",
			name: "uniqueChildNameInSubFuncTemplate",
			selector: [{ steps: [{ kind: "wildcard" }] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
	},
	SubNetwork: {
		tag: "SubNetwork",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Communication"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"templateUuid",
				"type",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				type: { facets: {
					enumeration: ["8-MMS", "8-XMPP"],
					minLength: 1,
					whiteSpace: "replace"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels",
				"BitRate",
				"ConnectedAP",
				"CommunicationServiceSpecifications"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabel",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				BitRate: { maxOccurs: 1 },
				ConnectedAP: {
					required: !0,
					minOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueGSEinConnectedAP",
						selector: [{ steps: [{
							kind: "name",
							value: "GSE"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "cbName",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} }]
					}, {
						kind: "unique",
						name: "uniqueSMVinConnectedAP",
						selector: [{ steps: [{
							kind: "name",
							value: "SMV"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "cbName",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} }]
					}]
				},
				CommunicationServiceSpecifications: {}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueConnectedAP",
			selector: [{ steps: [{
				kind: "name",
				value: "ConnectedAP"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "iedName",
				isAttribute: !0
			} }, { target: {
				kind: "attribute",
				value: "apName",
				isAttribute: !0
			} }]
		}]
	},
	Subject: {
		tag: "Subject",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["GOOSESecurity", "SMVSecurity"],
		attributes: {
			sequence: ["commonName", "idHierarchy"],
			details: {
				commonName: {
					required: !0,
					facets: {
						pattern: ["none", "CN=.+"],
						minLength: 4,
						whiteSpace: "replace"
					}
				},
				idHierarchy: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	SubscriberLNode: {
		tag: "SubscriberLNode",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		parents: [
			"DAS",
			"SDS",
			"DOS"
		],
		attributes: {
			sequence: [
				"desc",
				"inputName",
				"pLN",
				"resourceName",
				"resourceUuid",
				"service"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				inputName: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				pLN: { facets: { whiteSpace: "replace" } },
				resourceName: { facets: { whiteSpace: "replace" } },
				resourceUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				service: { facets: {
					enumeration: [
						"Poll",
						"Report",
						"GOOSE",
						"SMV",
						"Wired",
						"Internal"
					],
					pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					whiteSpace: "collapse"
				} }
			}
		},
		children: {
			sequence: [
				"Text",
				"GooseParametersRef",
				"SMVParametersRef",
				"ReportParametersRef",
				"BinaryWiringParametersRef"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				GooseParametersRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				SMVParametersRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				ReportParametersRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				BinaryWiringParametersRef: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				}
			},
			choices: [{
				options: [
					"BinaryWiringParametersRef",
					"GooseParametersRef",
					"ReportParametersRef",
					"SMVParametersRef"
				],
				maxOccurs: 1
			}]
		}
	},
	Substation: {
		tag: "Substation",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["SCL", "Process"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"templateUuid",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels",
				"LNode",
				"PowerTransformer",
				"GeneralEquipment",
				"VoltageLevel",
				"Function",
				"AllocationRole",
				"Application",
				"BehaviorDescription",
				"FunctionCategory",
				"ProcessResources",
				"Variable"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabel",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				LNode: {},
				PowerTransformer: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInPowerTransformer",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInPTR",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				GeneralEquipment: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInGeneralEquipment",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInGE",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				VoltageLevel: {
					required: !0,
					minOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueChildNameInVoltageLevel",
						selector: [{ steps: [{ kind: "wildcard" }] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					}, {
						kind: "unique",
						name: "uniqueLNodeInVoltageLevel",
						selector: [{ steps: [{
							kind: "name",
							value: "LNode"
						}] }],
						fields: [
							{ target: {
								kind: "attribute",
								value: "lnInst",
								isAttribute: !0
							} },
							{ target: {
								kind: "attribute",
								value: "lnClass",
								isAttribute: !0
							} },
							{ target: {
								kind: "attribute",
								value: "iedName",
								isAttribute: !0
							} },
							{ target: {
								kind: "attribute",
								value: "ldInst",
								isAttribute: !0
							} },
							{ target: {
								kind: "attribute",
								value: "prefix",
								isAttribute: !0
							} }
						]
					}]
				},
				Function: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInFunctionSS",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInSubstationFunc",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				AllocationRole: {},
				Application: {},
				BehaviorDescription: {},
				FunctionCategory: {},
				ProcessResources: {},
				Variable: {}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueChildNameInSubstation",
			selector: [{ steps: [{ kind: "wildcard" }] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}, {
			kind: "unique",
			name: "uniqueLNodeInSubstation",
			selector: [{ steps: [{
				kind: "name",
				value: "LNode"
			}] }],
			fields: [
				{ target: {
					kind: "attribute",
					value: "lnInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "iedName",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "ldInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "prefix",
					isAttribute: !0
				} }
			]
		}]
	},
	SupSubscription: {
		tag: "SupSubscription",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: ["maxGo", "maxSv"],
			details: {
				maxGo: {
					required: !0,
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				},
				maxSv: {
					required: !0,
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	TapChanger: {
		tag: "TapChanger",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["TransformerWinding"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"templateUuid",
				"type",
				"uuid",
				"virtual"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				type: {
					required: !0,
					fixed: "LTC",
					facets: {
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				virtual: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels",
				"LNode",
				"SubEquipment",
				"EqFunction"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabel",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				LNode: {},
				SubEquipment: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInSubEquipmentLTC",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInLTCSubEquipment",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				EqFunction: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInFuncForLTC",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInFuncForLTC",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] }
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueLNodeInTapChanger",
			selector: [{ steps: [{
				kind: "name",
				value: "LNode"
			}] }],
			fields: [
				{ target: {
					kind: "attribute",
					value: "lnInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "iedName",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "ldInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "prefix",
					isAttribute: !0
				} }
			]
		}, {
			kind: "unique",
			name: "uniqueChildNameInLTC",
			selector: [{ steps: [{ kind: "wildcard" }] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
	},
	Terminal: {
		tag: "Terminal",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["TransformerWinding", "ConductingEquipment"],
		attributes: {
			sequence: [
				"bayName",
				"cNodeName",
				"cNodeUuid",
				"connectivityNode",
				"desc",
				"lineName",
				"name",
				"processName",
				"substationName",
				"voltageLevelName"
			],
			details: {
				bayName: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				cNodeName: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				cNodeUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				connectivityNode: {
					required: !0,
					facets: {
						pattern: [".+/.+(/.+)*"],
						whiteSpace: "replace"
					}
				},
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				lineName: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				name: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				processName: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				substationName: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				voltageLevelName: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} }
			}
		},
		children: {
			sequence: ["Text", "Private"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {}
			}
		}
	},
	Text: {
		tag: "Text",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: /* @__PURE__ */ "SCL.Header.SourceFiles.SclFileReference.Substation.Labels.LNode.PowerTransformer.TransformerWinding.Terminal.SubEquipment.EqFunction.GeneralEquipment.EqSubFunction.TapChanger.NeutralPoint.VoltageLevel.Bay.ConductingEquipment.ConnectivityNode.Function.SubFunction.Communication.SubNetwork.ConnectedAP.GSE.SMV.PhysConn.IED.AccessPoint.Server.LDevice.LN0.DataSet.ReportControl.RptEnabled.LogControl.DOI.SDI.DAI.Inputs.ExtRef.Outputs.ExtCtrl.Log.GSEControl.SampledValueControl.SettingControl.LN.ServerAt.GOOSESecurity.SMVSecurity.IEDSourceFiles.MinRequestedSCDFiles.LNodeType.DO.DOType.SDO.DA.DAType.BDA.EnumType.Line.Process.FunctionCategory.SubCategory.FunctionCatRef.ProcessResources.ProcessResource.PowerSystemRelations.PowerSystemRelation.LNodeInputs.SourceRef.GooseParametersRef.SMVParametersRef.ReportParametersRef.BinaryWiringParametersRef.AnalogueWiringParametersRef.LNodeOutputs.ControlRef.ProcessEcho.LNodeSpecNaming.DOS.SDS.DAS.SubscriberLNode.ControllingLNode.LogParametersRef.FunctionSclRef.Variable.VariableApplyTo.CommunicationServiceSpecifications.GooseParameters.L2CommParameters.L3IPv4CommParameters.L3IPv6CommParameters.SMVParameters.ReportParameters.ServiceSpecifications.BinaryWiringParameters.AnalogueWiringParameters.LogParameters.AllocationRole.FunctionRef.FunctionalVariantRef.SignalRole.LNodeInputRef.LNodeOutputRef.LNodeDataRef.Application.FunctionRole.FunctionRoleContent.BehaviorDescriptionRef.InputVarRef.OutputVarRef.ProcessResourceRef.VariableRef.FunctionCategoryRef.PowerSystemRelationRef.FunctionalVariant.FunctionalSubVariant.FunctionalVariantGroup.AllocationRoleRef.ApplicationSclRef.BehaviorDescription.InputVar.OutputVar.BehaviorReference.Project.ProjectProcessReference.FunctionTemplate.SubFunctionTemplate".split("."),
		attributes: {
			sequence: ["source"],
			details: { source: { facets: { whiteSpace: "collapse" } } }
		},
		children: {
			sequence: [],
			any: !0,
			details: {}
		},
		textContent: {}
	},
	TimeSyncProt: {
		tag: "TimeSyncProt",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["ClientServices", "Services"],
		attributes: {
			sequence: [
				"c37_238",
				"iec61850_9_3",
				"other",
				"sntp"
			],
			details: {
				c37_238: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				iec61850_9_3: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				other: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				sntp: {
					default: "true",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	TimerActivatedControl: {
		tag: "TimerActivatedControl",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	TransformerWinding: {
		tag: "TransformerWinding",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["PowerTransformer"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"templateUuid",
				"type",
				"uuid",
				"virtual"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				type: {
					required: !0,
					fixed: "PTW",
					facets: {
						enumeration: ["PTW"],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						whiteSpace: "collapse"
					}
				},
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				virtual: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels",
				"LNode",
				"Terminal",
				"SubEquipment",
				"TapChanger",
				"NeutralPoint",
				"EqFunction"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabel",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				LNode: {},
				Terminal: { maxOccurs: 2 },
				SubEquipment: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInSubEquipment",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInACESubEquipment",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				TapChanger: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLNodeInTapChanger",
						selector: [{ steps: [{
							kind: "name",
							value: "LNode"
						}] }],
						fields: [
							{ target: {
								kind: "attribute",
								value: "lnInst",
								isAttribute: !0
							} },
							{ target: {
								kind: "attribute",
								value: "lnClass",
								isAttribute: !0
							} },
							{ target: {
								kind: "attribute",
								value: "iedName",
								isAttribute: !0
							} },
							{ target: {
								kind: "attribute",
								value: "ldInst",
								isAttribute: !0
							} },
							{ target: {
								kind: "attribute",
								value: "prefix",
								isAttribute: !0
							} }
						]
					}, {
						kind: "unique",
						name: "uniqueChildNameInLTC",
						selector: [{ steps: [{ kind: "wildcard" }] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					}]
				},
				NeutralPoint: { maxOccurs: 1 },
				EqFunction: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInFuncForPTW",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInFuncForPTW",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] }
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueLNodeInTransformerWinding",
			selector: [{ steps: [{
				kind: "name",
				value: "LNode"
			}] }],
			fields: [
				{ target: {
					kind: "attribute",
					value: "lnInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "iedName",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "ldInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "prefix",
					isAttribute: !0
				} }
			]
		}, {
			kind: "unique",
			name: "uniqueChildNameInPTW",
			selector: [
				{ steps: [{
					kind: "name",
					value: "SubEquipment"
				}] },
				{ steps: [{
					kind: "name",
					value: "TapChanger"
				}] },
				{ steps: [{
					kind: "name",
					value: "EqFunction"
				}] }
			],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
	},
	TrgOps: {
		tag: "TrgOps",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["ReportControl", "LogControl"],
		attributes: {
			sequence: [
				"dchg",
				"dupd",
				"gi",
				"period",
				"qchg"
			],
			details: {
				dchg: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				dupd: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				gi: {
					default: "true",
					facets: { whiteSpace: "collapse" }
				},
				period: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				qchg: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	Val: {
		tag: "Val",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: [
			"DAI",
			"DA",
			"BDA",
			"DAS"
		],
		attributes: {
			sequence: ["sGroup"],
			details: { sGroup: { facets: {
				minInclusive: 0,
				maxInclusive: 4294967295,
				whiteSpace: "collapse"
			} } }
		},
		children: {
			sequence: [],
			details: {}
		},
		textContent: { facets: { whiteSpace: "replace" } }
	},
	ValueHandling: {
		tag: "ValueHandling",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Services"],
		attributes: {
			sequence: ["setToRO"],
			details: { setToRO: {
				default: "false",
				facets: { whiteSpace: "collapse" }
			} }
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	Variable: {
		tag: "Variable",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "A Variable is a way to define a global variable which can be modified by a user and applied to a list of SCL attributes",
		parents: [
			"Process",
			"Line",
			"Substation",
			"VoltageLevel",
			"Bay",
			"GeneralEquipment",
			"ConductingEquipment",
			"Function",
			"SubFunction",
			"EqFunction",
			"EqSubFunction"
		],
		attributes: {
			sequence: [
				"desc",
				"name",
				"originUuid",
				"templateUuid",
				"uuid",
				"value"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: { whiteSpace: "replace" }
				},
				originUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				value: { facets: { whiteSpace: "replace" } }
			}
		},
		children: {
			sequence: ["Text", "VariableApplyTo"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				VariableApplyTo: {
					required: !0,
					minOccurs: 1
				}
			}
		}
	},
	VariableApplyTo: {
		tag: "VariableApplyTo",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		parents: ["Variable"],
		attributes: {
			sequence: [
				"attribute",
				"daName",
				"defaultValue",
				"desc",
				"doName",
				"element",
				"elementUuid",
				"format",
				"sGroup"
			],
			details: {
				attribute: { facets: { whiteSpace: "replace" } },
				daName: { facets: {
					pattern: ["[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?(\\.[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?)*"],
					whiteSpace: "replace"
				} },
				defaultValue: { facets: { whiteSpace: "replace" } },
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				doName: { facets: {
					pattern: ["[A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?"],
					whiteSpace: "replace"
				} },
				element: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				elementUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				format: { facets: { whiteSpace: "replace" } },
				sGroup: { facets: {
					minInclusive: 0,
					maxInclusive: 4294967295,
					whiteSpace: "collapse"
				} }
			}
		},
		children: {
			sequence: ["Text"],
			any: !0,
			details: { Text: { maxOccurs: 1 } }
		}
	},
	VariableRef: {
		tag: "VariableRef",
		namespace: {
			prefix: "eIEC61850-6-100",
			uri: "http://www.iec.ch/61850/2019/SCL/6-100"
		},
		documentation: "Reference to a variable attached to current role",
		parents: [
			"FunctionRoleContent",
			"FunctionalSubVariant",
			"FunctionalVariant"
		],
		attributes: {
			sequence: [
				"desc",
				"value",
				"variable",
				"variableUuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				value: { facets: { whiteSpace: "replace" } },
				variable: { facets: {
					pattern: [".+(/.+)*"],
					whiteSpace: "replace"
				} },
				variableUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: ["Text", "FunctionalVariantRef"],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				FunctionalVariantRef: {}
			},
			choices: [{ options: ["FunctionalVariantRef"] }]
		}
	},
	Voltage: {
		tag: "Voltage",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["VoltageLevel", "Line"],
		attributes: {
			sequence: ["multiplier", "unit"],
			details: {
				multiplier: {
					default: "",
					facets: {
						enumeration: [
							"",
							"m",
							"k",
							"M",
							"mu",
							"y",
							"z",
							"a",
							"f",
							"p",
							"n",
							"c",
							"d",
							"da",
							"h",
							"G",
							"T",
							"P",
							"E",
							"Z",
							"Y"
						],
						whiteSpace: "replace"
					}
				},
				unit: {
					required: !0,
					fixed: "V",
					facets: { whiteSpace: "collapse" }
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		},
		textContent: { facets: { whiteSpace: "collapse" } }
	},
	VoltageLevel: {
		tag: "VoltageLevel",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2003/SCL"
		},
		parents: ["Substation"],
		attributes: {
			sequence: [
				"desc",
				"name",
				"nomFreq",
				"numPhases",
				"templateUuid",
				"uuid"
			],
			details: {
				desc: {
					default: "",
					facets: { whiteSpace: "replace" }
				},
				name: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				nomFreq: { facets: {
					minInclusive: 0,
					whiteSpace: "collapse"
				} },
				numPhases: { facets: {
					minInclusive: 0,
					maxInclusive: 255,
					minExclusive: 0,
					whiteSpace: "collapse"
				} },
				templateUuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} },
				uuid: { facets: {
					pattern: ["[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"],
					whiteSpace: "preserve"
				} }
			}
		},
		children: {
			sequence: [
				"Text",
				"Private",
				"Labels",
				"LNode",
				"PowerTransformer",
				"GeneralEquipment",
				"Voltage",
				"Bay",
				"Function",
				"AllocationRole",
				"Application",
				"BehaviorDescription",
				"FunctionCategory",
				"ProcessResources",
				"Variable"
			],
			any: !0,
			details: {
				Text: { maxOccurs: 1 },
				Private: {},
				Labels: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueLabel",
						selector: [{ steps: [{
							kind: "name",
							value: "Label"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "id",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "lang",
							isAttribute: !0
						} }]
					}]
				},
				LNode: {},
				PowerTransformer: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInPowerTransformer",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInPTR",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				GeneralEquipment: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInGeneralEquipment",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInGE",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				Voltage: { maxOccurs: 1 },
				Bay: {
					required: !0,
					minOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueChildNameInBay",
						selector: [{ steps: [{ kind: "wildcard" }] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					}, {
						kind: "unique",
						name: "uniqueLNodeInBay",
						selector: [{ steps: [{
							kind: "name",
							value: "LNode"
						}] }],
						fields: [
							{ target: {
								kind: "attribute",
								value: "lnInst",
								isAttribute: !0
							} },
							{ target: {
								kind: "attribute",
								value: "lnClass",
								isAttribute: !0
							} },
							{ target: {
								kind: "attribute",
								value: "iedName",
								isAttribute: !0
							} },
							{ target: {
								kind: "attribute",
								value: "ldInst",
								isAttribute: !0
							} },
							{ target: {
								kind: "attribute",
								value: "prefix",
								isAttribute: !0
							} }
						]
					}]
				},
				Function: { constraints: [{
					kind: "unique",
					name: "uniqueLNodeInFunctionVL",
					selector: [{ steps: [{
						kind: "name",
						value: "LNode"
					}] }],
					fields: [
						{ target: {
							kind: "attribute",
							value: "lnInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "lnClass",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "iedName",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "ldInst",
							isAttribute: !0
						} },
						{ target: {
							kind: "attribute",
							value: "prefix",
							isAttribute: !0
						} }
					]
				}, {
					kind: "unique",
					name: "uniqueChildNameInVoltageLevelFunc",
					selector: [{ steps: [{ kind: "wildcard" }] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				AllocationRole: {},
				Application: {},
				BehaviorDescription: {},
				FunctionCategory: {},
				ProcessResources: {},
				Variable: {}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueChildNameInVoltageLevel",
			selector: [{ steps: [{ kind: "wildcard" }] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}, {
			kind: "unique",
			name: "uniqueLNodeInVoltageLevel",
			selector: [{ steps: [{
				kind: "name",
				value: "LNode"
			}] }],
			fields: [
				{ target: {
					kind: "attribute",
					value: "lnInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "lnClass",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "iedName",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "ldInst",
					isAttribute: !0
				} },
				{ target: {
					kind: "attribute",
					value: "prefix",
					isAttribute: !0
				} }
			]
		}]
	}
}, cn = {
	AccessPoint: { type: "transparent" },
	Server: { type: "transparent" },
	Private: { type: "transparent" },
	LNodeInputs: { type: "transparent" },
	LNodeOutputs: { type: "transparent" },
	LDevice: {
		type: "attribute",
		attr: "inst",
		separator: "/"
	},
	IED: { type: "name" },
	LN: { type: "lnClass" },
	LN0: { type: "lnClass" },
	DOI: {
		type: "name",
		separator: "."
	},
	SDI: {
		type: "name",
		separator: "."
	},
	DAI: {
		type: "name",
		separator: "."
	},
	ExtRef: {
		type: "attribute",
		attr: "intAddr",
		separator: "."
	},
	ExtCtrl: {
		type: "attribute",
		attr: "intAddr",
		separator: "."
	},
	SourceRef: { type: "sourceRef" },
	ControlRef: { type: "controlRef" },
	DOS: {
		type: "name",
		separator: "."
	},
	DAS: {
		type: "name",
		separator: "."
	},
	SDS: {
		type: "name",
		separator: "."
	},
	Substation: { type: "name" },
	VoltageLevel: { type: "name" },
	Bay: { type: "name" },
	Line: { type: "name" },
	ConductingEquipment: { type: "name" },
	ConnectivityNode: { type: "name" },
	PowerTransformer: { type: "name" },
	TransformerWinding: { type: "name" },
	TapChanger: { type: "name" },
	GeneralEquipment: { type: "name" },
	SubEquipment: { type: "name" },
	LNode: { type: "lnClass" },
	Function: { type: "name" },
	SubFunction: { type: "name" },
	FunctionTemplate: { type: "name" },
	SubFunctionTemplate: { type: "name" },
	EqFunction: { type: "name" },
	EqSubFunction: { type: "name" },
	Application: { type: "name" },
	AllocationRole: { type: "name" },
	BehaviorDescription: { type: "name" },
	FunctionCategory: { type: "name" },
	SubCategory: { type: "name" },
	FunctionalVariant: { type: "name" },
	FunctionalSubVariant: { type: "name" },
	FunctionalVariantGroup: { type: "name" },
	ProcessResource: { type: "name" },
	PowerSystemRelation: { type: "name" },
	Variable: { type: "name" },
	Process: { type: "name" }
}, ln = [
	"lnClass",
	"prefix",
	"inst",
	"lnInst"
];
new Set(Object.values(cn).flatMap((e) => {
	switch (e.type) {
		case "transparent": return [];
		case "name": return ["name"];
		case "lnClass": return [...ln];
		case "attribute": return [e.attr];
		case "sourceRef": return [
			"input",
			"inputInst",
			"pDA"
		];
		case "controlRef": return ["output", "outputInst"];
	}
}));
function un(e) {
	switch (e.type) {
		case "transparent": return () => null;
		case "name": {
			let t = e.separator ?? "/";
			return (e) => {
				let n = mn(e, "name");
				return n ? {
					segment: n,
					separator: t
				} : null;
			};
		}
		case "lnClass": return (e) => {
			let t = mn(e, "lnClass");
			return t ? {
				segment: `${mn(e, "prefix") ?? ""}${t}${mn(e, "inst") ?? mn(e, "lnInst") ?? ""}`,
				separator: "/"
			} : null;
		};
		case "attribute": return (t) => {
			let n = mn(t, e.attr);
			return n ? {
				segment: n,
				separator: e.separator
			} : null;
		};
		case "sourceRef": return (e) => {
			let t = mn(e, "input");
			if (!t) return null;
			let n = t, r = mn(e, "inputInst");
			r && r !== "1" && (n += `(${r})`);
			let i = mn(e, "pDA");
			return i && (n += `.${i}`), {
				segment: n,
				separator: "."
			};
		};
		case "controlRef": return (e) => {
			let t = mn(e, "output");
			if (!t) return null;
			let n = t, r = mn(e, "outputInst");
			return r && r !== "1" && (n += `(${r})`), {
				segment: n,
				separator: "."
			};
		};
	}
}
var dn = Object.fromEntries(Object.entries(cn).map(([e, t]) => [e, un(t)]));
function fn(e) {
	let t = dn[e.tagName];
	return t ? t(e) : null;
}
function pn(e) {
	let { record: t, ancestry: n } = e, r = [];
	for (let e of n) {
		let t = fn(e);
		t && r.push({
			...t,
			ref: {
				tagName: e.tagName,
				id: e.id
			}
		});
	}
	let i = fn(t);
	return i && r.push({
		...i,
		ref: {
			tagName: t.tagName,
			id: t.id
		}
	}), r.length === 0 ? null : {
		path: hn(r),
		segments: r
	};
}
function mn(e, t) {
	return e.attributes.find((e) => e.name === t)?.value;
}
function hn(e) {
	let t = e[0].segment;
	for (let n = 1; n < e.length; n++) t += e[n].separator + e[n].segment;
	return t;
}
function gn(e) {
	let t = e.split("/"), n = t[t.length - 1], r = n.indexOf(".");
	if (r === -1) return { path: e };
	let i = n.substring(0, r), a = n.substring(r + 1);
	return {
		path: [...t.slice(0, -1), i].join("/"),
		qualifier: a || void 0
	};
}
function _n(e, t, n, r) {
	return !e || e === wn.unsupported ? null : e === wn.direct ? { lookupKey: n } : e === wn.iedAddress ? yn(n, r) : e === wn.lnode ? vn(n) : e === wn.behaviorDescription ? bn(t, n, r) : null;
}
function vn(e) {
	let { path: t, qualifier: n } = gn(e);
	return {
		lookupKey: t,
		qualifier: n
	};
}
function yn(e, t) {
	if (t) {
		let n = Cn(t);
		if (n) return {
			lookupKey: e,
			fallbackLookupKey: `${n}/${e}`
		};
	}
	return { lookupKey: e };
}
function bn(e, t, n) {
	if (!n) return null;
	let r = xn(n);
	return r ? e === "dataName" ? {
		lookupKey: r,
		qualifier: t
	} : e === "inputName" || e === "outputName" ? { lookupKey: `${r}.${Sn(t)}` } : null : null;
}
function xn(e) {
	let t = -1;
	for (let n = e.length - 1; n >= 0; n--) if (e[n].tagName === "BehaviorDescription") {
		t = n;
		break;
	}
	if (t === -1) return null;
	let n = [];
	for (let r = 0; r < t; r++) {
		let t = fn(e[r]);
		t && n.push(t);
	}
	return n.length === 0 ? null : hn(n);
}
function Sn(e) {
	let t = e.indexOf("("), n = e.indexOf(".");
	return t === -1 ? n === -1 ? e : e.substring(0, n) : e.substring(0, t);
}
function Cn(e) {
	for (let t = e.length - 1; t >= 0; t--) if (e[t].tagName === "LNode") return e[t].attributes.find((e) => e.name === "iedName")?.value ?? null;
	return null;
}
new Set(sn.LNode.attributes.details.lnClass.facets.enumeration);
async function X(e) {
	let { query: t, current: n, segments: r, index: i } = e;
	if (i >= r.length) return n;
	let a = n.children ?? [];
	if (a.length === 0) return;
	let o = await t.getRecords(a), s = r[i];
	for (let e of o) {
		if (!e) continue;
		let n = fn(Zt(e));
		if (!n) {
			let n = await X({
				query: t,
				current: e,
				segments: r,
				index: i
			});
			if (n) return n;
			continue;
		}
		if (n.segment === s.segment && n.separator === s.separator) return X({
			query: t,
			current: e,
			segments: r,
			index: i + 1
		});
	}
}
var wn = {
	direct: "direct",
	lnode: "lnode",
	iedAddress: "ied-address",
	behaviorDescription: "behavior-description",
	unsupported: "unsupported"
}, Tn = {
	AllocationRoleRef: [{
		attribute: {
			path: "allocationRole",
			uuid: "allocationRoleUuid"
		},
		resolution: "direct",
		target: ["AllocationRole"],
		companions: []
	}],
	BehaviorDescriptionRef: [{
		attribute: {
			path: "behaviorDescription",
			uuid: "behaviorDescriptionUuid"
		},
		resolution: "direct",
		target: ["BehaviorDescription"],
		companions: []
	}],
	BehaviorReference: [{
		attribute: {
			path: "behaviorReference",
			uuid: "behaviorUuid"
		},
		resolution: "direct",
		target: ["BehaviorDescription"],
		companions: []
	}],
	ControllingLNode: [{
		attribute: {
			path: "resourceName",
			uuid: "resourceUuid"
		},
		resolution: "direct",
		target: ["ProcessResource"],
		companions: []
	}],
	ControlRef: [
		{
			attribute: {
				path: "controlled",
				uuid: "controlledLNodeUuid"
			},
			resolution: "lnode",
			target: ["LNode"],
			companions: [{
				name: "controlledDoName",
				required: !0
			}]
		},
		{
			attribute: {
				path: "extCtrlAddr",
				uuid: "extCtrlUuid"
			},
			resolution: "ied-address",
			target: ["ExtCtrl"],
			companions: []
		},
		{
			attribute: {
				path: "resourceName",
				uuid: "resourceUuid"
			},
			resolution: "direct",
			target: ["ProcessResource"],
			companions: []
		}
	],
	DAS: [{
		attribute: {
			path: "mappedDaName",
			uuid: "mappedLnUuid"
		},
		resolution: "lnode",
		target: ["LN", "LN0"],
		companions: []
	}],
	DOS: [{
		attribute: {
			path: "mappedDoName",
			uuid: "mappedLnUuid"
		},
		resolution: "lnode",
		target: ["LN", "LN0"],
		companions: []
	}],
	FunctionCategoryRef: [{
		attribute: {
			path: "functionCategory",
			uuid: "functionCategoryUuid"
		},
		resolution: "direct",
		target: ["FunctionCategory", "SubCategory"],
		companions: []
	}],
	FunctionCatRef: [{
		attribute: {
			path: "function",
			uuid: "functionUuid"
		},
		resolution: "direct",
		target: ["Function", "SubFunction"],
		companions: []
	}],
	FunctionRef: [{
		attribute: {
			path: "function",
			uuid: "functionUuid"
		},
		resolution: "direct",
		target: [
			"Function",
			"SubFunction",
			"EqFunction",
			"EqSubFunction"
		],
		companions: []
	}],
	FunctionalVariantRef: [{
		attribute: {
			path: "functionalVariant",
			uuid: "functionalVariantUuid"
		},
		resolution: "direct",
		target: ["FunctionalVariant", "FunctionalSubVariant"],
		companions: []
	}],
	InputVar: [{
		attribute: {
			path: "dataName",
			uuid: "lnodeUuid"
		},
		resolution: "behavior-description",
		target: ["LNode"],
		companions: [{
			name: "doName",
			required: !0
		}, {
			name: "daName",
			required: !1
		}]
	}, {
		attribute: {
			path: "inputName",
			uuid: "inputUuid"
		},
		resolution: "behavior-description",
		target: ["SourceRef"],
		companions: []
	}],
	LNodeDataRef: [{
		attribute: {
			path: "data",
			uuid: "lnodeUuid"
		},
		resolution: "lnode",
		target: ["LNode"],
		companions: [{
			name: "doName",
			required: !0
		}, {
			name: "daName",
			required: !1
		}]
	}],
	LNodeInputRef: [{
		attribute: {
			path: "sourceRef",
			uuid: "sourceRefUuid"
		},
		resolution: "direct",
		target: ["SourceRef"],
		companions: []
	}],
	LNodeOutputRef: [{
		attribute: {
			path: "controlRef",
			uuid: "controlRefUuid"
		},
		resolution: "direct",
		target: ["ControlRef"],
		companions: []
	}],
	OutputVar: [{
		attribute: {
			path: "dataName",
			uuid: "lnodeUuid"
		},
		resolution: "behavior-description",
		target: ["LNode"],
		companions: [{
			name: "doName",
			required: !0
		}, {
			name: "daName",
			required: !1
		}]
	}, {
		attribute: {
			path: "outputName",
			uuid: "outputUuid"
		},
		resolution: "behavior-description",
		target: ["ControlRef"],
		companions: []
	}],
	PowerSystemRelation: [{
		attribute: {
			path: "relation",
			uuid: "relationUuid"
		},
		resolution: "direct",
		target: [
			"ConductingEquipment",
			"PowerTransformer",
			"TransformerWinding",
			"GeneralEquipment",
			"SubEquipment"
		],
		companions: []
	}],
	PowerSystemRelationRef: [{
		attribute: {
			path: "powerSystemRelation",
			uuid: "powerSystemRelationUuid"
		},
		resolution: "direct",
		target: ["PowerSystemRelation"],
		companions: []
	}],
	ProcessEcho: [{
		attribute: {
			path: "source",
			uuid: "sourceLNodeUuid"
		},
		resolution: "lnode",
		target: ["LNode"],
		companions: [{
			name: "sourceDoName",
			required: !0
		}, {
			name: "sourceDaName",
			required: !0
		}]
	}],
	ProcessResourceRef: [{
		attribute: {
			path: "processResource",
			uuid: "processResourceUuid"
		},
		resolution: "direct",
		target: ["ProcessResource"],
		companions: []
	}],
	ProjectProcessReference: [{
		attribute: {
			path: "processReference",
			uuid: "processUuid"
		},
		resolution: "direct",
		target: ["Process"],
		companions: []
	}],
	Resource: [{
		attribute: {
			path: "source",
			uuid: "sourceUuid"
		},
		resolution: "direct",
		target: [
			"Substation",
			"VoltageLevel",
			"Bay",
			"ConductingEquipment",
			"PowerTransformer",
			"TransformerWinding",
			"GeneralEquipment",
			"Function",
			"SubFunction",
			"EqFunction",
			"EqSubFunction",
			"LNode"
		],
		companions: []
	}],
	SDS: [{
		attribute: {
			path: "mappedDoName",
			uuid: "mappedLnUuid"
		},
		resolution: "lnode",
		target: ["LN", "LN0"],
		companions: []
	}],
	SourceRef: [
		{
			attribute: {
				path: "source",
				uuid: "sourceLNodeUuid"
			},
			resolution: "lnode",
			target: ["LNode"],
			companions: [{
				name: "sourceDoName",
				required: !0
			}, {
				name: "sourceDaName",
				required: !0
			}]
		},
		{
			attribute: {
				path: "extRefAddr",
				uuid: "extRefUuid"
			},
			resolution: "ied-address",
			target: ["ExtRef"],
			companions: []
		},
		{
			attribute: {
				path: "resourceName",
				uuid: "resourceUuid"
			},
			resolution: "direct",
			target: ["ProcessResource"],
			companions: []
		}
	],
	SubscriberLNode: [{
		attribute: {
			path: "resourceName",
			uuid: "resourceUuid"
		},
		resolution: "direct",
		target: ["ProcessResource"],
		companions: []
	}],
	VariableApplyTo: [{
		attribute: {
			path: "element",
			uuid: "elementUuid"
		},
		resolution: "unsupported",
		target: [
			"LNode",
			"Function",
			"SubFunction",
			"EqFunction",
			"EqSubFunction"
		],
		companions: [{
			name: "doName",
			required: !1
		}, {
			name: "daName",
			required: !1
		}]
	}],
	VariableRef: [{
		attribute: {
			path: "variable",
			uuid: "variableUuid"
		},
		resolution: "direct",
		target: ["Variable"],
		companions: []
	}]
};
function En(e) {
	let t = {};
	for (let [n, r] of Object.entries(e)) for (let e of r) {
		let r = t[e.resolution] ??= /* @__PURE__ */ new Map();
		for (let t of e.target) {
			let i = r.get(t) ?? [];
			i.push({
				refTagName: n,
				uuidAttr: e.attribute.uuid,
				pathAttr: e.attribute.path
			}), r.set(t, i);
		}
	}
	return t;
}
function Dn(e) {
	let t = /* @__PURE__ */ new Map();
	for (let [n, r] of Object.entries(e)) t.set(n, r.map((e) => ({
		uuidAttr: e.attribute.uuid,
		pathAttr: e.attribute.path,
		resolution: e.resolution,
		targetTagNames: e.target
	})));
	return t;
}
En(Tn), wn.direct, wn.lnode, wn.iedAddress, wn.behaviorDescription, Dn(Tn), [...new Set(Object.values(Tn).flatMap((e) => e.map((e) => e.attribute.uuid)))];
async function On(e) {
	let { record: t, query: n, ids: r, uuids: i } = e;
	r.add(t.id);
	let a = t.attributes.find((e) => e.name === "uuid")?.value;
	a && i.add(a);
	for (let e of t.children) {
		let t = await n.getRecord(e);
		t && await On({
			record: t,
			query: n,
			ids: r,
			uuids: i
		});
	}
}
function kn() {
	let e = /* @__PURE__ */ new Map(), t = [], n = [];
	return {
		beforeImportRecord: (r) => {
			let { record: i, ancestry: a } = r, { tagName: o } = i, s = Nn(i);
			if (s && Mn.has(o)) {
				let t = pn({
					record: i,
					ancestry: a
				});
				t && e.set(t.path, s);
			}
			if (!jn.has(o)) return;
			let c = Tn[o];
			for (let e of c) {
				let r = i.attributes.find((t) => t.name === e.attribute.path)?.value;
				if (!r || i.attributes.find((t) => t.name === e.attribute.uuid)?.value) continue;
				let s = _n(e.resolution, e.attribute.path, r, a);
				if (!s) {
					e.resolution === wn.unsupported && n.push({
						type: "unsupported-xpath-reference",
						recordId: i.id,
						details: {
							elementTag: o,
							pathAttribute: e.attribute.path,
							uuidAttribute: e.attribute.uuid,
							pathValue: r
						}
					});
					continue;
				}
				t.push({
					recordId: i.id,
					elementTag: o,
					uuidAttributeName: e.attribute.uuid,
					pathValue: r,
					lookupKey: s.lookupKey,
					fallbackLookupKey: s.fallbackLookupKey
				});
			}
		},
		afterImport: async () => {
			let r = [], i = [...n];
			for (let n of t) {
				let t = e.get(n.lookupKey) ?? (n.fallbackLookupKey ? e.get(n.fallbackLookupKey) : void 0);
				if (!t) {
					i.push({
						type: "unresolved-reference",
						recordId: n.recordId,
						details: {
							elementTag: n.elementTag,
							uuidAttribute: n.uuidAttributeName,
							pathValue: n.pathValue,
							triedKeys: n.fallbackLookupKey ? [n.lookupKey, n.fallbackLookupKey] : [n.lookupKey]
						}
					});
					continue;
				}
				r.push({
					recordId: n.recordId,
					attributes: [{
						name: n.uuidAttributeName,
						value: t
					}]
				});
			}
			return e.clear(), t.length = 0, n.length = 0, {
				updates: r,
				warnings: i.length > 0 ? i : void 0
			};
		}
	};
}
var An = new Set(Object.entries(on).filter(([, e]) => "uuid" in e).map(([e]) => e)), jn = new Set(Object.keys(Tn)), Mn = new Set(Object.values(Tn).flatMap((e) => e.flatMap((e) => e.target)));
function Nn(e) {
	if (!An.has(e.tagName)) return;
	let t = e.attributes.find((e) => e.name === "uuid");
	if (t) return t.value;
	let n = crypto.randomUUID();
	return e.attributes.push({
		name: "uuid",
		value: n
	}), n;
}
var Pn = {
	rootElementName: rn,
	singletonElements: an,
	transparentElements: ["Private"],
	elements: Qt,
	namespaces: {
		default: {
			uri: "http://www.iec.ch/61850/2003/SCL",
			prefix: ""
		},
		v2019C1: {
			uri: "http://www.iec.ch/61850/2019/SCL/6-100",
			prefix: "eIEC61850-6-100"
		}
	},
	attributes: on,
	children: $t,
	parents: en,
	descendants: tn,
	ancestors: nn,
	database: {
		recordSchema: {
			primaryKey: "id",
			indexes: [
				"tagName",
				"parent.id",
				"parent.tagName"
			],
			compoundIndexes: [["id", "tagName"]],
			arrayIndexes: ["children.id", "children.tagName"]
		},
		tables: {
			xmlElements: {
				name: "sclElements",
				schema: "id, tagName, [id+tagName], parent.id, parent.tagName, *children.id, *children.tagName"
			},
			additionalTables: { attachedFiles: { schema: "id, filename, file" } }
		}
	},
	io: {
		supportedFileExtensions: [
			".fsd",
			".asd",
			".ssd",
			".scd",
			".isd",
			".xml"
		],
		hooks: kn()
	},
	definition: sn
}, Fn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function In(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ln(e) {
	if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
	var t = e.default;
	if (typeof t == "function") {
		var n = function e() {
			var n = !1;
			try {
				n = this instanceof e;
			} catch {}
			return n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
		};
		n.prototype = t.prototype;
	} else n = {};
	return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
		var r = Object.getOwnPropertyDescriptor(e, t);
		Object.defineProperty(n, t, r.get ? r : {
			enumerable: !0,
			get: function() {
				return e[t];
			}
		});
	}), n;
}
var Rn = { exports: {} }, zn = Rn.exports, Bn;
function Vn() {
	return Bn || (Bn = 1, (function(e, t) {
		(function(t, n) {
			e.exports = n();
		})(zn, function() {
			var e = function(t, n) {
				return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
					e.__proto__ = t;
				} || function(e, t) {
					for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
				})(t, n);
			}, t = function() {
				return (t = Object.assign || function(e) {
					for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
					return e;
				}).apply(this, arguments);
			};
			function n(e, t, n) {
				for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || ((r ||= Array.prototype.slice.call(t, 0, i))[i] = t[i]);
				return e.concat(r || Array.prototype.slice.call(t));
			}
			var r = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Fn, i = Object.keys, a = Array.isArray;
			function o(e, t) {
				return typeof t != "object" || i(t).forEach(function(n) {
					e[n] = t[n];
				}), e;
			}
			typeof Promise > "u" || r.Promise || (r.Promise = Promise);
			var s = Object.getPrototypeOf, c = {}.hasOwnProperty;
			function l(e, t) {
				return c.call(e, t);
			}
			function u(e, t) {
				typeof t == "function" && (t = t(s(e))), (typeof Reflect > "u" ? i : Reflect.ownKeys)(t).forEach(function(n) {
					f(e, n, t[n]);
				});
			}
			var d = Object.defineProperty;
			function f(e, t, n, r) {
				d(e, t, o(n && l(n, "get") && typeof n.get == "function" ? {
					get: n.get,
					set: n.set,
					configurable: !0
				} : {
					value: n,
					configurable: !0,
					writable: !0
				}, r));
			}
			function p(e) {
				return { from: function(t) {
					return e.prototype = Object.create(t.prototype), f(e.prototype, "constructor", e), { extend: u.bind(null, e.prototype) };
				} };
			}
			var m = Object.getOwnPropertyDescriptor, h = [].slice;
			function g(e, t, n) {
				return h.call(e, t, n);
			}
			function _(e, t) {
				return t(e);
			}
			function v(e) {
				if (!e) throw Error("Assertion Failed");
			}
			function y(e) {
				r.setImmediate ? setImmediate(e) : setTimeout(e, 0);
			}
			function b(e, t) {
				if (typeof t == "string" && l(e, t)) return e[t];
				if (!t) return e;
				if (typeof t != "string") {
					for (var n = [], r = 0, i = t.length; r < i; ++r) {
						var a = b(e, t[r]);
						n.push(a);
					}
					return n;
				}
				var o = t.indexOf(".");
				if (o !== -1) {
					var s = e[t.substr(0, o)];
					return s == null ? void 0 : b(s, t.substr(o + 1));
				}
			}
			function x(e, t, n) {
				if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
					v(typeof n != "string" && "length" in n);
					for (var r = 0, i = t.length; r < i; ++r) x(e, t[r], n[r]);
				} else {
					var o, s, c = t.indexOf(".");
					c === -1 ? n === void 0 ? a(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n : (o = t.substr(0, c), (s = t.substr(c + 1)) === "" ? n === void 0 ? a(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = n : x(c = !(c = e[o]) || !l(e, o) ? e[o] = {} : c, s, n));
				}
			}
			function ee(e) {
				var t, n = {};
				for (t in e) l(e, t) && (n[t] = e[t]);
				return n;
			}
			var S = [].concat;
			function C(e) {
				return S.apply([], e);
			}
			var w = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(C([
				8,
				16,
				32,
				64
			].map(function(e) {
				return [
					"Int",
					"Uint",
					"Float"
				].map(function(t) {
					return t + e + "Array";
				});
			}))).filter(function(e) {
				return r[e];
			}), te = new Set(w.map(function(e) {
				return r[e];
			})), T = null;
			function E(e) {
				return T = /* @__PURE__ */ new WeakMap(), e = (function e(t) {
					if (!t || typeof t != "object") return t;
					var n = T.get(t);
					if (n) return n;
					if (a(t)) {
						n = [], T.set(t, n);
						for (var r = 0, i = t.length; r < i; ++r) n.push(e(t[r]));
					} else if (te.has(t.constructor)) n = t;
					else {
						var o, c = s(t);
						for (o in n = c === Object.prototype ? {} : Object.create(c), T.set(t, n), t) l(t, o) && (n[o] = e(t[o]));
					}
					return n;
				})(e), T = null, e;
			}
			var ne = {}.toString;
			function D(e) {
				return ne.call(e).slice(8, -1);
			}
			var re = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", O = typeof re == "symbol" ? function(e) {
				var t;
				return e != null && (t = e[re]) && t.apply(e);
			} : function() {
				return null;
			};
			function k(e, t) {
				return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
			}
			var ie = {};
			function A(e) {
				var t, n, r, i;
				if (arguments.length === 1) {
					if (a(e)) return e.slice();
					if (this === ie && typeof e == "string") return [e];
					if (i = O(e)) {
						for (n = []; !(r = i.next()).done;) n.push(r.value);
						return n;
					}
					if (e == null || typeof (t = e.length) != "number") return [e];
					for (n = Array(t); t--;) n[t] = e[t];
					return n;
				}
				for (t = arguments.length, n = Array(t); t--;) n[t] = arguments[t];
				return n;
			}
			var j = typeof Symbol < "u" ? function(e) {
				return e[Symbol.toStringTag] === "AsyncFunction";
			} : function() {
				return !1;
			}, M = [
				"Unknown",
				"Constraint",
				"Data",
				"TransactionInactive",
				"ReadOnly",
				"Version",
				"NotFound",
				"InvalidState",
				"InvalidAccess",
				"Abort",
				"Timeout",
				"QuotaExceeded",
				"Syntax",
				"DataClone"
			], N = [
				"Modify",
				"Bulk",
				"OpenFailed",
				"VersionChange",
				"Schema",
				"Upgrade",
				"InvalidTable",
				"MissingAPI",
				"NoSuchDatabase",
				"InvalidArgument",
				"SubTransaction",
				"Unsupported",
				"Internal",
				"DatabaseClosed",
				"PrematureCommit",
				"ForeignAwait"
			].concat(M), ae = {
				VersionChanged: "Database version changed by other database connection",
				DatabaseClosed: "Database has been closed",
				Abort: "Transaction aborted",
				TransactionInactive: "Transaction has already completed or failed",
				MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
			};
			function P(e, t) {
				this.name = e, this.message = t;
			}
			function oe(e, t) {
				return e + ". Errors: " + Object.keys(t).map(function(e) {
					return t[e].toString();
				}).filter(function(e, t, n) {
					return n.indexOf(e) === t;
				}).join("\n");
			}
			function se(e, t, n, r) {
				this.failures = t, this.failedKeys = r, this.successCount = n, this.message = oe(e, t);
			}
			function ce(e, t) {
				this.name = "BulkError", this.failures = Object.keys(t).map(function(e) {
					return t[e];
				}), this.failuresByPos = t, this.message = oe(e, this.failures);
			}
			p(P).from(Error).extend({ toString: function() {
				return this.name + ": " + this.message;
			} }), p(se).from(P), p(ce).from(P);
			var le = N.reduce(function(e, t) {
				return e[t] = t + "Error", e;
			}, {}), F = P, I = N.reduce(function(e, t) {
				var n = t + "Error";
				function r(e, r) {
					this.name = n, e ? typeof e == "string" ? (this.message = `${e}${r ? "\n " + r : ""}`, this.inner = r || null) : typeof e == "object" && (this.message = `${e.name} ${e.message}`, this.inner = e) : (this.message = ae[t] || n, this.inner = null);
				}
				return p(r).from(F), e[t] = r, e;
			}, {});
			I.Syntax = SyntaxError, I.Type = TypeError, I.Range = RangeError;
			var ue = M.reduce(function(e, t) {
				return e[t + "Error"] = I[t], e;
			}, {}), de = N.reduce(function(e, t) {
				return [
					"Syntax",
					"Type",
					"Range"
				].indexOf(t) === -1 && (e[t + "Error"] = I[t]), e;
			}, {});
			function L() {}
			function fe(e) {
				return e;
			}
			function pe(e, t) {
				return e == null || e === fe ? t : function(n) {
					return t(e(n));
				};
			}
			function me(e, t) {
				return function() {
					e.apply(this, arguments), t.apply(this, arguments);
				};
			}
			function he(e, t) {
				return e === L ? t : function() {
					var n = e.apply(this, arguments);
					n !== void 0 && (arguments[0] = n);
					var r = this.onsuccess, i = this.onerror;
					this.onsuccess = null, this.onerror = null;
					var a = t.apply(this, arguments);
					return r && (this.onsuccess = this.onsuccess ? me(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? me(i, this.onerror) : i), a === void 0 ? n : a;
				};
			}
			function ge(e, t) {
				return e === L ? t : function() {
					e.apply(this, arguments);
					var n = this.onsuccess, r = this.onerror;
					this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? me(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? me(r, this.onerror) : r);
				};
			}
			function _e(e, t) {
				return e === L ? t : function(n) {
					var r = e.apply(this, arguments);
					o(n, r);
					var i = this.onsuccess, a = this.onerror;
					return this.onsuccess = null, this.onerror = null, n = t.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? me(i, this.onsuccess) : i), a && (this.onerror = this.onerror ? me(a, this.onerror) : a), r === void 0 ? n === void 0 ? void 0 : n : o(r, n);
				};
			}
			function ve(e, t) {
				return e === L ? t : function() {
					return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
				};
			}
			function ye(e, t) {
				return e === L ? t : function() {
					var n = e.apply(this, arguments);
					if (n && typeof n.then == "function") {
						for (var r = this, i = arguments.length, a = Array(i); i--;) a[i] = arguments[i];
						return n.then(function() {
							return t.apply(r, a);
						});
					}
					return t.apply(this, arguments);
				};
			}
			de.ModifyError = se, de.DexieError = P, de.BulkError = ce;
			var be = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
			function xe(e) {
				be = e;
			}
			var Se = {}, Ce = 100, w = typeof Promise > "u" ? [] : (function() {
				var e = Promise.resolve();
				if (typeof crypto > "u" || !crypto.subtle) return [
					e,
					s(e),
					e
				];
				var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
				return [
					t,
					s(t),
					e
				];
			})(), M = w[0], N = w[1], w = w[2], N = N && N.then, we = M && M.constructor, Te = !!w, Ee = function(e, t) {
				Ne.push([e, t]), Oe &&= (queueMicrotask(He), !1);
			}, De = !0, Oe = !0, ke = [], Ae = [], je = fe, Me = {
				id: "global",
				global: !0,
				ref: 0,
				unhandleds: [],
				onunhandled: L,
				pgp: !1,
				env: {},
				finalize: L
			}, R = Me, Ne = [], Pe = 0, Fe = [];
			function z(e) {
				if (typeof this != "object") throw TypeError("Promises must be constructed via new");
				this._listeners = [], this._lib = !1;
				var t = this._PSD = R;
				if (typeof e != "function") {
					if (e !== Se) throw TypeError("Not a function");
					this._state = arguments[1], this._value = arguments[2], this._state === !1 && Re(this, this._value);
					return;
				}
				this._state = null, this._value = null, ++t.ref, (function e(t, n) {
					try {
						n(function(n) {
							if (t._state === null) {
								if (n === t) throw TypeError("A promise cannot be resolved with itself.");
								var r = t._lib && Ue();
								n && typeof n.then == "function" ? e(t, function(e, t) {
									n instanceof z ? n._then(e, t) : n.then(e, t);
								}) : (t._state = !0, t._value = n, ze(t)), r && We();
							}
						}, Re.bind(null, t));
					} catch (e) {
						Re(t, e);
					}
				})(this, e);
			}
			var Ie = {
				get: function() {
					var e = R, t = Xe;
					function n(n, r) {
						var i = this, a = !e.global && (e !== R || t !== Xe), o = a && !$e(), s = new z(function(t, s) {
							Be(i, new Le(at(n, e, a, o), at(r, e, a, o), t, s, e));
						});
						return this._consoleTask && (s._consoleTask = this._consoleTask), s;
					}
					return n.prototype = Se, n;
				},
				set: function(e) {
					f(this, "then", e && e.prototype === Se ? Ie : {
						get: function() {
							return e;
						},
						set: Ie.set
					});
				}
			};
			function Le(e, t, n, r, i) {
				this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = i;
			}
			function Re(e, t) {
				var n, r;
				Ae.push(t), e._state === null && (n = e._lib && Ue(), t = je(t), e._state = !1, e._value = t, r = e, ke.some(function(e) {
					return e._value === r._value;
				}) || ke.push(r), ze(e), n && We());
			}
			function ze(e) {
				var t = e._listeners;
				e._listeners = [];
				for (var n = 0, r = t.length; n < r; ++n) Be(e, t[n]);
				var i = e._PSD;
				--i.ref || i.finalize(), Pe === 0 && (++Pe, Ee(function() {
					--Pe == 0 && Ge();
				}, []));
			}
			function Be(e, t) {
				if (e._state !== null) {
					var n = e._state ? t.onFulfilled : t.onRejected;
					if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
					++t.psd.ref, ++Pe, Ee(Ve, [
						n,
						e,
						t
					]);
				} else e._listeners.push(t);
			}
			function Ve(e, t, n) {
				try {
					var r, i = t._value;
					!t._state && Ae.length && (Ae = []), r = be && t._consoleTask ? t._consoleTask.run(function() {
						return e(i);
					}) : e(i), t._state || Ae.indexOf(i) !== -1 || (function(e) {
						for (var t = ke.length; t;) if (ke[--t]._value === e._value) return ke.splice(t, 1);
					})(t), n.resolve(r);
				} catch (e) {
					n.reject(e);
				} finally {
					--Pe == 0 && Ge(), --n.psd.ref || n.psd.finalize();
				}
			}
			function He() {
				it(Me, function() {
					Ue() && We();
				});
			}
			function Ue() {
				var e = De;
				return Oe = De = !1, e;
			}
			function We() {
				var e, t, n;
				do
					for (; 0 < Ne.length;) for (e = Ne, Ne = [], n = e.length, t = 0; t < n; ++t) {
						var r = e[t];
						r[0].apply(null, r[1]);
					}
				while (0 < Ne.length);
				Oe = De = !0;
			}
			function Ge() {
				var e = ke;
				ke = [], e.forEach(function(e) {
					e._PSD.onunhandled.call(null, e._value, e);
				});
				for (var t = Fe.slice(0), n = t.length; n;) t[--n]();
			}
			function Ke(e) {
				return new z(Se, !1, e);
			}
			function B(e, t) {
				var n = R;
				return function() {
					var r = Ue(), i = R;
					try {
						return nt(n, !0), e.apply(this, arguments);
					} catch (e) {
						t && t(e);
					} finally {
						nt(i, !1), r && We();
					}
				};
			}
			u(z.prototype, {
				then: Ie,
				_then: function(e, t) {
					Be(this, new Le(null, null, e, t, R));
				},
				catch: function(e) {
					if (arguments.length === 1) return this.then(null, e);
					var t = e, n = arguments[1];
					return typeof t == "function" ? this.then(null, function(e) {
						return (e instanceof t ? n : Ke)(e);
					}) : this.then(null, function(e) {
						return (e && e.name === t ? n : Ke)(e);
					});
				},
				finally: function(e) {
					return this.then(function(t) {
						return z.resolve(e()).then(function() {
							return t;
						});
					}, function(t) {
						return z.resolve(e()).then(function() {
							return Ke(t);
						});
					});
				},
				timeout: function(e, t) {
					var n = this;
					return e < Infinity ? new z(function(r, i) {
						var a = setTimeout(function() {
							return i(new I.Timeout(t));
						}, e);
						n.then(r, i).finally(clearTimeout.bind(null, a));
					}) : this;
				}
			}), typeof Symbol < "u" && Symbol.toStringTag && f(z.prototype, Symbol.toStringTag, "Dexie.Promise"), Me.env = rt(), u(z, {
				all: function() {
					var e = A.apply(null, arguments).map(et);
					return new z(function(t, n) {
						e.length === 0 && t([]);
						var r = e.length;
						e.forEach(function(i, a) {
							return z.resolve(i).then(function(n) {
								e[a] = n, --r || t(e);
							}, n);
						});
					});
				},
				resolve: function(e) {
					return e instanceof z ? e : e && typeof e.then == "function" ? new z(function(t, n) {
						e.then(t, n);
					}) : new z(Se, !0, e);
				},
				reject: Ke,
				race: function() {
					var e = A.apply(null, arguments).map(et);
					return new z(function(t, n) {
						e.map(function(e) {
							return z.resolve(e).then(t, n);
						});
					});
				},
				PSD: {
					get: function() {
						return R;
					},
					set: function(e) {
						return R = e;
					}
				},
				totalEchoes: { get: function() {
					return Xe;
				} },
				newPSD: H,
				usePSD: it,
				scheduler: {
					get: function() {
						return Ee;
					},
					set: function(e) {
						Ee = e;
					}
				},
				rejectionMapper: {
					get: function() {
						return je;
					},
					set: function(e) {
						je = e;
					}
				},
				follow: function(e, t) {
					return new z(function(n, r) {
						return H(function(t, n) {
							var r = R;
							r.unhandleds = [], r.onunhandled = n, r.finalize = me(function() {
								var e, r = this;
								e = function() {
									r.unhandleds.length === 0 ? t() : n(r.unhandleds[0]);
								}, Fe.push(function t() {
									e(), Fe.splice(Fe.indexOf(t), 1);
								}), ++Pe, Ee(function() {
									--Pe == 0 && Ge();
								}, []);
							}, r.finalize), e();
						}, t, n, r);
					});
				}
			}), we && (we.allSettled && f(z, "allSettled", function() {
				var e = A.apply(null, arguments).map(et);
				return new z(function(t) {
					e.length === 0 && t([]);
					var n = e.length, r = Array(n);
					e.forEach(function(e, i) {
						return z.resolve(e).then(function(e) {
							return r[i] = {
								status: "fulfilled",
								value: e
							};
						}, function(e) {
							return r[i] = {
								status: "rejected",
								reason: e
							};
						}).then(function() {
							return --n || t(r);
						});
					});
				});
			}), we.any && typeof AggregateError < "u" && f(z, "any", function() {
				var e = A.apply(null, arguments).map(et);
				return new z(function(t, n) {
					e.length === 0 && n(/* @__PURE__ */ AggregateError([]));
					var r = e.length, i = Array(r);
					e.forEach(function(e, a) {
						return z.resolve(e).then(function(e) {
							return t(e);
						}, function(e) {
							i[a] = e, --r || n(AggregateError(i));
						});
					});
				});
			}), we.withResolvers && (z.withResolvers = we.withResolvers));
			var V = {
				awaits: 0,
				echoes: 0,
				id: 0
			}, qe = 0, Je = [], Ye = 0, Xe = 0, Ze = 0;
			function H(e, t, n, r) {
				var i = R, a = Object.create(i);
				return a.parent = i, a.ref = 0, a.global = !1, a.id = ++Ze, Me.env, a.env = Te ? {
					Promise: z,
					PromiseProp: {
						value: z,
						configurable: !0,
						writable: !0
					},
					all: z.all,
					race: z.race,
					allSettled: z.allSettled,
					any: z.any,
					resolve: z.resolve,
					reject: z.reject
				} : {}, t && o(a, t), ++i.ref, a.finalize = function() {
					--this.parent.ref || this.parent.finalize();
				}, r = it(a, e, n, r), a.ref === 0 && a.finalize(), r;
			}
			function Qe() {
				return V.id ||= ++qe, ++V.awaits, V.echoes += Ce, V.id;
			}
			function $e() {
				return !!V.awaits && (--V.awaits == 0 && (V.id = 0), V.echoes = V.awaits * Ce, !0);
			}
			function et(e) {
				return V.echoes && e && e.constructor === we ? (Qe(), e.then(function(e) {
					return $e(), e;
				}, function(e) {
					return $e(), U(e);
				})) : e;
			}
			function tt() {
				var e = Je[Je.length - 1];
				Je.pop(), nt(e, !1);
			}
			function nt(e, t) {
				var n, i = R;
				(t ? !V.echoes || Ye++ && e === R : !Ye || --Ye && e === R) || queueMicrotask(t ? (function(e) {
					++Xe, V.echoes && --V.echoes != 0 || (V.echoes = V.awaits = V.id = 0), Je.push(R), nt(e, !0);
				}).bind(null, e) : tt), e !== R && (R = e, i === Me && (Me.env = rt()), Te && (n = Me.env.Promise, t = e.env, (i.global || e.global) && (Object.defineProperty(r, "Promise", t.PromiseProp), n.all = t.all, n.race = t.race, n.resolve = t.resolve, n.reject = t.reject, t.allSettled && (n.allSettled = t.allSettled), t.any && (n.any = t.any))));
			}
			function rt() {
				var e = r.Promise;
				return Te ? {
					Promise: e,
					PromiseProp: Object.getOwnPropertyDescriptor(r, "Promise"),
					all: e.all,
					race: e.race,
					allSettled: e.allSettled,
					any: e.any,
					resolve: e.resolve,
					reject: e.reject
				} : {};
			}
			function it(e, t, n, r, i) {
				var a = R;
				try {
					return nt(e, !0), t(n, r, i);
				} finally {
					nt(a, !1);
				}
			}
			function at(e, t, n, r) {
				return typeof e == "function" ? function() {
					var i = R;
					n && Qe(), nt(t, !0);
					try {
						return e.apply(this, arguments);
					} finally {
						nt(i, !1), r && queueMicrotask($e);
					}
				} : e;
			}
			function ot(e) {
				Promise === we && V.echoes === 0 ? Ye === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
			}
			("" + N).indexOf("[native code]") === -1 && (Qe = $e = L);
			var U = z.reject, st = "￿", ct = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", lt = "String expected.", ut = [], dt = "__dbnames", W = "readonly", ft = "readwrite";
			function pt(e, t) {
				return e ? t ? function() {
					return e.apply(this, arguments) && t.apply(this, arguments);
				} : e : t;
			}
			var mt = {
				type: 3,
				lower: -Infinity,
				lowerOpen: !1,
				upper: [[]],
				upperOpen: !1
			};
			function ht(e) {
				return typeof e != "string" || /\./.test(e) ? function(e) {
					return e;
				} : function(t) {
					return t[e] === void 0 && e in t && delete (t = E(t))[e], t;
				};
			}
			function gt() {
				throw I.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
			}
			function G(e, t) {
				try {
					var n = _t(e), r = _t(t);
					if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r === "Date" ? -1 : NaN;
					switch (n) {
						case "number":
						case "Date":
						case "string": return t < e ? 1 : e < t ? -1 : 0;
						case "binary": return (function(e, t) {
							for (var n = e.length, r = t.length, i = n < r ? n : r, a = 0; a < i; ++a) if (e[a] !== t[a]) return e[a] < t[a] ? -1 : 1;
							return n === r ? 0 : n < r ? -1 : 1;
						})(vt(e), vt(t));
						case "Array": return (function(e, t) {
							for (var n = e.length, r = t.length, i = n < r ? n : r, a = 0; a < i; ++a) {
								var o = G(e[a], t[a]);
								if (o !== 0) return o;
							}
							return n === r ? 0 : n < r ? -1 : 1;
						})(e, t);
					}
				} catch {}
				return NaN;
			}
			function _t(e) {
				var t = typeof e;
				return t == "object" ? ArrayBuffer.isView(e) ? "binary" : (e = D(e), e === "ArrayBuffer" ? "binary" : e) : t;
			}
			function vt(e) {
				return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
			}
			function yt(e, t, n) {
				var r = e.schema.yProps;
				return r ? (t && 0 < n.numFailures && (t = t.filter(function(e, t) {
					return !n.failures[t];
				})), Promise.all(r.map(function(n) {
					return n = n.updatesTable, t ? e.db.table(n).where("k").anyOf(t).delete() : e.db.table(n).clear();
				})).then(function() {
					return n;
				})) : n;
			}
			var bt = (K.prototype._trans = function(e, t, n) {
				var r = this._tx || R.trans, i = this.name, a = be && typeof console < "u" && console.createTask && console.createTask(`Dexie: ${e === "readonly" ? "read" : "write"} ${this.name}`);
				function o(e, n, r) {
					if (!r.schema[i]) throw new I.NotFound("Table " + i + " not part of transaction");
					return t(r.idbtrans, r);
				}
				var s = Ue();
				try {
					var c = r && r.db._novip === this.db._novip ? r === R.trans ? r._promise(e, o, n) : H(function() {
						return r._promise(e, o, n);
					}, {
						trans: r,
						transless: R.transless || R
					}) : (function e(t, n, r, i) {
						if (t.idbdb && (t._state.openComplete || R.letThrough || t._vip)) {
							var a = t._createTransaction(n, r, t._dbSchema);
							try {
								a.create(), t._state.PR1398_maxLoop = 3;
							} catch (a) {
								return a.name === le.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
									return e(t, n, r, i);
								})) : U(a);
							}
							return a._promise(n, function(e, t) {
								return H(function() {
									return R.trans = a, i(e, t, a);
								});
							}).then(function(e) {
								if (n === "readwrite") try {
									a.idbtrans.commit();
								} catch {}
								return n === "readonly" ? e : a._completion.then(function() {
									return e;
								});
							});
						}
						if (t._state.openComplete) return U(new I.DatabaseClosed(t._state.dbOpenError));
						if (!t._state.isBeingOpened) {
							if (!t._state.autoOpen) return U(new I.DatabaseClosed());
							t.open().catch(L);
						}
						return t._state.dbReadyPromise.then(function() {
							return e(t, n, r, i);
						});
					})(this.db, e, [this.name], o);
					return a && (c._consoleTask = a, c = c.catch(function(e) {
						return console.trace(e), U(e);
					})), c;
				} finally {
					s && We();
				}
			}, K.prototype.get = function(e, t) {
				var n = this;
				return e && e.constructor === Object ? this.where(e).first(t) : e == null ? U(new I.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(t) {
					return n.core.get({
						trans: t,
						key: e
					}).then(function(e) {
						return n.hook.reading.fire(e);
					});
				}).then(t);
			}, K.prototype.where = function(e) {
				if (typeof e == "string") return new this.db.WhereClause(this, e);
				if (a(e)) return new this.db.WhereClause(this, `[${e.join("+")}]`);
				var t = i(e);
				if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
				var n = this.schema.indexes.concat(this.schema.primKey).filter(function(e) {
					if (e.compound && t.every(function(t) {
						return 0 <= e.keyPath.indexOf(t);
					})) {
						for (var n = 0; n < t.length; ++n) if (t.indexOf(e.keyPath[n]) === -1) return !1;
						return !0;
					}
					return !1;
				}).sort(function(e, t) {
					return e.keyPath.length - t.keyPath.length;
				})[0];
				if (n && this.db._maxKey !== st) {
					var r = n.keyPath.slice(0, t.length);
					return this.where(r).equals(r.map(function(t) {
						return e[t];
					}));
				}
				!n && be && console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit from a compound index [${t.join("+")}]`);
				var o = this.schema.idxByName;
				function s(e, t) {
					return G(e, t) === 0;
				}
				var c = t.reduce(function(t, n) {
					var r = t[0], i = t[1], t = o[n], c = e[n];
					return [r || t, r || !t ? pt(i, t && t.multi ? function(e) {
						return e = b(e, n), a(e) && e.some(function(e) {
							return s(c, e);
						});
					} : function(e) {
						return s(c, b(e, n));
					}) : i];
				}, [null, null]), r = c[0], c = c[1];
				return r ? this.where(r.name).equals(e[r.keyPath]).filter(c) : n ? this.filter(c) : this.where(t).equals("");
			}, K.prototype.filter = function(e) {
				return this.toCollection().and(e);
			}, K.prototype.count = function(e) {
				return this.toCollection().count(e);
			}, K.prototype.offset = function(e) {
				return this.toCollection().offset(e);
			}, K.prototype.limit = function(e) {
				return this.toCollection().limit(e);
			}, K.prototype.each = function(e) {
				return this.toCollection().each(e);
			}, K.prototype.toArray = function(e) {
				return this.toCollection().toArray(e);
			}, K.prototype.toCollection = function() {
				return new this.db.Collection(new this.db.WhereClause(this));
			}, K.prototype.orderBy = function(e) {
				return new this.db.Collection(new this.db.WhereClause(this, a(e) ? `[${e.join("+")}]` : e));
			}, K.prototype.reverse = function() {
				return this.toCollection().reverse();
			}, K.prototype.mapToClass = function(t) {
				var n, r = this.db, i = this.name;
				function a() {
					return n !== null && n.apply(this, arguments) || this;
				}
				(this.schema.mappedClass = t).prototype instanceof gt && ((function(t, n) {
					if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
					function r() {
						this.constructor = t;
					}
					e(t, n), t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
				})(a, n = t), Object.defineProperty(a.prototype, "db", {
					get: function() {
						return r;
					},
					enumerable: !1,
					configurable: !0
				}), a.prototype.table = function() {
					return i;
				}, t = a);
				for (var o = /* @__PURE__ */ new Set(), c = t.prototype; c; c = s(c)) Object.getOwnPropertyNames(c).forEach(function(e) {
					return o.add(e);
				});
				function l(e) {
					if (!e) return e;
					var n, r = Object.create(t.prototype);
					for (n in e) if (!o.has(n)) try {
						r[n] = e[n];
					} catch {}
					return r;
				}
				return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = l, this.hook("reading", l), t;
			}, K.prototype.defineClass = function() {
				return this.mapToClass(function(e) {
					o(this, e);
				});
			}, K.prototype.add = function(e, t) {
				var n = this, r = this.schema.primKey, i = r.auto, a = r.keyPath, o = e;
				return a && i && (o = ht(a)(e)), this._trans("readwrite", function(e) {
					return n.core.mutate({
						trans: e,
						type: "add",
						keys: t == null ? null : [t],
						values: [o]
					});
				}).then(function(e) {
					return e.numFailures ? z.reject(e.failures[0]) : e.lastResult;
				}).then(function(t) {
					if (a) try {
						x(e, a, t);
					} catch {}
					return t;
				});
			}, K.prototype.update = function(e, t) {
				return typeof e != "object" || a(e) ? this.where(":id").equals(e).modify(t) : (e = b(e, this.schema.primKey.keyPath), e === void 0 ? U(new I.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
			}, K.prototype.put = function(e, t) {
				var n = this, r = this.schema.primKey, i = r.auto, a = r.keyPath, o = e;
				return a && i && (o = ht(a)(e)), this._trans("readwrite", function(e) {
					return n.core.mutate({
						trans: e,
						type: "put",
						values: [o],
						keys: t == null ? null : [t]
					});
				}).then(function(e) {
					return e.numFailures ? z.reject(e.failures[0]) : e.lastResult;
				}).then(function(t) {
					if (a) try {
						x(e, a, t);
					} catch {}
					return t;
				});
			}, K.prototype.delete = function(e) {
				var t = this;
				return this._trans("readwrite", function(n) {
					return t.core.mutate({
						trans: n,
						type: "delete",
						keys: [e]
					}).then(function(n) {
						return yt(t, [e], n);
					}).then(function(e) {
						return e.numFailures ? z.reject(e.failures[0]) : void 0;
					});
				});
			}, K.prototype.clear = function() {
				var e = this;
				return this._trans("readwrite", function(t) {
					return e.core.mutate({
						trans: t,
						type: "deleteRange",
						range: mt
					}).then(function(t) {
						return yt(e, null, t);
					});
				}).then(function(e) {
					return e.numFailures ? z.reject(e.failures[0]) : void 0;
				});
			}, K.prototype.bulkGet = function(e) {
				var t = this;
				return this._trans("readonly", function(n) {
					return t.core.getMany({
						keys: e,
						trans: n
					}).then(function(e) {
						return e.map(function(e) {
							return t.hook.reading.fire(e);
						});
					});
				});
			}, K.prototype.bulkAdd = function(e, t, n) {
				var r = this, i = Array.isArray(t) ? t : void 0, a = (n ||= i ? void 0 : t) ? n.allKeys : void 0;
				return this._trans("readwrite", function(t) {
					var n = r.schema.primKey, o = n.auto, n = n.keyPath;
					if (n && i) throw new I.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
					if (i && i.length !== e.length) throw new I.InvalidArgument("Arguments objects and keys must have the same length");
					var s = e.length, n = n && o ? e.map(ht(n)) : e;
					return r.core.mutate({
						trans: t,
						type: "add",
						keys: i,
						values: n,
						wantResults: a
					}).then(function(e) {
						var t = e.numFailures, n = e.results, i = e.lastResult, e = e.failures;
						if (t === 0) return a ? n : i;
						throw new ce(`${r.name}.bulkAdd(): ${t} of ${s} operations failed`, e);
					});
				});
			}, K.prototype.bulkPut = function(e, t, n) {
				var r = this, i = Array.isArray(t) ? t : void 0, a = (n ||= i ? void 0 : t) ? n.allKeys : void 0;
				return this._trans("readwrite", function(t) {
					var n = r.schema.primKey, o = n.auto, n = n.keyPath;
					if (n && i) throw new I.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
					if (i && i.length !== e.length) throw new I.InvalidArgument("Arguments objects and keys must have the same length");
					var s = e.length, n = n && o ? e.map(ht(n)) : e;
					return r.core.mutate({
						trans: t,
						type: "put",
						keys: i,
						values: n,
						wantResults: a
					}).then(function(e) {
						var t = e.numFailures, n = e.results, i = e.lastResult, e = e.failures;
						if (t === 0) return a ? n : i;
						throw new ce(`${r.name}.bulkPut(): ${t} of ${s} operations failed`, e);
					});
				});
			}, K.prototype.bulkUpdate = function(e) {
				var t = this, n = this.core, r = e.map(function(e) {
					return e.key;
				}), i = e.map(function(e) {
					return e.changes;
				}), a = [];
				return this._trans("readwrite", function(o) {
					return n.getMany({
						trans: o,
						keys: r,
						cache: "clone"
					}).then(function(s) {
						var c = [], l = [];
						e.forEach(function(e, n) {
							var r = e.key, i = e.changes, o = s[n];
							if (o) {
								for (var u = 0, d = Object.keys(i); u < d.length; u++) {
									var f = d[u], p = i[f];
									if (f === t.schema.primKey.keyPath) {
										if (G(p, r) !== 0) throw new I.Constraint("Cannot update primary key in bulkUpdate()");
									} else x(o, f, p);
								}
								a.push(n), c.push(r), l.push(o);
							}
						});
						var u = c.length;
						return n.mutate({
							trans: o,
							type: "put",
							keys: c,
							values: l,
							updates: {
								keys: r,
								changeSpecs: i
							}
						}).then(function(e) {
							var n = e.numFailures, r = e.failures;
							if (n === 0) return u;
							for (var i = 0, o = Object.keys(r); i < o.length; i++) {
								var s, c = o[i], l = a[Number(c)];
								l != null && (s = r[c], delete r[c], r[l] = s);
							}
							throw new ce(`${t.name}.bulkUpdate(): ${n} of ${u} operations failed`, r);
						});
					});
				});
			}, K.prototype.bulkDelete = function(e) {
				var t = this, n = e.length;
				return this._trans("readwrite", function(n) {
					return t.core.mutate({
						trans: n,
						type: "delete",
						keys: e
					}).then(function(n) {
						return yt(t, e, n);
					});
				}).then(function(e) {
					var r = e.numFailures, i = e.lastResult, e = e.failures;
					if (r === 0) return i;
					throw new ce(`${t.name}.bulkDelete(): ${r} of ${n} operations failed`, e);
				});
			}, K);
			function K() {}
			function xt(e) {
				function t(t, r) {
					if (r) {
						for (var i = arguments.length, a = Array(i - 1); --i;) a[i - 1] = arguments[i];
						return n[t].subscribe.apply(null, a), e;
					}
					if (typeof t == "string") return n[t];
				}
				var n = {};
				t.addEventType = s;
				for (var r = 1, o = arguments.length; r < o; ++r) s(arguments[r]);
				return t;
				function s(e, r, o) {
					if (typeof e != "object") {
						var c;
						r ||= ve;
						var l = {
							subscribers: [],
							fire: o ||= L,
							subscribe: function(e) {
								l.subscribers.indexOf(e) === -1 && (l.subscribers.push(e), l.fire = r(l.fire, e));
							},
							unsubscribe: function(e) {
								l.subscribers = l.subscribers.filter(function(t) {
									return t !== e;
								}), l.fire = l.subscribers.reduce(r, o);
							}
						};
						return n[e] = t[e] = l;
					}
					i(c = e).forEach(function(e) {
						var t = c[e];
						if (a(t)) s(e, c[e][0], c[e][1]);
						else {
							if (t !== "asap") throw new I.InvalidArgument("Invalid event config");
							var n = s(e, fe, function() {
								for (var e = arguments.length, t = Array(e); e--;) t[e] = arguments[e];
								n.subscribers.forEach(function(e) {
									y(function() {
										e.apply(null, t);
									});
								});
							});
						}
					});
				}
			}
			function St(e, t) {
				return p(t).from({ prototype: e }), t;
			}
			function Ct(e, t) {
				return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
			}
			function wt(e, t) {
				e.filter = pt(e.filter, t);
			}
			function Tt(e, t, n) {
				var r = e.replayFilter;
				e.replayFilter = r ? function() {
					return pt(r(), t());
				} : t, e.justLimit = n && !r;
			}
			function Et(e, t) {
				if (e.isPrimKey) return t.primaryKey;
				var n = t.getIndexByKeyPath(e.index);
				if (!n) throw new I.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
				return n;
			}
			function Dt(e, t, n) {
				var r = Et(e, t.schema);
				return t.openCursor({
					trans: n,
					values: !e.keysOnly,
					reverse: e.dir === "prev",
					unique: !!e.unique,
					query: {
						index: r,
						range: e.range
					}
				});
			}
			function Ot(e, t, n, r) {
				var i = e.replayFilter ? pt(e.filter, e.replayFilter()) : e.filter;
				if (e.or) {
					var a = {}, o = function(e, n, r) {
						var o, s;
						i && !i(n, r, function(e) {
							return n.stop(e);
						}, function(e) {
							return n.fail(e);
						}) || ((s = "" + (o = n.primaryKey)) == "[object ArrayBuffer]" && (s = "" + new Uint8Array(o)), l(a, s) || (a[s] = !0, t(e, n, r)));
					};
					return Promise.all([e.or._iterate(o, n), kt(Dt(e, r, n), e.algorithm, o, !e.keysOnly && e.valueMapper)]);
				}
				return kt(Dt(e, r, n), pt(e.algorithm, i), t, !e.keysOnly && e.valueMapper);
			}
			function kt(e, t, n, r) {
				var i = B(r ? function(e, t, i) {
					return n(r(e), t, i);
				} : n);
				return e.then(function(e) {
					if (e) return e.start(function() {
						var n = function() {
							return e.continue();
						};
						t && !t(e, function(e) {
							return n = e;
						}, function(t) {
							e.stop(t), n = L;
						}, function(t) {
							e.fail(t), n = L;
						}) || i(e.value, e, function(e) {
							return n = e;
						}), n();
					});
				});
			}
			var At = (jt.prototype.execute = function(e) {
				var t = this["@@propmod"];
				if (t.add !== void 0) {
					var r = t.add;
					if (a(r)) return n(n([], a(e) ? e : [], !0), r).sort();
					if (typeof r == "number") return (Number(e) || 0) + r;
					if (typeof r == "bigint") try {
						return BigInt(e) + r;
					} catch {
						return BigInt(0) + r;
					}
					throw TypeError(`Invalid term ${r}`);
				}
				if (t.remove !== void 0) {
					var i = t.remove;
					if (a(i)) return a(e) ? e.filter(function(e) {
						return !i.includes(e);
					}).sort() : [];
					if (typeof i == "number") return Number(e) - i;
					if (typeof i == "bigint") try {
						return BigInt(e) - i;
					} catch {
						return BigInt(0) - i;
					}
					throw TypeError(`Invalid subtrahend ${i}`);
				}
				return r = (r = t.replacePrefix)?.[0], r && typeof e == "string" && e.startsWith(r) ? t.replacePrefix[1] + e.substring(r.length) : e;
			}, jt);
			function jt(e) {
				this["@@propmod"] = e;
			}
			var Mt = (q.prototype._read = function(e, t) {
				var n = this._ctx;
				return n.error ? n.table._trans(null, U.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
			}, q.prototype._write = function(e) {
				var t = this._ctx;
				return t.error ? t.table._trans(null, U.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
			}, q.prototype._addAlgorithm = function(e) {
				var t = this._ctx;
				t.algorithm = pt(t.algorithm, e);
			}, q.prototype._iterate = function(e, t) {
				return Ot(this._ctx, e, t, this._ctx.table.core);
			}, q.prototype.clone = function(e) {
				var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
				return e && o(n, e), t._ctx = n, t;
			}, q.prototype.raw = function() {
				return this._ctx.valueMapper = null, this;
			}, q.prototype.each = function(e) {
				var t = this._ctx;
				return this._read(function(n) {
					return Ot(t, e, n, t.table.core);
				});
			}, q.prototype.count = function(e) {
				var t = this;
				return this._read(function(e) {
					var n = t._ctx, r = n.table.core;
					if (Ct(n, !0)) return r.count({
						trans: e,
						query: {
							index: Et(n, r.schema),
							range: n.range
						}
					}).then(function(e) {
						return Math.min(e, n.limit);
					});
					var i = 0;
					return Ot(n, function() {
						return ++i, !1;
					}, e, r).then(function() {
						return i;
					});
				}).then(e);
			}, q.prototype.sortBy = function(e, t) {
				var n = e.split(".").reverse(), r = n[0], i = n.length - 1;
				function a(e, t) {
					return t ? a(e[n[t]], t - 1) : e[r];
				}
				var o = this._ctx.dir === "next" ? 1 : -1;
				function s(e, t) {
					return G(a(e, i), a(t, i)) * o;
				}
				return this.toArray(function(e) {
					return e.sort(s);
				}).then(t);
			}, q.prototype.toArray = function(e) {
				var t = this;
				return this._read(function(e) {
					var n = t._ctx;
					if (n.dir === "next" && Ct(n, !0) && 0 < n.limit) {
						var r = n.valueMapper, i = Et(n, n.table.core.schema);
						return n.table.core.query({
							trans: e,
							limit: n.limit,
							values: !0,
							query: {
								index: i,
								range: n.range
							}
						}).then(function(e) {
							return e = e.result, r ? e.map(r) : e;
						});
					}
					var a = [];
					return Ot(n, function(e) {
						return a.push(e);
					}, e, n.table.core).then(function() {
						return a;
					});
				}, e);
			}, q.prototype.offset = function(e) {
				var t = this._ctx;
				return e <= 0 || (t.offset += e, Ct(t) ? Tt(t, function() {
					var t = e;
					return function(e, n) {
						return t === 0 || (t === 1 ? --t : n(function() {
							e.advance(t), t = 0;
						}), !1);
					};
				}) : Tt(t, function() {
					var t = e;
					return function() {
						return --t < 0;
					};
				})), this;
			}, q.prototype.limit = function(e) {
				return this._ctx.limit = Math.min(this._ctx.limit, e), Tt(this._ctx, function() {
					var t = e;
					return function(e, n, r) {
						return --t <= 0 && n(r), 0 <= t;
					};
				}, !0), this;
			}, q.prototype.until = function(e, t) {
				return wt(this._ctx, function(n, r, i) {
					return !e(n.value) || (r(i), t);
				}), this;
			}, q.prototype.first = function(e) {
				return this.limit(1).toArray(function(e) {
					return e[0];
				}).then(e);
			}, q.prototype.last = function(e) {
				return this.reverse().first(e);
			}, q.prototype.filter = function(e) {
				var t;
				return wt(this._ctx, function(t) {
					return e(t.value);
				}), (t = this._ctx).isMatch = pt(t.isMatch, e), this;
			}, q.prototype.and = function(e) {
				return this.filter(e);
			}, q.prototype.or = function(e) {
				return new this.db.WhereClause(this._ctx.table, e, this);
			}, q.prototype.reverse = function() {
				return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
			}, q.prototype.desc = function() {
				return this.reverse();
			}, q.prototype.eachKey = function(e) {
				var t = this._ctx;
				return t.keysOnly = !t.isMatch, this.each(function(t, n) {
					e(n.key, n);
				});
			}, q.prototype.eachUniqueKey = function(e) {
				return this._ctx.unique = "unique", this.eachKey(e);
			}, q.prototype.eachPrimaryKey = function(e) {
				var t = this._ctx;
				return t.keysOnly = !t.isMatch, this.each(function(t, n) {
					e(n.primaryKey, n);
				});
			}, q.prototype.keys = function(e) {
				var t = this._ctx;
				t.keysOnly = !t.isMatch;
				var n = [];
				return this.each(function(e, t) {
					n.push(t.key);
				}).then(function() {
					return n;
				}).then(e);
			}, q.prototype.primaryKeys = function(e) {
				var t = this._ctx;
				if (t.dir === "next" && Ct(t, !0) && 0 < t.limit) return this._read(function(e) {
					var n = Et(t, t.table.core.schema);
					return t.table.core.query({
						trans: e,
						values: !1,
						limit: t.limit,
						query: {
							index: n,
							range: t.range
						}
					});
				}).then(function(e) {
					return e.result;
				}).then(e);
				t.keysOnly = !t.isMatch;
				var n = [];
				return this.each(function(e, t) {
					n.push(t.primaryKey);
				}).then(function() {
					return n;
				}).then(e);
			}, q.prototype.uniqueKeys = function(e) {
				return this._ctx.unique = "unique", this.keys(e);
			}, q.prototype.firstKey = function(e) {
				return this.limit(1).keys(function(e) {
					return e[0];
				}).then(e);
			}, q.prototype.lastKey = function(e) {
				return this.reverse().firstKey(e);
			}, q.prototype.distinct = function() {
				var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
				if (!e || !e.multi) return this;
				var t = {};
				return wt(this._ctx, function(e) {
					var n = e.primaryKey.toString(), e = l(t, n);
					return t[n] = !0, !e;
				}), this;
			}, q.prototype.modify = function(e) {
				var t = this, n = this._ctx;
				return this._write(function(r) {
					var a, o, s = typeof e == "function" ? e : (a = i(e), o = a.length, function(t) {
						for (var n = !1, r = 0; r < o; ++r) {
							var i = a[r], s = e[i], c = b(t, i);
							s instanceof At ? (x(t, i, s.execute(c)), n = !0) : c !== s && (x(t, i, s), n = !0);
						}
						return n;
					}), c = n.table.core, l = c.schema.primaryKey, u = l.outbound, d = l.extractKey, f = 200, l = t.db._options.modifyChunkSize;
					l && (f = typeof l == "object" ? l[c.name] || l["*"] || 200 : l);
					function p(e, t) {
						var n = t.failures, t = t.numFailures;
						h += e - t;
						for (var r = 0, a = i(n); r < a.length; r++) {
							var o = a[r];
							m.push(n[o]);
						}
					}
					var m = [], h = 0, g = [], _ = e === Nt;
					return t.clone().primaryKeys().then(function(t) {
						function i(o) {
							var l = Math.min(f, t.length - o), m = t.slice(o, o + l);
							return (_ ? Promise.resolve([]) : c.getMany({
								trans: r,
								keys: m,
								cache: "immutable"
							})).then(function(h) {
								var g = [], v = [], y = u ? [] : null, b = _ ? m : [];
								if (!_) for (var x = 0; x < l; ++x) {
									var ee = h[x], S = {
										value: E(ee),
										primKey: t[o + x]
									};
									s.call(S, S.value, S) !== !1 && (S.value == null ? b.push(t[o + x]) : u || G(d(ee), d(S.value)) === 0 ? (v.push(S.value), u && y.push(t[o + x])) : (b.push(t[o + x]), g.push(S.value)));
								}
								return Promise.resolve(0 < g.length && c.mutate({
									trans: r,
									type: "add",
									values: g
								}).then(function(e) {
									for (var t in e.failures) b.splice(parseInt(t), 1);
									p(g.length, e);
								})).then(function() {
									return (0 < v.length || a && typeof e == "object") && c.mutate({
										trans: r,
										type: "put",
										keys: y,
										values: v,
										criteria: a,
										changeSpec: typeof e != "function" && e,
										isAdditionalChunk: 0 < o
									}).then(function(e) {
										return p(v.length, e);
									});
								}).then(function() {
									return (0 < b.length || a && _) && c.mutate({
										trans: r,
										type: "delete",
										keys: b,
										criteria: a,
										isAdditionalChunk: 0 < o
									}).then(function(e) {
										return yt(n.table, b, e);
									}).then(function(e) {
										return p(b.length, e);
									});
								}).then(function() {
									return t.length > o + l && i(o + f);
								});
							});
						}
						var a = Ct(n) && n.limit === Infinity && (typeof e != "function" || _) && {
							index: n.index,
							range: n.range
						};
						return i(0).then(function() {
							if (0 < m.length) throw new se("Error modifying one or more objects", m, h, g);
							return t.length;
						});
					});
				});
			}, q.prototype.delete = function() {
				var e = this._ctx, t = e.range;
				return !Ct(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(Nt) : this._write(function(n) {
					var r = e.table.core.schema.primaryKey, i = t;
					return e.table.core.count({
						trans: n,
						query: {
							index: r,
							range: i
						}
					}).then(function(t) {
						return e.table.core.mutate({
							trans: n,
							type: "deleteRange",
							range: i
						}).then(function(e) {
							var n = e.failures, e = e.numFailures;
							if (e) throw new se("Could not delete some values", Object.keys(n).map(function(e) {
								return n[e];
							}), t - e);
							return t - e;
						});
					});
				});
			}, q);
			function q() {}
			var Nt = function(e, t) {
				return t.value = null;
			};
			function Pt(e, t) {
				return e < t ? -1 : e === t ? 0 : 1;
			}
			function Ft(e, t) {
				return t < e ? -1 : e === t ? 0 : 1;
			}
			function J(e, t, n) {
				return e = e instanceof Bt ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
			}
			function It(e) {
				return new e.Collection(e, function() {
					return zt("");
				}).limit(0);
			}
			function Lt(e, t, n, r) {
				var i, a, o, s, c, l, u, d = n.length;
				if (!n.every(function(e) {
					return typeof e == "string";
				})) return J(e, lt);
				function f(e) {
					i = e === "next" ? function(e) {
						return e.toUpperCase();
					} : function(e) {
						return e.toLowerCase();
					}, a = e === "next" ? function(e) {
						return e.toLowerCase();
					} : function(e) {
						return e.toUpperCase();
					}, o = e === "next" ? Pt : Ft;
					var t = n.map(function(e) {
						return {
							lower: a(e),
							upper: i(e)
						};
					}).sort(function(e, t) {
						return o(e.lower, t.lower);
					});
					s = t.map(function(e) {
						return e.upper;
					}), c = t.map(function(e) {
						return e.lower;
					}), u = (l = e) === "next" ? "" : r;
				}
				f("next"), e = new e.Collection(e, function() {
					return Rt(s[0], c[d - 1] + r);
				}), e._ondirectionchange = function(e) {
					f(e);
				};
				var p = 0;
				return e._addAlgorithm(function(e, n, r) {
					var i = e.key;
					if (typeof i != "string") return !1;
					var f = a(i);
					if (t(f, c, p)) return !0;
					for (var m = null, h = p; h < d; ++h) {
						var g = (function(e, t, n, r, i, a) {
							for (var o = Math.min(e.length, r.length), s = -1, c = 0; c < o; ++c) {
								var l = t[c];
								if (l !== r[c]) return i(e[c], n[c]) < 0 ? e.substr(0, c) + n[c] + n.substr(c + 1) : i(e[c], r[c]) < 0 ? e.substr(0, c) + r[c] + n.substr(c + 1) : 0 <= s ? e.substr(0, s) + t[s] + n.substr(s + 1) : null;
								i(e[c], l) < 0 && (s = c);
							}
							return o < r.length && a === "next" ? e + n.substr(e.length) : o < e.length && a === "prev" ? e.substr(0, n.length) : s < 0 ? null : e.substr(0, s) + r[s] + n.substr(s + 1);
						})(i, f, s[h], c[h], o, l);
						g === null && m === null ? p = h + 1 : (m === null || 0 < o(m, g)) && (m = g);
					}
					return n(m === null ? r : function() {
						e.continue(m + u);
					}), !1;
				}), e;
			}
			function Rt(e, t, n, r) {
				return {
					type: 2,
					lower: e,
					upper: t,
					lowerOpen: n,
					upperOpen: r
				};
			}
			function zt(e) {
				return {
					type: 1,
					lower: e,
					upper: e
				};
			}
			var Bt = (Object.defineProperty(Y.prototype, "Collection", {
				get: function() {
					return this._ctx.table.db.Collection;
				},
				enumerable: !1,
				configurable: !0
			}), Y.prototype.between = function(e, t, n, r) {
				n = n !== !1, r = r === !0;
				try {
					return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? It(this) : new this.Collection(this, function() {
						return Rt(e, t, !n, !r);
					});
				} catch {
					return J(this, ct);
				}
			}, Y.prototype.equals = function(e) {
				return e == null ? J(this, ct) : new this.Collection(this, function() {
					return zt(e);
				});
			}, Y.prototype.above = function(e) {
				return e == null ? J(this, ct) : new this.Collection(this, function() {
					return Rt(e, void 0, !0);
				});
			}, Y.prototype.aboveOrEqual = function(e) {
				return e == null ? J(this, ct) : new this.Collection(this, function() {
					return Rt(e, void 0, !1);
				});
			}, Y.prototype.below = function(e) {
				return e == null ? J(this, ct) : new this.Collection(this, function() {
					return Rt(void 0, e, !1, !0);
				});
			}, Y.prototype.belowOrEqual = function(e) {
				return e == null ? J(this, ct) : new this.Collection(this, function() {
					return Rt(void 0, e);
				});
			}, Y.prototype.startsWith = function(e) {
				return typeof e == "string" ? this.between(e, e + st, !0, !0) : J(this, lt);
			}, Y.prototype.startsWithIgnoreCase = function(e) {
				return e === "" ? this.startsWith(e) : Lt(this, function(e, t) {
					return e.indexOf(t[0]) === 0;
				}, [e], st);
			}, Y.prototype.equalsIgnoreCase = function(e) {
				return Lt(this, function(e, t) {
					return e === t[0];
				}, [e], "");
			}, Y.prototype.anyOfIgnoreCase = function() {
				var e = A.apply(ie, arguments);
				return e.length === 0 ? It(this) : Lt(this, function(e, t) {
					return t.indexOf(e) !== -1;
				}, e, "");
			}, Y.prototype.startsWithAnyOfIgnoreCase = function() {
				var e = A.apply(ie, arguments);
				return e.length === 0 ? It(this) : Lt(this, function(e, t) {
					return t.some(function(t) {
						return e.indexOf(t) === 0;
					});
				}, e, st);
			}, Y.prototype.anyOf = function() {
				var e = this, t = A.apply(ie, arguments), n = this._cmp;
				try {
					t.sort(n);
				} catch {
					return J(this, ct);
				}
				if (t.length === 0) return It(this);
				var r = new this.Collection(this, function() {
					return Rt(t[0], t[t.length - 1]);
				});
				r._ondirectionchange = function(r) {
					n = r === "next" ? e._ascending : e._descending, t.sort(n);
				};
				var i = 0;
				return r._addAlgorithm(function(e, r, a) {
					for (var o = e.key; 0 < n(o, t[i]);) if (++i === t.length) return r(a), !1;
					return n(o, t[i]) === 0 || (r(function() {
						e.continue(t[i]);
					}), !1);
				}), r;
			}, Y.prototype.notEqual = function(e) {
				return this.inAnyRange([[-Infinity, e], [e, this.db._maxKey]], {
					includeLowers: !1,
					includeUppers: !1
				});
			}, Y.prototype.noneOf = function() {
				var e = A.apply(ie, arguments);
				if (e.length === 0) return new this.Collection(this);
				try {
					e.sort(this._ascending);
				} catch {
					return J(this, ct);
				}
				var t = e.reduce(function(e, t) {
					return e ? e.concat([[e[e.length - 1][1], t]]) : [[-Infinity, t]];
				}, null);
				return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, {
					includeLowers: !1,
					includeUppers: !1
				});
			}, Y.prototype.inAnyRange = function(e, t) {
				var n = this, r = this._cmp, i = this._ascending, a = this._descending, o = this._min, s = this._max;
				if (e.length === 0) return It(this);
				if (!e.every(function(e) {
					return e[0] !== void 0 && e[1] !== void 0 && i(e[0], e[1]) <= 0;
				})) return J(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", I.InvalidArgument);
				var c = !t || t.includeLowers !== !1, l = t && t.includeUppers === !0, u, d = i;
				function f(e, t) {
					return d(e[0], t[0]);
				}
				try {
					(u = e.reduce(function(e, t) {
						for (var n = 0, i = e.length; n < i; ++n) {
							var a = e[n];
							if (r(t[0], a[1]) < 0 && 0 < r(t[1], a[0])) {
								a[0] = o(a[0], t[0]), a[1] = s(a[1], t[1]);
								break;
							}
						}
						return n === i && e.push(t), e;
					}, [])).sort(f);
				} catch {
					return J(this, ct);
				}
				var p = 0, m = l ? function(e) {
					return 0 < i(e, u[p][1]);
				} : function(e) {
					return 0 <= i(e, u[p][1]);
				}, h = c ? function(e) {
					return 0 < a(e, u[p][0]);
				} : function(e) {
					return 0 <= a(e, u[p][0]);
				}, g = m, e = new this.Collection(this, function() {
					return Rt(u[0][0], u[u.length - 1][1], !c, !l);
				});
				return e._ondirectionchange = function(e) {
					d = e === "next" ? (g = m, i) : (g = h, a), u.sort(f);
				}, e._addAlgorithm(function(e, t, r) {
					for (var a, o = e.key; g(o);) if (++p === u.length) return t(r), !1;
					return !m(a = o) && !h(a) || (n._cmp(o, u[p][1]) === 0 || n._cmp(o, u[p][0]) === 0 || t(function() {
						d === i ? e.continue(u[p][0]) : e.continue(u[p][1]);
					}), !1);
				}), e;
			}, Y.prototype.startsWithAnyOf = function() {
				var e = A.apply(ie, arguments);
				return e.every(function(e) {
					return typeof e == "string";
				}) ? e.length === 0 ? It(this) : this.inAnyRange(e.map(function(e) {
					return [e, e + st];
				})) : J(this, "startsWithAnyOf() only works with strings");
			}, Y);
			function Y() {}
			function Vt(e) {
				return B(function(t) {
					return Ht(t), e(t.target.error), !1;
				});
			}
			function Ht(e) {
				e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
			}
			var Ut = "storagemutated", Wt = "x-storagemutated-1", Gt = xt(null, Ut), Kt = (qt.prototype._lock = function() {
				return v(!R.global), ++this._reculock, this._reculock !== 1 || R.global || (R.lockOwnerFor = this), this;
			}, qt.prototype._unlock = function() {
				if (v(!R.global), --this._reculock == 0) for (R.global || (R.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked();) {
					var e = this._blockedFuncs.shift();
					try {
						it(e[1], e[0]);
					} catch {}
				}
				return this;
			}, qt.prototype._locked = function() {
				return this._reculock && R.lockOwnerFor !== this;
			}, qt.prototype.create = function(e) {
				var t = this;
				if (!this.mode) return this;
				var n = this.db.idbdb, r = this.db._state.dbOpenError;
				if (v(!this.idbtrans), !e && !n) switch (r && r.name) {
					case "DatabaseClosedError": throw new I.DatabaseClosed(r);
					case "MissingAPIError": throw new I.MissingAPI(r.message, r);
					default: throw new I.OpenFailed(r);
				}
				if (!this.active) throw new I.TransactionInactive();
				return v(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = B(function(n) {
					Ht(n), t._reject(e.error);
				}), e.onabort = B(function(n) {
					Ht(n), t.active && t._reject(new I.Abort(e.error)), t.active = !1, t.on("abort").fire(n);
				}), e.oncomplete = B(function() {
					t.active = !1, t._resolve(), "mutatedParts" in e && Gt.storagemutated.fire(e.mutatedParts);
				}), this;
			}, qt.prototype._promise = function(e, t, n) {
				var r = this;
				if (e === "readwrite" && this.mode !== "readwrite") return U(new I.ReadOnly("Transaction is readonly"));
				if (!this.active) return U(new I.TransactionInactive());
				if (this._locked()) return new z(function(i, a) {
					r._blockedFuncs.push([function() {
						r._promise(e, t, n).then(i, a);
					}, R]);
				});
				if (n) return H(function() {
					var e = new z(function(e, n) {
						r._lock();
						var i = t(e, n, r);
						i && i.then && i.then(e, n);
					});
					return e.finally(function() {
						return r._unlock();
					}), e._lib = !0, e;
				});
				var i = new z(function(e, n) {
					var i = t(e, n, r);
					i && i.then && i.then(e, n);
				});
				return i._lib = !0, i;
			}, qt.prototype._root = function() {
				return this.parent ? this.parent._root() : this;
			}, qt.prototype.waitFor = function(e) {
				var t, n = this._root(), r = z.resolve(e);
				n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
					return r;
				}) : (n._waitingFor = r, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), (function e() {
					for (++n._spinCount; n._waitingQueue.length;) n._waitingQueue.shift()();
					n._waitingFor && (t.get(-Infinity).onsuccess = e);
				})());
				var i = n._waitingFor;
				return new z(function(e, t) {
					r.then(function(t) {
						return n._waitingQueue.push(B(e.bind(null, t)));
					}, function(e) {
						return n._waitingQueue.push(B(t.bind(null, e)));
					}).finally(function() {
						n._waitingFor === i && (n._waitingFor = null);
					});
				});
			}, qt.prototype.abort = function() {
				this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new I.Abort()));
			}, qt.prototype.table = function(e) {
				var t = this._memoizedTables ||= {};
				if (l(t, e)) return t[e];
				var n = this.schema[e];
				if (!n) throw new I.NotFound("Table " + e + " not part of transaction");
				return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), t[e] = n;
			}, qt);
			function qt() {}
			function Jt(e, t, n, r, i, a, o, s) {
				return {
					name: e,
					keyPath: t,
					unique: n,
					multi: r,
					auto: i,
					compound: a,
					src: (n && !o ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + Yt(t),
					type: s
				};
			}
			function Yt(e) {
				return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
			}
			function Xt(e, t, n) {
				return {
					name: e,
					primKey: t,
					indexes: n,
					mappedClass: null,
					idxByName: (r = function(e) {
						return [e.name, e];
					}, n.reduce(function(e, t, n) {
						return n = r(t, n), n && (e[n[0]] = n[1]), e;
					}, {}))
				};
				var r;
			}
			var Zt = function(e) {
				try {
					return e.only([[]]), Zt = function() {
						return [[]];
					}, [[]];
				} catch {
					return Zt = function() {
						return st;
					}, st;
				}
			};
			function Qt(e) {
				return e == null ? function() {} : typeof e == "string" ? (t = e).split(".").length === 1 ? function(e) {
					return e[t];
				} : function(e) {
					return b(e, t);
				} : function(t) {
					return b(t, e);
				};
				var t;
			}
			function $t(e) {
				return [].slice.call(e);
			}
			var en = 0;
			function tn(e) {
				return e == null ? ":id" : typeof e == "string" ? e : `[${e.join("+")}]`;
			}
			function nn(e, t, n) {
				function r(e) {
					if (e.type === 3) return null;
					if (e.type === 4) throw Error("Cannot convert never type to IDBKeyRange");
					var n = e.lower, r = e.upper, i = e.lowerOpen, e = e.upperOpen;
					return n === void 0 ? r === void 0 ? null : t.upperBound(r, !!e) : r === void 0 ? t.lowerBound(n, !!i) : t.bound(n, r, !!i, !!e);
				}
				function i(e) {
					var t, n = e.name;
					return {
						name: n,
						schema: e,
						mutate: function(e) {
							var t = e.trans, i = e.type, a = e.keys, o = e.values, s = e.range;
							return new Promise(function(e, c) {
								e = B(e);
								var l = t.objectStore(n), u = l.keyPath == null, d = i === "put" || i === "add";
								if (!d && i !== "delete" && i !== "deleteRange") throw Error("Invalid operation type: " + i);
								var f, p = (a || o || { length: 1 }).length;
								if (a && o && a.length !== o.length) throw Error("Given keys array must have same length as given values array.");
								if (p === 0) return e({
									numFailures: 0,
									failures: {},
									results: [],
									lastResult: void 0
								});
								function m(e) {
									++_, Ht(e);
								}
								var h = [], g = [], _ = 0;
								if (i === "deleteRange") {
									if (s.type === 4) return e({
										numFailures: _,
										failures: g,
										results: [],
										lastResult: void 0
									});
									s.type === 3 ? h.push(f = l.clear()) : h.push(f = l.delete(r(s)));
								} else {
									var u = d ? u ? [o, a] : [o, null] : [a, null], v = u[0], y = u[1];
									if (d) for (var b = 0; b < p; ++b) h.push(f = y && y[b] !== void 0 ? l[i](v[b], y[b]) : l[i](v[b])), f.onerror = m;
									else for (b = 0; b < p; ++b) h.push(f = l[i](v[b])), f.onerror = m;
								}
								function x(t) {
									t = t.target.result, h.forEach(function(e, t) {
										return e.error != null && (g[t] = e.error);
									}), e({
										numFailures: _,
										failures: g,
										results: i === "delete" ? a : h.map(function(e) {
											return e.result;
										}),
										lastResult: t
									});
								}
								f.onerror = function(e) {
									m(e), x(e);
								}, f.onsuccess = x;
							});
						},
						getMany: function(e) {
							var t = e.trans, r = e.keys;
							return new Promise(function(e, i) {
								e = B(e);
								for (var a, o = t.objectStore(n), s = r.length, c = Array(s), l = 0, u = 0, d = function(t) {
									t = t.target, c[t._pos] = t.result, ++u === l && e(c);
								}, f = Vt(i), p = 0; p < s; ++p) r[p] != null && ((a = o.get(r[p]))._pos = p, a.onsuccess = d, a.onerror = f, ++l);
								l === 0 && e(c);
							});
						},
						get: function(e) {
							var t = e.trans, r = e.key;
							return new Promise(function(e, i) {
								e = B(e);
								var a = t.objectStore(n).get(r);
								a.onsuccess = function(t) {
									return e(t.target.result);
								}, a.onerror = Vt(i);
							});
						},
						query: (t = u, function(e) {
							return new Promise(function(i, a) {
								i = B(i);
								var o, s, c, l = e.trans, u = e.values, d = e.limit, f = e.query, p = d === Infinity ? void 0 : d, m = f.index, f = f.range, l = l.objectStore(n), m = m.isPrimaryKey ? l : l.index(m.name), f = r(f);
								if (d === 0) return i({ result: [] });
								t ? ((p = u ? m.getAll(f, p) : m.getAllKeys(f, p)).onsuccess = function(e) {
									return i({ result: e.target.result });
								}, p.onerror = Vt(a)) : (o = 0, s = !u && "openKeyCursor" in m ? m.openKeyCursor(f) : m.openCursor(f), c = [], s.onsuccess = function(e) {
									var t = s.result;
									return t ? (c.push(u ? t.value : t.primaryKey), ++o === d ? i({ result: c }) : void t.continue()) : i({ result: c });
								}, s.onerror = Vt(a));
							});
						}),
						openCursor: function(e) {
							var t = e.trans, i = e.values, a = e.query, o = e.reverse, s = e.unique;
							return new Promise(function(e, c) {
								e = B(e);
								var l = a.index, u = a.range, d = t.objectStore(n), d = l.isPrimaryKey ? d : d.index(l.name), l = o ? s ? "prevunique" : "prev" : s ? "nextunique" : "next", f = !i && "openKeyCursor" in d ? d.openKeyCursor(r(u), l) : d.openCursor(r(u), l);
								f.onerror = Vt(c), f.onsuccess = B(function(n) {
									var r, i, a, o, s = f.result;
									s ? (s.___id = ++en, s.done = !1, r = s.continue.bind(s), i = (i = s.continuePrimaryKey) && i.bind(s), a = s.advance.bind(s), o = function() {
										throw Error("Cursor not stopped");
									}, s.trans = t, s.stop = s.continue = s.continuePrimaryKey = s.advance = function() {
										throw Error("Cursor not started");
									}, s.fail = B(c), s.next = function() {
										var e = this, t = 1;
										return this.start(function() {
											return t-- ? e.continue() : e.stop();
										}).then(function() {
											return e;
										});
									}, s.start = function(e) {
										function t() {
											if (f.result) try {
												e();
											} catch (e) {
												s.fail(e);
											}
											else s.done = !0, s.start = function() {
												throw Error("Cursor behind last entry");
											}, s.stop();
										}
										var n = new Promise(function(e, t) {
											e = B(e), f.onerror = Vt(t), s.fail = t, s.stop = function(t) {
												s.stop = s.continue = s.continuePrimaryKey = s.advance = o, e(t);
											};
										});
										return f.onsuccess = B(function(e) {
											f.onsuccess = t, t();
										}), s.continue = r, s.continuePrimaryKey = i, s.advance = a, t(), n;
									}, e(s)) : e(null);
								}, c);
							});
						},
						count: function(e) {
							var t = e.query, i = e.trans, a = t.index, o = t.range;
							return new Promise(function(e, t) {
								var s = i.objectStore(n), c = a.isPrimaryKey ? s : s.index(a.name), s = r(o), c = s ? c.count(s) : c.count();
								c.onsuccess = B(function(t) {
									return e(t.target.result);
								}), c.onerror = Vt(t);
							});
						}
					};
				}
				var o, s, c, l = (s = n, c = $t((o = e).objectStoreNames), {
					schema: {
						name: o.name,
						tables: c.map(function(e) {
							return s.objectStore(e);
						}).map(function(e) {
							var t = e.keyPath, n = e.autoIncrement, r = a(t), i = {}, n = {
								name: e.name,
								primaryKey: {
									name: null,
									isPrimaryKey: !0,
									outbound: t == null,
									compound: r,
									keyPath: t,
									autoIncrement: n,
									unique: !0,
									extractKey: Qt(t)
								},
								indexes: $t(e.indexNames).map(function(t) {
									return e.index(t);
								}).map(function(e) {
									var t = e.name, n = e.unique, r = e.multiEntry, e = e.keyPath, r = {
										name: t,
										compound: a(e),
										keyPath: e,
										unique: n,
										multiEntry: r,
										extractKey: Qt(e)
									};
									return i[tn(e)] = r;
								}),
								getIndexByKeyPath: function(e) {
									return i[tn(e)];
								}
							};
							return i[":id"] = n.primaryKey, t != null && (i[tn(t)] = n.primaryKey), n;
						})
					},
					hasGetAll: 0 < c.length && "getAll" in s.objectStore(c[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
				}), n = l.schema, u = l.hasGetAll, l = n.tables.map(i), d = {};
				return l.forEach(function(e) {
					return d[e.name] = e;
				}), {
					stack: "dbcore",
					transaction: e.transaction.bind(e),
					table: function(e) {
						if (!d[e]) throw Error(`Table '${e}' not found`);
						return d[e];
					},
					MIN_KEY: -Infinity,
					MAX_KEY: Zt(t),
					schema: n
				};
			}
			function rn(e, n, r, i) {
				var a = r.IDBKeyRange;
				return r.indexedDB, { dbcore: (i = nn(n, a, i), e.dbcore.reduce(function(e, n) {
					return n = n.create, t(t({}, e), n(e));
				}, i)) };
			}
			function an(e, t) {
				var n = t.db, t = rn(e._middlewares, n, e._deps, t);
				e.core = t.dbcore, e.tables.forEach(function(t) {
					var n = t.name;
					e.core.schema.tables.some(function(e) {
						return e.name === n;
					}) && (t.core = e.core.table(n), e[n] instanceof e.Table && (e[n].core = t.core));
				});
			}
			function on(e, t, n, r) {
				n.forEach(function(n) {
					var i = r[n];
					t.forEach(function(t) {
						var r = (function e(t, n) {
							return m(t, n) || (t = s(t)) && e(t, n);
						})(t, n);
						(!r || "value" in r && r.value === void 0) && (t === e.Transaction.prototype || t instanceof e.Transaction ? f(t, n, {
							get: function() {
								return this.table(n);
							},
							set: function(e) {
								d(this, n, {
									value: e,
									writable: !0,
									configurable: !0,
									enumerable: !0
								});
							}
						}) : t[n] = new e.Table(n, i));
					});
				});
			}
			function sn(e, t) {
				t.forEach(function(t) {
					for (var n in t) t[n] instanceof e.Table && delete t[n];
				});
			}
			function cn(e, t) {
				return e._cfg.version - t._cfg.version;
			}
			function ln(e, t, n, r) {
				var a = e._dbSchema;
				n.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = Xt("$meta", _n("")[0], []), e._storeNames.push("$meta"));
				var o = e._createTransaction("readwrite", e._storeNames, a);
				o.create(n), o._completion.catch(r);
				var s = o._reject.bind(o), c = R.transless || R;
				H(function() {
					return R.trans = o, R.transless = c, t === 0 ? (i(a).forEach(function(e) {
						fn(n, e, a[e].primKey, a[e].indexes);
					}), an(e, n), void z.follow(function() {
						return e.on.populate.fire(o);
					}).catch(s)) : (an(e, n), l = t, ((r = o).storeNames.includes("$meta") ? r.table("$meta").get("version").then(function(e) {
						return e ?? l;
					}) : z.resolve(l)).then(function(t) {
						return a = t, s = o, c = n, l = [], t = (r = e)._versions, u = r._dbSchema = hn(0, r.idbdb, c), (t = t.filter(function(e) {
							return e._cfg.version >= a;
						})).length === 0 ? z.resolve() : (t.forEach(function(e) {
							l.push(function() {
								var t = u, n = e._cfg.dbschema;
								gn(r, t, c), gn(r, n, c), u = r._dbSchema = n;
								var o = dn(t, n);
								o.add.forEach(function(e) {
									fn(c, e[0], e[1].primKey, e[1].indexes);
								}), o.change.forEach(function(e) {
									if (e.recreate) throw new I.Upgrade("Not yet support for changing primary key");
									var t = c.objectStore(e.name);
									e.add.forEach(function(e) {
										return mn(t, e);
									}), e.change.forEach(function(e) {
										t.deleteIndex(e.name), mn(t, e);
									}), e.del.forEach(function(e) {
										return t.deleteIndex(e);
									});
								});
								var l = e._cfg.contentUpgrade;
								if (l && e._cfg.version > a) {
									an(r, c), s._memoizedTables = {};
									var d = ee(n);
									o.del.forEach(function(e) {
										d[e] = t[e];
									}), sn(r, [r.Transaction.prototype]), on(r, [r.Transaction.prototype], i(d), d), s.schema = d;
									var f, p = j(l);
									return p && Qe(), o = z.follow(function() {
										var e;
										(f = l(s)) && p && (e = $e.bind(null, null), f.then(e, e));
									}), f && typeof f.then == "function" ? z.resolve(f) : o.then(function() {
										return f;
									});
								}
							}), l.push(function(t) {
								var n = e._cfg.dbschema, i = t;
								[].slice.call(i.db.objectStoreNames).forEach(function(e) {
									return n[e] == null && i.db.deleteObjectStore(e);
								}), sn(r, [r.Transaction.prototype]), on(r, [r.Transaction.prototype], r._storeNames, r._dbSchema), s.schema = r._dbSchema;
							}), l.push(function(t) {
								r.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(r.idbdb.version / 10) === e._cfg.version ? (r.idbdb.deleteObjectStore("$meta"), delete r._dbSchema.$meta, r._storeNames = r._storeNames.filter(function(e) {
									return e !== "$meta";
								})) : t.objectStore("$meta").put(e._cfg.version, "version"));
							});
						}), (function e() {
							return l.length ? z.resolve(l.shift()(s.idbtrans)).then(e) : z.resolve();
						})().then(function() {
							pn(u, c);
						}));
						var r, a, s, c, l, u;
					}).catch(s));
					var r, l;
				});
			}
			function un(e, t) {
				pn(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
				var n = hn(0, e.idbdb, t);
				gn(e, e._dbSchema, t);
				for (var r = 0, i = dn(n, e._dbSchema).change; r < i.length; r++) {
					var a = (function(e) {
						if (e.change.length || e.recreate) return console.warn(`Unable to patch indexes of table ${e.name} because it has changes on the type of index or primary key.`), { value: void 0 };
						var n = t.objectStore(e.name);
						e.add.forEach(function(t) {
							be && console.debug(`Dexie upgrade patch: Creating missing index ${e.name}.${t.src}`), mn(n, t);
						});
					})(i[r]);
					if (typeof a == "object") return a.value;
				}
			}
			function dn(e, t) {
				var n, r = {
					del: [],
					add: [],
					change: []
				};
				for (n in e) t[n] || r.del.push(n);
				for (n in t) {
					var i = e[n], a = t[n];
					if (i) {
						var o = {
							name: n,
							def: a,
							recreate: !1,
							del: [],
							add: [],
							change: []
						};
						if ("" + (i.primKey.keyPath || "") != "" + (a.primKey.keyPath || "") || i.primKey.auto !== a.primKey.auto) o.recreate = !0, r.change.push(o);
						else {
							var s = i.idxByName, c = a.idxByName, l = void 0;
							for (l in s) c[l] || o.del.push(l);
							for (l in c) {
								var u = s[l], d = c[l];
								u ? u.src !== d.src && o.change.push(d) : o.add.push(d);
							}
							(0 < o.del.length || 0 < o.add.length || 0 < o.change.length) && r.change.push(o);
						}
					} else r.add.push([n, a]);
				}
				return r;
			}
			function fn(e, t, n, r) {
				var i = e.db.createObjectStore(t, n.keyPath ? {
					keyPath: n.keyPath,
					autoIncrement: n.auto
				} : { autoIncrement: n.auto });
				return r.forEach(function(e) {
					return mn(i, e);
				}), i;
			}
			function pn(e, t) {
				i(e).forEach(function(n) {
					t.db.objectStoreNames.contains(n) || (be && console.debug("Dexie: Creating missing table", n), fn(t, n, e[n].primKey, e[n].indexes));
				});
			}
			function mn(e, t) {
				e.createIndex(t.name, t.keyPath, {
					unique: t.unique,
					multiEntry: t.multi
				});
			}
			function hn(e, t, n) {
				var r = {};
				return g(t.objectStoreNames, 0).forEach(function(e) {
					for (var t = n.objectStore(e), i = Jt(Yt(c = t.keyPath), c || "", !0, !1, !!t.autoIncrement, c && typeof c != "string", !0), a = [], o = 0; o < t.indexNames.length; ++o) {
						var s = t.index(t.indexNames[o]), c = s.keyPath, s = Jt(s.name, c, !!s.unique, !!s.multiEntry, !1, c && typeof c != "string", !1);
						a.push(s);
					}
					r[e] = Xt(e, i, a);
				}), r;
			}
			function gn(e, t, n) {
				for (var i = n.db.objectStoreNames, a = 0; a < i.length; ++a) {
					var o = i[a], s = n.objectStore(o);
					e._hasGetAll = "getAll" in s;
					for (var c = 0; c < s.indexNames.length; ++c) {
						var l = s.indexNames[c], u = s.index(l).keyPath, d = typeof u == "string" ? u : "[" + g(u).join("+") + "]";
						!t[o] || (u = t[o].idxByName[d]) && (u.name = l, delete t[o].idxByName[d], t[o].idxByName[l] = u);
					}
				}
				typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && r.WorkerGlobalScope && r instanceof r.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
			}
			function _n(e) {
				return e.split(",").map(function(e, t) {
					var n = e.split(":"), r = (i = n[1])?.trim(), i = (e = n[0].trim()).replace(/([&*]|\+\+)/g, ""), n = /^\[/.test(i) ? i.match(/^\[(.*)\]$/)[1].split("+") : i;
					return Jt(i, n || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), a(n), t === 0, r);
				});
			}
			var vn = (yn.prototype._createTableSchema = Xt, yn.prototype._parseIndexSyntax = _n, yn.prototype._parseStoresSpec = function(e, t) {
				var n = this;
				i(e).forEach(function(r) {
					if (e[r] !== null) {
						var i = n._parseIndexSyntax(e[r]), a = i.shift();
						if (!a) throw new I.Schema("Invalid schema for table " + r + ": " + e[r]);
						if (a.unique = !0, a.multi) throw new I.Schema("Primary key cannot be multiEntry*");
						i.forEach(function(e) {
							if (e.auto) throw new I.Schema("Only primary key can be marked as autoIncrement (++)");
							if (!e.keyPath) throw new I.Schema("Index must have a name and cannot be an empty string");
						}), i = n._createTableSchema(r, a, i), t[r] = i;
					}
				});
			}, yn.prototype.stores = function(e) {
				var t = this.db;
				this._cfg.storesSource = this._cfg.storesSource ? o(this._cfg.storesSource, e) : e;
				var e = t._versions, n = {}, r = {};
				return e.forEach(function(e) {
					o(n, e._cfg.storesSource), r = e._cfg.dbschema = {}, e._parseStoresSpec(n, r);
				}), t._dbSchema = r, sn(t, [
					t._allTables,
					t,
					t.Transaction.prototype
				]), on(t, [
					t._allTables,
					t,
					t.Transaction.prototype,
					this._cfg.tables
				], i(r), r), t._storeNames = i(r), this;
			}, yn.prototype.upgrade = function(e) {
				return this._cfg.contentUpgrade = ye(this._cfg.contentUpgrade || L, e), this;
			}, yn);
			function yn() {}
			function bn(e, t) {
				var n = e._dbNamesDB;
				return n || (n = e._dbNamesDB = new Z(dt, {
					addons: [],
					indexedDB: e,
					IDBKeyRange: t
				})).version(1).stores({ dbnames: "name" }), n.table("dbnames");
			}
			function xn(e) {
				return e && typeof e.databases == "function";
			}
			function Sn(e) {
				return H(function() {
					return R.letThrough = !0, e();
				});
			}
			function Cn(e) {
				return !("from" in e);
			}
			var X = function(e, t) {
				if (!this) {
					var n = new X();
					return e && "d" in e && o(n, e), n;
				}
				o(this, arguments.length ? {
					d: 1,
					from: e,
					to: 1 < arguments.length ? t : e
				} : { d: 0 });
			};
			function wn(e, t, n) {
				var r = G(t, n);
				if (!isNaN(r)) {
					if (0 < r) throw RangeError();
					if (Cn(e)) return o(e, {
						from: t,
						to: n,
						d: 1
					});
					var i = e.l, r = e.r;
					if (G(n, e.from) < 0) return i ? wn(i, t, n) : e.l = {
						from: t,
						to: n,
						d: 1,
						l: null,
						r: null
					}, On(e);
					if (0 < G(t, e.to)) return r ? wn(r, t, n) : e.r = {
						from: t,
						to: n,
						d: 1,
						l: null,
						r: null
					}, On(e);
					G(t, e.from) < 0 && (e.from = t, e.l = null, e.d = r ? r.d + 1 : 1), 0 < G(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, i && !e.l && Tn(e, i), r && n && Tn(e, r);
				}
			}
			function Tn(e, t) {
				Cn(t) || (function e(t, n) {
					var r = n.from, i = n.to, a = n.l, n = n.r;
					wn(t, r, i), a && e(t, a), n && e(t, n);
				})(e, t);
			}
			function En(e, t) {
				var n = Dn(t), r = n.next();
				if (r.done) return !1;
				for (var i = r.value, a = Dn(e), o = a.next(i.from), s = o.value; !r.done && !o.done;) {
					if (G(s.from, i.to) <= 0 && 0 <= G(s.to, i.from)) return !0;
					G(i.from, s.from) < 0 ? i = (r = n.next(s.from)).value : s = (o = a.next(i.from)).value;
				}
				return !1;
			}
			function Dn(e) {
				var t = Cn(e) ? null : {
					s: 0,
					n: e
				};
				return { next: function(e) {
					for (var n = 0 < arguments.length; t;) switch (t.s) {
						case 0: if (t.s = 1, n) for (; t.n.l && G(e, t.n.from) < 0;) t = {
							up: t,
							n: t.n.l,
							s: 1
						};
						else for (; t.n.l;) t = {
							up: t,
							n: t.n.l,
							s: 1
						};
						case 1: if (t.s = 2, !n || G(e, t.n.to) <= 0) return {
							value: t.n,
							done: !1
						};
						case 2: if (t.n.r) {
							t.s = 3, t = {
								up: t,
								n: t.n.r,
								s: 0
							};
							continue;
						}
						case 3: t = t.up;
					}
					return { done: !0 };
				} };
			}
			function On(e) {
				var n, r, i = ((n = e.r)?.d || 0) - ((r = e.l)?.d || 0), a = 1 < i ? "r" : i < -1 ? "l" : "";
				a && (n = a == "r" ? "l" : "r", r = t({}, e), i = e[a], e.from = i.from, e.to = i.to, e[a] = i[a], r[a] = i[n], (e[n] = r).d = kn(r)), e.d = kn(e);
			}
			function kn(e) {
				var t = e.r, e = e.l;
				return (t ? e ? Math.max(t.d, e.d) : t.d : e ? e.d : 0) + 1;
			}
			function An(e, t) {
				return i(t).forEach(function(n) {
					e[n] ? Tn(e[n], t[n]) : e[n] = (function e(t) {
						var n, r, i = {};
						for (n in t) l(t, n) && (r = t[n], i[n] = !r || typeof r != "object" || te.has(r.constructor) ? r : e(r));
						return i;
					})(t[n]);
				}), e;
			}
			function jn(e, t) {
				return e.all || t.all || Object.keys(e).some(function(n) {
					return t[n] && En(t[n], e[n]);
				});
			}
			u(X.prototype, ((N = {
				add: function(e) {
					return Tn(this, e), this;
				},
				addKey: function(e) {
					return wn(this, e, e), this;
				},
				addKeys: function(e) {
					var t = this;
					return e.forEach(function(e) {
						return wn(t, e, e);
					}), this;
				},
				hasKey: function(e) {
					var t = Dn(this).next(e).value;
					return t && G(t.from, e) <= 0 && 0 <= G(t.to, e);
				}
			})[re] = function() {
				return Dn(this);
			}, N));
			var Mn = {}, Nn = {}, Pn = !1;
			function In(e) {
				An(Nn, e), Pn || (Pn = !0, setTimeout(function() {
					Pn = !1, Ln(Nn, !(Nn = {}));
				}, 0));
			}
			function Ln(e, t) {
				t === void 0 && (t = !1);
				var n = /* @__PURE__ */ new Set();
				if (e.all) for (var r = 0, i = Object.values(Mn); r < i.length; r++) Rn(o = i[r], e, n, t);
				else for (var a in e) {
					var o, s = /^idb\:\/\/(.*)\/(.*)\//.exec(a);
					s && (a = s[1], s = s[2], (o = Mn[`idb://${a}/${s}`]) && Rn(o, e, n, t));
				}
				n.forEach(function(e) {
					return e();
				});
			}
			function Rn(e, t, n, r) {
				for (var i = [], a = 0, o = Object.entries(e.queries.query); a < o.length; a++) {
					for (var s = o[a], c = s[0], l = [], u = 0, d = s[1]; u < d.length; u++) {
						var f = d[u];
						jn(t, f.obsSet) ? f.subscribers.forEach(function(e) {
							return n.add(e);
						}) : r && l.push(f);
					}
					r && i.push([c, l]);
				}
				if (r) for (var p = 0, m = i; p < m.length; p++) {
					var h = m[p], c = h[0], l = h[1];
					e.queries.query[c] = l;
				}
			}
			function zn(e) {
				var t = e._state, n = e._deps.indexedDB;
				if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
					return t.dbOpenError ? U(t.dbOpenError) : e;
				});
				t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
				var r = t.openCanceller, a = Math.round(10 * e.verno), o = !1;
				function s() {
					if (t.openCanceller !== r) throw new I.DatabaseClosed("db.open() was cancelled");
				}
				function c() {
					return new z(function(r, l) {
						if (s(), !n) throw new I.MissingAPI();
						var u = e.name, p = t.autoSchema || !a ? n.open(u) : n.open(u, a);
						if (!p) throw new I.MissingAPI();
						p.onerror = Vt(l), p.onblocked = B(e._fireOnBlocked), p.onupgradeneeded = B(function(r) {
							var i;
							d = p.transaction, t.autoSchema && !e._options.allowEmptyDB ? (p.onerror = Ht, d.abort(), p.result.close(), (i = n.deleteDatabase(u)).onsuccess = i.onerror = B(function() {
								l(new I.NoSuchDatabase(`Database ${u} doesnt exist`));
							})) : (d.onerror = Vt(l), r = r.oldVersion > 2 ** 62 ? 0 : r.oldVersion, f = r < 1, e.idbdb = p.result, o && un(e, d), ln(e, r / 10, d, l));
						}, l), p.onsuccess = B(function() {
							d = null;
							var n, s, l, m, h, _ = e.idbdb = p.result, v = g(_.objectStoreNames);
							if (0 < v.length) try {
								var y = _.transaction((m = v).length === 1 ? m[0] : m, "readonly");
								if (t.autoSchema) s = _, l = y, (n = e).verno = s.version / 10, l = n._dbSchema = hn(0, s, l), n._storeNames = g(s.objectStoreNames, 0), on(n, [n._allTables], i(l), l);
								else if (gn(e, e._dbSchema, y), ((h = dn(hn(0, (h = e).idbdb, y), h._dbSchema)).add.length || h.change.some(function(e) {
									return e.add.length || e.change.length;
								})) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), _.close(), a = _.version + 1, o = !0, r(c());
								an(e, y);
							} catch {}
							ut.push(e), _.onversionchange = B(function(n) {
								t.vcFired = !0, e.on("versionchange").fire(n);
							}), _.onclose = B(function(t) {
								e.on("close").fire(t);
							}), f && (h = e._deps, y = u, _ = h.indexedDB, h = h.IDBKeyRange, xn(_) || y === dt || bn(_, h).put({ name: y }).catch(L)), r();
						}, l);
					}).catch(function(e) {
						switch (e?.name) {
							case "UnknownError":
								if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), c();
								break;
							case "VersionError": if (0 < a) return a = 0, c();
						}
						return z.reject(e);
					});
				}
				var l, u = t.dbReadyResolve, d = null, f = !1;
				return z.race([r, (typeof navigator > "u" ? z.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(e) {
					function t() {
						return indexedDB.databases().finally(e);
					}
					l = setInterval(t, 100), t();
				}).finally(function() {
					return clearInterval(l);
				}) : Promise.resolve()).then(c)]).then(function() {
					return s(), t.onReadyBeingFired = [], z.resolve(Sn(function() {
						return e.on.ready.fire(e.vip);
					})).then(function n() {
						if (0 < t.onReadyBeingFired.length) {
							var r = t.onReadyBeingFired.reduce(ye, L);
							return t.onReadyBeingFired = [], z.resolve(Sn(function() {
								return r(e.vip);
							})).then(n);
						}
					});
				}).finally(function() {
					t.openCanceller === r && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
				}).catch(function(n) {
					t.dbOpenError = n;
					try {
						d && d.abort();
					} catch {}
					return r === t.openCanceller && e._close(), U(n);
				}).finally(function() {
					t.openComplete = !0, u();
				}).then(function() {
					var t;
					return f && (t = {}, e.tables.forEach(function(n) {
						n.schema.indexes.forEach(function(r) {
							r.name && (t[`idb://${e.name}/${n.name}/${r.name}`] = new X(-Infinity, [[[]]]));
						}), t[`idb://${e.name}/${n.name}/`] = t[`idb://${e.name}/${n.name}/:dels`] = new X(-Infinity, [[[]]]);
					}), Gt(Ut).fire(t), Ln(t, !0)), e;
				});
			}
			function Bn(e) {
				function t(t) {
					return e.next(t);
				}
				var n = i(t), r = i(function(t) {
					return e.throw(t);
				});
				function i(e) {
					return function(t) {
						var i = e(t), t = i.value;
						return i.done ? t : t && typeof t.then == "function" ? t.then(n, r) : a(t) ? Promise.all(t).then(n, r) : n(t);
					};
				}
				return i(t)();
			}
			function Vn(e, t, n) {
				for (var r = a(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
				return r;
			}
			var Hn = {
				stack: "dbcore",
				name: "VirtualIndexMiddleware",
				level: 1,
				create: function(e) {
					return t(t({}, e), { table: function(n) {
						var r = e.table(n), i = r.schema, a = {}, o = [];
						function s(e, n, r) {
							var i = tn(e), c = a[i] = a[i] || [], l = e == null ? 0 : typeof e == "string" ? 1 : e.length, u = 0 < n, u = t(t({}, r), {
								name: u ? `${i}(virtual-from:${r.name})` : r.name,
								lowLevelIndex: r,
								isVirtual: u,
								keyTail: n,
								keyLength: l,
								extractKey: Qt(e),
								unique: !u && r.unique
							});
							return c.push(u), u.isPrimaryKey || o.push(u), 1 < l && s(l === 2 ? e[0] : e.slice(0, l - 1), n + 1, r), c.sort(function(e, t) {
								return e.keyTail - t.keyTail;
							}), u;
						}
						n = s(i.primaryKey.keyPath, 0, i.primaryKey), a[":id"] = [n];
						for (var c = 0, l = i.indexes; c < l.length; c++) {
							var u = l[c];
							s(u.keyPath, 0, u);
						}
						function d(n) {
							var r, i = n.query.index;
							return i.isVirtual ? t(t({}, n), { query: {
								index: i.lowLevelIndex,
								range: (r = n.query.range, i = i.keyTail, {
									type: r.type === 1 ? 2 : r.type,
									lower: Vn(r.lower, r.lowerOpen ? e.MAX_KEY : e.MIN_KEY, i),
									lowerOpen: !0,
									upper: Vn(r.upper, r.upperOpen ? e.MIN_KEY : e.MAX_KEY, i),
									upperOpen: !0
								})
							} }) : n;
						}
						return t(t({}, r), {
							schema: t(t({}, i), {
								primaryKey: n,
								indexes: o,
								getIndexByKeyPath: function(e) {
									return (e = a[tn(e)]) && e[0];
								}
							}),
							count: function(e) {
								return r.count(d(e));
							},
							query: function(e) {
								return r.query(d(e));
							},
							openCursor: function(t) {
								var n = t.query.index, i = n.keyTail, a = n.isVirtual, o = n.keyLength;
								return a ? r.openCursor(d(t)).then(function(e) {
									return e && s(e);
								}) : r.openCursor(t);
								function s(n) {
									return Object.create(n, {
										continue: { value: function(r) {
											r == null ? t.unique ? n.continue(n.key.slice(0, o).concat(t.reverse ? e.MIN_KEY : e.MAX_KEY, i)) : n.continue() : n.continue(Vn(r, t.reverse ? e.MAX_KEY : e.MIN_KEY, i));
										} },
										continuePrimaryKey: { value: function(t, r) {
											n.continuePrimaryKey(Vn(t, e.MAX_KEY, i), r);
										} },
										primaryKey: { get: function() {
											return n.primaryKey;
										} },
										key: { get: function() {
											var e = n.key;
											return o === 1 ? e[0] : e.slice(0, o);
										} },
										value: { get: function() {
											return n.value;
										} }
									});
								}
							}
						});
					} });
				}
			};
			function Un(e, t, n, r) {
				return n ||= {}, r ||= "", i(e).forEach(function(i) {
					var a, o, s;
					l(t, i) ? (a = e[i], o = t[i], typeof a == "object" && typeof o == "object" && a && o ? (s = D(a)) === D(o) ? s === "Object" ? Un(a, o, n, r + i + ".") : a !== o && (n[r + i] = t[i]) : n[r + i] = t[i] : a !== o && (n[r + i] = t[i])) : n[r + i] = void 0;
				}), i(t).forEach(function(i) {
					l(e, i) || (n[r + i] = t[i]);
				}), n;
			}
			function Wn(e, t) {
				return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
			}
			var Gn = {
				stack: "dbcore",
				name: "HooksMiddleware",
				level: 2,
				create: function(e) {
					return t(t({}, e), { table: function(r) {
						var i = e.table(r), a = i.schema.primaryKey;
						return t(t({}, i), { mutate: function(e) {
							var o = R.trans, s = o.table(r).hook, c = s.deleting, u = s.creating, d = s.updating;
							switch (e.type) {
								case "add":
									if (u.fire === L) break;
									return o._promise("readwrite", function() {
										return f(e);
									}, !0);
								case "put":
									if (u.fire === L && d.fire === L) break;
									return o._promise("readwrite", function() {
										return f(e);
									}, !0);
								case "delete":
									if (c.fire === L) break;
									return o._promise("readwrite", function() {
										return f(e);
									}, !0);
								case "deleteRange":
									if (c.fire === L) break;
									return o._promise("readwrite", function() {
										return (function e(n, r, o) {
											return i.query({
												trans: n,
												values: !1,
												query: {
													index: a,
													range: r
												},
												limit: o
											}).then(function(i) {
												var a = i.result;
												return f({
													type: "delete",
													keys: a,
													trans: n
												}).then(function(i) {
													return 0 < i.numFailures ? Promise.reject(i.failures[0]) : a.length < o ? {
														failures: [],
														numFailures: 0,
														lastResult: void 0
													} : e(n, t(t({}, r), {
														lower: a[a.length - 1],
														lowerOpen: !0
													}), o);
												});
											});
										})(e.trans, e.range, 1e4);
									}, !0);
							}
							return i.mutate(e);
							function f(e) {
								var r, o, s, f = R.trans, p = e.keys || Wn(a, e);
								if (!p) throw Error("Keys missing");
								return (e = e.type === "add" || e.type === "put" ? t(t({}, e), { keys: p }) : t({}, e)).type !== "delete" && (e.values = n([], e.values)), e.keys &&= n([], e.keys), r = i, s = p, ((o = e).type === "add" ? Promise.resolve([]) : r.getMany({
									trans: o.trans,
									keys: s,
									cache: "immutable"
								})).then(function(t) {
									var n = p.map(function(n, r) {
										var i, o, s, p = t[r], m = {
											onerror: null,
											onsuccess: null
										};
										return e.type === "delete" ? c.fire.call(m, n, p, f) : e.type === "add" || p === void 0 ? (i = u.fire.call(m, n, e.values[r], f), n == null && i != null && (e.keys[r] = n = i, a.outbound || x(e.values[r], a.keyPath, n))) : (i = Un(p, e.values[r]), (o = d.fire.call(m, i, n, p, f)) && (s = e.values[r], Object.keys(o).forEach(function(e) {
											l(s, e) ? s[e] = o[e] : x(s, e, o[e]);
										}))), m;
									});
									return i.mutate(e).then(function(r) {
										for (var i = r.failures, a = r.results, o = r.numFailures, r = r.lastResult, s = 0; s < p.length; ++s) {
											var c = (a || p)[s], l = n[s];
											c == null ? l.onerror && l.onerror(i[s]) : l.onsuccess && l.onsuccess(e.type === "put" && t[s] ? e.values[s] : c);
										}
										return {
											failures: i,
											results: a,
											numFailures: o,
											lastResult: r
										};
									}).catch(function(e) {
										return n.forEach(function(t) {
											return t.onerror && t.onerror(e);
										}), Promise.reject(e);
									});
								});
							}
						} });
					} });
				}
			};
			function Kn(e, t, n) {
				try {
					if (!t || t.keys.length < e.length) return null;
					for (var r = [], i = 0, a = 0; i < t.keys.length && a < e.length; ++i) G(t.keys[i], e[a]) === 0 && (r.push(n ? E(t.values[i]) : t.values[i]), ++a);
					return r.length === e.length ? r : null;
				} catch {
					return null;
				}
			}
			var qn = {
				stack: "dbcore",
				level: -1,
				create: function(e) {
					return { table: function(n) {
						var r = e.table(n);
						return t(t({}, r), {
							getMany: function(e) {
								if (!e.cache) return r.getMany(e);
								var t = Kn(e.keys, e.trans._cache, e.cache === "clone");
								return t ? z.resolve(t) : r.getMany(e).then(function(t) {
									return e.trans._cache = {
										keys: e.keys,
										values: e.cache === "clone" ? E(t) : t
									}, t;
								});
							},
							mutate: function(e) {
								return e.type !== "add" && (e.trans._cache = null), r.mutate(e);
							}
						});
					} };
				}
			};
			function Jn(e, t) {
				return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
			}
			function Yn(e, t) {
				switch (e) {
					case "query": return t.values && !t.unique;
					case "get":
					case "getMany":
					case "count":
					case "openCursor": return !1;
				}
			}
			var Xn = {
				stack: "dbcore",
				level: 0,
				name: "Observability",
				create: function(e) {
					var n = e.schema.name, r = new X(e.MIN_KEY, e.MAX_KEY);
					return t(t({}, e), {
						transaction: function(t, n, r) {
							if (R.subscr && n !== "readonly") throw new I.ReadOnly(`Readwrite transaction in liveQuery context. Querier source: ${R.querier}`);
							return e.transaction(t, n, r);
						},
						table: function(o) {
							var s = e.table(o), c = s.schema, l = c.primaryKey, u = c.indexes, d = l.extractKey, f = l.outbound, p = l.autoIncrement && u.filter(function(e) {
								return e.compound && e.keyPath.includes(l.keyPath);
							}), m = t(t({}, s), { mutate: function(t) {
								function i(e) {
									return e = `idb://${n}/${o}/${e}`, h[e] || (h[e] = new X());
								}
								var u, d, f, m = t.trans, h = t.mutatedParts ||= {}, g = i(""), _ = i(":dels"), v = t.type, y = t.type === "deleteRange" ? [t.range] : t.type === "delete" ? [t.keys] : t.values.length < 50 ? [Wn(l, t).filter(function(e) {
									return e;
								}), t.values] : [], b = y[0], x = y[1], y = t.trans._cache;
								return a(b) ? (g.addKeys(b), (y = v === "delete" || b.length === x.length ? Kn(b, y) : null) || _.addKeys(b), (y || x) && (u = i, d = y, f = x, c.indexes.forEach(function(e) {
									var t = u(e.name || "");
									function n(t) {
										return t == null ? null : e.extractKey(t);
									}
									function r(n) {
										return e.multiEntry && a(n) ? n.forEach(function(e) {
											return t.addKey(e);
										}) : t.addKey(n);
									}
									(d || f).forEach(function(e, t) {
										var i = d && n(d[t]), t = f && n(f[t]);
										G(i, t) !== 0 && (i != null && r(i), t != null && r(t));
									});
								}))) : b ? (x = {
									from: (x = b.lower) ?? e.MIN_KEY,
									to: (x = b.upper) ?? e.MAX_KEY
								}, _.add(x), g.add(x)) : (g.add(r), _.add(r), c.indexes.forEach(function(e) {
									return i(e.name).add(r);
								})), s.mutate(t).then(function(e) {
									return !b || t.type !== "add" && t.type !== "put" || (g.addKeys(e.results), p && p.forEach(function(n) {
										for (var r = t.values.map(function(e) {
											return n.extractKey(e);
										}), a = n.keyPath.findIndex(function(e) {
											return e === l.keyPath;
										}), o = 0, s = e.results.length; o < s; ++o) r[o][a] = e.results[o];
										i(n.name).addKeys(r);
									})), m.mutatedParts = An(m.mutatedParts || {}, h), e;
								});
							} }), u = function(t) {
								var n = t.query, t = n.index, n = n.range;
								return [t, new X((t = n.lower) ?? e.MIN_KEY, (n = n.upper) ?? e.MAX_KEY)];
							}, h = {
								get: function(e) {
									return [l, new X(e.key)];
								},
								getMany: function(e) {
									return [l, new X().addKeys(e.keys)];
								},
								count: u,
								query: u,
								openCursor: u
							};
							return i(h).forEach(function(e) {
								m[e] = function(i) {
									var a = R.subscr, c = !!a, l = Jn(R, s) && Yn(e, i) ? i.obsSet = {} : a;
									if (c) {
										var u = function(e) {
											return e = `idb://${n}/${o}/${e}`, l[e] || (l[e] = new X());
										}, p = u(""), m = u(":dels"), a = h[e](i), c = a[0], a = a[1];
										if ((e === "query" && c.isPrimaryKey && !i.values ? m : u(c.name || "")).add(a), !c.isPrimaryKey) {
											if (e !== "count") {
												var g = e === "query" && f && i.values && s.query(t(t({}, i), { values: !1 }));
												return s[e].apply(this, arguments).then(function(t) {
													if (e === "query") {
														if (f && i.values) return g.then(function(e) {
															return e = e.result, p.addKeys(e), t;
														});
														var n = i.values ? t.result.map(d) : t.result;
														(i.values ? p : m).addKeys(n);
													} else if (e === "openCursor") {
														var r = t, a = i.values;
														return r && Object.create(r, {
															key: { get: function() {
																return m.addKey(r.primaryKey), r.key;
															} },
															primaryKey: { get: function() {
																var e = r.primaryKey;
																return m.addKey(e), e;
															} },
															value: { get: function() {
																return a && p.addKey(r.primaryKey), r.value;
															} }
														});
													}
													return t;
												});
											}
											m.add(r);
										}
									}
									return s[e].apply(this, arguments);
								};
							}), m;
						}
					});
				}
			};
			function Zn(e, n, r) {
				if (r.numFailures === 0) return n;
				if (n.type === "deleteRange") return null;
				var i = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1;
				return r.numFailures === i ? null : (n = t({}, n), a(n.keys) && (n.keys = n.keys.filter(function(e, t) {
					return !(t in r.failures);
				})), "values" in n && a(n.values) && (n.values = n.values.filter(function(e, t) {
					return !(t in r.failures);
				})), n);
			}
			function Qn(e, t) {
				return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < G(n, r.lower) : 0 <= G(n, r.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? G(e, t.upper) < 0 : G(e, t.upper) <= 0));
				var n, r;
			}
			function $n(e, t, n, r, i, o) {
				if (!n || n.length === 0) return e;
				var s = t.query.index, c = s.multiEntry, l = t.query.range, u = r.schema.primaryKey.extractKey, d = s.extractKey, f = (s.lowLevelIndex || s).extractKey, n = n.reduce(function(e, n) {
					var r = e, i = [];
					if (n.type === "add" || n.type === "put") for (var o = new X(), s = n.values.length - 1; 0 <= s; --s) {
						var f, p = n.values[s], m = u(p);
						o.hasKey(m) || (f = d(p), (c && a(f) ? f.some(function(e) {
							return Qn(e, l);
						}) : Qn(f, l)) && (o.addKey(m), i.push(p)));
					}
					switch (n.type) {
						case "add":
							var h = new X().addKeys(t.values ? e.map(function(e) {
								return u(e);
							}) : e), r = e.concat(t.values ? i.filter(function(e) {
								return e = u(e), !h.hasKey(e) && (h.addKey(e), !0);
							}) : i.map(function(e) {
								return u(e);
							}).filter(function(e) {
								return !h.hasKey(e) && (h.addKey(e), !0);
							}));
							break;
						case "put":
							var g = new X().addKeys(n.values.map(function(e) {
								return u(e);
							}));
							r = e.filter(function(e) {
								return !g.hasKey(t.values ? u(e) : e);
							}).concat(t.values ? i : i.map(function(e) {
								return u(e);
							}));
							break;
						case "delete":
							var _ = new X().addKeys(n.keys);
							r = e.filter(function(e) {
								return !_.hasKey(t.values ? u(e) : e);
							});
							break;
						case "deleteRange":
							var v = n.range;
							r = e.filter(function(e) {
								return !Qn(u(e), v);
							});
					}
					return r;
				}, e);
				return n === e ? e : (n.sort(function(e, t) {
					return G(f(e), f(t)) || G(u(e), u(t));
				}), t.limit && t.limit < Infinity && (n.length > t.limit ? n.length = t.limit : e.length === t.limit && n.length < t.limit && (i.dirty = !0)), o ? Object.freeze(n) : n);
			}
			function er(e, t) {
				return G(e.lower, t.lower) === 0 && G(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
			}
			function tr(e, t) {
				return (function(e, t, n, r) {
					if (e === void 0) return t === void 0 ? 0 : -1;
					if (t === void 0) return 1;
					if ((t = G(e, t)) === 0) {
						if (n && r) return 0;
						if (n) return 1;
						if (r) return -1;
					}
					return t;
				})(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= (function(e, t, n, r) {
					if (e === void 0) return t === void 0 ? 0 : 1;
					if (t === void 0) return -1;
					if ((t = G(e, t)) === 0) {
						if (n && r) return 0;
						if (n) return -1;
						if (r) return 1;
					}
					return t;
				})(e.upper, t.upper, e.upperOpen, t.upperOpen);
			}
			function nr(e, t, n, r) {
				e.subscribers.add(n), r.addEventListener("abort", function() {
					var r, i;
					e.subscribers.delete(n), e.subscribers.size === 0 && (r = e, i = t, setTimeout(function() {
						r.subscribers.size === 0 && k(i, r);
					}, 3e3));
				});
			}
			var rr = {
				stack: "dbcore",
				level: 0,
				name: "Cache",
				create: function(e) {
					var n = e.schema.name;
					return t(t({}, e), {
						transaction: function(t, r, i) {
							var a, o, s = e.transaction(t, r, i);
							return r === "readwrite" && (o = (a = new AbortController()).signal, i = function(i) {
								return function() {
									if (a.abort(), r === "readwrite") {
										for (var o = /* @__PURE__ */ new Set(), c = 0, l = t; c < l.length; c++) {
											var u = l[c], d = Mn[`idb://${n}/${u}`];
											if (d) {
												var f = e.table(u), p = d.optimisticOps.filter(function(e) {
													return e.trans === s;
												});
												if (s._explicit && i && s.mutatedParts) for (var m = 0, h = Object.values(d.queries.query); m < h.length; m++) for (var g = 0, _ = (b = h[m]).slice(); g < _.length; g++) jn((x = _[g]).obsSet, s.mutatedParts) && (k(b, x), x.subscribers.forEach(function(e) {
													return o.add(e);
												}));
												else if (0 < p.length) {
													d.optimisticOps = d.optimisticOps.filter(function(e) {
														return e.trans !== s;
													});
													for (var v = 0, y = Object.values(d.queries.query); v < y.length; v++) for (var b, x, ee, S = 0, C = (b = y[v]).slice(); S < C.length; S++) (x = C[S]).res != null && s.mutatedParts && (i && !x.dirty ? (ee = Object.isFrozen(x.res), ee = $n(x.res, x.req, p, f, x, ee), x.dirty ? (k(b, x), x.subscribers.forEach(function(e) {
														return o.add(e);
													})) : ee !== x.res && (x.res = ee, x.promise = z.resolve({ result: ee }))) : (x.dirty && k(b, x), x.subscribers.forEach(function(e) {
														return o.add(e);
													})));
												}
											}
										}
										o.forEach(function(e) {
											return e();
										});
									}
								};
							}, s.addEventListener("abort", i(!1), { signal: o }), s.addEventListener("error", i(!1), { signal: o }), s.addEventListener("complete", i(!0), { signal: o })), s;
						},
						table: function(r) {
							var i = e.table(r), a = i.schema.primaryKey;
							return t(t({}, i), {
								mutate: function(e) {
									var o = R.trans;
									if (a.outbound || o.db._options.cache === "disabled" || o.explicit || o.idbtrans.mode !== "readwrite") return i.mutate(e);
									var s = Mn[`idb://${n}/${r}`];
									return s ? (o = i.mutate(e), e.type !== "add" && e.type !== "put" || !(50 <= e.values.length || Wn(a, e).some(function(e) {
										return e == null;
									})) ? (s.optimisticOps.push(e), e.mutatedParts && In(e.mutatedParts), o.then(function(t) {
										0 < t.numFailures && (k(s.optimisticOps, e), (t = Zn(0, e, t)) && s.optimisticOps.push(t), e.mutatedParts && In(e.mutatedParts));
									}), o.catch(function() {
										k(s.optimisticOps, e), e.mutatedParts && In(e.mutatedParts);
									})) : o.then(function(n) {
										var r = Zn(0, t(t({}, e), { values: e.values.map(function(e, r) {
											var i;
											return n.failures[r] ? e : (e = (i = a.keyPath) != null && i.includes(".") ? E(e) : t({}, e), x(e, a.keyPath, n.results[r]), e);
										}) }), n);
										s.optimisticOps.push(r), queueMicrotask(function() {
											return e.mutatedParts && In(e.mutatedParts);
										});
									}), o) : i.mutate(e);
								},
								query: function(e) {
									if (!Jn(R, i) || !Yn("query", e)) return i.query(e);
									var t = (c = R.trans)?.db._options.cache === "immutable", a = R, o = a.requery, s = a.signal, c = (function(e, t, n, r) {
										var i = Mn[`idb://${e}/${t}`];
										if (!i) return [];
										if (!(t = i.queries[n])) return [
											null,
											!1,
											i,
											null
										];
										var a = t[(r.query ? r.query.index.name : null) || ""];
										if (!a) return [
											null,
											!1,
											i,
											null
										];
										switch (n) {
											case "query":
												var o = a.find(function(e) {
													return e.req.limit === r.limit && e.req.values === r.values && er(e.req.query.range, r.query.range);
												});
												return o ? [
													o,
													!0,
													i,
													a
												] : [
													a.find(function(e) {
														return ("limit" in e.req ? e.req.limit : Infinity) >= r.limit && (!r.values || e.req.values) && tr(e.req.query.range, r.query.range);
													}),
													!1,
													i,
													a
												];
											case "count": return o = a.find(function(e) {
												return er(e.req.query.range, r.query.range);
											}), [
												o,
												!!o,
												i,
												a
											];
										}
									})(n, r, "query", e), l = c[0], a = c[1], u = c[2], d = c[3];
									return l && a ? l.obsSet = e.obsSet : (a = i.query(e).then(function(e) {
										var n = e.result;
										if (l && (l.res = n), t) {
											for (var r = 0, i = n.length; r < i; ++r) Object.freeze(n[r]);
											Object.freeze(n);
										} else e.result = E(n);
										return e;
									}).catch(function(e) {
										return d && l && k(d, l), Promise.reject(e);
									}), l = {
										obsSet: e.obsSet,
										promise: a,
										subscribers: /* @__PURE__ */ new Set(),
										type: "query",
										req: e,
										dirty: !1
									}, d ? d.push(l) : (d = [l], (u ||= Mn[`idb://${n}/${r}`] = {
										queries: {
											query: {},
											count: {}
										},
										objs: /* @__PURE__ */ new Map(),
										optimisticOps: [],
										unsignaledParts: {}
									}).queries.query[e.query.index.name || ""] = d)), nr(l, d, o, s), l.promise.then(function(n) {
										return { result: $n(n.result, e, u?.optimisticOps, i, l, t) };
									});
								}
							});
						}
					});
				}
			};
			function ir(e, t) {
				return new Proxy(e, { get: function(e, n, r) {
					return n === "db" ? t : Reflect.get(e, n, r);
				} });
			}
			var Z = (Q.prototype.version = function(e) {
				if (isNaN(e) || e < .1) throw new I.Type("Given version is not a positive number");
				if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new I.Schema("Cannot add version when database is open");
				this.verno = Math.max(this.verno, e);
				var t = this._versions, n = t.filter(function(t) {
					return t._cfg.version === e;
				})[0];
				return n || (n = new this.Version(e), t.push(n), t.sort(cn), n.stores({}), this._state.autoSchema = !1, n);
			}, Q.prototype._whenReady = function(e) {
				var t = this;
				return this.idbdb && (this._state.openComplete || R.letThrough || this._vip) ? e() : new z(function(e, n) {
					if (t._state.openComplete) return n(new I.DatabaseClosed(t._state.dbOpenError));
					if (!t._state.isBeingOpened) {
						if (!t._state.autoOpen) return void n(new I.DatabaseClosed());
						t.open().catch(L);
					}
					t._state.dbReadyPromise.then(e, n);
				}).then(e);
			}, Q.prototype.use = function(e) {
				var t = e.stack, n = e.create, r = e.level, i = e.name;
				return i && this.unuse({
					stack: t,
					name: i
				}), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({
					stack: t,
					create: n,
					level: r ?? 10,
					name: i
				}), e.sort(function(e, t) {
					return e.level - t.level;
				}), this;
			}, Q.prototype.unuse = function(e) {
				var t = e.stack, n = e.name, r = e.create;
				return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(e) {
					return r ? e.create !== r : !!n && e.name !== n;
				})), this;
			}, Q.prototype.open = function() {
				var e = this;
				return it(Me, function() {
					return zn(e);
				});
			}, Q.prototype._close = function() {
				this.on.close.fire(new CustomEvent("close"));
				var e = this._state, t = ut.indexOf(this);
				if (0 <= t && ut.splice(t, 1), this.idbdb) {
					try {
						this.idbdb.close();
					} catch {}
					this.idbdb = null;
				}
				e.isBeingOpened || (e.dbReadyPromise = new z(function(t) {
					e.dbReadyResolve = t;
				}), e.openCanceller = new z(function(t, n) {
					e.cancelOpen = n;
				}));
			}, Q.prototype.close = function(e) {
				var t = (e === void 0 ? { disableAutoOpen: !0 } : e).disableAutoOpen, e = this._state;
				t ? (e.isBeingOpened && e.cancelOpen(new I.DatabaseClosed()), this._close(), e.autoOpen = !1, e.dbOpenError = new I.DatabaseClosed()) : (this._close(), e.autoOpen = this._options.autoOpen || e.isBeingOpened, e.openComplete = !1, e.dbOpenError = null);
			}, Q.prototype.delete = function(e) {
				var t = this;
				e === void 0 && (e = { disableAutoOpen: !0 });
				var n = 0 < arguments.length && typeof arguments[0] != "object", r = this._state;
				return new z(function(i, a) {
					function o() {
						t.close(e);
						var n = t._deps.indexedDB.deleteDatabase(t.name);
						n.onsuccess = B(function() {
							var e = t._deps, n = t.name, r = e.indexedDB;
							e = e.IDBKeyRange, xn(r) || n === dt || bn(r, e).delete(n).catch(L), i();
						}), n.onerror = Vt(a), n.onblocked = t._fireOnBlocked;
					}
					if (n) throw new I.InvalidArgument("Invalid closeOptions argument to db.delete()");
					r.isBeingOpened ? r.dbReadyPromise.then(o) : o();
				});
			}, Q.prototype.backendDB = function() {
				return this.idbdb;
			}, Q.prototype.isOpen = function() {
				return this.idbdb !== null;
			}, Q.prototype.hasBeenClosed = function() {
				var e = this._state.dbOpenError;
				return e && e.name === "DatabaseClosed";
			}, Q.prototype.hasFailed = function() {
				return this._state.dbOpenError !== null;
			}, Q.prototype.dynamicallyOpened = function() {
				return this._state.autoSchema;
			}, Object.defineProperty(Q.prototype, "tables", {
				get: function() {
					var e = this;
					return i(this._allTables).map(function(t) {
						return e._allTables[t];
					});
				},
				enumerable: !1,
				configurable: !0
			}), Q.prototype.transaction = function() {
				var e = (function(e, t, n) {
					var r = arguments.length;
					if (r < 2) throw new I.InvalidArgument("Too few arguments");
					for (var i = Array(r - 1); --r;) i[r - 1] = arguments[r];
					return n = i.pop(), [
						e,
						C(i),
						n
					];
				}).apply(this, arguments);
				return this._transaction.apply(this, e);
			}, Q.prototype._transaction = function(e, t, n) {
				var r = this, i = R.trans;
				i && i.db === this && e.indexOf("!") === -1 || (i = null);
				var a, o, s = e.indexOf("?") !== -1;
				e = e.replace("!", "").replace("?", "");
				try {
					if (o = t.map(function(e) {
						if (e = e instanceof r.Table ? e.name : e, typeof e != "string") throw TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
						return e;
					}), e == "r" || e === W) a = W;
					else {
						if (e != "rw" && e != ft) throw new I.InvalidArgument("Invalid transaction mode: " + e);
						a = ft;
					}
					if (i) {
						if (i.mode === W && a === ft) {
							if (!s) throw new I.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
							i = null;
						}
						i && o.forEach(function(e) {
							if (i && i.storeNames.indexOf(e) === -1) {
								if (!s) throw new I.SubTransaction("Table " + e + " not included in parent transaction.");
								i = null;
							}
						}), s && i && !i.active && (i = null);
					}
				} catch (e) {
					return i ? i._promise(null, function(t, n) {
						n(e);
					}) : U(e);
				}
				var c = (function e(t, n, r, i, a) {
					return z.resolve().then(function() {
						var o = R.transless || R, s = t._createTransaction(n, r, t._dbSchema, i);
						if (s.explicit = !0, o = {
							trans: s,
							transless: o
						}, i) s.idbtrans = i.idbtrans;
						else try {
							s.create(), s.idbtrans._explicit = !0, t._state.PR1398_maxLoop = 3;
						} catch (i) {
							return i.name === le.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
								return e(t, n, r, null, a);
							})) : U(i);
						}
						var c, l = j(a);
						return l && Qe(), o = z.follow(function() {
							var e;
							(c = a.call(s, s)) && (l ? (e = $e.bind(null, null), c.then(e, e)) : typeof c.next == "function" && typeof c.throw == "function" && (c = Bn(c)));
						}, o), (c && typeof c.then == "function" ? z.resolve(c).then(function(e) {
							return s.active ? e : U(new I.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
						}) : o.then(function() {
							return c;
						})).then(function(e) {
							return i && s._resolve(), s._completion.then(function() {
								return e;
							});
						}).catch(function(e) {
							return s._reject(e), U(e);
						});
					});
				}).bind(null, this, a, o, i, n);
				return i ? i._promise(a, c, "lock") : R.trans ? it(R.transless, function() {
					return r._whenReady(c);
				}) : this._whenReady(c);
			}, Q.prototype.table = function(e) {
				if (!l(this._allTables, e)) throw new I.InvalidTable(`Table ${e} does not exist`);
				return this._allTables[e];
			}, Q);
			function Q(e, n) {
				var r = this;
				this._middlewares = {}, this.verno = 0;
				var i = Q.dependencies;
				this._options = n = t({
					addons: Q.addons,
					autoOpen: !0,
					indexedDB: i.indexedDB,
					IDBKeyRange: i.IDBKeyRange,
					cache: "cloned"
				}, n), this._deps = {
					indexedDB: n.indexedDB,
					IDBKeyRange: n.IDBKeyRange
				}, i = n.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
				var a, o, s, c, l, u = {
					dbOpenError: null,
					isBeingOpened: !1,
					onReadyBeingFired: null,
					openComplete: !1,
					dbReadyResolve: L,
					dbReadyPromise: null,
					cancelOpen: L,
					openCanceller: null,
					autoSchema: !0,
					PR1398_maxLoop: 3,
					autoOpen: n.autoOpen
				};
				u.dbReadyPromise = new z(function(e) {
					u.dbReadyResolve = e;
				}), u.openCanceller = new z(function(e, t) {
					u.cancelOpen = t;
				}), this._state = u, this.name = e, this.on = xt(this, "populate", "blocked", "versionchange", "close", { ready: [ye, L] }), this.once = function(e, t) {
					var n = function() {
						var i = [...arguments];
						r.on(e).unsubscribe(n), t.apply(r, i);
					};
					return r.on(e, n);
				}, this.on.ready.subscribe = _(this.on.ready.subscribe, function(e) {
					return function(t, n) {
						Q.vip(function() {
							var i, a = r._state;
							a.openComplete ? (a.dbOpenError || z.resolve().then(t), n && e(t)) : a.onReadyBeingFired ? (a.onReadyBeingFired.push(t), n && e(t)) : (e(t), i = r, n || e(function e() {
								i.on.ready.unsubscribe(t), i.on.ready.unsubscribe(e);
							}));
						});
					};
				}), this.Collection = (a = this, St(Mt.prototype, function(e, t) {
					this.db = a;
					var n = mt, r = null;
					if (t) try {
						n = t();
					} catch (e) {
						r = e;
					}
					var i = e._ctx, t = i.table, e = t.hook.reading.fire;
					this._ctx = {
						table: t,
						index: i.index,
						isPrimKey: !i.index || t.schema.primKey.keyPath && i.index === t.schema.primKey.name,
						range: n,
						keysOnly: !1,
						dir: "next",
						unique: "",
						algorithm: null,
						filter: null,
						replayFilter: null,
						justLimit: !0,
						isMatch: null,
						offset: 0,
						limit: Infinity,
						error: r,
						or: i.or,
						valueMapper: e === fe ? null : e
					};
				})), this.Table = (o = this, St(bt.prototype, function(e, t, n) {
					this.db = o, this._tx = n, this.name = e, this.schema = t, this.hook = o._allTables[e] ? o._allTables[e].hook : xt(null, {
						creating: [he, L],
						reading: [pe, fe],
						updating: [_e, L],
						deleting: [ge, L]
					});
				})), this.Transaction = (s = this, St(Kt.prototype, function(e, t, n, r, i) {
					var a = this;
					e !== "readonly" && t.forEach(function(e) {
						e = (e = n[e])?.yProps, e && (t = t.concat(e.map(function(e) {
							return e.updatesTable;
						})));
					}), this.db = s, this.mode = e, this.storeNames = t, this.schema = n, this.chromeTransactionDurability = r, this.idbtrans = null, this.on = xt(this, "complete", "error", "abort"), this.parent = i || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new z(function(e, t) {
						a._resolve = e, a._reject = t;
					}), this._completion.then(function() {
						a.active = !1, a.on.complete.fire();
					}, function(e) {
						var t = a.active;
						return a.active = !1, a.on.error.fire(e), a.parent ? a.parent._reject(e) : t && a.idbtrans && a.idbtrans.abort(), U(e);
					});
				})), this.Version = (c = this, St(vn.prototype, function(e) {
					this.db = c, this._cfg = {
						version: e,
						storesSource: null,
						dbschema: {},
						tables: {},
						contentUpgrade: null
					};
				})), this.WhereClause = (l = this, St(Bt.prototype, function(e, t, n) {
					if (this.db = l, this._ctx = {
						table: e,
						index: t === ":id" ? null : t,
						or: n
					}, this._cmp = this._ascending = G, this._descending = function(e, t) {
						return G(t, e);
					}, this._max = function(e, t) {
						return 0 < G(e, t) ? e : t;
					}, this._min = function(e, t) {
						return G(e, t) < 0 ? e : t;
					}, this._IDBKeyRange = l._deps.IDBKeyRange, !this._IDBKeyRange) throw new I.MissingAPI();
				})), this.on("versionchange", function(e) {
					0 < e.newVersion ? console.warn(`Another connection wants to upgrade database '${r.name}'. Closing db now to resume the upgrade.`) : console.warn(`Another connection wants to delete database '${r.name}'. Closing db now to resume the delete request.`), r.close({ disableAutoOpen: !1 });
				}), this.on("blocked", function(e) {
					!e.newVersion || e.newVersion < e.oldVersion ? console.warn(`Dexie.delete('${r.name}') was blocked`) : console.warn(`Upgrade '${r.name}' blocked by other connection holding version ${e.oldVersion / 10}`);
				}), this._maxKey = Zt(n.IDBKeyRange), this._createTransaction = function(e, t, n, i) {
					return new r.Transaction(e, t, n, r._options.chromeTransactionDurability, i);
				}, this._fireOnBlocked = function(e) {
					r.on("blocked").fire(e), ut.filter(function(e) {
						return e.name === r.name && e !== r && !e._state.vcFired;
					}).map(function(t) {
						return t.on("versionchange").fire(e);
					});
				}, this.use(qn), this.use(rr), this.use(Xn), this.use(Hn), this.use(Gn);
				var d = new Proxy(this, { get: function(e, t, n) {
					if (t === "_vip") return !0;
					if (t === "table") return function(e) {
						return ir(r.table(e), d);
					};
					var i = Reflect.get(e, t, n);
					return i instanceof bt ? ir(i, d) : t === "tables" ? i.map(function(e) {
						return ir(e, d);
					}) : t === "_createTransaction" ? function() {
						return ir(i.apply(this, arguments), d);
					} : i;
				} });
				this.vip = d, i.forEach(function(e) {
					return e(r);
				});
			}
			var ar, N = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", or = (sr.prototype.subscribe = function(e, t, n) {
				return this._subscribe(e && typeof e != "function" ? e : {
					next: e,
					error: t,
					complete: n
				});
			}, sr.prototype[N] = function() {
				return this;
			}, sr);
			function sr(e) {
				this._subscribe = e;
			}
			try {
				ar = {
					indexedDB: r.indexedDB || r.mozIndexedDB || r.webkitIndexedDB || r.msIndexedDB,
					IDBKeyRange: r.IDBKeyRange || r.webkitIDBKeyRange
				};
			} catch {
				ar = {
					indexedDB: null,
					IDBKeyRange: null
				};
			}
			function cr(e) {
				var t, n = !1, r = new or(function(r) {
					var i = j(e), a, o = !1, s = {}, c = {}, u = {
						get closed() {
							return o;
						},
						unsubscribe: function() {
							o || (o = !0, a && a.abort(), d && Gt.storagemutated.unsubscribe(p));
						}
					};
					r.start && r.start(u);
					var d = !1, f = function() {
						return ot(m);
					}, p = function(e) {
						An(s, e), jn(c, s) && f();
					}, m = function() {
						var u, m, h;
						!o && ar.indexedDB && (s = {}, u = {}, a && a.abort(), a = new AbortController(), h = (function(t) {
							var n = Ue();
							try {
								i && Qe();
								var r = H(e, t);
								return r = i ? r.finally($e) : r;
							} finally {
								n && We();
							}
						})(m = {
							subscr: u,
							signal: a.signal,
							requery: f,
							querier: e,
							trans: null
						}), Promise.resolve(h).then(function(e) {
							n = !0, t = e, o || m.signal.aborted || (s = {}, (function(e) {
								for (var t in e) if (l(e, t)) return;
								return 1;
							})(c = u) || d || (Gt(Ut, p), d = !0), ot(function() {
								return !o && r.next && r.next(e);
							}));
						}, function(e) {
							n = !1, ["DatabaseClosedError", "AbortError"].includes(e?.name) || o || ot(function() {
								o || r.error && r.error(e);
							});
						}));
					};
					return setTimeout(f, 0), u;
				});
				return r.hasValue = function() {
					return n;
				}, r.getValue = function() {
					return t;
				}, r;
			}
			var lr = Z;
			function ur(e) {
				var t = fr;
				try {
					fr = !0, Gt.storagemutated.fire(e), Ln(e, !0);
				} finally {
					fr = t;
				}
			}
			u(lr, t(t({}, de), {
				delete: function(e) {
					return new lr(e, { addons: [] }).delete();
				},
				exists: function(e) {
					return new lr(e, { addons: [] }).open().then(function(e) {
						return e.close(), !0;
					}).catch("NoSuchDatabaseError", function() {
						return !1;
					});
				},
				getDatabaseNames: function(e) {
					try {
						return t = lr.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (xn(n) ? Promise.resolve(n.databases()).then(function(e) {
							return e.map(function(e) {
								return e.name;
							}).filter(function(e) {
								return e !== dt;
							});
						}) : bn(n, t).toCollection().primaryKeys()).then(e);
					} catch {
						return U(new I.MissingAPI());
					}
					var t, n;
				},
				defineClass: function() {
					return function(e) {
						o(this, e);
					};
				},
				ignoreTransaction: function(e) {
					return R.trans ? it(R.transless, e) : e();
				},
				vip: Sn,
				async: function(e) {
					return function() {
						try {
							var t = Bn(e.apply(this, arguments));
							return t && typeof t.then == "function" ? t : z.resolve(t);
						} catch (e) {
							return U(e);
						}
					};
				},
				spawn: function(e, t, n) {
					try {
						var r = Bn(e.apply(n, t || []));
						return r && typeof r.then == "function" ? r : z.resolve(r);
					} catch (e) {
						return U(e);
					}
				},
				currentTransaction: { get: function() {
					return R.trans || null;
				} },
				waitFor: function(e, t) {
					return t = z.resolve(typeof e == "function" ? lr.ignoreTransaction(e) : e).timeout(t || 6e4), R.trans ? R.trans.waitFor(t) : t;
				},
				Promise: z,
				debug: {
					get: function() {
						return be;
					},
					set: function(e) {
						xe(e);
					}
				},
				derive: p,
				extend: o,
				props: u,
				override: _,
				Events: xt,
				on: Gt,
				liveQuery: cr,
				extendObservabilitySet: An,
				getByKeyPath: b,
				setByKeyPath: x,
				delByKeyPath: function(e, t) {
					typeof t == "string" ? x(e, t, void 0) : "length" in t && [].map.call(t, function(t) {
						x(e, t, void 0);
					});
				},
				shallowClone: ee,
				deepClone: E,
				getObjectDiff: Un,
				cmp: G,
				asap: y,
				minKey: -Infinity,
				addons: [],
				connections: ut,
				errnames: le,
				dependencies: ar,
				cache: Mn,
				semVer: "4.2.0",
				version: "4.2.0".split(".").map(function(e) {
					return parseInt(e);
				}).reduce(function(e, t, n) {
					return e + t / 10 ** (2 * n);
				})
			})), lr.maxKey = Zt(lr.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Gt(Ut, function(e) {
				fr ||= (e = new CustomEvent(Wt, { detail: e }), fr = !0, dispatchEvent(e), !1);
			}), addEventListener(Wt, function(e) {
				e = e.detail, fr || ur(e);
			}));
			var dr, fr = !1, pr = function() {};
			return typeof BroadcastChannel < "u" && ((pr = function() {
				(dr = new BroadcastChannel(Wt)).onmessage = function(e) {
					return e.data && ur(e.data);
				};
			})(), typeof dr.unref == "function" && dr.unref(), Gt(Ut, function(e) {
				fr || dr.postMessage(e);
			})), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
				if (!Z.disableBfCache && e.persisted) {
					be && console.debug("Dexie: handling persisted pagehide"), dr?.close();
					for (var t = 0, n = ut; t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
				}
			}), addEventListener("pageshow", function(e) {
				!Z.disableBfCache && e.persisted && (be && console.debug("Dexie: handling persisted pageshow"), pr(), ur({ all: new X(-Infinity, [[]]) }));
			})), z.rejectionMapper = function(e, t) {
				return !e || e instanceof P || e instanceof TypeError || e instanceof SyntaxError || !e.name || !ue[e.name] ? e : (t = new ue[e.name](t || e.message, e), "stack" in e && f(t, "stack", { get: function() {
					return this.inner.stack;
				} }), t);
			}, xe(be), t(Z, Object.freeze({
				__proto__: null,
				Dexie: Z,
				liveQuery: cr,
				Entity: gt,
				cmp: G,
				PropModification: At,
				replacePrefix: function(e, t) {
					return new At({ replacePrefix: [e, t] });
				},
				add: function(e) {
					return new At({ add: e });
				},
				remove: function(e) {
					return new At({ remove: e });
				},
				default: Z,
				RangeSet: X,
				mergeRanges: Tn,
				rangesOverlap: En
			}), { default: Z }), Z;
		});
	})(Rn)), Rn.exports;
}
var Hn = /* @__PURE__ */ In(Vn()), Un = /* @__PURE__ */ Symbol.for("Dexie"), Wn = globalThis[Un] || (globalThis[Un] = Hn);
if (Hn.semVer !== Wn.semVer) throw Error(`Two different versions of Dexie loaded in the same app: ${Hn.semVer} and ${Wn.semVer}`);
var { liveQuery: Gn, mergeRanges: Kn, rangesOverlap: qn, RangeSet: Jn, cmp: Yn, Entity: Xn, PropModification: Zn, replacePrefix: Qn, add: $n, remove: er, DexieYProvider: tr } = Wn;
({ exports: {} }).exports;
var nr = {}, rr = /* @__PURE__ */ Ln(/* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	default: {}
}, Symbol.toStringTag, { value: "Module" }))), ir;
function Z() {
	return ir || (ir = 1, (function(e) {
		(function(e) {
			e.parser = function(e, t) {
				return new n(e, t);
			}, e.SAXParser = n, e.SAXStream = u, e.createStream = c, e.MAX_BUFFER_LENGTH = 64 * 1024;
			var t = [
				"comment",
				"sgmlDecl",
				"textNode",
				"tagName",
				"doctype",
				"procInstName",
				"procInstBody",
				"entity",
				"attribName",
				"attribValue",
				"cdata",
				"script"
			];
			e.EVENTS = [
				"text",
				"processinginstruction",
				"sgmldeclaration",
				"doctype",
				"comment",
				"opentagstart",
				"attribute",
				"opentag",
				"closetag",
				"opencdata",
				"cdata",
				"closecdata",
				"error",
				"end",
				"ready",
				"script",
				"opennamespace",
				"closenamespace"
			];
			function n(t, r) {
				if (!(this instanceof n)) return new n(t, r);
				var a = this;
				i(a), a.q = a.c = "", a.bufferCheckPosition = e.MAX_BUFFER_LENGTH, a.encoding = null, a.opt = r || {}, a.opt.lowercase = a.opt.lowercase || a.opt.lowercasetags, a.looseCase = a.opt.lowercase ? "toLowerCase" : "toUpperCase", a.opt.maxEntityCount = a.opt.maxEntityCount || 512, a.opt.maxEntityDepth = a.opt.maxEntityDepth || 4, a.entityCount = a.entityDepth = 0, a.tags = [], a.closed = a.closedRoot = a.sawRoot = !1, a.tag = a.error = null, a.strict = !!t, a.noscript = !!(t || a.opt.noscript), a.state = w.BEGIN, a.strictEntities = a.opt.strictEntities, a.ENTITIES = a.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), a.attribList = [], a.opt.xmlns && (a.ns = Object.create(h)), a.opt.unquotedAttributeValues === void 0 && (a.opt.unquotedAttributeValues = !t), a.trackPosition = a.opt.position !== !1, a.trackPosition && (a.position = a.line = a.column = 0), T(a, "onready");
			}
			Object.create || (Object.create = function(e) {
				function t() {}
				return t.prototype = e, new t();
			}), Object.keys || (Object.keys = function(e) {
				var t = [];
				for (var n in e) e.hasOwnProperty(n) && t.push(n);
				return t;
			});
			function r(n) {
				for (var r = Math.max(e.MAX_BUFFER_LENGTH, 10), i = 0, a = 0, o = t.length; a < o; a++) {
					var s = n[t[a]].length;
					if (s > r) switch (t[a]) {
						case "textNode":
							k(n);
							break;
						case "cdata":
							O(n, "oncdata", n.cdata), n.cdata = "";
							break;
						case "script":
							O(n, "onscript", n.script), n.script = "";
							break;
						default: A(n, "Max buffer length exceeded: " + t[a]);
					}
					i = Math.max(i, s);
				}
				n.bufferCheckPosition = e.MAX_BUFFER_LENGTH - i + n.position;
			}
			function i(e) {
				for (var n = 0, r = t.length; n < r; n++) e[t[n]] = "";
			}
			function a(e) {
				k(e), e.cdata !== "" && (O(e, "oncdata", e.cdata), e.cdata = ""), e.script !== "" && (O(e, "onscript", e.script), e.script = "");
			}
			n.prototype = {
				end: function() {
					j(this);
				},
				write: I,
				resume: function() {
					return this.error = null, this;
				},
				close: function() {
					return this.write(null);
				},
				flush: function() {
					a(this);
				}
			};
			var o;
			try {
				o = rr.Stream;
			} catch {
				o = function() {};
			}
			o ||= function() {};
			var s = e.EVENTS.filter(function(e) {
				return e !== "error" && e !== "end";
			});
			function c(e, t) {
				return new u(e, t);
			}
			function l(e, t) {
				if (e.length >= 2) {
					if (e[0] === 255 && e[1] === 254) return "utf-16le";
					if (e[0] === 254 && e[1] === 255) return "utf-16be";
				}
				return e.length >= 3 && e[0] === 239 && e[1] === 187 && e[2] === 191 ? "utf8" : e.length >= 4 ? e[0] === 60 && e[1] === 0 && e[2] === 63 && e[3] === 0 ? "utf-16le" : e[0] === 0 && e[1] === 60 && e[2] === 0 && e[3] === 63 ? "utf-16be" : "utf8" : t ? "utf8" : null;
			}
			function u(e, t) {
				if (!(this instanceof u)) return new u(e, t);
				o.apply(this), this._parser = new n(e, t), this.writable = !0, this.readable = !0;
				var r = this;
				this._parser.onend = function() {
					r.emit("end");
				}, this._parser.onerror = function(e) {
					r.emit("error", e), r._parser.error = null;
				}, this._decoder = null, this._decoderBuffer = null, s.forEach(function(e) {
					Object.defineProperty(r, "on" + e, {
						get: function() {
							return r._parser["on" + e];
						},
						set: function(t) {
							if (!t) return r.removeAllListeners(e), r._parser["on" + e] = t, t;
							r.on(e, t);
						},
						enumerable: !0,
						configurable: !1
					});
				});
			}
			u.prototype = Object.create(o.prototype, { constructor: { value: u } }), u.prototype._decodeBuffer = function(e, t) {
				if (this._decoderBuffer &&= (e = Buffer.concat([this._decoderBuffer, e]), null), !this._decoder) {
					var n = l(e, t);
					if (!n) return this._decoderBuffer = e, "";
					this._parser.encoding = n, this._decoder = new TextDecoder(n);
				}
				return this._decoder.decode(e, { stream: !t });
			}, u.prototype.write = function(e) {
				if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(e)) e = this._decodeBuffer(e, !1);
				else if (this._decoderBuffer) {
					var t = this._decodeBuffer(Buffer.alloc(0), !0);
					t && (this._parser.write(t), this.emit("data", t));
				}
				return this._parser.write(e.toString()), this.emit("data", e), !0;
			}, u.prototype.end = function(e) {
				if (e && e.length && this.write(e), this._decoderBuffer) {
					var t = this._decodeBuffer(Buffer.alloc(0), !0);
					t && (this._parser.write(t), this.emit("data", t));
				} else if (this._decoder) {
					var n = this._decoder.decode();
					n && (this._parser.write(n), this.emit("data", n));
				}
				return this._parser.end(), !0;
			}, u.prototype.on = function(e, t) {
				var n = this;
				return !n._parser["on" + e] && s.indexOf(e) !== -1 && (n._parser["on" + e] = function() {
					var t = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
					t.splice(0, 0, e), n.emit.apply(n, t);
				}), o.prototype.on.call(n, e, t);
			};
			var d = "[CDATA[", f = "DOCTYPE", p = "http://www.w3.org/XML/1998/namespace", m = "http://www.w3.org/2000/xmlns/", h = {
				xml: p,
				xmlns: m
			}, g = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, _ = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, v = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, y = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
			function b(e) {
				return e === " " || e === "\n" || e === "\r" || e === "	";
			}
			function x(e) {
				return e === "\"" || e === "'";
			}
			function ee(e) {
				return e === ">" || b(e);
			}
			function S(e, t) {
				return e.test(t);
			}
			function C(e, t) {
				return !S(e, t);
			}
			var w = 0;
			for (var te in e.STATE = {
				BEGIN: w++,
				BEGIN_WHITESPACE: w++,
				TEXT: w++,
				TEXT_ENTITY: w++,
				OPEN_WAKA: w++,
				SGML_DECL: w++,
				SGML_DECL_QUOTED: w++,
				DOCTYPE: w++,
				DOCTYPE_QUOTED: w++,
				DOCTYPE_DTD: w++,
				DOCTYPE_DTD_QUOTED: w++,
				COMMENT_STARTING: w++,
				COMMENT: w++,
				COMMENT_ENDING: w++,
				COMMENT_ENDED: w++,
				CDATA: w++,
				CDATA_ENDING: w++,
				CDATA_ENDING_2: w++,
				PROC_INST: w++,
				PROC_INST_BODY: w++,
				PROC_INST_ENDING: w++,
				OPEN_TAG: w++,
				OPEN_TAG_SLASH: w++,
				ATTRIB: w++,
				ATTRIB_NAME: w++,
				ATTRIB_NAME_SAW_WHITE: w++,
				ATTRIB_VALUE: w++,
				ATTRIB_VALUE_QUOTED: w++,
				ATTRIB_VALUE_CLOSED: w++,
				ATTRIB_VALUE_UNQUOTED: w++,
				ATTRIB_VALUE_ENTITY_Q: w++,
				ATTRIB_VALUE_ENTITY_U: w++,
				CLOSE_TAG: w++,
				CLOSE_TAG_SAW_WHITE: w++,
				SCRIPT: w++,
				SCRIPT_ENDING: w++
			}, e.XML_ENTITIES = {
				amp: "&",
				gt: ">",
				lt: "<",
				quot: "\"",
				apos: "'"
			}, e.ENTITIES = {
				amp: "&",
				gt: ">",
				lt: "<",
				quot: "\"",
				apos: "'",
				AElig: 198,
				Aacute: 193,
				Acirc: 194,
				Agrave: 192,
				Aring: 197,
				Atilde: 195,
				Auml: 196,
				Ccedil: 199,
				ETH: 208,
				Eacute: 201,
				Ecirc: 202,
				Egrave: 200,
				Euml: 203,
				Iacute: 205,
				Icirc: 206,
				Igrave: 204,
				Iuml: 207,
				Ntilde: 209,
				Oacute: 211,
				Ocirc: 212,
				Ograve: 210,
				Oslash: 216,
				Otilde: 213,
				Ouml: 214,
				THORN: 222,
				Uacute: 218,
				Ucirc: 219,
				Ugrave: 217,
				Uuml: 220,
				Yacute: 221,
				aacute: 225,
				acirc: 226,
				aelig: 230,
				agrave: 224,
				aring: 229,
				atilde: 227,
				auml: 228,
				ccedil: 231,
				eacute: 233,
				ecirc: 234,
				egrave: 232,
				eth: 240,
				euml: 235,
				iacute: 237,
				icirc: 238,
				igrave: 236,
				iuml: 239,
				ntilde: 241,
				oacute: 243,
				ocirc: 244,
				ograve: 242,
				oslash: 248,
				otilde: 245,
				ouml: 246,
				szlig: 223,
				thorn: 254,
				uacute: 250,
				ucirc: 251,
				ugrave: 249,
				uuml: 252,
				yacute: 253,
				yuml: 255,
				copy: 169,
				reg: 174,
				nbsp: 160,
				iexcl: 161,
				cent: 162,
				pound: 163,
				curren: 164,
				yen: 165,
				brvbar: 166,
				sect: 167,
				uml: 168,
				ordf: 170,
				laquo: 171,
				not: 172,
				shy: 173,
				macr: 175,
				deg: 176,
				plusmn: 177,
				sup1: 185,
				sup2: 178,
				sup3: 179,
				acute: 180,
				micro: 181,
				para: 182,
				middot: 183,
				cedil: 184,
				ordm: 186,
				raquo: 187,
				frac14: 188,
				frac12: 189,
				frac34: 190,
				iquest: 191,
				times: 215,
				divide: 247,
				OElig: 338,
				oelig: 339,
				Scaron: 352,
				scaron: 353,
				Yuml: 376,
				fnof: 402,
				circ: 710,
				tilde: 732,
				Alpha: 913,
				Beta: 914,
				Gamma: 915,
				Delta: 916,
				Epsilon: 917,
				Zeta: 918,
				Eta: 919,
				Theta: 920,
				Iota: 921,
				Kappa: 922,
				Lambda: 923,
				Mu: 924,
				Nu: 925,
				Xi: 926,
				Omicron: 927,
				Pi: 928,
				Rho: 929,
				Sigma: 931,
				Tau: 932,
				Upsilon: 933,
				Phi: 934,
				Chi: 935,
				Psi: 936,
				Omega: 937,
				alpha: 945,
				beta: 946,
				gamma: 947,
				delta: 948,
				epsilon: 949,
				zeta: 950,
				eta: 951,
				theta: 952,
				iota: 953,
				kappa: 954,
				lambda: 955,
				mu: 956,
				nu: 957,
				xi: 958,
				omicron: 959,
				pi: 960,
				rho: 961,
				sigmaf: 962,
				sigma: 963,
				tau: 964,
				upsilon: 965,
				phi: 966,
				chi: 967,
				psi: 968,
				omega: 969,
				thetasym: 977,
				upsih: 978,
				piv: 982,
				ensp: 8194,
				emsp: 8195,
				thinsp: 8201,
				zwnj: 8204,
				zwj: 8205,
				lrm: 8206,
				rlm: 8207,
				ndash: 8211,
				mdash: 8212,
				lsquo: 8216,
				rsquo: 8217,
				sbquo: 8218,
				ldquo: 8220,
				rdquo: 8221,
				bdquo: 8222,
				dagger: 8224,
				Dagger: 8225,
				bull: 8226,
				hellip: 8230,
				permil: 8240,
				prime: 8242,
				Prime: 8243,
				lsaquo: 8249,
				rsaquo: 8250,
				oline: 8254,
				frasl: 8260,
				euro: 8364,
				image: 8465,
				weierp: 8472,
				real: 8476,
				trade: 8482,
				alefsym: 8501,
				larr: 8592,
				uarr: 8593,
				rarr: 8594,
				darr: 8595,
				harr: 8596,
				crarr: 8629,
				lArr: 8656,
				uArr: 8657,
				rArr: 8658,
				dArr: 8659,
				hArr: 8660,
				forall: 8704,
				part: 8706,
				exist: 8707,
				empty: 8709,
				nabla: 8711,
				isin: 8712,
				notin: 8713,
				ni: 8715,
				prod: 8719,
				sum: 8721,
				minus: 8722,
				lowast: 8727,
				radic: 8730,
				prop: 8733,
				infin: 8734,
				ang: 8736,
				and: 8743,
				or: 8744,
				cap: 8745,
				cup: 8746,
				int: 8747,
				there4: 8756,
				sim: 8764,
				cong: 8773,
				asymp: 8776,
				ne: 8800,
				equiv: 8801,
				le: 8804,
				ge: 8805,
				sub: 8834,
				sup: 8835,
				nsub: 8836,
				sube: 8838,
				supe: 8839,
				oplus: 8853,
				otimes: 8855,
				perp: 8869,
				sdot: 8901,
				lceil: 8968,
				rceil: 8969,
				lfloor: 8970,
				rfloor: 8971,
				lang: 9001,
				rang: 9002,
				loz: 9674,
				spades: 9824,
				clubs: 9827,
				hearts: 9829,
				diams: 9830
			}, Object.keys(e.ENTITIES).forEach(function(t) {
				var n = e.ENTITIES[t], r = typeof n == "number" ? String.fromCharCode(n) : n;
				e.ENTITIES[t] = r;
			}), e.STATE) e.STATE[e.STATE[te]] = te;
			w = e.STATE;
			function T(e, t, n) {
				e[t] && e[t](n);
			}
			function E(e) {
				var t = e && e.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);
				return t ? t[2] : null;
			}
			function ne(e) {
				return e ? e.toLowerCase().replace(/[^a-z0-9]/g, "") : null;
			}
			function D(e, t) {
				let n = ne(e), r = ne(t);
				return !n || !r ? !0 : r === "utf16" ? n === "utf16le" || n === "utf16be" : n === r;
			}
			function re(e, t) {
				if (!(!e.strict || !e.encoding || !t || t.name !== "xml")) {
					var n = E(t.body);
					n && !D(e.encoding, n) && M(e, "XML declaration encoding " + n + " does not match detected stream encoding " + e.encoding.toUpperCase());
				}
			}
			function O(e, t, n) {
				e.textNode && k(e), T(e, t, n);
			}
			function k(e) {
				e.textNode = ie(e.opt, e.textNode), e.textNode && T(e, "ontext", e.textNode), e.textNode = "";
			}
			function ie(e, t) {
				return e.trim && (t = t.trim()), e.normalize && (t = t.replace(/\s+/g, " ")), t;
			}
			function A(e, t) {
				return k(e), e.trackPosition && (t += "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c), t = Error(t), e.error = t, T(e, "onerror", t), e;
			}
			function j(e) {
				return e.sawRoot && !e.closedRoot && M(e, "Unclosed root tag"), e.state !== w.BEGIN && e.state !== w.BEGIN_WHITESPACE && e.state !== w.TEXT && A(e, "Unexpected end"), k(e), e.c = "", e.closed = !0, T(e, "onend"), n.call(e, e.strict, e.opt), e;
			}
			function M(e, t) {
				if (typeof e != "object" || !(e instanceof n)) throw Error("bad call to strictFail");
				e.strict && A(e, t);
			}
			function N(e) {
				e.strict || (e.tagName = e.tagName[e.looseCase]());
				var t = e.tags[e.tags.length - 1] || e, n = e.tag = {
					name: e.tagName,
					attributes: {}
				};
				e.opt.xmlns && (n.ns = t.ns), e.attribList.length = 0, O(e, "onopentagstart", n);
			}
			function ae(e, t) {
				var n = e.indexOf(":") < 0 ? ["", e] : e.split(":"), r = n[0], i = n[1];
				return t && e === "xmlns" && (r = "xmlns", i = ""), {
					prefix: r,
					local: i
				};
			}
			function P(e) {
				if (e.strict || (e.attribName = e.attribName[e.looseCase]()), e.attribList.indexOf(e.attribName) !== -1 || e.tag.attributes.hasOwnProperty(e.attribName)) {
					e.attribName = e.attribValue = "";
					return;
				}
				if (e.opt.xmlns) {
					var t = ae(e.attribName, !0), n = t.prefix, r = t.local;
					if (n === "xmlns") if (r === "xml" && e.attribValue !== p) M(e, "xml: prefix must be bound to " + p + "\nActual: " + e.attribValue);
					else if (r === "xmlns" && e.attribValue !== m) M(e, "xmlns: prefix must be bound to " + m + "\nActual: " + e.attribValue);
					else {
						var i = e.tag, a = e.tags[e.tags.length - 1] || e;
						i.ns === a.ns && (i.ns = Object.create(a.ns)), i.ns[r] = e.attribValue;
					}
					e.attribList.push([e.attribName, e.attribValue]);
				} else e.tag.attributes[e.attribName] = e.attribValue, O(e, "onattribute", {
					name: e.attribName,
					value: e.attribValue
				});
				e.attribName = e.attribValue = "";
			}
			function oe(e, t) {
				if (e.opt.xmlns) {
					var n = e.tag, r = ae(e.tagName);
					n.prefix = r.prefix, n.local = r.local, n.uri = n.ns[r.prefix] || "", n.prefix && !n.uri && (M(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName)), n.uri = r.prefix);
					var i = e.tags[e.tags.length - 1] || e;
					n.ns && i.ns !== n.ns && Object.keys(n.ns).forEach(function(t) {
						O(e, "onopennamespace", {
							prefix: t,
							uri: n.ns[t]
						});
					});
					for (var a = 0, o = e.attribList.length; a < o; a++) {
						var s = e.attribList[a], c = s[0], l = s[1], u = ae(c, !0), d = u.prefix, f = u.local, p = d === "" ? "" : n.ns[d] || "", m = {
							name: c,
							value: l,
							prefix: d,
							local: f,
							uri: p
						};
						d && d !== "xmlns" && !p && (M(e, "Unbound namespace prefix: " + JSON.stringify(d)), m.uri = d), e.tag.attributes[c] = m, O(e, "onattribute", m);
					}
					e.attribList.length = 0;
				}
				e.tag.isSelfClosing = !!t, e.sawRoot = !0, e.tags.push(e.tag), O(e, "onopentag", e.tag), t || (!e.noscript && e.tagName.toLowerCase() === "script" ? e.state = w.SCRIPT : e.state = w.TEXT, e.tag = null, e.tagName = ""), e.attribName = e.attribValue = "", e.attribList.length = 0;
			}
			function se(e) {
				if (!e.tagName) {
					M(e, "Weird empty close tag."), e.textNode += "</>", e.state = w.TEXT;
					return;
				}
				if (e.script) {
					if (e.tagName !== "script") {
						e.script += "</" + e.tagName + ">", e.tagName = "", e.state = w.SCRIPT;
						return;
					}
					O(e, "onscript", e.script), e.script = "";
				}
				var t = e.tags.length, n = e.tagName;
				e.strict || (n = n[e.looseCase]());
				for (var r = n; t-- && e.tags[t].name !== r;) M(e, "Unexpected close tag");
				if (t < 0) {
					M(e, "Unmatched closing tag: " + e.tagName), e.textNode += "</" + e.tagName + ">", e.state = w.TEXT;
					return;
				}
				e.tagName = n;
				for (var i = e.tags.length; i-- > t;) {
					var a = e.tag = e.tags.pop();
					e.tagName = e.tag.name, O(e, "onclosetag", e.tagName);
					var o = {};
					for (var s in a.ns) o[s] = a.ns[s];
					var c = e.tags[e.tags.length - 1] || e;
					e.opt.xmlns && a.ns !== c.ns && Object.keys(a.ns).forEach(function(t) {
						var n = a.ns[t];
						O(e, "onclosenamespace", {
							prefix: t,
							uri: n
						});
					});
				}
				t === 0 && (e.closedRoot = !0), e.tagName = e.attribValue = e.attribName = "", e.attribList.length = 0, e.state = w.TEXT;
			}
			function ce(e) {
				var t = e.entity, n = t.toLowerCase(), r, i = "";
				return e.ENTITIES[t] ? e.ENTITIES[t] : e.ENTITIES[n] ? e.ENTITIES[n] : (t = n, t.charAt(0) === "#" && (t.charAt(1) === "x" ? (t = t.slice(2), r = parseInt(t, 16), i = r.toString(16)) : (t = t.slice(1), r = parseInt(t, 10), i = r.toString(10))), t = t.replace(/^0+/, ""), isNaN(r) || i.toLowerCase() !== t || r < 0 || r > 1114111 ? (M(e, "Invalid character entity"), "&" + e.entity + ";") : String.fromCodePoint(r));
			}
			function le(e, t) {
				t === "<" ? (e.state = w.OPEN_WAKA, e.startTagPosition = e.position) : b(t) || (M(e, "Non-whitespace before first tag."), e.textNode = t, e.state = w.TEXT);
			}
			function F(e, t) {
				var n = "";
				return t < e.length && (n = e.charAt(t)), n;
			}
			function I(t) {
				var n = this;
				if (this.error) throw this.error;
				if (n.closed) return A(n, "Cannot write after close. Assign an onready handler.");
				if (t === null) return j(n);
				typeof t == "object" && (t = t.toString());
				for (var i = 0, a = ""; a = F(t, i++), n.c = a, a;) switch (n.trackPosition && (n.position++, a === "\n" ? (n.line++, n.column = 0) : n.column++), n.state) {
					case w.BEGIN:
						if (n.state = w.BEGIN_WHITESPACE, a === "﻿") continue;
						le(n, a);
						continue;
					case w.BEGIN_WHITESPACE:
						le(n, a);
						continue;
					case w.TEXT:
						if (n.sawRoot && !n.closedRoot) {
							for (var o = i - 1; a && a !== "<" && a !== "&";) a = F(t, i++), a && n.trackPosition && (n.position++, a === "\n" ? (n.line++, n.column = 0) : n.column++);
							n.textNode += t.substring(o, i - 1);
						}
						a === "<" && !(n.sawRoot && n.closedRoot && !n.strict) ? (n.state = w.OPEN_WAKA, n.startTagPosition = n.position) : (!b(a) && (!n.sawRoot || n.closedRoot) && M(n, "Text data outside of root node."), a === "&" ? n.state = w.TEXT_ENTITY : n.textNode += a);
						continue;
					case w.SCRIPT:
						a === "<" ? n.state = w.SCRIPT_ENDING : n.script += a;
						continue;
					case w.SCRIPT_ENDING:
						a === "/" ? n.state = w.CLOSE_TAG : (n.script += "<" + a, n.state = w.SCRIPT);
						continue;
					case w.OPEN_WAKA:
						if (a === "!") n.state = w.SGML_DECL, n.sgmlDecl = "";
						else if (!b(a)) if (S(g, a)) n.state = w.OPEN_TAG, n.tagName = a;
						else if (a === "/") n.state = w.CLOSE_TAG, n.tagName = "";
						else if (a === "?") n.state = w.PROC_INST, n.procInstName = n.procInstBody = "";
						else {
							if (M(n, "Unencoded <"), n.startTagPosition + 1 < n.position) {
								var s = n.position - n.startTagPosition;
								a = Array(s).join(" ") + a;
							}
							n.textNode += "<" + a, n.state = w.TEXT;
						}
						continue;
					case w.SGML_DECL:
						if (n.sgmlDecl + a === "--") {
							n.state = w.COMMENT, n.comment = "", n.sgmlDecl = "";
							continue;
						}
						n.doctype && n.doctype !== !0 && n.sgmlDecl ? (n.state = w.DOCTYPE_DTD, n.doctype += "<!" + n.sgmlDecl + a, n.sgmlDecl = "") : (n.sgmlDecl + a).toUpperCase() === d ? (O(n, "onopencdata"), n.state = w.CDATA, n.sgmlDecl = "", n.cdata = "") : (n.sgmlDecl + a).toUpperCase() === f ? (n.state = w.DOCTYPE, (n.doctype || n.sawRoot) && M(n, "Inappropriately located doctype declaration"), n.doctype = "", n.sgmlDecl = "") : a === ">" ? (O(n, "onsgmldeclaration", n.sgmlDecl), n.sgmlDecl = "", n.state = w.TEXT) : (x(a) && (n.state = w.SGML_DECL_QUOTED), n.sgmlDecl += a);
						continue;
					case w.SGML_DECL_QUOTED:
						a === n.q && (n.state = w.SGML_DECL, n.q = ""), n.sgmlDecl += a;
						continue;
					case w.DOCTYPE:
						a === ">" ? (n.state = w.TEXT, O(n, "ondoctype", n.doctype), n.doctype = !0) : (n.doctype += a, a === "[" ? n.state = w.DOCTYPE_DTD : x(a) && (n.state = w.DOCTYPE_QUOTED, n.q = a));
						continue;
					case w.DOCTYPE_QUOTED:
						n.doctype += a, a === n.q && (n.q = "", n.state = w.DOCTYPE);
						continue;
					case w.DOCTYPE_DTD:
						a === "]" ? (n.doctype += a, n.state = w.DOCTYPE) : a === "<" ? (n.state = w.OPEN_WAKA, n.startTagPosition = n.position) : x(a) ? (n.doctype += a, n.state = w.DOCTYPE_DTD_QUOTED, n.q = a) : n.doctype += a;
						continue;
					case w.DOCTYPE_DTD_QUOTED:
						n.doctype += a, a === n.q && (n.state = w.DOCTYPE_DTD, n.q = "");
						continue;
					case w.COMMENT:
						a === "-" ? n.state = w.COMMENT_ENDING : n.comment += a;
						continue;
					case w.COMMENT_ENDING:
						a === "-" ? (n.state = w.COMMENT_ENDED, n.comment = ie(n.opt, n.comment), n.comment && O(n, "oncomment", n.comment), n.comment = "") : (n.comment += "-" + a, n.state = w.COMMENT);
						continue;
					case w.COMMENT_ENDED:
						a === ">" ? n.doctype && n.doctype !== !0 ? n.state = w.DOCTYPE_DTD : n.state = w.TEXT : (M(n, "Malformed comment"), n.comment += "--" + a, n.state = w.COMMENT);
						continue;
					case w.CDATA:
						for (var o = i - 1; a && a !== "]";) a = F(t, i++), a && n.trackPosition && (n.position++, a === "\n" ? (n.line++, n.column = 0) : n.column++);
						n.cdata += t.substring(o, i - 1), a === "]" && (n.state = w.CDATA_ENDING);
						continue;
					case w.CDATA_ENDING:
						a === "]" ? n.state = w.CDATA_ENDING_2 : (n.cdata += "]" + a, n.state = w.CDATA);
						continue;
					case w.CDATA_ENDING_2:
						a === ">" ? (n.cdata && O(n, "oncdata", n.cdata), O(n, "onclosecdata"), n.cdata = "", n.state = w.TEXT) : a === "]" ? n.cdata += "]" : (n.cdata += "]]" + a, n.state = w.CDATA);
						continue;
					case w.PROC_INST:
						a === "?" ? n.state = w.PROC_INST_ENDING : b(a) ? n.state = w.PROC_INST_BODY : n.procInstName += a;
						continue;
					case w.PROC_INST_BODY:
						if (!n.procInstBody && b(a)) continue;
						a === "?" ? n.state = w.PROC_INST_ENDING : n.procInstBody += a;
						continue;
					case w.PROC_INST_ENDING:
						if (a === ">") {
							let e = {
								name: n.procInstName,
								body: n.procInstBody
							};
							re(n, e), O(n, "onprocessinginstruction", e), n.procInstName = n.procInstBody = "", n.state = w.TEXT;
						} else n.procInstBody += "?" + a, n.state = w.PROC_INST_BODY;
						continue;
					case w.OPEN_TAG:
						S(_, a) ? n.tagName += a : (N(n), a === ">" ? oe(n) : a === "/" ? n.state = w.OPEN_TAG_SLASH : (b(a) || M(n, "Invalid character in tag name"), n.state = w.ATTRIB));
						continue;
					case w.OPEN_TAG_SLASH:
						a === ">" ? (oe(n, !0), se(n)) : (M(n, "Forward-slash in opening tag not followed by >"), n.state = w.ATTRIB);
						continue;
					case w.ATTRIB:
						if (b(a)) continue;
						a === ">" ? oe(n) : a === "/" ? n.state = w.OPEN_TAG_SLASH : S(g, a) ? (n.attribName = a, n.attribValue = "", n.state = w.ATTRIB_NAME) : M(n, "Invalid attribute name");
						continue;
					case w.ATTRIB_NAME:
						a === "=" ? n.state = w.ATTRIB_VALUE : a === ">" ? (M(n, "Attribute without value"), n.attribValue = n.attribName, P(n), oe(n)) : b(a) ? n.state = w.ATTRIB_NAME_SAW_WHITE : S(_, a) ? n.attribName += a : M(n, "Invalid attribute name");
						continue;
					case w.ATTRIB_NAME_SAW_WHITE:
						if (a === "=") n.state = w.ATTRIB_VALUE;
						else {
							if (b(a)) continue;
							M(n, "Attribute without value"), n.tag.attributes[n.attribName] = "", n.attribValue = "", O(n, "onattribute", {
								name: n.attribName,
								value: ""
							}), n.attribName = "", a === ">" ? oe(n) : S(g, a) ? (n.attribName = a, n.state = w.ATTRIB_NAME) : (M(n, "Invalid attribute name"), n.state = w.ATTRIB);
						}
						continue;
					case w.ATTRIB_VALUE:
						if (b(a)) continue;
						x(a) ? (n.q = a, n.state = w.ATTRIB_VALUE_QUOTED) : (n.opt.unquotedAttributeValues || A(n, "Unquoted attribute value"), n.state = w.ATTRIB_VALUE_UNQUOTED, n.attribValue = a);
						continue;
					case w.ATTRIB_VALUE_QUOTED:
						if (a !== n.q) {
							a === "&" ? n.state = w.ATTRIB_VALUE_ENTITY_Q : n.attribValue += a;
							continue;
						}
						P(n), n.q = "", n.state = w.ATTRIB_VALUE_CLOSED;
						continue;
					case w.ATTRIB_VALUE_CLOSED:
						b(a) ? n.state = w.ATTRIB : a === ">" ? oe(n) : a === "/" ? n.state = w.OPEN_TAG_SLASH : S(g, a) ? (M(n, "No whitespace between attributes"), n.attribName = a, n.attribValue = "", n.state = w.ATTRIB_NAME) : M(n, "Invalid attribute name");
						continue;
					case w.ATTRIB_VALUE_UNQUOTED:
						if (!ee(a)) {
							a === "&" ? n.state = w.ATTRIB_VALUE_ENTITY_U : n.attribValue += a;
							continue;
						}
						P(n), a === ">" ? oe(n) : n.state = w.ATTRIB;
						continue;
					case w.CLOSE_TAG:
						if (n.tagName) a === ">" ? se(n) : S(_, a) ? n.tagName += a : n.script ? (n.script += "</" + n.tagName + a, n.tagName = "", n.state = w.SCRIPT) : (b(a) || M(n, "Invalid tagname in closing tag"), n.state = w.CLOSE_TAG_SAW_WHITE);
						else {
							if (b(a)) continue;
							C(g, a) ? n.script ? (n.script += "</" + a, n.state = w.SCRIPT) : M(n, "Invalid tagname in closing tag.") : n.tagName = a;
						}
						continue;
					case w.CLOSE_TAG_SAW_WHITE:
						if (b(a)) continue;
						a === ">" ? se(n) : M(n, "Invalid characters in closing tag");
						continue;
					case w.TEXT_ENTITY:
					case w.ATTRIB_VALUE_ENTITY_Q:
					case w.ATTRIB_VALUE_ENTITY_U:
						var c, l;
						switch (n.state) {
							case w.TEXT_ENTITY:
								c = w.TEXT, l = "textNode";
								break;
							case w.ATTRIB_VALUE_ENTITY_Q:
								c = w.ATTRIB_VALUE_QUOTED, l = "attribValue";
								break;
							case w.ATTRIB_VALUE_ENTITY_U:
								c = w.ATTRIB_VALUE_UNQUOTED, l = "attribValue";
								break;
						}
						if (a === ";") {
							var u = ce(n);
							n.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(u) ? ((n.entityCount += 1) > n.opt.maxEntityCount && A(n, "Parsed entity count exceeds max entity count"), (n.entityDepth += 1) > n.opt.maxEntityDepth && A(n, "Parsed entity depth exceeds max entity depth"), n.entity = "", n.state = c, n.write(u), --n.entityDepth) : (n[l] += u, n.entity = "", n.state = c);
						} else S(n.entity.length ? y : v, a) ? n.entity += a : (M(n, "Invalid character in entity name"), n[l] += "&" + n.entity + a, n.entity = "", n.state = c);
						continue;
					default: throw Error(n, "Unknown state: " + n.state);
				}
				return n.position >= n.bufferCheckPosition && r(n), n;
			}
			String.fromCodePoint || (function() {
				var e = String.fromCharCode, t = Math.floor, n = function() {
					var n = 16384, r = [], i, a, o = -1, s = arguments.length;
					if (!s) return "";
					for (var c = ""; ++o < s;) {
						var l = Number(arguments[o]);
						if (!isFinite(l) || l < 0 || l > 1114111 || t(l) !== l) throw RangeError("Invalid code point: " + l);
						l <= 65535 ? r.push(l) : (l -= 65536, i = (l >> 10) + 55296, a = l % 1024 + 56320, r.push(i, a)), (o + 1 === s || r.length > n) && (c += e.apply(null, r), r.length = 0);
					}
					return c;
				};
				Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
					value: n,
					configurable: !0,
					writable: !0
				}) : String.fromCodePoint = n;
			})();
		})(e);
	})(nr)), nr;
}
Z();
//#endregion
//#region src/dialecte/merge/query/diff/diff-attributes.ts
var Q = new Set([
	"uuid",
	"templateUuid",
	"originUuid"
]);
function ar(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.attributes) Q.has(r.name) || t && r.value === t(e.tagName, r.name) || n.set(r.name, r.value);
	return n;
}
function or(e, t, n) {
	let r = ar(e, n), i = ar(t, n);
	if (r.size !== i.size) return !1;
	for (let [e, t] of r) if (i.get(e) !== t) return !1;
	return !0;
}
function sr(e, t, n) {
	let r = ar(e, n), i = ar(t, n), a = [], o = new Set([...r.keys(), ...i.keys()]);
	for (let e of o) {
		let t = r.get(e), n = i.get(e);
		t !== n && a.push({
			name: e,
			before: t,
			after: n
		});
	}
	return a;
}
function cr(e, t) {
	if (e.value !== t.value) return {
		before: e.value,
		after: t.value
	};
}
//#endregion
//#region src/dialecte/merge/query/diff/diff-engine.ts
function lr(e) {
	let { source: t, target: n, attributeDefault: r } = e, i = [];
	for (let [e, a] of t) {
		let t = n.get(e);
		if (!t) {
			i.push(ur({
				identity: e,
				source: a,
				target: null,
				status: "added",
				attributeDefault: r
			}));
			continue;
		}
		let o = or(t.record, a.record, r), s = t.record.value === a.record.value;
		o && s || i.push(ur({
			identity: e,
			source: a,
			target: t,
			status: "modified",
			attributeDefault: r
		}));
	}
	for (let [e, a] of n) t.has(e) || i.push(ur({
		identity: e,
		source: null,
		target: a,
		status: "removed",
		attributeDefault: r
	}));
	return i;
}
function ur(e) {
	let { identity: t, source: n, target: r, status: i, attributeDefault: a } = e, o = n?.record ?? r?.record, s = n ?? r;
	if (!o || !s) throw Error(`diff: cannot build DiffNode for identity ${t} - no record`);
	let c = {
		identity: t,
		tagName: o.tagName,
		label: dr(o),
		changeStatus: i,
		sectionScope: s.sectionScope,
		oldRecordId: r?.record.id ?? null,
		newRecordId: n?.record.id ?? null,
		children: [],
		changeCount: 1
	};
	if (i === "modified" && n && r) {
		let e = sr(r.record, n.record, a);
		e.length > 0 && (c.attributes = e);
		let t = cr(r.record, n.record);
		t && (c.valueChange = t);
	}
	return c;
}
function dr(e) {
	return e.attributes.find((e) => e.name === "name")?.value || e.attributes.find((e) => e.name === "id")?.value || e.tagName;
}
//#endregion
//#region src/dialecte/merge/query/tree/tree-builder.ts
function fr(e) {
	let { flatNodes: t, sourceMap: n, targetMap: r } = e, i = /* @__PURE__ */ new Map(), a = (e) => `${e.tagName}#${e.id}`;
	for (let [e, t] of n) i.set(a(t.record), e);
	for (let [e, t] of r) i.set(a(t.record), e);
	let o = (e) => r.get(e) ?? n.get(e), s = /* @__PURE__ */ new Map();
	for (let e of t) s.set(e.identity, {
		...e,
		children: []
	});
	let c = /* @__PURE__ */ new Map(), l = t.map((e) => e.identity);
	for (; l.length > 0;) {
		let e = l.shift();
		if (c.has(e)) continue;
		let t = o(e), n = t?.ancestors[t.ancestors.length - 1], r = n ? i.get(a(n)) ?? null : null;
		if (c.set(e, r), r && !s.has(r)) {
			let e = o(r);
			e && (s.set(r, pr(r, e)), l.push(r));
		}
	}
	let u = [];
	for (let [e, t] of s) {
		let n = c.get(e) ?? null, r = n ? s.get(n) : void 0;
		r ? r.children.push(t) : u.push(t);
	}
	for (let e of u) hr(e);
	return u;
}
function pr(e, t) {
	let n = t.record;
	return {
		identity: e,
		tagName: n.tagName,
		label: mr(n),
		changeStatus: "unchanged",
		sectionScope: t.sectionScope,
		oldRecordId: n.id,
		newRecordId: n.id,
		children: [],
		changeCount: 0
	};
}
function mr(e) {
	return e.attributes.find((e) => e.name === "name")?.value || e.attributes.find((e) => e.name === "id")?.value || e.tagName;
}
function hr(e) {
	let t = e.changeStatus === "unchanged" ? 0 : 1;
	for (let n of e.children) t += hr(n);
	return e.changeCount = t, t;
}
//#endregion
//#region src/dialecte/merge/query/scope/anchored-function-scope.ts
function gr(e, t) {
	return e.attributes.find((e) => e.name === t)?.value;
}
function _r(e) {
	return e.bridged === !0;
}
function vr(e, t) {
	let n = gr(e.record, "id");
	if (t.typeClosure.typeTags.has(e.record.tagName) && n) return n;
	for (let t = e.ancestors.length - 1; t >= 0; t--) {
		let n = gr(e.ancestors[t], "id");
		if (n) return n;
	}
	return null;
}
function yr(e) {
	for (let t of e.values()) if (t.record.tagName === "Header") return gr(t.record, "uuid");
}
function br(e, t, n) {
	if (!t) return null;
	let r = /* @__PURE__ */ new Set();
	for (let i of e.values()) if (i.record.tagName === n.fileReference.tag && gr(i.record, n.fileReference.fileUuidAttribute) === t) for (let e of i.ancestors) n.functionContainerTags.has(e.tagName) && r.add(e.id);
	return r;
}
function xr(e) {
	let { anchor: t } = e, n = yr(e.source), r = br(e.target, n, t);
	if (!r || r.size === 0) return {
		source: /* @__PURE__ */ new Map(),
		target: /* @__PURE__ */ new Map(),
		anchor: {
			matched: !1,
			anchoredFunctionIds: [],
			inScopeTypeIds: []
		}
	};
	let i = Sr(e.source, null, t), a = Sr(e.target, r, t);
	return {
		source: i.map,
		target: a.map,
		anchor: {
			matched: !0,
			anchoredFunctionIds: [...r],
			inScopeTypeIds: [...a.reachableTypeIds]
		}
	};
}
function Sr(e, t, n) {
	let r = /* @__PURE__ */ new Set();
	for (let t of e.values()) n.functionTags.has(t.record.tagName) && _r(t) && r.add(t.record.id);
	let i = (e) => !t || t.has(e.record.id) ? !0 : e.ancestors.some((e) => t.has(e.id)), a = (e) => {
		let t = e.record.tagName;
		return !n.functionTags.has(t) || !(_r(e) || e.ancestors.some((e) => r.has(e.id))) ? !1 : n.functionBodyTags.has(t) ? i(e) : !0;
	}, o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
	for (let [t, r] of e) {
		if (!a(r)) continue;
		o.add(t);
		let e = gr(r.record, n.typeClosure.seedAttribute);
		e && s.add(e);
	}
	let c = Cr(e, s, n);
	for (let [t, r] of e) {
		if (r.sectionScope !== "datatypetemplates") continue;
		let e = vr(r, n);
		e && c.has(e) && o.add(t);
	}
	return {
		map: wr(e, (e, t) => o.has(t)),
		reachableTypeIds: c
	};
}
function Cr(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	for (let t of e.values()) {
		if (t.sectionScope !== "datatypetemplates") continue;
		let e = vr(t, n), i = gr(t.record, n.typeClosure.referenceAttribute);
		if (!e || !i) continue;
		let a = r.get(e) ?? [];
		a.push(i), r.set(e, a);
	}
	let i = new Set(t), a = [...t];
	for (; a.length > 0;) {
		let e = a.shift();
		for (let t of r.get(e) ?? []) i.has(t) || (i.add(t), a.push(t));
	}
	return i;
}
function wr(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let [r, i] of e) t(i, r) && n.set(r, i);
	return n;
}
//#endregion
//#region src/dialecte/merge/query/scope/whole-document-scope.ts
function Tr(e) {
	let { excludeTags: t } = e;
	if (t.size === 0) return {
		source: e.source,
		target: e.target
	};
	let n = (e) => t.has(e.record.tagName) ? !1 : !e.ancestors.some((e) => t.has(e.tagName));
	return {
		source: Er(e.source, n),
		target: Er(e.target, n)
	};
}
function Er(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let [r, i] of e) t(i) && n.set(r, i);
	return n;
}
//#endregion
//#region src/dialecte/merge/query/report/build-report.ts
function Dr(e) {
	let { profile: t, attributeDefault: n } = e, r = Or(e), i = lr({
		source: r.source,
		target: r.target,
		attributeDefault: n
	}), a = i.reduce((e, t) => (t.changeStatus !== "unchanged" && (e[t.changeStatus] += 1, e.total += 1), e), {
		added: 0,
		removed: 0,
		modified: 0,
		total: 0
	}), o = fr({
		flatNodes: i,
		sourceMap: r.source,
		targetMap: r.target
	});
	return {
		profileId: t.id,
		stats: a,
		tree: o,
		...r.anchor ? { anchor: r.anchor } : {}
	};
}
function Or(e) {
	let { profile: t, source: n, target: r } = e;
	return t.scope.kind === "anchored-function" ? xr({
		source: n,
		target: r,
		anchor: t.scope.anchor
	}) : Tr({
		source: n,
		target: r,
		excludeTags: t.scope.excludeTags
	});
}
//#endregion
//#region src/dialecte/merge/query/identity/build-identity-map.ts
var kr = {
	Substation: "substation",
	Line: "substation",
	IED: "ied",
	Communication: "communication",
	DataTypeTemplates: "datatypetemplates",
	Process: "dataflow"
}, Ar = new Set([
	"LNodeType",
	"DOType",
	"DAType",
	"EnumType"
]);
function jr(e, t) {
	for (let e of t) {
		let t = kr[e.tagName];
		if (t) return t;
	}
	return kr[e.tagName] ?? "other";
}
function Mr(e, t) {
	return e.attributes.find((e) => e.name === t)?.value;
}
function Nr(e) {
	let { record: t, ancestry: n, sectionScope: r, buildPath: i } = e, a = i(t, n), o = typeof a == "string" ? a : a?.path ?? null;
	if (o) return `${r}:${o}`;
	if (Ar.has(t.tagName)) {
		let e = Mr(t, "id");
		if (e) return `${r}:${t.tagName}:${e}`;
	}
	let s = Mr(t, "name");
	if (s) return `${r}:${t.tagName}:${s}`;
	if (Fr(t, n)) return `${r}:${t.tagName}`;
	let c = Pr(t, n);
	return c ? `${r}:${c}` : `${r}:${t.tagName}:db-id:${t.id}`;
}
function Pr(e, t) {
	let n = [...t.map((e) => e.tagName), e.tagName].filter(Boolean);
	return n.length > 0 ? n.join("/") : null;
}
function Fr(e, t) {
	return t.length === 0 || t.length === 1 && t[0].tagName === "SCL";
}
function Ir(e) {
	let { records: t, getAncestry: n, buildPath: r } = e, i = /* @__PURE__ */ new Map();
	for (let e of t) {
		let t = n(e), a = jr(e, t), o = r(e, t), s = typeof o == "object" && !!o && o.bridged === !0, c = Nr({
			record: e,
			ancestry: t,
			sectionScope: a,
			buildPath: () => o
		}), l = {
			identity: c,
			record: e,
			ancestors: t,
			sectionScope: a,
			bridged: s
		};
		if (i.has(c)) {
			let e = 1, t = `${c}[${e}]`;
			for (; i.has(t);) e += 1, t = `${c}[${e}]`;
			i.set(t, {
				...l,
				identity: t
			});
			continue;
		}
		i.set(c, l);
	}
	return i;
}
//#endregion
//#region src/dialecte/merge/query/identity/document-identity-maps.ts
async function Lr(e, t, n = "template-uuid") {
	let r = await Br(t), i = await Br(e);
	if (n === "template-uuid") {
		let e = zr(r.records, "templateUuid"), t = Vr(r, (e) => {
			let t = Rr(e, "templateUuid");
			return t ? {
				path: `uuid:${t}`,
				bridged: !0
			} : null;
		});
		return [Vr(i, (t) => {
			let n = Rr(t, "uuid");
			return n && e.has(n) ? {
				path: `uuid:${n}`,
				bridged: !0
			} : null;
		}), t];
	}
	if (n === "same-uuid") {
		let e = zr(i.records, "uuid"), t = zr(r.records, "uuid"), n = new Set([...e].filter((e) => t.has(e))), a = (e) => {
			let t = Rr(e, "uuid");
			return t && n.has(t) ? {
				path: `uuid:${t}`,
				bridged: !0
			} : null;
		};
		return [Vr(i, a), Vr(r, a)];
	}
	return [Vr(i, () => null), Vr(r, () => null)];
}
function Rr(e, t) {
	return e.attributes.find((e) => e.name === t)?.value;
}
function zr(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = Rr(r, t);
		e && n.add(e);
	}
	return n;
}
async function Br(e) {
	let t = await Gr(e), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
	for (let i of t) {
		if (!i.id || !i.tagName) continue;
		let t = {
			tagName: i.tagName,
			id: i.id
		};
		try {
			let a = await e.findAncestors(t, { order: "top-down" });
			n.set(i.id, a);
			let o = await e.reference.buildElementPath(t);
			r.set(i.id, o?.path ?? null);
		} catch {}
	}
	return {
		records: t,
		ancestryCache: n,
		pathCache: r
	};
}
function Vr(e, t) {
	let { records: n, ancestryCache: r, pathCache: i } = e;
	return Ir({
		records: n,
		getAncestry: (e) => r.get(e.id) ?? [],
		buildPath: (e) => t(e) || Wr(e, r.get(e.id) ?? []) || Hr(e, r.get(e.id) ?? [], t) || (i.get(e.id) ?? null)
	});
}
function Hr(e, t, n) {
	for (let r = t.length - 1; r >= 0; r--) {
		let i = n(t[r]);
		if (!i) continue;
		let a = [...t.slice(r + 1), e].map(Ur);
		return {
			path: `${i.path}/${a.join("/")}`,
			bridged: !1
		};
	}
	return null;
}
function Ur(e) {
	let t = e.attributes.find((e) => e.name === "name")?.value;
	return t ? `${e.tagName}:${t}` : e.tagName;
}
function Wr(e, t) {
	for (let n = t.length - 1; n >= 0; n--) {
		let r = t[n].attributes.find((e) => e.name === "id")?.value;
		if (!r) continue;
		let i = e.attributes.find((e) => e.name === "name")?.value ?? e.attributes.find((e) => e.name === "ord")?.value;
		return i ? `${r}/${i}` : null;
	}
	return null;
}
async function Gr(e) {
	let t = await e.getRoot(), n = await e.getTree(t);
	if (!n) return [];
	let r = [];
	return Kr(n, r), r;
}
function Kr(e, t) {
	let { tree: n, ...r } = e;
	if (t.push(r), n) for (let e of n) Kr(e, t);
}
//#endregion
//#region src/dialecte/merge/query/groups/reference-links.ts
var qr = [{
	refTag: "FunctionCatRef",
	uuidAttribute: "functionUuid",
	pathAttribute: "function"
}, {
	refTag: "FunctionRef",
	uuidAttribute: "functionUuid",
	pathAttribute: "function"
}];
//#endregion
//#region src/dialecte/merge/query/groups/build-decision-groups.ts
function Jr(e) {
	let { report: t, profile: n, entries: r } = e, i = [], a = (e, t) => {
		let r = t;
		t && e.changeStatus !== "unchanged" ? t.members.push(e.identity) : e.changeStatus !== "unchanged" && (r = {
			id: e.identity,
			changeStatus: e.changeStatus,
			members: [e.identity],
			companions: [],
			suggestedAction: Zr(n, e)
		}, i.push(r), e.changeStatus === "modified" && (r = t));
		for (let t of e.children) a(t, r);
	};
	for (let e of t.tree) a(e, null);
	if (!r) return i;
	let o = Xr(i, r);
	return Yr(o, t, r), o;
}
function Yr(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i = (e) => {
		r.set(e.identity, e), e.children.forEach(i);
	};
	t.tree.forEach(i);
	let a = (e, t) => e.attributes.find((e) => e.name === t)?.value;
	for (let t of e) for (let e of t.members) {
		let i = r.get(e), o = i?.attributes?.find((e) => e.name === "name" && e.before && e.after);
		if (!i || !o) continue;
		let s = n.target.get(e), c = s ? a(s.record, "uuid") : void 0;
		if (c) for (let [e, i] of n.target) {
			let n = qr.find((e) => e.refTag === i.record.tagName);
			if (!n || a(i.record, n.uuidAttribute) !== c || r.has(e)) continue;
			let s = a(i.record, n.pathAttribute);
			if (!s) continue;
			let l = s.split("/");
			if (l[l.length - 1] !== o.before) continue;
			let u = [...l.slice(0, -1), o.after].join("/");
			t.companions.push({
				identity: e,
				tagName: i.record.tagName,
				attribute: n.pathAttribute,
				before: s,
				after: u,
				reason: "reference-path"
			});
		}
	}
}
function Xr(e, t) {
	let n = (e) => (t.source.get(e) ?? t.target.get(e))?.record, r = (e, t) => n(e)?.attributes.find((e) => e.name === t)?.value, i = new Set(qr.map((e) => e.refTag)), a = /* @__PURE__ */ new Map();
	for (let t of e) {
		let e = n(t.id);
		if (!e || i.has(e.tagName)) continue;
		let o = r(t.id, "uuid");
		o && a.set(o, t);
	}
	let o = /* @__PURE__ */ new Set();
	for (let t of e) {
		let e = n(t.id);
		if (!e) continue;
		let i = qr.find((t) => t.refTag === e.tagName);
		if (!i) continue;
		let s = r(t.id, i.uuidAttribute);
		if (!s) continue;
		let c = a.get(s);
		!c || c === t || (c.members.push(...t.members), o.add(t));
	}
	return e.filter((e) => !o.has(e));
}
function Zr(e, t) {
	return t.changeStatus === "removed" || (e.strategies[t.tagName] ?? e.fallbackStrategy) === "keep-target" ? "skip" : "accept";
}
//#endregion
//#region src/dialecte/merge/query/build-merge-report.ts
async function Qr(e, t) {
	let { sourceQuery: n, profile: r } = t, [i, a] = await Lr(n, e, r.identityMode), o = Dr({
		profile: r,
		source: i,
		target: a,
		attributeDefault: $r
	}), s = Jr({
		report: o,
		profile: r,
		entries: {
			source: i,
			target: a
		}
	}), c = r.scope.kind === "anchored-function" ? ti(i, a) : void 0;
	return {
		...o,
		groups: s,
		sourceMap: i,
		targetMap: a,
		identityMode: r.identityMode,
		...c ? { templateVersion: c } : {}
	};
}
function $r(e, t) {
	let n = (Pn.definition[e]?.attributes?.details)?.[t]?.default;
	return typeof n == "string" ? n : void 0;
}
function ei(e, t, n) {
	for (let r of e.values()) if (r.record.tagName === t) return r.record.attributes.find((e) => e.name === n)?.value;
}
function ti(e, t) {
	let n = ei(e, "Header", "uuid");
	if (n) for (let r of t.values()) {
		if (r.record.tagName !== "SclFileReference" || r.record.attributes.find((e) => e.name === "fileUuid")?.value !== n) continue;
		let t = (e) => r.record.attributes.find((t) => t.name === e)?.value;
		return {
			from: {
				version: t("version"),
				revision: t("revision")
			},
			to: {
				version: ei(e, "Header", "version"),
				revision: ei(e, "Header", "revision")
			}
		};
	}
}
//#endregion
//#region src/dialecte/merge/query/index.ts
var ni = /* @__PURE__ */ h({ buildMergeReport: () => Qr });
//#endregion
//#region src/dialecte/merge/transaction/plan-operations.ts
function ri(e) {
	let { report: t, decisions: n, groups: r } = e, i = {
		creates: [],
		updates: [],
		deletes: []
	}, a = /* @__PURE__ */ new Map();
	for (let e of r ?? []) for (let t of e.members) a.set(t, e.id);
	let o = (e) => n.get(a.get(e) ?? e) === "accept", s = (e) => r ? (a.get(e) ?? e) === e : !0, c = (e, t) => {
		if (e.changeStatus === "added" || e.changeStatus === "removed") {
			s(e.identity) && o(e.identity) && (e.changeStatus === "added" ? i.creates.push({
				sourceIdentity: e.identity,
				targetParentIdentity: t
			}) : i.deletes.push({ identity: e.identity }));
			for (let n of e.children) c(n, t);
			return;
		}
		e.changeStatus === "modified" && o(e.identity) && i.updates.push(ii(e));
		for (let t of e.children) c(t, e.identity);
	};
	for (let e of t.tree) c(e, null);
	for (let e of r ?? []) if (n.get(e.id) === "accept") for (let t of e.companions) i.updates.push({
		identity: t.identity,
		attributes: { [t.attribute]: t.after ?? null }
	});
	return i;
}
function ii(e) {
	let t = {};
	for (let n of e.attributes ?? []) t[n.name] = n.after ?? null;
	let n = {
		identity: e.identity,
		attributes: t
	};
	return e.valueChange && e.valueChange.after !== void 0 && (n.value = e.valueChange.after), n;
}
//#endregion
//#region src/dialecte/merge/transaction/apply-merge-plan.ts
var ai = new Set([
	"Function",
	"SubFunction",
	"FunctionCategory",
	"SubCategory",
	"LNode"
]), oi = new Set([
	"LNodeType",
	"DOType",
	"DAType",
	"EnumType"
]);
async function si(e, t) {
	let { sourceQuery: n, report: r, decisions: i, hitem: a } = t, { sourceMap: o, targetMap: s } = r, c = ri({
		report: r,
		decisions: i,
		groups: r.groups
	}), l = r.anchor?.matched ? _i(c, r) : [], u = new Set(l.map((e) => e.typeId)), d = (e) => {
		if (!e) return !1;
		let t = s.get(e);
		if (!t) return !1;
		let n = gi(t);
		return n !== null && u.has(n);
	};
	c.updates = c.updates.filter((e) => !d(e.identity)), c.creates = c.creates.filter((e) => !d(e.targetParentIdentity));
	let f = {
		creates: [],
		updates: [],
		deletes: []
	}, p = 0, m = await e.getRoot(), h = m ? ci(m) : void 0, g = fi(c.deletes, s);
	for (let e of g.retained) f.deletes.push({
		identity: e,
		reason: "type still referenced outside the merge scope — retained"
	});
	for (let t of g.deletes) {
		let n = s.get(t.identity)?.record;
		if (!n) {
			f.deletes.push({
				identity: t.identity,
				reason: "identity not in target map"
			});
			continue;
		}
		await e.delete(ci(n));
	}
	for (let t of c.updates) {
		let n = s.get(t.identity)?.record;
		if (!n) {
			f.updates.push({
				identity: t.identity,
				reason: "identity not in target map"
			});
			continue;
		}
		await e.update(ci(n), {
			attributes: t.attributes,
			...t.value === void 0 ? {} : { value: t.value }
		});
	}
	for (let t of c.creates) {
		let i = o.get(t.sourceIdentity)?.record;
		if (!i) {
			f.creates.push({
				sourceIdentity: t.sourceIdentity,
				reason: "identity not in source map"
			});
			continue;
		}
		if (oi.has(i.tagName)) continue;
		let a;
		if (t.targetParentIdentity !== null) {
			let e = s.get(t.targetParentIdentity)?.record;
			if (!e) {
				f.creates.push({
					sourceIdentity: t.sourceIdentity,
					reason: `parent identity not in target map: ${t.targetParentIdentity}`
				});
				continue;
			}
			a = ci(e);
		} else if (h) a = h;
		else {
			f.creates.push({
				sourceIdentity: t.sourceIdentity,
				reason: "target document root could not be resolved"
			});
			continue;
		}
		let c = await n.getTree(ci(i));
		if (!c) {
			f.creates.push({
				sourceIdentity: t.sourceIdentity,
				reason: "sourceQuery.getTree returned no subtree"
			});
			continue;
		}
		try {
			let t = await e.deepClone(a, c);
			if (ai.has(i.tagName) && t?.record) {
				let n = i.attributes.find((e) => e.name === "uuid")?.value;
				n && r.identityMode === "template-uuid" ? await e.update(t.record, { attributes: { templateUuid: n } }) : n && r.identityMode === "same-uuid" && await e.update(t.record, { attributes: { uuid: n } });
			}
		} catch (e) {
			f.creates.push({
				sourceIdentity: t.sourceIdentity,
				reason: `deepClone threw: ${e instanceof Error ? e.message : String(e)}`
			});
		}
	}
	for (let t of l) {
		let r = mi(o, t.typeId), i = hi(s, "DataTypeTemplates");
		if (!r || !i) {
			f.creates.push({
				sourceIdentity: t.typeId,
				reason: "shared-type redirect: source type or DataTypeTemplates not found"
			});
			continue;
		}
		let a = await n.getTree(ci(r));
		if (!a) {
			f.creates.push({
				sourceIdentity: t.typeId,
				reason: "shared-type redirect: source subtree unavailable"
			});
			continue;
		}
		let c = structuredClone(a), l = c.attributes.find((e) => e.name === "id");
		l && (l.value = t.newId), await e.deepClone(ci(i), c);
		for (let n of t.inScopeReferrers) await e.update(ci(n.record), { attributes: { [n.attribute]: t.newId } });
	}
	let _ = li(c, o), v = e.dataModel;
	if (_.length > 0 && typeof v?.extract == "function") {
		let e = [];
		for (let t of _) {
			let r = await n.getRecord(t);
			r && e.push(r);
		}
		e.length > 0 && (await v.extract({
			sourceQuery: n,
			records: e
		}), p = e.length);
	}
	if (r.identityMode === "template-uuid") {
		let t = (e) => {
			for (let t of ui(r.sourceMap)) if (t.record.tagName === "Header") return t.record.attributes.find((t) => t.name === e)?.value;
		}, n = t("uuid"), i = t("version"), a = t("revision");
		if (n && (i !== void 0 || a !== void 0)) for (let t of ui(r.targetMap)) t.record.tagName === "SclFileReference" && t.record.attributes.find((e) => e.name === "fileUuid")?.value === n && await e.update(ci(t.record), { attributes: {
			...i === void 0 ? {} : { version: i },
			...a === void 0 ? {} : { revision: a }
		} });
	}
	return await e.history.addEntry({
		filename: a.filename,
		header: {
			fileType: a.fileType,
			version: "increment",
			tool: "SET merging-editor"
		},
		item: {
			who: a.who ?? "merging-editor",
			what: a.what,
			why: a.why
		}
	}), {
		skipped: f,
		dataModelImportedFor: p,
		plan: {
			creates: c.creates.length,
			updates: c.updates.length,
			deletes: c.deletes.length
		}
	};
}
function ci(e) {
	return {
		tagName: e.tagName,
		id: e.id
	};
}
function li(e, t) {
	let n = /* @__PURE__ */ new Map(), r = (e) => {
		e && (e.tagName !== "LNode" && e.tagName !== "LN" || n.set(e.id, ci(e)));
	};
	for (let n of e.creates) r(t.get(n.sourceIdentity)?.record);
	for (let n of e.updates) r(t.get(n.identity)?.record);
	return [...n.values()];
}
function ui(e) {
	return e.values();
}
var di = ["lnType", "type"];
function fi(e, t) {
	let n = new Map(e.map((e) => [e.identity, e])), r = [], i = (e) => t.get(e)?.record.id, a = (e) => {
		let t = new Set([...n.keys()].map(i).filter((e) => e !== void 0));
		return t.has(e.record.id) ? !1 : e.ancestors.every((e) => !t.has(e.id));
	}, o = !0;
	for (; o;) {
		o = !1;
		for (let [e] of n) {
			let i = t.get(e)?.record;
			if (!i || !oi.has(i.tagName)) continue;
			let s = i.attributes.find((e) => e.name === "id")?.value;
			if (s && [...t.values()].some((e) => e.record.attributes.some((e) => di.includes(e.name) && e.value === s) && a(e))) {
				n.delete(e), r.push(e), o = !0;
				break;
			}
		}
	}
	return {
		deletes: [...n.values()],
		retained: r
	};
}
function pi(e, t) {
	return e.attributes.find((e) => e.name === t)?.value;
}
function mi(e, t) {
	for (let n of e.values()) if (oi.has(n.record.tagName) && pi(n.record, "id") === t) return n.record;
}
function hi(e, t) {
	for (let n of e.values()) if (n.record.tagName === t) return n.record;
}
function gi(e) {
	if (oi.has(e.record.tagName)) return pi(e.record, "id") ?? null;
	for (let t = e.ancestors.length - 1; t >= 0; t--) if (oi.has(e.ancestors[t].tagName)) return pi(e.ancestors[t], "id") ?? null;
	return null;
}
function _i(e, t) {
	let { targetMap: n } = t, r = new Set(t.anchor?.anchoredFunctionIds ?? []), i = new Set(t.anchor?.inScopeTypeIds ?? []), a = /* @__PURE__ */ new Set(), o = (e) => {
		if (!e) return;
		let t = n.get(e);
		if (!t) return;
		let r = gi(t);
		r && a.add(r);
	};
	for (let t of e.updates) o(t.identity);
	for (let t of e.creates) o(t.targetParentIdentity);
	let s = /* @__PURE__ */ new Set();
	for (let e of n.values()) if (oi.has(e.record.tagName)) {
		let t = pi(e.record, "id");
		t && s.add(t);
	}
	let c = [];
	for (let e of a) {
		let t = [], a = !1;
		for (let o of n.values()) for (let n of ["lnType", "type"]) pi(o.record, n) === e && ((n === "lnType" ? o.ancestors.some((e) => r.has(e.id)) : (() => {
			let e = gi(o);
			return e !== null && i.has(e);
		})()) ? t.push({
			record: o.record,
			attribute: n
		}) : a = !0);
		if (!a) continue;
		let o = 2, l = `${e}_v${o}`;
		for (; s.has(l);) o += 1, l = `${e}_v${o}`;
		s.add(l), c.push({
			typeId: e,
			newId: l,
			inScopeReferrers: t
		});
	}
	return c;
}
//#endregion
//#region src/dialecte/merge/transaction/index.ts
var vi = /* @__PURE__ */ h({ applyMergePlan: () => si });
//#endregion
//#region src/merge-session/merge-session.service.ts
async function yi(e) {
	return Qr(e.targetDocument.query, {
		sourceQuery: e.sourceDocument.query,
		profile: e.profile
	});
}
async function bi(e) {
	let t;
	return {
		prepared: await e.targetDocument.prepare(async (n) => {
			t = await si(n, {
				sourceQuery: e.sourceDocument.query,
				report: e.report,
				decisions: e.decisions,
				hitem: {
					filename: e.sourceFileName,
					fileType: e.profile.targetFileTypes.values().next().value ?? "SSD",
					what: `Merge applied from ${e.sourceFileName} (${e.profile.id})`,
					why: "merging-editor session"
				}
			});
		}),
		skipped: t?.skipped ?? {
			creates: [],
			updates: [],
			deletes: []
		},
		dataModelImportedFor: t?.dataModelImportedFor ?? 0,
		plan: t?.plan ?? {
			creates: 0,
			updates: 0,
			deletes: 0
		}
	};
}
//#endregion
//#region src/merge-session/report.store.ts
var xi = se("merging-editor/report", () => {
	let e = y(null), t = y([]), n = j(() => {
		if (!e.value) return [];
		let n = Si(e.value.tree);
		return t.value.map((t) => Ci(t, n, e.value));
	});
	async function r(n) {
		let r = await yi(n);
		e.value = r, t.value = r.groups;
	}
	function i() {
		e.value = null, t.value = [];
	}
	return {
		report: e,
		groups: t,
		groupViews: n,
		build: r,
		clear: i
	};
});
function Si(e) {
	let t = /* @__PURE__ */ new Map(), n = (e) => {
		t.set(e.identity, e), e.children.forEach(n);
	};
	return e.forEach(n), t;
}
function Ci(e, t, n) {
	let r = t.get(e.id), i = n.targetMap.get(e.id) ?? n.sourceMap.get(e.id), a = wi(i), o = i ? Ti(i, "name") ?? r?.label : r?.label;
	return {
		groupId: e.id,
		changeStatus: r?.changeStatus ?? "modified",
		tagName: r?.tagName ?? i?.record.tagName ?? "",
		label: r?.label ?? e.id,
		path: [...a.map((e) => e.name), o].filter(Boolean).join("/"),
		pathSegments: a,
		linkedCount: e.members.length - 1 + e.companions.length,
		section: r?.sectionScope ?? i?.sectionScope ?? "other"
	};
}
function wi(e) {
	return e ? e.ancestors.map((e) => ({
		tagName: e.tagName,
		name: e.attributes.find((e) => e.name === "name")?.value ?? ""
	})).filter((e) => e.name !== "") : [];
}
function Ti(e, t) {
	return e.record.attributes.find((e) => e.name === t)?.value;
}
//#endregion
//#region src/merge-session/decision-state.ts
function Ei(e) {
	return new Map(e.map((e) => [e.id, {
		action: e.suggestedAction,
		decided: !1
	}]));
}
function Di(e, t, n) {
	if (!e.has(t)) throw Error(`unknown decision group: ${t}`);
	e.set(t, {
		action: n,
		decided: !0
	});
}
function Oi(e) {
	return [...e.values()].every((e) => e.decided);
}
function ki(e) {
	let t = 0, n = 0, r = 0;
	for (let i of e.values()) i.action === "accept" ? t += 1 : n += 1, i.decided && (r += 1);
	return {
		accept: t,
		skip: n,
		decided: r,
		total: e.size
	};
}
function Ai(e) {
	return new Map([...e.entries()].map(([e, t]) => [e, t.action]));
}
//#endregion
//#region src/merge-session/resolution.store.ts
var ji = se("merging-editor/resolution", () => {
	let e = y(null), t = o(0), n = o("idle"), r = y(null), i = o(null), a = j(() => (t.value, e.value ? new Map(e.value) : /* @__PURE__ */ new Map())), s = j(() => (t.value, e.value ? Oi(e.value) : !1)), c = j(() => (t.value, e.value ? ki(e.value) : {
		accept: 0,
		skip: 0,
		decided: 0,
		total: 0
	}));
	function l(a) {
		e.value = Ei(a), t.value += 1, n.value = "idle", r.value = null, i.value = null;
	}
	function u(n, r) {
		e.value && (Di(e.value, n, r), t.value += 1);
	}
	function d() {
		if (e.value) {
			for (let [t, n] of e.value) n.decided || Di(e.value, t, n.action);
			t.value += 1;
		}
	}
	async function f(t) {
		if (e.value) {
			i.value = null;
			try {
				r.value = await bi({
					...t,
					decisions: Ai(e.value)
				}), n.value = "confirming";
			} catch (e) {
				i.value = e instanceof Error ? e.message : String(e), n.value = "error";
			}
		}
	}
	async function p() {
		if (r.value) {
			n.value = "committing";
			try {
				await r.value.prepared.commit(), n.value = "applied";
			} catch (e) {
				i.value = e instanceof Error ? e.message : String(e), n.value = "error";
			}
		}
	}
	function m() {
		r.value?.prepared.discard(), r.value = null, n.value = "idle";
	}
	function h() {
		e.value = null, t.value += 1, r.value = null, n.value = "idle", i.value = null;
	}
	return {
		resolutions: a,
		isReady: s,
		summary: c,
		applyPhase: n,
		prepared: r,
		error: i,
		init: l,
		setAction: u,
		decideAllWithDefaults: d,
		prepareApply: f,
		confirmApply: p,
		cancelApply: m,
		clear: h
	};
}), Mi = se("merging-editor/session", () => {
	let e = xi(), t = ji(), n = y(null), r = y(null), i = o(null), a = o(null), s = o("idle"), c = o(null), l = j(() => {
		if (!i.value || !a.value) return null;
		let e = i.value.toUpperCase(), t = a.value.toUpperCase();
		return Object.values(Xt).find((n) => n.sourceFileTypes.has(e) && n.targetFileTypes.has(t)) ?? null;
	}), u = j(() => n.value !== null && r.value !== null && l.value !== null && s.value !== "loading");
	async function d(e) {
		c.value = null;
		let t = await Ut(e);
		n.value = {
			source: {
				kind: "temp",
				documentId: t.documentId
			},
			document: t.document
		}, i.value = Ni(e.name);
	}
	async function f(e) {
		c.value = null;
		let t = Ht(e);
		n.value = {
			source: {
				kind: "project",
				documentId: e
			},
			document: t
		}, i.value = await Gt(e) ?? null;
	}
	async function p(t, n) {
		r.value = {
			source: {
				kind: "active",
				documentId: t
			},
			document: n
		}, a.value = await Gt(t) ?? null, e.clear(), s.value === "review" && (s.value = "idle");
	}
	function m() {
		r.value = null, a.value = null, e.clear(), s.value === "review" && (s.value = "idle");
	}
	async function h() {
		if (!(!n.value || !r.value || !l.value)) {
			s.value = "loading", c.value = null;
			try {
				await e.build({
					profile: l.value,
					sourceDocument: n.value.document,
					targetDocument: r.value.document
				}), e.report && t.init(e.report.groups), s.value = "review";
			} catch (e) {
				c.value = e instanceof Error ? e.message : String(e), s.value = "error";
			}
		}
	}
	async function g() {
		if (n.value?.source.kind === "temp") try {
			await Wt(n.value.source.documentId);
		} catch {}
		n.value = null, i.value = null, e.clear(), t.clear(), s.value = "idle", c.value = null;
	}
	return {
		sourceSlot: n,
		targetSlot: r,
		sourceFileType: i,
		targetFileType: a,
		profile: l,
		phase: s,
		error: c,
		canStartReview: u,
		loadSourceFile: d,
		loadSourceFromProject: f,
		setActiveTarget: p,
		clearTarget: m,
		startReview: h,
		endSession: g
	};
});
function Ni(e) {
	let t = e.split(".").pop();
	return t ? t.toLowerCase() : null;
}
//#endregion
//#region src/merge-session/components/session-view.vue?vue&type=script&setup=true&lang.ts
var Pi = {
	class: "flex flex-col gap-4 p-4 max-w-3xl",
	"data-testid": "session-view"
}, Fi = { class: "flex gap-4 items-stretch" }, Ii = { class: "flex-1 card bg-base-200 p-3 flex flex-col justify-center gap-1" }, Li = { class: "font-mono text-sm truncate" }, Ri = { class: "card bg-base-200 p-3 flex flex-col justify-center gap-1 min-w-44" }, zi = { class: "flex gap-2 items-center" }, Bi = ["disabled"], Vi = ["disabled"], Hi = {
	key: 0,
	class: "loading loading-spinner loading-sm"
}, Ui = {
	key: 0,
	class: "alert alert-error text-sm",
	"data-testid": "session-error"
}, Wi = /* @__PURE__ */ re({
	__name: "session-view",
	setup(e) {
		let t = Mi(), n = j(() => t.sourceSlot?.source.documentId ?? void 0), i = j(() => t.targetSlot?.source.documentId ?? "(no active file)"), a = j(() => t.profile ? t.profile.id : t.sourceFileType && t.targetFileType ? `no profile for ${t.sourceFileType.toUpperCase()} → ${t.targetFileType.toUpperCase()}` : "select a source file");
		return (e, o) => (r(), P("section", Pi, [
			F("header", Fi, [
				O(Y, {
					label: "Source (incoming)",
					loaded: c(t).sourceSlot !== null,
					"loaded-name": n.value,
					onFile: o[0] ||= (e) => c(t).loadSourceFile(e)
				}, null, 8, ["loaded", "loaded-name"]),
				F("div", Ii, [o[3] ||= F("span", { class: "text-xs opacity-70" }, "Target (active file — changes commit here)", -1), F("span", Li, C(i.value), 1)]),
				F("div", Ri, [o[4] ||= F("span", { class: "text-xs opacity-70" }, "Use case", -1), F("span", {
					class: S(["font-mono text-sm", c(t).profile ? "text-success" : "opacity-60"]),
					"data-testid": "profile-hint"
				}, C(a.value), 3)])
			]),
			F("div", zi, [
				F("button", {
					class: "btn btn-primary btn-sm",
					disabled: !c(t).canStartReview,
					"data-testid": "start-review",
					onClick: o[1] ||= (e) => c(t).startReview()
				}, " Compare ", 8, Bi),
				F("button", {
					class: "btn btn-ghost btn-sm",
					disabled: c(t).phase === "loading",
					onClick: o[2] ||= (e) => c(t).endSession()
				}, " Reset ", 8, Vi),
				c(t).phase === "loading" ? (r(), P("span", Hi)) : D("", !0)
			]),
			c(t).error ? (r(), P("div", Ui, C(c(t).error), 1)) : D("", !0)
		]));
	}
}), Gi = {
	UNKNOWN: {
		code: "D0001",
		message: "An unknown error occurred"
	},
	ASSERTION_FAILED: {
		code: "D0002",
		message: "Assertion failed"
	},
	STORE_CONNECTION_FAILED: {
		code: "D1001",
		message: "Failed to open database"
	},
	STORE_COMMIT_FAILED: {
		code: "D1002",
		message: "Failed to commit changes"
	},
	STORE_RECORD_NOT_FOUND: {
		code: "D1003",
		message: "Record not found in database"
	},
	STORE_BULK_ADD_FAILED: {
		code: "D1004",
		message: "Failed to add records to database"
	},
	STORE_BULK_UPDATE_FAILED: {
		code: "D1005",
		message: "Failed to update records in database"
	},
	STORE_DELETE_FAILED: {
		code: "D1006",
		message: "Failed to delete records from database"
	},
	STORE_NOT_WRITABLE: {
		code: "D1007",
		message: "Store is not writable"
	},
	STORE_BLOB_NOT_FOUND: {
		code: "D1008",
		message: "Blob not found"
	},
	ELEMENT_NOT_FOUND: {
		code: "D2001",
		message: "Element not found"
	},
	ROOT_NOT_FOUND: {
		code: "D2002",
		message: "Root element not found"
	},
	DUPLICATE_ID: {
		code: "D2003",
		message: "Duplicate element ID"
	},
	ELEMENT_TAGNAME_MISMATCH: {
		code: "D2004",
		message: "Element tagName does not match the expected type"
	},
	INVALID_PARENT_CHILD: {
		code: "D3001",
		message: "Invalid parent-child relationship"
	},
	INVALID_ATTRIBUTE: {
		code: "D3002",
		message: "Invalid attribute for element"
	},
	PROTECTED_ROOT: {
		code: "D3003",
		message: "Root element cannot be deleted"
	},
	REQUIRED_ATTRIBUTE_MISSING: {
		code: "D3004",
		message: "Required attribute is missing"
	},
	UNIQUE_CONSTRAINT_VIOLATION: {
		code: "D3005",
		message: "Value is already used within its scope"
	},
	ALREADY_COMMITTED: {
		code: "D4001",
		message: "Transaction already committed"
	},
	ALREADY_FAILED: {
		code: "D4002",
		message: "Transaction already failed"
	},
	DATABASE_COMMIT_ERROR: {
		code: "D4003",
		message: "An error occurred while committing changes to the database"
	},
	CONCURRENT_TRANSACTION: {
		code: "D4004",
		message: "A transaction is already in progress. Concurrent transactions are not supported yet — serialize them or implement a transaction queue."
	},
	EXPORT_ROOT_NOT_FOUND: {
		code: "D5001",
		message: "Root element not found in records during export"
	},
	EXPORT_ORPHAN_CHILD_REF: {
		code: "D5002",
		message: "Parent references non-existent child record"
	},
	PARSE_ERROR: {
		code: "D5003",
		message: "Failed to parse XML"
	},
	EXTENSION_METHOD_COLLISION: {
		code: "D6001",
		message: "Extension method name collision detected"
	},
	UNKNOWN_CONFIG_KEY: {
		code: "D7001",
		message: "Unknown config key"
	},
	DOCUMENT_NOT_REGISTERED: {
		code: "D7002",
		message: "Document not registered in project"
	},
	PROJECT_NOT_OPENED: {
		code: "D7003",
		message: "Project not opened"
	},
	BLOB_NOT_FOUND: {
		code: "D7004",
		message: "Blob not found in store"
	}
};
function Ki(e, t) {
	let n = Gi[e], r = {
		code: n.code,
		key: e,
		message: t.message ?? n.message,
		detail: t.detail,
		method: qi((/* @__PURE__ */ Error()).stack),
		ref: t.ref,
		cause: t.cause
	}, i = Error(t.detail);
	throw i.cause = r, i;
}
function qi(e) {
	if (!e) return "unknown";
	let t = e.split("\n").slice(1).find((e) => !/\b(throwDialecteError|assert)\b/.test(e));
	if (!t) return "unknown";
	let n = t.match(/\bat\s+(\S+)\s+\(([^)]+)\)/), r = n?.[1], i = n?.[2];
	if (!i || !r) return r ?? "unknown";
	let a = i.match(/(\w[\w-]*\/src\/[^?:]+)/);
	return a ? `${a[1].replace(/\.[^/.]+$/, "")}::${r}` : r;
}
function Ji(e, t) {
	if (e) return;
	let { detail: n, key: r = "ASSERTION_FAILED", ref: i } = t;
	Ki(r, {
		detail: n,
		ref: i
	});
}
//#endregion
//#region node_modules/.pnpm/@septkit+ui@0.0.33_daisyui@5.5.19_tailwindcss@4.2.2_typescript@5.8.3_vite@8.0.9_@types+node@25.6.0_jiti@2.6.1_/node_modules/@septkit/ui/dist/external/.pnpm/@dialecte_core@0.2.19/node_modules/@dialecte/core/dist/helpers.js
`${{
	uri: "http://dialecte.dev/XML/DEV",
	prefix: "dev"
}.prefix}`;
var Yi = {
	uri: "http://www.w3.org/2001/XMLSchema-instance",
	prefix: "xsi"
};
`${Yi.prefix}${Yi.uri}`;
//#endregion
//#region node_modules/.pnpm/@septkit+ui@0.0.33_daisyui@5.5.19_tailwindcss@4.2.2_typescript@5.8.3_vite@8.0.9_@types+node@25.6.0_jiti@2.6.1_/node_modules/@septkit/ui/dist/external/.pnpm/@dialecte_core@0.2.19/node_modules/@dialecte/core/dist/project-B6LoveZA.js
var Xi = Object.create, Zi = Object.defineProperty, Qi = Object.getOwnPropertyDescriptor, $i = Object.getOwnPropertyNames, ea = Object.getPrototypeOf, ta = Object.prototype.hasOwnProperty, na = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), ra = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = $i(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !ta.call(e, s) && s !== n && Zi(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = Qi(t, s)) || r.enumerable
	});
	return e;
}, ia = (e, t, n) => (n = e == null ? {} : Xi(ea(e)), ra(t || !e || !e.__esModule ? Zi(n, "default", {
	value: e,
	enumerable: !0
}) : n, e));
function aa(e, t) {
	if (!e) return {};
	let n = {};
	for (let r of Object.keys(e)) {
		let i = e[r], a = {};
		for (let e of Object.keys(i)) {
			let n = i[e];
			a[e] = (...e) => n(t, ...e);
		}
		n[r] = a;
	}
	return n;
}
var oa = /* @__PURE__ */ ia((/* @__PURE__ */ na(((e, t) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self).Dexie = r();
	})(e, function() {
		var e = function(t, n) {
			return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
				e.__proto__ = t;
			} || function(e, t) {
				for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
			})(t, n);
		}, t = function() {
			return (t = Object.assign || function(e) {
				for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
				return e;
			}).apply(this, arguments);
		};
		function n(e, t, n) {
			if (n || arguments.length === 2) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || ((r ||= Array.prototype.slice.call(t, 0, i))[i] = t[i]);
			return e.concat(r || Array.prototype.slice.call(t));
		}
		var r = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, i = Object.keys, a = Array.isArray;
		function o(e, t) {
			return typeof t != "object" || i(t).forEach(function(n) {
				e[n] = t[n];
			}), e;
		}
		typeof Promise > "u" || r.Promise || (r.Promise = Promise);
		var s = Object.getPrototypeOf, c = {}.hasOwnProperty;
		function l(e, t) {
			return c.call(e, t);
		}
		function u(e, t) {
			typeof t == "function" && (t = t(s(e))), (typeof Reflect > "u" ? i : Reflect.ownKeys)(t).forEach(function(n) {
				f(e, n, t[n]);
			});
		}
		var d = Object.defineProperty;
		function f(e, t, n, r) {
			d(e, t, o(n && l(n, "get") && typeof n.get == "function" ? {
				get: n.get,
				set: n.set,
				configurable: !0
			} : {
				value: n,
				configurable: !0,
				writable: !0
			}, r));
		}
		function p(e) {
			return { from: function(t) {
				return e.prototype = Object.create(t.prototype), f(e.prototype, "constructor", e), { extend: u.bind(null, e.prototype) };
			} };
		}
		var m = Object.getOwnPropertyDescriptor, h = [].slice;
		function g(e, t, n) {
			return h.call(e, t, n);
		}
		function _(e, t) {
			return t(e);
		}
		function v(e) {
			if (!e) throw Error("Assertion Failed");
		}
		function y(e) {
			r.setImmediate ? setImmediate(e) : setTimeout(e, 0);
		}
		function b(e, t) {
			if (typeof t == "string" && l(e, t)) return e[t];
			if (!t) return e;
			if (typeof t != "string") {
				for (var n = [], r = 0, i = t.length; r < i; ++r) {
					var a = b(e, t[r]);
					n.push(a);
				}
				return n;
			}
			var o = t.indexOf(".");
			if (o !== -1) {
				var s = e[t.substr(0, o)];
				return s == null ? void 0 : b(s, t.substr(o + 1));
			}
		}
		function x(e, t, n) {
			if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
				v(typeof n != "string" && "length" in n);
				for (var r = 0, i = t.length; r < i; ++r) x(e, t[r], n[r]);
			} else {
				var o, s, c = t.indexOf(".");
				c === -1 ? n === void 0 ? a(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n : (o = t.substr(0, c), (s = t.substr(c + 1)) === "" ? n === void 0 ? a(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = n : x(c = !(c = e[o]) || !l(e, o) ? e[o] = {} : c, s, n));
			}
		}
		function ee(e) {
			var t, n = {};
			for (t in e) l(e, t) && (n[t] = e[t]);
			return n;
		}
		var S = [].concat;
		function C(e) {
			return S.apply([], e);
		}
		var w = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(C([
			8,
			16,
			32,
			64
		].map(function(e) {
			return [
				"Int",
				"Uint",
				"Float"
			].map(function(t) {
				return t + e + "Array";
			});
		}))).filter(function(e) {
			return r[e];
		}), te = new Set(w.map(function(e) {
			return r[e];
		})), T = null;
		function E(e) {
			return T = /* @__PURE__ */ new WeakMap(), e = function e(t) {
				if (!t || typeof t != "object") return t;
				var n = T.get(t);
				if (n) return n;
				if (a(t)) {
					n = [], T.set(t, n);
					for (var r = 0, i = t.length; r < i; ++r) n.push(e(t[r]));
				} else if (te.has(t.constructor)) n = t;
				else {
					var o, c = s(t);
					for (o in n = c === Object.prototype ? {} : Object.create(c), T.set(t, n), t) l(t, o) && (n[o] = e(t[o]));
				}
				return n;
			}(e), T = null, e;
		}
		var ne = {}.toString;
		function D(e) {
			return ne.call(e).slice(8, -1);
		}
		var re = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", O = typeof re == "symbol" ? function(e) {
			var t;
			return e != null && (t = e[re]) && t.apply(e);
		} : function() {
			return null;
		};
		function k(e, t) {
			return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
		}
		var ie = {};
		function A(e) {
			var t, n, r, i;
			if (arguments.length === 1) {
				if (a(e)) return e.slice();
				if (this === ie && typeof e == "string") return [e];
				if (i = O(e)) {
					for (n = []; !(r = i.next()).done;) n.push(r.value);
					return n;
				}
				if (e == null || typeof (t = e.length) != "number") return [e];
				for (n = Array(t); t--;) n[t] = e[t];
				return n;
			}
			for (t = arguments.length, n = Array(t); t--;) n[t] = arguments[t];
			return n;
		}
		var j = typeof Symbol < "u" ? function(e) {
			return e[Symbol.toStringTag] === "AsyncFunction";
		} : function() {
			return !1;
		}, M = [
			"Unknown",
			"Constraint",
			"Data",
			"TransactionInactive",
			"ReadOnly",
			"Version",
			"NotFound",
			"InvalidState",
			"InvalidAccess",
			"Abort",
			"Timeout",
			"QuotaExceeded",
			"Syntax",
			"DataClone"
		], N = [
			"Modify",
			"Bulk",
			"OpenFailed",
			"VersionChange",
			"Schema",
			"Upgrade",
			"InvalidTable",
			"MissingAPI",
			"NoSuchDatabase",
			"InvalidArgument",
			"SubTransaction",
			"Unsupported",
			"Internal",
			"DatabaseClosed",
			"PrematureCommit",
			"ForeignAwait"
		].concat(M), ae = {
			VersionChanged: "Database version changed by other database connection",
			DatabaseClosed: "Database has been closed",
			Abort: "Transaction aborted",
			TransactionInactive: "Transaction has already completed or failed",
			MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
		};
		function P(e, t) {
			this.name = e, this.message = t;
		}
		function oe(e, t) {
			return e + ". Errors: " + Object.keys(t).map(function(e) {
				return t[e].toString();
			}).filter(function(e, t, n) {
				return n.indexOf(e) === t;
			}).join("\n");
		}
		function se(e, t, n, r) {
			this.failures = t, this.failedKeys = r, this.successCount = n, this.message = oe(e, t);
		}
		function ce(e, t) {
			this.name = "BulkError", this.failures = Object.keys(t).map(function(e) {
				return t[e];
			}), this.failuresByPos = t, this.message = oe(e, this.failures);
		}
		p(P).from(Error).extend({ toString: function() {
			return this.name + ": " + this.message;
		} }), p(se).from(P), p(ce).from(P);
		var le = N.reduce(function(e, t) {
			return e[t] = t + "Error", e;
		}, {}), F = P, I = N.reduce(function(e, t) {
			var n = t + "Error";
			function r(e, r) {
				this.name = n, e ? typeof e == "string" ? (this.message = `${e}${r ? "\n " + r : ""}`, this.inner = r || null) : typeof e == "object" && (this.message = `${e.name} ${e.message}`, this.inner = e) : (this.message = ae[t] || n, this.inner = null);
			}
			return p(r).from(F), e[t] = r, e;
		}, {});
		I.Syntax = SyntaxError, I.Type = TypeError, I.Range = RangeError;
		var ue = M.reduce(function(e, t) {
			return e[t + "Error"] = I[t], e;
		}, {}), de = N.reduce(function(e, t) {
			return [
				"Syntax",
				"Type",
				"Range"
			].indexOf(t) === -1 && (e[t + "Error"] = I[t]), e;
		}, {});
		function L() {}
		function fe(e) {
			return e;
		}
		function pe(e, t) {
			return e == null || e === fe ? t : function(n) {
				return t(e(n));
			};
		}
		function me(e, t) {
			return function() {
				e.apply(this, arguments), t.apply(this, arguments);
			};
		}
		function he(e, t) {
			return e === L ? t : function() {
				var n = e.apply(this, arguments);
				n !== void 0 && (arguments[0] = n);
				var r = this.onsuccess, i = this.onerror;
				this.onsuccess = null, this.onerror = null;
				var a = t.apply(this, arguments);
				return r && (this.onsuccess = this.onsuccess ? me(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? me(i, this.onerror) : i), a === void 0 ? n : a;
			};
		}
		function ge(e, t) {
			return e === L ? t : function() {
				e.apply(this, arguments);
				var n = this.onsuccess, r = this.onerror;
				this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? me(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? me(r, this.onerror) : r);
			};
		}
		function _e(e, t) {
			return e === L ? t : function(n) {
				var r = e.apply(this, arguments);
				o(n, r);
				var i = this.onsuccess, a = this.onerror;
				return this.onsuccess = null, this.onerror = null, n = t.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? me(i, this.onsuccess) : i), a && (this.onerror = this.onerror ? me(a, this.onerror) : a), r === void 0 ? n === void 0 ? void 0 : n : o(r, n);
			};
		}
		function ve(e, t) {
			return e === L ? t : function() {
				return !1 !== t.apply(this, arguments) && e.apply(this, arguments);
			};
		}
		function ye(e, t) {
			return e === L ? t : function() {
				var n = e.apply(this, arguments);
				if (n && typeof n.then == "function") {
					for (var r = this, i = arguments.length, a = Array(i); i--;) a[i] = arguments[i];
					return n.then(function() {
						return t.apply(r, a);
					});
				}
				return t.apply(this, arguments);
			};
		}
		de.ModifyError = se, de.DexieError = P, de.BulkError = ce;
		var be = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
		function xe(e) {
			be = e;
		}
		var Se = {}, Ce = 100, w = typeof Promise > "u" ? [] : function() {
			var e = Promise.resolve();
			if (typeof crypto > "u" || !crypto.subtle) return [
				e,
				s(e),
				e
			];
			var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
			return [
				t,
				s(t),
				e
			];
		}(), M = w[0], N = w[1], w = w[2], N = N && N.then, we = M && M.constructor, Te = !!w, Ee = function(e, t) {
			Ne.push([e, t]), Oe &&= (queueMicrotask(He), !1);
		}, De = !0, Oe = !0, ke = [], Ae = [], je = fe, Me = {
			id: "global",
			global: !0,
			ref: 0,
			unhandleds: [],
			onunhandled: L,
			pgp: !1,
			env: {},
			finalize: L
		}, R = Me, Ne = [], Pe = 0, Fe = [];
		function z(e) {
			if (typeof this != "object") throw TypeError("Promises must be constructed via new");
			this._listeners = [], this._lib = !1;
			var t = this._PSD = R;
			if (typeof e != "function") {
				if (e !== Se) throw TypeError("Not a function");
				this._state = arguments[1], this._value = arguments[2], !1 === this._state && Re(this, this._value);
				return;
			}
			this._state = null, this._value = null, ++t.ref, function e(t, n) {
				try {
					n(function(n) {
						if (t._state === null) {
							if (n === t) throw TypeError("A promise cannot be resolved with itself.");
							var r = t._lib && Ue();
							n && typeof n.then == "function" ? e(t, function(e, t) {
								n instanceof z ? n._then(e, t) : n.then(e, t);
							}) : (t._state = !0, t._value = n, ze(t)), r && We();
						}
					}, Re.bind(null, t));
				} catch (e) {
					Re(t, e);
				}
			}(this, e);
		}
		var Ie = {
			get: function() {
				var e = R, t = Xe;
				function n(n, r) {
					var i = this, a = !e.global && (e !== R || t !== Xe), o = a && !$e(), s = new z(function(t, s) {
						Be(i, new Le(at(n, e, a, o), at(r, e, a, o), t, s, e));
					});
					return this._consoleTask && (s._consoleTask = this._consoleTask), s;
				}
				return n.prototype = Se, n;
			},
			set: function(e) {
				f(this, "then", e && e.prototype === Se ? Ie : {
					get: function() {
						return e;
					},
					set: Ie.set
				});
			}
		};
		function Le(e, t, n, r, i) {
			this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = i;
		}
		function Re(e, t) {
			var n, r;
			Ae.push(t), e._state === null && (n = e._lib && Ue(), t = je(t), e._state = !1, e._value = t, r = e, ke.some(function(e) {
				return e._value === r._value;
			}) || ke.push(r), ze(e), n && We());
		}
		function ze(e) {
			var t = e._listeners;
			e._listeners = [];
			for (var n = 0, r = t.length; n < r; ++n) Be(e, t[n]);
			var i = e._PSD;
			--i.ref || i.finalize(), Pe === 0 && (++Pe, Ee(function() {
				--Pe == 0 && Ge();
			}, []));
		}
		function Be(e, t) {
			if (e._state !== null) {
				var n = e._state ? t.onFulfilled : t.onRejected;
				if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
				++t.psd.ref, ++Pe, Ee(Ve, [
					n,
					e,
					t
				]);
			} else e._listeners.push(t);
		}
		function Ve(e, t, n) {
			try {
				var r, i = t._value;
				!t._state && Ae.length && (Ae = []), r = be && t._consoleTask ? t._consoleTask.run(function() {
					return e(i);
				}) : e(i), t._state || Ae.indexOf(i) !== -1 || function(e) {
					for (var t = ke.length; t;) if (ke[--t]._value === e._value) return ke.splice(t, 1);
				}(t), n.resolve(r);
			} catch (e) {
				n.reject(e);
			} finally {
				--Pe == 0 && Ge(), --n.psd.ref || n.psd.finalize();
			}
		}
		function He() {
			it(Me, function() {
				Ue() && We();
			});
		}
		function Ue() {
			var e = De;
			return Oe = De = !1, e;
		}
		function We() {
			var e, t, n;
			do
				for (; 0 < Ne.length;) for (e = Ne, Ne = [], n = e.length, t = 0; t < n; ++t) {
					var r = e[t];
					r[0].apply(null, r[1]);
				}
			while (0 < Ne.length);
			Oe = De = !0;
		}
		function Ge() {
			var e = ke;
			ke = [], e.forEach(function(e) {
				e._PSD.onunhandled.call(null, e._value, e);
			});
			for (var t = Fe.slice(0), n = t.length; n;) t[--n]();
		}
		function Ke(e) {
			return new z(Se, !1, e);
		}
		function B(e, t) {
			var n = R;
			return function() {
				var r = Ue(), i = R;
				try {
					return nt(n, !0), e.apply(this, arguments);
				} catch (e) {
					t && t(e);
				} finally {
					nt(i, !1), r && We();
				}
			};
		}
		u(z.prototype, {
			then: Ie,
			_then: function(e, t) {
				Be(this, new Le(null, null, e, t, R));
			},
			catch: function(e) {
				if (arguments.length === 1) return this.then(null, e);
				var t = e, n = arguments[1];
				return typeof t == "function" ? this.then(null, function(e) {
					return (e instanceof t ? n : Ke)(e);
				}) : this.then(null, function(e) {
					return (e && e.name === t ? n : Ke)(e);
				});
			},
			finally: function(e) {
				return this.then(function(t) {
					return z.resolve(e()).then(function() {
						return t;
					});
				}, function(t) {
					return z.resolve(e()).then(function() {
						return Ke(t);
					});
				});
			},
			timeout: function(e, t) {
				var n = this;
				return e < Infinity ? new z(function(r, i) {
					var a = setTimeout(function() {
						return i(new I.Timeout(t));
					}, e);
					n.then(r, i).finally(clearTimeout.bind(null, a));
				}) : this;
			}
		}), typeof Symbol < "u" && Symbol.toStringTag && f(z.prototype, Symbol.toStringTag, "Dexie.Promise"), Me.env = rt(), u(z, {
			all: function() {
				var e = A.apply(null, arguments).map(et);
				return new z(function(t, n) {
					e.length === 0 && t([]);
					var r = e.length;
					e.forEach(function(i, a) {
						return z.resolve(i).then(function(n) {
							e[a] = n, --r || t(e);
						}, n);
					});
				});
			},
			resolve: function(e) {
				return e instanceof z ? e : e && typeof e.then == "function" ? new z(function(t, n) {
					e.then(t, n);
				}) : new z(Se, !0, e);
			},
			reject: Ke,
			race: function() {
				var e = A.apply(null, arguments).map(et);
				return new z(function(t, n) {
					e.map(function(e) {
						return z.resolve(e).then(t, n);
					});
				});
			},
			PSD: {
				get: function() {
					return R;
				},
				set: function(e) {
					return R = e;
				}
			},
			totalEchoes: { get: function() {
				return Xe;
			} },
			newPSD: H,
			usePSD: it,
			scheduler: {
				get: function() {
					return Ee;
				},
				set: function(e) {
					Ee = e;
				}
			},
			rejectionMapper: {
				get: function() {
					return je;
				},
				set: function(e) {
					je = e;
				}
			},
			follow: function(e, t) {
				return new z(function(n, r) {
					return H(function(t, n) {
						var r = R;
						r.unhandleds = [], r.onunhandled = n, r.finalize = me(function() {
							var e, r = this;
							e = function() {
								r.unhandleds.length === 0 ? t() : n(r.unhandleds[0]);
							}, Fe.push(function t() {
								e(), Fe.splice(Fe.indexOf(t), 1);
							}), ++Pe, Ee(function() {
								--Pe == 0 && Ge();
							}, []);
						}, r.finalize), e();
					}, t, n, r);
				});
			}
		}), we && (we.allSettled && f(z, "allSettled", function() {
			var e = A.apply(null, arguments).map(et);
			return new z(function(t) {
				e.length === 0 && t([]);
				var n = e.length, r = Array(n);
				e.forEach(function(e, i) {
					return z.resolve(e).then(function(e) {
						return r[i] = {
							status: "fulfilled",
							value: e
						};
					}, function(e) {
						return r[i] = {
							status: "rejected",
							reason: e
						};
					}).then(function() {
						return --n || t(r);
					});
				});
			});
		}), we.any && typeof AggregateError < "u" && f(z, "any", function() {
			var e = A.apply(null, arguments).map(et);
			return new z(function(t, n) {
				e.length === 0 && n(/* @__PURE__ */ AggregateError([]));
				var r = e.length, i = Array(r);
				e.forEach(function(e, a) {
					return z.resolve(e).then(function(e) {
						return t(e);
					}, function(e) {
						i[a] = e, --r || n(AggregateError(i));
					});
				});
			});
		}), we.withResolvers && (z.withResolvers = we.withResolvers));
		var V = {
			awaits: 0,
			echoes: 0,
			id: 0
		}, qe = 0, Je = [], Ye = 0, Xe = 0, Ze = 0;
		function H(e, t, n, r) {
			var i = R, a = Object.create(i);
			return a.parent = i, a.ref = 0, a.global = !1, a.id = ++Ze, Me.env, a.env = Te ? {
				Promise: z,
				PromiseProp: {
					value: z,
					configurable: !0,
					writable: !0
				},
				all: z.all,
				race: z.race,
				allSettled: z.allSettled,
				any: z.any,
				resolve: z.resolve,
				reject: z.reject
			} : {}, t && o(a, t), ++i.ref, a.finalize = function() {
				--this.parent.ref || this.parent.finalize();
			}, r = it(a, e, n, r), a.ref === 0 && a.finalize(), r;
		}
		function Qe() {
			return V.id ||= ++qe, ++V.awaits, V.echoes += Ce, V.id;
		}
		function $e() {
			return !!V.awaits && (--V.awaits == 0 && (V.id = 0), V.echoes = V.awaits * Ce, !0);
		}
		function et(e) {
			return V.echoes && e && e.constructor === we ? (Qe(), e.then(function(e) {
				return $e(), e;
			}, function(e) {
				return $e(), U(e);
			})) : e;
		}
		function tt() {
			var e = Je[Je.length - 1];
			Je.pop(), nt(e, !1);
		}
		function nt(e, t) {
			var n, i = R;
			(t ? !V.echoes || Ye++ && e === R : !Ye || --Ye && e === R) || queueMicrotask(t ? function(e) {
				++Xe, V.echoes && --V.echoes != 0 || (V.echoes = V.awaits = V.id = 0), Je.push(R), nt(e, !0);
			}.bind(null, e) : tt), e !== R && (R = e, i === Me && (Me.env = rt()), Te && (n = Me.env.Promise, t = e.env, (i.global || e.global) && (Object.defineProperty(r, "Promise", t.PromiseProp), n.all = t.all, n.race = t.race, n.resolve = t.resolve, n.reject = t.reject, t.allSettled && (n.allSettled = t.allSettled), t.any && (n.any = t.any))));
		}
		function rt() {
			var e = r.Promise;
			return Te ? {
				Promise: e,
				PromiseProp: Object.getOwnPropertyDescriptor(r, "Promise"),
				all: e.all,
				race: e.race,
				allSettled: e.allSettled,
				any: e.any,
				resolve: e.resolve,
				reject: e.reject
			} : {};
		}
		function it(e, t, n, r, i) {
			var a = R;
			try {
				return nt(e, !0), t(n, r, i);
			} finally {
				nt(a, !1);
			}
		}
		function at(e, t, n, r) {
			return typeof e == "function" ? function() {
				var i = R;
				n && Qe(), nt(t, !0);
				try {
					return e.apply(this, arguments);
				} finally {
					nt(i, !1), r && queueMicrotask($e);
				}
			} : e;
		}
		function ot(e) {
			Promise === we && V.echoes === 0 ? Ye === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
		}
		("" + N).indexOf("[native code]") === -1 && (Qe = $e = L);
		var U = z.reject, st = "￿", ct = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", lt = "String expected.", ut = [], dt = "__dbnames", W = "readonly", ft = "readwrite";
		function pt(e, t) {
			return e ? t ? function() {
				return e.apply(this, arguments) && t.apply(this, arguments);
			} : e : t;
		}
		var mt = {
			type: 3,
			lower: -Infinity,
			lowerOpen: !1,
			upper: [[]],
			upperOpen: !1
		};
		function ht(e) {
			return typeof e != "string" || /\./.test(e) ? function(e) {
				return e;
			} : function(t) {
				return t[e] === void 0 && e in t && delete (t = E(t))[e], t;
			};
		}
		function gt() {
			throw I.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
		}
		function G(e, t) {
			try {
				var n = _t(e), r = _t(t);
				if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r === "Date" ? -1 : NaN;
				switch (n) {
					case "number":
					case "Date":
					case "string": return t < e ? 1 : e < t ? -1 : 0;
					case "binary": return function(e, t) {
						for (var n = e.length, r = t.length, i = n < r ? n : r, a = 0; a < i; ++a) if (e[a] !== t[a]) return e[a] < t[a] ? -1 : 1;
						return n === r ? 0 : n < r ? -1 : 1;
					}(vt(e), vt(t));
					case "Array": return function(e, t) {
						for (var n = e.length, r = t.length, i = n < r ? n : r, a = 0; a < i; ++a) {
							var o = G(e[a], t[a]);
							if (o !== 0) return o;
						}
						return n === r ? 0 : n < r ? -1 : 1;
					}(e, t);
				}
			} catch {}
			return NaN;
		}
		function _t(e) {
			var t = typeof e;
			return t == "object" ? ArrayBuffer.isView(e) ? "binary" : (e = D(e), e === "ArrayBuffer" ? "binary" : e) : t;
		}
		function vt(e) {
			return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
		}
		function yt(e, t, n) {
			var r = e.schema.yProps;
			return r ? (t && 0 < n.numFailures && (t = t.filter(function(e, t) {
				return !n.failures[t];
			})), Promise.all(r.map(function(n) {
				return n = n.updatesTable, t ? e.db.table(n).where("k").anyOf(t).delete() : e.db.table(n).clear();
			})).then(function() {
				return n;
			})) : n;
		}
		var bt = (K.prototype._trans = function(e, t, n) {
			var r = this._tx || R.trans, i = this.name, a = be && typeof console < "u" && console.createTask && console.createTask(`Dexie: ${e === "readonly" ? "read" : "write"} ${this.name}`);
			function o(e, n, r) {
				if (!r.schema[i]) throw new I.NotFound("Table " + i + " not part of transaction");
				return t(r.idbtrans, r);
			}
			var s = Ue();
			try {
				var c = r && r.db._novip === this.db._novip ? r === R.trans ? r._promise(e, o, n) : H(function() {
					return r._promise(e, o, n);
				}, {
					trans: r,
					transless: R.transless || R
				}) : function e(t, n, r, i) {
					if (t.idbdb && (t._state.openComplete || R.letThrough || t._vip)) {
						var a = t._createTransaction(n, r, t._dbSchema);
						try {
							a.create(), t._state.PR1398_maxLoop = 3;
						} catch (a) {
							return a.name === le.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
								return e(t, n, r, i);
							})) : U(a);
						}
						return a._promise(n, function(e, t) {
							return H(function() {
								return R.trans = a, i(e, t, a);
							});
						}).then(function(e) {
							if (n === "readwrite") try {
								a.idbtrans.commit();
							} catch {}
							return n === "readonly" ? e : a._completion.then(function() {
								return e;
							});
						});
					}
					if (t._state.openComplete) return U(new I.DatabaseClosed(t._state.dbOpenError));
					if (!t._state.isBeingOpened) {
						if (!t._state.autoOpen) return U(new I.DatabaseClosed());
						t.open().catch(L);
					}
					return t._state.dbReadyPromise.then(function() {
						return e(t, n, r, i);
					});
				}(this.db, e, [this.name], o);
				return a && (c._consoleTask = a, c = c.catch(function(e) {
					return console.trace(e), U(e);
				})), c;
			} finally {
				s && We();
			}
		}, K.prototype.get = function(e, t) {
			var n = this;
			return e && e.constructor === Object ? this.where(e).first(t) : e == null ? U(new I.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(t) {
				return n.core.get({
					trans: t,
					key: e
				}).then(function(e) {
					return n.hook.reading.fire(e);
				});
			}).then(t);
		}, K.prototype.where = function(e) {
			if (typeof e == "string") return new this.db.WhereClause(this, e);
			if (a(e)) return new this.db.WhereClause(this, `[${e.join("+")}]`);
			var t = i(e);
			if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
			var n = this.schema.indexes.concat(this.schema.primKey).filter(function(e) {
				if (e.compound && t.every(function(t) {
					return 0 <= e.keyPath.indexOf(t);
				})) {
					for (var n = 0; n < t.length; ++n) if (t.indexOf(e.keyPath[n]) === -1) return !1;
					return !0;
				}
				return !1;
			}).sort(function(e, t) {
				return e.keyPath.length - t.keyPath.length;
			})[0];
			if (n && this.db._maxKey !== st) {
				var r = n.keyPath.slice(0, t.length);
				return this.where(r).equals(r.map(function(t) {
					return e[t];
				}));
			}
			!n && be && console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit from a compound index [${t.join("+")}]`);
			var o = this.schema.idxByName;
			function s(e, t) {
				return G(e, t) === 0;
			}
			var c = t.reduce(function(t, n) {
				var r = t[0], i = t[1], t = o[n], c = e[n];
				return [r || t, r || !t ? pt(i, t && t.multi ? function(e) {
					return e = b(e, n), a(e) && e.some(function(e) {
						return s(c, e);
					});
				} : function(e) {
					return s(c, b(e, n));
				}) : i];
			}, [null, null]), r = c[0], c = c[1];
			return r ? this.where(r.name).equals(e[r.keyPath]).filter(c) : n ? this.filter(c) : this.where(t).equals("");
		}, K.prototype.filter = function(e) {
			return this.toCollection().and(e);
		}, K.prototype.count = function(e) {
			return this.toCollection().count(e);
		}, K.prototype.offset = function(e) {
			return this.toCollection().offset(e);
		}, K.prototype.limit = function(e) {
			return this.toCollection().limit(e);
		}, K.prototype.each = function(e) {
			return this.toCollection().each(e);
		}, K.prototype.toArray = function(e) {
			return this.toCollection().toArray(e);
		}, K.prototype.toCollection = function() {
			return new this.db.Collection(new this.db.WhereClause(this));
		}, K.prototype.orderBy = function(e) {
			return new this.db.Collection(new this.db.WhereClause(this, a(e) ? `[${e.join("+")}]` : e));
		}, K.prototype.reverse = function() {
			return this.toCollection().reverse();
		}, K.prototype.mapToClass = function(t) {
			var n, r = this.db, i = this.name;
			function a() {
				return n !== null && n.apply(this, arguments) || this;
			}
			(this.schema.mappedClass = t).prototype instanceof gt && (function(t, n) {
				if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
				function r() {
					this.constructor = t;
				}
				e(t, n), t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
			}(a, n = t), Object.defineProperty(a.prototype, "db", {
				get: function() {
					return r;
				},
				enumerable: !1,
				configurable: !0
			}), a.prototype.table = function() {
				return i;
			}, t = a);
			for (var o = /* @__PURE__ */ new Set(), c = t.prototype; c; c = s(c)) Object.getOwnPropertyNames(c).forEach(function(e) {
				return o.add(e);
			});
			function l(e) {
				if (!e) return e;
				var n, r = Object.create(t.prototype);
				for (n in e) if (!o.has(n)) try {
					r[n] = e[n];
				} catch {}
				return r;
			}
			return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = l, this.hook("reading", l), t;
		}, K.prototype.defineClass = function() {
			return this.mapToClass(function(e) {
				o(this, e);
			});
		}, K.prototype.add = function(e, t) {
			var n = this, r = this.schema.primKey, i = r.auto, a = r.keyPath, o = e;
			return a && i && (o = ht(a)(e)), this._trans("readwrite", function(e) {
				return n.core.mutate({
					trans: e,
					type: "add",
					keys: t == null ? null : [t],
					values: [o]
				});
			}).then(function(e) {
				return e.numFailures ? z.reject(e.failures[0]) : e.lastResult;
			}).then(function(t) {
				if (a) try {
					x(e, a, t);
				} catch {}
				return t;
			});
		}, K.prototype.update = function(e, t) {
			return typeof e != "object" || a(e) ? this.where(":id").equals(e).modify(t) : (e = b(e, this.schema.primKey.keyPath), e === void 0 ? U(new I.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
		}, K.prototype.put = function(e, t) {
			var n = this, r = this.schema.primKey, i = r.auto, a = r.keyPath, o = e;
			return a && i && (o = ht(a)(e)), this._trans("readwrite", function(e) {
				return n.core.mutate({
					trans: e,
					type: "put",
					values: [o],
					keys: t == null ? null : [t]
				});
			}).then(function(e) {
				return e.numFailures ? z.reject(e.failures[0]) : e.lastResult;
			}).then(function(t) {
				if (a) try {
					x(e, a, t);
				} catch {}
				return t;
			});
		}, K.prototype.delete = function(e) {
			var t = this;
			return this._trans("readwrite", function(n) {
				return t.core.mutate({
					trans: n,
					type: "delete",
					keys: [e]
				}).then(function(n) {
					return yt(t, [e], n);
				}).then(function(e) {
					return e.numFailures ? z.reject(e.failures[0]) : void 0;
				});
			});
		}, K.prototype.clear = function() {
			var e = this;
			return this._trans("readwrite", function(t) {
				return e.core.mutate({
					trans: t,
					type: "deleteRange",
					range: mt
				}).then(function(t) {
					return yt(e, null, t);
				});
			}).then(function(e) {
				return e.numFailures ? z.reject(e.failures[0]) : void 0;
			});
		}, K.prototype.bulkGet = function(e) {
			var t = this;
			return this._trans("readonly", function(n) {
				return t.core.getMany({
					keys: e,
					trans: n
				}).then(function(e) {
					return e.map(function(e) {
						return t.hook.reading.fire(e);
					});
				});
			});
		}, K.prototype.bulkAdd = function(e, t, n) {
			var r = this, i = Array.isArray(t) ? t : void 0, a = (n ||= i ? void 0 : t) ? n.allKeys : void 0;
			return this._trans("readwrite", function(t) {
				var n = r.schema.primKey, o = n.auto, n = n.keyPath;
				if (n && i) throw new I.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
				if (i && i.length !== e.length) throw new I.InvalidArgument("Arguments objects and keys must have the same length");
				var s = e.length, n = n && o ? e.map(ht(n)) : e;
				return r.core.mutate({
					trans: t,
					type: "add",
					keys: i,
					values: n,
					wantResults: a
				}).then(function(e) {
					var t = e.numFailures, n = e.results, i = e.lastResult, e = e.failures;
					if (t === 0) return a ? n : i;
					throw new ce(`${r.name}.bulkAdd(): ${t} of ${s} operations failed`, e);
				});
			});
		}, K.prototype.bulkPut = function(e, t, n) {
			var r = this, i = Array.isArray(t) ? t : void 0, a = (n ||= i ? void 0 : t) ? n.allKeys : void 0;
			return this._trans("readwrite", function(t) {
				var n = r.schema.primKey, o = n.auto, n = n.keyPath;
				if (n && i) throw new I.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
				if (i && i.length !== e.length) throw new I.InvalidArgument("Arguments objects and keys must have the same length");
				var s = e.length, n = n && o ? e.map(ht(n)) : e;
				return r.core.mutate({
					trans: t,
					type: "put",
					keys: i,
					values: n,
					wantResults: a
				}).then(function(e) {
					var t = e.numFailures, n = e.results, i = e.lastResult, e = e.failures;
					if (t === 0) return a ? n : i;
					throw new ce(`${r.name}.bulkPut(): ${t} of ${s} operations failed`, e);
				});
			});
		}, K.prototype.bulkUpdate = function(e) {
			var t = this, n = this.core, r = e.map(function(e) {
				return e.key;
			}), i = e.map(function(e) {
				return e.changes;
			}), a = [];
			return this._trans("readwrite", function(o) {
				return n.getMany({
					trans: o,
					keys: r,
					cache: "clone"
				}).then(function(s) {
					var c = [], l = [];
					e.forEach(function(e, n) {
						var r = e.key, i = e.changes, o = s[n];
						if (o) {
							for (var u = 0, d = Object.keys(i); u < d.length; u++) {
								var f = d[u], p = i[f];
								if (f === t.schema.primKey.keyPath) {
									if (G(p, r) !== 0) throw new I.Constraint("Cannot update primary key in bulkUpdate()");
								} else x(o, f, p);
							}
							a.push(n), c.push(r), l.push(o);
						}
					});
					var u = c.length;
					return n.mutate({
						trans: o,
						type: "put",
						keys: c,
						values: l,
						updates: {
							keys: r,
							changeSpecs: i
						}
					}).then(function(e) {
						var n = e.numFailures, r = e.failures;
						if (n === 0) return u;
						for (var i = 0, o = Object.keys(r); i < o.length; i++) {
							var s, c = o[i], l = a[Number(c)];
							l != null && (s = r[c], delete r[c], r[l] = s);
						}
						throw new ce(`${t.name}.bulkUpdate(): ${n} of ${u} operations failed`, r);
					});
				});
			});
		}, K.prototype.bulkDelete = function(e) {
			var t = this, n = e.length;
			return this._trans("readwrite", function(n) {
				return t.core.mutate({
					trans: n,
					type: "delete",
					keys: e
				}).then(function(n) {
					return yt(t, e, n);
				});
			}).then(function(e) {
				var r = e.numFailures, i = e.lastResult, e = e.failures;
				if (r === 0) return i;
				throw new ce(`${t.name}.bulkDelete(): ${r} of ${n} operations failed`, e);
			});
		}, K);
		function K() {}
		function xt(e) {
			function t(t, r) {
				if (r) {
					for (var i = arguments.length, a = Array(i - 1); --i;) a[i - 1] = arguments[i];
					return n[t].subscribe.apply(null, a), e;
				}
				if (typeof t == "string") return n[t];
			}
			var n = {};
			t.addEventType = s;
			for (var r = 1, o = arguments.length; r < o; ++r) s(arguments[r]);
			return t;
			function s(e, r, o) {
				if (typeof e != "object") {
					var c;
					r ||= ve;
					var l = {
						subscribers: [],
						fire: o ||= L,
						subscribe: function(e) {
							l.subscribers.indexOf(e) === -1 && (l.subscribers.push(e), l.fire = r(l.fire, e));
						},
						unsubscribe: function(e) {
							l.subscribers = l.subscribers.filter(function(t) {
								return t !== e;
							}), l.fire = l.subscribers.reduce(r, o);
						}
					};
					return n[e] = t[e] = l;
				}
				i(c = e).forEach(function(e) {
					var t = c[e];
					if (a(t)) s(e, c[e][0], c[e][1]);
					else {
						if (t !== "asap") throw new I.InvalidArgument("Invalid event config");
						var n = s(e, fe, function() {
							for (var e = arguments.length, t = Array(e); e--;) t[e] = arguments[e];
							n.subscribers.forEach(function(e) {
								y(function() {
									e.apply(null, t);
								});
							});
						});
					}
				});
			}
		}
		function St(e, t) {
			return p(t).from({ prototype: e }), t;
		}
		function Ct(e, t) {
			return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
		}
		function wt(e, t) {
			e.filter = pt(e.filter, t);
		}
		function Tt(e, t, n) {
			var r = e.replayFilter;
			e.replayFilter = r ? function() {
				return pt(r(), t());
			} : t, e.justLimit = n && !r;
		}
		function Et(e, t) {
			if (e.isPrimKey) return t.primaryKey;
			var n = t.getIndexByKeyPath(e.index);
			if (!n) throw new I.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
			return n;
		}
		function Dt(e, t, n) {
			var r = Et(e, t.schema);
			return t.openCursor({
				trans: n,
				values: !e.keysOnly,
				reverse: e.dir === "prev",
				unique: !!e.unique,
				query: {
					index: r,
					range: e.range
				}
			});
		}
		function Ot(e, t, n, r) {
			var i = e.replayFilter ? pt(e.filter, e.replayFilter()) : e.filter;
			if (e.or) {
				var a = {}, o = function(e, n, r) {
					var o, s;
					i && !i(n, r, function(e) {
						return n.stop(e);
					}, function(e) {
						return n.fail(e);
					}) || ((s = "" + (o = n.primaryKey)) == "[object ArrayBuffer]" && (s = "" + new Uint8Array(o)), l(a, s) || (a[s] = !0, t(e, n, r)));
				};
				return Promise.all([e.or._iterate(o, n), kt(Dt(e, r, n), e.algorithm, o, !e.keysOnly && e.valueMapper)]);
			}
			return kt(Dt(e, r, n), pt(e.algorithm, i), t, !e.keysOnly && e.valueMapper);
		}
		function kt(e, t, n, r) {
			var i = B(r ? function(e, t, i) {
				return n(r(e), t, i);
			} : n);
			return e.then(function(e) {
				if (e) return e.start(function() {
					var n = function() {
						return e.continue();
					};
					t && !t(e, function(e) {
						return n = e;
					}, function(t) {
						e.stop(t), n = L;
					}, function(t) {
						e.fail(t), n = L;
					}) || i(e.value, e, function(e) {
						return n = e;
					}), n();
				});
			});
		}
		var At = (jt.prototype.execute = function(e) {
			var t = this["@@propmod"];
			if (t.add !== void 0) {
				var r = t.add;
				if (a(r)) return n(n([], a(e) ? e : [], !0), r, !0).sort();
				if (typeof r == "number") return (Number(e) || 0) + r;
				if (typeof r == "bigint") try {
					return BigInt(e) + r;
				} catch {
					return BigInt(0) + r;
				}
				throw TypeError(`Invalid term ${r}`);
			}
			if (t.remove !== void 0) {
				var i = t.remove;
				if (a(i)) return a(e) ? e.filter(function(e) {
					return !i.includes(e);
				}).sort() : [];
				if (typeof i == "number") return Number(e) - i;
				if (typeof i == "bigint") try {
					return BigInt(e) - i;
				} catch {
					return BigInt(0) - i;
				}
				throw TypeError(`Invalid subtrahend ${i}`);
			}
			return r = (r = t.replacePrefix)?.[0], r && typeof e == "string" && e.startsWith(r) ? t.replacePrefix[1] + e.substring(r.length) : e;
		}, jt);
		function jt(e) {
			this["@@propmod"] = e;
		}
		var Mt = (q.prototype._read = function(e, t) {
			var n = this._ctx;
			return n.error ? n.table._trans(null, U.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
		}, q.prototype._write = function(e) {
			var t = this._ctx;
			return t.error ? t.table._trans(null, U.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
		}, q.prototype._addAlgorithm = function(e) {
			var t = this._ctx;
			t.algorithm = pt(t.algorithm, e);
		}, q.prototype._iterate = function(e, t) {
			return Ot(this._ctx, e, t, this._ctx.table.core);
		}, q.prototype.clone = function(e) {
			var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
			return e && o(n, e), t._ctx = n, t;
		}, q.prototype.raw = function() {
			return this._ctx.valueMapper = null, this;
		}, q.prototype.each = function(e) {
			var t = this._ctx;
			return this._read(function(n) {
				return Ot(t, e, n, t.table.core);
			});
		}, q.prototype.count = function(e) {
			var t = this;
			return this._read(function(e) {
				var n = t._ctx, r = n.table.core;
				if (Ct(n, !0)) return r.count({
					trans: e,
					query: {
						index: Et(n, r.schema),
						range: n.range
					}
				}).then(function(e) {
					return Math.min(e, n.limit);
				});
				var i = 0;
				return Ot(n, function() {
					return ++i, !1;
				}, e, r).then(function() {
					return i;
				});
			}).then(e);
		}, q.prototype.sortBy = function(e, t) {
			var n = e.split(".").reverse(), r = n[0], i = n.length - 1;
			function a(e, t) {
				return t ? a(e[n[t]], t - 1) : e[r];
			}
			var o = this._ctx.dir === "next" ? 1 : -1;
			function s(e, t) {
				return G(a(e, i), a(t, i)) * o;
			}
			return this.toArray(function(e) {
				return e.sort(s);
			}).then(t);
		}, q.prototype.toArray = function(e) {
			var t = this;
			return this._read(function(e) {
				var n = t._ctx;
				if (n.dir === "next" && Ct(n, !0) && 0 < n.limit) {
					var r = n.valueMapper, i = Et(n, n.table.core.schema);
					return n.table.core.query({
						trans: e,
						limit: n.limit,
						values: !0,
						query: {
							index: i,
							range: n.range
						}
					}).then(function(e) {
						return e = e.result, r ? e.map(r) : e;
					});
				}
				var a = [];
				return Ot(n, function(e) {
					return a.push(e);
				}, e, n.table.core).then(function() {
					return a;
				});
			}, e);
		}, q.prototype.offset = function(e) {
			var t = this._ctx;
			return e <= 0 || (t.offset += e, Ct(t) ? Tt(t, function() {
				var t = e;
				return function(e, n) {
					return t === 0 || (t === 1 ? --t : n(function() {
						e.advance(t), t = 0;
					}), !1);
				};
			}) : Tt(t, function() {
				var t = e;
				return function() {
					return --t < 0;
				};
			})), this;
		}, q.prototype.limit = function(e) {
			return this._ctx.limit = Math.min(this._ctx.limit, e), Tt(this._ctx, function() {
				var t = e;
				return function(e, n, r) {
					return --t <= 0 && n(r), 0 <= t;
				};
			}, !0), this;
		}, q.prototype.until = function(e, t) {
			return wt(this._ctx, function(n, r, i) {
				return !e(n.value) || (r(i), t);
			}), this;
		}, q.prototype.first = function(e) {
			return this.limit(1).toArray(function(e) {
				return e[0];
			}).then(e);
		}, q.prototype.last = function(e) {
			return this.reverse().first(e);
		}, q.prototype.filter = function(e) {
			var t;
			return wt(this._ctx, function(t) {
				return e(t.value);
			}), (t = this._ctx).isMatch = pt(t.isMatch, e), this;
		}, q.prototype.and = function(e) {
			return this.filter(e);
		}, q.prototype.or = function(e) {
			return new this.db.WhereClause(this._ctx.table, e, this);
		}, q.prototype.reverse = function() {
			return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
		}, q.prototype.desc = function() {
			return this.reverse();
		}, q.prototype.eachKey = function(e) {
			var t = this._ctx;
			return t.keysOnly = !t.isMatch, this.each(function(t, n) {
				e(n.key, n);
			});
		}, q.prototype.eachUniqueKey = function(e) {
			return this._ctx.unique = "unique", this.eachKey(e);
		}, q.prototype.eachPrimaryKey = function(e) {
			var t = this._ctx;
			return t.keysOnly = !t.isMatch, this.each(function(t, n) {
				e(n.primaryKey, n);
			});
		}, q.prototype.keys = function(e) {
			var t = this._ctx;
			t.keysOnly = !t.isMatch;
			var n = [];
			return this.each(function(e, t) {
				n.push(t.key);
			}).then(function() {
				return n;
			}).then(e);
		}, q.prototype.primaryKeys = function(e) {
			var t = this._ctx;
			if (t.dir === "next" && Ct(t, !0) && 0 < t.limit) return this._read(function(e) {
				var n = Et(t, t.table.core.schema);
				return t.table.core.query({
					trans: e,
					values: !1,
					limit: t.limit,
					query: {
						index: n,
						range: t.range
					}
				});
			}).then(function(e) {
				return e.result;
			}).then(e);
			t.keysOnly = !t.isMatch;
			var n = [];
			return this.each(function(e, t) {
				n.push(t.primaryKey);
			}).then(function() {
				return n;
			}).then(e);
		}, q.prototype.uniqueKeys = function(e) {
			return this._ctx.unique = "unique", this.keys(e);
		}, q.prototype.firstKey = function(e) {
			return this.limit(1).keys(function(e) {
				return e[0];
			}).then(e);
		}, q.prototype.lastKey = function(e) {
			return this.reverse().firstKey(e);
		}, q.prototype.distinct = function() {
			var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
			if (!e || !e.multi) return this;
			var t = {};
			return wt(this._ctx, function(e) {
				var n = e.primaryKey.toString(), e = l(t, n);
				return t[n] = !0, !e;
			}), this;
		}, q.prototype.modify = function(e) {
			var t = this, n = this._ctx;
			return this._write(function(r) {
				var a, o, s = typeof e == "function" ? e : (a = i(e), o = a.length, function(t) {
					for (var n = !1, r = 0; r < o; ++r) {
						var i = a[r], s = e[i], c = b(t, i);
						s instanceof At ? (x(t, i, s.execute(c)), n = !0) : c !== s && (x(t, i, s), n = !0);
					}
					return n;
				}), c = n.table.core, l = c.schema.primaryKey, u = l.outbound, d = l.extractKey, f = 200, l = t.db._options.modifyChunkSize;
				l && (f = typeof l == "object" ? l[c.name] || l["*"] || 200 : l);
				function p(e, t) {
					var n = t.failures, t = t.numFailures;
					h += e - t;
					for (var r = 0, a = i(n); r < a.length; r++) {
						var o = a[r];
						m.push(n[o]);
					}
				}
				var m = [], h = 0, g = [], _ = e === Nt;
				return t.clone().primaryKeys().then(function(t) {
					function i(o) {
						var l = Math.min(f, t.length - o), m = t.slice(o, o + l);
						return (_ ? Promise.resolve([]) : c.getMany({
							trans: r,
							keys: m,
							cache: "immutable"
						})).then(function(h) {
							var g = [], v = [], y = u ? [] : null, b = _ ? m : [];
							if (!_) for (var x = 0; x < l; ++x) {
								var ee = h[x], S = {
									value: E(ee),
									primKey: t[o + x]
								};
								!1 !== s.call(S, S.value, S) && (S.value == null ? b.push(t[o + x]) : u || G(d(ee), d(S.value)) === 0 ? (v.push(S.value), u && y.push(t[o + x])) : (b.push(t[o + x]), g.push(S.value)));
							}
							return Promise.resolve(0 < g.length && c.mutate({
								trans: r,
								type: "add",
								values: g
							}).then(function(e) {
								for (var t in e.failures) b.splice(parseInt(t), 1);
								p(g.length, e);
							})).then(function() {
								return (0 < v.length || a && typeof e == "object") && c.mutate({
									trans: r,
									type: "put",
									keys: y,
									values: v,
									criteria: a,
									changeSpec: typeof e != "function" && e,
									isAdditionalChunk: 0 < o
								}).then(function(e) {
									return p(v.length, e);
								});
							}).then(function() {
								return (0 < b.length || a && _) && c.mutate({
									trans: r,
									type: "delete",
									keys: b,
									criteria: a,
									isAdditionalChunk: 0 < o
								}).then(function(e) {
									return yt(n.table, b, e);
								}).then(function(e) {
									return p(b.length, e);
								});
							}).then(function() {
								return t.length > o + l && i(o + f);
							});
						});
					}
					var a = Ct(n) && n.limit === Infinity && (typeof e != "function" || _) && {
						index: n.index,
						range: n.range
					};
					return i(0).then(function() {
						if (0 < m.length) throw new se("Error modifying one or more objects", m, h, g);
						return t.length;
					});
				});
			});
		}, q.prototype.delete = function() {
			var e = this._ctx, t = e.range;
			return !Ct(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(Nt) : this._write(function(n) {
				var r = e.table.core.schema.primaryKey, i = t;
				return e.table.core.count({
					trans: n,
					query: {
						index: r,
						range: i
					}
				}).then(function(t) {
					return e.table.core.mutate({
						trans: n,
						type: "deleteRange",
						range: i
					}).then(function(e) {
						var n = e.failures, e = e.numFailures;
						if (e) throw new se("Could not delete some values", Object.keys(n).map(function(e) {
							return n[e];
						}), t - e);
						return t - e;
					});
				});
			});
		}, q);
		function q() {}
		var Nt = function(e, t) {
			return t.value = null;
		};
		function Pt(e, t) {
			return e < t ? -1 : e === t ? 0 : 1;
		}
		function Ft(e, t) {
			return t < e ? -1 : e === t ? 0 : 1;
		}
		function J(e, t, n) {
			return e = e instanceof Bt ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
		}
		function It(e) {
			return new e.Collection(e, function() {
				return zt("");
			}).limit(0);
		}
		function Lt(e, t, n, r) {
			var i, a, o, s, c, l, u, d = n.length;
			if (!n.every(function(e) {
				return typeof e == "string";
			})) return J(e, lt);
			function f(e) {
				i = e === "next" ? function(e) {
					return e.toUpperCase();
				} : function(e) {
					return e.toLowerCase();
				}, a = e === "next" ? function(e) {
					return e.toLowerCase();
				} : function(e) {
					return e.toUpperCase();
				}, o = e === "next" ? Pt : Ft;
				var t = n.map(function(e) {
					return {
						lower: a(e),
						upper: i(e)
					};
				}).sort(function(e, t) {
					return o(e.lower, t.lower);
				});
				s = t.map(function(e) {
					return e.upper;
				}), c = t.map(function(e) {
					return e.lower;
				}), u = (l = e) === "next" ? "" : r;
			}
			f("next"), e = new e.Collection(e, function() {
				return Rt(s[0], c[d - 1] + r);
			}), e._ondirectionchange = function(e) {
				f(e);
			};
			var p = 0;
			return e._addAlgorithm(function(e, n, r) {
				var i = e.key;
				if (typeof i != "string") return !1;
				var f = a(i);
				if (t(f, c, p)) return !0;
				for (var m = null, h = p; h < d; ++h) {
					var g = function(e, t, n, r, i, a) {
						for (var o = Math.min(e.length, r.length), s = -1, c = 0; c < o; ++c) {
							var l = t[c];
							if (l !== r[c]) return i(e[c], n[c]) < 0 ? e.substr(0, c) + n[c] + n.substr(c + 1) : i(e[c], r[c]) < 0 ? e.substr(0, c) + r[c] + n.substr(c + 1) : 0 <= s ? e.substr(0, s) + t[s] + n.substr(s + 1) : null;
							i(e[c], l) < 0 && (s = c);
						}
						return o < r.length && a === "next" ? e + n.substr(e.length) : o < e.length && a === "prev" ? e.substr(0, n.length) : s < 0 ? null : e.substr(0, s) + r[s] + n.substr(s + 1);
					}(i, f, s[h], c[h], o, l);
					g === null && m === null ? p = h + 1 : (m === null || 0 < o(m, g)) && (m = g);
				}
				return n(m === null ? r : function() {
					e.continue(m + u);
				}), !1;
			}), e;
		}
		function Rt(e, t, n, r) {
			return {
				type: 2,
				lower: e,
				upper: t,
				lowerOpen: n,
				upperOpen: r
			};
		}
		function zt(e) {
			return {
				type: 1,
				lower: e,
				upper: e
			};
		}
		var Bt = (Object.defineProperty(Y.prototype, "Collection", {
			get: function() {
				return this._ctx.table.db.Collection;
			},
			enumerable: !1,
			configurable: !0
		}), Y.prototype.between = function(e, t, n, r) {
			n = !1 !== n, r = !0 === r;
			try {
				return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? It(this) : new this.Collection(this, function() {
					return Rt(e, t, !n, !r);
				});
			} catch {
				return J(this, ct);
			}
		}, Y.prototype.equals = function(e) {
			return e == null ? J(this, ct) : new this.Collection(this, function() {
				return zt(e);
			});
		}, Y.prototype.above = function(e) {
			return e == null ? J(this, ct) : new this.Collection(this, function() {
				return Rt(e, void 0, !0);
			});
		}, Y.prototype.aboveOrEqual = function(e) {
			return e == null ? J(this, ct) : new this.Collection(this, function() {
				return Rt(e, void 0, !1);
			});
		}, Y.prototype.below = function(e) {
			return e == null ? J(this, ct) : new this.Collection(this, function() {
				return Rt(void 0, e, !1, !0);
			});
		}, Y.prototype.belowOrEqual = function(e) {
			return e == null ? J(this, ct) : new this.Collection(this, function() {
				return Rt(void 0, e);
			});
		}, Y.prototype.startsWith = function(e) {
			return typeof e == "string" ? this.between(e, e + st, !0, !0) : J(this, lt);
		}, Y.prototype.startsWithIgnoreCase = function(e) {
			return e === "" ? this.startsWith(e) : Lt(this, function(e, t) {
				return e.indexOf(t[0]) === 0;
			}, [e], st);
		}, Y.prototype.equalsIgnoreCase = function(e) {
			return Lt(this, function(e, t) {
				return e === t[0];
			}, [e], "");
		}, Y.prototype.anyOfIgnoreCase = function() {
			var e = A.apply(ie, arguments);
			return e.length === 0 ? It(this) : Lt(this, function(e, t) {
				return t.indexOf(e) !== -1;
			}, e, "");
		}, Y.prototype.startsWithAnyOfIgnoreCase = function() {
			var e = A.apply(ie, arguments);
			return e.length === 0 ? It(this) : Lt(this, function(e, t) {
				return t.some(function(t) {
					return e.indexOf(t) === 0;
				});
			}, e, st);
		}, Y.prototype.anyOf = function() {
			var e = this, t = A.apply(ie, arguments), n = this._cmp;
			try {
				t.sort(n);
			} catch {
				return J(this, ct);
			}
			if (t.length === 0) return It(this);
			var r = new this.Collection(this, function() {
				return Rt(t[0], t[t.length - 1]);
			});
			r._ondirectionchange = function(r) {
				n = r === "next" ? e._ascending : e._descending, t.sort(n);
			};
			var i = 0;
			return r._addAlgorithm(function(e, r, a) {
				for (var o = e.key; 0 < n(o, t[i]);) if (++i === t.length) return r(a), !1;
				return n(o, t[i]) === 0 || (r(function() {
					e.continue(t[i]);
				}), !1);
			}), r;
		}, Y.prototype.notEqual = function(e) {
			return this.inAnyRange([[-Infinity, e], [e, this.db._maxKey]], {
				includeLowers: !1,
				includeUppers: !1
			});
		}, Y.prototype.noneOf = function() {
			var e = A.apply(ie, arguments);
			if (e.length === 0) return new this.Collection(this);
			try {
				e.sort(this._ascending);
			} catch {
				return J(this, ct);
			}
			var t = e.reduce(function(e, t) {
				return e ? e.concat([[e[e.length - 1][1], t]]) : [[-Infinity, t]];
			}, null);
			return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, {
				includeLowers: !1,
				includeUppers: !1
			});
		}, Y.prototype.inAnyRange = function(e, t) {
			var n = this, r = this._cmp, i = this._ascending, a = this._descending, o = this._min, s = this._max;
			if (e.length === 0) return It(this);
			if (!e.every(function(e) {
				return e[0] !== void 0 && e[1] !== void 0 && i(e[0], e[1]) <= 0;
			})) return J(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", I.InvalidArgument);
			var c = !t || !1 !== t.includeLowers, l = t && !0 === t.includeUppers, u, d = i;
			function f(e, t) {
				return d(e[0], t[0]);
			}
			try {
				(u = e.reduce(function(e, t) {
					for (var n = 0, i = e.length; n < i; ++n) {
						var a = e[n];
						if (r(t[0], a[1]) < 0 && 0 < r(t[1], a[0])) {
							a[0] = o(a[0], t[0]), a[1] = s(a[1], t[1]);
							break;
						}
					}
					return n === i && e.push(t), e;
				}, [])).sort(f);
			} catch {
				return J(this, ct);
			}
			var p = 0, m = l ? function(e) {
				return 0 < i(e, u[p][1]);
			} : function(e) {
				return 0 <= i(e, u[p][1]);
			}, h = c ? function(e) {
				return 0 < a(e, u[p][0]);
			} : function(e) {
				return 0 <= a(e, u[p][0]);
			}, g = m, e = new this.Collection(this, function() {
				return Rt(u[0][0], u[u.length - 1][1], !c, !l);
			});
			return e._ondirectionchange = function(e) {
				d = e === "next" ? (g = m, i) : (g = h, a), u.sort(f);
			}, e._addAlgorithm(function(e, t, r) {
				for (var a, o = e.key; g(o);) if (++p === u.length) return t(r), !1;
				return !m(a = o) && !h(a) || (n._cmp(o, u[p][1]) === 0 || n._cmp(o, u[p][0]) === 0 || t(function() {
					d === i ? e.continue(u[p][0]) : e.continue(u[p][1]);
				}), !1);
			}), e;
		}, Y.prototype.startsWithAnyOf = function() {
			var e = A.apply(ie, arguments);
			return e.every(function(e) {
				return typeof e == "string";
			}) ? e.length === 0 ? It(this) : this.inAnyRange(e.map(function(e) {
				return [e, e + st];
			})) : J(this, "startsWithAnyOf() only works with strings");
		}, Y);
		function Y() {}
		function Vt(e) {
			return B(function(t) {
				return Ht(t), e(t.target.error), !1;
			});
		}
		function Ht(e) {
			e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
		}
		var Ut = "storagemutated", Wt = "x-storagemutated-1", Gt = xt(null, Ut), Kt = (qt.prototype._lock = function() {
			return v(!R.global), ++this._reculock, this._reculock !== 1 || R.global || (R.lockOwnerFor = this), this;
		}, qt.prototype._unlock = function() {
			if (v(!R.global), --this._reculock == 0) for (R.global || (R.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked();) {
				var e = this._blockedFuncs.shift();
				try {
					it(e[1], e[0]);
				} catch {}
			}
			return this;
		}, qt.prototype._locked = function() {
			return this._reculock && R.lockOwnerFor !== this;
		}, qt.prototype.create = function(e) {
			var t = this;
			if (!this.mode) return this;
			var n = this.db.idbdb, r = this.db._state.dbOpenError;
			if (v(!this.idbtrans), !e && !n) switch (r && r.name) {
				case "DatabaseClosedError": throw new I.DatabaseClosed(r);
				case "MissingAPIError": throw new I.MissingAPI(r.message, r);
				default: throw new I.OpenFailed(r);
			}
			if (!this.active) throw new I.TransactionInactive();
			return v(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = B(function(n) {
				Ht(n), t._reject(e.error);
			}), e.onabort = B(function(n) {
				Ht(n), t.active && t._reject(new I.Abort(e.error)), t.active = !1, t.on("abort").fire(n);
			}), e.oncomplete = B(function() {
				t.active = !1, t._resolve(), "mutatedParts" in e && Gt.storagemutated.fire(e.mutatedParts);
			}), this;
		}, qt.prototype._promise = function(e, t, n) {
			var r = this;
			if (e === "readwrite" && this.mode !== "readwrite") return U(new I.ReadOnly("Transaction is readonly"));
			if (!this.active) return U(new I.TransactionInactive());
			if (this._locked()) return new z(function(i, a) {
				r._blockedFuncs.push([function() {
					r._promise(e, t, n).then(i, a);
				}, R]);
			});
			if (n) return H(function() {
				var e = new z(function(e, n) {
					r._lock();
					var i = t(e, n, r);
					i && i.then && i.then(e, n);
				});
				return e.finally(function() {
					return r._unlock();
				}), e._lib = !0, e;
			});
			var i = new z(function(e, n) {
				var i = t(e, n, r);
				i && i.then && i.then(e, n);
			});
			return i._lib = !0, i;
		}, qt.prototype._root = function() {
			return this.parent ? this.parent._root() : this;
		}, qt.prototype.waitFor = function(e) {
			var t, n = this._root(), r = z.resolve(e);
			n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
				return r;
			}) : (n._waitingFor = r, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), function e() {
				for (++n._spinCount; n._waitingQueue.length;) n._waitingQueue.shift()();
				n._waitingFor && (t.get(-Infinity).onsuccess = e);
			}());
			var i = n._waitingFor;
			return new z(function(e, t) {
				r.then(function(t) {
					return n._waitingQueue.push(B(e.bind(null, t)));
				}, function(e) {
					return n._waitingQueue.push(B(t.bind(null, e)));
				}).finally(function() {
					n._waitingFor === i && (n._waitingFor = null);
				});
			});
		}, qt.prototype.abort = function() {
			this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new I.Abort()));
		}, qt.prototype.table = function(e) {
			var t = this._memoizedTables ||= {};
			if (l(t, e)) return t[e];
			var n = this.schema[e];
			if (!n) throw new I.NotFound("Table " + e + " not part of transaction");
			return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), t[e] = n;
		}, qt);
		function qt() {}
		function Jt(e, t, n, r, i, a, o, s) {
			return {
				name: e,
				keyPath: t,
				unique: n,
				multi: r,
				auto: i,
				compound: a,
				src: (n && !o ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + Yt(t),
				type: s
			};
		}
		function Yt(e) {
			return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
		}
		function Xt(e, t, n) {
			return {
				name: e,
				primKey: t,
				indexes: n,
				mappedClass: null,
				idxByName: (r = function(e) {
					return [e.name, e];
				}, n.reduce(function(e, t, n) {
					return n = r(t, n), n && (e[n[0]] = n[1]), e;
				}, {}))
			};
			var r;
		}
		var Zt = function(e) {
			try {
				return e.only([[]]), Zt = function() {
					return [[]];
				}, [[]];
			} catch {
				return Zt = function() {
					return st;
				}, st;
			}
		};
		function Qt(e) {
			return e == null ? function() {} : typeof e == "string" ? (t = e).split(".").length === 1 ? function(e) {
				return e[t];
			} : function(e) {
				return b(e, t);
			} : function(t) {
				return b(t, e);
			};
			var t;
		}
		function $t(e) {
			return [].slice.call(e);
		}
		var en = 0;
		function tn(e) {
			return e == null ? ":id" : typeof e == "string" ? e : `[${e.join("+")}]`;
		}
		function nn(e, t, n) {
			function r(e) {
				if (e.type === 3) return null;
				if (e.type === 4) throw Error("Cannot convert never type to IDBKeyRange");
				var n = e.lower, r = e.upper, i = e.lowerOpen, e = e.upperOpen;
				return n === void 0 ? r === void 0 ? null : t.upperBound(r, !!e) : r === void 0 ? t.lowerBound(n, !!i) : t.bound(n, r, !!i, !!e);
			}
			function i(e) {
				var t, n = e.name;
				return {
					name: n,
					schema: e,
					mutate: function(e) {
						var t = e.trans, i = e.type, a = e.keys, o = e.values, s = e.range;
						return new Promise(function(e, c) {
							e = B(e);
							var l = t.objectStore(n), u = l.keyPath == null, d = i === "put" || i === "add";
							if (!d && i !== "delete" && i !== "deleteRange") throw Error("Invalid operation type: " + i);
							var f, p = (a || o || { length: 1 }).length;
							if (a && o && a.length !== o.length) throw Error("Given keys array must have same length as given values array.");
							if (p === 0) return e({
								numFailures: 0,
								failures: {},
								results: [],
								lastResult: void 0
							});
							function m(e) {
								++_, Ht(e);
							}
							var h = [], g = [], _ = 0;
							if (i === "deleteRange") {
								if (s.type === 4) return e({
									numFailures: _,
									failures: g,
									results: [],
									lastResult: void 0
								});
								s.type === 3 ? h.push(f = l.clear()) : h.push(f = l.delete(r(s)));
							} else {
								var u = d ? u ? [o, a] : [o, null] : [a, null], v = u[0], y = u[1];
								if (d) for (var b = 0; b < p; ++b) h.push(f = y && y[b] !== void 0 ? l[i](v[b], y[b]) : l[i](v[b])), f.onerror = m;
								else for (b = 0; b < p; ++b) h.push(f = l[i](v[b])), f.onerror = m;
							}
							function x(t) {
								t = t.target.result, h.forEach(function(e, t) {
									return e.error != null && (g[t] = e.error);
								}), e({
									numFailures: _,
									failures: g,
									results: i === "delete" ? a : h.map(function(e) {
										return e.result;
									}),
									lastResult: t
								});
							}
							f.onerror = function(e) {
								m(e), x(e);
							}, f.onsuccess = x;
						});
					},
					getMany: function(e) {
						var t = e.trans, r = e.keys;
						return new Promise(function(e, i) {
							e = B(e);
							for (var a, o = t.objectStore(n), s = r.length, c = Array(s), l = 0, u = 0, d = function(t) {
								t = t.target, c[t._pos] = t.result, ++u === l && e(c);
							}, f = Vt(i), p = 0; p < s; ++p) r[p] != null && ((a = o.get(r[p]))._pos = p, a.onsuccess = d, a.onerror = f, ++l);
							l === 0 && e(c);
						});
					},
					get: function(e) {
						var t = e.trans, r = e.key;
						return new Promise(function(e, i) {
							e = B(e);
							var a = t.objectStore(n).get(r);
							a.onsuccess = function(t) {
								return e(t.target.result);
							}, a.onerror = Vt(i);
						});
					},
					query: (t = u, function(e) {
						return new Promise(function(i, a) {
							i = B(i);
							var o, s, c, l = e.trans, u = e.values, d = e.limit, f = e.query, p = d === Infinity ? void 0 : d, m = f.index, f = f.range, l = l.objectStore(n), m = m.isPrimaryKey ? l : l.index(m.name), f = r(f);
							if (d === 0) return i({ result: [] });
							t ? ((p = u ? m.getAll(f, p) : m.getAllKeys(f, p)).onsuccess = function(e) {
								return i({ result: e.target.result });
							}, p.onerror = Vt(a)) : (o = 0, s = !u && "openKeyCursor" in m ? m.openKeyCursor(f) : m.openCursor(f), c = [], s.onsuccess = function(e) {
								var t = s.result;
								return t ? (c.push(u ? t.value : t.primaryKey), ++o === d ? i({ result: c }) : void t.continue()) : i({ result: c });
							}, s.onerror = Vt(a));
						});
					}),
					openCursor: function(e) {
						var t = e.trans, i = e.values, a = e.query, o = e.reverse, s = e.unique;
						return new Promise(function(e, c) {
							e = B(e);
							var l = a.index, u = a.range, d = t.objectStore(n), d = l.isPrimaryKey ? d : d.index(l.name), l = o ? s ? "prevunique" : "prev" : s ? "nextunique" : "next", f = !i && "openKeyCursor" in d ? d.openKeyCursor(r(u), l) : d.openCursor(r(u), l);
							f.onerror = Vt(c), f.onsuccess = B(function(n) {
								var r, i, a, o, s = f.result;
								s ? (s.___id = ++en, s.done = !1, r = s.continue.bind(s), i = (i = s.continuePrimaryKey) && i.bind(s), a = s.advance.bind(s), o = function() {
									throw Error("Cursor not stopped");
								}, s.trans = t, s.stop = s.continue = s.continuePrimaryKey = s.advance = function() {
									throw Error("Cursor not started");
								}, s.fail = B(c), s.next = function() {
									var e = this, t = 1;
									return this.start(function() {
										return t-- ? e.continue() : e.stop();
									}).then(function() {
										return e;
									});
								}, s.start = function(e) {
									function t() {
										if (f.result) try {
											e();
										} catch (e) {
											s.fail(e);
										}
										else s.done = !0, s.start = function() {
											throw Error("Cursor behind last entry");
										}, s.stop();
									}
									var n = new Promise(function(e, t) {
										e = B(e), f.onerror = Vt(t), s.fail = t, s.stop = function(t) {
											s.stop = s.continue = s.continuePrimaryKey = s.advance = o, e(t);
										};
									});
									return f.onsuccess = B(function(e) {
										f.onsuccess = t, t();
									}), s.continue = r, s.continuePrimaryKey = i, s.advance = a, t(), n;
								}, e(s)) : e(null);
							}, c);
						});
					},
					count: function(e) {
						var t = e.query, i = e.trans, a = t.index, o = t.range;
						return new Promise(function(e, t) {
							var s = i.objectStore(n), c = a.isPrimaryKey ? s : s.index(a.name), s = r(o), c = s ? c.count(s) : c.count();
							c.onsuccess = B(function(t) {
								return e(t.target.result);
							}), c.onerror = Vt(t);
						});
					}
				};
			}
			var o, s, c, l = (s = n, c = $t((o = e).objectStoreNames), {
				schema: {
					name: o.name,
					tables: c.map(function(e) {
						return s.objectStore(e);
					}).map(function(e) {
						var t = e.keyPath, n = e.autoIncrement, r = a(t), i = {}, n = {
							name: e.name,
							primaryKey: {
								name: null,
								isPrimaryKey: !0,
								outbound: t == null,
								compound: r,
								keyPath: t,
								autoIncrement: n,
								unique: !0,
								extractKey: Qt(t)
							},
							indexes: $t(e.indexNames).map(function(t) {
								return e.index(t);
							}).map(function(e) {
								var t = e.name, n = e.unique, r = e.multiEntry, e = e.keyPath, r = {
									name: t,
									compound: a(e),
									keyPath: e,
									unique: n,
									multiEntry: r,
									extractKey: Qt(e)
								};
								return i[tn(e)] = r;
							}),
							getIndexByKeyPath: function(e) {
								return i[tn(e)];
							}
						};
						return i[":id"] = n.primaryKey, t != null && (i[tn(t)] = n.primaryKey), n;
					})
				},
				hasGetAll: 0 < c.length && "getAll" in s.objectStore(c[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
			}), n = l.schema, u = l.hasGetAll, l = n.tables.map(i), d = {};
			return l.forEach(function(e) {
				return d[e.name] = e;
			}), {
				stack: "dbcore",
				transaction: e.transaction.bind(e),
				table: function(e) {
					if (!d[e]) throw Error(`Table '${e}' not found`);
					return d[e];
				},
				MIN_KEY: -Infinity,
				MAX_KEY: Zt(t),
				schema: n
			};
		}
		function rn(e, n, r, i) {
			var a = r.IDBKeyRange;
			return r.indexedDB, { dbcore: (i = nn(n, a, i), e.dbcore.reduce(function(e, n) {
				return n = n.create, t(t({}, e), n(e));
			}, i)) };
		}
		function an(e, t) {
			var n = t.db, t = rn(e._middlewares, n, e._deps, t);
			e.core = t.dbcore, e.tables.forEach(function(t) {
				var n = t.name;
				e.core.schema.tables.some(function(e) {
					return e.name === n;
				}) && (t.core = e.core.table(n), e[n] instanceof e.Table && (e[n].core = t.core));
			});
		}
		function on(e, t, n, r) {
			n.forEach(function(n) {
				var i = r[n];
				t.forEach(function(t) {
					var r = function e(t, n) {
						return m(t, n) || (t = s(t)) && e(t, n);
					}(t, n);
					(!r || "value" in r && r.value === void 0) && (t === e.Transaction.prototype || t instanceof e.Transaction ? f(t, n, {
						get: function() {
							return this.table(n);
						},
						set: function(e) {
							d(this, n, {
								value: e,
								writable: !0,
								configurable: !0,
								enumerable: !0
							});
						}
					}) : t[n] = new e.Table(n, i));
				});
			});
		}
		function sn(e, t) {
			t.forEach(function(t) {
				for (var n in t) t[n] instanceof e.Table && delete t[n];
			});
		}
		function cn(e, t) {
			return e._cfg.version - t._cfg.version;
		}
		function ln(e, t, n, r) {
			var a = e._dbSchema;
			n.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = Xt("$meta", _n("")[0], []), e._storeNames.push("$meta"));
			var o = e._createTransaction("readwrite", e._storeNames, a);
			o.create(n), o._completion.catch(r);
			var s = o._reject.bind(o), c = R.transless || R;
			H(function() {
				return R.trans = o, R.transless = c, t === 0 ? (i(a).forEach(function(e) {
					fn(n, e, a[e].primKey, a[e].indexes);
				}), an(e, n), void z.follow(function() {
					return e.on.populate.fire(o);
				}).catch(s)) : (an(e, n), l = t, ((r = o).storeNames.includes("$meta") ? r.table("$meta").get("version").then(function(e) {
					return e ?? l;
				}) : z.resolve(l)).then(function(t) {
					return a = t, s = o, c = n, l = [], t = (r = e)._versions, u = r._dbSchema = hn(0, r.idbdb, c), (t = t.filter(function(e) {
						return e._cfg.version >= a;
					})).length === 0 ? z.resolve() : (t.forEach(function(e) {
						l.push(function() {
							var t = u, n = e._cfg.dbschema;
							gn(r, t, c), gn(r, n, c), u = r._dbSchema = n;
							var o = dn(t, n);
							o.add.forEach(function(e) {
								fn(c, e[0], e[1].primKey, e[1].indexes);
							}), o.change.forEach(function(e) {
								if (e.recreate) throw new I.Upgrade("Not yet support for changing primary key");
								var t = c.objectStore(e.name);
								e.add.forEach(function(e) {
									return mn(t, e);
								}), e.change.forEach(function(e) {
									t.deleteIndex(e.name), mn(t, e);
								}), e.del.forEach(function(e) {
									return t.deleteIndex(e);
								});
							});
							var l = e._cfg.contentUpgrade;
							if (l && e._cfg.version > a) {
								an(r, c), s._memoizedTables = {};
								var d = ee(n);
								o.del.forEach(function(e) {
									d[e] = t[e];
								}), sn(r, [r.Transaction.prototype]), on(r, [r.Transaction.prototype], i(d), d), s.schema = d;
								var f, p = j(l);
								return p && Qe(), o = z.follow(function() {
									var e;
									(f = l(s)) && p && (e = $e.bind(null, null), f.then(e, e));
								}), f && typeof f.then == "function" ? z.resolve(f) : o.then(function() {
									return f;
								});
							}
						}), l.push(function(t) {
							var n = e._cfg.dbschema, i = t;
							[].slice.call(i.db.objectStoreNames).forEach(function(e) {
								return n[e] == null && i.db.deleteObjectStore(e);
							}), sn(r, [r.Transaction.prototype]), on(r, [r.Transaction.prototype], r._storeNames, r._dbSchema), s.schema = r._dbSchema;
						}), l.push(function(t) {
							r.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(r.idbdb.version / 10) === e._cfg.version ? (r.idbdb.deleteObjectStore("$meta"), delete r._dbSchema.$meta, r._storeNames = r._storeNames.filter(function(e) {
								return e !== "$meta";
							})) : t.objectStore("$meta").put(e._cfg.version, "version"));
						});
					}), function e() {
						return l.length ? z.resolve(l.shift()(s.idbtrans)).then(e) : z.resolve();
					}().then(function() {
						pn(u, c);
					}));
					var r, a, s, c, l, u;
				}).catch(s));
				var r, l;
			});
		}
		function un(e, t) {
			pn(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
			var n = hn(0, e.idbdb, t);
			gn(e, e._dbSchema, t);
			for (var r = 0, i = dn(n, e._dbSchema).change; r < i.length; r++) {
				var a = function(e) {
					if (e.change.length || e.recreate) return console.warn(`Unable to patch indexes of table ${e.name} because it has changes on the type of index or primary key.`), { value: void 0 };
					var n = t.objectStore(e.name);
					e.add.forEach(function(t) {
						be && console.debug(`Dexie upgrade patch: Creating missing index ${e.name}.${t.src}`), mn(n, t);
					});
				}(i[r]);
				if (typeof a == "object") return a.value;
			}
		}
		function dn(e, t) {
			var n, r = {
				del: [],
				add: [],
				change: []
			};
			for (n in e) t[n] || r.del.push(n);
			for (n in t) {
				var i = e[n], a = t[n];
				if (i) {
					var o = {
						name: n,
						def: a,
						recreate: !1,
						del: [],
						add: [],
						change: []
					};
					if ("" + (i.primKey.keyPath || "") != "" + (a.primKey.keyPath || "") || i.primKey.auto !== a.primKey.auto) o.recreate = !0, r.change.push(o);
					else {
						var s = i.idxByName, c = a.idxByName, l = void 0;
						for (l in s) c[l] || o.del.push(l);
						for (l in c) {
							var u = s[l], d = c[l];
							u ? u.src !== d.src && o.change.push(d) : o.add.push(d);
						}
						(0 < o.del.length || 0 < o.add.length || 0 < o.change.length) && r.change.push(o);
					}
				} else r.add.push([n, a]);
			}
			return r;
		}
		function fn(e, t, n, r) {
			var i = e.db.createObjectStore(t, n.keyPath ? {
				keyPath: n.keyPath,
				autoIncrement: n.auto
			} : { autoIncrement: n.auto });
			return r.forEach(function(e) {
				return mn(i, e);
			}), i;
		}
		function pn(e, t) {
			i(e).forEach(function(n) {
				t.db.objectStoreNames.contains(n) || (be && console.debug("Dexie: Creating missing table", n), fn(t, n, e[n].primKey, e[n].indexes));
			});
		}
		function mn(e, t) {
			e.createIndex(t.name, t.keyPath, {
				unique: t.unique,
				multiEntry: t.multi
			});
		}
		function hn(e, t, n) {
			var r = {};
			return g(t.objectStoreNames, 0).forEach(function(e) {
				for (var t = n.objectStore(e), i = Jt(Yt(c = t.keyPath), c || "", !0, !1, !!t.autoIncrement, c && typeof c != "string", !0), a = [], o = 0; o < t.indexNames.length; ++o) {
					var s = t.index(t.indexNames[o]), c = s.keyPath, s = Jt(s.name, c, !!s.unique, !!s.multiEntry, !1, c && typeof c != "string", !1);
					a.push(s);
				}
				r[e] = Xt(e, i, a);
			}), r;
		}
		function gn(e, t, n) {
			for (var i = n.db.objectStoreNames, a = 0; a < i.length; ++a) {
				var o = i[a], s = n.objectStore(o);
				e._hasGetAll = "getAll" in s;
				for (var c = 0; c < s.indexNames.length; ++c) {
					var l = s.indexNames[c], u = s.index(l).keyPath, d = typeof u == "string" ? u : "[" + g(u).join("+") + "]";
					!t[o] || (u = t[o].idxByName[d]) && (u.name = l, delete t[o].idxByName[d], t[o].idxByName[l] = u);
				}
			}
			typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && r.WorkerGlobalScope && r instanceof r.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
		}
		function _n(e) {
			return e.split(",").map(function(e, t) {
				var n = e.split(":"), r = (i = n[1])?.trim(), i = (e = n[0].trim()).replace(/([&*]|\+\+)/g, ""), n = /^\[/.test(i) ? i.match(/^\[(.*)\]$/)[1].split("+") : i;
				return Jt(i, n || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), a(n), t === 0, r);
			});
		}
		var vn = (yn.prototype._createTableSchema = Xt, yn.prototype._parseIndexSyntax = _n, yn.prototype._parseStoresSpec = function(e, t) {
			var n = this;
			i(e).forEach(function(r) {
				if (e[r] !== null) {
					var i = n._parseIndexSyntax(e[r]), a = i.shift();
					if (!a) throw new I.Schema("Invalid schema for table " + r + ": " + e[r]);
					if (a.unique = !0, a.multi) throw new I.Schema("Primary key cannot be multiEntry*");
					i.forEach(function(e) {
						if (e.auto) throw new I.Schema("Only primary key can be marked as autoIncrement (++)");
						if (!e.keyPath) throw new I.Schema("Index must have a name and cannot be an empty string");
					}), i = n._createTableSchema(r, a, i), t[r] = i;
				}
			});
		}, yn.prototype.stores = function(e) {
			var t = this.db;
			this._cfg.storesSource = this._cfg.storesSource ? o(this._cfg.storesSource, e) : e;
			var e = t._versions, n = {}, r = {};
			return e.forEach(function(e) {
				o(n, e._cfg.storesSource), r = e._cfg.dbschema = {}, e._parseStoresSpec(n, r);
			}), t._dbSchema = r, sn(t, [
				t._allTables,
				t,
				t.Transaction.prototype
			]), on(t, [
				t._allTables,
				t,
				t.Transaction.prototype,
				this._cfg.tables
			], i(r), r), t._storeNames = i(r), this;
		}, yn.prototype.upgrade = function(e) {
			return this._cfg.contentUpgrade = ye(this._cfg.contentUpgrade || L, e), this;
		}, yn);
		function yn() {}
		function bn(e, t) {
			var n = e._dbNamesDB;
			return n || (n = e._dbNamesDB = new ir(dt, {
				addons: [],
				indexedDB: e,
				IDBKeyRange: t
			})).version(1).stores({ dbnames: "name" }), n.table("dbnames");
		}
		function xn(e) {
			return e && typeof e.databases == "function";
		}
		function Sn(e) {
			return H(function() {
				return R.letThrough = !0, e();
			});
		}
		function Cn(e) {
			return !("from" in e);
		}
		var X = function(e, t) {
			if (!this) {
				var n = new X();
				return e && "d" in e && o(n, e), n;
			}
			o(this, arguments.length ? {
				d: 1,
				from: e,
				to: 1 < arguments.length ? t : e
			} : { d: 0 });
		};
		function wn(e, t, n) {
			var r = G(t, n);
			if (!isNaN(r)) {
				if (0 < r) throw RangeError();
				if (Cn(e)) return o(e, {
					from: t,
					to: n,
					d: 1
				});
				var i = e.l, r = e.r;
				if (G(n, e.from) < 0) return i ? wn(i, t, n) : e.l = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, On(e);
				if (0 < G(t, e.to)) return r ? wn(r, t, n) : e.r = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, On(e);
				G(t, e.from) < 0 && (e.from = t, e.l = null, e.d = r ? r.d + 1 : 1), 0 < G(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, i && !e.l && Tn(e, i), r && n && Tn(e, r);
			}
		}
		function Tn(e, t) {
			Cn(t) || function e(t, n) {
				var r = n.from, i = n.to, a = n.l, n = n.r;
				wn(t, r, i), a && e(t, a), n && e(t, n);
			}(e, t);
		}
		function En(e, t) {
			var n = Dn(t), r = n.next();
			if (r.done) return !1;
			for (var i = r.value, a = Dn(e), o = a.next(i.from), s = o.value; !r.done && !o.done;) {
				if (G(s.from, i.to) <= 0 && 0 <= G(s.to, i.from)) return !0;
				G(i.from, s.from) < 0 ? i = (r = n.next(s.from)).value : s = (o = a.next(i.from)).value;
			}
			return !1;
		}
		function Dn(e) {
			var t = Cn(e) ? null : {
				s: 0,
				n: e
			};
			return { next: function(e) {
				for (var n = 0 < arguments.length; t;) switch (t.s) {
					case 0: if (t.s = 1, n) for (; t.n.l && G(e, t.n.from) < 0;) t = {
						up: t,
						n: t.n.l,
						s: 1
					};
					else for (; t.n.l;) t = {
						up: t,
						n: t.n.l,
						s: 1
					};
					case 1: if (t.s = 2, !n || G(e, t.n.to) <= 0) return {
						value: t.n,
						done: !1
					};
					case 2: if (t.n.r) {
						t.s = 3, t = {
							up: t,
							n: t.n.r,
							s: 0
						};
						continue;
					}
					case 3: t = t.up;
				}
				return { done: !0 };
			} };
		}
		function On(e) {
			var n, r, i = ((n = e.r)?.d || 0) - ((r = e.l)?.d || 0), a = 1 < i ? "r" : i < -1 ? "l" : "";
			a && (n = a == "r" ? "l" : "r", r = t({}, e), i = e[a], e.from = i.from, e.to = i.to, e[a] = i[a], r[a] = i[n], (e[n] = r).d = kn(r)), e.d = kn(e);
		}
		function kn(e) {
			var t = e.r, e = e.l;
			return (t ? e ? Math.max(t.d, e.d) : t.d : e ? e.d : 0) + 1;
		}
		function An(e, t) {
			return i(t).forEach(function(n) {
				e[n] ? Tn(e[n], t[n]) : e[n] = function e(t) {
					var n, r, i = {};
					for (n in t) l(t, n) && (r = t[n], i[n] = !r || typeof r != "object" || te.has(r.constructor) ? r : e(r));
					return i;
				}(t[n]);
			}), e;
		}
		function jn(e, t) {
			return e.all || t.all || Object.keys(e).some(function(n) {
				return t[n] && En(t[n], e[n]);
			});
		}
		u(X.prototype, ((N = {
			add: function(e) {
				return Tn(this, e), this;
			},
			addKey: function(e) {
				return wn(this, e, e), this;
			},
			addKeys: function(e) {
				var t = this;
				return e.forEach(function(e) {
					return wn(t, e, e);
				}), this;
			},
			hasKey: function(e) {
				var t = Dn(this).next(e).value;
				return t && G(t.from, e) <= 0 && 0 <= G(t.to, e);
			}
		})[re] = function() {
			return Dn(this);
		}, N));
		var Mn = {}, Nn = {}, Pn = !1;
		function Fn(e) {
			An(Nn, e), Pn || (Pn = !0, setTimeout(function() {
				Pn = !1, In(Nn, !(Nn = {}));
			}, 0));
		}
		function In(e, t) {
			t === void 0 && (t = !1);
			var n = /* @__PURE__ */ new Set();
			if (e.all) for (var r = 0, i = Object.values(Mn); r < i.length; r++) Ln(o = i[r], e, n, t);
			else for (var a in e) {
				var o, s = /^idb\:\/\/(.*)\/(.*)\//.exec(a);
				s && (a = s[1], s = s[2], (o = Mn[`idb://${a}/${s}`]) && Ln(o, e, n, t));
			}
			n.forEach(function(e) {
				return e();
			});
		}
		function Ln(e, t, n, r) {
			for (var i = [], a = 0, o = Object.entries(e.queries.query); a < o.length; a++) {
				for (var s = o[a], c = s[0], l = [], u = 0, d = s[1]; u < d.length; u++) {
					var f = d[u];
					jn(t, f.obsSet) ? f.subscribers.forEach(function(e) {
						return n.add(e);
					}) : r && l.push(f);
				}
				r && i.push([c, l]);
			}
			if (r) for (var p = 0, m = i; p < m.length; p++) {
				var h = m[p], c = h[0], l = h[1];
				e.queries.query[c] = l;
			}
		}
		function Rn(e) {
			var t = e._state, n = e._deps.indexedDB;
			if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
				return t.dbOpenError ? U(t.dbOpenError) : e;
			});
			t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
			var r = t.openCanceller, a = Math.round(10 * e.verno), o = !1;
			function s() {
				if (t.openCanceller !== r) throw new I.DatabaseClosed("db.open() was cancelled");
			}
			function c() {
				return new z(function(r, l) {
					if (s(), !n) throw new I.MissingAPI();
					var u = e.name, p = t.autoSchema || !a ? n.open(u) : n.open(u, a);
					if (!p) throw new I.MissingAPI();
					p.onerror = Vt(l), p.onblocked = B(e._fireOnBlocked), p.onupgradeneeded = B(function(r) {
						var i;
						d = p.transaction, t.autoSchema && !e._options.allowEmptyDB ? (p.onerror = Ht, d.abort(), p.result.close(), (i = n.deleteDatabase(u)).onsuccess = i.onerror = B(function() {
							l(new I.NoSuchDatabase(`Database ${u} doesnt exist`));
						})) : (d.onerror = Vt(l), r = r.oldVersion > 2 ** 62 ? 0 : r.oldVersion, f = r < 1, e.idbdb = p.result, o && un(e, d), ln(e, r / 10, d, l));
					}, l), p.onsuccess = B(function() {
						d = null;
						var n, s, l, m, h, _ = e.idbdb = p.result, v = g(_.objectStoreNames);
						if (0 < v.length) try {
							var y = _.transaction((m = v).length === 1 ? m[0] : m, "readonly");
							if (t.autoSchema) s = _, l = y, (n = e).verno = s.version / 10, l = n._dbSchema = hn(0, s, l), n._storeNames = g(s.objectStoreNames, 0), on(n, [n._allTables], i(l), l);
							else if (gn(e, e._dbSchema, y), ((h = dn(hn(0, (h = e).idbdb, y), h._dbSchema)).add.length || h.change.some(function(e) {
								return e.add.length || e.change.length;
							})) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), _.close(), a = _.version + 1, o = !0, r(c());
							an(e, y);
						} catch {}
						ut.push(e), _.onversionchange = B(function(n) {
							t.vcFired = !0, e.on("versionchange").fire(n);
						}), _.onclose = B(function(t) {
							e.on("close").fire(t);
						}), f && (h = e._deps, y = u, _ = h.indexedDB, h = h.IDBKeyRange, xn(_) || y === dt || bn(_, h).put({ name: y }).catch(L)), r();
					}, l);
				}).catch(function(e) {
					switch (e?.name) {
						case "UnknownError":
							if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), c();
							break;
						case "VersionError": if (0 < a) return a = 0, c();
					}
					return z.reject(e);
				});
			}
			var l, u = t.dbReadyResolve, d = null, f = !1;
			return z.race([r, (typeof navigator > "u" ? z.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(e) {
				function t() {
					return indexedDB.databases().finally(e);
				}
				l = setInterval(t, 100), t();
			}).finally(function() {
				return clearInterval(l);
			}) : Promise.resolve()).then(c)]).then(function() {
				return s(), t.onReadyBeingFired = [], z.resolve(Sn(function() {
					return e.on.ready.fire(e.vip);
				})).then(function n() {
					if (0 < t.onReadyBeingFired.length) {
						var r = t.onReadyBeingFired.reduce(ye, L);
						return t.onReadyBeingFired = [], z.resolve(Sn(function() {
							return r(e.vip);
						})).then(n);
					}
				});
			}).finally(function() {
				t.openCanceller === r && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
			}).catch(function(n) {
				t.dbOpenError = n;
				try {
					d && d.abort();
				} catch {}
				return r === t.openCanceller && e._close(), U(n);
			}).finally(function() {
				t.openComplete = !0, u();
			}).then(function() {
				var t;
				return f && (t = {}, e.tables.forEach(function(n) {
					n.schema.indexes.forEach(function(r) {
						r.name && (t[`idb://${e.name}/${n.name}/${r.name}`] = new X(-Infinity, [[[]]]));
					}), t[`idb://${e.name}/${n.name}/`] = t[`idb://${e.name}/${n.name}/:dels`] = new X(-Infinity, [[[]]]);
				}), Gt(Ut).fire(t), In(t, !0)), e;
			});
		}
		function zn(e) {
			function t(t) {
				return e.next(t);
			}
			var n = i(t), r = i(function(t) {
				return e.throw(t);
			});
			function i(e) {
				return function(t) {
					var i = e(t), t = i.value;
					return i.done ? t : t && typeof t.then == "function" ? t.then(n, r) : a(t) ? Promise.all(t).then(n, r) : n(t);
				};
			}
			return i(t)();
		}
		function Bn(e, t, n) {
			for (var r = a(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
			return r;
		}
		var Vn = {
			stack: "dbcore",
			name: "VirtualIndexMiddleware",
			level: 1,
			create: function(e) {
				return t(t({}, e), { table: function(n) {
					var r = e.table(n), i = r.schema, a = {}, o = [];
					function s(e, n, r) {
						var i = tn(e), c = a[i] = a[i] || [], l = e == null ? 0 : typeof e == "string" ? 1 : e.length, u = 0 < n, u = t(t({}, r), {
							name: u ? `${i}(virtual-from:${r.name})` : r.name,
							lowLevelIndex: r,
							isVirtual: u,
							keyTail: n,
							keyLength: l,
							extractKey: Qt(e),
							unique: !u && r.unique
						});
						return c.push(u), u.isPrimaryKey || o.push(u), 1 < l && s(l === 2 ? e[0] : e.slice(0, l - 1), n + 1, r), c.sort(function(e, t) {
							return e.keyTail - t.keyTail;
						}), u;
					}
					n = s(i.primaryKey.keyPath, 0, i.primaryKey), a[":id"] = [n];
					for (var c = 0, l = i.indexes; c < l.length; c++) {
						var u = l[c];
						s(u.keyPath, 0, u);
					}
					function d(n) {
						var r, i = n.query.index;
						return i.isVirtual ? t(t({}, n), { query: {
							index: i.lowLevelIndex,
							range: (r = n.query.range, i = i.keyTail, {
								type: r.type === 1 ? 2 : r.type,
								lower: Bn(r.lower, r.lowerOpen ? e.MAX_KEY : e.MIN_KEY, i),
								lowerOpen: !0,
								upper: Bn(r.upper, r.upperOpen ? e.MIN_KEY : e.MAX_KEY, i),
								upperOpen: !0
							})
						} }) : n;
					}
					return t(t({}, r), {
						schema: t(t({}, i), {
							primaryKey: n,
							indexes: o,
							getIndexByKeyPath: function(e) {
								return (e = a[tn(e)]) && e[0];
							}
						}),
						count: function(e) {
							return r.count(d(e));
						},
						query: function(e) {
							return r.query(d(e));
						},
						openCursor: function(t) {
							var n = t.query.index, i = n.keyTail, a = n.isVirtual, o = n.keyLength;
							return a ? r.openCursor(d(t)).then(function(e) {
								return e && s(e);
							}) : r.openCursor(t);
							function s(n) {
								return Object.create(n, {
									continue: { value: function(r) {
										r == null ? t.unique ? n.continue(n.key.slice(0, o).concat(t.reverse ? e.MIN_KEY : e.MAX_KEY, i)) : n.continue() : n.continue(Bn(r, t.reverse ? e.MAX_KEY : e.MIN_KEY, i));
									} },
									continuePrimaryKey: { value: function(t, r) {
										n.continuePrimaryKey(Bn(t, e.MAX_KEY, i), r);
									} },
									primaryKey: { get: function() {
										return n.primaryKey;
									} },
									key: { get: function() {
										var e = n.key;
										return o === 1 ? e[0] : e.slice(0, o);
									} },
									value: { get: function() {
										return n.value;
									} }
								});
							}
						}
					});
				} });
			}
		};
		function Hn(e, t, n, r) {
			return n ||= {}, r ||= "", i(e).forEach(function(i) {
				var a, o, s;
				l(t, i) ? (a = e[i], o = t[i], typeof a == "object" && typeof o == "object" && a && o ? (s = D(a)) === D(o) ? s === "Object" ? Hn(a, o, n, r + i + ".") : a !== o && (n[r + i] = t[i]) : n[r + i] = t[i] : a !== o && (n[r + i] = t[i])) : n[r + i] = void 0;
			}), i(t).forEach(function(i) {
				l(e, i) || (n[r + i] = t[i]);
			}), n;
		}
		function Un(e, t) {
			return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
		}
		var Wn = {
			stack: "dbcore",
			name: "HooksMiddleware",
			level: 2,
			create: function(e) {
				return t(t({}, e), { table: function(r) {
					var i = e.table(r), a = i.schema.primaryKey;
					return t(t({}, i), { mutate: function(e) {
						var o = R.trans, s = o.table(r).hook, c = s.deleting, u = s.creating, d = s.updating;
						switch (e.type) {
							case "add":
								if (u.fire === L) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "put":
								if (u.fire === L && d.fire === L) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "delete":
								if (c.fire === L) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "deleteRange":
								if (c.fire === L) break;
								return o._promise("readwrite", function() {
									return function e(n, r, o) {
										return i.query({
											trans: n,
											values: !1,
											query: {
												index: a,
												range: r
											},
											limit: o
										}).then(function(i) {
											var a = i.result;
											return f({
												type: "delete",
												keys: a,
												trans: n
											}).then(function(i) {
												return 0 < i.numFailures ? Promise.reject(i.failures[0]) : a.length < o ? {
													failures: [],
													numFailures: 0,
													lastResult: void 0
												} : e(n, t(t({}, r), {
													lower: a[a.length - 1],
													lowerOpen: !0
												}), o);
											});
										});
									}(e.trans, e.range, 1e4);
								}, !0);
						}
						return i.mutate(e);
						function f(e) {
							var r, o, s, f = R.trans, p = e.keys || Un(a, e);
							if (!p) throw Error("Keys missing");
							return (e = e.type === "add" || e.type === "put" ? t(t({}, e), { keys: p }) : t({}, e)).type !== "delete" && (e.values = n([], e.values, !0)), e.keys &&= n([], e.keys, !0), r = i, s = p, ((o = e).type === "add" ? Promise.resolve([]) : r.getMany({
								trans: o.trans,
								keys: s,
								cache: "immutable"
							})).then(function(t) {
								var n = p.map(function(n, r) {
									var i, o, s, p = t[r], m = {
										onerror: null,
										onsuccess: null
									};
									return e.type === "delete" ? c.fire.call(m, n, p, f) : e.type === "add" || p === void 0 ? (i = u.fire.call(m, n, e.values[r], f), n == null && i != null && (e.keys[r] = n = i, a.outbound || x(e.values[r], a.keyPath, n))) : (i = Hn(p, e.values[r]), (o = d.fire.call(m, i, n, p, f)) && (s = e.values[r], Object.keys(o).forEach(function(e) {
										l(s, e) ? s[e] = o[e] : x(s, e, o[e]);
									}))), m;
								});
								return i.mutate(e).then(function(r) {
									for (var i = r.failures, a = r.results, o = r.numFailures, r = r.lastResult, s = 0; s < p.length; ++s) {
										var c = (a || p)[s], l = n[s];
										c == null ? l.onerror && l.onerror(i[s]) : l.onsuccess && l.onsuccess(e.type === "put" && t[s] ? e.values[s] : c);
									}
									return {
										failures: i,
										results: a,
										numFailures: o,
										lastResult: r
									};
								}).catch(function(e) {
									return n.forEach(function(t) {
										return t.onerror && t.onerror(e);
									}), Promise.reject(e);
								});
							});
						}
					} });
				} });
			}
		};
		function Gn(e, t, n) {
			try {
				if (!t || t.keys.length < e.length) return null;
				for (var r = [], i = 0, a = 0; i < t.keys.length && a < e.length; ++i) G(t.keys[i], e[a]) === 0 && (r.push(n ? E(t.values[i]) : t.values[i]), ++a);
				return r.length === e.length ? r : null;
			} catch {
				return null;
			}
		}
		var Kn = {
			stack: "dbcore",
			level: -1,
			create: function(e) {
				return { table: function(n) {
					var r = e.table(n);
					return t(t({}, r), {
						getMany: function(e) {
							if (!e.cache) return r.getMany(e);
							var t = Gn(e.keys, e.trans._cache, e.cache === "clone");
							return t ? z.resolve(t) : r.getMany(e).then(function(t) {
								return e.trans._cache = {
									keys: e.keys,
									values: e.cache === "clone" ? E(t) : t
								}, t;
							});
						},
						mutate: function(e) {
							return e.type !== "add" && (e.trans._cache = null), r.mutate(e);
						}
					});
				} };
			}
		};
		function qn(e, t) {
			return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
		}
		function Jn(e, t) {
			switch (e) {
				case "query": return t.values && !t.unique;
				case "get":
				case "getMany":
				case "count":
				case "openCursor": return !1;
			}
		}
		var Yn = {
			stack: "dbcore",
			level: 0,
			name: "Observability",
			create: function(e) {
				var n = e.schema.name, r = new X(e.MIN_KEY, e.MAX_KEY);
				return t(t({}, e), {
					transaction: function(t, n, r) {
						if (R.subscr && n !== "readonly") throw new I.ReadOnly(`Readwrite transaction in liveQuery context. Querier source: ${R.querier}`);
						return e.transaction(t, n, r);
					},
					table: function(o) {
						var s = e.table(o), c = s.schema, l = c.primaryKey, u = c.indexes, d = l.extractKey, f = l.outbound, p = l.autoIncrement && u.filter(function(e) {
							return e.compound && e.keyPath.includes(l.keyPath);
						}), m = t(t({}, s), { mutate: function(t) {
							function i(e) {
								return e = `idb://${n}/${o}/${e}`, h[e] || (h[e] = new X());
							}
							var u, d, f, m = t.trans, h = t.mutatedParts ||= {}, g = i(""), _ = i(":dels"), v = t.type, y = t.type === "deleteRange" ? [t.range] : t.type === "delete" ? [t.keys] : t.values.length < 50 ? [Un(l, t).filter(function(e) {
								return e;
							}), t.values] : [], b = y[0], x = y[1], y = t.trans._cache;
							return a(b) ? (g.addKeys(b), (y = v === "delete" || b.length === x.length ? Gn(b, y) : null) || _.addKeys(b), (y || x) && (u = i, d = y, f = x, c.indexes.forEach(function(e) {
								var t = u(e.name || "");
								function n(t) {
									return t == null ? null : e.extractKey(t);
								}
								function r(n) {
									return e.multiEntry && a(n) ? n.forEach(function(e) {
										return t.addKey(e);
									}) : t.addKey(n);
								}
								(d || f).forEach(function(e, t) {
									var i = d && n(d[t]), t = f && n(f[t]);
									G(i, t) !== 0 && (i != null && r(i), t != null && r(t));
								});
							}))) : b ? (x = {
								from: (x = b.lower) ?? e.MIN_KEY,
								to: (x = b.upper) ?? e.MAX_KEY
							}, _.add(x), g.add(x)) : (g.add(r), _.add(r), c.indexes.forEach(function(e) {
								return i(e.name).add(r);
							})), s.mutate(t).then(function(e) {
								return !b || t.type !== "add" && t.type !== "put" || (g.addKeys(e.results), p && p.forEach(function(n) {
									for (var r = t.values.map(function(e) {
										return n.extractKey(e);
									}), a = n.keyPath.findIndex(function(e) {
										return e === l.keyPath;
									}), o = 0, s = e.results.length; o < s; ++o) r[o][a] = e.results[o];
									i(n.name).addKeys(r);
								})), m.mutatedParts = An(m.mutatedParts || {}, h), e;
							});
						} }), u = function(t) {
							var n = t.query, t = n.index, n = n.range;
							return [t, new X((t = n.lower) ?? e.MIN_KEY, (n = n.upper) ?? e.MAX_KEY)];
						}, h = {
							get: function(e) {
								return [l, new X(e.key)];
							},
							getMany: function(e) {
								return [l, new X().addKeys(e.keys)];
							},
							count: u,
							query: u,
							openCursor: u
						};
						return i(h).forEach(function(e) {
							m[e] = function(i) {
								var a = R.subscr, c = !!a, l = qn(R, s) && Jn(e, i) ? i.obsSet = {} : a;
								if (c) {
									var u = function(e) {
										return e = `idb://${n}/${o}/${e}`, l[e] || (l[e] = new X());
									}, p = u(""), m = u(":dels"), a = h[e](i), c = a[0], a = a[1];
									if ((e === "query" && c.isPrimaryKey && !i.values ? m : u(c.name || "")).add(a), !c.isPrimaryKey) {
										if (e !== "count") {
											var g = e === "query" && f && i.values && s.query(t(t({}, i), { values: !1 }));
											return s[e].apply(this, arguments).then(function(t) {
												if (e === "query") {
													if (f && i.values) return g.then(function(e) {
														return e = e.result, p.addKeys(e), t;
													});
													var n = i.values ? t.result.map(d) : t.result;
													(i.values ? p : m).addKeys(n);
												} else if (e === "openCursor") {
													var r = t, a = i.values;
													return r && Object.create(r, {
														key: { get: function() {
															return m.addKey(r.primaryKey), r.key;
														} },
														primaryKey: { get: function() {
															var e = r.primaryKey;
															return m.addKey(e), e;
														} },
														value: { get: function() {
															return a && p.addKey(r.primaryKey), r.value;
														} }
													});
												}
												return t;
											});
										}
										m.add(r);
									}
								}
								return s[e].apply(this, arguments);
							};
						}), m;
					}
				});
			}
		};
		function Xn(e, n, r) {
			if (r.numFailures === 0) return n;
			if (n.type === "deleteRange") return null;
			var i = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1;
			return r.numFailures === i ? null : (n = t({}, n), a(n.keys) && (n.keys = n.keys.filter(function(e, t) {
				return !(t in r.failures);
			})), "values" in n && a(n.values) && (n.values = n.values.filter(function(e, t) {
				return !(t in r.failures);
			})), n);
		}
		function Zn(e, t) {
			return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < G(n, r.lower) : 0 <= G(n, r.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? G(e, t.upper) < 0 : G(e, t.upper) <= 0));
			var n, r;
		}
		function Qn(e, t, n, r, i, o) {
			if (!n || n.length === 0) return e;
			var s = t.query.index, c = s.multiEntry, l = t.query.range, u = r.schema.primaryKey.extractKey, d = s.extractKey, f = (s.lowLevelIndex || s).extractKey, n = n.reduce(function(e, n) {
				var r = e, i = [];
				if (n.type === "add" || n.type === "put") for (var o = new X(), s = n.values.length - 1; 0 <= s; --s) {
					var f, p = n.values[s], m = u(p);
					o.hasKey(m) || (f = d(p), (c && a(f) ? f.some(function(e) {
						return Zn(e, l);
					}) : Zn(f, l)) && (o.addKey(m), i.push(p)));
				}
				switch (n.type) {
					case "add":
						var h = new X().addKeys(t.values ? e.map(function(e) {
							return u(e);
						}) : e), r = e.concat(t.values ? i.filter(function(e) {
							return e = u(e), !h.hasKey(e) && (h.addKey(e), !0);
						}) : i.map(function(e) {
							return u(e);
						}).filter(function(e) {
							return !h.hasKey(e) && (h.addKey(e), !0);
						}));
						break;
					case "put":
						var g = new X().addKeys(n.values.map(function(e) {
							return u(e);
						}));
						r = e.filter(function(e) {
							return !g.hasKey(t.values ? u(e) : e);
						}).concat(t.values ? i : i.map(function(e) {
							return u(e);
						}));
						break;
					case "delete":
						var _ = new X().addKeys(n.keys);
						r = e.filter(function(e) {
							return !_.hasKey(t.values ? u(e) : e);
						});
						break;
					case "deleteRange":
						var v = n.range;
						r = e.filter(function(e) {
							return !Zn(u(e), v);
						});
				}
				return r;
			}, e);
			return n === e ? e : (n.sort(function(e, t) {
				return G(f(e), f(t)) || G(u(e), u(t));
			}), t.limit && t.limit < Infinity && (n.length > t.limit ? n.length = t.limit : e.length === t.limit && n.length < t.limit && (i.dirty = !0)), o ? Object.freeze(n) : n);
		}
		function $n(e, t) {
			return G(e.lower, t.lower) === 0 && G(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
		}
		function er(e, t) {
			return function(e, t, n, r) {
				if (e === void 0) return t === void 0 ? 0 : -1;
				if (t === void 0) return 1;
				if ((t = G(e, t)) === 0) {
					if (n && r) return 0;
					if (n) return 1;
					if (r) return -1;
				}
				return t;
			}(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function(e, t, n, r) {
				if (e === void 0) return t === void 0 ? 0 : 1;
				if (t === void 0) return -1;
				if ((t = G(e, t)) === 0) {
					if (n && r) return 0;
					if (n) return -1;
					if (r) return 1;
				}
				return t;
			}(e.upper, t.upper, e.upperOpen, t.upperOpen);
		}
		function tr(e, t, n, r) {
			e.subscribers.add(n), r.addEventListener("abort", function() {
				var r, i;
				e.subscribers.delete(n), e.subscribers.size === 0 && (r = e, i = t, setTimeout(function() {
					r.subscribers.size === 0 && k(i, r);
				}, 3e3));
			});
		}
		var nr = {
			stack: "dbcore",
			level: 0,
			name: "Cache",
			create: function(e) {
				var n = e.schema.name;
				return t(t({}, e), {
					transaction: function(t, r, i) {
						var a, o, s = e.transaction(t, r, i);
						return r === "readwrite" && (o = (a = new AbortController()).signal, i = function(i) {
							return function() {
								if (a.abort(), r === "readwrite") {
									for (var o = /* @__PURE__ */ new Set(), c = 0, l = t; c < l.length; c++) {
										var u = l[c], d = Mn[`idb://${n}/${u}`];
										if (d) {
											var f = e.table(u), p = d.optimisticOps.filter(function(e) {
												return e.trans === s;
											});
											if (s._explicit && i && s.mutatedParts) for (var m = 0, h = Object.values(d.queries.query); m < h.length; m++) for (var g = 0, _ = (b = h[m]).slice(); g < _.length; g++) jn((x = _[g]).obsSet, s.mutatedParts) && (k(b, x), x.subscribers.forEach(function(e) {
												return o.add(e);
											}));
											else if (0 < p.length) {
												d.optimisticOps = d.optimisticOps.filter(function(e) {
													return e.trans !== s;
												});
												for (var v = 0, y = Object.values(d.queries.query); v < y.length; v++) for (var b, x, ee, S = 0, C = (b = y[v]).slice(); S < C.length; S++) (x = C[S]).res != null && s.mutatedParts && (i && !x.dirty ? (ee = Object.isFrozen(x.res), ee = Qn(x.res, x.req, p, f, x, ee), x.dirty ? (k(b, x), x.subscribers.forEach(function(e) {
													return o.add(e);
												})) : ee !== x.res && (x.res = ee, x.promise = z.resolve({ result: ee }))) : (x.dirty && k(b, x), x.subscribers.forEach(function(e) {
													return o.add(e);
												})));
											}
										}
									}
									o.forEach(function(e) {
										return e();
									});
								}
							};
						}, s.addEventListener("abort", i(!1), { signal: o }), s.addEventListener("error", i(!1), { signal: o }), s.addEventListener("complete", i(!0), { signal: o })), s;
					},
					table: function(r) {
						var i = e.table(r), a = i.schema.primaryKey;
						return t(t({}, i), {
							mutate: function(e) {
								var o = R.trans;
								if (a.outbound || o.db._options.cache === "disabled" || o.explicit || o.idbtrans.mode !== "readwrite") return i.mutate(e);
								var s = Mn[`idb://${n}/${r}`];
								return s ? (o = i.mutate(e), e.type !== "add" && e.type !== "put" || !(50 <= e.values.length || Un(a, e).some(function(e) {
									return e == null;
								})) ? (s.optimisticOps.push(e), e.mutatedParts && Fn(e.mutatedParts), o.then(function(t) {
									0 < t.numFailures && (k(s.optimisticOps, e), (t = Xn(0, e, t)) && s.optimisticOps.push(t), e.mutatedParts && Fn(e.mutatedParts));
								}), o.catch(function() {
									k(s.optimisticOps, e), e.mutatedParts && Fn(e.mutatedParts);
								})) : o.then(function(n) {
									var r = Xn(0, t(t({}, e), { values: e.values.map(function(e, r) {
										var i;
										return n.failures[r] ? e : (e = (i = a.keyPath) != null && i.includes(".") ? E(e) : t({}, e), x(e, a.keyPath, n.results[r]), e);
									}) }), n);
									s.optimisticOps.push(r), queueMicrotask(function() {
										return e.mutatedParts && Fn(e.mutatedParts);
									});
								}), o) : i.mutate(e);
							},
							query: function(e) {
								if (!qn(R, i) || !Jn("query", e)) return i.query(e);
								var t = (c = R.trans)?.db._options.cache === "immutable", a = R, o = a.requery, s = a.signal, c = function(e, t, n, r) {
									var i = Mn[`idb://${e}/${t}`];
									if (!i) return [];
									if (!(t = i.queries[n])) return [
										null,
										!1,
										i,
										null
									];
									var a = t[(r.query ? r.query.index.name : null) || ""];
									if (!a) return [
										null,
										!1,
										i,
										null
									];
									switch (n) {
										case "query":
											var o = a.find(function(e) {
												return e.req.limit === r.limit && e.req.values === r.values && $n(e.req.query.range, r.query.range);
											});
											return o ? [
												o,
												!0,
												i,
												a
											] : [
												a.find(function(e) {
													return ("limit" in e.req ? e.req.limit : Infinity) >= r.limit && (!r.values || e.req.values) && er(e.req.query.range, r.query.range);
												}),
												!1,
												i,
												a
											];
										case "count": return o = a.find(function(e) {
											return $n(e.req.query.range, r.query.range);
										}), [
											o,
											!!o,
											i,
											a
										];
									}
								}(n, r, "query", e), l = c[0], a = c[1], u = c[2], d = c[3];
								return l && a ? l.obsSet = e.obsSet : (a = i.query(e).then(function(e) {
									var n = e.result;
									if (l && (l.res = n), t) {
										for (var r = 0, i = n.length; r < i; ++r) Object.freeze(n[r]);
										Object.freeze(n);
									} else e.result = E(n);
									return e;
								}).catch(function(e) {
									return d && l && k(d, l), Promise.reject(e);
								}), l = {
									obsSet: e.obsSet,
									promise: a,
									subscribers: /* @__PURE__ */ new Set(),
									type: "query",
									req: e,
									dirty: !1
								}, d ? d.push(l) : (d = [l], (u ||= Mn[`idb://${n}/${r}`] = {
									queries: {
										query: {},
										count: {}
									},
									objs: /* @__PURE__ */ new Map(),
									optimisticOps: [],
									unsignaledParts: {}
								}).queries.query[e.query.index.name || ""] = d)), tr(l, d, o, s), l.promise.then(function(n) {
									return { result: Qn(n.result, e, u?.optimisticOps, i, l, t) };
								});
							}
						});
					}
				});
			}
		};
		function rr(e, t) {
			return new Proxy(e, { get: function(e, n, r) {
				return n === "db" ? t : Reflect.get(e, n, r);
			} });
		}
		var ir = (Z.prototype.version = function(e) {
			if (isNaN(e) || e < .1) throw new I.Type("Given version is not a positive number");
			if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new I.Schema("Cannot add version when database is open");
			this.verno = Math.max(this.verno, e);
			var t = this._versions, n = t.filter(function(t) {
				return t._cfg.version === e;
			})[0];
			return n || (n = new this.Version(e), t.push(n), t.sort(cn), n.stores({}), this._state.autoSchema = !1, n);
		}, Z.prototype._whenReady = function(e) {
			var t = this;
			return this.idbdb && (this._state.openComplete || R.letThrough || this._vip) ? e() : new z(function(e, n) {
				if (t._state.openComplete) return n(new I.DatabaseClosed(t._state.dbOpenError));
				if (!t._state.isBeingOpened) {
					if (!t._state.autoOpen) return void n(new I.DatabaseClosed());
					t.open().catch(L);
				}
				t._state.dbReadyPromise.then(e, n);
			}).then(e);
		}, Z.prototype.use = function(e) {
			var t = e.stack, n = e.create, r = e.level, i = e.name;
			return i && this.unuse({
				stack: t,
				name: i
			}), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({
				stack: t,
				create: n,
				level: r ?? 10,
				name: i
			}), e.sort(function(e, t) {
				return e.level - t.level;
			}), this;
		}, Z.prototype.unuse = function(e) {
			var t = e.stack, n = e.name, r = e.create;
			return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(e) {
				return r ? e.create !== r : !!n && e.name !== n;
			})), this;
		}, Z.prototype.open = function() {
			var e = this;
			return it(Me, function() {
				return Rn(e);
			});
		}, Z.prototype._close = function() {
			this.on.close.fire(new CustomEvent("close"));
			var e = this._state, t = ut.indexOf(this);
			if (0 <= t && ut.splice(t, 1), this.idbdb) {
				try {
					this.idbdb.close();
				} catch {}
				this.idbdb = null;
			}
			e.isBeingOpened || (e.dbReadyPromise = new z(function(t) {
				e.dbReadyResolve = t;
			}), e.openCanceller = new z(function(t, n) {
				e.cancelOpen = n;
			}));
		}, Z.prototype.close = function(e) {
			var t = (e === void 0 ? { disableAutoOpen: !0 } : e).disableAutoOpen, e = this._state;
			t ? (e.isBeingOpened && e.cancelOpen(new I.DatabaseClosed()), this._close(), e.autoOpen = !1, e.dbOpenError = new I.DatabaseClosed()) : (this._close(), e.autoOpen = this._options.autoOpen || e.isBeingOpened, e.openComplete = !1, e.dbOpenError = null);
		}, Z.prototype.delete = function(e) {
			var t = this;
			e === void 0 && (e = { disableAutoOpen: !0 });
			var n = 0 < arguments.length && typeof arguments[0] != "object", r = this._state;
			return new z(function(i, a) {
				function o() {
					t.close(e);
					var n = t._deps.indexedDB.deleteDatabase(t.name);
					n.onsuccess = B(function() {
						var e = t._deps, n = t.name, r = e.indexedDB;
						e = e.IDBKeyRange, xn(r) || n === dt || bn(r, e).delete(n).catch(L), i();
					}), n.onerror = Vt(a), n.onblocked = t._fireOnBlocked;
				}
				if (n) throw new I.InvalidArgument("Invalid closeOptions argument to db.delete()");
				r.isBeingOpened ? r.dbReadyPromise.then(o) : o();
			});
		}, Z.prototype.backendDB = function() {
			return this.idbdb;
		}, Z.prototype.isOpen = function() {
			return this.idbdb !== null;
		}, Z.prototype.hasBeenClosed = function() {
			var e = this._state.dbOpenError;
			return e && e.name === "DatabaseClosed";
		}, Z.prototype.hasFailed = function() {
			return this._state.dbOpenError !== null;
		}, Z.prototype.dynamicallyOpened = function() {
			return this._state.autoSchema;
		}, Object.defineProperty(Z.prototype, "tables", {
			get: function() {
				var e = this;
				return i(this._allTables).map(function(t) {
					return e._allTables[t];
				});
			},
			enumerable: !1,
			configurable: !0
		}), Z.prototype.transaction = function() {
			var e = function(e, t, n) {
				var r = arguments.length;
				if (r < 2) throw new I.InvalidArgument("Too few arguments");
				for (var i = Array(r - 1); --r;) i[r - 1] = arguments[r];
				return n = i.pop(), [
					e,
					C(i),
					n
				];
			}.apply(this, arguments);
			return this._transaction.apply(this, e);
		}, Z.prototype._transaction = function(e, t, n) {
			var r = this, i = R.trans;
			i && i.db === this && e.indexOf("!") === -1 || (i = null);
			var a, o, s = e.indexOf("?") !== -1;
			e = e.replace("!", "").replace("?", "");
			try {
				if (o = t.map(function(e) {
					if (e = e instanceof r.Table ? e.name : e, typeof e != "string") throw TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
					return e;
				}), e == "r" || e === W) a = W;
				else {
					if (e != "rw" && e != ft) throw new I.InvalidArgument("Invalid transaction mode: " + e);
					a = ft;
				}
				if (i) {
					if (i.mode === W && a === ft) {
						if (!s) throw new I.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
						i = null;
					}
					i && o.forEach(function(e) {
						if (i && i.storeNames.indexOf(e) === -1) {
							if (!s) throw new I.SubTransaction("Table " + e + " not included in parent transaction.");
							i = null;
						}
					}), s && i && !i.active && (i = null);
				}
			} catch (e) {
				return i ? i._promise(null, function(t, n) {
					n(e);
				}) : U(e);
			}
			var c = function e(t, n, r, i, a) {
				return z.resolve().then(function() {
					var o = R.transless || R, s = t._createTransaction(n, r, t._dbSchema, i);
					if (s.explicit = !0, o = {
						trans: s,
						transless: o
					}, i) s.idbtrans = i.idbtrans;
					else try {
						s.create(), s.idbtrans._explicit = !0, t._state.PR1398_maxLoop = 3;
					} catch (i) {
						return i.name === le.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
							return e(t, n, r, null, a);
						})) : U(i);
					}
					var c, l = j(a);
					return l && Qe(), o = z.follow(function() {
						var e;
						(c = a.call(s, s)) && (l ? (e = $e.bind(null, null), c.then(e, e)) : typeof c.next == "function" && typeof c.throw == "function" && (c = zn(c)));
					}, o), (c && typeof c.then == "function" ? z.resolve(c).then(function(e) {
						return s.active ? e : U(new I.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
					}) : o.then(function() {
						return c;
					})).then(function(e) {
						return i && s._resolve(), s._completion.then(function() {
							return e;
						});
					}).catch(function(e) {
						return s._reject(e), U(e);
					});
				});
			}.bind(null, this, a, o, i, n);
			return i ? i._promise(a, c, "lock") : R.trans ? it(R.transless, function() {
				return r._whenReady(c);
			}) : this._whenReady(c);
		}, Z.prototype.table = function(e) {
			if (!l(this._allTables, e)) throw new I.InvalidTable(`Table ${e} does not exist`);
			return this._allTables[e];
		}, Z);
		function Z(e, n) {
			var r = this;
			this._middlewares = {}, this.verno = 0;
			var i = Z.dependencies;
			this._options = n = t({
				addons: Z.addons,
				autoOpen: !0,
				indexedDB: i.indexedDB,
				IDBKeyRange: i.IDBKeyRange,
				cache: "cloned"
			}, n), this._deps = {
				indexedDB: n.indexedDB,
				IDBKeyRange: n.IDBKeyRange
			}, i = n.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
			var a, o, s, c, l, u = {
				dbOpenError: null,
				isBeingOpened: !1,
				onReadyBeingFired: null,
				openComplete: !1,
				dbReadyResolve: L,
				dbReadyPromise: null,
				cancelOpen: L,
				openCanceller: null,
				autoSchema: !0,
				PR1398_maxLoop: 3,
				autoOpen: n.autoOpen
			};
			u.dbReadyPromise = new z(function(e) {
				u.dbReadyResolve = e;
			}), u.openCanceller = new z(function(e, t) {
				u.cancelOpen = t;
			}), this._state = u, this.name = e, this.on = xt(this, "populate", "blocked", "versionchange", "close", { ready: [ye, L] }), this.once = function(e, t) {
				var n = function() {
					var i = [...arguments];
					r.on(e).unsubscribe(n), t.apply(r, i);
				};
				return r.on(e, n);
			}, this.on.ready.subscribe = _(this.on.ready.subscribe, function(e) {
				return function(t, n) {
					Z.vip(function() {
						var i, a = r._state;
						a.openComplete ? (a.dbOpenError || z.resolve().then(t), n && e(t)) : a.onReadyBeingFired ? (a.onReadyBeingFired.push(t), n && e(t)) : (e(t), i = r, n || e(function e() {
							i.on.ready.unsubscribe(t), i.on.ready.unsubscribe(e);
						}));
					});
				};
			}), this.Collection = (a = this, St(Mt.prototype, function(e, t) {
				this.db = a;
				var n = mt, r = null;
				if (t) try {
					n = t();
				} catch (e) {
					r = e;
				}
				var i = e._ctx, t = i.table, e = t.hook.reading.fire;
				this._ctx = {
					table: t,
					index: i.index,
					isPrimKey: !i.index || t.schema.primKey.keyPath && i.index === t.schema.primKey.name,
					range: n,
					keysOnly: !1,
					dir: "next",
					unique: "",
					algorithm: null,
					filter: null,
					replayFilter: null,
					justLimit: !0,
					isMatch: null,
					offset: 0,
					limit: Infinity,
					error: r,
					or: i.or,
					valueMapper: e === fe ? null : e
				};
			})), this.Table = (o = this, St(bt.prototype, function(e, t, n) {
				this.db = o, this._tx = n, this.name = e, this.schema = t, this.hook = o._allTables[e] ? o._allTables[e].hook : xt(null, {
					creating: [he, L],
					reading: [pe, fe],
					updating: [_e, L],
					deleting: [ge, L]
				});
			})), this.Transaction = (s = this, St(Kt.prototype, function(e, t, n, r, i) {
				var a = this;
				e !== "readonly" && t.forEach(function(e) {
					e = (e = n[e])?.yProps, e && (t = t.concat(e.map(function(e) {
						return e.updatesTable;
					})));
				}), this.db = s, this.mode = e, this.storeNames = t, this.schema = n, this.chromeTransactionDurability = r, this.idbtrans = null, this.on = xt(this, "complete", "error", "abort"), this.parent = i || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new z(function(e, t) {
					a._resolve = e, a._reject = t;
				}), this._completion.then(function() {
					a.active = !1, a.on.complete.fire();
				}, function(e) {
					var t = a.active;
					return a.active = !1, a.on.error.fire(e), a.parent ? a.parent._reject(e) : t && a.idbtrans && a.idbtrans.abort(), U(e);
				});
			})), this.Version = (c = this, St(vn.prototype, function(e) {
				this.db = c, this._cfg = {
					version: e,
					storesSource: null,
					dbschema: {},
					tables: {},
					contentUpgrade: null
				};
			})), this.WhereClause = (l = this, St(Bt.prototype, function(e, t, n) {
				if (this.db = l, this._ctx = {
					table: e,
					index: t === ":id" ? null : t,
					or: n
				}, this._cmp = this._ascending = G, this._descending = function(e, t) {
					return G(t, e);
				}, this._max = function(e, t) {
					return 0 < G(e, t) ? e : t;
				}, this._min = function(e, t) {
					return G(e, t) < 0 ? e : t;
				}, this._IDBKeyRange = l._deps.IDBKeyRange, !this._IDBKeyRange) throw new I.MissingAPI();
			})), this.on("versionchange", function(e) {
				0 < e.newVersion ? console.warn(`Another connection wants to upgrade database '${r.name}'. Closing db now to resume the upgrade.`) : console.warn(`Another connection wants to delete database '${r.name}'. Closing db now to resume the delete request.`), r.close({ disableAutoOpen: !1 });
			}), this.on("blocked", function(e) {
				!e.newVersion || e.newVersion < e.oldVersion ? console.warn(`Dexie.delete('${r.name}') was blocked`) : console.warn(`Upgrade '${r.name}' blocked by other connection holding version ${e.oldVersion / 10}`);
			}), this._maxKey = Zt(n.IDBKeyRange), this._createTransaction = function(e, t, n, i) {
				return new r.Transaction(e, t, n, r._options.chromeTransactionDurability, i);
			}, this._fireOnBlocked = function(e) {
				r.on("blocked").fire(e), ut.filter(function(e) {
					return e.name === r.name && e !== r && !e._state.vcFired;
				}).map(function(t) {
					return t.on("versionchange").fire(e);
				});
			}, this.use(Kn), this.use(nr), this.use(Yn), this.use(Vn), this.use(Wn);
			var d = new Proxy(this, { get: function(e, t, n) {
				if (t === "_vip") return !0;
				if (t === "table") return function(e) {
					return rr(r.table(e), d);
				};
				var i = Reflect.get(e, t, n);
				return i instanceof bt ? rr(i, d) : t === "tables" ? i.map(function(e) {
					return rr(e, d);
				}) : t === "_createTransaction" ? function() {
					return rr(i.apply(this, arguments), d);
				} : i;
			} });
			this.vip = d, i.forEach(function(e) {
				return e(r);
			});
		}
		var Q, N = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ar = (or.prototype.subscribe = function(e, t, n) {
			return this._subscribe(e && typeof e != "function" ? e : {
				next: e,
				error: t,
				complete: n
			});
		}, or.prototype[N] = function() {
			return this;
		}, or);
		function or(e) {
			this._subscribe = e;
		}
		try {
			Q = {
				indexedDB: r.indexedDB || r.mozIndexedDB || r.webkitIndexedDB || r.msIndexedDB,
				IDBKeyRange: r.IDBKeyRange || r.webkitIDBKeyRange
			};
		} catch {
			Q = {
				indexedDB: null,
				IDBKeyRange: null
			};
		}
		function sr(e) {
			var t, n = !1, r = new ar(function(r) {
				var i = j(e), a, o = !1, s = {}, c = {}, u = {
					get closed() {
						return o;
					},
					unsubscribe: function() {
						o || (o = !0, a && a.abort(), d && Gt.storagemutated.unsubscribe(p));
					}
				};
				r.start && r.start(u);
				var d = !1, f = function() {
					return ot(m);
				}, p = function(e) {
					An(s, e), jn(c, s) && f();
				}, m = function() {
					var u, m, h;
					!o && Q.indexedDB && (s = {}, u = {}, a && a.abort(), a = new AbortController(), h = function(t) {
						var n = Ue();
						try {
							i && Qe();
							var r = H(e, t);
							return r = i ? r.finally($e) : r;
						} finally {
							n && We();
						}
					}(m = {
						subscr: u,
						signal: a.signal,
						requery: f,
						querier: e,
						trans: null
					}), Promise.resolve(h).then(function(e) {
						n = !0, t = e, o || m.signal.aborted || (s = {}, function(e) {
							for (var t in e) if (l(e, t)) return;
							return 1;
						}(c = u) || d || (Gt(Ut, p), d = !0), ot(function() {
							return !o && r.next && r.next(e);
						}));
					}, function(e) {
						n = !1, ["DatabaseClosedError", "AbortError"].includes(e?.name) || o || ot(function() {
							o || r.error && r.error(e);
						});
					}));
				};
				return setTimeout(f, 0), u;
			});
			return r.hasValue = function() {
				return n;
			}, r.getValue = function() {
				return t;
			}, r;
		}
		var cr = ir;
		function lr(e) {
			var t = dr;
			try {
				dr = !0, Gt.storagemutated.fire(e), In(e, !0);
			} finally {
				dr = t;
			}
		}
		u(cr, t(t({}, de), {
			delete: function(e) {
				return new cr(e, { addons: [] }).delete();
			},
			exists: function(e) {
				return new cr(e, { addons: [] }).open().then(function(e) {
					return e.close(), !0;
				}).catch("NoSuchDatabaseError", function() {
					return !1;
				});
			},
			getDatabaseNames: function(e) {
				try {
					return t = cr.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (xn(n) ? Promise.resolve(n.databases()).then(function(e) {
						return e.map(function(e) {
							return e.name;
						}).filter(function(e) {
							return e !== dt;
						});
					}) : bn(n, t).toCollection().primaryKeys()).then(e);
				} catch {
					return U(new I.MissingAPI());
				}
				var t, n;
			},
			defineClass: function() {
				return function(e) {
					o(this, e);
				};
			},
			ignoreTransaction: function(e) {
				return R.trans ? it(R.transless, e) : e();
			},
			vip: Sn,
			async: function(e) {
				return function() {
					try {
						var t = zn(e.apply(this, arguments));
						return t && typeof t.then == "function" ? t : z.resolve(t);
					} catch (e) {
						return U(e);
					}
				};
			},
			spawn: function(e, t, n) {
				try {
					var r = zn(e.apply(n, t || []));
					return r && typeof r.then == "function" ? r : z.resolve(r);
				} catch (e) {
					return U(e);
				}
			},
			currentTransaction: { get: function() {
				return R.trans || null;
			} },
			waitFor: function(e, t) {
				return t = z.resolve(typeof e == "function" ? cr.ignoreTransaction(e) : e).timeout(t || 6e4), R.trans ? R.trans.waitFor(t) : t;
			},
			Promise: z,
			debug: {
				get: function() {
					return be;
				},
				set: function(e) {
					xe(e);
				}
			},
			derive: p,
			extend: o,
			props: u,
			override: _,
			Events: xt,
			on: Gt,
			liveQuery: sr,
			extendObservabilitySet: An,
			getByKeyPath: b,
			setByKeyPath: x,
			delByKeyPath: function(e, t) {
				typeof t == "string" ? x(e, t, void 0) : "length" in t && [].map.call(t, function(t) {
					x(e, t, void 0);
				});
			},
			shallowClone: ee,
			deepClone: E,
			getObjectDiff: Hn,
			cmp: G,
			asap: y,
			minKey: -Infinity,
			addons: [],
			connections: ut,
			errnames: le,
			dependencies: Q,
			cache: Mn,
			semVer: "4.2.0",
			version: "4.2.0".split(".").map(function(e) {
				return parseInt(e);
			}).reduce(function(e, t, n) {
				return e + t / 10 ** (2 * n);
			})
		})), cr.maxKey = Zt(cr.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Gt(Ut, function(e) {
			dr ||= (e = new CustomEvent(Wt, { detail: e }), dr = !0, dispatchEvent(e), !1);
		}), addEventListener(Wt, function(e) {
			e = e.detail, dr || lr(e);
		}));
		var ur, dr = !1, fr = function() {};
		return typeof BroadcastChannel < "u" && ((fr = function() {
			(ur = new BroadcastChannel(Wt)).onmessage = function(e) {
				return e.data && lr(e.data);
			};
		})(), typeof ur.unref == "function" && ur.unref(), Gt(Ut, function(e) {
			dr || ur.postMessage(e);
		})), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
			if (!ir.disableBfCache && e.persisted) {
				be && console.debug("Dexie: handling persisted pagehide"), ur?.close();
				for (var t = 0, n = ut; t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
			}
		}), addEventListener("pageshow", function(e) {
			!ir.disableBfCache && e.persisted && (be && console.debug("Dexie: handling persisted pageshow"), fr(), lr({ all: new X(-Infinity, [[]]) }));
		})), z.rejectionMapper = function(e, t) {
			return !e || e instanceof P || e instanceof TypeError || e instanceof SyntaxError || !e.name || !ue[e.name] ? e : (t = new ue[e.name](t || e.message, e), "stack" in e && f(t, "stack", { get: function() {
				return this.inner.stack;
			} }), t);
		}, xe(be), t(ir, Object.freeze({
			__proto__: null,
			Dexie: ir,
			liveQuery: sr,
			Entity: gt,
			cmp: G,
			PropModification: At,
			replacePrefix: function(e, t) {
				return new At({ replacePrefix: [e, t] });
			},
			add: function(e) {
				return new At({ add: e });
			},
			remove: function(e) {
				return new At({ remove: e });
			},
			default: ir,
			RangeSet: X,
			mergeRanges: Tn,
			rangesOverlap: En
		}), { default: ir }), ir;
	});
})))(), 1), sa = Symbol.for("Dexie"), ca = globalThis[sa] || (globalThis[sa] = oa.default);
if (oa.default.semVer !== ca.semVer) throw Error(`Two different versions of Dexie loaded in the same app: ${oa.default.semVer} and ${ca.semVer}`);
var { liveQuery: la, mergeRanges: ua, rangesOverlap: da, RangeSet: fa, cmp: pa, Entity: ma, PropModification: ha, replacePrefix: ga, add: _a, remove: va, DexieYProvider: ya } = ca, ba = /* @__PURE__ */ na(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ParsingError = void 0;
	var n = class extends Error {
		constructor(e, t) {
			super(e), this.cause = t;
		}
	};
	e.ParsingError = n;
	var r;
	function i() {
		return c(!1) || f() || d() || u() || s();
	}
	function a() {
		return h(/\s*/), c(!0) || d() || l() || s();
	}
	function o() {
		let e = s(), t = [], i, o = a();
		for (; o;) {
			if (o.node.type === "Element") {
				if (i) throw Error("Found multiple root nodes");
				i = o.node;
			}
			o.excluded || t.push(o.node), o = a();
		}
		if (!i) throw new n("Failed to parse XML", "Root Element not found");
		if (r.xml.length !== 0) throw new n("Failed to parse XML", "Not Well-Formed XML");
		return {
			declaration: e ? e.node : null,
			root: i,
			children: t
		};
	}
	function s() {
		let e = h(/^<\?([\w-:.]+)\s*/);
		if (!e) return;
		let t = {
			name: e[1],
			type: "ProcessingInstruction",
			content: ""
		}, i = r.xml.indexOf("?>");
		if (i > -1) t.content = r.xml.substring(0, i).trim(), r.xml = r.xml.slice(i);
		else throw new n("Failed to parse XML", "ProcessingInstruction closing tag not found");
		return h(/\?>/), {
			excluded: r.options.filter(t) === !1,
			node: t
		};
	}
	function c(e) {
		let t = h(/^<([^?!</>\s]+)\s*/);
		if (!t) return;
		let a = {
			type: "Element",
			name: t[1],
			attributes: {},
			children: []
		}, o = e ? !1 : r.options.filter(a) === !1;
		for (; !(g() || _(">") || _("?>") || _("/>"));) {
			let e = p();
			if (e) a.attributes[e.name] = e.value;
			else return;
		}
		if (h(/^\s*\/>/)) return a.children = null, {
			excluded: o,
			node: a
		};
		h(/\??>/);
		let s = i();
		for (; s;) s.excluded || a.children.push(s.node), s = i();
		if (r.options.strictMode) {
			let e = `</${a.name}>`;
			if (r.xml.startsWith(e)) r.xml = r.xml.slice(e.length);
			else throw new n("Failed to parse XML", `Closing tag not matching "${e}"`);
		} else h(/^<\/[\p{L}\p{M}\w\-:.]+\s*>/u);
		return {
			excluded: o,
			node: a
		};
	}
	function l() {
		let e = h(/^<!DOCTYPE\s+\S+\s+SYSTEM[^>]*>/) || h(/^<!DOCTYPE\s+\S+\s+PUBLIC[^>]*>/) || h(/^<!DOCTYPE\s+\S+\s*\[[^\]]*]>/) || h(/^<!DOCTYPE\s+\S+\s*>/);
		if (e) {
			let t = {
				type: "DocumentType",
				content: e[0]
			};
			return {
				excluded: r.options.filter(t) === !1,
				node: t
			};
		}
	}
	function u() {
		if (r.xml.startsWith("<![CDATA[")) {
			let e = r.xml.indexOf("]]>");
			if (e > -1) {
				let t = e + 3, n = {
					type: "CDATA",
					content: r.xml.substring(0, t)
				};
				return r.xml = r.xml.slice(t), {
					excluded: r.options.filter(n) === !1,
					node: n
				};
			}
		}
	}
	function d() {
		let e = h(/^<!--[\s\S]*?-->/);
		if (e) {
			let t = {
				type: "Comment",
				content: e[0]
			};
			return {
				excluded: r.options.filter(t) === !1,
				node: t
			};
		}
	}
	function f() {
		let e = h(/^([^<]+)/);
		if (e) {
			let t = {
				type: "Text",
				content: e[1]
			};
			return {
				excluded: r.options.filter(t) === !1,
				node: t
			};
		}
	}
	function p() {
		let e = h(/([^=]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)\s*/);
		if (e) return {
			name: e[1].trim(),
			value: m(e[2].trim())
		};
	}
	function m(e) {
		return e.replace(/^['"]|['"]$/g, "");
	}
	function h(e) {
		let t = r.xml.match(e);
		if (t) return r.xml = r.xml.slice(t[0].length), t;
	}
	function g() {
		return r.xml.length === 0;
	}
	function _(e) {
		return r.xml.indexOf(e) === 0;
	}
	function v(e, t = {}) {
		e = e.trim();
		let n = t.filter || (() => !0);
		return r = {
			xml: e,
			options: Object.assign(Object.assign({}, t), {
				filter: n,
				strictMode: t.strictMode === !0
			})
		}, o();
	}
	t !== void 0 && typeof e == "object" && (t.exports = v), e.default = v;
}));
(/* @__PURE__ */ na(((e, t) => {
	var n = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 });
	var r = n(ba());
	function i(e) {
		if (!e.options.indentation && !e.options.lineSeparator) return;
		e.content += e.options.lineSeparator;
		let t;
		for (t = 0; t < e.level; t++) e.content += e.options.indentation;
	}
	function a(e) {
		e.content = e.content.replace(/ +$/, "");
		let t;
		for (t = 0; t < e.level; t++) e.content += e.options.indentation;
	}
	function o(e, t) {
		e.content += t;
	}
	function s(e, t, n) {
		if (e.type === "Element") u(e, t, n);
		else if (e.type === "ProcessingInstruction") f(e, t);
		else if (typeof e.content == "string") c(e.content, t, n);
		else throw Error("Unknown node type: " + e.type);
	}
	function c(e, t, n) {
		if (!n) {
			let n = e.trim();
			(t.options.lineSeparator || n.length === 0) && (e = n);
		}
		e.length > 0 && (!n && t.content.length > 0 && i(t), o(t, e));
	}
	function l(e, t) {
		let n = "/" + e.join("/"), r = e[e.length - 1];
		return t.includes(r) || t.includes(n);
	}
	function u(e, t, n) {
		if (t.path.push(e.name), !n && t.content.length > 0 && i(t), o(t, "<" + e.name), d(t, e.attributes), e.children === null || t.options.forceSelfClosingEmptyTag && e.children.length === 0) o(t, t.options.whiteSpaceAtEndOfSelfclosingTag ? " />" : "/>");
		else if (e.children.length === 0) o(t, "></" + e.name + ">");
		else {
			let r = e.children;
			o(t, ">"), t.level++;
			let c = e.attributes["xml:space"] === "preserve" || n, u = !1;
			if (!c && t.options.ignoredPaths && (u = l(t.path, t.options.ignoredPaths), c = u), !c && t.options.collapseContent) {
				let e = !1, t = !1, i = !1;
				r.forEach(function(a, o) {
					a.type === "Text" ? (a.content.includes("\n") ? (t = !0, a.content = a.content.trim()) : (o === 0 || o === r.length - 1) && !n && a.content.trim().length === 0 && (a.content = ""), (a.content.trim().length > 0 || r.length === 1) && (e = !0)) : a.type === "CDATA" ? e = !0 : i = !0;
				}), e && (!i || !t) && (c = !0);
			}
			r.forEach(function(e) {
				s(e, t, n || c);
			}), t.level--, !n && !c && i(t), u && a(t), o(t, "</" + e.name + ">");
		}
		t.path.pop();
	}
	function d(e, t) {
		Object.keys(t).forEach(function(n) {
			if (e.options.attributeQuotes === "single") {
				let r = t[n].replace(/'/g, "&apos;");
				o(e, " " + n + "='" + r + "'");
			} else {
				let r = t[n].replace(/"/g, "&quot;");
				o(e, " " + n + "=\"" + r + "\"");
			}
		});
	}
	function f(e, t) {
		t.content.length > 0 && i(t), o(t, "<?" + e.name), o(t, " " + e.content.trim()), o(t, "?>");
	}
	function p(e, t = {}) {
		t.indentation = "indentation" in t ? t.indentation : "    ", t.collapseContent = t.collapseContent === !0, t.lineSeparator = "lineSeparator" in t ? t.lineSeparator : "\r\n", t.whiteSpaceAtEndOfSelfclosingTag = t.whiteSpaceAtEndOfSelfclosingTag === !0, t.throwOnFailure = t.throwOnFailure !== !1, t.attributeQuotes = "attributeQuotes" in t ? t.attributeQuotes : "double";
		try {
			let n = (0, r.default)(e, {
				filter: t.filter,
				strictMode: t.strictMode
			}), i = {
				content: "",
				level: 0,
				options: t,
				path: []
			};
			return n.declaration && f(n.declaration, i), n.children.forEach(function(e) {
				s(e, i, !1);
			}), t.lineSeparator ? i.content.replace(/\r\n/g, "\n").replace(/\n/g, t.lineSeparator) : i.content;
		} catch (n) {
			if (t.throwOnFailure) throw n;
			return e;
		}
	}
	p.minify = (e, t = {}) => p(e, Object.assign(Object.assign({}, t), {
		indentation: "",
		lineSeparator: ""
	})), t !== void 0 && typeof e == "object" && (t.exports = p), e.default = p;
})))();
var xa = /* @__PURE__ */ na(((e, t) => {
	t.exports = {};
}));
(/* @__PURE__ */ na(((e) => {
	(function(e) {
		e.parser = function(e, t) {
			return new n(e, t);
		}, e.SAXParser = n, e.SAXStream = u, e.createStream = c, e.MAX_BUFFER_LENGTH = 64 * 1024;
		var t = [
			"comment",
			"sgmlDecl",
			"textNode",
			"tagName",
			"doctype",
			"procInstName",
			"procInstBody",
			"entity",
			"attribName",
			"attribValue",
			"cdata",
			"script"
		];
		e.EVENTS = [
			"text",
			"processinginstruction",
			"sgmldeclaration",
			"doctype",
			"comment",
			"opentagstart",
			"attribute",
			"opentag",
			"closetag",
			"opencdata",
			"cdata",
			"closecdata",
			"error",
			"end",
			"ready",
			"script",
			"opennamespace",
			"closenamespace"
		];
		function n(t, r) {
			if (!(this instanceof n)) return new n(t, r);
			var a = this;
			i(a), a.q = a.c = "", a.bufferCheckPosition = e.MAX_BUFFER_LENGTH, a.encoding = null, a.opt = r || {}, a.opt.lowercase = a.opt.lowercase || a.opt.lowercasetags, a.looseCase = a.opt.lowercase ? "toLowerCase" : "toUpperCase", a.opt.maxEntityCount = a.opt.maxEntityCount || 512, a.opt.maxEntityDepth = a.opt.maxEntityDepth || 4, a.entityCount = a.entityDepth = 0, a.tags = [], a.closed = a.closedRoot = a.sawRoot = !1, a.tag = a.error = null, a.strict = !!t, a.noscript = !!(t || a.opt.noscript), a.state = w.BEGIN, a.strictEntities = a.opt.strictEntities, a.ENTITIES = a.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), a.attribList = [], a.opt.xmlns && (a.ns = Object.create(h)), a.opt.unquotedAttributeValues === void 0 && (a.opt.unquotedAttributeValues = !t), a.trackPosition = a.opt.position !== !1, a.trackPosition && (a.position = a.line = a.column = 0), T(a, "onready");
		}
		Object.create || (Object.create = function(e) {
			function t() {}
			return t.prototype = e, new t();
		}), Object.keys || (Object.keys = function(e) {
			var t = [];
			for (var n in e) e.hasOwnProperty(n) && t.push(n);
			return t;
		});
		function r(n) {
			for (var r = Math.max(e.MAX_BUFFER_LENGTH, 10), i = 0, a = 0, o = t.length; a < o; a++) {
				var s = n[t[a]].length;
				if (s > r) switch (t[a]) {
					case "textNode":
						k(n);
						break;
					case "cdata":
						O(n, "oncdata", n.cdata), n.cdata = "";
						break;
					case "script":
						O(n, "onscript", n.script), n.script = "";
						break;
					default: A(n, "Max buffer length exceeded: " + t[a]);
				}
				i = Math.max(i, s);
			}
			n.bufferCheckPosition = e.MAX_BUFFER_LENGTH - i + n.position;
		}
		function i(e) {
			for (var n = 0, r = t.length; n < r; n++) e[t[n]] = "";
		}
		function a(e) {
			k(e), e.cdata !== "" && (O(e, "oncdata", e.cdata), e.cdata = ""), e.script !== "" && (O(e, "onscript", e.script), e.script = "");
		}
		n.prototype = {
			end: function() {
				j(this);
			},
			write: I,
			resume: function() {
				return this.error = null, this;
			},
			close: function() {
				return this.write(null);
			},
			flush: function() {
				a(this);
			}
		};
		var o;
		try {
			o = xa().Stream;
		} catch {
			o = function() {};
		}
		o ||= function() {};
		var s = e.EVENTS.filter(function(e) {
			return e !== "error" && e !== "end";
		});
		function c(e, t) {
			return new u(e, t);
		}
		function l(e, t) {
			if (e.length >= 2) {
				if (e[0] === 255 && e[1] === 254) return "utf-16le";
				if (e[0] === 254 && e[1] === 255) return "utf-16be";
			}
			return e.length >= 3 && e[0] === 239 && e[1] === 187 && e[2] === 191 ? "utf8" : e.length >= 4 ? e[0] === 60 && e[1] === 0 && e[2] === 63 && e[3] === 0 ? "utf-16le" : e[0] === 0 && e[1] === 60 && e[2] === 0 && e[3] === 63 ? "utf-16be" : "utf8" : t ? "utf8" : null;
		}
		function u(e, t) {
			if (!(this instanceof u)) return new u(e, t);
			o.apply(this), this._parser = new n(e, t), this.writable = !0, this.readable = !0;
			var r = this;
			this._parser.onend = function() {
				r.emit("end");
			}, this._parser.onerror = function(e) {
				r.emit("error", e), r._parser.error = null;
			}, this._decoder = null, this._decoderBuffer = null, s.forEach(function(e) {
				Object.defineProperty(r, "on" + e, {
					get: function() {
						return r._parser["on" + e];
					},
					set: function(t) {
						if (!t) return r.removeAllListeners(e), r._parser["on" + e] = t, t;
						r.on(e, t);
					},
					enumerable: !0,
					configurable: !1
				});
			});
		}
		u.prototype = Object.create(o.prototype, { constructor: { value: u } }), u.prototype._decodeBuffer = function(e, t) {
			if (this._decoderBuffer &&= (e = Buffer.concat([this._decoderBuffer, e]), null), !this._decoder) {
				var n = l(e, t);
				if (!n) return this._decoderBuffer = e, "";
				this._parser.encoding = n, this._decoder = new TextDecoder(n);
			}
			return this._decoder.decode(e, { stream: !t });
		}, u.prototype.write = function(e) {
			if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(e)) e = this._decodeBuffer(e, !1);
			else if (this._decoderBuffer) {
				var t = this._decodeBuffer(Buffer.alloc(0), !0);
				t && (this._parser.write(t), this.emit("data", t));
			}
			return this._parser.write(e.toString()), this.emit("data", e), !0;
		}, u.prototype.end = function(e) {
			if (e && e.length && this.write(e), this._decoderBuffer) {
				var t = this._decodeBuffer(Buffer.alloc(0), !0);
				t && (this._parser.write(t), this.emit("data", t));
			} else if (this._decoder) {
				var n = this._decoder.decode();
				n && (this._parser.write(n), this.emit("data", n));
			}
			return this._parser.end(), !0;
		}, u.prototype.on = function(e, t) {
			var n = this;
			return !n._parser["on" + e] && s.indexOf(e) !== -1 && (n._parser["on" + e] = function() {
				var t = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
				t.splice(0, 0, e), n.emit.apply(n, t);
			}), o.prototype.on.call(n, e, t);
		};
		var d = "[CDATA[", f = "DOCTYPE", p = "http://www.w3.org/XML/1998/namespace", m = "http://www.w3.org/2000/xmlns/", h = {
			xml: p,
			xmlns: m
		}, g = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, _ = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, v = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, y = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
		function b(e) {
			return e === " " || e === "\n" || e === "\r" || e === "	";
		}
		function x(e) {
			return e === "\"" || e === "'";
		}
		function ee(e) {
			return e === ">" || b(e);
		}
		function S(e, t) {
			return e.test(t);
		}
		function C(e, t) {
			return !S(e, t);
		}
		var w = 0;
		for (var te in e.STATE = {
			BEGIN: w++,
			BEGIN_WHITESPACE: w++,
			TEXT: w++,
			TEXT_ENTITY: w++,
			OPEN_WAKA: w++,
			SGML_DECL: w++,
			SGML_DECL_QUOTED: w++,
			DOCTYPE: w++,
			DOCTYPE_QUOTED: w++,
			DOCTYPE_DTD: w++,
			DOCTYPE_DTD_QUOTED: w++,
			COMMENT_STARTING: w++,
			COMMENT: w++,
			COMMENT_ENDING: w++,
			COMMENT_ENDED: w++,
			CDATA: w++,
			CDATA_ENDING: w++,
			CDATA_ENDING_2: w++,
			PROC_INST: w++,
			PROC_INST_BODY: w++,
			PROC_INST_ENDING: w++,
			OPEN_TAG: w++,
			OPEN_TAG_SLASH: w++,
			ATTRIB: w++,
			ATTRIB_NAME: w++,
			ATTRIB_NAME_SAW_WHITE: w++,
			ATTRIB_VALUE: w++,
			ATTRIB_VALUE_QUOTED: w++,
			ATTRIB_VALUE_CLOSED: w++,
			ATTRIB_VALUE_UNQUOTED: w++,
			ATTRIB_VALUE_ENTITY_Q: w++,
			ATTRIB_VALUE_ENTITY_U: w++,
			CLOSE_TAG: w++,
			CLOSE_TAG_SAW_WHITE: w++,
			SCRIPT: w++,
			SCRIPT_ENDING: w++
		}, e.XML_ENTITIES = {
			amp: "&",
			gt: ">",
			lt: "<",
			quot: "\"",
			apos: "'"
		}, e.ENTITIES = {
			amp: "&",
			gt: ">",
			lt: "<",
			quot: "\"",
			apos: "'",
			AElig: 198,
			Aacute: 193,
			Acirc: 194,
			Agrave: 192,
			Aring: 197,
			Atilde: 195,
			Auml: 196,
			Ccedil: 199,
			ETH: 208,
			Eacute: 201,
			Ecirc: 202,
			Egrave: 200,
			Euml: 203,
			Iacute: 205,
			Icirc: 206,
			Igrave: 204,
			Iuml: 207,
			Ntilde: 209,
			Oacute: 211,
			Ocirc: 212,
			Ograve: 210,
			Oslash: 216,
			Otilde: 213,
			Ouml: 214,
			THORN: 222,
			Uacute: 218,
			Ucirc: 219,
			Ugrave: 217,
			Uuml: 220,
			Yacute: 221,
			aacute: 225,
			acirc: 226,
			aelig: 230,
			agrave: 224,
			aring: 229,
			atilde: 227,
			auml: 228,
			ccedil: 231,
			eacute: 233,
			ecirc: 234,
			egrave: 232,
			eth: 240,
			euml: 235,
			iacute: 237,
			icirc: 238,
			igrave: 236,
			iuml: 239,
			ntilde: 241,
			oacute: 243,
			ocirc: 244,
			ograve: 242,
			oslash: 248,
			otilde: 245,
			ouml: 246,
			szlig: 223,
			thorn: 254,
			uacute: 250,
			ucirc: 251,
			ugrave: 249,
			uuml: 252,
			yacute: 253,
			yuml: 255,
			copy: 169,
			reg: 174,
			nbsp: 160,
			iexcl: 161,
			cent: 162,
			pound: 163,
			curren: 164,
			yen: 165,
			brvbar: 166,
			sect: 167,
			uml: 168,
			ordf: 170,
			laquo: 171,
			not: 172,
			shy: 173,
			macr: 175,
			deg: 176,
			plusmn: 177,
			sup1: 185,
			sup2: 178,
			sup3: 179,
			acute: 180,
			micro: 181,
			para: 182,
			middot: 183,
			cedil: 184,
			ordm: 186,
			raquo: 187,
			frac14: 188,
			frac12: 189,
			frac34: 190,
			iquest: 191,
			times: 215,
			divide: 247,
			OElig: 338,
			oelig: 339,
			Scaron: 352,
			scaron: 353,
			Yuml: 376,
			fnof: 402,
			circ: 710,
			tilde: 732,
			Alpha: 913,
			Beta: 914,
			Gamma: 915,
			Delta: 916,
			Epsilon: 917,
			Zeta: 918,
			Eta: 919,
			Theta: 920,
			Iota: 921,
			Kappa: 922,
			Lambda: 923,
			Mu: 924,
			Nu: 925,
			Xi: 926,
			Omicron: 927,
			Pi: 928,
			Rho: 929,
			Sigma: 931,
			Tau: 932,
			Upsilon: 933,
			Phi: 934,
			Chi: 935,
			Psi: 936,
			Omega: 937,
			alpha: 945,
			beta: 946,
			gamma: 947,
			delta: 948,
			epsilon: 949,
			zeta: 950,
			eta: 951,
			theta: 952,
			iota: 953,
			kappa: 954,
			lambda: 955,
			mu: 956,
			nu: 957,
			xi: 958,
			omicron: 959,
			pi: 960,
			rho: 961,
			sigmaf: 962,
			sigma: 963,
			tau: 964,
			upsilon: 965,
			phi: 966,
			chi: 967,
			psi: 968,
			omega: 969,
			thetasym: 977,
			upsih: 978,
			piv: 982,
			ensp: 8194,
			emsp: 8195,
			thinsp: 8201,
			zwnj: 8204,
			zwj: 8205,
			lrm: 8206,
			rlm: 8207,
			ndash: 8211,
			mdash: 8212,
			lsquo: 8216,
			rsquo: 8217,
			sbquo: 8218,
			ldquo: 8220,
			rdquo: 8221,
			bdquo: 8222,
			dagger: 8224,
			Dagger: 8225,
			bull: 8226,
			hellip: 8230,
			permil: 8240,
			prime: 8242,
			Prime: 8243,
			lsaquo: 8249,
			rsaquo: 8250,
			oline: 8254,
			frasl: 8260,
			euro: 8364,
			image: 8465,
			weierp: 8472,
			real: 8476,
			trade: 8482,
			alefsym: 8501,
			larr: 8592,
			uarr: 8593,
			rarr: 8594,
			darr: 8595,
			harr: 8596,
			crarr: 8629,
			lArr: 8656,
			uArr: 8657,
			rArr: 8658,
			dArr: 8659,
			hArr: 8660,
			forall: 8704,
			part: 8706,
			exist: 8707,
			empty: 8709,
			nabla: 8711,
			isin: 8712,
			notin: 8713,
			ni: 8715,
			prod: 8719,
			sum: 8721,
			minus: 8722,
			lowast: 8727,
			radic: 8730,
			prop: 8733,
			infin: 8734,
			ang: 8736,
			and: 8743,
			or: 8744,
			cap: 8745,
			cup: 8746,
			int: 8747,
			there4: 8756,
			sim: 8764,
			cong: 8773,
			asymp: 8776,
			ne: 8800,
			equiv: 8801,
			le: 8804,
			ge: 8805,
			sub: 8834,
			sup: 8835,
			nsub: 8836,
			sube: 8838,
			supe: 8839,
			oplus: 8853,
			otimes: 8855,
			perp: 8869,
			sdot: 8901,
			lceil: 8968,
			rceil: 8969,
			lfloor: 8970,
			rfloor: 8971,
			lang: 9001,
			rang: 9002,
			loz: 9674,
			spades: 9824,
			clubs: 9827,
			hearts: 9829,
			diams: 9830
		}, Object.keys(e.ENTITIES).forEach(function(t) {
			var n = e.ENTITIES[t], r = typeof n == "number" ? String.fromCharCode(n) : n;
			e.ENTITIES[t] = r;
		}), e.STATE) e.STATE[e.STATE[te]] = te;
		w = e.STATE;
		function T(e, t, n) {
			e[t] && e[t](n);
		}
		function E(e) {
			var t = e && e.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);
			return t ? t[2] : null;
		}
		function ne(e) {
			return e ? e.toLowerCase().replace(/[^a-z0-9]/g, "") : null;
		}
		function D(e, t) {
			let n = ne(e), r = ne(t);
			return !n || !r ? !0 : r === "utf16" ? n === "utf16le" || n === "utf16be" : n === r;
		}
		function re(e, t) {
			if (!(!e.strict || !e.encoding || !t || t.name !== "xml")) {
				var n = E(t.body);
				n && !D(e.encoding, n) && M(e, "XML declaration encoding " + n + " does not match detected stream encoding " + e.encoding.toUpperCase());
			}
		}
		function O(e, t, n) {
			e.textNode && k(e), T(e, t, n);
		}
		function k(e) {
			e.textNode = ie(e.opt, e.textNode), e.textNode && T(e, "ontext", e.textNode), e.textNode = "";
		}
		function ie(e, t) {
			return e.trim && (t = t.trim()), e.normalize && (t = t.replace(/\s+/g, " ")), t;
		}
		function A(e, t) {
			return k(e), e.trackPosition && (t += "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c), t = Error(t), e.error = t, T(e, "onerror", t), e;
		}
		function j(e) {
			return e.sawRoot && !e.closedRoot && M(e, "Unclosed root tag"), e.state !== w.BEGIN && e.state !== w.BEGIN_WHITESPACE && e.state !== w.TEXT && A(e, "Unexpected end"), k(e), e.c = "", e.closed = !0, T(e, "onend"), n.call(e, e.strict, e.opt), e;
		}
		function M(e, t) {
			if (typeof e != "object" || !(e instanceof n)) throw Error("bad call to strictFail");
			e.strict && A(e, t);
		}
		function N(e) {
			e.strict || (e.tagName = e.tagName[e.looseCase]());
			var t = e.tags[e.tags.length - 1] || e, n = e.tag = {
				name: e.tagName,
				attributes: {}
			};
			e.opt.xmlns && (n.ns = t.ns), e.attribList.length = 0, O(e, "onopentagstart", n);
		}
		function ae(e, t) {
			var n = e.indexOf(":") < 0 ? ["", e] : e.split(":"), r = n[0], i = n[1];
			return t && e === "xmlns" && (r = "xmlns", i = ""), {
				prefix: r,
				local: i
			};
		}
		function P(e) {
			if (e.strict || (e.attribName = e.attribName[e.looseCase]()), e.attribList.indexOf(e.attribName) !== -1 || e.tag.attributes.hasOwnProperty(e.attribName)) {
				e.attribName = e.attribValue = "";
				return;
			}
			if (e.opt.xmlns) {
				var t = ae(e.attribName, !0), n = t.prefix, r = t.local;
				if (n === "xmlns") if (r === "xml" && e.attribValue !== p) M(e, "xml: prefix must be bound to " + p + "\nActual: " + e.attribValue);
				else if (r === "xmlns" && e.attribValue !== m) M(e, "xmlns: prefix must be bound to " + m + "\nActual: " + e.attribValue);
				else {
					var i = e.tag, a = e.tags[e.tags.length - 1] || e;
					i.ns === a.ns && (i.ns = Object.create(a.ns)), i.ns[r] = e.attribValue;
				}
				e.attribList.push([e.attribName, e.attribValue]);
			} else e.tag.attributes[e.attribName] = e.attribValue, O(e, "onattribute", {
				name: e.attribName,
				value: e.attribValue
			});
			e.attribName = e.attribValue = "";
		}
		function oe(e, t) {
			if (e.opt.xmlns) {
				var n = e.tag, r = ae(e.tagName);
				n.prefix = r.prefix, n.local = r.local, n.uri = n.ns[r.prefix] || "", n.prefix && !n.uri && (M(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName)), n.uri = r.prefix);
				var i = e.tags[e.tags.length - 1] || e;
				n.ns && i.ns !== n.ns && Object.keys(n.ns).forEach(function(t) {
					O(e, "onopennamespace", {
						prefix: t,
						uri: n.ns[t]
					});
				});
				for (var a = 0, o = e.attribList.length; a < o; a++) {
					var s = e.attribList[a], c = s[0], l = s[1], u = ae(c, !0), d = u.prefix, f = u.local, p = d === "" ? "" : n.ns[d] || "", m = {
						name: c,
						value: l,
						prefix: d,
						local: f,
						uri: p
					};
					d && d !== "xmlns" && !p && (M(e, "Unbound namespace prefix: " + JSON.stringify(d)), m.uri = d), e.tag.attributes[c] = m, O(e, "onattribute", m);
				}
				e.attribList.length = 0;
			}
			e.tag.isSelfClosing = !!t, e.sawRoot = !0, e.tags.push(e.tag), O(e, "onopentag", e.tag), t || (!e.noscript && e.tagName.toLowerCase() === "script" ? e.state = w.SCRIPT : e.state = w.TEXT, e.tag = null, e.tagName = ""), e.attribName = e.attribValue = "", e.attribList.length = 0;
		}
		function se(e) {
			if (!e.tagName) {
				M(e, "Weird empty close tag."), e.textNode += "</>", e.state = w.TEXT;
				return;
			}
			if (e.script) {
				if (e.tagName !== "script") {
					e.script += "</" + e.tagName + ">", e.tagName = "", e.state = w.SCRIPT;
					return;
				}
				O(e, "onscript", e.script), e.script = "";
			}
			var t = e.tags.length, n = e.tagName;
			e.strict || (n = n[e.looseCase]());
			for (var r = n; t-- && e.tags[t].name !== r;) M(e, "Unexpected close tag");
			if (t < 0) {
				M(e, "Unmatched closing tag: " + e.tagName), e.textNode += "</" + e.tagName + ">", e.state = w.TEXT;
				return;
			}
			e.tagName = n;
			for (var i = e.tags.length; i-- > t;) {
				var a = e.tag = e.tags.pop();
				e.tagName = e.tag.name, O(e, "onclosetag", e.tagName);
				var o = {};
				for (var s in a.ns) o[s] = a.ns[s];
				var c = e.tags[e.tags.length - 1] || e;
				e.opt.xmlns && a.ns !== c.ns && Object.keys(a.ns).forEach(function(t) {
					var n = a.ns[t];
					O(e, "onclosenamespace", {
						prefix: t,
						uri: n
					});
				});
			}
			t === 0 && (e.closedRoot = !0), e.tagName = e.attribValue = e.attribName = "", e.attribList.length = 0, e.state = w.TEXT;
		}
		function ce(e) {
			var t = e.entity, n = t.toLowerCase(), r, i = "";
			return e.ENTITIES[t] ? e.ENTITIES[t] : e.ENTITIES[n] ? e.ENTITIES[n] : (t = n, t.charAt(0) === "#" && (t.charAt(1) === "x" ? (t = t.slice(2), r = parseInt(t, 16), i = r.toString(16)) : (t = t.slice(1), r = parseInt(t, 10), i = r.toString(10))), t = t.replace(/^0+/, ""), isNaN(r) || i.toLowerCase() !== t || r < 0 || r > 1114111 ? (M(e, "Invalid character entity"), "&" + e.entity + ";") : String.fromCodePoint(r));
		}
		function le(e, t) {
			t === "<" ? (e.state = w.OPEN_WAKA, e.startTagPosition = e.position) : b(t) || (M(e, "Non-whitespace before first tag."), e.textNode = t, e.state = w.TEXT);
		}
		function F(e, t) {
			var n = "";
			return t < e.length && (n = e.charAt(t)), n;
		}
		function I(t) {
			var n = this;
			if (this.error) throw this.error;
			if (n.closed) return A(n, "Cannot write after close. Assign an onready handler.");
			if (t === null) return j(n);
			typeof t == "object" && (t = t.toString());
			for (var i = 0, a = ""; a = F(t, i++), n.c = a, a;) switch (n.trackPosition && (n.position++, a === "\n" ? (n.line++, n.column = 0) : n.column++), n.state) {
				case w.BEGIN:
					if (n.state = w.BEGIN_WHITESPACE, a === "﻿") continue;
					le(n, a);
					continue;
				case w.BEGIN_WHITESPACE:
					le(n, a);
					continue;
				case w.TEXT:
					if (n.sawRoot && !n.closedRoot) {
						for (var o = i - 1; a && a !== "<" && a !== "&";) a = F(t, i++), a && n.trackPosition && (n.position++, a === "\n" ? (n.line++, n.column = 0) : n.column++);
						n.textNode += t.substring(o, i - 1);
					}
					a === "<" && !(n.sawRoot && n.closedRoot && !n.strict) ? (n.state = w.OPEN_WAKA, n.startTagPosition = n.position) : (!b(a) && (!n.sawRoot || n.closedRoot) && M(n, "Text data outside of root node."), a === "&" ? n.state = w.TEXT_ENTITY : n.textNode += a);
					continue;
				case w.SCRIPT:
					a === "<" ? n.state = w.SCRIPT_ENDING : n.script += a;
					continue;
				case w.SCRIPT_ENDING:
					a === "/" ? n.state = w.CLOSE_TAG : (n.script += "<" + a, n.state = w.SCRIPT);
					continue;
				case w.OPEN_WAKA:
					if (a === "!") n.state = w.SGML_DECL, n.sgmlDecl = "";
					else if (!b(a)) if (S(g, a)) n.state = w.OPEN_TAG, n.tagName = a;
					else if (a === "/") n.state = w.CLOSE_TAG, n.tagName = "";
					else if (a === "?") n.state = w.PROC_INST, n.procInstName = n.procInstBody = "";
					else {
						if (M(n, "Unencoded <"), n.startTagPosition + 1 < n.position) {
							var s = n.position - n.startTagPosition;
							a = Array(s).join(" ") + a;
						}
						n.textNode += "<" + a, n.state = w.TEXT;
					}
					continue;
				case w.SGML_DECL:
					if (n.sgmlDecl + a === "--") {
						n.state = w.COMMENT, n.comment = "", n.sgmlDecl = "";
						continue;
					}
					n.doctype && n.doctype !== !0 && n.sgmlDecl ? (n.state = w.DOCTYPE_DTD, n.doctype += "<!" + n.sgmlDecl + a, n.sgmlDecl = "") : (n.sgmlDecl + a).toUpperCase() === d ? (O(n, "onopencdata"), n.state = w.CDATA, n.sgmlDecl = "", n.cdata = "") : (n.sgmlDecl + a).toUpperCase() === f ? (n.state = w.DOCTYPE, (n.doctype || n.sawRoot) && M(n, "Inappropriately located doctype declaration"), n.doctype = "", n.sgmlDecl = "") : a === ">" ? (O(n, "onsgmldeclaration", n.sgmlDecl), n.sgmlDecl = "", n.state = w.TEXT) : (x(a) && (n.state = w.SGML_DECL_QUOTED), n.sgmlDecl += a);
					continue;
				case w.SGML_DECL_QUOTED:
					a === n.q && (n.state = w.SGML_DECL, n.q = ""), n.sgmlDecl += a;
					continue;
				case w.DOCTYPE:
					a === ">" ? (n.state = w.TEXT, O(n, "ondoctype", n.doctype), n.doctype = !0) : (n.doctype += a, a === "[" ? n.state = w.DOCTYPE_DTD : x(a) && (n.state = w.DOCTYPE_QUOTED, n.q = a));
					continue;
				case w.DOCTYPE_QUOTED:
					n.doctype += a, a === n.q && (n.q = "", n.state = w.DOCTYPE);
					continue;
				case w.DOCTYPE_DTD:
					a === "]" ? (n.doctype += a, n.state = w.DOCTYPE) : a === "<" ? (n.state = w.OPEN_WAKA, n.startTagPosition = n.position) : x(a) ? (n.doctype += a, n.state = w.DOCTYPE_DTD_QUOTED, n.q = a) : n.doctype += a;
					continue;
				case w.DOCTYPE_DTD_QUOTED:
					n.doctype += a, a === n.q && (n.state = w.DOCTYPE_DTD, n.q = "");
					continue;
				case w.COMMENT:
					a === "-" ? n.state = w.COMMENT_ENDING : n.comment += a;
					continue;
				case w.COMMENT_ENDING:
					a === "-" ? (n.state = w.COMMENT_ENDED, n.comment = ie(n.opt, n.comment), n.comment && O(n, "oncomment", n.comment), n.comment = "") : (n.comment += "-" + a, n.state = w.COMMENT);
					continue;
				case w.COMMENT_ENDED:
					a === ">" ? n.doctype && n.doctype !== !0 ? n.state = w.DOCTYPE_DTD : n.state = w.TEXT : (M(n, "Malformed comment"), n.comment += "--" + a, n.state = w.COMMENT);
					continue;
				case w.CDATA:
					for (var o = i - 1; a && a !== "]";) a = F(t, i++), a && n.trackPosition && (n.position++, a === "\n" ? (n.line++, n.column = 0) : n.column++);
					n.cdata += t.substring(o, i - 1), a === "]" && (n.state = w.CDATA_ENDING);
					continue;
				case w.CDATA_ENDING:
					a === "]" ? n.state = w.CDATA_ENDING_2 : (n.cdata += "]" + a, n.state = w.CDATA);
					continue;
				case w.CDATA_ENDING_2:
					a === ">" ? (n.cdata && O(n, "oncdata", n.cdata), O(n, "onclosecdata"), n.cdata = "", n.state = w.TEXT) : a === "]" ? n.cdata += "]" : (n.cdata += "]]" + a, n.state = w.CDATA);
					continue;
				case w.PROC_INST:
					a === "?" ? n.state = w.PROC_INST_ENDING : b(a) ? n.state = w.PROC_INST_BODY : n.procInstName += a;
					continue;
				case w.PROC_INST_BODY:
					if (!n.procInstBody && b(a)) continue;
					a === "?" ? n.state = w.PROC_INST_ENDING : n.procInstBody += a;
					continue;
				case w.PROC_INST_ENDING:
					if (a === ">") {
						let e = {
							name: n.procInstName,
							body: n.procInstBody
						};
						re(n, e), O(n, "onprocessinginstruction", e), n.procInstName = n.procInstBody = "", n.state = w.TEXT;
					} else n.procInstBody += "?" + a, n.state = w.PROC_INST_BODY;
					continue;
				case w.OPEN_TAG:
					S(_, a) ? n.tagName += a : (N(n), a === ">" ? oe(n) : a === "/" ? n.state = w.OPEN_TAG_SLASH : (b(a) || M(n, "Invalid character in tag name"), n.state = w.ATTRIB));
					continue;
				case w.OPEN_TAG_SLASH:
					a === ">" ? (oe(n, !0), se(n)) : (M(n, "Forward-slash in opening tag not followed by >"), n.state = w.ATTRIB);
					continue;
				case w.ATTRIB:
					if (b(a)) continue;
					a === ">" ? oe(n) : a === "/" ? n.state = w.OPEN_TAG_SLASH : S(g, a) ? (n.attribName = a, n.attribValue = "", n.state = w.ATTRIB_NAME) : M(n, "Invalid attribute name");
					continue;
				case w.ATTRIB_NAME:
					a === "=" ? n.state = w.ATTRIB_VALUE : a === ">" ? (M(n, "Attribute without value"), n.attribValue = n.attribName, P(n), oe(n)) : b(a) ? n.state = w.ATTRIB_NAME_SAW_WHITE : S(_, a) ? n.attribName += a : M(n, "Invalid attribute name");
					continue;
				case w.ATTRIB_NAME_SAW_WHITE:
					if (a === "=") n.state = w.ATTRIB_VALUE;
					else if (b(a)) continue;
					else M(n, "Attribute without value"), n.tag.attributes[n.attribName] = "", n.attribValue = "", O(n, "onattribute", {
						name: n.attribName,
						value: ""
					}), n.attribName = "", a === ">" ? oe(n) : S(g, a) ? (n.attribName = a, n.state = w.ATTRIB_NAME) : (M(n, "Invalid attribute name"), n.state = w.ATTRIB);
					continue;
				case w.ATTRIB_VALUE:
					if (b(a)) continue;
					x(a) ? (n.q = a, n.state = w.ATTRIB_VALUE_QUOTED) : (n.opt.unquotedAttributeValues || A(n, "Unquoted attribute value"), n.state = w.ATTRIB_VALUE_UNQUOTED, n.attribValue = a);
					continue;
				case w.ATTRIB_VALUE_QUOTED:
					if (a !== n.q) {
						a === "&" ? n.state = w.ATTRIB_VALUE_ENTITY_Q : n.attribValue += a;
						continue;
					}
					P(n), n.q = "", n.state = w.ATTRIB_VALUE_CLOSED;
					continue;
				case w.ATTRIB_VALUE_CLOSED:
					b(a) ? n.state = w.ATTRIB : a === ">" ? oe(n) : a === "/" ? n.state = w.OPEN_TAG_SLASH : S(g, a) ? (M(n, "No whitespace between attributes"), n.attribName = a, n.attribValue = "", n.state = w.ATTRIB_NAME) : M(n, "Invalid attribute name");
					continue;
				case w.ATTRIB_VALUE_UNQUOTED:
					if (!ee(a)) {
						a === "&" ? n.state = w.ATTRIB_VALUE_ENTITY_U : n.attribValue += a;
						continue;
					}
					P(n), a === ">" ? oe(n) : n.state = w.ATTRIB;
					continue;
				case w.CLOSE_TAG:
					if (n.tagName) a === ">" ? se(n) : S(_, a) ? n.tagName += a : n.script ? (n.script += "</" + n.tagName + a, n.tagName = "", n.state = w.SCRIPT) : (b(a) || M(n, "Invalid tagname in closing tag"), n.state = w.CLOSE_TAG_SAW_WHITE);
					else {
						if (b(a)) continue;
						C(g, a) ? n.script ? (n.script += "</" + a, n.state = w.SCRIPT) : M(n, "Invalid tagname in closing tag.") : n.tagName = a;
					}
					continue;
				case w.CLOSE_TAG_SAW_WHITE:
					if (b(a)) continue;
					a === ">" ? se(n) : M(n, "Invalid characters in closing tag");
					continue;
				case w.TEXT_ENTITY:
				case w.ATTRIB_VALUE_ENTITY_Q:
				case w.ATTRIB_VALUE_ENTITY_U:
					var c, l;
					switch (n.state) {
						case w.TEXT_ENTITY:
							c = w.TEXT, l = "textNode";
							break;
						case w.ATTRIB_VALUE_ENTITY_Q:
							c = w.ATTRIB_VALUE_QUOTED, l = "attribValue";
							break;
						case w.ATTRIB_VALUE_ENTITY_U:
							c = w.ATTRIB_VALUE_UNQUOTED, l = "attribValue";
							break;
					}
					if (a === ";") {
						var u = ce(n);
						n.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(u) ? ((n.entityCount += 1) > n.opt.maxEntityCount && A(n, "Parsed entity count exceeds max entity count"), (n.entityDepth += 1) > n.opt.maxEntityDepth && A(n, "Parsed entity depth exceeds max entity depth"), n.entity = "", n.state = c, n.write(u), --n.entityDepth) : (n[l] += u, n.entity = "", n.state = c);
					} else S(n.entity.length ? y : v, a) ? n.entity += a : (M(n, "Invalid character in entity name"), n[l] += "&" + n.entity + a, n.entity = "", n.state = c);
					continue;
				default: throw Error(n, "Unknown state: " + n.state);
			}
			return n.position >= n.bufferCheckPosition && r(n), n;
		}
		/* istanbul ignore next */
		String.fromCodePoint || (function() {
			var e = String.fromCharCode, t = Math.floor, n = function() {
				var n = 16384, r = [], i, a, o = -1, s = arguments.length;
				if (!s) return "";
				for (var c = ""; ++o < s;) {
					var l = Number(arguments[o]);
					if (!isFinite(l) || l < 0 || l > 1114111 || t(l) !== l) throw RangeError("Invalid code point: " + l);
					l <= 65535 ? r.push(l) : (l -= 65536, i = (l >> 10) + 55296, a = l % 1024 + 56320, r.push(i, a)), (o + 1 === s || r.length > n) && (c += e.apply(null, r), r.length = 0);
				}
				return c;
			};
			/* istanbul ignore next */
			Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
				value: n,
				configurable: !0,
				writable: !0
			}) : String.fromCodePoint = n;
		})();
	})(e === void 0 ? e.sax = {} : e);
})))();
//#endregion
//#region node_modules/.pnpm/@septkit+ui@0.0.33_daisyui@5.5.19_tailwindcss@4.2.2_typescript@5.8.3_vite@8.0.9_@types+node@25.6.0_jiti@2.6.1_/node_modules/@septkit/ui/dist/dialecte/create-document-store.js
function Sa(e) {
	let t = y(null), n = e?.extensions, r = {}, i = {};
	if (n) for (let [e, t] of Object.entries(n)) t.query && (r[e] = t.query), t.transaction && (i[e] = t.transaction);
	let a = Object.keys(r).length > 0, o = Object.keys(i).length > 0, s = a || o, c = j(() => {
		let e = t.value;
		if (Ji(e, { detail: "createDocumentStore: document accessed before hydration. Ensure hydrate() is called before consumers read document, or guard with isHydrated." }), !s) return e;
		let n = e;
		return Ca(n, {
			query: a ? Ca(n.query, aa(r, n.query)) : n.query,
			transaction: o ? (e) => n.transaction((t) => e(Ca(t, aa(i, t)))) : n.transaction
		});
	}), l = j(() => t.value !== null);
	function u(e) {
		t.value = e;
	}
	function d() {
		t.value = null;
	}
	return {
		document: c,
		isHydrated: l,
		hydrate: u,
		clear: d
	};
}
function Ca(e, t) {
	return new Proxy(e, { get(n, r) {
		if (r in t) return t[r];
		let i = Reflect.get(e, r, e);
		return typeof i == "function" ? i.bind(e) : i;
	} });
}
function wa(e) {
	let t = !1, n, r = g(!0);
	return ((...i) => (t ||= (n = r.run(() => e(...i)), !0), n));
}
var Ta = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope, Ta && window.document, Ta && window.navigator, Ta && window.location;
//#endregion
//#region node_modules/.pnpm/@septkit+ui@0.0.33_daisyui@5.5.19_tailwindcss@4.2.2_typescript@5.8.3_vite@8.0.9_@types+node@25.6.0_jiti@2.6.1_/node_modules/@septkit/ui/dist/external/.pnpm/@vueuse_shared@13.9.0_vue@3.5.32_typescript@5.8.3_/node_modules/@vueuse/shared/index.js
function Ea(e) {
	return L() ? (t(e), !0) : !1;
}
var Da = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var Oa = Object.prototype.toString, ka = (e) => Oa.call(e) === "[object Object]", Aa = () => {}, ja = /* @__PURE__ */ Ma();
function Ma() {
	return Da && (window == null ? void 0 : window.navigator)?.userAgent && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || (window == null ? void 0 : window.navigator)?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Na(...e) {
	if (e.length !== 1) return x(...e);
	let t = e[0];
	return typeof t == "function" ? b(u(() => ({
		get: t,
		set: Aa
	}))) : o(t);
}
function Pa(e) {
	return Array.isArray(e) ? e : [e];
}
function Fa(e, t, n) {
	return f(e, t, {
		...n,
		immediate: !0
	});
}
//#endregion
//#region node_modules/.pnpm/@septkit+ui@0.0.33_daisyui@5.5.19_tailwindcss@4.2.2_typescript@5.8.3_vite@8.0.9_@types+node@25.6.0_jiti@2.6.1_/node_modules/@septkit/ui/dist/external/.pnpm/@vueuse_components@13.9.0_vue@3.5.32_typescript@5.8.3_/node_modules/@vueuse/components/index.js
var Ia = Da ? window : void 0;
function La(e) {
	let t = l(e);
	return t?.$el ?? t;
}
function Ra(...e) {
	let t = [], n = () => {
		t.forEach((e) => e()), t.length = 0;
	}, r = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), i = j(() => {
		let t = Pa(l(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	}), a = Fa(() => [
		i.value?.map((e) => La(e)) ?? [Ia].filter((e) => e != null),
		Pa(l(i.value ? e[1] : e[0])),
		Pa(c(i.value ? e[2] : e[1])),
		l(i.value ? e[3] : e[2])
	], ([e, i, a, o]) => {
		if (n(), !e?.length || !i?.length || !a?.length) return;
		let s = ka(o) ? { ...o } : o;
		t.push(...e.flatMap((e) => i.flatMap((t) => a.map((n) => r(e, t, n, s)))));
	}, { flush: "post" });
	return Ea(n), () => {
		a(), n();
	};
}
function za(e) {
	return typeof Window < "u" && e instanceof Window ? e.document.documentElement : typeof Document < "u" && e instanceof Document ? e.documentElement : e;
}
function Ba(e) {
	let t = window.getComputedStyle(e);
	if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
	{
		let t = e.parentNode;
		return !t || t.tagName === "BODY" ? !1 : Ba(t);
	}
}
function Va(e) {
	let t = e || window.event, n = t.target;
	return Ba(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
}
var Ha = /* @__PURE__ */ new WeakMap();
function Ua(e, t = !1) {
	let n = y(t), r = null, i = "";
	f(Na(e), (e) => {
		let t = za(l(e));
		if (t) {
			let e = t;
			if (Ha.get(e) || Ha.set(e, e.style.overflow), e.style.overflow !== "hidden" && (i = e.style.overflow), e.style.overflow === "hidden") return n.value = !0;
			if (n.value) return e.style.overflow = "hidden";
		}
	}, { immediate: !0 });
	let a = () => {
		let t = za(l(e));
		!t || n.value || (ja && (r = Ra(t, "touchmove", (e) => {
			Va(e);
		}, { passive: !1 })), t.style.overflow = "hidden", n.value = !0);
	}, o = () => {
		let t = za(l(e));
		!t || !n.value || (ja && r?.(), t.style.overflow = i, Ha.delete(t), n.value = !1);
	};
	return Ea(o), j({
		get() {
			return n.value;
		},
		set(e) {
			e ? a() : o();
		}
	});
}
function Wa() {
	let e = !1, t = y(!1);
	return (n, r) => {
		if (t.value = r.value, e) return;
		e = !0;
		let i = Ua(n, r.value);
		f(t, (e) => i.value = e);
	};
}
Wa();
//#endregion
//#region node_modules/.pnpm/@septkit+ui@0.0.33_daisyui@5.5.19_tailwindcss@4.2.2_typescript@5.8.3_vite@8.0.9_@types+node@25.6.0_jiti@2.6.1_/node_modules/@septkit/ui/dist/external/.pnpm/reka-ui@2.9.6_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/shared/createContext.js
function Ga(e, t) {
	let n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
	return [(t) => {
		let n = T(r, t);
		if (n || n === null) return n;
		throw Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
	}, (e) => (p(r, e), e)];
}
//#endregion
//#region node_modules/.pnpm/@septkit+ui@0.0.33_daisyui@5.5.19_tailwindcss@4.2.2_typescript@5.8.3_vite@8.0.9_@types+node@25.6.0_jiti@2.6.1_/node_modules/@septkit/ui/dist/external/.pnpm/reka-ui@2.9.6_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/ConfigProvider/ConfigProvider.js
var [Ka, qa] = /* @__PURE__ */ Ga("ConfigProvider");
//#endregion
//#region node_modules/.pnpm/@septkit+ui@0.0.33_daisyui@5.5.19_tailwindcss@4.2.2_typescript@5.8.3_vite@8.0.9_@types+node@25.6.0_jiti@2.6.1_/node_modules/@septkit/ui/dist/external/.pnpm/reka-ui@2.9.6_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/shared/renderSlotFragments.js
function Ja(e) {
	return e ? e.flatMap((e) => e.type === ce ? Ja(e.children) : [e]) : [];
}
//#endregion
//#region node_modules/.pnpm/@septkit+ui@0.0.33_daisyui@5.5.19_tailwindcss@4.2.2_typescript@5.8.3_vite@8.0.9_@types+node@25.6.0_jiti@2.6.1_/node_modules/@septkit/ui/dist/external/.pnpm/reka-ui@2.9.6_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/Primitive/Slot.js
var [Ya, Xa] = /* @__PURE__ */ Ga("PopperRoot");
//#endregion
//#region node_modules/.pnpm/@septkit+ui@0.0.33_daisyui@5.5.19_tailwindcss@4.2.2_typescript@5.8.3_vite@8.0.9_@types+node@25.6.0_jiti@2.6.1_/node_modules/@septkit/ui/dist/external/.pnpm/defu@6.1.7/node_modules/defu/dist/defu.js
function Za(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Qa(e, t, n = ".", r) {
	if (!Za(t)) return Qa(e, {}, n, r);
	let i = { ...t };
	for (let t of Object.keys(e)) {
		if (t === "__proto__" || t === "constructor") continue;
		let a = e[t];
		a != null && (r && r(i, t, a, n) || (Array.isArray(a) && Array.isArray(i[t]) ? i[t] = [...a, ...i[t]] : Za(a) && Za(i[t]) ? i[t] = Qa(a, i[t], (n ? `${n}.` : "") + t.toString(), r) : i[t] = a));
	}
	return i;
}
function $a(e) {
	let t = window.getComputedStyle(e);
	if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
	{
		let t = e.parentNode;
		return !(t instanceof Element) || t.tagName === "BODY" ? !1 : $a(t);
	}
}
wa(() => o([]));
//#endregion
//#region node_modules/.pnpm/@septkit+ui@0.0.33_daisyui@5.5.19_tailwindcss@4.2.2_typescript@5.8.3_vite@8.0.9_@types+node@25.6.0_jiti@2.6.1_/node_modules/@septkit/ui/dist/external/.pnpm/@floating-ui_utils@0.2.11/node_modules/@floating-ui/utils/dist/floating-ui.utils.js
var eo = Math.round, to = (e) => ({
	x: e,
	y: e
});
//#endregion
//#region node_modules/.pnpm/@septkit+ui@0.0.33_daisyui@5.5.19_tailwindcss@4.2.2_typescript@5.8.3_vite@8.0.9_@types+node@25.6.0_jiti@2.6.1_/node_modules/@septkit/ui/dist/external/.pnpm/@floating-ui_utils@0.2.11/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.js
function no() {
	return typeof window < "u";
}
function ro(e) {
	return oo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function io(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ao(e) {
	return ((oo(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function oo(e) {
	return no() ? e instanceof Node || e instanceof io(e).Node : !1;
}
function so(e) {
	return no() ? e instanceof Element || e instanceof io(e).Element : !1;
}
function co(e) {
	return no() ? e instanceof HTMLElement || e instanceof io(e).HTMLElement : !1;
}
function lo(e) {
	return !no() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof io(e).ShadowRoot;
}
function uo(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = mo(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
var fo;
function po(e) {
	return /^(html|body|#document)$/.test(ro(e));
}
function mo(e) {
	return io(e).getComputedStyle(e);
}
function ho(e) {
	if (ro(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || lo(e) && e.host || ao(e);
	return lo(t) ? t.host : t;
}
function go(e) {
	let t = ho(e);
	return po(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : co(t) && uo(t) ? t : go(t);
}
function _o(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = go(e), i = r === e.ownerDocument?.body, a = io(r);
	if (i) {
		let e = vo(a);
		return t.concat(a, a.visualViewport || [], uo(r) ? r : [], e && n ? _o(e) : []);
	} else return t.concat(r, _o(r, [], n));
}
function vo(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function yo(e, t) {
	let n = ho(e);
	return n === t || !so(n) || po(n) ? !1 : mo(n).position === "fixed" || yo(n, t);
}
var bo = Object.defineProperty, xo = Object.getOwnPropertyDescriptor, So = Object.getOwnPropertyNames, Co = Object.prototype.hasOwnProperty, wo = (e, t) => {
	let n = {};
	for (var r in e) bo(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || bo(n, Symbol.toStringTag, { value: "Module" }), n;
}, To = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = So(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !Co.call(e, s) && s !== n && bo(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = xo(t, s)) || r.enumerable
	});
	return e;
};
((e, t, n) => (To(e, t, "default"), n && To(n, t, "default")))(/* @__PURE__ */ wo({
	Vue: () => k,
	Vue2: () => void 0,
	del: () => Oo,
	install: () => Eo,
	isVue2: () => !1,
	isVue3: () => !0,
	set: () => Do
}), k);
function Eo() {}
function Do(e, t, n) {
	return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function Oo(e, t) {
	if (Array.isArray(e)) {
		e.splice(t, 1);
		return;
	}
	delete e[t];
}
//#endregion
//#region node_modules/.pnpm/@septkit+ui@0.0.33_daisyui@5.5.19_tailwindcss@4.2.2_typescript@5.8.3_vite@8.0.9_@types+node@25.6.0_jiti@2.6.1_/node_modules/@septkit/ui/dist/external/.pnpm/reka-ui@2.9.6_vue@3.5.32_typescript@5.8.3_/node_modules/reka-ui/dist/Popper/PopperContent.js
var ko = {
	side: "bottom",
	sideOffset: 0,
	sideFlip: !0,
	align: "center",
	alignOffset: 0,
	alignFlip: !0,
	arrowPadding: 0,
	hideShiftedArrow: !0,
	avoidCollisions: !0,
	collisionBoundary: () => [],
	collisionPadding: 0,
	sticky: "partial",
	hideWhenDetached: !1,
	positionStrategy: "fixed",
	updatePositionStrategy: "optimized",
	prioritizePosition: !1
}, [Ao, jo] = /* @__PURE__ */ Ga("PopperContent");
({ ...ko });
//#endregion
//#region node_modules/.pnpm/@septkit+ui@0.0.33_daisyui@5.5.19_tailwindcss@4.2.2_typescript@5.8.3_vite@8.0.9_@types+node@25.6.0_jiti@2.6.1_/node_modules/@septkit/ui/dist/external/.pnpm/@lucide_vue@1.16.0_vue@3.5.32_typescript@5.8.3_/node_modules/@lucide/vue/dist/esm/shared/src/utils/isEmptyString.js
var Mo = (e) => e === "", No = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), Po = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Fo = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), Io = (e) => {
	let t = Fo(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, Lo = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Ro = Symbol("lucide-icons");
function zo() {
	return T(Ro, {});
}
//#endregion
//#region node_modules/.pnpm/@septkit+ui@0.0.33_daisyui@5.5.19_tailwindcss@4.2.2_typescript@5.8.3_vite@8.0.9_@types+node@25.6.0_jiti@2.6.1_/node_modules/@septkit/ui/dist/external/.pnpm/@lucide_vue@1.16.0_vue@3.5.32_typescript@5.8.3_/node_modules/@lucide/vue/dist/esm/Icon.js
var Bo = ({ name: e, iconNode: t, absoluteStrokeWidth: n, "absolute-stroke-width": r, strokeWidth: i, "stroke-width": a, size: o, color: s, ...c }, { slots: l }) => {
	let { size: u, color: d, strokeWidth: f = 2, absoluteStrokeWidth: p = !1, class: m = "" } = zo(), h = j(() => {
		let e = Mo(n) || Mo(r) || n === !0 || r === !0 || p === !0, t = i || a || f || Lo["stroke-width"];
		return e ? Number(t) * 24 / Number(o ?? u ?? Lo.width) : t;
	});
	return I("svg", {
		...Lo,
		...c,
		width: o ?? u ?? Lo.width,
		height: o ?? u ?? Lo.height,
		stroke: s ?? d ?? Lo.stroke,
		"stroke-width": h.value,
		class: No("lucide", m, ...e ? [`lucide-${Po(Io(e))}-icon`, `lucide-${Po(e)}`] : ["lucide-icon"])
	}, [...t.map((e) => I(...e)), ...l.default ? [l.default()] : []]);
}, $ = (e, t) => (n, { slots: r, attrs: i }) => I(Bo, {
	...i,
	...n,
	iconNode: t,
	name: e
}, r.default ? { default: r.default } : void 0), Vo = {
	Substation: {
		text: "text-scl-orange-900",
		background: "bg-scl-orange-100"
	},
	Process: {
		text: "text-scl-orange-900",
		background: "bg-scl-orange-100"
	},
	VoltageLevel: {
		text: "text-scl-orange-800",
		background: "bg-scl-orange-100"
	},
	Line: {
		text: "text-scl-orange-800",
		background: "bg-scl-orange-100"
	},
	Bay: {
		text: "text-scl-amber-900",
		background: "bg-scl-amber-100"
	},
	BayType: {
		text: "text-scl-amber-900",
		background: "bg-scl-amber-100"
	},
	Voltage: {
		text: "text-scl-amber-900",
		background: "bg-scl-amber-100"
	},
	ProcessResources: {
		text: "text-scl-amber-800",
		background: "bg-scl-amber-100"
	},
	ProcessResource: {
		text: "text-scl-amber-800",
		background: "bg-scl-amber-100"
	},
	ProcessResourceRef: {
		text: "text-scl-amber-800",
		background: "bg-scl-amber-50"
	},
	ConductingEquipment: {
		text: "text-scl-green-900",
		background: "bg-scl-green-100"
	},
	GeneralEquipment: {
		text: "text-scl-green-900",
		background: "bg-scl-green-100"
	},
	PowerTransformer: {
		text: "text-scl-green-900",
		background: "bg-scl-green-100"
	},
	ConnectivityNode: {
		text: "text-scl-green-800",
		background: "bg-scl-green-100"
	},
	SubEquipment: {
		text: "text-scl-green-800",
		background: "bg-scl-green-100"
	},
	Terminal: {
		text: "text-scl-green-800",
		background: "bg-scl-green-100"
	},
	TransformerWinding: {
		text: "text-scl-green-800",
		background: "bg-scl-green-50"
	},
	TapChanger: {
		text: "text-scl-green-700",
		background: "bg-scl-green-50"
	},
	NeutralPoint: {
		text: "text-scl-green-700",
		background: "bg-scl-green-50"
	},
	Function: {
		text: "text-scl-petrol-900",
		background: "bg-scl-petrol-100"
	},
	EqFunction: {
		text: "text-scl-petrol-900",
		background: "bg-scl-petrol-100"
	},
	SubFunction: {
		text: "text-scl-petrol-800",
		background: "bg-scl-petrol-100"
	},
	EqSubFunction: {
		text: "text-scl-petrol-800",
		background: "bg-scl-petrol-100"
	},
	FunctionTemplate: {
		text: "text-scl-petrol-800",
		background: "bg-scl-petrol-50"
	},
	SubFunctionTemplate: {
		text: "text-scl-petrol-800",
		background: "bg-scl-petrol-50"
	},
	BehaviorDescription: {
		text: "text-scl-petrol-700",
		background: "bg-scl-petrol-50"
	},
	PowerSystemRelations: {
		text: "text-scl-petrol-700",
		background: "bg-scl-petrol-50"
	},
	BehaviorDescriptionRef: {
		text: "text-scl-petrol-700",
		background: "bg-scl-petrol-50"
	},
	BehaviorReference: {
		text: "text-scl-petrol-700",
		background: "bg-scl-petrol-50"
	},
	PowerSystemRelation: {
		text: "text-scl-petrol-700",
		background: "bg-scl-petrol-50"
	},
	PowerSystemRelationRef: {
		text: "text-scl-petrol-700",
		background: "bg-scl-petrol-50"
	},
	FunctionSclRef: {
		text: "text-scl-petrol-700",
		background: "bg-scl-petrol-50"
	},
	LNode: {
		text: "text-scl-turquoise-900",
		background: "bg-scl-turquoise-100"
	},
	Inputs: {
		text: "text-scl-turquoise-900",
		background: "bg-scl-turquoise-100"
	},
	Outputs: {
		text: "text-scl-turquoise-900",
		background: "bg-scl-turquoise-100"
	},
	LNodeInputs: {
		text: "text-scl-turquoise-800",
		background: "bg-scl-turquoise-100"
	},
	LNodeOutputs: {
		text: "text-scl-turquoise-800",
		background: "bg-scl-turquoise-100"
	},
	LNodeSpecNaming: {
		text: "text-scl-turquoise-800",
		background: "bg-scl-turquoise-100"
	},
	DOS: {
		text: "text-scl-turquoise-800",
		background: "bg-scl-turquoise-100"
	},
	LNodeInputRef: {
		text: "text-scl-turquoise-800",
		background: "bg-scl-turquoise-50"
	},
	LNodeOutputRef: {
		text: "text-scl-turquoise-800",
		background: "bg-scl-turquoise-50"
	},
	LNodeDataRef: {
		text: "text-scl-turquoise-800",
		background: "bg-scl-turquoise-50"
	},
	ExtRef: {
		text: "text-scl-turquoise-800",
		background: "bg-scl-turquoise-50"
	},
	ExtCtrl: {
		text: "text-scl-turquoise-800",
		background: "bg-scl-turquoise-50"
	},
	DAS: {
		text: "text-scl-turquoise-700",
		background: "bg-scl-turquoise-50"
	},
	SDS: {
		text: "text-scl-turquoise-700",
		background: "bg-scl-turquoise-50"
	},
	InputVar: {
		text: "text-scl-turquoise-700",
		background: "bg-scl-turquoise-50"
	},
	OutputVar: {
		text: "text-scl-turquoise-700",
		background: "bg-scl-turquoise-50"
	},
	ControlRef: {
		text: "text-scl-turquoise-700",
		background: "bg-scl-turquoise-50"
	},
	ControllingLNode: {
		text: "text-scl-turquoise-700",
		background: "bg-scl-turquoise-50"
	},
	SubscriberLNode: {
		text: "text-scl-turquoise-700",
		background: "bg-scl-turquoise-50"
	},
	ProcessEcho: {
		text: "text-scl-turquoise-700",
		background: "bg-scl-turquoise-50"
	},
	InputVarRef: {
		text: "text-scl-turquoise-700",
		background: "bg-scl-turquoise-50"
	},
	OutputVarRef: {
		text: "text-scl-turquoise-700",
		background: "bg-scl-turquoise-50"
	},
	LogParametersRef: {
		text: "text-scl-turquoise-700",
		background: "bg-scl-turquoise-50"
	},
	Application: {
		text: "text-scl-crimson-900",
		background: "bg-scl-crimson-100"
	},
	ApplicationSclRef: {
		text: "text-scl-crimson-800",
		background: "bg-scl-crimson-100"
	},
	FunctionRole: {
		text: "text-scl-crimson-800",
		background: "bg-scl-crimson-100"
	},
	FunctionRoleContent: {
		text: "text-scl-crimson-800",
		background: "bg-scl-crimson-50"
	},
	AllocationRole: {
		text: "text-scl-lime-900",
		background: "bg-scl-lime-100"
	},
	FunctionalVariantGroup: {
		text: "text-scl-lime-900",
		background: "bg-scl-lime-100"
	},
	FunctionRef: {
		text: "text-scl-lime-900",
		background: "bg-scl-lime-100"
	},
	SignalRole: {
		text: "text-scl-lime-900",
		background: "bg-scl-lime-100"
	},
	AllocationRoleRef: {
		text: "text-scl-lime-800",
		background: "bg-scl-lime-100"
	},
	FunctionalVariant: {
		text: "text-scl-lime-800",
		background: "bg-scl-lime-100"
	},
	FunctionalSubVariant: {
		text: "text-scl-lime-800",
		background: "bg-scl-lime-50"
	},
	FunctionalVariantRef: {
		text: "text-scl-lime-800",
		background: "bg-scl-lime-50"
	},
	Communication: {
		text: "text-scl-blue-900",
		background: "bg-scl-blue-100"
	},
	SubNetwork: {
		text: "text-scl-blue-800",
		background: "bg-scl-blue-100"
	},
	ConnectedAP: {
		text: "text-scl-blue-800",
		background: "bg-scl-blue-50"
	},
	BitRate: {
		text: "text-scl-blue-800",
		background: "bg-scl-blue-50"
	},
	CommunicationServiceSpecifications: {
		text: "text-scl-blue-800",
		background: "bg-scl-blue-50"
	},
	AnalogueWiringParameters: {
		text: "text-scl-blue-800",
		background: "bg-scl-blue-50"
	},
	BinaryWiringParameters: {
		text: "text-scl-blue-800",
		background: "bg-scl-blue-50"
	},
	Address: {
		text: "text-scl-blue-700",
		background: "bg-scl-blue-50"
	},
	PhysConn: {
		text: "text-scl-blue-700",
		background: "bg-scl-blue-50"
	},
	L2CommParameters: {
		text: "text-scl-blue-700",
		background: "bg-scl-blue-50"
	},
	L3IPv4CommParameters: {
		text: "text-scl-blue-700",
		background: "bg-scl-blue-50"
	},
	L3IPv6CommParameters: {
		text: "text-scl-blue-700",
		background: "bg-scl-blue-50"
	},
	AnalogueWiringParametersRef: {
		text: "text-scl-blue-700",
		background: "bg-scl-blue-50"
	},
	BinaryWiringParametersRef: {
		text: "text-scl-blue-700",
		background: "bg-scl-blue-50"
	},
	P: {
		text: "text-scl-blue-700",
		background: "bg-scl-blue-50"
	},
	IED: {
		text: "text-scl-navy-900",
		background: "bg-scl-navy-100"
	},
	AccessPoint: {
		text: "text-scl-navy-800",
		background: "bg-scl-navy-100"
	},
	IEDSourceFiles: {
		text: "text-scl-navy-800",
		background: "bg-scl-navy-100"
	},
	MinRequestedSCDFiles: {
		text: "text-scl-navy-800",
		background: "bg-scl-navy-100"
	},
	Server: {
		text: "text-scl-navy-800",
		background: "bg-scl-navy-50"
	},
	ServerAt: {
		text: "text-scl-navy-800",
		background: "bg-scl-navy-50"
	},
	MinRequestedSCDFile: {
		text: "text-scl-navy-800",
		background: "bg-scl-navy-50"
	},
	LDevice: {
		text: "text-scl-navy-700",
		background: "bg-scl-navy-50"
	},
	Association: {
		text: "text-scl-navy-700",
		background: "bg-scl-navy-50"
	},
	LN: {
		text: "text-scl-navy-700",
		background: "bg-scl-navy-50"
	},
	LN0: {
		text: "text-scl-navy-700",
		background: "bg-scl-navy-50"
	},
	AccessControl: {
		text: "text-scl-navy-700",
		background: "bg-scl-navy-50"
	},
	DataTypeTemplates: {
		text: "text-scl-red-900",
		background: "bg-scl-red-100"
	},
	LNodeType: {
		text: "text-scl-red-900",
		background: "bg-scl-red-100"
	},
	DOType: {
		text: "text-scl-red-800",
		background: "bg-scl-red-100"
	},
	DAType: {
		text: "text-scl-red-800",
		background: "bg-scl-red-100"
	},
	EnumType: {
		text: "text-scl-red-800",
		background: "bg-scl-red-100"
	},
	DO: {
		text: "text-scl-red-800",
		background: "bg-scl-red-50"
	},
	DA: {
		text: "text-scl-red-800",
		background: "bg-scl-red-50"
	},
	SDO: {
		text: "text-scl-red-800",
		background: "bg-scl-red-50"
	},
	BDA: {
		text: "text-scl-red-800",
		background: "bg-scl-red-50"
	},
	EnumVal: {
		text: "text-scl-red-800",
		background: "bg-scl-red-50"
	},
	DOI: {
		text: "text-scl-red-700",
		background: "bg-scl-red-50"
	},
	Val: {
		text: "text-scl-red-700",
		background: "bg-scl-red-50"
	},
	ProtNs: {
		text: "text-scl-red-700",
		background: "bg-scl-red-50"
	},
	DAI: {
		text: "text-scl-red-700",
		background: "bg-scl-red-50"
	},
	SDI: {
		text: "text-scl-red-700",
		background: "bg-scl-red-50"
	},
	GSEControl: {
		text: "text-scl-darkred-900",
		background: "bg-scl-darkred-100"
	},
	SampledValueControl: {
		text: "text-scl-darkred-900",
		background: "bg-scl-darkred-100"
	},
	ReportControl: {
		text: "text-scl-darkred-900",
		background: "bg-scl-darkred-100"
	},
	LogControl: {
		text: "text-scl-darkred-900",
		background: "bg-scl-darkred-100"
	},
	SettingControl: {
		text: "text-scl-darkred-900",
		background: "bg-scl-darkred-100"
	},
	DataSet: {
		text: "text-scl-darkred-900",
		background: "bg-scl-darkred-100"
	},
	Log: {
		text: "text-scl-darkred-900",
		background: "bg-scl-darkred-100"
	},
	FCDA: {
		text: "text-scl-darkred-800",
		background: "bg-scl-darkred-100"
	},
	IEDName: {
		text: "text-scl-darkred-800",
		background: "bg-scl-darkred-100"
	},
	TrgOps: {
		text: "text-scl-darkred-800",
		background: "bg-scl-darkred-100"
	},
	OptFields: {
		text: "text-scl-darkred-800",
		background: "bg-scl-darkred-100"
	},
	RptEnabled: {
		text: "text-scl-darkred-800",
		background: "bg-scl-darkred-100"
	},
	SmvOpts: {
		text: "text-scl-darkred-800",
		background: "bg-scl-darkred-100"
	},
	Protocol: {
		text: "text-scl-darkred-800",
		background: "bg-scl-darkred-100"
	},
	ClientLN: {
		text: "text-scl-darkred-800",
		background: "bg-scl-darkred-50"
	},
	GOOSE: {
		text: "text-scl-sky-900",
		background: "bg-scl-sky-100"
	},
	GSE: {
		text: "text-scl-sky-900",
		background: "bg-scl-sky-100"
	},
	GSSE: {
		text: "text-scl-sky-900",
		background: "bg-scl-sky-100"
	},
	SMV: {
		text: "text-scl-sky-900",
		background: "bg-scl-sky-100"
	},
	SMVsc: {
		text: "text-scl-sky-900",
		background: "bg-scl-sky-100"
	},
	GooseParameters: {
		text: "text-scl-sky-800",
		background: "bg-scl-sky-100"
	},
	SMVParameters: {
		text: "text-scl-sky-800",
		background: "bg-scl-sky-100"
	},
	SmpRate: {
		text: "text-scl-sky-800",
		background: "bg-scl-sky-100"
	},
	SamplesPerSec: {
		text: "text-scl-sky-800",
		background: "bg-scl-sky-100"
	},
	SecPerSamples: {
		text: "text-scl-sky-800",
		background: "bg-scl-sky-100"
	},
	GooseParametersRef: {
		text: "text-scl-sky-800",
		background: "bg-scl-sky-50"
	},
	SMVParametersRef: {
		text: "text-scl-sky-800",
		background: "bg-scl-sky-50"
	},
	MinTime: {
		text: "text-scl-sky-800",
		background: "bg-scl-sky-50"
	},
	MaxTime: {
		text: "text-scl-sky-800",
		background: "bg-scl-sky-50"
	},
	Security: {
		text: "text-scl-steel-900",
		background: "bg-scl-steel-100"
	},
	McSecurity: {
		text: "text-scl-steel-900",
		background: "bg-scl-steel-100"
	},
	GOOSESecurity: {
		text: "text-scl-steel-900",
		background: "bg-scl-steel-100"
	},
	SMVSecurity: {
		text: "text-scl-steel-900",
		background: "bg-scl-steel-100"
	},
	GOOSEMcSecurity: {
		text: "text-scl-steel-800",
		background: "bg-scl-steel-100"
	},
	SVMcSecurity: {
		text: "text-scl-steel-800",
		background: "bg-scl-steel-100"
	},
	Authentication: {
		text: "text-scl-steel-800",
		background: "bg-scl-steel-100"
	},
	KDC: {
		text: "text-scl-steel-800",
		background: "bg-scl-steel-100"
	},
	IssuerName: {
		text: "text-scl-steel-800",
		background: "bg-scl-steel-50"
	},
	Subject: {
		text: "text-scl-steel-800",
		background: "bg-scl-steel-50"
	},
	Services: {
		text: "text-scl-stone-900",
		background: "bg-scl-stone-100"
	},
	ServiceSpecifications: {
		text: "text-scl-stone-900",
		background: "bg-scl-stone-100"
	},
	ClientServices: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-100"
	},
	SettingGroups: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-100"
	},
	GSESettings: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-100"
	},
	SMVSettings: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-100"
	},
	ReportSettings: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-100"
	},
	LogSettings: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-100"
	},
	SGEdit: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	ConfSG: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	ConfDataSet: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	ConfLNs: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	ConfLdName: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	ConfLogControl: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	ConfReportControl: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	ConfSigRef: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	DynAssociation: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	DynDataSet: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	ReadWrite: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	ReportParameters: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	LogParameters: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	MultiAPPerSubNet: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	SupSubscription: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	TimeSyncProt: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	TimerActivatedControl: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	ValueHandling: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	RedProt: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	CommProt: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	SCSM: {
		text: "text-scl-stone-800",
		background: "bg-scl-stone-50"
	},
	FileHandling: {
		text: "text-scl-stone-700",
		background: "bg-scl-stone-50"
	},
	ReportParametersRef: {
		text: "text-scl-stone-700",
		background: "bg-scl-stone-50"
	},
	DataObjectDirectory: {
		text: "text-scl-stone-700",
		background: "bg-scl-stone-50"
	},
	DataSetDirectory: {
		text: "text-scl-stone-700",
		background: "bg-scl-stone-50"
	},
	GSEDir: {
		text: "text-scl-stone-700",
		background: "bg-scl-stone-50"
	},
	GetCBValues: {
		text: "text-scl-stone-700",
		background: "bg-scl-stone-50"
	},
	GetDataObjectDefinition: {
		text: "text-scl-stone-700",
		background: "bg-scl-stone-50"
	},
	GetDataSetValue: {
		text: "text-scl-stone-700",
		background: "bg-scl-stone-50"
	},
	GetDirectory: {
		text: "text-scl-stone-700",
		background: "bg-scl-stone-50"
	},
	SetDataSetValue: {
		text: "text-scl-stone-700",
		background: "bg-scl-stone-50"
	},
	SCL: {
		text: "text-scl-gray-900",
		background: "bg-scl-gray-100"
	},
	Private: {
		text: "text-scl-gray-900",
		background: "bg-scl-gray-100"
	},
	Text: {
		text: "text-scl-gray-900",
		background: "bg-scl-gray-100"
	},
	Header: {
		text: "text-scl-gray-800",
		background: "bg-scl-gray-100"
	},
	Labels: {
		text: "text-scl-gray-800",
		background: "bg-scl-gray-100"
	},
	Project: {
		text: "text-scl-gray-800",
		background: "bg-scl-gray-100"
	},
	FunctionCategory: {
		text: "text-scl-gray-800",
		background: "bg-scl-gray-100"
	},
	Variable: {
		text: "text-scl-gray-800",
		background: "bg-scl-gray-100"
	},
	CheckoutID: {
		text: "text-scl-gray-800",
		background: "bg-scl-gray-100"
	},
	History: {
		text: "text-scl-gray-800",
		background: "bg-scl-gray-50"
	},
	Label: {
		text: "text-scl-gray-800",
		background: "bg-scl-gray-50"
	},
	Resource: {
		text: "text-scl-gray-800",
		background: "bg-scl-gray-50"
	},
	FunctionCategoryRef: {
		text: "text-scl-gray-800",
		background: "bg-scl-gray-50"
	},
	FunctionCatRef: {
		text: "text-scl-gray-800",
		background: "bg-scl-gray-50"
	},
	SubCategory: {
		text: "text-scl-gray-800",
		background: "bg-scl-gray-50"
	},
	ProjectProcessReference: {
		text: "text-scl-gray-800",
		background: "bg-scl-gray-50"
	},
	SourceRef: {
		text: "text-scl-gray-800",
		background: "bg-scl-gray-50"
	},
	SubCheckoutID: {
		text: "text-scl-gray-800",
		background: "bg-scl-gray-50"
	},
	VariableApplyTo: {
		text: "text-scl-gray-800",
		background: "bg-scl-gray-50"
	},
	VariableRef: {
		text: "text-scl-gray-800",
		background: "bg-scl-gray-50"
	},
	Hitem: {
		text: "text-scl-gray-700",
		background: "bg-scl-gray-50"
	},
	SourceFiles: {
		text: "text-scl-gray-700",
		background: "bg-scl-gray-50"
	},
	SclFileReference: {
		text: "text-scl-gray-700",
		background: "bg-scl-gray-50"
	}
}, Ho = $("activity", [["path", {
	d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
	key: "169zse"
}]]), Uo = $("antenna", [
	["path", {
		d: "M2 12 7 2",
		key: "117k30"
	}],
	["path", {
		d: "m7 12 5-10",
		key: "1tvx22"
	}],
	["path", {
		d: "m12 12 5-10",
		key: "ev1o1a"
	}],
	["path", {
		d: "m17 12 5-10",
		key: "1e4ti3"
	}],
	["path", {
		d: "M4.5 7h15",
		key: "vlsxkz"
	}],
	["path", {
		d: "M12 16v6",
		key: "c8a4gj"
	}]
]), Wo = $("app-window", [
	["rect", {
		x: "2",
		y: "4",
		width: "20",
		height: "16",
		rx: "2",
		key: "izxlao"
	}],
	["path", {
		d: "M10 4v4",
		key: "pp8u80"
	}],
	["path", {
		d: "M2 8h20",
		key: "d11cs7"
	}],
	["path", {
		d: "M6 4v4",
		key: "1svtjw"
	}]
]), Go = $("archive", [
	["rect", {
		width: "20",
		height: "5",
		x: "2",
		y: "3",
		rx: "1",
		key: "1wp1u1"
	}],
	["path", {
		d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",
		key: "1s80jp"
	}],
	["path", {
		d: "M10 12h4",
		key: "a56b0p"
	}]
]), Ko = $("arrow-down", [["path", {
	d: "M12 5v14",
	key: "s699le"
}], ["path", {
	d: "m19 12-7 7-7-7",
	key: "1idqje"
}]]), qo = $("arrow-up-right", [["path", {
	d: "M7 7h10v10",
	key: "1tivn9"
}], ["path", {
	d: "M7 17 17 7",
	key: "1vkiza"
}]]), Jo = $("arrow-up", [["path", {
	d: "m5 12 7-7 7 7",
	key: "hav0vg"
}], ["path", {
	d: "M12 19V5",
	key: "x0mq9r"
}]]), Yo = $("binary", [
	["rect", {
		x: "14",
		y: "14",
		width: "4",
		height: "6",
		rx: "2",
		key: "p02svl"
	}],
	["rect", {
		x: "6",
		y: "4",
		width: "4",
		height: "6",
		rx: "2",
		key: "xm4xkj"
	}],
	["path", {
		d: "M6 20h4",
		key: "1i6q5t"
	}],
	["path", {
		d: "M14 10h4",
		key: "ru81e7"
	}],
	["path", {
		d: "M6 14h2v6",
		key: "16z9wg"
	}],
	["path", {
		d: "M14 4h2v6",
		key: "1idq9u"
	}]
]), Xo = $("book-open", [["path", {
	d: "M12 7v14",
	key: "1akyts"
}], ["path", {
	d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
	key: "ruj8y"
}]]), Zo = $("book", [["path", {
	d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
	key: "k3hazp"
}]]), Qo = $("box", [
	["path", {
		d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
		key: "hh9hay"
	}],
	["path", {
		d: "m3.3 7 8.7 5 8.7-5",
		key: "g66t2b"
	}],
	["path", {
		d: "M12 22V12",
		key: "d0xqtd"
	}]
]), $o = $("braces", [["path", {
	d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",
	key: "ezmyqa"
}], ["path", {
	d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
	key: "e1hn23"
}]]), es = $("building-2", [
	["path", {
		d: "M10 12h4",
		key: "a56b0p"
	}],
	["path", {
		d: "M10 8h4",
		key: "1sr2af"
	}],
	["path", {
		d: "M14 21v-3a2 2 0 0 0-4 0v3",
		key: "1rgiei"
	}],
	["path", {
		d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
		key: "secmi2"
	}],
	["path", {
		d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",
		key: "16ra0t"
	}]
]), ts = $("cable", [
	["path", {
		d: "M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z",
		key: "trhst0"
	}],
	["path", {
		d: "M17 21v-2",
		key: "ds4u3f"
	}],
	["path", {
		d: "M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10",
		key: "1mo9zo"
	}],
	["path", {
		d: "M21 21v-2",
		key: "eo0ou"
	}],
	["path", {
		d: "M3 5V3",
		key: "1k5hjh"
	}],
	["path", {
		d: "M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z",
		key: "1dd30t"
	}],
	["path", {
		d: "M7 5V3",
		key: "1t1388"
	}]
]), ns = $("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]), rs = $("circle-dot", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "1",
	key: "41hilf"
}]]), is = $("circuit-board", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M11 9h4a2 2 0 0 0 2-2V3",
		key: "1ve2rv"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}],
	["path", {
		d: "M7 21v-4a2 2 0 0 1 2-2h4",
		key: "1fwkro"
	}],
	["circle", {
		cx: "15",
		cy: "15",
		r: "2",
		key: "3i40o0"
	}]
]), as = $("clock", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6l4 2",
	key: "mmk7yg"
}]]), os = $("columns-2", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M12 3v18",
	key: "108xh3"
}]]), ss = $("cpu", [
	["path", {
		d: "M12 20v2",
		key: "1lh1kg"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M17 20v2",
		key: "1rnc9c"
	}],
	["path", {
		d: "M17 2v2",
		key: "11trls"
	}],
	["path", {
		d: "M2 12h2",
		key: "1t8f8n"
	}],
	["path", {
		d: "M2 17h2",
		key: "7oei6x"
	}],
	["path", {
		d: "M2 7h2",
		key: "asdhe0"
	}],
	["path", {
		d: "M20 12h2",
		key: "1q8mjw"
	}],
	["path", {
		d: "M20 17h2",
		key: "1fpfkl"
	}],
	["path", {
		d: "M20 7h2",
		key: "1o8tra"
	}],
	["path", {
		d: "M7 20v2",
		key: "4gnj0m"
	}],
	["path", {
		d: "M7 2v2",
		key: "1i4yhu"
	}],
	["rect", {
		x: "4",
		y: "4",
		width: "16",
		height: "16",
		rx: "2",
		key: "1vbyd7"
	}],
	["rect", {
		x: "8",
		y: "8",
		width: "8",
		height: "8",
		rx: "1",
		key: "z9xiuo"
	}]
]), cs = $("database", [
	["ellipse", {
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3",
		key: "msslwz"
	}],
	["path", {
		d: "M3 5V19A9 3 0 0 0 21 19V5",
		key: "1wlel7"
	}],
	["path", {
		d: "M3 12A9 3 0 0 0 21 12",
		key: "mv7ke4"
	}]
]), ls = $("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
	}]
]), us = $("external-link", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]), ds = $("file-code", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M10 12.5 8 15l2 2.5",
		key: "1tg20x"
	}],
	["path", {
		d: "m14 12.5 2 2.5-2 2.5",
		key: "yinavb"
	}]
]), fs = $("file-output", [
	["path", {
		d: "M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127",
		key: "wfxp4w"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "m5 11-3 3",
		key: "1dgrs4"
	}],
	["path", {
		d: "m5 17-3-3h10",
		key: "1mvvaf"
	}]
]), ps = $("file-text", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M10 9H8",
		key: "b1mrlr"
	}],
	["path", {
		d: "M16 13H8",
		key: "t4e002"
	}],
	["path", {
		d: "M16 17H8",
		key: "z1uh3a"
	}]
]), ms = $("file", [["path", {
	d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
	key: "1oefj6"
}], ["path", {
	d: "M14 2v5a1 1 0 0 0 1 1h5",
	key: "wfsgrz"
}]]), hs = $("files", [
	["path", {
		d: "M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",
		key: "14sh0y"
	}],
	["path", {
		d: "M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",
		key: "1970lx"
	}],
	["path", {
		d: "M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1",
		key: "l4dndm"
	}]
]), gs = $("folder-open", [["path", {
	d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
	key: "usdka0"
}]]), _s = $("folder", [["path", {
	d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
	key: "1kt360"
}]]), vs = $("gauge", [["path", {
	d: "m12 14 4-4",
	key: "9kzdfg"
}], ["path", {
	d: "M3.34 19a10 10 0 1 1 17.32 0",
	key: "19p75a"
}]]), ys = $("git-branch", [
	["path", {
		d: "M15 6a9 9 0 0 0-9 9V3",
		key: "1cii5b"
	}],
	["circle", {
		cx: "18",
		cy: "6",
		r: "3",
		key: "1h7g24"
	}],
	["circle", {
		cx: "6",
		cy: "18",
		r: "3",
		key: "fqmcym"
	}]
]), bs = $("git-fork", [
	["circle", {
		cx: "12",
		cy: "18",
		r: "3",
		key: "1mpf1b"
	}],
	["circle", {
		cx: "6",
		cy: "6",
		r: "3",
		key: "1lh9wr"
	}],
	["circle", {
		cx: "18",
		cy: "6",
		r: "3",
		key: "1h7g24"
	}],
	["path", {
		d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",
		key: "1uq4wg"
	}],
	["path", {
		d: "M12 12v3",
		key: "158kv8"
	}]
]), xs = $("globe", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
		key: "13o1zl"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}]
]), Ss = $("group", [
	["path", {
		d: "M3 7V5c0-1.1.9-2 2-2h2",
		key: "adw53z"
	}],
	["path", {
		d: "M17 3h2c1.1 0 2 .9 2 2v2",
		key: "an4l38"
	}],
	["path", {
		d: "M21 17v2c0 1.1-.9 2-2 2h-2",
		key: "144t0e"
	}],
	["path", {
		d: "M7 21H5c-1.1 0-2-.9-2-2v-2",
		key: "rtnfgi"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "7",
		y: "7",
		rx: "1",
		key: "1eyiv7"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "10",
		y: "12",
		rx: "1",
		key: "1qlmkx"
	}]
]), Cs = $("hard-drive", [
	["path", {
		d: "M10 16h.01",
		key: "1bzywj"
	}],
	["path", {
		d: "M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
		key: "18tbho"
	}],
	["path", {
		d: "M21.946 12.013H2.054",
		key: "zqlbp7"
	}],
	["path", {
		d: "M6 16h.01",
		key: "1pmjb7"
	}]
]), ws = $("hash", [
	["line", {
		x1: "4",
		x2: "20",
		y1: "9",
		y2: "9",
		key: "4lhtct"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "15",
		y2: "15",
		key: "vyu0kd"
	}],
	["line", {
		x1: "10",
		x2: "8",
		y1: "3",
		y2: "21",
		key: "1ggp8o"
	}],
	["line", {
		x1: "16",
		x2: "14",
		y1: "3",
		y2: "21",
		key: "weycgp"
	}]
]), Ts = $("heading", [
	["path", {
		d: "M6 12h12",
		key: "8npq4p"
	}],
	["path", {
		d: "M6 20V4",
		key: "1w1bmo"
	}],
	["path", {
		d: "M18 20V4",
		key: "o2hl4u"
	}]
]), Es = $("history", [
	["path", {
		d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
		key: "1357e3"
	}],
	["path", {
		d: "M3 3v5h5",
		key: "1xhq8a"
	}],
	["path", {
		d: "M12 7v5l4 2",
		key: "1fdv2h"
	}]
]), Ds = $("key", [
	["path", {
		d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",
		key: "g0fldk"
	}],
	["path", {
		d: "m21 2-9.6 9.6",
		key: "1j0ho8"
	}],
	["circle", {
		cx: "7.5",
		cy: "15.5",
		r: "5.5",
		key: "yqb3hr"
	}]
]), Os = $("layers", [
	["path", {
		d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
		key: "zw3jo"
	}],
	["path", {
		d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
		key: "1wduqc"
	}],
	["path", {
		d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
		key: "kqbvx6"
	}]
]), ks = $("layout-template", [
	["rect", {
		width: "18",
		height: "7",
		x: "3",
		y: "3",
		rx: "1",
		key: "f1a2em"
	}],
	["rect", {
		width: "9",
		height: "7",
		x: "3",
		y: "14",
		rx: "1",
		key: "jqznyg"
	}],
	["rect", {
		width: "5",
		height: "7",
		x: "16",
		y: "14",
		rx: "1",
		key: "q5h2i8"
	}]
]), As = $("link-2", [
	["path", {
		d: "M9 17H7A5 5 0 0 1 7 7h2",
		key: "8i5ue5"
	}],
	["path", {
		d: "M15 7h2a5 5 0 1 1 0 10h-2",
		key: "1b9ql8"
	}],
	["line", {
		x1: "8",
		x2: "16",
		y1: "12",
		y2: "12",
		key: "1jonct"
	}]
]), js = $("link", [["path", {
	d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
	key: "1cjeqo"
}], ["path", {
	d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
	key: "19qd67"
}]]), Ms = $("list-ordered", [
	["path", {
		d: "M11 5h10",
		key: "1cz7ny"
	}],
	["path", {
		d: "M11 12h10",
		key: "1438ji"
	}],
	["path", {
		d: "M11 19h10",
		key: "11t30w"
	}],
	["path", {
		d: "M4 4h1v5",
		key: "10yrso"
	}],
	["path", {
		d: "M4 9h2",
		key: "r1h2o0"
	}],
	["path", {
		d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",
		key: "xtkcd5"
	}]
]), Ns = $("list", [
	["path", {
		d: "M3 5h.01",
		key: "18ugdj"
	}],
	["path", {
		d: "M3 12h.01",
		key: "nlz23k"
	}],
	["path", {
		d: "M3 19h.01",
		key: "noohij"
	}],
	["path", {
		d: "M8 5h13",
		key: "1pao27"
	}],
	["path", {
		d: "M8 12h13",
		key: "1za7za"
	}],
	["path", {
		d: "M8 19h13",
		key: "m83p4d"
	}]
]), Ps = $("lock", [["rect", {
	width: "18",
	height: "11",
	x: "3",
	y: "11",
	rx: "2",
	ry: "2",
	key: "1w4ew1"
}], ["path", {
	d: "M7 11V7a5 5 0 0 1 10 0v4",
	key: "fwvmzm"
}]]), Fs = $("map-pin", [["path", {
	d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
	key: "1r0f0z"
}], ["circle", {
	cx: "12",
	cy: "10",
	r: "3",
	key: "ilqhr7"
}]]), Is = $("megaphone", [
	["path", {
		d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
		key: "q8bfy3"
	}],
	["path", {
		d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",
		key: "1853fq"
	}],
	["path", {
		d: "M8 6v8",
		key: "15ugcq"
	}]
]), Ls = $("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), Rs = $("network", [
	["rect", {
		x: "16",
		y: "16",
		width: "6",
		height: "6",
		rx: "1",
		key: "4q2zg0"
	}],
	["rect", {
		x: "2",
		y: "16",
		width: "6",
		height: "6",
		rx: "1",
		key: "8cvhb9"
	}],
	["rect", {
		x: "9",
		y: "2",
		width: "6",
		height: "6",
		rx: "1",
		key: "1egb70"
	}],
	["path", {
		d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
		key: "1jsf9p"
	}],
	["path", {
		d: "M12 12V8",
		key: "2874zd"
	}]
]), zs = $("notebook", [
	["path", {
		d: "M2 6h4",
		key: "aawbzj"
	}],
	["path", {
		d: "M2 10h4",
		key: "l0bgd4"
	}],
	["path", {
		d: "M2 14h4",
		key: "1gsvsf"
	}],
	["path", {
		d: "M2 18h4",
		key: "1bu2t1"
	}],
	["rect", {
		width: "16",
		height: "20",
		x: "4",
		y: "2",
		rx: "2",
		key: "1nb95v"
	}],
	["path", {
		d: "M16 2v20",
		key: "rotuqe"
	}]
]), Bs = $("package", [
	["path", {
		d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
		key: "1a0edw"
	}],
	["path", {
		d: "M12 22V12",
		key: "d0xqtd"
	}],
	["polyline", {
		points: "3.29 7 12 12 20.71 7",
		key: "ousv84"
	}],
	["path", {
		d: "m7.5 4.27 9 5.15",
		key: "1c824w"
	}]
]), Vs = $("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]), Hs = $("plug-zap", [
	["path", {
		d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",
		key: "goz73y"
	}],
	["path", {
		d: "m2 22 3-3",
		key: "19mgm9"
	}],
	["path", {
		d: "M7.5 13.5 10 11",
		key: "7xgeeb"
	}],
	["path", {
		d: "M10.5 16.5 13 14",
		key: "10btkg"
	}],
	["path", {
		d: "m18 3-4 4h6l-4 4",
		key: "16psg9"
	}]
]), Us = $("plug", [
	["path", {
		d: "M12 22v-5",
		key: "1ega77"
	}],
	["path", {
		d: "M15 8V2",
		key: "18g5xt"
	}],
	["path", {
		d: "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z",
		key: "1xoxul"
	}],
	["path", {
		d: "M9 8V2",
		key: "14iosj"
	}]
]), Ws = $("power", [["path", {
	d: "M12 2v10",
	key: "mnfbl"
}], ["path", {
	d: "M18.4 6.6a9 9 0 1 1-12.77.04",
	key: "obofu9"
}]]), Gs = $("repeat", [
	["path", {
		d: "m17 2 4 4-4 4",
		key: "nntrym"
	}],
	["path", {
		d: "M3 11v-1a4 4 0 0 1 4-4h14",
		key: "84bu3i"
	}],
	["path", {
		d: "m7 22-4-4 4-4",
		key: "1wqhfi"
	}],
	["path", {
		d: "M21 13v1a4 4 0 0 1-4 4H3",
		key: "1rx37r"
	}]
]), Ks = $("rotate-cw", [["path", {
	d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
	key: "1p45f6"
}], ["path", {
	d: "M21 3v5h-5",
	key: "1q7to0"
}]]), qs = $("scroll-text", [
	["path", {
		d: "M15 12h-5",
		key: "r7krc0"
	}],
	["path", {
		d: "M15 8h-5",
		key: "1khuty"
	}],
	["path", {
		d: "M19 17V5a2 2 0 0 0-2-2H4",
		key: "zz82l3"
	}],
	["path", {
		d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
		key: "1ph1d7"
	}]
]), Js = $("send", [["path", {
	d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
	key: "1ffxy3"
}], ["path", {
	d: "m21.854 2.147-10.94 10.939",
	key: "12cjpa"
}]]), Ys = $("server", [
	["rect", {
		width: "20",
		height: "8",
		x: "2",
		y: "2",
		rx: "2",
		ry: "2",
		key: "ngkwjq"
	}],
	["rect", {
		width: "20",
		height: "8",
		x: "2",
		y: "14",
		rx: "2",
		ry: "2",
		key: "iecqi9"
	}],
	["line", {
		x1: "6",
		x2: "6.01",
		y1: "6",
		y2: "6",
		key: "16zg32"
	}],
	["line", {
		x1: "6",
		x2: "6.01",
		y1: "18",
		y2: "18",
		key: "nzw8ys"
	}]
]), Xs = $("settings", [["path", {
	d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
	key: "1i5ecw"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), Zs = $("shield-alert", [
	["path", {
		d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
		key: "oel41y"
	}],
	["path", {
		d: "M12 8v4",
		key: "1got3b"
	}],
	["path", {
		d: "M12 16h.01",
		key: "1drbdi"
	}]
]), Qs = $("shield-check", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]), $s = $("shield", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}]]), ec = $("signal", [
	["path", {
		d: "M2 20h.01",
		key: "4haj6o"
	}],
	["path", {
		d: "M7 20v-4",
		key: "j294jx"
	}],
	["path", {
		d: "M12 20v-8",
		key: "i3yub9"
	}],
	["path", {
		d: "M17 20V8",
		key: "1tkaf5"
	}],
	["path", {
		d: "M22 4v16",
		key: "sih9yq"
	}]
]), tc = $("sliders-horizontal", [
	["path", {
		d: "M10 5H3",
		key: "1qgfaw"
	}],
	["path", {
		d: "M12 19H3",
		key: "yhmn1j"
	}],
	["path", {
		d: "M14 3v4",
		key: "1sua03"
	}],
	["path", {
		d: "M16 17v4",
		key: "1q0r14"
	}],
	["path", {
		d: "M21 12h-9",
		key: "1o4lsq"
	}],
	["path", {
		d: "M21 19h-5",
		key: "1rlt1p"
	}],
	["path", {
		d: "M21 5h-7",
		key: "1oszz2"
	}],
	["path", {
		d: "M8 10v4",
		key: "tgpxqk"
	}],
	["path", {
		d: "M8 12H3",
		key: "a7s4jb"
	}]
]), nc = $("square-check", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]), rc = $("square-dot", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "1",
	key: "41hilf"
}]]), ic = $("square-function", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}],
	["path", {
		d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",
		key: "m1af9g"
	}],
	["path", {
		d: "M9 11.2h5.7",
		key: "3zgcl2"
	}]
]), ac = $("table-2", [["path", {
	d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
	key: "gugj83"
}]]), oc = $("table", [
	["path", {
		d: "M12 3v18",
		key: "108xh3"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M3 15h18",
		key: "5xshup"
	}]
]), sc = $("tag", [["path", {
	d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
	key: "vktsd0"
}], ["circle", {
	cx: "7.5",
	cy: "7.5",
	r: ".5",
	fill: "currentColor",
	key: "kqv944"
}]]), cc = $("tags", [
	["path", {
		d: "M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z",
		key: "16rjxf"
	}],
	["path", {
		d: "M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193",
		key: "178nd4"
	}],
	["circle", {
		cx: "10.5",
		cy: "6.5",
		r: ".5",
		fill: "currentColor",
		key: "12ikhr"
	}]
]), lc = $("target", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "6",
		key: "1vlfrh"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}]
]), uc = $("terminal", [["path", {
	d: "M12 19h8",
	key: "baeox8"
}], ["path", {
	d: "m4 17 6-6-6-6",
	key: "1yngyt"
}]]), dc = $("timer", [
	["line", {
		x1: "10",
		x2: "14",
		y1: "2",
		y2: "2",
		key: "14vaq8"
	}],
	["line", {
		x1: "12",
		x2: "15",
		y1: "14",
		y2: "11",
		key: "17fdiu"
	}],
	["circle", {
		cx: "12",
		cy: "14",
		r: "8",
		key: "1e1u0o"
	}]
]), fc = $("toggle-right", [["circle", {
	cx: "15",
	cy: "12",
	r: "3",
	key: "1afu0r"
}], ["rect", {
	width: "20",
	height: "14",
	x: "2",
	y: "5",
	rx: "7",
	key: "g7kal2"
}]]), pc = $("type", [
	["path", {
		d: "M12 4v16",
		key: "1654pz"
	}],
	["path", {
		d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",
		key: "e0r10z"
	}],
	["path", {
		d: "M9 20h6",
		key: "s66wpe"
	}]
]), mc = $("upload", [
	["path", {
		d: "M12 3v12",
		key: "1x0j5s"
	}],
	["path", {
		d: "m17 8-5-5-5 5",
		key: "7q97r8"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}]
]), hc = $("users", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["path", {
		d: "M16 3.128a4 4 0 0 1 0 7.744",
		key: "16gr8j"
	}],
	["path", {
		d: "M22 21v-2a4 4 0 0 0-3-3.87",
		key: "kshegd"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}]
]), gc = $("user", [["path", {
	d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
	key: "975kel"
}], ["circle", {
	cx: "12",
	cy: "7",
	r: "4",
	key: "17ys0d"
}]]), _c = $("utility-pole", [
	["path", {
		d: "M12 2v20",
		key: "t6zp3m"
	}],
	["path", {
		d: "M2 5h20",
		key: "1fs1ex"
	}],
	["path", {
		d: "M3 3v2",
		key: "9imdir"
	}],
	["path", {
		d: "M7 3v2",
		key: "n0os7"
	}],
	["path", {
		d: "M17 3v2",
		key: "1l2re6"
	}],
	["path", {
		d: "M21 3v2",
		key: "1duuac"
	}],
	["path", {
		d: "m19 5-7 7-7-7",
		key: "133zxf"
	}]
]), vc = $("variable", [
	["path", {
		d: "M8 21s-4-3-4-9 4-9 4-9",
		key: "uto9ud"
	}],
	["path", {
		d: "M16 3s4 3 4 9-4 9-4 9",
		key: "4w2vsq"
	}],
	["line", {
		x1: "15",
		x2: "9",
		y1: "9",
		y2: "15",
		key: "f7djnv"
	}],
	["line", {
		x1: "9",
		x2: "15",
		y1: "9",
		y2: "15",
		key: "1shsy8"
	}]
]), yc = $("waves-horizontal", [
	["path", {
		d: "M2 12q2.5 2 5 0t5 0 5 0 5 0",
		key: "8ddzzs"
	}],
	["path", {
		d: "M2 19q2.5 2 5 0t5 0 5 0 5 0",
		key: "1wj4st"
	}],
	["path", {
		d: "M2 5q2.5 2 5 0t5 0 5 0 5 0",
		key: "69x50u"
	}]
]), bc = $("waypoints", [
	["path", {
		d: "m10.586 5.414-5.172 5.172",
		key: "4mc350"
	}],
	["path", {
		d: "m18.586 13.414-5.172 5.172",
		key: "8c96vv"
	}],
	["path", {
		d: "M6 12h12",
		key: "8npq4p"
	}],
	["circle", {
		cx: "12",
		cy: "20",
		r: "2",
		key: "144qzu"
	}],
	["circle", {
		cx: "12",
		cy: "4",
		r: "2",
		key: "muu5ef"
	}],
	["circle", {
		cx: "20",
		cy: "12",
		r: "2",
		key: "1xzzfp"
	}],
	["circle", {
		cx: "4",
		cy: "12",
		r: "2",
		key: "1hvhnz"
	}]
]), xc = $("wifi", [
	["path", {
		d: "M12 20h.01",
		key: "zekei9"
	}],
	["path", {
		d: "M2 8.82a15 15 0 0 1 20 0",
		key: "dnpr2z"
	}],
	["path", {
		d: "M5 12.859a10 10 0 0 1 14 0",
		key: "1x1e6c"
	}],
	["path", {
		d: "M8.5 16.429a5 5 0 0 1 7 0",
		key: "1bycff"
	}]
]), Sc = $("workflow", [
	["rect", {
		width: "8",
		height: "8",
		x: "3",
		y: "3",
		rx: "2",
		key: "by2w9f"
	}],
	["path", {
		d: "M7 11v4a2 2 0 0 0 2 2h4",
		key: "xkn7yn"
	}],
	["rect", {
		width: "8",
		height: "8",
		x: "13",
		y: "13",
		rx: "2",
		key: "1cgmvn"
	}]
]), Cc = $("wrench", [["path", {
	d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
	key: "1ngwbx"
}]]), wc = $("zap", [["path", {
	d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
	key: "1xq2db"
}]]), Tc = {
	SCL: ds,
	Header: Ts,
	History: Es,
	Hitem: as,
	Private: Ps,
	Text: pc,
	Labels: cc,
	Label: sc,
	Project: gs,
	ProjectProcessReference: Sc,
	FunctionCategory: sc,
	FunctionCategoryRef: sc,
	FunctionCatRef: sc,
	SubCategory: sc,
	Variable: vc,
	VariableApplyTo: vc,
	VariableRef: vc,
	CheckoutID: ns,
	SubCheckoutID: ns,
	Resource: Bs,
	SourceRef: Bs,
	SourceFiles: hs,
	SclFileReference: us,
	Substation: es,
	Process: Sc,
	VoltageLevel: _c,
	Line: Ls,
	Bay: os,
	BayType: os,
	Voltage: wc,
	ProcessResources: Os,
	ProcessResource: ss,
	ProcessResourceRef: ss,
	ConductingEquipment: Hs,
	GeneralEquipment: Cc,
	PowerTransformer: Ws,
	ConnectivityNode: bc,
	SubEquipment: ss,
	Terminal: uc,
	TransformerWinding: Ks,
	TapChanger: fc,
	NeutralPoint: lc,
	Function: ic,
	EqFunction: ic,
	SubFunction: ic,
	EqSubFunction: ic,
	FunctionTemplate: ps,
	SubFunctionTemplate: ps,
	BehaviorDescription: ps,
	PowerSystemRelations: As,
	BehaviorDescriptionRef: ps,
	BehaviorReference: ps,
	PowerSystemRelation: js,
	PowerSystemRelationRef: js,
	FunctionSclRef: us,
	LNode: ys,
	Inputs: Ko,
	Outputs: Jo,
	LNodeInputs: Ko,
	LNodeOutputs: Jo,
	LNodeSpecNaming: sc,
	DOS: Qo,
	LNodeInputRef: Ko,
	LNodeOutputRef: Jo,
	LNodeDataRef: rs,
	ExtRef: qo,
	ExtCtrl: us,
	DAS: cs,
	SDS: cs,
	InputVar: Ko,
	OutputVar: Jo,
	ControlRef: fc,
	ControllingLNode: ys,
	SubscriberLNode: ys,
	ProcessEcho: Gs,
	InputVarRef: Ko,
	OutputVarRef: Jo,
	LogParametersRef: tc,
	Application: Wo,
	ApplicationSclRef: Wo,
	FunctionRole: Zo,
	FunctionRoleContent: Xo,
	AllocationRole: Go,
	FunctionalVariantGroup: Ss,
	FunctionRef: ic,
	SignalRole: ec,
	AllocationRoleRef: Go,
	FunctionalVariant: bs,
	FunctionalSubVariant: bs,
	FunctionalVariantRef: bs,
	Communication: Rs,
	SubNetwork: xc,
	ConnectedAP: Uo,
	BitRate: vs,
	CommunicationServiceSpecifications: Rs,
	AnalogueWiringParameters: yc,
	BinaryWiringParameters: Yo,
	Address: Fs,
	PhysConn: ts,
	L2CommParameters: Rs,
	L3IPv4CommParameters: xs,
	L3IPv6CommParameters: xs,
	AnalogueWiringParametersRef: yc,
	BinaryWiringParametersRef: Yo,
	P: $o,
	IED: is,
	AccessPoint: Us,
	IEDSourceFiles: hs,
	MinRequestedSCDFiles: hs,
	Server: Ys,
	ServerAt: Ys,
	MinRequestedSCDFile: ms,
	LDevice: Cs,
	Association: js,
	LN: Qo,
	LN0: rc,
	AccessControl: Qs,
	DataTypeTemplates: ks,
	LNodeType: Os,
	DOType: $o,
	DAType: $o,
	EnumType: Ns,
	DO: Qo,
	DA: cs,
	SDO: Qo,
	BDA: cs,
	EnumVal: Ms,
	DOI: Qo,
	Val: ws,
	ProtNs: xs,
	DAI: cs,
	SDI: cs,
	GSEControl: Is,
	SampledValueControl: Ho,
	ReportControl: fs,
	LogControl: Xo,
	SettingControl: tc,
	DataSet: oc,
	Log: zs,
	FCDA: cs,
	IEDName: sc,
	TrgOps: wc,
	OptFields: nc,
	RptEnabled: fc,
	SmvOpts: nc,
	Protocol: qs,
	ClientLN: ys,
	GOOSE: Js,
	GSE: Js,
	GSSE: Js,
	SMV: Js,
	SMVsc: Js,
	GooseParameters: tc,
	SMVParameters: tc,
	SmpRate: vs,
	SamplesPerSec: vs,
	SecPerSamples: as,
	GooseParametersRef: tc,
	SMVParametersRef: tc,
	MinTime: as,
	MaxTime: as,
	Security: $s,
	McSecurity: $s,
	GOOSESecurity: $s,
	SMVSecurity: $s,
	GOOSEMcSecurity: $s,
	SVMcSecurity: $s,
	Authentication: Ds,
	KDC: Ds,
	IssuerName: gc,
	Subject: gc,
	Services: Xs,
	ServiceSpecifications: Ns,
	ClientServices: Ys,
	SettingGroups: Ss,
	GSESettings: Xs,
	SMVSettings: Xs,
	ReportSettings: Xs,
	LogSettings: Xs,
	SGEdit: Vs,
	ConfSG: Xs,
	ConfDataSet: Xs,
	ConfLNs: Xs,
	ConfLdName: Xs,
	ConfLogControl: Xs,
	ConfReportControl: Xs,
	ConfSigRef: Xs,
	DynAssociation: As,
	DynDataSet: ac,
	ReadWrite: Vs,
	ReportParameters: tc,
	LogParameters: tc,
	MultiAPPerSubNet: Rs,
	SupSubscription: hc,
	TimeSyncProt: as,
	TimerActivatedControl: dc,
	ValueHandling: Vs,
	RedProt: Zs,
	CommProt: $s,
	SCSM: $s,
	FileHandling: ms,
	ReportParametersRef: tc,
	DataObjectDirectory: _s,
	DataSetDirectory: gs,
	GSEDir: _s,
	GetCBValues: ls,
	GetDataObjectDefinition: ls,
	GetDataSetValue: ls,
	GetDirectory: gs,
	SetDataSetValue: mc
}, Ec = {
	class: "flex flex-col gap-4",
	"data-testid": "review-cards"
}, Dc = { class: "text-xs font-semibold uppercase opacity-60 px-1" }, Oc = ["data-testid"], kc = ["aria-label"], Ac = ["onClick"], jc = { class: "font-medium truncate" }, Mc = ["title"], Nc = {
	key: 0,
	class: "badge badge-outline badge-sm whitespace-nowrap",
	"data-testid": "linked-chip"
}, Pc = {
	key: 1,
	class: "join shrink-0",
	"data-testid": "action-toggle"
}, Fc = ["onClick"], Ic = ["onClick"], Lc = {
	key: 0,
	class: "opacity-60 text-center p-6"
}, Rc = /* @__PURE__ */ re({
	__name: "review-cards",
	props: {
		groups: {},
		resolutions: {}
	},
	emits: ["setAction", "openGroup"],
	setup(e) {
		let t = e, n = {
			substation: "Process",
			ied: "IEDs",
			communication: "Communication",
			datatypetemplates: "Data types",
			dataflow: "Dataflow",
			other: "Other"
		}, i = {
			added: {
				label: "added",
				class: "badge-success"
			},
			removed: {
				label: "removed",
				class: "badge-error"
			},
			modified: {
				label: "modified",
				class: "badge-warning"
			},
			unchanged: {
				label: "",
				class: "badge-ghost"
			}
		}, a = {
			added: {
				accept: "Add",
				skip: "Don't add"
			},
			removed: {
				accept: "Remove",
				skip: "Keep"
			},
			modified: {
				accept: "Apply",
				skip: "Keep current"
			},
			unchanged: {
				accept: "",
				skip: ""
			}
		}, o = j(() => {
			let e = /* @__PURE__ */ new Map();
			for (let n of t.groups) {
				let t = e.get(n.section) ?? [];
				t.push(n), e.set(n.section, t);
			}
			return [...e.entries()].map(([e, t]) => ({
				section: e,
				label: n[e] ?? e,
				groups: t
			}));
		});
		return (t, n) => (r(), P("div", Ec, [(r(!0), P(ce, null, A(o.value, (n) => (r(), P("section", {
			key: n.section,
			class: "flex flex-col gap-2"
		}, [F("h3", Dc, C(n.label) + " (" + C(n.groups.length) + ") ", 1), (r(!0), P(ce, null, A(n.groups, (n) => (r(), P("div", {
			key: n.groupId,
			class: S(["card bg-base-100 border p-3 flex-row items-center gap-3", e.resolutions?.get(n.groupId)?.decided ? "border-base-300" : "border-warning/60"]),
			"data-testid": `group-card-${n.groupId}`
		}, [
			F("span", {
				class: S(["flex items-center justify-center rounded-full h-7 w-7 shrink-0", c(Vo)[n.tagName]?.background ?? "bg-base-200"]),
				role: "img",
				"aria-label": n.tagName
			}, [c(Tc)[n.tagName] ? (r(), ne(ie(c(Tc)[n.tagName]), {
				key: 0,
				class: S(["h-4 w-4", c(Vo)[n.tagName]?.text])
			}, null, 8, ["class"])) : D("", !0)], 10, kc),
			F("button", {
				type: "button",
				class: "flex flex-col min-w-0 flex-1 gap-0.5 text-left",
				onClick: (e) => t.$emit("openGroup", n.groupId)
			}, [F("span", jc, C(n.label), 1), F("span", {
				class: "font-mono text-xs opacity-60 truncate",
				title: n.path
			}, C(n.path), 9, Mc)], 8, Ac),
			n.linkedCount > 0 ? (r(), P("span", Nc, " +" + C(n.linkedCount) + " linked ", 1)) : D("", !0),
			F("span", {
				class: S(["badge badge-sm", i[n.changeStatus].class]),
				"data-testid": "change-badge"
			}, C(i[n.changeStatus].label), 3),
			e.resolutions ? (r(), P("span", Pc, [F("button", {
				type: "button",
				class: S(["btn btn-xs join-item", e.resolutions.get(n.groupId)?.action === "accept" ? "btn-primary" : "btn-ghost"]),
				onClick: (e) => t.$emit("setAction", n.groupId, "accept")
			}, C(a[n.changeStatus].accept), 11, Fc), F("button", {
				type: "button",
				class: S(["btn btn-xs join-item", e.resolutions.get(n.groupId)?.action === "skip" ? "btn-neutral" : "btn-ghost"]),
				onClick: (e) => t.$emit("setAction", n.groupId, "skip")
			}, C(a[n.changeStatus].skip), 11, Ic)])) : D("", !0)
		], 10, Oc))), 128))]))), 128)), e.groups.length === 0 ? (r(), P("p", Lc, "No changes to review.")) : D("", !0)]));
	}
}), zc = {
	class: "flex items-center gap-3 px-4 py-2 border-t border-base-300 bg-base-100",
	"data-testid": "commit-bar"
}, Bc = { class: "text-xs font-mono flex gap-3" }, Vc = { class: "text-success" }, Hc = { class: "opacity-70" }, Uc = ["disabled"], Wc = /* @__PURE__ */ re({
	__name: "commit-bar",
	emits: ["apply"],
	setup(e) {
		let t = ji();
		return (e, n) => (r(), P("footer", zc, [
			F("span", Bc, [
				F("span", Vc, C(c(t).summary.accept) + " accept", 1),
				F("span", Hc, C(c(t).summary.skip) + " skip", 1),
				F("span", { class: S(c(t).isReady ? "text-success" : "text-warning") }, C(c(t).summary.decided) + "/" + C(c(t).summary.total) + " decided ", 3)
			]),
			n[2] ||= F("span", { class: "flex-1" }, null, -1),
			c(t).isReady ? D("", !0) : (r(), P("button", {
				key: 0,
				class: "btn btn-ghost btn-sm",
				onClick: n[0] ||= (e) => c(t).decideAllWithDefaults()
			}, " Confirm remaining defaults ")),
			F("button", {
				class: "btn btn-primary btn-sm",
				disabled: !c(t).isReady,
				"data-testid": "apply-button",
				onClick: n[1] ||= (t) => e.$emit("apply")
			}, " Apply… ", 8, Uc)
		]));
	}
}), Gc = ["open"], Kc = { class: "modal-box" }, qc = {
	key: 0,
	class: "py-3 flex flex-col gap-2"
}, Jc = { class: "text-sm" }, Yc = { class: "text-xs font-mono flex gap-4 opacity-80" }, Xc = { class: "text-success" }, Zc = { class: "text-warning" }, Qc = { class: "text-error" }, $c = {
	key: 0,
	class: "alert alert-warning text-xs"
}, el = { class: "modal-action" }, tl = ["disabled"], nl = ["disabled"], rl = {
	key: 0,
	class: "loading loading-spinner loading-xs"
}, il = /* @__PURE__ */ re({
	__name: "commit-dialog",
	setup(e) {
		let t = ji(), n = j(() => {
			let e = t.prepared?.skipped;
			return e ? e.creates.length + e.updates.length + e.deletes.length : 0;
		});
		return (e, i) => (r(), P("dialog", {
			class: "modal",
			open: c(t).applyPhase === "confirming" || c(t).applyPhase === "committing",
			"data-testid": "commit-dialog"
		}, [F("div", Kc, [
			i[5] ||= F("h3", { class: "font-bold text-lg" }, "Apply merge?", -1),
			c(t).prepared ? (r(), P("div", qc, [
				F("p", Jc, [
					i[2] ||= M(" You accepted ", -1),
					F("strong", null, C(c(t).summary.accept), 1),
					M(" change" + C(c(t).summary.accept === 1 ? "" : "s") + " (" + C(c(t).summary.skip) + " skipped). ", 1)
				]),
				F("p", Yc, [
					F("span", Xc, "+" + C(c(t).prepared.prepared.summary.creates) + " create", 1),
					F("span", Zc, "~" + C(c(t).prepared.prepared.summary.updates) + " update", 1),
					F("span", Qc, "-" + C(c(t).prepared.prepared.summary.deletes) + " delete", 1)
				]),
				i[3] ||= F("p", { class: "text-xs opacity-70" }, " Document operations staged by your decisions — including child elements of added subtrees, imported data types, reference fix-ups and the history entry. ", -1),
				n.value > 0 ? (r(), P("div", $c, C(n.value) + " operation(s) could not be staged and will be skipped. ", 1)) : D("", !0)
			])) : D("", !0),
			F("div", el, [F("button", {
				class: "btn btn-ghost btn-sm",
				disabled: c(t).applyPhase === "committing",
				onClick: i[0] ||= (e) => c(t).cancelApply()
			}, " Cancel ", 8, tl), F("button", {
				class: "btn btn-primary btn-sm",
				disabled: c(t).applyPhase === "committing",
				"data-testid": "confirm-commit",
				onClick: i[1] ||= (e) => c(t).confirmApply()
			}, [c(t).applyPhase === "committing" ? (r(), P("span", rl)) : D("", !0), i[4] ||= M(" Commit ", -1)], 8, nl)])
		])], 8, Gc));
	}
}), al = {
	class: "flex flex-col h-full overflow-hidden",
	"data-testid": "review-view"
}, ol = {
	key: 0,
	class: "flex flex-col gap-4 p-8 items-center"
}, sl = { class: "flex gap-3 items-center p-4 pb-2 flex-wrap" }, cl = {
	key: 0,
	class: "text-xs font-mono px-2 py-1 bg-base-200 rounded flex flex-wrap gap-3",
	"data-testid": "report-stats"
}, ll = { class: "font-semibold" }, ul = { class: "text-success" }, dl = { class: "text-warning" }, fl = { class: "text-error" }, pl = {
	key: 1,
	class: "badge badge-info badge-sm font-mono",
	"data-testid": "template-version",
	title: "Instantiated template version → uploaded file version"
}, ml = {
	key: 2,
	class: "text-error text-sm"
}, hl = {
	key: 0,
	class: "alert alert-warning mx-4 text-sm",
	"data-testid": "no-anchor-alert"
}, gl = { class: "flex-1 overflow-auto px-4" }, _l = /* @__PURE__ */ re({
	__name: "review-view",
	setup(e) {
		let t = Mi(), n = xi(), i = ji();
		async function a() {
			!n.report || !t.sourceSlot || !t.targetSlot || !t.profile || await i.prepareApply({
				report: n.report,
				sourceDocument: t.sourceSlot.document,
				targetDocument: t.targetSlot.document,
				sourceFileName: t.sourceSlot.source.documentId,
				profile: t.profile
			});
		}
		return (e, o) => (r(), P("section", al, [c(i).applyPhase === "applied" ? (r(), P("div", ol, [o[3] ||= F("div", {
			class: "alert alert-success max-w-md",
			"data-testid": "apply-success"
		}, " Merge committed — a history entry was recorded on the target document. ", -1), F("button", {
			class: "btn btn-primary btn-sm",
			onClick: o[0] ||= (e) => c(t).endSession()
		}, "Done")])) : (r(), P(ce, { key: 1 }, [
			F("header", sl, [
				F("button", {
					class: "btn btn-ghost btn-sm",
					onClick: o[1] ||= (e) => c(t).endSession()
				}, "← Back"),
				c(n).report ? (r(), P("div", cl, [
					F("span", ll, C(c(n).report.stats.total) + " changes", 1),
					F("span", ul, "+" + C(c(n).report.stats.added) + " added", 1),
					F("span", dl, "~" + C(c(n).report.stats.modified) + " modified", 1),
					F("span", fl, "-" + C(c(n).report.stats.removed) + " removed", 1)
				])) : D("", !0),
				c(n).report?.templateVersion ? (r(), P("span", pl, " template v" + C(c(n).report.templateVersion.from?.version ?? "?") + "." + C(c(n).report.templateVersion.from?.revision ?? "?") + " → v" + C(c(n).report.templateVersion.to?.version ?? "?") + "." + C(c(n).report.templateVersion.to?.revision ?? "?"), 1)) : D("", !0),
				c(i).error ? (r(), P("span", ml, C(c(i).error), 1)) : D("", !0)
			]),
			c(n).report?.anchor && !c(n).report.anchor.matched ? (r(), P("div", hl, " The uploaded file is not referenced by the open document — no instantiated function derives from it. Check that you selected the right template version (same file uuid). ")) : D("", !0),
			F("div", gl, [O(Rc, {
				groups: c(n).groupViews,
				resolutions: c(i).resolutions,
				onSetAction: o[2] ||= (e, t) => c(i).setAction(e, t)
			}, null, 8, ["groups", "resolutions"])]),
			c(n).groupViews.length > 0 ? (r(), ne(Wc, {
				key: 1,
				onApply: a
			})) : D("", !0)
		], 64)), O(il)]));
	}
}), { document: vl, isHydrated: yl, hydrate: bl, clear: xl } = Sa({ extensions: { merge: {
	query: ni,
	transaction: vi
} } }), Sl = ["id"], Cl = /* @__PURE__ */ re({
	__name: "app",
	setup(e) {
		let t = Mi(), n = xe();
		return m(() => {
			yl.value && n.value ? t.setActiveTarget(n.value, vl.value) : t.clearTarget();
		}), (e, n) => (r(), P("article", {
			id: c("merging-editor"),
			class: "h-full overflow-hidden flex flex-col"
		}, [O(Lt, null, {
			"main-area": s(() => [c(t).phase === "review" ? (r(), ne(_l, { key: 0 })) : (r(), ne(Wi, { key: 1 }))]),
			"secondary-sidebar": s(() => [...n[0] ||= []]),
			_: 1
		})], 8, Sl));
	}
});
//#endregion
//#region set-editor.ts
function wl(e, t) {
	le(document.getElementById(e), { detail: `could not find root element: ${e}` }), ve({
		project: t.project,
		activeDocumentId: t.activeDocumentId,
		commands: t.commands
	});
	let n = (e) => {
		e ? bl(t.project.openDocument(e)) : xl();
	};
	n(t.activeDocumentId.value);
	let r = t.activeDocumentId.subscribe(n), i = te(Cl);
	return i.use(N()), i.mount(`#${e}`), () => {
		r(), xl(), ye(), i.unmount();
	};
}
//#endregion
export { wl as default };
