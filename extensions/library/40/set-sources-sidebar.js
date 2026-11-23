(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`.manage-sources-dialog[data-v-553abee1]{flex-direction:column;width:min(560px,92vw);max-width:none;max-height:min(74vh,720px);display:flex}.manage-sources-dialog__close[data-v-553abee1]{position:absolute;top:.5rem;right:.5rem}.manage-dialog-title[data-v-553abee1]{margin-bottom:1rem;font-size:1.125rem;font-weight:700}.reconnect-all-btn[data-v-553abee1]{margin-left:auto}.empty-state[data-v-553abee1]{text-align:center;color:var(--color-base-content);opacity:.6;flex:1;justify-content:center;align-items:center;display:flex}.manage-header[data-v-553abee1]{flex-shrink:0;gap:.5rem;margin-bottom:1rem;display:flex}.source-list[data-v-553abee1]{flex:1;margin:0;padding:0;list-style:none;overflow:hidden auto}.source-item[data-v-553abee1]{align-items:center;gap:.5rem;padding:.5rem 0;display:flex}.source-name[data-v-553abee1]{flex:1;align-items:center;gap:.5rem;display:flex;overflow:hidden}.source-label[data-v-553abee1]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.status-dot[data-v-553abee1]{border-radius:50%;flex-shrink:0;width:.5rem;height:.5rem}.status-dot.online[data-v-553abee1]{background:var(--color-success)}.status-dot.offline[data-v-553abee1]{background:var(--color-warning)}.mode-badge[data-v-553abee1]{background:var(--color-base-300);color:var(--color-base-content);text-transform:lowercase;border-radius:.25rem;flex-shrink:0;padding:.125rem .25rem;font-size:.625rem;line-height:1}.pwa-nudge[data-v-553abee1]{background:var(--color-base-200);opacity:.7;border-radius:.5rem;flex-direction:column;flex-shrink:0;gap:.25rem;margin-top:.5rem;padding:.5rem .75rem;display:flex}.pwa-nudge-text[data-v-553abee1]{color:var(--color-base-content);opacity:.6;margin:0;font-size:.75rem;line-height:1.25rem}.pwa-nudge-actions[data-v-553abee1]{justify-content:flex-end;gap:.25rem;display:flex}.templates-sidebar[data-v-4d9d76ed]{flex-direction:column;height:100%;padding:1rem;display:flex;overflow:hidden}.manage-button[data-v-4d9d76ed]{flex-shrink:0;width:100%;margin-bottom:1rem}.templates-sidebar[data-v-4d9d76ed] .library-browser{flex:1;height:auto;min-height:0}`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})();import { Ct as e, Et as t, Ht as n, Lt as r, Mt as i, Q as a, T as o, Tt as s, Vt as c, Wt as l, _t as u, at as d, bt as f, dt as p, ht as m, i as h, it as g, kt as _, lt as v, mt as y, ot as b, pt as x, r as S, t as C, vt as w, wt as T, xt as E } from "./main-B5ExcopM.js";
//#region src/templates/sources/sources.store.ts
function D(e) {
	return e === "granted" ? "online" : "offline";
}
var O = b("library-sources", function() {
	let e = r([]), t = r(!1), n = y(() => e.value.map((e) => ({
		source: e,
		status: D(e.access)
	})));
	async function i() {
		let n = h();
		return t.value = n.isSupported(), e.value = await n.listSources(), n.onChange((t) => {
			e.value = t;
		});
	}
	async function a(e) {
		return h().attach({ mode: e });
	}
	async function o(t) {
		let n = h(), r = e.value.find((e) => e.id === t);
		r && (r.access === "prompt" ? await n.requestAccess(t) : r.access === "denied" && (await n.detach(t), await n.attach({ mode: r.mode })));
	}
	async function s() {
		let t = h();
		for (let n of e.value) n.access === "prompt" && await t.requestAccess(n.id);
	}
	async function c(e) {
		await h().detach(e);
	}
	return {
		sources: e,
		entries: n,
		isSupported: t,
		init: i,
		addSource: a,
		reconnect: o,
		reconnectAll: s,
		detachSource: c
	};
}), k = b("library-browser", function() {
	let e = O(), t = r([]);
	async function n() {
		let n = h();
		t.value = await Promise.all(e.entries.map(async (e) => {
			if (e.status !== "online") return {
				id: e.source.id,
				label: e.source.label,
				status: "offline",
				entries: []
			};
			try {
				return {
					id: e.source.id,
					label: e.source.label,
					status: "online",
					entries: await n.listEntries(e.source.id, { recursive: !0 })
				};
			} catch {
				return {
					id: e.source.id,
					label: e.source.label,
					status: "offline",
					entries: []
				};
			}
		}));
	}
	async function i() {
		return await n(), _(() => e.entries, n);
	}
	return {
		sources: t,
		init: i
	};
}), A = ["open"], j = { class: "modal-box manage-sources-dialog" }, M = {
	key: 0,
	"data-testid": "unsupported-msg",
	class: "empty-state"
}, N = { class: "manage-header" }, P = { class: "source-list" }, F = ["data-source-id"], I = { class: "source-name" }, L = { class: "source-label" }, R = {
	key: 0,
	"data-testid": "readonly-badge",
	class: "mode-badge",
	title: "Read-only"
}, z = {
	key: 1,
	"data-testid": "readwrite-badge",
	class: "mode-badge",
	title: "Read-write"
}, B = ["title"], V = [
	"data-source-id",
	"disabled",
	"onClick"
], H = ["data-source-id", "onClick"], U = {
	key: 0,
	"data-testid": "pwa-nudge",
	class: "pwa-nudge"
}, W = { class: "pwa-nudge-actions" }, G = /* @__PURE__ */ g(/* @__PURE__ */ E({
	__name: "manage-sources-dialog",
	setup(a, { expose: o }) {
		o({
			open: G,
			close: K
		});
		let d = O(), f = S(), h, g = r(!1), _ = r(!1), v = r(!1), b = r(localStorage.getItem("set:pwa-nudge-dismissed") === "1"), C = y(() => !_.value && !b.value && d.entries.length > 0);
		function E() {
			b.value = !0, localStorage.setItem("set:pwa-nudge-dismissed", "1");
		}
		async function D() {
			await f.promptInstall() && (_.value = !0);
		}
		async function k(e) {
			try {
				await d.addSource(e);
			} catch {}
		}
		function G() {
			g.value = !0;
		}
		function K() {
			g.value = !1;
		}
		return e(async () => {
			_.value = f.isInstalled(), v.value = f.canInstall(), h = f.onChange(() => {
				_.value = f.isInstalled(), v.value = f.canInstall();
			});
		}), T(() => {
			h?.();
		}), (e, r) => (s(), w("dialog", {
			class: "modal",
			open: g.value
		}, [i(m("div", j, [
			m("button", {
				class: "btn btn-sm btn-circle btn-ghost manage-sources-dialog__close",
				type: "button",
				"aria-label": "Close",
				onClick: K
			}, " ✕ "),
			r[5] ||= m("h3", { class: "manage-dialog-title" }, "Manage Sources", -1),
			c(d).isSupported ? (s(), w(x, { key: 1 }, [
				m("div", N, [
					m("button", {
						"data-testid": "add-source-btn",
						class: "btn btn-sm",
						onClick: r[0] ||= (e) => k("readwrite")
					}, " Add "),
					m("button", {
						"data-testid": "add-readonly-btn",
						class: "btn btn-sm",
						onClick: r[1] ||= (e) => k("read")
					}, " Add Read-Only "),
					m("button", {
						"data-testid": "reconnect-all-btn",
						class: "btn btn-sm reconnect-all-btn",
						onClick: r[2] ||= (e) => c(d).reconnectAll()
					}, " Reconnect all ")
				]),
				m("ul", P, [(s(!0), w(x, null, t(c(d).entries, (e) => (s(), w("li", {
					key: e.source.id,
					"data-source-id": e.source.id,
					"data-testid": "source-item",
					class: "source-item"
				}, [
					m("span", I, [
						m("span", L, l(e.source.label), 1),
						e.source.mode === "read" ? (s(), w("span", R, "r")) : (s(), w("span", z, "rw")),
						m("span", {
							"data-testid": "status-badge",
							class: n(["status-dot", e.status]),
							title: e.status
						}, null, 10, B)
					]),
					m("button", {
						"data-source-id": e.source.id,
						"data-testid": "reconnect-btn",
						class: "btn btn-sm",
						disabled: e.status === "online",
						onClick: (t) => c(d).reconnect(e.source.id)
					}, " Reconnect ", 8, V),
					m("button", {
						"data-source-id": e.source.id,
						"data-testid": "detach-btn",
						class: "btn btn-sm btn-ghost",
						onClick: (t) => c(d).detachSource(e.source.id)
					}, " Remove ", 8, H)
				], 8, F))), 128))]),
				C.value ? (s(), w("div", U, [r[4] ||= m("p", { class: "pwa-nudge-text" }, "Install SET to keep folder access between sessions.", -1), m("div", W, [v.value ? (s(), w("button", {
					key: 0,
					"data-testid": "pwa-nudge-install",
					class: "btn btn-sm btn-ghost",
					onClick: D
				}, " Install ")) : u("", !0), m("button", {
					"data-testid": "pwa-nudge-dismiss",
					class: "btn btn-sm btn-ghost",
					onClick: E
				}, " Dismiss ")])])) : u("", !0)
			], 64)) : (s(), w("div", M, [...r[3] ||= [m("p", null, " This browser does not support local folder sources. Use Chrome/Edge or install SET as a PWA. ", -1)]]))
		], 512), [[p, g.value]])], 8, A));
	}
}), [["__scopeId", "data-v-553abee1"]]), K = { class: "templates-sidebar" }, q = /* @__PURE__ */ g(/* @__PURE__ */ E({
	__name: "sources-sidebar",
	setup(t) {
		let n = r(null), i = O(), o = k(), l, u;
		e(async () => {
			l = await i.init(), u = await o.init();
		}), T(() => {
			l?.(), u?.();
		});
		function d() {
			n.value?.open();
		}
		return (e, t) => (s(), w("div", K, [
			m("button", {
				"data-testid": "manage-sources-btn",
				class: "btn manage-button",
				onClick: d,
				title: "Manage library sources"
			}, " Manage Sources "),
			f(G, {
				ref_key: "manageDialog",
				ref: n
			}, null, 512),
			f(c(a), {
				sources: c(o).sources,
				extensions: [
					".fsd",
					".asd",
					".ssd"
				],
				"storage-key": "SET-TEMPLATES-FILETREE"
			}, null, 8, ["sources"])
		]));
	}
}), [["__scopeId", "data-v-4d9d76ed"]]);
//#endregion
//#region set-sources-sidebar.ts
function J(e, t) {
	o(document.getElementById(e), { detail: `could not find root element: ${e}` });
	let n = C(t), r = v(q);
	return r.use(d()), r.mount(`#${e}`), () => {
		n(), r.unmount();
	};
}
//#endregion
export { J as default };
