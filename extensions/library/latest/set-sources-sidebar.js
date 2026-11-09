(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`.manage-sources-dialog[data-v-553abee1]{flex-direction:column;width:min(560px,92vw);max-width:none;max-height:min(74vh,720px);display:flex}.manage-sources-dialog__close[data-v-553abee1]{position:absolute;top:.5rem;right:.5rem}.manage-dialog-title[data-v-553abee1]{margin-bottom:1rem;font-size:1.125rem;font-weight:700}.reconnect-all-btn[data-v-553abee1]{margin-left:auto}.empty-state[data-v-553abee1]{text-align:center;color:var(--color-base-content);opacity:.6;flex:1;justify-content:center;align-items:center;display:flex}.manage-header[data-v-553abee1]{flex-shrink:0;gap:.5rem;margin-bottom:1rem;display:flex}.source-list[data-v-553abee1]{flex:1;margin:0;padding:0;list-style:none;overflow:hidden auto}.source-item[data-v-553abee1]{align-items:center;gap:.5rem;padding:.5rem 0;display:flex}.source-name[data-v-553abee1]{flex:1;align-items:center;gap:.5rem;display:flex;overflow:hidden}.source-label[data-v-553abee1]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.status-dot[data-v-553abee1]{border-radius:50%;flex-shrink:0;width:.5rem;height:.5rem}.status-dot.online[data-v-553abee1]{background:var(--color-success)}.status-dot.offline[data-v-553abee1]{background:var(--color-warning)}.mode-badge[data-v-553abee1]{background:var(--color-base-300);color:var(--color-base-content);text-transform:lowercase;border-radius:.25rem;flex-shrink:0;padding:.125rem .25rem;font-size:.625rem;line-height:1}.pwa-nudge[data-v-553abee1]{background:var(--color-base-200);opacity:.7;border-radius:.5rem;flex-direction:column;flex-shrink:0;gap:.25rem;margin-top:.5rem;padding:.5rem .75rem;display:flex}.pwa-nudge-text[data-v-553abee1]{color:var(--color-base-content);opacity:.6;margin:0;font-size:.75rem;line-height:1.25rem}.pwa-nudge-actions[data-v-553abee1]{justify-content:flex-end;gap:.25rem;display:flex}.templates-sidebar[data-v-d1a769d7]{height:100%;padding:1rem;overflow:auto}.manage-button[data-v-d1a769d7]{width:100%;margin-bottom:1rem}`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})();import { $ as e, Dt as t, Et as n, G as r, J as i, L as a, Q as o, St as s, U as c, W as l, X as u, _t as d, a as f, at as p, ct as m, dt as h, et as g, i as _, j as v, kt as y, lt as b, mt as x, n as S, nt as C, ot as w, r as T, rt as E, ut as D } from "./main-d3AbboHc.js";
//#region src/templates/sources/sources.store.ts
function O(e) {
	return e === "granted" ? "online" : "offline";
}
var k = r("library-sources", function() {
	let t = s([]), n = s(!1), r = e(() => t.value.map((e) => ({
		source: e,
		status: O(e.access)
	})));
	async function i() {
		let e = f();
		return n.value = e.isSupported(), t.value = await e.listSources(), e.onChange((e) => {
			t.value = e;
		});
	}
	async function a(e) {
		return f().attach({ mode: e });
	}
	async function o(e) {
		let n = f(), r = t.value.find((t) => t.id === e);
		r && (r.access === "prompt" ? await n.requestAccess(e) : r.access === "denied" && (await n.detach(e), await n.attach({ mode: r.mode })));
	}
	async function c() {
		let e = f();
		for (let n of t.value) n.access === "prompt" && await e.requestAccess(n.id);
	}
	async function l(e) {
		await f().detach(e);
	}
	return {
		sources: t,
		entries: r,
		isSupported: n,
		init: i,
		addSource: a,
		reconnect: o,
		reconnectAll: c,
		detachSource: l
	};
}), A = r("library-browser", function() {
	let e = k(), t = s([]);
	async function n() {
		let n = f();
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
		return await n(), x(() => e.entries, n);
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
}, G = { class: "pwa-nudge-actions" }, K = /* @__PURE__ */ c(/* @__PURE__ */ w({
	__name: "manage-sources-dialog",
	setup(r, { expose: i }) {
		i({
			open: A,
			close: K
		});
		let a = k(), c = S(), l, f = s(!1), p = s(!1), _ = s(!1), v = s(localStorage.getItem("set:pwa-nudge-dismissed") === "1"), x = e(() => !p.value && !v.value && a.entries.length > 0);
		function w() {
			v.value = !0, localStorage.setItem("set:pwa-nudge-dismissed", "1");
		}
		async function T() {
			await c.promptInstall() && (p.value = !0);
		}
		async function O(e) {
			try {
				await a.addSource(e);
			} catch {}
		}
		function A() {
			f.value = !0;
		}
		function K() {
			f.value = !1;
		}
		return m(async () => {
			p.value = c.isInstalled(), _.value = c.canInstall(), l = c.onChange(() => {
				p.value = c.isInstalled(), _.value = c.canInstall();
			});
		}), b(() => {
			l?.();
		}), (e, r) => (D(), E("dialog", {
			class: "modal",
			open: f.value
		}, [d(g("div", M, [
			g("button", {
				class: "btn btn-sm btn-circle btn-ghost manage-sources-dialog__close",
				type: "button",
				"aria-label": "Close",
				onClick: K
			}, " ✕ "),
			r[5] ||= g("h3", { class: "manage-dialog-title" }, "Manage Sources", -1),
			n(a).isSupported ? (D(), E(o, { key: 1 }, [
				g("div", P, [
					g("button", {
						"data-testid": "add-source-btn",
						class: "btn btn-sm",
						onClick: r[0] ||= (e) => O("readwrite")
					}, " Add "),
					g("button", {
						"data-testid": "add-readonly-btn",
						class: "btn btn-sm",
						onClick: r[1] ||= (e) => O("read")
					}, " Add Read-Only "),
					g("button", {
						"data-testid": "reconnect-all-btn",
						class: "btn btn-sm reconnect-all-btn",
						onClick: r[2] ||= (e) => n(a).reconnectAll()
					}, " Reconnect all ")
				]),
				g("ul", F, [(D(!0), E(o, null, h(n(a).entries, (e) => (D(), E("li", {
					key: e.source.id,
					"data-source-id": e.source.id,
					"data-testid": "source-item",
					class: "source-item"
				}, [
					g("span", L, [
						g("span", R, y(e.source.label), 1),
						e.source.mode === "read" ? (D(), E("span", z, "r")) : (D(), E("span", B, "rw")),
						g("span", {
							"data-testid": "status-badge",
							class: t(["status-dot", e.status]),
							title: e.status
						}, null, 10, V)
					]),
					g("button", {
						"data-source-id": e.source.id,
						"data-testid": "reconnect-btn",
						class: "btn btn-sm",
						disabled: e.status === "online",
						onClick: (t) => n(a).reconnect(e.source.id)
					}, " Reconnect ", 8, H),
					g("button", {
						"data-source-id": e.source.id,
						"data-testid": "detach-btn",
						class: "btn btn-sm btn-ghost",
						onClick: (t) => n(a).detachSource(e.source.id)
					}, " Remove ", 8, U)
				], 8, I))), 128))]),
				x.value ? (D(), E("div", W, [r[4] ||= g("p", { class: "pwa-nudge-text" }, "Install SET to keep folder access between sessions.", -1), g("div", G, [_.value ? (D(), E("button", {
					key: 0,
					"data-testid": "pwa-nudge-install",
					class: "btn btn-sm btn-ghost",
					onClick: T
				}, " Install ")) : C("", !0), g("button", {
					"data-testid": "pwa-nudge-dismiss",
					class: "btn btn-sm btn-ghost",
					onClick: w
				}, " Dismiss ")])])) : C("", !0)
			], 64)) : (D(), E("div", N, [...r[3] ||= [g("p", null, " This browser does not support local folder sources. Use Chrome/Edge or install SET as a PWA. ", -1)]]))
		], 512), [[u, f.value]])], 8, j));
	}
}), [["__scopeId", "data-v-553abee1"]]), q = { class: "templates-sidebar" }, J = /* @__PURE__ */ c(/* @__PURE__ */ w({
	__name: "sources-sidebar",
	setup(e) {
		let t = s(null), r = k(), i = A(), o, c;
		m(async () => {
			o = await r.init(), c = await i.init();
		}), b(() => {
			o?.(), c?.();
		});
		function l() {
			t.value?.open();
		}
		return (e, r) => (D(), E("div", q, [
			g("button", {
				"data-testid": "manage-sources-btn",
				class: "btn manage-button",
				onClick: l,
				title: "Manage library sources"
			}, " Manage Sources "),
			p(K, {
				ref_key: "manageDialog",
				ref: t
			}, null, 512),
			p(n(a), {
				sources: n(i).sources,
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
function Y(e, t) {
	v(document.getElementById(e), { detail: `could not find root element: ${e}` }), _({
		project: t.project,
		activeDocumentId: t.activeDocumentId,
		commands: t.commands,
		storageSources: t.storageSources,
		pwa: t.pwa,
		projectStorage: t.projectStorage
	});
	let n = i(J);
	return n.use(l()), n.mount(`#${e}`), () => {
		T(), n.unmount();
	};
}
//#endregion
export { Y as default };
