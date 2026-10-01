(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`.library-browser[data-v-b9c89b2f]{flex-direction:column;gap:.5rem;display:flex}.library-browser__search[data-v-b9c89b2f]{width:100%}.library-browser__label.offline[data-v-b9c89b2f]{opacity:.5}.library-browser__label--root[data-v-b9c89b2f]{text-transform:uppercase;letter-spacing:.03em;font-size:.75rem;font-weight:700}.library-browser[data-v-b9c89b2f] .explorer-tree__item[aria-level="1"]{background-color:color-mix(in srgb, currentColor 5%, transparent);border-bottom:1px solid color-mix(in srgb, currentColor 10%, transparent)}.library-browser__empty-hint[data-v-b9c89b2f],.library-browser__offline-hint[data-v-b9c89b2f]{opacity:.4;margin-left:.4rem;font-size:.75rem}.manage-sources-dialog[data-v-29164281]{flex-direction:column;width:min(560px,92vw);max-width:none;max-height:min(74vh,720px);display:flex}.manage-sources-dialog__close[data-v-29164281]{position:absolute;top:.5rem;right:.5rem}.manage-dialog-title[data-v-29164281]{margin-bottom:1rem;font-size:1.125rem;font-weight:700}.reconnect-all-btn[data-v-29164281]{margin-left:auto}.empty-state[data-v-29164281]{text-align:center;color:var(--color-base-content);opacity:.6;flex:1;justify-content:center;align-items:center;display:flex}.manage-header[data-v-29164281]{flex-shrink:0;gap:.5rem;margin-bottom:1rem;display:flex}.source-list[data-v-29164281]{flex:1;margin:0;padding:0;list-style:none;overflow:hidden auto}.source-item[data-v-29164281]{align-items:center;gap:.5rem;padding:.5rem 0;display:flex}.source-name[data-v-29164281]{flex:1;align-items:center;gap:.5rem;display:flex;overflow:hidden}.source-label[data-v-29164281]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.status-dot[data-v-29164281]{border-radius:50%;flex-shrink:0;width:.5rem;height:.5rem}.status-dot.online[data-v-29164281]{background:var(--color-success)}.status-dot.offline[data-v-29164281]{background:var(--color-warning)}.mode-badge[data-v-29164281]{background:var(--color-base-300);color:var(--color-base-content);text-transform:lowercase;border-radius:.25rem;flex-shrink:0;padding:.125rem .25rem;font-size:.625rem;line-height:1}.pwa-nudge[data-v-29164281]{background:var(--color-base-200);opacity:.7;border-radius:.5rem;flex-direction:column;flex-shrink:0;gap:.25rem;margin-top:.5rem;padding:.5rem .75rem;display:flex}.pwa-nudge-text[data-v-29164281]{color:var(--color-base-content);opacity:.6;margin:0;font-size:.75rem;line-height:1.25rem}.pwa-nudge-actions[data-v-29164281]{justify-content:flex-end;gap:.25rem;display:flex}.templates-sidebar[data-v-41a8426b]{height:100%;padding:1rem;overflow:auto}.manage-button[data-v-41a8426b]{width:100%;margin-bottom:1rem}`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})();import { At as e, C as t, F as n, I as r, M as i, N as a, Nt as o, Ot as s, P as c, Q as l, R as u, T as d, X as f, Y as p, _ as m, dt as h, et as g, i as _, k as v, n as y, ot as b, r as x, s as S, t as C, ut as w, v as T, w as E, xt as D, y as O, z as k } from "./main-CcXYMGUl.js";
import { t as A } from "./dist-eNPaMkr4.js";
//#region src/templates/sources/sources.store.ts
function j(e) {
	return e === "granted" ? "online" : "offline";
}
var M = O("library-sources", function() {
	let e = D([]), t = D(!1), n = i(() => e.value.map((e) => ({
		source: e,
		status: j(e.access)
	})));
	async function r() {
		let n = _();
		return t.value = n.isSupported(), e.value = await n.listSources(), n.onChange((t) => {
			e.value = t;
		});
	}
	async function a(e) {
		return _().attach({ mode: e });
	}
	async function o(t) {
		let n = _(), r = e.value.find((e) => e.id === t);
		r && (r.access === "prompt" ? await n.requestAccess(t) : r.access === "denied" && (await n.detach(t), await n.attach({ mode: r.mode })));
	}
	async function s() {
		let t = _();
		for (let n of e.value) n.access === "prompt" && await t.requestAccess(n.id);
	}
	async function c(e) {
		await _().detach(e);
	}
	return {
		sources: e,
		entries: n,
		isSupported: t,
		init: r,
		addSource: a,
		reconnect: o,
		reconnectAll: s,
		detachSource: c
	};
}), N = O("library-browser", function() {
	let e = M(), t = D([]), n = D(""), r = D({});
	async function a(e) {
		let t = await _().listEntries(e, { recursive: !0 });
		r.value = {
			...r.value,
			[e]: t
		};
	}
	async function o() {
		let t = e.entries.filter((e) => e.status === "online");
		await Promise.all(t.map((e) => a(e.source.id)));
		let n = new Set(t.map((e) => e.source.id)), i = {};
		for (let [e, t] of Object.entries(r.value)) n.has(e) && (i[e] = t);
		r.value = i;
	}
	async function s(n) {
		return t.value = n.map((e) => e.toLowerCase()), await o(), b(() => e.entries, o);
	}
	let c = i(() => e.entries.map((e) => ({
		sourceId: e.source.id,
		label: e.source.label,
		status: e.status,
		nodes: e.status === "online" ? L(r.value[e.source.id] ?? [], t.value) : []
	})));
	return {
		search: n,
		trees: c,
		visibleTree: i(() => {
			let e = n.value.trim().toLowerCase();
			return e ? c.value.map((t) => ({
				...t,
				nodes: R(t.nodes, e)
			})) : c.value;
		}),
		init: s
	};
});
function P(e, t) {
	if (e.startsWith(".")) return !1;
	let n = e.lastIndexOf(".");
	return n === -1 ? !1 : t.includes(e.slice(n).toLowerCase());
}
function F(e) {
	let t = e.lastIndexOf("/");
	return t === -1 ? e : e.slice(t + 1);
}
function I(e) {
	let t = e.lastIndexOf("/");
	return t === -1 ? void 0 : e.slice(0, t);
}
function L(e, t) {
	let n = /* @__PURE__ */ new Map(), r = [];
	for (let r of e) n.set(r.path, {
		path: r.path,
		name: F(r.path),
		kind: r.kind,
		children: [],
		matchesExtension: r.kind === "file" ? P(F(r.path), t) : !1
	});
	for (let t of e) {
		let e = n.get(t.path);
		if (!e) continue;
		let i = I(t.path), a = i ? n.get(i) : void 0;
		a ? a.children.push(e) : r.push(e);
	}
	function i(e) {
		return e.kind === "file" ? e.matchesExtension : (e.children = e.children.filter((e) => {
			let t = i(e);
			return e.kind === "directory" || t;
		}), e.matchesExtension = e.children.some((e) => e.matchesExtension), e.matchesExtension);
	}
	return r.filter((e) => {
		let t = i(e);
		return e.kind === "directory" || t;
	});
}
function R(e, t) {
	let n = [];
	for (let r of e) {
		if (r.kind === "file") {
			r.path.toLowerCase().includes(t) && n.push(r);
			continue;
		}
		let e = R(r.children, t);
		e.length > 0 && n.push({
			...r,
			children: e
		});
	}
	return n;
}
//#endregion
//#region src/templates/browser/library-browser.vue?vue&type=script&setup=true&lang.ts
var z = { class: "library-browser" }, B = {
	key: 0,
	class: "library-browser__empty-hint",
	"data-testid": "library-browser-empty-hint"
}, V = {
	key: 1,
	class: "library-browser__offline-hint"
}, H = "SET-TEMPLATES-FILETREE", U = /* @__PURE__ */ m(/* @__PURE__ */ k({
	__name: "library-browser",
	props: { extensions: {} },
	setup(t) {
		let u = t, d = N(), m;
		p(async () => {
			m = await d.init(u.extensions);
		}), f(() => {
			m?.();
		});
		let g = D(/* @__PURE__ */ new Set()), _ = D(/* @__PURE__ */ new Set()), v = i(() => {
			let e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set(), n = d.visibleTree.map((n) => (n.status === "offline" ? t.add(n.sourceId) : n.nodes.some((e) => e.matchesExtension) || e.add(n.sourceId), {
				id: n.sourceId,
				name: n.label,
				tag: "",
				selectable: !1,
				children: n.status === "online" ? n.nodes.map((t) => O(t, n.sourceId, e)) : void 0
			}));
			return g.value = e, _.value = t, n;
		});
		function y(e) {
			return !e.includes("::");
		}
		let b = i(() => d.search.trim().length > 0), x = D(T()), S = i(() => b.value ? {
			scoped: [],
			all: !0
		} : x.value);
		function C(e) {
			b.value || (x.value = e, localStorage.setItem(H, JSON.stringify(e)));
		}
		function T() {
			try {
				let e = localStorage.getItem(H), t = e ? JSON.parse(e) : void 0;
				if (t && Array.isArray(t.scoped)) return {
					scoped: t.scoped,
					all: !!t.all
				};
			} catch {}
			return {
				scoped: [],
				all: !1
			};
		}
		function O(e, t, n) {
			let r = `${t}::${e.path}`;
			return e.kind === "directory" ? (e.matchesExtension || n.add(r), {
				id: r,
				name: e.name,
				tag: "",
				selectable: !1,
				children: e.children.map((e) => O(e, t, n))
			}) : {
				id: r,
				name: e.name,
				tag: "",
				selectable: !0
			};
		}
		return (t, i) => (l(), r("div", z, [h(a("input", {
			"onUpdate:modelValue": i[0] ||= (e) => s(d).search = e,
			type: "search",
			class: "input input-sm library-browser__search",
			placeholder: "Search...",
			"data-testid": "library-browser-search"
		}, null, 512), [[E, s(d).search]]), v.value.length ? (l(), c(s(A), {
			key: 0,
			items: v.value,
			expanded: S.value,
			"aria-label": "Template Library Browser",
			"onUpdate:expanded": C
		}, {
			"node-label": w(({ node: t }) => [
				a("span", {
					class: e(["library-browser__label", {
						offline: _.value.has(t.id),
						"library-browser__label--root": y(t.id)
					}]),
					"data-testid": "library-browser-node-label"
				}, o(t.name), 3),
				g.value.has(t.id) ? (l(), r("span", B, " No matching files ")) : n("", !0),
				_.value.has(t.id) ? (l(), r("span", V, "Offline")) : n("", !0)
			]),
			_: 1
		}, 8, ["items", "expanded"])) : n("", !0)]));
	}
}), [["__scopeId", "data-v-b9c89b2f"]]), W = ["open"], G = { class: "modal-box manage-sources-dialog" }, K = {
	key: 0,
	"data-testid": "unsupported-msg",
	class: "empty-state"
}, q = { class: "manage-header" }, J = { class: "source-list" }, Y = ["data-source-id"], X = { class: "source-name" }, Z = { class: "source-label" }, Q = {
	key: 0,
	"data-testid": "readonly-badge",
	class: "mode-badge",
	title: "Read-only"
}, $ = {
	key: 1,
	"data-testid": "readwrite-badge",
	class: "mode-badge",
	title: "Read-write"
}, ee = ["title"], te = [
	"data-source-id",
	"disabled",
	"onClick"
], ne = ["data-source-id", "onClick"], re = {
	key: 0,
	"data-testid": "pwa-nudge",
	class: "pwa-nudge"
}, ie = { class: "pwa-nudge-actions" }, ae = /* @__PURE__ */ m(/* @__PURE__ */ k({
	__name: "manage-sources-dialog",
	setup(t, { expose: c }) {
		c({
			open: A,
			close: j
		});
		let u = M(), m = C(), _, y, b = D(!1), x = D(!1), S = D(!1), w = D(localStorage.getItem("set:pwa-nudge-dismissed") === "1"), T = i(() => !x.value && !w.value && u.entries.length > 0);
		function E() {
			w.value = !0, localStorage.setItem("set:pwa-nudge-dismissed", "1");
		}
		async function O() {
			await m.promptInstall() && (x.value = !0);
		}
		async function k(e) {
			try {
				await u.addSource(e);
			} catch {}
		}
		function A() {
			b.value = !0;
		}
		function j() {
			b.value = !1;
		}
		return p(async () => {
			_ = await u.init(), x.value = m.isInstalled(), S.value = m.canInstall(), y = m.onChange(() => {
				x.value = m.isInstalled(), S.value = m.canInstall();
			});
		}), f(() => {
			_?.(), y?.();
		}), (t, i) => (l(), r("dialog", {
			class: "modal",
			open: b.value
		}, [h(a("div", G, [
			a("button", {
				class: "btn btn-sm btn-circle btn-ghost manage-sources-dialog__close",
				type: "button",
				"aria-label": "Close",
				onClick: j
			}, " ✕ "),
			i[5] ||= a("h3", { class: "manage-dialog-title" }, "Manage Sources", -1),
			s(u).isSupported ? (l(), r(v, { key: 1 }, [
				a("div", q, [
					a("button", {
						"data-testid": "add-source-btn",
						class: "btn btn-sm",
						onClick: i[0] ||= (e) => k("readwrite")
					}, " Add "),
					a("button", {
						"data-testid": "add-readonly-btn",
						class: "btn btn-sm",
						onClick: i[1] ||= (e) => k("read")
					}, " Add Read-Only "),
					a("button", {
						"data-testid": "reconnect-all-btn",
						class: "btn btn-sm reconnect-all-btn",
						onClick: i[2] ||= (e) => s(u).reconnectAll()
					}, " Reconnect all ")
				]),
				a("ul", J, [(l(!0), r(v, null, g(s(u).entries, (t) => (l(), r("li", {
					key: t.source.id,
					"data-source-id": t.source.id,
					"data-testid": "source-item",
					class: "source-item"
				}, [
					a("span", X, [
						a("span", Z, o(t.source.label), 1),
						t.source.mode === "read" ? (l(), r("span", Q, "r")) : (l(), r("span", $, "rw")),
						a("span", {
							"data-testid": "status-badge",
							class: e(["status-dot", t.status]),
							title: t.status
						}, null, 10, ee)
					]),
					a("button", {
						"data-source-id": t.source.id,
						"data-testid": "reconnect-btn",
						class: "btn btn-sm",
						disabled: t.status === "online",
						onClick: (e) => s(u).reconnect(t.source.id)
					}, " Reconnect ", 8, te),
					a("button", {
						"data-source-id": t.source.id,
						"data-testid": "detach-btn",
						class: "btn btn-sm btn-ghost",
						onClick: (e) => s(u).detachSource(t.source.id)
					}, " Remove ", 8, ne)
				], 8, Y))), 128))]),
				T.value ? (l(), r("div", re, [i[4] ||= a("p", { class: "pwa-nudge-text" }, "Install SET to keep folder access between sessions.", -1), a("div", ie, [S.value ? (l(), r("button", {
					key: 0,
					"data-testid": "pwa-nudge-install",
					class: "btn btn-sm btn-ghost",
					onClick: O
				}, " Install ")) : n("", !0), a("button", {
					"data-testid": "pwa-nudge-dismiss",
					class: "btn btn-sm btn-ghost",
					onClick: E
				}, " Dismiss ")])])) : n("", !0)
			], 64)) : (l(), r("div", K, [...i[3] ||= [a("p", null, " This browser does not support local folder sources. Use Chrome/Edge or install SET as a PWA. ", -1)]]))
		], 512), [[d, b.value]])], 8, W));
	}
}), [["__scopeId", "data-v-29164281"]]), oe = { class: "templates-sidebar" }, se = /* @__PURE__ */ m(/* @__PURE__ */ k({
	__name: "sources-sidebar",
	setup(e) {
		let t = D(null);
		function n() {
			t.value?.open();
		}
		return (e, i) => (l(), r("div", oe, [
			a("button", {
				"data-testid": "manage-sources-btn",
				class: "btn manage-button",
				onClick: n,
				title: "Manage library sources"
			}, " Manage Sources "),
			u(ae, {
				ref_key: "manageDialog",
				ref: t
			}, null, 512),
			u(U, { extensions: [
				".fsd",
				".asd",
				".ssd"
			] })
		]));
	}
}), [["__scopeId", "data-v-41a8426b"]]);
//#endregion
//#region set-sources-sidebar.ts
function ce(e, n) {
	S(document.getElementById(e), { detail: `could not find root element: ${e}` }), y({
		project: n.project,
		activeDocumentId: n.activeDocumentId,
		commands: n.commands,
		storageSources: n.storageSources,
		pwa: n.pwa
	});
	let r = t(se);
	return r.use(T()), r.mount(`#${e}`), () => {
		x(), r.unmount();
	};
}
//#endregion
export { ce as default };
