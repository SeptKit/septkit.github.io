(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`.manage-sources-dialog[data-v-553abee1]{flex-direction:column;width:min(560px,92vw);max-width:none;max-height:min(74vh,720px);display:flex}.manage-sources-dialog__close[data-v-553abee1]{position:absolute;top:.5rem;right:.5rem}.manage-dialog-title[data-v-553abee1]{margin-bottom:1rem;font-size:1.125rem;font-weight:700}.reconnect-all-btn[data-v-553abee1]{margin-left:auto}.empty-state[data-v-553abee1]{text-align:center;color:var(--color-base-content);opacity:.6;flex:1;justify-content:center;align-items:center;display:flex}.manage-header[data-v-553abee1]{flex-shrink:0;gap:.5rem;margin-bottom:1rem;display:flex}.source-list[data-v-553abee1]{flex:1;margin:0;padding:0;list-style:none;overflow:hidden auto}.source-item[data-v-553abee1]{align-items:center;gap:.5rem;padding:.5rem 0;display:flex}.source-name[data-v-553abee1]{flex:1;align-items:center;gap:.5rem;display:flex;overflow:hidden}.source-label[data-v-553abee1]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.status-dot[data-v-553abee1]{border-radius:50%;flex-shrink:0;width:.5rem;height:.5rem}.status-dot.online[data-v-553abee1]{background:var(--color-success)}.status-dot.offline[data-v-553abee1]{background:var(--color-warning)}.mode-badge[data-v-553abee1]{background:var(--color-base-300);color:var(--color-base-content);text-transform:lowercase;border-radius:.25rem;flex-shrink:0;padding:.125rem .25rem;font-size:.625rem;line-height:1}.pwa-nudge[data-v-553abee1]{background:var(--color-base-200);opacity:.7;border-radius:.5rem;flex-direction:column;flex-shrink:0;gap:.25rem;margin-top:.5rem;padding:.5rem .75rem;display:flex}.pwa-nudge-text[data-v-553abee1]{color:var(--color-base-content);opacity:.6;margin:0;font-size:.75rem;line-height:1.25rem}.pwa-nudge-actions[data-v-553abee1]{justify-content:flex-end;gap:.25rem;display:flex}.templates-sidebar[data-v-d1a769d7]{height:100%;padding:1rem;overflow:auto}.manage-button[data-v-d1a769d7]{width:100%;margin-bottom:1rem}`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})();import { Bt as e, Ct as t, It as n, Ot as r, St as i, Tt as a, Ut as o, Vt as s, Z as c, _t as l, at as u, bt as d, ct as f, ft as p, gt as m, i as h, it as g, jt as _, mt as v, pt as y, r as b, rt as x, t as S, ut as C, w, wt as T, yt as E } from "./main-CijI5DJu.js";
//#region src/templates/sources/sources.store.ts
function D(e) {
	return e === "granted" ? "online" : "offline";
}
var O = u("library-sources", function() {
	let e = n([]), t = n(!1), r = y(() => e.value.map((e) => ({
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
		entries: r,
		isSupported: t,
		init: i,
		addSource: a,
		reconnect: o,
		reconnectAll: s,
		detachSource: c
	};
}), k = u("library-browser", function() {
	let e = O(), t = n([]);
	async function i() {
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
	async function a() {
		return await i(), r(() => e.entries, i);
	}
	return {
		sources: t,
		init: a
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
}, W = { class: "pwa-nudge-actions" }, G = /* @__PURE__ */ x(/* @__PURE__ */ d({
	__name: "manage-sources-dialog",
	setup(r, { expose: c }) {
		c({
			open: G,
			close: K
		});
		let u = O(), d = b(), f, h = n(!1), g = n(!1), x = n(!1), S = n(localStorage.getItem("set:pwa-nudge-dismissed") === "1"), w = y(() => !g.value && !S.value && u.entries.length > 0);
		function E() {
			S.value = !0, localStorage.setItem("set:pwa-nudge-dismissed", "1");
		}
		async function D() {
			await d.promptInstall() && (g.value = !0);
		}
		async function k(e) {
			try {
				await u.addSource(e);
			} catch {}
		}
		function G() {
			h.value = !0;
		}
		function K() {
			h.value = !1;
		}
		return i(async () => {
			g.value = d.isInstalled(), x.value = d.canInstall(), f = d.onChange(() => {
				g.value = d.isInstalled(), x.value = d.canInstall();
			});
		}), t(() => {
			f?.();
		}), (t, n) => (T(), l("dialog", {
			class: "modal",
			open: h.value
		}, [_(v("div", j, [
			v("button", {
				class: "btn btn-sm btn-circle btn-ghost manage-sources-dialog__close",
				type: "button",
				"aria-label": "Close",
				onClick: K
			}, " ✕ "),
			n[5] ||= v("h3", { class: "manage-dialog-title" }, "Manage Sources", -1),
			e(u).isSupported ? (T(), l(p, { key: 1 }, [
				v("div", N, [
					v("button", {
						"data-testid": "add-source-btn",
						class: "btn btn-sm",
						onClick: n[0] ||= (e) => k("readwrite")
					}, " Add "),
					v("button", {
						"data-testid": "add-readonly-btn",
						class: "btn btn-sm",
						onClick: n[1] ||= (e) => k("read")
					}, " Add Read-Only "),
					v("button", {
						"data-testid": "reconnect-all-btn",
						class: "btn btn-sm reconnect-all-btn",
						onClick: n[2] ||= (t) => e(u).reconnectAll()
					}, " Reconnect all ")
				]),
				v("ul", P, [(T(!0), l(p, null, a(e(u).entries, (t) => (T(), l("li", {
					key: t.source.id,
					"data-source-id": t.source.id,
					"data-testid": "source-item",
					class: "source-item"
				}, [
					v("span", I, [
						v("span", L, o(t.source.label), 1),
						t.source.mode === "read" ? (T(), l("span", R, "r")) : (T(), l("span", z, "rw")),
						v("span", {
							"data-testid": "status-badge",
							class: s(["status-dot", t.status]),
							title: t.status
						}, null, 10, B)
					]),
					v("button", {
						"data-source-id": t.source.id,
						"data-testid": "reconnect-btn",
						class: "btn btn-sm",
						disabled: t.status === "online",
						onClick: (n) => e(u).reconnect(t.source.id)
					}, " Reconnect ", 8, V),
					v("button", {
						"data-source-id": t.source.id,
						"data-testid": "detach-btn",
						class: "btn btn-sm btn-ghost",
						onClick: (n) => e(u).detachSource(t.source.id)
					}, " Remove ", 8, H)
				], 8, F))), 128))]),
				w.value ? (T(), l("div", U, [n[4] ||= v("p", { class: "pwa-nudge-text" }, "Install SET to keep folder access between sessions.", -1), v("div", W, [x.value ? (T(), l("button", {
					key: 0,
					"data-testid": "pwa-nudge-install",
					class: "btn btn-sm btn-ghost",
					onClick: D
				}, " Install ")) : m("", !0), v("button", {
					"data-testid": "pwa-nudge-dismiss",
					class: "btn btn-sm btn-ghost",
					onClick: E
				}, " Dismiss ")])])) : m("", !0)
			], 64)) : (T(), l("div", M, [...n[3] ||= [v("p", null, " This browser does not support local folder sources. Use Chrome/Edge or install SET as a PWA. ", -1)]]))
		], 512), [[C, h.value]])], 8, A));
	}
}), [["__scopeId", "data-v-553abee1"]]), K = { class: "templates-sidebar" }, q = /* @__PURE__ */ x(/* @__PURE__ */ d({
	__name: "sources-sidebar",
	setup(r) {
		let a = n(null), o = O(), s = k(), u, d;
		i(async () => {
			u = await o.init(), d = await s.init();
		}), t(() => {
			u?.(), d?.();
		});
		function f() {
			a.value?.open();
		}
		return (t, n) => (T(), l("div", K, [
			v("button", {
				"data-testid": "manage-sources-btn",
				class: "btn manage-button",
				onClick: f,
				title: "Manage library sources"
			}, " Manage Sources "),
			E(G, {
				ref_key: "manageDialog",
				ref: a
			}, null, 512),
			E(e(c), {
				sources: e(s).sources,
				extensions: [
					".fsd",
					".asd",
					".ssd"
				],
				"storage-key": "SET-TEMPLATES-FILETREE"
			}, null, 8, ["sources"])
		]));
	}
}), [["__scopeId", "data-v-d1a769d7"]]);
//#endregion
//#region set-sources-sidebar.ts
function J(e, t) {
	w(document.getElementById(e), { detail: `could not find root element: ${e}` });
	let n = S(t), r = f(q);
	return r.use(g()), r.mount(`#${e}`), () => {
		n(), r.unmount();
	};
}
//#endregion
export { J as default };
