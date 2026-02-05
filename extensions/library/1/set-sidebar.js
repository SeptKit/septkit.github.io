(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("h2[data-v-27931d7a]{padding:1rem;font-size:2rem}")),document.head.appendChild(e)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ys(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const B = {}, ze = [], ye = () => {
}, Cr = () => !1, Ut = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), vs = (e) => e.startsWith("onUpdate:"), se = Object.assign, Ss = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Er = Object.prototype.hasOwnProperty, H = (e, t) => Er.call(e, t), P = Array.isArray, Xe = (e) => Bt(e) === "[object Map]", yn = (e) => Bt(e) === "[object Set]", R = (e) => typeof e == "function", J = (e) => typeof e == "string", je = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", vn = (e) => (q(e) || R(e)) && R(e.then) && R(e.catch), Sn = Object.prototype.toString, Bt = (e) => Sn.call(e), Or = (e) => Bt(e).slice(8, -1), wn = (e) => Bt(e) === "[object Object]", ws = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ft = /* @__PURE__ */ ys(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Kt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Ar = /-(\w)/g, He = Kt(
  (e) => e.replace(Ar, (t, s) => s ? s.toUpperCase() : "")
), Pr = /\B([A-Z])/g, Ge = Kt(
  (e) => e.replace(Pr, "-$1").toLowerCase()
), Tn = Kt((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xt = Kt(
  (e) => e ? `on${Tn(e)}` : ""
), De = (e, t) => !Object.is(e, t), Zt = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, fs = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Rr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Gs;
const Vt = () => Gs || (Gs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ts(e) {
  if (P(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = J(n) ? Dr(n) : Ts(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (J(e) || q(e))
    return e;
}
const Ir = /;(?![^(]*\))/g, Mr = /:([^]+)/, Fr = /\/\*[^]*?\*\//g;
function Dr(e) {
  const t = {};
  return e.replace(Fr, "").split(Ir).forEach((s) => {
    if (s) {
      const n = s.split(Mr);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Cs(e) {
  let t = "";
  if (J(e))
    t = e;
  else if (P(e))
    for (let s = 0; s < e.length; s++) {
      const n = Cs(e[s]);
      n && (t += n + " ");
    }
  else if (q(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Hr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", jr = /* @__PURE__ */ ys(Hr);
function Cn(e) {
  return !!e || e === "";
}
const En = (e) => !!(e && e.__v_isRef === !0), On = (e) => J(e) ? e : e == null ? "" : P(e) || q(e) && (e.toString === Sn || !R(e.toString)) ? En(e) ? On(e.value) : JSON.stringify(e, An, 2) : String(e), An = (e, t) => En(t) ? An(e, t.value) : Xe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[Qt(n, i) + " =>"] = r, s),
    {}
  )
} : yn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Qt(s))
} : je(t) ? Qt(t) : q(t) && !P(t) && !wn(t) ? String(t) : t, Qt = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    je(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ie;
class Nr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ie, !t && ie && (this.index = (ie.scopes || (ie.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = ie;
      try {
        return ie = this, t();
      } finally {
        ie = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ie, ie = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ie = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function $r() {
  return ie;
}
let U;
const kt = /* @__PURE__ */ new WeakSet();
class Pn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ie && ie.active && ie.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, kt.has(this) && (kt.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || In(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Js(this), Mn(this);
    const t = U, s = ce;
    U = this, ce = !0;
    try {
      return this.fn();
    } finally {
      Fn(this), U = t, ce = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        As(t);
      this.deps = this.depsTail = void 0, Js(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? kt.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    cs(this) && this.run();
  }
  get dirty() {
    return cs(this);
  }
}
let Rn = 0, ct, ut;
function In(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ut, ut = e;
    return;
  }
  e.next = ct, ct = e;
}
function Es() {
  Rn++;
}
function Os() {
  if (--Rn > 0)
    return;
  if (ut) {
    let t = ut;
    for (ut = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; ct; ) {
    let t = ct;
    for (ct = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function Mn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Fn(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), As(n), Lr(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function cs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Dn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Dn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === _t) || (e.globalVersion = _t, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !cs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = U, n = ce;
  U = e, ce = !0;
  try {
    Mn(e);
    const r = e.fn(e._value);
    (t.version === 0 || De(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    U = s, ce = n, Fn(e), e.flags &= -3;
  }
}
function As(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      As(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Lr(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let ce = !0;
const Hn = [];
function Ee() {
  Hn.push(ce), ce = !1;
}
function Oe() {
  const e = Hn.pop();
  ce = e === void 0 ? !0 : e;
}
function Js(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = U;
    U = void 0;
    try {
      t();
    } finally {
      U = s;
    }
  }
}
let _t = 0;
class Ur {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ps {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!U || !ce || U === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== U)
      s = this.activeLink = new Ur(U, this), U.deps ? (s.prevDep = U.depsTail, U.depsTail.nextDep = s, U.depsTail = s) : U.deps = U.depsTail = s, jn(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = U.depsTail, s.nextDep = void 0, U.depsTail.nextDep = s, U.depsTail = s, U.deps === s && (U.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, _t++, this.notify(t);
  }
  notify(t) {
    Es();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Os();
    }
  }
}
function jn(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        jn(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const us = /* @__PURE__ */ new WeakMap(), Ve = Symbol(
  ""
), as = Symbol(
  ""
), mt = Symbol(
  ""
);
function z(e, t, s) {
  if (ce && U) {
    let n = us.get(e);
    n || us.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new Ps()), r.map = n, r.key = s), r.track();
  }
}
function Ce(e, t, s, n, r, i) {
  const o = us.get(e);
  if (!o) {
    _t++;
    return;
  }
  const f = (u) => {
    u && u.trigger();
  };
  if (Es(), t === "clear")
    o.forEach(f);
  else {
    const u = P(e), h = u && ws(s);
    if (u && s === "length") {
      const a = Number(n);
      o.forEach((p, w) => {
        (w === "length" || w === mt || !je(w) && w >= a) && f(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && f(o.get(s)), h && f(o.get(mt)), t) {
        case "add":
          u ? h && f(o.get("length")) : (f(o.get(Ve)), Xe(e) && f(o.get(as)));
          break;
        case "delete":
          u || (f(o.get(Ve)), Xe(e) && f(o.get(as)));
          break;
        case "set":
          Xe(e) && f(o.get(Ve));
          break;
      }
  }
  Os();
}
function Je(e) {
  const t = D(e);
  return t === e ? t : (z(t, "iterate", mt), ue(e) ? t : t.map(k));
}
function Rs(e) {
  return z(e = D(e), "iterate", mt), e;
}
const Br = {
  __proto__: null,
  [Symbol.iterator]() {
    return es(this, Symbol.iterator, k);
  },
  concat(...e) {
    return Je(this).concat(
      ...e.map((t) => P(t) ? Je(t) : t)
    );
  },
  entries() {
    return es(this, "entries", (e) => (e[1] = k(e[1]), e));
  },
  every(e, t) {
    return Se(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Se(this, "filter", e, t, (s) => s.map(k), arguments);
  },
  find(e, t) {
    return Se(this, "find", e, t, k, arguments);
  },
  findIndex(e, t) {
    return Se(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Se(this, "findLast", e, t, k, arguments);
  },
  findLastIndex(e, t) {
    return Se(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Se(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ts(this, "includes", e);
  },
  indexOf(...e) {
    return ts(this, "indexOf", e);
  },
  join(e) {
    return Je(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return ts(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Se(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return it(this, "pop");
  },
  push(...e) {
    return it(this, "push", e);
  },
  reduce(e, ...t) {
    return Ys(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ys(this, "reduceRight", e, t);
  },
  shift() {
    return it(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Se(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return it(this, "splice", e);
  },
  toReversed() {
    return Je(this).toReversed();
  },
  toSorted(e) {
    return Je(this).toSorted(e);
  },
  toSpliced(...e) {
    return Je(this).toSpliced(...e);
  },
  unshift(...e) {
    return it(this, "unshift", e);
  },
  values() {
    return es(this, "values", k);
  }
};
function es(e, t, s) {
  const n = Rs(e), r = n[t]();
  return n !== e && !ue(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = s(i.value)), i;
  }), r;
}
const Kr = Array.prototype;
function Se(e, t, s, n, r, i) {
  const o = Rs(e), f = o !== e && !ue(e), u = o[t];
  if (u !== Kr[t]) {
    const p = u.apply(e, i);
    return f ? k(p) : p;
  }
  let h = s;
  o !== e && (f ? h = function(p, w) {
    return s.call(this, k(p), w, e);
  } : s.length > 2 && (h = function(p, w) {
    return s.call(this, p, w, e);
  }));
  const a = u.call(o, h, n);
  return f && r ? r(a) : a;
}
function Ys(e, t, s, n) {
  const r = Rs(e);
  let i = s;
  return r !== e && (ue(e) ? s.length > 3 && (i = function(o, f, u) {
    return s.call(this, o, f, u, e);
  }) : i = function(o, f, u) {
    return s.call(this, o, k(f), u, e);
  }), r[t](i, ...n);
}
function ts(e, t, s) {
  const n = D(e);
  z(n, "iterate", mt);
  const r = n[t](...s);
  return (r === -1 || r === !1) && Ds(s[0]) ? (s[0] = D(s[0]), n[t](...s)) : r;
}
function it(e, t, s = []) {
  Ee(), Es();
  const n = D(e)[t].apply(e, s);
  return Os(), Oe(), n;
}
const Vr = /* @__PURE__ */ ys("__proto__,__v_isRef,__isVue"), Nn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(je)
);
function Wr(e) {
  je(e) || (e = String(e));
  const t = D(this);
  return z(t, "has", e), t.hasOwnProperty(e);
}
class $n {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (s === "__v_isReactive")
      return !r;
    if (s === "__v_isReadonly")
      return r;
    if (s === "__v_isShallow")
      return i;
    if (s === "__v_raw")
      return n === (r ? i ? ei : Kn : i ? Bn : Un).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = P(t);
    if (!r) {
      let u;
      if (o && (u = Br[s]))
        return u;
      if (s === "hasOwnProperty")
        return Wr;
    }
    const f = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      X(t) ? t : n
    );
    return (je(s) ? Nn.has(s) : Vr(s)) || (r || z(t, "get", s), i) ? f : X(f) ? o && ws(s) ? f : f.value : q(f) ? r ? Vn(f) : Ms(f) : f;
  }
}
class Ln extends $n {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    if (!this._isShallow) {
      const u = qe(i);
      if (!ue(n) && !qe(n) && (i = D(i), n = D(n)), !P(t) && X(i) && !X(n))
        return u ? !1 : (i.value = n, !0);
    }
    const o = P(t) && ws(s) ? Number(s) < t.length : H(t, s), f = Reflect.set(
      t,
      s,
      n,
      X(t) ? t : r
    );
    return t === D(r) && (o ? De(n, i) && Ce(t, "set", s, n) : Ce(t, "add", s, n)), f;
  }
  deleteProperty(t, s) {
    const n = H(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Ce(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!je(s) || !Nn.has(s)) && z(t, "has", s), n;
  }
  ownKeys(t) {
    return z(
      t,
      "iterate",
      P(t) ? "length" : Ve
    ), Reflect.ownKeys(t);
  }
}
class qr extends $n {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const Gr = /* @__PURE__ */ new Ln(), Jr = /* @__PURE__ */ new qr(), Yr = /* @__PURE__ */ new Ln(!0);
const ds = (e) => e, At = (e) => Reflect.getPrototypeOf(e);
function zr(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = D(r), o = Xe(i), f = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, h = r[e](...n), a = s ? ds : t ? hs : k;
    return !t && z(
      i,
      "iterate",
      u ? as : Ve
    ), {
      // iterator protocol
      next() {
        const { value: p, done: w } = h.next();
        return w ? { value: p, done: w } : {
          value: f ? [a(p[0]), a(p[1])] : a(p),
          done: w
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Pt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xr(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = D(i), f = D(r);
      e || (De(r, f) && z(o, "get", r), z(o, "get", f));
      const { has: u } = At(o), h = t ? ds : e ? hs : k;
      if (u.call(o, r))
        return h(i.get(r));
      if (u.call(o, f))
        return h(i.get(f));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && z(D(r), "iterate", Ve), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw, o = D(i), f = D(r);
      return e || (De(r, f) && z(o, "has", r), z(o, "has", f)), r === f ? i.has(r) : i.has(r) || i.has(f);
    },
    forEach(r, i) {
      const o = this, f = o.__v_raw, u = D(f), h = t ? ds : e ? hs : k;
      return !e && z(u, "iterate", Ve), f.forEach((a, p) => r.call(i, h(a), h(p), o));
    }
  };
  return se(
    s,
    e ? {
      add: Pt("add"),
      set: Pt("set"),
      delete: Pt("delete"),
      clear: Pt("clear")
    } : {
      add(r) {
        !t && !ue(r) && !qe(r) && (r = D(r));
        const i = D(this);
        return At(i).has.call(i, r) || (i.add(r), Ce(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !ue(i) && !qe(i) && (i = D(i));
        const o = D(this), { has: f, get: u } = At(o);
        let h = f.call(o, r);
        h || (r = D(r), h = f.call(o, r));
        const a = u.call(o, r);
        return o.set(r, i), h ? De(i, a) && Ce(o, "set", r, i) : Ce(o, "add", r, i), this;
      },
      delete(r) {
        const i = D(this), { has: o, get: f } = At(i);
        let u = o.call(i, r);
        u || (r = D(r), u = o.call(i, r)), f && f.call(i, r);
        const h = i.delete(r);
        return u && Ce(i, "delete", r, void 0), h;
      },
      clear() {
        const r = D(this), i = r.size !== 0, o = r.clear();
        return i && Ce(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    s[r] = zr(r, e, t);
  }), s;
}
function Is(e, t) {
  const s = Xr(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    H(s, r) && r in n ? s : n,
    r,
    i
  );
}
const Zr = {
  get: /* @__PURE__ */ Is(!1, !1)
}, Qr = {
  get: /* @__PURE__ */ Is(!1, !0)
}, kr = {
  get: /* @__PURE__ */ Is(!0, !1)
};
const Un = /* @__PURE__ */ new WeakMap(), Bn = /* @__PURE__ */ new WeakMap(), Kn = /* @__PURE__ */ new WeakMap(), ei = /* @__PURE__ */ new WeakMap();
function ti(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function si(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ti(Or(e));
}
function Ms(e) {
  return qe(e) ? e : Fs(
    e,
    !1,
    Gr,
    Zr,
    Un
  );
}
function ni(e) {
  return Fs(
    e,
    !1,
    Yr,
    Qr,
    Bn
  );
}
function Vn(e) {
  return Fs(
    e,
    !0,
    Jr,
    kr,
    Kn
  );
}
function Fs(e, t, s, n, r) {
  if (!q(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = si(e);
  if (i === 0)
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const f = new Proxy(
    e,
    i === 2 ? n : s
  );
  return r.set(e, f), f;
}
function at(e) {
  return qe(e) ? at(e.__v_raw) : !!(e && e.__v_isReactive);
}
function qe(e) {
  return !!(e && e.__v_isReadonly);
}
function ue(e) {
  return !!(e && e.__v_isShallow);
}
function Ds(e) {
  return e ? !!e.__v_raw : !1;
}
function D(e) {
  const t = e && e.__v_raw;
  return t ? D(t) : e;
}
function ri(e) {
  return !H(e, "__v_skip") && Object.isExtensible(e) && fs(e, "__v_skip", !0), e;
}
const k = (e) => q(e) ? Ms(e) : e, hs = (e) => q(e) ? Vn(e) : e;
function X(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ii(e) {
  return oi(e, !1);
}
function oi(e, t) {
  return X(e) ? e : new li(e, t);
}
class li {
  constructor(t, s) {
    this.dep = new Ps(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : D(t), this._value = s ? t : k(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || ue(t) || qe(t);
    t = n ? t : D(t), De(t, s) && (this._rawValue = t, this._value = n ? t : k(t), this.dep.trigger());
  }
}
function fi(e) {
  return X(e) ? e.value : e;
}
const ci = {
  get: (e, t, s) => t === "__v_raw" ? e : fi(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return X(r) && !X(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Wn(e) {
  return at(e) ? e : new Proxy(e, ci);
}
class ui {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Ps(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = _t - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    U !== this)
      return In(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Dn(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function ai(e, t, s = !1) {
  let n, r;
  return R(e) ? n = e : (n = e.get, r = e.set), new ui(n, r, s);
}
const Rt = {}, Dt = /* @__PURE__ */ new WeakMap();
let Ke;
function di(e, t = !1, s = Ke) {
  if (s) {
    let n = Dt.get(s);
    n || Dt.set(s, n = []), n.push(e);
  }
}
function hi(e, t, s = B) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: f, call: u } = s, h = (O) => r ? O : ue(O) || r === !1 || r === 0 ? Fe(O, 1) : Fe(O);
  let a, p, w, T, F = !1, M = !1;
  if (X(e) ? (p = () => e.value, F = ue(e)) : at(e) ? (p = () => h(e), F = !0) : P(e) ? (M = !0, F = e.some((O) => at(O) || ue(O)), p = () => e.map((O) => {
    if (X(O))
      return O.value;
    if (at(O))
      return h(O);
    if (R(O))
      return u ? u(O, 2) : O();
  })) : R(e) ? t ? p = u ? () => u(e, 2) : e : p = () => {
    if (w) {
      Ee();
      try {
        w();
      } finally {
        Oe();
      }
    }
    const O = Ke;
    Ke = a;
    try {
      return u ? u(e, 3, [T]) : e(T);
    } finally {
      Ke = O;
    }
  } : p = ye, t && r) {
    const O = p, G = r === !0 ? 1 / 0 : r;
    p = () => Fe(O(), G);
  }
  const Y = $r(), N = () => {
    a.stop(), Y && Y.active && Ss(Y.effects, a);
  };
  if (i && t) {
    const O = t;
    t = (...G) => {
      O(...G), N();
    };
  }
  let V = M ? new Array(e.length).fill(Rt) : Rt;
  const W = (O) => {
    if (!(!(a.flags & 1) || !a.dirty && !O))
      if (t) {
        const G = a.run();
        if (r || F || (M ? G.some((Pe, ae) => De(Pe, V[ae])) : De(G, V))) {
          w && w();
          const Pe = Ke;
          Ke = a;
          try {
            const ae = [
              G,
              // pass undefined as the old value when it's changed for the first time
              V === Rt ? void 0 : M && V[0] === Rt ? [] : V,
              T
            ];
            V = G, u ? u(t, 3, ae) : (
              // @ts-expect-error
              t(...ae)
            );
          } finally {
            Ke = Pe;
          }
        }
      } else
        a.run();
  };
  return f && f(W), a = new Pn(p), a.scheduler = o ? () => o(W, !1) : W, T = (O) => di(O, !1, a), w = a.onStop = () => {
    const O = Dt.get(a);
    if (O) {
      if (u)
        u(O, 4);
      else
        for (const G of O) G();
      Dt.delete(a);
    }
  }, t ? n ? W(!0) : V = a.run() : o ? o(W.bind(null, !0), !0) : a.run(), N.pause = a.pause.bind(a), N.resume = a.resume.bind(a), N.stop = N, N;
}
function Fe(e, t = 1 / 0, s) {
  if (t <= 0 || !q(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Set(), s.has(e)))
    return e;
  if (s.add(e), t--, X(e))
    Fe(e.value, t, s);
  else if (P(e))
    for (let n = 0; n < e.length; n++)
      Fe(e[n], t, s);
  else if (yn(e) || Xe(e))
    e.forEach((n) => {
      Fe(n, t, s);
    });
  else if (wn(e)) {
    for (const n in e)
      Fe(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Fe(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function vt(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    Wt(r, t, s);
  }
}
function ve(e, t, s, n) {
  if (R(e)) {
    const r = vt(e, t, s, n);
    return r && vn(r) && r.catch((i) => {
      Wt(i, t, s);
    }), r;
  }
  if (P(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(ve(e[i], t, s, n));
    return r;
  }
}
function Wt(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || B;
  if (t) {
    let f = t.parent;
    const u = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; f; ) {
      const a = f.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, u, h) === !1)
            return;
      }
      f = f.parent;
    }
    if (i) {
      Ee(), vt(i, null, 10, [
        e,
        u,
        h
      ]), Oe();
      return;
    }
  }
  pi(e, s, r, n, o);
}
function pi(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ee = [];
let me = -1;
const Ze = [];
let Ie = null, Ye = 0;
const qn = /* @__PURE__ */ Promise.resolve();
let Ht = null;
function gi(e) {
  const t = Ht || qn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function _i(e) {
  let t = me + 1, s = ee.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = ee[n], i = bt(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Hs(e) {
  if (!(e.flags & 1)) {
    const t = bt(e), s = ee[ee.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= bt(s) ? ee.push(e) : ee.splice(_i(t), 0, e), e.flags |= 1, Gn();
  }
}
function Gn() {
  Ht || (Ht = qn.then(Yn));
}
function mi(e) {
  P(e) ? Ze.push(...e) : Ie && e.id === -1 ? Ie.splice(Ye + 1, 0, e) : e.flags & 1 || (Ze.push(e), e.flags |= 1), Gn();
}
function zs(e, t, s = me + 1) {
  for (; s < ee.length; s++) {
    const n = ee[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ee.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Jn(e) {
  if (Ze.length) {
    const t = [...new Set(Ze)].sort(
      (s, n) => bt(s) - bt(n)
    );
    if (Ze.length = 0, Ie) {
      Ie.push(...t);
      return;
    }
    for (Ie = t, Ye = 0; Ye < Ie.length; Ye++) {
      const s = Ie[Ye];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Ie = null, Ye = 0;
  }
}
const bt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Yn(e) {
  try {
    for (me = 0; me < ee.length; me++) {
      const t = ee[me];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), vt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; me < ee.length; me++) {
      const t = ee[me];
      t && (t.flags &= -2);
    }
    me = -1, ee.length = 0, Jn(), Ht = null, (ee.length || Ze.length) && Yn();
  }
}
let xe = null, zn = null;
function jt(e) {
  const t = xe;
  return xe = e, zn = e && e.type.__scopeId || null, t;
}
function bi(e, t = xe, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && rn(-1);
    const i = jt(t);
    let o;
    try {
      o = e(...r);
    } finally {
      jt(i), n._d && rn(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ue(e, t, s, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const f = r[o];
    i && (f.oldValue = i[o].value);
    let u = f.dir[n];
    u && (Ee(), ve(u, s, 8, [
      e.el,
      f,
      e,
      t
    ]), Oe());
  }
}
const xi = Symbol("_vte"), yi = (e) => e.__isTeleport;
function js(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, js(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Xn(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function dt(e, t, s, n, r = !1) {
  if (P(e)) {
    e.forEach(
      (F, M) => dt(
        F,
        t && (P(t) ? t[M] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (ht(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && dt(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? Us(n.component) : n.el, o = r ? null : i, { i: f, r: u } = e, h = t && t.r, a = f.refs === B ? f.refs = {} : f.refs, p = f.setupState, w = D(p), T = p === B ? () => !1 : (F) => H(w, F);
  if (h != null && h !== u && (J(h) ? (a[h] = null, T(h) && (p[h] = null)) : X(h) && (h.value = null)), R(u))
    vt(u, f, 12, [o, a]);
  else {
    const F = J(u), M = X(u);
    if (F || M) {
      const Y = () => {
        if (e.f) {
          const N = F ? T(u) ? p[u] : a[u] : u.value;
          r ? P(N) && Ss(N, i) : P(N) ? N.includes(i) || N.push(i) : F ? (a[u] = [i], T(u) && (p[u] = a[u])) : (u.value = [i], e.k && (a[e.k] = u.value));
        } else F ? (a[u] = o, T(u) && (p[u] = o)) : M && (u.value = o, e.k && (a[e.k] = o));
      };
      o ? (Y.id = -1, le(Y, s)) : Y();
    }
  }
}
Vt().requestIdleCallback;
Vt().cancelIdleCallback;
const ht = (e) => !!e.type.__asyncLoader, Zn = (e) => e.type.__isKeepAlive;
function vi(e, t) {
  Qn(e, "a", t);
}
function Si(e, t) {
  Qn(e, "da", t);
}
function Qn(e, t, s = te) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (qt(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      Zn(r.parent.vnode) && wi(n, t, s, r), r = r.parent;
  }
}
function wi(e, t, s, n) {
  const r = qt(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  er(() => {
    Ss(n[t], r);
  }, s);
}
function qt(e, t, s = te, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ee();
      const f = St(s), u = ve(t, s, e, o);
      return f(), Oe(), u;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const Ae = (e) => (t, s = te) => {
  (!yt || e === "sp") && qt(e, (...n) => t(...n), s);
}, Ti = Ae("bm"), kn = Ae("m"), Ci = Ae(
  "bu"
), Ei = Ae("u"), Oi = Ae(
  "bum"
), er = Ae("um"), Ai = Ae(
  "sp"
), Pi = Ae("rtg"), Ri = Ae("rtc");
function Ii(e, t = te) {
  qt("ec", e, t);
}
const Mi = Symbol.for("v-ndc"), ps = (e) => e ? yr(e) ? Us(e) : ps(e.parent) : null, pt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ se(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ps(e.parent),
    $root: (e) => ps(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => sr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Hs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = gi.bind(e.proxy)),
    $watch: (e) => eo.bind(e)
  })
), ss = (e, t) => e !== B && !e.__isScriptSetup && H(e, t), Fi = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: f, appContext: u } = e;
    let h;
    if (t[0] !== "$") {
      const T = o[t];
      if (T !== void 0)
        switch (T) {
          case 1:
            return n[t];
          case 2:
            return r[t];
          case 4:
            return s[t];
          case 3:
            return i[t];
        }
      else {
        if (ss(n, t))
          return o[t] = 1, n[t];
        if (r !== B && H(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && H(h, t)
        )
          return o[t] = 3, i[t];
        if (s !== B && H(s, t))
          return o[t] = 4, s[t];
        gs && (o[t] = 0);
      }
    }
    const a = pt[t];
    let p, w;
    if (a)
      return t === "$attrs" && z(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (p = f.__cssModules) && (p = p[t])
    )
      return p;
    if (s !== B && H(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      w = u.config.globalProperties, H(w, t)
    )
      return w[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: i } = e;
    return ss(r, t) ? (r[t] = s, !0) : n !== B && H(n, t) ? (n[t] = s, !0) : H(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, propsOptions: i }
  }, o) {
    let f;
    return !!s[o] || e !== B && H(e, o) || ss(t, o) || (f = i[0]) && H(f, o) || H(n, o) || H(pt, o) || H(r.config.globalProperties, o);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : H(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Xs(e) {
  return P(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let gs = !0;
function Di(e) {
  const t = sr(e), s = e.proxy, n = e.ctx;
  gs = !1, t.beforeCreate && Zs(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: f,
    provide: u,
    inject: h,
    // lifecycle
    created: a,
    beforeMount: p,
    mounted: w,
    beforeUpdate: T,
    updated: F,
    activated: M,
    deactivated: Y,
    beforeDestroy: N,
    beforeUnmount: V,
    destroyed: W,
    unmounted: O,
    render: G,
    renderTracked: Pe,
    renderTriggered: ae,
    errorCaptured: Re,
    serverPrefetch: wt,
    // public API
    expose: Ne,
    inheritAttrs: tt,
    // assets
    components: Tt,
    directives: Ct,
    filters: Yt
  } = t;
  if (h && Hi(h, n, null), o)
    for (const K in o) {
      const $ = o[K];
      R($) && (n[K] = $.bind(s));
    }
  if (r) {
    const K = r.call(s, s);
    q(K) && (e.data = Ms(K));
  }
  if (gs = !0, i)
    for (const K in i) {
      const $ = i[K], $e = R($) ? $.bind(s, s) : R($.get) ? $.get.bind(s, s) : ye, Et = !R($) && R($.set) ? $.set.bind(s) : ye, Le = Co({
        get: $e,
        set: Et
      });
      Object.defineProperty(n, K, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (de) => Le.value = de
      });
    }
  if (f)
    for (const K in f)
      tr(f[K], n, s, K);
  if (u) {
    const K = R(u) ? u.call(s) : u;
    Reflect.ownKeys(K).forEach(($) => {
      Bi($, K[$]);
    });
  }
  a && Zs(a, e, "c");
  function Z(K, $) {
    P($) ? $.forEach(($e) => K($e.bind(s))) : $ && K($.bind(s));
  }
  if (Z(Ti, p), Z(kn, w), Z(Ci, T), Z(Ei, F), Z(vi, M), Z(Si, Y), Z(Ii, Re), Z(Ri, Pe), Z(Pi, ae), Z(Oi, V), Z(er, O), Z(Ai, wt), P(Ne))
    if (Ne.length) {
      const K = e.exposed || (e.exposed = {});
      Ne.forEach(($) => {
        Object.defineProperty(K, $, {
          get: () => s[$],
          set: ($e) => s[$] = $e
        });
      });
    } else e.exposed || (e.exposed = {});
  G && e.render === ye && (e.render = G), tt != null && (e.inheritAttrs = tt), Tt && (e.components = Tt), Ct && (e.directives = Ct), wt && Xn(e);
}
function Hi(e, t, s = ye) {
  P(e) && (e = _s(e));
  for (const n in e) {
    const r = e[n];
    let i;
    q(r) ? "default" in r ? i = It(
      r.from || n,
      r.default,
      !0
    ) : i = It(r.from || n) : i = It(r), X(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function Zs(e, t, s) {
  ve(
    P(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function tr(e, t, s, n) {
  let r = n.includes(".") ? gr(s, n) : () => s[n];
  if (J(e)) {
    const i = t[e];
    R(i) && rs(r, i);
  } else if (R(e))
    rs(r, e.bind(s));
  else if (q(e))
    if (P(e))
      e.forEach((i) => tr(i, t, s, n));
    else {
      const i = R(e.handler) ? e.handler.bind(s) : t[e.handler];
      R(i) && rs(r, i, e);
    }
}
function sr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, f = i.get(t);
  let u;
  return f ? u = f : !r.length && !s && !n ? u = t : (u = {}, r.length && r.forEach(
    (h) => Nt(u, h, o, !0)
  ), Nt(u, t, o)), q(t) && i.set(t, u), u;
}
function Nt(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && Nt(e, i, s, !0), r && r.forEach(
    (o) => Nt(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const f = ji[o] || s && s[o];
      e[o] = f ? f(e[o], t[o]) : t[o];
    }
  return e;
}
const ji = {
  data: Qs,
  props: ks,
  emits: ks,
  // objects
  methods: lt,
  computed: lt,
  // lifecycle
  beforeCreate: Q,
  created: Q,
  beforeMount: Q,
  mounted: Q,
  beforeUpdate: Q,
  updated: Q,
  beforeDestroy: Q,
  beforeUnmount: Q,
  destroyed: Q,
  unmounted: Q,
  activated: Q,
  deactivated: Q,
  errorCaptured: Q,
  serverPrefetch: Q,
  // assets
  components: lt,
  directives: lt,
  // watch
  watch: $i,
  // provide / inject
  provide: Qs,
  inject: Ni
};
function Qs(e, t) {
  return t ? e ? function() {
    return se(
      R(e) ? e.call(this, this) : e,
      R(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ni(e, t) {
  return lt(_s(e), _s(t));
}
function _s(e) {
  if (P(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function Q(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function lt(e, t) {
  return e ? se(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ks(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : se(
    /* @__PURE__ */ Object.create(null),
    Xs(e),
    Xs(t ?? {})
  ) : t;
}
function $i(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = se(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Q(e[n], t[n]);
  return s;
}
function nr() {
  return {
    app: null,
    config: {
      isNativeTag: Cr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Li = 0;
function Ui(e, t) {
  return function(n, r = null) {
    R(n) || (n = se({}, n)), r != null && !q(r) && (r = null);
    const i = nr(), o = /* @__PURE__ */ new WeakSet(), f = [];
    let u = !1;
    const h = i.app = {
      _uid: Li++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Eo,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...p) {
        return o.has(a) || (a && R(a.install) ? (o.add(a), a.install(h, ...p)) : R(a) && (o.add(a), a(h, ...p))), h;
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), h;
      },
      component(a, p) {
        return p ? (i.components[a] = p, h) : i.components[a];
      },
      directive(a, p) {
        return p ? (i.directives[a] = p, h) : i.directives[a];
      },
      mount(a, p, w) {
        if (!u) {
          const T = h._ceVNode || We(n, r);
          return T.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(T, a, w), u = !0, h._container = a, a.__vue_app__ = h, Us(T.component);
        }
      },
      onUnmount(a) {
        f.push(a);
      },
      unmount() {
        u && (ve(
          f,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(a, p) {
        return i.provides[a] = p, h;
      },
      runWithContext(a) {
        const p = Qe;
        Qe = h;
        try {
          return a();
        } finally {
          Qe = p;
        }
      }
    };
    return h;
  };
}
let Qe = null;
function Bi(e, t) {
  if (te) {
    let s = te.provides;
    const n = te.parent && te.parent.provides;
    n === s && (s = te.provides = Object.create(n)), s[e] = t;
  }
}
function It(e, t, s = !1) {
  const n = te || xe;
  if (n || Qe) {
    let r = Qe ? Qe._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && R(t) ? t.call(n && n.proxy) : t;
  }
}
const rr = {}, ir = () => Object.create(rr), or = (e) => Object.getPrototypeOf(e) === rr;
function Ki(e, t, s, n = !1) {
  const r = {}, i = ir();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), lr(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? e.props = n ? r : ni(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Vi(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, f = D(r), [u] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let w = a[p];
        if (Gt(e.emitsOptions, w))
          continue;
        const T = t[w];
        if (u)
          if (H(i, w))
            T !== i[w] && (i[w] = T, h = !0);
          else {
            const F = He(w);
            r[F] = ms(
              u,
              f,
              F,
              T,
              e,
              !1
            );
          }
        else
          T !== i[w] && (i[w] = T, h = !0);
      }
    }
  } else {
    lr(e, t, r, i) && (h = !0);
    let a;
    for (const p in f)
      (!t || // for camelCase
      !H(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Ge(p)) === p || !H(t, a))) && (u ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[a] !== void 0) && (r[p] = ms(
        u,
        f,
        p,
        void 0,
        e,
        !0
      )) : delete r[p]);
    if (i !== f)
      for (const p in i)
        (!t || !H(t, p)) && (delete i[p], h = !0);
  }
  h && Ce(e.attrs, "set", "");
}
function lr(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1, f;
  if (t)
    for (let u in t) {
      if (ft(u))
        continue;
      const h = t[u];
      let a;
      r && H(r, a = He(u)) ? !i || !i.includes(a) ? s[a] = h : (f || (f = {}))[a] = h : Gt(e.emitsOptions, u) || (!(u in n) || h !== n[u]) && (n[u] = h, o = !0);
    }
  if (i) {
    const u = D(s), h = f || B;
    for (let a = 0; a < i.length; a++) {
      const p = i[a];
      s[p] = ms(
        r,
        u,
        p,
        h[p],
        e,
        !H(h, p)
      );
    }
  }
  return o;
}
function ms(e, t, s, n, r, i) {
  const o = e[s];
  if (o != null) {
    const f = H(o, "default");
    if (f && n === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && R(u)) {
        const { propsDefaults: h } = r;
        if (s in h)
          n = h[s];
        else {
          const a = St(r);
          n = h[s] = u.call(
            null,
            t
          ), a();
        }
      } else
        n = u;
      r.ce && r.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !f ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Ge(s)) && (n = !0));
  }
  return n;
}
const Wi = /* @__PURE__ */ new WeakMap();
function fr(e, t, s = !1) {
  const n = s ? Wi : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, f = [];
  let u = !1;
  if (!R(e)) {
    const a = (p) => {
      u = !0;
      const [w, T] = fr(p, t, !0);
      se(o, w), T && f.push(...T);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !u)
    return q(e) && n.set(e, ze), ze;
  if (P(i))
    for (let a = 0; a < i.length; a++) {
      const p = He(i[a]);
      en(p) && (o[p] = B);
    }
  else if (i)
    for (const a in i) {
      const p = He(a);
      if (en(p)) {
        const w = i[a], T = o[p] = P(w) || R(w) ? { type: w } : se({}, w), F = T.type;
        let M = !1, Y = !0;
        if (P(F))
          for (let N = 0; N < F.length; ++N) {
            const V = F[N], W = R(V) && V.name;
            if (W === "Boolean") {
              M = !0;
              break;
            } else W === "String" && (Y = !1);
          }
        else
          M = R(F) && F.name === "Boolean";
        T[
          0
          /* shouldCast */
        ] = M, T[
          1
          /* shouldCastTrue */
        ] = Y, (M || H(T, "default")) && f.push(p);
      }
    }
  const h = [o, f];
  return q(e) && n.set(e, h), h;
}
function en(e) {
  return e[0] !== "$" && !ft(e);
}
const Ns = (e) => e[0] === "_" || e === "$stable", $s = (e) => P(e) ? e.map(be) : [be(e)], qi = (e, t, s) => {
  if (t._n)
    return t;
  const n = bi((...r) => $s(t(...r)), s);
  return n._c = !1, n;
}, cr = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (Ns(r)) continue;
    const i = e[r];
    if (R(i))
      t[r] = qi(r, i, n);
    else if (i != null) {
      const o = $s(i);
      t[r] = () => o;
    }
  }
}, ur = (e, t) => {
  const s = $s(t);
  e.slots.default = () => s;
}, ar = (e, t, s) => {
  for (const n in t)
    (s || !Ns(n)) && (e[n] = t[n]);
}, Gi = (e, t, s) => {
  const n = e.slots = ir();
  if (e.vnode.shapeFlag & 32) {
    const r = t.__;
    r && fs(n, "__", r, !0);
    const i = t._;
    i ? (ar(n, t, s), s && fs(n, "_", i, !0)) : cr(t, n);
  } else t && ur(e, t);
}, Ji = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, o = B;
  if (n.shapeFlag & 32) {
    const f = t._;
    f ? s && f === 1 ? i = !1 : ar(r, t, s) : (i = !t.$stable, cr(t, r)), o = t;
  } else t && (ur(e, t), o = { default: 1 });
  if (i)
    for (const f in r)
      !Ns(f) && o[f] == null && delete r[f];
}, le = lo;
function Yi(e) {
  return zi(e);
}
function zi(e, t) {
  const s = Vt();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: f,
    createComment: u,
    setText: h,
    setElementText: a,
    parentNode: p,
    nextSibling: w,
    setScopeId: T = ye,
    insertStaticContent: F
  } = e, M = (l, c, d, m = null, g = null, _ = null, v = void 0, y = null, x = !!c.dynamicChildren) => {
    if (l === c)
      return;
    l && !ot(l, c) && (m = Ot(l), de(l, g, _, !0), l = null), c.patchFlag === -2 && (x = !1, c.dynamicChildren = null);
    const { type: b, ref: E, shapeFlag: S } = c;
    switch (b) {
      case Jt:
        Y(l, c, d, m);
        break;
      case ke:
        N(l, c, d, m);
        break;
      case is:
        l == null && V(c, d, m, v);
        break;
      case Te:
        Tt(
          l,
          c,
          d,
          m,
          g,
          _,
          v,
          y,
          x
        );
        break;
      default:
        S & 1 ? G(
          l,
          c,
          d,
          m,
          g,
          _,
          v,
          y,
          x
        ) : S & 6 ? Ct(
          l,
          c,
          d,
          m,
          g,
          _,
          v,
          y,
          x
        ) : (S & 64 || S & 128) && b.process(
          l,
          c,
          d,
          m,
          g,
          _,
          v,
          y,
          x,
          nt
        );
    }
    E != null && g ? dt(E, l && l.ref, _, c || l, !c) : E == null && l && l.ref != null && dt(l.ref, null, _, l, !0);
  }, Y = (l, c, d, m) => {
    if (l == null)
      n(
        c.el = f(c.children),
        d,
        m
      );
    else {
      const g = c.el = l.el;
      c.children !== l.children && h(g, c.children);
    }
  }, N = (l, c, d, m) => {
    l == null ? n(
      c.el = u(c.children || ""),
      d,
      m
    ) : c.el = l.el;
  }, V = (l, c, d, m) => {
    [l.el, l.anchor] = F(
      l.children,
      c,
      d,
      m,
      l.el,
      l.anchor
    );
  }, W = ({ el: l, anchor: c }, d, m) => {
    let g;
    for (; l && l !== c; )
      g = w(l), n(l, d, m), l = g;
    n(c, d, m);
  }, O = ({ el: l, anchor: c }) => {
    let d;
    for (; l && l !== c; )
      d = w(l), r(l), l = d;
    r(c);
  }, G = (l, c, d, m, g, _, v, y, x) => {
    c.type === "svg" ? v = "svg" : c.type === "math" && (v = "mathml"), l == null ? Pe(
      c,
      d,
      m,
      g,
      _,
      v,
      y,
      x
    ) : wt(
      l,
      c,
      g,
      _,
      v,
      y,
      x
    );
  }, Pe = (l, c, d, m, g, _, v, y) => {
    let x, b;
    const { props: E, shapeFlag: S, transition: C, dirs: A } = l;
    if (x = l.el = o(
      l.type,
      _,
      E && E.is,
      E
    ), S & 8 ? a(x, l.children) : S & 16 && Re(
      l.children,
      x,
      null,
      m,
      g,
      ns(l, _),
      v,
      y
    ), A && Ue(l, null, m, "created"), ae(x, l, l.scopeId, v, m), E) {
      for (const L in E)
        L !== "value" && !ft(L) && i(x, L, null, E[L], _, m);
      "value" in E && i(x, "value", null, E.value, _), (b = E.onVnodeBeforeMount) && _e(b, m, l);
    }
    A && Ue(l, null, m, "beforeMount");
    const I = Xi(g, C);
    I && C.beforeEnter(x), n(x, c, d), ((b = E && E.onVnodeMounted) || I || A) && le(() => {
      b && _e(b, m, l), I && C.enter(x), A && Ue(l, null, m, "mounted");
    }, g);
  }, ae = (l, c, d, m, g) => {
    if (d && T(l, d), m)
      for (let _ = 0; _ < m.length; _++)
        T(l, m[_]);
    if (g) {
      let _ = g.subTree;
      if (c === _ || mr(_.type) && (_.ssContent === c || _.ssFallback === c)) {
        const v = g.vnode;
        ae(
          l,
          v,
          v.scopeId,
          v.slotScopeIds,
          g.parent
        );
      }
    }
  }, Re = (l, c, d, m, g, _, v, y, x = 0) => {
    for (let b = x; b < l.length; b++) {
      const E = l[b] = y ? Me(l[b]) : be(l[b]);
      M(
        null,
        E,
        c,
        d,
        m,
        g,
        _,
        v,
        y
      );
    }
  }, wt = (l, c, d, m, g, _, v) => {
    const y = c.el = l.el;
    let { patchFlag: x, dynamicChildren: b, dirs: E } = c;
    x |= l.patchFlag & 16;
    const S = l.props || B, C = c.props || B;
    let A;
    if (d && Be(d, !1), (A = C.onVnodeBeforeUpdate) && _e(A, d, c, l), E && Ue(c, l, d, "beforeUpdate"), d && Be(d, !0), (S.innerHTML && C.innerHTML == null || S.textContent && C.textContent == null) && a(y, ""), b ? Ne(
      l.dynamicChildren,
      b,
      y,
      d,
      m,
      ns(c, g),
      _
    ) : v || $(
      l,
      c,
      y,
      null,
      d,
      m,
      ns(c, g),
      _,
      !1
    ), x > 0) {
      if (x & 16)
        tt(y, S, C, d, g);
      else if (x & 2 && S.class !== C.class && i(y, "class", null, C.class, g), x & 4 && i(y, "style", S.style, C.style, g), x & 8) {
        const I = c.dynamicProps;
        for (let L = 0; L < I.length; L++) {
          const j = I[L], ne = S[j], re = C[j];
          (re !== ne || j === "value") && i(y, j, ne, re, g, d);
        }
      }
      x & 1 && l.children !== c.children && a(y, c.children);
    } else !v && b == null && tt(y, S, C, d, g);
    ((A = C.onVnodeUpdated) || E) && le(() => {
      A && _e(A, d, c, l), E && Ue(c, l, d, "updated");
    }, m);
  }, Ne = (l, c, d, m, g, _, v) => {
    for (let y = 0; y < c.length; y++) {
      const x = l[y], b = c[y], E = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === Te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ot(x, b) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 198) ? p(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      M(
        x,
        b,
        E,
        null,
        m,
        g,
        _,
        v,
        !0
      );
    }
  }, tt = (l, c, d, m, g) => {
    if (c !== d) {
      if (c !== B)
        for (const _ in c)
          !ft(_) && !(_ in d) && i(
            l,
            _,
            c[_],
            null,
            g,
            m
          );
      for (const _ in d) {
        if (ft(_)) continue;
        const v = d[_], y = c[_];
        v !== y && _ !== "value" && i(l, _, y, v, g, m);
      }
      "value" in d && i(l, "value", c.value, d.value, g);
    }
  }, Tt = (l, c, d, m, g, _, v, y, x) => {
    const b = c.el = l ? l.el : f(""), E = c.anchor = l ? l.anchor : f("");
    let { patchFlag: S, dynamicChildren: C, slotScopeIds: A } = c;
    A && (y = y ? y.concat(A) : A), l == null ? (n(b, d, m), n(E, d, m), Re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      c.children || [],
      d,
      E,
      g,
      _,
      v,
      y,
      x
    )) : S > 0 && S & 64 && C && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Ne(
      l.dynamicChildren,
      C,
      d,
      g,
      _,
      v,
      y
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (c.key != null || g && c === g.subTree) && dr(
      l,
      c,
      !0
      /* shallow */
    )) : $(
      l,
      c,
      d,
      E,
      g,
      _,
      v,
      y,
      x
    );
  }, Ct = (l, c, d, m, g, _, v, y, x) => {
    c.slotScopeIds = y, l == null ? c.shapeFlag & 512 ? g.ctx.activate(
      c,
      d,
      m,
      v,
      x
    ) : Yt(
      c,
      d,
      m,
      g,
      _,
      v,
      x
    ) : Bs(l, c, x);
  }, Yt = (l, c, d, m, g, _, v) => {
    const y = l.component = xo(
      l,
      m,
      g
    );
    if (Zn(l) && (y.ctx.renderer = nt), yo(y, !1, v), y.asyncDep) {
      if (g && g.registerDep(y, Z, v), !l.el) {
        const x = y.subTree = We(ke);
        N(null, x, c, d);
      }
    } else
      Z(
        y,
        l,
        c,
        d,
        g,
        _,
        v
      );
  }, Bs = (l, c, d) => {
    const m = c.component = l.component;
    if (io(l, c, d))
      if (m.asyncDep && !m.asyncResolved) {
        K(m, c, d);
        return;
      } else
        m.next = c, m.update();
    else
      c.el = l.el, m.vnode = c;
  }, Z = (l, c, d, m, g, _, v) => {
    const y = () => {
      if (l.isMounted) {
        let { next: S, bu: C, u: A, parent: I, vnode: L } = l;
        {
          const pe = hr(l);
          if (pe) {
            S && (S.el = L.el, K(l, S, v)), pe.asyncDep.then(() => {
              l.isUnmounted || y();
            });
            return;
          }
        }
        let j = S, ne;
        Be(l, !1), S ? (S.el = L.el, K(l, S, v)) : S = L, C && Zt(C), (ne = S.props && S.props.onVnodeBeforeUpdate) && _e(ne, I, S, L), Be(l, !0);
        const re = sn(l), he = l.subTree;
        l.subTree = re, M(
          he,
          re,
          // parent may have changed if it's in a teleport
          p(he.el),
          // anchor may have changed if it's in a fragment
          Ot(he),
          l,
          g,
          _
        ), S.el = re.el, j === null && oo(l, re.el), A && le(A, g), (ne = S.props && S.props.onVnodeUpdated) && le(
          () => _e(ne, I, S, L),
          g
        );
      } else {
        let S;
        const { el: C, props: A } = c, { bm: I, m: L, parent: j, root: ne, type: re } = l, he = ht(c);
        Be(l, !1), I && Zt(I), !he && (S = A && A.onVnodeBeforeMount) && _e(S, j, c), Be(l, !0);
        {
          ne.ce && // @ts-expect-error _def is private
          ne.ce._def.shadowRoot !== !1 && ne.ce._injectChildStyle(re);
          const pe = l.subTree = sn(l);
          M(
            null,
            pe,
            d,
            m,
            l,
            g,
            _
          ), c.el = pe.el;
        }
        if (L && le(L, g), !he && (S = A && A.onVnodeMounted)) {
          const pe = c;
          le(
            () => _e(S, j, pe),
            g
          );
        }
        (c.shapeFlag & 256 || j && ht(j.vnode) && j.vnode.shapeFlag & 256) && l.a && le(l.a, g), l.isMounted = !0, c = d = m = null;
      }
    };
    l.scope.on();
    const x = l.effect = new Pn(y);
    l.scope.off();
    const b = l.update = x.run.bind(x), E = l.job = x.runIfDirty.bind(x);
    E.i = l, E.id = l.uid, x.scheduler = () => Hs(E), Be(l, !0), b();
  }, K = (l, c, d) => {
    c.component = l;
    const m = l.vnode.props;
    l.vnode = c, l.next = null, Vi(l, c.props, m, d), Ji(l, c.children, d), Ee(), zs(l), Oe();
  }, $ = (l, c, d, m, g, _, v, y, x = !1) => {
    const b = l && l.children, E = l ? l.shapeFlag : 0, S = c.children, { patchFlag: C, shapeFlag: A } = c;
    if (C > 0) {
      if (C & 128) {
        Et(
          b,
          S,
          d,
          m,
          g,
          _,
          v,
          y,
          x
        );
        return;
      } else if (C & 256) {
        $e(
          b,
          S,
          d,
          m,
          g,
          _,
          v,
          y,
          x
        );
        return;
      }
    }
    A & 8 ? (E & 16 && st(b, g, _), S !== b && a(d, S)) : E & 16 ? A & 16 ? Et(
      b,
      S,
      d,
      m,
      g,
      _,
      v,
      y,
      x
    ) : st(b, g, _, !0) : (E & 8 && a(d, ""), A & 16 && Re(
      S,
      d,
      m,
      g,
      _,
      v,
      y,
      x
    ));
  }, $e = (l, c, d, m, g, _, v, y, x) => {
    l = l || ze, c = c || ze;
    const b = l.length, E = c.length, S = Math.min(b, E);
    let C;
    for (C = 0; C < S; C++) {
      const A = c[C] = x ? Me(c[C]) : be(c[C]);
      M(
        l[C],
        A,
        d,
        null,
        g,
        _,
        v,
        y,
        x
      );
    }
    b > E ? st(
      l,
      g,
      _,
      !0,
      !1,
      S
    ) : Re(
      c,
      d,
      m,
      g,
      _,
      v,
      y,
      x,
      S
    );
  }, Et = (l, c, d, m, g, _, v, y, x) => {
    let b = 0;
    const E = c.length;
    let S = l.length - 1, C = E - 1;
    for (; b <= S && b <= C; ) {
      const A = l[b], I = c[b] = x ? Me(c[b]) : be(c[b]);
      if (ot(A, I))
        M(
          A,
          I,
          d,
          null,
          g,
          _,
          v,
          y,
          x
        );
      else
        break;
      b++;
    }
    for (; b <= S && b <= C; ) {
      const A = l[S], I = c[C] = x ? Me(c[C]) : be(c[C]);
      if (ot(A, I))
        M(
          A,
          I,
          d,
          null,
          g,
          _,
          v,
          y,
          x
        );
      else
        break;
      S--, C--;
    }
    if (b > S) {
      if (b <= C) {
        const A = C + 1, I = A < E ? c[A].el : m;
        for (; b <= C; )
          M(
            null,
            c[b] = x ? Me(c[b]) : be(c[b]),
            d,
            I,
            g,
            _,
            v,
            y,
            x
          ), b++;
      }
    } else if (b > C)
      for (; b <= S; )
        de(l[b], g, _, !0), b++;
    else {
      const A = b, I = b, L = /* @__PURE__ */ new Map();
      for (b = I; b <= C; b++) {
        const oe = c[b] = x ? Me(c[b]) : be(c[b]);
        oe.key != null && L.set(oe.key, b);
      }
      let j, ne = 0;
      const re = C - I + 1;
      let he = !1, pe = 0;
      const rt = new Array(re);
      for (b = 0; b < re; b++) rt[b] = 0;
      for (b = A; b <= S; b++) {
        const oe = l[b];
        if (ne >= re) {
          de(oe, g, _, !0);
          continue;
        }
        let ge;
        if (oe.key != null)
          ge = L.get(oe.key);
        else
          for (j = I; j <= C; j++)
            if (rt[j - I] === 0 && ot(oe, c[j])) {
              ge = j;
              break;
            }
        ge === void 0 ? de(oe, g, _, !0) : (rt[ge - I] = b + 1, ge >= pe ? pe = ge : he = !0, M(
          oe,
          c[ge],
          d,
          null,
          g,
          _,
          v,
          y,
          x
        ), ne++);
      }
      const Ws = he ? Zi(rt) : ze;
      for (j = Ws.length - 1, b = re - 1; b >= 0; b--) {
        const oe = I + b, ge = c[oe], qs = oe + 1 < E ? c[oe + 1].el : m;
        rt[b] === 0 ? M(
          null,
          ge,
          d,
          qs,
          g,
          _,
          v,
          y,
          x
        ) : he && (j < 0 || b !== Ws[j] ? Le(ge, d, qs, 2) : j--);
      }
    }
  }, Le = (l, c, d, m, g = null) => {
    const { el: _, type: v, transition: y, children: x, shapeFlag: b } = l;
    if (b & 6) {
      Le(l.component.subTree, c, d, m);
      return;
    }
    if (b & 128) {
      l.suspense.move(c, d, m);
      return;
    }
    if (b & 64) {
      v.move(l, c, d, nt);
      return;
    }
    if (v === Te) {
      n(_, c, d);
      for (let S = 0; S < x.length; S++)
        Le(x[S], c, d, m);
      n(l.anchor, c, d);
      return;
    }
    if (v === is) {
      W(l, c, d);
      return;
    }
    if (m !== 2 && b & 1 && y)
      if (m === 0)
        y.beforeEnter(_), n(_, c, d), le(() => y.enter(_), g);
      else {
        const { leave: S, delayLeave: C, afterLeave: A } = y, I = () => {
          l.ctx.isUnmounted ? r(_) : n(_, c, d);
        }, L = () => {
          S(_, () => {
            I(), A && A();
          });
        };
        C ? C(_, I, L) : L();
      }
    else
      n(_, c, d);
  }, de = (l, c, d, m = !1, g = !1) => {
    const {
      type: _,
      props: v,
      ref: y,
      children: x,
      dynamicChildren: b,
      shapeFlag: E,
      patchFlag: S,
      dirs: C,
      cacheIndex: A
    } = l;
    if (S === -2 && (g = !1), y != null && (Ee(), dt(y, null, d, l, !0), Oe()), A != null && (c.renderCache[A] = void 0), E & 256) {
      c.ctx.deactivate(l);
      return;
    }
    const I = E & 1 && C, L = !ht(l);
    let j;
    if (L && (j = v && v.onVnodeBeforeUnmount) && _e(j, c, l), E & 6)
      Tr(l.component, d, m);
    else {
      if (E & 128) {
        l.suspense.unmount(d, m);
        return;
      }
      I && Ue(l, null, c, "beforeUnmount"), E & 64 ? l.type.remove(
        l,
        c,
        d,
        nt,
        m
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Te || S > 0 && S & 64) ? st(
        b,
        c,
        d,
        !1,
        !0
      ) : (_ === Te && S & 384 || !g && E & 16) && st(x, c, d), m && Ks(l);
    }
    (L && (j = v && v.onVnodeUnmounted) || I) && le(() => {
      j && _e(j, c, l), I && Ue(l, null, c, "unmounted");
    }, d);
  }, Ks = (l) => {
    const { type: c, el: d, anchor: m, transition: g } = l;
    if (c === Te) {
      wr(d, m);
      return;
    }
    if (c === is) {
      O(l);
      return;
    }
    const _ = () => {
      r(d), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (l.shapeFlag & 1 && g && !g.persisted) {
      const { leave: v, delayLeave: y } = g, x = () => v(d, _);
      y ? y(l.el, _, x) : x();
    } else
      _();
  }, wr = (l, c) => {
    let d;
    for (; l !== c; )
      d = w(l), r(l), l = d;
    r(c);
  }, Tr = (l, c, d) => {
    const {
      bum: m,
      scope: g,
      job: _,
      subTree: v,
      um: y,
      m: x,
      a: b,
      parent: E,
      slots: { __: S }
    } = l;
    tn(x), tn(b), m && Zt(m), E && P(S) && S.forEach((C) => {
      E.renderCache[C] = void 0;
    }), g.stop(), _ && (_.flags |= 8, de(v, l, c, d)), y && le(y, c), le(() => {
      l.isUnmounted = !0;
    }, c), c && c.pendingBranch && !c.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === c.pendingId && (c.deps--, c.deps === 0 && c.resolve());
  }, st = (l, c, d, m = !1, g = !1, _ = 0) => {
    for (let v = _; v < l.length; v++)
      de(l[v], c, d, m, g);
  }, Ot = (l) => {
    if (l.shapeFlag & 6)
      return Ot(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const c = w(l.anchor || l.el), d = c && c[xi];
    return d ? w(d) : c;
  };
  let zt = !1;
  const Vs = (l, c, d) => {
    l == null ? c._vnode && de(c._vnode, null, null, !0) : M(
      c._vnode || null,
      l,
      c,
      null,
      null,
      null,
      d
    ), c._vnode = l, zt || (zt = !0, zs(), Jn(), zt = !1);
  }, nt = {
    p: M,
    um: de,
    m: Le,
    r: Ks,
    mt: Yt,
    mc: Re,
    pc: $,
    pbc: Ne,
    n: Ot,
    o: e
  };
  return {
    render: Vs,
    hydrate: void 0,
    createApp: Ui(Vs)
  };
}
function ns({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Be({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Xi(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function dr(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (P(n) && P(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let f = r[i];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = r[i] = Me(r[i]), f.el = o.el), !s && f.patchFlag !== -2 && dr(o, f)), f.type === Jt && (f.el = o.el), f.type === ke && !f.el && (f.el = o.el);
    }
}
function Zi(e) {
  const t = e.slice(), s = [0];
  let n, r, i, o, f;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const h = e[n];
    if (h !== 0) {
      if (r = s[s.length - 1], e[r] < h) {
        t[n] = r, s.push(n);
        continue;
      }
      for (i = 0, o = s.length - 1; i < o; )
        f = i + o >> 1, e[s[f]] < h ? i = f + 1 : o = f;
      h < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, o = s[i - 1]; i-- > 0; )
    s[i] = o, o = t[o];
  return s;
}
function hr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : hr(t);
}
function tn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Qi = Symbol.for("v-scx"), ki = () => It(Qi);
function rs(e, t, s) {
  return pr(e, t, s);
}
function pr(e, t, s = B) {
  const { immediate: n, deep: r, flush: i, once: o } = s, f = se({}, s), u = t && n || !t && i !== "post";
  let h;
  if (yt) {
    if (i === "sync") {
      const T = ki();
      h = T.__watcherHandles || (T.__watcherHandles = []);
    } else if (!u) {
      const T = () => {
      };
      return T.stop = ye, T.resume = ye, T.pause = ye, T;
    }
  }
  const a = te;
  f.call = (T, F, M) => ve(T, a, F, M);
  let p = !1;
  i === "post" ? f.scheduler = (T) => {
    le(T, a && a.suspense);
  } : i !== "sync" && (p = !0, f.scheduler = (T, F) => {
    F ? T() : Hs(T);
  }), f.augmentJob = (T) => {
    t && (T.flags |= 4), p && (T.flags |= 2, a && (T.id = a.uid, T.i = a));
  };
  const w = hi(e, t, f);
  return yt && (h ? h.push(w) : u && w()), w;
}
function eo(e, t, s) {
  const n = this.proxy, r = J(e) ? e.includes(".") ? gr(n, e) : () => n[e] : e.bind(n, n);
  let i;
  R(t) ? i = t : (i = t.handler, s = t);
  const o = St(this), f = pr(r, i.bind(n), s);
  return o(), f;
}
function gr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const to = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${He(t)}Modifiers`] || e[`${Ge(t)}Modifiers`];
function so(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || B;
  let r = s;
  const i = t.startsWith("update:"), o = i && to(n, t.slice(7));
  o && (o.trim && (r = s.map((a) => J(a) ? a.trim() : a)), o.number && (r = s.map(Rr)));
  let f, u = n[f = Xt(t)] || // also try camelCase event handler (#2249)
  n[f = Xt(He(t))];
  !u && i && (u = n[f = Xt(Ge(t))]), u && ve(
    u,
    e,
    6,
    r
  );
  const h = n[f + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[f])
      return;
    e.emitted[f] = !0, ve(
      h,
      e,
      6,
      r
    );
  }
}
function _r(e, t, s = !1) {
  const n = t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, f = !1;
  if (!R(e)) {
    const u = (h) => {
      const a = _r(h, t, !0);
      a && (f = !0, se(o, a));
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !i && !f ? (q(e) && n.set(e, null), null) : (P(i) ? i.forEach((u) => o[u] = null) : se(o, i), q(e) && n.set(e, o), o);
}
function Gt(e, t) {
  return !e || !Ut(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, Ge(t)) || H(e, t));
}
function sn(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: f,
    emit: u,
    render: h,
    renderCache: a,
    props: p,
    data: w,
    setupState: T,
    ctx: F,
    inheritAttrs: M
  } = e, Y = jt(e);
  let N, V;
  try {
    if (s.shapeFlag & 4) {
      const O = r || n, G = O;
      N = be(
        h.call(
          G,
          O,
          a,
          p,
          T,
          w,
          F
        )
      ), V = f;
    } else {
      const O = t;
      N = be(
        O.length > 1 ? O(
          p,
          { attrs: f, slots: o, emit: u }
        ) : O(
          p,
          null
        )
      ), V = t.props ? f : no(f);
    }
  } catch (O) {
    gt.length = 0, Wt(O, e, 1), N = We(ke);
  }
  let W = N;
  if (V && M !== !1) {
    const O = Object.keys(V), { shapeFlag: G } = W;
    O.length && G & 7 && (i && O.some(vs) && (V = ro(
      V,
      i
    )), W = et(W, V, !1, !0));
  }
  return s.dirs && (W = et(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(s.dirs) : s.dirs), s.transition && js(W, s.transition), N = W, jt(Y), N;
}
const no = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Ut(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, ro = (e, t) => {
  const s = {};
  for (const n in e)
    (!vs(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function io(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: o, children: f, patchFlag: u } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return n ? nn(n, o, h) : !!o;
    if (u & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const w = a[p];
        if (o[w] !== n[w] && !Gt(h, w))
          return !0;
      }
    }
  } else
    return (r || f) && (!f || !f.$stable) ? !0 : n === o ? !1 : n ? o ? nn(n, o, h) : !0 : !!o;
  return !1;
}
function nn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (t[i] !== e[i] && !Gt(s, i))
      return !0;
  }
  return !1;
}
function oo({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const mr = (e) => e.__isSuspense;
function lo(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : mi(e);
}
const Te = Symbol.for("v-fgt"), Jt = Symbol.for("v-txt"), ke = Symbol.for("v-cmt"), is = Symbol.for("v-stc"), gt = [];
let fe = null;
function fo(e = !1) {
  gt.push(fe = e ? null : []);
}
function co() {
  gt.pop(), fe = gt[gt.length - 1] || null;
}
let xt = 1;
function rn(e, t = !1) {
  xt += e, e < 0 && fe && t && (fe.hasOnce = !0);
}
function uo(e) {
  return e.dynamicChildren = xt > 0 ? fe || ze : null, co(), xt > 0 && fe && fe.push(e), e;
}
function ao(e, t, s, n, r, i) {
  return uo(
    $t(
      e,
      t,
      s,
      n,
      r,
      i,
      !0
    )
  );
}
function br(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ot(e, t) {
  return e.type === t.type && e.key === t.key;
}
const xr = ({ key: e }) => e ?? null, Mt = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? J(e) || X(e) || R(e) ? { i: xe, r: e, k: t, f: !!s } : e : null);
function $t(e, t = null, s = null, n = 0, r = null, i = e === Te ? 0 : 1, o = !1, f = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && xr(t),
    ref: t && Mt(t),
    scopeId: zn,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: xe
  };
  return f ? (Ls(u, s), i & 128 && e.normalize(u)) : s && (u.shapeFlag |= J(s) ? 8 : 16), xt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  fe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && fe.push(u), u;
}
const We = ho;
function ho(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === Mi) && (e = ke), br(e)) {
    const f = et(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Ls(f, s), xt > 0 && !i && fe && (f.shapeFlag & 6 ? fe[fe.indexOf(e)] = f : fe.push(f)), f.patchFlag = -2, f;
  }
  if (To(e) && (e = e.__vccOpts), t) {
    t = po(t);
    let { class: f, style: u } = t;
    f && !J(f) && (t.class = Cs(f)), q(u) && (Ds(u) && !P(u) && (u = se({}, u)), t.style = Ts(u));
  }
  const o = J(e) ? 1 : mr(e) ? 128 : yi(e) ? 64 : q(e) ? 4 : R(e) ? 2 : 0;
  return $t(
    e,
    t,
    s,
    n,
    r,
    o,
    i,
    !0
  );
}
function po(e) {
  return e ? Ds(e) || or(e) ? se({}, e) : e : null;
}
function et(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: f, transition: u } = e, h = t ? _o(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && xr(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? P(i) ? i.concat(Mt(t)) : [i, Mt(t)] : Mt(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: f,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Te ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && et(e.ssContent),
    ssFallback: e.ssFallback && et(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && n && js(
    a,
    u.clone(a)
  ), a;
}
function go(e = " ", t = 0) {
  return We(Jt, null, e, t);
}
function be(e) {
  return e == null || typeof e == "boolean" ? We(ke) : P(e) ? We(
    Te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : br(e) ? Me(e) : We(Jt, null, String(e));
}
function Me(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : et(e);
}
function Ls(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (P(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ls(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !or(t) ? t._ctx = xe : r === 3 && xe && (xe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else R(t) ? (t = { default: t, _ctx: xe }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [go(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function _o(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = Cs([t.class, n.class]));
      else if (r === "style")
        t.style = Ts([t.style, n.style]);
      else if (Ut(r)) {
        const i = t[r], o = n[r];
        o && i !== o && !(P(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function _e(e, t, s, n = null) {
  ve(e, t, 7, [
    s,
    n
  ]);
}
const mo = nr();
let bo = 0;
function xo(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || mo, i = {
    uid: bo++,
    vnode: e,
    type: n,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Nr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: fr(n, r),
    emitsOptions: _r(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: B,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: B,
    data: B,
    props: B,
    attrs: B,
    slots: B,
    refs: B,
    setupState: B,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = so.bind(null, i), e.ce && e.ce(i), i;
}
let te = null, Lt, bs;
{
  const e = Vt(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Lt = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => te = s
  ), bs = t(
    "__VUE_SSR_SETTERS__",
    (s) => yt = s
  );
}
const St = (e) => {
  const t = te;
  return Lt(e), e.scope.on(), () => {
    e.scope.off(), Lt(t);
  };
}, on = () => {
  te && te.scope.off(), Lt(null);
};
function yr(e) {
  return e.vnode.shapeFlag & 4;
}
let yt = !1;
function yo(e, t = !1, s = !1) {
  t && bs(t);
  const { props: n, children: r } = e.vnode, i = yr(e);
  Ki(e, n, i, t), Gi(e, r, s || t);
  const o = i ? vo(e, t) : void 0;
  return t && bs(!1), o;
}
function vo(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fi);
  const { setup: n } = s;
  if (n) {
    Ee();
    const r = e.setupContext = n.length > 1 ? wo(e) : null, i = St(e), o = vt(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), f = vn(o);
    if (Oe(), i(), (f || e.sp) && !ht(e) && Xn(e), f) {
      if (o.then(on, on), t)
        return o.then((u) => {
          ln(e, u);
        }).catch((u) => {
          Wt(u, e, 0);
        });
      e.asyncDep = o;
    } else
      ln(e, o);
  } else
    vr(e);
}
function ln(e, t, s) {
  R(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) && (e.setupState = Wn(t)), vr(e);
}
function vr(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || ye);
  {
    const r = St(e);
    Ee();
    try {
      Di(e);
    } finally {
      Oe(), r();
    }
  }
}
const So = {
  get(e, t) {
    return z(e, "get", ""), e[t];
  }
};
function wo(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, So),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Us(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Wn(ri(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in pt)
        return pt[s](e);
    },
    has(t, s) {
      return s in t || s in pt;
    }
  })) : e.proxy;
}
function To(e) {
  return R(e) && "__vccOpts" in e;
}
const Co = (e, t) => ai(e, t, yt), Eo = "3.5.17";
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let xs;
const fn = typeof window < "u" && window.trustedTypes;
if (fn)
  try {
    xs = /* @__PURE__ */ fn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Sr = xs ? (e) => xs.createHTML(e) : (e) => e, Oo = "http://www.w3.org/2000/svg", Ao = "http://www.w3.org/1998/Math/MathML", we = typeof document < "u" ? document : null, cn = we && /* @__PURE__ */ we.createElement("template"), Po = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? we.createElementNS(Oo, e) : t === "mathml" ? we.createElementNS(Ao, e) : s ? we.createElement(e, { is: s }) : we.createElement(e);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => we.createTextNode(e),
  createComment: (e) => we.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => we.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, r, i) {
    const o = s ? s.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      cn.innerHTML = Sr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const f = cn.content;
      if (n === "svg" || n === "mathml") {
        const u = f.firstChild;
        for (; u.firstChild; )
          f.appendChild(u.firstChild);
        f.removeChild(u);
      }
      t.insertBefore(f, s);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, Ro = Symbol("_vtc");
function Io(e, t, s) {
  const n = e[Ro];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const un = Symbol("_vod"), Mo = Symbol("_vsh"), Fo = Symbol(""), Do = /(^|;)\s*display\s*:/;
function Ho(e, t, s) {
  const n = e.style, r = J(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (J(t))
        for (const o of t.split(";")) {
          const f = o.slice(0, o.indexOf(":")).trim();
          s[f] == null && Ft(n, f, "");
        }
      else
        for (const o in t)
          s[o] == null && Ft(n, o, "");
    for (const o in s)
      o === "display" && (i = !0), Ft(n, o, s[o]);
  } else if (r) {
    if (t !== s) {
      const o = n[Fo];
      o && (s += ";" + o), n.cssText = s, i = Do.test(s);
    }
  } else t && e.removeAttribute("style");
  un in e && (e[un] = i ? n.display : "", e[Mo] && (n.display = "none"));
}
const an = /\s*!important$/;
function Ft(e, t, s) {
  if (P(s))
    s.forEach((n) => Ft(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = jo(e, t);
    an.test(s) ? e.setProperty(
      Ge(n),
      s.replace(an, ""),
      "important"
    ) : e[n] = s;
  }
}
const dn = ["Webkit", "Moz", "ms"], os = {};
function jo(e, t) {
  const s = os[t];
  if (s)
    return s;
  let n = He(t);
  if (n !== "filter" && n in e)
    return os[t] = n;
  n = Tn(n);
  for (let r = 0; r < dn.length; r++) {
    const i = dn[r] + n;
    if (i in e)
      return os[t] = i;
  }
  return t;
}
const hn = "http://www.w3.org/1999/xlink";
function pn(e, t, s, n, r, i = jr(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(hn, t.slice(6, t.length)) : e.setAttributeNS(hn, t, s) : s == null || i && !Cn(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : je(s) ? String(s) : s
  );
}
function gn(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Sr(s) : s);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const f = i === "OPTION" ? e.getAttribute("value") || "" : e.value, u = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (f !== u || !("_value" in e)) && (e.value = u), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const f = typeof e[t];
    f === "boolean" ? s = Cn(s) : s == null && f === "string" ? (s = "", o = !0) : f === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function No(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function $o(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const _n = Symbol("_vei");
function Lo(e, t, s, n, r = null) {
  const i = e[_n] || (e[_n] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [f, u] = Uo(t);
    if (n) {
      const h = i[t] = Vo(
        n,
        r
      );
      No(e, f, h, u);
    } else o && ($o(e, f, o, u), i[t] = void 0);
  }
}
const mn = /(?:Once|Passive|Capture)$/;
function Uo(e) {
  let t;
  if (mn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(mn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ge(e.slice(2)), t];
}
let ls = 0;
const Bo = /* @__PURE__ */ Promise.resolve(), Ko = () => ls || (Bo.then(() => ls = 0), ls = Date.now());
function Vo(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    ve(
      Wo(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = Ko(), s;
}
function Wo(e, t) {
  if (P(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (r) => !r._stopped && n && n(r)
    );
  } else
    return t;
}
const bn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, qo = (e, t, s, n, r, i) => {
  const o = r === "svg";
  t === "class" ? Io(e, n, o) : t === "style" ? Ho(e, s, n) : Ut(t) ? vs(t) || Lo(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Go(e, t, n, o)) ? (gn(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && pn(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !J(n)) ? gn(e, He(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), pn(e, t, n, o));
};
function Go(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && bn(t) && R(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return bn(t) && J(s) ? !1 : t in e;
}
const Jo = /* @__PURE__ */ se({ patchProp: qo }, Po);
let xn;
function Yo() {
  return xn || (xn = Yi(Jo));
}
const zo = (...e) => {
  const t = Yo().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = Zo(n);
    if (!r) return;
    const i = t._component;
    !R(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, Xo(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function Xo(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Zo(e) {
  return J(e) ? document.querySelector(e) : e;
}
const Qo = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, ko = {
  __name: "sidebar-primary",
  setup(e) {
    const t = ii((/* @__PURE__ */ new Date()).toISOString());
    return kn(() => {
      t.value = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    }), (s, n) => (fo(), ao("div", null, [
      n[0] || (n[0] = $t("h2", null, "Primary Sidebar Widget", -1)),
      $t("span", null, "Mount Time: " + On(t.value), 1)
    ]));
  }
}, el = /* @__PURE__ */ Qo(ko, [["__scopeId", "data-v-27931d7a"]]);
function sl(e, t) {
  if (!document.getElementById(e)) {
    console.error({ msg: "could not found root element", rootId: e });
    return;
  }
  const n = zo(el, { api: t });
  return n.mount(`#${e}`), n.unmount;
}
export {
  sl as default
};
