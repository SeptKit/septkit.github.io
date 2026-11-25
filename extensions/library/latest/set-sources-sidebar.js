(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`.manage-sources-dialog[data-v-553abee1]{flex-direction:column;width:min(560px,92vw);max-width:none;max-height:min(74vh,720px);display:flex}.manage-sources-dialog__close[data-v-553abee1]{position:absolute;top:.5rem;right:.5rem}.manage-dialog-title[data-v-553abee1]{margin-bottom:1rem;font-size:1.125rem;font-weight:700}.reconnect-all-btn[data-v-553abee1]{margin-left:auto}.empty-state[data-v-553abee1]{text-align:center;color:var(--color-base-content);opacity:.6;flex:1;justify-content:center;align-items:center;display:flex}.manage-header[data-v-553abee1]{flex-shrink:0;gap:.5rem;margin-bottom:1rem;display:flex}.source-list[data-v-553abee1]{flex:1;margin:0;padding:0;list-style:none;overflow:hidden auto}.source-item[data-v-553abee1]{align-items:center;gap:.5rem;padding:.5rem 0;display:flex}.source-name[data-v-553abee1]{flex:1;align-items:center;gap:.5rem;display:flex;overflow:hidden}.source-label[data-v-553abee1]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.status-dot[data-v-553abee1]{border-radius:50%;flex-shrink:0;width:.5rem;height:.5rem}.status-dot.online[data-v-553abee1]{background:var(--color-success)}.status-dot.offline[data-v-553abee1]{background:var(--color-warning)}.mode-badge[data-v-553abee1]{background:var(--color-base-300);color:var(--color-base-content);text-transform:lowercase;border-radius:.25rem;flex-shrink:0;padding:.125rem .25rem;font-size:.625rem;line-height:1}.pwa-nudge[data-v-553abee1]{background:var(--color-base-200);opacity:.7;border-radius:.5rem;flex-direction:column;flex-shrink:0;gap:.25rem;margin-top:.5rem;padding:.5rem .75rem;display:flex}.pwa-nudge-text[data-v-553abee1]{color:var(--color-base-content);opacity:.6;margin:0;font-size:.75rem;line-height:1.25rem}.pwa-nudge-actions[data-v-553abee1]{justify-content:flex-end;gap:.25rem;display:flex}.templates-sidebar[data-v-4d9d76ed]{flex-direction:column;height:100%;padding:1rem;display:flex;overflow:hidden}.manage-button[data-v-4d9d76ed]{flex-shrink:0;width:100%;margin-bottom:1rem}.templates-sidebar[data-v-4d9d76ed] .library-browser{flex:1;height:auto;min-height:0}`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})();import { $ as e, Dt as t, Et as n, Gt as r, Jt as i, Kt as a, Ot as o, Pt as s, St as c, T as l, Tt as u, Vt as d, at as f, ft as p, gt as m, ht as h, i as g, jt as _, mt as v, ot as y, r as b, st as x, t as S, ut as C, vt as w, xt as T, yt as E } from "./main-g2N8Clir.js";
//#region src/templates/sources/sources.store.ts
function D(e) {
	return e === "granted" ? "online" : "offline";
}
var O = x("library-sources", function() {
	let e = d([]), t = d(!1), n = h(() => e.value.map((e) => ({
		source: e,
		status: D(e.access)
	})));
	async function r() {
		let n = g();
		return t.value = n.isSupported(), e.value = await n.listSources(), n.onChange((t) => {
			e.value = t;
		});
	}
	async function i(e) {
		return g().attach({ mode: e });
	}
	async function a(t) {
		let n = g(), r = e.value.find((e) => e.id === t);
		r && (r.access === "prompt" ? await n.requestAccess(t) : r.access === "denied" && (await n.detach(t), await n.attach({ mode: r.mode })));
	}
	async function o() {
		let t = g();
		for (let n of e.value) n.access === "prompt" && await t.requestAccess(n.id);
	}
	async function s(e) {
		await g().detach(e);
	}
	return {
		sources: e,
		entries: n,
		isSupported: t,
		init: r,
		addSource: i,
		reconnect: a,
		reconnectAll: o,
		detachSource: s
	};
}), k = x("library-browser", function() {
	let e = O(), t = d([]);
	async function n() {
		let n = g();
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
	async function r() {
		return await n(), _(() => e.entries, n);
	}
	return {
		sources: t,
		init: r
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
}, W = { class: "pwa-nudge-actions" }, G = /* @__PURE__ */ f(/* @__PURE__ */ c({
	__name: "manage-sources-dialog",
	setup(e, { expose: c }) {
		c({
			open: G,
			close: K
		});
		let l = O(), f = b(), g, _ = d(!1), y = d(!1), x = d(!1), S = d(localStorage.getItem("set:pwa-nudge-dismissed") === "1"), C = h(() => !y.value && !S.value && l.entries.length > 0);
		function T() {
			S.value = !0, localStorage.setItem("set:pwa-nudge-dismissed", "1");
		}
		async function D() {
			await f.promptInstall() && (y.value = !0);
		}
		async function k(e) {
			try {
				await l.addSource(e);
			} catch {}
		}
		function G() {
			_.value = !0;
		}
		function K() {
			_.value = !1;
		}
		return u(async () => {
			y.value = f.isInstalled(), x.value = f.canInstall(), g = f.onChange(() => {
				y.value = f.isInstalled(), x.value = f.canInstall();
			});
		}), n(() => {
			g?.();
		}), (e, n) => (t(), E("dialog", {
			class: "modal",
			open: _.value
		}, [s(m("div", j, [
			m("button", {
				class: "btn btn-sm btn-circle btn-ghost manage-sources-dialog__close",
				type: "button",
				"aria-label": "Close",
				onClick: K
			}, " ✕ "),
			n[5] ||= m("h3", { class: "manage-dialog-title" }, "Manage Sources", -1),
			r(l).isSupported ? (t(), E(v, { key: 1 }, [
				m("div", N, [
					m("button", {
						"data-testid": "add-source-btn",
						class: "btn btn-sm",
						onClick: n[0] ||= (e) => k("readwrite")
					}, " Add "),
					m("button", {
						"data-testid": "add-readonly-btn",
						class: "btn btn-sm",
						onClick: n[1] ||= (e) => k("read")
					}, " Add Read-Only "),
					m("button", {
						"data-testid": "reconnect-all-btn",
						class: "btn btn-sm reconnect-all-btn",
						onClick: n[2] ||= (e) => r(l).reconnectAll()
					}, " Reconnect all ")
				]),
				m("ul", P, [(t(!0), E(v, null, o(r(l).entries, (e) => (t(), E("li", {
					key: e.source.id,
					"data-source-id": e.source.id,
					"data-testid": "source-item",
					class: "source-item"
				}, [
					m("span", I, [
						m("span", L, i(e.source.label), 1),
						e.source.mode === "read" ? (t(), E("span", R, "r")) : (t(), E("span", z, "rw")),
						m("span", {
							"data-testid": "status-badge",
							class: a(["status-dot", e.status]),
							title: e.status
						}, null, 10, B)
					]),
					m("button", {
						"data-source-id": e.source.id,
						"data-testid": "reconnect-btn",
						class: "btn btn-sm",
						disabled: e.status === "online",
						onClick: (t) => r(l).reconnect(e.source.id)
					}, " Reconnect ", 8, V),
					m("button", {
						"data-source-id": e.source.id,
						"data-testid": "detach-btn",
						class: "btn btn-sm btn-ghost",
						onClick: (t) => r(l).detachSource(e.source.id)
					}, " Remove ", 8, H)
				], 8, F))), 128))]),
				C.value ? (t(), E("div", U, [n[4] ||= m("p", { class: "pwa-nudge-text" }, "Install SET to keep folder access between sessions.", -1), m("div", W, [x.value ? (t(), E("button", {
					key: 0,
					"data-testid": "pwa-nudge-install",
					class: "btn btn-sm btn-ghost",
					onClick: D
				}, " Install ")) : w("", !0), m("button", {
					"data-testid": "pwa-nudge-dismiss",
					class: "btn btn-sm btn-ghost",
					onClick: T
				}, " Dismiss ")])])) : w("", !0)
			], 64)) : (t(), E("div", M, [...n[3] ||= [m("p", null, " This browser does not support local folder sources. Use Chrome/Edge or install SET as a PWA. ", -1)]]))
		], 512), [[p, _.value]])], 8, A));
	}
}), [["__scopeId", "data-v-553abee1"]]), K = { class: "templates-sidebar" }, q = /* @__PURE__ */ f(/* @__PURE__ */ c({
	__name: "sources-sidebar",
	setup(i) {
		let a = d(null), o = O(), s = k(), c, l;
		u(async () => {
			c = await o.init(), l = await s.init();
		}), n(() => {
			c?.(), l?.();
		});
		function f() {
			a.value?.open();
		}
		return (n, i) => (t(), E("div", K, [
			m("button", {
				"data-testid": "manage-sources-btn",
				class: "btn manage-button",
				onClick: f,
				title: "Manage library sources"
			}, " Manage Sources "),
			T(G, {
				ref_key: "manageDialog",
				ref: a
			}, null, 512),
			T(r(e), {
				sources: r(s).sources,
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
	l(document.getElementById(e), { detail: `could not find root element: ${e}` });
	let n = S(t), r = C(q);
	return r.use(y()), r.mount(`#${e}`), () => {
		n(), r.unmount();
	};
}
//#endregion
export { J as default };
