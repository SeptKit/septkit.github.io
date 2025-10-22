/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Qo(n) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const s of n.split(",")) i[s] = 1;
  return (s) => s in i;
}
const et = {}, si = [], En = () => {
}, Mc = () => !1, zo = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // uppercase letter
(n.charCodeAt(2) > 122 || n.charCodeAt(2) < 97), gu = (n) => n.startsWith("onUpdate:"), wt = Object.assign, vs = (n, i) => {
  const s = n.indexOf(i);
  s > -1 && n.splice(s, 1);
}, Lc = Object.prototype.hasOwnProperty, nt = (n, i) => Lc.call(n, i), Re = Array.isArray, ui = (n) => vi(n) === "[object Map]", vu = (n) => vi(n) === "[object Set]", Vs = (n) => vi(n) === "[object Date]", qc = (n) => vi(n) === "[object RegExp]", Me = (n) => typeof n == "function", vt = (n) => typeof n == "string", Sn = (n) => typeof n == "symbol", at = (n) => n !== null && typeof n == "object", bs = (n) => (at(n) || Me(n)) && Me(n.then) && Me(n.catch), bu = Object.prototype.toString, vi = (n) => bu.call(n), Uc = (n) => vi(n).slice(8, -1), _u = (n) => vi(n) === "[object Object]", _s = (n) => vt(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, ci = /* @__PURE__ */ Qo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Jo = (n) => {
  const i = /* @__PURE__ */ Object.create(null);
  return (s) => i[s] || (i[s] = n(s));
}, Vc = /-(\w)/g, Cn = Jo(
  (n) => n.replace(Vc, (i, s) => s ? s.toUpperCase() : "")
), Hc = /\B([A-Z])/g, bi = Jo(
  (n) => n.replace(Hc, "-$1").toLowerCase()
), ws = Jo((n) => n.charAt(0).toUpperCase() + n.slice(1)), So = Jo(
  (n) => n ? `on${ws(n)}` : ""
), Xt = (n, i) => !Object.is(n, i), no = (n, ...i) => {
  for (let s = 0; s < n.length; s++)
    n[s](...i);
}, Ga = (n, i, s, u = !1) => {
  Object.defineProperty(n, i, {
    configurable: !0,
    enumerable: !1,
    writable: u,
    value: s
  });
}, $c = (n) => {
  const i = parseFloat(n);
  return isNaN(i) ? n : i;
}, Wc = (n) => {
  const i = vt(n) ? Number(n) : NaN;
  return isNaN(i) ? n : i;
};
let Hs;
const Zo = () => Hs || (Hs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), Gc = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", Yc = /* @__PURE__ */ Qo(Gc);
function ea(n) {
  if (Re(n)) {
    const i = {};
    for (let s = 0; s < n.length; s++) {
      const u = n[s], l = vt(u) ? Jc(u) : ea(u);
      if (l)
        for (const h in l)
          i[h] = l[h];
    }
    return i;
  } else if (vt(n) || at(n))
    return n;
}
const Xc = /;(?![^(]*\))/g, Qc = /:([^]+)/, zc = /\/\*[^]*?\*\//g;
function Jc(n) {
  const i = {};
  return n.replace(zc, "").split(Xc).forEach((s) => {
    if (s) {
      const u = s.split(Qc);
      u.length > 1 && (i[u[0].trim()] = u[1].trim());
    }
  }), i;
}
function ta(n) {
  let i = "";
  if (vt(n))
    i = n;
  else if (Re(n))
    for (let s = 0; s < n.length; s++) {
      const u = ta(n[s]);
      u && (i += u + " ");
    }
  else if (at(n))
    for (const s in n)
      n[s] && (i += s + " ");
  return i.trim();
}
function nd(n) {
  if (!n) return null;
  let { class: i, style: s } = n;
  return i && !vt(i) && (n.class = ta(i)), s && (n.style = ea(s)), n;
}
const Zc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", rd = /* @__PURE__ */ Qo(Zc);
function id(n) {
  return !!n || n === "";
}
function el(n, i) {
  if (n.length !== i.length) return !1;
  let s = !0;
  for (let u = 0; s && u < n.length; u++)
    s = xs(n[u], i[u]);
  return s;
}
function xs(n, i) {
  if (n === i) return !0;
  let s = Vs(n), u = Vs(i);
  if (s || u)
    return s && u ? n.getTime() === i.getTime() : !1;
  if (s = Sn(n), u = Sn(i), s || u)
    return n === i;
  if (s = Re(n), u = Re(i), s || u)
    return s && u ? el(n, i) : !1;
  if (s = at(n), u = at(i), s || u) {
    if (!s || !u)
      return !1;
    const l = Object.keys(n).length, h = Object.keys(i).length;
    if (l !== h)
      return !1;
    for (const y in n) {
      const b = n.hasOwnProperty(y), A = i.hasOwnProperty(y);
      if (b && !A || !b && A || !xs(n[y], i[y]))
        return !1;
    }
  }
  return String(n) === String(i);
}
function od(n, i) {
  return n.findIndex((s) => xs(s, i));
}
const wu = (n) => !!(n && n.__v_isRef === !0), tl = (n) => vt(n) ? n : n == null ? "" : Re(n) || at(n) && (n.toString === bu || !Me(n.toString)) ? wu(n) ? tl(n.value) : JSON.stringify(n, xu, 2) : String(n), xu = (n, i) => wu(i) ? xu(n, i.value) : ui(i) ? {
  [`Map(${i.size})`]: [...i.entries()].reduce(
    (s, [u, l], h) => (s[Ka(u, h) + " =>"] = l, s),
    {}
  )
} : vu(i) ? {
  [`Set(${i.size})`]: [...i.values()].map((s) => Ka(s))
} : Sn(i) ? Ka(i) : at(i) && !Re(i) && !_u(i) ? String(i) : i, Ka = (n, i = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Sn(n) ? `Symbol(${(s = n.description) != null ? s : i})` : n
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let jt;
class Tu {
  constructor(i = !1) {
    this.detached = i, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = jt, !i && jt && (this.index = (jt.scopes || (jt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let i, s;
      if (this.scopes)
        for (i = 0, s = this.scopes.length; i < s; i++)
          this.scopes[i].pause();
      for (i = 0, s = this.effects.length; i < s; i++)
        this.effects[i].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let i, s;
      if (this.scopes)
        for (i = 0, s = this.scopes.length; i < s; i++)
          this.scopes[i].resume();
      for (i = 0, s = this.effects.length; i < s; i++)
        this.effects[i].resume();
    }
  }
  run(i) {
    if (this._active) {
      const s = jt;
      try {
        return jt = this, i();
      } finally {
        jt = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = jt, jt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (jt = this.prevScope, this.prevScope = void 0);
  }
  stop(i) {
    if (this._active) {
      this._active = !1;
      let s, u;
      for (s = 0, u = this.effects.length; s < u; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, u = this.cleanups.length; s < u; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, u = this.scopes.length; s < u; s++)
          this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !i) {
        const l = this.parent.scopes.pop();
        l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ad(n) {
  return new Tu(n);
}
function Eu() {
  return jt;
}
function nl(n, i = !1) {
  jt && jt.cleanups.push(n);
}
let ut;
const ja = /* @__PURE__ */ new WeakSet();
class Ko {
  constructor(i) {
    this.fn = i, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, jt && jt.active && jt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ja.has(this) && (ja.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Cu(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, $s(this), Au(this);
    const i = ut, s = On;
    ut = this, On = !0;
    try {
      return this.fn();
    } finally {
      Nu(this), ut = i, On = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let i = this.deps; i; i = i.nextDep)
        Os(i);
      this.deps = this.depsTail = void 0, $s(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ja.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ya(this) && this.run();
  }
  get dirty() {
    return Ya(this);
  }
}
let Ou = 0, ro, io;
function Cu(n, i = !1) {
  if (n.flags |= 8, i) {
    n.next = io, io = n;
    return;
  }
  n.next = ro, ro = n;
}
function Ts() {
  Ou++;
}
function Es() {
  if (--Ou > 0)
    return;
  if (io) {
    let i = io;
    for (io = void 0; i; ) {
      const s = i.next;
      i.next = void 0, i.flags &= -9, i = s;
    }
  }
  let n;
  for (; ro; ) {
    let i = ro;
    for (ro = void 0; i; ) {
      const s = i.next;
      if (i.next = void 0, i.flags &= -9, i.flags & 1)
        try {
          i.trigger();
        } catch (u) {
          n || (n = u);
        }
      i = s;
    }
  }
  if (n) throw n;
}
function Au(n) {
  for (let i = n.deps; i; i = i.nextDep)
    i.version = -1, i.prevActiveLink = i.dep.activeLink, i.dep.activeLink = i;
}
function Nu(n) {
  let i, s = n.depsTail, u = s;
  for (; u; ) {
    const l = u.prevDep;
    u.version === -1 ? (u === s && (s = l), Os(u), rl(u)) : i = u, u.dep.activeLink = u.prevActiveLink, u.prevActiveLink = void 0, u = l;
  }
  n.deps = i, n.depsTail = s;
}
function Ya(n) {
  for (let i = n.deps; i; i = i.nextDep)
    if (i.dep.version !== i.version || i.dep.computed && (Pu(i.dep.computed) || i.dep.version !== i.version))
      return !0;
  return !!n._dirty;
}
function Pu(n) {
  if (n.flags & 4 && !(n.flags & 16) || (n.flags &= -17, n.globalVersion === lo) || (n.globalVersion = lo, !n.isSSR && n.flags & 128 && (!n.deps && !n._dirty || !Ya(n))))
    return;
  n.flags |= 2;
  const i = n.dep, s = ut, u = On;
  ut = n, On = !0;
  try {
    Au(n);
    const l = n.fn(n._value);
    (i.version === 0 || Xt(l, n._value)) && (n.flags |= 128, n._value = l, i.version++);
  } catch (l) {
    throw i.version++, l;
  } finally {
    ut = s, On = u, Nu(n), n.flags &= -3;
  }
}
function Os(n, i = !1) {
  const { dep: s, prevSub: u, nextSub: l } = n;
  if (u && (u.nextSub = l, n.prevSub = void 0), l && (l.prevSub = u, n.nextSub = void 0), s.subs === n && (s.subs = u, !u && s.computed)) {
    s.computed.flags &= -5;
    for (let h = s.computed.deps; h; h = h.nextDep)
      Os(h, !0);
  }
  !i && !--s.sc && s.map && s.map.delete(s.key);
}
function rl(n) {
  const { prevDep: i, nextDep: s } = n;
  i && (i.nextDep = s, n.prevDep = void 0), s && (s.prevDep = i, n.nextDep = void 0);
}
function sd(n, i) {
  n.effect instanceof Ko && (n = n.effect.fn);
  const s = new Ko(n);
  i && wt(s, i);
  try {
    s.run();
  } catch (l) {
    throw s.stop(), l;
  }
  const u = s.run.bind(s);
  return u.effect = s, u;
}
function ud(n) {
  n.effect.stop();
}
let On = !0;
const Su = [];
function or() {
  Su.push(On), On = !1;
}
function ar() {
  const n = Su.pop();
  On = n === void 0 ? !0 : n;
}
function $s(n) {
  const { cleanup: i } = n;
  if (n.cleanup = void 0, i) {
    const s = ut;
    ut = void 0;
    try {
      i();
    } finally {
      ut = s;
    }
  }
}
let lo = 0;
class il {
  constructor(i, s) {
    this.sub = i, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class na {
  // TODO isolatedDeclarations "__v_skip"
  constructor(i) {
    this.computed = i, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(i) {
    if (!ut || !On || ut === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== ut)
      s = this.activeLink = new il(ut, this), ut.deps ? (s.prevDep = ut.depsTail, ut.depsTail.nextDep = s, ut.depsTail = s) : ut.deps = ut.depsTail = s, ku(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const u = s.nextDep;
      u.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = u), s.prevDep = ut.depsTail, s.nextDep = void 0, ut.depsTail.nextDep = s, ut.depsTail = s, ut.deps === s && (ut.deps = u);
    }
    return s;
  }
  trigger(i) {
    this.version++, lo++, this.notify(i);
  }
  notify(i) {
    Ts();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Es();
    }
  }
}
function ku(n) {
  if (n.dep.sc++, n.sub.flags & 4) {
    const i = n.dep.computed;
    if (i && !n.dep.subs) {
      i.flags |= 20;
      for (let u = i.deps; u; u = u.nextDep)
        ku(u);
    }
    const s = n.dep.subs;
    s !== n && (n.prevSub = s, s && (s.nextSub = n)), n.dep.subs = n;
  }
}
const jo = /* @__PURE__ */ new WeakMap(), Xr = Symbol(
  ""
), Xa = Symbol(
  ""
), fo = Symbol(
  ""
);
function Mt(n, i, s) {
  if (On && ut) {
    let u = jo.get(n);
    u || jo.set(n, u = /* @__PURE__ */ new Map());
    let l = u.get(s);
    l || (u.set(s, l = new na()), l.map = u, l.key = s), l.track();
  }
}
function rr(n, i, s, u, l, h) {
  const y = jo.get(n);
  if (!y) {
    lo++;
    return;
  }
  const b = (A) => {
    A && A.trigger();
  };
  if (Ts(), i === "clear")
    y.forEach(b);
  else {
    const A = Re(n), K = A && _s(s);
    if (A && s === "length") {
      const k = Number(u);
      y.forEach((D, H) => {
        (H === "length" || H === fo || !Sn(H) && H >= k) && b(D);
      });
    } else
      switch ((s !== void 0 || y.has(void 0)) && b(y.get(s)), K && b(y.get(fo)), i) {
        case "add":
          A ? K && b(y.get("length")) : (b(y.get(Xr)), ui(n) && b(y.get(Xa)));
          break;
        case "delete":
          A || (b(y.get(Xr)), ui(n) && b(y.get(Xa)));
          break;
        case "set":
          ui(n) && b(y.get(Xr));
          break;
      }
  }
  Es();
}
function ol(n, i) {
  const s = jo.get(n);
  return s && s.get(i);
}
function ni(n) {
  const i = Ze(n);
  return i === n ? i : (Mt(i, "iterate", fo), dn(n) ? i : i.map(Kt));
}
function ra(n) {
  return Mt(n = Ze(n), "iterate", fo), n;
}
const al = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ma(this, Symbol.iterator, Kt);
  },
  concat(...n) {
    return ni(this).concat(
      ...n.map((i) => Re(i) ? ni(i) : i)
    );
  },
  entries() {
    return Ma(this, "entries", (n) => (n[1] = Kt(n[1]), n));
  },
  every(n, i) {
    return nr(this, "every", n, i, void 0, arguments);
  },
  filter(n, i) {
    return nr(this, "filter", n, i, (s) => s.map(Kt), arguments);
  },
  find(n, i) {
    return nr(this, "find", n, i, Kt, arguments);
  },
  findIndex(n, i) {
    return nr(this, "findIndex", n, i, void 0, arguments);
  },
  findLast(n, i) {
    return nr(this, "findLast", n, i, Kt, arguments);
  },
  findLastIndex(n, i) {
    return nr(this, "findLastIndex", n, i, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(n, i) {
    return nr(this, "forEach", n, i, void 0, arguments);
  },
  includes(...n) {
    return La(this, "includes", n);
  },
  indexOf(...n) {
    return La(this, "indexOf", n);
  },
  join(n) {
    return ni(this).join(n);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...n) {
    return La(this, "lastIndexOf", n);
  },
  map(n, i) {
    return nr(this, "map", n, i, void 0, arguments);
  },
  pop() {
    return Zi(this, "pop");
  },
  push(...n) {
    return Zi(this, "push", n);
  },
  reduce(n, ...i) {
    return Ws(this, "reduce", n, i);
  },
  reduceRight(n, ...i) {
    return Ws(this, "reduceRight", n, i);
  },
  shift() {
    return Zi(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(n, i) {
    return nr(this, "some", n, i, void 0, arguments);
  },
  splice(...n) {
    return Zi(this, "splice", n);
  },
  toReversed() {
    return ni(this).toReversed();
  },
  toSorted(n) {
    return ni(this).toSorted(n);
  },
  toSpliced(...n) {
    return ni(this).toSpliced(...n);
  },
  unshift(...n) {
    return Zi(this, "unshift", n);
  },
  values() {
    return Ma(this, "values", Kt);
  }
};
function Ma(n, i, s) {
  const u = ra(n), l = u[i]();
  return u !== n && !dn(n) && (l._next = l.next, l.next = () => {
    const h = l._next();
    return h.value && (h.value = s(h.value)), h;
  }), l;
}
const sl = Array.prototype;
function nr(n, i, s, u, l, h) {
  const y = ra(n), b = y !== n && !dn(n), A = y[i];
  if (A !== sl[i]) {
    const D = A.apply(n, h);
    return b ? Kt(D) : D;
  }
  let K = s;
  y !== n && (b ? K = function(D, H) {
    return s.call(this, Kt(D), H, n);
  } : s.length > 2 && (K = function(D, H) {
    return s.call(this, D, H, n);
  }));
  const k = A.call(y, K, u);
  return b && l ? l(k) : k;
}
function Ws(n, i, s, u) {
  const l = ra(n);
  let h = s;
  return l !== n && (dn(n) ? s.length > 3 && (h = function(y, b, A) {
    return s.call(this, y, b, A, n);
  }) : h = function(y, b, A) {
    return s.call(this, y, Kt(b), A, n);
  }), l[i](h, ...u);
}
function La(n, i, s) {
  const u = Ze(n);
  Mt(u, "iterate", fo);
  const l = u[i](...s);
  return (l === -1 || l === !1) && Ns(s[0]) ? (s[0] = Ze(s[0]), u[i](...s)) : l;
}
function Zi(n, i, s = []) {
  or(), Ts();
  const u = Ze(n)[i].apply(n, s);
  return Es(), ar(), u;
}
const ul = /* @__PURE__ */ Qo("__proto__,__v_isRef,__isVue"), Iu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(Sn)
);
function cl(n) {
  Sn(n) || (n = String(n));
  const i = Ze(this);
  return Mt(i, "has", n), i.hasOwnProperty(n);
}
class Du {
  constructor(i = !1, s = !1) {
    this._isReadonly = i, this._isShallow = s;
  }
  get(i, s, u) {
    if (s === "__v_skip") return i.__v_skip;
    const l = this._isReadonly, h = this._isShallow;
    if (s === "__v_isReactive")
      return !l;
    if (s === "__v_isReadonly")
      return l;
    if (s === "__v_isShallow")
      return h;
    if (s === "__v_raw")
      return u === (l ? h ? Mu : ju : h ? Ku : Bu).get(i) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(i) === Object.getPrototypeOf(u) ? i : void 0;
    const y = Re(i);
    if (!l) {
      let A;
      if (y && (A = al[s]))
        return A;
      if (s === "hasOwnProperty")
        return cl;
    }
    const b = Reflect.get(
      i,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      At(i) ? i : u
    );
    return (Sn(s) ? Iu.has(s) : ul(s)) || (l || Mt(i, "get", s), h) ? b : At(b) ? y && _s(s) ? b : b.value : at(b) ? l ? As(b) : Cs(b) : b;
  }
}
class Ru extends Du {
  constructor(i = !1) {
    super(!1, i);
  }
  set(i, s, u, l) {
    let h = i[s];
    if (!this._isShallow) {
      const A = yr(h);
      if (!dn(u) && !yr(u) && (h = Ze(h), u = Ze(u)), !Re(i) && At(h) && !At(u))
        return A ? !1 : (h.value = u, !0);
    }
    const y = Re(i) && _s(s) ? Number(s) < i.length : nt(i, s), b = Reflect.set(
      i,
      s,
      u,
      At(i) ? i : l
    );
    return i === Ze(l) && (y ? Xt(u, h) && rr(i, "set", s, u) : rr(i, "add", s, u)), b;
  }
  deleteProperty(i, s) {
    const u = nt(i, s);
    i[s];
    const l = Reflect.deleteProperty(i, s);
    return l && u && rr(i, "delete", s, void 0), l;
  }
  has(i, s) {
    const u = Reflect.has(i, s);
    return (!Sn(s) || !Iu.has(s)) && Mt(i, "has", s), u;
  }
  ownKeys(i) {
    return Mt(
      i,
      "iterate",
      Re(i) ? "length" : Xr
    ), Reflect.ownKeys(i);
  }
}
class Fu extends Du {
  constructor(i = !1) {
    super(!0, i);
  }
  set(i, s) {
    return !0;
  }
  deleteProperty(i, s) {
    return !0;
  }
}
const ll = /* @__PURE__ */ new Ru(), fl = /* @__PURE__ */ new Fu(), hl = /* @__PURE__ */ new Ru(!0), dl = /* @__PURE__ */ new Fu(!0), Qa = (n) => n, wo = (n) => Reflect.getPrototypeOf(n);
function pl(n, i, s) {
  return function(...u) {
    const l = this.__v_raw, h = Ze(l), y = ui(h), b = n === "entries" || n === Symbol.iterator && y, A = n === "keys" && y, K = l[n](...u), k = s ? Qa : i ? Mo : Kt;
    return !i && Mt(
      h,
      "iterate",
      A ? Xa : Xr
    ), {
      // iterator protocol
      next() {
        const { value: D, done: H } = K.next();
        return H ? { value: D, done: H } : {
          value: b ? [k(D[0]), k(D[1])] : k(D),
          done: H
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function xo(n) {
  return function(...i) {
    return n === "delete" ? !1 : n === "clear" ? void 0 : this;
  };
}
function yl(n, i) {
  const s = {
    get(l) {
      const h = this.__v_raw, y = Ze(h), b = Ze(l);
      n || (Xt(l, b) && Mt(y, "get", l), Mt(y, "get", b));
      const { has: A } = wo(y), K = i ? Qa : n ? Mo : Kt;
      if (A.call(y, l))
        return K(h.get(l));
      if (A.call(y, b))
        return K(h.get(b));
      h !== y && h.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !n && Mt(Ze(l), "iterate", Xr), Reflect.get(l, "size", l);
    },
    has(l) {
      const h = this.__v_raw, y = Ze(h), b = Ze(l);
      return n || (Xt(l, b) && Mt(y, "has", l), Mt(y, "has", b)), l === b ? h.has(l) : h.has(l) || h.has(b);
    },
    forEach(l, h) {
      const y = this, b = y.__v_raw, A = Ze(b), K = i ? Qa : n ? Mo : Kt;
      return !n && Mt(A, "iterate", Xr), b.forEach((k, D) => l.call(h, K(k), K(D), y));
    }
  };
  return wt(
    s,
    n ? {
      add: xo("add"),
      set: xo("set"),
      delete: xo("delete"),
      clear: xo("clear")
    } : {
      add(l) {
        !i && !dn(l) && !yr(l) && (l = Ze(l));
        const h = Ze(this);
        return wo(h).has.call(h, l) || (h.add(l), rr(h, "add", l, l)), this;
      },
      set(l, h) {
        !i && !dn(h) && !yr(h) && (h = Ze(h));
        const y = Ze(this), { has: b, get: A } = wo(y);
        let K = b.call(y, l);
        K || (l = Ze(l), K = b.call(y, l));
        const k = A.call(y, l);
        return y.set(l, h), K ? Xt(h, k) && rr(y, "set", l, h) : rr(y, "add", l, h), this;
      },
      delete(l) {
        const h = Ze(this), { has: y, get: b } = wo(h);
        let A = y.call(h, l);
        A || (l = Ze(l), A = y.call(h, l)), b && b.call(h, l);
        const K = h.delete(l);
        return A && rr(h, "delete", l, void 0), K;
      },
      clear() {
        const l = Ze(this), h = l.size !== 0, y = l.clear();
        return h && rr(
          l,
          "clear",
          void 0,
          void 0
        ), y;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((l) => {
    s[l] = pl(l, n, i);
  }), s;
}
function ia(n, i) {
  const s = yl(n, i);
  return (u, l, h) => l === "__v_isReactive" ? !n : l === "__v_isReadonly" ? n : l === "__v_raw" ? u : Reflect.get(
    nt(s, l) && l in u ? s : u,
    l,
    h
  );
}
const ml = {
  get: /* @__PURE__ */ ia(!1, !1)
}, gl = {
  get: /* @__PURE__ */ ia(!1, !0)
}, vl = {
  get: /* @__PURE__ */ ia(!0, !1)
}, bl = {
  get: /* @__PURE__ */ ia(!0, !0)
}, Bu = /* @__PURE__ */ new WeakMap(), Ku = /* @__PURE__ */ new WeakMap(), ju = /* @__PURE__ */ new WeakMap(), Mu = /* @__PURE__ */ new WeakMap();
function _l(n) {
  switch (n) {
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
function wl(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : _l(Uc(n));
}
function Cs(n) {
  return yr(n) ? n : oa(
    n,
    !1,
    ll,
    ml,
    Bu
  );
}
function xl(n) {
  return oa(
    n,
    !1,
    hl,
    gl,
    Ku
  );
}
function As(n) {
  return oa(
    n,
    !0,
    fl,
    vl,
    ju
  );
}
function cd(n) {
  return oa(
    n,
    !0,
    dl,
    bl,
    Mu
  );
}
function oa(n, i, s, u, l) {
  if (!at(n) || n.__v_raw && !(i && n.__v_isReactive))
    return n;
  const h = wl(n);
  if (h === 0)
    return n;
  const y = l.get(n);
  if (y)
    return y;
  const b = new Proxy(
    n,
    h === 2 ? u : s
  );
  return l.set(n, b), b;
}
function Qr(n) {
  return yr(n) ? Qr(n.__v_raw) : !!(n && n.__v_isReactive);
}
function yr(n) {
  return !!(n && n.__v_isReadonly);
}
function dn(n) {
  return !!(n && n.__v_isShallow);
}
function Ns(n) {
  return n ? !!n.__v_raw : !1;
}
function Ze(n) {
  const i = n && n.__v_raw;
  return i ? Ze(i) : n;
}
function Tl(n) {
  return !nt(n, "__v_skip") && Object.isExtensible(n) && Ga(n, "__v_skip", !0), n;
}
const Kt = (n) => at(n) ? Cs(n) : n, Mo = (n) => at(n) ? As(n) : n;
function At(n) {
  return n ? n.__v_isRef === !0 : !1;
}
function li(n) {
  return Lu(n, !1);
}
function za(n) {
  return Lu(n, !0);
}
function Lu(n, i) {
  return At(n) ? n : new El(n, i);
}
class El {
  constructor(i, s) {
    this.dep = new na(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? i : Ze(i), this._value = s ? i : Kt(i), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(i) {
    const s = this._rawValue, u = this.__v_isShallow || dn(i) || yr(i);
    i = u ? i : Ze(i), Xt(i, s) && (this._rawValue = i, this._value = u ? i : Kt(i), this.dep.trigger());
  }
}
function ld(n) {
  n.dep && n.dep.trigger();
}
function qu(n) {
  return At(n) ? n.value : n;
}
function dr(n) {
  return Me(n) ? n() : qu(n);
}
const Ol = {
  get: (n, i, s) => i === "__v_raw" ? n : qu(Reflect.get(n, i, s)),
  set: (n, i, s, u) => {
    const l = n[i];
    return At(l) && !At(s) ? (l.value = s, !0) : Reflect.set(n, i, s, u);
  }
};
function Uu(n) {
  return Qr(n) ? n : new Proxy(n, Ol);
}
class Cl {
  constructor(i) {
    this.__v_isRef = !0, this._value = void 0;
    const s = this.dep = new na(), { get: u, set: l } = i(s.track.bind(s), s.trigger.bind(s));
    this._get = u, this._set = l;
  }
  get value() {
    return this._value = this._get();
  }
  set value(i) {
    this._set(i);
  }
}
function Al(n) {
  return new Cl(n);
}
function fd(n) {
  const i = Re(n) ? new Array(n.length) : {};
  for (const s in n)
    i[s] = Vu(n, s);
  return i;
}
class Nl {
  constructor(i, s, u) {
    this._object = i, this._key = s, this._defaultValue = u, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const i = this._object[this._key];
    return this._value = i === void 0 ? this._defaultValue : i;
  }
  set value(i) {
    this._object[this._key] = i;
  }
  get dep() {
    return ol(Ze(this._object), this._key);
  }
}
class Pl {
  constructor(i) {
    this._getter = i, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function hd(n, i, s) {
  return At(n) ? n : Me(n) ? new Pl(n) : at(n) && arguments.length > 1 ? Vu(n, i, s) : li(n);
}
function Vu(n, i, s) {
  const u = n[i];
  return At(u) ? u : new Nl(n, i, s);
}
class Sl {
  constructor(i, s, u) {
    this.fn = i, this.setter = s, this._value = void 0, this.dep = new na(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = lo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = u;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ut !== this)
      return Cu(this, !0), !0;
  }
  get value() {
    const i = this.dep.track();
    return Pu(this), i && (i.version = this.dep.version), this._value;
  }
  set value(i) {
    this.setter && this.setter(i);
  }
}
function kl(n, i, s = !1) {
  let u, l;
  return Me(n) ? u = n : (u = n.get, l = n.set), new Sl(u, l, s);
}
const dd = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, pd = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
}, To = {}, Lo = /* @__PURE__ */ new WeakMap();
let cr;
function yd() {
  return cr;
}
function Il(n, i = !1, s = cr) {
  if (s) {
    let u = Lo.get(s);
    u || Lo.set(s, u = []), u.push(n);
  }
}
function Dl(n, i, s = et) {
  const { immediate: u, deep: l, once: h, scheduler: y, augmentJob: b, call: A } = s, K = (M) => l ? M : dn(M) || l === !1 || l === 0 ? ir(M, 1) : ir(M);
  let k, D, H, ne, G = !1, X = !1;
  if (At(n) ? (D = () => n.value, G = dn(n)) : Qr(n) ? (D = () => K(n), G = !0) : Re(n) ? (X = !0, G = n.some((M) => Qr(M) || dn(M)), D = () => n.map((M) => {
    if (At(M))
      return M.value;
    if (Qr(M))
      return K(M);
    if (Me(M))
      return A ? A(M, 2) : M();
  })) : Me(n) ? i ? D = A ? () => A(n, 2) : n : D = () => {
    if (H) {
      or();
      try {
        H();
      } finally {
        ar();
      }
    }
    const M = cr;
    cr = k;
    try {
      return A ? A(n, 3, [ne]) : n(ne);
    } finally {
      cr = M;
    }
  } : D = En, i && l) {
    const M = D, oe = l === !0 ? 1 / 0 : l;
    D = () => ir(M(), oe);
  }
  const Te = Eu(), be = () => {
    k.stop(), Te && Te.active && vs(Te.effects, k);
  };
  if (h && i) {
    const M = i;
    i = (...oe) => {
      M(...oe), be();
    };
  }
  let ue = X ? new Array(n.length).fill(To) : To;
  const q = (M) => {
    if (!(!(k.flags & 1) || !k.dirty && !M))
      if (i) {
        const oe = k.run();
        if (l || G || (X ? oe.some((se, W) => Xt(se, ue[W])) : Xt(oe, ue))) {
          H && H();
          const se = cr;
          cr = k;
          try {
            const W = [
              oe,
              // pass undefined as the old value when it's changed for the first time
              ue === To ? void 0 : X && ue[0] === To ? [] : ue,
              ne
            ];
            ue = oe, A ? A(i, 3, W) : (
              // @ts-expect-error
              i(...W)
            );
          } finally {
            cr = se;
          }
        }
      } else
        k.run();
  };
  return b && b(q), k = new Ko(D), k.scheduler = y ? () => y(q, !1) : q, ne = (M) => Il(M, !1, k), H = k.onStop = () => {
    const M = Lo.get(k);
    if (M) {
      if (A)
        A(M, 4);
      else
        for (const oe of M) oe();
      Lo.delete(k);
    }
  }, i ? u ? q(!0) : ue = k.run() : y ? y(q.bind(null, !0), !0) : k.run(), be.pause = k.pause.bind(k), be.resume = k.resume.bind(k), be.stop = be, be;
}
function ir(n, i = 1 / 0, s) {
  if (i <= 0 || !at(n) || n.__v_skip || (s = s || /* @__PURE__ */ new Set(), s.has(n)))
    return n;
  if (s.add(n), i--, At(n))
    ir(n.value, i, s);
  else if (Re(n))
    for (let u = 0; u < n.length; u++)
      ir(n[u], i, s);
  else if (vu(n) || ui(n))
    n.forEach((u) => {
      ir(u, i, s);
    });
  else if (_u(n)) {
    for (const u in n)
      ir(n[u], i, s);
    for (const u of Object.getOwnPropertySymbols(n))
      Object.prototype.propertyIsEnumerable.call(n, u) && ir(n[u], i, s);
  }
  return n;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Hu = [];
function Rl(n) {
  Hu.push(n);
}
function Fl() {
  Hu.pop();
}
function md(n, i) {
}
const gd = {
  SETUP_FUNCTION: 0,
  0: "SETUP_FUNCTION",
  RENDER_FUNCTION: 1,
  1: "RENDER_FUNCTION",
  NATIVE_EVENT_HANDLER: 5,
  5: "NATIVE_EVENT_HANDLER",
  COMPONENT_EVENT_HANDLER: 6,
  6: "COMPONENT_EVENT_HANDLER",
  VNODE_HOOK: 7,
  7: "VNODE_HOOK",
  DIRECTIVE_HOOK: 8,
  8: "DIRECTIVE_HOOK",
  TRANSITION_HOOK: 9,
  9: "TRANSITION_HOOK",
  APP_ERROR_HANDLER: 10,
  10: "APP_ERROR_HANDLER",
  APP_WARN_HANDLER: 11,
  11: "APP_WARN_HANDLER",
  FUNCTION_REF: 12,
  12: "FUNCTION_REF",
  ASYNC_COMPONENT_LOADER: 13,
  13: "ASYNC_COMPONENT_LOADER",
  SCHEDULER: 14,
  14: "SCHEDULER",
  COMPONENT_UPDATE: 15,
  15: "COMPONENT_UPDATE",
  APP_UNMOUNT_CLEANUP: 16,
  16: "APP_UNMOUNT_CLEANUP"
}, Bl = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function go(n, i, s, u) {
  try {
    return u ? n(...u) : n();
  } catch (l) {
    _i(l, i, s);
  }
}
function kn(n, i, s, u) {
  if (Me(n)) {
    const l = go(n, i, s, u);
    return l && bs(l) && l.catch((h) => {
      _i(h, i, s);
    }), l;
  }
  if (Re(n)) {
    const l = [];
    for (let h = 0; h < n.length; h++)
      l.push(kn(n[h], i, s, u));
    return l;
  }
}
function _i(n, i, s, u = !0) {
  const l = i ? i.vnode : null, { errorHandler: h, throwUnhandledErrorInProduction: y } = i && i.appContext.config || et;
  if (i) {
    let b = i.parent;
    const A = i.proxy, K = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; b; ) {
      const k = b.ec;
      if (k) {
        for (let D = 0; D < k.length; D++)
          if (k[D](n, A, K) === !1)
            return;
      }
      b = b.parent;
    }
    if (h) {
      or(), go(h, null, 10, [
        n,
        A,
        K
      ]), ar();
      return;
    }
  }
  Kl(n, s, l, u, y);
}
function Kl(n, i, s, u = !0, l = !1) {
  if (l)
    throw n;
  console.error(n);
}
const Qt = [];
let Nn = -1;
const fi = [];
let lr = null, ii = 0;
const $u = /* @__PURE__ */ Promise.resolve();
let qo = null;
function jl(n) {
  const i = qo || $u;
  return n ? i.then(this ? n.bind(this) : n) : i;
}
function Ml(n) {
  let i = Nn + 1, s = Qt.length;
  for (; i < s; ) {
    const u = i + s >>> 1, l = Qt[u], h = ho(l);
    h < n || h === n && l.flags & 2 ? i = u + 1 : s = u;
  }
  return i;
}
function Ps(n) {
  if (!(n.flags & 1)) {
    const i = ho(n), s = Qt[Qt.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(n.flags & 2) && i >= ho(s) ? Qt.push(n) : Qt.splice(Ml(i), 0, n), n.flags |= 1, Wu();
  }
}
function Wu() {
  qo || (qo = $u.then(Gu));
}
function Ja(n) {
  Re(n) ? fi.push(...n) : lr && n.id === -1 ? lr.splice(ii + 1, 0, n) : n.flags & 1 || (fi.push(n), n.flags |= 1), Wu();
}
function Gs(n, i, s = Nn + 1) {
  for (; s < Qt.length; s++) {
    const u = Qt[s];
    if (u && u.flags & 2) {
      if (n && u.id !== n.uid)
        continue;
      Qt.splice(s, 1), s--, u.flags & 4 && (u.flags &= -2), u(), u.flags & 4 || (u.flags &= -2);
    }
  }
}
function Uo(n) {
  if (fi.length) {
    const i = [...new Set(fi)].sort(
      (s, u) => ho(s) - ho(u)
    );
    if (fi.length = 0, lr) {
      lr.push(...i);
      return;
    }
    for (lr = i, ii = 0; ii < lr.length; ii++) {
      const s = lr[ii];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    lr = null, ii = 0;
  }
}
const ho = (n) => n.id == null ? n.flags & 2 ? -1 : 1 / 0 : n.id;
function Gu(n) {
  try {
    for (Nn = 0; Nn < Qt.length; Nn++) {
      const i = Qt[Nn];
      i && !(i.flags & 8) && (i.flags & 4 && (i.flags &= -2), go(
        i,
        i.i,
        i.i ? 15 : 14
      ), i.flags & 4 || (i.flags &= -2));
    }
  } finally {
    for (; Nn < Qt.length; Nn++) {
      const i = Qt[Nn];
      i && (i.flags &= -2);
    }
    Nn = -1, Qt.length = 0, Uo(), qo = null, (Qt.length || fi.length) && Gu();
  }
}
let oi, Eo = [];
function Yu(n, i) {
  var s, u;
  oi = n, oi ? (oi.enabled = !0, Eo.forEach(({ event: l, args: h }) => oi.emit(l, ...h)), Eo = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((u = (s = window.navigator) == null ? void 0 : s.userAgent) != null && u.includes("jsdom")) ? ((i.__VUE_DEVTOOLS_HOOK_REPLAY__ = i.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((h) => {
    Yu(h, i);
  }), setTimeout(() => {
    oi || (i.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Eo = []);
  }, 3e3)) : Eo = [];
}
let Ct = null, aa = null;
function po(n) {
  const i = Ct;
  return Ct = n, aa = n && n.type.__scopeId || null, i;
}
function vd(n) {
  aa = n;
}
function bd() {
  aa = null;
}
const _d = (n) => Xu;
function Xu(n, i = Ct, s) {
  if (!i || n._n)
    return n;
  const u = (...l) => {
    u._d && su(-1);
    const h = po(i);
    let y;
    try {
      y = n(...l);
    } finally {
      po(h), u._d && su(1);
    }
    return y;
  };
  return u._n = !0, u._c = !0, u._d = !0, u;
}
function wd(n, i) {
  if (Ct === null)
    return n;
  const s = _o(Ct), u = n.dirs || (n.dirs = []);
  for (let l = 0; l < i.length; l++) {
    let [h, y, b, A = et] = i[l];
    h && (Me(h) && (h = {
      mounted: h,
      updated: h
    }), h.deep && ir(y), u.push({
      dir: h,
      instance: s,
      value: y,
      oldValue: void 0,
      arg: b,
      modifiers: A
    }));
  }
  return n;
}
function Pn(n, i, s, u) {
  const l = n.dirs, h = i && i.dirs;
  for (let y = 0; y < l.length; y++) {
    const b = l[y];
    h && (b.oldValue = h[y].value);
    let A = b.dir[u];
    A && (or(), kn(A, s, 8, [
      n.el,
      b,
      n,
      i
    ]), ar());
  }
}
const Qu = Symbol("_vte"), zu = (n) => n.__isTeleport, oo = (n) => n && (n.disabled || n.disabled === ""), Ys = (n) => n && (n.defer || n.defer === ""), Xs = (n) => typeof SVGElement < "u" && n instanceof SVGElement, Qs = (n) => typeof MathMLElement == "function" && n instanceof MathMLElement, Za = (n, i) => {
  const s = n && n.to;
  return vt(s) ? i ? i(s) : null : s;
}, Ju = {
  name: "Teleport",
  __isTeleport: !0,
  process(n, i, s, u, l, h, y, b, A, K) {
    const {
      mc: k,
      pc: D,
      pbc: H,
      o: { insert: ne, querySelector: G, createText: X, createComment: Te }
    } = K, be = oo(i.props);
    let { shapeFlag: ue, children: q, dynamicChildren: M } = i;
    if (n == null) {
      const oe = i.el = X(""), se = i.anchor = X("");
      ne(oe, s, u), ne(se, s, u);
      const W = (P, ie) => {
        ue & 16 && (l && l.isCE && (l.ce._teleportTarget = P), k(
          q,
          P,
          ie,
          l,
          h,
          y,
          b,
          A
        ));
      }, te = () => {
        const P = i.target = Za(i.props, G), ie = Zu(P, i, X, ne);
        P && (y !== "svg" && Xs(P) ? y = "svg" : y !== "mathml" && Qs(P) && (y = "mathml"), be || (W(P, ie), ko(i, !1)));
      };
      be && (W(s, se), ko(i, !0)), Ys(i.props) ? (i.el.__isMounted = !1, Et(() => {
        te(), delete i.el.__isMounted;
      }, h)) : te();
    } else {
      if (Ys(i.props) && n.el.__isMounted === !1) {
        Et(() => {
          Ju.process(
            n,
            i,
            s,
            u,
            l,
            h,
            y,
            b,
            A,
            K
          );
        }, h);
        return;
      }
      i.el = n.el, i.targetStart = n.targetStart;
      const oe = i.anchor = n.anchor, se = i.target = n.target, W = i.targetAnchor = n.targetAnchor, te = oo(n.props), P = te ? s : se, ie = te ? oe : W;
      if (y === "svg" || Xs(se) ? y = "svg" : (y === "mathml" || Qs(se)) && (y = "mathml"), M ? (H(
        n.dynamicChildren,
        M,
        P,
        l,
        h,
        y,
        b
      ), Ms(n, i, !0)) : A || D(
        n,
        i,
        P,
        ie,
        l,
        h,
        y,
        b,
        !1
      ), be)
        te ? i.props && n.props && i.props.to !== n.props.to && (i.props.to = n.props.to) : Oo(
          i,
          s,
          oe,
          K,
          1
        );
      else if ((i.props && i.props.to) !== (n.props && n.props.to)) {
        const pe = i.target = Za(
          i.props,
          G
        );
        pe && Oo(
          i,
          pe,
          null,
          K,
          0
        );
      } else te && Oo(
        i,
        se,
        W,
        K,
        1
      );
      ko(i, be);
    }
  },
  remove(n, i, s, { um: u, o: { remove: l } }, h) {
    const {
      shapeFlag: y,
      children: b,
      anchor: A,
      targetStart: K,
      targetAnchor: k,
      target: D,
      props: H
    } = n;
    if (D && (l(K), l(k)), h && l(A), y & 16) {
      const ne = h || !oo(H);
      for (let G = 0; G < b.length; G++) {
        const X = b[G];
        u(
          X,
          i,
          s,
          ne,
          !!X.dynamicChildren
        );
      }
    }
  },
  move: Oo,
  hydrate: Ll
};
function Oo(n, i, s, { o: { insert: u }, m: l }, h = 2) {
  h === 0 && u(n.targetAnchor, i, s);
  const { el: y, anchor: b, shapeFlag: A, children: K, props: k } = n, D = h === 2;
  if (D && u(y, i, s), (!D || oo(k)) && A & 16)
    for (let H = 0; H < K.length; H++)
      l(
        K[H],
        i,
        s,
        2
      );
  D && u(b, i, s);
}
function Ll(n, i, s, u, l, h, {
  o: { nextSibling: y, parentNode: b, querySelector: A, insert: K, createText: k }
}, D) {
  const H = i.target = Za(
    i.props,
    A
  );
  if (H) {
    const ne = oo(i.props), G = H._lpa || H.firstChild;
    if (i.shapeFlag & 16)
      if (ne)
        i.anchor = D(
          y(n),
          i,
          b(n),
          s,
          u,
          l,
          h
        ), i.targetStart = G, i.targetAnchor = G && y(G);
      else {
        i.anchor = y(n);
        let X = G;
        for (; X; ) {
          if (X && X.nodeType === 8) {
            if (X.data === "teleport start anchor")
              i.targetStart = X;
            else if (X.data === "teleport anchor") {
              i.targetAnchor = X, H._lpa = i.targetAnchor && y(i.targetAnchor);
              break;
            }
          }
          X = y(X);
        }
        i.targetAnchor || Zu(H, i, k, K), D(
          G && y(G),
          i,
          H,
          s,
          u,
          l,
          h
        );
      }
    ko(i, ne);
  }
  return i.anchor && y(i.anchor);
}
const xd = Ju;
function ko(n, i) {
  const s = n.ctx;
  if (s && s.ut) {
    let u, l;
    for (i ? (u = n.el, l = n.anchor) : (u = n.targetStart, l = n.targetAnchor); u && u !== l; )
      u.nodeType === 1 && u.setAttribute("data-v-owner", s.uid), u = u.nextSibling;
    s.ut();
  }
}
function Zu(n, i, s, u) {
  const l = i.targetStart = s(""), h = i.targetAnchor = s("");
  return l[Qu] = h, n && (u(l, n), u(h, n)), h;
}
const fr = Symbol("_leaveCb"), Co = Symbol("_enterCb");
function ql() {
  const n = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ks(() => {
    n.isMounted = !0;
  }), Is(() => {
    n.isUnmounting = !0;
  }), n;
}
const hn = [Function, Array], Ul = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: hn,
  onEnter: hn,
  onAfterEnter: hn,
  onEnterCancelled: hn,
  // leave
  onBeforeLeave: hn,
  onLeave: hn,
  onAfterLeave: hn,
  onLeaveCancelled: hn,
  // appear
  onBeforeAppear: hn,
  onAppear: hn,
  onAfterAppear: hn,
  onAppearCancelled: hn
}, ec = (n) => {
  const i = n.subTree;
  return i.component ? ec(i.component) : i;
}, Vl = {
  name: "BaseTransition",
  props: Ul,
  setup(n, { slots: i }) {
    const s = ti(), u = ql();
    return () => {
      const l = i.default && rc(i.default(), !0);
      if (!l || !l.length)
        return;
      const h = tc(l), y = Ze(n), { mode: b } = y;
      if (u.isLeaving)
        return qa(h);
      const A = zs(h);
      if (!A)
        return qa(h);
      let K = es(
        A,
        y,
        u,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (D) => K = D
      );
      A.type !== _t && pi(A, K);
      let k = s.subTree && zs(s.subTree);
      if (k && k.type !== _t && !Tn(A, k) && ec(s).type !== _t) {
        let D = es(
          k,
          y,
          u,
          s
        );
        if (pi(k, D), b === "out-in" && A.type !== _t)
          return u.isLeaving = !0, D.afterLeave = () => {
            u.isLeaving = !1, s.job.flags & 8 || s.update(), delete D.afterLeave, k = void 0;
          }, qa(h);
        b === "in-out" && A.type !== _t ? D.delayLeave = (H, ne, G) => {
          const X = nc(
            u,
            k
          );
          X[String(k.key)] = k, H[fr] = () => {
            ne(), H[fr] = void 0, delete K.delayedLeave, k = void 0;
          }, K.delayedLeave = () => {
            G(), delete K.delayedLeave, k = void 0;
          };
        } : k = void 0;
      } else k && (k = void 0);
      return h;
    };
  }
};
function tc(n) {
  let i = n[0];
  if (n.length > 1) {
    for (const s of n)
      if (s.type !== _t) {
        i = s;
        break;
      }
  }
  return i;
}
const Td = Vl;
function nc(n, i) {
  const { leavingVNodes: s } = n;
  let u = s.get(i.type);
  return u || (u = /* @__PURE__ */ Object.create(null), s.set(i.type, u)), u;
}
function es(n, i, s, u, l) {
  const {
    appear: h,
    mode: y,
    persisted: b = !1,
    onBeforeEnter: A,
    onEnter: K,
    onAfterEnter: k,
    onEnterCancelled: D,
    onBeforeLeave: H,
    onLeave: ne,
    onAfterLeave: G,
    onLeaveCancelled: X,
    onBeforeAppear: Te,
    onAppear: be,
    onAfterAppear: ue,
    onAppearCancelled: q
  } = i, M = String(n.key), oe = nc(s, n), se = (P, ie) => {
    P && kn(
      P,
      u,
      9,
      ie
    );
  }, W = (P, ie) => {
    const pe = ie[1];
    se(P, ie), Re(P) ? P.every((de) => de.length <= 1) && pe() : P.length <= 1 && pe();
  }, te = {
    mode: y,
    persisted: b,
    beforeEnter(P) {
      let ie = A;
      if (!s.isMounted)
        if (h)
          ie = Te || A;
        else
          return;
      P[fr] && P[fr](
        !0
        /* cancelled */
      );
      const pe = oe[M];
      pe && Tn(n, pe) && pe.el[fr] && pe.el[fr](), se(ie, [P]);
    },
    enter(P) {
      let ie = K, pe = k, de = D;
      if (!s.isMounted)
        if (h)
          ie = be || K, pe = ue || k, de = q || D;
        else
          return;
      let Ee = !1;
      const qe = P[Co] = (Be) => {
        Ee || (Ee = !0, Be ? se(de, [P]) : se(pe, [P]), te.delayedLeave && te.delayedLeave(), P[Co] = void 0);
      };
      ie ? W(ie, [P, qe]) : qe();
    },
    leave(P, ie) {
      const pe = String(n.key);
      if (P[Co] && P[Co](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return ie();
      se(H, [P]);
      let de = !1;
      const Ee = P[fr] = (qe) => {
        de || (de = !0, ie(), qe ? se(X, [P]) : se(G, [P]), P[fr] = void 0, oe[pe] === n && delete oe[pe]);
      };
      oe[pe] = n, ne ? W(ne, [P, Ee]) : Ee();
    },
    clone(P) {
      const ie = es(
        P,
        i,
        s,
        u,
        l
      );
      return l && l(ie), ie;
    }
  };
  return te;
}
function qa(n) {
  if (vo(n))
    return n = sr(n), n.children = null, n;
}
function zs(n) {
  if (!vo(n))
    return zu(n.type) && n.children ? tc(n.children) : n;
  if (n.component)
    return n.component.subTree;
  const { shapeFlag: i, children: s } = n;
  if (s) {
    if (i & 16)
      return s[0];
    if (i & 32 && Me(s.default))
      return s.default();
  }
}
function pi(n, i) {
  n.shapeFlag & 6 && n.component ? (n.transition = i, pi(n.component.subTree, i)) : n.shapeFlag & 128 ? (n.ssContent.transition = i.clone(n.ssContent), n.ssFallback.transition = i.clone(n.ssFallback)) : n.transition = i;
}
function rc(n, i = !1, s) {
  let u = [], l = 0;
  for (let h = 0; h < n.length; h++) {
    let y = n[h];
    const b = s == null ? y.key : String(s) + String(y.key != null ? y.key : h);
    y.type === zt ? (y.patchFlag & 128 && l++, u = u.concat(
      rc(y.children, i, b)
    )) : (i || y.type !== _t) && u.push(b != null ? sr(y, { key: b }) : y);
  }
  if (l > 1)
    for (let h = 0; h < u.length; h++)
      u[h].patchFlag = -2;
  return u;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Hl(n, i) {
  return Me(n) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    wt({ name: n.name }, i, { setup: n })
  ) : n;
}
function Ed() {
  const n = ti();
  return n ? (n.appContext.config.idPrefix || "v") + "-" + n.ids[0] + n.ids[1]++ : "";
}
function Ss(n) {
  n.ids = [n.ids[0] + n.ids[2]++ + "-", 0, 0];
}
function Od(n) {
  const i = ti(), s = za(null);
  if (i) {
    const l = i.refs === et ? i.refs = {} : i.refs;
    Object.defineProperty(l, n, {
      enumerable: !0,
      get: () => s.value,
      set: (h) => s.value = h
    });
  }
  return s;
}
function hi(n, i, s, u, l = !1) {
  if (Re(n)) {
    n.forEach(
      (G, X) => hi(
        G,
        i && (Re(i) ? i[X] : i),
        s,
        u,
        l
      )
    );
    return;
  }
  if (pr(u) && !l) {
    u.shapeFlag & 512 && u.type.__asyncResolved && u.component.subTree.component && hi(n, i, s, u.component.subTree);
    return;
  }
  const h = u.shapeFlag & 4 ? _o(u.component) : u.el, y = l ? null : h, { i: b, r: A } = n, K = i && i.r, k = b.refs === et ? b.refs = {} : b.refs, D = b.setupState, H = Ze(D), ne = D === et ? () => !1 : (G) => nt(H, G);
  if (K != null && K !== A && (vt(K) ? (k[K] = null, ne(K) && (D[K] = null)) : At(K) && (K.value = null)), Me(A))
    go(A, b, 12, [y, k]);
  else {
    const G = vt(A), X = At(A);
    if (G || X) {
      const Te = () => {
        if (n.f) {
          const be = G ? ne(A) ? D[A] : k[A] : A.value;
          l ? Re(be) && vs(be, h) : Re(be) ? be.includes(h) || be.push(h) : G ? (k[A] = [h], ne(A) && (D[A] = k[A])) : (A.value = [h], n.k && (k[n.k] = A.value));
        } else G ? (k[A] = y, ne(A) && (D[A] = y)) : X && (A.value = y, n.k && (k[n.k] = y));
      };
      y ? (Te.id = -1, Et(Te, s)) : Te();
    }
  }
}
let Js = !1;
const ri = () => {
  Js || (console.error("Hydration completed but contains mismatches."), Js = !0);
}, $l = (n) => n.namespaceURI.includes("svg") && n.tagName !== "foreignObject", Wl = (n) => n.namespaceURI.includes("MathML"), Ao = (n) => {
  if (n.nodeType === 1) {
    if ($l(n)) return "svg";
    if (Wl(n)) return "mathml";
  }
}, ai = (n) => n.nodeType === 8;
function Gl(n) {
  const {
    mt: i,
    p: s,
    o: {
      patchProp: u,
      createText: l,
      nextSibling: h,
      parentNode: y,
      remove: b,
      insert: A,
      createComment: K
    }
  } = n, k = (q, M) => {
    if (!M.hasChildNodes()) {
      s(null, q, M), Uo(), M._vnode = q;
      return;
    }
    D(M.firstChild, q, null, null, null), Uo(), M._vnode = q;
  }, D = (q, M, oe, se, W, te = !1) => {
    te = te || !!M.dynamicChildren;
    const P = ai(q) && q.data === "[", ie = () => X(
      q,
      M,
      oe,
      se,
      W,
      P
    ), { type: pe, ref: de, shapeFlag: Ee, patchFlag: qe } = M;
    let Be = q.nodeType;
    M.el = q, qe === -2 && (te = !1, M.dynamicChildren = null);
    let Ae = null;
    switch (pe) {
      case Jr:
        Be !== 3 ? M.children === "" ? (A(M.el = l(""), y(q), q), Ae = q) : Ae = ie() : (q.data !== M.children && (ri(), q.data = M.children), Ae = h(q));
        break;
      case _t:
        ue(q) ? (Ae = h(q), be(
          M.el = q.content.firstChild,
          q,
          oe
        )) : Be !== 8 || P ? Ae = ie() : Ae = h(q);
        break;
      case so:
        if (P && (q = h(q), Be = q.nodeType), Be === 1 || Be === 3) {
          Ae = q;
          const Oe = !M.children.length;
          for (let Ce = 0; Ce < M.staticCount; Ce++)
            Oe && (M.children += Ae.nodeType === 1 ? Ae.outerHTML : Ae.data), Ce === M.staticCount - 1 && (M.anchor = Ae), Ae = h(Ae);
          return P ? h(Ae) : Ae;
        } else
          ie();
        break;
      case zt:
        P ? Ae = G(
          q,
          M,
          oe,
          se,
          W,
          te
        ) : Ae = ie();
        break;
      default:
        if (Ee & 1)
          (Be !== 1 || M.type.toLowerCase() !== q.tagName.toLowerCase()) && !ue(q) ? Ae = ie() : Ae = H(
            q,
            M,
            oe,
            se,
            W,
            te
          );
        else if (Ee & 6) {
          M.slotScopeIds = W;
          const Oe = y(q);
          if (P ? Ae = Te(q) : ai(q) && q.data === "teleport start" ? Ae = Te(q, q.data, "teleport end") : Ae = h(q), i(
            M,
            Oe,
            null,
            oe,
            se,
            Ao(Oe),
            te
          ), pr(M) && !M.type.__asyncResolved) {
            let Ce;
            P ? (Ce = pt(zt), Ce.anchor = Ae ? Ae.previousSibling : Oe.lastChild) : Ce = q.nodeType === 3 ? Ic("") : pt("div"), Ce.el = q, M.component.subTree = Ce;
          }
        } else Ee & 64 ? Be !== 8 ? Ae = ie() : Ae = M.type.hydrate(
          q,
          M,
          oe,
          se,
          W,
          te,
          n,
          ne
        ) : Ee & 128 && (Ae = M.type.hydrate(
          q,
          M,
          oe,
          se,
          Ao(y(q)),
          W,
          te,
          n,
          D
        ));
    }
    return de != null && hi(de, null, se, M), Ae;
  }, H = (q, M, oe, se, W, te) => {
    te = te || !!M.dynamicChildren;
    const { type: P, props: ie, patchFlag: pe, shapeFlag: de, dirs: Ee, transition: qe } = M, Be = P === "input" || P === "option";
    if (Be || pe !== -1) {
      Ee && Pn(M, null, oe, "created");
      let Ae = !1;
      if (ue(q)) {
        Ae = _c(
          null,
          // no need check parentSuspense in hydration
          qe
        ) && oe && oe.vnode.props && oe.vnode.props.appear;
        const Ce = q.content.firstChild;
        if (Ae) {
          const We = Ce.getAttribute("class");
          We && (Ce.$cls = We), qe.beforeEnter(Ce);
        }
        be(Ce, q, oe), M.el = q = Ce;
      }
      if (de & 16 && // skip if element has innerHTML / textContent
      !(ie && (ie.innerHTML || ie.textContent))) {
        let Ce = ne(
          q.firstChild,
          M,
          q,
          oe,
          se,
          W,
          te
        );
        for (; Ce; ) {
          No(
            q,
            1
            /* CHILDREN */
          ) || ri();
          const We = Ce;
          Ce = Ce.nextSibling, b(We);
        }
      } else if (de & 8) {
        let Ce = M.children;
        Ce[0] === `
` && (q.tagName === "PRE" || q.tagName === "TEXTAREA") && (Ce = Ce.slice(1)), q.textContent !== Ce && (No(
          q,
          0
          /* TEXT */
        ) || ri(), q.textContent = M.children);
      }
      if (ie) {
        if (Be || !te || pe & 48) {
          const Ce = q.tagName.includes("-");
          for (const We in ie)
            (Be && (We.endsWith("value") || We === "indeterminate") || zo(We) && !ci(We) || // force hydrate v-bind with .prop modifiers
            We[0] === "." || Ce) && u(q, We, null, ie[We], void 0, oe);
        } else if (ie.onClick)
          u(
            q,
            "onClick",
            null,
            ie.onClick,
            void 0,
            oe
          );
        else if (pe & 4 && Qr(ie.style))
          for (const Ce in ie.style) ie.style[Ce];
      }
      let Oe;
      (Oe = ie && ie.onVnodeBeforeMount) && en(Oe, oe, M), Ee && Pn(M, null, oe, "beforeMount"), ((Oe = ie && ie.onVnodeMounted) || Ee || Ae) && Ac(() => {
        Oe && en(Oe, oe, M), Ae && qe.enter(q), Ee && Pn(M, null, oe, "mounted");
      }, se);
    }
    return q.nextSibling;
  }, ne = (q, M, oe, se, W, te, P) => {
    P = P || !!M.dynamicChildren;
    const ie = M.children, pe = ie.length;
    for (let de = 0; de < pe; de++) {
      const Ee = P ? ie[de] : ie[de] = tn(ie[de]), qe = Ee.type === Jr;
      q ? (qe && !P && de + 1 < pe && tn(ie[de + 1]).type === Jr && (A(
        l(
          q.data.slice(Ee.children.length)
        ),
        oe,
        h(q)
      ), q.data = Ee.children), q = D(
        q,
        Ee,
        se,
        W,
        te,
        P
      )) : qe && !Ee.children ? A(Ee.el = l(""), oe) : (No(
        oe,
        1
        /* CHILDREN */
      ) || ri(), s(
        null,
        Ee,
        oe,
        null,
        se,
        W,
        Ao(oe),
        te
      ));
    }
    return q;
  }, G = (q, M, oe, se, W, te) => {
    const { slotScopeIds: P } = M;
    P && (W = W ? W.concat(P) : P);
    const ie = y(q), pe = ne(
      h(q),
      M,
      ie,
      oe,
      se,
      W,
      te
    );
    return pe && ai(pe) && pe.data === "]" ? h(M.anchor = pe) : (ri(), A(M.anchor = K("]"), ie, pe), pe);
  }, X = (q, M, oe, se, W, te) => {
    if (No(
      q.parentElement,
      1
      /* CHILDREN */
    ) || ri(), M.el = null, te) {
      const pe = Te(q);
      for (; ; ) {
        const de = h(q);
        if (de && de !== pe)
          b(de);
        else
          break;
      }
    }
    const P = h(q), ie = y(q);
    return b(q), s(
      null,
      M,
      ie,
      P,
      oe,
      se,
      Ao(ie),
      W
    ), oe && (oe.vnode.el = M.el, ca(oe, M.el)), P;
  }, Te = (q, M = "[", oe = "]") => {
    let se = 0;
    for (; q; )
      if (q = h(q), q && ai(q) && (q.data === M && se++, q.data === oe)) {
        if (se === 0)
          return h(q);
        se--;
      }
    return q;
  }, be = (q, M, oe) => {
    const se = M.parentNode;
    se && se.replaceChild(q, M);
    let W = oe;
    for (; W; )
      W.vnode.el === M && (W.vnode.el = W.subTree.el = q), W = W.parent;
  }, ue = (q) => q.nodeType === 1 && q.tagName === "TEMPLATE";
  return [k, D];
}
const Zs = "data-allow-mismatch", Yl = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function No(n, i) {
  if (i === 0 || i === 1)
    for (; n && !n.hasAttribute(Zs); )
      n = n.parentElement;
  const s = n && n.getAttribute(Zs);
  if (s == null)
    return !1;
  if (s === "")
    return !0;
  {
    const u = s.split(",");
    return i === 0 && u.includes("children") ? !0 : u.includes(Yl[i]);
  }
}
const Xl = Zo().requestIdleCallback || ((n) => setTimeout(n, 1)), Ql = Zo().cancelIdleCallback || ((n) => clearTimeout(n)), Cd = (n = 1e4) => (i) => {
  const s = Xl(i, { timeout: n });
  return () => Ql(s);
};
function zl(n) {
  const { top: i, left: s, bottom: u, right: l } = n.getBoundingClientRect(), { innerHeight: h, innerWidth: y } = window;
  return (i > 0 && i < h || u > 0 && u < h) && (s > 0 && s < y || l > 0 && l < y);
}
const Ad = (n) => (i, s) => {
  const u = new IntersectionObserver((l) => {
    for (const h of l)
      if (h.isIntersecting) {
        u.disconnect(), i();
        break;
      }
  }, n);
  return s((l) => {
    if (l instanceof Element) {
      if (zl(l))
        return i(), u.disconnect(), !1;
      u.observe(l);
    }
  }), () => u.disconnect();
}, Nd = (n) => (i) => {
  if (n) {
    const s = matchMedia(n);
    if (s.matches)
      i();
    else
      return s.addEventListener("change", i, { once: !0 }), () => s.removeEventListener("change", i);
  }
}, Pd = (n = []) => (i, s) => {
  vt(n) && (n = [n]);
  let u = !1;
  const l = (y) => {
    u || (u = !0, h(), i(), y.target.dispatchEvent(new y.constructor(y.type, y)));
  }, h = () => {
    s((y) => {
      for (const b of n)
        y.removeEventListener(b, l);
    });
  };
  return s((y) => {
    for (const b of n)
      y.addEventListener(b, l, { once: !0 });
  }), h;
};
function Jl(n, i) {
  if (ai(n) && n.data === "[") {
    let s = 1, u = n.nextSibling;
    for (; u; ) {
      if (u.nodeType === 1) {
        if (i(u) === !1)
          break;
      } else if (ai(u))
        if (u.data === "]") {
          if (--s === 0) break;
        } else u.data === "[" && s++;
      u = u.nextSibling;
    }
  } else
    i(n);
}
const pr = (n) => !!n.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Sd(n) {
  Me(n) && (n = { loader: n });
  const {
    loader: i,
    loadingComponent: s,
    errorComponent: u,
    delay: l = 200,
    hydrate: h,
    timeout: y,
    // undefined = never times out
    suspensible: b = !0,
    onError: A
  } = n;
  let K = null, k, D = 0;
  const H = () => (D++, K = null, ne()), ne = () => {
    let G;
    return K || (G = K = i().catch((X) => {
      if (X = X instanceof Error ? X : new Error(String(X)), A)
        return new Promise((Te, be) => {
          A(X, () => Te(H()), () => be(X), D + 1);
        });
      throw X;
    }).then((X) => G !== K && K ? K : (X && (X.__esModule || X[Symbol.toStringTag] === "Module") && (X = X.default), k = X, X)));
  };
  return /* @__PURE__ */ Hl({
    name: "AsyncComponentWrapper",
    __asyncLoader: ne,
    __asyncHydrate(G, X, Te) {
      const be = h ? () => {
        const q = h(
          () => {
            Te();
          },
          (M) => Jl(G, M)
        );
        q && (X.bum || (X.bum = [])).push(q), (X.u || (X.u = [])).push(() => !0);
      } : Te;
      k ? be() : ne().then(() => !X.isUnmounted && be());
    },
    get __asyncResolved() {
      return k;
    },
    setup() {
      const G = Ot;
      if (Ss(G), k)
        return () => Ua(k, G);
      const X = (q) => {
        K = null, _i(
          q,
          G,
          13,
          !u
        );
      };
      if (b && G.suspense || yi)
        return ne().then((q) => () => Ua(q, G)).catch((q) => (X(q), () => u ? pt(u, {
          error: q
        }) : null));
      const Te = li(!1), be = li(), ue = li(!!l);
      return l && setTimeout(() => {
        ue.value = !1;
      }, l), y != null && setTimeout(() => {
        if (!Te.value && !be.value) {
          const q = new Error(
            `Async component timed out after ${y}ms.`
          );
          X(q), be.value = q;
        }
      }, y), ne().then(() => {
        Te.value = !0, G.parent && vo(G.parent.vnode) && G.parent.update();
      }).catch((q) => {
        X(q), be.value = q;
      }), () => {
        if (Te.value && k)
          return Ua(k, G);
        if (be.value && u)
          return pt(u, {
            error: be.value
          });
        if (s && !ue.value)
          return pt(s);
      };
    }
  });
}
function Ua(n, i) {
  const { ref: s, props: u, children: l, ce: h } = i.vnode, y = pt(n, u, l);
  return y.ref = s, y.ce = h, delete i.vnode.ce, y;
}
const vo = (n) => n.type.__isKeepAlive, Zl = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: !0,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(n, { slots: i }) {
    const s = ti(), u = s.ctx;
    if (!u.renderer)
      return () => {
        const ue = i.default && i.default();
        return ue && ue.length === 1 ? ue[0] : ue;
      };
    const l = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Set();
    let y = null;
    const b = s.suspense, {
      renderer: {
        p: A,
        m: K,
        um: k,
        o: { createElement: D }
      }
    } = u, H = D("div");
    u.activate = (ue, q, M, oe, se) => {
      const W = ue.component;
      K(ue, q, M, 0, b), A(
        W.vnode,
        ue,
        q,
        M,
        W,
        b,
        oe,
        ue.slotScopeIds,
        se
      ), Et(() => {
        W.isDeactivated = !1, W.a && no(W.a);
        const te = ue.props && ue.props.onVnodeMounted;
        te && en(te, W.parent, ue);
      }, b);
    }, u.deactivate = (ue) => {
      const q = ue.component;
      Ho(q.m), Ho(q.a), K(ue, H, null, 1, b), Et(() => {
        q.da && no(q.da);
        const M = ue.props && ue.props.onVnodeUnmounted;
        M && en(M, q.parent, ue), q.isDeactivated = !0;
      }, b);
    };
    function ne(ue) {
      Va(ue), k(ue, s, b, !0);
    }
    function G(ue) {
      l.forEach((q, M) => {
        const oe = hs(q.type);
        oe && !ue(oe) && X(M);
      });
    }
    function X(ue) {
      const q = l.get(ue);
      q && (!y || !Tn(q, y)) ? ne(q) : y && Va(y), l.delete(ue), h.delete(ue);
    }
    Do(
      () => [n.include, n.exclude],
      ([ue, q]) => {
        ue && G((M) => eo(ue, M)), q && G((M) => !eo(q, M));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let Te = null;
    const be = () => {
      Te != null && ($o(s.subTree.type) ? Et(() => {
        l.set(Te, Po(s.subTree));
      }, s.subTree.suspense) : l.set(Te, Po(s.subTree)));
    };
    return ks(be), oc(be), Is(() => {
      l.forEach((ue) => {
        const { subTree: q, suspense: M } = s, oe = Po(q);
        if (ue.type === oe.type && ue.key === oe.key) {
          Va(oe);
          const se = oe.component.da;
          se && Et(se, M);
          return;
        }
        ne(ue);
      });
    }), () => {
      if (Te = null, !i.default)
        return y = null;
      const ue = i.default(), q = ue[0];
      if (ue.length > 1)
        return y = null, ue;
      if (!mr(q) || !(q.shapeFlag & 4) && !(q.shapeFlag & 128))
        return y = null, q;
      let M = Po(q);
      if (M.type === _t)
        return y = null, M;
      const oe = M.type, se = hs(
        pr(M) ? M.type.__asyncResolved || {} : oe
      ), { include: W, exclude: te, max: P } = n;
      if (W && (!se || !eo(W, se)) || te && se && eo(te, se))
        return M.shapeFlag &= -257, y = M, q;
      const ie = M.key == null ? oe : M.key, pe = l.get(ie);
      return M.el && (M = sr(M), q.shapeFlag & 128 && (q.ssContent = M)), Te = ie, pe ? (M.el = pe.el, M.component = pe.component, M.transition && pi(M, M.transition), M.shapeFlag |= 512, h.delete(ie), h.add(ie)) : (h.add(ie), P && h.size > parseInt(P, 10) && X(h.values().next().value)), M.shapeFlag |= 256, y = M, $o(q.type) ? q : M;
    };
  }
}, kd = Zl;
function eo(n, i) {
  return Re(n) ? n.some((s) => eo(s, i)) : vt(n) ? n.split(",").includes(i) : qc(n) ? (n.lastIndex = 0, n.test(i)) : !1;
}
function ef(n, i) {
  ic(n, "a", i);
}
function tf(n, i) {
  ic(n, "da", i);
}
function ic(n, i, s = Ot) {
  const u = n.__wdc || (n.__wdc = () => {
    let l = s;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return n();
  });
  if (sa(i, u, s), s) {
    let l = s.parent;
    for (; l && l.parent; )
      vo(l.parent.vnode) && nf(u, i, s, l), l = l.parent;
  }
}
function nf(n, i, s, u) {
  const l = sa(
    i,
    n,
    u,
    !0
    /* prepend */
  );
  ac(() => {
    vs(u[i], l);
  }, s);
}
function Va(n) {
  n.shapeFlag &= -257, n.shapeFlag &= -513;
}
function Po(n) {
  return n.shapeFlag & 128 ? n.ssContent : n;
}
function sa(n, i, s = Ot, u = !1) {
  if (s) {
    const l = s[n] || (s[n] = []), h = i.__weh || (i.__weh = (...y) => {
      or();
      const b = ei(s), A = kn(i, s, n, y);
      return b(), ar(), A;
    });
    return u ? l.unshift(h) : l.push(h), h;
  }
}
const ur = (n) => (i, s = Ot) => {
  (!yi || n === "sp") && sa(n, (...u) => i(...u), s);
}, rf = ur("bm"), ks = ur("m"), of = ur(
  "bu"
), oc = ur("u"), Is = ur(
  "bum"
), ac = ur("um"), af = ur(
  "sp"
), sf = ur("rtg"), uf = ur("rtc");
function cf(n, i = Ot) {
  sa("ec", n, i);
}
const Ds = "components", lf = "directives";
function Id(n, i) {
  return Rs(Ds, n, !0, i) || n;
}
const sc = Symbol.for("v-ndc");
function Dd(n) {
  return vt(n) ? Rs(Ds, n, !1) || n : n || sc;
}
function Rd(n) {
  return Rs(lf, n);
}
function Rs(n, i, s = !0, u = !1) {
  const l = Ct || Ot;
  if (l) {
    const h = l.type;
    if (n === Ds) {
      const b = hs(
        h,
        !1
      );
      if (b && (b === i || b === Cn(i) || b === ws(Cn(i))))
        return h;
    }
    const y = (
      // local registration
      // check instance[type] first which is resolved for options API
      eu(l[n] || h[n], i) || // global registration
      eu(l.appContext[n], i)
    );
    return !y && u ? h : y;
  }
}
function eu(n, i) {
  return n && (n[i] || n[Cn(i)] || n[ws(Cn(i))]);
}
function Fd(n, i, s, u) {
  let l;
  const h = s && s[u], y = Re(n);
  if (y || vt(n)) {
    const b = y && Qr(n);
    let A = !1, K = !1;
    b && (A = !dn(n), K = yr(n), n = ra(n)), l = new Array(n.length);
    for (let k = 0, D = n.length; k < D; k++)
      l[k] = i(
        A ? K ? Mo(Kt(n[k])) : Kt(n[k]) : n[k],
        k,
        void 0,
        h && h[k]
      );
  } else if (typeof n == "number") {
    l = new Array(n);
    for (let b = 0; b < n; b++)
      l[b] = i(b + 1, b, void 0, h && h[b]);
  } else if (at(n))
    if (n[Symbol.iterator])
      l = Array.from(
        n,
        (b, A) => i(b, A, void 0, h && h[A])
      );
    else {
      const b = Object.keys(n);
      l = new Array(b.length);
      for (let A = 0, K = b.length; A < K; A++) {
        const k = b[A];
        l[A] = i(n[k], k, A, h && h[A]);
      }
    }
  else
    l = [];
  return s && (s[u] = l), l;
}
function Bd(n, i) {
  for (let s = 0; s < i.length; s++) {
    const u = i[s];
    if (Re(u))
      for (let l = 0; l < u.length; l++)
        n[u[l].name] = u[l].fn;
    else u && (n[u.name] = u.key ? (...l) => {
      const h = u.fn(...l);
      return h && (h.key = u.key), h;
    } : u.fn);
  }
  return n;
}
function Kd(n, i, s = {}, u, l) {
  if (Ct.ce || Ct.parent && pr(Ct.parent) && Ct.parent.ce)
    return i !== "default" && (s.name = i), Wo(), ss(
      zt,
      null,
      [pt("slot", s, u && u())],
      64
    );
  let h = n[i];
  h && h._c && (h._d = !1), Wo();
  const y = h && Fs(h(s)), b = s.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  y && y.key, A = ss(
    zt,
    {
      key: (b && !Sn(b) ? b : `_${i}`) + // #7256 force differentiate fallback content from actual content
      (!y && u ? "_fb" : "")
    },
    y || (u ? u() : []),
    y && n._ === 1 ? 64 : -2
  );
  return !l && A.scopeId && (A.slotScopeIds = [A.scopeId + "-s"]), h && h._c && (h._d = !0), A;
}
function Fs(n) {
  return n.some((i) => mr(i) ? !(i.type === _t || i.type === zt && !Fs(i.children)) : !0) ? n : null;
}
function jd(n, i) {
  const s = {};
  for (const u in n)
    s[i && /[A-Z]/.test(u) ? `on:${u}` : So(u)] = n[u];
  return s;
}
const ts = (n) => n ? Rc(n) ? _o(n) : ts(n.parent) : null, ao = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ wt(/* @__PURE__ */ Object.create(null), {
    $: (n) => n,
    $el: (n) => n.vnode.el,
    $data: (n) => n.data,
    $props: (n) => n.props,
    $attrs: (n) => n.attrs,
    $slots: (n) => n.slots,
    $refs: (n) => n.refs,
    $parent: (n) => ts(n.parent),
    $root: (n) => ts(n.root),
    $host: (n) => n.ce,
    $emit: (n) => n.emit,
    $options: (n) => Bs(n),
    $forceUpdate: (n) => n.f || (n.f = () => {
      Ps(n.update);
    }),
    $nextTick: (n) => n.n || (n.n = jl.bind(n.proxy)),
    $watch: (n) => Sf.bind(n)
  })
), Ha = (n, i) => n !== et && !n.__isScriptSetup && nt(n, i), ns = {
  get({ _: n }, i) {
    if (i === "__v_skip")
      return !0;
    const { ctx: s, setupState: u, data: l, props: h, accessCache: y, type: b, appContext: A } = n;
    let K;
    if (i[0] !== "$") {
      const ne = y[i];
      if (ne !== void 0)
        switch (ne) {
          case 1:
            return u[i];
          case 2:
            return l[i];
          case 4:
            return s[i];
          case 3:
            return h[i];
        }
      else {
        if (Ha(u, i))
          return y[i] = 1, u[i];
        if (l !== et && nt(l, i))
          return y[i] = 2, l[i];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (K = n.propsOptions[0]) && nt(K, i)
        )
          return y[i] = 3, h[i];
        if (s !== et && nt(s, i))
          return y[i] = 4, s[i];
        rs && (y[i] = 0);
      }
    }
    const k = ao[i];
    let D, H;
    if (k)
      return i === "$attrs" && Mt(n.attrs, "get", ""), k(n);
    if (
      // css module (injected by vue-loader)
      (D = b.__cssModules) && (D = D[i])
    )
      return D;
    if (s !== et && nt(s, i))
      return y[i] = 4, s[i];
    if (
      // global properties
      H = A.config.globalProperties, nt(H, i)
    )
      return H[i];
  },
  set({ _: n }, i, s) {
    const { data: u, setupState: l, ctx: h } = n;
    return Ha(l, i) ? (l[i] = s, !0) : u !== et && nt(u, i) ? (u[i] = s, !0) : nt(n.props, i) || i[0] === "$" && i.slice(1) in n ? !1 : (h[i] = s, !0);
  },
  has({
    _: { data: n, setupState: i, accessCache: s, ctx: u, appContext: l, propsOptions: h }
  }, y) {
    let b;
    return !!s[y] || n !== et && nt(n, y) || Ha(i, y) || (b = h[0]) && nt(b, y) || nt(u, y) || nt(ao, y) || nt(l.config.globalProperties, y);
  },
  defineProperty(n, i, s) {
    return s.get != null ? n._.accessCache[i] = 0 : nt(s, "value") && this.set(n, i, s.value, null), Reflect.defineProperty(n, i, s);
  }
}, ff = /* @__PURE__ */ wt({}, ns, {
  get(n, i) {
    if (i !== Symbol.unscopables)
      return ns.get(n, i, n);
  },
  has(n, i) {
    return i[0] !== "_" && !Yc(i);
  }
});
function Md() {
  return null;
}
function Ld() {
  return null;
}
function qd(n) {
}
function Ud(n) {
}
function Vd() {
  return null;
}
function Hd() {
}
function $d(n, i) {
  return null;
}
function Wd() {
  return uc().slots;
}
function Gd() {
  return uc().attrs;
}
function uc() {
  const n = ti();
  return n.setupContext || (n.setupContext = Kc(n));
}
function yo(n) {
  return Re(n) ? n.reduce(
    (i, s) => (i[s] = null, i),
    {}
  ) : n;
}
function Yd(n, i) {
  const s = yo(n);
  for (const u in i) {
    if (u.startsWith("__skip")) continue;
    let l = s[u];
    l ? Re(l) || Me(l) ? l = s[u] = { type: l, default: i[u] } : l.default = i[u] : l === null && (l = s[u] = { default: i[u] }), l && i[`__skip_${u}`] && (l.skipFactory = !0);
  }
  return s;
}
function Xd(n, i) {
  return !n || !i ? n || i : Re(n) && Re(i) ? n.concat(i) : wt({}, yo(n), yo(i));
}
function Qd(n, i) {
  const s = {};
  for (const u in n)
    i.includes(u) || Object.defineProperty(s, u, {
      enumerable: !0,
      get: () => n[u]
    });
  return s;
}
function zd(n) {
  const i = ti();
  let s = n();
  return cs(), bs(s) && (s = s.catch((u) => {
    throw ei(i), u;
  })), [s, () => ei(i)];
}
let rs = !0;
function hf(n) {
  const i = Bs(n), s = n.proxy, u = n.ctx;
  rs = !1, i.beforeCreate && tu(i.beforeCreate, n, "bc");
  const {
    // state
    data: l,
    computed: h,
    methods: y,
    watch: b,
    provide: A,
    inject: K,
    // lifecycle
    created: k,
    beforeMount: D,
    mounted: H,
    beforeUpdate: ne,
    updated: G,
    activated: X,
    deactivated: Te,
    beforeDestroy: be,
    beforeUnmount: ue,
    destroyed: q,
    unmounted: M,
    render: oe,
    renderTracked: se,
    renderTriggered: W,
    errorCaptured: te,
    serverPrefetch: P,
    // public API
    expose: ie,
    inheritAttrs: pe,
    // assets
    components: de,
    directives: Ee,
    filters: qe
  } = i;
  if (K && df(K, u, null), y)
    for (const Oe in y) {
      const Ce = y[Oe];
      Me(Ce) && (u[Oe] = Ce.bind(s));
    }
  if (l) {
    const Oe = l.call(s, s);
    at(Oe) && (n.data = Cs(Oe));
  }
  if (rs = !0, h)
    for (const Oe in h) {
      const Ce = h[Oe], We = Me(Ce) ? Ce.bind(s, s) : Me(Ce.get) ? Ce.get.bind(s, s) : En, rt = !Me(Ce) && Me(Ce.set) ? Ce.set.bind(s) : En, lt = qs({
        get: We,
        set: rt
      });
      Object.defineProperty(u, Oe, {
        enumerable: !0,
        configurable: !0,
        get: () => lt.value,
        set: (Nt) => lt.value = Nt
      });
    }
  if (b)
    for (const Oe in b)
      cc(b[Oe], u, s, Oe);
  if (A) {
    const Oe = Me(A) ? A.call(s) : A;
    Reflect.ownKeys(Oe).forEach((Ce) => {
      bf(Ce, Oe[Ce]);
    });
  }
  k && tu(k, n, "c");
  function Ae(Oe, Ce) {
    Re(Ce) ? Ce.forEach((We) => Oe(We.bind(s))) : Ce && Oe(Ce.bind(s));
  }
  if (Ae(rf, D), Ae(ks, H), Ae(of, ne), Ae(oc, G), Ae(ef, X), Ae(tf, Te), Ae(cf, te), Ae(uf, se), Ae(sf, W), Ae(Is, ue), Ae(ac, M), Ae(af, P), Re(ie))
    if (ie.length) {
      const Oe = n.exposed || (n.exposed = {});
      ie.forEach((Ce) => {
        Object.defineProperty(Oe, Ce, {
          get: () => s[Ce],
          set: (We) => s[Ce] = We
        });
      });
    } else n.exposed || (n.exposed = {});
  oe && n.render === En && (n.render = oe), pe != null && (n.inheritAttrs = pe), de && (n.components = de), Ee && (n.directives = Ee), P && Ss(n);
}
function df(n, i, s = En) {
  Re(n) && (n = is(n));
  for (const u in n) {
    const l = n[u];
    let h;
    at(l) ? "default" in l ? h = Io(
      l.from || u,
      l.default,
      !0
    ) : h = Io(l.from || u) : h = Io(l), At(h) ? Object.defineProperty(i, u, {
      enumerable: !0,
      configurable: !0,
      get: () => h.value,
      set: (y) => h.value = y
    }) : i[u] = h;
  }
}
function tu(n, i, s) {
  kn(
    Re(n) ? n.map((u) => u.bind(i.proxy)) : n.bind(i.proxy),
    i,
    s
  );
}
function cc(n, i, s, u) {
  let l = u.includes(".") ? Tc(s, u) : () => s[u];
  if (vt(n)) {
    const h = i[n];
    Me(h) && Do(l, h);
  } else if (Me(n))
    Do(l, n.bind(s));
  else if (at(n))
    if (Re(n))
      n.forEach((h) => cc(h, i, s, u));
    else {
      const h = Me(n.handler) ? n.handler.bind(s) : i[n.handler];
      Me(h) && Do(l, h, n);
    }
}
function Bs(n) {
  const i = n.type, { mixins: s, extends: u } = i, {
    mixins: l,
    optionsCache: h,
    config: { optionMergeStrategies: y }
  } = n.appContext, b = h.get(i);
  let A;
  return b ? A = b : !l.length && !s && !u ? A = i : (A = {}, l.length && l.forEach(
    (K) => Vo(A, K, y, !0)
  ), Vo(A, i, y)), at(i) && h.set(i, A), A;
}
function Vo(n, i, s, u = !1) {
  const { mixins: l, extends: h } = i;
  h && Vo(n, h, s, !0), l && l.forEach(
    (y) => Vo(n, y, s, !0)
  );
  for (const y in i)
    if (!(u && y === "expose")) {
      const b = pf[y] || s && s[y];
      n[y] = b ? b(n[y], i[y]) : i[y];
    }
  return n;
}
const pf = {
  data: nu,
  props: ru,
  emits: ru,
  // objects
  methods: to,
  computed: to,
  // lifecycle
  beforeCreate: Gt,
  created: Gt,
  beforeMount: Gt,
  mounted: Gt,
  beforeUpdate: Gt,
  updated: Gt,
  beforeDestroy: Gt,
  beforeUnmount: Gt,
  destroyed: Gt,
  unmounted: Gt,
  activated: Gt,
  deactivated: Gt,
  errorCaptured: Gt,
  serverPrefetch: Gt,
  // assets
  components: to,
  directives: to,
  // watch
  watch: mf,
  // provide / inject
  provide: nu,
  inject: yf
};
function nu(n, i) {
  return i ? n ? function() {
    return wt(
      Me(n) ? n.call(this, this) : n,
      Me(i) ? i.call(this, this) : i
    );
  } : i : n;
}
function yf(n, i) {
  return to(is(n), is(i));
}
function is(n) {
  if (Re(n)) {
    const i = {};
    for (let s = 0; s < n.length; s++)
      i[n[s]] = n[s];
    return i;
  }
  return n;
}
function Gt(n, i) {
  return n ? [...new Set([].concat(n, i))] : i;
}
function to(n, i) {
  return n ? wt(/* @__PURE__ */ Object.create(null), n, i) : i;
}
function ru(n, i) {
  return n ? Re(n) && Re(i) ? [.../* @__PURE__ */ new Set([...n, ...i])] : wt(
    /* @__PURE__ */ Object.create(null),
    yo(n),
    yo(i ?? {})
  ) : i;
}
function mf(n, i) {
  if (!n) return i;
  if (!i) return n;
  const s = wt(/* @__PURE__ */ Object.create(null), n);
  for (const u in i)
    s[u] = Gt(n[u], i[u]);
  return s;
}
function lc() {
  return {
    app: null,
    config: {
      isNativeTag: Mc,
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
let gf = 0;
function vf(n, i) {
  return function(u, l = null) {
    Me(u) || (u = wt({}, u)), l != null && !at(l) && (l = null);
    const h = lc(), y = /* @__PURE__ */ new WeakSet(), b = [];
    let A = !1;
    const K = h.app = {
      _uid: gf++,
      _component: u,
      _props: l,
      _container: null,
      _context: h,
      _instance: null,
      version: zf,
      get config() {
        return h.config;
      },
      set config(k) {
      },
      use(k, ...D) {
        return y.has(k) || (k && Me(k.install) ? (y.add(k), k.install(K, ...D)) : Me(k) && (y.add(k), k(K, ...D))), K;
      },
      mixin(k) {
        return h.mixins.includes(k) || h.mixins.push(k), K;
      },
      component(k, D) {
        return D ? (h.components[k] = D, K) : h.components[k];
      },
      directive(k, D) {
        return D ? (h.directives[k] = D, K) : h.directives[k];
      },
      mount(k, D, H) {
        if (!A) {
          const ne = K._ceVNode || pt(u, l);
          return ne.appContext = h, H === !0 ? H = "svg" : H === !1 && (H = void 0), D && i ? i(ne, k) : n(ne, k, H), A = !0, K._container = k, k.__vue_app__ = K, _o(ne.component);
        }
      },
      onUnmount(k) {
        b.push(k);
      },
      unmount() {
        A && (kn(
          b,
          K._instance,
          16
        ), n(null, K._container), delete K._container.__vue_app__);
      },
      provide(k, D) {
        return h.provides[k] = D, K;
      },
      runWithContext(k) {
        const D = zr;
        zr = K;
        try {
          return k();
        } finally {
          zr = D;
        }
      }
    };
    return K;
  };
}
let zr = null;
function bf(n, i) {
  if (Ot) {
    let s = Ot.provides;
    const u = Ot.parent && Ot.parent.provides;
    u === s && (s = Ot.provides = Object.create(u)), s[n] = i;
  }
}
function Io(n, i, s = !1) {
  const u = Ot || Ct;
  if (u || zr) {
    let l = zr ? zr._context.provides : u ? u.parent == null || u.ce ? u.vnode.appContext && u.vnode.appContext.provides : u.parent.provides : void 0;
    if (l && n in l)
      return l[n];
    if (arguments.length > 1)
      return s && Me(i) ? i.call(u && u.proxy) : i;
  }
}
function Jd() {
  return !!(Ot || Ct || zr);
}
const fc = {}, hc = () => Object.create(fc), dc = (n) => Object.getPrototypeOf(n) === fc;
function _f(n, i, s, u = !1) {
  const l = {}, h = hc();
  n.propsDefaults = /* @__PURE__ */ Object.create(null), pc(n, i, l, h);
  for (const y in n.propsOptions[0])
    y in l || (l[y] = void 0);
  s ? n.props = u ? l : xl(l) : n.type.props ? n.props = l : n.props = h, n.attrs = h;
}
function wf(n, i, s, u) {
  const {
    props: l,
    attrs: h,
    vnode: { patchFlag: y }
  } = n, b = Ze(l), [A] = n.propsOptions;
  let K = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (u || y > 0) && !(y & 16)
  ) {
    if (y & 8) {
      const k = n.vnode.dynamicProps;
      for (let D = 0; D < k.length; D++) {
        let H = k[D];
        if (ua(n.emitsOptions, H))
          continue;
        const ne = i[H];
        if (A)
          if (nt(h, H))
            ne !== h[H] && (h[H] = ne, K = !0);
          else {
            const G = Cn(H);
            l[G] = os(
              A,
              b,
              G,
              ne,
              n,
              !1
            );
          }
        else
          ne !== h[H] && (h[H] = ne, K = !0);
      }
    }
  } else {
    pc(n, i, l, h) && (K = !0);
    let k;
    for (const D in b)
      (!i || // for camelCase
      !nt(i, D) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((k = bi(D)) === D || !nt(i, k))) && (A ? s && // for camelCase
      (s[D] !== void 0 || // for kebab-case
      s[k] !== void 0) && (l[D] = os(
        A,
        b,
        D,
        void 0,
        n,
        !0
      )) : delete l[D]);
    if (h !== b)
      for (const D in h)
        (!i || !nt(i, D)) && (delete h[D], K = !0);
  }
  K && rr(n.attrs, "set", "");
}
function pc(n, i, s, u) {
  const [l, h] = n.propsOptions;
  let y = !1, b;
  if (i)
    for (let A in i) {
      if (ci(A))
        continue;
      const K = i[A];
      let k;
      l && nt(l, k = Cn(A)) ? !h || !h.includes(k) ? s[k] = K : (b || (b = {}))[k] = K : ua(n.emitsOptions, A) || (!(A in u) || K !== u[A]) && (u[A] = K, y = !0);
    }
  if (h) {
    const A = Ze(s), K = b || et;
    for (let k = 0; k < h.length; k++) {
      const D = h[k];
      s[D] = os(
        l,
        A,
        D,
        K[D],
        n,
        !nt(K, D)
      );
    }
  }
  return y;
}
function os(n, i, s, u, l, h) {
  const y = n[s];
  if (y != null) {
    const b = nt(y, "default");
    if (b && u === void 0) {
      const A = y.default;
      if (y.type !== Function && !y.skipFactory && Me(A)) {
        const { propsDefaults: K } = l;
        if (s in K)
          u = K[s];
        else {
          const k = ei(l);
          u = K[s] = A.call(
            null,
            i
          ), k();
        }
      } else
        u = A;
      l.ce && l.ce._setProp(s, u);
    }
    y[
      0
      /* shouldCast */
    ] && (h && !b ? u = !1 : y[
      1
      /* shouldCastTrue */
    ] && (u === "" || u === bi(s)) && (u = !0));
  }
  return u;
}
const xf = /* @__PURE__ */ new WeakMap();
function yc(n, i, s = !1) {
  const u = s ? xf : i.propsCache, l = u.get(n);
  if (l)
    return l;
  const h = n.props, y = {}, b = [];
  let A = !1;
  if (!Me(n)) {
    const k = (D) => {
      A = !0;
      const [H, ne] = yc(D, i, !0);
      wt(y, H), ne && b.push(...ne);
    };
    !s && i.mixins.length && i.mixins.forEach(k), n.extends && k(n.extends), n.mixins && n.mixins.forEach(k);
  }
  if (!h && !A)
    return at(n) && u.set(n, si), si;
  if (Re(h))
    for (let k = 0; k < h.length; k++) {
      const D = Cn(h[k]);
      iu(D) && (y[D] = et);
    }
  else if (h)
    for (const k in h) {
      const D = Cn(k);
      if (iu(D)) {
        const H = h[k], ne = y[D] = Re(H) || Me(H) ? { type: H } : wt({}, H), G = ne.type;
        let X = !1, Te = !0;
        if (Re(G))
          for (let be = 0; be < G.length; ++be) {
            const ue = G[be], q = Me(ue) && ue.name;
            if (q === "Boolean") {
              X = !0;
              break;
            } else q === "String" && (Te = !1);
          }
        else
          X = Me(G) && G.name === "Boolean";
        ne[
          0
          /* shouldCast */
        ] = X, ne[
          1
          /* shouldCastTrue */
        ] = Te, (X || nt(ne, "default")) && b.push(D);
      }
    }
  const K = [y, b];
  return at(n) && u.set(n, K), K;
}
function iu(n) {
  return n[0] !== "$" && !ci(n);
}
const Ks = (n) => n[0] === "_" || n === "$stable", js = (n) => Re(n) ? n.map(tn) : [tn(n)], Tf = (n, i, s) => {
  if (i._n)
    return i;
  const u = Xu((...l) => js(i(...l)), s);
  return u._c = !1, u;
}, mc = (n, i, s) => {
  const u = n._ctx;
  for (const l in n) {
    if (Ks(l)) continue;
    const h = n[l];
    if (Me(h))
      i[l] = Tf(l, h, u);
    else if (h != null) {
      const y = js(h);
      i[l] = () => y;
    }
  }
}, gc = (n, i) => {
  const s = js(i);
  n.slots.default = () => s;
}, vc = (n, i, s) => {
  for (const u in i)
    (s || !Ks(u)) && (n[u] = i[u]);
}, Ef = (n, i, s) => {
  const u = n.slots = hc();
  if (n.vnode.shapeFlag & 32) {
    const l = i.__;
    l && Ga(u, "__", l, !0);
    const h = i._;
    h ? (vc(u, i, s), s && Ga(u, "_", h, !0)) : mc(i, u);
  } else i && gc(n, i);
}, Of = (n, i, s) => {
  const { vnode: u, slots: l } = n;
  let h = !0, y = et;
  if (u.shapeFlag & 32) {
    const b = i._;
    b ? s && b === 1 ? h = !1 : vc(l, i, s) : (h = !i.$stable, mc(i, l)), y = i;
  } else i && (gc(n, i), y = { default: 1 });
  if (h)
    for (const b in l)
      !Ks(b) && y[b] == null && delete l[b];
}, Et = Ac;
function Zd(n) {
  return bc(n);
}
function ep(n) {
  return bc(n, Gl);
}
function bc(n, i) {
  const s = Zo();
  s.__VUE__ = !0;
  const {
    insert: u,
    remove: l,
    patchProp: h,
    createElement: y,
    createText: b,
    createComment: A,
    setText: K,
    setElementText: k,
    parentNode: D,
    nextSibling: H,
    setScopeId: ne = En,
    insertStaticContent: G
  } = n, X = (F, j, Q, fe = null, ae = null, ce = null, we = void 0, me = null, le = !!j.dynamicChildren) => {
    if (F === j)
      return;
    F && !Tn(F, j) && (fe = N(F), Nt(F, ae, ce, !0), F = null), j.patchFlag === -2 && (le = !1, j.dynamicChildren = null);
    const { type: he, ref: ke, shapeFlag: xe } = j;
    switch (he) {
      case Jr:
        Te(F, j, Q, fe);
        break;
      case _t:
        be(F, j, Q, fe);
        break;
      case so:
        F == null && ue(j, Q, fe, we);
        break;
      case zt:
        de(
          F,
          j,
          Q,
          fe,
          ae,
          ce,
          we,
          me,
          le
        );
        break;
      default:
        xe & 1 ? oe(
          F,
          j,
          Q,
          fe,
          ae,
          ce,
          we,
          me,
          le
        ) : xe & 6 ? Ee(
          F,
          j,
          Q,
          fe,
          ae,
          ce,
          we,
          me,
          le
        ) : (xe & 64 || xe & 128) && he.process(
          F,
          j,
          Q,
          fe,
          ae,
          ce,
          we,
          me,
          le,
          V
        );
    }
    ke != null && ae ? hi(ke, F && F.ref, ce, j || F, !j) : ke == null && F && F.ref != null && hi(F.ref, null, ce, F, !0);
  }, Te = (F, j, Q, fe) => {
    if (F == null)
      u(
        j.el = b(j.children),
        Q,
        fe
      );
    else {
      const ae = j.el = F.el;
      j.children !== F.children && K(ae, j.children);
    }
  }, be = (F, j, Q, fe) => {
    F == null ? u(
      j.el = A(j.children || ""),
      Q,
      fe
    ) : j.el = F.el;
  }, ue = (F, j, Q, fe) => {
    [F.el, F.anchor] = G(
      F.children,
      j,
      Q,
      fe,
      F.el,
      F.anchor
    );
  }, q = ({ el: F, anchor: j }, Q, fe) => {
    let ae;
    for (; F && F !== j; )
      ae = H(F), u(F, Q, fe), F = ae;
    u(j, Q, fe);
  }, M = ({ el: F, anchor: j }) => {
    let Q;
    for (; F && F !== j; )
      Q = H(F), l(F), F = Q;
    l(j);
  }, oe = (F, j, Q, fe, ae, ce, we, me, le) => {
    j.type === "svg" ? we = "svg" : j.type === "math" && (we = "mathml"), F == null ? se(
      j,
      Q,
      fe,
      ae,
      ce,
      we,
      me,
      le
    ) : P(
      F,
      j,
      ae,
      ce,
      we,
      me,
      le
    );
  }, se = (F, j, Q, fe, ae, ce, we, me) => {
    let le, he;
    const { props: ke, shapeFlag: xe, transition: Pe, dirs: De } = F;
    if (le = F.el = y(
      F.type,
      ce,
      ke && ke.is,
      ke
    ), xe & 8 ? k(le, F.children) : xe & 16 && te(
      F.children,
      le,
      null,
      fe,
      ae,
      $a(F, ce),
      we,
      me
    ), De && Pn(F, null, fe, "created"), W(le, F, F.scopeId, we, fe), ke) {
      for (const Xe in ke)
        Xe !== "value" && !ci(Xe) && h(le, Xe, null, ke[Xe], ce, fe);
      "value" in ke && h(le, "value", null, ke.value, ce), (he = ke.onVnodeBeforeMount) && en(he, fe, F);
    }
    De && Pn(F, null, fe, "beforeMount");
    const Ke = _c(ae, Pe);
    Ke && Pe.beforeEnter(le), u(le, j, Q), ((he = ke && ke.onVnodeMounted) || Ke || De) && Et(() => {
      he && en(he, fe, F), Ke && Pe.enter(le), De && Pn(F, null, fe, "mounted");
    }, ae);
  }, W = (F, j, Q, fe, ae) => {
    if (Q && ne(F, Q), fe)
      for (let ce = 0; ce < fe.length; ce++)
        ne(F, fe[ce]);
    if (ae) {
      let ce = ae.subTree;
      if (j === ce || $o(ce.type) && (ce.ssContent === j || ce.ssFallback === j)) {
        const we = ae.vnode;
        W(
          F,
          we,
          we.scopeId,
          we.slotScopeIds,
          ae.parent
        );
      }
    }
  }, te = (F, j, Q, fe, ae, ce, we, me, le = 0) => {
    for (let he = le; he < F.length; he++) {
      const ke = F[he] = me ? hr(F[he]) : tn(F[he]);
      X(
        null,
        ke,
        j,
        Q,
        fe,
        ae,
        ce,
        we,
        me
      );
    }
  }, P = (F, j, Q, fe, ae, ce, we) => {
    const me = j.el = F.el;
    let { patchFlag: le, dynamicChildren: he, dirs: ke } = j;
    le |= F.patchFlag & 16;
    const xe = F.props || et, Pe = j.props || et;
    let De;
    if (Q && Yr(Q, !1), (De = Pe.onVnodeBeforeUpdate) && en(De, Q, j, F), ke && Pn(j, F, Q, "beforeUpdate"), Q && Yr(Q, !0), (xe.innerHTML && Pe.innerHTML == null || xe.textContent && Pe.textContent == null) && k(me, ""), he ? ie(
      F.dynamicChildren,
      he,
      me,
      Q,
      fe,
      $a(j, ae),
      ce
    ) : we || Ce(
      F,
      j,
      me,
      null,
      Q,
      fe,
      $a(j, ae),
      ce,
      !1
    ), le > 0) {
      if (le & 16)
        pe(me, xe, Pe, Q, ae);
      else if (le & 2 && xe.class !== Pe.class && h(me, "class", null, Pe.class, ae), le & 4 && h(me, "style", xe.style, Pe.style, ae), le & 8) {
        const Ke = j.dynamicProps;
        for (let Xe = 0; Xe < Ke.length; Xe++) {
          const $e = Ke[Xe], ht = xe[$e], st = Pe[$e];
          (st !== ht || $e === "value") && h(me, $e, ht, st, ae, Q);
        }
      }
      le & 1 && F.children !== j.children && k(me, j.children);
    } else !we && he == null && pe(me, xe, Pe, Q, ae);
    ((De = Pe.onVnodeUpdated) || ke) && Et(() => {
      De && en(De, Q, j, F), ke && Pn(j, F, Q, "updated");
    }, fe);
  }, ie = (F, j, Q, fe, ae, ce, we) => {
    for (let me = 0; me < j.length; me++) {
      const le = F[me], he = j[me], ke = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        le.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (le.type === zt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Tn(le, he) || // - In the case of a component, it could contain anything.
        le.shapeFlag & 198) ? D(le.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Q
        )
      );
      X(
        le,
        he,
        ke,
        null,
        fe,
        ae,
        ce,
        we,
        !0
      );
    }
  }, pe = (F, j, Q, fe, ae) => {
    if (j !== Q) {
      if (j !== et)
        for (const ce in j)
          !ci(ce) && !(ce in Q) && h(
            F,
            ce,
            j[ce],
            null,
            ae,
            fe
          );
      for (const ce in Q) {
        if (ci(ce)) continue;
        const we = Q[ce], me = j[ce];
        we !== me && ce !== "value" && h(F, ce, me, we, ae, fe);
      }
      "value" in Q && h(F, "value", j.value, Q.value, ae);
    }
  }, de = (F, j, Q, fe, ae, ce, we, me, le) => {
    const he = j.el = F ? F.el : b(""), ke = j.anchor = F ? F.anchor : b("");
    let { patchFlag: xe, dynamicChildren: Pe, slotScopeIds: De } = j;
    De && (me = me ? me.concat(De) : De), F == null ? (u(he, Q, fe), u(ke, Q, fe), te(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      j.children || [],
      Q,
      ke,
      ae,
      ce,
      we,
      me,
      le
    )) : xe > 0 && xe & 64 && Pe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    F.dynamicChildren ? (ie(
      F.dynamicChildren,
      Pe,
      Q,
      ae,
      ce,
      we,
      me
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (j.key != null || ae && j === ae.subTree) && Ms(
      F,
      j,
      !0
      /* shallow */
    )) : Ce(
      F,
      j,
      Q,
      ke,
      ae,
      ce,
      we,
      me,
      le
    );
  }, Ee = (F, j, Q, fe, ae, ce, we, me, le) => {
    j.slotScopeIds = me, F == null ? j.shapeFlag & 512 ? ae.ctx.activate(
      j,
      Q,
      fe,
      we,
      le
    ) : qe(
      j,
      Q,
      fe,
      ae,
      ce,
      we,
      le
    ) : Be(F, j, le);
  }, qe = (F, j, Q, fe, ae, ce, we) => {
    const me = F.component = Dc(
      F,
      fe,
      ae
    );
    if (vo(F) && (me.ctx.renderer = V), Fc(me, !1, we), me.asyncDep) {
      if (ae && ae.registerDep(me, Ae, we), !F.el) {
        const le = me.subTree = pt(_t);
        be(null, le, j, Q);
      }
    } else
      Ae(
        me,
        F,
        j,
        Q,
        ae,
        ce,
        we
      );
  }, Be = (F, j, Q) => {
    const fe = j.component = F.component;
    if (Ff(F, j, Q))
      if (fe.asyncDep && !fe.asyncResolved) {
        Oe(fe, j, Q);
        return;
      } else
        fe.next = j, fe.update();
    else
      j.el = F.el, fe.vnode = j;
  }, Ae = (F, j, Q, fe, ae, ce, we) => {
    const me = () => {
      if (F.isMounted) {
        let { next: xe, bu: Pe, u: De, parent: Ke, vnode: Xe } = F;
        {
          const ft = wc(F);
          if (ft) {
            xe && (xe.el = Xe.el, Oe(F, xe, we)), ft.asyncDep.then(() => {
              F.isUnmounted || me();
            });
            return;
          }
        }
        let $e = xe, ht;
        Yr(F, !1), xe ? (xe.el = Xe.el, Oe(F, xe, we)) : xe = Xe, Pe && no(Pe), (ht = xe.props && xe.props.onVnodeBeforeUpdate) && en(ht, Ke, xe, Xe), Yr(F, !0);
        const st = Ro(F), it = F.subTree;
        F.subTree = st, X(
          it,
          st,
          // parent may have changed if it's in a teleport
          D(it.el),
          // anchor may have changed if it's in a fragment
          N(it),
          F,
          ae,
          ce
        ), xe.el = st.el, $e === null && ca(F, st.el), De && Et(De, ae), (ht = xe.props && xe.props.onVnodeUpdated) && Et(
          () => en(ht, Ke, xe, Xe),
          ae
        );
      } else {
        let xe;
        const { el: Pe, props: De } = j, { bm: Ke, m: Xe, parent: $e, root: ht, type: st } = F, it = pr(j);
        if (Yr(F, !1), Ke && no(Ke), !it && (xe = De && De.onVnodeBeforeMount) && en(xe, $e, j), Yr(F, !0), Pe && _e) {
          const ft = () => {
            F.subTree = Ro(F), _e(
              Pe,
              F.subTree,
              F,
              ae,
              null
            );
          };
          it && st.__asyncHydrate ? st.__asyncHydrate(
            Pe,
            F,
            ft
          ) : ft();
        } else {
          ht.ce && // @ts-expect-error _def is private
          ht.ce._def.shadowRoot !== !1 && ht.ce._injectChildStyle(st);
          const ft = F.subTree = Ro(F);
          X(
            null,
            ft,
            Q,
            fe,
            F,
            ae,
            ce
          ), j.el = ft.el;
        }
        if (Xe && Et(Xe, ae), !it && (xe = De && De.onVnodeMounted)) {
          const ft = j;
          Et(
            () => en(xe, $e, ft),
            ae
          );
        }
        (j.shapeFlag & 256 || $e && pr($e.vnode) && $e.vnode.shapeFlag & 256) && F.a && Et(F.a, ae), F.isMounted = !0, j = Q = fe = null;
      }
    };
    F.scope.on();
    const le = F.effect = new Ko(me);
    F.scope.off();
    const he = F.update = le.run.bind(le), ke = F.job = le.runIfDirty.bind(le);
    ke.i = F, ke.id = F.uid, le.scheduler = () => Ps(ke), Yr(F, !0), he();
  }, Oe = (F, j, Q) => {
    j.component = F;
    const fe = F.vnode.props;
    F.vnode = j, F.next = null, wf(F, j.props, fe, Q), Of(F, j.children, Q), or(), Gs(F), ar();
  }, Ce = (F, j, Q, fe, ae, ce, we, me, le = !1) => {
    const he = F && F.children, ke = F ? F.shapeFlag : 0, xe = j.children, { patchFlag: Pe, shapeFlag: De } = j;
    if (Pe > 0) {
      if (Pe & 128) {
        rt(
          he,
          xe,
          Q,
          fe,
          ae,
          ce,
          we,
          me,
          le
        );
        return;
      } else if (Pe & 256) {
        We(
          he,
          xe,
          Q,
          fe,
          ae,
          ce,
          we,
          me,
          le
        );
        return;
      }
    }
    De & 8 ? (ke & 16 && yt(he, ae, ce), xe !== he && k(Q, xe)) : ke & 16 ? De & 16 ? rt(
      he,
      xe,
      Q,
      fe,
      ae,
      ce,
      we,
      me,
      le
    ) : yt(he, ae, ce, !0) : (ke & 8 && k(Q, ""), De & 16 && te(
      xe,
      Q,
      fe,
      ae,
      ce,
      we,
      me,
      le
    ));
  }, We = (F, j, Q, fe, ae, ce, we, me, le) => {
    F = F || si, j = j || si;
    const he = F.length, ke = j.length, xe = Math.min(he, ke);
    let Pe;
    for (Pe = 0; Pe < xe; Pe++) {
      const De = j[Pe] = le ? hr(j[Pe]) : tn(j[Pe]);
      X(
        F[Pe],
        De,
        Q,
        null,
        ae,
        ce,
        we,
        me,
        le
      );
    }
    he > ke ? yt(
      F,
      ae,
      ce,
      !0,
      !1,
      xe
    ) : te(
      j,
      Q,
      fe,
      ae,
      ce,
      we,
      me,
      le,
      xe
    );
  }, rt = (F, j, Q, fe, ae, ce, we, me, le) => {
    let he = 0;
    const ke = j.length;
    let xe = F.length - 1, Pe = ke - 1;
    for (; he <= xe && he <= Pe; ) {
      const De = F[he], Ke = j[he] = le ? hr(j[he]) : tn(j[he]);
      if (Tn(De, Ke))
        X(
          De,
          Ke,
          Q,
          null,
          ae,
          ce,
          we,
          me,
          le
        );
      else
        break;
      he++;
    }
    for (; he <= xe && he <= Pe; ) {
      const De = F[xe], Ke = j[Pe] = le ? hr(j[Pe]) : tn(j[Pe]);
      if (Tn(De, Ke))
        X(
          De,
          Ke,
          Q,
          null,
          ae,
          ce,
          we,
          me,
          le
        );
      else
        break;
      xe--, Pe--;
    }
    if (he > xe) {
      if (he <= Pe) {
        const De = Pe + 1, Ke = De < ke ? j[De].el : fe;
        for (; he <= Pe; )
          X(
            null,
            j[he] = le ? hr(j[he]) : tn(j[he]),
            Q,
            Ke,
            ae,
            ce,
            we,
            me,
            le
          ), he++;
      }
    } else if (he > Pe)
      for (; he <= xe; )
        Nt(F[he], ae, ce, !0), he++;
    else {
      const De = he, Ke = he, Xe = /* @__PURE__ */ new Map();
      for (he = Ke; he <= Pe; he++) {
        const re = j[he] = le ? hr(j[he]) : tn(j[he]);
        re.key != null && Xe.set(re.key, he);
      }
      let $e, ht = 0;
      const st = Pe - Ke + 1;
      let it = !1, ft = 0;
      const nn = new Array(st);
      for (he = 0; he < st; he++) nn[he] = 0;
      for (he = De; he <= xe; he++) {
        const re = F[he];
        if (ht >= st) {
          Nt(re, ae, ce, !0);
          continue;
        }
        let dt;
        if (re.key != null)
          dt = Xe.get(re.key);
        else
          for ($e = Ke; $e <= Pe; $e++)
            if (nn[$e - Ke] === 0 && Tn(re, j[$e])) {
              dt = $e;
              break;
            }
        dt === void 0 ? Nt(re, ae, ce, !0) : (nn[dt - Ke] = he + 1, dt >= ft ? ft = dt : it = !0, X(
          re,
          j[dt],
          Q,
          null,
          ae,
          ce,
          we,
          me,
          le
        ), ht++);
      }
      const bt = it ? Cf(nn) : si;
      for ($e = bt.length - 1, he = st - 1; he >= 0; he--) {
        const re = Ke + he, dt = j[re], St = re + 1 < ke ? j[re + 1].el : fe;
        nn[he] === 0 ? X(
          null,
          dt,
          Q,
          St,
          ae,
          ce,
          we,
          me,
          le
        ) : it && ($e < 0 || he !== bt[$e] ? lt(dt, Q, St, 2) : $e--);
      }
    }
  }, lt = (F, j, Q, fe, ae = null) => {
    const { el: ce, type: we, transition: me, children: le, shapeFlag: he } = F;
    if (he & 6) {
      lt(F.component.subTree, j, Q, fe);
      return;
    }
    if (he & 128) {
      F.suspense.move(j, Q, fe);
      return;
    }
    if (he & 64) {
      we.move(F, j, Q, V);
      return;
    }
    if (we === zt) {
      u(ce, j, Q);
      for (let xe = 0; xe < le.length; xe++)
        lt(le[xe], j, Q, fe);
      u(F.anchor, j, Q);
      return;
    }
    if (we === so) {
      q(F, j, Q);
      return;
    }
    if (fe !== 2 && he & 1 && me)
      if (fe === 0)
        me.beforeEnter(ce), u(ce, j, Q), Et(() => me.enter(ce), ae);
      else {
        const { leave: xe, delayLeave: Pe, afterLeave: De } = me, Ke = () => {
          F.ctx.isUnmounted ? l(ce) : u(ce, j, Q);
        }, Xe = () => {
          xe(ce, () => {
            Ke(), De && De();
          });
        };
        Pe ? Pe(ce, Ke, Xe) : Xe();
      }
    else
      u(ce, j, Q);
  }, Nt = (F, j, Q, fe = !1, ae = !1) => {
    const {
      type: ce,
      props: we,
      ref: me,
      children: le,
      dynamicChildren: he,
      shapeFlag: ke,
      patchFlag: xe,
      dirs: Pe,
      cacheIndex: De
    } = F;
    if (xe === -2 && (ae = !1), me != null && (or(), hi(me, null, Q, F, !0), ar()), De != null && (j.renderCache[De] = void 0), ke & 256) {
      j.ctx.deactivate(F);
      return;
    }
    const Ke = ke & 1 && Pe, Xe = !pr(F);
    let $e;
    if (Xe && ($e = we && we.onVnodeBeforeUnmount) && en($e, j, F), ke & 6)
      Zt(F.component, Q, fe);
    else {
      if (ke & 128) {
        F.suspense.unmount(Q, fe);
        return;
      }
      Ke && Pn(F, null, j, "beforeUnmount"), ke & 64 ? F.type.remove(
        F,
        j,
        Q,
        V,
        fe
      ) : he && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !he.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ce !== zt || xe > 0 && xe & 64) ? yt(
        he,
        j,
        Q,
        !1,
        !0
      ) : (ce === zt && xe & 384 || !ae && ke & 16) && yt(le, j, Q), fe && Pt(F);
    }
    (Xe && ($e = we && we.onVnodeUnmounted) || Ke) && Et(() => {
      $e && en($e, j, F), Ke && Pn(F, null, j, "unmounted");
    }, Q);
  }, Pt = (F) => {
    const { type: j, el: Q, anchor: fe, transition: ae } = F;
    if (j === zt) {
      An(Q, fe);
      return;
    }
    if (j === so) {
      M(F);
      return;
    }
    const ce = () => {
      l(Q), ae && !ae.persisted && ae.afterLeave && ae.afterLeave();
    };
    if (F.shapeFlag & 1 && ae && !ae.persisted) {
      const { leave: we, delayLeave: me } = ae, le = () => we(Q, ce);
      me ? me(F.el, ce, le) : le();
    } else
      ce();
  }, An = (F, j) => {
    let Q;
    for (; F !== j; )
      Q = H(F), l(F), F = Q;
    l(j);
  }, Zt = (F, j, Q) => {
    const {
      bum: fe,
      scope: ae,
      job: ce,
      subTree: we,
      um: me,
      m: le,
      a: he,
      parent: ke,
      slots: { __: xe }
    } = F;
    Ho(le), Ho(he), fe && no(fe), ke && Re(xe) && xe.forEach((Pe) => {
      ke.renderCache[Pe] = void 0;
    }), ae.stop(), ce && (ce.flags |= 8, Nt(we, F, j, Q)), me && Et(me, j), Et(() => {
      F.isUnmounted = !0;
    }, j), j && j.pendingBranch && !j.isUnmounted && F.asyncDep && !F.asyncResolved && F.suspenseId === j.pendingId && (j.deps--, j.deps === 0 && j.resolve());
  }, yt = (F, j, Q, fe = !1, ae = !1, ce = 0) => {
    for (let we = ce; we < F.length; we++)
      Nt(F[we], j, Q, fe, ae);
  }, N = (F) => {
    if (F.shapeFlag & 6)
      return N(F.component.subTree);
    if (F.shapeFlag & 128)
      return F.suspense.next();
    const j = H(F.anchor || F.el), Q = j && j[Qu];
    return Q ? H(Q) : j;
  };
  let w = !1;
  const B = (F, j, Q) => {
    F == null ? j._vnode && Nt(j._vnode, null, null, !0) : X(
      j._vnode || null,
      F,
      j,
      null,
      null,
      null,
      Q
    ), j._vnode = F, w || (w = !0, Gs(), Uo(), w = !1);
  }, V = {
    p: X,
    um: Nt,
    m: lt,
    r: Pt,
    mt: qe,
    mc: te,
    pc: Ce,
    pbc: ie,
    n: N,
    o: n
  };
  let Ue, _e;
  return i && ([Ue, _e] = i(
    V
  )), {
    render: B,
    hydrate: Ue,
    createApp: vf(B, Ue)
  };
}
function $a({ type: n, props: i }, s) {
  return s === "svg" && n === "foreignObject" || s === "mathml" && n === "annotation-xml" && i && i.encoding && i.encoding.includes("html") ? void 0 : s;
}
function Yr({ effect: n, job: i }, s) {
  s ? (n.flags |= 32, i.flags |= 4) : (n.flags &= -33, i.flags &= -5);
}
function _c(n, i) {
  return (!n || n && !n.pendingBranch) && i && !i.persisted;
}
function Ms(n, i, s = !1) {
  const u = n.children, l = i.children;
  if (Re(u) && Re(l))
    for (let h = 0; h < u.length; h++) {
      const y = u[h];
      let b = l[h];
      b.shapeFlag & 1 && !b.dynamicChildren && ((b.patchFlag <= 0 || b.patchFlag === 32) && (b = l[h] = hr(l[h]), b.el = y.el), !s && b.patchFlag !== -2 && Ms(y, b)), b.type === Jr && (b.el = y.el), b.type === _t && !b.el && (b.el = y.el);
    }
}
function Cf(n) {
  const i = n.slice(), s = [0];
  let u, l, h, y, b;
  const A = n.length;
  for (u = 0; u < A; u++) {
    const K = n[u];
    if (K !== 0) {
      if (l = s[s.length - 1], n[l] < K) {
        i[u] = l, s.push(u);
        continue;
      }
      for (h = 0, y = s.length - 1; h < y; )
        b = h + y >> 1, n[s[b]] < K ? h = b + 1 : y = b;
      K < n[s[h]] && (h > 0 && (i[u] = s[h - 1]), s[h] = u);
    }
  }
  for (h = s.length, y = s[h - 1]; h-- > 0; )
    s[h] = y, y = i[y];
  return s;
}
function wc(n) {
  const i = n.subTree.component;
  if (i)
    return i.asyncDep && !i.asyncResolved ? i : wc(i);
}
function Ho(n) {
  if (n)
    for (let i = 0; i < n.length; i++)
      n[i].flags |= 8;
}
const Af = Symbol.for("v-scx"), Nf = () => Io(Af);
function xc(n, i) {
  return bo(n, null, i);
}
function tp(n, i) {
  return bo(
    n,
    null,
    { flush: "post" }
  );
}
function Pf(n, i) {
  return bo(
    n,
    null,
    { flush: "sync" }
  );
}
function Do(n, i, s) {
  return bo(n, i, s);
}
function bo(n, i, s = et) {
  const { immediate: u, deep: l, flush: h, once: y } = s, b = wt({}, s), A = i && u || !i && h !== "post";
  let K;
  if (yi) {
    if (h === "sync") {
      const ne = Nf();
      K = ne.__watcherHandles || (ne.__watcherHandles = []);
    } else if (!A) {
      const ne = () => {
      };
      return ne.stop = En, ne.resume = En, ne.pause = En, ne;
    }
  }
  const k = Ot;
  b.call = (ne, G, X) => kn(ne, k, G, X);
  let D = !1;
  h === "post" ? b.scheduler = (ne) => {
    Et(ne, k && k.suspense);
  } : h !== "sync" && (D = !0, b.scheduler = (ne, G) => {
    G ? ne() : Ps(ne);
  }), b.augmentJob = (ne) => {
    i && (ne.flags |= 4), D && (ne.flags |= 2, k && (ne.id = k.uid, ne.i = k));
  };
  const H = Dl(n, i, b);
  return yi && (K ? K.push(H) : A && H()), H;
}
function Sf(n, i, s) {
  const u = this.proxy, l = vt(n) ? n.includes(".") ? Tc(u, n) : () => u[n] : n.bind(u, u);
  let h;
  Me(i) ? h = i : (h = i.handler, s = i);
  const y = ei(this), b = bo(l, h.bind(u), s);
  return y(), b;
}
function Tc(n, i) {
  const s = i.split(".");
  return () => {
    let u = n;
    for (let l = 0; l < s.length && u; l++)
      u = u[s[l]];
    return u;
  };
}
function np(n, i, s = et) {
  const u = ti(), l = Cn(i), h = bi(i), y = Ec(n, l), b = Al((A, K) => {
    let k, D = et, H;
    return Pf(() => {
      const ne = n[l];
      Xt(k, ne) && (k = ne, K());
    }), {
      get() {
        return A(), s.get ? s.get(k) : k;
      },
      set(ne) {
        const G = s.set ? s.set(ne) : ne;
        if (!Xt(G, k) && !(D !== et && Xt(ne, D)))
          return;
        const X = u.vnode.props;
        X && // check if parent has passed v-model
        (i in X || l in X || h in X) && (`onUpdate:${i}` in X || `onUpdate:${l}` in X || `onUpdate:${h}` in X) || (k = ne, K()), u.emit(`update:${i}`, G), Xt(ne, G) && Xt(ne, D) && !Xt(G, H) && K(), D = ne, H = G;
      }
    };
  });
  return b[Symbol.iterator] = () => {
    let A = 0;
    return {
      next() {
        return A < 2 ? { value: A++ ? y || et : b, done: !1 } : { done: !0 };
      }
    };
  }, b;
}
const Ec = (n, i) => i === "modelValue" || i === "model-value" ? n.modelModifiers : n[`${i}Modifiers`] || n[`${Cn(i)}Modifiers`] || n[`${bi(i)}Modifiers`];
function kf(n, i, ...s) {
  if (n.isUnmounted) return;
  const u = n.vnode.props || et;
  let l = s;
  const h = i.startsWith("update:"), y = h && Ec(u, i.slice(7));
  y && (y.trim && (l = s.map((k) => vt(k) ? k.trim() : k)), y.number && (l = s.map($c)));
  let b, A = u[b = So(i)] || // also try camelCase event handler (#2249)
  u[b = So(Cn(i))];
  !A && h && (A = u[b = So(bi(i))]), A && kn(
    A,
    n,
    6,
    l
  );
  const K = u[b + "Once"];
  if (K) {
    if (!n.emitted)
      n.emitted = {};
    else if (n.emitted[b])
      return;
    n.emitted[b] = !0, kn(
      K,
      n,
      6,
      l
    );
  }
}
function Oc(n, i, s = !1) {
  const u = i.emitsCache, l = u.get(n);
  if (l !== void 0)
    return l;
  const h = n.emits;
  let y = {}, b = !1;
  if (!Me(n)) {
    const A = (K) => {
      const k = Oc(K, i, !0);
      k && (b = !0, wt(y, k));
    };
    !s && i.mixins.length && i.mixins.forEach(A), n.extends && A(n.extends), n.mixins && n.mixins.forEach(A);
  }
  return !h && !b ? (at(n) && u.set(n, null), null) : (Re(h) ? h.forEach((A) => y[A] = null) : wt(y, h), at(n) && u.set(n, y), y);
}
function ua(n, i) {
  return !n || !zo(i) ? !1 : (i = i.slice(2).replace(/Once$/, ""), nt(n, i[0].toLowerCase() + i.slice(1)) || nt(n, bi(i)) || nt(n, i));
}
function Ro(n) {
  const {
    type: i,
    vnode: s,
    proxy: u,
    withProxy: l,
    propsOptions: [h],
    slots: y,
    attrs: b,
    emit: A,
    render: K,
    renderCache: k,
    props: D,
    data: H,
    setupState: ne,
    ctx: G,
    inheritAttrs: X
  } = n, Te = po(n);
  let be, ue;
  try {
    if (s.shapeFlag & 4) {
      const M = l || u, oe = M;
      be = tn(
        K.call(
          oe,
          M,
          k,
          D,
          ne,
          H,
          G
        )
      ), ue = b;
    } else {
      const M = i;
      be = tn(
        M.length > 1 ? M(
          D,
          { attrs: b, slots: y, emit: A }
        ) : M(
          D,
          null
        )
      ), ue = i.props ? b : Df(b);
    }
  } catch (M) {
    uo.length = 0, _i(M, n, 1), be = pt(_t);
  }
  let q = be;
  if (ue && X !== !1) {
    const M = Object.keys(ue), { shapeFlag: oe } = q;
    M.length && oe & 7 && (h && M.some(gu) && (ue = Rf(
      ue,
      h
    )), q = sr(q, ue, !1, !0));
  }
  return s.dirs && (q = sr(q, null, !1, !0), q.dirs = q.dirs ? q.dirs.concat(s.dirs) : s.dirs), s.transition && pi(q, s.transition), be = q, po(Te), be;
}
function If(n, i = !0) {
  let s;
  for (let u = 0; u < n.length; u++) {
    const l = n[u];
    if (mr(l)) {
      if (l.type !== _t || l.children === "v-if") {
        if (s)
          return;
        s = l;
      }
    } else
      return;
  }
  return s;
}
const Df = (n) => {
  let i;
  for (const s in n)
    (s === "class" || s === "style" || zo(s)) && ((i || (i = {}))[s] = n[s]);
  return i;
}, Rf = (n, i) => {
  const s = {};
  for (const u in n)
    (!gu(u) || !(u.slice(9) in i)) && (s[u] = n[u]);
  return s;
};
function Ff(n, i, s) {
  const { props: u, children: l, component: h } = n, { props: y, children: b, patchFlag: A } = i, K = h.emitsOptions;
  if (i.dirs || i.transition)
    return !0;
  if (s && A >= 0) {
    if (A & 1024)
      return !0;
    if (A & 16)
      return u ? ou(u, y, K) : !!y;
    if (A & 8) {
      const k = i.dynamicProps;
      for (let D = 0; D < k.length; D++) {
        const H = k[D];
        if (y[H] !== u[H] && !ua(K, H))
          return !0;
      }
    }
  } else
    return (l || b) && (!b || !b.$stable) ? !0 : u === y ? !1 : u ? y ? ou(u, y, K) : !0 : !!y;
  return !1;
}
function ou(n, i, s) {
  const u = Object.keys(i);
  if (u.length !== Object.keys(n).length)
    return !0;
  for (let l = 0; l < u.length; l++) {
    const h = u[l];
    if (i[h] !== n[h] && !ua(s, h))
      return !0;
  }
  return !1;
}
function ca({ vnode: n, parent: i }, s) {
  for (; i; ) {
    const u = i.subTree;
    if (u.suspense && u.suspense.activeBranch === n && (u.el = n.el), u === n)
      (n = i.vnode).el = s, i = i.parent;
    else
      break;
  }
}
const $o = (n) => n.__isSuspense;
let as = 0;
const Bf = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(n, i, s, u, l, h, y, b, A, K) {
    if (n == null)
      Kf(
        i,
        s,
        u,
        l,
        h,
        y,
        b,
        A,
        K
      );
    else {
      if (h && h.deps > 0 && !n.suspense.isInFallback) {
        i.suspense = n.suspense, i.suspense.vnode = i, i.el = n.el;
        return;
      }
      jf(
        n,
        i,
        s,
        u,
        l,
        y,
        b,
        A,
        K
      );
    }
  },
  hydrate: Mf,
  normalize: Lf
}, rp = Bf;
function mo(n, i) {
  const s = n.props && n.props[i];
  Me(s) && s();
}
function Kf(n, i, s, u, l, h, y, b, A) {
  const {
    p: K,
    o: { createElement: k }
  } = A, D = k("div"), H = n.suspense = Cc(
    n,
    l,
    u,
    i,
    D,
    s,
    h,
    y,
    b,
    A
  );
  K(
    null,
    H.pendingBranch = n.ssContent,
    D,
    null,
    u,
    H,
    h,
    y
  ), H.deps > 0 ? (mo(n, "onPending"), mo(n, "onFallback"), K(
    null,
    n.ssFallback,
    i,
    s,
    u,
    null,
    // fallback tree will not have suspense context
    h,
    y
  ), di(H, n.ssFallback)) : H.resolve(!1, !0);
}
function jf(n, i, s, u, l, h, y, b, { p: A, um: K, o: { createElement: k } }) {
  const D = i.suspense = n.suspense;
  D.vnode = i, i.el = n.el;
  const H = i.ssContent, ne = i.ssFallback, { activeBranch: G, pendingBranch: X, isInFallback: Te, isHydrating: be } = D;
  if (X)
    D.pendingBranch = H, Tn(H, X) ? (A(
      X,
      H,
      D.hiddenContainer,
      null,
      l,
      D,
      h,
      y,
      b
    ), D.deps <= 0 ? D.resolve() : Te && (be || (A(
      G,
      ne,
      s,
      u,
      l,
      null,
      // fallback tree will not have suspense context
      h,
      y,
      b
    ), di(D, ne)))) : (D.pendingId = as++, be ? (D.isHydrating = !1, D.activeBranch = X) : K(X, l, D), D.deps = 0, D.effects.length = 0, D.hiddenContainer = k("div"), Te ? (A(
      null,
      H,
      D.hiddenContainer,
      null,
      l,
      D,
      h,
      y,
      b
    ), D.deps <= 0 ? D.resolve() : (A(
      G,
      ne,
      s,
      u,
      l,
      null,
      // fallback tree will not have suspense context
      h,
      y,
      b
    ), di(D, ne))) : G && Tn(H, G) ? (A(
      G,
      H,
      s,
      u,
      l,
      D,
      h,
      y,
      b
    ), D.resolve(!0)) : (A(
      null,
      H,
      D.hiddenContainer,
      null,
      l,
      D,
      h,
      y,
      b
    ), D.deps <= 0 && D.resolve()));
  else if (G && Tn(H, G))
    A(
      G,
      H,
      s,
      u,
      l,
      D,
      h,
      y,
      b
    ), di(D, H);
  else if (mo(i, "onPending"), D.pendingBranch = H, H.shapeFlag & 512 ? D.pendingId = H.component.suspenseId : D.pendingId = as++, A(
    null,
    H,
    D.hiddenContainer,
    null,
    l,
    D,
    h,
    y,
    b
  ), D.deps <= 0)
    D.resolve();
  else {
    const { timeout: ue, pendingId: q } = D;
    ue > 0 ? setTimeout(() => {
      D.pendingId === q && D.fallback(ne);
    }, ue) : ue === 0 && D.fallback(ne);
  }
}
function Cc(n, i, s, u, l, h, y, b, A, K, k = !1) {
  const {
    p: D,
    m: H,
    um: ne,
    n: G,
    o: { parentNode: X, remove: Te }
  } = K;
  let be;
  const ue = qf(n);
  ue && i && i.pendingBranch && (be = i.pendingId, i.deps++);
  const q = n.props ? Wc(n.props.timeout) : void 0, M = h, oe = {
    vnode: n,
    parent: i,
    parentComponent: s,
    namespace: y,
    container: u,
    hiddenContainer: l,
    deps: 0,
    pendingId: as++,
    timeout: typeof q == "number" ? q : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !k,
    isHydrating: k,
    isUnmounted: !1,
    effects: [],
    resolve(se = !1, W = !1) {
      const {
        vnode: te,
        activeBranch: P,
        pendingBranch: ie,
        pendingId: pe,
        effects: de,
        parentComponent: Ee,
        container: qe
      } = oe;
      let Be = !1;
      oe.isHydrating ? oe.isHydrating = !1 : se || (Be = P && ie.transition && ie.transition.mode === "out-in", Be && (P.transition.afterLeave = () => {
        pe === oe.pendingId && (H(
          ie,
          qe,
          h === M ? G(P) : h,
          0
        ), Ja(de));
      }), P && (X(P.el) === qe && (h = G(P)), ne(P, Ee, oe, !0)), Be || H(ie, qe, h, 0)), di(oe, ie), oe.pendingBranch = null, oe.isInFallback = !1;
      let Ae = oe.parent, Oe = !1;
      for (; Ae; ) {
        if (Ae.pendingBranch) {
          Ae.effects.push(...de), Oe = !0;
          break;
        }
        Ae = Ae.parent;
      }
      !Oe && !Be && Ja(de), oe.effects = [], ue && i && i.pendingBranch && be === i.pendingId && (i.deps--, i.deps === 0 && !W && i.resolve()), mo(te, "onResolve");
    },
    fallback(se) {
      if (!oe.pendingBranch)
        return;
      const { vnode: W, activeBranch: te, parentComponent: P, container: ie, namespace: pe } = oe;
      mo(W, "onFallback");
      const de = G(te), Ee = () => {
        oe.isInFallback && (D(
          null,
          se,
          ie,
          de,
          P,
          null,
          // fallback tree will not have suspense context
          pe,
          b,
          A
        ), di(oe, se));
      }, qe = se.transition && se.transition.mode === "out-in";
      qe && (te.transition.afterLeave = Ee), oe.isInFallback = !0, ne(
        te,
        P,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), qe || Ee();
    },
    move(se, W, te) {
      oe.activeBranch && H(oe.activeBranch, se, W, te), oe.container = se;
    },
    next() {
      return oe.activeBranch && G(oe.activeBranch);
    },
    registerDep(se, W, te) {
      const P = !!oe.pendingBranch;
      P && oe.deps++;
      const ie = se.vnode.el;
      se.asyncDep.catch((pe) => {
        _i(pe, se, 0);
      }).then((pe) => {
        if (se.isUnmounted || oe.isUnmounted || oe.pendingId !== se.suspenseId)
          return;
        se.asyncResolved = !0;
        const { vnode: de } = se;
        ls(se, pe, !1), ie && (de.el = ie);
        const Ee = !ie && se.subTree.el;
        W(
          se,
          de,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          X(ie || se.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          ie ? null : G(se.subTree),
          oe,
          y,
          te
        ), Ee && Te(Ee), ca(se, de.el), P && --oe.deps === 0 && oe.resolve();
      });
    },
    unmount(se, W) {
      oe.isUnmounted = !0, oe.activeBranch && ne(
        oe.activeBranch,
        s,
        se,
        W
      ), oe.pendingBranch && ne(
        oe.pendingBranch,
        s,
        se,
        W
      );
    }
  };
  return oe;
}
function Mf(n, i, s, u, l, h, y, b, A) {
  const K = i.suspense = Cc(
    i,
    u,
    s,
    n.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    l,
    h,
    y,
    b,
    !0
  ), k = A(
    n,
    K.pendingBranch = i.ssContent,
    s,
    K,
    h,
    y
  );
  return K.deps === 0 && K.resolve(!1, !0), k;
}
function Lf(n) {
  const { shapeFlag: i, children: s } = n, u = i & 32;
  n.ssContent = au(
    u ? s.default : s
  ), n.ssFallback = u ? au(s.fallback) : pt(_t);
}
function au(n) {
  let i;
  if (Me(n)) {
    const s = Zr && n._c;
    s && (n._d = !1, Wo()), n = n(), s && (n._d = !0, i = Lt, Nc());
  }
  return Re(n) && (n = If(n)), n = tn(n), i && !n.dynamicChildren && (n.dynamicChildren = i.filter((s) => s !== n)), n;
}
function Ac(n, i) {
  i && i.pendingBranch ? Re(n) ? i.effects.push(...n) : i.effects.push(n) : Ja(n);
}
function di(n, i) {
  n.activeBranch = i;
  const { vnode: s, parentComponent: u } = n;
  let l = i.el;
  for (; !l && i.component; )
    i = i.component.subTree, l = i.el;
  s.el = l, u && u.subTree === s && (u.vnode.el = l, ca(u, l));
}
function qf(n) {
  const i = n.props && n.props.suspensible;
  return i != null && i !== !1;
}
const zt = Symbol.for("v-fgt"), Jr = Symbol.for("v-txt"), _t = Symbol.for("v-cmt"), so = Symbol.for("v-stc"), uo = [];
let Lt = null;
function Wo(n = !1) {
  uo.push(Lt = n ? null : []);
}
function Nc() {
  uo.pop(), Lt = uo[uo.length - 1] || null;
}
let Zr = 1;
function su(n, i = !1) {
  Zr += n, n < 0 && Lt && i && (Lt.hasOnce = !0);
}
function Pc(n) {
  return n.dynamicChildren = Zr > 0 ? Lt || si : null, Nc(), Zr > 0 && Lt && Lt.push(n), n;
}
function ip(n, i, s, u, l, h) {
  return Pc(
    kc(
      n,
      i,
      s,
      u,
      l,
      h,
      !0
    )
  );
}
function ss(n, i, s, u, l) {
  return Pc(
    pt(
      n,
      i,
      s,
      u,
      l,
      !0
    )
  );
}
function mr(n) {
  return n ? n.__v_isVNode === !0 : !1;
}
function Tn(n, i) {
  return n.type === i.type && n.key === i.key;
}
function op(n) {
}
const Sc = ({ key: n }) => n ?? null, Fo = ({
  ref: n,
  ref_key: i,
  ref_for: s
}) => (typeof n == "number" && (n = "" + n), n != null ? vt(n) || At(n) || Me(n) ? { i: Ct, r: n, k: i, f: !!s } : n : null);
function kc(n, i = null, s = null, u = 0, l = null, h = n === zt ? 0 : 1, y = !1, b = !1) {
  const A = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n,
    props: i,
    key: i && Sc(i),
    ref: i && Fo(i),
    scopeId: aa,
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
    shapeFlag: h,
    patchFlag: u,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: Ct
  };
  return b ? (Ls(A, s), h & 128 && n.normalize(A)) : s && (A.shapeFlag |= vt(s) ? 8 : 16), Zr > 0 && // avoid a block node from tracking itself
  !y && // has current parent block
  Lt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (A.patchFlag > 0 || h & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  A.patchFlag !== 32 && Lt.push(A), A;
}
const pt = Uf;
function Uf(n, i = null, s = null, u = 0, l = null, h = !1) {
  if ((!n || n === sc) && (n = _t), mr(n)) {
    const b = sr(
      n,
      i,
      !0
      /* mergeRef: true */
    );
    return s && Ls(b, s), Zr > 0 && !h && Lt && (b.shapeFlag & 6 ? Lt[Lt.indexOf(n)] = b : Lt.push(b)), b.patchFlag = -2, b;
  }
  if (Xf(n) && (n = n.__vccOpts), i) {
    i = Vf(i);
    let { class: b, style: A } = i;
    b && !vt(b) && (i.class = ta(b)), at(A) && (Ns(A) && !Re(A) && (A = wt({}, A)), i.style = ea(A));
  }
  const y = vt(n) ? 1 : $o(n) ? 128 : zu(n) ? 64 : at(n) ? 4 : Me(n) ? 2 : 0;
  return kc(
    n,
    i,
    s,
    u,
    l,
    y,
    h,
    !0
  );
}
function Vf(n) {
  return n ? Ns(n) || dc(n) ? wt({}, n) : n : null;
}
function sr(n, i, s = !1, u = !1) {
  const { props: l, ref: h, patchFlag: y, children: b, transition: A } = n, K = i ? Hf(l || {}, i) : l, k = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n.type,
    props: K,
    key: K && Sc(K),
    ref: i && i.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && h ? Re(h) ? h.concat(Fo(i)) : [h, Fo(i)] : Fo(i)
    ) : h,
    scopeId: n.scopeId,
    slotScopeIds: n.slotScopeIds,
    children: b,
    target: n.target,
    targetStart: n.targetStart,
    targetAnchor: n.targetAnchor,
    staticCount: n.staticCount,
    shapeFlag: n.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: i && n.type !== zt ? y === -1 ? 16 : y | 16 : y,
    dynamicProps: n.dynamicProps,
    dynamicChildren: n.dynamicChildren,
    appContext: n.appContext,
    dirs: n.dirs,
    transition: A,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: n.component,
    suspense: n.suspense,
    ssContent: n.ssContent && sr(n.ssContent),
    ssFallback: n.ssFallback && sr(n.ssFallback),
    el: n.el,
    anchor: n.anchor,
    ctx: n.ctx,
    ce: n.ce
  };
  return A && u && pi(
    k,
    A.clone(k)
  ), k;
}
function Ic(n = " ", i = 0) {
  return pt(Jr, null, n, i);
}
function ap(n, i) {
  const s = pt(so, null, n);
  return s.staticCount = i, s;
}
function sp(n = "", i = !1) {
  return i ? (Wo(), ss(_t, null, n)) : pt(_t, null, n);
}
function tn(n) {
  return n == null || typeof n == "boolean" ? pt(_t) : Re(n) ? pt(
    zt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    n.slice()
  ) : mr(n) ? hr(n) : pt(Jr, null, String(n));
}
function hr(n) {
  return n.el === null && n.patchFlag !== -1 || n.memo ? n : sr(n);
}
function Ls(n, i) {
  let s = 0;
  const { shapeFlag: u } = n;
  if (i == null)
    i = null;
  else if (Re(i))
    s = 16;
  else if (typeof i == "object")
    if (u & 65) {
      const l = i.default;
      l && (l._c && (l._d = !1), Ls(n, l()), l._c && (l._d = !0));
      return;
    } else {
      s = 32;
      const l = i._;
      !l && !dc(i) ? i._ctx = Ct : l === 3 && Ct && (Ct.slots._ === 1 ? i._ = 1 : (i._ = 2, n.patchFlag |= 1024));
    }
  else Me(i) ? (i = { default: i, _ctx: Ct }, s = 32) : (i = String(i), u & 64 ? (s = 16, i = [Ic(i)]) : s = 8);
  n.children = i, n.shapeFlag |= s;
}
function Hf(...n) {
  const i = {};
  for (let s = 0; s < n.length; s++) {
    const u = n[s];
    for (const l in u)
      if (l === "class")
        i.class !== u.class && (i.class = ta([i.class, u.class]));
      else if (l === "style")
        i.style = ea([i.style, u.style]);
      else if (zo(l)) {
        const h = i[l], y = u[l];
        y && h !== y && !(Re(h) && h.includes(y)) && (i[l] = h ? [].concat(h, y) : y);
      } else l !== "" && (i[l] = u[l]);
  }
  return i;
}
function en(n, i, s, u = null) {
  kn(n, i, 7, [
    s,
    u
  ]);
}
const $f = lc();
let Wf = 0;
function Dc(n, i, s) {
  const u = n.type, l = (i ? i.appContext : n.appContext) || $f, h = {
    uid: Wf++,
    vnode: n,
    type: u,
    parent: i,
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
    scope: new Tu(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: i ? i.provides : Object.create(l.provides),
    ids: i ? i.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: yc(u, l),
    emitsOptions: Oc(u, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: et,
    // inheritAttrs
    inheritAttrs: u.inheritAttrs,
    // state
    ctx: et,
    data: et,
    props: et,
    attrs: et,
    slots: et,
    refs: et,
    setupState: et,
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
  return h.ctx = { _: h }, h.root = i ? i.root : h, h.emit = kf.bind(null, h), n.ce && n.ce(h), h;
}
let Ot = null;
const ti = () => Ot || Ct;
let Go, us;
{
  const n = Zo(), i = (s, u) => {
    let l;
    return (l = n[s]) || (l = n[s] = []), l.push(u), (h) => {
      l.length > 1 ? l.forEach((y) => y(h)) : l[0](h);
    };
  };
  Go = i(
    "__VUE_INSTANCE_SETTERS__",
    (s) => Ot = s
  ), us = i(
    "__VUE_SSR_SETTERS__",
    (s) => yi = s
  );
}
const ei = (n) => {
  const i = Ot;
  return Go(n), n.scope.on(), () => {
    n.scope.off(), Go(i);
  };
}, cs = () => {
  Ot && Ot.scope.off(), Go(null);
};
function Rc(n) {
  return n.vnode.shapeFlag & 4;
}
let yi = !1;
function Fc(n, i = !1, s = !1) {
  i && us(i);
  const { props: u, children: l } = n.vnode, h = Rc(n);
  _f(n, u, h, i), Ef(n, l, s || i);
  const y = h ? Gf(n, i) : void 0;
  return i && us(!1), y;
}
function Gf(n, i) {
  const s = n.type;
  n.accessCache = /* @__PURE__ */ Object.create(null), n.proxy = new Proxy(n.ctx, ns);
  const { setup: u } = s;
  if (u) {
    or();
    const l = n.setupContext = u.length > 1 ? Kc(n) : null, h = ei(n), y = go(
      u,
      n,
      0,
      [
        n.props,
        l
      ]
    ), b = bs(y);
    if (ar(), h(), (b || n.sp) && !pr(n) && Ss(n), b) {
      if (y.then(cs, cs), i)
        return y.then((A) => {
          ls(n, A, i);
        }).catch((A) => {
          _i(A, n, 0);
        });
      n.asyncDep = y;
    } else
      ls(n, y, i);
  } else
    Bc(n, i);
}
function ls(n, i, s) {
  Me(i) ? n.type.__ssrInlineRender ? n.ssrRender = i : n.render = i : at(i) && (n.setupState = Uu(i)), Bc(n, s);
}
let Yo, fs;
function up(n) {
  Yo = n, fs = (i) => {
    i.render._rc && (i.withProxy = new Proxy(i.ctx, ff));
  };
}
const cp = () => !Yo;
function Bc(n, i, s) {
  const u = n.type;
  if (!n.render) {
    if (!i && Yo && !u.render) {
      const l = u.template || Bs(n).template;
      if (l) {
        const { isCustomElement: h, compilerOptions: y } = n.appContext.config, { delimiters: b, compilerOptions: A } = u, K = wt(
          wt(
            {
              isCustomElement: h,
              delimiters: b
            },
            y
          ),
          A
        );
        u.render = Yo(l, K);
      }
    }
    n.render = u.render || En, fs && fs(n);
  }
  {
    const l = ei(n);
    or();
    try {
      hf(n);
    } finally {
      ar(), l();
    }
  }
}
const Yf = {
  get(n, i) {
    return Mt(n, "get", ""), n[i];
  }
};
function Kc(n) {
  const i = (s) => {
    n.exposed = s || {};
  };
  return {
    attrs: new Proxy(n.attrs, Yf),
    slots: n.slots,
    emit: n.emit,
    expose: i
  };
}
function _o(n) {
  return n.exposed ? n.exposeProxy || (n.exposeProxy = new Proxy(Uu(Tl(n.exposed)), {
    get(i, s) {
      if (s in i)
        return i[s];
      if (s in ao)
        return ao[s](n);
    },
    has(i, s) {
      return s in i || s in ao;
    }
  })) : n.proxy;
}
function hs(n, i = !0) {
  return Me(n) ? n.displayName || n.name : n.name || i && n.__name;
}
function Xf(n) {
  return Me(n) && "__vccOpts" in n;
}
const qs = (n, i) => kl(n, i, yi);
function lp(n, i, s) {
  const u = arguments.length;
  return u === 2 ? at(i) && !Re(i) ? mr(i) ? pt(n, null, [i]) : pt(n, i) : pt(n, null, i) : (u > 3 ? s = Array.prototype.slice.call(arguments, 2) : u === 3 && mr(s) && (s = [s]), pt(n, i, s));
}
function fp() {
}
function hp(n, i, s, u) {
  const l = s[u];
  if (l && Qf(l, n))
    return l;
  const h = i();
  return h.memo = n.slice(), h.cacheIndex = u, s[u] = h;
}
function Qf(n, i) {
  const s = n.memo;
  if (s.length != i.length)
    return !1;
  for (let u = 0; u < s.length; u++)
    if (Xt(s[u], i[u]))
      return !1;
  return Zr > 0 && Lt && Lt.push(n), !0;
}
const zf = "3.5.17", dp = En, pp = Bl, yp = oi, mp = Yu, Jf = {
  createComponentInstance: Dc,
  setupComponent: Fc,
  renderComponentRoot: Ro,
  setCurrentRenderingInstance: po,
  isVNode: mr,
  normalizeVNode: tn,
  getComponentPublicInstance: _o,
  ensureValidVNode: Fs,
  pushWarningContext: Rl,
  popWarningContext: Fl
}, gp = Jf, vp = null, bp = null, _p = null;
function Zf(n) {
  return Eu() ? (nl(n), !0) : !1;
}
// @__NO_SIDE_EFFECTS__
function uu() {
  const n = /* @__PURE__ */ new Set(), i = (h) => {
    n.delete(h);
  };
  return {
    on: (h) => {
      n.add(h);
      const y = () => i(h);
      return Zf(y), {
        off: y
      };
    },
    off: i,
    trigger: (...h) => Promise.all(Array.from(n).map((y) => y(...h))),
    clear: () => {
      n.clear();
    }
  };
}
const eh = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ds = () => {
}, th = (n, i) => Object.prototype.hasOwnProperty.call(n, i);
function nh(n, i) {
  function s(...u) {
    return new Promise((l, h) => {
      Promise.resolve(n(() => i.apply(this, u), { fn: i, thisArg: this, args: u })).then(l).catch(h);
    });
  }
  return s;
}
function rh(n, i = {}) {
  let s, u, l = ds;
  const h = (A) => {
    clearTimeout(A), l(), l = ds;
  };
  let y;
  return (A) => {
    const K = dr(n), k = dr(i.maxWait);
    return s && h(s), K <= 0 || k !== void 0 && k <= 0 ? (u && (h(u), u = void 0), Promise.resolve(A())) : new Promise((D, H) => {
      l = i.rejectOnCancel ? H : D, y = A, k && !u && (u = setTimeout(() => {
        s && h(s), u = void 0, D(y());
      }, k)), s = setTimeout(() => {
        u && h(u), u = void 0, D(A());
      }, K);
    });
  };
}
// @__NO_SIDE_EFFECTS__
function wp(n, i = 200, s = {}) {
  return nh(
    rh(i, s),
    n
  );
}
function xp(n, i, s) {
  let u;
  At(s) ? u = {
    evaluating: s
  } : u = {};
  const {
    lazy: l = !1,
    flush: h = "pre",
    evaluating: y = void 0,
    shallow: b = !0,
    onError: A = ds
  } = u, K = za(!l), k = b ? za(i) : li(i);
  let D = 0;
  return xc(async (H) => {
    if (!K.value)
      return;
    D++;
    const ne = D;
    let G = !1;
    y && Promise.resolve().then(() => {
      y.value = !0;
    });
    try {
      const X = await n((Te) => {
        H(() => {
          y && (y.value = !1), G || Te();
        });
      });
      ne === D && (k.value = X);
    } catch (X) {
      A(X);
    } finally {
      y && ne === D && (y.value = !1), G = !0;
    }
  }, { flush: h }), l ? qs(() => (K.value = !0, k.value)) : k;
}
const ih = eh ? window.document : void 0;
function oh(n) {
  var i;
  const s = dr(n);
  return (i = s?.$el) != null ? i : s;
}
const ah = {
  multiple: !0,
  accept: "*",
  reset: !1,
  directory: !1
};
function sh(n) {
  if (!n)
    return null;
  if (n instanceof FileList)
    return n;
  const i = new DataTransfer();
  for (const s of n)
    i.items.add(s);
  return i.files;
}
function Tp(n = {}) {
  const {
    document: i = ih
  } = n, s = li(sh(n.initialFiles)), { on: u, trigger: l } = /* @__PURE__ */ uu(), { on: h, trigger: y } = /* @__PURE__ */ uu(), b = qs(() => {
    var D;
    const H = (D = oh(n.input)) != null ? D : i ? i.createElement("input") : void 0;
    return H && (H.type = "file", H.onchange = (ne) => {
      const G = ne.target;
      s.value = G.files, l(s.value);
    }, H.oncancel = () => {
      y();
    }), H;
  }), A = () => {
    s.value = null, b.value && b.value.value && (b.value.value = "", l(null));
  }, K = (D) => {
    const H = b.value;
    H && (H.multiple = dr(D.multiple), H.accept = dr(D.accept), H.webkitdirectory = dr(D.directory), th(D, "capture") && (H.capture = dr(D.capture)));
  }, k = (D) => {
    const H = b.value;
    if (!H)
      return;
    const ne = {
      ...ah,
      ...n,
      ...D
    };
    K(ne), dr(ne.reset) && A(), H.click();
  };
  return xc(() => {
    K(n);
  }), {
    files: As(s),
    open: k,
    reset: A,
    onCancel: h,
    onChange: u
  };
}
var uh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ch(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function lh(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var i = n.default;
  if (typeof i == "function") {
    var s = function u() {
      var l = !1;
      try {
        l = this instanceof u;
      } catch {
      }
      return l ? Reflect.construct(i, arguments, this.constructor) : i.apply(this, arguments);
    };
    s.prototype = i.prototype;
  } else s = {};
  return Object.defineProperty(s, "__esModule", { value: !0 }), Object.keys(n).forEach(function(u) {
    var l = Object.getOwnPropertyDescriptor(n, u);
    Object.defineProperty(s, u, l.get ? l : {
      enumerable: !0,
      get: function() {
        return n[u];
      }
    });
  }), s;
}
var cu = {};
const fh = {}, hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fh
}, Symbol.toStringTag, { value: "Module" })), lu = /* @__PURE__ */ lh(hh);
var fu;
function dh() {
  return fu || (fu = 1, function(n) {
    (function(i) {
      i.parser = function(N, w) {
        return new u(N, w);
      }, i.SAXParser = u, i.SAXStream = k, i.createStream = K, i.MAX_BUFFER_LENGTH = 64 * 1024;
      var s = [
        "comment",
        "sgmlDecl",
        "textNode",
        "tagName",
        "doctype",
        "procInstName",
        "procInstBody",
        "entity",
        "attribName",
        "attribValue",
        "cdata",
        "script"
      ];
      i.EVENTS = [
        "text",
        "processinginstruction",
        "sgmldeclaration",
        "doctype",
        "comment",
        "opentagstart",
        "attribute",
        "opentag",
        "closetag",
        "opencdata",
        "cdata",
        "closecdata",
        "error",
        "end",
        "ready",
        "script",
        "opennamespace",
        "closenamespace"
      ];
      function u(N, w) {
        if (!(this instanceof u))
          return new u(N, w);
        var B = this;
        h(B), B.q = B.c = "", B.bufferCheckPosition = i.MAX_BUFFER_LENGTH, B.opt = w || {}, B.opt.lowercase = B.opt.lowercase || B.opt.lowercasetags, B.looseCase = B.opt.lowercase ? "toLowerCase" : "toUpperCase", B.tags = [], B.closed = B.closedRoot = B.sawRoot = !1, B.tag = B.error = null, B.strict = !!N, B.noscript = !!(N || B.opt.noscript), B.state = P.BEGIN, B.strictEntities = B.opt.strictEntities, B.ENTITIES = B.strictEntities ? Object.create(i.XML_ENTITIES) : Object.create(i.ENTITIES), B.attribList = [], B.opt.xmlns && (B.ns = Object.create(X)), B.opt.unquotedAttributeValues === void 0 && (B.opt.unquotedAttributeValues = !N), B.trackPosition = B.opt.position !== !1, B.trackPosition && (B.position = B.line = B.column = 0), pe(B, "onready");
      }
      Object.create || (Object.create = function(N) {
        function w() {
        }
        w.prototype = N;
        var B = new w();
        return B;
      }), Object.keys || (Object.keys = function(N) {
        var w = [];
        for (var B in N) N.hasOwnProperty(B) && w.push(B);
        return w;
      });
      function l(N) {
        for (var w = Math.max(i.MAX_BUFFER_LENGTH, 10), B = 0, V = 0, Ue = s.length; V < Ue; V++) {
          var _e = N[s[V]].length;
          if (_e > w)
            switch (s[V]) {
              case "textNode":
                Ee(N);
                break;
              case "cdata":
                de(N, "oncdata", N.cdata), N.cdata = "";
                break;
              case "script":
                de(N, "onscript", N.script), N.script = "";
                break;
              default:
                Be(N, "Max buffer length exceeded: " + s[V]);
            }
          B = Math.max(B, _e);
        }
        var F = i.MAX_BUFFER_LENGTH - B;
        N.bufferCheckPosition = F + N.position;
      }
      function h(N) {
        for (var w = 0, B = s.length; w < B; w++)
          N[s[w]] = "";
      }
      function y(N) {
        Ee(N), N.cdata !== "" && (de(N, "oncdata", N.cdata), N.cdata = ""), N.script !== "" && (de(N, "onscript", N.script), N.script = "");
      }
      u.prototype = {
        end: function() {
          Ae(this);
        },
        write: yt,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          y(this);
        }
      };
      var b;
      try {
        b = lu.Stream;
      } catch {
        b = function() {
        };
      }
      b || (b = function() {
      });
      var A = i.EVENTS.filter(function(N) {
        return N !== "error" && N !== "end";
      });
      function K(N, w) {
        return new k(N, w);
      }
      function k(N, w) {
        if (!(this instanceof k))
          return new k(N, w);
        b.apply(this), this._parser = new u(N, w), this.writable = !0, this.readable = !0;
        var B = this;
        this._parser.onend = function() {
          B.emit("end");
        }, this._parser.onerror = function(V) {
          B.emit("error", V), B._parser.error = null;
        }, this._decoder = null, A.forEach(function(V) {
          Object.defineProperty(B, "on" + V, {
            get: function() {
              return B._parser["on" + V];
            },
            set: function(Ue) {
              if (!Ue)
                return B.removeAllListeners(V), B._parser["on" + V] = Ue, Ue;
              B.on(V, Ue);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      k.prototype = Object.create(b.prototype, {
        constructor: {
          value: k
        }
      }), k.prototype.write = function(N) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(N)) {
          if (!this._decoder) {
            var w = lu.StringDecoder;
            this._decoder = new w("utf8");
          }
          N = this._decoder.write(N);
        }
        return this._parser.write(N.toString()), this.emit("data", N), !0;
      }, k.prototype.end = function(N) {
        return N && N.length && this.write(N), this._parser.end(), !0;
      }, k.prototype.on = function(N, w) {
        var B = this;
        return !B._parser["on" + N] && A.indexOf(N) !== -1 && (B._parser["on" + N] = function() {
          var V = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          V.splice(0, 0, N), B.emit.apply(B, V);
        }), b.prototype.on.call(B, N, w);
      };
      var D = "[CDATA[", H = "DOCTYPE", ne = "http://www.w3.org/XML/1998/namespace", G = "http://www.w3.org/2000/xmlns/", X = { xml: ne, xmlns: G }, Te = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, be = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, ue = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, q = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function M(N) {
        return N === " " || N === `
` || N === "\r" || N === "	";
      }
      function oe(N) {
        return N === '"' || N === "'";
      }
      function se(N) {
        return N === ">" || M(N);
      }
      function W(N, w) {
        return N.test(w);
      }
      function te(N, w) {
        return !W(N, w);
      }
      var P = 0;
      i.STATE = {
        BEGIN: P++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: P++,
        // leading whitespace
        TEXT: P++,
        // general stuff
        TEXT_ENTITY: P++,
        // &amp and such.
        OPEN_WAKA: P++,
        // <
        SGML_DECL: P++,
        // <!BLARG
        SGML_DECL_QUOTED: P++,
        // <!BLARG foo "bar
        DOCTYPE: P++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: P++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: P++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: P++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: P++,
        // <!-
        COMMENT: P++,
        // <!--
        COMMENT_ENDING: P++,
        // <!-- blah -
        COMMENT_ENDED: P++,
        // <!-- blah --
        CDATA: P++,
        // <![CDATA[ something
        CDATA_ENDING: P++,
        // ]
        CDATA_ENDING_2: P++,
        // ]]
        PROC_INST: P++,
        // <?hi
        PROC_INST_BODY: P++,
        // <?hi there
        PROC_INST_ENDING: P++,
        // <?hi "there" ?
        OPEN_TAG: P++,
        // <strong
        OPEN_TAG_SLASH: P++,
        // <strong /
        ATTRIB: P++,
        // <a
        ATTRIB_NAME: P++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: P++,
        // <a foo _
        ATTRIB_VALUE: P++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: P++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: P++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: P++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: P++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: P++,
        // <foo bar=&quot
        CLOSE_TAG: P++,
        // </a
        CLOSE_TAG_SAW_WHITE: P++,
        // </a   >
        SCRIPT: P++,
        // <script> ...
        SCRIPT_ENDING: P++
        // <script> ... <
      }, i.XML_ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'"
      }, i.ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'",
        AElig: 198,
        Aacute: 193,
        Acirc: 194,
        Agrave: 192,
        Aring: 197,
        Atilde: 195,
        Auml: 196,
        Ccedil: 199,
        ETH: 208,
        Eacute: 201,
        Ecirc: 202,
        Egrave: 200,
        Euml: 203,
        Iacute: 205,
        Icirc: 206,
        Igrave: 204,
        Iuml: 207,
        Ntilde: 209,
        Oacute: 211,
        Ocirc: 212,
        Ograve: 210,
        Oslash: 216,
        Otilde: 213,
        Ouml: 214,
        THORN: 222,
        Uacute: 218,
        Ucirc: 219,
        Ugrave: 217,
        Uuml: 220,
        Yacute: 221,
        aacute: 225,
        acirc: 226,
        aelig: 230,
        agrave: 224,
        aring: 229,
        atilde: 227,
        auml: 228,
        ccedil: 231,
        eacute: 233,
        ecirc: 234,
        egrave: 232,
        eth: 240,
        euml: 235,
        iacute: 237,
        icirc: 238,
        igrave: 236,
        iuml: 239,
        ntilde: 241,
        oacute: 243,
        ocirc: 244,
        ograve: 242,
        oslash: 248,
        otilde: 245,
        ouml: 246,
        szlig: 223,
        thorn: 254,
        uacute: 250,
        ucirc: 251,
        ugrave: 249,
        uuml: 252,
        yacute: 253,
        yuml: 255,
        copy: 169,
        reg: 174,
        nbsp: 160,
        iexcl: 161,
        cent: 162,
        pound: 163,
        curren: 164,
        yen: 165,
        brvbar: 166,
        sect: 167,
        uml: 168,
        ordf: 170,
        laquo: 171,
        not: 172,
        shy: 173,
        macr: 175,
        deg: 176,
        plusmn: 177,
        sup1: 185,
        sup2: 178,
        sup3: 179,
        acute: 180,
        micro: 181,
        para: 182,
        middot: 183,
        cedil: 184,
        ordm: 186,
        raquo: 187,
        frac14: 188,
        frac12: 189,
        frac34: 190,
        iquest: 191,
        times: 215,
        divide: 247,
        OElig: 338,
        oelig: 339,
        Scaron: 352,
        scaron: 353,
        Yuml: 376,
        fnof: 402,
        circ: 710,
        tilde: 732,
        Alpha: 913,
        Beta: 914,
        Gamma: 915,
        Delta: 916,
        Epsilon: 917,
        Zeta: 918,
        Eta: 919,
        Theta: 920,
        Iota: 921,
        Kappa: 922,
        Lambda: 923,
        Mu: 924,
        Nu: 925,
        Xi: 926,
        Omicron: 927,
        Pi: 928,
        Rho: 929,
        Sigma: 931,
        Tau: 932,
        Upsilon: 933,
        Phi: 934,
        Chi: 935,
        Psi: 936,
        Omega: 937,
        alpha: 945,
        beta: 946,
        gamma: 947,
        delta: 948,
        epsilon: 949,
        zeta: 950,
        eta: 951,
        theta: 952,
        iota: 953,
        kappa: 954,
        lambda: 955,
        mu: 956,
        nu: 957,
        xi: 958,
        omicron: 959,
        pi: 960,
        rho: 961,
        sigmaf: 962,
        sigma: 963,
        tau: 964,
        upsilon: 965,
        phi: 966,
        chi: 967,
        psi: 968,
        omega: 969,
        thetasym: 977,
        upsih: 978,
        piv: 982,
        ensp: 8194,
        emsp: 8195,
        thinsp: 8201,
        zwnj: 8204,
        zwj: 8205,
        lrm: 8206,
        rlm: 8207,
        ndash: 8211,
        mdash: 8212,
        lsquo: 8216,
        rsquo: 8217,
        sbquo: 8218,
        ldquo: 8220,
        rdquo: 8221,
        bdquo: 8222,
        dagger: 8224,
        Dagger: 8225,
        bull: 8226,
        hellip: 8230,
        permil: 8240,
        prime: 8242,
        Prime: 8243,
        lsaquo: 8249,
        rsaquo: 8250,
        oline: 8254,
        frasl: 8260,
        euro: 8364,
        image: 8465,
        weierp: 8472,
        real: 8476,
        trade: 8482,
        alefsym: 8501,
        larr: 8592,
        uarr: 8593,
        rarr: 8594,
        darr: 8595,
        harr: 8596,
        crarr: 8629,
        lArr: 8656,
        uArr: 8657,
        rArr: 8658,
        dArr: 8659,
        hArr: 8660,
        forall: 8704,
        part: 8706,
        exist: 8707,
        empty: 8709,
        nabla: 8711,
        isin: 8712,
        notin: 8713,
        ni: 8715,
        prod: 8719,
        sum: 8721,
        minus: 8722,
        lowast: 8727,
        radic: 8730,
        prop: 8733,
        infin: 8734,
        ang: 8736,
        and: 8743,
        or: 8744,
        cap: 8745,
        cup: 8746,
        int: 8747,
        there4: 8756,
        sim: 8764,
        cong: 8773,
        asymp: 8776,
        ne: 8800,
        equiv: 8801,
        le: 8804,
        ge: 8805,
        sub: 8834,
        sup: 8835,
        nsub: 8836,
        sube: 8838,
        supe: 8839,
        oplus: 8853,
        otimes: 8855,
        perp: 8869,
        sdot: 8901,
        lceil: 8968,
        rceil: 8969,
        lfloor: 8970,
        rfloor: 8971,
        lang: 9001,
        rang: 9002,
        loz: 9674,
        spades: 9824,
        clubs: 9827,
        hearts: 9829,
        diams: 9830
      }, Object.keys(i.ENTITIES).forEach(function(N) {
        var w = i.ENTITIES[N], B = typeof w == "number" ? String.fromCharCode(w) : w;
        i.ENTITIES[N] = B;
      });
      for (var ie in i.STATE)
        i.STATE[i.STATE[ie]] = ie;
      P = i.STATE;
      function pe(N, w, B) {
        N[w] && N[w](B);
      }
      function de(N, w, B) {
        N.textNode && Ee(N), pe(N, w, B);
      }
      function Ee(N) {
        N.textNode = qe(N.opt, N.textNode), N.textNode && pe(N, "ontext", N.textNode), N.textNode = "";
      }
      function qe(N, w) {
        return N.trim && (w = w.trim()), N.normalize && (w = w.replace(/\s+/g, " ")), w;
      }
      function Be(N, w) {
        return Ee(N), N.trackPosition && (w += `
Line: ` + N.line + `
Column: ` + N.column + `
Char: ` + N.c), w = new Error(w), N.error = w, pe(N, "onerror", w), N;
      }
      function Ae(N) {
        return N.sawRoot && !N.closedRoot && Oe(N, "Unclosed root tag"), N.state !== P.BEGIN && N.state !== P.BEGIN_WHITESPACE && N.state !== P.TEXT && Be(N, "Unexpected end"), Ee(N), N.c = "", N.closed = !0, pe(N, "onend"), u.call(N, N.strict, N.opt), N;
      }
      function Oe(N, w) {
        if (typeof N != "object" || !(N instanceof u))
          throw new Error("bad call to strictFail");
        N.strict && Be(N, w);
      }
      function Ce(N) {
        N.strict || (N.tagName = N.tagName[N.looseCase]());
        var w = N.tags[N.tags.length - 1] || N, B = N.tag = { name: N.tagName, attributes: {} };
        N.opt.xmlns && (B.ns = w.ns), N.attribList.length = 0, de(N, "onopentagstart", B);
      }
      function We(N, w) {
        var B = N.indexOf(":"), V = B < 0 ? ["", N] : N.split(":"), Ue = V[0], _e = V[1];
        return w && N === "xmlns" && (Ue = "xmlns", _e = ""), { prefix: Ue, local: _e };
      }
      function rt(N) {
        if (N.strict || (N.attribName = N.attribName[N.looseCase]()), N.attribList.indexOf(N.attribName) !== -1 || N.tag.attributes.hasOwnProperty(N.attribName)) {
          N.attribName = N.attribValue = "";
          return;
        }
        if (N.opt.xmlns) {
          var w = We(N.attribName, !0), B = w.prefix, V = w.local;
          if (B === "xmlns")
            if (V === "xml" && N.attribValue !== ne)
              Oe(
                N,
                "xml: prefix must be bound to " + ne + `
Actual: ` + N.attribValue
              );
            else if (V === "xmlns" && N.attribValue !== G)
              Oe(
                N,
                "xmlns: prefix must be bound to " + G + `
Actual: ` + N.attribValue
              );
            else {
              var Ue = N.tag, _e = N.tags[N.tags.length - 1] || N;
              Ue.ns === _e.ns && (Ue.ns = Object.create(_e.ns)), Ue.ns[V] = N.attribValue;
            }
          N.attribList.push([N.attribName, N.attribValue]);
        } else
          N.tag.attributes[N.attribName] = N.attribValue, de(N, "onattribute", {
            name: N.attribName,
            value: N.attribValue
          });
        N.attribName = N.attribValue = "";
      }
      function lt(N, w) {
        if (N.opt.xmlns) {
          var B = N.tag, V = We(N.tagName);
          B.prefix = V.prefix, B.local = V.local, B.uri = B.ns[V.prefix] || "", B.prefix && !B.uri && (Oe(N, "Unbound namespace prefix: " + JSON.stringify(N.tagName)), B.uri = V.prefix);
          var Ue = N.tags[N.tags.length - 1] || N;
          B.ns && Ue.ns !== B.ns && Object.keys(B.ns).forEach(function(he) {
            de(N, "onopennamespace", {
              prefix: he,
              uri: B.ns[he]
            });
          });
          for (var _e = 0, F = N.attribList.length; _e < F; _e++) {
            var j = N.attribList[_e], Q = j[0], fe = j[1], ae = We(Q, !0), ce = ae.prefix, we = ae.local, me = ce === "" ? "" : B.ns[ce] || "", le = {
              name: Q,
              value: fe,
              prefix: ce,
              local: we,
              uri: me
            };
            ce && ce !== "xmlns" && !me && (Oe(N, "Unbound namespace prefix: " + JSON.stringify(ce)), le.uri = ce), N.tag.attributes[Q] = le, de(N, "onattribute", le);
          }
          N.attribList.length = 0;
        }
        N.tag.isSelfClosing = !!w, N.sawRoot = !0, N.tags.push(N.tag), de(N, "onopentag", N.tag), w || (!N.noscript && N.tagName.toLowerCase() === "script" ? N.state = P.SCRIPT : N.state = P.TEXT, N.tag = null, N.tagName = ""), N.attribName = N.attribValue = "", N.attribList.length = 0;
      }
      function Nt(N) {
        if (!N.tagName) {
          Oe(N, "Weird empty close tag."), N.textNode += "</>", N.state = P.TEXT;
          return;
        }
        if (N.script) {
          if (N.tagName !== "script") {
            N.script += "</" + N.tagName + ">", N.tagName = "", N.state = P.SCRIPT;
            return;
          }
          de(N, "onscript", N.script), N.script = "";
        }
        var w = N.tags.length, B = N.tagName;
        N.strict || (B = B[N.looseCase]());
        for (var V = B; w--; ) {
          var Ue = N.tags[w];
          if (Ue.name !== V)
            Oe(N, "Unexpected close tag");
          else
            break;
        }
        if (w < 0) {
          Oe(N, "Unmatched closing tag: " + N.tagName), N.textNode += "</" + N.tagName + ">", N.state = P.TEXT;
          return;
        }
        N.tagName = B;
        for (var _e = N.tags.length; _e-- > w; ) {
          var F = N.tag = N.tags.pop();
          N.tagName = N.tag.name, de(N, "onclosetag", N.tagName);
          var j = {};
          for (var Q in F.ns)
            j[Q] = F.ns[Q];
          var fe = N.tags[N.tags.length - 1] || N;
          N.opt.xmlns && F.ns !== fe.ns && Object.keys(F.ns).forEach(function(ae) {
            var ce = F.ns[ae];
            de(N, "onclosenamespace", { prefix: ae, uri: ce });
          });
        }
        w === 0 && (N.closedRoot = !0), N.tagName = N.attribValue = N.attribName = "", N.attribList.length = 0, N.state = P.TEXT;
      }
      function Pt(N) {
        var w = N.entity, B = w.toLowerCase(), V, Ue = "";
        return N.ENTITIES[w] ? N.ENTITIES[w] : N.ENTITIES[B] ? N.ENTITIES[B] : (w = B, w.charAt(0) === "#" && (w.charAt(1) === "x" ? (w = w.slice(2), V = parseInt(w, 16), Ue = V.toString(16)) : (w = w.slice(1), V = parseInt(w, 10), Ue = V.toString(10))), w = w.replace(/^0+/, ""), isNaN(V) || Ue.toLowerCase() !== w ? (Oe(N, "Invalid character entity"), "&" + N.entity + ";") : String.fromCodePoint(V));
      }
      function An(N, w) {
        w === "<" ? (N.state = P.OPEN_WAKA, N.startTagPosition = N.position) : M(w) || (Oe(N, "Non-whitespace before first tag."), N.textNode = w, N.state = P.TEXT);
      }
      function Zt(N, w) {
        var B = "";
        return w < N.length && (B = N.charAt(w)), B;
      }
      function yt(N) {
        var w = this;
        if (this.error)
          throw this.error;
        if (w.closed)
          return Be(
            w,
            "Cannot write after close. Assign an onready handler."
          );
        if (N === null)
          return Ae(w);
        typeof N == "object" && (N = N.toString());
        for (var B = 0, V = ""; V = Zt(N, B++), w.c = V, !!V; )
          switch (w.trackPosition && (w.position++, V === `
` ? (w.line++, w.column = 0) : w.column++), w.state) {
            case P.BEGIN:
              if (w.state = P.BEGIN_WHITESPACE, V === "\uFEFF")
                continue;
              An(w, V);
              continue;
            case P.BEGIN_WHITESPACE:
              An(w, V);
              continue;
            case P.TEXT:
              if (w.sawRoot && !w.closedRoot) {
                for (var Ue = B - 1; V && V !== "<" && V !== "&"; )
                  V = Zt(N, B++), V && w.trackPosition && (w.position++, V === `
` ? (w.line++, w.column = 0) : w.column++);
                w.textNode += N.substring(Ue, B - 1);
              }
              V === "<" && !(w.sawRoot && w.closedRoot && !w.strict) ? (w.state = P.OPEN_WAKA, w.startTagPosition = w.position) : (!M(V) && (!w.sawRoot || w.closedRoot) && Oe(w, "Text data outside of root node."), V === "&" ? w.state = P.TEXT_ENTITY : w.textNode += V);
              continue;
            case P.SCRIPT:
              V === "<" ? w.state = P.SCRIPT_ENDING : w.script += V;
              continue;
            case P.SCRIPT_ENDING:
              V === "/" ? w.state = P.CLOSE_TAG : (w.script += "<" + V, w.state = P.SCRIPT);
              continue;
            case P.OPEN_WAKA:
              if (V === "!")
                w.state = P.SGML_DECL, w.sgmlDecl = "";
              else if (!M(V)) if (W(Te, V))
                w.state = P.OPEN_TAG, w.tagName = V;
              else if (V === "/")
                w.state = P.CLOSE_TAG, w.tagName = "";
              else if (V === "?")
                w.state = P.PROC_INST, w.procInstName = w.procInstBody = "";
              else {
                if (Oe(w, "Unencoded <"), w.startTagPosition + 1 < w.position) {
                  var _e = w.position - w.startTagPosition;
                  V = new Array(_e).join(" ") + V;
                }
                w.textNode += "<" + V, w.state = P.TEXT;
              }
              continue;
            case P.SGML_DECL:
              if (w.sgmlDecl + V === "--") {
                w.state = P.COMMENT, w.comment = "", w.sgmlDecl = "";
                continue;
              }
              w.doctype && w.doctype !== !0 && w.sgmlDecl ? (w.state = P.DOCTYPE_DTD, w.doctype += "<!" + w.sgmlDecl + V, w.sgmlDecl = "") : (w.sgmlDecl + V).toUpperCase() === D ? (de(w, "onopencdata"), w.state = P.CDATA, w.sgmlDecl = "", w.cdata = "") : (w.sgmlDecl + V).toUpperCase() === H ? (w.state = P.DOCTYPE, (w.doctype || w.sawRoot) && Oe(
                w,
                "Inappropriately located doctype declaration"
              ), w.doctype = "", w.sgmlDecl = "") : V === ">" ? (de(w, "onsgmldeclaration", w.sgmlDecl), w.sgmlDecl = "", w.state = P.TEXT) : (oe(V) && (w.state = P.SGML_DECL_QUOTED), w.sgmlDecl += V);
              continue;
            case P.SGML_DECL_QUOTED:
              V === w.q && (w.state = P.SGML_DECL, w.q = ""), w.sgmlDecl += V;
              continue;
            case P.DOCTYPE:
              V === ">" ? (w.state = P.TEXT, de(w, "ondoctype", w.doctype), w.doctype = !0) : (w.doctype += V, V === "[" ? w.state = P.DOCTYPE_DTD : oe(V) && (w.state = P.DOCTYPE_QUOTED, w.q = V));
              continue;
            case P.DOCTYPE_QUOTED:
              w.doctype += V, V === w.q && (w.q = "", w.state = P.DOCTYPE);
              continue;
            case P.DOCTYPE_DTD:
              V === "]" ? (w.doctype += V, w.state = P.DOCTYPE) : V === "<" ? (w.state = P.OPEN_WAKA, w.startTagPosition = w.position) : oe(V) ? (w.doctype += V, w.state = P.DOCTYPE_DTD_QUOTED, w.q = V) : w.doctype += V;
              continue;
            case P.DOCTYPE_DTD_QUOTED:
              w.doctype += V, V === w.q && (w.state = P.DOCTYPE_DTD, w.q = "");
              continue;
            case P.COMMENT:
              V === "-" ? w.state = P.COMMENT_ENDING : w.comment += V;
              continue;
            case P.COMMENT_ENDING:
              V === "-" ? (w.state = P.COMMENT_ENDED, w.comment = qe(w.opt, w.comment), w.comment && de(w, "oncomment", w.comment), w.comment = "") : (w.comment += "-" + V, w.state = P.COMMENT);
              continue;
            case P.COMMENT_ENDED:
              V !== ">" ? (Oe(w, "Malformed comment"), w.comment += "--" + V, w.state = P.COMMENT) : w.doctype && w.doctype !== !0 ? w.state = P.DOCTYPE_DTD : w.state = P.TEXT;
              continue;
            case P.CDATA:
              V === "]" ? w.state = P.CDATA_ENDING : w.cdata += V;
              continue;
            case P.CDATA_ENDING:
              V === "]" ? w.state = P.CDATA_ENDING_2 : (w.cdata += "]" + V, w.state = P.CDATA);
              continue;
            case P.CDATA_ENDING_2:
              V === ">" ? (w.cdata && de(w, "oncdata", w.cdata), de(w, "onclosecdata"), w.cdata = "", w.state = P.TEXT) : V === "]" ? w.cdata += "]" : (w.cdata += "]]" + V, w.state = P.CDATA);
              continue;
            case P.PROC_INST:
              V === "?" ? w.state = P.PROC_INST_ENDING : M(V) ? w.state = P.PROC_INST_BODY : w.procInstName += V;
              continue;
            case P.PROC_INST_BODY:
              if (!w.procInstBody && M(V))
                continue;
              V === "?" ? w.state = P.PROC_INST_ENDING : w.procInstBody += V;
              continue;
            case P.PROC_INST_ENDING:
              V === ">" ? (de(w, "onprocessinginstruction", {
                name: w.procInstName,
                body: w.procInstBody
              }), w.procInstName = w.procInstBody = "", w.state = P.TEXT) : (w.procInstBody += "?" + V, w.state = P.PROC_INST_BODY);
              continue;
            case P.OPEN_TAG:
              W(be, V) ? w.tagName += V : (Ce(w), V === ">" ? lt(w) : V === "/" ? w.state = P.OPEN_TAG_SLASH : (M(V) || Oe(w, "Invalid character in tag name"), w.state = P.ATTRIB));
              continue;
            case P.OPEN_TAG_SLASH:
              V === ">" ? (lt(w, !0), Nt(w)) : (Oe(w, "Forward-slash in opening tag not followed by >"), w.state = P.ATTRIB);
              continue;
            case P.ATTRIB:
              if (M(V))
                continue;
              V === ">" ? lt(w) : V === "/" ? w.state = P.OPEN_TAG_SLASH : W(Te, V) ? (w.attribName = V, w.attribValue = "", w.state = P.ATTRIB_NAME) : Oe(w, "Invalid attribute name");
              continue;
            case P.ATTRIB_NAME:
              V === "=" ? w.state = P.ATTRIB_VALUE : V === ">" ? (Oe(w, "Attribute without value"), w.attribValue = w.attribName, rt(w), lt(w)) : M(V) ? w.state = P.ATTRIB_NAME_SAW_WHITE : W(be, V) ? w.attribName += V : Oe(w, "Invalid attribute name");
              continue;
            case P.ATTRIB_NAME_SAW_WHITE:
              if (V === "=")
                w.state = P.ATTRIB_VALUE;
              else {
                if (M(V))
                  continue;
                Oe(w, "Attribute without value"), w.tag.attributes[w.attribName] = "", w.attribValue = "", de(w, "onattribute", {
                  name: w.attribName,
                  value: ""
                }), w.attribName = "", V === ">" ? lt(w) : W(Te, V) ? (w.attribName = V, w.state = P.ATTRIB_NAME) : (Oe(w, "Invalid attribute name"), w.state = P.ATTRIB);
              }
              continue;
            case P.ATTRIB_VALUE:
              if (M(V))
                continue;
              oe(V) ? (w.q = V, w.state = P.ATTRIB_VALUE_QUOTED) : (w.opt.unquotedAttributeValues || Be(w, "Unquoted attribute value"), w.state = P.ATTRIB_VALUE_UNQUOTED, w.attribValue = V);
              continue;
            case P.ATTRIB_VALUE_QUOTED:
              if (V !== w.q) {
                V === "&" ? w.state = P.ATTRIB_VALUE_ENTITY_Q : w.attribValue += V;
                continue;
              }
              rt(w), w.q = "", w.state = P.ATTRIB_VALUE_CLOSED;
              continue;
            case P.ATTRIB_VALUE_CLOSED:
              M(V) ? w.state = P.ATTRIB : V === ">" ? lt(w) : V === "/" ? w.state = P.OPEN_TAG_SLASH : W(Te, V) ? (Oe(w, "No whitespace between attributes"), w.attribName = V, w.attribValue = "", w.state = P.ATTRIB_NAME) : Oe(w, "Invalid attribute name");
              continue;
            case P.ATTRIB_VALUE_UNQUOTED:
              if (!se(V)) {
                V === "&" ? w.state = P.ATTRIB_VALUE_ENTITY_U : w.attribValue += V;
                continue;
              }
              rt(w), V === ">" ? lt(w) : w.state = P.ATTRIB;
              continue;
            case P.CLOSE_TAG:
              if (w.tagName)
                V === ">" ? Nt(w) : W(be, V) ? w.tagName += V : w.script ? (w.script += "</" + w.tagName, w.tagName = "", w.state = P.SCRIPT) : (M(V) || Oe(w, "Invalid tagname in closing tag"), w.state = P.CLOSE_TAG_SAW_WHITE);
              else {
                if (M(V))
                  continue;
                te(Te, V) ? w.script ? (w.script += "</" + V, w.state = P.SCRIPT) : Oe(w, "Invalid tagname in closing tag.") : w.tagName = V;
              }
              continue;
            case P.CLOSE_TAG_SAW_WHITE:
              if (M(V))
                continue;
              V === ">" ? Nt(w) : Oe(w, "Invalid characters in closing tag");
              continue;
            case P.TEXT_ENTITY:
            case P.ATTRIB_VALUE_ENTITY_Q:
            case P.ATTRIB_VALUE_ENTITY_U:
              var F, j;
              switch (w.state) {
                case P.TEXT_ENTITY:
                  F = P.TEXT, j = "textNode";
                  break;
                case P.ATTRIB_VALUE_ENTITY_Q:
                  F = P.ATTRIB_VALUE_QUOTED, j = "attribValue";
                  break;
                case P.ATTRIB_VALUE_ENTITY_U:
                  F = P.ATTRIB_VALUE_UNQUOTED, j = "attribValue";
                  break;
              }
              if (V === ";") {
                var Q = Pt(w);
                w.opt.unparsedEntities && !Object.values(i.XML_ENTITIES).includes(Q) ? (w.entity = "", w.state = F, w.write(Q)) : (w[j] += Q, w.entity = "", w.state = F);
              } else W(w.entity.length ? q : ue, V) ? w.entity += V : (Oe(w, "Invalid character in entity name"), w[j] += "&" + w.entity + V, w.entity = "", w.state = F);
              continue;
            default:
              throw new Error(w, "Unknown state: " + w.state);
          }
        return w.position >= w.bufferCheckPosition && l(w), w;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var N = String.fromCharCode, w = Math.floor, B = function() {
          var V = 16384, Ue = [], _e, F, j = -1, Q = arguments.length;
          if (!Q)
            return "";
          for (var fe = ""; ++j < Q; ) {
            var ae = Number(arguments[j]);
            if (!isFinite(ae) || // `NaN`, `+Infinity`, or `-Infinity`
            ae < 0 || // not a valid Unicode code point
            ae > 1114111 || // not a valid Unicode code point
            w(ae) !== ae)
              throw RangeError("Invalid code point: " + ae);
            ae <= 65535 ? Ue.push(ae) : (ae -= 65536, _e = (ae >> 10) + 55296, F = ae % 1024 + 56320, Ue.push(_e, F)), (j + 1 === Q || Ue.length > V) && (fe += N.apply(null, Ue), Ue.length = 0);
          }
          return fe;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: B,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = B;
      }();
    })(n);
  }(cu)), cu;
}
var ph = dh();
const co = {};
function yh(n) {
  const { parentId: i, child: s } = n;
  co[i] || (co[i] = []);
  const u = {
    id: s.id,
    tagName: s.tagName
  };
  co[i].push(u);
}
function mh(n) {
  const { currentBatch: i } = n, s = [...i];
  for (const [u, l] of s.entries()) {
    const h = co[l.id] || [];
    h.length > 0 && (s[u].children.push(...h), gh({
      parentId: l.id
    }));
  }
  return s;
}
function gh(n) {
  const { parentId: i } = n;
  delete co[i];
}
function vh(n) {
  return "prefix" in n && "uri" in n && !!n.prefix && !!n.uri;
}
const bh = [
  ".fsd",
  ".asd",
  ".ssd",
  ".scd",
  ".isd",
  ".icd",
  ".xml"
], Yt = "sclElements", _h = "id, tagName, &attributes.uuid, &attributes.id, attributes.name, parent.id, parent.tagName, *children.id, *children.tagName", jc = {
  default: {
    prefix: "",
    uri: "http://www.iec.ch/61850/2003/SCL"
  }
};
function wh() {
  let n = {
    defaultNamespace: null,
    stack: [],
    recordsBatch: []
  };
  const i = ph.parser(
    !0,
    // strict mode
    {
      lowercase: !1,
      // Preserve case
      trim: !0,
      // Trim text nodes
      normalize: !0,
      // Normalize whitespace
      position: !1,
      // Don't track position (performance boost)
      xmlns: !0
      // Enable namespace handling
    }
  );
  i.onopentag = (l) => n = xh({ node: l, state: n }), i.ontext = (l) => n = Th({ text: l, state: n }), i.onclosetag = () => ({ updatedState: n } = Eh({
    state: n
  })), i.onerror = Oh;
  function s() {
    const l = n.recordsBatch;
    return n.recordsBatch = [], l;
  }
  function u() {
    return n.recordsBatch.length;
  }
  return {
    parser: i,
    drainBatch: s,
    getSize: u
  };
}
function xh(n) {
  const { node: i, state: s } = n, u = { ...s }, l = Ch(i);
  u.defaultNamespace || (u.defaultNamespace = Ah(i));
  const h = Nh(i, u.defaultNamespace), y = Ph(i.attributes), b = Sh(s.stack), A = {
    id: crypto.randomUUID(),
    tagName: l,
    namespace: h,
    attributes: y,
    value: "",
    parent: b,
    children: []
  };
  return u.stack.push(A), u;
}
function Th(n) {
  const { text: i, state: s } = n;
  return i && s.stack.length > 0 && (s.stack[s.stack.length - 1].value += i), s;
}
function Eh(n) {
  const { state: i } = n, s = i.stack.at(-1);
  let u = i.stack.slice(0, -1);
  const l = [...i.recordsBatch];
  if (s) {
    if (u.length) {
      const h = u.length - 1;
      u = u.map(
        (y, b) => b === h ? {
          ...y,
          children: [
            ...y.children,
            { id: s.id, tagName: s.tagName }
          ]
        } : y
      );
    } else s.parent && yh({
      parentId: s.parent.id,
      child: { id: s.id, tagName: s.tagName }
    });
    l.push(s);
  }
  return {
    updatedState: {
      defaultNamespace: i.defaultNamespace,
      stack: u,
      recordsBatch: l
    }
  };
}
function Oh(n) {
  return new Error(`XML parsing error: ${n}`);
}
function Ch(n) {
  return n.local || null;
}
function Ah(n) {
  if (n.name !== "SCL") throw new Error("Default namespace can only be set on SCL element");
  return n.attributes?.xmlns?.value ? {
    prefix: "",
    uri: n.attributes.xmlns.value
  } : jc.default;
}
function Nh(n, i) {
  return vh(n) ? {
    prefix: n.prefix,
    uri: n.uri
  } : i;
}
function Ph(n) {
  return Object.values(n).map((i) => {
    const s = i.prefix && i.uri ? {
      prefix: i.prefix,
      uri: i.uri
    } : void 0;
    return {
      name: i.name,
      value: i.value,
      ...s && { namespace: s }
    };
  });
}
function Sh(n) {
  if (n.length === 0) return null;
  const i = n[n.length - 1];
  return i ? { id: i.id, tagName: i.tagName } : null;
}
var ps = { exports: {} }, kh = ps.exports, hu;
function Ih() {
  return hu || (hu = 1, function(n, i) {
    (function(s, u) {
      n.exports = u();
    })(kh, function() {
      var s = function(e, t) {
        return (s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
          r.__proto__ = o;
        } || function(r, o) {
          for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (r[a] = o[a]);
        })(e, t);
      }, u = function() {
        return (u = Object.assign || function(e) {
          for (var t, r = 1, o = arguments.length; r < o; r++) for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return e;
        }).apply(this, arguments);
      };
      function l(e, t, r) {
        for (var o, a = 0, c = t.length; a < c; a++) !o && a in t || ((o = o || Array.prototype.slice.call(t, 0, a))[a] = t[a]);
        return e.concat(o || Array.prototype.slice.call(t));
      }
      var h = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : uh, y = Object.keys, b = Array.isArray;
      function A(e, t) {
        return typeof t != "object" || y(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || h.Promise || (h.Promise = Promise);
      var K = Object.getPrototypeOf, k = {}.hasOwnProperty;
      function D(e, t) {
        return k.call(e, t);
      }
      function H(e, t) {
        typeof t == "function" && (t = t(K(e))), (typeof Reflect > "u" ? y : Reflect.ownKeys)(t).forEach(function(r) {
          G(e, r, t[r]);
        });
      }
      var ne = Object.defineProperty;
      function G(e, t, r, o) {
        ne(e, t, A(r && D(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function X(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), G(e.prototype, "constructor", e), { extend: H.bind(null, e.prototype) };
        } };
      }
      var Te = Object.getOwnPropertyDescriptor, be = [].slice;
      function ue(e, t, r) {
        return be.call(e, t, r);
      }
      function q(e, t) {
        return t(e);
      }
      function M(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function oe(e) {
        h.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function se(e, t) {
        if (typeof t == "string" && D(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var r = [], o = 0, a = t.length; o < a; ++o) {
            var c = se(e, t[o]);
            r.push(c);
          }
          return r;
        }
        var f = t.indexOf(".");
        if (f !== -1) {
          var d = e[t.substr(0, f)];
          return d == null ? void 0 : se(d, t.substr(f + 1));
        }
      }
      function W(e, t, r) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          M(typeof r != "string" && "length" in r);
          for (var o = 0, a = t.length; o < a; ++o) W(e, t[o], r[o]);
        } else {
          var c, f, d = t.indexOf(".");
          d !== -1 ? (c = t.substr(0, d), (f = t.substr(d + 1)) === "" ? r === void 0 ? b(e) && !isNaN(parseInt(c)) ? e.splice(c, 1) : delete e[c] : e[c] = r : W(d = !(d = e[c]) || !D(e, c) ? e[c] = {} : d, f, r)) : r === void 0 ? b(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function te(e) {
        var t, r = {};
        for (t in e) D(e, t) && (r[t] = e[t]);
        return r;
      }
      var P = [].concat;
      function ie(e) {
        return P.apply([], e);
      }
      var De = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ie([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return h[e];
      }), pe = new Set(De.map(function(e) {
        return h[e];
      })), de = null;
      function Ee(e) {
        return de = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var o = de.get(r);
          if (o) return o;
          if (b(r)) {
            o = [], de.set(r, o);
            for (var a = 0, c = r.length; a < c; ++a) o.push(t(r[a]));
          } else if (pe.has(r.constructor)) o = r;
          else {
            var f, d = K(r);
            for (f in o = d === Object.prototype ? {} : Object.create(d), de.set(r, o), r) D(r, f) && (o[f] = t(r[f]));
          }
          return o;
        }(e), de = null, e;
      }
      var qe = {}.toString;
      function Be(e) {
        return qe.call(e).slice(8, -1);
      }
      var Ae = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Oe = typeof Ae == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Ae]) && t.apply(e);
      } : function() {
        return null;
      };
      function Ce(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var We = {};
      function rt(e) {
        var t, r, o, a;
        if (arguments.length === 1) {
          if (b(e)) return e.slice();
          if (this === We && typeof e == "string") return [e];
          if (a = Oe(e)) {
            for (r = []; !(o = a.next()).done; ) r.push(o.value);
            return r;
          }
          if (e == null) return [e];
          if (typeof (t = e.length) != "number") return [e];
          for (r = new Array(t); t--; ) r[t] = e[t];
          return r;
        }
        for (t = arguments.length, r = new Array(t); t--; ) r[t] = arguments[t];
        return r;
      }
      var lt = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Pe = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], ct = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Pe), Nt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Pt(e, t) {
        this.name = e, this.message = t;
      }
      function An(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(r) {
          return t[r].toString();
        }).filter(function(r, o, a) {
          return a.indexOf(r) === o;
        }).join(`
`);
      }
      function Zt(e, t, r, o) {
        this.failures = t, this.failedKeys = o, this.successCount = r, this.message = An(e, t);
      }
      function yt(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(r) {
          return t[r];
        }), this.failuresByPos = t, this.message = An(e, this.failures);
      }
      X(Pt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), X(Zt).from(Pt), X(yt).from(Pt);
      var N = ct.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), w = Pt, B = ct.reduce(function(e, t) {
        var r = t + "Error";
        function o(a, c) {
          this.name = r, a ? typeof a == "string" ? (this.message = "".concat(a).concat(c ? `
 ` + c : ""), this.inner = c || null) : typeof a == "object" && (this.message = "".concat(a.name, " ").concat(a.message), this.inner = a) : (this.message = Nt[t] || r, this.inner = null);
        }
        return X(o).from(w), e[t] = o, e;
      }, {});
      B.Syntax = SyntaxError, B.Type = TypeError, B.Range = RangeError;
      var V = Pe.reduce(function(e, t) {
        return e[t + "Error"] = B[t], e;
      }, {}), Ue = ct.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = B[t]), e;
      }, {});
      function _e() {
      }
      function F(e) {
        return e;
      }
      function j(e, t) {
        return e == null || e === F ? t : function(r) {
          return t(e(r));
        };
      }
      function Q(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function fe(e, t) {
        return e === _e ? t : function() {
          var r = e.apply(this, arguments);
          r !== void 0 && (arguments[0] = r);
          var o = this.onsuccess, a = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var c = t.apply(this, arguments);
          return o && (this.onsuccess = this.onsuccess ? Q(o, this.onsuccess) : o), a && (this.onerror = this.onerror ? Q(a, this.onerror) : a), c !== void 0 ? c : r;
        };
      }
      function ae(e, t) {
        return e === _e ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? Q(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? Q(o, this.onerror) : o);
        };
      }
      function ce(e, t) {
        return e === _e ? t : function(r) {
          var o = e.apply(this, arguments);
          A(r, o);
          var a = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), a && (this.onsuccess = this.onsuccess ? Q(a, this.onsuccess) : a), c && (this.onerror = this.onerror ? Q(c, this.onerror) : c), o === void 0 ? r === void 0 ? void 0 : r : A(o, r);
        };
      }
      function we(e, t) {
        return e === _e ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function me(e, t) {
        return e === _e ? t : function() {
          var r = e.apply(this, arguments);
          if (r && typeof r.then == "function") {
            for (var o = this, a = arguments.length, c = new Array(a); a--; ) c[a] = arguments[a];
            return r.then(function() {
              return t.apply(o, c);
            });
          }
          return t.apply(this, arguments);
        };
      }
      Ue.ModifyError = Zt, Ue.DexieError = Pt, Ue.BulkError = yt;
      var le = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function he(e) {
        le = e;
      }
      var ke = {}, xe = 100, De = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, K(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, K(t), e];
      }(), Pe = De[0], ct = De[1], De = De[2], ct = ct && ct.then, Ke = Pe && Pe.constructor, Xe = !!De, $e = function(e, t) {
        dt.push([e, t]), st && (queueMicrotask(da), st = !1);
      }, ht = !0, st = !0, it = [], ft = [], nn = F, bt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: _e, pgp: !1, env: {}, finalize: _e }, re = bt, dt = [], St = 0, In = [];
      function Z(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = re;
        if (typeof e != "function") {
          if (e !== ke) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && vr(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function r(o, a) {
          try {
            a(function(c) {
              if (o._state === null) {
                if (c === o) throw new TypeError("A promise cannot be resolved with itself.");
                var f = o._lib && rn();
                c && typeof c.then == "function" ? r(o, function(d, m) {
                  c instanceof Z ? c._then(d, m) : c.then(d, m);
                }) : (o._state = !0, o._value = c, xi(o)), f && on();
              }
            }, vr.bind(null, o));
          } catch (c) {
            vr(o, c);
          }
        }(this, e);
      }
      var gr = { get: function() {
        var e = re, t = Bn;
        function r(o, a) {
          var c = this, f = !e.global && (e !== re || t !== Bn), d = f && !It(), m = new Z(function(v, x) {
            br(c, new wi(Ei(o, e, f, d), Ei(a, e, f, d), v, x, e));
          });
          return this._consoleTask && (m._consoleTask = this._consoleTask), m;
        }
        return r.prototype = ke, r;
      }, set: function(e) {
        G(this, "then", e && e.prototype === ke ? gr : { get: function() {
          return e;
        }, set: gr.set });
      } };
      function wi(e, t, r, o, a) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = r, this.reject = o, this.psd = a;
      }
      function vr(e, t) {
        var r, o;
        ft.push(t), e._state === null && (r = e._lib && rn(), t = nn(t), e._state = !1, e._value = t, o = e, it.some(function(a) {
          return a._value === o._value;
        }) || it.push(o), xi(e), r && on());
      }
      function xi(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var r = 0, o = t.length; r < o; ++r) br(e, t[r]);
        var a = e._PSD;
        --a.ref || a.finalize(), St === 0 && (++St, $e(function() {
          --St == 0 && _r();
        }, []));
      }
      function br(e, t) {
        if (e._state !== null) {
          var r = e._state ? t.onFulfilled : t.onRejected;
          if (r === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++St, $e(ha, [r, e, t]);
        } else e._listeners.push(t);
      }
      function ha(e, t, r) {
        try {
          var o, a = t._value;
          !t._state && ft.length && (ft = []), o = le && t._consoleTask ? t._consoleTask.run(function() {
            return e(a);
          }) : e(a), t._state || ft.indexOf(a) !== -1 || function(c) {
            for (var f = it.length; f; ) if (it[--f]._value === c._value) return it.splice(f, 1);
          }(t), r.resolve(o);
        } catch (c) {
          r.reject(c);
        } finally {
          --St == 0 && _r(), --r.psd.ref || r.psd.finalize();
        }
      }
      function da() {
        qt(bt, function() {
          rn() && on();
        });
      }
      function rn() {
        var e = ht;
        return st = ht = !1, e;
      }
      function on() {
        var e, t, r;
        do
          for (; 0 < dt.length; ) for (e = dt, dt = [], r = e.length, t = 0; t < r; ++t) {
            var o = e[t];
            o[0].apply(null, o[1]);
          }
        while (0 < dt.length);
        st = ht = !0;
      }
      function _r() {
        var e = it;
        it = [], e.forEach(function(o) {
          o._PSD.onunhandled.call(null, o._value, o);
        });
        for (var t = In.slice(0), r = t.length; r; ) t[--r]();
      }
      function Dn(e) {
        return new Z(ke, !1, e);
      }
      function je(e, t) {
        var r = re;
        return function() {
          var o = rn(), a = re;
          try {
            return Dt(r, !0), e.apply(this, arguments);
          } catch (c) {
            t && t(c);
          } finally {
            Dt(a, !1), o && on();
          }
        };
      }
      H(Z.prototype, { then: gr, _then: function(e, t) {
        br(this, new wi(null, null, e, t, re));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, r = arguments[1];
        return typeof t == "function" ? this.then(null, function(o) {
          return (o instanceof t ? r : Dn)(o);
        }) : this.then(null, function(o) {
          return (o && o.name === t ? r : Dn)(o);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return Z.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return Z.resolve(e()).then(function() {
            return Dn(t);
          });
        });
      }, timeout: function(e, t) {
        var r = this;
        return e < 1 / 0 ? new Z(function(o, a) {
          var c = setTimeout(function() {
            return a(new B.Timeout(t));
          }, e);
          r.then(o, a).finally(clearTimeout.bind(null, c));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && G(Z.prototype, Symbol.toStringTag, "Dexie.Promise"), bt.env = Ti(), H(Z, { all: function() {
        var e = rt.apply(null, arguments).map(Kn);
        return new Z(function(t, r) {
          e.length === 0 && t([]);
          var o = e.length;
          e.forEach(function(a, c) {
            return Z.resolve(a).then(function(f) {
              e[c] = f, --o || t(e);
            }, r);
          });
        });
      }, resolve: function(e) {
        return e instanceof Z ? e : e && typeof e.then == "function" ? new Z(function(t, r) {
          e.then(t, r);
        }) : new Z(ke, !0, e);
      }, reject: Dn, race: function() {
        var e = rt.apply(null, arguments).map(Kn);
        return new Z(function(t, r) {
          e.map(function(o) {
            return Z.resolve(o).then(t, r);
          });
        });
      }, PSD: { get: function() {
        return re;
      }, set: function(e) {
        return re = e;
      } }, totalEchoes: { get: function() {
        return Bn;
      } }, newPSD: kt, usePSD: qt, scheduler: { get: function() {
        return $e;
      }, set: function(e) {
        $e = e;
      } }, rejectionMapper: { get: function() {
        return nn;
      }, set: function(e) {
        nn = e;
      } }, follow: function(e, t) {
        return new Z(function(r, o) {
          return kt(function(a, c) {
            var f = re;
            f.unhandleds = [], f.onunhandled = c, f.finalize = Q(function() {
              var d, m = this;
              d = function() {
                m.unhandleds.length === 0 ? a() : c(m.unhandleds[0]);
              }, In.push(function v() {
                d(), In.splice(In.indexOf(v), 1);
              }), ++St, $e(function() {
                --St == 0 && _r();
              }, []);
            }, f.finalize), e();
          }, t, r, o);
        });
      } }), Ke && (Ke.allSettled && G(Z, "allSettled", function() {
        var e = rt.apply(null, arguments).map(Kn);
        return new Z(function(t) {
          e.length === 0 && t([]);
          var r = e.length, o = new Array(r);
          e.forEach(function(a, c) {
            return Z.resolve(a).then(function(f) {
              return o[c] = { status: "fulfilled", value: f };
            }, function(f) {
              return o[c] = { status: "rejected", reason: f };
            }).then(function() {
              return --r || t(o);
            });
          });
        });
      }), Ke.any && typeof AggregateError < "u" && G(Z, "any", function() {
        var e = rt.apply(null, arguments).map(Kn);
        return new Z(function(t, r) {
          e.length === 0 && r(new AggregateError([]));
          var o = e.length, a = new Array(o);
          e.forEach(function(c, f) {
            return Z.resolve(c).then(function(d) {
              return t(d);
            }, function(d) {
              a[f] = d, --o || r(new AggregateError(a));
            });
          });
        });
      }), Ke.withResolvers && (Z.withResolvers = Ke.withResolvers));
      var Ge = { awaits: 0, echoes: 0, id: 0 }, pa = 0, Rn = [], Fn = 0, Bn = 0, ya = 0;
      function kt(e, t, r, o) {
        var a = re, c = Object.create(a);
        return c.parent = a, c.ref = 0, c.global = !1, c.id = ++ya, bt.env, c.env = Xe ? { Promise: Z, PromiseProp: { value: Z, configurable: !0, writable: !0 }, all: Z.all, race: Z.race, allSettled: Z.allSettled, any: Z.any, resolve: Z.resolve, reject: Z.reject } : {}, t && A(c, t), ++a.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = qt(c, e, r, o), c.ref === 0 && c.finalize(), o;
      }
      function an() {
        return Ge.id || (Ge.id = ++pa), ++Ge.awaits, Ge.echoes += xe, Ge.id;
      }
      function It() {
        return !!Ge.awaits && (--Ge.awaits == 0 && (Ge.id = 0), Ge.echoes = Ge.awaits * xe, !0);
      }
      function Kn(e) {
        return Ge.echoes && e && e.constructor === Ke ? (an(), e.then(function(t) {
          return It(), t;
        }, function(t) {
          return It(), Ve(t);
        })) : e;
      }
      function ma() {
        var e = Rn[Rn.length - 1];
        Rn.pop(), Dt(e, !1);
      }
      function Dt(e, t) {
        var r, o = re;
        (t ? !Ge.echoes || Fn++ && e === re : !Fn || --Fn && e === re) || queueMicrotask(t ? (function(a) {
          ++Bn, Ge.echoes && --Ge.echoes != 0 || (Ge.echoes = Ge.awaits = Ge.id = 0), Rn.push(re), Dt(a, !0);
        }).bind(null, e) : ma), e !== re && (re = e, o === bt && (bt.env = Ti()), Xe && (r = bt.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(h, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function Ti() {
        var e = h.Promise;
        return Xe ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(h, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function qt(e, t, r, o, a) {
        var c = re;
        try {
          return Dt(e, !0), t(r, o, a);
        } finally {
          Dt(c, !1);
        }
      }
      function Ei(e, t, r, o) {
        return typeof e != "function" ? e : function() {
          var a = re;
          r && an(), Dt(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Dt(a, !1), o && queueMicrotask(It);
          }
        };
      }
      function wr(e) {
        Promise === Ke && Ge.echoes === 0 ? Fn === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + ct).indexOf("[native code]") === -1 && (an = It = _e);
      var Ve = Z.reject, Ut = "￿", xt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Oi = "String expected.", sn = [], jn = "__dbnames", xr = "readonly", Tr = "readwrite";
      function Vt(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var Ci = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Mn(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = Ee(t))[e], t;
        };
      }
      function Ai() {
        throw B.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function Ne(e, t) {
        try {
          var r = Ni(e), o = Ni(t);
          if (r !== o) return r === "Array" ? 1 : o === "Array" ? -1 : r === "binary" ? 1 : o === "binary" ? -1 : r === "string" ? 1 : o === "string" ? -1 : r === "Date" ? 1 : o !== "Date" ? NaN : -1;
          switch (r) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return function(a, c) {
                for (var f = a.length, d = c.length, m = f < d ? f : d, v = 0; v < m; ++v) if (a[v] !== c[v]) return a[v] < c[v] ? -1 : 1;
                return f === d ? 0 : f < d ? -1 : 1;
              }(Pi(e), Pi(t));
            case "Array":
              return function(a, c) {
                for (var f = a.length, d = c.length, m = f < d ? f : d, v = 0; v < m; ++v) {
                  var x = Ne(a[v], c[v]);
                  if (x !== 0) return x;
                }
                return f === d ? 0 : f < d ? -1 : 1;
              }(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function Ni(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = Be(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function Pi(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function Ln(e, t, r) {
        var o = e.schema.yProps;
        return o ? (t && 0 < r.numFailures && (t = t.filter(function(a, c) {
          return !r.failures[c];
        })), Promise.all(o.map(function(a) {
          return a = a.updatesTable, t ? e.db.table(a).where("k").anyOf(t).delete() : e.db.table(a).clear();
        })).then(function() {
          return r;
        })) : r;
      }
      var Si = (Fe.prototype._trans = function(e, t, r) {
        var o = this._tx || re.trans, a = this.name, c = le && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function f(v, x, p) {
          if (!p.schema[a]) throw new B.NotFound("Table " + a + " not part of transaction");
          return t(p.idbtrans, p);
        }
        var d = rn();
        try {
          var m = o && o.db._novip === this.db._novip ? o === re.trans ? o._promise(e, f, r) : kt(function() {
            return o._promise(e, f, r);
          }, { trans: o, transless: re.transless || re }) : function v(x, p, O, g) {
            if (x.idbdb && (x._state.openComplete || re.letThrough || x._vip)) {
              var _ = x._createTransaction(p, O, x._dbSchema);
              try {
                _.create(), x._state.PR1398_maxLoop = 3;
              } catch (E) {
                return E.name === N.InvalidState && x.isOpen() && 0 < --x._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), x.close({ disableAutoOpen: !1 }), x.open().then(function() {
                  return v(x, p, O, g);
                })) : Ve(E);
              }
              return _._promise(p, function(E, T) {
                return kt(function() {
                  return re.trans = _, g(E, T, _);
                });
              }).then(function(E) {
                if (p === "readwrite") try {
                  _.idbtrans.commit();
                } catch {
                }
                return p === "readonly" ? E : _._completion.then(function() {
                  return E;
                });
              });
            }
            if (x._state.openComplete) return Ve(new B.DatabaseClosed(x._state.dbOpenError));
            if (!x._state.isBeingOpened) {
              if (!x._state.autoOpen) return Ve(new B.DatabaseClosed());
              x.open().catch(_e);
            }
            return x._state.dbReadyPromise.then(function() {
              return v(x, p, O, g);
            });
          }(this.db, e, [this.name], f);
          return c && (m._consoleTask = c, m = m.catch(function(v) {
            return console.trace(v), Ve(v);
          })), m;
        } finally {
          d && on();
        }
      }, Fe.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? Ve(new B.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(a) {
            return r.hook.reading.fire(a);
          });
        }).then(t);
      }, Fe.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (b(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = y(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var r = this.schema.indexes.concat(this.schema.primKey).filter(function(d) {
          if (d.compound && t.every(function(v) {
            return 0 <= d.keyPath.indexOf(v);
          })) {
            for (var m = 0; m < t.length; ++m) if (t.indexOf(d.keyPath[m]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(d, m) {
          return d.keyPath.length - m.keyPath.length;
        })[0];
        if (r && this.db._maxKey !== Ut) {
          var c = r.keyPath.slice(0, t.length);
          return this.where(c).equals(c.map(function(m) {
            return e[m];
          }));
        }
        !r && le && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var o = this.schema.idxByName;
        function a(d, m) {
          return Ne(d, m) === 0;
        }
        var f = t.reduce(function(p, m) {
          var v = p[0], x = p[1], p = o[m], O = e[m];
          return [v || p, v || !p ? Vt(x, p && p.multi ? function(g) {
            return g = se(g, m), b(g) && g.some(function(_) {
              return a(O, _);
            });
          } : function(g) {
            return a(O, se(g, m));
          }) : x];
        }, [null, null]), c = f[0], f = f[1];
        return c ? this.where(c.name).equals(e[c.keyPath]).filter(f) : r ? this.filter(f) : this.where(t).equals("");
      }, Fe.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, Fe.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, Fe.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, Fe.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, Fe.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, Fe.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, Fe.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Fe.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, b(e) ? "[".concat(e.join("+"), "]") : e));
      }, Fe.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Fe.prototype.mapToClass = function(e) {
        var t, r = this.db, o = this.name;
        function a() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof Ai && (function(m, v) {
          if (typeof v != "function" && v !== null) throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
          function x() {
            this.constructor = m;
          }
          s(m, v), m.prototype = v === null ? Object.create(v) : (x.prototype = v.prototype, new x());
        }(a, t = e), Object.defineProperty(a.prototype, "db", { get: function() {
          return r;
        }, enumerable: !1, configurable: !0 }), a.prototype.table = function() {
          return o;
        }, e = a);
        for (var c = /* @__PURE__ */ new Set(), f = e.prototype; f; f = K(f)) Object.getOwnPropertyNames(f).forEach(function(m) {
          return c.add(m);
        });
        function d(m) {
          if (!m) return m;
          var v, x = Object.create(e.prototype);
          for (v in m) if (!c.has(v)) try {
            x[v] = m[v];
          } catch {
          }
          return x;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = d, this.hook("reading", d), e;
      }, Fe.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          A(this, e);
        });
      }, Fe.prototype.add = function(e, t) {
        var r = this, o = this.schema.primKey, a = o.auto, c = o.keyPath, f = e;
        return c && a && (f = Mn(c)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "add", keys: t != null ? [t] : null, values: [f] });
        }).then(function(d) {
          return d.numFailures ? Z.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (c) try {
            W(e, c, d);
          } catch {
          }
          return d;
        });
      }, Fe.prototype.update = function(e, t) {
        return typeof e != "object" || b(e) ? this.where(":id").equals(e).modify(t) : (e = se(e, this.schema.primKey.keyPath), e === void 0 ? Ve(new B.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, Fe.prototype.put = function(e, t) {
        var r = this, o = this.schema.primKey, a = o.auto, c = o.keyPath, f = e;
        return c && a && (f = Mn(c)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "put", values: [f], keys: t != null ? [t] : null });
        }).then(function(d) {
          return d.numFailures ? Z.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (c) try {
            W(e, c, d);
          } catch {
          }
          return d;
        });
      }, Fe.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: [e] }).then(function(o) {
            return Ln(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? Z.reject(o.failures[0]) : void 0;
          });
        });
      }, Fe.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: Ci }).then(function(r) {
            return Ln(e, null, r);
          });
        }).then(function(t) {
          return t.numFailures ? Z.reject(t.failures[0]) : void 0;
        });
      }, Fe.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(r) {
          return t.core.getMany({ keys: e, trans: r }).then(function(o) {
            return o.map(function(a) {
              return t.hook.reading.fire(a);
            });
          });
        });
      }, Fe.prototype.bulkAdd = function(e, t, r) {
        var o = this, a = Array.isArray(t) ? t : void 0, c = (r = r || (a ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(f) {
          var v = o.schema.primKey, d = v.auto, v = v.keyPath;
          if (v && a) throw new B.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new B.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, v = v && d ? e.map(Mn(v)) : e;
          return o.core.mutate({ trans: f, type: "add", keys: a, values: v, wantResults: c }).then(function(_) {
            var p = _.numFailures, O = _.results, g = _.lastResult, _ = _.failures;
            if (p === 0) return c ? O : g;
            throw new yt("".concat(o.name, ".bulkAdd(): ").concat(p, " of ").concat(m, " operations failed"), _);
          });
        });
      }, Fe.prototype.bulkPut = function(e, t, r) {
        var o = this, a = Array.isArray(t) ? t : void 0, c = (r = r || (a ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(f) {
          var v = o.schema.primKey, d = v.auto, v = v.keyPath;
          if (v && a) throw new B.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new B.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, v = v && d ? e.map(Mn(v)) : e;
          return o.core.mutate({ trans: f, type: "put", keys: a, values: v, wantResults: c }).then(function(_) {
            var p = _.numFailures, O = _.results, g = _.lastResult, _ = _.failures;
            if (p === 0) return c ? O : g;
            throw new yt("".concat(o.name, ".bulkPut(): ").concat(p, " of ").concat(m, " operations failed"), _);
          });
        });
      }, Fe.prototype.bulkUpdate = function(e) {
        var t = this, r = this.core, o = e.map(function(f) {
          return f.key;
        }), a = e.map(function(f) {
          return f.changes;
        }), c = [];
        return this._trans("readwrite", function(f) {
          return r.getMany({ trans: f, keys: o, cache: "clone" }).then(function(d) {
            var m = [], v = [];
            e.forEach(function(p, O) {
              var g = p.key, _ = p.changes, E = d[O];
              if (E) {
                for (var T = 0, C = Object.keys(_); T < C.length; T++) {
                  var S = C[T], I = _[S];
                  if (S === t.schema.primKey.keyPath) {
                    if (Ne(I, g) !== 0) throw new B.Constraint("Cannot update primary key in bulkUpdate()");
                  } else W(E, S, I);
                }
                c.push(O), m.push(g), v.push(E);
              }
            });
            var x = m.length;
            return r.mutate({ trans: f, type: "put", keys: m, values: v, updates: { keys: o, changeSpecs: a } }).then(function(p) {
              var O = p.numFailures, g = p.failures;
              if (O === 0) return x;
              for (var _ = 0, E = Object.keys(g); _ < E.length; _++) {
                var T, C = E[_], S = c[Number(C)];
                S != null && (T = g[C], delete g[C], g[S] = T);
              }
              throw new yt("".concat(t.name, ".bulkUpdate(): ").concat(O, " of ").concat(x, " operations failed"), g);
            });
          });
        });
      }, Fe.prototype.bulkDelete = function(e) {
        var t = this, r = e.length;
        return this._trans("readwrite", function(o) {
          return t.core.mutate({ trans: o, type: "delete", keys: e }).then(function(a) {
            return Ln(t, e, a);
          });
        }).then(function(f) {
          var a = f.numFailures, c = f.lastResult, f = f.failures;
          if (a === 0) return c;
          throw new yt("".concat(t.name, ".bulkDelete(): ").concat(a, " of ").concat(r, " operations failed"), f);
        });
      }, Fe);
      function Fe() {
      }
      function pn(e) {
        function t(f, d) {
          if (d) {
            for (var m = arguments.length, v = new Array(m - 1); --m; ) v[m - 1] = arguments[m];
            return r[f].subscribe.apply(null, v), e;
          }
          if (typeof f == "string") return r[f];
        }
        var r = {};
        t.addEventType = c;
        for (var o = 1, a = arguments.length; o < a; ++o) c(arguments[o]);
        return t;
        function c(f, d, m) {
          if (typeof f != "object") {
            var v;
            d = d || we;
            var x = { subscribers: [], fire: m = m || _e, subscribe: function(p) {
              x.subscribers.indexOf(p) === -1 && (x.subscribers.push(p), x.fire = d(x.fire, p));
            }, unsubscribe: function(p) {
              x.subscribers = x.subscribers.filter(function(O) {
                return O !== p;
              }), x.fire = x.subscribers.reduce(d, m);
            } };
            return r[f] = t[f] = x;
          }
          y(v = f).forEach(function(p) {
            var O = v[p];
            if (b(O)) c(p, v[p][0], v[p][1]);
            else {
              if (O !== "asap") throw new B.InvalidArgument("Invalid event config");
              var g = c(p, F, function() {
                for (var _ = arguments.length, E = new Array(_); _--; ) E[_] = arguments[_];
                g.subscribers.forEach(function(T) {
                  oe(function() {
                    T.apply(null, E);
                  });
                });
              });
            }
          });
        }
      }
      function yn(e, t) {
        return X(t).from({ prototype: e }), t;
      }
      function un(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function Er(e, t) {
        e.filter = Vt(e.filter, t);
      }
      function Or(e, t, r) {
        var o = e.replayFilter;
        e.replayFilter = o ? function() {
          return Vt(o(), t());
        } : t, e.justLimit = r && !o;
      }
      function qn(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var r = t.getIndexByKeyPath(e.index);
        if (!r) throw new B.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return r;
      }
      function ki(e, t, r) {
        var o = qn(e, t.schema);
        return t.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: o, range: e.range } });
      }
      function Un(e, t, r, o) {
        var a = e.replayFilter ? Vt(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var c = {}, f = function(d, m, v) {
            var x, p;
            a && !a(m, v, function(O) {
              return m.stop(O);
            }, function(O) {
              return m.fail(O);
            }) || ((p = "" + (x = m.primaryKey)) == "[object ArrayBuffer]" && (p = "" + new Uint8Array(x)), D(c, p) || (c[p] = !0, t(d, m, v)));
          };
          return Promise.all([e.or._iterate(f, r), Ii(ki(e, o, r), e.algorithm, f, !e.keysOnly && e.valueMapper)]);
        }
        return Ii(ki(e, o, r), Vt(e.algorithm, a), t, !e.keysOnly && e.valueMapper);
      }
      function Ii(e, t, r, o) {
        var a = je(o ? function(c, f, d) {
          return r(o(c), f, d);
        } : r);
        return e.then(function(c) {
          if (c) return c.start(function() {
            var f = function() {
              return c.continue();
            };
            t && !t(c, function(d) {
              return f = d;
            }, function(d) {
              c.stop(d), f = _e;
            }, function(d) {
              c.fail(d), f = _e;
            }) || a(c.value, c, function(d) {
              return f = d;
            }), f();
          });
        });
      }
      var mn = (Di.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var r = t.add;
          if (b(r)) return l(l([], b(e) ? e : [], !0), r).sort();
          if (typeof r == "number") return (Number(e) || 0) + r;
          if (typeof r == "bigint") try {
            return BigInt(e) + r;
          } catch {
            return BigInt(0) + r;
          }
          throw new TypeError("Invalid term ".concat(r));
        }
        if (t.remove !== void 0) {
          var o = t.remove;
          if (b(o)) return b(e) ? e.filter(function(a) {
            return !o.includes(a);
          }).sort() : [];
          if (typeof o == "number") return Number(e) - o;
          if (typeof o == "bigint") try {
            return BigInt(e) - o;
          } catch {
            return BigInt(0) - o;
          }
          throw new TypeError("Invalid subtrahend ".concat(o));
        }
        return r = (r = t.replacePrefix) === null || r === void 0 ? void 0 : r[0], r && typeof e == "string" && e.startsWith(r) ? t.replacePrefix[1] + e.substring(r.length) : e;
      }, Di);
      function Di(e) {
        this["@@propmod"] = e;
      }
      var ga = (Ie.prototype._read = function(e, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, Ve.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, Ie.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, Ve.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, Ie.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Vt(t.algorithm, e);
      }, Ie.prototype._iterate = function(e, t) {
        return Un(this._ctx, e, t, this._ctx.table.core);
      }, Ie.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && A(r, e), t._ctx = r, t;
      }, Ie.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Ie.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(r) {
          return Un(t, e, r, t.table.core);
        });
      }, Ie.prototype.count = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx, a = o.table.core;
          if (un(o, !0)) return a.count({ trans: r, query: { index: qn(o, a.schema), range: o.range } }).then(function(f) {
            return Math.min(f, o.limit);
          });
          var c = 0;
          return Un(o, function() {
            return ++c, !1;
          }, r, a).then(function() {
            return c;
          });
        }).then(e);
      }, Ie.prototype.sortBy = function(e, t) {
        var r = e.split(".").reverse(), o = r[0], a = r.length - 1;
        function c(m, v) {
          return v ? c(m[r[v]], v - 1) : m[o];
        }
        var f = this._ctx.dir === "next" ? 1 : -1;
        function d(m, v) {
          return Ne(c(m, a), c(v, a)) * f;
        }
        return this.toArray(function(m) {
          return m.sort(d);
        }).then(t);
      }, Ie.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx;
          if (o.dir === "next" && un(o, !0) && 0 < o.limit) {
            var a = o.valueMapper, c = qn(o, o.table.core.schema);
            return o.table.core.query({ trans: r, limit: o.limit, values: !0, query: { index: c, range: o.range } }).then(function(d) {
              return d = d.result, a ? d.map(a) : d;
            });
          }
          var f = [];
          return Un(o, function(d) {
            return f.push(d);
          }, r, o.table.core).then(function() {
            return f;
          });
        }, e);
      }, Ie.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, un(t) ? Or(t, function() {
          var r = e;
          return function(o, a) {
            return r === 0 || (r === 1 ? --r : a(function() {
              o.advance(r), r = 0;
            }), !1);
          };
        }) : Or(t, function() {
          var r = e;
          return function() {
            return --r < 0;
          };
        })), this;
      }, Ie.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Or(this._ctx, function() {
          var t = e;
          return function(r, o, a) {
            return --t <= 0 && o(a), 0 <= t;
          };
        }, !0), this;
      }, Ie.prototype.until = function(e, t) {
        return Er(this._ctx, function(r, o, a) {
          return !e(r.value) || (o(a), t);
        }), this;
      }, Ie.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, Ie.prototype.last = function(e) {
        return this.reverse().first(e);
      }, Ie.prototype.filter = function(e) {
        var t;
        return Er(this._ctx, function(r) {
          return e(r.value);
        }), (t = this._ctx).isMatch = Vt(t.isMatch, e), this;
      }, Ie.prototype.and = function(e) {
        return this.filter(e);
      }, Ie.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, Ie.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Ie.prototype.desc = function() {
        return this.reverse();
      }, Ie.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.key, o);
        });
      }, Ie.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, Ie.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.primaryKey, o);
        });
      }, Ie.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(o, a) {
          r.push(a.key);
        }).then(function() {
          return r;
        }).then(e);
      }, Ie.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && un(t, !0) && 0 < t.limit) return this._read(function(o) {
          var a = qn(t, t.table.core.schema);
          return t.table.core.query({ trans: o, values: !1, limit: t.limit, query: { index: a, range: t.range } });
        }).then(function(o) {
          return o.result;
        }).then(e);
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(o, a) {
          r.push(a.primaryKey);
        }).then(function() {
          return r;
        }).then(e);
      }, Ie.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, Ie.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, Ie.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, Ie.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return Er(this._ctx, function(a) {
          var o = a.primaryKey.toString(), a = D(t, o);
          return t[o] = !0, !a;
        }), this;
      }, Ie.prototype.modify = function(e) {
        var t = this, r = this._ctx;
        return this._write(function(o) {
          var a, c, f;
          f = typeof e == "function" ? e : (a = y(e), c = a.length, function(C) {
            for (var S = !1, I = 0; I < c; ++I) {
              var R = a[I], L = e[R], Y = se(C, R);
              L instanceof mn ? (W(C, R, L.execute(Y)), S = !0) : Y !== L && (W(C, R, L), S = !0);
            }
            return S;
          });
          var d = r.table.core, p = d.schema.primaryKey, m = p.outbound, v = p.extractKey, x = 200, p = t.db._options.modifyChunkSize;
          p && (x = typeof p == "object" ? p[d.name] || p["*"] || 200 : p);
          function O(C, R) {
            var I = R.failures, R = R.numFailures;
            _ += C - R;
            for (var L = 0, Y = y(I); L < Y.length; L++) {
              var U = Y[L];
              g.push(I[U]);
            }
          }
          var g = [], _ = 0, E = [], T = e === Ri;
          return t.clone().primaryKeys().then(function(C) {
            function S(R) {
              var L = Math.min(x, C.length - R), Y = C.slice(R, R + L);
              return (T ? Promise.resolve([]) : d.getMany({ trans: o, keys: Y, cache: "immutable" })).then(function(U) {
                var $ = [], J = [], z = m ? [] : null, ee = T ? Y : [];
                if (!T) for (var ve = 0; ve < L; ++ve) {
                  var Se = U[ve], ge = { value: Ee(Se), primKey: C[R + ve] };
                  f.call(ge, ge.value, ge) !== !1 && (ge.value == null ? ee.push(C[R + ve]) : m || Ne(v(Se), v(ge.value)) === 0 ? (J.push(ge.value), m && z.push(C[R + ve])) : (ee.push(C[R + ve]), $.push(ge.value)));
                }
                return Promise.resolve(0 < $.length && d.mutate({ trans: o, type: "add", values: $ }).then(function(Le) {
                  for (var ye in Le.failures) ee.splice(parseInt(ye), 1);
                  O($.length, Le);
                })).then(function() {
                  return (0 < J.length || I && typeof e == "object") && d.mutate({ trans: o, type: "put", keys: z, values: J, criteria: I, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < R }).then(function(Le) {
                    return O(J.length, Le);
                  });
                }).then(function() {
                  return (0 < ee.length || I && T) && d.mutate({ trans: o, type: "delete", keys: ee, criteria: I, isAdditionalChunk: 0 < R }).then(function(Le) {
                    return Ln(r.table, ee, Le);
                  }).then(function(Le) {
                    return O(ee.length, Le);
                  });
                }).then(function() {
                  return C.length > R + L && S(R + x);
                });
              });
            }
            var I = un(r) && r.limit === 1 / 0 && (typeof e != "function" || T) && { index: r.index, range: r.range };
            return S(0).then(function() {
              if (0 < g.length) throw new Zt("Error modifying one or more objects", g, _, E);
              return C.length;
            });
          });
        });
      }, Ie.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !un(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(Ri) : this._write(function(r) {
          var o = e.table.core.schema.primaryKey, a = t;
          return e.table.core.count({ trans: r, query: { index: o, range: a } }).then(function(c) {
            return e.table.core.mutate({ trans: r, type: "deleteRange", range: a }).then(function(m) {
              var d = m.failures, m = m.numFailures;
              if (m) throw new Zt("Could not delete some values", Object.keys(d).map(function(v) {
                return d[v];
              }), c - m);
              return c - m;
            });
          });
        });
      }, Ie);
      function Ie() {
      }
      var Ri = function(e, t) {
        return t.value = null;
      };
      function va(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function ba(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function ot(e, t, r) {
        return e = e instanceof Bi ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function cn(e) {
        return new e.Collection(e, function() {
          return Fi("");
        }).limit(0);
      }
      function Vn(e, t, r, o) {
        var a, c, f, d, m, v, x, p = r.length;
        if (!r.every(function(_) {
          return typeof _ == "string";
        })) return ot(e, Oi);
        function O(_) {
          a = _ === "next" ? function(T) {
            return T.toUpperCase();
          } : function(T) {
            return T.toLowerCase();
          }, c = _ === "next" ? function(T) {
            return T.toLowerCase();
          } : function(T) {
            return T.toUpperCase();
          }, f = _ === "next" ? va : ba;
          var E = r.map(function(T) {
            return { lower: c(T), upper: a(T) };
          }).sort(function(T, C) {
            return f(T.lower, C.lower);
          });
          d = E.map(function(T) {
            return T.upper;
          }), m = E.map(function(T) {
            return T.lower;
          }), x = (v = _) === "next" ? "" : o;
        }
        O("next"), e = new e.Collection(e, function() {
          return Rt(d[0], m[p - 1] + o);
        }), e._ondirectionchange = function(_) {
          O(_);
        };
        var g = 0;
        return e._addAlgorithm(function(_, E, T) {
          var C = _.key;
          if (typeof C != "string") return !1;
          var S = c(C);
          if (t(S, m, g)) return !0;
          for (var I = null, R = g; R < p; ++R) {
            var L = function(Y, U, $, J, z, ee) {
              for (var ve = Math.min(Y.length, J.length), Se = -1, ge = 0; ge < ve; ++ge) {
                var Le = U[ge];
                if (Le !== J[ge]) return z(Y[ge], $[ge]) < 0 ? Y.substr(0, ge) + $[ge] + $.substr(ge + 1) : z(Y[ge], J[ge]) < 0 ? Y.substr(0, ge) + J[ge] + $.substr(ge + 1) : 0 <= Se ? Y.substr(0, Se) + U[Se] + $.substr(Se + 1) : null;
                z(Y[ge], Le) < 0 && (Se = ge);
              }
              return ve < J.length && ee === "next" ? Y + $.substr(Y.length) : ve < Y.length && ee === "prev" ? Y.substr(0, $.length) : Se < 0 ? null : Y.substr(0, Se) + J[Se] + $.substr(Se + 1);
            }(C, S, d[R], m[R], f, v);
            L === null && I === null ? g = R + 1 : (I === null || 0 < f(I, L)) && (I = L);
          }
          return E(I !== null ? function() {
            _.continue(I + x);
          } : T), !1;
        }), e;
      }
      function Rt(e, t, r, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: o };
      }
      function Fi(e) {
        return { type: 1, lower: e, upper: e };
      }
      var Bi = (Object.defineProperty(Ye.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Ye.prototype.between = function(e, t, r, o) {
        r = r !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || o) && (!r || !o) ? cn(this) : new this.Collection(this, function() {
            return Rt(e, t, !r, !o);
          });
        } catch {
          return ot(this, xt);
        }
      }, Ye.prototype.equals = function(e) {
        return e == null ? ot(this, xt) : new this.Collection(this, function() {
          return Fi(e);
        });
      }, Ye.prototype.above = function(e) {
        return e == null ? ot(this, xt) : new this.Collection(this, function() {
          return Rt(e, void 0, !0);
        });
      }, Ye.prototype.aboveOrEqual = function(e) {
        return e == null ? ot(this, xt) : new this.Collection(this, function() {
          return Rt(e, void 0, !1);
        });
      }, Ye.prototype.below = function(e) {
        return e == null ? ot(this, xt) : new this.Collection(this, function() {
          return Rt(void 0, e, !1, !0);
        });
      }, Ye.prototype.belowOrEqual = function(e) {
        return e == null ? ot(this, xt) : new this.Collection(this, function() {
          return Rt(void 0, e);
        });
      }, Ye.prototype.startsWith = function(e) {
        return typeof e != "string" ? ot(this, Oi) : this.between(e, e + Ut, !0, !0);
      }, Ye.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Vn(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], Ut);
      }, Ye.prototype.equalsIgnoreCase = function(e) {
        return Vn(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, Ye.prototype.anyOfIgnoreCase = function() {
        var e = rt.apply(We, arguments);
        return e.length === 0 ? cn(this) : Vn(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, Ye.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = rt.apply(We, arguments);
        return e.length === 0 ? cn(this) : Vn(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, Ut);
      }, Ye.prototype.anyOf = function() {
        var e = this, t = rt.apply(We, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return ot(this, xt);
        }
        if (t.length === 0) return cn(this);
        var o = new this.Collection(this, function() {
          return Rt(t[0], t[t.length - 1]);
        });
        o._ondirectionchange = function(c) {
          r = c === "next" ? e._ascending : e._descending, t.sort(r);
        };
        var a = 0;
        return o._addAlgorithm(function(c, f, d) {
          for (var m = c.key; 0 < r(m, t[a]); ) if (++a === t.length) return f(d), !1;
          return r(m, t[a]) === 0 || (f(function() {
            c.continue(t[a]);
          }), !1);
        }), o;
      }, Ye.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Ye.prototype.noneOf = function() {
        var e = rt.apply(We, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return ot(this, xt);
        }
        var t = e.reduce(function(r, o) {
          return r ? r.concat([[r[r.length - 1][1], o]]) : [[-1 / 0, o]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, Ye.prototype.inAnyRange = function(C, t) {
        var r = this, o = this._cmp, a = this._ascending, c = this._descending, f = this._min, d = this._max;
        if (C.length === 0) return cn(this);
        if (!C.every(function(S) {
          return S[0] !== void 0 && S[1] !== void 0 && a(S[0], S[1]) <= 0;
        })) return ot(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", B.InvalidArgument);
        var m = !t || t.includeLowers !== !1, v = t && t.includeUppers === !0, x, p = a;
        function O(S, I) {
          return p(S[0], I[0]);
        }
        try {
          (x = C.reduce(function(S, I) {
            for (var R = 0, L = S.length; R < L; ++R) {
              var Y = S[R];
              if (o(I[0], Y[1]) < 0 && 0 < o(I[1], Y[0])) {
                Y[0] = f(Y[0], I[0]), Y[1] = d(Y[1], I[1]);
                break;
              }
            }
            return R === L && S.push(I), S;
          }, [])).sort(O);
        } catch {
          return ot(this, xt);
        }
        var g = 0, _ = v ? function(S) {
          return 0 < a(S, x[g][1]);
        } : function(S) {
          return 0 <= a(S, x[g][1]);
        }, E = m ? function(S) {
          return 0 < c(S, x[g][0]);
        } : function(S) {
          return 0 <= c(S, x[g][0]);
        }, T = _, C = new this.Collection(this, function() {
          return Rt(x[0][0], x[x.length - 1][1], !m, !v);
        });
        return C._ondirectionchange = function(S) {
          p = S === "next" ? (T = _, a) : (T = E, c), x.sort(O);
        }, C._addAlgorithm(function(S, I, R) {
          for (var L, Y = S.key; T(Y); ) if (++g === x.length) return I(R), !1;
          return !_(L = Y) && !E(L) || (r._cmp(Y, x[g][1]) === 0 || r._cmp(Y, x[g][0]) === 0 || I(function() {
            p === a ? S.continue(x[g][0]) : S.continue(x[g][1]);
          }), !1);
        }), C;
      }, Ye.prototype.startsWithAnyOf = function() {
        var e = rt.apply(We, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? cn(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + Ut];
        })) : ot(this, "startsWithAnyOf() only works with strings");
      }, Ye);
      function Ye() {
      }
      function mt(e) {
        return je(function(t) {
          return gn(t), e(t.target.error), !1;
        });
      }
      function gn(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var vn = "storagemutated", Cr = "x-storagemutated-1", Ft = pn(null, vn), _a = (gt.prototype._lock = function() {
        return M(!re.global), ++this._reculock, this._reculock !== 1 || re.global || (re.lockOwnerFor = this), this;
      }, gt.prototype._unlock = function() {
        if (M(!re.global), --this._reculock == 0) for (re.global || (re.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            qt(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, gt.prototype._locked = function() {
        return this._reculock && re.lockOwnerFor !== this;
      }, gt.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var r = this.db.idbdb, o = this.db._state.dbOpenError;
        if (M(!this.idbtrans), !e && !r) switch (o && o.name) {
          case "DatabaseClosedError":
            throw new B.DatabaseClosed(o);
          case "MissingAPIError":
            throw new B.MissingAPI(o.message, o);
          default:
            throw new B.OpenFailed(o);
        }
        if (!this.active) throw new B.TransactionInactive();
        return M(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = je(function(a) {
          gn(a), t._reject(e.error);
        }), e.onabort = je(function(a) {
          gn(a), t.active && t._reject(new B.Abort(e.error)), t.active = !1, t.on("abort").fire(a);
        }), e.oncomplete = je(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && Ft.storagemutated.fire(e.mutatedParts);
        }), this;
      }, gt.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Ve(new B.ReadOnly("Transaction is readonly"));
        if (!this.active) return Ve(new B.TransactionInactive());
        if (this._locked()) return new Z(function(c, f) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, r).then(c, f);
          }, re]);
        });
        if (r) return kt(function() {
          var c = new Z(function(f, d) {
            o._lock();
            var m = t(f, d, o);
            m && m.then && m.then(f, d);
          });
          return c.finally(function() {
            return o._unlock();
          }), c._lib = !0, c;
        });
        var a = new Z(function(c, f) {
          var d = t(c, f, o);
          d && d.then && d.then(c, f);
        });
        return a._lib = !0, a;
      }, gt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, gt.prototype.waitFor = function(e) {
        var t, r = this._root(), o = Z.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return o;
        }) : (r._waitingFor = o, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function c() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (t.get(-1 / 0).onsuccess = c);
        }());
        var a = r._waitingFor;
        return new Z(function(c, f) {
          o.then(function(d) {
            return r._waitingQueue.push(je(c.bind(null, d)));
          }, function(d) {
            return r._waitingQueue.push(je(f.bind(null, d)));
          }).finally(function() {
            r._waitingFor === a && (r._waitingFor = null);
          });
        });
      }, gt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new B.Abort()));
      }, gt.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (D(t, e)) return t[e];
        var r = this.schema[e];
        if (!r) throw new B.NotFound("Table " + e + " not part of transaction");
        return r = new this.db.Table(e, r, this), r.core = this.db.core.table(e), t[e] = r;
      }, gt);
      function gt() {
      }
      function Ar(e, t, r, o, a, c, f, d) {
        return { name: e, keyPath: t, unique: r, multi: o, auto: a, compound: c, src: (r && !f ? "&" : "") + (o ? "*" : "") + (a ? "++" : "") + Ki(t), type: d };
      }
      function Ki(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Nr(e, t, r) {
        return { name: e, primKey: t, indexes: r, mappedClass: null, idxByName: (o = function(a) {
          return [a.name, a];
        }, r.reduce(function(a, c, f) {
          return f = o(c, f), f && (a[f[0]] = f[1]), a;
        }, {})) };
        var o;
      }
      var bn = function(e) {
        try {
          return e.only([[]]), bn = function() {
            return [[]];
          }, [[]];
        } catch {
          return bn = function() {
            return Ut;
          }, Ut;
        }
      };
      function Pr(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(r) {
          return r[t];
        } : function(r) {
          return se(r, t);
        } : function(r) {
          return se(r, e);
        };
        var t;
      }
      function ji(e) {
        return [].slice.call(e);
      }
      var wa = 0;
      function _n(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function xa(e, t, m) {
        function o(T) {
          if (T.type === 3) return null;
          if (T.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var g = T.lower, _ = T.upper, E = T.lowerOpen, T = T.upperOpen;
          return g === void 0 ? _ === void 0 ? null : t.upperBound(_, !!T) : _ === void 0 ? t.lowerBound(g, !!E) : t.bound(g, _, !!E, !!T);
        }
        function a(O) {
          var g, _ = O.name;
          return { name: _, schema: O, mutate: function(E) {
            var T = E.trans, C = E.type, S = E.keys, I = E.values, R = E.range;
            return new Promise(function(L, Y) {
              L = je(L);
              var U = T.objectStore(_), $ = U.keyPath == null, J = C === "put" || C === "add";
              if (!J && C !== "delete" && C !== "deleteRange") throw new Error("Invalid operation type: " + C);
              var z, ee = (S || I || { length: 1 }).length;
              if (S && I && S.length !== I.length) throw new Error("Given keys array must have same length as given values array.");
              if (ee === 0) return L({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function ve(tt) {
                ++Le, gn(tt);
              }
              var Se = [], ge = [], Le = 0;
              if (C === "deleteRange") {
                if (R.type === 4) return L({ numFailures: Le, failures: ge, results: [], lastResult: void 0 });
                R.type === 3 ? Se.push(z = U.clear()) : Se.push(z = U.delete(o(R)));
              } else {
                var $ = J ? $ ? [I, S] : [I, null] : [S, null], ye = $[0], ze = $[1];
                if (J) for (var Je = 0; Je < ee; ++Je) Se.push(z = ze && ze[Je] !== void 0 ? U[C](ye[Je], ze[Je]) : U[C](ye[Je])), z.onerror = ve;
                else for (Je = 0; Je < ee; ++Je) Se.push(z = U[C](ye[Je])), z.onerror = ve;
              }
              function tr(tt) {
                tt = tt.target.result, Se.forEach(function(Wt, Gr) {
                  return Wt.error != null && (ge[Gr] = Wt.error);
                }), L({ numFailures: Le, failures: ge, results: C === "delete" ? S : Se.map(function(Wt) {
                  return Wt.result;
                }), lastResult: tt });
              }
              z.onerror = function(tt) {
                ve(tt), tr(tt);
              }, z.onsuccess = tr;
            });
          }, getMany: function(E) {
            var T = E.trans, C = E.keys;
            return new Promise(function(S, I) {
              S = je(S);
              for (var R, L = T.objectStore(_), Y = C.length, U = new Array(Y), $ = 0, J = 0, z = function(Se) {
                Se = Se.target, U[Se._pos] = Se.result, ++J === $ && S(U);
              }, ee = mt(I), ve = 0; ve < Y; ++ve) C[ve] != null && ((R = L.get(C[ve]))._pos = ve, R.onsuccess = z, R.onerror = ee, ++$);
              $ === 0 && S(U);
            });
          }, get: function(E) {
            var T = E.trans, C = E.key;
            return new Promise(function(S, I) {
              S = je(S);
              var R = T.objectStore(_).get(C);
              R.onsuccess = function(L) {
                return S(L.target.result);
              }, R.onerror = mt(I);
            });
          }, query: (g = v, function(E) {
            return new Promise(function(T, C) {
              T = je(T);
              var S, I, R, $ = E.trans, L = E.values, Y = E.limit, z = E.query, U = Y === 1 / 0 ? void 0 : Y, J = z.index, z = z.range, $ = $.objectStore(_), J = J.isPrimaryKey ? $ : $.index(J.name), z = o(z);
              if (Y === 0) return T({ result: [] });
              g ? ((U = L ? J.getAll(z, U) : J.getAllKeys(z, U)).onsuccess = function(ee) {
                return T({ result: ee.target.result });
              }, U.onerror = mt(C)) : (S = 0, I = !L && "openKeyCursor" in J ? J.openKeyCursor(z) : J.openCursor(z), R = [], I.onsuccess = function(ee) {
                var ve = I.result;
                return ve ? (R.push(L ? ve.value : ve.primaryKey), ++S === Y ? T({ result: R }) : void ve.continue()) : T({ result: R });
              }, I.onerror = mt(C));
            });
          }), openCursor: function(E) {
            var T = E.trans, C = E.values, S = E.query, I = E.reverse, R = E.unique;
            return new Promise(function(L, Y) {
              L = je(L);
              var J = S.index, U = S.range, $ = T.objectStore(_), $ = J.isPrimaryKey ? $ : $.index(J.name), J = I ? R ? "prevunique" : "prev" : R ? "nextunique" : "next", z = !C && "openKeyCursor" in $ ? $.openKeyCursor(o(U), J) : $.openCursor(o(U), J);
              z.onerror = mt(Y), z.onsuccess = je(function(ee) {
                var ve, Se, ge, Le, ye = z.result;
                ye ? (ye.___id = ++wa, ye.done = !1, ve = ye.continue.bind(ye), Se = (Se = ye.continuePrimaryKey) && Se.bind(ye), ge = ye.advance.bind(ye), Le = function() {
                  throw new Error("Cursor not stopped");
                }, ye.trans = T, ye.stop = ye.continue = ye.continuePrimaryKey = ye.advance = function() {
                  throw new Error("Cursor not started");
                }, ye.fail = je(Y), ye.next = function() {
                  var ze = this, Je = 1;
                  return this.start(function() {
                    return Je-- ? ze.continue() : ze.stop();
                  }).then(function() {
                    return ze;
                  });
                }, ye.start = function(ze) {
                  function Je() {
                    if (z.result) try {
                      ze();
                    } catch (tt) {
                      ye.fail(tt);
                    }
                    else ye.done = !0, ye.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ye.stop();
                  }
                  var tr = new Promise(function(tt, Wt) {
                    tt = je(tt), z.onerror = mt(Wt), ye.fail = Wt, ye.stop = function(Gr) {
                      ye.stop = ye.continue = ye.continuePrimaryKey = ye.advance = Le, tt(Gr);
                    };
                  });
                  return z.onsuccess = je(function(tt) {
                    z.onsuccess = Je, Je();
                  }), ye.continue = ve, ye.continuePrimaryKey = Se, ye.advance = ge, Je(), tr;
                }, L(ye)) : L(null);
              }, Y);
            });
          }, count: function(E) {
            var T = E.query, C = E.trans, S = T.index, I = T.range;
            return new Promise(function(R, L) {
              var Y = C.objectStore(_), U = S.isPrimaryKey ? Y : Y.index(S.name), Y = o(I), U = Y ? U.count(Y) : U.count();
              U.onsuccess = je(function($) {
                return R($.target.result);
              }), U.onerror = mt(L);
            });
          } };
        }
        var c, f, d, x = (f = m, d = ji((c = e).objectStoreNames), { schema: { name: c.name, tables: d.map(function(O) {
          return f.objectStore(O);
        }).map(function(O) {
          var g = O.keyPath, T = O.autoIncrement, _ = b(g), E = {}, T = { name: O.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: g == null, compound: _, keyPath: g, autoIncrement: T, unique: !0, extractKey: Pr(g) }, indexes: ji(O.indexNames).map(function(C) {
            return O.index(C);
          }).map(function(R) {
            var S = R.name, I = R.unique, L = R.multiEntry, R = R.keyPath, L = { name: S, compound: b(R), keyPath: R, unique: I, multiEntry: L, extractKey: Pr(R) };
            return E[_n(R)] = L;
          }), getIndexByKeyPath: function(C) {
            return E[_n(C)];
          } };
          return E[":id"] = T.primaryKey, g != null && (E[_n(g)] = T.primaryKey), T;
        }) }, hasGetAll: 0 < d.length && "getAll" in f.objectStore(d[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), m = x.schema, v = x.hasGetAll, x = m.tables.map(a), p = {};
        return x.forEach(function(O) {
          return p[O.name] = O;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(O) {
          if (!p[O]) throw new Error("Table '".concat(O, "' not found"));
          return p[O];
        }, MIN_KEY: -1 / 0, MAX_KEY: bn(t), schema: m };
      }
      function Ta(e, t, r, o) {
        var a = r.IDBKeyRange;
        return r.indexedDB, { dbcore: (o = xa(t, a, o), e.dbcore.reduce(function(c, f) {
          return f = f.create, u(u({}, c), f(c));
        }, o)) };
      }
      function Hn(e, o) {
        var r = o.db, o = Ta(e._middlewares, r, e._deps, o);
        e.core = o.dbcore, e.tables.forEach(function(a) {
          var c = a.name;
          e.core.schema.tables.some(function(f) {
            return f.name === c;
          }) && (a.core = e.core.table(c), e[c] instanceof e.Table && (e[c].core = a.core));
        });
      }
      function $n(e, t, r, o) {
        r.forEach(function(a) {
          var c = o[a];
          t.forEach(function(f) {
            var d = function m(v, x) {
              return Te(v, x) || (v = K(v)) && m(v, x);
            }(f, a);
            (!d || "value" in d && d.value === void 0) && (f === e.Transaction.prototype || f instanceof e.Transaction ? G(f, a, { get: function() {
              return this.table(a);
            }, set: function(m) {
              ne(this, a, { value: m, writable: !0, configurable: !0, enumerable: !0 });
            } }) : f[a] = new e.Table(a, c));
          });
        });
      }
      function Sr(e, t) {
        t.forEach(function(r) {
          for (var o in r) r[o] instanceof e.Table && delete r[o];
        });
      }
      function Ea(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function Oa(e, t, r, o) {
        var a = e._dbSchema;
        r.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = Nr("$meta", Li("")[0], []), e._storeNames.push("$meta"));
        var c = e._createTransaction("readwrite", e._storeNames, a);
        c.create(r), c._completion.catch(o);
        var f = c._reject.bind(c), d = re.transless || re;
        kt(function() {
          return re.trans = c, re.transless = d, t !== 0 ? (Hn(e, r), v = t, ((m = c).storeNames.includes("$meta") ? m.table("$meta").get("version").then(function(x) {
            return x ?? v;
          }) : Z.resolve(v)).then(function(x) {
            return O = x, g = c, _ = r, E = [], x = (p = e)._versions, T = p._dbSchema = Gn(0, p.idbdb, _), (x = x.filter(function(C) {
              return C._cfg.version >= O;
            })).length !== 0 ? (x.forEach(function(C) {
              E.push(function() {
                var S = T, I = C._cfg.dbschema;
                Yn(p, S, _), Yn(p, I, _), T = p._dbSchema = I;
                var R = kr(S, I);
                R.add.forEach(function(J) {
                  Ir(_, J[0], J[1].primKey, J[1].indexes);
                }), R.change.forEach(function(J) {
                  if (J.recreate) throw new B.Upgrade("Not yet support for changing primary key");
                  var z = _.objectStore(J.name);
                  J.add.forEach(function(ee) {
                    return Wn(z, ee);
                  }), J.change.forEach(function(ee) {
                    z.deleteIndex(ee.name), Wn(z, ee);
                  }), J.del.forEach(function(ee) {
                    return z.deleteIndex(ee);
                  });
                });
                var L = C._cfg.contentUpgrade;
                if (L && C._cfg.version > O) {
                  Hn(p, _), g._memoizedTables = {};
                  var Y = te(I);
                  R.del.forEach(function(J) {
                    Y[J] = S[J];
                  }), Sr(p, [p.Transaction.prototype]), $n(p, [p.Transaction.prototype], y(Y), Y), g.schema = Y;
                  var U, $ = lt(L);
                  return $ && an(), R = Z.follow(function() {
                    var J;
                    (U = L(g)) && $ && (J = It.bind(null, null), U.then(J, J));
                  }), U && typeof U.then == "function" ? Z.resolve(U) : R.then(function() {
                    return U;
                  });
                }
              }), E.push(function(S) {
                var I, R, L = C._cfg.dbschema;
                I = L, R = S, [].slice.call(R.db.objectStoreNames).forEach(function(Y) {
                  return I[Y] == null && R.db.deleteObjectStore(Y);
                }), Sr(p, [p.Transaction.prototype]), $n(p, [p.Transaction.prototype], p._storeNames, p._dbSchema), g.schema = p._dbSchema;
              }), E.push(function(S) {
                p.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(p.idbdb.version / 10) === C._cfg.version ? (p.idbdb.deleteObjectStore("$meta"), delete p._dbSchema.$meta, p._storeNames = p._storeNames.filter(function(I) {
                  return I !== "$meta";
                })) : S.objectStore("$meta").put(C._cfg.version, "version"));
              });
            }), function C() {
              return E.length ? Z.resolve(E.shift()(g.idbtrans)).then(C) : Z.resolve();
            }().then(function() {
              Mi(T, _);
            })) : Z.resolve();
            var p, O, g, _, E, T;
          }).catch(f)) : (y(a).forEach(function(x) {
            Ir(r, x, a[x].primKey, a[x].indexes);
          }), Hn(e, r), void Z.follow(function() {
            return e.on.populate.fire(c);
          }).catch(f));
          var m, v;
        });
      }
      function Ca(e, t) {
        Mi(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var r = Gn(0, e.idbdb, t);
        Yn(e, e._dbSchema, t);
        for (var o = 0, a = kr(r, e._dbSchema).change; o < a.length; o++) {
          var c = function(f) {
            if (f.change.length || f.recreate) return console.warn("Unable to patch indexes of table ".concat(f.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var d = t.objectStore(f.name);
            f.add.forEach(function(m) {
              le && console.debug("Dexie upgrade patch: Creating missing index ".concat(f.name, ".").concat(m.src)), Wn(d, m);
            });
          }(a[o]);
          if (typeof c == "object") return c.value;
        }
      }
      function kr(e, t) {
        var r, o = { del: [], add: [], change: [] };
        for (r in e) t[r] || o.del.push(r);
        for (r in t) {
          var a = e[r], c = t[r];
          if (a) {
            var f = { name: r, def: c, recreate: !1, del: [], add: [], change: [] };
            if ("" + (a.primKey.keyPath || "") != "" + (c.primKey.keyPath || "") || a.primKey.auto !== c.primKey.auto) f.recreate = !0, o.change.push(f);
            else {
              var d = a.idxByName, m = c.idxByName, v = void 0;
              for (v in d) m[v] || f.del.push(v);
              for (v in m) {
                var x = d[v], p = m[v];
                x ? x.src !== p.src && f.change.push(p) : f.add.push(p);
              }
              (0 < f.del.length || 0 < f.add.length || 0 < f.change.length) && o.change.push(f);
            }
          } else o.add.push([r, c]);
        }
        return o;
      }
      function Ir(e, t, r, o) {
        var a = e.db.createObjectStore(t, r.keyPath ? { keyPath: r.keyPath, autoIncrement: r.auto } : { autoIncrement: r.auto });
        return o.forEach(function(c) {
          return Wn(a, c);
        }), a;
      }
      function Mi(e, t) {
        y(e).forEach(function(r) {
          t.db.objectStoreNames.contains(r) || (le && console.debug("Dexie: Creating missing table", r), Ir(t, r, e[r].primKey, e[r].indexes));
        });
      }
      function Wn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function Gn(e, t, r) {
        var o = {};
        return ue(t.objectStoreNames, 0).forEach(function(a) {
          for (var c = r.objectStore(a), f = Ar(Ki(v = c.keyPath), v || "", !0, !1, !!c.autoIncrement, v && typeof v != "string", !0), d = [], m = 0; m < c.indexNames.length; ++m) {
            var x = c.index(c.indexNames[m]), v = x.keyPath, x = Ar(x.name, v, !!x.unique, !!x.multiEntry, !1, v && typeof v != "string", !1);
            d.push(x);
          }
          o[a] = Nr(a, f, d);
        }), o;
      }
      function Yn(e, t, r) {
        for (var o = r.db.objectStoreNames, a = 0; a < o.length; ++a) {
          var c = o[a], f = r.objectStore(c);
          e._hasGetAll = "getAll" in f;
          for (var d = 0; d < f.indexNames.length; ++d) {
            var m = f.indexNames[d], v = f.index(m).keyPath, x = typeof v == "string" ? v : "[" + ue(v).join("+") + "]";
            !t[c] || (v = t[c].idxByName[x]) && (v.name = m, delete t[c].idxByName[x], t[c].idxByName[m] = v);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && h.WorkerGlobalScope && h instanceof h.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Li(e) {
        return e.split(",").map(function(t, r) {
          var c = t.split(":"), o = (a = c[1]) === null || a === void 0 ? void 0 : a.trim(), a = (t = c[0].trim()).replace(/([&*]|\+\+)/g, ""), c = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return Ar(a, c || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), b(c), r === 0, o);
        });
      }
      var Aa = (ln.prototype._createTableSchema = Nr, ln.prototype._parseIndexSyntax = Li, ln.prototype._parseStoresSpec = function(e, t) {
        var r = this;
        y(e).forEach(function(o) {
          if (e[o] !== null) {
            var a = r._parseIndexSyntax(e[o]), c = a.shift();
            if (!c) throw new B.Schema("Invalid schema for table " + o + ": " + e[o]);
            if (c.unique = !0, c.multi) throw new B.Schema("Primary key cannot be multiEntry*");
            a.forEach(function(f) {
              if (f.auto) throw new B.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!f.keyPath) throw new B.Schema("Index must have a name and cannot be an empty string");
            }), a = r._createTableSchema(o, c, a), t[o] = a;
          }
        });
      }, ln.prototype.stores = function(r) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? A(this._cfg.storesSource, r) : r;
        var r = t._versions, o = {}, a = {};
        return r.forEach(function(c) {
          A(o, c._cfg.storesSource), a = c._cfg.dbschema = {}, c._parseStoresSpec(o, a);
        }), t._dbSchema = a, Sr(t, [t._allTables, t, t.Transaction.prototype]), $n(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], y(a), a), t._storeNames = y(a), this;
      }, ln.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = me(this._cfg.contentUpgrade || _e, e), this;
      }, ln);
      function ln() {
      }
      function Dr(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new Tt(jn, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function Rr(e) {
        return e && typeof e.databases == "function";
      }
      function Fr(e) {
        return kt(function() {
          return re.letThrough = !0, e();
        });
      }
      function Br(e) {
        return !("from" in e);
      }
      var Qe = function(e, t) {
        if (!this) {
          var r = new Qe();
          return e && "d" in e && A(r, e), r;
        }
        A(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function wn(e, t, r) {
        var o = Ne(t, r);
        if (!isNaN(o)) {
          if (0 < o) throw RangeError();
          if (Br(e)) return A(e, { from: t, to: r, d: 1 });
          var a = e.l, o = e.r;
          if (Ne(r, e.from) < 0) return a ? wn(a, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, Ui(e);
          if (0 < Ne(t, e.to)) return o ? wn(o, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, Ui(e);
          Ne(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < Ne(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, a && !e.l && xn(e, a), o && r && xn(e, o);
        }
      }
      function xn(e, t) {
        Br(t) || function r(o, m) {
          var c = m.from, f = m.to, d = m.l, m = m.r;
          wn(o, c, f), d && r(o, d), m && r(o, m);
        }(e, t);
      }
      function qi(e, t) {
        var r = Xn(t), o = r.next();
        if (o.done) return !1;
        for (var a = o.value, c = Xn(e), f = c.next(a.from), d = f.value; !o.done && !f.done; ) {
          if (Ne(d.from, a.to) <= 0 && 0 <= Ne(d.to, a.from)) return !0;
          Ne(a.from, d.from) < 0 ? a = (o = r.next(d.from)).value : d = (f = c.next(a.from)).value;
        }
        return !1;
      }
      function Xn(e) {
        var t = Br(e) ? null : { s: 0, n: e };
        return { next: function(r) {
          for (var o = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, o) for (; t.n.l && Ne(r, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !o || Ne(r, t.n.to) <= 0) return { value: t.n, done: !1 };
            case 2:
              if (t.n.r) {
                t.s = 3, t = { up: t, n: t.n.r, s: 0 };
                continue;
              }
            case 3:
              t = t.up;
          }
          return { done: !0 };
        } };
      }
      function Ui(e) {
        var t, r, o = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((r = e.l) === null || r === void 0 ? void 0 : r.d) || 0), a = 1 < o ? "r" : o < -1 ? "l" : "";
        a && (t = a == "r" ? "l" : "r", r = u({}, e), o = e[a], e.from = o.from, e.to = o.to, e[a] = o[a], r[a] = o[t], (e[t] = r).d = Vi(r)), e.d = Vi(e);
      }
      function Vi(r) {
        var t = r.r, r = r.l;
        return (t ? r ? Math.max(t.d, r.d) : t.d : r ? r.d : 0) + 1;
      }
      function Qn(e, t) {
        return y(t).forEach(function(r) {
          e[r] ? xn(e[r], t[r]) : e[r] = function o(a) {
            var c, f, d = {};
            for (c in a) D(a, c) && (f = a[c], d[c] = !f || typeof f != "object" || pe.has(f.constructor) ? f : o(f));
            return d;
          }(t[r]);
        }), e;
      }
      function Kr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && qi(t[r], e[r]);
        });
      }
      H(Qe.prototype, ((ct = { add: function(e) {
        return xn(this, e), this;
      }, addKey: function(e) {
        return wn(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(r) {
          return wn(t, r, r);
        }), this;
      }, hasKey: function(e) {
        var t = Xn(this).next(e).value;
        return t && Ne(t.from, e) <= 0 && 0 <= Ne(t.to, e);
      } })[Ae] = function() {
        return Xn(this);
      }, ct));
      var Ht = {}, jr = {}, Mr = !1;
      function zn(e) {
        Qn(jr, e), Mr || (Mr = !0, setTimeout(function() {
          Mr = !1, Lr(jr, !(jr = {}));
        }, 0));
      }
      function Lr(e, t) {
        t === void 0 && (t = !1);
        var r = /* @__PURE__ */ new Set();
        if (e.all) for (var o = 0, a = Object.values(Ht); o < a.length; o++) Hi(f = a[o], e, r, t);
        else for (var c in e) {
          var f, d = /^idb\:\/\/(.*)\/(.*)\//.exec(c);
          d && (c = d[1], d = d[2], (f = Ht["idb://".concat(c, "/").concat(d)]) && Hi(f, e, r, t));
        }
        r.forEach(function(m) {
          return m();
        });
      }
      function Hi(e, t, r, o) {
        for (var a = [], c = 0, f = Object.entries(e.queries.query); c < f.length; c++) {
          for (var d = f[c], m = d[0], v = [], x = 0, p = d[1]; x < p.length; x++) {
            var O = p[x];
            Kr(t, O.obsSet) ? O.subscribers.forEach(function(T) {
              return r.add(T);
            }) : o && v.push(O);
          }
          o && a.push([m, v]);
        }
        if (o) for (var g = 0, _ = a; g < _.length; g++) {
          var E = _[g], m = E[0], v = E[1];
          e.queries.query[m] = v;
        }
      }
      function Na(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? Ve(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, a = Math.round(10 * e.verno), c = !1;
        function f() {
          if (t.openCanceller !== o) throw new B.DatabaseClosed("db.open() was cancelled");
        }
        function d() {
          return new Z(function(O, g) {
            if (f(), !r) throw new B.MissingAPI();
            var _ = e.name, E = t.autoSchema || !a ? r.open(_) : r.open(_, a);
            if (!E) throw new B.MissingAPI();
            E.onerror = mt(g), E.onblocked = je(e._fireOnBlocked), E.onupgradeneeded = je(function(T) {
              var C;
              x = E.transaction, t.autoSchema && !e._options.allowEmptyDB ? (E.onerror = gn, x.abort(), E.result.close(), (C = r.deleteDatabase(_)).onsuccess = C.onerror = je(function() {
                g(new B.NoSuchDatabase("Database ".concat(_, " doesnt exist")));
              })) : (x.onerror = mt(g), T = T.oldVersion > Math.pow(2, 62) ? 0 : T.oldVersion, p = T < 1, e.idbdb = E.result, c && Ca(e, x), Oa(e, T / 10, x, g));
            }, g), E.onsuccess = je(function() {
              x = null;
              var T, C, S, I, R, L = e.idbdb = E.result, Y = ue(L.objectStoreNames);
              if (0 < Y.length) try {
                var U = L.transaction((I = Y).length === 1 ? I[0] : I, "readonly");
                if (t.autoSchema) C = L, S = U, (T = e).verno = C.version / 10, S = T._dbSchema = Gn(0, C, S), T._storeNames = ue(C.objectStoreNames, 0), $n(T, [T._allTables], y(S), S);
                else if (Yn(e, e._dbSchema, U), ((R = kr(Gn(0, (R = e).idbdb, U), R._dbSchema)).add.length || R.change.some(function($) {
                  return $.add.length || $.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), L.close(), a = L.version + 1, c = !0, O(d());
                Hn(e, U);
              } catch {
              }
              sn.push(e), L.onversionchange = je(function($) {
                t.vcFired = !0, e.on("versionchange").fire($);
              }), L.onclose = je(function($) {
                e.on("close").fire($);
              }), p && (R = e._deps, U = _, L = R.indexedDB, R = R.IDBKeyRange, Rr(L) || U === jn || Dr(L, R).put({ name: U }).catch(_e)), O();
            }, g);
          }).catch(function(O) {
            switch (O?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), d();
                break;
              case "VersionError":
                if (0 < a) return a = 0, d();
            }
            return Z.reject(O);
          });
        }
        var m, v = t.dbReadyResolve, x = null, p = !1;
        return Z.race([o, (typeof navigator > "u" ? Z.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(O) {
          function g() {
            return indexedDB.databases().finally(O);
          }
          m = setInterval(g, 100), g();
        }).finally(function() {
          return clearInterval(m);
        }) : Promise.resolve()).then(d)]).then(function() {
          return f(), t.onReadyBeingFired = [], Z.resolve(Fr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function O() {
            if (0 < t.onReadyBeingFired.length) {
              var g = t.onReadyBeingFired.reduce(me, _e);
              return t.onReadyBeingFired = [], Z.resolve(Fr(function() {
                return g(e.vip);
              })).then(O);
            }
          });
        }).finally(function() {
          t.openCanceller === o && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(O) {
          t.dbOpenError = O;
          try {
            x && x.abort();
          } catch {
          }
          return o === t.openCanceller && e._close(), Ve(O);
        }).finally(function() {
          t.openComplete = !0, v();
        }).then(function() {
          var O;
          return p && (O = {}, e.tables.forEach(function(g) {
            g.schema.indexes.forEach(function(_) {
              _.name && (O["idb://".concat(e.name, "/").concat(g.name, "/").concat(_.name)] = new Qe(-1 / 0, [[[]]]));
            }), O["idb://".concat(e.name, "/").concat(g.name, "/")] = O["idb://".concat(e.name, "/").concat(g.name, "/:dels")] = new Qe(-1 / 0, [[[]]]);
          }), Ft(vn).fire(O), Lr(O, !0)), e;
        });
      }
      function qr(e) {
        function t(c) {
          return e.next(c);
        }
        var r = a(t), o = a(function(c) {
          return e.throw(c);
        });
        function a(c) {
          return function(m) {
            var d = c(m), m = d.value;
            return d.done ? m : m && typeof m.then == "function" ? m.then(r, o) : b(m) ? Promise.all(m).then(r, o) : r(m);
          };
        }
        return a(t)();
      }
      function Jn(e, t, r) {
        for (var o = b(e) ? e.slice() : [e], a = 0; a < r; ++a) o.push(t);
        return o;
      }
      var Pa = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema, a = {}, c = [];
          function f(p, O, g) {
            var _ = _n(p), E = a[_] = a[_] || [], T = p == null ? 0 : typeof p == "string" ? 1 : p.length, C = 0 < O, C = u(u({}, g), { name: C ? "".concat(_, "(virtual-from:").concat(g.name, ")") : g.name, lowLevelIndex: g, isVirtual: C, keyTail: O, keyLength: T, extractKey: Pr(p), unique: !C && g.unique });
            return E.push(C), C.isPrimaryKey || c.push(C), 1 < T && f(T === 2 ? p[0] : p.slice(0, T - 1), O + 1, g), E.sort(function(S, I) {
              return S.keyTail - I.keyTail;
            }), C;
          }
          t = f(o.primaryKey.keyPath, 0, o.primaryKey), a[":id"] = [t];
          for (var d = 0, m = o.indexes; d < m.length; d++) {
            var v = m[d];
            f(v.keyPath, 0, v);
          }
          function x(p) {
            var O, g = p.query.index;
            return g.isVirtual ? u(u({}, p), { query: { index: g.lowLevelIndex, range: (O = p.query.range, g = g.keyTail, { type: O.type === 1 ? 2 : O.type, lower: Jn(O.lower, O.lowerOpen ? e.MAX_KEY : e.MIN_KEY, g), lowerOpen: !0, upper: Jn(O.upper, O.upperOpen ? e.MIN_KEY : e.MAX_KEY, g), upperOpen: !0 }) } }) : p;
          }
          return u(u({}, r), { schema: u(u({}, o), { primaryKey: t, indexes: c, getIndexByKeyPath: function(p) {
            return (p = a[_n(p)]) && p[0];
          } }), count: function(p) {
            return r.count(x(p));
          }, query: function(p) {
            return r.query(x(p));
          }, openCursor: function(p) {
            var O = p.query.index, g = O.keyTail, _ = O.isVirtual, E = O.keyLength;
            return _ ? r.openCursor(x(p)).then(function(C) {
              return C && T(C);
            }) : r.openCursor(p);
            function T(C) {
              return Object.create(C, { continue: { value: function(S) {
                S != null ? C.continue(Jn(S, p.reverse ? e.MAX_KEY : e.MIN_KEY, g)) : p.unique ? C.continue(C.key.slice(0, E).concat(p.reverse ? e.MIN_KEY : e.MAX_KEY, g)) : C.continue();
              } }, continuePrimaryKey: { value: function(S, I) {
                C.continuePrimaryKey(Jn(S, e.MAX_KEY, g), I);
              } }, primaryKey: { get: function() {
                return C.primaryKey;
              } }, key: { get: function() {
                var S = C.key;
                return E === 1 ? S[0] : S.slice(0, E);
              } }, value: { get: function() {
                return C.value;
              } } });
            }
          } });
        } });
      } };
      function Ur(e, t, r, o) {
        return r = r || {}, o = o || "", y(e).forEach(function(a) {
          var c, f, d;
          D(t, a) ? (c = e[a], f = t[a], typeof c == "object" && typeof f == "object" && c && f ? (d = Be(c)) !== Be(f) ? r[o + a] = t[a] : d === "Object" ? Ur(c, f, r, o + a + ".") : c !== f && (r[o + a] = t[a]) : c !== f && (r[o + a] = t[a])) : r[o + a] = void 0;
        }), y(t).forEach(function(a) {
          D(e, a) || (r[o + a] = t[a]);
        }), r;
      }
      function Vr(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var Sa = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema.primaryKey;
          return u(u({}, r), { mutate: function(a) {
            var c = re.trans, f = c.table(t).hook, d = f.deleting, m = f.creating, v = f.updating;
            switch (a.type) {
              case "add":
                if (m.fire === _e) break;
                return c._promise("readwrite", function() {
                  return x(a);
                }, !0);
              case "put":
                if (m.fire === _e && v.fire === _e) break;
                return c._promise("readwrite", function() {
                  return x(a);
                }, !0);
              case "delete":
                if (d.fire === _e) break;
                return c._promise("readwrite", function() {
                  return x(a);
                }, !0);
              case "deleteRange":
                if (d.fire === _e) break;
                return c._promise("readwrite", function() {
                  return function p(O, g, _) {
                    return r.query({ trans: O, values: !1, query: { index: o, range: g }, limit: _ }).then(function(E) {
                      var T = E.result;
                      return x({ type: "delete", keys: T, trans: O }).then(function(C) {
                        return 0 < C.numFailures ? Promise.reject(C.failures[0]) : T.length < _ ? { failures: [], numFailures: 0, lastResult: void 0 } : p(O, u(u({}, g), { lower: T[T.length - 1], lowerOpen: !0 }), _);
                      });
                    });
                  }(a.trans, a.range, 1e4);
                }, !0);
            }
            return r.mutate(a);
            function x(p) {
              var O, g, _, E = re.trans, T = p.keys || Vr(o, p);
              if (!T) throw new Error("Keys missing");
              return (p = p.type === "add" || p.type === "put" ? u(u({}, p), { keys: T }) : u({}, p)).type !== "delete" && (p.values = l([], p.values)), p.keys && (p.keys = l([], p.keys)), O = r, _ = T, ((g = p).type === "add" ? Promise.resolve([]) : O.getMany({ trans: g.trans, keys: _, cache: "immutable" })).then(function(C) {
                var S = T.map(function(I, R) {
                  var L, Y, U, $ = C[R], J = { onerror: null, onsuccess: null };
                  return p.type === "delete" ? d.fire.call(J, I, $, E) : p.type === "add" || $ === void 0 ? (L = m.fire.call(J, I, p.values[R], E), I == null && L != null && (p.keys[R] = I = L, o.outbound || W(p.values[R], o.keyPath, I))) : (L = Ur($, p.values[R]), (Y = v.fire.call(J, L, I, $, E)) && (U = p.values[R], Object.keys(Y).forEach(function(z) {
                    D(U, z) ? U[z] = Y[z] : W(U, z, Y[z]);
                  }))), J;
                });
                return r.mutate(p).then(function(I) {
                  for (var R = I.failures, L = I.results, Y = I.numFailures, I = I.lastResult, U = 0; U < T.length; ++U) {
                    var $ = (L || T)[U], J = S[U];
                    $ == null ? J.onerror && J.onerror(R[U]) : J.onsuccess && J.onsuccess(p.type === "put" && C[U] ? p.values[U] : $);
                  }
                  return { failures: R, results: L, numFailures: Y, lastResult: I };
                }).catch(function(I) {
                  return S.forEach(function(R) {
                    return R.onerror && R.onerror(I);
                  }), Promise.reject(I);
                });
              });
            }
          } });
        } });
      } };
      function $i(e, t, r) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var o = [], a = 0, c = 0; a < t.keys.length && c < e.length; ++a) Ne(t.keys[a], e[c]) === 0 && (o.push(r ? Ee(t.values[a]) : t.values[a]), ++c);
          return o.length === e.length ? o : null;
        } catch {
          return null;
        }
      }
      var ka = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var r = e.table(t);
          return u(u({}, r), { getMany: function(o) {
            if (!o.cache) return r.getMany(o);
            var a = $i(o.keys, o.trans._cache, o.cache === "clone");
            return a ? Z.resolve(a) : r.getMany(o).then(function(c) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? Ee(c) : c }, c;
            });
          }, mutate: function(o) {
            return o.type !== "add" && (o.trans._cache = null), r.mutate(o);
          } });
        } };
      } };
      function Wi(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Gi(e, t) {
        switch (e) {
          case "query":
            return t.values && !t.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return !1;
        }
      }
      var Ia = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, r = new Qe(e.MIN_KEY, e.MAX_KEY);
        return u(u({}, e), { transaction: function(o, a, c) {
          if (re.subscr && a !== "readonly") throw new B.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(re.querier));
          return e.transaction(o, a, c);
        }, table: function(o) {
          var a = e.table(o), c = a.schema, f = c.primaryKey, p = c.indexes, d = f.extractKey, m = f.outbound, v = f.autoIncrement && p.filter(function(g) {
            return g.compound && g.keyPath.includes(f.keyPath);
          }), x = u(u({}, a), { mutate: function(g) {
            function _(z) {
              return z = "idb://".concat(t, "/").concat(o, "/").concat(z), I[z] || (I[z] = new Qe());
            }
            var E, T, C, S = g.trans, I = g.mutatedParts || (g.mutatedParts = {}), R = _(""), L = _(":dels"), Y = g.type, J = g.type === "deleteRange" ? [g.range] : g.type === "delete" ? [g.keys] : g.values.length < 50 ? [Vr(f, g).filter(function(z) {
              return z;
            }), g.values] : [], U = J[0], $ = J[1], J = g.trans._cache;
            return b(U) ? (R.addKeys(U), (J = Y === "delete" || U.length === $.length ? $i(U, J) : null) || L.addKeys(U), (J || $) && (E = _, T = J, C = $, c.indexes.forEach(function(z) {
              var ee = E(z.name || "");
              function ve(ge) {
                return ge != null ? z.extractKey(ge) : null;
              }
              function Se(ge) {
                return z.multiEntry && b(ge) ? ge.forEach(function(Le) {
                  return ee.addKey(Le);
                }) : ee.addKey(ge);
              }
              (T || C).forEach(function(ge, ze) {
                var ye = T && ve(T[ze]), ze = C && ve(C[ze]);
                Ne(ye, ze) !== 0 && (ye != null && Se(ye), ze != null && Se(ze));
              });
            }))) : U ? ($ = { from: ($ = U.lower) !== null && $ !== void 0 ? $ : e.MIN_KEY, to: ($ = U.upper) !== null && $ !== void 0 ? $ : e.MAX_KEY }, L.add($), R.add($)) : (R.add(r), L.add(r), c.indexes.forEach(function(z) {
              return _(z.name).add(r);
            })), a.mutate(g).then(function(z) {
              return !U || g.type !== "add" && g.type !== "put" || (R.addKeys(z.results), v && v.forEach(function(ee) {
                for (var ve = g.values.map(function(ye) {
                  return ee.extractKey(ye);
                }), Se = ee.keyPath.findIndex(function(ye) {
                  return ye === f.keyPath;
                }), ge = 0, Le = z.results.length; ge < Le; ++ge) ve[ge][Se] = z.results[ge];
                _(ee.name).addKeys(ve);
              })), S.mutatedParts = Qn(S.mutatedParts || {}, I), z;
            });
          } }), p = function(_) {
            var E = _.query, _ = E.index, E = E.range;
            return [_, new Qe((_ = E.lower) !== null && _ !== void 0 ? _ : e.MIN_KEY, (E = E.upper) !== null && E !== void 0 ? E : e.MAX_KEY)];
          }, O = { get: function(g) {
            return [f, new Qe(g.key)];
          }, getMany: function(g) {
            return [f, new Qe().addKeys(g.keys)];
          }, count: p, query: p, openCursor: p };
          return y(O).forEach(function(g) {
            x[g] = function(_) {
              var E = re.subscr, T = !!E, C = Wi(re, a) && Gi(g, _) ? _.obsSet = {} : E;
              if (T) {
                var S = function($) {
                  return $ = "idb://".concat(t, "/").concat(o, "/").concat($), C[$] || (C[$] = new Qe());
                }, I = S(""), R = S(":dels"), E = O[g](_), T = E[0], E = E[1];
                if ((g === "query" && T.isPrimaryKey && !_.values ? R : S(T.name || "")).add(E), !T.isPrimaryKey) {
                  if (g !== "count") {
                    var L = g === "query" && m && _.values && a.query(u(u({}, _), { values: !1 }));
                    return a[g].apply(this, arguments).then(function($) {
                      if (g === "query") {
                        if (m && _.values) return L.then(function(ve) {
                          return ve = ve.result, I.addKeys(ve), $;
                        });
                        var J = _.values ? $.result.map(d) : $.result;
                        (_.values ? I : R).addKeys(J);
                      } else if (g === "openCursor") {
                        var z = $, ee = _.values;
                        return z && Object.create(z, { key: { get: function() {
                          return R.addKey(z.primaryKey), z.key;
                        } }, primaryKey: { get: function() {
                          var ve = z.primaryKey;
                          return R.addKey(ve), ve;
                        } }, value: { get: function() {
                          return ee && I.addKey(z.primaryKey), z.value;
                        } } });
                      }
                      return $;
                    });
                  }
                  R.add(r);
                }
              }
              return a[g].apply(this, arguments);
            };
          }), x;
        } });
      } };
      function Yi(e, t, r) {
        if (r.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var o = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return r.numFailures === o ? null : (t = u({}, t), b(t.keys) && (t.keys = t.keys.filter(function(a, c) {
          return !(c in r.failures);
        })), "values" in t && b(t.values) && (t.values = t.values.filter(function(a, c) {
          return !(c in r.failures);
        })), t);
      }
      function Hr(e, t) {
        return r = e, ((o = t).lower === void 0 || (o.lowerOpen ? 0 < Ne(r, o.lower) : 0 <= Ne(r, o.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? Ne(e, t.upper) < 0 : Ne(e, t.upper) <= 0));
        var r, o;
      }
      function Xi(e, t, O, o, a, c) {
        if (!O || O.length === 0) return e;
        var f = t.query.index, d = f.multiEntry, m = t.query.range, v = o.schema.primaryKey.extractKey, x = f.extractKey, p = (f.lowLevelIndex || f).extractKey, O = O.reduce(function(g, _) {
          var E = g, T = [];
          if (_.type === "add" || _.type === "put") for (var C = new Qe(), S = _.values.length - 1; 0 <= S; --S) {
            var I, R = _.values[S], L = v(R);
            C.hasKey(L) || (I = x(R), (d && b(I) ? I.some(function(z) {
              return Hr(z, m);
            }) : Hr(I, m)) && (C.addKey(L), T.push(R)));
          }
          switch (_.type) {
            case "add":
              var Y = new Qe().addKeys(t.values ? g.map(function(ee) {
                return v(ee);
              }) : g), E = g.concat(t.values ? T.filter(function(ee) {
                return ee = v(ee), !Y.hasKey(ee) && (Y.addKey(ee), !0);
              }) : T.map(function(ee) {
                return v(ee);
              }).filter(function(ee) {
                return !Y.hasKey(ee) && (Y.addKey(ee), !0);
              }));
              break;
            case "put":
              var U = new Qe().addKeys(_.values.map(function(ee) {
                return v(ee);
              }));
              E = g.filter(function(ee) {
                return !U.hasKey(t.values ? v(ee) : ee);
              }).concat(t.values ? T : T.map(function(ee) {
                return v(ee);
              }));
              break;
            case "delete":
              var $ = new Qe().addKeys(_.keys);
              E = g.filter(function(ee) {
                return !$.hasKey(t.values ? v(ee) : ee);
              });
              break;
            case "deleteRange":
              var J = _.range;
              E = g.filter(function(ee) {
                return !Hr(v(ee), J);
              });
          }
          return E;
        }, e);
        return O === e ? e : (O.sort(function(g, _) {
          return Ne(p(g), p(_)) || Ne(v(g), v(_));
        }), t.limit && t.limit < 1 / 0 && (O.length > t.limit ? O.length = t.limit : e.length === t.limit && O.length < t.limit && (a.dirty = !0)), c ? Object.freeze(O) : O);
      }
      function Qi(e, t) {
        return Ne(e.lower, t.lower) === 0 && Ne(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function Da(e, t) {
        return function(r, o, a, c) {
          if (r === void 0) return o !== void 0 ? -1 : 0;
          if (o === void 0) return 1;
          if ((o = Ne(r, o)) === 0) {
            if (a && c) return 0;
            if (a) return 1;
            if (c) return -1;
          }
          return o;
        }(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function(r, o, a, c) {
          if (r === void 0) return o !== void 0 ? 1 : 0;
          if (o === void 0) return -1;
          if ((o = Ne(r, o)) === 0) {
            if (a && c) return 0;
            if (a) return -1;
            if (c) return 1;
          }
          return o;
        }(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function Ra(e, t, r, o) {
        e.subscribers.add(r), o.addEventListener("abort", function() {
          var a, c;
          e.subscribers.delete(r), e.subscribers.size === 0 && (a = e, c = t, setTimeout(function() {
            a.subscribers.size === 0 && Ce(c, a);
          }, 3e3));
        });
      }
      var Fa = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return u(u({}, e), { transaction: function(r, o, a) {
          var c, f, d = e.transaction(r, o, a);
          return o === "readwrite" && (f = (c = new AbortController()).signal, a = function(m) {
            return function() {
              if (c.abort(), o === "readwrite") {
                for (var v = /* @__PURE__ */ new Set(), x = 0, p = r; x < p.length; x++) {
                  var O = p[x], g = Ht["idb://".concat(t, "/").concat(O)];
                  if (g) {
                    var _ = e.table(O), E = g.optimisticOps.filter(function(ee) {
                      return ee.trans === d;
                    });
                    if (d._explicit && m && d.mutatedParts) for (var T = 0, C = Object.values(g.queries.query); T < C.length; T++) for (var S = 0, I = (Y = C[T]).slice(); S < I.length; S++) Kr((U = I[S]).obsSet, d.mutatedParts) && (Ce(Y, U), U.subscribers.forEach(function(ee) {
                      return v.add(ee);
                    }));
                    else if (0 < E.length) {
                      g.optimisticOps = g.optimisticOps.filter(function(ee) {
                        return ee.trans !== d;
                      });
                      for (var R = 0, L = Object.values(g.queries.query); R < L.length; R++) for (var Y, U, $, J = 0, z = (Y = L[R]).slice(); J < z.length; J++) (U = z[J]).res != null && d.mutatedParts && (m && !U.dirty ? ($ = Object.isFrozen(U.res), $ = Xi(U.res, U.req, E, _, U, $), U.dirty ? (Ce(Y, U), U.subscribers.forEach(function(ee) {
                        return v.add(ee);
                      })) : $ !== U.res && (U.res = $, U.promise = Z.resolve({ result: $ }))) : (U.dirty && Ce(Y, U), U.subscribers.forEach(function(ee) {
                        return v.add(ee);
                      })));
                    }
                  }
                }
                v.forEach(function(ee) {
                  return ee();
                });
              }
            };
          }, d.addEventListener("abort", a(!1), { signal: f }), d.addEventListener("error", a(!1), { signal: f }), d.addEventListener("complete", a(!0), { signal: f })), d;
        }, table: function(r) {
          var o = e.table(r), a = o.schema.primaryKey;
          return u(u({}, o), { mutate: function(c) {
            var f = re.trans;
            if (a.outbound || f.db._options.cache === "disabled" || f.explicit || f.idbtrans.mode !== "readwrite") return o.mutate(c);
            var d = Ht["idb://".concat(t, "/").concat(r)];
            return d ? (f = o.mutate(c), c.type !== "add" && c.type !== "put" || !(50 <= c.values.length || Vr(a, c).some(function(m) {
              return m == null;
            })) ? (d.optimisticOps.push(c), c.mutatedParts && zn(c.mutatedParts), f.then(function(m) {
              0 < m.numFailures && (Ce(d.optimisticOps, c), (m = Yi(0, c, m)) && d.optimisticOps.push(m), c.mutatedParts && zn(c.mutatedParts));
            }), f.catch(function() {
              Ce(d.optimisticOps, c), c.mutatedParts && zn(c.mutatedParts);
            })) : f.then(function(m) {
              var v = Yi(0, u(u({}, c), { values: c.values.map(function(x, p) {
                var O;
                return m.failures[p] || (x = (O = a.keyPath) !== null && O !== void 0 && O.includes(".") ? Ee(x) : u({}, x), W(x, a.keyPath, m.results[p])), x;
              }) }), m);
              d.optimisticOps.push(v), queueMicrotask(function() {
                return c.mutatedParts && zn(c.mutatedParts);
              });
            }), f) : o.mutate(c);
          }, query: function(c) {
            if (!Wi(re, o) || !Gi("query", c)) return o.query(c);
            var f = ((v = re.trans) === null || v === void 0 ? void 0 : v.db._options.cache) === "immutable", p = re, d = p.requery, m = p.signal, v = function(_, E, T, C) {
              var S = Ht["idb://".concat(_, "/").concat(E)];
              if (!S) return [];
              if (!(E = S.queries[T])) return [null, !1, S, null];
              var I = E[(C.query ? C.query.index.name : null) || ""];
              if (!I) return [null, !1, S, null];
              switch (T) {
                case "query":
                  var R = I.find(function(L) {
                    return L.req.limit === C.limit && L.req.values === C.values && Qi(L.req.query.range, C.query.range);
                  });
                  return R ? [R, !0, S, I] : [I.find(function(L) {
                    return ("limit" in L.req ? L.req.limit : 1 / 0) >= C.limit && (!C.values || L.req.values) && Da(L.req.query.range, C.query.range);
                  }), !1, S, I];
                case "count":
                  return R = I.find(function(L) {
                    return Qi(L.req.query.range, C.query.range);
                  }), [R, !!R, S, I];
              }
            }(t, r, "query", c), x = v[0], p = v[1], O = v[2], g = v[3];
            return x && p ? x.obsSet = c.obsSet : (p = o.query(c).then(function(_) {
              var E = _.result;
              if (x && (x.res = E), f) {
                for (var T = 0, C = E.length; T < C; ++T) Object.freeze(E[T]);
                Object.freeze(E);
              } else _.result = Ee(E);
              return _;
            }).catch(function(_) {
              return g && x && Ce(g, x), Promise.reject(_);
            }), x = { obsSet: c.obsSet, promise: p, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, g ? g.push(x) : (g = [x], (O = O || (Ht["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = g)), Ra(x, g, d, m), x.promise.then(function(_) {
              return { result: Xi(_.result, c, O?.optimisticOps, o, x, f) };
            });
          } });
        } });
      } };
      function Zn(e, t) {
        return new Proxy(e, { get: function(r, o, a) {
          return o === "db" ? t : Reflect.get(r, o, a);
        } });
      }
      var Tt = (He.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new B.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new B.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(Ea), r.stores({}), this._state.autoSchema = !1, r);
      }, He.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || re.letThrough || this._vip) ? e() : new Z(function(r, o) {
          if (t._state.openComplete) return o(new B.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new B.DatabaseClosed());
            t.open().catch(_e);
          }
          t._state.dbReadyPromise.then(r, o);
        }).then(e);
      }, He.prototype.use = function(e) {
        var t = e.stack, r = e.create, o = e.level, a = e.name;
        return a && this.unuse({ stack: t, name: a }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: r, level: o ?? 10, name: a }), e.sort(function(c, f) {
          return c.level - f.level;
        }), this;
      }, He.prototype.unuse = function(e) {
        var t = e.stack, r = e.name, o = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(a) {
          return o ? a.create !== o : !!r && a.name !== r;
        })), this;
      }, He.prototype.open = function() {
        var e = this;
        return qt(bt, function() {
          return Na(e);
        });
      }, He.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, t = sn.indexOf(this);
        if (0 <= t && sn.splice(t, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new Z(function(r) {
          e.dbReadyResolve = r;
        }), e.openCanceller = new Z(function(r, o) {
          e.cancelOpen = o;
        }));
      }, He.prototype.close = function(r) {
        var t = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        t ? (r.isBeingOpened && r.cancelOpen(new B.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new B.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, He.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", o = this._state;
        return new Z(function(a, c) {
          function f() {
            t.close(e);
            var d = t._deps.indexedDB.deleteDatabase(t.name);
            d.onsuccess = je(function() {
              var m, v, x;
              m = t._deps, v = t.name, x = m.indexedDB, m = m.IDBKeyRange, Rr(x) || v === jn || Dr(x, m).delete(v).catch(_e), a();
            }), d.onerror = mt(c), d.onblocked = t._fireOnBlocked;
          }
          if (r) throw new B.InvalidArgument("Invalid closeOptions argument to db.delete()");
          o.isBeingOpened ? o.dbReadyPromise.then(f) : f();
        });
      }, He.prototype.backendDB = function() {
        return this.idbdb;
      }, He.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, He.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, He.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, He.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(He.prototype, "tables", { get: function() {
        var e = this;
        return y(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), He.prototype.transaction = function() {
        var e = (function(t, r, o) {
          var a = arguments.length;
          if (a < 2) throw new B.InvalidArgument("Too few arguments");
          for (var c = new Array(a - 1); --a; ) c[a - 1] = arguments[a];
          return o = c.pop(), [t, ie(c), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, He.prototype._transaction = function(e, t, r) {
        var o = this, a = re.trans;
        a && a.db === this && e.indexOf("!") === -1 || (a = null);
        var c, f, d = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (f = t.map(function(v) {
            if (v = v instanceof o.Table ? v.name : v, typeof v != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return v;
          }), e == "r" || e === xr) c = xr;
          else {
            if (e != "rw" && e != Tr) throw new B.InvalidArgument("Invalid transaction mode: " + e);
            c = Tr;
          }
          if (a) {
            if (a.mode === xr && c === Tr) {
              if (!d) throw new B.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              a = null;
            }
            a && f.forEach(function(v) {
              if (a && a.storeNames.indexOf(v) === -1) {
                if (!d) throw new B.SubTransaction("Table " + v + " not included in parent transaction.");
                a = null;
              }
            }), d && a && !a.active && (a = null);
          }
        } catch (v) {
          return a ? a._promise(null, function(x, p) {
            p(v);
          }) : Ve(v);
        }
        var m = (function v(x, p, O, g, _) {
          return Z.resolve().then(function() {
            var E = re.transless || re, T = x._createTransaction(p, O, x._dbSchema, g);
            if (T.explicit = !0, E = { trans: T, transless: E }, g) T.idbtrans = g.idbtrans;
            else try {
              T.create(), T.idbtrans._explicit = !0, x._state.PR1398_maxLoop = 3;
            } catch (I) {
              return I.name === N.InvalidState && x.isOpen() && 0 < --x._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), x.close({ disableAutoOpen: !1 }), x.open().then(function() {
                return v(x, p, O, null, _);
              })) : Ve(I);
            }
            var C, S = lt(_);
            return S && an(), E = Z.follow(function() {
              var I;
              (C = _.call(T, T)) && (S ? (I = It.bind(null, null), C.then(I, I)) : typeof C.next == "function" && typeof C.throw == "function" && (C = qr(C)));
            }, E), (C && typeof C.then == "function" ? Z.resolve(C).then(function(I) {
              return T.active ? I : Ve(new B.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : E.then(function() {
              return C;
            })).then(function(I) {
              return g && T._resolve(), T._completion.then(function() {
                return I;
              });
            }).catch(function(I) {
              return T._reject(I), Ve(I);
            });
          });
        }).bind(null, this, c, f, a, r);
        return a ? a._promise(c, m, "lock") : re.trans ? qt(re.transless, function() {
          return o._whenReady(m);
        }) : this._whenReady(m);
      }, He.prototype.table = function(e) {
        if (!D(this._allTables, e)) throw new B.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, He);
      function He(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var o = He.dependencies;
        this._options = t = u({ addons: He.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var a, c, f, d, m, v = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: _e, dbReadyPromise: null, cancelOpen: _e, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        v.dbReadyPromise = new Z(function(p) {
          v.dbReadyResolve = p;
        }), v.openCanceller = new Z(function(p, O) {
          v.cancelOpen = O;
        }), this._state = v, this.name = e, this.on = pn(this, "populate", "blocked", "versionchange", "close", { ready: [me, _e] }), this.once = function(p, O) {
          var g = function() {
            for (var _ = [], E = 0; E < arguments.length; E++) _[E] = arguments[E];
            r.on(p).unsubscribe(g), O.apply(r, _);
          };
          return r.on(p, g);
        }, this.on.ready.subscribe = q(this.on.ready.subscribe, function(p) {
          return function(O, g) {
            He.vip(function() {
              var _, E = r._state;
              E.openComplete ? (E.dbOpenError || Z.resolve().then(O), g && p(O)) : E.onReadyBeingFired ? (E.onReadyBeingFired.push(O), g && p(O)) : (p(O), _ = r, g || p(function T() {
                _.on.ready.unsubscribe(O), _.on.ready.unsubscribe(T);
              }));
            });
          };
        }), this.Collection = (a = this, yn(ga.prototype, function(C, T) {
          this.db = a;
          var g = Ci, _ = null;
          if (T) try {
            g = T();
          } catch (S) {
            _ = S;
          }
          var E = C._ctx, T = E.table, C = T.hook.reading.fire;
          this._ctx = { table: T, index: E.index, isPrimKey: !E.index || T.schema.primKey.keyPath && E.index === T.schema.primKey.name, range: g, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: _, or: E.or, valueMapper: C !== F ? C : null };
        })), this.Table = (c = this, yn(Si.prototype, function(p, O, g) {
          this.db = c, this._tx = g, this.name = p, this.schema = O, this.hook = c._allTables[p] ? c._allTables[p].hook : pn(null, { creating: [fe, _e], reading: [j, F], updating: [ce, _e], deleting: [ae, _e] });
        })), this.Transaction = (f = this, yn(_a.prototype, function(p, O, g, _, E) {
          var T = this;
          p !== "readonly" && O.forEach(function(C) {
            C = (C = g[C]) === null || C === void 0 ? void 0 : C.yProps, C && (O = O.concat(C.map(function(S) {
              return S.updatesTable;
            })));
          }), this.db = f, this.mode = p, this.storeNames = O, this.schema = g, this.chromeTransactionDurability = _, this.idbtrans = null, this.on = pn(this, "complete", "error", "abort"), this.parent = E || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Z(function(C, S) {
            T._resolve = C, T._reject = S;
          }), this._completion.then(function() {
            T.active = !1, T.on.complete.fire();
          }, function(C) {
            var S = T.active;
            return T.active = !1, T.on.error.fire(C), T.parent ? T.parent._reject(C) : S && T.idbtrans && T.idbtrans.abort(), Ve(C);
          });
        })), this.Version = (d = this, yn(Aa.prototype, function(p) {
          this.db = d, this._cfg = { version: p, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (m = this, yn(Bi.prototype, function(p, O, g) {
          if (this.db = m, this._ctx = { table: p, index: O === ":id" ? null : O, or: g }, this._cmp = this._ascending = Ne, this._descending = function(_, E) {
            return Ne(E, _);
          }, this._max = function(_, E) {
            return 0 < Ne(_, E) ? _ : E;
          }, this._min = function(_, E) {
            return Ne(_, E) < 0 ? _ : E;
          }, this._IDBKeyRange = m._deps.IDBKeyRange, !this._IDBKeyRange) throw new B.MissingAPI();
        })), this.on("versionchange", function(p) {
          0 < p.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(p) {
          !p.newVersion || p.newVersion < p.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(p.oldVersion / 10));
        }), this._maxKey = bn(t.IDBKeyRange), this._createTransaction = function(p, O, g, _) {
          return new r.Transaction(p, O, g, r._options.chromeTransactionDurability, _);
        }, this._fireOnBlocked = function(p) {
          r.on("blocked").fire(p), sn.filter(function(O) {
            return O.name === r.name && O !== r && !O._state.vcFired;
          }).map(function(O) {
            return O.on("versionchange").fire(p);
          });
        }, this.use(ka), this.use(Fa), this.use(Ia), this.use(Pa), this.use(Sa);
        var x = new Proxy(this, { get: function(p, O, g) {
          if (O === "_vip") return !0;
          if (O === "table") return function(E) {
            return Zn(r.table(E), x);
          };
          var _ = Reflect.get(p, O, g);
          return _ instanceof Si ? Zn(_, x) : O === "tables" ? _.map(function(E) {
            return Zn(E, x);
          }) : O === "_createTransaction" ? function() {
            return Zn(_.apply(this, arguments), x);
          } : _;
        } });
        this.vip = x, o.forEach(function(p) {
          return p(r);
        });
      }
      var er, ct = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Ba = ($r.prototype.subscribe = function(e, t, r) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: r });
      }, $r.prototype[ct] = function() {
        return this;
      }, $r);
      function $r(e) {
        this._subscribe = e;
      }
      try {
        er = { indexedDB: h.indexedDB || h.mozIndexedDB || h.webkitIndexedDB || h.msIndexedDB, IDBKeyRange: h.IDBKeyRange || h.webkitIDBKeyRange };
      } catch {
        er = { indexedDB: null, IDBKeyRange: null };
      }
      function zi(e) {
        var t, r = !1, o = new Ba(function(a) {
          var c = lt(e), f, d = !1, m = {}, v = {}, x = { get closed() {
            return d;
          }, unsubscribe: function() {
            d || (d = !0, f && f.abort(), p && Ft.storagemutated.unsubscribe(g));
          } };
          a.start && a.start(x);
          var p = !1, O = function() {
            return wr(_);
          }, g = function(E) {
            Qn(m, E), Kr(v, m) && O();
          }, _ = function() {
            var E, T, C;
            !d && er.indexedDB && (m = {}, E = {}, f && f.abort(), f = new AbortController(), C = function(S) {
              var I = rn();
              try {
                c && an();
                var R = kt(e, S);
                return R = c ? R.finally(It) : R;
              } finally {
                I && on();
              }
            }(T = { subscr: E, signal: f.signal, requery: O, querier: e, trans: null }), Promise.resolve(C).then(function(S) {
              r = !0, t = S, d || T.signal.aborted || (m = {}, function(I) {
                for (var R in I) if (D(I, R)) return;
                return 1;
              }(v = E) || p || (Ft(vn, g), p = !0), wr(function() {
                return !d && a.next && a.next(S);
              }));
            }, function(S) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(S?.name) || d || wr(function() {
                d || a.error && a.error(S);
              });
            }));
          };
          return setTimeout(O, 0), x;
        });
        return o.hasValue = function() {
          return r;
        }, o.getValue = function() {
          return t;
        }, o;
      }
      var $t = Tt;
      function Wr(e) {
        var t = Bt;
        try {
          Bt = !0, Ft.storagemutated.fire(e), Lr(e, !0);
        } finally {
          Bt = t;
        }
      }
      H($t, u(u({}, Ue), { delete: function(e) {
        return new $t(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new $t(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = $t.dependencies, r = t.indexedDB, t = t.IDBKeyRange, (Rr(r) ? Promise.resolve(r.databases()).then(function(o) {
            return o.map(function(a) {
              return a.name;
            }).filter(function(a) {
              return a !== jn;
            });
          }) : Dr(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return Ve(new B.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          A(this, e);
        };
      }, ignoreTransaction: function(e) {
        return re.trans ? qt(re.transless, e) : e();
      }, vip: Fr, async: function(e) {
        return function() {
          try {
            var t = qr(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : Z.resolve(t);
          } catch (r) {
            return Ve(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = qr(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : Z.resolve(o);
        } catch (a) {
          return Ve(a);
        }
      }, currentTransaction: { get: function() {
        return re.trans || null;
      } }, waitFor: function(e, t) {
        return t = Z.resolve(typeof e == "function" ? $t.ignoreTransaction(e) : e).timeout(t || 6e4), re.trans ? re.trans.waitFor(t) : t;
      }, Promise: Z, debug: { get: function() {
        return le;
      }, set: function(e) {
        he(e);
      } }, derive: X, extend: A, props: H, override: q, Events: pn, on: Ft, liveQuery: zi, extendObservabilitySet: Qn, getByKeyPath: se, setByKeyPath: W, delByKeyPath: function(e, t) {
        typeof t == "string" ? W(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          W(e, r, void 0);
        });
      }, shallowClone: te, deepClone: Ee, getObjectDiff: Ur, cmp: Ne, asap: oe, minKey: -1 / 0, addons: [], connections: sn, errnames: N, dependencies: er, cache: Ht, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), $t.maxKey = bn($t.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Ft(vn, function(e) {
        Bt || (e = new CustomEvent(Cr, { detail: e }), Bt = !0, dispatchEvent(e), Bt = !1);
      }), addEventListener(Cr, function(e) {
        e = e.detail, Bt || Wr(e);
      }));
      var fn, Bt = !1, Ji = function() {
      };
      return typeof BroadcastChannel < "u" && ((Ji = function() {
        (fn = new BroadcastChannel(Cr)).onmessage = function(e) {
          return e.data && Wr(e.data);
        };
      })(), typeof fn.unref == "function" && fn.unref(), Ft(vn, function(e) {
        Bt || fn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Tt.disableBfCache && e.persisted) {
          le && console.debug("Dexie: handling persisted pagehide"), fn?.close();
          for (var t = 0, r = sn; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Tt.disableBfCache && e.persisted && (le && console.debug("Dexie: handling persisted pageshow"), Ji(), Wr({ all: new Qe(-1 / 0, [[]]) }));
      })), Z.rejectionMapper = function(e, t) {
        return !e || e instanceof Pt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !V[e.name] ? e : (t = new V[e.name](t || e.message, e), "stack" in e && G(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, he(le), u(Tt, Object.freeze({ __proto__: null, Dexie: Tt, liveQuery: zi, Entity: Ai, cmp: Ne, PropModification: mn, replacePrefix: function(e, t) {
        return new mn({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new mn({ add: e });
      }, remove: function(e) {
        return new mn({ remove: e });
      }, default: Tt, RangeSet: Qe, mergeRanges: xn, rangesOverlap: qi }), { default: Tt }), Tt;
    });
  }(ps)), ps.exports;
}
var Dh = Ih();
const ys = /* @__PURE__ */ ch(Dh), du = Symbol.for("Dexie"), mi = globalThis[du] || (globalThis[du] = ys);
if (ys.semVer !== mi.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${ys.semVer} and ${mi.semVer}`);
const {
  liveQuery: Ep,
  mergeRanges: Op,
  rangesOverlap: Cp,
  RangeSet: Ap,
  cmp: Np,
  Entity: Pp,
  PropModification: Sp,
  replacePrefix: kp,
  add: Ip,
  remove: Dp,
  DexieYProvider: Rp
} = mi;
function Rh(n) {
  const i = new mi(n);
  return i.version(1).stores({
    [`${Yt}`]: _h
  }), i;
}
async function Fh(n) {
  const { databaseInstance: i, records: s } = n, u = i.table(Yt);
  await i.transaction("rw", u, () => u.bulkAdd(s));
}
async function Bh(n) {
  if (await mi.exists(n))
    return await mi.delete(n);
}
const Kh = {
  useBrowserApi: !0,
  chunkSize: 32 * 1024,
  // 32KB
  batchSize: 2e3
};
async function Fp({
  files: n,
  options: i = Kh
}) {
  const s = [];
  if (n.length === 0) throw new Error("No files provided for import.");
  for (const u of n) {
    if (!jh(u)) {
      console.error(`Unsupported file type: ${u.name}`);
      continue;
    }
    u.size === 0 && console.warn(`File is empty: ${u.name}`);
    const l = await Lh({ file: u, options: i });
    s.push(l);
  }
  return s;
}
function jh(n) {
  return bh.some((i) => n.name.toLowerCase().endsWith(i));
}
function Mh(n) {
  return n.name.replace(/\.[^.]+$/, "");
}
async function Lh(n) {
  const { file: i, options: s } = n;
  try {
    const u = Mh(i);
    await Bh(u);
    const l = Rh(u);
    return s.useBrowserApi && i.size !== 0 && await qh({
      file: i,
      databaseInstance: l,
      options: {
        chunkSize: s.chunkSize,
        batchSize: s.batchSize
      }
    }), u;
  } catch (u) {
    throw console.error(`Error importing file ${i.name}:`, u), u;
  }
}
async function qh(n) {
  const { file: i, databaseInstance: s, options: u } = n, l = i.stream().getReader(), h = wh(), y = new TextDecoder(), b = new Uint8Array(0);
  return await ms({ databaseInstance: s, reader: l, sax: h, textDecoder: y, buffer: b, options: u });
}
async function ms(n) {
  const { databaseInstance: i, reader: s, sax: u, textDecoder: l, buffer: h, options: y } = n, { chunkSize: b, batchSize: A } = y, { done: K, value: k } = await s.read();
  if (K) {
    if (h.length > 0) {
      const H = l.decode(h);
      u.parser.write(H);
    }
    return u.parser.close(), await pu({
      databaseInstance: i,
      sax: u,
      batchSize: 0
    });
  }
  if (!k)
    return await ms(n);
  let D = new Uint8Array(h.length + k.length);
  for (D.set(h), D.set(k, h.length); D.length >= b; ) {
    const H = D.slice(0, b);
    D = D.slice(b);
    const ne = l.decode(H, { stream: !0 });
    u.parser.write(ne), await pu({
      databaseInstance: i,
      sax: u,
      batchSize: A
    });
  }
  return await ms({ ...n, buffer: D });
}
async function pu(n) {
  const { databaseInstance: i, sax: s, batchSize: u } = n;
  if (s.getSize() >= u) {
    const l = s.drainBatch(), h = mh({
      currentBatch: l
    });
    await Fh({
      databaseInstance: i,
      records: h
    });
  }
}
var Uh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vh(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Bo = { exports: {} }, Hh = Bo.exports, yu;
function $h() {
  return yu || (yu = 1, function(n, i) {
    (function(s, u) {
      n.exports = u();
    })(Hh, function() {
      var s = function(e, t) {
        return (s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
          r.__proto__ = o;
        } || function(r, o) {
          for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (r[a] = o[a]);
        })(e, t);
      }, u = function() {
        return (u = Object.assign || function(e) {
          for (var t, r = 1, o = arguments.length; r < o; r++) for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return e;
        }).apply(this, arguments);
      };
      function l(e, t, r) {
        for (var o, a = 0, c = t.length; a < c; a++) !o && a in t || ((o = o || Array.prototype.slice.call(t, 0, a))[a] = t[a]);
        return e.concat(o || Array.prototype.slice.call(t));
      }
      var h = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Uh, y = Object.keys, b = Array.isArray;
      function A(e, t) {
        return typeof t != "object" || y(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || h.Promise || (h.Promise = Promise);
      var K = Object.getPrototypeOf, k = {}.hasOwnProperty;
      function D(e, t) {
        return k.call(e, t);
      }
      function H(e, t) {
        typeof t == "function" && (t = t(K(e))), (typeof Reflect > "u" ? y : Reflect.ownKeys)(t).forEach(function(r) {
          G(e, r, t[r]);
        });
      }
      var ne = Object.defineProperty;
      function G(e, t, r, o) {
        ne(e, t, A(r && D(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function X(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), G(e.prototype, "constructor", e), { extend: H.bind(null, e.prototype) };
        } };
      }
      var Te = Object.getOwnPropertyDescriptor, be = [].slice;
      function ue(e, t, r) {
        return be.call(e, t, r);
      }
      function q(e, t) {
        return t(e);
      }
      function M(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function oe(e) {
        h.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function se(e, t) {
        if (typeof t == "string" && D(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var r = [], o = 0, a = t.length; o < a; ++o) {
            var c = se(e, t[o]);
            r.push(c);
          }
          return r;
        }
        var f = t.indexOf(".");
        if (f !== -1) {
          var d = e[t.substr(0, f)];
          return d == null ? void 0 : se(d, t.substr(f + 1));
        }
      }
      function W(e, t, r) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          M(typeof r != "string" && "length" in r);
          for (var o = 0, a = t.length; o < a; ++o) W(e, t[o], r[o]);
        } else {
          var c, f, d = t.indexOf(".");
          d !== -1 ? (c = t.substr(0, d), (f = t.substr(d + 1)) === "" ? r === void 0 ? b(e) && !isNaN(parseInt(c)) ? e.splice(c, 1) : delete e[c] : e[c] = r : W(d = !(d = e[c]) || !D(e, c) ? e[c] = {} : d, f, r)) : r === void 0 ? b(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function te(e) {
        var t, r = {};
        for (t in e) D(e, t) && (r[t] = e[t]);
        return r;
      }
      var P = [].concat;
      function ie(e) {
        return P.apply([], e);
      }
      var De = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ie([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return h[e];
      }), pe = new Set(De.map(function(e) {
        return h[e];
      })), de = null;
      function Ee(e) {
        return de = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var o = de.get(r);
          if (o) return o;
          if (b(r)) {
            o = [], de.set(r, o);
            for (var a = 0, c = r.length; a < c; ++a) o.push(t(r[a]));
          } else if (pe.has(r.constructor)) o = r;
          else {
            var f, d = K(r);
            for (f in o = d === Object.prototype ? {} : Object.create(d), de.set(r, o), r) D(r, f) && (o[f] = t(r[f]));
          }
          return o;
        }(e), de = null, e;
      }
      var qe = {}.toString;
      function Be(e) {
        return qe.call(e).slice(8, -1);
      }
      var Ae = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Oe = typeof Ae == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Ae]) && t.apply(e);
      } : function() {
        return null;
      };
      function Ce(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var We = {};
      function rt(e) {
        var t, r, o, a;
        if (arguments.length === 1) {
          if (b(e)) return e.slice();
          if (this === We && typeof e == "string") return [e];
          if (a = Oe(e)) {
            for (r = []; !(o = a.next()).done; ) r.push(o.value);
            return r;
          }
          if (e == null) return [e];
          if (typeof (t = e.length) != "number") return [e];
          for (r = new Array(t); t--; ) r[t] = e[t];
          return r;
        }
        for (t = arguments.length, r = new Array(t); t--; ) r[t] = arguments[t];
        return r;
      }
      var lt = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Pe = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], ct = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Pe), Nt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Pt(e, t) {
        this.name = e, this.message = t;
      }
      function An(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(r) {
          return t[r].toString();
        }).filter(function(r, o, a) {
          return a.indexOf(r) === o;
        }).join(`
`);
      }
      function Zt(e, t, r, o) {
        this.failures = t, this.failedKeys = o, this.successCount = r, this.message = An(e, t);
      }
      function yt(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(r) {
          return t[r];
        }), this.failuresByPos = t, this.message = An(e, this.failures);
      }
      X(Pt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), X(Zt).from(Pt), X(yt).from(Pt);
      var N = ct.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), w = Pt, B = ct.reduce(function(e, t) {
        var r = t + "Error";
        function o(a, c) {
          this.name = r, a ? typeof a == "string" ? (this.message = "".concat(a).concat(c ? `
 ` + c : ""), this.inner = c || null) : typeof a == "object" && (this.message = "".concat(a.name, " ").concat(a.message), this.inner = a) : (this.message = Nt[t] || r, this.inner = null);
        }
        return X(o).from(w), e[t] = o, e;
      }, {});
      B.Syntax = SyntaxError, B.Type = TypeError, B.Range = RangeError;
      var V = Pe.reduce(function(e, t) {
        return e[t + "Error"] = B[t], e;
      }, {}), Ue = ct.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = B[t]), e;
      }, {});
      function _e() {
      }
      function F(e) {
        return e;
      }
      function j(e, t) {
        return e == null || e === F ? t : function(r) {
          return t(e(r));
        };
      }
      function Q(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function fe(e, t) {
        return e === _e ? t : function() {
          var r = e.apply(this, arguments);
          r !== void 0 && (arguments[0] = r);
          var o = this.onsuccess, a = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var c = t.apply(this, arguments);
          return o && (this.onsuccess = this.onsuccess ? Q(o, this.onsuccess) : o), a && (this.onerror = this.onerror ? Q(a, this.onerror) : a), c !== void 0 ? c : r;
        };
      }
      function ae(e, t) {
        return e === _e ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? Q(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? Q(o, this.onerror) : o);
        };
      }
      function ce(e, t) {
        return e === _e ? t : function(r) {
          var o = e.apply(this, arguments);
          A(r, o);
          var a = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), a && (this.onsuccess = this.onsuccess ? Q(a, this.onsuccess) : a), c && (this.onerror = this.onerror ? Q(c, this.onerror) : c), o === void 0 ? r === void 0 ? void 0 : r : A(o, r);
        };
      }
      function we(e, t) {
        return e === _e ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function me(e, t) {
        return e === _e ? t : function() {
          var r = e.apply(this, arguments);
          if (r && typeof r.then == "function") {
            for (var o = this, a = arguments.length, c = new Array(a); a--; ) c[a] = arguments[a];
            return r.then(function() {
              return t.apply(o, c);
            });
          }
          return t.apply(this, arguments);
        };
      }
      Ue.ModifyError = Zt, Ue.DexieError = Pt, Ue.BulkError = yt;
      var le = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function he(e) {
        le = e;
      }
      var ke = {}, xe = 100, De = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, K(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, K(t), e];
      }(), Pe = De[0], ct = De[1], De = De[2], ct = ct && ct.then, Ke = Pe && Pe.constructor, Xe = !!De, $e = function(e, t) {
        dt.push([e, t]), st && (queueMicrotask(da), st = !1);
      }, ht = !0, st = !0, it = [], ft = [], nn = F, bt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: _e, pgp: !1, env: {}, finalize: _e }, re = bt, dt = [], St = 0, In = [];
      function Z(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = re;
        if (typeof e != "function") {
          if (e !== ke) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && vr(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function r(o, a) {
          try {
            a(function(c) {
              if (o._state === null) {
                if (c === o) throw new TypeError("A promise cannot be resolved with itself.");
                var f = o._lib && rn();
                c && typeof c.then == "function" ? r(o, function(d, m) {
                  c instanceof Z ? c._then(d, m) : c.then(d, m);
                }) : (o._state = !0, o._value = c, xi(o)), f && on();
              }
            }, vr.bind(null, o));
          } catch (c) {
            vr(o, c);
          }
        }(this, e);
      }
      var gr = { get: function() {
        var e = re, t = Bn;
        function r(o, a) {
          var c = this, f = !e.global && (e !== re || t !== Bn), d = f && !It(), m = new Z(function(v, x) {
            br(c, new wi(Ei(o, e, f, d), Ei(a, e, f, d), v, x, e));
          });
          return this._consoleTask && (m._consoleTask = this._consoleTask), m;
        }
        return r.prototype = ke, r;
      }, set: function(e) {
        G(this, "then", e && e.prototype === ke ? gr : { get: function() {
          return e;
        }, set: gr.set });
      } };
      function wi(e, t, r, o, a) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = r, this.reject = o, this.psd = a;
      }
      function vr(e, t) {
        var r, o;
        ft.push(t), e._state === null && (r = e._lib && rn(), t = nn(t), e._state = !1, e._value = t, o = e, it.some(function(a) {
          return a._value === o._value;
        }) || it.push(o), xi(e), r && on());
      }
      function xi(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var r = 0, o = t.length; r < o; ++r) br(e, t[r]);
        var a = e._PSD;
        --a.ref || a.finalize(), St === 0 && (++St, $e(function() {
          --St == 0 && _r();
        }, []));
      }
      function br(e, t) {
        if (e._state !== null) {
          var r = e._state ? t.onFulfilled : t.onRejected;
          if (r === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++St, $e(ha, [r, e, t]);
        } else e._listeners.push(t);
      }
      function ha(e, t, r) {
        try {
          var o, a = t._value;
          !t._state && ft.length && (ft = []), o = le && t._consoleTask ? t._consoleTask.run(function() {
            return e(a);
          }) : e(a), t._state || ft.indexOf(a) !== -1 || function(c) {
            for (var f = it.length; f; ) if (it[--f]._value === c._value) return it.splice(f, 1);
          }(t), r.resolve(o);
        } catch (c) {
          r.reject(c);
        } finally {
          --St == 0 && _r(), --r.psd.ref || r.psd.finalize();
        }
      }
      function da() {
        qt(bt, function() {
          rn() && on();
        });
      }
      function rn() {
        var e = ht;
        return st = ht = !1, e;
      }
      function on() {
        var e, t, r;
        do
          for (; 0 < dt.length; ) for (e = dt, dt = [], r = e.length, t = 0; t < r; ++t) {
            var o = e[t];
            o[0].apply(null, o[1]);
          }
        while (0 < dt.length);
        st = ht = !0;
      }
      function _r() {
        var e = it;
        it = [], e.forEach(function(o) {
          o._PSD.onunhandled.call(null, o._value, o);
        });
        for (var t = In.slice(0), r = t.length; r; ) t[--r]();
      }
      function Dn(e) {
        return new Z(ke, !1, e);
      }
      function je(e, t) {
        var r = re;
        return function() {
          var o = rn(), a = re;
          try {
            return Dt(r, !0), e.apply(this, arguments);
          } catch (c) {
            t && t(c);
          } finally {
            Dt(a, !1), o && on();
          }
        };
      }
      H(Z.prototype, { then: gr, _then: function(e, t) {
        br(this, new wi(null, null, e, t, re));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, r = arguments[1];
        return typeof t == "function" ? this.then(null, function(o) {
          return (o instanceof t ? r : Dn)(o);
        }) : this.then(null, function(o) {
          return (o && o.name === t ? r : Dn)(o);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return Z.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return Z.resolve(e()).then(function() {
            return Dn(t);
          });
        });
      }, timeout: function(e, t) {
        var r = this;
        return e < 1 / 0 ? new Z(function(o, a) {
          var c = setTimeout(function() {
            return a(new B.Timeout(t));
          }, e);
          r.then(o, a).finally(clearTimeout.bind(null, c));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && G(Z.prototype, Symbol.toStringTag, "Dexie.Promise"), bt.env = Ti(), H(Z, { all: function() {
        var e = rt.apply(null, arguments).map(Kn);
        return new Z(function(t, r) {
          e.length === 0 && t([]);
          var o = e.length;
          e.forEach(function(a, c) {
            return Z.resolve(a).then(function(f) {
              e[c] = f, --o || t(e);
            }, r);
          });
        });
      }, resolve: function(e) {
        return e instanceof Z ? e : e && typeof e.then == "function" ? new Z(function(t, r) {
          e.then(t, r);
        }) : new Z(ke, !0, e);
      }, reject: Dn, race: function() {
        var e = rt.apply(null, arguments).map(Kn);
        return new Z(function(t, r) {
          e.map(function(o) {
            return Z.resolve(o).then(t, r);
          });
        });
      }, PSD: { get: function() {
        return re;
      }, set: function(e) {
        return re = e;
      } }, totalEchoes: { get: function() {
        return Bn;
      } }, newPSD: kt, usePSD: qt, scheduler: { get: function() {
        return $e;
      }, set: function(e) {
        $e = e;
      } }, rejectionMapper: { get: function() {
        return nn;
      }, set: function(e) {
        nn = e;
      } }, follow: function(e, t) {
        return new Z(function(r, o) {
          return kt(function(a, c) {
            var f = re;
            f.unhandleds = [], f.onunhandled = c, f.finalize = Q(function() {
              var d, m = this;
              d = function() {
                m.unhandleds.length === 0 ? a() : c(m.unhandleds[0]);
              }, In.push(function v() {
                d(), In.splice(In.indexOf(v), 1);
              }), ++St, $e(function() {
                --St == 0 && _r();
              }, []);
            }, f.finalize), e();
          }, t, r, o);
        });
      } }), Ke && (Ke.allSettled && G(Z, "allSettled", function() {
        var e = rt.apply(null, arguments).map(Kn);
        return new Z(function(t) {
          e.length === 0 && t([]);
          var r = e.length, o = new Array(r);
          e.forEach(function(a, c) {
            return Z.resolve(a).then(function(f) {
              return o[c] = { status: "fulfilled", value: f };
            }, function(f) {
              return o[c] = { status: "rejected", reason: f };
            }).then(function() {
              return --r || t(o);
            });
          });
        });
      }), Ke.any && typeof AggregateError < "u" && G(Z, "any", function() {
        var e = rt.apply(null, arguments).map(Kn);
        return new Z(function(t, r) {
          e.length === 0 && r(new AggregateError([]));
          var o = e.length, a = new Array(o);
          e.forEach(function(c, f) {
            return Z.resolve(c).then(function(d) {
              return t(d);
            }, function(d) {
              a[f] = d, --o || r(new AggregateError(a));
            });
          });
        });
      }), Ke.withResolvers && (Z.withResolvers = Ke.withResolvers));
      var Ge = { awaits: 0, echoes: 0, id: 0 }, pa = 0, Rn = [], Fn = 0, Bn = 0, ya = 0;
      function kt(e, t, r, o) {
        var a = re, c = Object.create(a);
        return c.parent = a, c.ref = 0, c.global = !1, c.id = ++ya, bt.env, c.env = Xe ? { Promise: Z, PromiseProp: { value: Z, configurable: !0, writable: !0 }, all: Z.all, race: Z.race, allSettled: Z.allSettled, any: Z.any, resolve: Z.resolve, reject: Z.reject } : {}, t && A(c, t), ++a.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = qt(c, e, r, o), c.ref === 0 && c.finalize(), o;
      }
      function an() {
        return Ge.id || (Ge.id = ++pa), ++Ge.awaits, Ge.echoes += xe, Ge.id;
      }
      function It() {
        return !!Ge.awaits && (--Ge.awaits == 0 && (Ge.id = 0), Ge.echoes = Ge.awaits * xe, !0);
      }
      function Kn(e) {
        return Ge.echoes && e && e.constructor === Ke ? (an(), e.then(function(t) {
          return It(), t;
        }, function(t) {
          return It(), Ve(t);
        })) : e;
      }
      function ma() {
        var e = Rn[Rn.length - 1];
        Rn.pop(), Dt(e, !1);
      }
      function Dt(e, t) {
        var r, o = re;
        (t ? !Ge.echoes || Fn++ && e === re : !Fn || --Fn && e === re) || queueMicrotask(t ? (function(a) {
          ++Bn, Ge.echoes && --Ge.echoes != 0 || (Ge.echoes = Ge.awaits = Ge.id = 0), Rn.push(re), Dt(a, !0);
        }).bind(null, e) : ma), e !== re && (re = e, o === bt && (bt.env = Ti()), Xe && (r = bt.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(h, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function Ti() {
        var e = h.Promise;
        return Xe ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(h, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function qt(e, t, r, o, a) {
        var c = re;
        try {
          return Dt(e, !0), t(r, o, a);
        } finally {
          Dt(c, !1);
        }
      }
      function Ei(e, t, r, o) {
        return typeof e != "function" ? e : function() {
          var a = re;
          r && an(), Dt(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Dt(a, !1), o && queueMicrotask(It);
          }
        };
      }
      function wr(e) {
        Promise === Ke && Ge.echoes === 0 ? Fn === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + ct).indexOf("[native code]") === -1 && (an = It = _e);
      var Ve = Z.reject, Ut = "￿", xt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Oi = "String expected.", sn = [], jn = "__dbnames", xr = "readonly", Tr = "readwrite";
      function Vt(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var Ci = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Mn(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = Ee(t))[e], t;
        };
      }
      function Ai() {
        throw B.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function Ne(e, t) {
        try {
          var r = Ni(e), o = Ni(t);
          if (r !== o) return r === "Array" ? 1 : o === "Array" ? -1 : r === "binary" ? 1 : o === "binary" ? -1 : r === "string" ? 1 : o === "string" ? -1 : r === "Date" ? 1 : o !== "Date" ? NaN : -1;
          switch (r) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return function(a, c) {
                for (var f = a.length, d = c.length, m = f < d ? f : d, v = 0; v < m; ++v) if (a[v] !== c[v]) return a[v] < c[v] ? -1 : 1;
                return f === d ? 0 : f < d ? -1 : 1;
              }(Pi(e), Pi(t));
            case "Array":
              return function(a, c) {
                for (var f = a.length, d = c.length, m = f < d ? f : d, v = 0; v < m; ++v) {
                  var x = Ne(a[v], c[v]);
                  if (x !== 0) return x;
                }
                return f === d ? 0 : f < d ? -1 : 1;
              }(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function Ni(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = Be(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function Pi(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function Ln(e, t, r) {
        var o = e.schema.yProps;
        return o ? (t && 0 < r.numFailures && (t = t.filter(function(a, c) {
          return !r.failures[c];
        })), Promise.all(o.map(function(a) {
          return a = a.updatesTable, t ? e.db.table(a).where("k").anyOf(t).delete() : e.db.table(a).clear();
        })).then(function() {
          return r;
        })) : r;
      }
      var Si = (Fe.prototype._trans = function(e, t, r) {
        var o = this._tx || re.trans, a = this.name, c = le && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function f(v, x, p) {
          if (!p.schema[a]) throw new B.NotFound("Table " + a + " not part of transaction");
          return t(p.idbtrans, p);
        }
        var d = rn();
        try {
          var m = o && o.db._novip === this.db._novip ? o === re.trans ? o._promise(e, f, r) : kt(function() {
            return o._promise(e, f, r);
          }, { trans: o, transless: re.transless || re }) : function v(x, p, O, g) {
            if (x.idbdb && (x._state.openComplete || re.letThrough || x._vip)) {
              var _ = x._createTransaction(p, O, x._dbSchema);
              try {
                _.create(), x._state.PR1398_maxLoop = 3;
              } catch (E) {
                return E.name === N.InvalidState && x.isOpen() && 0 < --x._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), x.close({ disableAutoOpen: !1 }), x.open().then(function() {
                  return v(x, p, O, g);
                })) : Ve(E);
              }
              return _._promise(p, function(E, T) {
                return kt(function() {
                  return re.trans = _, g(E, T, _);
                });
              }).then(function(E) {
                if (p === "readwrite") try {
                  _.idbtrans.commit();
                } catch {
                }
                return p === "readonly" ? E : _._completion.then(function() {
                  return E;
                });
              });
            }
            if (x._state.openComplete) return Ve(new B.DatabaseClosed(x._state.dbOpenError));
            if (!x._state.isBeingOpened) {
              if (!x._state.autoOpen) return Ve(new B.DatabaseClosed());
              x.open().catch(_e);
            }
            return x._state.dbReadyPromise.then(function() {
              return v(x, p, O, g);
            });
          }(this.db, e, [this.name], f);
          return c && (m._consoleTask = c, m = m.catch(function(v) {
            return console.trace(v), Ve(v);
          })), m;
        } finally {
          d && on();
        }
      }, Fe.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? Ve(new B.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(a) {
            return r.hook.reading.fire(a);
          });
        }).then(t);
      }, Fe.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (b(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = y(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var r = this.schema.indexes.concat(this.schema.primKey).filter(function(d) {
          if (d.compound && t.every(function(v) {
            return 0 <= d.keyPath.indexOf(v);
          })) {
            for (var m = 0; m < t.length; ++m) if (t.indexOf(d.keyPath[m]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(d, m) {
          return d.keyPath.length - m.keyPath.length;
        })[0];
        if (r && this.db._maxKey !== Ut) {
          var c = r.keyPath.slice(0, t.length);
          return this.where(c).equals(c.map(function(m) {
            return e[m];
          }));
        }
        !r && le && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var o = this.schema.idxByName;
        function a(d, m) {
          return Ne(d, m) === 0;
        }
        var f = t.reduce(function(p, m) {
          var v = p[0], x = p[1], p = o[m], O = e[m];
          return [v || p, v || !p ? Vt(x, p && p.multi ? function(g) {
            return g = se(g, m), b(g) && g.some(function(_) {
              return a(O, _);
            });
          } : function(g) {
            return a(O, se(g, m));
          }) : x];
        }, [null, null]), c = f[0], f = f[1];
        return c ? this.where(c.name).equals(e[c.keyPath]).filter(f) : r ? this.filter(f) : this.where(t).equals("");
      }, Fe.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, Fe.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, Fe.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, Fe.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, Fe.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, Fe.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, Fe.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Fe.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, b(e) ? "[".concat(e.join("+"), "]") : e));
      }, Fe.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Fe.prototype.mapToClass = function(e) {
        var t, r = this.db, o = this.name;
        function a() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof Ai && (function(m, v) {
          if (typeof v != "function" && v !== null) throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
          function x() {
            this.constructor = m;
          }
          s(m, v), m.prototype = v === null ? Object.create(v) : (x.prototype = v.prototype, new x());
        }(a, t = e), Object.defineProperty(a.prototype, "db", { get: function() {
          return r;
        }, enumerable: !1, configurable: !0 }), a.prototype.table = function() {
          return o;
        }, e = a);
        for (var c = /* @__PURE__ */ new Set(), f = e.prototype; f; f = K(f)) Object.getOwnPropertyNames(f).forEach(function(m) {
          return c.add(m);
        });
        function d(m) {
          if (!m) return m;
          var v, x = Object.create(e.prototype);
          for (v in m) if (!c.has(v)) try {
            x[v] = m[v];
          } catch {
          }
          return x;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = d, this.hook("reading", d), e;
      }, Fe.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          A(this, e);
        });
      }, Fe.prototype.add = function(e, t) {
        var r = this, o = this.schema.primKey, a = o.auto, c = o.keyPath, f = e;
        return c && a && (f = Mn(c)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "add", keys: t != null ? [t] : null, values: [f] });
        }).then(function(d) {
          return d.numFailures ? Z.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (c) try {
            W(e, c, d);
          } catch {
          }
          return d;
        });
      }, Fe.prototype.update = function(e, t) {
        return typeof e != "object" || b(e) ? this.where(":id").equals(e).modify(t) : (e = se(e, this.schema.primKey.keyPath), e === void 0 ? Ve(new B.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, Fe.prototype.put = function(e, t) {
        var r = this, o = this.schema.primKey, a = o.auto, c = o.keyPath, f = e;
        return c && a && (f = Mn(c)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "put", values: [f], keys: t != null ? [t] : null });
        }).then(function(d) {
          return d.numFailures ? Z.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (c) try {
            W(e, c, d);
          } catch {
          }
          return d;
        });
      }, Fe.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: [e] }).then(function(o) {
            return Ln(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? Z.reject(o.failures[0]) : void 0;
          });
        });
      }, Fe.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: Ci }).then(function(r) {
            return Ln(e, null, r);
          });
        }).then(function(t) {
          return t.numFailures ? Z.reject(t.failures[0]) : void 0;
        });
      }, Fe.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(r) {
          return t.core.getMany({ keys: e, trans: r }).then(function(o) {
            return o.map(function(a) {
              return t.hook.reading.fire(a);
            });
          });
        });
      }, Fe.prototype.bulkAdd = function(e, t, r) {
        var o = this, a = Array.isArray(t) ? t : void 0, c = (r = r || (a ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(f) {
          var v = o.schema.primKey, d = v.auto, v = v.keyPath;
          if (v && a) throw new B.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new B.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, v = v && d ? e.map(Mn(v)) : e;
          return o.core.mutate({ trans: f, type: "add", keys: a, values: v, wantResults: c }).then(function(_) {
            var p = _.numFailures, O = _.results, g = _.lastResult, _ = _.failures;
            if (p === 0) return c ? O : g;
            throw new yt("".concat(o.name, ".bulkAdd(): ").concat(p, " of ").concat(m, " operations failed"), _);
          });
        });
      }, Fe.prototype.bulkPut = function(e, t, r) {
        var o = this, a = Array.isArray(t) ? t : void 0, c = (r = r || (a ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(f) {
          var v = o.schema.primKey, d = v.auto, v = v.keyPath;
          if (v && a) throw new B.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new B.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, v = v && d ? e.map(Mn(v)) : e;
          return o.core.mutate({ trans: f, type: "put", keys: a, values: v, wantResults: c }).then(function(_) {
            var p = _.numFailures, O = _.results, g = _.lastResult, _ = _.failures;
            if (p === 0) return c ? O : g;
            throw new yt("".concat(o.name, ".bulkPut(): ").concat(p, " of ").concat(m, " operations failed"), _);
          });
        });
      }, Fe.prototype.bulkUpdate = function(e) {
        var t = this, r = this.core, o = e.map(function(f) {
          return f.key;
        }), a = e.map(function(f) {
          return f.changes;
        }), c = [];
        return this._trans("readwrite", function(f) {
          return r.getMany({ trans: f, keys: o, cache: "clone" }).then(function(d) {
            var m = [], v = [];
            e.forEach(function(p, O) {
              var g = p.key, _ = p.changes, E = d[O];
              if (E) {
                for (var T = 0, C = Object.keys(_); T < C.length; T++) {
                  var S = C[T], I = _[S];
                  if (S === t.schema.primKey.keyPath) {
                    if (Ne(I, g) !== 0) throw new B.Constraint("Cannot update primary key in bulkUpdate()");
                  } else W(E, S, I);
                }
                c.push(O), m.push(g), v.push(E);
              }
            });
            var x = m.length;
            return r.mutate({ trans: f, type: "put", keys: m, values: v, updates: { keys: o, changeSpecs: a } }).then(function(p) {
              var O = p.numFailures, g = p.failures;
              if (O === 0) return x;
              for (var _ = 0, E = Object.keys(g); _ < E.length; _++) {
                var T, C = E[_], S = c[Number(C)];
                S != null && (T = g[C], delete g[C], g[S] = T);
              }
              throw new yt("".concat(t.name, ".bulkUpdate(): ").concat(O, " of ").concat(x, " operations failed"), g);
            });
          });
        });
      }, Fe.prototype.bulkDelete = function(e) {
        var t = this, r = e.length;
        return this._trans("readwrite", function(o) {
          return t.core.mutate({ trans: o, type: "delete", keys: e }).then(function(a) {
            return Ln(t, e, a);
          });
        }).then(function(f) {
          var a = f.numFailures, c = f.lastResult, f = f.failures;
          if (a === 0) return c;
          throw new yt("".concat(t.name, ".bulkDelete(): ").concat(a, " of ").concat(r, " operations failed"), f);
        });
      }, Fe);
      function Fe() {
      }
      function pn(e) {
        function t(f, d) {
          if (d) {
            for (var m = arguments.length, v = new Array(m - 1); --m; ) v[m - 1] = arguments[m];
            return r[f].subscribe.apply(null, v), e;
          }
          if (typeof f == "string") return r[f];
        }
        var r = {};
        t.addEventType = c;
        for (var o = 1, a = arguments.length; o < a; ++o) c(arguments[o]);
        return t;
        function c(f, d, m) {
          if (typeof f != "object") {
            var v;
            d = d || we;
            var x = { subscribers: [], fire: m = m || _e, subscribe: function(p) {
              x.subscribers.indexOf(p) === -1 && (x.subscribers.push(p), x.fire = d(x.fire, p));
            }, unsubscribe: function(p) {
              x.subscribers = x.subscribers.filter(function(O) {
                return O !== p;
              }), x.fire = x.subscribers.reduce(d, m);
            } };
            return r[f] = t[f] = x;
          }
          y(v = f).forEach(function(p) {
            var O = v[p];
            if (b(O)) c(p, v[p][0], v[p][1]);
            else {
              if (O !== "asap") throw new B.InvalidArgument("Invalid event config");
              var g = c(p, F, function() {
                for (var _ = arguments.length, E = new Array(_); _--; ) E[_] = arguments[_];
                g.subscribers.forEach(function(T) {
                  oe(function() {
                    T.apply(null, E);
                  });
                });
              });
            }
          });
        }
      }
      function yn(e, t) {
        return X(t).from({ prototype: e }), t;
      }
      function un(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function Er(e, t) {
        e.filter = Vt(e.filter, t);
      }
      function Or(e, t, r) {
        var o = e.replayFilter;
        e.replayFilter = o ? function() {
          return Vt(o(), t());
        } : t, e.justLimit = r && !o;
      }
      function qn(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var r = t.getIndexByKeyPath(e.index);
        if (!r) throw new B.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return r;
      }
      function ki(e, t, r) {
        var o = qn(e, t.schema);
        return t.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: o, range: e.range } });
      }
      function Un(e, t, r, o) {
        var a = e.replayFilter ? Vt(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var c = {}, f = function(d, m, v) {
            var x, p;
            a && !a(m, v, function(O) {
              return m.stop(O);
            }, function(O) {
              return m.fail(O);
            }) || ((p = "" + (x = m.primaryKey)) == "[object ArrayBuffer]" && (p = "" + new Uint8Array(x)), D(c, p) || (c[p] = !0, t(d, m, v)));
          };
          return Promise.all([e.or._iterate(f, r), Ii(ki(e, o, r), e.algorithm, f, !e.keysOnly && e.valueMapper)]);
        }
        return Ii(ki(e, o, r), Vt(e.algorithm, a), t, !e.keysOnly && e.valueMapper);
      }
      function Ii(e, t, r, o) {
        var a = je(o ? function(c, f, d) {
          return r(o(c), f, d);
        } : r);
        return e.then(function(c) {
          if (c) return c.start(function() {
            var f = function() {
              return c.continue();
            };
            t && !t(c, function(d) {
              return f = d;
            }, function(d) {
              c.stop(d), f = _e;
            }, function(d) {
              c.fail(d), f = _e;
            }) || a(c.value, c, function(d) {
              return f = d;
            }), f();
          });
        });
      }
      var mn = (Di.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var r = t.add;
          if (b(r)) return l(l([], b(e) ? e : [], !0), r).sort();
          if (typeof r == "number") return (Number(e) || 0) + r;
          if (typeof r == "bigint") try {
            return BigInt(e) + r;
          } catch {
            return BigInt(0) + r;
          }
          throw new TypeError("Invalid term ".concat(r));
        }
        if (t.remove !== void 0) {
          var o = t.remove;
          if (b(o)) return b(e) ? e.filter(function(a) {
            return !o.includes(a);
          }).sort() : [];
          if (typeof o == "number") return Number(e) - o;
          if (typeof o == "bigint") try {
            return BigInt(e) - o;
          } catch {
            return BigInt(0) - o;
          }
          throw new TypeError("Invalid subtrahend ".concat(o));
        }
        return r = (r = t.replacePrefix) === null || r === void 0 ? void 0 : r[0], r && typeof e == "string" && e.startsWith(r) ? t.replacePrefix[1] + e.substring(r.length) : e;
      }, Di);
      function Di(e) {
        this["@@propmod"] = e;
      }
      var ga = (Ie.prototype._read = function(e, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, Ve.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, Ie.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, Ve.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, Ie.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Vt(t.algorithm, e);
      }, Ie.prototype._iterate = function(e, t) {
        return Un(this._ctx, e, t, this._ctx.table.core);
      }, Ie.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && A(r, e), t._ctx = r, t;
      }, Ie.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Ie.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(r) {
          return Un(t, e, r, t.table.core);
        });
      }, Ie.prototype.count = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx, a = o.table.core;
          if (un(o, !0)) return a.count({ trans: r, query: { index: qn(o, a.schema), range: o.range } }).then(function(f) {
            return Math.min(f, o.limit);
          });
          var c = 0;
          return Un(o, function() {
            return ++c, !1;
          }, r, a).then(function() {
            return c;
          });
        }).then(e);
      }, Ie.prototype.sortBy = function(e, t) {
        var r = e.split(".").reverse(), o = r[0], a = r.length - 1;
        function c(m, v) {
          return v ? c(m[r[v]], v - 1) : m[o];
        }
        var f = this._ctx.dir === "next" ? 1 : -1;
        function d(m, v) {
          return Ne(c(m, a), c(v, a)) * f;
        }
        return this.toArray(function(m) {
          return m.sort(d);
        }).then(t);
      }, Ie.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx;
          if (o.dir === "next" && un(o, !0) && 0 < o.limit) {
            var a = o.valueMapper, c = qn(o, o.table.core.schema);
            return o.table.core.query({ trans: r, limit: o.limit, values: !0, query: { index: c, range: o.range } }).then(function(d) {
              return d = d.result, a ? d.map(a) : d;
            });
          }
          var f = [];
          return Un(o, function(d) {
            return f.push(d);
          }, r, o.table.core).then(function() {
            return f;
          });
        }, e);
      }, Ie.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, un(t) ? Or(t, function() {
          var r = e;
          return function(o, a) {
            return r === 0 || (r === 1 ? --r : a(function() {
              o.advance(r), r = 0;
            }), !1);
          };
        }) : Or(t, function() {
          var r = e;
          return function() {
            return --r < 0;
          };
        })), this;
      }, Ie.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Or(this._ctx, function() {
          var t = e;
          return function(r, o, a) {
            return --t <= 0 && o(a), 0 <= t;
          };
        }, !0), this;
      }, Ie.prototype.until = function(e, t) {
        return Er(this._ctx, function(r, o, a) {
          return !e(r.value) || (o(a), t);
        }), this;
      }, Ie.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, Ie.prototype.last = function(e) {
        return this.reverse().first(e);
      }, Ie.prototype.filter = function(e) {
        var t;
        return Er(this._ctx, function(r) {
          return e(r.value);
        }), (t = this._ctx).isMatch = Vt(t.isMatch, e), this;
      }, Ie.prototype.and = function(e) {
        return this.filter(e);
      }, Ie.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, Ie.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Ie.prototype.desc = function() {
        return this.reverse();
      }, Ie.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.key, o);
        });
      }, Ie.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, Ie.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.primaryKey, o);
        });
      }, Ie.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(o, a) {
          r.push(a.key);
        }).then(function() {
          return r;
        }).then(e);
      }, Ie.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && un(t, !0) && 0 < t.limit) return this._read(function(o) {
          var a = qn(t, t.table.core.schema);
          return t.table.core.query({ trans: o, values: !1, limit: t.limit, query: { index: a, range: t.range } });
        }).then(function(o) {
          return o.result;
        }).then(e);
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(o, a) {
          r.push(a.primaryKey);
        }).then(function() {
          return r;
        }).then(e);
      }, Ie.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, Ie.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, Ie.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, Ie.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return Er(this._ctx, function(a) {
          var o = a.primaryKey.toString(), a = D(t, o);
          return t[o] = !0, !a;
        }), this;
      }, Ie.prototype.modify = function(e) {
        var t = this, r = this._ctx;
        return this._write(function(o) {
          var a, c, f;
          f = typeof e == "function" ? e : (a = y(e), c = a.length, function(C) {
            for (var S = !1, I = 0; I < c; ++I) {
              var R = a[I], L = e[R], Y = se(C, R);
              L instanceof mn ? (W(C, R, L.execute(Y)), S = !0) : Y !== L && (W(C, R, L), S = !0);
            }
            return S;
          });
          var d = r.table.core, p = d.schema.primaryKey, m = p.outbound, v = p.extractKey, x = 200, p = t.db._options.modifyChunkSize;
          p && (x = typeof p == "object" ? p[d.name] || p["*"] || 200 : p);
          function O(C, R) {
            var I = R.failures, R = R.numFailures;
            _ += C - R;
            for (var L = 0, Y = y(I); L < Y.length; L++) {
              var U = Y[L];
              g.push(I[U]);
            }
          }
          var g = [], _ = 0, E = [], T = e === Ri;
          return t.clone().primaryKeys().then(function(C) {
            function S(R) {
              var L = Math.min(x, C.length - R), Y = C.slice(R, R + L);
              return (T ? Promise.resolve([]) : d.getMany({ trans: o, keys: Y, cache: "immutable" })).then(function(U) {
                var $ = [], J = [], z = m ? [] : null, ee = T ? Y : [];
                if (!T) for (var ve = 0; ve < L; ++ve) {
                  var Se = U[ve], ge = { value: Ee(Se), primKey: C[R + ve] };
                  f.call(ge, ge.value, ge) !== !1 && (ge.value == null ? ee.push(C[R + ve]) : m || Ne(v(Se), v(ge.value)) === 0 ? (J.push(ge.value), m && z.push(C[R + ve])) : (ee.push(C[R + ve]), $.push(ge.value)));
                }
                return Promise.resolve(0 < $.length && d.mutate({ trans: o, type: "add", values: $ }).then(function(Le) {
                  for (var ye in Le.failures) ee.splice(parseInt(ye), 1);
                  O($.length, Le);
                })).then(function() {
                  return (0 < J.length || I && typeof e == "object") && d.mutate({ trans: o, type: "put", keys: z, values: J, criteria: I, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < R }).then(function(Le) {
                    return O(J.length, Le);
                  });
                }).then(function() {
                  return (0 < ee.length || I && T) && d.mutate({ trans: o, type: "delete", keys: ee, criteria: I, isAdditionalChunk: 0 < R }).then(function(Le) {
                    return Ln(r.table, ee, Le);
                  }).then(function(Le) {
                    return O(ee.length, Le);
                  });
                }).then(function() {
                  return C.length > R + L && S(R + x);
                });
              });
            }
            var I = un(r) && r.limit === 1 / 0 && (typeof e != "function" || T) && { index: r.index, range: r.range };
            return S(0).then(function() {
              if (0 < g.length) throw new Zt("Error modifying one or more objects", g, _, E);
              return C.length;
            });
          });
        });
      }, Ie.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !un(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(Ri) : this._write(function(r) {
          var o = e.table.core.schema.primaryKey, a = t;
          return e.table.core.count({ trans: r, query: { index: o, range: a } }).then(function(c) {
            return e.table.core.mutate({ trans: r, type: "deleteRange", range: a }).then(function(m) {
              var d = m.failures, m = m.numFailures;
              if (m) throw new Zt("Could not delete some values", Object.keys(d).map(function(v) {
                return d[v];
              }), c - m);
              return c - m;
            });
          });
        });
      }, Ie);
      function Ie() {
      }
      var Ri = function(e, t) {
        return t.value = null;
      };
      function va(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function ba(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function ot(e, t, r) {
        return e = e instanceof Bi ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function cn(e) {
        return new e.Collection(e, function() {
          return Fi("");
        }).limit(0);
      }
      function Vn(e, t, r, o) {
        var a, c, f, d, m, v, x, p = r.length;
        if (!r.every(function(_) {
          return typeof _ == "string";
        })) return ot(e, Oi);
        function O(_) {
          a = _ === "next" ? function(T) {
            return T.toUpperCase();
          } : function(T) {
            return T.toLowerCase();
          }, c = _ === "next" ? function(T) {
            return T.toLowerCase();
          } : function(T) {
            return T.toUpperCase();
          }, f = _ === "next" ? va : ba;
          var E = r.map(function(T) {
            return { lower: c(T), upper: a(T) };
          }).sort(function(T, C) {
            return f(T.lower, C.lower);
          });
          d = E.map(function(T) {
            return T.upper;
          }), m = E.map(function(T) {
            return T.lower;
          }), x = (v = _) === "next" ? "" : o;
        }
        O("next"), e = new e.Collection(e, function() {
          return Rt(d[0], m[p - 1] + o);
        }), e._ondirectionchange = function(_) {
          O(_);
        };
        var g = 0;
        return e._addAlgorithm(function(_, E, T) {
          var C = _.key;
          if (typeof C != "string") return !1;
          var S = c(C);
          if (t(S, m, g)) return !0;
          for (var I = null, R = g; R < p; ++R) {
            var L = function(Y, U, $, J, z, ee) {
              for (var ve = Math.min(Y.length, J.length), Se = -1, ge = 0; ge < ve; ++ge) {
                var Le = U[ge];
                if (Le !== J[ge]) return z(Y[ge], $[ge]) < 0 ? Y.substr(0, ge) + $[ge] + $.substr(ge + 1) : z(Y[ge], J[ge]) < 0 ? Y.substr(0, ge) + J[ge] + $.substr(ge + 1) : 0 <= Se ? Y.substr(0, Se) + U[Se] + $.substr(Se + 1) : null;
                z(Y[ge], Le) < 0 && (Se = ge);
              }
              return ve < J.length && ee === "next" ? Y + $.substr(Y.length) : ve < Y.length && ee === "prev" ? Y.substr(0, $.length) : Se < 0 ? null : Y.substr(0, Se) + J[Se] + $.substr(Se + 1);
            }(C, S, d[R], m[R], f, v);
            L === null && I === null ? g = R + 1 : (I === null || 0 < f(I, L)) && (I = L);
          }
          return E(I !== null ? function() {
            _.continue(I + x);
          } : T), !1;
        }), e;
      }
      function Rt(e, t, r, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: o };
      }
      function Fi(e) {
        return { type: 1, lower: e, upper: e };
      }
      var Bi = (Object.defineProperty(Ye.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Ye.prototype.between = function(e, t, r, o) {
        r = r !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || o) && (!r || !o) ? cn(this) : new this.Collection(this, function() {
            return Rt(e, t, !r, !o);
          });
        } catch {
          return ot(this, xt);
        }
      }, Ye.prototype.equals = function(e) {
        return e == null ? ot(this, xt) : new this.Collection(this, function() {
          return Fi(e);
        });
      }, Ye.prototype.above = function(e) {
        return e == null ? ot(this, xt) : new this.Collection(this, function() {
          return Rt(e, void 0, !0);
        });
      }, Ye.prototype.aboveOrEqual = function(e) {
        return e == null ? ot(this, xt) : new this.Collection(this, function() {
          return Rt(e, void 0, !1);
        });
      }, Ye.prototype.below = function(e) {
        return e == null ? ot(this, xt) : new this.Collection(this, function() {
          return Rt(void 0, e, !1, !0);
        });
      }, Ye.prototype.belowOrEqual = function(e) {
        return e == null ? ot(this, xt) : new this.Collection(this, function() {
          return Rt(void 0, e);
        });
      }, Ye.prototype.startsWith = function(e) {
        return typeof e != "string" ? ot(this, Oi) : this.between(e, e + Ut, !0, !0);
      }, Ye.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Vn(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], Ut);
      }, Ye.prototype.equalsIgnoreCase = function(e) {
        return Vn(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, Ye.prototype.anyOfIgnoreCase = function() {
        var e = rt.apply(We, arguments);
        return e.length === 0 ? cn(this) : Vn(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, Ye.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = rt.apply(We, arguments);
        return e.length === 0 ? cn(this) : Vn(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, Ut);
      }, Ye.prototype.anyOf = function() {
        var e = this, t = rt.apply(We, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return ot(this, xt);
        }
        if (t.length === 0) return cn(this);
        var o = new this.Collection(this, function() {
          return Rt(t[0], t[t.length - 1]);
        });
        o._ondirectionchange = function(c) {
          r = c === "next" ? e._ascending : e._descending, t.sort(r);
        };
        var a = 0;
        return o._addAlgorithm(function(c, f, d) {
          for (var m = c.key; 0 < r(m, t[a]); ) if (++a === t.length) return f(d), !1;
          return r(m, t[a]) === 0 || (f(function() {
            c.continue(t[a]);
          }), !1);
        }), o;
      }, Ye.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Ye.prototype.noneOf = function() {
        var e = rt.apply(We, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return ot(this, xt);
        }
        var t = e.reduce(function(r, o) {
          return r ? r.concat([[r[r.length - 1][1], o]]) : [[-1 / 0, o]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, Ye.prototype.inAnyRange = function(C, t) {
        var r = this, o = this._cmp, a = this._ascending, c = this._descending, f = this._min, d = this._max;
        if (C.length === 0) return cn(this);
        if (!C.every(function(S) {
          return S[0] !== void 0 && S[1] !== void 0 && a(S[0], S[1]) <= 0;
        })) return ot(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", B.InvalidArgument);
        var m = !t || t.includeLowers !== !1, v = t && t.includeUppers === !0, x, p = a;
        function O(S, I) {
          return p(S[0], I[0]);
        }
        try {
          (x = C.reduce(function(S, I) {
            for (var R = 0, L = S.length; R < L; ++R) {
              var Y = S[R];
              if (o(I[0], Y[1]) < 0 && 0 < o(I[1], Y[0])) {
                Y[0] = f(Y[0], I[0]), Y[1] = d(Y[1], I[1]);
                break;
              }
            }
            return R === L && S.push(I), S;
          }, [])).sort(O);
        } catch {
          return ot(this, xt);
        }
        var g = 0, _ = v ? function(S) {
          return 0 < a(S, x[g][1]);
        } : function(S) {
          return 0 <= a(S, x[g][1]);
        }, E = m ? function(S) {
          return 0 < c(S, x[g][0]);
        } : function(S) {
          return 0 <= c(S, x[g][0]);
        }, T = _, C = new this.Collection(this, function() {
          return Rt(x[0][0], x[x.length - 1][1], !m, !v);
        });
        return C._ondirectionchange = function(S) {
          p = S === "next" ? (T = _, a) : (T = E, c), x.sort(O);
        }, C._addAlgorithm(function(S, I, R) {
          for (var L, Y = S.key; T(Y); ) if (++g === x.length) return I(R), !1;
          return !_(L = Y) && !E(L) || (r._cmp(Y, x[g][1]) === 0 || r._cmp(Y, x[g][0]) === 0 || I(function() {
            p === a ? S.continue(x[g][0]) : S.continue(x[g][1]);
          }), !1);
        }), C;
      }, Ye.prototype.startsWithAnyOf = function() {
        var e = rt.apply(We, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? cn(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + Ut];
        })) : ot(this, "startsWithAnyOf() only works with strings");
      }, Ye);
      function Ye() {
      }
      function mt(e) {
        return je(function(t) {
          return gn(t), e(t.target.error), !1;
        });
      }
      function gn(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var vn = "storagemutated", Cr = "x-storagemutated-1", Ft = pn(null, vn), _a = (gt.prototype._lock = function() {
        return M(!re.global), ++this._reculock, this._reculock !== 1 || re.global || (re.lockOwnerFor = this), this;
      }, gt.prototype._unlock = function() {
        if (M(!re.global), --this._reculock == 0) for (re.global || (re.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            qt(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, gt.prototype._locked = function() {
        return this._reculock && re.lockOwnerFor !== this;
      }, gt.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var r = this.db.idbdb, o = this.db._state.dbOpenError;
        if (M(!this.idbtrans), !e && !r) switch (o && o.name) {
          case "DatabaseClosedError":
            throw new B.DatabaseClosed(o);
          case "MissingAPIError":
            throw new B.MissingAPI(o.message, o);
          default:
            throw new B.OpenFailed(o);
        }
        if (!this.active) throw new B.TransactionInactive();
        return M(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = je(function(a) {
          gn(a), t._reject(e.error);
        }), e.onabort = je(function(a) {
          gn(a), t.active && t._reject(new B.Abort(e.error)), t.active = !1, t.on("abort").fire(a);
        }), e.oncomplete = je(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && Ft.storagemutated.fire(e.mutatedParts);
        }), this;
      }, gt.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Ve(new B.ReadOnly("Transaction is readonly"));
        if (!this.active) return Ve(new B.TransactionInactive());
        if (this._locked()) return new Z(function(c, f) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, r).then(c, f);
          }, re]);
        });
        if (r) return kt(function() {
          var c = new Z(function(f, d) {
            o._lock();
            var m = t(f, d, o);
            m && m.then && m.then(f, d);
          });
          return c.finally(function() {
            return o._unlock();
          }), c._lib = !0, c;
        });
        var a = new Z(function(c, f) {
          var d = t(c, f, o);
          d && d.then && d.then(c, f);
        });
        return a._lib = !0, a;
      }, gt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, gt.prototype.waitFor = function(e) {
        var t, r = this._root(), o = Z.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return o;
        }) : (r._waitingFor = o, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function c() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (t.get(-1 / 0).onsuccess = c);
        }());
        var a = r._waitingFor;
        return new Z(function(c, f) {
          o.then(function(d) {
            return r._waitingQueue.push(je(c.bind(null, d)));
          }, function(d) {
            return r._waitingQueue.push(je(f.bind(null, d)));
          }).finally(function() {
            r._waitingFor === a && (r._waitingFor = null);
          });
        });
      }, gt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new B.Abort()));
      }, gt.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (D(t, e)) return t[e];
        var r = this.schema[e];
        if (!r) throw new B.NotFound("Table " + e + " not part of transaction");
        return r = new this.db.Table(e, r, this), r.core = this.db.core.table(e), t[e] = r;
      }, gt);
      function gt() {
      }
      function Ar(e, t, r, o, a, c, f, d) {
        return { name: e, keyPath: t, unique: r, multi: o, auto: a, compound: c, src: (r && !f ? "&" : "") + (o ? "*" : "") + (a ? "++" : "") + Ki(t), type: d };
      }
      function Ki(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Nr(e, t, r) {
        return { name: e, primKey: t, indexes: r, mappedClass: null, idxByName: (o = function(a) {
          return [a.name, a];
        }, r.reduce(function(a, c, f) {
          return f = o(c, f), f && (a[f[0]] = f[1]), a;
        }, {})) };
        var o;
      }
      var bn = function(e) {
        try {
          return e.only([[]]), bn = function() {
            return [[]];
          }, [[]];
        } catch {
          return bn = function() {
            return Ut;
          }, Ut;
        }
      };
      function Pr(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(r) {
          return r[t];
        } : function(r) {
          return se(r, t);
        } : function(r) {
          return se(r, e);
        };
        var t;
      }
      function ji(e) {
        return [].slice.call(e);
      }
      var wa = 0;
      function _n(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function xa(e, t, m) {
        function o(T) {
          if (T.type === 3) return null;
          if (T.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var g = T.lower, _ = T.upper, E = T.lowerOpen, T = T.upperOpen;
          return g === void 0 ? _ === void 0 ? null : t.upperBound(_, !!T) : _ === void 0 ? t.lowerBound(g, !!E) : t.bound(g, _, !!E, !!T);
        }
        function a(O) {
          var g, _ = O.name;
          return { name: _, schema: O, mutate: function(E) {
            var T = E.trans, C = E.type, S = E.keys, I = E.values, R = E.range;
            return new Promise(function(L, Y) {
              L = je(L);
              var U = T.objectStore(_), $ = U.keyPath == null, J = C === "put" || C === "add";
              if (!J && C !== "delete" && C !== "deleteRange") throw new Error("Invalid operation type: " + C);
              var z, ee = (S || I || { length: 1 }).length;
              if (S && I && S.length !== I.length) throw new Error("Given keys array must have same length as given values array.");
              if (ee === 0) return L({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function ve(tt) {
                ++Le, gn(tt);
              }
              var Se = [], ge = [], Le = 0;
              if (C === "deleteRange") {
                if (R.type === 4) return L({ numFailures: Le, failures: ge, results: [], lastResult: void 0 });
                R.type === 3 ? Se.push(z = U.clear()) : Se.push(z = U.delete(o(R)));
              } else {
                var $ = J ? $ ? [I, S] : [I, null] : [S, null], ye = $[0], ze = $[1];
                if (J) for (var Je = 0; Je < ee; ++Je) Se.push(z = ze && ze[Je] !== void 0 ? U[C](ye[Je], ze[Je]) : U[C](ye[Je])), z.onerror = ve;
                else for (Je = 0; Je < ee; ++Je) Se.push(z = U[C](ye[Je])), z.onerror = ve;
              }
              function tr(tt) {
                tt = tt.target.result, Se.forEach(function(Wt, Gr) {
                  return Wt.error != null && (ge[Gr] = Wt.error);
                }), L({ numFailures: Le, failures: ge, results: C === "delete" ? S : Se.map(function(Wt) {
                  return Wt.result;
                }), lastResult: tt });
              }
              z.onerror = function(tt) {
                ve(tt), tr(tt);
              }, z.onsuccess = tr;
            });
          }, getMany: function(E) {
            var T = E.trans, C = E.keys;
            return new Promise(function(S, I) {
              S = je(S);
              for (var R, L = T.objectStore(_), Y = C.length, U = new Array(Y), $ = 0, J = 0, z = function(Se) {
                Se = Se.target, U[Se._pos] = Se.result, ++J === $ && S(U);
              }, ee = mt(I), ve = 0; ve < Y; ++ve) C[ve] != null && ((R = L.get(C[ve]))._pos = ve, R.onsuccess = z, R.onerror = ee, ++$);
              $ === 0 && S(U);
            });
          }, get: function(E) {
            var T = E.trans, C = E.key;
            return new Promise(function(S, I) {
              S = je(S);
              var R = T.objectStore(_).get(C);
              R.onsuccess = function(L) {
                return S(L.target.result);
              }, R.onerror = mt(I);
            });
          }, query: (g = v, function(E) {
            return new Promise(function(T, C) {
              T = je(T);
              var S, I, R, $ = E.trans, L = E.values, Y = E.limit, z = E.query, U = Y === 1 / 0 ? void 0 : Y, J = z.index, z = z.range, $ = $.objectStore(_), J = J.isPrimaryKey ? $ : $.index(J.name), z = o(z);
              if (Y === 0) return T({ result: [] });
              g ? ((U = L ? J.getAll(z, U) : J.getAllKeys(z, U)).onsuccess = function(ee) {
                return T({ result: ee.target.result });
              }, U.onerror = mt(C)) : (S = 0, I = !L && "openKeyCursor" in J ? J.openKeyCursor(z) : J.openCursor(z), R = [], I.onsuccess = function(ee) {
                var ve = I.result;
                return ve ? (R.push(L ? ve.value : ve.primaryKey), ++S === Y ? T({ result: R }) : void ve.continue()) : T({ result: R });
              }, I.onerror = mt(C));
            });
          }), openCursor: function(E) {
            var T = E.trans, C = E.values, S = E.query, I = E.reverse, R = E.unique;
            return new Promise(function(L, Y) {
              L = je(L);
              var J = S.index, U = S.range, $ = T.objectStore(_), $ = J.isPrimaryKey ? $ : $.index(J.name), J = I ? R ? "prevunique" : "prev" : R ? "nextunique" : "next", z = !C && "openKeyCursor" in $ ? $.openKeyCursor(o(U), J) : $.openCursor(o(U), J);
              z.onerror = mt(Y), z.onsuccess = je(function(ee) {
                var ve, Se, ge, Le, ye = z.result;
                ye ? (ye.___id = ++wa, ye.done = !1, ve = ye.continue.bind(ye), Se = (Se = ye.continuePrimaryKey) && Se.bind(ye), ge = ye.advance.bind(ye), Le = function() {
                  throw new Error("Cursor not stopped");
                }, ye.trans = T, ye.stop = ye.continue = ye.continuePrimaryKey = ye.advance = function() {
                  throw new Error("Cursor not started");
                }, ye.fail = je(Y), ye.next = function() {
                  var ze = this, Je = 1;
                  return this.start(function() {
                    return Je-- ? ze.continue() : ze.stop();
                  }).then(function() {
                    return ze;
                  });
                }, ye.start = function(ze) {
                  function Je() {
                    if (z.result) try {
                      ze();
                    } catch (tt) {
                      ye.fail(tt);
                    }
                    else ye.done = !0, ye.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ye.stop();
                  }
                  var tr = new Promise(function(tt, Wt) {
                    tt = je(tt), z.onerror = mt(Wt), ye.fail = Wt, ye.stop = function(Gr) {
                      ye.stop = ye.continue = ye.continuePrimaryKey = ye.advance = Le, tt(Gr);
                    };
                  });
                  return z.onsuccess = je(function(tt) {
                    z.onsuccess = Je, Je();
                  }), ye.continue = ve, ye.continuePrimaryKey = Se, ye.advance = ge, Je(), tr;
                }, L(ye)) : L(null);
              }, Y);
            });
          }, count: function(E) {
            var T = E.query, C = E.trans, S = T.index, I = T.range;
            return new Promise(function(R, L) {
              var Y = C.objectStore(_), U = S.isPrimaryKey ? Y : Y.index(S.name), Y = o(I), U = Y ? U.count(Y) : U.count();
              U.onsuccess = je(function($) {
                return R($.target.result);
              }), U.onerror = mt(L);
            });
          } };
        }
        var c, f, d, x = (f = m, d = ji((c = e).objectStoreNames), { schema: { name: c.name, tables: d.map(function(O) {
          return f.objectStore(O);
        }).map(function(O) {
          var g = O.keyPath, T = O.autoIncrement, _ = b(g), E = {}, T = { name: O.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: g == null, compound: _, keyPath: g, autoIncrement: T, unique: !0, extractKey: Pr(g) }, indexes: ji(O.indexNames).map(function(C) {
            return O.index(C);
          }).map(function(R) {
            var S = R.name, I = R.unique, L = R.multiEntry, R = R.keyPath, L = { name: S, compound: b(R), keyPath: R, unique: I, multiEntry: L, extractKey: Pr(R) };
            return E[_n(R)] = L;
          }), getIndexByKeyPath: function(C) {
            return E[_n(C)];
          } };
          return E[":id"] = T.primaryKey, g != null && (E[_n(g)] = T.primaryKey), T;
        }) }, hasGetAll: 0 < d.length && "getAll" in f.objectStore(d[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), m = x.schema, v = x.hasGetAll, x = m.tables.map(a), p = {};
        return x.forEach(function(O) {
          return p[O.name] = O;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(O) {
          if (!p[O]) throw new Error("Table '".concat(O, "' not found"));
          return p[O];
        }, MIN_KEY: -1 / 0, MAX_KEY: bn(t), schema: m };
      }
      function Ta(e, t, r, o) {
        var a = r.IDBKeyRange;
        return r.indexedDB, { dbcore: (o = xa(t, a, o), e.dbcore.reduce(function(c, f) {
          return f = f.create, u(u({}, c), f(c));
        }, o)) };
      }
      function Hn(e, o) {
        var r = o.db, o = Ta(e._middlewares, r, e._deps, o);
        e.core = o.dbcore, e.tables.forEach(function(a) {
          var c = a.name;
          e.core.schema.tables.some(function(f) {
            return f.name === c;
          }) && (a.core = e.core.table(c), e[c] instanceof e.Table && (e[c].core = a.core));
        });
      }
      function $n(e, t, r, o) {
        r.forEach(function(a) {
          var c = o[a];
          t.forEach(function(f) {
            var d = function m(v, x) {
              return Te(v, x) || (v = K(v)) && m(v, x);
            }(f, a);
            (!d || "value" in d && d.value === void 0) && (f === e.Transaction.prototype || f instanceof e.Transaction ? G(f, a, { get: function() {
              return this.table(a);
            }, set: function(m) {
              ne(this, a, { value: m, writable: !0, configurable: !0, enumerable: !0 });
            } }) : f[a] = new e.Table(a, c));
          });
        });
      }
      function Sr(e, t) {
        t.forEach(function(r) {
          for (var o in r) r[o] instanceof e.Table && delete r[o];
        });
      }
      function Ea(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function Oa(e, t, r, o) {
        var a = e._dbSchema;
        r.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = Nr("$meta", Li("")[0], []), e._storeNames.push("$meta"));
        var c = e._createTransaction("readwrite", e._storeNames, a);
        c.create(r), c._completion.catch(o);
        var f = c._reject.bind(c), d = re.transless || re;
        kt(function() {
          return re.trans = c, re.transless = d, t !== 0 ? (Hn(e, r), v = t, ((m = c).storeNames.includes("$meta") ? m.table("$meta").get("version").then(function(x) {
            return x ?? v;
          }) : Z.resolve(v)).then(function(x) {
            return O = x, g = c, _ = r, E = [], x = (p = e)._versions, T = p._dbSchema = Gn(0, p.idbdb, _), (x = x.filter(function(C) {
              return C._cfg.version >= O;
            })).length !== 0 ? (x.forEach(function(C) {
              E.push(function() {
                var S = T, I = C._cfg.dbschema;
                Yn(p, S, _), Yn(p, I, _), T = p._dbSchema = I;
                var R = kr(S, I);
                R.add.forEach(function(J) {
                  Ir(_, J[0], J[1].primKey, J[1].indexes);
                }), R.change.forEach(function(J) {
                  if (J.recreate) throw new B.Upgrade("Not yet support for changing primary key");
                  var z = _.objectStore(J.name);
                  J.add.forEach(function(ee) {
                    return Wn(z, ee);
                  }), J.change.forEach(function(ee) {
                    z.deleteIndex(ee.name), Wn(z, ee);
                  }), J.del.forEach(function(ee) {
                    return z.deleteIndex(ee);
                  });
                });
                var L = C._cfg.contentUpgrade;
                if (L && C._cfg.version > O) {
                  Hn(p, _), g._memoizedTables = {};
                  var Y = te(I);
                  R.del.forEach(function(J) {
                    Y[J] = S[J];
                  }), Sr(p, [p.Transaction.prototype]), $n(p, [p.Transaction.prototype], y(Y), Y), g.schema = Y;
                  var U, $ = lt(L);
                  return $ && an(), R = Z.follow(function() {
                    var J;
                    (U = L(g)) && $ && (J = It.bind(null, null), U.then(J, J));
                  }), U && typeof U.then == "function" ? Z.resolve(U) : R.then(function() {
                    return U;
                  });
                }
              }), E.push(function(S) {
                var I, R, L = C._cfg.dbschema;
                I = L, R = S, [].slice.call(R.db.objectStoreNames).forEach(function(Y) {
                  return I[Y] == null && R.db.deleteObjectStore(Y);
                }), Sr(p, [p.Transaction.prototype]), $n(p, [p.Transaction.prototype], p._storeNames, p._dbSchema), g.schema = p._dbSchema;
              }), E.push(function(S) {
                p.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(p.idbdb.version / 10) === C._cfg.version ? (p.idbdb.deleteObjectStore("$meta"), delete p._dbSchema.$meta, p._storeNames = p._storeNames.filter(function(I) {
                  return I !== "$meta";
                })) : S.objectStore("$meta").put(C._cfg.version, "version"));
              });
            }), function C() {
              return E.length ? Z.resolve(E.shift()(g.idbtrans)).then(C) : Z.resolve();
            }().then(function() {
              Mi(T, _);
            })) : Z.resolve();
            var p, O, g, _, E, T;
          }).catch(f)) : (y(a).forEach(function(x) {
            Ir(r, x, a[x].primKey, a[x].indexes);
          }), Hn(e, r), void Z.follow(function() {
            return e.on.populate.fire(c);
          }).catch(f));
          var m, v;
        });
      }
      function Ca(e, t) {
        Mi(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var r = Gn(0, e.idbdb, t);
        Yn(e, e._dbSchema, t);
        for (var o = 0, a = kr(r, e._dbSchema).change; o < a.length; o++) {
          var c = function(f) {
            if (f.change.length || f.recreate) return console.warn("Unable to patch indexes of table ".concat(f.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var d = t.objectStore(f.name);
            f.add.forEach(function(m) {
              le && console.debug("Dexie upgrade patch: Creating missing index ".concat(f.name, ".").concat(m.src)), Wn(d, m);
            });
          }(a[o]);
          if (typeof c == "object") return c.value;
        }
      }
      function kr(e, t) {
        var r, o = { del: [], add: [], change: [] };
        for (r in e) t[r] || o.del.push(r);
        for (r in t) {
          var a = e[r], c = t[r];
          if (a) {
            var f = { name: r, def: c, recreate: !1, del: [], add: [], change: [] };
            if ("" + (a.primKey.keyPath || "") != "" + (c.primKey.keyPath || "") || a.primKey.auto !== c.primKey.auto) f.recreate = !0, o.change.push(f);
            else {
              var d = a.idxByName, m = c.idxByName, v = void 0;
              for (v in d) m[v] || f.del.push(v);
              for (v in m) {
                var x = d[v], p = m[v];
                x ? x.src !== p.src && f.change.push(p) : f.add.push(p);
              }
              (0 < f.del.length || 0 < f.add.length || 0 < f.change.length) && o.change.push(f);
            }
          } else o.add.push([r, c]);
        }
        return o;
      }
      function Ir(e, t, r, o) {
        var a = e.db.createObjectStore(t, r.keyPath ? { keyPath: r.keyPath, autoIncrement: r.auto } : { autoIncrement: r.auto });
        return o.forEach(function(c) {
          return Wn(a, c);
        }), a;
      }
      function Mi(e, t) {
        y(e).forEach(function(r) {
          t.db.objectStoreNames.contains(r) || (le && console.debug("Dexie: Creating missing table", r), Ir(t, r, e[r].primKey, e[r].indexes));
        });
      }
      function Wn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function Gn(e, t, r) {
        var o = {};
        return ue(t.objectStoreNames, 0).forEach(function(a) {
          for (var c = r.objectStore(a), f = Ar(Ki(v = c.keyPath), v || "", !0, !1, !!c.autoIncrement, v && typeof v != "string", !0), d = [], m = 0; m < c.indexNames.length; ++m) {
            var x = c.index(c.indexNames[m]), v = x.keyPath, x = Ar(x.name, v, !!x.unique, !!x.multiEntry, !1, v && typeof v != "string", !1);
            d.push(x);
          }
          o[a] = Nr(a, f, d);
        }), o;
      }
      function Yn(e, t, r) {
        for (var o = r.db.objectStoreNames, a = 0; a < o.length; ++a) {
          var c = o[a], f = r.objectStore(c);
          e._hasGetAll = "getAll" in f;
          for (var d = 0; d < f.indexNames.length; ++d) {
            var m = f.indexNames[d], v = f.index(m).keyPath, x = typeof v == "string" ? v : "[" + ue(v).join("+") + "]";
            !t[c] || (v = t[c].idxByName[x]) && (v.name = m, delete t[c].idxByName[x], t[c].idxByName[m] = v);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && h.WorkerGlobalScope && h instanceof h.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Li(e) {
        return e.split(",").map(function(t, r) {
          var c = t.split(":"), o = (a = c[1]) === null || a === void 0 ? void 0 : a.trim(), a = (t = c[0].trim()).replace(/([&*]|\+\+)/g, ""), c = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return Ar(a, c || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), b(c), r === 0, o);
        });
      }
      var Aa = (ln.prototype._createTableSchema = Nr, ln.prototype._parseIndexSyntax = Li, ln.prototype._parseStoresSpec = function(e, t) {
        var r = this;
        y(e).forEach(function(o) {
          if (e[o] !== null) {
            var a = r._parseIndexSyntax(e[o]), c = a.shift();
            if (!c) throw new B.Schema("Invalid schema for table " + o + ": " + e[o]);
            if (c.unique = !0, c.multi) throw new B.Schema("Primary key cannot be multiEntry*");
            a.forEach(function(f) {
              if (f.auto) throw new B.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!f.keyPath) throw new B.Schema("Index must have a name and cannot be an empty string");
            }), a = r._createTableSchema(o, c, a), t[o] = a;
          }
        });
      }, ln.prototype.stores = function(r) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? A(this._cfg.storesSource, r) : r;
        var r = t._versions, o = {}, a = {};
        return r.forEach(function(c) {
          A(o, c._cfg.storesSource), a = c._cfg.dbschema = {}, c._parseStoresSpec(o, a);
        }), t._dbSchema = a, Sr(t, [t._allTables, t, t.Transaction.prototype]), $n(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], y(a), a), t._storeNames = y(a), this;
      }, ln.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = me(this._cfg.contentUpgrade || _e, e), this;
      }, ln);
      function ln() {
      }
      function Dr(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new Tt(jn, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function Rr(e) {
        return e && typeof e.databases == "function";
      }
      function Fr(e) {
        return kt(function() {
          return re.letThrough = !0, e();
        });
      }
      function Br(e) {
        return !("from" in e);
      }
      var Qe = function(e, t) {
        if (!this) {
          var r = new Qe();
          return e && "d" in e && A(r, e), r;
        }
        A(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function wn(e, t, r) {
        var o = Ne(t, r);
        if (!isNaN(o)) {
          if (0 < o) throw RangeError();
          if (Br(e)) return A(e, { from: t, to: r, d: 1 });
          var a = e.l, o = e.r;
          if (Ne(r, e.from) < 0) return a ? wn(a, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, Ui(e);
          if (0 < Ne(t, e.to)) return o ? wn(o, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, Ui(e);
          Ne(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < Ne(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, a && !e.l && xn(e, a), o && r && xn(e, o);
        }
      }
      function xn(e, t) {
        Br(t) || function r(o, m) {
          var c = m.from, f = m.to, d = m.l, m = m.r;
          wn(o, c, f), d && r(o, d), m && r(o, m);
        }(e, t);
      }
      function qi(e, t) {
        var r = Xn(t), o = r.next();
        if (o.done) return !1;
        for (var a = o.value, c = Xn(e), f = c.next(a.from), d = f.value; !o.done && !f.done; ) {
          if (Ne(d.from, a.to) <= 0 && 0 <= Ne(d.to, a.from)) return !0;
          Ne(a.from, d.from) < 0 ? a = (o = r.next(d.from)).value : d = (f = c.next(a.from)).value;
        }
        return !1;
      }
      function Xn(e) {
        var t = Br(e) ? null : { s: 0, n: e };
        return { next: function(r) {
          for (var o = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, o) for (; t.n.l && Ne(r, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !o || Ne(r, t.n.to) <= 0) return { value: t.n, done: !1 };
            case 2:
              if (t.n.r) {
                t.s = 3, t = { up: t, n: t.n.r, s: 0 };
                continue;
              }
            case 3:
              t = t.up;
          }
          return { done: !0 };
        } };
      }
      function Ui(e) {
        var t, r, o = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((r = e.l) === null || r === void 0 ? void 0 : r.d) || 0), a = 1 < o ? "r" : o < -1 ? "l" : "";
        a && (t = a == "r" ? "l" : "r", r = u({}, e), o = e[a], e.from = o.from, e.to = o.to, e[a] = o[a], r[a] = o[t], (e[t] = r).d = Vi(r)), e.d = Vi(e);
      }
      function Vi(r) {
        var t = r.r, r = r.l;
        return (t ? r ? Math.max(t.d, r.d) : t.d : r ? r.d : 0) + 1;
      }
      function Qn(e, t) {
        return y(t).forEach(function(r) {
          e[r] ? xn(e[r], t[r]) : e[r] = function o(a) {
            var c, f, d = {};
            for (c in a) D(a, c) && (f = a[c], d[c] = !f || typeof f != "object" || pe.has(f.constructor) ? f : o(f));
            return d;
          }(t[r]);
        }), e;
      }
      function Kr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && qi(t[r], e[r]);
        });
      }
      H(Qe.prototype, ((ct = { add: function(e) {
        return xn(this, e), this;
      }, addKey: function(e) {
        return wn(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(r) {
          return wn(t, r, r);
        }), this;
      }, hasKey: function(e) {
        var t = Xn(this).next(e).value;
        return t && Ne(t.from, e) <= 0 && 0 <= Ne(t.to, e);
      } })[Ae] = function() {
        return Xn(this);
      }, ct));
      var Ht = {}, jr = {}, Mr = !1;
      function zn(e) {
        Qn(jr, e), Mr || (Mr = !0, setTimeout(function() {
          Mr = !1, Lr(jr, !(jr = {}));
        }, 0));
      }
      function Lr(e, t) {
        t === void 0 && (t = !1);
        var r = /* @__PURE__ */ new Set();
        if (e.all) for (var o = 0, a = Object.values(Ht); o < a.length; o++) Hi(f = a[o], e, r, t);
        else for (var c in e) {
          var f, d = /^idb\:\/\/(.*)\/(.*)\//.exec(c);
          d && (c = d[1], d = d[2], (f = Ht["idb://".concat(c, "/").concat(d)]) && Hi(f, e, r, t));
        }
        r.forEach(function(m) {
          return m();
        });
      }
      function Hi(e, t, r, o) {
        for (var a = [], c = 0, f = Object.entries(e.queries.query); c < f.length; c++) {
          for (var d = f[c], m = d[0], v = [], x = 0, p = d[1]; x < p.length; x++) {
            var O = p[x];
            Kr(t, O.obsSet) ? O.subscribers.forEach(function(T) {
              return r.add(T);
            }) : o && v.push(O);
          }
          o && a.push([m, v]);
        }
        if (o) for (var g = 0, _ = a; g < _.length; g++) {
          var E = _[g], m = E[0], v = E[1];
          e.queries.query[m] = v;
        }
      }
      function Na(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? Ve(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, a = Math.round(10 * e.verno), c = !1;
        function f() {
          if (t.openCanceller !== o) throw new B.DatabaseClosed("db.open() was cancelled");
        }
        function d() {
          return new Z(function(O, g) {
            if (f(), !r) throw new B.MissingAPI();
            var _ = e.name, E = t.autoSchema || !a ? r.open(_) : r.open(_, a);
            if (!E) throw new B.MissingAPI();
            E.onerror = mt(g), E.onblocked = je(e._fireOnBlocked), E.onupgradeneeded = je(function(T) {
              var C;
              x = E.transaction, t.autoSchema && !e._options.allowEmptyDB ? (E.onerror = gn, x.abort(), E.result.close(), (C = r.deleteDatabase(_)).onsuccess = C.onerror = je(function() {
                g(new B.NoSuchDatabase("Database ".concat(_, " doesnt exist")));
              })) : (x.onerror = mt(g), T = T.oldVersion > Math.pow(2, 62) ? 0 : T.oldVersion, p = T < 1, e.idbdb = E.result, c && Ca(e, x), Oa(e, T / 10, x, g));
            }, g), E.onsuccess = je(function() {
              x = null;
              var T, C, S, I, R, L = e.idbdb = E.result, Y = ue(L.objectStoreNames);
              if (0 < Y.length) try {
                var U = L.transaction((I = Y).length === 1 ? I[0] : I, "readonly");
                if (t.autoSchema) C = L, S = U, (T = e).verno = C.version / 10, S = T._dbSchema = Gn(0, C, S), T._storeNames = ue(C.objectStoreNames, 0), $n(T, [T._allTables], y(S), S);
                else if (Yn(e, e._dbSchema, U), ((R = kr(Gn(0, (R = e).idbdb, U), R._dbSchema)).add.length || R.change.some(function($) {
                  return $.add.length || $.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), L.close(), a = L.version + 1, c = !0, O(d());
                Hn(e, U);
              } catch {
              }
              sn.push(e), L.onversionchange = je(function($) {
                t.vcFired = !0, e.on("versionchange").fire($);
              }), L.onclose = je(function($) {
                e.on("close").fire($);
              }), p && (R = e._deps, U = _, L = R.indexedDB, R = R.IDBKeyRange, Rr(L) || U === jn || Dr(L, R).put({ name: U }).catch(_e)), O();
            }, g);
          }).catch(function(O) {
            switch (O?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), d();
                break;
              case "VersionError":
                if (0 < a) return a = 0, d();
            }
            return Z.reject(O);
          });
        }
        var m, v = t.dbReadyResolve, x = null, p = !1;
        return Z.race([o, (typeof navigator > "u" ? Z.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(O) {
          function g() {
            return indexedDB.databases().finally(O);
          }
          m = setInterval(g, 100), g();
        }).finally(function() {
          return clearInterval(m);
        }) : Promise.resolve()).then(d)]).then(function() {
          return f(), t.onReadyBeingFired = [], Z.resolve(Fr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function O() {
            if (0 < t.onReadyBeingFired.length) {
              var g = t.onReadyBeingFired.reduce(me, _e);
              return t.onReadyBeingFired = [], Z.resolve(Fr(function() {
                return g(e.vip);
              })).then(O);
            }
          });
        }).finally(function() {
          t.openCanceller === o && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(O) {
          t.dbOpenError = O;
          try {
            x && x.abort();
          } catch {
          }
          return o === t.openCanceller && e._close(), Ve(O);
        }).finally(function() {
          t.openComplete = !0, v();
        }).then(function() {
          var O;
          return p && (O = {}, e.tables.forEach(function(g) {
            g.schema.indexes.forEach(function(_) {
              _.name && (O["idb://".concat(e.name, "/").concat(g.name, "/").concat(_.name)] = new Qe(-1 / 0, [[[]]]));
            }), O["idb://".concat(e.name, "/").concat(g.name, "/")] = O["idb://".concat(e.name, "/").concat(g.name, "/:dels")] = new Qe(-1 / 0, [[[]]]);
          }), Ft(vn).fire(O), Lr(O, !0)), e;
        });
      }
      function qr(e) {
        function t(c) {
          return e.next(c);
        }
        var r = a(t), o = a(function(c) {
          return e.throw(c);
        });
        function a(c) {
          return function(m) {
            var d = c(m), m = d.value;
            return d.done ? m : m && typeof m.then == "function" ? m.then(r, o) : b(m) ? Promise.all(m).then(r, o) : r(m);
          };
        }
        return a(t)();
      }
      function Jn(e, t, r) {
        for (var o = b(e) ? e.slice() : [e], a = 0; a < r; ++a) o.push(t);
        return o;
      }
      var Pa = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema, a = {}, c = [];
          function f(p, O, g) {
            var _ = _n(p), E = a[_] = a[_] || [], T = p == null ? 0 : typeof p == "string" ? 1 : p.length, C = 0 < O, C = u(u({}, g), { name: C ? "".concat(_, "(virtual-from:").concat(g.name, ")") : g.name, lowLevelIndex: g, isVirtual: C, keyTail: O, keyLength: T, extractKey: Pr(p), unique: !C && g.unique });
            return E.push(C), C.isPrimaryKey || c.push(C), 1 < T && f(T === 2 ? p[0] : p.slice(0, T - 1), O + 1, g), E.sort(function(S, I) {
              return S.keyTail - I.keyTail;
            }), C;
          }
          t = f(o.primaryKey.keyPath, 0, o.primaryKey), a[":id"] = [t];
          for (var d = 0, m = o.indexes; d < m.length; d++) {
            var v = m[d];
            f(v.keyPath, 0, v);
          }
          function x(p) {
            var O, g = p.query.index;
            return g.isVirtual ? u(u({}, p), { query: { index: g.lowLevelIndex, range: (O = p.query.range, g = g.keyTail, { type: O.type === 1 ? 2 : O.type, lower: Jn(O.lower, O.lowerOpen ? e.MAX_KEY : e.MIN_KEY, g), lowerOpen: !0, upper: Jn(O.upper, O.upperOpen ? e.MIN_KEY : e.MAX_KEY, g), upperOpen: !0 }) } }) : p;
          }
          return u(u({}, r), { schema: u(u({}, o), { primaryKey: t, indexes: c, getIndexByKeyPath: function(p) {
            return (p = a[_n(p)]) && p[0];
          } }), count: function(p) {
            return r.count(x(p));
          }, query: function(p) {
            return r.query(x(p));
          }, openCursor: function(p) {
            var O = p.query.index, g = O.keyTail, _ = O.isVirtual, E = O.keyLength;
            return _ ? r.openCursor(x(p)).then(function(C) {
              return C && T(C);
            }) : r.openCursor(p);
            function T(C) {
              return Object.create(C, { continue: { value: function(S) {
                S != null ? C.continue(Jn(S, p.reverse ? e.MAX_KEY : e.MIN_KEY, g)) : p.unique ? C.continue(C.key.slice(0, E).concat(p.reverse ? e.MIN_KEY : e.MAX_KEY, g)) : C.continue();
              } }, continuePrimaryKey: { value: function(S, I) {
                C.continuePrimaryKey(Jn(S, e.MAX_KEY, g), I);
              } }, primaryKey: { get: function() {
                return C.primaryKey;
              } }, key: { get: function() {
                var S = C.key;
                return E === 1 ? S[0] : S.slice(0, E);
              } }, value: { get: function() {
                return C.value;
              } } });
            }
          } });
        } });
      } };
      function Ur(e, t, r, o) {
        return r = r || {}, o = o || "", y(e).forEach(function(a) {
          var c, f, d;
          D(t, a) ? (c = e[a], f = t[a], typeof c == "object" && typeof f == "object" && c && f ? (d = Be(c)) !== Be(f) ? r[o + a] = t[a] : d === "Object" ? Ur(c, f, r, o + a + ".") : c !== f && (r[o + a] = t[a]) : c !== f && (r[o + a] = t[a])) : r[o + a] = void 0;
        }), y(t).forEach(function(a) {
          D(e, a) || (r[o + a] = t[a]);
        }), r;
      }
      function Vr(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var Sa = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema.primaryKey;
          return u(u({}, r), { mutate: function(a) {
            var c = re.trans, f = c.table(t).hook, d = f.deleting, m = f.creating, v = f.updating;
            switch (a.type) {
              case "add":
                if (m.fire === _e) break;
                return c._promise("readwrite", function() {
                  return x(a);
                }, !0);
              case "put":
                if (m.fire === _e && v.fire === _e) break;
                return c._promise("readwrite", function() {
                  return x(a);
                }, !0);
              case "delete":
                if (d.fire === _e) break;
                return c._promise("readwrite", function() {
                  return x(a);
                }, !0);
              case "deleteRange":
                if (d.fire === _e) break;
                return c._promise("readwrite", function() {
                  return function p(O, g, _) {
                    return r.query({ trans: O, values: !1, query: { index: o, range: g }, limit: _ }).then(function(E) {
                      var T = E.result;
                      return x({ type: "delete", keys: T, trans: O }).then(function(C) {
                        return 0 < C.numFailures ? Promise.reject(C.failures[0]) : T.length < _ ? { failures: [], numFailures: 0, lastResult: void 0 } : p(O, u(u({}, g), { lower: T[T.length - 1], lowerOpen: !0 }), _);
                      });
                    });
                  }(a.trans, a.range, 1e4);
                }, !0);
            }
            return r.mutate(a);
            function x(p) {
              var O, g, _, E = re.trans, T = p.keys || Vr(o, p);
              if (!T) throw new Error("Keys missing");
              return (p = p.type === "add" || p.type === "put" ? u(u({}, p), { keys: T }) : u({}, p)).type !== "delete" && (p.values = l([], p.values)), p.keys && (p.keys = l([], p.keys)), O = r, _ = T, ((g = p).type === "add" ? Promise.resolve([]) : O.getMany({ trans: g.trans, keys: _, cache: "immutable" })).then(function(C) {
                var S = T.map(function(I, R) {
                  var L, Y, U, $ = C[R], J = { onerror: null, onsuccess: null };
                  return p.type === "delete" ? d.fire.call(J, I, $, E) : p.type === "add" || $ === void 0 ? (L = m.fire.call(J, I, p.values[R], E), I == null && L != null && (p.keys[R] = I = L, o.outbound || W(p.values[R], o.keyPath, I))) : (L = Ur($, p.values[R]), (Y = v.fire.call(J, L, I, $, E)) && (U = p.values[R], Object.keys(Y).forEach(function(z) {
                    D(U, z) ? U[z] = Y[z] : W(U, z, Y[z]);
                  }))), J;
                });
                return r.mutate(p).then(function(I) {
                  for (var R = I.failures, L = I.results, Y = I.numFailures, I = I.lastResult, U = 0; U < T.length; ++U) {
                    var $ = (L || T)[U], J = S[U];
                    $ == null ? J.onerror && J.onerror(R[U]) : J.onsuccess && J.onsuccess(p.type === "put" && C[U] ? p.values[U] : $);
                  }
                  return { failures: R, results: L, numFailures: Y, lastResult: I };
                }).catch(function(I) {
                  return S.forEach(function(R) {
                    return R.onerror && R.onerror(I);
                  }), Promise.reject(I);
                });
              });
            }
          } });
        } });
      } };
      function $i(e, t, r) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var o = [], a = 0, c = 0; a < t.keys.length && c < e.length; ++a) Ne(t.keys[a], e[c]) === 0 && (o.push(r ? Ee(t.values[a]) : t.values[a]), ++c);
          return o.length === e.length ? o : null;
        } catch {
          return null;
        }
      }
      var ka = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var r = e.table(t);
          return u(u({}, r), { getMany: function(o) {
            if (!o.cache) return r.getMany(o);
            var a = $i(o.keys, o.trans._cache, o.cache === "clone");
            return a ? Z.resolve(a) : r.getMany(o).then(function(c) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? Ee(c) : c }, c;
            });
          }, mutate: function(o) {
            return o.type !== "add" && (o.trans._cache = null), r.mutate(o);
          } });
        } };
      } };
      function Wi(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Gi(e, t) {
        switch (e) {
          case "query":
            return t.values && !t.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return !1;
        }
      }
      var Ia = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, r = new Qe(e.MIN_KEY, e.MAX_KEY);
        return u(u({}, e), { transaction: function(o, a, c) {
          if (re.subscr && a !== "readonly") throw new B.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(re.querier));
          return e.transaction(o, a, c);
        }, table: function(o) {
          var a = e.table(o), c = a.schema, f = c.primaryKey, p = c.indexes, d = f.extractKey, m = f.outbound, v = f.autoIncrement && p.filter(function(g) {
            return g.compound && g.keyPath.includes(f.keyPath);
          }), x = u(u({}, a), { mutate: function(g) {
            function _(z) {
              return z = "idb://".concat(t, "/").concat(o, "/").concat(z), I[z] || (I[z] = new Qe());
            }
            var E, T, C, S = g.trans, I = g.mutatedParts || (g.mutatedParts = {}), R = _(""), L = _(":dels"), Y = g.type, J = g.type === "deleteRange" ? [g.range] : g.type === "delete" ? [g.keys] : g.values.length < 50 ? [Vr(f, g).filter(function(z) {
              return z;
            }), g.values] : [], U = J[0], $ = J[1], J = g.trans._cache;
            return b(U) ? (R.addKeys(U), (J = Y === "delete" || U.length === $.length ? $i(U, J) : null) || L.addKeys(U), (J || $) && (E = _, T = J, C = $, c.indexes.forEach(function(z) {
              var ee = E(z.name || "");
              function ve(ge) {
                return ge != null ? z.extractKey(ge) : null;
              }
              function Se(ge) {
                return z.multiEntry && b(ge) ? ge.forEach(function(Le) {
                  return ee.addKey(Le);
                }) : ee.addKey(ge);
              }
              (T || C).forEach(function(ge, ze) {
                var ye = T && ve(T[ze]), ze = C && ve(C[ze]);
                Ne(ye, ze) !== 0 && (ye != null && Se(ye), ze != null && Se(ze));
              });
            }))) : U ? ($ = { from: ($ = U.lower) !== null && $ !== void 0 ? $ : e.MIN_KEY, to: ($ = U.upper) !== null && $ !== void 0 ? $ : e.MAX_KEY }, L.add($), R.add($)) : (R.add(r), L.add(r), c.indexes.forEach(function(z) {
              return _(z.name).add(r);
            })), a.mutate(g).then(function(z) {
              return !U || g.type !== "add" && g.type !== "put" || (R.addKeys(z.results), v && v.forEach(function(ee) {
                for (var ve = g.values.map(function(ye) {
                  return ee.extractKey(ye);
                }), Se = ee.keyPath.findIndex(function(ye) {
                  return ye === f.keyPath;
                }), ge = 0, Le = z.results.length; ge < Le; ++ge) ve[ge][Se] = z.results[ge];
                _(ee.name).addKeys(ve);
              })), S.mutatedParts = Qn(S.mutatedParts || {}, I), z;
            });
          } }), p = function(_) {
            var E = _.query, _ = E.index, E = E.range;
            return [_, new Qe((_ = E.lower) !== null && _ !== void 0 ? _ : e.MIN_KEY, (E = E.upper) !== null && E !== void 0 ? E : e.MAX_KEY)];
          }, O = { get: function(g) {
            return [f, new Qe(g.key)];
          }, getMany: function(g) {
            return [f, new Qe().addKeys(g.keys)];
          }, count: p, query: p, openCursor: p };
          return y(O).forEach(function(g) {
            x[g] = function(_) {
              var E = re.subscr, T = !!E, C = Wi(re, a) && Gi(g, _) ? _.obsSet = {} : E;
              if (T) {
                var S = function($) {
                  return $ = "idb://".concat(t, "/").concat(o, "/").concat($), C[$] || (C[$] = new Qe());
                }, I = S(""), R = S(":dels"), E = O[g](_), T = E[0], E = E[1];
                if ((g === "query" && T.isPrimaryKey && !_.values ? R : S(T.name || "")).add(E), !T.isPrimaryKey) {
                  if (g !== "count") {
                    var L = g === "query" && m && _.values && a.query(u(u({}, _), { values: !1 }));
                    return a[g].apply(this, arguments).then(function($) {
                      if (g === "query") {
                        if (m && _.values) return L.then(function(ve) {
                          return ve = ve.result, I.addKeys(ve), $;
                        });
                        var J = _.values ? $.result.map(d) : $.result;
                        (_.values ? I : R).addKeys(J);
                      } else if (g === "openCursor") {
                        var z = $, ee = _.values;
                        return z && Object.create(z, { key: { get: function() {
                          return R.addKey(z.primaryKey), z.key;
                        } }, primaryKey: { get: function() {
                          var ve = z.primaryKey;
                          return R.addKey(ve), ve;
                        } }, value: { get: function() {
                          return ee && I.addKey(z.primaryKey), z.value;
                        } } });
                      }
                      return $;
                    });
                  }
                  R.add(r);
                }
              }
              return a[g].apply(this, arguments);
            };
          }), x;
        } });
      } };
      function Yi(e, t, r) {
        if (r.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var o = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return r.numFailures === o ? null : (t = u({}, t), b(t.keys) && (t.keys = t.keys.filter(function(a, c) {
          return !(c in r.failures);
        })), "values" in t && b(t.values) && (t.values = t.values.filter(function(a, c) {
          return !(c in r.failures);
        })), t);
      }
      function Hr(e, t) {
        return r = e, ((o = t).lower === void 0 || (o.lowerOpen ? 0 < Ne(r, o.lower) : 0 <= Ne(r, o.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? Ne(e, t.upper) < 0 : Ne(e, t.upper) <= 0));
        var r, o;
      }
      function Xi(e, t, O, o, a, c) {
        if (!O || O.length === 0) return e;
        var f = t.query.index, d = f.multiEntry, m = t.query.range, v = o.schema.primaryKey.extractKey, x = f.extractKey, p = (f.lowLevelIndex || f).extractKey, O = O.reduce(function(g, _) {
          var E = g, T = [];
          if (_.type === "add" || _.type === "put") for (var C = new Qe(), S = _.values.length - 1; 0 <= S; --S) {
            var I, R = _.values[S], L = v(R);
            C.hasKey(L) || (I = x(R), (d && b(I) ? I.some(function(z) {
              return Hr(z, m);
            }) : Hr(I, m)) && (C.addKey(L), T.push(R)));
          }
          switch (_.type) {
            case "add":
              var Y = new Qe().addKeys(t.values ? g.map(function(ee) {
                return v(ee);
              }) : g), E = g.concat(t.values ? T.filter(function(ee) {
                return ee = v(ee), !Y.hasKey(ee) && (Y.addKey(ee), !0);
              }) : T.map(function(ee) {
                return v(ee);
              }).filter(function(ee) {
                return !Y.hasKey(ee) && (Y.addKey(ee), !0);
              }));
              break;
            case "put":
              var U = new Qe().addKeys(_.values.map(function(ee) {
                return v(ee);
              }));
              E = g.filter(function(ee) {
                return !U.hasKey(t.values ? v(ee) : ee);
              }).concat(t.values ? T : T.map(function(ee) {
                return v(ee);
              }));
              break;
            case "delete":
              var $ = new Qe().addKeys(_.keys);
              E = g.filter(function(ee) {
                return !$.hasKey(t.values ? v(ee) : ee);
              });
              break;
            case "deleteRange":
              var J = _.range;
              E = g.filter(function(ee) {
                return !Hr(v(ee), J);
              });
          }
          return E;
        }, e);
        return O === e ? e : (O.sort(function(g, _) {
          return Ne(p(g), p(_)) || Ne(v(g), v(_));
        }), t.limit && t.limit < 1 / 0 && (O.length > t.limit ? O.length = t.limit : e.length === t.limit && O.length < t.limit && (a.dirty = !0)), c ? Object.freeze(O) : O);
      }
      function Qi(e, t) {
        return Ne(e.lower, t.lower) === 0 && Ne(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function Da(e, t) {
        return function(r, o, a, c) {
          if (r === void 0) return o !== void 0 ? -1 : 0;
          if (o === void 0) return 1;
          if ((o = Ne(r, o)) === 0) {
            if (a && c) return 0;
            if (a) return 1;
            if (c) return -1;
          }
          return o;
        }(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function(r, o, a, c) {
          if (r === void 0) return o !== void 0 ? 1 : 0;
          if (o === void 0) return -1;
          if ((o = Ne(r, o)) === 0) {
            if (a && c) return 0;
            if (a) return -1;
            if (c) return 1;
          }
          return o;
        }(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function Ra(e, t, r, o) {
        e.subscribers.add(r), o.addEventListener("abort", function() {
          var a, c;
          e.subscribers.delete(r), e.subscribers.size === 0 && (a = e, c = t, setTimeout(function() {
            a.subscribers.size === 0 && Ce(c, a);
          }, 3e3));
        });
      }
      var Fa = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return u(u({}, e), { transaction: function(r, o, a) {
          var c, f, d = e.transaction(r, o, a);
          return o === "readwrite" && (f = (c = new AbortController()).signal, a = function(m) {
            return function() {
              if (c.abort(), o === "readwrite") {
                for (var v = /* @__PURE__ */ new Set(), x = 0, p = r; x < p.length; x++) {
                  var O = p[x], g = Ht["idb://".concat(t, "/").concat(O)];
                  if (g) {
                    var _ = e.table(O), E = g.optimisticOps.filter(function(ee) {
                      return ee.trans === d;
                    });
                    if (d._explicit && m && d.mutatedParts) for (var T = 0, C = Object.values(g.queries.query); T < C.length; T++) for (var S = 0, I = (Y = C[T]).slice(); S < I.length; S++) Kr((U = I[S]).obsSet, d.mutatedParts) && (Ce(Y, U), U.subscribers.forEach(function(ee) {
                      return v.add(ee);
                    }));
                    else if (0 < E.length) {
                      g.optimisticOps = g.optimisticOps.filter(function(ee) {
                        return ee.trans !== d;
                      });
                      for (var R = 0, L = Object.values(g.queries.query); R < L.length; R++) for (var Y, U, $, J = 0, z = (Y = L[R]).slice(); J < z.length; J++) (U = z[J]).res != null && d.mutatedParts && (m && !U.dirty ? ($ = Object.isFrozen(U.res), $ = Xi(U.res, U.req, E, _, U, $), U.dirty ? (Ce(Y, U), U.subscribers.forEach(function(ee) {
                        return v.add(ee);
                      })) : $ !== U.res && (U.res = $, U.promise = Z.resolve({ result: $ }))) : (U.dirty && Ce(Y, U), U.subscribers.forEach(function(ee) {
                        return v.add(ee);
                      })));
                    }
                  }
                }
                v.forEach(function(ee) {
                  return ee();
                });
              }
            };
          }, d.addEventListener("abort", a(!1), { signal: f }), d.addEventListener("error", a(!1), { signal: f }), d.addEventListener("complete", a(!0), { signal: f })), d;
        }, table: function(r) {
          var o = e.table(r), a = o.schema.primaryKey;
          return u(u({}, o), { mutate: function(c) {
            var f = re.trans;
            if (a.outbound || f.db._options.cache === "disabled" || f.explicit || f.idbtrans.mode !== "readwrite") return o.mutate(c);
            var d = Ht["idb://".concat(t, "/").concat(r)];
            return d ? (f = o.mutate(c), c.type !== "add" && c.type !== "put" || !(50 <= c.values.length || Vr(a, c).some(function(m) {
              return m == null;
            })) ? (d.optimisticOps.push(c), c.mutatedParts && zn(c.mutatedParts), f.then(function(m) {
              0 < m.numFailures && (Ce(d.optimisticOps, c), (m = Yi(0, c, m)) && d.optimisticOps.push(m), c.mutatedParts && zn(c.mutatedParts));
            }), f.catch(function() {
              Ce(d.optimisticOps, c), c.mutatedParts && zn(c.mutatedParts);
            })) : f.then(function(m) {
              var v = Yi(0, u(u({}, c), { values: c.values.map(function(x, p) {
                var O;
                return m.failures[p] ? x : (x = (O = a.keyPath) !== null && O !== void 0 && O.includes(".") ? Ee(x) : u({}, x), W(x, a.keyPath, m.results[p]), x);
              }) }), m);
              d.optimisticOps.push(v), queueMicrotask(function() {
                return c.mutatedParts && zn(c.mutatedParts);
              });
            }), f) : o.mutate(c);
          }, query: function(c) {
            if (!Wi(re, o) || !Gi("query", c)) return o.query(c);
            var f = ((v = re.trans) === null || v === void 0 ? void 0 : v.db._options.cache) === "immutable", p = re, d = p.requery, m = p.signal, v = function(_, E, T, C) {
              var S = Ht["idb://".concat(_, "/").concat(E)];
              if (!S) return [];
              if (!(E = S.queries[T])) return [null, !1, S, null];
              var I = E[(C.query ? C.query.index.name : null) || ""];
              if (!I) return [null, !1, S, null];
              switch (T) {
                case "query":
                  var R = I.find(function(L) {
                    return L.req.limit === C.limit && L.req.values === C.values && Qi(L.req.query.range, C.query.range);
                  });
                  return R ? [R, !0, S, I] : [I.find(function(L) {
                    return ("limit" in L.req ? L.req.limit : 1 / 0) >= C.limit && (!C.values || L.req.values) && Da(L.req.query.range, C.query.range);
                  }), !1, S, I];
                case "count":
                  return R = I.find(function(L) {
                    return Qi(L.req.query.range, C.query.range);
                  }), [R, !!R, S, I];
              }
            }(t, r, "query", c), x = v[0], p = v[1], O = v[2], g = v[3];
            return x && p ? x.obsSet = c.obsSet : (p = o.query(c).then(function(_) {
              var E = _.result;
              if (x && (x.res = E), f) {
                for (var T = 0, C = E.length; T < C; ++T) Object.freeze(E[T]);
                Object.freeze(E);
              } else _.result = Ee(E);
              return _;
            }).catch(function(_) {
              return g && x && Ce(g, x), Promise.reject(_);
            }), x = { obsSet: c.obsSet, promise: p, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, g ? g.push(x) : (g = [x], (O = O || (Ht["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = g)), Ra(x, g, d, m), x.promise.then(function(_) {
              return { result: Xi(_.result, c, O?.optimisticOps, o, x, f) };
            });
          } });
        } });
      } };
      function Zn(e, t) {
        return new Proxy(e, { get: function(r, o, a) {
          return o === "db" ? t : Reflect.get(r, o, a);
        } });
      }
      var Tt = (He.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new B.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new B.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(Ea), r.stores({}), this._state.autoSchema = !1, r);
      }, He.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || re.letThrough || this._vip) ? e() : new Z(function(r, o) {
          if (t._state.openComplete) return o(new B.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new B.DatabaseClosed());
            t.open().catch(_e);
          }
          t._state.dbReadyPromise.then(r, o);
        }).then(e);
      }, He.prototype.use = function(e) {
        var t = e.stack, r = e.create, o = e.level, a = e.name;
        return a && this.unuse({ stack: t, name: a }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: r, level: o ?? 10, name: a }), e.sort(function(c, f) {
          return c.level - f.level;
        }), this;
      }, He.prototype.unuse = function(e) {
        var t = e.stack, r = e.name, o = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(a) {
          return o ? a.create !== o : !!r && a.name !== r;
        })), this;
      }, He.prototype.open = function() {
        var e = this;
        return qt(bt, function() {
          return Na(e);
        });
      }, He.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, t = sn.indexOf(this);
        if (0 <= t && sn.splice(t, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new Z(function(r) {
          e.dbReadyResolve = r;
        }), e.openCanceller = new Z(function(r, o) {
          e.cancelOpen = o;
        }));
      }, He.prototype.close = function(r) {
        var t = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        t ? (r.isBeingOpened && r.cancelOpen(new B.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new B.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, He.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", o = this._state;
        return new Z(function(a, c) {
          function f() {
            t.close(e);
            var d = t._deps.indexedDB.deleteDatabase(t.name);
            d.onsuccess = je(function() {
              var m, v, x;
              m = t._deps, v = t.name, x = m.indexedDB, m = m.IDBKeyRange, Rr(x) || v === jn || Dr(x, m).delete(v).catch(_e), a();
            }), d.onerror = mt(c), d.onblocked = t._fireOnBlocked;
          }
          if (r) throw new B.InvalidArgument("Invalid closeOptions argument to db.delete()");
          o.isBeingOpened ? o.dbReadyPromise.then(f) : f();
        });
      }, He.prototype.backendDB = function() {
        return this.idbdb;
      }, He.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, He.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, He.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, He.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(He.prototype, "tables", { get: function() {
        var e = this;
        return y(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), He.prototype.transaction = function() {
        var e = (function(t, r, o) {
          var a = arguments.length;
          if (a < 2) throw new B.InvalidArgument("Too few arguments");
          for (var c = new Array(a - 1); --a; ) c[a - 1] = arguments[a];
          return o = c.pop(), [t, ie(c), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, He.prototype._transaction = function(e, t, r) {
        var o = this, a = re.trans;
        a && a.db === this && e.indexOf("!") === -1 || (a = null);
        var c, f, d = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (f = t.map(function(v) {
            if (v = v instanceof o.Table ? v.name : v, typeof v != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return v;
          }), e == "r" || e === xr) c = xr;
          else {
            if (e != "rw" && e != Tr) throw new B.InvalidArgument("Invalid transaction mode: " + e);
            c = Tr;
          }
          if (a) {
            if (a.mode === xr && c === Tr) {
              if (!d) throw new B.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              a = null;
            }
            a && f.forEach(function(v) {
              if (a && a.storeNames.indexOf(v) === -1) {
                if (!d) throw new B.SubTransaction("Table " + v + " not included in parent transaction.");
                a = null;
              }
            }), d && a && !a.active && (a = null);
          }
        } catch (v) {
          return a ? a._promise(null, function(x, p) {
            p(v);
          }) : Ve(v);
        }
        var m = (function v(x, p, O, g, _) {
          return Z.resolve().then(function() {
            var E = re.transless || re, T = x._createTransaction(p, O, x._dbSchema, g);
            if (T.explicit = !0, E = { trans: T, transless: E }, g) T.idbtrans = g.idbtrans;
            else try {
              T.create(), T.idbtrans._explicit = !0, x._state.PR1398_maxLoop = 3;
            } catch (I) {
              return I.name === N.InvalidState && x.isOpen() && 0 < --x._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), x.close({ disableAutoOpen: !1 }), x.open().then(function() {
                return v(x, p, O, null, _);
              })) : Ve(I);
            }
            var C, S = lt(_);
            return S && an(), E = Z.follow(function() {
              var I;
              (C = _.call(T, T)) && (S ? (I = It.bind(null, null), C.then(I, I)) : typeof C.next == "function" && typeof C.throw == "function" && (C = qr(C)));
            }, E), (C && typeof C.then == "function" ? Z.resolve(C).then(function(I) {
              return T.active ? I : Ve(new B.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : E.then(function() {
              return C;
            })).then(function(I) {
              return g && T._resolve(), T._completion.then(function() {
                return I;
              });
            }).catch(function(I) {
              return T._reject(I), Ve(I);
            });
          });
        }).bind(null, this, c, f, a, r);
        return a ? a._promise(c, m, "lock") : re.trans ? qt(re.transless, function() {
          return o._whenReady(m);
        }) : this._whenReady(m);
      }, He.prototype.table = function(e) {
        if (!D(this._allTables, e)) throw new B.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, He);
      function He(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var o = He.dependencies;
        this._options = t = u({ addons: He.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var a, c, f, d, m, v = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: _e, dbReadyPromise: null, cancelOpen: _e, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        v.dbReadyPromise = new Z(function(p) {
          v.dbReadyResolve = p;
        }), v.openCanceller = new Z(function(p, O) {
          v.cancelOpen = O;
        }), this._state = v, this.name = e, this.on = pn(this, "populate", "blocked", "versionchange", "close", { ready: [me, _e] }), this.once = function(p, O) {
          var g = function() {
            for (var _ = [], E = 0; E < arguments.length; E++) _[E] = arguments[E];
            r.on(p).unsubscribe(g), O.apply(r, _);
          };
          return r.on(p, g);
        }, this.on.ready.subscribe = q(this.on.ready.subscribe, function(p) {
          return function(O, g) {
            He.vip(function() {
              var _, E = r._state;
              E.openComplete ? (E.dbOpenError || Z.resolve().then(O), g && p(O)) : E.onReadyBeingFired ? (E.onReadyBeingFired.push(O), g && p(O)) : (p(O), _ = r, g || p(function T() {
                _.on.ready.unsubscribe(O), _.on.ready.unsubscribe(T);
              }));
            });
          };
        }), this.Collection = (a = this, yn(ga.prototype, function(C, T) {
          this.db = a;
          var g = Ci, _ = null;
          if (T) try {
            g = T();
          } catch (S) {
            _ = S;
          }
          var E = C._ctx, T = E.table, C = T.hook.reading.fire;
          this._ctx = { table: T, index: E.index, isPrimKey: !E.index || T.schema.primKey.keyPath && E.index === T.schema.primKey.name, range: g, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: _, or: E.or, valueMapper: C !== F ? C : null };
        })), this.Table = (c = this, yn(Si.prototype, function(p, O, g) {
          this.db = c, this._tx = g, this.name = p, this.schema = O, this.hook = c._allTables[p] ? c._allTables[p].hook : pn(null, { creating: [fe, _e], reading: [j, F], updating: [ce, _e], deleting: [ae, _e] });
        })), this.Transaction = (f = this, yn(_a.prototype, function(p, O, g, _, E) {
          var T = this;
          p !== "readonly" && O.forEach(function(C) {
            C = (C = g[C]) === null || C === void 0 ? void 0 : C.yProps, C && (O = O.concat(C.map(function(S) {
              return S.updatesTable;
            })));
          }), this.db = f, this.mode = p, this.storeNames = O, this.schema = g, this.chromeTransactionDurability = _, this.idbtrans = null, this.on = pn(this, "complete", "error", "abort"), this.parent = E || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Z(function(C, S) {
            T._resolve = C, T._reject = S;
          }), this._completion.then(function() {
            T.active = !1, T.on.complete.fire();
          }, function(C) {
            var S = T.active;
            return T.active = !1, T.on.error.fire(C), T.parent ? T.parent._reject(C) : S && T.idbtrans && T.idbtrans.abort(), Ve(C);
          });
        })), this.Version = (d = this, yn(Aa.prototype, function(p) {
          this.db = d, this._cfg = { version: p, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (m = this, yn(Bi.prototype, function(p, O, g) {
          if (this.db = m, this._ctx = { table: p, index: O === ":id" ? null : O, or: g }, this._cmp = this._ascending = Ne, this._descending = function(_, E) {
            return Ne(E, _);
          }, this._max = function(_, E) {
            return 0 < Ne(_, E) ? _ : E;
          }, this._min = function(_, E) {
            return Ne(_, E) < 0 ? _ : E;
          }, this._IDBKeyRange = m._deps.IDBKeyRange, !this._IDBKeyRange) throw new B.MissingAPI();
        })), this.on("versionchange", function(p) {
          0 < p.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(p) {
          !p.newVersion || p.newVersion < p.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(p.oldVersion / 10));
        }), this._maxKey = bn(t.IDBKeyRange), this._createTransaction = function(p, O, g, _) {
          return new r.Transaction(p, O, g, r._options.chromeTransactionDurability, _);
        }, this._fireOnBlocked = function(p) {
          r.on("blocked").fire(p), sn.filter(function(O) {
            return O.name === r.name && O !== r && !O._state.vcFired;
          }).map(function(O) {
            return O.on("versionchange").fire(p);
          });
        }, this.use(ka), this.use(Fa), this.use(Ia), this.use(Pa), this.use(Sa);
        var x = new Proxy(this, { get: function(p, O, g) {
          if (O === "_vip") return !0;
          if (O === "table") return function(E) {
            return Zn(r.table(E), x);
          };
          var _ = Reflect.get(p, O, g);
          return _ instanceof Si ? Zn(_, x) : O === "tables" ? _.map(function(E) {
            return Zn(E, x);
          }) : O === "_createTransaction" ? function() {
            return Zn(_.apply(this, arguments), x);
          } : _;
        } });
        this.vip = x, o.forEach(function(p) {
          return p(r);
        });
      }
      var er, ct = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Ba = ($r.prototype.subscribe = function(e, t, r) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: r });
      }, $r.prototype[ct] = function() {
        return this;
      }, $r);
      function $r(e) {
        this._subscribe = e;
      }
      try {
        er = { indexedDB: h.indexedDB || h.mozIndexedDB || h.webkitIndexedDB || h.msIndexedDB, IDBKeyRange: h.IDBKeyRange || h.webkitIDBKeyRange };
      } catch {
        er = { indexedDB: null, IDBKeyRange: null };
      }
      function zi(e) {
        var t, r = !1, o = new Ba(function(a) {
          var c = lt(e), f, d = !1, m = {}, v = {}, x = { get closed() {
            return d;
          }, unsubscribe: function() {
            d || (d = !0, f && f.abort(), p && Ft.storagemutated.unsubscribe(g));
          } };
          a.start && a.start(x);
          var p = !1, O = function() {
            return wr(_);
          }, g = function(E) {
            Qn(m, E), Kr(v, m) && O();
          }, _ = function() {
            var E, T, C;
            !d && er.indexedDB && (m = {}, E = {}, f && f.abort(), f = new AbortController(), C = function(S) {
              var I = rn();
              try {
                c && an();
                var R = kt(e, S);
                return R = c ? R.finally(It) : R;
              } finally {
                I && on();
              }
            }(T = { subscr: E, signal: f.signal, requery: O, querier: e, trans: null }), Promise.resolve(C).then(function(S) {
              r = !0, t = S, d || T.signal.aborted || (m = {}, function(I) {
                for (var R in I) if (D(I, R)) return;
                return 1;
              }(v = E) || p || (Ft(vn, g), p = !0), wr(function() {
                return !d && a.next && a.next(S);
              }));
            }, function(S) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(S?.name) || d || wr(function() {
                d || a.error && a.error(S);
              });
            }));
          };
          return setTimeout(O, 0), x;
        });
        return o.hasValue = function() {
          return r;
        }, o.getValue = function() {
          return t;
        }, o;
      }
      var $t = Tt;
      function Wr(e) {
        var t = Bt;
        try {
          Bt = !0, Ft.storagemutated.fire(e), Lr(e, !0);
        } finally {
          Bt = t;
        }
      }
      H($t, u(u({}, Ue), { delete: function(e) {
        return new $t(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new $t(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = $t.dependencies, r = t.indexedDB, t = t.IDBKeyRange, (Rr(r) ? Promise.resolve(r.databases()).then(function(o) {
            return o.map(function(a) {
              return a.name;
            }).filter(function(a) {
              return a !== jn;
            });
          }) : Dr(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return Ve(new B.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          A(this, e);
        };
      }, ignoreTransaction: function(e) {
        return re.trans ? qt(re.transless, e) : e();
      }, vip: Fr, async: function(e) {
        return function() {
          try {
            var t = qr(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : Z.resolve(t);
          } catch (r) {
            return Ve(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = qr(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : Z.resolve(o);
        } catch (a) {
          return Ve(a);
        }
      }, currentTransaction: { get: function() {
        return re.trans || null;
      } }, waitFor: function(e, t) {
        return t = Z.resolve(typeof e == "function" ? $t.ignoreTransaction(e) : e).timeout(t || 6e4), re.trans ? re.trans.waitFor(t) : t;
      }, Promise: Z, debug: { get: function() {
        return le;
      }, set: function(e) {
        he(e);
      } }, derive: X, extend: A, props: H, override: q, Events: pn, on: Ft, liveQuery: zi, extendObservabilitySet: Qn, getByKeyPath: se, setByKeyPath: W, delByKeyPath: function(e, t) {
        typeof t == "string" ? W(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          W(e, r, void 0);
        });
      }, shallowClone: te, deepClone: Ee, getObjectDiff: Ur, cmp: Ne, asap: oe, minKey: -1 / 0, addons: [], connections: sn, errnames: N, dependencies: er, cache: Ht, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), $t.maxKey = bn($t.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Ft(vn, function(e) {
        Bt || (e = new CustomEvent(Cr, { detail: e }), Bt = !0, dispatchEvent(e), Bt = !1);
      }), addEventListener(Cr, function(e) {
        e = e.detail, Bt || Wr(e);
      }));
      var fn, Bt = !1, Ji = function() {
      };
      return typeof BroadcastChannel < "u" && ((Ji = function() {
        (fn = new BroadcastChannel(Cr)).onmessage = function(e) {
          return e.data && Wr(e.data);
        };
      })(), typeof fn.unref == "function" && fn.unref(), Ft(vn, function(e) {
        Bt || fn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Tt.disableBfCache && e.persisted) {
          le && console.debug("Dexie: handling persisted pagehide"), fn?.close();
          for (var t = 0, r = sn; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Tt.disableBfCache && e.persisted && (le && console.debug("Dexie: handling persisted pageshow"), Ji(), Wr({ all: new Qe(-1 / 0, [[]]) }));
      })), Z.rejectionMapper = function(e, t) {
        return !e || e instanceof Pt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !V[e.name] ? e : (t = new V[e.name](t || e.message, e), "stack" in e && G(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, he(le), u(Tt, Object.freeze({ __proto__: null, Dexie: Tt, liveQuery: zi, Entity: Ai, cmp: Ne, PropModification: mn, replacePrefix: function(e, t) {
        return new mn({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new mn({ add: e });
      }, remove: function(e) {
        return new mn({ remove: e });
      }, default: Tt, RangeSet: Qe, mergeRanges: xn, rangesOverlap: qi }), { default: Tt }), Tt;
    });
  }(Bo)), Bo.exports;
}
var Wh = $h();
const gs = /* @__PURE__ */ Vh(Wh), mu = Symbol.for("Dexie"), gi = globalThis[mu] || (globalThis[mu] = gs);
if (gs.semVer !== gi.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${gs.semVer} and ${gi.semVer}`);
const {
  liveQuery: Bp,
  mergeRanges: Kp,
  rangesOverlap: jp,
  RangeSet: Mp,
  cmp: Lp,
  Entity: qp,
  PropModification: Up,
  replacePrefix: Vp,
  add: Gh,
  remove: Hp,
  DexieYProvider: $p
} = gi;
function Us(n) {
  return {
    refetchRecord: i,
    addRecord: s,
    createRecord: h,
    updateRecord: u,
    deleteRecord: l,
    findRecordById: k,
    findRecordByAttribute: ne,
    findRecordsByTagName: D,
    findChildRecords: X,
    findChildRecordsByTagName: Te,
    findChildRecordsWithinDepthAndGivenTagName: ue,
    findDescendants: q,
    findAncestors: M,
    findFirstAncestorByTagName: oe,
    ensureRelationship: b,
    removeRelationship: A,
    findRootSCL: K,
    recordExists: y,
    findOneRecordByAttribute: H,
    findAllRecordsByAttribute: G,
    close: se,
    extractAttr: Xo,
    updateAttr: Yh,
    copyRecordTreeRecursively: la,
    db: n
  };
  async function i(W) {
    const te = await k(W.id);
    if (!te)
      throw new Error(`could not re-fetch record id:${W.id}`);
    return te;
  }
  async function s(W) {
    const te = { ...W, id: crypto.randomUUID() };
    try {
      return await n.table(Yt).add(te), te;
    } catch (P) {
      const ie = {
        msg: "could not add record",
        db: n.name,
        newRecord: te,
        err: P
      };
      throw console.error(ie), new Error(JSON.stringify(ie));
    }
  }
  async function u(W) {
    try {
      if (await n.table(Yt).update(W.id, W) < 1) {
        const P = { msg: "nothing has been updated", record: W };
        throw console.error(P), new Error(JSON.stringify(P));
      }
    } catch (te) {
      console.error(te);
    }
  }
  async function l(W) {
    try {
      if (W.children)
        for (const te of W.children) {
          const P = await k(te.id);
          if (!P) {
            console.warn({
              msg: "deleteRecord: child relationship found but not child record, continuing",
              child: te
            });
            continue;
          }
          await l(P);
        }
      if (W.parent?.id) {
        const te = await k(W.parent.id);
        if (!te) throw new Error("parent relationship found but not parent record");
        await A(te, W);
      }
      await n.table(Yt).delete(W.id);
    } catch (te) {
      console.error(te);
    }
  }
  async function h(W, te) {
    const ie = {
      ...{
        id: "",
        tagName: "SCL",
        attributes: [],
        parent: null,
        namespace: jc.default,
        value: "",
        children: []
      },
      ...W,
      id: crypto.randomUUID()
    };
    try {
      return await n.table(Yt).add(ie), te && await b(te, ie), {
        ...ie,
        parent: te ? { id: te.id, tagName: te.tagName } : null
      };
    } catch (pe) {
      const de = {
        msg: "could not add record",
        db: n.name,
        table: W.tagName,
        recordToCreate: W,
        err: pe
      };
      throw console.error(de), new Error(JSON.stringify(de));
    }
  }
  async function y(W) {
    return await n.table(Yt).where({ id: W.id }).count() > 0;
  }
  async function b(W, te) {
    const P = W.children?.some((Ee) => Ee.id === te.id), ie = te.parent?.id === W.id;
    let pe = W, de = te;
    if (P || (await n.table(Yt).update(W.id, {
      children: Gh([{ id: te.id, tagName: te.tagName }])
    }), pe = await k(W.id)), ie || (te.parent = {
      id: W.id,
      tagName: W.tagName
    }, await n.table(Yt).update(te.id, { parent: te.parent }), de = await k(te.id)), !pe || !de)
      throw new Error(
        `updating relationship: could not update records: ${pe?.tagName} ${de?.tagName}`
      );
    return [pe, de];
  }
  async function A(W, te) {
    te.parent = null, await u(te), W.children && (W.children = W.children.filter((P) => P.id !== te.id), await u(W), te.parent = null, await u(te));
  }
  async function K() {
    const W = await n.table(Yt).where({ tagName: "SCL" }).toArray();
    if (W.length === 0) throw new Error("there is no SCL element");
    if (W.length > 1)
      throw new Error("there are multiple SCL elements; there can be only one");
    const te = W[0];
    if (te.parent)
      throw new Error("the SCL element has a parent; the SCL should be the root element");
    return te;
  }
  async function k(W) {
    return await n.table(Yt).get(W);
  }
  async function D(W) {
    return await n.table(Yt).where({ tagName: W }).toArray();
  }
  async function H(W, te) {
    const [P] = await Wa(n, { tagNames: [W], attr: te });
    return P;
  }
  async function ne(W) {
    const [te] = await Wa(n, { attr: W });
    return te;
  }
  async function G(W, te) {
    return Wa(n, { tagNames: [W], attr: te });
  }
  async function X(W, te) {
    if (!W.children?.length)
      return [];
    let P = (await n.table(Yt).bulkGet(W.children.map((ie) => ie.id))).filter(Boolean);
    return te?.tagNames && te.tagNames.length > 0 && (P = P.filter((ie) => te?.tagNames?.includes(ie.tagName))), te?.attrs && te.attrs.length > 0 && (P = P.filter(
      (ie) => te.attrs.every(
        (pe) => ie.attributes.some(
          (de) => de.name === pe.name && de.value === pe.value
        )
      )
    )), P;
  }
  async function Te(W, te) {
    const P = await X(W);
    return te.length === 0 ? P : P.filter((pe) => te.includes(pe.tagName));
  }
  async function ue(W, te = be, P = []) {
    const ie = [];
    let pe = [W];
    for (let de = 0; de < te; de++) {
      const Ee = [];
      if (pe.length === 0)
        break;
      for (const qe of pe) {
        const Be = await Te(qe, P);
        Be.length !== 0 && (Ee.push(...Be), ie.push(...Be));
      }
      pe = [...Ee];
    }
    return ie;
  }
  async function q(W, te = {}) {
    const { depth: P = 1 / 0, tagNames: ie = [] } = te, pe = ie.length === 0;
    let de = [], Ee = [W];
    for (let qe = 0; qe < P; qe++) {
      const Be = [];
      if (Ee.length === 0)
        break;
      for (const Ae of Ee) {
        const Oe = await Te(Ae, []);
        Oe.length !== 0 && (Be.push(...Oe), de.push(...Oe));
      }
      Ee = Be;
    }
    return pe || (de = de.filter((qe) => ie.includes(qe.tagName))), te.attr && (de = de.filter((qe) => Xo(qe, te.attr.name)?.value === te.attr.value)), de;
  }
  async function M(W, te = {}) {
    const { depth: P = 1 / 0, tagNames: ie = [] } = te, pe = ie.length === 0, de = [];
    let Ee = W;
    for (let Be = 0; Be < P && Ee.parent?.id; Be++) {
      const Ae = await k(Ee.parent.id);
      if (!Ae)
        break;
      de.push(Ae), Ee = Ae;
    }
    return pe ? de : de.filter((Be) => ie.includes(Be.tagName));
  }
  async function oe(W, te) {
    let P = W;
    for (; P.parent?.id; ) {
      const ie = await k(P.parent.id);
      if (!ie)
        break;
      if (ie.tagName === te)
        return ie;
      P = ie;
    }
  }
  function se() {
    n.close();
  }
}
function Xo(n, i) {
  return n.attributes?.find((s) => s.name === i);
}
function Yh(n, i, s) {
  n.attributes || (n.attributes = []);
  const u = n.attributes?.findIndex((h) => h.name === i);
  u >= 0 ? n.attributes[u].value = s : n.attributes.push({ name: i, value: s });
}
function Jt(n, i) {
  const s = Xo(n, i);
  if (!s)
    throw new Error(
      `record does not have given attribute, recordId=${n.id}, attributeName=${i}`
    );
  return s;
}
async function Wp(n, i, s) {
  try {
    return await n.table(Yt).where({ tagName: i }).filter(
      (l) => !!l.attributes?.some((h) => h.name === s.name && h.value === s.value)
    ).first();
  } catch (u) {
    console.error({ msg: "could not find record by attribute", tagName: i, attr: s, err: u });
  }
}
async function Wa(n, i) {
  try {
    const s = n.table(Yt);
    let u = i.tagNames && i.tagNames.length > 0 ? s.where("tagName").anyOf(i.tagNames) : s.toCollection();
    return i.attr && (u = u.filter((h) => h.attributes?.some(
      (b) => b.name === i.attr.name && b.value === i.attr.value
    ))), await u.toArray();
  } catch (s) {
    return console.error({ msg: "could not find records by options", options: i, err: s }), [];
  }
}
async function la(n, i, s, u) {
  for (const l of n) {
    const h = {
      tagName: l.tagName,
      attributes: [...l.attributes],
      parent: null,
      namespace: l.namespace,
      value: l.value,
      children: []
    };
    let y = await u.createRecord(h);
    y = (await u.ensureRelationship(i, y))[1];
    const A = await s.findChildRecords(l);
    A.length > 0 && await la(A, y, s, u);
  }
}
async function Xh(n, i) {
  const s = new gi(n);
  await s.open();
  const u = Us(s), l = await ed(i), h = l.sdk;
  try {
    const [y] = await u.findRecordsByTagName("DataTypeTemplates");
    if (!y) {
      console.warn("No DataTypeTemplates found in source file");
      return;
    }
    let [b] = await h.findRecordsByTagName("DataTypeTemplates");
    if (!b) {
      const K = await h.findRootSCL();
      if (!K)
        throw new Error("No SCL root found in target database");
      b = await h.createRecord(
        { tagName: "DataTypeTemplates" },
        K
      );
    }
    const A = await u.findChildRecords(y);
    for (const K of A) {
      const k = Jt(K, "id"), [D] = await h.findAllRecordsByAttribute(
        K.tagName,
        {
          name: "id",
          value: k.value
        }
      );
      if (D)
        continue;
      await la([K], b, u, h);
      const H = await h.findRecordById(b.id);
      H && (b = H);
    }
  } finally {
    s.close(), l.sdk.db.close();
  }
}
function fa(n) {
  async function i(G) {
    const Te = (await n.findAncestors(G)).filter((M) => !!Xo(M, "name")), be = Jt(G, "name").value, ue = Te.reverse().map((M) => Jt(M, "name").value);
    return ue.push(be), ue.join("/");
  }
  async function s() {
    return (await Promise.all([
      u(),
      l()
    ])).flat();
  }
  async function u() {
    return await n.findRecordsByTagName("FunctionCategory");
  }
  async function l() {
    return await n.findRecordsByTagName("SubCategory");
  }
  async function h() {
    return await n.findRecordsByTagName("LNodeType");
  }
  async function y(G) {
    const X = await b(G);
    if (!X)
      throw new Error(`no LNodeType by lnClass found lnClass=${G}`);
    return Jt(X, "id").value;
  }
  async function b(G) {
    const [X] = await n.findRecordsByTagName("DataTypeTemplates");
    if (!X)
      throw new Error(`no DataTypeTemplates found by looking for lnClass=${G}`);
    const [Te] = await n.findChildRecords(X, {
      tagNames: ["LNodeType"],
      attrs: [{ name: "lnClass", value: G }]
    });
    return Te;
  }
  async function A(G) {
    const [X] = await n.findRecordsByTagName("DataTypeTemplates");
    if (!X)
      throw new Error(`no DataTypeTemplates found by looking for lnClass=${G}`);
    const [Te] = await n.findChildRecords(X, {
      tagNames: ["LNodeType"],
      attrs: [{ name: "id", value: G }]
    });
    return Te;
  }
  async function K(G) {
    let [X] = await n.findChildRecords(G, {
      tagNames: ["Private"],
      attrs: [{ name: "type", value: "eIEC61850-6-100" }]
    });
    return X || (X = await n.createRecord(
      {
        tagName: "Private",
        attributes: [{ name: "type", value: "eIEC61850-6-100" }]
      },
      G
    )), X;
  }
  async function k(G) {
    if (!((await n.findChildRecords(G, {
      tagNames: ["LN", "LN0"],
      attrs: [{ name: "lnClass", value: "LLN0" }]
    })).length > 0)) {
      const be = await b("LLN0");
      if (!be)
        throw new Error("no LNodeType with lnClass LLN0 found");
      const ue = Jt(be, "id");
      await n.createRecord(
        {
          tagName: "LN0",
          attributes: [
            { name: "lnType", value: ue.value },
            { name: "lnClass", value: "LLN0" },
            { name: "uuid", value: crypto.randomUUID() }
          ]
        },
        G
      );
    }
  }
  async function D(G) {
    const [X] = await n.findDescendants(G, { tagNames: ["Server"] });
    if (X || console.warn(`No Server element found in the IED with id:${G.id}, children:${G.children}`), !((await n.findDescendants(G, {
      tagNames: ["LN"],
      attr: { name: "lnClass", value: "LPHD" }
    })).length > 0)) {
      const ue = await n.createRecord(
        {
          tagName: "LDevice",
          attributes: [{ name: "inst", value: "LD0" }]
        },
        X
      ), q = await y("LPHD");
      await n.createRecord(
        {
          tagName: "LN",
          attributes: [
            { name: "lnType", value: q },
            { name: "lnClass", value: "LPHD" },
            { name: "uuid", value: crypto.randomUUID() },
            { name: "inst", value: "1" }
          ]
        },
        ue
      ), await k(ue);
    }
  }
  function H(G) {
    const X = Jt(G, "uuid");
    if (!X)
      throw console.error('record does not have a "uuid" to move to "templateUUID"', G), new Error('record does not have a "uuid" to move to "templateUUID"');
    G.attributes?.push({ name: "templateUuid", value: X.value }), ne(G);
  }
  function ne(G) {
    G.attributes || (G.attributes = []);
    const X = crypto.randomUUID(), Te = G.attributes.findIndex((ue) => ue.name === "uuid");
    Te >= 0 ? G.attributes[Te].value = X : G.attributes.push({ name: "uuid", value: X });
  }
  return {
    findAllKindOfFunctionCategories: s,
    findAllFunctionCategories: u,
    findAllSubCategories: l,
    findLnodeTypeIdByLnClass: y,
    findLnodeTypeByLnClass: b,
    findLnodeTypeById: A,
    findAllLNodeTypes: h,
    ensurePrivateElement: K,
    ensureLLN0InLDevice: k,
    ensureLphdInIed: D,
    convertToInstance: H,
    generatePath: i
  };
}
const Qh = "S_IED";
function zh(n) {
  const { findLnodeTypeIdByLnClass: i, ensureLLN0InLDevice: s, ensureLphdInIed: u } = fa(n);
  async function l(h, y, b) {
    const A = n.db.name;
    await Xh(b, A);
    const K = new gi(b);
    await K.open();
    const k = Us(K), D = await k.findRootSCL();
    if (!D)
      throw K.close(), new Error("No SCL root found in ISD template");
    let H = await n.findOneRecordByAttribute("IED", {
      name: "name",
      value: y
    });
    if (!H) {
      const [G] = await k.findChildRecordsByTagName(D, ["IED"]);
      if (!G)
        throw K.close(), new Error("No IED found in the provided .isd template");
      H = await n.createRecord({
        tagName: "IED",
        attributes: [
          { name: "name", value: y },
          { name: "manufacturer", value: Qh },
          ...G.attributes.filter(
            (be) => be.name !== "name" && be.name !== "manufacturer"
          )
        ],
        namespace: G.namespace,
        value: G.value
      });
      let X = await n.findRootSCL();
      X && ([X, H] = await n.ensureRelationship(X, H));
      const Te = await k.findChildRecords(G);
      await la(Te, H, k, n);
    }
    H = await n.refetchRecord(H), K.close();
    const ne = await n.findDescendants(h, { tagNames: ["FunctionRef"] });
    for (const G of ne) {
      const X = n.extractAttr(G, "functionUuid");
      if (!X?.value) {
        console.warn(`FunctionRef does not have functionUuid. dbid="${G.id}"`);
        continue;
      }
      const [Te] = await n.findAllRecordsByAttribute("Function", {
        name: "uuid",
        value: X.value
      }), [be] = await n.findAllRecordsByAttribute("SubFunction", {
        name: "uuid",
        value: X.value
      });
      let ue;
      if (Te)
        ue = Te;
      else if (be)
        ue = await n.findFirstAncestorByTagName(be, "Function");
      else
        throw new Error(`no (sub)function found with id:${X.value}`);
      if (!ue)
        throw new Error(
          `no highest level function found for element with id: ${X.value} `
        );
      const q = n.extractAttr(ue, "name");
      if (!q?.value) {
        console.warn("Function does not have name", ue);
        continue;
      }
      const [M] = await n.findDescendants(H, { tagNames: ["Server"] });
      M || console.warn(
        `No Server element found in the IED with id:${H.id}, children:${H.children}`
      );
      const se = q.value.replace(/\s+/g, "_");
      let [W] = await n.findChildRecords(M, {
        attrs: [
          {
            name: "inst",
            value: se
          }
        ]
      });
      W || (W = await n.createRecord(
        {
          tagName: "LDevice",
          attributes: [{ name: "inst", value: se }]
        },
        M
      ));
      const te = Te || be, P = await n.findDescendants(te, { tagNames: ["LNode"] });
      await Promise.all(
        P.map((pe) => (n.updateAttr(pe, "ldInst", se), n.updateAttr(pe, "iedName", y), n.updateRecord(pe)))
      );
      const [ie] = await n.findDescendants(te, {
        tagNames: ["LNodeSpecNaming"]
      });
      if (!ie)
        throw new Error(`no LNodeSpecNaming found in function with id:${te.id}`);
      n.updateAttr(ie, "sIedName", y), n.updateAttr(ie, "sLdInst", se), await n.updateRecord(ie), await Promise.all(
        P.map(async (pe) => {
          const de = Jt(pe, "prefix"), Ee = Jt(pe, "lnClass"), qe = Jt(pe, "lnInst"), Be = await i(Ee.value);
          await n.createRecord(
            {
              tagName: "LN",
              attributes: [
                { name: "lnType", value: Be },
                { name: "lnClass", value: Ee.value },
                { name: "uuid", value: crypto.randomUUID() },
                { name: "inst", value: qe.value },
                { name: "prefix", value: de.value }
              ]
            },
            W
          );
        })
        // LNodes map
      ), await s(W);
    }
    await u(H);
  }
  return {
    implementAllocationRoleBySIed: l
  };
}
function Jh(n) {
  const { findLnodeTypeById: i } = fa(n);
  async function s(u, l) {
    const h = await i(l);
    if (!h)
      throw new Error(`could not found lnType by id=${l}`);
    const y = Jt(h, "lnClass").value;
    n.updateAttr(u, "lnClass", y), n.updateAttr(u, "lnType", l), await n.updateRecord(u);
  }
  return {
    lnodeSwitchLnType: s
  };
}
function Zh(n) {
  const { generatePath: i } = fa(n);
  async function s(y, b) {
    const A = Jt(b, "uuid").value, K = await n.findChildRecords(y, {
      tagNames: ["FunctionCatRef"],
      attrs: [{ name: "functionUuid", value: A }]
    });
    for (const k of K) {
      const D = k.parent?.id;
      if (!D)
        continue;
      const H = await n.findRecordById(D);
      if (!H)
        throw new Error(`no parent record found, id=${D}`);
      await n.removeRelationship(H, k), await n.deleteRecord(k);
    }
  }
  async function u(y, b) {
    const A = Jt(b, "uuid").value, [K] = await n.findChildRecords(y, {
      tagNames: ["FunctionCatRef"],
      attrs: [{ name: "functionUuid", value: A }]
    });
    if (K)
      return K;
    const k = await i(b), D = await n.createRecord(
      {
        tagName: "FunctionCatRef",
        namespace: {
          uri: "http://www.iec.ch/61850/2019/SCL/6-100",
          prefix: "eIEC61850-6-100"
        },
        attributes: [
          {
            name: "functionUuid",
            value: A
          },
          {
            name: "function",
            value: k
          }
        ]
      },
      y
    );
    if (!D)
      throw new Error(
        `could not create Function Category Ref, category: ${Jt(y, "uuid").value} function:${Jt(b, "uuid").value}`
      );
    return D;
  }
  async function l(y) {
    const b = Jt(y, "uuid").value, A = await n.findAllRecordsByAttribute("FunctionCatRef", {
      name: "functionUuid",
      value: b
    });
    return (await Promise.all(
      A.map((k) => k.parent?.id ? n.findRecordById(k.parent.id) : Promise.resolve())
    )).filter(Boolean);
  }
  async function h() {
    const y = await n.findRecordsByTagName("FunctionCategory"), b = await n.findRecordsByTagName("SubCategory");
    return [...y, ...b];
  }
  return {
    ensureCategoryOnFunction: u,
    removeCategoryFromFunction: s,
    findCategoriesOfFunction: l,
    findAllCategories: h
  };
}
async function ed(n) {
  const i = new gi(n);
  await i.open();
  const s = Us(i);
  return td(s);
}
function td(n) {
  return {
    ...fa(n),
    ...zh(n),
    ...Jh(n),
    ...Zh(n),
    sdk: n
  };
}
export {
  Ko as $,
  Do as A,
  ac as B,
  od as C,
  vu as D,
  et as E,
  $c as F,
  Ul as G,
  Wc as H,
  ep as I,
  zt as J,
  lp as K,
  Td as L,
  at as M,
  En as N,
  ql as O,
  oc as P,
  Ze as Q,
  rc as R,
  so as S,
  pi as T,
  es as U,
  _t as V,
  _p as W,
  Tu as X,
  gd as Y,
  pp as Z,
  kd as _,
  vt as a,
  af as a$,
  rp as a0,
  xd as a1,
  Jr as a2,
  dd as a3,
  pd as a4,
  md as a5,
  go as a6,
  sr as a7,
  bp as a8,
  qs as a9,
  Nd as aA,
  Ad as aB,
  fp as aC,
  Io as aD,
  Qf as aE,
  Ns as aF,
  Qr as aG,
  yr as aH,
  At as aI,
  cp as aJ,
  dn as aK,
  mr as aL,
  Tl as aM,
  Yd as aN,
  Xd as aO,
  Hf as aP,
  ta as aQ,
  nd as aR,
  ea as aS,
  ef as aT,
  rf as aU,
  Is as aV,
  tf as aW,
  cf as aX,
  uf as aY,
  sf as aZ,
  nl as a_,
  ss as aa,
  sp as ab,
  ip as ac,
  kc as ad,
  Qd as ae,
  Bd as af,
  ap as ag,
  Ic as ah,
  Al as ai,
  Sd as aj,
  Ld as ak,
  qd as al,
  Hd as am,
  Ud as an,
  Md as ao,
  Vd as ap,
  yp as aq,
  sd as ar,
  ad as as,
  Eu as at,
  yd as au,
  Vf as av,
  _i as aw,
  Jd as ax,
  Cd as ay,
  Pd as az,
  zo as b,
  Yh as b$,
  Il as b0,
  Wo as b1,
  bd as b2,
  bf as b3,
  Uu as b4,
  vd as b5,
  Cs as b6,
  As as b7,
  li as b8,
  up as b9,
  Wd as bA,
  Od as bB,
  zf as bC,
  dp as bD,
  xc as bE,
  tp as bF,
  Pf as bG,
  zd as bH,
  Xu as bI,
  $d as bJ,
  wd as bK,
  hp as bL,
  _d as bM,
  wp as bN,
  Fp as bO,
  xp as bP,
  Jt as bQ,
  Uh as bR,
  Vh as bS,
  Xo as bT,
  gi as bU,
  ed as bV,
  Bp as bW,
  Yt as bX,
  Tp as bY,
  Us as bZ,
  jc as b_,
  Fd as ba,
  Kd as bb,
  Id as bc,
  Rd as bd,
  Dd as be,
  vp as bf,
  su as bg,
  mp as bh,
  xl as bi,
  cd as bj,
  za as bk,
  Af as bl,
  gp as bm,
  ud as bn,
  tl as bo,
  So as bp,
  jd as bq,
  hd as br,
  fd as bs,
  dr as bt,
  op as bu,
  ld as bv,
  Gd as bw,
  Ed as bx,
  np as by,
  Nf as bz,
  Zd as c,
  Wp as c0,
  gu as d,
  wt as e,
  rd as f,
  Cn as g,
  id as h,
  Me as i,
  Sn as j,
  Re as k,
  bi as l,
  ws as m,
  kn as n,
  xs as o,
  no as p,
  jl as q,
  nt as r,
  pt as s,
  _u as t,
  qu as u,
  Hl as v,
  ti as w,
  of as x,
  Ja as y,
  ks as z
};
