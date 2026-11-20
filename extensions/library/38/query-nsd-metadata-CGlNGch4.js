import { A as e, B as t, C as n, D as r, E as i, F as a, G as o, H as s, I as c, It as l, J as u, K as d, N as f, O as p, P as m, R as h, S as g, T as _, U as v, V as y, W as b, X as x, Y as S, _ as C, _t as w, a as T, b as ee, c as te, d as ne, f as re, g as ie, h as ae, j as E, k as D, l as oe, m as O, mt as se, n as k, o as ce, p as le, q as ue, rt as de, s as A, u as fe, v as pe, w as j, wt as me, x as M, y as he } from "./main-CijI5DJu.js";
//#region src/nsd/icons/close-icon.vue
var ge = {}, _e = {
	viewBox: "0 0 64 64",
	"aria-hidden": "true",
	focusable: "false"
};
function ve(e, t) {
	return me(), w("svg", _e, [...t[0] ||= [se("path", {
		fill: "currentColor",
		d: "M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z"
	}, null, -1)]]);
}
var ye = /* @__PURE__ */ de(ge, [["render", ve]]), be = {}, xe = {
	viewBox: "0 -960 960 960",
	"aria-hidden": "true",
	focusable: "false"
};
function Se(e, t) {
	return me(), w("svg", xe, [...t[0] ||= [se("path", {
		fill: "currentColor",
		d: "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
	}, null, -1)]]);
}
var Ce = /* @__PURE__ */ de(be, [["render", Se]]);
//#endregion
//#region node_modules/.pnpm/@dialecte+core@0.12.1/node_modules/@dialecte/core/dist/qname-definition-C6GUFWL8.js
function we(e) {
	let { dialecteConfig: t, record: n } = e, r = O({
		dialecteConfig: t,
		record: n
	});
	if (r !== void 0 && r.namespace.uri === n.namespace?.uri) return r;
}
function Te(e) {
	let { definition: t, attribute: n } = e, r = t.attributes.details[n.name];
	if (r !== void 0 && r.namespace?.uri === n.namespace?.uri) return r.type;
}
function Ee(e) {
	let { dialecteConfig: t, record: n, lexicalOnly: r } = e;
	if (!D({
		dialecteConfig: t,
		tagName: n.tagName
	})) return n;
	let i = we({
		dialecteConfig: t,
		record: n
	});
	if (i === void 0) return n;
	let a = e.namespaceOf(), o = i.textContent?.type, s = o !== void 0 && n.value !== "" ? fe({
		dialecteConfig: t,
		type: o,
		value: n.value,
		namespaceOf: a,
		lexicalOnly: r
	}) : n.value, c = n.attributes.map((e) => {
		let n = Te({
			definition: i,
			attribute: e
		});
		if (n === void 0 || typeof e.value != "string") return e;
		let o = fe({
			dialecteConfig: t,
			type: n,
			value: e.value,
			namespaceOf: a,
			lexicalOnly: r
		});
		return o === e.value ? e : {
			...e,
			value: o
		};
	});
	return {
		...n,
		attributes: c,
		value: s
	};
}
function De(e) {
	let { dialecteConfig: t, record: n, authored: r } = e;
	if (!D({
		dialecteConfig: t,
		tagName: n.tagName
	})) return;
	let i = we({
		dialecteConfig: t,
		record: n
	});
	if (i === void 0) return;
	let a = i.textContent?.type;
	a !== void 0 && (r?.text ?? !0) && le({
		dialecteConfig: t,
		type: a,
		value: n.value,
		what: "text",
		tagName: n.tagName
	});
	for (let e of n.attributes) {
		if (r !== void 0 && !r.attributes.has(e.name)) continue;
		let a = Te({
			definition: i,
			attribute: e
		});
		a !== void 0 && typeof e.value == "string" && le({
			dialecteConfig: t,
			type: a,
			value: e.value,
			what: `value of '${e.name}'`,
			tagName: n.tagName
		});
	}
}
function Oe(e, t) {
	return e.tagName === t;
}
function ke(e) {
	let { attribute: t, tagName: n } = e, { name: r, namespace: i } = t;
	(r === "xmlns" || r.startsWith("xmlns:") || typeof i == "object" && (i?.uri === "http://www.w3.org/2000/xmlns/" || i?.prefix === "xmlns")) && f("NAMESPACE_DECLARATION_NOT_ALLOWED", {
		detail: `Attribute '${r}' on '${n}' is a namespace declaration - remove it; give a name its namespace in full: { name, namespace: { prefix, uri } }.`,
		ref: { tagName: n }
	});
}
function Ae(e) {
	let { dialecteConfig: t, attribute: n, tagName: r, authored: a } = e;
	ke({
		attribute: n,
		tagName: r
	}), a && je({
		attribute: n,
		tagName: r
	});
	let o = Me({
		dialecteConfig: t,
		attribute: n,
		tagName: r
	});
	return o && o.prefix ? {
		name: `${o.prefix}:${i(n.name)}`,
		namespace: o
	} : {
		name: n.name,
		namespace: o
	};
}
function je(e) {
	let { attribute: t, tagName: n } = e, { name: r, namespace: a } = t;
	r.includes(":") && (typeof a != "object" || a?.prefix !== r.slice(0, r.indexOf(":"))) && f("PREFIXED_ATTRIBUTE_NAME", {
		detail: `Attribute '${r}' on '${n}' is prefixed — pass a local name plus its namespace instead: { name: '${i(r)}', namespace }.`,
		ref: { tagName: n }
	});
}
function Me(t) {
	let { dialecteConfig: n, attribute: r, tagName: i } = t, a;
	typeof r.namespace == "string" ? (a = ue(n, r.namespace), a || f("UNKNOWN_NAMESPACE_PREFIX", {
		detail: `Unknown namespace '${r.namespace}' on attribute '${r.name}' — use a registered namespace key or pass a full { name, namespace: { prefix, uri } }.`,
		ref: { tagName: i }
	})) : a = r.namespace;
	let o = r.name.indexOf(":");
	if (!a && o !== -1) {
		let t = r.name.slice(0, o);
		a = e(t) ?? ie(n, t), a || f("UNKNOWN_NAMESPACE_PREFIX", {
			detail: `Unknown namespace prefix '${t}' on attribute '${r.name}' — pass it explicitly as { name, namespace: { prefix, uri } }.`,
			ref: { tagName: i }
		});
	}
	return a && a.prefix ? Ne({
		dialecteConfig: n,
		uri: a.uri
	}) ?? a : a;
}
function Ne(e) {
	let { dialecteConfig: t, uri: n } = e;
	return Object.values(t.namespaces).find((e) => e.uri === n && e.prefix !== "");
}
function Pe(e) {
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
function Fe(e) {
	let { record: t, status: n } = e, r = n ?? ("status" in t ? t.status : "unchanged");
	return {
		...Pe(t),
		status: r
	};
}
function Ie(e) {
	let { record: t, status: n, tree: r } = e, i = r ?? ("tree" in t ? t.tree : []);
	return {
		...Fe({
			record: t,
			status: n
		}),
		tree: i
	};
}
function Le(e) {
	let { dialecteConfig: t, tagName: n, attributes: r, stored: i = [] } = e;
	return (Array.isArray(r) ? r : Object.entries(r).map(([e, r]) => ({
		name: e,
		value: r,
		namespace: N({
			dialecteConfig: t,
			tagName: n,
			name: e
		}) ?? i.find((t) => t.name === e)?.namespace
	}))).map((e) => Re({
		attribute: e,
		dialecteConfig: t,
		tagName: n
	}));
}
function N(e) {
	let { dialecteConfig: t, tagName: n, name: r } = e, i = t.definition[n];
	if (i === void 0) return;
	let a = Object.values(i.declarations ?? {}), o = [i, ...a].flatMap((e) => e.variants ?? []), s = [
		i,
		...a,
		...o.flatMap((e) => t.types[e] ?? [])
	];
	for (let e of s) {
		let t = e.attributes.details[r]?.namespace;
		if (t) return t;
	}
}
function Re(e) {
	let { attribute: t, dialecteConfig: n, tagName: r } = e, { name: i, namespace: a } = Ae({
		dialecteConfig: n,
		attribute: t,
		tagName: r,
		authored: !1
	});
	return {
		...t,
		name: i,
		namespace: a
	};
}
function P(e) {
	return j(e, { detail: "The record or ref is undefined" }), {
		id: e.id,
		tagName: e.tagName
	};
}
function ze(e) {
	let { dialecteConfig: t, hooks: n, record: r } = e, { id: i, tagName: a, attributes: o, namespace: s, value: c } = r, l = i ?? crypto.randomUUID(), d = F({
		dialecteConfig: t,
		attributes: o ? Le({
			tagName: a,
			attributes: o,
			dialecteConfig: t
		}) : []
	}), f = {
		id: l,
		tagName: a,
		attributes: d,
		namespace: s ?? {
			prefix: "prefixNeededForNotSupportedNamespace",
			uri: "uriNeededForNotSupportedNamespace"
		},
		value: c ?? "",
		parent: r.parent ?? null,
		children: r.children ?? []
	}, p = Object.values(t.namespaces).map(({ uri: e }) => e), m = s?.uri != null && !p.includes(s.uri);
	if (!t.elements.includes(a) || m) return f;
	let h = O({
		dialecteConfig: t,
		record: {
			...f,
			namespace: s
		}
	}), g = h?.attributes.sequence ?? [], _ = he({
		wildcard: h?.attributes.any,
		namespaceUri: ""
	}), v = d.filter((e) => {
		let t = g.includes(e.name), n = "namespace" in e && e.namespace != null;
		if (!t && !n && !_) return !1;
		if (!t) return !0;
		if (e.value === void 0 || e.value === null) return !1;
		if (e.value !== "") return !0;
		let r = h?.attributes.details[e.name];
		return r?.default !== void 0 || r?.fixed !== void 0;
	}), y = t.namespaces.default.uri, b = v.map((e) => {
		if ("namespace" in e && e.namespace?.uri === y && !e.namespace.prefix) {
			let { namespace: t, ...n } = e;
			return n;
		}
		return e;
	}), x = t.definition[a], S = [h?.namespace ?? x.namespace, ...Object.values(x.declarations ?? {}).map((e) => e.namespace)], C = S.find((e) => e.uri === s?.uri), w = {
		...f,
		namespace: C ?? s ?? S[0],
		attributes: u(b, g)
	};
	if (w = Ee({
		dialecteConfig: t,
		record: w,
		namespaceOf: function() {
			return e.namespaceOf ?? A({ dialecteConfig: t });
		},
		lexicalOnly: e.namespaceOf !== void 0
	}), n?.afterStandardizedRecord) {
		w = n.afterStandardizedRecord({ record: w });
		for (let e of w.attributes) ke({
			attribute: e,
			tagName: a
		});
		w = Ee({
			dialecteConfig: t,
			record: {
				...w,
				attributes: u(F({
					dialecteConfig: t,
					attributes: w.attributes
				}), g)
			},
			namespaceOf: function() {
				return A({ dialecteConfig: t });
			},
			lexicalOnly: !1
		});
	}
	return w;
}
function F(e) {
	let { dialecteConfig: t, attributes: n } = e;
	return g({
		dialecteConfig: t,
		attributes: n,
		namespaceOf: A({ dialecteConfig: t })
	});
}
function Be(e) {
	let { dialecteConfig: t, record: r, attributes: i } = e;
	for (let e of i) {
		let i = n({
			dialecteConfig: t,
			record: r,
			attributeName: e.name
		});
		i.fixed !== void 0 && e.value !== i.fixed && f("FIXED_VALUE_VIOLATION", {
			detail: `Attribute '${e.name}' on '${r.tagName}' is fixed to '${i.fixed}' but was set to '${String(e.value)}'.`,
			ref: { tagName: r.tagName }
		});
	}
}
function Ve(e) {
	let { dialecteConfig: t, record: n } = e, r = n.attributes.find(ne);
	if (r === void 0) {
		O({
			dialecteConfig: t,
			record: n
		})?.abstractType && f("XSI_TYPE_REQUIRED", {
			detail: `'${n.tagName}' is declared with an abstract type: name one of its variants with xsi:type (${v({
				dialecteConfig: t,
				record: n
			}).join(", ")}).`,
			ref: { tagName: n.tagName }
		});
		return;
	}
	if (O({
		dialecteConfig: t,
		record: n
	}) === void 0) return;
	let i = oe({
		dialecteConfig: t,
		record: n
	});
	if (i !== void 0 && re({
		dialecteConfig: t,
		record: n,
		typeName: i.clark
	})) return;
	let a = v({
		dialecteConfig: t,
		record: n
	});
	f("XSI_TYPE_NOT_ADMITTED", {
		detail: `'${n.tagName}' may not name the type '${String(r.value)}' with xsi:type; it admits ${a.join(", ") || "none"}.`,
		ref: { tagName: n.tagName },
		meta: {
			value: r.value,
			admitted: a
		}
	});
}
function He(e) {
	let { dialecteConfig: t, merged: n, record: r } = e, i = new Set(r.attributes.map((e) => e.name)), a = n.filter((e) => e.value !== "" && !i.has(e.name)).map((e) => e.name), o = O({
		dialecteConfig: t,
		record: r
	}), s = new Set(o?.children.sequence ?? []), c = o?.children.any ? [] : [...new Set(r.children.map((e) => e.tagName))].filter((e) => !s.has(e));
	(a.length !== 0 || c.length !== 0) && f("XSI_TYPE_CHANGE_LEAVES_CONTENT", {
		detail: `'${r.tagName}' now names a type that does not admit ` + [a.length > 0 ? `the attributes ${a.join(", ")} (clear them in the same update)` : "", c.length > 0 ? `the children ${c.join(", ")} (delete them first)` : ""].filter(Boolean).join(" nor ") + ".",
		ref: { tagName: r.tagName },
		meta: {
			attributes: a,
			children: c
		}
	});
}
function Ue(e, t, n, r) {
	if (!e || !t) return;
	let i = Object.keys(t).filter((t) => t in e);
	j(i.length === 0, {
		key: "EXTENSION_METHOD_COLLISION",
		detail: `Module "${n}" has conflicting ${r} method(s): ${i.map((e) => `"${e}"`).join(", ")}`
	});
}
function We(e) {
	let t = {}, n = {}, r = [...Object.entries(e.base ?? {}), ...Object.entries(e.custom ?? {})];
	for (let [e, i] of r) i.query && (Ue(t[e], i.query, e, "query"), t[e] = {
		...t[e],
		...i.query
	}), i.transaction && (Ue(n[e], i.transaction, e, "transaction"), n[e] = {
		...n[e],
		...i.transaction
	});
	return {
		query: t,
		transaction: n
	};
}
function Ge(e) {
	let { record: t, dialecteConfig: r, name: i, namespace: a, fullObject: o, defaults: s = "optional" } = e, c = Ke({
		dialecteConfig: r,
		name: i,
		namespace: a
	}), l = t.attributes.find((e) => e.name === c);
	if (l) return o ? l : l.value;
	let u = h({
		dialecteConfig: r,
		record: t,
		attributeName: c,
		defaults: s
	});
	if (!o) return u ?? "";
	if (u === void 0) return;
	let { namespace: d } = n({
		dialecteConfig: r,
		record: t,
		attributeName: c
	});
	return {
		name: c,
		value: u,
		namespace: d
	};
}
function Ke(e) {
	let { dialecteConfig: t, name: n, namespace: r } = e;
	if (r === void 0) return n;
	let i = x(t, r);
	return i ? `${i}:${n}` : n;
}
function qe(e) {
	return e.fullObject ? Ye(e) : Je(e);
}
function Je(e) {
	let { record: t, dialecteConfig: n, namespace: r, defaults: i = "optional" } = e, a = r === void 0 ? void 0 : x(n, r), o = {};
	for (let e of t.attributes) {
		let t = I({
			name: e.name,
			namespace: e.namespace,
			targetPrefix: a
		});
		t !== void 0 && (o[t] = e.value ?? "");
	}
	if (i === "none") return o;
	for (let e of Xe({
		dialecteConfig: n,
		record: t
	})) {
		let r = I({
			name: e,
			targetPrefix: a
		});
		if (r === void 0 || r in o) continue;
		let s = h({
			dialecteConfig: n,
			record: t,
			attributeName: e,
			defaults: i
		});
		s !== void 0 && (o[r] = s);
	}
	return o;
}
function Ye(e) {
	let { record: t, dialecteConfig: r, defaults: i = "optional" } = e, a = [...t.attributes];
	if (i === "none") return a;
	let o = new Set(a.map((e) => e.name));
	for (let e of Xe({
		dialecteConfig: r,
		record: t
	})) {
		if (o.has(e)) continue;
		let s = h({
			dialecteConfig: r,
			record: t,
			attributeName: e,
			defaults: i
		});
		if (s === void 0) continue;
		let { namespace: c } = n({
			dialecteConfig: r,
			record: t,
			attributeName: e
		});
		a.push({
			name: e,
			value: s,
			namespace: c
		});
	}
	return a;
}
function Xe(e) {
	let { dialecteConfig: t, record: n } = e;
	return O({
		dialecteConfig: t,
		record: n
	})?.attributes.sequence ?? [];
}
function I(e) {
	let { name: t, namespace: n, targetPrefix: r } = e, { prefix: i, local: a, isXmlns: o } = L(t);
	if (!(o || n?.uri === "http://www.w3.org/2000/xmlns/")) return r === void 0 ? t : i === r ? a : void 0;
}
function L(e) {
	if (e === "xmlns" || e.startsWith("xmlns:")) return {
		prefix: "",
		local: e,
		isXmlns: !0
	};
	let t = e.indexOf(":");
	return t === -1 ? {
		prefix: "",
		local: e,
		isXmlns: !1
	} : {
		prefix: e.slice(0, t),
		local: e.slice(t + 1),
		isXmlns: !1
	};
}
//#endregion
//#region node_modules/.pnpm/@dialecte+core@0.12.1/node_modules/@dialecte/core/dist/rolldown-runtime-CYdcPHCu.js
var Ze = Object.create, Qe = Object.defineProperty, $e = Object.getOwnPropertyDescriptor, et = Object.getOwnPropertyNames, tt = Object.getPrototypeOf, nt = Object.prototype.hasOwnProperty, rt = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), it = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = et(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !nt.call(e, s) && s !== n && Qe(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = $e(t, s)) || r.enumerable
	});
	return e;
}, at = (e, t, n) => (n = e == null ? {} : Ze(tt(e)), it(t || !e || !e.__esModule || !nt.call(e, "default") ? Qe(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), ot = Symbol.for("@dialecte/core/storage-kinds/v12");
function st(e) {
	let { project: t, type: n } = e, r = globalThis[ot]?.get(n);
	return r || f("PROJECT_STORAGE_NOT_REGISTERED", {
		detail: `Project "${t}" asks for storage of type "${n}", but no kind is registered for it in this realm: import the entry that registers it once in the app's entry (a test runner's setup file for a test on it). Imported already? Then a copy of @dialecte/core of another storage version registered it (a package bringing its own core): align the core versions`,
		meta: {
			project: t,
			type: n
		}
	}), r;
}
function ct() {}
function lt() {
	let e = 0, t = [];
	return {
		get count() {
			return e;
		},
		start: function() {
			e += 1;
		},
		end: function() {
			if (--e, e > 0) return;
			let n = t;
			t = [];
			for (let e of n) e();
		},
		whenIdle: function() {
			return e === 0 ? Promise.resolve() : new Promise((e) => {
				t.push(e);
			});
		}
	};
}
function ut() {
	let e = /* @__PURE__ */ new Map();
	return {
		markClosing: function({ name: t, until: n }) {
			let r = e.get(t) ?? /* @__PURE__ */ new Set();
			e.set(t, r);
			let i = n.then(dt, dt);
			r.add(i), i.then(function() {
				r.delete(i), r.size === 0 && e.get(t) === r && e.delete(t);
			});
		},
		settled: async function({ name: t }) {
			for (let n = e.get(t); n; n = e.get(t)) await Promise.all(n);
		}
	};
}
function dt() {}
function R() {
	let e = /* @__PURE__ */ new Map();
	return {
		markOpen: function({ name: t, connection: n }) {
			let r = e.get(t) ?? /* @__PURE__ */ new Set();
			r.add(n), e.set(t, r);
		},
		markClosed: function({ name: t, connection: n }) {
			let r = e.get(t);
			!r?.delete(n) || r.size > 0 || e.delete(t);
		},
		others: function({ name: t, connection: n }) {
			let r = e.get(t);
			return r ? r.size - (n !== void 0 && r.has(n) ? 1 : 0) : 0;
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@dialecte+core@0.12.1/node_modules/@dialecte/core/dist/project-key-DD8DyQ8-.js
var ft = {
	bigint: "a BigInt",
	function: "a function",
	symbol: "a symbol"
}, pt = "not well-formed UTF-16 (a lone surrogate)", mt = `text that is ${pt}`, ht = `a key that is ${pt}`;
function gt(e) {
	let { documentId: t } = e;
	f("STORE_DUPLICATE_ID", {
		detail: `Document "${t}" is already registered`,
		meta: { documentId: t }
	});
}
function _t(e) {
	let { path: t, reason: n } = e;
	f("DOCUMENT_PATH_INVALID", {
		detail: `The document path ${JSON.stringify(t)} is refused: ${n}`,
		meta: { path: t }
	});
}
function vt(e) {
	let { documentId: t, path: n, takenBy: r } = e;
	f("DOCUMENT_PATH_TAKEN", {
		detail: `Document "${t}" cannot take the path "${n}": document "${r}" holds that place`,
		meta: {
			documentId: t,
			path: n,
			takenBy: r
		}
	});
}
function yt(e) {
	let { documentId: t, what: n } = e;
	f("DOCUMENT_NOT_REGISTERED", {
		detail: `Cannot write ${n} to document "${t}": it is not registered`,
		meta: { documentId: t }
	});
}
function bt(e) {
	let { documentId: t, recordId: n } = e;
	f("STORE_RECORD_NOT_FOUND", {
		detail: `Record "${n}" is not in document "${t}": nothing to update`,
		meta: {
			documentId: t,
			recordId: n
		}
	});
}
function xt(e) {
	let { documentId: t, held: n, repeated: r, cause: i } = e;
	f("STORE_DUPLICATE_ID", {
		detail: `Document "${t}" refuses ids to create - ${[n.length > 0 ? `already holds: ${z(n).join(", ")}` : void 0, r.length > 0 ? `given twice: ${z(r).join(", ")}` : void 0].filter((e) => e !== void 0).join("; ")}`,
		meta: {
			documentId: t,
			recordIds: z([...n, ...r])
		},
		cause: i
	});
}
function z(e) {
	return [...new Set(e)];
}
function St(e) {
	let { storeName: t, connections: n } = e;
	f("PROJECT_OPEN_ELSEWHERE", {
		detail: `Project "${t}" cannot be destroyed while another connection has it open: close that one first`,
		meta: {
			project: t,
			...n !== void 0 && { connections: n }
		}
	});
}
function Ct(e) {
	let { storeName: t } = e;
	f("STORE_CLOSED", {
		detail: `Store "${t}" is closed: open it again before using it`,
		meta: { storeName: t }
	});
}
function wt(e) {
	B({ walk: function() {
		kt({
			value: e.value,
			field: "",
			inArray: !1,
			ancestors: []
		});
	} });
}
var Tt = crypto.randomUUID.bind(crypto);
function Et() {
	return Tt();
}
function Dt(e) {
	let { field: t, value: n } = e;
	n ?? f("STORE_VALUE_NOT_JSON", { detail: `The ${t} is missing` }), typeof n != "string" && f("STORE_VALUE_NOT_JSON", { detail: `The ${t} is not text` }), wt({ value: { [t]: n } });
}
function Ot(e) {
	return B({ walk: function() {
		return At({
			value: e.value,
			field: "",
			inArray: !1,
			ancestors: []
		});
	} });
}
function B(e) {
	try {
		return e.walk();
	} catch (e) {
		let t = e instanceof Error ? e : void 0;
		f("STORE_VALUE_NOT_JSON", {
			detail: t?.message ?? String(e),
			cause: t
		});
	}
}
function kt(e) {
	let t = Ft(e);
	if (t === "leaf") return;
	let { ancestors: n } = e;
	if (n.push(e.value), t === "array") {
		let t = e.value, { length: r } = t;
		for (let e = 0; e < r; e++) {
			let r = t[e];
			Pt({ value: r }) || kt({
				value: r,
				field: e,
				inArray: !0,
				ancestors: n
			});
		}
	} else {
		let t = e.value;
		for (let r of Object.keys(t)) {
			r.isWellFormed() || Rt({
				step: e,
				kind: ht
			});
			let i = t[r];
			Pt({ value: i }) || kt({
				value: i,
				field: r,
				inArray: !1,
				ancestors: n
			});
		}
	}
	n.pop();
}
function At(e) {
	let t = Ft(e);
	if (t === "leaf") return Nt({ value: e.value });
	let { ancestors: n } = e;
	n.push(e.value);
	let r = t === "array" ? jt(e) : Mt(e);
	return n.pop(), r;
}
function jt(e) {
	let { ancestors: t } = e, n = e.value, r = [], { length: i } = n;
	for (let e = 0; e < i; e++) {
		let i = n[e];
		r.push(Pt({ value: i }) ? Nt({ value: i }) : At({
			value: i,
			field: e,
			inArray: !0,
			ancestors: t
		}));
	}
	return r;
}
function Mt(e) {
	let { ancestors: t } = e, n = e.value, r = {};
	for (let i of Object.keys(n)) {
		i.isWellFormed() || Rt({
			step: e,
			kind: ht
		});
		let a = n[i], o = Pt({ value: a }) ? Nt({ value: a }) : At({
			value: a,
			field: i,
			inArray: !1,
			ancestors: t
		});
		o !== void 0 && (i === "__proto__" ? Object.defineProperty(r, i, {
			value: o,
			writable: !0,
			enumerable: !0,
			configurable: !0
		}) : r[i] = o);
	}
	return r;
}
function Nt(e) {
	return e.value === 0 ? 0 : e.value;
}
function Pt(e) {
	let { value: t } = e;
	switch (typeof t) {
		case "string": return t.isWellFormed();
		case "boolean": return !0;
		case "number": return Number.isFinite(t);
		case "object": return t === null;
		default: return !1;
	}
}
function Ft(e) {
	let { value: t } = e, n = typeof t;
	switch (n) {
		case "string": return t.isWellFormed() ? "leaf" : Rt({
			step: e,
			kind: mt
		});
		case "boolean": return "leaf";
		case "number": return Number.isFinite(t) ? "leaf" : Rt({
			step: e,
			kind: String(t)
		});
		case "undefined": return t === void 0 ? e.inArray ? Rt({
			step: e,
			kind: "undefined in an array"
		}) : "leaf" : It({
			step: e,
			held: t
		});
		case "object": return t === null ? "leaf" : It({
			step: e,
			held: t
		});
		default: return Rt({
			step: e,
			kind: ft[n]
		});
	}
}
function It(e) {
	let { step: t, held: n } = e, r = Array.isArray(n), i = Object.getPrototypeOf(n);
	return Lt({
		prototype: i,
		name: r ? "Array" : "Object"
	}) || Rt({
		step: t,
		kind: `an instance of ${n.constructor?.name || "a class"}`
	}), i === null && JSON.isRawJSON?.(n) && Rt({
		step: t,
		kind: "a raw JSON value"
	}), typeof n.toJSON == "function" && Rt({
		step: t,
		kind: "a value with toJSON"
	}), t.ancestors.includes(n) && Rt({
		step: t,
		kind: "a cycle"
	}), t.ancestors.length >= 512 && Rt({
		step: t,
		kind: "a value nested more than 512 levels deep"
	}), r ? "array" : "object";
}
function Lt(e) {
	let { prototype: t, name: n } = e;
	if (t === (n === "Array" ? Array.prototype : Object.prototype)) return !0;
	if (t === null) return n === "Object";
	let r = Object.getOwnPropertyDescriptor(t, "constructor")?.value;
	return typeof r == "function" && r.name === n;
}
function Rt(e) {
	let t = String(e.step.field);
	throw TypeError(`${e.kind} is not a JSON value${t ? ` (field "${t}")` : ""}`);
}
var V = /* @__PURE__ */ new WeakSet();
function zt(e) {
	let { listener: t, value: n, of: r, call: i } = e;
	if (t) try {
		let e = t(n);
		H(e) && Promise.resolve(e).catch(function(e) {
			Vt({
				call: i,
				of: r,
				thrown: e
			});
		});
	} catch (e) {
		Vt({
			call: i,
			of: r,
			thrown: e
		});
	}
}
function Bt(e) {
	return `the changes of project "${e.name}"`;
}
function Vt(e) {
	let { call: t } = e;
	if (t !== void 0) {
		if (V.has(t)) return;
		V.add(t);
	}
	console.error(`[dialecte] a listener of ${e.of} threw; what told it goes on:`, e.thrown);
}
function H(e) {
	return typeof e == "object" && !!e && typeof e.then == "function";
}
var Ht = {
	importProgress: "an import's progress",
	importedFile: "an imported file's entry",
	exportProgress: "an export's progress",
	commitProgress: "a commit's progress",
	callProgress: "a call's progress",
	engineChanges: "a project engine's changes"
}, Ut = [
	"",
	".",
	".."
], U = "_documents", W = "_changeLog", G = "_meta", K = "xel_";
function q(e) {
	return `${K}${e}`;
}
var J = "_blobs", Wt = "blob_";
function Gt(e) {
	return `${Wt}${e}`;
}
var Kt = {
	primaryKey: "id",
	indexes: ["name", "configKey"],
	compoundIndexes: [],
	arrayIndexes: []
}, qt = {
	primaryKey: "id",
	autoIncrement: !0,
	indexes: ["documentId"],
	compoundIndexes: [["documentId", "sequenceNumber"]],
	arrayIndexes: []
}, Jt = {
	primaryKey: "key",
	indexes: [],
	compoundIndexes: [],
	arrayIndexes: []
}, Yt = {
	primaryKey: "id",
	indexes: ["documentId"],
	compoundIndexes: [],
	arrayIndexes: []
}, Xt = {
	primaryKey: "id",
	indexes: [],
	compoundIndexes: [],
	arrayIndexes: []
};
function Zt(e) {
	let { project: t, dialecteId: n } = e;
	(Ut.includes(t) || n !== void 0 && Ut.includes(n)) && f("PROJECT_NAME_INVALID", {
		detail: `A project cannot be named ${JSON.stringify(t)}${n === void 0 ? "" : ` in dialecte ${JSON.stringify(n)}`}: neither its name nor its dialecte's id may be empty, \`.\` or \`..\``,
		meta: {
			project: t,
			...n !== void 0 && { dialecteId: n }
		}
	});
}
var Y = Object.freeze({
	start() {},
	stop() {},
	count() {},
	time(e, t) {
		return t();
	},
	profile(e, t) {
		return t();
	},
	report() {
		return {};
	},
	log() {},
	reset() {},
	snapshot() {
		return {
			timeOrigin: performance.timeOrigin,
			spans: [],
			totals: {}
		};
	},
	merge() {}
}), Qt = "dialecte::";
function $t({ enabled: e, timeline: t = !0 }) {
	if (!e) return Y;
	let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = [], o = 0;
	function s(e) {
		t ? performance.measure(Qt + e.name, {
			start: e.startTime,
			duration: e.duration
		}) : a.push(e);
	}
	function c() {
		return t ? performance.getEntriesByType("measure").filter((e) => e.name.startsWith(Qt)).map((e) => ({
			name: e.name.slice(10),
			startTime: e.startTime,
			duration: e.duration
		})) : a;
	}
	function l(e, t, n) {
		let r = i.get(e) ?? i.set(e, {
			calls: 0,
			totalMs: 0
		}).get(e);
		r.calls += t, r.totalMs += n;
	}
	let u = {
		start(e) {
			let r = Qt + e, i = `${r}:${++o}`;
			t && performance.mark(i), (n.get(r) ?? n.set(r, []).get(r)).push({
				mark: i,
				startTime: performance.now()
			});
		},
		stop(e) {
			let r = Qt + e, i = n.get(r)?.pop();
			i && (t ? (performance.measure(r, i.mark), performance.clearMarks(i.mark)) : a.push({
				name: e,
				startTime: i.startTime,
				duration: performance.now() - i.startTime
			}));
		},
		count(e) {
			let t = Qt + e;
			r.set(t, (r.get(t) ?? 0) + 1);
		},
		time(e, t) {
			let n = Qt + e, r = performance.now();
			try {
				return t();
			} finally {
				l(n, 1, performance.now() - r);
			}
		},
		profile(e, t) {
			return typeof console.profile == "function" ? (console.profile(Qt + e), Promise.resolve(t()).finally(() => console.profileEnd(Qt + e))) : t();
		},
		report() {
			let e = {};
			for (let { name: t, duration: n } of c()) {
				let r = e[t] ??= {
					calls: 0,
					totalMs: 0,
					avgMs: 0
				};
				r.calls++, r.totalMs += n, r.avgMs = r.totalMs / r.calls;
			}
			return d(e);
		},
		log() {
			console.table(u.report());
		},
		reset() {
			t && (performance.clearMarks(), performance.clearMeasures()), n.clear(), a.length = 0, r.clear(), i.clear();
		},
		snapshot() {
			return {
				timeOrigin: performance.timeOrigin,
				spans: [...c()],
				totals: d({})
			};
		},
		merge({ report: e, prefix: t }) {
			let n = e.timeOrigin - performance.timeOrigin;
			for (let r of e.spans) s({
				name: `${t}::${r.name}`,
				startTime: Math.max(0, r.startTime + n),
				duration: r.duration
			});
			for (let [n, i] of Object.entries(e.totals)) {
				let e = `${Qt}${t}::${n}`;
				i.calls > 0 && l(e, i.calls, i.totalMs), i.count !== void 0 && r.set(e, (r.get(e) ?? 0) + i.count);
			}
		}
	};
	function d(e) {
		for (let [t, n] of i) {
			let r = t.slice(10), i = e[r] ??= {
				calls: 0,
				totalMs: 0,
				avgMs: 0
			};
			i.calls += n.calls, i.totalMs += n.totalMs, i.avgMs = i.calls ? i.totalMs / i.calls : 0;
		}
		for (let [t, n] of r) {
			let r = t.slice(10), i = e[r] ??= {
				calls: 0,
				totalMs: 0,
				avgMs: 0
			};
			i.count = n;
		}
		return e;
	}
	return u;
}
function en(e) {
	let { configs: t, defaultConfigKey: n, configKey: r = n } = e, i = t[r];
	return j(i, {
		key: "UNKNOWN_CONFIG_KEY",
		detail: `Unknown configKey: "${r}". Available: ${Object.keys(t).join(", ")}`
	}), {
		configKey: r,
		config: i
	};
}
function tn() {
	return new Promise(function(e) {
		let t = new MessageChannel();
		t.port1.onmessage = function() {
			t.port1.close(), e();
		}, t.port2.postMessage(null);
	});
}
function nn(e) {
	let { record: t, config: n } = e;
	return t.tagName === n.rootElementName && t.parent === null;
}
var rn = {
	namespaceURI: pe,
	prefix: null,
	localName: "xmlns",
	value: ""
}, an = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>", on = "    ", sn = /[&<>"\t\n\r]/, cn = /[&<>"\t\n\r]/g, ln = /[&<>]/, un = /[&<>]/g, dn = /[&<>\r]/, fn = /[&<>\r]/g, pn = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"	": "&#9;",
	"\n": "&#10;",
	"\r": "&#13;"
}, mn = {
	bindings: /* @__PURE__ */ new Map(),
	parent: void 0
}, hn = /* @__PURE__ */ new Set();
function gn(e) {
	let { namespaceURI: t, qualifiedName: n, parent: r } = e;
	if (t === null) return {
		namespaceURI: t,
		prefix: null,
		localName: n,
		attributes: [],
		parent: r
	};
	let { prefix: i, localName: a } = An(n);
	return {
		namespaceURI: t,
		prefix: i,
		localName: a,
		attributes: [],
		parent: r
	};
}
function _n(e) {
	let { element: t, qualifiedName: n, value: r } = e, i = t.attributes.find((e) => jn(e) === n);
	i ? i.value = r : t.attributes.push({
		namespaceURI: null,
		prefix: null,
		localName: n,
		value: r
	});
}
function vn(e) {
	let { element: t, namespaceURI: n, qualifiedName: r, value: i } = e, { prefix: a, localName: o } = An(r), s = Mn({
		element: t,
		namespaceURI: n,
		localName: o
	});
	s ? s.value = i : t.attributes.push({
		namespaceURI: n,
		prefix: a,
		localName: o,
		value: i
	});
}
function yn(e) {
	let { element: t, qualifiedName: n } = e;
	return t.attributes.some((e) => jn(e) === n);
}
function bn(e) {
	return Mn(e)?.value ?? null;
}
function xn(e) {
	return Mn(e) !== void 0;
}
function Sn(e) {
	let { prefix: t } = e;
	for (let n = e.element; n; n = n.parent) {
		if (n.namespaceURI !== null && n.prefix === t) return n.namespaceURI;
		let e = n.attributes.find((e) => Nn({
			attribute: e,
			prefix: t
		}));
		if (e) return e.value || null;
	}
	return null;
}
function Cn(e) {
	let { element: t, prefixes: n } = e, r, i = e.scope, a;
	for (let e of t.attributes) {
		let t = Pn(e);
		t !== void 0 && In({
			parent: i,
			own: a,
			prefix: t
		}) !== e.value && (a ??= /* @__PURE__ */ new Map(), a.set(t, e.value));
	}
	let o = `<${jn(t)}`, s = t.prefix ?? "", c = t.namespaceURI ?? "", l = In({
		parent: i,
		own: a,
		prefix: ""
	});
	(t.namespaceURI !== null || l) && (In({
		parent: i,
		own: a,
		prefix: s
	}) ?? "") !== c && (o += s ? ` xmlns:${s}="${En(c)}"` : ` xmlns="${En(c)}"`, a ??= /* @__PURE__ */ new Map(), a.set(s, c));
	for (let e of t.attributes) {
		let { namespaceURI: t } = e;
		if (t === null || t === "http://www.w3.org/2000/xmlns/" || t === "http://www.w3.org/XML/1998/namespace" || e.prefix === null) {
			o += ` ${jn(e)}="${En(e.value)}"`;
			continue;
		}
		let { prefix: s, declare: c } = wn({
			attribute: e,
			parent: i,
			own: a,
			prefixes: n
		});
		c && (o += ` xmlns:${s}="${En(t)}"`, a ??= /* @__PURE__ */ new Map(), a.set(s, t), r ??= /* @__PURE__ */ new Set(), r.add(s)), o += ` ${s}:${e.localName}="${En(e.value)}"`;
	}
	return {
		text: o,
		scope: a ? {
			bindings: a,
			parent: i
		} : i,
		generated: r ?? hn
	};
}
function wn(e) {
	let { attribute: t, parent: n, own: r, prefixes: i } = e, a = t.namespaceURI, o = t.prefix, s = In({
		parent: n,
		own: r,
		prefix: o
	});
	if (s === a) return {
		prefix: o,
		declare: !1
	};
	let c = X({
		parent: n,
		own: r,
		namespaceURI: a
	});
	if (c !== void 0) return {
		prefix: c,
		declare: !1
	};
	if (s === void 0) return {
		prefix: o,
		declare: !0
	};
	for (;;) {
		let e = `ns${i.next}`;
		if (i.next++, In({
			parent: n,
			own: r,
			prefix: e
		}) === void 0) return {
			prefix: e,
			declare: !0
		};
	}
}
function X(e) {
	let { parent: t, own: n, namespaceURI: r } = e, i = /* @__PURE__ */ new Set(), a = [n, ...Tn(t)];
	for (let e of a) if (e) {
		for (let [t, n] of [...e].reverse()) if (!i.has(t) && (i.add(t), t && n === r)) return t;
	}
}
function Tn(e) {
	let t = [];
	for (let n = e; n; n = n.parent) t.push(n.bindings);
	return t;
}
function En(e) {
	return sn.test(e) ? e.replace(cn, kn) : e;
}
function Dn(e) {
	return dn.test(e) ? e.replace(fn, kn) : e;
}
function On(e) {
	return ln.test(e) ? e.replace(un, kn) : e;
}
function kn(e) {
	return pn[e];
}
function An(e) {
	let t = e.indexOf(":");
	return t === -1 ? {
		prefix: null,
		localName: e
	} : {
		prefix: e.slice(0, t),
		localName: e.slice(t + 1)
	};
}
function jn(e) {
	return e.prefix ? `${e.prefix}:${e.localName}` : e.localName;
}
function Mn(e) {
	let { element: t, namespaceURI: n, localName: r } = e;
	return t.attributes.find((e) => e.namespaceURI === n && e.localName === r);
}
function Nn(e) {
	let { attribute: t, prefix: n } = e;
	return t.namespaceURI === "http://www.w3.org/2000/xmlns/" ? n === null ? t.prefix === null && t.localName === "xmlns" : t.prefix === "xmlns" && t.localName === n : !1;
}
function Pn(e) {
	if (e.namespaceURI === "http://www.w3.org/2000/xmlns/") return e.prefix === "xmlns" ? e.localName : "";
	if (e.namespaceURI === null && e.localName === "xmlns") return "";
}
function Fn(e) {
	let { prefix: t } = e;
	for (let n = e.scope; n; n = n.parent) {
		let e = n.bindings.get(t);
		if (e !== void 0) return e;
	}
}
function In(e) {
	let { parent: t, own: n, prefix: r } = e;
	return n?.get(r) ?? Fn({
		scope: t,
		prefix: r
	});
}
function Ln(e) {
	let { config: t, rootUri: n } = e, r = Object.values(t.namespaces).map((e) => e.prefix).filter((e) => e !== ""), i = !r.includes("xs"), a = /* @__PURE__ */ new Set([
		...r,
		C.prefix,
		"xml",
		"xmlns"
	]);
	return i && a.add("xs"), {
		bindings: /* @__PURE__ */ new Map(),
		prefixByUri: /* @__PURE__ */ new Map(),
		reserved: a,
		xsdTakesXs: i,
		nextGenerated: 1,
		defaultOnRoot: n !== "",
		alias: void 0
	};
}
function Rn(e) {
	let { table: t, config: n, uri: r, storedPrefix: i } = e, a = t.prefixByUri.get(r);
	if (a !== void 0) return {
		table: t,
		prefix: a
	};
	if (r === "") return {
		table: t,
		prefix: ""
	};
	if (r === "http://www.w3.org/XML/1998/namespace") return {
		table: t,
		prefix: "xml"
	};
	let { prefix: o, nextGenerated: s } = Hn({
		table: t,
		config: n,
		uri: r,
		storedPrefix: i
	}), c = new Map(t.prefixByUri).set(r, o), l = o !== "" || t.defaultOnRoot ? new Map(t.bindings).set(o, r) : t.bindings;
	return {
		table: {
			...t,
			prefixByUri: c,
			bindings: l,
			nextGenerated: s
		},
		prefix: o
	};
}
function zn(e) {
	let { table: t, config: n, storedPrefix: r } = e;
	if (t.alias !== void 0) return {
		table: t,
		prefix: t.alias
	};
	let { prefix: i, nextGenerated: a } = r && Gn({
		table: t,
		prefix: r
	}) ? {
		prefix: r,
		nextGenerated: t.nextGenerated
	} : Wn({ table: t }), o = new Map(t.bindings).set(i, n.namespaces.default.uri);
	return {
		table: {
			...t,
			alias: i,
			bindings: o,
			nextGenerated: a
		},
		prefix: i
	};
}
function Bn(e) {
	let { table: t, config: n } = e, { prefixByUri: r } = t, i = t.bindings.get(""), a = [];
	i && a.push(Kn({
		uri: i,
		prefix: ""
	})), t.alias !== void 0 && a.push(Kn({
		uri: n.namespaces.default.uri,
		prefix: t.alias
	}));
	let o = [];
	r.has(C.uri) && o.push(C.uri);
	let s = /* @__PURE__ */ new Set();
	for (let e of Object.values(n.namespaces)) s.add(e.uri), e.uri !== n.namespaces.default.uri && e.uri !== C.uri && r.has(e.uri) && !o.includes(e.uri) && o.push(e.uri);
	let c = [...r.keys()].filter((e) => e !== i && e !== C.uri && !s.has(e)).sort(qn);
	for (let e of [...o, ...c]) a.push(Kn({
		uri: e,
		prefix: r.get(e) ?? ""
	}));
	return a;
}
function Vn(e) {
	let { table: t, config: n, documentRoot: r, element: i } = e;
	if (!r || t.prefixByUri.size === 0) return [];
	let a = {
		...i,
		attributes: [...i.attributes]
	};
	for (let [e, i] of t.prefixByUri) Jn({
		config: n,
		element: a,
		namespace: {
			prefix: i,
			uri: e
		},
		rootRecord: r
	});
	return a.attributes.slice(i.attributes.length);
}
function Hn(e) {
	let { table: t, config: n, uri: r, storedPrefix: i } = e, a = t.nextGenerated;
	if (r === n.namespaces.default.uri) return {
		prefix: "",
		nextGenerated: a
	};
	let o = Object.values(n.namespaces).find((e) => e.uri === r && e.prefix !== "");
	return o ? {
		prefix: o.prefix,
		nextGenerated: a
	} : r === C.uri ? {
		prefix: C.prefix,
		nextGenerated: a
	} : r === "http://www.w3.org/2001/XMLSchema" && t.xsdTakesXs ? {
		prefix: "xs",
		nextGenerated: a
	} : i ? {
		prefix: Un({
			table: t,
			storedPrefix: i
		}),
		nextGenerated: a
	} : Wn({ table: t });
}
function Un(e) {
	let { table: t, storedPrefix: n } = e;
	if (Gn({
		table: t,
		prefix: n
	})) return n;
	for (let e = 2;; e++) {
		let r = `${n}${e}`;
		if (Gn({
			table: t,
			prefix: r
		})) return r;
	}
}
function Wn(e) {
	let { table: t } = e;
	for (let e = t.nextGenerated;; e++) {
		let n = `ns${e}`;
		if (Gn({
			table: t,
			prefix: n
		})) return {
			prefix: n,
			nextGenerated: e + 1
		};
	}
}
function Gn(e) {
	let { table: t, prefix: n } = e;
	return !t.reserved.has(n) && !t.bindings.has(n);
}
function Kn(e) {
	let { uri: t, prefix: n } = e;
	return n ? {
		namespaceURI: pe,
		prefix: "xmlns",
		localName: n,
		value: t
	} : {
		namespaceURI: pe,
		prefix: null,
		localName: "xmlns",
		value: t
	};
}
function qn(e, t) {
	return e === t ? 0 : e < t ? -1 : 1;
}
function Jn(e) {
	let { config: t, element: n, namespace: r, rootRecord: a } = e, o = O({
		dialecteConfig: t,
		record: a
	})?.attributes.details ?? {}, s = r.uri === t.namespaces.default.uri;
	for (let [e, c] of Object.entries(o)) {
		let o = h({
			dialecteConfig: t,
			record: a,
			attributeName: e,
			defaults: "required"
		});
		if (o === void 0 || !(s ? !c.namespace : c.namespace?.prefix === r.prefix && c.namespace?.uri === r.uri)) continue;
		let l = i(e);
		(c.namespace ? xn({
			element: n,
			namespaceURI: c.namespace.uri,
			localName: l
		}) : yn({
			element: n,
			qualifiedName: l
		})) || (c.namespace ? vn({
			element: n,
			namespaceURI: c.namespace.uri,
			qualifiedName: `${c.namespace.prefix}:${l}`,
			value: o
		}) : _n({
			element: n,
			qualifiedName: l,
			value: o
		}));
	}
}
function Yn(e) {
	let { settings: t, table: n, record: r, parent: i } = e, { config: a, declareNamespaces: o, withDatabaseIds: s } = t, c = o && D({
		dialecteConfig: a,
		tagName: r.tagName
	}), l = o && i !== void 0, u = l || c ? we({
		dialecteConfig: a,
		record: r
	}) : void 0, d = Xn({
		settings: t,
		table: n,
		record: r,
		parent: i,
		holdsNoNamespaceName: o && Z({
			config: a,
			record: r,
			definition: u
		})
	}), { element: f } = d, p = Qn({
		settings: t,
		table: d.table,
		element: f,
		attributes: r.attributes
	}), m = r.value;
	if (u !== void 0 && c) {
		let e = nr({
			settings: t,
			table: p,
			element: f,
			record: r,
			definition: u
		});
		p = e.table, m = e.text;
	}
	return u !== void 0 && l && (p = er({
		settings: t,
		table: p,
		element: f,
		record: r,
		definition: u
	})), s && _n({
		element: f,
		qualifiedName: "_temp-idb-id",
		value: r.id
	}), o && (p = tr({
		settings: t,
		table: p,
		element: f
	})), {
		element: f,
		table: p,
		text: m
	};
}
function Xn(e) {
	let { settings: t, table: n, record: r, parent: i, holdsNoNamespaceName: a } = e, { namespace: o, tagName: s } = r;
	if (!t.declareNamespaces) return {
		element: gn({
			namespaceURI: null,
			qualifiedName: o.uri !== t.config.namespaces.default.uri && o.prefix ? `${o.prefix}:${s}` : s,
			parent: i
		}),
		table: n
	};
	let c = Rn({
		table: n,
		config: t.config,
		uri: o.uri,
		storedPrefix: o.prefix
	});
	if (a) return Zn({
		settings: t,
		registration: c,
		record: r,
		parent: i
	});
	let { prefix: l } = c;
	return {
		element: gn({
			namespaceURI: o.uri,
			qualifiedName: l ? `${l}:${s}` : s,
			parent: i
		}),
		table: c.table
	};
}
function Zn(e) {
	let { settings: t, registration: n, record: r, parent: i } = e, { namespace: a, tagName: o } = r, s = !n.prefix && a.uri !== "", c = i && Sn({
		element: i,
		prefix: null
	}), l = s ? zn({
		table: n.table,
		config: t.config,
		storedPrefix: void 0
	}) : n, u = gn({
		namespaceURI: a.uri,
		qualifiedName: l.prefix ? `${l.prefix}:${o}` : o,
		parent: i
	});
	return {
		element: c && a.uri !== "" ? {
			...u,
			attributes: [{ ...rn }]
		} : u,
		table: l.table
	};
}
function Qn(e) {
	let { settings: t, element: n, attributes: r } = e, { table: a } = e;
	for (let e of r) {
		if (cr(e)) continue;
		let r = String(e.value);
		if (!sr(e) || !e.namespace.prefix) {
			_n({
				element: n,
				qualifiedName: e.name,
				value: r
			});
			continue;
		}
		let o = i(e.name);
		t.declareNamespaces ? a = $n({
			settings: t,
			table: a,
			element: n,
			namespace: e.namespace,
			localName: o,
			value: r
		}) : _n({
			element: n,
			qualifiedName: `${e.namespace.prefix}:${o}`,
			value: r
		});
	}
	return a;
}
function $n(e) {
	let { settings: t, table: n, element: r, namespace: i, localName: a, value: o } = e;
	if (i.uri === "") return _n({
		element: r,
		qualifiedName: a,
		value: o
	}), n;
	let { config: s } = t, c = Rn({
		table: n,
		config: s,
		uri: i.uri,
		storedPrefix: i.prefix
	}), l = c.prefix ? c : zn({
		table: c.table,
		config: s,
		storedPrefix: i.prefix
	});
	return vn({
		element: r,
		namespaceURI: i.uri,
		qualifiedName: `${l.prefix}:${a}`,
		value: o
	}), l.table;
}
function er(e) {
	let { settings: t, element: n, record: r, definition: a } = e, { config: o } = t, { table: s } = e;
	for (let [e, c] of Object.entries(a.attributes.details)) {
		let a = h({
			dialecteConfig: o,
			record: r,
			attributeName: e,
			defaults: "required"
		});
		if (a === void 0) continue;
		let l = i(e);
		(c.namespace ? xn({
			element: n,
			namespaceURI: c.namespace.uri,
			localName: l
		}) : yn({
			element: n,
			qualifiedName: l
		})) || (c.namespace && c.namespace.prefix ? s = $n({
			settings: t,
			table: s,
			element: n,
			namespace: c.namespace,
			localName: l,
			value: a
		}) : _n({
			element: n,
			qualifiedName: l,
			value: a
		}));
	}
	return s;
}
function tr(e) {
	let { settings: t, table: n, element: r } = e, { config: i } = t, a = bn({
		element: r,
		namespaceURI: C.uri,
		localName: "type"
	});
	if (a === null) return n;
	let o = ir({
		settings: t,
		table: n,
		element: r,
		value: a,
		notation: !1
	});
	if (o === void 0) return n;
	let s = Rn({
		table: o.table,
		config: i,
		uri: C.uri,
		storedPrefix: C.prefix
	});
	return vn({
		element: r,
		namespaceURI: C.uri,
		qualifiedName: `${s.prefix}:type`,
		value: o.value
	}), s.table;
}
function nr(e) {
	let { settings: t, element: n, record: r, definition: a } = e, { table: o } = e;
	for (let e of r.attributes) {
		let r = Te({
			definition: a,
			attribute: e
		});
		if (r === void 0 || !y(r)) continue;
		let s = rr({
			settings: t,
			table: o,
			element: n,
			type: r,
			value: String(e.value)
		});
		o = s.table, sr(e) && e.namespace.prefix ? vn({
			element: n,
			namespaceURI: e.namespace.uri,
			qualifiedName: i(e.name),
			value: s.value
		}) : _n({
			element: n,
			qualifiedName: e.name,
			value: s.value
		});
	}
	let s = a.textContent?.type;
	if (s === void 0 || !y(s) || r.value === "") return {
		table: o,
		text: r.value
	};
	let c = rr({
		settings: t,
		table: o,
		element: n,
		type: s,
		value: r.value
	});
	return {
		table: c.table,
		text: c.value
	};
}
function rr(e) {
	let { settings: t, element: n, value: r } = e, { table: i } = e, a = ae({
		type: e.type,
		value: r,
		namespaceOf: A({ dialecteConfig: t.config })
	});
	if (a === void 0) return {
		table: i,
		value: r
	};
	if ("builtin" in a) {
		let e = a.builtin === "NOTATION";
		return ir({
			settings: t,
			table: i,
			element: n,
			value: r,
			notation: e
		}) ?? {
			table: i,
			value: r
		};
	}
	let o = [];
	for (let e of s(r)) {
		let r = rr({
			settings: t,
			table: i,
			element: n,
			type: a.list,
			value: e
		});
		i = r.table, o.push(r.value);
	}
	return {
		table: i,
		value: o.join(" ")
	};
}
function ir(e) {
	let { settings: t, table: n, element: r, value: i, notation: a } = e, o = S({
		value: i,
		namespaceOf: A({ dialecteConfig: t.config })
	});
	if (o === void 0) return;
	if (o.namespace === "") return Sn({
		element: r,
		prefix: null
	}) ? void 0 : {
		table: n,
		value: o.local
	};
	let s = or({
		settings: t,
		table: n,
		element: r,
		uri: o.namespace
	}), c = a && s.prefix === "" && o.namespace !== "" ? zn({
		table: s.table,
		config: t.config,
		storedPrefix: void 0
	}) : s;
	return {
		table: c.table,
		value: c.prefix ? `${c.prefix}:${o.local}` : o.local
	};
}
function ar(e) {
	let { settings: t, record: n } = e, { config: r, declareNamespaces: i } = t;
	return i ? n.namespace.uri === r.namespaces.default.uri ? Z({
		config: r,
		record: n,
		definition: D({
			dialecteConfig: r,
			tagName: n.tagName
		}) ? we({
			dialecteConfig: r,
			record: n
		}) : void 0
	}) ? "" : n.namespace.uri : "" : n.namespace.uri;
}
function Z(e) {
	let { record: t, definition: n, config: r } = e;
	function i(e, t) {
		return e === void 0 ? !1 : ae({
			type: e,
			value: t,
			namespaceOf: A({ dialecteConfig: r })
		}) !== void 0;
	}
	for (let e of t.attributes) if (typeof e.value == "string" && lr(e.value) && (ne(e) || i(n && Te({
		definition: n,
		attribute: e
	}), e.value))) return !0;
	return lr(t.value) && i(n?.textContent?.type, t.value);
}
function or(e) {
	let { settings: t, table: n, element: r, uri: i } = e, { config: a } = t, o = Rn({
		table: n,
		config: a,
		uri: i,
		storedPrefix: void 0
	});
	return o.prefix !== "" || i === "" || Sn({
		element: r,
		prefix: null
	}) === i ? o : zn({
		table: o.table,
		config: a,
		storedPrefix: void 0
	});
}
function sr(e) {
	return !!e.namespace;
}
function cr(e) {
	return e.name === "xmlns" || e.name.startsWith("xmlns:") ? !0 : e.namespace?.prefix === "xmlns";
}
function lr(e) {
	return s(e).some((e) => e.startsWith("{}"));
}
function ur(e) {
	let t = d.exec(e.text);
	if (t) return `U+${t[0].charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`;
}
function dr(e) {
	let { record: t, withId: n = !1 } = e, r = fr({ record: t }) ?? pr({
		record: t,
		withId: n
	});
	if (!r) return;
	let { character: i, attribute: a, part: o } = r;
	f("XML_CHARACTER_NOT_ALLOWED", {
		detail: `${mr({
			place: r,
			element: t.tagName ? `<${t.tagName}> '${t.id}'` : `the record '${t.id}'`
		})} holds ${i}, a character XML does not allow.`,
		...t.tagName && { ref: {
			tagName: t.tagName,
			id: t.id
		} },
		meta: {
			recordId: t.id,
			...t.tagName && { tagName: t.tagName },
			...a && { attribute: a },
			part: o,
			character: i
		}
	});
}
function fr(e) {
	let { record: t } = e, n = t.value === void 0 ? void 0 : hr({
		text: t.value,
		part: "value"
	});
	if (n) return n;
	let r = t.namespace && hr({
		text: t.namespace.uri,
		part: "namespace"
	});
	if (r) return r;
	for (let e of t.attributes ?? []) {
		let t = hr({
			text: e.value,
			part: "value",
			attribute: e.name
		}) ?? (e.namespace && hr({
			text: e.namespace.uri,
			part: "namespace",
			attribute: e.name
		}));
		if (t) return t;
	}
}
function pr(e) {
	let { record: t, withId: n } = e, r = t.tagName === void 0 ? void 0 : hr({
		text: t.tagName,
		part: "name"
	});
	if (r) return r;
	let i = t.namespace && hr({
		text: t.namespace.prefix,
		part: "prefix"
	});
	if (i) return i;
	for (let e of t.attributes ?? []) {
		let t = e.namespace && hr({
			text: e.namespace.prefix,
			part: "prefix",
			attribute: e.name
		}) || hr({
			text: e.name,
			part: "name",
			attribute: e.name
		});
		if (t) return t;
	}
	return n ? hr({
		text: t.id,
		part: "id"
	}) : void 0;
}
function mr(e) {
	let { place: t, element: n } = e, { part: r, attribute: i } = t;
	return i ? r === "value" ? `The attribute ${i} of ${n}` : r === "name" ? `The name of the attribute ${i} of ${n}` : `The ${r === "prefix" ? "namespace prefix" : "namespace URI"} of the attribute ${i} of ${n}` : r === "name" ? `The tag name of ${n}` : r === "prefix" ? `The namespace prefix of ${n}` : r === "namespace" ? `The namespace URI of ${n}` : r === "id" ? `The id of ${n}` : `The value of ${n}`;
}
function hr(e) {
	let { text: t, part: n, attribute: r } = e, i = ur({ text: t });
	if (i) return {
		character: i,
		part: n,
		...r !== void 0 && { attribute: r }
	};
}
function gr(e) {
	let { config: t, documentRoot: n, declareNamespaces: r = !0, withDatabaseIds: i = !1 } = e, a = e.indent ?? !0, o = e.includeXmlDeclaration ?? !0, s = {
		config: t,
		declareNamespaces: r,
		withDatabaseIds: i
	}, c = [], l = [], u, d, f = {
		get bindings() {
			return u ? u.bindings : mn.bindings;
		},
		parent: void 0
	}, p = { next: 1 }, m = [];
	function h(e) {
		return m[e] ??= "\r\n" + on.repeat(e), m[e];
	}
	function g(e) {
		let { record: t } = e, n = c.at(-1), r = _r({
			settings: s,
			table: u,
			record: t,
			parent: n
		});
		u = r.table;
		let { opened: i, startTag: o, text: m } = vr({
			element: r.element,
			record: t,
			value: r.text,
			parent: n,
			rootScope: f,
			prefixes: p,
			indent: a
		});
		o === void 0 ? d = i : (a && !i.insideInline && l.push(h(i.level)), l.push(o, i.empty ? "/>" : ">")), c.push(i), m && (a && !i.inline && l.push(h(i.level + 1)), l.push(br({
			text: m,
			indent: a
		})));
	}
	function _() {
		let e = c.pop();
		e && !e.empty && (a && !e.inline && l.push(h(e.level)), l.push(`</${e.qualifiedName}>`));
	}
	function v() {
		return l.splice(0).join("");
	}
	function y() {
		return !d || !u ? "" : xr({
			root: d,
			table: u,
			settings: s,
			documentRoot: n,
			indent: a,
			includeXmlDeclaration: o
		});
	}
	return {
		openElement: g,
		closeElement: _,
		take: v,
		head: y
	};
}
function _r(e) {
	let { settings: t, record: n, parent: r } = e;
	return dr({
		record: n,
		withId: t.withDatabaseIds
	}), Yn({
		settings: t,
		table: r && e.table ? e.table : Ln({
			config: t.config,
			rootUri: ar({
				settings: t,
				record: n
			})
		}),
		record: n,
		parent: r?.element
	});
}
function vr(e) {
	let { element: t, record: n, value: r, parent: i, rootScope: a, prefixes: o, indent: s } = e, c = r ? E({ text: r }) : "", l = i ? Cn({
		element: t,
		scope: i.scope,
		prefixes: o
	}) : void 0;
	return {
		opened: yr({
			element: t,
			parent: i,
			scope: l ? l.scope : a,
			text: c,
			hasChildren: n.children.length > 0,
			indent: s
		}),
		startTag: l?.text,
		text: c
	};
}
function yr(e) {
	let { element: t, parent: n, scope: r, text: i, hasChildren: a, indent: o } = e, s = n ? n.inline || n.insideInline : !1;
	return {
		element: t,
		qualifiedName: jn(t),
		level: n ? n.level + 1 : 0,
		scope: r,
		empty: !i && !a,
		inline: !o || s || Sr({
			element: t,
			text: i,
			hasChildren: a
		}),
		insideInline: s
	};
}
function br(e) {
	let { text: t, indent: n } = e;
	return n ? wr(On(t)) : Dn(t);
}
function xr(e) {
	let { root: t, table: n, settings: r, documentRoot: i, indent: a, includeXmlDeclaration: o } = e, { config: s } = r, { element: c } = t, l = r.declareNamespaces ? Bn({
		table: n,
		config: s
	}) : [], u = Vn({
		table: n,
		config: s,
		documentRoot: i,
		element: c
	}), { text: d } = Cn({
		element: {
			...c,
			attributes: [
				...l,
				...c.attributes,
				...u
			]
		},
		scope: mn,
		prefixes: { next: 1 }
	});
	return (o ? an + (a ? "\r\n" : "") : "") + d + (t.empty ? "/>" : ">");
}
function Sr(e) {
	let { element: t, text: n, hasChildren: r } = e;
	return Cr(t) ? !0 : n ? !r || !n.includes("\n") : !1;
}
function Cr(e) {
	return e.attributes.some((e) => e.value === "preserve" && (e.namespaceURI === "http://www.w3.org/XML/1998/namespace" && e.localName === "space" || e.namespaceURI === null && e.localName === "xml:space"));
}
function wr(e) {
	return e.includes("\n") ? e.replace(/\r\n/g, "\n").replace(/\n/g, "\r\n") : e;
}
async function Tr(e, t = {}) {
	let { source: n, runtime: r, documentId: i } = e, a = $t({
		enabled: r.perf ?? !1,
		timeline: !1
	});
	Ir({
		signal: t.signal,
		documentId: i
	});
	let o = await Dr({
		source: n,
		documentId: i
	}), { config: s } = en({
		configs: r.configs,
		defaultConfigKey: r.defaultConfigKey,
		configKey: o.configKey
	}), c = Er({ options: e.options });
	a.start("export");
	let l;
	try {
		let n = await Or({
			...e,
			config: s,
			control: t,
			perf: a,
			batchSize: c
		});
		l = n.status === "moved" ? await Or({
			...e,
			config: s,
			control: t,
			perf: a,
			batchSize: c
		}) : n;
	} finally {
		a.stop("export");
	}
	return l.status === "moved" && f("EXPORT_CONFLICT", {
		detail: `Document "${o.name}" changed twice while it was exported: export it again`,
		meta: { documentId: i }
	}), {
		file: l.file,
		filename: `${o.name}${o.extension}`,
		...r.perf && { perf: a.snapshot() }
	};
}
function Er(e) {
	let t = e.options?.batchSize ?? 2e3;
	return (!Number.isInteger(t) || t < 1) && f("ASSERTION_FAILED", { detail: `An export batch size is a whole number from 1, not ${t}` }), t;
}
async function Dr(e) {
	let { source: t, documentId: n } = e, r = await t.getDocument(n);
	return r && r.status === "ready" || Fr({ documentId: n }), r;
}
async function Or(e) {
	let { source: t, documentId: n, options: r, config: i, control: a, perf: o, batchSize: s } = e, c = await t.getExportVersion({ documentId: n });
	c === void 0 && Fr({ documentId: n });
	let l = await t.count(n), u = await Ar({
		source: t,
		documentId: n,
		config: i
	});
	if (!u) {
		if (await Nr({
			source: t,
			documentId: n,
			version: c
		})) return { status: "moved" };
		f("EXPORT_ROOT_NOT_FOUND", { detail: `No ${i.rootElementName} root element found in document "${n}"` });
	}
	let d = {
		source: t,
		documentId: n,
		version: c,
		totalRecords: l,
		control: a,
		perf: o,
		writer: gr({
			config: i,
			documentRoot: u,
			indent: r?.indent,
			withDatabaseIds: r?.withDatabaseIds
		}),
		parts: [],
		recordsWritten: 0
	}, p = [kr({
		pass: d,
		record: u,
		config: i
	})];
	if (d.recordsWritten % s === 0 && await jr(d)) return { status: "moved" };
	for (; p.length > 0;) {
		let e = p.at(-1);
		if (e.next >= e.childRefs.length) {
			o.time("export::write", () => d.writer.closeElement()), p.pop();
			continue;
		}
		if (e.next >= e.chunkStart + e.chunk.length) {
			let r = e.childRefs.slice(e.next, e.next + s).map(Pr);
			o.start("export::read");
			try {
				e.chunk = await t.getMany(r, n);
			} finally {
				o.stop("export::read");
			}
			e.chunkStart = e.next;
		}
		let r = e.childRefs[e.next], a = e.chunk[e.next - e.chunkStart];
		if (e.next++, !a) {
			if (await Nr(d)) return { status: "moved" };
			f("EXPORT_ORPHAN_CHILD_REF", {
				detail: `Parent '${e.record.tagName}' references non-existent child '${r.tagName}' (id: ${r.id})`,
				ref: {
					tagName: e.record.tagName,
					id: e.record.id
				}
			});
		}
		if (p.push(kr({
			pass: d,
			record: a,
			config: i
		})), d.recordsWritten % s === 0 && await jr(d)) return { status: "moved" };
	}
	if (Mr(d), d.recordsWritten % s !== 0 && await jr(d)) return { status: "moved" };
	o.start("export::assemble");
	try {
		return {
			status: "written",
			file: new Blob([d.writer.head(), ...d.parts], { type: "application/xml" })
		};
	} finally {
		o.stop("export::assemble");
	}
}
function kr(e) {
	let { pass: t, record: n, config: r } = e;
	return t.perf.time("export::write", () => t.writer.openElement({ record: n })), t.recordsWritten++, {
		record: n,
		childRefs: ce({
			parentTagName: n.tagName,
			children: n.children,
			childrenConfig: r.children,
			definition: r.definition
		}),
		next: 0,
		chunk: [],
		chunkStart: 0
	};
}
async function Ar(e) {
	let { source: t, documentId: n, config: r } = e;
	return (await t.getByTagNameInDocument(r.rootElementName, n)).find((e) => nn({
		record: e,
		config: r
	}));
}
async function jr(e) {
	let { control: t, documentId: n, recordsWritten: r, totalRecords: i } = e;
	return Mr(e), zt({
		listener: t.onProgress,
		value: {
			recordsWritten: r,
			totalRecords: i
		},
		of: Ht.exportProgress,
		call: t
	}), Ir({
		signal: t.signal,
		documentId: n
	}), await tn(), Nr(e);
}
function Mr(e) {
	let t = e.writer.take();
	t && e.parts.push(new Blob([t]));
}
async function Nr(e) {
	let { source: t, documentId: n, version: r } = e, i = await t.getExportVersion({ documentId: n });
	return i === void 0 && Fr({ documentId: n }), i !== r;
}
function Pr(e) {
	return e.id;
}
function Fr(e) {
	let { documentId: t } = e;
	f("DOCUMENT_NOT_REGISTERED", {
		detail: `Document "${t}" is not registered, or not ready, in this store`,
		meta: { documentId: t }
	});
}
function Ir(e) {
	let { signal: t, documentId: n } = e;
	t?.aborted && f("EXPORT_ABORTED", {
		detail: `The export of document "${n}" was aborted`,
		meta: { documentId: n }
	});
}
function Lr(e) {
	let { dialecteId: t, project: n } = e;
	return `${encodeURIComponent(t)}/${encodeURIComponent(n)}`;
}
//#endregion
//#region node_modules/.pnpm/@dialecte+core@0.12.1/node_modules/@dialecte/core/dist/same-json-value-DTtSsGUF.js
var Rr = [
	"get",
	"getMany",
	"getByTagNameInDocument",
	"getByAttributes",
	"getByDocumentId"
];
async function zr(e) {
	let { reads: t, read: n, versionOf: r } = e;
	j(Rr.includes(n.member), {
		detail: `"${n.member}" is not a read a version is answered with`,
		meta: { member: n.member }
	});
	let i = t[n.member].apply(t, n.args), a = r();
	return {
		value: await i,
		version: a
	};
}
var Br = 1e3, Vr = "start";
function Hr(e) {
	let { documents: t, writeId: n, isRunning: r } = e, i = t.find((e) => e.writeId === n);
	return i ? i.status === "importing" ? r?.({ writeId: n }) === !1 ? "not-applied" : "running" : "applied" : "not-applied";
}
function Ur(e) {
	let { documents: t, writeId: n, committed: r, isRunning: i } = e, a = Hr({
		documents: t,
		writeId: n,
		isRunning: i
	});
	return a === "not-applied" ? r ? "applied" : "not-applied" : a;
}
var Wr = 1e4;
function Gr(e) {
	let { creates: t, updates: n, deletes: r } = e;
	return t.length + n.length + r.length > 5e3 ? { unknown: !0 } : {
		created: t.map(qr),
		updated: n.map(qr),
		deleted: r.map(Kr)
	};
}
function Kr(e) {
	return {
		id: e.id,
		tagName: e.tagName,
		parentId: e.parentId
	};
}
function qr(e) {
	return {
		id: e.id,
		tagName: e.tagName,
		parentId: e.parent?.id ?? null
	};
}
function Jr(e) {
	let { images: t, direction: n } = e, { creates: r, befores: i, afters: a, deletes: o } = t;
	return Gr(n === "forward" ? {
		creates: r,
		updates: a,
		deletes: o.map(qr)
	} : {
		creates: o,
		updates: i,
		deletes: r.map(qr)
	});
}
function Yr(e) {
	let { operations: t, direction: n } = e;
	return Jr({
		images: {
			creates: t.creates,
			befores: t.updates.map((e) => e.before),
			afters: t.updates.map((e) => e.after),
			deletes: t.deletes
		},
		direction: n
	});
}
var Xr = 1024, Zr = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u, Qr = [
	"name",
	"path",
	"metadata"
], $r = ".xml";
function ei(e) {
	let { path: t } = e, n = ci({ path: t });
	n !== void 0 && _t({
		path: t,
		reason: n
	});
	let r = t.split("/");
	return {
		folders: r,
		fileName: r.pop()
	};
}
function ti(e) {
	let { extensions: t } = e;
	return t.includes(".xml") ? t : [...t, $r];
}
function ni(e) {
	let { path: t, extensions: n } = e, { fileName: r } = ei({ path: t }), i = r.lastIndexOf(".");
	return (i < 1 || i === r.length - 1) && _t({
		path: t,
		reason: "its file name has no extension after a name"
	}), n && !n.some((e) => r.toLowerCase().endsWith(e)) && _t({
		path: t,
		reason: `its extension is not one the document's config reads (${n.join(", ")})`
	}), {
		name: r.slice(0, i),
		extension: r.slice(i)
	};
}
function ri(e) {
	let { name: t, extension: n, path: r } = e.document;
	if (r === void 0) return;
	let { fileName: i } = ei({ path: r });
	(typeof t != "string" || typeof n != "string") && _t({
		path: r,
		reason: "a path names a file of a name and an extension that are strings"
	}), (t === "" || i !== `${t}${n}`) && _t({
		path: r,
		reason: `it does not end with the document's file name ${JSON.stringify(`${t}${n}`)}`
	});
}
function ii(e) {
	let { document: t } = e, n = Object.fromEntries(Qr.filter((t) => e.updates[t] !== void 0).map((t) => [t, e.updates[t]])), r = {
		...t,
		...n
	};
	if (n.path !== void 0) {
		let { fileName: e } = ei({ path: n.path }), { extension: i } = t;
		e.endsWith(i) && e.length !== i.length || _t({
			path: n.path,
			reason: `it does not end with the document's extension ${JSON.stringify(i)}`
		}), r.name = n.name ?? e.slice(0, e.length - i.length);
	} else if (n.name !== void 0 && t.path !== void 0) {
		let { folders: e } = ei({ path: t.path });
		r.path = [...e, `${n.name}${t.extension}`].join("/");
	}
	return (n.path !== void 0 || n.name !== void 0) && ri({ document: r }), r;
}
function ai(e) {
	let { document: t, documents: n } = e;
	ri({ document: t });
	let { id: r, path: i } = t;
	if (i === void 0) return;
	let a = oi({
		path: i,
		documents: n,
		documentId: r
	});
	a !== void 0 && vt({
		documentId: r,
		path: i,
		takenBy: a
	});
}
function oi(e) {
	let { path: t, documents: n, documentId: r } = e;
	return n.find((e) => e.id !== r && e.path !== void 0 && si({
		path: t,
		other: e.path
	}))?.id;
}
function si(e) {
	let { path: t, other: n } = e;
	return t === n || t.startsWith(`${n}/`) || n.startsWith(`${t}/`);
}
function ci(e) {
	let { path: t } = e;
	if (typeof t != "string") return "it is not a string";
	if (t.includes("\\")) return "it holds a backslash, a folder separator on Windows";
	if (Zr.test(t)) return "it holds an invisible format, separator or control character (Unicode Cc, Cf, Zl or Zp)";
	if (!t.isWellFormed()) return `it is ${pt}`;
	if (t.normalize("NFC") !== t) return "it is not in Unicode NFC";
	let n = t.split("/");
	if (n.some((e) => e === "")) return "it holds an empty folder or file name";
	if (n.some((e) => e === "." || e === "..")) return "it holds a folder or file name \".\" or \"..\"";
	let r = new TextEncoder();
	if (n.some((e) => r.encode(e).length > 255)) return "it holds a folder or file name of more than 255 bytes (UTF-8)";
	if (r.encode(t).length > 1024) return `it is more than ${Xr} bytes long (UTF-8)`;
}
function li(e) {
	let { record: t } = e, { id: n, tagName: r, namespace: i, attributes: a, value: o, parent: s, children: c } = t;
	return {
		id: n,
		tagName: r,
		namespace: {
			prefix: i.prefix,
			uri: i.uri
		},
		attributes: a,
		value: o,
		parent: s === null ? null : {
			id: s.id,
			tagName: s.tagName
		},
		children: c
	};
}
function ui(e) {
	return Ot({ value: e.records }).map((e) => li({ record: e }));
}
function di(e) {
	let { record: t, patch: n } = e, { recordId: r, attributes: i, children: a, removeAttributes: o, ...s } = n, c = { ...t };
	for (let [e, t] of Object.entries(s)) t !== void 0 && Object.assign(c, { [e]: t });
	return i && (c.attributes = fi({
		held: t.attributes,
		given: i,
		key: "name"
	})), o?.length && (c.attributes = c.attributes.filter((e) => !o.includes(e.name))), a && (c.children = fi({
		held: t.children,
		given: a,
		key: "id"
	})), li({ record: c });
}
function fi(e) {
	let { held: t, given: n, key: r } = e, i = [...t];
	for (let e of n) {
		let t = i.findIndex((t) => t[r] === e[r]);
		t >= 0 ? i[t] = e : i.push(e);
	}
	return i;
}
function pi(e) {
	let { onProgress: t, parts: n } = e, r = n.reduce((e, t) => e + t, 0), i = 0, a = {};
	for (let e of n) i += e, zt({
		listener: function(e) {
			return t?.(e, r);
		},
		value: i,
		of: Ht.commitProgress,
		call: a
	});
}
function mi(e) {
	let { totalBytes: t, listener: n, perf: r = Y, intervalMs: i = 50, now: a = () => performance.now(), schedule: o = hi } = e, s = {}, c = 0, l, u = -Infinity, d, f, p, m = !1, h;
	function g(e) {
		d = void 0, h?.(), h = void 0, l && bi({
			left: l,
			right: e
		}) || (l = e, u = a(), zt({
			listener: n,
			value: e,
			of: Ht.importProgress,
			call: s
		}));
	}
	function _(e) {
		e.phase !== f && (v(), f !== void 0 && r.stop(`import::phase.${f}`), f = e.phase, r.start(`import::phase.${f}`)), e.phase === "processing" && e.step !== p && (v(), p = e.step, p !== "start" && r.start(`import::hook.${p}`));
	}
	function v() {
		p !== void 0 && p !== "start" && r.stop(`import::hook.${p}`), p = void 0;
	}
	return {
		tell: function(e) {
			if (m) return;
			e.phase === "storing" && (c = e.bytesRead);
			let n = gi({
				report: e,
				bytesRead: c,
				totalBytes: t
			});
			n.phase !== "indexing" && _(n);
			let r = !l || !_i({
				left: l,
				right: n
			});
			if (r && d && g(d), r || !vi(n) || yi(n)) {
				g(n);
				return;
			}
			let s = a() - u;
			s >= i ? g(n) : (d = n, h ??= o({
				work: function() {
					h = void 0, d && g(d);
				},
				afterMs: i - s
			}));
		},
		close: function() {
			m || (m = !0, d = void 0, h?.(), h = void 0, v(), f !== void 0 && r.stop(`import::phase.${f}`), f = void 0);
		}
	};
}
function hi(e) {
	let t = setTimeout(e.work, e.afterMs);
	return t.unref?.(), function() {
		clearTimeout(t);
	};
}
function gi(e) {
	let { report: t, bytesRead: n, totalBytes: r } = e;
	return {
		...t,
		bytesRead: n,
		totalBytes: r
	};
}
function _i(e) {
	let { left: t, right: n } = e;
	return t.phase === n.phase ? t.phase === "processing" && n.phase === "processing" ? t.step === n.step : t.phase === "indexing" && n.phase === "indexing" ? t.index === n.index : !0 : !1;
}
function vi(e) {
	return "done" in e && e.done !== void 0;
}
function yi(e) {
	return "done" in e && "total" in e && e.done === e.total;
}
function bi(e) {
	let { left: t, right: n } = e, r = Object.entries(t);
	return r.length === Object.keys(n).length && r.every(([e, t]) => n[e] === t);
}
function xi(e) {
	let { ops: t, control: n } = e, r = (t.creates?.length ?? 0) + (t.updates?.length ?? 0) + (t.deletes?.length ?? 0);
	n?.onProgress?.({
		done: r,
		total: r
	});
}
async function Si(e) {
	let { file: t } = e, n = await t.text(), r = new DOMParser().parseFromString(n, "application/xml"), i = r.getElementsByTagName("parsererror")[0];
	return i && f("PARSE_ERROR", { detail: i.textContent?.trim() || "The file is not well-formed XML" }), r;
}
var Ci = /* @__PURE__ */ rt(((e, t) => {
	t.exports = {};
})), wi = /* @__PURE__ */ at((/* @__PURE__ */ rt(((e, t, n) => {
	(function(e) {
		e.parser = function(e, t) {
			return new n(e, t);
		}, e.SAXParser = n, e.SAXStream = u, e.createStream = c, e.MAX_BUFFER_LENGTH = 65536;
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
			i(a), a.q = a.c = "", a.bufferCheckPosition = e.MAX_BUFFER_LENGTH, a.encoding = null, a.opt = r || {}, a.opt.lowercase = a.opt.lowercase || a.opt.lowercasetags, a.looseCase = a.opt.lowercase ? "toLowerCase" : "toUpperCase", a.opt.maxEntityCount = a.opt.maxEntityCount || 512, a.opt.maxEntityDepth = a.opt.maxEntityDepth || 4, a.entityCount = a.entityDepth = 0, a.tags = [], a.closed = a.closedRoot = a.sawRoot = !1, a.tag = a.error = null, a.strict = !!t, a.noscript = !!(t || a.opt.noscript), a.state = T.BEGIN, a.strictEntities = a.opt.strictEntities, a.ENTITIES = a.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), a.attribList = [], a.opt.xmlns && (a.ns = Object.create(h)), a.opt.unquotedAttributeValues === void 0 && (a.opt.unquotedAttributeValues = !t), a.trackPosition = a.opt.position !== !1, a.trackPosition && (a.position = a.line = a.column = 0), te(a, "onready");
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
						D(n);
						break;
					case "cdata":
						E(n, "oncdata", n.cdata), n.cdata = "";
						break;
					case "script":
						E(n, "onscript", n.script), n.script = "";
						break;
					default: O(n, "Max buffer length exceeded: " + t[a]);
				}
				i = Math.max(i, s);
			}
			n.bufferCheckPosition = e.MAX_BUFFER_LENGTH - i + n.position;
		}
		function i(e) {
			for (var n = 0, r = t.length; n < r; n++) e[t[n]] = "";
		}
		function a(e) {
			D(e), e.cdata !== "" && (E(e, "oncdata", e.cdata), e.cdata = ""), e.script !== "" && (E(e, "onscript", e.script), e.script = "");
		}
		n.prototype = {
			end: function() {
				se(this);
			},
			write: me,
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
			o = Ci().Stream;
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
		function S(e) {
			return e === ">" || b(e);
		}
		function C(e, t) {
			return e.test(t);
		}
		function w(e, t) {
			return !C(e, t);
		}
		var T = 0;
		for (var ee in e.STATE = {
			BEGIN: T++,
			BEGIN_WHITESPACE: T++,
			TEXT: T++,
			TEXT_ENTITY: T++,
			OPEN_WAKA: T++,
			SGML_DECL: T++,
			SGML_DECL_QUOTED: T++,
			DOCTYPE: T++,
			DOCTYPE_QUOTED: T++,
			DOCTYPE_DTD: T++,
			DOCTYPE_DTD_QUOTED: T++,
			COMMENT_STARTING: T++,
			COMMENT: T++,
			COMMENT_ENDING: T++,
			COMMENT_ENDED: T++,
			CDATA: T++,
			CDATA_ENDING: T++,
			CDATA_ENDING_2: T++,
			PROC_INST: T++,
			PROC_INST_BODY: T++,
			PROC_INST_ENDING: T++,
			OPEN_TAG: T++,
			OPEN_TAG_SLASH: T++,
			ATTRIB: T++,
			ATTRIB_NAME: T++,
			ATTRIB_NAME_SAW_WHITE: T++,
			ATTRIB_VALUE: T++,
			ATTRIB_VALUE_QUOTED: T++,
			ATTRIB_VALUE_CLOSED: T++,
			ATTRIB_VALUE_UNQUOTED: T++,
			ATTRIB_VALUE_ENTITY_Q: T++,
			ATTRIB_VALUE_ENTITY_U: T++,
			CLOSE_TAG: T++,
			CLOSE_TAG_SAW_WHITE: T++,
			SCRIPT: T++,
			SCRIPT_ENDING: T++
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
		}), e.STATE) e.STATE[e.STATE[ee]] = ee;
		T = e.STATE;
		function te(e, t, n) {
			e[t] && e[t](n);
		}
		function ne(e) {
			var t = e && e.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);
			return t ? t[2] : null;
		}
		function re(e) {
			return e ? e.toLowerCase().replace(/[^a-z0-9]/g, "") : null;
		}
		function ie(e, t) {
			let n = re(e), r = re(t);
			return !n || !r ? !0 : r === "utf16" ? n === "utf16le" || n === "utf16be" : n === r;
		}
		function ae(e, t) {
			if (e.strict && e.encoding && t && t.name === "xml") {
				var n = ne(t.body);
				n && !ie(e.encoding, n) && k(e, "XML declaration encoding " + n + " does not match detected stream encoding " + e.encoding.toUpperCase());
			}
		}
		function E(e, t, n) {
			e.textNode && D(e), te(e, t, n);
		}
		function D(e) {
			e.textNode = oe(e.opt, e.textNode), e.textNode && te(e, "ontext", e.textNode), e.textNode = "";
		}
		function oe(e, t) {
			return e.trim && (t = t.trim()), e.normalize && (t = t.replace(/\s+/g, " ")), t;
		}
		function O(e, t) {
			return D(e), e.trackPosition && (t += "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c), t = Error(t), e.error = t, te(e, "onerror", t), e;
		}
		function se(e) {
			return e.sawRoot && !e.closedRoot && k(e, "Unclosed root tag"), e.state !== T.BEGIN && e.state !== T.BEGIN_WHITESPACE && e.state !== T.TEXT && O(e, "Unexpected end"), D(e), e.c = "", e.closed = !0, te(e, "onend"), n.call(e, e.strict, e.opt), e;
		}
		function k(e, t) {
			if (typeof e != "object" || !(e instanceof n)) throw Error("bad call to strictFail");
			e.strict && O(e, t);
		}
		function ce(e) {
			e.strict || (e.tagName = e.tagName[e.looseCase]());
			var t = e.tags[e.tags.length - 1] || e, n = e.tag = {
				name: e.tagName,
				attributes: {}
			};
			e.opt.xmlns && (n.ns = t.ns), e.attribList.length = 0, E(e, "onopentagstart", n);
		}
		function le(e, t) {
			var n = e.indexOf(":") < 0 ? ["", e] : e.split(":"), r = n[0], i = n[1];
			return t && e === "xmlns" && (r = "xmlns", i = ""), {
				prefix: r,
				local: i
			};
		}
		function ue(e) {
			if (e.strict || (e.attribName = e.attribName[e.looseCase]()), e.attribList.indexOf(e.attribName) !== -1 || e.tag.attributes.hasOwnProperty(e.attribName)) e.attribName = e.attribValue = "";
			else {
				if (e.opt.xmlns) {
					var t = le(e.attribName, !0), n = t.prefix, r = t.local;
					if (n === "xmlns") if (r === "xml" && e.attribValue !== p) k(e, "xml: prefix must be bound to " + p + "\nActual: " + e.attribValue);
					else if (r === "xmlns" && e.attribValue !== m) k(e, "xmlns: prefix must be bound to " + m + "\nActual: " + e.attribValue);
					else {
						var i = e.tag, a = e.tags[e.tags.length - 1] || e;
						i.ns === a.ns && (i.ns = Object.create(a.ns)), i.ns[r] = e.attribValue;
					}
					e.attribList.push([e.attribName, e.attribValue]);
				} else e.tag.attributes[e.attribName] = e.attribValue, E(e, "onattribute", {
					name: e.attribName,
					value: e.attribValue
				});
				e.attribName = e.attribValue = "";
			}
		}
		function de(e, t) {
			if (e.opt.xmlns) {
				var n = e.tag, r = le(e.tagName);
				n.prefix = r.prefix, n.local = r.local, n.uri = n.ns[r.prefix] || "", n.prefix && !n.uri && (k(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName)), n.uri = r.prefix);
				var i = e.tags[e.tags.length - 1] || e;
				n.ns && i.ns !== n.ns && Object.keys(n.ns).forEach(function(t) {
					E(e, "onopennamespace", {
						prefix: t,
						uri: n.ns[t]
					});
				});
				for (var a = 0, o = e.attribList.length; a < o; a++) {
					var s = e.attribList[a], c = s[0], l = s[1], u = le(c, !0), d = u.prefix, f = u.local, p = d === "" ? "" : n.ns[d] || "", m = {
						name: c,
						value: l,
						prefix: d,
						local: f,
						uri: p
					};
					d && d !== "xmlns" && !p && (k(e, "Unbound namespace prefix: " + JSON.stringify(d)), m.uri = d), e.tag.attributes[c] = m, E(e, "onattribute", m);
				}
				e.attribList.length = 0;
			}
			e.tag.isSelfClosing = !!t, e.sawRoot = !0, e.tags.push(e.tag), E(e, "onopentag", e.tag), t || (e.state = !e.noscript && e.tagName.toLowerCase() === "script" ? T.SCRIPT : T.TEXT, e.tag = null, e.tagName = ""), e.attribName = e.attribValue = "", e.attribList.length = 0;
		}
		function A(e) {
			if (!e.tagName) k(e, "Weird empty close tag."), e.textNode += "</>", e.state = T.TEXT;
			else {
				if (e.script) {
					if (e.tagName !== "script") {
						e.script += "</" + e.tagName + ">", e.tagName = "", e.state = T.SCRIPT;
						return;
					}
					E(e, "onscript", e.script), e.script = "";
				}
				var t = e.tags.length, n = e.tagName;
				e.strict || (n = n[e.looseCase]());
				for (var r = n; t-- && e.tags[t].name !== r;) k(e, "Unexpected close tag");
				if (t < 0) k(e, "Unmatched closing tag: " + e.tagName), e.textNode += "</" + e.tagName + ">", e.state = T.TEXT;
				else {
					e.tagName = n;
					for (var i = e.tags.length; i-- > t;) {
						var a = e.tag = e.tags.pop();
						e.tagName = e.tag.name, E(e, "onclosetag", e.tagName);
						var o = {};
						for (var s in a.ns) o[s] = a.ns[s];
						var c = e.tags[e.tags.length - 1] || e;
						e.opt.xmlns && a.ns !== c.ns && Object.keys(a.ns).forEach(function(t) {
							var n = a.ns[t];
							E(e, "onclosenamespace", {
								prefix: t,
								uri: n
							});
						});
					}
					t === 0 && (e.closedRoot = !0), e.tagName = e.attribValue = e.attribName = "", e.attribList.length = 0, e.state = T.TEXT;
				}
			}
		}
		function fe(e) {
			var t = e.entity, n = t.toLowerCase(), r, i = "";
			return e.ENTITIES[t] ? e.ENTITIES[t] : e.ENTITIES[n] ? e.ENTITIES[n] : (t = n, t.charAt(0) === "#" && (t.charAt(1) === "x" ? (t = t.slice(2), r = parseInt(t, 16), i = r.toString(16)) : (t = t.slice(1), r = parseInt(t, 10), i = r.toString(10))), t = t.replace(/^0+/, ""), isNaN(r) || i.toLowerCase() !== t || r < 0 || r > 1114111 ? (k(e, "Invalid character entity"), "&" + e.entity + ";") : String.fromCodePoint(r));
		}
		function pe(e, t) {
			t === "<" ? (e.state = T.OPEN_WAKA, e.startTagPosition = e.position) : b(t) || (k(e, "Non-whitespace before first tag."), e.textNode = t, e.state = T.TEXT);
		}
		function j(e, t) {
			var n = "";
			return t < e.length && (n = e.charAt(t)), n;
		}
		function me(t) {
			var n = this;
			if (this.error) throw this.error;
			if (n.closed) return O(n, "Cannot write after close. Assign an onready handler.");
			if (t === null) return se(n);
			typeof t == "object" && (t = t.toString());
			for (var i = 0, a = ""; a = j(t, i++), n.c = a, a;) switch (n.trackPosition && (n.position++, a === "\n" ? (n.line++, n.column = 0) : n.column++), n.state) {
				case T.BEGIN:
					if (n.state = T.BEGIN_WHITESPACE, a === "﻿") continue;
					pe(n, a);
					continue;
				case T.BEGIN_WHITESPACE:
					pe(n, a);
					continue;
				case T.TEXT:
					if (n.sawRoot && !n.closedRoot) {
						for (var o = i - 1; a && a !== "<" && a !== "&";) a = j(t, i++), a && n.trackPosition && (n.position++, a === "\n" ? (n.line++, n.column = 0) : n.column++);
						n.textNode += t.substring(o, i - 1);
					}
					a === "<" && !(n.sawRoot && n.closedRoot && !n.strict) ? (n.state = T.OPEN_WAKA, n.startTagPosition = n.position) : (b(a) || n.sawRoot && !n.closedRoot || k(n, "Text data outside of root node."), a === "&" ? n.state = T.TEXT_ENTITY : n.textNode += a);
					continue;
				case T.SCRIPT:
					a === "<" ? n.state = T.SCRIPT_ENDING : n.script += a;
					continue;
				case T.SCRIPT_ENDING:
					a === "/" ? n.state = T.CLOSE_TAG : (n.script += "<" + a, n.state = T.SCRIPT);
					continue;
				case T.OPEN_WAKA:
					if (a === "!") n.state = T.SGML_DECL, n.sgmlDecl = "";
					else if (!b(a)) if (C(g, a)) n.state = T.OPEN_TAG, n.tagName = a;
					else if (a === "/") n.state = T.CLOSE_TAG, n.tagName = "";
					else if (a === "?") n.state = T.PROC_INST, n.procInstName = n.procInstBody = "";
					else {
						if (k(n, "Unencoded <"), n.startTagPosition + 1 < n.position) {
							var s = n.position - n.startTagPosition;
							a = Array(s).join(" ") + a;
						}
						n.textNode += "<" + a, n.state = T.TEXT;
					}
					continue;
				case T.SGML_DECL:
					if (n.sgmlDecl + a === "--") {
						n.state = T.COMMENT, n.comment = "", n.sgmlDecl = "";
						continue;
					}
					n.doctype && n.doctype !== !0 && n.sgmlDecl ? (n.state = T.DOCTYPE_DTD, n.doctype += "<!" + n.sgmlDecl + a, n.sgmlDecl = "") : (n.sgmlDecl + a).toUpperCase() === d ? (E(n, "onopencdata"), n.state = T.CDATA, n.sgmlDecl = "", n.cdata = "") : (n.sgmlDecl + a).toUpperCase() === f ? (n.state = T.DOCTYPE, (n.doctype || n.sawRoot) && k(n, "Inappropriately located doctype declaration"), n.doctype = "", n.sgmlDecl = "") : a === ">" ? (E(n, "onsgmldeclaration", n.sgmlDecl), n.sgmlDecl = "", n.state = T.TEXT) : (x(a) && (n.state = T.SGML_DECL_QUOTED), n.sgmlDecl += a);
					continue;
				case T.SGML_DECL_QUOTED:
					a === n.q && (n.state = T.SGML_DECL, n.q = ""), n.sgmlDecl += a;
					continue;
				case T.DOCTYPE:
					a === ">" ? (n.state = T.TEXT, E(n, "ondoctype", n.doctype), n.doctype = !0) : (n.doctype += a, a === "[" ? n.state = T.DOCTYPE_DTD : x(a) && (n.state = T.DOCTYPE_QUOTED, n.q = a));
					continue;
				case T.DOCTYPE_QUOTED:
					n.doctype += a, a === n.q && (n.q = "", n.state = T.DOCTYPE);
					continue;
				case T.DOCTYPE_DTD:
					a === "]" ? (n.doctype += a, n.state = T.DOCTYPE) : a === "<" ? (n.state = T.OPEN_WAKA, n.startTagPosition = n.position) : x(a) ? (n.doctype += a, n.state = T.DOCTYPE_DTD_QUOTED, n.q = a) : n.doctype += a;
					continue;
				case T.DOCTYPE_DTD_QUOTED:
					n.doctype += a, a === n.q && (n.state = T.DOCTYPE_DTD, n.q = "");
					continue;
				case T.COMMENT:
					a === "-" ? n.state = T.COMMENT_ENDING : n.comment += a;
					continue;
				case T.COMMENT_ENDING:
					a === "-" ? (n.state = T.COMMENT_ENDED, n.comment = oe(n.opt, n.comment), n.comment && E(n, "oncomment", n.comment), n.comment = "") : (n.comment += "-" + a, n.state = T.COMMENT);
					continue;
				case T.COMMENT_ENDED:
					a === ">" ? n.state = n.doctype && n.doctype !== !0 ? T.DOCTYPE_DTD : T.TEXT : (k(n, "Malformed comment"), n.comment += "--" + a, n.state = T.COMMENT);
					continue;
				case T.CDATA:
					for (var o = i - 1; a && a !== "]";) a = j(t, i++), a && n.trackPosition && (n.position++, a === "\n" ? (n.line++, n.column = 0) : n.column++);
					n.cdata += t.substring(o, i - 1), a === "]" && (n.state = T.CDATA_ENDING);
					continue;
				case T.CDATA_ENDING:
					a === "]" ? n.state = T.CDATA_ENDING_2 : (n.cdata += "]" + a, n.state = T.CDATA);
					continue;
				case T.CDATA_ENDING_2:
					a === ">" ? (n.cdata && E(n, "oncdata", n.cdata), E(n, "onclosecdata"), n.cdata = "", n.state = T.TEXT) : a === "]" ? n.cdata += "]" : (n.cdata += "]]" + a, n.state = T.CDATA);
					continue;
				case T.PROC_INST:
					a === "?" ? n.state = T.PROC_INST_ENDING : b(a) ? n.state = T.PROC_INST_BODY : n.procInstName += a;
					continue;
				case T.PROC_INST_BODY:
					if (!n.procInstBody && b(a)) continue;
					a === "?" ? n.state = T.PROC_INST_ENDING : n.procInstBody += a;
					continue;
				case T.PROC_INST_ENDING:
					if (a === ">") {
						let e = {
							name: n.procInstName,
							body: n.procInstBody
						};
						ae(n, e), E(n, "onprocessinginstruction", e), n.procInstName = n.procInstBody = "", n.state = T.TEXT;
					} else n.procInstBody += "?" + a, n.state = T.PROC_INST_BODY;
					continue;
				case T.OPEN_TAG:
					C(_, a) ? n.tagName += a : (ce(n), a === ">" ? de(n) : a === "/" ? n.state = T.OPEN_TAG_SLASH : (b(a) || k(n, "Invalid character in tag name"), n.state = T.ATTRIB));
					continue;
				case T.OPEN_TAG_SLASH:
					a === ">" ? (de(n, !0), A(n)) : (k(n, "Forward-slash in opening tag not followed by >"), n.state = T.ATTRIB);
					continue;
				case T.ATTRIB:
					if (b(a)) continue;
					a === ">" ? de(n) : a === "/" ? n.state = T.OPEN_TAG_SLASH : C(g, a) ? (n.attribName = a, n.attribValue = "", n.state = T.ATTRIB_NAME) : k(n, "Invalid attribute name");
					continue;
				case T.ATTRIB_NAME:
					a === "=" ? n.state = T.ATTRIB_VALUE : a === ">" ? (k(n, "Attribute without value"), n.attribValue = n.attribName, ue(n), de(n)) : b(a) ? n.state = T.ATTRIB_NAME_SAW_WHITE : C(_, a) ? n.attribName += a : k(n, "Invalid attribute name");
					continue;
				case T.ATTRIB_NAME_SAW_WHITE:
					if (a === "=") n.state = T.ATTRIB_VALUE;
					else if (b(a)) continue;
					else k(n, "Attribute without value"), n.tag.attributes[n.attribName] = "", n.attribValue = "", E(n, "onattribute", {
						name: n.attribName,
						value: ""
					}), n.attribName = "", a === ">" ? de(n) : C(g, a) ? (n.attribName = a, n.state = T.ATTRIB_NAME) : (k(n, "Invalid attribute name"), n.state = T.ATTRIB);
					continue;
				case T.ATTRIB_VALUE:
					if (b(a)) continue;
					x(a) ? (n.q = a, n.state = T.ATTRIB_VALUE_QUOTED) : (n.opt.unquotedAttributeValues || O(n, "Unquoted attribute value"), n.state = T.ATTRIB_VALUE_UNQUOTED, n.attribValue = a);
					continue;
				case T.ATTRIB_VALUE_QUOTED:
					if (a !== n.q) {
						a === "&" ? n.state = T.ATTRIB_VALUE_ENTITY_Q : n.attribValue += a;
						continue;
					}
					ue(n), n.q = "", n.state = T.ATTRIB_VALUE_CLOSED;
					continue;
				case T.ATTRIB_VALUE_CLOSED:
					b(a) ? n.state = T.ATTRIB : a === ">" ? de(n) : a === "/" ? n.state = T.OPEN_TAG_SLASH : C(g, a) ? (k(n, "No whitespace between attributes"), n.attribName = a, n.attribValue = "", n.state = T.ATTRIB_NAME) : k(n, "Invalid attribute name");
					continue;
				case T.ATTRIB_VALUE_UNQUOTED:
					if (!S(a)) {
						a === "&" ? n.state = T.ATTRIB_VALUE_ENTITY_U : n.attribValue += a;
						continue;
					}
					ue(n), a === ">" ? de(n) : n.state = T.ATTRIB;
					continue;
				case T.CLOSE_TAG:
					if (n.tagName) a === ">" ? A(n) : C(_, a) ? n.tagName += a : n.script ? (n.script += "</" + n.tagName + a, n.tagName = "", n.state = T.SCRIPT) : (b(a) || k(n, "Invalid tagname in closing tag"), n.state = T.CLOSE_TAG_SAW_WHITE);
					else {
						if (b(a)) continue;
						w(g, a) ? n.script ? (n.script += "</" + a, n.state = T.SCRIPT) : k(n, "Invalid tagname in closing tag.") : n.tagName = a;
					}
					continue;
				case T.CLOSE_TAG_SAW_WHITE:
					if (b(a)) continue;
					a === ">" ? A(n) : k(n, "Invalid characters in closing tag");
					continue;
				case T.TEXT_ENTITY:
				case T.ATTRIB_VALUE_ENTITY_Q:
				case T.ATTRIB_VALUE_ENTITY_U:
					var c, l;
					switch (n.state) {
						case T.TEXT_ENTITY:
							c = T.TEXT, l = "textNode";
							break;
						case T.ATTRIB_VALUE_ENTITY_Q:
							c = T.ATTRIB_VALUE_QUOTED, l = "attribValue";
							break;
						case T.ATTRIB_VALUE_ENTITY_U: c = T.ATTRIB_VALUE_UNQUOTED, l = "attribValue";
					}
					if (a === ";") {
						var u = fe(n);
						n.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(u) ? ((n.entityCount += 1) > n.opt.maxEntityCount && O(n, "Parsed entity count exceeds max entity count"), (n.entityDepth += 1) > n.opt.maxEntityDepth && O(n, "Parsed entity depth exceeds max entity depth"), n.entity = "", n.state = c, n.write(u), --n.entityDepth) : (n[l] += u, n.entity = "", n.state = c);
					} else C(n.entity.length ? y : v, a) ? n.entity += a : (k(n, "Invalid character in entity name"), n[l] += "&" + n.entity + a, n.entity = "", n.state = c);
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
	})(e === void 0 ? n.sax = {} : e);
})))(), 1), Ti = {
	lowercase: !1,
	trim: !1,
	normalize: !1,
	position: !1,
	xmlns: !0
};
function Ei() {
	let e = /* @__PURE__ */ new Map();
	function t(t) {
		e = Di({
			pending: e,
			...t
		});
	}
	function n(t) {
		let n = Oi({
			pending: e,
			batch: t.batch
		});
		return e = n.pending, n.batch;
	}
	return {
		register: t,
		resolve: n
	};
}
function Di(e) {
	let { pending: t, parentId: n, child: r } = e;
	return new Map(t).set(n, [...t.get(n) ?? [], r]);
}
function Oi(e) {
	let { pending: t, batch: n } = e;
	if (t.size === 0) return {
		pending: t,
		batch: n
	};
	let r = new Map(t);
	for (let e of n) {
		let t = r.get(e.id);
		t && t.length !== 0 && (e.children.push(...t), r.delete(e.id));
	}
	return {
		pending: r,
		batch: n
	};
}
function ki(e) {
	let { dialecteConfig: t, useCustomRecordsIds: n, hooks: r, importSession: i, perf: a = Y } = e, o = Ei(), s = {
		defaultNamespace: null,
		stack: [],
		recordsBatch: [],
		sawRoot: !1
	}, c = [], l = wi.parser(!0, Ti), u = i?.recordTagNames && new Set(i.recordTagNames);
	l.onopentag = (e) => {
		c.push(Ai({
			node: e,
			state: s,
			dialecteConfig: t,
			useCustomRecordsIds: n
		}));
	}, l.ontext = (e) => {
		ji({
			text: e,
			state: s
		});
	}, l.oncdata = (e) => {
		Mi({
			text: e,
			state: s
		});
	}, l.onclosetag = () => {
		Fi({
			state: s,
			namespaceOf: c.pop(),
			hooks: r,
			importSession: i,
			sessionTags: u,
			pendingChildren: o,
			dialecteConfig: t,
			perf: a
		});
	}, l.onerror = Ii;
	function d() {
		let e = s.recordsBatch;
		return s.recordsBatch = [], o.resolve({ batch: e });
	}
	function f() {
		return s.recordsBatch.length;
	}
	return {
		parser: l,
		drainBatch: d,
		getSize: f
	};
}
function Ai(e) {
	let { node: t, state: n, dialecteConfig: r, useCustomRecordsIds: i } = e, a = Li(t);
	n.stack.length === 0 && (n.sawRoot && f("PARSE_ERROR", {
		detail: `XML parsing error: a second root element <${t.name}> after the root was closed`,
		meta: {
			reason: "second-root",
			tagName: t.name
		}
	}), n.sawRoot = !0), n.defaultNamespace ||= Ri({
		element: t,
		defaultNamespace: r.namespaces.default,
		rootElementName: r.rootElementName
	});
	let o = n.defaultNamespace, s = zi({
		element: t,
		defaultNamespace: o
	}), c = Wi({
		attributes: t.attributes,
		useCustomRecordsIds: i,
		tagName: a
	}), l = Gi({
		attributes: t.attributes,
		useCustomRecordsIds: i
	});
	Vi({
		attributes: t.attributes,
		tagName: a
	});
	function u(e) {
		return Hi({
			node: t,
			prefix: e,
			documentDefault: o
		});
	}
	let d = {
		id: c,
		tagName: a,
		namespace: s,
		attributes: g({
			dialecteConfig: r,
			attributes: Bi(l),
			namespaceOf: u
		}),
		value: "",
		parent: Ui(n.stack),
		children: []
	};
	return n.stack.push(d), u;
}
function ji(e) {
	let { state: n } = e;
	Mi({
		text: t({ text: e.text }),
		state: n
	});
}
function Mi(e) {
	let { text: t, state: n } = e;
	t && n.stack.length > 0 && (n.stack[n.stack.length - 1].value += t);
}
function Ni(e) {
	let { record: t } = e, n = fr({ record: t });
	if (!n) return;
	let r = mr({
		place: n,
		element: `<${t.tagName}>`
	});
	Pi({
		character: n.character,
		where: r
	});
}
function Pi(e) {
	let { character: t, where: n } = e;
	f("PARSE_ERROR", {
		detail: `XML parsing error: ${n} holds ${t}, a character XML does not allow (as written or as a character reference)`,
		meta: {
			reason: "not-xml-character",
			character: t
		}
	});
}
function Fi(e) {
	let { state: t, namespaceOf: n, hooks: r, importSession: i, sessionTags: a, pendingChildren: o, dialecteConfig: s, perf: c = Y } = e, l = t.stack.pop();
	if (!l) return;
	let u = c.time("import::standardize", () => ze({
		dialecteConfig: s,
		hooks: r,
		namespaceOf: n,
		record: l
	})), d = i?.beforeImportRecord;
	d && (!a || a.has(u.tagName)) && c.time("import::hooks.record", () => d({
		record: u,
		ancestry: t.stack
	})), Ni({ record: u });
	let f = t.stack[t.stack.length - 1];
	f ? f.children.push({
		id: u.id,
		tagName: u.tagName
	}) : u.parent && o.register({
		parentId: u.parent.id,
		child: {
			id: u.id,
			tagName: u.tagName
		}
	}), t.recordsBatch.push(u);
}
function Ii(e) {
	f("PARSE_ERROR", {
		detail: `XML parsing error: ${e.message}`,
		meta: {
			reason: "malformed-xml",
			parser: e.message
		}
	});
}
function Li(e) {
	return e.local;
}
function Ri(e) {
	let { element: t, defaultNamespace: n, rootElementName: r } = e;
	return j(t.name === r, { detail: `Expected root element <${r}>, got <${t.name}>` }), t.attributes?.xmlns?.value ? {
		prefix: "",
		uri: t.attributes.xmlns.value
	} : n;
}
function zi(e) {
	let { element: t, defaultNamespace: n } = e;
	if (t.prefix) return {
		prefix: t.prefix,
		uri: t.uri
	};
	let r = t.ns[""];
	return r === void 0 ? n : {
		prefix: "",
		uri: r
	};
}
function Bi(e) {
	return e.filter((e) => e.prefix !== "xmlns").map((e) => {
		let t = e.prefix && e.uri ? {
			prefix: e.prefix,
			uri: e.uri
		} : void 0;
		return {
			name: t ? e.local : e.name,
			value: e.value,
			...t && { namespace: t }
		};
	});
}
function Vi(e) {
	let { attributes: t, tagName: n } = e;
	for (let e of Object.values(t)) {
		if (e.prefix !== "xmlns") continue;
		let t = ur({ text: e.value });
		t && Pi({
			character: t,
			where: `The attribute ${e.name} of <${n}>`
		});
	}
}
function Hi(e) {
	let { node: t, prefix: n, documentDefault: r } = e, i = t.ns[n];
	return i !== void 0 || n !== "" ? i : r.uri;
}
function Ui(e) {
	if (e.length === 0) return null;
	let t = e[e.length - 1];
	return t ? {
		id: t.id,
		tagName: t.tagName
	} : null;
}
function Wi(e) {
	let { attributes: t, useCustomRecordsIds: n, tagName: i } = e, a = t[r];
	if (!n || !a || !a.value) return crypto.randomUUID();
	let o = ur({ text: a.value });
	return o && Pi({
		character: o,
		where: `The attribute ${r} of <${i}>`
	}), a.value;
}
function Gi(e) {
	let { attributes: t, useCustomRecordsIds: n } = e;
	return n ? Object.values(t).filter((e) => e.name !== r) : Object.values(t);
}
async function Ki(e, t = {}) {
	let { file: n, perf: r = Y } = e, i = e.reporter ? void 0 : mi({
		totalBytes: n.size,
		listener: t.onProgress,
		perf: r
	}), a = e.reporter ?? i;
	try {
		return await qi({
			...e,
			reporter: a
		}, t);
	} finally {
		i?.close();
	}
}
async function qi(e, t) {
	let { documentId: n, configKey: r, store: i, config: a, useCustomRecordsIds: o = !1, chunkOptions: s, hooks: c, perf: l = Y, reporter: u } = e, { file: d } = e;
	if (j(ti({ extensions: a.io.supportedFileExtensions }).some((e) => d.name.toLowerCase().endsWith(e)), {
		key: "ASSERTION_FAILED",
		detail: `Unsupported file type: ${d.name}`
	}), d.size === 0) return {
		documentId: n,
		recordCount: 0,
		diagnostics: []
	};
	let f = c?.beforeImport;
	if (f) {
		let e = f(await d.text());
		d = new File([e], d.name, { type: d.type });
	}
	let p = s?.chunkSize ?? 32768, m = s?.batchSize ?? 2e3, h = c?.createImportSession?.({
		documentId: n,
		configKey: r
	}), g = ki({
		dialecteConfig: a,
		useCustomRecordsIds: o,
		hooks: c,
		importSession: h,
		perf: l
	}), _ = await Ji({
		file: d,
		sax: g,
		store: i,
		documentId: n,
		chunkSize: p,
		batchSize: m,
		perf: l,
		control: t,
		reporter: u
	}), { recordDelta: v, diagnostics: y } = await Yi({
		importSession: h,
		store: i,
		documentId: n,
		file: d,
		perf: l,
		signal: t.signal,
		reporter: u
	});
	return {
		documentId: n,
		recordCount: _ + v,
		diagnostics: y
	};
}
async function Ji(e) {
	let { file: t, sax: n, store: r, documentId: i, chunkSize: a, batchSize: o, perf: s, control: c, reporter: l } = e, u = {
		sax: n,
		store: r,
		documentId: i,
		file: t,
		perf: s,
		control: c,
		reporter: l
	}, d = 0, f = 0, p = t.stream().getReader(), m = new TextDecoder(), h = /* @__PURE__ */ new Uint8Array(), g = !1;
	for (; !g;) {
		let e = await p.read();
		if (g = e.done, e.value) {
			let t = h.length === 0 ? e.value : na(h, e.value), r = 0;
			for (; r + a <= t.length;) {
				let e = s.time("import::decode", () => m.decode(t.subarray(r, r + a), { stream: !0 }));
				r += a, f += a, s.time("import::parse", () => n.parser.write(e)), d += await ra({
					...u,
					threshold: o,
					bytesRead: f
				});
			}
			h = r < t.length ? t.slice(r) : /* @__PURE__ */ new Uint8Array();
		}
		if (g) {
			if (h.length > 0) {
				let e = s.time("import::decode", () => m.decode(h));
				f += h.length, s.time("import::parse", () => n.parser.write(e));
			}
			s.time("import::parse", () => n.parser.close()), d += await ra({
				...u,
				threshold: 0,
				bytesRead: f
			});
		}
	}
	return d;
}
async function Yi(e) {
	let { importSession: t, store: n, documentId: r, file: i, perf: a, reporter: o } = e, s = e.signal ?? new AbortController().signal;
	if (ta({
		signal: s,
		file: i
	}), o.tell({
		phase: "processing",
		step: Vr
	}), !t?.afterImport) return {
		recordDelta: 0,
		diagnostics: []
	};
	let { creates: c, updates: l, deletes: u, diagnostics: d = [] } = await Xi({
		afterImport: t.afterImport,
		file: i,
		perf: a,
		signal: s,
		reporter: o
	});
	ta({
		signal: s,
		file: i
	}), Qi({
		diagnostics: d,
		creates: c,
		updates: l,
		reporter: o
	});
	let f = (c?.length ?? 0) + (l?.length ?? 0) + (u?.length ?? 0);
	if (f > 0) {
		ta({
			signal: s,
			file: i
		}), o.tell({
			phase: "applying",
			done: 0,
			total: f
		}), a.start("import::writes.after");
		try {
			await n.writeSession(r, {
				creates: c,
				updates: l,
				deletes: u
			}, { onProgress: function(e) {
				o.tell({
					phase: "applying",
					...e
				});
			} });
		} finally {
			a.stop("import::writes.after");
		}
		o.tell({
			phase: "applying",
			done: f,
			total: f
		});
	}
	return {
		recordDelta: (c?.length ?? 0) - (u?.length ?? 0),
		diagnostics: d
	};
}
async function Xi(e) {
	let { afterImport: t, file: n, perf: r, signal: i, reporter: a } = e, o = {
		report: function(e) {
			i.aborted || a.tell({
				phase: "processing",
				...Zi({ step: e })
			});
		},
		signal: i
	};
	r.start("import::hooks.after");
	try {
		return await t(o);
	} catch (e) {
		throw ta({
			signal: i,
			file: n
		}), e;
	} finally {
		r.stop("import::hooks.after");
	}
}
function Zi(e) {
	let { step: t, done: n, total: r } = e.step;
	return {
		step: String(t),
		...typeof n == "number" && { done: n },
		...typeof r == "number" && { total: r }
	};
}
function Qi(e) {
	let { diagnostics: t, creates: n = [], updates: r = [], reporter: i } = e, a = t.length + n.length + r.length, o = 0;
	i.tell({
		phase: "checking",
		done: o,
		total: a
	});
	for (let e = 0; e < t.length; e += Br) {
		let n = t.slice(e, e + Br);
		$i({
			diagnostics: n,
			offset: e
		}), o += n.length, i.tell({
			phase: "checking",
			done: o,
			total: a
		});
	}
	for (let e = 0; e < n.length; e += Br) {
		let t = n.slice(e, e + Br);
		ea({ creates: t }), o += t.length, i.tell({
			phase: "checking",
			done: o,
			total: a
		});
	}
	for (let e = 0; e < r.length; e += Br) {
		let t = r.slice(e, e + Br);
		ea({ updates: t }), o += t.length, i.tell({
			phase: "checking",
			done: o,
			total: a
		});
	}
}
function $i(e) {
	let { diagnostics: t, offset: n } = e;
	try {
		wt({ value: t });
	} catch (e) {
		let r = `among the diagnostics ${n}-${n + t.length - 1}`;
		f("STORE_VALUE_NOT_JSON", {
			detail: `A diagnostic of the import session: ${b(e)?.detail ?? String(e)} (${r})`,
			cause: e instanceof Error ? e : void 0
		});
	}
}
function ea(e) {
	let { creates: t = [], updates: n = [] } = e;
	for (let e of t) dr({ record: e });
	for (let e of n) dr({ record: {
		...e,
		id: e.recordId
	} });
}
function ta(e) {
	let { signal: t, file: n } = e;
	t?.aborted && f("IMPORT_ABORTED", {
		detail: `The import of "${n.name}" was aborted`,
		meta: { fileName: n.name }
	});
}
function na(e, t) {
	let n = new Uint8Array(e.length + t.length);
	return n.set(e), n.set(t, e.length), n;
}
async function ra(e) {
	let { sax: t, store: n, documentId: r, file: i, threshold: a, perf: o, control: s, reporter: c, bytesRead: l } = e;
	if (t.getSize() < a) return 0;
	ta({
		signal: s.signal,
		file: i
	}), o.start("import::insert");
	let u;
	try {
		let e = t.drainBatch();
		await n.bulkWrite(r, { creates: e }), u = e.length;
	} finally {
		o.stop("import::insert");
	}
	return c.tell({
		phase: "storing",
		bytesRead: l
	}), u;
}
async function ia(e, t = {}) {
	let { runtime: n, file: r, options: i, writeId: a } = e, o = e.perf ?? $t({
		enabled: n.perf ?? !1,
		timeline: !1
	});
	ta({
		signal: t.signal,
		file: r
	});
	let { configKey: s, config: c } = en({
		configs: n.configs,
		defaultConfigKey: n.defaultConfigKey,
		configKey: i?.configKey
	}), l = {
		id: crypto.randomUUID(),
		...aa({
			file: r,
			path: i?.path,
			config: c
		}),
		configKey: s,
		createdAt: Date.now(),
		metadata: i?.metadata,
		status: "importing",
		writeId: a,
		...i?.path !== void 0 && { path: i.path }
	}, u = mi({
		totalBytes: r.size,
		listener: t.onProgress,
		perf: o
	});
	o.start("import");
	let d;
	try {
		d = await oa({
			...e,
			control: t,
			registered: l,
			config: c,
			perf: o,
			reporter: u
		});
	} catch (e) {
		throw b(e) ? e : _("IMPORT_FAILED", {
			detail: e instanceof Error ? e.message : String(e),
			cause: e instanceof Error ? e : void 0
		});
	} finally {
		u.close(), o.stop("import");
	}
	return {
		...d,
		...n.perf && { perf: o.snapshot() }
	};
}
function aa(e) {
	let { file: t, path: n, config: r } = e, i = ti({ extensions: r.io.supportedFileExtensions });
	return n === void 0 ? {
		name: t.name.replace(/\.[^.]+$/, "") || "untitled",
		extension: t.name.includes(".") ? `.${t.name.split(".").pop()}` : i[0]
	} : ni({
		path: n,
		extensions: i
	});
}
async function oa(e) {
	let { store: t, runtime: n, file: r, options: i, control: a, registered: o, config: s, perf: c, reporter: l } = e;
	c.start("import::register");
	try {
		await t.registerDocument(o);
	} finally {
		c.stop("import::register");
	}
	try {
		let e = await Ki({
			file: r,
			documentId: o.id,
			configKey: o.configKey,
			store: t,
			config: s,
			useCustomRecordsIds: i?.useCustomRecordsIds,
			chunkOptions: i?.chunkOptions,
			hooks: n.hooks,
			perf: c,
			reporter: l
		}, a);
		ta({
			signal: a.signal,
			file: r
		}), l.tell({ phase: "finishing" }), c.start("import::finalize");
		try {
			await t.getDocument(o.id) || f("DOCUMENT_NOT_REGISTERED", {
				detail: `Document "${o.id}" of "${r.name}" was removed while it imported`,
				meta: { documentId: o.id }
			}), await t.markReady(o.id);
		} finally {
			c.stop("import::finalize");
		}
		return {
			record: {
				...o,
				status: "ready"
			},
			recordCount: e.recordCount,
			diagnostics: e.diagnostics
		};
	} catch (e) {
		throw await sa({
			store: t,
			documentId: o.id
		}), e;
	}
}
async function sa(e) {
	let { store: t, documentId: n } = e;
	try {
		await t.removeDocument(n);
	} catch {}
}
var ca = {
	import: "IMPORT_FAILED",
	export: "ASSERTION_FAILED"
};
function la(e) {
	let { runtime: t, storeName: n, operation: r } = e;
	return t || f(ca[r], { detail: `Store "${n}" has no dialecte to ${r} with: build it with a runtime` }), t;
}
function ua(e, t) {
	return e.id < t.id ? -1 : +(e.id > t.id);
}
function da(e) {
	return fa({ value: e.first }) === fa({ value: e.second });
}
function fa(e) {
	return JSON.stringify(e.value, function(e, t) {
		return typeof t != "object" || !t || Array.isArray(t) ? t : Object.fromEntries(Object.entries(t).sort(function([e], [t]) {
			return e < t ? -1 : +(e > t);
		}));
	});
}
//#endregion
//#region node_modules/.pnpm/@dialecte+core@0.12.1/node_modules/@dialecte/core/dist/dialecte-DHj8__Ch.js
var pa = {};
function ma() {
	return {};
}
function ha(e) {
	let { id: t, version: n, configs: r, defaultConfigKey: i, extensions: a, createHooks: o } = e;
	if (!Object.hasOwn(r, i)) throw _("UNKNOWN_CONFIG_KEY", {
		detail: `Dialecte "${t}" names "${i}" as its default config, which is none of its configs: ${Object.keys(r).join(", ") || "(none)"}.`,
		meta: {
			id: t,
			defaultConfigKey: i,
			configKeys: Object.keys(r)
		}
	});
	return Object.freeze({
		id: t,
		version: n,
		configs: r,
		defaultConfigKey: i,
		extensions: a ?? pa,
		createHooks: o ?? ma
	});
}
async function ga(e) {
	let { store: t, isRunning: n } = e, r = await t.getDocuments();
	for (let e of r) e.status === "importing" && (await n?.(e) || (await t.getDocument(e.id))?.status === "importing" && await t.removeDocument(e.id));
}
function _a(e) {
	let { held: t, registered: n } = e;
	return !t || !n || t.status !== "importing" ? !1 : t.id === n.id && t.writeId === n.writeId && t.createdAt === n.createdAt;
}
var va = "dialecte:local-open:", ya = "dialecte:local-import:", ba = "writes:", xa = R(), Sa = ut(), Ca = /* @__PURE__ */ new Map(), wa = {
	primaryKey: "id",
	indexes: ["tagName"],
	compoundIndexes: [],
	arrayIndexes: []
}, Ta = /* @__PURE__ */ at((/* @__PURE__ */ rt(((e, t, n) => {
	((n, r) => {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self).Dexie = r();
	})(n, function() {
		var e = function(t, n) {
			return (e = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(e, t) {
				e.__proto__ = t;
			} : function(e, t) {
				for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
			}))(t, n);
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
			return typeof t == "object" && i(t).forEach(function(n) {
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
			var o, s = t.indexOf(".");
			return s === -1 || (o = e[t.substr(0, s)]) == null ? void 0 : b(o, t.substr(s + 1));
		}
		function x(e, t, n) {
			if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
				v(typeof n != "string" && "length" in n);
				for (var r = 0, i = t.length; r < i; ++r) x(e, t[r], n[r]);
			} else {
				var o = t.indexOf(".");
				if (o !== -1) {
					var s = t.substr(0, o), o = t.substr(o + 1);
					if (o === "") n === void 0 ? a(e) && !isNaN(parseInt(s)) ? e.splice(s, 1) : delete e[s] : e[s] = n;
					else {
						var c = e[s];
						if (!c || !l(e, s)) {
							if (n === void 0) return;
							c = e[s] = {};
						}
						x(c, o, n);
					}
				} else n === void 0 ? a(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
			}
		}
		function S(e) {
			var t, n = {};
			for (t in e) l(e, t) && (n[t] = e[t]);
			return n;
		}
		var C = [].concat;
		function w(e) {
			return C.apply([], e);
		}
		var T = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(w([
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
		}), ee = new Set(T.map(function(e) {
			return r[e];
		})), te = null;
		function ne(e) {
			return te = /* @__PURE__ */ new WeakMap(), e = function e(t) {
				if (!t || typeof t != "object") return t;
				var n = te.get(t);
				if (n) return n;
				if (a(t)) {
					n = [], te.set(t, n);
					for (var r = 0, i = t.length; r < i; ++r) n.push(e(t[r]));
				} else if (ee.has(t.constructor)) n = t;
				else {
					var o, c = s(t);
					for (o in n = c === Object.prototype ? {} : Object.create(c), te.set(t, n), t) l(t, o) && (n[o] = e(t[o]));
				}
				return n;
			}(e), te = null, e;
		}
		var re = {}.toString;
		function ie(e) {
			return re.call(e).slice(8, -1);
		}
		var ae = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", E = typeof ae == "symbol" ? function(e) {
			var t;
			return e != null && (t = e[ae]) && t.apply(e);
		} : function() {
			return null;
		};
		function D(e, t) {
			t = e.indexOf(t), 0 <= t && e.splice(t, 1);
		}
		var oe = {};
		function O(e) {
			var t, n, r, i;
			if (arguments.length === 1) {
				if (a(e)) return e.slice();
				if (this === oe && typeof e == "string") return [e];
				if (i = E(e)) for (n = []; !(r = i.next()).done;) n.push(r.value);
				else {
					if (e == null || typeof (t = e.length) != "number") return [e];
					for (n = Array(t); t--;) n[t] = e[t];
				}
			} else for (t = arguments.length, n = Array(t); t--;) n[t] = arguments[t];
			return n;
		}
		var se = typeof Symbol < "u" ? function(e) {
			return e[Symbol.toStringTag] === "AsyncFunction";
		} : function() {
			return !1;
		}, T = [
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
		], k = [
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
		].concat(T), ce = {
			VersionChanged: "Database version changed by other database connection",
			DatabaseClosed: "Database has been closed",
			Abort: "Transaction aborted",
			TransactionInactive: "Transaction has already completed or failed",
			MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
		};
		function le(e, t) {
			this.name = e, this.message = t;
		}
		function ue(e, t) {
			return e + ". Errors: " + Object.keys(t).map(function(e) {
				return t[e].toString();
			}).filter(function(e, t, n) {
				return n.indexOf(e) === t;
			}).join("\n");
		}
		function de(e, t, n, r) {
			this.failures = t, this.failedKeys = r, this.successCount = n, this.message = ue(e, t);
		}
		function A(e, t) {
			this.name = "BulkError", this.failures = Object.keys(t).map(function(e) {
				return t[e];
			}), this.failuresByPos = t, this.message = ue(e, this.failures);
		}
		p(le).from(Error).extend({ toString: function() {
			return this.name + ": " + this.message;
		} }), p(de).from(le), p(A).from(le);
		var fe = k.reduce(function(e, t) {
			return e[t] = t + "Error", e;
		}, {}), pe = le, j = k.reduce(function(e, t) {
			var n = t + "Error";
			function r(e, r) {
				this.name = n, e ? typeof e == "string" ? (this.message = `${e}${r ? "\n " + r : ""}`, this.inner = r || null) : typeof e == "object" && (this.message = `${e.name} ${e.message}`, this.inner = e) : (this.message = ce[t] || n, this.inner = null);
			}
			return p(r).from(pe), e[t] = r, e;
		}, {}), me = (j.Syntax = SyntaxError, j.Type = TypeError, j.Range = RangeError, T.reduce(function(e, t) {
			return e[t + "Error"] = j[t], e;
		}, {}));
		T = k.reduce(function(e, t) {
			return [
				"Syntax",
				"Type",
				"Range"
			].indexOf(t) === -1 && (e[t + "Error"] = j[t]), e;
		}, {});
		function M() {}
		function he(e) {
			return e;
		}
		function ge(e, t) {
			return e == null || e === he ? t : function(n) {
				return t(e(n));
			};
		}
		function _e(e, t) {
			return function() {
				e.apply(this, arguments), t.apply(this, arguments);
			};
		}
		function ve(e, t) {
			return e === M ? t : function() {
				var n = e.apply(this, arguments), r = (n !== void 0 && (arguments[0] = n), this.onsuccess), i = this.onerror, a = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
				return r && (this.onsuccess = this.onsuccess ? _e(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? _e(i, this.onerror) : i), a === void 0 ? n : a;
			};
		}
		function ye(e, t) {
			return e === M ? t : function() {
				e.apply(this, arguments);
				var n = this.onsuccess, r = this.onerror;
				this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? _e(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? _e(r, this.onerror) : r);
			};
		}
		function be(e, t) {
			return e === M ? t : function() {
				var n = e.apply(this, arguments), r = (o(arguments[0], n), this.onsuccess), i = this.onerror, a = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
				return r && (this.onsuccess = this.onsuccess ? _e(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? _e(i, this.onerror) : i), n === void 0 ? a === void 0 ? void 0 : a : o(n, a);
			};
		}
		function xe(e, t) {
			return e === M ? t : function() {
				return !1 !== t.apply(this, arguments) && e.apply(this, arguments);
			};
		}
		function Se(e, t) {
			return e === M ? t : function() {
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
		T.ModifyError = de, T.DexieError = le, T.BulkError = A;
		var Ce = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
		function we(e) {
			Ce = e;
		}
		var Te = {}, Ee = 100, De = typeof Promise > "u" ? [] : (k = Promise.resolve(), typeof crypto < "u" && crypto.subtle ? [
			De = crypto.subtle.digest("SHA-512", new Uint8Array([0])),
			s(De),
			k
		] : [
			k,
			s(k),
			k
		]), k = De[0], Oe = De[1], Oe = Oe && Oe.then, ke = k && k.constructor, Ae = !!De[2], je = function(e, t) {
			Re.push([e, t]), Ne &&= (queueMicrotask(Ke), !1);
		}, Me = !0, Ne = !0, Pe = [], Fe = [], Ie = he, Le = {
			id: "global",
			global: !0,
			ref: 0,
			unhandleds: [],
			onunhandled: M,
			pgp: !1,
			env: {},
			finalize: M
		}, N = Le, Re = [], P = 0, ze = [];
		function F(e) {
			if (typeof this != "object") throw TypeError("Promises must be constructed via new");
			this._listeners = [], this._lib = !1;
			var t = this._PSD = N;
			if (typeof e != "function") {
				if (e !== Te) throw TypeError("Not a function");
				this._state = arguments[1], this._value = arguments[2], !1 === this._state && He(this, this._value);
			} else this._state = null, this._value = null, ++t.ref, function e(t, n) {
				try {
					n(function(n) {
						if (t._state === null) {
							if (n === t) throw TypeError("A promise cannot be resolved with itself.");
							var r = t._lib && qe();
							n && typeof n.then == "function" ? e(t, function(e, t) {
								n instanceof F ? n._then(e, t) : n.then(e, t);
							}) : (t._state = !0, t._value = n, Ue(t)), r && Je();
						}
					}, He.bind(null, t));
				} catch (e) {
					He(t, e);
				}
			}(this, e);
		}
		var Be = {
			get: function() {
				var e = N, t = et;
				function n(n, r) {
					var i = this, a = !e.global && (e !== N || t !== et), o = a && !it(), s = new F(function(t, s) {
						We(i, new Ve(ut(n, e, a, o), ut(r, e, a, o), t, s, e));
					});
					return this._consoleTask && (s._consoleTask = this._consoleTask), s;
				}
				return n.prototype = Te, n;
			},
			set: function(e) {
				f(this, "then", e && e.prototype === Te ? Be : {
					get: function() {
						return e;
					},
					set: Be.set
				});
			}
		};
		function Ve(e, t, n, r, i) {
			this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = i;
		}
		function He(e, t) {
			var n, r;
			Fe.push(t), e._state === null && (n = e._lib && qe(), t = Ie(t), e._state = !1, e._value = t, r = e, Pe.some(function(e) {
				return e._value === r._value;
			}) || Pe.push(r), Ue(e), n) && Je();
		}
		function Ue(e) {
			var t = e._listeners;
			e._listeners = [];
			for (var n = 0, r = t.length; n < r; ++n) We(e, t[n]);
			var i = e._PSD;
			--i.ref || i.finalize(), P === 0 && (++P, je(function() {
				--P == 0 && Ye();
			}, []));
		}
		function We(e, t) {
			if (e._state === null) e._listeners.push(t);
			else {
				var n = e._state ? t.onFulfilled : t.onRejected;
				if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
				++t.psd.ref, ++P, je(Ge, [
					n,
					e,
					t
				]);
			}
		}
		function Ge(e, t, n) {
			try {
				var r, i = t._value;
				!t._state && Fe.length && (Fe = []), r = Ce && t._consoleTask ? t._consoleTask.run(function() {
					return e(i);
				}) : e(i), t._state || Fe.indexOf(i) !== -1 || ((e) => {
					for (var t = Pe.length; t;) if (Pe[--t]._value === e._value) return Pe.splice(t, 1);
				})(t), n.resolve(r);
			} catch (e) {
				n.reject(e);
			} finally {
				--P == 0 && Ye(), --n.psd.ref || n.psd.finalize();
			}
		}
		function Ke() {
			lt(Le, function() {
				qe() && Je();
			});
		}
		function qe() {
			var e = Me;
			return Ne = Me = !1, e;
		}
		function Je() {
			var e, t, n;
			do
				for (; 0 < Re.length;) for (e = Re, Re = [], n = e.length, t = 0; t < n; ++t) {
					var r = e[t];
					r[0].apply(null, r[1]);
				}
			while (0 < Re.length);
			Ne = Me = !0;
		}
		function Ye() {
			for (var e = Pe, t = (Pe = [], e.forEach(function(e) {
				e._PSD.onunhandled.call(null, e._value, e);
			}), ze.slice(0)), n = t.length; n;) t[--n]();
		}
		function Xe(e) {
			return new F(Te, !1, e);
		}
		function I(e, t) {
			var n = N;
			return function() {
				var r = qe(), i = N;
				try {
					return st(n, !0), e.apply(this, arguments);
				} catch (e) {
					t && t(e);
				} finally {
					st(i, !1), r && Je();
				}
			};
		}
		u(F.prototype, {
			then: Be,
			_then: function(e, t) {
				We(this, new Ve(null, null, e, t, N));
			},
			catch: function(e) {
				var t, n;
				return arguments.length === 1 ? this.then(null, e) : (t = e, n = arguments[1], typeof t == "function" ? this.then(null, function(e) {
					return (e instanceof t ? n : Xe)(e);
				}) : this.then(null, function(e) {
					return (e && e.name === t ? n : Xe)(e);
				}));
			},
			finally: function(e) {
				return this.then(function(t) {
					return F.resolve(e()).then(function() {
						return t;
					});
				}, function(t) {
					return F.resolve(e()).then(function() {
						return Xe(t);
					});
				});
			},
			timeout: function(e, t) {
				var n = this;
				return e < Infinity ? new F(function(r, i) {
					var a = setTimeout(function() {
						return i(new j.Timeout(t));
					}, e);
					n.then(r, i).finally(clearTimeout.bind(null, a));
				}) : this;
			}
		}), typeof Symbol < "u" && Symbol.toStringTag && f(F.prototype, Symbol.toStringTag, "Dexie.Promise"), Le.env = ct(), u(F, {
			all: function() {
				var e = O.apply(null, arguments).map(at);
				return new F(function(t, n) {
					e.length === 0 && t([]);
					var r = e.length;
					e.forEach(function(i, a) {
						return F.resolve(i).then(function(n) {
							e[a] = n, --r || t(e);
						}, n);
					});
				});
			},
			resolve: function(e) {
				return e instanceof F ? e : e && typeof e.then == "function" ? new F(function(t, n) {
					e.then(t, n);
				}) : new F(Te, !0, e);
			},
			reject: Xe,
			race: function() {
				var e = O.apply(null, arguments).map(at);
				return new F(function(t, n) {
					e.map(function(e) {
						return F.resolve(e).then(t, n);
					});
				});
			},
			PSD: {
				get: function() {
					return N;
				},
				set: function(e) {
					return N = e;
				}
			},
			totalEchoes: { get: function() {
				return et;
			} },
			newPSD: nt,
			usePSD: lt,
			scheduler: {
				get: function() {
					return je;
				},
				set: function(e) {
					je = e;
				}
			},
			rejectionMapper: {
				get: function() {
					return Ie;
				},
				set: function(e) {
					Ie = e;
				}
			},
			follow: function(e, t) {
				return new F(function(n, r) {
					return nt(function(t, n) {
						var r = N;
						r.unhandleds = [], r.onunhandled = n, r.finalize = _e(function() {
							var e, r = this;
							e = function() {
								r.unhandleds.length === 0 ? t() : n(r.unhandleds[0]);
							}, ze.push(function t() {
								e(), ze.splice(ze.indexOf(t), 1);
							}), ++P, je(function() {
								--P == 0 && Ye();
							}, []);
						}, r.finalize), e();
					}, t, n, r);
				});
			}
		}), ke && (ke.allSettled && f(F, "allSettled", function() {
			var e = O.apply(null, arguments).map(at);
			return new F(function(t) {
				e.length === 0 && t([]);
				var n = e.length, r = Array(n);
				e.forEach(function(e, i) {
					return F.resolve(e).then(function(e) {
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
		}), ke.any && typeof AggregateError < "u" && f(F, "any", function() {
			var e = O.apply(null, arguments).map(at);
			return new F(function(t, n) {
				e.length === 0 && n(/* @__PURE__ */ AggregateError([]));
				var r = e.length, i = Array(r);
				e.forEach(function(e, a) {
					return F.resolve(e).then(function(e) {
						return t(e);
					}, function(e) {
						i[a] = e, --r || n(AggregateError(i));
					});
				});
			});
		}), ke.withResolvers) && (F.withResolvers = ke.withResolvers);
		var L = {
			awaits: 0,
			echoes: 0,
			id: 0
		}, Ze = 0, Qe = [], $e = 0, et = 0, tt = 0;
		function nt(e, t, n, r) {
			var i = N, a = Object.create(i), t = (a.parent = i, a.ref = 0, a.global = !1, a.id = ++tt, Le.env, a.env = Ae ? {
				Promise: F,
				PromiseProp: {
					value: F,
					configurable: !0,
					writable: !0
				},
				all: F.all,
				race: F.race,
				allSettled: F.allSettled,
				any: F.any,
				resolve: F.resolve,
				reject: F.reject
			} : {}, t && o(a, t), ++i.ref, a.finalize = function() {
				--this.parent.ref || this.parent.finalize();
			}, lt(a, e, n, r));
			return a.ref === 0 && a.finalize(), t;
		}
		function rt() {
			return L.id ||= ++Ze, ++L.awaits, L.echoes += Ee, L.id;
		}
		function it() {
			return !!L.awaits && (--L.awaits == 0 && (L.id = 0), L.echoes = L.awaits * Ee, !0);
		}
		function at(e) {
			return L.echoes && e && e.constructor === ke ? (rt(), e.then(function(e) {
				return it(), e;
			}, function(e) {
				return it(), R(e);
			})) : e;
		}
		function ot() {
			var e = Qe[Qe.length - 1];
			Qe.pop(), st(e, !1);
		}
		function st(e, t) {
			var n, i, a = N;
			(t ? !L.echoes || $e++ && e === N : !$e || --$e && e === N) || queueMicrotask(t ? function(e) {
				++et, L.echoes && --L.echoes != 0 || (L.echoes = L.awaits = L.id = 0), Qe.push(N), st(e, !0);
			}.bind(null, e) : ot), e !== N && (N = e, a === Le && (Le.env = ct()), Ae) && (n = Le.env.Promise, i = e.env, a.global || e.global) && (Object.defineProperty(r, "Promise", i.PromiseProp), n.all = i.all, n.race = i.race, n.resolve = i.resolve, n.reject = i.reject, i.allSettled && (n.allSettled = i.allSettled), i.any) && (n.any = i.any);
		}
		function ct() {
			var e = r.Promise;
			return Ae ? {
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
		function lt(e, t, n, r, i) {
			var a = N;
			try {
				return st(e, !0), t(n, r, i);
			} finally {
				st(a, !1);
			}
		}
		function ut(e, t, n, r) {
			return typeof e == "function" ? function() {
				var i = N;
				n && rt(), st(t, !0);
				try {
					return e.apply(this, arguments);
				} finally {
					st(i, !1), r && queueMicrotask(it);
				}
			} : e;
		}
		function dt(e) {
			Promise === ke && L.echoes === 0 ? $e === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
		}
		("" + Oe).indexOf("[native code]") === -1 && (rt = it = M);
		var R = F.reject, ft = "￿", pt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", mt = "String expected.", ht = "__dbnames", gt = "readonly", _t = "readwrite";
		function vt(e, t) {
			return e ? t ? function() {
				return e.apply(this, arguments) && t.apply(this, arguments);
			} : e : t;
		}
		var yt = {
			type: 3,
			lower: -Infinity,
			lowerOpen: !1,
			upper: [[]],
			upperOpen: !1
		};
		function bt(e) {
			return typeof e != "string" || /\./.test(e) ? function(e) {
				return e;
			} : function(t) {
				return t[e] === void 0 && e in t && delete (t = ne(t))[e], t;
			};
		}
		function xt() {
			throw j.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
		}
		function z(e, t) {
			try {
				var n = St(e), r = St(t);
				if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r === "Date" ? -1 : NaN;
				switch (n) {
					case "number":
					case "Date":
					case "string": return t < e ? 1 : e < t ? -1 : 0;
					case "binary":
						for (var i = Ct(e), a = Ct(t), o = i.length, s = a.length, c = o < s ? o : s, l = 0; l < c; ++l) if (i[l] !== a[l]) return i[l] < a[l] ? -1 : 1;
						return o === s ? 0 : o < s ? -1 : 1;
					case "Array":
						for (var u = e, d = t, f = u.length, p = d.length, m = f < p ? f : p, h = 0; h < m; ++h) {
							var g = z(u[h], d[h]);
							if (g !== 0) return g;
						}
						return f === p ? 0 : f < p ? -1 : 1;
				}
			} catch {}
			return NaN;
		}
		function St(e) {
			var t = typeof e;
			return t == "object" && (ArrayBuffer.isView(e) || (t = ie(e)) === "ArrayBuffer") ? "binary" : t;
		}
		function Ct(e) {
			return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
		}
		function wt(e, t, n) {
			var r = e.schema.yProps;
			return r ? (t && 0 < n.numFailures && (t = t.filter(function(e, t) {
				return !n.failures[t];
			})), Promise.all(r.map(function(n) {
				return n = n.updatesTable, t ? e.db.table(n).where("k").anyOf(t).delete() : e.db.table(n).clear();
			})).then(function() {
				return n;
			})) : n;
		}
		Et.prototype.execute = function(e) {
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
		};
		var Tt = Et;
		function Et(e) {
			this["@@propmod"] = e;
		}
		function Dt(e, t) {
			for (var n = i(t), r = n.length, a = !1, o = 0; o < r; ++o) {
				var s = n[o], c = t[s], l = b(e, s);
				c instanceof Tt ? (x(e, s, c.execute(l)), a = !0) : l !== c && (x(e, s, c), a = !0);
			}
			return a;
		}
		B.prototype._trans = function(e, t, n) {
			var r = this._tx || N.trans, i = this.name, a = Ce && typeof console < "u" && console.createTask && console.createTask(`Dexie: ${e === "readonly" ? "read" : "write"} ${this.name}`);
			function o(e, n, r) {
				if (r.schema[i]) return t(r.idbtrans, r);
				throw new j.NotFound("Table " + i + " not part of transaction");
			}
			var s = qe();
			try {
				var c = r && r.db._novip === this.db._novip ? r === N.trans ? r._promise(e, o, n) : nt(function() {
					return r._promise(e, o, n);
				}, {
					trans: r,
					transless: N.transless || N
				}) : function e(t, n, r, i) {
					if (t.idbdb && (t._state.openComplete || N.letThrough || t._vip)) {
						var a = t._createTransaction(n, r, t._dbSchema);
						try {
							a.create(), t._state.PR1398_maxLoop = 3;
						} catch (a) {
							return a.name === fe.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
								return e(t, n, r, i);
							})) : R(a);
						}
						return a._promise(n, function(e, t) {
							return nt(function() {
								return N.trans = a, i(e, t, a);
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
					if (t._state.openComplete) return R(new j.DatabaseClosed(t._state.dbOpenError));
					if (!t._state.isBeingOpened) {
						if (!t._state.autoOpen) return R(new j.DatabaseClosed());
						t.open().catch(M);
					}
					return t._state.dbReadyPromise.then(function() {
						return e(t, n, r, i);
					});
				}(this.db, e, [this.name], o);
				return a && (c._consoleTask = a, c = c.catch(function(e) {
					return console.trace(e), R(e);
				})), c;
			} finally {
				s && Je();
			}
		}, B.prototype.get = function(e, t) {
			var n = this;
			return e && e.constructor === Object ? this.where(e).first(t) : e == null ? R(new j.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(t) {
				return n.core.get({
					trans: t,
					key: e
				}).then(function(e) {
					return n.hook.reading.fire(e);
				});
			}).then(t);
		}, B.prototype.where = function(e) {
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
			if (n && this.db._maxKey !== ft) return s = n.keyPath.slice(0, t.length), this.where(s).equals(s.map(function(t) {
				return e[t];
			}));
			!n && Ce && console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit from a compound index [${t.join("+")}]`);
			var r = this.schema.idxByName;
			function o(e, t) {
				return z(e, t) === 0;
			}
			var s = t.reduce(function(t, n) {
				var i = t[0], t = t[1], s = r[n], c = e[n];
				return [i || s, i || !s ? vt(t, s && s.multi ? function(e) {
					return e = b(e, n), a(e) && e.some(function(e) {
						return o(c, e);
					});
				} : function(e) {
					return o(c, b(e, n));
				}) : t];
			}, [null, null]), c = s[0], s = s[1];
			return c ? this.where(c.name).equals(e[c.keyPath]).filter(s) : n ? this.filter(s) : this.where(t).equals("");
		}, B.prototype.filter = function(e) {
			return this.toCollection().and(e);
		}, B.prototype.count = function(e) {
			return this.toCollection().count(e);
		}, B.prototype.offset = function(e) {
			return this.toCollection().offset(e);
		}, B.prototype.limit = function(e) {
			return this.toCollection().limit(e);
		}, B.prototype.each = function(e) {
			return this.toCollection().each(e);
		}, B.prototype.toArray = function(e) {
			return this.toCollection().toArray(e);
		}, B.prototype.toCollection = function() {
			return new this.db.Collection(new this.db.WhereClause(this));
		}, B.prototype.orderBy = function(e) {
			return new this.db.Collection(new this.db.WhereClause(this, a(e) ? `[${e.join("+")}]` : e));
		}, B.prototype.reverse = function() {
			return this.toCollection().reverse();
		}, B.prototype.mapToClass = function(t) {
			for (var n = this.db, r = this.name, i = ((this.schema.mappedClass = t).prototype instanceof xt && (t = ((t) => {
				var i = s, a = t;
				if (typeof a != "function" && a !== null) throw TypeError("Class extends value " + String(a) + " is not a constructor or null");
				function o() {
					this.constructor = i;
				}
				function s() {
					return t !== null && t.apply(this, arguments) || this;
				}
				return e(i, a), i.prototype = a === null ? Object.create(a) : (o.prototype = a.prototype, new o()), Object.defineProperty(s.prototype, "db", {
					get: function() {
						return n;
					},
					enumerable: !1,
					configurable: !0
				}), s.prototype.table = function() {
					return r;
				}, s;
			})(t)), /* @__PURE__ */ new Set()), a = t.prototype; a; a = s(a)) Object.getOwnPropertyNames(a).forEach(function(e) {
				return i.add(e);
			});
			function o(e) {
				if (!e) return e;
				var n, r = Object.create(t.prototype);
				for (n in e) if (!i.has(n)) try {
					r[n] = e[n];
				} catch {}
				return r;
			}
			return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = o, this.hook("reading", o), t;
		}, B.prototype.defineClass = function() {
			return this.mapToClass(function(e) {
				o(this, e);
			});
		}, B.prototype.add = function(e, t) {
			var n = this, r = this.schema.primKey, i = r.auto, a = r.keyPath, o = e;
			return a && i && (o = bt(a)(e)), this._trans("readwrite", function(e) {
				return n.core.mutate({
					trans: e,
					type: "add",
					keys: t == null ? null : [t],
					values: [o]
				});
			}).then(function(e) {
				return e.numFailures ? F.reject(e.failures[0]) : e.lastResult;
			}).then(function(t) {
				if (a) try {
					x(e, a, t);
				} catch {}
				return t;
			});
		}, B.prototype.upsert = function(e, t) {
			var n = this, r = this.schema.primKey.keyPath;
			return this._trans("readwrite", function(i) {
				return n.core.get({
					trans: i,
					key: e
				}).then(function(a) {
					var o = a ?? {};
					return Dt(o, t), r && x(o, r, e), n.core.mutate({
						trans: i,
						type: "put",
						values: [o],
						keys: [e],
						upsert: !0,
						updates: {
							keys: [e],
							changeSpecs: [t]
						}
					}).then(function(e) {
						return e.numFailures ? F.reject(e.failures[0]) : !!a;
					});
				});
			});
		}, B.prototype.update = function(e, t) {
			return typeof e != "object" || a(e) ? this.where(":id").equals(e).modify(t) : (e = b(e, this.schema.primKey.keyPath)) === void 0 ? R(new j.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t);
		}, B.prototype.put = function(e, t) {
			var n = this, r = this.schema.primKey, i = r.auto, a = r.keyPath, o = e;
			return a && i && (o = bt(a)(e)), this._trans("readwrite", function(e) {
				return n.core.mutate({
					trans: e,
					type: "put",
					values: [o],
					keys: t == null ? null : [t]
				});
			}).then(function(e) {
				return e.numFailures ? F.reject(e.failures[0]) : e.lastResult;
			}).then(function(t) {
				if (a) try {
					x(e, a, t);
				} catch {}
				return t;
			});
		}, B.prototype.delete = function(e) {
			var t = this;
			return this._trans("readwrite", function(n) {
				return t.core.mutate({
					trans: n,
					type: "delete",
					keys: [e]
				}).then(function(n) {
					return wt(t, [e], n);
				}).then(function(e) {
					return e.numFailures ? F.reject(e.failures[0]) : void 0;
				});
			});
		}, B.prototype.clear = function() {
			var e = this;
			return this._trans("readwrite", function(t) {
				return e.core.mutate({
					trans: t,
					type: "deleteRange",
					range: yt
				}).then(function(t) {
					return wt(e, null, t);
				});
			}).then(function(e) {
				return e.numFailures ? F.reject(e.failures[0]) : void 0;
			});
		}, B.prototype.bulkGet = function(e) {
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
		}, B.prototype.bulkAdd = function(e, t, n) {
			var r = this, i = Array.isArray(t) ? t : void 0, a = (n ||= i ? void 0 : t) ? n.allKeys : void 0;
			return this._trans("readwrite", function(t) {
				var n = r.schema.primKey, o = n.auto, n = n.keyPath;
				if (n && i) throw new j.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
				if (i && i.length !== e.length) throw new j.InvalidArgument("Arguments objects and keys must have the same length");
				var s = e.length, o = n && o ? e.map(bt(n)) : e;
				return r.core.mutate({
					trans: t,
					type: "add",
					keys: i,
					values: o,
					wantResults: a
				}).then(function(e) {
					var t = e.numFailures, n = e.failures;
					if (t === 0) return a ? e.results : e.lastResult;
					throw new A(`${r.name}.bulkAdd(): ${t} of ${s} operations failed`, n);
				});
			});
		}, B.prototype.bulkPut = function(e, t, n) {
			var r = this, i = Array.isArray(t) ? t : void 0, a = (n ||= i ? void 0 : t) ? n.allKeys : void 0;
			return this._trans("readwrite", function(t) {
				var n = r.schema.primKey, o = n.auto, n = n.keyPath;
				if (n && i) throw new j.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
				if (i && i.length !== e.length) throw new j.InvalidArgument("Arguments objects and keys must have the same length");
				var s = e.length, o = n && o ? e.map(bt(n)) : e;
				return r.core.mutate({
					trans: t,
					type: "put",
					keys: i,
					values: o,
					wantResults: a
				}).then(function(e) {
					var t = e.numFailures, n = e.failures;
					if (t === 0) return a ? e.results : e.lastResult;
					throw new A(`${r.name}.bulkPut(): ${t} of ${s} operations failed`, n);
				});
			});
		}, B.prototype.bulkUpdate = function(e) {
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
					var c = [], l = [], u = (e.forEach(function(e, n) {
						var r = e.key, i = e.changes, o = s[n];
						if (o) {
							for (var u = 0, d = Object.keys(i); u < d.length; u++) {
								var f = d[u], p = i[f];
								if (f === t.schema.primKey.keyPath) {
									if (z(p, r) !== 0) throw new j.Constraint("Cannot update primary key in bulkUpdate()");
								} else x(o, f, p);
							}
							a.push(n), c.push(r), l.push(o);
						}
					}), c.length);
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
						throw new A(`${t.name}.bulkUpdate(): ${n} of ${u} operations failed`, r);
					});
				});
			});
		}, B.prototype.bulkDelete = function(e) {
			var t = this, n = e.length;
			return this._trans("readwrite", function(n) {
				return t.core.mutate({
					trans: n,
					type: "delete",
					keys: e
				}).then(function(n) {
					return wt(t, e, n);
				});
			}).then(function(e) {
				var r = e.numFailures, i = e.failures;
				if (r === 0) return e.lastResult;
				throw new A(`${t.name}.bulkDelete(): ${r} of ${n} operations failed`, i);
			});
		};
		var Ot = B;
		function B() {}
		function kt(e) {
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
				var c, l;
				if (typeof e != "object") return r ||= xe, l = {
					subscribers: [],
					fire: o ||= M,
					subscribe: function(e) {
						l.subscribers.indexOf(e) === -1 && (l.subscribers.push(e), l.fire = r(l.fire, e));
					},
					unsubscribe: function(e) {
						l.subscribers = l.subscribers.filter(function(t) {
							return t !== e;
						}), l.fire = l.subscribers.reduce(r, o);
					}
				}, n[e] = t[e] = l;
				i(c = e).forEach(function(e) {
					var t = c[e];
					if (a(t)) s(e, c[e][0], c[e][1]);
					else {
						if (t !== "asap") throw new j.InvalidArgument("Invalid event config");
						var n = s(e, he, function() {
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
		function At(e, t) {
			return p(t).from({ prototype: e }), t;
		}
		function jt(e, t) {
			return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
		}
		function Mt(e, t) {
			e.filter = vt(e.filter, t);
		}
		function Nt(e, t, n) {
			var r = e.replayFilter;
			e.replayFilter = r ? function() {
				return vt(r(), t());
			} : t, e.justLimit = n && !r;
		}
		function Pt(e, t) {
			if (e.isPrimKey) return t.primaryKey;
			var n = t.getIndexByKeyPath(e.index);
			if (n) return n;
			throw new j.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
		}
		function Ft(e, t, n) {
			var r = Pt(e, t.schema);
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
		function It(e, t, n, r) {
			var i, a, o = e.replayFilter ? vt(e.filter, e.replayFilter()) : e.filter;
			return e.or ? (i = {}, a = function(e, n, r) {
				var a, s;
				o && !o(n, r, function(e) {
					return n.stop(e);
				}, function(e) {
					return n.fail(e);
				}) || ((s = "" + (a = n.primaryKey)) == "[object ArrayBuffer]" && (s = "" + new Uint8Array(a)), l(i, s)) || (i[s] = !0, t(e, n, r));
			}, Promise.all([e.or._iterate(a, n), Lt(Ft(e, r, n), e.algorithm, a, !e.keysOnly && e.valueMapper)])) : Lt(Ft(e, r, n), vt(e.algorithm, o), t, !e.keysOnly && e.valueMapper);
		}
		function Lt(e, t, n, r) {
			var i = I(r ? function(e, t, i) {
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
						e.stop(t), n = M;
					}, function(t) {
						e.fail(t), n = M;
					}) || i(e.value, e, function(e) {
						return n = e;
					}), n();
				});
			});
		}
		V.prototype._read = function(e, t) {
			var n = this._ctx;
			return n.error ? n.table._trans(null, R.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
		}, V.prototype._write = function(e) {
			var t = this._ctx;
			return t.error ? t.table._trans(null, R.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
		}, V.prototype._addAlgorithm = function(e) {
			var t = this._ctx;
			t.algorithm = vt(t.algorithm, e);
		}, V.prototype._iterate = function(e, t) {
			return It(this._ctx, e, t, this._ctx.table.core);
		}, V.prototype.clone = function(e) {
			var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
			return e && o(n, e), t._ctx = n, t;
		}, V.prototype.raw = function() {
			return this._ctx.valueMapper = null, this;
		}, V.prototype.each = function(e) {
			var t = this._ctx;
			return this._read(function(n) {
				return It(t, e, n, t.table.core);
			});
		}, V.prototype.count = function(e) {
			var t = this;
			return this._read(function(e) {
				var n, r = t._ctx, i = r.table.core;
				return jt(r, !0) ? i.count({
					trans: e,
					query: {
						index: Pt(r, i.schema),
						range: r.range
					}
				}).then(function(e) {
					return Math.min(e, r.limit);
				}) : (n = 0, It(r, function() {
					return ++n, !1;
				}, e, i).then(function() {
					return n;
				}));
			}).then(e);
		}, V.prototype.sortBy = function(e, t) {
			var n = e.split(".").reverse(), r = n[0], i = n.length - 1;
			function a(e, t) {
				return t ? a(e[n[t]], t - 1) : e[r];
			}
			var o = this._ctx.dir === "next" ? 1 : -1;
			function s(e, t) {
				return z(a(e, i), a(t, i)) * o;
			}
			return this.toArray(function(e) {
				return e.slice().sort(s);
			}).then(t);
		}, V.prototype.toArray = function(e) {
			var t = this;
			return this._read(function(e) {
				var n, r, i, a = t._ctx;
				return jt(a, !0) && 0 < a.limit ? (n = a.valueMapper, r = Pt(a, a.table.core.schema), a.table.core.query({
					trans: e,
					limit: a.limit,
					values: !0,
					direction: a.dir === "prev" ? "prev" : void 0,
					query: {
						index: r,
						range: a.range
					}
				}).then(function(e) {
					return e = e.result, n ? e.map(n) : e;
				})) : (i = [], It(a, function(e) {
					return i.push(e);
				}, e, a.table.core).then(function() {
					return i;
				}));
			}, e);
		}, V.prototype.offset = function(e) {
			var t = this._ctx;
			return e <= 0 || (t.offset += e, jt(t) ? Nt(t, function() {
				var t = e;
				return function(e, n) {
					return t === 0 || (t === 1 ? --t : n(function() {
						e.advance(t), t = 0;
					}), !1);
				};
			}) : Nt(t, function() {
				var t = e;
				return function() {
					return --t < 0;
				};
			})), this;
		}, V.prototype.limit = function(e) {
			return this._ctx.limit = Math.min(this._ctx.limit, e), Nt(this._ctx, function() {
				var t = e;
				return function(e, n, r) {
					return --t <= 0 && n(r), 0 <= t;
				};
			}, !0), this;
		}, V.prototype.until = function(e, t) {
			return Mt(this._ctx, function(n, r, i) {
				return !e(n.value) || (r(i), t);
			}), this;
		}, V.prototype.first = function(e) {
			return this.limit(1).toArray(function(e) {
				return e[0];
			}).then(e);
		}, V.prototype.last = function(e) {
			return this.reverse().first(e);
		}, V.prototype.filter = function(e) {
			var t;
			return Mt(this._ctx, function(t) {
				return e(t.value);
			}), (t = this._ctx).isMatch = vt(t.isMatch, e), this;
		}, V.prototype.and = function(e) {
			return this.filter(e);
		}, V.prototype.or = function(e) {
			return new this.db.WhereClause(this._ctx.table, e, this);
		}, V.prototype.reverse = function() {
			return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
		}, V.prototype.desc = function() {
			return this.reverse();
		}, V.prototype.eachKey = function(e) {
			var t = this._ctx;
			return t.keysOnly = !t.isMatch, this.each(function(t, n) {
				e(n.key, n);
			});
		}, V.prototype.eachUniqueKey = function(e) {
			return this._ctx.unique = "unique", this.eachKey(e);
		}, V.prototype.eachPrimaryKey = function(e) {
			var t = this._ctx;
			return t.keysOnly = !t.isMatch, this.each(function(t, n) {
				e(n.primaryKey, n);
			});
		}, V.prototype.keys = function(e) {
			var t = this._ctx, n = (t.keysOnly = !t.isMatch, []);
			return this.each(function(e, t) {
				n.push(t.key);
			}).then(function() {
				return n;
			}).then(e);
		}, V.prototype.primaryKeys = function(e) {
			var t = this._ctx;
			if (jt(t, !0) && 0 < t.limit) return this._read(function(e) {
				var n = Pt(t, t.table.core.schema);
				return t.table.core.query({
					trans: e,
					values: !1,
					limit: t.limit,
					direction: t.dir === "prev" ? "prev" : void 0,
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
		}, V.prototype.uniqueKeys = function(e) {
			return this._ctx.unique = "unique", this.keys(e);
		}, V.prototype.firstKey = function(e) {
			return this.limit(1).keys(function(e) {
				return e[0];
			}).then(e);
		}, V.prototype.lastKey = function(e) {
			return this.reverse().firstKey(e);
		}, V.prototype.distinct = function() {
			var e, t = this._ctx, t = t.index && t.table.schema.idxByName[t.index];
			return t && t.multi && (e = {}, Mt(this._ctx, function(t) {
				var t = t.primaryKey.toString(), n = l(e, t);
				return e[t] = !0, !n;
			})), this;
		}, V.prototype.modify = function(e) {
			var t = this, n = this._ctx;
			return this._write(function(r) {
				function a(e, t) {
					var n = t.failures;
					p += e - t.numFailures;
					for (var r = 0, a = i(n); r < a.length; r++) {
						var o = a[r];
						f.push(n[o]);
					}
				}
				var o = typeof e == "function" ? e : function(t) {
					return Dt(t, e);
				}, s = n.table.core, c = s.schema.primaryKey, l = c.outbound, u = c.extractKey, d = 200, c = t.db._options.modifyChunkSize, f = (c && (d = typeof c == "object" ? c[s.name] || c["*"] || 200 : c), []), p = 0, m = [], h = e === zt;
				return t.clone().primaryKeys().then(function(t) {
					function i(f) {
						var p = Math.min(d, t.length - f), m = t.slice(f, f + p);
						return (h ? Promise.resolve([]) : s.getMany({
							trans: r,
							keys: m,
							cache: "immutable"
						})).then(function(g) {
							var _ = [], v = [], y = l ? [] : null, b = h ? m : [];
							if (!h) for (var x = 0; x < p; ++x) {
								var S = g[x], C = {
									value: ne(S),
									primKey: t[f + x]
								};
								!1 !== o.call(C, C.value, C) && (C.value == null ? b.push(t[f + x]) : l || z(u(S), u(C.value)) === 0 ? (v.push(C.value), l && y.push(t[f + x])) : (b.push(t[f + x]), _.push(C.value)));
							}
							return Promise.resolve(0 < _.length && s.mutate({
								trans: r,
								type: "add",
								values: _
							}).then(function(e) {
								for (var t in e.failures) b.splice(parseInt(t), 1);
								a(_.length, e);
							})).then(function() {
								return (0 < v.length || c && typeof e == "object") && s.mutate({
									trans: r,
									type: "put",
									keys: y,
									values: v,
									criteria: c,
									changeSpec: typeof e != "function" && e,
									isAdditionalChunk: 0 < f
								}).then(function(e) {
									return a(v.length, e);
								});
							}).then(function() {
								return (0 < b.length || c && h) && s.mutate({
									trans: r,
									type: "delete",
									keys: b,
									criteria: c,
									isAdditionalChunk: 0 < f
								}).then(function(e) {
									return wt(n.table, b, e);
								}).then(function(e) {
									return a(b.length, e);
								});
							}).then(function() {
								return t.length > f + p && i(f + d);
							});
						});
					}
					var c = jt(n) && n.limit === Infinity && (typeof e != "function" || h) && {
						index: n.index,
						range: n.range
					};
					return i(0).then(function() {
						if (0 < f.length) throw new de("Error modifying one or more objects", f, p, m);
						return t.length;
					});
				});
			});
		}, V.prototype.delete = function() {
			var e = this._ctx, t = e.range;
			return !jt(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(zt) : this._write(function(n) {
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
						if (e) throw new de("Could not delete some values", Object.keys(n).map(function(e) {
							return n[e];
						}), t - e);
						return t - e;
					});
				});
			});
		};
		var Rt = V;
		function V() {}
		var zt = function(e, t) {
			return t.value = null;
		};
		function Bt(e, t) {
			return e < t ? -1 : e === t ? 0 : 1;
		}
		function Vt(e, t) {
			return t < e ? -1 : e === t ? 0 : 1;
		}
		function H(e, t, n) {
			return e = e instanceof G ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
		}
		function Ht(e) {
			return new e.Collection(e, function() {
				return W("");
			}).limit(0);
		}
		function Ut(e, t, n, r) {
			var i, a, o, s, c, l, u, d = n.length;
			if (!n.every(function(e) {
				return typeof e == "string";
			})) return H(e, mt);
			function f(e) {
				i = e === "next" ? function(e) {
					return e.toUpperCase();
				} : function(e) {
					return e.toLowerCase();
				}, a = e === "next" ? function(e) {
					return e.toLowerCase();
				} : function(e) {
					return e.toUpperCase();
				}, o = e === "next" ? Bt : Vt;
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
			f("next");
			var e = new e.Collection(e, function() {
				return U(s[0], c[d - 1] + r);
			}), p = (e._ondirectionchange = function(e) {
				f(e);
			}, 0);
			return e._addAlgorithm(function(e, n, r) {
				var i = e.key;
				if (typeof i == "string") {
					var f = a(i);
					if (t(f, c, p)) return !0;
					for (var m = null, h = p; h < d; ++h) {
						var g = ((e, t, n, r, i, a) => {
							for (var o = Math.min(e.length, r.length), s = -1, c = 0; c < o; ++c) {
								var l = t[c];
								if (l !== r[c]) return i(e[c], n[c]) < 0 ? e.substr(0, c) + n[c] + n.substr(c + 1) : i(e[c], r[c]) < 0 ? e.substr(0, c) + r[c] + n.substr(c + 1) : 0 <= s ? e.substr(0, s) + t[s] + n.substr(s + 1) : null;
								i(e[c], l) < 0 && (s = c);
							}
							return o < r.length && a === "next" ? e + n.substr(e.length) : o < e.length && a === "prev" ? e.substr(0, n.length) : s < 0 ? null : e.substr(0, s) + r[s] + n.substr(s + 1);
						})(i, f, s[h], c[h], o, l);
						g === null && m === null ? p = h + 1 : (m === null || 0 < o(m, g)) && (m = g);
					}
					n(m === null ? r : function() {
						e.continue(m + u);
					});
				}
				return !1;
			}), e;
		}
		function U(e, t, n, r) {
			return {
				type: 2,
				lower: e,
				upper: t,
				lowerOpen: n,
				upperOpen: r
			};
		}
		function W(e) {
			return {
				type: 1,
				lower: e,
				upper: e
			};
		}
		Object.defineProperty(K.prototype, "Collection", {
			get: function() {
				return this._ctx.table.db.Collection;
			},
			enumerable: !1,
			configurable: !0
		}), K.prototype.between = function(e, t, n, r) {
			n = !1 !== n, r = !0 === r;
			try {
				return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? Ht(this) : new this.Collection(this, function() {
					return U(e, t, !n, !r);
				});
			} catch {
				return H(this, pt);
			}
		}, K.prototype.equals = function(e) {
			return e == null ? H(this, pt) : new this.Collection(this, function() {
				return W(e);
			});
		}, K.prototype.above = function(e) {
			return e == null ? H(this, pt) : new this.Collection(this, function() {
				return U(e, void 0, !0);
			});
		}, K.prototype.aboveOrEqual = function(e) {
			return e == null ? H(this, pt) : new this.Collection(this, function() {
				return U(e, void 0, !1);
			});
		}, K.prototype.below = function(e) {
			return e == null ? H(this, pt) : new this.Collection(this, function() {
				return U(void 0, e, !1, !0);
			});
		}, K.prototype.belowOrEqual = function(e) {
			return e == null ? H(this, pt) : new this.Collection(this, function() {
				return U(void 0, e);
			});
		}, K.prototype.startsWith = function(e) {
			return typeof e == "string" ? this.between(e, e + ft, !0, !0) : H(this, mt);
		}, K.prototype.startsWithIgnoreCase = function(e) {
			return e === "" ? this.startsWith(e) : Ut(this, function(e, t) {
				return e.indexOf(t[0]) === 0;
			}, [e], ft);
		}, K.prototype.equalsIgnoreCase = function(e) {
			return Ut(this, function(e, t) {
				return e === t[0];
			}, [e], "");
		}, K.prototype.anyOfIgnoreCase = function() {
			var e = O.apply(oe, arguments);
			return e.length === 0 ? Ht(this) : Ut(this, function(e, t) {
				return t.indexOf(e) !== -1;
			}, e, "");
		}, K.prototype.startsWithAnyOfIgnoreCase = function() {
			var e = O.apply(oe, arguments);
			return e.length === 0 ? Ht(this) : Ut(this, function(e, t) {
				return t.some(function(t) {
					return e.indexOf(t) === 0;
				});
			}, e, ft);
		}, K.prototype.anyOf = function() {
			var e, t, n = this, r = O.apply(oe, arguments), i = this._cmp;
			try {
				r.sort(i);
			} catch {
				return H(this, pt);
			}
			return r.length === 0 ? Ht(this) : ((e = new this.Collection(this, function() {
				return U(r[0], r[r.length - 1]);
			}))._ondirectionchange = function(e) {
				i = e === "next" ? n._ascending : n._descending, r.sort(i);
			}, t = 0, e._addAlgorithm(function(e, n, a) {
				for (var o = e.key; 0 < i(o, r[t]);) if (++t === r.length) return n(a), !1;
				return i(o, r[t]) === 0 || (n(function() {
					e.continue(r[t]);
				}), !1);
			}), e);
		}, K.prototype.notEqual = function(e) {
			return this.inAnyRange([[-Infinity, e], [e, this.db._maxKey]], {
				includeLowers: !1,
				includeUppers: !1
			});
		}, K.prototype.noneOf = function() {
			var e = O.apply(oe, arguments);
			if (e.length === 0) return new this.Collection(this);
			try {
				e.sort(this._ascending);
			} catch {
				return H(this, pt);
			}
			var t = e.reduce(function(e, t) {
				return e ? e.concat([[e[e.length - 1][1], t]]) : [[-Infinity, t]];
			}, null);
			return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, {
				includeLowers: !1,
				includeUppers: !1
			});
		}, K.prototype.inAnyRange = function(e, t) {
			var n = this, r = this._cmp, i = this._ascending, a = this._descending, o = this._min, s = this._max;
			if (e.length === 0) return Ht(this);
			if (!e.every(function(e) {
				return e[0] !== void 0 && e[1] !== void 0 && i(e[0], e[1]) <= 0;
			})) return H(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", j.InvalidArgument);
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
				return H(this, pt);
			}
			var p = 0, m = l ? function(e) {
				return 0 < i(e, u[p][1]);
			} : function(e) {
				return 0 <= i(e, u[p][1]);
			}, h = c ? function(e) {
				return 0 < a(e, u[p][0]);
			} : function(e) {
				return 0 <= a(e, u[p][0]);
			}, g = m, t = new this.Collection(this, function() {
				return U(u[0][0], u[u.length - 1][1], !c, !l);
			});
			return t._ondirectionchange = function(e) {
				d = e === "next" ? (g = m, i) : (g = h, a), u.sort(f);
			}, t._addAlgorithm(function(e, t, r) {
				for (var a, o = e.key; g(o);) if (++p === u.length) return t(r), !1;
				return !m(a = o) && !h(a) || (n._cmp(o, u[p][1]) === 0 || n._cmp(o, u[p][0]) === 0 || t(function() {
					d === i ? e.continue(u[p][0]) : e.continue(u[p][1]);
				}), !1);
			}), t;
		}, K.prototype.startsWithAnyOf = function() {
			var e = O.apply(oe, arguments);
			return e.every(function(e) {
				return typeof e == "string";
			}) ? e.length === 0 ? Ht(this) : this.inAnyRange(e.map(function(e) {
				return [e, e + ft];
			})) : H(this, "startsWithAnyOf() only works with strings");
		};
		var G = K;
		function K() {}
		function q(e) {
			return I(function(t) {
				return J(t), e(t.target.error), !1;
			});
		}
		function J(e) {
			e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
		}
		var Wt = "storagemutated", Gt = "x-storagemutated-1", Kt = kt(null, Wt), qt = (Jt.prototype._lock = function() {
			return v(!N.global), ++this._reculock, this._reculock !== 1 || N.global || (N.lockOwnerFor = this), this;
		}, Jt.prototype._unlock = function() {
			if (v(!N.global), --this._reculock == 0) for (N.global || (N.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked();) {
				var e = this._blockedFuncs.shift();
				try {
					lt(e[1], e[0]);
				} catch {}
			}
			return this;
		}, Jt.prototype._locked = function() {
			return this._reculock && N.lockOwnerFor !== this;
		}, Jt.prototype.create = function(e) {
			var t = this;
			if (this.mode) {
				var n = this.db.idbdb, r = this.db._state.dbOpenError;
				if (v(!this.idbtrans), !e && !n) switch (r && r.name) {
					case "DatabaseClosedError": throw new j.DatabaseClosed(r);
					case "MissingAPIError": throw new j.MissingAPI(r.message, r);
					default: throw new j.OpenFailed(r);
				}
				if (!this.active) throw new j.TransactionInactive();
				v(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = I(function(n) {
					J(n), t._reject(e.error);
				}), e.onabort = I(function(n) {
					J(n), t.active && t._reject(new j.Abort(e.error)), t.active = !1, t.on("abort").fire(n);
				}), e.oncomplete = I(function() {
					t.active = !1, t._resolve(), "mutatedParts" in e && Kt.storagemutated.fire(e.mutatedParts);
				});
			}
			return this;
		}, Jt.prototype._promise = function(e, t, n) {
			var r, i = this;
			return e === "readwrite" && this.mode !== "readwrite" ? R(new j.ReadOnly("Transaction is readonly")) : this.active ? this._locked() ? new F(function(r, a) {
				i._blockedFuncs.push([function() {
					i._promise(e, t, n).then(r, a);
				}, N]);
			}) : n ? nt(function() {
				var e = new F(function(e, n) {
					i._lock();
					var r = t(e, n, i);
					r && r.then && r.then(e, n);
				});
				return e.finally(function() {
					return i._unlock();
				}), e._lib = !0, e;
			}) : ((r = new F(function(e, n) {
				var r = t(e, n, i);
				r && r.then && r.then(e, n);
			}))._lib = !0, r) : R(new j.TransactionInactive());
		}, Jt.prototype._root = function() {
			return this.parent ? this.parent._root() : this;
		}, Jt.prototype.waitFor = function(e) {
			var t, n = this._root(), r = F.resolve(e), i = (n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
				return r;
			}) : (n._waitingFor = r, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), function e() {
				for (++n._spinCount; n._waitingQueue.length;) n._waitingQueue.shift()();
				n._waitingFor && (t.get(-Infinity).onsuccess = e);
			}()), n._waitingFor);
			return new F(function(e, t) {
				r.then(function(t) {
					return n._waitingQueue.push(I(e.bind(null, t)));
				}, function(e) {
					return n._waitingQueue.push(I(t.bind(null, e)));
				}).finally(function() {
					n._waitingFor === i && (n._waitingFor = null);
				});
			});
		}, Jt.prototype.abort = function() {
			this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new j.Abort()));
		}, Jt.prototype.table = function(e) {
			var t = this._memoizedTables ||= {};
			if (l(t, e)) return t[e];
			var n = this.schema[e];
			if (n) return (n = new this.db.Table(e, n, this)).core = this.db.core.table(e), t[e] = n;
			throw new j.NotFound("Table " + e + " not part of transaction");
		}, Jt);
		function Jt() {}
		function Yt(e, t, n, r, i, a, o, s) {
			return {
				name: e,
				keyPath: t,
				unique: n,
				multi: r,
				auto: i,
				compound: a,
				src: (n && !o ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + Xt(t),
				type: s
			};
		}
		function Xt(e) {
			return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
		}
		function Zt(e, t, n) {
			return {
				name: e,
				primKey: t,
				indexes: n,
				mappedClass: null,
				idxByName: (r = function(e) {
					return [e.name, e];
				}, n.reduce(function(e, t, n) {
					return t = r(t, n), t && (e[t[0]] = t[1]), e;
				}, {}))
			};
			var r;
		}
		var Y = function(e) {
			try {
				return e.only([[]]), Y = function() {
					return [[]];
				}, [[]];
			} catch {
				return Y = function() {
					return ft;
				}, ft;
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
				var t, n, i = e.name;
				return {
					name: i,
					schema: e,
					mutate: function(e) {
						var t = e.trans, n = e.type, a = e.keys, o = e.values, s = e.range;
						return new Promise(function(e, c) {
							e = I(e);
							var l = t.objectStore(i), u = l.keyPath == null, d = n === "put" || n === "add";
							if (!d && n !== "delete" && n !== "deleteRange") throw Error("Invalid operation type: " + n);
							var f, p = (a || o || { length: 1 }).length;
							if (a && o && a.length !== o.length) throw Error("Given keys array must have same length as given values array.");
							if (p === 0) return e({
								numFailures: 0,
								failures: {},
								results: [],
								lastResult: void 0
							});
							function m(e) {
								++_, J(e);
							}
							var h = [], g = [], _ = 0;
							if (n === "deleteRange") {
								if (s.type === 4) return e({
									numFailures: _,
									failures: g,
									results: [],
									lastResult: void 0
								});
								s.type === 3 ? h.push(f = l.clear()) : h.push(f = l.delete(r(s)));
							} else {
								var u = d ? u ? [o, a] : [o, null] : [a, null], v = u[0], y = u[1];
								if (d) for (var b = 0; b < p; ++b) h.push(f = y && y[b] !== void 0 ? l[n](v[b], y[b]) : l[n](v[b])), f.onerror = m;
								else for (b = 0; b < p; ++b) h.push(f = l[n](v[b])), f.onerror = m;
							}
							function x(t) {
								t = t.target.result, h.forEach(function(e, t) {
									return e.error != null && (g[t] = e.error);
								}), e({
									numFailures: _,
									failures: g,
									results: n === "delete" ? a : h.map(function(e) {
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
						var t = e.trans, n = e.keys;
						return new Promise(function(e, r) {
							e = I(e);
							for (var a, o = t.objectStore(i), s = n.length, c = Array(s), l = 0, u = 0, d = function(t) {
								t = t.target, c[t._pos] = t.result, ++u === l && e(c);
							}, f = q(r), p = 0; p < s; ++p) n[p] != null && ((a = o.get(n[p]))._pos = p, a.onsuccess = d, a.onerror = f, ++l);
							l === 0 && e(c);
						});
					},
					get: function(e) {
						var t = e.trans, n = e.key;
						return new Promise(function(e, r) {
							e = I(e);
							var a = t.objectStore(i).get(n);
							a.onsuccess = function(t) {
								return e(t.target.result);
							}, a.onerror = q(r);
						});
					},
					query: (t = c, n = l, function(e) {
						return new Promise(function(a, o) {
							a = I(a);
							var s, c, l, u, d = e.trans, f = e.values, p = e.limit, m = e.query, h = (h = e.direction) ?? "next", g = p === Infinity ? void 0 : p, _ = m.index, m = m.range, d = d.objectStore(i), d = _.isPrimaryKey ? d : d.index(_.name), _ = r(m);
							if (p === 0) return a({ result: [] });
							n ? (m = {
								query: _,
								count: g,
								direction: h
							}, (s = f ? d.getAll(m) : d.getAllKeys(m)).onsuccess = function(e) {
								return a({ result: e.target.result });
							}, s.onerror = q(o)) : t && h === "next" ? ((s = f ? d.getAll(_, g) : d.getAllKeys(_, g)).onsuccess = function(e) {
								return a({ result: e.target.result });
							}, s.onerror = q(o)) : (c = 0, l = !f && "openKeyCursor" in d ? d.openKeyCursor(_, h) : d.openCursor(_, h), u = [], l.onsuccess = function() {
								var e = l.result;
								return !e || (u.push(f ? e.value : e.primaryKey), ++c === p) ? a({ result: u }) : void e.continue();
							}, l.onerror = q(o));
						});
					}),
					openCursor: function(e) {
						var t = e.trans, n = e.values, a = e.query, o = e.reverse, s = e.unique;
						return new Promise(function(e, c) {
							e = I(e);
							var l = a.index, u = a.range, d = t.objectStore(i), d = l.isPrimaryKey ? d : d.index(l.name), l = o ? s ? "prevunique" : "prev" : s ? "nextunique" : "next", f = !n && "openKeyCursor" in d ? d.openKeyCursor(r(u), l) : d.openCursor(r(u), l);
							f.onerror = q(c), f.onsuccess = I(function(n) {
								var r, i, a, o, s = f.result;
								s ? (s.___id = ++en, s.done = !1, r = s.continue.bind(s), i = (i = s.continuePrimaryKey) && i.bind(s), a = s.advance.bind(s), o = function() {
									throw Error("Cursor not stopped");
								}, s.trans = t, s.stop = s.continue = s.continuePrimaryKey = s.advance = function() {
									throw Error("Cursor not started");
								}, s.fail = I(c), s.next = function() {
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
										e = I(e), f.onerror = q(t), s.fail = t, s.stop = function(t) {
											s.stop = s.continue = s.continuePrimaryKey = s.advance = o, e(t);
										};
									});
									return f.onsuccess = I(function(e) {
										f.onsuccess = t, t();
									}), s.continue = r, s.continuePrimaryKey = i, s.advance = a, t(), n;
								}, e(s)) : e(null);
							}, c);
						});
					},
					count: function(e) {
						var t = e.query, n = e.trans, a = t.index, o = t.range;
						return new Promise(function(e, t) {
							var s = n.objectStore(i), s = a.isPrimaryKey ? s : s.index(a.name), c = r(o), c = c ? s.count(c) : s.count();
							c.onsuccess = I(function(t) {
								return e(t.target.result);
							}), c.onerror = q(t);
						});
					}
				};
			}
			o = n, s = $t((n = e).objectStoreNames), u = 0 < s.length ? o.objectStore(s[0]) : {};
			var o, n = {
				schema: {
					name: n.name,
					tables: s.map(function(e) {
						return o.objectStore(e);
					}).map(function(e) {
						var t = e.keyPath, n = e.autoIncrement, r = a(t), i = {}, r = {
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
								var t = e.name, n = e.unique, r = e.multiEntry, e = e.keyPath, t = {
									name: t,
									compound: a(e),
									keyPath: e,
									unique: n,
									multiEntry: r,
									extractKey: Qt(e)
								};
								return i[tn(e)] = t;
							}),
							getIndexByKeyPath: function(e) {
								return i[tn(e)];
							}
						};
						return i[":id"] = r.primaryKey, t != null && (i[tn(t)] = r.primaryKey), r;
					})
				},
				hasGetAll: 0 < s.length && "getAll" in u && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604),
				hasIdb3Features: "getAllRecords" in u
			}, s = n.schema, c = n.hasGetAll, l = n.hasIdb3Features, u = s.tables.map(i), d = {};
			return u.forEach(function(e) {
				return d[e.name] = e;
			}), {
				stack: "dbcore",
				transaction: e.transaction.bind(e),
				table: function(e) {
					if (d[e]) return d[e];
					throw Error(`Table '${e}' not found`);
				},
				MIN_KEY: -Infinity,
				MAX_KEY: Y(t),
				schema: s
			};
		}
		function rn(e, n, r, i) {
			return r = r.IDBKeyRange, n = nn(n, r, i), { dbcore: e.dbcore.reduce(function(e, n) {
				return n = n.create, t(t({}, e), n(e));
			}, n) };
		}
		function an(e, t) {
			var n = t.db, n = rn(e._middlewares, n, e._deps, t);
			e.core = n.dbcore, e.tables.forEach(function(t) {
				var n = t.name;
				e.core.schema.tables.some(function(e) {
					return e.name === n;
				}) && (t.core = e.core.table(n), e[n] instanceof e.Table) && (e[n].core = t.core);
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
			var a = e._dbSchema, o = (n.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = Zt("$meta", _n("")[0], []), e._storeNames.push("$meta")), e._createTransaction("readwrite", e._storeNames, a)), s = (o.create(n), o._completion.catch(r), o._reject.bind(o)), c = N.transless || N;
			nt(function() {
				if (N.trans = o, N.transless = c, t !== 0) return an(e, n), l = t, ((r = o).storeNames.includes("$meta") ? r.table("$meta").get("version").then(function(e) {
					return e ?? l;
				}) : F.resolve(l)).then(function(t) {
					var r = e, a = t, s = o, c = n, l = [], t = r._versions, u = r._dbSchema = hn(0, r.idbdb, c);
					return (t = t.filter(function(e) {
						return e._cfg.version >= a;
					})).length === 0 ? F.resolve() : (t.forEach(function(e) {
						l.push(function() {
							var t, n, o, l = u, d = e._cfg.dbschema, f = (gn(r, l, c), gn(r, d, c), u = r._dbSchema = d, dn(l, d)), p = (f.add.forEach(function(e) {
								fn(c, e[0], e[1].primKey, e[1].indexes);
							}), f.change.forEach(function(e) {
								if (e.recreate) throw new j.Upgrade("Not yet support for changing primary key");
								var t = c.objectStore(e.name);
								e.add.forEach(function(e) {
									return mn(t, e);
								}), e.change.forEach(function(e) {
									t.deleteIndex(e.name), mn(t, e);
								}), e.del.forEach(function(e) {
									return t.deleteIndex(e);
								});
							}), e._cfg.contentUpgrade);
							if (p && e._cfg.version > a) return an(r, c), s._memoizedTables = {}, t = S(d), f.del.forEach(function(e) {
								t[e] = l[e];
							}), sn(r, [r.Transaction.prototype]), on(r, [r.Transaction.prototype], i(t), t), s.schema = t, (n = se(p)) && rt(), d = F.follow(function() {
								var e;
								(o = p(s)) && n && (e = it.bind(null, null), o.then(e, e));
							}), o && typeof o.then == "function" ? F.resolve(o) : d.then(function() {
								return o;
							});
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
						return l.length ? F.resolve(l.shift()(s.idbtrans)).then(e) : F.resolve();
					}().then(function() {
						pn(u, c);
					}));
				}).catch(s);
				var r, l;
				i(a).forEach(function(e) {
					fn(n, e, a[e].primKey, a[e].indexes);
				}), an(e, n), F.follow(function() {
					return e.on.populate.fire(o);
				}).catch(s);
			});
		}
		function un(e, t) {
			pn(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
			var n = hn(0, e.idbdb, t);
			gn(e, e._dbSchema, t);
			for (var r = 0, i = dn(n, e._dbSchema).change; r < i.length; r++) {
				var a = ((e) => {
					if (e.change.length || e.recreate) return console.warn(`Unable to patch indexes of table ${e.name} because it has changes on the type of index or primary key.`), { value: void 0 };
					var n = t.objectStore(e.name);
					e.add.forEach(function(t) {
						Ce && console.debug(`Dexie upgrade patch: Creating missing index ${e.name}.${t.src}`), mn(n, t);
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
			r.forEach(function(e) {
				return mn(i, e);
			});
		}
		function pn(e, t) {
			i(e).forEach(function(n) {
				t.db.objectStoreNames.contains(n) || (Ce && console.debug("Dexie: Creating missing table", n), fn(t, n, e[n].primKey, e[n].indexes));
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
				for (var t = n.objectStore(e), i = Yt(Xt(c = t.keyPath), c || "", !0, !1, !!t.autoIncrement, c && typeof c != "string", !0), a = [], o = 0; o < t.indexNames.length; ++o) {
					var s = t.index(t.indexNames[o]), c = s.keyPath, s = Yt(s.name, c, !!s.unique, !!s.multiEntry, !1, c && typeof c != "string", !1);
					a.push(s);
				}
				r[e] = Zt(e, i, a);
			}), r;
		}
		function gn(e, t, n) {
			for (var i = n.db.objectStoreNames, a = 0; a < i.length; ++a) {
				var o = i[a], s = n.objectStore(o);
				e._hasGetAll = "getAll" in s;
				for (var c = 0; c < s.indexNames.length; ++c) {
					var l, u = s.indexNames[c], d = s.index(u).keyPath, d = typeof d == "string" ? d : "[" + g(d).join("+") + "]";
					t[o] && (l = t[o].idxByName[d]) && (l.name = u, delete t[o].idxByName[d], t[o].idxByName[u] = l);
				}
			}
			typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && r.WorkerGlobalScope && r instanceof r.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
		}
		function _n(e) {
			return e.split(",").map(function(e, t) {
				var n = e.split(":"), r = (r = n[1])?.trim(), n = (e = n[0].trim()).replace(/([&*]|\+\+)/g, ""), i = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
				return Yt(n, i || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), a(i), t === 0, r);
			});
		}
		yn.prototype._createTableSchema = Zt, yn.prototype._parseIndexSyntax = _n, yn.prototype._parseStoresSpec = function(e, t) {
			var n = this;
			i(e).forEach(function(r) {
				if (e[r] !== null) {
					var i = n._parseIndexSyntax(e[r]), a = i.shift();
					if (!a) throw new j.Schema("Invalid schema for table " + r + ": " + e[r]);
					if (a.unique = !0, a.multi) throw new j.Schema("Primary key cannot be multiEntry*");
					i.forEach(function(e) {
						if (e.auto) throw new j.Schema("Only primary key can be marked as autoIncrement (++)");
						if (!e.keyPath) throw new j.Schema("Index must have a name and cannot be an empty string");
					}), a = n._createTableSchema(r, a, i), t[r] = a;
				}
			});
		}, yn.prototype.stores = function(e) {
			var t = this.db, e = (this._cfg.storesSource = this._cfg.storesSource ? o(this._cfg.storesSource, e) : e, t._versions), n = {}, r = {};
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
			return this._cfg.contentUpgrade = Se(this._cfg.contentUpgrade || M, e), this;
		};
		var vn = yn;
		function yn() {}
		var bn = (() => {
			var e, t, n;
			return typeof FinalizationRegistry < "u" && typeof WeakRef < "u" ? (e = /* @__PURE__ */ new Set(), t = new FinalizationRegistry(function(t) {
				e.delete(t);
			}), {
				toArray: function() {
					return Array.from(e).map(function(e) {
						return e.deref();
					}).filter(function(e) {
						return e !== void 0;
					});
				},
				add: function(n) {
					var r = new WeakRef(n._novip);
					e.add(r), t.register(n._novip, r, r), e.size > n._options.maxConnections && (r = e.values().next().value, e.delete(r), t.unregister(r));
				},
				remove: function(n) {
					if (n) for (var r = e.values(), i = r.next(); !i.done;) {
						var a = i.value;
						if (a.deref() === n._novip) return e.delete(a), void t.unregister(a);
						i = r.next();
					}
				}
			}) : (n = [], {
				toArray: function() {
					return n;
				},
				add: function(e) {
					n.push(e._novip);
				},
				remove: function(e) {
					e && (e = n.indexOf(e._novip)) !== -1 && n.splice(e, 1);
				}
			});
		})();
		function xn(e, t) {
			var n = e._dbNamesDB;
			return n || (n = e._dbNamesDB = new ar(ht, {
				addons: [],
				indexedDB: e,
				IDBKeyRange: t
			})).version(1).stores({ dbnames: "name" }), n.table("dbnames");
		}
		function Sn(e) {
			return e && typeof e.databases == "function";
		}
		function Cn(e) {
			return nt(function() {
				return N.letThrough = !0, e();
			});
		}
		function wn(e) {
			return !("from" in e);
		}
		var X = function(e, t) {
			var n;
			if (!this) return n = new X(), e && "d" in e && o(n, e), n;
			o(this, arguments.length ? {
				d: 1,
				from: e,
				to: 1 < arguments.length ? t : e
			} : { d: 0 });
		};
		function Tn(e, t, n) {
			var r = z(t, n);
			if (!isNaN(r)) {
				if (0 < r) throw RangeError();
				if (wn(e)) return o(e, {
					from: t,
					to: n,
					d: 1
				});
				var r = e.l, i = e.r;
				if (z(n, e.from) < 0) return r ? Tn(r, t, n) : e.l = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, kn(e);
				if (0 < z(t, e.to)) return i ? Tn(i, t, n) : e.r = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, kn(e);
				z(t, e.from) < 0 && (e.from = t, e.l = null, e.d = i ? i.d + 1 : 1), 0 < z(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), t = !e.r, r && !e.l && En(e, r), i && t && En(e, i);
			}
		}
		function En(e, t) {
			wn(t) || function e(t, n) {
				var r = n.from, i = n.l, a = n.r;
				Tn(t, r, n.to), i && e(t, i), a && e(t, a);
			}(e, t);
		}
		function Dn(e, t) {
			var n = On(t), r = n.next();
			if (!r.done) for (var i = r.value, a = On(e), o = a.next(i.from), s = o.value; !r.done && !o.done;) {
				if (z(s.from, i.to) <= 0 && 0 <= z(s.to, i.from)) return !0;
				z(i.from, s.from) < 0 ? i = (r = n.next(s.from)).value : s = (o = a.next(i.from)).value;
			}
			return !1;
		}
		function On(e) {
			var t = wn(e) ? null : {
				s: 0,
				n: e
			};
			return { next: function(e) {
				for (var n = 0 < arguments.length; t;) switch (t.s) {
					case 0: if (t.s = 1, n) for (; t.n.l && z(e, t.n.from) < 0;) t = {
						up: t,
						n: t.n.l,
						s: 1
					};
					else for (; t.n.l;) t = {
						up: t,
						n: t.n.l,
						s: 1
					};
					case 1: if (t.s = 2, !n || z(e, t.n.to) <= 0) return {
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
		function kn(e) {
			var n, r, i, a = ((a = e.r)?.d || 0) - ((a = e.l)?.d || 0), a = 1 < a ? "r" : a < -1 ? "l" : "";
			a && (n = a == "r" ? "l" : "r", r = t({}, e), i = e[a], e.from = i.from, e.to = i.to, e[a] = i[a], r[a] = i[n], (e[n] = r).d = An(r)), e.d = An(e);
		}
		function An(e) {
			var t = e.r, e = e.l;
			return (t ? e ? Math.max(t.d, e.d) : t.d : e ? e.d : 0) + 1;
		}
		function jn(e, t) {
			return i(t).forEach(function(n) {
				e[n] ? En(e[n], t[n]) : e[n] = function e(t) {
					var n, r, i = {};
					for (n in t) l(t, n) && (r = t[n], i[n] = !r || typeof r != "object" || ee.has(r.constructor) ? r : e(r));
					return i;
				}(t[n]);
			}), e;
		}
		function Mn(e, t) {
			return e.all || t.all || Object.keys(e).some(function(n) {
				return t[n] && Dn(t[n], e[n]);
			});
		}
		u(X.prototype, ((k = {
			add: function(e) {
				return En(this, e), this;
			},
			addKey: function(e) {
				return Tn(this, e, e), this;
			},
			addKeys: function(e) {
				var t = this;
				return e.forEach(function(e) {
					return Tn(t, e, e);
				}), this;
			},
			hasKey: function(e) {
				var t = On(this).next(e).value;
				return t && z(t.from, e) <= 0 && 0 <= z(t.to, e);
			}
		})[ae] = function() {
			return On(this);
		}, k));
		var Nn = {}, Pn = {}, Fn = !1;
		function In(e) {
			jn(Pn, e), Fn || (Fn = !0, setTimeout(function() {
				Fn = !1, Ln(Pn, !(Pn = {}));
			}, 0));
		}
		function Ln(e, t) {
			t === void 0 && (t = !1);
			var n = /* @__PURE__ */ new Set();
			if (e.all) for (var r = 0, i = Object.values(Nn); r < i.length; r++) Rn(s = i[r], e, n, t);
			else for (var a in e) {
				var o, s, a = /^idb\:\/\/(.*)\/(.*)\//.exec(a);
				a && (o = a[1], a = a[2], s = Nn[`idb://${o}/${a}`]) && Rn(s, e, n, t);
			}
			n.forEach(function(e) {
				return e();
			});
		}
		function Rn(e, t, n, r) {
			for (var i = [], a = 0, o = Object.entries(e.queries.query); a < o.length; a++) {
				for (var s = o[a], c = s[0], l = [], u = 0, d = s[1]; u < d.length; u++) {
					var f = d[u];
					Mn(t, f.obsSet) ? f.subscribers.forEach(function(e) {
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
				return t.dbOpenError ? R(t.dbOpenError) : e;
			});
			t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
			var r = t.openCanceller, a = Math.round(10 * e.verno), o = !1;
			function s() {
				if (t.openCanceller !== r) throw new j.DatabaseClosed("db.open() was cancelled");
			}
			function c() {
				return new F(function(r, l) {
					if (s(), !n) throw new j.MissingAPI();
					var u = e.name, p = t.autoSchema || !a ? n.open(u) : n.open(u, a);
					if (!p) throw new j.MissingAPI();
					p.onerror = q(l), p.onblocked = I(e._fireOnBlocked), p.onupgradeneeded = I(function(r) {
						var i;
						d = p.transaction, t.autoSchema && !e._options.allowEmptyDB ? (p.onerror = J, d.abort(), p.result.close(), (i = n.deleteDatabase(u)).onsuccess = i.onerror = I(function() {
							l(new j.NoSuchDatabase(`Database ${u} doesnt exist`));
						})) : (d.onerror = q(l), i = r.oldVersion > 2 ** 62 ? 0 : r.oldVersion, f = i < 1, e.idbdb = p.result, o && un(e, d), ln(e, i / 10, d, l));
					}, l), p.onsuccess = I(function() {
						d = null;
						var n, s, l, m, h, _, v = e.idbdb = p.result, y = g(v.objectStoreNames);
						if (0 < y.length) try {
							var b = v.transaction((h = y).length === 1 ? h[0] : h, "readonly");
							if (t.autoSchema) _ = v, m = b, (l = e).verno = _.version / 10, m = l._dbSchema = hn(0, _, m), l._storeNames = g(_.objectStoreNames, 0), on(l, [l._allTables], i(m), m);
							else if (gn(e, e._dbSchema, b), s = b, ((s = dn(hn(0, (n = e).idbdb, s), n._dbSchema)).add.length || s.change.some(function(e) {
								return e.add.length || e.change.length;
							})) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), v.close(), a = v.version + 1, o = !0, r(c());
							an(e, b);
						} catch {}
						bn.add(e), v.onversionchange = I(function(n) {
							t.vcFired = !0, e.on("versionchange").fire(n);
						}), v.onclose = I(function() {
							e.close({ disableAutoOpen: !1 });
						}), f && (y = e._deps, h = u, Sn(_ = y.indexedDB) || h === ht || xn(_, y.IDBKeyRange).put({ name: h }).catch(M)), r();
					}, l);
				}).catch(function(e) {
					switch (e?.name) {
						case "UnknownError":
							if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), c();
							break;
						case "VersionError": if (0 < a) return a = 0, c();
					}
					return F.reject(e);
				});
			}
			var l, u = t.dbReadyResolve, d = null, f = !1;
			return F.race([r, (typeof navigator > "u" ? F.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(e) {
				function t() {
					return indexedDB.databases().finally(e);
				}
				l = setInterval(t, 100), t();
			}).finally(function() {
				return clearInterval(l);
			}) : Promise.resolve()).then(c)]).then(function() {
				return s(), t.onReadyBeingFired = [], F.resolve(Cn(function() {
					return e.on.ready.fire(e.vip);
				})).then(function n() {
					var r;
					if (0 < t.onReadyBeingFired.length) return r = t.onReadyBeingFired.reduce(Se, M), t.onReadyBeingFired = [], F.resolve(Cn(function() {
						return r(e.vip);
					})).then(n);
				});
			}).finally(function() {
				t.openCanceller === r && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
			}).catch(function(n) {
				t.dbOpenError = n;
				try {
					d && d.abort();
				} catch {}
				return r === t.openCanceller && e._close(), R(n);
			}).finally(function() {
				t.openComplete = !0, u();
			}).then(function() {
				var t;
				return f && (t = {}, e.tables.forEach(function(n) {
					n.schema.indexes.forEach(function(r) {
						r.name && (t[`idb://${e.name}/${n.name}/${r.name}`] = new X(-Infinity, [[[]]]));
					}), t[`idb://${e.name}/${n.name}/`] = t[`idb://${e.name}/${n.name}/:dels`] = new X(-Infinity, [[[]]]);
				}), Kt(Wt).fire(t), Ln(t, !0)), e;
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
					var t = e(t), i = t.value;
					return t.done ? i : i && typeof i.then == "function" ? i.then(n, r) : a(i) ? Promise.all(i).then(n, r) : n(i);
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
					var r = e.table(n), n = r.schema, i = Object.create(null), a = [];
					function o(e, n, r) {
						var s = tn(e), c = i[s] = i[s] || [], l = e == null ? 0 : typeof e == "string" ? 1 : e.length, u = 0 < n, s = t(t({}, r), {
							name: u ? `${s}(virtual-from:${r.name})` : r.name,
							lowLevelIndex: r,
							isVirtual: u,
							keyTail: n,
							keyLength: l,
							extractKey: Qt(e),
							unique: !u && r.unique
						});
						return c.push(s), s.isPrimaryKey || a.push(s), 1 < l && o(l === 2 ? e[0] : e.slice(0, l - 1), n + 1, r), c.sort(function(e, t) {
							return e.keyTail - t.keyTail;
						}), s;
					}
					var s = o(n.primaryKey.keyPath, 0, n.primaryKey);
					i[":id"] = [s];
					for (var c = 0, l = n.indexes; c < l.length; c++) {
						var u = l[c];
						o(u.keyPath, 0, u);
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
						schema: t(t({}, n), {
							primaryKey: s,
							indexes: a,
							getIndexByKeyPath: function(e) {
								return (e = i[tn(e)]) && e[0];
							}
						}),
						count: function(e) {
							return r.count(d(e));
						},
						query: function(e) {
							return r.query(d(e));
						},
						openCursor: function(t) {
							var n = t.query.index, i = n.keyTail, a = n.keyLength;
							return n.isVirtual ? r.openCursor(d(t)).then(function(e) {
								return e && o(e);
							}) : r.openCursor(t);
							function o(n) {
								return Object.create(n, {
									continue: { value: function(r) {
										r == null ? t.unique ? n.continue(n.key.slice(0, a).concat(t.reverse ? e.MIN_KEY : e.MAX_KEY, i)) : n.continue() : n.continue(Vn(r, t.reverse ? e.MAX_KEY : e.MIN_KEY, i));
									} },
									continuePrimaryKey: { value: function(t, r) {
										n.continuePrimaryKey(Vn(t, e.MAX_KEY, i), r);
									} },
									primaryKey: { get: function() {
										return n.primaryKey;
									} },
									key: { get: function() {
										var e = n.key;
										return a === 1 ? e[0] : e.slice(0, a);
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
				l(t, i) ? (a = e[i], o = t[i], typeof a == "object" && typeof o == "object" && a && o ? (s = ie(a)) === ie(o) ? s === "Object" ? Un(a, o, n, r + i + ".") : a !== o && (n[r + i] = t[i]) : n[r + i] = t[i] : a !== o && (n[r + i] = t[i])) : n[r + i] = void 0;
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
						var o = N.trans, s = o.table(r).hook, c = s.deleting, u = s.creating, d = s.updating;
						switch (e.type) {
							case "add":
								if (u.fire === M) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "put":
								if (u.fire === M && d.fire === M) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "delete":
								if (c.fire === M) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "deleteRange":
								if (c.fire === M) break;
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
							var r, o, s, f = N.trans, p = e.keys || Wn(a, e);
							if (p) return (e = e.type === "add" || e.type === "put" ? t(t({}, e), { keys: p }) : t({}, e)).type !== "delete" && (e.values = n([], e.values, !0)), e.keys &&= n([], e.keys, !0), r = i, s = p, ((o = e).type === "add" ? Promise.resolve([]) : r.getMany({
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
							throw Error("Keys missing");
						}
					} });
				} });
			}
		};
		function Kn(e, t, n) {
			try {
				if (!t || t.keys.length < e.length) return null;
				for (var r = [], i = 0, a = 0; i < t.keys.length && a < e.length; ++i) z(t.keys[i], e[a]) === 0 && (r.push(n ? ne(t.values[i]) : t.values[i]), ++a);
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
							var t;
							return e.cache ? (t = Kn(e.keys, e.trans._cache, e.cache === "clone")) ? F.resolve(t) : r.getMany(e).then(function(t) {
								return e.trans._cache = {
									keys: e.keys,
									values: e.cache === "clone" ? ne(t) : t
								}, t;
							}) : r.getMany(e);
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
						if (N.subscr && n !== "readonly") throw new j.ReadOnly(`Readwrite transaction in liveQuery context. Querier source: ${N.querier}`);
						return e.transaction(t, n, r);
					},
					table: function(o) {
						function s(t) {
							var t = t.query;
							return [t.index, new X((t = t.range).lower ?? e.MIN_KEY, t.upper ?? e.MAX_KEY)];
						}
						var c = e.table(o), l = c.schema, u = l.primaryKey, d = l.indexes, f = u.extractKey, p = u.outbound, m = u.autoIncrement && d.filter(function(e) {
							return e.compound && e.keyPath.includes(u.keyPath);
						}), h = t(t({}, c), { mutate: function(t) {
							function i(e) {
								return e = `idb://${n}/${o}/${e}`, h[e] || (h[e] = new X());
							}
							var s, d, f, p = t.trans, h = t.mutatedParts ||= {}, g = i(""), _ = i(":dels"), v = t.type, y = t.type === "deleteRange" ? [t.range] : t.type === "delete" ? [t.keys] : t.values.length < 50 ? [Wn(u, t).filter(function(e) {
								return e;
							}), t.values] : [], b = y[0], y = y[1], x = t.trans._cache;
							return a(b) ? (g.addKeys(b), (v = v === "delete" || b.length === y.length ? Kn(b, x) : null) || _.addKeys(b), (v || y) && (s = i, d = v, f = y, l.indexes.forEach(function(e) {
								var t = s(e.name || "");
								function n(t) {
									return t == null ? null : e.extractKey(t);
								}
								function r(n) {
									e.multiEntry && a(n) ? n.forEach(function(e) {
										return t.addKey(e);
									}) : t.addKey(n);
								}
								(d || f).forEach(function(e, t) {
									var i = d && n(d[t]), t = f && n(f[t]);
									z(i, t) !== 0 && (i != null && r(i), t != null) && r(t);
								});
							}))) : b ? (y = {
								from: (x = b.lower) ?? e.MIN_KEY,
								to: (v = b.upper) ?? e.MAX_KEY
							}, _.add(y), g.add(y)) : (g.add(r), _.add(r), l.indexes.forEach(function(e) {
								return i(e.name).add(r);
							})), c.mutate(t).then(function(e) {
								return !b || t.type !== "add" && t.type !== "put" || (g.addKeys(e.results), m && m.forEach(function(n) {
									for (var r = t.values.map(function(e) {
										return n.extractKey(e);
									}), a = n.keyPath.findIndex(function(e) {
										return e === u.keyPath;
									}), o = 0, s = e.results.length; o < s; ++o) r[o][a] = e.results[o];
									i(n.name).addKeys(r);
								})), p.mutatedParts = jn(p.mutatedParts || {}, h), e;
							});
						} }), g = {
							get: function(e) {
								return [u, new X(e.key)];
							},
							getMany: function(e) {
								return [u, new X().addKeys(e.keys)];
							},
							count: s,
							query: s,
							openCursor: s
						};
						return i(g).forEach(function(e) {
							h[e] = function(i) {
								var a = N.subscr, s = !!a, l = Jn(N, c) && Yn(e, i) ? i.obsSet = {} : a;
								if (s) {
									var u, a = function(e) {
										return e = `idb://${n}/${o}/${e}`, l[e] || (l[e] = new X());
									}, d = a(""), m = a(":dels"), s = g[e](i), h = s[0], s = s[1];
									if ((e === "query" && h.isPrimaryKey && !i.values ? m : a(h.name || "")).add(s), !h.isPrimaryKey) {
										if (e !== "count") return u = e === "query" && p && i.values && c.query(t(t({}, i), { values: !1 })), c[e].apply(this, arguments).then(function(t) {
											if (e === "query") {
												if (p && i.values) return u.then(function(e) {
													return e = e.result, d.addKeys(e), t;
												});
												var n = i.values ? t.result.map(f) : t.result;
												(i.values ? d : m).addKeys(n);
											} else {
												var r, a;
												if (e === "openCursor") return a = i.values, (r = t) && Object.create(r, {
													key: { get: function() {
														return m.addKey(r.primaryKey), r.key;
													} },
													primaryKey: { get: function() {
														var e = r.primaryKey;
														return m.addKey(e), e;
													} },
													value: { get: function() {
														return a && d.addKey(r.primaryKey), r.value;
													} }
												});
											}
											return t;
										});
										m.add(r);
									}
								}
								return c[e].apply(this, arguments);
							};
						}), h;
					}
				});
			}
		};
		function Zn(e, n, r) {
			var i;
			return r.numFailures === 0 ? n : n.type === "deleteRange" || (i = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1, r.numFailures === i) ? null : (i = t({}, n), a(i.keys) && (i.keys = i.keys.filter(function(e, t) {
				return !(t in r.failures);
			})), "values" in i && a(i.values) && (i.values = i.values.filter(function(e, t) {
				return !(t in r.failures);
			})), i);
		}
		function Qn(e, t) {
			return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < z(n, r.lower) : 0 <= z(n, r.lower))) && (n = e, (r = t).upper === void 0 || (r.upperOpen ? z(n, r.upper) < 0 : z(n, r.upper) <= 0));
			var n, r;
		}
		function $n(e, t, n, r, i, o) {
			var s, c, l, u, d, f, p;
			return !n || n.length === 0 || (s = t.query.index, c = s.multiEntry, l = t.query.range, u = r.schema.primaryKey.extractKey, d = s.extractKey, f = (s.lowLevelIndex || s).extractKey, (r = n.reduce(function(e, n) {
				var r = e, i = [];
				if (n.type === "add" || n.type === "put") for (var o = new X(), s = n.values.length - 1; 0 <= s; --s) {
					var f, p = n.values[s], m = u(p);
					!o.hasKey(m) && (f = d(p), c && a(f) ? f.some(function(e) {
						return Qn(e, l);
					}) : Qn(f, l)) && (o.addKey(m), i.push(p));
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
			}, e)) === e) ? e : (p = function(e, t) {
				return z(f(e), f(t)) || z(u(e), u(t));
			}, r.sort(t.direction === "prev" || t.direction === "prevunique" ? function(e, t) {
				return p(t, e);
			} : p), t.limit && t.limit < Infinity && (r.length > t.limit ? r.length = t.limit : e.length === t.limit && r.length < t.limit && (i.dirty = !0)), o ? Object.freeze(r) : r);
		}
		function er(e, t) {
			return z(e.lower, t.lower) === 0 && z(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
		}
		function tr(e, t) {
			return ((e, t, n, r) => {
				if (e === void 0) return t === void 0 ? 0 : -1;
				if (t === void 0) return 1;
				if ((e = z(e, t)) === 0) {
					if (n && r) return 0;
					if (n) return 1;
					if (r) return -1;
				}
				return e;
			})(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= ((e, t, n, r) => {
				if (e === void 0) return t === void 0 ? 0 : 1;
				if (t === void 0) return -1;
				if ((e = z(e, t)) === 0) {
					if (n && r) return 0;
					if (n) return -1;
					if (r) return 1;
				}
				return e;
			})(e.upper, t.upper, e.upperOpen, t.upperOpen);
		}
		function nr(e, t, n, r) {
			e.subscribers.add(n), r.addEventListener("abort", function() {
				var r, i;
				e.subscribers.delete(n), e.subscribers.size === 0 && (r = e, i = t, setTimeout(function() {
					r.subscribers.size === 0 && D(i, r);
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
						return r === "readwrite" && (i = (a = new AbortController()).signal, s.addEventListener("abort", (o = function(i) {
							return function() {
								if (a.abort(), r === "readwrite") {
									for (var o = /* @__PURE__ */ new Set(), c = 0, l = t; c < l.length; c++) {
										var u = l[c], d = Nn[`idb://${n}/${u}`];
										if (d) {
											var f = e.table(u), p = d.optimisticOps.filter(function(e) {
												return e.trans === s;
											});
											if (s._explicit && i && s.mutatedParts) for (var m = 0, h = Object.values(d.queries.query); m < h.length; m++) for (var g = 0, _ = (b = h[m]).slice(); g < _.length; g++) Mn((x = _[g]).obsSet, s.mutatedParts) && (D(b, x), x.subscribers.forEach(function(e) {
												return o.add(e);
											}));
											else if (0 < p.length) {
												d.optimisticOps = d.optimisticOps.filter(function(e) {
													return e.trans !== s;
												});
												for (var v = 0, y = Object.values(d.queries.query); v < y.length; v++) for (var b, x, S, C = 0, w = (b = y[v]).slice(); C < w.length; C++) (x = w[C]).res != null && s.mutatedParts && (i && !x.dirty ? (S = Object.isFrozen(x.res), S = $n(x.res, x.req, p, f, x, S), x.dirty ? (D(b, x), x.subscribers.forEach(function(e) {
													return o.add(e);
												})) : S !== x.res && (x.res = S, x.promise = F.resolve({ result: S }))) : (x.dirty && D(b, x), x.subscribers.forEach(function(e) {
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
						})(!1), { signal: i }), s.addEventListener("error", o(!1), { signal: i }), s.addEventListener("complete", o(!0), { signal: i })), s;
					},
					table: function(r) {
						var i = e.table(r), a = i.schema.primaryKey;
						return t(t({}, i), {
							mutate: function(e) {
								var o, s = N.trans;
								return !a.outbound && s.db._options.cache !== "disabled" && !s.explicit && s.idbtrans.mode === "readwrite" && (o = Nn[`idb://${n}/${r}`]) ? (s = i.mutate(e), e.type !== "add" && e.type !== "put" || !(50 <= e.values.length || Wn(a, e).some(function(e) {
									return e == null;
								})) ? (o.optimisticOps.push(e), e.mutatedParts && In(e.mutatedParts), s.then(function(t) {
									0 < t.numFailures && (D(o.optimisticOps, e), (t = Zn(0, e, t)) && o.optimisticOps.push(t), e.mutatedParts) && In(e.mutatedParts);
								}), s.catch(function() {
									D(o.optimisticOps, e), e.mutatedParts && In(e.mutatedParts);
								})) : s.then(function(n) {
									var r = Zn(0, t(t({}, e), { values: e.values.map(function(e, r) {
										var i;
										return n.failures[r] ? e : (x(i = (i = a.keyPath) != null && i.includes(".") ? ne(e) : t({}, e), a.keyPath, n.results[r]), i);
									}) }), n);
									o.optimisticOps.push(r), queueMicrotask(function() {
										return e.mutatedParts && In(e.mutatedParts);
									});
								}), s) : i.mutate(e);
							},
							query: function(e) {
								var t, a, o, s, c, l, u;
								return Jn(N, i) && Yn("query", e) ? (t = (o = N.trans)?.db._options.cache === "immutable", a = (o = N).requery, o = o.signal, l = ((e, t, n, r) => {
									var i = Nn[`idb://${e}/${t}`];
									if (!i) return [];
									if (!(e = i.queries[n])) return [
										null,
										!1,
										i,
										null
									];
									var a = e[(r.query ? r.query.index.name : null) || ""];
									if (!a) return [
										null,
										!1,
										i,
										null
									];
									var o = (s = r.direction) ?? "next", s = a.find(function(e) {
										return e.req.limit === r.limit && e.req.values === r.values && (e.req.direction ?? "next") === o && er(e.req.query.range, r.query.range);
									});
									return s ? [
										s,
										!0,
										i,
										a
									] : [
										a.find(function(e) {
											return ("limit" in e.req ? e.req.limit : Infinity) >= r.limit && (e.req.direction ?? "next") === o && (!r.values || e.req.values) && tr(e.req.query.range, r.query.range);
										}),
										!1,
										i,
										a
									];
								})(n, r, "query", e), u = l[0], s = l[2], c = l[3], u && l[1] ? u.obsSet = e.obsSet : (l = i.query(e).then(function(e) {
									var n = e.result;
									if (u && (u.res = n), t) {
										for (var r = 0, i = n.length; r < i; ++r) Object.freeze(n[r]);
										Object.freeze(n);
									}
									return e;
								}).catch(function(e) {
									return c && u && D(c, u), Promise.reject(e);
								}), u = {
									obsSet: e.obsSet,
									promise: l,
									subscribers: /* @__PURE__ */ new Set(),
									type: "query",
									req: e,
									dirty: !1
								}, c ? c.push(u) : (c = [u], (s ||= Nn[`idb://${n}/${r}`] = {
									queries: {
										query: {},
										count: {}
									},
									objs: /* @__PURE__ */ new Map(),
									optimisticOps: [],
									unsignaledParts: {}
								}).queries.query[e.query.index.name || ""] = c)), nr(u, c, a, o), u.promise.then(function(n) {
									return n = $n(n.result, e, s?.optimisticOps, i, u, t), { result: t ? n : ne(n) };
								})) : i.query(e);
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
		Z.prototype.version = function(e) {
			if (isNaN(e) || e < .1) throw new j.Type("Given version is not a positive number");
			if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new j.Schema("Cannot add version when database is open");
			this.verno = Math.max(this.verno, e);
			var t = this._versions, n = t.filter(function(t) {
				return t._cfg.version === e;
			})[0];
			return n || (n = new this.Version(e), t.push(n), t.sort(cn), n.stores({}), this._state.autoSchema = !1), n;
		}, Z.prototype._whenReady = function(e) {
			var t = this;
			return this.idbdb && (this._state.openComplete || N.letThrough || this._vip) ? e() : new F(function(e, n) {
				if (t._state.openComplete) return n(new j.DatabaseClosed(t._state.dbOpenError));
				if (!t._state.isBeingOpened) {
					if (!t._state.autoOpen) return void n(new j.DatabaseClosed());
					t.open().catch(M);
				}
				t._state.dbReadyPromise.then(e, n);
			}).then(e);
		}, Z.prototype.use = function(e) {
			var t = e.stack, n = e.create, r = e.level, e = e.name, i = (e && this.unuse({
				stack: t,
				name: e
			}), this._middlewares[t] || (this._middlewares[t] = []));
			return i.push({
				stack: t,
				create: n,
				level: r ?? 10,
				name: e
			}), i.sort(function(e, t) {
				return e.level - t.level;
			}), this;
		}, Z.prototype.unuse = function(e) {
			var t = e.stack, n = e.name, r = e.create;
			return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(e) {
				return r ? e.create !== r : !!n && e.name !== n;
			})), this;
		}, Z.prototype.open = function() {
			var e = this;
			return lt(Le, function() {
				return zn(e);
			});
		}, Z.prototype._close = function() {
			this.on.close.fire(new CustomEvent("close"));
			var e = this._state;
			if (bn.remove(this), this.idbdb) {
				try {
					this.idbdb.close();
				} catch {}
				this.idbdb = null;
			}
			e.isBeingOpened || (e.dbReadyPromise = new F(function(t) {
				e.dbReadyResolve = t;
			}), e.openCanceller = new F(function(t, n) {
				e.cancelOpen = n;
			}));
		}, Z.prototype.close = function(e) {
			var e = (e === void 0 ? { disableAutoOpen: !0 } : e).disableAutoOpen, t = this._state;
			e ? (t.isBeingOpened && t.cancelOpen(new j.DatabaseClosed()), this._close(), t.autoOpen = !1, t.dbOpenError = new j.DatabaseClosed()) : (this._close(), t.autoOpen = this._options.autoOpen || t.isBeingOpened, t.openComplete = !1, t.dbOpenError = null);
		}, Z.prototype.delete = function(e) {
			var t = this, n = (e === void 0 && (e = { disableAutoOpen: !0 }), 0 < arguments.length && typeof arguments[0] != "object"), r = this._state;
			return new F(function(i, a) {
				function o() {
					t.close(e);
					var n = t._deps.indexedDB.deleteDatabase(t.name);
					n.onsuccess = I(function() {
						var e = t._deps, n = t.name, r;
						Sn(r = e.indexedDB) || n === ht || xn(r, e.IDBKeyRange).delete(n).catch(M), i();
					}), n.onerror = q(a), n.onblocked = t._fireOnBlocked;
				}
				if (n) throw new j.InvalidArgument("Invalid closeOptions argument to db.delete()");
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
				if (r < 2) throw new j.InvalidArgument("Too few arguments");
				for (var i = Array(r - 1); --r;) i[r - 1] = arguments[r];
				return n = i.pop(), [
					e,
					w(i),
					n
				];
			}.apply(this, arguments);
			return this._transaction.apply(this, e);
		}, Z.prototype._transaction = function(e, t, n) {
			var r, i, a = this, o = N.trans, s = (o && o.db === this && e.indexOf("!") === -1 || (o = null), e.indexOf("?") !== -1);
			e = e.replace("!", "").replace("?", "");
			try {
				if (i = t.map(function(e) {
					if (e = e instanceof a.Table ? e.name : e, typeof e != "string") throw TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
					return e;
				}), e == "r" || e === gt) r = gt;
				else {
					if (e != "rw" && e != _t) throw new j.InvalidArgument("Invalid transaction mode: " + e);
					r = _t;
				}
				if (o) {
					if (o.mode === gt && r === _t) {
						if (!s) throw new j.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
						o = null;
					}
					o && i.forEach(function(e) {
						if (o && o.storeNames.indexOf(e) === -1) {
							if (!s) throw new j.SubTransaction("Table " + e + " not included in parent transaction.");
							o = null;
						}
					}), s && o && !o.active && (o = null);
				}
			} catch (e) {
				return o ? o._promise(null, function(t, n) {
					n(e);
				}) : R(e);
			}
			var c = function e(t, n, r, i, a) {
				return F.resolve().then(function() {
					var o = N.transless || N, s = t._createTransaction(n, r, t._dbSchema, i), o = (s.explicit = !0, {
						trans: s,
						transless: o
					});
					if (i) s.idbtrans = i.idbtrans;
					else try {
						s.create(), s.idbtrans._explicit = !0, t._state.PR1398_maxLoop = 3;
					} catch (i) {
						return i.name === fe.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
							return e(t, n, r, null, a);
						})) : R(i);
					}
					var c, l = se(a), o = (l && rt(), F.follow(function() {
						var e;
						(c = a.call(s, s)) && (l ? (e = it.bind(null, null), c.then(e, e)) : typeof c.next == "function" && typeof c.throw == "function" && (c = Bn(c)));
					}, o));
					return (c && typeof c.then == "function" ? F.resolve(c).then(function(e) {
						return s.active ? e : R(new j.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
					}) : o.then(function() {
						return c;
					})).then(function(e) {
						return i && s._resolve(), s._completion.then(function() {
							return e;
						});
					}).catch(function(e) {
						return s._reject(e), R(e);
					});
				});
			}.bind(null, this, r, i, o, n);
			return o ? o._promise(r, c, "lock") : N.trans ? lt(N.transless, function() {
				return a._whenReady(c);
			}) : this._whenReady(c);
		}, Z.prototype.table = function(e) {
			if (l(this._allTables, e)) return this._allTables[e];
			throw new j.InvalidTable(`Table ${e} does not exist`);
		};
		var ar = Z;
		function Z(e, n) {
			var r, i, a, o, s, c = this, l = (this._middlewares = {}, this.verno = 0, Z.dependencies), l = (this._options = n = t({
				addons: Z.addons,
				autoOpen: !0,
				indexedDB: l.indexedDB,
				IDBKeyRange: l.IDBKeyRange,
				cache: "cloned",
				maxConnections: 1e3
			}, n), this._deps = {
				indexedDB: n.indexedDB,
				IDBKeyRange: n.IDBKeyRange
			}, n.addons), u = (this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this, {
				dbOpenError: null,
				isBeingOpened: !1,
				onReadyBeingFired: null,
				openComplete: !1,
				dbReadyResolve: M,
				dbReadyPromise: null,
				cancelOpen: M,
				openCanceller: null,
				autoSchema: !0,
				PR1398_maxLoop: 3,
				autoOpen: n.autoOpen
			}), d = (u.dbReadyPromise = new F(function(e) {
				u.dbReadyResolve = e;
			}), u.openCanceller = new F(function(e, t) {
				u.cancelOpen = t;
			}), this._state = u, this.name = e, this.on = kt(this, "populate", "blocked", "versionchange", "close", { ready: [Se, M] }), this.once = function(e, t) {
				var n = function() {
					var r = [...arguments];
					c.on(e).unsubscribe(n), t.apply(c, r);
				};
				return c.on(e, n);
			}, this.on.ready.subscribe = _(this.on.ready.subscribe, function(e) {
				return function(t, n) {
					Z.vip(function() {
						var r, i = c._state;
						i.openComplete ? (i.dbOpenError || F.resolve().then(t), n && e(t)) : i.onReadyBeingFired ? (i.onReadyBeingFired.push(t), n && e(t)) : (e(t), r = c, n || e(function e() {
							r.on.ready.unsubscribe(t), r.on.ready.unsubscribe(e);
						}));
					});
				};
			}), this.Collection = (r = this, At(Rt.prototype, function(e, t) {
				this.db = r;
				var n = yt, i = null;
				if (t) try {
					n = t();
				} catch (e) {
					i = e;
				}
				var t = e._ctx, e = t.table, a = e.hook.reading.fire;
				this._ctx = {
					table: e,
					index: t.index,
					isPrimKey: !t.index || e.schema.primKey.keyPath && t.index === e.schema.primKey.name,
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
					error: i,
					or: t.or,
					valueMapper: a === he ? null : a
				};
			})), this.Table = (i = this, At(Ot.prototype, function(e, t, n) {
				this.db = i, this._tx = n, this.name = e, this.schema = t, this.hook = i._allTables[e] ? i._allTables[e].hook : kt(null, {
					creating: [ve, M],
					reading: [ge, he],
					updating: [be, M],
					deleting: [ye, M]
				});
			})), this.Transaction = (a = this, At(qt.prototype, function(e, t, n, r, i) {
				var o = this;
				e !== "readonly" && t.forEach(function(e) {
					e = (e = n[e])?.yProps, e && (t = t.concat(e.map(function(e) {
						return e.updatesTable;
					})));
				}), this.db = a, this.mode = e, this.storeNames = t, this.schema = n, this.chromeTransactionDurability = r, this.idbtrans = null, this.on = kt(this, "complete", "error", "abort"), this.parent = i || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new F(function(e, t) {
					o._resolve = e, o._reject = t;
				}), this._completion.then(function() {
					o.active = !1, o.on.complete.fire();
				}, function(e) {
					var t = o.active;
					return o.active = !1, o.on.error.fire(e), o.parent ? o.parent._reject(e) : t && o.idbtrans && o.idbtrans.abort(), R(e);
				});
			})), this.Version = (o = this, At(vn.prototype, function(e) {
				this.db = o, this._cfg = {
					version: e,
					storesSource: null,
					dbschema: {},
					tables: {},
					contentUpgrade: null
				};
			})), this.WhereClause = (s = this, At(G.prototype, function(e, t, n) {
				if (this.db = s, this._ctx = {
					table: e,
					index: t === ":id" ? null : t,
					or: n
				}, this._cmp = this._ascending = z, this._descending = function(e, t) {
					return z(t, e);
				}, this._max = function(e, t) {
					return 0 < z(e, t) ? e : t;
				}, this._min = function(e, t) {
					return z(e, t) < 0 ? e : t;
				}, this._IDBKeyRange = s._deps.IDBKeyRange, !this._IDBKeyRange) throw new j.MissingAPI();
			})), this.on("versionchange", function(e) {
				0 < e.newVersion ? console.warn(`Another connection wants to upgrade database '${c.name}'. Closing db now to resume the upgrade.`) : console.warn(`Another connection wants to delete database '${c.name}'. Closing db now to resume the delete request.`), c.close({ disableAutoOpen: !1 });
			}), this.on("blocked", function(e) {
				!e.newVersion || e.newVersion < e.oldVersion ? console.warn(`Dexie.delete('${c.name}') was blocked`) : console.warn(`Upgrade '${c.name}' blocked by other connection holding version ${e.oldVersion / 10}`);
			}), this._maxKey = Y(n.IDBKeyRange), this._createTransaction = function(e, t, n, r) {
				return new c.Transaction(e, t, n, c._options.chromeTransactionDurability, r);
			}, this._fireOnBlocked = function(e) {
				c.on("blocked").fire(e), bn.toArray().filter(function(e) {
					return e.name === c.name && e !== c && !e._state.vcFired;
				}).map(function(t) {
					return t.on("versionchange").fire(e);
				});
			}, this.use(qn), this.use(rr), this.use(Xn), this.use(Hn), this.use(Gn), new Proxy(this, { get: function(e, t, n) {
				var r;
				return t === "_vip" || (t === "table" ? function(e) {
					return ir(c.table(e), d);
				} : (r = Reflect.get(e, t, n)) instanceof Ot ? ir(r, d) : t === "tables" ? r.map(function(e) {
					return ir(e, d);
				}) : t === "_createTransaction" ? function() {
					return ir(r.apply(this, arguments), d);
				} : r);
			} }));
			this.vip = d, l.forEach(function(e) {
				return e(c);
			});
		}
		var or, Oe = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", sr = (cr.prototype.subscribe = function(e, t, n) {
			return this._subscribe(e && typeof e != "function" ? e : {
				next: e,
				error: t,
				complete: n
			});
		}, cr.prototype[Oe] = function() {
			return this;
		}, cr);
		function cr(e) {
			this._subscribe = e;
		}
		try {
			or = {
				indexedDB: r.indexedDB || r.mozIndexedDB || r.webkitIndexedDB || r.msIndexedDB,
				IDBKeyRange: r.IDBKeyRange || r.webkitIDBKeyRange
			};
		} catch {
			or = {
				indexedDB: null,
				IDBKeyRange: null
			};
		}
		function lr(e) {
			var t, n = !1, r = new sr(function(r) {
				var i = se(e), a, o = !1, s = {}, c = {}, l = {
					get closed() {
						return o;
					},
					unsubscribe: function() {
						o || (o = !0, a && a.abort(), u && Kt.storagemutated.unsubscribe(p));
					}
				}, u = (r.start && r.start(l), !1), d = function() {
					return dt(m);
				};
				function f() {
					return Mn(c, s);
				}
				var p = function(e) {
					jn(s, e), f() && d();
				}, m = function() {
					var l, m, h;
					!o && or.indexedDB && (s = {}, l = {}, a && a.abort(), a = new AbortController(), h = ((t) => {
						var n = qe();
						try {
							i && rt();
							var r = nt(e, t);
							return r = i ? r.finally(it) : r;
						} finally {
							n && Je();
						}
					})(m = {
						subscr: l,
						signal: a.signal,
						requery: d,
						querier: e,
						trans: null
					}), u ||= (Kt.storagemutated.subscribe(p), !0), Promise.resolve(h).then(function(e) {
						n = !0, t = e, o || m.signal.aborted || (f() || (c = l, f()) ? d() : (s = {}, dt(function() {
							return !o && r.next && r.next(e);
						})));
					}, function(e) {
						n = !1, ["DatabaseClosedError", "AbortError"].includes(e?.name) || o || dt(function() {
							o || r.error && r.error(e);
						});
					}));
				};
				return setTimeout(d, 0), l;
			});
			return r.hasValue = function() {
				return n;
			}, r.getValue = function() {
				return t;
			}, r;
		}
		var ur = ar;
		function dr(e) {
			var t = pr;
			try {
				pr = !0, Kt.storagemutated.fire(e), Ln(e, !0);
			} finally {
				pr = t;
			}
		}
		u(ur, t(t({}, T), {
			delete: function(e) {
				return new ur(e, { addons: [] }).delete();
			},
			exists: function(e) {
				return new ur(e, { addons: [] }).open().then(function(e) {
					return e.close(), !0;
				}).catch("NoSuchDatabaseError", function() {
					return !1;
				});
			},
			getDatabaseNames: function(e) {
				try {
					return t = ur.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (Sn(n) ? Promise.resolve(n.databases()).then(function(e) {
						return e.map(function(e) {
							return e.name;
						}).filter(function(e) {
							return e !== ht;
						});
					}) : xn(n, t).toCollection().primaryKeys()).then(e);
				} catch {
					return R(new j.MissingAPI());
				}
				var t, n;
			},
			defineClass: function() {
				return function(e) {
					o(this, e);
				};
			},
			ignoreTransaction: function(e) {
				return N.trans ? lt(N.transless || Le, e) : e();
			},
			vip: Cn,
			async: function(e) {
				return function() {
					try {
						var t = Bn(e.apply(this, arguments));
						return t && typeof t.then == "function" ? t : F.resolve(t);
					} catch (e) {
						return R(e);
					}
				};
			},
			spawn: function(e, t, n) {
				try {
					var r = Bn(e.apply(n, t || []));
					return r && typeof r.then == "function" ? r : F.resolve(r);
				} catch (e) {
					return R(e);
				}
			},
			currentTransaction: { get: function() {
				return N.trans || null;
			} },
			waitFor: function(e, t) {
				return e = F.resolve(typeof e == "function" ? ur.ignoreTransaction(e) : e).timeout(t || 6e4), N.trans ? N.trans.waitFor(e) : e;
			},
			Promise: F,
			debug: {
				get: function() {
					return Ce;
				},
				set: function(e) {
					we(e);
				}
			},
			derive: p,
			extend: o,
			props: u,
			override: _,
			Events: kt,
			on: Kt,
			liveQuery: lr,
			extendObservabilitySet: jn,
			getByKeyPath: b,
			setByKeyPath: x,
			delByKeyPath: function(e, t) {
				typeof t == "string" ? x(e, t, void 0) : "length" in t && [].map.call(t, function(t) {
					x(e, t, void 0);
				});
			},
			shallowClone: S,
			deepClone: ne,
			getObjectDiff: Un,
			cmp: z,
			asap: y,
			minKey: -Infinity,
			addons: [],
			connections: { get: bn.toArray },
			errnames: fe,
			dependencies: or,
			cache: Nn,
			semVer: "4.4.6",
			version: "4.4.6".split(".").map(function(e) {
				return parseInt(e);
			}).reduce(function(e, t, n) {
				return e + t / 10 ** (2 * n);
			})
		})), ur.maxKey = Y(ur.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Kt(Wt, function(e) {
			pr ||= (e = new CustomEvent(Gt, { detail: e }), pr = !0, dispatchEvent(e), !1);
		}), addEventListener(Gt, function(e) {
			e = e.detail, pr || dr(e);
		}));
		var fr, pr = !1, mr = function() {};
		return typeof BroadcastChannel < "u" && ((mr = function() {
			(fr = new BroadcastChannel(Gt)).onmessage = function(e) {
				return e.data && dr(e.data);
			};
		})(), typeof fr.unref == "function" && fr.unref(), Kt(Wt, function(e) {
			pr || fr.postMessage(e);
		})), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
			if (!ar.disableBfCache && e.persisted) {
				Ce && console.debug("Dexie: handling persisted pagehide"), fr?.close();
				for (var t = 0, n = bn.toArray(); t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
			}
		}), addEventListener("pageshow", function(e) {
			!ar.disableBfCache && e.persisted && (Ce && console.debug("Dexie: handling persisted pageshow"), mr(), dr({ all: new X(-Infinity, [[]]) }));
		})), F.rejectionMapper = function(e, t) {
			return !e || e instanceof le || e instanceof TypeError || e instanceof SyntaxError || !e.name || !me[e.name] ? e : (t = new me[e.name](t || e.message, e), "stack" in e && f(t, "stack", { get: function() {
				return this.inner.stack;
			} }), t);
		}, we(Ce), t(ar, Object.freeze({
			__proto__: null,
			DEFAULT_MAX_CONNECTIONS: 1e3,
			Dexie: ar,
			Entity: xt,
			PropModification: Tt,
			RangeSet: X,
			add: function(e) {
				return new Tt({ add: e });
			},
			cmp: z,
			default: ar,
			liveQuery: lr,
			mergeRanges: En,
			rangesOverlap: Dn,
			remove: function(e) {
				return new Tt({ remove: e });
			},
			replacePrefix: function(e, t) {
				return new Tt({ replacePrefix: [e, t] });
			}
		}), { default: ar }), ar;
	});
})))(), 1), Ea = Symbol.for("Dexie"), Da = globalThis[Ea] || (globalThis[Ea] = Ta.default);
if (Ta.default.semVer !== Da.semVer) throw Error(`Two different versions of Dexie loaded in the same app: ${Ta.default.semVer} and ${Da.semVer}`);
var { liveQuery: Oa, mergeRanges: ka, rangesOverlap: Aa, RangeSet: ja, cmp: Ma, Entity: Na, PropModification: Pa, replacePrefix: Fa, add: Ia, remove: La, DexieYProvider: Ra } = Da;
function za(e) {
	return `${ba}${e}`;
}
function Ba(e) {
	return `${ya}${e.storeName}:${e.writeId}`;
}
function Va(e) {
	let { name: t, run: n } = e, r = (Ca.get(t) ?? Promise.resolve()).then(n), i = r.catch(ct);
	return Ca.set(t, i), i.then(function() {
		Ca.get(t) === i && Ca.delete(t);
	}), r;
}
function Ha(e) {
	e();
}
async function Ua(e) {
	let { storeName: t, document: n } = e;
	if (!navigator.locks || n.writeId === void 0) return !1;
	let r = Ba({
		storeName: t,
		writeId: n.writeId
	});
	return navigator.locks.request(r, { ifAvailable: !0 }, (e) => e === null);
}
function Wa(e) {
	let t = [e.autoIncrement ? `++${e.primaryKey}` : e.primaryKey];
	for (let n of e.indexes) t.push(n);
	for (let n of e.compoundIndexes) t.push(`[${n.join("+")}]`);
	for (let n of e.arrayIndexes) t.push(`*${n}`);
	return t.join(", ");
}
var Ga = class {
	constructor(e, t) {
		this.schemaVersion = 1, this.knownDocuments = /* @__PURE__ */ new Map(), this.schemaLock = Promise.resolve(), this.stale = !1, this.recordCounts = /* @__PURE__ */ new Map(), this.closed = !1, this.closings = 0, this.operations = lt(), this.openHoldEnded = Promise.resolve(), Zt({ project: e }), this.name = e, this.dexieRecordSchema = Wa(t?.recordSchema ?? wa), this.perf = t?.perf ?? Y, this.runtime = t?.runtime, this.db = new Da(e);
	}
	async open() {
		let e = this.closings;
		for (await this.operations.whenIdle(); this.destroying;) await this.destroying.catch(ct);
		this.closings !== e && Ct({ storeName: this.name }), this.closed = !1, await this.holdOpen(), await this.tracked(async () => {
			await this.reloadFromPersisted(), await ga({
				store: this.ownSweepTarget(),
				isRunning: (e) => Ua({
					storeName: this.name,
					document: e
				})
			});
		});
	}
	async close() {
		if (this.closed = !0, this.closings += 1, this.operations.count === 0) {
			let e = this.openHoldEnded;
			this.letOpenHoldGo(), this.db.close(), await e;
		} else await this.holdUntilIdle();
	}
	async holdUntilIdle() {
		let e = this.openHold, t = this.openHoldEnded;
		this.openHold = void 0;
		let n = this.operations.whenIdle().then(function() {
			return e?.then(Ha), t;
		});
		Sa.markClosing({
			name: this.name,
			until: n
		}), await n;
	}
	async destroy() {
		for (; this.destroying;) await this.destroying.catch(ct);
		let e = this.destroyOnceIdle();
		this.destroying = e;
		try {
			await e;
		} finally {
			this.destroying === e && (this.destroying = void 0);
		}
	}
	async destroyOnceIdle() {
		await this.operations.whenIdle(), await Va({
			name: this.name,
			run: this.destroyIfAlone.bind(this)
		});
	}
	async destroyIfAlone() {
		let e = this.closings, t = this.openHold !== void 0;
		this.letOpenHoldGo(), await this.openHoldEnded, await Sa.settled({ name: this.name }), (navigator.locks ? await this.deleteWhenAlone() : await this.deleteWhenAloneInRealm()) || (t && this.closings === e && await this.holdOpen(), St({ storeName: this.name }));
	}
	async deleteWhenAlone() {
		let e = performance.now() + 500;
		for (;;) {
			if (await navigator.locks.request(`dialecte:local-open:${this.name}`, {
				mode: "exclusive",
				ifAvailable: !0
			}, this.deleteIfAlone.bind(this))) return !0;
			if (performance.now() >= e) return !1;
			await new Promise(function(e) {
				setTimeout(e, 50);
			});
		}
	}
	async deleteIfAlone(e) {
		return e !== null && this.deleteDatabase();
	}
	async deleteWhenAloneInRealm() {
		return xa.others({
			name: this.name,
			connection: this
		}) > 0 ? !1 : this.deleteDatabase();
	}
	async deleteDatabase() {
		return this.db.isOpen() && (this.db.close(), await Ka()), await Da.delete(this.name), this.knownDocuments.clear(), this.recordCounts.clear(), this.stale = !0, !0;
	}
	async holdOpen() {
		this.openHold ??= this.askOpenHold(), await this.openHold;
	}
	askOpenHold() {
		let e = this.name;
		if (!navigator.locks) return xa.markOpen({
			name: e,
			connection: this
		}), Promise.resolve(this.countClosed.bind(this));
		let t = Promise.resolve(), n = new Promise(function(n) {
			t = navigator.locks.request(`${va}${e}`, { mode: "shared" }, function() {
				return new Promise(function(e) {
					n(e);
				});
			});
		});
		return this.openHoldEnded = t, n;
	}
	countClosed() {
		xa.markClosed({
			name: this.name,
			connection: this
		});
	}
	letOpenHoldGo() {
		let e = this.openHold;
		this.openHold = void 0, e?.then(Ha);
	}
	async reconcile() {
		return this.operation(async () => {
			await this.ensureCurrentSchema();
		});
	}
	async isDocumentReadable(e) {
		return this.operation(async () => {
			if (!this.knownDocuments.has(e)) return !1;
			let t = this.resolveTableName(e);
			return this.db.isOpen() && this.db.tables.some((e) => e.name === t);
		});
	}
	async registerDocument(e) {
		return this.operation(() => this.registerDocumentUnguarded(e));
	}
	async getDocument(e) {
		return this.operation(() => this.getDocumentUnguarded(e));
	}
	async getDocuments() {
		return this.operation(() => this.getDocumentsUnguarded());
	}
	async updateDocument(e, t) {
		return this.operation(() => this.updateDocumentUnguarded(e, t));
	}
	async removeDocument(e) {
		return this.operation(() => this.removeDocumentUnguarded(e));
	}
	async get(e, t) {
		return this.operation(async () => (await this.recordTable(t))?.get(e));
	}
	async getByDocumentId(e) {
		return this.operation(async () => {
			let t = await this.recordTable(e);
			return t ? t.toArray() : [];
		});
	}
	async count(e) {
		return this.operation(() => this.countUnguarded(e));
	}
	async getByTagNameInDocument(e, t) {
		return this.operation(() => this.getByTagNameInDocumentUnguarded(e, t));
	}
	async getMany(e, t) {
		return this.operation(() => this.getManyUnguarded(e, t));
	}
	async importFile(e) {
		return this.operation(async () => {
			let { file: t, options: n, writeId: r = crypto.randomUUID(), onProgress: i, signal: a } = e, o = la({
				runtime: this.runtime,
				storeName: this.name,
				operation: "import"
			}), s = this.ownImportTarget();
			function c() {
				return ia({
					store: s,
					runtime: o,
					file: t,
					options: n,
					writeId: r
				}, {
					onProgress: i,
					signal: a
				});
			}
			return navigator.locks ? navigator.locks.request(Ba({
				storeName: this.name,
				writeId: r
			}), c) : c();
		});
	}
	async exportFile(e) {
		return this.operation(async () => {
			let { documentId: t, options: n, onProgress: r, signal: i } = e, a = la({
				runtime: this.runtime,
				storeName: this.name,
				operation: "export"
			});
			return Tr({
				source: this.ownExportSource(),
				runtime: a,
				documentId: t,
				options: n
			}, {
				onProgress: r,
				signal: i
			});
		});
	}
	async getWriteOutcome(e) {
		return this.operation(async () => {
			let { writeId: t } = e, n = await this.getDocumentsUnguarded();
			return await this.ensureCurrentSchema(), Ur({
				documents: n,
				writeId: t,
				committed: await this.db.table(W).filter((e) => e.writeId === t).first() !== void 0
			});
		});
	}
	async bulkWrite(e, t) {
		return this.operation(() => this.bulkWriteUnguarded(e, t));
	}
	async commit(e) {
		return this.operation(async () => {
			try {
				let { documentId: t, writeId: n, creates: r, updates: i, deletes: a, onProgress: o } = e, s = a.map((e) => e.id), c = await this.writeTable(t), l = await this.db.table(U).get(t);
				l && Za(l).status === "importing" && yt({
					documentId: t,
					what: "a commit"
				}), Dt({
					field: "writeId",
					value: n
				});
				try {
					await this.db.transaction("rw", c, this.db.table(W), this.db.table(G), async () => {
						let e = await Ya({
							table: c,
							updates: i,
							documentId: t
						}), a = ui({ records: r });
						a.length > 0 && await qa({
							table: c,
							creates: a,
							documentId: t
						});
						let o = ui({ records: i });
						if (o.length > 0) try {
							await c.bulkPut(o);
						} catch (e) {
							f("STORE_BULK_UPDATE_FAILED", {
								detail: e instanceof Error ? e.message : String(e),
								cause: e instanceof Error ? e : void 0
							});
						}
						let l = s.length > 0 ? await c.bulkGet(s) : [];
						if (s.length > 0) try {
							await c.bulkDelete(s);
						} catch (e) {
							f("STORE_DELETE_FAILED", {
								detail: e instanceof Error ? e.message : String(e),
								cause: e instanceof Error ? e : void 0
							});
						}
						let u = await this.getHead(t);
						await this.db.table(W).where({ documentId: t }).filter((e) => e.sequenceNumber > u).modify(function(e) {
							e.sequenceNumber = -1, e.operations = {
								creates: [],
								updates: [],
								deletes: []
							};
						});
						let d = u + 1, p = {
							documentId: t,
							sequenceNumber: d,
							timestamp: Date.now(),
							writeId: n,
							operations: {
								creates: a,
								updates: o.map((t, n) => ({
									before: e[n],
									after: t
								})),
								deletes: l.filter(Boolean)
							}
						};
						await this.db.table(W).add(p), await this.setHead(t, d), await this.bumpVersion(t);
					}), pi({
						onProgress: o,
						parts: [
							r.length,
							i.length,
							s.length
						]
					});
				} catch (e) {
					if (b(e)) throw e;
					f("STORE_COMMIT_FAILED", {
						detail: e instanceof Error ? e.message : String(e),
						cause: e instanceof Error ? e : void 0
					});
				}
			} finally {
				this.recordCounts.delete(e.documentId);
			}
		});
	}
	async undo(e) {
		let { documentId: t, changeId: n } = e;
		return this.operation(async () => {
			Dt({
				field: "changeId",
				value: n
			});
			try {
				await this.ensureCurrentSchema();
				let e = await this.getHead(t);
				if (e === 0) return !1;
				let r = await this.db.table(W).where({
					documentId: t,
					sequenceNumber: e
				}).first();
				if (!r) return !1;
				let i = this.db.table(this.resolveTableName(t));
				return await this.db.transaction("rw", i, this.db.table(G), async () => {
					let { creates: n, updates: a, deletes: o } = r.operations;
					o.length > 0 && await i.bulkPut(o), a.length > 0 && await i.bulkPut(a.map((e) => e.before)), n.length > 0 && await i.bulkDelete(n.map((e) => e.id)), await this.setHead(t, e - 1), await this.bumpVersion(t);
				}), {
					changeId: n,
					changes: Yr({
						operations: r.operations,
						direction: "back"
					})
				};
			} finally {
				this.recordCounts.delete(t);
			}
		});
	}
	async redo(e) {
		let { documentId: t, changeId: n } = e;
		return this.operation(async () => {
			Dt({
				field: "changeId",
				value: n
			});
			try {
				await this.ensureCurrentSchema();
				let e = await this.getHead(t) + 1, r = await this.db.table(W).where({
					documentId: t,
					sequenceNumber: e
				}).first();
				if (!r) return !1;
				let i = this.db.table(this.resolveTableName(t));
				return await this.db.transaction("rw", i, this.db.table(G), async () => {
					let { creates: n, updates: a, deletes: o } = r.operations;
					n.length > 0 && await i.bulkPut(n), a.length > 0 && await i.bulkPut(a.map((e) => e.after)), o.length > 0 && await i.bulkDelete(o.map((e) => e.id)), await this.setHead(t, e), await this.bumpVersion(t);
				}), {
					changeId: n,
					changes: Yr({
						operations: r.operations,
						direction: "forward"
					})
				};
			} finally {
				this.recordCounts.delete(t);
			}
		});
	}
	async getHistoryStatus(e) {
		return this.operation(async () => {
			await this.ensureCurrentSchema();
			let t = await this.getHead(e), n = await this.db.table(W).where({
				documentId: e,
				sequenceNumber: t + 1
			}).first();
			return {
				canUndo: t > 0,
				canRedo: n !== void 0
			};
		});
	}
	async getChangeLog(e) {
		return this.operation(async () => (await this.ensureCurrentSchema(), (await this.db.table(W).where({ documentId: e }).sortBy("sequenceNumber")).filter((e) => e.sequenceNumber !== -1)));
	}
	async addBlob(e, t) {
		return this.operation(async () => {
			await this.ensureCurrentSchema(), Xa(this.knownDocuments, e.documentId);
			let n = Ot({ value: e }), r = this.db.table(Gt(e.documentId));
			await this.db.transaction("rw", this.db.table(J), r, async () => {
				await this.db.table(J).put(n), await r.put({
					id: e.id,
					data: t
				});
			});
		});
	}
	async getBlob(e) {
		return this.operation(async () => {
			await this.ensureCurrentSchema();
			let t = await this.db.table(J).get(e);
			if (!t) return;
			let n = await this.db.table(Gt(t.documentId)).get(e);
			if (n) return {
				entry: t,
				data: n.data
			};
		});
	}
	async getBlobsByDocument(e) {
		return this.operation(async () => (await this.ensureCurrentSchema(), (await this.db.table(J).toArray()).filter((t) => t.attachedTo.some((t) => t.documentId === e))));
	}
	async getBlobsByRecord(e, t) {
		return this.operation(async () => (await this.ensureCurrentSchema(), (await this.db.table(J).toArray()).filter((n) => n.attachedTo.some((n) => n.documentId === e && n.recordRef === t))));
	}
	async getStandaloneBlobs() {
		return this.operation(async () => (await this.ensureCurrentSchema(), (await this.db.table(J).toArray()).filter((e) => e.attachedTo.length === 0)));
	}
	async attachBlob(e, t) {
		return this.operation(async () => {
			await this.ensureCurrentSchema();
			let n = await this.db.table(J).get(e);
			n || f("STORE_BLOB_NOT_FOUND", { detail: `Blob "${e}" not found` });
			let r = Ot({ value: t });
			if (n.attachedTo.some((e) => e.documentId === t.documentId && e.recordRef === t.recordRef && e.attribute === t.attribute)) return;
			let i = [...n.attachedTo, r];
			await this.db.table(J).update(e, { attachedTo: i });
		});
	}
	async detachBlob(e, t) {
		return this.operation(async () => {
			await this.ensureCurrentSchema();
			let n = await this.db.table(J).get(e);
			n || f("STORE_BLOB_NOT_FOUND", { detail: `Blob "${e}" not found` });
			let r = n.attachedTo.filter((e) => e.documentId !== t.documentId || e.recordRef !== t.recordRef);
			await this.db.table(J).update(e, { attachedTo: r });
		});
	}
	async removeBlob(e) {
		return this.operation(async () => {
			await this.ensureCurrentSchema();
			let t = await this.db.table(J).get(e);
			if (!t) return;
			let n = this.db.table(Gt(t.documentId));
			await this.db.transaction("rw", this.db.table(J), n, async () => {
				await n.delete(e), await this.db.table(J).delete(e);
			});
		});
	}
	getDatabaseInstance() {
		return this.db;
	}
	async operation(e) {
		if (this.closed && Ct({ storeName: this.name }), this.destroying) {
			for (; this.destroying;) await this.destroying.catch(ct);
			this.closed && Ct({ storeName: this.name });
		}
		return this.openHold === void 0 && await this.holdOpen(), this.closed && Ct({ storeName: this.name }), this.tracked(e);
	}
	async tracked(e) {
		this.operations.start();
		try {
			return await e();
		} finally {
			this.operations.count === 1 && this.closed && this.db.close(), this.operations.end();
		}
	}
	async writeOwnSession(e) {
		let { documentId: t, ops: n, control: r, registered: i } = e;
		await this.bulkWriteOwnImport({
			documentId: t,
			ops: n,
			registered: i
		}), xi({
			ops: n,
			control: r
		});
	}
	ownImportTarget() {
		let e;
		return {
			registerDocument: (t) => (e = t, this.tracked(() => this.registerDocumentUnguarded(t))),
			getDocument: (e) => this.tracked(() => this.getDocumentUnguarded(e)),
			markReady: (t) => this.tracked(() => this.markReadyUnguarded({
				documentId: t,
				registered: e
			})),
			removeDocument: (t) => this.tracked(() => this.removeOwnImport({
				documentId: t,
				registered: e
			})),
			bulkWrite: (t, n) => this.tracked(() => this.bulkWriteOwnImport({
				documentId: t,
				ops: n,
				registered: e
			})),
			writeSession: (t, n, r) => this.tracked(() => this.writeOwnSession({
				documentId: t,
				ops: n,
				control: r,
				registered: e
			}))
		};
	}
	ownSweepTarget() {
		return {
			getDocuments: () => this.tracked(() => this.getDocumentsUnguarded()),
			getDocument: (e) => this.tracked(() => this.getDocumentUnguarded(e)),
			removeDocument: (e) => this.tracked(() => this.removeDocumentUnguarded(e))
		};
	}
	ownExportSource() {
		return {
			getDocument: (e) => this.tracked(() => this.getDocumentUnguarded(e)),
			count: (e) => this.tracked(() => this.countStored(e)),
			getByTagNameInDocument: (e, t) => this.tracked(() => this.getByTagNameInDocumentUnguarded(e, t)),
			getMany: (e, t) => this.tracked(() => this.getManyUnguarded(e, t)),
			getExportVersion: (e) => this.tracked(() => this.getExportVersion(e))
		};
	}
	async registerDocumentUnguarded(e) {
		await this.withSchemaLock(async () => {
			this.stale && await this.reloadFromPersisted(), this.knownDocuments.has(e.id) && gt({ documentId: e.id });
			let t = Ot({ value: e });
			await this.assertPlaceFree({ document: t }), this.knownDocuments.set(t.id, t), await this.reopenWithNewSchema();
			try {
				await this.db.transaction("rw", U, async () => {
					await this.db.table("_documents").get(t.id) && gt({ documentId: t.id }), await this.assertPlaceFree({ document: t }), await this.db.table(U).add(t);
				});
			} catch (e) {
				throw b(e)?.key === "DOCUMENT_PATH_TAKEN" ? (this.knownDocuments.delete(t.id), await this.reopenWithNewSchema({ drop: t.id }).catch(() => void 0)) : this.stale = !0, e;
			}
		});
	}
	async assertPlaceFree(e) {
		let { document: t } = e;
		ai({
			document: t,
			documents: t.path === void 0 ? [] : await this.db.table(U).toArray()
		});
	}
	async getDocumentsUnguarded() {
		return await this.ensureCurrentSchema(), (await this.db.table(U).toArray()).map(Za);
	}
	async getDocumentUnguarded(e) {
		await this.ensureCurrentSchema();
		let t = await this.db.table(U).get(e);
		return t && Za(t);
	}
	async updateDocumentUnguarded(e, t) {
		let n = Ot({ value: t });
		await this.ensureCurrentSchema();
		let r = this.db.table(U), i = await this.db.transaction("rw", r, async () => {
			let t = await r.get(e);
			if (!t) return;
			let i = ii({
				document: Za(t),
				updates: n
			});
			return i.path !== t.path && ai({
				document: i,
				documents: await r.toArray()
			}), await r.put(i), i;
		});
		i && this.knownDocuments.has(e) && this.knownDocuments.set(e, i);
	}
	async markReadyUnguarded(e) {
		let { documentId: t, registered: n } = e;
		await this.ensureCurrentSchema();
		let r = this.db.table(U), i = await this.db.transaction("rw", r, async () => {
			let e = await r.get(t);
			if (!e || !_a({
				held: Za(e),
				registered: n
			})) return;
			let i = {
				...Za(e),
				status: "ready"
			};
			return await r.put(i), i;
		});
		i || yt({
			documentId: t,
			what: "its ready state"
		}), this.knownDocuments.has(t) && this.knownDocuments.set(t, i);
	}
	async bulkWriteOwnImport(e) {
		let { documentId: t, ops: n, registered: r } = e;
		await this.ensureCurrentSchema();
		let i = await this.db.table(U).get(t);
		i && _a({
			held: Za(i),
			registered: r
		}) || yt({
			documentId: t,
			what: "records"
		}), await this.bulkWriteUnguarded(t, n);
	}
	async removeOwnImport(e) {
		let { documentId: t, registered: n } = e;
		await this.ensureCurrentSchema();
		let r = await this.db.table(U).get(t);
		r && _a({
			held: Za(r),
			registered: n
		}) && await this.removeDocumentUnguarded(t);
	}
	async removeDocumentUnguarded(e) {
		try {
			await this.withSchemaLock(async () => {
				this.stale && await this.reloadFromPersisted();
				let t = [this.resolveTableName(e), Gt(e)].filter((e) => this.db.tables.some((t) => t.name === e));
				await this.db.transaction("rw", [
					...t,
					J,
					W,
					G,
					U
				], async () => {
					for (let e of t) await this.db.table(e).clear();
					await this.db.table(J).where({ documentId: e }).delete(), await this.db.table(W).where({ documentId: e }).delete(), await this.db.table(G).delete(`head:${e}`), await this.db.table(U).delete(e);
				}), this.knownDocuments.delete(e), await this.reopenWithNewSchema({ drop: e });
			});
		} finally {
			this.recordCounts.delete(e);
		}
	}
	async bulkWriteUnguarded(e, t) {
		try {
			let { updates: n, deletes: r } = t, i = await this.writeTable(e), a = ui({ records: t.creates ?? [] });
			await this.db.transaction("rw", i, this.db.table(G), async () => {
				if (a.length > 0 && (this.perf.start("core::store::bulkWrite::add"), await qa({
					table: i,
					creates: a,
					documentId: e
				}), this.perf.stop("core::store::bulkWrite::add")), n?.length) {
					this.perf.start("core::store::bulkWrite::update");
					try {
						let e = await i.bulkGet(n.map((e) => e.recordId)), t = Ot({ value: n.filter((t, n) => e[n] !== void 0) }), r = /* @__PURE__ */ new Map();
						for (let t of e) t && r.set(t.id, t);
						for (let e of t) {
							let t = r.get(e.recordId);
							t && r.set(e.recordId, di({
								record: t,
								patch: e
							}));
						}
						await i.bulkPut([...r.values()]);
					} catch (e) {
						if (b(e)) throw e;
						f("STORE_BULK_UPDATE_FAILED", {
							detail: e instanceof Error ? e.message : String(e),
							cause: e instanceof Error ? e : void 0
						});
					}
					this.perf.stop("core::store::bulkWrite::update");
				}
				r?.length && (this.perf.start("core::store::bulkWrite::delete"), await i.bulkDelete(r), this.perf.stop("core::store::bulkWrite::delete")), await this.bumpVersion(e);
			});
		} finally {
			this.recordCounts.delete(e);
		}
	}
	async getHead(e) {
		return (await this.db.table("_meta").get(`head:${e}`))?.value ?? 0;
	}
	async setHead(e, t) {
		await this.db.table(G).put({
			key: `head:${e}`,
			value: t
		});
	}
	async bumpVersion(e) {
		let t = this.db.table(G), n = await t.get(za(e));
		await t.put({
			key: za(e),
			value: (n?.value ?? 0) + 1
		});
	}
	async getExportVersion(e) {
		let { documentId: t } = e;
		await this.ensureCurrentSchema();
		let n = this.db.table(U), r = this.db.table(G);
		return this.db.transaction("r", n, r, async () => {
			let e = await n.get(t);
			if (e && Za(e).status === "ready") return (await r.get(za(t)))?.value ?? 0;
		});
	}
	async countUnguarded(e) {
		await this.ensureCurrentSchema();
		let t = this.recordCounts.get(e);
		if (t !== void 0) return t;
		let n = await this.recordTable(e);
		if (!n) return 0;
		let r = await n.count();
		return this.recordCounts.set(e, r), r;
	}
	async countStored(e) {
		let t = await this.recordTable(e);
		return t ? t.count() : 0;
	}
	async getByTagNameInDocumentUnguarded(e, t) {
		let n = await this.recordTable(t);
		return n ? n.where({ tagName: e }).toArray() : [];
	}
	async getManyUnguarded(e, t) {
		let n = await this.recordTable(t);
		return n ? n.bulkGet(e) : e.map(() => void 0);
	}
	buildStores(e) {
		let t = {
			[U]: Wa(Kt),
			[W]: Wa(qt),
			[G]: Wa(Jt),
			[J]: Wa(Yt)
		}, n = Wa(Xt);
		for (let e of this.knownDocuments.keys()) t[this.resolveTableName(e)] = this.dexieRecordSchema, t[Gt(e)] = n;
		return e?.drop && (t[this.resolveTableName(e.drop)] = null, t[Gt(e.drop)] = null), t;
	}
	async reopenWithNewSchema(e) {
		this.perf.start("core::store::reopenSchema");
		try {
			this.db.close(), await Ka(), this.schemaVersion++, this.db = new Da(this.name), this.db.version(this.schemaVersion).stores(this.buildStores(e)), this.attachVersionChangeHandler(), await this.db.open(), await this.db.table(G).put({
				key: "schemaVersion",
				value: this.schemaVersion
			}), this.stale = !1;
		} finally {
			this.perf.stop("core::store::reopenSchema");
		}
	}
	async reloadFromPersisted() {
		this.recordCounts.clear(), this.db.isOpen() && (this.db.close(), await Ka());
		let e = new Da(this.name);
		e.version(1).stores({
			[U]: Wa(Kt),
			[W]: Wa(qt),
			[G]: Wa(Jt),
			[J]: Wa(Yt)
		});
		try {
			await e.open();
			let t = (await e.table(U).toArray()).map(Za), n = await e.table(G).get("schemaVersion");
			e.close(), this.knownDocuments = new Map(t.map((e) => [e.id, e])), this.schemaVersion = n?.value ?? 1;
		} catch {
			e.close();
		}
		this.db = new Da(this.name), this.db.version(this.schemaVersion).stores(this.buildStores()), this.attachVersionChangeHandler(), await this.db.open(), this.stale = !1;
	}
	attachVersionChangeHandler() {
		this.db.on("versionchange", () => {
			this.db.close(), this.stale = !0;
		});
	}
	async ensureCurrentSchema() {
		this.stale && await this.withSchemaLock(async () => {
			this.stale && await this.reloadFromPersisted();
		});
	}
	withSchemaLock(e) {
		return this.schemaLock = this.schemaLock.then(e, e), this.schemaLock;
	}
	resolveTableName(e) {
		return q(e);
	}
	async writeTable(e) {
		let t = await this.recordTable(e);
		return t || yt({
			documentId: e,
			what: "records"
		}), t;
	}
	async recordTable(e) {
		await this.ensureCurrentSchema();
		let t = this.resolveTableName(e);
		if (this.db.tables.some((e) => e.name === t)) return this.db.table(t);
	}
};
function Ka() {
	return new Promise((e) => setTimeout(e, 0));
}
async function qa(e) {
	let { table: t, creates: n, documentId: r } = e;
	try {
		await t.bulkAdd(n);
	} catch (e) {
		let t = e instanceof Error ? e : void 0, i = Ja(e);
		if (i) {
			let e = i.map((e) => ({
				position: e,
				id: n[e].id
			}));
			function a(e) {
				return n.findIndex((t) => t.id === e.id) < e.position;
			}
			xt({
				documentId: r,
				held: e.filter((e) => !a(e)).map((e) => e.id),
				repeated: e.filter(a).map((e) => e.id),
				cause: t
			});
		}
		f("STORE_BULK_ADD_FAILED", {
			detail: e instanceof Error ? e.message : String(e),
			cause: t
		});
	}
}
function Ja(e) {
	if (!(e instanceof Da.BulkError)) return;
	let t = Object.entries(e.failuresByPos).filter(([, e]) => e.name === "ConstraintError").map(([e]) => Number(e));
	return t.length > 0 ? t : void 0;
}
async function Ya(e) {
	let { table: t, updates: n, documentId: r } = e;
	return n.length === 0 ? [] : (await t.bulkGet(n.map((e) => e.id))).map((e, t) => (e || bt({
		documentId: r,
		recordId: n[t].id
	}), e));
}
function Xa(e, t) {
	e.has(t) || yt({
		documentId: t,
		what: "a blob"
	});
}
function Za(e) {
	return e.status ? e : {
		...e,
		status: "ready"
	};
}
function Qa(e) {
	let { record: t } = e, { id: n, tagName: r, namespace: i, attributes: a, value: o, parent: s, children: c } = t;
	return {
		id: n,
		tagName: r,
		namespace: {
			prefix: i.prefix,
			uri: i.uri
		},
		attributes: a.map((e) => $a({ value: e })),
		value: o,
		parent: s === null ? null : {
			id: s.id,
			tagName: s.tagName
		},
		children: c.map((e) => $a({ value: e }))
	};
}
function $a(e) {
	return eo({ value: e.value });
}
function eo(e) {
	let { value: t } = e;
	if (typeof t != "object" || !t) return t;
	if (Array.isArray(t)) return t.map((e) => eo({ value: e }));
	let n = {};
	for (let e in t) n[e] = eo({ value: t[e] });
	return n;
}
var to = /* @__PURE__ */ new Map(), no = R(), ro = ut(), io = /* @__PURE__ */ new Map();
function ao(e) {
	let { key: t, connection: n, listener: r } = e, i = io.get(t) ?? /* @__PURE__ */ new Set();
	io.set(t, i);
	let a = {
		connection: n,
		listener: r
	};
	return i.add(a), function() {
		i.delete(a), i.size === 0 && io.get(t) === i && io.delete(t);
	};
}
function oo(e) {
	let { key: t, name: n, connection: r, change: i } = e, a = {
		...i,
		timestamp: Date.now()
	};
	for (let e of Array.from(io.get(t) ?? [])) zt({
		listener: e.listener,
		value: {
			type: "change",
			message: a,
			own: e.connection === r
		},
		of: Bt({ name: n })
	});
}
function so(e) {
	let { project: t, dialecteId: n } = e;
	return n === void 0 ? encodeURIComponent(t) : Lr({
		dialecteId: n,
		project: t
	});
}
function co(e) {
	return to.get(e.key);
}
function lo(e) {
	let { key: t } = e, n = to.get(t);
	if (n) return n;
	let r = fo();
	return to.set(t, r), r;
}
function uo(e) {
	to.delete(e.key);
}
function fo() {
	return {
		documents: /* @__PURE__ */ new Map(),
		records: /* @__PURE__ */ new Map(),
		changelog: /* @__PURE__ */ new Map(),
		heads: /* @__PURE__ */ new Map(),
		discardedCommits: /* @__PURE__ */ new Map(),
		blobs: /* @__PURE__ */ new Map(),
		blobData: /* @__PURE__ */ new Map(),
		runningImports: /* @__PURE__ */ new Set(),
		versions: /* @__PURE__ */ new Map()
	};
}
function po(e) {
	let { state: t, documentId: n } = e;
	t.versions.set(n, (t.versions.get(n) ?? 0) + 1);
}
function mo(e) {
	let [t, ...n] = [...e].sort((e, t) => e.size - t.size);
	return t ? [...t].filter((e) => n.every((t) => t.has(e))) : [];
}
function ho() {
	let e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
	function r(e) {
		let { id: n, tagName: r } = e, i = t.get(r);
		i?.ids.delete(n) && (i.ids.size === 0 ? t.delete(r) : i.sorted = void 0);
	}
	function i(i) {
		let a = e.get(i.id);
		if (e.set(i.id, i), n.delete(i.tagName), a && n.delete(a.tagName), a?.tagName === i.tagName) return;
		a && r({
			id: a.id,
			tagName: a.tagName
		});
		let o = t.get(i.tagName) ?? {
			ids: /* @__PURE__ */ new Set(),
			sorted: void 0
		};
		t.set(i.tagName, o), o.ids.add(i.id), o.sorted = void 0;
	}
	function a(t) {
		let i = e.get(t);
		i && (e.delete(t), n.delete(i.tagName), r({
			id: t,
			tagName: i.tagName
		}));
	}
	function o(e) {
		let n = t.get(e);
		return n ? (n.sorted ??= [...n.ids].sort(), n.sorted) : [];
	}
	function s(r) {
		let { tagName: i, attributes: a } = r, o = t.get(i);
		if (!o || a.length === 0) return [];
		let s = n.get(i) ?? /* @__PURE__ */ new Map();
		return n.set(i, s), mo(a.map(function({ name: t, values: n }) {
			let r = s.get(t) ?? go({
				ids: o.ids,
				byId: e,
				name: t
			});
			return s.set(t, r), new Set(n.flatMap((e) => [...r.get(e) ?? []]));
		})).sort();
	}
	return {
		get: (t) => e.get(t),
		has: (t) => e.has(t),
		size: () => e.size,
		records: () => e.values(),
		idsOfTag: o,
		idsOfAttributes: s,
		put: i,
		drop: a
	};
}
function go(e) {
	let { ids: t, byId: n, name: r } = e, i = /* @__PURE__ */ new Map();
	for (let e of t) for (let t of n.get(e)?.attributes ?? []) {
		if (t.name !== r) continue;
		let n = i.get(t.value) ?? /* @__PURE__ */ new Set();
		i.set(t.value, n), n.add(e);
	}
	return i;
}
var _o = ho(), vo = fo();
function yo(e) {
	let { table: t, creates: n, documentId: r } = e, i = /* @__PURE__ */ new Set(), a = [], o = [];
	for (let { id: e } of n) t.has(e) && a.push(e), i.has(e) && o.push(e), i.add(e);
	(a.length > 0 || o.length > 0) && xt({
		documentId: r,
		held: a,
		repeated: o
	});
}
var bo = class e {
	static {
		this.reconcileWarned = !1;
	}
	constructor(e, t) {
		this.closed = !1, this.closings = 0, this.operations = lt(), this.versionEngines = 0, Zt({
			project: e,
			dialecteId: t?.dialecteId
		}), this.name = e, this.writable = t?.writable ?? !0, this.runtime = t?.runtime, this.stateKey = so({
			project: e,
			dialecteId: t?.dialecteId
		});
	}
	async open() {
		let e = this.closings;
		for (await this.operations.whenIdle(); this.destroying;) await this.destroying.catch(ct);
		this.closings !== e && Ct({ storeName: this.name }), this.closed = !1, this.writable && no.markOpen({
			name: this.stateKey,
			connection: this
		}), await ga({
			store: this,
			isRunning: (e) => e.writeId !== void 0 && this.readState().runningImports.has(e.writeId)
		});
	}
	async close() {
		if (this.closed = !0, this.closings += 1, no.markClosed({
			name: this.stateKey,
			connection: this
		}), this.operations.count === 0) return;
		let e = this.operations.whenIdle();
		ro.markClosing({
			name: this.stateKey,
			until: e
		}), await e;
	}
	async destroy() {
		if (!this.writable) return;
		for (; this.destroying;) await this.destroying.catch(ct);
		let e = this.destroyOnceIdle();
		this.destroying = e;
		try {
			await e;
		} finally {
			this.destroying === e && (this.destroying = void 0);
		}
	}
	async destroyOnceIdle() {
		await this.operations.whenIdle(), await ro.settled({ name: this.stateKey });
		let e = no.others({
			name: this.stateKey,
			connection: this
		});
		e > 0 && St({
			storeName: this.name,
			connections: e
		}), uo({ key: this.stateKey }), no.markClosed({
			name: this.stateKey,
			connection: this
		});
	}
	async reconcile() {
		await this.guardOpen(), e.reconcileWarned || (e.reconcileWarned = !0, console.warn("[dialecte] InMemoryStore.reconcile() is a no-op: in-memory documents are not shared across realms/tabs. Use a store shared across realms (the local store, or a registered kind) for cross-realm sync."));
	}
	async isDocumentReadable(e) {
		return await this.guardOpen(), this.readState().documents.has(e);
	}
	async registerDocument(e) {
		await this.guardOpen(), await this.registerDocumentUnguarded(e), this.announce({
			type: "init-empty-document",
			documentId: e.id
		});
	}
	async getDocument(e) {
		return await this.guardOpen(), this.getDocumentUnguarded(e);
	}
	async getDocuments() {
		return await this.guardOpen(), structuredClone([...this.readState().documents.values()].sort(ua));
	}
	async updateDocument(e, t) {
		await this.guardOpen();
		let n = this.readState().documents.get(e);
		await this.updateDocumentUnguarded(e, t), da({
			first: n,
			second: this.readState().documents.get(e)
		}) || this.announce({
			type: "document-updated",
			documentId: e
		});
	}
	async removeDocument(e) {
		await this.guardOpen();
		let t = this.readState().documents.has(e);
		await this.removeDocumentUnguarded(e), t && this.announce({
			type: "document-removed",
			documentId: e
		});
	}
	async get(e, t) {
		return await this.guardOpen(), this.getUnguarded(e, t);
	}
	async getByDocumentId(e) {
		return await this.guardOpen(), this.getByDocumentIdUnguarded(e);
	}
	async count(e) {
		return await this.guardOpen(), this.countUnguarded(e);
	}
	async getByTagNameInDocument(e, t) {
		return await this.guardOpen(), this.getByTagNameInDocumentUnguarded(e, t);
	}
	async getMany(e, t) {
		return await this.guardOpen(), this.getManyUnguarded(e, t);
	}
	async getByAttributes(e) {
		return await this.guardOpen(), this.getByAttributesUnguarded(e);
	}
	async readVersioned(e) {
		return await this.guardOpen(), zr({
			reads: this.unguardedReads(),
			read: e.read,
			versionOf: () => this.versionOf(e.documentId)
		});
	}
	unguardedReads() {
		return {
			get: (e, t) => this.getUnguarded(e, t),
			getMany: (e, t) => this.getManyUnguarded(e, t),
			getByTagNameInDocument: (e, t) => this.getByTagNameInDocumentUnguarded(e, t),
			getByAttributes: (e) => this.getByAttributesUnguarded(e),
			getByDocumentId: (e) => this.getByDocumentIdUnguarded(e)
		};
	}
	versionOf(e) {
		let t = this.readState();
		return this.versionEngine?.state !== t && (this.versionEngines += 1, this.versionEngine = {
			state: t,
			engineId: `${this.name}#${this.versionEngines}`
		}), {
			engineId: this.versionEngine.engineId,
			count: t.versions.get(e) ?? 0
		};
	}
	async getUnguarded(e, t) {
		let n = this.readTable(t).get(e);
		return n && Qa({ record: n });
	}
	async getByDocumentIdUnguarded(e) {
		return [...this.readTable(e).records()].sort(ua).map((e) => Qa({ record: e }));
	}
	async getByAttributesUnguarded(e) {
		let { documentId: t, ...n } = e, r = this.readTable(t);
		return r.idsOfAttributes(n).flatMap(function(e) {
			let t = r.get(e);
			return t ? [Qa({ record: t })] : [];
		});
	}
	async importFile(e) {
		let t = this.guardOpen();
		t && await t, this.guardWritable();
		let { file: n, options: r, writeId: i = crypto.randomUUID(), onProgress: a, signal: o } = e, s = la({
			runtime: this.runtime,
			storeName: this.name,
			operation: "import"
		}), { runningImports: c } = lo({ key: this.stateKey });
		c.add(i), this.operations.start();
		try {
			let e = await ia({
				store: this.ownImportTarget(),
				runtime: s,
				file: n,
				options: r,
				writeId: i
			}, {
				onProgress: a,
				signal: o
			});
			return this.announce({
				type: "document-imported",
				documentId: e.record.id
			}), e;
		} finally {
			c.delete(i), this.operations.end();
		}
	}
	async exportFile(e) {
		let t = this.guardOpen();
		t && await t;
		let { documentId: n, options: r, onProgress: i, signal: a } = e, o = la({
			runtime: this.runtime,
			storeName: this.name,
			operation: "export"
		});
		this.operations.start();
		try {
			return await Tr({
				source: this.ownExportSource(),
				runtime: o,
				documentId: n,
				options: r
			}, {
				onProgress: i,
				signal: a
			});
		} finally {
			this.operations.end();
		}
	}
	async getWriteOutcome(e) {
		await this.guardOpen();
		let { writeId: t } = e, { documents: n, changelog: r, discardedCommits: i, runningImports: a } = this.readState(), o = [...r.values()].some((e) => e.some((e) => e.writeId === t)) || [...i.values()].some((e) => e.has(t));
		return Ur({
			documents: [...n.values()],
			writeId: t,
			committed: o,
			isRunning: (e) => a.has(e.writeId)
		});
	}
	async bulkWrite(e, t) {
		await this.guardOpen();
		let n = this.readTable(e), r = (t.deletes ?? []).filter(function(e) {
			return n.has(e);
		});
		await this.bulkWriteUnguarded(e, t), (t.creates?.length ?? 0) + (t.updates?.length ?? 0) + r.length > 0 && this.announce({
			type: "commit",
			documentId: e,
			changeId: Et(),
			changes: { unknown: !0 }
		});
	}
	async commit(e) {
		await this.guardOpen(), this.guardWritable();
		let { documentId: t, writeId: n, deletes: r, onProgress: i } = e, { state: a, table: o } = this.writeTarget(t);
		a.documents.get(t)?.status === "importing" && yt({
			documentId: t,
			what: "a commit"
		}), Dt({
			field: "writeId",
			value: n
		});
		let s = e.updates.map((e) => {
			let n = o.get(e.id);
			return n || bt({
				documentId: t,
				recordId: e.id
			}), n;
		}), c = ui({ records: e.creates });
		yo({
			table: o,
			creates: c,
			documentId: t
		});
		let l = ui({ records: e.updates });
		po({
			state: a,
			documentId: t
		});
		for (let e of c) o.put(e);
		for (let e of l) o.put(e);
		let u = r.flatMap(({ id: e }) => {
			let t = o.get(e);
			return t ? [t] : [];
		});
		for (let { id: e } of r) o.drop(e);
		let { heads: d, changelog: f, discardedCommits: p } = a, m = d.get(t) ?? 0, h = f.get(t) ?? [], g = h.filter((e) => e.sequenceNumber <= m), _ = p.get(t) ?? /* @__PURE__ */ new Set();
		for (let e of h) e.sequenceNumber > m && _.add(e.writeId);
		p.set(t, _);
		let v = m + 1, y = {
			id: g.length + 1,
			documentId: t,
			sequenceNumber: v,
			timestamp: Date.now(),
			writeId: n,
			operations: {
				creates: c,
				updates: l.map((e, t) => ({
					before: s[t],
					after: e
				})),
				deletes: u
			}
		};
		g.push(y), f.set(t, g), d.set(t, v), pi({
			onProgress: i,
			parts: [
				c.length,
				l.length,
				r.length
			]
		}), this.announce({
			type: "commit",
			documentId: t,
			changeId: n,
			changes: Gr({
				creates: e.creates,
				updates: e.updates,
				deletes: r
			})
		});
	}
	async undo(e) {
		await this.guardOpen(), this.guardWritable();
		let { documentId: t, changeId: n } = e;
		Dt({
			field: "changeId",
			value: n
		});
		let r = this.writeState(), i = r?.heads.get(t) ?? 0;
		if (!r || i === 0) return !1;
		let a = (r.changelog.get(t) ?? []).find((e) => e.sequenceNumber === i);
		if (!a) return !1;
		let { table: o } = this.writeTarget(t), { creates: s, updates: c, deletes: l } = a.operations;
		for (let e of l) o.put(e);
		for (let e of c) o.put(e.before);
		for (let e of s) o.drop(e.id);
		r.heads.set(t, i - 1), po({
			state: r,
			documentId: t
		});
		let u = Yr({
			operations: a.operations,
			direction: "back"
		});
		return this.announce({
			type: "commit",
			documentId: t,
			changeId: n,
			changes: u
		}), {
			changeId: n,
			changes: u
		};
	}
	async redo(e) {
		await this.guardOpen(), this.guardWritable();
		let { documentId: t, changeId: n } = e;
		Dt({
			field: "changeId",
			value: n
		});
		let r = this.writeState();
		if (!r) return !1;
		let i = (r.heads.get(t) ?? 0) + 1, a = (r.changelog.get(t) ?? []).find((e) => e.sequenceNumber === i);
		if (!a) return !1;
		let { table: o } = this.writeTarget(t), { creates: s, updates: c, deletes: l } = a.operations;
		for (let e of s) o.put(e);
		for (let e of c) o.put(e.after);
		for (let e of l) o.drop(e.id);
		r.heads.set(t, i), po({
			state: r,
			documentId: t
		});
		let u = Yr({
			operations: a.operations,
			direction: "forward"
		});
		return this.announce({
			type: "commit",
			documentId: t,
			changeId: n,
			changes: u
		}), {
			changeId: n,
			changes: u
		};
	}
	async getHistoryStatus(e) {
		await this.guardOpen();
		let { heads: t, changelog: n } = this.readState(), r = t.get(e) ?? 0, i = n.get(e) ?? [];
		return {
			canUndo: r > 0,
			canRedo: i.some((e) => e.sequenceNumber === r + 1)
		};
	}
	async getChangeLog(e) {
		return await this.guardOpen(), structuredClone([...this.readState().changelog.get(e) ?? []]);
	}
	getDatabaseInstance() {
		return null;
	}
	async addBlob(e, t) {
		await this.guardOpen(), this.guardWritable();
		let n = this.writeState();
		n?.documents.has(e.documentId) || yt({
			documentId: e.documentId,
			what: "a blob"
		}), n.blobs.set(e.id, Ot({ value: e }));
		let r = n.blobData.get(e.documentId) ?? /* @__PURE__ */ new Map();
		n.blobData.set(e.documentId, r.set(e.id, t)), this.announce({
			type: "blob-added",
			blobId: e.id,
			documentId: e.documentId
		});
	}
	async getBlob(e) {
		await this.guardOpen();
		let { blobs: t, blobData: n } = this.readState(), r = t.get(e);
		if (!r) return;
		let i = n.get(r.documentId)?.get(e);
		if (i) return {
			entry: structuredClone(r),
			data: i
		};
	}
	async getBlobsByDocument(e) {
		return await this.guardOpen(), structuredClone([...this.readState().blobs.values()].filter((t) => t.attachedTo.some((t) => t.documentId === e)).sort(ua));
	}
	async getBlobsByRecord(e, t) {
		return await this.guardOpen(), structuredClone([...this.readState().blobs.values()].filter((n) => n.attachedTo.some((n) => n.documentId === e && n.recordRef === t)).sort(ua));
	}
	async getStandaloneBlobs() {
		return await this.guardOpen(), structuredClone([...this.readState().blobs.values()].filter((e) => e.attachedTo.length === 0).sort(ua));
	}
	async attachBlob(e, t) {
		await this.guardOpen(), this.guardWritable();
		let n = this.writeState(), r = n?.blobs.get(e);
		n && r || f("STORE_BLOB_NOT_FOUND", { detail: `Blob "${e}" not found` });
		let i = Ot({ value: t });
		r.attachedTo.some((e) => e.documentId === t.documentId && e.recordRef === t.recordRef && e.attribute === t.attribute) || (n.blobs.set(e, {
			...r,
			attachedTo: [...r.attachedTo, i]
		}), this.announce({
			type: "blob-attached",
			blobId: e,
			ref: i
		}));
	}
	async detachBlob(e, t) {
		await this.guardOpen(), this.guardWritable();
		let n = this.writeState(), r = n?.blobs.get(e);
		n && r || f("STORE_BLOB_NOT_FOUND", { detail: `Blob "${e}" not found` });
		let i = r.attachedTo.filter((e) => e.documentId !== t.documentId || e.recordRef !== t.recordRef);
		i.length !== r.attachedTo.length && (n.blobs.set(e, {
			...r,
			attachedTo: i
		}), this.announce({
			type: "blob-detached",
			blobId: e,
			ref: {
				documentId: t.documentId,
				recordRef: t.recordRef
			}
		}));
	}
	async removeBlob(e) {
		await this.guardOpen(), this.guardWritable();
		let t = this.writeState(), n = t?.blobs.get(e);
		t && n && (t.blobs.delete(e), t.blobData.get(n.documentId)?.delete(e), this.announce({
			type: "blob-removed",
			blobId: e
		}));
	}
	subscribe(e) {
		return this.writable ? ao({
			key: this.stateKey,
			connection: this,
			listener: (t) => {
				this.closed || e(t);
			}
		}) : xo;
	}
	announce(e) {
		oo({
			key: this.stateKey,
			name: this.name,
			connection: this,
			change: e
		});
	}
	async registerDocumentUnguarded(e) {
		this.guardWritable();
		let t = lo({ key: this.stateKey });
		t.documents.has(e.id) && gt({ documentId: e.id });
		let n = Ot({ value: e });
		ai({
			document: n,
			documents: [...t.documents.values()]
		}), t.documents.set(e.id, n), t.records.set(q(e.id), ho()), t.blobData.set(e.id, /* @__PURE__ */ new Map());
	}
	async getDocumentUnguarded(e) {
		return structuredClone(this.readState().documents.get(e));
	}
	async updateDocumentUnguarded(e, t) {
		this.guardWritable();
		let n = Ot({ value: t }), r = this.writeState(), i = r?.documents.get(e);
		if (!r || !i) return;
		let a = ii({
			document: i,
			updates: n
		});
		a.path !== i.path && ai({
			document: a,
			documents: [...r.documents.values()]
		}), r.documents.set(e, a);
	}
	async markReadyUnguarded(e) {
		let { documentId: t, registered: n } = e;
		this.guardWritable();
		let r = this.writeState(), i = r?.documents.get(t);
		r && i && _a({
			held: i,
			registered: n
		}) || yt({
			documentId: t,
			what: "its ready state"
		}), r.documents.set(t, {
			...i,
			status: "ready"
		});
	}
	async bulkWriteOwnImport(e) {
		let { documentId: t, ops: n, registered: r } = e, i = this.writeState()?.documents.get(t);
		_a({
			held: i,
			registered: r
		}) || yt({
			documentId: t,
			what: "records"
		}), await this.bulkWriteUnguarded(t, n);
	}
	async removeOwnImport(e) {
		let { documentId: t, registered: n } = e, r = this.writeState()?.documents.get(t);
		_a({
			held: r,
			registered: n
		}) && await this.removeDocumentUnguarded(t);
	}
	async removeDocumentUnguarded(e) {
		this.guardWritable();
		let t = this.writeState();
		if (t) {
			t.documents.delete(e), t.records.delete(q(e)), t.changelog.delete(e), t.heads.delete(e), t.discardedCommits.delete(e), po({
				state: t,
				documentId: e
			}), t.blobData.delete(e);
			for (let [n, r] of t.blobs) r.documentId === e && t.blobs.delete(n);
		}
	}
	async bulkWriteUnguarded(e, t) {
		this.guardWritable();
		let { state: n, table: r } = this.writeTarget(e), i = ui({ records: t.creates ?? [] });
		yo({
			table: r,
			creates: i,
			documentId: e
		});
		let a = new Set(i.map((e) => e.id)), o = Ot({ value: (t.updates ?? []).filter((e) => r.has(e.recordId) || a.has(e.recordId)) });
		for (let e of i) r.put(e);
		for (let e of o) {
			let t = r.get(e.recordId);
			t && r.put(di({
				record: t,
				patch: e
			}));
		}
		if (t.deletes) for (let e of t.deletes) r.drop(e);
		po({
			state: n,
			documentId: e
		});
	}
	readState() {
		return this.writable ? co({ key: this.stateKey }) ?? vo : vo;
	}
	writeState() {
		return co({ key: this.stateKey });
	}
	readTable(e) {
		return this.readState().records.get(q(e)) ?? _o;
	}
	writeTarget(e) {
		let t = this.writeState(), n = t?.records.get(q(e));
		return t && n || yt({
			documentId: e,
			what: "records"
		}), {
			state: t,
			table: n
		};
	}
	guardOpen() {
		if (this.closed && Ct({ storeName: this.name }), this.destroying) return this.guardOpenAfterOwnDestroy({ destroying: this.destroying });
		this.writable && no.markOpen({
			name: this.stateKey,
			connection: this
		});
	}
	async guardOpenAfterOwnDestroy(e) {
		await e.destroying.catch(ct), await this.guardOpen();
	}
	async writeOwnSession(e) {
		let { documentId: t, ops: n, control: r, registered: i } = e;
		await this.bulkWriteOwnImport({
			documentId: t,
			ops: n,
			registered: i
		}), xi({
			ops: n,
			control: r
		});
	}
	ownImportTarget() {
		let e;
		return {
			registerDocument: (t) => (e = t, this.registerDocumentUnguarded(t)),
			getDocument: (e) => this.getDocumentUnguarded(e),
			markReady: (t) => this.markReadyUnguarded({
				documentId: t,
				registered: e
			}),
			removeDocument: (t) => this.removeOwnImport({
				documentId: t,
				registered: e
			}),
			bulkWrite: (t, n) => this.bulkWriteOwnImport({
				documentId: t,
				ops: n,
				registered: e
			}),
			writeSession: (t, n, r) => this.writeOwnSession({
				documentId: t,
				ops: n,
				control: r,
				registered: e
			})
		};
	}
	ownExportSource() {
		return {
			getDocument: (e) => this.getDocumentUnguarded(e),
			count: (e) => this.countUnguarded(e),
			getByTagNameInDocument: (e, t) => this.getByTagNameInDocumentUnguarded(e, t),
			getMany: (e, t) => this.getManyUnguarded(e, t),
			getExportVersion: (e) => this.getExportVersion(e)
		};
	}
	async getExportVersion(e) {
		let { documentId: t } = e, { documents: n, versions: r } = this.readState();
		if (n.get(t)?.status === "ready") return r.get(t) ?? 0;
	}
	async countUnguarded(e) {
		return this.readTable(e).size();
	}
	async getByTagNameInDocumentUnguarded(e, t) {
		let n = this.readTable(t);
		return n.idsOfTag(e).flatMap(function(e) {
			let t = n.get(e);
			return t ? [Qa({ record: t })] : [];
		});
	}
	async getManyUnguarded(e, t) {
		let n = this.readTable(t);
		return e.map(function(e) {
			let t = n.get(e);
			return t && Qa({ record: t });
		});
	}
	guardWritable() {
		this.writable || f("STORE_NOT_WRITABLE", { detail: "In-memory store is read-only. Hydrate with a real document before writing." });
	}
};
function xo() {}
function So(e) {
	let { name: t, storage: n, runtime: r, perf: i, dialecteId: a } = e, { type: o } = n;
	if (n.type === "local") {
		let e = r.configs[r.defaultConfigKey];
		return new Ga(t, {
			recordSchema: e.database.recordSchema,
			perf: i,
			runtime: r
		});
	}
	return n.type === "inMemory" ? new bo(t, {
		writable: n.writable ?? !0,
		runtime: r,
		dialecteId: a
	}) : n.type === "custom" ? n.store : st({
		project: t,
		type: o
	}).storeOf({
		name: t,
		storage: n,
		runtime: r,
		dialecteId: a,
		perf: i
	});
}
async function Co(e) {
	let { store: t, state: n, projectName: r, perf: i, request: a } = e, { documentId: o, indent: s = !0, withDatabaseIds: c, xmlDocument: l, download: u } = a, d = n.documents.get(o);
	j(d, {
		key: "DOCUMENT_NOT_REGISTERED",
		detail: `Document "${o}" not registered in project "${r}"`
	});
	let { record: f } = d, p = u ? await m({
		filename: u === !0 ? `${f.name}${f.extension}` : u.filename,
		pickerType: To({ extension: f.extension })
	}) : void 0, h = await wo({
		store: t,
		documentId: o,
		indent: s,
		withDatabaseIds: c,
		perf: i
	});
	if (p) {
		let e = s ? h.file : (await wo({
			store: t,
			documentId: o,
			indent: !0,
			withDatabaseIds: c,
			perf: i
		})).file;
		await p.write(e);
	}
	if (!l) return h;
	let g = await Si({ file: s ? (await wo({
		store: t,
		documentId: o,
		indent: !1,
		withDatabaseIds: c,
		perf: i
	})).file : h.file });
	return {
		...h,
		xmlDocument: g
	};
}
async function wo(e) {
	let { store: t, documentId: n, indent: r, withDatabaseIds: i, perf: a } = e, o = await t.exportFile({
		documentId: n,
		options: {
			indent: r,
			withDatabaseIds: i
		}
	});
	return o.perf && a?.merge({
		report: o.perf,
		prefix: "store"
	}), {
		file: o.file,
		filename: o.filename
	};
}
function To(e) {
	let { extension: t } = e;
	return {
		description: `${t.replace(/^\./, "").toUpperCase()} Files`,
		accept: { "application/xml": [t] }
	};
}
async function Eo(e) {
	let { store: t, request: n } = e, { blobId: r, download: i } = n, a = typeof i == "object" ? await m({ filename: i.filename }) : void 0, o = await t.getBlob(r);
	j(o, {
		key: "BLOB_NOT_FOUND",
		detail: `Blob "${r}" not found in store`
	});
	let s = o.entry.name;
	return await (i === !0 ? await m({ filename: s }) : a)?.write(o.data), {
		entry: o.entry,
		data: o.data,
		filename: s
	};
}
function Do(e) {
	return {
		record: e,
		loading: !1,
		error: null,
		progress: null,
		history: [],
		lastUpdate: null,
		canUndo: !1,
		canRedo: !1
	};
}
function Oo(e, t) {
	let n = new Set(t.map((e) => e.id));
	for (let n of t) e.has(n.id) || e.set(n.id, Do(n));
	for (let t of e.keys()) n.has(t) || e.delete(t);
	return e;
}
async function ko(e) {
	let { store: t, configs: n, defaultConfigKey: r, options: i, hooks: a } = e, { configKey: o, config: s } = en({
		configs: n,
		defaultConfigKey: r,
		configKey: i?.configKey
	}), c = crypto.randomUUID(), l = {
		id: c,
		...Ao({
			options: i,
			config: s
		}),
		configKey: o,
		createdAt: Date.now(),
		status: "ready",
		metadata: i?.metadata,
		...i?.path !== void 0 && { path: i.path }
	};
	await t.registerDocument(l);
	let u = ze({
		dialecteConfig: s,
		hooks: a,
		record: {
			id: crypto.randomUUID(),
			tagName: s.rootElementName,
			namespace: s.namespaces.default,
			parent: null,
			children: []
		}
	});
	return await t.bulkWrite(c, { creates: [u] }), {
		documentId: c,
		record: l,
		documentState: Do(l)
	};
}
function Ao(e) {
	let { options: t, config: n } = e, { path: r, name: i, extension: a } = t ?? {}, o = ti({ extensions: n.io.supportedFileExtensions });
	if (r === void 0) return {
		name: i ?? "untitled",
		extension: a ?? o[0]
	};
	if (a === void 0) {
		let e = ni({
			path: r,
			extensions: o
		});
		return {
			name: i ?? e.name,
			extension: e.extension
		};
	}
	let { fileName: s } = ei({ path: r }), c = s.endsWith(a) ? s.slice(0, s.length - a.length) : s;
	return {
		name: i ?? c,
		extension: a
	};
}
function jo(e) {
	let { name: t, instance: n } = e;
	return n === void 0 ? `dialecte::project::${t}` : `dialecte::project::${t}::${n}`;
}
function Mo(e) {
	return e.status === "importing";
}
function No(e) {
	return e.filter((e) => !Mo(e));
}
var Po = {
	get: "get",
	getMany: "getMany",
	getByTagNameInDocument: "getByTagName",
	getByAttributes: "getByAttributes",
	getByDocumentId: "getByDocumentId"
}, Fo = [
	"getRoot",
	"getRecord",
	"getDefinition",
	"getRecords",
	"getChild",
	"getChildren",
	"getChildrenOfEach",
	"getRecordsByTagName",
	"findDescendants",
	"findDescendantsOfEach",
	"findAncestors",
	"findAncestorsOfEach",
	"getTree",
	"getSnapshot",
	"getAttribute",
	"getAttributes",
	"findByAttributes"
], Io = /* @__PURE__ */ new Set([
	"commit",
	"init-empty-document",
	"document-removed",
	"document-imported"
]), Lo = Symbol("dialecte.readScopeWiring"), Ro = Symbol("dialecte.readScope");
function zo(e) {
	Go({
		target: e.query,
		key: Lo,
		value: e.wiring
	});
}
function Bo(e) {
	let t = Reflect.get(e, Ro);
	return t && !t.closed ? t : void 0;
}
function Vo(e) {
	let { instance: t, call: n } = e, r = Reflect.get(t, Lo);
	if (!r || Bo(t)) return n(t);
	let i = Object.create(t), a = Uo({ wiring: r });
	Go({
		target: i,
		key: Ro,
		value: a
	}), Object.assign(i, r.bindQueryExtensions(i));
	let o;
	try {
		o = n(i);
	} catch (e) {
		throw a.closed = !0, e;
	}
	return Wo(o) ? o.then(function(e) {
		return a.closed = !0, e;
	}, function(e) {
		throw a.closed = !0, e;
	}) : (a.closed = !0, o);
}
function Ho(e) {
	let { prototype: t, names: n } = e;
	for (let e of n) {
		let n = Reflect.get(t, e);
		Reflect.set(t, e, function(...e) {
			return Vo({
				instance: this,
				call: (t) => n.apply(t, e)
			});
		});
	}
}
function Uo(e) {
	let { wiring: t } = e;
	return {
		documentId: t.documentId,
		epoch: t.epochOf(),
		version: void 0,
		records: /* @__PURE__ */ new Map(),
		tagAnswers: /* @__PURE__ */ new Map(),
		attributeAnswers: /* @__PURE__ */ new Map(),
		documentAnswer: void 0,
		closed: !1,
		epochOf: t.epochOf
	};
}
function Wo(e) {
	return typeof e == "object" && !!e && typeof e.then == "function";
}
function Go(e) {
	Object.defineProperty(e.target, e.key, {
		value: e.value,
		enumerable: !1,
		writable: !0,
		configurable: !0
	});
}
function Ko(e, t) {
	return e ? qo(e, t) : {};
}
function qo(e, t) {
	let n = {};
	for (let r of Object.keys(e)) {
		let i = e[r];
		n[r] = typeof i == "function" ? (...e) => Vo({
			instance: t,
			call: (t) => i(t, ...e)
		}) : qo(i, t);
	}
	return n;
}
function Jo(e, t = () => {}) {
	let n = [];
	function r() {
		if (n.length === 0) {
			e.progress = null;
			return;
		}
		let t = n[0], r = n[n.length - 1];
		e.progress = {
			current: t.current,
			total: t.total,
			label: r.label || t.label,
			step: n.length > 1 ? {
				current: r.current,
				total: r.total
			} : null
		};
	}
	return {
		plan({ steps: e, label: i }) {
			n.push({
				current: 0,
				total: e,
				label: i ?? "",
				open: !1
			}), r(), t(!1);
		},
		nextStep(e) {
			let i = n.at(-1);
			i && (i.open && i.current++, i.open = !0, e !== void 0 && (i.label = e), r(), t(!1));
		},
		endPlan() {
			if (n.length === 0) return;
			n.pop();
			let e = n.length === 0;
			r(), t(e);
		},
		forceClear() {
			n = [], e.progress = null, t(!0);
		}
	};
}
var Yo = Object.freeze({
	plan() {},
	nextStep() {},
	endPlan() {},
	forceClear() {}
});
function Xo() {
	return {
		log: [],
		byId: /* @__PURE__ */ new Map(),
		byAttribute: /* @__PURE__ */ new Map(),
		appended: /* @__PURE__ */ new Map()
	};
}
function Zo(e) {
	let { stagedOperations: t, operation: n } = e, { log: r, byId: i, byAttribute: a, appended: o } = t, s = n.status === "deleted" ? n.oldRecord.id : n.newRecord.id, c = i.get(s);
	c && c.status !== "deleted" && Qo({
		record: c.newRecord,
		index: a,
		act: "remove"
	}), n.status === "deleted" ? o.delete(s) : (Qo({
		record: n.newRecord,
		index: a,
		act: "add"
	}), (c === void 0 ? n.status === "created" : c.status === "deleted") && !o.has(s) && o.set(s, r.length)), r.push(n), i.set(s, n);
}
function Qo(e) {
	let { record: t, index: n, act: r } = e, i = n.get(t.tagName) ?? /* @__PURE__ */ new Map();
	n.set(t.tagName, i);
	for (let { name: e, value: n } of t.attributes) {
		let a = i.get(e) ?? /* @__PURE__ */ new Map();
		i.set(e, a);
		let o = a.get(n) ?? /* @__PURE__ */ new Set();
		a.set(n, o), r === "add" ? o.add(t.id) : o.delete(t.id), o.size === 0 && a.delete(n), a.size === 0 && i.delete(e);
	}
	i.size === 0 && n.delete(t.tagName);
}
function $o(e) {
	let { perf: t, member: n, records: r } = e;
	if (t === Y) return;
	let i = `core::store::records.${n}`;
	for (let e of r) e !== void 0 && t.count(i);
}
async function es(e) {
	let { context: t, read: n } = e, r = t.kind === "query" ? t.readScope : void 0, i = t.store;
	if (!r || r.closed || typeof i.readVersioned != "function") return ts({
		context: t,
		read: n
	});
	ns({ scope: r });
	let a = rs({
		scope: r,
		read: n
	});
	return a.complete ? (t.perf.count("core::query::readScope.hit"), a.value) : os({
		context: t,
		scope: r,
		store: i,
		read: n,
		heldIds: a.heldIds
	});
}
async function ts(e) {
	let { context: t, read: n } = e, r = t.store[n.member];
	t.perf.count(`core::store::${Po[n.member]}`);
	let i = await r.apply(t.store, n.args);
	return ms({
		context: t,
		read: n,
		value: i
	}), i;
}
function ns(e) {
	let { scope: t } = e, n = t.epochOf();
	n !== t.epoch && (us({ scope: t }), t.epoch = n, t.version = void 0);
}
function rs(e) {
	let { scope: t, read: n } = e, r = {
		complete: !1,
		heldIds: /* @__PURE__ */ new Set()
	};
	switch (n.member) {
		case "get": {
			let [e] = n.args;
			return t.records.has(e) ? {
				complete: !0,
				value: ps(t.records.get(e)),
				heldIds: r.heldIds
			} : r;
		}
		case "getMany": {
			let [e] = n.args, r = new Set(e.filter((e) => t.records.has(e)));
			return r.size < new Set(e).size ? {
				complete: !1,
				heldIds: r
			} : {
				complete: !0,
				value: e.map((e) => ps(t.records.get(e))),
				heldIds: r
			};
		}
		case "getByTagNameInDocument": {
			let [e] = n.args, i = t.tagAnswers.get(e) ?? is({
				scope: t,
				tagName: e
			});
			return i ? as({
				scope: t,
				ids: i
			}) : r;
		}
		case "getByAttributes": {
			let e = t.attributeAnswers.get(ds({ read: n }));
			return e ? as({
				scope: t,
				ids: e
			}) : r;
		}
		case "getByDocumentId": return t.documentAnswer ? as({
			scope: t,
			ids: t.documentAnswer
		}) : r;
	}
}
function is(e) {
	let { scope: t, tagName: n } = e;
	return t.documentAnswer?.filter((e) => t.records.get(e)?.tagName === n);
}
function as(e) {
	let { scope: t, ids: n } = e;
	return {
		complete: !0,
		value: n.map((e) => ps(t.records.get(e))),
		heldIds: /* @__PURE__ */ new Set()
	};
}
async function os(e) {
	let { context: t, scope: n, store: r, read: i, heldIds: a } = e, o = n.epoch, s = n.version, c = cs({
		read: i,
		heldIds: a
	}), l = c !== i, u = await ss({
		context: t,
		scope: n,
		store: r,
		read: c
	}), d = n.closed || n.epochOf() !== o, f = fs({
		held: n.version,
		answered: u.version
	});
	if (d || f === "older") return l ? (await ss({
		context: t,
		scope: n,
		store: r,
		read: i
	})).value : u.value;
	if (f === "newer") {
		if (us({ scope: n }), n.version = u.version, l) return os({
			...e,
			heldIds: /* @__PURE__ */ new Set()
		});
	} else if (l && n.version !== s) return os({
		...e,
		heldIds: /* @__PURE__ */ new Set()
	});
	return ls({
		scope: n,
		read: c,
		value: u.value
	}), rs({
		scope: n,
		read: i
	}).value;
}
async function ss(e) {
	let { context: t, scope: n, store: r, read: i } = e;
	t.perf.count(`core::store::${Po[i.member]}`);
	let a = await r.readVersioned({
		documentId: n.documentId,
		read: i
	});
	return ms({
		context: t,
		read: i,
		value: a.value
	}), a;
}
function cs(e) {
	let { read: t, heldIds: n } = e;
	if (t.member !== "getMany" || n.size === 0) return t;
	let [r, i] = t.args;
	return {
		member: "getMany",
		args: [[...new Set(r.filter((e) => !n.has(e)))], i]
	};
}
function ls(e) {
	let { scope: t, read: n, value: r } = e;
	if (n.member === "get") {
		t.records.set(n.args[0], r);
		return;
	}
	if (n.member === "getMany") {
		let e = r;
		n.args[0].forEach((n, r) => t.records.set(n, e[r]));
		return;
	}
	let i = r;
	for (let e of i) t.records.set(e.id, e);
	let a = i.map((e) => e.id);
	n.member === "getByTagNameInDocument" ? t.tagAnswers.set(n.args[0], a) : n.member === "getByAttributes" ? t.attributeAnswers.set(ds({ read: n }), a) : t.documentAnswer = a;
}
function us(e) {
	let { scope: t } = e;
	t.records.clear(), t.tagAnswers.clear(), t.attributeAnswers.clear(), t.documentAnswer = void 0;
}
function ds(e) {
	let [{ tagName: t, attributes: n }] = e.read.args;
	return JSON.stringify([t, n]);
}
function fs(e) {
	let { held: t, answered: n } = e;
	return t === void 0 || t.engineId !== n.engineId ? "newer" : n.count === t.count ? "same" : n.count > t.count ? "newer" : "older";
}
function ps(e) {
	return e && Qa({ record: e });
}
function ms(e) {
	let { context: t, read: n, value: r } = e, i = Array.isArray(r) ? r : [r];
	$o({
		perf: t.perf,
		member: Po[n.member],
		records: i
	});
}
function hs(e) {
	let { stagedOperations: t, tagName: n, id: r } = e, { log: i, byId: a } = t;
	if (r !== void 0) {
		let e = a.get(r);
		return e ? gs({
			operation: e,
			tagName: n,
			id: r
		}) : void 0;
	}
	for (let e = i.length - 1; e >= 0; e--) {
		let t = i[e];
		if ((t.status === "created" || t.status === "updated") && Oe(t.newRecord, n)) return {
			...t.newRecord,
			status: t.status
		};
		if (t.status === "deleted" && Oe(t.oldRecord, n)) return {
			...t.oldRecord,
			status: "deleted"
		};
	}
}
function gs(e) {
	let { operation: t, tagName: n, id: r } = e;
	if ((t.status === "created" || t.status === "updated") && t.newRecord.id === r) return _s(t.newRecord.tagName, n, r), {
		...t.newRecord,
		status: t.status
	};
	if (t.status === "deleted" && t.oldRecord.id === r) return _s(t.oldRecord.tagName, n, r), {
		...t.oldRecord,
		status: "deleted"
	};
}
function _s(e, t, n) {
	e !== t && f("ELEMENT_TAGNAME_MISMATCH", {
		detail: `Expected tagName '${t}', got '${e}' for id '${n}'`,
		ref: {
			tagName: t,
			id: n
		},
		meta: {
			id: n,
			expectedTagName: t,
			actualTagName: e
		}
	});
}
function vs(e) {
	let { rawRecords: t, stagedOperations: n, tagName: r } = e, i = new Map(t.map((e) => [e.id, {
		...e,
		status: "unchanged"
	}]));
	for (let e of n) {
		if (e.status === "created" || e.status === "updated") {
			if (!Oe(e.newRecord, r)) continue;
			i.set(e.newRecord.id, {
				...e.newRecord,
				status: e.status
			});
		}
		e.status === "deleted" && e.oldRecord.tagName === r && i.delete(e.oldRecord.id);
	}
	return Array.from(i.values());
}
function ys(e) {
	let { rawRecords: t, stagedOperations: n, includeDeleted: r = !1 } = e, { log: i, byId: a } = n, o = new Map(t.map((e) => [e.id, {
		...e,
		status: "unchanged"
	}]));
	for (let e of a.values()) e.status === "created" || e.status === "updated" ? o.set(e.newRecord.id, {
		...e.newRecord,
		status: e.status
	}) : o.delete(e.oldRecord.id);
	if (!r) return {
		live: o,
		deleted: []
	};
	let s = /* @__PURE__ */ new Set();
	for (let e of i) e.status === "created" && s.add(e.newRecord.id);
	let c = [];
	for (let e of i) e.status === "deleted" && !s.has(e.oldRecord.id) && c.push({
		...e.oldRecord,
		status: "deleted"
	});
	return {
		live: o,
		deleted: c
	};
}
function bs(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) n.status === "created" && t.add(n.newRecord.id);
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		if (r.status !== "deleted") continue;
		let { oldRecord: e } = r;
		if (t.has(e.id)) continue;
		let i = e.parent?.id;
		if (!i) continue;
		let a = n.get(i) ?? [];
		a.push({
			...e,
			status: "deleted"
		}), n.set(i, a);
	}
	return n;
}
async function Q(e) {
	let { context: t, ref: n } = e;
	if (t.stagedOperations.log.length > 0) {
		let e = hs({
			stagedOperations: t.stagedOperations,
			tagName: n.tagName,
			id: n.id
		});
		if (e?.status === "deleted") return;
		if (e) return e;
	}
	let r;
	if (n.id === void 0) {
		let e = `__singleton_${n.tagName}`, i = nu(t) ? t.recordCache.get(e) : void 0;
		i ? (t.perf.count("core::query::getRecord.cacheHit"), r = i) : (t.perf.count("core::query::getRecord.miss"), r = (await es({
			context: t,
			read: {
				member: "getByTagNameInDocument",
				args: [n.tagName, t.documentId]
			}
		}))[0], r && nu(t) && (t.recordCache.set(r.id, r), t.recordCache.set(e, r)));
	} else {
		let e = nu(t) ? t.recordCache.get(n.id) : void 0;
		e ? (t.perf.count("core::query::getRecord.cacheHit"), r = e) : (t.perf.count("core::query::getRecord.miss"), r = await es({
			context: t,
			read: {
				member: "get",
				args: [n.id, t.documentId]
			}
		}), r && nu(t) && t.recordCache.set(n.id, r));
	}
	if (r) return xs({
		raw: r,
		ref: n
	});
}
function xs(e) {
	let { raw: t, ref: n } = e;
	return t.tagName !== n.tagName && f("ELEMENT_TAGNAME_MISMATCH", {
		detail: `Expected tagName '${n.tagName}', got '${t.tagName}' for id '${n.id}'`,
		ref: n,
		meta: {
			id: n.id,
			expectedTagName: n.tagName,
			actualTagName: t.tagName
		}
	}), {
		...t,
		status: "unchanged"
	};
}
async function Ss(e) {
	let { context: t, ref: n } = e;
	if (j(n, { detail: "The record or ref is undefined" }), !("attributes" in n) || !Array.isArray(n.attributes)) return Q({
		context: t,
		ref: n
	});
	if (t.stagedOperations.log.length > 0) {
		let e = hs({
			stagedOperations: t.stagedOperations,
			tagName: n.tagName,
			id: n.id
		});
		if (e?.status === "deleted") return;
		if (e) return e;
	}
	return t.perf.count("core::query::getRecord.fromRecord"), "status" in n ? n : {
		...n,
		status: "unchanged"
	};
}
async function Cs(e) {
	let { context: t, refs: n } = e, r = n.map(() => void 0), i = [], a = [];
	for (let [e, o] of n.entries()) {
		if (o.id === void 0) {
			i.push(e);
			continue;
		}
		let n = Ts({
			context: t,
			ref: o,
			id: o.id
		});
		n ? r[e] = n.record : a.push({
			position: e,
			id: o.id
		});
	}
	let o = i.map(function(e) {
		return ws({
			context: t,
			refs: n,
			position: e,
			results: r
		});
	});
	return await Promise.all([...o, Es({
		context: t,
		refs: n,
		storePositions: a,
		results: r
	})]), r;
}
async function ws(e) {
	let { context: t, refs: n, position: r, results: i } = e;
	i[r] = await Q({
		context: t,
		ref: n[r]
	});
}
function Ts(e) {
	let { context: t, ref: n, id: r } = e;
	if (t.stagedOperations.log.length > 0) {
		let e = hs({
			stagedOperations: t.stagedOperations,
			tagName: n.tagName,
			id: r
		});
		if (e) return { record: e.status === "deleted" ? void 0 : e };
	}
	let i = nu(t) ? t.recordCache.get(r) : void 0;
	if (i) return t.perf.count("core::query::getRecord.cacheHit"), { record: xs({
		raw: i,
		ref: n
	}) };
}
async function Es(e) {
	let { context: t, refs: n, storePositions: r, results: i } = e, a = [...new Set(r.map(({ id: e }) => e))];
	if (a.length === 0) return;
	a.forEach(function() {
		t.perf.count("core::query::getRecord.miss");
	});
	let o = await es({
		context: t,
		read: {
			member: "getMany",
			args: [a, t.documentId]
		}
	}), s = /* @__PURE__ */ new Map();
	for (let [e, n] of a.entries()) {
		let r = o[e];
		r && (s.set(n, r), nu(t) && t.recordCache.set(n, r));
	}
	for (let { position: e, id: t } of r) {
		let r = s.get(t);
		i[e] = r ? xs({
			raw: r,
			ref: n[e]
		}) : void 0;
	}
}
async function Ds(e) {
	let { context: t, tagName: n } = e, r = await es({
		context: t,
		read: {
			member: "getByTagNameInDocument",
			args: [n, t.documentId]
		}
	});
	for (let e of r) nu(t) && t.recordCache.set(e.id, e);
	return vs({
		rawRecords: r,
		stagedOperations: t.stagedOperations.log,
		tagName: n
	});
}
async function Os(e) {
	let { context: t, ref: n, tagName: r } = e, i = await Q({
		context: t,
		ref: n
	});
	if (!i) return;
	let a = i.children.find((e) => e.tagName === r);
	if (a) return Q({
		context: t,
		ref: a
	});
	let o = t.dialecteConfig.transparentElements;
	if (!o?.length) return;
	let s = i.children.filter((e) => o.includes(e.tagName));
	for (let e of s) {
		let n = await Q({
			context: t,
			ref: e
		});
		if (!n) continue;
		let i = n.children.find((e) => e.tagName === r);
		if (i) return Q({
			context: t,
			ref: i
		});
	}
}
function ks(e) {
	return "parent" in e;
}
async function As(e) {
	let { context: t, links: n, known: r } = e, i = new Map(n.filter((e) => !r.has(e.id)).map((e) => [e.id, e]));
	if (i.size === 0) return /* @__PURE__ */ new Map();
	let a = await Cs({
		context: t,
		refs: [...i.values()]
	});
	return new Map(a.flatMap((e) => e ? [[e.id, e]] : []));
}
async function js(e) {
	let { context: t, refsOrRecords: n, tagName: r } = e, i = t.dialecteConfig.transparentElements ?? [], { parents: a, read: o } = await Fs({
		context: t,
		refsOrRecords: n
	}), s = a.map((e) => Ms({
		parent: e,
		tagName: r,
		transparentElements: i
	})), c = await As({
		context: t,
		known: o,
		links: s.flatMap(({ direct: e, wrappers: t }) => [...e, ...t])
	}), l = new Map([...o, ...c]), u = s.map(({ direct: e, wrappers: t }) => e.length > 0 ? e : t.flatMap((e) => Ns({
		record: Ps({
			known: l,
			link: e
		}),
		tagName: r
	}))), d = await As({
		context: t,
		known: l,
		links: u.flat()
	}), f = new Map([...l, ...d]), p = /* @__PURE__ */ new Set();
	return u.map((e) => e.flatMap((e) => {
		let t = Ps({
			known: f,
			link: e
		});
		if (!t) return [];
		let n = p.has(t.id) ? { ...t } : t;
		return p.add(t.id), [n];
	}));
}
function Ms(e) {
	let { parent: t, tagName: n, transparentElements: r } = e;
	if (!t) return {
		direct: [],
		wrappers: []
	};
	let i = t.children.filter((e) => e.tagName === n);
	return i.length > 0 ? {
		direct: i,
		wrappers: []
	} : {
		direct: [],
		wrappers: t.children.filter((e) => r.includes(e.tagName))
	};
}
function Ns(e) {
	let { record: t, tagName: n } = e;
	return t ? t.children.filter((e) => e.tagName === n) : [];
}
function Ps(e) {
	let { known: t, link: n } = e, r = t.get(n.id);
	return r && r.tagName !== n.tagName && f("ELEMENT_TAGNAME_MISMATCH", {
		detail: `Expected tagName '${n.tagName}', got '${r.tagName}' for id '${n.id}'`,
		ref: n,
		meta: {
			id: n.id,
			expectedTagName: n.tagName,
			actualTagName: r.tagName
		}
	}), r;
}
async function Fs(e) {
	let { context: t, refsOrRecords: n } = e, r = n.map((e) => ks(e) ? { children: e.children } : void 0), i = [...n.keys()].filter((e) => !ks(n[e]));
	if (i.length === 0) return {
		parents: r,
		read: /* @__PURE__ */ new Map()
	};
	let a = await Cs({
		context: t,
		refs: i.map((e) => P(n[e]))
	});
	for (let [e, t] of a.entries()) t && (r[i[e]] = { children: t.children });
	return {
		parents: r,
		read: new Map(a.flatMap((e) => e ? [[e.id, e]] : []))
	};
}
async function Is(e) {
	let { context: t, ref: n, tagName: r } = e, [i] = await js({
		context: t,
		refsOrRecords: [P(n)],
		tagName: r
	});
	return i ?? [];
}
async function Ls(e) {
	let { live: t } = ys({
		rawRecords: await es({
			context: e,
			read: {
				member: "getByDocumentId",
				args: [e.documentId]
			}
		}),
		stagedOperations: e.stagedOperations
	});
	return t;
}
async function Rs(e) {
	let { context: t, refsOrRecords: n, options: r } = e, i = r?.depth ?? Infinity, a = r?.stopAtTagName, o = n.map(() => []), { starts: s, read: c } = await zs({
		context: t,
		refsOrRecords: n
	}), l = new Map(c), u = [];
	if (i > 0) for (let [e, t] of s.entries()) t?.parent && u.push({
		position: e,
		parent: t.parent
	});
	let d = /* @__PURE__ */ new Set();
	for (; u.length > 0;) {
		let e = await As({
			context: t,
			links: u.map(({ parent: e }) => e),
			known: l
		});
		for (let [t, n] of e) l.set(t, n);
		let n = [];
		for (let { position: e, parent: t } of u) {
			let r = l.get(t.id);
			!r || o[e].length >= l.size || (o[e].push(d.has(r.id) ? { ...r } : r), d.add(r.id), !(o[e].length >= i || a !== void 0 && r.tagName === a) && r.parent && n.push({
				position: e,
				parent: r.parent
			}));
		}
		u = n;
	}
	return r?.order === "top-down" ? o.map((e) => [...e].reverse()) : o;
}
async function zs(e) {
	let { context: t, refsOrRecords: n } = e, r = /* @__PURE__ */ new Map(), i = n.map(() => void 0), a = [], o = [];
	for (let [e, t] of n.entries()) ks(t) ? i[e] = { parent: t.parent } : (a.push(e), o.push(P(t)));
	if (o.length === 0) return {
		starts: i,
		read: r
	};
	let s = await Cs({
		context: t,
		refs: o
	});
	for (let [e, t] of s.entries()) t && (i[a[e]] = { parent: t.parent }, r.set(t.id, t));
	return {
		starts: i,
		read: r
	};
}
async function Bs(e) {
	let { context: t, ref: n, options: r } = e, [i] = await Rs({
		context: t,
		refsOrRecords: [n],
		options: r
	});
	return i;
}
function Vs(e) {
	let { dialecteConfig: t, tagName: n, attributes: r = {} } = e, i = o({
		dialecteConfig: t,
		tagName: n
	}), a = [];
	for (let [e, t] of Object.entries(r)) {
		if (t === void 0 || e === "xsi:type" || i.has(e)) continue;
		let n = (Array.isArray(t) ? t : [t]).filter(Hs);
		if (n.length === 0) return { kind: "unmatchable" };
		a.push({
			name: e,
			values: n
		});
	}
	return a.length === 0 ? { kind: "kept" } : {
		kind: "pushed",
		attributes: a
	};
}
function Hs(e) {
	return typeof e == "string" && e !== "";
}
function Us(e) {
	let { stagedOperations: t, tagName: n, attributes: r } = e, i = t.byAttribute.get(n);
	if (!i || r.length === 0) return /* @__PURE__ */ new Set();
	let a = r.map(function({ name: e, values: t }) {
		let n = i.get(e);
		return new Set(t.flatMap((e) => [...n?.get(e) ?? []]));
	});
	return new Set(mo(a));
}
function Ws(e) {
	let { stagedOperations: t, tagName: n, matches: r, pushed: i, stored: a } = e, { byId: o, appended: s } = t, c = new Map(a.map((e) => [e.id, e])), l = /* @__PURE__ */ new Set([...c.keys(), ...Us({
		stagedOperations: t,
		tagName: n,
		attributes: i
	})]), u = [], d = [];
	for (let e of l) {
		let t = Gs({
			id: e,
			tagName: n,
			byId: o,
			storedById: c
		});
		if (!t || !r(t)) continue;
		let i = s.get(e);
		i === void 0 ? u.push(t) : d.push({
			place: i,
			record: t
		});
	}
	return u.sort(ua), d.sort((e, t) => e.place - t.place), [...u, ...d.map(({ record: e }) => e)];
}
function Gs(e) {
	let { id: t, tagName: n, byId: r, storedById: i } = e, a = r.get(t);
	if (!a) {
		let e = i.get(t);
		return e && {
			...e,
			status: "unchanged"
		};
	}
	if (a.status !== "deleted" && Oe(a.newRecord, n)) return {
		...a.newRecord,
		status: a.status
	};
}
async function Ks(e) {
	let { context: t, tagName: n, attributes: r } = e, i = Vs({
		dialecteConfig: t.dialecteConfig,
		tagName: n,
		attributes: r
	});
	if (i.kind === "unmatchable") return [];
	let a = Ys({
		dialecteConfig: t.dialecteConfig,
		tagName: n,
		attributes: r
	});
	if (i.kind === "pushed" && t.store.getByAttributes) return qs({
		context: t,
		tagName: n,
		attributes: a,
		pushed: i.attributes
	});
	let o = await Ds({
		context: t,
		tagName: n
	}), s = [];
	for (let e of o) Js({
		dialecteConfig: t.dialecteConfig,
		record: e,
		attributeFilter: a
	}) && s.push(e);
	return s;
}
async function qs(e) {
	let { context: t, tagName: n, attributes: r, pushed: i } = e, a = await es({
		context: t,
		read: {
			member: "getByAttributes",
			args: [{
				documentId: t.documentId,
				tagName: n,
				attributes: i
			}]
		}
	});
	if (nu(t)) for (let e of a) t.recordCache.set(e.id, e);
	return Ws({
		stagedOperations: t.stagedOperations,
		tagName: n,
		matches: function(e) {
			return Js({
				dialecteConfig: t.dialecteConfig,
				record: e,
				attributeFilter: r
			});
		},
		pushed: i,
		stored: a
	});
}
function Js(e) {
	let { dialecteConfig: t, record: n, attributeFilter: r } = e;
	if (!r || Object.keys(r).length === 0) return !0;
	let i = Zs({
		dialecteConfig: t,
		record: n
	});
	for (let [e, a] of Object.entries(r)) {
		if (a === void 0) continue;
		let r = i(e, a);
		if (e === "xsi:type") {
			if (!Xs({
				dialecteConfig: t,
				record: n,
				expected: r
			})) return !1;
			continue;
		}
		let o = n.attributes.find((t) => t.name === e)?.value ?? "";
		if (o === "") return !1;
		if (r instanceof Set) {
			if (!r.has(o)) return !1;
		} else if (Array.isArray(r)) {
			if (!r.some((e) => o === e)) return !1;
		} else if (o !== r) return !1;
	}
	return !0;
}
function Ys(e) {
	let { dialecteConfig: t, tagName: n, attributes: r } = e;
	if (!r) return r;
	let i = o({
		dialecteConfig: t,
		tagName: n
	}), a = Object.entries(r).map(function([e, t]) {
		return [e, e !== "xsi:type" && !i.has(e) && Array.isArray(t) ? new Set(t) : t];
	});
	return Object.fromEntries(a);
}
function Xs(e) {
	let { dialecteConfig: t, record: n, expected: r } = e, i = n.attributes.find(ne);
	if (i === void 0 || i.value === "") return !1;
	let a = ee({
		dialecteConfig: t,
		value: i.value,
		namespaceOf: A({ dialecteConfig: t })
	}), o = A({ dialecteConfig: t });
	return (Array.isArray(r) ? r : [r]).filter((e) => typeof e == "string").some((e) => ee({
		dialecteConfig: t,
		value: e,
		namespaceOf: o
	}) === a);
}
function Zs(e) {
	let { dialecteConfig: t, record: n } = e, r = o({
		dialecteConfig: t,
		tagName: n.tagName
	});
	if (r.size === 0) return Qs;
	let i, a = !1;
	function s() {
		return a || (i = we({
			dialecteConfig: t,
			record: n
		})), a = !0, i;
	}
	let c = A({ dialecteConfig: t });
	return function(e, i) {
		if (!r.has(e)) return i;
		let a = s();
		if (a === void 0) return i;
		let o = n.attributes.find((t) => t.name === e), l = o === void 0 ? void 0 : Te({
			definition: a,
			attribute: o
		});
		if (l === void 0 || !y(l)) return i;
		let u = l;
		function d(e) {
			return typeof e == "string" ? fe({
				dialecteConfig: t,
				type: u,
				value: e,
				namespaceOf: c
			}) : e;
		}
		return Array.isArray(i) ? i.map(d) : d(i);
	};
}
function Qs(e, t) {
	return t;
}
function $s(e) {
	let { omit: t, dialecteConfig: n } = e, r = /* @__PURE__ */ new Set(), i = [];
	if (!t) return {
		dialecteConfig: n,
		unconditional: r,
		conditional: i
	};
	for (let e of t) if (typeof e == "string") r.add(e);
	else {
		let t = Object.keys(e)[0], n = e[t];
		n?.where ? i.push({
			tagName: t,
			where: n.where
		}) : r.add(t);
	}
	return {
		dialecteConfig: n,
		unconditional: r,
		conditional: i
	};
}
function ec(e) {
	return e.unconditional.size > 0 || e.conditional.length > 0;
}
function tc(e) {
	let { record: t, omitSpec: n } = e;
	if (n.unconditional.has(t.tagName)) return !0;
	for (let e of n.conditional) if (e.tagName === t.tagName && Js({
		dialecteConfig: n.dialecteConfig,
		record: t,
		attributeFilter: e.where
	})) return !0;
	return !1;
}
function nc(e) {
	if (typeof e == "string") return {
		mode: "flat",
		targets: [{ tagName: e }],
		allTags: /* @__PURE__ */ new Set([e])
	};
	if (Array.isArray(e)) {
		let t = [], n = /* @__PURE__ */ new Set();
		for (let r of e) if (typeof r == "string") t.push({ tagName: r }), n.add(r);
		else for (let [e, i] of Object.entries(r)) t.push({
			tagName: e,
			where: i?.where
		}), n.add(e);
		return {
			mode: "flat",
			targets: t,
			allTags: n
		};
	}
	let t = e;
	return {
		mode: "path",
		paths: rc({ entries: t }),
		allTags: new Set(ac({ entries: t }))
	};
}
function rc(e) {
	let t = [];
	for (let [n, r] of Object.entries(e.entries)) {
		if (n === "where") continue;
		let e = ic({
			tagName: n,
			value: r
		});
		e && t.push(e);
	}
	return t;
}
function ic(e) {
	let { tagName: t, value: n } = e;
	if (n === !0) return {
		tagName: t,
		where: void 0,
		children: [],
		isLeaf: !0
	};
	if (typeof n != "object" || !n) return;
	let r = n, i = r.where, a = Object.keys(r).filter((e) => e !== "where");
	return a.length === 0 ? {
		tagName: t,
		where: i,
		children: [],
		isLeaf: !0
	} : {
		tagName: t,
		where: i,
		children: rc({ entries: Object.fromEntries(a.map((e) => [e, r[e]])) }),
		isLeaf: !1
	};
}
function ac(e) {
	return Object.entries(e.entries).flatMap(function([e, t]) {
		return e === "where" ? [] : [e, ...typeof t == "object" && t ? ac({ entries: t }) : []];
	});
}
function oc(e) {
	let { dialecteConfig: t, record: n, where: r } = e;
	return !r || Js({
		dialecteConfig: t,
		record: n,
		attributeFilter: r
	});
}
function sc(e) {
	return new Map([...e.allTags].map((e) => [e, /* @__PURE__ */ new Map()]));
}
function cc(e) {
	let t = {};
	for (let [n, r] of e.entries()) t[n] = Array.from(r.values());
	return t;
}
var lc = 1 / 17;
function uc(e) {
	let { context: t } = e, n = /* @__PURE__ */ new Map(), r, i, a = 0, o;
	function s(e) {
		return !t.stagedOperations.byId.has(e) && !(nu(t) && t.recordCache.has(e));
	}
	async function c(e) {
		if (r) return r;
		if (!(e === 0 || a + e <= 128)) {
			if (o === void 0) {
				t.perf.count("core::store::count");
				let e = await t.store.count(t.documentId);
				o = Math.max(128, Math.ceil(e * lc));
			}
			if (!(a + e <= o)) return r = await Ls(t), r;
		}
	}
	function l(e, t) {
		return t && t.tagName !== e.tagName && f("ELEMENT_TAGNAME_MISMATCH", {
			detail: `Expected tagName '${e.tagName}', got '${t.tagName}' for id '${e.id}'`,
			ref: e
		}), t;
	}
	async function u(e) {
		if (e.id === void 0) return Q({
			context: t,
			ref: e
		});
		let i = e;
		if (r) return l(i, r.get(i.id));
		if (n.has(i.id)) return l(i, n.get(i.id));
		let o = s(i.id), u = o ? await c(1) : void 0;
		if (u) return l(i, u.get(i.id));
		o && a++;
		let d = await Q({
			context: t,
			ref: i
		});
		return n.set(i.id, d), d;
	}
	async function d(e) {
		if (!r) {
			let r = /* @__PURE__ */ new Map();
			for (let t of e) t.id === void 0 || n.has(t.id) || r.has(t.id) || r.set(t.id, t);
			let i = [...r.keys()].filter(s).length;
			if (!await c(i)) {
				a += i;
				let e = [...r.values()], o = await Promise.all(e.map((e) => Q({
					context: t,
					ref: e
				})));
				e.forEach((e, t) => n.set(e.id, o[t]));
			}
		}
		return Promise.all(e.map((e) => u(e)));
	}
	function p(e, t) {
		if (!i) {
			i = /* @__PURE__ */ new Map();
			for (let t of e.values()) {
				let e = i.get(t.tagName);
				e ? e.push(t) : i.set(t.tagName, [t]);
			}
		}
		return i.get(t) ?? [];
	}
	async function m(e) {
		let n = r ?? await c(1);
		return n ? p(n, e) : (a++, Ds({
			context: t,
			tagName: e
		}));
	}
	return {
		get: u,
		getMany: d,
		byTag: m
	};
}
async function dc(e) {
	let { context: t, root: n, collectSpec: r, omitSpec: i, collected: a } = e, o = uc({ context: t });
	r.mode === "flat" ? await fc({
		context: t,
		source: o,
		root: n,
		collectSpec: r,
		omitSpec: i,
		collected: a
	}) : await mc({
		context: t,
		source: o,
		record: n,
		pathNodes: r.paths,
		omitSpec: i,
		collected: a
	});
}
async function fc(e) {
	let { context: t, source: n, root: r, collectSpec: i, omitSpec: a, collected: o } = e, s = !r.parent && !ec(a), c = pc({
		source: n,
		rootId: r.id,
		omitSpec: a
	});
	for (let e of i.targets) {
		if (a.unconditional.has(e.tagName)) continue;
		let r = await n.byTag(e.tagName);
		for (let n of r) oc({
			dialecteConfig: t.dialecteConfig,
			record: n,
			where: e.where
		}) && (s ? !tc({
			record: n,
			omitSpec: a
		}) : await c.isUnderRoot(n)) && o.get(e.tagName).set(n.id, n);
	}
}
function pc(e) {
	let { source: t, rootId: n, omitSpec: r } = e, i = /* @__PURE__ */ new Map();
	async function a(e) {
		if (tc({
			record: e,
			omitSpec: r
		})) return !1;
		if (e.id === n) return !0;
		let a = [e.id], o = e, s;
		for (;;) {
			let e = o.parent;
			if (!e || r.unconditional.has(e.tagName)) {
				s = !1;
				break;
			}
			if (e.id === n) {
				s = !0;
				break;
			}
			let c = i.get(e.id);
			if (c !== void 0) {
				s = c;
				break;
			}
			let l = await t.get(P(e));
			if (!l || tc({
				record: l,
				omitSpec: r
			})) {
				i.set(e.id, !1), s = !1;
				break;
			}
			a.push(l.id), o = l;
		}
		for (let e of a) i.set(e, s);
		return s;
	}
	return { isUnderRoot: a };
}
async function mc(e) {
	let { context: t, source: n, record: r, pathNodes: i, omitSpec: a, collected: o } = e;
	if (!r.children?.length) return;
	let s = new Set(i.map((e) => e.tagName));
	for (let e of i) {
		let i = await hc({
			context: t,
			source: n,
			record: r,
			tagName: e.tagName,
			where: e.where,
			omitSpec: a,
			stopAtTagNames: s
		});
		for (let r of i) o.get(e.tagName).set(r.id, r), !e.isLeaf && e.children.length > 0 && await mc({
			context: t,
			source: n,
			record: r,
			pathNodes: e.children,
			omitSpec: a,
			collected: o
		});
	}
}
async function hc(e) {
	let { context: t, source: n, record: r, tagName: i, where: a, omitSpec: o, stopAtTagNames: s } = e, c = [];
	if (!r.children?.length) return c;
	let l = [], u = await gc({
		source: n,
		record: r,
		omitSpec: o
	});
	for (l.push(...u); l.length > 0;) {
		let e = l.shift();
		if (e.tagName === i) oc({
			dialecteConfig: t.dialecteConfig,
			record: e,
			where: a
		}) && c.push(e);
		else if (!(s.has(e.tagName) && e.tagName !== i) && e.children?.length) {
			let t = await gc({
				source: n,
				record: e,
				omitSpec: o
			});
			l.push(...t);
		}
	}
	return c;
}
async function gc(e) {
	let { source: t, record: n, omitSpec: r } = e;
	if (!n.children?.length) return [];
	let i = n.children.filter((e) => !r.unconditional.has(e.tagName));
	return i.length ? (await t.getMany(i.map((e) => P(e)))).filter((e) => e !== void 0 && !tc({
		record: e,
		omitSpec: r
	})) : [];
}
async function _c(e) {
	let { context: t, refsOrRecords: n, options: r } = e;
	if (!r) return await yc({
		context: t,
		refsOrRecords: n
	});
	let i = nc(r.collect), a = $s({
		omit: r.omit,
		dialecteConfig: t.dialecteConfig
	}), o = await vc({
		context: t,
		refsOrRecords: n
	}), s = o.map(() => sc(i)), c = [], l = [];
	for (let [e, n] of o.entries()) n && (i.mode === "flat" && n.parent ? c.push({
		position: e,
		record: n
	}) : l.push(dc({
		context: t,
		root: n,
		collectSpec: i,
		omitSpec: a,
		collected: s[e]
	})));
	let u = i.mode === "flat" ? bc({ scopes: c }).map((e) => xc({
		context: t,
		scopes: e,
		collectSpec: i,
		omitSpec: a,
		answers: s
	})) : [];
	return await Promise.all([...u, ...l]), s.map((e) => cc(e));
}
async function vc(e) {
	let { context: t, refsOrRecords: n } = e, r = n.map((e) => ks(e) ? e : void 0), i = [...n.keys()].filter((e) => !ks(n[e]));
	if (i.length === 0) return r;
	let a = await Cs({
		context: t,
		refs: i.map((e) => P(n[e]))
	});
	for (let [e, t] of a.entries()) r[i[e]] = t;
	return r;
}
async function yc(e) {
	let { context: t, refsOrRecords: n } = e, r = /* @__PURE__ */ new Map();
	for (let [e, t] of n.entries()) {
		let n = r.get(t.tagName);
		n ? n.push(e) : r.set(t.tagName, [e]);
	}
	let i = n.map(() => ({})), a = t.dialecteConfig.descendants;
	return await Promise.all([...r].map(async function([e, r]) {
		let o = [...a[e] ?? []], s = await _c({
			context: t,
			refsOrRecords: r.map((e) => n[e]),
			options: { collect: o }
		});
		for (let [e, t] of r.entries()) i[t] = s[e];
	})), i;
}
function bc(e) {
	let t = [];
	for (let n of e.scopes) {
		let { id: e } = n.record, r = JSON.stringify([n.record.attributes, n.record.children]), i = t.find(({ contentById: t }) => {
			let n = t.get(e);
			return n === void 0 || n === r;
		});
		i ? (i.scopes.push(n), i.contentById.set(e, r)) : t.push({
			scopes: [n],
			contentById: /* @__PURE__ */ new Map([[e, r]])
		});
	}
	return t.map(({ scopes: e }) => e);
}
async function xc(e) {
	let { context: t, scopes: n, collectSpec: r, omitSpec: i, answers: a } = e, o = wc({
		targets: r.targets,
		omitSpec: i
	});
	if (o.size === 0) return;
	let s = Tc({
		dialecteConfig: t.dialecteConfig,
		collected: new Set(o.keys())
	}), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = [];
	for (let { position: e, record: t } of n) {
		let n = c.get(t.id);
		if (n) {
			n.scopeOf.push(e);
			continue;
		}
		let r = {
			record: t,
			scopeOf: [e]
		};
		c.set(t.id, r), l.set(t.id, t), i.unconditional.has(t.tagName) || u.push(r);
	}
	for (; u.length > 0;) {
		let e = [], n = /* @__PURE__ */ new Map();
		for (let t of u) for (let r of t.record.children ?? []) {
			if (i.unconditional.has(r.tagName) || !o.has(r.tagName) && !s(r.tagName)) continue;
			let a = c.get(r.id);
			a ? tc({
				record: a.record,
				omitSpec: i
			}) || (a.parentId = t.record.id) : (e.push(r), n.set(r.id, t.record.id));
		}
		if (e.length === 0) break;
		let r = await As({
			context: t,
			links: e,
			known: l
		});
		for (let [e, t] of r) l.set(e, t);
		let a = [];
		for (let e of r.values()) {
			if (tc({
				record: e,
				omitSpec: i
			})) continue;
			let t = {
				record: e,
				scopeOf: [],
				parentId: n.get(e.id)
			};
			c.set(e.id, t), s(e.tagName) && a.push(t);
		}
		u = a;
	}
	Sc({
		context: t,
		nodes: c,
		targets: o,
		omitSpec: i,
		answers: a
	});
}
function Sc(e) {
	let { context: t, nodes: n, targets: r, omitSpec: i, answers: a } = e, o = Cc({ nodes: n }), s = /* @__PURE__ */ new Set(), c = [...n.values()].map(({ record: e }) => e).sort(ua);
	for (let e of c) {
		let n = r.get(e.tagName);
		if (n && !tc({
			record: e,
			omitSpec: i
		}) && n.some((n) => oc({
			dialecteConfig: t.dialecteConfig,
			record: e,
			where: n
		}))) for (let t of o(e.id)) a[t].get(e.tagName).set(e.id, s.has(e.id) ? { ...e } : e), s.add(e.id);
	}
}
function Cc(e) {
	let { nodes: t } = e, n = /* @__PURE__ */ new Map();
	function r(e) {
		let i = n.get(e);
		if (i) return i;
		let a = t.get(e);
		if (!a) return [];
		let o = [...a.scopeOf];
		if (n.set(e, o), a.parentId !== void 0) for (let e of r(a.parentId)) o.includes(e) || o.push(e);
		return o;
	}
	return r;
}
function wc(e) {
	let t = /* @__PURE__ */ new Map();
	for (let { tagName: n, where: r } of e.targets) {
		if (e.omitSpec.unconditional.has(n)) continue;
		let i = t.get(n);
		i ? i.push(r) : t.set(n, [r]);
	}
	return t;
}
function Tc(e) {
	let { dialecteConfig: t, collected: n } = e, r = t.descendants, i = new Set(t.transparentElements ?? []), a = [...n].some((e) => r[e] === void 0), o = /* @__PURE__ */ new Map();
	function s(e) {
		return r[e] === void 0 || i.has(e) || t.definition[e]?.children.any === !0;
	}
	return function(e) {
		if (a) return !0;
		let t = o.get(e);
		if (t !== void 0) return t;
		let i = r[e], c = s(e) || (i ?? []).some((e) => n.has(e) || s(e));
		return o.set(e, c), c;
	};
}
async function Ec(e) {
	let { context: t, ref: n, options: r } = e, [i] = await _c({
		context: t,
		refsOrRecords: [n],
		options: r
	});
	return i;
}
async function Dc(e) {
	let { context: t, ref: n, name: r, namespace: i, defaults: a } = e, o = await Ss({
		context: t,
		ref: n
	});
	if (!o) return "";
	let { dialecteConfig: s } = t;
	return Ge({
		record: o,
		dialecteConfig: s,
		name: r,
		namespace: i,
		defaults: a
	});
}
async function Oc(e) {
	let { context: t, ref: n, name: r, namespace: i, defaults: a } = e, o = await Ss({
		context: t,
		ref: n
	});
	if (!o) return;
	let { dialecteConfig: s } = t;
	return Ge({
		record: o,
		dialecteConfig: s,
		name: r,
		namespace: i,
		defaults: a,
		fullObject: !0
	});
}
async function kc(e) {
	let { context: t, ref: n, namespace: r, defaults: i } = e, a = await Ss({
		context: t,
		ref: n
	});
	if (!a) return {};
	let { dialecteConfig: o } = t;
	return qe({
		record: a,
		dialecteConfig: o,
		namespace: r,
		defaults: i
	});
}
async function Ac(e) {
	let { context: t, ref: n, defaults: r } = e, i = await Ss({
		context: t,
		ref: n
	});
	if (!i) return [];
	let { dialecteConfig: a } = t;
	return qe({
		record: i,
		dialecteConfig: a,
		defaults: r,
		fullObject: !0
	});
}
async function jc(e) {
	let { context: t, ref: n } = e, r = await Q({
		context: t,
		ref: n
	});
	if (r) return O({
		dialecteConfig: t.dialecteConfig,
		record: r
	});
}
function Mc(e) {
	let { tree: t, unwrapTagNames: n } = e;
	function r(e) {
		return e.flatMap((e) => n.includes(e.tagName) ? r(e.tree) : [{
			...e,
			tree: r(e.tree)
		}]);
	}
	return {
		...t,
		tree: r(t.tree)
	};
}
function Nc(e) {
	let { omit: t, dialecteConfig: n } = e, r = /* @__PURE__ */ new Set(), i = [];
	if (!t) return {
		dialecteConfig: n,
		unconditional: r,
		conditional: i
	};
	for (let e of t) {
		if (typeof e == "string") {
			r.add(e);
			continue;
		}
		let t = Object.keys(e)[0], n = e[t];
		n?.where ? i.push({
			tagName: t,
			where: n.where,
			scope: n.scope ?? "self"
		}) : r.add(t);
	}
	return {
		dialecteConfig: n,
		unconditional: r,
		conditional: i
	};
}
function Pc(e) {
	let { record: t, compiledOmit: n } = e;
	return n.unconditional.has(t.tagName) ? !0 : n.conditional.some((e) => e.scope === "self" && e.tagName === t.tagName && Js({
		dialecteConfig: n.dialecteConfig,
		record: t,
		attributeFilter: e.where
	}));
}
function Fc(e) {
	let { record: t, compiledOmit: n } = e;
	return n.conditional.some((e) => e.scope === "children" && e.tagName === t.tagName && Js({
		dialecteConfig: n.dialecteConfig,
		record: t,
		attributeFilter: e.where
	}));
}
function Ic(e) {
	let { tree: t, omit: n, dialecteConfig: r } = e;
	if (!n?.length) return t;
	let i = Nc({
		omit: n,
		dialecteConfig: r
	});
	function a(e) {
		if (Fc({
			record: e,
			compiledOmit: i
		})) return {
			...e,
			tree: []
		};
		let t = e.tree.filter((e) => !Pc({
			record: e,
			compiledOmit: i
		})).map((e) => a(e));
		return {
			...e,
			tree: t
		};
	}
	return a(t);
}
function Lc(e) {
	let { tree: t, childrenConfig: n, definition: r } = e;
	function i(e) {
		if (e.tree.length === 0) return e;
		let t = ce({
			parentTagName: e.tagName,
			children: e.tree.map(i),
			childrenConfig: n,
			definition: r
		});
		return {
			...e,
			tree: t
		};
	}
	return i(t);
}
var Rc = /* @__PURE__ */ new Set(["where", "recursive"]);
function zc(e) {
	let { record: t, remainingDepth: n, compiledOmit: r } = e;
	return n > 0 && !Fc({
		record: t,
		compiledOmit: r
	});
}
function Bc(e) {
	let { record: t, select: n, shaping: r } = e;
	if (!t.children?.length) return [];
	let i = n ? Hc({
		record: t,
		select: n,
		shaping: r
	}) : void 0;
	return t.children.filter((e) => Uc({
		tagName: e.tagName,
		selectKeys: i,
		shaping: r
	}));
}
function Vc(e) {
	let { record: t, children: n, select: r, shaping: i } = e, a = n.filter((e) => !Pc({
		record: e,
		compiledOmit: i.compiledOmit
	}));
	return Wc({
		filterConfig: i.compiledOmit.dialecteConfig,
		children: a,
		select: r,
		record: t,
		dialecteConfig: i.dialecteConfig,
		transparentElements: i.transparentElements
	});
}
function Hc(e) {
	let { record: t, select: n, shaping: r } = e, i = new Set(Object.keys(n).filter((e) => !Rc.has(e))), { dialecteConfig: a } = r;
	if (!a || n.recursive === !1) return i;
	let o = t.tagName, s = a.children[o], c = n[o] !== void 0;
	return s?.includes(o) && !c && i.add(o), i;
}
function Uc(e) {
	let { tagName: t, selectKeys: n, shaping: r } = e;
	return r.compiledOmit.unconditional.has(t) ? !1 : !n || n.has(t) ? !0 : r.transparentElements?.includes(t) ?? !1;
}
function Wc(e) {
	let { children: t, select: n, record: r, dialecteConfig: i, filterConfig: a, transparentElements: o } = e;
	return n ? t.flatMap((e) => {
		let t = n[e.tagName];
		if (t === void 0 && o?.includes(e.tagName)) return [{
			record: e,
			select: n
		}];
		if (t === void 0 && e.tagName === r.tagName) {
			let t = Gc({
				child: e,
				select: n,
				dialecteConfig: i,
				filterConfig: a
			});
			if (t) return [t];
		}
		if (t === void 0 || t === !1) return [];
		if (t === !0) return [{
			record: e,
			select: void 0
		}];
		let s = Kc({
			child: e,
			entry: t,
			parentRecord: r,
			filterConfig: a
		});
		return s ? [s] : [];
	}) : t.map((e) => ({
		record: e,
		select: void 0
	}));
}
function Gc(e) {
	let { child: t, select: n, dialecteConfig: r, filterConfig: i } = e;
	if (r && n.recursive !== !1 && r.children[t.tagName]?.includes(t.tagName) && (!n.where || Js({
		dialecteConfig: i,
		record: t,
		attributeFilter: n.where
	}))) return {
		record: t,
		select: n
	};
}
function Kc(e) {
	let { child: t, entry: n, parentRecord: r, filterConfig: i } = e, a = n;
	if (!a.where || Js({
		dialecteConfig: i,
		record: t,
		attributeFilter: a.where
	})) {
		if (a.recursive && t.tagName === r.tagName) {
			let e = a.recursive === !0 || a.recursive - 1;
			return e === 0 ? void 0 : {
				record: t,
				select: {
					...a,
					recursive: e
				}
			};
		}
		return a.recursive ? {
			record: t,
			select: a
		} : t.tagName === r.tagName ? {
			record: t,
			select: {
				...a,
				recursive: !1
			}
		} : {
			record: t,
			select: a
		};
	}
}
async function qc(e) {
	let { context: t, ref: n, select: r, depth: i, shaping: a } = e;
	if (!(r !== void 0 || i !== void 0 || a.compiledOmit.unconditional.size > 0 || Jc({
		context: t,
		ref: n
	}))) {
		let e = await Ls(t);
		return {
			root: Zc({
				recordsById: e,
				ref: n
			}),
			recordsById: e
		};
	}
	let o = await Yc({
		context: t,
		ref: n
	});
	if (!o) return {
		root: void 0,
		recordsById: /* @__PURE__ */ new Map()
	};
	let s = {
		record: o,
		select: r,
		remainingDepth: i ?? Infinity
	}, c = await Xc({
		context: t,
		frontier: [s],
		shaping: a
	});
	return {
		root: o,
		recordsById: new Map([[o.id, s.record], ...c.flatMap((e) => [...e])])
	};
}
function Jc(e) {
	let { context: t, ref: n } = e;
	return n.id !== void 0 && n.tagName !== t.dialecteConfig.rootElementName;
}
async function Yc(e) {
	try {
		return await Q(e);
	} catch (e) {
		if (b(e)?.key === "ELEMENT_TAGNAME_MISMATCH") return;
		throw e;
	}
}
async function Xc(e) {
	let { context: t, frontier: n, shaping: r } = e, i = n.filter((e) => zc({
		record: e.record,
		remainingDepth: e.remainingDepth,
		compiledOmit: r.compiledOmit
	})).map((e) => ({
		node: e,
		links: Bc({
			record: e.record,
			select: e.select,
			shaping: r
		})
	})), a = i.flatMap((e) => e.links);
	if (a.length === 0) return [];
	let o = await As({
		context: t,
		links: a,
		known: /* @__PURE__ */ new Map()
	});
	return [o, ...await Xc({
		context: t,
		frontier: i.flatMap(({ node: e, links: t }) => Vc({
			record: e.record,
			children: t.flatMap((e) => {
				let t = o.get(e.id);
				return t ? [t] : [];
			}),
			select: e.select,
			shaping: r
		}).map((t) => ({
			...t,
			remainingDepth: e.remainingDepth - 1
		}))),
		shaping: r
	})];
}
function Zc(e) {
	let { recordsById: t, ref: n } = e, r = n.id === void 0 ? [...t.values()].find((e) => e.tagName === n.tagName) : t.get(n.id);
	return r?.tagName === n.tagName ? r : void 0;
}
async function Qc(e) {
	let { context: t, ref: n, options: r = {}, dialecteConfig: i } = e, { omit: a, unwrap: o, depth: s } = r, c = r.select, l = t.dialecteConfig.transparentElements, u = {
		compiledOmit: Nc({
			omit: a,
			dialecteConfig: t.dialecteConfig
		}),
		dialecteConfig: i,
		transparentElements: l
	}, { root: d, recordsById: f } = await qc({
		context: t,
		ref: n,
		select: c,
		depth: s,
		shaping: u
	});
	j(d, {
		detail: "No record found for provided ref",
		key: "ELEMENT_NOT_FOUND"
	});
	let p = $c({
		recordsById: f,
		record: d,
		select: c,
		shaping: u,
		remainingDepth: s ?? Infinity
	}), m = o ?? (l?.length ? l : void 0);
	return Lc({
		tree: m ? Mc({
			tree: p,
			unwrapTagNames: m
		}) : p,
		childrenConfig: t.dialecteConfig.children,
		definition: t.dialecteConfig.definition
	});
}
function $c(e) {
	let { recordsById: t, record: n, select: r, shaping: i, remainingDepth: a } = e;
	return zc({
		record: n,
		remainingDepth: a,
		compiledOmit: i.compiledOmit
	}) ? Ie({
		record: n,
		tree: Vc({
			record: n,
			children: Bc({
				record: n,
				select: r,
				shaping: i
			}).flatMap((e) => {
				let n = t.get(e.id);
				return n ? [n] : [];
			}),
			select: r,
			shaping: i
		}).map((e) => $c({
			recordsById: t,
			record: e.record,
			select: e.select,
			shaping: i,
			remainingDepth: a - 1
		}))
	}) : Ie({ record: n });
}
async function el(e) {
	let { context: t, ref: n, ancestors: r = 0, depth: i, includeDeleted: a = !1 } = e;
	if (!n && i === void 0) return tl({
		context: t,
		includeDeleted: a
	});
	let o = e.siblings ?? !1, s = o === !0 || typeof o == "object" && !!o, c = typeof o == "object" && !!o && o.expand === !0, l = n ?? { tagName: t.dialecteConfig.rootElementName }, u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), f = a ? bs(t.stagedOperations.log) : void 0;
	function p(e) {
		if (f) for (let t of f.get(e) ?? []) d.has(t.id) || (d.set(t.id, t), p(t.id));
	}
	async function m(e, n) {
		if (u.set(e.id, e), p(e.id), !(i !== void 0 && n >= i)) for (let r of e.children) {
			let e = await Q({
				context: t,
				ref: P(r)
			});
			e && await m(e, n + 1);
		}
	}
	let h = await Q({
		context: t,
		ref: l
	});
	j(h, {
		key: "ELEMENT_NOT_FOUND",
		detail: "No record found for the provided ref"
	});
	let g = h.id;
	await m(h, 0);
	let _ = Math.max(r, +!!s);
	if (_ > 0) {
		let e = await Bs({
			context: t,
			ref: l,
			options: {
				depth: _,
				order: "bottom-up"
			}
		});
		for (let t of e) u.set(t.id, t), g = t.id;
		if (s) {
			let n = [h, ...e];
			for (let e = 0; e < n.length - 1; e++) {
				let r = n[e], i = n[e + 1];
				for (let e of i.children) {
					if (e.id === r.id) continue;
					let n = await Q({
						context: t,
						ref: P(e)
					});
					n && (c ? await m(n, 0) : u.set(n.id, n));
				}
			}
		}
	}
	return nl({
		live: u,
		deletedById: d,
		rootId: g
	});
}
async function tl(e) {
	let { context: t, includeDeleted: n = !1 } = e, { live: r, deleted: i } = ys({
		rawRecords: await es({
			context: t,
			read: {
				member: "getByDocumentId",
				args: [t.documentId]
			}
		}),
		stagedOperations: t.stagedOperations,
		includeDeleted: n
	}), a;
	for (let e of r.values()) if (e.tagName === t.dialecteConfig.rootElementName) {
		a = e.id;
		break;
	}
	return j(a, {
		key: "ROOT_NOT_FOUND",
		detail: `No ${t.dialecteConfig.rootElementName} root element found in document`
	}), nl({
		live: r,
		deletedById: new Map(i.map((e) => [e.id, e])),
		rootId: a
	});
}
function nl(e) {
	let { live: t, deletedById: n, rootId: r } = e, i = new Set(t.keys()), a = Array.from(t.values()).map((e) => ({
		...e,
		children: e.children.filter((e) => i.has(e.id))
	})), o = new Set(n.keys());
	return {
		liveRecords: a,
		deletedRecords: Array.from(n.values()).map((e) => ({
			...e,
			children: e.children.filter((e) => o.has(e.id))
		})),
		rootId: r
	};
}
function rl(e) {
	let { liveRecords: t, deletedRecords: n, rootId: r } = e, i = new Map(t.map((e) => [e.id, e])), a = new Map(n.map((e) => [e.id, e])), o = /* @__PURE__ */ new Map();
	for (let e of n) {
		let t = e.parent?.id;
		if (!t) continue;
		let n = o.get(t) ?? [];
		n.push(e), o.set(t, n);
	}
	let s = i.get(r);
	j(s, {
		key: "ROOT_NOT_FOUND",
		detail: `No record found for rootId "${r}"`
	});
	function c(e, t) {
		let n = t === "live" ? i : a, r = e.children.filter((e) => n.has(e.id)).map((e) => c(n.get(e.id), t)), s = t === "live" ? (o.get(e.id) ?? []).map((e) => c(e, "deleted")) : [];
		return Ie({
			record: e,
			tree: [...r, ...s]
		});
	}
	return c(s, "live");
}
function il(e) {
	let { records: t, config: n, rootId: r, indent: i, declareNamespaces: a, includeXmlDeclaration: o, withDatabaseIds: s } = e, c = /* @__PURE__ */ new Map();
	for (let e of t) c.set(e.id, e);
	let l = r ? c.get(r) : al({
		records: t,
		config: n
	});
	j(l, {
		detail: r ? `No record found for rootId "${r}"` : `No ${n.rootElementName} root element found in records`,
		key: "EXPORT_ROOT_NOT_FOUND"
	});
	let u = gr({
		config: n,
		documentRoot: l.tagName === n.rootElementName ? l : void 0,
		indent: i,
		declareNamespaces: a,
		includeXmlDeclaration: o,
		withDatabaseIds: s
	});
	ol({
		writer: u,
		record: l,
		index: c,
		config: n
	});
	let d = u.take();
	return u.head() + d;
}
function al(e) {
	let { records: t, config: n } = e;
	return t.find((e) => nn({
		record: e,
		config: n
	}));
}
function ol(e) {
	let { writer: t, record: n, index: r, config: i } = e;
	t.openElement({ record: n });
	let a = ce({
		parentTagName: n.tagName,
		children: n.children,
		childrenConfig: i.children,
		definition: i.definition
	});
	for (let e of a) {
		let a = r.get(e.id);
		j(a, {
			detail: `Parent '${n.tagName}' references non-existent child '${e.tagName}' (id: ${e.id})`,
			key: "EXPORT_ORPHAN_CHILD_REF",
			ref: {
				tagName: n.tagName,
				id: n.id
			}
		}), ol({
			writer: t,
			record: a,
			index: r,
			config: i
		});
	}
	t.closeElement();
}
async function sl(e) {
	let { context: t, options: n = {} } = e, { ref: r, ancestors: i, siblings: a, depth: o, includeDeleted: s, omit: c, unwrap: l, as: u = "tree" } = n, d = await el({
		context: t,
		ref: r ? P(r) : void 0,
		ancestors: i,
		siblings: a,
		depth: o,
		includeDeleted: s
	});
	if (u === "xml") return ll(t, d, n.declareNamespaces, n.includeXmlDeclaration);
	let f = cl(t, d, {
		omit: c,
		unwrap: l
	});
	return u === "tree" ? f : {
		tree: f,
		xmlString: ll(t, d, n.declareNamespaces, n.includeXmlDeclaration)
	};
}
function cl(e, t, n) {
	let r = rl(t);
	r = Ic({
		tree: r,
		omit: n.omit,
		dialecteConfig: e.dialecteConfig
	});
	let i = e.dialecteConfig.transparentElements, a = n.unwrap ?? (i?.length ? [...i] : void 0);
	return a?.length && (r = Mc({
		tree: r,
		unwrapTagNames: a
	})), r = Lc({
		tree: r,
		childrenConfig: e.dialecteConfig.children,
		definition: e.dialecteConfig.definition
	}), r;
}
function ll(e, t, n, r) {
	return il({
		records: t.liveRecords,
		config: e.dialecteConfig,
		rootId: t.rootId,
		declareNamespaces: n,
		includeXmlDeclaration: r
	});
}
var ul = class {
	constructor(e, t) {
		this.getContext = e, this.dialecteConfig = t;
	}
	async getRecord(e) {
		return Q({
			context: this.getContext(),
			ref: e
		});
	}
	async getDefinition(e) {
		return jc({
			context: this.getContext(),
			ref: P(e)
		});
	}
	async getRecords(e) {
		return Cs({
			context: this.getContext(),
			refs: e
		});
	}
	async getChild(e, t) {
		return Os({
			context: this.getContext(),
			ref: P(e),
			tagName: t
		});
	}
	async getChildren(e, t) {
		return Is({
			context: this.getContext(),
			ref: P(e),
			tagName: t
		});
	}
	async getChildrenOfEach(e, t) {
		return js({
			context: this.getContext(),
			refsOrRecords: e,
			tagName: t.tagName
		});
	}
	async getRecordsByTagName(e) {
		return Ds({
			context: this.getContext(),
			tagName: e
		});
	}
	async getAttribute(e, t) {
		let n = e, { fullObject: r } = t;
		return r ? Oc({
			context: this.getContext(),
			ref: n,
			...t
		}) : Dc({
			context: this.getContext(),
			ref: n,
			...t
		});
	}
	async getAttributes(e, t) {
		let n = e, { fullObject: r } = t || {};
		return r ? Ac({
			context: this.getContext(),
			ref: n,
			...t
		}) : kc({
			context: this.getContext(),
			ref: n,
			...t
		});
	}
	async getTree(e, t) {
		return Qc({
			context: this.getContext(),
			ref: P(e),
			options: t,
			dialecteConfig: this.dialecteConfig
		});
	}
	async getSnapshot(e) {
		return sl({
			context: this.getContext(),
			options: e
		});
	}
	async findDescendants(e) {
		let t = P(e), n = this.dialecteConfig.descendants[t.tagName] ?? [];
		return Ec({
			context: this.getContext(),
			ref: t,
			options: { collect: n }
		});
	}
	async findDescendantsOfEach(e) {
		return _c({
			context: this.getContext(),
			refsOrRecords: e
		});
	}
	async findAncestors(e) {
		return e ? Bs({
			context: this.getContext(),
			ref: P(e)
		}) : [];
	}
	async findAncestorsOfEach(e) {
		return Rs({
			context: this.getContext(),
			refsOrRecords: e
		});
	}
	async findByAttributes(e) {
		return Ks({
			context: this.getContext(),
			tagName: e.tagName,
			attributes: e.attributes
		});
	}
};
function dl(e) {
	let { dialecteConfig: t, parent: n, tagName: r, xsiType: i, attribute: a } = e, { child: o, parentDefinition: s, definition: l } = pl(e), u = a === void 0 ? void 0 : bl({
		dialecteConfig: t,
		tagName: r,
		attribute: a
	});
	if (i !== void 0 && vl({
		dialecteConfig: t,
		value: i
	}) === void 0) return {
		kind: "refused",
		issue: yl(i)
	};
	if (l === void 0) return c;
	if (u === void 0) return hl(ml({
		dialecteConfig: t,
		child: o,
		parentDefinition: s,
		xsiType: i
	}) ?? l.textContent?.type);
	let { name: d, namespaceUri: m } = u;
	if (d === p) return {
		kind: "xsiType",
		child: o,
		parentDefinition: s
	};
	if (m === C.uri) return c;
	let h = l.attributes.details[d];
	return h === void 0 ? he({
		wildcard: l.attributes.any,
		namespaceUri: m
	}) ? c : f("INVALID_ATTRIBUTE", {
		detail: `'${r}' under '${n.tagName}' declares no attribute '${d}'.`,
		ref: { tagName: r },
		meta: {
			parent: n.tagName,
			tagName: r,
			attribute: d
		}
	}) : hl(h.type);
}
function fl(e) {
	let { dialecteConfig: t, target: n, value: r } = e;
	if (n.kind === "refused") return n.issue;
	if (n.kind === "xsiType") return _l({
		dialecteConfig: t,
		child: n.child,
		parentDefinition: n.parentDefinition,
		value: r
	});
	if (n.kind !== "datatype") return;
	let i = A({ dialecteConfig: t });
	return M({
		value: r,
		type: n.type,
		namespaces: i,
		clarkNames: !0
	}).issue;
}
function pl(e) {
	let { dialecteConfig: t, parent: n, tagName: r, xsiType: i } = e, a = O({
		dialecteConfig: t,
		record: n
	}), o = {
		tagName: r,
		parent: {
			id: n.id,
			tagName: n.tagName
		},
		attributes: i === void 0 ? [] : [{
			name: p,
			value: i,
			namespace: C
		}]
	};
	return gl({
		parent: n,
		parentDefinition: a,
		tagName: r
	}), {
		child: o,
		parentDefinition: a,
		definition: O({
			dialecteConfig: t,
			record: o,
			parentDefinition: a
		})
	};
}
function ml(e) {
	let { dialecteConfig: t, child: n, parentDefinition: r, xsiType: i } = e;
	if (i === void 0) return;
	let a = vl({
		dialecteConfig: t,
		value: i
	});
	if (!(a === void 0 || a.namespace !== "http://www.w3.org/2001/XMLSchema") && re({
		dialecteConfig: t,
		record: {
			...n,
			attributes: []
		},
		parentDefinition: r,
		typeName: a.clark
	})) return { builtin: a.local };
}
function hl(e) {
	return e === void 0 ? c : {
		kind: "datatype",
		type: e
	};
}
function gl(e) {
	let { parent: t, parentDefinition: n, tagName: r } = e;
	n === void 0 || n.children.any || n.children.sequence.includes(r) || f("INVALID_PARENT_CHILD", {
		detail: `'${t.tagName}' cannot hold '${r}'.`,
		ref: {
			tagName: t.tagName,
			id: t.id
		},
		meta: {
			parent: t.tagName,
			tagName: r
		}
	});
}
function _l(e) {
	let { dialecteConfig: t, child: n, parentDefinition: r, value: i } = e, a = vl({
		dialecteConfig: t,
		value: i
	})?.clark;
	if (a === void 0) return yl(i);
	let o = {
		...n,
		attributes: []
	};
	if (!re({
		dialecteConfig: t,
		record: o,
		parentDefinition: r,
		typeName: a
	})) return {
		reason: "datatype",
		actual: T({
			value: i,
			whiteSpace: "collapse"
		}),
		expected: v({
			dialecteConfig: t,
			record: o,
			parentDefinition: r
		})
	};
}
function vl(e) {
	let { dialecteConfig: t, value: n } = e;
	return S({
		value: n,
		namespaceOf: A({ dialecteConfig: t })
	});
}
function yl(e) {
	return {
		reason: "datatype",
		actual: T({
			value: e,
			whiteSpace: "collapse"
		}),
		expected: "QName"
	};
}
function bl(e) {
	let { dialecteConfig: t, tagName: n, attribute: r } = e, i = typeof r != "string", { name: a, namespace: o } = Ae({
		dialecteConfig: t,
		attribute: i ? r : { name: r },
		tagName: n,
		authored: i
	});
	return {
		name: a,
		namespaceUri: o?.prefix ? o.uri : ""
	};
}
var xl = class {
	constructor(e, t) {
		this.getContext = e, this.dialecteConfig = t;
	}
	async value(e) {
		let { tagName: t, xsiType: n, attribute: r, value: i } = e, a = this.getContext(), o = this.dialecteConfig, s = P(e.parent), c = await Q({
			context: a,
			ref: s
		});
		return j(c, {
			key: "ELEMENT_NOT_FOUND",
			detail: `validate.value: parent '${s.tagName}' not found`,
			ref: s
		}), fl({
			dialecteConfig: o,
			target: dl({
				dialecteConfig: o,
				parent: c,
				tagName: t,
				xsiType: n,
				attribute: r
			}),
			value: i
		});
	}
}, Sl = class {
	constructor(e, t, n, r = Y) {
		this.store = e, this.dialecteConfig = t, this.documentId = n, this._perf = r;
	}
	get perf() {
		return this._perf;
	}
	get any() {
		return Object.hasOwn(this, "_any") && this._any || (this._any = new ul(() => this.context, this.dialecteConfig)), this._any;
	}
	get validate() {
		return Object.hasOwn(this, "_validate") && this._validate || (this._validate = new xl(() => this.context, this.dialecteConfig)), this._validate;
	}
	getOperations() {
		return Xo();
	}
	get context() {
		return {
			kind: "query",
			readScope: Bo(this),
			store: this.store,
			dialecteConfig: this.dialecteConfig,
			documentId: this.documentId,
			recordCache: void 0,
			stagedOperations: this.getOperations(),
			progress: Yo,
			perf: this.perf
		};
	}
	async getDocumentInfo() {
		let e = await this.store.getDocument(this.documentId);
		return j(e, {
			key: "DOCUMENT_NOT_REGISTERED",
			detail: `Expected document id: ${this.documentId}`
		}), e;
	}
	async getRoot() {
		let e = await Q({
			context: this.context,
			ref: { tagName: this.dialecteConfig.rootElementName }
		});
		return j(e, {
			key: "ROOT_NOT_FOUND",
			detail: `Expected tag name: ${this.dialecteConfig.rootElementName}`
		}), e;
	}
	async getRecord(e) {
		return Q({
			context: this.context,
			ref: P(e)
		});
	}
	async getDefinition(e) {
		return jc({
			context: this.context,
			ref: P(e)
		});
	}
	async getRecords(e) {
		let t = e.map((e) => P(e));
		return Cs({
			context: this.context,
			refs: t
		});
	}
	async getChild(e, t) {
		if (e) return Os({
			context: this.context,
			ref: P(e),
			tagName: t
		});
	}
	async getChildren(e, t) {
		return e ? Is({
			context: this.context,
			ref: P(e),
			tagName: t
		}) : [];
	}
	async getChildrenOfEach(e, t) {
		return js({
			context: this.context,
			refsOrRecords: e,
			tagName: t.tagName
		});
	}
	async getRecordsByTagName(e) {
		return Ds({
			context: this.context,
			tagName: e
		});
	}
	async findDescendants(e, t) {
		let n = P(e);
		if (!t) {
			let e = this.dialecteConfig.descendants[n.tagName] ?? [];
			return Ec({
				context: this.context,
				ref: n,
				options: { collect: e }
			});
		}
		return Ec({
			context: this.context,
			ref: n,
			options: t
		});
	}
	async findDescendantsOfEach(e, t) {
		return _c({
			context: this.context,
			refsOrRecords: e,
			options: t
		});
	}
	async findAncestors(e, t) {
		return e ? Bs({
			context: this.context,
			ref: P(e),
			options: t
		}) : [];
	}
	async findAncestorsOfEach(e, t) {
		return Rs({
			context: this.context,
			refsOrRecords: e,
			options: t
		});
	}
	async getTree(e, t) {
		return Qc({
			context: this.context,
			ref: P(e),
			options: t,
			dialecteConfig: this.dialecteConfig
		});
	}
	async getSnapshot(e) {
		return sl({
			context: this.context,
			options: e
		});
	}
	async getAttribute(e, t) {
		let { fullObject: n } = t;
		return n ? Oc({
			context: this.context,
			ref: e,
			...t
		}) : Dc({
			context: this.context,
			ref: e,
			...t
		});
	}
	async getAttributes(e, t) {
		let { fullObject: n } = t || {};
		return n ? Ac({
			context: this.context,
			ref: e,
			...t
		}) : kc({
			context: this.context,
			ref: e,
			...t
		});
	}
	async findByAttributes(e) {
		return Ks({
			context: this.context,
			...e
		});
	}
};
Ho({
	prototype: Sl.prototype,
	names: Fo
});
function Cl(e) {
	let { context: t, status: n, record: r, oldRecord: i, newRecord: a } = e, o, s, c;
	if (r && (o = Pe(r)), i && (s = Pe(i)), a && (c = Pe(a)), n === "created") {
		j(o, {
			detail: "Record is required for created",
			key: "ELEMENT_NOT_FOUND"
		}), dr({ record: o });
		let e = {
			status: n,
			oldRecord: void 0,
			newRecord: o
		};
		Zo({
			stagedOperations: t.stagedOperations,
			operation: e
		});
	} else if (n === "updated") {
		j(s && c, {
			detail: "Old record and new record are required for updated",
			key: "ELEMENT_NOT_FOUND"
		}), dr({ record: c });
		let e = {
			status: n,
			oldRecord: s,
			newRecord: c
		};
		Zo({
			stagedOperations: t.stagedOperations,
			operation: e
		});
	} else if (n === "deleted" && o) {
		j(o, {
			detail: "Record is required for deleted",
			key: "ELEMENT_NOT_FOUND"
		});
		let e = {
			status: n,
			oldRecord: o,
			newRecord: void 0
		};
		Zo({
			stagedOperations: t.stagedOperations,
			operation: e
		});
	}
}
function wl(e) {
	let { context: t, operations: n } = e;
	for (let e of n) switch (e.status) {
		case "created":
			Cl({
				context: t,
				status: "created",
				record: e.newRecord
			});
			break;
		case "updated":
			Cl({
				context: t,
				status: "updated",
				oldRecord: e.oldRecord,
				newRecord: e.newRecord
			});
			break;
		case "deleted": Cl({
			context: t,
			status: "deleted",
			record: e.oldRecord
		});
	}
}
async function Tl(e) {
	let { dialecteConfig: t, hooks: n, context: r, query: i, parentRef: a, params: o, copiesStoredValues: s = !1 } = e, { id: c, tagName: l, attributes: u, namespace: d, value: f } = o;
	Dl({
		dialecteConfig: t,
		attributes: u,
		tagName: l
	});
	let p = await Q({
		context: r,
		ref: a
	});
	j(p, {
		detail: "Parent record not found",
		key: "ELEMENT_NOT_FOUND",
		ref: a
	});
	let m = ze({
		dialecteConfig: t,
		hooks: n,
		record: {
			id: c ?? crypto.randomUUID(),
			tagName: l,
			attributes: u,
			namespace: d,
			value: f,
			parent: {
				id: p.id,
				tagName: p.tagName
			},
			children: []
		}
	});
	El({
		dialecteConfig: t,
		record: m,
		copiesStoredValues: s
	}), Cl({
		context: r,
		status: "created",
		record: m
	});
	let h = {
		...p,
		children: [...p.children, {
			id: m.id,
			tagName: m.tagName
		}]
	};
	return Cl({
		context: r,
		status: "updated",
		oldRecord: p,
		newRecord: h
	}), n?.afterCreated && wl({
		context: r,
		operations: await n.afterCreated({
			childRecord: m,
			parentRecord: h,
			query: i
		})
	}), m;
}
function El(e) {
	let { dialecteConfig: t, record: n, copiesStoredValues: r } = e;
	Be({
		dialecteConfig: t,
		record: n,
		attributes: n.attributes
	}), r || (te({
		dialecteConfig: t,
		record: n
	}), De({
		dialecteConfig: t,
		record: n
	})), Ve({
		dialecteConfig: t,
		record: n
	});
}
function Dl(e) {
	let { dialecteConfig: t, attributes: n, tagName: r } = e;
	if (n && Array.isArray(n)) for (let e of n) Ae({
		dialecteConfig: t,
		attribute: e,
		tagName: r,
		authored: !0
	});
}
async function Ol(e) {
	let { dialecteConfig: t, hooks: n, context: r, query: i, parentRef: a, record: o } = e, s = [];
	r.perf.start("core::deepClone"), r.perf.start("core::deepClone::countNodes");
	let c = kl(o);
	r.perf.stop("core::deepClone::countNodes"), r.progress.plan({ steps: c });
	let l = await Al({
		dialecteConfig: t,
		hooks: n,
		context: r,
		query: i,
		parentRef: a,
		record: o,
		mappings: s
	});
	return r.progress.endPlan(), r.perf.stop("core::deepClone"), {
		record: l,
		mappings: s
	};
}
function kl(e) {
	let t = 1;
	for (let n of e.tree) t += kl(n);
	return t;
}
async function Al(e) {
	let { dialecteConfig: t, hooks: n, context: r, query: i, parentRef: a, record: o, mappings: s } = e, c = !0, l = o;
	if (n?.beforeClone) {
		let e = n.beforeClone({ record: o });
		c = e.shouldBeCloned, l = e.transformedRecord;
	}
	if (!c) return l;
	let u = await Tl({
		dialecteConfig: t,
		hooks: n,
		context: r,
		query: i,
		parentRef: a,
		params: {
			tagName: l.tagName,
			namespace: l.namespace,
			attributes: l.attributes,
			value: l.value
		},
		copiesStoredValues: !0
	}), d = P(o);
	s.push({
		source: Object.assign(d, { attributes: [...o.attributes] }),
		target: P(u)
	}), r.progress.nextStep();
	for (let e of l.tree) await Al({
		dialecteConfig: t,
		hooks: n,
		context: r,
		query: i,
		parentRef: P(u),
		record: e,
		mappings: s
	});
	return u;
}
async function jl(e) {
	let { hooks: t, context: n, query: r, ref: i } = e, a = await Q({
		context: n,
		ref: i
	});
	j(a, {
		detail: `Record not found (tagName=${i.tagName}, id=${i.id})`,
		key: "ELEMENT_NOT_FOUND",
		ref: i
	}), j(a.parent, {
		detail: "Cannot delete root element",
		key: "PROTECTED_ROOT"
	}), t?.beforeDelete && wl({
		context: n,
		operations: await t.beforeDelete({
			record: a,
			query: r
		})
	}), await Ml({
		context: n,
		record: a
	}), Cl({
		context: n,
		status: "deleted",
		record: a
	});
	let o = await Q({
		context: n,
		ref: P(a.parent)
	});
	j(o, {
		detail: `Parent record not found (tagName=${a.parent.tagName}, id=${a.parent.id})`,
		key: "ELEMENT_NOT_FOUND"
	});
	let s = {
		...o,
		children: o.children.filter((e) => e.id !== a.id)
	};
	return Cl({
		context: n,
		status: "updated",
		oldRecord: o,
		newRecord: s
	}), t?.afterDelete && wl({
		context: n,
		operations: await t.afterDelete({
			record: a,
			parentRecord: s,
			query: r
		})
	}), s;
}
async function Ml(e) {
	let { context: t, record: n } = e;
	for (let e of n.children) {
		let n = await Q({
			context: t,
			ref: P(e)
		});
		n && (n.children.length > 0 && await Ml({
			context: t,
			record: n
		}), Cl({
			context: t,
			status: "deleted",
			record: n
		}));
	}
}
async function Nl(e) {
	let { dialecteConfig: t, hooks: n, context: r, query: i, parentRef: a, params: o } = e, s = Pl(o.attributes), c = await Is({
		context: r,
		ref: a,
		tagName: o.tagName
	});
	return (s ? c.find((e) => Js({
		dialecteConfig: t,
		record: e,
		attributeFilter: s
	})) : o.id === void 0 ? c[0] : c.find((e) => e.id === o.id)) || Tl({
		dialecteConfig: t,
		hooks: n,
		context: r,
		query: i,
		parentRef: a,
		params: o
	});
}
function Pl(e) {
	if (!e) return;
	let t = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e.name, e.value])) : e;
	return Object.values(t).some((e) => e !== void 0 && e !== "") ? t : void 0;
}
async function Fl(e) {
	let { context: t, ref: n, parentRef: r, beforeRef: i } = e, [a, o] = await Cs({
		context: t,
		refs: [n, r]
	});
	j(a, {
		detail: `Record to move not found (tagName=${n.tagName}, id=${n.id})`,
		key: "ELEMENT_NOT_FOUND",
		ref: n
	}), j(a.parent, {
		detail: "Cannot move the root element",
		key: "PROTECTED_ROOT"
	}), j(o, {
		detail: `New parent not found (tagName=${r.tagName}, id=${r.id})`,
		key: "ELEMENT_NOT_FOUND",
		ref: r
	}), Il({
		context: t,
		record: a,
		newParent: o
	}), await Ll({
		context: t,
		record: a,
		newParent: o
	}), Rl({
		record: a,
		newParent: o,
		beforeRef: i
	});
	let s = Pe(a), c = o.id === a.parent.id;
	if (c && i?.id === a.id) return s;
	let l = zl({
		record: a,
		newParent: o,
		beforeRef: i
	});
	if (c) return Bl({
		tagName: a.tagName,
		left: l,
		right: o.children
	}) || wl({
		context: t,
		operations: [Hl({
			record: o,
			change: { children: l }
		})]
	}), s;
	let u = await Q({
		context: t,
		ref: P(a.parent)
	});
	j(u, {
		detail: `Parent of the moved record not found (tagName=${a.parent.tagName}, id=${a.parent.id})`,
		key: "ELEMENT_NOT_FOUND"
	});
	let d = {
		id: o.id,
		tagName: o.tagName
	};
	return wl({
		context: t,
		operations: [
			Hl({
				record: a,
				change: { parent: d }
			}),
			Hl({
				record: u,
				change: { children: u.children.filter((e) => e.id !== a.id) }
			}),
			Hl({
				record: o,
				change: { children: l }
			})
		]
	}), {
		...s,
		parent: d
	};
}
function Il(e) {
	let { context: t, record: n, newParent: r } = e, i = {
		tagName: r.tagName,
		id: r.id
	}, o = O({
		dialecteConfig: t.dialecteConfig,
		record: r
	});
	j(o !== void 0 && (o.children.any === !0 || o.children.sequence.includes(n.tagName)), {
		detail: `${r.tagName} may not hold ${n.tagName}`,
		key: "INVALID_PARENT_CHILD",
		ref: i
	});
	let s = a({ definition: o })[n.tagName]?.max;
	if (s === void 0) return;
	let c = r.children.filter((e) => e.tagName === n.tagName && e.id !== n.id).length;
	j(c < s, {
		detail: `${r.tagName} already holds ${c} ${n.tagName}, the most it may`,
		key: "MAX_OCCURRENCES_REACHED",
		ref: i
	});
}
async function Ll(e) {
	let { context: t, record: n, newParent: r } = e;
	r.id !== n.parent?.id && j(!(r.id === n.id || (await Bs({
		context: t,
		ref: P(r)
	})).some((e) => e.id === n.id)), {
		detail: `Cannot move ${n.tagName} under itself or one of its descendants (${r.tagName} ${r.id})`,
		key: "MOVE_INTO_OWN_SUBTREE",
		ref: {
			tagName: n.tagName,
			id: n.id
		}
	});
}
function Rl(e) {
	let { record: t, newParent: n, beforeRef: r } = e;
	r !== void 0 && j(r.tagName === t.tagName && n.children.some((e) => e.id === r.id && e.tagName === t.tagName), {
		detail: `${r.tagName} ${r.id} is no ${t.tagName} child of ${n.tagName} ${n.id}`,
		key: "MOVE_BEFORE_NOT_SIBLING",
		ref: {
			tagName: r.tagName,
			id: r.id
		}
	});
}
function zl(e) {
	let { record: t, newParent: n, beforeRef: r } = e, i = n.children.filter((e) => e.id !== t.id), a = i.findLastIndex((e) => e.tagName === t.tagName), o = a === -1 ? i.length : a + 1, s = r === void 0 ? o : i.findIndex((e) => e.id === r.id), c = {
		id: t.id,
		tagName: t.tagName
	};
	return [
		...i.slice(0, s),
		c,
		...i.slice(s)
	];
}
function Bl(e) {
	let { tagName: t, left: n, right: r } = e, i = Vl({
		tagName: t,
		children: n
	}), a = Vl({
		tagName: t,
		children: r
	});
	return i.length === a.length && i.every((e, t) => e === a[t]);
}
function Vl(e) {
	let { tagName: t, children: n } = e;
	return n.filter((e) => e.tagName === t).map((e) => e.id);
}
function Hl(e) {
	let { record: t, change: n } = e;
	return {
		status: "updated",
		oldRecord: t,
		newRecord: {
			...t,
			...n
		}
	};
}
async function Ul(e) {
	let { dialecteConfig: t, hooks: n, context: r, query: i, ref: a, params: o } = e, { attributes: s, value: c } = o, l = await Q({
		context: r,
		ref: a
	});
	j(l, {
		detail: `Record not found (tagName=${a.tagName}, id=${a.id})`,
		key: "ELEMENT_NOT_FOUND",
		ref: a
	});
	let u = s ? Le({
		dialecteConfig: t,
		tagName: l.tagName,
		attributes: s,
		stored: l.attributes
	}) : [], d = l.attributes;
	s && (d = [...l.attributes.filter((e) => !u.some((t) => t.name === e.name)), ...u].filter((e) => e.value !== void 0 && e.value !== null), Be({
		dialecteConfig: t,
		record: {
			...l,
			attributes: d
		},
		attributes: u
	}));
	let f = u.some(ne), p = ze({
		dialecteConfig: t,
		hooks: n,
		record: {
			...l,
			attributes: d,
			value: c === void 0 ? l.value : c
		}
	});
	return De({
		dialecteConfig: t,
		record: p,
		authored: {
			attributes: new Set(u.map((e) => e.name)),
			text: c !== void 0
		}
	}), f && (te({
		dialecteConfig: t,
		record: p
	}), Ve({
		dialecteConfig: t,
		record: p
	}), He({
		dialecteConfig: t,
		merged: d,
		record: p
	})), Wl(l, p) || (Cl({
		context: r,
		status: "updated",
		oldRecord: l,
		newRecord: p
	}), n?.afterUpdated && wl({
		context: r,
		operations: await n.afterUpdated({
			oldRecord: l,
			newRecord: p,
			query: i
		})
	})), p;
}
function Wl(e, t) {
	return e.value !== t.value || e.attributes.length !== t.attributes.length ? !1 : e.attributes.every((e, n) => Gl(e, t.attributes[n]));
}
function Gl(e, t) {
	return e.name === t.name && e.value === t.value && e.namespace?.uri === t.namespace?.uri && e.namespace?.prefix === t.namespace?.prefix;
}
var Kl = class extends ul {
	constructor(e, t, n, r) {
		super(e, t), this.hooks = n, this.query = r;
	}
	async addChild(e, t) {
		return Tl({
			context: this.getContext(),
			parentRef: P(e),
			params: {
				id: t.id,
				tagName: t.tagName,
				attributes: t.attributes,
				namespace: t.namespace,
				value: t.value
			},
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			query: this.query
		});
	}
	async ensureChild(e, t) {
		return Nl({
			context: this.getContext(),
			parentRef: P(e),
			params: {
				id: t.id,
				tagName: t.tagName,
				attributes: t.attributes,
				namespace: t.namespace,
				value: t.value
			},
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			query: this.query
		});
	}
	async update(e, t) {
		return Ul({
			context: this.getContext(),
			ref: P(e),
			params: {
				attributes: t.attributes,
				value: t.value
			},
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			query: this.query
		});
	}
	async delete(e) {
		return jl({
			context: this.getContext(),
			ref: P(e),
			hooks: this.hooks,
			query: this.query
		});
	}
	async move(e, t) {
		return Fl({
			context: this.getContext(),
			ref: P(e),
			parentRef: P(t.parent),
			beforeRef: t.before === void 0 ? void 0 : P(t.before)
		});
	}
	async deepClone(e, t) {
		return await Ol({
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			context: this.getContext(),
			query: this.query,
			parentRef: P(e),
			record: t
		});
	}
};
async function ql(e) {
	let { hooks: t, context: n, query: r } = e;
	t?.beforeCommit && wl({
		context: n,
		operations: await t.beforeCommit({
			operations: n.stagedOperations.log,
			query: r
		})
	});
}
function Jl(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = (n.status === "deleted" ? n.oldRecord : n.newRecord).id, r = t.get(e);
		r ? r.status === "created" ? n.status === "updated" ? t.set(e, {
			status: "created",
			oldRecord: void 0,
			newRecord: n.newRecord
		}) : n.status === "deleted" && t.delete(e) : r.status === "updated" && (n.status === "updated" ? t.set(e, {
			status: "updated",
			oldRecord: r.oldRecord,
			newRecord: n.newRecord
		}) : n.status === "deleted" && t.set(e, {
			status: "deleted",
			oldRecord: r.oldRecord,
			newRecord: void 0
		})) : t.set(e, n);
	}
	let n = Array.from(t.values());
	return {
		creates: n.filter((e) => e.status === "created"),
		updates: n.filter((e) => e.status === "updated"),
		deletes: n.filter((e) => e.status === "deleted")
	};
}
function Yl(e) {
	return b(e.thrown)?.key === "STORE_CONNECTION_LOST";
}
function Xl(e) {
	let t = b(e.thrown);
	return t?.key === "STORE_CONNECTION_LOST" && t.meta?.outcome === "not-applied";
}
function Zl() {}
async function Ql(e) {
	let { store: t, writeId: n } = e;
	try {
		return await t.getWriteOutcome({ writeId: n });
	} catch {
		return "unknown";
	}
}
function $l(e) {
	let { thrown: t, writeId: n, outcome: r, meta: i } = e, a = b(t);
	return _("STORE_CONNECTION_LOST", {
		detail: `${a?.detail ?? "The connection was lost"} - the write's outcome: ${r}`,
		meta: {
			...a?.meta,
			...i,
			writeId: n,
			outcome: r
		},
		cause: t instanceof Error ? t : void 0
	});
}
async function eu(e) {
	let { writeId: t, stagedOperations: n, store: r, documentId: i, documentState: a, progress: o, perf: s = Y } = e;
	s.start("core::commit"), s.start("core::commit::merge");
	let { creates: c, updates: l, deletes: u } = Jl(n);
	s.stop("core::commit::merge");
	let d = {
		creates: c.map((e) => e.newRecord),
		updates: l.map((e) => e.newRecord),
		deletes: u.map((e) => qr(e.oldRecord))
	}, f = c.length + l.length + u.length;
	a.loading = !0, o.plan({ steps: f });
	let p = 0;
	function m(e) {
		for (; p < e;) o.nextStep(), p++;
	}
	try {
		s.count("core::store::commit"), s.start("core::store::commit");
		try {
			await r.commit({
				documentId: i,
				writeId: t,
				creates: d.creates,
				updates: d.updates,
				deletes: d.deletes,
				onProgress: (e) => {
					m(e);
				}
			});
		} catch (e) {
			if (!Yl({ thrown: e })) throw e;
			let n = await Ql({
				store: r,
				writeId: t
			});
			if (n !== "applied") throw $l({
				thrown: e,
				writeId: t,
				outcome: n
			});
		}
		s.stop("core::store::commit");
	} catch (e) {
		throw a.loading = !1, o.endPlan(), s.stop("core::commit"), e;
	}
	return a.lastUpdate = Date.now(), o.endPlan(), s.stop("core::commit"), Gr(d);
}
var tu = class extends Sl {
	constructor(e, t, n, r, i, a = Y, o = () => {}) {
		super(e, t, n, a), this.stagedOperations = Xo(), this.recordCache = /* @__PURE__ */ new Map(), this.stagingFinished = !1, this.documentActivity = r, this.hooks = i, this.progressReporter = Jo(r, o);
	}
	get progress() {
		return this.progressReporter;
	}
	get any() {
		return this._anyTx ??= new Kl(() => this.context, this.dialecteConfig, this.hooks, this);
	}
	getOperations() {
		return this.stagedOperations;
	}
	get context() {
		return {
			kind: "transaction",
			store: this.store,
			dialecteConfig: this.dialecteConfig,
			documentId: this.documentId,
			recordCache: this.recordCache,
			stagedOperations: this.stagedOperations,
			progress: this.progressReporter,
			perf: this.perf
		};
	}
	async addChild(e, t) {
		return Tl({
			context: this.context,
			parentRef: P(e),
			params: t,
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			query: this
		});
	}
	async ensureChild(e, t) {
		return Nl({
			context: this.context,
			parentRef: P(e),
			params: t,
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			query: this
		});
	}
	async update(e, t) {
		return Ul({
			context: this.context,
			ref: P(e),
			params: t,
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			query: this
		});
	}
	async delete(e) {
		return jl({
			context: this.context,
			ref: P(e),
			hooks: this.hooks,
			query: this
		});
	}
	async move(e, t) {
		return Fl({
			context: this.context,
			ref: P(e),
			parentRef: P(t.parent),
			beforeRef: t.before === void 0 ? void 0 : P(t.before)
		});
	}
	async deepClone(e, t) {
		return Ol({
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			context: this.context,
			parentRef: P(e),
			record: t,
			query: this
		});
	}
	async finishStaging() {
		this.stagingFinished || (this.stagingFinished = !0, await ql({
			hooks: this.hooks,
			context: this.context,
			query: this
		}));
	}
	getStagedOperations() {
		return this.stagedOperations.log;
	}
	clearStagedOperations() {
		this.stagedOperations = Xo();
	}
	clearRecordCache() {
		this.recordCache.clear();
	}
	async commit(e) {
		return eu({
			writeId: e.writeId,
			stagedOperations: this.stagedOperations.log,
			store: this.store,
			documentId: this.documentId,
			documentState: this.documentActivity,
			progress: this.progressReporter,
			perf: this.perf
		});
	}
};
function nu(e) {
	return e.kind === "transaction";
}
function ru(e) {
	let { creates: t, updates: n, deletes: r } = Jl(e), i = /* @__PURE__ */ new Map();
	for (let e of [
		...t,
		...n,
		...r
	]) {
		let { tagName: t } = e.status === "deleted" ? e.oldRecord : e.newRecord, n = i.get(t) ?? {
			created: 0,
			updated: 0,
			deleted: 0
		};
		n[e.status] += 1, i.set(t, n);
	}
	return {
		creates: t.length,
		updates: n.length,
		deletes: r.length,
		byTag: Object.fromEntries([...i].sort(([e], [t]) => e.localeCompare(t)))
	};
}
var iu = class {
	constructor(e, t, n, r, i, a) {
		this.activeTransactions = 0, this.store = e, this.config = t, this.documentId = n, this.hooks = i, this.extensionsRegistry = r, this.state = a.state, this.channelName = a.channelName, this.broadcast = a.broadcast, this.refreshHistoryStatus = a.refreshHistoryStatus, this.perf = a.perf, this.subscribe = a.subscribeState, this.signalStateChange = a.signalStateChange, this.startWrite = a.startWrite, this.voidReadScopes = a.voidReadScopes, this.readScopeWiring = {
			documentId: n,
			epochOf: a.readEpoch,
			bindQueryExtensions: (e) => Ko(this.extensionsRegistry?.query, e)
		};
	}
	withQueryExtensions(e) {
		let t = Ko(this.extensionsRegistry?.query, e);
		return Object.assign(e, t);
	}
	withAllExtensions(e) {
		let t = Ko(this.extensionsRegistry?.query, e), n = Ko(this.extensionsRegistry?.transaction, e), r = {};
		for (let [e, n] of Object.entries(t)) r[e] = {
			...r[e],
			...n
		};
		for (let [e, t] of Object.entries(n)) r[e] = {
			...r[e],
			...t
		};
		return Object.assign(e, r);
	}
	createQuery() {
		return new Sl(this.store, this.config, this.documentId, this.perf);
	}
	get query() {
		let e = this.withQueryExtensions(this.createQuery());
		return typeof this.store.readVersioned == "function" && zo({
			query: e,
			wiring: this.readScopeWiring
		}), e;
	}
	createTransaction() {
		return new tu(this.store, this.config, this.documentId, this.state, this.hooks, this.perf, this.signalStateChange);
	}
	async transaction(e, t) {
		this.assertNoActiveTransaction();
		let n = this.startWrite(), r, i = Et();
		try {
			this.activeTransactions++, this.state.loading = !0, this.state.error = null, this.signalStateChange(!1);
			let n = this.withAllExtensions(this.createTransaction());
			r = n;
			let a = await e(n);
			await n.finishStaging();
			let o = await n.commit({ writeId: i });
			return this.voidReadScopes(), await this.refreshHistoryStatus(), this.broadcast({
				type: "commit",
				documentId: this.documentId,
				timestamp: this.state.lastUpdate ?? Date.now(),
				changeId: i,
				changes: o
			}), n.clearStagedOperations(), n.clearRecordCache(), this.state.history.push({
				method: "commit",
				message: t?.label ?? "Changes committed",
				timestamp: Date.now()
			}), a;
		} catch (e) {
			throw await this.readAgainAfterLoss({
				thrown: e,
				changeId: i
			}), this.reportFailure(e);
		} finally {
			n(), this.activeTransactions--, this.state.loading = !1, r?.progress.forceClear(), this.signalStateChange(!0);
		}
	}
	async readAgainAfterLoss(e) {
		Yl(e) && !Xl(e) && (this.voidReadScopes(), await this.refreshHistoryStatus().catch(Zl), this.broadcast({
			type: "commit",
			documentId: this.documentId,
			timestamp: Date.now(),
			changeId: e.changeId,
			changes: { unknown: !0 }
		}));
	}
	async prepare(e, t) {
		this.assertNoActiveTransaction(), this.activeTransactions++, this.state.loading = !0, this.state.error = null;
		let n = this.createTransaction();
		try {
			await e(this.withAllExtensions(n)), await n.finishStaging();
		} catch (e) {
			throw this.activeTransactions--, this.state.loading = !1, this.reportFailure(e);
		}
		this.activeTransactions--, this.state.loading = !1;
		let r = n.getStagedOperations(), i = ru(r), a = !1;
		return {
			operations: r,
			summary: i,
			query: n,
			commit: async () => {
				if (a) return;
				this.assertNoActiveTransaction();
				let e = this.startWrite();
				a = !0, this.activeTransactions++, this.state.loading = !0;
				let r = Et();
				try {
					let e = await n.commit({ writeId: r });
					this.voidReadScopes(), await this.refreshHistoryStatus(), this.broadcast({
						type: "commit",
						documentId: this.documentId,
						timestamp: this.state.lastUpdate ?? Date.now(),
						changeId: r,
						changes: e
					}), n.clearStagedOperations(), n.clearRecordCache(), this.state.history.push({
						method: "commit",
						message: t?.label ?? "Changes committed",
						timestamp: Date.now()
					});
				} catch (e) {
					throw Xl({ thrown: e }) && (a = !1), await this.readAgainAfterLoss({
						thrown: e,
						changeId: r
					}), this.reportFailure(e);
				} finally {
					this.activeTransactions--, this.state.loading = !1, e();
				}
			},
			discard: () => {
				a || (a = !0, n.clearStagedOperations(), n.clearRecordCache());
			}
		};
	}
	reportFailure(e) {
		let t = b(e);
		if (e instanceof Error && t) return this.state.error = t, e;
		let n = _("UNKNOWN", {
			detail: e instanceof Error ? e.message : String(e),
			cause: e instanceof Error ? e : void 0
		});
		return this.state.error = b(n) ?? null, n;
	}
	assertNoActiveTransaction() {
		this.activeTransactions > 0 && f("CONCURRENT_TRANSACTION", { detail: `${this.activeTransactions} transaction(s) already active. Concurrent transactions risk lost updates — serialize them or implement a transaction queue.` });
	}
	close() {
		return this.store.close();
	}
	async destroy() {
		await this.store.destroy();
	}
}, au = class {
	get name() {
		return j(this._name !== void 0, {
			key: "PROJECT_NOT_OPENED",
			detail: "Call project.open(name) before accessing project properties."
		}), this._name;
	}
	get store() {
		return j(this._store !== void 0 && !this.closing && this.openSettled, {
			key: "PROJECT_NOT_OPENED",
			detail: this.closing ? "The project is closed: open it again before using it." : "Call project.open(name), and await it, before accessing project properties."
		}), this._store;
	}
	enqueueImport(e) {
		let { fileName: t, work: n, onWait: r } = e;
		this.importsInFlight.size > 0 && r?.();
		let i = this.importChain.then(n, n);
		this.importChain = i;
		let a = { fileName: t };
		this.importsInFlight.add(a);
		let o = this.importsInFlight, s = this.drainWhenIdle.bind(this);
		function c() {
			o.delete(a), s();
		}
		return i.then(c, c), i;
	}
	inLifecycleTurn(e) {
		this.lifecycleTurns += 1;
		let t = this.lifecycle.then(e, e).finally(() => {
			--this.lifecycleTurns;
		});
		return this.lifecycle = t, t;
	}
	startCountedWrite() {
		let e = this.writes, t = this.drainWhenIdle.bind(this);
		e.start();
		let n = !1;
		return function() {
			n || (n = !0, e.end(), t());
		};
	}
	async counted(e) {
		this.writes.start();
		try {
			return await e();
		} finally {
			this.writes.end(), this.drainWhenIdle();
		}
	}
	settledImports() {
		function e() {}
		return this.importChain.then(e, e);
	}
	get channel() {
		return j(this._channel !== void 0, {
			key: "PROJECT_NOT_OPENED",
			detail: "Call project.open(name) before accessing project properties."
		}), this._channel;
	}
	get channelName() {
		return j(this._channelName !== void 0, {
			key: "PROJECT_NOT_OPENED",
			detail: "Call project.open(name) before accessing project properties."
		}), this._channelName;
	}
	createChannel() {
		return new BroadcastChannel(this.channelName);
	}
	broadcast(e) {
		this.announcing ? this.postToldChanges({ own: e }) : this.channel.postMessage(e);
	}
	postToldChanges(e) {
		let { own: t } = e, n = this.ownChangesTold.splice(0), r = t ? n.findIndex(function(e) {
			return uu({
				first: e,
				second: t
			});
		}) : -1;
		for (let [e, i] of n.entries()) if (t && e === r) this.channel.postMessage(t);
		else {
			this.channel.postMessage(i);
			try {
				this.onChannelMessage(i);
			} catch (e) {
				this.reportFoldFailure({
					told: i.type,
					thrown: e
				});
			}
		}
	}
	onStoreNotice(e) {
		this.openSettled ? e.type === "change" && e.own ? (this.ownChangesTold.push(e.message), this.ownChangesTold.length > 256 && this.canPost() ? this.postToldChanges({}) : this.drainWhenIdle()) : this.closing || (e.type === "resync" ? this.trackBroadcastWork({
			work: this.resync(),
			told: "resync"
		}) : this.foldTold(e.message)) : this.holdWhileOpening({ notice: e });
	}
	onChannelHeard(e) {
		this.openSettled ? this.foldTold(e) : this.holdWhileOpening({ notice: {
			type: "change",
			message: e,
			own: !1
		} });
	}
	holdWhileOpening(e) {
		let { notice: t } = e;
		this.resyncWhenSettled || (t.type === "resync" || this.toldWhileOpening.length >= 256 ? (this.resyncWhenSettled = !0, this.toldWhileOpening = []) : this.toldWhileOpening.push(t.message));
	}
	foldTold(e) {
		this.announcing && this._channel?.postMessage(e);
		try {
			this.onChannelMessage(e);
		} catch (t) {
			this.reportFoldFailure({
				told: e.type,
				thrown: t
			});
		}
	}
	callsRunning() {
		return this.writes.count > 0 || this.importsInFlight.size > 0;
	}
	drainWhenIdle() {
		this.ownChangesTold.length === 0 || this.callsRunning() || queueMicrotask(() => this.postUnclaimedChanges());
	}
	postUnclaimedChanges() {
		!this.callsRunning() && this.canPost() && this.postToldChanges({});
	}
	canPost() {
		return !this.closing && this.openSettled;
	}
	async resync() {
		if (this.closing) return;
		this.voidReadScopes();
		let e = [];
		try {
			await this.refreshState(), e = Array.from(this.state.documents.keys()), await Promise.all(e.map((e) => this.refreshHistoryStatus(e)));
		} finally {
			if (this.announcing && !this.closing) {
				let e = {
					type: "resync",
					timestamp: Date.now()
				};
				this._channel?.postMessage(e);
			}
		}
		for (let t of e) try {
			this.signalStateChange(t, !0);
		} catch (e) {
			this.reportFoldFailure({
				told: "resync",
				thrown: e
			});
		}
	}
	subscribeState(e, t) {
		let n = this.stateSubscribers.get(e) ?? this.stateSubscribers.set(e, /* @__PURE__ */ new Set()).get(e);
		return n.add(t), () => n.delete(t);
	}
	signalStateChange(e, t) {
		let n = this.stateSubscribers.get(e);
		if (!n) return;
		let r = [];
		for (let e of Array.from(n)) try {
			e(t);
		} catch (e) {
			r.push(e);
		}
		if (r.length > 0) throw r[0];
	}
	constructor(e) {
		this.closing = !1, this.announcing = !1, this.stopStoreNotices = fu, this.ownChangesTold = [], this.openSettled = !1, this.toldWhileOpening = [], this.resyncWhenSettled = !1, this.pendingBroadcastWork = /* @__PURE__ */ new Set(), this.importChain = Promise.resolve(), this.importsInFlight = /* @__PURE__ */ new Set(), this.readEpochs = /* @__PURE__ */ new Map(), this.lifecycle = Promise.resolve(), this.opens = 0, this.lifecycleTurns = 0, this.writes = lt(), this.state = {
			documents: /* @__PURE__ */ new Map(),
			activeTransactions: 0
		}, this.stateSubscribers = /* @__PURE__ */ new Map();
		let t = Object.keys(e.configs);
		this.dialecteId = e.dialecteId, this.dialecteVersion = e.dialecteVersion, this.storage = e.storage, this.configs = e.configs, this.defaultConfigKey = e.defaultConfigKey ?? t[0], this.hooks = e.hooks, this.perfEnabled = e.dev?.perf ?? !1, this.perf = $t({ enabled: this.perfEnabled }), this.mergedExtensions = e.extensions ? We({
			base: e.extensions.base,
			custom: e.extensions.custom
		}) : void 0;
	}
	async open(e) {
		return this._channel !== void 0 && (this.closing = !0), this.inLifecycleTurn(() => this.openNow({ name: e }));
	}
	async openNow(e) {
		let { name: t } = e;
		await this.closeNow(), this._store = void 0, this.refusedStore = void 0, this._name = t;
		let n, r;
		try {
			n = this.resolveProjectStore({ name: t }), this.announcing = typeof n.subscribe == "function", this.ownChangesTold = [], this.openSettled = !1, this.toldWhileOpening = [], this.resyncWhenSettled = !1, this._channelName = jo({
				name: t,
				instance: this.announcing ? crypto.randomUUID() : void 0
			}), n.subscribe && (this.stopStoreNotices = n.subscribe((e) => this.onStoreNotice(e))), r = new BroadcastChannel(this._channelName), this.announcing || r.addEventListener("message", (e) => {
				this.onChannelHeard(e.data);
			}), await n.open();
		} catch (e) {
			throw this.stopListeningToStore(), r?.close(), this.refusedStore = n, await su({ store: n }), e;
		}
		this._channel = r, this._store = n, this.opens += 1, this.closing = this.lifecycleTurns > 1;
		try {
			let e = No(await n.getDocuments());
			for (let t of e) this.state.documents.set(t.id, Do(t));
			await Promise.all(e.map((e) => this.readHistoryStatus({
				store: n,
				documentId: e.id
			})));
		} catch (e) {
			throw this.closing = !0, this.stopListeningToStore(), r.close(), this._channel = void 0, this._store = void 0, this.state.documents.clear(), this.refusedStore = n, await su({ store: n }), e;
		}
		this.openSettled = !0;
		let i = this.toldWhileOpening.splice(0), a = this.resyncWhenSettled;
		if (this.resyncWhenSettled = !1, this.closing) return this;
		if (a) this.trackBroadcastWork({
			work: this.resync(),
			told: "resync"
		});
		else for (let e of i) this.foldTold(e);
		return this;
	}
	resolveProjectStore(e) {
		return So({
			name: e.name,
			dialecteId: this.dialecteId,
			storage: this.storage,
			runtime: {
				configs: this.configs,
				defaultConfigKey: this.defaultConfigKey,
				hooks: this.hooks,
				perf: this.perfEnabled,
				dialecteVersion: this.dialecteVersion
			},
			perf: this.perf
		});
	}
	onChannelMessage(e) {
		if (!this.closing) switch (e && Io.has(e.type) && "documentId" in e && this.voidReadScopes(e.documentId), e?.type) {
			case "document-updated":
				this.trackBroadcastWork({
					work: this.refreshDocumentRecord(e.documentId),
					told: e.type
				});
				break;
			case "init-empty-document":
			case "document-removed":
			case "document-imported":
				this.trackBroadcastWork({
					work: this.reconcileFromBroadcast(e.documentId),
					told: e.type
				});
				break;
			case "commit": {
				let t = this.state.documents.get(e.documentId);
				t && (t.lastUpdate = e.timestamp ?? Date.now()), this.trackBroadcastWork({
					work: this.refreshHistoryStatus(e.documentId),
					told: e.type
				}), this.signalStateChange(e.documentId, !0);
				break;
			}
		}
	}
	stopListeningToStore() {
		this.stopStoreNotices(), this.stopStoreNotices = fu;
	}
	trackBroadcastWork(e) {
		let { work: t, told: n } = e, r = t.catch((e) => {
			this.closing || Yl({ thrown: e }) || this.reportFoldFailure({
				told: n,
				thrown: e
			});
		}).finally(() => {
			this.pendingBroadcastWork.delete(r);
		});
		this.pendingBroadcastWork.add(r);
	}
	reportFoldFailure(e) {
		console.error(`Project "${this._name}": folding in a change of its store (${e.told}) failed; the other changes are folded in all the same:`, e.thrown);
	}
	async refreshDocumentRecord(e) {
		if (this.closing) return;
		let t = this.state.documents.get(e);
		if (!t) return;
		let n = await this.store.getDocument(e);
		n && !this.closing && (t.record = n, this.signalStateChange(e, !0));
	}
	readEpochOf(e) {
		return this.readEpochs.get(e) ?? 0;
	}
	voidReadScopes(e) {
		let t = e === void 0 ? Array.from(this.state.documents.keys()) : [e];
		for (let e of t) this.readEpochs.set(e, this.readEpochOf(e) + 1);
	}
	async refreshHistoryStatus(e) {
		this.closing || await this.readHistoryStatus({
			store: this.store,
			documentId: e
		});
	}
	async readHistoryStatus(e) {
		let t = this.state.documents.get(e.documentId);
		if (!t) return;
		let { canUndo: n, canRedo: r } = await e.store.getHistoryStatus(e.documentId);
		t.canUndo = n, t.canRedo = r;
	}
	async close() {
		return this.closing = !0, this.inLifecycleTurn(() => this.closeNow());
	}
	async closeNow() {
		if (this.closing = !0, this._channel === void 0) return;
		let e = setTimeout(() => this.reportCloseWait(), Wr);
		try {
			await this.settledImports(), await this.writes.whenIdle(), await Promise.allSettled(this.pendingBroadcastWork), this.stopListeningToStore(), this._channel?.close(), this._channel = void 0, await this._store?.close();
		} finally {
			clearTimeout(e);
		}
		this.state.documents.clear(), this.stateSubscribers.clear();
	}
	reportCloseWait() {
		let e = [...this.importsInFlight].map(function({ fileName: e }) {
			return `"${e}"`;
		}), t = e.length === 0 ? "0 import(s)" : `${e.length} import(s) (${e.join(", ")}: an import hook that never settles keeps it waiting)`;
		console.warn(`Project "${this._name}" has waited ${Wr} ms to close for ${t}, ${this.writes.count} write(s) and ${this.pendingBroadcastWork.size} other-tab update(s) in flight, then its store's close; it goes on waiting. If it never ends, a hook or a transaction callback is awaiting this Project's open, close or destroy.`);
	}
	async destroy() {
		return this.closing = !0, this.inLifecycleTurn(() => this.destroyNow());
	}
	async destroyNow() {
		let e = this._store ?? this.refusedStore;
		await this.closeNow(), await e?.destroy(), this._store = void 0, this.refusedStore = void 0;
	}
	async initEmptyDocument(e) {
		return this.counted(async () => {
			let t = await ko({
				store: this.store,
				configs: this.configs,
				defaultConfigKey: this.defaultConfigKey,
				options: e,
				hooks: this.hooks
			});
			return this.voidReadScopes(t.documentId), this.state.documents.set(t.documentId, t.documentState), this.broadcast({
				type: "init-empty-document",
				documentId: t.documentId,
				timestamp: Date.now()
			}), t.documentId;
		});
	}
	async removeDocument(e) {
		return this.counted(async () => {
			await this.writeOrReadAgain({ write: () => this.store.removeDocument(e) }), this.voidReadScopes(e), this.state.documents.delete(e), this.broadcast({
				type: "document-removed",
				documentId: e,
				timestamp: Date.now()
			});
		});
	}
	importStore(e) {
		let t = this.store;
		return en({
			configs: this.configs,
			defaultConfigKey: this.defaultConfigKey,
			configKey: e?.configKey
		}), t;
	}
	async import(e, t) {
		this.importStore(t), ou({ options: t });
		let n = this.opens, { onProgress: r, onFile: i, ...a } = t ?? {}, o = {}, s = [];
		for (let [t, c] of e.entries()) {
			let l = {
				fileIndex: t,
				fileCount: e.length,
				fileName: c.name
			};
			try {
				this.refuseClosedOpen({ opened: n });
				let e = await this.importFile(c, {
					...a,
					...r && { onProgress: function(e) {
						r({
							...e,
							...l
						});
					} }
				});
				s.push({
					status: "imported",
					...e
				});
			} catch (e) {
				let t = b(e) ?? b(_("IMPORT_FAILED", {
					detail: e instanceof Error ? e.message : String(e),
					cause: e instanceof Error ? e : void 0
				}));
				s.push({
					status: "failed",
					fileName: c.name,
					error: t
				});
			}
			zt({
				listener: i,
				value: {
					...s.at(-1),
					fileIndex: t
				},
				of: Ht.importedFile,
				call: o
			});
		}
		return s;
	}
	async importFile(e, t) {
		let n = this.importStore(t);
		return this.enqueueImport({
			fileName: e.name,
			work: () => this.importOne({
				file: e,
				options: t,
				store: n
			}),
			onWait: function() {
				zt({
					listener: t?.onProgress,
					value: {
						phase: "waiting",
						bytesRead: 0,
						totalBytes: e.size
					},
					of: Ht.importProgress
				});
			}
		});
	}
	async importOne(e) {
		let { file: t, options: n = {}, store: r } = e, { onProgress: i, signal: a, ...o } = n, s = crypto.randomUUID(), c;
		try {
			c = await r.importFile({
				file: t,
				options: o,
				writeId: s,
				onProgress: i,
				signal: a
			});
		} catch (e) {
			throw Yl({ thrown: e }) ? await this.lostImportError({
				store: r,
				thrown: e,
				writeId: s
			}) : e;
		}
		return c.perf && this.perf.merge({
			report: c.perf,
			prefix: "store"
		}), this.voidReadScopes(c.record.id), this.state.documents.set(c.record.id, Do(c.record)), this.broadcast({
			type: "document-imported",
			documentId: c.record.id,
			timestamp: Date.now()
		}), {
			fileName: t.name,
			documentId: c.record.id,
			recordCount: c.recordCount,
			diagnostics: c.diagnostics
		};
	}
	async writeOrReadAgain(e) {
		let { write: t, documentId: n } = e;
		try {
			return await t();
		} catch (e) {
			if (!Yl({ thrown: e })) throw e;
			if (this.voidReadScopes(n), await this.refreshState().catch(Zl), this.announcing && this.postToldChanges({}), n !== void 0) {
				await this.refreshHistoryStatus(n).catch(Zl);
				try {
					this.signalStateChange(n, !0);
				} catch (e) {
					this.reportFoldFailure({
						told: "resync",
						thrown: e
					});
				}
			}
			throw e;
		}
	}
	async lostImportError(e) {
		let { store: t, thrown: n, writeId: r } = e, i = await Ql({
			store: t,
			writeId: r
		});
		if (i !== "applied") return this.announcing && this.postToldChanges({}), $l({
			thrown: n,
			writeId: r,
			outcome: i
		});
		await this.refreshState().catch(Zl);
		let a = Array.from(this.state.documents.values()).find(function(e) {
			return e.record.writeId === r;
		});
		return a ? (this.voidReadScopes(a.record.id), this.broadcast({
			type: "document-imported",
			documentId: a.record.id,
			timestamp: Date.now()
		})) : this.announcing && this.postToldChanges({}), $l({
			thrown: n,
			writeId: r,
			outcome: i,
			meta: a && { documentId: a.record.id }
		});
	}
	async export(e) {
		return Co({
			store: this.store,
			state: this.state,
			projectName: this.name,
			request: e,
			perf: this.perf
		});
	}
	async getDocuments() {
		return No(await this.store.getDocuments());
	}
	async getDocument(e) {
		let t = await this.store.getDocument(e);
		return t && !Mo(t) ? t : void 0;
	}
	openDocument(e) {
		let t = this.store, n = this.state.documents.get(e);
		j(n, {
			key: "DOCUMENT_NOT_REGISTERED",
			detail: `Document "${e}" not registered in project "${this.name}"`
		});
		let r = this.configs[n.record.configKey], i = this.opens;
		return new iu(t, r, e, this.mergedExtensions, this.hooks, {
			state: n,
			channelName: this.channelName,
			broadcast: (e) => {
				this.isCurrentOpen({ opened: i }) && this.broadcast(e);
			},
			refreshHistoryStatus: async () => {
				this.isCurrentOpen({ opened: i }) && await this.refreshHistoryStatus(e);
			},
			perf: this.perf,
			subscribeState: (t) => this.isCurrentOpen({ opened: i }) ? this.subscribeState(e, t) : cu,
			signalStateChange: (t) => {
				this.isCurrentOpen({ opened: i }) && this.signalStateChange(e, t);
			},
			readEpoch: () => this.readEpochOf(e),
			voidReadScopes: () => this.voidReadScopes(e),
			startWrite: () => this.isCurrentOpen({ opened: i }) ? (this.refuseClosedOpen({ opened: i }), this.startCountedWrite()) : lu
		});
	}
	async getDocumentStatus(e) {
		await this.store.reconcile(e), await this.refreshState();
		let t = this.state.documents.has(e);
		return {
			live: t,
			ready: t && await this.store.isDocumentReadable(e)
		};
	}
	getDocumentConfig(e) {
		let t = this.state.documents.get(e);
		if (t) return this.configs[t.record.configKey];
	}
	async undo(e) {
		return this.counted(async () => {
			let t = this.state.documents.get(e);
			j(t, {
				key: "DOCUMENT_NOT_REGISTERED",
				detail: `Document "${e}" not registered in project "${this.name}"`
			});
			let n = Et(), r = await this.writeOrReadAgain({
				documentId: e,
				write: () => this.store.undo({
					documentId: e,
					changeId: n
				})
			});
			if (r === !1) return;
			this.voidReadScopes(e);
			let i = Date.now();
			t.lastUpdate = i, await this.refreshHistoryStatus(e), this.broadcast({
				type: "commit",
				documentId: e,
				timestamp: i,
				changeId: r.changeId,
				changes: r.changes
			}), this.signalStateChange(e, !0);
		});
	}
	async redo(e) {
		return this.counted(async () => {
			let t = this.state.documents.get(e);
			j(t, {
				key: "DOCUMENT_NOT_REGISTERED",
				detail: `Document "${e}" not registered in project "${this.name}"`
			});
			let n = Et(), r = await this.writeOrReadAgain({
				documentId: e,
				write: () => this.store.redo({
					documentId: e,
					changeId: n
				})
			});
			if (r === !1) return;
			this.voidReadScopes(e);
			let i = Date.now();
			t.lastUpdate = i, await this.refreshHistoryStatus(e), this.broadcast({
				type: "commit",
				documentId: e,
				timestamp: i,
				changeId: r.changeId,
				changes: r.changes
			}), this.signalStateChange(e, !0);
		});
	}
	async addBlob(e, t, n = []) {
		return this.counted(async () => {
			let r = {
				id: crypto.randomUUID(),
				documentId: e,
				name: t.name,
				mimeType: t.type || void 0,
				size: t.size,
				createdAt: Date.now(),
				attachedTo: n
			};
			return await this.store.addBlob(r, t), this.broadcast({
				type: "blob-added",
				blobId: r.id,
				documentId: e,
				timestamp: Date.now()
			}), r.id;
		});
	}
	async getBlob(e) {
		return this.store.getBlob(e);
	}
	async exportBlob(e) {
		return Eo({
			store: this.store,
			request: e
		});
	}
	async getBlobsByDocument(e) {
		return this.store.getBlobsByDocument(e);
	}
	async getBlobsByRecord(e, t) {
		return this.store.getBlobsByRecord(e, t);
	}
	async getStandaloneBlobs() {
		return this.store.getStandaloneBlobs();
	}
	async attachBlob(e, t) {
		return this.counted(async () => {
			await this.store.attachBlob(e, t), this.broadcast({
				type: "blob-attached",
				blobId: e,
				ref: t,
				timestamp: Date.now()
			});
		});
	}
	async detachBlob(e, t) {
		return this.counted(async () => {
			await this.store.detachBlob(e, t), this.broadcast({
				type: "blob-detached",
				blobId: e,
				ref: t,
				timestamp: Date.now()
			});
		});
	}
	async removeBlob(e) {
		return this.counted(async () => {
			await this.store.removeBlob(e), this.broadcast({
				type: "blob-removed",
				blobId: e,
				timestamp: Date.now()
			});
		});
	}
	async queryFirst(e) {
		let t;
		return await this.visitOpenDocuments({ visit: async (n) => (t = await e(n.query), t !== void 0) }), t;
	}
	async queryAll(e) {
		let t = [];
		return await this.visitOpenDocuments({ visit: async (n) => {
			let r = await e(n.query);
			return t.push(...r), !1;
		} }), t;
	}
	async visitOpenDocuments(e) {
		this.store;
		let t = this.opens;
		for (let n of Array.from(this.state.documents.keys())) {
			if (this.refuseClosedOpen({ opened: t }), !this.state.documents.has(n)) continue;
			let r = await e.visit(this.openDocument(n));
			if (this.refuseClosedOpen({ opened: t }), r) return;
		}
	}
	isCurrentOpen(e) {
		return this.opens === e.opened && this._channel !== void 0;
	}
	refuseClosedOpen(e) {
		j(this.opens === e.opened && !this.closing, {
			key: "PROJECT_NOT_OPENED",
			detail: "The project was closed, or another one opened, while this call ran: open it again."
		});
	}
	getDatabaseInstance() {
		return this.store.getDatabaseInstance();
	}
	async refreshState() {
		let e = await this.store.getDocuments();
		Oo(this.state.documents, No(e));
	}
	async reconcileFromBroadcast(e) {
		this.closing || (await this.store.reconcile(e), await this.refreshState());
	}
};
function ou(e) {
	let { options: t } = e;
	t && "path" in t && t.path !== void 0 && f("DOCUMENT_PATH_INVALID", {
		detail: "An import of several files takes no path: a path names one file, give it to importFile",
		meta: { path: t.path }
	});
}
async function su(e) {
	try {
		await e.store?.close();
	} catch {}
}
function cu() {}
function lu() {}
function uu(e) {
	let { first: t, second: n } = e;
	return t.type === "commit" || n.type === "commit" ? t.type === "commit" && n.type === "commit" && t.changeId === n.changeId : t.type === n.type && du({
		message: t,
		field: "documentId"
	}) === du({
		message: n,
		field: "documentId"
	}) && du({
		message: t,
		field: "blobId"
	}) === du({
		message: n,
		field: "blobId"
	});
}
function du(e) {
	let { message: t, field: n } = e;
	return n in t ? t[n] : void 0;
}
function fu() {}
function pu(e) {
	let { dialecte: t, storage: n = { type: "local" }, extensions: r, dev: i } = e;
	return new au({
		configs: t.configs,
		defaultConfigKey: t.defaultConfigKey,
		storage: n,
		extensions: {
			base: t.extensions,
			custom: r
		},
		hooks: t.createHooks(),
		dev: i,
		dialecteId: t.id,
		dialecteVersion: t.version
	});
}
function mu(e) {
	let { dialecte: t } = e;
	function n(e) {
		return pu({
			...e,
			dialecte: t
		});
	}
	async function r(e) {
		let { name: n, storage: r } = e;
		await So({
			name: n,
			dialecteId: t.id,
			storage: r,
			runtime: {
				configs: t.configs,
				defaultConfigKey: t.defaultConfigKey,
				dialecteVersion: t.version
			}
		}).destroy();
	}
	return Object.assign(n, {
		dialecte: t,
		destroyProject: r
	});
}
//#endregion
//#region node_modules/.pnpm/@dialecte+nsd@0.7.0/node_modules/@dialecte/nsd/dist/config-tH6y0-wu.js
var hu = "0.7.0", gu = /* @__PURE__ */ "Abbreviation.Abbreviations.AbstractLNClass.ApplicableServiceNS.ApplicableServices.AppliesTo.BasicType.BasicTypes.CDC.CDCs.Changes.ConstructedAttribute.ConstructedAttributes.Copyright.DataAttribute.DataObject.DataSetMemberOf.DependsOn.Doc.Enumeration.Enumerations.FunctionalConstraint.FunctionalConstraints.LNClass.LNClasses.License.Literal.NS.NSDoc.Notice.PresenceCondition.PresenceConditions.Service.ServiceCDC.ServiceCDCs.ServiceConstructedAttribute.ServiceConstructedAttributes.ServiceDataAttribute.ServiceNS.ServiceNsUsage.ServiceParameter.ServiceTypeRealization.ServiceTypeRealizations.SubDataAttribute.SubDataObject".split("."), _u = {
	Abbreviation: [],
	Abbreviations: ["Abbreviation"],
	AbstractLNClass: ["DataObject"],
	ApplicableServiceNS: ["Copyright", "ServiceNsUsage"],
	ApplicableServices: ["Service", "DataSetMemberOf"],
	AppliesTo: [],
	BasicType: [],
	BasicTypes: ["BasicType"],
	CDC: [
		"SubDataObject",
		"DataAttribute",
		"ServiceParameter"
	],
	CDCs: ["CDC"],
	Changes: [],
	ConstructedAttribute: ["SubDataAttribute"],
	ConstructedAttributes: ["ConstructedAttribute"],
	Copyright: ["Notice", "License"],
	DataAttribute: [],
	DataObject: [],
	DataSetMemberOf: [],
	DependsOn: [],
	Doc: [],
	Enumeration: ["Literal"],
	Enumerations: ["Enumeration"],
	FunctionalConstraint: ["ApplicableServices"],
	FunctionalConstraints: ["FunctionalConstraint"],
	LNClass: ["DataObject"],
	LNClasses: ["AbstractLNClass", "LNClass"],
	License: [],
	Literal: [],
	NS: [
		"Copyright",
		"Changes",
		"DependsOn",
		"BasicTypes",
		"FunctionalConstraints",
		"PresenceConditions",
		"Abbreviations",
		"Enumerations",
		"ConstructedAttributes",
		"CDCs",
		"LNClasses"
	],
	NSDoc: ["Copyright", "Doc"],
	Notice: [],
	PresenceCondition: [],
	PresenceConditions: ["PresenceCondition"],
	Service: [],
	ServiceCDC: ["ServiceDataAttribute"],
	ServiceCDCs: ["ServiceCDC"],
	ServiceConstructedAttribute: ["SubDataAttribute"],
	ServiceConstructedAttributes: ["ServiceConstructedAttribute"],
	ServiceDataAttribute: [],
	ServiceNS: [
		"Copyright",
		"Changes",
		"FunctionalConstraints",
		"PresenceConditions",
		"Abbreviations",
		"ServiceTypeRealizations",
		"ServiceConstructedAttributes",
		"ServiceCDCs"
	],
	ServiceNsUsage: ["AppliesTo"],
	ServiceParameter: [],
	ServiceTypeRealization: ["SubDataAttribute"],
	ServiceTypeRealizations: ["ServiceTypeRealization"],
	SubDataAttribute: [],
	SubDataObject: []
}, vu = {
	Abbreviation: ["Abbreviations"],
	Abbreviations: ["NS", "ServiceNS"],
	AbstractLNClass: ["LNClasses"],
	ApplicableServiceNS: [],
	ApplicableServices: ["FunctionalConstraint"],
	AppliesTo: ["ServiceNsUsage"],
	BasicType: ["BasicTypes"],
	BasicTypes: ["NS"],
	CDC: ["CDCs"],
	CDCs: ["NS"],
	Changes: ["NS", "ServiceNS"],
	ConstructedAttribute: ["ConstructedAttributes"],
	ConstructedAttributes: ["NS"],
	Copyright: [
		"ApplicableServiceNS",
		"NS",
		"NSDoc",
		"ServiceNS"
	],
	DataAttribute: ["CDC"],
	DataObject: ["AbstractLNClass", "LNClass"],
	DataSetMemberOf: ["ApplicableServices"],
	DependsOn: ["NS"],
	Doc: ["NSDoc"],
	Enumeration: ["Enumerations"],
	Enumerations: ["NS"],
	FunctionalConstraint: ["FunctionalConstraints"],
	FunctionalConstraints: ["NS", "ServiceNS"],
	LNClass: ["LNClasses"],
	LNClasses: ["NS"],
	License: ["Copyright"],
	Literal: ["Enumeration"],
	NS: [],
	NSDoc: [],
	Notice: ["Copyright"],
	PresenceCondition: ["PresenceConditions"],
	PresenceConditions: ["NS", "ServiceNS"],
	Service: ["ApplicableServices"],
	ServiceCDC: ["ServiceCDCs"],
	ServiceCDCs: ["ServiceNS"],
	ServiceConstructedAttribute: ["ServiceConstructedAttributes"],
	ServiceConstructedAttributes: ["ServiceNS"],
	ServiceDataAttribute: ["ServiceCDC"],
	ServiceNS: [],
	ServiceNsUsage: ["ApplicableServiceNS"],
	ServiceParameter: ["CDC"],
	ServiceTypeRealization: ["ServiceTypeRealizations"],
	ServiceTypeRealizations: ["ServiceNS"],
	SubDataAttribute: [
		"ConstructedAttribute",
		"ServiceConstructedAttribute",
		"ServiceTypeRealization"
	],
	SubDataObject: ["CDC"]
}, yu = {
	Abbreviation: [],
	Abbreviations: ["Abbreviation"],
	AbstractLNClass: ["DataObject"],
	ApplicableServiceNS: [
		"AppliesTo",
		"Copyright",
		"License",
		"Notice",
		"ServiceNsUsage"
	],
	ApplicableServices: ["DataSetMemberOf", "Service"],
	AppliesTo: [],
	BasicType: [],
	BasicTypes: ["BasicType"],
	CDC: [
		"DataAttribute",
		"ServiceParameter",
		"SubDataObject"
	],
	CDCs: [
		"CDC",
		"DataAttribute",
		"ServiceParameter",
		"SubDataObject"
	],
	Changes: [],
	ConstructedAttribute: ["SubDataAttribute"],
	ConstructedAttributes: ["ConstructedAttribute", "SubDataAttribute"],
	Copyright: ["License", "Notice"],
	DataAttribute: [],
	DataObject: [],
	DataSetMemberOf: [],
	DependsOn: [],
	Doc: [],
	Enumeration: ["Literal"],
	Enumerations: ["Enumeration", "Literal"],
	FunctionalConstraint: [
		"ApplicableServices",
		"DataSetMemberOf",
		"Service"
	],
	FunctionalConstraints: [
		"ApplicableServices",
		"DataSetMemberOf",
		"FunctionalConstraint",
		"Service"
	],
	LNClass: ["DataObject"],
	LNClasses: [
		"AbstractLNClass",
		"DataObject",
		"LNClass"
	],
	License: [],
	Literal: [],
	NS: /* @__PURE__ */ "Abbreviation.Abbreviations.AbstractLNClass.ApplicableServices.BasicType.BasicTypes.CDC.CDCs.Changes.ConstructedAttribute.ConstructedAttributes.Copyright.DataAttribute.DataObject.DataSetMemberOf.DependsOn.Enumeration.Enumerations.FunctionalConstraint.FunctionalConstraints.LNClass.LNClasses.License.Literal.Notice.PresenceCondition.PresenceConditions.Service.ServiceParameter.SubDataAttribute.SubDataObject".split("."),
	NSDoc: [
		"Copyright",
		"Doc",
		"License",
		"Notice"
	],
	Notice: [],
	PresenceCondition: [],
	PresenceConditions: ["PresenceCondition"],
	Service: [],
	ServiceCDC: ["ServiceDataAttribute"],
	ServiceCDCs: ["ServiceCDC", "ServiceDataAttribute"],
	ServiceConstructedAttribute: ["SubDataAttribute"],
	ServiceConstructedAttributes: ["ServiceConstructedAttribute", "SubDataAttribute"],
	ServiceDataAttribute: [],
	ServiceNS: [
		"Abbreviation",
		"Abbreviations",
		"ApplicableServices",
		"Changes",
		"Copyright",
		"DataSetMemberOf",
		"FunctionalConstraint",
		"FunctionalConstraints",
		"License",
		"Notice",
		"PresenceCondition",
		"PresenceConditions",
		"Service",
		"ServiceCDC",
		"ServiceCDCs",
		"ServiceConstructedAttribute",
		"ServiceConstructedAttributes",
		"ServiceDataAttribute",
		"ServiceTypeRealization",
		"ServiceTypeRealizations",
		"SubDataAttribute"
	],
	ServiceNsUsage: ["AppliesTo"],
	ServiceParameter: [],
	ServiceTypeRealization: ["SubDataAttribute"],
	ServiceTypeRealizations: ["ServiceTypeRealization", "SubDataAttribute"],
	SubDataAttribute: [],
	SubDataObject: []
}, bu = {
	Abbreviation: [
		"Abbreviations",
		"NS",
		"ServiceNS"
	],
	Abbreviations: ["NS", "ServiceNS"],
	AbstractLNClass: ["LNClasses", "NS"],
	ApplicableServiceNS: [],
	ApplicableServices: [
		"FunctionalConstraint",
		"FunctionalConstraints",
		"NS",
		"ServiceNS"
	],
	AppliesTo: ["ApplicableServiceNS", "ServiceNsUsage"],
	BasicType: ["BasicTypes", "NS"],
	BasicTypes: ["NS"],
	CDC: ["CDCs", "NS"],
	CDCs: ["NS"],
	Changes: ["NS", "ServiceNS"],
	ConstructedAttribute: ["ConstructedAttributes", "NS"],
	ConstructedAttributes: ["NS"],
	Copyright: [
		"ApplicableServiceNS",
		"NS",
		"NSDoc",
		"ServiceNS"
	],
	DataAttribute: [
		"CDC",
		"CDCs",
		"NS"
	],
	DataObject: [
		"AbstractLNClass",
		"LNClass",
		"LNClasses",
		"NS"
	],
	DataSetMemberOf: [
		"ApplicableServices",
		"FunctionalConstraint",
		"FunctionalConstraints",
		"NS",
		"ServiceNS"
	],
	DependsOn: ["NS"],
	Doc: ["NSDoc"],
	Enumeration: ["Enumerations", "NS"],
	Enumerations: ["NS"],
	FunctionalConstraint: [
		"FunctionalConstraints",
		"NS",
		"ServiceNS"
	],
	FunctionalConstraints: ["NS", "ServiceNS"],
	LNClass: ["LNClasses", "NS"],
	LNClasses: ["NS"],
	License: [
		"ApplicableServiceNS",
		"Copyright",
		"NS",
		"NSDoc",
		"ServiceNS"
	],
	Literal: [
		"Enumeration",
		"Enumerations",
		"NS"
	],
	NS: [],
	NSDoc: [],
	Notice: [
		"ApplicableServiceNS",
		"Copyright",
		"NS",
		"NSDoc",
		"ServiceNS"
	],
	PresenceCondition: [
		"NS",
		"PresenceConditions",
		"ServiceNS"
	],
	PresenceConditions: ["NS", "ServiceNS"],
	Service: [
		"ApplicableServices",
		"FunctionalConstraint",
		"FunctionalConstraints",
		"NS",
		"ServiceNS"
	],
	ServiceCDC: ["ServiceCDCs", "ServiceNS"],
	ServiceCDCs: ["ServiceNS"],
	ServiceConstructedAttribute: ["ServiceConstructedAttributes", "ServiceNS"],
	ServiceConstructedAttributes: ["ServiceNS"],
	ServiceDataAttribute: [
		"ServiceCDC",
		"ServiceCDCs",
		"ServiceNS"
	],
	ServiceNS: [],
	ServiceNsUsage: ["ApplicableServiceNS"],
	ServiceParameter: [
		"CDC",
		"CDCs",
		"NS"
	],
	ServiceTypeRealization: ["ServiceNS", "ServiceTypeRealizations"],
	ServiceTypeRealizations: ["ServiceNS"],
	SubDataAttribute: [
		"ConstructedAttribute",
		"ConstructedAttributes",
		"NS",
		"ServiceConstructedAttribute",
		"ServiceConstructedAttributes",
		"ServiceNS",
		"ServiceTypeRealization",
		"ServiceTypeRealizations"
	],
	SubDataObject: [
		"CDC",
		"CDCs",
		"NS"
	]
}, xu = [
	"BasicTypes",
	"CDCs",
	"ConstructedAttributes",
	"DependsOn",
	"Enumerations",
	"LNClasses",
	"NS"
], $ = {
	Abbreviation: {
		descID: "",
		name: ""
	},
	Abbreviations: {},
	AbstractLNClass: {
		base: "",
		deprecated: "",
		descID: "",
		informative: "",
		name: "",
		titleID: ""
	},
	ApplicableServiceNS: {
		date: "",
		version: ""
	},
	ApplicableServices: {},
	AppliesTo: {
		id: "",
		publicationStage: "",
		release: "",
		revision: "",
		version: ""
	},
	BasicType: {
		descID: "",
		name: ""
	},
	BasicTypes: {},
	CDC: {
		deprecated: "",
		descID: "",
		enumParameterized: "",
		informative: "",
		name: "",
		statistics: "",
		titleID: "",
		typeKindParameterized: "",
		variant: ""
	},
	CDCs: {},
	Changes: {
		changesID: "",
		date: "",
		release: "",
		revision: "",
		tissues: "",
		version: ""
	},
	ConstructedAttribute: {
		deprecated: "",
		descID: "",
		informative: "",
		name: "",
		titleID: "",
		"xsi:type": "",
		typeKindParameterized: ""
	},
	ConstructedAttributes: {},
	Copyright: {},
	DataAttribute: {
		dchg: "",
		defaultValue: "",
		deprecated: "",
		descID: "",
		dupd: "",
		fc: "",
		informative: "",
		isArray: "",
		maxIndexAttribute: "",
		maxValue: "",
		minIndex: "",
		minValue: "",
		name: "",
		presCond: "",
		presCondArgs: "",
		presCondArgsID: "",
		qchg: "",
		sizeAttribute: "",
		type: "",
		typeKind: ""
	},
	DataObject: {
		deprecated: "",
		descID: "",
		dsPresCond: "",
		dsPresCondArgs: "",
		dsPresCondArgsID: "",
		informative: "",
		name: "",
		presCond: "",
		presCondArgs: "",
		presCondArgsID: "",
		transient: "",
		type: "",
		underlyingType: "",
		underlyingTypeKind: ""
	},
	DataSetMemberOf: { cb: "" },
	DependsOn: {
		id: "",
		publicationStage: "",
		release: "",
		revision: "",
		version: ""
	},
	Doc: { id: "" },
	Enumeration: {
		deprecated: "",
		descID: "",
		informative: "",
		inheritedFrom: "",
		name: "",
		titleID: ""
	},
	Enumerations: {},
	FunctionalConstraint: {
		abbreviation: "",
		descID: "",
		titleID: ""
	},
	FunctionalConstraints: {},
	LNClass: {
		base: "",
		canHaveLOG: "",
		deprecated: "",
		descID: "",
		informative: "",
		isExtension: "",
		name: "",
		titleID: ""
	},
	LNClasses: {},
	License: {
		kind: "",
		uri: ""
	},
	Literal: {
		deprecated: "",
		descID: "",
		informative: "",
		literalVal: "",
		name: ""
	},
	NS: {
		descID: "",
		id: "",
		publicationStage: "",
		release: "",
		revision: "",
		umlDate: "",
		umlVersion: "",
		version: ""
	},
	NSDoc: {
		id: "",
		lang: "",
		publicationStage: "",
		release: "",
		revision: "",
		umlDate: "",
		umlVersion: "",
		version: ""
	},
	Notice: {},
	PresenceCondition: {
		argument: "",
		descID: "",
		name: "",
		titleID: ""
	},
	PresenceConditions: {},
	Service: { name: "" },
	ServiceCDC: {
		cdc: "",
		variant: ""
	},
	ServiceCDCs: {},
	ServiceConstructedAttribute: {
		deprecated: "",
		descID: "",
		informative: "",
		name: "",
		titleID: "",
		typeKindParameterized: ""
	},
	ServiceConstructedAttributes: {},
	ServiceDataAttribute: {
		deprecated: "",
		descID: "",
		fc: "",
		informative: "",
		name: "",
		presCond: "",
		presCondArgs: "",
		presCondArgsID: "",
		type: "",
		typeKind: "",
		underlyingType: "",
		underlyingTypeKind: ""
	},
	ServiceNS: {
		descID: "",
		id: "",
		publicationStage: "",
		release: "",
		revision: "",
		umlDate: "",
		umlVersion: "",
		version: ""
	},
	ServiceNsUsage: {
		id: "",
		publicationStage: "",
		release: "",
		revision: "",
		version: ""
	},
	ServiceParameter: {
		defaultValue: "",
		deprecated: "",
		descID: "",
		informative: "",
		maxValue: "",
		minValue: "",
		name: "",
		type: "",
		typeKind: ""
	},
	ServiceTypeRealization: {
		deprecated: "",
		descID: "",
		informative: "",
		name: "",
		titleID: "",
		"xsi:type": "",
		typeKindParameterized: ""
	},
	ServiceTypeRealizations: {},
	SubDataAttribute: {
		defaultValue: "",
		deprecated: "",
		descID: "",
		informative: "",
		isArray: "",
		maxIndexAttribute: "",
		maxValue: "",
		minIndex: "",
		minValue: "",
		name: "",
		presCond: "",
		presCondArgs: "",
		presCondArgsID: "",
		sizeAttribute: "",
		type: "",
		typeKind: ""
	},
	SubDataObject: {
		deprecated: "",
		descID: "",
		informative: "",
		isArray: "",
		maxIndexAttribute: "",
		minIndex: "",
		name: "",
		presCond: "",
		presCondArgs: "",
		presCondArgsID: "",
		sizeAttribute: "",
		type: "",
		underlyingType: "",
		underlyingTypeKind: ""
	}
}, Su = {
	byTag: $,
	byParent: {
		Abbreviations: { Abbreviation: $.Abbreviation },
		AbstractLNClass: { DataObject: $.DataObject },
		ApplicableServiceNS: {
			Copyright: $.Copyright,
			ServiceNsUsage: $.ServiceNsUsage
		},
		ApplicableServices: {
			Service: $.Service,
			DataSetMemberOf: $.DataSetMemberOf
		},
		BasicTypes: { BasicType: $.BasicType },
		CDC: {
			SubDataObject: $.SubDataObject,
			DataAttribute: $.DataAttribute,
			ServiceParameter: $.ServiceParameter
		},
		CDCs: { CDC: $.CDC },
		ConstructedAttribute: { SubDataAttribute: $.SubDataAttribute },
		ConstructedAttributes: { ConstructedAttribute: $.ConstructedAttribute },
		Copyright: {
			Notice: $.Notice,
			License: $.License
		},
		Enumeration: { Literal: $.Literal },
		Enumerations: { Enumeration: $.Enumeration },
		FunctionalConstraint: { ApplicableServices: $.ApplicableServices },
		FunctionalConstraints: { FunctionalConstraint: $.FunctionalConstraint },
		LNClass: { DataObject: $.DataObject },
		LNClasses: {
			AbstractLNClass: $.AbstractLNClass,
			LNClass: $.LNClass
		},
		NS: {
			Copyright: $.Copyright,
			Changes: $.Changes,
			DependsOn: $.DependsOn,
			BasicTypes: $.BasicTypes,
			FunctionalConstraints: $.FunctionalConstraints,
			PresenceConditions: $.PresenceConditions,
			Abbreviations: $.Abbreviations,
			Enumerations: $.Enumerations,
			ConstructedAttributes: $.ConstructedAttributes,
			CDCs: $.CDCs,
			LNClasses: $.LNClasses
		},
		NSDoc: {
			Copyright: $.Copyright,
			Doc: $.Doc
		},
		PresenceConditions: { PresenceCondition: $.PresenceCondition },
		ServiceCDC: { ServiceDataAttribute: $.ServiceDataAttribute },
		ServiceCDCs: { ServiceCDC: $.ServiceCDC },
		ServiceConstructedAttribute: { SubDataAttribute: $.SubDataAttribute },
		ServiceConstructedAttributes: { ServiceConstructedAttribute: $.ServiceConstructedAttribute },
		ServiceNS: {
			Copyright: $.Copyright,
			Changes: $.Changes,
			FunctionalConstraints: $.FunctionalConstraints,
			PresenceConditions: $.PresenceConditions,
			Abbreviations: $.Abbreviations,
			ServiceTypeRealizations: $.ServiceTypeRealizations,
			ServiceConstructedAttributes: $.ServiceConstructedAttributes,
			ServiceCDCs: $.ServiceCDCs
		},
		ServiceNsUsage: { AppliesTo: $.AppliesTo },
		ServiceTypeRealization: { SubDataAttribute: $.SubDataAttribute },
		ServiceTypeRealizations: { ServiceTypeRealization: $.ServiceTypeRealization }
	}
}, Cu = {
	Abbreviation: {
		tag: "Abbreviation",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Definition of an abbreviation.",
		parents: ["Abbreviations"],
		attributes: {
			sequence: ["descID", "name"],
			details: {
				descID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				name: {
					required: !0,
					type: { builtin: "normalizedString" }
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [],
			details: {}
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tAbbreviation"
	},
	Abbreviations: {
		tag: "Abbreviations",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "List of abbreviations added by this namespace. Is cumulative to those defined in namespaces this one needs (may not redefine \"included\" ones.).",
		parents: ["NS", "ServiceNS"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: ["Abbreviation"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "Abbreviation",
				minOccurs: 1
			}]
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tAbbreviations",
		declarations: {
			1: {
				namespace: {
					prefix: "",
					uri: "http://www.iec.ch/61850/2016/NSD"
				},
				documentation: "List of abbreviations added by this namespace. Is cumulative to those defined in namespaces this one needs (may not redefine \"included\" ones.).",
				attributes: {
					sequence: [],
					details: {}
				},
				children: {
					sequence: ["Abbreviation"],
					details: {}
				},
				contentModel: {
					kind: "sequence",
					minOccurs: 1,
					maxOccurs: 1,
					particles: [{
						kind: "element",
						name: "Abbreviation",
						minOccurs: 1
					}]
				},
				constraints: [{
					kind: "unique",
					name: "uniqueAbbreviation",
					namespace: "http://www.iec.ch/61850/2016/NSD",
					selector: [{ steps: [{
						name: "Abbreviation",
						namespace: "http://www.iec.ch/61850/2016/NSD"
					}] }],
					fields: [[{
						steps: [],
						attribute: {
							name: "name",
							namespace: ""
						}
					}]]
				}],
				type: "{http://www.iec.ch/61850/2016/NSD}tAbbreviations"
			},
			2: {
				namespace: {
					prefix: "",
					uri: "http://www.iec.ch/61850/2016/NSD"
				},
				documentation: "List of abbreviations added by this namespace. Is cumulative to those defined in namespaces this one needs (may not redefine \"included\" ones.).",
				attributes: {
					sequence: [],
					details: {}
				},
				children: {
					sequence: ["Abbreviation"],
					details: {}
				},
				contentModel: {
					kind: "sequence",
					minOccurs: 1,
					maxOccurs: 1,
					particles: [{
						kind: "element",
						name: "Abbreviation",
						minOccurs: 1
					}]
				},
				constraints: [{
					kind: "unique",
					name: "uniqueAbbreviation_Service",
					namespace: "http://www.iec.ch/61850/2016/NSD",
					selector: [{ steps: [{
						name: "Abbreviation",
						namespace: "http://www.iec.ch/61850/2016/NSD"
					}] }],
					fields: [[{
						steps: [],
						attribute: {
							name: "name",
							namespace: ""
						}
					}]]
				}],
				type: "{http://www.iec.ch/61850/2016/NSD}tAbbreviations"
			}
		}
	},
	AbstractLNClass: {
		tag: "AbstractLNClass",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Definition of an abstract logical node.",
		parents: ["LNClasses"],
		attributes: {
			sequence: [
				"base",
				"deprecated",
				"descID",
				"informative",
				"name",
				"titleID"
			],
			details: {
				base: { type: {
					builtin: "Name",
					facets: {
						pattern: [["[\\u{0}-\\u{FF}]+"]],
						minLength: 1
					}
				} },
				deprecated: {
					default: "false",
					type: { builtin: "boolean" }
				},
				descID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				informative: {
					default: "false",
					type: { builtin: "boolean" }
				},
				name: {
					required: !0,
					type: {
						builtin: "Name",
						facets: {
							pattern: [["[\\u{0}-\\u{FF}]+"]],
							minLength: 1
						}
					}
				},
				titleID: {
					required: !0,
					type: {
						builtin: "normalizedString",
						facets: { minLength: 1 }
					}
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: ["DataObject"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "sequence",
				minOccurs: 1,
				maxOccurs: 1,
				particles: [{
					kind: "element",
					name: "DataObject"
				}]
			}]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueDataObjectAbstractLNClass",
			namespace: "http://www.iec.ch/61850/2016/NSD",
			selector: [{ steps: [{
				name: "DataObject",
				namespace: "http://www.iec.ch/61850/2016/NSD"
			}] }],
			fields: [[{
				steps: [],
				attribute: {
					name: "name",
					namespace: ""
				}
			}]]
		}],
		type: "{http://www.iec.ch/61850/2016/NSD}tAbstractLNClass"
	},
	ApplicableServiceNS: {
		tag: "ApplicableServiceNS",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Root element of a file holding the allowed usages of ServiceNS-es.",
		global: !0,
		parents: [],
		attributes: {
			sequence: ["date", "version"],
			details: {
				date: {
					required: !0,
					type: { builtin: "dateTime" }
				},
				version: {
					required: !0,
					type: { builtin: "unsignedInt" }
				}
			}
		},
		children: {
			sequence: ["Copyright", "ServiceNsUsage"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "sequence",
				minOccurs: 1,
				maxOccurs: 1,
				particles: [{
					kind: "element",
					name: "Copyright",
					maxOccurs: 1
				}]
			}, {
				kind: "sequence",
				minOccurs: 1,
				maxOccurs: 1,
				particles: [{
					kind: "element",
					name: "ServiceNsUsage",
					minOccurs: 1
				}]
			}]
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tApplicableServiceNS"
	},
	ApplicableServices: {
		tag: "ApplicableServices",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		parents: ["FunctionalConstraint"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: ["Service", "DataSetMemberOf"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "Service"
			}, {
				kind: "element",
				name: "DataSetMemberOf"
			}]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueDataSetMemberOf",
			namespace: "http://www.iec.ch/61850/2016/NSD",
			selector: [{ steps: [{
				name: "DataSetMemberOf",
				namespace: "http://www.iec.ch/61850/2016/NSD"
			}] }],
			fields: [[{
				steps: [],
				attribute: {
					name: "cb",
					namespace: ""
				}
			}]]
		}, {
			kind: "unique",
			name: "uniqueService",
			namespace: "http://www.iec.ch/61850/2016/NSD",
			selector: [{ steps: [{
				name: "Service",
				namespace: "http://www.iec.ch/61850/2016/NSD"
			}] }],
			fields: [[{
				steps: [],
				attribute: {
					name: "name",
					namespace: ""
				}
			}]]
		}],
		type: "{http://www.iec.ch/61850/2016/NSD}tApplicableServices"
	},
	AppliesTo: {
		tag: "AppliesTo",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "References to namespaces this ServiceNS can be used with.",
		parents: ["ServiceNsUsage"],
		attributes: {
			sequence: [
				"id",
				"publicationStage",
				"release",
				"revision",
				"version"
			],
			details: {
				id: {
					required: !0,
					type: {
						builtin: "normalizedString",
						facets: { pattern: [["[\\u{0}-\\u{7F}]+"]] }
					}
				},
				publicationStage: {
					default: "IS",
					type: {
						builtin: "token",
						facets: { enumeration: [
							"WD",
							"CD",
							"CDV",
							"DTS",
							"DTR",
							"FDIS",
							"TS",
							"TR",
							"IS"
						] }
					}
				},
				release: {
					default: "1",
					type: {
						builtin: "unsignedByte",
						facets: { minExclusive: "0" }
					}
				},
				revision: {
					default: "A",
					type: {
						builtin: "token",
						facets: { pattern: [["[A-Z]"]] }
					}
				},
				version: {
					required: !0,
					type: {
						builtin: "unsignedShort",
						facets: {
							minInclusive: "2002",
							maxInclusive: "2099"
						}
					}
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	BasicType: {
		tag: "BasicType",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		parents: ["BasicTypes"],
		attributes: {
			sequence: ["descID", "name"],
			details: {
				descID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				name: {
					required: !0,
					type: {
						builtin: "token",
						facets: { minLength: 1 }
					}
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tBasicType"
	},
	BasicTypes: {
		tag: "BasicTypes",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "List of basic types added by this namespace. Is cumulative to those defined in namespaces this one DependsOn (may not redefine \"included\" ones). Note: shall only be used in practice by the 7-2 namespace.",
		parents: ["NS"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: ["BasicType"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "BasicType",
				minOccurs: 1
			}]
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tBasicTypes"
	},
	CDC: {
		tag: "CDC",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Definition of a common data class.",
		parents: ["CDCs"],
		attributes: {
			sequence: [
				"deprecated",
				"descID",
				"enumParameterized",
				"informative",
				"name",
				"statistics",
				"titleID",
				"typeKindParameterized",
				"variant"
			],
			details: {
				deprecated: {
					default: "false",
					type: { builtin: "boolean" }
				},
				descID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				enumParameterized: {
					default: "false",
					type: { builtin: "boolean" }
				},
				informative: {
					default: "false",
					type: { builtin: "boolean" }
				},
				name: {
					required: !0,
					type: {
						builtin: "Name",
						facets: {
							pattern: [["[\\u{0}-\\u{FF}]+"]],
							minLength: 1
						}
					}
				},
				statistics: {
					default: "false",
					type: { builtin: "boolean" }
				},
				titleID: {
					required: !0,
					type: {
						builtin: "normalizedString",
						facets: { minLength: 1 }
					}
				},
				typeKindParameterized: {
					default: "false",
					type: { builtin: "boolean" }
				},
				variant: { type: { builtin: "token" } }
			},
			identityFields: ["name", "variant"]
		},
		children: {
			sequence: [
				"SubDataObject",
				"DataAttribute",
				"ServiceParameter"
			],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [
				{
					kind: "element",
					name: "SubDataObject"
				},
				{
					kind: "element",
					name: "DataAttribute",
					minOccurs: 1
				},
				{
					kind: "element",
					name: "ServiceParameter",
					maxOccurs: 1
				}
			]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueCDCChild",
			namespace: "http://www.iec.ch/61850/2016/NSD",
			selector: [{ steps: [{}] }],
			fields: [[{
				steps: [],
				attribute: {
					name: "name",
					namespace: ""
				}
			}]]
		}],
		type: "{http://www.iec.ch/61850/2016/NSD}tCDC"
	},
	CDCs: {
		tag: "CDCs",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "List of CDCs added by this namespace. CDCs are not allowed to be extended by another namespace. Note: shall only be used in practice by the 7-3",
		parents: ["NS"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: ["CDC"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "CDC"
			}]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueCDC",
			namespace: "http://www.iec.ch/61850/2016/NSD",
			selector: [{ steps: [{
				name: "CDC",
				namespace: "http://www.iec.ch/61850/2016/NSD"
			}] }],
			fields: [[{
				steps: [],
				attribute: {
					name: "name",
					namespace: ""
				}
			}], [{
				steps: [],
				attribute: {
					name: "variant",
					namespace: ""
				}
			}]]
		}],
		type: "{http://www.iec.ch/61850/2016/NSD}tCDCs"
	},
	Changes: {
		tag: "Changes",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "The version/revision/release this namespace is based on, including the TISSUEs implemented in this release.",
		parents: ["NS", "ServiceNS"],
		attributes: {
			sequence: [
				"changesID",
				"date",
				"release",
				"revision",
				"tissues",
				"version"
			],
			details: {
				changesID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				date: { type: { builtin: "date" } },
				release: {
					default: "1",
					type: {
						builtin: "unsignedByte",
						facets: { minExclusive: "0" }
					}
				},
				revision: {
					default: "A",
					type: {
						builtin: "token",
						facets: { pattern: [["[A-Z]"]] }
					}
				},
				tissues: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				version: {
					required: !0,
					type: {
						builtin: "unsignedShort",
						facets: {
							minInclusive: "2002",
							maxInclusive: "2099"
						}
					}
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tChanges"
	},
	ConstructedAttribute: {
		tag: "ConstructedAttribute",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Definition of a constructed (structured) data attribute.",
		parents: ["ConstructedAttributes"],
		attributes: {
			sequence: [
				"deprecated",
				"descID",
				"informative",
				"name",
				"titleID"
			],
			details: {
				deprecated: {
					default: "false",
					type: { builtin: "boolean" }
				},
				descID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				informative: {
					default: "false",
					type: { builtin: "boolean" }
				},
				name: {
					required: !0,
					type: {
						builtin: "Name",
						facets: {
							pattern: [["[\\u{0}-\\u{FF}]+"]],
							minLength: 1
						}
					}
				},
				titleID: {
					required: !0,
					type: {
						builtin: "normalizedString",
						facets: { minLength: 1 }
					}
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: ["SubDataAttribute"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "SubDataAttribute",
				minOccurs: 1
			}]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueSubDataAttribute",
			namespace: "http://www.iec.ch/61850/2016/NSD",
			selector: [{ steps: [{
				name: "SubDataAttribute",
				namespace: "http://www.iec.ch/61850/2016/NSD"
			}] }],
			fields: [[{
				steps: [],
				attribute: {
					name: "name",
					namespace: ""
				}
			}]]
		}],
		type: "{http://www.iec.ch/61850/2016/NSD}tConstructedAttribute",
		variants: ["{http://www.iec.ch/61850/2016/NSD}tServiceConstructedAttribute"]
	},
	ConstructedAttributes: {
		tag: "ConstructedAttributes",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "List of Constructed Attributes added by this namespace. Constructed Attributes are not allowed to be extended by another namespace. Note: shall only be used in practice by the 7-3",
		parents: ["NS"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: ["ConstructedAttribute"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "ConstructedAttribute"
			}]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueConstructedAttribute",
			namespace: "http://www.iec.ch/61850/2016/NSD",
			selector: [{ steps: [{
				name: "ConstructedAttribute",
				namespace: "http://www.iec.ch/61850/2016/NSD"
			}] }],
			fields: [[{
				steps: [],
				attribute: {
					name: "name",
					namespace: ""
				}
			}]]
		}],
		type: "{http://www.iec.ch/61850/2016/NSD}tConstructedAttributes"
	},
	Copyright: {
		tag: "Copyright",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "The copyright notice attached to the XML",
		global: !0,
		parents: [
			"ApplicableServiceNS",
			"NS",
			"NSDoc",
			"ServiceNS"
		],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: ["Notice", "License"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "Notice",
				minOccurs: 1,
				maxOccurs: 1
			}, {
				kind: "element",
				name: "License",
				minOccurs: 1,
				maxOccurs: 1
			}]
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tCopyrightNotice"
	},
	DataAttribute: {
		tag: "DataAttribute",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		parents: ["CDC"],
		attributes: {
			sequence: [
				"dchg",
				"defaultValue",
				"deprecated",
				"descID",
				"dupd",
				"fc",
				"informative",
				"isArray",
				"maxIndexAttribute",
				"maxValue",
				"minIndex",
				"minValue",
				"name",
				"presCond",
				"presCondArgs",
				"presCondArgsID",
				"qchg",
				"sizeAttribute",
				"type",
				"typeKind"
			],
			details: {
				dchg: {
					default: "false",
					type: { builtin: "boolean" }
				},
				defaultValue: { type: { builtin: "normalizedString" } },
				deprecated: {
					default: "false",
					type: { builtin: "boolean" }
				},
				descID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				dupd: {
					default: "false",
					type: { builtin: "boolean" }
				},
				fc: {
					required: !0,
					type: {
						builtin: "token",
						facets: {
							pattern: [["[\\u{0}-\\u{7F}]+"]],
							minLength: 1
						}
					}
				},
				informative: {
					default: "false",
					type: { builtin: "boolean" }
				},
				isArray: {
					default: "false",
					type: { builtin: "boolean" }
				},
				maxIndexAttribute: { type: {
					builtin: "Name",
					facets: {
						pattern: [["[\\u{0}-\\u{FF}]+"]],
						minLength: 1
					}
				} },
				maxValue: { type: { builtin: "decimal" } },
				minIndex: {
					default: "0",
					type: { builtin: "unsignedInt" }
				},
				minValue: { type: { builtin: "decimal" } },
				name: {
					required: !0,
					type: {
						builtin: "Name",
						facets: {
							pattern: [["[\\u{0}-\\u{FF}]+"]],
							minLength: 1
						}
					}
				},
				presCond: {
					default: "M",
					type: { builtin: "normalizedString" }
				},
				presCondArgs: { type: { builtin: "normalizedString" } },
				presCondArgsID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				qchg: {
					default: "false",
					type: { builtin: "boolean" }
				},
				sizeAttribute: { type: {
					builtin: "Name",
					facets: {
						pattern: [["[\\u{0}-\\u{FF}]+"]],
						minLength: 1
					}
				} },
				type: { type: {
					builtin: "Name",
					facets: {
						pattern: [["[\\u{0}-\\u{FF}]+"]],
						minLength: 1
					}
				} },
				typeKind: {
					default: "BASIC",
					type: { union: [{
						builtin: "token",
						facets: { enumeration: [
							"BASIC",
							"ENUMERATED",
							"CONSTRUCTED"
						] }
					}, {
						builtin: "token",
						facets: { enumeration: ["undefined"] }
					}] }
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [],
			details: {}
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tDataAttribute"
	},
	DataObject: {
		tag: "DataObject",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Child Data Object of the logical node.",
		parents: ["AbstractLNClass", "LNClass"],
		attributes: {
			sequence: [
				"deprecated",
				"descID",
				"dsPresCond",
				"dsPresCondArgs",
				"dsPresCondArgsID",
				"informative",
				"name",
				"presCond",
				"presCondArgs",
				"presCondArgsID",
				"transient",
				"type",
				"underlyingType",
				"underlyingTypeKind"
			],
			details: {
				deprecated: {
					default: "false",
					type: { builtin: "boolean" }
				},
				descID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				dsPresCond: {
					default: "M",
					type: { builtin: "normalizedString" }
				},
				dsPresCondArgs: { type: { builtin: "normalizedString" } },
				dsPresCondArgsID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				informative: {
					default: "false",
					type: { builtin: "boolean" }
				},
				name: {
					required: !0,
					type: {
						builtin: "Name",
						facets: {
							pattern: [["[\\u{0}-\\u{FF}]+"]],
							minLength: 1,
							maxLength: 12
						}
					}
				},
				presCond: {
					default: "M",
					type: { builtin: "normalizedString" }
				},
				presCondArgs: { type: { builtin: "normalizedString" } },
				presCondArgsID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				transient: {
					default: "false",
					type: { builtin: "boolean" }
				},
				type: {
					required: !0,
					type: {
						builtin: "Name",
						facets: {
							pattern: [["[\\u{0}-\\u{FF}]+"]],
							minLength: 1
						}
					}
				},
				underlyingType: { type: {
					builtin: "Name",
					facets: {
						pattern: [["[\\u{0}-\\u{FF}]+"]],
						minLength: 1
					}
				} },
				underlyingTypeKind: { type: {
					builtin: "token",
					facets: { enumeration: [
						"BASIC",
						"ENUMERATED",
						"CONSTRUCTED"
					] }
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [],
			details: {}
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tDataObject"
	},
	DataSetMemberOf: {
		tag: "DataSetMemberOf",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "An attribute of this FC can be member of a dataset for a control block type indicated by attribute cb if and only if this element is present.",
		parents: ["ApplicableServices"],
		attributes: {
			sequence: ["cb"],
			details: { cb: {
				required: !0,
				type: {
					builtin: "normalizedString",
					facets: { enumeration: [
						"RCB",
						"LCB",
						"GoCB",
						"SVCB"
					] }
				}
			} },
			identityFields: ["cb"]
		},
		children: {
			sequence: [],
			details: {}
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tDataSetMemberOf"
	},
	DependsOn: {
		tag: "DependsOn",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "The namespace identification this namespace depends on (and whose definitions are imported into this one).",
		parents: ["NS"],
		attributes: {
			sequence: [
				"id",
				"publicationStage",
				"release",
				"revision",
				"version"
			],
			details: {
				id: {
					required: !0,
					type: {
						builtin: "normalizedString",
						facets: { pattern: [["[\\u{0}-\\u{7F}]+"]] }
					}
				},
				publicationStage: {
					default: "IS",
					type: {
						builtin: "token",
						facets: { enumeration: [
							"WD",
							"CD",
							"CDV",
							"DTS",
							"DTR",
							"FDIS",
							"TS",
							"TR",
							"IS"
						] }
					}
				},
				release: {
					default: "1",
					type: {
						builtin: "unsignedByte",
						facets: { minExclusive: "0" }
					}
				},
				revision: {
					default: "A",
					type: {
						builtin: "token",
						facets: { pattern: [["[A-Z]"]] }
					}
				},
				version: {
					required: !0,
					type: {
						builtin: "unsignedShort",
						facets: {
							minInclusive: "2002",
							maxInclusive: "2099"
						}
					}
				}
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	Doc: {
		tag: "Doc",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "List of documentation identifiers and corresponding documentation strings in the corresponding language.",
		parents: ["NSDoc"],
		attributes: {
			sequence: ["id"],
			details: { id: {
				required: !0,
				type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				}
			} },
			identityFields: ["id"]
		},
		children: {
			sequence: [],
			any: !0,
			details: {}
		},
		contentModel: {
			kind: "sequence",
			particles: [{
				kind: "any",
				notNamespace: [],
				processContents: "lax",
				minOccurs: 1,
				maxOccurs: 1
			}]
		},
		textContent: {},
		type: "{http://www.iec.ch/61850/2016/NSD}tDoc"
	},
	Enumeration: {
		tag: "Enumeration",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Definition of an enumeration.",
		parents: ["Enumerations"],
		attributes: {
			sequence: [
				"deprecated",
				"descID",
				"informative",
				"inheritedFrom",
				"name",
				"titleID"
			],
			details: {
				deprecated: {
					default: "false",
					type: { builtin: "boolean" }
				},
				descID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				informative: {
					default: "false",
					type: { builtin: "boolean" }
				},
				inheritedFrom: { type: {
					builtin: "Name",
					facets: {
						pattern: [["[\\u{0}-\\u{FF}]+"]],
						minLength: 1
					}
				} },
				name: {
					required: !0,
					type: {
						builtin: "Name",
						facets: {
							pattern: [["[\\u{0}-\\u{FF}]+"]],
							minLength: 1
						}
					}
				},
				titleID: {
					required: !0,
					type: {
						builtin: "normalizedString",
						facets: { minLength: 1 }
					}
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: ["Literal"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "Literal",
				minOccurs: 1
			}]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueLiteralName",
			namespace: "http://www.iec.ch/61850/2016/NSD",
			selector: [{ steps: [{
				name: "Literal",
				namespace: "http://www.iec.ch/61850/2016/NSD"
			}] }],
			fields: [[{
				steps: [],
				attribute: {
					name: "name",
					namespace: ""
				}
			}]]
		}, {
			kind: "unique",
			name: "uniqueLiteralVal",
			namespace: "http://www.iec.ch/61850/2016/NSD",
			selector: [{ steps: [{
				name: "Literal",
				namespace: "http://www.iec.ch/61850/2016/NSD"
			}] }],
			fields: [[{
				steps: [],
				attribute: {
					name: "literalVal",
					namespace: ""
				}
			}]]
		}],
		type: "{http://www.iec.ch/61850/2016/NSD}tEnumeration"
	},
	Enumerations: {
		tag: "Enumerations",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "List of Enumerations added by this namespace. Is cumulative to those defined in namespaces this one DependsOn (may not redefine \"included\" ones).",
		parents: ["NS"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: ["Enumeration"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "Enumeration"
			}]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueEnumeration",
			namespace: "http://www.iec.ch/61850/2016/NSD",
			selector: [{ steps: [{
				name: "Enumeration",
				namespace: "http://www.iec.ch/61850/2016/NSD"
			}] }],
			fields: [[{
				steps: [],
				attribute: {
					name: "name",
					namespace: ""
				}
			}]]
		}],
		type: "{http://www.iec.ch/61850/2016/NSD}tEnumerations"
	},
	FunctionalConstraint: {
		tag: "FunctionalConstraint",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Definition of a Functional Constraint.",
		parents: ["FunctionalConstraints"],
		attributes: {
			sequence: [
				"abbreviation",
				"descID",
				"titleID"
			],
			details: {
				abbreviation: {
					required: !0,
					type: {
						builtin: "token",
						facets: {
							pattern: [["[\\u{0}-\\u{7F}]+"]],
							minLength: 1
						}
					}
				},
				descID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				titleID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} }
			},
			identityFields: ["abbreviation"]
		},
		children: {
			sequence: ["ApplicableServices"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "ApplicableServices",
				maxOccurs: 1
			}]
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tFunctionalConstraint"
	},
	FunctionalConstraints: {
		tag: "FunctionalConstraints",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "List of Functional Constraints added by this namespace. Is cumulative to those defined in namespaces this one DependsOn (may not redefine \"included\" ones).",
		parents: ["NS", "ServiceNS"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: ["FunctionalConstraint"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "FunctionalConstraint",
				minOccurs: 1
			}]
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tFunctionalConstraints",
		declarations: {
			1: {
				namespace: {
					prefix: "",
					uri: "http://www.iec.ch/61850/2016/NSD"
				},
				documentation: "List of Functional Constraints added by this namespace. Is cumulative to those defined in namespaces this one DependsOn (may not redefine \"included\" ones).",
				attributes: {
					sequence: [],
					details: {}
				},
				children: {
					sequence: ["FunctionalConstraint"],
					details: {}
				},
				contentModel: {
					kind: "sequence",
					minOccurs: 1,
					maxOccurs: 1,
					particles: [{
						kind: "element",
						name: "FunctionalConstraint",
						minOccurs: 1
					}]
				},
				constraints: [{
					kind: "unique",
					name: "uniqueFunctionalConstraint",
					namespace: "http://www.iec.ch/61850/2016/NSD",
					selector: [{ steps: [{
						name: "FunctionalConstraint",
						namespace: "http://www.iec.ch/61850/2016/NSD"
					}] }],
					fields: [[{
						steps: [],
						attribute: {
							name: "abbreviation",
							namespace: ""
						}
					}]]
				}],
				type: "{http://www.iec.ch/61850/2016/NSD}tFunctionalConstraints"
			},
			2: {
				namespace: {
					prefix: "",
					uri: "http://www.iec.ch/61850/2016/NSD"
				},
				documentation: "List of Functional Constraints added by this namespace. Is cumulative to those defined in namespaces this one needs (may not redefine \"included\" ones.).",
				attributes: {
					sequence: [],
					details: {}
				},
				children: {
					sequence: ["FunctionalConstraint"],
					details: {}
				},
				contentModel: {
					kind: "sequence",
					minOccurs: 1,
					maxOccurs: 1,
					particles: [{
						kind: "element",
						name: "FunctionalConstraint",
						minOccurs: 1
					}]
				},
				constraints: [{
					kind: "unique",
					name: "uniqueFunctionalConstraint_Service",
					namespace: "http://www.iec.ch/61850/2016/NSD",
					selector: [{ steps: [{
						name: "FunctionalConstraint",
						namespace: "http://www.iec.ch/61850/2016/NSD"
					}] }],
					fields: [[{
						steps: [],
						attribute: {
							name: "abbreviation",
							namespace: ""
						}
					}]]
				}],
				type: "{http://www.iec.ch/61850/2016/NSD}tFunctionalConstraints"
			}
		}
	},
	LNClass: {
		tag: "LNClass",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Definition of a (non-abstract) logical node.",
		parents: ["LNClasses"],
		attributes: {
			sequence: [
				"base",
				"canHaveLOG",
				"deprecated",
				"descID",
				"informative",
				"isExtension",
				"name",
				"titleID"
			],
			details: {
				base: { type: {
					builtin: "Name",
					facets: {
						pattern: [["[\\u{0}-\\u{FF}]+"]],
						minLength: 1
					}
				} },
				canHaveLOG: {
					default: "false",
					type: { builtin: "boolean" }
				},
				deprecated: {
					default: "false",
					type: { builtin: "boolean" }
				},
				descID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				informative: {
					default: "false",
					type: { builtin: "boolean" }
				},
				isExtension: {
					default: "false",
					type: { builtin: "boolean" }
				},
				name: {
					required: !0,
					type: {
						builtin: "Name",
						facets: { pattern: [["LLN0", "[A-Z]{4}"]] }
					}
				},
				titleID: {
					required: !0,
					type: {
						builtin: "normalizedString",
						facets: { minLength: 1 }
					}
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: ["DataObject"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "sequence",
				minOccurs: 1,
				maxOccurs: 1,
				particles: [{
					kind: "element",
					name: "DataObject"
				}]
			}]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueDataObject",
			namespace: "http://www.iec.ch/61850/2016/NSD",
			selector: [{ steps: [{
				name: "DataObject",
				namespace: "http://www.iec.ch/61850/2016/NSD"
			}] }],
			fields: [[{
				steps: [],
				attribute: {
					name: "name",
					namespace: ""
				}
			}]]
		}],
		type: "{http://www.iec.ch/61850/2016/NSD}tLNClass"
	},
	LNClasses: {
		tag: "LNClasses",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "List of LNClasses added by this namespace. Is cumulative to those defined in namespaces this one DependsOn (may not redefine \"included\" ones).",
		parents: ["NS"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: ["AbstractLNClass", "LNClass"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "AbstractLNClass"
			}, {
				kind: "element",
				name: "LNClass"
			}]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueAbstractLNClass",
			namespace: "http://www.iec.ch/61850/2016/NSD",
			selector: [{ steps: [{
				name: "AbstractLNClass",
				namespace: "http://www.iec.ch/61850/2016/NSD"
			}] }],
			fields: [[{
				steps: [],
				attribute: {
					name: "name",
					namespace: ""
				}
			}]]
		}, {
			kind: "unique",
			name: "uniqueLNClass",
			namespace: "http://www.iec.ch/61850/2016/NSD",
			selector: [{ steps: [{
				name: "LNClass",
				namespace: "http://www.iec.ch/61850/2016/NSD"
			}] }],
			fields: [[{
				steps: [],
				attribute: {
					name: "name",
					namespace: ""
				}
			}]]
		}],
		type: "{http://www.iec.ch/61850/2016/NSD}tLNClasses"
	},
	License: {
		tag: "License",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "The license definition.",
		parents: ["Copyright"],
		attributes: {
			sequence: ["kind", "uri"],
			details: {
				kind: { type: {
					builtin: "Name",
					facets: { enumeration: [
						"Standard",
						"Private",
						"None"
					] }
				} },
				uri: { type: { builtin: "normalizedString" } }
			}
		},
		children: {
			sequence: [],
			details: {}
		},
		textContent: {},
		type: "{http://www.iec.ch/61850/2016/NSD}tLicense"
	},
	Literal: {
		tag: "Literal",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		parents: ["Enumeration"],
		attributes: {
			sequence: [
				"deprecated",
				"descID",
				"informative",
				"literalVal",
				"name"
			],
			details: {
				deprecated: {
					default: "false",
					type: { builtin: "boolean" }
				},
				descID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				informative: {
					default: "false",
					type: { builtin: "boolean" }
				},
				literalVal: {
					required: !0,
					type: { builtin: "int" }
				},
				name: {
					required: !0,
					type: {
						builtin: "normalizedString",
						facets: {
							pattern: [["[\\u{0}-\\u{FF}]*"]],
							maxLength: 127
						}
					}
				}
			},
			identityFields: ["literalVal", "name"]
		},
		children: {
			sequence: [],
			details: {}
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tLiteral"
	},
	NS: {
		tag: "NS",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Root element of a namespace definition (NSD) file.",
		global: !0,
		parents: [],
		attributes: {
			sequence: [
				"descID",
				"id",
				"publicationStage",
				"release",
				"revision",
				"umlDate",
				"umlVersion",
				"version"
			],
			details: {
				descID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				id: {
					required: !0,
					type: {
						builtin: "normalizedString",
						facets: { pattern: [["[\\u{0}-\\u{7F}]+"]] }
					}
				},
				publicationStage: {
					default: "IS",
					type: {
						builtin: "token",
						facets: { enumeration: [
							"WD",
							"CD",
							"CDV",
							"DTS",
							"DTR",
							"FDIS",
							"TS",
							"TR",
							"IS"
						] }
					}
				},
				release: {
					default: "1",
					type: {
						builtin: "unsignedByte",
						facets: { minExclusive: "0" }
					}
				},
				revision: {
					default: "A",
					type: {
						builtin: "token",
						facets: { pattern: [["[A-Z]"]] }
					}
				},
				umlDate: { type: { builtin: "dateTime" } },
				umlVersion: { type: {
					builtin: "Name",
					facets: { minLength: 1 }
				} },
				version: {
					required: !0,
					type: {
						builtin: "unsignedShort",
						facets: {
							minInclusive: "2002",
							maxInclusive: "2099"
						}
					}
				}
			}
		},
		children: {
			sequence: [
				"Copyright",
				"Changes",
				"DependsOn",
				"BasicTypes",
				"FunctionalConstraints",
				"PresenceConditions",
				"Abbreviations",
				"Enumerations",
				"ConstructedAttributes",
				"CDCs",
				"LNClasses"
			],
			details: {
				FunctionalConstraints: { declarations: { "http://www.iec.ch/61850/2016/NSD": ["1"] } },
				PresenceConditions: { declarations: { "http://www.iec.ch/61850/2016/NSD": ["1"] } },
				Abbreviations: { declarations: { "http://www.iec.ch/61850/2016/NSD": ["1"] } }
			}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "sequence",
				minOccurs: 1,
				maxOccurs: 1,
				particles: [{
					kind: "element",
					name: "Copyright",
					maxOccurs: 1
				}]
			}, {
				kind: "sequence",
				minOccurs: 1,
				maxOccurs: 1,
				particles: [
					{
						kind: "element",
						name: "Changes",
						maxOccurs: 1
					},
					{
						kind: "element",
						name: "DependsOn",
						maxOccurs: 1
					},
					{
						kind: "element",
						name: "BasicTypes",
						maxOccurs: 1
					},
					{
						kind: "element",
						name: "FunctionalConstraints",
						maxOccurs: 1,
						declaration: "1"
					},
					{
						kind: "element",
						name: "PresenceConditions",
						maxOccurs: 1,
						declaration: "1"
					},
					{
						kind: "element",
						name: "Abbreviations",
						maxOccurs: 1,
						declaration: "1"
					},
					{
						kind: "element",
						name: "Enumerations",
						maxOccurs: 1
					},
					{
						kind: "element",
						name: "ConstructedAttributes",
						maxOccurs: 1
					},
					{
						kind: "element",
						name: "CDCs",
						maxOccurs: 1
					},
					{
						kind: "element",
						name: "LNClasses",
						maxOccurs: 1
					}
				]
			}]
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tNS"
	},
	NSDoc: {
		tag: "NSDoc",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Root element of a file holding the documentation strings of an NSD file (NSDOC).",
		global: !0,
		parents: [],
		attributes: {
			sequence: [
				"id",
				"lang",
				"publicationStage",
				"release",
				"revision",
				"umlDate",
				"umlVersion",
				"version"
			],
			details: {
				id: {
					required: !0,
					type: {
						builtin: "normalizedString",
						facets: { pattern: [["[\\u{0}-\\u{7F}]+"]] }
					}
				},
				lang: {
					required: !0,
					type: { builtin: "language" }
				},
				publicationStage: {
					default: "IS",
					type: {
						builtin: "token",
						facets: { enumeration: [
							"WD",
							"CD",
							"CDV",
							"DTS",
							"DTR",
							"FDIS",
							"TS",
							"TR",
							"IS"
						] }
					}
				},
				release: {
					default: "1",
					type: {
						builtin: "unsignedByte",
						facets: { minExclusive: "0" }
					}
				},
				revision: {
					default: "A",
					type: {
						builtin: "token",
						facets: { pattern: [["[A-Z]"]] }
					}
				},
				umlDate: { type: { builtin: "dateTime" } },
				umlVersion: { type: {
					builtin: "Name",
					facets: { minLength: 1 }
				} },
				version: {
					required: !0,
					type: {
						builtin: "unsignedShort",
						facets: {
							minInclusive: "2002",
							maxInclusive: "2099"
						}
					}
				}
			}
		},
		children: {
			sequence: ["Copyright", "Doc"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "sequence",
				minOccurs: 1,
				maxOccurs: 1,
				particles: [{
					kind: "element",
					name: "Copyright",
					maxOccurs: 1
				}]
			}, {
				kind: "sequence",
				minOccurs: 1,
				maxOccurs: 1,
				particles: [{
					kind: "element",
					name: "Doc",
					minOccurs: 1
				}]
			}]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueDocID",
			namespace: "http://www.iec.ch/61850/2016/NSD",
			selector: [{ steps: [{
				name: "Doc",
				namespace: "http://www.iec.ch/61850/2016/NSD"
			}] }],
			fields: [[{
				steps: [],
				attribute: {
					name: "id",
					namespace: ""
				}
			}]]
		}],
		type: "{http://www.iec.ch/61850/2016/NSD}tNSDoc"
	},
	Notice: {
		tag: "Notice",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "The textual copyright notice.",
		parents: ["Copyright"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: [],
			details: {}
		},
		textContent: {},
		type: "{http://www.iec.ch/61850/2016/NSD}tNotice"
	},
	PresenceCondition: {
		tag: "PresenceCondition",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Definition of a presence condition.",
		parents: ["PresenceConditions"],
		attributes: {
			sequence: [
				"argument",
				"descID",
				"name",
				"titleID"
			],
			details: {
				argument: { type: { builtin: "normalizedString" } },
				descID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				name: {
					required: !0,
					type: { builtin: "normalizedString" }
				},
				titleID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [],
			details: {}
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tPresenceCondition"
	},
	PresenceConditions: {
		tag: "PresenceConditions",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "List of presence conditions added by this namespace. Is cumulative to those defined in namespaces this one DependsOn (may not redefine \"included\" ones.).",
		parents: ["NS", "ServiceNS"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: ["PresenceCondition"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "PresenceCondition",
				minOccurs: 1
			}]
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tPresenceConditions",
		declarations: {
			1: {
				namespace: {
					prefix: "",
					uri: "http://www.iec.ch/61850/2016/NSD"
				},
				documentation: "List of presence conditions added by this namespace. Is cumulative to those defined in namespaces this one DependsOn (may not redefine \"included\" ones.).",
				attributes: {
					sequence: [],
					details: {}
				},
				children: {
					sequence: ["PresenceCondition"],
					details: {}
				},
				contentModel: {
					kind: "sequence",
					minOccurs: 1,
					maxOccurs: 1,
					particles: [{
						kind: "element",
						name: "PresenceCondition",
						minOccurs: 1
					}]
				},
				constraints: [{
					kind: "unique",
					name: "uniquePresenceCondition",
					namespace: "http://www.iec.ch/61850/2016/NSD",
					selector: [{ steps: [{
						name: "PresenceCondition",
						namespace: "http://www.iec.ch/61850/2016/NSD"
					}] }],
					fields: [[{
						steps: [],
						attribute: {
							name: "name",
							namespace: ""
						}
					}]]
				}],
				type: "{http://www.iec.ch/61850/2016/NSD}tPresenceConditions"
			},
			2: {
				namespace: {
					prefix: "",
					uri: "http://www.iec.ch/61850/2016/NSD"
				},
				documentation: "List of presence conditions added by this namespace. Is cumulative to those defined in namespaces this one needs (may not redefine \"included\" ones.).",
				attributes: {
					sequence: [],
					details: {}
				},
				children: {
					sequence: ["PresenceCondition"],
					details: {}
				},
				contentModel: {
					kind: "sequence",
					minOccurs: 1,
					maxOccurs: 1,
					particles: [{
						kind: "element",
						name: "PresenceCondition",
						minOccurs: 1
					}]
				},
				constraints: [{
					kind: "unique",
					name: "uniquePresenceCondition_Service",
					namespace: "http://www.iec.ch/61850/2016/NSD",
					selector: [{ steps: [{
						name: "PresenceCondition",
						namespace: "http://www.iec.ch/61850/2016/NSD"
					}] }],
					fields: [[{
						steps: [],
						attribute: {
							name: "name",
							namespace: ""
						}
					}]]
				}],
				type: "{http://www.iec.ch/61850/2016/NSD}tPresenceConditions"
			}
		}
	},
	Service: {
		tag: "Service",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "If present, indicates that the service with given name applies to attributes with the specified FC (otherwise it may not be used).",
		parents: ["ApplicableServices"],
		attributes: {
			sequence: ["name"],
			details: { name: {
				required: !0,
				type: {
					builtin: "token",
					facets: { enumeration: /* @__PURE__ */ "Associate.Abort.Release.GetServerDirectory.GetLogicalDeviceDirectory.GetAllDataValues.GetDataValues.SetDataValues.GetDataDirectory.GetDataDefinition.GetDataSetValues.SetDataSetValues.CreateDataSet.DeleteDataSet.GetDataSetDirectory.SelectActiveSG.SelectEditSG.SetEditSGValue.ConfirmEditSGValues.GetEditSGValue.GetSGCBValues.Report.GetBRCBValues.SetBRCBValues.GetURCBValues.SetURCBValues.GetLCBValues.SetLCBValues.QueryLogByTime.QueryLogAfter.GetLogStatusValues.SendGOOSEMessage.GetGoCBValues.SetGoCBValues.GetGoReference.GetGOOSEElementNumber.SendMSVMessage.GetMSVCBValues.SetMSVCBValues.SendUSVMessage.GetUSVCBValues.SetUSVCBValues.Select.SelectWithValue.Cancel.Operate.CommandTermination.TimeActivatedOperate.GetFile.SetFile.DeleteFile.GetFileAttributeValues.TimeSynchronization.InternalChange.GetLogicalNodeDirectory.GetMsvReference.GetMSVElementNumber.GetUsvReference.GetUSVElementNumber".split(".") }
				}
			} },
			identityFields: ["name"]
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	ServiceCDC: {
		tag: "ServiceCDC",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "CDC extensions for control in this service namespace.",
		parents: ["ServiceCDCs"],
		attributes: {
			sequence: ["cdc", "variant"],
			details: {
				cdc: {
					required: !0,
					type: {
						builtin: "Name",
						facets: {
							pattern: [["[\\u{0}-\\u{FF}]+"]],
							minLength: 1
						}
					}
				},
				variant: { type: { builtin: "token" } }
			},
			identityFields: ["cdc", "variant"]
		},
		children: {
			sequence: ["ServiceDataAttribute"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "ServiceDataAttribute",
				minOccurs: 1
			}]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueServiceCDCChild",
			namespace: "http://www.iec.ch/61850/2016/NSD",
			selector: [{ steps: [{
				name: "ServiceDataAttribute",
				namespace: "http://www.iec.ch/61850/2016/NSD"
			}] }],
			fields: [[{
				steps: [],
				attribute: {
					name: "name",
					namespace: ""
				}
			}]]
		}],
		type: "{http://www.iec.ch/61850/2016/NSD}tServiceCDC"
	},
	ServiceCDCs: {
		tag: "ServiceCDCs",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "List of service CDCs added by this namespace. Is cumulative to those defined in namespaces this one needs (may not redefine \"included\" ones.).",
		parents: ["ServiceNS"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: ["ServiceCDC"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "ServiceCDC"
			}]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueServiceCDC",
			namespace: "http://www.iec.ch/61850/2016/NSD",
			selector: [{ steps: [{
				name: "ServiceCDC",
				namespace: "http://www.iec.ch/61850/2016/NSD"
			}] }],
			fields: [[{
				steps: [],
				attribute: {
					name: "cdc",
					namespace: ""
				}
			}], [{
				steps: [],
				attribute: {
					name: "variant",
					namespace: ""
				}
			}]]
		}],
		type: "{http://www.iec.ch/61850/2016/NSD}tServiceCDCs"
	},
	ServiceConstructedAttribute: {
		tag: "ServiceConstructedAttribute",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Realization of Part 7-2 abstract types or constructed attributes needed for control services. Note: in SCL instance files, the ProtNs element shall be specified for these.",
		parents: ["ServiceConstructedAttributes"],
		attributes: {
			sequence: [
				"deprecated",
				"descID",
				"informative",
				"name",
				"titleID",
				"typeKindParameterized"
			],
			details: {
				deprecated: {
					default: "false",
					type: { builtin: "boolean" }
				},
				descID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				informative: {
					default: "false",
					type: { builtin: "boolean" }
				},
				name: {
					required: !0,
					type: {
						builtin: "Name",
						facets: {
							pattern: [["[\\u{0}-\\u{FF}]+"]],
							minLength: 1
						}
					}
				},
				titleID: {
					required: !0,
					type: {
						builtin: "normalizedString",
						facets: { minLength: 1 }
					}
				},
				typeKindParameterized: {
					default: "false",
					type: { builtin: "boolean" }
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: ["SubDataAttribute"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "sequence",
				minOccurs: 1,
				maxOccurs: 1,
				particles: [{
					kind: "element",
					name: "SubDataAttribute",
					minOccurs: 1
				}]
			}]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueSubDataAttribute_Service",
			namespace: "http://www.iec.ch/61850/2016/NSD",
			selector: [{ steps: [{
				name: "SubDataAttribute",
				namespace: "http://www.iec.ch/61850/2016/NSD"
			}] }],
			fields: [[{
				steps: [],
				attribute: {
					name: "name",
					namespace: ""
				}
			}]]
		}],
		type: "{http://www.iec.ch/61850/2016/NSD}tServiceConstructedAttribute"
	},
	ServiceConstructedAttributes: {
		tag: "ServiceConstructedAttributes",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "List of service constructed attributes added by this namespace. Is cumulative to those defined in namespaces this one needs (may not redefine \"included\" ones.).",
		parents: ["ServiceNS"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: ["ServiceConstructedAttribute"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "ServiceConstructedAttribute"
			}]
		},
		constraints: [{
			kind: "unique",
			name: "uniqueServiceConstructedAttribute",
			namespace: "http://www.iec.ch/61850/2016/NSD",
			selector: [{ steps: [{
				name: "ServiceConstructedAttribute",
				namespace: "http://www.iec.ch/61850/2016/NSD"
			}] }],
			fields: [[{
				steps: [],
				attribute: {
					name: "name",
					namespace: ""
				}
			}]]
		}],
		type: "{http://www.iec.ch/61850/2016/NSD}tServiceConstructedAttributes"
	},
	ServiceDataAttribute: {
		tag: "ServiceDataAttribute",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Data attribute to be used as service parameter.",
		parents: ["ServiceCDC"],
		attributes: {
			sequence: [
				"deprecated",
				"descID",
				"fc",
				"informative",
				"name",
				"presCond",
				"presCondArgs",
				"presCondArgsID",
				"type",
				"typeKind",
				"underlyingType",
				"underlyingTypeKind"
			],
			details: {
				deprecated: {
					default: "false",
					type: { builtin: "boolean" }
				},
				descID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				fc: {
					required: !0,
					type: {
						builtin: "token",
						facets: {
							pattern: [["[\\u{0}-\\u{7F}]+"]],
							minLength: 1
						}
					}
				},
				informative: {
					default: "false",
					type: { builtin: "boolean" }
				},
				name: {
					required: !0,
					type: {
						builtin: "Name",
						facets: {
							pattern: [["[\\u{0}-\\u{FF}]+"]],
							minLength: 1
						}
					}
				},
				presCond: {
					default: "M",
					type: { builtin: "normalizedString" }
				},
				presCondArgs: { type: { builtin: "normalizedString" } },
				presCondArgsID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				type: { type: {
					builtin: "Name",
					facets: {
						pattern: [["[\\u{0}-\\u{FF}]+"]],
						minLength: 1
					}
				} },
				typeKind: {
					default: "BASIC",
					type: { union: [{
						builtin: "token",
						facets: { enumeration: [
							"BASIC",
							"ENUMERATED",
							"CONSTRUCTED"
						] }
					}, {
						builtin: "token",
						facets: { enumeration: ["undefined"] }
					}] }
				},
				underlyingType: { type: {
					builtin: "Name",
					facets: {
						pattern: [["[\\u{0}-\\u{FF}]+"]],
						minLength: 1
					}
				} },
				underlyingTypeKind: { type: {
					builtin: "token",
					facets: { enumeration: [
						"BASIC",
						"ENUMERATED",
						"CONSTRUCTED"
					] }
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [],
			details: {}
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tServiceDataAttribute"
	},
	ServiceNS: {
		tag: "ServiceNS",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Root element of a service namespace definition (SNSD) file.",
		global: !0,
		parents: [],
		attributes: {
			sequence: [
				"descID",
				"id",
				"publicationStage",
				"release",
				"revision",
				"umlDate",
				"umlVersion",
				"version"
			],
			details: {
				descID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				id: {
					required: !0,
					type: {
						builtin: "normalizedString",
						facets: { pattern: [["[\\u{0}-\\u{7F}]+"]] }
					}
				},
				publicationStage: {
					default: "IS",
					type: {
						builtin: "token",
						facets: { enumeration: [
							"WD",
							"CD",
							"CDV",
							"DTS",
							"DTR",
							"FDIS",
							"TS",
							"TR",
							"IS"
						] }
					}
				},
				release: {
					default: "1",
					type: {
						builtin: "unsignedByte",
						facets: { minExclusive: "0" }
					}
				},
				revision: {
					default: "A",
					type: {
						builtin: "token",
						facets: { pattern: [["[A-Z]"]] }
					}
				},
				umlDate: { type: { builtin: "dateTime" } },
				umlVersion: { type: {
					builtin: "Name",
					facets: { minLength: 1 }
				} },
				version: {
					required: !0,
					type: {
						builtin: "unsignedShort",
						facets: {
							minInclusive: "2002",
							maxInclusive: "2099"
						}
					}
				}
			}
		},
		children: {
			sequence: [
				"Copyright",
				"Changes",
				"FunctionalConstraints",
				"PresenceConditions",
				"Abbreviations",
				"ServiceTypeRealizations",
				"ServiceConstructedAttributes",
				"ServiceCDCs"
			],
			details: {
				FunctionalConstraints: { declarations: { "http://www.iec.ch/61850/2016/NSD": ["2"] } },
				PresenceConditions: { declarations: { "http://www.iec.ch/61850/2016/NSD": ["2"] } },
				Abbreviations: { declarations: { "http://www.iec.ch/61850/2016/NSD": ["2"] } }
			}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "sequence",
				minOccurs: 1,
				maxOccurs: 1,
				particles: [{
					kind: "element",
					name: "Copyright",
					maxOccurs: 1
				}]
			}, {
				kind: "sequence",
				minOccurs: 1,
				maxOccurs: 1,
				particles: [
					{
						kind: "element",
						name: "Changes",
						maxOccurs: 1
					},
					{
						kind: "element",
						name: "FunctionalConstraints",
						maxOccurs: 1,
						declaration: "2"
					},
					{
						kind: "element",
						name: "PresenceConditions",
						maxOccurs: 1,
						declaration: "2"
					},
					{
						kind: "element",
						name: "Abbreviations",
						maxOccurs: 1,
						declaration: "2"
					},
					{
						kind: "element",
						name: "ServiceTypeRealizations",
						maxOccurs: 1
					},
					{
						kind: "element",
						name: "ServiceConstructedAttributes",
						maxOccurs: 1
					},
					{
						kind: "element",
						name: "ServiceCDCs",
						maxOccurs: 1
					}
				]
			}]
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tServiceNS"
	},
	ServiceNsUsage: {
		tag: "ServiceNsUsage",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Specification of a ServiceNS and all NS it can be used for.",
		parents: ["ApplicableServiceNS"],
		attributes: {
			sequence: [
				"id",
				"publicationStage",
				"release",
				"revision",
				"version"
			],
			details: {
				id: {
					required: !0,
					type: {
						builtin: "normalizedString",
						facets: { pattern: [["[\\u{0}-\\u{7F}]+"]] }
					}
				},
				publicationStage: {
					default: "IS",
					type: {
						builtin: "token",
						facets: { enumeration: [
							"WD",
							"CD",
							"CDV",
							"DTS",
							"DTR",
							"FDIS",
							"TS",
							"TR",
							"IS"
						] }
					}
				},
				release: {
					default: "1",
					type: {
						builtin: "unsignedByte",
						facets: { minExclusive: "0" }
					}
				},
				revision: {
					default: "A",
					type: {
						builtin: "token",
						facets: { pattern: [["[A-Z]"]] }
					}
				},
				version: {
					required: !0,
					type: {
						builtin: "unsignedShort",
						facets: {
							minInclusive: "2002",
							maxInclusive: "2099"
						}
					}
				}
			}
		},
		children: {
			sequence: ["AppliesTo"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "AppliesTo",
				minOccurs: 1
			}]
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tServiceNsUsage"
	},
	ServiceParameter: {
		tag: "ServiceParameter",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		parents: ["CDC"],
		attributes: {
			sequence: [
				"defaultValue",
				"deprecated",
				"descID",
				"informative",
				"maxValue",
				"minValue",
				"name",
				"type",
				"typeKind"
			],
			details: {
				defaultValue: { type: { builtin: "normalizedString" } },
				deprecated: {
					default: "false",
					type: { builtin: "boolean" }
				},
				descID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				informative: {
					default: "false",
					type: { builtin: "boolean" }
				},
				maxValue: { type: { builtin: "decimal" } },
				minValue: { type: { builtin: "decimal" } },
				name: {
					required: !0,
					type: {
						builtin: "Name",
						facets: {
							pattern: [["[\\u{0}-\\u{FF}]+"]],
							minLength: 1
						}
					}
				},
				type: { type: {
					builtin: "Name",
					facets: {
						pattern: [["[\\u{0}-\\u{FF}]+"]],
						minLength: 1
					}
				} },
				typeKind: {
					default: "BASIC",
					type: { union: [{
						builtin: "token",
						facets: { enumeration: [
							"BASIC",
							"ENUMERATED",
							"CONSTRUCTED"
						] }
					}, {
						builtin: "token",
						facets: { enumeration: ["undefined"] }
					}] }
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [],
			details: {}
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tServiceParameter"
	},
	ServiceTypeRealization: {
		tag: "ServiceTypeRealization",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Realization of an abstract type as constructed attribute in the service namespace.",
		parents: ["ServiceTypeRealizations"],
		attributes: {
			sequence: [
				"deprecated",
				"descID",
				"informative",
				"name",
				"titleID"
			],
			details: {
				deprecated: {
					default: "false",
					type: { builtin: "boolean" }
				},
				descID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				informative: {
					default: "false",
					type: { builtin: "boolean" }
				},
				name: {
					required: !0,
					type: {
						builtin: "Name",
						facets: {
							pattern: [["[\\u{0}-\\u{FF}]+"]],
							minLength: 1
						}
					}
				},
				titleID: {
					required: !0,
					type: {
						builtin: "normalizedString",
						facets: { minLength: 1 }
					}
				}
			}
		},
		children: {
			sequence: ["SubDataAttribute"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "SubDataAttribute",
				minOccurs: 1
			}]
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tConstructedAttribute",
		variants: ["{http://www.iec.ch/61850/2016/NSD}tServiceConstructedAttribute"]
	},
	ServiceTypeRealizations: {
		tag: "ServiceTypeRealizations",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "List of service type realization added by this namespace. Is cumulative to those defined in namespaces this one needs (may not redefine \"included\" ones.).",
		parents: ["ServiceNS"],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: ["ServiceTypeRealization"],
			details: {}
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "ServiceTypeRealization"
			}]
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tServiceTypeRealizations"
	},
	SubDataAttribute: {
		tag: "SubDataAttribute",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		parents: [
			"ConstructedAttribute",
			"ServiceConstructedAttribute",
			"ServiceTypeRealization"
		],
		attributes: {
			sequence: [
				"defaultValue",
				"deprecated",
				"descID",
				"informative",
				"isArray",
				"maxIndexAttribute",
				"maxValue",
				"minIndex",
				"minValue",
				"name",
				"presCond",
				"presCondArgs",
				"presCondArgsID",
				"sizeAttribute",
				"type",
				"typeKind"
			],
			details: {
				defaultValue: { type: { builtin: "normalizedString" } },
				deprecated: {
					default: "false",
					type: { builtin: "boolean" }
				},
				descID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				informative: {
					default: "false",
					type: { builtin: "boolean" }
				},
				isArray: {
					default: "false",
					type: { builtin: "boolean" }
				},
				maxIndexAttribute: { type: {
					builtin: "Name",
					facets: {
						pattern: [["[\\u{0}-\\u{FF}]+"]],
						minLength: 1
					}
				} },
				maxValue: { type: { builtin: "decimal" } },
				minIndex: {
					default: "0",
					type: { builtin: "unsignedInt" }
				},
				minValue: { type: { builtin: "decimal" } },
				name: {
					required: !0,
					type: {
						builtin: "Name",
						facets: {
							pattern: [["[\\u{0}-\\u{FF}]+"]],
							minLength: 1
						}
					}
				},
				presCond: {
					default: "M",
					type: { builtin: "normalizedString" }
				},
				presCondArgs: { type: { builtin: "normalizedString" } },
				presCondArgsID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				sizeAttribute: { type: {
					builtin: "Name",
					facets: {
						pattern: [["[\\u{0}-\\u{FF}]+"]],
						minLength: 1
					}
				} },
				type: { type: {
					builtin: "Name",
					facets: {
						pattern: [["[\\u{0}-\\u{FF}]+"]],
						minLength: 1
					}
				} },
				typeKind: {
					default: "BASIC",
					type: { union: [{
						builtin: "token",
						facets: { enumeration: [
							"BASIC",
							"ENUMERATED",
							"CONSTRUCTED"
						] }
					}, {
						builtin: "token",
						facets: { enumeration: ["undefined"] }
					}] }
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [],
			details: {}
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tSubDataAttribute"
	},
	SubDataObject: {
		tag: "SubDataObject",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		parents: ["CDC"],
		attributes: {
			sequence: [
				"deprecated",
				"descID",
				"informative",
				"isArray",
				"maxIndexAttribute",
				"minIndex",
				"name",
				"presCond",
				"presCondArgs",
				"presCondArgsID",
				"sizeAttribute",
				"type",
				"underlyingType",
				"underlyingTypeKind"
			],
			details: {
				deprecated: {
					default: "false",
					type: { builtin: "boolean" }
				},
				descID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				informative: {
					default: "false",
					type: { builtin: "boolean" }
				},
				isArray: {
					default: "false",
					type: { builtin: "boolean" }
				},
				maxIndexAttribute: { type: {
					builtin: "Name",
					facets: {
						pattern: [["[\\u{0}-\\u{FF}]+"]],
						minLength: 1
					}
				} },
				minIndex: {
					default: "0",
					type: { builtin: "unsignedInt" }
				},
				name: {
					required: !0,
					type: {
						builtin: "Name",
						facets: {
							pattern: [["[\\u{0}-\\u{FF}]+"]],
							minLength: 1
						}
					}
				},
				presCond: {
					default: "M",
					type: { builtin: "normalizedString" }
				},
				presCondArgs: { type: { builtin: "normalizedString" } },
				presCondArgsID: { type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				} },
				sizeAttribute: { type: {
					builtin: "Name",
					facets: {
						pattern: [["[\\u{0}-\\u{FF}]+"]],
						minLength: 1
					}
				} },
				type: {
					required: !0,
					type: {
						builtin: "Name",
						facets: {
							pattern: [["[\\u{0}-\\u{FF}]+"]],
							minLength: 1
						}
					}
				},
				underlyingType: { type: {
					builtin: "Name",
					facets: {
						pattern: [["[\\u{0}-\\u{FF}]+"]],
						minLength: 1
					}
				} },
				underlyingTypeKind: { type: {
					builtin: "token",
					facets: { enumeration: [
						"BASIC",
						"ENUMERATED",
						"CONSTRUCTED"
					] }
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [],
			details: {}
		},
		type: "{http://www.iec.ch/61850/2016/NSD}tSubDataObject"
	}
}, wu = { "{http://www.iec.ch/61850/2016/NSD}tServiceConstructedAttribute": {
	attributes: {
		sequence: [
			"deprecated",
			"descID",
			"informative",
			"name",
			"titleID",
			"typeKindParameterized"
		],
		details: {
			deprecated: {
				default: "false",
				type: { builtin: "boolean" }
			},
			descID: { type: {
				builtin: "normalizedString",
				facets: { minLength: 1 }
			} },
			informative: {
				default: "false",
				type: { builtin: "boolean" }
			},
			name: {
				required: !0,
				type: {
					builtin: "Name",
					facets: {
						pattern: [["[\\u{0}-\\u{FF}]+"]],
						minLength: 1
					}
				}
			},
			titleID: {
				required: !0,
				type: {
					builtin: "normalizedString",
					facets: { minLength: 1 }
				}
			},
			typeKindParameterized: {
				default: "false",
				type: { builtin: "boolean" }
			}
		}
	},
	children: {
		sequence: ["SubDataAttribute"],
		details: {}
	},
	contentModel: {
		kind: "sequence",
		minOccurs: 1,
		maxOccurs: 1,
		particles: [{
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "SubDataAttribute",
				minOccurs: 1
			}]
		}]
	}
} }, Tu = { supportedFileExtensions: [".nsd", ".nsdoc"] }, Eu = {
	singletonElements: xu,
	elements: gu,
	namespaces: {
		default: {
			uri: "http://www.iec.ch/61850/2016/NSD",
			prefix: ""
		},
		xsi: C
	},
	attributes: Su,
	children: _u,
	parents: vu,
	descendants: yu,
	ancestors: bu,
	database: { recordSchema: {
		primaryKey: "id",
		indexes: [
			"tagName",
			"parent.id",
			"parent.tagName"
		],
		compoundIndexes: [["id", "tagName"]],
		arrayIndexes: ["children.id", "children.tagName"]
	} },
	io: Tu,
	definition: Cu,
	types: wu
}, Du = /* @__PURE__ */ mu({ dialecte: ha({
	id: "nsd/v2017A",
	version: hu,
	configs: {
		nsd: {
			...Eu,
			rootElementName: "NS"
		},
		nsdoc: {
			...Eu,
			rootElementName: "NSDoc"
		}
	},
	defaultConfigKey: "nsd",
	extensions: {}
}) }), Ou = "SET-LIBRARY-NSD", ku = null;
function Au() {
	return ku ||= Du({ storage: k() }).open(Ou), ku;
}
var ju = l(0);
function Mu() {
	ju.value++;
}
//#endregion
//#region src/nsd/utils/query-nsd-metadata.ts
async function Nu(e) {
	let { query: t } = e, n = await t.getRoot(), r = await t.getAttribute(n, { name: "id" }), i = await t.getAttribute(n, { name: "version" }), a = await t.getAttribute(n, { name: "revision" }), o = await t.getAttribute(n, { name: "release" });
	if (!r || !i || !a) throw Error("Missing required NS attributes. Expected id, version, revision.");
	if (n.tagName === "NSDoc") return {
		id: r,
		version: i,
		revision: a,
		release: o ?? "",
		dependencies: [],
		isExtension: !1,
		isNsdoc: !0
	};
	let s = await t.getChildren(n, "DependsOn"), c = [];
	for (let e of s) {
		let n = await t.getAttribute(e, { name: "id" }), r = await t.getAttribute(e, { name: "version" }), i = await t.getAttribute(e, { name: "revision" }), a = await t.getAttribute(e, { name: "release" });
		!n || !r || !i || c.push({
			id: n,
			version: r,
			revision: i,
			release: a ?? ""
		});
	}
	let l = await t.getRecordsByTagName("LNClass"), u = !1;
	for (let e of l) if (await t.getAttribute(e, { name: "isExtension" }) === "true") {
		u = !0;
		break;
	}
	return {
		id: r,
		version: i,
		revision: a,
		release: o ?? "",
		dependencies: c,
		isExtension: u,
		isNsdoc: !1
	};
}
function Pu(e) {
	return e.replace(/__+/g, "-").replace(/[\s_]/g, "").toLowerCase();
}
function Fu(e) {
	let t = [
		e.version,
		e.revision?.toUpperCase(),
		e.release
	].filter((e) => !!e);
	return t.length ? t.join(".") : "-";
}
function Iu(e, t) {
	return {
		fileName: e,
		isExtension: t.isExtension,
		isNsdoc: t.isNsdoc,
		versionRevisionRelease: Fu(t)
	};
}
function Lu(e) {
	let t = e.id.replace(/\s+/g, "_");
	if (!e.version || !e.revision) return `${t}.nsd`;
	let n = e.revision.toUpperCase();
	return `${t}_${e.version}${n}${e.release}.nsd`;
}
//#endregion
export { Nu as a, Mu as c, Ce as d, ye as f, Pu as i, Tu as l, Fu as n, Au as o, Lu as r, ju as s, Iu as t, Ge as u };
