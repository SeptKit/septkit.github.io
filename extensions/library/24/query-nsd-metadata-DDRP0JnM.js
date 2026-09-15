import { P as e, X as t, h as n, j as r, yt as i } from "./main-DX8Z9Ibe.js";
//#region src/nsd/icons/close-icon.vue
var a = {}, o = {
	viewBox: "0 0 64 64",
	"aria-hidden": "true",
	focusable: "false"
};
function s(n, i) {
	return t(), e("svg", o, [...i[0] ||= [r("path", {
		fill: "currentColor",
		d: "M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z"
	}, null, -1)]]);
}
var c = /* @__PURE__ */ n(a, [["render", s]]), l = {}, u = {
	viewBox: "0 -960 960 960",
	"aria-hidden": "true",
	focusable: "false"
};
function d(n, i) {
	return t(), e("svg", u, [...i[0] ||= [r("path", {
		fill: "currentColor",
		d: "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
	}, null, -1)]]);
}
var f = /* @__PURE__ */ n(l, [["render", d]]), p = {
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
	UNKNOWN_NAMESPACE_PREFIX: {
		code: "D3006",
		message: "Unknown namespace prefix on attribute — pass it explicitly as { name, namespace: { prefix, uri } }"
	},
	PREFIXED_ATTRIBUTE_NAME: {
		code: "D3007",
		message: "Authored attribute name must be a local name — pass the namespace separately as { name, namespace }, not a prefixed name"
	},
	FIXED_VALUE_VIOLATION: {
		code: "D3008",
		message: "Attribute value differs from the schema-fixed value"
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
function m(e, t) {
	let n = p[e], r = {
		code: n.code,
		key: e,
		message: t.message ?? n.message,
		detail: t.detail,
		method: h((/* @__PURE__ */ Error()).stack),
		ref: t.ref,
		cause: t.cause
	}, i = Error(t.detail);
	throw i.cause = r, i;
}
function h(e) {
	if (!e) return "unknown";
	let t = e.split("\n").slice(1).find((e) => !/\b(throwDialecteError|assert)\b/.test(e));
	if (!t) return "unknown";
	let n = t.match(/\bat\s+(\S+)\s+\(([^)]+)\)/), r = n?.[1], i = n?.[2];
	if (!i || !r) return r ?? "unknown";
	let a = i.match(/(\w[\w-]*\/src\/[^?:]+)/);
	return a ? `${a[1].replace(/\.[^/.]+$/, "")}::${r}` : r;
}
function g(e) {
	let { dialecteConfig: t, tagName: n, attributeName: r } = e, i = t.elements.includes(n), a = i ? t.definition[n] : void 0, o = a?.attributes.details[r];
	return {
		isKnownElement: i,
		isDefined: !!o,
		isRequired: !!o?.required,
		isIdentityField: a?.attributes.identityFields?.includes(r) ?? !1,
		fixed: o?.fixed,
		default: o?.default,
		namespace: o?.namespace || void 0
	};
}
function _(e) {
	let { dialecteConfig: t, tagName: n, attributeName: r, defaults: i } = e;
	if (i === "none") return;
	let a = g({
		dialecteConfig: t,
		tagName: n,
		attributeName: r
	});
	if (i === "required") return a.isRequired || a.fixed !== void 0 ? a.fixed ?? a.default ?? "" : void 0;
	if (a.fixed !== void 0) return a.fixed;
	if (a.default) return a.default;
}
function v(e) {
	let t = e.lastIndexOf(":");
	return t === -1 ? e : e.slice(t + 1);
}
function y(e, t) {
	if (t) return Object.values(e.namespaces).find((e) => e.prefix === t);
}
function b(e, t) {
	return e.namespaces[t] ?? y(e, t);
}
function x(e, t) {
	return e.namespaces[t]?.prefix ?? t;
}
function S(e, t) {
	let n = e.namespace?.uri ?? "", r = t.namespace?.uri ?? "";
	return n === r ? e.name === t.name ? 0 : e.name < t.name ? -1 : 1 : n < r ? -1 : 1;
}
function C(e, t) {
	let n = t.flatMap((t) => e.filter((e) => e.name === t)), r = e.filter((e) => !t.includes(e.name)).sort(S);
	return [...n, ...r];
}
function w(e, t) {
	if (e) return;
	let { detail: n, key: r = "ASSERTION_FAILED", ref: i } = t;
	m(r, {
		detail: n,
		ref: i
	});
}
function T(e) {
	let { parentTagName: t, children: n, childrenConfig: r } = e, i = r[t];
	if (!i || i.length === 0) return n;
	let a = new Set(i), o = /* @__PURE__ */ new Map();
	for (let e of a) o.set(e, []);
	let s = [];
	for (let e of n) {
		let t = o.get(e.tagName);
		t ? t.push(e) : s.push(e);
	}
	let c = [];
	for (let e of a) {
		let t = o.get(e);
		t && t.length && c.push(...t);
	}
	return c.push(...s), c;
}
async function ee(e) {
	let { data: t, filename: n, pickerType: r } = e;
	if ("showSaveFilePicker" in window) try {
		let e = await (await window.showSaveFilePicker({
			suggestedName: n,
			...r ? { types: [r] } : {}
		})).createWritable();
		await e.write(t), await e.close();
		return;
	} catch (e) {
		if (e.name === "AbortError") return;
		console.error("Save failed:", e);
		return;
	}
	let i = URL.createObjectURL(t), a = document.createElement("a");
	a.href = i, a.download = n, document.body.appendChild(a), a.click(), a.remove(), URL.revokeObjectURL(i);
}
//#endregion
//#region node_modules/.pnpm/@dialecte+core@0.4.9/node_modules/@dialecte/core/dist/helpers.js
var E = `${{
	uri: "http://dialecte.dev/XML/DEV",
	prefix: "dev"
}.prefix}:db-id`, te = {
	uri: "http://www.w3.org/2001/XMLSchema-instance",
	prefix: "xsi"
};
`${te.prefix}${te.uri}`;
function ne(e, t) {
	return e.tagName === t;
}
function re(e) {
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
function ie(e) {
	let { record: t, status: n } = e, r = n ?? ("status" in t ? t.status : "unchanged");
	return {
		...re(t),
		status: r
	};
}
function D(e) {
	let { record: t, status: n, tree: r } = e, i = r ?? ("tree" in t ? t.tree : []);
	return {
		...ie({
			record: t,
			status: n
		}),
		tree: i
	};
}
function O(e) {
	let { dialecteConfig: t, tagName: n, attributes: r } = e;
	return (Array.isArray(r) ? r : Object.entries(r).map(([e, r]) => ({
		name: e,
		value: r,
		namespace: t.definition[n]?.attributes.details[e]?.namespace || void 0
	}))).map((e) => ae({
		attribute: e,
		dialecteConfig: t,
		tagName: n
	}));
}
function ae(e) {
	let { attribute: t, dialecteConfig: n, tagName: r } = e, i;
	typeof t.namespace == "string" ? (i = b(n, t.namespace), i || m("UNKNOWN_NAMESPACE_PREFIX", {
		detail: `Unknown namespace '${t.namespace}' on attribute '${t.name}' — use a registered namespace key or pass a full { name, namespace: { prefix, uri } }.`,
		ref: { tagName: r }
	})) : i = t.namespace;
	let a = t.name.indexOf(":");
	if (!i && a !== -1) {
		let e = t.name.slice(0, a);
		e !== "xmlns" && (i = y(n, e), i || m("UNKNOWN_NAMESPACE_PREFIX", {
			detail: `Unknown namespace prefix '${e}' on attribute '${t.name}' — pass it explicitly as { name, namespace: { prefix, uri } }.`,
			ref: { tagName: r }
		}));
	}
	return i && i.prefix && i.prefix !== "xmlns" ? {
		...t,
		name: `${i.prefix}:${v(t.name)}`,
		namespace: i
	} : (t.namespace, {
		...t,
		namespace: i
	});
}
function k(e) {
	return w(e, { detail: "The record or ref is undefined" }), {
		id: e.id,
		tagName: e.tagName
	};
}
function oe(e) {
	let { dialecteConfig: t, hooks: n, record: r } = e, { id: i, tagName: a, attributes: o, namespace: s, value: c } = r, l = i ?? crypto.randomUUID(), u = o ? O({
		tagName: a,
		attributes: o,
		dialecteConfig: t
	}) : [], d = {
		id: l,
		tagName: a,
		attributes: u,
		namespace: s ?? {
			prefix: "prefixNeededForNotSupportedNamespace",
			uri: "uriNeededForNotSupportedNamespace"
		},
		value: c ?? "",
		parent: r.parent ?? null,
		children: r.children ?? []
	}, f = Object.values(t.namespaces).map(({ uri: e }) => e), p = s?.uri != null && !f.includes(s.uri);
	if (!(t.elements.includes(a) && !p)) return d;
	let m = t.definition[a].attributes.sequence, h = u.filter((e) => {
		let t = m.includes(e.name), n = "namespace" in e && e.namespace != null;
		if (!t && !n) return !1;
		let r = e.value === void 0 || e.value === null || e.value === "";
		return !(t && r);
	}), g = t.namespaces.default.uri, _ = h.map((e) => {
		if ("namespace" in e && e.namespace?.uri === g) {
			let { namespace: t, ...n } = e;
			return n;
		}
		return e;
	}), v = r.parent?.tagName, y = v ? t.definition[v]?.children?.details?.[a]?.namespace : void 0, b = {
		...d,
		namespace: y ?? t.definition[a].namespace,
		attributes: C(_, m)
	};
	return n?.afterStandardizedRecord && (b = n.afterStandardizedRecord({ record: b }), b = {
		...b,
		attributes: C(b.attributes, m)
	}), b;
}
function A(e) {
	let { dialecteConfig: t, tagName: n, attributes: r } = e;
	for (let e of r) {
		let r = g({
			dialecteConfig: t,
			tagName: n,
			attributeName: e.name
		});
		r.fixed !== void 0 && e.value !== r.fixed && m("FIXED_VALUE_VIOLATION", {
			detail: `Attribute '${e.name}' on '${n}' is fixed to '${r.fixed}' but was set to '${String(e.value)}'.`,
			ref: { tagName: n }
		});
	}
}
function j(e, t, n, r) {
	if (!e || !t) return;
	let i = Object.keys(t).filter((t) => t in e);
	w(i.length === 0, {
		key: "EXTENSION_METHOD_COLLISION",
		detail: `Module "${n}" has conflicting ${r} method(s): ${i.map((e) => `"${e}"`).join(", ")}`
	});
}
function se(e) {
	let t = {}, n = {}, r = [...Object.entries(e.base ?? {}), ...Object.entries(e.custom ?? {})];
	for (let [e, i] of r) i.query && (j(t[e], i.query, e, "query"), t[e] = {
		...t[e],
		...i.query
	}), i.transaction && (j(n[e], i.transaction, e, "transaction"), n[e] = {
		...n[e],
		...i.transaction
	});
	return {
		query: t,
		transaction: n
	};
}
//#endregion
//#region node_modules/.pnpm/@dialecte+nsd@0.1.9/node_modules/@dialecte/nsd/dist/config-OIL3vhlF.js
var ce = /* @__PURE__ */ "Abbreviation.Abbreviations.AbstractLNClass.ApplicableServiceNS.ApplicableServices.AppliesTo.BasicType.BasicTypes.CDC.CDCs.Changes.ConstructedAttribute.ConstructedAttributes.Copyright.DataAttribute.DataObject.DataSetMemberOf.DependsOn.Doc.Enumeration.Enumerations.FunctionalConstraint.FunctionalConstraints.LNClass.LNClasses.License.Literal.NS.NSDoc.Notice.PresenceCondition.PresenceConditions.Service.ServiceCDC.ServiceCDCs.ServiceConstructedAttribute.ServiceConstructedAttributes.ServiceDataAttribute.ServiceNS.ServiceNsUsage.ServiceParameter.ServiceTypeRealization.ServiceTypeRealizations.SubDataAttribute.SubDataObject".split("."), le = {
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
}, ue = {
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
}, de = {
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
}, fe = {
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
}, pe = [
	"BasicTypes",
	"CDCs",
	"ConstructedAttributes",
	"DependsOn",
	"Enumerations",
	"LNClasses",
	"NS"
], M = {
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
		typeKindParameterized: "",
		"xsi:type": ""
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
		typeKindParameterized: "",
		"xsi:type": ""
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
}, me = {
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
				descID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				name: {
					required: !0,
					facets: { whiteSpace: "replace" }
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [],
			details: {}
		}
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
			details: { Abbreviation: {
				required: !0,
				minOccurs: 1
			} }
		},
		constraints: [{
			kind: "unique",
			name: "uniqueAbbreviation",
			selector: [{ steps: [{
				kind: "name",
				value: "Abbreviation"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
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
				base: { facets: {
					pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					minLength: 1,
					whiteSpace: "collapse"
				} },
				deprecated: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				descID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				informative: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				name: {
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1,
						whiteSpace: "collapse"
					}
				},
				titleID: {
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
			sequence: ["DataObject"],
			details: { DataObject: {} }
		},
		constraints: [{
			kind: "unique",
			name: "uniqueDataObjectAbstractLNClass",
			selector: [{ steps: [{
				kind: "name",
				value: "DataObject"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
	},
	ApplicableServiceNS: {
		tag: "ApplicableServiceNS",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Root element of a file holding the allowed usages of ServiceNS-es.",
		parents: [],
		attributes: {
			sequence: ["date", "version"],
			details: {
				date: {
					required: !0,
					facets: { whiteSpace: "collapse" }
				},
				version: {
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
			sequence: ["Copyright", "ServiceNsUsage"],
			details: {
				Copyright: { maxOccurs: 1 },
				ServiceNsUsage: {
					required: !0,
					minOccurs: 1
				}
			}
		}
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
			details: {
				Service: {},
				DataSetMemberOf: {}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueDataSetMemberOf",
			selector: [{ steps: [{
				kind: "name",
				value: "DataSetMemberOf"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "cb",
				isAttribute: !0
			} }]
		}, {
			kind: "unique",
			name: "uniqueService",
			selector: [{ steps: [{
				kind: "name",
				value: "Service"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
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
					facets: {
						pattern: ["\\x00-\\x7f+"],
						whiteSpace: "replace"
					}
				},
				publicationStage: {
					default: "IS",
					facets: {
						enumeration: [
							"WD",
							"CD",
							"CDV",
							"DTS",
							"DTR",
							"FDIS",
							"TS",
							"TR",
							"IS"
						],
						whiteSpace: "collapse"
					}
				},
				release: {
					default: "1",
					facets: {
						minInclusive: 0,
						maxInclusive: 255,
						minExclusive: 0,
						whiteSpace: "collapse"
					}
				},
				revision: {
					default: "A",
					facets: {
						pattern: ["[A-Z]"],
						whiteSpace: "collapse"
					}
				},
				version: {
					required: !0,
					facets: {
						minInclusive: 2002,
						maxInclusive: 2099,
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
				descID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				name: {
					required: !0,
					facets: {
						minLength: 1,
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
			details: { BasicType: {
				required: !0,
				minOccurs: 1
			} }
		}
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
					facets: { whiteSpace: "collapse" }
				},
				descID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				enumParameterized: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				informative: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				name: {
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1,
						whiteSpace: "collapse"
					}
				},
				statistics: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				titleID: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				typeKindParameterized: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				variant: { facets: { whiteSpace: "collapse" } }
			},
			identityFields: ["name", "variant"]
		},
		children: {
			sequence: [
				"SubDataObject",
				"DataAttribute",
				"ServiceParameter"
			],
			details: {
				SubDataObject: {},
				DataAttribute: {
					required: !0,
					minOccurs: 1
				},
				ServiceParameter: { maxOccurs: 1 }
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueCDCChild",
			selector: [{ steps: [{ kind: "wildcard" }] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
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
			details: { CDC: { constraints: [{
				kind: "unique",
				name: "uniqueCDCChild",
				selector: [{ steps: [{ kind: "wildcard" }] }],
				fields: [{ target: {
					kind: "attribute",
					value: "name",
					isAttribute: !0
				} }]
			}] } }
		},
		constraints: [{
			kind: "unique",
			name: "uniqueCDC",
			selector: [{ steps: [{
				kind: "name",
				value: "CDC"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }, { target: {
				kind: "attribute",
				value: "variant",
				isAttribute: !0
			} }]
		}]
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
				changesID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				date: { facets: { whiteSpace: "collapse" } },
				release: {
					default: "1",
					facets: {
						minInclusive: 0,
						maxInclusive: 255,
						minExclusive: 0,
						whiteSpace: "collapse"
					}
				},
				revision: {
					default: "A",
					facets: {
						pattern: ["[A-Z]"],
						whiteSpace: "collapse"
					}
				},
				tissues: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				version: {
					required: !0,
					facets: {
						minInclusive: 2002,
						maxInclusive: 2099,
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
				"titleID",
				"typeKindParameterized",
				"xsi:type"
			],
			details: {
				deprecated: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				descID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				informative: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				name: {
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1,
						whiteSpace: "collapse"
					}
				},
				titleID: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				typeKindParameterized: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				"xsi:type": {
					namespace: {
						prefix: "xsi",
						uri: "http://www.w3.org/2001/XMLSchema-instance"
					},
					facets: { enumeration: ["tServiceConstructedAttribute"] }
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: ["SubDataAttribute"],
			details: { SubDataAttribute: {
				required: !0,
				minOccurs: 1
			} }
		},
		constraints: [{
			kind: "unique",
			name: "uniqueSubDataAttribute",
			selector: [{ steps: [{
				kind: "name",
				value: "SubDataAttribute"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
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
			details: { ConstructedAttribute: { constraints: [{
				kind: "unique",
				name: "uniqueSubDataAttribute",
				selector: [{ steps: [{
					kind: "name",
					value: "SubDataAttribute"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "name",
					isAttribute: !0
				} }]
			}] } }
		},
		constraints: [{
			kind: "unique",
			name: "uniqueConstructedAttribute",
			selector: [{ steps: [{
				kind: "name",
				value: "ConstructedAttribute"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
	},
	Copyright: {
		tag: "Copyright",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "The copyright notice attached to the XML",
		parents: [
			"NS",
			"ServiceNS",
			"NSDoc",
			"ApplicableServiceNS"
		],
		attributes: {
			sequence: [],
			details: {}
		},
		children: {
			sequence: ["Notice", "License"],
			details: {
				Notice: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				},
				License: {
					required: !0,
					minOccurs: 1,
					maxOccurs: 1
				}
			}
		}
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
					facets: { whiteSpace: "collapse" }
				},
				defaultValue: { facets: { whiteSpace: "replace" } },
				deprecated: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				descID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				dupd: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				fc: {
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f]+"],
						minLength: 1,
						whiteSpace: "collapse"
					}
				},
				informative: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				isArray: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				maxIndexAttribute: { facets: {
					pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					minLength: 1,
					whiteSpace: "collapse"
				} },
				maxValue: { facets: { whiteSpace: "collapse" } },
				minIndex: {
					default: "0",
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				},
				minValue: { facets: { whiteSpace: "collapse" } },
				name: {
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1,
						whiteSpace: "collapse"
					}
				},
				presCond: {
					default: "M",
					facets: { whiteSpace: "replace" }
				},
				presCondArgs: { facets: { whiteSpace: "replace" } },
				presCondArgsID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				qchg: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				sizeAttribute: { facets: {
					pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					minLength: 1,
					whiteSpace: "collapse"
				} },
				type: { facets: {
					pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					minLength: 1,
					whiteSpace: "collapse"
				} },
				typeKind: {
					default: "BASIC",
					facets: {
						enumeration: [
							"BASIC",
							"ENUMERATED",
							"CONSTRUCTED",
							"undefined"
						],
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
					facets: { whiteSpace: "collapse" }
				},
				descID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				dsPresCond: {
					default: "M",
					facets: { whiteSpace: "replace" }
				},
				dsPresCondArgs: { facets: { whiteSpace: "replace" } },
				dsPresCondArgsID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				informative: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				name: {
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1,
						maxLength: 12,
						whiteSpace: "collapse"
					}
				},
				presCond: {
					default: "M",
					facets: { whiteSpace: "replace" }
				},
				presCondArgs: { facets: { whiteSpace: "replace" } },
				presCondArgsID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				transient: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				type: {
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1,
						whiteSpace: "collapse"
					}
				},
				underlyingType: { facets: {
					pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					minLength: 1,
					whiteSpace: "collapse"
				} },
				underlyingTypeKind: { facets: {
					enumeration: [
						"BASIC",
						"ENUMERATED",
						"CONSTRUCTED"
					],
					whiteSpace: "collapse"
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [],
			details: {}
		}
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
				facets: {
					enumeration: [
						"RCB",
						"LCB",
						"GoCB",
						"SVCB"
					],
					whiteSpace: "replace"
				}
			} },
			identityFields: ["cb"]
		},
		children: {
			sequence: [],
			details: {}
		}
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
					facets: {
						pattern: ["\\x00-\\x7f+"],
						whiteSpace: "replace"
					}
				},
				publicationStage: {
					default: "IS",
					facets: {
						enumeration: [
							"WD",
							"CD",
							"CDV",
							"DTS",
							"DTR",
							"FDIS",
							"TS",
							"TR",
							"IS"
						],
						whiteSpace: "collapse"
					}
				},
				release: {
					default: "1",
					facets: {
						minInclusive: 0,
						maxInclusive: 255,
						minExclusive: 0,
						whiteSpace: "collapse"
					}
				},
				revision: {
					default: "A",
					facets: {
						pattern: ["[A-Z]"],
						whiteSpace: "collapse"
					}
				},
				version: {
					required: !0,
					facets: {
						minInclusive: 2002,
						maxInclusive: 2099,
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
				facets: {
					minLength: 1,
					whiteSpace: "replace"
				}
			} },
			identityFields: ["id"]
		},
		children: {
			sequence: [],
			any: !0,
			details: {}
		},
		textContent: {}
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
					facets: { whiteSpace: "collapse" }
				},
				descID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				informative: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				inheritedFrom: { facets: {
					pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					minLength: 1,
					whiteSpace: "collapse"
				} },
				name: {
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1,
						whiteSpace: "collapse"
					}
				},
				titleID: {
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
			sequence: ["Literal"],
			details: { Literal: {
				required: !0,
				minOccurs: 1
			} }
		},
		constraints: [{
			kind: "unique",
			name: "uniqueLiteralName",
			selector: [{ steps: [{
				kind: "name",
				value: "Literal"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}, {
			kind: "unique",
			name: "uniqueLiteralVal",
			selector: [{ steps: [{
				kind: "name",
				value: "Literal"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "literalVal",
				isAttribute: !0
			} }]
		}]
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
			details: { Enumeration: { constraints: [{
				kind: "unique",
				name: "uniqueLiteralName",
				selector: [{ steps: [{
					kind: "name",
					value: "Literal"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "name",
					isAttribute: !0
				} }]
			}, {
				kind: "unique",
				name: "uniqueLiteralVal",
				selector: [{ steps: [{
					kind: "name",
					value: "Literal"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "literalVal",
					isAttribute: !0
				} }]
			}] } }
		},
		constraints: [{
			kind: "unique",
			name: "uniqueEnumeration",
			selector: [{ steps: [{
				kind: "name",
				value: "Enumeration"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
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
					facets: {
						pattern: ["[\\x00-\\x7f]+"],
						minLength: 1,
						whiteSpace: "collapse"
					}
				},
				descID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				titleID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} }
			},
			identityFields: ["abbreviation"]
		},
		children: {
			sequence: ["ApplicableServices"],
			details: { ApplicableServices: {
				maxOccurs: 1,
				constraints: [{
					kind: "unique",
					name: "uniqueDataSetMemberOf",
					selector: [{ steps: [{
						kind: "name",
						value: "DataSetMemberOf"
					}] }],
					fields: [{ target: {
						kind: "attribute",
						value: "cb",
						isAttribute: !0
					} }]
				}, {
					kind: "unique",
					name: "uniqueService",
					selector: [{ steps: [{
						kind: "name",
						value: "Service"
					}] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}]
			} }
		}
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
			details: { FunctionalConstraint: {
				required: !0,
				minOccurs: 1
			} }
		},
		constraints: [{
			kind: "unique",
			name: "uniqueFunctionalConstraint",
			selector: [{ steps: [{
				kind: "name",
				value: "FunctionalConstraint"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "abbreviation",
				isAttribute: !0
			} }]
		}]
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
				base: { facets: {
					pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					minLength: 1,
					whiteSpace: "collapse"
				} },
				canHaveLOG: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				deprecated: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				descID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				informative: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				isExtension: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				name: {
					required: !0,
					facets: {
						pattern: [
							"LLN0",
							"[A-Z]{4}",
							"[A-Za-z_:][-.:0-9A-Z_a-z]*"
						],
						whiteSpace: "collapse"
					}
				},
				titleID: {
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
			sequence: ["DataObject"],
			details: { DataObject: {} }
		},
		constraints: [{
			kind: "unique",
			name: "uniqueDataObject",
			selector: [{ steps: [{
				kind: "name",
				value: "DataObject"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
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
			details: {
				AbstractLNClass: { constraints: [{
					kind: "unique",
					name: "uniqueDataObjectAbstractLNClass",
					selector: [{ steps: [{
						kind: "name",
						value: "DataObject"
					}] }],
					fields: [{ target: {
						kind: "attribute",
						value: "name",
						isAttribute: !0
					} }]
				}] },
				LNClass: { constraints: [{
					kind: "unique",
					name: "uniqueDataObject",
					selector: [{ steps: [{
						kind: "name",
						value: "DataObject"
					}] }],
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
			name: "uniqueAbstractLNClass",
			selector: [{ steps: [{
				kind: "name",
				value: "AbstractLNClass"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}, {
			kind: "unique",
			name: "uniqueLNClass",
			selector: [{ steps: [{
				kind: "name",
				value: "LNClass"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
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
				kind: { facets: {
					enumeration: [
						"Standard",
						"Private",
						"None"
					],
					pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					whiteSpace: "collapse"
				} },
				uri: { facets: { whiteSpace: "replace" } }
			}
		},
		children: {
			sequence: [],
			details: {}
		},
		textContent: {}
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
					facets: { whiteSpace: "collapse" }
				},
				descID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				informative: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				literalVal: {
					required: !0,
					facets: {
						minInclusive: -2147483648,
						maxInclusive: 2147483647,
						whiteSpace: "collapse"
					}
				},
				name: {
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]*"],
						maxLength: 127,
						whiteSpace: "replace"
					}
				}
			},
			identityFields: ["literalVal", "name"]
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	NS: {
		tag: "NS",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Root element of a namespace definition (NSD) file.",
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
				descID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				id: {
					required: !0,
					facets: {
						pattern: ["\\x00-\\x7f+"],
						whiteSpace: "replace"
					}
				},
				publicationStage: {
					default: "IS",
					facets: {
						enumeration: [
							"WD",
							"CD",
							"CDV",
							"DTS",
							"DTR",
							"FDIS",
							"TS",
							"TR",
							"IS"
						],
						whiteSpace: "collapse"
					}
				},
				release: {
					default: "1",
					facets: {
						minInclusive: 0,
						maxInclusive: 255,
						minExclusive: 0,
						whiteSpace: "collapse"
					}
				},
				revision: {
					default: "A",
					facets: {
						pattern: ["[A-Z]"],
						whiteSpace: "collapse"
					}
				},
				umlDate: { facets: { whiteSpace: "collapse" } },
				umlVersion: { facets: {
					pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					minLength: 1,
					whiteSpace: "collapse"
				} },
				version: {
					required: !0,
					facets: {
						minInclusive: 2002,
						maxInclusive: 2099,
						whiteSpace: "collapse"
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
				Copyright: { maxOccurs: 1 },
				Changes: { maxOccurs: 1 },
				DependsOn: { maxOccurs: 1 },
				BasicTypes: { maxOccurs: 1 },
				FunctionalConstraints: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueFunctionalConstraint",
						selector: [{ steps: [{
							kind: "name",
							value: "FunctionalConstraint"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "abbreviation",
							isAttribute: !0
						} }]
					}]
				},
				PresenceConditions: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniquePresenceCondition",
						selector: [{ steps: [{
							kind: "name",
							value: "PresenceCondition"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					}]
				},
				Abbreviations: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueAbbreviation",
						selector: [{ steps: [{
							kind: "name",
							value: "Abbreviation"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					}]
				},
				Enumerations: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueEnumeration",
						selector: [{ steps: [{
							kind: "name",
							value: "Enumeration"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					}]
				},
				ConstructedAttributes: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueConstructedAttribute",
						selector: [{ steps: [{
							kind: "name",
							value: "ConstructedAttribute"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					}]
				},
				CDCs: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueCDC",
						selector: [{ steps: [{
							kind: "name",
							value: "CDC"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "variant",
							isAttribute: !0
						} }]
					}]
				},
				LNClasses: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueAbstractLNClass",
						selector: [{ steps: [{
							kind: "name",
							value: "AbstractLNClass"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					}, {
						kind: "unique",
						name: "uniqueLNClass",
						selector: [{ steps: [{
							kind: "name",
							value: "LNClass"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					}]
				}
			}
		}
	},
	NSDoc: {
		tag: "NSDoc",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Root element of a file holding the documentation strings of an NSD file (NSDOC).",
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
					facets: {
						pattern: ["\\x00-\\x7f+"],
						whiteSpace: "replace"
					}
				},
				lang: {
					required: !0,
					facets: {
						pattern: ["[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*"],
						whiteSpace: "collapse"
					}
				},
				publicationStage: {
					default: "IS",
					facets: {
						enumeration: [
							"WD",
							"CD",
							"CDV",
							"DTS",
							"DTR",
							"FDIS",
							"TS",
							"TR",
							"IS"
						],
						whiteSpace: "collapse"
					}
				},
				release: {
					default: "1",
					facets: {
						minInclusive: 0,
						maxInclusive: 255,
						minExclusive: 0,
						whiteSpace: "collapse"
					}
				},
				revision: {
					default: "A",
					facets: {
						pattern: ["[A-Z]"],
						whiteSpace: "collapse"
					}
				},
				umlDate: { facets: { whiteSpace: "collapse" } },
				umlVersion: { facets: {
					pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					minLength: 1,
					whiteSpace: "collapse"
				} },
				version: {
					required: !0,
					facets: {
						minInclusive: 2002,
						maxInclusive: 2099,
						whiteSpace: "collapse"
					}
				}
			}
		},
		children: {
			sequence: ["Copyright", "Doc"],
			details: {
				Copyright: { maxOccurs: 1 },
				Doc: {
					required: !0,
					minOccurs: 1
				}
			}
		},
		constraints: [{
			kind: "unique",
			name: "uniqueDocID",
			selector: [{ steps: [{
				kind: "name",
				value: "Doc"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "id",
				isAttribute: !0
			} }]
		}]
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
		textContent: {}
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
				argument: { facets: { whiteSpace: "replace" } },
				descID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				name: {
					required: !0,
					facets: { whiteSpace: "replace" }
				},
				titleID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [],
			details: {}
		}
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
			details: { PresenceCondition: {
				required: !0,
				minOccurs: 1
			} }
		},
		constraints: [{
			kind: "unique",
			name: "uniquePresenceCondition",
			selector: [{ steps: [{
				kind: "name",
				value: "PresenceCondition"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
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
				facets: {
					enumeration: /* @__PURE__ */ "Associate.Abort.Release.GetServerDirectory.GetLogicalDeviceDirectory.GetAllDataValues.GetDataValues.SetDataValues.GetDataDirectory.GetDataDefinition.GetDataSetValues.SetDataSetValues.CreateDataSet.DeleteDataSet.GetDataSetDirectory.SelectActiveSG.SelectEditSG.SetEditSGValue.ConfirmEditSGValues.GetEditSGValue.GetSGCBValues.Report.GetBRCBValues.SetBRCBValues.GetURCBValues.SetURCBValues.GetLCBValues.SetLCBValues.QueryLogByTime.QueryLogAfter.GetLogStatusValues.SendGOOSEMessage.GetGoCBValues.SetGoCBValues.GetGoReference.GetGOOSEElementNumber.SendMSVMessage.GetMSVCBValues.SetMSVCBValues.SendUSVMessage.GetUSVCBValues.SetUSVCBValues.Select.SelectWithValue.Cancel.Operate.CommandTermination.TimeActivatedOperate.GetFile.SetFile.DeleteFile.GetFileAttributeValues.TimeSynchronization.InternalChange.GetLogicalNodeDirectory.GetMsvReference.GetMSVElementNumber.GetUsvReference.GetUSVElementNumber".split("."),
					whiteSpace: "collapse"
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
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1,
						whiteSpace: "collapse"
					}
				},
				variant: { facets: { whiteSpace: "collapse" } }
			},
			identityFields: ["cdc", "variant"]
		},
		children: {
			sequence: ["ServiceDataAttribute"],
			details: { ServiceDataAttribute: {
				required: !0,
				minOccurs: 1
			} }
		},
		constraints: [{
			kind: "unique",
			name: "uniqueServiceCDCChild",
			selector: [{ steps: [{
				kind: "name",
				value: "ServiceDataAttribute"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
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
			details: { ServiceCDC: { constraints: [{
				kind: "unique",
				name: "uniqueServiceCDCChild",
				selector: [{ steps: [{
					kind: "name",
					value: "ServiceDataAttribute"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "name",
					isAttribute: !0
				} }]
			}] } }
		},
		constraints: [{
			kind: "unique",
			name: "uniqueServiceCDC",
			selector: [{ steps: [{
				kind: "name",
				value: "ServiceCDC"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "cdc",
				isAttribute: !0
			} }, { target: {
				kind: "attribute",
				value: "variant",
				isAttribute: !0
			} }]
		}]
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
					facets: { whiteSpace: "collapse" }
				},
				descID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				informative: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				name: {
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1,
						whiteSpace: "collapse"
					}
				},
				titleID: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				typeKindParameterized: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: ["SubDataAttribute"],
			details: { SubDataAttribute: {
				required: !0,
				minOccurs: 1
			} }
		},
		constraints: [{
			kind: "unique",
			name: "uniqueSubDataAttribute_Service",
			selector: [{ steps: [{
				kind: "name",
				value: "SubDataAttribute"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
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
			details: { ServiceConstructedAttribute: { constraints: [{
				kind: "unique",
				name: "uniqueSubDataAttribute_Service",
				selector: [{ steps: [{
					kind: "name",
					value: "SubDataAttribute"
				}] }],
				fields: [{ target: {
					kind: "attribute",
					value: "name",
					isAttribute: !0
				} }]
			}] } }
		},
		constraints: [{
			kind: "unique",
			name: "uniqueServiceConstructedAttribute",
			selector: [{ steps: [{
				kind: "name",
				value: "ServiceConstructedAttribute"
			}] }],
			fields: [{ target: {
				kind: "attribute",
				value: "name",
				isAttribute: !0
			} }]
		}]
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
					facets: { whiteSpace: "collapse" }
				},
				descID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				fc: {
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f]+"],
						minLength: 1,
						whiteSpace: "collapse"
					}
				},
				informative: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				name: {
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1,
						whiteSpace: "collapse"
					}
				},
				presCond: {
					default: "M",
					facets: { whiteSpace: "replace" }
				},
				presCondArgs: { facets: { whiteSpace: "replace" } },
				presCondArgsID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				type: { facets: {
					pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					minLength: 1,
					whiteSpace: "collapse"
				} },
				typeKind: {
					default: "BASIC",
					facets: {
						enumeration: [
							"BASIC",
							"ENUMERATED",
							"CONSTRUCTED",
							"undefined"
						],
						whiteSpace: "collapse"
					}
				},
				underlyingType: { facets: {
					pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					minLength: 1,
					whiteSpace: "collapse"
				} },
				underlyingTypeKind: { facets: {
					enumeration: [
						"BASIC",
						"ENUMERATED",
						"CONSTRUCTED"
					],
					whiteSpace: "collapse"
				} }
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [],
			details: {}
		}
	},
	ServiceNS: {
		tag: "ServiceNS",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		documentation: "Root element of a service namespace definition (SNSD) file.",
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
				descID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				id: {
					required: !0,
					facets: {
						pattern: ["\\x00-\\x7f+"],
						whiteSpace: "replace"
					}
				},
				publicationStage: {
					default: "IS",
					facets: {
						enumeration: [
							"WD",
							"CD",
							"CDV",
							"DTS",
							"DTR",
							"FDIS",
							"TS",
							"TR",
							"IS"
						],
						whiteSpace: "collapse"
					}
				},
				release: {
					default: "1",
					facets: {
						minInclusive: 0,
						maxInclusive: 255,
						minExclusive: 0,
						whiteSpace: "collapse"
					}
				},
				revision: {
					default: "A",
					facets: {
						pattern: ["[A-Z]"],
						whiteSpace: "collapse"
					}
				},
				umlDate: { facets: { whiteSpace: "collapse" } },
				umlVersion: { facets: {
					pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					minLength: 1,
					whiteSpace: "collapse"
				} },
				version: {
					required: !0,
					facets: {
						minInclusive: 2002,
						maxInclusive: 2099,
						whiteSpace: "collapse"
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
				Copyright: { maxOccurs: 1 },
				Changes: { maxOccurs: 1 },
				FunctionalConstraints: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueFunctionalConstraint_Service",
						selector: [{ steps: [{
							kind: "name",
							value: "FunctionalConstraint"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "abbreviation",
							isAttribute: !0
						} }]
					}]
				},
				PresenceConditions: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniquePresenceCondition_Service",
						selector: [{ steps: [{
							kind: "name",
							value: "PresenceCondition"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					}]
				},
				Abbreviations: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueAbbreviation_Service",
						selector: [{ steps: [{
							kind: "name",
							value: "Abbreviation"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					}]
				},
				ServiceTypeRealizations: { maxOccurs: 1 },
				ServiceConstructedAttributes: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueServiceConstructedAttribute",
						selector: [{ steps: [{
							kind: "name",
							value: "ServiceConstructedAttribute"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "name",
							isAttribute: !0
						} }]
					}]
				},
				ServiceCDCs: {
					maxOccurs: 1,
					constraints: [{
						kind: "unique",
						name: "uniqueServiceCDC",
						selector: [{ steps: [{
							kind: "name",
							value: "ServiceCDC"
						}] }],
						fields: [{ target: {
							kind: "attribute",
							value: "cdc",
							isAttribute: !0
						} }, { target: {
							kind: "attribute",
							value: "variant",
							isAttribute: !0
						} }]
					}]
				}
			}
		}
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
					facets: {
						pattern: ["\\x00-\\x7f+"],
						whiteSpace: "replace"
					}
				},
				publicationStage: {
					default: "IS",
					facets: {
						enumeration: [
							"WD",
							"CD",
							"CDV",
							"DTS",
							"DTR",
							"FDIS",
							"TS",
							"TR",
							"IS"
						],
						whiteSpace: "collapse"
					}
				},
				release: {
					default: "1",
					facets: {
						minInclusive: 0,
						maxInclusive: 255,
						minExclusive: 0,
						whiteSpace: "collapse"
					}
				},
				revision: {
					default: "A",
					facets: {
						pattern: ["[A-Z]"],
						whiteSpace: "collapse"
					}
				},
				version: {
					required: !0,
					facets: {
						minInclusive: 2002,
						maxInclusive: 2099,
						whiteSpace: "collapse"
					}
				}
			}
		},
		children: {
			sequence: ["AppliesTo"],
			details: { AppliesTo: {
				required: !0,
				minOccurs: 1
			} }
		}
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
				defaultValue: { facets: { whiteSpace: "replace" } },
				deprecated: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				descID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				informative: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				maxValue: { facets: { whiteSpace: "collapse" } },
				minValue: { facets: { whiteSpace: "collapse" } },
				name: {
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1,
						whiteSpace: "collapse"
					}
				},
				type: { facets: {
					pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					minLength: 1,
					whiteSpace: "collapse"
				} },
				typeKind: {
					default: "BASIC",
					facets: {
						enumeration: [
							"BASIC",
							"ENUMERATED",
							"CONSTRUCTED",
							"undefined"
						],
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
				"titleID",
				"typeKindParameterized",
				"xsi:type"
			],
			details: {
				deprecated: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				descID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				informative: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				name: {
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1,
						whiteSpace: "collapse"
					}
				},
				titleID: {
					required: !0,
					facets: {
						minLength: 1,
						whiteSpace: "replace"
					}
				},
				typeKindParameterized: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				"xsi:type": {
					namespace: {
						prefix: "xsi",
						uri: "http://www.w3.org/2001/XMLSchema-instance"
					},
					facets: { enumeration: ["tServiceConstructedAttribute"] }
				}
			}
		},
		children: {
			sequence: ["SubDataAttribute"],
			details: { SubDataAttribute: {
				required: !0,
				minOccurs: 1
			} }
		}
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
			details: { ServiceTypeRealization: {} }
		}
	},
	SubDataAttribute: {
		tag: "SubDataAttribute",
		namespace: {
			prefix: "",
			uri: "http://www.iec.ch/61850/2016/NSD"
		},
		parents: [
			"ConstructedAttribute",
			"ServiceTypeRealization",
			"ServiceConstructedAttribute"
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
				defaultValue: { facets: { whiteSpace: "replace" } },
				deprecated: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				descID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				informative: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				isArray: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				maxIndexAttribute: { facets: {
					pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					minLength: 1,
					whiteSpace: "collapse"
				} },
				maxValue: { facets: { whiteSpace: "collapse" } },
				minIndex: {
					default: "0",
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295,
						whiteSpace: "collapse"
					}
				},
				minValue: { facets: { whiteSpace: "collapse" } },
				name: {
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1,
						whiteSpace: "collapse"
					}
				},
				presCond: {
					default: "M",
					facets: { whiteSpace: "replace" }
				},
				presCondArgs: { facets: { whiteSpace: "replace" } },
				presCondArgsID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				sizeAttribute: { facets: {
					pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					minLength: 1,
					whiteSpace: "collapse"
				} },
				type: { facets: {
					pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					minLength: 1,
					whiteSpace: "collapse"
				} },
				typeKind: {
					default: "BASIC",
					facets: {
						enumeration: [
							"BASIC",
							"ENUMERATED",
							"CONSTRUCTED",
							"undefined"
						],
						whiteSpace: "collapse"
					}
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [],
			details: {}
		}
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
					facets: { whiteSpace: "collapse" }
				},
				descID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				informative: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				isArray: {
					default: "false",
					facets: { whiteSpace: "collapse" }
				},
				maxIndexAttribute: { facets: {
					pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					minLength: 1,
					whiteSpace: "collapse"
				} },
				minIndex: {
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
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1,
						whiteSpace: "collapse"
					}
				},
				presCond: {
					default: "M",
					facets: { whiteSpace: "replace" }
				},
				presCondArgs: { facets: { whiteSpace: "replace" } },
				presCondArgsID: { facets: {
					minLength: 1,
					whiteSpace: "replace"
				} },
				sizeAttribute: { facets: {
					pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					minLength: 1,
					whiteSpace: "collapse"
				} },
				type: {
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1,
						whiteSpace: "collapse"
					}
				},
				underlyingType: { facets: {
					pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
					minLength: 1,
					whiteSpace: "collapse"
				} },
				underlyingTypeKind: { facets: {
					enumeration: [
						"BASIC",
						"ENUMERATED",
						"CONSTRUCTED"
					],
					whiteSpace: "collapse"
				} }
			}
		},
		children: {
			sequence: [],
			details: {}
		}
	}
}, he = { supportedFileExtensions: [".nsd", ".nsdoc"] }, N = {
	singletonElements: pe,
	elements: ce,
	namespaces: {
		default: {
			uri: "http://www.iec.ch/61850/2016/NSD",
			prefix: ""
		},
		xsi: te
	},
	attributes: M,
	children: le,
	parents: ue,
	descendants: de,
	ancestors: fe,
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
	io: he,
	definition: me
}, ge = {
	...N,
	rootElementName: "NS"
}, _e = {
	...N,
	rootElementName: "NSDoc"
}, ve = {}, ye = Object.create, be = Object.defineProperty, xe = Object.getOwnPropertyDescriptor, Se = Object.getOwnPropertyNames, Ce = Object.getPrototypeOf, P = Object.prototype.hasOwnProperty, we = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), Te = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = Se(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !P.call(e, s) && s !== n && be(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = xe(t, s)) || r.enumerable
	});
	return e;
}, Ee = (e, t, n) => (n = e == null ? {} : ye(Ce(e)), Te(t || !e || !e.__esModule ? be(n, "default", {
	value: e,
	enumerable: !0
}) : n, e));
function De(e, t) {
	return e ? Oe(e, t) : {};
}
function Oe(e, t) {
	let n = {};
	for (let r of Object.keys(e)) {
		let i = e[r];
		n[r] = typeof i == "function" ? (...e) => i(t, ...e) : Oe(i, t);
	}
	return n;
}
function ke(e) {
	let { stagedOperations: t, tagName: n, id: r } = e;
	for (let e = t.length - 1; e >= 0; e--) {
		let i = t[e];
		if (r === void 0) {
			if ((i.status === "created" || i.status === "updated") && ne(i.newRecord, n)) return {
				...i.newRecord,
				status: i.status
			};
			if (i.status === "deleted" && ne(i.oldRecord, n)) return {
				...i.oldRecord,
				status: "deleted"
			};
			continue;
		}
		if (i.status === "created" && i.newRecord.id === r) {
			let e = i.newRecord.tagName;
			return e !== n && m("ELEMENT_TAGNAME_MISMATCH", {
				detail: `Expected tagName '${n}', got '${e}' for id '${r}'`,
				ref: {
					tagName: n,
					id: r
				}
			}), {
				...i.newRecord,
				status: "created"
			};
		}
		if (i.status === "updated" && i.newRecord.id === r) {
			let e = i.newRecord.tagName;
			return e !== n && m("ELEMENT_TAGNAME_MISMATCH", {
				detail: `Expected tagName '${n}', got '${e}' for id '${r}'`,
				ref: {
					tagName: n,
					id: r
				}
			}), {
				...i.newRecord,
				status: "updated"
			};
		}
		if (i.status === "deleted" && i.oldRecord.id === r) {
			let e = i.oldRecord.tagName;
			return e !== n && m("ELEMENT_TAGNAME_MISMATCH", {
				detail: `Expected tagName '${n}', got '${e}' for id '${r}'`,
				ref: {
					tagName: n,
					id: r
				}
			}), {
				...i.oldRecord,
				status: "deleted"
			};
		}
	}
}
function Ae(e) {
	let { rawRecords: t, stagedOperations: n, tagName: r } = e, i = new Map(t.map((e) => [e.id, {
		...e,
		status: "unchanged"
	}]));
	for (let e of n) {
		if (e.status === "created" || e.status === "updated") {
			if (!ne(e.newRecord, r)) continue;
			i.set(e.newRecord.id, {
				...e.newRecord,
				status: e.status
			});
		}
		e.status === "deleted" && e.oldRecord.tagName === r && i.delete(e.oldRecord.id);
	}
	return Array.from(i.values());
}
function je(e) {
	let { rawRecords: t, stagedOperations: n, includeDeleted: r = !1 } = e, i = new Map(t.map((e) => [e.id, {
		...e,
		status: "unchanged"
	}])), a = [], o = /* @__PURE__ */ new Set();
	for (let e of n) {
		if (e.status === "created" || e.status === "updated") {
			e.status === "created" && o.add(e.newRecord.id), i.set(e.newRecord.id, {
				...e.newRecord,
				status: e.status
			});
			continue;
		}
		i.delete(e.oldRecord.id), r && !o.has(e.oldRecord.id) && a.push({
			...e.oldRecord,
			status: "deleted"
		});
	}
	return {
		live: i,
		deleted: a
	};
}
function Me(e) {
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
async function F(e) {
	let { context: t, ref: n } = e;
	if (t.stagedOperations.length > 0) {
		let e = ke({
			stagedOperations: t.stagedOperations,
			tagName: n.tagName,
			id: n.id
		});
		if (e?.status === "deleted") return;
		if (e) return e;
	}
	let r;
	if (n.id === void 0) {
		let e = `__singleton_${n.tagName}`, i = yn(t) ? t.recordCache.get(e) : void 0;
		i ? r = i : (r = (await t.store.getByTagNameInDocument(n.tagName, t.documentId))[0], r && yn(t) && (t.recordCache.set(r.id, r), t.recordCache.set(e, r)));
	} else {
		let e = yn(t) ? t.recordCache.get(n.id) : void 0;
		e ? r = e : (r = await t.store.get(n.id, t.documentId), r && yn(t) && t.recordCache.set(n.id, r));
	}
	if (r) return r.tagName !== n.tagName && m("ELEMENT_TAGNAME_MISMATCH", {
		detail: `Expected tagName '${n.tagName}', got '${r.tagName}' for id '${n.id}'`,
		ref: n
	}), {
		...r,
		status: "unchanged"
	};
}
async function Ne(e) {
	let { context: t, refs: n } = e;
	return Promise.all(n.map((e) => F({
		context: t,
		ref: e
	})));
}
async function I(e) {
	let { context: t, tagName: n } = e, r = await t.store.getByTagNameInDocument(n, t.documentId);
	for (let e of r) yn(t) && t.recordCache.set(e.id, e);
	return Ae({
		rawRecords: r,
		stagedOperations: t.stagedOperations,
		tagName: n
	});
}
async function L(e) {
	let { context: t, ref: n, tagName: r } = e, i = await F({
		context: t,
		ref: n
	});
	if (!i) return;
	let a = i.children.find((e) => e.tagName === r);
	if (a) return F({
		context: t,
		ref: a
	});
	let o = t.dialecteConfig.transparentElements;
	if (!o?.length) return;
	let s = i.children.filter((e) => o.includes(e.tagName));
	for (let e of s) {
		let n = await F({
			context: t,
			ref: e
		});
		if (!n) continue;
		let i = n.children.find((e) => e.tagName === r);
		if (i) return F({
			context: t,
			ref: i
		});
	}
}
async function Pe(e) {
	let { context: t, ref: n, tagName: r } = e, i = await F({
		context: t,
		ref: n
	});
	if (!i) return [];
	let a = i.children.filter((e) => e.tagName === r).map((e) => ({
		tagName: r,
		id: e.id
	}));
	if (a.length) return (await Ne({
		context: t,
		refs: a
	})).filter((e) => e !== void 0);
	let o = t.dialecteConfig.transparentElements;
	if (!o?.length) return [];
	let s = i.children.filter((e) => o.includes(e.tagName));
	if (!s.length) return [];
	let c = (await Ne({
		context: t,
		refs: s
	})).filter((e) => e !== void 0).flatMap((e) => e.children.filter((e) => e.tagName === r)).map((e) => ({
		tagName: r,
		id: e.id
	}));
	return c.length ? (await Ne({
		context: t,
		refs: c
	})).filter((e) => e !== void 0) : [];
}
async function Fe(e) {
	let { context: t, ref: n, options: r } = e, i = r?.depth ?? Infinity, a = r?.stopAtTagName, o = r?.order ?? "bottom-up", s = [], c = await F({
		context: t,
		ref: n
	});
	for (; c?.parent && s.length < i;) {
		let e = c.parent, n = await F({
			context: t,
			ref: e
		});
		if (!n || (s.push(n), a && n.tagName === a)) break;
		c = n;
	}
	return o === "top-down" ? s.reverse() : s;
}
async function Ie(e) {
	let { context: t, tagName: n, attributes: r } = e, i = await I({
		context: t,
		tagName: n
	}), a = [];
	for (let e of i) R({
		record: e,
		attributeFilter: r
	}) && a.push(e);
	return a;
}
function R(e) {
	let { record: t, attributeFilter: n } = e;
	if (!n || Object.keys(n).length === 0) return !0;
	for (let [e, r] of Object.entries(n)) {
		if (r === void 0) continue;
		let n = t.attributes.find((t) => t.name === e)?.value ?? "";
		if (n === "") return !1;
		if (Array.isArray(r)) {
			if (!r.some((e) => n === e)) return !1;
		} else if (n !== r) return !1;
	}
	return !0;
}
async function Le(e) {
	let { context: t, ref: n, options: r } = e, { collect: i, omit: a } = r, o = Re(a), s = Be(i), c = /* @__PURE__ */ new Map();
	for (let e of s.allTags) c.set(e, /* @__PURE__ */ new Map());
	let l = await F({
		context: t,
		ref: n
	});
	return l && (s.mode === "flat" ? await Ue({
		context: t,
		rootId: l.id,
		collectSpec: s,
		omitSpec: o,
		collected: c
	}) : await Ke({
		context: t,
		record: l,
		pathNodes: s.paths,
		omitSpec: o,
		collected: c
	})), B(c);
}
function Re(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	if (!e) return {
		unconditional: t,
		conditional: n
	};
	for (let r of e) if (typeof r == "string") t.add(r);
	else {
		let e = Object.keys(r)[0], i = r[e];
		i?.where ? n.push({
			tagName: e,
			where: i.where
		}) : t.add(e);
	}
	return {
		unconditional: t,
		conditional: n
	};
}
function ze(e) {
	let { record: t, omitSpec: n } = e;
	if (n.unconditional.has(t.tagName)) return !0;
	for (let e of n.conditional) if (e.tagName === t.tagName && R({
		record: t,
		attributeFilter: e.where
	})) return !0;
	return !1;
}
function Be(e) {
	if (typeof e == "string") return {
		mode: "flat",
		targets: [{ tagName: e }],
		allTags: new Set([e])
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
		paths: Ve(e, t),
		allTags: t
	};
}
function Ve(e, t) {
	let n = [];
	for (let [r, i] of Object.entries(e)) {
		if (r === "where") continue;
		t.add(r);
		let e = He({
			tagName: r,
			value: i,
			allTags: t
		});
		e && n.push(e);
	}
	return n;
}
function He(e) {
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
		children: Ve(s, r),
		isLeaf: !1
	};
}
async function Ue(e) {
	let { context: t, rootId: n, collectSpec: r, omitSpec: i, collected: a } = e;
	for (let e of r.targets) {
		if (i.unconditional.has(e.tagName)) continue;
		let r = await I({
			context: t,
			tagName: e.tagName
		});
		for (let o of r) We({
			record: o,
			where: e.where
		}) && (ze({
			record: o,
			omitSpec: i
		}) || await Ge({
			context: t,
			record: o,
			rootId: n,
			omitSpec: i
		}) && a.get(e.tagName).set(o.id, o));
	}
}
function We(e) {
	let { record: t, where: n } = e;
	return n ? R({
		record: t,
		attributeFilter: n
	}) : !0;
}
async function Ge(e) {
	let { context: t, record: n, rootId: r, omitSpec: i } = e;
	if (n.id === r) return !0;
	let a = n;
	for (; a;) {
		if (!a.parent || i.unconditional.has(a.parent.tagName)) return !1;
		if (a.parent.id === r) return !0;
		let e = await F({
			context: t,
			ref: k(a.parent)
		});
		if (!e || ze({
			record: e,
			omitSpec: i
		})) return !1;
		a = e;
	}
	return !1;
}
async function Ke(e) {
	let { context: t, record: n, pathNodes: r, omitSpec: i, collected: a } = e;
	if (!n.children?.length) return;
	let o = new Set(r.map((e) => e.tagName));
	for (let e of r) {
		let r = await qe({
			context: t,
			record: n,
			tagName: e.tagName,
			where: e.where,
			omitSpec: i,
			stopAtTagNames: o
		});
		for (let n of r) a.get(e.tagName).set(n.id, n), !e.isLeaf && e.children.length > 0 && await Ke({
			context: t,
			record: n,
			pathNodes: e.children,
			omitSpec: i,
			collected: a
		});
	}
}
async function qe(e) {
	let { context: t, record: n, tagName: r, where: i, omitSpec: a, stopAtTagNames: o } = e, s = [];
	if (!n.children?.length) return s;
	let c = [], l = await z({
		context: t,
		record: n,
		omitSpec: a
	});
	for (c.push(...l); c.length > 0;) {
		let e = c.shift();
		if (e.tagName === r) {
			We({
				record: e,
				where: i
			}) && s.push(e);
			continue;
		}
		if (!(o.has(e.tagName) && e.tagName !== r) && e.children?.length) {
			let n = await z({
				context: t,
				record: e,
				omitSpec: a
			});
			c.push(...n);
		}
	}
	return s;
}
async function z(e) {
	let { context: t, record: n, omitSpec: r } = e;
	if (!n.children?.length) return [];
	let i = n.children.filter((e) => !r.unconditional.has(e.tagName));
	return i.length ? (await Promise.all(i.map((e) => F({
		context: t,
		ref: k(e)
	})))).filter((e) => e !== void 0 && !ze({
		record: e,
		omitSpec: r
	})) : [];
}
function B(e) {
	let t = {};
	for (let [n, r] of e.entries()) t[n] = Array.from(r.values());
	return t;
}
async function Je(e) {
	let { context: t, ref: n, name: r, namespace: i, defaults: a = "optional" } = e, o = await F({
		context: t,
		ref: n
	}), s = o?.attributes ?? [], c = Xe(t.dialecteConfig, r, i), l = s.find((e) => e.name === c);
	return l ? l.value : (o ? _({
		dialecteConfig: t.dialecteConfig,
		tagName: o.tagName,
		attributeName: c,
		defaults: a
	}) : void 0) ?? "";
}
async function Ye(e) {
	let { context: t, ref: n, name: r, namespace: i, defaults: a = "optional" } = e, { dialecteConfig: o } = t, s = await F({
		context: t,
		ref: n
	}), c = s?.attributes ?? [], l = Xe(o, r, i), u = c.find((e) => e.name === l);
	if (u) return u;
	if (!s || a === "none") return;
	let d = _({
		dialecteConfig: o,
		tagName: s.tagName,
		attributeName: l,
		defaults: a
	});
	if (d === void 0) return;
	let { namespace: f } = g({
		dialecteConfig: o,
		tagName: s.tagName,
		attributeName: l
	});
	return {
		name: l,
		value: d,
		namespace: f
	};
}
function Xe(e, t, n) {
	if (n === void 0) return t;
	let r = x(e, n);
	return r ? `${r}:${t}` : t;
}
async function Ze(e) {
	let { context: t, ref: n, namespace: r, defaults: i = "optional" } = e, { dialecteConfig: a } = t, o = await F({
		context: t,
		ref: n
	}), s = o?.attributes ?? [], c = r === void 0 ? "" : x(a, r), l = s.reduce((e, t) => {
		let { prefix: n, local: r, isXmlns: i } = $e(t.name);
		return i || n !== c || (e[r] = t.value ?? ""), e;
	}, {});
	if (o && i !== "none") {
		let e = a.definition[o.tagName]?.attributes.sequence ?? [];
		for (let t of e) {
			let { prefix: e, local: n, isXmlns: r } = $e(t);
			if (r || e !== c || n in l) continue;
			let s = _({
				dialecteConfig: a,
				tagName: o.tagName,
				attributeName: t,
				defaults: i
			});
			s !== void 0 && (l[n] = s);
		}
	}
	return l;
}
async function Qe(e) {
	let { context: t, ref: n, defaults: r = "optional" } = e, { dialecteConfig: i } = t, a = await F({
		context: t,
		ref: n
	}), o = [...a?.attributes ?? []];
	if (a && r !== "none") {
		let e = new Set(o.map((e) => e.name)), t = i.definition[a.tagName]?.attributes.sequence ?? [];
		for (let n of t) {
			if (e.has(n)) continue;
			let t = _({
				dialecteConfig: i,
				tagName: a.tagName,
				attributeName: n,
				defaults: r
			});
			if (t === void 0) continue;
			let { namespace: s } = g({
				dialecteConfig: i,
				tagName: a.tagName,
				attributeName: n
			});
			o.push({
				name: n,
				value: t,
				namespace: s
			});
		}
	}
	return o;
}
function $e(e) {
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
function et(e) {
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
function tt(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	if (!e) return {
		unconditional: t,
		conditional: n
	};
	for (let r of e) {
		if (typeof r == "string") {
			t.add(r);
			continue;
		}
		let e = Object.keys(r)[0], i = r[e];
		if (!i?.where) {
			t.add(e);
			continue;
		}
		n.push({
			tagName: e,
			where: i.where,
			scope: i.scope ?? "self"
		});
	}
	return {
		unconditional: t,
		conditional: n
	};
}
function nt(e) {
	let { record: t, compiledOmit: n } = e;
	return n.unconditional.has(t.tagName) ? !0 : n.conditional.some((e) => e.scope === "self" && e.tagName === t.tagName && R({
		record: t,
		attributeFilter: e.where
	}));
}
function rt(e) {
	let { record: t, compiledOmit: n } = e;
	return n.conditional.some((e) => e.scope === "children" && e.tagName === t.tagName && R({
		record: t,
		attributeFilter: e.where
	}));
}
function it(e) {
	let { tree: t, omit: n } = e;
	if (!n?.length) return t;
	let r = tt(n), i = (e) => {
		if (rt({
			record: e,
			compiledOmit: r
		})) return {
			...e,
			tree: []
		};
		let t = e.tree.filter((e) => !nt({
			record: e,
			compiledOmit: r
		})).map((e) => i(e));
		return {
			...e,
			tree: t
		};
	};
	return i(t);
}
function at(e) {
	let { tree: t, childrenConfig: n } = e, r = (e) => {
		if (e.tree.length === 0) return e;
		let t = T({
			parentTagName: e.tagName,
			children: e.tree.map(r),
			childrenConfig: n
		});
		return {
			...e,
			tree: t
		};
	};
	return r(t);
}
async function ot(e) {
	let { context: t, ref: n, options: r = {}, dialecteConfig: i } = e, { select: a, omit: o, unwrap: s } = r, c = await F({
		context: t,
		ref: n
	});
	w(c, {
		detail: "No record found for provided ref",
		key: "ELEMENT_NOT_FOUND"
	});
	let l = tt(o), u = t.dialecteConfig.transparentElements, d = await st({
		context: t,
		record: c,
		select: a,
		compiledOmit: l,
		dialecteConfig: i,
		transparentElements: u
	});
	if (!d) return D({ record: c });
	let f = s ?? (u?.length ? u : void 0);
	return at({
		tree: f ? et({
			tree: d,
			unwrapTagNames: f
		}) : d,
		childrenConfig: t.dialecteConfig.children
	});
}
async function st(e) {
	let { context: t, record: n, select: r, compiledOmit: i, dialecteConfig: a, transparentElements: o } = e;
	if (rt({
		record: n,
		compiledOmit: i
	})) return D({ record: n });
	let s = await ct({
		context: t,
		record: n,
		select: r,
		compiledOmit: i,
		dialecteConfig: a,
		transparentElements: o
	});
	return D({
		record: n,
		tree: (await Promise.all(s.map(({ record: e, select: n }) => st({
			context: t,
			record: e,
			select: n,
			compiledOmit: i,
			dialecteConfig: a,
			transparentElements: o
		})))).filter((e) => e !== null)
	});
}
async function ct(e) {
	let { context: t, record: n, select: r, compiledOmit: i, dialecteConfig: a, transparentElements: o } = e;
	if (!n.children?.length) return [];
	let s = r ? ut(r) : void 0;
	if (s && r && a && r.recursive !== !1) {
		let e = n.tagName, t = a.children[e], i = r[e] !== void 0;
		t?.includes(e) && !i && s.add(e);
	}
	let c = n.children.filter((e) => V({
		tagName: e.tagName,
		compiledOmit: i,
		selectKeys: s,
		transparentElements: o
	}));
	return c.length ? dt({
		children: (await Promise.all(c.map((e) => F({
			context: t,
			ref: k(e)
		})))).filter((e) => e !== void 0).filter((e) => !nt({
			record: e,
			compiledOmit: i
		})),
		select: r,
		record: n,
		dialecteConfig: a,
		transparentElements: o
	}) : [];
}
function V(e) {
	let { tagName: t, compiledOmit: n, selectKeys: r, transparentElements: i } = e;
	return n.unconditional.has(t) ? !1 : r && !r.has(t) ? !!i?.includes(t) : !0;
}
var lt = new Set(["where", "recursive"]);
function ut(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of Object.keys(e)) lt.has(n) || t.add(n);
	return t;
}
function dt(e) {
	let { children: t, select: n, record: r, dialecteConfig: i, transparentElements: a } = e;
	if (!n) return t.map((e) => ({
		record: e,
		select: void 0
	}));
	let o = [];
	for (let e of t) {
		let t = n[e.tagName];
		if (t === void 0 && a?.includes(e.tagName)) {
			o.push({
				record: e,
				select: n
			});
			continue;
		}
		if (t === void 0 && e.tagName === r.tagName) {
			let t = ft({
				child: e,
				select: n,
				dialecteConfig: i
			});
			if (t) {
				o.push(t);
				continue;
			}
		}
		if (t === void 0 || t === !1) continue;
		if (t === !0) {
			o.push({
				record: e,
				select: void 0
			});
			continue;
		}
		let s = pt({
			child: e,
			entry: t,
			parentRecord: r
		});
		s && o.push(s);
	}
	return o;
}
function ft(e) {
	let { child: t, select: n, dialecteConfig: r } = e;
	if (!(!r || n.recursive === !1) && r.children[t.tagName]?.includes(t.tagName) && !(n.where && !R({
		record: t,
		attributeFilter: n.where
	}))) return {
		record: t,
		select: n
	};
}
function pt(e) {
	let { child: t, entry: n, parentRecord: r } = e, i = n;
	if (!(i.where && !R({
		record: t,
		attributeFilter: i.where
	}))) {
		if (i.recursive && t.tagName === r.tagName) {
			let e = i.recursive === !0 ? !0 : i.recursive - 1;
			return e === 0 ? void 0 : {
				record: t,
				select: {
					...i,
					recursive: e
				}
			};
		}
		return i.recursive ? {
			record: t,
			select: mt(i, t.tagName)
		} : t.tagName === r.tagName ? {
			record: t,
			select: {
				...i,
				recursive: !1
			}
		} : {
			record: t,
			select: i
		};
	}
}
function mt(e, t) {
	return e[t], e;
}
async function ht(e) {
	let { context: t, ref: n, ancestors: r = 0, depth: i, includeDeleted: a = !1 } = e;
	if (!n && i === void 0) return gt({
		context: t,
		includeDeleted: a
	});
	let o = e.siblings ?? !1, s = o === !0 || typeof o == "object" && !!o, c = typeof o == "object" && !!o && o.expand === !0, l = n ?? { tagName: t.dialecteConfig.rootElementName }, u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), f = a ? Me(t.stagedOperations) : void 0, p = (e) => {
		if (f) for (let t of f.get(e) ?? []) d.has(t.id) || (d.set(t.id, t), p(t.id));
	}, m = async (e, n) => {
		if (u.set(e.id, e), p(e.id), !(i !== void 0 && n >= i)) for (let r of e.children) {
			let e = await F({
				context: t,
				ref: k(r)
			});
			e && await m(e, n + 1);
		}
	}, h = await F({
		context: t,
		ref: l
	});
	w(h, {
		key: "ELEMENT_NOT_FOUND",
		detail: "No record found for the provided ref"
	});
	let g = h.id;
	await m(h, 0);
	let _ = Math.max(r, +!!s);
	if (_ > 0) {
		let e = await Fe({
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
					let n = await F({
						context: t,
						ref: k(e)
					});
					n && (c ? await m(n, 0) : u.set(n.id, n));
				}
			}
		}
	}
	return _t({
		live: u,
		deletedById: d,
		rootId: g
	});
}
async function gt(e) {
	let { context: t, includeDeleted: n = !1 } = e, { live: r, deleted: i } = je({
		rawRecords: await t.store.getByDocumentId(t.documentId),
		stagedOperations: t.stagedOperations,
		includeDeleted: n
	}), a;
	for (let e of r.values()) if (e.tagName === t.dialecteConfig.rootElementName) {
		a = e.id;
		break;
	}
	return w(a, {
		key: "ROOT_NOT_FOUND",
		detail: `No ${t.dialecteConfig.rootElementName} root element found in document`
	}), _t({
		live: r,
		deletedById: new Map(i.map((e) => [e.id, e])),
		rootId: a
	});
}
function _t(e) {
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
function vt(e) {
	let { liveRecords: t, deletedRecords: n, rootId: r } = e, i = new Map(t.map((e) => [e.id, e])), a = new Map(n.map((e) => [e.id, e])), o = /* @__PURE__ */ new Map();
	for (let e of n) {
		let t = e.parent?.id;
		if (!t) continue;
		let n = o.get(t) ?? [];
		n.push(e), o.set(t, n);
	}
	let s = i.get(r);
	w(s, {
		key: "ROOT_NOT_FOUND",
		detail: `No record found for rootId "${r}"`
	});
	let c = (e, t) => {
		let n = t === "live" ? i : a, r = e.children.filter((e) => n.has(e.id)).map((e) => c(n.get(e.id), t)), s = t === "live" ? (o.get(e.id) ?? []).map((e) => c(e, "deleted")) : [];
		return D({
			record: e,
			tree: [...r, ...s]
		});
	};
	return c(s, "live");
}
var yt = /* @__PURE__ */ we(((e, t) => {
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
})), H = /* @__PURE__ */ Ee((/* @__PURE__ */ we(((e, t) => {
	var n = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 });
	var r = n(yt());
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
})))(), 1);
function bt(e) {
	return (0, H.default)(e);
}
function xt(e, t = {}) {
	let { includeXmlDeclaration: n = !0 } = t, r = new XMLSerializer().serializeToString(e);
	return bt(n ? "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" + r : r);
}
async function St(e) {
	let { extension: t, xmlDocument: n, filename: r } = e, i = xt(n);
	await ee({
		data: new Blob([i], { type: "application/xml" }),
		filename: r,
		pickerType: {
			description: `${t.replace(/^\./, "").toUpperCase()} Files`,
			accept: { "application/xml": [t] }
		}
	});
}
function Ct(e) {
	let { records: t, config: n, withDatabaseIds: r = !1, rootId: i, declareNamespaces: a = !0 } = e, o = /* @__PURE__ */ new Map(), s;
	for (let e of t) o.set(e.id, e), e.tagName === n.rootElementName && (s = e);
	let c = i ? o.get(i) : s;
	w(c, {
		detail: i ? `No record found for rootId "${i}"` : `No ${n.rootElementName} root element found in records`,
		key: "EXPORT_ROOT_NOT_FOUND"
	});
	let l = c.tagName !== n.rootElementName, u = n.namespaces.default, d = document.implementation.createDocument(u.uri, null, null), f = wt({
		document: d,
		record: c,
		defaultNamespace: u,
		declareNamespaces: a
	});
	return a && f.setAttribute("xmlns", c.namespace.uri), c.attributes && Et({
		config: n,
		document: d,
		element: f,
		attributes: c.attributes,
		isRoot: !0,
		isFragment: l,
		declareNamespaces: a
	}), l || Ot({
		config: n,
		rootElement: f,
		namespace: c.namespace
	}), c.value && (f.textContent = c.value.trim()), r && f.setAttribute("_temp-idb-id", c.id), d.appendChild(f), U({
		index: o,
		config: n,
		withDatabaseIds: r,
		xmlDocument: d,
		parentRecord: c,
		parentElement: f,
		isFragment: l,
		declareNamespaces: a
	}), d;
}
function U(e) {
	let { index: t, config: n, withDatabaseIds: r, xmlDocument: i, parentRecord: a, parentElement: o, isFragment: s, declareNamespaces: c } = e;
	if (!a.children || a.children.length === 0) return;
	let l = [];
	for (let e of a.children) {
		let n = t.get(e.id);
		w(n, {
			detail: `Parent '${a.tagName}' references non-existent child '${e.tagName}' (id: ${e.id})`,
			key: "EXPORT_ORPHAN_CHILD_REF",
			ref: {
				tagName: a.tagName,
				id: a.id
			}
		}), l.push(n);
	}
	let u = T({
		parentTagName: a.tagName,
		children: l,
		childrenConfig: n.children
	});
	for (let e of u) {
		let a = Tt({
			config: n,
			document: i,
			record: e,
			defaultNamespace: n.namespaces.default,
			withDatabaseIds: r,
			isFragment: s,
			declareNamespaces: c
		});
		o.appendChild(a), U({
			index: t,
			config: n,
			withDatabaseIds: r,
			xmlDocument: i,
			parentRecord: e,
			parentElement: a,
			isFragment: s,
			declareNamespaces: c
		});
	}
}
function wt(e) {
	let { document: t, record: n, defaultNamespace: r, declareNamespaces: i } = e, a = n.namespace.uri !== r.uri && n.namespace.prefix && n.namespace.prefix !== "xmlns" ? `${n.namespace.prefix}:${n.tagName}` : n.tagName;
	return i ? t.createElementNS(n.namespace.uri, a) : t.createElement(a);
}
function Tt(e) {
	let { config: t, document: n, record: r, defaultNamespace: i, withDatabaseIds: a, isFragment: o, declareNamespaces: s } = e, c = r.namespace.uri === i.uri, l = wt({
		document: n,
		record: r,
		defaultNamespace: i,
		declareNamespaces: s
	});
	return s && !c && r.namespace.prefix && r.namespace.prefix !== "xmlns" && Dt({
		config: t,
		document: n,
		namespace: r.namespace,
		isFragment: o
	}), r.attributes && Et({
		config: t,
		document: n,
		element: l,
		attributes: r.attributes,
		isRoot: !1,
		isFragment: o,
		declareNamespaces: s
	}), kt({
		config: t,
		document: n,
		element: l,
		tagName: r.tagName,
		isFragment: o,
		declareNamespaces: s
	}), r.value && (l.textContent = r.value.trim()), a && l.setAttribute("_temp-idb-id", r.id), l;
}
function Et(e) {
	let { config: t, document: n, element: r, attributes: i, isRoot: a, isFragment: o, declareNamespaces: s } = e;
	for (let e of i) {
		if (jt(e)) continue;
		if (!At(e) || !e.namespace.prefix) {
			r.setAttribute(e.name, String(e.value));
			continue;
		}
		let i = v(e.name);
		if (!s) {
			r.setAttribute(`${e.namespace.prefix}:${i}`, String(e.value));
			continue;
		}
		a || Dt({
			config: t,
			document: n,
			namespace: e.namespace,
			isFragment: o
		}), r.setAttributeNS(e.namespace.uri, `${e.namespace.prefix}:${i}`, String(e.value));
	}
}
function Dt(e) {
	let { config: t, document: n, namespace: r, isFragment: i } = e, a = n.documentElement;
	if (!a || !r.prefix || r.prefix === "xmlns") return;
	let o = "http://www.w3.org/2000/xmlns/";
	a.getAttributeNS(o, r.prefix) === null && (a.setAttributeNS(o, `xmlns:${r.prefix}`, r.uri), i || Ot({
		config: t,
		rootElement: a,
		namespace: r
	}));
}
function Ot(e) {
	let { config: t, rootElement: n, namespace: r } = e, i = Object.entries(t.definition[t.rootElementName].attributes.details).filter(([e, n]) => _({
		dialecteConfig: t,
		tagName: t.rootElementName,
		attributeName: e,
		defaults: "required"
	}) === void 0 ? !1 : r.uri === t.namespaces.default.uri ? !n.namespace : n.namespace?.prefix === r.prefix && n.namespace?.uri === r.uri);
	if (i.length > 0) for (let [e, r] of i) {
		let i = v(e), a = _({
			dialecteConfig: t,
			tagName: t.rootElementName,
			attributeName: e,
			defaults: "required"
		}) ?? "";
		if (!(r.namespace ? n.hasAttributeNS(r.namespace.uri, i) : n.hasAttribute(i))) if (r.namespace) {
			let e = `${r.namespace.prefix}:${i}`;
			n.setAttributeNS(r.namespace.uri, e, a);
		} else n.setAttribute(i, a);
	}
}
function kt(e) {
	let { config: t, document: n, element: r, tagName: i, isFragment: a, declareNamespaces: o } = e;
	if (!o) return;
	let s = t.definition[i]?.attributes.details;
	if (s) for (let [e, c] of Object.entries(s)) {
		let s = _({
			dialecteConfig: t,
			tagName: i,
			attributeName: e,
			defaults: "required"
		});
		if (s === void 0) continue;
		let l = v(e);
		(c.namespace ? r.hasAttributeNS(c.namespace.uri, l) : r.hasAttribute(l)) || (c.namespace && c.namespace.prefix && c.namespace.prefix !== "xmlns" ? (o && Dt({
			config: t,
			document: n,
			namespace: c.namespace,
			isFragment: a
		}), r.setAttributeNS(c.namespace.uri, `${c.namespace.prefix}:${l}`, s)) : r.setAttribute(l, s));
	}
}
function At(e) {
	return typeof e == "object" && !!e && "namespace" in e && !!e.namespace;
}
function jt(e) {
	return !!(e.name === "xmlns" || e.name.startsWith("xmlns:") || At(e) && e.namespace?.prefix === "xmlns");
}
var Mt = /* @__PURE__ */ we(((e, t) => {
	t.exports = {};
})), Nt = /* @__PURE__ */ Ee((/* @__PURE__ */ we(((e) => {
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
			i(a), a.q = a.c = "", a.bufferCheckPosition = e.MAX_BUFFER_LENGTH, a.encoding = null, a.opt = r || {}, a.opt.lowercase = a.opt.lowercase || a.opt.lowercasetags, a.looseCase = a.opt.lowercase ? "toLowerCase" : "toUpperCase", a.opt.maxEntityCount = a.opt.maxEntityCount || 512, a.opt.maxEntityDepth = a.opt.maxEntityDepth || 4, a.entityCount = a.entityDepth = 0, a.tags = [], a.closed = a.closedRoot = a.sawRoot = !1, a.tag = a.error = null, a.strict = !!t, a.noscript = !!(t || a.opt.noscript), a.state = T.BEGIN, a.strictEntities = a.opt.strictEntities, a.ENTITIES = a.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), a.attribList = [], a.opt.xmlns && (a.ns = Object.create(h)), a.opt.unquotedAttributeValues === void 0 && (a.opt.unquotedAttributeValues = !t), a.trackPosition = a.opt.position !== !1, a.trackPosition && (a.position = a.line = a.column = 0), E(a, "onready");
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
						O(n);
						break;
					case "cdata":
						D(n, "oncdata", n.cdata), n.cdata = "";
						break;
					case "script":
						D(n, "onscript", n.script), n.script = "";
						break;
					default: k(n, "Max buffer length exceeded: " + t[a]);
				}
				i = Math.max(i, s);
			}
			n.bufferCheckPosition = e.MAX_BUFFER_LENGTH - i + n.position;
		}
		function i(e) {
			for (var n = 0, r = t.length; n < r; n++) e[t[n]] = "";
		}
		function a(e) {
			O(e), e.cdata !== "" && (D(e, "oncdata", e.cdata), e.cdata = ""), e.script !== "" && (D(e, "onscript", e.script), e.script = "");
		}
		n.prototype = {
			end: function() {
				oe(this);
			},
			write: M,
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
			o = Mt().Stream;
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
		function E(e, t, n) {
			e[t] && e[t](n);
		}
		function te(e) {
			var t = e && e.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);
			return t ? t[2] : null;
		}
		function ne(e) {
			return e ? e.toLowerCase().replace(/[^a-z0-9]/g, "") : null;
		}
		function re(e, t) {
			let n = ne(e), r = ne(t);
			return !n || !r ? !0 : r === "utf16" ? n === "utf16le" || n === "utf16be" : n === r;
		}
		function ie(e, t) {
			if (!(!e.strict || !e.encoding || !t || t.name !== "xml")) {
				var n = te(t.body);
				n && !re(e.encoding, n) && A(e, "XML declaration encoding " + n + " does not match detected stream encoding " + e.encoding.toUpperCase());
			}
		}
		function D(e, t, n) {
			e.textNode && O(e), E(e, t, n);
		}
		function O(e) {
			e.textNode = ae(e.opt, e.textNode), e.textNode && E(e, "ontext", e.textNode), e.textNode = "";
		}
		function ae(e, t) {
			return e.trim && (t = t.trim()), e.normalize && (t = t.replace(/\s+/g, " ")), t;
		}
		function k(e, t) {
			return O(e), e.trackPosition && (t += "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c), t = Error(t), e.error = t, E(e, "onerror", t), e;
		}
		function oe(e) {
			return e.sawRoot && !e.closedRoot && A(e, "Unclosed root tag"), e.state !== T.BEGIN && e.state !== T.BEGIN_WHITESPACE && e.state !== T.TEXT && k(e, "Unexpected end"), O(e), e.c = "", e.closed = !0, E(e, "onend"), n.call(e, e.strict, e.opt), e;
		}
		function A(e, t) {
			if (typeof e != "object" || !(e instanceof n)) throw Error("bad call to strictFail");
			e.strict && k(e, t);
		}
		function j(e) {
			e.strict || (e.tagName = e.tagName[e.looseCase]());
			var t = e.tags[e.tags.length - 1] || e, n = e.tag = {
				name: e.tagName,
				attributes: {}
			};
			e.opt.xmlns && (n.ns = t.ns), e.attribList.length = 0, D(e, "onopentagstart", n);
		}
		function se(e, t) {
			var n = e.indexOf(":") < 0 ? ["", e] : e.split(":"), r = n[0], i = n[1];
			return t && e === "xmlns" && (r = "xmlns", i = ""), {
				prefix: r,
				local: i
			};
		}
		function ce(e) {
			if (e.strict || (e.attribName = e.attribName[e.looseCase]()), e.attribList.indexOf(e.attribName) !== -1 || e.tag.attributes.hasOwnProperty(e.attribName)) {
				e.attribName = e.attribValue = "";
				return;
			}
			if (e.opt.xmlns) {
				var t = se(e.attribName, !0), n = t.prefix, r = t.local;
				if (n === "xmlns") if (r === "xml" && e.attribValue !== p) A(e, "xml: prefix must be bound to " + p + "\nActual: " + e.attribValue);
				else if (r === "xmlns" && e.attribValue !== m) A(e, "xmlns: prefix must be bound to " + m + "\nActual: " + e.attribValue);
				else {
					var i = e.tag, a = e.tags[e.tags.length - 1] || e;
					i.ns === a.ns && (i.ns = Object.create(a.ns)), i.ns[r] = e.attribValue;
				}
				e.attribList.push([e.attribName, e.attribValue]);
			} else e.tag.attributes[e.attribName] = e.attribValue, D(e, "onattribute", {
				name: e.attribName,
				value: e.attribValue
			});
			e.attribName = e.attribValue = "";
		}
		function le(e, t) {
			if (e.opt.xmlns) {
				var n = e.tag, r = se(e.tagName);
				n.prefix = r.prefix, n.local = r.local, n.uri = n.ns[r.prefix] || "", n.prefix && !n.uri && (A(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName)), n.uri = r.prefix);
				var i = e.tags[e.tags.length - 1] || e;
				n.ns && i.ns !== n.ns && Object.keys(n.ns).forEach(function(t) {
					D(e, "onopennamespace", {
						prefix: t,
						uri: n.ns[t]
					});
				});
				for (var a = 0, o = e.attribList.length; a < o; a++) {
					var s = e.attribList[a], c = s[0], l = s[1], u = se(c, !0), d = u.prefix, f = u.local, p = d === "" ? "" : n.ns[d] || "", m = {
						name: c,
						value: l,
						prefix: d,
						local: f,
						uri: p
					};
					d && d !== "xmlns" && !p && (A(e, "Unbound namespace prefix: " + JSON.stringify(d)), m.uri = d), e.tag.attributes[c] = m, D(e, "onattribute", m);
				}
				e.attribList.length = 0;
			}
			e.tag.isSelfClosing = !!t, e.sawRoot = !0, e.tags.push(e.tag), D(e, "onopentag", e.tag), t || (!e.noscript && e.tagName.toLowerCase() === "script" ? e.state = T.SCRIPT : e.state = T.TEXT, e.tag = null, e.tagName = ""), e.attribName = e.attribValue = "", e.attribList.length = 0;
		}
		function ue(e) {
			if (!e.tagName) {
				A(e, "Weird empty close tag."), e.textNode += "</>", e.state = T.TEXT;
				return;
			}
			if (e.script) {
				if (e.tagName !== "script") {
					e.script += "</" + e.tagName + ">", e.tagName = "", e.state = T.SCRIPT;
					return;
				}
				D(e, "onscript", e.script), e.script = "";
			}
			var t = e.tags.length, n = e.tagName;
			e.strict || (n = n[e.looseCase]());
			for (var r = n; t-- && e.tags[t].name !== r;) A(e, "Unexpected close tag");
			if (t < 0) {
				A(e, "Unmatched closing tag: " + e.tagName), e.textNode += "</" + e.tagName + ">", e.state = T.TEXT;
				return;
			}
			e.tagName = n;
			for (var i = e.tags.length; i-- > t;) {
				var a = e.tag = e.tags.pop();
				e.tagName = e.tag.name, D(e, "onclosetag", e.tagName);
				var o = {};
				for (var s in a.ns) o[s] = a.ns[s];
				var c = e.tags[e.tags.length - 1] || e;
				e.opt.xmlns && a.ns !== c.ns && Object.keys(a.ns).forEach(function(t) {
					var n = a.ns[t];
					D(e, "onclosenamespace", {
						prefix: t,
						uri: n
					});
				});
			}
			t === 0 && (e.closedRoot = !0), e.tagName = e.attribValue = e.attribName = "", e.attribList.length = 0, e.state = T.TEXT;
		}
		function de(e) {
			var t = e.entity, n = t.toLowerCase(), r, i = "";
			return e.ENTITIES[t] ? e.ENTITIES[t] : e.ENTITIES[n] ? e.ENTITIES[n] : (t = n, t.charAt(0) === "#" && (t.charAt(1) === "x" ? (t = t.slice(2), r = parseInt(t, 16), i = r.toString(16)) : (t = t.slice(1), r = parseInt(t, 10), i = r.toString(10))), t = t.replace(/^0+/, ""), isNaN(r) || i.toLowerCase() !== t || r < 0 || r > 1114111 ? (A(e, "Invalid character entity"), "&" + e.entity + ";") : String.fromCodePoint(r));
		}
		function fe(e, t) {
			t === "<" ? (e.state = T.OPEN_WAKA, e.startTagPosition = e.position) : b(t) || (A(e, "Non-whitespace before first tag."), e.textNode = t, e.state = T.TEXT);
		}
		function pe(e, t) {
			var n = "";
			return t < e.length && (n = e.charAt(t)), n;
		}
		function M(t) {
			var n = this;
			if (this.error) throw this.error;
			if (n.closed) return k(n, "Cannot write after close. Assign an onready handler.");
			if (t === null) return oe(n);
			typeof t == "object" && (t = t.toString());
			for (var i = 0, a = ""; a = pe(t, i++), n.c = a, a;) switch (n.trackPosition && (n.position++, a === "\n" ? (n.line++, n.column = 0) : n.column++), n.state) {
				case T.BEGIN:
					if (n.state = T.BEGIN_WHITESPACE, a === "﻿") continue;
					fe(n, a);
					continue;
				case T.BEGIN_WHITESPACE:
					fe(n, a);
					continue;
				case T.TEXT:
					if (n.sawRoot && !n.closedRoot) {
						for (var o = i - 1; a && a !== "<" && a !== "&";) a = pe(t, i++), a && n.trackPosition && (n.position++, a === "\n" ? (n.line++, n.column = 0) : n.column++);
						n.textNode += t.substring(o, i - 1);
					}
					a === "<" && !(n.sawRoot && n.closedRoot && !n.strict) ? (n.state = T.OPEN_WAKA, n.startTagPosition = n.position) : (!b(a) && (!n.sawRoot || n.closedRoot) && A(n, "Text data outside of root node."), a === "&" ? n.state = T.TEXT_ENTITY : n.textNode += a);
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
						if (A(n, "Unencoded <"), n.startTagPosition + 1 < n.position) {
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
					n.doctype && n.doctype !== !0 && n.sgmlDecl ? (n.state = T.DOCTYPE_DTD, n.doctype += "<!" + n.sgmlDecl + a, n.sgmlDecl = "") : (n.sgmlDecl + a).toUpperCase() === d ? (D(n, "onopencdata"), n.state = T.CDATA, n.sgmlDecl = "", n.cdata = "") : (n.sgmlDecl + a).toUpperCase() === f ? (n.state = T.DOCTYPE, (n.doctype || n.sawRoot) && A(n, "Inappropriately located doctype declaration"), n.doctype = "", n.sgmlDecl = "") : a === ">" ? (D(n, "onsgmldeclaration", n.sgmlDecl), n.sgmlDecl = "", n.state = T.TEXT) : (x(a) && (n.state = T.SGML_DECL_QUOTED), n.sgmlDecl += a);
					continue;
				case T.SGML_DECL_QUOTED:
					a === n.q && (n.state = T.SGML_DECL, n.q = ""), n.sgmlDecl += a;
					continue;
				case T.DOCTYPE:
					a === ">" ? (n.state = T.TEXT, D(n, "ondoctype", n.doctype), n.doctype = !0) : (n.doctype += a, a === "[" ? n.state = T.DOCTYPE_DTD : x(a) && (n.state = T.DOCTYPE_QUOTED, n.q = a));
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
					a === "-" ? (n.state = T.COMMENT_ENDED, n.comment = ae(n.opt, n.comment), n.comment && D(n, "oncomment", n.comment), n.comment = "") : (n.comment += "-" + a, n.state = T.COMMENT);
					continue;
				case T.COMMENT_ENDED:
					a === ">" ? n.doctype && n.doctype !== !0 ? n.state = T.DOCTYPE_DTD : n.state = T.TEXT : (A(n, "Malformed comment"), n.comment += "--" + a, n.state = T.COMMENT);
					continue;
				case T.CDATA:
					for (var o = i - 1; a && a !== "]";) a = pe(t, i++), a && n.trackPosition && (n.position++, a === "\n" ? (n.line++, n.column = 0) : n.column++);
					n.cdata += t.substring(o, i - 1), a === "]" && (n.state = T.CDATA_ENDING);
					continue;
				case T.CDATA_ENDING:
					a === "]" ? n.state = T.CDATA_ENDING_2 : (n.cdata += "]" + a, n.state = T.CDATA);
					continue;
				case T.CDATA_ENDING_2:
					a === ">" ? (n.cdata && D(n, "oncdata", n.cdata), D(n, "onclosecdata"), n.cdata = "", n.state = T.TEXT) : a === "]" ? n.cdata += "]" : (n.cdata += "]]" + a, n.state = T.CDATA);
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
						ie(n, e), D(n, "onprocessinginstruction", e), n.procInstName = n.procInstBody = "", n.state = T.TEXT;
					} else n.procInstBody += "?" + a, n.state = T.PROC_INST_BODY;
					continue;
				case T.OPEN_TAG:
					C(_, a) ? n.tagName += a : (j(n), a === ">" ? le(n) : a === "/" ? n.state = T.OPEN_TAG_SLASH : (b(a) || A(n, "Invalid character in tag name"), n.state = T.ATTRIB));
					continue;
				case T.OPEN_TAG_SLASH:
					a === ">" ? (le(n, !0), ue(n)) : (A(n, "Forward-slash in opening tag not followed by >"), n.state = T.ATTRIB);
					continue;
				case T.ATTRIB:
					if (b(a)) continue;
					a === ">" ? le(n) : a === "/" ? n.state = T.OPEN_TAG_SLASH : C(g, a) ? (n.attribName = a, n.attribValue = "", n.state = T.ATTRIB_NAME) : A(n, "Invalid attribute name");
					continue;
				case T.ATTRIB_NAME:
					a === "=" ? n.state = T.ATTRIB_VALUE : a === ">" ? (A(n, "Attribute without value"), n.attribValue = n.attribName, ce(n), le(n)) : b(a) ? n.state = T.ATTRIB_NAME_SAW_WHITE : C(_, a) ? n.attribName += a : A(n, "Invalid attribute name");
					continue;
				case T.ATTRIB_NAME_SAW_WHITE:
					if (a === "=") n.state = T.ATTRIB_VALUE;
					else if (b(a)) continue;
					else A(n, "Attribute without value"), n.tag.attributes[n.attribName] = "", n.attribValue = "", D(n, "onattribute", {
						name: n.attribName,
						value: ""
					}), n.attribName = "", a === ">" ? le(n) : C(g, a) ? (n.attribName = a, n.state = T.ATTRIB_NAME) : (A(n, "Invalid attribute name"), n.state = T.ATTRIB);
					continue;
				case T.ATTRIB_VALUE:
					if (b(a)) continue;
					x(a) ? (n.q = a, n.state = T.ATTRIB_VALUE_QUOTED) : (n.opt.unquotedAttributeValues || k(n, "Unquoted attribute value"), n.state = T.ATTRIB_VALUE_UNQUOTED, n.attribValue = a);
					continue;
				case T.ATTRIB_VALUE_QUOTED:
					if (a !== n.q) {
						a === "&" ? n.state = T.ATTRIB_VALUE_ENTITY_Q : n.attribValue += a;
						continue;
					}
					ce(n), n.q = "", n.state = T.ATTRIB_VALUE_CLOSED;
					continue;
				case T.ATTRIB_VALUE_CLOSED:
					b(a) ? n.state = T.ATTRIB : a === ">" ? le(n) : a === "/" ? n.state = T.OPEN_TAG_SLASH : C(g, a) ? (A(n, "No whitespace between attributes"), n.attribName = a, n.attribValue = "", n.state = T.ATTRIB_NAME) : A(n, "Invalid attribute name");
					continue;
				case T.ATTRIB_VALUE_UNQUOTED:
					if (!S(a)) {
						a === "&" ? n.state = T.ATTRIB_VALUE_ENTITY_U : n.attribValue += a;
						continue;
					}
					ce(n), a === ">" ? le(n) : n.state = T.ATTRIB;
					continue;
				case T.CLOSE_TAG:
					if (n.tagName) a === ">" ? ue(n) : C(_, a) ? n.tagName += a : n.script ? (n.script += "</" + n.tagName + a, n.tagName = "", n.state = T.SCRIPT) : (b(a) || A(n, "Invalid tagname in closing tag"), n.state = T.CLOSE_TAG_SAW_WHITE);
					else {
						if (b(a)) continue;
						w(g, a) ? n.script ? (n.script += "</" + a, n.state = T.SCRIPT) : A(n, "Invalid tagname in closing tag.") : n.tagName = a;
					}
					continue;
				case T.CLOSE_TAG_SAW_WHITE:
					if (b(a)) continue;
					a === ">" ? ue(n) : A(n, "Invalid characters in closing tag");
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
						case T.ATTRIB_VALUE_ENTITY_U:
							c = T.ATTRIB_VALUE_UNQUOTED, l = "attribValue";
							break;
					}
					if (a === ";") {
						var u = de(n);
						n.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(u) ? ((n.entityCount += 1) > n.opt.maxEntityCount && k(n, "Parsed entity count exceeds max entity count"), (n.entityDepth += 1) > n.opt.maxEntityDepth && k(n, "Parsed entity depth exceeds max entity depth"), n.entity = "", n.state = c, n.write(u), --n.entityDepth) : (n[l] += u, n.entity = "", n.state = c);
					} else C(n.entity.length ? y : v, a) ? n.entity += a : (A(n, "Invalid character in entity name"), n[l] += "&" + n.entity + a, n.entity = "", n.state = c);
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
})))(), 1), Pt = class {
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
function Ft(e) {
	return "prefix" in e && "uri" in e && !!e.prefix && !!e.uri;
}
function W(e) {
	let { dialecteConfig: t, useCustomRecordsIds: n, session: r, hooks: i } = e, a = {
		defaultNamespace: null,
		stack: [],
		recordsBatch: []
	}, o = Nt.parser(!0, {
		lowercase: !1,
		trim: !0,
		normalize: !0,
		position: !1,
		xmlns: !0
	});
	o.onopentag = (e) => a = It({
		node: e,
		state: a,
		dialecteConfig: t,
		useCustomRecordsIds: n
	}), o.ontext = (e) => a = Lt({
		text: e,
		state: a
	}), o.oncdata = (e) => a = Lt({
		text: e,
		state: a
	}), o.onclosetag = () => ({updatedState: a} = Rt({
		state: a,
		hooks: i,
		session: r,
		dialecteConfig: t
	})), o.onerror = G;
	function s() {
		let e = a.recordsBatch;
		return a.recordsBatch = [], e;
	}
	function c() {
		return a.recordsBatch.length;
	}
	return {
		parser: o,
		drainBatch: s,
		getSize: c
	};
}
function It(e) {
	let { node: t, state: n, dialecteConfig: r, useCustomRecordsIds: i } = e, a = { ...n }, o = zt(t);
	a.defaultNamespace ||= Bt({
		element: t,
		defaultNamespace: r.namespaces.default,
		rootElementName: r.rootElementName
	});
	let s = Vt(t, a.defaultNamespace), c = {
		id: K({
			attributes: t.attributes,
			useCustomRecordsIds: i
		}),
		tagName: o,
		namespace: s,
		attributes: Ht(q({
			attributes: t.attributes,
			useCustomRecordsIds: i
		})),
		value: "",
		parent: Ut(n.stack),
		children: []
	};
	return a.stack.push(c), a;
}
function Lt(e) {
	let { text: t, state: n } = e;
	return t && n.stack.length > 0 && (n.stack[n.stack.length - 1].value += t), n;
}
function Rt(e) {
	let { state: t, hooks: n, session: r, dialecteConfig: i } = e, a = t.stack.at(-1), o = t.stack.slice(0, -1), s = [...t.recordsBatch];
	if (a) {
		let e = oe({
			dialecteConfig: i,
			hooks: n,
			record: a
		});
		if (n?.beforeImportRecord && n.beforeImportRecord({
			record: e,
			ancestry: o
		}), o.length) {
			let t = o.length - 1;
			o = o.map((n, r) => r === t ? {
				...n,
				children: [...n.children, {
					id: e.id,
					tagName: e.tagName
				}]
			} : n);
		} else e.parent && r.registerPendingChild(e.parent.id, {
			id: e.id,
			tagName: e.tagName
		});
		s.push(e);
	}
	return { updatedState: {
		defaultNamespace: t.defaultNamespace,
		stack: o,
		recordsBatch: s
	} };
}
function G(e) {
	return /* @__PURE__ */ Error(`XML parsing error: ${e}`);
}
function zt(e) {
	return e.local;
}
function Bt(e) {
	let { element: t, defaultNamespace: n, rootElementName: r } = e;
	return w(t.name === r, { detail: `Expected root element <${r}>, got <${t.name}>` }), t.attributes?.xmlns?.value ? {
		prefix: "",
		uri: t.attributes.xmlns.value
	} : n;
}
function Vt(e, t) {
	return Ft(e) ? {
		prefix: e.prefix,
		uri: e.uri
	} : t;
}
function Ht(e) {
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
function Ut(e) {
	if (e.length === 0) return null;
	let t = e[e.length - 1];
	return t ? {
		id: t.id,
		tagName: t.tagName
	} : null;
}
function K(e) {
	let { attributes: t, useCustomRecordsIds: n } = e, r = t[E];
	return n && r && r.value ? r.value : crypto.randomUUID();
}
function q(e) {
	let { attributes: t, useCustomRecordsIds: n } = e;
	return n ? Object.values(t).filter((e) => e.name !== E) : Object.values(t);
}
var Wt = 32 * 1024, Gt = 2e3;
async function Kt(e) {
	let { documentId: t, store: n, config: r, useCustomRecordsIds: i = !1, chunkOptions: a, hooks: o } = e, { file: s } = e, { supportedFileExtensions: c } = r.io;
	if (w(c.some((e) => s.name.toLowerCase().endsWith(e)), {
		key: "ASSERTION_FAILED",
		detail: `Unsupported file type: ${s.name}`
	}), s.size === 0) return {
		documentId: t,
		recordCount: 0
	};
	let l = o?.beforeImport;
	if (l) {
		let e = l(await s.text());
		s = new File([e], s.name, { type: s.type });
	}
	let u = a?.chunkSize ?? Wt, d = a?.batchSize ?? Gt, f = new Pt(), p = W({
		dialecteConfig: r,
		useCustomRecordsIds: i,
		session: f,
		hooks: o
	});
	return {
		documentId: t,
		recordCount: await qt({
			file: s,
			sax: p,
			session: f,
			store: n,
			documentId: t,
			chunkSize: u,
			batchSize: d
		}) + await Jt({
			hooks: o,
			store: n,
			documentId: t
		})
	};
}
async function qt(e) {
	let { file: t, sax: n, session: r, store: i, documentId: a, chunkSize: o, batchSize: s } = e, c = 0, l = t.stream().getReader(), u = new TextDecoder(), d = new Uint8Array(), f = !1;
	for (; !f;) {
		let e = await l.read();
		if (f = e.done, f) {
			d.length > 0 && n.parser.write(u.decode(d)), n.parser.close(), c += await Yt({
				sax: n,
				session: r,
				store: i,
				documentId: a,
				threshold: 0
			});
			break;
		}
		if (e.value) for (d = J(d, e.value); d.length >= o;) {
			let e = u.decode(d.slice(0, o), { stream: !0 });
			d = d.slice(o), n.parser.write(e), c += await Yt({
				sax: n,
				session: r,
				store: i,
				documentId: a,
				threshold: s
			});
		}
	}
	return c;
}
async function Jt(e) {
	let { hooks: t, store: n, documentId: r } = e;
	if (!t?.afterImport) return 0;
	let { creates: i, updates: a, deletes: o } = await t.afterImport();
	return i?.length || a?.length || o?.length ? (await n.bulkWrite(r, {
		creates: i,
		updates: a,
		deletes: o
	}), (i?.length ?? 0) - (o?.length ?? 0)) : 0;
}
function J(e, t) {
	let n = new Uint8Array(e.length + t.length);
	return n.set(e), n.set(t, e.length), n;
}
async function Yt(e) {
	let { sax: t, session: n, store: r, documentId: i, threshold: a } = e;
	if (t.getSize() < a) return 0;
	let o = t.drainBatch(), s = n.resolveChildrenForBatch(o);
	return await r.bulkWrite(i, { creates: s }), s.length;
}
async function Xt(e) {
	let { context: t, options: n = {} } = e, { ref: r, ancestors: i, siblings: a, depth: o, includeDeleted: s, omit: c, unwrap: l, as: u = "tree" } = n, d = await ht({
		context: t,
		ref: r ? k(r) : void 0,
		ancestors: i,
		siblings: a,
		depth: o,
		includeDeleted: s
	});
	if (u === "xml") return Qt(t, d, n.declareNamespaces, n.includeXmlDeclaration);
	let f = Zt(t, d, {
		omit: c,
		unwrap: l
	});
	return u === "tree" ? f : {
		tree: f,
		xmlString: Qt(t, d, n.declareNamespaces, n.includeXmlDeclaration)
	};
}
function Zt(e, t, n) {
	let r = vt(t);
	r = it({
		tree: r,
		omit: n.omit
	});
	let i = e.dialecteConfig.transparentElements, a = n.unwrap ?? (i?.length ? [...i] : void 0);
	return a?.length && (r = et({
		tree: r,
		unwrapTagNames: a
	})), r = at({
		tree: r,
		childrenConfig: e.dialecteConfig.children
	}), r;
}
function Qt(e, t, n, r) {
	return xt(Ct({
		records: t.liveRecords,
		config: e.dialecteConfig,
		rootId: t.rootId,
		declareNamespaces: n
	}), { includeXmlDeclaration: r });
}
var $t = class {
	constructor(e, t) {
		this.getContext = e, this.dialecteConfig = t;
	}
	async getRecord(e) {
		return F({
			context: this.getContext(),
			ref: e
		});
	}
	async getRecords(e) {
		return Ne({
			context: this.getContext(),
			refs: e
		});
	}
	async getChild(e, t) {
		return L({
			context: this.getContext(),
			ref: k(e),
			tagName: t
		});
	}
	async getChildren(e, t) {
		return Pe({
			context: this.getContext(),
			ref: k(e),
			tagName: t
		});
	}
	async getRecordsByTagName(e) {
		return I({
			context: this.getContext(),
			tagName: e
		});
	}
	async getAttribute(e, t) {
		let n = k(e), { fullObject: r } = t;
		return r ? Ye({
			context: this.getContext(),
			ref: n,
			...t
		}) : Je({
			context: this.getContext(),
			ref: n,
			...t
		});
	}
	async getAttributes(e, t) {
		let n = k(e), { fullObject: r } = t || {};
		return r ? Qe({
			context: this.getContext(),
			ref: n,
			...t
		}) : Ze({
			context: this.getContext(),
			ref: n,
			...t
		});
	}
	async getTree(e, t) {
		return ot({
			context: this.getContext(),
			ref: k(e),
			options: t,
			dialecteConfig: this.dialecteConfig
		});
	}
	async getSnapshot(e) {
		return Xt({
			context: this.getContext(),
			options: e
		});
	}
	async findDescendants(e) {
		let t = k(e), n = this.dialecteConfig.descendants[t.tagName] ?? [];
		return Le({
			context: this.getContext(),
			ref: t,
			options: { collect: n }
		});
	}
	async findAncestors(e) {
		return e ? Fe({
			context: this.getContext(),
			ref: k(e)
		}) : [];
	}
	async findByAttributes(e) {
		return Ie({
			context: this.getContext(),
			tagName: e.tagName,
			attributes: e.attributes
		});
	}
}, en = class {
	constructor(e, t, n) {
		this.store = e, this.dialecteConfig = t, this.documentId = n;
	}
	get any() {
		return this._any ??= new $t(() => this.context, this.dialecteConfig);
	}
	getOperations() {
		return [];
	}
	get context() {
		return {
			store: this.store,
			dialecteConfig: this.dialecteConfig,
			documentId: this.documentId,
			recordCache: void 0,
			stagedOperations: this.getOperations()
		};
	}
	async getDocumentInfo() {
		let e = await this.store.getDocument(this.documentId);
		return w(e, {
			key: "DOCUMENT_NOT_REGISTERED",
			detail: `Expected document id: ${this.documentId}`
		}), e;
	}
	async getRoot() {
		let e = await F({
			context: this.context,
			ref: { tagName: this.dialecteConfig.rootElementName }
		});
		return w(e, {
			key: "ROOT_NOT_FOUND",
			detail: `Expected tag name: ${this.dialecteConfig.rootElementName}`
		}), e;
	}
	async getRecord(e) {
		return F({
			context: this.context,
			ref: k(e)
		});
	}
	async getRecords(e) {
		let t = e.map((e) => k(e));
		return Ne({
			context: this.context,
			refs: t
		});
	}
	async getChild(e, t) {
		if (e) return L({
			context: this.context,
			ref: k(e),
			tagName: t
		});
	}
	async getChildren(e, t) {
		return e ? Pe({
			context: this.context,
			ref: k(e),
			tagName: t
		}) : [];
	}
	async getRecordsByTagName(e) {
		return I({
			context: this.context,
			tagName: e
		});
	}
	async findDescendants(e, t) {
		let n = k(e);
		if (!t) {
			let e = this.dialecteConfig.descendants[n.tagName] ?? [];
			return Le({
				context: this.context,
				ref: n,
				options: { collect: e }
			});
		}
		return Le({
			context: this.context,
			ref: n,
			options: t
		});
	}
	async findAncestors(e, t) {
		return e ? Fe({
			context: this.context,
			ref: k(e),
			options: t
		}) : [];
	}
	async getTree(e, t) {
		return ot({
			context: this.context,
			ref: k(e),
			options: t,
			dialecteConfig: this.dialecteConfig
		});
	}
	async getSnapshot(e) {
		return Xt({
			context: this.context,
			options: e
		});
	}
	async getAttribute(e, t) {
		let n = k(e), { fullObject: r } = t;
		return r ? Ye({
			context: this.context,
			ref: n,
			...t
		}) : Je({
			context: this.context,
			ref: n,
			...t
		});
	}
	async getAttributes(e, t) {
		let n = k(e), { fullObject: r } = t || {};
		return r ? Qe({
			context: this.context,
			ref: n,
			...t
		}) : Ze({
			context: this.context,
			ref: n,
			...t
		});
	}
	async findByAttributes(e) {
		return Ie({
			context: this.context,
			...e
		});
	}
};
function tn(e) {
	let { context: t, status: n, record: r, oldRecord: i, newRecord: a } = e, o, s, c;
	r && (o = re(r)), i && (s = re(i)), a && (c = re(a)), n === "created" ? (w(o, {
		detail: "Record is required for created",
		key: "ELEMENT_NOT_FOUND"
	}), t.stagedOperations.push({
		status: n,
		oldRecord: void 0,
		newRecord: o
	})) : n === "updated" ? (w(s && c, {
		detail: "Old record and new record are required for updated",
		key: "ELEMENT_NOT_FOUND"
	}), t.stagedOperations.push({
		status: n,
		oldRecord: s,
		newRecord: c
	})) : n === "deleted" && o && (w(o, {
		detail: "Record is required for deleted",
		key: "ELEMENT_NOT_FOUND"
	}), t.stagedOperations.push({
		status: n,
		oldRecord: o,
		newRecord: void 0
	}));
}
function nn(e) {
	let { context: t, operations: n } = e;
	for (let e of n) switch (e.status) {
		case "created":
			tn({
				context: t,
				status: "created",
				record: e.newRecord
			});
			break;
		case "updated":
			tn({
				context: t,
				status: "updated",
				oldRecord: e.oldRecord,
				newRecord: e.newRecord
			});
			break;
		case "deleted":
			tn({
				context: t,
				status: "deleted",
				record: e.oldRecord
			});
			break;
	}
}
async function rn(e) {
	let { dialecteConfig: t, hooks: n, context: r, query: i, parentRef: a, params: o } = e, { id: s, tagName: c, attributes: l, namespace: u, value: d } = o;
	an({
		attributes: l,
		tagName: c
	});
	let f = await F({
		context: r,
		ref: a
	});
	w(f, {
		detail: "Parent record not found",
		key: "ELEMENT_NOT_FOUND",
		ref: a
	});
	let p = oe({
		dialecteConfig: t,
		hooks: n,
		record: {
			id: s ?? crypto.randomUUID(),
			tagName: c,
			attributes: l,
			namespace: u,
			value: d,
			parent: {
				id: f.id,
				tagName: f.tagName
			},
			children: []
		}
	});
	A({
		dialecteConfig: t,
		tagName: p.tagName,
		attributes: p.attributes
	}), tn({
		context: r,
		status: "created",
		record: p
	});
	let m = {
		...f,
		children: [...f.children, {
			id: p.id,
			tagName: p.tagName
		}]
	};
	return tn({
		context: r,
		status: "updated",
		oldRecord: f,
		newRecord: m
	}), n?.afterCreated && nn({
		context: r,
		operations: await n.afterCreated({
			childRecord: p,
			parentRecord: m,
			query: i
		})
	}), p;
}
function an(e) {
	let { attributes: t, tagName: n } = e;
	if (!(!t || !Array.isArray(t))) for (let e of t) {
		let { name: t } = e;
		!(t === "xmlns" || t.startsWith("xmlns:")) && t.includes(":") && m("PREFIXED_ATTRIBUTE_NAME", {
			detail: `Attribute '${t}' on '${n}' is prefixed — pass a local name plus its namespace instead: { name: '${v(t)}', namespace }.`,
			ref: { tagName: n }
		});
	}
}
async function on(e) {
	let { dialecteConfig: t, hooks: n, context: r, query: i, parentRef: a, record: o, cumulativeCloneMappings: s } = e, c = [], l = await sn({
		dialecteConfig: t,
		hooks: n,
		context: r,
		query: i,
		parentRef: a,
		record: o,
		mappings: c
	});
	if (s.push(...c), n?.afterDeepClone) {
		let e = await n.afterDeepClone({
			cumulativeCloneMappings: s,
			query: i
		});
		r.stagedOperations.push(...e);
	}
	return {
		record: l,
		mappings: c
	};
}
async function sn(e) {
	let { dialecteConfig: t, hooks: n, context: r, query: i, parentRef: a, record: o, mappings: s } = e, c = !0, l = o;
	if (n?.beforeClone) {
		let e = n.beforeClone({ record: o });
		c = e.shouldBeCloned, l = e.transformedRecord;
	}
	if (!c) return l;
	let u = await rn({
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
	}), d = k(o);
	s.push({
		source: Object.assign(d, { attributes: [...o.attributes] }),
		target: k(u)
	});
	for (let e of l.tree) await sn({
		dialecteConfig: t,
		hooks: n,
		context: r,
		query: i,
		parentRef: k(u),
		record: e,
		mappings: s
	});
	return u;
}
async function cn(e) {
	let { hooks: t, context: n, query: r, ref: i } = e, a = await F({
		context: n,
		ref: i
	});
	w(a, {
		detail: `Record not found (tagName=${i.tagName}, id=${i.id})`,
		key: "ELEMENT_NOT_FOUND",
		ref: i
	}), w(a.parent, {
		detail: "Cannot delete root element",
		key: "PROTECTED_ROOT"
	}), t?.beforeDelete && nn({
		context: n,
		operations: await t.beforeDelete({
			record: a,
			query: r
		})
	}), await ln({
		context: n,
		record: a
	}), tn({
		context: n,
		status: "deleted",
		record: a
	});
	let o = await F({
		context: n,
		ref: k(a.parent)
	});
	w(o, {
		detail: `Parent record not found (tagName=${a.parent.tagName}, id=${a.parent.id})`,
		key: "ELEMENT_NOT_FOUND"
	});
	let s = {
		...o,
		children: o.children.filter((e) => e.id !== a.id)
	};
	return tn({
		context: n,
		status: "updated",
		oldRecord: o,
		newRecord: s
	}), s;
}
async function ln(e) {
	let { context: t, record: n } = e;
	for (let e of n.children) {
		let n = await F({
			context: t,
			ref: k(e)
		});
		n && (n.children.length > 0 && await ln({
			context: t,
			record: n
		}), tn({
			context: t,
			status: "deleted",
			record: n
		}));
	}
}
async function un(e) {
	let { dialecteConfig: t, hooks: n, context: r, query: i, parentRef: a, params: o } = e, s = dn(o.attributes), c = await Pe({
		context: r,
		ref: a,
		tagName: o.tagName
	});
	return (s ? c.find((e) => R({
		record: e,
		attributeFilter: s
	})) : o.id === void 0 ? c[0] : c.find((e) => e.id === o.id)) || rn({
		dialecteConfig: t,
		hooks: n,
		context: r,
		query: i,
		parentRef: a,
		params: o
	});
}
function dn(e) {
	if (!e) return;
	let t = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e.name, e.value])) : e;
	return Object.values(t).some((e) => e !== void 0 && e !== "") ? t : void 0;
}
async function fn(e) {
	let { dialecteConfig: t, hooks: n, context: r, query: i, ref: a, params: o } = e, { attributes: s, value: c } = o, l = await F({
		context: r,
		ref: a
	});
	w(l, {
		detail: `Record not found (tagName=${a.tagName}, id=${a.id})`,
		key: "ELEMENT_NOT_FOUND",
		ref: a
	});
	let u = l.attributes;
	if (s) {
		let e = O({
			dialecteConfig: t,
			tagName: l.tagName,
			attributes: s
		});
		A({
			dialecteConfig: t,
			tagName: l.tagName,
			attributes: e
		}), u = [...l.attributes.filter((t) => !e.some((e) => e.name === t.name)), ...e].filter((e) => e.value !== void 0 && e.value !== null);
	}
	let d = oe({
		dialecteConfig: t,
		hooks: n,
		record: {
			...l,
			attributes: u,
			value: c === void 0 ? l.value : c
		}
	});
	return pn(l, d) ? d : (tn({
		context: r,
		status: "updated",
		oldRecord: l,
		newRecord: d
	}), n?.afterUpdated && nn({
		context: r,
		operations: await n.afterUpdated({
			oldRecord: l,
			newRecord: d,
			query: i
		})
	}), d);
}
function pn(e, t) {
	return e.value !== t.value || e.attributes.length !== t.attributes.length ? !1 : e.attributes.every((e, n) => mn(e, t.attributes[n]));
}
function mn(e, t) {
	return e.name === t.name && e.value === t.value && e.namespace?.uri === t.namespace?.uri && e.namespace?.prefix === t.namespace?.prefix;
}
var hn = class extends $t {
	constructor(e, t, n, r) {
		super(e, t), this.hooks = n, this.query = r;
	}
	async addChild(e, t) {
		return rn({
			context: this.getContext(),
			parentRef: k(e),
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
		return un({
			context: this.getContext(),
			parentRef: k(e),
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
		return fn({
			context: this.getContext(),
			ref: k(e),
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
		return cn({
			context: this.getContext(),
			ref: k(e),
			hooks: this.hooks,
			query: this.query
		});
	}
	async deepClone(e, t) {
		return await on({
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			context: this.getContext(),
			query: this.query,
			parentRef: k(e),
			record: t,
			cumulativeCloneMappings: []
		});
	}
};
function gn(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = (n.status === "deleted" ? n.oldRecord : n.newRecord).id, r = t.get(e);
		if (!r) {
			t.set(e, n);
			continue;
		}
		r.status === "created" ? n.status === "updated" ? t.set(e, {
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
		}));
	}
	let n = Array.from(t.values());
	return {
		creates: n.filter((e) => e.status === "created"),
		updates: n.filter((e) => e.status === "updated"),
		deletes: n.filter((e) => e.status === "deleted")
	};
}
async function _n(e) {
	let { stagedOperations: t, store: n, documentId: r, documentState: i } = e, { creates: a, updates: o, deletes: s } = gn(t), c = a.length + o.length + s.length;
	i.loading = !0, i.progress = {
		message: "Committing changes...",
		current: 0,
		total: c
	};
	try {
		await n.commit({
			documentId: r,
			creates: a.map((e) => e.newRecord),
			updates: o.map((e) => e.newRecord),
			deletes: s.map((e) => e.oldRecord.id),
			onProgress: (e, t) => {
				i.progress = {
					message: "Committing changes...",
					current: e,
					total: t
				};
			}
		});
	} catch (e) {
		throw i.loading = !1, i.progress = null, e;
	}
	i.lastUpdate = Date.now();
}
var vn = class extends en {
	constructor(e, t, n, r, i) {
		super(e, t, n), this.stagedOperations = [], this.recordCache = /* @__PURE__ */ new Map(), this.cumulativeCloneMappings = [], this.documentActivity = r, this.hooks = i;
	}
	get any() {
		return this._anyTx ??= new hn(() => this.context, this.dialecteConfig, this.hooks, this);
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
			stagedOperations: this.stagedOperations
		};
	}
	async addChild(e, t) {
		return rn({
			context: this.context,
			parentRef: k(e),
			params: t,
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			query: this
		});
	}
	async ensureChild(e, t) {
		return un({
			context: this.context,
			parentRef: k(e),
			params: t,
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			query: this
		});
	}
	async update(e, t) {
		return fn({
			context: this.context,
			ref: k(e),
			params: t,
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			query: this
		});
	}
	async delete(e) {
		return cn({
			context: this.context,
			ref: k(e),
			hooks: this.hooks,
			query: this
		});
	}
	async deepClone(e, t) {
		return on({
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			context: this.context,
			parentRef: k(e),
			record: t,
			query: this,
			cumulativeCloneMappings: this.cumulativeCloneMappings
		});
	}
	getStagedOperations() {
		return this.stagedOperations;
	}
	clearStagedOperations() {
		this.stagedOperations = [];
	}
	clearRecordCache() {
		this.recordCache.clear();
	}
	clearCumulativeCloneMappings() {
		this.cumulativeCloneMappings = [];
	}
	async commit() {
		await _n({
			stagedOperations: this.stagedOperations,
			store: this.store,
			documentId: this.documentId,
			documentState: this.documentActivity
		});
	}
};
function yn(e) {
	return e.recordCache !== void 0;
}
var bn = class {
	constructor(e, t, n, r, i, a) {
		this.activeTransactions = 0, this.store = e, this.config = t, this.documentId = n, this.hooks = i, this.extensionsRegistry = r, this.state = a.state, this.channelName = a.channelName, this.notify = a.notify, this.refreshHistoryStatus = a.refreshHistoryStatus;
	}
	withQueryExtensions(e) {
		let t = De(this.extensionsRegistry?.query, e);
		return Object.assign(e, t);
	}
	withAllExtensions(e) {
		let t = De(this.extensionsRegistry?.query, e), n = De(this.extensionsRegistry?.transaction, e), r = {};
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
		return new en(this.store, this.config, this.documentId);
	}
	get query() {
		return this.withQueryExtensions(this.createQuery());
	}
	createTransaction() {
		return new vn(this.store, this.config, this.documentId, this.state, this.hooks);
	}
	async transaction(e, t) {
		this.activeTransactions > 0 && m("CONCURRENT_TRANSACTION", { detail: `${this.activeTransactions} transaction(s) already active. Concurrent transactions risk lost updates — serialize them or implement a transaction queue.` }), this.activeTransactions++, this.state.loading = !0, this.state.error = null;
		let n = this.withAllExtensions(this.createTransaction());
		try {
			let r = await e(n);
			return await n.commit(), await this.refreshHistoryStatus(), this.notify({
				type: "commit",
				documentId: this.documentId,
				timestamp: this.state.lastUpdate ?? Date.now()
			}), n.clearStagedOperations(), n.clearRecordCache(), n.clearCumulativeCloneMappings(), this.state.history.push({
				method: "commit",
				message: t?.label ?? "Changes committed",
				timestamp: Date.now()
			}), r;
		} catch (e) {
			throw this.state.progress = null, this.state.error ?? m("UNKNOWN", {
				detail: e instanceof Error ? e.message : String(e),
				cause: e instanceof Error ? e : void 0
			});
		} finally {
			this.activeTransactions--, this.state.loading = !1;
		}
	}
	async prepare(e, t) {
		this.activeTransactions++, this.state.loading = !0, this.state.error = null;
		let n = this.createTransaction();
		try {
			await e(this.withAllExtensions(n));
		} catch (e) {
			throw this.activeTransactions--, this.state.loading = !1, this.state.error ?? m("UNKNOWN", {
				detail: e instanceof Error ? e.message : String(e),
				cause: e instanceof Error ? e : void 0
			});
		}
		this.activeTransactions--, this.state.loading = !1;
		let r = n.getStagedOperations(), i = {
			creates: r.filter((e) => e.status === "created").length,
			updates: r.filter((e) => e.status === "updated").length,
			deletes: r.filter((e) => e.status === "deleted").length
		}, a = !1;
		return {
			operations: r,
			summary: i,
			query: n,
			commit: async () => {
				if (!a) {
					a = !0, this.activeTransactions++, this.state.loading = !0;
					try {
						await n.commit(), await this.refreshHistoryStatus(), this.notify({
							type: "commit",
							documentId: this.documentId,
							timestamp: this.state.lastUpdate ?? Date.now()
						}), n.clearStagedOperations(), n.clearRecordCache(), n.clearCumulativeCloneMappings(), this.state.history.push({
							method: "commit",
							message: t?.label ?? "Changes committed",
							timestamp: Date.now()
						});
					} catch (e) {
						throw this.state.error ?? m("UNKNOWN", {
							detail: e instanceof Error ? e.message : String(e),
							cause: e instanceof Error ? e : void 0
						});
					} finally {
						this.activeTransactions--, this.state.loading = !1;
					}
				}
			},
			discard: () => {
				a || (a = !0, n.clearStagedOperations(), n.clearRecordCache(), n.clearCumulativeCloneMappings());
			}
		};
	}
	close() {
		this.store.close();
	}
	async destroy() {
		await this.store.destroy();
	}
}, xn = "_documents", Y = "_changeLog", X = "_meta", Sn = "xel_";
function Z(e) {
	return `${Sn}${e}`;
}
var Q = "_blobs", Cn = "blob_";
function wn(e) {
	return `${Cn}${e}`;
}
var Tn = {
	primaryKey: "id",
	indexes: ["name", "configKey"],
	compoundIndexes: [],
	arrayIndexes: []
}, En = {
	primaryKey: "id",
	autoIncrement: !0,
	indexes: ["documentId"],
	compoundIndexes: [["documentId", "sequenceNumber"]],
	arrayIndexes: []
}, Dn = {
	primaryKey: "key",
	indexes: [],
	compoundIndexes: [],
	arrayIndexes: []
}, On = {
	primaryKey: "id",
	indexes: ["documentId"],
	compoundIndexes: [],
	arrayIndexes: []
}, kn = {
	primaryKey: "id",
	indexes: [],
	compoundIndexes: [],
	arrayIndexes: []
}, An = /* @__PURE__ */ Ee((/* @__PURE__ */ we(((e, t) => {
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
		})), E = null;
		function te(e) {
			return E = /* @__PURE__ */ new WeakMap(), e = function e(t) {
				if (!t || typeof t != "object") return t;
				var n = E.get(t);
				if (n) return n;
				if (a(t)) {
					n = [], E.set(t, n);
					for (var r = 0, i = t.length; r < i; ++r) n.push(e(t[r]));
				} else if (ee.has(t.constructor)) n = t;
				else {
					var o, c = s(t);
					for (o in n = c === Object.prototype ? {} : Object.create(c), E.set(t, n), t) l(t, o) && (n[o] = e(t[o]));
				}
				return n;
			}(e), E = null, e;
		}
		var ne = {}.toString;
		function re(e) {
			return ne.call(e).slice(8, -1);
		}
		var ie = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", D = typeof ie == "symbol" ? function(e) {
			var t;
			return e != null && (t = e[ie]) && t.apply(e);
		} : function() {
			return null;
		};
		function O(e, t) {
			return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
		}
		var ae = {};
		function k(e) {
			var t, n, r, i;
			if (arguments.length === 1) {
				if (a(e)) return e.slice();
				if (this === ae && typeof e == "string") return [e];
				if (i = D(e)) {
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
		var oe = typeof Symbol < "u" ? function(e) {
			return e[Symbol.toStringTag] === "AsyncFunction";
		} : function() {
			return !1;
		}, A = [
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
		], j = [
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
		].concat(A), se = {
			VersionChanged: "Database version changed by other database connection",
			DatabaseClosed: "Database has been closed",
			Abort: "Transaction aborted",
			TransactionInactive: "Transaction has already completed or failed",
			MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
		};
		function ce(e, t) {
			this.name = e, this.message = t;
		}
		function le(e, t) {
			return e + ". Errors: " + Object.keys(t).map(function(e) {
				return t[e].toString();
			}).filter(function(e, t, n) {
				return n.indexOf(e) === t;
			}).join("\n");
		}
		function ue(e, t, n, r) {
			this.failures = t, this.failedKeys = r, this.successCount = n, this.message = le(e, t);
		}
		function de(e, t) {
			this.name = "BulkError", this.failures = Object.keys(t).map(function(e) {
				return t[e];
			}), this.failuresByPos = t, this.message = le(e, this.failures);
		}
		p(ce).from(Error).extend({ toString: function() {
			return this.name + ": " + this.message;
		} }), p(ue).from(ce), p(de).from(ce);
		var fe = j.reduce(function(e, t) {
			return e[t] = t + "Error", e;
		}, {}), pe = ce, M = j.reduce(function(e, t) {
			var n = t + "Error";
			function r(e, r) {
				this.name = n, e ? typeof e == "string" ? (this.message = `${e}${r ? "\n " + r : ""}`, this.inner = r || null) : typeof e == "object" && (this.message = `${e.name} ${e.message}`, this.inner = e) : (this.message = se[t] || n, this.inner = null);
			}
			return p(r).from(pe), e[t] = r, e;
		}, {});
		M.Syntax = SyntaxError, M.Type = TypeError, M.Range = RangeError;
		var me = A.reduce(function(e, t) {
			return e[t + "Error"] = M[t], e;
		}, {}), he = j.reduce(function(e, t) {
			return [
				"Syntax",
				"Type",
				"Range"
			].indexOf(t) === -1 && (e[t + "Error"] = M[t]), e;
		}, {});
		function N() {}
		function ge(e) {
			return e;
		}
		function _e(e, t) {
			return e == null || e === ge ? t : function(n) {
				return t(e(n));
			};
		}
		function ve(e, t) {
			return function() {
				e.apply(this, arguments), t.apply(this, arguments);
			};
		}
		function ye(e, t) {
			return e === N ? t : function() {
				var n = e.apply(this, arguments);
				n !== void 0 && (arguments[0] = n);
				var r = this.onsuccess, i = this.onerror;
				this.onsuccess = null, this.onerror = null;
				var a = t.apply(this, arguments);
				return r && (this.onsuccess = this.onsuccess ? ve(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? ve(i, this.onerror) : i), a === void 0 ? n : a;
			};
		}
		function be(e, t) {
			return e === N ? t : function() {
				e.apply(this, arguments);
				var n = this.onsuccess, r = this.onerror;
				this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? ve(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? ve(r, this.onerror) : r);
			};
		}
		function xe(e, t) {
			return e === N ? t : function(n) {
				var r = e.apply(this, arguments);
				o(n, r);
				var i = this.onsuccess, a = this.onerror;
				return this.onsuccess = null, this.onerror = null, n = t.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? ve(i, this.onsuccess) : i), a && (this.onerror = this.onerror ? ve(a, this.onerror) : a), r === void 0 ? n === void 0 ? void 0 : n : o(r, n);
			};
		}
		function Se(e, t) {
			return e === N ? t : function() {
				return !1 !== t.apply(this, arguments) && e.apply(this, arguments);
			};
		}
		function Ce(e, t) {
			return e === N ? t : function() {
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
		he.ModifyError = ue, he.DexieError = ce, he.BulkError = de;
		var P = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
		function we(e) {
			P = e;
		}
		var Te = {}, Ee = 100, T = typeof Promise > "u" ? [] : function() {
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
		}(), A = T[0], j = T[1], T = T[2], j = j && j.then, De = A && A.constructor, Oe = !!T, ke = function(e, t) {
			Pe.push([e, t]), je &&= (queueMicrotask(Ue), !1);
		}, Ae = !0, je = !0, Me = [], F = [], Ne = ge, I = {
			id: "global",
			global: !0,
			ref: 0,
			unhandleds: [],
			onunhandled: N,
			pgp: !1,
			env: {},
			finalize: N
		}, L = I, Pe = [], Fe = 0, Ie = [];
		function R(e) {
			if (typeof this != "object") throw TypeError("Promises must be constructed via new");
			this._listeners = [], this._lib = !1;
			var t = this._PSD = L;
			if (typeof e != "function") {
				if (e !== Te) throw TypeError("Not a function");
				this._state = arguments[1], this._value = arguments[2], !1 === this._state && ze(this, this._value);
				return;
			}
			this._state = null, this._value = null, ++t.ref, function e(t, n) {
				try {
					n(function(n) {
						if (t._state === null) {
							if (n === t) throw TypeError("A promise cannot be resolved with itself.");
							var r = t._lib && We();
							n && typeof n.then == "function" ? e(t, function(e, t) {
								n instanceof R ? n._then(e, t) : n.then(e, t);
							}) : (t._state = !0, t._value = n, Be(t)), r && Ge();
						}
					}, ze.bind(null, t));
				} catch (e) {
					ze(t, e);
				}
			}(this, e);
		}
		var Le = {
			get: function() {
				var e = L, t = Ze;
				function n(n, r) {
					var i = this, a = !e.global && (e !== L || t !== Ze), o = a && !tt(), s = new R(function(t, s) {
						Ve(i, new Re(st(n, e, a, o), st(r, e, a, o), t, s, e));
					});
					return this._consoleTask && (s._consoleTask = this._consoleTask), s;
				}
				return n.prototype = Te, n;
			},
			set: function(e) {
				f(this, "then", e && e.prototype === Te ? Le : {
					get: function() {
						return e;
					},
					set: Le.set
				});
			}
		};
		function Re(e, t, n, r, i) {
			this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = i;
		}
		function ze(e, t) {
			var n, r;
			F.push(t), e._state === null && (n = e._lib && We(), t = Ne(t), e._state = !1, e._value = t, r = e, Me.some(function(e) {
				return e._value === r._value;
			}) || Me.push(r), Be(e), n && Ge());
		}
		function Be(e) {
			var t = e._listeners;
			e._listeners = [];
			for (var n = 0, r = t.length; n < r; ++n) Ve(e, t[n]);
			var i = e._PSD;
			--i.ref || i.finalize(), Fe === 0 && (++Fe, ke(function() {
				--Fe == 0 && Ke();
			}, []));
		}
		function Ve(e, t) {
			if (e._state !== null) {
				var n = e._state ? t.onFulfilled : t.onRejected;
				if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
				++t.psd.ref, ++Fe, ke(He, [
					n,
					e,
					t
				]);
			} else e._listeners.push(t);
		}
		function He(e, t, n) {
			try {
				var r, i = t._value;
				!t._state && F.length && (F = []), r = P && t._consoleTask ? t._consoleTask.run(function() {
					return e(i);
				}) : e(i), t._state || F.indexOf(i) !== -1 || function(e) {
					for (var t = Me.length; t;) if (Me[--t]._value === e._value) return Me.splice(t, 1);
				}(t), n.resolve(r);
			} catch (e) {
				n.reject(e);
			} finally {
				--Fe == 0 && Ke(), --n.psd.ref || n.psd.finalize();
			}
		}
		function Ue() {
			ot(I, function() {
				We() && Ge();
			});
		}
		function We() {
			var e = Ae;
			return je = Ae = !1, e;
		}
		function Ge() {
			var e, t, n;
			do
				for (; 0 < Pe.length;) for (e = Pe, Pe = [], n = e.length, t = 0; t < n; ++t) {
					var r = e[t];
					r[0].apply(null, r[1]);
				}
			while (0 < Pe.length);
			je = Ae = !0;
		}
		function Ke() {
			var e = Me;
			Me = [], e.forEach(function(e) {
				e._PSD.onunhandled.call(null, e._value, e);
			});
			for (var t = Ie.slice(0), n = t.length; n;) t[--n]();
		}
		function qe(e) {
			return new R(Te, !1, e);
		}
		function z(e, t) {
			var n = L;
			return function() {
				var r = We(), i = L;
				try {
					return it(n, !0), e.apply(this, arguments);
				} catch (e) {
					t && t(e);
				} finally {
					it(i, !1), r && Ge();
				}
			};
		}
		u(R.prototype, {
			then: Le,
			_then: function(e, t) {
				Ve(this, new Re(null, null, e, t, L));
			},
			catch: function(e) {
				if (arguments.length === 1) return this.then(null, e);
				var t = e, n = arguments[1];
				return typeof t == "function" ? this.then(null, function(e) {
					return (e instanceof t ? n : qe)(e);
				}) : this.then(null, function(e) {
					return (e && e.name === t ? n : qe)(e);
				});
			},
			finally: function(e) {
				return this.then(function(t) {
					return R.resolve(e()).then(function() {
						return t;
					});
				}, function(t) {
					return R.resolve(e()).then(function() {
						return qe(t);
					});
				});
			},
			timeout: function(e, t) {
				var n = this;
				return e < Infinity ? new R(function(r, i) {
					var a = setTimeout(function() {
						return i(new M.Timeout(t));
					}, e);
					n.then(r, i).finally(clearTimeout.bind(null, a));
				}) : this;
			}
		}), typeof Symbol < "u" && Symbol.toStringTag && f(R.prototype, Symbol.toStringTag, "Dexie.Promise"), I.env = at(), u(R, {
			all: function() {
				var e = k.apply(null, arguments).map(nt);
				return new R(function(t, n) {
					e.length === 0 && t([]);
					var r = e.length;
					e.forEach(function(i, a) {
						return R.resolve(i).then(function(n) {
							e[a] = n, --r || t(e);
						}, n);
					});
				});
			},
			resolve: function(e) {
				return e instanceof R ? e : e && typeof e.then == "function" ? new R(function(t, n) {
					e.then(t, n);
				}) : new R(Te, !0, e);
			},
			reject: qe,
			race: function() {
				var e = k.apply(null, arguments).map(nt);
				return new R(function(t, n) {
					e.map(function(e) {
						return R.resolve(e).then(t, n);
					});
				});
			},
			PSD: {
				get: function() {
					return L;
				},
				set: function(e) {
					return L = e;
				}
			},
			totalEchoes: { get: function() {
				return Ze;
			} },
			newPSD: $e,
			usePSD: ot,
			scheduler: {
				get: function() {
					return ke;
				},
				set: function(e) {
					ke = e;
				}
			},
			rejectionMapper: {
				get: function() {
					return Ne;
				},
				set: function(e) {
					Ne = e;
				}
			},
			follow: function(e, t) {
				return new R(function(n, r) {
					return $e(function(t, n) {
						var r = L;
						r.unhandleds = [], r.onunhandled = n, r.finalize = ve(function() {
							var e, r = this;
							e = function() {
								r.unhandleds.length === 0 ? t() : n(r.unhandleds[0]);
							}, Ie.push(function t() {
								e(), Ie.splice(Ie.indexOf(t), 1);
							}), ++Fe, ke(function() {
								--Fe == 0 && Ke();
							}, []);
						}, r.finalize), e();
					}, t, n, r);
				});
			}
		}), De && (De.allSettled && f(R, "allSettled", function() {
			var e = k.apply(null, arguments).map(nt);
			return new R(function(t) {
				e.length === 0 && t([]);
				var n = e.length, r = Array(n);
				e.forEach(function(e, i) {
					return R.resolve(e).then(function(e) {
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
		}), De.any && typeof AggregateError < "u" && f(R, "any", function() {
			var e = k.apply(null, arguments).map(nt);
			return new R(function(t, n) {
				e.length === 0 && n(/* @__PURE__ */ AggregateError([]));
				var r = e.length, i = Array(r);
				e.forEach(function(e, a) {
					return R.resolve(e).then(function(e) {
						return t(e);
					}, function(e) {
						i[a] = e, --r || n(AggregateError(i));
					});
				});
			});
		}), De.withResolvers && (R.withResolvers = De.withResolvers));
		var B = {
			awaits: 0,
			echoes: 0,
			id: 0
		}, Je = 0, Ye = [], Xe = 0, Ze = 0, Qe = 0;
		function $e(e, t, n, r) {
			var i = L, a = Object.create(i);
			return a.parent = i, a.ref = 0, a.global = !1, a.id = ++Qe, I.env, a.env = Oe ? {
				Promise: R,
				PromiseProp: {
					value: R,
					configurable: !0,
					writable: !0
				},
				all: R.all,
				race: R.race,
				allSettled: R.allSettled,
				any: R.any,
				resolve: R.resolve,
				reject: R.reject
			} : {}, t && o(a, t), ++i.ref, a.finalize = function() {
				--this.parent.ref || this.parent.finalize();
			}, r = ot(a, e, n, r), a.ref === 0 && a.finalize(), r;
		}
		function et() {
			return B.id ||= ++Je, ++B.awaits, B.echoes += Ee, B.id;
		}
		function tt() {
			return !!B.awaits && (--B.awaits == 0 && (B.id = 0), B.echoes = B.awaits * Ee, !0);
		}
		function nt(e) {
			return B.echoes && e && e.constructor === De ? (et(), e.then(function(e) {
				return tt(), e;
			}, function(e) {
				return tt(), V(e);
			})) : e;
		}
		function rt() {
			var e = Ye[Ye.length - 1];
			Ye.pop(), it(e, !1);
		}
		function it(e, t) {
			var n, i = L;
			(t ? !B.echoes || Xe++ && e === L : !Xe || --Xe && e === L) || queueMicrotask(t ? function(e) {
				++Ze, B.echoes && --B.echoes != 0 || (B.echoes = B.awaits = B.id = 0), Ye.push(L), it(e, !0);
			}.bind(null, e) : rt), e !== L && (L = e, i === I && (I.env = at()), Oe && (n = I.env.Promise, t = e.env, (i.global || e.global) && (Object.defineProperty(r, "Promise", t.PromiseProp), n.all = t.all, n.race = t.race, n.resolve = t.resolve, n.reject = t.reject, t.allSettled && (n.allSettled = t.allSettled), t.any && (n.any = t.any))));
		}
		function at() {
			var e = r.Promise;
			return Oe ? {
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
		function ot(e, t, n, r, i) {
			var a = L;
			try {
				return it(e, !0), t(n, r, i);
			} finally {
				it(a, !1);
			}
		}
		function st(e, t, n, r) {
			return typeof e == "function" ? function() {
				var i = L;
				n && et(), it(t, !0);
				try {
					return e.apply(this, arguments);
				} finally {
					it(i, !1), r && queueMicrotask(tt);
				}
			} : e;
		}
		function ct(e) {
			Promise === De && B.echoes === 0 ? Xe === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
		}
		("" + j).indexOf("[native code]") === -1 && (et = tt = N);
		var V = R.reject, lt = "￿", ut = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", dt = "String expected.", ft = [], pt = "__dbnames", mt = "readonly", ht = "readwrite";
		function gt(e, t) {
			return e ? t ? function() {
				return e.apply(this, arguments) && t.apply(this, arguments);
			} : e : t;
		}
		var _t = {
			type: 3,
			lower: -Infinity,
			lowerOpen: !1,
			upper: [[]],
			upperOpen: !1
		};
		function vt(e) {
			return typeof e != "string" || /\./.test(e) ? function(e) {
				return e;
			} : function(t) {
				return t[e] === void 0 && e in t && delete (t = te(t))[e], t;
			};
		}
		function yt() {
			throw M.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
		}
		function H(e, t) {
			try {
				var n = bt(e), r = bt(t);
				if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r === "Date" ? -1 : NaN;
				switch (n) {
					case "number":
					case "Date":
					case "string": return t < e ? 1 : e < t ? -1 : 0;
					case "binary": return function(e, t) {
						for (var n = e.length, r = t.length, i = n < r ? n : r, a = 0; a < i; ++a) if (e[a] !== t[a]) return e[a] < t[a] ? -1 : 1;
						return n === r ? 0 : n < r ? -1 : 1;
					}(xt(e), xt(t));
					case "Array": return function(e, t) {
						for (var n = e.length, r = t.length, i = n < r ? n : r, a = 0; a < i; ++a) {
							var o = H(e[a], t[a]);
							if (o !== 0) return o;
						}
						return n === r ? 0 : n < r ? -1 : 1;
					}(e, t);
				}
			} catch {}
			return NaN;
		}
		function bt(e) {
			var t = typeof e;
			return t == "object" ? ArrayBuffer.isView(e) ? "binary" : (e = re(e), e === "ArrayBuffer" ? "binary" : e) : t;
		}
		function xt(e) {
			return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
		}
		function St(e, t, n) {
			var r = e.schema.yProps;
			return r ? (t && 0 < n.numFailures && (t = t.filter(function(e, t) {
				return !n.failures[t];
			})), Promise.all(r.map(function(n) {
				return n = n.updatesTable, t ? e.db.table(n).where("k").anyOf(t).delete() : e.db.table(n).clear();
			})).then(function() {
				return n;
			})) : n;
		}
		var Ct = (U.prototype._trans = function(e, t, n) {
			var r = this._tx || L.trans, i = this.name, a = P && typeof console < "u" && console.createTask && console.createTask(`Dexie: ${e === "readonly" ? "read" : "write"} ${this.name}`);
			function o(e, n, r) {
				if (!r.schema[i]) throw new M.NotFound("Table " + i + " not part of transaction");
				return t(r.idbtrans, r);
			}
			var s = We();
			try {
				var c = r && r.db._novip === this.db._novip ? r === L.trans ? r._promise(e, o, n) : $e(function() {
					return r._promise(e, o, n);
				}, {
					trans: r,
					transless: L.transless || L
				}) : function e(t, n, r, i) {
					if (t.idbdb && (t._state.openComplete || L.letThrough || t._vip)) {
						var a = t._createTransaction(n, r, t._dbSchema);
						try {
							a.create(), t._state.PR1398_maxLoop = 3;
						} catch (a) {
							return a.name === fe.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
								return e(t, n, r, i);
							})) : V(a);
						}
						return a._promise(n, function(e, t) {
							return $e(function() {
								return L.trans = a, i(e, t, a);
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
					if (t._state.openComplete) return V(new M.DatabaseClosed(t._state.dbOpenError));
					if (!t._state.isBeingOpened) {
						if (!t._state.autoOpen) return V(new M.DatabaseClosed());
						t.open().catch(N);
					}
					return t._state.dbReadyPromise.then(function() {
						return e(t, n, r, i);
					});
				}(this.db, e, [this.name], o);
				return a && (c._consoleTask = a, c = c.catch(function(e) {
					return console.trace(e), V(e);
				})), c;
			} finally {
				s && Ge();
			}
		}, U.prototype.get = function(e, t) {
			var n = this;
			return e && e.constructor === Object ? this.where(e).first(t) : e == null ? V(new M.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(t) {
				return n.core.get({
					trans: t,
					key: e
				}).then(function(e) {
					return n.hook.reading.fire(e);
				});
			}).then(t);
		}, U.prototype.where = function(e) {
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
			if (n && this.db._maxKey !== lt) {
				var r = n.keyPath.slice(0, t.length);
				return this.where(r).equals(r.map(function(t) {
					return e[t];
				}));
			}
			!n && P && console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit from a compound index [${t.join("+")}]`);
			var o = this.schema.idxByName;
			function s(e, t) {
				return H(e, t) === 0;
			}
			var c = t.reduce(function(t, n) {
				var r = t[0], i = t[1], t = o[n], c = e[n];
				return [r || t, r || !t ? gt(i, t && t.multi ? function(e) {
					return e = b(e, n), a(e) && e.some(function(e) {
						return s(c, e);
					});
				} : function(e) {
					return s(c, b(e, n));
				}) : i];
			}, [null, null]), r = c[0], c = c[1];
			return r ? this.where(r.name).equals(e[r.keyPath]).filter(c) : n ? this.filter(c) : this.where(t).equals("");
		}, U.prototype.filter = function(e) {
			return this.toCollection().and(e);
		}, U.prototype.count = function(e) {
			return this.toCollection().count(e);
		}, U.prototype.offset = function(e) {
			return this.toCollection().offset(e);
		}, U.prototype.limit = function(e) {
			return this.toCollection().limit(e);
		}, U.prototype.each = function(e) {
			return this.toCollection().each(e);
		}, U.prototype.toArray = function(e) {
			return this.toCollection().toArray(e);
		}, U.prototype.toCollection = function() {
			return new this.db.Collection(new this.db.WhereClause(this));
		}, U.prototype.orderBy = function(e) {
			return new this.db.Collection(new this.db.WhereClause(this, a(e) ? `[${e.join("+")}]` : e));
		}, U.prototype.reverse = function() {
			return this.toCollection().reverse();
		}, U.prototype.mapToClass = function(t) {
			var n, r = this.db, i = this.name;
			function a() {
				return n !== null && n.apply(this, arguments) || this;
			}
			(this.schema.mappedClass = t).prototype instanceof yt && (function(t, n) {
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
		}, U.prototype.defineClass = function() {
			return this.mapToClass(function(e) {
				o(this, e);
			});
		}, U.prototype.add = function(e, t) {
			var n = this, r = this.schema.primKey, i = r.auto, a = r.keyPath, o = e;
			return a && i && (o = vt(a)(e)), this._trans("readwrite", function(e) {
				return n.core.mutate({
					trans: e,
					type: "add",
					keys: t == null ? null : [t],
					values: [o]
				});
			}).then(function(e) {
				return e.numFailures ? R.reject(e.failures[0]) : e.lastResult;
			}).then(function(t) {
				if (a) try {
					x(e, a, t);
				} catch {}
				return t;
			});
		}, U.prototype.update = function(e, t) {
			return typeof e != "object" || a(e) ? this.where(":id").equals(e).modify(t) : (e = b(e, this.schema.primKey.keyPath), e === void 0 ? V(new M.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
		}, U.prototype.put = function(e, t) {
			var n = this, r = this.schema.primKey, i = r.auto, a = r.keyPath, o = e;
			return a && i && (o = vt(a)(e)), this._trans("readwrite", function(e) {
				return n.core.mutate({
					trans: e,
					type: "put",
					values: [o],
					keys: t == null ? null : [t]
				});
			}).then(function(e) {
				return e.numFailures ? R.reject(e.failures[0]) : e.lastResult;
			}).then(function(t) {
				if (a) try {
					x(e, a, t);
				} catch {}
				return t;
			});
		}, U.prototype.delete = function(e) {
			var t = this;
			return this._trans("readwrite", function(n) {
				return t.core.mutate({
					trans: n,
					type: "delete",
					keys: [e]
				}).then(function(n) {
					return St(t, [e], n);
				}).then(function(e) {
					return e.numFailures ? R.reject(e.failures[0]) : void 0;
				});
			});
		}, U.prototype.clear = function() {
			var e = this;
			return this._trans("readwrite", function(t) {
				return e.core.mutate({
					trans: t,
					type: "deleteRange",
					range: _t
				}).then(function(t) {
					return St(e, null, t);
				});
			}).then(function(e) {
				return e.numFailures ? R.reject(e.failures[0]) : void 0;
			});
		}, U.prototype.bulkGet = function(e) {
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
		}, U.prototype.bulkAdd = function(e, t, n) {
			var r = this, i = Array.isArray(t) ? t : void 0, a = (n ||= i ? void 0 : t) ? n.allKeys : void 0;
			return this._trans("readwrite", function(t) {
				var n = r.schema.primKey, o = n.auto, n = n.keyPath;
				if (n && i) throw new M.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
				if (i && i.length !== e.length) throw new M.InvalidArgument("Arguments objects and keys must have the same length");
				var s = e.length, n = n && o ? e.map(vt(n)) : e;
				return r.core.mutate({
					trans: t,
					type: "add",
					keys: i,
					values: n,
					wantResults: a
				}).then(function(e) {
					var t = e.numFailures, n = e.results, i = e.lastResult, e = e.failures;
					if (t === 0) return a ? n : i;
					throw new de(`${r.name}.bulkAdd(): ${t} of ${s} operations failed`, e);
				});
			});
		}, U.prototype.bulkPut = function(e, t, n) {
			var r = this, i = Array.isArray(t) ? t : void 0, a = (n ||= i ? void 0 : t) ? n.allKeys : void 0;
			return this._trans("readwrite", function(t) {
				var n = r.schema.primKey, o = n.auto, n = n.keyPath;
				if (n && i) throw new M.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
				if (i && i.length !== e.length) throw new M.InvalidArgument("Arguments objects and keys must have the same length");
				var s = e.length, n = n && o ? e.map(vt(n)) : e;
				return r.core.mutate({
					trans: t,
					type: "put",
					keys: i,
					values: n,
					wantResults: a
				}).then(function(e) {
					var t = e.numFailures, n = e.results, i = e.lastResult, e = e.failures;
					if (t === 0) return a ? n : i;
					throw new de(`${r.name}.bulkPut(): ${t} of ${s} operations failed`, e);
				});
			});
		}, U.prototype.bulkUpdate = function(e) {
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
									if (H(p, r) !== 0) throw new M.Constraint("Cannot update primary key in bulkUpdate()");
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
						throw new de(`${t.name}.bulkUpdate(): ${n} of ${u} operations failed`, r);
					});
				});
			});
		}, U.prototype.bulkDelete = function(e) {
			var t = this, n = e.length;
			return this._trans("readwrite", function(n) {
				return t.core.mutate({
					trans: n,
					type: "delete",
					keys: e
				}).then(function(n) {
					return St(t, e, n);
				});
			}).then(function(e) {
				var r = e.numFailures, i = e.lastResult, e = e.failures;
				if (r === 0) return i;
				throw new de(`${t.name}.bulkDelete(): ${r} of ${n} operations failed`, e);
			});
		}, U);
		function U() {}
		function wt(e) {
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
					r ||= Se;
					var l = {
						subscribers: [],
						fire: o ||= N,
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
						if (t !== "asap") throw new M.InvalidArgument("Invalid event config");
						var n = s(e, ge, function() {
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
		function Tt(e, t) {
			return p(t).from({ prototype: e }), t;
		}
		function Et(e, t) {
			return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
		}
		function Dt(e, t) {
			e.filter = gt(e.filter, t);
		}
		function Ot(e, t, n) {
			var r = e.replayFilter;
			e.replayFilter = r ? function() {
				return gt(r(), t());
			} : t, e.justLimit = n && !r;
		}
		function kt(e, t) {
			if (e.isPrimKey) return t.primaryKey;
			var n = t.getIndexByKeyPath(e.index);
			if (!n) throw new M.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
			return n;
		}
		function At(e, t, n) {
			var r = kt(e, t.schema);
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
		function jt(e, t, n, r) {
			var i = e.replayFilter ? gt(e.filter, e.replayFilter()) : e.filter;
			if (e.or) {
				var a = {}, o = function(e, n, r) {
					var o, s;
					i && !i(n, r, function(e) {
						return n.stop(e);
					}, function(e) {
						return n.fail(e);
					}) || ((s = "" + (o = n.primaryKey)) == "[object ArrayBuffer]" && (s = "" + new Uint8Array(o)), l(a, s) || (a[s] = !0, t(e, n, r)));
				};
				return Promise.all([e.or._iterate(o, n), Mt(At(e, r, n), e.algorithm, o, !e.keysOnly && e.valueMapper)]);
			}
			return Mt(At(e, r, n), gt(e.algorithm, i), t, !e.keysOnly && e.valueMapper);
		}
		function Mt(e, t, n, r) {
			var i = z(r ? function(e, t, i) {
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
						e.stop(t), n = N;
					}, function(t) {
						e.fail(t), n = N;
					}) || i(e.value, e, function(e) {
						return n = e;
					}), n();
				});
			});
		}
		var Nt = (Pt.prototype.execute = function(e) {
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
		}, Pt);
		function Pt(e) {
			this["@@propmod"] = e;
		}
		var Ft = (W.prototype._read = function(e, t) {
			var n = this._ctx;
			return n.error ? n.table._trans(null, V.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
		}, W.prototype._write = function(e) {
			var t = this._ctx;
			return t.error ? t.table._trans(null, V.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
		}, W.prototype._addAlgorithm = function(e) {
			var t = this._ctx;
			t.algorithm = gt(t.algorithm, e);
		}, W.prototype._iterate = function(e, t) {
			return jt(this._ctx, e, t, this._ctx.table.core);
		}, W.prototype.clone = function(e) {
			var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
			return e && o(n, e), t._ctx = n, t;
		}, W.prototype.raw = function() {
			return this._ctx.valueMapper = null, this;
		}, W.prototype.each = function(e) {
			var t = this._ctx;
			return this._read(function(n) {
				return jt(t, e, n, t.table.core);
			});
		}, W.prototype.count = function(e) {
			var t = this;
			return this._read(function(e) {
				var n = t._ctx, r = n.table.core;
				if (Et(n, !0)) return r.count({
					trans: e,
					query: {
						index: kt(n, r.schema),
						range: n.range
					}
				}).then(function(e) {
					return Math.min(e, n.limit);
				});
				var i = 0;
				return jt(n, function() {
					return ++i, !1;
				}, e, r).then(function() {
					return i;
				});
			}).then(e);
		}, W.prototype.sortBy = function(e, t) {
			var n = e.split(".").reverse(), r = n[0], i = n.length - 1;
			function a(e, t) {
				return t ? a(e[n[t]], t - 1) : e[r];
			}
			var o = this._ctx.dir === "next" ? 1 : -1;
			function s(e, t) {
				return H(a(e, i), a(t, i)) * o;
			}
			return this.toArray(function(e) {
				return e.sort(s);
			}).then(t);
		}, W.prototype.toArray = function(e) {
			var t = this;
			return this._read(function(e) {
				var n = t._ctx;
				if (n.dir === "next" && Et(n, !0) && 0 < n.limit) {
					var r = n.valueMapper, i = kt(n, n.table.core.schema);
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
				return jt(n, function(e) {
					return a.push(e);
				}, e, n.table.core).then(function() {
					return a;
				});
			}, e);
		}, W.prototype.offset = function(e) {
			var t = this._ctx;
			return e <= 0 || (t.offset += e, Et(t) ? Ot(t, function() {
				var t = e;
				return function(e, n) {
					return t === 0 || (t === 1 ? --t : n(function() {
						e.advance(t), t = 0;
					}), !1);
				};
			}) : Ot(t, function() {
				var t = e;
				return function() {
					return --t < 0;
				};
			})), this;
		}, W.prototype.limit = function(e) {
			return this._ctx.limit = Math.min(this._ctx.limit, e), Ot(this._ctx, function() {
				var t = e;
				return function(e, n, r) {
					return --t <= 0 && n(r), 0 <= t;
				};
			}, !0), this;
		}, W.prototype.until = function(e, t) {
			return Dt(this._ctx, function(n, r, i) {
				return !e(n.value) || (r(i), t);
			}), this;
		}, W.prototype.first = function(e) {
			return this.limit(1).toArray(function(e) {
				return e[0];
			}).then(e);
		}, W.prototype.last = function(e) {
			return this.reverse().first(e);
		}, W.prototype.filter = function(e) {
			var t;
			return Dt(this._ctx, function(t) {
				return e(t.value);
			}), (t = this._ctx).isMatch = gt(t.isMatch, e), this;
		}, W.prototype.and = function(e) {
			return this.filter(e);
		}, W.prototype.or = function(e) {
			return new this.db.WhereClause(this._ctx.table, e, this);
		}, W.prototype.reverse = function() {
			return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
		}, W.prototype.desc = function() {
			return this.reverse();
		}, W.prototype.eachKey = function(e) {
			var t = this._ctx;
			return t.keysOnly = !t.isMatch, this.each(function(t, n) {
				e(n.key, n);
			});
		}, W.prototype.eachUniqueKey = function(e) {
			return this._ctx.unique = "unique", this.eachKey(e);
		}, W.prototype.eachPrimaryKey = function(e) {
			var t = this._ctx;
			return t.keysOnly = !t.isMatch, this.each(function(t, n) {
				e(n.primaryKey, n);
			});
		}, W.prototype.keys = function(e) {
			var t = this._ctx;
			t.keysOnly = !t.isMatch;
			var n = [];
			return this.each(function(e, t) {
				n.push(t.key);
			}).then(function() {
				return n;
			}).then(e);
		}, W.prototype.primaryKeys = function(e) {
			var t = this._ctx;
			if (t.dir === "next" && Et(t, !0) && 0 < t.limit) return this._read(function(e) {
				var n = kt(t, t.table.core.schema);
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
		}, W.prototype.uniqueKeys = function(e) {
			return this._ctx.unique = "unique", this.keys(e);
		}, W.prototype.firstKey = function(e) {
			return this.limit(1).keys(function(e) {
				return e[0];
			}).then(e);
		}, W.prototype.lastKey = function(e) {
			return this.reverse().firstKey(e);
		}, W.prototype.distinct = function() {
			var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
			if (!e || !e.multi) return this;
			var t = {};
			return Dt(this._ctx, function(e) {
				var n = e.primaryKey.toString(), e = l(t, n);
				return t[n] = !0, !e;
			}), this;
		}, W.prototype.modify = function(e) {
			var t = this, n = this._ctx;
			return this._write(function(r) {
				var a, o, s = typeof e == "function" ? e : (a = i(e), o = a.length, function(t) {
					for (var n = !1, r = 0; r < o; ++r) {
						var i = a[r], s = e[i], c = b(t, i);
						s instanceof Nt ? (x(t, i, s.execute(c)), n = !0) : c !== s && (x(t, i, s), n = !0);
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
				var m = [], h = 0, g = [], _ = e === It;
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
								var S = h[x], C = {
									value: te(S),
									primKey: t[o + x]
								};
								!1 !== s.call(C, C.value, C) && (C.value == null ? b.push(t[o + x]) : u || H(d(S), d(C.value)) === 0 ? (v.push(C.value), u && y.push(t[o + x])) : (b.push(t[o + x]), g.push(C.value)));
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
									return St(n.table, b, e);
								}).then(function(e) {
									return p(b.length, e);
								});
							}).then(function() {
								return t.length > o + l && i(o + f);
							});
						});
					}
					var a = Et(n) && n.limit === Infinity && (typeof e != "function" || _) && {
						index: n.index,
						range: n.range
					};
					return i(0).then(function() {
						if (0 < m.length) throw new ue("Error modifying one or more objects", m, h, g);
						return t.length;
					});
				});
			});
		}, W.prototype.delete = function() {
			var e = this._ctx, t = e.range;
			return !Et(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(It) : this._write(function(n) {
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
						if (e) throw new ue("Could not delete some values", Object.keys(n).map(function(e) {
							return n[e];
						}), t - e);
						return t - e;
					});
				});
			});
		}, W);
		function W() {}
		var It = function(e, t) {
			return t.value = null;
		};
		function Lt(e, t) {
			return e < t ? -1 : e === t ? 0 : 1;
		}
		function Rt(e, t) {
			return t < e ? -1 : e === t ? 0 : 1;
		}
		function G(e, t, n) {
			return e = e instanceof Ut ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
		}
		function zt(e) {
			return new e.Collection(e, function() {
				return Ht("");
			}).limit(0);
		}
		function Bt(e, t, n, r) {
			var i, a, o, s, c, l, u, d = n.length;
			if (!n.every(function(e) {
				return typeof e == "string";
			})) return G(e, dt);
			function f(e) {
				i = e === "next" ? function(e) {
					return e.toUpperCase();
				} : function(e) {
					return e.toLowerCase();
				}, a = e === "next" ? function(e) {
					return e.toLowerCase();
				} : function(e) {
					return e.toUpperCase();
				}, o = e === "next" ? Lt : Rt;
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
				return Vt(s[0], c[d - 1] + r);
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
		function Vt(e, t, n, r) {
			return {
				type: 2,
				lower: e,
				upper: t,
				lowerOpen: n,
				upperOpen: r
			};
		}
		function Ht(e) {
			return {
				type: 1,
				lower: e,
				upper: e
			};
		}
		var Ut = (Object.defineProperty(K.prototype, "Collection", {
			get: function() {
				return this._ctx.table.db.Collection;
			},
			enumerable: !1,
			configurable: !0
		}), K.prototype.between = function(e, t, n, r) {
			n = !1 !== n, r = !0 === r;
			try {
				return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? zt(this) : new this.Collection(this, function() {
					return Vt(e, t, !n, !r);
				});
			} catch {
				return G(this, ut);
			}
		}, K.prototype.equals = function(e) {
			return e == null ? G(this, ut) : new this.Collection(this, function() {
				return Ht(e);
			});
		}, K.prototype.above = function(e) {
			return e == null ? G(this, ut) : new this.Collection(this, function() {
				return Vt(e, void 0, !0);
			});
		}, K.prototype.aboveOrEqual = function(e) {
			return e == null ? G(this, ut) : new this.Collection(this, function() {
				return Vt(e, void 0, !1);
			});
		}, K.prototype.below = function(e) {
			return e == null ? G(this, ut) : new this.Collection(this, function() {
				return Vt(void 0, e, !1, !0);
			});
		}, K.prototype.belowOrEqual = function(e) {
			return e == null ? G(this, ut) : new this.Collection(this, function() {
				return Vt(void 0, e);
			});
		}, K.prototype.startsWith = function(e) {
			return typeof e == "string" ? this.between(e, e + lt, !0, !0) : G(this, dt);
		}, K.prototype.startsWithIgnoreCase = function(e) {
			return e === "" ? this.startsWith(e) : Bt(this, function(e, t) {
				return e.indexOf(t[0]) === 0;
			}, [e], lt);
		}, K.prototype.equalsIgnoreCase = function(e) {
			return Bt(this, function(e, t) {
				return e === t[0];
			}, [e], "");
		}, K.prototype.anyOfIgnoreCase = function() {
			var e = k.apply(ae, arguments);
			return e.length === 0 ? zt(this) : Bt(this, function(e, t) {
				return t.indexOf(e) !== -1;
			}, e, "");
		}, K.prototype.startsWithAnyOfIgnoreCase = function() {
			var e = k.apply(ae, arguments);
			return e.length === 0 ? zt(this) : Bt(this, function(e, t) {
				return t.some(function(t) {
					return e.indexOf(t) === 0;
				});
			}, e, lt);
		}, K.prototype.anyOf = function() {
			var e = this, t = k.apply(ae, arguments), n = this._cmp;
			try {
				t.sort(n);
			} catch {
				return G(this, ut);
			}
			if (t.length === 0) return zt(this);
			var r = new this.Collection(this, function() {
				return Vt(t[0], t[t.length - 1]);
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
		}, K.prototype.notEqual = function(e) {
			return this.inAnyRange([[-Infinity, e], [e, this.db._maxKey]], {
				includeLowers: !1,
				includeUppers: !1
			});
		}, K.prototype.noneOf = function() {
			var e = k.apply(ae, arguments);
			if (e.length === 0) return new this.Collection(this);
			try {
				e.sort(this._ascending);
			} catch {
				return G(this, ut);
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
			if (e.length === 0) return zt(this);
			if (!e.every(function(e) {
				return e[0] !== void 0 && e[1] !== void 0 && i(e[0], e[1]) <= 0;
			})) return G(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", M.InvalidArgument);
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
				return G(this, ut);
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
				return Vt(u[0][0], u[u.length - 1][1], !c, !l);
			});
			return e._ondirectionchange = function(e) {
				d = e === "next" ? (g = m, i) : (g = h, a), u.sort(f);
			}, e._addAlgorithm(function(e, t, r) {
				for (var a, o = e.key; g(o);) if (++p === u.length) return t(r), !1;
				return !m(a = o) && !h(a) || (n._cmp(o, u[p][1]) === 0 || n._cmp(o, u[p][0]) === 0 || t(function() {
					d === i ? e.continue(u[p][0]) : e.continue(u[p][1]);
				}), !1);
			}), e;
		}, K.prototype.startsWithAnyOf = function() {
			var e = k.apply(ae, arguments);
			return e.every(function(e) {
				return typeof e == "string";
			}) ? e.length === 0 ? zt(this) : this.inAnyRange(e.map(function(e) {
				return [e, e + lt];
			})) : G(this, "startsWithAnyOf() only works with strings");
		}, K);
		function K() {}
		function q(e) {
			return z(function(t) {
				return Wt(t), e(t.target.error), !1;
			});
		}
		function Wt(e) {
			e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
		}
		var Gt = "storagemutated", Kt = "x-storagemutated-1", qt = wt(null, Gt), Jt = (J.prototype._lock = function() {
			return v(!L.global), ++this._reculock, this._reculock !== 1 || L.global || (L.lockOwnerFor = this), this;
		}, J.prototype._unlock = function() {
			if (v(!L.global), --this._reculock == 0) for (L.global || (L.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked();) {
				var e = this._blockedFuncs.shift();
				try {
					ot(e[1], e[0]);
				} catch {}
			}
			return this;
		}, J.prototype._locked = function() {
			return this._reculock && L.lockOwnerFor !== this;
		}, J.prototype.create = function(e) {
			var t = this;
			if (!this.mode) return this;
			var n = this.db.idbdb, r = this.db._state.dbOpenError;
			if (v(!this.idbtrans), !e && !n) switch (r && r.name) {
				case "DatabaseClosedError": throw new M.DatabaseClosed(r);
				case "MissingAPIError": throw new M.MissingAPI(r.message, r);
				default: throw new M.OpenFailed(r);
			}
			if (!this.active) throw new M.TransactionInactive();
			return v(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = z(function(n) {
				Wt(n), t._reject(e.error);
			}), e.onabort = z(function(n) {
				Wt(n), t.active && t._reject(new M.Abort(e.error)), t.active = !1, t.on("abort").fire(n);
			}), e.oncomplete = z(function() {
				t.active = !1, t._resolve(), "mutatedParts" in e && qt.storagemutated.fire(e.mutatedParts);
			}), this;
		}, J.prototype._promise = function(e, t, n) {
			var r = this;
			if (e === "readwrite" && this.mode !== "readwrite") return V(new M.ReadOnly("Transaction is readonly"));
			if (!this.active) return V(new M.TransactionInactive());
			if (this._locked()) return new R(function(i, a) {
				r._blockedFuncs.push([function() {
					r._promise(e, t, n).then(i, a);
				}, L]);
			});
			if (n) return $e(function() {
				var e = new R(function(e, n) {
					r._lock();
					var i = t(e, n, r);
					i && i.then && i.then(e, n);
				});
				return e.finally(function() {
					return r._unlock();
				}), e._lib = !0, e;
			});
			var i = new R(function(e, n) {
				var i = t(e, n, r);
				i && i.then && i.then(e, n);
			});
			return i._lib = !0, i;
		}, J.prototype._root = function() {
			return this.parent ? this.parent._root() : this;
		}, J.prototype.waitFor = function(e) {
			var t, n = this._root(), r = R.resolve(e);
			n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
				return r;
			}) : (n._waitingFor = r, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), function e() {
				for (++n._spinCount; n._waitingQueue.length;) n._waitingQueue.shift()();
				n._waitingFor && (t.get(-Infinity).onsuccess = e);
			}());
			var i = n._waitingFor;
			return new R(function(e, t) {
				r.then(function(t) {
					return n._waitingQueue.push(z(e.bind(null, t)));
				}, function(e) {
					return n._waitingQueue.push(z(t.bind(null, e)));
				}).finally(function() {
					n._waitingFor === i && (n._waitingFor = null);
				});
			});
		}, J.prototype.abort = function() {
			this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new M.Abort()));
		}, J.prototype.table = function(e) {
			var t = this._memoizedTables ||= {};
			if (l(t, e)) return t[e];
			var n = this.schema[e];
			if (!n) throw new M.NotFound("Table " + e + " not part of transaction");
			return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), t[e] = n;
		}, J);
		function J() {}
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
					return n = r(t, n), n && (e[n[0]] = n[1]), e;
				}, {}))
			};
			var r;
		}
		var Qt = function(e) {
			try {
				return e.only([[]]), Qt = function() {
					return [[]];
				}, [[]];
			} catch {
				return Qt = function() {
					return lt;
				}, lt;
			}
		};
		function $t(e) {
			return e == null ? function() {} : typeof e == "string" ? (t = e).split(".").length === 1 ? function(e) {
				return e[t];
			} : function(e) {
				return b(e, t);
			} : function(t) {
				return b(t, e);
			};
			var t;
		}
		function en(e) {
			return [].slice.call(e);
		}
		var tn = 0;
		function nn(e) {
			return e == null ? ":id" : typeof e == "string" ? e : `[${e.join("+")}]`;
		}
		function rn(e, t, n) {
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
							e = z(e);
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
								++_, Wt(e);
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
							e = z(e);
							for (var a, o = t.objectStore(n), s = r.length, c = Array(s), l = 0, u = 0, d = function(t) {
								t = t.target, c[t._pos] = t.result, ++u === l && e(c);
							}, f = q(i), p = 0; p < s; ++p) r[p] != null && ((a = o.get(r[p]))._pos = p, a.onsuccess = d, a.onerror = f, ++l);
							l === 0 && e(c);
						});
					},
					get: function(e) {
						var t = e.trans, r = e.key;
						return new Promise(function(e, i) {
							e = z(e);
							var a = t.objectStore(n).get(r);
							a.onsuccess = function(t) {
								return e(t.target.result);
							}, a.onerror = q(i);
						});
					},
					query: (t = u, function(e) {
						return new Promise(function(i, a) {
							i = z(i);
							var o, s, c, l = e.trans, u = e.values, d = e.limit, f = e.query, p = d === Infinity ? void 0 : d, m = f.index, f = f.range, l = l.objectStore(n), m = m.isPrimaryKey ? l : l.index(m.name), f = r(f);
							if (d === 0) return i({ result: [] });
							t ? ((p = u ? m.getAll(f, p) : m.getAllKeys(f, p)).onsuccess = function(e) {
								return i({ result: e.target.result });
							}, p.onerror = q(a)) : (o = 0, s = !u && "openKeyCursor" in m ? m.openKeyCursor(f) : m.openCursor(f), c = [], s.onsuccess = function(e) {
								var t = s.result;
								return t ? (c.push(u ? t.value : t.primaryKey), ++o === d ? i({ result: c }) : void t.continue()) : i({ result: c });
							}, s.onerror = q(a));
						});
					}),
					openCursor: function(e) {
						var t = e.trans, i = e.values, a = e.query, o = e.reverse, s = e.unique;
						return new Promise(function(e, c) {
							e = z(e);
							var l = a.index, u = a.range, d = t.objectStore(n), d = l.isPrimaryKey ? d : d.index(l.name), l = o ? s ? "prevunique" : "prev" : s ? "nextunique" : "next", f = !i && "openKeyCursor" in d ? d.openKeyCursor(r(u), l) : d.openCursor(r(u), l);
							f.onerror = q(c), f.onsuccess = z(function(n) {
								var r, i, a, o, s = f.result;
								s ? (s.___id = ++tn, s.done = !1, r = s.continue.bind(s), i = (i = s.continuePrimaryKey) && i.bind(s), a = s.advance.bind(s), o = function() {
									throw Error("Cursor not stopped");
								}, s.trans = t, s.stop = s.continue = s.continuePrimaryKey = s.advance = function() {
									throw Error("Cursor not started");
								}, s.fail = z(c), s.next = function() {
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
										e = z(e), f.onerror = q(t), s.fail = t, s.stop = function(t) {
											s.stop = s.continue = s.continuePrimaryKey = s.advance = o, e(t);
										};
									});
									return f.onsuccess = z(function(e) {
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
							c.onsuccess = z(function(t) {
								return e(t.target.result);
							}), c.onerror = q(t);
						});
					}
				};
			}
			var o, s, c, l = (s = n, c = en((o = e).objectStoreNames), {
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
								extractKey: $t(t)
							},
							indexes: en(e.indexNames).map(function(t) {
								return e.index(t);
							}).map(function(e) {
								var t = e.name, n = e.unique, r = e.multiEntry, e = e.keyPath, r = {
									name: t,
									compound: a(e),
									keyPath: e,
									unique: n,
									multiEntry: r,
									extractKey: $t(e)
								};
								return i[nn(e)] = r;
							}),
							getIndexByKeyPath: function(e) {
								return i[nn(e)];
							}
						};
						return i[":id"] = n.primaryKey, t != null && (i[nn(t)] = n.primaryKey), n;
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
				MAX_KEY: Qt(t),
				schema: n
			};
		}
		function an(e, n, r, i) {
			var a = r.IDBKeyRange;
			return r.indexedDB, { dbcore: (i = rn(n, a, i), e.dbcore.reduce(function(e, n) {
				return n = n.create, t(t({}, e), n(e));
			}, i)) };
		}
		function on(e, t) {
			var n = t.db, t = an(e._middlewares, n, e._deps, t);
			e.core = t.dbcore, e.tables.forEach(function(t) {
				var n = t.name;
				e.core.schema.tables.some(function(e) {
					return e.name === n;
				}) && (t.core = e.core.table(n), e[n] instanceof e.Table && (e[n].core = t.core));
			});
		}
		function sn(e, t, n, r) {
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
		function cn(e, t) {
			t.forEach(function(t) {
				for (var n in t) t[n] instanceof e.Table && delete t[n];
			});
		}
		function ln(e, t) {
			return e._cfg.version - t._cfg.version;
		}
		function un(e, t, n, r) {
			var a = e._dbSchema;
			n.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = Zt("$meta", vn("")[0], []), e._storeNames.push("$meta"));
			var o = e._createTransaction("readwrite", e._storeNames, a);
			o.create(n), o._completion.catch(r);
			var s = o._reject.bind(o), c = L.transless || L;
			$e(function() {
				return L.trans = o, L.transless = c, t === 0 ? (i(a).forEach(function(e) {
					pn(n, e, a[e].primKey, a[e].indexes);
				}), on(e, n), void R.follow(function() {
					return e.on.populate.fire(o);
				}).catch(s)) : (on(e, n), l = t, ((r = o).storeNames.includes("$meta") ? r.table("$meta").get("version").then(function(e) {
					return e ?? l;
				}) : R.resolve(l)).then(function(t) {
					return a = t, s = o, c = n, l = [], t = (r = e)._versions, u = r._dbSchema = gn(0, r.idbdb, c), (t = t.filter(function(e) {
						return e._cfg.version >= a;
					})).length === 0 ? R.resolve() : (t.forEach(function(e) {
						l.push(function() {
							var t = u, n = e._cfg.dbschema;
							_n(r, t, c), _n(r, n, c), u = r._dbSchema = n;
							var o = fn(t, n);
							o.add.forEach(function(e) {
								pn(c, e[0], e[1].primKey, e[1].indexes);
							}), o.change.forEach(function(e) {
								if (e.recreate) throw new M.Upgrade("Not yet support for changing primary key");
								var t = c.objectStore(e.name);
								e.add.forEach(function(e) {
									return hn(t, e);
								}), e.change.forEach(function(e) {
									t.deleteIndex(e.name), hn(t, e);
								}), e.del.forEach(function(e) {
									return t.deleteIndex(e);
								});
							});
							var l = e._cfg.contentUpgrade;
							if (l && e._cfg.version > a) {
								on(r, c), s._memoizedTables = {};
								var d = S(n);
								o.del.forEach(function(e) {
									d[e] = t[e];
								}), cn(r, [r.Transaction.prototype]), sn(r, [r.Transaction.prototype], i(d), d), s.schema = d;
								var f, p = oe(l);
								return p && et(), o = R.follow(function() {
									var e;
									(f = l(s)) && p && (e = tt.bind(null, null), f.then(e, e));
								}), f && typeof f.then == "function" ? R.resolve(f) : o.then(function() {
									return f;
								});
							}
						}), l.push(function(t) {
							var n = e._cfg.dbschema, i = t;
							[].slice.call(i.db.objectStoreNames).forEach(function(e) {
								return n[e] == null && i.db.deleteObjectStore(e);
							}), cn(r, [r.Transaction.prototype]), sn(r, [r.Transaction.prototype], r._storeNames, r._dbSchema), s.schema = r._dbSchema;
						}), l.push(function(t) {
							r.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(r.idbdb.version / 10) === e._cfg.version ? (r.idbdb.deleteObjectStore("$meta"), delete r._dbSchema.$meta, r._storeNames = r._storeNames.filter(function(e) {
								return e !== "$meta";
							})) : t.objectStore("$meta").put(e._cfg.version, "version"));
						});
					}), function e() {
						return l.length ? R.resolve(l.shift()(s.idbtrans)).then(e) : R.resolve();
					}().then(function() {
						mn(u, c);
					}));
					var r, a, s, c, l, u;
				}).catch(s));
				var r, l;
			});
		}
		function dn(e, t) {
			mn(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
			var n = gn(0, e.idbdb, t);
			_n(e, e._dbSchema, t);
			for (var r = 0, i = fn(n, e._dbSchema).change; r < i.length; r++) {
				var a = function(e) {
					if (e.change.length || e.recreate) return console.warn(`Unable to patch indexes of table ${e.name} because it has changes on the type of index or primary key.`), { value: void 0 };
					var n = t.objectStore(e.name);
					e.add.forEach(function(t) {
						P && console.debug(`Dexie upgrade patch: Creating missing index ${e.name}.${t.src}`), hn(n, t);
					});
				}(i[r]);
				if (typeof a == "object") return a.value;
			}
		}
		function fn(e, t) {
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
		function pn(e, t, n, r) {
			var i = e.db.createObjectStore(t, n.keyPath ? {
				keyPath: n.keyPath,
				autoIncrement: n.auto
			} : { autoIncrement: n.auto });
			return r.forEach(function(e) {
				return hn(i, e);
			}), i;
		}
		function mn(e, t) {
			i(e).forEach(function(n) {
				t.db.objectStoreNames.contains(n) || (P && console.debug("Dexie: Creating missing table", n), pn(t, n, e[n].primKey, e[n].indexes));
			});
		}
		function hn(e, t) {
			e.createIndex(t.name, t.keyPath, {
				unique: t.unique,
				multiEntry: t.multi
			});
		}
		function gn(e, t, n) {
			var r = {};
			return g(t.objectStoreNames, 0).forEach(function(e) {
				for (var t = n.objectStore(e), i = Yt(Xt(c = t.keyPath), c || "", !0, !1, !!t.autoIncrement, c && typeof c != "string", !0), a = [], o = 0; o < t.indexNames.length; ++o) {
					var s = t.index(t.indexNames[o]), c = s.keyPath, s = Yt(s.name, c, !!s.unique, !!s.multiEntry, !1, c && typeof c != "string", !1);
					a.push(s);
				}
				r[e] = Zt(e, i, a);
			}), r;
		}
		function _n(e, t, n) {
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
		function vn(e) {
			return e.split(",").map(function(e, t) {
				var n = e.split(":"), r = (i = n[1])?.trim(), i = (e = n[0].trim()).replace(/([&*]|\+\+)/g, ""), n = /^\[/.test(i) ? i.match(/^\[(.*)\]$/)[1].split("+") : i;
				return Yt(i, n || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), a(n), t === 0, r);
			});
		}
		var yn = (bn.prototype._createTableSchema = Zt, bn.prototype._parseIndexSyntax = vn, bn.prototype._parseStoresSpec = function(e, t) {
			var n = this;
			i(e).forEach(function(r) {
				if (e[r] !== null) {
					var i = n._parseIndexSyntax(e[r]), a = i.shift();
					if (!a) throw new M.Schema("Invalid schema for table " + r + ": " + e[r]);
					if (a.unique = !0, a.multi) throw new M.Schema("Primary key cannot be multiEntry*");
					i.forEach(function(e) {
						if (e.auto) throw new M.Schema("Only primary key can be marked as autoIncrement (++)");
						if (!e.keyPath) throw new M.Schema("Index must have a name and cannot be an empty string");
					}), i = n._createTableSchema(r, a, i), t[r] = i;
				}
			});
		}, bn.prototype.stores = function(e) {
			var t = this.db;
			this._cfg.storesSource = this._cfg.storesSource ? o(this._cfg.storesSource, e) : e;
			var e = t._versions, n = {}, r = {};
			return e.forEach(function(e) {
				o(n, e._cfg.storesSource), r = e._cfg.dbschema = {}, e._parseStoresSpec(n, r);
			}), t._dbSchema = r, cn(t, [
				t._allTables,
				t,
				t.Transaction.prototype
			]), sn(t, [
				t._allTables,
				t,
				t.Transaction.prototype,
				this._cfg.tables
			], i(r), r), t._storeNames = i(r), this;
		}, bn.prototype.upgrade = function(e) {
			return this._cfg.contentUpgrade = Ce(this._cfg.contentUpgrade || N, e), this;
		}, bn);
		function bn() {}
		function xn(e, t) {
			var n = e._dbNamesDB;
			return n || (n = e._dbNamesDB = new nr(pt, {
				addons: [],
				indexedDB: e,
				IDBKeyRange: t
			})).version(1).stores({ dbnames: "name" }), n.table("dbnames");
		}
		function Y(e) {
			return e && typeof e.databases == "function";
		}
		function X(e) {
			return $e(function() {
				return L.letThrough = !0, e();
			});
		}
		function Sn(e) {
			return !("from" in e);
		}
		var Z = function(e, t) {
			if (!this) {
				var n = new Z();
				return e && "d" in e && o(n, e), n;
			}
			o(this, arguments.length ? {
				d: 1,
				from: e,
				to: 1 < arguments.length ? t : e
			} : { d: 0 });
		};
		function Q(e, t, n) {
			var r = H(t, n);
			if (!isNaN(r)) {
				if (0 < r) throw RangeError();
				if (Sn(e)) return o(e, {
					from: t,
					to: n,
					d: 1
				});
				var i = e.l, r = e.r;
				if (H(n, e.from) < 0) return i ? Q(i, t, n) : e.l = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, En(e);
				if (0 < H(t, e.to)) return r ? Q(r, t, n) : e.r = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, En(e);
				H(t, e.from) < 0 && (e.from = t, e.l = null, e.d = r ? r.d + 1 : 1), 0 < H(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, i && !e.l && Cn(e, i), r && n && Cn(e, r);
			}
		}
		function Cn(e, t) {
			Sn(t) || function e(t, n) {
				var r = n.from, i = n.to, a = n.l, n = n.r;
				Q(t, r, i), a && e(t, a), n && e(t, n);
			}(e, t);
		}
		function wn(e, t) {
			var n = Tn(t), r = n.next();
			if (r.done) return !1;
			for (var i = r.value, a = Tn(e), o = a.next(i.from), s = o.value; !r.done && !o.done;) {
				if (H(s.from, i.to) <= 0 && 0 <= H(s.to, i.from)) return !0;
				H(i.from, s.from) < 0 ? i = (r = n.next(s.from)).value : s = (o = a.next(i.from)).value;
			}
			return !1;
		}
		function Tn(e) {
			var t = Sn(e) ? null : {
				s: 0,
				n: e
			};
			return { next: function(e) {
				for (var n = 0 < arguments.length; t;) switch (t.s) {
					case 0: if (t.s = 1, n) for (; t.n.l && H(e, t.n.from) < 0;) t = {
						up: t,
						n: t.n.l,
						s: 1
					};
					else for (; t.n.l;) t = {
						up: t,
						n: t.n.l,
						s: 1
					};
					case 1: if (t.s = 2, !n || H(e, t.n.to) <= 0) return {
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
		function En(e) {
			var n, r, i = ((n = e.r)?.d || 0) - ((r = e.l)?.d || 0), a = 1 < i ? "r" : i < -1 ? "l" : "";
			a && (n = a == "r" ? "l" : "r", r = t({}, e), i = e[a], e.from = i.from, e.to = i.to, e[a] = i[a], r[a] = i[n], (e[n] = r).d = Dn(r)), e.d = Dn(e);
		}
		function Dn(e) {
			var t = e.r, e = e.l;
			return (t ? e ? Math.max(t.d, e.d) : t.d : e ? e.d : 0) + 1;
		}
		function On(e, t) {
			return i(t).forEach(function(n) {
				e[n] ? Cn(e[n], t[n]) : e[n] = function e(t) {
					var n, r, i = {};
					for (n in t) l(t, n) && (r = t[n], i[n] = !r || typeof r != "object" || ee.has(r.constructor) ? r : e(r));
					return i;
				}(t[n]);
			}), e;
		}
		function kn(e, t) {
			return e.all || t.all || Object.keys(e).some(function(n) {
				return t[n] && wn(t[n], e[n]);
			});
		}
		u(Z.prototype, ((j = {
			add: function(e) {
				return Cn(this, e), this;
			},
			addKey: function(e) {
				return Q(this, e, e), this;
			},
			addKeys: function(e) {
				var t = this;
				return e.forEach(function(e) {
					return Q(t, e, e);
				}), this;
			},
			hasKey: function(e) {
				var t = Tn(this).next(e).value;
				return t && H(t.from, e) <= 0 && 0 <= H(t.to, e);
			}
		})[ie] = function() {
			return Tn(this);
		}, j));
		var An = {}, jn = {}, Mn = !1;
		function Nn(e) {
			On(jn, e), Mn || (Mn = !0, setTimeout(function() {
				Mn = !1, Pn(jn, !(jn = {}));
			}, 0));
		}
		function Pn(e, t) {
			t === void 0 && (t = !1);
			var n = /* @__PURE__ */ new Set();
			if (e.all) for (var r = 0, i = Object.values(An); r < i.length; r++) Fn(o = i[r], e, n, t);
			else for (var a in e) {
				var o, s = /^idb\:\/\/(.*)\/(.*)\//.exec(a);
				s && (a = s[1], s = s[2], (o = An[`idb://${a}/${s}`]) && Fn(o, e, n, t));
			}
			n.forEach(function(e) {
				return e();
			});
		}
		function Fn(e, t, n, r) {
			for (var i = [], a = 0, o = Object.entries(e.queries.query); a < o.length; a++) {
				for (var s = o[a], c = s[0], l = [], u = 0, d = s[1]; u < d.length; u++) {
					var f = d[u];
					kn(t, f.obsSet) ? f.subscribers.forEach(function(e) {
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
		function In(e) {
			var t = e._state, n = e._deps.indexedDB;
			if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
				return t.dbOpenError ? V(t.dbOpenError) : e;
			});
			t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
			var r = t.openCanceller, a = Math.round(10 * e.verno), o = !1;
			function s() {
				if (t.openCanceller !== r) throw new M.DatabaseClosed("db.open() was cancelled");
			}
			function c() {
				return new R(function(r, l) {
					if (s(), !n) throw new M.MissingAPI();
					var u = e.name, p = t.autoSchema || !a ? n.open(u) : n.open(u, a);
					if (!p) throw new M.MissingAPI();
					p.onerror = q(l), p.onblocked = z(e._fireOnBlocked), p.onupgradeneeded = z(function(r) {
						var i;
						d = p.transaction, t.autoSchema && !e._options.allowEmptyDB ? (p.onerror = Wt, d.abort(), p.result.close(), (i = n.deleteDatabase(u)).onsuccess = i.onerror = z(function() {
							l(new M.NoSuchDatabase(`Database ${u} doesnt exist`));
						})) : (d.onerror = q(l), r = r.oldVersion > 2 ** 62 ? 0 : r.oldVersion, f = r < 1, e.idbdb = p.result, o && dn(e, d), un(e, r / 10, d, l));
					}, l), p.onsuccess = z(function() {
						d = null;
						var n, s, l, m, h, _ = e.idbdb = p.result, v = g(_.objectStoreNames);
						if (0 < v.length) try {
							var y = _.transaction((m = v).length === 1 ? m[0] : m, "readonly");
							if (t.autoSchema) s = _, l = y, (n = e).verno = s.version / 10, l = n._dbSchema = gn(0, s, l), n._storeNames = g(s.objectStoreNames, 0), sn(n, [n._allTables], i(l), l);
							else if (_n(e, e._dbSchema, y), ((h = fn(gn(0, (h = e).idbdb, y), h._dbSchema)).add.length || h.change.some(function(e) {
								return e.add.length || e.change.length;
							})) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), _.close(), a = _.version + 1, o = !0, r(c());
							on(e, y);
						} catch {}
						ft.push(e), _.onversionchange = z(function(n) {
							t.vcFired = !0, e.on("versionchange").fire(n);
						}), _.onclose = z(function(t) {
							e.on("close").fire(t);
						}), f && (h = e._deps, y = u, _ = h.indexedDB, h = h.IDBKeyRange, Y(_) || y === pt || xn(_, h).put({ name: y }).catch(N)), r();
					}, l);
				}).catch(function(e) {
					switch (e?.name) {
						case "UnknownError":
							if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), c();
							break;
						case "VersionError": if (0 < a) return a = 0, c();
					}
					return R.reject(e);
				});
			}
			var l, u = t.dbReadyResolve, d = null, f = !1;
			return R.race([r, (typeof navigator > "u" ? R.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(e) {
				function t() {
					return indexedDB.databases().finally(e);
				}
				l = setInterval(t, 100), t();
			}).finally(function() {
				return clearInterval(l);
			}) : Promise.resolve()).then(c)]).then(function() {
				return s(), t.onReadyBeingFired = [], R.resolve(X(function() {
					return e.on.ready.fire(e.vip);
				})).then(function n() {
					if (0 < t.onReadyBeingFired.length) {
						var r = t.onReadyBeingFired.reduce(Ce, N);
						return t.onReadyBeingFired = [], R.resolve(X(function() {
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
				return r === t.openCanceller && e._close(), V(n);
			}).finally(function() {
				t.openComplete = !0, u();
			}).then(function() {
				var t;
				return f && (t = {}, e.tables.forEach(function(n) {
					n.schema.indexes.forEach(function(r) {
						r.name && (t[`idb://${e.name}/${n.name}/${r.name}`] = new Z(-Infinity, [[[]]]));
					}), t[`idb://${e.name}/${n.name}/`] = t[`idb://${e.name}/${n.name}/:dels`] = new Z(-Infinity, [[[]]]);
				}), qt(Gt).fire(t), Pn(t, !0)), e;
			});
		}
		function Ln(e) {
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
		function Rn(e, t, n) {
			for (var r = a(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
			return r;
		}
		var zn = {
			stack: "dbcore",
			name: "VirtualIndexMiddleware",
			level: 1,
			create: function(e) {
				return t(t({}, e), { table: function(n) {
					var r = e.table(n), i = r.schema, a = {}, o = [];
					function s(e, n, r) {
						var i = nn(e), c = a[i] = a[i] || [], l = e == null ? 0 : typeof e == "string" ? 1 : e.length, u = 0 < n, u = t(t({}, r), {
							name: u ? `${i}(virtual-from:${r.name})` : r.name,
							lowLevelIndex: r,
							isVirtual: u,
							keyTail: n,
							keyLength: l,
							extractKey: $t(e),
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
								lower: Rn(r.lower, r.lowerOpen ? e.MAX_KEY : e.MIN_KEY, i),
								lowerOpen: !0,
								upper: Rn(r.upper, r.upperOpen ? e.MIN_KEY : e.MAX_KEY, i),
								upperOpen: !0
							})
						} }) : n;
					}
					return t(t({}, r), {
						schema: t(t({}, i), {
							primaryKey: n,
							indexes: o,
							getIndexByKeyPath: function(e) {
								return (e = a[nn(e)]) && e[0];
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
										r == null ? t.unique ? n.continue(n.key.slice(0, o).concat(t.reverse ? e.MIN_KEY : e.MAX_KEY, i)) : n.continue() : n.continue(Rn(r, t.reverse ? e.MAX_KEY : e.MIN_KEY, i));
									} },
									continuePrimaryKey: { value: function(t, r) {
										n.continuePrimaryKey(Rn(t, e.MAX_KEY, i), r);
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
		function Bn(e, t, n, r) {
			return n ||= {}, r ||= "", i(e).forEach(function(i) {
				var a, o, s;
				l(t, i) ? (a = e[i], o = t[i], typeof a == "object" && typeof o == "object" && a && o ? (s = re(a)) === re(o) ? s === "Object" ? Bn(a, o, n, r + i + ".") : a !== o && (n[r + i] = t[i]) : n[r + i] = t[i] : a !== o && (n[r + i] = t[i])) : n[r + i] = void 0;
			}), i(t).forEach(function(i) {
				l(e, i) || (n[r + i] = t[i]);
			}), n;
		}
		function Vn(e, t) {
			return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
		}
		var Hn = {
			stack: "dbcore",
			name: "HooksMiddleware",
			level: 2,
			create: function(e) {
				return t(t({}, e), { table: function(r) {
					var i = e.table(r), a = i.schema.primaryKey;
					return t(t({}, i), { mutate: function(e) {
						var o = L.trans, s = o.table(r).hook, c = s.deleting, u = s.creating, d = s.updating;
						switch (e.type) {
							case "add":
								if (u.fire === N) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "put":
								if (u.fire === N && d.fire === N) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "delete":
								if (c.fire === N) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "deleteRange":
								if (c.fire === N) break;
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
							var r, o, s, f = L.trans, p = e.keys || Vn(a, e);
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
									return e.type === "delete" ? c.fire.call(m, n, p, f) : e.type === "add" || p === void 0 ? (i = u.fire.call(m, n, e.values[r], f), n == null && i != null && (e.keys[r] = n = i, a.outbound || x(e.values[r], a.keyPath, n))) : (i = Bn(p, e.values[r]), (o = d.fire.call(m, i, n, p, f)) && (s = e.values[r], Object.keys(o).forEach(function(e) {
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
		function Un(e, t, n) {
			try {
				if (!t || t.keys.length < e.length) return null;
				for (var r = [], i = 0, a = 0; i < t.keys.length && a < e.length; ++i) H(t.keys[i], e[a]) === 0 && (r.push(n ? te(t.values[i]) : t.values[i]), ++a);
				return r.length === e.length ? r : null;
			} catch {
				return null;
			}
		}
		var Wn = {
			stack: "dbcore",
			level: -1,
			create: function(e) {
				return { table: function(n) {
					var r = e.table(n);
					return t(t({}, r), {
						getMany: function(e) {
							if (!e.cache) return r.getMany(e);
							var t = Un(e.keys, e.trans._cache, e.cache === "clone");
							return t ? R.resolve(t) : r.getMany(e).then(function(t) {
								return e.trans._cache = {
									keys: e.keys,
									values: e.cache === "clone" ? te(t) : t
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
		function Gn(e, t) {
			return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
		}
		function Kn(e, t) {
			switch (e) {
				case "query": return t.values && !t.unique;
				case "get":
				case "getMany":
				case "count":
				case "openCursor": return !1;
			}
		}
		var qn = {
			stack: "dbcore",
			level: 0,
			name: "Observability",
			create: function(e) {
				var n = e.schema.name, r = new Z(e.MIN_KEY, e.MAX_KEY);
				return t(t({}, e), {
					transaction: function(t, n, r) {
						if (L.subscr && n !== "readonly") throw new M.ReadOnly(`Readwrite transaction in liveQuery context. Querier source: ${L.querier}`);
						return e.transaction(t, n, r);
					},
					table: function(o) {
						var s = e.table(o), c = s.schema, l = c.primaryKey, u = c.indexes, d = l.extractKey, f = l.outbound, p = l.autoIncrement && u.filter(function(e) {
							return e.compound && e.keyPath.includes(l.keyPath);
						}), m = t(t({}, s), { mutate: function(t) {
							function i(e) {
								return e = `idb://${n}/${o}/${e}`, h[e] || (h[e] = new Z());
							}
							var u, d, f, m = t.trans, h = t.mutatedParts ||= {}, g = i(""), _ = i(":dels"), v = t.type, y = t.type === "deleteRange" ? [t.range] : t.type === "delete" ? [t.keys] : t.values.length < 50 ? [Vn(l, t).filter(function(e) {
								return e;
							}), t.values] : [], b = y[0], x = y[1], y = t.trans._cache;
							return a(b) ? (g.addKeys(b), (y = v === "delete" || b.length === x.length ? Un(b, y) : null) || _.addKeys(b), (y || x) && (u = i, d = y, f = x, c.indexes.forEach(function(e) {
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
									H(i, t) !== 0 && (i != null && r(i), t != null && r(t));
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
								})), m.mutatedParts = On(m.mutatedParts || {}, h), e;
							});
						} }), u = function(t) {
							var n = t.query, t = n.index, n = n.range;
							return [t, new Z((t = n.lower) ?? e.MIN_KEY, (n = n.upper) ?? e.MAX_KEY)];
						}, h = {
							get: function(e) {
								return [l, new Z(e.key)];
							},
							getMany: function(e) {
								return [l, new Z().addKeys(e.keys)];
							},
							count: u,
							query: u,
							openCursor: u
						};
						return i(h).forEach(function(e) {
							m[e] = function(i) {
								var a = L.subscr, c = !!a, l = Gn(L, s) && Kn(e, i) ? i.obsSet = {} : a;
								if (c) {
									var u = function(e) {
										return e = `idb://${n}/${o}/${e}`, l[e] || (l[e] = new Z());
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
		function Jn(e, n, r) {
			if (r.numFailures === 0) return n;
			if (n.type === "deleteRange") return null;
			var i = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1;
			return r.numFailures === i ? null : (n = t({}, n), a(n.keys) && (n.keys = n.keys.filter(function(e, t) {
				return !(t in r.failures);
			})), "values" in n && a(n.values) && (n.values = n.values.filter(function(e, t) {
				return !(t in r.failures);
			})), n);
		}
		function Yn(e, t) {
			return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < H(n, r.lower) : 0 <= H(n, r.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? H(e, t.upper) < 0 : H(e, t.upper) <= 0));
			var n, r;
		}
		function Xn(e, t, n, r, i, o) {
			if (!n || n.length === 0) return e;
			var s = t.query.index, c = s.multiEntry, l = t.query.range, u = r.schema.primaryKey.extractKey, d = s.extractKey, f = (s.lowLevelIndex || s).extractKey, n = n.reduce(function(e, n) {
				var r = e, i = [];
				if (n.type === "add" || n.type === "put") for (var o = new Z(), s = n.values.length - 1; 0 <= s; --s) {
					var f, p = n.values[s], m = u(p);
					o.hasKey(m) || (f = d(p), (c && a(f) ? f.some(function(e) {
						return Yn(e, l);
					}) : Yn(f, l)) && (o.addKey(m), i.push(p)));
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
							return !Yn(u(e), v);
						});
				}
				return r;
			}, e);
			return n === e ? e : (n.sort(function(e, t) {
				return H(f(e), f(t)) || H(u(e), u(t));
			}), t.limit && t.limit < Infinity && (n.length > t.limit ? n.length = t.limit : e.length === t.limit && n.length < t.limit && (i.dirty = !0)), o ? Object.freeze(n) : n);
		}
		function Zn(e, t) {
			return H(e.lower, t.lower) === 0 && H(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
		}
		function Qn(e, t) {
			return function(e, t, n, r) {
				if (e === void 0) return t === void 0 ? 0 : -1;
				if (t === void 0) return 1;
				if ((t = H(e, t)) === 0) {
					if (n && r) return 0;
					if (n) return 1;
					if (r) return -1;
				}
				return t;
			}(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function(e, t, n, r) {
				if (e === void 0) return t === void 0 ? 0 : 1;
				if (t === void 0) return -1;
				if ((t = H(e, t)) === 0) {
					if (n && r) return 0;
					if (n) return -1;
					if (r) return 1;
				}
				return t;
			}(e.upper, t.upper, e.upperOpen, t.upperOpen);
		}
		function $n(e, t, n, r) {
			e.subscribers.add(n), r.addEventListener("abort", function() {
				var r, i;
				e.subscribers.delete(n), e.subscribers.size === 0 && (r = e, i = t, setTimeout(function() {
					r.subscribers.size === 0 && O(i, r);
				}, 3e3));
			});
		}
		var er = {
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
										var u = l[c], d = An[`idb://${n}/${u}`];
										if (d) {
											var f = e.table(u), p = d.optimisticOps.filter(function(e) {
												return e.trans === s;
											});
											if (s._explicit && i && s.mutatedParts) for (var m = 0, h = Object.values(d.queries.query); m < h.length; m++) for (var g = 0, _ = (b = h[m]).slice(); g < _.length; g++) kn((x = _[g]).obsSet, s.mutatedParts) && (O(b, x), x.subscribers.forEach(function(e) {
												return o.add(e);
											}));
											else if (0 < p.length) {
												d.optimisticOps = d.optimisticOps.filter(function(e) {
													return e.trans !== s;
												});
												for (var v = 0, y = Object.values(d.queries.query); v < y.length; v++) for (var b, x, S, C = 0, w = (b = y[v]).slice(); C < w.length; C++) (x = w[C]).res != null && s.mutatedParts && (i && !x.dirty ? (S = Object.isFrozen(x.res), S = Xn(x.res, x.req, p, f, x, S), x.dirty ? (O(b, x), x.subscribers.forEach(function(e) {
													return o.add(e);
												})) : S !== x.res && (x.res = S, x.promise = R.resolve({ result: S }))) : (x.dirty && O(b, x), x.subscribers.forEach(function(e) {
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
								var o = L.trans;
								if (a.outbound || o.db._options.cache === "disabled" || o.explicit || o.idbtrans.mode !== "readwrite") return i.mutate(e);
								var s = An[`idb://${n}/${r}`];
								return s ? (o = i.mutate(e), e.type !== "add" && e.type !== "put" || !(50 <= e.values.length || Vn(a, e).some(function(e) {
									return e == null;
								})) ? (s.optimisticOps.push(e), e.mutatedParts && Nn(e.mutatedParts), o.then(function(t) {
									0 < t.numFailures && (O(s.optimisticOps, e), (t = Jn(0, e, t)) && s.optimisticOps.push(t), e.mutatedParts && Nn(e.mutatedParts));
								}), o.catch(function() {
									O(s.optimisticOps, e), e.mutatedParts && Nn(e.mutatedParts);
								})) : o.then(function(n) {
									var r = Jn(0, t(t({}, e), { values: e.values.map(function(e, r) {
										var i;
										return n.failures[r] ? e : (e = (i = a.keyPath) != null && i.includes(".") ? te(e) : t({}, e), x(e, a.keyPath, n.results[r]), e);
									}) }), n);
									s.optimisticOps.push(r), queueMicrotask(function() {
										return e.mutatedParts && Nn(e.mutatedParts);
									});
								}), o) : i.mutate(e);
							},
							query: function(e) {
								if (!Gn(L, i) || !Kn("query", e)) return i.query(e);
								var t = (c = L.trans)?.db._options.cache === "immutable", a = L, o = a.requery, s = a.signal, c = function(e, t, n, r) {
									var i = An[`idb://${e}/${t}`];
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
												return e.req.limit === r.limit && e.req.values === r.values && Zn(e.req.query.range, r.query.range);
											});
											return o ? [
												o,
												!0,
												i,
												a
											] : [
												a.find(function(e) {
													return ("limit" in e.req ? e.req.limit : Infinity) >= r.limit && (!r.values || e.req.values) && Qn(e.req.query.range, r.query.range);
												}),
												!1,
												i,
												a
											];
										case "count": return o = a.find(function(e) {
											return Zn(e.req.query.range, r.query.range);
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
									} else e.result = te(n);
									return e;
								}).catch(function(e) {
									return d && l && O(d, l), Promise.reject(e);
								}), l = {
									obsSet: e.obsSet,
									promise: a,
									subscribers: /* @__PURE__ */ new Set(),
									type: "query",
									req: e,
									dirty: !1
								}, d ? d.push(l) : (d = [l], (u ||= An[`idb://${n}/${r}`] = {
									queries: {
										query: {},
										count: {}
									},
									objs: /* @__PURE__ */ new Map(),
									optimisticOps: [],
									unsignaledParts: {}
								}).queries.query[e.query.index.name || ""] = d)), $n(l, d, o, s), l.promise.then(function(n) {
									return { result: Xn(n.result, e, u?.optimisticOps, i, l, t) };
								});
							}
						});
					}
				});
			}
		};
		function tr(e, t) {
			return new Proxy(e, { get: function(e, n, r) {
				return n === "db" ? t : Reflect.get(e, n, r);
			} });
		}
		var nr = ($.prototype.version = function(e) {
			if (isNaN(e) || e < .1) throw new M.Type("Given version is not a positive number");
			if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new M.Schema("Cannot add version when database is open");
			this.verno = Math.max(this.verno, e);
			var t = this._versions, n = t.filter(function(t) {
				return t._cfg.version === e;
			})[0];
			return n || (n = new this.Version(e), t.push(n), t.sort(ln), n.stores({}), this._state.autoSchema = !1, n);
		}, $.prototype._whenReady = function(e) {
			var t = this;
			return this.idbdb && (this._state.openComplete || L.letThrough || this._vip) ? e() : new R(function(e, n) {
				if (t._state.openComplete) return n(new M.DatabaseClosed(t._state.dbOpenError));
				if (!t._state.isBeingOpened) {
					if (!t._state.autoOpen) return void n(new M.DatabaseClosed());
					t.open().catch(N);
				}
				t._state.dbReadyPromise.then(e, n);
			}).then(e);
		}, $.prototype.use = function(e) {
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
		}, $.prototype.unuse = function(e) {
			var t = e.stack, n = e.name, r = e.create;
			return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(e) {
				return r ? e.create !== r : !!n && e.name !== n;
			})), this;
		}, $.prototype.open = function() {
			var e = this;
			return ot(I, function() {
				return In(e);
			});
		}, $.prototype._close = function() {
			this.on.close.fire(new CustomEvent("close"));
			var e = this._state, t = ft.indexOf(this);
			if (0 <= t && ft.splice(t, 1), this.idbdb) {
				try {
					this.idbdb.close();
				} catch {}
				this.idbdb = null;
			}
			e.isBeingOpened || (e.dbReadyPromise = new R(function(t) {
				e.dbReadyResolve = t;
			}), e.openCanceller = new R(function(t, n) {
				e.cancelOpen = n;
			}));
		}, $.prototype.close = function(e) {
			var t = (e === void 0 ? { disableAutoOpen: !0 } : e).disableAutoOpen, e = this._state;
			t ? (e.isBeingOpened && e.cancelOpen(new M.DatabaseClosed()), this._close(), e.autoOpen = !1, e.dbOpenError = new M.DatabaseClosed()) : (this._close(), e.autoOpen = this._options.autoOpen || e.isBeingOpened, e.openComplete = !1, e.dbOpenError = null);
		}, $.prototype.delete = function(e) {
			var t = this;
			e === void 0 && (e = { disableAutoOpen: !0 });
			var n = 0 < arguments.length && typeof arguments[0] != "object", r = this._state;
			return new R(function(i, a) {
				function o() {
					t.close(e);
					var n = t._deps.indexedDB.deleteDatabase(t.name);
					n.onsuccess = z(function() {
						var e = t._deps, n = t.name, r = e.indexedDB;
						e = e.IDBKeyRange, Y(r) || n === pt || xn(r, e).delete(n).catch(N), i();
					}), n.onerror = q(a), n.onblocked = t._fireOnBlocked;
				}
				if (n) throw new M.InvalidArgument("Invalid closeOptions argument to db.delete()");
				r.isBeingOpened ? r.dbReadyPromise.then(o) : o();
			});
		}, $.prototype.backendDB = function() {
			return this.idbdb;
		}, $.prototype.isOpen = function() {
			return this.idbdb !== null;
		}, $.prototype.hasBeenClosed = function() {
			var e = this._state.dbOpenError;
			return e && e.name === "DatabaseClosed";
		}, $.prototype.hasFailed = function() {
			return this._state.dbOpenError !== null;
		}, $.prototype.dynamicallyOpened = function() {
			return this._state.autoSchema;
		}, Object.defineProperty($.prototype, "tables", {
			get: function() {
				var e = this;
				return i(this._allTables).map(function(t) {
					return e._allTables[t];
				});
			},
			enumerable: !1,
			configurable: !0
		}), $.prototype.transaction = function() {
			var e = function(e, t, n) {
				var r = arguments.length;
				if (r < 2) throw new M.InvalidArgument("Too few arguments");
				for (var i = Array(r - 1); --r;) i[r - 1] = arguments[r];
				return n = i.pop(), [
					e,
					w(i),
					n
				];
			}.apply(this, arguments);
			return this._transaction.apply(this, e);
		}, $.prototype._transaction = function(e, t, n) {
			var r = this, i = L.trans;
			i && i.db === this && e.indexOf("!") === -1 || (i = null);
			var a, o, s = e.indexOf("?") !== -1;
			e = e.replace("!", "").replace("?", "");
			try {
				if (o = t.map(function(e) {
					if (e = e instanceof r.Table ? e.name : e, typeof e != "string") throw TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
					return e;
				}), e == "r" || e === mt) a = mt;
				else {
					if (e != "rw" && e != ht) throw new M.InvalidArgument("Invalid transaction mode: " + e);
					a = ht;
				}
				if (i) {
					if (i.mode === mt && a === ht) {
						if (!s) throw new M.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
						i = null;
					}
					i && o.forEach(function(e) {
						if (i && i.storeNames.indexOf(e) === -1) {
							if (!s) throw new M.SubTransaction("Table " + e + " not included in parent transaction.");
							i = null;
						}
					}), s && i && !i.active && (i = null);
				}
			} catch (e) {
				return i ? i._promise(null, function(t, n) {
					n(e);
				}) : V(e);
			}
			var c = function e(t, n, r, i, a) {
				return R.resolve().then(function() {
					var o = L.transless || L, s = t._createTransaction(n, r, t._dbSchema, i);
					if (s.explicit = !0, o = {
						trans: s,
						transless: o
					}, i) s.idbtrans = i.idbtrans;
					else try {
						s.create(), s.idbtrans._explicit = !0, t._state.PR1398_maxLoop = 3;
					} catch (i) {
						return i.name === fe.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
							return e(t, n, r, null, a);
						})) : V(i);
					}
					var c, l = oe(a);
					return l && et(), o = R.follow(function() {
						var e;
						(c = a.call(s, s)) && (l ? (e = tt.bind(null, null), c.then(e, e)) : typeof c.next == "function" && typeof c.throw == "function" && (c = Ln(c)));
					}, o), (c && typeof c.then == "function" ? R.resolve(c).then(function(e) {
						return s.active ? e : V(new M.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
					}) : o.then(function() {
						return c;
					})).then(function(e) {
						return i && s._resolve(), s._completion.then(function() {
							return e;
						});
					}).catch(function(e) {
						return s._reject(e), V(e);
					});
				});
			}.bind(null, this, a, o, i, n);
			return i ? i._promise(a, c, "lock") : L.trans ? ot(L.transless, function() {
				return r._whenReady(c);
			}) : this._whenReady(c);
		}, $.prototype.table = function(e) {
			if (!l(this._allTables, e)) throw new M.InvalidTable(`Table ${e} does not exist`);
			return this._allTables[e];
		}, $);
		function $(e, n) {
			var r = this;
			this._middlewares = {}, this.verno = 0;
			var i = $.dependencies;
			this._options = n = t({
				addons: $.addons,
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
				dbReadyResolve: N,
				dbReadyPromise: null,
				cancelOpen: N,
				openCanceller: null,
				autoSchema: !0,
				PR1398_maxLoop: 3,
				autoOpen: n.autoOpen
			};
			u.dbReadyPromise = new R(function(e) {
				u.dbReadyResolve = e;
			}), u.openCanceller = new R(function(e, t) {
				u.cancelOpen = t;
			}), this._state = u, this.name = e, this.on = wt(this, "populate", "blocked", "versionchange", "close", { ready: [Ce, N] }), this.once = function(e, t) {
				var n = function() {
					var i = [...arguments];
					r.on(e).unsubscribe(n), t.apply(r, i);
				};
				return r.on(e, n);
			}, this.on.ready.subscribe = _(this.on.ready.subscribe, function(e) {
				return function(t, n) {
					$.vip(function() {
						var i, a = r._state;
						a.openComplete ? (a.dbOpenError || R.resolve().then(t), n && e(t)) : a.onReadyBeingFired ? (a.onReadyBeingFired.push(t), n && e(t)) : (e(t), i = r, n || e(function e() {
							i.on.ready.unsubscribe(t), i.on.ready.unsubscribe(e);
						}));
					});
				};
			}), this.Collection = (a = this, Tt(Ft.prototype, function(e, t) {
				this.db = a;
				var n = _t, r = null;
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
					valueMapper: e === ge ? null : e
				};
			})), this.Table = (o = this, Tt(Ct.prototype, function(e, t, n) {
				this.db = o, this._tx = n, this.name = e, this.schema = t, this.hook = o._allTables[e] ? o._allTables[e].hook : wt(null, {
					creating: [ye, N],
					reading: [_e, ge],
					updating: [xe, N],
					deleting: [be, N]
				});
			})), this.Transaction = (s = this, Tt(Jt.prototype, function(e, t, n, r, i) {
				var a = this;
				e !== "readonly" && t.forEach(function(e) {
					e = (e = n[e])?.yProps, e && (t = t.concat(e.map(function(e) {
						return e.updatesTable;
					})));
				}), this.db = s, this.mode = e, this.storeNames = t, this.schema = n, this.chromeTransactionDurability = r, this.idbtrans = null, this.on = wt(this, "complete", "error", "abort"), this.parent = i || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new R(function(e, t) {
					a._resolve = e, a._reject = t;
				}), this._completion.then(function() {
					a.active = !1, a.on.complete.fire();
				}, function(e) {
					var t = a.active;
					return a.active = !1, a.on.error.fire(e), a.parent ? a.parent._reject(e) : t && a.idbtrans && a.idbtrans.abort(), V(e);
				});
			})), this.Version = (c = this, Tt(yn.prototype, function(e) {
				this.db = c, this._cfg = {
					version: e,
					storesSource: null,
					dbschema: {},
					tables: {},
					contentUpgrade: null
				};
			})), this.WhereClause = (l = this, Tt(Ut.prototype, function(e, t, n) {
				if (this.db = l, this._ctx = {
					table: e,
					index: t === ":id" ? null : t,
					or: n
				}, this._cmp = this._ascending = H, this._descending = function(e, t) {
					return H(t, e);
				}, this._max = function(e, t) {
					return 0 < H(e, t) ? e : t;
				}, this._min = function(e, t) {
					return H(e, t) < 0 ? e : t;
				}, this._IDBKeyRange = l._deps.IDBKeyRange, !this._IDBKeyRange) throw new M.MissingAPI();
			})), this.on("versionchange", function(e) {
				0 < e.newVersion ? console.warn(`Another connection wants to upgrade database '${r.name}'. Closing db now to resume the upgrade.`) : console.warn(`Another connection wants to delete database '${r.name}'. Closing db now to resume the delete request.`), r.close({ disableAutoOpen: !1 });
			}), this.on("blocked", function(e) {
				!e.newVersion || e.newVersion < e.oldVersion ? console.warn(`Dexie.delete('${r.name}') was blocked`) : console.warn(`Upgrade '${r.name}' blocked by other connection holding version ${e.oldVersion / 10}`);
			}), this._maxKey = Qt(n.IDBKeyRange), this._createTransaction = function(e, t, n, i) {
				return new r.Transaction(e, t, n, r._options.chromeTransactionDurability, i);
			}, this._fireOnBlocked = function(e) {
				r.on("blocked").fire(e), ft.filter(function(e) {
					return e.name === r.name && e !== r && !e._state.vcFired;
				}).map(function(t) {
					return t.on("versionchange").fire(e);
				});
			}, this.use(Wn), this.use(er), this.use(qn), this.use(zn), this.use(Hn);
			var d = new Proxy(this, { get: function(e, t, n) {
				if (t === "_vip") return !0;
				if (t === "table") return function(e) {
					return tr(r.table(e), d);
				};
				var i = Reflect.get(e, t, n);
				return i instanceof Ct ? tr(i, d) : t === "tables" ? i.map(function(e) {
					return tr(e, d);
				}) : t === "_createTransaction" ? function() {
					return tr(i.apply(this, arguments), d);
				} : i;
			} });
			this.vip = d, i.forEach(function(e) {
				return e(r);
			});
		}
		var rr, j = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ir = (ar.prototype.subscribe = function(e, t, n) {
			return this._subscribe(e && typeof e != "function" ? e : {
				next: e,
				error: t,
				complete: n
			});
		}, ar.prototype[j] = function() {
			return this;
		}, ar);
		function ar(e) {
			this._subscribe = e;
		}
		try {
			rr = {
				indexedDB: r.indexedDB || r.mozIndexedDB || r.webkitIndexedDB || r.msIndexedDB,
				IDBKeyRange: r.IDBKeyRange || r.webkitIDBKeyRange
			};
		} catch {
			rr = {
				indexedDB: null,
				IDBKeyRange: null
			};
		}
		function or(e) {
			var t, n = !1, r = new ir(function(r) {
				var i = oe(e), a, o = !1, s = {}, c = {}, u = {
					get closed() {
						return o;
					},
					unsubscribe: function() {
						o || (o = !0, a && a.abort(), d && qt.storagemutated.unsubscribe(p));
					}
				};
				r.start && r.start(u);
				var d = !1, f = function() {
					return ct(m);
				}, p = function(e) {
					On(s, e), kn(c, s) && f();
				}, m = function() {
					var u, m, h;
					!o && rr.indexedDB && (s = {}, u = {}, a && a.abort(), a = new AbortController(), h = function(t) {
						var n = We();
						try {
							i && et();
							var r = $e(e, t);
							return r = i ? r.finally(tt) : r;
						} finally {
							n && Ge();
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
						}(c = u) || d || (qt(Gt, p), d = !0), ct(function() {
							return !o && r.next && r.next(e);
						}));
					}, function(e) {
						n = !1, ["DatabaseClosedError", "AbortError"].includes(e?.name) || o || ct(function() {
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
		var sr = nr;
		function cr(e) {
			var t = ur;
			try {
				ur = !0, qt.storagemutated.fire(e), Pn(e, !0);
			} finally {
				ur = t;
			}
		}
		u(sr, t(t({}, he), {
			delete: function(e) {
				return new sr(e, { addons: [] }).delete();
			},
			exists: function(e) {
				return new sr(e, { addons: [] }).open().then(function(e) {
					return e.close(), !0;
				}).catch("NoSuchDatabaseError", function() {
					return !1;
				});
			},
			getDatabaseNames: function(e) {
				try {
					return t = sr.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (Y(n) ? Promise.resolve(n.databases()).then(function(e) {
						return e.map(function(e) {
							return e.name;
						}).filter(function(e) {
							return e !== pt;
						});
					}) : xn(n, t).toCollection().primaryKeys()).then(e);
				} catch {
					return V(new M.MissingAPI());
				}
				var t, n;
			},
			defineClass: function() {
				return function(e) {
					o(this, e);
				};
			},
			ignoreTransaction: function(e) {
				return L.trans ? ot(L.transless, e) : e();
			},
			vip: X,
			async: function(e) {
				return function() {
					try {
						var t = Ln(e.apply(this, arguments));
						return t && typeof t.then == "function" ? t : R.resolve(t);
					} catch (e) {
						return V(e);
					}
				};
			},
			spawn: function(e, t, n) {
				try {
					var r = Ln(e.apply(n, t || []));
					return r && typeof r.then == "function" ? r : R.resolve(r);
				} catch (e) {
					return V(e);
				}
			},
			currentTransaction: { get: function() {
				return L.trans || null;
			} },
			waitFor: function(e, t) {
				return t = R.resolve(typeof e == "function" ? sr.ignoreTransaction(e) : e).timeout(t || 6e4), L.trans ? L.trans.waitFor(t) : t;
			},
			Promise: R,
			debug: {
				get: function() {
					return P;
				},
				set: function(e) {
					we(e);
				}
			},
			derive: p,
			extend: o,
			props: u,
			override: _,
			Events: wt,
			on: qt,
			liveQuery: or,
			extendObservabilitySet: On,
			getByKeyPath: b,
			setByKeyPath: x,
			delByKeyPath: function(e, t) {
				typeof t == "string" ? x(e, t, void 0) : "length" in t && [].map.call(t, function(t) {
					x(e, t, void 0);
				});
			},
			shallowClone: S,
			deepClone: te,
			getObjectDiff: Bn,
			cmp: H,
			asap: y,
			minKey: -Infinity,
			addons: [],
			connections: ft,
			errnames: fe,
			dependencies: rr,
			cache: An,
			semVer: "4.2.0",
			version: "4.2.0".split(".").map(function(e) {
				return parseInt(e);
			}).reduce(function(e, t, n) {
				return e + t / 10 ** (2 * n);
			})
		})), sr.maxKey = Qt(sr.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (qt(Gt, function(e) {
			ur ||= (e = new CustomEvent(Kt, { detail: e }), ur = !0, dispatchEvent(e), !1);
		}), addEventListener(Kt, function(e) {
			e = e.detail, ur || cr(e);
		}));
		var lr, ur = !1, dr = function() {};
		return typeof BroadcastChannel < "u" && ((dr = function() {
			(lr = new BroadcastChannel(Kt)).onmessage = function(e) {
				return e.data && cr(e.data);
			};
		})(), typeof lr.unref == "function" && lr.unref(), qt(Gt, function(e) {
			ur || lr.postMessage(e);
		})), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
			if (!nr.disableBfCache && e.persisted) {
				P && console.debug("Dexie: handling persisted pagehide"), lr?.close();
				for (var t = 0, n = ft; t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
			}
		}), addEventListener("pageshow", function(e) {
			!nr.disableBfCache && e.persisted && (P && console.debug("Dexie: handling persisted pageshow"), dr(), cr({ all: new Z(-Infinity, [[]]) }));
		})), R.rejectionMapper = function(e, t) {
			return !e || e instanceof ce || e instanceof TypeError || e instanceof SyntaxError || !e.name || !me[e.name] ? e : (t = new me[e.name](t || e.message, e), "stack" in e && f(t, "stack", { get: function() {
				return this.inner.stack;
			} }), t);
		}, we(P), t(nr, Object.freeze({
			__proto__: null,
			Dexie: nr,
			liveQuery: or,
			Entity: yt,
			cmp: H,
			PropModification: Nt,
			replacePrefix: function(e, t) {
				return new Nt({ replacePrefix: [e, t] });
			},
			add: function(e) {
				return new Nt({ add: e });
			},
			remove: function(e) {
				return new Nt({ remove: e });
			},
			default: nr,
			RangeSet: Z,
			mergeRanges: Cn,
			rangesOverlap: wn
		}), { default: nr }), nr;
	});
})))(), 1), jn = Symbol.for("Dexie"), Mn = globalThis[jn] || (globalThis[jn] = An.default);
if (An.default.semVer !== Mn.semVer) throw Error(`Two different versions of Dexie loaded in the same app: ${An.default.semVer} and ${Mn.semVer}`);
var { liveQuery: Nn, mergeRanges: Pn, rangesOverlap: Fn, RangeSet: In, cmp: Ln, Entity: Rn, PropModification: zn, replacePrefix: Bn, add: Vn, remove: Hn, DexieYProvider: Un } = Mn;
function Wn(e) {
	let t = [e.autoIncrement ? `++${e.primaryKey}` : e.primaryKey];
	for (let n of e.indexes) t.push(n);
	for (let n of e.compoundIndexes) t.push(`[${n.join("+")}]`);
	for (let n of e.arrayIndexes) t.push(`*${n}`);
	return t.join(", ");
}
var Gn = {
	primaryKey: "id",
	indexes: ["tagName"],
	compoundIndexes: [],
	arrayIndexes: []
}, Kn = class {
	constructor(e, t) {
		this.schemaVersion = 1, this.knownDocuments = /* @__PURE__ */ new Map(), this.schemaLock = Promise.resolve(), this.stale = !1, this.name = e, this.dexieRecordSchema = Wn(t?.recordSchema ?? Gn), this.db = new Mn(e);
	}
	async open() {
		await this.reloadFromPersisted();
	}
	close() {
		this.db.close();
	}
	async destroy() {
		this.db.isOpen() && (this.db.close(), await qn()), await Mn.delete(this.name), this.knownDocuments.clear();
	}
	async reconcile() {
		await this.ensureCurrentSchema();
	}
	async isDocumentReadable(e) {
		if (!this.knownDocuments.has(e)) return !1;
		let t = this.resolveTableName(e);
		return this.db.isOpen() && this.db.tables.some((e) => e.name === t);
	}
	async registerDocument(e) {
		await this.withSchemaLock(async () => {
			this.stale && await this.reloadFromPersisted(), this.knownDocuments.set(e.id, e), await this.reopenWithNewSchema(), await this.db.table(xn).add(e);
		});
	}
	async getDocument(e) {
		return await this.ensureCurrentSchema(), this.db.table(xn).get(e);
	}
	async getDocuments() {
		return await this.ensureCurrentSchema(), this.db.table(xn).toArray();
	}
	async updateDocument(e, t) {
		await this.ensureCurrentSchema(), await this.db.table(xn).update(e, t);
		let n = this.knownDocuments.get(e);
		n && this.knownDocuments.set(e, {
			...n,
			...t
		});
	}
	async removeDocument(e) {
		await this.withSchemaLock(async () => {
			this.stale && await this.reloadFromPersisted();
			let t = this.resolveTableName(e);
			this.db.tables.some((e) => e.name === t) && await this.db.table(t).clear();
			let n = wn(e);
			this.db.tables.some((e) => e.name === n) && await this.db.table(n).clear(), await this.db.table(Q).where({ documentId: e }).delete(), await this.db.table(Y).where({ documentId: e }).delete(), await this.db.table(X).delete(`head:${e}`), await this.db.table(xn).delete(e), this.knownDocuments.delete(e), await this.reopenWithNewSchema({ drop: e });
		});
	}
	async get(e, t) {
		if (await this.ensureCurrentSchema(), t) return this.db.table(this.resolveTableName(t)).get(e);
		for (let t of this.knownDocuments.keys()) {
			let n = await this.db.table(this.resolveTableName(t)).get(e);
			if (n) return n;
		}
	}
	async getByDocumentId(e) {
		return await this.ensureCurrentSchema(), this.db.table(this.resolveTableName(e)).toArray();
	}
	async getByTagNameInDocument(e, t) {
		return await this.ensureCurrentSchema(), this.db.table(this.resolveTableName(t)).where({ tagName: e }).toArray();
	}
	async bulkWrite(e, t) {
		await this.ensureCurrentSchema();
		let { creates: n, updates: r, deletes: i } = t, a = this.db.table(this.resolveTableName(e));
		await this.db.transaction("rw", a, async () => {
			if (n?.length && await a.bulkAdd(n), r?.length) for (let { recordId: e, ...t } of r) {
				let n = await a.get(e);
				if (!n) continue;
				let r = { ...t };
				if (t.attributes) {
					let e = [...n.attributes];
					for (let n of t.attributes) {
						let t = e.findIndex((e) => e.name === n.name);
						t >= 0 ? e[t] = n : e.push(n);
					}
					r.attributes = e;
				}
				if (t.children) {
					let e = [...n.children];
					for (let n of t.children) {
						let t = e.findIndex((e) => e.id === n.id);
						t >= 0 ? e[t] = n : e.push(n);
					}
					r.children = e;
				}
				await a.update(e, r);
			}
			i?.length && await a.bulkDelete(i);
		});
	}
	async commit(e) {
		await this.ensureCurrentSchema();
		let { documentId: t, creates: n, updates: r, deletes: i, onProgress: a } = e, o = this.db.table(this.resolveTableName(t)), s = n.length + r.length + i.length, c = 0;
		try {
			await this.db.transaction("rw", o, this.db.table(Y), this.db.table(X), async () => {
				let e = r.length > 0 ? await o.bulkGet(r.map((e) => e.id)) : [], l = i.length > 0 ? await o.bulkGet(i) : [];
				if (n.length > 0) try {
					await o.bulkAdd(n), c += n.length, a(c, s);
				} catch (e) {
					m("STORE_BULK_ADD_FAILED", {
						detail: e instanceof Error ? e.message : String(e),
						cause: e instanceof Error ? e : void 0
					});
				}
				if (r.length > 0) try {
					await o.bulkPut(r), c += r.length, a(c, s);
				} catch (e) {
					m("STORE_BULK_UPDATE_FAILED", {
						detail: e instanceof Error ? e.message : String(e),
						cause: e instanceof Error ? e : void 0
					});
				}
				if (i.length > 0) try {
					await o.bulkDelete(i), c += i.length, a(c, s);
				} catch (e) {
					m("STORE_DELETE_FAILED", {
						detail: e instanceof Error ? e.message : String(e),
						cause: e instanceof Error ? e : void 0
					});
				}
				let u = await this.getHead(t), d = await this.db.table(Y).where({ documentId: t }).filter((e) => e.sequenceNumber > u).toArray();
				d.length > 0 && await this.db.table("_changeLog").bulkDelete(d.map((e) => e.id));
				let f = u + 1, p = {
					documentId: t,
					sequenceNumber: f,
					timestamp: Date.now(),
					operations: {
						creates: n,
						updates: r.map((t, n) => ({
							before: e[n],
							after: t
						})),
						deletes: l.filter(Boolean)
					}
				};
				await this.db.table(Y).add(p), await this.setHead(t, f);
			});
		} catch (e) {
			if (e instanceof Error && e.message.includes("dialecte")) throw e;
			m("STORE_COMMIT_FAILED", {
				detail: e instanceof Error ? e.message : String(e),
				cause: e instanceof Error ? e : void 0
			});
		}
	}
	async undo(e) {
		await this.ensureCurrentSchema();
		let t = await this.getHead(e);
		if (t === 0) return;
		let n = await this.db.table(Y).where({
			documentId: e,
			sequenceNumber: t
		}).first();
		if (!n) return;
		let r = this.db.table(this.resolveTableName(e));
		await this.db.transaction("rw", r, this.db.table(X), async () => {
			let { creates: i, updates: a, deletes: o } = n.operations;
			i.length > 0 && await r.bulkDelete(i.map((e) => e.id)), a.length > 0 && await r.bulkPut(a.map((e) => e.before)), o.length > 0 && await r.bulkAdd(o), await this.setHead(e, t - 1);
		});
	}
	async redo(e) {
		await this.ensureCurrentSchema();
		let t = await this.getHead(e) + 1, n = await this.db.table(Y).where({
			documentId: e,
			sequenceNumber: t
		}).first();
		if (!n) return;
		let r = this.db.table(this.resolveTableName(e));
		await this.db.transaction("rw", r, this.db.table(X), async () => {
			let { creates: i, updates: a, deletes: o } = n.operations;
			i.length > 0 && await r.bulkAdd(i), a.length > 0 && await r.bulkPut(a.map((e) => e.after)), o.length > 0 && await r.bulkDelete(o.map((e) => e.id)), await this.setHead(e, t);
		});
	}
	async getHistoryStatus(e) {
		await this.ensureCurrentSchema();
		let t = await this.getHead(e), n = await this.db.table(Y).where({
			documentId: e,
			sequenceNumber: t + 1
		}).first();
		return {
			canUndo: t > 0,
			canRedo: n !== void 0
		};
	}
	async getChangeLog(e) {
		return await this.ensureCurrentSchema(), this.db.table(Y).where({ documentId: e }).sortBy("sequenceNumber");
	}
	async addBlob(e, t) {
		await this.ensureCurrentSchema(), Jn(this.knownDocuments, e.documentId);
		let n = this.db.table(wn(e.documentId));
		await this.db.transaction("rw", this.db.table(Q), n, async () => {
			await this.db.table(Q).put(e), await n.put({
				id: e.id,
				data: t
			});
		});
	}
	async getBlob(e) {
		await this.ensureCurrentSchema();
		let t = await this.db.table(Q).get(e);
		if (!t) return;
		let n = await this.db.table(wn(t.documentId)).get(e);
		if (n) return {
			entry: t,
			data: n.data
		};
	}
	async getBlobsByDocument(e) {
		return await this.ensureCurrentSchema(), (await this.db.table(Q).toArray()).filter((t) => t.attachedTo.some((t) => t.documentId === e));
	}
	async getBlobsByRecord(e, t) {
		return await this.ensureCurrentSchema(), (await this.db.table(Q).toArray()).filter((n) => n.attachedTo.some((n) => n.documentId === e && n.recordRef === t));
	}
	async getStandaloneBlobs() {
		return await this.ensureCurrentSchema(), (await this.db.table(Q).toArray()).filter((e) => e.attachedTo.length === 0);
	}
	async attachBlob(e, t) {
		await this.ensureCurrentSchema();
		let n = await this.db.table(Q).get(e);
		if (n || m("STORE_BLOB_NOT_FOUND", { detail: `Blob "${e}" not found` }), n.attachedTo.some((e) => e.documentId === t.documentId && e.recordRef === t.recordRef && e.attribute === t.attribute)) return;
		let r = [...n.attachedTo, t];
		await this.db.table(Q).update(e, { attachedTo: r });
	}
	async detachBlob(e, t) {
		await this.ensureCurrentSchema();
		let n = await this.db.table(Q).get(e);
		n || m("STORE_BLOB_NOT_FOUND", { detail: `Blob "${e}" not found` });
		let r = n.attachedTo.filter((e) => !(e.documentId === t.documentId && e.recordRef === t.recordRef));
		await this.db.table(Q).update(e, { attachedTo: r });
	}
	async removeBlob(e) {
		await this.ensureCurrentSchema();
		let t = await this.db.table(Q).get(e);
		if (!t) return;
		let n = this.db.table(wn(t.documentId));
		await this.db.transaction("rw", this.db.table(Q), n, async () => {
			await n.delete(e), await this.db.table(Q).delete(e);
		});
	}
	getDatabaseInstance() {
		return this.db;
	}
	async getHead(e) {
		return (await this.db.table("_meta").get(`head:${e}`))?.value ?? 0;
	}
	async setHead(e, t) {
		await this.db.table(X).put({
			key: `head:${e}`,
			value: t
		});
	}
	buildStores(e) {
		let t = {
			[xn]: Wn(Tn),
			[Y]: Wn(En),
			[X]: Wn(Dn),
			[Q]: Wn(On)
		}, n = Wn(kn);
		for (let e of this.knownDocuments.keys()) t[this.resolveTableName(e)] = this.dexieRecordSchema, t[wn(e)] = n;
		return e?.drop && (t[this.resolveTableName(e.drop)] = null, t[wn(e.drop)] = null), t;
	}
	async reopenWithNewSchema(e) {
		this.db.close(), await qn(), this.schemaVersion++, this.db = new Mn(this.name), this.db.version(this.schemaVersion).stores(this.buildStores(e)), this.attachVersionChangeHandler(), await this.db.open(), await this.db.table(X).put({
			key: "schemaVersion",
			value: this.schemaVersion
		}), this.stale = !1;
	}
	async reloadFromPersisted() {
		this.db.isOpen() && (this.db.close(), await qn());
		let e = new Mn(this.name);
		e.version(1).stores({
			[xn]: Wn(Tn),
			[Y]: Wn(En),
			[X]: Wn(Dn),
			[Q]: Wn(On)
		});
		try {
			await e.open();
			let t = await e.table(xn).toArray(), n = await e.table(X).get("schemaVersion");
			e.close(), this.knownDocuments = new Map(t.map((e) => [e.id, e])), this.schemaVersion = n?.value ?? 1;
		} catch {
			e.close();
		}
		this.db = new Mn(this.name), this.db.version(this.schemaVersion).stores(this.buildStores()), this.attachVersionChangeHandler(), await this.db.open(), this.stale = !1;
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
		return Z(e);
	}
};
function qn() {
	return new Promise((e) => setTimeout(e, 0));
}
function Jn(e, t) {
	e.has(t) || m("DOCUMENT_NOT_REGISTERED", { detail: `Cannot add blob: owner document "${t}" is not registered` });
}
var Yn = class e {
	static {
		this.reconcileWarned = !1;
	}
	constructor(e, t) {
		this.documents = /* @__PURE__ */ new Map(), this.records = /* @__PURE__ */ new Map(), this.changelog = /* @__PURE__ */ new Map(), this.heads = /* @__PURE__ */ new Map(), this.blobs = /* @__PURE__ */ new Map(), this.blobData = /* @__PURE__ */ new Map(), this.name = e, this.writable = t?.writable ?? !0;
	}
	async open() {}
	close() {}
	async destroy() {
		this.documents.clear(), this.records.clear(), this.changelog.clear(), this.heads.clear(), this.blobs.clear(), this.blobData.clear();
	}
	async reconcile() {
		e.reconcileWarned || (e.reconcileWarned = !0, console.warn("[dialecte] InMemoryStore.reconcile() is a no-op: in-memory documents are not shared across realms/tabs. Use the local (IndexedDB) store for cross-realm sync."));
	}
	async isDocumentReadable(e) {
		return this.documents.has(e);
	}
	async registerDocument(e) {
		this.guardWritable(), this.documents.set(e.id, e), this.records.set(Z(e.id), /* @__PURE__ */ new Map()), this.blobData.set(e.id, /* @__PURE__ */ new Map());
	}
	async getDocument(e) {
		return this.documents.get(e);
	}
	async getDocuments() {
		return [...this.documents.values()];
	}
	async updateDocument(e, t) {
		this.guardWritable();
		let n = this.documents.get(e);
		n && this.documents.set(e, {
			...n,
			...t
		});
	}
	async removeDocument(e) {
		this.guardWritable(), this.documents.delete(e), this.records.delete(Z(e)), this.changelog.delete(e), this.heads.delete(e), this.blobData.delete(e);
		for (let [t, n] of this.blobs) n.documentId === e && this.blobs.delete(t);
	}
	async get(e, t) {
		if (t) return this.getTable(t).get(e);
		for (let t of this.records.values()) {
			let n = t.get(e);
			if (n) return n;
		}
	}
	async getByDocumentId(e) {
		return [...this.getTable(e).values()];
	}
	async getByTagNameInDocument(e, t) {
		let n = [];
		for (let r of this.getTable(t).values()) r.tagName === e && n.push(r);
		return n;
	}
	async bulkWrite(e, t) {
		this.guardWritable();
		let n = this.getTable(e);
		if (t.creates) for (let e of t.creates) n.set(e.id, e);
		if (t.updates) for (let { recordId: e, ...r } of t.updates) {
			let t = n.get(e);
			if (!t) continue;
			let i = { ...t };
			if (r.attributes) {
				let e = [...t.attributes];
				for (let t of r.attributes) {
					let n = e.findIndex((e) => e.name === t.name);
					n >= 0 ? e[n] = t : e.push(t);
				}
				i.attributes = e;
			}
			if (r.children) {
				let e = [...t.children];
				for (let t of r.children) {
					let n = e.findIndex((e) => e.id === t.id);
					n >= 0 ? e[n] = t : e.push(t);
				}
				i.children = e;
			}
			n.set(e, i);
		}
		if (t.deletes) for (let e of t.deletes) n.delete(e);
	}
	async commit(e) {
		this.guardWritable();
		let { documentId: t, creates: n, updates: r, deletes: i, onProgress: a } = e, o = this.getTable(t), s = n.length + r.length + i.length, c = 0, l = r.map((e) => o.get(e.id)), u = i.map((e) => o.get(e)).filter(Boolean);
		for (let e of n) o.set(e.id, e);
		c += n.length, a(c, s);
		for (let e of r) o.set(e.id, e);
		c += r.length, a(c, s);
		for (let e of i) o.delete(e);
		c += i.length, a(c, s);
		let d = this.heads.get(t) ?? 0, f = (this.changelog.get(t) ?? []).filter((e) => e.sequenceNumber <= d), p = d + 1, m = {
			id: f.length + 1,
			documentId: t,
			sequenceNumber: p,
			timestamp: Date.now(),
			operations: {
				creates: n,
				updates: r.map((e, t) => ({
					before: l[t],
					after: e
				})),
				deletes: u
			}
		};
		f.push(m), this.changelog.set(t, f), this.heads.set(t, p);
	}
	async undo(e) {
		this.guardWritable();
		let t = this.heads.get(e) ?? 0;
		if (t === 0) return;
		let n = (this.changelog.get(e) ?? []).find((e) => e.sequenceNumber === t);
		if (!n) return;
		let r = this.getTable(e), { creates: i, updates: a, deletes: o } = n.operations;
		for (let e of i) r.delete(e.id);
		for (let e of a) r.set(e.before.id, e.before);
		for (let e of o) r.set(e.id, e);
		this.heads.set(e, t - 1);
	}
	async redo(e) {
		this.guardWritable();
		let t = (this.heads.get(e) ?? 0) + 1, n = (this.changelog.get(e) ?? []).find((e) => e.sequenceNumber === t);
		if (!n) return;
		let r = this.getTable(e), { creates: i, updates: a, deletes: o } = n.operations;
		for (let e of i) r.set(e.id, e);
		for (let e of a) r.set(e.after.id, e.after);
		for (let e of o) r.delete(e.id);
		this.heads.set(e, t);
	}
	async getHistoryStatus(e) {
		let t = this.heads.get(e) ?? 0, n = this.changelog.get(e) ?? [];
		return {
			canUndo: t > 0,
			canRedo: n.some((e) => e.sequenceNumber === t + 1)
		};
	}
	async getChangeLog(e) {
		return this.changelog.get(e) ?? [];
	}
	getDatabaseInstance() {
		return null;
	}
	async addBlob(e, t) {
		this.guardWritable(), this.documents.has(e.documentId) || m("DOCUMENT_NOT_REGISTERED", { detail: `Cannot add blob: owner document "${e.documentId}" is not registered` }), this.blobs.set(e.id, e), this.getBlobTable(e.documentId).set(e.id, t);
	}
	async getBlob(e) {
		let t = this.blobs.get(e);
		if (!t) return;
		let n = this.getBlobTable(t.documentId).get(e);
		if (n) return {
			entry: t,
			data: n
		};
	}
	async getBlobsByDocument(e) {
		return [...this.blobs.values()].filter((t) => t.attachedTo.some((t) => t.documentId === e));
	}
	async getBlobsByRecord(e, t) {
		return [...this.blobs.values()].filter((n) => n.attachedTo.some((n) => n.documentId === e && n.recordRef === t));
	}
	async getStandaloneBlobs() {
		return [...this.blobs.values()].filter((e) => e.attachedTo.length === 0);
	}
	async attachBlob(e, t) {
		this.guardWritable();
		let n = this.blobs.get(e);
		n || m("STORE_BLOB_NOT_FOUND", { detail: `Blob "${e}" not found` }), !n.attachedTo.some((e) => e.documentId === t.documentId && e.recordRef === t.recordRef && e.attribute === t.attribute) && this.blobs.set(e, {
			...n,
			attachedTo: [...n.attachedTo, t]
		});
	}
	async detachBlob(e, t) {
		this.guardWritable();
		let n = this.blobs.get(e);
		n || m("STORE_BLOB_NOT_FOUND", { detail: `Blob "${e}" not found` });
		let r = n.attachedTo.filter((e) => !(e.documentId === t.documentId && e.recordRef === t.recordRef));
		this.blobs.set(e, {
			...n,
			attachedTo: r
		});
	}
	async removeBlob(e) {
		this.guardWritable();
		let t = this.blobs.get(e);
		t && (this.blobs.delete(e), this.getBlobTable(t.documentId).delete(e));
	}
	getBlobTable(e) {
		let t = this.blobData.get(e);
		return t || (t = /* @__PURE__ */ new Map(), this.blobData.set(e, t)), t;
	}
	getTable(e) {
		let t = Z(e), n = this.records.get(t);
		return n || (n = /* @__PURE__ */ new Map(), this.records.set(t, n)), n;
	}
	guardWritable() {
		this.writable || m("STORE_NOT_WRITABLE", { detail: "In-memory store is read-only. Hydrate with a real document before writing." });
	}
};
function Xn(e, t, n) {
	return t.type === "local" ? new Kn(e, { recordSchema: n.database.recordSchema }) : t.type === "inMemory" ? new Yn(e, { writable: t.writable ?? !0 }) : t.store;
}
async function Zn(e) {
	let { documentId: t, state: n, configs: r, store: i, projectName: a, options: o } = e, s = n.documents.get(t);
	w(s, {
		key: "DOCUMENT_NOT_REGISTERED",
		detail: `Document "${t}" not registered in project "${a}"`
	});
	let c = r[s.record.configKey], l = Ct({
		records: await i.getByDocumentId(t),
		config: c,
		withDatabaseIds: o?.withDatabaseIds
	}), u = `${s.record.name}${s.record.extension}`;
	return o?.withDownload && await St({
		extension: s.record.extension,
		xmlDocument: l,
		filename: u
	}), {
		xmlDocument: l,
		filename: u
	};
}
async function Qn(e) {
	let { blobId: t, store: n, options: r } = e, i = await n.getBlob(t);
	w(i, {
		key: "BLOB_NOT_FOUND",
		detail: `Blob "${t}" not found in store`
	});
	let a = i.entry.name;
	return r?.withDownload && await ee({
		data: i.data,
		filename: a
	}), {
		entry: i.entry,
		data: i.data,
		filename: a
	};
}
function $n(e) {
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
function er(e, t) {
	let n = new Set(t.map((e) => e.id));
	for (let n of t) e.has(n.id) || e.set(n.id, $n(n));
	for (let t of e.keys()) n.has(t) || e.delete(t);
	return e;
}
async function tr(e) {
	let { file: t, store: n, configs: r, defaultConfigKey: i, options: a, hooks: o } = e, s = a?.configKey ?? i, c = r[s];
	w(c, {
		key: "UNKNOWN_CONFIG_KEY",
		detail: `Unknown configKey: "${s}". Available: ${Object.keys(r).join(", ")}`
	});
	let l = crypto.randomUUID(), u = t.name.includes(".") ? `.${t.name.split(".").pop()}` : c.io.supportedFileExtensions[0], d = {
		id: l,
		name: t.name.replace(/\.[^.]+$/, "") || "untitled",
		extension: u,
		configKey: s,
		createdAt: Date.now(),
		metadata: a?.metadata
	};
	await n.registerDocument(d);
	let { recordCount: f } = await Kt({
		file: t,
		documentId: l,
		store: n,
		config: c,
		useCustomRecordsIds: a?.useCustomRecordsIds,
		chunkOptions: a?.chunkOptions,
		hooks: o
	});
	return {
		documentId: l,
		record: d,
		documentState: $n(d),
		recordCount: f
	};
}
async function nr(e) {
	let { store: t, configs: n, defaultConfigKey: r, options: i, hooks: a } = e, o = i?.configKey ?? r, s = n[o];
	w(s, {
		key: "UNKNOWN_CONFIG_KEY",
		detail: `Unknown configKey: "${o}". Available: ${Object.keys(n).join(", ")}`
	});
	let c = i?.extension ?? s.io.supportedFileExtensions[0], l = i?.name ?? "untitled", u = crypto.randomUUID(), d = {
		id: u,
		name: l,
		extension: c,
		configKey: o,
		createdAt: Date.now(),
		metadata: i?.metadata
	};
	await t.registerDocument(d);
	let f = oe({
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
	return await t.bulkWrite(u, { creates: [f] }), {
		documentId: u,
		record: d,
		documentState: $n(d)
	};
}
var $ = class {
	get name() {
		return w(this._name !== void 0, {
			key: "PROJECT_NOT_OPENED",
			detail: "Call project.open(name) before accessing project properties."
		}), this._name;
	}
	get store() {
		return w(this._store !== void 0, {
			key: "PROJECT_NOT_OPENED",
			detail: "Call project.open(name) before accessing project properties."
		}), this._store;
	}
	get channel() {
		return w(this._channel !== void 0, {
			key: "PROJECT_NOT_OPENED",
			detail: "Call project.open(name) before accessing project properties."
		}), this._channel;
	}
	get channelName() {
		return `dialecte::project::${this.name}`;
	}
	createChannel() {
		return new BroadcastChannel(this.channelName);
	}
	notify(e) {
		this.channel.postMessage(e);
	}
	constructor(e) {
		this.closing = !1, this.pendingBroadcastWork = /* @__PURE__ */ new Set(), this.state = {
			documents: /* @__PURE__ */ new Map(),
			activeTransactions: 0
		};
		let t = Object.keys(e.configs);
		this.storage = e.storage, this.configs = e.configs, this.defaultConfigKey = e.defaultConfigKey ?? t[0], this.hooks = e.hooks, this.mergedExtensions = e.extensions ? se({
			base: e.extensions.base,
			custom: e.extensions.custom
		}) : void 0;
	}
	async open(e) {
		this._name = e, this.closing = !1, this._channel = new BroadcastChannel(this.channelName), this._channel.addEventListener("message", (e) => {
			this.onChannelMessage(e.data);
		});
		let t = Xn(e, this.storage, this.configs[this.defaultConfigKey]);
		await t.open(), this._store = t;
		let n = await t.getDocuments();
		for (let e of n) this.state.documents.set(e.id, $n(e));
		return await Promise.all(n.map((e) => this.refreshHistoryStatus(e.id))), this;
	}
	onChannelMessage(e) {
		if (!this.closing) switch (e?.type) {
			case "init-empty-document":
			case "document-removed":
			case "document-imported":
				this.trackBroadcastWork(this.reconcileFromBroadcast(e.documentId));
				break;
			case "commit": {
				let t = this.state.documents.get(e.documentId);
				t && (t.lastUpdate = e.timestamp ?? Date.now()), this.trackBroadcastWork(this.refreshHistoryStatus(e.documentId));
				break;
			}
		}
	}
	trackBroadcastWork(e) {
		let t = e.catch(() => {}).finally(() => {
			this.pendingBroadcastWork.delete(t);
		});
		this.pendingBroadcastWork.add(t);
	}
	async refreshHistoryStatus(e) {
		if (this.closing) return;
		let t = this.state.documents.get(e);
		if (!t) return;
		let { canUndo: n, canRedo: r } = await this.store.getHistoryStatus(e);
		t.canUndo = n, t.canRedo = r;
	}
	close() {
		this.closing = !0, this._channel?.close(), this.store.close();
	}
	async destroy() {
		this.closing = !0, this._channel?.close(), await Promise.allSettled(this.pendingBroadcastWork), await this.store.destroy(), this.state.documents.clear();
	}
	async initEmptyDocument(e) {
		let t = await nr({
			store: this.store,
			configs: this.configs,
			defaultConfigKey: this.defaultConfigKey,
			options: e,
			hooks: this.hooks
		});
		return this.state.documents.set(t.documentId, t.documentState), this.notify({
			type: "init-empty-document",
			documentId: t.documentId,
			timestamp: Date.now()
		}), t.documentId;
	}
	async removeDocument(e) {
		await this.store.removeDocument(e), this.state.documents.delete(e), this.notify({
			type: "document-removed",
			documentId: e,
			timestamp: Date.now()
		});
	}
	async import(e, t) {
		let n = await Promise.all(e.map((e) => tr({
			file: e,
			store: this.store,
			configs: this.configs,
			defaultConfigKey: this.defaultConfigKey,
			options: t,
			hooks: this.hooks
		})));
		for (let e of n) this.state.documents.set(e.documentId, e.documentState), this.notify({
			type: "document-imported",
			documentId: e.documentId,
			timestamp: Date.now()
		});
		return n.map(({ documentId: e, recordCount: t }) => ({
			documentId: e,
			recordCount: t
		}));
	}
	async export(e, t) {
		return Zn({
			documentId: e,
			state: this.state,
			configs: this.configs,
			store: this.store,
			projectName: this.name,
			options: t
		});
	}
	async getDocuments() {
		return this.store.getDocuments();
	}
	async getDocument(e) {
		return this.store.getDocument(e);
	}
	openDocument(e) {
		let t = this.state.documents.get(e);
		w(t, {
			key: "DOCUMENT_NOT_REGISTERED",
			detail: `Document "${e}" not registered in project "${this.name}"`
		});
		let n = this.configs[t.record.configKey];
		return new bn(this.store, n, e, this.mergedExtensions, this.hooks, {
			state: t,
			channelName: this.channelName,
			notify: (e) => this.notify(e),
			refreshHistoryStatus: () => this.refreshHistoryStatus(e)
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
		let t = this.state.documents.get(e);
		w(t, {
			key: "DOCUMENT_NOT_REGISTERED",
			detail: `Document "${e}" not registered in project "${this.name}"`
		}), await this.store.undo(e);
		let n = Date.now();
		t.lastUpdate = n, await this.refreshHistoryStatus(e), this.notify({
			type: "commit",
			documentId: e,
			timestamp: n
		});
	}
	async redo(e) {
		let t = this.state.documents.get(e);
		w(t, {
			key: "DOCUMENT_NOT_REGISTERED",
			detail: `Document "${e}" not registered in project "${this.name}"`
		}), await this.store.redo(e);
		let n = Date.now();
		t.lastUpdate = n, await this.refreshHistoryStatus(e), this.notify({
			type: "commit",
			documentId: e,
			timestamp: n
		});
	}
	async addBlob(e, t, n = []) {
		let r = {
			id: crypto.randomUUID(),
			documentId: e,
			name: t.name,
			mimeType: t.type || void 0,
			size: t.size,
			createdAt: Date.now(),
			attachedTo: n
		};
		return await this.store.addBlob(r, t), this.notify({
			type: "blob-added",
			blobId: r.id,
			documentId: e,
			timestamp: Date.now()
		}), r.id;
	}
	async getBlob(e) {
		return this.store.getBlob(e);
	}
	async exportBlob(e, t) {
		return Qn({
			blobId: e,
			store: this.store,
			options: t
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
		await this.store.attachBlob(e, t), this.notify({
			type: "blob-attached",
			blobId: e,
			ref: t,
			timestamp: Date.now()
		});
	}
	async detachBlob(e, t) {
		await this.store.detachBlob(e, t), this.notify({
			type: "blob-detached",
			blobId: e,
			ref: t,
			timestamp: Date.now()
		});
	}
	async removeBlob(e) {
		await this.store.removeBlob(e), this.notify({
			type: "blob-removed",
			blobId: e,
			timestamp: Date.now()
		});
	}
	async queryFirst(e) {
		for (let t of this.state.documents.keys()) {
			let n = await e(this.openDocument(t).query);
			if (n !== void 0) return n;
		}
	}
	async queryAll(e) {
		let t = [];
		for (let n of this.state.documents.keys()) {
			let r = await e(this.openDocument(n).query);
			t.push(...r);
		}
		return t;
	}
	getDatabaseInstance() {
		return this.store.getDatabaseInstance();
	}
	async refreshState() {
		let e = await this.store.getDocuments();
		er(this.state.documents, e);
	}
	async reconcileFromBroadcast(e) {
		this.closing || (await this.store.reconcile(e), await this.refreshState());
	}
};
//#endregion
//#region node_modules/.pnpm/@dialecte+nsd@0.1.9/node_modules/@dialecte/nsd/dist/v2017A/index.js
function rr(e) {
	let { storage: t = { type: "local" }, extensions: n } = e ?? {};
	return new $({
		configs: {
			nsd: ge,
			nsdoc: _e
		},
		defaultConfigKey: "nsd",
		storage: t,
		extensions: {
			base: ve,
			custom: n
		}
	});
}
//#endregion
//#region src/nsd/utils/nsd-project.ts
var ir = "SET-LIBRARY-NSD", ar = null;
function or() {
	return ar ||= rr().open(ir), ar;
}
var sr = i(0);
function cr() {
	sr.value++;
}
//#endregion
//#region src/nsd/utils/query-nsd-metadata.ts
async function lr(e) {
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
function ur(e) {
	return e.replace(/__+/g, "-").replace(/[\s_]/g, "").toLowerCase();
}
function dr(e) {
	let t = [
		e.version,
		e.revision?.toUpperCase(),
		e.release
	].filter((e) => !!e);
	return t.length ? t.join(".") : "-";
}
function fr(e, t) {
	return {
		fileName: e,
		isExtension: t.isExtension,
		isNsdoc: t.isNsdoc,
		versionRevisionRelease: dr(t)
	};
}
function pr(e) {
	let t = e.id.replace(/\s+/g, "_");
	if (!e.version || !e.revision) return `${t}.nsd`;
	let n = e.revision.toUpperCase();
	return `${t}_${e.version}${n}${e.release}.nsd`;
}
//#endregion
export { lr as a, cr as c, c as d, ur as i, he as l, dr as n, or as o, pr as r, sr as s, fr as t, f as u };
