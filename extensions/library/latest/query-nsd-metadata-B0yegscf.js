import { $ as e, A as t, C as n, D as r, E as i, F as a, H as o, M as s, N as c, O as l, P as u, S as d, T as f, _ as p, a as m, c as h, d as g, f as _, g as v, h as y, j as b, lt as x, m as S, nt as C, o as ee, s as w, u as te, v as ne, w as T, x as re, xt as ie, y as ae } from "./main-CUQebmJM.js";
//#region src/nsd/icons/close-icon.vue
var E = {}, oe = {
	viewBox: "0 0 64 64",
	"aria-hidden": "true",
	focusable: "false"
};
function se(t, n) {
	return x(), C("svg", oe, [...n[0] ||= [e("path", {
		fill: "currentColor",
		d: "M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z"
	}, null, -1)]]);
}
var D = /* @__PURE__ */ o(E, [["render", se]]), ce = {}, O = {
	viewBox: "0 -960 960 960",
	"aria-hidden": "true",
	focusable: "false"
};
function le(t, n) {
	return x(), C("svg", O, [...n[0] ||= [e("path", {
		fill: "currentColor",
		d: "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
	}, null, -1)]]);
}
var ue = /* @__PURE__ */ o(ce, [["render", le]]);
function de(e, t) {
	return e.tagName === t;
}
function k(e) {
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
function fe(e) {
	let { record: t, status: n } = e, r = n ?? ("status" in t ? t.status : "unchanged");
	return {
		...k(t),
		status: r
	};
}
function pe(e) {
	let { record: t, status: n, tree: r } = e, i = r ?? ("tree" in t ? t.tree : []);
	return {
		...fe({
			record: t,
			status: n
		}),
		tree: i
	};
}
function me(e) {
	let { dialecteConfig: t, tagName: n, attributes: r, stored: i = [] } = e;
	return (Array.isArray(r) ? r : Object.entries(r).map(([e, r]) => ({
		name: e,
		value: r,
		namespace: A({
			dialecteConfig: t,
			tagName: n,
			name: e
		}) ?? i.find((t) => t.name === e)?.namespace
	}))).map((e) => he({
		attribute: e,
		dialecteConfig: t,
		tagName: n
	}));
}
function A(e) {
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
function he(e) {
	let { attribute: t, dialecteConfig: n, tagName: r } = e, i;
	typeof t.namespace == "string" ? (i = p(n, t.namespace), i || T("UNKNOWN_NAMESPACE_PREFIX", {
		detail: `Unknown namespace '${t.namespace}' on attribute '${t.name}' — use a registered namespace key or pass a full { name, namespace: { prefix, uri } }.`,
		ref: { tagName: r }
	})) : i = t.namespace;
	let a = t.name.indexOf(":");
	if (!i && a !== -1) {
		let e = t.name.slice(0, a);
		e !== "xmlns" && (i = h(n, e), i || T("UNKNOWN_NAMESPACE_PREFIX", {
			detail: `Unknown namespace prefix '${e}' on attribute '${t.name}' — pass it explicitly as { name, namespace: { prefix, uri } }.`,
			ref: { tagName: r }
		}));
	}
	return i && i.prefix && i.uri !== "http://www.w3.org/2000/xmlns/" && (i = j({
		dialecteConfig: n,
		uri: i.uri
	}) ?? i), i && i.prefix && i.prefix !== "xmlns" ? {
		...t,
		name: `${i.prefix}:${l(t.name)}`,
		namespace: i
	} : (t.namespace, {
		...t,
		namespace: i
	});
}
function j(e) {
	let { dialecteConfig: t, uri: n } = e;
	return Object.values(t.namespaces).find((e) => e.uri === n && e.prefix !== "");
}
function M(e) {
	return t(e, { detail: "The record or ref is undefined" }), {
		id: e.id,
		tagName: e.tagName
	};
}
function ge(e) {
	let { dialecteConfig: t, hooks: n, record: r } = e, { id: a, tagName: o, attributes: s, namespace: c, value: l } = r, u = a ?? crypto.randomUUID(), d = _e({
		dialecteConfig: t,
		attributes: s ? me({
			tagName: o,
			attributes: s,
			dialecteConfig: t
		}) : []
	}), f = {
		id: u,
		tagName: o,
		attributes: d,
		namespace: c ?? {
			prefix: "prefixNeededForNotSupportedNamespace",
			uri: "uriNeededForNotSupportedNamespace"
		},
		value: l ?? "",
		parent: r.parent ?? null,
		children: r.children ?? []
	}, p = Object.values(t.namespaces).map(({ uri: e }) => e), m = c?.uri != null && !p.includes(c.uri);
	if (!t.elements.includes(o) || m) return f;
	let h = g({
		dialecteConfig: t,
		record: {
			...f,
			namespace: c
		}
	}), _ = h?.attributes.sequence ?? [], v = w({
		wildcard: h?.attributes.any,
		namespaceUri: ""
	}), y = d.filter((e) => {
		let t = _.includes(e.name), n = "namespace" in e && e.namespace != null;
		if (!t && !n && !v) return !1;
		if (!t) return !0;
		if (e.value === void 0 || e.value === null) return !1;
		if (e.value !== "") return !0;
		let r = h?.attributes.details[e.name];
		return r?.default !== void 0 || r?.fixed !== void 0;
	}), b = t.namespaces.default.uri, x = y.map((e) => {
		if ("namespace" in e && e.namespace?.uri === b) {
			let { namespace: t, ...n } = e;
			return n;
		}
		return e;
	}), S = t.definition[o], C = [h?.namespace ?? S.namespace, ...Object.values(S.declarations ?? {}).map((e) => e.namespace)], ee = C.find((e) => e.uri === c?.uri), te = {
		...f,
		namespace: ee ?? c ?? C[0],
		attributes: i(x, _)
	};
	return n?.afterStandardizedRecord && (te = n.afterStandardizedRecord({ record: te }), te = {
		...te,
		attributes: i(_e({
			dialecteConfig: t,
			attributes: te.attributes
		}), _)
	}), te;
}
function _e(e) {
	let { dialecteConfig: t, attributes: n } = e;
	return ee({
		dialecteConfig: t,
		attributes: n,
		namespaceOf: s({
			dialecteConfig: t,
			attributes: n
		})
	});
}
function ve(e) {
	let { dialecteConfig: t, record: n, attributes: r } = e;
	for (let e of r) {
		let r = te({
			dialecteConfig: t,
			record: n,
			attributeName: e.name
		});
		r.fixed !== void 0 && e.value !== r.fixed && T("FIXED_VALUE_VIOLATION", {
			detail: `Attribute '${e.name}' on '${n.tagName}' is fixed to '${r.fixed}' but was set to '${String(e.value)}'.`,
			ref: { tagName: n.tagName }
		});
	}
}
function ye(e) {
	let { dialecteConfig: t, record: n } = e, r = n.attributes.find(c);
	if (r === void 0) {
		g({
			dialecteConfig: t,
			record: n
		})?.abstractType && T("XSI_TYPE_REQUIRED", {
			detail: `'${n.tagName}' is declared with an abstract type: name one of its variants with xsi:type (${re({
				dialecteConfig: t,
				record: n
			}).join(", ")}).`,
			ref: { tagName: n.tagName }
		});
		return;
	}
	if (g({
		dialecteConfig: t,
		record: n
	}) === void 0) return;
	let i = m({
		dialecteConfig: t,
		record: n
	});
	if (i?.namespace === "http://www.w3.org/2001/XMLSchema") return;
	let a = re({
		dialecteConfig: t,
		record: n
	});
	i !== void 0 && a.includes(i.clark) || T("XSI_TYPE_NOT_ADMITTED", {
		detail: `'${n.tagName}' may not name the type '${String(r.value)}' with xsi:type; it admits ${a.join(", ") || "none"}.`,
		ref: { tagName: n.tagName },
		meta: {
			value: r.value,
			admitted: a
		}
	});
}
function be(e) {
	let { dialecteConfig: t, merged: n, record: r } = e, i = new Set(r.attributes.map((e) => e.name)), a = n.filter((e) => e.value !== "" && !i.has(e.name)).map((e) => e.name), o = g({
		dialecteConfig: t,
		record: r
	}), s = new Set(o?.children.sequence ?? []), c = o?.children.any ? [] : [...new Set(r.children.map((e) => e.tagName))].filter((e) => !s.has(e));
	(a.length !== 0 || c.length !== 0) && T("XSI_TYPE_CHANGE_LEAVES_CONTENT", {
		detail: `'${r.tagName}' now names a type that does not admit ` + [a.length > 0 ? `the attributes ${a.join(", ")} (clear them in the same update)` : "", c.length > 0 ? `the children ${c.join(", ")} (delete them first)` : ""].filter(Boolean).join(" nor ") + ".",
		ref: { tagName: r.tagName },
		meta: {
			attributes: a,
			children: c
		}
	});
}
function xe(e, n, r, i) {
	if (!e || !n) return;
	let a = Object.keys(n).filter((t) => t in e);
	t(a.length === 0, {
		key: "EXTENSION_METHOD_COLLISION",
		detail: `Module "${r}" has conflicting ${i} method(s): ${a.map((e) => `"${e}"`).join(", ")}`
	});
}
function Se(e) {
	let t = {}, n = {}, r = [...Object.entries(e.base ?? {}), ...Object.entries(e.custom ?? {})];
	for (let [e, i] of r) i.query && (xe(t[e], i.query, e, "query"), t[e] = {
		...t[e],
		...i.query
	}), i.transaction && (xe(n[e], i.transaction, e, "transaction"), n[e] = {
		...n[e],
		...i.transaction
	});
	return {
		query: t,
		transaction: n
	};
}
function Ce(e) {
	let { record: t, dialecteConfig: n, name: r, namespace: i, fullObject: a, defaults: o = "optional" } = e, s = we({
		dialecteConfig: n,
		name: r,
		namespace: i
	}), c = t.attributes.find((e) => e.name === s);
	if (c) return a ? c : c.value;
	let l = v({
		dialecteConfig: n,
		record: t,
		attributeName: s,
		defaults: o
	});
	if (!a) return l ?? "";
	if (l === void 0) return;
	let { namespace: u } = te({
		dialecteConfig: n,
		record: t,
		attributeName: s
	});
	return {
		name: s,
		value: l,
		namespace: u
	};
}
function we(e) {
	let { dialecteConfig: t, name: n, namespace: r } = e;
	if (r === void 0) return n;
	let i = ae(t, r);
	return i ? `${i}:${n}` : n;
}
function Te(e) {
	return e.fullObject ? De(e) : Ee(e);
}
function Ee(e) {
	let { record: t, dialecteConfig: n, namespace: r, defaults: i = "optional" } = e, a = r === void 0 ? void 0 : ae(n, r), o = {};
	for (let e of t.attributes) {
		let t = ke({
			name: e.name,
			namespace: e.namespace,
			targetPrefix: a
		});
		t !== void 0 && (o[t] = e.value ?? "");
	}
	if (i === "none") return o;
	for (let e of Oe({
		dialecteConfig: n,
		record: t
	})) {
		let r = ke({
			name: e,
			targetPrefix: a
		});
		if (r === void 0 || r in o) continue;
		let s = v({
			dialecteConfig: n,
			record: t,
			attributeName: e,
			defaults: i
		});
		s !== void 0 && (o[r] = s);
	}
	return o;
}
function De(e) {
	let { record: t, dialecteConfig: n, defaults: r = "optional" } = e, i = [...t.attributes];
	if (r === "none") return i;
	let a = new Set(i.map((e) => e.name));
	for (let e of Oe({
		dialecteConfig: n,
		record: t
	})) {
		if (a.has(e)) continue;
		let o = v({
			dialecteConfig: n,
			record: t,
			attributeName: e,
			defaults: r
		});
		if (o === void 0) continue;
		let { namespace: s } = te({
			dialecteConfig: n,
			record: t,
			attributeName: e
		});
		i.push({
			name: e,
			value: o,
			namespace: s
		});
	}
	return i;
}
function Oe(e) {
	let { dialecteConfig: t, record: n } = e;
	return g({
		dialecteConfig: t,
		record: n
	})?.attributes.sequence ?? [];
}
function ke(e) {
	let { name: t, namespace: n, targetPrefix: r } = e, { prefix: i, local: a, isXmlns: o } = Ae(t);
	if (!(o || n?.uri === "http://www.w3.org/2000/xmlns/")) return r === void 0 ? t : i === r ? a : void 0;
}
function Ae(e) {
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
//#region node_modules/.pnpm/@dialecte+nsd@0.5.0/node_modules/@dialecte/nsd/dist/config-vsShZc7X.js
var je = /* @__PURE__ */ "Abbreviation.Abbreviations.AbstractLNClass.ApplicableServiceNS.ApplicableServices.AppliesTo.BasicType.BasicTypes.CDC.CDCs.Changes.ConstructedAttribute.ConstructedAttributes.Copyright.DataAttribute.DataObject.DataSetMemberOf.DependsOn.Doc.Enumeration.Enumerations.FunctionalConstraint.FunctionalConstraints.LNClass.LNClasses.License.Literal.NS.NSDoc.Notice.PresenceCondition.PresenceConditions.Service.ServiceCDC.ServiceCDCs.ServiceConstructedAttribute.ServiceConstructedAttributes.ServiceDataAttribute.ServiceNS.ServiceNsUsage.ServiceParameter.ServiceTypeRealization.ServiceTypeRealizations.SubDataAttribute.SubDataObject".split("."), Me = {
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
}, Ne = {
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
}, Pe = {
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
}, Fe = {
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
}, Ie = [
	"BasicTypes",
	"CDCs",
	"ConstructedAttributes",
	"DependsOn",
	"Enumerations",
	"LNClasses",
	"NS"
], N = {
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
}, P = {
	byTag: N,
	byParent: {
		Abbreviations: { Abbreviation: N.Abbreviation },
		AbstractLNClass: { DataObject: N.DataObject },
		ApplicableServiceNS: {
			Copyright: N.Copyright,
			ServiceNsUsage: N.ServiceNsUsage
		},
		ApplicableServices: {
			Service: N.Service,
			DataSetMemberOf: N.DataSetMemberOf
		},
		BasicTypes: { BasicType: N.BasicType },
		CDC: {
			SubDataObject: N.SubDataObject,
			DataAttribute: N.DataAttribute,
			ServiceParameter: N.ServiceParameter
		},
		CDCs: { CDC: N.CDC },
		ConstructedAttribute: { SubDataAttribute: N.SubDataAttribute },
		ConstructedAttributes: { ConstructedAttribute: N.ConstructedAttribute },
		Copyright: {
			Notice: N.Notice,
			License: N.License
		},
		Enumeration: { Literal: N.Literal },
		Enumerations: { Enumeration: N.Enumeration },
		FunctionalConstraint: { ApplicableServices: N.ApplicableServices },
		FunctionalConstraints: { FunctionalConstraint: N.FunctionalConstraint },
		LNClass: { DataObject: N.DataObject },
		LNClasses: {
			AbstractLNClass: N.AbstractLNClass,
			LNClass: N.LNClass
		},
		NS: {
			Copyright: N.Copyright,
			Changes: N.Changes,
			DependsOn: N.DependsOn,
			BasicTypes: N.BasicTypes,
			FunctionalConstraints: N.FunctionalConstraints,
			PresenceConditions: N.PresenceConditions,
			Abbreviations: N.Abbreviations,
			Enumerations: N.Enumerations,
			ConstructedAttributes: N.ConstructedAttributes,
			CDCs: N.CDCs,
			LNClasses: N.LNClasses
		},
		NSDoc: {
			Copyright: N.Copyright,
			Doc: N.Doc
		},
		PresenceConditions: { PresenceCondition: N.PresenceCondition },
		ServiceCDC: { ServiceDataAttribute: N.ServiceDataAttribute },
		ServiceCDCs: { ServiceCDC: N.ServiceCDC },
		ServiceConstructedAttribute: { SubDataAttribute: N.SubDataAttribute },
		ServiceConstructedAttributes: { ServiceConstructedAttribute: N.ServiceConstructedAttribute },
		ServiceNS: {
			Copyright: N.Copyright,
			Changes: N.Changes,
			FunctionalConstraints: N.FunctionalConstraints,
			PresenceConditions: N.PresenceConditions,
			Abbreviations: N.Abbreviations,
			ServiceTypeRealizations: N.ServiceTypeRealizations,
			ServiceConstructedAttributes: N.ServiceConstructedAttributes,
			ServiceCDCs: N.ServiceCDCs
		},
		ServiceNsUsage: { AppliesTo: N.AppliesTo },
		ServiceTypeRealization: { SubDataAttribute: N.SubDataAttribute },
		ServiceTypeRealizations: { ServiceTypeRealization: N.ServiceTypeRealization }
	}
}, Le = {
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
}, Re = { "{http://www.iec.ch/61850/2016/NSD}tServiceConstructedAttribute": {
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
} }, ze = { supportedFileExtensions: [".nsd", ".nsdoc"] }, F = {
	singletonElements: Ie,
	elements: je,
	namespaces: {
		default: {
			uri: "http://www.iec.ch/61850/2016/NSD",
			prefix: ""
		},
		xsi: u
	},
	attributes: P,
	children: Me,
	parents: Ne,
	descendants: Pe,
	ancestors: Fe,
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
	io: ze,
	definition: Le,
	types: Re
}, Be = {
	...F,
	rootElementName: "NS"
}, Ve = {
	...F,
	rootElementName: "NSDoc"
}, He = {}, Ue = Object.create, We = Object.defineProperty, Ge = Object.getOwnPropertyDescriptor, Ke = Object.getOwnPropertyNames, qe = Object.getPrototypeOf, Je = Object.prototype.hasOwnProperty, Ye = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), Xe = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = Ke(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !Je.call(e, s) && s !== n && We(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = Ge(t, s)) || r.enumerable
	});
	return e;
}, I = (e, t, n) => (n = e == null ? {} : Ue(qe(e)), Xe(t || !e || !e.__esModule || !Je.call(e, "default") ? We(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), L = [
	"",
	".",
	".."
], R = "_documents", z = "_changeLog", B = "_meta", Ze = "xel_";
function Qe(e) {
	return `${Ze}${e}`;
}
var V = "_blobs", $e = "blob_";
function H(e) {
	return `${$e}${e}`;
}
var et = {
	primaryKey: "id",
	indexes: ["name", "configKey"],
	compoundIndexes: [],
	arrayIndexes: []
}, tt = {
	primaryKey: "id",
	autoIncrement: !0,
	indexes: ["documentId"],
	compoundIndexes: [["documentId", "sequenceNumber"]],
	arrayIndexes: []
}, nt = {
	primaryKey: "key",
	indexes: [],
	compoundIndexes: [],
	arrayIndexes: []
}, rt = {
	primaryKey: "id",
	indexes: ["documentId"],
	compoundIndexes: [],
	arrayIndexes: []
}, it = {
	primaryKey: "id",
	indexes: [],
	compoundIndexes: [],
	arrayIndexes: []
};
function at(e) {
	let { project: t, dialecteId: n } = e;
	(L.includes(t) || n !== void 0 && L.includes(n)) && T("PROJECT_NAME_INVALID", {
		detail: `A project cannot be named ${JSON.stringify(t)}${n === void 0 ? "" : ` in dialecte ${JSON.stringify(n)}`}: neither its name nor its dialecte's id may be empty, \`.\` or \`..\``,
		meta: {
			project: t,
			...n !== void 0 && { dialecteId: n }
		}
	});
}
var ot = {
	bigint: "a BigInt",
	function: "a function",
	symbol: "a symbol"
}, U = "not well-formed UTF-16 (a lone surrogate)", st = `text that is ${U}`, ct = `a key that is ${U}`;
function lt(e) {
	let { documentId: t } = e;
	T("STORE_DUPLICATE_ID", {
		detail: `Document "${t}" is already registered`,
		meta: { documentId: t }
	});
}
function ut(e) {
	let { path: t, reason: n } = e;
	T("DOCUMENT_PATH_INVALID", {
		detail: `The document path ${JSON.stringify(t)} is refused: ${n}`,
		meta: { path: t }
	});
}
function dt(e) {
	let { documentId: t, path: n, takenBy: r } = e;
	T("DOCUMENT_PATH_TAKEN", {
		detail: `Document "${t}" cannot take the path "${n}": document "${r}" holds that place`,
		meta: {
			documentId: t,
			path: n,
			takenBy: r
		}
	});
}
function ft(e) {
	let { documentId: t, what: n } = e;
	T("DOCUMENT_NOT_REGISTERED", {
		detail: `Cannot write ${n} to document "${t}": it is not registered`,
		meta: { documentId: t }
	});
}
function pt(e) {
	let { documentId: t, recordId: n } = e;
	T("STORE_RECORD_NOT_FOUND", {
		detail: `Record "${n}" is not in document "${t}": nothing to update`,
		meta: {
			documentId: t,
			recordId: n
		}
	});
}
function mt(e) {
	let { documentId: t, held: n, repeated: r, cause: i } = e;
	T("STORE_DUPLICATE_ID", {
		detail: `Document "${t}" refuses ids to create - ${[n.length > 0 ? `already holds: ${ht(n).join(", ")}` : void 0, r.length > 0 ? `given twice: ${ht(r).join(", ")}` : void 0].filter((e) => e !== void 0).join("; ")}`,
		meta: {
			documentId: t,
			recordIds: ht([...n, ...r])
		},
		cause: i
	});
}
function ht(e) {
	return [...new Set(e)];
}
function gt(e) {
	let { storeName: t, connections: n } = e;
	T("PROJECT_OPEN_ELSEWHERE", {
		detail: `Project "${t}" cannot be destroyed while another connection has it open: close that one first`,
		meta: {
			project: t,
			...n !== void 0 && { connections: n }
		}
	});
}
function W(e) {
	let { storeName: t } = e;
	T("STORE_CLOSED", {
		detail: `Store "${t}" is closed: open it again before using it`,
		meta: { storeName: t }
	});
}
function _t(e) {
	yt({ walk: function() {
		bt({
			value: e.value,
			field: "",
			inArray: !1,
			ancestors: []
		});
	} });
}
function vt(e) {
	_t({ value: { writeId: e.writeId } });
}
function G(e) {
	return yt({ walk: function() {
		return xt({
			value: e.value,
			field: "",
			inArray: !1,
			ancestors: []
		});
	} });
}
function yt(e) {
	try {
		return e.walk();
	} catch (e) {
		let t = e instanceof Error ? e : void 0;
		T("STORE_VALUE_NOT_JSON", {
			detail: t?.message ?? String(e),
			cause: t
		});
	}
}
function bt(e) {
	let t = Tt(e);
	if (t === "leaf") return;
	let { ancestors: n } = e;
	if (n.push(e.value), t === "array") {
		let t = e.value, { length: r } = t;
		for (let e = 0; e < r; e++) {
			let r = t[e];
			wt({ value: r }) || bt({
				value: r,
				field: e,
				inArray: !0,
				ancestors: n
			});
		}
	} else {
		let t = e.value;
		for (let r of Object.keys(t)) {
			r.isWellFormed() || q({
				step: e,
				kind: ct
			});
			let i = t[r];
			wt({ value: i }) || bt({
				value: i,
				field: r,
				inArray: !1,
				ancestors: n
			});
		}
	}
	n.pop();
}
function xt(e) {
	let t = Tt(e);
	if (t === "leaf") return Ct({ value: e.value });
	let { ancestors: n } = e;
	n.push(e.value);
	let r = t === "array" ? St(e) : K(e);
	return n.pop(), r;
}
function St(e) {
	let { ancestors: t } = e, n = e.value, r = [], { length: i } = n;
	for (let e = 0; e < i; e++) {
		let i = n[e];
		r.push(wt({ value: i }) ? Ct({ value: i }) : xt({
			value: i,
			field: e,
			inArray: !0,
			ancestors: t
		}));
	}
	return r;
}
function K(e) {
	let { ancestors: t } = e, n = e.value, r = {};
	for (let i of Object.keys(n)) {
		i.isWellFormed() || q({
			step: e,
			kind: ct
		});
		let a = n[i], o = wt({ value: a }) ? Ct({ value: a }) : xt({
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
function Ct(e) {
	return e.value === 0 ? 0 : e.value;
}
function wt(e) {
	let { value: t } = e;
	switch (typeof t) {
		case "string": return t.isWellFormed();
		case "boolean": return !0;
		case "number": return Number.isFinite(t);
		case "object": return t === null;
		default: return !1;
	}
}
function Tt(e) {
	let { value: t } = e, n = typeof t;
	switch (n) {
		case "string": return t.isWellFormed() ? "leaf" : q({
			step: e,
			kind: st
		});
		case "boolean": return "leaf";
		case "number": return Number.isFinite(t) ? "leaf" : q({
			step: e,
			kind: String(t)
		});
		case "undefined": return t === void 0 ? e.inArray ? q({
			step: e,
			kind: "undefined in an array"
		}) : "leaf" : Et({
			step: e,
			held: t
		});
		case "object": return t === null ? "leaf" : Et({
			step: e,
			held: t
		});
		default: return q({
			step: e,
			kind: ot[n]
		});
	}
}
function Et(e) {
	let { step: t, held: n } = e, r = Array.isArray(n), i = Object.getPrototypeOf(n);
	return Dt({
		prototype: i,
		name: r ? "Array" : "Object"
	}) || q({
		step: t,
		kind: `an instance of ${n.constructor?.name || "a class"}`
	}), i === null && JSON.isRawJSON?.(n) && q({
		step: t,
		kind: "a raw JSON value"
	}), typeof n.toJSON == "function" && q({
		step: t,
		kind: "a value with toJSON"
	}), t.ancestors.includes(n) && q({
		step: t,
		kind: "a cycle"
	}), t.ancestors.length >= 512 && q({
		step: t,
		kind: "a value nested more than 512 levels deep"
	}), r ? "array" : "object";
}
function Dt(e) {
	let { prototype: t, name: n } = e;
	if (t === (n === "Array" ? Array.prototype : Object.prototype)) return !0;
	if (t === null) return n === "Object";
	let r = Object.getOwnPropertyDescriptor(t, "constructor")?.value;
	return typeof r == "function" && r.name === n;
}
function q(e) {
	let t = String(e.step.field);
	throw TypeError(`${e.kind} is not a JSON value${t ? ` (field "${t}")` : ""}`);
}
var Ot = /* @__PURE__ */ new WeakSet();
function kt(e) {
	let { listener: t, value: n, of: r, call: i } = e;
	if (t) try {
		let e = t(n);
		J(e) && Promise.resolve(e).catch(function(e) {
			jt({
				call: i,
				of: r,
				thrown: e
			});
		});
	} catch (e) {
		jt({
			call: i,
			of: r,
			thrown: e
		});
	}
}
function At(e) {
	return `the changes of project "${e.name}"`;
}
function jt(e) {
	let { call: t } = e;
	if (t !== void 0) {
		if (Ot.has(t)) return;
		Ot.add(t);
	}
	console.error(`[dialecte] a listener of ${e.of} threw; what told it goes on:`, e.thrown);
}
function J(e) {
	return typeof e == "object" && !!e && typeof e.then == "function";
}
var Mt = {
	importProgress: "an import's progress",
	exportProgress: "an export's progress",
	commitProgress: "a commit's progress",
	callProgress: "a call's progress",
	engineChanges: "a project engine's changes"
}, Nt = Object.freeze({
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
}), Pt = "dialecte::";
function Y({ enabled: e, timeline: t = !0 }) {
	if (!e) return Nt;
	let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = [], o = 0;
	function s(e) {
		t ? performance.measure(Pt + e.name, {
			start: e.startTime,
			duration: e.duration
		}) : a.push(e);
	}
	function c() {
		return t ? performance.getEntriesByType("measure").filter((e) => e.name.startsWith(Pt)).map((e) => ({
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
			let r = Pt + e, i = `${r}:${++o}`;
			t && performance.mark(i), (n.get(r) ?? n.set(r, []).get(r)).push({
				mark: i,
				startTime: performance.now()
			});
		},
		stop(e) {
			let r = Pt + e, i = n.get(r)?.pop();
			i && (t ? (performance.measure(r, i.mark), performance.clearMarks(i.mark)) : a.push({
				name: e,
				startTime: i.startTime,
				duration: performance.now() - i.startTime
			}));
		},
		count(e) {
			let t = Pt + e;
			r.set(t, (r.get(t) ?? 0) + 1);
		},
		time(e, t) {
			let n = Pt + e, r = performance.now();
			try {
				return t();
			} finally {
				l(n, 1, performance.now() - r);
			}
		},
		profile(e, t) {
			return typeof console.profile == "function" ? (console.profile(Pt + e), Promise.resolve(t()).finally(() => console.profileEnd(Pt + e))) : t();
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
				let e = `${Pt}${t}::${n}`;
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
function Ft(e) {
	let { configs: n, defaultConfigKey: r, configKey: i = r } = e, a = n[i];
	return t(a, {
		key: "UNKNOWN_CONFIG_KEY",
		detail: `Unknown configKey: "${i}". Available: ${Object.keys(n).join(", ")}`
	}), {
		configKey: i,
		config: a
	};
}
function It() {
	return new Promise(function(e) {
		let t = new MessageChannel();
		t.port1.onmessage = function() {
			t.port1.close(), e();
		}, t.port2.postMessage(null);
	});
}
function Lt(e) {
	let { record: t, config: n } = e;
	return t.tagName === n.rootElementName && t.parent === null;
}
var Rt = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>", zt = "    ", X = /[&<>"\t\n\r]/, Bt = /[&<>"\t\n\r]/g, Vt = /[&<>]/, Ht = /[&<>]/g, Ut = /[&<>\r]/, Wt = /[&<>\r]/g, Gt = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"	": "&#9;",
	"\n": "&#10;",
	"\r": "&#13;"
}, Kt = {
	bindings: /* @__PURE__ */ new Map(),
	parent: void 0
}, qt = /* @__PURE__ */ new Set();
function Jt(e) {
	let { namespaceURI: t, qualifiedName: n, parent: r } = e;
	if (t === null) return {
		namespaceURI: t,
		prefix: null,
		localName: n,
		attributes: [],
		parent: r
	};
	let { prefix: i, localName: a } = dn(n);
	return {
		namespaceURI: t,
		prefix: i,
		localName: a,
		attributes: [],
		parent: r
	};
}
function Yt(e) {
	let { element: t, qualifiedName: n, value: r } = e, i = t.attributes.find((e) => fn(e) === n);
	i ? i.value = r : t.attributes.push({
		namespaceURI: null,
		prefix: null,
		localName: n,
		value: r
	});
}
function Xt(e) {
	let { element: t, namespaceURI: n, qualifiedName: r, value: i } = e, { prefix: a, localName: o } = dn(r), s = pn({
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
function Zt(e) {
	let { element: t, qualifiedName: n } = e;
	return t.attributes.some((e) => fn(e) === n);
}
function Qt(e) {
	return pn(e)?.value ?? null;
}
function $t(e) {
	return pn(e) !== void 0;
}
function en(e) {
	let { prefix: t } = e;
	for (let n = e.element; n; n = n.parent) {
		if (n.namespaceURI !== null && n.prefix === t) return n.namespaceURI;
		let e = n.attributes.find((e) => mn({
			attribute: e,
			prefix: t
		}));
		if (e) return e.value || null;
	}
	return null;
}
function tn(e) {
	let { namespaceURI: t } = e;
	if (!t) return null;
	for (let n = e.element; n; n = n.parent) {
		if (n.namespaceURI === t && n.prefix !== null) return n.prefix;
		let e = n.attributes.find((e) => e.namespaceURI === "http://www.w3.org/2000/xmlns/" && e.prefix === "xmlns" && e.value === t);
		if (e) return e.localName;
	}
	return null;
}
function nn(e) {
	let { element: t, prefixes: n } = e, r, i = e.scope, a;
	for (let e of t.attributes) {
		let t = hn(e);
		t !== void 0 && _n({
			parent: i,
			own: a,
			prefix: t
		}) !== e.value && (a ??= /* @__PURE__ */ new Map(), a.set(t, e.value));
	}
	let o = `<${fn(t)}`, s = t.prefix ?? "", c = t.namespaceURI ?? "", l = _n({
		parent: i,
		own: a,
		prefix: ""
	});
	(t.namespaceURI !== null || l) && (_n({
		parent: i,
		own: a,
		prefix: s
	}) ?? "") !== c && (o += s ? ` xmlns:${s}="${sn(c)}"` : ` xmlns="${sn(c)}"`, a ??= /* @__PURE__ */ new Map(), a.set(s, c));
	for (let e of t.attributes) {
		let { namespaceURI: t } = e;
		if (t === null || t === "http://www.w3.org/2000/xmlns/" || t === "http://www.w3.org/XML/1998/namespace" || e.prefix === null) {
			o += ` ${fn(e)}="${sn(e.value)}"`;
			continue;
		}
		let { prefix: s, declare: c } = rn({
			attribute: e,
			parent: i,
			own: a,
			prefixes: n
		});
		c && (o += ` xmlns:${s}="${sn(t)}"`, a ??= /* @__PURE__ */ new Map(), a.set(s, t), r ??= /* @__PURE__ */ new Set(), r.add(s)), o += ` ${s}:${e.localName}="${sn(e.value)}"`;
	}
	return {
		text: o,
		scope: a ? {
			bindings: a,
			parent: i
		} : i,
		generated: r ?? qt
	};
}
function rn(e) {
	let { attribute: t, parent: n, own: r, prefixes: i } = e, a = t.namespaceURI, o = t.prefix, s = _n({
		parent: n,
		own: r,
		prefix: o
	});
	if (s === a) return {
		prefix: o,
		declare: !1
	};
	let c = an({
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
		if (i.next++, _n({
			parent: n,
			own: r,
			prefix: e
		}) === void 0) return {
			prefix: e,
			declare: !0
		};
	}
}
function an(e) {
	let { parent: t, own: n, namespaceURI: r } = e, i = /* @__PURE__ */ new Set(), a = [n, ...on(t)];
	for (let e of a) if (e) {
		for (let [t, n] of [...e].reverse()) if (!i.has(t) && (i.add(t), t && n === r)) return t;
	}
}
function on(e) {
	let t = [];
	for (let n = e; n; n = n.parent) t.push(n.bindings);
	return t;
}
function sn(e) {
	return X.test(e) ? e.replace(Bt, un) : e;
}
function cn(e) {
	return Ut.test(e) ? e.replace(Wt, un) : e;
}
function ln(e) {
	return Vt.test(e) ? e.replace(Ht, un) : e;
}
function un(e) {
	return Gt[e];
}
function dn(e) {
	let t = e.indexOf(":");
	return t === -1 ? {
		prefix: null,
		localName: e
	} : {
		prefix: e.slice(0, t),
		localName: e.slice(t + 1)
	};
}
function fn(e) {
	return e.prefix ? `${e.prefix}:${e.localName}` : e.localName;
}
function pn(e) {
	let { element: t, namespaceURI: n, localName: r } = e;
	return t.attributes.find((e) => e.namespaceURI === n && e.localName === r);
}
function mn(e) {
	let { attribute: t, prefix: n } = e;
	return t.namespaceURI === "http://www.w3.org/2000/xmlns/" ? n === null ? t.prefix === null && t.localName === "xmlns" : t.prefix === "xmlns" && t.localName === n : !1;
}
function hn(e) {
	if (e.namespaceURI === "http://www.w3.org/2000/xmlns/") return e.prefix === "xmlns" ? e.localName : "";
	if (e.namespaceURI === null && e.localName === "xmlns") return "";
}
function gn(e) {
	let { prefix: t } = e;
	for (let n = e.scope; n; n = n.parent) {
		let e = n.bindings.get(t);
		if (e !== void 0) return e;
	}
}
function _n(e) {
	let { parent: t, own: n, prefix: r } = e;
	return n?.get(r) ?? gn({
		scope: t,
		prefix: r
	});
}
function vn(e) {
	let { context: t, record: n, parent: r } = e;
	return r === void 0 ? yn({
		context: t,
		record: n
	}) : bn({
		context: t,
		record: n,
		parent: r
	});
}
function yn(e) {
	let { context: t, record: n } = e, { config: r, declareNamespaces: i, withDatabaseIds: a } = t, o = xn({
		context: t,
		record: n,
		parent: void 0
	});
	return t.rootElement = o, i && Yt({
		element: o,
		qualifiedName: "xmlns",
		value: n.namespace.uri
	}), Sn({
		context: t,
		element: o,
		attributes: n.attributes,
		isRoot: !0
	}), t.documentRoot && wn({
		config: r,
		element: o,
		namespace: n.namespace,
		rootRecord: t.documentRoot
	}), a && Yt({
		element: o,
		qualifiedName: "_temp-idb-id",
		value: n.id
	}), i && Tn({
		context: t,
		element: o,
		record: n
	}), o;
}
function bn(e) {
	let { context: t, record: n, parent: r } = e, { config: i, declareNamespaces: a, withDatabaseIds: o } = t, s = n.namespace.uri === i.namespaces.default.uri, c = xn({
		context: t,
		record: n,
		parent: r
	});
	return a && !s && n.namespace.prefix && n.namespace.prefix !== "xmlns" && Z({
		context: t,
		namespace: n.namespace
	}), Sn({
		context: t,
		element: c,
		attributes: n.attributes,
		isRoot: !1
	}), a && Cn({
		context: t,
		element: c,
		record: n
	}), o && Yt({
		element: c,
		qualifiedName: "_temp-idb-id",
		value: n.id
	}), a && Tn({
		context: t,
		element: c,
		record: n
	}), c;
}
function xn(e) {
	let { context: t, record: n, parent: r } = e, i = n.namespace.uri !== t.config.namespaces.default.uri && n.namespace.prefix && n.namespace.prefix !== "xmlns" ? `${n.namespace.prefix}:${n.tagName}` : n.tagName;
	return Jt({
		namespaceURI: t.declareNamespaces ? n.namespace.uri : null,
		qualifiedName: i,
		parent: r
	});
}
function Sn(e) {
	let { context: t, element: n, attributes: r, isRoot: i } = e;
	for (let e of r) {
		if (On(e)) continue;
		let r = String(e.value);
		if (!Dn(e) || !e.namespace.prefix) {
			Yt({
				element: n,
				qualifiedName: e.name,
				value: r
			});
			continue;
		}
		let a = `${e.namespace.prefix}:${l(e.name)}`;
		t.declareNamespaces ? (i || Z({
			context: t,
			namespace: e.namespace
		}), Xt({
			element: n,
			namespaceURI: e.namespace.uri,
			qualifiedName: a,
			value: r
		})) : Yt({
			element: n,
			qualifiedName: a,
			value: r
		});
	}
}
function Cn(e) {
	let { context: t, element: n, record: r } = e, { config: i } = t, a = g({
		dialecteConfig: i,
		record: r
	})?.attributes.details;
	if (a) for (let [e, o] of Object.entries(a)) {
		let a = v({
			dialecteConfig: i,
			record: r,
			attributeName: e,
			defaults: "required"
		});
		if (a === void 0) continue;
		let s = l(e);
		(o.namespace ? $t({
			element: n,
			namespaceURI: o.namespace.uri,
			localName: s
		}) : Zt({
			element: n,
			qualifiedName: s
		})) || (o.namespace && o.namespace.prefix && o.namespace.prefix !== "xmlns" ? (Z({
			context: t,
			namespace: o.namespace
		}), Xt({
			element: n,
			namespaceURI: o.namespace.uri,
			qualifiedName: `${o.namespace.prefix}:${s}`,
			value: a
		})) : Yt({
			element: n,
			qualifiedName: s,
			value: a
		}));
	}
}
function Z(e) {
	let { context: t, namespace: n } = e, r = t.rootElement;
	r && n.prefix && n.prefix !== "xmlns" && Qt({
		element: r,
		namespaceURI: "http://www.w3.org/2000/xmlns/",
		localName: n.prefix
	}) === null && (Xt({
		element: r,
		namespaceURI: "http://www.w3.org/2000/xmlns/",
		qualifiedName: `xmlns:${n.prefix}`,
		value: n.uri
	}), t.documentRoot && wn({
		config: t.config,
		element: r,
		namespace: n,
		rootRecord: t.documentRoot
	}));
}
function wn(e) {
	let { config: t, element: n, namespace: r, rootRecord: i } = e, a = g({
		dialecteConfig: t,
		record: i
	})?.attributes.details ?? {}, o = r.uri === t.namespaces.default.uri;
	for (let [e, s] of Object.entries(a)) {
		let a = v({
			dialecteConfig: t,
			record: i,
			attributeName: e,
			defaults: "required"
		});
		if (a === void 0 || !(o ? !s.namespace : s.namespace?.prefix === r.prefix && s.namespace?.uri === r.uri)) continue;
		let c = l(e);
		(s.namespace ? $t({
			element: n,
			namespaceURI: s.namespace.uri,
			localName: c
		}) : Zt({
			element: n,
			qualifiedName: c
		})) || (s.namespace ? Xt({
			element: n,
			namespaceURI: s.namespace.uri,
			qualifiedName: `${s.namespace.prefix}:${c}`,
			value: a
		}) : Yt({
			element: n,
			qualifiedName: c,
			value: a
		}));
	}
}
function Tn(e) {
	let { context: t, element: n, record: r } = e, { config: i } = t, a = Qt({
		element: n,
		namespaceURI: u.uri,
		localName: "type"
	});
	if (a === null) return;
	let o = S({
		value: a,
		namespaceOf: s({
			dialecteConfig: i,
			attributes: r.attributes
		})
	});
	if (o === void 0 || o.namespace === "") return;
	let c = a.indexOf(":"), l = c === -1 ? "" : a.slice(0, c), d = Object.values(i.namespaces).some((e) => e.prefix === l && e.uri === o.namespace);
	if (l && d && Z({
		context: t,
		namespace: {
			prefix: l,
			uri: o.namespace
		}
	}), en({
		element: n,
		prefix: l || null
	}) === o.namespace) return;
	let f = tn({
		element: n,
		namespaceURI: o.namespace
	}), p = f !== null && en({
		element: n,
		prefix: f
	}) === o.namespace ? f : null, m = p ?? En({ element: n });
	p === null && Xt({
		element: n,
		namespaceURI: "http://www.w3.org/2000/xmlns/",
		qualifiedName: `xmlns:${m}`,
		value: o.namespace
	});
	let h = tn({
		element: n,
		namespaceURI: u.uri
	}) ?? "xsi";
	Xt({
		element: n,
		namespaceURI: u.uri,
		qualifiedName: `${h}:type`,
		value: `${m}:${o.local}`
	});
}
function En(e) {
	let { element: t } = e;
	for (let e = 1;; e++) {
		let n = `ns${e}`;
		if (en({
			element: t,
			prefix: n
		}) === null) return n;
	}
}
function Dn(e) {
	return !!e.namespace;
}
function On(e) {
	return e.name === "xmlns" || e.name.startsWith("xmlns:") ? !0 : e.namespace?.prefix === "xmlns";
}
function kn(e) {
	let t = a.exec(e.text);
	if (t) return `U+${t[0].charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`;
}
function An(e) {
	let { record: t, withId: n = !1 } = e, r = jn({ record: t }) ?? Mn({
		record: t,
		withId: n
	});
	if (!r) return;
	let { character: i, attribute: a, part: o } = r;
	T("XML_CHARACTER_NOT_ALLOWED", {
		detail: `${Nn({
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
function jn(e) {
	let { record: t } = e, n = t.value === void 0 ? void 0 : Pn({
		text: t.value,
		part: "value"
	});
	if (n) return n;
	let r = t.namespace && Pn({
		text: t.namespace.uri,
		part: "namespace"
	});
	if (r) return r;
	for (let e of t.attributes ?? []) {
		let t = Pn({
			text: e.value,
			part: "value",
			attribute: e.name
		}) ?? (e.namespace && Pn({
			text: e.namespace.uri,
			part: "namespace",
			attribute: e.name
		}));
		if (t) return t;
	}
}
function Mn(e) {
	let { record: t, withId: n } = e, r = t.tagName === void 0 ? void 0 : Pn({
		text: t.tagName,
		part: "name"
	});
	if (r) return r;
	let i = t.namespace && Pn({
		text: t.namespace.prefix,
		part: "prefix"
	});
	if (i) return i;
	for (let e of t.attributes ?? []) {
		let t = e.namespace && Pn({
			text: e.namespace.prefix,
			part: "prefix",
			attribute: e.name
		}) || Pn({
			text: e.name,
			part: "name",
			attribute: e.name
		});
		if (t) return t;
	}
	return n ? Pn({
		text: t.id,
		part: "id"
	}) : void 0;
}
function Nn(e) {
	let { place: t, element: n } = e, { part: r, attribute: i } = t;
	return i ? r === "value" ? `The attribute ${i} of ${n}` : r === "name" ? `The name of the attribute ${i} of ${n}` : `The ${r === "prefix" ? "namespace prefix" : "namespace URI"} of the attribute ${i} of ${n}` : r === "name" ? `The tag name of ${n}` : r === "prefix" ? `The namespace prefix of ${n}` : r === "namespace" ? `The namespace URI of ${n}` : r === "id" ? `The id of ${n}` : `The value of ${n}`;
}
function Pn(e) {
	let { text: t, part: n, attribute: r } = e, i = kn({ text: t });
	if (i) return {
		character: i,
		part: n,
		...r !== void 0 && { attribute: r }
	};
}
var Fn = class {
	constructor(e) {
		this.openElements = [], this.body = [], this.rootBindings = /* @__PURE__ */ new Map(), this.rootScope = {
			bindings: this.rootBindings,
			parent: void 0
		}, this.rootAttributeCount = -1, this.prefixes = { next: 1 }, this.newLines = [];
		let { config: t, documentRoot: n, declareNamespaces: r = !0, withDatabaseIds: i = !1 } = e;
		this.context = {
			config: t,
			declareNamespaces: r,
			withDatabaseIds: i,
			documentRoot: n,
			rootElement: void 0
		}, this.indent = e.indent ?? !0, this.includeXmlDeclaration = e.includeXmlDeclaration ?? !0;
	}
	openElement(e) {
		let { record: t } = e;
		An({
			record: t,
			withId: this.context.withDatabaseIds
		});
		let n = this.openElements.at(-1), r = vn({
			context: this.context,
			record: t,
			parent: n?.element
		}), i = t.value ? ne({ text: t.value }) : "", a = t.children.length > 0, o = n ? n.level + 1 : 0, s = n ? n.inline || n.insideInline : !1, c = {
			element: r,
			qualifiedName: fn(r),
			level: o,
			scope: this.rootScope,
			empty: !i && !a,
			inline: !this.indent || s || In({
				element: r,
				text: i,
				hasChildren: a
			}),
			insideInline: s
		};
		if (n) {
			this.refreshRootScope();
			let { text: e, scope: t } = nn({
				element: r,
				scope: n.scope,
				prefixes: this.prefixes
			});
			c.scope = t, s || this.newLine({ level: o }), this.body.push(e, c.empty ? "/>" : ">");
		} else this.root = c;
		this.openElements.push(c), i && this.writeText({
			text: i,
			owner: c
		});
	}
	closeElement() {
		let e = this.openElements.pop();
		e && !e.empty && (e.inline || this.newLine({ level: e.level }), this.body.push(`</${e.qualifiedName}>`));
	}
	take() {
		let e = this.body.join("");
		return this.body = [], e;
	}
	head() {
		let e = this.root;
		if (!e) return "";
		let { text: t } = nn({
			element: e.element,
			scope: Kt,
			prefixes: { next: 1 }
		});
		return (this.includeXmlDeclaration ? Rt + (this.indent ? "\r\n" : "") : "") + t + (e.empty ? "/>" : ">");
	}
	refreshRootScope() {
		let e = this.root;
		if (!e) return;
		let t = e.element.attributes.length;
		if (t === this.rootAttributeCount) return;
		this.rootAttributeCount = t;
		let { scope: n, generated: r } = nn({
			element: e.element,
			scope: Kt,
			prefixes: { next: 1 }
		});
		this.rootBindings.clear();
		for (let [e, t] of n.bindings) r.has(e) || this.rootBindings.set(e, t);
	}
	writeText(e) {
		let { text: t, owner: n } = e;
		if (!this.indent) {
			this.body.push(cn(t));
			return;
		}
		let r = ln(t);
		n.inline || this.newLine({ level: n.level + 1 }), this.body.push(Rn(r));
	}
	newLine(e) {
		if (!this.indent) return;
		let { level: t } = e;
		this.newLines[t] ??= "\r\n" + zt.repeat(t), this.body.push(this.newLines[t]);
	}
};
function In(e) {
	let { element: t, text: n, hasChildren: r } = e;
	return Ln(t) ? !0 : n ? !r || !n.includes("\n") : !1;
}
function Ln(e) {
	return e.attributes.some((e) => e.value === "preserve" && (e.namespaceURI === "http://www.w3.org/XML/1998/namespace" && e.localName === "space" || e.namespaceURI === null && e.localName === "xml:space"));
}
function Rn(e) {
	return e.includes("\n") ? e.replace(/\r\n/g, "\n").replace(/\n/g, "\r\n") : e;
}
async function zn(e, t = {}) {
	let { source: n, runtime: r, documentId: i } = e, a = Y({
		enabled: r.perf ?? !1,
		timeline: !1
	});
	Xn({
		signal: t.signal,
		documentId: i
	});
	let o = await Vn({
		source: n,
		documentId: i
	}), { config: s } = Ft({
		configs: r.configs,
		defaultConfigKey: r.defaultConfigKey,
		configKey: o.configKey
	}), c = Bn({ options: e.options });
	a.start("export");
	let l;
	try {
		let n = await Hn({
			...e,
			config: s,
			control: t,
			perf: a,
			batchSize: c
		});
		l = n.status === "moved" ? await Hn({
			...e,
			config: s,
			control: t,
			perf: a,
			batchSize: c
		}) : n;
	} finally {
		a.stop("export");
	}
	return l.status === "moved" && T("EXPORT_CONFLICT", {
		detail: `Document "${o.name}" changed twice while it was exported: export it again`,
		meta: { documentId: i }
	}), {
		file: l.file,
		filename: `${o.name}${o.extension}`,
		...r.perf && { perf: a.snapshot() }
	};
}
function Bn(e) {
	let t = e.options?.batchSize ?? 2e3;
	return (!Number.isInteger(t) || t < 1) && T("ASSERTION_FAILED", { detail: `An export batch size is a whole number from 1, not ${t}` }), t;
}
async function Vn(e) {
	let { source: t, documentId: n } = e, r = await t.getDocument(n);
	return r && r.status === "ready" || Yn({ documentId: n }), r;
}
async function Hn(e) {
	let { source: t, documentId: n, options: r, config: i, control: a, perf: o, batchSize: s } = e, c = await t.getExportVersion({ documentId: n });
	c === void 0 && Yn({ documentId: n });
	let l = await t.count(n), u = await Wn({
		source: t,
		documentId: n,
		config: i
	});
	if (!u) {
		if (await qn({
			source: t,
			documentId: n,
			version: c
		})) return { status: "moved" };
		T("EXPORT_ROOT_NOT_FOUND", { detail: `No ${i.rootElementName} root element found in document "${n}"` });
	}
	let d = {
		source: t,
		documentId: n,
		version: c,
		totalRecords: l,
		control: a,
		perf: o,
		writer: new Fn({
			config: i,
			documentRoot: u,
			indent: r?.indent,
			withDatabaseIds: r?.withDatabaseIds
		}),
		parts: [],
		recordsWritten: 0
	}, f = [Un({
		pass: d,
		record: u,
		config: i
	})];
	if (d.recordsWritten % s === 0 && await Gn(d)) return { status: "moved" };
	for (; f.length > 0;) {
		let e = f.at(-1);
		if (e.next >= e.childRefs.length) {
			o.time("export::write", () => d.writer.closeElement()), f.pop();
			continue;
		}
		if (e.next >= e.chunkStart + e.chunk.length) {
			let r = e.childRefs.slice(e.next, e.next + s).map(Jn);
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
			if (await qn(d)) return { status: "moved" };
			T("EXPORT_ORPHAN_CHILD_REF", {
				detail: `Parent '${e.record.tagName}' references non-existent child '${r.tagName}' (id: ${r.id})`,
				ref: {
					tagName: e.record.tagName,
					id: e.record.id
				}
			});
		}
		if (f.push(Un({
			pass: d,
			record: a,
			config: i
		})), d.recordsWritten % s === 0 && await Gn(d)) return { status: "moved" };
	}
	if (Kn(d), d.recordsWritten % s !== 0 && await Gn(d)) return { status: "moved" };
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
function Un(e) {
	let { pass: t, record: r, config: i } = e;
	return t.perf.time("export::write", () => t.writer.openElement({ record: r })), t.recordsWritten++, {
		record: r,
		childRefs: n({
			parentTagName: r.tagName,
			children: r.children,
			childrenConfig: i.children,
			definition: i.definition
		}),
		next: 0,
		chunk: [],
		chunkStart: 0
	};
}
async function Wn(e) {
	let { source: t, documentId: n, config: r } = e;
	return (await t.getByTagNameInDocument(r.rootElementName, n)).find((e) => Lt({
		record: e,
		config: r
	}));
}
async function Gn(e) {
	let { control: t, documentId: n, recordsWritten: r, totalRecords: i } = e;
	return Kn(e), kt({
		listener: t.onProgress,
		value: {
			recordsWritten: r,
			totalRecords: i
		},
		of: Mt.exportProgress,
		call: t
	}), Xn({
		signal: t.signal,
		documentId: n
	}), await It(), qn(e);
}
function Kn(e) {
	let t = e.writer.take();
	t && e.parts.push(new Blob([t]));
}
async function qn(e) {
	let { source: t, documentId: n, version: r } = e, i = await t.getExportVersion({ documentId: n });
	return i === void 0 && Yn({ documentId: n }), i !== r;
}
function Jn(e) {
	return e.id;
}
function Yn(e) {
	let { documentId: t } = e;
	T("DOCUMENT_NOT_REGISTERED", {
		detail: `Document "${t}" is not registered, or not ready, in this store`,
		meta: { documentId: t }
	});
}
function Xn(e) {
	let { signal: t, documentId: n } = e;
	t?.aborted && T("EXPORT_ABORTED", {
		detail: `The export of document "${n}" was aborted`,
		meta: { documentId: n }
	});
}
function Zn(e) {
	let { dialecteId: t, project: n } = e;
	return `${encodeURIComponent(t)}/${encodeURIComponent(n)}`;
}
//#endregion
//#region node_modules/.pnpm/@dialecte+core@0.8.0/node_modules/@dialecte/core/dist/running-operations-vnijBvn7.js
var Qn = Symbol.for("@dialecte/core/sqlite-storage/v1");
function $n(e) {
	let t = globalThis[Qn];
	return t || T("PROJECT_SQLITE_NOT_IMPORTED", {
		detail: `Project "${e.project}" asks for SQLite storage, but '@dialecte/core/sqlite' was never imported in this realm: add \`import '@dialecte/core/sqlite'\` to the app's entry (a test runner's setup file for a test on it). Imported already? Then it came from another copy of @dialecte/core whose SQLite storage is of another version than the one opening the project (a dialecte bringing its own core): align the core versions`,
		meta: { project: e.project }
	}), t;
}
function er() {
	let e = /* @__PURE__ */ new Map();
	return {
		markClosing: function({ name: t, until: n }) {
			let r = e.get(t) ?? /* @__PURE__ */ new Set();
			e.set(t, r);
			let i = n.then(tr, tr);
			r.add(i), i.then(function() {
				r.delete(i), r.size === 0 && e.get(t) === r && e.delete(t);
			});
		},
		settled: async function({ name: t }) {
			for (let n = e.get(t); n; n = e.get(t)) await Promise.all(n);
		}
	};
}
function tr() {}
function nr() {}
function rr() {
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
function ir() {
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
//#endregion
//#region node_modules/.pnpm/@dialecte+core@0.8.0/node_modules/@dialecte/core/dist/same-json-value-C6kUaoyt.js
function Q(e) {
	let { documents: t, writeId: n, isRunning: r } = e, i = t.find((e) => e.writeId === n);
	return i ? i.status === "importing" ? r?.({ writeId: n }) === !1 ? "not-applied" : "running" : "applied" : "not-applied";
}
function ar(e) {
	let { documents: t, writeId: n, committed: r, isRunning: i } = e, a = Q({
		documents: t,
		writeId: n,
		isRunning: i
	});
	return a === "not-applied" ? r ? "applied" : "not-applied" : a;
}
var or = 1024, sr = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u, cr = [
	"name",
	"path",
	"metadata"
], lr = ".xml";
function ur(e) {
	let { path: t } = e, n = vr({ path: t });
	n !== void 0 && ut({
		path: t,
		reason: n
	});
	let r = t.split("/");
	return {
		folders: r,
		fileName: r.pop()
	};
}
function dr(e) {
	let { extensions: t } = e;
	return t.includes(".xml") ? t : [...t, lr];
}
function fr(e) {
	let { path: t, extensions: n } = e, { fileName: r } = ur({ path: t }), i = r.lastIndexOf(".");
	return (i < 1 || i === r.length - 1) && ut({
		path: t,
		reason: "its file name has no extension after a name"
	}), n && !n.some((e) => r.toLowerCase().endsWith(e)) && ut({
		path: t,
		reason: `its extension is not one the document's config reads (${n.join(", ")})`
	}), {
		name: r.slice(0, i),
		extension: r.slice(i)
	};
}
function pr(e) {
	let { name: t, extension: n, path: r } = e.document;
	if (r === void 0) return;
	let { fileName: i } = ur({ path: r });
	(typeof t != "string" || typeof n != "string") && ut({
		path: r,
		reason: "a path names a file of a name and an extension that are strings"
	}), (t === "" || i !== `${t}${n}`) && ut({
		path: r,
		reason: `it does not end with the document's file name ${JSON.stringify(`${t}${n}`)}`
	});
}
function mr(e) {
	let { document: t } = e, n = Object.fromEntries(cr.filter((t) => e.updates[t] !== void 0).map((t) => [t, e.updates[t]])), r = {
		...t,
		...n
	};
	if (n.path !== void 0) {
		let { fileName: e } = ur({ path: n.path }), { extension: i } = t;
		e.endsWith(i) && e.length !== i.length || ut({
			path: n.path,
			reason: `it does not end with the document's extension ${JSON.stringify(i)}`
		}), r.name = n.name ?? e.slice(0, e.length - i.length);
	} else if (n.name !== void 0 && t.path !== void 0) {
		let { folders: e } = ur({ path: t.path });
		r.path = [...e, `${n.name}${t.extension}`].join("/");
	}
	return (n.path !== void 0 || n.name !== void 0) && pr({ document: r }), r;
}
function hr(e) {
	let { document: t, documents: n } = e;
	pr({ document: t });
	let { id: r, path: i } = t;
	if (i === void 0) return;
	let a = gr({
		path: i,
		documents: n,
		documentId: r
	});
	a !== void 0 && dt({
		documentId: r,
		path: i,
		takenBy: a
	});
}
function gr(e) {
	let { path: t, documents: n, documentId: r } = e;
	return n.find((e) => e.id !== r && e.path !== void 0 && _r({
		path: t,
		other: e.path
	}))?.id;
}
function _r(e) {
	let { path: t, other: n } = e;
	return t === n || t.startsWith(`${n}/`) || n.startsWith(`${t}/`);
}
function vr(e) {
	let { path: t } = e;
	if (typeof t != "string") return "it is not a string";
	if (t.includes("\\")) return "it holds a backslash, a folder separator on Windows";
	if (sr.test(t)) return "it holds an invisible format, separator or control character (Unicode Cc, Cf, Zl or Zp)";
	if (!t.isWellFormed()) return `it is ${U}`;
	if (t.normalize("NFC") !== t) return "it is not in Unicode NFC";
	let n = t.split("/");
	if (n.some((e) => e === "")) return "it holds an empty folder or file name";
	if (n.some((e) => e === "." || e === "..")) return "it holds a folder or file name \".\" or \"..\"";
	let r = new TextEncoder();
	if (n.some((e) => r.encode(e).length > 255)) return "it holds a folder or file name of more than 255 bytes (UTF-8)";
	if (r.encode(t).length > 1024) return `it is more than ${or} bytes long (UTF-8)`;
}
function yr(e) {
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
function br(e) {
	return G({ value: e.records }).map((e) => yr({ record: e }));
}
function xr(e) {
	let { record: t, patch: n } = e, { recordId: r, attributes: i, children: a, removeAttributes: o, ...s } = n, c = { ...t };
	for (let [e, t] of Object.entries(s)) t !== void 0 && Object.assign(c, { [e]: t });
	return i && (c.attributes = Sr({
		held: t.attributes,
		given: i,
		key: "name"
	})), o?.length && (c.attributes = c.attributes.filter((e) => !o.includes(e.name))), a && (c.children = Sr({
		held: t.children,
		given: a,
		key: "id"
	})), yr({ record: c });
}
function Sr(e) {
	let { held: t, given: n, key: r } = e, i = [...t];
	for (let e of n) {
		let t = i.findIndex((t) => t[r] === e[r]);
		t >= 0 ? i[t] = e : i.push(e);
	}
	return i;
}
function Cr(e) {
	let { onProgress: t, parts: n } = e, r = n.reduce((e, t) => e + t, 0), i = 0, a = {};
	for (let e of n) i += e, kt({
		listener: function(e) {
			return t?.(e, r);
		},
		value: i,
		of: Mt.commitProgress,
		call: a
	});
}
async function wr(e) {
	let { file: t } = e, n = await t.text(), r = new DOMParser().parseFromString(n, "application/xml"), i = r.getElementsByTagName("parsererror")[0];
	return i && T("PARSE_ERROR", { detail: i.textContent?.trim() || "The file is not well-formed XML" }), r;
}
var Tr = /* @__PURE__ */ Ye(((e, t) => {
	t.exports = {};
})), Er = /* @__PURE__ */ I((/* @__PURE__ */ Ye(((e, t, n) => {
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
			i(a), a.q = a.c = "", a.bufferCheckPosition = e.MAX_BUFFER_LENGTH, a.encoding = null, a.opt = r || {}, a.opt.lowercase = a.opt.lowercase || a.opt.lowercasetags, a.looseCase = a.opt.lowercase ? "toLowerCase" : "toUpperCase", a.opt.maxEntityCount = a.opt.maxEntityCount || 512, a.opt.maxEntityDepth = a.opt.maxEntityDepth || 4, a.entityCount = a.entityDepth = 0, a.tags = [], a.closed = a.closedRoot = a.sawRoot = !1, a.tag = a.error = null, a.strict = !!t, a.noscript = !!(t || a.opt.noscript), a.state = w.BEGIN, a.strictEntities = a.opt.strictEntities, a.ENTITIES = a.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), a.attribList = [], a.opt.xmlns && (a.ns = Object.create(h)), a.opt.unquotedAttributeValues === void 0 && (a.opt.unquotedAttributeValues = !t), a.trackPosition = a.opt.position !== !1, a.trackPosition && (a.position = a.line = a.column = 0), ne(a, "onready");
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
						oe(n);
						break;
					case "cdata":
						E(n, "oncdata", n.cdata), n.cdata = "";
						break;
					case "script":
						E(n, "onscript", n.script), n.script = "";
						break;
					default: D(n, "Max buffer length exceeded: " + t[a]);
				}
				i = Math.max(i, s);
			}
			n.bufferCheckPosition = e.MAX_BUFFER_LENGTH - i + n.position;
		}
		function i(e) {
			for (var n = 0, r = t.length; n < r; n++) e[t[n]] = "";
		}
		function a(e) {
			oe(e), e.cdata !== "" && (E(e, "oncdata", e.cdata), e.cdata = ""), e.script !== "" && (E(e, "onscript", e.script), e.script = "");
		}
		n.prototype = {
			end: function() {
				ce(this);
			},
			write: he,
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
			o = Tr().Stream;
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
		function ee(e, t) {
			return !C(e, t);
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
		function ne(e, t, n) {
			e[t] && e[t](n);
		}
		function T(e) {
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
				var n = T(t.body);
				n && !ie(e.encoding, n) && O(e, "XML declaration encoding " + n + " does not match detected stream encoding " + e.encoding.toUpperCase());
			}
		}
		function E(e, t, n) {
			e.textNode && oe(e), ne(e, t, n);
		}
		function oe(e) {
			e.textNode = se(e.opt, e.textNode), e.textNode && ne(e, "ontext", e.textNode), e.textNode = "";
		}
		function se(e, t) {
			return e.trim && (t = t.trim()), e.normalize && (t = t.replace(/\s+/g, " ")), t;
		}
		function D(e, t) {
			return oe(e), e.trackPosition && (t += "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c), t = Error(t), e.error = t, ne(e, "onerror", t), e;
		}
		function ce(e) {
			return e.sawRoot && !e.closedRoot && O(e, "Unclosed root tag"), e.state !== w.BEGIN && e.state !== w.BEGIN_WHITESPACE && e.state !== w.TEXT && D(e, "Unexpected end"), oe(e), e.c = "", e.closed = !0, ne(e, "onend"), n.call(e, e.strict, e.opt), e;
		}
		function O(e, t) {
			if (typeof e != "object" || !(e instanceof n)) throw Error("bad call to strictFail");
			e.strict && D(e, t);
		}
		function le(e) {
			e.strict || (e.tagName = e.tagName[e.looseCase]());
			var t = e.tags[e.tags.length - 1] || e, n = e.tag = {
				name: e.tagName,
				attributes: {}
			};
			e.opt.xmlns && (n.ns = t.ns), e.attribList.length = 0, E(e, "onopentagstart", n);
		}
		function ue(e, t) {
			var n = e.indexOf(":") < 0 ? ["", e] : e.split(":"), r = n[0], i = n[1];
			return t && e === "xmlns" && (r = "xmlns", i = ""), {
				prefix: r,
				local: i
			};
		}
		function de(e) {
			if (e.strict || (e.attribName = e.attribName[e.looseCase]()), e.attribList.indexOf(e.attribName) !== -1 || e.tag.attributes.hasOwnProperty(e.attribName)) e.attribName = e.attribValue = "";
			else {
				if (e.opt.xmlns) {
					var t = ue(e.attribName, !0), n = t.prefix, r = t.local;
					if (n === "xmlns") if (r === "xml" && e.attribValue !== p) O(e, "xml: prefix must be bound to " + p + "\nActual: " + e.attribValue);
					else if (r === "xmlns" && e.attribValue !== m) O(e, "xmlns: prefix must be bound to " + m + "\nActual: " + e.attribValue);
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
		function k(e, t) {
			if (e.opt.xmlns) {
				var n = e.tag, r = ue(e.tagName);
				n.prefix = r.prefix, n.local = r.local, n.uri = n.ns[r.prefix] || "", n.prefix && !n.uri && (O(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName)), n.uri = r.prefix);
				var i = e.tags[e.tags.length - 1] || e;
				n.ns && i.ns !== n.ns && Object.keys(n.ns).forEach(function(t) {
					E(e, "onopennamespace", {
						prefix: t,
						uri: n.ns[t]
					});
				});
				for (var a = 0, o = e.attribList.length; a < o; a++) {
					var s = e.attribList[a], c = s[0], l = s[1], u = ue(c, !0), d = u.prefix, f = u.local, p = d === "" ? "" : n.ns[d] || "", m = {
						name: c,
						value: l,
						prefix: d,
						local: f,
						uri: p
					};
					d && d !== "xmlns" && !p && (O(e, "Unbound namespace prefix: " + JSON.stringify(d)), m.uri = d), e.tag.attributes[c] = m, E(e, "onattribute", m);
				}
				e.attribList.length = 0;
			}
			e.tag.isSelfClosing = !!t, e.sawRoot = !0, e.tags.push(e.tag), E(e, "onopentag", e.tag), t || (e.state = !e.noscript && e.tagName.toLowerCase() === "script" ? w.SCRIPT : w.TEXT, e.tag = null, e.tagName = ""), e.attribName = e.attribValue = "", e.attribList.length = 0;
		}
		function fe(e) {
			if (!e.tagName) O(e, "Weird empty close tag."), e.textNode += "</>", e.state = w.TEXT;
			else {
				if (e.script) {
					if (e.tagName !== "script") {
						e.script += "</" + e.tagName + ">", e.tagName = "", e.state = w.SCRIPT;
						return;
					}
					E(e, "onscript", e.script), e.script = "";
				}
				var t = e.tags.length, n = e.tagName;
				e.strict || (n = n[e.looseCase]());
				for (var r = n; t-- && e.tags[t].name !== r;) O(e, "Unexpected close tag");
				if (t < 0) O(e, "Unmatched closing tag: " + e.tagName), e.textNode += "</" + e.tagName + ">", e.state = w.TEXT;
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
					t === 0 && (e.closedRoot = !0), e.tagName = e.attribValue = e.attribName = "", e.attribList.length = 0, e.state = w.TEXT;
				}
			}
		}
		function pe(e) {
			var t = e.entity, n = t.toLowerCase(), r, i = "";
			return e.ENTITIES[t] ? e.ENTITIES[t] : e.ENTITIES[n] ? e.ENTITIES[n] : (t = n, t.charAt(0) === "#" && (t.charAt(1) === "x" ? (t = t.slice(2), r = parseInt(t, 16), i = r.toString(16)) : (t = t.slice(1), r = parseInt(t, 10), i = r.toString(10))), t = t.replace(/^0+/, ""), isNaN(r) || i.toLowerCase() !== t || r < 0 || r > 1114111 ? (O(e, "Invalid character entity"), "&" + e.entity + ";") : String.fromCodePoint(r));
		}
		function me(e, t) {
			t === "<" ? (e.state = w.OPEN_WAKA, e.startTagPosition = e.position) : b(t) || (O(e, "Non-whitespace before first tag."), e.textNode = t, e.state = w.TEXT);
		}
		function A(e, t) {
			var n = "";
			return t < e.length && (n = e.charAt(t)), n;
		}
		function he(t) {
			var n = this;
			if (this.error) throw this.error;
			if (n.closed) return D(n, "Cannot write after close. Assign an onready handler.");
			if (t === null) return ce(n);
			typeof t == "object" && (t = t.toString());
			for (var i = 0, a = ""; a = A(t, i++), n.c = a, a;) switch (n.trackPosition && (n.position++, a === "\n" ? (n.line++, n.column = 0) : n.column++), n.state) {
				case w.BEGIN:
					if (n.state = w.BEGIN_WHITESPACE, a === "﻿") continue;
					me(n, a);
					continue;
				case w.BEGIN_WHITESPACE:
					me(n, a);
					continue;
				case w.TEXT:
					if (n.sawRoot && !n.closedRoot) {
						for (var o = i - 1; a && a !== "<" && a !== "&";) a = A(t, i++), a && n.trackPosition && (n.position++, a === "\n" ? (n.line++, n.column = 0) : n.column++);
						n.textNode += t.substring(o, i - 1);
					}
					a === "<" && !(n.sawRoot && n.closedRoot && !n.strict) ? (n.state = w.OPEN_WAKA, n.startTagPosition = n.position) : (b(a) || n.sawRoot && !n.closedRoot || O(n, "Text data outside of root node."), a === "&" ? n.state = w.TEXT_ENTITY : n.textNode += a);
					continue;
				case w.SCRIPT:
					a === "<" ? n.state = w.SCRIPT_ENDING : n.script += a;
					continue;
				case w.SCRIPT_ENDING:
					a === "/" ? n.state = w.CLOSE_TAG : (n.script += "<" + a, n.state = w.SCRIPT);
					continue;
				case w.OPEN_WAKA:
					if (a === "!") n.state = w.SGML_DECL, n.sgmlDecl = "";
					else if (!b(a)) if (C(g, a)) n.state = w.OPEN_TAG, n.tagName = a;
					else if (a === "/") n.state = w.CLOSE_TAG, n.tagName = "";
					else if (a === "?") n.state = w.PROC_INST, n.procInstName = n.procInstBody = "";
					else {
						if (O(n, "Unencoded <"), n.startTagPosition + 1 < n.position) {
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
					n.doctype && n.doctype !== !0 && n.sgmlDecl ? (n.state = w.DOCTYPE_DTD, n.doctype += "<!" + n.sgmlDecl + a, n.sgmlDecl = "") : (n.sgmlDecl + a).toUpperCase() === d ? (E(n, "onopencdata"), n.state = w.CDATA, n.sgmlDecl = "", n.cdata = "") : (n.sgmlDecl + a).toUpperCase() === f ? (n.state = w.DOCTYPE, (n.doctype || n.sawRoot) && O(n, "Inappropriately located doctype declaration"), n.doctype = "", n.sgmlDecl = "") : a === ">" ? (E(n, "onsgmldeclaration", n.sgmlDecl), n.sgmlDecl = "", n.state = w.TEXT) : (x(a) && (n.state = w.SGML_DECL_QUOTED), n.sgmlDecl += a);
					continue;
				case w.SGML_DECL_QUOTED:
					a === n.q && (n.state = w.SGML_DECL, n.q = ""), n.sgmlDecl += a;
					continue;
				case w.DOCTYPE:
					a === ">" ? (n.state = w.TEXT, E(n, "ondoctype", n.doctype), n.doctype = !0) : (n.doctype += a, a === "[" ? n.state = w.DOCTYPE_DTD : x(a) && (n.state = w.DOCTYPE_QUOTED, n.q = a));
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
					a === "-" ? (n.state = w.COMMENT_ENDED, n.comment = se(n.opt, n.comment), n.comment && E(n, "oncomment", n.comment), n.comment = "") : (n.comment += "-" + a, n.state = w.COMMENT);
					continue;
				case w.COMMENT_ENDED:
					a === ">" ? n.state = n.doctype && n.doctype !== !0 ? w.DOCTYPE_DTD : w.TEXT : (O(n, "Malformed comment"), n.comment += "--" + a, n.state = w.COMMENT);
					continue;
				case w.CDATA:
					for (var o = i - 1; a && a !== "]";) a = A(t, i++), a && n.trackPosition && (n.position++, a === "\n" ? (n.line++, n.column = 0) : n.column++);
					n.cdata += t.substring(o, i - 1), a === "]" && (n.state = w.CDATA_ENDING);
					continue;
				case w.CDATA_ENDING:
					a === "]" ? n.state = w.CDATA_ENDING_2 : (n.cdata += "]" + a, n.state = w.CDATA);
					continue;
				case w.CDATA_ENDING_2:
					a === ">" ? (n.cdata && E(n, "oncdata", n.cdata), E(n, "onclosecdata"), n.cdata = "", n.state = w.TEXT) : a === "]" ? n.cdata += "]" : (n.cdata += "]]" + a, n.state = w.CDATA);
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
						ae(n, e), E(n, "onprocessinginstruction", e), n.procInstName = n.procInstBody = "", n.state = w.TEXT;
					} else n.procInstBody += "?" + a, n.state = w.PROC_INST_BODY;
					continue;
				case w.OPEN_TAG:
					C(_, a) ? n.tagName += a : (le(n), a === ">" ? k(n) : a === "/" ? n.state = w.OPEN_TAG_SLASH : (b(a) || O(n, "Invalid character in tag name"), n.state = w.ATTRIB));
					continue;
				case w.OPEN_TAG_SLASH:
					a === ">" ? (k(n, !0), fe(n)) : (O(n, "Forward-slash in opening tag not followed by >"), n.state = w.ATTRIB);
					continue;
				case w.ATTRIB:
					if (b(a)) continue;
					a === ">" ? k(n) : a === "/" ? n.state = w.OPEN_TAG_SLASH : C(g, a) ? (n.attribName = a, n.attribValue = "", n.state = w.ATTRIB_NAME) : O(n, "Invalid attribute name");
					continue;
				case w.ATTRIB_NAME:
					a === "=" ? n.state = w.ATTRIB_VALUE : a === ">" ? (O(n, "Attribute without value"), n.attribValue = n.attribName, de(n), k(n)) : b(a) ? n.state = w.ATTRIB_NAME_SAW_WHITE : C(_, a) ? n.attribName += a : O(n, "Invalid attribute name");
					continue;
				case w.ATTRIB_NAME_SAW_WHITE:
					if (a === "=") n.state = w.ATTRIB_VALUE;
					else if (b(a)) continue;
					else O(n, "Attribute without value"), n.tag.attributes[n.attribName] = "", n.attribValue = "", E(n, "onattribute", {
						name: n.attribName,
						value: ""
					}), n.attribName = "", a === ">" ? k(n) : C(g, a) ? (n.attribName = a, n.state = w.ATTRIB_NAME) : (O(n, "Invalid attribute name"), n.state = w.ATTRIB);
					continue;
				case w.ATTRIB_VALUE:
					if (b(a)) continue;
					x(a) ? (n.q = a, n.state = w.ATTRIB_VALUE_QUOTED) : (n.opt.unquotedAttributeValues || D(n, "Unquoted attribute value"), n.state = w.ATTRIB_VALUE_UNQUOTED, n.attribValue = a);
					continue;
				case w.ATTRIB_VALUE_QUOTED:
					if (a !== n.q) {
						a === "&" ? n.state = w.ATTRIB_VALUE_ENTITY_Q : n.attribValue += a;
						continue;
					}
					de(n), n.q = "", n.state = w.ATTRIB_VALUE_CLOSED;
					continue;
				case w.ATTRIB_VALUE_CLOSED:
					b(a) ? n.state = w.ATTRIB : a === ">" ? k(n) : a === "/" ? n.state = w.OPEN_TAG_SLASH : C(g, a) ? (O(n, "No whitespace between attributes"), n.attribName = a, n.attribValue = "", n.state = w.ATTRIB_NAME) : O(n, "Invalid attribute name");
					continue;
				case w.ATTRIB_VALUE_UNQUOTED:
					if (!S(a)) {
						a === "&" ? n.state = w.ATTRIB_VALUE_ENTITY_U : n.attribValue += a;
						continue;
					}
					de(n), a === ">" ? k(n) : n.state = w.ATTRIB;
					continue;
				case w.CLOSE_TAG:
					if (n.tagName) a === ">" ? fe(n) : C(_, a) ? n.tagName += a : n.script ? (n.script += "</" + n.tagName + a, n.tagName = "", n.state = w.SCRIPT) : (b(a) || O(n, "Invalid tagname in closing tag"), n.state = w.CLOSE_TAG_SAW_WHITE);
					else {
						if (b(a)) continue;
						ee(g, a) ? n.script ? (n.script += "</" + a, n.state = w.SCRIPT) : O(n, "Invalid tagname in closing tag.") : n.tagName = a;
					}
					continue;
				case w.CLOSE_TAG_SAW_WHITE:
					if (b(a)) continue;
					a === ">" ? fe(n) : O(n, "Invalid characters in closing tag");
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
						case w.ATTRIB_VALUE_ENTITY_U: c = w.ATTRIB_VALUE_UNQUOTED, l = "attribValue";
					}
					if (a === ";") {
						var u = pe(n);
						n.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(u) ? ((n.entityCount += 1) > n.opt.maxEntityCount && D(n, "Parsed entity count exceeds max entity count"), (n.entityDepth += 1) > n.opt.maxEntityDepth && D(n, "Parsed entity depth exceeds max entity depth"), n.entity = "", n.state = c, n.write(u), --n.entityDepth) : (n[l] += u, n.entity = "", n.state = c);
					} else C(n.entity.length ? y : v, a) ? n.entity += a : (O(n, "Invalid character in entity name"), n[l] += "&" + n.entity + a, n.entity = "", n.state = c);
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
})))(), 1), Dr = class {
	constructor() {
		this.pendingChildren = /* @__PURE__ */ new Map();
	}
	registerPendingChild(e, t) {
		let n = this.pendingChildren.get(e);
		n ? n.push(t) : this.pendingChildren.set(e, [t]);
	}
	resolveChildrenForBatch(e) {
		for (let t of e) {
			let e = this.pendingChildren.get(t.id);
			e && e.length > 0 && (t.children.push(...e), this.pendingChildren.delete(t.id));
		}
		return e;
	}
	get pendingCount() {
		return this.pendingChildren.size;
	}
};
function Or(e) {
	return "prefix" in e && "uri" in e && !!e.prefix && !!e.uri;
}
var kr = {
	lowercase: !1,
	trim: !1,
	normalize: !1,
	position: !1,
	xmlns: !0
};
function Ar(e) {
	let { dialecteConfig: t, useCustomRecordsIds: n, session: r, hooks: i, importSession: a, perf: o = Nt } = e, s = {
		defaultNamespace: null,
		stack: [],
		recordsBatch: [],
		sawRoot: !1
	}, c = Er.parser(!0, kr), l = a?.recordTagNames && new Set(a.recordTagNames);
	c.onopentag = (e) => {
		jr({
			node: e,
			state: s,
			dialecteConfig: t,
			useCustomRecordsIds: n
		});
	}, c.ontext = (e) => {
		Mr({
			text: e,
			state: s
		});
	}, c.oncdata = (e) => {
		Nr({
			text: e,
			state: s
		});
	}, c.onclosetag = () => {
		Ir({
			state: s,
			hooks: i,
			importSession: a,
			sessionTags: l,
			session: r,
			dialecteConfig: t,
			perf: o
		});
	}, c.onerror = Lr;
	function u() {
		let e = s.recordsBatch;
		return s.recordsBatch = [], e;
	}
	function d() {
		return s.recordsBatch.length;
	}
	return {
		parser: c,
		drainBatch: u,
		getSize: d
	};
}
function jr(e) {
	let { node: t, state: n, dialecteConfig: r, useCustomRecordsIds: i } = e, a = Rr(t);
	n.stack.length === 0 && (n.sawRoot && T("PARSE_ERROR", {
		detail: `XML parsing error: a second root element <${t.name}> after the root was closed`,
		meta: {
			reason: "second-root",
			tagName: t.name
		}
	}), n.sawRoot = !0), n.defaultNamespace ||= zr({
		element: t,
		defaultNamespace: r.namespaces.default,
		rootElementName: r.rootElementName
	});
	let o = Br(t, n.defaultNamespace), s = {
		id: Ur({
			attributes: t.attributes,
			useCustomRecordsIds: i,
			tagName: a
		}),
		tagName: a,
		namespace: o,
		attributes: ee({
			dialecteConfig: r,
			attributes: Vr(Wr({
				attributes: t.attributes,
				useCustomRecordsIds: i
			})),
			namespaceOf: (e) => t.ns[e]
		}),
		value: "",
		parent: Hr(n.stack),
		children: []
	};
	n.stack.push(s);
}
function Mr(e) {
	let { state: t } = e;
	Nr({
		text: d({ text: e.text }),
		state: t
	});
}
function Nr(e) {
	let { text: t, state: n } = e;
	t && n.stack.length > 0 && (n.stack[n.stack.length - 1].value += t);
}
function Pr(e) {
	let { record: t } = e, n = jn({ record: t });
	if (!n) return;
	let r = Nn({
		place: n,
		element: `<${t.tagName}>`
	});
	Fr({
		character: n.character,
		where: r
	});
}
function Fr(e) {
	let { character: t, where: n } = e;
	T("PARSE_ERROR", {
		detail: `XML parsing error: ${n} holds ${t}, a character XML does not allow (as written or as a character reference)`,
		meta: {
			reason: "not-xml-character",
			character: t
		}
	});
}
function Ir(e) {
	let { state: t, hooks: n, importSession: r, sessionTags: i, session: a, dialecteConfig: o, perf: s = Nt } = e, c = t.stack.pop();
	if (!c) return;
	let l = s.time("import::standardize", () => ge({
		dialecteConfig: o,
		hooks: n,
		record: c
	})), u = r?.beforeImportRecord;
	u && (!i || i.has(l.tagName)) && s.time("import::hooks.record", () => u({
		record: l,
		ancestry: t.stack
	})), Pr({ record: l });
	let d = t.stack[t.stack.length - 1];
	d ? d.children.push({
		id: l.id,
		tagName: l.tagName
	}) : l.parent && a.registerPendingChild(l.parent.id, {
		id: l.id,
		tagName: l.tagName
	}), t.recordsBatch.push(l);
}
function Lr(e) {
	T("PARSE_ERROR", {
		detail: `XML parsing error: ${e.message}`,
		meta: {
			reason: "malformed-xml",
			parser: e.message
		}
	});
}
function Rr(e) {
	return e.local;
}
function zr(e) {
	let { element: n, defaultNamespace: r, rootElementName: i } = e;
	return t(n.name === i, { detail: `Expected root element <${i}>, got <${n.name}>` }), n.attributes?.xmlns?.value ? {
		prefix: "",
		uri: n.attributes.xmlns.value
	} : r;
}
function Br(e, t) {
	return Or(e) ? {
		prefix: e.prefix,
		uri: e.uri
	} : t;
}
function Vr(e) {
	return e.map((e) => {
		let t = e.prefix && e.uri ? {
			prefix: e.prefix,
			uri: e.uri
		} : void 0;
		return {
			name: e.prefix === "xmlns" && e.local === "" ? "xmlns" : t ? e.local : e.name,
			value: e.value,
			...t && { namespace: t }
		};
	});
}
function Hr(e) {
	if (e.length === 0) return null;
	let t = e[e.length - 1];
	return t ? {
		id: t.id,
		tagName: t.tagName
	} : null;
}
function Ur(e) {
	let { attributes: t, useCustomRecordsIds: n, tagName: r } = e, i = t[b];
	if (!n || !i || !i.value) return crypto.randomUUID();
	let a = kn({ text: i.value });
	return a && Fr({
		character: a,
		where: `The attribute ${b} of <${r}>`
	}), i.value;
}
function Wr(e) {
	let { attributes: t, useCustomRecordsIds: n } = e;
	return n ? Object.values(t).filter((e) => e.name !== b) : Object.values(t);
}
async function Gr(e, n = {}) {
	let { documentId: r, configKey: i, store: a, config: o, useCustomRecordsIds: s = !1, chunkOptions: c, hooks: l, perf: u = Nt } = e, { file: d } = e;
	if (t(dr({ extensions: o.io.supportedFileExtensions }).some((e) => d.name.toLowerCase().endsWith(e)), {
		key: "ASSERTION_FAILED",
		detail: `Unsupported file type: ${d.name}`
	}), d.size === 0) return {
		documentId: r,
		recordCount: 0,
		diagnostics: []
	};
	let f = l?.beforeImport;
	if (f) {
		let e = f(await d.text());
		d = new File([e], d.name, { type: d.type });
	}
	let p = c?.chunkSize ?? 32768, m = c?.batchSize ?? 2e3, h = new Dr(), g = l?.createImportSession?.({
		documentId: r,
		configKey: i
	}), _ = Ar({
		dialecteConfig: o,
		useCustomRecordsIds: s,
		session: h,
		hooks: l,
		importSession: g,
		perf: u
	}), v = await Kr({
		file: d,
		sax: _,
		session: h,
		store: a,
		documentId: r,
		chunkSize: p,
		batchSize: m,
		perf: u,
		control: n
	}), { recordDelta: y, diagnostics: b } = await qr({
		importSession: g,
		store: a,
		documentId: r,
		file: d,
		perf: u,
		signal: n.signal
	});
	return {
		documentId: r,
		recordCount: v + y,
		diagnostics: b
	};
}
async function Kr(e) {
	let { file: t, sax: n, session: r, store: i, documentId: a, chunkSize: o, batchSize: s, perf: c, control: l } = e, u = {
		sax: n,
		session: r,
		store: i,
		documentId: a,
		file: t,
		perf: c,
		control: l
	}, d = 0, f = 0, p = t.stream().getReader(), m = new TextDecoder(), h = /* @__PURE__ */ new Uint8Array(), g = !1;
	for (; !g;) {
		let e = await p.read();
		if (g = e.done, e.value) {
			let r = h.length === 0 ? e.value : Zr(h, e.value), i = 0;
			for (; i + o <= r.length;) {
				let e = c.time("import::decode", () => m.decode(r.subarray(i, i + o), { stream: !0 }));
				i += o, f += o, c.time("import::parse", () => n.parser.write(e)), d += await Qr({
					...u,
					threshold: s,
					progress: {
						phase: "storing",
						bytesRead: f,
						totalBytes: t.size
					}
				});
			}
			h = i < r.length ? r.slice(i) : /* @__PURE__ */ new Uint8Array();
		}
		if (g) {
			if (h.length > 0) {
				let e = c.time("import::decode", () => m.decode(h));
				f += h.length, c.time("import::parse", () => n.parser.write(e));
			}
			c.time("import::parse", () => n.parser.close()), d += await Qr({
				...u,
				threshold: 0,
				progress: {
					phase: "storing",
					bytesRead: f,
					totalBytes: t.size
				}
			});
		}
	}
	return d;
}
async function qr(e) {
	let { importSession: t, store: n, documentId: r, file: i, perf: a, signal: o } = e;
	if (Xr({
		signal: o,
		file: i
	}), !t?.afterImport) return {
		recordDelta: 0,
		diagnostics: []
	};
	a.start("import::hooks.after");
	let s;
	try {
		s = await t.afterImport();
	} finally {
		a.stop("import::hooks.after");
	}
	let { creates: c, updates: l, deletes: u, diagnostics: d = [] } = s;
	if (Jr({ diagnostics: d }), Yr({
		creates: c,
		updates: l
	}), c?.length || l?.length || u?.length) {
		Xr({
			signal: o,
			file: i
		}), a.start("import::writes.after");
		try {
			await n.writeSession(r, {
				creates: c,
				updates: l,
				deletes: u
			});
		} finally {
			a.stop("import::writes.after");
		}
	}
	return {
		recordDelta: (c?.length ?? 0) - (u?.length ?? 0),
		diagnostics: d
	};
}
function Jr(e) {
	try {
		_t({ value: e.diagnostics });
	} catch (e) {
		T("STORE_VALUE_NOT_JSON", {
			detail: `A diagnostic of the import session: ${f(e)?.detail ?? String(e)}`,
			cause: e instanceof Error ? e : void 0
		});
	}
}
function Yr(e) {
	let { creates: t = [], updates: n = [] } = e;
	for (let e of t) An({ record: e });
	for (let e of n) An({ record: {
		...e,
		id: e.recordId
	} });
}
function Xr(e) {
	let { signal: t, file: n } = e;
	t?.aborted && T("IMPORT_ABORTED", {
		detail: `The import of "${n.name}" was aborted`,
		meta: { fileName: n.name }
	});
}
function Zr(e, t) {
	let n = new Uint8Array(e.length + t.length);
	return n.set(e), n.set(t, e.length), n;
}
async function Qr(e) {
	let { sax: t, session: n, store: r, documentId: i, file: a, threshold: o, perf: s, control: c, progress: l } = e;
	if (t.getSize() < o) return 0;
	Xr({
		signal: c.signal,
		file: a
	}), s.start("import::insert");
	let u;
	try {
		let e = n.resolveChildrenForBatch(t.drainBatch());
		await r.bulkWrite(i, { creates: e }), u = e.length;
	} finally {
		s.stop("import::insert");
	}
	return kt({
		listener: c.onProgress,
		value: l,
		of: Mt.importProgress,
		call: c
	}), u;
}
async function $r(e, t = {}) {
	let { runtime: n, file: i, options: a, writeId: o } = e, s = e.perf ?? Y({
		enabled: n.perf ?? !1,
		timeline: !1
	});
	Xr({
		signal: t.signal,
		file: i
	});
	let { configKey: c, config: l } = Ft({
		configs: n.configs,
		defaultConfigKey: n.defaultConfigKey,
		configKey: a?.configKey
	}), u = {
		id: crypto.randomUUID(),
		...ei({
			file: i,
			path: a?.path,
			config: l
		}),
		configKey: c,
		createdAt: Date.now(),
		metadata: a?.metadata,
		status: "importing",
		writeId: o,
		...a?.path !== void 0 && { path: a.path }
	};
	s.start("import");
	let d;
	try {
		d = await ti({
			...e,
			control: t,
			registered: u,
			config: l,
			perf: s
		});
	} catch (e) {
		throw f(e) ? e : r("IMPORT_FAILED", {
			detail: e instanceof Error ? e.message : String(e),
			cause: e instanceof Error ? e : void 0
		});
	} finally {
		s.stop("import");
	}
	return {
		...d,
		...n.perf && { perf: s.snapshot() }
	};
}
function ei(e) {
	let { file: t, path: n, config: r } = e, i = dr({ extensions: r.io.supportedFileExtensions });
	return n === void 0 ? {
		name: t.name.replace(/\.[^.]+$/, "") || "untitled",
		extension: t.name.includes(".") ? `.${t.name.split(".").pop()}` : i[0]
	} : fr({
		path: n,
		extensions: i
	});
}
async function ti(e) {
	let { store: t, runtime: n, file: r, options: i, control: a, registered: o, config: s, perf: c } = e;
	c.start("import::register");
	try {
		await t.registerDocument(o);
	} finally {
		c.stop("import::register");
	}
	try {
		let e = await Gr({
			file: r,
			documentId: o.id,
			configKey: o.configKey,
			store: t,
			config: s,
			useCustomRecordsIds: i?.useCustomRecordsIds,
			chunkOptions: i?.chunkOptions,
			hooks: n.hooks,
			perf: c
		}, a);
		Xr({
			signal: a.signal,
			file: r
		}), c.start("import::finalize");
		try {
			await t.getDocument(o.id) || T("DOCUMENT_NOT_REGISTERED", {
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
		throw await ni({
			store: t,
			documentId: o.id
		}), e;
	}
}
async function ni(e) {
	let { store: t, documentId: n } = e;
	try {
		await t.removeDocument(n);
	} catch {}
}
var ri = {
	import: "IMPORT_FAILED",
	export: "ASSERTION_FAILED"
};
function ii(e) {
	let { runtime: t, storeName: n, operation: r } = e;
	return t || T(ri[r], { detail: `Store "${n}" has no dialecte to ${r} with: build it with a runtime` }), t;
}
function ai(e, t) {
	return e.id < t.id ? -1 : +(e.id > t.id);
}
function oi(e) {
	return si({ value: e.first }) === si({ value: e.second });
}
function si(e) {
	return JSON.stringify(e.value, function(e, t) {
		return typeof t != "object" || !t || Array.isArray(t) ? t : Object.fromEntries(Object.entries(t).sort(function([e], [t]) {
			return e < t ? -1 : +(e > t);
		}));
	});
}
//#endregion
//#region node_modules/.pnpm/@dialecte+core@0.8.0/node_modules/@dialecte/core/dist/dialecte-gIPrRzni.js
async function ci(e) {
	let { store: t, isRunning: n } = e, r = await t.getDocuments();
	for (let e of r) e.status === "importing" && (await n?.(e) || (await t.getDocument(e.id))?.status === "importing" && await t.removeDocument(e.id));
}
function li(e) {
	let { held: t, registered: n } = e;
	return !t || !n || t.status !== "importing" ? !1 : t.id === n.id && t.writeId === n.writeId && t.createdAt === n.createdAt;
}
var ui = "dialecte:local-open:", di = "dialecte:local-import:", fi = "writes:", pi = /* @__PURE__ */ I((/* @__PURE__ */ Ye(((e, t, n) => {
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
		function ee(e) {
			return C.apply([], e);
		}
		var w = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ee([
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
		})), ne = null;
		function T(e) {
			return ne = /* @__PURE__ */ new WeakMap(), e = function e(t) {
				if (!t || typeof t != "object") return t;
				var n = ne.get(t);
				if (n) return n;
				if (a(t)) {
					n = [], ne.set(t, n);
					for (var r = 0, i = t.length; r < i; ++r) n.push(e(t[r]));
				} else if (te.has(t.constructor)) n = t;
				else {
					var o, c = s(t);
					for (o in n = c === Object.prototype ? {} : Object.create(c), ne.set(t, n), t) l(t, o) && (n[o] = e(t[o]));
				}
				return n;
			}(e), ne = null, e;
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
		function oe(e, t) {
			t = e.indexOf(t), 0 <= t && e.splice(t, 1);
		}
		var se = {};
		function D(e) {
			var t, n, r, i;
			if (arguments.length === 1) {
				if (a(e)) return e.slice();
				if (this === se && typeof e == "string") return [e];
				if (i = E(e)) for (n = []; !(r = i.next()).done;) n.push(r.value);
				else {
					if (e == null || typeof (t = e.length) != "number") return [e];
					for (n = Array(t); t--;) n[t] = e[t];
				}
			} else for (t = arguments.length, n = Array(t); t--;) n[t] = arguments[t];
			return n;
		}
		var ce = typeof Symbol < "u" ? function(e) {
			return e[Symbol.toStringTag] === "AsyncFunction";
		} : function() {
			return !1;
		}, w = [
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
		], O = [
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
		].concat(w), le = {
			VersionChanged: "Database version changed by other database connection",
			DatabaseClosed: "Database has been closed",
			Abort: "Transaction aborted",
			TransactionInactive: "Transaction has already completed or failed",
			MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
		};
		function ue(e, t) {
			this.name = e, this.message = t;
		}
		function de(e, t) {
			return e + ". Errors: " + Object.keys(t).map(function(e) {
				return t[e].toString();
			}).filter(function(e, t, n) {
				return n.indexOf(e) === t;
			}).join("\n");
		}
		function k(e, t, n, r) {
			this.failures = t, this.failedKeys = r, this.successCount = n, this.message = de(e, t);
		}
		function fe(e, t) {
			this.name = "BulkError", this.failures = Object.keys(t).map(function(e) {
				return t[e];
			}), this.failuresByPos = t, this.message = de(e, this.failures);
		}
		p(ue).from(Error).extend({ toString: function() {
			return this.name + ": " + this.message;
		} }), p(k).from(ue), p(fe).from(ue);
		var pe = O.reduce(function(e, t) {
			return e[t] = t + "Error", e;
		}, {}), me = ue, A = O.reduce(function(e, t) {
			var n = t + "Error";
			function r(e, r) {
				this.name = n, e ? typeof e == "string" ? (this.message = `${e}${r ? "\n " + r : ""}`, this.inner = r || null) : typeof e == "object" && (this.message = `${e.name} ${e.message}`, this.inner = e) : (this.message = le[t] || n, this.inner = null);
			}
			return p(r).from(me), e[t] = r, e;
		}, {}), he = (A.Syntax = SyntaxError, A.Type = TypeError, A.Range = RangeError, w.reduce(function(e, t) {
			return e[t + "Error"] = A[t], e;
		}, {}));
		w = O.reduce(function(e, t) {
			return [
				"Syntax",
				"Type",
				"Range"
			].indexOf(t) === -1 && (e[t + "Error"] = A[t]), e;
		}, {});
		function j() {}
		function M(e) {
			return e;
		}
		function ge(e, t) {
			return e == null || e === M ? t : function(n) {
				return t(e(n));
			};
		}
		function _e(e, t) {
			return function() {
				e.apply(this, arguments), t.apply(this, arguments);
			};
		}
		function ve(e, t) {
			return e === j ? t : function() {
				var n = e.apply(this, arguments), r = (n !== void 0 && (arguments[0] = n), this.onsuccess), i = this.onerror, a = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
				return r && (this.onsuccess = this.onsuccess ? _e(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? _e(i, this.onerror) : i), a === void 0 ? n : a;
			};
		}
		function ye(e, t) {
			return e === j ? t : function() {
				e.apply(this, arguments);
				var n = this.onsuccess, r = this.onerror;
				this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? _e(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? _e(r, this.onerror) : r);
			};
		}
		function be(e, t) {
			return e === j ? t : function() {
				var n = e.apply(this, arguments), r = (o(arguments[0], n), this.onsuccess), i = this.onerror, a = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
				return r && (this.onsuccess = this.onsuccess ? _e(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? _e(i, this.onerror) : i), n === void 0 ? a === void 0 ? void 0 : a : o(n, a);
			};
		}
		function xe(e, t) {
			return e === j ? t : function() {
				return !1 !== t.apply(this, arguments) && e.apply(this, arguments);
			};
		}
		function Se(e, t) {
			return e === j ? t : function() {
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
		w.ModifyError = k, w.DexieError = ue, w.BulkError = fe;
		var Ce = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
		function we(e) {
			Ce = e;
		}
		var Te = {}, Ee = 100, De = typeof Promise > "u" ? [] : (O = Promise.resolve(), typeof crypto < "u" && crypto.subtle ? [
			De = crypto.subtle.digest("SHA-512", new Uint8Array([0])),
			s(De),
			O
		] : [
			O,
			s(O),
			O
		]), O = De[0], Oe = De[1], Oe = Oe && Oe.then, ke = O && O.constructor, Ae = !!De[2], je = function(e, t) {
			Le.push([e, t]), Ne &&= (queueMicrotask(Ke), !1);
		}, Me = !0, Ne = !0, Pe = [], Fe = [], Ie = M, N = {
			id: "global",
			global: !0,
			ref: 0,
			unhandleds: [],
			onunhandled: j,
			pgp: !1,
			env: {},
			finalize: j
		}, P = N, Le = [], Re = 0, ze = [];
		function F(e) {
			if (typeof this != "object") throw TypeError("Promises must be constructed via new");
			this._listeners = [], this._lib = !1;
			var t = this._PSD = P;
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
				var e = P, t = Ze;
				function n(n, r) {
					var i = this, a = !e.global && (e !== P || t !== Ze), o = a && !H(), s = new F(function(t, s) {
						We(i, new Ve(at(n, e, a, o), at(r, e, a, o), t, s, e));
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
			--i.ref || i.finalize(), Re === 0 && (++Re, je(function() {
				--Re == 0 && Ye();
			}, []));
		}
		function We(e, t) {
			if (e._state === null) e._listeners.push(t);
			else {
				var n = e._state ? t.onFulfilled : t.onRejected;
				if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
				++t.psd.ref, ++Re, je(Ge, [
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
				--Re == 0 && Ye(), --n.psd.ref || n.psd.finalize();
			}
		}
		function Ke() {
			it(N, function() {
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
				for (; 0 < Le.length;) for (e = Le, Le = [], n = e.length, t = 0; t < n; ++t) {
					var r = e[t];
					r[0].apply(null, r[1]);
				}
			while (0 < Le.length);
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
			var n = P;
			return function() {
				var r = qe(), i = P;
				try {
					return nt(n, !0), e.apply(this, arguments);
				} catch (e) {
					t && t(e);
				} finally {
					nt(i, !1), r && Je();
				}
			};
		}
		u(F.prototype, {
			then: Be,
			_then: function(e, t) {
				We(this, new Ve(null, null, e, t, P));
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
						return i(new A.Timeout(t));
					}, e);
					n.then(r, i).finally(clearTimeout.bind(null, a));
				}) : this;
			}
		}), typeof Symbol < "u" && Symbol.toStringTag && f(F.prototype, Symbol.toStringTag, "Dexie.Promise"), N.env = rt(), u(F, {
			all: function() {
				var e = D.apply(null, arguments).map(et);
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
				var e = D.apply(null, arguments).map(et);
				return new F(function(t, n) {
					e.map(function(e) {
						return F.resolve(e).then(t, n);
					});
				});
			},
			PSD: {
				get: function() {
					return P;
				},
				set: function(e) {
					return P = e;
				}
			},
			totalEchoes: { get: function() {
				return Ze;
			} },
			newPSD: V,
			usePSD: it,
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
					return V(function(t, n) {
						var r = P;
						r.unhandleds = [], r.onunhandled = n, r.finalize = _e(function() {
							var e, r = this;
							e = function() {
								r.unhandleds.length === 0 ? t() : n(r.unhandleds[0]);
							}, ze.push(function t() {
								e(), ze.splice(ze.indexOf(t), 1);
							}), ++Re, je(function() {
								--Re == 0 && Ye();
							}, []);
						}, r.finalize), e();
					}, t, n, r);
				});
			}
		}), ke && (ke.allSettled && f(F, "allSettled", function() {
			var e = D.apply(null, arguments).map(et);
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
			var e = D.apply(null, arguments).map(et);
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
		}, R = 0, z = [], B = 0, Ze = 0, Qe = 0;
		function V(e, t, n, r) {
			var i = P, a = Object.create(i), t = (a.parent = i, a.ref = 0, a.global = !1, a.id = ++Qe, N.env, a.env = Ae ? {
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
			}, it(a, e, n, r));
			return a.ref === 0 && a.finalize(), t;
		}
		function $e() {
			return L.id ||= ++R, ++L.awaits, L.echoes += Ee, L.id;
		}
		function H() {
			return !!L.awaits && (--L.awaits == 0 && (L.id = 0), L.echoes = L.awaits * Ee, !0);
		}
		function et(e) {
			return L.echoes && e && e.constructor === ke ? ($e(), e.then(function(e) {
				return H(), e;
			}, function(e) {
				return H(), U(e);
			})) : e;
		}
		function tt() {
			var e = z[z.length - 1];
			z.pop(), nt(e, !1);
		}
		function nt(e, t) {
			var n, i, a = P;
			(t ? !L.echoes || B++ && e === P : !B || --B && e === P) || queueMicrotask(t ? function(e) {
				++Ze, L.echoes && --L.echoes != 0 || (L.echoes = L.awaits = L.id = 0), z.push(P), nt(e, !0);
			}.bind(null, e) : tt), e !== P && (P = e, a === N && (N.env = rt()), Ae) && (n = N.env.Promise, i = e.env, a.global || e.global) && (Object.defineProperty(r, "Promise", i.PromiseProp), n.all = i.all, n.race = i.race, n.resolve = i.resolve, n.reject = i.reject, i.allSettled && (n.allSettled = i.allSettled), i.any) && (n.any = i.any);
		}
		function rt() {
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
		function it(e, t, n, r, i) {
			var a = P;
			try {
				return nt(e, !0), t(n, r, i);
			} finally {
				nt(a, !1);
			}
		}
		function at(e, t, n, r) {
			return typeof e == "function" ? function() {
				var i = P;
				n && $e(), nt(t, !0);
				try {
					return e.apply(this, arguments);
				} finally {
					nt(i, !1), r && queueMicrotask(H);
				}
			} : e;
		}
		function ot(e) {
			Promise === ke && L.echoes === 0 ? B === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
		}
		("" + Oe).indexOf("[native code]") === -1 && ($e = H = j);
		var U = F.reject, st = "￿", ct = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", lt = "String expected.", ut = "__dbnames", dt = "readonly", ft = "readwrite";
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
				return t[e] === void 0 && e in t && delete (t = T(t))[e], t;
			};
		}
		function gt() {
			throw A.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
		}
		function W(e, t) {
			try {
				var n = _t(e), r = _t(t);
				if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r === "Date" ? -1 : NaN;
				switch (n) {
					case "number":
					case "Date":
					case "string": return t < e ? 1 : e < t ? -1 : 0;
					case "binary":
						for (var i = vt(e), a = vt(t), o = i.length, s = a.length, c = o < s ? o : s, l = 0; l < c; ++l) if (i[l] !== a[l]) return i[l] < a[l] ? -1 : 1;
						return o === s ? 0 : o < s ? -1 : 1;
					case "Array":
						for (var u = e, d = t, f = u.length, p = d.length, m = f < p ? f : p, h = 0; h < m; ++h) {
							var g = W(u[h], d[h]);
							if (g !== 0) return g;
						}
						return f === p ? 0 : f < p ? -1 : 1;
				}
			} catch {}
			return NaN;
		}
		function _t(e) {
			var t = typeof e;
			return t == "object" && (ArrayBuffer.isView(e) || (t = ie(e)) === "ArrayBuffer") ? "binary" : t;
		}
		function vt(e) {
			return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
		}
		function G(e, t, n) {
			var r = e.schema.yProps;
			return r ? (t && 0 < n.numFailures && (t = t.filter(function(e, t) {
				return !n.failures[t];
			})), Promise.all(r.map(function(n) {
				return n = n.updatesTable, t ? e.db.table(n).where("k").anyOf(t).delete() : e.db.table(n).clear();
			})).then(function() {
				return n;
			})) : n;
		}
		bt.prototype.execute = function(e) {
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
		var yt = bt;
		function bt(e) {
			this["@@propmod"] = e;
		}
		function xt(e, t) {
			for (var n = i(t), r = n.length, a = !1, o = 0; o < r; ++o) {
				var s = n[o], c = t[s], l = b(e, s);
				c instanceof yt ? (x(e, s, c.execute(l)), a = !0) : l !== c && (x(e, s, c), a = !0);
			}
			return a;
		}
		K.prototype._trans = function(e, t, n) {
			var r = this._tx || P.trans, i = this.name, a = Ce && typeof console < "u" && console.createTask && console.createTask(`Dexie: ${e === "readonly" ? "read" : "write"} ${this.name}`);
			function o(e, n, r) {
				if (r.schema[i]) return t(r.idbtrans, r);
				throw new A.NotFound("Table " + i + " not part of transaction");
			}
			var s = qe();
			try {
				var c = r && r.db._novip === this.db._novip ? r === P.trans ? r._promise(e, o, n) : V(function() {
					return r._promise(e, o, n);
				}, {
					trans: r,
					transless: P.transless || P
				}) : function e(t, n, r, i) {
					if (t.idbdb && (t._state.openComplete || P.letThrough || t._vip)) {
						var a = t._createTransaction(n, r, t._dbSchema);
						try {
							a.create(), t._state.PR1398_maxLoop = 3;
						} catch (a) {
							return a.name === pe.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
								return e(t, n, r, i);
							})) : U(a);
						}
						return a._promise(n, function(e, t) {
							return V(function() {
								return P.trans = a, i(e, t, a);
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
					if (t._state.openComplete) return U(new A.DatabaseClosed(t._state.dbOpenError));
					if (!t._state.isBeingOpened) {
						if (!t._state.autoOpen) return U(new A.DatabaseClosed());
						t.open().catch(j);
					}
					return t._state.dbReadyPromise.then(function() {
						return e(t, n, r, i);
					});
				}(this.db, e, [this.name], o);
				return a && (c._consoleTask = a, c = c.catch(function(e) {
					return console.trace(e), U(e);
				})), c;
			} finally {
				s && Je();
			}
		}, K.prototype.get = function(e, t) {
			var n = this;
			return e && e.constructor === Object ? this.where(e).first(t) : e == null ? U(new A.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(t) {
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
			if (n && this.db._maxKey !== st) return s = n.keyPath.slice(0, t.length), this.where(s).equals(s.map(function(t) {
				return e[t];
			}));
			!n && Ce && console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit from a compound index [${t.join("+")}]`);
			var r = this.schema.idxByName;
			function o(e, t) {
				return W(e, t) === 0;
			}
			var s = t.reduce(function(t, n) {
				var i = t[0], t = t[1], s = r[n], c = e[n];
				return [i || s, i || !s ? pt(t, s && s.multi ? function(e) {
					return e = b(e, n), a(e) && e.some(function(e) {
						return o(c, e);
					});
				} : function(e) {
					return o(c, b(e, n));
				}) : t];
			}, [null, null]), c = s[0], s = s[1];
			return c ? this.where(c.name).equals(e[c.keyPath]).filter(s) : n ? this.filter(s) : this.where(t).equals("");
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
			for (var n = this.db, r = this.name, i = ((this.schema.mappedClass = t).prototype instanceof gt && (t = ((t) => {
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
				return e.numFailures ? F.reject(e.failures[0]) : e.lastResult;
			}).then(function(t) {
				if (a) try {
					x(e, a, t);
				} catch {}
				return t;
			});
		}, K.prototype.upsert = function(e, t) {
			var n = this, r = this.schema.primKey.keyPath;
			return this._trans("readwrite", function(i) {
				return n.core.get({
					trans: i,
					key: e
				}).then(function(a) {
					var o = a ?? {};
					return xt(o, t), r && x(o, r, e), n.core.mutate({
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
		}, K.prototype.update = function(e, t) {
			return typeof e != "object" || a(e) ? this.where(":id").equals(e).modify(t) : (e = b(e, this.schema.primKey.keyPath)) === void 0 ? U(new A.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t);
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
				return e.numFailures ? F.reject(e.failures[0]) : e.lastResult;
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
					return G(t, [e], n);
				}).then(function(e) {
					return e.numFailures ? F.reject(e.failures[0]) : void 0;
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
					return G(e, null, t);
				});
			}).then(function(e) {
				return e.numFailures ? F.reject(e.failures[0]) : void 0;
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
				if (n && i) throw new A.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
				if (i && i.length !== e.length) throw new A.InvalidArgument("Arguments objects and keys must have the same length");
				var s = e.length, o = n && o ? e.map(ht(n)) : e;
				return r.core.mutate({
					trans: t,
					type: "add",
					keys: i,
					values: o,
					wantResults: a
				}).then(function(e) {
					var t = e.numFailures, n = e.failures;
					if (t === 0) return a ? e.results : e.lastResult;
					throw new fe(`${r.name}.bulkAdd(): ${t} of ${s} operations failed`, n);
				});
			});
		}, K.prototype.bulkPut = function(e, t, n) {
			var r = this, i = Array.isArray(t) ? t : void 0, a = (n ||= i ? void 0 : t) ? n.allKeys : void 0;
			return this._trans("readwrite", function(t) {
				var n = r.schema.primKey, o = n.auto, n = n.keyPath;
				if (n && i) throw new A.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
				if (i && i.length !== e.length) throw new A.InvalidArgument("Arguments objects and keys must have the same length");
				var s = e.length, o = n && o ? e.map(ht(n)) : e;
				return r.core.mutate({
					trans: t,
					type: "put",
					keys: i,
					values: o,
					wantResults: a
				}).then(function(e) {
					var t = e.numFailures, n = e.failures;
					if (t === 0) return a ? e.results : e.lastResult;
					throw new fe(`${r.name}.bulkPut(): ${t} of ${s} operations failed`, n);
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
					var c = [], l = [], u = (e.forEach(function(e, n) {
						var r = e.key, i = e.changes, o = s[n];
						if (o) {
							for (var u = 0, d = Object.keys(i); u < d.length; u++) {
								var f = d[u], p = i[f];
								if (f === t.schema.primKey.keyPath) {
									if (W(p, r) !== 0) throw new A.Constraint("Cannot update primary key in bulkUpdate()");
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
						throw new fe(`${t.name}.bulkUpdate(): ${n} of ${u} operations failed`, r);
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
					return G(t, e, n);
				});
			}).then(function(e) {
				var r = e.numFailures, i = e.failures;
				if (r === 0) return e.lastResult;
				throw new fe(`${t.name}.bulkDelete(): ${r} of ${n} operations failed`, i);
			});
		};
		var St = K;
		function K() {}
		function Ct(e) {
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
					fire: o ||= j,
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
						if (t !== "asap") throw new A.InvalidArgument("Invalid event config");
						var n = s(e, M, function() {
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
		function wt(e, t) {
			return p(t).from({ prototype: e }), t;
		}
		function Tt(e, t) {
			return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
		}
		function Et(e, t) {
			e.filter = pt(e.filter, t);
		}
		function Dt(e, t, n) {
			var r = e.replayFilter;
			e.replayFilter = r ? function() {
				return pt(r(), t());
			} : t, e.justLimit = n && !r;
		}
		function q(e, t) {
			if (e.isPrimKey) return t.primaryKey;
			var n = t.getIndexByKeyPath(e.index);
			if (n) return n;
			throw new A.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
		}
		function Ot(e, t, n) {
			var r = q(e, t.schema);
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
		function kt(e, t, n, r) {
			var i, a, o = e.replayFilter ? pt(e.filter, e.replayFilter()) : e.filter;
			return e.or ? (i = {}, a = function(e, n, r) {
				var a, s;
				o && !o(n, r, function(e) {
					return n.stop(e);
				}, function(e) {
					return n.fail(e);
				}) || ((s = "" + (a = n.primaryKey)) == "[object ArrayBuffer]" && (s = "" + new Uint8Array(a)), l(i, s)) || (i[s] = !0, t(e, n, r));
			}, Promise.all([e.or._iterate(a, n), At(Ot(e, r, n), e.algorithm, a, !e.keysOnly && e.valueMapper)])) : At(Ot(e, r, n), pt(e.algorithm, o), t, !e.keysOnly && e.valueMapper);
		}
		function At(e, t, n, r) {
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
						e.stop(t), n = j;
					}, function(t) {
						e.fail(t), n = j;
					}) || i(e.value, e, function(e) {
						return n = e;
					}), n();
				});
			});
		}
		J.prototype._read = function(e, t) {
			var n = this._ctx;
			return n.error ? n.table._trans(null, U.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
		}, J.prototype._write = function(e) {
			var t = this._ctx;
			return t.error ? t.table._trans(null, U.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
		}, J.prototype._addAlgorithm = function(e) {
			var t = this._ctx;
			t.algorithm = pt(t.algorithm, e);
		}, J.prototype._iterate = function(e, t) {
			return kt(this._ctx, e, t, this._ctx.table.core);
		}, J.prototype.clone = function(e) {
			var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
			return e && o(n, e), t._ctx = n, t;
		}, J.prototype.raw = function() {
			return this._ctx.valueMapper = null, this;
		}, J.prototype.each = function(e) {
			var t = this._ctx;
			return this._read(function(n) {
				return kt(t, e, n, t.table.core);
			});
		}, J.prototype.count = function(e) {
			var t = this;
			return this._read(function(e) {
				var n, r = t._ctx, i = r.table.core;
				return Tt(r, !0) ? i.count({
					trans: e,
					query: {
						index: q(r, i.schema),
						range: r.range
					}
				}).then(function(e) {
					return Math.min(e, r.limit);
				}) : (n = 0, kt(r, function() {
					return ++n, !1;
				}, e, i).then(function() {
					return n;
				}));
			}).then(e);
		}, J.prototype.sortBy = function(e, t) {
			var n = e.split(".").reverse(), r = n[0], i = n.length - 1;
			function a(e, t) {
				return t ? a(e[n[t]], t - 1) : e[r];
			}
			var o = this._ctx.dir === "next" ? 1 : -1;
			function s(e, t) {
				return W(a(e, i), a(t, i)) * o;
			}
			return this.toArray(function(e) {
				return e.slice().sort(s);
			}).then(t);
		}, J.prototype.toArray = function(e) {
			var t = this;
			return this._read(function(e) {
				var n, r, i, a = t._ctx;
				return Tt(a, !0) && 0 < a.limit ? (n = a.valueMapper, r = q(a, a.table.core.schema), a.table.core.query({
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
				})) : (i = [], kt(a, function(e) {
					return i.push(e);
				}, e, a.table.core).then(function() {
					return i;
				}));
			}, e);
		}, J.prototype.offset = function(e) {
			var t = this._ctx;
			return e <= 0 || (t.offset += e, Tt(t) ? Dt(t, function() {
				var t = e;
				return function(e, n) {
					return t === 0 || (t === 1 ? --t : n(function() {
						e.advance(t), t = 0;
					}), !1);
				};
			}) : Dt(t, function() {
				var t = e;
				return function() {
					return --t < 0;
				};
			})), this;
		}, J.prototype.limit = function(e) {
			return this._ctx.limit = Math.min(this._ctx.limit, e), Dt(this._ctx, function() {
				var t = e;
				return function(e, n, r) {
					return --t <= 0 && n(r), 0 <= t;
				};
			}, !0), this;
		}, J.prototype.until = function(e, t) {
			return Et(this._ctx, function(n, r, i) {
				return !e(n.value) || (r(i), t);
			}), this;
		}, J.prototype.first = function(e) {
			return this.limit(1).toArray(function(e) {
				return e[0];
			}).then(e);
		}, J.prototype.last = function(e) {
			return this.reverse().first(e);
		}, J.prototype.filter = function(e) {
			var t;
			return Et(this._ctx, function(t) {
				return e(t.value);
			}), (t = this._ctx).isMatch = pt(t.isMatch, e), this;
		}, J.prototype.and = function(e) {
			return this.filter(e);
		}, J.prototype.or = function(e) {
			return new this.db.WhereClause(this._ctx.table, e, this);
		}, J.prototype.reverse = function() {
			return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
		}, J.prototype.desc = function() {
			return this.reverse();
		}, J.prototype.eachKey = function(e) {
			var t = this._ctx;
			return t.keysOnly = !t.isMatch, this.each(function(t, n) {
				e(n.key, n);
			});
		}, J.prototype.eachUniqueKey = function(e) {
			return this._ctx.unique = "unique", this.eachKey(e);
		}, J.prototype.eachPrimaryKey = function(e) {
			var t = this._ctx;
			return t.keysOnly = !t.isMatch, this.each(function(t, n) {
				e(n.primaryKey, n);
			});
		}, J.prototype.keys = function(e) {
			var t = this._ctx, n = (t.keysOnly = !t.isMatch, []);
			return this.each(function(e, t) {
				n.push(t.key);
			}).then(function() {
				return n;
			}).then(e);
		}, J.prototype.primaryKeys = function(e) {
			var t = this._ctx;
			if (Tt(t, !0) && 0 < t.limit) return this._read(function(e) {
				var n = q(t, t.table.core.schema);
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
		}, J.prototype.uniqueKeys = function(e) {
			return this._ctx.unique = "unique", this.keys(e);
		}, J.prototype.firstKey = function(e) {
			return this.limit(1).keys(function(e) {
				return e[0];
			}).then(e);
		}, J.prototype.lastKey = function(e) {
			return this.reverse().firstKey(e);
		}, J.prototype.distinct = function() {
			var e, t = this._ctx, t = t.index && t.table.schema.idxByName[t.index];
			return t && t.multi && (e = {}, Et(this._ctx, function(t) {
				var t = t.primaryKey.toString(), n = l(e, t);
				return e[t] = !0, !n;
			})), this;
		}, J.prototype.modify = function(e) {
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
					return xt(t, e);
				}, s = n.table.core, c = s.schema.primaryKey, l = c.outbound, u = c.extractKey, d = 200, c = t.db._options.modifyChunkSize, f = (c && (d = typeof c == "object" ? c[s.name] || c["*"] || 200 : c), []), p = 0, m = [], h = e === Mt;
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
									value: T(S),
									primKey: t[f + x]
								};
								!1 !== o.call(C, C.value, C) && (C.value == null ? b.push(t[f + x]) : l || W(u(S), u(C.value)) === 0 ? (v.push(C.value), l && y.push(t[f + x])) : (b.push(t[f + x]), _.push(C.value)));
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
									return G(n.table, b, e);
								}).then(function(e) {
									return a(b.length, e);
								});
							}).then(function() {
								return t.length > f + p && i(f + d);
							});
						});
					}
					var c = Tt(n) && n.limit === Infinity && (typeof e != "function" || h) && {
						index: n.index,
						range: n.range
					};
					return i(0).then(function() {
						if (0 < f.length) throw new k("Error modifying one or more objects", f, p, m);
						return t.length;
					});
				});
			});
		}, J.prototype.delete = function() {
			var e = this._ctx, t = e.range;
			return !Tt(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(Mt) : this._write(function(n) {
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
						if (e) throw new k("Could not delete some values", Object.keys(n).map(function(e) {
							return n[e];
						}), t - e);
						return t - e;
					});
				});
			});
		};
		var jt = J;
		function J() {}
		var Mt = function(e, t) {
			return t.value = null;
		};
		function Nt(e, t) {
			return e < t ? -1 : e === t ? 0 : 1;
		}
		function Pt(e, t) {
			return t < e ? -1 : e === t ? 0 : 1;
		}
		function Y(e, t, n) {
			return e = e instanceof zt ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
		}
		function Ft(e) {
			return new e.Collection(e, function() {
				return Rt("");
			}).limit(0);
		}
		function It(e, t, n, r) {
			var i, a, o, s, c, l, u, d = n.length;
			if (!n.every(function(e) {
				return typeof e == "string";
			})) return Y(e, lt);
			function f(e) {
				i = e === "next" ? function(e) {
					return e.toUpperCase();
				} : function(e) {
					return e.toLowerCase();
				}, a = e === "next" ? function(e) {
					return e.toLowerCase();
				} : function(e) {
					return e.toUpperCase();
				}, o = e === "next" ? Nt : Pt;
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
				return Lt(s[0], c[d - 1] + r);
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
		function Lt(e, t, n, r) {
			return {
				type: 2,
				lower: e,
				upper: t,
				lowerOpen: n,
				upperOpen: r
			};
		}
		function Rt(e) {
			return {
				type: 1,
				lower: e,
				upper: e
			};
		}
		Object.defineProperty(X.prototype, "Collection", {
			get: function() {
				return this._ctx.table.db.Collection;
			},
			enumerable: !1,
			configurable: !0
		}), X.prototype.between = function(e, t, n, r) {
			n = !1 !== n, r = !0 === r;
			try {
				return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? Ft(this) : new this.Collection(this, function() {
					return Lt(e, t, !n, !r);
				});
			} catch {
				return Y(this, ct);
			}
		}, X.prototype.equals = function(e) {
			return e == null ? Y(this, ct) : new this.Collection(this, function() {
				return Rt(e);
			});
		}, X.prototype.above = function(e) {
			return e == null ? Y(this, ct) : new this.Collection(this, function() {
				return Lt(e, void 0, !0);
			});
		}, X.prototype.aboveOrEqual = function(e) {
			return e == null ? Y(this, ct) : new this.Collection(this, function() {
				return Lt(e, void 0, !1);
			});
		}, X.prototype.below = function(e) {
			return e == null ? Y(this, ct) : new this.Collection(this, function() {
				return Lt(void 0, e, !1, !0);
			});
		}, X.prototype.belowOrEqual = function(e) {
			return e == null ? Y(this, ct) : new this.Collection(this, function() {
				return Lt(void 0, e);
			});
		}, X.prototype.startsWith = function(e) {
			return typeof e == "string" ? this.between(e, e + st, !0, !0) : Y(this, lt);
		}, X.prototype.startsWithIgnoreCase = function(e) {
			return e === "" ? this.startsWith(e) : It(this, function(e, t) {
				return e.indexOf(t[0]) === 0;
			}, [e], st);
		}, X.prototype.equalsIgnoreCase = function(e) {
			return It(this, function(e, t) {
				return e === t[0];
			}, [e], "");
		}, X.prototype.anyOfIgnoreCase = function() {
			var e = D.apply(se, arguments);
			return e.length === 0 ? Ft(this) : It(this, function(e, t) {
				return t.indexOf(e) !== -1;
			}, e, "");
		}, X.prototype.startsWithAnyOfIgnoreCase = function() {
			var e = D.apply(se, arguments);
			return e.length === 0 ? Ft(this) : It(this, function(e, t) {
				return t.some(function(t) {
					return e.indexOf(t) === 0;
				});
			}, e, st);
		}, X.prototype.anyOf = function() {
			var e, t, n = this, r = D.apply(se, arguments), i = this._cmp;
			try {
				r.sort(i);
			} catch {
				return Y(this, ct);
			}
			return r.length === 0 ? Ft(this) : ((e = new this.Collection(this, function() {
				return Lt(r[0], r[r.length - 1]);
			}))._ondirectionchange = function(e) {
				i = e === "next" ? n._ascending : n._descending, r.sort(i);
			}, t = 0, e._addAlgorithm(function(e, n, a) {
				for (var o = e.key; 0 < i(o, r[t]);) if (++t === r.length) return n(a), !1;
				return i(o, r[t]) === 0 || (n(function() {
					e.continue(r[t]);
				}), !1);
			}), e);
		}, X.prototype.notEqual = function(e) {
			return this.inAnyRange([[-Infinity, e], [e, this.db._maxKey]], {
				includeLowers: !1,
				includeUppers: !1
			});
		}, X.prototype.noneOf = function() {
			var e = D.apply(se, arguments);
			if (e.length === 0) return new this.Collection(this);
			try {
				e.sort(this._ascending);
			} catch {
				return Y(this, ct);
			}
			var t = e.reduce(function(e, t) {
				return e ? e.concat([[e[e.length - 1][1], t]]) : [[-Infinity, t]];
			}, null);
			return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, {
				includeLowers: !1,
				includeUppers: !1
			});
		}, X.prototype.inAnyRange = function(e, t) {
			var n = this, r = this._cmp, i = this._ascending, a = this._descending, o = this._min, s = this._max;
			if (e.length === 0) return Ft(this);
			if (!e.every(function(e) {
				return e[0] !== void 0 && e[1] !== void 0 && i(e[0], e[1]) <= 0;
			})) return Y(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", A.InvalidArgument);
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
				return Y(this, ct);
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
				return Lt(u[0][0], u[u.length - 1][1], !c, !l);
			});
			return t._ondirectionchange = function(e) {
				d = e === "next" ? (g = m, i) : (g = h, a), u.sort(f);
			}, t._addAlgorithm(function(e, t, r) {
				for (var a, o = e.key; g(o);) if (++p === u.length) return t(r), !1;
				return !m(a = o) && !h(a) || (n._cmp(o, u[p][1]) === 0 || n._cmp(o, u[p][0]) === 0 || t(function() {
					d === i ? e.continue(u[p][0]) : e.continue(u[p][1]);
				}), !1);
			}), t;
		}, X.prototype.startsWithAnyOf = function() {
			var e = D.apply(se, arguments);
			return e.every(function(e) {
				return typeof e == "string";
			}) ? e.length === 0 ? Ft(this) : this.inAnyRange(e.map(function(e) {
				return [e, e + st];
			})) : Y(this, "startsWithAnyOf() only works with strings");
		};
		var zt = X;
		function X() {}
		function Bt(e) {
			return I(function(t) {
				return Vt(t), e(t.target.error), !1;
			});
		}
		function Vt(e) {
			e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
		}
		var Ht = "storagemutated", Ut = "x-storagemutated-1", Wt = Ct(null, Ht), Gt = (Kt.prototype._lock = function() {
			return v(!P.global), ++this._reculock, this._reculock !== 1 || P.global || (P.lockOwnerFor = this), this;
		}, Kt.prototype._unlock = function() {
			if (v(!P.global), --this._reculock == 0) for (P.global || (P.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked();) {
				var e = this._blockedFuncs.shift();
				try {
					it(e[1], e[0]);
				} catch {}
			}
			return this;
		}, Kt.prototype._locked = function() {
			return this._reculock && P.lockOwnerFor !== this;
		}, Kt.prototype.create = function(e) {
			var t = this;
			if (this.mode) {
				var n = this.db.idbdb, r = this.db._state.dbOpenError;
				if (v(!this.idbtrans), !e && !n) switch (r && r.name) {
					case "DatabaseClosedError": throw new A.DatabaseClosed(r);
					case "MissingAPIError": throw new A.MissingAPI(r.message, r);
					default: throw new A.OpenFailed(r);
				}
				if (!this.active) throw new A.TransactionInactive();
				v(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = I(function(n) {
					Vt(n), t._reject(e.error);
				}), e.onabort = I(function(n) {
					Vt(n), t.active && t._reject(new A.Abort(e.error)), t.active = !1, t.on("abort").fire(n);
				}), e.oncomplete = I(function() {
					t.active = !1, t._resolve(), "mutatedParts" in e && Wt.storagemutated.fire(e.mutatedParts);
				});
			}
			return this;
		}, Kt.prototype._promise = function(e, t, n) {
			var r, i = this;
			return e === "readwrite" && this.mode !== "readwrite" ? U(new A.ReadOnly("Transaction is readonly")) : this.active ? this._locked() ? new F(function(r, a) {
				i._blockedFuncs.push([function() {
					i._promise(e, t, n).then(r, a);
				}, P]);
			}) : n ? V(function() {
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
			}))._lib = !0, r) : U(new A.TransactionInactive());
		}, Kt.prototype._root = function() {
			return this.parent ? this.parent._root() : this;
		}, Kt.prototype.waitFor = function(e) {
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
		}, Kt.prototype.abort = function() {
			this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new A.Abort()));
		}, Kt.prototype.table = function(e) {
			var t = this._memoizedTables ||= {};
			if (l(t, e)) return t[e];
			var n = this.schema[e];
			if (n) return (n = new this.db.Table(e, n, this)).core = this.db.core.table(e), t[e] = n;
			throw new A.NotFound("Table " + e + " not part of transaction");
		}, Kt);
		function Kt() {}
		function qt(e, t, n, r, i, a, o, s) {
			return {
				name: e,
				keyPath: t,
				unique: n,
				multi: r,
				auto: i,
				compound: a,
				src: (n && !o ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + Jt(t),
				type: s
			};
		}
		function Jt(e) {
			return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
		}
		function Yt(e, t, n) {
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
		var Xt = function(e) {
			try {
				return e.only([[]]), Xt = function() {
					return [[]];
				}, [[]];
			} catch {
				return Xt = function() {
					return st;
				}, st;
			}
		};
		function Zt(e) {
			return e == null ? function() {} : typeof e == "string" ? (t = e).split(".").length === 1 ? function(e) {
				return e[t];
			} : function(e) {
				return b(e, t);
			} : function(t) {
				return b(t, e);
			};
			var t;
		}
		function Qt(e) {
			return [].slice.call(e);
		}
		var $t = 0;
		function en(e) {
			return e == null ? ":id" : typeof e == "string" ? e : `[${e.join("+")}]`;
		}
		function tn(e, t, n) {
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
								++_, Vt(e);
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
							}, f = Bt(r), p = 0; p < s; ++p) n[p] != null && ((a = o.get(n[p]))._pos = p, a.onsuccess = d, a.onerror = f, ++l);
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
							}, a.onerror = Bt(r);
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
							}, s.onerror = Bt(o)) : t && h === "next" ? ((s = f ? d.getAll(_, g) : d.getAllKeys(_, g)).onsuccess = function(e) {
								return a({ result: e.target.result });
							}, s.onerror = Bt(o)) : (c = 0, l = !f && "openKeyCursor" in d ? d.openKeyCursor(_, h) : d.openCursor(_, h), u = [], l.onsuccess = function() {
								var e = l.result;
								return !e || (u.push(f ? e.value : e.primaryKey), ++c === p) ? a({ result: u }) : void e.continue();
							}, l.onerror = Bt(o));
						});
					}),
					openCursor: function(e) {
						var t = e.trans, n = e.values, a = e.query, o = e.reverse, s = e.unique;
						return new Promise(function(e, c) {
							e = I(e);
							var l = a.index, u = a.range, d = t.objectStore(i), d = l.isPrimaryKey ? d : d.index(l.name), l = o ? s ? "prevunique" : "prev" : s ? "nextunique" : "next", f = !n && "openKeyCursor" in d ? d.openKeyCursor(r(u), l) : d.openCursor(r(u), l);
							f.onerror = Bt(c), f.onsuccess = I(function(n) {
								var r, i, a, o, s = f.result;
								s ? (s.___id = ++$t, s.done = !1, r = s.continue.bind(s), i = (i = s.continuePrimaryKey) && i.bind(s), a = s.advance.bind(s), o = function() {
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
										e = I(e), f.onerror = Bt(t), s.fail = t, s.stop = function(t) {
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
							}), c.onerror = Bt(t);
						});
					}
				};
			}
			o = n, s = Qt((n = e).objectStoreNames), u = 0 < s.length ? o.objectStore(s[0]) : {};
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
								extractKey: Zt(t)
							},
							indexes: Qt(e.indexNames).map(function(t) {
								return e.index(t);
							}).map(function(e) {
								var t = e.name, n = e.unique, r = e.multiEntry, e = e.keyPath, t = {
									name: t,
									compound: a(e),
									keyPath: e,
									unique: n,
									multiEntry: r,
									extractKey: Zt(e)
								};
								return i[en(e)] = t;
							}),
							getIndexByKeyPath: function(e) {
								return i[en(e)];
							}
						};
						return i[":id"] = r.primaryKey, t != null && (i[en(t)] = r.primaryKey), r;
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
				MAX_KEY: Xt(t),
				schema: s
			};
		}
		function nn(e, n, r, i) {
			return r = r.IDBKeyRange, n = tn(n, r, i), { dbcore: e.dbcore.reduce(function(e, n) {
				return n = n.create, t(t({}, e), n(e));
			}, n) };
		}
		function rn(e, t) {
			var n = t.db, n = nn(e._middlewares, n, e._deps, t);
			e.core = n.dbcore, e.tables.forEach(function(t) {
				var n = t.name;
				e.core.schema.tables.some(function(e) {
					return e.name === n;
				}) && (t.core = e.core.table(n), e[n] instanceof e.Table) && (e[n].core = t.core);
			});
		}
		function an(e, t, n, r) {
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
		function on(e, t) {
			t.forEach(function(t) {
				for (var n in t) t[n] instanceof e.Table && delete t[n];
			});
		}
		function sn(e, t) {
			return e._cfg.version - t._cfg.version;
		}
		function cn(e, t, n, r) {
			var a = e._dbSchema, o = (n.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = Yt("$meta", gn("")[0], []), e._storeNames.push("$meta")), e._createTransaction("readwrite", e._storeNames, a)), s = (o.create(n), o._completion.catch(r), o._reject.bind(o)), c = P.transless || P;
			V(function() {
				if (P.trans = o, P.transless = c, t !== 0) return rn(e, n), l = t, ((r = o).storeNames.includes("$meta") ? r.table("$meta").get("version").then(function(e) {
					return e ?? l;
				}) : F.resolve(l)).then(function(t) {
					var r = e, a = t, s = o, c = n, l = [], t = r._versions, u = r._dbSchema = mn(0, r.idbdb, c);
					return (t = t.filter(function(e) {
						return e._cfg.version >= a;
					})).length === 0 ? F.resolve() : (t.forEach(function(e) {
						l.push(function() {
							var t, n, o, l = u, d = e._cfg.dbschema, f = (hn(r, l, c), hn(r, d, c), u = r._dbSchema = d, un(l, d)), p = (f.add.forEach(function(e) {
								dn(c, e[0], e[1].primKey, e[1].indexes);
							}), f.change.forEach(function(e) {
								if (e.recreate) throw new A.Upgrade("Not yet support for changing primary key");
								var t = c.objectStore(e.name);
								e.add.forEach(function(e) {
									return pn(t, e);
								}), e.change.forEach(function(e) {
									t.deleteIndex(e.name), pn(t, e);
								}), e.del.forEach(function(e) {
									return t.deleteIndex(e);
								});
							}), e._cfg.contentUpgrade);
							if (p && e._cfg.version > a) return rn(r, c), s._memoizedTables = {}, t = S(d), f.del.forEach(function(e) {
								t[e] = l[e];
							}), on(r, [r.Transaction.prototype]), an(r, [r.Transaction.prototype], i(t), t), s.schema = t, (n = ce(p)) && $e(), d = F.follow(function() {
								var e;
								(o = p(s)) && n && (e = H.bind(null, null), o.then(e, e));
							}), o && typeof o.then == "function" ? F.resolve(o) : d.then(function() {
								return o;
							});
						}), l.push(function(t) {
							var n = e._cfg.dbschema, i = t;
							[].slice.call(i.db.objectStoreNames).forEach(function(e) {
								return n[e] == null && i.db.deleteObjectStore(e);
							}), on(r, [r.Transaction.prototype]), an(r, [r.Transaction.prototype], r._storeNames, r._dbSchema), s.schema = r._dbSchema;
						}), l.push(function(t) {
							r.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(r.idbdb.version / 10) === e._cfg.version ? (r.idbdb.deleteObjectStore("$meta"), delete r._dbSchema.$meta, r._storeNames = r._storeNames.filter(function(e) {
								return e !== "$meta";
							})) : t.objectStore("$meta").put(e._cfg.version, "version"));
						});
					}), function e() {
						return l.length ? F.resolve(l.shift()(s.idbtrans)).then(e) : F.resolve();
					}().then(function() {
						fn(u, c);
					}));
				}).catch(s);
				var r, l;
				i(a).forEach(function(e) {
					dn(n, e, a[e].primKey, a[e].indexes);
				}), rn(e, n), F.follow(function() {
					return e.on.populate.fire(o);
				}).catch(s);
			});
		}
		function ln(e, t) {
			fn(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
			var n = mn(0, e.idbdb, t);
			hn(e, e._dbSchema, t);
			for (var r = 0, i = un(n, e._dbSchema).change; r < i.length; r++) {
				var a = ((e) => {
					if (e.change.length || e.recreate) return console.warn(`Unable to patch indexes of table ${e.name} because it has changes on the type of index or primary key.`), { value: void 0 };
					var n = t.objectStore(e.name);
					e.add.forEach(function(t) {
						Ce && console.debug(`Dexie upgrade patch: Creating missing index ${e.name}.${t.src}`), pn(n, t);
					});
				})(i[r]);
				if (typeof a == "object") return a.value;
			}
		}
		function un(e, t) {
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
		function dn(e, t, n, r) {
			var i = e.db.createObjectStore(t, n.keyPath ? {
				keyPath: n.keyPath,
				autoIncrement: n.auto
			} : { autoIncrement: n.auto });
			r.forEach(function(e) {
				return pn(i, e);
			});
		}
		function fn(e, t) {
			i(e).forEach(function(n) {
				t.db.objectStoreNames.contains(n) || (Ce && console.debug("Dexie: Creating missing table", n), dn(t, n, e[n].primKey, e[n].indexes));
			});
		}
		function pn(e, t) {
			e.createIndex(t.name, t.keyPath, {
				unique: t.unique,
				multiEntry: t.multi
			});
		}
		function mn(e, t, n) {
			var r = {};
			return g(t.objectStoreNames, 0).forEach(function(e) {
				for (var t = n.objectStore(e), i = qt(Jt(c = t.keyPath), c || "", !0, !1, !!t.autoIncrement, c && typeof c != "string", !0), a = [], o = 0; o < t.indexNames.length; ++o) {
					var s = t.index(t.indexNames[o]), c = s.keyPath, s = qt(s.name, c, !!s.unique, !!s.multiEntry, !1, c && typeof c != "string", !1);
					a.push(s);
				}
				r[e] = Yt(e, i, a);
			}), r;
		}
		function hn(e, t, n) {
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
		function gn(e) {
			return e.split(",").map(function(e, t) {
				var n = e.split(":"), r = (r = n[1])?.trim(), n = (e = n[0].trim()).replace(/([&*]|\+\+)/g, ""), i = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
				return qt(n, i || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), a(i), t === 0, r);
			});
		}
		vn.prototype._createTableSchema = Yt, vn.prototype._parseIndexSyntax = gn, vn.prototype._parseStoresSpec = function(e, t) {
			var n = this;
			i(e).forEach(function(r) {
				if (e[r] !== null) {
					var i = n._parseIndexSyntax(e[r]), a = i.shift();
					if (!a) throw new A.Schema("Invalid schema for table " + r + ": " + e[r]);
					if (a.unique = !0, a.multi) throw new A.Schema("Primary key cannot be multiEntry*");
					i.forEach(function(e) {
						if (e.auto) throw new A.Schema("Only primary key can be marked as autoIncrement (++)");
						if (!e.keyPath) throw new A.Schema("Index must have a name and cannot be an empty string");
					}), a = n._createTableSchema(r, a, i), t[r] = a;
				}
			});
		}, vn.prototype.stores = function(e) {
			var t = this.db, e = (this._cfg.storesSource = this._cfg.storesSource ? o(this._cfg.storesSource, e) : e, t._versions), n = {}, r = {};
			return e.forEach(function(e) {
				o(n, e._cfg.storesSource), r = e._cfg.dbschema = {}, e._parseStoresSpec(n, r);
			}), t._dbSchema = r, on(t, [
				t._allTables,
				t,
				t.Transaction.prototype
			]), an(t, [
				t._allTables,
				t,
				t.Transaction.prototype,
				this._cfg.tables
			], i(r), r), t._storeNames = i(r), this;
		}, vn.prototype.upgrade = function(e) {
			return this._cfg.contentUpgrade = Se(this._cfg.contentUpgrade || j, e), this;
		};
		var _n = vn;
		function vn() {}
		var yn = (() => {
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
		function bn(e, t) {
			var n = e._dbNamesDB;
			return n || (n = e._dbNamesDB = new ir(ut, {
				addons: [],
				indexedDB: e,
				IDBKeyRange: t
			})).version(1).stores({ dbnames: "name" }), n.table("dbnames");
		}
		function xn(e) {
			return e && typeof e.databases == "function";
		}
		function Sn(e) {
			return V(function() {
				return P.letThrough = !0, e();
			});
		}
		function Cn(e) {
			return !("from" in e);
		}
		var Z = function(e, t) {
			var n;
			if (!this) return n = new Z(), e && "d" in e && o(n, e), n;
			o(this, arguments.length ? {
				d: 1,
				from: e,
				to: 1 < arguments.length ? t : e
			} : { d: 0 });
		};
		function wn(e, t, n) {
			var r = W(t, n);
			if (!isNaN(r)) {
				if (0 < r) throw RangeError();
				if (Cn(e)) return o(e, {
					from: t,
					to: n,
					d: 1
				});
				var r = e.l, i = e.r;
				if (W(n, e.from) < 0) return r ? wn(r, t, n) : e.l = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, On(e);
				if (0 < W(t, e.to)) return i ? wn(i, t, n) : e.r = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, On(e);
				W(t, e.from) < 0 && (e.from = t, e.l = null, e.d = i ? i.d + 1 : 1), 0 < W(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), t = !e.r, r && !e.l && Tn(e, r), i && t && Tn(e, i);
			}
		}
		function Tn(e, t) {
			Cn(t) || function e(t, n) {
				var r = n.from, i = n.l, a = n.r;
				wn(t, r, n.to), i && e(t, i), a && e(t, a);
			}(e, t);
		}
		function En(e, t) {
			var n = Dn(t), r = n.next();
			if (!r.done) for (var i = r.value, a = Dn(e), o = a.next(i.from), s = o.value; !r.done && !o.done;) {
				if (W(s.from, i.to) <= 0 && 0 <= W(s.to, i.from)) return !0;
				W(i.from, s.from) < 0 ? i = (r = n.next(s.from)).value : s = (o = a.next(i.from)).value;
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
					case 0: if (t.s = 1, n) for (; t.n.l && W(e, t.n.from) < 0;) t = {
						up: t,
						n: t.n.l,
						s: 1
					};
					else for (; t.n.l;) t = {
						up: t,
						n: t.n.l,
						s: 1
					};
					case 1: if (t.s = 2, !n || W(e, t.n.to) <= 0) return {
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
			var n, r, i, a = ((a = e.r)?.d || 0) - ((a = e.l)?.d || 0), a = 1 < a ? "r" : a < -1 ? "l" : "";
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
		u(Z.prototype, ((O = {
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
				return t && W(t.from, e) <= 0 && 0 <= W(t.to, e);
			}
		})[ae] = function() {
			return Dn(this);
		}, O));
		var Mn = {}, Nn = {}, Pn = !1;
		function Fn(e) {
			An(Nn, e), Pn || (Pn = !0, setTimeout(function() {
				Pn = !1, In(Nn, !(Nn = {}));
			}, 0));
		}
		function In(e, t) {
			t === void 0 && (t = !1);
			var n = /* @__PURE__ */ new Set();
			if (e.all) for (var r = 0, i = Object.values(Mn); r < i.length; r++) Ln(s = i[r], e, n, t);
			else for (var a in e) {
				var o, s, a = /^idb\:\/\/(.*)\/(.*)\//.exec(a);
				a && (o = a[1], a = a[2], s = Mn[`idb://${o}/${a}`]) && Ln(s, e, n, t);
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
				if (t.openCanceller !== r) throw new A.DatabaseClosed("db.open() was cancelled");
			}
			function c() {
				return new F(function(r, l) {
					if (s(), !n) throw new A.MissingAPI();
					var u = e.name, p = t.autoSchema || !a ? n.open(u) : n.open(u, a);
					if (!p) throw new A.MissingAPI();
					p.onerror = Bt(l), p.onblocked = I(e._fireOnBlocked), p.onupgradeneeded = I(function(r) {
						var i;
						d = p.transaction, t.autoSchema && !e._options.allowEmptyDB ? (p.onerror = Vt, d.abort(), p.result.close(), (i = n.deleteDatabase(u)).onsuccess = i.onerror = I(function() {
							l(new A.NoSuchDatabase(`Database ${u} doesnt exist`));
						})) : (d.onerror = Bt(l), i = r.oldVersion > 2 ** 62 ? 0 : r.oldVersion, f = i < 1, e.idbdb = p.result, o && ln(e, d), cn(e, i / 10, d, l));
					}, l), p.onsuccess = I(function() {
						d = null;
						var n, s, l, m, h, _, v = e.idbdb = p.result, y = g(v.objectStoreNames);
						if (0 < y.length) try {
							var b = v.transaction((h = y).length === 1 ? h[0] : h, "readonly");
							if (t.autoSchema) _ = v, m = b, (l = e).verno = _.version / 10, m = l._dbSchema = mn(0, _, m), l._storeNames = g(_.objectStoreNames, 0), an(l, [l._allTables], i(m), m);
							else if (hn(e, e._dbSchema, b), s = b, ((s = un(mn(0, (n = e).idbdb, s), n._dbSchema)).add.length || s.change.some(function(e) {
								return e.add.length || e.change.length;
							})) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), v.close(), a = v.version + 1, o = !0, r(c());
							rn(e, b);
						} catch {}
						yn.add(e), v.onversionchange = I(function(n) {
							t.vcFired = !0, e.on("versionchange").fire(n);
						}), v.onclose = I(function() {
							e.close({ disableAutoOpen: !1 });
						}), f && (y = e._deps, h = u, xn(_ = y.indexedDB) || h === ut || bn(_, y.IDBKeyRange).put({ name: h }).catch(j)), r();
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
				return s(), t.onReadyBeingFired = [], F.resolve(Sn(function() {
					return e.on.ready.fire(e.vip);
				})).then(function n() {
					var r;
					if (0 < t.onReadyBeingFired.length) return r = t.onReadyBeingFired.reduce(Se, j), t.onReadyBeingFired = [], F.resolve(Sn(function() {
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
				return r === t.openCanceller && e._close(), U(n);
			}).finally(function() {
				t.openComplete = !0, u();
			}).then(function() {
				var t;
				return f && (t = {}, e.tables.forEach(function(n) {
					n.schema.indexes.forEach(function(r) {
						r.name && (t[`idb://${e.name}/${n.name}/${r.name}`] = new Z(-Infinity, [[[]]]));
					}), t[`idb://${e.name}/${n.name}/`] = t[`idb://${e.name}/${n.name}/:dels`] = new Z(-Infinity, [[[]]]);
				}), Wt(Ht).fire(t), In(t, !0)), e;
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
					var t = e(t), i = t.value;
					return t.done ? i : i && typeof i.then == "function" ? i.then(n, r) : a(i) ? Promise.all(i).then(n, r) : n(i);
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
					var r = e.table(n), n = r.schema, i = Object.create(null), a = [];
					function o(e, n, r) {
						var s = en(e), c = i[s] = i[s] || [], l = e == null ? 0 : typeof e == "string" ? 1 : e.length, u = 0 < n, s = t(t({}, r), {
							name: u ? `${s}(virtual-from:${r.name})` : r.name,
							lowLevelIndex: r,
							isVirtual: u,
							keyTail: n,
							keyLength: l,
							extractKey: Zt(e),
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
								lower: Bn(r.lower, r.lowerOpen ? e.MAX_KEY : e.MIN_KEY, i),
								lowerOpen: !0,
								upper: Bn(r.upper, r.upperOpen ? e.MIN_KEY : e.MAX_KEY, i),
								upperOpen: !0
							})
						} }) : n;
					}
					return t(t({}, r), {
						schema: t(t({}, n), {
							primaryKey: s,
							indexes: a,
							getIndexByKeyPath: function(e) {
								return (e = i[en(e)]) && e[0];
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
										r == null ? t.unique ? n.continue(n.key.slice(0, a).concat(t.reverse ? e.MIN_KEY : e.MAX_KEY, i)) : n.continue() : n.continue(Bn(r, t.reverse ? e.MAX_KEY : e.MIN_KEY, i));
									} },
									continuePrimaryKey: { value: function(t, r) {
										n.continuePrimaryKey(Bn(t, e.MAX_KEY, i), r);
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
		function Hn(e, t, n, r) {
			return n ||= {}, r ||= "", i(e).forEach(function(i) {
				var a, o, s;
				l(t, i) ? (a = e[i], o = t[i], typeof a == "object" && typeof o == "object" && a && o ? (s = ie(a)) === ie(o) ? s === "Object" ? Hn(a, o, n, r + i + ".") : a !== o && (n[r + i] = t[i]) : n[r + i] = t[i] : a !== o && (n[r + i] = t[i])) : n[r + i] = void 0;
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
						var o = P.trans, s = o.table(r).hook, c = s.deleting, u = s.creating, d = s.updating;
						switch (e.type) {
							case "add":
								if (u.fire === j) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "put":
								if (u.fire === j && d.fire === j) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "delete":
								if (c.fire === j) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "deleteRange":
								if (c.fire === j) break;
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
							var r, o, s, f = P.trans, p = e.keys || Un(a, e);
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
							throw Error("Keys missing");
						}
					} });
				} });
			}
		};
		function Gn(e, t, n) {
			try {
				if (!t || t.keys.length < e.length) return null;
				for (var r = [], i = 0, a = 0; i < t.keys.length && a < e.length; ++i) W(t.keys[i], e[a]) === 0 && (r.push(n ? T(t.values[i]) : t.values[i]), ++a);
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
							var t;
							return e.cache ? (t = Gn(e.keys, e.trans._cache, e.cache === "clone")) ? F.resolve(t) : r.getMany(e).then(function(t) {
								return e.trans._cache = {
									keys: e.keys,
									values: e.cache === "clone" ? T(t) : t
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
				var n = e.schema.name, r = new Z(e.MIN_KEY, e.MAX_KEY);
				return t(t({}, e), {
					transaction: function(t, n, r) {
						if (P.subscr && n !== "readonly") throw new A.ReadOnly(`Readwrite transaction in liveQuery context. Querier source: ${P.querier}`);
						return e.transaction(t, n, r);
					},
					table: function(o) {
						function s(t) {
							var t = t.query;
							return [t.index, new Z((t = t.range).lower ?? e.MIN_KEY, t.upper ?? e.MAX_KEY)];
						}
						var c = e.table(o), l = c.schema, u = l.primaryKey, d = l.indexes, f = u.extractKey, p = u.outbound, m = u.autoIncrement && d.filter(function(e) {
							return e.compound && e.keyPath.includes(u.keyPath);
						}), h = t(t({}, c), { mutate: function(t) {
							function i(e) {
								return e = `idb://${n}/${o}/${e}`, h[e] || (h[e] = new Z());
							}
							var s, d, f, p = t.trans, h = t.mutatedParts ||= {}, g = i(""), _ = i(":dels"), v = t.type, y = t.type === "deleteRange" ? [t.range] : t.type === "delete" ? [t.keys] : t.values.length < 50 ? [Un(u, t).filter(function(e) {
								return e;
							}), t.values] : [], b = y[0], y = y[1], x = t.trans._cache;
							return a(b) ? (g.addKeys(b), (v = v === "delete" || b.length === y.length ? Gn(b, x) : null) || _.addKeys(b), (v || y) && (s = i, d = v, f = y, l.indexes.forEach(function(e) {
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
									W(i, t) !== 0 && (i != null && r(i), t != null) && r(t);
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
								})), p.mutatedParts = An(p.mutatedParts || {}, h), e;
							});
						} }), g = {
							get: function(e) {
								return [u, new Z(e.key)];
							},
							getMany: function(e) {
								return [u, new Z().addKeys(e.keys)];
							},
							count: s,
							query: s,
							openCursor: s
						};
						return i(g).forEach(function(e) {
							h[e] = function(i) {
								var a = P.subscr, s = !!a, l = qn(P, c) && Jn(e, i) ? i.obsSet = {} : a;
								if (s) {
									var u, a = function(e) {
										return e = `idb://${n}/${o}/${e}`, l[e] || (l[e] = new Z());
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
		function Xn(e, n, r) {
			var i;
			return r.numFailures === 0 ? n : n.type === "deleteRange" || (i = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1, r.numFailures === i) ? null : (i = t({}, n), a(i.keys) && (i.keys = i.keys.filter(function(e, t) {
				return !(t in r.failures);
			})), "values" in i && a(i.values) && (i.values = i.values.filter(function(e, t) {
				return !(t in r.failures);
			})), i);
		}
		function Zn(e, t) {
			return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < W(n, r.lower) : 0 <= W(n, r.lower))) && (n = e, (r = t).upper === void 0 || (r.upperOpen ? W(n, r.upper) < 0 : W(n, r.upper) <= 0));
			var n, r;
		}
		function Qn(e, t, n, r, i, o) {
			var s, c, l, u, d, f, p;
			return !n || n.length === 0 || (s = t.query.index, c = s.multiEntry, l = t.query.range, u = r.schema.primaryKey.extractKey, d = s.extractKey, f = (s.lowLevelIndex || s).extractKey, (r = n.reduce(function(e, n) {
				var r = e, i = [];
				if (n.type === "add" || n.type === "put") for (var o = new Z(), s = n.values.length - 1; 0 <= s; --s) {
					var f, p = n.values[s], m = u(p);
					!o.hasKey(m) && (f = d(p), c && a(f) ? f.some(function(e) {
						return Zn(e, l);
					}) : Zn(f, l)) && (o.addKey(m), i.push(p));
				}
				switch (n.type) {
					case "add":
						var h = new Z().addKeys(t.values ? e.map(function(e) {
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
						var g = new Z().addKeys(n.values.map(function(e) {
							return u(e);
						}));
						r = e.filter(function(e) {
							return !g.hasKey(t.values ? u(e) : e);
						}).concat(t.values ? i : i.map(function(e) {
							return u(e);
						}));
						break;
					case "delete":
						var _ = new Z().addKeys(n.keys);
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
			}, e)) === e) ? e : (p = function(e, t) {
				return W(f(e), f(t)) || W(u(e), u(t));
			}, r.sort(t.direction === "prev" || t.direction === "prevunique" ? function(e, t) {
				return p(t, e);
			} : p), t.limit && t.limit < Infinity && (r.length > t.limit ? r.length = t.limit : e.length === t.limit && r.length < t.limit && (i.dirty = !0)), o ? Object.freeze(r) : r);
		}
		function $n(e, t) {
			return W(e.lower, t.lower) === 0 && W(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
		}
		function er(e, t) {
			return ((e, t, n, r) => {
				if (e === void 0) return t === void 0 ? 0 : -1;
				if (t === void 0) return 1;
				if ((e = W(e, t)) === 0) {
					if (n && r) return 0;
					if (n) return 1;
					if (r) return -1;
				}
				return e;
			})(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= ((e, t, n, r) => {
				if (e === void 0) return t === void 0 ? 0 : 1;
				if (t === void 0) return -1;
				if ((e = W(e, t)) === 0) {
					if (n && r) return 0;
					if (n) return -1;
					if (r) return 1;
				}
				return e;
			})(e.upper, t.upper, e.upperOpen, t.upperOpen);
		}
		function tr(e, t, n, r) {
			e.subscribers.add(n), r.addEventListener("abort", function() {
				var r, i;
				e.subscribers.delete(n), e.subscribers.size === 0 && (r = e, i = t, setTimeout(function() {
					r.subscribers.size === 0 && oe(i, r);
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
						return r === "readwrite" && (i = (a = new AbortController()).signal, s.addEventListener("abort", (o = function(i) {
							return function() {
								if (a.abort(), r === "readwrite") {
									for (var o = /* @__PURE__ */ new Set(), c = 0, l = t; c < l.length; c++) {
										var u = l[c], d = Mn[`idb://${n}/${u}`];
										if (d) {
											var f = e.table(u), p = d.optimisticOps.filter(function(e) {
												return e.trans === s;
											});
											if (s._explicit && i && s.mutatedParts) for (var m = 0, h = Object.values(d.queries.query); m < h.length; m++) for (var g = 0, _ = (b = h[m]).slice(); g < _.length; g++) jn((x = _[g]).obsSet, s.mutatedParts) && (oe(b, x), x.subscribers.forEach(function(e) {
												return o.add(e);
											}));
											else if (0 < p.length) {
												d.optimisticOps = d.optimisticOps.filter(function(e) {
													return e.trans !== s;
												});
												for (var v = 0, y = Object.values(d.queries.query); v < y.length; v++) for (var b, x, S, C = 0, ee = (b = y[v]).slice(); C < ee.length; C++) (x = ee[C]).res != null && s.mutatedParts && (i && !x.dirty ? (S = Object.isFrozen(x.res), S = Qn(x.res, x.req, p, f, x, S), x.dirty ? (oe(b, x), x.subscribers.forEach(function(e) {
													return o.add(e);
												})) : S !== x.res && (x.res = S, x.promise = F.resolve({ result: S }))) : (x.dirty && oe(b, x), x.subscribers.forEach(function(e) {
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
								var o, s = P.trans;
								return !a.outbound && s.db._options.cache !== "disabled" && !s.explicit && s.idbtrans.mode === "readwrite" && (o = Mn[`idb://${n}/${r}`]) ? (s = i.mutate(e), e.type !== "add" && e.type !== "put" || !(50 <= e.values.length || Un(a, e).some(function(e) {
									return e == null;
								})) ? (o.optimisticOps.push(e), e.mutatedParts && Fn(e.mutatedParts), s.then(function(t) {
									0 < t.numFailures && (oe(o.optimisticOps, e), (t = Xn(0, e, t)) && o.optimisticOps.push(t), e.mutatedParts) && Fn(e.mutatedParts);
								}), s.catch(function() {
									oe(o.optimisticOps, e), e.mutatedParts && Fn(e.mutatedParts);
								})) : s.then(function(n) {
									var r = Xn(0, t(t({}, e), { values: e.values.map(function(e, r) {
										var i;
										return n.failures[r] ? e : (x(i = (i = a.keyPath) != null && i.includes(".") ? T(e) : t({}, e), a.keyPath, n.results[r]), i);
									}) }), n);
									o.optimisticOps.push(r), queueMicrotask(function() {
										return e.mutatedParts && Fn(e.mutatedParts);
									});
								}), s) : i.mutate(e);
							},
							query: function(e) {
								var t, a, o, s, c, l, u;
								return qn(P, i) && Jn("query", e) ? (t = (o = P.trans)?.db._options.cache === "immutable", a = (o = P).requery, o = o.signal, l = ((e, t, n, r) => {
									var i = Mn[`idb://${e}/${t}`];
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
										return e.req.limit === r.limit && e.req.values === r.values && (e.req.direction ?? "next") === o && $n(e.req.query.range, r.query.range);
									});
									return s ? [
										s,
										!0,
										i,
										a
									] : [
										a.find(function(e) {
											return ("limit" in e.req ? e.req.limit : Infinity) >= r.limit && (e.req.direction ?? "next") === o && (!r.values || e.req.values) && er(e.req.query.range, r.query.range);
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
									return c && u && oe(c, u), Promise.reject(e);
								}), u = {
									obsSet: e.obsSet,
									promise: l,
									subscribers: /* @__PURE__ */ new Set(),
									type: "query",
									req: e,
									dirty: !1
								}, c ? c.push(u) : (c = [u], (s ||= Mn[`idb://${n}/${r}`] = {
									queries: {
										query: {},
										count: {}
									},
									objs: /* @__PURE__ */ new Map(),
									optimisticOps: [],
									unsignaledParts: {}
								}).queries.query[e.query.index.name || ""] = c)), tr(u, c, a, o), u.promise.then(function(n) {
									return n = Qn(n.result, e, s?.optimisticOps, i, u, t), { result: t ? n : T(n) };
								})) : i.query(e);
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
		Q.prototype.version = function(e) {
			if (isNaN(e) || e < .1) throw new A.Type("Given version is not a positive number");
			if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new A.Schema("Cannot add version when database is open");
			this.verno = Math.max(this.verno, e);
			var t = this._versions, n = t.filter(function(t) {
				return t._cfg.version === e;
			})[0];
			return n || (n = new this.Version(e), t.push(n), t.sort(sn), n.stores({}), this._state.autoSchema = !1), n;
		}, Q.prototype._whenReady = function(e) {
			var t = this;
			return this.idbdb && (this._state.openComplete || P.letThrough || this._vip) ? e() : new F(function(e, n) {
				if (t._state.openComplete) return n(new A.DatabaseClosed(t._state.dbOpenError));
				if (!t._state.isBeingOpened) {
					if (!t._state.autoOpen) return void n(new A.DatabaseClosed());
					t.open().catch(j);
				}
				t._state.dbReadyPromise.then(e, n);
			}).then(e);
		}, Q.prototype.use = function(e) {
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
		}, Q.prototype.unuse = function(e) {
			var t = e.stack, n = e.name, r = e.create;
			return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(e) {
				return r ? e.create !== r : !!n && e.name !== n;
			})), this;
		}, Q.prototype.open = function() {
			var e = this;
			return it(N, function() {
				return Rn(e);
			});
		}, Q.prototype._close = function() {
			this.on.close.fire(new CustomEvent("close"));
			var e = this._state;
			if (yn.remove(this), this.idbdb) {
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
		}, Q.prototype.close = function(e) {
			var e = (e === void 0 ? { disableAutoOpen: !0 } : e).disableAutoOpen, t = this._state;
			e ? (t.isBeingOpened && t.cancelOpen(new A.DatabaseClosed()), this._close(), t.autoOpen = !1, t.dbOpenError = new A.DatabaseClosed()) : (this._close(), t.autoOpen = this._options.autoOpen || t.isBeingOpened, t.openComplete = !1, t.dbOpenError = null);
		}, Q.prototype.delete = function(e) {
			var t = this, n = (e === void 0 && (e = { disableAutoOpen: !0 }), 0 < arguments.length && typeof arguments[0] != "object"), r = this._state;
			return new F(function(i, a) {
				function o() {
					t.close(e);
					var n = t._deps.indexedDB.deleteDatabase(t.name);
					n.onsuccess = I(function() {
						var e = t._deps, n = t.name, r;
						xn(r = e.indexedDB) || n === ut || bn(r, e.IDBKeyRange).delete(n).catch(j), i();
					}), n.onerror = Bt(a), n.onblocked = t._fireOnBlocked;
				}
				if (n) throw new A.InvalidArgument("Invalid closeOptions argument to db.delete()");
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
			var e = function(e, t, n) {
				var r = arguments.length;
				if (r < 2) throw new A.InvalidArgument("Too few arguments");
				for (var i = Array(r - 1); --r;) i[r - 1] = arguments[r];
				return n = i.pop(), [
					e,
					ee(i),
					n
				];
			}.apply(this, arguments);
			return this._transaction.apply(this, e);
		}, Q.prototype._transaction = function(e, t, n) {
			var r, i, a = this, o = P.trans, s = (o && o.db === this && e.indexOf("!") === -1 || (o = null), e.indexOf("?") !== -1);
			e = e.replace("!", "").replace("?", "");
			try {
				if (i = t.map(function(e) {
					if (e = e instanceof a.Table ? e.name : e, typeof e != "string") throw TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
					return e;
				}), e == "r" || e === dt) r = dt;
				else {
					if (e != "rw" && e != ft) throw new A.InvalidArgument("Invalid transaction mode: " + e);
					r = ft;
				}
				if (o) {
					if (o.mode === dt && r === ft) {
						if (!s) throw new A.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
						o = null;
					}
					o && i.forEach(function(e) {
						if (o && o.storeNames.indexOf(e) === -1) {
							if (!s) throw new A.SubTransaction("Table " + e + " not included in parent transaction.");
							o = null;
						}
					}), s && o && !o.active && (o = null);
				}
			} catch (e) {
				return o ? o._promise(null, function(t, n) {
					n(e);
				}) : U(e);
			}
			var c = function e(t, n, r, i, a) {
				return F.resolve().then(function() {
					var o = P.transless || P, s = t._createTransaction(n, r, t._dbSchema, i), o = (s.explicit = !0, {
						trans: s,
						transless: o
					});
					if (i) s.idbtrans = i.idbtrans;
					else try {
						s.create(), s.idbtrans._explicit = !0, t._state.PR1398_maxLoop = 3;
					} catch (i) {
						return i.name === pe.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
							return e(t, n, r, null, a);
						})) : U(i);
					}
					var c, l = ce(a), o = (l && $e(), F.follow(function() {
						var e;
						(c = a.call(s, s)) && (l ? (e = H.bind(null, null), c.then(e, e)) : typeof c.next == "function" && typeof c.throw == "function" && (c = zn(c)));
					}, o));
					return (c && typeof c.then == "function" ? F.resolve(c).then(function(e) {
						return s.active ? e : U(new A.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
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
			}.bind(null, this, r, i, o, n);
			return o ? o._promise(r, c, "lock") : P.trans ? it(P.transless, function() {
				return a._whenReady(c);
			}) : this._whenReady(c);
		}, Q.prototype.table = function(e) {
			if (l(this._allTables, e)) return this._allTables[e];
			throw new A.InvalidTable(`Table ${e} does not exist`);
		};
		var ir = Q;
		function Q(e, n) {
			var r, i, a, o, s, c = this, l = (this._middlewares = {}, this.verno = 0, Q.dependencies), l = (this._options = n = t({
				addons: Q.addons,
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
				dbReadyResolve: j,
				dbReadyPromise: null,
				cancelOpen: j,
				openCanceller: null,
				autoSchema: !0,
				PR1398_maxLoop: 3,
				autoOpen: n.autoOpen
			}), d = (u.dbReadyPromise = new F(function(e) {
				u.dbReadyResolve = e;
			}), u.openCanceller = new F(function(e, t) {
				u.cancelOpen = t;
			}), this._state = u, this.name = e, this.on = Ct(this, "populate", "blocked", "versionchange", "close", { ready: [Se, j] }), this.once = function(e, t) {
				var n = function() {
					var r = [...arguments];
					c.on(e).unsubscribe(n), t.apply(c, r);
				};
				return c.on(e, n);
			}, this.on.ready.subscribe = _(this.on.ready.subscribe, function(e) {
				return function(t, n) {
					Q.vip(function() {
						var r, i = c._state;
						i.openComplete ? (i.dbOpenError || F.resolve().then(t), n && e(t)) : i.onReadyBeingFired ? (i.onReadyBeingFired.push(t), n && e(t)) : (e(t), r = c, n || e(function e() {
							r.on.ready.unsubscribe(t), r.on.ready.unsubscribe(e);
						}));
					});
				};
			}), this.Collection = (r = this, wt(jt.prototype, function(e, t) {
				this.db = r;
				var n = mt, i = null;
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
					valueMapper: a === M ? null : a
				};
			})), this.Table = (i = this, wt(St.prototype, function(e, t, n) {
				this.db = i, this._tx = n, this.name = e, this.schema = t, this.hook = i._allTables[e] ? i._allTables[e].hook : Ct(null, {
					creating: [ve, j],
					reading: [ge, M],
					updating: [be, j],
					deleting: [ye, j]
				});
			})), this.Transaction = (a = this, wt(Gt.prototype, function(e, t, n, r, i) {
				var o = this;
				e !== "readonly" && t.forEach(function(e) {
					e = (e = n[e])?.yProps, e && (t = t.concat(e.map(function(e) {
						return e.updatesTable;
					})));
				}), this.db = a, this.mode = e, this.storeNames = t, this.schema = n, this.chromeTransactionDurability = r, this.idbtrans = null, this.on = Ct(this, "complete", "error", "abort"), this.parent = i || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new F(function(e, t) {
					o._resolve = e, o._reject = t;
				}), this._completion.then(function() {
					o.active = !1, o.on.complete.fire();
				}, function(e) {
					var t = o.active;
					return o.active = !1, o.on.error.fire(e), o.parent ? o.parent._reject(e) : t && o.idbtrans && o.idbtrans.abort(), U(e);
				});
			})), this.Version = (o = this, wt(_n.prototype, function(e) {
				this.db = o, this._cfg = {
					version: e,
					storesSource: null,
					dbschema: {},
					tables: {},
					contentUpgrade: null
				};
			})), this.WhereClause = (s = this, wt(zt.prototype, function(e, t, n) {
				if (this.db = s, this._ctx = {
					table: e,
					index: t === ":id" ? null : t,
					or: n
				}, this._cmp = this._ascending = W, this._descending = function(e, t) {
					return W(t, e);
				}, this._max = function(e, t) {
					return 0 < W(e, t) ? e : t;
				}, this._min = function(e, t) {
					return W(e, t) < 0 ? e : t;
				}, this._IDBKeyRange = s._deps.IDBKeyRange, !this._IDBKeyRange) throw new A.MissingAPI();
			})), this.on("versionchange", function(e) {
				0 < e.newVersion ? console.warn(`Another connection wants to upgrade database '${c.name}'. Closing db now to resume the upgrade.`) : console.warn(`Another connection wants to delete database '${c.name}'. Closing db now to resume the delete request.`), c.close({ disableAutoOpen: !1 });
			}), this.on("blocked", function(e) {
				!e.newVersion || e.newVersion < e.oldVersion ? console.warn(`Dexie.delete('${c.name}') was blocked`) : console.warn(`Upgrade '${c.name}' blocked by other connection holding version ${e.oldVersion / 10}`);
			}), this._maxKey = Xt(n.IDBKeyRange), this._createTransaction = function(e, t, n, r) {
				return new c.Transaction(e, t, n, c._options.chromeTransactionDurability, r);
			}, this._fireOnBlocked = function(e) {
				c.on("blocked").fire(e), yn.toArray().filter(function(e) {
					return e.name === c.name && e !== c && !e._state.vcFired;
				}).map(function(t) {
					return t.on("versionchange").fire(e);
				});
			}, this.use(Kn), this.use(nr), this.use(Yn), this.use(Vn), this.use(Wn), new Proxy(this, { get: function(e, t, n) {
				var r;
				return t === "_vip" || (t === "table" ? function(e) {
					return rr(c.table(e), d);
				} : (r = Reflect.get(e, t, n)) instanceof St ? rr(r, d) : t === "tables" ? r.map(function(e) {
					return rr(e, d);
				}) : t === "_createTransaction" ? function() {
					return rr(r.apply(this, arguments), d);
				} : r);
			} }));
			this.vip = d, l.forEach(function(e) {
				return e(c);
			});
		}
		var ar, Oe = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", or = (sr.prototype.subscribe = function(e, t, n) {
			return this._subscribe(e && typeof e != "function" ? e : {
				next: e,
				error: t,
				complete: n
			});
		}, sr.prototype[Oe] = function() {
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
				var i = ce(e), a, o = !1, s = {}, c = {}, l = {
					get closed() {
						return o;
					},
					unsubscribe: function() {
						o || (o = !0, a && a.abort(), u && Wt.storagemutated.unsubscribe(p));
					}
				}, u = (r.start && r.start(l), !1), d = function() {
					return ot(m);
				};
				function f() {
					return jn(c, s);
				}
				var p = function(e) {
					An(s, e), f() && d();
				}, m = function() {
					var l, m, h;
					!o && ar.indexedDB && (s = {}, l = {}, a && a.abort(), a = new AbortController(), h = ((t) => {
						var n = qe();
						try {
							i && $e();
							var r = V(e, t);
							return r = i ? r.finally(H) : r;
						} finally {
							n && Je();
						}
					})(m = {
						subscr: l,
						signal: a.signal,
						requery: d,
						querier: e,
						trans: null
					}), u ||= (Wt.storagemutated.subscribe(p), !0), Promise.resolve(h).then(function(e) {
						n = !0, t = e, o || m.signal.aborted || (f() || (c = l, f()) ? d() : (s = {}, ot(function() {
							return !o && r.next && r.next(e);
						})));
					}, function(e) {
						n = !1, ["DatabaseClosedError", "AbortError"].includes(e?.name) || o || ot(function() {
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
		var lr = ir;
		function ur(e) {
			var t = fr;
			try {
				fr = !0, Wt.storagemutated.fire(e), In(e, !0);
			} finally {
				fr = t;
			}
		}
		u(lr, t(t({}, w), {
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
							return e !== ut;
						});
					}) : bn(n, t).toCollection().primaryKeys()).then(e);
				} catch {
					return U(new A.MissingAPI());
				}
				var t, n;
			},
			defineClass: function() {
				return function(e) {
					o(this, e);
				};
			},
			ignoreTransaction: function(e) {
				return P.trans ? it(P.transless || N, e) : e();
			},
			vip: Sn,
			async: function(e) {
				return function() {
					try {
						var t = zn(e.apply(this, arguments));
						return t && typeof t.then == "function" ? t : F.resolve(t);
					} catch (e) {
						return U(e);
					}
				};
			},
			spawn: function(e, t, n) {
				try {
					var r = zn(e.apply(n, t || []));
					return r && typeof r.then == "function" ? r : F.resolve(r);
				} catch (e) {
					return U(e);
				}
			},
			currentTransaction: { get: function() {
				return P.trans || null;
			} },
			waitFor: function(e, t) {
				return e = F.resolve(typeof e == "function" ? lr.ignoreTransaction(e) : e).timeout(t || 6e4), P.trans ? P.trans.waitFor(e) : e;
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
			Events: Ct,
			on: Wt,
			liveQuery: cr,
			extendObservabilitySet: An,
			getByKeyPath: b,
			setByKeyPath: x,
			delByKeyPath: function(e, t) {
				typeof t == "string" ? x(e, t, void 0) : "length" in t && [].map.call(t, function(t) {
					x(e, t, void 0);
				});
			},
			shallowClone: S,
			deepClone: T,
			getObjectDiff: Hn,
			cmp: W,
			asap: y,
			minKey: -Infinity,
			addons: [],
			connections: { get: yn.toArray },
			errnames: pe,
			dependencies: ar,
			cache: Mn,
			semVer: "4.4.6",
			version: "4.4.6".split(".").map(function(e) {
				return parseInt(e);
			}).reduce(function(e, t, n) {
				return e + t / 10 ** (2 * n);
			})
		})), lr.maxKey = Xt(lr.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Wt(Ht, function(e) {
			fr ||= (e = new CustomEvent(Ut, { detail: e }), fr = !0, dispatchEvent(e), !1);
		}), addEventListener(Ut, function(e) {
			e = e.detail, fr || ur(e);
		}));
		var dr, fr = !1, pr = function() {};
		return typeof BroadcastChannel < "u" && ((pr = function() {
			(dr = new BroadcastChannel(Ut)).onmessage = function(e) {
				return e.data && ur(e.data);
			};
		})(), typeof dr.unref == "function" && dr.unref(), Wt(Ht, function(e) {
			fr || dr.postMessage(e);
		})), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
			if (!ir.disableBfCache && e.persisted) {
				Ce && console.debug("Dexie: handling persisted pagehide"), dr?.close();
				for (var t = 0, n = yn.toArray(); t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
			}
		}), addEventListener("pageshow", function(e) {
			!ir.disableBfCache && e.persisted && (Ce && console.debug("Dexie: handling persisted pageshow"), pr(), ur({ all: new Z(-Infinity, [[]]) }));
		})), F.rejectionMapper = function(e, t) {
			return !e || e instanceof ue || e instanceof TypeError || e instanceof SyntaxError || !e.name || !he[e.name] ? e : (t = new he[e.name](t || e.message, e), "stack" in e && f(t, "stack", { get: function() {
				return this.inner.stack;
			} }), t);
		}, we(Ce), t(ir, Object.freeze({
			__proto__: null,
			DEFAULT_MAX_CONNECTIONS: 1e3,
			Dexie: ir,
			Entity: gt,
			PropModification: yt,
			RangeSet: Z,
			add: function(e) {
				return new yt({ add: e });
			},
			cmp: W,
			default: ir,
			liveQuery: cr,
			mergeRanges: Tn,
			rangesOverlap: En,
			remove: function(e) {
				return new yt({ remove: e });
			},
			replacePrefix: function(e, t) {
				return new yt({ replacePrefix: [e, t] });
			}
		}), { default: ir }), ir;
	});
})))(), 1), mi = Symbol.for("Dexie"), hi = globalThis[mi] || (globalThis[mi] = pi.default);
if (pi.default.semVer !== hi.semVer) throw Error(`Two different versions of Dexie loaded in the same app: ${pi.default.semVer} and ${hi.semVer}`);
var { liveQuery: gi, mergeRanges: _i, rangesOverlap: vi, RangeSet: yi, cmp: bi, Entity: xi, PropModification: Si, replacePrefix: Ci, add: wi, remove: Ti, DexieYProvider: Ei } = hi;
function Di(e) {
	return `${fi}${e}`;
}
function Oi(e) {
	return `${di}${e.storeName}:${e.writeId}`;
}
var ki = rr(), Ai = er(), ji = /* @__PURE__ */ new Map();
function Mi(e) {
	let { name: t, run: n } = e, r = (ji.get(t) ?? Promise.resolve()).then(n), i = r.catch(nr);
	return ji.set(t, i), i.then(function() {
		ji.get(t) === i && ji.delete(t);
	}), r;
}
function Ni(e) {
	e();
}
async function Pi(e) {
	let { storeName: t, document: n } = e;
	if (!navigator.locks || n.writeId === void 0) return !1;
	let r = Oi({
		storeName: t,
		writeId: n.writeId
	});
	return navigator.locks.request(r, { ifAvailable: !0 }, (e) => e === null);
}
function Fi(e) {
	let t = [e.autoIncrement ? `++${e.primaryKey}` : e.primaryKey];
	for (let n of e.indexes) t.push(n);
	for (let n of e.compoundIndexes) t.push(`[${n.join("+")}]`);
	for (let n of e.arrayIndexes) t.push(`*${n}`);
	return t.join(", ");
}
var Ii = {
	primaryKey: "id",
	indexes: ["tagName"],
	compoundIndexes: [],
	arrayIndexes: []
}, Li = class {
	constructor(e, t) {
		this.schemaVersion = 1, this.knownDocuments = /* @__PURE__ */ new Map(), this.schemaLock = Promise.resolve(), this.stale = !1, this.recordCounts = /* @__PURE__ */ new Map(), this.closed = !1, this.closings = 0, this.operations = ir(), this.openHoldEnded = Promise.resolve(), at({ project: e }), this.name = e, this.dexieRecordSchema = Fi(t?.recordSchema ?? Ii), this.perf = t?.perf ?? Nt, this.runtime = t?.runtime, this.db = new hi(e);
	}
	async open() {
		let e = this.closings;
		for (await this.operations.whenIdle(); this.destroying;) await this.destroying.catch(nr);
		this.closings !== e && W({ storeName: this.name }), this.closed = !1, await this.holdOpen(), await this.tracked(async () => {
			await this.reloadFromPersisted(), await ci({
				store: this.ownSweepTarget(),
				isRunning: (e) => Pi({
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
			return e?.then(Ni), t;
		});
		Ai.markClosing({
			name: this.name,
			until: n
		}), await n;
	}
	async destroy() {
		for (; this.destroying;) await this.destroying.catch(nr);
		let e = this.destroyOnceIdle();
		this.destroying = e;
		try {
			await e;
		} finally {
			this.destroying === e && (this.destroying = void 0);
		}
	}
	async destroyOnceIdle() {
		await this.operations.whenIdle(), await Mi({
			name: this.name,
			run: this.destroyIfAlone.bind(this)
		});
	}
	async destroyIfAlone() {
		let e = this.closings, t = this.openHold !== void 0;
		this.letOpenHoldGo(), await this.openHoldEnded, await Ai.settled({ name: this.name }), (navigator.locks ? await this.deleteWhenAlone() : await this.deleteWhenAloneInRealm()) || (t && this.closings === e && await this.holdOpen(), gt({ storeName: this.name }));
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
		return ki.others({
			name: this.name,
			connection: this
		}) > 0 ? !1 : this.deleteDatabase();
	}
	async deleteDatabase() {
		return this.db.isOpen() && (this.db.close(), await Ri()), await hi.delete(this.name), this.knownDocuments.clear(), this.recordCounts.clear(), this.stale = !0, !0;
	}
	async holdOpen() {
		this.openHold ??= this.askOpenHold(), await this.openHold;
	}
	askOpenHold() {
		let e = this.name;
		if (!navigator.locks) return ki.markOpen({
			name: e,
			connection: this
		}), Promise.resolve(this.countClosed.bind(this));
		let t = Promise.resolve(), n = new Promise(function(n) {
			t = navigator.locks.request(`${ui}${e}`, { mode: "shared" }, function() {
				return new Promise(function(e) {
					n(e);
				});
			});
		});
		return this.openHoldEnded = t, n;
	}
	countClosed() {
		ki.markClosed({
			name: this.name,
			connection: this
		});
	}
	letOpenHoldGo() {
		let e = this.openHold;
		this.openHold = void 0, e?.then(Ni);
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
			let { file: t, options: n, writeId: r = crypto.randomUUID(), onProgress: i, signal: a } = e, o = ii({
				runtime: this.runtime,
				storeName: this.name,
				operation: "import"
			}), s = () => $r({
				store: this.ownImportTarget(),
				runtime: o,
				file: t,
				options: n,
				writeId: r
			}, {
				onProgress: i,
				signal: a
			});
			return navigator.locks ? navigator.locks.request(Oi({
				storeName: this.name,
				writeId: r
			}), s) : s();
		});
	}
	async exportFile(e) {
		return this.operation(async () => {
			let { documentId: t, options: n, onProgress: r, signal: i } = e, a = ii({
				runtime: this.runtime,
				storeName: this.name,
				operation: "export"
			});
			return zn({
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
			return await this.ensureCurrentSchema(), ar({
				documents: n,
				writeId: t,
				committed: await this.db.table(z).filter((e) => e.writeId === t).first() !== void 0
			});
		});
	}
	async bulkWrite(e, t) {
		return this.operation(() => this.bulkWriteUnguarded(e, t));
	}
	async commit(e) {
		return this.operation(async () => {
			try {
				let { documentId: t, writeId: n = crypto.randomUUID(), creates: r, updates: i, deletes: a, onProgress: o } = e, s = await this.writeTable(t), c = await this.db.table(R).get(t);
				c && Ui(c).status === "importing" && ft({
					documentId: t,
					what: "a commit"
				}), vt({ writeId: n });
				try {
					await this.db.transaction("rw", s, this.db.table(z), this.db.table(B), async () => {
						let e = await Vi({
							table: s,
							updates: i,
							documentId: t
						}), o = br({ records: r });
						o.length > 0 && await zi({
							table: s,
							creates: o,
							documentId: t
						});
						let c = br({ records: i });
						if (c.length > 0) try {
							await s.bulkPut(c);
						} catch (e) {
							T("STORE_BULK_UPDATE_FAILED", {
								detail: e instanceof Error ? e.message : String(e),
								cause: e instanceof Error ? e : void 0
							});
						}
						let l = a.length > 0 ? await s.bulkGet(a) : [];
						if (a.length > 0) try {
							await s.bulkDelete(a);
						} catch (e) {
							T("STORE_DELETE_FAILED", {
								detail: e instanceof Error ? e.message : String(e),
								cause: e instanceof Error ? e : void 0
							});
						}
						let u = await this.getHead(t);
						await this.db.table(z).where({ documentId: t }).filter((e) => e.sequenceNumber > u).modify(function(e) {
							e.sequenceNumber = -1, e.operations = {
								creates: [],
								updates: [],
								deletes: []
							};
						});
						let d = u + 1, f = {
							documentId: t,
							sequenceNumber: d,
							timestamp: Date.now(),
							writeId: n,
							operations: {
								creates: o,
								updates: c.map((t, n) => ({
									before: e[n],
									after: t
								})),
								deletes: l.filter(Boolean)
							}
						};
						await this.db.table(z).add(f), await this.setHead(t, d), await this.bumpVersion(t);
					}), Cr({
						onProgress: o,
						parts: [
							r.length,
							i.length,
							a.length
						]
					});
				} catch (e) {
					if (f(e)) throw e;
					T("STORE_COMMIT_FAILED", {
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
		return this.operation(async () => {
			try {
				await this.ensureCurrentSchema();
				let t = await this.getHead(e);
				if (t === 0) return;
				let n = await this.db.table(z).where({
					documentId: e,
					sequenceNumber: t
				}).first();
				if (!n) return;
				let r = this.db.table(this.resolveTableName(e));
				await this.db.transaction("rw", r, this.db.table(B), async () => {
					let { creates: i, updates: a, deletes: o } = n.operations;
					o.length > 0 && await r.bulkPut(o), a.length > 0 && await r.bulkPut(a.map((e) => e.before)), i.length > 0 && await r.bulkDelete(i.map((e) => e.id)), await this.setHead(e, t - 1), await this.bumpVersion(e);
				});
			} finally {
				this.recordCounts.delete(e);
			}
		});
	}
	async redo(e) {
		return this.operation(async () => {
			try {
				await this.ensureCurrentSchema();
				let t = await this.getHead(e) + 1, n = await this.db.table(z).where({
					documentId: e,
					sequenceNumber: t
				}).first();
				if (!n) return;
				let r = this.db.table(this.resolveTableName(e));
				await this.db.transaction("rw", r, this.db.table(B), async () => {
					let { creates: i, updates: a, deletes: o } = n.operations;
					i.length > 0 && await r.bulkPut(i), a.length > 0 && await r.bulkPut(a.map((e) => e.after)), o.length > 0 && await r.bulkDelete(o.map((e) => e.id)), await this.setHead(e, t), await this.bumpVersion(e);
				});
			} finally {
				this.recordCounts.delete(e);
			}
		});
	}
	async getHistoryStatus(e) {
		return this.operation(async () => {
			await this.ensureCurrentSchema();
			let t = await this.getHead(e), n = await this.db.table(z).where({
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
		return this.operation(async () => (await this.ensureCurrentSchema(), (await this.db.table(z).where({ documentId: e }).sortBy("sequenceNumber")).filter((e) => e.sequenceNumber !== -1)));
	}
	async addBlob(e, t) {
		return this.operation(async () => {
			await this.ensureCurrentSchema(), Hi(this.knownDocuments, e.documentId);
			let n = G({ value: e }), r = this.db.table(H(e.documentId));
			await this.db.transaction("rw", this.db.table(V), r, async () => {
				await this.db.table(V).put(n), await r.put({
					id: e.id,
					data: t
				});
			});
		});
	}
	async getBlob(e) {
		return this.operation(async () => {
			await this.ensureCurrentSchema();
			let t = await this.db.table(V).get(e);
			if (!t) return;
			let n = await this.db.table(H(t.documentId)).get(e);
			if (n) return {
				entry: t,
				data: n.data
			};
		});
	}
	async getBlobsByDocument(e) {
		return this.operation(async () => (await this.ensureCurrentSchema(), (await this.db.table(V).toArray()).filter((t) => t.attachedTo.some((t) => t.documentId === e))));
	}
	async getBlobsByRecord(e, t) {
		return this.operation(async () => (await this.ensureCurrentSchema(), (await this.db.table(V).toArray()).filter((n) => n.attachedTo.some((n) => n.documentId === e && n.recordRef === t))));
	}
	async getStandaloneBlobs() {
		return this.operation(async () => (await this.ensureCurrentSchema(), (await this.db.table(V).toArray()).filter((e) => e.attachedTo.length === 0)));
	}
	async attachBlob(e, t) {
		return this.operation(async () => {
			await this.ensureCurrentSchema();
			let n = await this.db.table(V).get(e);
			n || T("STORE_BLOB_NOT_FOUND", { detail: `Blob "${e}" not found` });
			let r = G({ value: t });
			if (n.attachedTo.some((e) => e.documentId === t.documentId && e.recordRef === t.recordRef && e.attribute === t.attribute)) return;
			let i = [...n.attachedTo, r];
			await this.db.table(V).update(e, { attachedTo: i });
		});
	}
	async detachBlob(e, t) {
		return this.operation(async () => {
			await this.ensureCurrentSchema();
			let n = await this.db.table(V).get(e);
			n || T("STORE_BLOB_NOT_FOUND", { detail: `Blob "${e}" not found` });
			let r = n.attachedTo.filter((e) => e.documentId !== t.documentId || e.recordRef !== t.recordRef);
			await this.db.table(V).update(e, { attachedTo: r });
		});
	}
	async removeBlob(e) {
		return this.operation(async () => {
			await this.ensureCurrentSchema();
			let t = await this.db.table(V).get(e);
			if (!t) return;
			let n = this.db.table(H(t.documentId));
			await this.db.transaction("rw", this.db.table(V), n, async () => {
				await n.delete(e), await this.db.table(V).delete(e);
			});
		});
	}
	getDatabaseInstance() {
		return this.db;
	}
	async operation(e) {
		if (this.closed && W({ storeName: this.name }), this.destroying) {
			for (; this.destroying;) await this.destroying.catch(nr);
			this.closed && W({ storeName: this.name });
		}
		return this.openHold === void 0 && await this.holdOpen(), this.closed && W({ storeName: this.name }), this.tracked(e);
	}
	async tracked(e) {
		this.operations.start();
		try {
			return await e();
		} finally {
			this.operations.count === 1 && this.closed && this.db.close(), this.operations.end();
		}
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
			writeSession: (t, n) => this.tracked(() => this.bulkWriteOwnImport({
				documentId: t,
				ops: n,
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
			this.stale && await this.reloadFromPersisted(), this.knownDocuments.has(e.id) && lt({ documentId: e.id });
			let t = G({ value: e });
			await this.assertPlaceFree({ document: t }), this.knownDocuments.set(t.id, t), await this.reopenWithNewSchema();
			try {
				await this.db.transaction("rw", R, async () => {
					await this.db.table("_documents").get(t.id) && lt({ documentId: t.id }), await this.assertPlaceFree({ document: t }), await this.db.table(R).add(t);
				});
			} catch (e) {
				throw f(e)?.key === "DOCUMENT_PATH_TAKEN" ? (this.knownDocuments.delete(t.id), await this.reopenWithNewSchema({ drop: t.id }).catch(() => void 0)) : this.stale = !0, e;
			}
		});
	}
	async assertPlaceFree(e) {
		let { document: t } = e;
		hr({
			document: t,
			documents: t.path === void 0 ? [] : await this.db.table(R).toArray()
		});
	}
	async getDocumentsUnguarded() {
		return await this.ensureCurrentSchema(), (await this.db.table(R).toArray()).map(Ui);
	}
	async getDocumentUnguarded(e) {
		await this.ensureCurrentSchema();
		let t = await this.db.table(R).get(e);
		return t && Ui(t);
	}
	async updateDocumentUnguarded(e, t) {
		let n = G({ value: t });
		await this.ensureCurrentSchema();
		let r = this.db.table(R), i = await this.db.transaction("rw", r, async () => {
			let t = await r.get(e);
			if (!t) return;
			let i = mr({
				document: Ui(t),
				updates: n
			});
			return i.path !== t.path && hr({
				document: i,
				documents: await r.toArray()
			}), await r.put(i), i;
		});
		i && this.knownDocuments.has(e) && this.knownDocuments.set(e, i);
	}
	async markReadyUnguarded(e) {
		let { documentId: t, registered: n } = e;
		await this.ensureCurrentSchema();
		let r = this.db.table(R), i = await this.db.transaction("rw", r, async () => {
			let e = await r.get(t);
			if (!e || !li({
				held: Ui(e),
				registered: n
			})) return;
			let i = {
				...Ui(e),
				status: "ready"
			};
			return await r.put(i), i;
		});
		i || ft({
			documentId: t,
			what: "its ready state"
		}), this.knownDocuments.has(t) && this.knownDocuments.set(t, i);
	}
	async bulkWriteOwnImport(e) {
		let { documentId: t, ops: n, registered: r } = e;
		await this.ensureCurrentSchema();
		let i = await this.db.table(R).get(t);
		i && li({
			held: Ui(i),
			registered: r
		}) || ft({
			documentId: t,
			what: "records"
		}), await this.bulkWriteUnguarded(t, n);
	}
	async removeOwnImport(e) {
		let { documentId: t, registered: n } = e;
		await this.ensureCurrentSchema();
		let r = await this.db.table(R).get(t);
		r && li({
			held: Ui(r),
			registered: n
		}) && await this.removeDocumentUnguarded(t);
	}
	async removeDocumentUnguarded(e) {
		try {
			await this.withSchemaLock(async () => {
				this.stale && await this.reloadFromPersisted();
				let t = [this.resolveTableName(e), H(e)].filter((e) => this.db.tables.some((t) => t.name === e));
				await this.db.transaction("rw", [
					...t,
					V,
					z,
					B,
					R
				], async () => {
					for (let e of t) await this.db.table(e).clear();
					await this.db.table(V).where({ documentId: e }).delete(), await this.db.table(z).where({ documentId: e }).delete(), await this.db.table(B).delete(`head:${e}`), await this.db.table(R).delete(e);
				}), this.knownDocuments.delete(e), await this.reopenWithNewSchema({ drop: e });
			});
		} finally {
			this.recordCounts.delete(e);
		}
	}
	async bulkWriteUnguarded(e, t) {
		try {
			let { updates: n, deletes: r } = t, i = await this.writeTable(e), a = br({ records: t.creates ?? [] });
			await this.db.transaction("rw", i, this.db.table(B), async () => {
				if (a.length > 0 && (this.perf.start("core::store::bulkWrite::add"), await zi({
					table: i,
					creates: a,
					documentId: e
				}), this.perf.stop("core::store::bulkWrite::add")), n?.length) {
					this.perf.start("core::store::bulkWrite::update");
					try {
						let e = await i.bulkGet(n.map((e) => e.recordId)), t = G({ value: n.filter((t, n) => e[n] !== void 0) }), r = /* @__PURE__ */ new Map();
						for (let t of e) t && r.set(t.id, t);
						for (let e of t) {
							let t = r.get(e.recordId);
							t && r.set(e.recordId, xr({
								record: t,
								patch: e
							}));
						}
						await i.bulkPut([...r.values()]);
					} catch (e) {
						if (f(e)) throw e;
						T("STORE_BULK_UPDATE_FAILED", {
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
		await this.db.table(B).put({
			key: `head:${e}`,
			value: t
		});
	}
	async bumpVersion(e) {
		let t = this.db.table(B), n = await t.get(Di(e));
		await t.put({
			key: Di(e),
			value: (n?.value ?? 0) + 1
		});
	}
	async getExportVersion(e) {
		let { documentId: t } = e;
		await this.ensureCurrentSchema();
		let n = this.db.table(R), r = this.db.table(B);
		return this.db.transaction("r", n, r, async () => {
			let e = await n.get(t);
			if (e && Ui(e).status === "ready") return (await r.get(Di(t)))?.value ?? 0;
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
			[R]: Fi(et),
			[z]: Fi(tt),
			[B]: Fi(nt),
			[V]: Fi(rt)
		}, n = Fi(it);
		for (let e of this.knownDocuments.keys()) t[this.resolveTableName(e)] = this.dexieRecordSchema, t[H(e)] = n;
		return e?.drop && (t[this.resolveTableName(e.drop)] = null, t[H(e.drop)] = null), t;
	}
	async reopenWithNewSchema(e) {
		this.perf.start("core::store::reopenSchema");
		try {
			this.db.close(), await Ri(), this.schemaVersion++, this.db = new hi(this.name), this.db.version(this.schemaVersion).stores(this.buildStores(e)), this.attachVersionChangeHandler(), await this.db.open(), await this.db.table(B).put({
				key: "schemaVersion",
				value: this.schemaVersion
			}), this.stale = !1;
		} finally {
			this.perf.stop("core::store::reopenSchema");
		}
	}
	async reloadFromPersisted() {
		this.recordCounts.clear(), this.db.isOpen() && (this.db.close(), await Ri());
		let e = new hi(this.name);
		e.version(1).stores({
			[R]: Fi(et),
			[z]: Fi(tt),
			[B]: Fi(nt),
			[V]: Fi(rt)
		});
		try {
			await e.open();
			let t = (await e.table(R).toArray()).map(Ui), n = await e.table(B).get("schemaVersion");
			e.close(), this.knownDocuments = new Map(t.map((e) => [e.id, e])), this.schemaVersion = n?.value ?? 1;
		} catch {
			e.close();
		}
		this.db = new hi(this.name), this.db.version(this.schemaVersion).stores(this.buildStores()), this.attachVersionChangeHandler(), await this.db.open(), this.stale = !1;
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
		return Qe(e);
	}
	async writeTable(e) {
		let t = await this.recordTable(e);
		return t || ft({
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
function Ri() {
	return new Promise((e) => setTimeout(e, 0));
}
async function zi(e) {
	let { table: t, creates: n, documentId: r } = e;
	try {
		await t.bulkAdd(n);
	} catch (e) {
		let t = e instanceof Error ? e : void 0, i = Bi(e);
		if (i) {
			let e = i.map((e) => ({
				position: e,
				id: n[e].id
			}));
			function a(e) {
				return n.findIndex((t) => t.id === e.id) < e.position;
			}
			mt({
				documentId: r,
				held: e.filter((e) => !a(e)).map((e) => e.id),
				repeated: e.filter(a).map((e) => e.id),
				cause: t
			});
		}
		T("STORE_BULK_ADD_FAILED", {
			detail: e instanceof Error ? e.message : String(e),
			cause: t
		});
	}
}
function Bi(e) {
	if (!(e instanceof hi.BulkError)) return;
	let t = Object.entries(e.failuresByPos).filter(([, e]) => e.name === "ConstraintError").map(([e]) => Number(e));
	return t.length > 0 ? t : void 0;
}
async function Vi(e) {
	let { table: t, updates: n, documentId: r } = e;
	return n.length === 0 ? [] : (await t.bulkGet(n.map((e) => e.id))).map((e, t) => (e || pt({
		documentId: r,
		recordId: n[t].id
	}), e));
}
function Hi(e, t) {
	e.has(t) || ft({
		documentId: t,
		what: "a blob"
	});
}
function Ui(e) {
	return e.status ? e : {
		...e,
		status: "ready"
	};
}
var Wi = /* @__PURE__ */ new Map(), Gi = rr(), Ki = er(), qi = /* @__PURE__ */ new Map();
function Ji(e) {
	let { key: t, connection: n, listener: r } = e, i = qi.get(t) ?? /* @__PURE__ */ new Set();
	qi.set(t, i);
	let a = {
		connection: n,
		listener: r
	};
	return i.add(a), function() {
		i.delete(a), i.size === 0 && qi.get(t) === i && qi.delete(t);
	};
}
function Yi(e) {
	let { key: t, name: n, connection: r, change: i } = e, a = {
		...i,
		timestamp: Date.now()
	};
	for (let e of Array.from(qi.get(t) ?? [])) kt({
		listener: e.listener,
		value: {
			type: "change",
			message: a,
			own: e.connection === r
		},
		of: At({ name: n })
	});
}
function Xi(e) {
	let { project: t, dialecteId: n } = e;
	return n === void 0 ? encodeURIComponent(t) : Zn({
		dialecteId: n,
		project: t
	});
}
function Zi(e) {
	return Wi.get(e.key);
}
function Qi(e) {
	let { key: t } = e, n = Wi.get(t);
	if (n) return n;
	let r = ea();
	return Wi.set(t, r), r;
}
function $i(e) {
	Wi.delete(e.key);
}
function ea() {
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
function ta(e) {
	let { state: t, documentId: n } = e;
	t.versions.set(n, (t.versions.get(n) ?? 0) + 1);
}
var na = /* @__PURE__ */ new Map(), ra = ea();
function ia(e) {
	let { table: t, creates: n, documentId: r } = e, i = /* @__PURE__ */ new Set(), a = [], o = [];
	for (let { id: e } of n) t.has(e) && a.push(e), i.has(e) && o.push(e), i.add(e);
	(a.length > 0 || o.length > 0) && mt({
		documentId: r,
		held: a,
		repeated: o
	});
}
var aa = class e {
	static {
		this.reconcileWarned = !1;
	}
	constructor(e, t) {
		this.closed = !1, this.closings = 0, this.operations = ir(), at({
			project: e,
			dialecteId: t?.dialecteId
		}), this.name = e, this.writable = t?.writable ?? !0, this.runtime = t?.runtime, this.stateKey = Xi({
			project: e,
			dialecteId: t?.dialecteId
		});
	}
	async open() {
		let e = this.closings;
		for (await this.operations.whenIdle(); this.destroying;) await this.destroying.catch(nr);
		this.closings !== e && W({ storeName: this.name }), this.closed = !1, this.writable && Gi.markOpen({
			name: this.stateKey,
			connection: this
		}), await ci({
			store: this,
			isRunning: (e) => e.writeId !== void 0 && this.readState().runningImports.has(e.writeId)
		});
	}
	async close() {
		if (this.closed = !0, this.closings += 1, Gi.markClosed({
			name: this.stateKey,
			connection: this
		}), this.operations.count === 0) return;
		let e = this.operations.whenIdle();
		Ki.markClosing({
			name: this.stateKey,
			until: e
		}), await e;
	}
	async destroy() {
		if (!this.writable) return;
		for (; this.destroying;) await this.destroying.catch(nr);
		let e = this.destroyOnceIdle();
		this.destroying = e;
		try {
			await e;
		} finally {
			this.destroying === e && (this.destroying = void 0);
		}
	}
	async destroyOnceIdle() {
		await this.operations.whenIdle(), await Ki.settled({ name: this.stateKey });
		let e = Gi.others({
			name: this.stateKey,
			connection: this
		});
		e > 0 && gt({
			storeName: this.name,
			connections: e
		}), $i({ key: this.stateKey }), Gi.markClosed({
			name: this.stateKey,
			connection: this
		});
	}
	async reconcile() {
		await this.guardOpen(), e.reconcileWarned || (e.reconcileWarned = !0, console.warn("[dialecte] InMemoryStore.reconcile() is a no-op: in-memory documents are not shared across realms/tabs. Use the local (IndexedDB) or sqlite store for cross-realm sync."));
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
		return await this.guardOpen(), structuredClone([...this.readState().documents.values()].sort(ai));
	}
	async updateDocument(e, t) {
		await this.guardOpen();
		let n = this.readState().documents.get(e);
		await this.updateDocumentUnguarded(e, t), oi({
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
		return await this.guardOpen(), structuredClone(this.readTable(t).get(e));
	}
	async getByDocumentId(e) {
		return await this.guardOpen(), structuredClone([...this.readTable(e).values()].sort(ai));
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
	async importFile(e) {
		let t = this.guardOpen();
		t && await t, this.guardWritable();
		let { file: n, options: r, writeId: i = crypto.randomUUID(), onProgress: a, signal: o } = e, s = ii({
			runtime: this.runtime,
			storeName: this.name,
			operation: "import"
		}), { runningImports: c } = Qi({ key: this.stateKey });
		c.add(i), this.operations.start();
		try {
			let e = await $r({
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
		let { documentId: n, options: r, onProgress: i, signal: a } = e, o = ii({
			runtime: this.runtime,
			storeName: this.name,
			operation: "export"
		});
		this.operations.start();
		try {
			return await zn({
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
		return ar({
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
			documentId: e
		});
	}
	async commit(e) {
		await this.guardOpen(), this.guardWritable();
		let { documentId: t, writeId: n = crypto.randomUUID(), deletes: r, onProgress: i } = e, { state: a, table: o } = this.writeTarget(t);
		a.documents.get(t)?.status === "importing" && ft({
			documentId: t,
			what: "a commit"
		}), vt({ writeId: n });
		let s = e.updates.map((e) => {
			let n = o.get(e.id);
			return n || pt({
				documentId: t,
				recordId: e.id
			}), n;
		}), c = br({ records: e.creates });
		ia({
			table: o,
			creates: c,
			documentId: t
		});
		let l = br({ records: e.updates });
		ta({
			state: a,
			documentId: t
		});
		for (let e of c) o.set(e.id, e);
		for (let e of l) o.set(e.id, e);
		let u = r.flatMap((e) => {
			let t = o.get(e);
			return t ? [t] : [];
		});
		for (let e of r) o.delete(e);
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
		g.push(y), f.set(t, g), d.set(t, v), Cr({
			onProgress: i,
			parts: [
				c.length,
				l.length,
				r.length
			]
		}), this.announce({
			type: "commit",
			documentId: t
		});
	}
	async undo(e) {
		await this.guardOpen(), this.guardWritable();
		let t = this.writeState(), n = t?.heads.get(e) ?? 0;
		if (!t || n === 0) return;
		let r = (t.changelog.get(e) ?? []).find((e) => e.sequenceNumber === n);
		if (!r) return;
		let { table: i } = this.writeTarget(e), { creates: a, updates: o, deletes: s } = r.operations;
		for (let e of s) i.set(e.id, e);
		for (let e of o) i.set(e.before.id, e.before);
		for (let e of a) i.delete(e.id);
		t.heads.set(e, n - 1), ta({
			state: t,
			documentId: e
		}), this.announce({
			type: "commit",
			documentId: e
		});
	}
	async redo(e) {
		await this.guardOpen(), this.guardWritable();
		let t = this.writeState();
		if (!t) return;
		let n = (t.heads.get(e) ?? 0) + 1, r = (t.changelog.get(e) ?? []).find((e) => e.sequenceNumber === n);
		if (!r) return;
		let { table: i } = this.writeTarget(e), { creates: a, updates: o, deletes: s } = r.operations;
		for (let e of a) i.set(e.id, e);
		for (let e of o) i.set(e.after.id, e.after);
		for (let e of s) i.delete(e.id);
		t.heads.set(e, n), ta({
			state: t,
			documentId: e
		}), this.announce({
			type: "commit",
			documentId: e
		});
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
		n?.documents.has(e.documentId) || ft({
			documentId: e.documentId,
			what: "a blob"
		}), n.blobs.set(e.id, G({ value: e }));
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
		return await this.guardOpen(), structuredClone([...this.readState().blobs.values()].filter((t) => t.attachedTo.some((t) => t.documentId === e)).sort(ai));
	}
	async getBlobsByRecord(e, t) {
		return await this.guardOpen(), structuredClone([...this.readState().blobs.values()].filter((n) => n.attachedTo.some((n) => n.documentId === e && n.recordRef === t)).sort(ai));
	}
	async getStandaloneBlobs() {
		return await this.guardOpen(), structuredClone([...this.readState().blobs.values()].filter((e) => e.attachedTo.length === 0).sort(ai));
	}
	async attachBlob(e, t) {
		await this.guardOpen(), this.guardWritable();
		let n = this.writeState(), r = n?.blobs.get(e);
		n && r || T("STORE_BLOB_NOT_FOUND", { detail: `Blob "${e}" not found` });
		let i = G({ value: t });
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
		n && r || T("STORE_BLOB_NOT_FOUND", { detail: `Blob "${e}" not found` });
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
		return this.writable ? Ji({
			key: this.stateKey,
			connection: this,
			listener: (t) => {
				this.closed || e(t);
			}
		}) : oa;
	}
	announce(e) {
		Yi({
			key: this.stateKey,
			name: this.name,
			connection: this,
			change: e
		});
	}
	async registerDocumentUnguarded(e) {
		this.guardWritable();
		let t = Qi({ key: this.stateKey });
		t.documents.has(e.id) && lt({ documentId: e.id });
		let n = G({ value: e });
		hr({
			document: n,
			documents: [...t.documents.values()]
		}), t.documents.set(e.id, n), t.records.set(Qe(e.id), /* @__PURE__ */ new Map()), t.blobData.set(e.id, /* @__PURE__ */ new Map());
	}
	async getDocumentUnguarded(e) {
		return structuredClone(this.readState().documents.get(e));
	}
	async updateDocumentUnguarded(e, t) {
		this.guardWritable();
		let n = G({ value: t }), r = this.writeState(), i = r?.documents.get(e);
		if (!r || !i) return;
		let a = mr({
			document: i,
			updates: n
		});
		a.path !== i.path && hr({
			document: a,
			documents: [...r.documents.values()]
		}), r.documents.set(e, a);
	}
	async markReadyUnguarded(e) {
		let { documentId: t, registered: n } = e;
		this.guardWritable();
		let r = this.writeState(), i = r?.documents.get(t);
		r && i && li({
			held: i,
			registered: n
		}) || ft({
			documentId: t,
			what: "its ready state"
		}), r.documents.set(t, {
			...i,
			status: "ready"
		});
	}
	async bulkWriteOwnImport(e) {
		let { documentId: t, ops: n, registered: r } = e, i = this.writeState()?.documents.get(t);
		li({
			held: i,
			registered: r
		}) || ft({
			documentId: t,
			what: "records"
		}), await this.bulkWriteUnguarded(t, n);
	}
	async removeOwnImport(e) {
		let { documentId: t, registered: n } = e, r = this.writeState()?.documents.get(t);
		li({
			held: r,
			registered: n
		}) && await this.removeDocumentUnguarded(t);
	}
	async removeDocumentUnguarded(e) {
		this.guardWritable();
		let t = this.writeState();
		if (t) {
			t.documents.delete(e), t.records.delete(Qe(e)), t.changelog.delete(e), t.heads.delete(e), t.discardedCommits.delete(e), t.blobData.delete(e);
			for (let [n, r] of t.blobs) r.documentId === e && t.blobs.delete(n);
		}
	}
	async bulkWriteUnguarded(e, t) {
		this.guardWritable();
		let { state: n, table: r } = this.writeTarget(e), i = br({ records: t.creates ?? [] });
		ia({
			table: r,
			creates: i,
			documentId: e
		});
		let a = new Set(i.map((e) => e.id)), o = G({ value: (t.updates ?? []).filter((e) => r.has(e.recordId) || a.has(e.recordId)) });
		for (let e of i) r.set(e.id, e);
		for (let e of o) {
			let t = r.get(e.recordId);
			t && r.set(e.recordId, xr({
				record: t,
				patch: e
			}));
		}
		if (t.deletes) for (let e of t.deletes) r.delete(e);
		ta({
			state: n,
			documentId: e
		});
	}
	readState() {
		return this.writable ? Zi({ key: this.stateKey }) ?? ra : ra;
	}
	writeState() {
		return Zi({ key: this.stateKey });
	}
	readTable(e) {
		return this.readState().records.get(Qe(e)) ?? na;
	}
	writeTarget(e) {
		let t = this.writeState(), n = t?.records.get(Qe(e));
		return t && n || ft({
			documentId: e,
			what: "records"
		}), {
			state: t,
			table: n
		};
	}
	guardOpen() {
		if (this.closed && W({ storeName: this.name }), this.destroying) return this.guardOpenAfterOwnDestroy({ destroying: this.destroying });
		this.writable && Gi.markOpen({
			name: this.stateKey,
			connection: this
		});
	}
	async guardOpenAfterOwnDestroy(e) {
		await e.destroying.catch(nr), await this.guardOpen();
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
			writeSession: (t, n) => this.bulkWriteOwnImport({
				documentId: t,
				ops: n,
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
		return this.readTable(e).size;
	}
	async getByTagNameInDocumentUnguarded(e, t) {
		let n = [];
		for (let r of this.readTable(t).values()) r.tagName === e && n.push(r);
		return structuredClone(n.sort(ai));
	}
	async getManyUnguarded(e, t) {
		let n = this.readTable(t);
		return structuredClone(e.map((e) => n.get(e)));
	}
	guardWritable() {
		this.writable || T("STORE_NOT_WRITABLE", { detail: "In-memory store is read-only. Hydrate with a real document before writing." });
	}
};
function oa() {}
function sa(e) {
	let { name: t, storage: n, runtime: r, perf: i, dialecteId: a } = e;
	if (n.type === "local") {
		let e = r.configs[r.defaultConfigKey];
		return new Li(t, {
			recordSchema: e.database.recordSchema,
			perf: i,
			runtime: r
		});
	}
	return n.type === "inMemory" ? new aa(t, {
		writable: n.writable ?? !0,
		runtime: r,
		dialecteId: a
	}) : n.type === "sqlite" ? $n({ project: t }).storeOf({ connector: ca({
		name: t,
		runtime: r,
		dialecteId: a
	}) }) : n.store;
}
function ca(e) {
	let { name: t, runtime: n, dialecteId: r } = e, { dialecteVersion: i, engineUrl: a, perf: o } = n;
	return at({
		project: t,
		dialecteId: r
	}), (r === void 0 || i === void 0 || a === void 0) && T("PROJECT_ENGINE_NOT_DECLARED", {
		detail: `Project "${t}" asks for SQLite storage, but no dialecte's factory made it: no engine is known to start (dialecte ${r ?? "none"}, version ${i ?? "none"}, engine ${a ?? "none"})`,
		meta: {
			project: t,
			dialecteId: r,
			dialecteVersion: i,
			engineUrl: a
		}
	}), {
		name: t,
		dialecteId: r,
		dialecteVersion: i,
		engineUrl: a,
		perf: o
	};
}
async function la(e) {
	let { store: n, state: r, projectName: i, perf: a, request: o } = e, { documentId: s, indent: c = !0, withDatabaseIds: l, xmlDocument: u, download: d } = o, f = r.documents.get(s);
	t(f, {
		key: "DOCUMENT_NOT_REGISTERED",
		detail: `Document "${s}" not registered in project "${i}"`
	});
	let { record: p } = f, m = d ? await _({
		filename: d === !0 ? `${p.name}${p.extension}` : d.filename,
		pickerType: da({ extension: p.extension })
	}) : void 0, h = await ua({
		store: n,
		documentId: s,
		indent: c,
		withDatabaseIds: l,
		perf: a
	});
	if (m) {
		let e = c ? h.file : (await ua({
			store: n,
			documentId: s,
			indent: !0,
			withDatabaseIds: l,
			perf: a
		})).file;
		await m.write(e);
	}
	if (!u) return h;
	let g = await wr({ file: c ? (await ua({
		store: n,
		documentId: s,
		indent: !1,
		withDatabaseIds: l,
		perf: a
	})).file : h.file });
	return {
		...h,
		xmlDocument: g
	};
}
async function ua(e) {
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
function da(e) {
	let { extension: t } = e;
	return {
		description: `${t.replace(/^\./, "").toUpperCase()} Files`,
		accept: { "application/xml": [t] }
	};
}
async function fa(e) {
	let { store: n, request: r } = e, { blobId: i, download: a } = r, o = typeof a == "object" ? await _({ filename: a.filename }) : void 0, s = await n.getBlob(i);
	t(s, {
		key: "BLOB_NOT_FOUND",
		detail: `Blob "${i}" not found in store`
	});
	let c = s.entry.name;
	return await (a === !0 ? await _({ filename: c }) : o)?.write(s.data), {
		entry: s.entry,
		data: s.data,
		filename: c
	};
}
function pa(e) {
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
function ma(e, t) {
	let n = new Set(t.map((e) => e.id));
	for (let n of t) e.has(n.id) || e.set(n.id, pa(n));
	for (let t of e.keys()) n.has(t) || e.delete(t);
	return e;
}
async function ha(e) {
	let { store: t, configs: n, defaultConfigKey: r, options: i, hooks: a } = e, { configKey: o, config: s } = Ft({
		configs: n,
		defaultConfigKey: r,
		configKey: i?.configKey
	}), c = crypto.randomUUID(), l = {
		id: c,
		...ga({
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
	let u = ge({
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
		documentState: pa(l)
	};
}
function ga(e) {
	let { options: t, config: n } = e, { path: r, name: i, extension: a } = t ?? {}, o = dr({ extensions: n.io.supportedFileExtensions });
	if (r === void 0) return {
		name: i ?? "untitled",
		extension: a ?? o[0]
	};
	if (a === void 0) {
		let e = fr({
			path: r,
			extensions: o
		});
		return {
			name: i ?? e.name,
			extension: e.extension
		};
	}
	let { fileName: s } = ur({ path: r }), c = s.endsWith(a) ? s.slice(0, s.length - a.length) : s;
	return {
		name: i ?? c,
		extension: a
	};
}
function _a(e) {
	let { name: t, instance: n } = e;
	return n === void 0 ? `dialecte::project::${t}` : `dialecte::project::${t}::${n}`;
}
var va = 1e4;
function ya(e) {
	return e.status === "importing";
}
function ba(e) {
	return e.filter((e) => !ya(e));
}
function xa(e, t) {
	return e ? Sa(e, t) : {};
}
function Sa(e, t) {
	let n = {};
	for (let r of Object.keys(e)) {
		let i = e[r];
		n[r] = typeof i == "function" ? (...e) => i(t, ...e) : Sa(i, t);
	}
	return n;
}
function Ca(e, t = () => {}) {
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
var wa = Object.freeze({
	plan() {},
	nextStep() {},
	endPlan() {},
	forceClear() {}
});
function Ta() {
	return {
		log: [],
		byId: /* @__PURE__ */ new Map()
	};
}
function Ea(e) {
	let { stagedOperations: t, tagName: n, id: r } = e, { log: i, byId: a } = t;
	if (r !== void 0) {
		let e = a.get(r);
		return e ? Da({
			operation: e,
			tagName: n,
			id: r
		}) : void 0;
	}
	for (let e = i.length - 1; e >= 0; e--) {
		let t = i[e];
		if ((t.status === "created" || t.status === "updated") && de(t.newRecord, n)) return {
			...t.newRecord,
			status: t.status
		};
		if (t.status === "deleted" && de(t.oldRecord, n)) return {
			...t.oldRecord,
			status: "deleted"
		};
	}
}
function Da(e) {
	let { operation: t, tagName: n, id: r } = e;
	if ((t.status === "created" || t.status === "updated") && t.newRecord.id === r) return Oa(t.newRecord.tagName, n, r), {
		...t.newRecord,
		status: t.status
	};
	if (t.status === "deleted" && t.oldRecord.id === r) return Oa(t.oldRecord.tagName, n, r), {
		...t.oldRecord,
		status: "deleted"
	};
}
function Oa(e, t, n) {
	e !== t && T("ELEMENT_TAGNAME_MISMATCH", {
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
function ka(e) {
	let { rawRecords: t, stagedOperations: n, tagName: r } = e, i = new Map(t.map((e) => [e.id, {
		...e,
		status: "unchanged"
	}]));
	for (let e of n) {
		if (e.status === "created" || e.status === "updated") {
			if (!de(e.newRecord, r)) continue;
			i.set(e.newRecord.id, {
				...e.newRecord,
				status: e.status
			});
		}
		e.status === "deleted" && e.oldRecord.tagName === r && i.delete(e.oldRecord.id);
	}
	return Array.from(i.values());
}
function Aa(e) {
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
function ja(e) {
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
async function $(e) {
	let { context: t, ref: n } = e;
	if (t.stagedOperations.log.length > 0) {
		let e = Ea({
			stagedOperations: t.stagedOperations,
			tagName: n.tagName,
			id: n.id
		});
		if (e?.status === "deleted") return;
		if (e) return e;
	}
	let r;
	if (n.id === void 0) {
		let e = `__singleton_${n.tagName}`, i = us(t) ? t.recordCache.get(e) : void 0;
		i ? (t.perf.count("core::query::getRecord.cacheHit"), r = i) : (t.perf.count("core::query::getRecord.miss"), t.perf.count("core::store::getByTagName"), r = (await t.store.getByTagNameInDocument(n.tagName, t.documentId))[0], r && us(t) && (t.recordCache.set(r.id, r), t.recordCache.set(e, r)));
	} else {
		let e = us(t) ? t.recordCache.get(n.id) : void 0;
		e ? (t.perf.count("core::query::getRecord.cacheHit"), r = e) : (t.perf.count("core::query::getRecord.miss"), t.perf.count("core::store::get"), r = await t.store.get(n.id, t.documentId), r && us(t) && t.recordCache.set(n.id, r));
	}
	if (r) return r.tagName !== n.tagName && T("ELEMENT_TAGNAME_MISMATCH", {
		detail: `Expected tagName '${n.tagName}', got '${r.tagName}' for id '${n.id}'`,
		ref: n,
		meta: {
			id: n.id,
			expectedTagName: n.tagName,
			actualTagName: r.tagName
		}
	}), {
		...r,
		status: "unchanged"
	};
}
async function Ma(e) {
	let { context: n, ref: r } = e;
	if (t(r, { detail: "The record or ref is undefined" }), !("attributes" in r) || !Array.isArray(r.attributes)) return $({
		context: n,
		ref: r
	});
	if (n.stagedOperations.log.length > 0) {
		let e = Ea({
			stagedOperations: n.stagedOperations,
			tagName: r.tagName,
			id: r.id
		});
		if (e?.status === "deleted") return;
		if (e) return e;
	}
	return n.perf.count("core::query::getRecord.fromRecord"), "status" in r ? r : {
		...r,
		status: "unchanged"
	};
}
async function Na(e) {
	let { context: t, refs: n } = e;
	return Promise.all(n.map((e) => $({
		context: t,
		ref: e
	})));
}
async function Pa(e) {
	let { context: t, tagName: n } = e;
	t.perf.count("core::store::getByTagName");
	let r = await t.store.getByTagNameInDocument(n, t.documentId);
	for (let e of r) us(t) && t.recordCache.set(e.id, e);
	return ka({
		rawRecords: r,
		stagedOperations: t.stagedOperations.log,
		tagName: n
	});
}
async function Fa(e) {
	let { context: t, ref: n, tagName: r } = e, i = await $({
		context: t,
		ref: n
	});
	if (!i) return;
	let a = i.children.find((e) => e.tagName === r);
	if (a) return $({
		context: t,
		ref: a
	});
	let o = t.dialecteConfig.transparentElements;
	if (!o?.length) return;
	let s = i.children.filter((e) => o.includes(e.tagName));
	for (let e of s) {
		let n = await $({
			context: t,
			ref: e
		});
		if (!n) continue;
		let i = n.children.find((e) => e.tagName === r);
		if (i) return $({
			context: t,
			ref: i
		});
	}
}
async function Ia(e) {
	let { context: t, ref: n, tagName: r } = e, i = await $({
		context: t,
		ref: n
	});
	if (!i) return [];
	let a = i.children.filter((e) => e.tagName === r).map((e) => ({
		tagName: r,
		id: e.id
	}));
	if (a.length) return (await Na({
		context: t,
		refs: a
	})).filter((e) => e !== void 0);
	let o = t.dialecteConfig.transparentElements;
	if (!o?.length) return [];
	let s = i.children.filter((e) => o.includes(e.tagName));
	if (!s.length) return [];
	let c = (await Na({
		context: t,
		refs: s
	})).filter((e) => e !== void 0).flatMap((e) => e.children.filter((e) => e.tagName === r)).map((e) => ({
		tagName: r,
		id: e.id
	}));
	return c.length ? (await Na({
		context: t,
		refs: c
	})).filter((e) => e !== void 0) : [];
}
async function La(e) {
	e.perf.count("core::store::getByDocumentId");
	let { live: t } = Aa({
		rawRecords: await e.store.getByDocumentId(e.documentId),
		stagedOperations: e.stagedOperations
	});
	return t;
}
async function Ra(e) {
	let { context: t, ref: n, options: r } = e, i = r?.depth ?? Infinity, a = r?.stopAtTagName, o = r?.order ?? "bottom-up", s = [], c = await $({
		context: t,
		ref: n
	});
	for (; c?.parent && s.length < i;) {
		let e = c.parent, n = await $({
			context: t,
			ref: e
		});
		if (!n || (s.push(n), a && n.tagName === a)) break;
		c = n;
	}
	return o === "top-down" ? s.reverse() : s;
}
async function za(e) {
	let { context: t, tagName: n, attributes: r } = e, i = await Pa({
		context: t,
		tagName: n
	}), a = [];
	for (let e of i) Ba({
		dialecteConfig: t.dialecteConfig,
		record: e,
		attributeFilter: r
	}) && a.push(e);
	return a;
}
function Ba(e) {
	let { dialecteConfig: t, record: n, attributeFilter: r } = e;
	if (!r || Object.keys(r).length === 0) return !0;
	for (let [e, i] of Object.entries(r)) {
		if (i === void 0) continue;
		if (e === "xsi:type") {
			if (!Va({
				dialecteConfig: t,
				record: n,
				expected: i
			})) return !1;
			continue;
		}
		let r = n.attributes.find((t) => t.name === e)?.value ?? "";
		if (r === "") return !1;
		if (Array.isArray(i)) {
			if (!i.some((e) => r === e)) return !1;
		} else if (r !== i) return !1;
	}
	return !0;
}
function Va(e) {
	let { dialecteConfig: t, record: n, expected: r } = e, i = n.attributes.find(c);
	if (i === void 0 || i.value === "") return !1;
	let a = y({
		dialecteConfig: t,
		value: i.value,
		namespaceOf: s({
			dialecteConfig: t,
			attributes: n.attributes
		})
	}), o = s({
		dialecteConfig: t,
		attributes: []
	});
	return (Array.isArray(r) ? r : [r]).filter((e) => typeof e == "string").some((e) => y({
		dialecteConfig: t,
		value: e,
		namespaceOf: o
	}) === a);
}
var Ha = 1 / 17;
function Ua(e) {
	let { context: t } = e, n = /* @__PURE__ */ new Map(), r, i, a = 0, o;
	function s(e) {
		return !t.stagedOperations.byId.has(e) && !(us(t) && t.recordCache.has(e));
	}
	async function c(e) {
		if (r) return r;
		if (!(e === 0 || a + e <= 128)) {
			if (o === void 0) {
				t.perf.count("core::store::count");
				let e = await t.store.count(t.documentId);
				o = Math.max(128, Math.ceil(e * Ha));
			}
			if (!(a + e <= o)) return r = await La(t), r;
		}
	}
	function l(e, t) {
		return t && t.tagName !== e.tagName && T("ELEMENT_TAGNAME_MISMATCH", {
			detail: `Expected tagName '${e.tagName}', got '${t.tagName}' for id '${e.id}'`,
			ref: e
		}), t;
	}
	async function u(e) {
		if (e.id === void 0) return $({
			context: t,
			ref: e
		});
		let i = e;
		if (r) return l(i, r.get(i.id));
		if (n.has(i.id)) return l(i, n.get(i.id));
		let o = s(i.id), u = o ? await c(1) : void 0;
		if (u) return l(i, u.get(i.id));
		o && a++;
		let d = await $({
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
				let e = [...r.values()], o = await Promise.all(e.map((e) => $({
					context: t,
					ref: e
				})));
				e.forEach((e, t) => n.set(e.id, o[t]));
			}
		}
		return Promise.all(e.map((e) => u(e)));
	}
	function f(e, t) {
		if (!i) {
			i = /* @__PURE__ */ new Map();
			for (let t of e.values()) {
				let e = i.get(t.tagName);
				e ? e.push(t) : i.set(t.tagName, [t]);
			}
		}
		return i.get(t) ?? [];
	}
	async function p(e) {
		let n = r ?? await c(1);
		return n ? f(n, e) : (a++, Pa({
			context: t,
			tagName: e
		}));
	}
	return {
		get: u,
		getMany: d,
		byTag: p
	};
}
async function Wa(e) {
	let { context: t, ref: n, options: r } = e, { collect: i, omit: a } = r, o = Ga({
		omit: a,
		dialecteConfig: t.dialecteConfig
	}), s = Ja(i), c = /* @__PURE__ */ new Map();
	for (let e of s.allTags) c.set(e, /* @__PURE__ */ new Map());
	let l = Ua({ context: t }), u = await l.get(n);
	return u && (s.mode === "flat" ? await Za({
		context: t,
		source: l,
		root: u,
		collectSpec: s,
		omitSpec: o,
		collected: c
	}) : await eo({
		context: t,
		source: l,
		record: u,
		pathNodes: s.paths,
		omitSpec: o,
		collected: c
	})), ro(c);
}
function Ga(e) {
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
function Ka(e) {
	return e.unconditional.size > 0 || e.conditional.length > 0;
}
function qa(e) {
	let { record: t, omitSpec: n } = e;
	if (n.unconditional.has(t.tagName)) return !0;
	for (let e of n.conditional) if (e.tagName === t.tagName && Ba({
		dialecteConfig: n.dialecteConfig,
		record: t,
		attributeFilter: e.where
	})) return !0;
	return !1;
}
function Ja(e) {
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
	let t = /* @__PURE__ */ new Set();
	return {
		mode: "path",
		paths: Ya(e, t),
		allTags: t
	};
}
function Ya(e, t) {
	let n = [];
	for (let [r, i] of Object.entries(e)) {
		if (r === "where") continue;
		t.add(r);
		let e = Xa({
			tagName: r,
			value: i,
			allTags: t
		});
		e && n.push(e);
	}
	return n;
}
function Xa(e) {
	let { tagName: t, value: n, allTags: r } = e;
	if (n === !0) return {
		tagName: t,
		where: void 0,
		children: [],
		isLeaf: !0
	};
	if (typeof n != "object" || !n) return;
	let i = n, a = i.where, o = Object.keys(i).filter((e) => e !== "where");
	if (o.length === 0) return {
		tagName: t,
		where: a,
		children: [],
		isLeaf: !0
	};
	let s = {};
	for (let e of o) s[e] = i[e];
	return {
		tagName: t,
		where: a,
		children: Ya(s, r),
		isLeaf: !1
	};
}
async function Za(e) {
	let { context: t, source: n, root: r, collectSpec: i, omitSpec: a, collected: o } = e, s = !r.parent && !Ka(a), c = $a({
		source: n,
		rootId: r.id,
		omitSpec: a
	});
	for (let e of i.targets) {
		if (a.unconditional.has(e.tagName)) continue;
		let r = await n.byTag(e.tagName);
		for (let n of r) Qa({
			dialecteConfig: t.dialecteConfig,
			record: n,
			where: e.where
		}) && (s ? !qa({
			record: n,
			omitSpec: a
		}) : await c.isUnderRoot(n)) && o.get(e.tagName).set(n.id, n);
	}
}
function Qa(e) {
	let { dialecteConfig: t, record: n, where: r } = e;
	return !r || Ba({
		dialecteConfig: t,
		record: n,
		attributeFilter: r
	});
}
function $a(e) {
	let { source: t, rootId: n, omitSpec: r } = e, i = /* @__PURE__ */ new Map();
	async function a(e) {
		if (qa({
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
			let l = await t.get(M(e));
			if (!l || qa({
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
async function eo(e) {
	let { context: t, source: n, record: r, pathNodes: i, omitSpec: a, collected: o } = e;
	if (!r.children?.length) return;
	let s = new Set(i.map((e) => e.tagName));
	for (let e of i) {
		let i = await to({
			context: t,
			source: n,
			record: r,
			tagName: e.tagName,
			where: e.where,
			omitSpec: a,
			stopAtTagNames: s
		});
		for (let r of i) o.get(e.tagName).set(r.id, r), !e.isLeaf && e.children.length > 0 && await eo({
			context: t,
			source: n,
			record: r,
			pathNodes: e.children,
			omitSpec: a,
			collected: o
		});
	}
}
async function to(e) {
	let { context: t, source: n, record: r, tagName: i, where: a, omitSpec: o, stopAtTagNames: s } = e, c = [];
	if (!r.children?.length) return c;
	let l = [], u = await no({
		source: n,
		record: r,
		omitSpec: o
	});
	for (l.push(...u); l.length > 0;) {
		let e = l.shift();
		if (e.tagName === i) Qa({
			dialecteConfig: t.dialecteConfig,
			record: e,
			where: a
		}) && c.push(e);
		else if (!(s.has(e.tagName) && e.tagName !== i) && e.children?.length) {
			let t = await no({
				source: n,
				record: e,
				omitSpec: o
			});
			l.push(...t);
		}
	}
	return c;
}
async function no(e) {
	let { source: t, record: n, omitSpec: r } = e;
	if (!n.children?.length) return [];
	let i = n.children.filter((e) => !r.unconditional.has(e.tagName));
	return i.length ? (await t.getMany(i.map((e) => M(e)))).filter((e) => e !== void 0 && !qa({
		record: e,
		omitSpec: r
	})) : [];
}
function ro(e) {
	let t = {};
	for (let [n, r] of e.entries()) t[n] = Array.from(r.values());
	return t;
}
async function io(e) {
	let { context: t, ref: n, name: r, namespace: i, defaults: a } = e, o = await Ma({
		context: t,
		ref: n
	});
	if (!o) return "";
	let { dialecteConfig: s } = t;
	return Ce({
		record: o,
		dialecteConfig: s,
		name: r,
		namespace: i,
		defaults: a
	});
}
async function ao(e) {
	let { context: t, ref: n, name: r, namespace: i, defaults: a } = e, o = await Ma({
		context: t,
		ref: n
	});
	if (!o) return;
	let { dialecteConfig: s } = t;
	return Ce({
		record: o,
		dialecteConfig: s,
		name: r,
		namespace: i,
		defaults: a,
		fullObject: !0
	});
}
async function oo(e) {
	let { context: t, ref: n, namespace: r, defaults: i } = e, a = await Ma({
		context: t,
		ref: n
	});
	if (!a) return {};
	let { dialecteConfig: o } = t;
	return Te({
		record: a,
		dialecteConfig: o,
		namespace: r,
		defaults: i
	});
}
async function so(e) {
	let { context: t, ref: n, defaults: r } = e, i = await Ma({
		context: t,
		ref: n
	});
	if (!i) return [];
	let { dialecteConfig: a } = t;
	return Te({
		record: i,
		dialecteConfig: a,
		defaults: r,
		fullObject: !0
	});
}
async function co(e) {
	let { context: t, ref: n } = e, r = await $({
		context: t,
		ref: n
	});
	if (r) return g({
		dialecteConfig: t.dialecteConfig,
		record: r
	});
}
function lo(e) {
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
function uo(e) {
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
function fo(e) {
	let { record: t, compiledOmit: n } = e;
	return n.unconditional.has(t.tagName) ? !0 : n.conditional.some((e) => e.scope === "self" && e.tagName === t.tagName && Ba({
		dialecteConfig: n.dialecteConfig,
		record: t,
		attributeFilter: e.where
	}));
}
function po(e) {
	let { record: t, compiledOmit: n } = e;
	return n.conditional.some((e) => e.scope === "children" && e.tagName === t.tagName && Ba({
		dialecteConfig: n.dialecteConfig,
		record: t,
		attributeFilter: e.where
	}));
}
function mo(e) {
	let { tree: t, omit: n, dialecteConfig: r } = e;
	if (!n?.length) return t;
	let i = uo({
		omit: n,
		dialecteConfig: r
	});
	function a(e) {
		if (po({
			record: e,
			compiledOmit: i
		})) return {
			...e,
			tree: []
		};
		let t = e.tree.filter((e) => !fo({
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
function ho(e) {
	let { tree: t, childrenConfig: r, definition: i } = e;
	function a(e) {
		if (e.tree.length === 0) return e;
		let t = n({
			parentTagName: e.tagName,
			children: e.tree.map(a),
			childrenConfig: r,
			definition: i
		});
		return {
			...e,
			tree: t
		};
	}
	return a(t);
}
async function go(e) {
	let { context: n, ref: r, options: i = {}, dialecteConfig: a } = e, { select: o, omit: s, unwrap: c, depth: l } = i, u = l !== void 0 && r.id !== void 0 && n.stagedOperations.log.length === 0 ? await _o(n, r, l) : await La(n), d = vo(u, r);
	t(d, {
		detail: "No record found for provided ref",
		key: "ELEMENT_NOT_FOUND"
	});
	let f = uo({
		omit: s,
		dialecteConfig: n.dialecteConfig
	}), p = n.dialecteConfig.transparentElements, m = yo({
		recordsById: u,
		record: d,
		select: o,
		compiledOmit: f,
		dialecteConfig: a,
		transparentElements: p,
		remainingDepth: l ?? Infinity
	});
	if (!m) return pe({ record: d });
	let h = c ?? (p?.length ? p : void 0);
	return ho({
		tree: h ? lo({
			tree: m,
			unwrapTagNames: h
		}) : m,
		childrenConfig: n.dialecteConfig.children,
		definition: n.dialecteConfig.definition
	});
}
async function _o(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	if (t.id === void 0) return r;
	e.perf.count("core::store::get");
	let i = await e.store.get(t.id, e.documentId);
	if (!i) return r;
	let a = [i];
	r.set(i.id, {
		...i,
		status: "unchanged"
	});
	for (let t = 0; t < n && a.length > 0; t++) {
		let t = a.flatMap((e) => e.children.map((e) => e.id));
		if (t.length === 0) break;
		e.perf.count("core::store::getMany");
		let n = await e.store.getMany(t, e.documentId), i = [];
		for (let e of n) e && (r.set(e.id, {
			...e,
			status: "unchanged"
		}), i.push(e));
		a = i;
	}
	return r;
}
function vo(e, t) {
	if (t.id !== void 0) {
		let n = e.get(t.id);
		return n?.tagName === t.tagName ? n : void 0;
	}
	for (let n of e.values()) if (n.tagName === t.tagName) return n;
}
function yo(e) {
	let { recordsById: t, record: n, select: r, compiledOmit: i, dialecteConfig: a, transparentElements: o } = e;
	return e.remainingDepth <= 0 || po({
		record: n,
		compiledOmit: i
	}) ? pe({ record: n }) : pe({
		record: n,
		tree: bo({
			recordsById: t,
			record: n,
			select: r,
			compiledOmit: i,
			dialecteConfig: a,
			transparentElements: o
		}).map(({ record: n, select: r }) => yo({
			recordsById: t,
			record: n,
			select: r,
			compiledOmit: i,
			dialecteConfig: a,
			transparentElements: o,
			remainingDepth: e.remainingDepth - 1
		})).filter((e) => e !== null)
	});
}
function bo(e) {
	let { recordsById: t, record: n, select: r, compiledOmit: i, dialecteConfig: a, transparentElements: o } = e;
	if (!n.children?.length) return [];
	let s = r ? Co(r) : void 0;
	if (s && r && a && r.recursive !== !1) {
		let e = n.tagName, t = a.children[e], i = r[e] !== void 0;
		t?.includes(e) && !i && s.add(e);
	}
	let c = n.children.filter((e) => xo({
		tagName: e.tagName,
		compiledOmit: i,
		selectKeys: s,
		transparentElements: o
	}));
	if (!c.length) return [];
	let l = c.map((e) => t.get(e.id)).filter((e) => e !== void 0).filter((e) => !fo({
		record: e,
		compiledOmit: i
	}));
	return wo({
		filterConfig: i.dialecteConfig,
		children: l,
		select: r,
		record: n,
		dialecteConfig: a,
		transparentElements: o
	});
}
function xo(e) {
	let { tagName: t, compiledOmit: n, selectKeys: r, transparentElements: i } = e;
	return n.unconditional.has(t) ? !1 : r && !r.has(t) ? !!i?.includes(t) : !0;
}
var So = /* @__PURE__ */ new Set(["where", "recursive"]);
function Co(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of Object.keys(e)) So.has(n) || t.add(n);
	return t;
}
function wo(e) {
	let { children: t, select: n, record: r, dialecteConfig: i, filterConfig: a, transparentElements: o } = e;
	if (!n) return t.map((e) => ({
		record: e,
		select: void 0
	}));
	let s = [];
	for (let e of t) {
		let t = n[e.tagName];
		if (t === void 0 && o?.includes(e.tagName)) {
			s.push({
				record: e,
				select: n
			});
			continue;
		}
		if (t === void 0 && e.tagName === r.tagName) {
			let t = To({
				child: e,
				select: n,
				dialecteConfig: i,
				filterConfig: a
			});
			if (t) {
				s.push(t);
				continue;
			}
		}
		if (t === void 0 || t === !1) continue;
		if (t === !0) {
			s.push({
				record: e,
				select: void 0
			});
			continue;
		}
		let c = Eo({
			child: e,
			entry: t,
			parentRecord: r,
			filterConfig: a
		});
		c && s.push(c);
	}
	return s;
}
function To(e) {
	let { child: t, select: n, dialecteConfig: r, filterConfig: i } = e;
	if (r && n.recursive !== !1 && r.children[t.tagName]?.includes(t.tagName) && (!n.where || Ba({
		dialecteConfig: i,
		record: t,
		attributeFilter: n.where
	}))) return {
		record: t,
		select: n
	};
}
function Eo(e) {
	let { child: t, entry: n, parentRecord: r, filterConfig: i } = e, a = n;
	if (!a.where || Ba({
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
			select: Do(a, t.tagName)
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
function Do(e, t) {
	return e[t], e;
}
async function Oo(e) {
	let { context: n, ref: r, ancestors: i = 0, depth: a, includeDeleted: o = !1 } = e;
	if (!r && a === void 0) return ko({
		context: n,
		includeDeleted: o
	});
	let s = e.siblings ?? !1, c = s === !0 || typeof s == "object" && !!s, l = typeof s == "object" && !!s && s.expand === !0, u = r ?? { tagName: n.dialecteConfig.rootElementName }, d = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), p = o ? ja(n.stagedOperations.log) : void 0;
	function m(e) {
		if (p) for (let t of p.get(e) ?? []) f.has(t.id) || (f.set(t.id, t), m(t.id));
	}
	async function h(e, t) {
		if (d.set(e.id, e), m(e.id), !(a !== void 0 && t >= a)) for (let r of e.children) {
			let e = await $({
				context: n,
				ref: M(r)
			});
			e && await h(e, t + 1);
		}
	}
	let g = await $({
		context: n,
		ref: u
	});
	t(g, {
		key: "ELEMENT_NOT_FOUND",
		detail: "No record found for the provided ref"
	});
	let _ = g.id;
	await h(g, 0);
	let v = Math.max(i, +!!c);
	if (v > 0) {
		let e = await Ra({
			context: n,
			ref: u,
			options: {
				depth: v,
				order: "bottom-up"
			}
		});
		for (let t of e) d.set(t.id, t), _ = t.id;
		if (c) {
			let t = [g, ...e];
			for (let e = 0; e < t.length - 1; e++) {
				let r = t[e], i = t[e + 1];
				for (let e of i.children) {
					if (e.id === r.id) continue;
					let t = await $({
						context: n,
						ref: M(e)
					});
					t && (l ? await h(t, 0) : d.set(t.id, t));
				}
			}
		}
	}
	return Ao({
		live: d,
		deletedById: f,
		rootId: _
	});
}
async function ko(e) {
	let { context: n, includeDeleted: r = !1 } = e, { live: i, deleted: a } = Aa({
		rawRecords: await n.store.getByDocumentId(n.documentId),
		stagedOperations: n.stagedOperations,
		includeDeleted: r
	}), o;
	for (let e of i.values()) if (e.tagName === n.dialecteConfig.rootElementName) {
		o = e.id;
		break;
	}
	return t(o, {
		key: "ROOT_NOT_FOUND",
		detail: `No ${n.dialecteConfig.rootElementName} root element found in document`
	}), Ao({
		live: i,
		deletedById: new Map(a.map((e) => [e.id, e])),
		rootId: o
	});
}
function Ao(e) {
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
function jo(e) {
	let { liveRecords: n, deletedRecords: r, rootId: i } = e, a = new Map(n.map((e) => [e.id, e])), o = new Map(r.map((e) => [e.id, e])), s = /* @__PURE__ */ new Map();
	for (let e of r) {
		let t = e.parent?.id;
		if (!t) continue;
		let n = s.get(t) ?? [];
		n.push(e), s.set(t, n);
	}
	let c = a.get(i);
	t(c, {
		key: "ROOT_NOT_FOUND",
		detail: `No record found for rootId "${i}"`
	});
	function l(e, t) {
		let n = t === "live" ? a : o, r = e.children.filter((e) => n.has(e.id)).map((e) => l(n.get(e.id), t)), i = t === "live" ? (s.get(e.id) ?? []).map((e) => l(e, "deleted")) : [];
		return pe({
			record: e,
			tree: [...r, ...i]
		});
	}
	return l(c, "live");
}
function Mo(e) {
	let { records: n, config: r, rootId: i, indent: a, declareNamespaces: o, includeXmlDeclaration: s, withDatabaseIds: c } = e, l = /* @__PURE__ */ new Map();
	for (let e of n) l.set(e.id, e);
	let u = i ? l.get(i) : No({
		records: n,
		config: r
	});
	t(u, {
		detail: i ? `No record found for rootId "${i}"` : `No ${r.rootElementName} root element found in records`,
		key: "EXPORT_ROOT_NOT_FOUND"
	});
	let d = new Fn({
		config: r,
		documentRoot: u.tagName === r.rootElementName ? u : void 0,
		indent: a,
		declareNamespaces: o,
		includeXmlDeclaration: s,
		withDatabaseIds: c
	});
	Po({
		writer: d,
		record: u,
		index: l,
		config: r
	});
	let f = d.take();
	return d.head() + f;
}
function No(e) {
	let { records: t, config: n } = e;
	return t.find((e) => Lt({
		record: e,
		config: n
	}));
}
function Po(e) {
	let { writer: r, record: i, index: a, config: o } = e;
	r.openElement({ record: i });
	let s = n({
		parentTagName: i.tagName,
		children: i.children,
		childrenConfig: o.children,
		definition: o.definition
	});
	for (let e of s) {
		let n = a.get(e.id);
		t(n, {
			detail: `Parent '${i.tagName}' references non-existent child '${e.tagName}' (id: ${e.id})`,
			key: "EXPORT_ORPHAN_CHILD_REF",
			ref: {
				tagName: i.tagName,
				id: i.id
			}
		}), Po({
			writer: r,
			record: n,
			index: a,
			config: o
		});
	}
	r.closeElement();
}
async function Fo(e) {
	let { context: t, options: n = {} } = e, { ref: r, ancestors: i, siblings: a, depth: o, includeDeleted: s, omit: c, unwrap: l, as: u = "tree" } = n, d = await Oo({
		context: t,
		ref: r ? M(r) : void 0,
		ancestors: i,
		siblings: a,
		depth: o,
		includeDeleted: s
	});
	if (u === "xml") return Lo(t, d, n.declareNamespaces, n.includeXmlDeclaration);
	let f = Io(t, d, {
		omit: c,
		unwrap: l
	});
	return u === "tree" ? f : {
		tree: f,
		xmlString: Lo(t, d, n.declareNamespaces, n.includeXmlDeclaration)
	};
}
function Io(e, t, n) {
	let r = jo(t);
	r = mo({
		tree: r,
		omit: n.omit,
		dialecteConfig: e.dialecteConfig
	});
	let i = e.dialecteConfig.transparentElements, a = n.unwrap ?? (i?.length ? [...i] : void 0);
	return a?.length && (r = lo({
		tree: r,
		unwrapTagNames: a
	})), r = ho({
		tree: r,
		childrenConfig: e.dialecteConfig.children,
		definition: e.dialecteConfig.definition
	}), r;
}
function Lo(e, t, n, r) {
	return Mo({
		records: t.liveRecords,
		config: e.dialecteConfig,
		rootId: t.rootId,
		declareNamespaces: n,
		includeXmlDeclaration: r
	});
}
var Ro = class {
	constructor(e, t) {
		this.getContext = e, this.dialecteConfig = t;
	}
	async getRecord(e) {
		return $({
			context: this.getContext(),
			ref: e
		});
	}
	async getDefinition(e) {
		return co({
			context: this.getContext(),
			ref: M(e)
		});
	}
	async getRecords(e) {
		return Na({
			context: this.getContext(),
			refs: e
		});
	}
	async getChild(e, t) {
		return Fa({
			context: this.getContext(),
			ref: M(e),
			tagName: t
		});
	}
	async getChildren(e, t) {
		return Ia({
			context: this.getContext(),
			ref: M(e),
			tagName: t
		});
	}
	async getRecordsByTagName(e) {
		return Pa({
			context: this.getContext(),
			tagName: e
		});
	}
	async getAttribute(e, t) {
		let n = e, { fullObject: r } = t;
		return r ? ao({
			context: this.getContext(),
			ref: n,
			...t
		}) : io({
			context: this.getContext(),
			ref: n,
			...t
		});
	}
	async getAttributes(e, t) {
		let n = e, { fullObject: r } = t || {};
		return r ? so({
			context: this.getContext(),
			ref: n,
			...t
		}) : oo({
			context: this.getContext(),
			ref: n,
			...t
		});
	}
	async getTree(e, t) {
		return go({
			context: this.getContext(),
			ref: M(e),
			options: t,
			dialecteConfig: this.dialecteConfig
		});
	}
	async getSnapshot(e) {
		return Fo({
			context: this.getContext(),
			options: e
		});
	}
	async findDescendants(e) {
		let t = M(e), n = this.dialecteConfig.descendants[t.tagName] ?? [];
		return Wa({
			context: this.getContext(),
			ref: t,
			options: { collect: n }
		});
	}
	async findAncestors(e) {
		return e ? Ra({
			context: this.getContext(),
			ref: M(e)
		}) : [];
	}
	async findByAttributes(e) {
		return za({
			context: this.getContext(),
			tagName: e.tagName,
			attributes: e.attributes
		});
	}
}, zo = class {
	constructor(e, t, n, r = Nt) {
		this.store = e, this.dialecteConfig = t, this.documentId = n, this._perf = r;
	}
	get perf() {
		return this._perf;
	}
	get any() {
		return this._any ??= new Ro(() => this.context, this.dialecteConfig);
	}
	getOperations() {
		return Ta();
	}
	get context() {
		return {
			store: this.store,
			dialecteConfig: this.dialecteConfig,
			documentId: this.documentId,
			recordCache: void 0,
			stagedOperations: this.getOperations(),
			progress: wa,
			perf: this.perf
		};
	}
	async getDocumentInfo() {
		let e = await this.store.getDocument(this.documentId);
		return t(e, {
			key: "DOCUMENT_NOT_REGISTERED",
			detail: `Expected document id: ${this.documentId}`
		}), e;
	}
	async getRoot() {
		let e = await $({
			context: this.context,
			ref: { tagName: this.dialecteConfig.rootElementName }
		});
		return t(e, {
			key: "ROOT_NOT_FOUND",
			detail: `Expected tag name: ${this.dialecteConfig.rootElementName}`
		}), e;
	}
	async getRecord(e) {
		return $({
			context: this.context,
			ref: M(e)
		});
	}
	async getDefinition(e) {
		return co({
			context: this.context,
			ref: M(e)
		});
	}
	async getRecords(e) {
		let t = e.map((e) => M(e));
		return Na({
			context: this.context,
			refs: t
		});
	}
	async getChild(e, t) {
		if (e) return Fa({
			context: this.context,
			ref: M(e),
			tagName: t
		});
	}
	async getChildren(e, t) {
		return e ? Ia({
			context: this.context,
			ref: M(e),
			tagName: t
		}) : [];
	}
	async getRecordsByTagName(e) {
		return Pa({
			context: this.context,
			tagName: e
		});
	}
	async findDescendants(e, t) {
		let n = M(e);
		if (!t) {
			let e = this.dialecteConfig.descendants[n.tagName] ?? [];
			return Wa({
				context: this.context,
				ref: n,
				options: { collect: e }
			});
		}
		return Wa({
			context: this.context,
			ref: n,
			options: t
		});
	}
	async findAncestors(e, t) {
		return e ? Ra({
			context: this.context,
			ref: M(e),
			options: t
		}) : [];
	}
	async getTree(e, t) {
		return go({
			context: this.context,
			ref: M(e),
			options: t,
			dialecteConfig: this.dialecteConfig
		});
	}
	async getSnapshot(e) {
		return Fo({
			context: this.context,
			options: e
		});
	}
	async getAttribute(e, t) {
		let { fullObject: n } = t;
		return n ? ao({
			context: this.context,
			ref: e,
			...t
		}) : io({
			context: this.context,
			ref: e,
			...t
		});
	}
	async getAttributes(e, t) {
		let { fullObject: n } = t || {};
		return n ? so({
			context: this.context,
			ref: e,
			...t
		}) : oo({
			context: this.context,
			ref: e,
			...t
		});
	}
	async findByAttributes(e) {
		return za({
			context: this.context,
			...e
		});
	}
};
function Bo(e) {
	let { context: n, status: r, record: i, oldRecord: a, newRecord: o } = e, s, c, l;
	if (i && (s = k(i)), a && (c = k(a)), o && (l = k(o)), r === "created") {
		t(s, {
			detail: "Record is required for created",
			key: "ELEMENT_NOT_FOUND"
		}), An({ record: s });
		let e = {
			status: r,
			oldRecord: void 0,
			newRecord: s
		};
		n.stagedOperations.log.push(e), n.stagedOperations.byId.set(s.id, e);
	} else if (r === "updated") {
		t(c && l, {
			detail: "Old record and new record are required for updated",
			key: "ELEMENT_NOT_FOUND"
		}), An({ record: l });
		let e = {
			status: r,
			oldRecord: c,
			newRecord: l
		};
		n.stagedOperations.log.push(e), n.stagedOperations.byId.set(l.id, e);
	} else if (r === "deleted" && s) {
		t(s, {
			detail: "Record is required for deleted",
			key: "ELEMENT_NOT_FOUND"
		});
		let e = {
			status: r,
			oldRecord: s,
			newRecord: void 0
		};
		n.stagedOperations.log.push(e), n.stagedOperations.byId.set(s.id, e);
	}
}
function Vo(e) {
	let { context: t, operations: n } = e;
	for (let e of n) switch (e.status) {
		case "created":
			Bo({
				context: t,
				status: "created",
				record: e.newRecord
			});
			break;
		case "updated":
			Bo({
				context: t,
				status: "updated",
				oldRecord: e.oldRecord,
				newRecord: e.newRecord
			});
			break;
		case "deleted": Bo({
			context: t,
			status: "deleted",
			record: e.oldRecord
		});
	}
}
async function Ho(e) {
	let { dialecteConfig: n, hooks: r, context: i, query: a, parentRef: o, params: s } = e, { id: c, tagName: l, attributes: u, namespace: d, value: f } = s;
	Uo({
		attributes: u,
		tagName: l
	});
	let p = await $({
		context: i,
		ref: o
	});
	t(p, {
		detail: "Parent record not found",
		key: "ELEMENT_NOT_FOUND",
		ref: o
	});
	let m = ge({
		dialecteConfig: n,
		hooks: r,
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
	ve({
		dialecteConfig: n,
		record: m,
		attributes: m.attributes
	}), ye({
		dialecteConfig: n,
		record: m
	}), Bo({
		context: i,
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
	return Bo({
		context: i,
		status: "updated",
		oldRecord: p,
		newRecord: h
	}), r?.afterCreated && Vo({
		context: i,
		operations: await r.afterCreated({
			childRecord: m,
			parentRecord: h,
			query: a
		})
	}), m;
}
function Uo(e) {
	let { attributes: t, tagName: n } = e;
	if (t && Array.isArray(t)) for (let e of t) {
		let { name: t, namespace: r } = e;
		t !== "xmlns" && !t.startsWith("xmlns:") && t.includes(":") && (typeof r != "object" || r?.prefix !== t.slice(0, t.indexOf(":"))) && T("PREFIXED_ATTRIBUTE_NAME", {
			detail: `Attribute '${t}' on '${n}' is prefixed — pass a local name plus its namespace instead: { name: '${l(t)}', namespace }.`,
			ref: { tagName: n }
		});
	}
}
async function Wo(e) {
	let { dialecteConfig: t, hooks: n, context: r, query: i, parentRef: a, record: o } = e, s = [];
	r.perf.start("core::deepClone"), r.perf.start("core::deepClone::countNodes");
	let c = Go(o);
	r.perf.stop("core::deepClone::countNodes"), r.progress.plan({ steps: c });
	let l = await Ko({
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
function Go(e) {
	let t = 1;
	for (let n of e.tree) t += Go(n);
	return t;
}
async function Ko(e) {
	let { dialecteConfig: t, hooks: n, context: r, query: i, parentRef: a, record: o, mappings: s } = e, c = !0, l = o;
	if (n?.beforeClone) {
		let e = n.beforeClone({ record: o });
		c = e.shouldBeCloned, l = e.transformedRecord;
	}
	if (!c) return l;
	let u = await Ho({
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
		}
	}), d = M(o);
	s.push({
		source: Object.assign(d, { attributes: [...o.attributes] }),
		target: M(u)
	}), r.progress.nextStep();
	for (let e of l.tree) await Ko({
		dialecteConfig: t,
		hooks: n,
		context: r,
		query: i,
		parentRef: M(u),
		record: e,
		mappings: s
	});
	return u;
}
async function qo(e) {
	let { hooks: n, context: r, query: i, ref: a } = e, o = await $({
		context: r,
		ref: a
	});
	t(o, {
		detail: `Record not found (tagName=${a.tagName}, id=${a.id})`,
		key: "ELEMENT_NOT_FOUND",
		ref: a
	}), t(o.parent, {
		detail: "Cannot delete root element",
		key: "PROTECTED_ROOT"
	}), n?.beforeDelete && Vo({
		context: r,
		operations: await n.beforeDelete({
			record: o,
			query: i
		})
	}), await Jo({
		context: r,
		record: o
	}), Bo({
		context: r,
		status: "deleted",
		record: o
	});
	let s = await $({
		context: r,
		ref: M(o.parent)
	});
	t(s, {
		detail: `Parent record not found (tagName=${o.parent.tagName}, id=${o.parent.id})`,
		key: "ELEMENT_NOT_FOUND"
	});
	let c = {
		...s,
		children: s.children.filter((e) => e.id !== o.id)
	};
	return Bo({
		context: r,
		status: "updated",
		oldRecord: s,
		newRecord: c
	}), n?.afterDelete && Vo({
		context: r,
		operations: await n.afterDelete({
			record: o,
			parentRecord: c,
			query: i
		})
	}), c;
}
async function Jo(e) {
	let { context: t, record: n } = e;
	for (let e of n.children) {
		let n = await $({
			context: t,
			ref: M(e)
		});
		n && (n.children.length > 0 && await Jo({
			context: t,
			record: n
		}), Bo({
			context: t,
			status: "deleted",
			record: n
		}));
	}
}
async function Yo(e) {
	let { dialecteConfig: t, hooks: n, context: r, query: i, parentRef: a, params: o } = e, s = Xo(o.attributes), c = await Ia({
		context: r,
		ref: a,
		tagName: o.tagName
	});
	return (s ? c.find((e) => Ba({
		dialecteConfig: t,
		record: e,
		attributeFilter: s
	})) : o.id === void 0 ? c[0] : c.find((e) => e.id === o.id)) || Ho({
		dialecteConfig: t,
		hooks: n,
		context: r,
		query: i,
		parentRef: a,
		params: o
	});
}
function Xo(e) {
	if (!e) return;
	let t = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e.name, e.value])) : e;
	return Object.values(t).some((e) => e !== void 0 && e !== "") ? t : void 0;
}
async function Zo(e) {
	let { dialecteConfig: n, hooks: r, context: i, query: a, ref: o, params: s } = e, { attributes: l, value: u } = s, d = await $({
		context: i,
		ref: o
	});
	t(d, {
		detail: `Record not found (tagName=${o.tagName}, id=${o.id})`,
		key: "ELEMENT_NOT_FOUND",
		ref: o
	});
	let f = l ? me({
		dialecteConfig: n,
		tagName: d.tagName,
		attributes: l,
		stored: d.attributes
	}) : [], p = d.attributes;
	l && (p = [...d.attributes.filter((e) => !f.some((t) => t.name === e.name)), ...f].filter((e) => e.value !== void 0 && e.value !== null), ve({
		dialecteConfig: n,
		record: {
			...d,
			attributes: p
		},
		attributes: f
	}));
	let m = f.some(c), h = ge({
		dialecteConfig: n,
		hooks: r,
		record: {
			...d,
			attributes: p,
			value: u === void 0 ? d.value : u
		}
	});
	return m && (ye({
		dialecteConfig: n,
		record: h
	}), be({
		dialecteConfig: n,
		merged: p,
		record: h
	})), Qo(d, h) || (Bo({
		context: i,
		status: "updated",
		oldRecord: d,
		newRecord: h
	}), r?.afterUpdated && Vo({
		context: i,
		operations: await r.afterUpdated({
			oldRecord: d,
			newRecord: h,
			query: a
		})
	})), h;
}
function Qo(e, t) {
	return e.value !== t.value || e.attributes.length !== t.attributes.length ? !1 : e.attributes.every((e, n) => $o(e, t.attributes[n]));
}
function $o(e, t) {
	return e.name === t.name && e.value === t.value && e.namespace?.uri === t.namespace?.uri && e.namespace?.prefix === t.namespace?.prefix;
}
var es = class extends Ro {
	constructor(e, t, n, r) {
		super(e, t), this.hooks = n, this.query = r;
	}
	async addChild(e, t) {
		return Ho({
			context: this.getContext(),
			parentRef: M(e),
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
		return Yo({
			context: this.getContext(),
			parentRef: M(e),
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
		return Zo({
			context: this.getContext(),
			ref: M(e),
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
		return qo({
			context: this.getContext(),
			ref: M(e),
			hooks: this.hooks,
			query: this.query
		});
	}
	async deepClone(e, t) {
		return await Wo({
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			context: this.getContext(),
			query: this.query,
			parentRef: M(e),
			record: t
		});
	}
};
async function ts(e) {
	let { hooks: t, context: n, query: r } = e;
	t?.beforeCommit && Vo({
		context: n,
		operations: await t.beforeCommit({
			operations: n.stagedOperations.log,
			query: r
		})
	});
}
function ns(e) {
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
function rs(e) {
	return f(e.thrown)?.key === "STORE_ENGINE_LOST";
}
function is(e) {
	let t = f(e.thrown);
	return t?.key === "STORE_ENGINE_LOST" && t.meta?.outcome === "not-applied";
}
function as() {}
async function os(e) {
	let { store: t, writeId: n } = e;
	try {
		return await t.getWriteOutcome({ writeId: n });
	} catch {
		return "unknown";
	}
}
function ss(e) {
	let { thrown: t, writeId: n, outcome: i, meta: a } = e, o = f(t);
	return r("STORE_ENGINE_LOST", {
		detail: `${o?.detail ?? "The engine was lost"} - the write's outcome: ${i}`,
		meta: {
			...o?.meta,
			...a,
			writeId: n,
			outcome: i
		},
		cause: t instanceof Error ? t : void 0
	});
}
async function cs(e) {
	let { stagedOperations: t, store: n, documentId: r, documentState: i, progress: a, perf: o = Nt } = e;
	o.start("core::commit"), o.start("core::commit::merge");
	let { creates: s, updates: c, deletes: l } = ns(t);
	o.stop("core::commit::merge");
	let u = s.length + c.length + l.length;
	i.loading = !0, a.plan({ steps: u });
	let d = 0;
	function f(e) {
		for (; d < e;) a.nextStep(), d++;
	}
	let p = crypto.randomUUID();
	try {
		o.count("core::store::commit"), o.start("core::store::commit");
		try {
			await n.commit({
				documentId: r,
				writeId: p,
				creates: s.map((e) => e.newRecord),
				updates: c.map((e) => e.newRecord),
				deletes: l.map((e) => e.oldRecord.id),
				onProgress: (e) => {
					f(e);
				}
			});
		} catch (e) {
			if (!rs({ thrown: e })) throw e;
			let t = await os({
				store: n,
				writeId: p
			});
			if (t !== "applied") throw ss({
				thrown: e,
				writeId: p,
				outcome: t
			});
		}
		o.stop("core::store::commit");
	} catch (e) {
		throw i.loading = !1, a.endPlan(), o.stop("core::commit"), e;
	}
	i.lastUpdate = Date.now(), a.endPlan(), o.stop("core::commit");
}
var ls = class extends zo {
	constructor(e, t, n, r, i, a = Nt, o = () => {}) {
		super(e, t, n, a), this.stagedOperations = Ta(), this.recordCache = /* @__PURE__ */ new Map(), this.stagingFinished = !1, this.documentActivity = r, this.hooks = i, this.progressReporter = Ca(r, o);
	}
	get progress() {
		return this.progressReporter;
	}
	get any() {
		return this._anyTx ??= new es(() => this.context, this.dialecteConfig, this.hooks, this);
	}
	getOperations() {
		return this.stagedOperations;
	}
	get context() {
		return {
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
		return Ho({
			context: this.context,
			parentRef: M(e),
			params: t,
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			query: this
		});
	}
	async ensureChild(e, t) {
		return Yo({
			context: this.context,
			parentRef: M(e),
			params: t,
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			query: this
		});
	}
	async update(e, t) {
		return Zo({
			context: this.context,
			ref: M(e),
			params: t,
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			query: this
		});
	}
	async delete(e) {
		return qo({
			context: this.context,
			ref: M(e),
			hooks: this.hooks,
			query: this
		});
	}
	async deepClone(e, t) {
		return Wo({
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			context: this.context,
			parentRef: M(e),
			record: t,
			query: this
		});
	}
	async finishStaging() {
		this.stagingFinished || (this.stagingFinished = !0, await ts({
			hooks: this.hooks,
			context: this.context,
			query: this
		}));
	}
	getStagedOperations() {
		return this.stagedOperations.log;
	}
	clearStagedOperations() {
		this.stagedOperations = Ta();
	}
	clearRecordCache() {
		this.recordCache.clear();
	}
	async commit() {
		await cs({
			stagedOperations: this.stagedOperations.log,
			store: this.store,
			documentId: this.documentId,
			documentState: this.documentActivity,
			progress: this.progressReporter,
			perf: this.perf
		});
	}
};
function us(e) {
	return e.recordCache !== void 0;
}
function ds(e) {
	let { creates: t, updates: n, deletes: r } = ns(e), i = /* @__PURE__ */ new Map();
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
var fs = class {
	constructor(e, t, n, r, i, a) {
		this.activeTransactions = 0, this.store = e, this.config = t, this.documentId = n, this.hooks = i, this.extensionsRegistry = r, this.state = a.state, this.channelName = a.channelName, this.broadcast = a.broadcast, this.refreshHistoryStatus = a.refreshHistoryStatus, this.perf = a.perf, this.subscribe = a.subscribeState, this.signalStateChange = a.signalStateChange, this.startWrite = a.startWrite;
	}
	withQueryExtensions(e) {
		let t = xa(this.extensionsRegistry?.query, e);
		return Object.assign(e, t);
	}
	withAllExtensions(e) {
		let t = xa(this.extensionsRegistry?.query, e), n = xa(this.extensionsRegistry?.transaction, e), r = {};
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
		return new zo(this.store, this.config, this.documentId, this.perf);
	}
	get query() {
		return this.withQueryExtensions(this.createQuery());
	}
	createTransaction() {
		return new ls(this.store, this.config, this.documentId, this.state, this.hooks, this.perf, this.signalStateChange);
	}
	async transaction(e, t) {
		this.assertNoActiveTransaction();
		let n = this.startWrite(), r;
		try {
			this.activeTransactions++, this.state.loading = !0, this.state.error = null, this.signalStateChange(!1);
			let n = this.withAllExtensions(this.createTransaction());
			r = n;
			let i = await e(n);
			return await n.finishStaging(), await n.commit(), await this.refreshHistoryStatus(), this.broadcast({
				type: "commit",
				documentId: this.documentId,
				timestamp: this.state.lastUpdate ?? Date.now()
			}), n.clearStagedOperations(), n.clearRecordCache(), this.state.history.push({
				method: "commit",
				message: t?.label ?? "Changes committed",
				timestamp: Date.now()
			}), i;
		} catch (e) {
			throw await this.readAgainAfterLoss({ thrown: e }), this.reportFailure(e);
		} finally {
			n(), this.activeTransactions--, this.state.loading = !1, r?.progress.forceClear(), this.signalStateChange(!0);
		}
	}
	async readAgainAfterLoss(e) {
		rs(e) && !is(e) && (await this.refreshHistoryStatus().catch(as), this.broadcast({
			type: "commit",
			documentId: this.documentId,
			timestamp: Date.now()
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
		let r = n.getStagedOperations(), i = ds(r), a = !1;
		return {
			operations: r,
			summary: i,
			query: n,
			commit: async () => {
				if (a) return;
				this.assertNoActiveTransaction();
				let e = this.startWrite();
				a = !0, this.activeTransactions++, this.state.loading = !0;
				try {
					await n.commit(), await this.refreshHistoryStatus(), this.broadcast({
						type: "commit",
						documentId: this.documentId,
						timestamp: this.state.lastUpdate ?? Date.now()
					}), n.clearStagedOperations(), n.clearRecordCache(), this.state.history.push({
						method: "commit",
						message: t?.label ?? "Changes committed",
						timestamp: Date.now()
					});
				} catch (e) {
					throw is({ thrown: e }) && (a = !1), await this.readAgainAfterLoss({ thrown: e }), this.reportFailure(e);
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
		let t = f(e);
		if (e instanceof Error && t) return this.state.error = t, e;
		let n = r("UNKNOWN", {
			detail: e instanceof Error ? e.message : String(e),
			cause: e instanceof Error ? e : void 0
		});
		return this.state.error = f(n) ?? null, n;
	}
	assertNoActiveTransaction() {
		this.activeTransactions > 0 && T("CONCURRENT_TRANSACTION", { detail: `${this.activeTransactions} transaction(s) already active. Concurrent transactions risk lost updates — serialize them or implement a transaction queue.` });
	}
	close() {
		return this.store.close();
	}
	async destroy() {
		await this.store.destroy();
	}
}, ps = class {
	get name() {
		return t(this._name !== void 0, {
			key: "PROJECT_NOT_OPENED",
			detail: "Call project.open(name) before accessing project properties."
		}), this._name;
	}
	get store() {
		return t(this._store !== void 0 && !this.closing && this.openSettled, {
			key: "PROJECT_NOT_OPENED",
			detail: this.closing ? "The project is closed: open it again before using it." : "Call project.open(name), and await it, before accessing project properties."
		}), this._store;
	}
	enqueueImport(e) {
		let { fileName: t, work: n } = e, r = this.importChain.then(n, n);
		this.importChain = r;
		let i = { fileName: t };
		this.importsInFlight.add(i);
		let a = this.importsInFlight, o = () => this.drainWhenIdle();
		function s() {
			a.delete(i), o();
		}
		return r.then(s, s), r;
	}
	inLifecycleTurn(e) {
		this.lifecycleTurns += 1;
		let t = this.lifecycle.then(e, e).finally(() => {
			--this.lifecycleTurns;
		});
		return this.lifecycle = t, t;
	}
	startCountedWrite() {
		let e = this.writes, t = () => this.drainWhenIdle();
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
		let e = () => {};
		return this.importChain.then(e, e);
	}
	get channel() {
		return t(this._channel !== void 0, {
			key: "PROJECT_NOT_OPENED",
			detail: "Call project.open(name) before accessing project properties."
		}), this._channel;
	}
	get channelName() {
		return t(this._channelName !== void 0, {
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
			return vs({
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
		this.closing = !1, this.announcing = !1, this.stopStoreNotices = bs, this.ownChangesTold = [], this.openSettled = !1, this.toldWhileOpening = [], this.resyncWhenSettled = !1, this.pendingBroadcastWork = /* @__PURE__ */ new Set(), this.importChain = Promise.resolve(), this.importsInFlight = /* @__PURE__ */ new Set(), this.lifecycle = Promise.resolve(), this.opens = 0, this.lifecycleTurns = 0, this.writes = ir(), this.state = {
			documents: /* @__PURE__ */ new Map(),
			activeTransactions: 0
		}, this.stateSubscribers = /* @__PURE__ */ new Map();
		let t = Object.keys(e.configs);
		this.dialecteId = e.dialecteId, this.dialecteVersion = e.dialecteVersion, this.engineUrl = e.engineUrl, this.storage = e.storage, this.configs = e.configs, this.defaultConfigKey = e.defaultConfigKey ?? t[0], this.hooks = e.hooks, this.perfEnabled = e.dev?.perf ?? !1, this.perf = Y({ enabled: this.perfEnabled }), this.mergedExtensions = e.extensions ? Se({
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
			n = this.resolveProjectStore({ name: t }), this.announcing = typeof n.subscribe == "function", this.ownChangesTold = [], this.openSettled = !1, this.toldWhileOpening = [], this.resyncWhenSettled = !1, this._channelName = _a({
				name: t,
				instance: this.announcing ? crypto.randomUUID() : void 0
			}), n.subscribe && (this.stopStoreNotices = n.subscribe((e) => this.onStoreNotice(e))), r = new BroadcastChannel(this._channelName), this.announcing || r.addEventListener("message", (e) => {
				this.onChannelHeard(e.data);
			}), await n.open();
		} catch (e) {
			throw this.stopListeningToStore(), r?.close(), this.refusedStore = n, await hs({ store: n }), e;
		}
		this._channel = r, this._store = n, this.opens += 1, this.closing = this.lifecycleTurns > 1;
		try {
			let e = ba(await n.getDocuments());
			for (let t of e) this.state.documents.set(t.id, pa(t));
			await Promise.all(e.map((e) => this.readHistoryStatus({
				store: n,
				documentId: e.id
			})));
		} catch (e) {
			throw this.closing = !0, this.stopListeningToStore(), r.close(), this._channel = void 0, this._store = void 0, this.state.documents.clear(), this.refusedStore = n, await hs({ store: n }), e;
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
		return sa({
			name: e.name,
			dialecteId: this.dialecteId,
			storage: this.storage,
			runtime: {
				configs: this.configs,
				defaultConfigKey: this.defaultConfigKey,
				hooks: this.hooks,
				perf: this.perfEnabled,
				dialecteVersion: this.dialecteVersion,
				engineUrl: this.engineUrl
			},
			perf: this.perf
		});
	}
	onChannelMessage(e) {
		if (!this.closing) switch (e?.type) {
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
		this.stopStoreNotices(), this.stopStoreNotices = bs;
	}
	trackBroadcastWork(e) {
		let { work: t, told: n } = e, r = t.catch((e) => {
			this.closing || f(e)?.key === "STORE_ENGINE_LOST" || this.reportFoldFailure({
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
		let e = setTimeout(() => this.reportCloseWait(), va);
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
		console.warn(`Project "${this._name}" has waited ${va} ms to close for ${t}, ${this.writes.count} write(s) and ${this.pendingBroadcastWork.size} other-tab update(s) in flight, then its store's close; it goes on waiting. If it never ends, a hook or a transaction callback is awaiting this Project's open, close or destroy.`);
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
			let t = await ha({
				store: this.store,
				configs: this.configs,
				defaultConfigKey: this.defaultConfigKey,
				options: e,
				hooks: this.hooks
			});
			return this.state.documents.set(t.documentId, t.documentState), this.broadcast({
				type: "init-empty-document",
				documentId: t.documentId,
				timestamp: Date.now()
			}), t.documentId;
		});
	}
	async removeDocument(e) {
		return this.counted(async () => {
			await this.writeOrReadAgain({ write: () => this.store.removeDocument(e) }), this.state.documents.delete(e), this.broadcast({
				type: "document-removed",
				documentId: e,
				timestamp: Date.now()
			});
		});
	}
	importStore(e) {
		let t = this.store;
		return Ft({
			configs: this.configs,
			defaultConfigKey: this.defaultConfigKey,
			configKey: e?.configKey
		}), t;
	}
	async import(e, t) {
		this.importStore(t), ms({ options: t });
		let n = this.opens, i = [];
		for (let a of e) try {
			this.refuseClosedOpen({ opened: n }), i.push({
				status: "imported",
				...await this.importFile(a, t)
			});
		} catch (e) {
			let t = f(e) ?? f(r("IMPORT_FAILED", {
				detail: e instanceof Error ? e.message : String(e),
				cause: e instanceof Error ? e : void 0
			}));
			i.push({
				status: "failed",
				fileName: a.name,
				error: t
			});
		}
		return i;
	}
	async importFile(e, t) {
		let n = this.importStore(t);
		return this.enqueueImport({
			fileName: e.name,
			work: () => this.importOne({
				file: e,
				options: t,
				store: n
			})
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
			throw rs({ thrown: e }) ? await this.lostImportError({
				store: r,
				thrown: e,
				writeId: s
			}) : e;
		}
		return c.perf && this.perf.merge({
			report: c.perf,
			prefix: "store"
		}), this.state.documents.set(c.record.id, pa(c.record)), this.broadcast({
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
			await t();
		} catch (e) {
			if (!rs({ thrown: e })) throw e;
			if (await this.refreshState().catch(as), this.announcing && this.postToldChanges({}), n !== void 0) {
				await this.refreshHistoryStatus(n).catch(as);
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
		let { store: t, thrown: n, writeId: r } = e, i = await os({
			store: t,
			writeId: r
		});
		if (i !== "applied") return this.announcing && this.postToldChanges({}), ss({
			thrown: n,
			writeId: r,
			outcome: i
		});
		await this.refreshState().catch(as);
		let a = Array.from(this.state.documents.values()).find(function(e) {
			return e.record.writeId === r;
		});
		return a ? this.broadcast({
			type: "document-imported",
			documentId: a.record.id,
			timestamp: Date.now()
		}) : this.announcing && this.postToldChanges({}), ss({
			thrown: n,
			writeId: r,
			outcome: i,
			meta: a && { documentId: a.record.id }
		});
	}
	async export(e) {
		return la({
			store: this.store,
			state: this.state,
			projectName: this.name,
			request: e,
			perf: this.perf
		});
	}
	async getDocuments() {
		return ba(await this.store.getDocuments());
	}
	async getDocument(e) {
		let t = await this.store.getDocument(e);
		return t && !ya(t) ? t : void 0;
	}
	openDocument(e) {
		let n = this.store, r = this.state.documents.get(e);
		t(r, {
			key: "DOCUMENT_NOT_REGISTERED",
			detail: `Document "${e}" not registered in project "${this.name}"`
		});
		let i = this.configs[r.record.configKey], a = this.opens;
		return new fs(n, i, e, this.mergedExtensions, this.hooks, {
			state: r,
			channelName: this.channelName,
			broadcast: (e) => {
				this.isCurrentOpen({ opened: a }) && this.broadcast(e);
			},
			refreshHistoryStatus: async () => {
				this.isCurrentOpen({ opened: a }) && await this.refreshHistoryStatus(e);
			},
			perf: this.perf,
			subscribeState: (t) => this.isCurrentOpen({ opened: a }) ? this.subscribeState(e, t) : gs,
			signalStateChange: (t) => {
				this.isCurrentOpen({ opened: a }) && this.signalStateChange(e, t);
			},
			startWrite: () => this.isCurrentOpen({ opened: a }) ? (this.refuseClosedOpen({ opened: a }), this.startCountedWrite()) : _s
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
			let n = this.state.documents.get(e);
			t(n, {
				key: "DOCUMENT_NOT_REGISTERED",
				detail: `Document "${e}" not registered in project "${this.name}"`
			}), await this.writeOrReadAgain({
				documentId: e,
				write: () => this.store.undo(e)
			});
			let r = Date.now();
			n.lastUpdate = r, await this.refreshHistoryStatus(e), this.broadcast({
				type: "commit",
				documentId: e,
				timestamp: r
			}), this.signalStateChange(e, !0);
		});
	}
	async redo(e) {
		return this.counted(async () => {
			let n = this.state.documents.get(e);
			t(n, {
				key: "DOCUMENT_NOT_REGISTERED",
				detail: `Document "${e}" not registered in project "${this.name}"`
			}), await this.writeOrReadAgain({
				documentId: e,
				write: () => this.store.redo(e)
			});
			let r = Date.now();
			n.lastUpdate = r, await this.refreshHistoryStatus(e), this.broadcast({
				type: "commit",
				documentId: e,
				timestamp: r
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
		return fa({
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
		return await this.visitOpenDocuments({ visit: async (n) => (t.push(...await e(n.query)), !1) }), t;
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
		t(this.opens === e.opened && !this.closing, {
			key: "PROJECT_NOT_OPENED",
			detail: "The project was closed, or another one opened, while this call ran: open it again."
		});
	}
	getDatabaseInstance() {
		return this.store.getDatabaseInstance();
	}
	async refreshState() {
		let e = await this.store.getDocuments();
		ma(this.state.documents, ba(e));
	}
	async reconcileFromBroadcast(e) {
		this.closing || (await this.store.reconcile(e), await this.refreshState());
	}
};
function ms(e) {
	let { options: t } = e;
	t && "path" in t && t.path !== void 0 && T("DOCUMENT_PATH_INVALID", {
		detail: "An import of several files takes no path: a path names one file, give it to importFile",
		meta: { path: t.path }
	});
}
async function hs(e) {
	try {
		await e.store?.close();
	} catch {}
}
function gs() {}
function _s() {}
function vs(e) {
	let { first: t, second: n } = e;
	return t.type === n.type && ys({
		message: t,
		field: "documentId"
	}) === ys({
		message: n,
		field: "documentId"
	}) && ys({
		message: t,
		field: "blobId"
	}) === ys({
		message: n,
		field: "blobId"
	});
}
function ys(e) {
	let { message: t, field: n } = e;
	return n in t ? t[n] : void 0;
}
function bs() {}
//#endregion
//#region node_modules/.pnpm/@dialecte+nsd@0.5.0/node_modules/@dialecte/nsd/dist/v2017A/index.js
function xs(e) {
	let { storage: t = { type: "local" }, extensions: n } = e ?? {};
	return new ps({
		configs: {
			nsd: Be,
			nsdoc: Ve
		},
		defaultConfigKey: "nsd",
		storage: t,
		extensions: {
			base: He,
			custom: n
		}
	});
}
//#endregion
//#region src/nsd/utils/nsd-project.ts
var Ss = "SET-LIBRARY-NSD", Cs = null;
function ws() {
	return Cs ||= xs().open(Ss), Cs;
}
var Ts = ie(0);
function Es() {
	Ts.value++;
}
//#endregion
//#region src/nsd/utils/query-nsd-metadata.ts
async function Ds(e) {
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
function Os(e) {
	return e.replace(/__+/g, "-").replace(/[\s_]/g, "").toLowerCase();
}
function ks(e) {
	let t = [
		e.version,
		e.revision?.toUpperCase(),
		e.release
	].filter((e) => !!e);
	return t.length ? t.join(".") : "-";
}
function As(e, t) {
	return {
		fileName: e,
		isExtension: t.isExtension,
		isNsdoc: t.isNsdoc,
		versionRevisionRelease: ks(t)
	};
}
function js(e) {
	let t = e.id.replace(/\s+/g, "_");
	if (!e.version || !e.revision) return `${t}.nsd`;
	let n = e.revision.toUpperCase();
	return `${t}_${e.version}${n}${e.release}.nsd`;
}
//#endregion
export { Ds as a, Es as c, ue as d, D as f, Os as i, ze as l, ks as n, ws as o, js as r, Ts as s, As as t, Ce as u };
