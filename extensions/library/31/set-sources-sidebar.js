(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`.manage-sources-dialog[data-v-553abee1]{flex-direction:column;width:min(560px,92vw);max-width:none;max-height:min(74vh,720px);display:flex}.manage-sources-dialog__close[data-v-553abee1]{position:absolute;top:.5rem;right:.5rem}.manage-dialog-title[data-v-553abee1]{margin-bottom:1rem;font-size:1.125rem;font-weight:700}.reconnect-all-btn[data-v-553abee1]{margin-left:auto}.empty-state[data-v-553abee1]{text-align:center;color:var(--color-base-content);opacity:.6;flex:1;justify-content:center;align-items:center;display:flex}.manage-header[data-v-553abee1]{flex-shrink:0;gap:.5rem;margin-bottom:1rem;display:flex}.source-list[data-v-553abee1]{flex:1;margin:0;padding:0;list-style:none;overflow:hidden auto}.source-item[data-v-553abee1]{align-items:center;gap:.5rem;padding:.5rem 0;display:flex}.source-name[data-v-553abee1]{flex:1;align-items:center;gap:.5rem;display:flex;overflow:hidden}.source-label[data-v-553abee1]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.status-dot[data-v-553abee1]{border-radius:50%;flex-shrink:0;width:.5rem;height:.5rem}.status-dot.online[data-v-553abee1]{background:var(--color-success)}.status-dot.offline[data-v-553abee1]{background:var(--color-warning)}.mode-badge[data-v-553abee1]{background:var(--color-base-300);color:var(--color-base-content);text-transform:lowercase;border-radius:.25rem;flex-shrink:0;padding:.125rem .25rem;font-size:.625rem;line-height:1}.pwa-nudge[data-v-553abee1]{background:var(--color-base-200);opacity:.7;border-radius:.5rem;flex-direction:column;flex-shrink:0;gap:.25rem;margin-top:.5rem;padding:.5rem .75rem;display:flex}.pwa-nudge-text[data-v-553abee1]{color:var(--color-base-content);opacity:.6;margin:0;font-size:.75rem;line-height:1.25rem}.pwa-nudge-actions[data-v-553abee1]{justify-content:flex-end;gap:.25rem;display:flex}.templates-sidebar[data-v-d1a769d7]{height:100%;padding:1rem;overflow:auto}.manage-button[data-v-d1a769d7]{width:100%;margin-bottom:1rem}`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})();import { $ as e, A as t, Et as n, H as r, I as i, Ot as a, Q as o, Tt as s, U as c, W as l, Y as u, Z as d, at as f, ct as p, gt as m, i as h, it as g, lt as _, n as v, nt as y, pt as b, q as x, r as S, st as C, t as w, tt as T, ut as E, xt as D } from "./main-CUQebmJM.js";
//#region src/templates/sources/sources.store.ts
function O(e) {
	return e === "granted" ? "online" : "offline";
}
var k = l("library-sources", function() {
	let e = D([]), t = D(!1), n = o(() => e.value.map((e) => ({
		source: e,
		status: O(e.access)
	})));
	async function r() {
		let n = h();
		return t.value = n.isSupported(), e.value = await n.listSources(), n.onChange((t) => {
			e.value = t;
		});
	}
	async function i(e) {
		return h().attach({ mode: e });
	}
	async function a(t) {
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
		init: r,
		addSource: i,
		reconnect: a,
		reconnectAll: s,
		detachSource: c
	};
}), A = l("library-browser", function() {
	let e = k(), t = D([]);
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
	async function r() {
		return await n(), b(() => e.entries, n);
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
}, G = { class: "pwa-nudge-actions" }, K = /* @__PURE__ */ r(/* @__PURE__ */ f({
	__name: "manage-sources-dialog",
	setup(t, { expose: r }) {
		r({
			open: A,
			close: K
		});
		let i = k(), c = w(), l, f = D(!1), h = D(!1), g = D(!1), v = D(localStorage.getItem("set:pwa-nudge-dismissed") === "1"), b = o(() => !h.value && !v.value && i.entries.length > 0);
		function x() {
			v.value = !0, localStorage.setItem("set:pwa-nudge-dismissed", "1");
		}
		async function S() {
			await c.promptInstall() && (h.value = !0);
		}
		async function O(e) {
			try {
				await i.addSource(e);
			} catch {}
		}
		function A() {
			f.value = !0;
		}
		function K() {
			f.value = !1;
		}
		return C(async () => {
			h.value = c.isInstalled(), g.value = c.canInstall(), l = c.onChange(() => {
				h.value = c.isInstalled(), g.value = c.canInstall();
			});
		}), p(() => {
			l?.();
		}), (t, r) => (_(), y("dialog", {
			class: "modal",
			open: f.value
		}, [m(e("div", M, [
			e("button", {
				class: "btn btn-sm btn-circle btn-ghost manage-sources-dialog__close",
				type: "button",
				"aria-label": "Close",
				onClick: K
			}, " ✕ "),
			r[5] ||= e("h3", { class: "manage-dialog-title" }, "Manage Sources", -1),
			s(i).isSupported ? (_(), y(d, { key: 1 }, [
				e("div", P, [
					e("button", {
						"data-testid": "add-source-btn",
						class: "btn btn-sm",
						onClick: r[0] ||= (e) => O("readwrite")
					}, " Add "),
					e("button", {
						"data-testid": "add-readonly-btn",
						class: "btn btn-sm",
						onClick: r[1] ||= (e) => O("read")
					}, " Add Read-Only "),
					e("button", {
						"data-testid": "reconnect-all-btn",
						class: "btn btn-sm reconnect-all-btn",
						onClick: r[2] ||= (e) => s(i).reconnectAll()
					}, " Reconnect all ")
				]),
				e("ul", F, [(_(!0), y(d, null, E(s(i).entries, (t) => (_(), y("li", {
					key: t.source.id,
					"data-source-id": t.source.id,
					"data-testid": "source-item",
					class: "source-item"
				}, [
					e("span", L, [
						e("span", R, a(t.source.label), 1),
						t.source.mode === "read" ? (_(), y("span", z, "r")) : (_(), y("span", B, "rw")),
						e("span", {
							"data-testid": "status-badge",
							class: n(["status-dot", t.status]),
							title: t.status
						}, null, 10, V)
					]),
					e("button", {
						"data-source-id": t.source.id,
						"data-testid": "reconnect-btn",
						class: "btn btn-sm",
						disabled: t.status === "online",
						onClick: (e) => s(i).reconnect(t.source.id)
					}, " Reconnect ", 8, H),
					e("button", {
						"data-source-id": t.source.id,
						"data-testid": "detach-btn",
						class: "btn btn-sm btn-ghost",
						onClick: (e) => s(i).detachSource(t.source.id)
					}, " Remove ", 8, U)
				], 8, I))), 128))]),
				b.value ? (_(), y("div", W, [r[4] ||= e("p", { class: "pwa-nudge-text" }, "Install SET to keep folder access between sessions.", -1), e("div", G, [g.value ? (_(), y("button", {
					key: 0,
					"data-testid": "pwa-nudge-install",
					class: "btn btn-sm btn-ghost",
					onClick: S
				}, " Install ")) : T("", !0), e("button", {
					"data-testid": "pwa-nudge-dismiss",
					class: "btn btn-sm btn-ghost",
					onClick: x
				}, " Dismiss ")])])) : T("", !0)
			], 64)) : (_(), y("div", N, [...r[3] ||= [e("p", null, " This browser does not support local folder sources. Use Chrome/Edge or install SET as a PWA. ", -1)]]))
		], 512), [[u, f.value]])], 8, j));
	}
}), [["__scopeId", "data-v-553abee1"]]), q = { class: "templates-sidebar" }, J = /* @__PURE__ */ r(/* @__PURE__ */ f({
	__name: "sources-sidebar",
	setup(t) {
		let n = D(null), r = k(), a = A(), o, c;
		C(async () => {
			o = await r.init(), c = await a.init();
		}), p(() => {
			o?.(), c?.();
		});
		function l() {
			n.value?.open();
		}
		return (t, r) => (_(), y("div", q, [
			e("button", {
				"data-testid": "manage-sources-btn",
				class: "btn manage-button",
				onClick: l,
				title: "Manage library sources"
			}, " Manage Sources "),
			g(K, {
				ref_key: "manageDialog",
				ref: n
			}, null, 512),
			g(s(i), {
				sources: s(a).sources,
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
function Y(e, n) {
	t(document.getElementById(e), { detail: `could not find root element: ${e}` }), S({
		project: n.project,
		activeDocumentId: n.activeDocumentId,
		commands: n.commands,
		storageSources: n.storageSources,
		pwa: n.pwa
	});
	let r = x(J);
	return r.use(c()), r.mount(`#${e}`), () => {
		v(), r.unmount();
	};
}
//#endregion
export { Y as default };
