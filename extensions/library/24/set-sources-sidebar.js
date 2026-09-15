(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`.manage-sources-dialog[data-v-29164281]{flex-direction:column;width:min(560px,92vw);max-width:none;max-height:min(74vh,720px);display:flex}.manage-sources-dialog__close[data-v-29164281]{position:absolute;top:.5rem;right:.5rem}.manage-dialog-title[data-v-29164281]{margin-bottom:1rem;font-size:1.125rem;font-weight:700}.reconnect-all-btn[data-v-29164281]{margin-left:auto}.empty-state[data-v-29164281]{text-align:center;color:var(--color-base-content);opacity:.6;flex:1;justify-content:center;align-items:center;display:flex}.manage-header[data-v-29164281]{flex-shrink:0;gap:.5rem;margin-bottom:1rem;display:flex}.source-list[data-v-29164281]{flex:1;margin:0;padding:0;list-style:none;overflow:hidden auto}.source-item[data-v-29164281]{align-items:center;gap:.5rem;padding:.5rem 0;display:flex}.source-name[data-v-29164281]{flex:1;align-items:center;gap:.5rem;display:flex;overflow:hidden}.source-label[data-v-29164281]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.status-dot[data-v-29164281]{border-radius:50%;flex-shrink:0;width:.5rem;height:.5rem}.status-dot.online[data-v-29164281]{background:var(--color-success)}.status-dot.offline[data-v-29164281]{background:var(--color-warning)}.mode-badge[data-v-29164281]{background:var(--color-base-300);color:var(--color-base-content);text-transform:lowercase;border-radius:.25rem;flex-shrink:0;padding:.125rem .25rem;font-size:.625rem;line-height:1}.pwa-nudge[data-v-29164281]{background:var(--color-base-200);opacity:.7;border-radius:.5rem;flex-direction:column;flex-shrink:0;gap:.25rem;margin-top:.5rem;padding:.5rem .75rem;display:flex}.pwa-nudge-text[data-v-29164281]{color:var(--color-base-content);opacity:.6;margin:0;font-size:.75rem;line-height:1.25rem}.pwa-nudge-actions[data-v-29164281]{justify-content:flex-end;gap:.25rem;display:flex}.templates-sidebar[data-v-dd0a8bd4]{height:100%;padding:1rem;overflow:auto}.manage-button[data-v-dd0a8bd4]{width:100%;margin-bottom:1rem}.tree-placeholder[data-v-dd0a8bd4]{text-align:center;height:100%;min-height:200px;color:var(--color-base-content);opacity:.4;justify-content:center;align-items:center;display:flex}`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})();import { A as e, C as t, D as n, Et as r, I as i, J as a, L as o, N as s, Ot as c, P as l, Q as u, X as d, _ as f, g as p, h as m, i as h, j as g, jt as _, lt as v, n as y, q as b, r as x, s as S, t as C, x as w, yt as T } from "./main-DX8Z9Ibe.js";
//#region src/templates/sources/sources.store.ts
function E(e) {
	return e === "granted" ? "online" : "offline";
}
var D = f("library-sources", function() {
	let t = T([]), n = T(!1), r = e(() => t.value.map((e) => ({
		source: e,
		status: E(e.access)
	})));
	async function i() {
		let e = h();
		return n.value = e.isSupported(), t.value = await e.listSources(), e.onChange((e) => {
			t.value = e;
		});
	}
	async function a(e) {
		return h().attach({ mode: e });
	}
	async function o(e) {
		let n = h(), r = t.value.find((t) => t.id === e);
		r && (r.access === "prompt" ? await n.requestAccess(e) : r.access === "denied" && (await n.detach(e), await n.attach({ mode: r.mode })));
	}
	async function s() {
		let e = h();
		for (let n of t.value) n.access === "prompt" && await e.requestAccess(n.id);
	}
	async function c(e) {
		await h().detach(e);
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
}), O = ["open"], k = { class: "modal-box manage-sources-dialog" }, A = {
	key: 0,
	"data-testid": "unsupported-msg",
	class: "empty-state"
}, j = { class: "manage-header" }, M = { class: "source-list" }, N = ["data-source-id"], P = { class: "source-name" }, F = { class: "source-label" }, I = {
	key: 0,
	"data-testid": "readonly-badge",
	class: "mode-badge",
	title: "Read-only"
}, L = {
	key: 1,
	"data-testid": "readwrite-badge",
	class: "mode-badge",
	title: "Read-write"
}, R = ["title"], z = [
	"data-source-id",
	"disabled",
	"onClick"
], B = ["data-source-id", "onClick"], V = {
	key: 0,
	"data-testid": "pwa-nudge",
	class: "pwa-nudge"
}, H = { class: "pwa-nudge-actions" }, U = /* @__PURE__ */ m(/* @__PURE__ */ o({
	__name: "manage-sources-dialog",
	setup(i, { expose: o }) {
		o({
			open: K,
			close: q
		});
		let f = D(), p = C(), m, h, y = T(!1), x = T(!1), S = T(!1), w = T(localStorage.getItem("set:pwa-nudge-dismissed") === "1"), E = e(() => !x.value && !w.value && f.entries.length > 0);
		function U() {
			w.value = !0, localStorage.setItem("set:pwa-nudge-dismissed", "1");
		}
		async function W() {
			await p.promptInstall() && (x.value = !0);
		}
		async function G(e) {
			try {
				await f.addSource(e);
			} catch {}
		}
		function K() {
			y.value = !0;
		}
		function q() {
			y.value = !1;
		}
		return b(async () => {
			m = await f.init(), x.value = p.isInstalled(), S.value = p.canInstall(), h = p.onChange(() => {
				x.value = p.isInstalled(), S.value = p.canInstall();
			});
		}), a(() => {
			m?.(), h?.();
		}), (e, i) => (d(), l("dialog", {
			class: "modal",
			open: y.value
		}, [v(g("div", k, [
			g("button", {
				class: "btn btn-sm btn-circle btn-ghost manage-sources-dialog__close",
				type: "button",
				"aria-label": "Close",
				onClick: q
			}, " ✕ "),
			i[5] ||= g("h3", { class: "manage-dialog-title" }, "Manage Sources", -1),
			r(f).isSupported ? (d(), l(n, { key: 1 }, [
				g("div", j, [
					g("button", {
						"data-testid": "add-source-btn",
						class: "btn btn-sm",
						onClick: i[0] ||= (e) => G("readwrite")
					}, " Add "),
					g("button", {
						"data-testid": "add-readonly-btn",
						class: "btn btn-sm",
						onClick: i[1] ||= (e) => G("read")
					}, " Add Read-Only "),
					g("button", {
						"data-testid": "reconnect-all-btn",
						class: "btn btn-sm reconnect-all-btn",
						onClick: i[2] ||= (e) => r(f).reconnectAll()
					}, " Reconnect all ")
				]),
				g("ul", M, [(d(!0), l(n, null, u(r(f).entries, (e) => (d(), l("li", {
					key: e.source.id,
					"data-source-id": e.source.id,
					"data-testid": "source-item",
					class: "source-item"
				}, [
					g("span", P, [
						g("span", F, _(e.source.label), 1),
						e.source.mode === "read" ? (d(), l("span", I, "r")) : (d(), l("span", L, "rw")),
						g("span", {
							"data-testid": "status-badge",
							class: c(["status-dot", e.status]),
							title: e.status
						}, null, 10, R)
					]),
					g("button", {
						"data-source-id": e.source.id,
						"data-testid": "reconnect-btn",
						class: "btn btn-sm",
						disabled: e.status === "online",
						onClick: (t) => r(f).reconnect(e.source.id)
					}, " Reconnect ", 8, z),
					g("button", {
						"data-source-id": e.source.id,
						"data-testid": "detach-btn",
						class: "btn btn-sm btn-ghost",
						onClick: (t) => r(f).detachSource(e.source.id)
					}, " Remove ", 8, B)
				], 8, N))), 128))]),
				E.value ? (d(), l("div", V, [i[4] ||= g("p", { class: "pwa-nudge-text" }, "Install SET to keep folder access between sessions.", -1), g("div", H, [S.value ? (d(), l("button", {
					key: 0,
					"data-testid": "pwa-nudge-install",
					class: "btn btn-sm btn-ghost",
					onClick: W
				}, " Install ")) : s("", !0), g("button", {
					"data-testid": "pwa-nudge-dismiss",
					class: "btn btn-sm btn-ghost",
					onClick: U
				}, " Dismiss ")])])) : s("", !0)
			], 64)) : (d(), l("div", A, [...i[3] ||= [g("p", null, " This browser does not support local folder sources. Use Chrome/Edge or install SET as a PWA. ", -1)]]))
		], 512), [[t, y.value]])], 8, O));
	}
}), [["__scopeId", "data-v-29164281"]]), W = { class: "templates-sidebar" }, G = /* @__PURE__ */ m(/* @__PURE__ */ o({
	__name: "sources-sidebar",
	setup(e) {
		let t = T(null);
		function n() {
			t.value?.open();
		}
		return (e, r) => (d(), l("div", W, [
			g("button", {
				"data-testid": "manage-sources-btn",
				class: "btn manage-button",
				onClick: n,
				title: "Manage library sources"
			}, " Manage Sources "),
			i(U, {
				ref_key: "manageDialog",
				ref: t
			}, null, 512),
			r[0] ||= g("div", {
				class: "tree-placeholder",
				"data-testid": "tree-placeholder"
			}, [g("p", null, "Template tree view coming soon.")], -1)
		]));
	}
}), [["__scopeId", "data-v-dd0a8bd4"]]);
//#endregion
//#region set-sources-sidebar.ts
function K(e, t) {
	S(document.getElementById(e), { detail: `could not find root element: ${e}` }), y({
		project: t.project,
		activeDocumentId: t.activeDocumentId,
		commands: t.commands,
		storageSources: t.storageSources,
		pwa: t.pwa
	});
	let n = w(G);
	return n.use(p()), n.mount(`#${e}`), () => {
		x(), n.unmount();
	};
}
//#endregion
export { K as default };
