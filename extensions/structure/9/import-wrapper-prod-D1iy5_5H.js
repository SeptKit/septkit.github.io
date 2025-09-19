/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function go(e) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const i of e.split(",")) n[i] = 1;
  return (i) => i in n;
}
const Re = {}, In = [], Dt = () => {
}, Pu = () => !1, mo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), qs = (e) => e.startsWith("onUpdate:"), dt = Object.assign, vo = (e, n) => {
  const i = e.indexOf(n);
  i > -1 && e.splice(i, 1);
}, Eu = Object.prototype.hasOwnProperty, Ce = (e, n) => Eu.call(e, n), fe = Array.isArray, Dn = (e) => fr(e) === "[object Map]", Us = (e) => fr(e) === "[object Set]", ms = (e) => fr(e) === "[object Date]", pe = (e) => typeof e == "function", Ze = (e) => typeof e == "string", jt = (e) => typeof e == "symbol", De = (e) => e !== null && typeof e == "object", Ls = (e) => (De(e) || pe(e)) && pe(e.then) && pe(e.catch), Vs = Object.prototype.toString, fr = (e) => Vs.call(e), Su = (e) => fr(e).slice(8, -1), $s = (e) => fr(e) === "[object Object]", bo = (e) => Ze(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Zn = /* @__PURE__ */ go(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ti = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (i) => n[i] || (n[i] = e(i));
}, ku = /-(\w)/g, Kt = ti(
  (e) => e.replace(ku, (n, i) => i ? i.toUpperCase() : "")
), Cu = /\B([A-Z])/g, hr = ti(
  (e) => e.replace(Cu, "-$1").toLowerCase()
), _o = ti((e) => e.charAt(0).toUpperCase() + e.slice(1)), Vi = ti(
  (e) => e ? `on${_o(e)}` : ""
), Lt = (e, n) => !Object.is(e, n), $i = (e, ...n) => {
  for (let i = 0; i < e.length; i++)
    e[i](...n);
}, Zi = (e, n, i, s = !1) => {
  Object.defineProperty(e, n, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: i
  });
}, Tu = (e) => {
  const n = parseFloat(e);
  return isNaN(n) ? e : n;
};
let vs;
const ni = () => vs || (vs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ri(e) {
  if (fe(e)) {
    const n = {};
    for (let i = 0; i < e.length; i++) {
      const s = e[i], l = Ze(s) ? Du(s) : ri(s);
      if (l)
        for (const c in l)
          n[c] = l[c];
    }
    return n;
  } else if (Ze(e) || De(e))
    return e;
}
const Au = /;(?![^(]*\))/g, Ru = /:([^]+)/, Iu = /\/\*[^]*?\*\//g;
function Du(e) {
  const n = {};
  return e.replace(Iu, "").split(Au).forEach((i) => {
    if (i) {
      const s = i.split(Ru);
      s.length > 1 && (n[s[0].trim()] = s[1].trim());
    }
  }), n;
}
function ii(e) {
  let n = "";
  if (Ze(e))
    n = e;
  else if (fe(e))
    for (let i = 0; i < e.length; i++) {
      const s = ii(e[i]);
      s && (n += s + " ");
    }
  else if (De(e))
    for (const i in e)
      e[i] && (n += i + " ");
  return n.trim();
}
function Mc(e) {
  if (!e) return null;
  let { class: n, style: i } = e;
  return n && !Ze(n) && (e.class = ii(n)), i && (e.style = ri(i)), e;
}
const ju = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Bc = /* @__PURE__ */ go(ju);
function Nc(e) {
  return !!e || e === "";
}
function Ku(e, n) {
  if (e.length !== n.length) return !1;
  let i = !0;
  for (let s = 0; i && s < e.length; s++)
    i = wo(e[s], n[s]);
  return i;
}
function wo(e, n) {
  if (e === n) return !0;
  let i = ms(e), s = ms(n);
  if (i || s)
    return i && s ? e.getTime() === n.getTime() : !1;
  if (i = jt(e), s = jt(n), i || s)
    return e === n;
  if (i = fe(e), s = fe(n), i || s)
    return i && s ? Ku(e, n) : !1;
  if (i = De(e), s = De(n), i || s) {
    if (!i || !s)
      return !1;
    const l = Object.keys(e).length, c = Object.keys(n).length;
    if (l !== c)
      return !1;
    for (const h in e) {
      const p = e.hasOwnProperty(h), v = n.hasOwnProperty(h);
      if (p && !v || !p && v || !wo(e[h], n[h]))
        return !1;
    }
  }
  return String(e) === String(n);
}
function qc(e, n) {
  return e.findIndex((i) => wo(i, n));
}
const Hs = (e) => !!(e && e.__v_isRef === !0), Fu = (e) => Ze(e) ? e : e == null ? "" : fe(e) || De(e) && (e.toString === Vs || !pe(e.toString)) ? Hs(e) ? Fu(e.value) : JSON.stringify(e, Ws, 2) : String(e), Ws = (e, n) => Hs(n) ? Ws(e, n.value) : Dn(n) ? {
  [`Map(${n.size})`]: [...n.entries()].reduce(
    (i, [s, l], c) => (i[Hi(s, c) + " =>"] = l, i),
    {}
  )
} : Us(n) ? {
  [`Set(${n.size})`]: [...n.values()].map((i) => Hi(i))
} : jt(n) ? Hi(n) : De(n) && !fe(n) && !$s(n) ? String(n) : n, Hi = (e, n = "") => {
  var i;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    jt(e) ? `Symbol(${(i = e.description) != null ? i : n})` : e
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ot;
class Ys {
  constructor(n = !1) {
    this.detached = n, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ot, !n && ot && (this.index = (ot.scopes || (ot.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let n, i;
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].pause();
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let n, i;
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].resume();
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].resume();
    }
  }
  run(n) {
    if (this._active) {
      const i = ot;
      try {
        return ot = this, n();
      } finally {
        ot = i;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ot, ot = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ot = this.prevScope, this.prevScope = void 0);
  }
  stop(n) {
    if (this._active) {
      this._active = !1;
      let i, s;
      for (i = 0, s = this.effects.length; i < s; i++)
        this.effects[i].stop();
      for (this.effects.length = 0, i = 0, s = this.cleanups.length; i < s; i++)
        this.cleanups[i]();
      if (this.cleanups.length = 0, this.scopes) {
        for (i = 0, s = this.scopes.length; i < s; i++)
          this.scopes[i].stop(!0);
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
function Uc(e) {
  return new Ys(e);
}
function zs() {
  return ot;
}
function Mu(e, n = !1) {
  ot && ot.cleanups.push(e);
}
let je;
const Wi = /* @__PURE__ */ new WeakSet();
class Gs {
  constructor(n) {
    this.fn = n, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ot && ot.active && ot.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Wi.has(this) && (Wi.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Qs(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, bs(this), Xs(this);
    const n = je, i = Pt;
    je = this, Pt = !0;
    try {
      return this.fn();
    } finally {
      Zs(this), je = n, Pt = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let n = this.deps; n; n = n.nextDep)
        Po(n);
      this.deps = this.depsTail = void 0, bs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Wi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    eo(this) && this.run();
  }
  get dirty() {
    return eo(this);
  }
}
let Js = 0, er, tr;
function Qs(e, n = !1) {
  if (e.flags |= 8, n) {
    e.next = tr, tr = e;
    return;
  }
  e.next = er, er = e;
}
function xo() {
  Js++;
}
function Oo() {
  if (--Js > 0)
    return;
  if (tr) {
    let n = tr;
    for (tr = void 0; n; ) {
      const i = n.next;
      n.next = void 0, n.flags &= -9, n = i;
    }
  }
  let e;
  for (; er; ) {
    let n = er;
    for (er = void 0; n; ) {
      const i = n.next;
      if (n.next = void 0, n.flags &= -9, n.flags & 1)
        try {
          n.trigger();
        } catch (s) {
          e || (e = s);
        }
      n = i;
    }
  }
  if (e) throw e;
}
function Xs(e) {
  for (let n = e.deps; n; n = n.nextDep)
    n.version = -1, n.prevActiveLink = n.dep.activeLink, n.dep.activeLink = n;
}
function Zs(e) {
  let n, i = e.depsTail, s = i;
  for (; s; ) {
    const l = s.prevDep;
    s.version === -1 ? (s === i && (i = l), Po(s), Bu(s)) : n = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = l;
  }
  e.deps = n, e.depsTail = i;
}
function eo(e) {
  for (let n = e.deps; n; n = n.nextDep)
    if (n.dep.version !== n.version || n.dep.computed && (ea(n.dep.computed) || n.dep.version !== n.version))
      return !0;
  return !!e._dirty;
}
function ea(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === sr) || (e.globalVersion = sr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !eo(e))))
    return;
  e.flags |= 2;
  const n = e.dep, i = je, s = Pt;
  je = e, Pt = !0;
  try {
    Xs(e);
    const l = e.fn(e._value);
    (n.version === 0 || Lt(l, e._value)) && (e.flags |= 128, e._value = l, n.version++);
  } catch (l) {
    throw n.version++, l;
  } finally {
    je = i, Pt = s, Zs(e), e.flags &= -3;
  }
}
function Po(e, n = !1) {
  const { dep: i, prevSub: s, nextSub: l } = e;
  if (s && (s.nextSub = l, e.prevSub = void 0), l && (l.prevSub = s, e.nextSub = void 0), i.subs === e && (i.subs = s, !s && i.computed)) {
    i.computed.flags &= -5;
    for (let c = i.computed.deps; c; c = c.nextDep)
      Po(c, !0);
  }
  !n && !--i.sc && i.map && i.map.delete(i.key);
}
function Bu(e) {
  const { prevDep: n, nextDep: i } = e;
  n && (n.nextDep = i, e.prevDep = void 0), i && (i.prevDep = n, e.nextDep = void 0);
}
let Pt = !0;
const ta = [];
function Vt() {
  ta.push(Pt), Pt = !1;
}
function $t() {
  const e = ta.pop();
  Pt = e === void 0 ? !0 : e;
}
function bs(e) {
  const { cleanup: n } = e;
  if (e.cleanup = void 0, n) {
    const i = je;
    je = void 0;
    try {
      n();
    } finally {
      je = i;
    }
  }
}
let sr = 0;
class Nu {
  constructor(n, i) {
    this.sub = n, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class oi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(n) {
    this.computed = n, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(n) {
    if (!je || !Pt || je === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== je)
      i = this.activeLink = new Nu(je, this), je.deps ? (i.prevDep = je.depsTail, je.depsTail.nextDep = i, je.depsTail = i) : je.deps = je.depsTail = i, na(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const s = i.nextDep;
      s.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = s), i.prevDep = je.depsTail, i.nextDep = void 0, je.depsTail.nextDep = i, je.depsTail = i, je.deps === i && (je.deps = s);
    }
    return i;
  }
  trigger(n) {
    this.version++, sr++, this.notify(n);
  }
  notify(n) {
    xo();
    try {
      for (let i = this.subs; i; i = i.prevSub)
        i.sub.notify() && i.sub.dep.notify();
    } finally {
      Oo();
    }
  }
}
function na(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const n = e.dep.computed;
    if (n && !e.dep.subs) {
      n.flags |= 20;
      for (let s = n.deps; s; s = s.nextDep)
        na(s);
    }
    const i = e.dep.subs;
    i !== e && (e.prevSub = i, i && (i.nextSub = e)), e.dep.subs = e;
  }
}
const zr = /* @__PURE__ */ new WeakMap(), vn = Symbol(
  ""
), to = Symbol(
  ""
), ar = Symbol(
  ""
);
function st(e, n, i) {
  if (Pt && je) {
    let s = zr.get(e);
    s || zr.set(e, s = /* @__PURE__ */ new Map());
    let l = s.get(i);
    l || (s.set(i, l = new oi()), l.map = s, l.key = i), l.track();
  }
}
function qt(e, n, i, s, l, c) {
  const h = zr.get(e);
  if (!h) {
    sr++;
    return;
  }
  const p = (v) => {
    v && v.trigger();
  };
  if (xo(), n === "clear")
    h.forEach(p);
  else {
    const v = fe(e), R = v && bo(i);
    if (v && i === "length") {
      const k = Number(s);
      h.forEach((A, M) => {
        (M === "length" || M === ar || !jt(M) && M >= k) && p(A);
      });
    } else
      switch ((i !== void 0 || h.has(void 0)) && p(h.get(i)), R && p(h.get(ar)), n) {
        case "add":
          v ? R && p(h.get("length")) : (p(h.get(vn)), Dn(e) && p(h.get(to)));
          break;
        case "delete":
          v || (p(h.get(vn)), Dn(e) && p(h.get(to)));
          break;
        case "set":
          Dn(e) && p(h.get(vn));
          break;
      }
  }
  Oo();
}
function qu(e, n) {
  const i = zr.get(e);
  return i && i.get(n);
}
function An(e) {
  const n = ke(e);
  return n === e ? n : (st(n, "iterate", ar), xt(e) ? n : n.map(et));
}
function si(e) {
  return st(e = ke(e), "iterate", ar), e;
}
const Uu = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yi(this, Symbol.iterator, et);
  },
  concat(...e) {
    return An(this).concat(
      ...e.map((n) => fe(n) ? An(n) : n)
    );
  },
  entries() {
    return Yi(this, "entries", (e) => (e[1] = et(e[1]), e));
  },
  every(e, n) {
    return Nt(this, "every", e, n, void 0, arguments);
  },
  filter(e, n) {
    return Nt(this, "filter", e, n, (i) => i.map(et), arguments);
  },
  find(e, n) {
    return Nt(this, "find", e, n, et, arguments);
  },
  findIndex(e, n) {
    return Nt(this, "findIndex", e, n, void 0, arguments);
  },
  findLast(e, n) {
    return Nt(this, "findLast", e, n, et, arguments);
  },
  findLastIndex(e, n) {
    return Nt(this, "findLastIndex", e, n, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, n) {
    return Nt(this, "forEach", e, n, void 0, arguments);
  },
  includes(...e) {
    return zi(this, "includes", e);
  },
  indexOf(...e) {
    return zi(this, "indexOf", e);
  },
  join(e) {
    return An(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return zi(this, "lastIndexOf", e);
  },
  map(e, n) {
    return Nt(this, "map", e, n, void 0, arguments);
  },
  pop() {
    return Jn(this, "pop");
  },
  push(...e) {
    return Jn(this, "push", e);
  },
  reduce(e, ...n) {
    return _s(this, "reduce", e, n);
  },
  reduceRight(e, ...n) {
    return _s(this, "reduceRight", e, n);
  },
  shift() {
    return Jn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, n) {
    return Nt(this, "some", e, n, void 0, arguments);
  },
  splice(...e) {
    return Jn(this, "splice", e);
  },
  toReversed() {
    return An(this).toReversed();
  },
  toSorted(e) {
    return An(this).toSorted(e);
  },
  toSpliced(...e) {
    return An(this).toSpliced(...e);
  },
  unshift(...e) {
    return Jn(this, "unshift", e);
  },
  values() {
    return Yi(this, "values", et);
  }
};
function Yi(e, n, i) {
  const s = si(e), l = s[n]();
  return s !== e && !xt(e) && (l._next = l.next, l.next = () => {
    const c = l._next();
    return c.value && (c.value = i(c.value)), c;
  }), l;
}
const Lu = Array.prototype;
function Nt(e, n, i, s, l, c) {
  const h = si(e), p = h !== e && !xt(e), v = h[n];
  if (v !== Lu[n]) {
    const A = v.apply(e, c);
    return p ? et(A) : A;
  }
  let R = i;
  h !== e && (p ? R = function(A, M) {
    return i.call(this, et(A), M, e);
  } : i.length > 2 && (R = function(A, M) {
    return i.call(this, A, M, e);
  }));
  const k = v.call(h, R, s);
  return p && l ? l(k) : k;
}
function _s(e, n, i, s) {
  const l = si(e);
  let c = i;
  return l !== e && (xt(e) ? i.length > 3 && (c = function(h, p, v) {
    return i.call(this, h, p, v, e);
  }) : c = function(h, p, v) {
    return i.call(this, h, et(p), v, e);
  }), l[n](c, ...s);
}
function zi(e, n, i) {
  const s = ke(e);
  st(s, "iterate", ar);
  const l = s[n](...i);
  return (l === -1 || l === !1) && To(i[0]) ? (i[0] = ke(i[0]), s[n](...i)) : l;
}
function Jn(e, n, i = []) {
  Vt(), xo();
  const s = ke(e)[n].apply(e, i);
  return Oo(), $t(), s;
}
const Vu = /* @__PURE__ */ go("__proto__,__v_isRef,__isVue"), ra = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(jt)
);
function $u(e) {
  jt(e) || (e = String(e));
  const n = ke(this);
  return st(n, "has", e), n.hasOwnProperty(e);
}
class ia {
  constructor(n = !1, i = !1) {
    this._isReadonly = n, this._isShallow = i;
  }
  get(n, i, s) {
    if (i === "__v_skip") return n.__v_skip;
    const l = this._isReadonly, c = this._isShallow;
    if (i === "__v_isReactive")
      return !l;
    if (i === "__v_isReadonly")
      return l;
    if (i === "__v_isShallow")
      return c;
    if (i === "__v_raw")
      return s === (l ? c ? el : ua : c ? aa : sa).get(n) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(n) === Object.getPrototypeOf(s) ? n : void 0;
    const h = fe(n);
    if (!l) {
      let v;
      if (h && (v = Uu[i]))
        return v;
      if (i === "hasOwnProperty")
        return $u;
    }
    const p = Reflect.get(
      n,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      We(n) ? n : s
    );
    return (jt(i) ? ra.has(i) : Vu(i)) || (l || st(n, "get", i), c) ? p : We(p) ? h && bo(i) ? p : p.value : De(p) ? l ? ko(p) : So(p) : p;
  }
}
class oa extends ia {
  constructor(n = !1) {
    super(!1, n);
  }
  set(n, i, s, l) {
    let c = n[i];
    if (!this._isShallow) {
      const v = an(c);
      if (!xt(s) && !an(s) && (c = ke(c), s = ke(s)), !fe(n) && We(c) && !We(s))
        return v ? !1 : (c.value = s, !0);
    }
    const h = fe(n) && bo(i) ? Number(i) < n.length : Ce(n, i), p = Reflect.set(
      n,
      i,
      s,
      We(n) ? n : l
    );
    return n === ke(l) && (h ? Lt(s, c) && qt(n, "set", i, s) : qt(n, "add", i, s)), p;
  }
  deleteProperty(n, i) {
    const s = Ce(n, i);
    n[i];
    const l = Reflect.deleteProperty(n, i);
    return l && s && qt(n, "delete", i, void 0), l;
  }
  has(n, i) {
    const s = Reflect.has(n, i);
    return (!jt(i) || !ra.has(i)) && st(n, "has", i), s;
  }
  ownKeys(n) {
    return st(
      n,
      "iterate",
      fe(n) ? "length" : vn
    ), Reflect.ownKeys(n);
  }
}
class Hu extends ia {
  constructor(n = !1) {
    super(!0, n);
  }
  set(n, i) {
    return !0;
  }
  deleteProperty(n, i) {
    return !0;
  }
}
const Wu = /* @__PURE__ */ new oa(), Yu = /* @__PURE__ */ new Hu(), zu = /* @__PURE__ */ new oa(!0);
const no = (e) => e, qr = (e) => Reflect.getPrototypeOf(e);
function Gu(e, n, i) {
  return function(...s) {
    const l = this.__v_raw, c = ke(l), h = Dn(c), p = e === "entries" || e === Symbol.iterator && h, v = e === "keys" && h, R = l[e](...s), k = i ? no : n ? Gr : et;
    return !n && st(
      c,
      "iterate",
      v ? to : vn
    ), {
      // iterator protocol
      next() {
        const { value: A, done: M } = R.next();
        return M ? { value: A, done: M } : {
          value: p ? [k(A[0]), k(A[1])] : k(A),
          done: M
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ur(e) {
  return function(...n) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ju(e, n) {
  const i = {
    get(l) {
      const c = this.__v_raw, h = ke(c), p = ke(l);
      e || (Lt(l, p) && st(h, "get", l), st(h, "get", p));
      const { has: v } = qr(h), R = n ? no : e ? Gr : et;
      if (v.call(h, l))
        return R(c.get(l));
      if (v.call(h, p))
        return R(c.get(p));
      c !== h && c.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && st(ke(l), "iterate", vn), Reflect.get(l, "size", l);
    },
    has(l) {
      const c = this.__v_raw, h = ke(c), p = ke(l);
      return e || (Lt(l, p) && st(h, "has", l), st(h, "has", p)), l === p ? c.has(l) : c.has(l) || c.has(p);
    },
    forEach(l, c) {
      const h = this, p = h.__v_raw, v = ke(p), R = n ? no : e ? Gr : et;
      return !e && st(v, "iterate", vn), p.forEach((k, A) => l.call(c, R(k), R(A), h));
    }
  };
  return dt(
    i,
    e ? {
      add: Ur("add"),
      set: Ur("set"),
      delete: Ur("delete"),
      clear: Ur("clear")
    } : {
      add(l) {
        !n && !xt(l) && !an(l) && (l = ke(l));
        const c = ke(this);
        return qr(c).has.call(c, l) || (c.add(l), qt(c, "add", l, l)), this;
      },
      set(l, c) {
        !n && !xt(c) && !an(c) && (c = ke(c));
        const h = ke(this), { has: p, get: v } = qr(h);
        let R = p.call(h, l);
        R || (l = ke(l), R = p.call(h, l));
        const k = v.call(h, l);
        return h.set(l, c), R ? Lt(c, k) && qt(h, "set", l, c) : qt(h, "add", l, c), this;
      },
      delete(l) {
        const c = ke(this), { has: h, get: p } = qr(c);
        let v = h.call(c, l);
        v || (l = ke(l), v = h.call(c, l)), p && p.call(c, l);
        const R = c.delete(l);
        return v && qt(c, "delete", l, void 0), R;
      },
      clear() {
        const l = ke(this), c = l.size !== 0, h = l.clear();
        return c && qt(
          l,
          "clear",
          void 0,
          void 0
        ), h;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((l) => {
    i[l] = Gu(l, e, n);
  }), i;
}
function Eo(e, n) {
  const i = Ju(e, n);
  return (s, l, c) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? s : Reflect.get(
    Ce(i, l) && l in s ? i : s,
    l,
    c
  );
}
const Qu = {
  get: /* @__PURE__ */ Eo(!1, !1)
}, Xu = {
  get: /* @__PURE__ */ Eo(!1, !0)
}, Zu = {
  get: /* @__PURE__ */ Eo(!0, !1)
};
const sa = /* @__PURE__ */ new WeakMap(), aa = /* @__PURE__ */ new WeakMap(), ua = /* @__PURE__ */ new WeakMap(), el = /* @__PURE__ */ new WeakMap();
function tl(e) {
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
function nl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : tl(Su(e));
}
function So(e) {
  return an(e) ? e : Co(
    e,
    !1,
    Wu,
    Qu,
    sa
  );
}
function rl(e) {
  return Co(
    e,
    !1,
    zu,
    Xu,
    aa
  );
}
function ko(e) {
  return Co(
    e,
    !0,
    Yu,
    Zu,
    ua
  );
}
function Co(e, n, i, s, l) {
  if (!De(e) || e.__v_raw && !(n && e.__v_isReactive))
    return e;
  const c = nl(e);
  if (c === 0)
    return e;
  const h = l.get(e);
  if (h)
    return h;
  const p = new Proxy(
    e,
    c === 2 ? s : i
  );
  return l.set(e, p), p;
}
function jn(e) {
  return an(e) ? jn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function an(e) {
  return !!(e && e.__v_isReadonly);
}
function xt(e) {
  return !!(e && e.__v_isShallow);
}
function To(e) {
  return e ? !!e.__v_raw : !1;
}
function ke(e) {
  const n = e && e.__v_raw;
  return n ? ke(n) : e;
}
function il(e) {
  return !Ce(e, "__v_skip") && Object.isExtensible(e) && Zi(e, "__v_skip", !0), e;
}
const et = (e) => De(e) ? So(e) : e, Gr = (e) => De(e) ? ko(e) : e;
function We(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ao(e) {
  return la(e, !1);
}
function ro(e) {
  return la(e, !0);
}
function la(e, n) {
  return We(e) ? e : new ol(e, n);
}
class ol {
  constructor(n, i) {
    this.dep = new oi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? n : ke(n), this._value = i ? n : et(n), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(n) {
    const i = this._rawValue, s = this.__v_isShallow || xt(n) || an(n);
    n = s ? n : ke(n), Lt(n, i) && (this._rawValue = n, this._value = s ? n : et(n), this.dep.trigger());
  }
}
function ca(e) {
  return We(e) ? e.value : e;
}
function sn(e) {
  return pe(e) ? e() : ca(e);
}
const sl = {
  get: (e, n, i) => n === "__v_raw" ? e : ca(Reflect.get(e, n, i)),
  set: (e, n, i, s) => {
    const l = e[n];
    return We(l) && !We(i) ? (l.value = i, !0) : Reflect.set(e, n, i, s);
  }
};
function fa(e) {
  return jn(e) ? e : new Proxy(e, sl);
}
class al {
  constructor(n) {
    this.__v_isRef = !0, this._value = void 0;
    const i = this.dep = new oi(), { get: s, set: l } = n(i.track.bind(i), i.trigger.bind(i));
    this._get = s, this._set = l;
  }
  get value() {
    return this._value = this._get();
  }
  set value(n) {
    this._set(n);
  }
}
function Lc(e) {
  return new al(e);
}
function Vc(e) {
  const n = fe(e) ? new Array(e.length) : {};
  for (const i in e)
    n[i] = ha(e, i);
  return n;
}
class ul {
  constructor(n, i, s) {
    this._object = n, this._key = i, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const n = this._object[this._key];
    return this._value = n === void 0 ? this._defaultValue : n;
  }
  set value(n) {
    this._object[this._key] = n;
  }
  get dep() {
    return qu(ke(this._object), this._key);
  }
}
class ll {
  constructor(n) {
    this._getter = n, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function $c(e, n, i) {
  return We(e) ? e : pe(e) ? new ll(e) : De(e) && arguments.length > 1 ? ha(e, n, i) : Ao(e);
}
function ha(e, n, i) {
  const s = e[n];
  return We(s) ? s : new ul(e, n, i);
}
class cl {
  constructor(n, i, s) {
    this.fn = n, this.setter = i, this._value = void 0, this.dep = new oi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = sr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    je !== this)
      return Qs(this, !0), !0;
  }
  get value() {
    const n = this.dep.track();
    return ea(this), n && (n.version = this.dep.version), this._value;
  }
  set value(n) {
    this.setter && this.setter(n);
  }
}
function fl(e, n, i = !1) {
  let s, l;
  return pe(e) ? s = e : (s = e.get, l = e.set), new cl(s, l, i);
}
const Lr = {}, Jr = /* @__PURE__ */ new WeakMap();
let mn;
function hl(e, n = !1, i = mn) {
  if (i) {
    let s = Jr.get(i);
    s || Jr.set(i, s = []), s.push(e);
  }
}
function dl(e, n, i = Re) {
  const { immediate: s, deep: l, once: c, scheduler: h, augmentJob: p, call: v } = i, R = (ae) => l ? ae : xt(ae) || l === !1 || l === 0 ? Ut(ae, 1) : Ut(ae);
  let k, A, M, G, ie = !1, re = !1;
  if (We(e) ? (A = () => e.value, ie = xt(e)) : jn(e) ? (A = () => R(e), ie = !0) : fe(e) ? (re = !0, ie = e.some((ae) => jn(ae) || xt(ae)), A = () => e.map((ae) => {
    if (We(ae))
      return ae.value;
    if (jn(ae))
      return R(ae);
    if (pe(ae))
      return v ? v(ae, 2) : ae();
  })) : pe(e) ? n ? A = v ? () => v(e, 2) : e : A = () => {
    if (M) {
      Vt();
      try {
        M();
      } finally {
        $t();
      }
    }
    const ae = mn;
    mn = k;
    try {
      return v ? v(e, 3, [G]) : e(G);
    } finally {
      mn = ae;
    }
  } : A = Dt, n && l) {
    const ae = A, Te = l === !0 ? 1 / 0 : l;
    A = () => Ut(ae(), Te);
  }
  const Me = zs(), ve = () => {
    k.stop(), Me && Me.active && vo(Me.effects, k);
  };
  if (c && n) {
    const ae = n;
    n = (...Te) => {
      ae(...Te), ve();
    };
  }
  let Ee = re ? new Array(e.length).fill(Lr) : Lr;
  const Se = (ae) => {
    if (!(!(k.flags & 1) || !k.dirty && !ae))
      if (n) {
        const Te = k.run();
        if (l || ie || (re ? Te.some((Ae, F) => Lt(Ae, Ee[F])) : Lt(Te, Ee))) {
          M && M();
          const Ae = mn;
          mn = k;
          try {
            const F = [
              Te,
              // pass undefined as the old value when it's changed for the first time
              Ee === Lr ? void 0 : re && Ee[0] === Lr ? [] : Ee,
              G
            ];
            Ee = Te, v ? v(n, 3, F) : (
              // @ts-expect-error
              n(...F)
            );
          } finally {
            mn = Ae;
          }
        }
      } else
        k.run();
  };
  return p && p(Se), k = new Gs(A), k.scheduler = h ? () => h(Se, !1) : Se, G = (ae) => hl(ae, !1, k), M = k.onStop = () => {
    const ae = Jr.get(k);
    if (ae) {
      if (v)
        v(ae, 4);
      else
        for (const Te of ae) Te();
      Jr.delete(k);
    }
  }, n ? s ? Se(!0) : Ee = k.run() : h ? h(Se.bind(null, !0), !0) : k.run(), ve.pause = k.pause.bind(k), ve.resume = k.resume.bind(k), ve.stop = ve, ve;
}
function Ut(e, n = 1 / 0, i) {
  if (n <= 0 || !De(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Set(), i.has(e)))
    return e;
  if (i.add(e), n--, We(e))
    Ut(e.value, n, i);
  else if (fe(e))
    for (let s = 0; s < e.length; s++)
      Ut(e[s], n, i);
  else if (Us(e) || Dn(e))
    e.forEach((s) => {
      Ut(s, n, i);
    });
  else if ($s(e)) {
    for (const s in e)
      Ut(e[s], n, i);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ut(e[s], n, i);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function dr(e, n, i, s) {
  try {
    return s ? e(...s) : e();
  } catch (l) {
    ai(l, n, i);
  }
}
function Ht(e, n, i, s) {
  if (pe(e)) {
    const l = dr(e, n, i, s);
    return l && Ls(l) && l.catch((c) => {
      ai(c, n, i);
    }), l;
  }
  if (fe(e)) {
    const l = [];
    for (let c = 0; c < e.length; c++)
      l.push(Ht(e[c], n, i, s));
    return l;
  }
}
function ai(e, n, i, s = !0) {
  const l = n ? n.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: h } = n && n.appContext.config || Re;
  if (n) {
    let p = n.parent;
    const v = n.proxy, R = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; p; ) {
      const k = p.ec;
      if (k) {
        for (let A = 0; A < k.length; A++)
          if (k[A](e, v, R) === !1)
            return;
      }
      p = p.parent;
    }
    if (c) {
      Vt(), dr(c, null, 10, [
        e,
        v,
        R
      ]), $t();
      return;
    }
  }
  pl(e, i, l, s, h);
}
function pl(e, n, i, s = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const ft = [];
let Rt = -1;
const Kn = [];
let rn = null, Rn = 0;
const da = /* @__PURE__ */ Promise.resolve();
let Qr = null;
function yl(e) {
  const n = Qr || da;
  return e ? n.then(this ? e.bind(this) : e) : n;
}
function gl(e) {
  let n = Rt + 1, i = ft.length;
  for (; n < i; ) {
    const s = n + i >>> 1, l = ft[s], c = ur(l);
    c < e || c === e && l.flags & 2 ? n = s + 1 : i = s;
  }
  return n;
}
function Ro(e) {
  if (!(e.flags & 1)) {
    const n = ur(e), i = ft[ft.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(e.flags & 2) && n >= ur(i) ? ft.push(e) : ft.splice(gl(n), 0, e), e.flags |= 1, pa();
  }
}
function pa() {
  Qr || (Qr = da.then(ga));
}
function ml(e) {
  fe(e) ? Kn.push(...e) : rn && e.id === -1 ? rn.splice(Rn + 1, 0, e) : e.flags & 1 || (Kn.push(e), e.flags |= 1), pa();
}
function ws(e, n, i = Rt + 1) {
  for (; i < ft.length; i++) {
    const s = ft[i];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ft.splice(i, 1), i--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ya(e) {
  if (Kn.length) {
    const n = [...new Set(Kn)].sort(
      (i, s) => ur(i) - ur(s)
    );
    if (Kn.length = 0, rn) {
      rn.push(...n);
      return;
    }
    for (rn = n, Rn = 0; Rn < rn.length; Rn++) {
      const i = rn[Rn];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    rn = null, Rn = 0;
  }
}
const ur = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ga(e) {
  try {
    for (Rt = 0; Rt < ft.length; Rt++) {
      const n = ft[Rt];
      n && !(n.flags & 8) && (n.flags & 4 && (n.flags &= -2), dr(
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
    Rt = -1, ft.length = 0, ya(), Qr = null, (ft.length || Kn.length) && ga();
  }
}
let He = null, ma = null;
function Xr(e) {
  const n = He;
  return He = e, ma = e && e.type.__scopeId || null, n;
}
function vl(e, n = He, i) {
  if (!n || e._n)
    return e;
  const s = (...l) => {
    s._d && js(-1);
    const c = Xr(n);
    let h;
    try {
      h = e(...l);
    } finally {
      Xr(c), s._d && js(1);
    }
    return h;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Hc(e, n) {
  if (He === null)
    return e;
  const i = fi(He), s = e.dirs || (e.dirs = []);
  for (let l = 0; l < n.length; l++) {
    let [c, h, p, v = Re] = n[l];
    c && (pe(c) && (c = {
      mounted: c,
      updated: c
    }), c.deep && Ut(h), s.push({
      dir: c,
      instance: i,
      value: h,
      oldValue: void 0,
      arg: p,
      modifiers: v
    }));
  }
  return e;
}
function yn(e, n, i, s) {
  const l = e.dirs, c = n && n.dirs;
  for (let h = 0; h < l.length; h++) {
    const p = l[h];
    c && (p.oldValue = c[h].value);
    let v = p.dir[s];
    v && (Vt(), Ht(v, i, 8, [
      e.el,
      p,
      e,
      n
    ]), $t());
  }
}
const va = Symbol("_vte"), bl = (e) => e.__isTeleport, nr = (e) => e && (e.disabled || e.disabled === ""), xs = (e) => e && (e.defer || e.defer === ""), Os = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Ps = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, io = (e, n) => {
  const i = e && e.to;
  return Ze(i) ? n ? n(i) : null : i;
}, ba = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, n, i, s, l, c, h, p, v, R) {
    const {
      mc: k,
      pc: A,
      pbc: M,
      o: { insert: G, querySelector: ie, createText: re, createComment: Me }
    } = R, ve = nr(n.props);
    let { shapeFlag: Ee, children: Se, dynamicChildren: ae } = n;
    if (e == null) {
      const Te = n.el = re(""), Ae = n.anchor = re("");
      G(Te, i, s), G(Ae, i, s);
      const F = (ue, me) => {
        Ee & 16 && (l && l.isCE && (l.ce._teleportTarget = ue), k(
          Se,
          ue,
          me,
          l,
          c,
          h,
          p,
          v
        ));
      }, Y = () => {
        const ue = n.target = io(n.props, ie), me = _a(ue, n, re, G);
        ue && (h !== "svg" && Os(ue) ? h = "svg" : h !== "mathml" && Ps(ue) && (h = "mathml"), ve || (F(ue, me), $r(n, !1)));
      };
      ve && (F(i, Ae), $r(n, !0)), xs(n.props) ? (n.el.__isMounted = !1, ct(() => {
        Y(), delete n.el.__isMounted;
      }, c)) : Y();
    } else {
      if (xs(n.props) && e.el.__isMounted === !1) {
        ct(() => {
          ba.process(
            e,
            n,
            i,
            s,
            l,
            c,
            h,
            p,
            v,
            R
          );
        }, c);
        return;
      }
      n.el = e.el, n.targetStart = e.targetStart;
      const Te = n.anchor = e.anchor, Ae = n.target = e.target, F = n.targetAnchor = e.targetAnchor, Y = nr(e.props), ue = Y ? i : Ae, me = Y ? Te : F;
      if (h === "svg" || Os(Ae) ? h = "svg" : (h === "mathml" || Ps(Ae)) && (h = "mathml"), ae ? (M(
        e.dynamicChildren,
        ae,
        ue,
        l,
        c,
        h,
        p
      ), Ko(e, n, !0)) : v || A(
        e,
        n,
        ue,
        me,
        l,
        c,
        h,
        p,
        !1
      ), ve)
        Y ? n.props && e.props && n.props.to !== e.props.to && (n.props.to = e.props.to) : Vr(
          n,
          i,
          Te,
          R,
          1
        );
      else if ((n.props && n.props.to) !== (e.props && e.props.to)) {
        const Ie = n.target = io(
          n.props,
          ie
        );
        Ie && Vr(
          n,
          Ie,
          null,
          R,
          0
        );
      } else Y && Vr(
        n,
        Ae,
        F,
        R,
        1
      );
      $r(n, ve);
    }
  },
  remove(e, n, i, { um: s, o: { remove: l } }, c) {
    const {
      shapeFlag: h,
      children: p,
      anchor: v,
      targetStart: R,
      targetAnchor: k,
      target: A,
      props: M
    } = e;
    if (A && (l(R), l(k)), c && l(v), h & 16) {
      const G = c || !nr(M);
      for (let ie = 0; ie < p.length; ie++) {
        const re = p[ie];
        s(
          re,
          n,
          i,
          G,
          !!re.dynamicChildren
        );
      }
    }
  },
  move: Vr,
  hydrate: _l
};
function Vr(e, n, i, { o: { insert: s }, m: l }, c = 2) {
  c === 0 && s(e.targetAnchor, n, i);
  const { el: h, anchor: p, shapeFlag: v, children: R, props: k } = e, A = c === 2;
  if (A && s(h, n, i), (!A || nr(k)) && v & 16)
    for (let M = 0; M < R.length; M++)
      l(
        R[M],
        n,
        i,
        2
      );
  A && s(p, n, i);
}
function _l(e, n, i, s, l, c, {
  o: { nextSibling: h, parentNode: p, querySelector: v, insert: R, createText: k }
}, A) {
  const M = n.target = io(
    n.props,
    v
  );
  if (M) {
    const G = nr(n.props), ie = M._lpa || M.firstChild;
    if (n.shapeFlag & 16)
      if (G)
        n.anchor = A(
          h(e),
          n,
          p(e),
          i,
          s,
          l,
          c
        ), n.targetStart = ie, n.targetAnchor = ie && h(ie);
      else {
        n.anchor = h(e);
        let re = ie;
        for (; re; ) {
          if (re && re.nodeType === 8) {
            if (re.data === "teleport start anchor")
              n.targetStart = re;
            else if (re.data === "teleport anchor") {
              n.targetAnchor = re, M._lpa = n.targetAnchor && h(n.targetAnchor);
              break;
            }
          }
          re = h(re);
        }
        n.targetAnchor || _a(M, n, k, R), A(
          ie && h(ie),
          n,
          M,
          i,
          s,
          l,
          c
        );
      }
    $r(n, G);
  }
  return n.anchor && h(n.anchor);
}
const Wc = ba;
function $r(e, n) {
  const i = e.ctx;
  if (i && i.ut) {
    let s, l;
    for (n ? (s = e.el, l = e.anchor) : (s = e.targetStart, l = e.targetAnchor); s && s !== l; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", i.uid), s = s.nextSibling;
    i.ut();
  }
}
function _a(e, n, i, s) {
  const l = n.targetStart = i(""), c = n.targetAnchor = i("");
  return l[va] = c, e && (s(l, e), s(c, e)), c;
}
function Io(e, n) {
  e.shapeFlag & 6 && e.component ? (e.transition = n, Io(e.component.subTree, n)) : e.shapeFlag & 128 ? (e.ssContent.transition = n.clone(e.ssContent), e.ssFallback.transition = n.clone(e.ssFallback)) : e.transition = n;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Yc(e, n) {
  return pe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    dt({ name: e.name }, n, { setup: e })
  ) : e;
}
function wa(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function zc(e) {
  const n = Ga(), i = ro(null);
  if (n) {
    const l = n.refs === Re ? n.refs = {} : n.refs;
    Object.defineProperty(l, e, {
      enumerable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    });
  }
  return i;
}
function rr(e, n, i, s, l = !1) {
  if (fe(e)) {
    e.forEach(
      (ie, re) => rr(
        ie,
        n && (fe(n) ? n[re] : n),
        i,
        s,
        l
      )
    );
    return;
  }
  if (Fn(s) && !l) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && rr(e, n, i, s.component.subTree);
    return;
  }
  const c = s.shapeFlag & 4 ? fi(s.component) : s.el, h = l ? null : c, { i: p, r: v } = e, R = n && n.r, k = p.refs === Re ? p.refs = {} : p.refs, A = p.setupState, M = ke(A), G = A === Re ? () => !1 : (ie) => Ce(M, ie);
  if (R != null && R !== v && (Ze(R) ? (k[R] = null, G(R) && (A[R] = null)) : We(R) && (R.value = null)), pe(v))
    dr(v, p, 12, [h, k]);
  else {
    const ie = Ze(v), re = We(v);
    if (ie || re) {
      const Me = () => {
        if (e.f) {
          const ve = ie ? G(v) ? A[v] : k[v] : v.value;
          l ? fe(ve) && vo(ve, c) : fe(ve) ? ve.includes(c) || ve.push(c) : ie ? (k[v] = [c], G(v) && (A[v] = k[v])) : (v.value = [c], e.k && (k[e.k] = v.value));
        } else ie ? (k[v] = h, G(v) && (A[v] = h)) : re && (v.value = h, e.k && (k[e.k] = h));
      };
      h ? (Me.id = -1, ct(Me, i)) : Me();
    }
  }
}
ni().requestIdleCallback;
ni().cancelIdleCallback;
const Fn = (e) => !!e.type.__asyncLoader, xa = (e) => e.type.__isKeepAlive;
function wl(e, n) {
  Oa(e, "a", n);
}
function xl(e, n) {
  Oa(e, "da", n);
}
function Oa(e, n, i = Xe) {
  const s = e.__wdc || (e.__wdc = () => {
    let l = i;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (ui(n, s, i), i) {
    let l = i.parent;
    for (; l && l.parent; )
      xa(l.parent.vnode) && Ol(s, n, i, l), l = l.parent;
  }
}
function Ol(e, n, i, s) {
  const l = ui(
    n,
    e,
    s,
    !0
    /* prepend */
  );
  Pa(() => {
    vo(s[n], l);
  }, i);
}
function ui(e, n, i = Xe, s = !1) {
  if (i) {
    const l = i[e] || (i[e] = []), c = n.__weh || (n.__weh = (...h) => {
      Vt();
      const p = pr(i), v = Ht(n, i, e, h);
      return p(), $t(), v;
    });
    return s ? l.unshift(c) : l.push(c), c;
  }
}
const Yt = (e) => (n, i = Xe) => {
  (!cr || e === "sp") && ui(e, (...s) => n(...s), i);
}, Pl = Yt("bm"), El = Yt("m"), Sl = Yt(
  "bu"
), kl = Yt("u"), Cl = Yt(
  "bum"
), Pa = Yt("um"), Tl = Yt(
  "sp"
), Al = Yt("rtg"), Rl = Yt("rtc");
function Il(e, n = Xe) {
  ui("ec", e, n);
}
const Ea = "components";
function Gc(e, n) {
  return ka(Ea, e, !0, n) || e;
}
const Sa = Symbol.for("v-ndc");
function Jc(e) {
  return Ze(e) ? ka(Ea, e, !1) || e : e || Sa;
}
function ka(e, n, i = !0, s = !1) {
  const l = He || Xe;
  if (l) {
    const c = l.type;
    {
      const p = vc(
        c,
        !1
      );
      if (p && (p === n || p === Kt(n) || p === _o(Kt(n))))
        return c;
    }
    const h = (
      // local registration
      // check instance[type] first which is resolved for options API
      Es(l[e] || c[e], n) || // global registration
      Es(l.appContext[e], n)
    );
    return !h && s ? c : h;
  }
}
function Es(e, n) {
  return e && (e[n] || e[Kt(n)] || e[_o(Kt(n))]);
}
function Qc(e, n, i, s) {
  let l;
  const c = i && i[s], h = fe(e);
  if (h || Ze(e)) {
    const p = h && jn(e);
    let v = !1, R = !1;
    p && (v = !xt(e), R = an(e), e = si(e)), l = new Array(e.length);
    for (let k = 0, A = e.length; k < A; k++)
      l[k] = n(
        v ? R ? Gr(et(e[k])) : et(e[k]) : e[k],
        k,
        void 0,
        c && c[k]
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let p = 0; p < e; p++)
      l[p] = n(p + 1, p, void 0, c && c[p]);
  } else if (De(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (p, v) => n(p, v, void 0, c && c[v])
      );
    else {
      const p = Object.keys(e);
      l = new Array(p.length);
      for (let v = 0, R = p.length; v < R; v++) {
        const k = p[v];
        l[v] = n(e[k], k, v, c && c[v]);
      }
    }
  else
    l = [];
  return i && (i[s] = l), l;
}
function Xc(e, n, i = {}, s, l) {
  if (He.ce || He.parent && Fn(He.parent) && He.parent.ce)
    return n !== "default" && (i.name = n), lo(), co(
      wt,
      null,
      [gt("slot", i, s && s())],
      64
    );
  let c = e[n];
  c && c._c && (c._d = !1), lo();
  const h = c && Ca(c(i)), p = i.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  h && h.key, v = co(
    wt,
    {
      key: (p && !jt(p) ? p : `_${n}`) + // #7256 force differentiate fallback content from actual content
      (!h && s ? "_fb" : "")
    },
    h || (s ? s() : []),
    h && e._ === 1 ? 64 : -2
  );
  return v.scopeId && (v.slotScopeIds = [v.scopeId + "-s"]), c && c._c && (c._d = !0), v;
}
function Ca(e) {
  return e.some((n) => lr(n) ? !(n.type === Wt || n.type === wt && !Ca(n.children)) : !0) ? e : null;
}
const oo = (e) => e ? Ja(e) ? fi(e) : oo(e.parent) : null, ir = (
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
    $parent: (e) => oo(e.parent),
    $root: (e) => oo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ra(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ro(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = yl.bind(e.proxy)),
    $watch: (e) => Zl.bind(e)
  })
), Gi = (e, n) => e !== Re && !e.__isScriptSetup && Ce(e, n), Dl = {
  get({ _: e }, n) {
    if (n === "__v_skip")
      return !0;
    const { ctx: i, setupState: s, data: l, props: c, accessCache: h, type: p, appContext: v } = e;
    let R;
    if (n[0] !== "$") {
      const G = h[n];
      if (G !== void 0)
        switch (G) {
          case 1:
            return s[n];
          case 2:
            return l[n];
          case 4:
            return i[n];
          case 3:
            return c[n];
        }
      else {
        if (Gi(s, n))
          return h[n] = 1, s[n];
        if (l !== Re && Ce(l, n))
          return h[n] = 2, l[n];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (R = e.propsOptions[0]) && Ce(R, n)
        )
          return h[n] = 3, c[n];
        if (i !== Re && Ce(i, n))
          return h[n] = 4, i[n];
        so && (h[n] = 0);
      }
    }
    const k = ir[n];
    let A, M;
    if (k)
      return n === "$attrs" && st(e.attrs, "get", ""), k(e);
    if (
      // css module (injected by vue-loader)
      (A = p.__cssModules) && (A = A[n])
    )
      return A;
    if (i !== Re && Ce(i, n))
      return h[n] = 4, i[n];
    if (
      // global properties
      M = v.config.globalProperties, Ce(M, n)
    )
      return M[n];
  },
  set({ _: e }, n, i) {
    const { data: s, setupState: l, ctx: c } = e;
    return Gi(l, n) ? (l[n] = i, !0) : s !== Re && Ce(s, n) ? (s[n] = i, !0) : Ce(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (c[n] = i, !0);
  },
  has({
    _: { data: e, setupState: n, accessCache: i, ctx: s, appContext: l, propsOptions: c }
  }, h) {
    let p;
    return !!i[h] || e !== Re && Ce(e, h) || Gi(n, h) || (p = c[0]) && Ce(p, h) || Ce(s, h) || Ce(ir, h) || Ce(l.config.globalProperties, h);
  },
  defineProperty(e, n, i) {
    return i.get != null ? e._.accessCache[n] = 0 : Ce(i, "value") && this.set(e, n, i.value, null), Reflect.defineProperty(e, n, i);
  }
};
function Zc() {
  return Ta().slots;
}
function ef() {
  return Ta().attrs;
}
function Ta() {
  const e = Ga();
  return e.setupContext || (e.setupContext = Xa(e));
}
function Ss(e) {
  return fe(e) ? e.reduce(
    (n, i) => (n[i] = null, n),
    {}
  ) : e;
}
function tf(e, n) {
  const i = {};
  for (const s in e)
    n.includes(s) || Object.defineProperty(i, s, {
      enumerable: !0,
      get: () => e[s]
    });
  return i;
}
let so = !0;
function jl(e) {
  const n = Ra(e), i = e.proxy, s = e.ctx;
  so = !1, n.beforeCreate && ks(n.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: c,
    methods: h,
    watch: p,
    provide: v,
    inject: R,
    // lifecycle
    created: k,
    beforeMount: A,
    mounted: M,
    beforeUpdate: G,
    updated: ie,
    activated: re,
    deactivated: Me,
    beforeDestroy: ve,
    beforeUnmount: Ee,
    destroyed: Se,
    unmounted: ae,
    render: Te,
    renderTracked: Ae,
    renderTriggered: F,
    errorCaptured: Y,
    serverPrefetch: ue,
    // public API
    expose: me,
    inheritAttrs: Ie,
    // assets
    components: tt,
    directives: Ye,
    filters: Et
  } = n;
  if (R && Kl(R, s, null), h)
    for (const Ke in h) {
      const _e = h[Ke];
      pe(_e) && (s[Ke] = _e.bind(i));
    }
  if (l) {
    const Ke = l.call(i, i);
    De(Ke) && (e.data = So(Ke));
  }
  if (so = !0, c)
    for (const Ke in c) {
      const _e = c[Ke], pt = pe(_e) ? _e.bind(i, i) : pe(_e.get) ? _e.get.bind(i, i) : Dt, yt = !pe(_e) && pe(_e.set) ? _e.set.bind(i) : Dt, Ot = Bo({
        get: pt,
        set: yt
      });
      Object.defineProperty(s, Ke, {
        enumerable: !0,
        configurable: !0,
        get: () => Ot.value,
        set: (vt) => Ot.value = vt
      });
    }
  if (p)
    for (const Ke in p)
      Aa(p[Ke], s, i, Ke);
  if (v) {
    const Ke = pe(v) ? v.call(i) : v;
    Reflect.ownKeys(Ke).forEach((_e) => {
      Ul(_e, Ke[_e]);
    });
  }
  k && ks(k, e, "c");
  function $e(Ke, _e) {
    fe(_e) ? _e.forEach((pt) => Ke(pt.bind(i))) : _e && Ke(_e.bind(i));
  }
  if ($e(Pl, A), $e(El, M), $e(Sl, G), $e(kl, ie), $e(wl, re), $e(xl, Me), $e(Il, Y), $e(Rl, Ae), $e(Al, F), $e(Cl, Ee), $e(Pa, ae), $e(Tl, ue), fe(me))
    if (me.length) {
      const Ke = e.exposed || (e.exposed = {});
      me.forEach((_e) => {
        Object.defineProperty(Ke, _e, {
          get: () => i[_e],
          set: (pt) => i[_e] = pt
        });
      });
    } else e.exposed || (e.exposed = {});
  Te && e.render === Dt && (e.render = Te), Ie != null && (e.inheritAttrs = Ie), tt && (e.components = tt), Ye && (e.directives = Ye), ue && wa(e);
}
function Kl(e, n, i = Dt) {
  fe(e) && (e = ao(e));
  for (const s in e) {
    const l = e[s];
    let c;
    De(l) ? "default" in l ? c = Hr(
      l.from || s,
      l.default,
      !0
    ) : c = Hr(l.from || s) : c = Hr(l), We(c) ? Object.defineProperty(n, s, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (h) => c.value = h
    }) : n[s] = c;
  }
}
function ks(e, n, i) {
  Ht(
    fe(e) ? e.map((s) => s.bind(n.proxy)) : e.bind(n.proxy),
    n,
    i
  );
}
function Aa(e, n, i, s) {
  let l = s.includes(".") ? Va(i, s) : () => i[s];
  if (Ze(e)) {
    const c = n[e];
    pe(c) && Qi(l, c);
  } else if (pe(e))
    Qi(l, e.bind(i));
  else if (De(e))
    if (fe(e))
      e.forEach((c) => Aa(c, n, i, s));
    else {
      const c = pe(e.handler) ? e.handler.bind(i) : n[e.handler];
      pe(c) && Qi(l, c, e);
    }
}
function Ra(e) {
  const n = e.type, { mixins: i, extends: s } = n, {
    mixins: l,
    optionsCache: c,
    config: { optionMergeStrategies: h }
  } = e.appContext, p = c.get(n);
  let v;
  return p ? v = p : !l.length && !i && !s ? v = n : (v = {}, l.length && l.forEach(
    (R) => Zr(v, R, h, !0)
  ), Zr(v, n, h)), De(n) && c.set(n, v), v;
}
function Zr(e, n, i, s = !1) {
  const { mixins: l, extends: c } = n;
  c && Zr(e, c, i, !0), l && l.forEach(
    (h) => Zr(e, h, i, !0)
  );
  for (const h in n)
    if (!(s && h === "expose")) {
      const p = Fl[h] || i && i[h];
      e[h] = p ? p(e[h], n[h]) : n[h];
    }
  return e;
}
const Fl = {
  data: Cs,
  props: Ts,
  emits: Ts,
  // objects
  methods: Xn,
  computed: Xn,
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
  components: Xn,
  directives: Xn,
  // watch
  watch: Bl,
  // provide / inject
  provide: Cs,
  inject: Ml
};
function Cs(e, n) {
  return n ? e ? function() {
    return dt(
      pe(e) ? e.call(this, this) : e,
      pe(n) ? n.call(this, this) : n
    );
  } : n : e;
}
function Ml(e, n) {
  return Xn(ao(e), ao(n));
}
function ao(e) {
  if (fe(e)) {
    const n = {};
    for (let i = 0; i < e.length; i++)
      n[e[i]] = e[i];
    return n;
  }
  return e;
}
function lt(e, n) {
  return e ? [...new Set([].concat(e, n))] : n;
}
function Xn(e, n) {
  return e ? dt(/* @__PURE__ */ Object.create(null), e, n) : n;
}
function Ts(e, n) {
  return e ? fe(e) && fe(n) ? [.../* @__PURE__ */ new Set([...e, ...n])] : dt(
    /* @__PURE__ */ Object.create(null),
    Ss(e),
    Ss(n ?? {})
  ) : n;
}
function Bl(e, n) {
  if (!e) return n;
  if (!n) return e;
  const i = dt(/* @__PURE__ */ Object.create(null), e);
  for (const s in n)
    i[s] = lt(e[s], n[s]);
  return i;
}
function Ia() {
  return {
    app: null,
    config: {
      isNativeTag: Pu,
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
let Nl = 0;
function ql(e, n) {
  return function(s, l = null) {
    pe(s) || (s = dt({}, s)), l != null && !De(l) && (l = null);
    const c = Ia(), h = /* @__PURE__ */ new WeakSet(), p = [];
    let v = !1;
    const R = c.app = {
      _uid: Nl++,
      _component: s,
      _props: l,
      _container: null,
      _context: c,
      _instance: null,
      version: _c,
      get config() {
        return c.config;
      },
      set config(k) {
      },
      use(k, ...A) {
        return h.has(k) || (k && pe(k.install) ? (h.add(k), k.install(R, ...A)) : pe(k) && (h.add(k), k(R, ...A))), R;
      },
      mixin(k) {
        return c.mixins.includes(k) || c.mixins.push(k), R;
      },
      component(k, A) {
        return A ? (c.components[k] = A, R) : c.components[k];
      },
      directive(k, A) {
        return A ? (c.directives[k] = A, R) : c.directives[k];
      },
      mount(k, A, M) {
        if (!v) {
          const G = R._ceVNode || gt(s, l);
          return G.appContext = c, M === !0 ? M = "svg" : M === !1 && (M = void 0), e(G, k, M), v = !0, R._container = k, k.__vue_app__ = R, fi(G.component);
        }
      },
      onUnmount(k) {
        p.push(k);
      },
      unmount() {
        v && (Ht(
          p,
          R._instance,
          16
        ), e(null, R._container), delete R._container.__vue_app__);
      },
      provide(k, A) {
        return c.provides[k] = A, R;
      },
      runWithContext(k) {
        const A = bn;
        bn = R;
        try {
          return k();
        } finally {
          bn = A;
        }
      }
    };
    return R;
  };
}
let bn = null;
function Ul(e, n) {
  if (Xe) {
    let i = Xe.provides;
    const s = Xe.parent && Xe.parent.provides;
    s === i && (i = Xe.provides = Object.create(s)), i[e] = n;
  }
}
function Hr(e, n, i = !1) {
  const s = Xe || He;
  if (s || bn) {
    let l = bn ? bn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return i && pe(n) ? n.call(s && s.proxy) : n;
  }
}
function nf() {
  return !!(Xe || He || bn);
}
const Da = {}, ja = () => Object.create(Da), Ka = (e) => Object.getPrototypeOf(e) === Da;
function Ll(e, n, i, s = !1) {
  const l = {}, c = ja();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Fa(e, n, l, c);
  for (const h in e.propsOptions[0])
    h in l || (l[h] = void 0);
  i ? e.props = s ? l : rl(l) : e.type.props ? e.props = l : e.props = c, e.attrs = c;
}
function Vl(e, n, i, s) {
  const {
    props: l,
    attrs: c,
    vnode: { patchFlag: h }
  } = e, p = ke(l), [v] = e.propsOptions;
  let R = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || h > 0) && !(h & 16)
  ) {
    if (h & 8) {
      const k = e.vnode.dynamicProps;
      for (let A = 0; A < k.length; A++) {
        let M = k[A];
        if (li(e.emitsOptions, M))
          continue;
        const G = n[M];
        if (v)
          if (Ce(c, M))
            G !== c[M] && (c[M] = G, R = !0);
          else {
            const ie = Kt(M);
            l[ie] = uo(
              v,
              p,
              ie,
              G,
              e,
              !1
            );
          }
        else
          G !== c[M] && (c[M] = G, R = !0);
      }
    }
  } else {
    Fa(e, n, l, c) && (R = !0);
    let k;
    for (const A in p)
      (!n || // for camelCase
      !Ce(n, A) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((k = hr(A)) === A || !Ce(n, k))) && (v ? i && // for camelCase
      (i[A] !== void 0 || // for kebab-case
      i[k] !== void 0) && (l[A] = uo(
        v,
        p,
        A,
        void 0,
        e,
        !0
      )) : delete l[A]);
    if (c !== p)
      for (const A in c)
        (!n || !Ce(n, A)) && (delete c[A], R = !0);
  }
  R && qt(e.attrs, "set", "");
}
function Fa(e, n, i, s) {
  const [l, c] = e.propsOptions;
  let h = !1, p;
  if (n)
    for (let v in n) {
      if (Zn(v))
        continue;
      const R = n[v];
      let k;
      l && Ce(l, k = Kt(v)) ? !c || !c.includes(k) ? i[k] = R : (p || (p = {}))[k] = R : li(e.emitsOptions, v) || (!(v in s) || R !== s[v]) && (s[v] = R, h = !0);
    }
  if (c) {
    const v = ke(i), R = p || Re;
    for (let k = 0; k < c.length; k++) {
      const A = c[k];
      i[A] = uo(
        l,
        v,
        A,
        R[A],
        e,
        !Ce(R, A)
      );
    }
  }
  return h;
}
function uo(e, n, i, s, l, c) {
  const h = e[i];
  if (h != null) {
    const p = Ce(h, "default");
    if (p && s === void 0) {
      const v = h.default;
      if (h.type !== Function && !h.skipFactory && pe(v)) {
        const { propsDefaults: R } = l;
        if (i in R)
          s = R[i];
        else {
          const k = pr(l);
          s = R[i] = v.call(
            null,
            n
          ), k();
        }
      } else
        s = v;
      l.ce && l.ce._setProp(i, s);
    }
    h[
      0
      /* shouldCast */
    ] && (c && !p ? s = !1 : h[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === hr(i)) && (s = !0));
  }
  return s;
}
const $l = /* @__PURE__ */ new WeakMap();
function Ma(e, n, i = !1) {
  const s = i ? $l : n.propsCache, l = s.get(e);
  if (l)
    return l;
  const c = e.props, h = {}, p = [];
  let v = !1;
  if (!pe(e)) {
    const k = (A) => {
      v = !0;
      const [M, G] = Ma(A, n, !0);
      dt(h, M), G && p.push(...G);
    };
    !i && n.mixins.length && n.mixins.forEach(k), e.extends && k(e.extends), e.mixins && e.mixins.forEach(k);
  }
  if (!c && !v)
    return De(e) && s.set(e, In), In;
  if (fe(c))
    for (let k = 0; k < c.length; k++) {
      const A = Kt(c[k]);
      As(A) && (h[A] = Re);
    }
  else if (c)
    for (const k in c) {
      const A = Kt(k);
      if (As(A)) {
        const M = c[k], G = h[A] = fe(M) || pe(M) ? { type: M } : dt({}, M), ie = G.type;
        let re = !1, Me = !0;
        if (fe(ie))
          for (let ve = 0; ve < ie.length; ++ve) {
            const Ee = ie[ve], Se = pe(Ee) && Ee.name;
            if (Se === "Boolean") {
              re = !0;
              break;
            } else Se === "String" && (Me = !1);
          }
        else
          re = pe(ie) && ie.name === "Boolean";
        G[
          0
          /* shouldCast */
        ] = re, G[
          1
          /* shouldCastTrue */
        ] = Me, (re || Ce(G, "default")) && p.push(A);
      }
    }
  const R = [h, p];
  return De(e) && s.set(e, R), R;
}
function As(e) {
  return e[0] !== "$" && !Zn(e);
}
const Do = (e) => e[0] === "_" || e === "$stable", jo = (e) => fe(e) ? e.map(It) : [It(e)], Hl = (e, n, i) => {
  if (n._n)
    return n;
  const s = vl((...l) => jo(n(...l)), i);
  return s._c = !1, s;
}, Ba = (e, n, i) => {
  const s = e._ctx;
  for (const l in e) {
    if (Do(l)) continue;
    const c = e[l];
    if (pe(c))
      n[l] = Hl(l, c, s);
    else if (c != null) {
      const h = jo(c);
      n[l] = () => h;
    }
  }
}, Na = (e, n) => {
  const i = jo(n);
  e.slots.default = () => i;
}, qa = (e, n, i) => {
  for (const s in n)
    (i || !Do(s)) && (e[s] = n[s]);
}, Wl = (e, n, i) => {
  const s = e.slots = ja();
  if (e.vnode.shapeFlag & 32) {
    const l = n.__;
    l && Zi(s, "__", l, !0);
    const c = n._;
    c ? (qa(s, n, i), i && Zi(s, "_", c, !0)) : Ba(n, s);
  } else n && Na(e, n);
}, Yl = (e, n, i) => {
  const { vnode: s, slots: l } = e;
  let c = !0, h = Re;
  if (s.shapeFlag & 32) {
    const p = n._;
    p ? i && p === 1 ? c = !1 : qa(l, n, i) : (c = !n.$stable, Ba(n, l)), h = n;
  } else n && (Na(e, n), h = { default: 1 });
  if (c)
    for (const p in l)
      !Do(p) && h[p] == null && delete l[p];
}, ct = sc;
function rf(e) {
  return zl(e);
}
function zl(e, n) {
  const i = ni();
  i.__VUE__ = !0;
  const {
    insert: s,
    remove: l,
    patchProp: c,
    createElement: h,
    createText: p,
    createComment: v,
    setText: R,
    setElementText: k,
    parentNode: A,
    nextSibling: M,
    setScopeId: G = Dt,
    insertStaticContent: ie
  } = e, re = (y, w, K, q = null, N = null, U = null, X = void 0, z = null, H = !!w.dynamicChildren) => {
    if (y === w)
      return;
    y && !Qn(y, w) && (q = zt(y), vt(y, N, U, !0), y = null), w.patchFlag === -2 && (H = !1, w.dynamicChildren = null);
    const { type: B, ref: le, shapeFlag: J } = w;
    switch (B) {
      case ci:
        Me(y, w, K, q);
        break;
      case Wt:
        ve(y, w, K, q);
        break;
      case Xi:
        y == null && Ee(w, K, q, X);
        break;
      case wt:
        tt(
          y,
          w,
          K,
          q,
          N,
          U,
          X,
          z,
          H
        );
        break;
      default:
        J & 1 ? Te(
          y,
          w,
          K,
          q,
          N,
          U,
          X,
          z,
          H
        ) : J & 6 ? Ye(
          y,
          w,
          K,
          q,
          N,
          U,
          X,
          z,
          H
        ) : (J & 64 || J & 128) && B.process(
          y,
          w,
          K,
          q,
          N,
          U,
          X,
          z,
          H,
          Gt
        );
    }
    le != null && N ? rr(le, y && y.ref, U, w || y, !w) : le == null && y && y.ref != null && rr(y.ref, null, U, y, !0);
  }, Me = (y, w, K, q) => {
    if (y == null)
      s(
        w.el = p(w.children),
        K,
        q
      );
    else {
      const N = w.el = y.el;
      w.children !== y.children && R(N, w.children);
    }
  }, ve = (y, w, K, q) => {
    y == null ? s(
      w.el = v(w.children || ""),
      K,
      q
    ) : w.el = y.el;
  }, Ee = (y, w, K, q) => {
    [y.el, y.anchor] = ie(
      y.children,
      w,
      K,
      q,
      y.el,
      y.anchor
    );
  }, Se = ({ el: y, anchor: w }, K, q) => {
    let N;
    for (; y && y !== w; )
      N = M(y), s(y, K, q), y = N;
    s(w, K, q);
  }, ae = ({ el: y, anchor: w }) => {
    let K;
    for (; y && y !== w; )
      K = M(y), l(y), y = K;
    l(w);
  }, Te = (y, w, K, q, N, U, X, z, H) => {
    w.type === "svg" ? X = "svg" : w.type === "math" && (X = "mathml"), y == null ? Ae(
      w,
      K,
      q,
      N,
      U,
      X,
      z,
      H
    ) : ue(
      y,
      w,
      N,
      U,
      X,
      z,
      H
    );
  }, Ae = (y, w, K, q, N, U, X, z) => {
    let H, B;
    const { props: le, shapeFlag: J, transition: se, dirs: ce } = y;
    if (H = y.el = h(
      y.type,
      U,
      le && le.is,
      le
    ), J & 8 ? k(H, y.children) : J & 16 && Y(
      y.children,
      H,
      null,
      q,
      N,
      Ji(y, U),
      X,
      z
    ), ce && yn(y, null, q, "created"), F(H, y, y.scopeId, X, q), le) {
      for (const we in le)
        we !== "value" && !Zn(we) && c(H, we, null, le[we], U, q);
      "value" in le && c(H, "value", null, le.value, U), (B = le.onVnodeBeforeMount) && At(B, q, y);
    }
    ce && yn(y, null, q, "beforeMount");
    const ye = Gl(N, se);
    ye && se.beforeEnter(H), s(H, w, K), ((B = le && le.onVnodeMounted) || ye || ce) && ct(() => {
      B && At(B, q, y), ye && se.enter(H), ce && yn(y, null, q, "mounted");
    }, N);
  }, F = (y, w, K, q, N) => {
    if (K && G(y, K), q)
      for (let U = 0; U < q.length; U++)
        G(y, q[U]);
    if (N) {
      let U = N.subTree;
      if (w === U || Ha(U.type) && (U.ssContent === w || U.ssFallback === w)) {
        const X = N.vnode;
        F(
          y,
          X,
          X.scopeId,
          X.slotScopeIds,
          N.parent
        );
      }
    }
  }, Y = (y, w, K, q, N, U, X, z, H = 0) => {
    for (let B = H; B < y.length; B++) {
      const le = y[B] = z ? on(y[B]) : It(y[B]);
      re(
        null,
        le,
        w,
        K,
        q,
        N,
        U,
        X,
        z
      );
    }
  }, ue = (y, w, K, q, N, U, X) => {
    const z = w.el = y.el;
    let { patchFlag: H, dynamicChildren: B, dirs: le } = w;
    H |= y.patchFlag & 16;
    const J = y.props || Re, se = w.props || Re;
    let ce;
    if (K && gn(K, !1), (ce = se.onVnodeBeforeUpdate) && At(ce, K, w, y), le && yn(w, y, K, "beforeUpdate"), K && gn(K, !0), (J.innerHTML && se.innerHTML == null || J.textContent && se.textContent == null) && k(z, ""), B ? me(
      y.dynamicChildren,
      B,
      z,
      K,
      q,
      Ji(w, N),
      U
    ) : X || _e(
      y,
      w,
      z,
      null,
      K,
      q,
      Ji(w, N),
      U,
      !1
    ), H > 0) {
      if (H & 16)
        Ie(z, J, se, K, N);
      else if (H & 2 && J.class !== se.class && c(z, "class", null, se.class, N), H & 4 && c(z, "style", J.style, se.style, N), H & 8) {
        const ye = w.dynamicProps;
        for (let we = 0; we < ye.length; we++) {
          const Oe = ye[we], Ve = J[Oe], ze = se[Oe];
          (ze !== Ve || Oe === "value") && c(z, Oe, Ve, ze, N, K);
        }
      }
      H & 1 && y.children !== w.children && k(z, w.children);
    } else !X && B == null && Ie(z, J, se, K, N);
    ((ce = se.onVnodeUpdated) || le) && ct(() => {
      ce && At(ce, K, w, y), le && yn(w, y, K, "updated");
    }, q);
  }, me = (y, w, K, q, N, U, X) => {
    for (let z = 0; z < w.length; z++) {
      const H = y[z], B = w[z], le = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        H.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (H.type === wt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Qn(H, B) || // - In the case of a component, it could contain anything.
        H.shapeFlag & 198) ? A(H.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          K
        )
      );
      re(
        H,
        B,
        le,
        null,
        q,
        N,
        U,
        X,
        !0
      );
    }
  }, Ie = (y, w, K, q, N) => {
    if (w !== K) {
      if (w !== Re)
        for (const U in w)
          !Zn(U) && !(U in K) && c(
            y,
            U,
            w[U],
            null,
            N,
            q
          );
      for (const U in K) {
        if (Zn(U)) continue;
        const X = K[U], z = w[U];
        X !== z && U !== "value" && c(y, U, z, X, N, q);
      }
      "value" in K && c(y, "value", w.value, K.value, N);
    }
  }, tt = (y, w, K, q, N, U, X, z, H) => {
    const B = w.el = y ? y.el : p(""), le = w.anchor = y ? y.anchor : p("");
    let { patchFlag: J, dynamicChildren: se, slotScopeIds: ce } = w;
    ce && (z = z ? z.concat(ce) : ce), y == null ? (s(B, K, q), s(le, K, q), Y(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      K,
      le,
      N,
      U,
      X,
      z,
      H
    )) : J > 0 && J & 64 && se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    y.dynamicChildren ? (me(
      y.dynamicChildren,
      se,
      K,
      N,
      U,
      X,
      z
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || N && w === N.subTree) && Ko(
      y,
      w,
      !0
      /* shallow */
    )) : _e(
      y,
      w,
      K,
      le,
      N,
      U,
      X,
      z,
      H
    );
  }, Ye = (y, w, K, q, N, U, X, z, H) => {
    w.slotScopeIds = z, y == null ? w.shapeFlag & 512 ? N.ctx.activate(
      w,
      K,
      q,
      X,
      H
    ) : Et(
      w,
      K,
      q,
      N,
      U,
      X,
      H
    ) : St(y, w, H);
  }, Et = (y, w, K, q, N, U, X) => {
    const z = y.component = pc(
      y,
      q,
      N
    );
    if (xa(y) && (z.ctx.renderer = Gt), yc(z, !1, X), z.asyncDep) {
      if (N && N.registerDep(z, $e, X), !y.el) {
        const H = z.subTree = gt(Wt);
        ve(null, H, w, K);
      }
    } else
      $e(
        z,
        y,
        w,
        K,
        N,
        U,
        X
      );
  }, St = (y, w, K) => {
    const q = w.component = y.component;
    if (ic(y, w, K))
      if (q.asyncDep && !q.asyncResolved) {
        Ke(q, w, K);
        return;
      } else
        q.next = w, q.update();
    else
      w.el = y.el, q.vnode = w;
  }, $e = (y, w, K, q, N, U, X) => {
    const z = () => {
      if (y.isMounted) {
        let { next: J, bu: se, u: ce, parent: ye, vnode: we } = y;
        {
          const Ge = Ua(y);
          if (Ge) {
            J && (J.el = we.el, Ke(y, J, X)), Ge.asyncDep.then(() => {
              y.isUnmounted || z();
            });
            return;
          }
        }
        let Oe = J, Ve;
        gn(y, !1), J ? (J.el = we.el, Ke(y, J, X)) : J = we, se && $i(se), (Ve = J.props && J.props.onVnodeBeforeUpdate) && At(Ve, ye, J, we), gn(y, !0);
        const ze = Is(y), at = y.subTree;
        y.subTree = ze, re(
          at,
          ze,
          // parent may have changed if it's in a teleport
          A(at.el),
          // anchor may have changed if it's in a fragment
          zt(at),
          y,
          N,
          U
        ), J.el = ze.el, Oe === null && oc(y, ze.el), ce && ct(ce, N), (Ve = J.props && J.props.onVnodeUpdated) && ct(
          () => At(Ve, ye, J, we),
          N
        );
      } else {
        let J;
        const { el: se, props: ce } = w, { bm: ye, m: we, parent: Oe, root: Ve, type: ze } = y, at = Fn(w);
        gn(y, !1), ye && $i(ye), !at && (J = ce && ce.onVnodeBeforeMount) && At(J, Oe, w), gn(y, !0);
        {
          Ve.ce && // @ts-expect-error _def is private
          Ve.ce._def.shadowRoot !== !1 && Ve.ce._injectChildStyle(ze);
          const Ge = y.subTree = Is(y);
          re(
            null,
            Ge,
            K,
            q,
            y,
            N,
            U
          ), w.el = Ge.el;
        }
        if (we && ct(we, N), !at && (J = ce && ce.onVnodeMounted)) {
          const Ge = w;
          ct(
            () => At(J, Oe, Ge),
            N
          );
        }
        (w.shapeFlag & 256 || Oe && Fn(Oe.vnode) && Oe.vnode.shapeFlag & 256) && y.a && ct(y.a, N), y.isMounted = !0, w = K = q = null;
      }
    };
    y.scope.on();
    const H = y.effect = new Gs(z);
    y.scope.off();
    const B = y.update = H.run.bind(H), le = y.job = H.runIfDirty.bind(H);
    le.i = y, le.id = y.uid, H.scheduler = () => Ro(le), gn(y, !0), B();
  }, Ke = (y, w, K) => {
    w.component = y;
    const q = y.vnode.props;
    y.vnode = w, y.next = null, Vl(y, w.props, q, K), Yl(y, w.children, K), Vt(), ws(y), $t();
  }, _e = (y, w, K, q, N, U, X, z, H = !1) => {
    const B = y && y.children, le = y ? y.shapeFlag : 0, J = w.children, { patchFlag: se, shapeFlag: ce } = w;
    if (se > 0) {
      if (se & 128) {
        yt(
          B,
          J,
          K,
          q,
          N,
          U,
          X,
          z,
          H
        );
        return;
      } else if (se & 256) {
        pt(
          B,
          J,
          K,
          q,
          N,
          U,
          X,
          z,
          H
        );
        return;
      }
    }
    ce & 8 ? (le & 16 && bt(B, N, U), J !== B && k(K, J)) : le & 16 ? ce & 16 ? yt(
      B,
      J,
      K,
      q,
      N,
      U,
      X,
      z,
      H
    ) : bt(B, N, U, !0) : (le & 8 && k(K, ""), ce & 16 && Y(
      J,
      K,
      q,
      N,
      U,
      X,
      z,
      H
    ));
  }, pt = (y, w, K, q, N, U, X, z, H) => {
    y = y || In, w = w || In;
    const B = y.length, le = w.length, J = Math.min(B, le);
    let se;
    for (se = 0; se < J; se++) {
      const ce = w[se] = H ? on(w[se]) : It(w[se]);
      re(
        y[se],
        ce,
        K,
        null,
        N,
        U,
        X,
        z,
        H
      );
    }
    B > le ? bt(
      y,
      N,
      U,
      !0,
      !1,
      J
    ) : Y(
      w,
      K,
      q,
      N,
      U,
      X,
      z,
      H,
      J
    );
  }, yt = (y, w, K, q, N, U, X, z, H) => {
    let B = 0;
    const le = w.length;
    let J = y.length - 1, se = le - 1;
    for (; B <= J && B <= se; ) {
      const ce = y[B], ye = w[B] = H ? on(w[B]) : It(w[B]);
      if (Qn(ce, ye))
        re(
          ce,
          ye,
          K,
          null,
          N,
          U,
          X,
          z,
          H
        );
      else
        break;
      B++;
    }
    for (; B <= J && B <= se; ) {
      const ce = y[J], ye = w[se] = H ? on(w[se]) : It(w[se]);
      if (Qn(ce, ye))
        re(
          ce,
          ye,
          K,
          null,
          N,
          U,
          X,
          z,
          H
        );
      else
        break;
      J--, se--;
    }
    if (B > J) {
      if (B <= se) {
        const ce = se + 1, ye = ce < le ? w[ce].el : q;
        for (; B <= se; )
          re(
            null,
            w[B] = H ? on(w[B]) : It(w[B]),
            K,
            ye,
            N,
            U,
            X,
            z,
            H
          ), B++;
      }
    } else if (B > se)
      for (; B <= J; )
        vt(y[B], N, U, !0), B++;
    else {
      const ce = B, ye = B, we = /* @__PURE__ */ new Map();
      for (B = ye; B <= se; B++) {
        const Ne = w[B] = H ? on(w[B]) : It(w[B]);
        Ne.key != null && we.set(Ne.key, B);
      }
      let Oe, Ve = 0;
      const ze = se - ye + 1;
      let at = !1, Ge = 0;
      const kt = new Array(ze);
      for (B = 0; B < ze; B++) kt[B] = 0;
      for (B = ce; B <= J; B++) {
        const Ne = y[B];
        if (Ve >= ze) {
          vt(Ne, N, U, !0);
          continue;
        }
        let ne;
        if (Ne.key != null)
          ne = we.get(Ne.key);
        else
          for (Oe = ye; Oe <= se; Oe++)
            if (kt[Oe - ye] === 0 && Qn(Ne, w[Oe])) {
              ne = Oe;
              break;
            }
        ne === void 0 ? vt(Ne, N, U, !0) : (kt[ne - ye] = B + 1, ne >= Ge ? Ge = ne : at = !0, re(
          Ne,
          w[ne],
          K,
          null,
          N,
          U,
          X,
          z,
          H
        ), Ve++);
      }
      const wn = at ? Jl(kt) : In;
      for (Oe = wn.length - 1, B = ze - 1; B >= 0; B--) {
        const Ne = ye + B, ne = w[Ne], Jt = Ne + 1 < le ? w[Ne + 1].el : q;
        kt[B] === 0 ? re(
          null,
          ne,
          K,
          Jt,
          N,
          U,
          X,
          z,
          H
        ) : at && (Oe < 0 || B !== wn[Oe] ? Ot(ne, K, Jt, 2) : Oe--);
      }
    }
  }, Ot = (y, w, K, q, N = null) => {
    const { el: U, type: X, transition: z, children: H, shapeFlag: B } = y;
    if (B & 6) {
      Ot(y.component.subTree, w, K, q);
      return;
    }
    if (B & 128) {
      y.suspense.move(w, K, q);
      return;
    }
    if (B & 64) {
      X.move(y, w, K, Gt);
      return;
    }
    if (X === wt) {
      s(U, w, K);
      for (let J = 0; J < H.length; J++)
        Ot(H[J], w, K, q);
      s(y.anchor, w, K);
      return;
    }
    if (X === Xi) {
      Se(y, w, K);
      return;
    }
    if (q !== 2 && B & 1 && z)
      if (q === 0)
        z.beforeEnter(U), s(U, w, K), ct(() => z.enter(U), N);
      else {
        const { leave: J, delayLeave: se, afterLeave: ce } = z, ye = () => {
          y.ctx.isUnmounted ? l(U) : s(U, w, K);
        }, we = () => {
          J(U, () => {
            ye(), ce && ce();
          });
        };
        se ? se(U, ye, we) : we();
      }
    else
      s(U, w, K);
  }, vt = (y, w, K, q = !1, N = !1) => {
    const {
      type: U,
      props: X,
      ref: z,
      children: H,
      dynamicChildren: B,
      shapeFlag: le,
      patchFlag: J,
      dirs: se,
      cacheIndex: ce
    } = y;
    if (J === -2 && (N = !1), z != null && (Vt(), rr(z, null, K, y, !0), $t()), ce != null && (w.renderCache[ce] = void 0), le & 256) {
      w.ctx.deactivate(y);
      return;
    }
    const ye = le & 1 && se, we = !Fn(y);
    let Oe;
    if (we && (Oe = X && X.onVnodeBeforeUnmount) && At(Oe, w, y), le & 6)
      _n(y.component, K, q);
    else {
      if (le & 128) {
        y.suspense.unmount(K, q);
        return;
      }
      ye && yn(y, null, w, "beforeUnmount"), le & 64 ? y.type.remove(
        y,
        w,
        K,
        Gt,
        q
      ) : B && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !B.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (U !== wt || J > 0 && J & 64) ? bt(
        B,
        w,
        K,
        !1,
        !0
      ) : (U === wt && J & 384 || !N && le & 16) && bt(H, w, K), q && Ft(y);
    }
    (we && (Oe = X && X.onVnodeUnmounted) || ye) && ct(() => {
      Oe && At(Oe, w, y), ye && yn(y, null, w, "unmounted");
    }, K);
  }, Ft = (y) => {
    const { type: w, el: K, anchor: q, transition: N } = y;
    if (w === wt) {
      yr(K, q);
      return;
    }
    if (w === Xi) {
      ae(y);
      return;
    }
    const U = () => {
      l(K), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (y.shapeFlag & 1 && N && !N.persisted) {
      const { leave: X, delayLeave: z } = N, H = () => X(K, U);
      z ? z(y.el, U, H) : H();
    } else
      U();
  }, yr = (y, w) => {
    let K;
    for (; y !== w; )
      K = M(y), l(y), y = K;
    l(w);
  }, _n = (y, w, K) => {
    const {
      bum: q,
      scope: N,
      job: U,
      subTree: X,
      um: z,
      m: H,
      a: B,
      parent: le,
      slots: { __: J }
    } = y;
    Rs(H), Rs(B), q && $i(q), le && fe(J) && J.forEach((se) => {
      le.renderCache[se] = void 0;
    }), N.stop(), U && (U.flags |= 8, vt(X, y, w, K)), z && ct(z, w), ct(() => {
      y.isUnmounted = !0;
    }, w), w && w.pendingBranch && !w.isUnmounted && y.asyncDep && !y.asyncResolved && y.suspenseId === w.pendingId && (w.deps--, w.deps === 0 && w.resolve());
  }, bt = (y, w, K, q = !1, N = !1, U = 0) => {
    for (let X = U; X < y.length; X++)
      vt(y[X], w, K, q, N);
  }, zt = (y) => {
    if (y.shapeFlag & 6)
      return zt(y.component.subTree);
    if (y.shapeFlag & 128)
      return y.suspense.next();
    const w = M(y.anchor || y.el), K = w && w[va];
    return K ? M(K) : w;
  };
  let Nn = !1;
  const oe = (y, w, K) => {
    y == null ? w._vnode && vt(w._vnode, null, null, !0) : re(
      w._vnode || null,
      y,
      w,
      null,
      null,
      null,
      K
    ), w._vnode = y, Nn || (Nn = !0, ws(), ya(), Nn = !1);
  }, Gt = {
    p: re,
    um: vt,
    m: Ot,
    r: Ft,
    mt: Et,
    mc: Y,
    pc: _e,
    pbc: me,
    n: zt,
    o: e
  };
  return {
    render: oe,
    hydrate: void 0,
    createApp: ql(oe)
  };
}
function Ji({ type: e, props: n }, i) {
  return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && n && n.encoding && n.encoding.includes("html") ? void 0 : i;
}
function gn({ effect: e, job: n }, i) {
  i ? (e.flags |= 32, n.flags |= 4) : (e.flags &= -33, n.flags &= -5);
}
function Gl(e, n) {
  return (!e || e && !e.pendingBranch) && n && !n.persisted;
}
function Ko(e, n, i = !1) {
  const s = e.children, l = n.children;
  if (fe(s) && fe(l))
    for (let c = 0; c < s.length; c++) {
      const h = s[c];
      let p = l[c];
      p.shapeFlag & 1 && !p.dynamicChildren && ((p.patchFlag <= 0 || p.patchFlag === 32) && (p = l[c] = on(l[c]), p.el = h.el), !i && p.patchFlag !== -2 && Ko(h, p)), p.type === ci && (p.el = h.el), p.type === Wt && !p.el && (p.el = h.el);
    }
}
function Jl(e) {
  const n = e.slice(), i = [0];
  let s, l, c, h, p;
  const v = e.length;
  for (s = 0; s < v; s++) {
    const R = e[s];
    if (R !== 0) {
      if (l = i[i.length - 1], e[l] < R) {
        n[s] = l, i.push(s);
        continue;
      }
      for (c = 0, h = i.length - 1; c < h; )
        p = c + h >> 1, e[i[p]] < R ? c = p + 1 : h = p;
      R < e[i[c]] && (c > 0 && (n[s] = i[c - 1]), i[c] = s);
    }
  }
  for (c = i.length, h = i[c - 1]; c-- > 0; )
    i[c] = h, h = n[h];
  return i;
}
function Ua(e) {
  const n = e.subTree.component;
  if (n)
    return n.asyncDep && !n.asyncResolved ? n : Ua(n);
}
function Rs(e) {
  if (e)
    for (let n = 0; n < e.length; n++)
      e[n].flags |= 8;
}
const Ql = Symbol.for("v-scx"), Xl = () => Hr(Ql);
function La(e, n) {
  return Fo(e, null, n);
}
function Qi(e, n, i) {
  return Fo(e, n, i);
}
function Fo(e, n, i = Re) {
  const { immediate: s, deep: l, flush: c, once: h } = i, p = dt({}, i), v = n && s || !n && c !== "post";
  let R;
  if (cr) {
    if (c === "sync") {
      const G = Xl();
      R = G.__watcherHandles || (G.__watcherHandles = []);
    } else if (!v) {
      const G = () => {
      };
      return G.stop = Dt, G.resume = Dt, G.pause = Dt, G;
    }
  }
  const k = Xe;
  p.call = (G, ie, re) => Ht(G, k, ie, re);
  let A = !1;
  c === "post" ? p.scheduler = (G) => {
    ct(G, k && k.suspense);
  } : c !== "sync" && (A = !0, p.scheduler = (G, ie) => {
    ie ? G() : Ro(G);
  }), p.augmentJob = (G) => {
    n && (G.flags |= 4), A && (G.flags |= 2, k && (G.id = k.uid, G.i = k));
  };
  const M = dl(e, n, p);
  return cr && (R ? R.push(M) : v && M()), M;
}
function Zl(e, n, i) {
  const s = this.proxy, l = Ze(e) ? e.includes(".") ? Va(s, e) : () => s[e] : e.bind(s, s);
  let c;
  pe(n) ? c = n : (c = n.handler, i = n);
  const h = pr(this), p = Fo(l, c.bind(s), i);
  return h(), p;
}
function Va(e, n) {
  const i = n.split(".");
  return () => {
    let s = e;
    for (let l = 0; l < i.length && s; l++)
      s = s[i[l]];
    return s;
  };
}
const ec = (e, n) => n === "modelValue" || n === "model-value" ? e.modelModifiers : e[`${n}Modifiers`] || e[`${Kt(n)}Modifiers`] || e[`${hr(n)}Modifiers`];
function tc(e, n, ...i) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Re;
  let l = i;
  const c = n.startsWith("update:"), h = c && ec(s, n.slice(7));
  h && (h.trim && (l = i.map((k) => Ze(k) ? k.trim() : k)), h.number && (l = i.map(Tu)));
  let p, v = s[p = Vi(n)] || // also try camelCase event handler (#2249)
  s[p = Vi(Kt(n))];
  !v && c && (v = s[p = Vi(hr(n))]), v && Ht(
    v,
    e,
    6,
    l
  );
  const R = s[p + "Once"];
  if (R) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[p])
      return;
    e.emitted[p] = !0, Ht(
      R,
      e,
      6,
      l
    );
  }
}
function $a(e, n, i = !1) {
  const s = n.emitsCache, l = s.get(e);
  if (l !== void 0)
    return l;
  const c = e.emits;
  let h = {}, p = !1;
  if (!pe(e)) {
    const v = (R) => {
      const k = $a(R, n, !0);
      k && (p = !0, dt(h, k));
    };
    !i && n.mixins.length && n.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  return !c && !p ? (De(e) && s.set(e, null), null) : (fe(c) ? c.forEach((v) => h[v] = null) : dt(h, c), De(e) && s.set(e, h), h);
}
function li(e, n) {
  return !e || !mo(n) ? !1 : (n = n.slice(2).replace(/Once$/, ""), Ce(e, n[0].toLowerCase() + n.slice(1)) || Ce(e, hr(n)) || Ce(e, n));
}
function Is(e) {
  const {
    type: n,
    vnode: i,
    proxy: s,
    withProxy: l,
    propsOptions: [c],
    slots: h,
    attrs: p,
    emit: v,
    render: R,
    renderCache: k,
    props: A,
    data: M,
    setupState: G,
    ctx: ie,
    inheritAttrs: re
  } = e, Me = Xr(e);
  let ve, Ee;
  try {
    if (i.shapeFlag & 4) {
      const ae = l || s, Te = ae;
      ve = It(
        R.call(
          Te,
          ae,
          k,
          A,
          G,
          M,
          ie
        )
      ), Ee = p;
    } else {
      const ae = n;
      ve = It(
        ae.length > 1 ? ae(
          A,
          { attrs: p, slots: h, emit: v }
        ) : ae(
          A,
          null
        )
      ), Ee = n.props ? p : nc(p);
    }
  } catch (ae) {
    or.length = 0, ai(ae, e, 1), ve = gt(Wt);
  }
  let Se = ve;
  if (Ee && re !== !1) {
    const ae = Object.keys(Ee), { shapeFlag: Te } = Se;
    ae.length && Te & 7 && (c && ae.some(qs) && (Ee = rc(
      Ee,
      c
    )), Se = Bn(Se, Ee, !1, !0));
  }
  return i.dirs && (Se = Bn(Se, null, !1, !0), Se.dirs = Se.dirs ? Se.dirs.concat(i.dirs) : i.dirs), i.transition && Io(Se, i.transition), ve = Se, Xr(Me), ve;
}
const nc = (e) => {
  let n;
  for (const i in e)
    (i === "class" || i === "style" || mo(i)) && ((n || (n = {}))[i] = e[i]);
  return n;
}, rc = (e, n) => {
  const i = {};
  for (const s in e)
    (!qs(s) || !(s.slice(9) in n)) && (i[s] = e[s]);
  return i;
};
function ic(e, n, i) {
  const { props: s, children: l, component: c } = e, { props: h, children: p, patchFlag: v } = n, R = c.emitsOptions;
  if (n.dirs || n.transition)
    return !0;
  if (i && v >= 0) {
    if (v & 1024)
      return !0;
    if (v & 16)
      return s ? Ds(s, h, R) : !!h;
    if (v & 8) {
      const k = n.dynamicProps;
      for (let A = 0; A < k.length; A++) {
        const M = k[A];
        if (h[M] !== s[M] && !li(R, M))
          return !0;
      }
    }
  } else
    return (l || p) && (!p || !p.$stable) ? !0 : s === h ? !1 : s ? h ? Ds(s, h, R) : !0 : !!h;
  return !1;
}
function Ds(e, n, i) {
  const s = Object.keys(n);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < s.length; l++) {
    const c = s[l];
    if (n[c] !== e[c] && !li(i, c))
      return !0;
  }
  return !1;
}
function oc({ vnode: e, parent: n }, i) {
  for (; n; ) {
    const s = n.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = n.vnode).el = i, n = n.parent;
    else
      break;
  }
}
const Ha = (e) => e.__isSuspense;
function sc(e, n) {
  n && n.pendingBranch ? fe(e) ? n.effects.push(...e) : n.effects.push(e) : ml(e);
}
const wt = Symbol.for("v-fgt"), ci = Symbol.for("v-txt"), Wt = Symbol.for("v-cmt"), Xi = Symbol.for("v-stc"), or = [];
let ht = null;
function lo(e = !1) {
  or.push(ht = e ? null : []);
}
function ac() {
  or.pop(), ht = or[or.length - 1] || null;
}
let Mn = 1;
function js(e, n = !1) {
  Mn += e, e < 0 && ht && n && (ht.hasOnce = !0);
}
function Wa(e) {
  return e.dynamicChildren = Mn > 0 ? ht || In : null, ac(), Mn > 0 && ht && ht.push(e), e;
}
function of(e, n, i, s, l, c) {
  return Wa(
    za(
      e,
      n,
      i,
      s,
      l,
      c,
      !0
    )
  );
}
function co(e, n, i, s, l) {
  return Wa(
    gt(
      e,
      n,
      i,
      s,
      l,
      !0
    )
  );
}
function lr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Qn(e, n) {
  return e.type === n.type && e.key === n.key;
}
const Ya = ({ key: e }) => e ?? null, Wr = ({
  ref: e,
  ref_key: n,
  ref_for: i
}) => (typeof e == "number" && (e = "" + e), e != null ? Ze(e) || We(e) || pe(e) ? { i: He, r: e, k: n, f: !!i } : e : null);
function za(e, n = null, i = null, s = 0, l = null, c = e === wt ? 0 : 1, h = !1, p = !1) {
  const v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: n,
    key: n && Ya(n),
    ref: n && Wr(n),
    scopeId: ma,
    slotScopeIds: null,
    children: i,
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
    shapeFlag: c,
    patchFlag: s,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: He
  };
  return p ? (Mo(v, i), c & 128 && e.normalize(v)) : i && (v.shapeFlag |= Ze(i) ? 8 : 16), Mn > 0 && // avoid a block node from tracking itself
  !h && // has current parent block
  ht && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (v.patchFlag > 0 || c & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  v.patchFlag !== 32 && ht.push(v), v;
}
const gt = uc;
function uc(e, n = null, i = null, s = 0, l = null, c = !1) {
  if ((!e || e === Sa) && (e = Wt), lr(e)) {
    const p = Bn(
      e,
      n,
      !0
      /* mergeRef: true */
    );
    return i && Mo(p, i), Mn > 0 && !c && ht && (p.shapeFlag & 6 ? ht[ht.indexOf(e)] = p : ht.push(p)), p.patchFlag = -2, p;
  }
  if (bc(e) && (e = e.__vccOpts), n) {
    n = lc(n);
    let { class: p, style: v } = n;
    p && !Ze(p) && (n.class = ii(p)), De(v) && (To(v) && !fe(v) && (v = dt({}, v)), n.style = ri(v));
  }
  const h = Ze(e) ? 1 : Ha(e) ? 128 : bl(e) ? 64 : De(e) ? 4 : pe(e) ? 2 : 0;
  return za(
    e,
    n,
    i,
    s,
    l,
    h,
    c,
    !0
  );
}
function lc(e) {
  return e ? To(e) || Ka(e) ? dt({}, e) : e : null;
}
function Bn(e, n, i = !1, s = !1) {
  const { props: l, ref: c, patchFlag: h, children: p, transition: v } = e, R = n ? fc(l || {}, n) : l, k = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: R,
    key: R && Ya(R),
    ref: n && n.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && c ? fe(c) ? c.concat(Wr(n)) : [c, Wr(n)] : Wr(n)
    ) : c,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: p,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: n && e.type !== wt ? h === -1 ? 16 : h | 16 : h,
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
    ssContent: e.ssContent && Bn(e.ssContent),
    ssFallback: e.ssFallback && Bn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return v && s && Io(
    k,
    v.clone(k)
  ), k;
}
function cc(e = " ", n = 0) {
  return gt(ci, null, e, n);
}
function sf(e = "", n = !1) {
  return n ? (lo(), co(Wt, null, e)) : gt(Wt, null, e);
}
function It(e) {
  return e == null || typeof e == "boolean" ? gt(Wt) : fe(e) ? gt(
    wt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : lr(e) ? on(e) : gt(ci, null, String(e));
}
function on(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bn(e);
}
function Mo(e, n) {
  let i = 0;
  const { shapeFlag: s } = e;
  if (n == null)
    n = null;
  else if (fe(n))
    i = 16;
  else if (typeof n == "object")
    if (s & 65) {
      const l = n.default;
      l && (l._c && (l._d = !1), Mo(e, l()), l._c && (l._d = !0));
      return;
    } else {
      i = 32;
      const l = n._;
      !l && !Ka(n) ? n._ctx = He : l === 3 && He && (He.slots._ === 1 ? n._ = 1 : (n._ = 2, e.patchFlag |= 1024));
    }
  else pe(n) ? (n = { default: n, _ctx: He }, i = 32) : (n = String(n), s & 64 ? (i = 16, n = [cc(n)]) : i = 8);
  e.children = n, e.shapeFlag |= i;
}
function fc(...e) {
  const n = {};
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    for (const l in s)
      if (l === "class")
        n.class !== s.class && (n.class = ii([n.class, s.class]));
      else if (l === "style")
        n.style = ri([n.style, s.style]);
      else if (mo(l)) {
        const c = n[l], h = s[l];
        h && c !== h && !(fe(c) && c.includes(h)) && (n[l] = c ? [].concat(c, h) : h);
      } else l !== "" && (n[l] = s[l]);
  }
  return n;
}
function At(e, n, i, s = null) {
  Ht(e, n, 7, [
    i,
    s
  ]);
}
const hc = Ia();
let dc = 0;
function pc(e, n, i) {
  const s = e.type, l = (n ? n.appContext : e.appContext) || hc, c = {
    uid: dc++,
    vnode: e,
    type: s,
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
    scope: new Ys(
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
    propsOptions: Ma(s, l),
    emitsOptions: $a(s, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Re,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Re,
    data: Re,
    props: Re,
    attrs: Re,
    slots: Re,
    refs: Re,
    setupState: Re,
    setupContext: null,
    // suspense related
    suspense: i,
    suspenseId: i ? i.pendingId : 0,
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
  return c.ctx = { _: c }, c.root = n ? n.root : c, c.emit = tc.bind(null, c), e.ce && e.ce(c), c;
}
let Xe = null;
const Ga = () => Xe || He;
let ei, fo;
{
  const e = ni(), n = (i, s) => {
    let l;
    return (l = e[i]) || (l = e[i] = []), l.push(s), (c) => {
      l.length > 1 ? l.forEach((h) => h(c)) : l[0](c);
    };
  };
  ei = n(
    "__VUE_INSTANCE_SETTERS__",
    (i) => Xe = i
  ), fo = n(
    "__VUE_SSR_SETTERS__",
    (i) => cr = i
  );
}
const pr = (e) => {
  const n = Xe;
  return ei(e), e.scope.on(), () => {
    e.scope.off(), ei(n);
  };
}, Ks = () => {
  Xe && Xe.scope.off(), ei(null);
};
function Ja(e) {
  return e.vnode.shapeFlag & 4;
}
let cr = !1;
function yc(e, n = !1, i = !1) {
  n && fo(n);
  const { props: s, children: l } = e.vnode, c = Ja(e);
  Ll(e, s, c, n), Wl(e, l, i || n);
  const h = c ? gc(e, n) : void 0;
  return n && fo(!1), h;
}
function gc(e, n) {
  const i = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Dl);
  const { setup: s } = i;
  if (s) {
    Vt();
    const l = e.setupContext = s.length > 1 ? Xa(e) : null, c = pr(e), h = dr(
      s,
      e,
      0,
      [
        e.props,
        l
      ]
    ), p = Ls(h);
    if ($t(), c(), (p || e.sp) && !Fn(e) && wa(e), p) {
      if (h.then(Ks, Ks), n)
        return h.then((v) => {
          Fs(e, v);
        }).catch((v) => {
          ai(v, e, 0);
        });
      e.asyncDep = h;
    } else
      Fs(e, h);
  } else
    Qa(e);
}
function Fs(e, n, i) {
  pe(n) ? e.type.__ssrInlineRender ? e.ssrRender = n : e.render = n : De(n) && (e.setupState = fa(n)), Qa(e);
}
function Qa(e, n, i) {
  const s = e.type;
  e.render || (e.render = s.render || Dt);
  {
    const l = pr(e);
    Vt();
    try {
      jl(e);
    } finally {
      $t(), l();
    }
  }
}
const mc = {
  get(e, n) {
    return st(e, "get", ""), e[n];
  }
};
function Xa(e) {
  const n = (i) => {
    e.exposed = i || {};
  };
  return {
    attrs: new Proxy(e.attrs, mc),
    slots: e.slots,
    emit: e.emit,
    expose: n
  };
}
function fi(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(fa(il(e.exposed)), {
    get(n, i) {
      if (i in n)
        return n[i];
      if (i in ir)
        return ir[i](e);
    },
    has(n, i) {
      return i in n || i in ir;
    }
  })) : e.proxy;
}
function vc(e, n = !0) {
  return pe(e) ? e.displayName || e.name : e.name || n && e.__name;
}
function bc(e) {
  return pe(e) && "__vccOpts" in e;
}
const Bo = (e, n) => fl(e, n, cr);
function af(e, n, i) {
  const s = arguments.length;
  return s === 2 ? De(n) && !fe(n) ? lr(n) ? gt(e, null, [n]) : gt(e, n) : gt(e, null, n) : (s > 3 ? i = Array.prototype.slice.call(arguments, 2) : s === 3 && lr(i) && (i = [i]), gt(e, n, i));
}
function uf(e, n) {
  const i = e.memo;
  if (i.length != n.length)
    return !1;
  for (let s = 0; s < i.length; s++)
    if (Lt(i[s], n[s]))
      return !1;
  return Mn > 0 && ht && ht.push(e), !0;
}
const _c = "3.5.17";
function wc(e) {
  return zs() ? (Mu(e), !0) : !1;
}
// @__NO_SIDE_EFFECTS__
function Ms() {
  const e = /* @__PURE__ */ new Set(), n = (c) => {
    e.delete(c);
  };
  return {
    on: (c) => {
      e.add(c);
      const h = () => n(c);
      return wc(h), {
        off: h
      };
    },
    off: n,
    trigger: (...c) => Promise.all(Array.from(e).map((h) => h(...c))),
    clear: () => {
      e.clear();
    }
  };
}
const xc = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ho = () => {
}, Oc = (e, n) => Object.prototype.hasOwnProperty.call(e, n);
function Pc(e, n) {
  function i(...s) {
    return new Promise((l, c) => {
      Promise.resolve(e(() => n.apply(this, s), { fn: n, thisArg: this, args: s })).then(l).catch(c);
    });
  }
  return i;
}
function Ec(e, n = {}) {
  let i, s, l = ho;
  const c = (v) => {
    clearTimeout(v), l(), l = ho;
  };
  let h;
  return (v) => {
    const R = sn(e), k = sn(n.maxWait);
    return i && c(i), R <= 0 || k !== void 0 && k <= 0 ? (s && (c(s), s = void 0), Promise.resolve(v())) : new Promise((A, M) => {
      l = n.rejectOnCancel ? M : A, h = v, k && !s && (s = setTimeout(() => {
        i && c(i), s = void 0, A(h());
      }, k)), i = setTimeout(() => {
        s && c(s), s = void 0, A(v());
      }, R);
    });
  };
}
// @__NO_SIDE_EFFECTS__
function lf(e, n = 200, i = {}) {
  return Pc(
    Ec(n, i),
    e
  );
}
function cf(e, n, i) {
  let s;
  We(i) ? s = {
    evaluating: i
  } : s = {};
  const {
    lazy: l = !1,
    flush: c = "pre",
    evaluating: h = void 0,
    shallow: p = !0,
    onError: v = ho
  } = s, R = ro(!l), k = p ? ro(n) : Ao(n);
  let A = 0;
  return La(async (M) => {
    if (!R.value)
      return;
    A++;
    const G = A;
    let ie = !1;
    h && Promise.resolve().then(() => {
      h.value = !0;
    });
    try {
      const re = await e((Me) => {
        M(() => {
          h && (h.value = !1), ie || Me();
        });
      });
      G === A && (k.value = re);
    } catch (re) {
      v(re);
    } finally {
      h && G === A && (h.value = !1), ie = !0;
    }
  }, { flush: c }), l ? Bo(() => (R.value = !0, k.value)) : k;
}
const Sc = xc ? window.document : void 0;
function kc(e) {
  var n;
  const i = sn(e);
  return (n = i?.$el) != null ? n : i;
}
const Cc = {
  multiple: !0,
  accept: "*",
  reset: !1,
  directory: !1
};
function Tc(e) {
  if (!e)
    return null;
  if (e instanceof FileList)
    return e;
  const n = new DataTransfer();
  for (const i of e)
    n.items.add(i);
  return n.files;
}
function ff(e = {}) {
  const {
    document: n = Sc
  } = e, i = Ao(Tc(e.initialFiles)), { on: s, trigger: l } = /* @__PURE__ */ Ms(), { on: c, trigger: h } = /* @__PURE__ */ Ms(), p = Bo(() => {
    var A;
    const M = (A = kc(e.input)) != null ? A : n ? n.createElement("input") : void 0;
    return M && (M.type = "file", M.onchange = (G) => {
      const ie = G.target;
      i.value = ie.files, l(i.value);
    }, M.oncancel = () => {
      h();
    }), M;
  }), v = () => {
    i.value = null, p.value && p.value.value && (p.value.value = "", l(null));
  }, R = (A) => {
    const M = p.value;
    M && (M.multiple = sn(A.multiple), M.accept = sn(A.accept), M.webkitdirectory = sn(A.directory), Oc(A, "capture") && (M.capture = sn(A.capture)));
  }, k = (A) => {
    const M = p.value;
    if (!M)
      return;
    const G = {
      ...Cc,
      ...e,
      ...A
    };
    R(G), sn(G.reset) && v(), M.click();
  };
  return La(() => {
    R(e);
  }), {
    files: ko(i),
    open: k,
    reset: v,
    onCancel: c,
    onChange: s
  };
}
var Ac = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Rc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function hf(e) {
  return {
    addRecord: n,
    updateRecord: i,
    deleteRecord: s,
    createRecord: l,
    findRecordById: k,
    findRecordsByTagName: A,
    findChildRecords: Ee,
    findChildRecordsByTagName: Se,
    findChildRecordsWithinDepthAndGivenTagName: Te,
    instantiate: M,
    ensureRelationship: h,
    ensurePrivateElement: p,
    findRootSCL: R,
    recordExists: c,
    findOneRecordByAttribute: re,
    findAllRecordsByAttribute: Me,
    close: Ae,
    db: e
  };
  async function n(F) {
    const Y = {
      ...F,
      id: crypto.randomUUID()
    };
    try {
      const ue = await e.table(Y.tagName).add(Y), me = await e.table(Y.tagName).get(ue);
      if (!me) {
        const Ie = { msg: "could not find added record", table: Y.tagName, addedId: ue };
        throw console.error(Ie), new Error(JSON.stringify(Ie));
      }
      return me;
    } catch (ue) {
      const me = {
        msg: "could not add record",
        db: e.name,
        table: Y.tagName,
        recordToAdd: Y,
        err: ue
      };
      throw console.error(me), new Error(JSON.stringify(me));
    }
  }
  async function i(F) {
    try {
      if (await e.table(F.tagName).update(F.id, F) < 1) {
        const ue = { msg: "nothing has been updated", record: F };
        throw console.error(ue), new Error(JSON.stringify(ue));
      }
    } catch (Y) {
      console.error(Y);
    }
  }
  async function s(F) {
    try {
      if (F.children)
        for (const ue of F.children) {
          const me = await k(ue.id, ue.tagName);
          if (!me) {
            console.warn({
              msg: "deleteRecord: child relationship found but not child record, continuing",
              child: ue
            });
            continue;
          }
          await s(me);
        }
      const Y = await ve(F);
      Y && await v(Y, F), await e.table(F.tagName).delete(F.id);
    } catch (Y) {
      console.error(Y);
    }
  }
  async function l(F, Y) {
    try {
      const ue = await e.table(F.tagName).add(F), me = await e.table(F.tagName).get(ue);
      if (!me) {
        console.error("could not find inserted record by id", ue);
        return;
      }
      if (!Y)
        return;
      await h(Y, me);
      return;
    } catch (ue) {
      console.error("could not create record:", ue);
      return;
    }
  }
  async function c(F) {
    return await e.table(F.tagName).where({ id: F.id }).count() > 0;
  }
  async function h(F, Y) {
    const ue = F.children?.some(
      (Ie) => Ie.id === Y.id && Ie.tagName === Y.tagName
    ), me = Y.parent?.id === F.id && Y.parent?.tagName === F.tagName;
    ue || (F.children || (F.children = []), F.children.push({
      id: Y.id,
      tagName: Y.tagName
    }), await e.table(F.tagName).update(F.id, F)), me || (Y.parent = {
      id: F.id,
      tagName: F.tagName
    }, await e.table(Y.tagName).update(Y.id, Y));
  }
  async function p(F) {
    let ue = (await Me("Private", {
      name: "type",
      value: "eIEC61850-6-100"
    })).find((me) => me.parent?.id === F.id);
    if (!ue) {
      const me = {
        id: crypto.randomUUID(),
        tagName: "Private",
        attributes: [{ name: "type", value: "eIEC61850-6-100" }],
        parent: null,
        namespace: null,
        value: null,
        children: []
      };
      ue = await n(me), await h(F, ue);
    }
    return ue;
  }
  async function v(F, Y) {
    Y.parent = null, await i(Y), F.children && (F.children = F.children.filter((ue) => ue.id !== Y.id), await i(F));
  }
  async function R() {
    const F = await e.table("SCL").count();
    if (F === 0) throw new Error("tfindRootSCLhere is no SCL element");
    if (F > 1) throw new Error("there are multiple SCL elements; there can be only one");
    const Y = await e.table("SCL").orderBy("id").first();
    if (!Y) throw new Error("no root scl found");
    return Y;
  }
  async function k(F, Y) {
    return await e.table(Y).get(F);
  }
  async function A(F) {
    return await e.table(F).toArray();
  }
  function M(F) {
    const Y = G(F);
    if (!Y)
      throw console.error('record does not have a "uuid" to move to "templateUUID"', F), new Error('record does not have a "uuid" to move to "templateUUID"');
    F.attributes?.push({ name: "templateUuid", value: Y }), ie(F);
  }
  function G(F) {
    const Y = F.attributes?.find((ue) => ue.name === "uuid");
    if (Y)
      return Y.value;
  }
  function ie(F) {
    F.attributes || (F.attributes = []);
    const Y = crypto.randomUUID(), ue = F.attributes.findIndex((Ie) => Ie.name === "uuid");
    ue >= 0 ? F.attributes[ue].value = Y : F.attributes.push({ name: "uuid", value: Y });
  }
  async function re(F, Y) {
    return Ic(e, F, Y);
  }
  async function Me(F, Y) {
    return Dc(e, F, Y);
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
    return Se(F, []);
  }
  async function Se(F, Y) {
    if (!F.children || F.children.length === 0)
      return [];
    let ue = F.children;
    return Y.length > 0 && (ue = F.children.filter((Ie) => Y.includes(Ie.tagName))), (await Promise.all(
      ue.map(async (Ie) => {
        const tt = Ie.tagName, Ye = Ie.id, Et = await e.table(tt).get({ id: Ye });
        return Et || console.warn("could not find element", { id: Ye, table: tt }), Et;
      })
    )).filter(Boolean);
  }
  async function Te(F, Y = ae, ue = []) {
    const me = [];
    let Ie = [F];
    for (let tt = 0; tt < Y; tt++) {
      const Ye = [];
      for (const Et of Ie) {
        const St = await Se(Et, ue);
        St.length !== 0 && (Ye.push(...St), me.push(...St));
      }
      Ie = [...Ye];
    }
    return me;
  }
  function Ae() {
    e.close();
  }
}
function df(e, n) {
  return e.attributes?.find((i) => i.name === n);
}
function pf(e, n, i) {
  e.attributes || (e.attributes = []);
  const s = e.attributes?.findIndex((c) => c.name === n);
  s >= 0 ? e.attributes[s].value = i : e.attributes.push({ name: n, value: i });
}
async function Ic(e, n, i) {
  try {
    return await e.table(n).filter(
      (l) => !!l.attributes?.some((c) => c.name === i.name && c.value === i.value)
    ).first();
  } catch (s) {
    console.error({ msg: "could not find record by attribute", tagName: n, attr: i, err: s });
  }
}
async function Dc(e, n, i) {
  try {
    return await e.table(n).filter(
      (l) => !!l.attributes?.some((c) => c.name === i.name && c.value === i.value)
    ).toArray();
  } catch (s) {
    console.error({ msg: "could not find record by attribute", tagName: n, attr: i, err: s });
  }
  return [];
}
var Yr = { exports: {} }, jc = Yr.exports, Bs;
function Kc() {
  return Bs || (Bs = 1, function(e, n) {
    (function(i, s) {
      e.exports = s();
    })(jc, function() {
      var i = function(t, r) {
        return (i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, a) {
          o.__proto__ = a;
        } || function(o, a) {
          for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (o[u] = a[u]);
        })(t, r);
      }, s = function() {
        return (s = Object.assign || function(t) {
          for (var r, o = 1, a = arguments.length; o < a; o++) for (var u in r = arguments[o]) Object.prototype.hasOwnProperty.call(r, u) && (t[u] = r[u]);
          return t;
        }).apply(this, arguments);
      };
      function l(t, r, o) {
        for (var a, u = 0, f = r.length; u < f; u++) !a && u in r || ((a = a || Array.prototype.slice.call(r, 0, u))[u] = r[u]);
        return t.concat(a || Array.prototype.slice.call(r));
      }
      var c = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ac, h = Object.keys, p = Array.isArray;
      function v(t, r) {
        return typeof r != "object" || h(r).forEach(function(o) {
          t[o] = r[o];
        }), t;
      }
      typeof Promise > "u" || c.Promise || (c.Promise = Promise);
      var R = Object.getPrototypeOf, k = {}.hasOwnProperty;
      function A(t, r) {
        return k.call(t, r);
      }
      function M(t, r) {
        typeof r == "function" && (r = r(R(t))), (typeof Reflect > "u" ? h : Reflect.ownKeys)(r).forEach(function(o) {
          ie(t, o, r[o]);
        });
      }
      var G = Object.defineProperty;
      function ie(t, r, o, a) {
        G(t, r, v(o && A(o, "get") && typeof o.get == "function" ? { get: o.get, set: o.set, configurable: !0 } : { value: o, configurable: !0, writable: !0 }, a));
      }
      function re(t) {
        return { from: function(r) {
          return t.prototype = Object.create(r.prototype), ie(t.prototype, "constructor", t), { extend: M.bind(null, t.prototype) };
        } };
      }
      var Me = Object.getOwnPropertyDescriptor, ve = [].slice;
      function Ee(t, r, o) {
        return ve.call(t, r, o);
      }
      function Se(t, r) {
        return r(t);
      }
      function ae(t) {
        if (!t) throw new Error("Assertion Failed");
      }
      function Te(t) {
        c.setImmediate ? setImmediate(t) : setTimeout(t, 0);
      }
      function Ae(t, r) {
        if (typeof r == "string" && A(t, r)) return t[r];
        if (!r) return t;
        if (typeof r != "string") {
          for (var o = [], a = 0, u = r.length; a < u; ++a) {
            var f = Ae(t, r[a]);
            o.push(f);
          }
          return o;
        }
        var d = r.indexOf(".");
        if (d !== -1) {
          var g = t[r.substr(0, d)];
          return g == null ? void 0 : Ae(g, r.substr(d + 1));
        }
      }
      function F(t, r, o) {
        if (t && r !== void 0 && !("isFrozen" in Object && Object.isFrozen(t))) if (typeof r != "string" && "length" in r) {
          ae(typeof o != "string" && "length" in o);
          for (var a = 0, u = r.length; a < u; ++a) F(t, r[a], o[a]);
        } else {
          var f, d, g = r.indexOf(".");
          g !== -1 ? (f = r.substr(0, g), (d = r.substr(g + 1)) === "" ? o === void 0 ? p(t) && !isNaN(parseInt(f)) ? t.splice(f, 1) : delete t[f] : t[f] = o : F(g = !(g = t[f]) || !A(t, f) ? t[f] = {} : g, d, o)) : o === void 0 ? p(t) && !isNaN(parseInt(r)) ? t.splice(r, 1) : delete t[r] : t[r] = o;
        }
      }
      function Y(t) {
        var r, o = {};
        for (r in t) A(t, r) && (o[r] = t[r]);
        return o;
      }
      var ue = [].concat;
      function me(t) {
        return ue.apply([], t);
      }
      var ye = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(me([8, 16, 32, 64].map(function(t) {
        return ["Int", "Uint", "Float"].map(function(r) {
          return r + t + "Array";
        });
      }))).filter(function(t) {
        return c[t];
      }), Ie = new Set(ye.map(function(t) {
        return c[t];
      })), tt = null;
      function Ye(t) {
        return tt = /* @__PURE__ */ new WeakMap(), t = function r(o) {
          if (!o || typeof o != "object") return o;
          var a = tt.get(o);
          if (a) return a;
          if (p(o)) {
            a = [], tt.set(o, a);
            for (var u = 0, f = o.length; u < f; ++u) a.push(r(o[u]));
          } else if (Ie.has(o.constructor)) a = o;
          else {
            var d, g = R(o);
            for (d in a = g === Object.prototype ? {} : Object.create(g), tt.set(o, a), o) A(o, d) && (a[d] = r(o[d]));
          }
          return a;
        }(t), tt = null, t;
      }
      var Et = {}.toString;
      function St(t) {
        return Et.call(t).slice(8, -1);
      }
      var $e = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Ke = typeof $e == "symbol" ? function(t) {
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
        var r, o, a, u;
        if (arguments.length === 1) {
          if (p(t)) return t.slice();
          if (this === pt && typeof t == "string") return [t];
          if (u = Ke(t)) {
            for (o = []; !(a = u.next()).done; ) o.push(a.value);
            return o;
          }
          if (t == null) return [t];
          if (typeof (r = t.length) != "number") return [t];
          for (o = new Array(r); r--; ) o[r] = t[r];
          return o;
        }
        for (r = arguments.length, o = new Array(r); r--; ) o[r] = arguments[r];
        return o;
      }
      var Ot = typeof Symbol < "u" ? function(t) {
        return t[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, ce = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], _t = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(ce), vt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Ft(t, r) {
        this.name = t, this.message = r;
      }
      function yr(t, r) {
        return t + ". Errors: " + Object.keys(r).map(function(o) {
          return r[o].toString();
        }).filter(function(o, a, u) {
          return u.indexOf(o) === a;
        }).join(`
`);
      }
      function _n(t, r, o, a) {
        this.failures = r, this.failedKeys = a, this.successCount = o, this.message = yr(t, r);
      }
      function bt(t, r) {
        this.name = "BulkError", this.failures = Object.keys(r).map(function(o) {
          return r[o];
        }), this.failuresByPos = r, this.message = yr(t, this.failures);
      }
      re(Ft).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), re(_n).from(Ft), re(bt).from(Ft);
      var zt = _t.reduce(function(t, r) {
        return t[r] = r + "Error", t;
      }, {}), Nn = Ft, oe = _t.reduce(function(t, r) {
        var o = r + "Error";
        function a(u, f) {
          this.name = o, u ? typeof u == "string" ? (this.message = "".concat(u).concat(f ? `
 ` + f : ""), this.inner = f || null) : typeof u == "object" && (this.message = "".concat(u.name, " ").concat(u.message), this.inner = u) : (this.message = vt[r] || o, this.inner = null);
        }
        return re(a).from(Nn), t[r] = a, t;
      }, {});
      oe.Syntax = SyntaxError, oe.Type = TypeError, oe.Range = RangeError;
      var Gt = ce.reduce(function(t, r) {
        return t[r + "Error"] = oe[r], t;
      }, {}), qn = _t.reduce(function(t, r) {
        return ["Syntax", "Type", "Range"].indexOf(r) === -1 && (t[r + "Error"] = oe[r]), t;
      }, {});
      function y() {
      }
      function w(t) {
        return t;
      }
      function K(t, r) {
        return t == null || t === w ? r : function(o) {
          return r(t(o));
        };
      }
      function q(t, r) {
        return function() {
          t.apply(this, arguments), r.apply(this, arguments);
        };
      }
      function N(t, r) {
        return t === y ? r : function() {
          var o = t.apply(this, arguments);
          o !== void 0 && (arguments[0] = o);
          var a = this.onsuccess, u = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var f = r.apply(this, arguments);
          return a && (this.onsuccess = this.onsuccess ? q(a, this.onsuccess) : a), u && (this.onerror = this.onerror ? q(u, this.onerror) : u), f !== void 0 ? f : o;
        };
      }
      function U(t, r) {
        return t === y ? r : function() {
          t.apply(this, arguments);
          var o = this.onsuccess, a = this.onerror;
          this.onsuccess = this.onerror = null, r.apply(this, arguments), o && (this.onsuccess = this.onsuccess ? q(o, this.onsuccess) : o), a && (this.onerror = this.onerror ? q(a, this.onerror) : a);
        };
      }
      function X(t, r) {
        return t === y ? r : function(o) {
          var a = t.apply(this, arguments);
          v(o, a);
          var u = this.onsuccess, f = this.onerror;
          return this.onsuccess = null, this.onerror = null, o = r.apply(this, arguments), u && (this.onsuccess = this.onsuccess ? q(u, this.onsuccess) : u), f && (this.onerror = this.onerror ? q(f, this.onerror) : f), a === void 0 ? o === void 0 ? void 0 : o : v(a, o);
        };
      }
      function z(t, r) {
        return t === y ? r : function() {
          return r.apply(this, arguments) !== !1 && t.apply(this, arguments);
        };
      }
      function H(t, r) {
        return t === y ? r : function() {
          var o = t.apply(this, arguments);
          if (o && typeof o.then == "function") {
            for (var a = this, u = arguments.length, f = new Array(u); u--; ) f[u] = arguments[u];
            return o.then(function() {
              return r.apply(a, f);
            });
          }
          return r.apply(this, arguments);
        };
      }
      qn.ModifyError = _n, qn.DexieError = Ft, qn.BulkError = bt;
      var B = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function le(t) {
        B = t;
      }
      var J = {}, se = 100, ye = typeof Promise > "u" ? [] : function() {
        var t = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [t, R(t), t];
        var r = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [r, R(r), t];
      }(), ce = ye[0], _t = ye[1], ye = ye[2], _t = _t && _t.then, we = ce && ce.constructor, Oe = !!ye, Ve = function(t, r) {
        Jt.push([t, r]), at && (queueMicrotask(eu), at = !1);
      }, ze = !0, at = !0, Ge = [], kt = [], wn = w, Ne = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: y, pgp: !1, env: {}, finalize: y }, ne = Ne, Jt = [], un = 0, gr = [];
      function ee(t) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var r = this._PSD = ne;
        if (typeof t != "function") {
          if (t !== J) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && di(this, this._value));
        }
        this._state = null, this._value = null, ++r.ref, function o(a, u) {
          try {
            u(function(f) {
              if (a._state === null) {
                if (f === a) throw new TypeError("A promise cannot be resolved with itself.");
                var d = a._lib && xn();
                f && typeof f.then == "function" ? o(a, function(g, b) {
                  f instanceof ee ? f._then(g, b) : f.then(g, b);
                }) : (a._state = !0, a._value = f, qo(a)), d && On();
              }
            }, di.bind(null, a));
          } catch (f) {
            di(a, f);
          }
        }(this, t);
      }
      var hi = { get: function() {
        var t = ne, r = _r;
        function o(a, u) {
          var f = this, d = !t.global && (t !== ne || r !== _r), g = d && !Xt(), b = new ee(function(x, P) {
            pi(f, new No(Lo(a, t, d, g), Lo(u, t, d, g), x, P, t));
          });
          return this._consoleTask && (b._consoleTask = this._consoleTask), b;
        }
        return o.prototype = J, o;
      }, set: function(t) {
        ie(this, "then", t && t.prototype === J ? hi : { get: function() {
          return t;
        }, set: hi.set });
      } };
      function No(t, r, o, a, u) {
        this.onFulfilled = typeof t == "function" ? t : null, this.onRejected = typeof r == "function" ? r : null, this.resolve = o, this.reject = a, this.psd = u;
      }
      function di(t, r) {
        var o, a;
        kt.push(r), t._state === null && (o = t._lib && xn(), r = wn(r), t._state = !1, t._value = r, a = t, Ge.some(function(u) {
          return u._value === a._value;
        }) || Ge.push(a), qo(t), o && On());
      }
      function qo(t) {
        var r = t._listeners;
        t._listeners = [];
        for (var o = 0, a = r.length; o < a; ++o) pi(t, r[o]);
        var u = t._PSD;
        --u.ref || u.finalize(), un === 0 && (++un, Ve(function() {
          --un == 0 && yi();
        }, []));
      }
      function pi(t, r) {
        if (t._state !== null) {
          var o = t._state ? r.onFulfilled : r.onRejected;
          if (o === null) return (t._state ? r.resolve : r.reject)(t._value);
          ++r.psd.ref, ++un, Ve(Za, [o, t, r]);
        } else t._listeners.push(r);
      }
      function Za(t, r, o) {
        try {
          var a, u = r._value;
          !r._state && kt.length && (kt = []), a = B && r._consoleTask ? r._consoleTask.run(function() {
            return t(u);
          }) : t(u), r._state || kt.indexOf(u) !== -1 || function(f) {
            for (var d = Ge.length; d; ) if (Ge[--d]._value === f._value) return Ge.splice(d, 1);
          }(r), o.resolve(a);
        } catch (f) {
          o.reject(f);
        } finally {
          --un == 0 && yi(), --o.psd.ref || o.psd.finalize();
        }
      }
      function eu() {
        ln(Ne, function() {
          xn() && On();
        });
      }
      function xn() {
        var t = ze;
        return at = ze = !1, t;
      }
      function On() {
        var t, r, o;
        do
          for (; 0 < Jt.length; ) for (t = Jt, Jt = [], o = t.length, r = 0; r < o; ++r) {
            var a = t[r];
            a[0].apply(null, a[1]);
          }
        while (0 < Jt.length);
        at = ze = !0;
      }
      function yi() {
        var t = Ge;
        Ge = [], t.forEach(function(a) {
          a._PSD.onunhandled.call(null, a._value, a);
        });
        for (var r = gr.slice(0), o = r.length; o; ) r[--o]();
      }
      function mr(t) {
        return new ee(J, !1, t);
      }
      function Be(t, r) {
        var o = ne;
        return function() {
          var a = xn(), u = ne;
          try {
            return Zt(o, !0), t.apply(this, arguments);
          } catch (f) {
            r && r(f);
          } finally {
            Zt(u, !1), a && On();
          }
        };
      }
      M(ee.prototype, { then: hi, _then: function(t, r) {
        pi(this, new No(null, null, t, r, ne));
      }, catch: function(t) {
        if (arguments.length === 1) return this.then(null, t);
        var r = t, o = arguments[1];
        return typeof r == "function" ? this.then(null, function(a) {
          return (a instanceof r ? o : mr)(a);
        }) : this.then(null, function(a) {
          return (a && a.name === r ? o : mr)(a);
        });
      }, finally: function(t) {
        return this.then(function(r) {
          return ee.resolve(t()).then(function() {
            return r;
          });
        }, function(r) {
          return ee.resolve(t()).then(function() {
            return mr(r);
          });
        });
      }, timeout: function(t, r) {
        var o = this;
        return t < 1 / 0 ? new ee(function(a, u) {
          var f = setTimeout(function() {
            return u(new oe.Timeout(r));
          }, t);
          o.then(a, u).finally(clearTimeout.bind(null, f));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && ie(ee.prototype, Symbol.toStringTag, "Dexie.Promise"), Ne.env = Uo(), M(ee, { all: function() {
        var t = yt.apply(null, arguments).map(wr);
        return new ee(function(r, o) {
          t.length === 0 && r([]);
          var a = t.length;
          t.forEach(function(u, f) {
            return ee.resolve(u).then(function(d) {
              t[f] = d, --a || r(t);
            }, o);
          });
        });
      }, resolve: function(t) {
        return t instanceof ee ? t : t && typeof t.then == "function" ? new ee(function(r, o) {
          t.then(r, o);
        }) : new ee(J, !0, t);
      }, reject: mr, race: function() {
        var t = yt.apply(null, arguments).map(wr);
        return new ee(function(r, o) {
          t.map(function(a) {
            return ee.resolve(a).then(r, o);
          });
        });
      }, PSD: { get: function() {
        return ne;
      }, set: function(t) {
        return ne = t;
      } }, totalEchoes: { get: function() {
        return _r;
      } }, newPSD: Qt, usePSD: ln, scheduler: { get: function() {
        return Ve;
      }, set: function(t) {
        Ve = t;
      } }, rejectionMapper: { get: function() {
        return wn;
      }, set: function(t) {
        wn = t;
      } }, follow: function(t, r) {
        return new ee(function(o, a) {
          return Qt(function(u, f) {
            var d = ne;
            d.unhandleds = [], d.onunhandled = f, d.finalize = q(function() {
              var g, b = this;
              g = function() {
                b.unhandleds.length === 0 ? u() : f(b.unhandleds[0]);
              }, gr.push(function x() {
                g(), gr.splice(gr.indexOf(x), 1);
              }), ++un, Ve(function() {
                --un == 0 && yi();
              }, []);
            }, d.finalize), t();
          }, r, o, a);
        });
      } }), we && (we.allSettled && ie(ee, "allSettled", function() {
        var t = yt.apply(null, arguments).map(wr);
        return new ee(function(r) {
          t.length === 0 && r([]);
          var o = t.length, a = new Array(o);
          t.forEach(function(u, f) {
            return ee.resolve(u).then(function(d) {
              return a[f] = { status: "fulfilled", value: d };
            }, function(d) {
              return a[f] = { status: "rejected", reason: d };
            }).then(function() {
              return --o || r(a);
            });
          });
        });
      }), we.any && typeof AggregateError < "u" && ie(ee, "any", function() {
        var t = yt.apply(null, arguments).map(wr);
        return new ee(function(r, o) {
          t.length === 0 && o(new AggregateError([]));
          var a = t.length, u = new Array(a);
          t.forEach(function(f, d) {
            return ee.resolve(f).then(function(g) {
              return r(g);
            }, function(g) {
              u[d] = g, --a || o(new AggregateError(u));
            });
          });
        });
      }), we.withResolvers && (ee.withResolvers = we.withResolvers));
      var Je = { awaits: 0, echoes: 0, id: 0 }, tu = 0, vr = [], br = 0, _r = 0, nu = 0;
      function Qt(t, r, o, a) {
        var u = ne, f = Object.create(u);
        return f.parent = u, f.ref = 0, f.global = !1, f.id = ++nu, Ne.env, f.env = Oe ? { Promise: ee, PromiseProp: { value: ee, configurable: !0, writable: !0 }, all: ee.all, race: ee.race, allSettled: ee.allSettled, any: ee.any, resolve: ee.resolve, reject: ee.reject } : {}, r && v(f, r), ++u.ref, f.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, a = ln(f, t, o, a), f.ref === 0 && f.finalize(), a;
      }
      function Pn() {
        return Je.id || (Je.id = ++tu), ++Je.awaits, Je.echoes += se, Je.id;
      }
      function Xt() {
        return !!Je.awaits && (--Je.awaits == 0 && (Je.id = 0), Je.echoes = Je.awaits * se, !0);
      }
      function wr(t) {
        return Je.echoes && t && t.constructor === we ? (Pn(), t.then(function(r) {
          return Xt(), r;
        }, function(r) {
          return Xt(), Ue(r);
        })) : t;
      }
      function ru() {
        var t = vr[vr.length - 1];
        vr.pop(), Zt(t, !1);
      }
      function Zt(t, r) {
        var o, a = ne;
        (r ? !Je.echoes || br++ && t === ne : !br || --br && t === ne) || queueMicrotask(r ? (function(u) {
          ++_r, Je.echoes && --Je.echoes != 0 || (Je.echoes = Je.awaits = Je.id = 0), vr.push(ne), Zt(u, !0);
        }).bind(null, t) : ru), t !== ne && (ne = t, a === Ne && (Ne.env = Uo()), Oe && (o = Ne.env.Promise, r = t.env, (a.global || t.global) && (Object.defineProperty(c, "Promise", r.PromiseProp), o.all = r.all, o.race = r.race, o.resolve = r.resolve, o.reject = r.reject, r.allSettled && (o.allSettled = r.allSettled), r.any && (o.any = r.any))));
      }
      function Uo() {
        var t = c.Promise;
        return Oe ? { Promise: t, PromiseProp: Object.getOwnPropertyDescriptor(c, "Promise"), all: t.all, race: t.race, allSettled: t.allSettled, any: t.any, resolve: t.resolve, reject: t.reject } : {};
      }
      function ln(t, r, o, a, u) {
        var f = ne;
        try {
          return Zt(t, !0), r(o, a, u);
        } finally {
          Zt(f, !1);
        }
      }
      function Lo(t, r, o, a) {
        return typeof t != "function" ? t : function() {
          var u = ne;
          o && Pn(), Zt(r, !0);
          try {
            return t.apply(this, arguments);
          } finally {
            Zt(u, !1), a && queueMicrotask(Xt);
          }
        };
      }
      function gi(t) {
        Promise === we && Je.echoes === 0 ? br === 0 ? t() : enqueueNativeMicroTask(t) : setTimeout(t, 0);
      }
      ("" + _t).indexOf("[native code]") === -1 && (Pn = Xt = y);
      var Ue = ee.reject, cn = "￿", Mt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Vo = "String expected.", En = [], xr = "__dbnames", mi = "readonly", vi = "readwrite";
      function fn(t, r) {
        return t ? r ? function() {
          return t.apply(this, arguments) && r.apply(this, arguments);
        } : t : r;
      }
      var $o = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Or(t) {
        return typeof t != "string" || /\./.test(t) ? function(r) {
          return r;
        } : function(r) {
          return r[t] === void 0 && t in r && delete (r = Ye(r))[t], r;
        };
      }
      function Ho() {
        throw oe.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function be(t, r) {
        try {
          var o = Wo(t), a = Wo(r);
          if (o !== a) return o === "Array" ? 1 : a === "Array" ? -1 : o === "binary" ? 1 : a === "binary" ? -1 : o === "string" ? 1 : a === "string" ? -1 : o === "Date" ? 1 : a !== "Date" ? NaN : -1;
          switch (o) {
            case "number":
            case "Date":
            case "string":
              return r < t ? 1 : t < r ? -1 : 0;
            case "binary":
              return function(u, f) {
                for (var d = u.length, g = f.length, b = d < g ? d : g, x = 0; x < b; ++x) if (u[x] !== f[x]) return u[x] < f[x] ? -1 : 1;
                return d === g ? 0 : d < g ? -1 : 1;
              }(Yo(t), Yo(r));
            case "Array":
              return function(u, f) {
                for (var d = u.length, g = f.length, b = d < g ? d : g, x = 0; x < b; ++x) {
                  var P = be(u[x], f[x]);
                  if (P !== 0) return P;
                }
                return d === g ? 0 : d < g ? -1 : 1;
              }(t, r);
          }
        } catch {
        }
        return NaN;
      }
      function Wo(t) {
        var r = typeof t;
        return r != "object" ? r : ArrayBuffer.isView(t) ? "binary" : (t = St(t), t === "ArrayBuffer" ? "binary" : t);
      }
      function Yo(t) {
        return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t);
      }
      function Pr(t, r, o) {
        var a = t.schema.yProps;
        return a ? (r && 0 < o.numFailures && (r = r.filter(function(u, f) {
          return !o.failures[f];
        })), Promise.all(a.map(function(u) {
          return u = u.updatesTable, r ? t.db.table(u).where("k").anyOf(r).delete() : t.db.table(u).clear();
        })).then(function() {
          return o;
        })) : o;
      }
      var zo = (Fe.prototype._trans = function(t, r, o) {
        var a = this._tx || ne.trans, u = this.name, f = B && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(t === "readonly" ? "read" : "write", " ").concat(this.name));
        function d(x, P, m) {
          if (!m.schema[u]) throw new oe.NotFound("Table " + u + " not part of transaction");
          return r(m.idbtrans, m);
        }
        var g = xn();
        try {
          var b = a && a.db._novip === this.db._novip ? a === ne.trans ? a._promise(t, d, o) : Qt(function() {
            return a._promise(t, d, o);
          }, { trans: a, transless: ne.transless || ne }) : function x(P, m, C, _) {
            if (P.idbdb && (P._state.openComplete || ne.letThrough || P._vip)) {
              var O = P._createTransaction(m, C, P._dbSchema);
              try {
                O.create(), P._state.PR1398_maxLoop = 3;
              } catch (S) {
                return S.name === zt.InvalidState && P.isOpen() && 0 < --P._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), P.close({ disableAutoOpen: !1 }), P.open().then(function() {
                  return x(P, m, C, _);
                })) : Ue(S);
              }
              return O._promise(m, function(S, E) {
                return Qt(function() {
                  return ne.trans = O, _(S, E, O);
                });
              }).then(function(S) {
                if (m === "readwrite") try {
                  O.idbtrans.commit();
                } catch {
                }
                return m === "readonly" ? S : O._completion.then(function() {
                  return S;
                });
              });
            }
            if (P._state.openComplete) return Ue(new oe.DatabaseClosed(P._state.dbOpenError));
            if (!P._state.isBeingOpened) {
              if (!P._state.autoOpen) return Ue(new oe.DatabaseClosed());
              P.open().catch(y);
            }
            return P._state.dbReadyPromise.then(function() {
              return x(P, m, C, _);
            });
          }(this.db, t, [this.name], d);
          return f && (b._consoleTask = f, b = b.catch(function(x) {
            return console.trace(x), Ue(x);
          })), b;
        } finally {
          g && On();
        }
      }, Fe.prototype.get = function(t, r) {
        var o = this;
        return t && t.constructor === Object ? this.where(t).first(r) : t == null ? Ue(new oe.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(a) {
          return o.core.get({ trans: a, key: t }).then(function(u) {
            return o.hook.reading.fire(u);
          });
        }).then(r);
      }, Fe.prototype.where = function(t) {
        if (typeof t == "string") return new this.db.WhereClause(this, t);
        if (p(t)) return new this.db.WhereClause(this, "[".concat(t.join("+"), "]"));
        var r = h(t);
        if (r.length === 1) return this.where(r[0]).equals(t[r[0]]);
        var o = this.schema.indexes.concat(this.schema.primKey).filter(function(g) {
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
        if (o && this.db._maxKey !== cn) {
          var f = o.keyPath.slice(0, r.length);
          return this.where(f).equals(f.map(function(b) {
            return t[b];
          }));
        }
        !o && B && console.warn("The query ".concat(JSON.stringify(t), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(r.join("+"), "]"));
        var a = this.schema.idxByName;
        function u(g, b) {
          return be(g, b) === 0;
        }
        var d = r.reduce(function(m, b) {
          var x = m[0], P = m[1], m = a[b], C = t[b];
          return [x || m, x || !m ? fn(P, m && m.multi ? function(_) {
            return _ = Ae(_, b), p(_) && _.some(function(O) {
              return u(C, O);
            });
          } : function(_) {
            return u(C, Ae(_, b));
          }) : P];
        }, [null, null]), f = d[0], d = d[1];
        return f ? this.where(f.name).equals(t[f.keyPath]).filter(d) : o ? this.filter(d) : this.where(r).equals("");
      }, Fe.prototype.filter = function(t) {
        return this.toCollection().and(t);
      }, Fe.prototype.count = function(t) {
        return this.toCollection().count(t);
      }, Fe.prototype.offset = function(t) {
        return this.toCollection().offset(t);
      }, Fe.prototype.limit = function(t) {
        return this.toCollection().limit(t);
      }, Fe.prototype.each = function(t) {
        return this.toCollection().each(t);
      }, Fe.prototype.toArray = function(t) {
        return this.toCollection().toArray(t);
      }, Fe.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Fe.prototype.orderBy = function(t) {
        return new this.db.Collection(new this.db.WhereClause(this, p(t) ? "[".concat(t.join("+"), "]") : t));
      }, Fe.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Fe.prototype.mapToClass = function(t) {
        var r, o = this.db, a = this.name;
        function u() {
          return r !== null && r.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = t).prototype instanceof Ho && (function(b, x) {
          if (typeof x != "function" && x !== null) throw new TypeError("Class extends value " + String(x) + " is not a constructor or null");
          function P() {
            this.constructor = b;
          }
          i(b, x), b.prototype = x === null ? Object.create(x) : (P.prototype = x.prototype, new P());
        }(u, r = t), Object.defineProperty(u.prototype, "db", { get: function() {
          return o;
        }, enumerable: !1, configurable: !0 }), u.prototype.table = function() {
          return a;
        }, t = u);
        for (var f = /* @__PURE__ */ new Set(), d = t.prototype; d; d = R(d)) Object.getOwnPropertyNames(d).forEach(function(b) {
          return f.add(b);
        });
        function g(b) {
          if (!b) return b;
          var x, P = Object.create(t.prototype);
          for (x in b) if (!f.has(x)) try {
            P[x] = b[x];
          } catch {
          }
          return P;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = g, this.hook("reading", g), t;
      }, Fe.prototype.defineClass = function() {
        return this.mapToClass(function(t) {
          v(this, t);
        });
      }, Fe.prototype.add = function(t, r) {
        var o = this, a = this.schema.primKey, u = a.auto, f = a.keyPath, d = t;
        return f && u && (d = Or(f)(t)), this._trans("readwrite", function(g) {
          return o.core.mutate({ trans: g, type: "add", keys: r != null ? [r] : null, values: [d] });
        }).then(function(g) {
          return g.numFailures ? ee.reject(g.failures[0]) : g.lastResult;
        }).then(function(g) {
          if (f) try {
            F(t, f, g);
          } catch {
          }
          return g;
        });
      }, Fe.prototype.update = function(t, r) {
        return typeof t != "object" || p(t) ? this.where(":id").equals(t).modify(r) : (t = Ae(t, this.schema.primKey.keyPath), t === void 0 ? Ue(new oe.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(t).modify(r));
      }, Fe.prototype.put = function(t, r) {
        var o = this, a = this.schema.primKey, u = a.auto, f = a.keyPath, d = t;
        return f && u && (d = Or(f)(t)), this._trans("readwrite", function(g) {
          return o.core.mutate({ trans: g, type: "put", values: [d], keys: r != null ? [r] : null });
        }).then(function(g) {
          return g.numFailures ? ee.reject(g.failures[0]) : g.lastResult;
        }).then(function(g) {
          if (f) try {
            F(t, f, g);
          } catch {
          }
          return g;
        });
      }, Fe.prototype.delete = function(t) {
        var r = this;
        return this._trans("readwrite", function(o) {
          return r.core.mutate({ trans: o, type: "delete", keys: [t] }).then(function(a) {
            return Pr(r, [t], a);
          }).then(function(a) {
            return a.numFailures ? ee.reject(a.failures[0]) : void 0;
          });
        });
      }, Fe.prototype.clear = function() {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "deleteRange", range: $o }).then(function(o) {
            return Pr(t, null, o);
          });
        }).then(function(r) {
          return r.numFailures ? ee.reject(r.failures[0]) : void 0;
        });
      }, Fe.prototype.bulkGet = function(t) {
        var r = this;
        return this._trans("readonly", function(o) {
          return r.core.getMany({ keys: t, trans: o }).then(function(a) {
            return a.map(function(u) {
              return r.hook.reading.fire(u);
            });
          });
        });
      }, Fe.prototype.bulkAdd = function(t, r, o) {
        var a = this, u = Array.isArray(r) ? r : void 0, f = (o = o || (u ? void 0 : r)) ? o.allKeys : void 0;
        return this._trans("readwrite", function(d) {
          var x = a.schema.primKey, g = x.auto, x = x.keyPath;
          if (x && u) throw new oe.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (u && u.length !== t.length) throw new oe.InvalidArgument("Arguments objects and keys must have the same length");
          var b = t.length, x = x && g ? t.map(Or(x)) : t;
          return a.core.mutate({ trans: d, type: "add", keys: u, values: x, wantResults: f }).then(function(O) {
            var m = O.numFailures, C = O.results, _ = O.lastResult, O = O.failures;
            if (m === 0) return f ? C : _;
            throw new bt("".concat(a.name, ".bulkAdd(): ").concat(m, " of ").concat(b, " operations failed"), O);
          });
        });
      }, Fe.prototype.bulkPut = function(t, r, o) {
        var a = this, u = Array.isArray(r) ? r : void 0, f = (o = o || (u ? void 0 : r)) ? o.allKeys : void 0;
        return this._trans("readwrite", function(d) {
          var x = a.schema.primKey, g = x.auto, x = x.keyPath;
          if (x && u) throw new oe.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (u && u.length !== t.length) throw new oe.InvalidArgument("Arguments objects and keys must have the same length");
          var b = t.length, x = x && g ? t.map(Or(x)) : t;
          return a.core.mutate({ trans: d, type: "put", keys: u, values: x, wantResults: f }).then(function(O) {
            var m = O.numFailures, C = O.results, _ = O.lastResult, O = O.failures;
            if (m === 0) return f ? C : _;
            throw new bt("".concat(a.name, ".bulkPut(): ").concat(m, " of ").concat(b, " operations failed"), O);
          });
        });
      }, Fe.prototype.bulkUpdate = function(t) {
        var r = this, o = this.core, a = t.map(function(d) {
          return d.key;
        }), u = t.map(function(d) {
          return d.changes;
        }), f = [];
        return this._trans("readwrite", function(d) {
          return o.getMany({ trans: d, keys: a, cache: "clone" }).then(function(g) {
            var b = [], x = [];
            t.forEach(function(m, C) {
              var _ = m.key, O = m.changes, S = g[C];
              if (S) {
                for (var E = 0, T = Object.keys(O); E < T.length; E++) {
                  var I = T[E], D = O[I];
                  if (I === r.schema.primKey.keyPath) {
                    if (be(D, _) !== 0) throw new oe.Constraint("Cannot update primary key in bulkUpdate()");
                  } else F(S, I, D);
                }
                f.push(C), b.push(_), x.push(S);
              }
            });
            var P = b.length;
            return o.mutate({ trans: d, type: "put", keys: b, values: x, updates: { keys: a, changeSpecs: u } }).then(function(m) {
              var C = m.numFailures, _ = m.failures;
              if (C === 0) return P;
              for (var O = 0, S = Object.keys(_); O < S.length; O++) {
                var E, T = S[O], I = f[Number(T)];
                I != null && (E = _[T], delete _[T], _[I] = E);
              }
              throw new bt("".concat(r.name, ".bulkUpdate(): ").concat(C, " of ").concat(P, " operations failed"), _);
            });
          });
        });
      }, Fe.prototype.bulkDelete = function(t) {
        var r = this, o = t.length;
        return this._trans("readwrite", function(a) {
          return r.core.mutate({ trans: a, type: "delete", keys: t }).then(function(u) {
            return Pr(r, t, u);
          });
        }).then(function(d) {
          var u = d.numFailures, f = d.lastResult, d = d.failures;
          if (u === 0) return f;
          throw new bt("".concat(r.name, ".bulkDelete(): ").concat(u, " of ").concat(o, " operations failed"), d);
        });
      }, Fe);
      function Fe() {
      }
      function Un(t) {
        function r(d, g) {
          if (g) {
            for (var b = arguments.length, x = new Array(b - 1); --b; ) x[b - 1] = arguments[b];
            return o[d].subscribe.apply(null, x), t;
          }
          if (typeof d == "string") return o[d];
        }
        var o = {};
        r.addEventType = f;
        for (var a = 1, u = arguments.length; a < u; ++a) f(arguments[a]);
        return r;
        function f(d, g, b) {
          if (typeof d != "object") {
            var x;
            g = g || z;
            var P = { subscribers: [], fire: b = b || y, subscribe: function(m) {
              P.subscribers.indexOf(m) === -1 && (P.subscribers.push(m), P.fire = g(P.fire, m));
            }, unsubscribe: function(m) {
              P.subscribers = P.subscribers.filter(function(C) {
                return C !== m;
              }), P.fire = P.subscribers.reduce(g, b);
            } };
            return o[d] = r[d] = P;
          }
          h(x = d).forEach(function(m) {
            var C = x[m];
            if (p(C)) f(m, x[m][0], x[m][1]);
            else {
              if (C !== "asap") throw new oe.InvalidArgument("Invalid event config");
              var _ = f(m, w, function() {
                for (var O = arguments.length, S = new Array(O); O--; ) S[O] = arguments[O];
                _.subscribers.forEach(function(E) {
                  Te(function() {
                    E.apply(null, S);
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
      function bi(t, r) {
        t.filter = fn(t.filter, r);
      }
      function _i(t, r, o) {
        var a = t.replayFilter;
        t.replayFilter = a ? function() {
          return fn(a(), r());
        } : r, t.justLimit = o && !a;
      }
      function Er(t, r) {
        if (t.isPrimKey) return r.primaryKey;
        var o = r.getIndexByKeyPath(t.index);
        if (!o) throw new oe.Schema("KeyPath " + t.index + " on object store " + r.name + " is not indexed");
        return o;
      }
      function Go(t, r, o) {
        var a = Er(t, r.schema);
        return r.openCursor({ trans: o, values: !t.keysOnly, reverse: t.dir === "prev", unique: !!t.unique, query: { index: a, range: t.range } });
      }
      function Sr(t, r, o, a) {
        var u = t.replayFilter ? fn(t.filter, t.replayFilter()) : t.filter;
        if (t.or) {
          var f = {}, d = function(g, b, x) {
            var P, m;
            u && !u(b, x, function(C) {
              return b.stop(C);
            }, function(C) {
              return b.fail(C);
            }) || ((m = "" + (P = b.primaryKey)) == "[object ArrayBuffer]" && (m = "" + new Uint8Array(P)), A(f, m) || (f[m] = !0, r(g, b, x)));
          };
          return Promise.all([t.or._iterate(d, o), Jo(Go(t, a, o), t.algorithm, d, !t.keysOnly && t.valueMapper)]);
        }
        return Jo(Go(t, a, o), fn(t.algorithm, u), r, !t.keysOnly && t.valueMapper);
      }
      function Jo(t, r, o, a) {
        var u = Be(a ? function(f, d, g) {
          return o(a(f), d, g);
        } : o);
        return t.then(function(f) {
          if (f) return f.start(function() {
            var d = function() {
              return f.continue();
            };
            r && !r(f, function(g) {
              return d = g;
            }, function(g) {
              f.stop(g), d = y;
            }, function(g) {
              f.fail(g), d = y;
            }) || u(f.value, f, function(g) {
              return d = g;
            }), d();
          });
        });
      }
      var Vn = (Qo.prototype.execute = function(t) {
        var r = this["@@propmod"];
        if (r.add !== void 0) {
          var o = r.add;
          if (p(o)) return l(l([], p(t) ? t : [], !0), o).sort();
          if (typeof o == "number") return (Number(t) || 0) + o;
          if (typeof o == "bigint") try {
            return BigInt(t) + o;
          } catch {
            return BigInt(0) + o;
          }
          throw new TypeError("Invalid term ".concat(o));
        }
        if (r.remove !== void 0) {
          var a = r.remove;
          if (p(a)) return p(t) ? t.filter(function(u) {
            return !a.includes(u);
          }).sort() : [];
          if (typeof a == "number") return Number(t) - a;
          if (typeof a == "bigint") try {
            return BigInt(t) - a;
          } catch {
            return BigInt(0) - a;
          }
          throw new TypeError("Invalid subtrahend ".concat(a));
        }
        return o = (o = r.replacePrefix) === null || o === void 0 ? void 0 : o[0], o && typeof t == "string" && t.startsWith(o) ? r.replacePrefix[1] + t.substring(o.length) : t;
      }, Qo);
      function Qo(t) {
        this["@@propmod"] = t;
      }
      var iu = (Pe.prototype._read = function(t, r) {
        var o = this._ctx;
        return o.error ? o.table._trans(null, Ue.bind(null, o.error)) : o.table._trans("readonly", t).then(r);
      }, Pe.prototype._write = function(t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, Ue.bind(null, r.error)) : r.table._trans("readwrite", t, "locked");
      }, Pe.prototype._addAlgorithm = function(t) {
        var r = this._ctx;
        r.algorithm = fn(r.algorithm, t);
      }, Pe.prototype._iterate = function(t, r) {
        return Sr(this._ctx, t, r, this._ctx.table.core);
      }, Pe.prototype.clone = function(t) {
        var r = Object.create(this.constructor.prototype), o = Object.create(this._ctx);
        return t && v(o, t), r._ctx = o, r;
      }, Pe.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Pe.prototype.each = function(t) {
        var r = this._ctx;
        return this._read(function(o) {
          return Sr(r, t, o, r.table.core);
        });
      }, Pe.prototype.count = function(t) {
        var r = this;
        return this._read(function(o) {
          var a = r._ctx, u = a.table.core;
          if (Sn(a, !0)) return u.count({ trans: o, query: { index: Er(a, u.schema), range: a.range } }).then(function(d) {
            return Math.min(d, a.limit);
          });
          var f = 0;
          return Sr(a, function() {
            return ++f, !1;
          }, o, u).then(function() {
            return f;
          });
        }).then(t);
      }, Pe.prototype.sortBy = function(t, r) {
        var o = t.split(".").reverse(), a = o[0], u = o.length - 1;
        function f(b, x) {
          return x ? f(b[o[x]], x - 1) : b[a];
        }
        var d = this._ctx.dir === "next" ? 1 : -1;
        function g(b, x) {
          return be(f(b, u), f(x, u)) * d;
        }
        return this.toArray(function(b) {
          return b.sort(g);
        }).then(r);
      }, Pe.prototype.toArray = function(t) {
        var r = this;
        return this._read(function(o) {
          var a = r._ctx;
          if (a.dir === "next" && Sn(a, !0) && 0 < a.limit) {
            var u = a.valueMapper, f = Er(a, a.table.core.schema);
            return a.table.core.query({ trans: o, limit: a.limit, values: !0, query: { index: f, range: a.range } }).then(function(g) {
              return g = g.result, u ? g.map(u) : g;
            });
          }
          var d = [];
          return Sr(a, function(g) {
            return d.push(g);
          }, o, a.table.core).then(function() {
            return d;
          });
        }, t);
      }, Pe.prototype.offset = function(t) {
        var r = this._ctx;
        return t <= 0 || (r.offset += t, Sn(r) ? _i(r, function() {
          var o = t;
          return function(a, u) {
            return o === 0 || (o === 1 ? --o : u(function() {
              a.advance(o), o = 0;
            }), !1);
          };
        }) : _i(r, function() {
          var o = t;
          return function() {
            return --o < 0;
          };
        })), this;
      }, Pe.prototype.limit = function(t) {
        return this._ctx.limit = Math.min(this._ctx.limit, t), _i(this._ctx, function() {
          var r = t;
          return function(o, a, u) {
            return --r <= 0 && a(u), 0 <= r;
          };
        }, !0), this;
      }, Pe.prototype.until = function(t, r) {
        return bi(this._ctx, function(o, a, u) {
          return !t(o.value) || (a(u), r);
        }), this;
      }, Pe.prototype.first = function(t) {
        return this.limit(1).toArray(function(r) {
          return r[0];
        }).then(t);
      }, Pe.prototype.last = function(t) {
        return this.reverse().first(t);
      }, Pe.prototype.filter = function(t) {
        var r;
        return bi(this._ctx, function(o) {
          return t(o.value);
        }), (r = this._ctx).isMatch = fn(r.isMatch, t), this;
      }, Pe.prototype.and = function(t) {
        return this.filter(t);
      }, Pe.prototype.or = function(t) {
        return new this.db.WhereClause(this._ctx.table, t, this);
      }, Pe.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Pe.prototype.desc = function() {
        return this.reverse();
      }, Pe.prototype.eachKey = function(t) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(o, a) {
          t(a.key, a);
        });
      }, Pe.prototype.eachUniqueKey = function(t) {
        return this._ctx.unique = "unique", this.eachKey(t);
      }, Pe.prototype.eachPrimaryKey = function(t) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(o, a) {
          t(a.primaryKey, a);
        });
      }, Pe.prototype.keys = function(t) {
        var r = this._ctx;
        r.keysOnly = !r.isMatch;
        var o = [];
        return this.each(function(a, u) {
          o.push(u.key);
        }).then(function() {
          return o;
        }).then(t);
      }, Pe.prototype.primaryKeys = function(t) {
        var r = this._ctx;
        if (r.dir === "next" && Sn(r, !0) && 0 < r.limit) return this._read(function(a) {
          var u = Er(r, r.table.core.schema);
          return r.table.core.query({ trans: a, values: !1, limit: r.limit, query: { index: u, range: r.range } });
        }).then(function(a) {
          return a.result;
        }).then(t);
        r.keysOnly = !r.isMatch;
        var o = [];
        return this.each(function(a, u) {
          o.push(u.primaryKey);
        }).then(function() {
          return o;
        }).then(t);
      }, Pe.prototype.uniqueKeys = function(t) {
        return this._ctx.unique = "unique", this.keys(t);
      }, Pe.prototype.firstKey = function(t) {
        return this.limit(1).keys(function(r) {
          return r[0];
        }).then(t);
      }, Pe.prototype.lastKey = function(t) {
        return this.reverse().firstKey(t);
      }, Pe.prototype.distinct = function() {
        var t = this._ctx, t = t.index && t.table.schema.idxByName[t.index];
        if (!t || !t.multi) return this;
        var r = {};
        return bi(this._ctx, function(u) {
          var a = u.primaryKey.toString(), u = A(r, a);
          return r[a] = !0, !u;
        }), this;
      }, Pe.prototype.modify = function(t) {
        var r = this, o = this._ctx;
        return this._write(function(a) {
          var u, f, d;
          d = typeof t == "function" ? t : (u = h(t), f = u.length, function(T) {
            for (var I = !1, D = 0; D < f; ++D) {
              var j = u[D], L = t[j], W = Ae(T, j);
              L instanceof Vn ? (F(T, j, L.execute(W)), I = !0) : W !== L && (F(T, j, L), I = !0);
            }
            return I;
          });
          var g = o.table.core, m = g.schema.primaryKey, b = m.outbound, x = m.extractKey, P = 200, m = r.db._options.modifyChunkSize;
          m && (P = typeof m == "object" ? m[g.name] || m["*"] || 200 : m);
          function C(T, j) {
            var D = j.failures, j = j.numFailures;
            O += T - j;
            for (var L = 0, W = h(D); L < W.length; L++) {
              var V = W[L];
              _.push(D[V]);
            }
          }
          var _ = [], O = 0, S = [], E = t === Xo;
          return r.clone().primaryKeys().then(function(T) {
            function I(j) {
              var L = Math.min(P, T.length - j), W = T.slice(j, j + L);
              return (E ? Promise.resolve([]) : g.getMany({ trans: a, keys: W, cache: "immutable" })).then(function(V) {
                var $ = [], Z = [], Q = b ? [] : null, te = E ? W : [];
                if (!E) for (var ge = 0; ge < L; ++ge) {
                  var xe = V[ge], de = { value: Ye(xe), primKey: T[j + ge] };
                  d.call(de, de.value, de) !== !1 && (de.value == null ? te.push(T[j + ge]) : b || be(x(xe), x(de.value)) === 0 ? (Z.push(de.value), b && Q.push(T[j + ge])) : (te.push(T[j + ge]), $.push(de.value)));
                }
                return Promise.resolve(0 < $.length && g.mutate({ trans: a, type: "add", values: $ }).then(function(qe) {
                  for (var he in qe.failures) te.splice(parseInt(he), 1);
                  C($.length, qe);
                })).then(function() {
                  return (0 < Z.length || D && typeof t == "object") && g.mutate({ trans: a, type: "put", keys: Q, values: Z, criteria: D, changeSpec: typeof t != "function" && t, isAdditionalChunk: 0 < j }).then(function(qe) {
                    return C(Z.length, qe);
                  });
                }).then(function() {
                  return (0 < te.length || D && E) && g.mutate({ trans: a, type: "delete", keys: te, criteria: D, isAdditionalChunk: 0 < j }).then(function(qe) {
                    return Pr(o.table, te, qe);
                  }).then(function(qe) {
                    return C(te.length, qe);
                  });
                }).then(function() {
                  return T.length > j + L && I(j + P);
                });
              });
            }
            var D = Sn(o) && o.limit === 1 / 0 && (typeof t != "function" || E) && { index: o.index, range: o.range };
            return I(0).then(function() {
              if (0 < _.length) throw new _n("Error modifying one or more objects", _, O, S);
              return T.length;
            });
          });
        });
      }, Pe.prototype.delete = function() {
        var t = this._ctx, r = t.range;
        return !Sn(t) || t.table.schema.yProps || !t.isPrimKey && r.type !== 3 ? this.modify(Xo) : this._write(function(o) {
          var a = t.table.core.schema.primaryKey, u = r;
          return t.table.core.count({ trans: o, query: { index: a, range: u } }).then(function(f) {
            return t.table.core.mutate({ trans: o, type: "deleteRange", range: u }).then(function(b) {
              var g = b.failures, b = b.numFailures;
              if (b) throw new _n("Could not delete some values", Object.keys(g).map(function(x) {
                return g[x];
              }), f - b);
              return f - b;
            });
          });
        });
      }, Pe);
      function Pe() {
      }
      var Xo = function(t, r) {
        return r.value = null;
      };
      function ou(t, r) {
        return t < r ? -1 : t === r ? 0 : 1;
      }
      function su(t, r) {
        return r < t ? -1 : t === r ? 0 : 1;
      }
      function mt(t, r, o) {
        return t = t instanceof es ? new t.Collection(t) : t, t._ctx.error = new (o || TypeError)(r), t;
      }
      function kn(t) {
        return new t.Collection(t, function() {
          return Zo("");
        }).limit(0);
      }
      function kr(t, r, o, a) {
        var u, f, d, g, b, x, P, m = o.length;
        if (!o.every(function(O) {
          return typeof O == "string";
        })) return mt(t, Vo);
        function C(O) {
          u = O === "next" ? function(E) {
            return E.toUpperCase();
          } : function(E) {
            return E.toLowerCase();
          }, f = O === "next" ? function(E) {
            return E.toLowerCase();
          } : function(E) {
            return E.toUpperCase();
          }, d = O === "next" ? ou : su;
          var S = o.map(function(E) {
            return { lower: f(E), upper: u(E) };
          }).sort(function(E, T) {
            return d(E.lower, T.lower);
          });
          g = S.map(function(E) {
            return E.upper;
          }), b = S.map(function(E) {
            return E.lower;
          }), P = (x = O) === "next" ? "" : a;
        }
        C("next"), t = new t.Collection(t, function() {
          return en(g[0], b[m - 1] + a);
        }), t._ondirectionchange = function(O) {
          C(O);
        };
        var _ = 0;
        return t._addAlgorithm(function(O, S, E) {
          var T = O.key;
          if (typeof T != "string") return !1;
          var I = f(T);
          if (r(I, b, _)) return !0;
          for (var D = null, j = _; j < m; ++j) {
            var L = function(W, V, $, Z, Q, te) {
              for (var ge = Math.min(W.length, Z.length), xe = -1, de = 0; de < ge; ++de) {
                var qe = V[de];
                if (qe !== Z[de]) return Q(W[de], $[de]) < 0 ? W.substr(0, de) + $[de] + $.substr(de + 1) : Q(W[de], Z[de]) < 0 ? W.substr(0, de) + Z[de] + $.substr(de + 1) : 0 <= xe ? W.substr(0, xe) + V[xe] + $.substr(xe + 1) : null;
                Q(W[de], qe) < 0 && (xe = de);
              }
              return ge < Z.length && te === "next" ? W + $.substr(W.length) : ge < W.length && te === "prev" ? W.substr(0, $.length) : xe < 0 ? null : W.substr(0, xe) + Z[xe] + $.substr(xe + 1);
            }(T, I, g[j], b[j], d, x);
            L === null && D === null ? _ = j + 1 : (D === null || 0 < d(D, L)) && (D = L);
          }
          return S(D !== null ? function() {
            O.continue(D + P);
          } : E), !1;
        }), t;
      }
      function en(t, r, o, a) {
        return { type: 2, lower: t, upper: r, lowerOpen: o, upperOpen: a };
      }
      function Zo(t) {
        return { type: 1, lower: t, upper: t };
      }
      var es = (Object.defineProperty(Qe.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Qe.prototype.between = function(t, r, o, a) {
        o = o !== !1, a = a === !0;
        try {
          return 0 < this._cmp(t, r) || this._cmp(t, r) === 0 && (o || a) && (!o || !a) ? kn(this) : new this.Collection(this, function() {
            return en(t, r, !o, !a);
          });
        } catch {
          return mt(this, Mt);
        }
      }, Qe.prototype.equals = function(t) {
        return t == null ? mt(this, Mt) : new this.Collection(this, function() {
          return Zo(t);
        });
      }, Qe.prototype.above = function(t) {
        return t == null ? mt(this, Mt) : new this.Collection(this, function() {
          return en(t, void 0, !0);
        });
      }, Qe.prototype.aboveOrEqual = function(t) {
        return t == null ? mt(this, Mt) : new this.Collection(this, function() {
          return en(t, void 0, !1);
        });
      }, Qe.prototype.below = function(t) {
        return t == null ? mt(this, Mt) : new this.Collection(this, function() {
          return en(void 0, t, !1, !0);
        });
      }, Qe.prototype.belowOrEqual = function(t) {
        return t == null ? mt(this, Mt) : new this.Collection(this, function() {
          return en(void 0, t);
        });
      }, Qe.prototype.startsWith = function(t) {
        return typeof t != "string" ? mt(this, Vo) : this.between(t, t + cn, !0, !0);
      }, Qe.prototype.startsWithIgnoreCase = function(t) {
        return t === "" ? this.startsWith(t) : kr(this, function(r, o) {
          return r.indexOf(o[0]) === 0;
        }, [t], cn);
      }, Qe.prototype.equalsIgnoreCase = function(t) {
        return kr(this, function(r, o) {
          return r === o[0];
        }, [t], "");
      }, Qe.prototype.anyOfIgnoreCase = function() {
        var t = yt.apply(pt, arguments);
        return t.length === 0 ? kn(this) : kr(this, function(r, o) {
          return o.indexOf(r) !== -1;
        }, t, "");
      }, Qe.prototype.startsWithAnyOfIgnoreCase = function() {
        var t = yt.apply(pt, arguments);
        return t.length === 0 ? kn(this) : kr(this, function(r, o) {
          return o.some(function(a) {
            return r.indexOf(a) === 0;
          });
        }, t, cn);
      }, Qe.prototype.anyOf = function() {
        var t = this, r = yt.apply(pt, arguments), o = this._cmp;
        try {
          r.sort(o);
        } catch {
          return mt(this, Mt);
        }
        if (r.length === 0) return kn(this);
        var a = new this.Collection(this, function() {
          return en(r[0], r[r.length - 1]);
        });
        a._ondirectionchange = function(f) {
          o = f === "next" ? t._ascending : t._descending, r.sort(o);
        };
        var u = 0;
        return a._addAlgorithm(function(f, d, g) {
          for (var b = f.key; 0 < o(b, r[u]); ) if (++u === r.length) return d(g), !1;
          return o(b, r[u]) === 0 || (d(function() {
            f.continue(r[u]);
          }), !1);
        }), a;
      }, Qe.prototype.notEqual = function(t) {
        return this.inAnyRange([[-1 / 0, t], [t, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Qe.prototype.noneOf = function() {
        var t = yt.apply(pt, arguments);
        if (t.length === 0) return new this.Collection(this);
        try {
          t.sort(this._ascending);
        } catch {
          return mt(this, Mt);
        }
        var r = t.reduce(function(o, a) {
          return o ? o.concat([[o[o.length - 1][1], a]]) : [[-1 / 0, a]];
        }, null);
        return r.push([t[t.length - 1], this.db._maxKey]), this.inAnyRange(r, { includeLowers: !1, includeUppers: !1 });
      }, Qe.prototype.inAnyRange = function(T, r) {
        var o = this, a = this._cmp, u = this._ascending, f = this._descending, d = this._min, g = this._max;
        if (T.length === 0) return kn(this);
        if (!T.every(function(I) {
          return I[0] !== void 0 && I[1] !== void 0 && u(I[0], I[1]) <= 0;
        })) return mt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", oe.InvalidArgument);
        var b = !r || r.includeLowers !== !1, x = r && r.includeUppers === !0, P, m = u;
        function C(I, D) {
          return m(I[0], D[0]);
        }
        try {
          (P = T.reduce(function(I, D) {
            for (var j = 0, L = I.length; j < L; ++j) {
              var W = I[j];
              if (a(D[0], W[1]) < 0 && 0 < a(D[1], W[0])) {
                W[0] = d(W[0], D[0]), W[1] = g(W[1], D[1]);
                break;
              }
            }
            return j === L && I.push(D), I;
          }, [])).sort(C);
        } catch {
          return mt(this, Mt);
        }
        var _ = 0, O = x ? function(I) {
          return 0 < u(I, P[_][1]);
        } : function(I) {
          return 0 <= u(I, P[_][1]);
        }, S = b ? function(I) {
          return 0 < f(I, P[_][0]);
        } : function(I) {
          return 0 <= f(I, P[_][0]);
        }, E = O, T = new this.Collection(this, function() {
          return en(P[0][0], P[P.length - 1][1], !b, !x);
        });
        return T._ondirectionchange = function(I) {
          m = I === "next" ? (E = O, u) : (E = S, f), P.sort(C);
        }, T._addAlgorithm(function(I, D, j) {
          for (var L, W = I.key; E(W); ) if (++_ === P.length) return D(j), !1;
          return !O(L = W) && !S(L) || (o._cmp(W, P[_][1]) === 0 || o._cmp(W, P[_][0]) === 0 || D(function() {
            m === u ? I.continue(P[_][0]) : I.continue(P[_][1]);
          }), !1);
        }), T;
      }, Qe.prototype.startsWithAnyOf = function() {
        var t = yt.apply(pt, arguments);
        return t.every(function(r) {
          return typeof r == "string";
        }) ? t.length === 0 ? kn(this) : this.inAnyRange(t.map(function(r) {
          return [r, r + cn];
        })) : mt(this, "startsWithAnyOf() only works with strings");
      }, Qe);
      function Qe() {
      }
      function Ct(t) {
        return Be(function(r) {
          return $n(r), t(r.target.error), !1;
        });
      }
      function $n(t) {
        t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault();
      }
      var Hn = "storagemutated", wi = "x-storagemutated-1", tn = Un(null, Hn), au = (Tt.prototype._lock = function() {
        return ae(!ne.global), ++this._reculock, this._reculock !== 1 || ne.global || (ne.lockOwnerFor = this), this;
      }, Tt.prototype._unlock = function() {
        if (ae(!ne.global), --this._reculock == 0) for (ne.global || (ne.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var t = this._blockedFuncs.shift();
          try {
            ln(t[1], t[0]);
          } catch {
          }
        }
        return this;
      }, Tt.prototype._locked = function() {
        return this._reculock && ne.lockOwnerFor !== this;
      }, Tt.prototype.create = function(t) {
        var r = this;
        if (!this.mode) return this;
        var o = this.db.idbdb, a = this.db._state.dbOpenError;
        if (ae(!this.idbtrans), !t && !o) switch (a && a.name) {
          case "DatabaseClosedError":
            throw new oe.DatabaseClosed(a);
          case "MissingAPIError":
            throw new oe.MissingAPI(a.message, a);
          default:
            throw new oe.OpenFailed(a);
        }
        if (!this.active) throw new oe.TransactionInactive();
        return ae(this._completion._state === null), (t = this.idbtrans = t || (this.db.core || o).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Be(function(u) {
          $n(u), r._reject(t.error);
        }), t.onabort = Be(function(u) {
          $n(u), r.active && r._reject(new oe.Abort(t.error)), r.active = !1, r.on("abort").fire(u);
        }), t.oncomplete = Be(function() {
          r.active = !1, r._resolve(), "mutatedParts" in t && tn.storagemutated.fire(t.mutatedParts);
        }), this;
      }, Tt.prototype._promise = function(t, r, o) {
        var a = this;
        if (t === "readwrite" && this.mode !== "readwrite") return Ue(new oe.ReadOnly("Transaction is readonly"));
        if (!this.active) return Ue(new oe.TransactionInactive());
        if (this._locked()) return new ee(function(f, d) {
          a._blockedFuncs.push([function() {
            a._promise(t, r, o).then(f, d);
          }, ne]);
        });
        if (o) return Qt(function() {
          var f = new ee(function(d, g) {
            a._lock();
            var b = r(d, g, a);
            b && b.then && b.then(d, g);
          });
          return f.finally(function() {
            return a._unlock();
          }), f._lib = !0, f;
        });
        var u = new ee(function(f, d) {
          var g = r(f, d, a);
          g && g.then && g.then(f, d);
        });
        return u._lib = !0, u;
      }, Tt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Tt.prototype.waitFor = function(t) {
        var r, o = this._root(), a = ee.resolve(t);
        o._waitingFor ? o._waitingFor = o._waitingFor.then(function() {
          return a;
        }) : (o._waitingFor = a, o._waitingQueue = [], r = o.idbtrans.objectStore(o.storeNames[0]), function f() {
          for (++o._spinCount; o._waitingQueue.length; ) o._waitingQueue.shift()();
          o._waitingFor && (r.get(-1 / 0).onsuccess = f);
        }());
        var u = o._waitingFor;
        return new ee(function(f, d) {
          a.then(function(g) {
            return o._waitingQueue.push(Be(f.bind(null, g)));
          }, function(g) {
            return o._waitingQueue.push(Be(d.bind(null, g)));
          }).finally(function() {
            o._waitingFor === u && (o._waitingFor = null);
          });
        });
      }, Tt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new oe.Abort()));
      }, Tt.prototype.table = function(t) {
        var r = this._memoizedTables || (this._memoizedTables = {});
        if (A(r, t)) return r[t];
        var o = this.schema[t];
        if (!o) throw new oe.NotFound("Table " + t + " not part of transaction");
        return o = new this.db.Table(t, o, this), o.core = this.db.core.table(t), r[t] = o;
      }, Tt);
      function Tt() {
      }
      function xi(t, r, o, a, u, f, d, g) {
        return { name: t, keyPath: r, unique: o, multi: a, auto: u, compound: f, src: (o && !d ? "&" : "") + (a ? "*" : "") + (u ? "++" : "") + ts(r), type: g };
      }
      function ts(t) {
        return typeof t == "string" ? t : t ? "[" + [].join.call(t, "+") + "]" : "";
      }
      function Oi(t, r, o) {
        return { name: t, primKey: r, indexes: o, mappedClass: null, idxByName: (a = function(u) {
          return [u.name, u];
        }, o.reduce(function(u, f, d) {
          return d = a(f, d), d && (u[d[0]] = d[1]), u;
        }, {})) };
        var a;
      }
      var Wn = function(t) {
        try {
          return t.only([[]]), Wn = function() {
            return [[]];
          }, [[]];
        } catch {
          return Wn = function() {
            return cn;
          }, cn;
        }
      };
      function Pi(t) {
        return t == null ? function() {
        } : typeof t == "string" ? (r = t).split(".").length === 1 ? function(o) {
          return o[r];
        } : function(o) {
          return Ae(o, r);
        } : function(o) {
          return Ae(o, t);
        };
        var r;
      }
      function ns(t) {
        return [].slice.call(t);
      }
      var uu = 0;
      function Yn(t) {
        return t == null ? ":id" : typeof t == "string" ? t : "[".concat(t.join("+"), "]");
      }
      function lu(t, r, b) {
        function a(E) {
          if (E.type === 3) return null;
          if (E.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var _ = E.lower, O = E.upper, S = E.lowerOpen, E = E.upperOpen;
          return _ === void 0 ? O === void 0 ? null : r.upperBound(O, !!E) : O === void 0 ? r.lowerBound(_, !!S) : r.bound(_, O, !!S, !!E);
        }
        function u(C) {
          var _, O = C.name;
          return { name: O, schema: C, mutate: function(S) {
            var E = S.trans, T = S.type, I = S.keys, D = S.values, j = S.range;
            return new Promise(function(L, W) {
              L = Be(L);
              var V = E.objectStore(O), $ = V.keyPath == null, Z = T === "put" || T === "add";
              if (!Z && T !== "delete" && T !== "deleteRange") throw new Error("Invalid operation type: " + T);
              var Q, te = (I || D || { length: 1 }).length;
              if (I && D && I.length !== D.length) throw new Error("Given keys array must have same length as given values array.");
              if (te === 0) return L({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function ge(ut) {
                ++qe, $n(ut);
              }
              var xe = [], de = [], qe = 0;
              if (T === "deleteRange") {
                if (j.type === 4) return L({ numFailures: qe, failures: de, results: [], lastResult: void 0 });
                j.type === 3 ? xe.push(Q = V.clear()) : xe.push(Q = V.delete(a(j)));
              } else {
                var $ = Z ? $ ? [D, I] : [D, null] : [I, null], he = $[0], rt = $[1];
                if (Z) for (var it = 0; it < te; ++it) xe.push(Q = rt && rt[it] !== void 0 ? V[T](he[it], rt[it]) : V[T](he[it])), Q.onerror = ge;
                else for (it = 0; it < te; ++it) xe.push(Q = V[T](he[it])), Q.onerror = ge;
              }
              function Nr(ut) {
                ut = ut.target.result, xe.forEach(function(pn, Li) {
                  return pn.error != null && (de[Li] = pn.error);
                }), L({ numFailures: qe, failures: de, results: T === "delete" ? I : xe.map(function(pn) {
                  return pn.result;
                }), lastResult: ut });
              }
              Q.onerror = function(ut) {
                ge(ut), Nr(ut);
              }, Q.onsuccess = Nr;
            });
          }, getMany: function(S) {
            var E = S.trans, T = S.keys;
            return new Promise(function(I, D) {
              I = Be(I);
              for (var j, L = E.objectStore(O), W = T.length, V = new Array(W), $ = 0, Z = 0, Q = function(xe) {
                xe = xe.target, V[xe._pos] = xe.result, ++Z === $ && I(V);
              }, te = Ct(D), ge = 0; ge < W; ++ge) T[ge] != null && ((j = L.get(T[ge]))._pos = ge, j.onsuccess = Q, j.onerror = te, ++$);
              $ === 0 && I(V);
            });
          }, get: function(S) {
            var E = S.trans, T = S.key;
            return new Promise(function(I, D) {
              I = Be(I);
              var j = E.objectStore(O).get(T);
              j.onsuccess = function(L) {
                return I(L.target.result);
              }, j.onerror = Ct(D);
            });
          }, query: (_ = x, function(S) {
            return new Promise(function(E, T) {
              E = Be(E);
              var I, D, j, $ = S.trans, L = S.values, W = S.limit, Q = S.query, V = W === 1 / 0 ? void 0 : W, Z = Q.index, Q = Q.range, $ = $.objectStore(O), Z = Z.isPrimaryKey ? $ : $.index(Z.name), Q = a(Q);
              if (W === 0) return E({ result: [] });
              _ ? ((V = L ? Z.getAll(Q, V) : Z.getAllKeys(Q, V)).onsuccess = function(te) {
                return E({ result: te.target.result });
              }, V.onerror = Ct(T)) : (I = 0, D = !L && "openKeyCursor" in Z ? Z.openKeyCursor(Q) : Z.openCursor(Q), j = [], D.onsuccess = function(te) {
                var ge = D.result;
                return ge ? (j.push(L ? ge.value : ge.primaryKey), ++I === W ? E({ result: j }) : void ge.continue()) : E({ result: j });
              }, D.onerror = Ct(T));
            });
          }), openCursor: function(S) {
            var E = S.trans, T = S.values, I = S.query, D = S.reverse, j = S.unique;
            return new Promise(function(L, W) {
              L = Be(L);
              var Z = I.index, V = I.range, $ = E.objectStore(O), $ = Z.isPrimaryKey ? $ : $.index(Z.name), Z = D ? j ? "prevunique" : "prev" : j ? "nextunique" : "next", Q = !T && "openKeyCursor" in $ ? $.openKeyCursor(a(V), Z) : $.openCursor(a(V), Z);
              Q.onerror = Ct(W), Q.onsuccess = Be(function(te) {
                var ge, xe, de, qe, he = Q.result;
                he ? (he.___id = ++uu, he.done = !1, ge = he.continue.bind(he), xe = (xe = he.continuePrimaryKey) && xe.bind(he), de = he.advance.bind(he), qe = function() {
                  throw new Error("Cursor not stopped");
                }, he.trans = E, he.stop = he.continue = he.continuePrimaryKey = he.advance = function() {
                  throw new Error("Cursor not started");
                }, he.fail = Be(W), he.next = function() {
                  var rt = this, it = 1;
                  return this.start(function() {
                    return it-- ? rt.continue() : rt.stop();
                  }).then(function() {
                    return rt;
                  });
                }, he.start = function(rt) {
                  function it() {
                    if (Q.result) try {
                      rt();
                    } catch (ut) {
                      he.fail(ut);
                    }
                    else he.done = !0, he.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, he.stop();
                  }
                  var Nr = new Promise(function(ut, pn) {
                    ut = Be(ut), Q.onerror = Ct(pn), he.fail = pn, he.stop = function(Li) {
                      he.stop = he.continue = he.continuePrimaryKey = he.advance = qe, ut(Li);
                    };
                  });
                  return Q.onsuccess = Be(function(ut) {
                    Q.onsuccess = it, it();
                  }), he.continue = ge, he.continuePrimaryKey = xe, he.advance = de, it(), Nr;
                }, L(he)) : L(null);
              }, W);
            });
          }, count: function(S) {
            var E = S.query, T = S.trans, I = E.index, D = E.range;
            return new Promise(function(j, L) {
              var W = T.objectStore(O), V = I.isPrimaryKey ? W : W.index(I.name), W = a(D), V = W ? V.count(W) : V.count();
              V.onsuccess = Be(function($) {
                return j($.target.result);
              }), V.onerror = Ct(L);
            });
          } };
        }
        var f, d, g, P = (d = b, g = ns((f = t).objectStoreNames), { schema: { name: f.name, tables: g.map(function(C) {
          return d.objectStore(C);
        }).map(function(C) {
          var _ = C.keyPath, E = C.autoIncrement, O = p(_), S = {}, E = { name: C.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: _ == null, compound: O, keyPath: _, autoIncrement: E, unique: !0, extractKey: Pi(_) }, indexes: ns(C.indexNames).map(function(T) {
            return C.index(T);
          }).map(function(j) {
            var I = j.name, D = j.unique, L = j.multiEntry, j = j.keyPath, L = { name: I, compound: p(j), keyPath: j, unique: D, multiEntry: L, extractKey: Pi(j) };
            return S[Yn(j)] = L;
          }), getIndexByKeyPath: function(T) {
            return S[Yn(T)];
          } };
          return S[":id"] = E.primaryKey, _ != null && (S[Yn(_)] = E.primaryKey), E;
        }) }, hasGetAll: 0 < g.length && "getAll" in d.objectStore(g[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), b = P.schema, x = P.hasGetAll, P = b.tables.map(u), m = {};
        return P.forEach(function(C) {
          return m[C.name] = C;
        }), { stack: "dbcore", transaction: t.transaction.bind(t), table: function(C) {
          if (!m[C]) throw new Error("Table '".concat(C, "' not found"));
          return m[C];
        }, MIN_KEY: -1 / 0, MAX_KEY: Wn(r), schema: b };
      }
      function cu(t, r, o, a) {
        var u = o.IDBKeyRange;
        return o.indexedDB, { dbcore: (a = lu(r, u, a), t.dbcore.reduce(function(f, d) {
          return d = d.create, s(s({}, f), d(f));
        }, a)) };
      }
      function Cr(t, a) {
        var o = a.db, a = cu(t._middlewares, o, t._deps, a);
        t.core = a.dbcore, t.tables.forEach(function(u) {
          var f = u.name;
          t.core.schema.tables.some(function(d) {
            return d.name === f;
          }) && (u.core = t.core.table(f), t[f] instanceof t.Table && (t[f].core = u.core));
        });
      }
      function Tr(t, r, o, a) {
        o.forEach(function(u) {
          var f = a[u];
          r.forEach(function(d) {
            var g = function b(x, P) {
              return Me(x, P) || (x = R(x)) && b(x, P);
            }(d, u);
            (!g || "value" in g && g.value === void 0) && (d === t.Transaction.prototype || d instanceof t.Transaction ? ie(d, u, { get: function() {
              return this.table(u);
            }, set: function(b) {
              G(this, u, { value: b, writable: !0, configurable: !0, enumerable: !0 });
            } }) : d[u] = new t.Table(u, f));
          });
        });
      }
      function Ei(t, r) {
        r.forEach(function(o) {
          for (var a in o) o[a] instanceof t.Table && delete o[a];
        });
      }
      function fu(t, r) {
        return t._cfg.version - r._cfg.version;
      }
      function hu(t, r, o, a) {
        var u = t._dbSchema;
        o.objectStoreNames.contains("$meta") && !u.$meta && (u.$meta = Oi("$meta", is("")[0], []), t._storeNames.push("$meta"));
        var f = t._createTransaction("readwrite", t._storeNames, u);
        f.create(o), f._completion.catch(a);
        var d = f._reject.bind(f), g = ne.transless || ne;
        Qt(function() {
          return ne.trans = f, ne.transless = g, r !== 0 ? (Cr(t, o), x = r, ((b = f).storeNames.includes("$meta") ? b.table("$meta").get("version").then(function(P) {
            return P ?? x;
          }) : ee.resolve(x)).then(function(P) {
            return C = P, _ = f, O = o, S = [], P = (m = t)._versions, E = m._dbSchema = Rr(0, m.idbdb, O), (P = P.filter(function(T) {
              return T._cfg.version >= C;
            })).length !== 0 ? (P.forEach(function(T) {
              S.push(function() {
                var I = E, D = T._cfg.dbschema;
                Ir(m, I, O), Ir(m, D, O), E = m._dbSchema = D;
                var j = Si(I, D);
                j.add.forEach(function(Z) {
                  ki(O, Z[0], Z[1].primKey, Z[1].indexes);
                }), j.change.forEach(function(Z) {
                  if (Z.recreate) throw new oe.Upgrade("Not yet support for changing primary key");
                  var Q = O.objectStore(Z.name);
                  Z.add.forEach(function(te) {
                    return Ar(Q, te);
                  }), Z.change.forEach(function(te) {
                    Q.deleteIndex(te.name), Ar(Q, te);
                  }), Z.del.forEach(function(te) {
                    return Q.deleteIndex(te);
                  });
                });
                var L = T._cfg.contentUpgrade;
                if (L && T._cfg.version > C) {
                  Cr(m, O), _._memoizedTables = {};
                  var W = Y(D);
                  j.del.forEach(function(Z) {
                    W[Z] = I[Z];
                  }), Ei(m, [m.Transaction.prototype]), Tr(m, [m.Transaction.prototype], h(W), W), _.schema = W;
                  var V, $ = Ot(L);
                  return $ && Pn(), j = ee.follow(function() {
                    var Z;
                    (V = L(_)) && $ && (Z = Xt.bind(null, null), V.then(Z, Z));
                  }), V && typeof V.then == "function" ? ee.resolve(V) : j.then(function() {
                    return V;
                  });
                }
              }), S.push(function(I) {
                var D, j, L = T._cfg.dbschema;
                D = L, j = I, [].slice.call(j.db.objectStoreNames).forEach(function(W) {
                  return D[W] == null && j.db.deleteObjectStore(W);
                }), Ei(m, [m.Transaction.prototype]), Tr(m, [m.Transaction.prototype], m._storeNames, m._dbSchema), _.schema = m._dbSchema;
              }), S.push(function(I) {
                m.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(m.idbdb.version / 10) === T._cfg.version ? (m.idbdb.deleteObjectStore("$meta"), delete m._dbSchema.$meta, m._storeNames = m._storeNames.filter(function(D) {
                  return D !== "$meta";
                })) : I.objectStore("$meta").put(T._cfg.version, "version"));
              });
            }), function T() {
              return S.length ? ee.resolve(S.shift()(_.idbtrans)).then(T) : ee.resolve();
            }().then(function() {
              rs(E, O);
            })) : ee.resolve();
            var m, C, _, O, S, E;
          }).catch(d)) : (h(u).forEach(function(P) {
            ki(o, P, u[P].primKey, u[P].indexes);
          }), Cr(t, o), void ee.follow(function() {
            return t.on.populate.fire(f);
          }).catch(d));
          var b, x;
        });
      }
      function du(t, r) {
        rs(t._dbSchema, r), r.db.version % 10 != 0 || r.objectStoreNames.contains("$meta") || r.db.createObjectStore("$meta").add(Math.ceil(r.db.version / 10 - 1), "version");
        var o = Rr(0, t.idbdb, r);
        Ir(t, t._dbSchema, r);
        for (var a = 0, u = Si(o, t._dbSchema).change; a < u.length; a++) {
          var f = function(d) {
            if (d.change.length || d.recreate) return console.warn("Unable to patch indexes of table ".concat(d.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var g = r.objectStore(d.name);
            d.add.forEach(function(b) {
              B && console.debug("Dexie upgrade patch: Creating missing index ".concat(d.name, ".").concat(b.src)), Ar(g, b);
            });
          }(u[a]);
          if (typeof f == "object") return f.value;
        }
      }
      function Si(t, r) {
        var o, a = { del: [], add: [], change: [] };
        for (o in t) r[o] || a.del.push(o);
        for (o in r) {
          var u = t[o], f = r[o];
          if (u) {
            var d = { name: o, def: f, recreate: !1, del: [], add: [], change: [] };
            if ("" + (u.primKey.keyPath || "") != "" + (f.primKey.keyPath || "") || u.primKey.auto !== f.primKey.auto) d.recreate = !0, a.change.push(d);
            else {
              var g = u.idxByName, b = f.idxByName, x = void 0;
              for (x in g) b[x] || d.del.push(x);
              for (x in b) {
                var P = g[x], m = b[x];
                P ? P.src !== m.src && d.change.push(m) : d.add.push(m);
              }
              (0 < d.del.length || 0 < d.add.length || 0 < d.change.length) && a.change.push(d);
            }
          } else a.add.push([o, f]);
        }
        return a;
      }
      function ki(t, r, o, a) {
        var u = t.db.createObjectStore(r, o.keyPath ? { keyPath: o.keyPath, autoIncrement: o.auto } : { autoIncrement: o.auto });
        return a.forEach(function(f) {
          return Ar(u, f);
        }), u;
      }
      function rs(t, r) {
        h(t).forEach(function(o) {
          r.db.objectStoreNames.contains(o) || (B && console.debug("Dexie: Creating missing table", o), ki(r, o, t[o].primKey, t[o].indexes));
        });
      }
      function Ar(t, r) {
        t.createIndex(r.name, r.keyPath, { unique: r.unique, multiEntry: r.multi });
      }
      function Rr(t, r, o) {
        var a = {};
        return Ee(r.objectStoreNames, 0).forEach(function(u) {
          for (var f = o.objectStore(u), d = xi(ts(x = f.keyPath), x || "", !0, !1, !!f.autoIncrement, x && typeof x != "string", !0), g = [], b = 0; b < f.indexNames.length; ++b) {
            var P = f.index(f.indexNames[b]), x = P.keyPath, P = xi(P.name, x, !!P.unique, !!P.multiEntry, !1, x && typeof x != "string", !1);
            g.push(P);
          }
          a[u] = Oi(u, d, g);
        }), a;
      }
      function Ir(t, r, o) {
        for (var a = o.db.objectStoreNames, u = 0; u < a.length; ++u) {
          var f = a[u], d = o.objectStore(f);
          t._hasGetAll = "getAll" in d;
          for (var g = 0; g < d.indexNames.length; ++g) {
            var b = d.indexNames[g], x = d.index(b).keyPath, P = typeof x == "string" ? x : "[" + Ee(x).join("+") + "]";
            !r[f] || (x = r[f].idxByName[P]) && (x.name = b, delete r[f].idxByName[P], r[f].idxByName[b] = x);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && c.WorkerGlobalScope && c instanceof c.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (t._hasGetAll = !1);
      }
      function is(t) {
        return t.split(",").map(function(r, o) {
          var f = r.split(":"), a = (u = f[1]) === null || u === void 0 ? void 0 : u.trim(), u = (r = f[0].trim()).replace(/([&*]|\+\+)/g, ""), f = /^\[/.test(u) ? u.match(/^\[(.*)\]$/)[1].split("+") : u;
          return xi(u, f || null, /\&/.test(r), /\*/.test(r), /\+\+/.test(r), p(f), o === 0, a);
        });
      }
      var pu = (Cn.prototype._createTableSchema = Oi, Cn.prototype._parseIndexSyntax = is, Cn.prototype._parseStoresSpec = function(t, r) {
        var o = this;
        h(t).forEach(function(a) {
          if (t[a] !== null) {
            var u = o._parseIndexSyntax(t[a]), f = u.shift();
            if (!f) throw new oe.Schema("Invalid schema for table " + a + ": " + t[a]);
            if (f.unique = !0, f.multi) throw new oe.Schema("Primary key cannot be multiEntry*");
            u.forEach(function(d) {
              if (d.auto) throw new oe.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!d.keyPath) throw new oe.Schema("Index must have a name and cannot be an empty string");
            }), u = o._createTableSchema(a, f, u), r[a] = u;
          }
        });
      }, Cn.prototype.stores = function(o) {
        var r = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? v(this._cfg.storesSource, o) : o;
        var o = r._versions, a = {}, u = {};
        return o.forEach(function(f) {
          v(a, f._cfg.storesSource), u = f._cfg.dbschema = {}, f._parseStoresSpec(a, u);
        }), r._dbSchema = u, Ei(r, [r._allTables, r, r.Transaction.prototype]), Tr(r, [r._allTables, r, r.Transaction.prototype, this._cfg.tables], h(u), u), r._storeNames = h(u), this;
      }, Cn.prototype.upgrade = function(t) {
        return this._cfg.contentUpgrade = H(this._cfg.contentUpgrade || y, t), this;
      }, Cn);
      function Cn() {
      }
      function Ci(t, r) {
        var o = t._dbNamesDB;
        return o || (o = t._dbNamesDB = new Bt(xr, { addons: [], indexedDB: t, IDBKeyRange: r })).version(1).stores({ dbnames: "name" }), o.table("dbnames");
      }
      function Ti(t) {
        return t && typeof t.databases == "function";
      }
      function Ai(t) {
        return Qt(function() {
          return ne.letThrough = !0, t();
        });
      }
      function Ri(t) {
        return !("from" in t);
      }
      var nt = function(t, r) {
        if (!this) {
          var o = new nt();
          return t && "d" in t && v(o, t), o;
        }
        v(this, arguments.length ? { d: 1, from: t, to: 1 < arguments.length ? r : t } : { d: 0 });
      };
      function zn(t, r, o) {
        var a = be(r, o);
        if (!isNaN(a)) {
          if (0 < a) throw RangeError();
          if (Ri(t)) return v(t, { from: r, to: o, d: 1 });
          var u = t.l, a = t.r;
          if (be(o, t.from) < 0) return u ? zn(u, r, o) : t.l = { from: r, to: o, d: 1, l: null, r: null }, ss(t);
          if (0 < be(r, t.to)) return a ? zn(a, r, o) : t.r = { from: r, to: o, d: 1, l: null, r: null }, ss(t);
          be(r, t.from) < 0 && (t.from = r, t.l = null, t.d = a ? a.d + 1 : 1), 0 < be(o, t.to) && (t.to = o, t.r = null, t.d = t.l ? t.l.d + 1 : 1), o = !t.r, u && !t.l && Gn(t, u), a && o && Gn(t, a);
        }
      }
      function Gn(t, r) {
        Ri(r) || function o(a, b) {
          var f = b.from, d = b.to, g = b.l, b = b.r;
          zn(a, f, d), g && o(a, g), b && o(a, b);
        }(t, r);
      }
      function os(t, r) {
        var o = Dr(r), a = o.next();
        if (a.done) return !1;
        for (var u = a.value, f = Dr(t), d = f.next(u.from), g = d.value; !a.done && !d.done; ) {
          if (be(g.from, u.to) <= 0 && 0 <= be(g.to, u.from)) return !0;
          be(u.from, g.from) < 0 ? u = (a = o.next(g.from)).value : g = (d = f.next(u.from)).value;
        }
        return !1;
      }
      function Dr(t) {
        var r = Ri(t) ? null : { s: 0, n: t };
        return { next: function(o) {
          for (var a = 0 < arguments.length; r; ) switch (r.s) {
            case 0:
              if (r.s = 1, a) for (; r.n.l && be(o, r.n.from) < 0; ) r = { up: r, n: r.n.l, s: 1 };
              else for (; r.n.l; ) r = { up: r, n: r.n.l, s: 1 };
            case 1:
              if (r.s = 2, !a || be(o, r.n.to) <= 0) return { value: r.n, done: !1 };
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
      function ss(t) {
        var r, o, a = (((r = t.r) === null || r === void 0 ? void 0 : r.d) || 0) - (((o = t.l) === null || o === void 0 ? void 0 : o.d) || 0), u = 1 < a ? "r" : a < -1 ? "l" : "";
        u && (r = u == "r" ? "l" : "r", o = s({}, t), a = t[u], t.from = a.from, t.to = a.to, t[u] = a[u], o[u] = a[r], (t[r] = o).d = as(o)), t.d = as(t);
      }
      function as(o) {
        var r = o.r, o = o.l;
        return (r ? o ? Math.max(r.d, o.d) : r.d : o ? o.d : 0) + 1;
      }
      function jr(t, r) {
        return h(r).forEach(function(o) {
          t[o] ? Gn(t[o], r[o]) : t[o] = function a(u) {
            var f, d, g = {};
            for (f in u) A(u, f) && (d = u[f], g[f] = !d || typeof d != "object" || Ie.has(d.constructor) ? d : a(d));
            return g;
          }(r[o]);
        }), t;
      }
      function Ii(t, r) {
        return t.all || r.all || Object.keys(t).some(function(o) {
          return r[o] && os(r[o], t[o]);
        });
      }
      M(nt.prototype, ((_t = { add: function(t) {
        return Gn(this, t), this;
      }, addKey: function(t) {
        return zn(this, t, t), this;
      }, addKeys: function(t) {
        var r = this;
        return t.forEach(function(o) {
          return zn(r, o, o);
        }), this;
      }, hasKey: function(t) {
        var r = Dr(this).next(t).value;
        return r && be(r.from, t) <= 0 && 0 <= be(r.to, t);
      } })[$e] = function() {
        return Dr(this);
      }, _t));
      var hn = {}, Di = {}, ji = !1;
      function Kr(t) {
        jr(Di, t), ji || (ji = !0, setTimeout(function() {
          ji = !1, Ki(Di, !(Di = {}));
        }, 0));
      }
      function Ki(t, r) {
        r === void 0 && (r = !1);
        var o = /* @__PURE__ */ new Set();
        if (t.all) for (var a = 0, u = Object.values(hn); a < u.length; a++) us(d = u[a], t, o, r);
        else for (var f in t) {
          var d, g = /^idb\:\/\/(.*)\/(.*)\//.exec(f);
          g && (f = g[1], g = g[2], (d = hn["idb://".concat(f, "/").concat(g)]) && us(d, t, o, r));
        }
        o.forEach(function(b) {
          return b();
        });
      }
      function us(t, r, o, a) {
        for (var u = [], f = 0, d = Object.entries(t.queries.query); f < d.length; f++) {
          for (var g = d[f], b = g[0], x = [], P = 0, m = g[1]; P < m.length; P++) {
            var C = m[P];
            Ii(r, C.obsSet) ? C.subscribers.forEach(function(E) {
              return o.add(E);
            }) : a && x.push(C);
          }
          a && u.push([b, x]);
        }
        if (a) for (var _ = 0, O = u; _ < O.length; _++) {
          var S = O[_], b = S[0], x = S[1];
          t.queries.query[b] = x;
        }
      }
      function yu(t) {
        var r = t._state, o = t._deps.indexedDB;
        if (r.isBeingOpened || t.idbdb) return r.dbReadyPromise.then(function() {
          return r.dbOpenError ? Ue(r.dbOpenError) : t;
        });
        r.isBeingOpened = !0, r.dbOpenError = null, r.openComplete = !1;
        var a = r.openCanceller, u = Math.round(10 * t.verno), f = !1;
        function d() {
          if (r.openCanceller !== a) throw new oe.DatabaseClosed("db.open() was cancelled");
        }
        function g() {
          return new ee(function(C, _) {
            if (d(), !o) throw new oe.MissingAPI();
            var O = t.name, S = r.autoSchema || !u ? o.open(O) : o.open(O, u);
            if (!S) throw new oe.MissingAPI();
            S.onerror = Ct(_), S.onblocked = Be(t._fireOnBlocked), S.onupgradeneeded = Be(function(E) {
              var T;
              P = S.transaction, r.autoSchema && !t._options.allowEmptyDB ? (S.onerror = $n, P.abort(), S.result.close(), (T = o.deleteDatabase(O)).onsuccess = T.onerror = Be(function() {
                _(new oe.NoSuchDatabase("Database ".concat(O, " doesnt exist")));
              })) : (P.onerror = Ct(_), E = E.oldVersion > Math.pow(2, 62) ? 0 : E.oldVersion, m = E < 1, t.idbdb = S.result, f && du(t, P), hu(t, E / 10, P, _));
            }, _), S.onsuccess = Be(function() {
              P = null;
              var E, T, I, D, j, L = t.idbdb = S.result, W = Ee(L.objectStoreNames);
              if (0 < W.length) try {
                var V = L.transaction((D = W).length === 1 ? D[0] : D, "readonly");
                if (r.autoSchema) T = L, I = V, (E = t).verno = T.version / 10, I = E._dbSchema = Rr(0, T, I), E._storeNames = Ee(T.objectStoreNames, 0), Tr(E, [E._allTables], h(I), I);
                else if (Ir(t, t._dbSchema, V), ((j = Si(Rr(0, (j = t).idbdb, V), j._dbSchema)).add.length || j.change.some(function($) {
                  return $.add.length || $.change.length;
                })) && !f) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), L.close(), u = L.version + 1, f = !0, C(g());
                Cr(t, V);
              } catch {
              }
              En.push(t), L.onversionchange = Be(function($) {
                r.vcFired = !0, t.on("versionchange").fire($);
              }), L.onclose = Be(function($) {
                t.on("close").fire($);
              }), m && (j = t._deps, V = O, L = j.indexedDB, j = j.IDBKeyRange, Ti(L) || V === xr || Ci(L, j).put({ name: V }).catch(y)), C();
            }, _);
          }).catch(function(C) {
            switch (C?.name) {
              case "UnknownError":
                if (0 < r.PR1398_maxLoop) return r.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), g();
                break;
              case "VersionError":
                if (0 < u) return u = 0, g();
            }
            return ee.reject(C);
          });
        }
        var b, x = r.dbReadyResolve, P = null, m = !1;
        return ee.race([a, (typeof navigator > "u" ? ee.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(C) {
          function _() {
            return indexedDB.databases().finally(C);
          }
          b = setInterval(_, 100), _();
        }).finally(function() {
          return clearInterval(b);
        }) : Promise.resolve()).then(g)]).then(function() {
          return d(), r.onReadyBeingFired = [], ee.resolve(Ai(function() {
            return t.on.ready.fire(t.vip);
          })).then(function C() {
            if (0 < r.onReadyBeingFired.length) {
              var _ = r.onReadyBeingFired.reduce(H, y);
              return r.onReadyBeingFired = [], ee.resolve(Ai(function() {
                return _(t.vip);
              })).then(C);
            }
          });
        }).finally(function() {
          r.openCanceller === a && (r.onReadyBeingFired = null, r.isBeingOpened = !1);
        }).catch(function(C) {
          r.dbOpenError = C;
          try {
            P && P.abort();
          } catch {
          }
          return a === r.openCanceller && t._close(), Ue(C);
        }).finally(function() {
          r.openComplete = !0, x();
        }).then(function() {
          var C;
          return m && (C = {}, t.tables.forEach(function(_) {
            _.schema.indexes.forEach(function(O) {
              O.name && (C["idb://".concat(t.name, "/").concat(_.name, "/").concat(O.name)] = new nt(-1 / 0, [[[]]]));
            }), C["idb://".concat(t.name, "/").concat(_.name, "/")] = C["idb://".concat(t.name, "/").concat(_.name, "/:dels")] = new nt(-1 / 0, [[[]]]);
          }), tn(Hn).fire(C), Ki(C, !0)), t;
        });
      }
      function Fi(t) {
        function r(f) {
          return t.next(f);
        }
        var o = u(r), a = u(function(f) {
          return t.throw(f);
        });
        function u(f) {
          return function(b) {
            var g = f(b), b = g.value;
            return g.done ? b : b && typeof b.then == "function" ? b.then(o, a) : p(b) ? Promise.all(b).then(o, a) : o(b);
          };
        }
        return u(r)();
      }
      function Fr(t, r, o) {
        for (var a = p(t) ? t.slice() : [t], u = 0; u < o; ++u) a.push(r);
        return a;
      }
      var gu = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(t) {
        return s(s({}, t), { table: function(r) {
          var o = t.table(r), a = o.schema, u = {}, f = [];
          function d(m, C, _) {
            var O = Yn(m), S = u[O] = u[O] || [], E = m == null ? 0 : typeof m == "string" ? 1 : m.length, T = 0 < C, T = s(s({}, _), { name: T ? "".concat(O, "(virtual-from:").concat(_.name, ")") : _.name, lowLevelIndex: _, isVirtual: T, keyTail: C, keyLength: E, extractKey: Pi(m), unique: !T && _.unique });
            return S.push(T), T.isPrimaryKey || f.push(T), 1 < E && d(E === 2 ? m[0] : m.slice(0, E - 1), C + 1, _), S.sort(function(I, D) {
              return I.keyTail - D.keyTail;
            }), T;
          }
          r = d(a.primaryKey.keyPath, 0, a.primaryKey), u[":id"] = [r];
          for (var g = 0, b = a.indexes; g < b.length; g++) {
            var x = b[g];
            d(x.keyPath, 0, x);
          }
          function P(m) {
            var C, _ = m.query.index;
            return _.isVirtual ? s(s({}, m), { query: { index: _.lowLevelIndex, range: (C = m.query.range, _ = _.keyTail, { type: C.type === 1 ? 2 : C.type, lower: Fr(C.lower, C.lowerOpen ? t.MAX_KEY : t.MIN_KEY, _), lowerOpen: !0, upper: Fr(C.upper, C.upperOpen ? t.MIN_KEY : t.MAX_KEY, _), upperOpen: !0 }) } }) : m;
          }
          return s(s({}, o), { schema: s(s({}, a), { primaryKey: r, indexes: f, getIndexByKeyPath: function(m) {
            return (m = u[Yn(m)]) && m[0];
          } }), count: function(m) {
            return o.count(P(m));
          }, query: function(m) {
            return o.query(P(m));
          }, openCursor: function(m) {
            var C = m.query.index, _ = C.keyTail, O = C.isVirtual, S = C.keyLength;
            return O ? o.openCursor(P(m)).then(function(T) {
              return T && E(T);
            }) : o.openCursor(m);
            function E(T) {
              return Object.create(T, { continue: { value: function(I) {
                I != null ? T.continue(Fr(I, m.reverse ? t.MAX_KEY : t.MIN_KEY, _)) : m.unique ? T.continue(T.key.slice(0, S).concat(m.reverse ? t.MIN_KEY : t.MAX_KEY, _)) : T.continue();
              } }, continuePrimaryKey: { value: function(I, D) {
                T.continuePrimaryKey(Fr(I, t.MAX_KEY, _), D);
              } }, primaryKey: { get: function() {
                return T.primaryKey;
              } }, key: { get: function() {
                var I = T.key;
                return S === 1 ? I[0] : I.slice(0, S);
              } }, value: { get: function() {
                return T.value;
              } } });
            }
          } });
        } });
      } };
      function Mi(t, r, o, a) {
        return o = o || {}, a = a || "", h(t).forEach(function(u) {
          var f, d, g;
          A(r, u) ? (f = t[u], d = r[u], typeof f == "object" && typeof d == "object" && f && d ? (g = St(f)) !== St(d) ? o[a + u] = r[u] : g === "Object" ? Mi(f, d, o, a + u + ".") : f !== d && (o[a + u] = r[u]) : f !== d && (o[a + u] = r[u])) : o[a + u] = void 0;
        }), h(r).forEach(function(u) {
          A(t, u) || (o[a + u] = r[u]);
        }), o;
      }
      function Bi(t, r) {
        return r.type === "delete" ? r.keys : r.keys || r.values.map(t.extractKey);
      }
      var mu = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(t) {
        return s(s({}, t), { table: function(r) {
          var o = t.table(r), a = o.schema.primaryKey;
          return s(s({}, o), { mutate: function(u) {
            var f = ne.trans, d = f.table(r).hook, g = d.deleting, b = d.creating, x = d.updating;
            switch (u.type) {
              case "add":
                if (b.fire === y) break;
                return f._promise("readwrite", function() {
                  return P(u);
                }, !0);
              case "put":
                if (b.fire === y && x.fire === y) break;
                return f._promise("readwrite", function() {
                  return P(u);
                }, !0);
              case "delete":
                if (g.fire === y) break;
                return f._promise("readwrite", function() {
                  return P(u);
                }, !0);
              case "deleteRange":
                if (g.fire === y) break;
                return f._promise("readwrite", function() {
                  return function m(C, _, O) {
                    return o.query({ trans: C, values: !1, query: { index: a, range: _ }, limit: O }).then(function(S) {
                      var E = S.result;
                      return P({ type: "delete", keys: E, trans: C }).then(function(T) {
                        return 0 < T.numFailures ? Promise.reject(T.failures[0]) : E.length < O ? { failures: [], numFailures: 0, lastResult: void 0 } : m(C, s(s({}, _), { lower: E[E.length - 1], lowerOpen: !0 }), O);
                      });
                    });
                  }(u.trans, u.range, 1e4);
                }, !0);
            }
            return o.mutate(u);
            function P(m) {
              var C, _, O, S = ne.trans, E = m.keys || Bi(a, m);
              if (!E) throw new Error("Keys missing");
              return (m = m.type === "add" || m.type === "put" ? s(s({}, m), { keys: E }) : s({}, m)).type !== "delete" && (m.values = l([], m.values)), m.keys && (m.keys = l([], m.keys)), C = o, O = E, ((_ = m).type === "add" ? Promise.resolve([]) : C.getMany({ trans: _.trans, keys: O, cache: "immutable" })).then(function(T) {
                var I = E.map(function(D, j) {
                  var L, W, V, $ = T[j], Z = { onerror: null, onsuccess: null };
                  return m.type === "delete" ? g.fire.call(Z, D, $, S) : m.type === "add" || $ === void 0 ? (L = b.fire.call(Z, D, m.values[j], S), D == null && L != null && (m.keys[j] = D = L, a.outbound || F(m.values[j], a.keyPath, D))) : (L = Mi($, m.values[j]), (W = x.fire.call(Z, L, D, $, S)) && (V = m.values[j], Object.keys(W).forEach(function(Q) {
                    A(V, Q) ? V[Q] = W[Q] : F(V, Q, W[Q]);
                  }))), Z;
                });
                return o.mutate(m).then(function(D) {
                  for (var j = D.failures, L = D.results, W = D.numFailures, D = D.lastResult, V = 0; V < E.length; ++V) {
                    var $ = (L || E)[V], Z = I[V];
                    $ == null ? Z.onerror && Z.onerror(j[V]) : Z.onsuccess && Z.onsuccess(m.type === "put" && T[V] ? m.values[V] : $);
                  }
                  return { failures: j, results: L, numFailures: W, lastResult: D };
                }).catch(function(D) {
                  return I.forEach(function(j) {
                    return j.onerror && j.onerror(D);
                  }), Promise.reject(D);
                });
              });
            }
          } });
        } });
      } };
      function ls(t, r, o) {
        try {
          if (!r || r.keys.length < t.length) return null;
          for (var a = [], u = 0, f = 0; u < r.keys.length && f < t.length; ++u) be(r.keys[u], t[f]) === 0 && (a.push(o ? Ye(r.values[u]) : r.values[u]), ++f);
          return a.length === t.length ? a : null;
        } catch {
          return null;
        }
      }
      var vu = { stack: "dbcore", level: -1, create: function(t) {
        return { table: function(r) {
          var o = t.table(r);
          return s(s({}, o), { getMany: function(a) {
            if (!a.cache) return o.getMany(a);
            var u = ls(a.keys, a.trans._cache, a.cache === "clone");
            return u ? ee.resolve(u) : o.getMany(a).then(function(f) {
              return a.trans._cache = { keys: a.keys, values: a.cache === "clone" ? Ye(f) : f }, f;
            });
          }, mutate: function(a) {
            return a.type !== "add" && (a.trans._cache = null), o.mutate(a);
          } });
        } };
      } };
      function cs(t, r) {
        return t.trans.mode === "readonly" && !!t.subscr && !t.trans.explicit && t.trans.db._options.cache !== "disabled" && !r.schema.primaryKey.outbound;
      }
      function fs(t, r) {
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
      var bu = { stack: "dbcore", level: 0, name: "Observability", create: function(t) {
        var r = t.schema.name, o = new nt(t.MIN_KEY, t.MAX_KEY);
        return s(s({}, t), { transaction: function(a, u, f) {
          if (ne.subscr && u !== "readonly") throw new oe.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ne.querier));
          return t.transaction(a, u, f);
        }, table: function(a) {
          var u = t.table(a), f = u.schema, d = f.primaryKey, m = f.indexes, g = d.extractKey, b = d.outbound, x = d.autoIncrement && m.filter(function(_) {
            return _.compound && _.keyPath.includes(d.keyPath);
          }), P = s(s({}, u), { mutate: function(_) {
            function O(Q) {
              return Q = "idb://".concat(r, "/").concat(a, "/").concat(Q), D[Q] || (D[Q] = new nt());
            }
            var S, E, T, I = _.trans, D = _.mutatedParts || (_.mutatedParts = {}), j = O(""), L = O(":dels"), W = _.type, Z = _.type === "deleteRange" ? [_.range] : _.type === "delete" ? [_.keys] : _.values.length < 50 ? [Bi(d, _).filter(function(Q) {
              return Q;
            }), _.values] : [], V = Z[0], $ = Z[1], Z = _.trans._cache;
            return p(V) ? (j.addKeys(V), (Z = W === "delete" || V.length === $.length ? ls(V, Z) : null) || L.addKeys(V), (Z || $) && (S = O, E = Z, T = $, f.indexes.forEach(function(Q) {
              var te = S(Q.name || "");
              function ge(de) {
                return de != null ? Q.extractKey(de) : null;
              }
              function xe(de) {
                return Q.multiEntry && p(de) ? de.forEach(function(qe) {
                  return te.addKey(qe);
                }) : te.addKey(de);
              }
              (E || T).forEach(function(de, rt) {
                var he = E && ge(E[rt]), rt = T && ge(T[rt]);
                be(he, rt) !== 0 && (he != null && xe(he), rt != null && xe(rt));
              });
            }))) : V ? ($ = { from: ($ = V.lower) !== null && $ !== void 0 ? $ : t.MIN_KEY, to: ($ = V.upper) !== null && $ !== void 0 ? $ : t.MAX_KEY }, L.add($), j.add($)) : (j.add(o), L.add(o), f.indexes.forEach(function(Q) {
              return O(Q.name).add(o);
            })), u.mutate(_).then(function(Q) {
              return !V || _.type !== "add" && _.type !== "put" || (j.addKeys(Q.results), x && x.forEach(function(te) {
                for (var ge = _.values.map(function(he) {
                  return te.extractKey(he);
                }), xe = te.keyPath.findIndex(function(he) {
                  return he === d.keyPath;
                }), de = 0, qe = Q.results.length; de < qe; ++de) ge[de][xe] = Q.results[de];
                O(te.name).addKeys(ge);
              })), I.mutatedParts = jr(I.mutatedParts || {}, D), Q;
            });
          } }), m = function(O) {
            var S = O.query, O = S.index, S = S.range;
            return [O, new nt((O = S.lower) !== null && O !== void 0 ? O : t.MIN_KEY, (S = S.upper) !== null && S !== void 0 ? S : t.MAX_KEY)];
          }, C = { get: function(_) {
            return [d, new nt(_.key)];
          }, getMany: function(_) {
            return [d, new nt().addKeys(_.keys)];
          }, count: m, query: m, openCursor: m };
          return h(C).forEach(function(_) {
            P[_] = function(O) {
              var S = ne.subscr, E = !!S, T = cs(ne, u) && fs(_, O) ? O.obsSet = {} : S;
              if (E) {
                var I = function($) {
                  return $ = "idb://".concat(r, "/").concat(a, "/").concat($), T[$] || (T[$] = new nt());
                }, D = I(""), j = I(":dels"), S = C[_](O), E = S[0], S = S[1];
                if ((_ === "query" && E.isPrimaryKey && !O.values ? j : I(E.name || "")).add(S), !E.isPrimaryKey) {
                  if (_ !== "count") {
                    var L = _ === "query" && b && O.values && u.query(s(s({}, O), { values: !1 }));
                    return u[_].apply(this, arguments).then(function($) {
                      if (_ === "query") {
                        if (b && O.values) return L.then(function(ge) {
                          return ge = ge.result, D.addKeys(ge), $;
                        });
                        var Z = O.values ? $.result.map(g) : $.result;
                        (O.values ? D : j).addKeys(Z);
                      } else if (_ === "openCursor") {
                        var Q = $, te = O.values;
                        return Q && Object.create(Q, { key: { get: function() {
                          return j.addKey(Q.primaryKey), Q.key;
                        } }, primaryKey: { get: function() {
                          var ge = Q.primaryKey;
                          return j.addKey(ge), ge;
                        } }, value: { get: function() {
                          return te && D.addKey(Q.primaryKey), Q.value;
                        } } });
                      }
                      return $;
                    });
                  }
                  j.add(o);
                }
              }
              return u[_].apply(this, arguments);
            };
          }), P;
        } });
      } };
      function hs(t, r, o) {
        if (o.numFailures === 0) return r;
        if (r.type === "deleteRange") return null;
        var a = r.keys ? r.keys.length : "values" in r && r.values ? r.values.length : 1;
        return o.numFailures === a ? null : (r = s({}, r), p(r.keys) && (r.keys = r.keys.filter(function(u, f) {
          return !(f in o.failures);
        })), "values" in r && p(r.values) && (r.values = r.values.filter(function(u, f) {
          return !(f in o.failures);
        })), r);
      }
      function Ni(t, r) {
        return o = t, ((a = r).lower === void 0 || (a.lowerOpen ? 0 < be(o, a.lower) : 0 <= be(o, a.lower))) && (t = t, (r = r).upper === void 0 || (r.upperOpen ? be(t, r.upper) < 0 : be(t, r.upper) <= 0));
        var o, a;
      }
      function ds(t, r, C, a, u, f) {
        if (!C || C.length === 0) return t;
        var d = r.query.index, g = d.multiEntry, b = r.query.range, x = a.schema.primaryKey.extractKey, P = d.extractKey, m = (d.lowLevelIndex || d).extractKey, C = C.reduce(function(_, O) {
          var S = _, E = [];
          if (O.type === "add" || O.type === "put") for (var T = new nt(), I = O.values.length - 1; 0 <= I; --I) {
            var D, j = O.values[I], L = x(j);
            T.hasKey(L) || (D = P(j), (g && p(D) ? D.some(function(Q) {
              return Ni(Q, b);
            }) : Ni(D, b)) && (T.addKey(L), E.push(j)));
          }
          switch (O.type) {
            case "add":
              var W = new nt().addKeys(r.values ? _.map(function(te) {
                return x(te);
              }) : _), S = _.concat(r.values ? E.filter(function(te) {
                return te = x(te), !W.hasKey(te) && (W.addKey(te), !0);
              }) : E.map(function(te) {
                return x(te);
              }).filter(function(te) {
                return !W.hasKey(te) && (W.addKey(te), !0);
              }));
              break;
            case "put":
              var V = new nt().addKeys(O.values.map(function(te) {
                return x(te);
              }));
              S = _.filter(function(te) {
                return !V.hasKey(r.values ? x(te) : te);
              }).concat(r.values ? E : E.map(function(te) {
                return x(te);
              }));
              break;
            case "delete":
              var $ = new nt().addKeys(O.keys);
              S = _.filter(function(te) {
                return !$.hasKey(r.values ? x(te) : te);
              });
              break;
            case "deleteRange":
              var Z = O.range;
              S = _.filter(function(te) {
                return !Ni(x(te), Z);
              });
          }
          return S;
        }, t);
        return C === t ? t : (C.sort(function(_, O) {
          return be(m(_), m(O)) || be(x(_), x(O));
        }), r.limit && r.limit < 1 / 0 && (C.length > r.limit ? C.length = r.limit : t.length === r.limit && C.length < r.limit && (u.dirty = !0)), f ? Object.freeze(C) : C);
      }
      function ps(t, r) {
        return be(t.lower, r.lower) === 0 && be(t.upper, r.upper) === 0 && !!t.lowerOpen == !!r.lowerOpen && !!t.upperOpen == !!r.upperOpen;
      }
      function _u(t, r) {
        return function(o, a, u, f) {
          if (o === void 0) return a !== void 0 ? -1 : 0;
          if (a === void 0) return 1;
          if ((a = be(o, a)) === 0) {
            if (u && f) return 0;
            if (u) return 1;
            if (f) return -1;
          }
          return a;
        }(t.lower, r.lower, t.lowerOpen, r.lowerOpen) <= 0 && 0 <= function(o, a, u, f) {
          if (o === void 0) return a !== void 0 ? 1 : 0;
          if (a === void 0) return -1;
          if ((a = be(o, a)) === 0) {
            if (u && f) return 0;
            if (u) return -1;
            if (f) return 1;
          }
          return a;
        }(t.upper, r.upper, t.upperOpen, r.upperOpen);
      }
      function wu(t, r, o, a) {
        t.subscribers.add(o), a.addEventListener("abort", function() {
          var u, f;
          t.subscribers.delete(o), t.subscribers.size === 0 && (u = t, f = r, setTimeout(function() {
            u.subscribers.size === 0 && _e(f, u);
          }, 3e3));
        });
      }
      var xu = { stack: "dbcore", level: 0, name: "Cache", create: function(t) {
        var r = t.schema.name;
        return s(s({}, t), { transaction: function(o, a, u) {
          var f, d, g = t.transaction(o, a, u);
          return a === "readwrite" && (d = (f = new AbortController()).signal, u = function(b) {
            return function() {
              if (f.abort(), a === "readwrite") {
                for (var x = /* @__PURE__ */ new Set(), P = 0, m = o; P < m.length; P++) {
                  var C = m[P], _ = hn["idb://".concat(r, "/").concat(C)];
                  if (_) {
                    var O = t.table(C), S = _.optimisticOps.filter(function(te) {
                      return te.trans === g;
                    });
                    if (g._explicit && b && g.mutatedParts) for (var E = 0, T = Object.values(_.queries.query); E < T.length; E++) for (var I = 0, D = (W = T[E]).slice(); I < D.length; I++) Ii((V = D[I]).obsSet, g.mutatedParts) && (_e(W, V), V.subscribers.forEach(function(te) {
                      return x.add(te);
                    }));
                    else if (0 < S.length) {
                      _.optimisticOps = _.optimisticOps.filter(function(te) {
                        return te.trans !== g;
                      });
                      for (var j = 0, L = Object.values(_.queries.query); j < L.length; j++) for (var W, V, $, Z = 0, Q = (W = L[j]).slice(); Z < Q.length; Z++) (V = Q[Z]).res != null && g.mutatedParts && (b && !V.dirty ? ($ = Object.isFrozen(V.res), $ = ds(V.res, V.req, S, O, V, $), V.dirty ? (_e(W, V), V.subscribers.forEach(function(te) {
                        return x.add(te);
                      })) : $ !== V.res && (V.res = $, V.promise = ee.resolve({ result: $ }))) : (V.dirty && _e(W, V), V.subscribers.forEach(function(te) {
                        return x.add(te);
                      })));
                    }
                  }
                }
                x.forEach(function(te) {
                  return te();
                });
              }
            };
          }, g.addEventListener("abort", u(!1), { signal: d }), g.addEventListener("error", u(!1), { signal: d }), g.addEventListener("complete", u(!0), { signal: d })), g;
        }, table: function(o) {
          var a = t.table(o), u = a.schema.primaryKey;
          return s(s({}, a), { mutate: function(f) {
            var d = ne.trans;
            if (u.outbound || d.db._options.cache === "disabled" || d.explicit || d.idbtrans.mode !== "readwrite") return a.mutate(f);
            var g = hn["idb://".concat(r, "/").concat(o)];
            return g ? (d = a.mutate(f), f.type !== "add" && f.type !== "put" || !(50 <= f.values.length || Bi(u, f).some(function(b) {
              return b == null;
            })) ? (g.optimisticOps.push(f), f.mutatedParts && Kr(f.mutatedParts), d.then(function(b) {
              0 < b.numFailures && (_e(g.optimisticOps, f), (b = hs(0, f, b)) && g.optimisticOps.push(b), f.mutatedParts && Kr(f.mutatedParts));
            }), d.catch(function() {
              _e(g.optimisticOps, f), f.mutatedParts && Kr(f.mutatedParts);
            })) : d.then(function(b) {
              var x = hs(0, s(s({}, f), { values: f.values.map(function(P, m) {
                var C;
                return b.failures[m] ? P : (P = (C = u.keyPath) !== null && C !== void 0 && C.includes(".") ? Ye(P) : s({}, P), F(P, u.keyPath, b.results[m]), P);
              }) }), b);
              g.optimisticOps.push(x), queueMicrotask(function() {
                return f.mutatedParts && Kr(f.mutatedParts);
              });
            }), d) : a.mutate(f);
          }, query: function(f) {
            if (!cs(ne, a) || !fs("query", f)) return a.query(f);
            var d = ((x = ne.trans) === null || x === void 0 ? void 0 : x.db._options.cache) === "immutable", m = ne, g = m.requery, b = m.signal, x = function(O, S, E, T) {
              var I = hn["idb://".concat(O, "/").concat(S)];
              if (!I) return [];
              if (!(S = I.queries[E])) return [null, !1, I, null];
              var D = S[(T.query ? T.query.index.name : null) || ""];
              if (!D) return [null, !1, I, null];
              switch (E) {
                case "query":
                  var j = D.find(function(L) {
                    return L.req.limit === T.limit && L.req.values === T.values && ps(L.req.query.range, T.query.range);
                  });
                  return j ? [j, !0, I, D] : [D.find(function(L) {
                    return ("limit" in L.req ? L.req.limit : 1 / 0) >= T.limit && (!T.values || L.req.values) && _u(L.req.query.range, T.query.range);
                  }), !1, I, D];
                case "count":
                  return j = D.find(function(L) {
                    return ps(L.req.query.range, T.query.range);
                  }), [j, !!j, I, D];
              }
            }(r, o, "query", f), P = x[0], m = x[1], C = x[2], _ = x[3];
            return P && m ? P.obsSet = f.obsSet : (m = a.query(f).then(function(O) {
              var S = O.result;
              if (P && (P.res = S), d) {
                for (var E = 0, T = S.length; E < T; ++E) Object.freeze(S[E]);
                Object.freeze(S);
              } else O.result = Ye(S);
              return O;
            }).catch(function(O) {
              return _ && P && _e(_, P), Promise.reject(O);
            }), P = { obsSet: f.obsSet, promise: m, subscribers: /* @__PURE__ */ new Set(), type: "query", req: f, dirty: !1 }, _ ? _.push(P) : (_ = [P], (C = C || (hn["idb://".concat(r, "/").concat(o)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[f.query.index.name || ""] = _)), wu(P, _, g, b), P.promise.then(function(O) {
              return { result: ds(O.result, f, C?.optimisticOps, a, P, d) };
            });
          } });
        } });
      } };
      function Mr(t, r) {
        return new Proxy(t, { get: function(o, a, u) {
          return a === "db" ? r : Reflect.get(o, a, u);
        } });
      }
      var Bt = (Le.prototype.version = function(t) {
        if (isNaN(t) || t < 0.1) throw new oe.Type("Given version is not a positive number");
        if (t = Math.round(10 * t) / 10, this.idbdb || this._state.isBeingOpened) throw new oe.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, t);
        var r = this._versions, o = r.filter(function(a) {
          return a._cfg.version === t;
        })[0];
        return o || (o = new this.Version(t), r.push(o), r.sort(fu), o.stores({}), this._state.autoSchema = !1, o);
      }, Le.prototype._whenReady = function(t) {
        var r = this;
        return this.idbdb && (this._state.openComplete || ne.letThrough || this._vip) ? t() : new ee(function(o, a) {
          if (r._state.openComplete) return a(new oe.DatabaseClosed(r._state.dbOpenError));
          if (!r._state.isBeingOpened) {
            if (!r._state.autoOpen) return void a(new oe.DatabaseClosed());
            r.open().catch(y);
          }
          r._state.dbReadyPromise.then(o, a);
        }).then(t);
      }, Le.prototype.use = function(t) {
        var r = t.stack, o = t.create, a = t.level, u = t.name;
        return u && this.unuse({ stack: r, name: u }), t = this._middlewares[r] || (this._middlewares[r] = []), t.push({ stack: r, create: o, level: a ?? 10, name: u }), t.sort(function(f, d) {
          return f.level - d.level;
        }), this;
      }, Le.prototype.unuse = function(t) {
        var r = t.stack, o = t.name, a = t.create;
        return r && this._middlewares[r] && (this._middlewares[r] = this._middlewares[r].filter(function(u) {
          return a ? u.create !== a : !!o && u.name !== o;
        })), this;
      }, Le.prototype.open = function() {
        var t = this;
        return ln(Ne, function() {
          return yu(t);
        });
      }, Le.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var t = this._state, r = En.indexOf(this);
        if (0 <= r && En.splice(r, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        t.isBeingOpened || (t.dbReadyPromise = new ee(function(o) {
          t.dbReadyResolve = o;
        }), t.openCanceller = new ee(function(o, a) {
          t.cancelOpen = a;
        }));
      }, Le.prototype.close = function(o) {
        var r = (o === void 0 ? { disableAutoOpen: !0 } : o).disableAutoOpen, o = this._state;
        r ? (o.isBeingOpened && o.cancelOpen(new oe.DatabaseClosed()), this._close(), o.autoOpen = !1, o.dbOpenError = new oe.DatabaseClosed()) : (this._close(), o.autoOpen = this._options.autoOpen || o.isBeingOpened, o.openComplete = !1, o.dbOpenError = null);
      }, Le.prototype.delete = function(t) {
        var r = this;
        t === void 0 && (t = { disableAutoOpen: !0 });
        var o = 0 < arguments.length && typeof arguments[0] != "object", a = this._state;
        return new ee(function(u, f) {
          function d() {
            r.close(t);
            var g = r._deps.indexedDB.deleteDatabase(r.name);
            g.onsuccess = Be(function() {
              var b, x, P;
              b = r._deps, x = r.name, P = b.indexedDB, b = b.IDBKeyRange, Ti(P) || x === xr || Ci(P, b).delete(x).catch(y), u();
            }), g.onerror = Ct(f), g.onblocked = r._fireOnBlocked;
          }
          if (o) throw new oe.InvalidArgument("Invalid closeOptions argument to db.delete()");
          a.isBeingOpened ? a.dbReadyPromise.then(d) : d();
        });
      }, Le.prototype.backendDB = function() {
        return this.idbdb;
      }, Le.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Le.prototype.hasBeenClosed = function() {
        var t = this._state.dbOpenError;
        return t && t.name === "DatabaseClosed";
      }, Le.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Le.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Le.prototype, "tables", { get: function() {
        var t = this;
        return h(this._allTables).map(function(r) {
          return t._allTables[r];
        });
      }, enumerable: !1, configurable: !0 }), Le.prototype.transaction = function() {
        var t = (function(r, o, a) {
          var u = arguments.length;
          if (u < 2) throw new oe.InvalidArgument("Too few arguments");
          for (var f = new Array(u - 1); --u; ) f[u - 1] = arguments[u];
          return a = f.pop(), [r, me(f), a];
        }).apply(this, arguments);
        return this._transaction.apply(this, t);
      }, Le.prototype._transaction = function(t, r, o) {
        var a = this, u = ne.trans;
        u && u.db === this && t.indexOf("!") === -1 || (u = null);
        var f, d, g = t.indexOf("?") !== -1;
        t = t.replace("!", "").replace("?", "");
        try {
          if (d = r.map(function(x) {
            if (x = x instanceof a.Table ? x.name : x, typeof x != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return x;
          }), t == "r" || t === mi) f = mi;
          else {
            if (t != "rw" && t != vi) throw new oe.InvalidArgument("Invalid transaction mode: " + t);
            f = vi;
          }
          if (u) {
            if (u.mode === mi && f === vi) {
              if (!g) throw new oe.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              u = null;
            }
            u && d.forEach(function(x) {
              if (u && u.storeNames.indexOf(x) === -1) {
                if (!g) throw new oe.SubTransaction("Table " + x + " not included in parent transaction.");
                u = null;
              }
            }), g && u && !u.active && (u = null);
          }
        } catch (x) {
          return u ? u._promise(null, function(P, m) {
            m(x);
          }) : Ue(x);
        }
        var b = (function x(P, m, C, _, O) {
          return ee.resolve().then(function() {
            var S = ne.transless || ne, E = P._createTransaction(m, C, P._dbSchema, _);
            if (E.explicit = !0, S = { trans: E, transless: S }, _) E.idbtrans = _.idbtrans;
            else try {
              E.create(), E.idbtrans._explicit = !0, P._state.PR1398_maxLoop = 3;
            } catch (D) {
              return D.name === zt.InvalidState && P.isOpen() && 0 < --P._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), P.close({ disableAutoOpen: !1 }), P.open().then(function() {
                return x(P, m, C, null, O);
              })) : Ue(D);
            }
            var T, I = Ot(O);
            return I && Pn(), S = ee.follow(function() {
              var D;
              (T = O.call(E, E)) && (I ? (D = Xt.bind(null, null), T.then(D, D)) : typeof T.next == "function" && typeof T.throw == "function" && (T = Fi(T)));
            }, S), (T && typeof T.then == "function" ? ee.resolve(T).then(function(D) {
              return E.active ? D : Ue(new oe.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : S.then(function() {
              return T;
            })).then(function(D) {
              return _ && E._resolve(), E._completion.then(function() {
                return D;
              });
            }).catch(function(D) {
              return E._reject(D), Ue(D);
            });
          });
        }).bind(null, this, f, d, u, o);
        return u ? u._promise(f, b, "lock") : ne.trans ? ln(ne.transless, function() {
          return a._whenReady(b);
        }) : this._whenReady(b);
      }, Le.prototype.table = function(t) {
        if (!A(this._allTables, t)) throw new oe.InvalidTable("Table ".concat(t, " does not exist"));
        return this._allTables[t];
      }, Le);
      function Le(t, r) {
        var o = this;
        this._middlewares = {}, this.verno = 0;
        var a = Le.dependencies;
        this._options = r = s({ addons: Le.addons, autoOpen: !0, indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange, cache: "cloned" }, r), this._deps = { indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange }, a = r.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var u, f, d, g, b, x = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: y, dbReadyPromise: null, cancelOpen: y, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: r.autoOpen };
        x.dbReadyPromise = new ee(function(m) {
          x.dbReadyResolve = m;
        }), x.openCanceller = new ee(function(m, C) {
          x.cancelOpen = C;
        }), this._state = x, this.name = t, this.on = Un(this, "populate", "blocked", "versionchange", "close", { ready: [H, y] }), this.once = function(m, C) {
          var _ = function() {
            for (var O = [], S = 0; S < arguments.length; S++) O[S] = arguments[S];
            o.on(m).unsubscribe(_), C.apply(o, O);
          };
          return o.on(m, _);
        }, this.on.ready.subscribe = Se(this.on.ready.subscribe, function(m) {
          return function(C, _) {
            Le.vip(function() {
              var O, S = o._state;
              S.openComplete ? (S.dbOpenError || ee.resolve().then(C), _ && m(C)) : S.onReadyBeingFired ? (S.onReadyBeingFired.push(C), _ && m(C)) : (m(C), O = o, _ || m(function E() {
                O.on.ready.unsubscribe(C), O.on.ready.unsubscribe(E);
              }));
            });
          };
        }), this.Collection = (u = this, Ln(iu.prototype, function(T, E) {
          this.db = u;
          var _ = $o, O = null;
          if (E) try {
            _ = E();
          } catch (I) {
            O = I;
          }
          var S = T._ctx, E = S.table, T = E.hook.reading.fire;
          this._ctx = { table: E, index: S.index, isPrimKey: !S.index || E.schema.primKey.keyPath && S.index === E.schema.primKey.name, range: _, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: O, or: S.or, valueMapper: T !== w ? T : null };
        })), this.Table = (f = this, Ln(zo.prototype, function(m, C, _) {
          this.db = f, this._tx = _, this.name = m, this.schema = C, this.hook = f._allTables[m] ? f._allTables[m].hook : Un(null, { creating: [N, y], reading: [K, w], updating: [X, y], deleting: [U, y] });
        })), this.Transaction = (d = this, Ln(au.prototype, function(m, C, _, O, S) {
          var E = this;
          m !== "readonly" && C.forEach(function(T) {
            T = (T = _[T]) === null || T === void 0 ? void 0 : T.yProps, T && (C = C.concat(T.map(function(I) {
              return I.updatesTable;
            })));
          }), this.db = d, this.mode = m, this.storeNames = C, this.schema = _, this.chromeTransactionDurability = O, this.idbtrans = null, this.on = Un(this, "complete", "error", "abort"), this.parent = S || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new ee(function(T, I) {
            E._resolve = T, E._reject = I;
          }), this._completion.then(function() {
            E.active = !1, E.on.complete.fire();
          }, function(T) {
            var I = E.active;
            return E.active = !1, E.on.error.fire(T), E.parent ? E.parent._reject(T) : I && E.idbtrans && E.idbtrans.abort(), Ue(T);
          });
        })), this.Version = (g = this, Ln(pu.prototype, function(m) {
          this.db = g, this._cfg = { version: m, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (b = this, Ln(es.prototype, function(m, C, _) {
          if (this.db = b, this._ctx = { table: m, index: C === ":id" ? null : C, or: _ }, this._cmp = this._ascending = be, this._descending = function(O, S) {
            return be(S, O);
          }, this._max = function(O, S) {
            return 0 < be(O, S) ? O : S;
          }, this._min = function(O, S) {
            return be(O, S) < 0 ? O : S;
          }, this._IDBKeyRange = b._deps.IDBKeyRange, !this._IDBKeyRange) throw new oe.MissingAPI();
        })), this.on("versionchange", function(m) {
          0 < m.newVersion ? console.warn("Another connection wants to upgrade database '".concat(o.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(o.name, "'. Closing db now to resume the delete request.")), o.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(m) {
          !m.newVersion || m.newVersion < m.oldVersion ? console.warn("Dexie.delete('".concat(o.name, "') was blocked")) : console.warn("Upgrade '".concat(o.name, "' blocked by other connection holding version ").concat(m.oldVersion / 10));
        }), this._maxKey = Wn(r.IDBKeyRange), this._createTransaction = function(m, C, _, O) {
          return new o.Transaction(m, C, _, o._options.chromeTransactionDurability, O);
        }, this._fireOnBlocked = function(m) {
          o.on("blocked").fire(m), En.filter(function(C) {
            return C.name === o.name && C !== o && !C._state.vcFired;
          }).map(function(C) {
            return C.on("versionchange").fire(m);
          });
        }, this.use(vu), this.use(xu), this.use(bu), this.use(gu), this.use(mu);
        var P = new Proxy(this, { get: function(m, C, _) {
          if (C === "_vip") return !0;
          if (C === "table") return function(S) {
            return Mr(o.table(S), P);
          };
          var O = Reflect.get(m, C, _);
          return O instanceof zo ? Mr(O, P) : C === "tables" ? O.map(function(S) {
            return Mr(S, P);
          }) : C === "_createTransaction" ? function() {
            return Mr(O.apply(this, arguments), P);
          } : O;
        } });
        this.vip = P, a.forEach(function(m) {
          return m(o);
        });
      }
      var Br, _t = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Ou = (qi.prototype.subscribe = function(t, r, o) {
        return this._subscribe(t && typeof t != "function" ? t : { next: t, error: r, complete: o });
      }, qi.prototype[_t] = function() {
        return this;
      }, qi);
      function qi(t) {
        this._subscribe = t;
      }
      try {
        Br = { indexedDB: c.indexedDB || c.mozIndexedDB || c.webkitIndexedDB || c.msIndexedDB, IDBKeyRange: c.IDBKeyRange || c.webkitIDBKeyRange };
      } catch {
        Br = { indexedDB: null, IDBKeyRange: null };
      }
      function ys(t) {
        var r, o = !1, a = new Ou(function(u) {
          var f = Ot(t), d, g = !1, b = {}, x = {}, P = { get closed() {
            return g;
          }, unsubscribe: function() {
            g || (g = !0, d && d.abort(), m && tn.storagemutated.unsubscribe(_));
          } };
          u.start && u.start(P);
          var m = !1, C = function() {
            return gi(O);
          }, _ = function(S) {
            jr(b, S), Ii(x, b) && C();
          }, O = function() {
            var S, E, T;
            !g && Br.indexedDB && (b = {}, S = {}, d && d.abort(), d = new AbortController(), T = function(I) {
              var D = xn();
              try {
                f && Pn();
                var j = Qt(t, I);
                return j = f ? j.finally(Xt) : j;
              } finally {
                D && On();
              }
            }(E = { subscr: S, signal: d.signal, requery: C, querier: t, trans: null }), Promise.resolve(T).then(function(I) {
              o = !0, r = I, g || E.signal.aborted || (b = {}, function(D) {
                for (var j in D) if (A(D, j)) return;
                return 1;
              }(x = S) || m || (tn(Hn, _), m = !0), gi(function() {
                return !g && u.next && u.next(I);
              }));
            }, function(I) {
              o = !1, ["DatabaseClosedError", "AbortError"].includes(I?.name) || g || gi(function() {
                g || u.error && u.error(I);
              });
            }));
          };
          return setTimeout(C, 0), P;
        });
        return a.hasValue = function() {
          return o;
        }, a.getValue = function() {
          return r;
        }, a;
      }
      var dn = Bt;
      function Ui(t) {
        var r = nn;
        try {
          nn = !0, tn.storagemutated.fire(t), Ki(t, !0);
        } finally {
          nn = r;
        }
      }
      M(dn, s(s({}, qn), { delete: function(t) {
        return new dn(t, { addons: [] }).delete();
      }, exists: function(t) {
        return new dn(t, { addons: [] }).open().then(function(r) {
          return r.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(t) {
        try {
          return r = dn.dependencies, o = r.indexedDB, r = r.IDBKeyRange, (Ti(o) ? Promise.resolve(o.databases()).then(function(a) {
            return a.map(function(u) {
              return u.name;
            }).filter(function(u) {
              return u !== xr;
            });
          }) : Ci(o, r).toCollection().primaryKeys()).then(t);
        } catch {
          return Ue(new oe.MissingAPI());
        }
        var r, o;
      }, defineClass: function() {
        return function(t) {
          v(this, t);
        };
      }, ignoreTransaction: function(t) {
        return ne.trans ? ln(ne.transless, t) : t();
      }, vip: Ai, async: function(t) {
        return function() {
          try {
            var r = Fi(t.apply(this, arguments));
            return r && typeof r.then == "function" ? r : ee.resolve(r);
          } catch (o) {
            return Ue(o);
          }
        };
      }, spawn: function(t, r, o) {
        try {
          var a = Fi(t.apply(o, r || []));
          return a && typeof a.then == "function" ? a : ee.resolve(a);
        } catch (u) {
          return Ue(u);
        }
      }, currentTransaction: { get: function() {
        return ne.trans || null;
      } }, waitFor: function(t, r) {
        return r = ee.resolve(typeof t == "function" ? dn.ignoreTransaction(t) : t).timeout(r || 6e4), ne.trans ? ne.trans.waitFor(r) : r;
      }, Promise: ee, debug: { get: function() {
        return B;
      }, set: function(t) {
        le(t);
      } }, derive: re, extend: v, props: M, override: Se, Events: Un, on: tn, liveQuery: ys, extendObservabilitySet: jr, getByKeyPath: Ae, setByKeyPath: F, delByKeyPath: function(t, r) {
        typeof r == "string" ? F(t, r, void 0) : "length" in r && [].map.call(r, function(o) {
          F(t, o, void 0);
        });
      }, shallowClone: Y, deepClone: Ye, getObjectDiff: Mi, cmp: be, asap: Te, minKey: -1 / 0, addons: [], connections: En, errnames: zt, dependencies: Br, cache: hn, semVer: "4.2.0", version: "4.2.0".split(".").map(function(t) {
        return parseInt(t);
      }).reduce(function(t, r, o) {
        return t + r / Math.pow(10, 2 * o);
      }) })), dn.maxKey = Wn(dn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (tn(Hn, function(t) {
        nn || (t = new CustomEvent(wi, { detail: t }), nn = !0, dispatchEvent(t), nn = !1);
      }), addEventListener(wi, function(t) {
        t = t.detail, nn || Ui(t);
      }));
      var Tn, nn = !1, gs = function() {
      };
      return typeof BroadcastChannel < "u" && ((gs = function() {
        (Tn = new BroadcastChannel(wi)).onmessage = function(t) {
          return t.data && Ui(t.data);
        };
      })(), typeof Tn.unref == "function" && Tn.unref(), tn(Hn, function(t) {
        nn || Tn.postMessage(t);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(t) {
        if (!Bt.disableBfCache && t.persisted) {
          B && console.debug("Dexie: handling persisted pagehide"), Tn?.close();
          for (var r = 0, o = En; r < o.length; r++) o[r].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(t) {
        !Bt.disableBfCache && t.persisted && (B && console.debug("Dexie: handling persisted pageshow"), gs(), Ui({ all: new nt(-1 / 0, [[]]) }));
      })), ee.rejectionMapper = function(t, r) {
        return !t || t instanceof Ft || t instanceof TypeError || t instanceof SyntaxError || !t.name || !Gt[t.name] ? t : (r = new Gt[t.name](r || t.message, t), "stack" in t && ie(r, "stack", { get: function() {
          return this.inner.stack;
        } }), r);
      }, le(B), s(Bt, Object.freeze({ __proto__: null, Dexie: Bt, liveQuery: ys, Entity: Ho, cmp: be, PropModification: Vn, replacePrefix: function(t, r) {
        return new Vn({ replacePrefix: [t, r] });
      }, add: function(t) {
        return new Vn({ add: t });
      }, remove: function(t) {
        return new Vn({ remove: t });
      }, default: Bt, RangeSet: nt, mergeRanges: Gn, rangesOverlap: os }), { default: Bt }), Bt;
    });
  }(Yr)), Yr.exports;
}
var Fc = Kc();
const po = /* @__PURE__ */ Rc(Fc), Ns = Symbol.for("Dexie"), yo = globalThis[Ns] || (globalThis[Ns] = po);
if (po.semVer !== yo.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${po.semVer} and ${yo.semVer}`);
const {
  liveQuery: yf,
  mergeRanges: gf,
  rangesOverlap: mf,
  RangeSet: vf,
  cmp: bf,
  Entity: _f,
  PropModification: wf,
  replacePrefix: xf,
  add: Of,
  remove: Pf,
  DexieYProvider: Ef
} = yo;
export {
  Pa as $,
  Hr as A,
  nf as B,
  So as C,
  zs as D,
  Mu as E,
  Qi as F,
  yl as G,
  Vc as H,
  of as I,
  lo as J,
  za as K,
  Yc as L,
  zc as M,
  co as N,
  lf as O,
  sf as P,
  Hc as Q,
  ii as R,
  ro as S,
  Ac as T,
  Rc as U,
  La as V,
  df as W,
  cf as X,
  yo as Y,
  hf as Z,
  Zc as _,
  Ze as a,
  gt as a0,
  Xc as a1,
  vl as a2,
  ca as a3,
  Ga as a4,
  ri as a5,
  Pl as a6,
  El as a7,
  wt as a8,
  Qc as a9,
  Cl as aa,
  uf as ab,
  Fu as ac,
  Lc as ad,
  Ul as ae,
  Gc as af,
  af as ag,
  sn as ah,
  ef as ai,
  fc as aj,
  Jc as ak,
  cc as al,
  ko as am,
  tf as an,
  Mc as ao,
  Wc as ap,
  lc as aq,
  ff as ar,
  pf as as,
  Ic as at,
  mo as b,
  rf as c,
  qs as d,
  dt as e,
  Bc as f,
  Kt as g,
  Nc as h,
  pe as i,
  jt as j,
  fe as k,
  hr as l,
  _o as m,
  Ht as n,
  qc as o,
  Us as p,
  wo as q,
  $i as r,
  Uc as s,
  Ao as t,
  il as u,
  ke as v,
  Bo as w,
  We as x,
  jn as y,
  $c as z
};
