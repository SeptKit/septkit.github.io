/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function fo(e) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) n[o] = 1;
  return (o) => o in n;
}
const Ie = {}, Tn = [], Kt = () => {
}, pa = () => !1, ho = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Rs = (e) => e.startsWith("onUpdate:"), dt = Object.assign, po = (e, n) => {
  const o = e.indexOf(n);
  o > -1 && e.splice(o, 1);
}, ya = Object.prototype.hasOwnProperty, Ae = (e, n) => ya.call(e, n), de = Array.isArray, Rn = (e) => Zr(e) === "[object Map]", Is = (e) => Zr(e) === "[object Set]", ge = (e) => typeof e == "function", Qe = (e) => typeof e == "string", sn = (e) => typeof e == "symbol", Fe = (e) => e !== null && typeof e == "object", Ks = (e) => (Fe(e) || ge(e)) && ge(e.then) && ge(e.catch), js = Object.prototype.toString, Zr = (e) => js.call(e), ga = (e) => Zr(e).slice(8, -1), Ds = (e) => Zr(e) === "[object Object]", yo = (e) => Qe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xn = /* @__PURE__ */ fo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ei = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (o) => n[o] || (n[o] = e(o));
}, ma = /-(\w)/g, jt = ei(
  (e) => e.replace(ma, (n, o) => o ? o.toUpperCase() : "")
), va = /\B([A-Z])/g, cr = ei(
  (e) => e.replace(va, "-$1").toLowerCase()
), go = ei((e) => e.charAt(0).toUpperCase() + e.slice(1)), Li = ei(
  (e) => e ? `on${go(e)}` : ""
), qt = (e, n) => !Object.is(e, n), Ui = (e, ...n) => {
  for (let o = 0; o < e.length; o++)
    e[o](...n);
}, Qi = (e, n, o, u = !1) => {
  Object.defineProperty(e, n, {
    configurable: !0,
    enumerable: !1,
    writable: u,
    value: o
  });
}, ba = (e) => {
  const n = parseFloat(e);
  return isNaN(n) ? e : n;
};
let cs;
const ti = () => cs || (cs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ni(e) {
  if (de(e)) {
    const n = {};
    for (let o = 0; o < e.length; o++) {
      const u = e[o], l = Qe(u) ? Oa(u) : ni(u);
      if (l)
        for (const f in l)
          n[f] = l[f];
    }
    return n;
  } else if (Qe(e) || Fe(e))
    return e;
}
const _a = /;(?![^(]*\))/g, wa = /:([^]+)/, xa = /\/\*[^]*?\*\//g;
function Oa(e) {
  const n = {};
  return e.replace(xa, "").split(_a).forEach((o) => {
    if (o) {
      const u = o.split(wa);
      u.length > 1 && (n[u[0].trim()] = u[1].trim());
    }
  }), n;
}
function ri(e) {
  let n = "";
  if (Qe(e))
    n = e;
  else if (de(e))
    for (let o = 0; o < e.length; o++) {
      const u = ri(e[o]);
      u && (n += u + " ");
    }
  else if (Fe(e))
    for (const o in e)
      e[o] && (n += o + " ");
  return n.trim();
}
function _c(e) {
  if (!e) return null;
  let { class: n, style: o } = e;
  return n && !Qe(n) && (e.class = ri(n)), o && (e.style = ni(o)), e;
}
const Sa = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", wc = /* @__PURE__ */ fo(Sa);
function xc(e) {
  return !!e || e === "";
}
const Fs = (e) => !!(e && e.__v_isRef === !0), Ea = (e) => Qe(e) ? e : e == null ? "" : de(e) || Fe(e) && (e.toString === js || !ge(e.toString)) ? Fs(e) ? Ea(e.value) : JSON.stringify(e, Ms, 2) : String(e), Ms = (e, n) => Fs(n) ? Ms(e, n.value) : Rn(n) ? {
  [`Map(${n.size})`]: [...n.entries()].reduce(
    (o, [u, l], f) => (o[Vi(u, f) + " =>"] = l, o),
    {}
  )
} : Is(n) ? {
  [`Set(${n.size})`]: [...n.values()].map((o) => Vi(o))
} : sn(n) ? Vi(n) : Fe(n) && !de(n) && !Ds(n) ? String(n) : n, Vi = (e, n = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    sn(e) ? `Symbol(${(o = e.description) != null ? o : n})` : e
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let it;
class Bs {
  constructor(n = !1) {
    this.detached = n, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = it, !n && it && (this.index = (it.scopes || (it.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let n, o;
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].pause();
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let n, o;
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].resume();
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].resume();
    }
  }
  run(n) {
    if (this._active) {
      const o = it;
      try {
        return it = this, n();
      } finally {
        it = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = it, it = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (it = this.prevScope, this.prevScope = void 0);
  }
  stop(n) {
    if (this._active) {
      this._active = !1;
      let o, u;
      for (o = 0, u = this.effects.length; o < u; o++)
        this.effects[o].stop();
      for (this.effects.length = 0, o = 0, u = this.cleanups.length; o < u; o++)
        this.cleanups[o]();
      if (this.cleanups.length = 0, this.scopes) {
        for (o = 0, u = this.scopes.length; o < u; o++)
          this.scopes[o].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !n) {
        const l = this.parent.scopes.pop();
        l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Oc(e) {
  return new Bs(e);
}
function Pa() {
  return it;
}
function Sc(e, n = !1) {
  it && it.cleanups.push(e);
}
let Ke;
const $i = /* @__PURE__ */ new WeakSet();
class Ns {
  constructor(n) {
    this.fn = n, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, it && it.active && it.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, $i.has(this) && ($i.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ls(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, fs(this), Us(this);
    const n = Ke, o = St;
    Ke = this, St = !0;
    try {
      return this.fn();
    } finally {
      Vs(this), Ke = n, St = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let n = this.deps; n; n = n.nextDep)
        bo(n);
      this.deps = this.depsTail = void 0, fs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? $i.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Xi(this) && this.run();
  }
  get dirty() {
    return Xi(this);
  }
}
let qs = 0, Zn, er;
function Ls(e, n = !1) {
  if (e.flags |= 8, n) {
    e.next = er, er = e;
    return;
  }
  e.next = Zn, Zn = e;
}
function mo() {
  qs++;
}
function vo() {
  if (--qs > 0)
    return;
  if (er) {
    let n = er;
    for (er = void 0; n; ) {
      const o = n.next;
      n.next = void 0, n.flags &= -9, n = o;
    }
  }
  let e;
  for (; Zn; ) {
    let n = Zn;
    for (Zn = void 0; n; ) {
      const o = n.next;
      if (n.next = void 0, n.flags &= -9, n.flags & 1)
        try {
          n.trigger();
        } catch (u) {
          e || (e = u);
        }
      n = o;
    }
  }
  if (e) throw e;
}
function Us(e) {
  for (let n = e.deps; n; n = n.nextDep)
    n.version = -1, n.prevActiveLink = n.dep.activeLink, n.dep.activeLink = n;
}
function Vs(e) {
  let n, o = e.depsTail, u = o;
  for (; u; ) {
    const l = u.prevDep;
    u.version === -1 ? (u === o && (o = l), bo(u), ka(u)) : n = u, u.dep.activeLink = u.prevActiveLink, u.prevActiveLink = void 0, u = l;
  }
  e.deps = n, e.depsTail = o;
}
function Xi(e) {
  for (let n = e.deps; n; n = n.nextDep)
    if (n.dep.version !== n.version || n.dep.computed && ($s(n.dep.computed) || n.dep.version !== n.version))
      return !0;
  return !!e._dirty;
}
function $s(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === or) || (e.globalVersion = or, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Xi(e))))
    return;
  e.flags |= 2;
  const n = e.dep, o = Ke, u = St;
  Ke = e, St = !0;
  try {
    Us(e);
    const l = e.fn(e._value);
    (n.version === 0 || qt(l, e._value)) && (e.flags |= 128, e._value = l, n.version++);
  } catch (l) {
    throw n.version++, l;
  } finally {
    Ke = o, St = u, Vs(e), e.flags &= -3;
  }
}
function bo(e, n = !1) {
  const { dep: o, prevSub: u, nextSub: l } = e;
  if (u && (u.nextSub = l, e.prevSub = void 0), l && (l.prevSub = u, e.nextSub = void 0), o.subs === e && (o.subs = u, !u && o.computed)) {
    o.computed.flags &= -5;
    for (let f = o.computed.deps; f; f = f.nextDep)
      bo(f, !0);
  }
  !n && !--o.sc && o.map && o.map.delete(o.key);
}
function ka(e) {
  const { prevDep: n, nextDep: o } = e;
  n && (n.nextDep = o, e.prevDep = void 0), o && (o.prevDep = n, e.nextDep = void 0);
}
let St = !0;
const Hs = [];
function Lt() {
  Hs.push(St), St = !1;
}
function Ut() {
  const e = Hs.pop();
  St = e === void 0 ? !0 : e;
}
function fs(e) {
  const { cleanup: n } = e;
  if (e.cleanup = void 0, n) {
    const o = Ke;
    Ke = void 0;
    try {
      n();
    } finally {
      Ke = o;
    }
  }
}
let or = 0;
class Ca {
  constructor(n, o) {
    this.sub = n, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ii {
  // TODO isolatedDeclarations "__v_skip"
  constructor(n) {
    this.computed = n, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(n) {
    if (!Ke || !St || Ke === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== Ke)
      o = this.activeLink = new Ca(Ke, this), Ke.deps ? (o.prevDep = Ke.depsTail, Ke.depsTail.nextDep = o, Ke.depsTail = o) : Ke.deps = Ke.depsTail = o, Ws(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const u = o.nextDep;
      u.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = u), o.prevDep = Ke.depsTail, o.nextDep = void 0, Ke.depsTail.nextDep = o, Ke.depsTail = o, Ke.deps === o && (Ke.deps = u);
    }
    return o;
  }
  trigger(n) {
    this.version++, or++, this.notify(n);
  }
  notify(n) {
    mo();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      vo();
    }
  }
}
function Ws(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const n = e.dep.computed;
    if (n && !e.dep.subs) {
      n.flags |= 20;
      for (let u = n.deps; u; u = u.nextDep)
        Ws(u);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Wr = /* @__PURE__ */ new WeakMap(), mn = Symbol(
  ""
), Zi = Symbol(
  ""
), sr = Symbol(
  ""
);
function ot(e, n, o) {
  if (St && Ke) {
    let u = Wr.get(e);
    u || Wr.set(e, u = /* @__PURE__ */ new Map());
    let l = u.get(o);
    l || (u.set(o, l = new ii()), l.map = u, l.key = o), l.track();
  }
}
function Nt(e, n, o, u, l, f) {
  const d = Wr.get(e);
  if (!d) {
    or++;
    return;
  }
  const y = (v) => {
    v && v.trigger();
  };
  if (mo(), n === "clear")
    d.forEach(y);
  else {
    const v = de(e), R = v && yo(o);
    if (v && o === "length") {
      const A = Number(u);
      d.forEach((K, V) => {
        (V === "length" || V === sr || !sn(V) && V >= A) && y(K);
      });
    } else
      switch ((o !== void 0 || d.has(void 0)) && y(d.get(o)), R && y(d.get(sr)), n) {
        case "add":
          v ? R && y(d.get("length")) : (y(d.get(mn)), Rn(e) && y(d.get(Zi)));
          break;
        case "delete":
          v || (y(d.get(mn)), Rn(e) && y(d.get(Zi)));
          break;
        case "set":
          Rn(e) && y(d.get(mn));
          break;
      }
  }
  vo();
}
function Aa(e, n) {
  const o = Wr.get(e);
  return o && o.get(n);
}
function Cn(e) {
  const n = ke(e);
  return n === e ? n : (ot(n, "iterate", sr), xt(e) ? n : n.map(Xe));
}
function oi(e) {
  return ot(e = ke(e), "iterate", sr), e;
}
const Ta = {
  __proto__: null,
  [Symbol.iterator]() {
    return Hi(this, Symbol.iterator, Xe);
  },
  concat(...e) {
    return Cn(this).concat(
      ...e.map((n) => de(n) ? Cn(n) : n)
    );
  },
  entries() {
    return Hi(this, "entries", (e) => (e[1] = Xe(e[1]), e));
  },
  every(e, n) {
    return Bt(this, "every", e, n, void 0, arguments);
  },
  filter(e, n) {
    return Bt(this, "filter", e, n, (o) => o.map(Xe), arguments);
  },
  find(e, n) {
    return Bt(this, "find", e, n, Xe, arguments);
  },
  findIndex(e, n) {
    return Bt(this, "findIndex", e, n, void 0, arguments);
  },
  findLast(e, n) {
    return Bt(this, "findLast", e, n, Xe, arguments);
  },
  findLastIndex(e, n) {
    return Bt(this, "findLastIndex", e, n, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, n) {
    return Bt(this, "forEach", e, n, void 0, arguments);
  },
  includes(...e) {
    return Wi(this, "includes", e);
  },
  indexOf(...e) {
    return Wi(this, "indexOf", e);
  },
  join(e) {
    return Cn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Wi(this, "lastIndexOf", e);
  },
  map(e, n) {
    return Bt(this, "map", e, n, void 0, arguments);
  },
  pop() {
    return Gn(this, "pop");
  },
  push(...e) {
    return Gn(this, "push", e);
  },
  reduce(e, ...n) {
    return hs(this, "reduce", e, n);
  },
  reduceRight(e, ...n) {
    return hs(this, "reduceRight", e, n);
  },
  shift() {
    return Gn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, n) {
    return Bt(this, "some", e, n, void 0, arguments);
  },
  splice(...e) {
    return Gn(this, "splice", e);
  },
  toReversed() {
    return Cn(this).toReversed();
  },
  toSorted(e) {
    return Cn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Cn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Gn(this, "unshift", e);
  },
  values() {
    return Hi(this, "values", Xe);
  }
};
function Hi(e, n, o) {
  const u = oi(e), l = u[n]();
  return u !== e && !xt(e) && (l._next = l.next, l.next = () => {
    const f = l._next();
    return f.value && (f.value = o(f.value)), f;
  }), l;
}
const Ra = Array.prototype;
function Bt(e, n, o, u, l, f) {
  const d = oi(e), y = d !== e && !xt(e), v = d[n];
  if (v !== Ra[n]) {
    const K = v.apply(e, f);
    return y ? Xe(K) : K;
  }
  let R = o;
  d !== e && (y ? R = function(K, V) {
    return o.call(this, Xe(K), V, e);
  } : o.length > 2 && (R = function(K, V) {
    return o.call(this, K, V, e);
  }));
  const A = v.call(d, R, u);
  return y && l ? l(A) : A;
}
function hs(e, n, o, u) {
  const l = oi(e);
  let f = o;
  return l !== e && (xt(e) ? o.length > 3 && (f = function(d, y, v) {
    return o.call(this, d, y, v, e);
  }) : f = function(d, y, v) {
    return o.call(this, d, Xe(y), v, e);
  }), l[n](f, ...u);
}
function Wi(e, n, o) {
  const u = ke(e);
  ot(u, "iterate", sr);
  const l = u[n](...o);
  return (l === -1 || l === !1) && Oo(o[0]) ? (o[0] = ke(o[0]), u[n](...o)) : l;
}
function Gn(e, n, o = []) {
  Lt(), mo();
  const u = ke(e)[n].apply(e, o);
  return vo(), Ut(), u;
}
const Ia = /* @__PURE__ */ fo("__proto__,__v_isRef,__isVue"), Ys = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(sn)
);
function Ka(e) {
  sn(e) || (e = String(e));
  const n = ke(this);
  return ot(n, "has", e), n.hasOwnProperty(e);
}
class zs {
  constructor(n = !1, o = !1) {
    this._isReadonly = n, this._isShallow = o;
  }
  get(n, o, u) {
    if (o === "__v_skip") return n.__v_skip;
    const l = this._isReadonly, f = this._isShallow;
    if (o === "__v_isReactive")
      return !l;
    if (o === "__v_isReadonly")
      return l;
    if (o === "__v_isShallow")
      return f;
    if (o === "__v_raw")
      return u === (l ? f ? Va : Xs : f ? Qs : Js).get(n) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(n) === Object.getPrototypeOf(u) ? n : void 0;
    const d = de(n);
    if (!l) {
      let v;
      if (d && (v = Ta[o]))
        return v;
      if (o === "hasOwnProperty")
        return Ka;
    }
    const y = Reflect.get(
      n,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Je(n) ? n : u
    );
    return (sn(o) ? Ys.has(o) : Ia(o)) || (l || ot(n, "get", o), f) ? y : Je(y) ? d && yo(o) ? y : y.value : Fe(y) ? l ? Zs(y) : wo(y) : y;
  }
}
class Gs extends zs {
  constructor(n = !1) {
    super(!1, n);
  }
  set(n, o, u, l) {
    let f = n[o];
    if (!this._isShallow) {
      const v = on(f);
      if (!xt(u) && !on(u) && (f = ke(f), u = ke(u)), !de(n) && Je(f) && !Je(u))
        return v ? !1 : (f.value = u, !0);
    }
    const d = de(n) && yo(o) ? Number(o) < n.length : Ae(n, o), y = Reflect.set(
      n,
      o,
      u,
      Je(n) ? n : l
    );
    return n === ke(l) && (d ? qt(u, f) && Nt(n, "set", o, u) : Nt(n, "add", o, u)), y;
  }
  deleteProperty(n, o) {
    const u = Ae(n, o);
    n[o];
    const l = Reflect.deleteProperty(n, o);
    return l && u && Nt(n, "delete", o, void 0), l;
  }
  has(n, o) {
    const u = Reflect.has(n, o);
    return (!sn(o) || !Ys.has(o)) && ot(n, "has", o), u;
  }
  ownKeys(n) {
    return ot(
      n,
      "iterate",
      de(n) ? "length" : mn
    ), Reflect.ownKeys(n);
  }
}
class ja extends zs {
  constructor(n = !1) {
    super(!0, n);
  }
  set(n, o) {
    return !0;
  }
  deleteProperty(n, o) {
    return !0;
  }
}
const Da = /* @__PURE__ */ new Gs(), Fa = /* @__PURE__ */ new ja(), Ma = /* @__PURE__ */ new Gs(!0);
const eo = (e) => e, Br = (e) => Reflect.getPrototypeOf(e);
function Ba(e, n, o) {
  return function(...u) {
    const l = this.__v_raw, f = ke(l), d = Rn(f), y = e === "entries" || e === Symbol.iterator && d, v = e === "keys" && d, R = l[e](...u), A = o ? eo : n ? Yr : Xe;
    return !n && ot(
      f,
      "iterate",
      v ? Zi : mn
    ), {
      // iterator protocol
      next() {
        const { value: K, done: V } = R.next();
        return V ? { value: K, done: V } : {
          value: y ? [A(K[0]), A(K[1])] : A(K),
          done: V
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Nr(e) {
  return function(...n) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Na(e, n) {
  const o = {
    get(l) {
      const f = this.__v_raw, d = ke(f), y = ke(l);
      e || (qt(l, y) && ot(d, "get", l), ot(d, "get", y));
      const { has: v } = Br(d), R = n ? eo : e ? Yr : Xe;
      if (v.call(d, l))
        return R(f.get(l));
      if (v.call(d, y))
        return R(f.get(y));
      f !== d && f.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && ot(ke(l), "iterate", mn), Reflect.get(l, "size", l);
    },
    has(l) {
      const f = this.__v_raw, d = ke(f), y = ke(l);
      return e || (qt(l, y) && ot(d, "has", l), ot(d, "has", y)), l === y ? f.has(l) : f.has(l) || f.has(y);
    },
    forEach(l, f) {
      const d = this, y = d.__v_raw, v = ke(y), R = n ? eo : e ? Yr : Xe;
      return !e && ot(v, "iterate", mn), y.forEach((A, K) => l.call(f, R(A), R(K), d));
    }
  };
  return dt(
    o,
    e ? {
      add: Nr("add"),
      set: Nr("set"),
      delete: Nr("delete"),
      clear: Nr("clear")
    } : {
      add(l) {
        !n && !xt(l) && !on(l) && (l = ke(l));
        const f = ke(this);
        return Br(f).has.call(f, l) || (f.add(l), Nt(f, "add", l, l)), this;
      },
      set(l, f) {
        !n && !xt(f) && !on(f) && (f = ke(f));
        const d = ke(this), { has: y, get: v } = Br(d);
        let R = y.call(d, l);
        R || (l = ke(l), R = y.call(d, l));
        const A = v.call(d, l);
        return d.set(l, f), R ? qt(f, A) && Nt(d, "set", l, f) : Nt(d, "add", l, f), this;
      },
      delete(l) {
        const f = ke(this), { has: d, get: y } = Br(f);
        let v = d.call(f, l);
        v || (l = ke(l), v = d.call(f, l)), y && y.call(f, l);
        const R = f.delete(l);
        return v && Nt(f, "delete", l, void 0), R;
      },
      clear() {
        const l = ke(this), f = l.size !== 0, d = l.clear();
        return f && Nt(
          l,
          "clear",
          void 0,
          void 0
        ), d;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((l) => {
    o[l] = Ba(l, e, n);
  }), o;
}
function _o(e, n) {
  const o = Na(e, n);
  return (u, l, f) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? u : Reflect.get(
    Ae(o, l) && l in u ? o : u,
    l,
    f
  );
}
const qa = {
  get: /* @__PURE__ */ _o(!1, !1)
}, La = {
  get: /* @__PURE__ */ _o(!1, !0)
}, Ua = {
  get: /* @__PURE__ */ _o(!0, !1)
};
const Js = /* @__PURE__ */ new WeakMap(), Qs = /* @__PURE__ */ new WeakMap(), Xs = /* @__PURE__ */ new WeakMap(), Va = /* @__PURE__ */ new WeakMap();
function $a(e) {
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
function Ha(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : $a(ga(e));
}
function wo(e) {
  return on(e) ? e : xo(
    e,
    !1,
    Da,
    qa,
    Js
  );
}
function Wa(e) {
  return xo(
    e,
    !1,
    Ma,
    La,
    Qs
  );
}
function Zs(e) {
  return xo(
    e,
    !0,
    Fa,
    Ua,
    Xs
  );
}
function xo(e, n, o, u, l) {
  if (!Fe(e) || e.__v_raw && !(n && e.__v_isReactive))
    return e;
  const f = Ha(e);
  if (f === 0)
    return e;
  const d = l.get(e);
  if (d)
    return d;
  const y = new Proxy(
    e,
    f === 2 ? u : o
  );
  return l.set(e, y), y;
}
function In(e) {
  return on(e) ? In(e.__v_raw) : !!(e && e.__v_isReactive);
}
function on(e) {
  return !!(e && e.__v_isReadonly);
}
function xt(e) {
  return !!(e && e.__v_isShallow);
}
function Oo(e) {
  return e ? !!e.__v_raw : !1;
}
function ke(e) {
  const n = e && e.__v_raw;
  return n ? ke(n) : e;
}
function Ya(e) {
  return !Ae(e, "__v_skip") && Object.isExtensible(e) && Qi(e, "__v_skip", !0), e;
}
const Xe = (e) => Fe(e) ? wo(e) : e, Yr = (e) => Fe(e) ? Zs(e) : e;
function Je(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function za(e) {
  return eu(e, !1);
}
function Ga(e) {
  return eu(e, !0);
}
function eu(e, n) {
  return Je(e) ? e : new Ja(e, n);
}
class Ja {
  constructor(n, o) {
    this.dep = new ii(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? n : ke(n), this._value = o ? n : Xe(n), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(n) {
    const o = this._rawValue, u = this.__v_isShallow || xt(n) || on(n);
    n = u ? n : ke(n), qt(n, o) && (this._rawValue = n, this._value = u ? n : Xe(n), this.dep.trigger());
  }
}
function tu(e) {
  return Je(e) ? e.value : e;
}
function Ec(e) {
  return ge(e) ? e() : tu(e);
}
const Qa = {
  get: (e, n, o) => n === "__v_raw" ? e : tu(Reflect.get(e, n, o)),
  set: (e, n, o, u) => {
    const l = e[n];
    return Je(l) && !Je(o) ? (l.value = o, !0) : Reflect.set(e, n, o, u);
  }
};
function nu(e) {
  return In(e) ? e : new Proxy(e, Qa);
}
class Xa {
  constructor(n) {
    this.__v_isRef = !0, this._value = void 0;
    const o = this.dep = new ii(), { get: u, set: l } = n(o.track.bind(o), o.trigger.bind(o));
    this._get = u, this._set = l;
  }
  get value() {
    return this._value = this._get();
  }
  set value(n) {
    this._set(n);
  }
}
function Pc(e) {
  return new Xa(e);
}
function kc(e) {
  const n = de(e) ? new Array(e.length) : {};
  for (const o in e)
    n[o] = ru(e, o);
  return n;
}
class Za {
  constructor(n, o, u) {
    this._object = n, this._key = o, this._defaultValue = u, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const n = this._object[this._key];
    return this._value = n === void 0 ? this._defaultValue : n;
  }
  set value(n) {
    this._object[this._key] = n;
  }
  get dep() {
    return Aa(ke(this._object), this._key);
  }
}
class el {
  constructor(n) {
    this._getter = n, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Cc(e, n, o) {
  return Je(e) ? e : ge(e) ? new el(e) : Fe(e) && arguments.length > 1 ? ru(e, n, o) : za(e);
}
function ru(e, n, o) {
  const u = e[n];
  return Je(u) ? u : new Za(e, n, o);
}
class tl {
  constructor(n, o, u) {
    this.fn = n, this.setter = o, this._value = void 0, this.dep = new ii(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = or - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = u;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ke !== this)
      return Ls(this, !0), !0;
  }
  get value() {
    const n = this.dep.track();
    return $s(this), n && (n.version = this.dep.version), this._value;
  }
  set value(n) {
    this.setter && this.setter(n);
  }
}
function nl(e, n, o = !1) {
  let u, l;
  return ge(e) ? u = e : (u = e.get, l = e.set), new tl(u, l, o);
}
const qr = {}, zr = /* @__PURE__ */ new WeakMap();
let gn;
function rl(e, n = !1, o = gn) {
  if (o) {
    let u = zr.get(o);
    u || zr.set(o, u = []), u.push(e);
  }
}
function il(e, n, o = Ie) {
  const { immediate: u, deep: l, once: f, scheduler: d, augmentJob: y, call: v } = o, R = (ue) => l ? ue : xt(ue) || l === !1 || l === 0 ? rn(ue, 1) : rn(ue);
  let A, K, V, te, ie = !1, re = !1;
  if (Je(e) ? (K = () => e.value, ie = xt(e)) : In(e) ? (K = () => R(e), ie = !0) : de(e) ? (re = !0, ie = e.some((ue) => In(ue) || xt(ue)), K = () => e.map((ue) => {
    if (Je(ue))
      return ue.value;
    if (In(ue))
      return R(ue);
    if (ge(ue))
      return v ? v(ue, 2) : ue();
  })) : ge(e) ? n ? K = v ? () => v(e, 2) : e : K = () => {
    if (V) {
      Lt();
      try {
        V();
      } finally {
        Ut();
      }
    }
    const ue = gn;
    gn = A;
    try {
      return v ? v(e, 3, [te]) : e(te);
    } finally {
      gn = ue;
    }
  } : K = Kt, n && l) {
    const ue = K, Te = l === !0 ? 1 / 0 : l;
    K = () => rn(ue(), Te);
  }
  const qe = Pa(), ve = () => {
    A.stop(), qe && qe.active && po(qe.effects, A);
  };
  if (f && n) {
    const ue = n;
    n = (...Te) => {
      ue(...Te), ve();
    };
  }
  let Ee = re ? new Array(e.length).fill(qr) : qr;
  const Pe = (ue) => {
    if (!(!(A.flags & 1) || !A.dirty && !ue))
      if (n) {
        const Te = A.run();
        if (l || ie || (re ? Te.some((Re, F) => qt(Re, Ee[F])) : qt(Te, Ee))) {
          V && V();
          const Re = gn;
          gn = A;
          try {
            const F = [
              Te,
              // pass undefined as the old value when it's changed for the first time
              Ee === qr ? void 0 : re && Ee[0] === qr ? [] : Ee,
              te
            ];
            Ee = Te, v ? v(n, 3, F) : (
              // @ts-expect-error
              n(...F)
            );
          } finally {
            gn = Re;
          }
        }
      } else
        A.run();
  };
  return y && y(Pe), A = new Ns(K), A.scheduler = d ? () => d(Pe, !1) : Pe, te = (ue) => rl(ue, !1, A), V = A.onStop = () => {
    const ue = zr.get(A);
    if (ue) {
      if (v)
        v(ue, 4);
      else
        for (const Te of ue) Te();
      zr.delete(A);
    }
  }, n ? u ? Pe(!0) : Ee = A.run() : d ? d(Pe.bind(null, !0), !0) : A.run(), ve.pause = A.pause.bind(A), ve.resume = A.resume.bind(A), ve.stop = ve, ve;
}
function rn(e, n = 1 / 0, o) {
  if (n <= 0 || !Fe(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Set(), o.has(e)))
    return e;
  if (o.add(e), n--, Je(e))
    rn(e.value, n, o);
  else if (de(e))
    for (let u = 0; u < e.length; u++)
      rn(e[u], n, o);
  else if (Is(e) || Rn(e))
    e.forEach((u) => {
      rn(u, n, o);
    });
  else if (Ds(e)) {
    for (const u in e)
      rn(e[u], n, o);
    for (const u of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, u) && rn(e[u], n, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function fr(e, n, o, u) {
  try {
    return u ? e(...u) : e();
  } catch (l) {
    si(l, n, o);
  }
}
function Vt(e, n, o, u) {
  if (ge(e)) {
    const l = fr(e, n, o, u);
    return l && Ks(l) && l.catch((f) => {
      si(f, n, o);
    }), l;
  }
  if (de(e)) {
    const l = [];
    for (let f = 0; f < e.length; f++)
      l.push(Vt(e[f], n, o, u));
    return l;
  }
}
function si(e, n, o, u = !0) {
  const l = n ? n.vnode : null, { errorHandler: f, throwUnhandledErrorInProduction: d } = n && n.appContext.config || Ie;
  if (n) {
    let y = n.parent;
    const v = n.proxy, R = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; y; ) {
      const A = y.ec;
      if (A) {
        for (let K = 0; K < A.length; K++)
          if (A[K](e, v, R) === !1)
            return;
      }
      y = y.parent;
    }
    if (f) {
      Lt(), fr(f, null, 10, [
        e,
        v,
        R
      ]), Ut();
      return;
    }
  }
  ol(e, o, l, u, d);
}
function ol(e, n, o, u = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const ft = [];
let Rt = -1;
const Kn = [];
let tn = null, An = 0;
const iu = /* @__PURE__ */ Promise.resolve();
let Gr = null;
function sl(e) {
  const n = Gr || iu;
  return e ? n.then(this ? e.bind(this) : e) : n;
}
function ul(e) {
  let n = Rt + 1, o = ft.length;
  for (; n < o; ) {
    const u = n + o >>> 1, l = ft[u], f = ur(l);
    f < e || f === e && l.flags & 2 ? n = u + 1 : o = u;
  }
  return n;
}
function So(e) {
  if (!(e.flags & 1)) {
    const n = ur(e), o = ft[ft.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && n >= ur(o) ? ft.push(e) : ft.splice(ul(n), 0, e), e.flags |= 1, ou();
  }
}
function ou() {
  Gr || (Gr = iu.then(uu));
}
function al(e) {
  de(e) ? Kn.push(...e) : tn && e.id === -1 ? tn.splice(An + 1, 0, e) : e.flags & 1 || (Kn.push(e), e.flags |= 1), ou();
}
function ds(e, n, o = Rt + 1) {
  for (; o < ft.length; o++) {
    const u = ft[o];
    if (u && u.flags & 2) {
      if (e && u.id !== e.uid)
        continue;
      ft.splice(o, 1), o--, u.flags & 4 && (u.flags &= -2), u(), u.flags & 4 || (u.flags &= -2);
    }
  }
}
function su(e) {
  if (Kn.length) {
    const n = [...new Set(Kn)].sort(
      (o, u) => ur(o) - ur(u)
    );
    if (Kn.length = 0, tn) {
      tn.push(...n);
      return;
    }
    for (tn = n, An = 0; An < tn.length; An++) {
      const o = tn[An];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    tn = null, An = 0;
  }
}
const ur = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function uu(e) {
  try {
    for (Rt = 0; Rt < ft.length; Rt++) {
      const n = ft[Rt];
      n && !(n.flags & 8) && (n.flags & 4 && (n.flags &= -2), fr(
        n,
        n.i,
        n.i ? 15 : 14
      ), n.flags & 4 || (n.flags &= -2));
    }
  } finally {
    for (; Rt < ft.length; Rt++) {
      const n = ft[Rt];
      n && (n.flags &= -2);
    }
    Rt = -1, ft.length = 0, su(), Gr = null, (ft.length || Kn.length) && uu();
  }
}
let st = null, au = null;
function Jr(e) {
  const n = st;
  return st = e, au = e && e.type.__scopeId || null, n;
}
function ll(e, n = st, o) {
  if (!n || e._n)
    return e;
  const u = (...l) => {
    u._d && Ps(-1);
    const f = Jr(n);
    let d;
    try {
      d = e(...l);
    } finally {
      Jr(f), u._d && Ps(1);
    }
    return d;
  };
  return u._n = !0, u._c = !0, u._d = !0, u;
}
function pn(e, n, o, u) {
  const l = e.dirs, f = n && n.dirs;
  for (let d = 0; d < l.length; d++) {
    const y = l[d];
    f && (y.oldValue = f[d].value);
    let v = y.dir[u];
    v && (Lt(), Vt(v, o, 8, [
      e.el,
      y,
      e,
      n
    ]), Ut());
  }
}
const lu = Symbol("_vte"), cl = (e) => e.__isTeleport, tr = (e) => e && (e.disabled || e.disabled === ""), ps = (e) => e && (e.defer || e.defer === ""), ys = (e) => typeof SVGElement < "u" && e instanceof SVGElement, gs = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, to = (e, n) => {
  const o = e && e.to;
  return Qe(o) ? n ? n(o) : null : o;
}, cu = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, n, o, u, l, f, d, y, v, R) {
    const {
      mc: A,
      pc: K,
      pbc: V,
      o: { insert: te, querySelector: ie, createText: re, createComment: qe }
    } = R, ve = tr(n.props);
    let { shapeFlag: Ee, children: Pe, dynamicChildren: ue } = n;
    if (e == null) {
      const Te = n.el = re(""), Re = n.anchor = re("");
      te(Te, o, u), te(Re, o, u);
      const F = (le, me) => {
        Ee & 16 && (l && l.isCE && (l.ce._teleportTarget = le), A(
          Pe,
          le,
          me,
          l,
          f,
          d,
          y,
          v
        ));
      }, Y = () => {
        const le = n.target = to(n.props, ie), me = fu(le, n, re, te);
        le && (d !== "svg" && ys(le) ? d = "svg" : d !== "mathml" && gs(le) && (d = "mathml"), ve || (F(le, me), Ur(n, !1)));
      };
      ve && (F(o, Re), Ur(n, !0)), ps(n.props) ? (n.el.__isMounted = !1, ct(() => {
        Y(), delete n.el.__isMounted;
      }, f)) : Y();
    } else {
      if (ps(n.props) && e.el.__isMounted === !1) {
        ct(() => {
          cu.process(
            e,
            n,
            o,
            u,
            l,
            f,
            d,
            y,
            v,
            R
          );
        }, f);
        return;
      }
      n.el = e.el, n.targetStart = e.targetStart;
      const Te = n.anchor = e.anchor, Re = n.target = e.target, F = n.targetAnchor = e.targetAnchor, Y = tr(e.props), le = Y ? o : Re, me = Y ? Te : F;
      if (d === "svg" || ys(Re) ? d = "svg" : (d === "mathml" || gs(Re)) && (d = "mathml"), ue ? (V(
        e.dynamicChildren,
        ue,
        le,
        l,
        f,
        d,
        y
      ), Co(e, n, !0)) : v || K(
        e,
        n,
        le,
        me,
        l,
        f,
        d,
        y,
        !1
      ), ve)
        Y ? n.props && e.props && n.props.to !== e.props.to && (n.props.to = e.props.to) : Lr(
          n,
          o,
          Te,
          R,
          1
        );
      else if ((n.props && n.props.to) !== (e.props && e.props.to)) {
        const Ce = n.target = to(
          n.props,
          ie
        );
        Ce && Lr(
          n,
          Ce,
          null,
          R,
          0
        );
      } else Y && Lr(
        n,
        Re,
        F,
        R,
        1
      );
      Ur(n, ve);
    }
  },
  remove(e, n, o, { um: u, o: { remove: l } }, f) {
    const {
      shapeFlag: d,
      children: y,
      anchor: v,
      targetStart: R,
      targetAnchor: A,
      target: K,
      props: V
    } = e;
    if (K && (l(R), l(A)), f && l(v), d & 16) {
      const te = f || !tr(V);
      for (let ie = 0; ie < y.length; ie++) {
        const re = y[ie];
        u(
          re,
          n,
          o,
          te,
          !!re.dynamicChildren
        );
      }
    }
  },
  move: Lr,
  hydrate: fl
};
function Lr(e, n, o, { o: { insert: u }, m: l }, f = 2) {
  f === 0 && u(e.targetAnchor, n, o);
  const { el: d, anchor: y, shapeFlag: v, children: R, props: A } = e, K = f === 2;
  if (K && u(d, n, o), (!K || tr(A)) && v & 16)
    for (let V = 0; V < R.length; V++)
      l(
        R[V],
        n,
        o,
        2
      );
  K && u(y, n, o);
}
function fl(e, n, o, u, l, f, {
  o: { nextSibling: d, parentNode: y, querySelector: v, insert: R, createText: A }
}, K) {
  const V = n.target = to(
    n.props,
    v
  );
  if (V) {
    const te = tr(n.props), ie = V._lpa || V.firstChild;
    if (n.shapeFlag & 16)
      if (te)
        n.anchor = K(
          d(e),
          n,
          y(e),
          o,
          u,
          l,
          f
        ), n.targetStart = ie, n.targetAnchor = ie && d(ie);
      else {
        n.anchor = d(e);
        let re = ie;
        for (; re; ) {
          if (re && re.nodeType === 8) {
            if (re.data === "teleport start anchor")
              n.targetStart = re;
            else if (re.data === "teleport anchor") {
              n.targetAnchor = re, V._lpa = n.targetAnchor && d(n.targetAnchor);
              break;
            }
          }
          re = d(re);
        }
        n.targetAnchor || fu(V, n, A, R), K(
          ie && d(ie),
          n,
          V,
          o,
          u,
          l,
          f
        );
      }
    Ur(n, te);
  }
  return n.anchor && d(n.anchor);
}
const Ac = cu;
function Ur(e, n) {
  const o = e.ctx;
  if (o && o.ut) {
    let u, l;
    for (n ? (u = e.el, l = e.anchor) : (u = e.targetStart, l = e.targetAnchor); u && u !== l; )
      u.nodeType === 1 && u.setAttribute("data-v-owner", o.uid), u = u.nextSibling;
    o.ut();
  }
}
function fu(e, n, o, u) {
  const l = n.targetStart = o(""), f = n.targetAnchor = o("");
  return l[lu] = f, e && (u(l, e), u(f, e)), f;
}
function Eo(e, n) {
  e.shapeFlag & 6 && e.component ? (e.transition = n, Eo(e.component.subTree, n)) : e.shapeFlag & 128 ? (e.ssContent.transition = n.clone(e.ssContent), e.ssFallback.transition = n.clone(e.ssFallback)) : e.transition = n;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Tc(e, n) {
  return ge(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    dt({ name: e.name }, n, { setup: e })
  ) : e;
}
function hu(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Rc(e) {
  const n = Nu(), o = Ga(null);
  if (n) {
    const l = n.refs === Ie ? n.refs = {} : n.refs;
    Object.defineProperty(l, e, {
      enumerable: !0,
      get: () => o.value,
      set: (f) => o.value = f
    });
  }
  return o;
}
function nr(e, n, o, u, l = !1) {
  if (de(e)) {
    e.forEach(
      (ie, re) => nr(
        ie,
        n && (de(n) ? n[re] : n),
        o,
        u,
        l
      )
    );
    return;
  }
  if (jn(u) && !l) {
    u.shapeFlag & 512 && u.type.__asyncResolved && u.component.subTree.component && nr(e, n, o, u.component.subTree);
    return;
  }
  const f = u.shapeFlag & 4 ? Ro(u.component) : u.el, d = l ? null : f, { i: y, r: v } = e, R = n && n.r, A = y.refs === Ie ? y.refs = {} : y.refs, K = y.setupState, V = ke(K), te = K === Ie ? () => !1 : (ie) => Ae(V, ie);
  if (R != null && R !== v && (Qe(R) ? (A[R] = null, te(R) && (K[R] = null)) : Je(R) && (R.value = null)), ge(v))
    fr(v, y, 12, [d, A]);
  else {
    const ie = Qe(v), re = Je(v);
    if (ie || re) {
      const qe = () => {
        if (e.f) {
          const ve = ie ? te(v) ? K[v] : A[v] : v.value;
          l ? de(ve) && po(ve, f) : de(ve) ? ve.includes(f) || ve.push(f) : ie ? (A[v] = [f], te(v) && (K[v] = A[v])) : (v.value = [f], e.k && (A[e.k] = v.value));
        } else ie ? (A[v] = d, te(v) && (K[v] = d)) : re && (v.value = d, e.k && (A[e.k] = d));
      };
      d ? (qe.id = -1, ct(qe, o)) : qe();
    }
  }
}
ti().requestIdleCallback;
ti().cancelIdleCallback;
const jn = (e) => !!e.type.__asyncLoader, du = (e) => e.type.__isKeepAlive;
function hl(e, n) {
  pu(e, "a", n);
}
function dl(e, n) {
  pu(e, "da", n);
}
function pu(e, n, o = Ze) {
  const u = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (ui(n, u, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      du(l.parent.vnode) && pl(u, n, o, l), l = l.parent;
  }
}
function pl(e, n, o, u) {
  const l = ui(
    n,
    e,
    u,
    !0
    /* prepend */
  );
  yu(() => {
    po(u[n], l);
  }, o);
}
function ui(e, n, o = Ze, u = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), f = n.__weh || (n.__weh = (...d) => {
      Lt();
      const y = hr(o), v = Vt(n, o, e, d);
      return y(), Ut(), v;
    });
    return u ? l.unshift(f) : l.push(f), f;
  }
}
const Ht = (e) => (n, o = Ze) => {
  (!lr || e === "sp") && ui(e, (...u) => n(...u), o);
}, yl = Ht("bm"), gl = Ht("m"), ml = Ht(
  "bu"
), vl = Ht("u"), bl = Ht(
  "bum"
), yu = Ht("um"), _l = Ht(
  "sp"
), wl = Ht("rtg"), xl = Ht("rtc");
function Ol(e, n = Ze) {
  ui("ec", e, n);
}
const gu = "components";
function Ic(e, n) {
  return vu(gu, e, !0, n) || e;
}
const mu = Symbol.for("v-ndc");
function Kc(e) {
  return Qe(e) ? vu(gu, e, !1) || e : e || mu;
}
function vu(e, n, o = !0, u = !1) {
  const l = st || Ze;
  if (l) {
    const f = l.type;
    {
      const y = lc(
        f,
        !1
      );
      if (y && (y === n || y === jt(n) || y === go(jt(n))))
        return f;
    }
    const d = (
      // local registration
      // check instance[type] first which is resolved for options API
      ms(l[e] || f[e], n) || // global registration
      ms(l.appContext[e], n)
    );
    return !d && u ? f : d;
  }
}
function ms(e, n) {
  return e && (e[n] || e[jt(n)] || e[go(jt(n))]);
}
function jc(e, n, o, u) {
  let l;
  const f = o && o[u], d = de(e);
  if (d || Qe(e)) {
    const y = d && In(e);
    let v = !1, R = !1;
    y && (v = !xt(e), R = on(e), e = oi(e)), l = new Array(e.length);
    for (let A = 0, K = e.length; A < K; A++)
      l[A] = n(
        v ? R ? Yr(Xe(e[A])) : Xe(e[A]) : e[A],
        A,
        void 0,
        f && f[A]
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let y = 0; y < e; y++)
      l[y] = n(y + 1, y, void 0, f && f[y]);
  } else if (Fe(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (y, v) => n(y, v, void 0, f && f[v])
      );
    else {
      const y = Object.keys(e);
      l = new Array(y.length);
      for (let v = 0, R = y.length; v < R; v++) {
        const A = y[v];
        l[v] = n(e[A], A, v, f && f[v]);
      }
    }
  else
    l = [];
  return o && (o[u] = l), l;
}
function Dc(e, n, o = {}, u, l) {
  if (st.ce || st.parent && jn(st.parent) && st.parent.ce)
    return n !== "default" && (o.name = n), so(), uo(
      wt,
      null,
      [gt("slot", o, u && u())],
      64
    );
  let f = e[n];
  f && f._c && (f._d = !1), so();
  const d = f && bu(f(o)), y = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  d && d.key, v = uo(
    wt,
    {
      key: (y && !sn(y) ? y : `_${n}`) + // #7256 force differentiate fallback content from actual content
      (!d && u ? "_fb" : "")
    },
    d || (u ? u() : []),
    d && e._ === 1 ? 64 : -2
  );
  return v.scopeId && (v.slotScopeIds = [v.scopeId + "-s"]), f && f._c && (f._d = !0), v;
}
function bu(e) {
  return e.some((n) => ar(n) ? !(n.type === $t || n.type === wt && !bu(n.children)) : !0) ? e : null;
}
const no = (e) => e ? qu(e) ? Ro(e) : no(e.parent) : null, rr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ dt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => no(e.parent),
    $root: (e) => no(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => xu(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      So(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = sl.bind(e.proxy)),
    $watch: (e) => $l.bind(e)
  })
), Yi = (e, n) => e !== Ie && !e.__isScriptSetup && Ae(e, n), Sl = {
  get({ _: e }, n) {
    if (n === "__v_skip")
      return !0;
    const { ctx: o, setupState: u, data: l, props: f, accessCache: d, type: y, appContext: v } = e;
    let R;
    if (n[0] !== "$") {
      const te = d[n];
      if (te !== void 0)
        switch (te) {
          case 1:
            return u[n];
          case 2:
            return l[n];
          case 4:
            return o[n];
          case 3:
            return f[n];
        }
      else {
        if (Yi(u, n))
          return d[n] = 1, u[n];
        if (l !== Ie && Ae(l, n))
          return d[n] = 2, l[n];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (R = e.propsOptions[0]) && Ae(R, n)
        )
          return d[n] = 3, f[n];
        if (o !== Ie && Ae(o, n))
          return d[n] = 4, o[n];
        ro && (d[n] = 0);
      }
    }
    const A = rr[n];
    let K, V;
    if (A)
      return n === "$attrs" && ot(e.attrs, "get", ""), A(e);
    if (
      // css module (injected by vue-loader)
      (K = y.__cssModules) && (K = K[n])
    )
      return K;
    if (o !== Ie && Ae(o, n))
      return d[n] = 4, o[n];
    if (
      // global properties
      V = v.config.globalProperties, Ae(V, n)
    )
      return V[n];
  },
  set({ _: e }, n, o) {
    const { data: u, setupState: l, ctx: f } = e;
    return Yi(l, n) ? (l[n] = o, !0) : u !== Ie && Ae(u, n) ? (u[n] = o, !0) : Ae(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (f[n] = o, !0);
  },
  has({
    _: { data: e, setupState: n, accessCache: o, ctx: u, appContext: l, propsOptions: f }
  }, d) {
    let y;
    return !!o[d] || e !== Ie && Ae(e, d) || Yi(n, d) || (y = f[0]) && Ae(y, d) || Ae(u, d) || Ae(rr, d) || Ae(l.config.globalProperties, d);
  },
  defineProperty(e, n, o) {
    return o.get != null ? e._.accessCache[n] = 0 : Ae(o, "value") && this.set(e, n, o.value, null), Reflect.defineProperty(e, n, o);
  }
};
function Fc() {
  return _u().slots;
}
function Mc() {
  return _u().attrs;
}
function _u() {
  const e = Nu();
  return e.setupContext || (e.setupContext = Uu(e));
}
function vs(e) {
  return de(e) ? e.reduce(
    (n, o) => (n[o] = null, n),
    {}
  ) : e;
}
function Bc(e, n) {
  const o = {};
  for (const u in e)
    n.includes(u) || Object.defineProperty(o, u, {
      enumerable: !0,
      get: () => e[u]
    });
  return o;
}
let ro = !0;
function El(e) {
  const n = xu(e), o = e.proxy, u = e.ctx;
  ro = !1, n.beforeCreate && bs(n.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: f,
    methods: d,
    watch: y,
    provide: v,
    inject: R,
    // lifecycle
    created: A,
    beforeMount: K,
    mounted: V,
    beforeUpdate: te,
    updated: ie,
    activated: re,
    deactivated: qe,
    beforeDestroy: ve,
    beforeUnmount: Ee,
    destroyed: Pe,
    unmounted: ue,
    render: Te,
    renderTracked: Re,
    renderTriggered: F,
    errorCaptured: Y,
    serverPrefetch: le,
    // public API
    expose: me,
    inheritAttrs: Ce,
    // assets
    components: et,
    directives: He,
    filters: Et
  } = n;
  if (R && Pl(R, u, null), d)
    for (const je in d) {
      const _e = d[je];
      ge(_e) && (u[je] = _e.bind(o));
    }
  if (l) {
    const je = l.call(o, o);
    Fe(je) && (e.data = wo(je));
  }
  if (ro = !0, f)
    for (const je in f) {
      const _e = f[je], pt = ge(_e) ? _e.bind(o, o) : ge(_e.get) ? _e.get.bind(o, o) : Kt, yt = !ge(_e) && ge(_e.set) ? _e.set.bind(o) : Kt, Ot = fc({
        get: pt,
        set: yt
      });
      Object.defineProperty(u, je, {
        enumerable: !0,
        configurable: !0,
        get: () => Ot.value,
        set: (vt) => Ot.value = vt
      });
    }
  if (y)
    for (const je in y)
      wu(y[je], u, o, je);
  if (v) {
    const je = ge(v) ? v.call(o) : v;
    Reflect.ownKeys(je).forEach((_e) => {
      Il(_e, je[_e]);
    });
  }
  A && bs(A, e, "c");
  function $e(je, _e) {
    de(_e) ? _e.forEach((pt) => je(pt.bind(o))) : _e && je(_e.bind(o));
  }
  if ($e(yl, K), $e(gl, V), $e(ml, te), $e(vl, ie), $e(hl, re), $e(dl, qe), $e(Ol, Y), $e(xl, Re), $e(wl, F), $e(bl, Ee), $e(yu, ue), $e(_l, le), de(me))
    if (me.length) {
      const je = e.exposed || (e.exposed = {});
      me.forEach((_e) => {
        Object.defineProperty(je, _e, {
          get: () => o[_e],
          set: (pt) => o[_e] = pt
        });
      });
    } else e.exposed || (e.exposed = {});
  Te && e.render === Kt && (e.render = Te), Ce != null && (e.inheritAttrs = Ce), et && (e.components = et), He && (e.directives = He), le && hu(e);
}
function Pl(e, n, o = Kt) {
  de(e) && (e = io(e));
  for (const u in e) {
    const l = e[u];
    let f;
    Fe(l) ? "default" in l ? f = Vr(
      l.from || u,
      l.default,
      !0
    ) : f = Vr(l.from || u) : f = Vr(l), Je(f) ? Object.defineProperty(n, u, {
      enumerable: !0,
      configurable: !0,
      get: () => f.value,
      set: (d) => f.value = d
    }) : n[u] = f;
  }
}
function bs(e, n, o) {
  Vt(
    de(e) ? e.map((u) => u.bind(n.proxy)) : e.bind(n.proxy),
    n,
    o
  );
}
function wu(e, n, o, u) {
  let l = u.includes(".") ? Ku(o, u) : () => o[u];
  if (Qe(e)) {
    const f = n[e];
    ge(f) && Gi(l, f);
  } else if (ge(e))
    Gi(l, e.bind(o));
  else if (Fe(e))
    if (de(e))
      e.forEach((f) => wu(f, n, o, u));
    else {
      const f = ge(e.handler) ? e.handler.bind(o) : n[e.handler];
      ge(f) && Gi(l, f, e);
    }
}
function xu(e) {
  const n = e.type, { mixins: o, extends: u } = n, {
    mixins: l,
    optionsCache: f,
    config: { optionMergeStrategies: d }
  } = e.appContext, y = f.get(n);
  let v;
  return y ? v = y : !l.length && !o && !u ? v = n : (v = {}, l.length && l.forEach(
    (R) => Qr(v, R, d, !0)
  ), Qr(v, n, d)), Fe(n) && f.set(n, v), v;
}
function Qr(e, n, o, u = !1) {
  const { mixins: l, extends: f } = n;
  f && Qr(e, f, o, !0), l && l.forEach(
    (d) => Qr(e, d, o, !0)
  );
  for (const d in n)
    if (!(u && d === "expose")) {
      const y = kl[d] || o && o[d];
      e[d] = y ? y(e[d], n[d]) : n[d];
    }
  return e;
}
const kl = {
  data: _s,
  props: ws,
  emits: ws,
  // objects
  methods: Qn,
  computed: Qn,
  // lifecycle
  beforeCreate: lt,
  created: lt,
  beforeMount: lt,
  mounted: lt,
  beforeUpdate: lt,
  updated: lt,
  beforeDestroy: lt,
  beforeUnmount: lt,
  destroyed: lt,
  unmounted: lt,
  activated: lt,
  deactivated: lt,
  errorCaptured: lt,
  serverPrefetch: lt,
  // assets
  components: Qn,
  directives: Qn,
  // watch
  watch: Al,
  // provide / inject
  provide: _s,
  inject: Cl
};
function _s(e, n) {
  return n ? e ? function() {
    return dt(
      ge(e) ? e.call(this, this) : e,
      ge(n) ? n.call(this, this) : n
    );
  } : n : e;
}
function Cl(e, n) {
  return Qn(io(e), io(n));
}
function io(e) {
  if (de(e)) {
    const n = {};
    for (let o = 0; o < e.length; o++)
      n[e[o]] = e[o];
    return n;
  }
  return e;
}
function lt(e, n) {
  return e ? [...new Set([].concat(e, n))] : n;
}
function Qn(e, n) {
  return e ? dt(/* @__PURE__ */ Object.create(null), e, n) : n;
}
function ws(e, n) {
  return e ? de(e) && de(n) ? [.../* @__PURE__ */ new Set([...e, ...n])] : dt(
    /* @__PURE__ */ Object.create(null),
    vs(e),
    vs(n ?? {})
  ) : n;
}
function Al(e, n) {
  if (!e) return n;
  if (!n) return e;
  const o = dt(/* @__PURE__ */ Object.create(null), e);
  for (const u in n)
    o[u] = lt(e[u], n[u]);
  return o;
}
function Ou() {
  return {
    app: null,
    config: {
      isNativeTag: pa,
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
let Tl = 0;
function Rl(e, n) {
  return function(u, l = null) {
    ge(u) || (u = dt({}, u)), l != null && !Fe(l) && (l = null);
    const f = Ou(), d = /* @__PURE__ */ new WeakSet(), y = [];
    let v = !1;
    const R = f.app = {
      _uid: Tl++,
      _component: u,
      _props: l,
      _container: null,
      _context: f,
      _instance: null,
      version: hc,
      get config() {
        return f.config;
      },
      set config(A) {
      },
      use(A, ...K) {
        return d.has(A) || (A && ge(A.install) ? (d.add(A), A.install(R, ...K)) : ge(A) && (d.add(A), A(R, ...K))), R;
      },
      mixin(A) {
        return f.mixins.includes(A) || f.mixins.push(A), R;
      },
      component(A, K) {
        return K ? (f.components[A] = K, R) : f.components[A];
      },
      directive(A, K) {
        return K ? (f.directives[A] = K, R) : f.directives[A];
      },
      mount(A, K, V) {
        if (!v) {
          const te = R._ceVNode || gt(u, l);
          return te.appContext = f, V === !0 ? V = "svg" : V === !1 && (V = void 0), e(te, A, V), v = !0, R._container = A, A.__vue_app__ = R, Ro(te.component);
        }
      },
      onUnmount(A) {
        y.push(A);
      },
      unmount() {
        v && (Vt(
          y,
          R._instance,
          16
        ), e(null, R._container), delete R._container.__vue_app__);
      },
      provide(A, K) {
        return f.provides[A] = K, R;
      },
      runWithContext(A) {
        const K = Dn;
        Dn = R;
        try {
          return A();
        } finally {
          Dn = K;
        }
      }
    };
    return R;
  };
}
let Dn = null;
function Il(e, n) {
  if (Ze) {
    let o = Ze.provides;
    const u = Ze.parent && Ze.parent.provides;
    u === o && (o = Ze.provides = Object.create(u)), o[e] = n;
  }
}
function Vr(e, n, o = !1) {
  const u = Ze || st;
  if (u || Dn) {
    let l = Dn ? Dn._context.provides : u ? u.parent == null || u.ce ? u.vnode.appContext && u.vnode.appContext.provides : u.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && ge(n) ? n.call(u && u.proxy) : n;
  }
}
const Su = {}, Eu = () => Object.create(Su), Pu = (e) => Object.getPrototypeOf(e) === Su;
function Kl(e, n, o, u = !1) {
  const l = {}, f = Eu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ku(e, n, l, f);
  for (const d in e.propsOptions[0])
    d in l || (l[d] = void 0);
  o ? e.props = u ? l : Wa(l) : e.type.props ? e.props = l : e.props = f, e.attrs = f;
}
function jl(e, n, o, u) {
  const {
    props: l,
    attrs: f,
    vnode: { patchFlag: d }
  } = e, y = ke(l), [v] = e.propsOptions;
  let R = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (u || d > 0) && !(d & 16)
  ) {
    if (d & 8) {
      const A = e.vnode.dynamicProps;
      for (let K = 0; K < A.length; K++) {
        let V = A[K];
        if (ai(e.emitsOptions, V))
          continue;
        const te = n[V];
        if (v)
          if (Ae(f, V))
            te !== f[V] && (f[V] = te, R = !0);
          else {
            const ie = jt(V);
            l[ie] = oo(
              v,
              y,
              ie,
              te,
              e,
              !1
            );
          }
        else
          te !== f[V] && (f[V] = te, R = !0);
      }
    }
  } else {
    ku(e, n, l, f) && (R = !0);
    let A;
    for (const K in y)
      (!n || // for camelCase
      !Ae(n, K) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((A = cr(K)) === K || !Ae(n, A))) && (v ? o && // for camelCase
      (o[K] !== void 0 || // for kebab-case
      o[A] !== void 0) && (l[K] = oo(
        v,
        y,
        K,
        void 0,
        e,
        !0
      )) : delete l[K]);
    if (f !== y)
      for (const K in f)
        (!n || !Ae(n, K)) && (delete f[K], R = !0);
  }
  R && Nt(e.attrs, "set", "");
}
function ku(e, n, o, u) {
  const [l, f] = e.propsOptions;
  let d = !1, y;
  if (n)
    for (let v in n) {
      if (Xn(v))
        continue;
      const R = n[v];
      let A;
      l && Ae(l, A = jt(v)) ? !f || !f.includes(A) ? o[A] = R : (y || (y = {}))[A] = R : ai(e.emitsOptions, v) || (!(v in u) || R !== u[v]) && (u[v] = R, d = !0);
    }
  if (f) {
    const v = ke(o), R = y || Ie;
    for (let A = 0; A < f.length; A++) {
      const K = f[A];
      o[K] = oo(
        l,
        v,
        K,
        R[K],
        e,
        !Ae(R, K)
      );
    }
  }
  return d;
}
function oo(e, n, o, u, l, f) {
  const d = e[o];
  if (d != null) {
    const y = Ae(d, "default");
    if (y && u === void 0) {
      const v = d.default;
      if (d.type !== Function && !d.skipFactory && ge(v)) {
        const { propsDefaults: R } = l;
        if (o in R)
          u = R[o];
        else {
          const A = hr(l);
          u = R[o] = v.call(
            null,
            n
          ), A();
        }
      } else
        u = v;
      l.ce && l.ce._setProp(o, u);
    }
    d[
      0
      /* shouldCast */
    ] && (f && !y ? u = !1 : d[
      1
      /* shouldCastTrue */
    ] && (u === "" || u === cr(o)) && (u = !0));
  }
  return u;
}
const Dl = /* @__PURE__ */ new WeakMap();
function Cu(e, n, o = !1) {
  const u = o ? Dl : n.propsCache, l = u.get(e);
  if (l)
    return l;
  const f = e.props, d = {}, y = [];
  let v = !1;
  if (!ge(e)) {
    const A = (K) => {
      v = !0;
      const [V, te] = Cu(K, n, !0);
      dt(d, V), te && y.push(...te);
    };
    !o && n.mixins.length && n.mixins.forEach(A), e.extends && A(e.extends), e.mixins && e.mixins.forEach(A);
  }
  if (!f && !v)
    return Fe(e) && u.set(e, Tn), Tn;
  if (de(f))
    for (let A = 0; A < f.length; A++) {
      const K = jt(f[A]);
      xs(K) && (d[K] = Ie);
    }
  else if (f)
    for (const A in f) {
      const K = jt(A);
      if (xs(K)) {
        const V = f[A], te = d[K] = de(V) || ge(V) ? { type: V } : dt({}, V), ie = te.type;
        let re = !1, qe = !0;
        if (de(ie))
          for (let ve = 0; ve < ie.length; ++ve) {
            const Ee = ie[ve], Pe = ge(Ee) && Ee.name;
            if (Pe === "Boolean") {
              re = !0;
              break;
            } else Pe === "String" && (qe = !1);
          }
        else
          re = ge(ie) && ie.name === "Boolean";
        te[
          0
          /* shouldCast */
        ] = re, te[
          1
          /* shouldCastTrue */
        ] = qe, (re || Ae(te, "default")) && y.push(K);
      }
    }
  const R = [d, y];
  return Fe(e) && u.set(e, R), R;
}
function xs(e) {
  return e[0] !== "$" && !Xn(e);
}
const Po = (e) => e[0] === "_" || e === "$stable", ko = (e) => de(e) ? e.map(It) : [It(e)], Fl = (e, n, o) => {
  if (n._n)
    return n;
  const u = ll((...l) => ko(n(...l)), o);
  return u._c = !1, u;
}, Au = (e, n, o) => {
  const u = e._ctx;
  for (const l in e) {
    if (Po(l)) continue;
    const f = e[l];
    if (ge(f))
      n[l] = Fl(l, f, u);
    else if (f != null) {
      const d = ko(f);
      n[l] = () => d;
    }
  }
}, Tu = (e, n) => {
  const o = ko(n);
  e.slots.default = () => o;
}, Ru = (e, n, o) => {
  for (const u in n)
    (o || !Po(u)) && (e[u] = n[u]);
}, Ml = (e, n, o) => {
  const u = e.slots = Eu();
  if (e.vnode.shapeFlag & 32) {
    const l = n.__;
    l && Qi(u, "__", l, !0);
    const f = n._;
    f ? (Ru(u, n, o), o && Qi(u, "_", f, !0)) : Au(n, u);
  } else n && Tu(e, n);
}, Bl = (e, n, o) => {
  const { vnode: u, slots: l } = e;
  let f = !0, d = Ie;
  if (u.shapeFlag & 32) {
    const y = n._;
    y ? o && y === 1 ? f = !1 : Ru(l, n, o) : (f = !n.$stable, Au(n, l)), d = n;
  } else n && (Tu(e, n), d = { default: 1 });
  if (f)
    for (const y in l)
      !Po(y) && d[y] == null && delete l[y];
}, ct = Ql;
function Nc(e) {
  return Nl(e);
}
function Nl(e, n) {
  const o = ti();
  o.__VUE__ = !0;
  const {
    insert: u,
    remove: l,
    patchProp: f,
    createElement: d,
    createText: y,
    createComment: v,
    setText: R,
    setElementText: A,
    parentNode: K,
    nextSibling: V,
    setScopeId: te = Kt,
    insertStaticContent: ie
  } = e, re = (p, w, D, N = null, B = null, q = null, Q = void 0, z = null, H = !!w.dynamicChildren) => {
    if (p === w)
      return;
    p && !Jn(p, w) && (N = Wt(p), vt(p, B, q, !0), p = null), w.patchFlag === -2 && (H = !1, w.dynamicChildren = null);
    const { type: M, ref: ae, shapeFlag: G } = w;
    switch (M) {
      case li:
        qe(p, w, D, N);
        break;
      case $t:
        ve(p, w, D, N);
        break;
      case Ji:
        p == null && Ee(w, D, N, Q);
        break;
      case wt:
        et(
          p,
          w,
          D,
          N,
          B,
          q,
          Q,
          z,
          H
        );
        break;
      default:
        G & 1 ? Te(
          p,
          w,
          D,
          N,
          B,
          q,
          Q,
          z,
          H
        ) : G & 6 ? He(
          p,
          w,
          D,
          N,
          B,
          q,
          Q,
          z,
          H
        ) : (G & 64 || G & 128) && M.process(
          p,
          w,
          D,
          N,
          B,
          q,
          Q,
          z,
          H,
          Yt
        );
    }
    ae != null && B ? nr(ae, p && p.ref, q, w || p, !w) : ae == null && p && p.ref != null && nr(p.ref, null, q, p, !0);
  }, qe = (p, w, D, N) => {
    if (p == null)
      u(
        w.el = y(w.children),
        D,
        N
      );
    else {
      const B = w.el = p.el;
      w.children !== p.children && R(B, w.children);
    }
  }, ve = (p, w, D, N) => {
    p == null ? u(
      w.el = v(w.children || ""),
      D,
      N
    ) : w.el = p.el;
  }, Ee = (p, w, D, N) => {
    [p.el, p.anchor] = ie(
      p.children,
      w,
      D,
      N,
      p.el,
      p.anchor
    );
  }, Pe = ({ el: p, anchor: w }, D, N) => {
    let B;
    for (; p && p !== w; )
      B = V(p), u(p, D, N), p = B;
    u(w, D, N);
  }, ue = ({ el: p, anchor: w }) => {
    let D;
    for (; p && p !== w; )
      D = V(p), l(p), p = D;
    l(w);
  }, Te = (p, w, D, N, B, q, Q, z, H) => {
    w.type === "svg" ? Q = "svg" : w.type === "math" && (Q = "mathml"), p == null ? Re(
      w,
      D,
      N,
      B,
      q,
      Q,
      z,
      H
    ) : le(
      p,
      w,
      B,
      q,
      Q,
      z,
      H
    );
  }, Re = (p, w, D, N, B, q, Q, z) => {
    let H, M;
    const { props: ae, shapeFlag: G, transition: se, dirs: ce } = p;
    if (H = p.el = d(
      p.type,
      q,
      ae && ae.is,
      ae
    ), G & 8 ? A(H, p.children) : G & 16 && Y(
      p.children,
      H,
      null,
      N,
      B,
      zi(p, q),
      Q,
      z
    ), ce && pn(p, null, N, "created"), F(H, p, p.scopeId, Q, N), ae) {
      for (const we in ae)
        we !== "value" && !Xn(we) && f(H, we, null, ae[we], q, N);
      "value" in ae && f(H, "value", null, ae.value, q), (M = ae.onVnodeBeforeMount) && Tt(M, N, p);
    }
    ce && pn(p, null, N, "beforeMount");
    const pe = ql(B, se);
    pe && se.beforeEnter(H), u(H, w, D), ((M = ae && ae.onVnodeMounted) || pe || ce) && ct(() => {
      M && Tt(M, N, p), pe && se.enter(H), ce && pn(p, null, N, "mounted");
    }, B);
  }, F = (p, w, D, N, B) => {
    if (D && te(p, D), N)
      for (let q = 0; q < N.length; q++)
        te(p, N[q]);
    if (B) {
      let q = B.subTree;
      if (w === q || Du(q.type) && (q.ssContent === w || q.ssFallback === w)) {
        const Q = B.vnode;
        F(
          p,
          Q,
          Q.scopeId,
          Q.slotScopeIds,
          B.parent
        );
      }
    }
  }, Y = (p, w, D, N, B, q, Q, z, H = 0) => {
    for (let M = H; M < p.length; M++) {
      const ae = p[M] = z ? nn(p[M]) : It(p[M]);
      re(
        null,
        ae,
        w,
        D,
        N,
        B,
        q,
        Q,
        z
      );
    }
  }, le = (p, w, D, N, B, q, Q) => {
    const z = w.el = p.el;
    let { patchFlag: H, dynamicChildren: M, dirs: ae } = w;
    H |= p.patchFlag & 16;
    const G = p.props || Ie, se = w.props || Ie;
    let ce;
    if (D && yn(D, !1), (ce = se.onVnodeBeforeUpdate) && Tt(ce, D, w, p), ae && pn(w, p, D, "beforeUpdate"), D && yn(D, !0), (G.innerHTML && se.innerHTML == null || G.textContent && se.textContent == null) && A(z, ""), M ? me(
      p.dynamicChildren,
      M,
      z,
      D,
      N,
      zi(w, B),
      q
    ) : Q || _e(
      p,
      w,
      z,
      null,
      D,
      N,
      zi(w, B),
      q,
      !1
    ), H > 0) {
      if (H & 16)
        Ce(z, G, se, D, B);
      else if (H & 2 && G.class !== se.class && f(z, "class", null, se.class, B), H & 4 && f(z, "style", G.style, se.style, B), H & 8) {
        const pe = w.dynamicProps;
        for (let we = 0; we < pe.length; we++) {
          const Oe = pe[we], Ve = G[Oe], We = se[Oe];
          (We !== Ve || Oe === "value") && f(z, Oe, Ve, We, B, D);
        }
      }
      H & 1 && p.children !== w.children && A(z, w.children);
    } else !Q && M == null && Ce(z, G, se, D, B);
    ((ce = se.onVnodeUpdated) || ae) && ct(() => {
      ce && Tt(ce, D, w, p), ae && pn(w, p, D, "updated");
    }, N);
  }, me = (p, w, D, N, B, q, Q) => {
    for (let z = 0; z < w.length; z++) {
      const H = p[z], M = w[z], ae = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        H.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (H.type === wt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Jn(H, M) || // - In the case of a component, it could contain anything.
        H.shapeFlag & 198) ? K(H.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          D
        )
      );
      re(
        H,
        M,
        ae,
        null,
        N,
        B,
        q,
        Q,
        !0
      );
    }
  }, Ce = (p, w, D, N, B) => {
    if (w !== D) {
      if (w !== Ie)
        for (const q in w)
          !Xn(q) && !(q in D) && f(
            p,
            q,
            w[q],
            null,
            B,
            N
          );
      for (const q in D) {
        if (Xn(q)) continue;
        const Q = D[q], z = w[q];
        Q !== z && q !== "value" && f(p, q, z, Q, B, N);
      }
      "value" in D && f(p, "value", w.value, D.value, B);
    }
  }, et = (p, w, D, N, B, q, Q, z, H) => {
    const M = w.el = p ? p.el : y(""), ae = w.anchor = p ? p.anchor : y("");
    let { patchFlag: G, dynamicChildren: se, slotScopeIds: ce } = w;
    ce && (z = z ? z.concat(ce) : ce), p == null ? (u(M, D, N), u(ae, D, N), Y(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      D,
      ae,
      B,
      q,
      Q,
      z,
      H
    )) : G > 0 && G & 64 && se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (me(
      p.dynamicChildren,
      se,
      D,
      B,
      q,
      Q,
      z
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || B && w === B.subTree) && Co(
      p,
      w,
      !0
      /* shallow */
    )) : _e(
      p,
      w,
      D,
      ae,
      B,
      q,
      Q,
      z,
      H
    );
  }, He = (p, w, D, N, B, q, Q, z, H) => {
    w.slotScopeIds = z, p == null ? w.shapeFlag & 512 ? B.ctx.activate(
      w,
      D,
      N,
      Q,
      H
    ) : Et(
      w,
      D,
      N,
      B,
      q,
      Q,
      H
    ) : Pt(p, w, H);
  }, Et = (p, w, D, N, B, q, Q) => {
    const z = p.component = oc(
      p,
      N,
      B
    );
    if (du(p) && (z.ctx.renderer = Yt), sc(z, !1, Q), z.asyncDep) {
      if (B && B.registerDep(z, $e, Q), !p.el) {
        const H = z.subTree = gt($t);
        ve(null, H, w, D);
      }
    } else
      $e(
        z,
        p,
        w,
        D,
        B,
        q,
        Q
      );
  }, Pt = (p, w, D) => {
    const N = w.component = p.component;
    if (Gl(p, w, D))
      if (N.asyncDep && !N.asyncResolved) {
        je(N, w, D);
        return;
      } else
        N.next = w, N.update();
    else
      w.el = p.el, N.vnode = w;
  }, $e = (p, w, D, N, B, q, Q) => {
    const z = () => {
      if (p.isMounted) {
        let { next: G, bu: se, u: ce, parent: pe, vnode: we } = p;
        {
          const Ye = Iu(p);
          if (Ye) {
            G && (G.el = we.el, je(p, G, Q)), Ye.asyncDep.then(() => {
              p.isUnmounted || z();
            });
            return;
          }
        }
        let Oe = G, Ve;
        yn(p, !1), G ? (G.el = we.el, je(p, G, Q)) : G = we, se && Ui(se), (Ve = G.props && G.props.onVnodeBeforeUpdate) && Tt(Ve, pe, G, we), yn(p, !0);
        const We = Ss(p), ut = p.subTree;
        p.subTree = We, re(
          ut,
          We,
          // parent may have changed if it's in a teleport
          K(ut.el),
          // anchor may have changed if it's in a fragment
          Wt(ut),
          p,
          B,
          q
        ), G.el = We.el, Oe === null && Jl(p, We.el), ce && ct(ce, B), (Ve = G.props && G.props.onVnodeUpdated) && ct(
          () => Tt(Ve, pe, G, we),
          B
        );
      } else {
        let G;
        const { el: se, props: ce } = w, { bm: pe, m: we, parent: Oe, root: Ve, type: We } = p, ut = jn(w);
        yn(p, !1), pe && Ui(pe), !ut && (G = ce && ce.onVnodeBeforeMount) && Tt(G, Oe, w), yn(p, !0);
        {
          Ve.ce && // @ts-expect-error _def is private
          Ve.ce._def.shadowRoot !== !1 && Ve.ce._injectChildStyle(We);
          const Ye = p.subTree = Ss(p);
          re(
            null,
            Ye,
            D,
            N,
            p,
            B,
            q
          ), w.el = Ye.el;
        }
        if (we && ct(we, B), !ut && (G = ce && ce.onVnodeMounted)) {
          const Ye = w;
          ct(
            () => Tt(G, Oe, Ye),
            B
          );
        }
        (w.shapeFlag & 256 || Oe && jn(Oe.vnode) && Oe.vnode.shapeFlag & 256) && p.a && ct(p.a, B), p.isMounted = !0, w = D = N = null;
      }
    };
    p.scope.on();
    const H = p.effect = new Ns(z);
    p.scope.off();
    const M = p.update = H.run.bind(H), ae = p.job = H.runIfDirty.bind(H);
    ae.i = p, ae.id = p.uid, H.scheduler = () => So(ae), yn(p, !0), M();
  }, je = (p, w, D) => {
    w.component = p;
    const N = p.vnode.props;
    p.vnode = w, p.next = null, jl(p, w.props, N, D), Bl(p, w.children, D), Lt(), ds(p), Ut();
  }, _e = (p, w, D, N, B, q, Q, z, H = !1) => {
    const M = p && p.children, ae = p ? p.shapeFlag : 0, G = w.children, { patchFlag: se, shapeFlag: ce } = w;
    if (se > 0) {
      if (se & 128) {
        yt(
          M,
          G,
          D,
          N,
          B,
          q,
          Q,
          z,
          H
        );
        return;
      } else if (se & 256) {
        pt(
          M,
          G,
          D,
          N,
          B,
          q,
          Q,
          z,
          H
        );
        return;
      }
    }
    ce & 8 ? (ae & 16 && bt(M, B, q), G !== M && A(D, G)) : ae & 16 ? ce & 16 ? yt(
      M,
      G,
      D,
      N,
      B,
      q,
      Q,
      z,
      H
    ) : bt(M, B, q, !0) : (ae & 8 && A(D, ""), ce & 16 && Y(
      G,
      D,
      N,
      B,
      q,
      Q,
      z,
      H
    ));
  }, pt = (p, w, D, N, B, q, Q, z, H) => {
    p = p || Tn, w = w || Tn;
    const M = p.length, ae = w.length, G = Math.min(M, ae);
    let se;
    for (se = 0; se < G; se++) {
      const ce = w[se] = H ? nn(w[se]) : It(w[se]);
      re(
        p[se],
        ce,
        D,
        null,
        B,
        q,
        Q,
        z,
        H
      );
    }
    M > ae ? bt(
      p,
      B,
      q,
      !0,
      !1,
      G
    ) : Y(
      w,
      D,
      N,
      B,
      q,
      Q,
      z,
      H,
      G
    );
  }, yt = (p, w, D, N, B, q, Q, z, H) => {
    let M = 0;
    const ae = w.length;
    let G = p.length - 1, se = ae - 1;
    for (; M <= G && M <= se; ) {
      const ce = p[M], pe = w[M] = H ? nn(w[M]) : It(w[M]);
      if (Jn(ce, pe))
        re(
          ce,
          pe,
          D,
          null,
          B,
          q,
          Q,
          z,
          H
        );
      else
        break;
      M++;
    }
    for (; M <= G && M <= se; ) {
      const ce = p[G], pe = w[se] = H ? nn(w[se]) : It(w[se]);
      if (Jn(ce, pe))
        re(
          ce,
          pe,
          D,
          null,
          B,
          q,
          Q,
          z,
          H
        );
      else
        break;
      G--, se--;
    }
    if (M > G) {
      if (M <= se) {
        const ce = se + 1, pe = ce < ae ? w[ce].el : N;
        for (; M <= se; )
          re(
            null,
            w[M] = H ? nn(w[M]) : It(w[M]),
            D,
            pe,
            B,
            q,
            Q,
            z,
            H
          ), M++;
      }
    } else if (M > se)
      for (; M <= G; )
        vt(p[M], B, q, !0), M++;
    else {
      const ce = M, pe = M, we = /* @__PURE__ */ new Map();
      for (M = pe; M <= se; M++) {
        const Be = w[M] = H ? nn(w[M]) : It(w[M]);
        Be.key != null && we.set(Be.key, M);
      }
      let Oe, Ve = 0;
      const We = se - pe + 1;
      let ut = !1, Ye = 0;
      const kt = new Array(We);
      for (M = 0; M < We; M++) kt[M] = 0;
      for (M = ce; M <= G; M++) {
        const Be = p[M];
        if (Ve >= We) {
          vt(Be, B, q, !0);
          continue;
        }
        let ne;
        if (Be.key != null)
          ne = we.get(Be.key);
        else
          for (Oe = pe; Oe <= se; Oe++)
            if (kt[Oe - pe] === 0 && Jn(Be, w[Oe])) {
              ne = Oe;
              break;
            }
        ne === void 0 ? vt(Be, B, q, !0) : (kt[ne - pe] = M + 1, ne >= Ye ? Ye = ne : ut = !0, re(
          Be,
          w[ne],
          D,
          null,
          B,
          q,
          Q,
          z,
          H
        ), Ve++);
      }
      const bn = ut ? Ll(kt) : Tn;
      for (Oe = bn.length - 1, M = We - 1; M >= 0; M--) {
        const Be = pe + M, ne = w[Be], zt = Be + 1 < ae ? w[Be + 1].el : N;
        kt[M] === 0 ? re(
          null,
          ne,
          D,
          zt,
          B,
          q,
          Q,
          z,
          H
        ) : ut && (Oe < 0 || M !== bn[Oe] ? Ot(ne, D, zt, 2) : Oe--);
      }
    }
  }, Ot = (p, w, D, N, B = null) => {
    const { el: q, type: Q, transition: z, children: H, shapeFlag: M } = p;
    if (M & 6) {
      Ot(p.component.subTree, w, D, N);
      return;
    }
    if (M & 128) {
      p.suspense.move(w, D, N);
      return;
    }
    if (M & 64) {
      Q.move(p, w, D, Yt);
      return;
    }
    if (Q === wt) {
      u(q, w, D);
      for (let G = 0; G < H.length; G++)
        Ot(H[G], w, D, N);
      u(p.anchor, w, D);
      return;
    }
    if (Q === Ji) {
      Pe(p, w, D);
      return;
    }
    if (N !== 2 && M & 1 && z)
      if (N === 0)
        z.beforeEnter(q), u(q, w, D), ct(() => z.enter(q), B);
      else {
        const { leave: G, delayLeave: se, afterLeave: ce } = z, pe = () => {
          p.ctx.isUnmounted ? l(q) : u(q, w, D);
        }, we = () => {
          G(q, () => {
            pe(), ce && ce();
          });
        };
        se ? se(q, pe, we) : we();
      }
    else
      u(q, w, D);
  }, vt = (p, w, D, N = !1, B = !1) => {
    const {
      type: q,
      props: Q,
      ref: z,
      children: H,
      dynamicChildren: M,
      shapeFlag: ae,
      patchFlag: G,
      dirs: se,
      cacheIndex: ce
    } = p;
    if (G === -2 && (B = !1), z != null && (Lt(), nr(z, null, D, p, !0), Ut()), ce != null && (w.renderCache[ce] = void 0), ae & 256) {
      w.ctx.deactivate(p);
      return;
    }
    const pe = ae & 1 && se, we = !jn(p);
    let Oe;
    if (we && (Oe = Q && Q.onVnodeBeforeUnmount) && Tt(Oe, w, p), ae & 6)
      vn(p.component, D, N);
    else {
      if (ae & 128) {
        p.suspense.unmount(D, N);
        return;
      }
      pe && pn(p, null, w, "beforeUnmount"), ae & 64 ? p.type.remove(
        p,
        w,
        D,
        Yt,
        N
      ) : M && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !M.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (q !== wt || G > 0 && G & 64) ? bt(
        M,
        w,
        D,
        !1,
        !0
      ) : (q === wt && G & 384 || !B && ae & 16) && bt(H, w, D), N && Dt(p);
    }
    (we && (Oe = Q && Q.onVnodeUnmounted) || pe) && ct(() => {
      Oe && Tt(Oe, w, p), pe && pn(p, null, w, "unmounted");
    }, D);
  }, Dt = (p) => {
    const { type: w, el: D, anchor: N, transition: B } = p;
    if (w === wt) {
      dr(D, N);
      return;
    }
    if (w === Ji) {
      ue(p);
      return;
    }
    const q = () => {
      l(D), B && !B.persisted && B.afterLeave && B.afterLeave();
    };
    if (p.shapeFlag & 1 && B && !B.persisted) {
      const { leave: Q, delayLeave: z } = B, H = () => Q(D, q);
      z ? z(p.el, q, H) : H();
    } else
      q();
  }, dr = (p, w) => {
    let D;
    for (; p !== w; )
      D = V(p), l(p), p = D;
    l(w);
  }, vn = (p, w, D) => {
    const {
      bum: N,
      scope: B,
      job: q,
      subTree: Q,
      um: z,
      m: H,
      a: M,
      parent: ae,
      slots: { __: G }
    } = p;
    Os(H), Os(M), N && Ui(N), ae && de(G) && G.forEach((se) => {
      ae.renderCache[se] = void 0;
    }), B.stop(), q && (q.flags |= 8, vt(Q, p, w, D)), z && ct(z, w), ct(() => {
      p.isUnmounted = !0;
    }, w), w && w.pendingBranch && !w.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === w.pendingId && (w.deps--, w.deps === 0 && w.resolve());
  }, bt = (p, w, D, N = !1, B = !1, q = 0) => {
    for (let Q = q; Q < p.length; Q++)
      vt(p[Q], w, D, N, B);
  }, Wt = (p) => {
    if (p.shapeFlag & 6)
      return Wt(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const w = V(p.anchor || p.el), D = w && w[lu];
    return D ? V(D) : w;
  };
  let Bn = !1;
  const oe = (p, w, D) => {
    p == null ? w._vnode && vt(w._vnode, null, null, !0) : re(
      w._vnode || null,
      p,
      w,
      null,
      null,
      null,
      D
    ), w._vnode = p, Bn || (Bn = !0, ds(), su(), Bn = !1);
  }, Yt = {
    p: re,
    um: vt,
    m: Ot,
    r: Dt,
    mt: Et,
    mc: Y,
    pc: _e,
    pbc: me,
    n: Wt,
    o: e
  };
  return {
    render: oe,
    hydrate: void 0,
    createApp: Rl(oe)
  };
}
function zi({ type: e, props: n }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && n && n.encoding && n.encoding.includes("html") ? void 0 : o;
}
function yn({ effect: e, job: n }, o) {
  o ? (e.flags |= 32, n.flags |= 4) : (e.flags &= -33, n.flags &= -5);
}
function ql(e, n) {
  return (!e || e && !e.pendingBranch) && n && !n.persisted;
}
function Co(e, n, o = !1) {
  const u = e.children, l = n.children;
  if (de(u) && de(l))
    for (let f = 0; f < u.length; f++) {
      const d = u[f];
      let y = l[f];
      y.shapeFlag & 1 && !y.dynamicChildren && ((y.patchFlag <= 0 || y.patchFlag === 32) && (y = l[f] = nn(l[f]), y.el = d.el), !o && y.patchFlag !== -2 && Co(d, y)), y.type === li && (y.el = d.el), y.type === $t && !y.el && (y.el = d.el);
    }
}
function Ll(e) {
  const n = e.slice(), o = [0];
  let u, l, f, d, y;
  const v = e.length;
  for (u = 0; u < v; u++) {
    const R = e[u];
    if (R !== 0) {
      if (l = o[o.length - 1], e[l] < R) {
        n[u] = l, o.push(u);
        continue;
      }
      for (f = 0, d = o.length - 1; f < d; )
        y = f + d >> 1, e[o[y]] < R ? f = y + 1 : d = y;
      R < e[o[f]] && (f > 0 && (n[u] = o[f - 1]), o[f] = u);
    }
  }
  for (f = o.length, d = o[f - 1]; f-- > 0; )
    o[f] = d, d = n[d];
  return o;
}
function Iu(e) {
  const n = e.subTree.component;
  if (n)
    return n.asyncDep && !n.asyncResolved ? n : Iu(n);
}
function Os(e) {
  if (e)
    for (let n = 0; n < e.length; n++)
      e[n].flags |= 8;
}
const Ul = Symbol.for("v-scx"), Vl = () => Vr(Ul);
function qc(e, n) {
  return Ao(e, null, n);
}
function Gi(e, n, o) {
  return Ao(e, n, o);
}
function Ao(e, n, o = Ie) {
  const { immediate: u, deep: l, flush: f, once: d } = o, y = dt({}, o), v = n && u || !n && f !== "post";
  let R;
  if (lr) {
    if (f === "sync") {
      const te = Vl();
      R = te.__watcherHandles || (te.__watcherHandles = []);
    } else if (!v) {
      const te = () => {
      };
      return te.stop = Kt, te.resume = Kt, te.pause = Kt, te;
    }
  }
  const A = Ze;
  y.call = (te, ie, re) => Vt(te, A, ie, re);
  let K = !1;
  f === "post" ? y.scheduler = (te) => {
    ct(te, A && A.suspense);
  } : f !== "sync" && (K = !0, y.scheduler = (te, ie) => {
    ie ? te() : So(te);
  }), y.augmentJob = (te) => {
    n && (te.flags |= 4), K && (te.flags |= 2, A && (te.id = A.uid, te.i = A));
  };
  const V = il(e, n, y);
  return lr && (R ? R.push(V) : v && V()), V;
}
function $l(e, n, o) {
  const u = this.proxy, l = Qe(e) ? e.includes(".") ? Ku(u, e) : () => u[e] : e.bind(u, u);
  let f;
  ge(n) ? f = n : (f = n.handler, o = n);
  const d = hr(this), y = Ao(l, f.bind(u), o);
  return d(), y;
}
function Ku(e, n) {
  const o = n.split(".");
  return () => {
    let u = e;
    for (let l = 0; l < o.length && u; l++)
      u = u[o[l]];
    return u;
  };
}
const Hl = (e, n) => n === "modelValue" || n === "model-value" ? e.modelModifiers : e[`${n}Modifiers`] || e[`${jt(n)}Modifiers`] || e[`${cr(n)}Modifiers`];
function Wl(e, n, ...o) {
  if (e.isUnmounted) return;
  const u = e.vnode.props || Ie;
  let l = o;
  const f = n.startsWith("update:"), d = f && Hl(u, n.slice(7));
  d && (d.trim && (l = o.map((A) => Qe(A) ? A.trim() : A)), d.number && (l = o.map(ba)));
  let y, v = u[y = Li(n)] || // also try camelCase event handler (#2249)
  u[y = Li(jt(n))];
  !v && f && (v = u[y = Li(cr(n))]), v && Vt(
    v,
    e,
    6,
    l
  );
  const R = u[y + "Once"];
  if (R) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[y])
      return;
    e.emitted[y] = !0, Vt(
      R,
      e,
      6,
      l
    );
  }
}
function ju(e, n, o = !1) {
  const u = n.emitsCache, l = u.get(e);
  if (l !== void 0)
    return l;
  const f = e.emits;
  let d = {}, y = !1;
  if (!ge(e)) {
    const v = (R) => {
      const A = ju(R, n, !0);
      A && (y = !0, dt(d, A));
    };
    !o && n.mixins.length && n.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  return !f && !y ? (Fe(e) && u.set(e, null), null) : (de(f) ? f.forEach((v) => d[v] = null) : dt(d, f), Fe(e) && u.set(e, d), d);
}
function ai(e, n) {
  return !e || !ho(n) ? !1 : (n = n.slice(2).replace(/Once$/, ""), Ae(e, n[0].toLowerCase() + n.slice(1)) || Ae(e, cr(n)) || Ae(e, n));
}
function Ss(e) {
  const {
    type: n,
    vnode: o,
    proxy: u,
    withProxy: l,
    propsOptions: [f],
    slots: d,
    attrs: y,
    emit: v,
    render: R,
    renderCache: A,
    props: K,
    data: V,
    setupState: te,
    ctx: ie,
    inheritAttrs: re
  } = e, qe = Jr(e);
  let ve, Ee;
  try {
    if (o.shapeFlag & 4) {
      const ue = l || u, Te = ue;
      ve = It(
        R.call(
          Te,
          ue,
          A,
          K,
          te,
          V,
          ie
        )
      ), Ee = y;
    } else {
      const ue = n;
      ve = It(
        ue.length > 1 ? ue(
          K,
          { attrs: y, slots: d, emit: v }
        ) : ue(
          K,
          null
        )
      ), Ee = n.props ? y : Yl(y);
    }
  } catch (ue) {
    ir.length = 0, si(ue, e, 1), ve = gt($t);
  }
  let Pe = ve;
  if (Ee && re !== !1) {
    const ue = Object.keys(Ee), { shapeFlag: Te } = Pe;
    ue.length && Te & 7 && (f && ue.some(Rs) && (Ee = zl(
      Ee,
      f
    )), Pe = Mn(Pe, Ee, !1, !0));
  }
  return o.dirs && (Pe = Mn(Pe, null, !1, !0), Pe.dirs = Pe.dirs ? Pe.dirs.concat(o.dirs) : o.dirs), o.transition && Eo(Pe, o.transition), ve = Pe, Jr(qe), ve;
}
const Yl = (e) => {
  let n;
  for (const o in e)
    (o === "class" || o === "style" || ho(o)) && ((n || (n = {}))[o] = e[o]);
  return n;
}, zl = (e, n) => {
  const o = {};
  for (const u in e)
    (!Rs(u) || !(u.slice(9) in n)) && (o[u] = e[u]);
  return o;
};
function Gl(e, n, o) {
  const { props: u, children: l, component: f } = e, { props: d, children: y, patchFlag: v } = n, R = f.emitsOptions;
  if (n.dirs || n.transition)
    return !0;
  if (o && v >= 0) {
    if (v & 1024)
      return !0;
    if (v & 16)
      return u ? Es(u, d, R) : !!d;
    if (v & 8) {
      const A = n.dynamicProps;
      for (let K = 0; K < A.length; K++) {
        const V = A[K];
        if (d[V] !== u[V] && !ai(R, V))
          return !0;
      }
    }
  } else
    return (l || y) && (!y || !y.$stable) ? !0 : u === d ? !1 : u ? d ? Es(u, d, R) : !0 : !!d;
  return !1;
}
function Es(e, n, o) {
  const u = Object.keys(n);
  if (u.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < u.length; l++) {
    const f = u[l];
    if (n[f] !== e[f] && !ai(o, f))
      return !0;
  }
  return !1;
}
function Jl({ vnode: e, parent: n }, o) {
  for (; n; ) {
    const u = n.subTree;
    if (u.suspense && u.suspense.activeBranch === e && (u.el = e.el), u === e)
      (e = n.vnode).el = o, n = n.parent;
    else
      break;
  }
}
const Du = (e) => e.__isSuspense;
function Ql(e, n) {
  n && n.pendingBranch ? de(e) ? n.effects.push(...e) : n.effects.push(e) : al(e);
}
const wt = Symbol.for("v-fgt"), li = Symbol.for("v-txt"), $t = Symbol.for("v-cmt"), Ji = Symbol.for("v-stc"), ir = [];
let ht = null;
function so(e = !1) {
  ir.push(ht = e ? null : []);
}
function Xl() {
  ir.pop(), ht = ir[ir.length - 1] || null;
}
let Fn = 1;
function Ps(e, n = !1) {
  Fn += e, e < 0 && ht && n && (ht.hasOnce = !0);
}
function Fu(e) {
  return e.dynamicChildren = Fn > 0 ? ht || Tn : null, Xl(), Fn > 0 && ht && ht.push(e), e;
}
function Lc(e, n, o, u, l, f) {
  return Fu(
    Bu(
      e,
      n,
      o,
      u,
      l,
      f,
      !0
    )
  );
}
function uo(e, n, o, u, l) {
  return Fu(
    gt(
      e,
      n,
      o,
      u,
      l,
      !0
    )
  );
}
function ar(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Jn(e, n) {
  return e.type === n.type && e.key === n.key;
}
const Mu = ({ key: e }) => e ?? null, $r = ({
  ref: e,
  ref_key: n,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? Qe(e) || Je(e) || ge(e) ? { i: st, r: e, k: n, f: !!o } : e : null);
function Bu(e, n = null, o = null, u = 0, l = null, f = e === wt ? 0 : 1, d = !1, y = !1) {
  const v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: n,
    key: n && Mu(n),
    ref: n && $r(n),
    scopeId: au,
    slotScopeIds: null,
    children: o,
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
    shapeFlag: f,
    patchFlag: u,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: st
  };
  return y ? (To(v, o), f & 128 && e.normalize(v)) : o && (v.shapeFlag |= Qe(o) ? 8 : 16), Fn > 0 && // avoid a block node from tracking itself
  !d && // has current parent block
  ht && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (v.patchFlag > 0 || f & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  v.patchFlag !== 32 && ht.push(v), v;
}
const gt = Zl;
function Zl(e, n = null, o = null, u = 0, l = null, f = !1) {
  if ((!e || e === mu) && (e = $t), ar(e)) {
    const y = Mn(
      e,
      n,
      !0
      /* mergeRef: true */
    );
    return o && To(y, o), Fn > 0 && !f && ht && (y.shapeFlag & 6 ? ht[ht.indexOf(e)] = y : ht.push(y)), y.patchFlag = -2, y;
  }
  if (cc(e) && (e = e.__vccOpts), n) {
    n = ec(n);
    let { class: y, style: v } = n;
    y && !Qe(y) && (n.class = ri(y)), Fe(v) && (Oo(v) && !de(v) && (v = dt({}, v)), n.style = ni(v));
  }
  const d = Qe(e) ? 1 : Du(e) ? 128 : cl(e) ? 64 : Fe(e) ? 4 : ge(e) ? 2 : 0;
  return Bu(
    e,
    n,
    o,
    u,
    l,
    d,
    f,
    !0
  );
}
function ec(e) {
  return e ? Oo(e) || Pu(e) ? dt({}, e) : e : null;
}
function Mn(e, n, o = !1, u = !1) {
  const { props: l, ref: f, patchFlag: d, children: y, transition: v } = e, R = n ? nc(l || {}, n) : l, A = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: R,
    key: R && Mu(R),
    ref: n && n.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && f ? de(f) ? f.concat($r(n)) : [f, $r(n)] : $r(n)
    ) : f,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: y,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: n && e.type !== wt ? d === -1 ? 16 : d | 16 : d,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: v,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Mn(e.ssContent),
    ssFallback: e.ssFallback && Mn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return v && u && Eo(
    A,
    v.clone(A)
  ), A;
}
function tc(e = " ", n = 0) {
  return gt(li, null, e, n);
}
function Uc(e = "", n = !1) {
  return n ? (so(), uo($t, null, e)) : gt($t, null, e);
}
function It(e) {
  return e == null || typeof e == "boolean" ? gt($t) : de(e) ? gt(
    wt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ar(e) ? nn(e) : gt(li, null, String(e));
}
function nn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Mn(e);
}
function To(e, n) {
  let o = 0;
  const { shapeFlag: u } = e;
  if (n == null)
    n = null;
  else if (de(n))
    o = 16;
  else if (typeof n == "object")
    if (u & 65) {
      const l = n.default;
      l && (l._c && (l._d = !1), To(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = n._;
      !l && !Pu(n) ? n._ctx = st : l === 3 && st && (st.slots._ === 1 ? n._ = 1 : (n._ = 2, e.patchFlag |= 1024));
    }
  else ge(n) ? (n = { default: n, _ctx: st }, o = 32) : (n = String(n), u & 64 ? (o = 16, n = [tc(n)]) : o = 8);
  e.children = n, e.shapeFlag |= o;
}
function nc(...e) {
  const n = {};
  for (let o = 0; o < e.length; o++) {
    const u = e[o];
    for (const l in u)
      if (l === "class")
        n.class !== u.class && (n.class = ri([n.class, u.class]));
      else if (l === "style")
        n.style = ni([n.style, u.style]);
      else if (ho(l)) {
        const f = n[l], d = u[l];
        d && f !== d && !(de(f) && f.includes(d)) && (n[l] = f ? [].concat(f, d) : d);
      } else l !== "" && (n[l] = u[l]);
  }
  return n;
}
function Tt(e, n, o, u = null) {
  Vt(e, n, 7, [
    o,
    u
  ]);
}
const rc = Ou();
let ic = 0;
function oc(e, n, o) {
  const u = e.type, l = (n ? n.appContext : e.appContext) || rc, f = {
    uid: ic++,
    vnode: e,
    type: u,
    parent: n,
    appContext: l,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Bs(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: n ? n.provides : Object.create(l.provides),
    ids: n ? n.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Cu(u, l),
    emitsOptions: ju(u, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ie,
    // inheritAttrs
    inheritAttrs: u.inheritAttrs,
    // state
    ctx: Ie,
    data: Ie,
    props: Ie,
    attrs: Ie,
    slots: Ie,
    refs: Ie,
    setupState: Ie,
    setupContext: null,
    // suspense related
    suspense: o,
    suspenseId: o ? o.pendingId : 0,
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
  return f.ctx = { _: f }, f.root = n ? n.root : f, f.emit = Wl.bind(null, f), e.ce && e.ce(f), f;
}
let Ze = null;
const Nu = () => Ze || st;
let Xr, ao;
{
  const e = ti(), n = (o, u) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(u), (f) => {
      l.length > 1 ? l.forEach((d) => d(f)) : l[0](f);
    };
  };
  Xr = n(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Ze = o
  ), ao = n(
    "__VUE_SSR_SETTERS__",
    (o) => lr = o
  );
}
const hr = (e) => {
  const n = Ze;
  return Xr(e), e.scope.on(), () => {
    e.scope.off(), Xr(n);
  };
}, ks = () => {
  Ze && Ze.scope.off(), Xr(null);
};
function qu(e) {
  return e.vnode.shapeFlag & 4;
}
let lr = !1;
function sc(e, n = !1, o = !1) {
  n && ao(n);
  const { props: u, children: l } = e.vnode, f = qu(e);
  Kl(e, u, f, n), Ml(e, l, o || n);
  const d = f ? uc(e, n) : void 0;
  return n && ao(!1), d;
}
function uc(e, n) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Sl);
  const { setup: u } = o;
  if (u) {
    Lt();
    const l = e.setupContext = u.length > 1 ? Uu(e) : null, f = hr(e), d = fr(
      u,
      e,
      0,
      [
        e.props,
        l
      ]
    ), y = Ks(d);
    if (Ut(), f(), (y || e.sp) && !jn(e) && hu(e), y) {
      if (d.then(ks, ks), n)
        return d.then((v) => {
          Cs(e, v);
        }).catch((v) => {
          si(v, e, 0);
        });
      e.asyncDep = d;
    } else
      Cs(e, d);
  } else
    Lu(e);
}
function Cs(e, n, o) {
  ge(n) ? e.type.__ssrInlineRender ? e.ssrRender = n : e.render = n : Fe(n) && (e.setupState = nu(n)), Lu(e);
}
function Lu(e, n, o) {
  const u = e.type;
  e.render || (e.render = u.render || Kt);
  {
    const l = hr(e);
    Lt();
    try {
      El(e);
    } finally {
      Ut(), l();
    }
  }
}
const ac = {
  get(e, n) {
    return ot(e, "get", ""), e[n];
  }
};
function Uu(e) {
  const n = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, ac),
    slots: e.slots,
    emit: e.emit,
    expose: n
  };
}
function Ro(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(nu(Ya(e.exposed)), {
    get(n, o) {
      if (o in n)
        return n[o];
      if (o in rr)
        return rr[o](e);
    },
    has(n, o) {
      return o in n || o in rr;
    }
  })) : e.proxy;
}
function lc(e, n = !0) {
  return ge(e) ? e.displayName || e.name : e.name || n && e.__name;
}
function cc(e) {
  return ge(e) && "__vccOpts" in e;
}
const fc = (e, n) => nl(e, n, lr);
function Vc(e, n, o) {
  const u = arguments.length;
  return u === 2 ? Fe(n) && !de(n) ? ar(n) ? gt(e, null, [n]) : gt(e, n) : gt(e, null, n) : (u > 3 ? o = Array.prototype.slice.call(arguments, 2) : u === 3 && ar(o) && (o = [o]), gt(e, n, o));
}
function $c(e, n) {
  const o = e.memo;
  if (o.length != n.length)
    return !1;
  for (let u = 0; u < o.length; u++)
    if (qt(o[u], n[u]))
      return !1;
  return Fn > 0 && ht && ht.push(e), !0;
}
const hc = "3.5.17";
function Hc(e) {
  return {
    addRecord: n,
    updateRecord: o,
    deleteRecord: u,
    createRecord: l,
    findRecordById: A,
    findRecordsByTagName: K,
    findChildRecords: Ee,
    findChildRecordsByTagName: Pe,
    findChildRecordsWithinDepthAndGivenTagName: Te,
    instantiate: V,
    ensureRelationship: d,
    findRootSCL: v,
    substationExists: R,
    recordExists: f,
    findOneRecordByAttribute: re,
    findAllRecordsByAttribute: qe,
    close: Re,
    db: e
  };
  async function n(F) {
    const Y = {
      ...F,
      id: crypto.randomUUID()
    };
    try {
      const le = await e.table(Y.tagName).add(Y), me = await e.table(Y.tagName).get(le);
      if (!me) {
        const Ce = { msg: "could not find added record", table: Y.tagName, addedId: le };
        throw console.error(Ce), new Error(JSON.stringify(Ce));
      }
      return me;
    } catch (le) {
      const me = {
        msg: "could not add record",
        db: e.name,
        table: Y.tagName,
        recordToAdd: Y,
        err: le
      };
      throw console.error(me), new Error(JSON.stringify(me));
    }
  }
  async function o(F) {
    try {
      if (await e.table(F.tagName).update(F.id, F) < 1) {
        const le = { msg: "nothing has been updated", record: F };
        throw console.error(le), new Error(JSON.stringify(le));
      }
    } catch (Y) {
      console.error(Y);
    }
  }
  async function u(F) {
    try {
      if (F.children)
        for (const le of F.children) {
          const me = await A(le.id, le.tagName);
          if (!me) {
            console.warn({
              msg: "deleteRecord: child relationship found but not child record, continuing",
              child: le
            });
            continue;
          }
          await u(me);
        }
      const Y = await ve(F);
      Y && await y(Y, F), await e.table(F.tagName).delete(F.id);
    } catch (Y) {
      console.error(Y);
    }
  }
  async function l(F, Y) {
    try {
      const le = await e.table(F.tagName).add(F), me = await e.table(F.tagName).get(le);
      if (!me) {
        console.error("could not find inserted record by id", le);
        return;
      }
      if (!Y)
        return;
      await d(Y, me);
    } catch (le) {
      console.error("could not create record:", le);
    }
  }
  async function f(F) {
    return await e.table(F.tagName).where({ id: F.id }).count() > 0;
  }
  async function d(F, Y) {
    const le = F.children?.some(
      (Ce) => Ce.id === Y.id && Ce.tagName === Y.tagName
    ), me = Y.parent?.id === F.id && Y.parent?.tagName === F.tagName;
    le || (F.children || (F.children = []), F.children.push({
      id: Y.id,
      tagName: Y.tagName
    }), await e.table(F.tagName).update(F.id, F)), me || (Y.parent = {
      id: F.id,
      tagName: F.tagName
    }, await e.table(Y.tagName).update(Y.id, Y));
  }
  async function y(F, Y) {
    Y.parent = null, await o(Y), F.children && (F.children = F.children.filter((le) => le.id !== Y.id), await o(F));
  }
  async function v() {
    const F = await e.table("SCL").count();
    if (F === 0) throw new Error("tfindRootSCLhere is no SCL element");
    if (F > 1) throw new Error("there are multiple SCL elements; there can be only one");
    const Y = await e.table("SCL").orderBy("id").first();
    if (!Y) throw new Error("no root scl found");
    return Y;
  }
  async function R(F) {
    return await e.table("Substation").filter(
      (me) => !!me.attributes?.some((Ce) => Ce.name === "name" && Ce.value === F)
    ).count() > 0;
  }
  async function A(F, Y) {
    return await e.table(Y).get(F);
  }
  async function K(F) {
    return await e.table(F).toArray();
  }
  function V(F) {
    const Y = te(F);
    if (!Y)
      throw console.error('record does not have a "uuid" to move to "templateUUID"', F), new Error('record does not have a "uuid" to move to "templateUUID"');
    F.attributes?.push({ name: "templateUuid", value: Y }), ie(F);
  }
  function te(F) {
    const Y = F.attributes?.find((le) => le.name === "uuid");
    if (Y)
      return Y.value;
  }
  function ie(F) {
    F.attributes || (F.attributes = []);
    const Y = crypto.randomUUID(), le = F.attributes.findIndex((Ce) => Ce.name === "uuid");
    le >= 0 ? F.attributes[le].value = Y : F.attributes.push({ name: "uuid", value: Y });
  }
  async function re(F, Y) {
    return dc(e, F, Y);
  }
  async function qe(F, Y) {
    return pc(e, F, Y);
  }
  async function ve(F) {
    if (!F.parent)
      return;
    const Y = await e.table(F.parent.tagName).get(F.parent.id);
    if (!Y) {
      console.warn({
        msg: "finding parent record, there wa a parent relationship but parent was not found, returning",
        parent: F.parent
      });
      return;
    }
    return Y;
  }
  async function Ee(F) {
    return Pe(F, []);
  }
  async function Pe(F, Y) {
    if (!F.children || F.children.length === 0)
      return [];
    let le = F.children;
    return Y.length > 0 && (le = F.children.filter((Ce) => Y.includes(Ce.tagName))), (await Promise.all(
      le.map(async (Ce) => {
        const et = Ce.tagName, He = Ce.id, Et = await e.table(et).get({ id: He });
        return Et || console.warn("could not find element", { id: He, table: et }), Et;
      })
    )).filter(Boolean);
  }
  async function Te(F, Y = ue, le = []) {
    const me = [];
    let Ce = [F];
    for (let et = 0; et < Y; et++) {
      const He = [];
      for (const Et of Ce) {
        const Pt = await Pe(Et, le);
        Pt.length !== 0 && (He.push(...Pt), me.push(...Pt));
      }
      Ce = [...He];
    }
    return me;
  }
  function Re() {
    e.close();
  }
}
function Wc(e, n) {
  return e.attributes?.find((o) => o.name === n);
}
function Yc(e, n, o) {
  e.attributes || (e.attributes = []);
  const u = e.attributes?.findIndex((f) => f.name === n);
  u >= 0 ? e.attributes[u].value = o : e.attributes.push({ name: n, value: o });
}
async function dc(e, n, o) {
  try {
    return await e.table(n).filter(
      (l) => !!l.attributes?.some((f) => f.name === o.name && f.value === o.value)
    ).first();
  } catch (u) {
    console.error({ msg: "could not find record by attribute", tagName: n, attr: o, err: u });
  }
}
async function pc(e, n, o) {
  try {
    return await e.table(n).filter(
      (l) => !!l.attributes?.some((f) => f.name === o.name && f.value === o.value)
    ).toArray();
  } catch (u) {
    console.error({ msg: "could not find record by attribute", tagName: n, attr: o, err: u });
  }
  return [];
}
var yc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hr = { exports: {} }, mc = Hr.exports, As;
function vc() {
  return As || (As = 1, function(e, n) {
    (function(o, u) {
      e.exports = u();
    })(mc, function() {
      var o = function(t, r) {
        return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, s) {
          i.__proto__ = s;
        } || function(i, s) {
          for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (i[a] = s[a]);
        })(t, r);
      }, u = function() {
        return (u = Object.assign || function(t) {
          for (var r, i = 1, s = arguments.length; i < s; i++) for (var a in r = arguments[i]) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
          return t;
        }).apply(this, arguments);
      };
      function l(t, r, i) {
        for (var s, a = 0, c = r.length; a < c; a++) !s && a in r || ((s = s || Array.prototype.slice.call(r, 0, a))[a] = r[a]);
        return t.concat(s || Array.prototype.slice.call(r));
      }
      var f = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : yc, d = Object.keys, y = Array.isArray;
      function v(t, r) {
        return typeof r != "object" || d(r).forEach(function(i) {
          t[i] = r[i];
        }), t;
      }
      typeof Promise > "u" || f.Promise || (f.Promise = Promise);
      var R = Object.getPrototypeOf, A = {}.hasOwnProperty;
      function K(t, r) {
        return A.call(t, r);
      }
      function V(t, r) {
        typeof r == "function" && (r = r(R(t))), (typeof Reflect > "u" ? d : Reflect.ownKeys)(r).forEach(function(i) {
          ie(t, i, r[i]);
        });
      }
      var te = Object.defineProperty;
      function ie(t, r, i, s) {
        te(t, r, v(i && K(i, "get") && typeof i.get == "function" ? { get: i.get, set: i.set, configurable: !0 } : { value: i, configurable: !0, writable: !0 }, s));
      }
      function re(t) {
        return { from: function(r) {
          return t.prototype = Object.create(r.prototype), ie(t.prototype, "constructor", t), { extend: V.bind(null, t.prototype) };
        } };
      }
      var qe = Object.getOwnPropertyDescriptor, ve = [].slice;
      function Ee(t, r, i) {
        return ve.call(t, r, i);
      }
      function Pe(t, r) {
        return r(t);
      }
      function ue(t) {
        if (!t) throw new Error("Assertion Failed");
      }
      function Te(t) {
        f.setImmediate ? setImmediate(t) : setTimeout(t, 0);
      }
      function Re(t, r) {
        if (typeof r == "string" && K(t, r)) return t[r];
        if (!r) return t;
        if (typeof r != "string") {
          for (var i = [], s = 0, a = r.length; s < a; ++s) {
            var c = Re(t, r[s]);
            i.push(c);
          }
          return i;
        }
        var h = r.indexOf(".");
        if (h !== -1) {
          var g = t[r.substr(0, h)];
          return g == null ? void 0 : Re(g, r.substr(h + 1));
        }
      }
      function F(t, r, i) {
        if (t && r !== void 0 && !("isFrozen" in Object && Object.isFrozen(t))) if (typeof r != "string" && "length" in r) {
          ue(typeof i != "string" && "length" in i);
          for (var s = 0, a = r.length; s < a; ++s) F(t, r[s], i[s]);
        } else {
          var c, h, g = r.indexOf(".");
          g !== -1 ? (c = r.substr(0, g), (h = r.substr(g + 1)) === "" ? i === void 0 ? y(t) && !isNaN(parseInt(c)) ? t.splice(c, 1) : delete t[c] : t[c] = i : F(g = !(g = t[c]) || !K(t, c) ? t[c] = {} : g, h, i)) : i === void 0 ? y(t) && !isNaN(parseInt(r)) ? t.splice(r, 1) : delete t[r] : t[r] = i;
        }
      }
      function Y(t) {
        var r, i = {};
        for (r in t) K(t, r) && (i[r] = t[r]);
        return i;
      }
      var le = [].concat;
      function me(t) {
        return le.apply([], t);
      }
      var pe = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(me([8, 16, 32, 64].map(function(t) {
        return ["Int", "Uint", "Float"].map(function(r) {
          return r + t + "Array";
        });
      }))).filter(function(t) {
        return f[t];
      }), Ce = new Set(pe.map(function(t) {
        return f[t];
      })), et = null;
      function He(t) {
        return et = /* @__PURE__ */ new WeakMap(), t = function r(i) {
          if (!i || typeof i != "object") return i;
          var s = et.get(i);
          if (s) return s;
          if (y(i)) {
            s = [], et.set(i, s);
            for (var a = 0, c = i.length; a < c; ++a) s.push(r(i[a]));
          } else if (Ce.has(i.constructor)) s = i;
          else {
            var h, g = R(i);
            for (h in s = g === Object.prototype ? {} : Object.create(g), et.set(i, s), i) K(i, h) && (s[h] = r(i[h]));
          }
          return s;
        }(t), et = null, t;
      }
      var Et = {}.toString;
      function Pt(t) {
        return Et.call(t).slice(8, -1);
      }
      var $e = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", je = typeof $e == "symbol" ? function(t) {
        var r;
        return t != null && (r = t[$e]) && r.apply(t);
      } : function() {
        return null;
      };
      function _e(t, r) {
        return r = t.indexOf(r), 0 <= r && t.splice(r, 1), 0 <= r;
      }
      var pt = {};
      function yt(t) {
        var r, i, s, a;
        if (arguments.length === 1) {
          if (y(t)) return t.slice();
          if (this === pt && typeof t == "string") return [t];
          if (a = je(t)) {
            for (i = []; !(s = a.next()).done; ) i.push(s.value);
            return i;
          }
          if (t == null) return [t];
          if (typeof (r = t.length) != "number") return [t];
          for (i = new Array(r); r--; ) i[r] = t[r];
          return i;
        }
        for (r = arguments.length, i = new Array(r); r--; ) i[r] = arguments[r];
        return i;
      }
      var Ot = typeof Symbol < "u" ? function(t) {
        return t[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, ce = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], _t = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(ce), vt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Dt(t, r) {
        this.name = t, this.message = r;
      }
      function dr(t, r) {
        return t + ". Errors: " + Object.keys(r).map(function(i) {
          return r[i].toString();
        }).filter(function(i, s, a) {
          return a.indexOf(i) === s;
        }).join(`
`);
      }
      function vn(t, r, i, s) {
        this.failures = r, this.failedKeys = s, this.successCount = i, this.message = dr(t, r);
      }
      function bt(t, r) {
        this.name = "BulkError", this.failures = Object.keys(r).map(function(i) {
          return r[i];
        }), this.failuresByPos = r, this.message = dr(t, this.failures);
      }
      re(Dt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), re(vn).from(Dt), re(bt).from(Dt);
      var Wt = _t.reduce(function(t, r) {
        return t[r] = r + "Error", t;
      }, {}), Bn = Dt, oe = _t.reduce(function(t, r) {
        var i = r + "Error";
        function s(a, c) {
          this.name = i, a ? typeof a == "string" ? (this.message = "".concat(a).concat(c ? `
 ` + c : ""), this.inner = c || null) : typeof a == "object" && (this.message = "".concat(a.name, " ").concat(a.message), this.inner = a) : (this.message = vt[r] || i, this.inner = null);
        }
        return re(s).from(Bn), t[r] = s, t;
      }, {});
      oe.Syntax = SyntaxError, oe.Type = TypeError, oe.Range = RangeError;
      var Yt = ce.reduce(function(t, r) {
        return t[r + "Error"] = oe[r], t;
      }, {}), Nn = _t.reduce(function(t, r) {
        return ["Syntax", "Type", "Range"].indexOf(r) === -1 && (t[r + "Error"] = oe[r]), t;
      }, {});
      function p() {
      }
      function w(t) {
        return t;
      }
      function D(t, r) {
        return t == null || t === w ? r : function(i) {
          return r(t(i));
        };
      }
      function N(t, r) {
        return function() {
          t.apply(this, arguments), r.apply(this, arguments);
        };
      }
      function B(t, r) {
        return t === p ? r : function() {
          var i = t.apply(this, arguments);
          i !== void 0 && (arguments[0] = i);
          var s = this.onsuccess, a = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var c = r.apply(this, arguments);
          return s && (this.onsuccess = this.onsuccess ? N(s, this.onsuccess) : s), a && (this.onerror = this.onerror ? N(a, this.onerror) : a), c !== void 0 ? c : i;
        };
      }
      function q(t, r) {
        return t === p ? r : function() {
          t.apply(this, arguments);
          var i = this.onsuccess, s = this.onerror;
          this.onsuccess = this.onerror = null, r.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? N(i, this.onsuccess) : i), s && (this.onerror = this.onerror ? N(s, this.onerror) : s);
        };
      }
      function Q(t, r) {
        return t === p ? r : function(i) {
          var s = t.apply(this, arguments);
          v(i, s);
          var a = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, i = r.apply(this, arguments), a && (this.onsuccess = this.onsuccess ? N(a, this.onsuccess) : a), c && (this.onerror = this.onerror ? N(c, this.onerror) : c), s === void 0 ? i === void 0 ? void 0 : i : v(s, i);
        };
      }
      function z(t, r) {
        return t === p ? r : function() {
          return r.apply(this, arguments) !== !1 && t.apply(this, arguments);
        };
      }
      function H(t, r) {
        return t === p ? r : function() {
          var i = t.apply(this, arguments);
          if (i && typeof i.then == "function") {
            for (var s = this, a = arguments.length, c = new Array(a); a--; ) c[a] = arguments[a];
            return i.then(function() {
              return r.apply(s, c);
            });
          }
          return r.apply(this, arguments);
        };
      }
      Nn.ModifyError = vn, Nn.DexieError = Dt, Nn.BulkError = bt;
      var M = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function ae(t) {
        M = t;
      }
      var G = {}, se = 100, pe = typeof Promise > "u" ? [] : function() {
        var t = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [t, R(t), t];
        var r = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [r, R(r), t];
      }(), ce = pe[0], _t = pe[1], pe = pe[2], _t = _t && _t.then, we = ce && ce.constructor, Oe = !!pe, Ve = function(t, r) {
        zt.push([t, r]), ut && (queueMicrotask($u), ut = !1);
      }, We = !0, ut = !0, Ye = [], kt = [], bn = w, Be = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: p, pgp: !1, env: {}, finalize: p }, ne = Be, zt = [], un = 0, pr = [];
      function Z(t) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var r = this._PSD = ne;
        if (typeof t != "function") {
          if (t !== G) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && fi(this, this._value));
        }
        this._state = null, this._value = null, ++r.ref, function i(s, a) {
          try {
            a(function(c) {
              if (s._state === null) {
                if (c === s) throw new TypeError("A promise cannot be resolved with itself.");
                var h = s._lib && _n();
                c && typeof c.then == "function" ? i(s, function(g, b) {
                  c instanceof Z ? c._then(g, b) : c.then(g, b);
                }) : (s._state = !0, s._value = c, Ko(s)), h && wn();
              }
            }, fi.bind(null, s));
          } catch (c) {
            fi(s, c);
          }
        }(this, t);
      }
      var ci = { get: function() {
        var t = ne, r = vr;
        function i(s, a) {
          var c = this, h = !t.global && (t !== ne || r !== vr), g = h && !Jt(), b = new Z(function(x, S) {
            hi(c, new Io(Do(s, t, h, g), Do(a, t, h, g), x, S, t));
          });
          return this._consoleTask && (b._consoleTask = this._consoleTask), b;
        }
        return i.prototype = G, i;
      }, set: function(t) {
        ie(this, "then", t && t.prototype === G ? ci : { get: function() {
          return t;
        }, set: ci.set });
      } };
      function Io(t, r, i, s, a) {
        this.onFulfilled = typeof t == "function" ? t : null, this.onRejected = typeof r == "function" ? r : null, this.resolve = i, this.reject = s, this.psd = a;
      }
      function fi(t, r) {
        var i, s;
        kt.push(r), t._state === null && (i = t._lib && _n(), r = bn(r), t._state = !1, t._value = r, s = t, Ye.some(function(a) {
          return a._value === s._value;
        }) || Ye.push(s), Ko(t), i && wn());
      }
      function Ko(t) {
        var r = t._listeners;
        t._listeners = [];
        for (var i = 0, s = r.length; i < s; ++i) hi(t, r[i]);
        var a = t._PSD;
        --a.ref || a.finalize(), un === 0 && (++un, Ve(function() {
          --un == 0 && di();
        }, []));
      }
      function hi(t, r) {
        if (t._state !== null) {
          var i = t._state ? r.onFulfilled : r.onRejected;
          if (i === null) return (t._state ? r.resolve : r.reject)(t._value);
          ++r.psd.ref, ++un, Ve(Vu, [i, t, r]);
        } else t._listeners.push(r);
      }
      function Vu(t, r, i) {
        try {
          var s, a = r._value;
          !r._state && kt.length && (kt = []), s = M && r._consoleTask ? r._consoleTask.run(function() {
            return t(a);
          }) : t(a), r._state || kt.indexOf(a) !== -1 || function(c) {
            for (var h = Ye.length; h; ) if (Ye[--h]._value === c._value) return Ye.splice(h, 1);
          }(r), i.resolve(s);
        } catch (c) {
          i.reject(c);
        } finally {
          --un == 0 && di(), --i.psd.ref || i.psd.finalize();
        }
      }
      function $u() {
        an(Be, function() {
          _n() && wn();
        });
      }
      function _n() {
        var t = We;
        return ut = We = !1, t;
      }
      function wn() {
        var t, r, i;
        do
          for (; 0 < zt.length; ) for (t = zt, zt = [], i = t.length, r = 0; r < i; ++r) {
            var s = t[r];
            s[0].apply(null, s[1]);
          }
        while (0 < zt.length);
        ut = We = !0;
      }
      function di() {
        var t = Ye;
        Ye = [], t.forEach(function(s) {
          s._PSD.onunhandled.call(null, s._value, s);
        });
        for (var r = pr.slice(0), i = r.length; i; ) r[--i]();
      }
      function yr(t) {
        return new Z(G, !1, t);
      }
      function Me(t, r) {
        var i = ne;
        return function() {
          var s = _n(), a = ne;
          try {
            return Qt(i, !0), t.apply(this, arguments);
          } catch (c) {
            r && r(c);
          } finally {
            Qt(a, !1), s && wn();
          }
        };
      }
      V(Z.prototype, { then: ci, _then: function(t, r) {
        hi(this, new Io(null, null, t, r, ne));
      }, catch: function(t) {
        if (arguments.length === 1) return this.then(null, t);
        var r = t, i = arguments[1];
        return typeof r == "function" ? this.then(null, function(s) {
          return (s instanceof r ? i : yr)(s);
        }) : this.then(null, function(s) {
          return (s && s.name === r ? i : yr)(s);
        });
      }, finally: function(t) {
        return this.then(function(r) {
          return Z.resolve(t()).then(function() {
            return r;
          });
        }, function(r) {
          return Z.resolve(t()).then(function() {
            return yr(r);
          });
        });
      }, timeout: function(t, r) {
        var i = this;
        return t < 1 / 0 ? new Z(function(s, a) {
          var c = setTimeout(function() {
            return a(new oe.Timeout(r));
          }, t);
          i.then(s, a).finally(clearTimeout.bind(null, c));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && ie(Z.prototype, Symbol.toStringTag, "Dexie.Promise"), Be.env = jo(), V(Z, { all: function() {
        var t = yt.apply(null, arguments).map(br);
        return new Z(function(r, i) {
          t.length === 0 && r([]);
          var s = t.length;
          t.forEach(function(a, c) {
            return Z.resolve(a).then(function(h) {
              t[c] = h, --s || r(t);
            }, i);
          });
        });
      }, resolve: function(t) {
        return t instanceof Z ? t : t && typeof t.then == "function" ? new Z(function(r, i) {
          t.then(r, i);
        }) : new Z(G, !0, t);
      }, reject: yr, race: function() {
        var t = yt.apply(null, arguments).map(br);
        return new Z(function(r, i) {
          t.map(function(s) {
            return Z.resolve(s).then(r, i);
          });
        });
      }, PSD: { get: function() {
        return ne;
      }, set: function(t) {
        return ne = t;
      } }, totalEchoes: { get: function() {
        return vr;
      } }, newPSD: Gt, usePSD: an, scheduler: { get: function() {
        return Ve;
      }, set: function(t) {
        Ve = t;
      } }, rejectionMapper: { get: function() {
        return bn;
      }, set: function(t) {
        bn = t;
      } }, follow: function(t, r) {
        return new Z(function(i, s) {
          return Gt(function(a, c) {
            var h = ne;
            h.unhandleds = [], h.onunhandled = c, h.finalize = N(function() {
              var g, b = this;
              g = function() {
                b.unhandleds.length === 0 ? a() : c(b.unhandleds[0]);
              }, pr.push(function x() {
                g(), pr.splice(pr.indexOf(x), 1);
              }), ++un, Ve(function() {
                --un == 0 && di();
              }, []);
            }, h.finalize), t();
          }, r, i, s);
        });
      } }), we && (we.allSettled && ie(Z, "allSettled", function() {
        var t = yt.apply(null, arguments).map(br);
        return new Z(function(r) {
          t.length === 0 && r([]);
          var i = t.length, s = new Array(i);
          t.forEach(function(a, c) {
            return Z.resolve(a).then(function(h) {
              return s[c] = { status: "fulfilled", value: h };
            }, function(h) {
              return s[c] = { status: "rejected", reason: h };
            }).then(function() {
              return --i || r(s);
            });
          });
        });
      }), we.any && typeof AggregateError < "u" && ie(Z, "any", function() {
        var t = yt.apply(null, arguments).map(br);
        return new Z(function(r, i) {
          t.length === 0 && i(new AggregateError([]));
          var s = t.length, a = new Array(s);
          t.forEach(function(c, h) {
            return Z.resolve(c).then(function(g) {
              return r(g);
            }, function(g) {
              a[h] = g, --s || i(new AggregateError(a));
            });
          });
        });
      }), we.withResolvers && (Z.withResolvers = we.withResolvers));
      var ze = { awaits: 0, echoes: 0, id: 0 }, Hu = 0, gr = [], mr = 0, vr = 0, Wu = 0;
      function Gt(t, r, i, s) {
        var a = ne, c = Object.create(a);
        return c.parent = a, c.ref = 0, c.global = !1, c.id = ++Wu, Be.env, c.env = Oe ? { Promise: Z, PromiseProp: { value: Z, configurable: !0, writable: !0 }, all: Z.all, race: Z.race, allSettled: Z.allSettled, any: Z.any, resolve: Z.resolve, reject: Z.reject } : {}, r && v(c, r), ++a.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, s = an(c, t, i, s), c.ref === 0 && c.finalize(), s;
      }
      function xn() {
        return ze.id || (ze.id = ++Hu), ++ze.awaits, ze.echoes += se, ze.id;
      }
      function Jt() {
        return !!ze.awaits && (--ze.awaits == 0 && (ze.id = 0), ze.echoes = ze.awaits * se, !0);
      }
      function br(t) {
        return ze.echoes && t && t.constructor === we ? (xn(), t.then(function(r) {
          return Jt(), r;
        }, function(r) {
          return Jt(), Le(r);
        })) : t;
      }
      function Yu() {
        var t = gr[gr.length - 1];
        gr.pop(), Qt(t, !1);
      }
      function Qt(t, r) {
        var i, s = ne;
        (r ? !ze.echoes || mr++ && t === ne : !mr || --mr && t === ne) || queueMicrotask(r ? (function(a) {
          ++vr, ze.echoes && --ze.echoes != 0 || (ze.echoes = ze.awaits = ze.id = 0), gr.push(ne), Qt(a, !0);
        }).bind(null, t) : Yu), t !== ne && (ne = t, s === Be && (Be.env = jo()), Oe && (i = Be.env.Promise, r = t.env, (s.global || t.global) && (Object.defineProperty(f, "Promise", r.PromiseProp), i.all = r.all, i.race = r.race, i.resolve = r.resolve, i.reject = r.reject, r.allSettled && (i.allSettled = r.allSettled), r.any && (i.any = r.any))));
      }
      function jo() {
        var t = f.Promise;
        return Oe ? { Promise: t, PromiseProp: Object.getOwnPropertyDescriptor(f, "Promise"), all: t.all, race: t.race, allSettled: t.allSettled, any: t.any, resolve: t.resolve, reject: t.reject } : {};
      }
      function an(t, r, i, s, a) {
        var c = ne;
        try {
          return Qt(t, !0), r(i, s, a);
        } finally {
          Qt(c, !1);
        }
      }
      function Do(t, r, i, s) {
        return typeof t != "function" ? t : function() {
          var a = ne;
          i && xn(), Qt(r, !0);
          try {
            return t.apply(this, arguments);
          } finally {
            Qt(a, !1), s && queueMicrotask(Jt);
          }
        };
      }
      function pi(t) {
        Promise === we && ze.echoes === 0 ? mr === 0 ? t() : enqueueNativeMicroTask(t) : setTimeout(t, 0);
      }
      ("" + _t).indexOf("[native code]") === -1 && (xn = Jt = p);
      var Le = Z.reject, ln = "￿", Ft = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Fo = "String expected.", On = [], _r = "__dbnames", yi = "readonly", gi = "readwrite";
      function cn(t, r) {
        return t ? r ? function() {
          return t.apply(this, arguments) && r.apply(this, arguments);
        } : t : r;
      }
      var Mo = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function wr(t) {
        return typeof t != "string" || /\./.test(t) ? function(r) {
          return r;
        } : function(r) {
          return r[t] === void 0 && t in r && delete (r = He(r))[t], r;
        };
      }
      function Bo() {
        throw oe.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function be(t, r) {
        try {
          var i = No(t), s = No(r);
          if (i !== s) return i === "Array" ? 1 : s === "Array" ? -1 : i === "binary" ? 1 : s === "binary" ? -1 : i === "string" ? 1 : s === "string" ? -1 : i === "Date" ? 1 : s !== "Date" ? NaN : -1;
          switch (i) {
            case "number":
            case "Date":
            case "string":
              return r < t ? 1 : t < r ? -1 : 0;
            case "binary":
              return function(a, c) {
                for (var h = a.length, g = c.length, b = h < g ? h : g, x = 0; x < b; ++x) if (a[x] !== c[x]) return a[x] < c[x] ? -1 : 1;
                return h === g ? 0 : h < g ? -1 : 1;
              }(qo(t), qo(r));
            case "Array":
              return function(a, c) {
                for (var h = a.length, g = c.length, b = h < g ? h : g, x = 0; x < b; ++x) {
                  var S = be(a[x], c[x]);
                  if (S !== 0) return S;
                }
                return h === g ? 0 : h < g ? -1 : 1;
              }(t, r);
          }
        } catch {
        }
        return NaN;
      }
      function No(t) {
        var r = typeof t;
        return r != "object" ? r : ArrayBuffer.isView(t) ? "binary" : (t = Pt(t), t === "ArrayBuffer" ? "binary" : t);
      }
      function qo(t) {
        return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t);
      }
      function xr(t, r, i) {
        var s = t.schema.yProps;
        return s ? (r && 0 < i.numFailures && (r = r.filter(function(a, c) {
          return !i.failures[c];
        })), Promise.all(s.map(function(a) {
          return a = a.updatesTable, r ? t.db.table(a).where("k").anyOf(r).delete() : t.db.table(a).clear();
        })).then(function() {
          return i;
        })) : i;
      }
      var Lo = (De.prototype._trans = function(t, r, i) {
        var s = this._tx || ne.trans, a = this.name, c = M && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(t === "readonly" ? "read" : "write", " ").concat(this.name));
        function h(x, S, m) {
          if (!m.schema[a]) throw new oe.NotFound("Table " + a + " not part of transaction");
          return r(m.idbtrans, m);
        }
        var g = _n();
        try {
          var b = s && s.db._novip === this.db._novip ? s === ne.trans ? s._promise(t, h, i) : Gt(function() {
            return s._promise(t, h, i);
          }, { trans: s, transless: ne.transless || ne }) : function x(S, m, k, _) {
            if (S.idbdb && (S._state.openComplete || ne.letThrough || S._vip)) {
              var O = S._createTransaction(m, k, S._dbSchema);
              try {
                O.create(), S._state.PR1398_maxLoop = 3;
              } catch (P) {
                return P.name === Wt.InvalidState && S.isOpen() && 0 < --S._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), S.close({ disableAutoOpen: !1 }), S.open().then(function() {
                  return x(S, m, k, _);
                })) : Le(P);
              }
              return O._promise(m, function(P, E) {
                return Gt(function() {
                  return ne.trans = O, _(P, E, O);
                });
              }).then(function(P) {
                if (m === "readwrite") try {
                  O.idbtrans.commit();
                } catch {
                }
                return m === "readonly" ? P : O._completion.then(function() {
                  return P;
                });
              });
            }
            if (S._state.openComplete) return Le(new oe.DatabaseClosed(S._state.dbOpenError));
            if (!S._state.isBeingOpened) {
              if (!S._state.autoOpen) return Le(new oe.DatabaseClosed());
              S.open().catch(p);
            }
            return S._state.dbReadyPromise.then(function() {
              return x(S, m, k, _);
            });
          }(this.db, t, [this.name], h);
          return c && (b._consoleTask = c, b = b.catch(function(x) {
            return console.trace(x), Le(x);
          })), b;
        } finally {
          g && wn();
        }
      }, De.prototype.get = function(t, r) {
        var i = this;
        return t && t.constructor === Object ? this.where(t).first(r) : t == null ? Le(new oe.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(s) {
          return i.core.get({ trans: s, key: t }).then(function(a) {
            return i.hook.reading.fire(a);
          });
        }).then(r);
      }, De.prototype.where = function(t) {
        if (typeof t == "string") return new this.db.WhereClause(this, t);
        if (y(t)) return new this.db.WhereClause(this, "[".concat(t.join("+"), "]"));
        var r = d(t);
        if (r.length === 1) return this.where(r[0]).equals(t[r[0]]);
        var i = this.schema.indexes.concat(this.schema.primKey).filter(function(g) {
          if (g.compound && r.every(function(x) {
            return 0 <= g.keyPath.indexOf(x);
          })) {
            for (var b = 0; b < r.length; ++b) if (r.indexOf(g.keyPath[b]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(g, b) {
          return g.keyPath.length - b.keyPath.length;
        })[0];
        if (i && this.db._maxKey !== ln) {
          var c = i.keyPath.slice(0, r.length);
          return this.where(c).equals(c.map(function(b) {
            return t[b];
          }));
        }
        !i && M && console.warn("The query ".concat(JSON.stringify(t), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(r.join("+"), "]"));
        var s = this.schema.idxByName;
        function a(g, b) {
          return be(g, b) === 0;
        }
        var h = r.reduce(function(m, b) {
          var x = m[0], S = m[1], m = s[b], k = t[b];
          return [x || m, x || !m ? cn(S, m && m.multi ? function(_) {
            return _ = Re(_, b), y(_) && _.some(function(O) {
              return a(k, O);
            });
          } : function(_) {
            return a(k, Re(_, b));
          }) : S];
        }, [null, null]), c = h[0], h = h[1];
        return c ? this.where(c.name).equals(t[c.keyPath]).filter(h) : i ? this.filter(h) : this.where(r).equals("");
      }, De.prototype.filter = function(t) {
        return this.toCollection().and(t);
      }, De.prototype.count = function(t) {
        return this.toCollection().count(t);
      }, De.prototype.offset = function(t) {
        return this.toCollection().offset(t);
      }, De.prototype.limit = function(t) {
        return this.toCollection().limit(t);
      }, De.prototype.each = function(t) {
        return this.toCollection().each(t);
      }, De.prototype.toArray = function(t) {
        return this.toCollection().toArray(t);
      }, De.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, De.prototype.orderBy = function(t) {
        return new this.db.Collection(new this.db.WhereClause(this, y(t) ? "[".concat(t.join("+"), "]") : t));
      }, De.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, De.prototype.mapToClass = function(t) {
        var r, i = this.db, s = this.name;
        function a() {
          return r !== null && r.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = t).prototype instanceof Bo && (function(b, x) {
          if (typeof x != "function" && x !== null) throw new TypeError("Class extends value " + String(x) + " is not a constructor or null");
          function S() {
            this.constructor = b;
          }
          o(b, x), b.prototype = x === null ? Object.create(x) : (S.prototype = x.prototype, new S());
        }(a, r = t), Object.defineProperty(a.prototype, "db", { get: function() {
          return i;
        }, enumerable: !1, configurable: !0 }), a.prototype.table = function() {
          return s;
        }, t = a);
        for (var c = /* @__PURE__ */ new Set(), h = t.prototype; h; h = R(h)) Object.getOwnPropertyNames(h).forEach(function(b) {
          return c.add(b);
        });
        function g(b) {
          if (!b) return b;
          var x, S = Object.create(t.prototype);
          for (x in b) if (!c.has(x)) try {
            S[x] = b[x];
          } catch {
          }
          return S;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = g, this.hook("reading", g), t;
      }, De.prototype.defineClass = function() {
        return this.mapToClass(function(t) {
          v(this, t);
        });
      }, De.prototype.add = function(t, r) {
        var i = this, s = this.schema.primKey, a = s.auto, c = s.keyPath, h = t;
        return c && a && (h = wr(c)(t)), this._trans("readwrite", function(g) {
          return i.core.mutate({ trans: g, type: "add", keys: r != null ? [r] : null, values: [h] });
        }).then(function(g) {
          return g.numFailures ? Z.reject(g.failures[0]) : g.lastResult;
        }).then(function(g) {
          if (c) try {
            F(t, c, g);
          } catch {
          }
          return g;
        });
      }, De.prototype.update = function(t, r) {
        return typeof t != "object" || y(t) ? this.where(":id").equals(t).modify(r) : (t = Re(t, this.schema.primKey.keyPath), t === void 0 ? Le(new oe.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(t).modify(r));
      }, De.prototype.put = function(t, r) {
        var i = this, s = this.schema.primKey, a = s.auto, c = s.keyPath, h = t;
        return c && a && (h = wr(c)(t)), this._trans("readwrite", function(g) {
          return i.core.mutate({ trans: g, type: "put", values: [h], keys: r != null ? [r] : null });
        }).then(function(g) {
          return g.numFailures ? Z.reject(g.failures[0]) : g.lastResult;
        }).then(function(g) {
          if (c) try {
            F(t, c, g);
          } catch {
          }
          return g;
        });
      }, De.prototype.delete = function(t) {
        var r = this;
        return this._trans("readwrite", function(i) {
          return r.core.mutate({ trans: i, type: "delete", keys: [t] }).then(function(s) {
            return xr(r, [t], s);
          }).then(function(s) {
            return s.numFailures ? Z.reject(s.failures[0]) : void 0;
          });
        });
      }, De.prototype.clear = function() {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "deleteRange", range: Mo }).then(function(i) {
            return xr(t, null, i);
          });
        }).then(function(r) {
          return r.numFailures ? Z.reject(r.failures[0]) : void 0;
        });
      }, De.prototype.bulkGet = function(t) {
        var r = this;
        return this._trans("readonly", function(i) {
          return r.core.getMany({ keys: t, trans: i }).then(function(s) {
            return s.map(function(a) {
              return r.hook.reading.fire(a);
            });
          });
        });
      }, De.prototype.bulkAdd = function(t, r, i) {
        var s = this, a = Array.isArray(r) ? r : void 0, c = (i = i || (a ? void 0 : r)) ? i.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var x = s.schema.primKey, g = x.auto, x = x.keyPath;
          if (x && a) throw new oe.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== t.length) throw new oe.InvalidArgument("Arguments objects and keys must have the same length");
          var b = t.length, x = x && g ? t.map(wr(x)) : t;
          return s.core.mutate({ trans: h, type: "add", keys: a, values: x, wantResults: c }).then(function(O) {
            var m = O.numFailures, k = O.results, _ = O.lastResult, O = O.failures;
            if (m === 0) return c ? k : _;
            throw new bt("".concat(s.name, ".bulkAdd(): ").concat(m, " of ").concat(b, " operations failed"), O);
          });
        });
      }, De.prototype.bulkPut = function(t, r, i) {
        var s = this, a = Array.isArray(r) ? r : void 0, c = (i = i || (a ? void 0 : r)) ? i.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var x = s.schema.primKey, g = x.auto, x = x.keyPath;
          if (x && a) throw new oe.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== t.length) throw new oe.InvalidArgument("Arguments objects and keys must have the same length");
          var b = t.length, x = x && g ? t.map(wr(x)) : t;
          return s.core.mutate({ trans: h, type: "put", keys: a, values: x, wantResults: c }).then(function(O) {
            var m = O.numFailures, k = O.results, _ = O.lastResult, O = O.failures;
            if (m === 0) return c ? k : _;
            throw new bt("".concat(s.name, ".bulkPut(): ").concat(m, " of ").concat(b, " operations failed"), O);
          });
        });
      }, De.prototype.bulkUpdate = function(t) {
        var r = this, i = this.core, s = t.map(function(h) {
          return h.key;
        }), a = t.map(function(h) {
          return h.changes;
        }), c = [];
        return this._trans("readwrite", function(h) {
          return i.getMany({ trans: h, keys: s, cache: "clone" }).then(function(g) {
            var b = [], x = [];
            t.forEach(function(m, k) {
              var _ = m.key, O = m.changes, P = g[k];
              if (P) {
                for (var E = 0, C = Object.keys(O); E < C.length; E++) {
                  var T = C[E], I = O[T];
                  if (T === r.schema.primKey.keyPath) {
                    if (be(I, _) !== 0) throw new oe.Constraint("Cannot update primary key in bulkUpdate()");
                  } else F(P, T, I);
                }
                c.push(k), b.push(_), x.push(P);
              }
            });
            var S = b.length;
            return i.mutate({ trans: h, type: "put", keys: b, values: x, updates: { keys: s, changeSpecs: a } }).then(function(m) {
              var k = m.numFailures, _ = m.failures;
              if (k === 0) return S;
              for (var O = 0, P = Object.keys(_); O < P.length; O++) {
                var E, C = P[O], T = c[Number(C)];
                T != null && (E = _[C], delete _[C], _[T] = E);
              }
              throw new bt("".concat(r.name, ".bulkUpdate(): ").concat(k, " of ").concat(S, " operations failed"), _);
            });
          });
        });
      }, De.prototype.bulkDelete = function(t) {
        var r = this, i = t.length;
        return this._trans("readwrite", function(s) {
          return r.core.mutate({ trans: s, type: "delete", keys: t }).then(function(a) {
            return xr(r, t, a);
          });
        }).then(function(h) {
          var a = h.numFailures, c = h.lastResult, h = h.failures;
          if (a === 0) return c;
          throw new bt("".concat(r.name, ".bulkDelete(): ").concat(a, " of ").concat(i, " operations failed"), h);
        });
      }, De);
      function De() {
      }
      function qn(t) {
        function r(h, g) {
          if (g) {
            for (var b = arguments.length, x = new Array(b - 1); --b; ) x[b - 1] = arguments[b];
            return i[h].subscribe.apply(null, x), t;
          }
          if (typeof h == "string") return i[h];
        }
        var i = {};
        r.addEventType = c;
        for (var s = 1, a = arguments.length; s < a; ++s) c(arguments[s]);
        return r;
        function c(h, g, b) {
          if (typeof h != "object") {
            var x;
            g = g || z;
            var S = { subscribers: [], fire: b = b || p, subscribe: function(m) {
              S.subscribers.indexOf(m) === -1 && (S.subscribers.push(m), S.fire = g(S.fire, m));
            }, unsubscribe: function(m) {
              S.subscribers = S.subscribers.filter(function(k) {
                return k !== m;
              }), S.fire = S.subscribers.reduce(g, b);
            } };
            return i[h] = r[h] = S;
          }
          d(x = h).forEach(function(m) {
            var k = x[m];
            if (y(k)) c(m, x[m][0], x[m][1]);
            else {
              if (k !== "asap") throw new oe.InvalidArgument("Invalid event config");
              var _ = c(m, w, function() {
                for (var O = arguments.length, P = new Array(O); O--; ) P[O] = arguments[O];
                _.subscribers.forEach(function(E) {
                  Te(function() {
                    E.apply(null, P);
                  });
                });
              });
            }
          });
        }
      }
      function Ln(t, r) {
        return re(r).from({ prototype: t }), r;
      }
      function Sn(t, r) {
        return !(t.filter || t.algorithm || t.or) && (r ? t.justLimit : !t.replayFilter);
      }
      function mi(t, r) {
        t.filter = cn(t.filter, r);
      }
      function vi(t, r, i) {
        var s = t.replayFilter;
        t.replayFilter = s ? function() {
          return cn(s(), r());
        } : r, t.justLimit = i && !s;
      }
      function Or(t, r) {
        if (t.isPrimKey) return r.primaryKey;
        var i = r.getIndexByKeyPath(t.index);
        if (!i) throw new oe.Schema("KeyPath " + t.index + " on object store " + r.name + " is not indexed");
        return i;
      }
      function Uo(t, r, i) {
        var s = Or(t, r.schema);
        return r.openCursor({ trans: i, values: !t.keysOnly, reverse: t.dir === "prev", unique: !!t.unique, query: { index: s, range: t.range } });
      }
      function Sr(t, r, i, s) {
        var a = t.replayFilter ? cn(t.filter, t.replayFilter()) : t.filter;
        if (t.or) {
          var c = {}, h = function(g, b, x) {
            var S, m;
            a && !a(b, x, function(k) {
              return b.stop(k);
            }, function(k) {
              return b.fail(k);
            }) || ((m = "" + (S = b.primaryKey)) == "[object ArrayBuffer]" && (m = "" + new Uint8Array(S)), K(c, m) || (c[m] = !0, r(g, b, x)));
          };
          return Promise.all([t.or._iterate(h, i), Vo(Uo(t, s, i), t.algorithm, h, !t.keysOnly && t.valueMapper)]);
        }
        return Vo(Uo(t, s, i), cn(t.algorithm, a), r, !t.keysOnly && t.valueMapper);
      }
      function Vo(t, r, i, s) {
        var a = Me(s ? function(c, h, g) {
          return i(s(c), h, g);
        } : i);
        return t.then(function(c) {
          if (c) return c.start(function() {
            var h = function() {
              return c.continue();
            };
            r && !r(c, function(g) {
              return h = g;
            }, function(g) {
              c.stop(g), h = p;
            }, function(g) {
              c.fail(g), h = p;
            }) || a(c.value, c, function(g) {
              return h = g;
            }), h();
          });
        });
      }
      var Un = ($o.prototype.execute = function(t) {
        var r = this["@@propmod"];
        if (r.add !== void 0) {
          var i = r.add;
          if (y(i)) return l(l([], y(t) ? t : [], !0), i).sort();
          if (typeof i == "number") return (Number(t) || 0) + i;
          if (typeof i == "bigint") try {
            return BigInt(t) + i;
          } catch {
            return BigInt(0) + i;
          }
          throw new TypeError("Invalid term ".concat(i));
        }
        if (r.remove !== void 0) {
          var s = r.remove;
          if (y(s)) return y(t) ? t.filter(function(a) {
            return !s.includes(a);
          }).sort() : [];
          if (typeof s == "number") return Number(t) - s;
          if (typeof s == "bigint") try {
            return BigInt(t) - s;
          } catch {
            return BigInt(0) - s;
          }
          throw new TypeError("Invalid subtrahend ".concat(s));
        }
        return i = (i = r.replacePrefix) === null || i === void 0 ? void 0 : i[0], i && typeof t == "string" && t.startsWith(i) ? r.replacePrefix[1] + t.substring(i.length) : t;
      }, $o);
      function $o(t) {
        this["@@propmod"] = t;
      }
      var zu = (Se.prototype._read = function(t, r) {
        var i = this._ctx;
        return i.error ? i.table._trans(null, Le.bind(null, i.error)) : i.table._trans("readonly", t).then(r);
      }, Se.prototype._write = function(t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, Le.bind(null, r.error)) : r.table._trans("readwrite", t, "locked");
      }, Se.prototype._addAlgorithm = function(t) {
        var r = this._ctx;
        r.algorithm = cn(r.algorithm, t);
      }, Se.prototype._iterate = function(t, r) {
        return Sr(this._ctx, t, r, this._ctx.table.core);
      }, Se.prototype.clone = function(t) {
        var r = Object.create(this.constructor.prototype), i = Object.create(this._ctx);
        return t && v(i, t), r._ctx = i, r;
      }, Se.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Se.prototype.each = function(t) {
        var r = this._ctx;
        return this._read(function(i) {
          return Sr(r, t, i, r.table.core);
        });
      }, Se.prototype.count = function(t) {
        var r = this;
        return this._read(function(i) {
          var s = r._ctx, a = s.table.core;
          if (Sn(s, !0)) return a.count({ trans: i, query: { index: Or(s, a.schema), range: s.range } }).then(function(h) {
            return Math.min(h, s.limit);
          });
          var c = 0;
          return Sr(s, function() {
            return ++c, !1;
          }, i, a).then(function() {
            return c;
          });
        }).then(t);
      }, Se.prototype.sortBy = function(t, r) {
        var i = t.split(".").reverse(), s = i[0], a = i.length - 1;
        function c(b, x) {
          return x ? c(b[i[x]], x - 1) : b[s];
        }
        var h = this._ctx.dir === "next" ? 1 : -1;
        function g(b, x) {
          return be(c(b, a), c(x, a)) * h;
        }
        return this.toArray(function(b) {
          return b.sort(g);
        }).then(r);
      }, Se.prototype.toArray = function(t) {
        var r = this;
        return this._read(function(i) {
          var s = r._ctx;
          if (s.dir === "next" && Sn(s, !0) && 0 < s.limit) {
            var a = s.valueMapper, c = Or(s, s.table.core.schema);
            return s.table.core.query({ trans: i, limit: s.limit, values: !0, query: { index: c, range: s.range } }).then(function(g) {
              return g = g.result, a ? g.map(a) : g;
            });
          }
          var h = [];
          return Sr(s, function(g) {
            return h.push(g);
          }, i, s.table.core).then(function() {
            return h;
          });
        }, t);
      }, Se.prototype.offset = function(t) {
        var r = this._ctx;
        return t <= 0 || (r.offset += t, Sn(r) ? vi(r, function() {
          var i = t;
          return function(s, a) {
            return i === 0 || (i === 1 ? --i : a(function() {
              s.advance(i), i = 0;
            }), !1);
          };
        }) : vi(r, function() {
          var i = t;
          return function() {
            return --i < 0;
          };
        })), this;
      }, Se.prototype.limit = function(t) {
        return this._ctx.limit = Math.min(this._ctx.limit, t), vi(this._ctx, function() {
          var r = t;
          return function(i, s, a) {
            return --r <= 0 && s(a), 0 <= r;
          };
        }, !0), this;
      }, Se.prototype.until = function(t, r) {
        return mi(this._ctx, function(i, s, a) {
          return !t(i.value) || (s(a), r);
        }), this;
      }, Se.prototype.first = function(t) {
        return this.limit(1).toArray(function(r) {
          return r[0];
        }).then(t);
      }, Se.prototype.last = function(t) {
        return this.reverse().first(t);
      }, Se.prototype.filter = function(t) {
        var r;
        return mi(this._ctx, function(i) {
          return t(i.value);
        }), (r = this._ctx).isMatch = cn(r.isMatch, t), this;
      }, Se.prototype.and = function(t) {
        return this.filter(t);
      }, Se.prototype.or = function(t) {
        return new this.db.WhereClause(this._ctx.table, t, this);
      }, Se.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Se.prototype.desc = function() {
        return this.reverse();
      }, Se.prototype.eachKey = function(t) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(i, s) {
          t(s.key, s);
        });
      }, Se.prototype.eachUniqueKey = function(t) {
        return this._ctx.unique = "unique", this.eachKey(t);
      }, Se.prototype.eachPrimaryKey = function(t) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(i, s) {
          t(s.primaryKey, s);
        });
      }, Se.prototype.keys = function(t) {
        var r = this._ctx;
        r.keysOnly = !r.isMatch;
        var i = [];
        return this.each(function(s, a) {
          i.push(a.key);
        }).then(function() {
          return i;
        }).then(t);
      }, Se.prototype.primaryKeys = function(t) {
        var r = this._ctx;
        if (r.dir === "next" && Sn(r, !0) && 0 < r.limit) return this._read(function(s) {
          var a = Or(r, r.table.core.schema);
          return r.table.core.query({ trans: s, values: !1, limit: r.limit, query: { index: a, range: r.range } });
        }).then(function(s) {
          return s.result;
        }).then(t);
        r.keysOnly = !r.isMatch;
        var i = [];
        return this.each(function(s, a) {
          i.push(a.primaryKey);
        }).then(function() {
          return i;
        }).then(t);
      }, Se.prototype.uniqueKeys = function(t) {
        return this._ctx.unique = "unique", this.keys(t);
      }, Se.prototype.firstKey = function(t) {
        return this.limit(1).keys(function(r) {
          return r[0];
        }).then(t);
      }, Se.prototype.lastKey = function(t) {
        return this.reverse().firstKey(t);
      }, Se.prototype.distinct = function() {
        var t = this._ctx, t = t.index && t.table.schema.idxByName[t.index];
        if (!t || !t.multi) return this;
        var r = {};
        return mi(this._ctx, function(a) {
          var s = a.primaryKey.toString(), a = K(r, s);
          return r[s] = !0, !a;
        }), this;
      }, Se.prototype.modify = function(t) {
        var r = this, i = this._ctx;
        return this._write(function(s) {
          var a, c, h;
          h = typeof t == "function" ? t : (a = d(t), c = a.length, function(C) {
            for (var T = !1, I = 0; I < c; ++I) {
              var j = a[I], L = t[j], W = Re(C, j);
              L instanceof Un ? (F(C, j, L.execute(W)), T = !0) : W !== L && (F(C, j, L), T = !0);
            }
            return T;
          });
          var g = i.table.core, m = g.schema.primaryKey, b = m.outbound, x = m.extractKey, S = 200, m = r.db._options.modifyChunkSize;
          m && (S = typeof m == "object" ? m[g.name] || m["*"] || 200 : m);
          function k(C, j) {
            var I = j.failures, j = j.numFailures;
            O += C - j;
            for (var L = 0, W = d(I); L < W.length; L++) {
              var U = W[L];
              _.push(I[U]);
            }
          }
          var _ = [], O = 0, P = [], E = t === Ho;
          return r.clone().primaryKeys().then(function(C) {
            function T(j) {
              var L = Math.min(S, C.length - j), W = C.slice(j, j + L);
              return (E ? Promise.resolve([]) : g.getMany({ trans: s, keys: W, cache: "immutable" })).then(function(U) {
                var $ = [], X = [], J = b ? [] : null, ee = E ? W : [];
                if (!E) for (var ye = 0; ye < L; ++ye) {
                  var xe = U[ye], he = { value: He(xe), primKey: C[j + ye] };
                  h.call(he, he.value, he) !== !1 && (he.value == null ? ee.push(C[j + ye]) : b || be(x(xe), x(he.value)) === 0 ? (X.push(he.value), b && J.push(C[j + ye])) : (ee.push(C[j + ye]), $.push(he.value)));
                }
                return Promise.resolve(0 < $.length && g.mutate({ trans: s, type: "add", values: $ }).then(function(Ne) {
                  for (var fe in Ne.failures) ee.splice(parseInt(fe), 1);
                  k($.length, Ne);
                })).then(function() {
                  return (0 < X.length || I && typeof t == "object") && g.mutate({ trans: s, type: "put", keys: J, values: X, criteria: I, changeSpec: typeof t != "function" && t, isAdditionalChunk: 0 < j }).then(function(Ne) {
                    return k(X.length, Ne);
                  });
                }).then(function() {
                  return (0 < ee.length || I && E) && g.mutate({ trans: s, type: "delete", keys: ee, criteria: I, isAdditionalChunk: 0 < j }).then(function(Ne) {
                    return xr(i.table, ee, Ne);
                  }).then(function(Ne) {
                    return k(ee.length, Ne);
                  });
                }).then(function() {
                  return C.length > j + L && T(j + S);
                });
              });
            }
            var I = Sn(i) && i.limit === 1 / 0 && (typeof t != "function" || E) && { index: i.index, range: i.range };
            return T(0).then(function() {
              if (0 < _.length) throw new vn("Error modifying one or more objects", _, O, P);
              return C.length;
            });
          });
        });
      }, Se.prototype.delete = function() {
        var t = this._ctx, r = t.range;
        return !Sn(t) || t.table.schema.yProps || !t.isPrimKey && r.type !== 3 ? this.modify(Ho) : this._write(function(i) {
          var s = t.table.core.schema.primaryKey, a = r;
          return t.table.core.count({ trans: i, query: { index: s, range: a } }).then(function(c) {
            return t.table.core.mutate({ trans: i, type: "deleteRange", range: a }).then(function(b) {
              var g = b.failures, b = b.numFailures;
              if (b) throw new vn("Could not delete some values", Object.keys(g).map(function(x) {
                return g[x];
              }), c - b);
              return c - b;
            });
          });
        });
      }, Se);
      function Se() {
      }
      var Ho = function(t, r) {
        return r.value = null;
      };
      function Gu(t, r) {
        return t < r ? -1 : t === r ? 0 : 1;
      }
      function Ju(t, r) {
        return r < t ? -1 : t === r ? 0 : 1;
      }
      function mt(t, r, i) {
        return t = t instanceof Yo ? new t.Collection(t) : t, t._ctx.error = new (i || TypeError)(r), t;
      }
      function En(t) {
        return new t.Collection(t, function() {
          return Wo("");
        }).limit(0);
      }
      function Er(t, r, i, s) {
        var a, c, h, g, b, x, S, m = i.length;
        if (!i.every(function(O) {
          return typeof O == "string";
        })) return mt(t, Fo);
        function k(O) {
          a = O === "next" ? function(E) {
            return E.toUpperCase();
          } : function(E) {
            return E.toLowerCase();
          }, c = O === "next" ? function(E) {
            return E.toLowerCase();
          } : function(E) {
            return E.toUpperCase();
          }, h = O === "next" ? Gu : Ju;
          var P = i.map(function(E) {
            return { lower: c(E), upper: a(E) };
          }).sort(function(E, C) {
            return h(E.lower, C.lower);
          });
          g = P.map(function(E) {
            return E.upper;
          }), b = P.map(function(E) {
            return E.lower;
          }), S = (x = O) === "next" ? "" : s;
        }
        k("next"), t = new t.Collection(t, function() {
          return Xt(g[0], b[m - 1] + s);
        }), t._ondirectionchange = function(O) {
          k(O);
        };
        var _ = 0;
        return t._addAlgorithm(function(O, P, E) {
          var C = O.key;
          if (typeof C != "string") return !1;
          var T = c(C);
          if (r(T, b, _)) return !0;
          for (var I = null, j = _; j < m; ++j) {
            var L = function(W, U, $, X, J, ee) {
              for (var ye = Math.min(W.length, X.length), xe = -1, he = 0; he < ye; ++he) {
                var Ne = U[he];
                if (Ne !== X[he]) return J(W[he], $[he]) < 0 ? W.substr(0, he) + $[he] + $.substr(he + 1) : J(W[he], X[he]) < 0 ? W.substr(0, he) + X[he] + $.substr(he + 1) : 0 <= xe ? W.substr(0, xe) + U[xe] + $.substr(xe + 1) : null;
                J(W[he], Ne) < 0 && (xe = he);
              }
              return ye < X.length && ee === "next" ? W + $.substr(W.length) : ye < W.length && ee === "prev" ? W.substr(0, $.length) : xe < 0 ? null : W.substr(0, xe) + X[xe] + $.substr(xe + 1);
            }(C, T, g[j], b[j], h, x);
            L === null && I === null ? _ = j + 1 : (I === null || 0 < h(I, L)) && (I = L);
          }
          return P(I !== null ? function() {
            O.continue(I + S);
          } : E), !1;
        }), t;
      }
      function Xt(t, r, i, s) {
        return { type: 2, lower: t, upper: r, lowerOpen: i, upperOpen: s };
      }
      function Wo(t) {
        return { type: 1, lower: t, upper: t };
      }
      var Yo = (Object.defineProperty(Ge.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Ge.prototype.between = function(t, r, i, s) {
        i = i !== !1, s = s === !0;
        try {
          return 0 < this._cmp(t, r) || this._cmp(t, r) === 0 && (i || s) && (!i || !s) ? En(this) : new this.Collection(this, function() {
            return Xt(t, r, !i, !s);
          });
        } catch {
          return mt(this, Ft);
        }
      }, Ge.prototype.equals = function(t) {
        return t == null ? mt(this, Ft) : new this.Collection(this, function() {
          return Wo(t);
        });
      }, Ge.prototype.above = function(t) {
        return t == null ? mt(this, Ft) : new this.Collection(this, function() {
          return Xt(t, void 0, !0);
        });
      }, Ge.prototype.aboveOrEqual = function(t) {
        return t == null ? mt(this, Ft) : new this.Collection(this, function() {
          return Xt(t, void 0, !1);
        });
      }, Ge.prototype.below = function(t) {
        return t == null ? mt(this, Ft) : new this.Collection(this, function() {
          return Xt(void 0, t, !1, !0);
        });
      }, Ge.prototype.belowOrEqual = function(t) {
        return t == null ? mt(this, Ft) : new this.Collection(this, function() {
          return Xt(void 0, t);
        });
      }, Ge.prototype.startsWith = function(t) {
        return typeof t != "string" ? mt(this, Fo) : this.between(t, t + ln, !0, !0);
      }, Ge.prototype.startsWithIgnoreCase = function(t) {
        return t === "" ? this.startsWith(t) : Er(this, function(r, i) {
          return r.indexOf(i[0]) === 0;
        }, [t], ln);
      }, Ge.prototype.equalsIgnoreCase = function(t) {
        return Er(this, function(r, i) {
          return r === i[0];
        }, [t], "");
      }, Ge.prototype.anyOfIgnoreCase = function() {
        var t = yt.apply(pt, arguments);
        return t.length === 0 ? En(this) : Er(this, function(r, i) {
          return i.indexOf(r) !== -1;
        }, t, "");
      }, Ge.prototype.startsWithAnyOfIgnoreCase = function() {
        var t = yt.apply(pt, arguments);
        return t.length === 0 ? En(this) : Er(this, function(r, i) {
          return i.some(function(s) {
            return r.indexOf(s) === 0;
          });
        }, t, ln);
      }, Ge.prototype.anyOf = function() {
        var t = this, r = yt.apply(pt, arguments), i = this._cmp;
        try {
          r.sort(i);
        } catch {
          return mt(this, Ft);
        }
        if (r.length === 0) return En(this);
        var s = new this.Collection(this, function() {
          return Xt(r[0], r[r.length - 1]);
        });
        s._ondirectionchange = function(c) {
          i = c === "next" ? t._ascending : t._descending, r.sort(i);
        };
        var a = 0;
        return s._addAlgorithm(function(c, h, g) {
          for (var b = c.key; 0 < i(b, r[a]); ) if (++a === r.length) return h(g), !1;
          return i(b, r[a]) === 0 || (h(function() {
            c.continue(r[a]);
          }), !1);
        }), s;
      }, Ge.prototype.notEqual = function(t) {
        return this.inAnyRange([[-1 / 0, t], [t, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Ge.prototype.noneOf = function() {
        var t = yt.apply(pt, arguments);
        if (t.length === 0) return new this.Collection(this);
        try {
          t.sort(this._ascending);
        } catch {
          return mt(this, Ft);
        }
        var r = t.reduce(function(i, s) {
          return i ? i.concat([[i[i.length - 1][1], s]]) : [[-1 / 0, s]];
        }, null);
        return r.push([t[t.length - 1], this.db._maxKey]), this.inAnyRange(r, { includeLowers: !1, includeUppers: !1 });
      }, Ge.prototype.inAnyRange = function(C, r) {
        var i = this, s = this._cmp, a = this._ascending, c = this._descending, h = this._min, g = this._max;
        if (C.length === 0) return En(this);
        if (!C.every(function(T) {
          return T[0] !== void 0 && T[1] !== void 0 && a(T[0], T[1]) <= 0;
        })) return mt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", oe.InvalidArgument);
        var b = !r || r.includeLowers !== !1, x = r && r.includeUppers === !0, S, m = a;
        function k(T, I) {
          return m(T[0], I[0]);
        }
        try {
          (S = C.reduce(function(T, I) {
            for (var j = 0, L = T.length; j < L; ++j) {
              var W = T[j];
              if (s(I[0], W[1]) < 0 && 0 < s(I[1], W[0])) {
                W[0] = h(W[0], I[0]), W[1] = g(W[1], I[1]);
                break;
              }
            }
            return j === L && T.push(I), T;
          }, [])).sort(k);
        } catch {
          return mt(this, Ft);
        }
        var _ = 0, O = x ? function(T) {
          return 0 < a(T, S[_][1]);
        } : function(T) {
          return 0 <= a(T, S[_][1]);
        }, P = b ? function(T) {
          return 0 < c(T, S[_][0]);
        } : function(T) {
          return 0 <= c(T, S[_][0]);
        }, E = O, C = new this.Collection(this, function() {
          return Xt(S[0][0], S[S.length - 1][1], !b, !x);
        });
        return C._ondirectionchange = function(T) {
          m = T === "next" ? (E = O, a) : (E = P, c), S.sort(k);
        }, C._addAlgorithm(function(T, I, j) {
          for (var L, W = T.key; E(W); ) if (++_ === S.length) return I(j), !1;
          return !O(L = W) && !P(L) || (i._cmp(W, S[_][1]) === 0 || i._cmp(W, S[_][0]) === 0 || I(function() {
            m === a ? T.continue(S[_][0]) : T.continue(S[_][1]);
          }), !1);
        }), C;
      }, Ge.prototype.startsWithAnyOf = function() {
        var t = yt.apply(pt, arguments);
        return t.every(function(r) {
          return typeof r == "string";
        }) ? t.length === 0 ? En(this) : this.inAnyRange(t.map(function(r) {
          return [r, r + ln];
        })) : mt(this, "startsWithAnyOf() only works with strings");
      }, Ge);
      function Ge() {
      }
      function Ct(t) {
        return Me(function(r) {
          return Vn(r), t(r.target.error), !1;
        });
      }
      function Vn(t) {
        t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault();
      }
      var $n = "storagemutated", bi = "x-storagemutated-1", Zt = qn(null, $n), Qu = (At.prototype._lock = function() {
        return ue(!ne.global), ++this._reculock, this._reculock !== 1 || ne.global || (ne.lockOwnerFor = this), this;
      }, At.prototype._unlock = function() {
        if (ue(!ne.global), --this._reculock == 0) for (ne.global || (ne.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var t = this._blockedFuncs.shift();
          try {
            an(t[1], t[0]);
          } catch {
          }
        }
        return this;
      }, At.prototype._locked = function() {
        return this._reculock && ne.lockOwnerFor !== this;
      }, At.prototype.create = function(t) {
        var r = this;
        if (!this.mode) return this;
        var i = this.db.idbdb, s = this.db._state.dbOpenError;
        if (ue(!this.idbtrans), !t && !i) switch (s && s.name) {
          case "DatabaseClosedError":
            throw new oe.DatabaseClosed(s);
          case "MissingAPIError":
            throw new oe.MissingAPI(s.message, s);
          default:
            throw new oe.OpenFailed(s);
        }
        if (!this.active) throw new oe.TransactionInactive();
        return ue(this._completion._state === null), (t = this.idbtrans = t || (this.db.core || i).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Me(function(a) {
          Vn(a), r._reject(t.error);
        }), t.onabort = Me(function(a) {
          Vn(a), r.active && r._reject(new oe.Abort(t.error)), r.active = !1, r.on("abort").fire(a);
        }), t.oncomplete = Me(function() {
          r.active = !1, r._resolve(), "mutatedParts" in t && Zt.storagemutated.fire(t.mutatedParts);
        }), this;
      }, At.prototype._promise = function(t, r, i) {
        var s = this;
        if (t === "readwrite" && this.mode !== "readwrite") return Le(new oe.ReadOnly("Transaction is readonly"));
        if (!this.active) return Le(new oe.TransactionInactive());
        if (this._locked()) return new Z(function(c, h) {
          s._blockedFuncs.push([function() {
            s._promise(t, r, i).then(c, h);
          }, ne]);
        });
        if (i) return Gt(function() {
          var c = new Z(function(h, g) {
            s._lock();
            var b = r(h, g, s);
            b && b.then && b.then(h, g);
          });
          return c.finally(function() {
            return s._unlock();
          }), c._lib = !0, c;
        });
        var a = new Z(function(c, h) {
          var g = r(c, h, s);
          g && g.then && g.then(c, h);
        });
        return a._lib = !0, a;
      }, At.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, At.prototype.waitFor = function(t) {
        var r, i = this._root(), s = Z.resolve(t);
        i._waitingFor ? i._waitingFor = i._waitingFor.then(function() {
          return s;
        }) : (i._waitingFor = s, i._waitingQueue = [], r = i.idbtrans.objectStore(i.storeNames[0]), function c() {
          for (++i._spinCount; i._waitingQueue.length; ) i._waitingQueue.shift()();
          i._waitingFor && (r.get(-1 / 0).onsuccess = c);
        }());
        var a = i._waitingFor;
        return new Z(function(c, h) {
          s.then(function(g) {
            return i._waitingQueue.push(Me(c.bind(null, g)));
          }, function(g) {
            return i._waitingQueue.push(Me(h.bind(null, g)));
          }).finally(function() {
            i._waitingFor === a && (i._waitingFor = null);
          });
        });
      }, At.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new oe.Abort()));
      }, At.prototype.table = function(t) {
        var r = this._memoizedTables || (this._memoizedTables = {});
        if (K(r, t)) return r[t];
        var i = this.schema[t];
        if (!i) throw new oe.NotFound("Table " + t + " not part of transaction");
        return i = new this.db.Table(t, i, this), i.core = this.db.core.table(t), r[t] = i;
      }, At);
      function At() {
      }
      function _i(t, r, i, s, a, c, h, g) {
        return { name: t, keyPath: r, unique: i, multi: s, auto: a, compound: c, src: (i && !h ? "&" : "") + (s ? "*" : "") + (a ? "++" : "") + zo(r), type: g };
      }
      function zo(t) {
        return typeof t == "string" ? t : t ? "[" + [].join.call(t, "+") + "]" : "";
      }
      function wi(t, r, i) {
        return { name: t, primKey: r, indexes: i, mappedClass: null, idxByName: (s = function(a) {
          return [a.name, a];
        }, i.reduce(function(a, c, h) {
          return h = s(c, h), h && (a[h[0]] = h[1]), a;
        }, {})) };
        var s;
      }
      var Hn = function(t) {
        try {
          return t.only([[]]), Hn = function() {
            return [[]];
          }, [[]];
        } catch {
          return Hn = function() {
            return ln;
          }, ln;
        }
      };
      function xi(t) {
        return t == null ? function() {
        } : typeof t == "string" ? (r = t).split(".").length === 1 ? function(i) {
          return i[r];
        } : function(i) {
          return Re(i, r);
        } : function(i) {
          return Re(i, t);
        };
        var r;
      }
      function Go(t) {
        return [].slice.call(t);
      }
      var Xu = 0;
      function Wn(t) {
        return t == null ? ":id" : typeof t == "string" ? t : "[".concat(t.join("+"), "]");
      }
      function Zu(t, r, b) {
        function s(E) {
          if (E.type === 3) return null;
          if (E.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var _ = E.lower, O = E.upper, P = E.lowerOpen, E = E.upperOpen;
          return _ === void 0 ? O === void 0 ? null : r.upperBound(O, !!E) : O === void 0 ? r.lowerBound(_, !!P) : r.bound(_, O, !!P, !!E);
        }
        function a(k) {
          var _, O = k.name;
          return { name: O, schema: k, mutate: function(P) {
            var E = P.trans, C = P.type, T = P.keys, I = P.values, j = P.range;
            return new Promise(function(L, W) {
              L = Me(L);
              var U = E.objectStore(O), $ = U.keyPath == null, X = C === "put" || C === "add";
              if (!X && C !== "delete" && C !== "deleteRange") throw new Error("Invalid operation type: " + C);
              var J, ee = (T || I || { length: 1 }).length;
              if (T && I && T.length !== I.length) throw new Error("Given keys array must have same length as given values array.");
              if (ee === 0) return L({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function ye(at) {
                ++Ne, Vn(at);
              }
              var xe = [], he = [], Ne = 0;
              if (C === "deleteRange") {
                if (j.type === 4) return L({ numFailures: Ne, failures: he, results: [], lastResult: void 0 });
                j.type === 3 ? xe.push(J = U.clear()) : xe.push(J = U.delete(s(j)));
              } else {
                var $ = X ? $ ? [I, T] : [I, null] : [T, null], fe = $[0], nt = $[1];
                if (X) for (var rt = 0; rt < ee; ++rt) xe.push(J = nt && nt[rt] !== void 0 ? U[C](fe[rt], nt[rt]) : U[C](fe[rt])), J.onerror = ye;
                else for (rt = 0; rt < ee; ++rt) xe.push(J = U[C](fe[rt])), J.onerror = ye;
              }
              function Mr(at) {
                at = at.target.result, xe.forEach(function(dn, qi) {
                  return dn.error != null && (he[qi] = dn.error);
                }), L({ numFailures: Ne, failures: he, results: C === "delete" ? T : xe.map(function(dn) {
                  return dn.result;
                }), lastResult: at });
              }
              J.onerror = function(at) {
                ye(at), Mr(at);
              }, J.onsuccess = Mr;
            });
          }, getMany: function(P) {
            var E = P.trans, C = P.keys;
            return new Promise(function(T, I) {
              T = Me(T);
              for (var j, L = E.objectStore(O), W = C.length, U = new Array(W), $ = 0, X = 0, J = function(xe) {
                xe = xe.target, U[xe._pos] = xe.result, ++X === $ && T(U);
              }, ee = Ct(I), ye = 0; ye < W; ++ye) C[ye] != null && ((j = L.get(C[ye]))._pos = ye, j.onsuccess = J, j.onerror = ee, ++$);
              $ === 0 && T(U);
            });
          }, get: function(P) {
            var E = P.trans, C = P.key;
            return new Promise(function(T, I) {
              T = Me(T);
              var j = E.objectStore(O).get(C);
              j.onsuccess = function(L) {
                return T(L.target.result);
              }, j.onerror = Ct(I);
            });
          }, query: (_ = x, function(P) {
            return new Promise(function(E, C) {
              E = Me(E);
              var T, I, j, $ = P.trans, L = P.values, W = P.limit, J = P.query, U = W === 1 / 0 ? void 0 : W, X = J.index, J = J.range, $ = $.objectStore(O), X = X.isPrimaryKey ? $ : $.index(X.name), J = s(J);
              if (W === 0) return E({ result: [] });
              _ ? ((U = L ? X.getAll(J, U) : X.getAllKeys(J, U)).onsuccess = function(ee) {
                return E({ result: ee.target.result });
              }, U.onerror = Ct(C)) : (T = 0, I = !L && "openKeyCursor" in X ? X.openKeyCursor(J) : X.openCursor(J), j = [], I.onsuccess = function(ee) {
                var ye = I.result;
                return ye ? (j.push(L ? ye.value : ye.primaryKey), ++T === W ? E({ result: j }) : void ye.continue()) : E({ result: j });
              }, I.onerror = Ct(C));
            });
          }), openCursor: function(P) {
            var E = P.trans, C = P.values, T = P.query, I = P.reverse, j = P.unique;
            return new Promise(function(L, W) {
              L = Me(L);
              var X = T.index, U = T.range, $ = E.objectStore(O), $ = X.isPrimaryKey ? $ : $.index(X.name), X = I ? j ? "prevunique" : "prev" : j ? "nextunique" : "next", J = !C && "openKeyCursor" in $ ? $.openKeyCursor(s(U), X) : $.openCursor(s(U), X);
              J.onerror = Ct(W), J.onsuccess = Me(function(ee) {
                var ye, xe, he, Ne, fe = J.result;
                fe ? (fe.___id = ++Xu, fe.done = !1, ye = fe.continue.bind(fe), xe = (xe = fe.continuePrimaryKey) && xe.bind(fe), he = fe.advance.bind(fe), Ne = function() {
                  throw new Error("Cursor not stopped");
                }, fe.trans = E, fe.stop = fe.continue = fe.continuePrimaryKey = fe.advance = function() {
                  throw new Error("Cursor not started");
                }, fe.fail = Me(W), fe.next = function() {
                  var nt = this, rt = 1;
                  return this.start(function() {
                    return rt-- ? nt.continue() : nt.stop();
                  }).then(function() {
                    return nt;
                  });
                }, fe.start = function(nt) {
                  function rt() {
                    if (J.result) try {
                      nt();
                    } catch (at) {
                      fe.fail(at);
                    }
                    else fe.done = !0, fe.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, fe.stop();
                  }
                  var Mr = new Promise(function(at, dn) {
                    at = Me(at), J.onerror = Ct(dn), fe.fail = dn, fe.stop = function(qi) {
                      fe.stop = fe.continue = fe.continuePrimaryKey = fe.advance = Ne, at(qi);
                    };
                  });
                  return J.onsuccess = Me(function(at) {
                    J.onsuccess = rt, rt();
                  }), fe.continue = ye, fe.continuePrimaryKey = xe, fe.advance = he, rt(), Mr;
                }, L(fe)) : L(null);
              }, W);
            });
          }, count: function(P) {
            var E = P.query, C = P.trans, T = E.index, I = E.range;
            return new Promise(function(j, L) {
              var W = C.objectStore(O), U = T.isPrimaryKey ? W : W.index(T.name), W = s(I), U = W ? U.count(W) : U.count();
              U.onsuccess = Me(function($) {
                return j($.target.result);
              }), U.onerror = Ct(L);
            });
          } };
        }
        var c, h, g, S = (h = b, g = Go((c = t).objectStoreNames), { schema: { name: c.name, tables: g.map(function(k) {
          return h.objectStore(k);
        }).map(function(k) {
          var _ = k.keyPath, E = k.autoIncrement, O = y(_), P = {}, E = { name: k.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: _ == null, compound: O, keyPath: _, autoIncrement: E, unique: !0, extractKey: xi(_) }, indexes: Go(k.indexNames).map(function(C) {
            return k.index(C);
          }).map(function(j) {
            var T = j.name, I = j.unique, L = j.multiEntry, j = j.keyPath, L = { name: T, compound: y(j), keyPath: j, unique: I, multiEntry: L, extractKey: xi(j) };
            return P[Wn(j)] = L;
          }), getIndexByKeyPath: function(C) {
            return P[Wn(C)];
          } };
          return P[":id"] = E.primaryKey, _ != null && (P[Wn(_)] = E.primaryKey), E;
        }) }, hasGetAll: 0 < g.length && "getAll" in h.objectStore(g[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), b = S.schema, x = S.hasGetAll, S = b.tables.map(a), m = {};
        return S.forEach(function(k) {
          return m[k.name] = k;
        }), { stack: "dbcore", transaction: t.transaction.bind(t), table: function(k) {
          if (!m[k]) throw new Error("Table '".concat(k, "' not found"));
          return m[k];
        }, MIN_KEY: -1 / 0, MAX_KEY: Hn(r), schema: b };
      }
      function ea(t, r, i, s) {
        var a = i.IDBKeyRange;
        return i.indexedDB, { dbcore: (s = Zu(r, a, s), t.dbcore.reduce(function(c, h) {
          return h = h.create, u(u({}, c), h(c));
        }, s)) };
      }
      function Pr(t, s) {
        var i = s.db, s = ea(t._middlewares, i, t._deps, s);
        t.core = s.dbcore, t.tables.forEach(function(a) {
          var c = a.name;
          t.core.schema.tables.some(function(h) {
            return h.name === c;
          }) && (a.core = t.core.table(c), t[c] instanceof t.Table && (t[c].core = a.core));
        });
      }
      function kr(t, r, i, s) {
        i.forEach(function(a) {
          var c = s[a];
          r.forEach(function(h) {
            var g = function b(x, S) {
              return qe(x, S) || (x = R(x)) && b(x, S);
            }(h, a);
            (!g || "value" in g && g.value === void 0) && (h === t.Transaction.prototype || h instanceof t.Transaction ? ie(h, a, { get: function() {
              return this.table(a);
            }, set: function(b) {
              te(this, a, { value: b, writable: !0, configurable: !0, enumerable: !0 });
            } }) : h[a] = new t.Table(a, c));
          });
        });
      }
      function Oi(t, r) {
        r.forEach(function(i) {
          for (var s in i) i[s] instanceof t.Table && delete i[s];
        });
      }
      function ta(t, r) {
        return t._cfg.version - r._cfg.version;
      }
      function na(t, r, i, s) {
        var a = t._dbSchema;
        i.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = wi("$meta", Qo("")[0], []), t._storeNames.push("$meta"));
        var c = t._createTransaction("readwrite", t._storeNames, a);
        c.create(i), c._completion.catch(s);
        var h = c._reject.bind(c), g = ne.transless || ne;
        Gt(function() {
          return ne.trans = c, ne.transless = g, r !== 0 ? (Pr(t, i), x = r, ((b = c).storeNames.includes("$meta") ? b.table("$meta").get("version").then(function(S) {
            return S ?? x;
          }) : Z.resolve(x)).then(function(S) {
            return k = S, _ = c, O = i, P = [], S = (m = t)._versions, E = m._dbSchema = Ar(0, m.idbdb, O), (S = S.filter(function(C) {
              return C._cfg.version >= k;
            })).length !== 0 ? (S.forEach(function(C) {
              P.push(function() {
                var T = E, I = C._cfg.dbschema;
                Tr(m, T, O), Tr(m, I, O), E = m._dbSchema = I;
                var j = Si(T, I);
                j.add.forEach(function(X) {
                  Ei(O, X[0], X[1].primKey, X[1].indexes);
                }), j.change.forEach(function(X) {
                  if (X.recreate) throw new oe.Upgrade("Not yet support for changing primary key");
                  var J = O.objectStore(X.name);
                  X.add.forEach(function(ee) {
                    return Cr(J, ee);
                  }), X.change.forEach(function(ee) {
                    J.deleteIndex(ee.name), Cr(J, ee);
                  }), X.del.forEach(function(ee) {
                    return J.deleteIndex(ee);
                  });
                });
                var L = C._cfg.contentUpgrade;
                if (L && C._cfg.version > k) {
                  Pr(m, O), _._memoizedTables = {};
                  var W = Y(I);
                  j.del.forEach(function(X) {
                    W[X] = T[X];
                  }), Oi(m, [m.Transaction.prototype]), kr(m, [m.Transaction.prototype], d(W), W), _.schema = W;
                  var U, $ = Ot(L);
                  return $ && xn(), j = Z.follow(function() {
                    var X;
                    (U = L(_)) && $ && (X = Jt.bind(null, null), U.then(X, X));
                  }), U && typeof U.then == "function" ? Z.resolve(U) : j.then(function() {
                    return U;
                  });
                }
              }), P.push(function(T) {
                var I, j, L = C._cfg.dbschema;
                I = L, j = T, [].slice.call(j.db.objectStoreNames).forEach(function(W) {
                  return I[W] == null && j.db.deleteObjectStore(W);
                }), Oi(m, [m.Transaction.prototype]), kr(m, [m.Transaction.prototype], m._storeNames, m._dbSchema), _.schema = m._dbSchema;
              }), P.push(function(T) {
                m.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(m.idbdb.version / 10) === C._cfg.version ? (m.idbdb.deleteObjectStore("$meta"), delete m._dbSchema.$meta, m._storeNames = m._storeNames.filter(function(I) {
                  return I !== "$meta";
                })) : T.objectStore("$meta").put(C._cfg.version, "version"));
              });
            }), function C() {
              return P.length ? Z.resolve(P.shift()(_.idbtrans)).then(C) : Z.resolve();
            }().then(function() {
              Jo(E, O);
            })) : Z.resolve();
            var m, k, _, O, P, E;
          }).catch(h)) : (d(a).forEach(function(S) {
            Ei(i, S, a[S].primKey, a[S].indexes);
          }), Pr(t, i), void Z.follow(function() {
            return t.on.populate.fire(c);
          }).catch(h));
          var b, x;
        });
      }
      function ra(t, r) {
        Jo(t._dbSchema, r), r.db.version % 10 != 0 || r.objectStoreNames.contains("$meta") || r.db.createObjectStore("$meta").add(Math.ceil(r.db.version / 10 - 1), "version");
        var i = Ar(0, t.idbdb, r);
        Tr(t, t._dbSchema, r);
        for (var s = 0, a = Si(i, t._dbSchema).change; s < a.length; s++) {
          var c = function(h) {
            if (h.change.length || h.recreate) return console.warn("Unable to patch indexes of table ".concat(h.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var g = r.objectStore(h.name);
            h.add.forEach(function(b) {
              M && console.debug("Dexie upgrade patch: Creating missing index ".concat(h.name, ".").concat(b.src)), Cr(g, b);
            });
          }(a[s]);
          if (typeof c == "object") return c.value;
        }
      }
      function Si(t, r) {
        var i, s = { del: [], add: [], change: [] };
        for (i in t) r[i] || s.del.push(i);
        for (i in r) {
          var a = t[i], c = r[i];
          if (a) {
            var h = { name: i, def: c, recreate: !1, del: [], add: [], change: [] };
            if ("" + (a.primKey.keyPath || "") != "" + (c.primKey.keyPath || "") || a.primKey.auto !== c.primKey.auto) h.recreate = !0, s.change.push(h);
            else {
              var g = a.idxByName, b = c.idxByName, x = void 0;
              for (x in g) b[x] || h.del.push(x);
              for (x in b) {
                var S = g[x], m = b[x];
                S ? S.src !== m.src && h.change.push(m) : h.add.push(m);
              }
              (0 < h.del.length || 0 < h.add.length || 0 < h.change.length) && s.change.push(h);
            }
          } else s.add.push([i, c]);
        }
        return s;
      }
      function Ei(t, r, i, s) {
        var a = t.db.createObjectStore(r, i.keyPath ? { keyPath: i.keyPath, autoIncrement: i.auto } : { autoIncrement: i.auto });
        return s.forEach(function(c) {
          return Cr(a, c);
        }), a;
      }
      function Jo(t, r) {
        d(t).forEach(function(i) {
          r.db.objectStoreNames.contains(i) || (M && console.debug("Dexie: Creating missing table", i), Ei(r, i, t[i].primKey, t[i].indexes));
        });
      }
      function Cr(t, r) {
        t.createIndex(r.name, r.keyPath, { unique: r.unique, multiEntry: r.multi });
      }
      function Ar(t, r, i) {
        var s = {};
        return Ee(r.objectStoreNames, 0).forEach(function(a) {
          for (var c = i.objectStore(a), h = _i(zo(x = c.keyPath), x || "", !0, !1, !!c.autoIncrement, x && typeof x != "string", !0), g = [], b = 0; b < c.indexNames.length; ++b) {
            var S = c.index(c.indexNames[b]), x = S.keyPath, S = _i(S.name, x, !!S.unique, !!S.multiEntry, !1, x && typeof x != "string", !1);
            g.push(S);
          }
          s[a] = wi(a, h, g);
        }), s;
      }
      function Tr(t, r, i) {
        for (var s = i.db.objectStoreNames, a = 0; a < s.length; ++a) {
          var c = s[a], h = i.objectStore(c);
          t._hasGetAll = "getAll" in h;
          for (var g = 0; g < h.indexNames.length; ++g) {
            var b = h.indexNames[g], x = h.index(b).keyPath, S = typeof x == "string" ? x : "[" + Ee(x).join("+") + "]";
            !r[c] || (x = r[c].idxByName[S]) && (x.name = b, delete r[c].idxByName[S], r[c].idxByName[b] = x);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && f.WorkerGlobalScope && f instanceof f.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (t._hasGetAll = !1);
      }
      function Qo(t) {
        return t.split(",").map(function(r, i) {
          var c = r.split(":"), s = (a = c[1]) === null || a === void 0 ? void 0 : a.trim(), a = (r = c[0].trim()).replace(/([&*]|\+\+)/g, ""), c = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return _i(a, c || null, /\&/.test(r), /\*/.test(r), /\+\+/.test(r), y(c), i === 0, s);
        });
      }
      var ia = (Pn.prototype._createTableSchema = wi, Pn.prototype._parseIndexSyntax = Qo, Pn.prototype._parseStoresSpec = function(t, r) {
        var i = this;
        d(t).forEach(function(s) {
          if (t[s] !== null) {
            var a = i._parseIndexSyntax(t[s]), c = a.shift();
            if (!c) throw new oe.Schema("Invalid schema for table " + s + ": " + t[s]);
            if (c.unique = !0, c.multi) throw new oe.Schema("Primary key cannot be multiEntry*");
            a.forEach(function(h) {
              if (h.auto) throw new oe.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!h.keyPath) throw new oe.Schema("Index must have a name and cannot be an empty string");
            }), a = i._createTableSchema(s, c, a), r[s] = a;
          }
        });
      }, Pn.prototype.stores = function(i) {
        var r = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? v(this._cfg.storesSource, i) : i;
        var i = r._versions, s = {}, a = {};
        return i.forEach(function(c) {
          v(s, c._cfg.storesSource), a = c._cfg.dbschema = {}, c._parseStoresSpec(s, a);
        }), r._dbSchema = a, Oi(r, [r._allTables, r, r.Transaction.prototype]), kr(r, [r._allTables, r, r.Transaction.prototype, this._cfg.tables], d(a), a), r._storeNames = d(a), this;
      }, Pn.prototype.upgrade = function(t) {
        return this._cfg.contentUpgrade = H(this._cfg.contentUpgrade || p, t), this;
      }, Pn);
      function Pn() {
      }
      function Pi(t, r) {
        var i = t._dbNamesDB;
        return i || (i = t._dbNamesDB = new Mt(_r, { addons: [], indexedDB: t, IDBKeyRange: r })).version(1).stores({ dbnames: "name" }), i.table("dbnames");
      }
      function ki(t) {
        return t && typeof t.databases == "function";
      }
      function Ci(t) {
        return Gt(function() {
          return ne.letThrough = !0, t();
        });
      }
      function Ai(t) {
        return !("from" in t);
      }
      var tt = function(t, r) {
        if (!this) {
          var i = new tt();
          return t && "d" in t && v(i, t), i;
        }
        v(this, arguments.length ? { d: 1, from: t, to: 1 < arguments.length ? r : t } : { d: 0 });
      };
      function Yn(t, r, i) {
        var s = be(r, i);
        if (!isNaN(s)) {
          if (0 < s) throw RangeError();
          if (Ai(t)) return v(t, { from: r, to: i, d: 1 });
          var a = t.l, s = t.r;
          if (be(i, t.from) < 0) return a ? Yn(a, r, i) : t.l = { from: r, to: i, d: 1, l: null, r: null }, Zo(t);
          if (0 < be(r, t.to)) return s ? Yn(s, r, i) : t.r = { from: r, to: i, d: 1, l: null, r: null }, Zo(t);
          be(r, t.from) < 0 && (t.from = r, t.l = null, t.d = s ? s.d + 1 : 1), 0 < be(i, t.to) && (t.to = i, t.r = null, t.d = t.l ? t.l.d + 1 : 1), i = !t.r, a && !t.l && zn(t, a), s && i && zn(t, s);
        }
      }
      function zn(t, r) {
        Ai(r) || function i(s, b) {
          var c = b.from, h = b.to, g = b.l, b = b.r;
          Yn(s, c, h), g && i(s, g), b && i(s, b);
        }(t, r);
      }
      function Xo(t, r) {
        var i = Rr(r), s = i.next();
        if (s.done) return !1;
        for (var a = s.value, c = Rr(t), h = c.next(a.from), g = h.value; !s.done && !h.done; ) {
          if (be(g.from, a.to) <= 0 && 0 <= be(g.to, a.from)) return !0;
          be(a.from, g.from) < 0 ? a = (s = i.next(g.from)).value : g = (h = c.next(a.from)).value;
        }
        return !1;
      }
      function Rr(t) {
        var r = Ai(t) ? null : { s: 0, n: t };
        return { next: function(i) {
          for (var s = 0 < arguments.length; r; ) switch (r.s) {
            case 0:
              if (r.s = 1, s) for (; r.n.l && be(i, r.n.from) < 0; ) r = { up: r, n: r.n.l, s: 1 };
              else for (; r.n.l; ) r = { up: r, n: r.n.l, s: 1 };
            case 1:
              if (r.s = 2, !s || be(i, r.n.to) <= 0) return { value: r.n, done: !1 };
            case 2:
              if (r.n.r) {
                r.s = 3, r = { up: r, n: r.n.r, s: 0 };
                continue;
              }
            case 3:
              r = r.up;
          }
          return { done: !0 };
        } };
      }
      function Zo(t) {
        var r, i, s = (((r = t.r) === null || r === void 0 ? void 0 : r.d) || 0) - (((i = t.l) === null || i === void 0 ? void 0 : i.d) || 0), a = 1 < s ? "r" : s < -1 ? "l" : "";
        a && (r = a == "r" ? "l" : "r", i = u({}, t), s = t[a], t.from = s.from, t.to = s.to, t[a] = s[a], i[a] = s[r], (t[r] = i).d = es(i)), t.d = es(t);
      }
      function es(i) {
        var r = i.r, i = i.l;
        return (r ? i ? Math.max(r.d, i.d) : r.d : i ? i.d : 0) + 1;
      }
      function Ir(t, r) {
        return d(r).forEach(function(i) {
          t[i] ? zn(t[i], r[i]) : t[i] = function s(a) {
            var c, h, g = {};
            for (c in a) K(a, c) && (h = a[c], g[c] = !h || typeof h != "object" || Ce.has(h.constructor) ? h : s(h));
            return g;
          }(r[i]);
        }), t;
      }
      function Ti(t, r) {
        return t.all || r.all || Object.keys(t).some(function(i) {
          return r[i] && Xo(r[i], t[i]);
        });
      }
      V(tt.prototype, ((_t = { add: function(t) {
        return zn(this, t), this;
      }, addKey: function(t) {
        return Yn(this, t, t), this;
      }, addKeys: function(t) {
        var r = this;
        return t.forEach(function(i) {
          return Yn(r, i, i);
        }), this;
      }, hasKey: function(t) {
        var r = Rr(this).next(t).value;
        return r && be(r.from, t) <= 0 && 0 <= be(r.to, t);
      } })[$e] = function() {
        return Rr(this);
      }, _t));
      var fn = {}, Ri = {}, Ii = !1;
      function Kr(t) {
        Ir(Ri, t), Ii || (Ii = !0, setTimeout(function() {
          Ii = !1, Ki(Ri, !(Ri = {}));
        }, 0));
      }
      function Ki(t, r) {
        r === void 0 && (r = !1);
        var i = /* @__PURE__ */ new Set();
        if (t.all) for (var s = 0, a = Object.values(fn); s < a.length; s++) ts(h = a[s], t, i, r);
        else for (var c in t) {
          var h, g = /^idb\:\/\/(.*)\/(.*)\//.exec(c);
          g && (c = g[1], g = g[2], (h = fn["idb://".concat(c, "/").concat(g)]) && ts(h, t, i, r));
        }
        i.forEach(function(b) {
          return b();
        });
      }
      function ts(t, r, i, s) {
        for (var a = [], c = 0, h = Object.entries(t.queries.query); c < h.length; c++) {
          for (var g = h[c], b = g[0], x = [], S = 0, m = g[1]; S < m.length; S++) {
            var k = m[S];
            Ti(r, k.obsSet) ? k.subscribers.forEach(function(E) {
              return i.add(E);
            }) : s && x.push(k);
          }
          s && a.push([b, x]);
        }
        if (s) for (var _ = 0, O = a; _ < O.length; _++) {
          var P = O[_], b = P[0], x = P[1];
          t.queries.query[b] = x;
        }
      }
      function oa(t) {
        var r = t._state, i = t._deps.indexedDB;
        if (r.isBeingOpened || t.idbdb) return r.dbReadyPromise.then(function() {
          return r.dbOpenError ? Le(r.dbOpenError) : t;
        });
        r.isBeingOpened = !0, r.dbOpenError = null, r.openComplete = !1;
        var s = r.openCanceller, a = Math.round(10 * t.verno), c = !1;
        function h() {
          if (r.openCanceller !== s) throw new oe.DatabaseClosed("db.open() was cancelled");
        }
        function g() {
          return new Z(function(k, _) {
            if (h(), !i) throw new oe.MissingAPI();
            var O = t.name, P = r.autoSchema || !a ? i.open(O) : i.open(O, a);
            if (!P) throw new oe.MissingAPI();
            P.onerror = Ct(_), P.onblocked = Me(t._fireOnBlocked), P.onupgradeneeded = Me(function(E) {
              var C;
              S = P.transaction, r.autoSchema && !t._options.allowEmptyDB ? (P.onerror = Vn, S.abort(), P.result.close(), (C = i.deleteDatabase(O)).onsuccess = C.onerror = Me(function() {
                _(new oe.NoSuchDatabase("Database ".concat(O, " doesnt exist")));
              })) : (S.onerror = Ct(_), E = E.oldVersion > Math.pow(2, 62) ? 0 : E.oldVersion, m = E < 1, t.idbdb = P.result, c && ra(t, S), na(t, E / 10, S, _));
            }, _), P.onsuccess = Me(function() {
              S = null;
              var E, C, T, I, j, L = t.idbdb = P.result, W = Ee(L.objectStoreNames);
              if (0 < W.length) try {
                var U = L.transaction((I = W).length === 1 ? I[0] : I, "readonly");
                if (r.autoSchema) C = L, T = U, (E = t).verno = C.version / 10, T = E._dbSchema = Ar(0, C, T), E._storeNames = Ee(C.objectStoreNames, 0), kr(E, [E._allTables], d(T), T);
                else if (Tr(t, t._dbSchema, U), ((j = Si(Ar(0, (j = t).idbdb, U), j._dbSchema)).add.length || j.change.some(function($) {
                  return $.add.length || $.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), L.close(), a = L.version + 1, c = !0, k(g());
                Pr(t, U);
              } catch {
              }
              On.push(t), L.onversionchange = Me(function($) {
                r.vcFired = !0, t.on("versionchange").fire($);
              }), L.onclose = Me(function($) {
                t.on("close").fire($);
              }), m && (j = t._deps, U = O, L = j.indexedDB, j = j.IDBKeyRange, ki(L) || U === _r || Pi(L, j).put({ name: U }).catch(p)), k();
            }, _);
          }).catch(function(k) {
            switch (k?.name) {
              case "UnknownError":
                if (0 < r.PR1398_maxLoop) return r.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), g();
                break;
              case "VersionError":
                if (0 < a) return a = 0, g();
            }
            return Z.reject(k);
          });
        }
        var b, x = r.dbReadyResolve, S = null, m = !1;
        return Z.race([s, (typeof navigator > "u" ? Z.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(k) {
          function _() {
            return indexedDB.databases().finally(k);
          }
          b = setInterval(_, 100), _();
        }).finally(function() {
          return clearInterval(b);
        }) : Promise.resolve()).then(g)]).then(function() {
          return h(), r.onReadyBeingFired = [], Z.resolve(Ci(function() {
            return t.on.ready.fire(t.vip);
          })).then(function k() {
            if (0 < r.onReadyBeingFired.length) {
              var _ = r.onReadyBeingFired.reduce(H, p);
              return r.onReadyBeingFired = [], Z.resolve(Ci(function() {
                return _(t.vip);
              })).then(k);
            }
          });
        }).finally(function() {
          r.openCanceller === s && (r.onReadyBeingFired = null, r.isBeingOpened = !1);
        }).catch(function(k) {
          r.dbOpenError = k;
          try {
            S && S.abort();
          } catch {
          }
          return s === r.openCanceller && t._close(), Le(k);
        }).finally(function() {
          r.openComplete = !0, x();
        }).then(function() {
          var k;
          return m && (k = {}, t.tables.forEach(function(_) {
            _.schema.indexes.forEach(function(O) {
              O.name && (k["idb://".concat(t.name, "/").concat(_.name, "/").concat(O.name)] = new tt(-1 / 0, [[[]]]));
            }), k["idb://".concat(t.name, "/").concat(_.name, "/")] = k["idb://".concat(t.name, "/").concat(_.name, "/:dels")] = new tt(-1 / 0, [[[]]]);
          }), Zt($n).fire(k), Ki(k, !0)), t;
        });
      }
      function ji(t) {
        function r(c) {
          return t.next(c);
        }
        var i = a(r), s = a(function(c) {
          return t.throw(c);
        });
        function a(c) {
          return function(b) {
            var g = c(b), b = g.value;
            return g.done ? b : b && typeof b.then == "function" ? b.then(i, s) : y(b) ? Promise.all(b).then(i, s) : i(b);
          };
        }
        return a(r)();
      }
      function jr(t, r, i) {
        for (var s = y(t) ? t.slice() : [t], a = 0; a < i; ++a) s.push(r);
        return s;
      }
      var sa = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(t) {
        return u(u({}, t), { table: function(r) {
          var i = t.table(r), s = i.schema, a = {}, c = [];
          function h(m, k, _) {
            var O = Wn(m), P = a[O] = a[O] || [], E = m == null ? 0 : typeof m == "string" ? 1 : m.length, C = 0 < k, C = u(u({}, _), { name: C ? "".concat(O, "(virtual-from:").concat(_.name, ")") : _.name, lowLevelIndex: _, isVirtual: C, keyTail: k, keyLength: E, extractKey: xi(m), unique: !C && _.unique });
            return P.push(C), C.isPrimaryKey || c.push(C), 1 < E && h(E === 2 ? m[0] : m.slice(0, E - 1), k + 1, _), P.sort(function(T, I) {
              return T.keyTail - I.keyTail;
            }), C;
          }
          r = h(s.primaryKey.keyPath, 0, s.primaryKey), a[":id"] = [r];
          for (var g = 0, b = s.indexes; g < b.length; g++) {
            var x = b[g];
            h(x.keyPath, 0, x);
          }
          function S(m) {
            var k, _ = m.query.index;
            return _.isVirtual ? u(u({}, m), { query: { index: _.lowLevelIndex, range: (k = m.query.range, _ = _.keyTail, { type: k.type === 1 ? 2 : k.type, lower: jr(k.lower, k.lowerOpen ? t.MAX_KEY : t.MIN_KEY, _), lowerOpen: !0, upper: jr(k.upper, k.upperOpen ? t.MIN_KEY : t.MAX_KEY, _), upperOpen: !0 }) } }) : m;
          }
          return u(u({}, i), { schema: u(u({}, s), { primaryKey: r, indexes: c, getIndexByKeyPath: function(m) {
            return (m = a[Wn(m)]) && m[0];
          } }), count: function(m) {
            return i.count(S(m));
          }, query: function(m) {
            return i.query(S(m));
          }, openCursor: function(m) {
            var k = m.query.index, _ = k.keyTail, O = k.isVirtual, P = k.keyLength;
            return O ? i.openCursor(S(m)).then(function(C) {
              return C && E(C);
            }) : i.openCursor(m);
            function E(C) {
              return Object.create(C, { continue: { value: function(T) {
                T != null ? C.continue(jr(T, m.reverse ? t.MAX_KEY : t.MIN_KEY, _)) : m.unique ? C.continue(C.key.slice(0, P).concat(m.reverse ? t.MIN_KEY : t.MAX_KEY, _)) : C.continue();
              } }, continuePrimaryKey: { value: function(T, I) {
                C.continuePrimaryKey(jr(T, t.MAX_KEY, _), I);
              } }, primaryKey: { get: function() {
                return C.primaryKey;
              } }, key: { get: function() {
                var T = C.key;
                return P === 1 ? T[0] : T.slice(0, P);
              } }, value: { get: function() {
                return C.value;
              } } });
            }
          } });
        } });
      } };
      function Di(t, r, i, s) {
        return i = i || {}, s = s || "", d(t).forEach(function(a) {
          var c, h, g;
          K(r, a) ? (c = t[a], h = r[a], typeof c == "object" && typeof h == "object" && c && h ? (g = Pt(c)) !== Pt(h) ? i[s + a] = r[a] : g === "Object" ? Di(c, h, i, s + a + ".") : c !== h && (i[s + a] = r[a]) : c !== h && (i[s + a] = r[a])) : i[s + a] = void 0;
        }), d(r).forEach(function(a) {
          K(t, a) || (i[s + a] = r[a]);
        }), i;
      }
      function Fi(t, r) {
        return r.type === "delete" ? r.keys : r.keys || r.values.map(t.extractKey);
      }
      var ua = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(t) {
        return u(u({}, t), { table: function(r) {
          var i = t.table(r), s = i.schema.primaryKey;
          return u(u({}, i), { mutate: function(a) {
            var c = ne.trans, h = c.table(r).hook, g = h.deleting, b = h.creating, x = h.updating;
            switch (a.type) {
              case "add":
                if (b.fire === p) break;
                return c._promise("readwrite", function() {
                  return S(a);
                }, !0);
              case "put":
                if (b.fire === p && x.fire === p) break;
                return c._promise("readwrite", function() {
                  return S(a);
                }, !0);
              case "delete":
                if (g.fire === p) break;
                return c._promise("readwrite", function() {
                  return S(a);
                }, !0);
              case "deleteRange":
                if (g.fire === p) break;
                return c._promise("readwrite", function() {
                  return function m(k, _, O) {
                    return i.query({ trans: k, values: !1, query: { index: s, range: _ }, limit: O }).then(function(P) {
                      var E = P.result;
                      return S({ type: "delete", keys: E, trans: k }).then(function(C) {
                        return 0 < C.numFailures ? Promise.reject(C.failures[0]) : E.length < O ? { failures: [], numFailures: 0, lastResult: void 0 } : m(k, u(u({}, _), { lower: E[E.length - 1], lowerOpen: !0 }), O);
                      });
                    });
                  }(a.trans, a.range, 1e4);
                }, !0);
            }
            return i.mutate(a);
            function S(m) {
              var k, _, O, P = ne.trans, E = m.keys || Fi(s, m);
              if (!E) throw new Error("Keys missing");
              return (m = m.type === "add" || m.type === "put" ? u(u({}, m), { keys: E }) : u({}, m)).type !== "delete" && (m.values = l([], m.values)), m.keys && (m.keys = l([], m.keys)), k = i, O = E, ((_ = m).type === "add" ? Promise.resolve([]) : k.getMany({ trans: _.trans, keys: O, cache: "immutable" })).then(function(C) {
                var T = E.map(function(I, j) {
                  var L, W, U, $ = C[j], X = { onerror: null, onsuccess: null };
                  return m.type === "delete" ? g.fire.call(X, I, $, P) : m.type === "add" || $ === void 0 ? (L = b.fire.call(X, I, m.values[j], P), I == null && L != null && (m.keys[j] = I = L, s.outbound || F(m.values[j], s.keyPath, I))) : (L = Di($, m.values[j]), (W = x.fire.call(X, L, I, $, P)) && (U = m.values[j], Object.keys(W).forEach(function(J) {
                    K(U, J) ? U[J] = W[J] : F(U, J, W[J]);
                  }))), X;
                });
                return i.mutate(m).then(function(I) {
                  for (var j = I.failures, L = I.results, W = I.numFailures, I = I.lastResult, U = 0; U < E.length; ++U) {
                    var $ = (L || E)[U], X = T[U];
                    $ == null ? X.onerror && X.onerror(j[U]) : X.onsuccess && X.onsuccess(m.type === "put" && C[U] ? m.values[U] : $);
                  }
                  return { failures: j, results: L, numFailures: W, lastResult: I };
                }).catch(function(I) {
                  return T.forEach(function(j) {
                    return j.onerror && j.onerror(I);
                  }), Promise.reject(I);
                });
              });
            }
          } });
        } });
      } };
      function ns(t, r, i) {
        try {
          if (!r || r.keys.length < t.length) return null;
          for (var s = [], a = 0, c = 0; a < r.keys.length && c < t.length; ++a) be(r.keys[a], t[c]) === 0 && (s.push(i ? He(r.values[a]) : r.values[a]), ++c);
          return s.length === t.length ? s : null;
        } catch {
          return null;
        }
      }
      var aa = { stack: "dbcore", level: -1, create: function(t) {
        return { table: function(r) {
          var i = t.table(r);
          return u(u({}, i), { getMany: function(s) {
            if (!s.cache) return i.getMany(s);
            var a = ns(s.keys, s.trans._cache, s.cache === "clone");
            return a ? Z.resolve(a) : i.getMany(s).then(function(c) {
              return s.trans._cache = { keys: s.keys, values: s.cache === "clone" ? He(c) : c }, c;
            });
          }, mutate: function(s) {
            return s.type !== "add" && (s.trans._cache = null), i.mutate(s);
          } });
        } };
      } };
      function rs(t, r) {
        return t.trans.mode === "readonly" && !!t.subscr && !t.trans.explicit && t.trans.db._options.cache !== "disabled" && !r.schema.primaryKey.outbound;
      }
      function is(t, r) {
        switch (t) {
          case "query":
            return r.values && !r.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return !1;
        }
      }
      var la = { stack: "dbcore", level: 0, name: "Observability", create: function(t) {
        var r = t.schema.name, i = new tt(t.MIN_KEY, t.MAX_KEY);
        return u(u({}, t), { transaction: function(s, a, c) {
          if (ne.subscr && a !== "readonly") throw new oe.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ne.querier));
          return t.transaction(s, a, c);
        }, table: function(s) {
          var a = t.table(s), c = a.schema, h = c.primaryKey, m = c.indexes, g = h.extractKey, b = h.outbound, x = h.autoIncrement && m.filter(function(_) {
            return _.compound && _.keyPath.includes(h.keyPath);
          }), S = u(u({}, a), { mutate: function(_) {
            function O(J) {
              return J = "idb://".concat(r, "/").concat(s, "/").concat(J), I[J] || (I[J] = new tt());
            }
            var P, E, C, T = _.trans, I = _.mutatedParts || (_.mutatedParts = {}), j = O(""), L = O(":dels"), W = _.type, X = _.type === "deleteRange" ? [_.range] : _.type === "delete" ? [_.keys] : _.values.length < 50 ? [Fi(h, _).filter(function(J) {
              return J;
            }), _.values] : [], U = X[0], $ = X[1], X = _.trans._cache;
            return y(U) ? (j.addKeys(U), (X = W === "delete" || U.length === $.length ? ns(U, X) : null) || L.addKeys(U), (X || $) && (P = O, E = X, C = $, c.indexes.forEach(function(J) {
              var ee = P(J.name || "");
              function ye(he) {
                return he != null ? J.extractKey(he) : null;
              }
              function xe(he) {
                return J.multiEntry && y(he) ? he.forEach(function(Ne) {
                  return ee.addKey(Ne);
                }) : ee.addKey(he);
              }
              (E || C).forEach(function(he, nt) {
                var fe = E && ye(E[nt]), nt = C && ye(C[nt]);
                be(fe, nt) !== 0 && (fe != null && xe(fe), nt != null && xe(nt));
              });
            }))) : U ? ($ = { from: ($ = U.lower) !== null && $ !== void 0 ? $ : t.MIN_KEY, to: ($ = U.upper) !== null && $ !== void 0 ? $ : t.MAX_KEY }, L.add($), j.add($)) : (j.add(i), L.add(i), c.indexes.forEach(function(J) {
              return O(J.name).add(i);
            })), a.mutate(_).then(function(J) {
              return !U || _.type !== "add" && _.type !== "put" || (j.addKeys(J.results), x && x.forEach(function(ee) {
                for (var ye = _.values.map(function(fe) {
                  return ee.extractKey(fe);
                }), xe = ee.keyPath.findIndex(function(fe) {
                  return fe === h.keyPath;
                }), he = 0, Ne = J.results.length; he < Ne; ++he) ye[he][xe] = J.results[he];
                O(ee.name).addKeys(ye);
              })), T.mutatedParts = Ir(T.mutatedParts || {}, I), J;
            });
          } }), m = function(O) {
            var P = O.query, O = P.index, P = P.range;
            return [O, new tt((O = P.lower) !== null && O !== void 0 ? O : t.MIN_KEY, (P = P.upper) !== null && P !== void 0 ? P : t.MAX_KEY)];
          }, k = { get: function(_) {
            return [h, new tt(_.key)];
          }, getMany: function(_) {
            return [h, new tt().addKeys(_.keys)];
          }, count: m, query: m, openCursor: m };
          return d(k).forEach(function(_) {
            S[_] = function(O) {
              var P = ne.subscr, E = !!P, C = rs(ne, a) && is(_, O) ? O.obsSet = {} : P;
              if (E) {
                var T = function($) {
                  return $ = "idb://".concat(r, "/").concat(s, "/").concat($), C[$] || (C[$] = new tt());
                }, I = T(""), j = T(":dels"), P = k[_](O), E = P[0], P = P[1];
                if ((_ === "query" && E.isPrimaryKey && !O.values ? j : T(E.name || "")).add(P), !E.isPrimaryKey) {
                  if (_ !== "count") {
                    var L = _ === "query" && b && O.values && a.query(u(u({}, O), { values: !1 }));
                    return a[_].apply(this, arguments).then(function($) {
                      if (_ === "query") {
                        if (b && O.values) return L.then(function(ye) {
                          return ye = ye.result, I.addKeys(ye), $;
                        });
                        var X = O.values ? $.result.map(g) : $.result;
                        (O.values ? I : j).addKeys(X);
                      } else if (_ === "openCursor") {
                        var J = $, ee = O.values;
                        return J && Object.create(J, { key: { get: function() {
                          return j.addKey(J.primaryKey), J.key;
                        } }, primaryKey: { get: function() {
                          var ye = J.primaryKey;
                          return j.addKey(ye), ye;
                        } }, value: { get: function() {
                          return ee && I.addKey(J.primaryKey), J.value;
                        } } });
                      }
                      return $;
                    });
                  }
                  j.add(i);
                }
              }
              return a[_].apply(this, arguments);
            };
          }), S;
        } });
      } };
      function os(t, r, i) {
        if (i.numFailures === 0) return r;
        if (r.type === "deleteRange") return null;
        var s = r.keys ? r.keys.length : "values" in r && r.values ? r.values.length : 1;
        return i.numFailures === s ? null : (r = u({}, r), y(r.keys) && (r.keys = r.keys.filter(function(a, c) {
          return !(c in i.failures);
        })), "values" in r && y(r.values) && (r.values = r.values.filter(function(a, c) {
          return !(c in i.failures);
        })), r);
      }
      function Mi(t, r) {
        return i = t, ((s = r).lower === void 0 || (s.lowerOpen ? 0 < be(i, s.lower) : 0 <= be(i, s.lower))) && (t = t, (r = r).upper === void 0 || (r.upperOpen ? be(t, r.upper) < 0 : be(t, r.upper) <= 0));
        var i, s;
      }
      function ss(t, r, k, s, a, c) {
        if (!k || k.length === 0) return t;
        var h = r.query.index, g = h.multiEntry, b = r.query.range, x = s.schema.primaryKey.extractKey, S = h.extractKey, m = (h.lowLevelIndex || h).extractKey, k = k.reduce(function(_, O) {
          var P = _, E = [];
          if (O.type === "add" || O.type === "put") for (var C = new tt(), T = O.values.length - 1; 0 <= T; --T) {
            var I, j = O.values[T], L = x(j);
            C.hasKey(L) || (I = S(j), (g && y(I) ? I.some(function(J) {
              return Mi(J, b);
            }) : Mi(I, b)) && (C.addKey(L), E.push(j)));
          }
          switch (O.type) {
            case "add":
              var W = new tt().addKeys(r.values ? _.map(function(ee) {
                return x(ee);
              }) : _), P = _.concat(r.values ? E.filter(function(ee) {
                return ee = x(ee), !W.hasKey(ee) && (W.addKey(ee), !0);
              }) : E.map(function(ee) {
                return x(ee);
              }).filter(function(ee) {
                return !W.hasKey(ee) && (W.addKey(ee), !0);
              }));
              break;
            case "put":
              var U = new tt().addKeys(O.values.map(function(ee) {
                return x(ee);
              }));
              P = _.filter(function(ee) {
                return !U.hasKey(r.values ? x(ee) : ee);
              }).concat(r.values ? E : E.map(function(ee) {
                return x(ee);
              }));
              break;
            case "delete":
              var $ = new tt().addKeys(O.keys);
              P = _.filter(function(ee) {
                return !$.hasKey(r.values ? x(ee) : ee);
              });
              break;
            case "deleteRange":
              var X = O.range;
              P = _.filter(function(ee) {
                return !Mi(x(ee), X);
              });
          }
          return P;
        }, t);
        return k === t ? t : (k.sort(function(_, O) {
          return be(m(_), m(O)) || be(x(_), x(O));
        }), r.limit && r.limit < 1 / 0 && (k.length > r.limit ? k.length = r.limit : t.length === r.limit && k.length < r.limit && (a.dirty = !0)), c ? Object.freeze(k) : k);
      }
      function us(t, r) {
        return be(t.lower, r.lower) === 0 && be(t.upper, r.upper) === 0 && !!t.lowerOpen == !!r.lowerOpen && !!t.upperOpen == !!r.upperOpen;
      }
      function ca(t, r) {
        return function(i, s, a, c) {
          if (i === void 0) return s !== void 0 ? -1 : 0;
          if (s === void 0) return 1;
          if ((s = be(i, s)) === 0) {
            if (a && c) return 0;
            if (a) return 1;
            if (c) return -1;
          }
          return s;
        }(t.lower, r.lower, t.lowerOpen, r.lowerOpen) <= 0 && 0 <= function(i, s, a, c) {
          if (i === void 0) return s !== void 0 ? 1 : 0;
          if (s === void 0) return -1;
          if ((s = be(i, s)) === 0) {
            if (a && c) return 0;
            if (a) return -1;
            if (c) return 1;
          }
          return s;
        }(t.upper, r.upper, t.upperOpen, r.upperOpen);
      }
      function fa(t, r, i, s) {
        t.subscribers.add(i), s.addEventListener("abort", function() {
          var a, c;
          t.subscribers.delete(i), t.subscribers.size === 0 && (a = t, c = r, setTimeout(function() {
            a.subscribers.size === 0 && _e(c, a);
          }, 3e3));
        });
      }
      var ha = { stack: "dbcore", level: 0, name: "Cache", create: function(t) {
        var r = t.schema.name;
        return u(u({}, t), { transaction: function(i, s, a) {
          var c, h, g = t.transaction(i, s, a);
          return s === "readwrite" && (h = (c = new AbortController()).signal, a = function(b) {
            return function() {
              if (c.abort(), s === "readwrite") {
                for (var x = /* @__PURE__ */ new Set(), S = 0, m = i; S < m.length; S++) {
                  var k = m[S], _ = fn["idb://".concat(r, "/").concat(k)];
                  if (_) {
                    var O = t.table(k), P = _.optimisticOps.filter(function(ee) {
                      return ee.trans === g;
                    });
                    if (g._explicit && b && g.mutatedParts) for (var E = 0, C = Object.values(_.queries.query); E < C.length; E++) for (var T = 0, I = (W = C[E]).slice(); T < I.length; T++) Ti((U = I[T]).obsSet, g.mutatedParts) && (_e(W, U), U.subscribers.forEach(function(ee) {
                      return x.add(ee);
                    }));
                    else if (0 < P.length) {
                      _.optimisticOps = _.optimisticOps.filter(function(ee) {
                        return ee.trans !== g;
                      });
                      for (var j = 0, L = Object.values(_.queries.query); j < L.length; j++) for (var W, U, $, X = 0, J = (W = L[j]).slice(); X < J.length; X++) (U = J[X]).res != null && g.mutatedParts && (b && !U.dirty ? ($ = Object.isFrozen(U.res), $ = ss(U.res, U.req, P, O, U, $), U.dirty ? (_e(W, U), U.subscribers.forEach(function(ee) {
                        return x.add(ee);
                      })) : $ !== U.res && (U.res = $, U.promise = Z.resolve({ result: $ }))) : (U.dirty && _e(W, U), U.subscribers.forEach(function(ee) {
                        return x.add(ee);
                      })));
                    }
                  }
                }
                x.forEach(function(ee) {
                  return ee();
                });
              }
            };
          }, g.addEventListener("abort", a(!1), { signal: h }), g.addEventListener("error", a(!1), { signal: h }), g.addEventListener("complete", a(!0), { signal: h })), g;
        }, table: function(i) {
          var s = t.table(i), a = s.schema.primaryKey;
          return u(u({}, s), { mutate: function(c) {
            var h = ne.trans;
            if (a.outbound || h.db._options.cache === "disabled" || h.explicit || h.idbtrans.mode !== "readwrite") return s.mutate(c);
            var g = fn["idb://".concat(r, "/").concat(i)];
            return g ? (h = s.mutate(c), c.type !== "add" && c.type !== "put" || !(50 <= c.values.length || Fi(a, c).some(function(b) {
              return b == null;
            })) ? (g.optimisticOps.push(c), c.mutatedParts && Kr(c.mutatedParts), h.then(function(b) {
              0 < b.numFailures && (_e(g.optimisticOps, c), (b = os(0, c, b)) && g.optimisticOps.push(b), c.mutatedParts && Kr(c.mutatedParts));
            }), h.catch(function() {
              _e(g.optimisticOps, c), c.mutatedParts && Kr(c.mutatedParts);
            })) : h.then(function(b) {
              var x = os(0, u(u({}, c), { values: c.values.map(function(S, m) {
                var k;
                return b.failures[m] ? S : (S = (k = a.keyPath) !== null && k !== void 0 && k.includes(".") ? He(S) : u({}, S), F(S, a.keyPath, b.results[m]), S);
              }) }), b);
              g.optimisticOps.push(x), queueMicrotask(function() {
                return c.mutatedParts && Kr(c.mutatedParts);
              });
            }), h) : s.mutate(c);
          }, query: function(c) {
            if (!rs(ne, s) || !is("query", c)) return s.query(c);
            var h = ((x = ne.trans) === null || x === void 0 ? void 0 : x.db._options.cache) === "immutable", m = ne, g = m.requery, b = m.signal, x = function(O, P, E, C) {
              var T = fn["idb://".concat(O, "/").concat(P)];
              if (!T) return [];
              if (!(P = T.queries[E])) return [null, !1, T, null];
              var I = P[(C.query ? C.query.index.name : null) || ""];
              if (!I) return [null, !1, T, null];
              switch (E) {
                case "query":
                  var j = I.find(function(L) {
                    return L.req.limit === C.limit && L.req.values === C.values && us(L.req.query.range, C.query.range);
                  });
                  return j ? [j, !0, T, I] : [I.find(function(L) {
                    return ("limit" in L.req ? L.req.limit : 1 / 0) >= C.limit && (!C.values || L.req.values) && ca(L.req.query.range, C.query.range);
                  }), !1, T, I];
                case "count":
                  return j = I.find(function(L) {
                    return us(L.req.query.range, C.query.range);
                  }), [j, !!j, T, I];
              }
            }(r, i, "query", c), S = x[0], m = x[1], k = x[2], _ = x[3];
            return S && m ? S.obsSet = c.obsSet : (m = s.query(c).then(function(O) {
              var P = O.result;
              if (S && (S.res = P), h) {
                for (var E = 0, C = P.length; E < C; ++E) Object.freeze(P[E]);
                Object.freeze(P);
              } else O.result = He(P);
              return O;
            }).catch(function(O) {
              return _ && S && _e(_, S), Promise.reject(O);
            }), S = { obsSet: c.obsSet, promise: m, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, _ ? _.push(S) : (_ = [S], (k = k || (fn["idb://".concat(r, "/").concat(i)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = _)), fa(S, _, g, b), S.promise.then(function(O) {
              return { result: ss(O.result, c, k?.optimisticOps, s, S, h) };
            });
          } });
        } });
      } };
      function Dr(t, r) {
        return new Proxy(t, { get: function(i, s, a) {
          return s === "db" ? r : Reflect.get(i, s, a);
        } });
      }
      var Mt = (Ue.prototype.version = function(t) {
        if (isNaN(t) || t < 0.1) throw new oe.Type("Given version is not a positive number");
        if (t = Math.round(10 * t) / 10, this.idbdb || this._state.isBeingOpened) throw new oe.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, t);
        var r = this._versions, i = r.filter(function(s) {
          return s._cfg.version === t;
        })[0];
        return i || (i = new this.Version(t), r.push(i), r.sort(ta), i.stores({}), this._state.autoSchema = !1, i);
      }, Ue.prototype._whenReady = function(t) {
        var r = this;
        return this.idbdb && (this._state.openComplete || ne.letThrough || this._vip) ? t() : new Z(function(i, s) {
          if (r._state.openComplete) return s(new oe.DatabaseClosed(r._state.dbOpenError));
          if (!r._state.isBeingOpened) {
            if (!r._state.autoOpen) return void s(new oe.DatabaseClosed());
            r.open().catch(p);
          }
          r._state.dbReadyPromise.then(i, s);
        }).then(t);
      }, Ue.prototype.use = function(t) {
        var r = t.stack, i = t.create, s = t.level, a = t.name;
        return a && this.unuse({ stack: r, name: a }), t = this._middlewares[r] || (this._middlewares[r] = []), t.push({ stack: r, create: i, level: s ?? 10, name: a }), t.sort(function(c, h) {
          return c.level - h.level;
        }), this;
      }, Ue.prototype.unuse = function(t) {
        var r = t.stack, i = t.name, s = t.create;
        return r && this._middlewares[r] && (this._middlewares[r] = this._middlewares[r].filter(function(a) {
          return s ? a.create !== s : !!i && a.name !== i;
        })), this;
      }, Ue.prototype.open = function() {
        var t = this;
        return an(Be, function() {
          return oa(t);
        });
      }, Ue.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var t = this._state, r = On.indexOf(this);
        if (0 <= r && On.splice(r, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        t.isBeingOpened || (t.dbReadyPromise = new Z(function(i) {
          t.dbReadyResolve = i;
        }), t.openCanceller = new Z(function(i, s) {
          t.cancelOpen = s;
        }));
      }, Ue.prototype.close = function(i) {
        var r = (i === void 0 ? { disableAutoOpen: !0 } : i).disableAutoOpen, i = this._state;
        r ? (i.isBeingOpened && i.cancelOpen(new oe.DatabaseClosed()), this._close(), i.autoOpen = !1, i.dbOpenError = new oe.DatabaseClosed()) : (this._close(), i.autoOpen = this._options.autoOpen || i.isBeingOpened, i.openComplete = !1, i.dbOpenError = null);
      }, Ue.prototype.delete = function(t) {
        var r = this;
        t === void 0 && (t = { disableAutoOpen: !0 });
        var i = 0 < arguments.length && typeof arguments[0] != "object", s = this._state;
        return new Z(function(a, c) {
          function h() {
            r.close(t);
            var g = r._deps.indexedDB.deleteDatabase(r.name);
            g.onsuccess = Me(function() {
              var b, x, S;
              b = r._deps, x = r.name, S = b.indexedDB, b = b.IDBKeyRange, ki(S) || x === _r || Pi(S, b).delete(x).catch(p), a();
            }), g.onerror = Ct(c), g.onblocked = r._fireOnBlocked;
          }
          if (i) throw new oe.InvalidArgument("Invalid closeOptions argument to db.delete()");
          s.isBeingOpened ? s.dbReadyPromise.then(h) : h();
        });
      }, Ue.prototype.backendDB = function() {
        return this.idbdb;
      }, Ue.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Ue.prototype.hasBeenClosed = function() {
        var t = this._state.dbOpenError;
        return t && t.name === "DatabaseClosed";
      }, Ue.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Ue.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Ue.prototype, "tables", { get: function() {
        var t = this;
        return d(this._allTables).map(function(r) {
          return t._allTables[r];
        });
      }, enumerable: !1, configurable: !0 }), Ue.prototype.transaction = function() {
        var t = (function(r, i, s) {
          var a = arguments.length;
          if (a < 2) throw new oe.InvalidArgument("Too few arguments");
          for (var c = new Array(a - 1); --a; ) c[a - 1] = arguments[a];
          return s = c.pop(), [r, me(c), s];
        }).apply(this, arguments);
        return this._transaction.apply(this, t);
      }, Ue.prototype._transaction = function(t, r, i) {
        var s = this, a = ne.trans;
        a && a.db === this && t.indexOf("!") === -1 || (a = null);
        var c, h, g = t.indexOf("?") !== -1;
        t = t.replace("!", "").replace("?", "");
        try {
          if (h = r.map(function(x) {
            if (x = x instanceof s.Table ? x.name : x, typeof x != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return x;
          }), t == "r" || t === yi) c = yi;
          else {
            if (t != "rw" && t != gi) throw new oe.InvalidArgument("Invalid transaction mode: " + t);
            c = gi;
          }
          if (a) {
            if (a.mode === yi && c === gi) {
              if (!g) throw new oe.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              a = null;
            }
            a && h.forEach(function(x) {
              if (a && a.storeNames.indexOf(x) === -1) {
                if (!g) throw new oe.SubTransaction("Table " + x + " not included in parent transaction.");
                a = null;
              }
            }), g && a && !a.active && (a = null);
          }
        } catch (x) {
          return a ? a._promise(null, function(S, m) {
            m(x);
          }) : Le(x);
        }
        var b = (function x(S, m, k, _, O) {
          return Z.resolve().then(function() {
            var P = ne.transless || ne, E = S._createTransaction(m, k, S._dbSchema, _);
            if (E.explicit = !0, P = { trans: E, transless: P }, _) E.idbtrans = _.idbtrans;
            else try {
              E.create(), E.idbtrans._explicit = !0, S._state.PR1398_maxLoop = 3;
            } catch (I) {
              return I.name === Wt.InvalidState && S.isOpen() && 0 < --S._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), S.close({ disableAutoOpen: !1 }), S.open().then(function() {
                return x(S, m, k, null, O);
              })) : Le(I);
            }
            var C, T = Ot(O);
            return T && xn(), P = Z.follow(function() {
              var I;
              (C = O.call(E, E)) && (T ? (I = Jt.bind(null, null), C.then(I, I)) : typeof C.next == "function" && typeof C.throw == "function" && (C = ji(C)));
            }, P), (C && typeof C.then == "function" ? Z.resolve(C).then(function(I) {
              return E.active ? I : Le(new oe.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : P.then(function() {
              return C;
            })).then(function(I) {
              return _ && E._resolve(), E._completion.then(function() {
                return I;
              });
            }).catch(function(I) {
              return E._reject(I), Le(I);
            });
          });
        }).bind(null, this, c, h, a, i);
        return a ? a._promise(c, b, "lock") : ne.trans ? an(ne.transless, function() {
          return s._whenReady(b);
        }) : this._whenReady(b);
      }, Ue.prototype.table = function(t) {
        if (!K(this._allTables, t)) throw new oe.InvalidTable("Table ".concat(t, " does not exist"));
        return this._allTables[t];
      }, Ue);
      function Ue(t, r) {
        var i = this;
        this._middlewares = {}, this.verno = 0;
        var s = Ue.dependencies;
        this._options = r = u({ addons: Ue.addons, autoOpen: !0, indexedDB: s.indexedDB, IDBKeyRange: s.IDBKeyRange, cache: "cloned" }, r), this._deps = { indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange }, s = r.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var a, c, h, g, b, x = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: p, dbReadyPromise: null, cancelOpen: p, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: r.autoOpen };
        x.dbReadyPromise = new Z(function(m) {
          x.dbReadyResolve = m;
        }), x.openCanceller = new Z(function(m, k) {
          x.cancelOpen = k;
        }), this._state = x, this.name = t, this.on = qn(this, "populate", "blocked", "versionchange", "close", { ready: [H, p] }), this.once = function(m, k) {
          var _ = function() {
            for (var O = [], P = 0; P < arguments.length; P++) O[P] = arguments[P];
            i.on(m).unsubscribe(_), k.apply(i, O);
          };
          return i.on(m, _);
        }, this.on.ready.subscribe = Pe(this.on.ready.subscribe, function(m) {
          return function(k, _) {
            Ue.vip(function() {
              var O, P = i._state;
              P.openComplete ? (P.dbOpenError || Z.resolve().then(k), _ && m(k)) : P.onReadyBeingFired ? (P.onReadyBeingFired.push(k), _ && m(k)) : (m(k), O = i, _ || m(function E() {
                O.on.ready.unsubscribe(k), O.on.ready.unsubscribe(E);
              }));
            });
          };
        }), this.Collection = (a = this, Ln(zu.prototype, function(C, E) {
          this.db = a;
          var _ = Mo, O = null;
          if (E) try {
            _ = E();
          } catch (T) {
            O = T;
          }
          var P = C._ctx, E = P.table, C = E.hook.reading.fire;
          this._ctx = { table: E, index: P.index, isPrimKey: !P.index || E.schema.primKey.keyPath && P.index === E.schema.primKey.name, range: _, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: O, or: P.or, valueMapper: C !== w ? C : null };
        })), this.Table = (c = this, Ln(Lo.prototype, function(m, k, _) {
          this.db = c, this._tx = _, this.name = m, this.schema = k, this.hook = c._allTables[m] ? c._allTables[m].hook : qn(null, { creating: [B, p], reading: [D, w], updating: [Q, p], deleting: [q, p] });
        })), this.Transaction = (h = this, Ln(Qu.prototype, function(m, k, _, O, P) {
          var E = this;
          m !== "readonly" && k.forEach(function(C) {
            C = (C = _[C]) === null || C === void 0 ? void 0 : C.yProps, C && (k = k.concat(C.map(function(T) {
              return T.updatesTable;
            })));
          }), this.db = h, this.mode = m, this.storeNames = k, this.schema = _, this.chromeTransactionDurability = O, this.idbtrans = null, this.on = qn(this, "complete", "error", "abort"), this.parent = P || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Z(function(C, T) {
            E._resolve = C, E._reject = T;
          }), this._completion.then(function() {
            E.active = !1, E.on.complete.fire();
          }, function(C) {
            var T = E.active;
            return E.active = !1, E.on.error.fire(C), E.parent ? E.parent._reject(C) : T && E.idbtrans && E.idbtrans.abort(), Le(C);
          });
        })), this.Version = (g = this, Ln(ia.prototype, function(m) {
          this.db = g, this._cfg = { version: m, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (b = this, Ln(Yo.prototype, function(m, k, _) {
          if (this.db = b, this._ctx = { table: m, index: k === ":id" ? null : k, or: _ }, this._cmp = this._ascending = be, this._descending = function(O, P) {
            return be(P, O);
          }, this._max = function(O, P) {
            return 0 < be(O, P) ? O : P;
          }, this._min = function(O, P) {
            return be(O, P) < 0 ? O : P;
          }, this._IDBKeyRange = b._deps.IDBKeyRange, !this._IDBKeyRange) throw new oe.MissingAPI();
        })), this.on("versionchange", function(m) {
          0 < m.newVersion ? console.warn("Another connection wants to upgrade database '".concat(i.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(i.name, "'. Closing db now to resume the delete request.")), i.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(m) {
          !m.newVersion || m.newVersion < m.oldVersion ? console.warn("Dexie.delete('".concat(i.name, "') was blocked")) : console.warn("Upgrade '".concat(i.name, "' blocked by other connection holding version ").concat(m.oldVersion / 10));
        }), this._maxKey = Hn(r.IDBKeyRange), this._createTransaction = function(m, k, _, O) {
          return new i.Transaction(m, k, _, i._options.chromeTransactionDurability, O);
        }, this._fireOnBlocked = function(m) {
          i.on("blocked").fire(m), On.filter(function(k) {
            return k.name === i.name && k !== i && !k._state.vcFired;
          }).map(function(k) {
            return k.on("versionchange").fire(m);
          });
        }, this.use(aa), this.use(ha), this.use(la), this.use(sa), this.use(ua);
        var S = new Proxy(this, { get: function(m, k, _) {
          if (k === "_vip") return !0;
          if (k === "table") return function(P) {
            return Dr(i.table(P), S);
          };
          var O = Reflect.get(m, k, _);
          return O instanceof Lo ? Dr(O, S) : k === "tables" ? O.map(function(P) {
            return Dr(P, S);
          }) : k === "_createTransaction" ? function() {
            return Dr(O.apply(this, arguments), S);
          } : O;
        } });
        this.vip = S, s.forEach(function(m) {
          return m(i);
        });
      }
      var Fr, _t = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", da = (Bi.prototype.subscribe = function(t, r, i) {
        return this._subscribe(t && typeof t != "function" ? t : { next: t, error: r, complete: i });
      }, Bi.prototype[_t] = function() {
        return this;
      }, Bi);
      function Bi(t) {
        this._subscribe = t;
      }
      try {
        Fr = { indexedDB: f.indexedDB || f.mozIndexedDB || f.webkitIndexedDB || f.msIndexedDB, IDBKeyRange: f.IDBKeyRange || f.webkitIDBKeyRange };
      } catch {
        Fr = { indexedDB: null, IDBKeyRange: null };
      }
      function as(t) {
        var r, i = !1, s = new da(function(a) {
          var c = Ot(t), h, g = !1, b = {}, x = {}, S = { get closed() {
            return g;
          }, unsubscribe: function() {
            g || (g = !0, h && h.abort(), m && Zt.storagemutated.unsubscribe(_));
          } };
          a.start && a.start(S);
          var m = !1, k = function() {
            return pi(O);
          }, _ = function(P) {
            Ir(b, P), Ti(x, b) && k();
          }, O = function() {
            var P, E, C;
            !g && Fr.indexedDB && (b = {}, P = {}, h && h.abort(), h = new AbortController(), C = function(T) {
              var I = _n();
              try {
                c && xn();
                var j = Gt(t, T);
                return j = c ? j.finally(Jt) : j;
              } finally {
                I && wn();
              }
            }(E = { subscr: P, signal: h.signal, requery: k, querier: t, trans: null }), Promise.resolve(C).then(function(T) {
              i = !0, r = T, g || E.signal.aborted || (b = {}, function(I) {
                for (var j in I) if (K(I, j)) return;
                return 1;
              }(x = P) || m || (Zt($n, _), m = !0), pi(function() {
                return !g && a.next && a.next(T);
              }));
            }, function(T) {
              i = !1, ["DatabaseClosedError", "AbortError"].includes(T?.name) || g || pi(function() {
                g || a.error && a.error(T);
              });
            }));
          };
          return setTimeout(k, 0), S;
        });
        return s.hasValue = function() {
          return i;
        }, s.getValue = function() {
          return r;
        }, s;
      }
      var hn = Mt;
      function Ni(t) {
        var r = en;
        try {
          en = !0, Zt.storagemutated.fire(t), Ki(t, !0);
        } finally {
          en = r;
        }
      }
      V(hn, u(u({}, Nn), { delete: function(t) {
        return new hn(t, { addons: [] }).delete();
      }, exists: function(t) {
        return new hn(t, { addons: [] }).open().then(function(r) {
          return r.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(t) {
        try {
          return r = hn.dependencies, i = r.indexedDB, r = r.IDBKeyRange, (ki(i) ? Promise.resolve(i.databases()).then(function(s) {
            return s.map(function(a) {
              return a.name;
            }).filter(function(a) {
              return a !== _r;
            });
          }) : Pi(i, r).toCollection().primaryKeys()).then(t);
        } catch {
          return Le(new oe.MissingAPI());
        }
        var r, i;
      }, defineClass: function() {
        return function(t) {
          v(this, t);
        };
      }, ignoreTransaction: function(t) {
        return ne.trans ? an(ne.transless, t) : t();
      }, vip: Ci, async: function(t) {
        return function() {
          try {
            var r = ji(t.apply(this, arguments));
            return r && typeof r.then == "function" ? r : Z.resolve(r);
          } catch (i) {
            return Le(i);
          }
        };
      }, spawn: function(t, r, i) {
        try {
          var s = ji(t.apply(i, r || []));
          return s && typeof s.then == "function" ? s : Z.resolve(s);
        } catch (a) {
          return Le(a);
        }
      }, currentTransaction: { get: function() {
        return ne.trans || null;
      } }, waitFor: function(t, r) {
        return r = Z.resolve(typeof t == "function" ? hn.ignoreTransaction(t) : t).timeout(r || 6e4), ne.trans ? ne.trans.waitFor(r) : r;
      }, Promise: Z, debug: { get: function() {
        return M;
      }, set: function(t) {
        ae(t);
      } }, derive: re, extend: v, props: V, override: Pe, Events: qn, on: Zt, liveQuery: as, extendObservabilitySet: Ir, getByKeyPath: Re, setByKeyPath: F, delByKeyPath: function(t, r) {
        typeof r == "string" ? F(t, r, void 0) : "length" in r && [].map.call(r, function(i) {
          F(t, i, void 0);
        });
      }, shallowClone: Y, deepClone: He, getObjectDiff: Di, cmp: be, asap: Te, minKey: -1 / 0, addons: [], connections: On, errnames: Wt, dependencies: Fr, cache: fn, semVer: "4.2.0", version: "4.2.0".split(".").map(function(t) {
        return parseInt(t);
      }).reduce(function(t, r, i) {
        return t + r / Math.pow(10, 2 * i);
      }) })), hn.maxKey = Hn(hn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Zt($n, function(t) {
        en || (t = new CustomEvent(bi, { detail: t }), en = !0, dispatchEvent(t), en = !1);
      }), addEventListener(bi, function(t) {
        t = t.detail, en || Ni(t);
      }));
      var kn, en = !1, ls = function() {
      };
      return typeof BroadcastChannel < "u" && ((ls = function() {
        (kn = new BroadcastChannel(bi)).onmessage = function(t) {
          return t.data && Ni(t.data);
        };
      })(), typeof kn.unref == "function" && kn.unref(), Zt($n, function(t) {
        en || kn.postMessage(t);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(t) {
        if (!Mt.disableBfCache && t.persisted) {
          M && console.debug("Dexie: handling persisted pagehide"), kn?.close();
          for (var r = 0, i = On; r < i.length; r++) i[r].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(t) {
        !Mt.disableBfCache && t.persisted && (M && console.debug("Dexie: handling persisted pageshow"), ls(), Ni({ all: new tt(-1 / 0, [[]]) }));
      })), Z.rejectionMapper = function(t, r) {
        return !t || t instanceof Dt || t instanceof TypeError || t instanceof SyntaxError || !t.name || !Yt[t.name] ? t : (r = new Yt[t.name](r || t.message, t), "stack" in t && ie(r, "stack", { get: function() {
          return this.inner.stack;
        } }), r);
      }, ae(M), u(Mt, Object.freeze({ __proto__: null, Dexie: Mt, liveQuery: as, Entity: Bo, cmp: be, PropModification: Un, replacePrefix: function(t, r) {
        return new Un({ replacePrefix: [t, r] });
      }, add: function(t) {
        return new Un({ add: t });
      }, remove: function(t) {
        return new Un({ remove: t });
      }, default: Mt, RangeSet: tt, mergeRanges: zn, rangesOverlap: Xo }), { default: Mt }), Mt;
    });
  }(Hr)), Hr.exports;
}
var bc = vc();
const lo = /* @__PURE__ */ gc(bc), Ts = Symbol.for("Dexie"), co = globalThis[Ts] || (globalThis[Ts] = lo);
if (lo.semVer !== co.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${lo.semVer} and ${co.semVer}`);
const {
  liveQuery: zc,
  mergeRanges: Gc,
  rangesOverlap: Jc,
  RangeSet: Qc,
  cmp: Xc,
  Entity: Zc,
  PropModification: ef,
  replacePrefix: tf,
  add: nf,
  remove: rf,
  DexieYProvider: of
} = co;
export {
  Vc as $,
  Dc as A,
  ll as B,
  Bu as C,
  tu as D,
  Nu as E,
  wo as F,
  fc as G,
  Sc as H,
  sl as I,
  yl as J,
  gl as K,
  wt as L,
  jc as M,
  ni as N,
  bl as O,
  Uc as P,
  $c as Q,
  uo as R,
  Ga as S,
  Cc as T,
  ri as U,
  Ea as V,
  Je as W,
  kc as X,
  Pc as Y,
  Il as Z,
  Ic as _,
  Qe as a,
  Ec as a0,
  Mc as a1,
  nc as a2,
  Kc as a3,
  tc as a4,
  Zs as a5,
  Bc as a6,
  qc as a7,
  _c as a8,
  Ac as a9,
  Rc as aa,
  yc as ab,
  gc as ac,
  Wc as ad,
  co as ae,
  Hc as af,
  Yc as ag,
  dc as ah,
  ho as b,
  Nc as c,
  Rs as d,
  dt as e,
  wc as f,
  jt as g,
  xc as h,
  ge as i,
  sn as j,
  de as k,
  cr as l,
  go as m,
  Vt as n,
  Oc as o,
  Ya as p,
  Tc as q,
  za as r,
  Pa as s,
  Vr as t,
  Fc as u,
  yu as v,
  Gi as w,
  Lc as x,
  so as y,
  gt as z
};
