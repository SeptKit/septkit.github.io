import { i as M, a, c as B, e as D, b as $, d as q, f as z, g as L, h as P, j as G, k as O, l as R, m as W, n as j, o as F, r as U, p as K, q as X, s as Z, t as J, u as Q, w as V, v as u, x as Y, y } from "./runtime-core.esm-bundler-DWLXL9NN.js";
let h;
const g = typeof window < "u" && window.trustedTypes;
if (g)
  try {
    h = /* @__PURE__ */ g.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const H = h ? (t) => h.createHTML(t) : (t) => t, k = "http://www.w3.org/2000/svg", tt = "http://www.w3.org/1998/Math/MathML", f = typeof document < "u" ? document : null, S = f && /* @__PURE__ */ f.createElement("template"), et = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, i) => {
    const s = e === "svg" ? f.createElementNS(k, t) : e === "mathml" ? f.createElementNS(tt, t) : n ? f.createElement(t, { is: n }) : f.createElement(t);
    return t === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple), s;
  },
  createText: (t) => f.createTextNode(t),
  createComment: (t) => f.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => f.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, n, i, s, o) {
    const r = n ? n.previousSibling : e.lastChild;
    if (s && (s === o || s.nextSibling))
      for (; e.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); )
        ;
    else {
      S.innerHTML = H(
        i === "svg" ? `<svg>${t}</svg>` : i === "mathml" ? `<math>${t}</math>` : t
      );
      const c = S.content;
      if (i === "svg" || i === "mathml") {
        const l = c.firstChild;
        for (; l.firstChild; )
          c.appendChild(l.firstChild);
        c.removeChild(l);
      }
      e.insertBefore(c, n);
    }
    return [
      // first
      r ? r.nextSibling : e.firstChild,
      // last
      n ? n.previousSibling : e.lastChild
    ];
  }
}, nt = Symbol("_vtc");
function it(t, e, n) {
  const i = t[nt];
  i && (e = (e ? [e, ...i] : [...i]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const b = Symbol("_vod"), st = Symbol("_vsh"), ot = Symbol(""), rt = /(^|;)\s*display\s*:/;
function ct(t, e, n) {
  const i = t.style, s = a(n);
  let o = !1;
  if (n && !s) {
    if (e)
      if (a(e))
        for (const r of e.split(";")) {
          const c = r.slice(0, r.indexOf(":")).trim();
          n[c] == null && p(i, c, "");
        }
      else
        for (const r in e)
          n[r] == null && p(i, r, "");
    for (const r in n)
      r === "display" && (o = !0), p(i, r, n[r]);
  } else if (s) {
    if (e !== n) {
      const r = i[ot];
      r && (n += ";" + r), i.cssText = n, o = rt.test(n);
    }
  } else e && t.removeAttribute("style");
  b in t && (t[b] = o ? i.display : "", t[st] && (i.display = "none"));
}
const v = /\s*!important$/;
function p(t, e, n) {
  if (O(n))
    n.forEach((i) => p(t, e, i));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const i = lt(t, e);
    v.test(n) ? t.setProperty(
      R(i),
      n.replace(v, ""),
      "important"
    ) : t[i] = n;
  }
}
const C = ["Webkit", "Moz", "ms"], d = {};
function lt(t, e) {
  const n = d[e];
  if (n)
    return n;
  let i = L(e);
  if (i !== "filter" && i in t)
    return d[e] = i;
  i = W(i);
  for (let s = 0; s < C.length; s++) {
    const o = C[s] + i;
    if (o in t)
      return d[e] = o;
  }
  return e;
}
const A = "http://www.w3.org/1999/xlink";
function _(t, e, n, i, s, o = z(e)) {
  i && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(A, e.slice(6, e.length)) : t.setAttributeNS(A, e, n) : n == null || o && !P(n) ? t.removeAttribute(e) : t.setAttribute(
    e,
    o ? "" : G(n) ? String(n) : n
  );
}
function E(t, e, n, i, s) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? H(n) : n);
    return;
  }
  const o = t.tagName;
  if (e === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const c = o === "OPTION" ? t.getAttribute("value") || "" : t.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(n);
    (c !== l || !("_value" in t)) && (t.value = l), n == null && t.removeAttribute(e), t._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const c = typeof t[e];
    c === "boolean" ? n = P(n) : n == null && c === "string" ? (n = "", r = !0) : c === "number" && (n = 0, r = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  r && t.removeAttribute(s || e);
}
function ft(t, e, n, i) {
  t.addEventListener(e, n, i);
}
function at(t, e, n, i) {
  t.removeEventListener(e, n, i);
}
const x = Symbol("_vei");
function ut(t, e, n, i, s = null) {
  const o = t[x] || (t[x] = {}), r = o[e];
  if (i && r)
    r.value = i;
  else {
    const [c, l] = pt(e);
    if (i) {
      const I = o[e] = ht(
        i,
        s
      );
      ft(t, c, I, l);
    } else r && (at(t, c, r, l), o[e] = void 0);
  }
}
const T = /(?:Once|Passive|Capture)$/;
function pt(t) {
  let e;
  if (T.test(t)) {
    e = {};
    let i;
    for (; i = t.match(T); )
      t = t.slice(0, t.length - i[0].length), e[i[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : R(t.slice(2)), e];
}
let m = 0;
const dt = /* @__PURE__ */ Promise.resolve(), mt = () => m || (dt.then(() => m = 0), m = Date.now());
function ht(t, e) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    j(
      gt(i, n.value),
      e,
      5,
      [i]
    );
  };
  return n.value = t, n.attached = mt(), n;
}
function gt(t, e) {
  if (O(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map(
      (i) => (s) => !s._stopped && i && i(s)
    );
  } else
    return e;
}
const w = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, St = (t, e, n, i, s, o) => {
  const r = s === "svg";
  e === "class" ? it(t, i, r) : e === "style" ? ct(t, n, i) : $(e) ? q(e) || ut(t, e, n, i, o) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : bt(t, e, i, r)) ? (E(t, e, i), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && _(t, e, i, r, o, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && (/[A-Z]/.test(e) || !a(i)) ? E(t, L(e), i, o, e) : (e === "true-value" ? t._trueValue = i : e === "false-value" && (t._falseValue = i), _(t, e, i, r));
};
function bt(t, e, n, i) {
  if (i)
    return !!(e === "innerHTML" || e === "textContent" || e in t && w(e) && M(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const s = t.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return w(e) && a(n) ? !1 : e in t;
}
const vt = /* @__PURE__ */ D({ patchProp: St }, et);
let N;
function Ct() {
  return N || (N = B(vt));
}
const At = (...t) => {
  const e = Ct().createApp(...t), { mount: n } = e;
  return e.mount = (i) => {
    const s = Et(i);
    if (!s) return;
    const o = e._component;
    !M(o) && !o.render && !o.template && (o.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const r = n(s, !1, _t(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), r;
  }, e;
};
function _t(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function Et(t) {
  return a(t) ? document.querySelector(t) : t;
}
const xt = {
  class: "min-h-screen flex flex-col items-center justify-center",
  style: {
    background: "repeating-linear-gradient(45deg, #ffe066, #ffe066 30px, #fff 30px, #fff 60px)"
  }
}, Tt = { class: "text-2xl text-center font-semibold my-4" }, wt = /* @__PURE__ */ F({
  __name: "app",
  props: {
    api: {}
  },
  setup(t) {
    const e = t;
    let n = U(""), i = () => {
    };
    return K(() => {
      i = e.api.activeFileName.subscribe((s, o) => {
        n.value = s;
      });
    }), X(() => {
      i();
    }), (s, o) => {
      const r = Z("Layout");
      return Q(), J(r, null, {
        default: V(() => [
          u("div", xt, [
            o[0] || (o[0] = u("h1", { class: "text-5xl font-bold text-center my-8 uppercase tracking-wider" }, "Structure", -1)),
            o[1] || (o[1] = u("h2", { class: "text-2xl text-center font-semibold my-4" }, "Template for SET Extensions", -1)),
            u("h2", Tt, "file: " + Y(y(n)), 1)
          ])
        ]),
        _: 1
      });
    };
  }
}), Nt = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [i, s] of e)
    n[i] = s;
  return n;
}, Mt = /* @__PURE__ */ Nt(wt, [["__scopeId", "data-v-e3091a2d"]]);
function Pt(t, e) {
  if (!document.getElementById(t)) {
    console.error({ msg: "could not found root element", rootId: t });
    return;
  }
  At(Mt, { api: e }).mount(`#${t}`);
}
export {
  Pt as default
};
