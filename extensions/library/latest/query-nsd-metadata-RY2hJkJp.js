import { I as e, N as t, Q as n, _ as r, a as i, c as a, d as o, f as s, g as c, h as l, l as u, m as d, o as f, p, s as m, u as h, xt as g } from "./main-CcXYMGUl.js";
//#region src/nsd/icons/close-icon.vue
var _ = {}, v = {
	viewBox: "0 0 64 64",
	"aria-hidden": "true",
	focusable: "false"
};
function y(r, i) {
	return n(), e("svg", v, [...i[0] ||= [t("path", {
		fill: "currentColor",
		d: "M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z"
	}, null, -1)]]);
}
var b = /* @__PURE__ */ r(_, [["render", y]]), x = {}, S = {
	viewBox: "0 -960 960 960",
	"aria-hidden": "true",
	focusable: "false"
};
function C(r, i) {
	return n(), e("svg", S, [...i[0] ||= [t("path", {
		fill: "currentColor",
		d: "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
	}, null, -1)]]);
}
var ee = /* @__PURE__ */ r(x, [["render", C]]), w = `${{
	uri: "http://dialecte.dev/XML/DEV",
	prefix: "dev"
}.prefix}:db-id`, te = {
	uri: "http://www.w3.org/2001/XMLSchema-instance",
	prefix: "xsi"
};
`${te.prefix}${te.uri}`;
function T(e, t) {
	return e.tagName === t;
}
function E(e) {
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
function ne(e) {
	let { record: t, status: n } = e, r = n ?? ("status" in t ? t.status : "unchanged");
	return {
		...E(t),
		status: r
	};
}
function re(e) {
	let { record: t, status: n, tree: r } = e, i = r ?? ("tree" in t ? t.tree : []);
	return {
		...ne({
			record: t,
			status: n
		}),
		tree: i
	};
}
function ie(e) {
	let { dialecteConfig: t, tagName: n, attributes: r } = e;
	return (Array.isArray(r) ? r : Object.entries(r).map(([e, r]) => ({
		name: e,
		value: r,
		namespace: t.definition[n]?.attributes.details[e]?.namespace || void 0
	}))).map((e) => D({
		attribute: e,
		dialecteConfig: t,
		tagName: n
	}));
}
function D(e) {
	let { attribute: t, dialecteConfig: n, tagName: r } = e, i;
	typeof t.namespace == "string" ? (i = o(n, t.namespace), i || d("UNKNOWN_NAMESPACE_PREFIX", {
		detail: `Unknown namespace '${t.namespace}' on attribute '${t.name}' — use a registered namespace key or pass a full { name, namespace: { prefix, uri } }.`,
		ref: { tagName: r }
	})) : i = t.namespace;
	let s = t.name.indexOf(":");
	if (!i && s !== -1) {
		let e = t.name.slice(0, s);
		e !== "xmlns" && (i = a(n, e), i || d("UNKNOWN_NAMESPACE_PREFIX", {
			detail: `Unknown namespace prefix '${e}' on attribute '${t.name}' — pass it explicitly as { name, namespace: { prefix, uri } }.`,
			ref: { tagName: r }
		}));
	}
	return i && i.prefix && i.prefix !== "xmlns" ? {
		...t,
		name: `${i.prefix}:${p(t.name)}`,
		namespace: i
	} : (t.namespace, {
		...t,
		namespace: i
	});
}
function O(e) {
	return m(e, { detail: "The record or ref is undefined" }), {
		id: e.id,
		tagName: e.tagName
	};
}
function ae(e) {
	let { dialecteConfig: t, hooks: n, record: r } = e, { id: i, tagName: a, attributes: o, namespace: c, value: l } = r, d = r.parent?.tagName, f = i ?? crypto.randomUUID(), p = o ? ie({
		tagName: a,
		attributes: o,
		dialecteConfig: t
	}) : [], m = {
		id: f,
		tagName: a,
		attributes: p,
		namespace: c ?? {
			prefix: "prefixNeededForNotSupportedNamespace",
			uri: "uriNeededForNotSupportedNamespace"
		},
		value: l ?? "",
		parent: r.parent ?? null,
		children: r.children ?? []
	}, h = Object.values(t.namespaces).map(({ uri: e }) => e), g = c?.uri != null && !h.includes(c.uri);
	if (!(t.elements.includes(a) && !g)) return m;
	let _ = s({
		dialecteConfig: t,
		record: m
	})?.attributes.sequence ?? [], v = p.filter((e) => {
		let t = _.includes(e.name), n = "namespace" in e && e.namespace != null;
		if (!t && !n) return !1;
		let r = e.value === void 0 || e.value === null || e.value === "";
		return !(t && r);
	}), y = t.namespaces.default.uri, b = v.map((e) => {
		if ("namespace" in e && e.namespace?.uri === y) {
			let { namespace: t, ...n } = e;
			return n;
		}
		return e;
	}), x = d ? t.definition[d]?.children?.details?.[a]?.namespace : void 0, S = {
		...m,
		namespace: x ?? t.definition[a].namespace,
		attributes: u(b, _)
	};
	return n?.afterStandardizedRecord && (S = n.afterStandardizedRecord({ record: S }), S = {
		...S,
		attributes: u(S.attributes, _)
	}), S;
}
function k(e) {
	let { dialecteConfig: t, record: n, attributes: r } = e;
	for (let e of r) {
		let r = h({
			dialecteConfig: t,
			record: n,
			attributeName: e.name
		});
		r.fixed !== void 0 && e.value !== r.fixed && d("FIXED_VALUE_VIOLATION", {
			detail: `Attribute '${e.name}' on '${n.tagName}' is fixed to '${r.fixed}' but was set to '${String(e.value)}'.`,
			ref: { tagName: n.tagName }
		});
	}
}
function oe(e, t, n, r) {
	if (!e || !t) return;
	let i = Object.keys(t).filter((t) => t in e);
	m(i.length === 0, {
		key: "EXTENSION_METHOD_COLLISION",
		detail: `Module "${n}" has conflicting ${r} method(s): ${i.map((e) => `"${e}"`).join(", ")}`
	});
}
function A(e) {
	let t = {}, n = {}, r = [...Object.entries(e.base ?? {}), ...Object.entries(e.custom ?? {})];
	for (let [e, i] of r) i.query && (oe(t[e], i.query, e, "query"), t[e] = {
		...t[e],
		...i.query
	}), i.transaction && (oe(n[e], i.transaction, e, "transaction"), n[e] = {
		...n[e],
		...i.transaction
	});
	return {
		query: t,
		transaction: n
	};
}
//#endregion
//#region node_modules/.pnpm/@dialecte+nsd@0.2.1/node_modules/@dialecte/nsd/dist/config-BLOG_zbu.js
var se = /* @__PURE__ */ "Abbreviation.Abbreviations.AbstractLNClass.ApplicableServiceNS.ApplicableServices.AppliesTo.BasicType.BasicTypes.CDC.CDCs.Changes.ConstructedAttribute.ConstructedAttributes.Copyright.DataAttribute.DataObject.DataSetMemberOf.DependsOn.Doc.Enumeration.Enumerations.FunctionalConstraint.FunctionalConstraints.LNClass.LNClasses.License.Literal.NS.NSDoc.Notice.PresenceCondition.PresenceConditions.Service.ServiceCDC.ServiceCDCs.ServiceConstructedAttribute.ServiceConstructedAttributes.ServiceDataAttribute.ServiceNS.ServiceNsUsage.ServiceParameter.ServiceTypeRealization.ServiceTypeRealizations.SubDataAttribute.SubDataObject".split("."), ce = {
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
}, le = {
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
}, j = {
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
}, ue = {
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
}, de = [
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
}, N = {
	byTag: M,
	byParent: {
		Abbreviations: { Abbreviation: M.Abbreviation },
		AbstractLNClass: { DataObject: M.DataObject },
		ApplicableServiceNS: {
			Copyright: M.Copyright,
			ServiceNsUsage: M.ServiceNsUsage
		},
		ApplicableServices: {
			Service: M.Service,
			DataSetMemberOf: M.DataSetMemberOf
		},
		BasicTypes: { BasicType: M.BasicType },
		CDC: {
			SubDataObject: M.SubDataObject,
			DataAttribute: M.DataAttribute,
			ServiceParameter: M.ServiceParameter
		},
		CDCs: { CDC: M.CDC },
		ConstructedAttribute: { SubDataAttribute: M.SubDataAttribute },
		ConstructedAttributes: { ConstructedAttribute: M.ConstructedAttribute },
		Copyright: {
			Notice: M.Notice,
			License: M.License
		},
		Enumeration: { Literal: M.Literal },
		Enumerations: { Enumeration: M.Enumeration },
		FunctionalConstraint: { ApplicableServices: M.ApplicableServices },
		FunctionalConstraints: { FunctionalConstraint: M.FunctionalConstraint },
		LNClass: { DataObject: M.DataObject },
		LNClasses: {
			AbstractLNClass: M.AbstractLNClass,
			LNClass: M.LNClass
		},
		NS: {
			Copyright: M.Copyright,
			Changes: M.Changes,
			DependsOn: M.DependsOn,
			BasicTypes: M.BasicTypes,
			FunctionalConstraints: M.FunctionalConstraints,
			PresenceConditions: M.PresenceConditions,
			Abbreviations: M.Abbreviations,
			Enumerations: M.Enumerations,
			ConstructedAttributes: M.ConstructedAttributes,
			CDCs: M.CDCs,
			LNClasses: M.LNClasses
		},
		NSDoc: {
			Copyright: M.Copyright,
			Doc: M.Doc
		},
		PresenceConditions: { PresenceCondition: M.PresenceCondition },
		ServiceCDC: { ServiceDataAttribute: M.ServiceDataAttribute },
		ServiceCDCs: { ServiceCDC: M.ServiceCDC },
		ServiceConstructedAttribute: { SubDataAttribute: M.SubDataAttribute },
		ServiceConstructedAttributes: { ServiceConstructedAttribute: M.ServiceConstructedAttribute },
		ServiceNS: {
			Copyright: M.Copyright,
			Changes: M.Changes,
			FunctionalConstraints: M.FunctionalConstraints,
			PresenceConditions: M.PresenceConditions,
			Abbreviations: M.Abbreviations,
			ServiceTypeRealizations: M.ServiceTypeRealizations,
			ServiceConstructedAttributes: M.ServiceConstructedAttributes,
			ServiceCDCs: M.ServiceCDCs
		},
		ServiceNsUsage: { AppliesTo: M.AppliesTo },
		ServiceTypeRealization: { SubDataAttribute: M.SubDataAttribute },
		ServiceTypeRealizations: { ServiceTypeRealization: M.ServiceTypeRealization }
	}
}, fe = {
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
				descID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				name: {
					type: { builtin: "normalizedString" },
					required: !0
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
				base: {
					type: { builtin: "Name" },
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				deprecated: {
					type: { builtin: "boolean" },
					default: "false"
				},
				descID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				informative: {
					type: { builtin: "boolean" },
					default: "false"
				},
				name: {
					type: { builtin: "Name" },
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				titleID: {
					type: { builtin: "normalizedString" },
					required: !0,
					facets: { minLength: 1 }
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: ["DataObject"],
			details: { DataObject: {} }
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
					type: { builtin: "dateTime" },
					required: !0
				},
				version: {
					type: { builtin: "unsignedInt" },
					required: !0,
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295
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
					type: { builtin: "normalizedString" },
					required: !0,
					facets: { pattern: ["\\x00-\\x7f+"] }
				},
				publicationStage: {
					type: { builtin: "token" },
					default: "IS",
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
				},
				release: {
					type: { builtin: "unsignedByte" },
					default: "1",
					facets: {
						minInclusive: 0,
						maxInclusive: 255,
						minExclusive: 0
					}
				},
				revision: {
					type: { builtin: "token" },
					default: "A",
					facets: { pattern: ["[A-Z]"] }
				},
				version: {
					type: { builtin: "unsignedShort" },
					required: !0,
					facets: {
						minInclusive: 2002,
						maxInclusive: 2099
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
				descID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				name: {
					type: { builtin: "token" },
					required: !0,
					facets: { minLength: 1 }
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
					type: { builtin: "boolean" },
					default: "false"
				},
				descID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				enumParameterized: {
					type: { builtin: "boolean" },
					default: "false"
				},
				informative: {
					type: { builtin: "boolean" },
					default: "false"
				},
				name: {
					type: { builtin: "Name" },
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				statistics: {
					type: { builtin: "boolean" },
					default: "false"
				},
				titleID: {
					type: { builtin: "normalizedString" },
					required: !0,
					facets: { minLength: 1 }
				},
				typeKindParameterized: {
					type: { builtin: "boolean" },
					default: "false"
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
			details: {
				SubDataObject: {},
				DataAttribute: {
					required: !0,
					minOccurs: 1
				},
				ServiceParameter: { maxOccurs: 1 }
			}
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
				changesID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				date: { type: { builtin: "date" } },
				release: {
					type: { builtin: "unsignedByte" },
					default: "1",
					facets: {
						minInclusive: 0,
						maxInclusive: 255,
						minExclusive: 0
					}
				},
				revision: {
					type: { builtin: "token" },
					default: "A",
					facets: { pattern: ["[A-Z]"] }
				},
				tissues: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				version: {
					type: { builtin: "unsignedShort" },
					required: !0,
					facets: {
						minInclusive: 2002,
						maxInclusive: 2099
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
					type: { builtin: "boolean" },
					default: "false"
				},
				descID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				informative: {
					type: { builtin: "boolean" },
					default: "false"
				},
				name: {
					type: { builtin: "Name" },
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				titleID: {
					type: { builtin: "normalizedString" },
					required: !0,
					facets: { minLength: 1 }
				},
				typeKindParameterized: { default: "false" },
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
					type: { builtin: "boolean" },
					default: "false"
				},
				defaultValue: { type: { builtin: "normalizedString" } },
				deprecated: {
					type: { builtin: "boolean" },
					default: "false"
				},
				descID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				dupd: {
					type: { builtin: "boolean" },
					default: "false"
				},
				fc: {
					type: { builtin: "token" },
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f]+"],
						minLength: 1
					}
				},
				informative: {
					type: { builtin: "boolean" },
					default: "false"
				},
				isArray: {
					type: { builtin: "boolean" },
					default: "false"
				},
				maxIndexAttribute: {
					type: { builtin: "Name" },
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				maxValue: { type: { builtin: "decimal" } },
				minIndex: {
					type: { builtin: "unsignedInt" },
					default: "0",
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295
					}
				},
				minValue: { type: { builtin: "decimal" } },
				name: {
					type: { builtin: "Name" },
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				presCond: {
					type: { builtin: "normalizedString" },
					default: "M"
				},
				presCondArgs: { type: { builtin: "normalizedString" } },
				presCondArgsID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				qchg: {
					type: { builtin: "boolean" },
					default: "false"
				},
				sizeAttribute: {
					type: { builtin: "Name" },
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				type: {
					type: { builtin: "Name" },
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				typeKind: {
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
					}] },
					default: "BASIC",
					facets: { enumeration: [
						"BASIC",
						"ENUMERATED",
						"CONSTRUCTED",
						"undefined"
					] }
				}
			},
			identityFields: ["name"]
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
					type: { builtin: "boolean" },
					default: "false"
				},
				descID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				dsPresCond: {
					type: { builtin: "normalizedString" },
					default: "M"
				},
				dsPresCondArgs: { type: { builtin: "normalizedString" } },
				dsPresCondArgsID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				informative: {
					type: { builtin: "boolean" },
					default: "false"
				},
				name: {
					type: { builtin: "Name" },
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1,
						maxLength: 12
					}
				},
				presCond: {
					type: { builtin: "normalizedString" },
					default: "M"
				},
				presCondArgs: { type: { builtin: "normalizedString" } },
				presCondArgsID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				transient: {
					type: { builtin: "boolean" },
					default: "false"
				},
				type: {
					type: { builtin: "Name" },
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				underlyingType: {
					type: { builtin: "Name" },
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				underlyingTypeKind: {
					type: { builtin: "token" },
					facets: { enumeration: [
						"BASIC",
						"ENUMERATED",
						"CONSTRUCTED"
					] }
				}
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
				type: { builtin: "normalizedString" },
				required: !0,
				facets: { enumeration: [
					"RCB",
					"LCB",
					"GoCB",
					"SVCB"
				] }
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
					type: { builtin: "normalizedString" },
					required: !0,
					facets: { pattern: ["\\x00-\\x7f+"] }
				},
				publicationStage: {
					type: { builtin: "token" },
					default: "IS",
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
				},
				release: {
					type: { builtin: "unsignedByte" },
					default: "1",
					facets: {
						minInclusive: 0,
						maxInclusive: 255,
						minExclusive: 0
					}
				},
				revision: {
					type: { builtin: "token" },
					default: "A",
					facets: { pattern: ["[A-Z]"] }
				},
				version: {
					type: { builtin: "unsignedShort" },
					required: !0,
					facets: {
						minInclusive: 2002,
						maxInclusive: 2099
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
				type: { builtin: "normalizedString" },
				required: !0,
				facets: { minLength: 1 }
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
				namespace: ["##any"],
				processContents: "lax",
				minOccurs: 1,
				maxOccurs: 1
			}]
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
					type: { builtin: "boolean" },
					default: "false"
				},
				descID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				informative: {
					type: { builtin: "boolean" },
					default: "false"
				},
				inheritedFrom: {
					type: { builtin: "Name" },
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				name: {
					type: { builtin: "Name" },
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				titleID: {
					type: { builtin: "normalizedString" },
					required: !0,
					facets: { minLength: 1 }
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
					type: { builtin: "token" },
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f]+"],
						minLength: 1
					}
				},
				descID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				titleID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				}
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
				base: {
					type: { builtin: "Name" },
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				canHaveLOG: {
					type: { builtin: "boolean" },
					default: "false"
				},
				deprecated: {
					type: { builtin: "boolean" },
					default: "false"
				},
				descID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				informative: {
					type: { builtin: "boolean" },
					default: "false"
				},
				isExtension: {
					type: { builtin: "boolean" },
					default: "false"
				},
				name: {
					type: { builtin: "Name" },
					required: !0,
					facets: { pattern: [
						"LLN0",
						"[A-Z]{4}",
						"[A-Za-z_:][-.:0-9A-Z_a-z]*"
					] }
				},
				titleID: {
					type: { builtin: "normalizedString" },
					required: !0,
					facets: { minLength: 1 }
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: ["DataObject"],
			details: { DataObject: {} }
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
				kind: {
					type: { builtin: "Name" },
					facets: {
						enumeration: [
							"Standard",
							"Private",
							"None"
						],
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"]
					}
				},
				uri: { type: { builtin: "normalizedString" } }
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
					type: { builtin: "boolean" },
					default: "false"
				},
				descID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				informative: {
					type: { builtin: "boolean" },
					default: "false"
				},
				literalVal: {
					type: { builtin: "int" },
					required: !0,
					facets: {
						minInclusive: -2147483648,
						maxInclusive: 2147483647
					}
				},
				name: {
					type: { builtin: "normalizedString" },
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]*"],
						maxLength: 127
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
				descID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				id: {
					type: { builtin: "normalizedString" },
					required: !0,
					facets: { pattern: ["\\x00-\\x7f+"] }
				},
				publicationStage: {
					type: { builtin: "token" },
					default: "IS",
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
				},
				release: {
					type: { builtin: "unsignedByte" },
					default: "1",
					facets: {
						minInclusive: 0,
						maxInclusive: 255,
						minExclusive: 0
					}
				},
				revision: {
					type: { builtin: "token" },
					default: "A",
					facets: { pattern: ["[A-Z]"] }
				},
				umlDate: { type: { builtin: "dateTime" } },
				umlVersion: {
					type: { builtin: "Name" },
					facets: {
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				version: {
					type: { builtin: "unsignedShort" },
					required: !0,
					facets: {
						minInclusive: 2002,
						maxInclusive: 2099
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
						maxOccurs: 1
					},
					{
						kind: "element",
						name: "PresenceConditions",
						maxOccurs: 1
					},
					{
						kind: "element",
						name: "Abbreviations",
						maxOccurs: 1
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
					type: { builtin: "normalizedString" },
					required: !0,
					facets: { pattern: ["\\x00-\\x7f+"] }
				},
				lang: {
					type: { builtin: "language" },
					required: !0,
					facets: { pattern: ["[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*"] }
				},
				publicationStage: {
					type: { builtin: "token" },
					default: "IS",
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
				},
				release: {
					type: { builtin: "unsignedByte" },
					default: "1",
					facets: {
						minInclusive: 0,
						maxInclusive: 255,
						minExclusive: 0
					}
				},
				revision: {
					type: { builtin: "token" },
					default: "A",
					facets: { pattern: ["[A-Z]"] }
				},
				umlDate: { type: { builtin: "dateTime" } },
				umlVersion: {
					type: { builtin: "Name" },
					facets: {
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				version: {
					type: { builtin: "unsignedShort" },
					required: !0,
					facets: {
						minInclusive: 2002,
						maxInclusive: 2099
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
				argument: { type: { builtin: "normalizedString" } },
				descID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				name: {
					type: { builtin: "normalizedString" },
					required: !0
				},
				titleID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				}
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
				type: { builtin: "token" },
				required: !0,
				facets: { enumeration: /* @__PURE__ */ "Associate.Abort.Release.GetServerDirectory.GetLogicalDeviceDirectory.GetAllDataValues.GetDataValues.SetDataValues.GetDataDirectory.GetDataDefinition.GetDataSetValues.SetDataSetValues.CreateDataSet.DeleteDataSet.GetDataSetDirectory.SelectActiveSG.SelectEditSG.SetEditSGValue.ConfirmEditSGValues.GetEditSGValue.GetSGCBValues.Report.GetBRCBValues.SetBRCBValues.GetURCBValues.SetURCBValues.GetLCBValues.SetLCBValues.QueryLogByTime.QueryLogAfter.GetLogStatusValues.SendGOOSEMessage.GetGoCBValues.SetGoCBValues.GetGoReference.GetGOOSEElementNumber.SendMSVMessage.GetMSVCBValues.SetMSVCBValues.SendUSVMessage.GetUSVCBValues.SetUSVCBValues.Select.SelectWithValue.Cancel.Operate.CommandTermination.TimeActivatedOperate.GetFile.SetFile.DeleteFile.GetFileAttributeValues.TimeSynchronization.InternalChange.GetLogicalNodeDirectory.GetMsvReference.GetMSVElementNumber.GetUsvReference.GetUSVElementNumber".split(".") }
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
					type: { builtin: "Name" },
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				variant: { type: { builtin: "token" } }
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
					type: { builtin: "boolean" },
					default: "false"
				},
				descID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				informative: {
					type: { builtin: "boolean" },
					default: "false"
				},
				name: {
					type: { builtin: "Name" },
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				titleID: {
					type: { builtin: "normalizedString" },
					required: !0,
					facets: { minLength: 1 }
				},
				typeKindParameterized: {
					type: { builtin: "boolean" },
					default: "false"
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
					type: { builtin: "boolean" },
					default: "false"
				},
				descID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				fc: {
					type: { builtin: "token" },
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f]+"],
						minLength: 1
					}
				},
				informative: {
					type: { builtin: "boolean" },
					default: "false"
				},
				name: {
					type: { builtin: "Name" },
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				presCond: {
					type: { builtin: "normalizedString" },
					default: "M"
				},
				presCondArgs: { type: { builtin: "normalizedString" } },
				presCondArgsID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				type: {
					type: { builtin: "Name" },
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				typeKind: {
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
					}] },
					default: "BASIC",
					facets: { enumeration: [
						"BASIC",
						"ENUMERATED",
						"CONSTRUCTED",
						"undefined"
					] }
				},
				underlyingType: {
					type: { builtin: "Name" },
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				underlyingTypeKind: {
					type: { builtin: "token" },
					facets: { enumeration: [
						"BASIC",
						"ENUMERATED",
						"CONSTRUCTED"
					] }
				}
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
				descID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				id: {
					type: { builtin: "normalizedString" },
					required: !0,
					facets: { pattern: ["\\x00-\\x7f+"] }
				},
				publicationStage: {
					type: { builtin: "token" },
					default: "IS",
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
				},
				release: {
					type: { builtin: "unsignedByte" },
					default: "1",
					facets: {
						minInclusive: 0,
						maxInclusive: 255,
						minExclusive: 0
					}
				},
				revision: {
					type: { builtin: "token" },
					default: "A",
					facets: { pattern: ["[A-Z]"] }
				},
				umlDate: { type: { builtin: "dateTime" } },
				umlVersion: {
					type: { builtin: "Name" },
					facets: {
						pattern: ["[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				version: {
					type: { builtin: "unsignedShort" },
					required: !0,
					facets: {
						minInclusive: 2002,
						maxInclusive: 2099
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
						maxOccurs: 1
					},
					{
						kind: "element",
						name: "PresenceConditions",
						maxOccurs: 1
					},
					{
						kind: "element",
						name: "Abbreviations",
						maxOccurs: 1
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
					type: { builtin: "normalizedString" },
					required: !0,
					facets: { pattern: ["\\x00-\\x7f+"] }
				},
				publicationStage: {
					type: { builtin: "token" },
					default: "IS",
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
				},
				release: {
					type: { builtin: "unsignedByte" },
					default: "1",
					facets: {
						minInclusive: 0,
						maxInclusive: 255,
						minExclusive: 0
					}
				},
				revision: {
					type: { builtin: "token" },
					default: "A",
					facets: { pattern: ["[A-Z]"] }
				},
				version: {
					type: { builtin: "unsignedShort" },
					required: !0,
					facets: {
						minInclusive: 2002,
						maxInclusive: 2099
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
				defaultValue: { type: { builtin: "normalizedString" } },
				deprecated: {
					type: { builtin: "boolean" },
					default: "false"
				},
				descID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				informative: {
					type: { builtin: "boolean" },
					default: "false"
				},
				maxValue: { type: { builtin: "decimal" } },
				minValue: { type: { builtin: "decimal" } },
				name: {
					type: { builtin: "Name" },
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				type: {
					type: { builtin: "Name" },
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				typeKind: {
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
					}] },
					default: "BASIC",
					facets: { enumeration: [
						"BASIC",
						"ENUMERATED",
						"CONSTRUCTED",
						"undefined"
					] }
				}
			},
			identityFields: ["name"]
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
					type: { builtin: "boolean" },
					default: "false"
				},
				descID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				informative: {
					type: { builtin: "boolean" },
					default: "false"
				},
				name: {
					type: { builtin: "Name" },
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				titleID: {
					type: { builtin: "normalizedString" },
					required: !0,
					facets: { minLength: 1 }
				},
				typeKindParameterized: { default: "false" },
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
		},
		contentModel: {
			kind: "sequence",
			minOccurs: 1,
			maxOccurs: 1,
			particles: [{
				kind: "element",
				name: "ServiceTypeRealization"
			}]
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
				defaultValue: { type: { builtin: "normalizedString" } },
				deprecated: {
					type: { builtin: "boolean" },
					default: "false"
				},
				descID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				informative: {
					type: { builtin: "boolean" },
					default: "false"
				},
				isArray: {
					type: { builtin: "boolean" },
					default: "false"
				},
				maxIndexAttribute: {
					type: { builtin: "Name" },
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				maxValue: { type: { builtin: "decimal" } },
				minIndex: {
					type: { builtin: "unsignedInt" },
					default: "0",
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295
					}
				},
				minValue: { type: { builtin: "decimal" } },
				name: {
					type: { builtin: "Name" },
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				presCond: {
					type: { builtin: "normalizedString" },
					default: "M"
				},
				presCondArgs: { type: { builtin: "normalizedString" } },
				presCondArgsID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				sizeAttribute: {
					type: { builtin: "Name" },
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				type: {
					type: { builtin: "Name" },
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				typeKind: {
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
					}] },
					default: "BASIC",
					facets: { enumeration: [
						"BASIC",
						"ENUMERATED",
						"CONSTRUCTED",
						"undefined"
					] }
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
					type: { builtin: "boolean" },
					default: "false"
				},
				descID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				informative: {
					type: { builtin: "boolean" },
					default: "false"
				},
				isArray: {
					type: { builtin: "boolean" },
					default: "false"
				},
				maxIndexAttribute: {
					type: { builtin: "Name" },
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				minIndex: {
					type: { builtin: "unsignedInt" },
					default: "0",
					facets: {
						minInclusive: 0,
						maxInclusive: 4294967295
					}
				},
				name: {
					type: { builtin: "Name" },
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				presCond: {
					type: { builtin: "normalizedString" },
					default: "M"
				},
				presCondArgs: { type: { builtin: "normalizedString" } },
				presCondArgsID: {
					type: { builtin: "normalizedString" },
					facets: { minLength: 1 }
				},
				sizeAttribute: {
					type: { builtin: "Name" },
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				type: {
					type: { builtin: "Name" },
					required: !0,
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				underlyingType: {
					type: { builtin: "Name" },
					facets: {
						pattern: ["[\\x00-\\x7f\\x80-\\xff]+", "[A-Za-z_:][-.:0-9A-Z_a-z]*"],
						minLength: 1
					}
				},
				underlyingTypeKind: {
					type: { builtin: "token" },
					facets: { enumeration: [
						"BASIC",
						"ENUMERATED",
						"CONSTRUCTED"
					] }
				}
			},
			identityFields: ["name"]
		},
		children: {
			sequence: [],
			details: {}
		}
	}
}, P = { supportedFileExtensions: [".nsd", ".nsdoc"] }, pe = {
	singletonElements: de,
	elements: se,
	namespaces: {
		default: {
			uri: "http://www.iec.ch/61850/2016/NSD",
			prefix: ""
		},
		xsi: te
	},
	attributes: N,
	children: ce,
	parents: le,
	descendants: j,
	ancestors: ue,
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
	io: P,
	definition: fe
}, me = {
	...pe,
	rootElementName: "NS"
}, he = {
	...pe,
	rootElementName: "NSDoc"
}, ge = {}, _e = Object.create, ve = Object.defineProperty, ye = Object.getOwnPropertyDescriptor, be = Object.getOwnPropertyNames, xe = Object.getPrototypeOf, Se = Object.prototype.hasOwnProperty, Ce = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), we = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = be(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !Se.call(e, s) && s !== n && ve(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = ye(t, s)) || r.enumerable
	});
	return e;
}, Te = (e, t, n) => (n = e == null ? {} : _e(xe(e)), we(t || !e || !e.__esModule ? ve(n, "default", {
	value: e,
	enumerable: !0
}) : n, e));
function Ee(e, t) {
	return e ? De(e, t) : {};
}
function De(e, t) {
	let n = {};
	for (let r of Object.keys(e)) {
		let i = e[r];
		n[r] = typeof i == "function" ? (...e) => i(t, ...e) : De(i, t);
	}
	return n;
}
function Oe(e, t = () => {}) {
	let n = [], r = () => {
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
	};
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
var ke = Object.freeze({
	plan() {},
	nextStep() {},
	endPlan() {},
	forceClear() {}
});
function Ae() {
	return {
		log: [],
		byId: /* @__PURE__ */ new Map()
	};
}
function je(e) {
	let { stagedOperations: t, tagName: n, id: r } = e, { log: i, byId: a } = t;
	if (r !== void 0) {
		let e = a.get(r);
		return e ? Me({
			operation: e,
			tagName: n,
			id: r
		}) : void 0;
	}
	for (let e = i.length - 1; e >= 0; e--) {
		let t = i[e];
		if ((t.status === "created" || t.status === "updated") && T(t.newRecord, n)) return {
			...t.newRecord,
			status: t.status
		};
		if (t.status === "deleted" && T(t.oldRecord, n)) return {
			...t.oldRecord,
			status: "deleted"
		};
	}
}
function Me(e) {
	let { operation: t, tagName: n, id: r } = e;
	if ((t.status === "created" || t.status === "updated") && t.newRecord.id === r) return Ne(t.newRecord.tagName, n, r), {
		...t.newRecord,
		status: t.status
	};
	if (t.status === "deleted" && t.oldRecord.id === r) return Ne(t.oldRecord.tagName, n, r), {
		...t.oldRecord,
		status: "deleted"
	};
}
function Ne(e, t, n) {
	e !== t && d("ELEMENT_TAGNAME_MISMATCH", {
		detail: `Expected tagName '${t}', got '${e}' for id '${n}'`,
		ref: {
			tagName: t,
			id: n
		}
	});
}
function Pe(e) {
	let { rawRecords: t, stagedOperations: n, tagName: r } = e, i = new Map(t.map((e) => [e.id, {
		...e,
		status: "unchanged"
	}]));
	for (let e of n) {
		if (e.status === "created" || e.status === "updated") {
			if (!T(e.newRecord, r)) continue;
			i.set(e.newRecord.id, {
				...e.newRecord,
				status: e.status
			});
		}
		e.status === "deleted" && e.oldRecord.tagName === r && i.delete(e.oldRecord.id);
	}
	return Array.from(i.values());
}
function Fe(e) {
	let { rawRecords: t, stagedOperations: n, includeDeleted: r = !1 } = e, { log: i, byId: a } = n, o = new Map(t.map((e) => [e.id, {
		...e,
		status: "unchanged"
	}]));
	for (let e of a.values()) {
		if (e.status === "created" || e.status === "updated") {
			o.set(e.newRecord.id, {
				...e.newRecord,
				status: e.status
			});
			continue;
		}
		o.delete(e.oldRecord.id);
	}
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
function F(e) {
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
async function I(e) {
	let { context: t, ref: n } = e;
	if (t.stagedOperations.log.length > 0) {
		let e = je({
			stagedOperations: t.stagedOperations,
			tagName: n.tagName,
			id: n.id
		});
		if (e?.status === "deleted") return;
		if (e) return e;
	}
	let r;
	if (n.id === void 0) {
		let e = `__singleton_${n.tagName}`, i = jn(t) ? t.recordCache.get(e) : void 0;
		i ? (t.perf.count("core::query::getRecord.cacheHit"), r = i) : (t.perf.count("core::query::getRecord.miss"), t.perf.count("core::store::getByTagName"), r = (await t.store.getByTagNameInDocument(n.tagName, t.documentId))[0], r && jn(t) && (t.recordCache.set(r.id, r), t.recordCache.set(e, r)));
	} else {
		let e = jn(t) ? t.recordCache.get(n.id) : void 0;
		e ? (t.perf.count("core::query::getRecord.cacheHit"), r = e) : (t.perf.count("core::query::getRecord.miss"), t.perf.count("core::store::get"), r = await t.store.get(n.id, t.documentId), r && jn(t) && t.recordCache.set(n.id, r));
	}
	if (r) return r.tagName !== n.tagName && d("ELEMENT_TAGNAME_MISMATCH", {
		detail: `Expected tagName '${n.tagName}', got '${r.tagName}' for id '${n.id}'`,
		ref: n
	}), {
		...r,
		status: "unchanged"
	};
}
async function L(e) {
	let { context: t, refs: n } = e;
	return Promise.all(n.map((e) => I({
		context: t,
		ref: e
	})));
}
async function Ie(e) {
	let { context: t, tagName: n } = e;
	t.perf.count("core::store::getByTagName");
	let r = await t.store.getByTagNameInDocument(n, t.documentId);
	for (let e of r) jn(t) && t.recordCache.set(e.id, e);
	return Pe({
		rawRecords: r,
		stagedOperations: t.stagedOperations.log,
		tagName: n
	});
}
async function R(e) {
	let { context: t, ref: n, tagName: r } = e, i = await I({
		context: t,
		ref: n
	});
	if (!i) return;
	let a = i.children.find((e) => e.tagName === r);
	if (a) return I({
		context: t,
		ref: a
	});
	let o = t.dialecteConfig.transparentElements;
	if (!o?.length) return;
	let s = i.children.filter((e) => o.includes(e.tagName));
	for (let e of s) {
		let n = await I({
			context: t,
			ref: e
		});
		if (!n) continue;
		let i = n.children.find((e) => e.tagName === r);
		if (i) return I({
			context: t,
			ref: i
		});
	}
}
async function Le(e) {
	let { context: t, ref: n, tagName: r } = e, i = await I({
		context: t,
		ref: n
	});
	if (!i) return [];
	let a = i.children.filter((e) => e.tagName === r).map((e) => ({
		tagName: r,
		id: e.id
	}));
	if (a.length) return (await L({
		context: t,
		refs: a
	})).filter((e) => e !== void 0);
	let o = t.dialecteConfig.transparentElements;
	if (!o?.length) return [];
	let s = i.children.filter((e) => o.includes(e.tagName));
	if (!s.length) return [];
	let c = (await L({
		context: t,
		refs: s
	})).filter((e) => e !== void 0).flatMap((e) => e.children.filter((e) => e.tagName === r)).map((e) => ({
		tagName: r,
		id: e.id
	}));
	return c.length ? (await L({
		context: t,
		refs: c
	})).filter((e) => e !== void 0) : [];
}
async function Re(e) {
	let { context: t, ref: n, options: r } = e, i = r?.depth ?? Infinity, a = r?.stopAtTagName, o = r?.order ?? "bottom-up", s = [], c = await I({
		context: t,
		ref: n
	});
	for (; c?.parent && s.length < i;) {
		let e = c.parent, n = await I({
			context: t,
			ref: e
		});
		if (!n || (s.push(n), a && n.tagName === a)) break;
		c = n;
	}
	return o === "top-down" ? s.reverse() : s;
}
async function ze(e) {
	let { context: t, tagName: n, attributes: r } = e, i = await Ie({
		context: t,
		tagName: n
	}), a = [];
	for (let e of i) Be({
		record: e,
		attributeFilter: r
	}) && a.push(e);
	return a;
}
function Be(e) {
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
async function Ve(e) {
	let { context: t, ref: n, options: r } = e, { collect: i, omit: a } = r, o = He(a), s = We(i), c = /* @__PURE__ */ new Map();
	for (let e of s.allTags) c.set(e, /* @__PURE__ */ new Map());
	let l = await I({
		context: t,
		ref: n
	});
	return l && (s.mode === "flat" ? await qe({
		context: t,
		rootId: l.id,
		collectSpec: s,
		omitSpec: o,
		collected: c
	}) : await Je({
		context: t,
		record: l,
		pathNodes: s.paths,
		omitSpec: o,
		collected: c
	})), Ze(c);
}
function He(e) {
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
function Ue(e) {
	let { record: t, omitSpec: n } = e;
	if (n.unconditional.has(t.tagName)) return !0;
	for (let e of n.conditional) if (e.tagName === t.tagName && Be({
		record: t,
		attributeFilter: e.where
	})) return !0;
	return !1;
}
function We(e) {
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
		paths: Ge(e, t),
		allTags: t
	};
}
function Ge(e, t) {
	let n = [];
	for (let [r, i] of Object.entries(e)) {
		if (r === "where") continue;
		t.add(r);
		let e = Ke({
			tagName: r,
			value: i,
			allTags: t
		});
		e && n.push(e);
	}
	return n;
}
function Ke(e) {
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
		children: Ge(s, r),
		isLeaf: !1
	};
}
async function qe(e) {
	let { context: t, rootId: n, collectSpec: r, omitSpec: i, collected: a } = e;
	for (let e of r.targets) {
		if (i.unconditional.has(e.tagName)) continue;
		let r = await Ie({
			context: t,
			tagName: e.tagName
		});
		for (let o of r) z({
			record: o,
			where: e.where
		}) && (Ue({
			record: o,
			omitSpec: i
		}) || await B({
			context: t,
			record: o,
			rootId: n,
			omitSpec: i
		}) && a.get(e.tagName).set(o.id, o));
	}
}
function z(e) {
	let { record: t, where: n } = e;
	return n ? Be({
		record: t,
		attributeFilter: n
	}) : !0;
}
async function B(e) {
	let { context: t, record: n, rootId: r, omitSpec: i } = e;
	if (n.id === r) return !0;
	let a = n;
	for (; a;) {
		if (!a.parent || i.unconditional.has(a.parent.tagName)) return !1;
		if (a.parent.id === r) return !0;
		let e = await I({
			context: t,
			ref: O(a.parent)
		});
		if (!e || Ue({
			record: e,
			omitSpec: i
		})) return !1;
		a = e;
	}
	return !1;
}
async function Je(e) {
	let { context: t, record: n, pathNodes: r, omitSpec: i, collected: a } = e;
	if (!n.children?.length) return;
	let o = new Set(r.map((e) => e.tagName));
	for (let e of r) {
		let r = await Ye({
			context: t,
			record: n,
			tagName: e.tagName,
			where: e.where,
			omitSpec: i,
			stopAtTagNames: o
		});
		for (let n of r) a.get(e.tagName).set(n.id, n), !e.isLeaf && e.children.length > 0 && await Je({
			context: t,
			record: n,
			pathNodes: e.children,
			omitSpec: i,
			collected: a
		});
	}
}
async function Ye(e) {
	let { context: t, record: n, tagName: r, where: i, omitSpec: a, stopAtTagNames: o } = e, s = [];
	if (!n.children?.length) return s;
	let c = [], l = await Xe({
		context: t,
		record: n,
		omitSpec: a
	});
	for (c.push(...l); c.length > 0;) {
		let e = c.shift();
		if (e.tagName === r) {
			z({
				record: e,
				where: i
			}) && s.push(e);
			continue;
		}
		if (!(o.has(e.tagName) && e.tagName !== r) && e.children?.length) {
			let n = await Xe({
				context: t,
				record: e,
				omitSpec: a
			});
			c.push(...n);
		}
	}
	return s;
}
async function Xe(e) {
	let { context: t, record: n, omitSpec: r } = e;
	if (!n.children?.length) return [];
	let i = n.children.filter((e) => !r.unconditional.has(e.tagName));
	return i.length ? (await Promise.all(i.map((e) => I({
		context: t,
		ref: O(e)
	})))).filter((e) => e !== void 0 && !Ue({
		record: e,
		omitSpec: r
	})) : [];
}
function Ze(e) {
	let t = {};
	for (let [n, r] of e.entries()) t[n] = Array.from(r.values());
	return t;
}
async function Qe(e) {
	let { context: t, ref: n, name: r, namespace: i, defaults: a = "optional" } = e, o = await I({
		context: t,
		ref: n
	}), s = o?.attributes ?? [], c = et(t.dialecteConfig, r, i), l = s.find((e) => e.name === c);
	return l ? l.value : (o ? f({
		dialecteConfig: t.dialecteConfig,
		record: o,
		attributeName: c,
		defaults: a
	}) : void 0) ?? "";
}
async function $e(e) {
	let { context: t, ref: n, name: r, namespace: i, defaults: a = "optional" } = e, { dialecteConfig: o } = t, s = await I({
		context: t,
		ref: n
	}), c = s?.attributes ?? [], l = et(o, r, i), u = c.find((e) => e.name === l);
	if (u) return u;
	if (!s || a === "none") return;
	let d = f({
		dialecteConfig: o,
		record: s,
		attributeName: l,
		defaults: a
	});
	if (d === void 0) return;
	let { namespace: p } = h({
		dialecteConfig: o,
		record: s,
		attributeName: l
	});
	return {
		name: l,
		value: d,
		namespace: p
	};
}
function et(e, t, n) {
	if (n === void 0) return t;
	let r = l(e, n);
	return r ? `${r}:${t}` : t;
}
async function tt(e) {
	let { context: t, ref: n, namespace: r, defaults: i = "optional" } = e, { dialecteConfig: a } = t, o = await I({
		context: t,
		ref: n
	}), c = o?.attributes ?? [], u = r === void 0 ? "" : l(a, r), d = c.reduce((e, t) => {
		let { prefix: n, local: r, isXmlns: i } = rt(t.name);
		return i || n !== u || (e[r] = t.value ?? ""), e;
	}, {});
	if (o && i !== "none") {
		let e = s({
			dialecteConfig: a,
			record: o
		})?.attributes.sequence ?? [];
		for (let t of e) {
			let { prefix: e, local: n, isXmlns: r } = rt(t);
			if (r || e !== u || n in d) continue;
			let s = f({
				dialecteConfig: a,
				record: o,
				attributeName: t,
				defaults: i
			});
			s !== void 0 && (d[n] = s);
		}
	}
	return d;
}
async function nt(e) {
	let { context: t, ref: n, defaults: r = "optional" } = e, { dialecteConfig: i } = t, a = await I({
		context: t,
		ref: n
	}), o = [...a?.attributes ?? []];
	if (a && r !== "none") {
		let e = new Set(o.map((e) => e.name)), t = s({
			dialecteConfig: i,
			record: a
		})?.attributes.sequence ?? [];
		for (let n of t) {
			if (e.has(n)) continue;
			let t = f({
				dialecteConfig: i,
				record: a,
				attributeName: n,
				defaults: r
			});
			if (t === void 0) continue;
			let { namespace: s } = h({
				dialecteConfig: i,
				record: a,
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
function rt(e) {
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
async function it(e) {
	let { context: t, ref: n } = e, r = await I({
		context: t,
		ref: n
	});
	if (r) return s({
		dialecteConfig: t.dialecteConfig,
		record: r
	});
}
function at(e) {
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
function ot(e) {
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
function st(e) {
	let { record: t, compiledOmit: n } = e;
	return n.unconditional.has(t.tagName) ? !0 : n.conditional.some((e) => e.scope === "self" && e.tagName === t.tagName && Be({
		record: t,
		attributeFilter: e.where
	}));
}
function ct(e) {
	let { record: t, compiledOmit: n } = e;
	return n.conditional.some((e) => e.scope === "children" && e.tagName === t.tagName && Be({
		record: t,
		attributeFilter: e.where
	}));
}
function V(e) {
	let { tree: t, omit: n } = e;
	if (!n?.length) return t;
	let r = ot(n), i = (e) => {
		if (ct({
			record: e,
			compiledOmit: r
		})) return {
			...e,
			tree: []
		};
		let t = e.tree.filter((e) => !st({
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
function lt(e) {
	let { tree: t, childrenConfig: n } = e, r = (e) => {
		if (e.tree.length === 0) return e;
		let t = c({
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
async function ut(e) {
	let { context: t, ref: n, options: r = {}, dialecteConfig: i } = e, { select: a, omit: o, unwrap: s, depth: c } = r, l = c !== void 0 && n.id !== void 0 && t.stagedOperations.log.length === 0 ? await ft(t, n, c) : await dt(t), u = pt(l, n);
	m(u, {
		detail: "No record found for provided ref",
		key: "ELEMENT_NOT_FOUND"
	});
	let d = ot(o), f = t.dialecteConfig.transparentElements, p = mt({
		recordsById: l,
		record: u,
		select: a,
		compiledOmit: d,
		dialecteConfig: i,
		transparentElements: f,
		remainingDepth: c ?? Infinity
	});
	if (!p) return re({ record: u });
	let h = s ?? (f?.length ? f : void 0);
	return lt({
		tree: h ? at({
			tree: p,
			unwrapTagNames: h
		}) : p,
		childrenConfig: t.dialecteConfig.children
	});
}
async function dt(e) {
	e.perf.count("core::store::getByDocumentId");
	let { live: t } = Fe({
		rawRecords: await e.store.getByDocumentId(e.documentId),
		stagedOperations: e.stagedOperations
	});
	return t;
}
async function ft(e, t, n) {
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
function pt(e, t) {
	if (t.id !== void 0) {
		let n = e.get(t.id);
		return n?.tagName === t.tagName ? n : void 0;
	}
	for (let n of e.values()) if (n.tagName === t.tagName) return n;
}
function mt(e) {
	let { recordsById: t, record: n, select: r, compiledOmit: i, dialecteConfig: a, transparentElements: o } = e;
	return e.remainingDepth <= 0 || ct({
		record: n,
		compiledOmit: i
	}) ? re({ record: n }) : re({
		record: n,
		tree: ht({
			recordsById: t,
			record: n,
			select: r,
			compiledOmit: i,
			dialecteConfig: a,
			transparentElements: o
		}).map(({ record: n, select: r }) => mt({
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
function ht(e) {
	let { recordsById: t, record: n, select: r, compiledOmit: i, dialecteConfig: a, transparentElements: o } = e;
	if (!n.children?.length) return [];
	let s = r ? vt(r) : void 0;
	if (s && r && a && r.recursive !== !1) {
		let e = n.tagName, t = a.children[e], i = r[e] !== void 0;
		t?.includes(e) && !i && s.add(e);
	}
	let c = n.children.filter((e) => gt({
		tagName: e.tagName,
		compiledOmit: i,
		selectKeys: s,
		transparentElements: o
	}));
	return c.length ? H({
		children: c.map((e) => t.get(e.id)).filter((e) => e !== void 0).filter((e) => !st({
			record: e,
			compiledOmit: i
		})),
		select: r,
		record: n,
		dialecteConfig: a,
		transparentElements: o
	}) : [];
}
function gt(e) {
	let { tagName: t, compiledOmit: n, selectKeys: r, transparentElements: i } = e;
	return n.unconditional.has(t) ? !1 : r && !r.has(t) ? !!i?.includes(t) : !0;
}
var _t = new Set(["where", "recursive"]);
function vt(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of Object.keys(e)) _t.has(n) || t.add(n);
	return t;
}
function H(e) {
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
			let t = yt({
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
		let s = bt({
			child: e,
			entry: t,
			parentRecord: r
		});
		s && o.push(s);
	}
	return o;
}
function yt(e) {
	let { child: t, select: n, dialecteConfig: r } = e;
	if (!(!r || n.recursive === !1) && r.children[t.tagName]?.includes(t.tagName) && !(n.where && !Be({
		record: t,
		attributeFilter: n.where
	}))) return {
		record: t,
		select: n
	};
}
function bt(e) {
	let { child: t, entry: n, parentRecord: r } = e, i = n;
	if (!(i.where && !Be({
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
			select: xt(i, t.tagName)
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
function xt(e, t) {
	return e[t], e;
}
async function St(e) {
	let { context: t, ref: n, ancestors: r = 0, depth: i, includeDeleted: a = !1 } = e;
	if (!n && i === void 0) return Ct({
		context: t,
		includeDeleted: a
	});
	let o = e.siblings ?? !1, s = o === !0 || typeof o == "object" && !!o, c = typeof o == "object" && !!o && o.expand === !0, l = n ?? { tagName: t.dialecteConfig.rootElementName }, u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), f = a ? F(t.stagedOperations.log) : void 0, p = (e) => {
		if (f) for (let t of f.get(e) ?? []) d.has(t.id) || (d.set(t.id, t), p(t.id));
	}, h = async (e, n) => {
		if (u.set(e.id, e), p(e.id), !(i !== void 0 && n >= i)) for (let r of e.children) {
			let e = await I({
				context: t,
				ref: O(r)
			});
			e && await h(e, n + 1);
		}
	}, g = await I({
		context: t,
		ref: l
	});
	m(g, {
		key: "ELEMENT_NOT_FOUND",
		detail: "No record found for the provided ref"
	});
	let _ = g.id;
	await h(g, 0);
	let v = Math.max(r, +!!s);
	if (v > 0) {
		let e = await Re({
			context: t,
			ref: l,
			options: {
				depth: v,
				order: "bottom-up"
			}
		});
		for (let t of e) u.set(t.id, t), _ = t.id;
		if (s) {
			let n = [g, ...e];
			for (let e = 0; e < n.length - 1; e++) {
				let r = n[e], i = n[e + 1];
				for (let e of i.children) {
					if (e.id === r.id) continue;
					let n = await I({
						context: t,
						ref: O(e)
					});
					n && (c ? await h(n, 0) : u.set(n.id, n));
				}
			}
		}
	}
	return wt({
		live: u,
		deletedById: d,
		rootId: _
	});
}
async function Ct(e) {
	let { context: t, includeDeleted: n = !1 } = e, { live: r, deleted: i } = Fe({
		rawRecords: await t.store.getByDocumentId(t.documentId),
		stagedOperations: t.stagedOperations,
		includeDeleted: n
	}), a;
	for (let e of r.values()) if (e.tagName === t.dialecteConfig.rootElementName) {
		a = e.id;
		break;
	}
	return m(a, {
		key: "ROOT_NOT_FOUND",
		detail: `No ${t.dialecteConfig.rootElementName} root element found in document`
	}), wt({
		live: r,
		deletedById: new Map(i.map((e) => [e.id, e])),
		rootId: a
	});
}
function wt(e) {
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
function Tt(e) {
	let { liveRecords: t, deletedRecords: n, rootId: r } = e, i = new Map(t.map((e) => [e.id, e])), a = new Map(n.map((e) => [e.id, e])), o = /* @__PURE__ */ new Map();
	for (let e of n) {
		let t = e.parent?.id;
		if (!t) continue;
		let n = o.get(t) ?? [];
		n.push(e), o.set(t, n);
	}
	let s = i.get(r);
	m(s, {
		key: "ROOT_NOT_FOUND",
		detail: `No record found for rootId "${r}"`
	});
	let c = (e, t) => {
		let n = t === "live" ? i : a, r = e.children.filter((e) => n.has(e.id)).map((e) => c(n.get(e.id), t)), s = t === "live" ? (o.get(e.id) ?? []).map((e) => c(e, "deleted")) : [];
		return re({
			record: e,
			tree: [...r, ...s]
		});
	};
	return c(s, "live");
}
var U = /* @__PURE__ */ Ce(((e, t) => {
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
})), Et = /* @__PURE__ */ Te((/* @__PURE__ */ Ce(((e, t) => {
	var n = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 });
	var r = n(U());
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
function Dt(e) {
	return (0, Et.default)(e);
}
function Ot(e, t = {}) {
	let { includeXmlDeclaration: n = !0 } = t, r = new XMLSerializer().serializeToString(e);
	return Dt(n ? "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" + r : r);
}
async function kt(e) {
	let { extension: t, xmlDocument: n, filename: r } = e, a = Ot(n);
	await i({
		data: new Blob([a], { type: "application/xml" }),
		filename: r,
		pickerType: {
			description: `${t.replace(/^\./, "").toUpperCase()} Files`,
			accept: { "application/xml": [t] }
		}
	});
}
function At(e) {
	let { records: t, config: n, withDatabaseIds: r = !1, rootId: i, declareNamespaces: a = !0 } = e, o = /* @__PURE__ */ new Map(), s;
	for (let e of t) o.set(e.id, e), e.tagName === n.rootElementName && (s = e);
	let c = i ? o.get(i) : s;
	m(c, {
		detail: i ? `No record found for rootId "${i}"` : `No ${n.rootElementName} root element found in records`,
		key: "EXPORT_ROOT_NOT_FOUND"
	});
	let l = c.tagName !== n.rootElementName, u = n.namespaces.default, d = document.implementation.createDocument(u.uri, null, null), f = Mt({
		document: d,
		record: c,
		defaultNamespace: u,
		declareNamespaces: a
	});
	return a && f.setAttribute("xmlns", c.namespace.uri), c.attributes && Pt({
		config: n,
		document: d,
		element: f,
		attributes: c.attributes,
		isRoot: !0,
		isFragment: l,
		declareNamespaces: a
	}), l || W({
		config: n,
		rootElement: f,
		namespace: c.namespace
	}), c.value && (f.textContent = c.value.trim()), r && f.setAttribute("_temp-idb-id", c.id), d.appendChild(f), jt({
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
function jt(e) {
	let { index: t, config: n, withDatabaseIds: r, xmlDocument: i, parentRecord: a, parentElement: o, isFragment: s, declareNamespaces: l } = e;
	if (!a.children || a.children.length === 0) return;
	let u = [];
	for (let e of a.children) {
		let n = t.get(e.id);
		m(n, {
			detail: `Parent '${a.tagName}' references non-existent child '${e.tagName}' (id: ${e.id})`,
			key: "EXPORT_ORPHAN_CHILD_REF",
			ref: {
				tagName: a.tagName,
				id: a.id
			}
		}), u.push(n);
	}
	let d = c({
		parentTagName: a.tagName,
		children: u,
		childrenConfig: n.children
	});
	for (let e of d) {
		let a = Nt({
			config: n,
			document: i,
			record: e,
			defaultNamespace: n.namespaces.default,
			withDatabaseIds: r,
			isFragment: s,
			declareNamespaces: l
		});
		o.appendChild(a), jt({
			index: t,
			config: n,
			withDatabaseIds: r,
			xmlDocument: i,
			parentRecord: e,
			parentElement: a,
			isFragment: s,
			declareNamespaces: l
		});
	}
}
function Mt(e) {
	let { document: t, record: n, defaultNamespace: r, declareNamespaces: i } = e, a = n.namespace.uri !== r.uri && n.namespace.prefix && n.namespace.prefix !== "xmlns" ? `${n.namespace.prefix}:${n.tagName}` : n.tagName;
	return i ? t.createElementNS(n.namespace.uri, a) : t.createElement(a);
}
function Nt(e) {
	let { config: t, document: n, record: r, defaultNamespace: i, withDatabaseIds: a, isFragment: o, declareNamespaces: s } = e, c = r.namespace.uri === i.uri, l = Mt({
		document: n,
		record: r,
		defaultNamespace: i,
		declareNamespaces: s
	});
	return s && !c && r.namespace.prefix && r.namespace.prefix !== "xmlns" && Ft({
		config: t,
		document: n,
		namespace: r.namespace,
		isFragment: o
	}), r.attributes && Pt({
		config: t,
		document: n,
		element: l,
		attributes: r.attributes,
		isRoot: !1,
		isFragment: o,
		declareNamespaces: s
	}), It({
		config: t,
		document: n,
		element: l,
		record: r,
		isFragment: o,
		declareNamespaces: s
	}), r.value && (l.textContent = r.value.trim()), a && l.setAttribute("_temp-idb-id", r.id), l;
}
function Pt(e) {
	let { config: t, document: n, element: r, attributes: i, isRoot: a, isFragment: o, declareNamespaces: s } = e;
	for (let e of i) {
		if (Rt(e)) continue;
		if (!Lt(e) || !e.namespace.prefix) {
			r.setAttribute(e.name, String(e.value));
			continue;
		}
		let i = p(e.name);
		if (!s) {
			r.setAttribute(`${e.namespace.prefix}:${i}`, String(e.value));
			continue;
		}
		a || Ft({
			config: t,
			document: n,
			namespace: e.namespace,
			isFragment: o
		}), r.setAttributeNS(e.namespace.uri, `${e.namespace.prefix}:${i}`, String(e.value));
	}
}
function Ft(e) {
	let { config: t, document: n, namespace: r, isFragment: i } = e, a = n.documentElement;
	if (!a || !r.prefix || r.prefix === "xmlns") return;
	let o = "http://www.w3.org/2000/xmlns/";
	a.getAttributeNS(o, r.prefix) === null && (a.setAttributeNS(o, `xmlns:${r.prefix}`, r.uri), i || W({
		config: t,
		rootElement: a,
		namespace: r
	}));
}
function W(e) {
	let { config: t, rootElement: n, namespace: r } = e, i = Object.entries(t.definition[t.rootElementName].attributes.details).filter(([e, n]) => f({
		dialecteConfig: t,
		record: {
			tagName: t.rootElementName,
			parent: null
		},
		attributeName: e,
		defaults: "required"
	}) === void 0 ? !1 : r.uri === t.namespaces.default.uri ? !n.namespace : n.namespace?.prefix === r.prefix && n.namespace?.uri === r.uri);
	if (i.length > 0) for (let [e, r] of i) {
		let i = p(e), a = f({
			dialecteConfig: t,
			record: {
				tagName: t.rootElementName,
				parent: null
			},
			attributeName: e,
			defaults: "required"
		}) ?? "";
		if (!(r.namespace ? n.hasAttributeNS(r.namespace.uri, i) : n.hasAttribute(i))) if (r.namespace) {
			let e = `${r.namespace.prefix}:${i}`;
			n.setAttributeNS(r.namespace.uri, e, a);
		} else n.setAttribute(i, a);
	}
}
function It(e) {
	let { config: t, document: n, element: r, record: i, isFragment: a, declareNamespaces: o } = e;
	if (!o) return;
	let c = s({
		dialecteConfig: t,
		record: i
	})?.attributes.details;
	if (c) for (let [e, s] of Object.entries(c)) {
		let c = f({
			dialecteConfig: t,
			record: i,
			attributeName: e,
			defaults: "required"
		});
		if (c === void 0) continue;
		let l = p(e);
		(s.namespace ? r.hasAttributeNS(s.namespace.uri, l) : r.hasAttribute(l)) || (s.namespace && s.namespace.prefix && s.namespace.prefix !== "xmlns" ? (o && Ft({
			config: t,
			document: n,
			namespace: s.namespace,
			isFragment: a
		}), r.setAttributeNS(s.namespace.uri, `${s.namespace.prefix}:${l}`, c)) : r.setAttribute(l, c));
	}
}
function Lt(e) {
	return typeof e == "object" && !!e && "namespace" in e && !!e.namespace;
}
function Rt(e) {
	return !!(e.name === "xmlns" || e.name.startsWith("xmlns:") || Lt(e) && e.namespace?.prefix === "xmlns");
}
var G = /* @__PURE__ */ Ce(((e, t) => {
	t.exports = {};
})), zt = /* @__PURE__ */ Te((/* @__PURE__ */ Ce(((e) => {
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
			write: fe,
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
			o = G().Stream;
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
		function re(e, t) {
			let n = ne(e), r = ne(t);
			return !n || !r ? !0 : r === "utf16" ? n === "utf16le" || n === "utf16be" : n === r;
		}
		function ie(e, t) {
			if (!(!e.strict || !e.encoding || !t || t.name !== "xml")) {
				var n = E(t.body);
				n && !re(e.encoding, n) && A(e, "XML declaration encoding " + n + " does not match detected stream encoding " + e.encoding.toUpperCase());
			}
		}
		function D(e, t, n) {
			e.textNode && O(e), T(e, t, n);
		}
		function O(e) {
			e.textNode = ae(e.opt, e.textNode), e.textNode && T(e, "ontext", e.textNode), e.textNode = "";
		}
		function ae(e, t) {
			return e.trim && (t = t.trim()), e.normalize && (t = t.replace(/\s+/g, " ")), t;
		}
		function k(e, t) {
			return O(e), e.trackPosition && (t += "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c), t = Error(t), e.error = t, T(e, "onerror", t), e;
		}
		function oe(e) {
			return e.sawRoot && !e.closedRoot && A(e, "Unclosed root tag"), e.state !== w.BEGIN && e.state !== w.BEGIN_WHITESPACE && e.state !== w.TEXT && k(e, "Unexpected end"), O(e), e.c = "", e.closed = !0, T(e, "onend"), n.call(e, e.strict, e.opt), e;
		}
		function A(e, t) {
			if (typeof e != "object" || !(e instanceof n)) throw Error("bad call to strictFail");
			e.strict && k(e, t);
		}
		function se(e) {
			e.strict || (e.tagName = e.tagName[e.looseCase]());
			var t = e.tags[e.tags.length - 1] || e, n = e.tag = {
				name: e.tagName,
				attributes: {}
			};
			e.opt.xmlns && (n.ns = t.ns), e.attribList.length = 0, D(e, "onopentagstart", n);
		}
		function ce(e, t) {
			var n = e.indexOf(":") < 0 ? ["", e] : e.split(":"), r = n[0], i = n[1];
			return t && e === "xmlns" && (r = "xmlns", i = ""), {
				prefix: r,
				local: i
			};
		}
		function le(e) {
			if (e.strict || (e.attribName = e.attribName[e.looseCase]()), e.attribList.indexOf(e.attribName) !== -1 || e.tag.attributes.hasOwnProperty(e.attribName)) {
				e.attribName = e.attribValue = "";
				return;
			}
			if (e.opt.xmlns) {
				var t = ce(e.attribName, !0), n = t.prefix, r = t.local;
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
		function j(e, t) {
			if (e.opt.xmlns) {
				var n = e.tag, r = ce(e.tagName);
				n.prefix = r.prefix, n.local = r.local, n.uri = n.ns[r.prefix] || "", n.prefix && !n.uri && (A(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName)), n.uri = r.prefix);
				var i = e.tags[e.tags.length - 1] || e;
				n.ns && i.ns !== n.ns && Object.keys(n.ns).forEach(function(t) {
					D(e, "onopennamespace", {
						prefix: t,
						uri: n.ns[t]
					});
				});
				for (var a = 0, o = e.attribList.length; a < o; a++) {
					var s = e.attribList[a], c = s[0], l = s[1], u = ce(c, !0), d = u.prefix, f = u.local, p = d === "" ? "" : n.ns[d] || "", m = {
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
			e.tag.isSelfClosing = !!t, e.sawRoot = !0, e.tags.push(e.tag), D(e, "onopentag", e.tag), t || (!e.noscript && e.tagName.toLowerCase() === "script" ? e.state = w.SCRIPT : e.state = w.TEXT, e.tag = null, e.tagName = ""), e.attribName = e.attribValue = "", e.attribList.length = 0;
		}
		function ue(e) {
			if (!e.tagName) {
				A(e, "Weird empty close tag."), e.textNode += "</>", e.state = w.TEXT;
				return;
			}
			if (e.script) {
				if (e.tagName !== "script") {
					e.script += "</" + e.tagName + ">", e.tagName = "", e.state = w.SCRIPT;
					return;
				}
				D(e, "onscript", e.script), e.script = "";
			}
			var t = e.tags.length, n = e.tagName;
			e.strict || (n = n[e.looseCase]());
			for (var r = n; t-- && e.tags[t].name !== r;) A(e, "Unexpected close tag");
			if (t < 0) {
				A(e, "Unmatched closing tag: " + e.tagName), e.textNode += "</" + e.tagName + ">", e.state = w.TEXT;
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
			t === 0 && (e.closedRoot = !0), e.tagName = e.attribValue = e.attribName = "", e.attribList.length = 0, e.state = w.TEXT;
		}
		function de(e) {
			var t = e.entity, n = t.toLowerCase(), r, i = "";
			return e.ENTITIES[t] ? e.ENTITIES[t] : e.ENTITIES[n] ? e.ENTITIES[n] : (t = n, t.charAt(0) === "#" && (t.charAt(1) === "x" ? (t = t.slice(2), r = parseInt(t, 16), i = r.toString(16)) : (t = t.slice(1), r = parseInt(t, 10), i = r.toString(10))), t = t.replace(/^0+/, ""), isNaN(r) || i.toLowerCase() !== t || r < 0 || r > 1114111 ? (A(e, "Invalid character entity"), "&" + e.entity + ";") : String.fromCodePoint(r));
		}
		function M(e, t) {
			t === "<" ? (e.state = w.OPEN_WAKA, e.startTagPosition = e.position) : b(t) || (A(e, "Non-whitespace before first tag."), e.textNode = t, e.state = w.TEXT);
		}
		function N(e, t) {
			var n = "";
			return t < e.length && (n = e.charAt(t)), n;
		}
		function fe(t) {
			var n = this;
			if (this.error) throw this.error;
			if (n.closed) return k(n, "Cannot write after close. Assign an onready handler.");
			if (t === null) return oe(n);
			typeof t == "object" && (t = t.toString());
			for (var i = 0, a = ""; a = N(t, i++), n.c = a, a;) switch (n.trackPosition && (n.position++, a === "\n" ? (n.line++, n.column = 0) : n.column++), n.state) {
				case w.BEGIN:
					if (n.state = w.BEGIN_WHITESPACE, a === "﻿") continue;
					M(n, a);
					continue;
				case w.BEGIN_WHITESPACE:
					M(n, a);
					continue;
				case w.TEXT:
					if (n.sawRoot && !n.closedRoot) {
						for (var o = i - 1; a && a !== "<" && a !== "&";) a = N(t, i++), a && n.trackPosition && (n.position++, a === "\n" ? (n.line++, n.column = 0) : n.column++);
						n.textNode += t.substring(o, i - 1);
					}
					a === "<" && !(n.sawRoot && n.closedRoot && !n.strict) ? (n.state = w.OPEN_WAKA, n.startTagPosition = n.position) : (!b(a) && (!n.sawRoot || n.closedRoot) && A(n, "Text data outside of root node."), a === "&" ? n.state = w.TEXT_ENTITY : n.textNode += a);
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
						if (A(n, "Unencoded <"), n.startTagPosition + 1 < n.position) {
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
					n.doctype && n.doctype !== !0 && n.sgmlDecl ? (n.state = w.DOCTYPE_DTD, n.doctype += "<!" + n.sgmlDecl + a, n.sgmlDecl = "") : (n.sgmlDecl + a).toUpperCase() === d ? (D(n, "onopencdata"), n.state = w.CDATA, n.sgmlDecl = "", n.cdata = "") : (n.sgmlDecl + a).toUpperCase() === f ? (n.state = w.DOCTYPE, (n.doctype || n.sawRoot) && A(n, "Inappropriately located doctype declaration"), n.doctype = "", n.sgmlDecl = "") : a === ">" ? (D(n, "onsgmldeclaration", n.sgmlDecl), n.sgmlDecl = "", n.state = w.TEXT) : (x(a) && (n.state = w.SGML_DECL_QUOTED), n.sgmlDecl += a);
					continue;
				case w.SGML_DECL_QUOTED:
					a === n.q && (n.state = w.SGML_DECL, n.q = ""), n.sgmlDecl += a;
					continue;
				case w.DOCTYPE:
					a === ">" ? (n.state = w.TEXT, D(n, "ondoctype", n.doctype), n.doctype = !0) : (n.doctype += a, a === "[" ? n.state = w.DOCTYPE_DTD : x(a) && (n.state = w.DOCTYPE_QUOTED, n.q = a));
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
					a === "-" ? (n.state = w.COMMENT_ENDED, n.comment = ae(n.opt, n.comment), n.comment && D(n, "oncomment", n.comment), n.comment = "") : (n.comment += "-" + a, n.state = w.COMMENT);
					continue;
				case w.COMMENT_ENDED:
					a === ">" ? n.doctype && n.doctype !== !0 ? n.state = w.DOCTYPE_DTD : n.state = w.TEXT : (A(n, "Malformed comment"), n.comment += "--" + a, n.state = w.COMMENT);
					continue;
				case w.CDATA:
					for (var o = i - 1; a && a !== "]";) a = N(t, i++), a && n.trackPosition && (n.position++, a === "\n" ? (n.line++, n.column = 0) : n.column++);
					n.cdata += t.substring(o, i - 1), a === "]" && (n.state = w.CDATA_ENDING);
					continue;
				case w.CDATA_ENDING:
					a === "]" ? n.state = w.CDATA_ENDING_2 : (n.cdata += "]" + a, n.state = w.CDATA);
					continue;
				case w.CDATA_ENDING_2:
					a === ">" ? (n.cdata && D(n, "oncdata", n.cdata), D(n, "onclosecdata"), n.cdata = "", n.state = w.TEXT) : a === "]" ? n.cdata += "]" : (n.cdata += "]]" + a, n.state = w.CDATA);
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
						ie(n, e), D(n, "onprocessinginstruction", e), n.procInstName = n.procInstBody = "", n.state = w.TEXT;
					} else n.procInstBody += "?" + a, n.state = w.PROC_INST_BODY;
					continue;
				case w.OPEN_TAG:
					C(_, a) ? n.tagName += a : (se(n), a === ">" ? j(n) : a === "/" ? n.state = w.OPEN_TAG_SLASH : (b(a) || A(n, "Invalid character in tag name"), n.state = w.ATTRIB));
					continue;
				case w.OPEN_TAG_SLASH:
					a === ">" ? (j(n, !0), ue(n)) : (A(n, "Forward-slash in opening tag not followed by >"), n.state = w.ATTRIB);
					continue;
				case w.ATTRIB:
					if (b(a)) continue;
					a === ">" ? j(n) : a === "/" ? n.state = w.OPEN_TAG_SLASH : C(g, a) ? (n.attribName = a, n.attribValue = "", n.state = w.ATTRIB_NAME) : A(n, "Invalid attribute name");
					continue;
				case w.ATTRIB_NAME:
					a === "=" ? n.state = w.ATTRIB_VALUE : a === ">" ? (A(n, "Attribute without value"), n.attribValue = n.attribName, le(n), j(n)) : b(a) ? n.state = w.ATTRIB_NAME_SAW_WHITE : C(_, a) ? n.attribName += a : A(n, "Invalid attribute name");
					continue;
				case w.ATTRIB_NAME_SAW_WHITE:
					if (a === "=") n.state = w.ATTRIB_VALUE;
					else if (b(a)) continue;
					else A(n, "Attribute without value"), n.tag.attributes[n.attribName] = "", n.attribValue = "", D(n, "onattribute", {
						name: n.attribName,
						value: ""
					}), n.attribName = "", a === ">" ? j(n) : C(g, a) ? (n.attribName = a, n.state = w.ATTRIB_NAME) : (A(n, "Invalid attribute name"), n.state = w.ATTRIB);
					continue;
				case w.ATTRIB_VALUE:
					if (b(a)) continue;
					x(a) ? (n.q = a, n.state = w.ATTRIB_VALUE_QUOTED) : (n.opt.unquotedAttributeValues || k(n, "Unquoted attribute value"), n.state = w.ATTRIB_VALUE_UNQUOTED, n.attribValue = a);
					continue;
				case w.ATTRIB_VALUE_QUOTED:
					if (a !== n.q) {
						a === "&" ? n.state = w.ATTRIB_VALUE_ENTITY_Q : n.attribValue += a;
						continue;
					}
					le(n), n.q = "", n.state = w.ATTRIB_VALUE_CLOSED;
					continue;
				case w.ATTRIB_VALUE_CLOSED:
					b(a) ? n.state = w.ATTRIB : a === ">" ? j(n) : a === "/" ? n.state = w.OPEN_TAG_SLASH : C(g, a) ? (A(n, "No whitespace between attributes"), n.attribName = a, n.attribValue = "", n.state = w.ATTRIB_NAME) : A(n, "Invalid attribute name");
					continue;
				case w.ATTRIB_VALUE_UNQUOTED:
					if (!S(a)) {
						a === "&" ? n.state = w.ATTRIB_VALUE_ENTITY_U : n.attribValue += a;
						continue;
					}
					le(n), a === ">" ? j(n) : n.state = w.ATTRIB;
					continue;
				case w.CLOSE_TAG:
					if (n.tagName) a === ">" ? ue(n) : C(_, a) ? n.tagName += a : n.script ? (n.script += "</" + n.tagName + a, n.tagName = "", n.state = w.SCRIPT) : (b(a) || A(n, "Invalid tagname in closing tag"), n.state = w.CLOSE_TAG_SAW_WHITE);
					else {
						if (b(a)) continue;
						ee(g, a) ? n.script ? (n.script += "</" + a, n.state = w.SCRIPT) : A(n, "Invalid tagname in closing tag.") : n.tagName = a;
					}
					continue;
				case w.CLOSE_TAG_SAW_WHITE:
					if (b(a)) continue;
					a === ">" ? ue(n) : A(n, "Invalid characters in closing tag");
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
})))(), 1), Bt = class {
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
function Vt(e) {
	return "prefix" in e && "uri" in e && !!e.prefix && !!e.uri;
}
var Ht = Object.freeze({
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
	reset() {}
}), Ut = "dialecte::";
function K({ enabled: e }) {
	if (!e) return Ht;
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = 0, a = {
		start(e) {
			let n = Ut + e, r = `${n}:${++i}`;
			performance.mark(r), (t.get(n) ?? t.set(n, []).get(n)).push(r);
		},
		stop(e) {
			let n = Ut + e, r = t.get(n)?.pop();
			r && (performance.measure(n, r), performance.clearMarks(r));
		},
		count(e) {
			let t = Ut + e;
			n.set(t, (n.get(t) ?? 0) + 1);
		},
		time(e, t) {
			let n = Ut + e, i = performance.now();
			try {
				return t();
			} finally {
				let e = r.get(n) ?? r.set(n, {
					calls: 0,
					totalMs: 0
				}).get(n);
				e.calls++, e.totalMs += performance.now() - i;
			}
		},
		profile(e, t) {
			return typeof console.profile == "function" ? (console.profile(Ut + e), Promise.resolve(t()).finally(() => console.profileEnd(Ut + e))) : t();
		},
		report() {
			let e = {};
			for (let t of performance.getEntriesByType("measure")) {
				if (!t.name.startsWith(Ut)) continue;
				let n = t.name.slice(10), r = e[n] ??= {
					calls: 0,
					totalMs: 0,
					avgMs: 0
				};
				r.calls++, r.totalMs += t.duration, r.avgMs = r.totalMs / r.calls;
			}
			for (let [t, n] of r) {
				let r = t.slice(10), i = e[r] ??= {
					calls: 0,
					totalMs: 0,
					avgMs: 0
				};
				i.calls += n.calls, i.totalMs += n.totalMs, i.avgMs = i.calls ? i.totalMs / i.calls : 0;
			}
			for (let [t, r] of n) {
				let n = t.slice(10), i = e[n] ??= {
					calls: 0,
					totalMs: 0,
					avgMs: 0
				};
				i.count = r;
			}
			return e;
		},
		log() {
			console.table(a.report());
		},
		reset() {
			performance.clearMarks(), performance.clearMeasures(), n.clear(), r.clear();
		}
	};
	return a;
}
function q(e) {
	let { dialecteConfig: t, useCustomRecordsIds: n, session: r, hooks: i, perf: a = Ht } = e, o = {
		defaultNamespace: null,
		stack: [],
		recordsBatch: []
	}, s = zt.parser(!0, {
		lowercase: !1,
		trim: !0,
		normalize: !0,
		position: !1,
		xmlns: !0
	});
	s.onopentag = (e) => {
		a.time("core::import::onOpenTag", () => Wt({
			node: e,
			state: o,
			dialecteConfig: t,
			useCustomRecordsIds: n
		}));
	}, s.ontext = (e) => {
		a.time("core::import::onText", () => Gt({
			text: e,
			state: o
		}));
	}, s.oncdata = (e) => {
		a.time("core::import::onText", () => Gt({
			text: e,
			state: o
		}));
	}, s.onclosetag = () => {
		a.time("core::import::onCloseTag", () => Kt({
			state: o,
			hooks: i,
			session: r,
			dialecteConfig: t,
			perf: a
		}));
	}, s.onerror = qt;
	function c() {
		let e = o.recordsBatch;
		return o.recordsBatch = [], e;
	}
	function l() {
		return o.recordsBatch.length;
	}
	return {
		parser: s,
		drainBatch: c,
		getSize: l
	};
}
function Wt(e) {
	let { node: t, state: n, dialecteConfig: r, useCustomRecordsIds: i } = e, a = Jt(t);
	n.defaultNamespace ||= Yt({
		element: t,
		defaultNamespace: r.namespaces.default,
		rootElementName: r.rootElementName
	});
	let o = Xt(t, n.defaultNamespace), s = {
		id: $t({
			attributes: t.attributes,
			useCustomRecordsIds: i
		}),
		tagName: a,
		namespace: o,
		attributes: Zt(en({
			attributes: t.attributes,
			useCustomRecordsIds: i
		})),
		value: "",
		parent: Qt(n.stack),
		children: []
	};
	n.stack.push(s);
}
function Gt(e) {
	let { text: t, state: n } = e;
	t && n.stack.length > 0 && (n.stack[n.stack.length - 1].value += t);
}
function Kt(e) {
	let { state: t, hooks: n, session: r, dialecteConfig: i, perf: a = Ht } = e, o = t.stack.pop();
	if (!o) return;
	let s = a.time("core::import::onCloseTag::standardize", () => ae({
		dialecteConfig: i,
		hooks: n,
		record: o
	}));
	n?.beforeImportRecord && a.time("core::import::onCloseTag::beforeHook", () => n.beforeImportRecord({
		record: s,
		ancestry: t.stack
	})), a.time("core::import::onCloseTag::reconcileChildren", () => {
		let e = t.stack[t.stack.length - 1];
		e ? e.children.push({
			id: s.id,
			tagName: s.tagName
		}) : s.parent && r.registerPendingChild(s.parent.id, {
			id: s.id,
			tagName: s.tagName
		});
	}), t.recordsBatch.push(s);
}
function qt(e) {
	return /* @__PURE__ */ Error(`XML parsing error: ${e}`);
}
function Jt(e) {
	return e.local;
}
function Yt(e) {
	let { element: t, defaultNamespace: n, rootElementName: r } = e;
	return m(t.name === r, { detail: `Expected root element <${r}>, got <${t.name}>` }), t.attributes?.xmlns?.value ? {
		prefix: "",
		uri: t.attributes.xmlns.value
	} : n;
}
function Xt(e, t) {
	return Vt(e) ? {
		prefix: e.prefix,
		uri: e.uri
	} : t;
}
function Zt(e) {
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
function Qt(e) {
	if (e.length === 0) return null;
	let t = e[e.length - 1];
	return t ? {
		id: t.id,
		tagName: t.tagName
	} : null;
}
function $t(e) {
	let { attributes: t, useCustomRecordsIds: n } = e, r = t[w];
	return n && r && r.value ? r.value : crypto.randomUUID();
}
function en(e) {
	let { attributes: t, useCustomRecordsIds: n } = e;
	return n ? Object.values(t).filter((e) => e.name !== w) : Object.values(t);
}
var tn = 32 * 1024, nn = 2e3;
async function rn(e) {
	let { documentId: t, store: n, config: r, useCustomRecordsIds: i = !1, chunkOptions: a, hooks: o, perf: s = Ht } = e, { file: c } = e, { supportedFileExtensions: l } = r.io;
	if (m(l.some((e) => c.name.toLowerCase().endsWith(e)), {
		key: "ASSERTION_FAILED",
		detail: `Unsupported file type: ${c.name}`
	}), c.size === 0) return {
		documentId: t,
		recordCount: 0
	};
	let u = o?.beforeImport;
	if (u) {
		let e = u(await c.text());
		c = new File([e], c.name, { type: c.type });
	}
	let d = a?.chunkSize ?? tn, f = a?.batchSize ?? nn, p = new Bt(), h = q({
		dialecteConfig: r,
		useCustomRecordsIds: i,
		session: p,
		hooks: o,
		perf: s
	});
	s.start("core::import");
	let g = await an({
		file: c,
		sax: h,
		session: p,
		store: n,
		documentId: t,
		chunkSize: d,
		batchSize: f,
		perf: s
	});
	return s.stop("core::import"), {
		documentId: t,
		recordCount: g + await on({
			hooks: o,
			store: n,
			documentId: t
		})
	};
}
async function an(e) {
	let { file: t, sax: n, session: r, store: i, documentId: a, chunkSize: o, batchSize: s, perf: c } = e, l = 0, u = t.stream().getReader(), d = new TextDecoder(), f = new Uint8Array(), p = !1;
	for (; !p;) {
		c.start("core::import::read");
		let e = await u.read();
		if (c.stop("core::import::read"), p = e.done, e.value) {
			c.start("core::import::bufferAppend");
			let t = f.length === 0 ? e.value : sn(f, e.value);
			c.stop("core::import::bufferAppend");
			let u = 0;
			for (; u + o <= t.length;) {
				c.start("core::import::decode");
				let e = d.decode(t.subarray(u, u + o), { stream: !0 });
				c.stop("core::import::decode"), u += o, c.start("core::import::sax"), n.parser.write(e), c.stop("core::import::sax"), l += await cn({
					sax: n,
					session: r,
					store: i,
					documentId: a,
					threshold: s,
					perf: c
				});
			}
			f = u < t.length ? t.slice(u) : new Uint8Array();
		}
		if (p) {
			if (f.length > 0) {
				c.start("core::import::decode");
				let e = d.decode(f);
				c.stop("core::import::decode"), c.start("core::import::sax"), n.parser.write(e), c.stop("core::import::sax");
			}
			n.parser.close(), l += await cn({
				sax: n,
				session: r,
				store: i,
				documentId: a,
				threshold: 0,
				perf: c
			});
		}
	}
	return l;
}
async function on(e) {
	let { hooks: t, store: n, documentId: r } = e;
	if (!t?.afterImport) return 0;
	let { creates: i, updates: a, deletes: o } = await t.afterImport();
	return i?.length || a?.length || o?.length ? (await n.bulkWrite(r, {
		creates: i,
		updates: a,
		deletes: o
	}), (i?.length ?? 0) - (o?.length ?? 0)) : 0;
}
function sn(e, t) {
	let n = new Uint8Array(e.length + t.length);
	return n.set(e), n.set(t, e.length), n;
}
async function cn(e) {
	let { sax: t, session: n, store: r, documentId: i, threshold: a, perf: o } = e;
	if (t.getSize() < a) return 0;
	let s = t.drainBatch();
	o.start("core::import::resolveChildren");
	let c = n.resolveChildrenForBatch(s);
	return o.stop("core::import::resolveChildren"), o.count("core::store::bulkWrite"), o.start("core::store::bulkWrite"), await r.bulkWrite(i, { creates: c }), o.stop("core::store::bulkWrite"), c.length;
}
async function ln(e) {
	let { context: t, options: n = {} } = e, { ref: r, ancestors: i, siblings: a, depth: o, includeDeleted: s, omit: c, unwrap: l, as: u = "tree" } = n, d = await St({
		context: t,
		ref: r ? O(r) : void 0,
		ancestors: i,
		siblings: a,
		depth: o,
		includeDeleted: s
	});
	if (u === "xml") return dn(t, d, n.declareNamespaces, n.includeXmlDeclaration);
	let f = un(t, d, {
		omit: c,
		unwrap: l
	});
	return u === "tree" ? f : {
		tree: f,
		xmlString: dn(t, d, n.declareNamespaces, n.includeXmlDeclaration)
	};
}
function un(e, t, n) {
	let r = Tt(t);
	r = V({
		tree: r,
		omit: n.omit
	});
	let i = e.dialecteConfig.transparentElements, a = n.unwrap ?? (i?.length ? [...i] : void 0);
	return a?.length && (r = at({
		tree: r,
		unwrapTagNames: a
	})), r = lt({
		tree: r,
		childrenConfig: e.dialecteConfig.children
	}), r;
}
function dn(e, t, n, r) {
	return Ot(At({
		records: t.liveRecords,
		config: e.dialecteConfig,
		rootId: t.rootId,
		declareNamespaces: n
	}), { includeXmlDeclaration: r });
}
var fn = class {
	constructor(e, t) {
		this.getContext = e, this.dialecteConfig = t;
	}
	async getRecord(e) {
		return I({
			context: this.getContext(),
			ref: e
		});
	}
	async getDefinition(e) {
		return it({
			context: this.getContext(),
			ref: O(e)
		});
	}
	async getRecords(e) {
		return L({
			context: this.getContext(),
			refs: e
		});
	}
	async getChild(e, t) {
		return R({
			context: this.getContext(),
			ref: O(e),
			tagName: t
		});
	}
	async getChildren(e, t) {
		return Le({
			context: this.getContext(),
			ref: O(e),
			tagName: t
		});
	}
	async getRecordsByTagName(e) {
		return Ie({
			context: this.getContext(),
			tagName: e
		});
	}
	async getAttribute(e, t) {
		let n = O(e), { fullObject: r } = t;
		return r ? $e({
			context: this.getContext(),
			ref: n,
			...t
		}) : Qe({
			context: this.getContext(),
			ref: n,
			...t
		});
	}
	async getAttributes(e, t) {
		let n = O(e), { fullObject: r } = t || {};
		return r ? nt({
			context: this.getContext(),
			ref: n,
			...t
		}) : tt({
			context: this.getContext(),
			ref: n,
			...t
		});
	}
	async getTree(e, t) {
		return ut({
			context: this.getContext(),
			ref: O(e),
			options: t,
			dialecteConfig: this.dialecteConfig
		});
	}
	async getSnapshot(e) {
		return ln({
			context: this.getContext(),
			options: e
		});
	}
	async findDescendants(e) {
		let t = O(e), n = this.dialecteConfig.descendants[t.tagName] ?? [];
		return Ve({
			context: this.getContext(),
			ref: t,
			options: { collect: n }
		});
	}
	async findAncestors(e) {
		return e ? Re({
			context: this.getContext(),
			ref: O(e)
		}) : [];
	}
	async findByAttributes(e) {
		return ze({
			context: this.getContext(),
			tagName: e.tagName,
			attributes: e.attributes
		});
	}
}, pn = class {
	constructor(e, t, n, r = Ht) {
		this.store = e, this.dialecteConfig = t, this.documentId = n, this._perf = r;
	}
	get perf() {
		return this._perf;
	}
	get any() {
		return this._any ??= new fn(() => this.context, this.dialecteConfig);
	}
	getOperations() {
		return Ae();
	}
	get context() {
		return {
			store: this.store,
			dialecteConfig: this.dialecteConfig,
			documentId: this.documentId,
			recordCache: void 0,
			stagedOperations: this.getOperations(),
			progress: ke,
			perf: this.perf
		};
	}
	async getDocumentInfo() {
		let e = await this.store.getDocument(this.documentId);
		return m(e, {
			key: "DOCUMENT_NOT_REGISTERED",
			detail: `Expected document id: ${this.documentId}`
		}), e;
	}
	async getRoot() {
		let e = await I({
			context: this.context,
			ref: { tagName: this.dialecteConfig.rootElementName }
		});
		return m(e, {
			key: "ROOT_NOT_FOUND",
			detail: `Expected tag name: ${this.dialecteConfig.rootElementName}`
		}), e;
	}
	async getRecord(e) {
		return I({
			context: this.context,
			ref: O(e)
		});
	}
	async getDefinition(e) {
		return it({
			context: this.context,
			ref: O(e)
		});
	}
	async getRecords(e) {
		let t = e.map((e) => O(e));
		return L({
			context: this.context,
			refs: t
		});
	}
	async getChild(e, t) {
		if (e) return R({
			context: this.context,
			ref: O(e),
			tagName: t
		});
	}
	async getChildren(e, t) {
		return e ? Le({
			context: this.context,
			ref: O(e),
			tagName: t
		}) : [];
	}
	async getRecordsByTagName(e) {
		return Ie({
			context: this.context,
			tagName: e
		});
	}
	async findDescendants(e, t) {
		let n = O(e);
		if (!t) {
			let e = this.dialecteConfig.descendants[n.tagName] ?? [];
			return Ve({
				context: this.context,
				ref: n,
				options: { collect: e }
			});
		}
		return Ve({
			context: this.context,
			ref: n,
			options: t
		});
	}
	async findAncestors(e, t) {
		return e ? Re({
			context: this.context,
			ref: O(e),
			options: t
		}) : [];
	}
	async getTree(e, t) {
		return ut({
			context: this.context,
			ref: O(e),
			options: t,
			dialecteConfig: this.dialecteConfig
		});
	}
	async getSnapshot(e) {
		return ln({
			context: this.context,
			options: e
		});
	}
	async getAttribute(e, t) {
		let n = O(e), { fullObject: r } = t;
		return r ? $e({
			context: this.context,
			ref: n,
			...t
		}) : Qe({
			context: this.context,
			ref: n,
			...t
		});
	}
	async getAttributes(e, t) {
		let n = O(e), { fullObject: r } = t || {};
		return r ? nt({
			context: this.context,
			ref: n,
			...t
		}) : tt({
			context: this.context,
			ref: n,
			...t
		});
	}
	async findByAttributes(e) {
		return ze({
			context: this.context,
			...e
		});
	}
};
function mn(e) {
	let { context: t, status: n, record: r, oldRecord: i, newRecord: a } = e, o, s, c;
	if (r && (o = E(r)), i && (s = E(i)), a && (c = E(a)), n === "created") {
		m(o, {
			detail: "Record is required for created",
			key: "ELEMENT_NOT_FOUND"
		});
		let e = {
			status: n,
			oldRecord: void 0,
			newRecord: o
		};
		t.stagedOperations.log.push(e), t.stagedOperations.byId.set(o.id, e);
	} else if (n === "updated") {
		m(s && c, {
			detail: "Old record and new record are required for updated",
			key: "ELEMENT_NOT_FOUND"
		});
		let e = {
			status: n,
			oldRecord: s,
			newRecord: c
		};
		t.stagedOperations.log.push(e), t.stagedOperations.byId.set(c.id, e);
	} else if (n === "deleted" && o) {
		m(o, {
			detail: "Record is required for deleted",
			key: "ELEMENT_NOT_FOUND"
		});
		let e = {
			status: n,
			oldRecord: o,
			newRecord: void 0
		};
		t.stagedOperations.log.push(e), t.stagedOperations.byId.set(o.id, e);
	}
}
function hn(e) {
	let { context: t, operations: n } = e;
	for (let e of n) switch (e.status) {
		case "created":
			mn({
				context: t,
				status: "created",
				record: e.newRecord
			});
			break;
		case "updated":
			mn({
				context: t,
				status: "updated",
				oldRecord: e.oldRecord,
				newRecord: e.newRecord
			});
			break;
		case "deleted":
			mn({
				context: t,
				status: "deleted",
				record: e.oldRecord
			});
			break;
	}
}
async function gn(e) {
	let { dialecteConfig: t, hooks: n, context: r, query: i, parentRef: a, params: o } = e, { id: s, tagName: c, attributes: l, namespace: u, value: d } = o;
	_n({
		attributes: l,
		tagName: c
	});
	let f = await I({
		context: r,
		ref: a
	});
	m(f, {
		detail: "Parent record not found",
		key: "ELEMENT_NOT_FOUND",
		ref: a
	});
	let p = ae({
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
	k({
		dialecteConfig: t,
		record: p,
		attributes: p.attributes
	}), mn({
		context: r,
		status: "created",
		record: p
	});
	let h = {
		...f,
		children: [...f.children, {
			id: p.id,
			tagName: p.tagName
		}]
	};
	return mn({
		context: r,
		status: "updated",
		oldRecord: f,
		newRecord: h
	}), n?.afterCreated && hn({
		context: r,
		operations: await n.afterCreated({
			childRecord: p,
			parentRecord: h,
			query: i
		})
	}), p;
}
function _n(e) {
	let { attributes: t, tagName: n } = e;
	if (!(!t || !Array.isArray(t))) for (let e of t) {
		let { name: t, namespace: r } = e;
		t === "xmlns" || t.startsWith("xmlns:") || !t.includes(":") || typeof r == "object" && r?.prefix === t.slice(0, t.indexOf(":")) || d("PREFIXED_ATTRIBUTE_NAME", {
			detail: `Attribute '${t}' on '${n}' is prefixed — pass a local name plus its namespace instead: { name: '${p(t)}', namespace }.`,
			ref: { tagName: n }
		});
	}
}
async function vn(e) {
	let { dialecteConfig: t, hooks: n, context: r, query: i, parentRef: a, record: o } = e, s = [];
	r.perf.start("core::deepClone"), r.perf.start("core::deepClone::countNodes");
	let c = yn(o);
	r.perf.stop("core::deepClone::countNodes"), r.progress.plan({ steps: c });
	let l = await bn({
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
function yn(e) {
	let t = 1;
	for (let n of e.tree) t += yn(n);
	return t;
}
async function bn(e) {
	let { dialecteConfig: t, hooks: n, context: r, query: i, parentRef: a, record: o, mappings: s } = e, c = !0, l = o;
	if (n?.beforeClone) {
		let e = n.beforeClone({ record: o });
		c = e.shouldBeCloned, l = e.transformedRecord;
	}
	if (!c) return l;
	let u = await gn({
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
	}), d = O(o);
	s.push({
		source: Object.assign(d, { attributes: [...o.attributes] }),
		target: O(u)
	}), r.progress.nextStep();
	for (let e of l.tree) await bn({
		dialecteConfig: t,
		hooks: n,
		context: r,
		query: i,
		parentRef: O(u),
		record: e,
		mappings: s
	});
	return u;
}
async function xn(e) {
	let { hooks: t, context: n, query: r, ref: i } = e, a = await I({
		context: n,
		ref: i
	});
	m(a, {
		detail: `Record not found (tagName=${i.tagName}, id=${i.id})`,
		key: "ELEMENT_NOT_FOUND",
		ref: i
	}), m(a.parent, {
		detail: "Cannot delete root element",
		key: "PROTECTED_ROOT"
	}), t?.beforeDelete && hn({
		context: n,
		operations: await t.beforeDelete({
			record: a,
			query: r
		})
	}), await Sn({
		context: n,
		record: a
	}), mn({
		context: n,
		status: "deleted",
		record: a
	});
	let o = await I({
		context: n,
		ref: O(a.parent)
	});
	m(o, {
		detail: `Parent record not found (tagName=${a.parent.tagName}, id=${a.parent.id})`,
		key: "ELEMENT_NOT_FOUND"
	});
	let s = {
		...o,
		children: o.children.filter((e) => e.id !== a.id)
	};
	return mn({
		context: n,
		status: "updated",
		oldRecord: o,
		newRecord: s
	}), t?.afterDelete && hn({
		context: n,
		operations: await t.afterDelete({
			record: a,
			parentRecord: s,
			query: r
		})
	}), s;
}
async function Sn(e) {
	let { context: t, record: n } = e;
	for (let e of n.children) {
		let n = await I({
			context: t,
			ref: O(e)
		});
		n && (n.children.length > 0 && await Sn({
			context: t,
			record: n
		}), mn({
			context: t,
			status: "deleted",
			record: n
		}));
	}
}
async function Cn(e) {
	let { dialecteConfig: t, hooks: n, context: r, query: i, parentRef: a, params: o } = e, s = wn(o.attributes), c = await Le({
		context: r,
		ref: a,
		tagName: o.tagName
	});
	return (s ? c.find((e) => Be({
		record: e,
		attributeFilter: s
	})) : o.id === void 0 ? c[0] : c.find((e) => e.id === o.id)) || gn({
		dialecteConfig: t,
		hooks: n,
		context: r,
		query: i,
		parentRef: a,
		params: o
	});
}
function wn(e) {
	if (!e) return;
	let t = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e.name, e.value])) : e;
	return Object.values(t).some((e) => e !== void 0 && e !== "") ? t : void 0;
}
async function Tn(e) {
	let { dialecteConfig: t, hooks: n, context: r, query: i, ref: a, params: o } = e, { attributes: s, value: c } = o, l = await I({
		context: r,
		ref: a
	});
	m(l, {
		detail: `Record not found (tagName=${a.tagName}, id=${a.id})`,
		key: "ELEMENT_NOT_FOUND",
		ref: a
	});
	let u = l.attributes;
	if (s) {
		let e = ie({
			dialecteConfig: t,
			tagName: l.tagName,
			attributes: s
		});
		k({
			dialecteConfig: t,
			record: l,
			attributes: e
		}), u = [...l.attributes.filter((t) => !e.some((e) => e.name === t.name)), ...e].filter((e) => e.value !== void 0 && e.value !== null);
	}
	let d = ae({
		dialecteConfig: t,
		hooks: n,
		record: {
			...l,
			attributes: u,
			value: c === void 0 ? l.value : c
		}
	});
	return En(l, d) ? d : (mn({
		context: r,
		status: "updated",
		oldRecord: l,
		newRecord: d
	}), n?.afterUpdated && hn({
		context: r,
		operations: await n.afterUpdated({
			oldRecord: l,
			newRecord: d,
			query: i
		})
	}), d);
}
function En(e, t) {
	return e.value !== t.value || e.attributes.length !== t.attributes.length ? !1 : e.attributes.every((e, n) => J(e, t.attributes[n]));
}
function J(e, t) {
	return e.name === t.name && e.value === t.value && e.namespace?.uri === t.namespace?.uri && e.namespace?.prefix === t.namespace?.prefix;
}
var Dn = class extends fn {
	constructor(e, t, n, r) {
		super(e, t), this.hooks = n, this.query = r;
	}
	async addChild(e, t) {
		return gn({
			context: this.getContext(),
			parentRef: O(e),
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
		return Cn({
			context: this.getContext(),
			parentRef: O(e),
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
		return Tn({
			context: this.getContext(),
			ref: O(e),
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
		return xn({
			context: this.getContext(),
			ref: O(e),
			hooks: this.hooks,
			query: this.query
		});
	}
	async deepClone(e, t) {
		return await vn({
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			context: this.getContext(),
			query: this.query,
			parentRef: O(e),
			record: t
		});
	}
};
function On(e) {
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
async function kn(e) {
	let { stagedOperations: t, store: n, documentId: r, documentState: i, progress: a, perf: o = Ht } = e;
	o.start("core::commit"), o.start("core::commit::merge");
	let { creates: s, updates: c, deletes: l } = On(t);
	o.stop("core::commit::merge");
	let u = s.length + c.length + l.length;
	i.loading = !0, a.plan({ steps: u });
	let d = 0, f = (e) => {
		for (; d < e;) a.nextStep(), d++;
	};
	try {
		o.count("core::store::commit"), o.start("core::store::commit"), await n.commit({
			documentId: r,
			creates: s.map((e) => e.newRecord),
			updates: c.map((e) => e.newRecord),
			deletes: l.map((e) => e.oldRecord.id),
			onProgress: (e) => {
				f(e);
			}
		}), o.stop("core::store::commit");
	} catch (e) {
		throw i.loading = !1, a.endPlan(), o.stop("core::commit"), e;
	}
	i.lastUpdate = Date.now(), a.endPlan(), o.stop("core::commit");
}
var An = class extends pn {
	constructor(e, t, n, r, i, a = Ht, o = () => {}) {
		super(e, t, n, a), this.stagedOperations = Ae(), this.recordCache = /* @__PURE__ */ new Map(), this.documentActivity = r, this.hooks = i, this.progressReporter = Oe(r, o);
	}
	get progress() {
		return this.progressReporter;
	}
	get any() {
		return this._anyTx ??= new Dn(() => this.context, this.dialecteConfig, this.hooks, this);
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
		return gn({
			context: this.context,
			parentRef: O(e),
			params: t,
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			query: this
		});
	}
	async ensureChild(e, t) {
		return Cn({
			context: this.context,
			parentRef: O(e),
			params: t,
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			query: this
		});
	}
	async update(e, t) {
		return Tn({
			context: this.context,
			ref: O(e),
			params: t,
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			query: this
		});
	}
	async delete(e) {
		return xn({
			context: this.context,
			ref: O(e),
			hooks: this.hooks,
			query: this
		});
	}
	async deepClone(e, t) {
		return vn({
			dialecteConfig: this.dialecteConfig,
			hooks: this.hooks,
			context: this.context,
			parentRef: O(e),
			record: t,
			query: this
		});
	}
	getStagedOperations() {
		return this.stagedOperations.log;
	}
	clearStagedOperations() {
		this.stagedOperations = Ae();
	}
	clearRecordCache() {
		this.recordCache.clear();
	}
	async commit() {
		await kn({
			stagedOperations: this.stagedOperations.log,
			store: this.store,
			documentId: this.documentId,
			documentState: this.documentActivity,
			progress: this.progressReporter,
			perf: this.perf
		});
	}
};
function jn(e) {
	return e.recordCache !== void 0;
}
var Mn = class {
	constructor(e, t, n, r, i, a) {
		this.activeTransactions = 0, this.store = e, this.config = t, this.documentId = n, this.hooks = i, this.extensionsRegistry = r, this.state = a.state, this.channelName = a.channelName, this.broadcast = a.broadcast, this.refreshHistoryStatus = a.refreshHistoryStatus, this.perf = a.perf, this.subscribe = a.subscribeState, this.signalStateChange = a.signalStateChange;
	}
	withQueryExtensions(e) {
		let t = Ee(this.extensionsRegistry?.query, e);
		return Object.assign(e, t);
	}
	withAllExtensions(e) {
		let t = Ee(this.extensionsRegistry?.query, e), n = Ee(this.extensionsRegistry?.transaction, e), r = {};
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
		return new pn(this.store, this.config, this.documentId, this.perf);
	}
	get query() {
		return this.withQueryExtensions(this.createQuery());
	}
	createTransaction() {
		return new An(this.store, this.config, this.documentId, this.state, this.hooks, this.perf, this.signalStateChange);
	}
	async transaction(e, t) {
		this.activeTransactions > 0 && d("CONCURRENT_TRANSACTION", { detail: `${this.activeTransactions} transaction(s) already active. Concurrent transactions risk lost updates — serialize them or implement a transaction queue.` }), this.activeTransactions++, this.state.loading = !0, this.state.error = null, this.signalStateChange(!1);
		let n = this.withAllExtensions(this.createTransaction());
		try {
			let r = await e(n);
			return await n.commit(), await this.refreshHistoryStatus(), this.broadcast({
				type: "commit",
				documentId: this.documentId,
				timestamp: this.state.lastUpdate ?? Date.now()
			}), n.clearStagedOperations(), n.clearRecordCache(), this.state.history.push({
				method: "commit",
				message: t?.label ?? "Changes committed",
				timestamp: Date.now()
			}), r;
		} catch (e) {
			throw this.state.error ?? d("UNKNOWN", {
				detail: e instanceof Error ? e.message : String(e),
				cause: e instanceof Error ? e : void 0
			});
		} finally {
			n.progress.forceClear(), this.activeTransactions--, this.state.loading = !1, this.signalStateChange(!0);
		}
	}
	async prepare(e, t) {
		this.activeTransactions++, this.state.loading = !0, this.state.error = null;
		let n = this.createTransaction();
		try {
			await e(this.withAllExtensions(n));
		} catch (e) {
			throw this.activeTransactions--, this.state.loading = !1, this.state.error ?? d("UNKNOWN", {
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
						throw this.state.error ?? d("UNKNOWN", {
							detail: e instanceof Error ? e.message : String(e),
							cause: e instanceof Error ? e : void 0
						});
					} finally {
						this.activeTransactions--, this.state.loading = !1;
					}
				}
			},
			discard: () => {
				a || (a = !0, n.clearStagedOperations(), n.clearRecordCache());
			}
		};
	}
	close() {
		this.store.close();
	}
	async destroy() {
		await this.store.destroy();
	}
}, Nn = "_documents", Y = "_changeLog", X = "_meta", Pn = "xel_";
function Fn(e) {
	return `${Pn}${e}`;
}
var Z = "_blobs", In = "blob_";
function Ln(e) {
	return `${In}${e}`;
}
var Rn = {
	primaryKey: "id",
	indexes: ["name", "configKey"],
	compoundIndexes: [],
	arrayIndexes: []
}, zn = {
	primaryKey: "id",
	autoIncrement: !0,
	indexes: ["documentId"],
	compoundIndexes: [["documentId", "sequenceNumber"]],
	arrayIndexes: []
}, Bn = {
	primaryKey: "key",
	indexes: [],
	compoundIndexes: [],
	arrayIndexes: []
}, Vn = {
	primaryKey: "id",
	indexes: ["documentId"],
	compoundIndexes: [],
	arrayIndexes: []
}, Hn = {
	primaryKey: "id",
	indexes: [],
	compoundIndexes: [],
	arrayIndexes: []
}, Un = /* @__PURE__ */ Te((/* @__PURE__ */ Ce(((e, t) => {
	((n, r) => {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self).Dexie = r();
	})(e, function() {
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
			t = e.indexOf(t), 0 <= t && e.splice(t, 1);
		}
		var ae = {};
		function k(e) {
			var t, n, r, i;
			if (arguments.length === 1) {
				if (a(e)) return e.slice();
				if (this === ae && typeof e == "string") return [e];
				if (i = D(e)) for (n = []; !(r = i.next()).done;) n.push(r.value);
				else {
					if (e == null || typeof (t = e.length) != "number") return [e];
					for (n = Array(t); t--;) n[t] = e[t];
				}
			} else for (t = arguments.length, n = Array(t); t--;) n[t] = arguments[t];
			return n;
		}
		var oe = typeof Symbol < "u" ? function(e) {
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
		], A = [
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
		].concat(w), se = {
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
		function j(e, t, n, r) {
			this.failures = t, this.failedKeys = r, this.successCount = n, this.message = le(e, t);
		}
		function ue(e, t) {
			this.name = "BulkError", this.failures = Object.keys(t).map(function(e) {
				return t[e];
			}), this.failuresByPos = t, this.message = le(e, this.failures);
		}
		p(ce).from(Error).extend({ toString: function() {
			return this.name + ": " + this.message;
		} }), p(j).from(ce), p(ue).from(ce);
		var de = A.reduce(function(e, t) {
			return e[t] = t + "Error", e;
		}, {}), M = ce, N = A.reduce(function(e, t) {
			var n = t + "Error";
			function r(e, r) {
				this.name = n, e ? typeof e == "string" ? (this.message = `${e}${r ? "\n " + r : ""}`, this.inner = r || null) : typeof e == "object" && (this.message = `${e.name} ${e.message}`, this.inner = e) : (this.message = se[t] || n, this.inner = null);
			}
			return p(r).from(M), e[t] = r, e;
		}, {}), fe = (N.Syntax = SyntaxError, N.Type = TypeError, N.Range = RangeError, w.reduce(function(e, t) {
			return e[t + "Error"] = N[t], e;
		}, {}));
		w = A.reduce(function(e, t) {
			return [
				"Syntax",
				"Type",
				"Range"
			].indexOf(t) === -1 && (e[t + "Error"] = N[t]), e;
		}, {});
		function P() {}
		function pe(e) {
			return e;
		}
		function me(e, t) {
			return e == null || e === pe ? t : function(n) {
				return t(e(n));
			};
		}
		function he(e, t) {
			return function() {
				e.apply(this, arguments), t.apply(this, arguments);
			};
		}
		function ge(e, t) {
			return e === P ? t : function() {
				var n = e.apply(this, arguments), r = (n !== void 0 && (arguments[0] = n), this.onsuccess), i = this.onerror, a = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
				return r && (this.onsuccess = this.onsuccess ? he(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? he(i, this.onerror) : i), a === void 0 ? n : a;
			};
		}
		function _e(e, t) {
			return e === P ? t : function() {
				e.apply(this, arguments);
				var n = this.onsuccess, r = this.onerror;
				this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? he(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? he(r, this.onerror) : r);
			};
		}
		function ve(e, t) {
			return e === P ? t : function() {
				var n = e.apply(this, arguments), r = (o(arguments[0], n), this.onsuccess), i = this.onerror, a = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
				return r && (this.onsuccess = this.onsuccess ? he(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? he(i, this.onerror) : i), n === void 0 ? a === void 0 ? void 0 : a : o(n, a);
			};
		}
		function ye(e, t) {
			return e === P ? t : function() {
				return !1 !== t.apply(this, arguments) && e.apply(this, arguments);
			};
		}
		function be(e, t) {
			return e === P ? t : function() {
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
		w.ModifyError = j, w.DexieError = ce, w.BulkError = ue;
		var xe = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
		function Se(e) {
			xe = e;
		}
		var Ce = {}, we = 100, Te = typeof Promise > "u" ? [] : (A = Promise.resolve(), typeof crypto < "u" && crypto.subtle ? [
			Te = crypto.subtle.digest("SHA-512", new Uint8Array([0])),
			s(Te),
			A
		] : [
			A,
			s(A),
			A
		]), A = Te[0], Ee = Te[1], Ee = Ee && Ee.then, De = A && A.constructor, Oe = !!Te[2], ke = function(e, t) {
			I.push([e, t]), je &&= (queueMicrotask(Ue), !1);
		}, Ae = !0, je = !0, Me = [], Ne = [], Pe = pe, Fe = {
			id: "global",
			global: !0,
			ref: 0,
			unhandleds: [],
			onunhandled: P,
			pgp: !1,
			env: {},
			finalize: P
		}, F = Fe, I = [], L = 0, Ie = [];
		function R(e) {
			if (typeof this != "object") throw TypeError("Promises must be constructed via new");
			this._listeners = [], this._lib = !1;
			var t = this._PSD = F;
			if (typeof e != "function") {
				if (e !== Ce) throw TypeError("Not a function");
				this._state = arguments[1], this._value = arguments[2], !1 === this._state && ze(this, this._value);
			} else this._state = null, this._value = null, ++t.ref, function e(t, n) {
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
				var e = F, t = Ze;
				function n(n, r) {
					var i = this, a = !e.global && (e !== F || t !== Ze), o = a && !tt(), s = new R(function(t, s) {
						Ve(i, new Re(st(n, e, a, o), st(r, e, a, o), t, s, e));
					});
					return this._consoleTask && (s._consoleTask = this._consoleTask), s;
				}
				return n.prototype = Ce, n;
			},
			set: function(e) {
				f(this, "then", e && e.prototype === Ce ? Le : {
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
			Ne.push(t), e._state === null && (n = e._lib && We(), t = Pe(t), e._state = !1, e._value = t, r = e, Me.some(function(e) {
				return e._value === r._value;
			}) || Me.push(r), Be(e), n) && Ge();
		}
		function Be(e) {
			var t = e._listeners;
			e._listeners = [];
			for (var n = 0, r = t.length; n < r; ++n) Ve(e, t[n]);
			var i = e._PSD;
			--i.ref || i.finalize(), L === 0 && (++L, ke(function() {
				--L == 0 && Ke();
			}, []));
		}
		function Ve(e, t) {
			if (e._state === null) e._listeners.push(t);
			else {
				var n = e._state ? t.onFulfilled : t.onRejected;
				if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
				++t.psd.ref, ++L, ke(He, [
					n,
					e,
					t
				]);
			}
		}
		function He(e, t, n) {
			try {
				var r, i = t._value;
				!t._state && Ne.length && (Ne = []), r = xe && t._consoleTask ? t._consoleTask.run(function() {
					return e(i);
				}) : e(i), t._state || Ne.indexOf(i) !== -1 || ((e) => {
					for (var t = Me.length; t;) if (Me[--t]._value === e._value) return Me.splice(t, 1);
				})(t), n.resolve(r);
			} catch (e) {
				n.reject(e);
			} finally {
				--L == 0 && Ke(), --n.psd.ref || n.psd.finalize();
			}
		}
		function Ue() {
			ot(Fe, function() {
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
				for (; 0 < I.length;) for (e = I, I = [], n = e.length, t = 0; t < n; ++t) {
					var r = e[t];
					r[0].apply(null, r[1]);
				}
			while (0 < I.length);
			je = Ae = !0;
		}
		function Ke() {
			for (var e = Me, t = (Me = [], e.forEach(function(e) {
				e._PSD.onunhandled.call(null, e._value, e);
			}), Ie.slice(0)), n = t.length; n;) t[--n]();
		}
		function qe(e) {
			return new R(Ce, !1, e);
		}
		function z(e, t) {
			var n = F;
			return function() {
				var r = We(), i = F;
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
				Ve(this, new Re(null, null, e, t, F));
			},
			catch: function(e) {
				var t, n;
				return arguments.length === 1 ? this.then(null, e) : (t = e, n = arguments[1], typeof t == "function" ? this.then(null, function(e) {
					return (e instanceof t ? n : qe)(e);
				}) : this.then(null, function(e) {
					return (e && e.name === t ? n : qe)(e);
				}));
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
						return i(new N.Timeout(t));
					}, e);
					n.then(r, i).finally(clearTimeout.bind(null, a));
				}) : this;
			}
		}), typeof Symbol < "u" && Symbol.toStringTag && f(R.prototype, Symbol.toStringTag, "Dexie.Promise"), Fe.env = at(), u(R, {
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
				}) : new R(Ce, !0, e);
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
					return F;
				},
				set: function(e) {
					return F = e;
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
					return Pe;
				},
				set: function(e) {
					Pe = e;
				}
			},
			follow: function(e, t) {
				return new R(function(n, r) {
					return $e(function(t, n) {
						var r = F;
						r.unhandleds = [], r.onunhandled = n, r.finalize = he(function() {
							var e, r = this;
							e = function() {
								r.unhandleds.length === 0 ? t() : n(r.unhandleds[0]);
							}, Ie.push(function t() {
								e(), Ie.splice(Ie.indexOf(t), 1);
							}), ++L, ke(function() {
								--L == 0 && Ke();
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
		}), De.withResolvers) && (R.withResolvers = De.withResolvers);
		var B = {
			awaits: 0,
			echoes: 0,
			id: 0
		}, Je = 0, Ye = [], Xe = 0, Ze = 0, Qe = 0;
		function $e(e, t, n, r) {
			var i = F, a = Object.create(i), t = (a.parent = i, a.ref = 0, a.global = !1, a.id = ++Qe, Fe.env, a.env = Oe ? {
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
			}, ot(a, e, n, r));
			return a.ref === 0 && a.finalize(), t;
		}
		function et() {
			return B.id ||= ++Je, ++B.awaits, B.echoes += we, B.id;
		}
		function tt() {
			return !!B.awaits && (--B.awaits == 0 && (B.id = 0), B.echoes = B.awaits * we, !0);
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
			var n, i, a = F;
			(t ? !B.echoes || Xe++ && e === F : !Xe || --Xe && e === F) || queueMicrotask(t ? function(e) {
				++Ze, B.echoes && --B.echoes != 0 || (B.echoes = B.awaits = B.id = 0), Ye.push(F), it(e, !0);
			}.bind(null, e) : rt), e !== F && (F = e, a === Fe && (Fe.env = at()), Oe) && (n = Fe.env.Promise, i = e.env, a.global || e.global) && (Object.defineProperty(r, "Promise", i.PromiseProp), n.all = i.all, n.race = i.race, n.resolve = i.resolve, n.reject = i.reject, i.allSettled && (n.allSettled = i.allSettled), i.any) && (n.any = i.any);
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
			var a = F;
			try {
				return it(e, !0), t(n, r, i);
			} finally {
				it(a, !1);
			}
		}
		function st(e, t, n, r) {
			return typeof e == "function" ? function() {
				var i = F;
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
		("" + Ee).indexOf("[native code]") === -1 && (et = tt = P);
		var V = R.reject, lt = "￿", ut = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", dt = "String expected.", ft = "__dbnames", pt = "readonly", mt = "readwrite";
		function ht(e, t) {
			return e ? t ? function() {
				return e.apply(this, arguments) && t.apply(this, arguments);
			} : e : t;
		}
		var gt = {
			type: 3,
			lower: -Infinity,
			lowerOpen: !1,
			upper: [[]],
			upperOpen: !1
		};
		function _t(e) {
			return typeof e != "string" || /\./.test(e) ? function(e) {
				return e;
			} : function(t) {
				return t[e] === void 0 && e in t && delete (t = E(t))[e], t;
			};
		}
		function vt() {
			throw N.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
		}
		function H(e, t) {
			try {
				var n = yt(e), r = yt(t);
				if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r === "Date" ? -1 : NaN;
				switch (n) {
					case "number":
					case "Date":
					case "string": return t < e ? 1 : e < t ? -1 : 0;
					case "binary":
						for (var i = bt(e), a = bt(t), o = i.length, s = a.length, c = o < s ? o : s, l = 0; l < c; ++l) if (i[l] !== a[l]) return i[l] < a[l] ? -1 : 1;
						return o === s ? 0 : o < s ? -1 : 1;
					case "Array":
						for (var u = e, d = t, f = u.length, p = d.length, m = f < p ? f : p, h = 0; h < m; ++h) {
							var g = H(u[h], d[h]);
							if (g !== 0) return g;
						}
						return f === p ? 0 : f < p ? -1 : 1;
				}
			} catch {}
			return NaN;
		}
		function yt(e) {
			var t = typeof e;
			return t == "object" && (ArrayBuffer.isView(e) || (t = re(e)) === "ArrayBuffer") ? "binary" : t;
		}
		function bt(e) {
			return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
		}
		function xt(e, t, n) {
			var r = e.schema.yProps;
			return r ? (t && 0 < n.numFailures && (t = t.filter(function(e, t) {
				return !n.failures[t];
			})), Promise.all(r.map(function(n) {
				return n = n.updatesTable, t ? e.db.table(n).where("k").anyOf(t).delete() : e.db.table(n).clear();
			})).then(function() {
				return n;
			})) : n;
		}
		Ct.prototype.execute = function(e) {
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
		var St = Ct;
		function Ct(e) {
			this["@@propmod"] = e;
		}
		function wt(e, t) {
			for (var n = i(t), r = n.length, a = !1, o = 0; o < r; ++o) {
				var s = n[o], c = t[s], l = b(e, s);
				c instanceof St ? (x(e, s, c.execute(l)), a = !0) : l !== c && (x(e, s, c), a = !0);
			}
			return a;
		}
		U.prototype._trans = function(e, t, n) {
			var r = this._tx || F.trans, i = this.name, a = xe && typeof console < "u" && console.createTask && console.createTask(`Dexie: ${e === "readonly" ? "read" : "write"} ${this.name}`);
			function o(e, n, r) {
				if (r.schema[i]) return t(r.idbtrans, r);
				throw new N.NotFound("Table " + i + " not part of transaction");
			}
			var s = We();
			try {
				var c = r && r.db._novip === this.db._novip ? r === F.trans ? r._promise(e, o, n) : $e(function() {
					return r._promise(e, o, n);
				}, {
					trans: r,
					transless: F.transless || F
				}) : function e(t, n, r, i) {
					if (t.idbdb && (t._state.openComplete || F.letThrough || t._vip)) {
						var a = t._createTransaction(n, r, t._dbSchema);
						try {
							a.create(), t._state.PR1398_maxLoop = 3;
						} catch (a) {
							return a.name === de.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
								return e(t, n, r, i);
							})) : V(a);
						}
						return a._promise(n, function(e, t) {
							return $e(function() {
								return F.trans = a, i(e, t, a);
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
					if (t._state.openComplete) return V(new N.DatabaseClosed(t._state.dbOpenError));
					if (!t._state.isBeingOpened) {
						if (!t._state.autoOpen) return V(new N.DatabaseClosed());
						t.open().catch(P);
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
			return e && e.constructor === Object ? this.where(e).first(t) : e == null ? V(new N.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(t) {
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
			if (n && this.db._maxKey !== lt) return s = n.keyPath.slice(0, t.length), this.where(s).equals(s.map(function(t) {
				return e[t];
			}));
			!n && xe && console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit from a compound index [${t.join("+")}]`);
			var r = this.schema.idxByName;
			function o(e, t) {
				return H(e, t) === 0;
			}
			var s = t.reduce(function(t, n) {
				var i = t[0], t = t[1], s = r[n], c = e[n];
				return [i || s, i || !s ? ht(t, s && s.multi ? function(e) {
					return e = b(e, n), a(e) && e.some(function(e) {
						return o(c, e);
					});
				} : function(e) {
					return o(c, b(e, n));
				}) : t];
			}, [null, null]), c = s[0], s = s[1];
			return c ? this.where(c.name).equals(e[c.keyPath]).filter(s) : n ? this.filter(s) : this.where(t).equals("");
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
			for (var n = this.db, r = this.name, i = ((this.schema.mappedClass = t).prototype instanceof vt && (t = ((t) => {
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
		}, U.prototype.defineClass = function() {
			return this.mapToClass(function(e) {
				o(this, e);
			});
		}, U.prototype.add = function(e, t) {
			var n = this, r = this.schema.primKey, i = r.auto, a = r.keyPath, o = e;
			return a && i && (o = _t(a)(e)), this._trans("readwrite", function(e) {
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
		}, U.prototype.upsert = function(e, t) {
			var n = this, r = this.schema.primKey.keyPath;
			return this._trans("readwrite", function(i) {
				return n.core.get({
					trans: i,
					key: e
				}).then(function(a) {
					var o = a ?? {};
					return wt(o, t), r && x(o, r, e), n.core.mutate({
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
						return e.numFailures ? R.reject(e.failures[0]) : !!a;
					});
				});
			});
		}, U.prototype.update = function(e, t) {
			return typeof e != "object" || a(e) ? this.where(":id").equals(e).modify(t) : (e = b(e, this.schema.primKey.keyPath)) === void 0 ? V(new N.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t);
		}, U.prototype.put = function(e, t) {
			var n = this, r = this.schema.primKey, i = r.auto, a = r.keyPath, o = e;
			return a && i && (o = _t(a)(e)), this._trans("readwrite", function(e) {
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
					return xt(t, [e], n);
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
					range: gt
				}).then(function(t) {
					return xt(e, null, t);
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
				if (n && i) throw new N.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
				if (i && i.length !== e.length) throw new N.InvalidArgument("Arguments objects and keys must have the same length");
				var s = e.length, o = n && o ? e.map(_t(n)) : e;
				return r.core.mutate({
					trans: t,
					type: "add",
					keys: i,
					values: o,
					wantResults: a
				}).then(function(e) {
					var t = e.numFailures, n = e.failures;
					if (t === 0) return a ? e.results : e.lastResult;
					throw new ue(`${r.name}.bulkAdd(): ${t} of ${s} operations failed`, n);
				});
			});
		}, U.prototype.bulkPut = function(e, t, n) {
			var r = this, i = Array.isArray(t) ? t : void 0, a = (n ||= i ? void 0 : t) ? n.allKeys : void 0;
			return this._trans("readwrite", function(t) {
				var n = r.schema.primKey, o = n.auto, n = n.keyPath;
				if (n && i) throw new N.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
				if (i && i.length !== e.length) throw new N.InvalidArgument("Arguments objects and keys must have the same length");
				var s = e.length, o = n && o ? e.map(_t(n)) : e;
				return r.core.mutate({
					trans: t,
					type: "put",
					keys: i,
					values: o,
					wantResults: a
				}).then(function(e) {
					var t = e.numFailures, n = e.failures;
					if (t === 0) return a ? e.results : e.lastResult;
					throw new ue(`${r.name}.bulkPut(): ${t} of ${s} operations failed`, n);
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
					var c = [], l = [], u = (e.forEach(function(e, n) {
						var r = e.key, i = e.changes, o = s[n];
						if (o) {
							for (var u = 0, d = Object.keys(i); u < d.length; u++) {
								var f = d[u], p = i[f];
								if (f === t.schema.primKey.keyPath) {
									if (H(p, r) !== 0) throw new N.Constraint("Cannot update primary key in bulkUpdate()");
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
						throw new ue(`${t.name}.bulkUpdate(): ${n} of ${u} operations failed`, r);
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
					return xt(t, e, n);
				});
			}).then(function(e) {
				var r = e.numFailures, i = e.failures;
				if (r === 0) return e.lastResult;
				throw new ue(`${t.name}.bulkDelete(): ${r} of ${n} operations failed`, i);
			});
		};
		var Tt = U;
		function U() {}
		function Et(e) {
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
				if (typeof e != "object") return r ||= ye, l = {
					subscribers: [],
					fire: o ||= P,
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
						if (t !== "asap") throw new N.InvalidArgument("Invalid event config");
						var n = s(e, pe, function() {
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
		function Dt(e, t) {
			return p(t).from({ prototype: e }), t;
		}
		function Ot(e, t) {
			return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
		}
		function kt(e, t) {
			e.filter = ht(e.filter, t);
		}
		function At(e, t, n) {
			var r = e.replayFilter;
			e.replayFilter = r ? function() {
				return ht(r(), t());
			} : t, e.justLimit = n && !r;
		}
		function jt(e, t) {
			if (e.isPrimKey) return t.primaryKey;
			var n = t.getIndexByKeyPath(e.index);
			if (n) return n;
			throw new N.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
		}
		function Mt(e, t, n) {
			var r = jt(e, t.schema);
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
		function Nt(e, t, n, r) {
			var i, a, o = e.replayFilter ? ht(e.filter, e.replayFilter()) : e.filter;
			return e.or ? (i = {}, a = function(e, n, r) {
				var a, s;
				o && !o(n, r, function(e) {
					return n.stop(e);
				}, function(e) {
					return n.fail(e);
				}) || ((s = "" + (a = n.primaryKey)) == "[object ArrayBuffer]" && (s = "" + new Uint8Array(a)), l(i, s)) || (i[s] = !0, t(e, n, r));
			}, Promise.all([e.or._iterate(a, n), Pt(Mt(e, r, n), e.algorithm, a, !e.keysOnly && e.valueMapper)])) : Pt(Mt(e, r, n), ht(e.algorithm, o), t, !e.keysOnly && e.valueMapper);
		}
		function Pt(e, t, n, r) {
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
						e.stop(t), n = P;
					}, function(t) {
						e.fail(t), n = P;
					}) || i(e.value, e, function(e) {
						return n = e;
					}), n();
				});
			});
		}
		W.prototype._read = function(e, t) {
			var n = this._ctx;
			return n.error ? n.table._trans(null, V.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
		}, W.prototype._write = function(e) {
			var t = this._ctx;
			return t.error ? t.table._trans(null, V.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
		}, W.prototype._addAlgorithm = function(e) {
			var t = this._ctx;
			t.algorithm = ht(t.algorithm, e);
		}, W.prototype._iterate = function(e, t) {
			return Nt(this._ctx, e, t, this._ctx.table.core);
		}, W.prototype.clone = function(e) {
			var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
			return e && o(n, e), t._ctx = n, t;
		}, W.prototype.raw = function() {
			return this._ctx.valueMapper = null, this;
		}, W.prototype.each = function(e) {
			var t = this._ctx;
			return this._read(function(n) {
				return Nt(t, e, n, t.table.core);
			});
		}, W.prototype.count = function(e) {
			var t = this;
			return this._read(function(e) {
				var n, r = t._ctx, i = r.table.core;
				return Ot(r, !0) ? i.count({
					trans: e,
					query: {
						index: jt(r, i.schema),
						range: r.range
					}
				}).then(function(e) {
					return Math.min(e, r.limit);
				}) : (n = 0, Nt(r, function() {
					return ++n, !1;
				}, e, i).then(function() {
					return n;
				}));
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
				return e.slice().sort(s);
			}).then(t);
		}, W.prototype.toArray = function(e) {
			var t = this;
			return this._read(function(e) {
				var n, r, i, a = t._ctx;
				return Ot(a, !0) && 0 < a.limit ? (n = a.valueMapper, r = jt(a, a.table.core.schema), a.table.core.query({
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
				})) : (i = [], Nt(a, function(e) {
					return i.push(e);
				}, e, a.table.core).then(function() {
					return i;
				}));
			}, e);
		}, W.prototype.offset = function(e) {
			var t = this._ctx;
			return e <= 0 || (t.offset += e, Ot(t) ? At(t, function() {
				var t = e;
				return function(e, n) {
					return t === 0 || (t === 1 ? --t : n(function() {
						e.advance(t), t = 0;
					}), !1);
				};
			}) : At(t, function() {
				var t = e;
				return function() {
					return --t < 0;
				};
			})), this;
		}, W.prototype.limit = function(e) {
			return this._ctx.limit = Math.min(this._ctx.limit, e), At(this._ctx, function() {
				var t = e;
				return function(e, n, r) {
					return --t <= 0 && n(r), 0 <= t;
				};
			}, !0), this;
		}, W.prototype.until = function(e, t) {
			return kt(this._ctx, function(n, r, i) {
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
			return kt(this._ctx, function(t) {
				return e(t.value);
			}), (t = this._ctx).isMatch = ht(t.isMatch, e), this;
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
			var t = this._ctx, n = (t.keysOnly = !t.isMatch, []);
			return this.each(function(e, t) {
				n.push(t.key);
			}).then(function() {
				return n;
			}).then(e);
		}, W.prototype.primaryKeys = function(e) {
			var t = this._ctx;
			if (Ot(t, !0) && 0 < t.limit) return this._read(function(e) {
				var n = jt(t, t.table.core.schema);
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
		}, W.prototype.uniqueKeys = function(e) {
			return this._ctx.unique = "unique", this.keys(e);
		}, W.prototype.firstKey = function(e) {
			return this.limit(1).keys(function(e) {
				return e[0];
			}).then(e);
		}, W.prototype.lastKey = function(e) {
			return this.reverse().firstKey(e);
		}, W.prototype.distinct = function() {
			var e, t = this._ctx, t = t.index && t.table.schema.idxByName[t.index];
			return t && t.multi && (e = {}, kt(this._ctx, function(t) {
				var t = t.primaryKey.toString(), n = l(e, t);
				return e[t] = !0, !n;
			})), this;
		}, W.prototype.modify = function(e) {
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
					return wt(t, e);
				}, s = n.table.core, c = s.schema.primaryKey, l = c.outbound, u = c.extractKey, d = 200, c = t.db._options.modifyChunkSize, f = (c && (d = typeof c == "object" ? c[s.name] || c["*"] || 200 : c), []), p = 0, m = [], h = e === It;
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
									value: E(S),
									primKey: t[f + x]
								};
								!1 !== o.call(C, C.value, C) && (C.value == null ? b.push(t[f + x]) : l || H(u(S), u(C.value)) === 0 ? (v.push(C.value), l && y.push(t[f + x])) : (b.push(t[f + x]), _.push(C.value)));
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
									return xt(n.table, b, e);
								}).then(function(e) {
									return a(b.length, e);
								});
							}).then(function() {
								return t.length > f + p && i(f + d);
							});
						});
					}
					var c = Ot(n) && n.limit === Infinity && (typeof e != "function" || h) && {
						index: n.index,
						range: n.range
					};
					return i(0).then(function() {
						if (0 < f.length) throw new j("Error modifying one or more objects", f, p, m);
						return t.length;
					});
				});
			});
		}, W.prototype.delete = function() {
			var e = this._ctx, t = e.range;
			return !Ot(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(It) : this._write(function(n) {
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
						if (e) throw new j("Could not delete some values", Object.keys(n).map(function(e) {
							return n[e];
						}), t - e);
						return t - e;
					});
				});
			});
		};
		var Ft = W;
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
			f("next");
			var e = new e.Collection(e, function() {
				return Vt(s[0], c[d - 1] + r);
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
		Object.defineProperty(K.prototype, "Collection", {
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
			var e, t, n = this, r = k.apply(ae, arguments), i = this._cmp;
			try {
				r.sort(i);
			} catch {
				return G(this, ut);
			}
			return r.length === 0 ? zt(this) : ((e = new this.Collection(this, function() {
				return Vt(r[0], r[r.length - 1]);
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
			})) return G(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", N.InvalidArgument);
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
			}, g = m, t = new this.Collection(this, function() {
				return Vt(u[0][0], u[u.length - 1][1], !c, !l);
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
			var e = k.apply(ae, arguments);
			return e.every(function(e) {
				return typeof e == "string";
			}) ? e.length === 0 ? zt(this) : this.inAnyRange(e.map(function(e) {
				return [e, e + lt];
			})) : G(this, "startsWithAnyOf() only works with strings");
		};
		var Ut = K;
		function K() {}
		function q(e) {
			return z(function(t) {
				return Wt(t), e(t.target.error), !1;
			});
		}
		function Wt(e) {
			e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
		}
		var Gt = "storagemutated", Kt = "x-storagemutated-1", qt = Et(null, Gt), Jt = (Yt.prototype._lock = function() {
			return v(!F.global), ++this._reculock, this._reculock !== 1 || F.global || (F.lockOwnerFor = this), this;
		}, Yt.prototype._unlock = function() {
			if (v(!F.global), --this._reculock == 0) for (F.global || (F.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked();) {
				var e = this._blockedFuncs.shift();
				try {
					ot(e[1], e[0]);
				} catch {}
			}
			return this;
		}, Yt.prototype._locked = function() {
			return this._reculock && F.lockOwnerFor !== this;
		}, Yt.prototype.create = function(e) {
			var t = this;
			if (this.mode) {
				var n = this.db.idbdb, r = this.db._state.dbOpenError;
				if (v(!this.idbtrans), !e && !n) switch (r && r.name) {
					case "DatabaseClosedError": throw new N.DatabaseClosed(r);
					case "MissingAPIError": throw new N.MissingAPI(r.message, r);
					default: throw new N.OpenFailed(r);
				}
				if (!this.active) throw new N.TransactionInactive();
				v(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = z(function(n) {
					Wt(n), t._reject(e.error);
				}), e.onabort = z(function(n) {
					Wt(n), t.active && t._reject(new N.Abort(e.error)), t.active = !1, t.on("abort").fire(n);
				}), e.oncomplete = z(function() {
					t.active = !1, t._resolve(), "mutatedParts" in e && qt.storagemutated.fire(e.mutatedParts);
				});
			}
			return this;
		}, Yt.prototype._promise = function(e, t, n) {
			var r, i = this;
			return e === "readwrite" && this.mode !== "readwrite" ? V(new N.ReadOnly("Transaction is readonly")) : this.active ? this._locked() ? new R(function(r, a) {
				i._blockedFuncs.push([function() {
					i._promise(e, t, n).then(r, a);
				}, F]);
			}) : n ? $e(function() {
				var e = new R(function(e, n) {
					i._lock();
					var r = t(e, n, i);
					r && r.then && r.then(e, n);
				});
				return e.finally(function() {
					return i._unlock();
				}), e._lib = !0, e;
			}) : ((r = new R(function(e, n) {
				var r = t(e, n, i);
				r && r.then && r.then(e, n);
			}))._lib = !0, r) : V(new N.TransactionInactive());
		}, Yt.prototype._root = function() {
			return this.parent ? this.parent._root() : this;
		}, Yt.prototype.waitFor = function(e) {
			var t, n = this._root(), r = R.resolve(e), i = (n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
				return r;
			}) : (n._waitingFor = r, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), function e() {
				for (++n._spinCount; n._waitingQueue.length;) n._waitingQueue.shift()();
				n._waitingFor && (t.get(-Infinity).onsuccess = e);
			}()), n._waitingFor);
			return new R(function(e, t) {
				r.then(function(t) {
					return n._waitingQueue.push(z(e.bind(null, t)));
				}, function(e) {
					return n._waitingQueue.push(z(t.bind(null, e)));
				}).finally(function() {
					n._waitingFor === i && (n._waitingFor = null);
				});
			});
		}, Yt.prototype.abort = function() {
			this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new N.Abort()));
		}, Yt.prototype.table = function(e) {
			var t = this._memoizedTables ||= {};
			if (l(t, e)) return t[e];
			var n = this.schema[e];
			if (n) return (n = new this.db.Table(e, n, this)).core = this.db.core.table(e), t[e] = n;
			throw new N.NotFound("Table " + e + " not part of transaction");
		}, Yt);
		function Yt() {}
		function Xt(e, t, n, r, i, a, o, s) {
			return {
				name: e,
				keyPath: t,
				unique: n,
				multi: r,
				auto: i,
				compound: a,
				src: (n && !o ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + Zt(t),
				type: s
			};
		}
		function Zt(e) {
			return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
		}
		function Qt(e, t, n) {
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
		var $t = function(e) {
			try {
				return e.only([[]]), $t = function() {
					return [[]];
				}, [[]];
			} catch {
				return $t = function() {
					return lt;
				}, lt;
			}
		};
		function en(e) {
			return e == null ? function() {} : typeof e == "string" ? (t = e).split(".").length === 1 ? function(e) {
				return e[t];
			} : function(e) {
				return b(e, t);
			} : function(t) {
				return b(t, e);
			};
			var t;
		}
		function tn(e) {
			return [].slice.call(e);
		}
		var nn = 0;
		function rn(e) {
			return e == null ? ":id" : typeof e == "string" ? e : `[${e.join("+")}]`;
		}
		function an(e, t, n) {
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
							e = z(e);
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
								++_, Wt(e);
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
							e = z(e);
							for (var a, o = t.objectStore(i), s = n.length, c = Array(s), l = 0, u = 0, d = function(t) {
								t = t.target, c[t._pos] = t.result, ++u === l && e(c);
							}, f = q(r), p = 0; p < s; ++p) n[p] != null && ((a = o.get(n[p]))._pos = p, a.onsuccess = d, a.onerror = f, ++l);
							l === 0 && e(c);
						});
					},
					get: function(e) {
						var t = e.trans, n = e.key;
						return new Promise(function(e, r) {
							e = z(e);
							var a = t.objectStore(i).get(n);
							a.onsuccess = function(t) {
								return e(t.target.result);
							}, a.onerror = q(r);
						});
					},
					query: (t = c, n = l, function(e) {
						return new Promise(function(a, o) {
							a = z(a);
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
							e = z(e);
							var l = a.index, u = a.range, d = t.objectStore(i), d = l.isPrimaryKey ? d : d.index(l.name), l = o ? s ? "prevunique" : "prev" : s ? "nextunique" : "next", f = !n && "openKeyCursor" in d ? d.openKeyCursor(r(u), l) : d.openCursor(r(u), l);
							f.onerror = q(c), f.onsuccess = z(function(n) {
								var r, i, a, o, s = f.result;
								s ? (s.___id = ++nn, s.done = !1, r = s.continue.bind(s), i = (i = s.continuePrimaryKey) && i.bind(s), a = s.advance.bind(s), o = function() {
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
						var t = e.query, n = e.trans, a = t.index, o = t.range;
						return new Promise(function(e, t) {
							var s = n.objectStore(i), s = a.isPrimaryKey ? s : s.index(a.name), c = r(o), c = c ? s.count(c) : s.count();
							c.onsuccess = z(function(t) {
								return e(t.target.result);
							}), c.onerror = q(t);
						});
					}
				};
			}
			o = n, s = tn((n = e).objectStoreNames), u = 0 < s.length ? o.objectStore(s[0]) : {};
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
								extractKey: en(t)
							},
							indexes: tn(e.indexNames).map(function(t) {
								return e.index(t);
							}).map(function(e) {
								var t = e.name, n = e.unique, r = e.multiEntry, e = e.keyPath, t = {
									name: t,
									compound: a(e),
									keyPath: e,
									unique: n,
									multiEntry: r,
									extractKey: en(e)
								};
								return i[rn(e)] = t;
							}),
							getIndexByKeyPath: function(e) {
								return i[rn(e)];
							}
						};
						return i[":id"] = r.primaryKey, t != null && (i[rn(t)] = r.primaryKey), r;
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
				MAX_KEY: $t(t),
				schema: s
			};
		}
		function on(e, n, r, i) {
			return r = r.IDBKeyRange, n = an(n, r, i), { dbcore: e.dbcore.reduce(function(e, n) {
				return n = n.create, t(t({}, e), n(e));
			}, n) };
		}
		function sn(e, t) {
			var n = t.db, n = on(e._middlewares, n, e._deps, t);
			e.core = n.dbcore, e.tables.forEach(function(t) {
				var n = t.name;
				e.core.schema.tables.some(function(e) {
					return e.name === n;
				}) && (t.core = e.core.table(n), e[n] instanceof e.Table) && (e[n].core = t.core);
			});
		}
		function cn(e, t, n, r) {
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
		function ln(e, t) {
			t.forEach(function(t) {
				for (var n in t) t[n] instanceof e.Table && delete t[n];
			});
		}
		function un(e, t) {
			return e._cfg.version - t._cfg.version;
		}
		function dn(e, t, n, r) {
			var a = e._dbSchema, o = (n.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = Qt("$meta", yn("")[0], []), e._storeNames.push("$meta")), e._createTransaction("readwrite", e._storeNames, a)), s = (o.create(n), o._completion.catch(r), o._reject.bind(o)), c = F.transless || F;
			$e(function() {
				if (F.trans = o, F.transless = c, t !== 0) return sn(e, n), l = t, ((r = o).storeNames.includes("$meta") ? r.table("$meta").get("version").then(function(e) {
					return e ?? l;
				}) : R.resolve(l)).then(function(t) {
					var r = e, a = t, s = o, c = n, l = [], t = r._versions, u = r._dbSchema = _n(0, r.idbdb, c);
					return (t = t.filter(function(e) {
						return e._cfg.version >= a;
					})).length === 0 ? R.resolve() : (t.forEach(function(e) {
						l.push(function() {
							var t, n, o, l = u, d = e._cfg.dbschema, f = (vn(r, l, c), vn(r, d, c), u = r._dbSchema = d, pn(l, d)), p = (f.add.forEach(function(e) {
								mn(c, e[0], e[1].primKey, e[1].indexes);
							}), f.change.forEach(function(e) {
								if (e.recreate) throw new N.Upgrade("Not yet support for changing primary key");
								var t = c.objectStore(e.name);
								e.add.forEach(function(e) {
									return gn(t, e);
								}), e.change.forEach(function(e) {
									t.deleteIndex(e.name), gn(t, e);
								}), e.del.forEach(function(e) {
									return t.deleteIndex(e);
								});
							}), e._cfg.contentUpgrade);
							if (p && e._cfg.version > a) return sn(r, c), s._memoizedTables = {}, t = S(d), f.del.forEach(function(e) {
								t[e] = l[e];
							}), ln(r, [r.Transaction.prototype]), cn(r, [r.Transaction.prototype], i(t), t), s.schema = t, (n = oe(p)) && et(), d = R.follow(function() {
								var e;
								(o = p(s)) && n && (e = tt.bind(null, null), o.then(e, e));
							}), o && typeof o.then == "function" ? R.resolve(o) : d.then(function() {
								return o;
							});
						}), l.push(function(t) {
							var n = e._cfg.dbschema, i = t;
							[].slice.call(i.db.objectStoreNames).forEach(function(e) {
								return n[e] == null && i.db.deleteObjectStore(e);
							}), ln(r, [r.Transaction.prototype]), cn(r, [r.Transaction.prototype], r._storeNames, r._dbSchema), s.schema = r._dbSchema;
						}), l.push(function(t) {
							r.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(r.idbdb.version / 10) === e._cfg.version ? (r.idbdb.deleteObjectStore("$meta"), delete r._dbSchema.$meta, r._storeNames = r._storeNames.filter(function(e) {
								return e !== "$meta";
							})) : t.objectStore("$meta").put(e._cfg.version, "version"));
						});
					}), function e() {
						return l.length ? R.resolve(l.shift()(s.idbtrans)).then(e) : R.resolve();
					}().then(function() {
						hn(u, c);
					}));
				}).catch(s);
				var r, l;
				i(a).forEach(function(e) {
					mn(n, e, a[e].primKey, a[e].indexes);
				}), sn(e, n), R.follow(function() {
					return e.on.populate.fire(o);
				}).catch(s);
			});
		}
		function fn(e, t) {
			hn(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
			var n = _n(0, e.idbdb, t);
			vn(e, e._dbSchema, t);
			for (var r = 0, i = pn(n, e._dbSchema).change; r < i.length; r++) {
				var a = ((e) => {
					if (e.change.length || e.recreate) return console.warn(`Unable to patch indexes of table ${e.name} because it has changes on the type of index or primary key.`), { value: void 0 };
					var n = t.objectStore(e.name);
					e.add.forEach(function(t) {
						xe && console.debug(`Dexie upgrade patch: Creating missing index ${e.name}.${t.src}`), gn(n, t);
					});
				})(i[r]);
				if (typeof a == "object") return a.value;
			}
		}
		function pn(e, t) {
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
		function mn(e, t, n, r) {
			var i = e.db.createObjectStore(t, n.keyPath ? {
				keyPath: n.keyPath,
				autoIncrement: n.auto
			} : { autoIncrement: n.auto });
			r.forEach(function(e) {
				return gn(i, e);
			});
		}
		function hn(e, t) {
			i(e).forEach(function(n) {
				t.db.objectStoreNames.contains(n) || (xe && console.debug("Dexie: Creating missing table", n), mn(t, n, e[n].primKey, e[n].indexes));
			});
		}
		function gn(e, t) {
			e.createIndex(t.name, t.keyPath, {
				unique: t.unique,
				multiEntry: t.multi
			});
		}
		function _n(e, t, n) {
			var r = {};
			return g(t.objectStoreNames, 0).forEach(function(e) {
				for (var t = n.objectStore(e), i = Xt(Zt(c = t.keyPath), c || "", !0, !1, !!t.autoIncrement, c && typeof c != "string", !0), a = [], o = 0; o < t.indexNames.length; ++o) {
					var s = t.index(t.indexNames[o]), c = s.keyPath, s = Xt(s.name, c, !!s.unique, !!s.multiEntry, !1, c && typeof c != "string", !1);
					a.push(s);
				}
				r[e] = Qt(e, i, a);
			}), r;
		}
		function vn(e, t, n) {
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
		function yn(e) {
			return e.split(",").map(function(e, t) {
				var n = e.split(":"), r = (r = n[1])?.trim(), n = (e = n[0].trim()).replace(/([&*]|\+\+)/g, ""), i = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
				return Xt(n, i || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), a(i), t === 0, r);
			});
		}
		xn.prototype._createTableSchema = Qt, xn.prototype._parseIndexSyntax = yn, xn.prototype._parseStoresSpec = function(e, t) {
			var n = this;
			i(e).forEach(function(r) {
				if (e[r] !== null) {
					var i = n._parseIndexSyntax(e[r]), a = i.shift();
					if (!a) throw new N.Schema("Invalid schema for table " + r + ": " + e[r]);
					if (a.unique = !0, a.multi) throw new N.Schema("Primary key cannot be multiEntry*");
					i.forEach(function(e) {
						if (e.auto) throw new N.Schema("Only primary key can be marked as autoIncrement (++)");
						if (!e.keyPath) throw new N.Schema("Index must have a name and cannot be an empty string");
					}), a = n._createTableSchema(r, a, i), t[r] = a;
				}
			});
		}, xn.prototype.stores = function(e) {
			var t = this.db, e = (this._cfg.storesSource = this._cfg.storesSource ? o(this._cfg.storesSource, e) : e, t._versions), n = {}, r = {};
			return e.forEach(function(e) {
				o(n, e._cfg.storesSource), r = e._cfg.dbschema = {}, e._parseStoresSpec(n, r);
			}), t._dbSchema = r, ln(t, [
				t._allTables,
				t,
				t.Transaction.prototype
			]), cn(t, [
				t._allTables,
				t,
				t.Transaction.prototype,
				this._cfg.tables
			], i(r), r), t._storeNames = i(r), this;
		}, xn.prototype.upgrade = function(e) {
			return this._cfg.contentUpgrade = be(this._cfg.contentUpgrade || P, e), this;
		};
		var bn = xn;
		function xn() {}
		var Sn = (() => {
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
		function Cn(e, t) {
			var n = e._dbNamesDB;
			return n || (n = e._dbNamesDB = new rr(ft, {
				addons: [],
				indexedDB: e,
				IDBKeyRange: t
			})).version(1).stores({ dbnames: "name" }), n.table("dbnames");
		}
		function wn(e) {
			return e && typeof e.databases == "function";
		}
		function Tn(e) {
			return $e(function() {
				return F.letThrough = !0, e();
			});
		}
		function En(e) {
			return !("from" in e);
		}
		var J = function(e, t) {
			var n;
			if (!this) return n = new J(), e && "d" in e && o(n, e), n;
			o(this, arguments.length ? {
				d: 1,
				from: e,
				to: 1 < arguments.length ? t : e
			} : { d: 0 });
		};
		function Dn(e, t, n) {
			var r = H(t, n);
			if (!isNaN(r)) {
				if (0 < r) throw RangeError();
				if (En(e)) return o(e, {
					from: t,
					to: n,
					d: 1
				});
				var r = e.l, i = e.r;
				if (H(n, e.from) < 0) return r ? Dn(r, t, n) : e.l = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, jn(e);
				if (0 < H(t, e.to)) return i ? Dn(i, t, n) : e.r = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, jn(e);
				H(t, e.from) < 0 && (e.from = t, e.l = null, e.d = i ? i.d + 1 : 1), 0 < H(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), t = !e.r, r && !e.l && On(e, r), i && t && On(e, i);
			}
		}
		function On(e, t) {
			En(t) || function e(t, n) {
				var r = n.from, i = n.l, a = n.r;
				Dn(t, r, n.to), i && e(t, i), a && e(t, a);
			}(e, t);
		}
		function kn(e, t) {
			var n = An(t), r = n.next();
			if (!r.done) for (var i = r.value, a = An(e), o = a.next(i.from), s = o.value; !r.done && !o.done;) {
				if (H(s.from, i.to) <= 0 && 0 <= H(s.to, i.from)) return !0;
				H(i.from, s.from) < 0 ? i = (r = n.next(s.from)).value : s = (o = a.next(i.from)).value;
			}
			return !1;
		}
		function An(e) {
			var t = En(e) ? null : {
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
		function jn(e) {
			var n, r, i, a = ((a = e.r)?.d || 0) - ((a = e.l)?.d || 0), a = 1 < a ? "r" : a < -1 ? "l" : "";
			a && (n = a == "r" ? "l" : "r", r = t({}, e), i = e[a], e.from = i.from, e.to = i.to, e[a] = i[a], r[a] = i[n], (e[n] = r).d = Mn(r)), e.d = Mn(e);
		}
		function Mn(e) {
			var t = e.r, e = e.l;
			return (t ? e ? Math.max(t.d, e.d) : t.d : e ? e.d : 0) + 1;
		}
		function Nn(e, t) {
			return i(t).forEach(function(n) {
				e[n] ? On(e[n], t[n]) : e[n] = function e(t) {
					var n, r, i = {};
					for (n in t) l(t, n) && (r = t[n], i[n] = !r || typeof r != "object" || te.has(r.constructor) ? r : e(r));
					return i;
				}(t[n]);
			}), e;
		}
		function Y(e, t) {
			return e.all || t.all || Object.keys(e).some(function(n) {
				return t[n] && kn(t[n], e[n]);
			});
		}
		u(J.prototype, ((A = {
			add: function(e) {
				return On(this, e), this;
			},
			addKey: function(e) {
				return Dn(this, e, e), this;
			},
			addKeys: function(e) {
				var t = this;
				return e.forEach(function(e) {
					return Dn(t, e, e);
				}), this;
			},
			hasKey: function(e) {
				var t = An(this).next(e).value;
				return t && H(t.from, e) <= 0 && 0 <= H(t.to, e);
			}
		})[ie] = function() {
			return An(this);
		}, A));
		var X = {}, Pn = {}, Fn = !1;
		function Z(e) {
			Nn(Pn, e), Fn || (Fn = !0, setTimeout(function() {
				Fn = !1, In(Pn, !(Pn = {}));
			}, 0));
		}
		function In(e, t) {
			t === void 0 && (t = !1);
			var n = /* @__PURE__ */ new Set();
			if (e.all) for (var r = 0, i = Object.values(X); r < i.length; r++) Ln(s = i[r], e, n, t);
			else for (var a in e) {
				var o, s, a = /^idb\:\/\/(.*)\/(.*)\//.exec(a);
				a && (o = a[1], a = a[2], s = X[`idb://${o}/${a}`]) && Ln(s, e, n, t);
			}
			n.forEach(function(e) {
				return e();
			});
		}
		function Ln(e, t, n, r) {
			for (var i = [], a = 0, o = Object.entries(e.queries.query); a < o.length; a++) {
				for (var s = o[a], c = s[0], l = [], u = 0, d = s[1]; u < d.length; u++) {
					var f = d[u];
					Y(t, f.obsSet) ? f.subscribers.forEach(function(e) {
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
				return t.dbOpenError ? V(t.dbOpenError) : e;
			});
			t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
			var r = t.openCanceller, a = Math.round(10 * e.verno), o = !1;
			function s() {
				if (t.openCanceller !== r) throw new N.DatabaseClosed("db.open() was cancelled");
			}
			function c() {
				return new R(function(r, l) {
					if (s(), !n) throw new N.MissingAPI();
					var u = e.name, p = t.autoSchema || !a ? n.open(u) : n.open(u, a);
					if (!p) throw new N.MissingAPI();
					p.onerror = q(l), p.onblocked = z(e._fireOnBlocked), p.onupgradeneeded = z(function(r) {
						var i;
						d = p.transaction, t.autoSchema && !e._options.allowEmptyDB ? (p.onerror = Wt, d.abort(), p.result.close(), (i = n.deleteDatabase(u)).onsuccess = i.onerror = z(function() {
							l(new N.NoSuchDatabase(`Database ${u} doesnt exist`));
						})) : (d.onerror = q(l), i = r.oldVersion > 2 ** 62 ? 0 : r.oldVersion, f = i < 1, e.idbdb = p.result, o && fn(e, d), dn(e, i / 10, d, l));
					}, l), p.onsuccess = z(function() {
						d = null;
						var n, s, l, m, h, _, v = e.idbdb = p.result, y = g(v.objectStoreNames);
						if (0 < y.length) try {
							var b = v.transaction((h = y).length === 1 ? h[0] : h, "readonly");
							if (t.autoSchema) _ = v, m = b, (l = e).verno = _.version / 10, m = l._dbSchema = _n(0, _, m), l._storeNames = g(_.objectStoreNames, 0), cn(l, [l._allTables], i(m), m);
							else if (vn(e, e._dbSchema, b), s = b, ((s = pn(_n(0, (n = e).idbdb, s), n._dbSchema)).add.length || s.change.some(function(e) {
								return e.add.length || e.change.length;
							})) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), v.close(), a = v.version + 1, o = !0, r(c());
							sn(e, b);
						} catch {}
						Sn.add(e), v.onversionchange = z(function(n) {
							t.vcFired = !0, e.on("versionchange").fire(n);
						}), v.onclose = z(function() {
							e.close({ disableAutoOpen: !1 });
						}), f && (y = e._deps, h = u, wn(_ = y.indexedDB) || h === ft || Cn(_, y.IDBKeyRange).put({ name: h }).catch(P)), r();
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
				return s(), t.onReadyBeingFired = [], R.resolve(Tn(function() {
					return e.on.ready.fire(e.vip);
				})).then(function n() {
					var r;
					if (0 < t.onReadyBeingFired.length) return r = t.onReadyBeingFired.reduce(be, P), t.onReadyBeingFired = [], R.resolve(Tn(function() {
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
				return r === t.openCanceller && e._close(), V(n);
			}).finally(function() {
				t.openComplete = !0, u();
			}).then(function() {
				var t;
				return f && (t = {}, e.tables.forEach(function(n) {
					n.schema.indexes.forEach(function(r) {
						r.name && (t[`idb://${e.name}/${n.name}/${r.name}`] = new J(-Infinity, [[[]]]));
					}), t[`idb://${e.name}/${n.name}/`] = t[`idb://${e.name}/${n.name}/:dels`] = new J(-Infinity, [[[]]]);
				}), qt(Gt).fire(t), In(t, !0)), e;
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
						var s = rn(e), c = i[s] = i[s] || [], l = e == null ? 0 : typeof e == "string" ? 1 : e.length, u = 0 < n, s = t(t({}, r), {
							name: u ? `${s}(virtual-from:${r.name})` : r.name,
							lowLevelIndex: r,
							isVirtual: u,
							keyTail: n,
							keyLength: l,
							extractKey: en(e),
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
								return (e = i[rn(e)]) && e[0];
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
				l(t, i) ? (a = e[i], o = t[i], typeof a == "object" && typeof o == "object" && a && o ? (s = re(a)) === re(o) ? s === "Object" ? Hn(a, o, n, r + i + ".") : a !== o && (n[r + i] = t[i]) : n[r + i] = t[i] : a !== o && (n[r + i] = t[i])) : n[r + i] = void 0;
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
						var o = F.trans, s = o.table(r).hook, c = s.deleting, u = s.creating, d = s.updating;
						switch (e.type) {
							case "add":
								if (u.fire === P) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "put":
								if (u.fire === P && d.fire === P) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "delete":
								if (c.fire === P) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "deleteRange":
								if (c.fire === P) break;
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
							var r, o, s, f = F.trans, p = e.keys || Un(a, e);
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
				for (var r = [], i = 0, a = 0; i < t.keys.length && a < e.length; ++i) H(t.keys[i], e[a]) === 0 && (r.push(n ? E(t.values[i]) : t.values[i]), ++a);
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
							return e.cache ? (t = Gn(e.keys, e.trans._cache, e.cache === "clone")) ? R.resolve(t) : r.getMany(e).then(function(t) {
								return e.trans._cache = {
									keys: e.keys,
									values: e.cache === "clone" ? E(t) : t
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
				var n = e.schema.name, r = new J(e.MIN_KEY, e.MAX_KEY);
				return t(t({}, e), {
					transaction: function(t, n, r) {
						if (F.subscr && n !== "readonly") throw new N.ReadOnly(`Readwrite transaction in liveQuery context. Querier source: ${F.querier}`);
						return e.transaction(t, n, r);
					},
					table: function(o) {
						function s(t) {
							var t = t.query;
							return [t.index, new J((t = t.range).lower ?? e.MIN_KEY, t.upper ?? e.MAX_KEY)];
						}
						var c = e.table(o), l = c.schema, u = l.primaryKey, d = l.indexes, f = u.extractKey, p = u.outbound, m = u.autoIncrement && d.filter(function(e) {
							return e.compound && e.keyPath.includes(u.keyPath);
						}), h = t(t({}, c), { mutate: function(t) {
							function i(e) {
								return e = `idb://${n}/${o}/${e}`, h[e] || (h[e] = new J());
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
									H(i, t) !== 0 && (i != null && r(i), t != null) && r(t);
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
								})), p.mutatedParts = Nn(p.mutatedParts || {}, h), e;
							});
						} }), g = {
							get: function(e) {
								return [u, new J(e.key)];
							},
							getMany: function(e) {
								return [u, new J().addKeys(e.keys)];
							},
							count: s,
							query: s,
							openCursor: s
						};
						return i(g).forEach(function(e) {
							h[e] = function(i) {
								var a = F.subscr, s = !!a, l = qn(F, c) && Jn(e, i) ? i.obsSet = {} : a;
								if (s) {
									var u, a = function(e) {
										return e = `idb://${n}/${o}/${e}`, l[e] || (l[e] = new J());
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
			return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < H(n, r.lower) : 0 <= H(n, r.lower))) && (n = e, (r = t).upper === void 0 || (r.upperOpen ? H(n, r.upper) < 0 : H(n, r.upper) <= 0));
			var n, r;
		}
		function Qn(e, t, n, r, i, o) {
			var s, c, l, u, d, f, p;
			return !n || n.length === 0 || (s = t.query.index, c = s.multiEntry, l = t.query.range, u = r.schema.primaryKey.extractKey, d = s.extractKey, f = (s.lowLevelIndex || s).extractKey, (r = n.reduce(function(e, n) {
				var r = e, i = [];
				if (n.type === "add" || n.type === "put") for (var o = new J(), s = n.values.length - 1; 0 <= s; --s) {
					var f, p = n.values[s], m = u(p);
					!o.hasKey(m) && (f = d(p), c && a(f) ? f.some(function(e) {
						return Zn(e, l);
					}) : Zn(f, l)) && (o.addKey(m), i.push(p));
				}
				switch (n.type) {
					case "add":
						var h = new J().addKeys(t.values ? e.map(function(e) {
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
						var g = new J().addKeys(n.values.map(function(e) {
							return u(e);
						}));
						r = e.filter(function(e) {
							return !g.hasKey(t.values ? u(e) : e);
						}).concat(t.values ? i : i.map(function(e) {
							return u(e);
						}));
						break;
					case "delete":
						var _ = new J().addKeys(n.keys);
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
				return H(f(e), f(t)) || H(u(e), u(t));
			}, r.sort(t.direction === "prev" || t.direction === "prevunique" ? function(e, t) {
				return p(t, e);
			} : p), t.limit && t.limit < Infinity && (r.length > t.limit ? r.length = t.limit : e.length === t.limit && r.length < t.limit && (i.dirty = !0)), o ? Object.freeze(r) : r);
		}
		function $n(e, t) {
			return H(e.lower, t.lower) === 0 && H(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
		}
		function er(e, t) {
			return ((e, t, n, r) => {
				if (e === void 0) return t === void 0 ? 0 : -1;
				if (t === void 0) return 1;
				if ((e = H(e, t)) === 0) {
					if (n && r) return 0;
					if (n) return 1;
					if (r) return -1;
				}
				return e;
			})(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= ((e, t, n, r) => {
				if (e === void 0) return t === void 0 ? 0 : 1;
				if (t === void 0) return -1;
				if ((e = H(e, t)) === 0) {
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
					r.subscribers.size === 0 && O(i, r);
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
										var u = l[c], d = X[`idb://${n}/${u}`];
										if (d) {
											var f = e.table(u), p = d.optimisticOps.filter(function(e) {
												return e.trans === s;
											});
											if (s._explicit && i && s.mutatedParts) for (var m = 0, h = Object.values(d.queries.query); m < h.length; m++) for (var g = 0, _ = (b = h[m]).slice(); g < _.length; g++) Y((x = _[g]).obsSet, s.mutatedParts) && (O(b, x), x.subscribers.forEach(function(e) {
												return o.add(e);
											}));
											else if (0 < p.length) {
												d.optimisticOps = d.optimisticOps.filter(function(e) {
													return e.trans !== s;
												});
												for (var v = 0, y = Object.values(d.queries.query); v < y.length; v++) for (var b, x, S, C = 0, ee = (b = y[v]).slice(); C < ee.length; C++) (x = ee[C]).res != null && s.mutatedParts && (i && !x.dirty ? (S = Object.isFrozen(x.res), S = Qn(x.res, x.req, p, f, x, S), x.dirty ? (O(b, x), x.subscribers.forEach(function(e) {
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
						})(!1), { signal: i }), s.addEventListener("error", o(!1), { signal: i }), s.addEventListener("complete", o(!0), { signal: i })), s;
					},
					table: function(r) {
						var i = e.table(r), a = i.schema.primaryKey;
						return t(t({}, i), {
							mutate: function(e) {
								var o, s = F.trans;
								return !a.outbound && s.db._options.cache !== "disabled" && !s.explicit && s.idbtrans.mode === "readwrite" && (o = X[`idb://${n}/${r}`]) ? (s = i.mutate(e), e.type !== "add" && e.type !== "put" || !(50 <= e.values.length || Un(a, e).some(function(e) {
									return e == null;
								})) ? (o.optimisticOps.push(e), e.mutatedParts && Z(e.mutatedParts), s.then(function(t) {
									0 < t.numFailures && (O(o.optimisticOps, e), (t = Xn(0, e, t)) && o.optimisticOps.push(t), e.mutatedParts) && Z(e.mutatedParts);
								}), s.catch(function() {
									O(o.optimisticOps, e), e.mutatedParts && Z(e.mutatedParts);
								})) : s.then(function(n) {
									var r = Xn(0, t(t({}, e), { values: e.values.map(function(e, r) {
										var i;
										return n.failures[r] ? e : (x(i = (i = a.keyPath) != null && i.includes(".") ? E(e) : t({}, e), a.keyPath, n.results[r]), i);
									}) }), n);
									o.optimisticOps.push(r), queueMicrotask(function() {
										return e.mutatedParts && Z(e.mutatedParts);
									});
								}), s) : i.mutate(e);
							},
							query: function(e) {
								var t, a, o, s, c, l, u;
								return qn(F, i) && Jn("query", e) ? (t = (o = F.trans)?.db._options.cache === "immutable", a = (o = F).requery, o = o.signal, l = ((e, t, n, r) => {
									var i = X[`idb://${e}/${t}`];
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
									switch (n) {
										case "query":
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
										case "count": return s = a.find(function(e) {
											return $n(e.req.query.range, r.query.range);
										}), [
											s,
											!!s,
											i,
											a
										];
									}
								})(n, r, "query", e), u = l[0], s = l[2], c = l[3], u && l[1] ? u.obsSet = e.obsSet : (l = i.query(e).then(function(e) {
									var n = e.result;
									if (u && (u.res = n), t) {
										for (var r = 0, i = n.length; r < i; ++r) Object.freeze(n[r]);
										Object.freeze(n);
									}
									return e;
								}).catch(function(e) {
									return c && u && O(c, u), Promise.reject(e);
								}), u = {
									obsSet: e.obsSet,
									promise: l,
									subscribers: /* @__PURE__ */ new Set(),
									type: "query",
									req: e,
									dirty: !1
								}, c ? c.push(u) : (c = [u], (s ||= X[`idb://${n}/${r}`] = {
									queries: {
										query: {},
										count: {}
									},
									objs: /* @__PURE__ */ new Map(),
									optimisticOps: [],
									unsignaledParts: {}
								}).queries.query[e.query.index.name || ""] = c)), tr(u, c, a, o), u.promise.then(function(n) {
									return n = Qn(n.result, e, s?.optimisticOps, i, u, t), { result: t ? n : E(n) };
								})) : i.query(e);
							}
						});
					}
				});
			}
		};
		function Q(e, t) {
			return new Proxy(e, { get: function(e, n, r) {
				return n === "db" ? t : Reflect.get(e, n, r);
			} });
		}
		$.prototype.version = function(e) {
			if (isNaN(e) || e < .1) throw new N.Type("Given version is not a positive number");
			if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new N.Schema("Cannot add version when database is open");
			this.verno = Math.max(this.verno, e);
			var t = this._versions, n = t.filter(function(t) {
				return t._cfg.version === e;
			})[0];
			return n || (n = new this.Version(e), t.push(n), t.sort(un), n.stores({}), this._state.autoSchema = !1), n;
		}, $.prototype._whenReady = function(e) {
			var t = this;
			return this.idbdb && (this._state.openComplete || F.letThrough || this._vip) ? e() : new R(function(e, n) {
				if (t._state.openComplete) return n(new N.DatabaseClosed(t._state.dbOpenError));
				if (!t._state.isBeingOpened) {
					if (!t._state.autoOpen) return void n(new N.DatabaseClosed());
					t.open().catch(P);
				}
				t._state.dbReadyPromise.then(e, n);
			}).then(e);
		}, $.prototype.use = function(e) {
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
		}, $.prototype.unuse = function(e) {
			var t = e.stack, n = e.name, r = e.create;
			return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(e) {
				return r ? e.create !== r : !!n && e.name !== n;
			})), this;
		}, $.prototype.open = function() {
			var e = this;
			return ot(Fe, function() {
				return Rn(e);
			});
		}, $.prototype._close = function() {
			this.on.close.fire(new CustomEvent("close"));
			var e = this._state;
			if (Sn.remove(this), this.idbdb) {
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
			var e = (e === void 0 ? { disableAutoOpen: !0 } : e).disableAutoOpen, t = this._state;
			e ? (t.isBeingOpened && t.cancelOpen(new N.DatabaseClosed()), this._close(), t.autoOpen = !1, t.dbOpenError = new N.DatabaseClosed()) : (this._close(), t.autoOpen = this._options.autoOpen || t.isBeingOpened, t.openComplete = !1, t.dbOpenError = null);
		}, $.prototype.delete = function(e) {
			var t = this, n = (e === void 0 && (e = { disableAutoOpen: !0 }), 0 < arguments.length && typeof arguments[0] != "object"), r = this._state;
			return new R(function(i, a) {
				function o() {
					t.close(e);
					var n = t._deps.indexedDB.deleteDatabase(t.name);
					n.onsuccess = z(function() {
						var e = t._deps, n = t.name, r;
						wn(r = e.indexedDB) || n === ft || Cn(r, e.IDBKeyRange).delete(n).catch(P), i();
					}), n.onerror = q(a), n.onblocked = t._fireOnBlocked;
				}
				if (n) throw new N.InvalidArgument("Invalid closeOptions argument to db.delete()");
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
				if (r < 2) throw new N.InvalidArgument("Too few arguments");
				for (var i = Array(r - 1); --r;) i[r - 1] = arguments[r];
				return n = i.pop(), [
					e,
					ee(i),
					n
				];
			}.apply(this, arguments);
			return this._transaction.apply(this, e);
		}, $.prototype._transaction = function(e, t, n) {
			var r, i, a = this, o = F.trans, s = (o && o.db === this && e.indexOf("!") === -1 || (o = null), e.indexOf("?") !== -1);
			e = e.replace("!", "").replace("?", "");
			try {
				if (i = t.map(function(e) {
					if (e = e instanceof a.Table ? e.name : e, typeof e != "string") throw TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
					return e;
				}), e == "r" || e === pt) r = pt;
				else {
					if (e != "rw" && e != mt) throw new N.InvalidArgument("Invalid transaction mode: " + e);
					r = mt;
				}
				if (o) {
					if (o.mode === pt && r === mt) {
						if (!s) throw new N.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
						o = null;
					}
					o && i.forEach(function(e) {
						if (o && o.storeNames.indexOf(e) === -1) {
							if (!s) throw new N.SubTransaction("Table " + e + " not included in parent transaction.");
							o = null;
						}
					}), s && o && !o.active && (o = null);
				}
			} catch (e) {
				return o ? o._promise(null, function(t, n) {
					n(e);
				}) : V(e);
			}
			var c = function e(t, n, r, i, a) {
				return R.resolve().then(function() {
					var o = F.transless || F, s = t._createTransaction(n, r, t._dbSchema, i), o = (s.explicit = !0, {
						trans: s,
						transless: o
					});
					if (i) s.idbtrans = i.idbtrans;
					else try {
						s.create(), s.idbtrans._explicit = !0, t._state.PR1398_maxLoop = 3;
					} catch (i) {
						return i.name === de.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
							return e(t, n, r, null, a);
						})) : V(i);
					}
					var c, l = oe(a), o = (l && et(), R.follow(function() {
						var e;
						(c = a.call(s, s)) && (l ? (e = tt.bind(null, null), c.then(e, e)) : typeof c.next == "function" && typeof c.throw == "function" && (c = zn(c)));
					}, o));
					return (c && typeof c.then == "function" ? R.resolve(c).then(function(e) {
						return s.active ? e : V(new N.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
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
			}.bind(null, this, r, i, o, n);
			return o ? o._promise(r, c, "lock") : F.trans ? ot(F.transless, function() {
				return a._whenReady(c);
			}) : this._whenReady(c);
		}, $.prototype.table = function(e) {
			if (l(this._allTables, e)) return this._allTables[e];
			throw new N.InvalidTable(`Table ${e} does not exist`);
		};
		var rr = $;
		function $(e, n) {
			var r, i, a, o, s, c = this, l = (this._middlewares = {}, this.verno = 0, $.dependencies), l = (this._options = n = t({
				addons: $.addons,
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
				dbReadyResolve: P,
				dbReadyPromise: null,
				cancelOpen: P,
				openCanceller: null,
				autoSchema: !0,
				PR1398_maxLoop: 3,
				autoOpen: n.autoOpen
			}), d = (u.dbReadyPromise = new R(function(e) {
				u.dbReadyResolve = e;
			}), u.openCanceller = new R(function(e, t) {
				u.cancelOpen = t;
			}), this._state = u, this.name = e, this.on = Et(this, "populate", "blocked", "versionchange", "close", { ready: [be, P] }), this.once = function(e, t) {
				var n = function() {
					var r = [...arguments];
					c.on(e).unsubscribe(n), t.apply(c, r);
				};
				return c.on(e, n);
			}, this.on.ready.subscribe = _(this.on.ready.subscribe, function(e) {
				return function(t, n) {
					$.vip(function() {
						var r, i = c._state;
						i.openComplete ? (i.dbOpenError || R.resolve().then(t), n && e(t)) : i.onReadyBeingFired ? (i.onReadyBeingFired.push(t), n && e(t)) : (e(t), r = c, n || e(function e() {
							r.on.ready.unsubscribe(t), r.on.ready.unsubscribe(e);
						}));
					});
				};
			}), this.Collection = (r = this, Dt(Ft.prototype, function(e, t) {
				this.db = r;
				var n = gt, i = null;
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
					valueMapper: a === pe ? null : a
				};
			})), this.Table = (i = this, Dt(Tt.prototype, function(e, t, n) {
				this.db = i, this._tx = n, this.name = e, this.schema = t, this.hook = i._allTables[e] ? i._allTables[e].hook : Et(null, {
					creating: [ge, P],
					reading: [me, pe],
					updating: [ve, P],
					deleting: [_e, P]
				});
			})), this.Transaction = (a = this, Dt(Jt.prototype, function(e, t, n, r, i) {
				var o = this;
				e !== "readonly" && t.forEach(function(e) {
					e = (e = n[e])?.yProps, e && (t = t.concat(e.map(function(e) {
						return e.updatesTable;
					})));
				}), this.db = a, this.mode = e, this.storeNames = t, this.schema = n, this.chromeTransactionDurability = r, this.idbtrans = null, this.on = Et(this, "complete", "error", "abort"), this.parent = i || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new R(function(e, t) {
					o._resolve = e, o._reject = t;
				}), this._completion.then(function() {
					o.active = !1, o.on.complete.fire();
				}, function(e) {
					var t = o.active;
					return o.active = !1, o.on.error.fire(e), o.parent ? o.parent._reject(e) : t && o.idbtrans && o.idbtrans.abort(), V(e);
				});
			})), this.Version = (o = this, Dt(bn.prototype, function(e) {
				this.db = o, this._cfg = {
					version: e,
					storesSource: null,
					dbschema: {},
					tables: {},
					contentUpgrade: null
				};
			})), this.WhereClause = (s = this, Dt(Ut.prototype, function(e, t, n) {
				if (this.db = s, this._ctx = {
					table: e,
					index: t === ":id" ? null : t,
					or: n
				}, this._cmp = this._ascending = H, this._descending = function(e, t) {
					return H(t, e);
				}, this._max = function(e, t) {
					return 0 < H(e, t) ? e : t;
				}, this._min = function(e, t) {
					return H(e, t) < 0 ? e : t;
				}, this._IDBKeyRange = s._deps.IDBKeyRange, !this._IDBKeyRange) throw new N.MissingAPI();
			})), this.on("versionchange", function(e) {
				0 < e.newVersion ? console.warn(`Another connection wants to upgrade database '${c.name}'. Closing db now to resume the upgrade.`) : console.warn(`Another connection wants to delete database '${c.name}'. Closing db now to resume the delete request.`), c.close({ disableAutoOpen: !1 });
			}), this.on("blocked", function(e) {
				!e.newVersion || e.newVersion < e.oldVersion ? console.warn(`Dexie.delete('${c.name}') was blocked`) : console.warn(`Upgrade '${c.name}' blocked by other connection holding version ${e.oldVersion / 10}`);
			}), this._maxKey = $t(n.IDBKeyRange), this._createTransaction = function(e, t, n, r) {
				return new c.Transaction(e, t, n, c._options.chromeTransactionDurability, r);
			}, this._fireOnBlocked = function(e) {
				c.on("blocked").fire(e), Sn.toArray().filter(function(e) {
					return e.name === c.name && e !== c && !e._state.vcFired;
				}).map(function(t) {
					return t.on("versionchange").fire(e);
				});
			}, this.use(Kn), this.use(nr), this.use(Yn), this.use(Vn), this.use(Wn), new Proxy(this, { get: function(e, t, n) {
				var r;
				return t === "_vip" || (t === "table" ? function(e) {
					return Q(c.table(e), d);
				} : (r = Reflect.get(e, t, n)) instanceof Tt ? Q(r, d) : t === "tables" ? r.map(function(e) {
					return Q(e, d);
				}) : t === "_createTransaction" ? function() {
					return Q(r.apply(this, arguments), d);
				} : r);
			} }));
			this.vip = d, l.forEach(function(e) {
				return e(c);
			});
		}
		var ir, Ee = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ar = (or.prototype.subscribe = function(e, t, n) {
			return this._subscribe(e && typeof e != "function" ? e : {
				next: e,
				error: t,
				complete: n
			});
		}, or.prototype[Ee] = function() {
			return this;
		}, or);
		function or(e) {
			this._subscribe = e;
		}
		try {
			ir = {
				indexedDB: r.indexedDB || r.mozIndexedDB || r.webkitIndexedDB || r.msIndexedDB,
				IDBKeyRange: r.IDBKeyRange || r.webkitIDBKeyRange
			};
		} catch {
			ir = {
				indexedDB: null,
				IDBKeyRange: null
			};
		}
		function sr(e) {
			var t, n = !1, r = new ar(function(r) {
				var i = oe(e), a, o = !1, s = {}, c = {}, l = {
					get closed() {
						return o;
					},
					unsubscribe: function() {
						o || (o = !0, a && a.abort(), u && qt.storagemutated.unsubscribe(p));
					}
				}, u = (r.start && r.start(l), !1), d = function() {
					return ct(m);
				};
				function f() {
					return Y(c, s);
				}
				var p = function(e) {
					Nn(s, e), f() && d();
				}, m = function() {
					var l, m, h;
					!o && ir.indexedDB && (s = {}, l = {}, a && a.abort(), a = new AbortController(), h = ((t) => {
						var n = We();
						try {
							i && et();
							var r = $e(e, t);
							return r = i ? r.finally(tt) : r;
						} finally {
							n && Ge();
						}
					})(m = {
						subscr: l,
						signal: a.signal,
						requery: d,
						querier: e,
						trans: null
					}), u ||= (qt.storagemutated.subscribe(p), !0), Promise.resolve(h).then(function(e) {
						n = !0, t = e, o || m.signal.aborted || (f() || (c = l, f()) ? d() : (s = {}, ct(function() {
							return !o && r.next && r.next(e);
						})));
					}, function(e) {
						n = !1, ["DatabaseClosedError", "AbortError"].includes(e?.name) || o || ct(function() {
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
		var cr = rr;
		function lr(e) {
			var t = dr;
			try {
				dr = !0, qt.storagemutated.fire(e), In(e, !0);
			} finally {
				dr = t;
			}
		}
		u(cr, t(t({}, w), {
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
					return t = cr.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (wn(n) ? Promise.resolve(n.databases()).then(function(e) {
						return e.map(function(e) {
							return e.name;
						}).filter(function(e) {
							return e !== ft;
						});
					}) : Cn(n, t).toCollection().primaryKeys()).then(e);
				} catch {
					return V(new N.MissingAPI());
				}
				var t, n;
			},
			defineClass: function() {
				return function(e) {
					o(this, e);
				};
			},
			ignoreTransaction: function(e) {
				return F.trans ? ot(F.transless || Fe, e) : e();
			},
			vip: Tn,
			async: function(e) {
				return function() {
					try {
						var t = zn(e.apply(this, arguments));
						return t && typeof t.then == "function" ? t : R.resolve(t);
					} catch (e) {
						return V(e);
					}
				};
			},
			spawn: function(e, t, n) {
				try {
					var r = zn(e.apply(n, t || []));
					return r && typeof r.then == "function" ? r : R.resolve(r);
				} catch (e) {
					return V(e);
				}
			},
			currentTransaction: { get: function() {
				return F.trans || null;
			} },
			waitFor: function(e, t) {
				return e = R.resolve(typeof e == "function" ? cr.ignoreTransaction(e) : e).timeout(t || 6e4), F.trans ? F.trans.waitFor(e) : e;
			},
			Promise: R,
			debug: {
				get: function() {
					return xe;
				},
				set: function(e) {
					Se(e);
				}
			},
			derive: p,
			extend: o,
			props: u,
			override: _,
			Events: Et,
			on: qt,
			liveQuery: sr,
			extendObservabilitySet: Nn,
			getByKeyPath: b,
			setByKeyPath: x,
			delByKeyPath: function(e, t) {
				typeof t == "string" ? x(e, t, void 0) : "length" in t && [].map.call(t, function(t) {
					x(e, t, void 0);
				});
			},
			shallowClone: S,
			deepClone: E,
			getObjectDiff: Hn,
			cmp: H,
			asap: y,
			minKey: -Infinity,
			addons: [],
			connections: { get: Sn.toArray },
			errnames: de,
			dependencies: ir,
			cache: X,
			semVer: "4.4.6",
			version: "4.4.6".split(".").map(function(e) {
				return parseInt(e);
			}).reduce(function(e, t, n) {
				return e + t / 10 ** (2 * n);
			})
		})), cr.maxKey = $t(cr.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (qt(Gt, function(e) {
			dr ||= (e = new CustomEvent(Kt, { detail: e }), dr = !0, dispatchEvent(e), !1);
		}), addEventListener(Kt, function(e) {
			e = e.detail, dr || lr(e);
		}));
		var ur, dr = !1, fr = function() {};
		return typeof BroadcastChannel < "u" && ((fr = function() {
			(ur = new BroadcastChannel(Kt)).onmessage = function(e) {
				return e.data && lr(e.data);
			};
		})(), typeof ur.unref == "function" && ur.unref(), qt(Gt, function(e) {
			dr || ur.postMessage(e);
		})), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
			if (!rr.disableBfCache && e.persisted) {
				xe && console.debug("Dexie: handling persisted pagehide"), ur?.close();
				for (var t = 0, n = Sn.toArray(); t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
			}
		}), addEventListener("pageshow", function(e) {
			!rr.disableBfCache && e.persisted && (xe && console.debug("Dexie: handling persisted pageshow"), fr(), lr({ all: new J(-Infinity, [[]]) }));
		})), R.rejectionMapper = function(e, t) {
			return !e || e instanceof ce || e instanceof TypeError || e instanceof SyntaxError || !e.name || !fe[e.name] ? e : (t = new fe[e.name](t || e.message, e), "stack" in e && f(t, "stack", { get: function() {
				return this.inner.stack;
			} }), t);
		}, Se(xe), t(rr, Object.freeze({
			__proto__: null,
			DEFAULT_MAX_CONNECTIONS: 1e3,
			Dexie: rr,
			Entity: vt,
			PropModification: St,
			RangeSet: J,
			add: function(e) {
				return new St({ add: e });
			},
			cmp: H,
			default: rr,
			liveQuery: sr,
			mergeRanges: On,
			rangesOverlap: kn,
			remove: function(e) {
				return new St({ remove: e });
			},
			replacePrefix: function(e, t) {
				return new St({ replacePrefix: [e, t] });
			}
		}), { default: rr }), rr;
	});
})))(), 1), Wn = Symbol.for("Dexie"), Gn = globalThis[Wn] || (globalThis[Wn] = Un.default);
if (Un.default.semVer !== Gn.semVer) throw Error(`Two different versions of Dexie loaded in the same app: ${Un.default.semVer} and ${Gn.semVer}`);
var { liveQuery: Kn, mergeRanges: qn, rangesOverlap: Jn, RangeSet: Yn, cmp: Xn, Entity: Zn, PropModification: Qn, replacePrefix: $n, add: er, remove: tr, DexieYProvider: nr } = Gn;
function Q(e) {
	let t = [e.autoIncrement ? `++${e.primaryKey}` : e.primaryKey];
	for (let n of e.indexes) t.push(n);
	for (let n of e.compoundIndexes) t.push(`[${n.join("+")}]`);
	for (let n of e.arrayIndexes) t.push(`*${n}`);
	return t.join(", ");
}
var rr = {
	primaryKey: "id",
	indexes: ["tagName"],
	compoundIndexes: [],
	arrayIndexes: []
}, $ = class {
	constructor(e, t) {
		this.schemaVersion = 1, this.knownDocuments = /* @__PURE__ */ new Map(), this.schemaLock = Promise.resolve(), this.stale = !1, this.name = e, this.dexieRecordSchema = Q(t?.recordSchema ?? rr), this.perf = t?.perf ?? Ht, this.db = new Gn(e);
	}
	async open() {
		await this.reloadFromPersisted();
	}
	close() {
		this.db.close();
	}
	async destroy() {
		this.db.isOpen() && (this.db.close(), await ir()), await Gn.delete(this.name), this.knownDocuments.clear();
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
			this.stale && await this.reloadFromPersisted(), this.knownDocuments.set(e.id, e), await this.reopenWithNewSchema(), await this.db.table(Nn).add(e);
		});
	}
	async getDocument(e) {
		return await this.ensureCurrentSchema(), this.db.table(Nn).get(e);
	}
	async getDocuments() {
		return await this.ensureCurrentSchema(), this.db.table(Nn).toArray();
	}
	async updateDocument(e, t) {
		await this.ensureCurrentSchema(), await this.db.table(Nn).update(e, t);
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
			let n = Ln(e);
			this.db.tables.some((e) => e.name === n) && await this.db.table(n).clear(), await this.db.table(Z).where({ documentId: e }).delete(), await this.db.table(Y).where({ documentId: e }).delete(), await this.db.table(X).delete(`head:${e}`), await this.db.table(Nn).delete(e), this.knownDocuments.delete(e), await this.reopenWithNewSchema({ drop: e });
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
	async getMany(e, t) {
		return await this.ensureCurrentSchema(), this.db.table(this.resolveTableName(t)).bulkGet(e);
	}
	async bulkWrite(e, t) {
		await this.ensureCurrentSchema();
		let { creates: n, updates: r, deletes: i } = t, a = this.db.table(this.resolveTableName(e));
		await this.db.transaction("rw", a, async () => {
			if (n?.length && (this.perf.start("core::store::bulkWrite::add"), await a.bulkAdd(n), this.perf.stop("core::store::bulkWrite::add")), r?.length) {
				this.perf.start("core::store::bulkWrite::update");
				for (let { recordId: e, ...t } of r) {
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
				this.perf.stop("core::store::bulkWrite::update");
			}
			i?.length && (this.perf.start("core::store::bulkWrite::delete"), await a.bulkDelete(i), this.perf.stop("core::store::bulkWrite::delete"));
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
					d("STORE_BULK_ADD_FAILED", {
						detail: e instanceof Error ? e.message : String(e),
						cause: e instanceof Error ? e : void 0
					});
				}
				if (r.length > 0) try {
					await o.bulkPut(r), c += r.length, a(c, s);
				} catch (e) {
					d("STORE_BULK_UPDATE_FAILED", {
						detail: e instanceof Error ? e.message : String(e),
						cause: e instanceof Error ? e : void 0
					});
				}
				if (i.length > 0) try {
					await o.bulkDelete(i), c += i.length, a(c, s);
				} catch (e) {
					d("STORE_DELETE_FAILED", {
						detail: e instanceof Error ? e.message : String(e),
						cause: e instanceof Error ? e : void 0
					});
				}
				let u = await this.getHead(t), f = await this.db.table(Y).where({ documentId: t }).filter((e) => e.sequenceNumber > u).toArray();
				f.length > 0 && await this.db.table("_changeLog").bulkDelete(f.map((e) => e.id));
				let p = u + 1, m = {
					documentId: t,
					sequenceNumber: p,
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
				await this.db.table(Y).add(m), await this.setHead(t, p);
			});
		} catch (e) {
			if (e instanceof Error && e.message.includes("dialecte")) throw e;
			d("STORE_COMMIT_FAILED", {
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
		await this.ensureCurrentSchema(), ar(this.knownDocuments, e.documentId);
		let n = this.db.table(Ln(e.documentId));
		await this.db.transaction("rw", this.db.table(Z), n, async () => {
			await this.db.table(Z).put(e), await n.put({
				id: e.id,
				data: t
			});
		});
	}
	async getBlob(e) {
		await this.ensureCurrentSchema();
		let t = await this.db.table(Z).get(e);
		if (!t) return;
		let n = await this.db.table(Ln(t.documentId)).get(e);
		if (n) return {
			entry: t,
			data: n.data
		};
	}
	async getBlobsByDocument(e) {
		return await this.ensureCurrentSchema(), (await this.db.table(Z).toArray()).filter((t) => t.attachedTo.some((t) => t.documentId === e));
	}
	async getBlobsByRecord(e, t) {
		return await this.ensureCurrentSchema(), (await this.db.table(Z).toArray()).filter((n) => n.attachedTo.some((n) => n.documentId === e && n.recordRef === t));
	}
	async getStandaloneBlobs() {
		return await this.ensureCurrentSchema(), (await this.db.table(Z).toArray()).filter((e) => e.attachedTo.length === 0);
	}
	async attachBlob(e, t) {
		await this.ensureCurrentSchema();
		let n = await this.db.table(Z).get(e);
		if (n || d("STORE_BLOB_NOT_FOUND", { detail: `Blob "${e}" not found` }), n.attachedTo.some((e) => e.documentId === t.documentId && e.recordRef === t.recordRef && e.attribute === t.attribute)) return;
		let r = [...n.attachedTo, t];
		await this.db.table(Z).update(e, { attachedTo: r });
	}
	async detachBlob(e, t) {
		await this.ensureCurrentSchema();
		let n = await this.db.table(Z).get(e);
		n || d("STORE_BLOB_NOT_FOUND", { detail: `Blob "${e}" not found` });
		let r = n.attachedTo.filter((e) => !(e.documentId === t.documentId && e.recordRef === t.recordRef));
		await this.db.table(Z).update(e, { attachedTo: r });
	}
	async removeBlob(e) {
		await this.ensureCurrentSchema();
		let t = await this.db.table(Z).get(e);
		if (!t) return;
		let n = this.db.table(Ln(t.documentId));
		await this.db.transaction("rw", this.db.table(Z), n, async () => {
			await n.delete(e), await this.db.table(Z).delete(e);
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
			[Nn]: Q(Rn),
			[Y]: Q(zn),
			[X]: Q(Bn),
			[Z]: Q(Vn)
		}, n = Q(Hn);
		for (let e of this.knownDocuments.keys()) t[this.resolveTableName(e)] = this.dexieRecordSchema, t[Ln(e)] = n;
		return e?.drop && (t[this.resolveTableName(e.drop)] = null, t[Ln(e.drop)] = null), t;
	}
	async reopenWithNewSchema(e) {
		this.perf.start("core::store::reopenSchema");
		try {
			this.db.close(), await ir(), this.schemaVersion++, this.db = new Gn(this.name), this.db.version(this.schemaVersion).stores(this.buildStores(e)), this.attachVersionChangeHandler(), await this.db.open(), await this.db.table(X).put({
				key: "schemaVersion",
				value: this.schemaVersion
			}), this.stale = !1;
		} finally {
			this.perf.stop("core::store::reopenSchema");
		}
	}
	async reloadFromPersisted() {
		this.db.isOpen() && (this.db.close(), await ir());
		let e = new Gn(this.name);
		e.version(1).stores({
			[Nn]: Q(Rn),
			[Y]: Q(zn),
			[X]: Q(Bn),
			[Z]: Q(Vn)
		});
		try {
			await e.open();
			let t = await e.table(Nn).toArray(), n = await e.table(X).get("schemaVersion");
			e.close(), this.knownDocuments = new Map(t.map((e) => [e.id, e])), this.schemaVersion = n?.value ?? 1;
		} catch {
			e.close();
		}
		this.db = new Gn(this.name), this.db.version(this.schemaVersion).stores(this.buildStores()), this.attachVersionChangeHandler(), await this.db.open(), this.stale = !1;
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
		return Fn(e);
	}
};
function ir() {
	return new Promise((e) => setTimeout(e, 0));
}
function ar(e, t) {
	e.has(t) || d("DOCUMENT_NOT_REGISTERED", { detail: `Cannot add blob: owner document "${t}" is not registered` });
}
var or = class e {
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
		this.guardWritable(), this.documents.set(e.id, e), this.records.set(Fn(e.id), /* @__PURE__ */ new Map()), this.blobData.set(e.id, /* @__PURE__ */ new Map());
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
		this.guardWritable(), this.documents.delete(e), this.records.delete(Fn(e)), this.changelog.delete(e), this.heads.delete(e), this.blobData.delete(e);
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
	async getMany(e, t) {
		let n = this.getTable(t);
		return e.map((e) => n.get(e));
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
		this.guardWritable(), this.documents.has(e.documentId) || d("DOCUMENT_NOT_REGISTERED", { detail: `Cannot add blob: owner document "${e.documentId}" is not registered` }), this.blobs.set(e.id, e), this.getBlobTable(e.documentId).set(e.id, t);
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
		n || d("STORE_BLOB_NOT_FOUND", { detail: `Blob "${e}" not found` }), !n.attachedTo.some((e) => e.documentId === t.documentId && e.recordRef === t.recordRef && e.attribute === t.attribute) && this.blobs.set(e, {
			...n,
			attachedTo: [...n.attachedTo, t]
		});
	}
	async detachBlob(e, t) {
		this.guardWritable();
		let n = this.blobs.get(e);
		n || d("STORE_BLOB_NOT_FOUND", { detail: `Blob "${e}" not found` });
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
		let t = Fn(e), n = this.records.get(t);
		return n || (n = /* @__PURE__ */ new Map(), this.records.set(t, n)), n;
	}
	guardWritable() {
		this.writable || d("STORE_NOT_WRITABLE", { detail: "In-memory store is read-only. Hydrate with a real document before writing." });
	}
};
function sr(e, t, n, r) {
	return t.type === "local" ? new $(e, {
		recordSchema: n.database.recordSchema,
		perf: r
	}) : t.type === "inMemory" ? new or(e, { writable: t.writable ?? !0 }) : t.store;
}
async function cr(e) {
	let { documentId: t, state: n, configs: r, store: i, projectName: a, options: o } = e, s = n.documents.get(t);
	m(s, {
		key: "DOCUMENT_NOT_REGISTERED",
		detail: `Document "${t}" not registered in project "${a}"`
	});
	let c = r[s.record.configKey], l = At({
		records: await i.getByDocumentId(t),
		config: c,
		withDatabaseIds: o?.withDatabaseIds
	}), u = `${s.record.name}${s.record.extension}`;
	return o?.withDownload && await kt({
		extension: s.record.extension,
		xmlDocument: l,
		filename: u
	}), {
		xmlDocument: l,
		filename: u
	};
}
async function lr(e) {
	let { blobId: t, store: n, options: r } = e, a = await n.getBlob(t);
	m(a, {
		key: "BLOB_NOT_FOUND",
		detail: `Blob "${t}" not found in store`
	});
	let o = a.entry.name;
	return r?.withDownload && await i({
		data: a.data,
		filename: o
	}), {
		entry: a.entry,
		data: a.data,
		filename: o
	};
}
function ur(e) {
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
function dr(e, t) {
	let n = new Set(t.map((e) => e.id));
	for (let n of t) e.has(n.id) || e.set(n.id, ur(n));
	for (let t of e.keys()) n.has(t) || e.delete(t);
	return e;
}
async function fr(e) {
	let { file: t, store: n, configs: r, defaultConfigKey: i, options: a, hooks: o, perf: s } = e, c = a?.configKey ?? i, l = r[c];
	m(l, {
		key: "UNKNOWN_CONFIG_KEY",
		detail: `Unknown configKey: "${c}". Available: ${Object.keys(r).join(", ")}`
	});
	let u = crypto.randomUUID(), d = t.name.includes(".") ? `.${t.name.split(".").pop()}` : l.io.supportedFileExtensions[0], f = {
		id: u,
		name: t.name.replace(/\.[^.]+$/, "") || "untitled",
		extension: d,
		configKey: c,
		createdAt: Date.now(),
		metadata: a?.metadata
	};
	await h(n, f);
	let { recordCount: p } = await rn({
		file: t,
		documentId: u,
		store: n,
		config: l,
		useCustomRecordsIds: a?.useCustomRecordsIds,
		chunkOptions: a?.chunkOptions,
		hooks: o,
		perf: s
	});
	return {
		documentId: u,
		record: f,
		documentState: ur(f),
		recordCount: p
	};
	async function h(e, t) {
		s?.start("core::import::registerDocument");
		try {
			await e.registerDocument(t);
		} finally {
			s?.stop("core::import::registerDocument");
		}
	}
}
async function pr(e) {
	let { store: t, configs: n, defaultConfigKey: r, options: i, hooks: a } = e, o = i?.configKey ?? r, s = n[o];
	m(s, {
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
	let f = ae({
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
		documentState: ur(d)
	};
}
var mr = class {
	get name() {
		return m(this._name !== void 0, {
			key: "PROJECT_NOT_OPENED",
			detail: "Call project.open(name) before accessing project properties."
		}), this._name;
	}
	get store() {
		return m(this._store !== void 0, {
			key: "PROJECT_NOT_OPENED",
			detail: "Call project.open(name) before accessing project properties."
		}), this._store;
	}
	get channel() {
		return m(this._channel !== void 0, {
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
	broadcast(e) {
		this.channel.postMessage(e);
	}
	subscribeState(e, t) {
		let n = this.stateSubscribers.get(e) ?? this.stateSubscribers.set(e, /* @__PURE__ */ new Set()).get(e);
		return n.add(t), () => n.delete(t);
	}
	signalStateChange(e, t) {
		let n = this.stateSubscribers.get(e);
		if (n) for (let e of n) e(t);
	}
	constructor(e) {
		this.closing = !1, this.pendingBroadcastWork = /* @__PURE__ */ new Set(), this.state = {
			documents: /* @__PURE__ */ new Map(),
			activeTransactions: 0
		}, this.stateSubscribers = /* @__PURE__ */ new Map();
		let t = Object.keys(e.configs);
		this.storage = e.storage, this.configs = e.configs, this.defaultConfigKey = e.defaultConfigKey ?? t[0], this.hooks = e.hooks, this.perf = K({ enabled: e.dev?.perf ?? !1 }), this.mergedExtensions = e.extensions ? A({
			base: e.extensions.base,
			custom: e.extensions.custom
		}) : void 0;
	}
	async open(e) {
		this._name = e, this.closing = !1, this._channel = new BroadcastChannel(this.channelName), this._channel.addEventListener("message", (e) => {
			this.onChannelMessage(e.data);
		});
		let t = sr(e, this.storage, this.configs[this.defaultConfigKey], this.perf);
		await t.open(), this._store = t;
		let n = await t.getDocuments();
		for (let e of n) this.state.documents.set(e.id, ur(e));
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
				t && (t.lastUpdate = e.timestamp ?? Date.now()), this.trackBroadcastWork(this.refreshHistoryStatus(e.documentId)), this.signalStateChange(e.documentId, !0);
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
		let t = await pr({
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
	}
	async removeDocument(e) {
		await this.store.removeDocument(e), this.state.documents.delete(e), this.broadcast({
			type: "document-removed",
			documentId: e,
			timestamp: Date.now()
		});
	}
	async import(e, t) {
		let n = await Promise.all(e.map((e) => fr({
			file: e,
			store: this.store,
			configs: this.configs,
			defaultConfigKey: this.defaultConfigKey,
			options: t,
			hooks: this.hooks,
			perf: this.perf
		})));
		for (let e of n) this.state.documents.set(e.documentId, e.documentState), this.broadcast({
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
		return cr({
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
		m(t, {
			key: "DOCUMENT_NOT_REGISTERED",
			detail: `Document "${e}" not registered in project "${this.name}"`
		});
		let n = this.configs[t.record.configKey];
		return new Mn(this.store, n, e, this.mergedExtensions, this.hooks, {
			state: t,
			channelName: this.channelName,
			broadcast: (e) => this.broadcast(e),
			refreshHistoryStatus: () => this.refreshHistoryStatus(e),
			perf: this.perf,
			subscribeState: (t) => this.subscribeState(e, t),
			signalStateChange: (t) => this.signalStateChange(e, t)
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
		m(t, {
			key: "DOCUMENT_NOT_REGISTERED",
			detail: `Document "${e}" not registered in project "${this.name}"`
		}), await this.store.undo(e);
		let n = Date.now();
		t.lastUpdate = n, await this.refreshHistoryStatus(e), this.signalStateChange(e, !0), this.broadcast({
			type: "commit",
			documentId: e,
			timestamp: n
		});
	}
	async redo(e) {
		let t = this.state.documents.get(e);
		m(t, {
			key: "DOCUMENT_NOT_REGISTERED",
			detail: `Document "${e}" not registered in project "${this.name}"`
		}), await this.store.redo(e);
		let n = Date.now();
		t.lastUpdate = n, await this.refreshHistoryStatus(e), this.signalStateChange(e, !0), this.broadcast({
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
		return await this.store.addBlob(r, t), this.broadcast({
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
		return lr({
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
		await this.store.attachBlob(e, t), this.broadcast({
			type: "blob-attached",
			blobId: e,
			ref: t,
			timestamp: Date.now()
		});
	}
	async detachBlob(e, t) {
		await this.store.detachBlob(e, t), this.broadcast({
			type: "blob-detached",
			blobId: e,
			ref: t,
			timestamp: Date.now()
		});
	}
	async removeBlob(e) {
		await this.store.removeBlob(e), this.broadcast({
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
		dr(this.state.documents, e);
	}
	async reconcileFromBroadcast(e) {
		this.closing || (await this.store.reconcile(e), await this.refreshState());
	}
};
//#endregion
//#region node_modules/.pnpm/@dialecte+nsd@0.2.1/node_modules/@dialecte/nsd/dist/v2017A/index.js
function hr(e) {
	let { storage: t = { type: "local" }, extensions: n } = e ?? {};
	return new mr({
		configs: {
			nsd: me,
			nsdoc: he
		},
		defaultConfigKey: "nsd",
		storage: t,
		extensions: {
			base: ge,
			custom: n
		}
	});
}
//#endregion
//#region src/nsd/utils/nsd-project.ts
var gr = "SET-LIBRARY-NSD", _r = null;
function vr() {
	return _r ||= hr().open(gr), _r;
}
var yr = g(0);
function br() {
	yr.value++;
}
//#endregion
//#region src/nsd/utils/query-nsd-metadata.ts
async function xr(e) {
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
function Sr(e) {
	return e.replace(/__+/g, "-").replace(/[\s_]/g, "").toLowerCase();
}
function Cr(e) {
	let t = [
		e.version,
		e.revision?.toUpperCase(),
		e.release
	].filter((e) => !!e);
	return t.length ? t.join(".") : "-";
}
function wr(e, t) {
	return {
		fileName: e,
		isExtension: t.isExtension,
		isNsdoc: t.isNsdoc,
		versionRevisionRelease: Cr(t)
	};
}
function Tr(e) {
	let t = e.id.replace(/\s+/g, "_");
	if (!e.version || !e.revision) return `${t}.nsd`;
	let n = e.revision.toUpperCase();
	return `${t}_${e.version}${n}${e.release}.nsd`;
}
//#endregion
export { xr as a, br as c, ee as d, b as f, Sr as i, P as l, Cr as n, vr as o, Tr as r, yr as s, wr as t, te as u };
