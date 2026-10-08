(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`.manage-sources-dialog[data-v-553abee1]{flex-direction:column;width:min(560px,92vw);max-width:none;max-height:min(74vh,720px);display:flex}.manage-sources-dialog__close[data-v-553abee1]{position:absolute;top:.5rem;right:.5rem}.manage-dialog-title[data-v-553abee1]{margin-bottom:1rem;font-size:1.125rem;font-weight:700}.reconnect-all-btn[data-v-553abee1]{margin-left:auto}.empty-state[data-v-553abee1]{text-align:center;color:var(--color-base-content);opacity:.6;flex:1;justify-content:center;align-items:center;display:flex}.manage-header[data-v-553abee1]{flex-shrink:0;gap:.5rem;margin-bottom:1rem;display:flex}.source-list[data-v-553abee1]{flex:1;margin:0;padding:0;list-style:none;overflow:hidden auto}.source-item[data-v-553abee1]{align-items:center;gap:.5rem;padding:.5rem 0;display:flex}.source-name[data-v-553abee1]{flex:1;align-items:center;gap:.5rem;display:flex;overflow:hidden}.source-label[data-v-553abee1]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.status-dot[data-v-553abee1]{border-radius:50%;flex-shrink:0;width:.5rem;height:.5rem}.status-dot.online[data-v-553abee1]{background:var(--color-success)}.status-dot.offline[data-v-553abee1]{background:var(--color-warning)}.mode-badge[data-v-553abee1]{background:var(--color-base-300);color:var(--color-base-content);text-transform:lowercase;border-radius:.25rem;flex-shrink:0;padding:.125rem .25rem;font-size:.625rem;line-height:1}.pwa-nudge[data-v-553abee1]{background:var(--color-base-200);opacity:.7;border-radius:.5rem;flex-direction:column;flex-shrink:0;gap:.25rem;margin-top:.5rem;padding:.5rem .75rem;display:flex}.pwa-nudge-text[data-v-553abee1]{color:var(--color-base-content);opacity:.6;margin:0;font-size:.75rem;line-height:1.25rem}.pwa-nudge-actions[data-v-553abee1]{justify-content:flex-end;gap:.25rem;display:flex}.templates-sidebar[data-v-d1a769d7]{height:100%;padding:1rem;overflow:auto}.manage-button[data-v-d1a769d7]{width:100%;margin-bottom:1rem}`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})();import { C as e, D as t, F as n, H as r, I as i, M as a, N as o, R as s, S as c, U as l, V as u, W as d, X as f, at as p, ct as m, g as h, i as g, j as _, k as v, n as y, o as b, ot as x, q as S, r as C, t as w, tt as T, w as E, z as D } from "./main-BaE9hf1L.js";
//#region src/templates/sources/sources.store.ts
function O(e) {
	return e === "granted" ? "online" : "offline";
}
var k = E("library-sources", function() {
	let e = T([]), t = T(!1), n = a(() => e.value.map((e) => ({
		source: e,
		status: O(e.access)
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
	async function o(t) {
		let n = g(), r = e.value.find((e) => e.id === t);
		r && (r.access === "prompt" ? await n.requestAccess(t) : r.access === "denied" && (await n.detach(t), await n.attach({ mode: r.mode })));
	}
	async function s() {
		let t = g();
		for (let n of e.value) n.access === "prompt" && await t.requestAccess(n.id);
	}
	async function c(e) {
		await g().detach(e);
	}
	return {
		sources: e,
		entries: n,
		isSupported: t,
		init: r,
		addSource: i,
		reconnect: o,
		reconnectAll: s,
		detachSource: c
	};
}), A = E("library-browser", function() {
	let e = k(), t = T([]);
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
		return await n(), S(() => e.entries, n);
	}
	return {
		sources: t,
		init: r
	};
}), j = ["open"], M = { class: "modal-box manage-sources-dialog" }, N = {
	key: 0,
	"data-testid": "unsupported-msg",
	class: "empty-state"
}, P = { class: "manage-header" }, F = { class: "source-list" }, I = ["data-source-id"], L = { class: "source-name" }, R = { class: "source-label" }, z = {
	key: 0,
	"data-testid": "readonly-badge",
	class: "mode-badge",
	title: "Read-only"
}, B = {
	key: 1,
	"data-testid": "readwrite-badge",
	class: "mode-badge",
	title: "Read-write"
}, V = ["title"], H = [
	"data-source-id",
	"disabled",
	"onClick"
], U = ["data-source-id", "onClick"], W = {
	key: 0,
	"data-testid": "pwa-nudge",
	class: "pwa-nudge"
}, G = { class: "pwa-nudge-actions" }, K = /* @__PURE__ */ c(/* @__PURE__ */ D({
	__name: "manage-sources-dialog",
	setup(e, { expose: t }) {
		t({
			open: A,
			close: K
		});
		let s = k(), c = w(), h, g = T(!1), y = T(!1), b = T(!1), S = T(localStorage.getItem("set:pwa-nudge-dismissed") === "1"), C = a(() => !y.value && !S.value && s.entries.length > 0);
		function E() {
			S.value = !0, localStorage.setItem("set:pwa-nudge-dismissed", "1");
		}
		async function D() {
			await c.promptInstall() && (y.value = !0);
		}
		async function O(e) {
			try {
				await s.addSource(e);
			} catch {}
		}
		function A() {
			g.value = !0;
		}
		function K() {
			g.value = !1;
		}
		return u(async () => {
			y.value = c.isInstalled(), b.value = c.canInstall(), h = c.onChange(() => {
				y.value = c.isInstalled(), b.value = c.canInstall();
			});
		}), r(() => {
			h?.();
		}), (e, t) => (l(), i("dialog", {
			class: "modal",
			open: g.value
		}, [f(o("div", M, [
			o("button", {
				class: "btn btn-sm btn-circle btn-ghost manage-sources-dialog__close",
				type: "button",
				"aria-label": "Close",
				onClick: K
			}, " ✕ "),
			t[5] ||= o("h3", { class: "manage-dialog-title" }, "Manage Sources", -1),
			p(s).isSupported ? (l(), i(_, { key: 1 }, [
				o("div", P, [
					o("button", {
						"data-testid": "add-source-btn",
						class: "btn btn-sm",
						onClick: t[0] ||= (e) => O("readwrite")
					}, " Add "),
					o("button", {
						"data-testid": "add-readonly-btn",
						class: "btn btn-sm",
						onClick: t[1] ||= (e) => O("read")
					}, " Add Read-Only "),
					o("button", {
						"data-testid": "reconnect-all-btn",
						class: "btn btn-sm reconnect-all-btn",
						onClick: t[2] ||= (e) => p(s).reconnectAll()
					}, " Reconnect all ")
				]),
				o("ul", F, [(l(!0), i(_, null, d(p(s).entries, (e) => (l(), i("li", {
					key: e.source.id,
					"data-source-id": e.source.id,
					"data-testid": "source-item",
					class: "source-item"
				}, [
					o("span", L, [
						o("span", R, m(e.source.label), 1),
						e.source.mode === "read" ? (l(), i("span", z, "r")) : (l(), i("span", B, "rw")),
						o("span", {
							"data-testid": "status-badge",
							class: x(["status-dot", e.status]),
							title: e.status
						}, null, 10, V)
					]),
					o("button", {
						"data-source-id": e.source.id,
						"data-testid": "reconnect-btn",
						class: "btn btn-sm",
						disabled: e.status === "online",
						onClick: (t) => p(s).reconnect(e.source.id)
					}, " Reconnect ", 8, H),
					o("button", {
						"data-source-id": e.source.id,
						"data-testid": "detach-btn",
						class: "btn btn-sm btn-ghost",
						onClick: (t) => p(s).detachSource(e.source.id)
					}, " Remove ", 8, U)
				], 8, I))), 128))]),
				C.value ? (l(), i("div", W, [t[4] ||= o("p", { class: "pwa-nudge-text" }, "Install SET to keep folder access between sessions.", -1), o("div", G, [b.value ? (l(), i("button", {
					key: 0,
					"data-testid": "pwa-nudge-install",
					class: "btn btn-sm btn-ghost",
					onClick: D
				}, " Install ")) : n("", !0), o("button", {
					"data-testid": "pwa-nudge-dismiss",
					class: "btn btn-sm btn-ghost",
					onClick: E
				}, " Dismiss ")])])) : n("", !0)
			], 64)) : (l(), i("div", N, [...t[3] ||= [o("p", null, " This browser does not support local folder sources. Use Chrome/Edge or install SET as a PWA. ", -1)]]))
		], 512), [[v, g.value]])], 8, j));
	}
}), [["__scopeId", "data-v-553abee1"]]), q = { class: "templates-sidebar" }, J = /* @__PURE__ */ c(/* @__PURE__ */ D({
	__name: "sources-sidebar",
	setup(e) {
		let t = T(null), n = k(), a = A(), c, d;
		u(async () => {
			c = await n.init(), d = await a.init();
		}), r(() => {
			c?.(), d?.();
		});
		function f() {
			t.value?.open();
		}
		return (e, n) => (l(), i("div", q, [
			o("button", {
				"data-testid": "manage-sources-btn",
				class: "btn manage-button",
				onClick: f,
				title: "Manage library sources"
			}, " Manage Sources "),
			s(K, {
				ref_key: "manageDialog",
				ref: t
			}, null, 512),
			s(p(h), {
				sources: p(a).sources,
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
function Y(n, r) {
	b(document.getElementById(n), { detail: `could not find root element: ${n}` }), y({
		project: r.project,
		activeDocumentId: r.activeDocumentId,
		commands: r.commands,
		storageSources: r.storageSources,
		pwa: r.pwa
	});
	let i = t(J);
	return i.use(e()), i.mount(`#${n}`), () => {
		C(), i.unmount();
	};
}
//#endregion
export { Y as default };
