(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`.library-browser[data-v-b9c89b2f]{flex-direction:column;gap:.5rem;display:flex}.library-browser__search[data-v-b9c89b2f]{width:100%}.library-browser__label.offline[data-v-b9c89b2f]{opacity:.5}.library-browser__label--root[data-v-b9c89b2f]{text-transform:uppercase;letter-spacing:.03em;font-size:.75rem;font-weight:700}.library-browser[data-v-b9c89b2f] .explorer-tree__item[aria-level="1"]{background-color:color-mix(in srgb, currentColor 5%, transparent);border-bottom:1px solid color-mix(in srgb, currentColor 10%, transparent)}.library-browser__empty-hint[data-v-b9c89b2f],.library-browser__offline-hint[data-v-b9c89b2f]{opacity:.4;margin-left:.4rem;font-size:.75rem}.manage-sources-dialog[data-v-29164281]{flex-direction:column;width:min(560px,92vw);max-width:none;max-height:min(74vh,720px);display:flex}.manage-sources-dialog__close[data-v-29164281]{position:absolute;top:.5rem;right:.5rem}.manage-dialog-title[data-v-29164281]{margin-bottom:1rem;font-size:1.125rem;font-weight:700}.reconnect-all-btn[data-v-29164281]{margin-left:auto}.empty-state[data-v-29164281]{text-align:center;color:var(--color-base-content);opacity:.6;flex:1;justify-content:center;align-items:center;display:flex}.manage-header[data-v-29164281]{flex-shrink:0;gap:.5rem;margin-bottom:1rem;display:flex}.source-list[data-v-29164281]{flex:1;margin:0;padding:0;list-style:none;overflow:hidden auto}.source-item[data-v-29164281]{align-items:center;gap:.5rem;padding:.5rem 0;display:flex}.source-name[data-v-29164281]{flex:1;align-items:center;gap:.5rem;display:flex;overflow:hidden}.source-label[data-v-29164281]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.status-dot[data-v-29164281]{border-radius:50%;flex-shrink:0;width:.5rem;height:.5rem}.status-dot.online[data-v-29164281]{background:var(--color-success)}.status-dot.offline[data-v-29164281]{background:var(--color-warning)}.mode-badge[data-v-29164281]{background:var(--color-base-300);color:var(--color-base-content);text-transform:lowercase;border-radius:.25rem;flex-shrink:0;padding:.125rem .25rem;font-size:.625rem;line-height:1}.pwa-nudge[data-v-29164281]{background:var(--color-base-200);opacity:.7;border-radius:.5rem;flex-direction:column;flex-shrink:0;gap:.25rem;margin-top:.5rem;padding:.5rem .75rem;display:flex}.pwa-nudge-text[data-v-29164281]{color:var(--color-base-content);opacity:.6;margin:0;font-size:.75rem;line-height:1.25rem}.pwa-nudge-actions[data-v-29164281]{justify-content:flex-end;gap:.25rem;display:flex}.templates-sidebar[data-v-41a8426b]{height:100%;padding:1rem;overflow:auto}.manage-button[data-v-41a8426b]{width:100%;margin-bottom:1rem}`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})();import { A as e, C as t, D as n, Et as r, I as i, J as a, L as o, M as s, N as c, Ot as l, P as u, Q as d, S as f, X as p, _ as m, ct as h, g, h as _, i as v, it as y, j as b, jt as x, lt as S, m as C, n as w, q as T, r as E, t as D, x as O, yt as k } from "./main-zh8a9KKB.js";
import { t as A } from "./dist-D6zEJGK0.js";
//#region src/templates/sources/sources.store.ts
function j(e) {
	return e === "granted" ? "online" : "offline";
}
var M = m("library-sources", function() {
	let t = k([]), n = k(!1), r = e(() => t.value.map((e) => ({
		source: e,
		status: j(e.access)
	})));
	async function i() {
		let e = v();
		return n.value = e.isSupported(), t.value = await e.listSources(), e.onChange((e) => {
			t.value = e;
		});
	}
	async function a(e) {
		return v().attach({ mode: e });
	}
	async function o(e) {
		let n = v(), r = t.value.find((t) => t.id === e);
		r && (r.access === "prompt" ? await n.requestAccess(e) : r.access === "denied" && (await n.detach(e), await n.attach({ mode: r.mode })));
	}
	async function s() {
		let e = v();
		for (let n of t.value) n.access === "prompt" && await e.requestAccess(n.id);
	}
	async function c(e) {
		await v().detach(e);
	}
	return {
		sources: t,
		entries: r,
		isSupported: n,
		init: i,
		addSource: a,
		reconnect: o,
		reconnectAll: s,
		detachSource: c
	};
}), N = m("library-browser", function() {
	let t = M(), n = k([]), r = k(""), i = k({});
	async function a(e) {
		let t = await v().listEntries(e, { recursive: !0 });
		i.value = {
			...i.value,
			[e]: t
		};
	}
	async function o() {
		let e = t.entries.filter((e) => e.status === "online");
		await Promise.all(e.map((e) => a(e.source.id)));
		let n = new Set(e.map((e) => e.source.id)), r = {};
		for (let [e, t] of Object.entries(i.value)) n.has(e) && (r[e] = t);
		i.value = r;
	}
	async function s(e) {
		return n.value = e.map((e) => e.toLowerCase()), await o(), y(() => t.entries, o);
	}
	let c = e(() => t.entries.map((e) => ({
		sourceId: e.source.id,
		label: e.source.label,
		status: e.status,
		nodes: e.status === "online" ? I(i.value[e.source.id] ?? [], n.value) : []
	})));
	return {
		search: r,
		trees: c,
		visibleTree: e(() => {
			let e = r.value.trim().toLowerCase();
			return e ? c.value.map((t) => ({
				...t,
				nodes: L(t.nodes, e)
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
function ee(e) {
	let t = e.lastIndexOf("/");
	return t === -1 ? void 0 : e.slice(0, t);
}
function I(e, t) {
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
		let i = ee(t.path), a = i ? n.get(i) : void 0;
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
function L(e, t) {
	let n = [];
	for (let r of e) {
		if (r.kind === "file") {
			r.path.toLowerCase().includes(t) && n.push(r);
			continue;
		}
		let e = L(r.children, t);
		e.length > 0 && n.push({
			...r,
			children: e
		});
	}
	return n;
}
//#endregion
//#region src/templates/browser/library-browser.vue?vue&type=script&setup=true&lang.ts
var R = { class: "library-browser" }, z = {
	key: 0,
	class: "library-browser__empty-hint",
	"data-testid": "library-browser-empty-hint"
}, B = {
	key: 1,
	class: "library-browser__offline-hint"
}, V = "SET-TEMPLATES-FILETREE", H = /* @__PURE__ */ _(/* @__PURE__ */ o({
	__name: "library-browser",
	props: { extensions: {} },
	setup(t) {
		let n = t, i = N(), o;
		T(async () => {
			o = await i.init(n.extensions);
		}), a(() => {
			o?.();
		});
		let d = k(/* @__PURE__ */ new Set()), m = k(/* @__PURE__ */ new Set()), g = e(() => {
			let e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set(), n = i.visibleTree.map((n) => (n.status === "offline" ? t.add(n.sourceId) : n.nodes.some((e) => e.matchesExtension) || e.add(n.sourceId), {
				id: n.sourceId,
				name: n.label,
				tag: "",
				selectable: !1,
				children: n.status === "online" ? n.nodes.map((t) => D(t, n.sourceId, e)) : void 0
			}));
			return d.value = e, m.value = t, n;
		});
		function _(e) {
			return !e.includes("::");
		}
		let v = e(() => i.search.trim().length > 0), y = k(E()), C = e(() => v.value ? {
			scoped: [],
			all: !0
		} : y.value);
		function w(e) {
			v.value || (y.value = e, localStorage.setItem(V, JSON.stringify(e)));
		}
		function E() {
			try {
				let e = localStorage.getItem(V), t = e ? JSON.parse(e) : void 0;
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
		function D(e, t, n) {
			let r = `${t}::${e.path}`;
			return e.kind === "directory" ? (e.matchesExtension || n.add(r), {
				id: r,
				name: e.name,
				tag: "",
				selectable: !1,
				children: e.children.map((e) => D(e, t, n))
			}) : {
				id: r,
				name: e.name,
				tag: "",
				selectable: !0
			};
		}
		return (e, t) => (p(), u("div", R, [S(b("input", {
			"onUpdate:modelValue": t[0] ||= (e) => r(i).search = e,
			type: "search",
			class: "input input-sm library-browser__search",
			placeholder: "Search...",
			"data-testid": "library-browser-search"
		}, null, 512), [[f, r(i).search]]), g.value.length ? (p(), s(r(A), {
			key: 0,
			items: g.value,
			expanded: C.value,
			"aria-label": "Template Library Browser",
			"onUpdate:expanded": w
		}, {
			"node-label": h(({ node: e }) => [
				b("span", {
					class: l(["library-browser__label", {
						offline: m.value.has(e.id),
						"library-browser__label--root": _(e.id)
					}]),
					"data-testid": "library-browser-node-label"
				}, x(e.name), 3),
				d.value.has(e.id) ? (p(), u("span", z, " No matching files ")) : c("", !0),
				m.value.has(e.id) ? (p(), u("span", B, "Offline")) : c("", !0)
			]),
			_: 1
		}, 8, ["items", "expanded"])) : c("", !0)]));
	}
}), [["__scopeId", "data-v-b9c89b2f"]]), U = ["open"], W = { class: "modal-box manage-sources-dialog" }, G = {
	key: 0,
	"data-testid": "unsupported-msg",
	class: "empty-state"
}, K = { class: "manage-header" }, q = { class: "source-list" }, J = ["data-source-id"], Y = { class: "source-name" }, X = { class: "source-label" }, Z = {
	key: 0,
	"data-testid": "readonly-badge",
	class: "mode-badge",
	title: "Read-only"
}, Q = {
	key: 1,
	"data-testid": "readwrite-badge",
	class: "mode-badge",
	title: "Read-write"
}, te = ["title"], $ = [
	"data-source-id",
	"disabled",
	"onClick"
], ne = ["data-source-id", "onClick"], re = {
	key: 0,
	"data-testid": "pwa-nudge",
	class: "pwa-nudge"
}, ie = { class: "pwa-nudge-actions" }, ae = /* @__PURE__ */ _(/* @__PURE__ */ o({
	__name: "manage-sources-dialog",
	setup(i, { expose: o }) {
		o({
			open: A,
			close: j
		});
		let s = M(), f = D(), m, h, g = k(!1), _ = k(!1), v = k(!1), y = k(localStorage.getItem("set:pwa-nudge-dismissed") === "1"), C = e(() => !_.value && !y.value && s.entries.length > 0);
		function w() {
			y.value = !0, localStorage.setItem("set:pwa-nudge-dismissed", "1");
		}
		async function E() {
			await f.promptInstall() && (_.value = !0);
		}
		async function O(e) {
			try {
				await s.addSource(e);
			} catch {}
		}
		function A() {
			g.value = !0;
		}
		function j() {
			g.value = !1;
		}
		return T(async () => {
			m = await s.init(), _.value = f.isInstalled(), v.value = f.canInstall(), h = f.onChange(() => {
				_.value = f.isInstalled(), v.value = f.canInstall();
			});
		}), a(() => {
			m?.(), h?.();
		}), (e, i) => (p(), u("dialog", {
			class: "modal",
			open: g.value
		}, [S(b("div", W, [
			b("button", {
				class: "btn btn-sm btn-circle btn-ghost manage-sources-dialog__close",
				type: "button",
				"aria-label": "Close",
				onClick: j
			}, " ✕ "),
			i[5] ||= b("h3", { class: "manage-dialog-title" }, "Manage Sources", -1),
			r(s).isSupported ? (p(), u(n, { key: 1 }, [
				b("div", K, [
					b("button", {
						"data-testid": "add-source-btn",
						class: "btn btn-sm",
						onClick: i[0] ||= (e) => O("readwrite")
					}, " Add "),
					b("button", {
						"data-testid": "add-readonly-btn",
						class: "btn btn-sm",
						onClick: i[1] ||= (e) => O("read")
					}, " Add Read-Only "),
					b("button", {
						"data-testid": "reconnect-all-btn",
						class: "btn btn-sm reconnect-all-btn",
						onClick: i[2] ||= (e) => r(s).reconnectAll()
					}, " Reconnect all ")
				]),
				b("ul", q, [(p(!0), u(n, null, d(r(s).entries, (e) => (p(), u("li", {
					key: e.source.id,
					"data-source-id": e.source.id,
					"data-testid": "source-item",
					class: "source-item"
				}, [
					b("span", Y, [
						b("span", X, x(e.source.label), 1),
						e.source.mode === "read" ? (p(), u("span", Z, "r")) : (p(), u("span", Q, "rw")),
						b("span", {
							"data-testid": "status-badge",
							class: l(["status-dot", e.status]),
							title: e.status
						}, null, 10, te)
					]),
					b("button", {
						"data-source-id": e.source.id,
						"data-testid": "reconnect-btn",
						class: "btn btn-sm",
						disabled: e.status === "online",
						onClick: (t) => r(s).reconnect(e.source.id)
					}, " Reconnect ", 8, $),
					b("button", {
						"data-source-id": e.source.id,
						"data-testid": "detach-btn",
						class: "btn btn-sm btn-ghost",
						onClick: (t) => r(s).detachSource(e.source.id)
					}, " Remove ", 8, ne)
				], 8, J))), 128))]),
				C.value ? (p(), u("div", re, [i[4] ||= b("p", { class: "pwa-nudge-text" }, "Install SET to keep folder access between sessions.", -1), b("div", ie, [v.value ? (p(), u("button", {
					key: 0,
					"data-testid": "pwa-nudge-install",
					class: "btn btn-sm btn-ghost",
					onClick: E
				}, " Install ")) : c("", !0), b("button", {
					"data-testid": "pwa-nudge-dismiss",
					class: "btn btn-sm btn-ghost",
					onClick: w
				}, " Dismiss ")])])) : c("", !0)
			], 64)) : (p(), u("div", G, [...i[3] ||= [b("p", null, " This browser does not support local folder sources. Use Chrome/Edge or install SET as a PWA. ", -1)]]))
		], 512), [[t, g.value]])], 8, U));
	}
}), [["__scopeId", "data-v-29164281"]]), oe = { class: "templates-sidebar" }, se = /* @__PURE__ */ _(/* @__PURE__ */ o({
	__name: "sources-sidebar",
	setup(e) {
		let t = k(null);
		function n() {
			t.value?.open();
		}
		return (e, r) => (p(), u("div", oe, [
			b("button", {
				"data-testid": "manage-sources-btn",
				class: "btn manage-button",
				onClick: n,
				title: "Manage library sources"
			}, " Manage Sources "),
			i(ae, {
				ref_key: "manageDialog",
				ref: t
			}, null, 512),
			i(H, { extensions: [
				".fsd",
				".asd",
				".ssd"
			] })
		]));
	}
}), [["__scopeId", "data-v-41a8426b"]]);
//#endregion
//#region set-sources-sidebar.ts
function ce(e, t) {
	C(document.getElementById(e), { detail: `could not find root element: ${e}` }), w({
		project: t.project,
		activeDocumentId: t.activeDocumentId,
		commands: t.commands,
		storageSources: t.storageSources,
		pwa: t.pwa
	});
	let n = O(se);
	return n.use(g()), n.mount(`#${e}`), () => {
		E(), n.unmount();
	};
}
//#endregion
export { ce as default };
