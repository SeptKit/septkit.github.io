(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`.manage-sources-dialog[data-v-553abee1]{flex-direction:column;width:min(560px,92vw);max-width:none;max-height:min(74vh,720px);display:flex}.manage-sources-dialog__close[data-v-553abee1]{position:absolute;top:.5rem;right:.5rem}.manage-dialog-title[data-v-553abee1]{margin-bottom:1rem;font-size:1.125rem;font-weight:700}.reconnect-all-btn[data-v-553abee1]{margin-left:auto}.empty-state[data-v-553abee1]{text-align:center;color:var(--color-base-content);opacity:.6;flex:1;justify-content:center;align-items:center;display:flex}.manage-header[data-v-553abee1]{flex-shrink:0;gap:.5rem;margin-bottom:1rem;display:flex}.source-list[data-v-553abee1]{flex:1;margin:0;padding:0;list-style:none;overflow:hidden auto}.source-item[data-v-553abee1]{align-items:center;gap:.5rem;padding:.5rem 0;display:flex}.source-name[data-v-553abee1]{flex:1;align-items:center;gap:.5rem;display:flex;overflow:hidden}.source-label[data-v-553abee1]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.status-dot[data-v-553abee1]{border-radius:50%;flex-shrink:0;width:.5rem;height:.5rem}.status-dot.online[data-v-553abee1]{background:var(--color-success)}.status-dot.offline[data-v-553abee1]{background:var(--color-warning)}.mode-badge[data-v-553abee1]{background:var(--color-base-300);color:var(--color-base-content);text-transform:lowercase;border-radius:.25rem;flex-shrink:0;padding:.125rem .25rem;font-size:.625rem;line-height:1}.pwa-nudge[data-v-553abee1]{background:var(--color-base-200);opacity:.7;border-radius:.5rem;flex-direction:column;flex-shrink:0;gap:.25rem;margin-top:.5rem;padding:.5rem .75rem;display:flex}.pwa-nudge-text[data-v-553abee1]{color:var(--color-base-content);opacity:.6;margin:0;font-size:.75rem;line-height:1.25rem}.pwa-nudge-actions[data-v-553abee1]{justify-content:flex-end;gap:.25rem;display:flex}.templates-sidebar[data-v-d1a769d7]{height:100%;padding:1rem;overflow:auto}.manage-button[data-v-d1a769d7]{width:100%;margin-bottom:1rem}`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})();import { $ as e, B as t, Ct as n, J as r, K as i, N as a, Q as o, St as s, Tt as c, V as l, W as u, X as d, Y as f, at as p, g as m, i as h, it as g, n as _, nt as v, ot as y, pt as b, r as x, st as S, t as C, tt as w, ut as T, vt as E, z as D } from "./main-KUX08-TY.js";
//#region src/templates/sources/sources.store.ts
function O(e) {
	return e === "granted" ? "online" : "offline";
}
var k = l("library-sources", function() {
	let e = E([]), t = E(!1), n = f(() => e.value.map((e) => ({
		source: e,
		status: O(e.access)
	})));
	async function r() {
		let n = C();
		return t.value = n.isSupported(), e.value = await n.listSources(), n.onChange((t) => {
			e.value = t;
		});
	}
	async function i(e) {
		return C().attach({ mode: e });
	}
	async function a(t) {
		let n = C(), r = e.value.find((e) => e.id === t);
		r && (r.access === "prompt" ? await n.requestAccess(t) : r.access === "denied" && (await n.detach(t), await n.attach({ mode: r.mode })));
	}
	async function o() {
		let t = C();
		for (let n of e.value) n.access === "prompt" && await t.requestAccess(n.id);
	}
	async function s(e) {
		await C().detach(e);
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
}), A = l("library-browser", function() {
	let e = k(), t = E([]);
	async function n() {
		let n = C();
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
		return await n(), T(() => e.entries, n);
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
}, G = { class: "pwa-nudge-actions" }, K = /* @__PURE__ */ D(/* @__PURE__ */ v({
	__name: "manage-sources-dialog",
	setup(t, { expose: a }) {
		a({
			open: A,
			close: K
		});
		let l = k(), u = h(), m, _ = E(!1), v = E(!1), x = E(!1), C = E(localStorage.getItem("set:pwa-nudge-dismissed") === "1"), w = f(() => !v.value && !C.value && l.entries.length > 0);
		function T() {
			C.value = !0, localStorage.setItem("set:pwa-nudge-dismissed", "1");
		}
		async function D() {
			await u.promptInstall() && (v.value = !0);
		}
		async function O(e) {
			try {
				await l.addSource(e);
			} catch {}
		}
		function A() {
			_.value = !0;
		}
		function K() {
			_.value = !1;
		}
		return g(async () => {
			v.value = u.isInstalled(), x.value = u.canInstall(), m = u.onChange(() => {
				v.value = u.isInstalled(), x.value = u.canInstall();
			});
		}), p(() => {
			m?.();
		}), (t, a) => (y(), e("dialog", {
			class: "modal",
			open: _.value
		}, [b(d("div", M, [
			d("button", {
				class: "btn btn-sm btn-circle btn-ghost manage-sources-dialog__close",
				type: "button",
				"aria-label": "Close",
				onClick: K
			}, " ✕ "),
			a[5] ||= d("h3", { class: "manage-dialog-title" }, "Manage Sources", -1),
			s(l).isSupported ? (y(), e(r, { key: 1 }, [
				d("div", P, [
					d("button", {
						"data-testid": "add-source-btn",
						class: "btn btn-sm",
						onClick: a[0] ||= (e) => O("readwrite")
					}, " Add "),
					d("button", {
						"data-testid": "add-readonly-btn",
						class: "btn btn-sm",
						onClick: a[1] ||= (e) => O("read")
					}, " Add Read-Only "),
					d("button", {
						"data-testid": "reconnect-all-btn",
						class: "btn btn-sm reconnect-all-btn",
						onClick: a[2] ||= (e) => s(l).reconnectAll()
					}, " Reconnect all ")
				]),
				d("ul", F, [(y(!0), e(r, null, S(s(l).entries, (t) => (y(), e("li", {
					key: t.source.id,
					"data-source-id": t.source.id,
					"data-testid": "source-item",
					class: "source-item"
				}, [
					d("span", L, [
						d("span", R, c(t.source.label), 1),
						t.source.mode === "read" ? (y(), e("span", z, "r")) : (y(), e("span", B, "rw")),
						d("span", {
							"data-testid": "status-badge",
							class: n(["status-dot", t.status]),
							title: t.status
						}, null, 10, V)
					]),
					d("button", {
						"data-source-id": t.source.id,
						"data-testid": "reconnect-btn",
						class: "btn btn-sm",
						disabled: t.status === "online",
						onClick: (e) => s(l).reconnect(t.source.id)
					}, " Reconnect ", 8, H),
					d("button", {
						"data-source-id": t.source.id,
						"data-testid": "detach-btn",
						class: "btn btn-sm btn-ghost",
						onClick: (e) => s(l).detachSource(t.source.id)
					}, " Remove ", 8, U)
				], 8, I))), 128))]),
				w.value ? (y(), e("div", W, [a[4] ||= d("p", { class: "pwa-nudge-text" }, "Install SET to keep folder access between sessions.", -1), d("div", G, [x.value ? (y(), e("button", {
					key: 0,
					"data-testid": "pwa-nudge-install",
					class: "btn btn-sm btn-ghost",
					onClick: D
				}, " Install ")) : o("", !0), d("button", {
					"data-testid": "pwa-nudge-dismiss",
					class: "btn btn-sm btn-ghost",
					onClick: T
				}, " Dismiss ")])])) : o("", !0)
			], 64)) : (y(), e("div", N, [...a[3] ||= [d("p", null, " This browser does not support local folder sources. Use Chrome/Edge or install SET as a PWA. ", -1)]]))
		], 512), [[i, _.value]])], 8, j));
	}
}), [["__scopeId", "data-v-553abee1"]]), q = { class: "templates-sidebar" }, J = /* @__PURE__ */ D(/* @__PURE__ */ v({
	__name: "sources-sidebar",
	setup(t) {
		let n = E(null), r = k(), i = A(), o, c;
		g(async () => {
			o = await r.init(), c = await i.init();
		}), p(() => {
			o?.(), c?.();
		});
		function l() {
			n.value?.open();
		}
		return (t, r) => (y(), e("div", q, [
			d("button", {
				"data-testid": "manage-sources-btn",
				class: "btn manage-button",
				onClick: l,
				title: "Manage library sources"
			}, " Manage Sources "),
			w(K, {
				ref_key: "manageDialog",
				ref: n
			}, null, 512),
			w(s(a), {
				sources: s(i).sources,
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
	m(document.getElementById(e), { detail: `could not find root element: ${e}` }), x({
		project: n.project,
		activeDocumentId: n.activeDocumentId,
		commands: n.commands,
		storageSources: n.storageSources,
		pwa: n.pwa
	});
	let r = u(J);
	return r.use(t()), r.mount(`#${e}`), () => {
		_(), r.unmount();
	};
}
//#endregion
export { Y as default };
