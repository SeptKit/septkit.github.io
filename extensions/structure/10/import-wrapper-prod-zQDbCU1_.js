/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Oa(n) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const u of n.split(",")) i[u] = 1;
  return (u) => u in i;
}
const Je = {}, $r = [], xn = () => {
}, ju = () => !1, Sa = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // uppercase letter
(n.charCodeAt(2) > 122 || n.charCodeAt(2) < 97), Es = (n) => n.startsWith("onUpdate:"), Wt = Object.assign, Pa = (n, i) => {
  const u = n.indexOf(i);
  u > -1 && n.splice(u, 1);
}, Fu = Object.prototype.hasOwnProperty, Ye = (n, i) => Fu.call(n, i), Oe = Array.isArray, Gr = (n) => Yi(n) === "[object Map]", Ts = (n) => Yi(n) === "[object Set]", Ya = (n) => Yi(n) === "[object Date]", Ie = (n) => typeof n == "function", wt = (n) => typeof n == "string", En = (n) => typeof n == "symbol", et = (n) => n !== null && typeof n == "object", Os = (n) => (et(n) || Ie(n)) && Ie(n.then) && Ie(n.catch), Ss = Object.prototype.toString, Yi = (n) => Ss.call(n), Bu = (n) => Yi(n).slice(8, -1), Ps = (n) => Yi(n) === "[object Object]", ka = (n) => wt(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, Ki = /* @__PURE__ */ Oa(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), po = (n) => {
  const i = /* @__PURE__ */ Object.create(null);
  return (u) => i[u] || (i[u] = n(u));
}, Mu = /-(\w)/g, Tn = po(
  (n) => n.replace(Mu, (i, u) => u ? u.toUpperCase() : "")
), qu = /\B([A-Z])/g, Xi = po(
  (n) => n.replace(qu, "-$1").toLowerCase()
), Aa = po((n) => n.charAt(0).toUpperCase() + n.slice(1)), zo = po(
  (n) => n ? `on${Aa(n)}` : ""
), Jn = (n, i) => !Object.is(n, i), Qo = (n, ...i) => {
  for (let u = 0; u < n.length; u++)
    n[u](...i);
}, aa = (n, i, u, c = !1) => {
  Object.defineProperty(n, i, {
    configurable: !0,
    enumerable: !1,
    writable: c,
    value: u
  });
}, Lu = (n) => {
  const i = parseFloat(n);
  return isNaN(i) ? n : i;
};
let Xa;
const yo = () => Xa || (Xa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function mo(n) {
  if (Oe(n)) {
    const i = {};
    for (let u = 0; u < n.length; u++) {
      const c = n[u], h = wt(c) ? Wu(c) : mo(c);
      if (h)
        for (const p in h)
          i[p] = h[p];
    }
    return i;
  } else if (wt(n) || et(n))
    return n;
}
const Uu = /;(?![^(]*\))/g, Vu = /:([^]+)/, Hu = /\/\*[^]*?\*\//g;
function Wu(n) {
  const i = {};
  return n.replace(Hu, "").split(Uu).forEach((u) => {
    if (u) {
      const c = u.split(Vu);
      c.length > 1 && (i[c[0].trim()] = c[1].trim());
    }
  }), i;
}
function vo(n) {
  let i = "";
  if (wt(n))
    i = n;
  else if (Oe(n))
    for (let u = 0; u < n.length; u++) {
      const c = vo(n[u]);
      c && (i += c + " ");
    }
  else if (et(n))
    for (const u in n)
      n[u] && (i += u + " ");
  return i.trim();
}
function Af(n) {
  if (!n) return null;
  let { class: i, style: u } = n;
  return i && !wt(i) && (n.class = vo(i)), u && (n.style = mo(u)), n;
}
const $u = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Cf = /* @__PURE__ */ Oa($u);
function If(n) {
  return !!n || n === "";
}
function Gu(n, i) {
  if (n.length !== i.length) return !1;
  let u = !0;
  for (let c = 0; u && c < n.length; c++)
    u = Ca(n[c], i[c]);
  return u;
}
function Ca(n, i) {
  if (n === i) return !0;
  let u = Ya(n), c = Ya(i);
  if (u || c)
    return u && c ? n.getTime() === i.getTime() : !1;
  if (u = En(n), c = En(i), u || c)
    return n === i;
  if (u = Oe(n), c = Oe(i), u || c)
    return u && c ? Gu(n, i) : !1;
  if (u = et(n), c = et(i), u || c) {
    if (!u || !c)
      return !1;
    const h = Object.keys(n).length, p = Object.keys(i).length;
    if (h !== p)
      return !1;
    for (const O in n) {
      const S = n.hasOwnProperty(O), D = i.hasOwnProperty(O);
      if (S && !D || !S && D || !Ca(n[O], i[O]))
        return !1;
    }
  }
  return String(n) === String(i);
}
function Df(n, i) {
  return n.findIndex((u) => Ca(u, i));
}
const ks = (n) => !!(n && n.__v_isRef === !0), Yu = (n) => wt(n) ? n : n == null ? "" : Oe(n) || et(n) && (n.toString === Ss || !Ie(n.toString)) ? ks(n) ? Yu(n.value) : JSON.stringify(n, As, 2) : String(n), As = (n, i) => ks(i) ? As(n, i.value) : Gr(i) ? {
  [`Map(${i.size})`]: [...i.entries()].reduce(
    (u, [c, h], p) => (u[Jo(c, p) + " =>"] = h, u),
    {}
  )
} : Ts(i) ? {
  [`Set(${i.size})`]: [...i.values()].map((u) => Jo(u))
} : En(i) ? Jo(i) : et(i) && !Oe(i) && !Ps(i) ? String(i) : i, Jo = (n, i = "") => {
  var u;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    En(n) ? `Symbol(${(u = n.description) != null ? u : i})` : n
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ct;
class Cs {
  constructor(i = !1) {
    this.detached = i, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ct, !i && Ct && (this.index = (Ct.scopes || (Ct.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let i, u;
      if (this.scopes)
        for (i = 0, u = this.scopes.length; i < u; i++)
          this.scopes[i].pause();
      for (i = 0, u = this.effects.length; i < u; i++)
        this.effects[i].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let i, u;
      if (this.scopes)
        for (i = 0, u = this.scopes.length; i < u; i++)
          this.scopes[i].resume();
      for (i = 0, u = this.effects.length; i < u; i++)
        this.effects[i].resume();
    }
  }
  run(i) {
    if (this._active) {
      const u = Ct;
      try {
        return Ct = this, i();
      } finally {
        Ct = u;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ct, Ct = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ct = this.prevScope, this.prevScope = void 0);
  }
  stop(i) {
    if (this._active) {
      this._active = !1;
      let u, c;
      for (u = 0, c = this.effects.length; u < c; u++)
        this.effects[u].stop();
      for (this.effects.length = 0, u = 0, c = this.cleanups.length; u < c; u++)
        this.cleanups[u]();
      if (this.cleanups.length = 0, this.scopes) {
        for (u = 0, c = this.scopes.length; u < c; u++)
          this.scopes[u].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !i) {
        const h = this.parent.scopes.pop();
        h && h !== this && (this.parent.scopes[this.index] = h, h.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Nf(n) {
  return new Cs(n);
}
function Is() {
  return Ct;
}
function Xu(n, i = !1) {
  Ct && Ct.cleanups.push(n);
}
let it;
const Zo = /* @__PURE__ */ new WeakSet();
class Ds {
  constructor(i) {
    this.fn = i, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ct && Ct.active && Ct.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Zo.has(this) && (Zo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Rs(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, za(this), Ks(this);
    const i = it, u = mn;
    it = this, mn = !0;
    try {
      return this.fn();
    } finally {
      js(this), it = i, mn = u, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let i = this.deps; i; i = i.nextDep)
        Na(i);
      this.deps = this.depsTail = void 0, za(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Zo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    sa(this) && this.run();
  }
  get dirty() {
    return sa(this);
  }
}
let Ns = 0, ji, Fi;
function Rs(n, i = !1) {
  if (n.flags |= 8, i) {
    n.next = Fi, Fi = n;
    return;
  }
  n.next = ji, ji = n;
}
function Ia() {
  Ns++;
}
function Da() {
  if (--Ns > 0)
    return;
  if (Fi) {
    let i = Fi;
    for (Fi = void 0; i; ) {
      const u = i.next;
      i.next = void 0, i.flags &= -9, i = u;
    }
  }
  let n;
  for (; ji; ) {
    let i = ji;
    for (ji = void 0; i; ) {
      const u = i.next;
      if (i.next = void 0, i.flags &= -9, i.flags & 1)
        try {
          i.trigger();
        } catch (c) {
          n || (n = c);
        }
      i = u;
    }
  }
  if (n) throw n;
}
function Ks(n) {
  for (let i = n.deps; i; i = i.nextDep)
    i.version = -1, i.prevActiveLink = i.dep.activeLink, i.dep.activeLink = i;
}
function js(n) {
  let i, u = n.depsTail, c = u;
  for (; c; ) {
    const h = c.prevDep;
    c.version === -1 ? (c === u && (u = h), Na(c), zu(c)) : i = c, c.dep.activeLink = c.prevActiveLink, c.prevActiveLink = void 0, c = h;
  }
  n.deps = i, n.depsTail = u;
}
function sa(n) {
  for (let i = n.deps; i; i = i.nextDep)
    if (i.dep.version !== i.version || i.dep.computed && (Fs(i.dep.computed) || i.dep.version !== i.version))
      return !0;
  return !!n._dirty;
}
function Fs(n) {
  if (n.flags & 4 && !(n.flags & 16) || (n.flags &= -17, n.globalVersion === Vi) || (n.globalVersion = Vi, !n.isSSR && n.flags & 128 && (!n.deps && !n._dirty || !sa(n))))
    return;
  n.flags |= 2;
  const i = n.dep, u = it, c = mn;
  it = n, mn = !0;
  try {
    Ks(n);
    const h = n.fn(n._value);
    (i.version === 0 || Jn(h, n._value)) && (n.flags |= 128, n._value = h, i.version++);
  } catch (h) {
    throw i.version++, h;
  } finally {
    it = u, mn = c, js(n), n.flags &= -3;
  }
}
function Na(n, i = !1) {
  const { dep: u, prevSub: c, nextSub: h } = n;
  if (c && (c.nextSub = h, n.prevSub = void 0), h && (h.prevSub = c, n.nextSub = void 0), u.subs === n && (u.subs = c, !c && u.computed)) {
    u.computed.flags &= -5;
    for (let p = u.computed.deps; p; p = p.nextDep)
      Na(p, !0);
  }
  !i && !--u.sc && u.map && u.map.delete(u.key);
}
function zu(n) {
  const { prevDep: i, nextDep: u } = n;
  i && (i.nextDep = u, n.prevDep = void 0), u && (u.prevDep = i, n.nextDep = void 0);
}
let mn = !0;
const Bs = [];
function Zn() {
  Bs.push(mn), mn = !1;
}
function er() {
  const n = Bs.pop();
  mn = n === void 0 ? !0 : n;
}
function za(n) {
  const { cleanup: i } = n;
  if (n.cleanup = void 0, i) {
    const u = it;
    it = void 0;
    try {
      i();
    } finally {
      it = u;
    }
  }
}
let Vi = 0;
class Qu {
  constructor(i, u) {
    this.sub = i, this.dep = u, this.version = u.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class go {
  // TODO isolatedDeclarations "__v_skip"
  constructor(i) {
    this.computed = i, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(i) {
    if (!it || !mn || it === this.computed)
      return;
    let u = this.activeLink;
    if (u === void 0 || u.sub !== it)
      u = this.activeLink = new Qu(it, this), it.deps ? (u.prevDep = it.depsTail, it.depsTail.nextDep = u, it.depsTail = u) : it.deps = it.depsTail = u, Ms(u);
    else if (u.version === -1 && (u.version = this.version, u.nextDep)) {
      const c = u.nextDep;
      c.prevDep = u.prevDep, u.prevDep && (u.prevDep.nextDep = c), u.prevDep = it.depsTail, u.nextDep = void 0, it.depsTail.nextDep = u, it.depsTail = u, it.deps === u && (it.deps = c);
    }
    return u;
  }
  trigger(i) {
    this.version++, Vi++, this.notify(i);
  }
  notify(i) {
    Ia();
    try {
      for (let u = this.subs; u; u = u.prevSub)
        u.sub.notify() && u.sub.dep.notify();
    } finally {
      Da();
    }
  }
}
function Ms(n) {
  if (n.dep.sc++, n.sub.flags & 4) {
    const i = n.dep.computed;
    if (i && !n.dep.subs) {
      i.flags |= 20;
      for (let c = i.deps; c; c = c.nextDep)
        Ms(c);
    }
    const u = n.dep.subs;
    u !== n && (n.prevSub = u, u && (u.nextSub = n)), n.dep.subs = n;
  }
}
const ao = /* @__PURE__ */ new WeakMap(), Ur = Symbol(
  ""
), ua = Symbol(
  ""
), Hi = Symbol(
  ""
);
function It(n, i, u) {
  if (mn && it) {
    let c = ao.get(n);
    c || ao.set(n, c = /* @__PURE__ */ new Map());
    let h = c.get(u);
    h || (c.set(u, h = new go()), h.map = c, h.key = u), h.track();
  }
}
function zn(n, i, u, c, h, p) {
  const O = ao.get(n);
  if (!O) {
    Vi++;
    return;
  }
  const S = (D) => {
    D && D.trigger();
  };
  if (Ia(), i === "clear")
    O.forEach(S);
  else {
    const D = Oe(n), H = D && ka(u);
    if (D && u === "length") {
      const j = Number(c);
      O.forEach((L, Q) => {
        (Q === "length" || Q === Hi || !En(Q) && Q >= j) && S(L);
      });
    } else
      switch ((u !== void 0 || O.has(void 0)) && S(O.get(u)), H && S(O.get(Hi)), i) {
        case "add":
          D ? H && S(O.get("length")) : (S(O.get(Ur)), Gr(n) && S(O.get(ua)));
          break;
        case "delete":
          D || (S(O.get(Ur)), Gr(n) && S(O.get(ua)));
          break;
        case "set":
          Gr(n) && S(O.get(Ur));
          break;
      }
  }
  Da();
}
function Ju(n, i) {
  const u = ao.get(n);
  return u && u.get(i);
}
function Hr(n) {
  const i = Ge(n);
  return i === n ? i : (It(i, "iterate", Hi), an(n) ? i : i.map(kt));
}
function bo(n) {
  return It(n = Ge(n), "iterate", Hi), n;
}
const Zu = {
  __proto__: null,
  [Symbol.iterator]() {
    return ea(this, Symbol.iterator, kt);
  },
  concat(...n) {
    return Hr(this).concat(
      ...n.map((i) => Oe(i) ? Hr(i) : i)
    );
  },
  entries() {
    return ea(this, "entries", (n) => (n[1] = kt(n[1]), n));
  },
  every(n, i) {
    return Xn(this, "every", n, i, void 0, arguments);
  },
  filter(n, i) {
    return Xn(this, "filter", n, i, (u) => u.map(kt), arguments);
  },
  find(n, i) {
    return Xn(this, "find", n, i, kt, arguments);
  },
  findIndex(n, i) {
    return Xn(this, "findIndex", n, i, void 0, arguments);
  },
  findLast(n, i) {
    return Xn(this, "findLast", n, i, kt, arguments);
  },
  findLastIndex(n, i) {
    return Xn(this, "findLastIndex", n, i, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(n, i) {
    return Xn(this, "forEach", n, i, void 0, arguments);
  },
  includes(...n) {
    return ta(this, "includes", n);
  },
  indexOf(...n) {
    return ta(this, "indexOf", n);
  },
  join(n) {
    return Hr(this).join(n);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...n) {
    return ta(this, "lastIndexOf", n);
  },
  map(n, i) {
    return Xn(this, "map", n, i, void 0, arguments);
  },
  pop() {
    return Di(this, "pop");
  },
  push(...n) {
    return Di(this, "push", n);
  },
  reduce(n, ...i) {
    return Qa(this, "reduce", n, i);
  },
  reduceRight(n, ...i) {
    return Qa(this, "reduceRight", n, i);
  },
  shift() {
    return Di(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(n, i) {
    return Xn(this, "some", n, i, void 0, arguments);
  },
  splice(...n) {
    return Di(this, "splice", n);
  },
  toReversed() {
    return Hr(this).toReversed();
  },
  toSorted(n) {
    return Hr(this).toSorted(n);
  },
  toSpliced(...n) {
    return Hr(this).toSpliced(...n);
  },
  unshift(...n) {
    return Di(this, "unshift", n);
  },
  values() {
    return ea(this, "values", kt);
  }
};
function ea(n, i, u) {
  const c = bo(n), h = c[i]();
  return c !== n && !an(n) && (h._next = h.next, h.next = () => {
    const p = h._next();
    return p.value && (p.value = u(p.value)), p;
  }), h;
}
const ec = Array.prototype;
function Xn(n, i, u, c, h, p) {
  const O = bo(n), S = O !== n && !an(n), D = O[i];
  if (D !== ec[i]) {
    const L = D.apply(n, p);
    return S ? kt(L) : L;
  }
  let H = u;
  O !== n && (S ? H = function(L, Q) {
    return u.call(this, kt(L), Q, n);
  } : u.length > 2 && (H = function(L, Q) {
    return u.call(this, L, Q, n);
  }));
  const j = D.call(O, H, c);
  return S && h ? h(j) : j;
}
function Qa(n, i, u, c) {
  const h = bo(n);
  let p = u;
  return h !== n && (an(n) ? u.length > 3 && (p = function(O, S, D) {
    return u.call(this, O, S, D, n);
  }) : p = function(O, S, D) {
    return u.call(this, O, kt(S), D, n);
  }), h[i](p, ...c);
}
function ta(n, i, u) {
  const c = Ge(n);
  It(c, "iterate", Hi);
  const h = c[i](...u);
  return (h === -1 || h === !1) && Ba(u[0]) ? (u[0] = Ge(u[0]), c[i](...u)) : h;
}
function Di(n, i, u = []) {
  Zn(), Ia();
  const c = Ge(n)[i].apply(n, u);
  return Da(), er(), c;
}
const tc = /* @__PURE__ */ Oa("__proto__,__v_isRef,__isVue"), qs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(En)
);
function nc(n) {
  En(n) || (n = String(n));
  const i = Ge(this);
  return It(i, "has", n), i.hasOwnProperty(n);
}
class Ls {
  constructor(i = !1, u = !1) {
    this._isReadonly = i, this._isShallow = u;
  }
  get(i, u, c) {
    if (u === "__v_skip") return i.__v_skip;
    const h = this._isReadonly, p = this._isShallow;
    if (u === "__v_isReactive")
      return !h;
    if (u === "__v_isReadonly")
      return h;
    if (u === "__v_isShallow")
      return p;
    if (u === "__v_raw")
      return c === (h ? p ? hc : Ws : p ? Hs : Vs).get(i) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(i) === Object.getPrototypeOf(c) ? i : void 0;
    const O = Oe(i);
    if (!h) {
      let D;
      if (O && (D = Zu[u]))
        return D;
      if (u === "hasOwnProperty")
        return nc;
    }
    const S = Reflect.get(
      i,
      u,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      vt(i) ? i : c
    );
    return (En(u) ? qs.has(u) : tc(u)) || (h || It(i, "get", u), p) ? S : vt(S) ? O && ka(u) ? S : S.value : et(S) ? h ? ja(S) : Ka(S) : S;
  }
}
class Us extends Ls {
  constructor(i = !1) {
    super(!1, i);
  }
  set(i, u, c, h) {
    let p = i[u];
    if (!this._isShallow) {
      const D = sr(p);
      if (!an(c) && !sr(c) && (p = Ge(p), c = Ge(c)), !Oe(i) && vt(p) && !vt(c))
        return D ? !1 : (p.value = c, !0);
    }
    const O = Oe(i) && ka(u) ? Number(u) < i.length : Ye(i, u), S = Reflect.set(
      i,
      u,
      c,
      vt(i) ? i : h
    );
    return i === Ge(h) && (O ? Jn(c, p) && zn(i, "set", u, c) : zn(i, "add", u, c)), S;
  }
  deleteProperty(i, u) {
    const c = Ye(i, u);
    i[u];
    const h = Reflect.deleteProperty(i, u);
    return h && c && zn(i, "delete", u, void 0), h;
  }
  has(i, u) {
    const c = Reflect.has(i, u);
    return (!En(u) || !qs.has(u)) && It(i, "has", u), c;
  }
  ownKeys(i) {
    return It(
      i,
      "iterate",
      Oe(i) ? "length" : Ur
    ), Reflect.ownKeys(i);
  }
}
class rc extends Ls {
  constructor(i = !1) {
    super(!0, i);
  }
  set(i, u) {
    return !0;
  }
  deleteProperty(i, u) {
    return !0;
  }
}
const ic = /* @__PURE__ */ new Us(), oc = /* @__PURE__ */ new rc(), ac = /* @__PURE__ */ new Us(!0);
const ca = (n) => n, Ji = (n) => Reflect.getPrototypeOf(n);
function sc(n, i, u) {
  return function(...c) {
    const h = this.__v_raw, p = Ge(h), O = Gr(p), S = n === "entries" || n === Symbol.iterator && O, D = n === "keys" && O, H = h[n](...c), j = u ? ca : i ? so : kt;
    return !i && It(
      p,
      "iterate",
      D ? ua : Ur
    ), {
      // iterator protocol
      next() {
        const { value: L, done: Q } = H.next();
        return Q ? { value: L, done: Q } : {
          value: S ? [j(L[0]), j(L[1])] : j(L),
          done: Q
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Zi(n) {
  return function(...i) {
    return n === "delete" ? !1 : n === "clear" ? void 0 : this;
  };
}
function uc(n, i) {
  const u = {
    get(h) {
      const p = this.__v_raw, O = Ge(p), S = Ge(h);
      n || (Jn(h, S) && It(O, "get", h), It(O, "get", S));
      const { has: D } = Ji(O), H = i ? ca : n ? so : kt;
      if (D.call(O, h))
        return H(p.get(h));
      if (D.call(O, S))
        return H(p.get(S));
      p !== O && p.get(h);
    },
    get size() {
      const h = this.__v_raw;
      return !n && It(Ge(h), "iterate", Ur), Reflect.get(h, "size", h);
    },
    has(h) {
      const p = this.__v_raw, O = Ge(p), S = Ge(h);
      return n || (Jn(h, S) && It(O, "has", h), It(O, "has", S)), h === S ? p.has(h) : p.has(h) || p.has(S);
    },
    forEach(h, p) {
      const O = this, S = O.__v_raw, D = Ge(S), H = i ? ca : n ? so : kt;
      return !n && It(D, "iterate", Ur), S.forEach((j, L) => h.call(p, H(j), H(L), O));
    }
  };
  return Wt(
    u,
    n ? {
      add: Zi("add"),
      set: Zi("set"),
      delete: Zi("delete"),
      clear: Zi("clear")
    } : {
      add(h) {
        !i && !an(h) && !sr(h) && (h = Ge(h));
        const p = Ge(this);
        return Ji(p).has.call(p, h) || (p.add(h), zn(p, "add", h, h)), this;
      },
      set(h, p) {
        !i && !an(p) && !sr(p) && (p = Ge(p));
        const O = Ge(this), { has: S, get: D } = Ji(O);
        let H = S.call(O, h);
        H || (h = Ge(h), H = S.call(O, h));
        const j = D.call(O, h);
        return O.set(h, p), H ? Jn(p, j) && zn(O, "set", h, p) : zn(O, "add", h, p), this;
      },
      delete(h) {
        const p = Ge(this), { has: O, get: S } = Ji(p);
        let D = O.call(p, h);
        D || (h = Ge(h), D = O.call(p, h)), S && S.call(p, h);
        const H = p.delete(h);
        return D && zn(p, "delete", h, void 0), H;
      },
      clear() {
        const h = Ge(this), p = h.size !== 0, O = h.clear();
        return p && zn(
          h,
          "clear",
          void 0,
          void 0
        ), O;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((h) => {
    u[h] = sc(h, n, i);
  }), u;
}
function Ra(n, i) {
  const u = uc(n, i);
  return (c, h, p) => h === "__v_isReactive" ? !n : h === "__v_isReadonly" ? n : h === "__v_raw" ? c : Reflect.get(
    Ye(u, h) && h in c ? u : c,
    h,
    p
  );
}
const cc = {
  get: /* @__PURE__ */ Ra(!1, !1)
}, lc = {
  get: /* @__PURE__ */ Ra(!1, !0)
}, fc = {
  get: /* @__PURE__ */ Ra(!0, !1)
};
const Vs = /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap(), hc = /* @__PURE__ */ new WeakMap();
function dc(n) {
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
function pc(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : dc(Bu(n));
}
function Ka(n) {
  return sr(n) ? n : Fa(
    n,
    !1,
    ic,
    cc,
    Vs
  );
}
function yc(n) {
  return Fa(
    n,
    !1,
    ac,
    lc,
    Hs
  );
}
function ja(n) {
  return Fa(
    n,
    !0,
    oc,
    fc,
    Ws
  );
}
function Fa(n, i, u, c, h) {
  if (!et(n) || n.__v_raw && !(i && n.__v_isReactive))
    return n;
  const p = pc(n);
  if (p === 0)
    return n;
  const O = h.get(n);
  if (O)
    return O;
  const S = new Proxy(
    n,
    p === 2 ? c : u
  );
  return h.set(n, S), S;
}
function Yr(n) {
  return sr(n) ? Yr(n.__v_raw) : !!(n && n.__v_isReactive);
}
function sr(n) {
  return !!(n && n.__v_isReadonly);
}
function an(n) {
  return !!(n && n.__v_isShallow);
}
function Ba(n) {
  return n ? !!n.__v_raw : !1;
}
function Ge(n) {
  const i = n && n.__v_raw;
  return i ? Ge(i) : n;
}
function mc(n) {
  return !Ye(n, "__v_skip") && Object.isExtensible(n) && aa(n, "__v_skip", !0), n;
}
const kt = (n) => et(n) ? Ka(n) : n, so = (n) => et(n) ? ja(n) : n;
function vt(n) {
  return n ? n.__v_isRef === !0 : !1;
}
function Ma(n) {
  return $s(n, !1);
}
function la(n) {
  return $s(n, !0);
}
function $s(n, i) {
  return vt(n) ? n : new vc(n, i);
}
class vc {
  constructor(i, u) {
    this.dep = new go(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = u ? i : Ge(i), this._value = u ? i : kt(i), this.__v_isShallow = u;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(i) {
    const u = this._rawValue, c = this.__v_isShallow || an(i) || sr(i);
    i = c ? i : Ge(i), Jn(i, u) && (this._rawValue = i, this._value = c ? i : kt(i), this.dep.trigger());
  }
}
function Gs(n) {
  return vt(n) ? n.value : n;
}
function ar(n) {
  return Ie(n) ? n() : Gs(n);
}
const gc = {
  get: (n, i, u) => i === "__v_raw" ? n : Gs(Reflect.get(n, i, u)),
  set: (n, i, u, c) => {
    const h = n[i];
    return vt(h) && !vt(u) ? (h.value = u, !0) : Reflect.set(n, i, u, c);
  }
};
function Ys(n) {
  return Yr(n) ? n : new Proxy(n, gc);
}
class bc {
  constructor(i) {
    this.__v_isRef = !0, this._value = void 0;
    const u = this.dep = new go(), { get: c, set: h } = i(u.track.bind(u), u.trigger.bind(u));
    this._get = c, this._set = h;
  }
  get value() {
    return this._value = this._get();
  }
  set value(i) {
    this._set(i);
  }
}
function Rf(n) {
  return new bc(n);
}
function Kf(n) {
  const i = Oe(n) ? new Array(n.length) : {};
  for (const u in n)
    i[u] = Xs(n, u);
  return i;
}
class _c {
  constructor(i, u, c) {
    this._object = i, this._key = u, this._defaultValue = c, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const i = this._object[this._key];
    return this._value = i === void 0 ? this._defaultValue : i;
  }
  set value(i) {
    this._object[this._key] = i;
  }
  get dep() {
    return Ju(Ge(this._object), this._key);
  }
}
class wc {
  constructor(i) {
    this._getter = i, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function jf(n, i, u) {
  return vt(n) ? n : Ie(n) ? new wc(n) : et(n) && arguments.length > 1 ? Xs(n, i, u) : Ma(n);
}
function Xs(n, i, u) {
  const c = n[i];
  return vt(c) ? c : new _c(n, i, u);
}
class xc {
  constructor(i, u, c) {
    this.fn = i, this.setter = u, this._value = void 0, this.dep = new go(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Vi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !u, this.isSSR = c;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    it !== this)
      return Rs(this, !0), !0;
  }
  get value() {
    const i = this.dep.track();
    return Fs(this), i && (i.version = this.dep.version), this._value;
  }
  set value(i) {
    this.setter && this.setter(i);
  }
}
function Ec(n, i, u = !1) {
  let c, h;
  return Ie(n) ? c = n : (c = n.get, h = n.set), new xc(c, h, u);
}
const eo = {}, uo = /* @__PURE__ */ new WeakMap();
let Lr;
function Tc(n, i = !1, u = Lr) {
  if (u) {
    let c = uo.get(u);
    c || uo.set(u, c = []), c.push(n);
  }
}
function Oc(n, i, u = Je) {
  const { immediate: c, deep: h, once: p, scheduler: O, augmentJob: S, call: D } = u, H = (fe) => h ? fe : an(fe) || h === !1 || h === 0 ? Qn(fe, 1) : Qn(fe);
  let j, L, Q, ae, he = !1, de = !1;
  if (vt(n) ? (L = () => n.value, he = an(n)) : Yr(n) ? (L = () => H(n), he = !0) : Oe(n) ? (de = !0, he = n.some((fe) => Yr(fe) || an(fe)), L = () => n.map((fe) => {
    if (vt(fe))
      return fe.value;
    if (Yr(fe))
      return H(fe);
    if (Ie(fe))
      return D ? D(fe, 2) : fe();
  })) : Ie(n) ? i ? L = D ? () => D(n, 2) : n : L = () => {
    if (Q) {
      Zn();
      try {
        Q();
      } finally {
        er();
      }
    }
    const fe = Lr;
    Lr = j;
    try {
      return D ? D(n, 3, [ae]) : n(ae);
    } finally {
      Lr = fe;
    }
  } : L = xn, i && h) {
    const fe = L, je = h === !0 ? 1 / 0 : h;
    L = () => Qn(fe(), je);
  }
  const He = Is(), ke = () => {
    j.stop(), He && He.active && Pa(He.effects, j);
  };
  if (p && i) {
    const fe = i;
    i = (...je) => {
      fe(...je), ke();
    };
  }
  let Ke = de ? new Array(n.length).fill(eo) : eo;
  const qe = (fe) => {
    if (!(!(j.flags & 1) || !j.dirty && !fe))
      if (i) {
        const je = j.run();
        if (h || he || (de ? je.some((ne, te) => Jn(ne, Ke[te])) : Jn(je, Ke))) {
          Q && Q();
          const ne = Lr;
          Lr = j;
          try {
            const te = [
              je,
              // pass undefined as the old value when it's changed for the first time
              Ke === eo ? void 0 : de && Ke[0] === eo ? [] : Ke,
              ae
            ];
            Ke = je, D ? D(i, 3, te) : (
              // @ts-expect-error
              i(...te)
            );
          } finally {
            Lr = ne;
          }
        }
      } else
        j.run();
  };
  return S && S(qe), j = new Ds(L), j.scheduler = O ? () => O(qe, !1) : qe, ae = (fe) => Tc(fe, !1, j), Q = j.onStop = () => {
    const fe = uo.get(j);
    if (fe) {
      if (D)
        D(fe, 4);
      else
        for (const je of fe) je();
      uo.delete(j);
    }
  }, i ? c ? qe(!0) : Ke = j.run() : O ? O(qe.bind(null, !0), !0) : j.run(), ke.pause = j.pause.bind(j), ke.resume = j.resume.bind(j), ke.stop = ke, ke;
}
function Qn(n, i = 1 / 0, u) {
  if (i <= 0 || !et(n) || n.__v_skip || (u = u || /* @__PURE__ */ new Set(), u.has(n)))
    return n;
  if (u.add(n), i--, vt(n))
    Qn(n.value, i, u);
  else if (Oe(n))
    for (let c = 0; c < n.length; c++)
      Qn(n[c], i, u);
  else if (Ts(n) || Gr(n))
    n.forEach((c) => {
      Qn(c, i, u);
    });
  else if (Ps(n)) {
    for (const c in n)
      Qn(n[c], i, u);
    for (const c of Object.getOwnPropertySymbols(n))
      Object.prototype.propertyIsEnumerable.call(n, c) && Qn(n[c], i, u);
  }
  return n;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function zi(n, i, u, c) {
  try {
    return c ? n(...c) : n();
  } catch (h) {
    _o(h, i, u);
  }
}
function tr(n, i, u, c) {
  if (Ie(n)) {
    const h = zi(n, i, u, c);
    return h && Os(h) && h.catch((p) => {
      _o(p, i, u);
    }), h;
  }
  if (Oe(n)) {
    const h = [];
    for (let p = 0; p < n.length; p++)
      h.push(tr(n[p], i, u, c));
    return h;
  }
}
function _o(n, i, u, c = !0) {
  const h = i ? i.vnode : null, { errorHandler: p, throwUnhandledErrorInProduction: O } = i && i.appContext.config || Je;
  if (i) {
    let S = i.parent;
    const D = i.proxy, H = `https://vuejs.org/error-reference/#runtime-${u}`;
    for (; S; ) {
      const j = S.ec;
      if (j) {
        for (let L = 0; L < j.length; L++)
          if (j[L](n, D, H) === !1)
            return;
      }
      S = S.parent;
    }
    if (p) {
      Zn(), zi(p, null, 10, [
        n,
        D,
        H
      ]), er();
      return;
    }
  }
  Sc(n, u, h, c, O);
}
function Sc(n, i, u, c = !0, h = !1) {
  if (h)
    throw n;
  console.error(n);
}
const Vt = [];
let _n = -1;
const Xr = [];
let ir = null, Wr = 0;
const zs = /* @__PURE__ */ Promise.resolve();
let co = null;
function Pc(n) {
  const i = co || zs;
  return n ? i.then(this ? n.bind(this) : n) : i;
}
function kc(n) {
  let i = _n + 1, u = Vt.length;
  for (; i < u; ) {
    const c = i + u >>> 1, h = Vt[c], p = Wi(h);
    p < n || p === n && h.flags & 2 ? i = c + 1 : u = c;
  }
  return i;
}
function qa(n) {
  if (!(n.flags & 1)) {
    const i = Wi(n), u = Vt[Vt.length - 1];
    !u || // fast path when the job id is larger than the tail
    !(n.flags & 2) && i >= Wi(u) ? Vt.push(n) : Vt.splice(kc(i), 0, n), n.flags |= 1, Qs();
  }
}
function Qs() {
  co || (co = zs.then(Zs));
}
function Ac(n) {
  Oe(n) ? Xr.push(...n) : ir && n.id === -1 ? ir.splice(Wr + 1, 0, n) : n.flags & 1 || (Xr.push(n), n.flags |= 1), Qs();
}
function Ja(n, i, u = _n + 1) {
  for (; u < Vt.length; u++) {
    const c = Vt[u];
    if (c && c.flags & 2) {
      if (n && c.id !== n.uid)
        continue;
      Vt.splice(u, 1), u--, c.flags & 4 && (c.flags &= -2), c(), c.flags & 4 || (c.flags &= -2);
    }
  }
}
function Js(n) {
  if (Xr.length) {
    const i = [...new Set(Xr)].sort(
      (u, c) => Wi(u) - Wi(c)
    );
    if (Xr.length = 0, ir) {
      ir.push(...i);
      return;
    }
    for (ir = i, Wr = 0; Wr < ir.length; Wr++) {
      const u = ir[Wr];
      u.flags & 4 && (u.flags &= -2), u.flags & 8 || u(), u.flags &= -2;
    }
    ir = null, Wr = 0;
  }
}
const Wi = (n) => n.id == null ? n.flags & 2 ? -1 : 1 / 0 : n.id;
function Zs(n) {
  try {
    for (_n = 0; _n < Vt.length; _n++) {
      const i = Vt[_n];
      i && !(i.flags & 8) && (i.flags & 4 && (i.flags &= -2), zi(
        i,
        i.i,
        i.i ? 15 : 14
      ), i.flags & 4 || (i.flags &= -2));
    }
  } finally {
    for (; _n < Vt.length; _n++) {
      const i = Vt[_n];
      i && (i.flags &= -2);
    }
    _n = -1, Vt.length = 0, Js(), co = null, (Vt.length || Xr.length) && Zs();
  }
}
let mt = null, eu = null;
function lo(n) {
  const i = mt;
  return mt = n, eu = n && n.type.__scopeId || null, i;
}
function Cc(n, i = mt, u) {
  if (!i || n._n)
    return n;
  const c = (...h) => {
    c._d && fs(-1);
    const p = lo(i);
    let O;
    try {
      O = n(...h);
    } finally {
      lo(p), c._d && fs(1);
    }
    return O;
  };
  return c._n = !0, c._c = !0, c._d = !0, c;
}
function Ff(n, i) {
  if (mt === null)
    return n;
  const u = To(mt), c = n.dirs || (n.dirs = []);
  for (let h = 0; h < i.length; h++) {
    let [p, O, S, D = Je] = i[h];
    p && (Ie(p) && (p = {
      mounted: p,
      updated: p
    }), p.deep && Qn(O), c.push({
      dir: p,
      instance: u,
      value: O,
      oldValue: void 0,
      arg: S,
      modifiers: D
    }));
  }
  return n;
}
function Mr(n, i, u, c) {
  const h = n.dirs, p = i && i.dirs;
  for (let O = 0; O < h.length; O++) {
    const S = h[O];
    p && (S.oldValue = p[O].value);
    let D = S.dir[c];
    D && (Zn(), tr(D, u, 8, [
      n.el,
      S,
      n,
      i
    ]), er());
  }
}
const tu = Symbol("_vte"), Ic = (n) => n.__isTeleport, Bi = (n) => n && (n.disabled || n.disabled === ""), Za = (n) => n && (n.defer || n.defer === ""), es = (n) => typeof SVGElement < "u" && n instanceof SVGElement, ts = (n) => typeof MathMLElement == "function" && n instanceof MathMLElement, fa = (n, i) => {
  const u = n && n.to;
  return wt(u) ? i ? i(u) : null : u;
}, nu = {
  name: "Teleport",
  __isTeleport: !0,
  process(n, i, u, c, h, p, O, S, D, H) {
    const {
      mc: j,
      pc: L,
      pbc: Q,
      o: { insert: ae, querySelector: he, createText: de, createComment: He }
    } = H, ke = Bi(i.props);
    let { shapeFlag: Ke, children: qe, dynamicChildren: fe } = i;
    if (n == null) {
      const je = i.el = de(""), ne = i.anchor = de("");
      ae(je, u, c), ae(ne, u, c);
      const te = (F, Xe) => {
        Ke & 16 && (h && h.isCE && (h.ce._teleportTarget = F), j(
          qe,
          F,
          Xe,
          h,
          p,
          O,
          S,
          D
        ));
      }, _e = () => {
        const F = i.target = fa(i.props, he), Xe = ru(F, i, de, ae);
        F && (O !== "svg" && es(F) ? O = "svg" : O !== "mathml" && ts(F) && (O = "mathml"), ke || (te(F, Xe), no(i, !1)));
      };
      ke && (te(u, ne), no(i, !0)), Za(i.props) ? (i.el.__isMounted = !1, Lt(() => {
        _e(), delete i.el.__isMounted;
      }, p)) : _e();
    } else {
      if (Za(i.props) && n.el.__isMounted === !1) {
        Lt(() => {
          nu.process(
            n,
            i,
            u,
            c,
            h,
            p,
            O,
            S,
            D,
            H
          );
        }, p);
        return;
      }
      i.el = n.el, i.targetStart = n.targetStart;
      const je = i.anchor = n.anchor, ne = i.target = n.target, te = i.targetAnchor = n.targetAnchor, _e = Bi(n.props), F = _e ? u : ne, Xe = _e ? je : te;
      if (O === "svg" || es(ne) ? O = "svg" : (O === "mathml" || ts(ne)) && (O = "mathml"), fe ? (Q(
        n.dynamicChildren,
        fe,
        F,
        h,
        p,
        O,
        S
      ), Ha(n, i, !0)) : D || L(
        n,
        i,
        F,
        Xe,
        h,
        p,
        O,
        S,
        !1
      ), ke)
        _e ? i.props && n.props && i.props.to !== n.props.to && (i.props.to = n.props.to) : to(
          i,
          u,
          je,
          H,
          1
        );
      else if ((i.props && i.props.to) !== (n.props && n.props.to)) {
        const st = i.target = fa(
          i.props,
          he
        );
        st && to(
          i,
          st,
          null,
          H,
          0
        );
      } else _e && to(
        i,
        ne,
        te,
        H,
        1
      );
      no(i, ke);
    }
  },
  remove(n, i, u, { um: c, o: { remove: h } }, p) {
    const {
      shapeFlag: O,
      children: S,
      anchor: D,
      targetStart: H,
      targetAnchor: j,
      target: L,
      props: Q
    } = n;
    if (L && (h(H), h(j)), p && h(D), O & 16) {
      const ae = p || !Bi(Q);
      for (let he = 0; he < S.length; he++) {
        const de = S[he];
        c(
          de,
          i,
          u,
          ae,
          !!de.dynamicChildren
        );
      }
    }
  },
  move: to,
  hydrate: Dc
};
function to(n, i, u, { o: { insert: c }, m: h }, p = 2) {
  p === 0 && c(n.targetAnchor, i, u);
  const { el: O, anchor: S, shapeFlag: D, children: H, props: j } = n, L = p === 2;
  if (L && c(O, i, u), (!L || Bi(j)) && D & 16)
    for (let Q = 0; Q < H.length; Q++)
      h(
        H[Q],
        i,
        u,
        2
      );
  L && c(S, i, u);
}
function Dc(n, i, u, c, h, p, {
  o: { nextSibling: O, parentNode: S, querySelector: D, insert: H, createText: j }
}, L) {
  const Q = i.target = fa(
    i.props,
    D
  );
  if (Q) {
    const ae = Bi(i.props), he = Q._lpa || Q.firstChild;
    if (i.shapeFlag & 16)
      if (ae)
        i.anchor = L(
          O(n),
          i,
          S(n),
          u,
          c,
          h,
          p
        ), i.targetStart = he, i.targetAnchor = he && O(he);
      else {
        i.anchor = O(n);
        let de = he;
        for (; de; ) {
          if (de && de.nodeType === 8) {
            if (de.data === "teleport start anchor")
              i.targetStart = de;
            else if (de.data === "teleport anchor") {
              i.targetAnchor = de, Q._lpa = i.targetAnchor && O(i.targetAnchor);
              break;
            }
          }
          de = O(de);
        }
        i.targetAnchor || ru(Q, i, j, H), L(
          he && O(he),
          i,
          Q,
          u,
          c,
          h,
          p
        );
      }
    no(i, ae);
  }
  return i.anchor && O(i.anchor);
}
const Bf = nu;
function no(n, i) {
  const u = n.ctx;
  if (u && u.ut) {
    let c, h;
    for (i ? (c = n.el, h = n.anchor) : (c = n.targetStart, h = n.targetAnchor); c && c !== h; )
      c.nodeType === 1 && c.setAttribute("data-v-owner", u.uid), c = c.nextSibling;
    u.ut();
  }
}
function ru(n, i, u, c) {
  const h = i.targetStart = u(""), p = i.targetAnchor = u("");
  return h[tu] = p, n && (c(h, n), c(p, n)), p;
}
function La(n, i) {
  n.shapeFlag & 6 && n.component ? (n.transition = i, La(n.component.subTree, i)) : n.shapeFlag & 128 ? (n.ssContent.transition = i.clone(n.ssContent), n.ssFallback.transition = i.clone(n.ssFallback)) : n.transition = i;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Mf(n, i) {
  return Ie(n) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Wt({ name: n.name }, i, { setup: n })
  ) : n;
}
function iu(n) {
  n.ids = [n.ids[0] + n.ids[2]++ + "-", 0, 0];
}
function qf(n) {
  const i = Du(), u = la(null);
  if (i) {
    const h = i.refs === Je ? i.refs = {} : i.refs;
    Object.defineProperty(h, n, {
      enumerable: !0,
      get: () => u.value,
      set: (p) => u.value = p
    });
  }
  return u;
}
function Mi(n, i, u, c, h = !1) {
  if (Oe(n)) {
    n.forEach(
      (he, de) => Mi(
        he,
        i && (Oe(i) ? i[de] : i),
        u,
        c,
        h
      )
    );
    return;
  }
  if (zr(c) && !h) {
    c.shapeFlag & 512 && c.type.__asyncResolved && c.component.subTree.component && Mi(n, i, u, c.component.subTree);
    return;
  }
  const p = c.shapeFlag & 4 ? To(c.component) : c.el, O = h ? null : p, { i: S, r: D } = n, H = i && i.r, j = S.refs === Je ? S.refs = {} : S.refs, L = S.setupState, Q = Ge(L), ae = L === Je ? () => !1 : (he) => Ye(Q, he);
  if (H != null && H !== D && (wt(H) ? (j[H] = null, ae(H) && (L[H] = null)) : vt(H) && (H.value = null)), Ie(D))
    zi(D, S, 12, [O, j]);
  else {
    const he = wt(D), de = vt(D);
    if (he || de) {
      const He = () => {
        if (n.f) {
          const ke = he ? ae(D) ? L[D] : j[D] : D.value;
          h ? Oe(ke) && Pa(ke, p) : Oe(ke) ? ke.includes(p) || ke.push(p) : he ? (j[D] = [p], ae(D) && (L[D] = j[D])) : (D.value = [p], n.k && (j[n.k] = D.value));
        } else he ? (j[D] = O, ae(D) && (L[D] = O)) : de && (D.value = O, n.k && (j[n.k] = O));
      };
      O ? (He.id = -1, Lt(He, u)) : He();
    }
  }
}
yo().requestIdleCallback;
yo().cancelIdleCallback;
const zr = (n) => !!n.type.__asyncLoader, ou = (n) => n.type.__isKeepAlive;
function Nc(n, i) {
  au(n, "a", i);
}
function Rc(n, i) {
  au(n, "da", i);
}
function au(n, i, u = _t) {
  const c = n.__wdc || (n.__wdc = () => {
    let h = u;
    for (; h; ) {
      if (h.isDeactivated)
        return;
      h = h.parent;
    }
    return n();
  });
  if (wo(i, c, u), u) {
    let h = u.parent;
    for (; h && h.parent; )
      ou(h.parent.vnode) && Kc(c, i, u, h), h = h.parent;
  }
}
function Kc(n, i, u, c) {
  const h = wo(
    i,
    n,
    c,
    !0
    /* prepend */
  );
  su(() => {
    Pa(c[i], h);
  }, u);
}
function wo(n, i, u = _t, c = !1) {
  if (u) {
    const h = u[n] || (u[n] = []), p = i.__weh || (i.__weh = (...O) => {
      Zn();
      const S = Qi(u), D = tr(i, u, n, O);
      return S(), er(), D;
    });
    return c ? h.unshift(p) : h.push(p), p;
  }
}
const rr = (n) => (i, u = _t) => {
  (!Gi || n === "sp") && wo(n, (...c) => i(...c), u);
}, jc = rr("bm"), Fc = rr("m"), Bc = rr(
  "bu"
), Mc = rr("u"), qc = rr(
  "bum"
), su = rr("um"), Lc = rr(
  "sp"
), Uc = rr("rtg"), Vc = rr("rtc");
function Hc(n, i = _t) {
  wo("ec", n, i);
}
const uu = "components";
function Lf(n, i) {
  return lu(uu, n, !0, i) || n;
}
const cu = Symbol.for("v-ndc");
function Uf(n) {
  return wt(n) ? lu(uu, n, !1) || n : n || cu;
}
function lu(n, i, u = !0, c = !1) {
  const h = mt || _t;
  if (h) {
    const p = h.type;
    {
      const S = Cl(
        p,
        !1
      );
      if (S && (S === i || S === Tn(i) || S === Aa(Tn(i))))
        return p;
    }
    const O = (
      // local registration
      // check instance[type] first which is resolved for options API
      ns(h[n] || p[n], i) || // global registration
      ns(h.appContext[n], i)
    );
    return !O && c ? p : O;
  }
}
function ns(n, i) {
  return n && (n[i] || n[Tn(i)] || n[Aa(Tn(i))]);
}
function Vf(n, i, u, c) {
  let h;
  const p = u && u[c], O = Oe(n);
  if (O || wt(n)) {
    const S = O && Yr(n);
    let D = !1, H = !1;
    S && (D = !an(n), H = sr(n), n = bo(n)), h = new Array(n.length);
    for (let j = 0, L = n.length; j < L; j++)
      h[j] = i(
        D ? H ? so(kt(n[j])) : kt(n[j]) : n[j],
        j,
        void 0,
        p && p[j]
      );
  } else if (typeof n == "number") {
    h = new Array(n);
    for (let S = 0; S < n; S++)
      h[S] = i(S + 1, S, void 0, p && p[S]);
  } else if (et(n))
    if (n[Symbol.iterator])
      h = Array.from(
        n,
        (S, D) => i(S, D, void 0, p && p[D])
      );
    else {
      const S = Object.keys(n);
      h = new Array(S.length);
      for (let D = 0, H = S.length; D < H; D++) {
        const j = S[D];
        h[D] = i(n[j], j, D, p && p[D]);
      }
    }
  else
    h = [];
  return u && (u[c] = h), h;
}
function Hf(n, i, u = {}, c, h) {
  if (mt.ce || mt.parent && zr(mt.parent) && mt.parent.ce)
    return i !== "default" && (u.name = i), ma(), va(
      on,
      null,
      [Xt("slot", u, c && c())],
      64
    );
  let p = n[i];
  p && p._c && (p._d = !1), ma();
  const O = p && fu(p(u)), S = u.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  O && O.key, D = va(
    on,
    {
      key: (S && !En(S) ? S : `_${i}`) + // #7256 force differentiate fallback content from actual content
      (!O && c ? "_fb" : "")
    },
    O || (c ? c() : []),
    O && n._ === 1 ? 64 : -2
  );
  return D.scopeId && (D.slotScopeIds = [D.scopeId + "-s"]), p && p._c && (p._d = !0), D;
}
function fu(n) {
  return n.some((i) => $i(i) ? !(i.type === nr || i.type === on && !fu(i.children)) : !0) ? n : null;
}
const ha = (n) => n ? Nu(n) ? To(n) : ha(n.parent) : null, qi = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Wt(/* @__PURE__ */ Object.create(null), {
    $: (n) => n,
    $el: (n) => n.vnode.el,
    $data: (n) => n.data,
    $props: (n) => n.props,
    $attrs: (n) => n.attrs,
    $slots: (n) => n.slots,
    $refs: (n) => n.refs,
    $parent: (n) => ha(n.parent),
    $root: (n) => ha(n.root),
    $host: (n) => n.ce,
    $emit: (n) => n.emit,
    $options: (n) => pu(n),
    $forceUpdate: (n) => n.f || (n.f = () => {
      qa(n.update);
    }),
    $nextTick: (n) => n.n || (n.n = Pc.bind(n.proxy)),
    $watch: (n) => fl.bind(n)
  })
), na = (n, i) => n !== Je && !n.__isScriptSetup && Ye(n, i), Wc = {
  get({ _: n }, i) {
    if (i === "__v_skip")
      return !0;
    const { ctx: u, setupState: c, data: h, props: p, accessCache: O, type: S, appContext: D } = n;
    let H;
    if (i[0] !== "$") {
      const ae = O[i];
      if (ae !== void 0)
        switch (ae) {
          case 1:
            return c[i];
          case 2:
            return h[i];
          case 4:
            return u[i];
          case 3:
            return p[i];
        }
      else {
        if (na(c, i))
          return O[i] = 1, c[i];
        if (h !== Je && Ye(h, i))
          return O[i] = 2, h[i];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (H = n.propsOptions[0]) && Ye(H, i)
        )
          return O[i] = 3, p[i];
        if (u !== Je && Ye(u, i))
          return O[i] = 4, u[i];
        da && (O[i] = 0);
      }
    }
    const j = qi[i];
    let L, Q;
    if (j)
      return i === "$attrs" && It(n.attrs, "get", ""), j(n);
    if (
      // css module (injected by vue-loader)
      (L = S.__cssModules) && (L = L[i])
    )
      return L;
    if (u !== Je && Ye(u, i))
      return O[i] = 4, u[i];
    if (
      // global properties
      Q = D.config.globalProperties, Ye(Q, i)
    )
      return Q[i];
  },
  set({ _: n }, i, u) {
    const { data: c, setupState: h, ctx: p } = n;
    return na(h, i) ? (h[i] = u, !0) : c !== Je && Ye(c, i) ? (c[i] = u, !0) : Ye(n.props, i) || i[0] === "$" && i.slice(1) in n ? !1 : (p[i] = u, !0);
  },
  has({
    _: { data: n, setupState: i, accessCache: u, ctx: c, appContext: h, propsOptions: p }
  }, O) {
    let S;
    return !!u[O] || n !== Je && Ye(n, O) || na(i, O) || (S = p[0]) && Ye(S, O) || Ye(c, O) || Ye(qi, O) || Ye(h.config.globalProperties, O);
  },
  defineProperty(n, i, u) {
    return u.get != null ? n._.accessCache[i] = 0 : Ye(u, "value") && this.set(n, i, u.value, null), Reflect.defineProperty(n, i, u);
  }
};
function Wf() {
  return hu().slots;
}
function $f() {
  return hu().attrs;
}
function hu() {
  const n = Du();
  return n.setupContext || (n.setupContext = Ku(n));
}
function rs(n) {
  return Oe(n) ? n.reduce(
    (i, u) => (i[u] = null, i),
    {}
  ) : n;
}
function Gf(n, i) {
  const u = {};
  for (const c in n)
    i.includes(c) || Object.defineProperty(u, c, {
      enumerable: !0,
      get: () => n[c]
    });
  return u;
}
let da = !0;
function $c(n) {
  const i = pu(n), u = n.proxy, c = n.ctx;
  da = !1, i.beforeCreate && is(i.beforeCreate, n, "bc");
  const {
    // state
    data: h,
    computed: p,
    methods: O,
    watch: S,
    provide: D,
    inject: H,
    // lifecycle
    created: j,
    beforeMount: L,
    mounted: Q,
    beforeUpdate: ae,
    updated: he,
    activated: de,
    deactivated: He,
    beforeDestroy: ke,
    beforeUnmount: Ke,
    destroyed: qe,
    unmounted: fe,
    render: je,
    renderTracked: ne,
    renderTriggered: te,
    errorCaptured: _e,
    serverPrefetch: F,
    // public API
    expose: Xe,
    inheritAttrs: st,
    // assets
    components: Ne,
    directives: ze,
    filters: $t
  } = i;
  if (H && Gc(H, c, null), O)
    for (const we in O) {
      const Pe = O[we];
      Ie(Pe) && (c[we] = Pe.bind(u));
    }
  if (h) {
    const we = h.call(u, u);
    et(we) && (n.data = Ka(we));
  }
  if (da = !0, p)
    for (const we in p) {
      const Pe = p[we], ot = Ie(Pe) ? Pe.bind(u, u) : Ie(Pe.get) ? Pe.get.bind(u, u) : xn, Qe = !Ie(Pe) && Ie(Pe.set) ? Pe.set.bind(u) : xn, ut = Ga({
        get: ot,
        set: Qe
      });
      Object.defineProperty(c, we, {
        enumerable: !0,
        configurable: !0,
        get: () => ut.value,
        set: (gt) => ut.value = gt
      });
    }
  if (S)
    for (const we in S)
      du(S[we], c, u, we);
  if (D) {
    const we = Ie(D) ? D.call(u) : D;
    Reflect.ownKeys(we).forEach((Pe) => {
      Zc(Pe, we[Pe]);
    });
  }
  j && is(j, n, "c");
  function tt(we, Pe) {
    Oe(Pe) ? Pe.forEach((ot) => we(ot.bind(u))) : Pe && we(Pe.bind(u));
  }
  if (tt(jc, L), tt(Fc, Q), tt(Bc, ae), tt(Mc, he), tt(Nc, de), tt(Rc, He), tt(Hc, _e), tt(Vc, ne), tt(Uc, te), tt(qc, Ke), tt(su, fe), tt(Lc, F), Oe(Xe))
    if (Xe.length) {
      const we = n.exposed || (n.exposed = {});
      Xe.forEach((Pe) => {
        Object.defineProperty(we, Pe, {
          get: () => u[Pe],
          set: (ot) => u[Pe] = ot
        });
      });
    } else n.exposed || (n.exposed = {});
  je && n.render === xn && (n.render = je), st != null && (n.inheritAttrs = st), Ne && (n.components = Ne), ze && (n.directives = ze), F && iu(n);
}
function Gc(n, i, u = xn) {
  Oe(n) && (n = pa(n));
  for (const c in n) {
    const h = n[c];
    let p;
    et(h) ? "default" in h ? p = ro(
      h.from || c,
      h.default,
      !0
    ) : p = ro(h.from || c) : p = ro(h), vt(p) ? Object.defineProperty(i, c, {
      enumerable: !0,
      configurable: !0,
      get: () => p.value,
      set: (O) => p.value = O
    }) : i[c] = p;
  }
}
function is(n, i, u) {
  tr(
    Oe(n) ? n.map((c) => c.bind(i.proxy)) : n.bind(i.proxy),
    i,
    u
  );
}
function du(n, i, u, c) {
  let h = c.includes(".") ? Su(u, c) : () => u[c];
  if (wt(n)) {
    const p = i[n];
    Ie(p) && ia(h, p);
  } else if (Ie(n))
    ia(h, n.bind(u));
  else if (et(n))
    if (Oe(n))
      n.forEach((p) => du(p, i, u, c));
    else {
      const p = Ie(n.handler) ? n.handler.bind(u) : i[n.handler];
      Ie(p) && ia(h, p, n);
    }
}
function pu(n) {
  const i = n.type, { mixins: u, extends: c } = i, {
    mixins: h,
    optionsCache: p,
    config: { optionMergeStrategies: O }
  } = n.appContext, S = p.get(i);
  let D;
  return S ? D = S : !h.length && !u && !c ? D = i : (D = {}, h.length && h.forEach(
    (H) => fo(D, H, O, !0)
  ), fo(D, i, O)), et(i) && p.set(i, D), D;
}
function fo(n, i, u, c = !1) {
  const { mixins: h, extends: p } = i;
  p && fo(n, p, u, !0), h && h.forEach(
    (O) => fo(n, O, u, !0)
  );
  for (const O in i)
    if (!(c && O === "expose")) {
      const S = Yc[O] || u && u[O];
      n[O] = S ? S(n[O], i[O]) : i[O];
    }
  return n;
}
const Yc = {
  data: os,
  props: as,
  emits: as,
  // objects
  methods: Ri,
  computed: Ri,
  // lifecycle
  beforeCreate: qt,
  created: qt,
  beforeMount: qt,
  mounted: qt,
  beforeUpdate: qt,
  updated: qt,
  beforeDestroy: qt,
  beforeUnmount: qt,
  destroyed: qt,
  unmounted: qt,
  activated: qt,
  deactivated: qt,
  errorCaptured: qt,
  serverPrefetch: qt,
  // assets
  components: Ri,
  directives: Ri,
  // watch
  watch: zc,
  // provide / inject
  provide: os,
  inject: Xc
};
function os(n, i) {
  return i ? n ? function() {
    return Wt(
      Ie(n) ? n.call(this, this) : n,
      Ie(i) ? i.call(this, this) : i
    );
  } : i : n;
}
function Xc(n, i) {
  return Ri(pa(n), pa(i));
}
function pa(n) {
  if (Oe(n)) {
    const i = {};
    for (let u = 0; u < n.length; u++)
      i[n[u]] = n[u];
    return i;
  }
  return n;
}
function qt(n, i) {
  return n ? [...new Set([].concat(n, i))] : i;
}
function Ri(n, i) {
  return n ? Wt(/* @__PURE__ */ Object.create(null), n, i) : i;
}
function as(n, i) {
  return n ? Oe(n) && Oe(i) ? [.../* @__PURE__ */ new Set([...n, ...i])] : Wt(
    /* @__PURE__ */ Object.create(null),
    rs(n),
    rs(i ?? {})
  ) : i;
}
function zc(n, i) {
  if (!n) return i;
  if (!i) return n;
  const u = Wt(/* @__PURE__ */ Object.create(null), n);
  for (const c in i)
    u[c] = qt(n[c], i[c]);
  return u;
}
function yu() {
  return {
    app: null,
    config: {
      isNativeTag: ju,
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
let Qc = 0;
function Jc(n, i) {
  return function(c, h = null) {
    Ie(c) || (c = Wt({}, c)), h != null && !et(h) && (h = null);
    const p = yu(), O = /* @__PURE__ */ new WeakSet(), S = [];
    let D = !1;
    const H = p.app = {
      _uid: Qc++,
      _component: c,
      _props: h,
      _container: null,
      _context: p,
      _instance: null,
      version: Dl,
      get config() {
        return p.config;
      },
      set config(j) {
      },
      use(j, ...L) {
        return O.has(j) || (j && Ie(j.install) ? (O.add(j), j.install(H, ...L)) : Ie(j) && (O.add(j), j(H, ...L))), H;
      },
      mixin(j) {
        return p.mixins.includes(j) || p.mixins.push(j), H;
      },
      component(j, L) {
        return L ? (p.components[j] = L, H) : p.components[j];
      },
      directive(j, L) {
        return L ? (p.directives[j] = L, H) : p.directives[j];
      },
      mount(j, L, Q) {
        if (!D) {
          const ae = H._ceVNode || Xt(c, h);
          return ae.appContext = p, Q === !0 ? Q = "svg" : Q === !1 && (Q = void 0), n(ae, j, Q), D = !0, H._container = j, j.__vue_app__ = H, To(ae.component);
        }
      },
      onUnmount(j) {
        S.push(j);
      },
      unmount() {
        D && (tr(
          S,
          H._instance,
          16
        ), n(null, H._container), delete H._container.__vue_app__);
      },
      provide(j, L) {
        return p.provides[j] = L, H;
      },
      runWithContext(j) {
        const L = Vr;
        Vr = H;
        try {
          return j();
        } finally {
          Vr = L;
        }
      }
    };
    return H;
  };
}
let Vr = null;
function Zc(n, i) {
  if (_t) {
    let u = _t.provides;
    const c = _t.parent && _t.parent.provides;
    c === u && (u = _t.provides = Object.create(c)), u[n] = i;
  }
}
function ro(n, i, u = !1) {
  const c = _t || mt;
  if (c || Vr) {
    let h = Vr ? Vr._context.provides : c ? c.parent == null || c.ce ? c.vnode.appContext && c.vnode.appContext.provides : c.parent.provides : void 0;
    if (h && n in h)
      return h[n];
    if (arguments.length > 1)
      return u && Ie(i) ? i.call(c && c.proxy) : i;
  }
}
function Yf() {
  return !!(_t || mt || Vr);
}
const mu = {}, vu = () => Object.create(mu), gu = (n) => Object.getPrototypeOf(n) === mu;
function el(n, i, u, c = !1) {
  const h = {}, p = vu();
  n.propsDefaults = /* @__PURE__ */ Object.create(null), bu(n, i, h, p);
  for (const O in n.propsOptions[0])
    O in h || (h[O] = void 0);
  u ? n.props = c ? h : yc(h) : n.type.props ? n.props = h : n.props = p, n.attrs = p;
}
function tl(n, i, u, c) {
  const {
    props: h,
    attrs: p,
    vnode: { patchFlag: O }
  } = n, S = Ge(h), [D] = n.propsOptions;
  let H = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (c || O > 0) && !(O & 16)
  ) {
    if (O & 8) {
      const j = n.vnode.dynamicProps;
      for (let L = 0; L < j.length; L++) {
        let Q = j[L];
        if (xo(n.emitsOptions, Q))
          continue;
        const ae = i[Q];
        if (D)
          if (Ye(p, Q))
            ae !== p[Q] && (p[Q] = ae, H = !0);
          else {
            const he = Tn(Q);
            h[he] = ya(
              D,
              S,
              he,
              ae,
              n,
              !1
            );
          }
        else
          ae !== p[Q] && (p[Q] = ae, H = !0);
      }
    }
  } else {
    bu(n, i, h, p) && (H = !0);
    let j;
    for (const L in S)
      (!i || // for camelCase
      !Ye(i, L) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((j = Xi(L)) === L || !Ye(i, j))) && (D ? u && // for camelCase
      (u[L] !== void 0 || // for kebab-case
      u[j] !== void 0) && (h[L] = ya(
        D,
        S,
        L,
        void 0,
        n,
        !0
      )) : delete h[L]);
    if (p !== S)
      for (const L in p)
        (!i || !Ye(i, L)) && (delete p[L], H = !0);
  }
  H && zn(n.attrs, "set", "");
}
function bu(n, i, u, c) {
  const [h, p] = n.propsOptions;
  let O = !1, S;
  if (i)
    for (let D in i) {
      if (Ki(D))
        continue;
      const H = i[D];
      let j;
      h && Ye(h, j = Tn(D)) ? !p || !p.includes(j) ? u[j] = H : (S || (S = {}))[j] = H : xo(n.emitsOptions, D) || (!(D in c) || H !== c[D]) && (c[D] = H, O = !0);
    }
  if (p) {
    const D = Ge(u), H = S || Je;
    for (let j = 0; j < p.length; j++) {
      const L = p[j];
      u[L] = ya(
        h,
        D,
        L,
        H[L],
        n,
        !Ye(H, L)
      );
    }
  }
  return O;
}
function ya(n, i, u, c, h, p) {
  const O = n[u];
  if (O != null) {
    const S = Ye(O, "default");
    if (S && c === void 0) {
      const D = O.default;
      if (O.type !== Function && !O.skipFactory && Ie(D)) {
        const { propsDefaults: H } = h;
        if (u in H)
          c = H[u];
        else {
          const j = Qi(h);
          c = H[u] = D.call(
            null,
            i
          ), j();
        }
      } else
        c = D;
      h.ce && h.ce._setProp(u, c);
    }
    O[
      0
      /* shouldCast */
    ] && (p && !S ? c = !1 : O[
      1
      /* shouldCastTrue */
    ] && (c === "" || c === Xi(u)) && (c = !0));
  }
  return c;
}
const nl = /* @__PURE__ */ new WeakMap();
function _u(n, i, u = !1) {
  const c = u ? nl : i.propsCache, h = c.get(n);
  if (h)
    return h;
  const p = n.props, O = {}, S = [];
  let D = !1;
  if (!Ie(n)) {
    const j = (L) => {
      D = !0;
      const [Q, ae] = _u(L, i, !0);
      Wt(O, Q), ae && S.push(...ae);
    };
    !u && i.mixins.length && i.mixins.forEach(j), n.extends && j(n.extends), n.mixins && n.mixins.forEach(j);
  }
  if (!p && !D)
    return et(n) && c.set(n, $r), $r;
  if (Oe(p))
    for (let j = 0; j < p.length; j++) {
      const L = Tn(p[j]);
      ss(L) && (O[L] = Je);
    }
  else if (p)
    for (const j in p) {
      const L = Tn(j);
      if (ss(L)) {
        const Q = p[j], ae = O[L] = Oe(Q) || Ie(Q) ? { type: Q } : Wt({}, Q), he = ae.type;
        let de = !1, He = !0;
        if (Oe(he))
          for (let ke = 0; ke < he.length; ++ke) {
            const Ke = he[ke], qe = Ie(Ke) && Ke.name;
            if (qe === "Boolean") {
              de = !0;
              break;
            } else qe === "String" && (He = !1);
          }
        else
          de = Ie(he) && he.name === "Boolean";
        ae[
          0
          /* shouldCast */
        ] = de, ae[
          1
          /* shouldCastTrue */
        ] = He, (de || Ye(ae, "default")) && S.push(L);
      }
    }
  const H = [O, S];
  return et(n) && c.set(n, H), H;
}
function ss(n) {
  return n[0] !== "$" && !Ki(n);
}
const Ua = (n) => n[0] === "_" || n === "$stable", Va = (n) => Oe(n) ? n.map(wn) : [wn(n)], rl = (n, i, u) => {
  if (i._n)
    return i;
  const c = Cc((...h) => Va(i(...h)), u);
  return c._c = !1, c;
}, wu = (n, i, u) => {
  const c = n._ctx;
  for (const h in n) {
    if (Ua(h)) continue;
    const p = n[h];
    if (Ie(p))
      i[h] = rl(h, p, c);
    else if (p != null) {
      const O = Va(p);
      i[h] = () => O;
    }
  }
}, xu = (n, i) => {
  const u = Va(i);
  n.slots.default = () => u;
}, Eu = (n, i, u) => {
  for (const c in i)
    (u || !Ua(c)) && (n[c] = i[c]);
}, il = (n, i, u) => {
  const c = n.slots = vu();
  if (n.vnode.shapeFlag & 32) {
    const h = i.__;
    h && aa(c, "__", h, !0);
    const p = i._;
    p ? (Eu(c, i, u), u && aa(c, "_", p, !0)) : wu(i, c);
  } else i && xu(n, i);
}, ol = (n, i, u) => {
  const { vnode: c, slots: h } = n;
  let p = !0, O = Je;
  if (c.shapeFlag & 32) {
    const S = i._;
    S ? u && S === 1 ? p = !1 : Eu(h, i, u) : (p = !i.$stable, wu(i, h)), O = i;
  } else i && (xu(n, i), O = { default: 1 });
  if (p)
    for (const S in h)
      !Ua(S) && O[S] == null && delete h[S];
}, Lt = gl;
function Xf(n) {
  return al(n);
}
function al(n, i) {
  const u = yo();
  u.__VUE__ = !0;
  const {
    insert: c,
    remove: h,
    patchProp: p,
    createElement: O,
    createText: S,
    createComment: D,
    setText: H,
    setElementText: j,
    parentNode: L,
    nextSibling: Q,
    setScopeId: ae = xn,
    insertStaticContent: he
  } = n, de = (P, R, Y, z = null, ee = null, J = null, se = void 0, ce = null, re = !!R.dynamicChildren) => {
    if (P === R)
      return;
    P && !Ni(P, R) && (z = k(P), gt(P, ee, J, !0), P = null), R.patchFlag === -2 && (re = !1, R.dynamicChildren = null);
    const { type: Z, ref: ve, shapeFlag: le } = R;
    switch (Z) {
      case Eo:
        He(P, R, Y, z);
        break;
      case nr:
        ke(P, R, Y, z);
        break;
      case oa:
        P == null && Ke(R, Y, z, se);
        break;
      case on:
        Ne(
          P,
          R,
          Y,
          z,
          ee,
          J,
          se,
          ce,
          re
        );
        break;
      default:
        le & 1 ? je(
          P,
          R,
          Y,
          z,
          ee,
          J,
          se,
          ce,
          re
        ) : le & 6 ? ze(
          P,
          R,
          Y,
          z,
          ee,
          J,
          se,
          ce,
          re
        ) : (le & 64 || le & 128) && Z.process(
          P,
          R,
          Y,
          z,
          ee,
          J,
          se,
          ce,
          re,
          M
        );
    }
    ve != null && ee ? Mi(ve, P && P.ref, J, R || P, !R) : ve == null && P && P.ref != null && Mi(P.ref, null, J, P, !0);
  }, He = (P, R, Y, z) => {
    if (P == null)
      c(
        R.el = S(R.children),
        Y,
        z
      );
    else {
      const ee = R.el = P.el;
      R.children !== P.children && H(ee, R.children);
    }
  }, ke = (P, R, Y, z) => {
    P == null ? c(
      R.el = D(R.children || ""),
      Y,
      z
    ) : R.el = P.el;
  }, Ke = (P, R, Y, z) => {
    [P.el, P.anchor] = he(
      P.children,
      R,
      Y,
      z,
      P.el,
      P.anchor
    );
  }, qe = ({ el: P, anchor: R }, Y, z) => {
    let ee;
    for (; P && P !== R; )
      ee = Q(P), c(P, Y, z), P = ee;
    c(R, Y, z);
  }, fe = ({ el: P, anchor: R }) => {
    let Y;
    for (; P && P !== R; )
      Y = Q(P), h(P), P = Y;
    h(R);
  }, je = (P, R, Y, z, ee, J, se, ce, re) => {
    R.type === "svg" ? se = "svg" : R.type === "math" && (se = "mathml"), P == null ? ne(
      R,
      Y,
      z,
      ee,
      J,
      se,
      ce,
      re
    ) : F(
      P,
      R,
      ee,
      J,
      se,
      ce,
      re
    );
  }, ne = (P, R, Y, z, ee, J, se, ce) => {
    let re, Z;
    const { props: ve, shapeFlag: le, transition: ge, dirs: be } = P;
    if (re = P.el = O(
      P.type,
      J,
      ve && ve.is,
      ve
    ), le & 8 ? j(re, P.children) : le & 16 && _e(
      P.children,
      re,
      null,
      z,
      ee,
      ra(P, J),
      se,
      ce
    ), be && Mr(P, null, z, "created"), te(re, P, P.scopeId, se, z), ve) {
      for (const De in ve)
        De !== "value" && !Ki(De) && p(re, De, null, ve[De], J, z);
      "value" in ve && p(re, "value", null, ve.value, J), (Z = ve.onVnodeBeforeMount) && bn(Z, z, P);
    }
    be && Mr(P, null, z, "beforeMount");
    const Ee = sl(ee, ge);
    Ee && ge.beforeEnter(re), c(re, R, Y), ((Z = ve && ve.onVnodeMounted) || Ee || be) && Lt(() => {
      Z && bn(Z, z, P), Ee && ge.enter(re), be && Mr(P, null, z, "mounted");
    }, ee);
  }, te = (P, R, Y, z, ee) => {
    if (Y && ae(P, Y), z)
      for (let J = 0; J < z.length; J++)
        ae(P, z[J]);
    if (ee) {
      let J = ee.subTree;
      if (R === J || ku(J.type) && (J.ssContent === R || J.ssFallback === R)) {
        const se = ee.vnode;
        te(
          P,
          se,
          se.scopeId,
          se.slotScopeIds,
          ee.parent
        );
      }
    }
  }, _e = (P, R, Y, z, ee, J, se, ce, re = 0) => {
    for (let Z = re; Z < P.length; Z++) {
      const ve = P[Z] = ce ? or(P[Z]) : wn(P[Z]);
      de(
        null,
        ve,
        R,
        Y,
        z,
        ee,
        J,
        se,
        ce
      );
    }
  }, F = (P, R, Y, z, ee, J, se) => {
    const ce = R.el = P.el;
    let { patchFlag: re, dynamicChildren: Z, dirs: ve } = R;
    re |= P.patchFlag & 16;
    const le = P.props || Je, ge = R.props || Je;
    let be;
    if (Y && qr(Y, !1), (be = ge.onVnodeBeforeUpdate) && bn(be, Y, R, P), ve && Mr(R, P, Y, "beforeUpdate"), Y && qr(Y, !0), (le.innerHTML && ge.innerHTML == null || le.textContent && ge.textContent == null) && j(ce, ""), Z ? Xe(
      P.dynamicChildren,
      Z,
      ce,
      Y,
      z,
      ra(R, ee),
      J
    ) : se || Pe(
      P,
      R,
      ce,
      null,
      Y,
      z,
      ra(R, ee),
      J,
      !1
    ), re > 0) {
      if (re & 16)
        st(ce, le, ge, Y, ee);
      else if (re & 2 && le.class !== ge.class && p(ce, "class", null, ge.class, ee), re & 4 && p(ce, "style", le.style, ge.style, ee), re & 8) {
        const Ee = R.dynamicProps;
        for (let De = 0; De < Ee.length; De++) {
          const Fe = Ee[De], nt = le[Fe], ct = ge[Fe];
          (ct !== nt || Fe === "value") && p(ce, Fe, nt, ct, ee, Y);
        }
      }
      re & 1 && P.children !== R.children && j(ce, R.children);
    } else !se && Z == null && st(ce, le, ge, Y, ee);
    ((be = ge.onVnodeUpdated) || ve) && Lt(() => {
      be && bn(be, Y, R, P), ve && Mr(R, P, Y, "updated");
    }, z);
  }, Xe = (P, R, Y, z, ee, J, se) => {
    for (let ce = 0; ce < R.length; ce++) {
      const re = P[ce], Z = R[ce], ve = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        re.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (re.type === on || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ni(re, Z) || // - In the case of a component, it could contain anything.
        re.shapeFlag & 198) ? L(re.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Y
        )
      );
      de(
        re,
        Z,
        ve,
        null,
        z,
        ee,
        J,
        se,
        !0
      );
    }
  }, st = (P, R, Y, z, ee) => {
    if (R !== Y) {
      if (R !== Je)
        for (const J in R)
          !Ki(J) && !(J in Y) && p(
            P,
            J,
            R[J],
            null,
            ee,
            z
          );
      for (const J in Y) {
        if (Ki(J)) continue;
        const se = Y[J], ce = R[J];
        se !== ce && J !== "value" && p(P, J, ce, se, ee, z);
      }
      "value" in Y && p(P, "value", R.value, Y.value, ee);
    }
  }, Ne = (P, R, Y, z, ee, J, se, ce, re) => {
    const Z = R.el = P ? P.el : S(""), ve = R.anchor = P ? P.anchor : S("");
    let { patchFlag: le, dynamicChildren: ge, slotScopeIds: be } = R;
    be && (ce = ce ? ce.concat(be) : be), P == null ? (c(Z, Y, z), c(ve, Y, z), _e(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      R.children || [],
      Y,
      ve,
      ee,
      J,
      se,
      ce,
      re
    )) : le > 0 && le & 64 && ge && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    P.dynamicChildren ? (Xe(
      P.dynamicChildren,
      ge,
      Y,
      ee,
      J,
      se,
      ce
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (R.key != null || ee && R === ee.subTree) && Ha(
      P,
      R,
      !0
      /* shallow */
    )) : Pe(
      P,
      R,
      Y,
      ve,
      ee,
      J,
      se,
      ce,
      re
    );
  }, ze = (P, R, Y, z, ee, J, se, ce, re) => {
    R.slotScopeIds = ce, P == null ? R.shapeFlag & 512 ? ee.ctx.activate(
      R,
      Y,
      z,
      se,
      re
    ) : $t(
      R,
      Y,
      z,
      ee,
      J,
      se,
      re
    ) : At(P, R, re);
  }, $t = (P, R, Y, z, ee, J, se) => {
    const ce = P.component = Sl(
      P,
      z,
      ee
    );
    if (ou(P) && (ce.ctx.renderer = M), Pl(ce, !1, se), ce.asyncDep) {
      if (ee && ee.registerDep(ce, tt, se), !P.el) {
        const re = ce.subTree = Xt(nr);
        ke(null, re, R, Y);
      }
    } else
      tt(
        ce,
        P,
        R,
        Y,
        ee,
        J,
        se
      );
  }, At = (P, R, Y) => {
    const z = R.component = P.component;
    if (ml(P, R, Y))
      if (z.asyncDep && !z.asyncResolved) {
        we(z, R, Y);
        return;
      } else
        z.next = R, z.update();
    else
      R.el = P.el, z.vnode = R;
  }, tt = (P, R, Y, z, ee, J, se) => {
    const ce = () => {
      if (P.isMounted) {
        let { next: le, bu: ge, u: be, parent: Ee, vnode: De } = P;
        {
          const rt = Tu(P);
          if (rt) {
            le && (le.el = De.el, we(P, le, se)), rt.asyncDep.then(() => {
              P.isUnmounted || ce();
            });
            return;
          }
        }
        let Fe = le, nt;
        qr(P, !1), le ? (le.el = De.el, we(P, le, se)) : le = De, ge && Qo(ge), (nt = le.props && le.props.onVnodeBeforeUpdate) && bn(nt, Ee, le, De), qr(P, !0);
        const ct = cs(P), dt = P.subTree;
        P.subTree = ct, de(
          dt,
          ct,
          // parent may have changed if it's in a teleport
          L(dt.el),
          // anchor may have changed if it's in a fragment
          k(dt),
          P,
          ee,
          J
        ), le.el = ct.el, Fe === null && vl(P, ct.el), be && Lt(be, ee), (nt = le.props && le.props.onVnodeUpdated) && Lt(
          () => bn(nt, Ee, le, De),
          ee
        );
      } else {
        let le;
        const { el: ge, props: be } = R, { bm: Ee, m: De, parent: Fe, root: nt, type: ct } = P, dt = zr(R);
        qr(P, !1), Ee && Qo(Ee), !dt && (le = be && be.onVnodeBeforeMount) && bn(le, Fe, R), qr(P, !0);
        {
          nt.ce && // @ts-expect-error _def is private
          nt.ce._def.shadowRoot !== !1 && nt.ce._injectChildStyle(ct);
          const rt = P.subTree = cs(P);
          de(
            null,
            rt,
            Y,
            z,
            P,
            ee,
            J
          ), R.el = rt.el;
        }
        if (De && Lt(De, ee), !dt && (le = be && be.onVnodeMounted)) {
          const rt = R;
          Lt(
            () => bn(le, Fe, rt),
            ee
          );
        }
        (R.shapeFlag & 256 || Fe && zr(Fe.vnode) && Fe.vnode.shapeFlag & 256) && P.a && Lt(P.a, ee), P.isMounted = !0, R = Y = z = null;
      }
    };
    P.scope.on();
    const re = P.effect = new Ds(ce);
    P.scope.off();
    const Z = P.update = re.run.bind(re), ve = P.job = re.runIfDirty.bind(re);
    ve.i = P, ve.id = P.uid, re.scheduler = () => qa(ve), qr(P, !0), Z();
  }, we = (P, R, Y) => {
    R.component = P;
    const z = P.vnode.props;
    P.vnode = R, P.next = null, tl(P, R.props, z, Y), ol(P, R.children, Y), Zn(), Ja(P), er();
  }, Pe = (P, R, Y, z, ee, J, se, ce, re = !1) => {
    const Z = P && P.children, ve = P ? P.shapeFlag : 0, le = R.children, { patchFlag: ge, shapeFlag: be } = R;
    if (ge > 0) {
      if (ge & 128) {
        Qe(
          Z,
          le,
          Y,
          z,
          ee,
          J,
          se,
          ce,
          re
        );
        return;
      } else if (ge & 256) {
        ot(
          Z,
          le,
          Y,
          z,
          ee,
          J,
          se,
          ce,
          re
        );
        return;
      }
    }
    be & 8 ? (ve & 16 && lt(Z, ee, J), le !== Z && j(Y, le)) : ve & 16 ? be & 16 ? Qe(
      Z,
      le,
      Y,
      z,
      ee,
      J,
      se,
      ce,
      re
    ) : lt(Z, ee, J, !0) : (ve & 8 && j(Y, ""), be & 16 && _e(
      le,
      Y,
      z,
      ee,
      J,
      se,
      ce,
      re
    ));
  }, ot = (P, R, Y, z, ee, J, se, ce, re) => {
    P = P || $r, R = R || $r;
    const Z = P.length, ve = R.length, le = Math.min(Z, ve);
    let ge;
    for (ge = 0; ge < le; ge++) {
      const be = R[ge] = re ? or(R[ge]) : wn(R[ge]);
      de(
        P[ge],
        be,
        Y,
        null,
        ee,
        J,
        se,
        ce,
        re
      );
    }
    Z > ve ? lt(
      P,
      ee,
      J,
      !0,
      !1,
      le
    ) : _e(
      R,
      Y,
      z,
      ee,
      J,
      se,
      ce,
      re,
      le
    );
  }, Qe = (P, R, Y, z, ee, J, se, ce, re) => {
    let Z = 0;
    const ve = R.length;
    let le = P.length - 1, ge = ve - 1;
    for (; Z <= le && Z <= ge; ) {
      const be = P[Z], Ee = R[Z] = re ? or(R[Z]) : wn(R[Z]);
      if (Ni(be, Ee))
        de(
          be,
          Ee,
          Y,
          null,
          ee,
          J,
          se,
          ce,
          re
        );
      else
        break;
      Z++;
    }
    for (; Z <= le && Z <= ge; ) {
      const be = P[le], Ee = R[ge] = re ? or(R[ge]) : wn(R[ge]);
      if (Ni(be, Ee))
        de(
          be,
          Ee,
          Y,
          null,
          ee,
          J,
          se,
          ce,
          re
        );
      else
        break;
      le--, ge--;
    }
    if (Z > le) {
      if (Z <= ge) {
        const be = ge + 1, Ee = be < ve ? R[be].el : z;
        for (; Z <= ge; )
          de(
            null,
            R[Z] = re ? or(R[Z]) : wn(R[Z]),
            Y,
            Ee,
            ee,
            J,
            se,
            ce,
            re
          ), Z++;
      }
    } else if (Z > ge)
      for (; Z <= le; )
        gt(P[Z], ee, J, !0), Z++;
    else {
      const be = Z, Ee = Z, De = /* @__PURE__ */ new Map();
      for (Z = Ee; Z <= ge; Z++) {
        const We = R[Z] = re ? or(R[Z]) : wn(R[Z]);
        We.key != null && De.set(We.key, Z);
      }
      let Fe, nt = 0;
      const ct = ge - Ee + 1;
      let dt = !1, rt = 0;
      const Dt = new Array(ct);
      for (Z = 0; Z < ct; Z++) Dt[Z] = 0;
      for (Z = be; Z <= le; Z++) {
        const We = P[Z];
        if (nt >= ct) {
          gt(We, ee, J, !0);
          continue;
        }
        let X;
        if (We.key != null)
          X = De.get(We.key);
        else
          for (Fe = Ee; Fe <= ge; Fe++)
            if (Dt[Fe - Ee] === 0 && Ni(We, R[Fe])) {
              X = Fe;
              break;
            }
        X === void 0 ? gt(We, ee, J, !0) : (Dt[X - Ee] = Z + 1, X >= rt ? rt = X : dt = !0, de(
          We,
          R[X],
          Y,
          null,
          ee,
          J,
          se,
          ce,
          re
        ), nt++);
      }
      const gn = dt ? ul(Dt) : $r;
      for (Fe = gn.length - 1, Z = ct - 1; Z >= 0; Z--) {
        const We = Ee + Z, X = R[We], Yt = We + 1 < ve ? R[We + 1].el : z;
        Dt[Z] === 0 ? de(
          null,
          X,
          Y,
          Yt,
          ee,
          J,
          se,
          ce,
          re
        ) : dt && (Fe < 0 || Z !== gn[Fe] ? ut(X, Y, Yt, 2) : Fe--);
      }
    }
  }, ut = (P, R, Y, z, ee = null) => {
    const { el: J, type: se, transition: ce, children: re, shapeFlag: Z } = P;
    if (Z & 6) {
      ut(P.component.subTree, R, Y, z);
      return;
    }
    if (Z & 128) {
      P.suspense.move(R, Y, z);
      return;
    }
    if (Z & 64) {
      se.move(P, R, Y, M);
      return;
    }
    if (se === on) {
      c(J, R, Y);
      for (let le = 0; le < re.length; le++)
        ut(re[le], R, Y, z);
      c(P.anchor, R, Y);
      return;
    }
    if (se === oa) {
      qe(P, R, Y);
      return;
    }
    if (z !== 2 && Z & 1 && ce)
      if (z === 0)
        ce.beforeEnter(J), c(J, R, Y), Lt(() => ce.enter(J), ee);
      else {
        const { leave: le, delayLeave: ge, afterLeave: be } = ce, Ee = () => {
          P.ctx.isUnmounted ? h(J) : c(J, R, Y);
        }, De = () => {
          le(J, () => {
            Ee(), be && be();
          });
        };
        ge ? ge(J, Ee, De) : De();
      }
    else
      c(J, R, Y);
  }, gt = (P, R, Y, z = !1, ee = !1) => {
    const {
      type: J,
      props: se,
      ref: ce,
      children: re,
      dynamicChildren: Z,
      shapeFlag: ve,
      patchFlag: le,
      dirs: ge,
      cacheIndex: be
    } = P;
    if (le === -2 && (ee = !1), ce != null && (Zn(), Mi(ce, null, Y, P, !0), er()), be != null && (R.renderCache[be] = void 0), ve & 256) {
      R.ctx.deactivate(P);
      return;
    }
    const Ee = ve & 1 && ge, De = !zr(P);
    let Fe;
    if (De && (Fe = se && se.onVnodeBeforeUnmount) && bn(Fe, R, P), ve & 6)
      Gt(P.component, Y, z);
    else {
      if (ve & 128) {
        P.suspense.unmount(Y, z);
        return;
      }
      Ee && Mr(P, null, R, "beforeUnmount"), ve & 64 ? P.type.remove(
        P,
        R,
        Y,
        M,
        z
      ) : Z && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Z.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (J !== on || le > 0 && le & 64) ? lt(
        Z,
        R,
        Y,
        !1,
        !0
      ) : (J === on && le & 384 || !ee && ve & 16) && lt(re, R, Y), z && bt(P);
    }
    (De && (Fe = se && se.onVnodeUnmounted) || Ee) && Lt(() => {
      Fe && bn(Fe, R, P), Ee && Mr(P, null, R, "unmounted");
    }, Y);
  }, bt = (P) => {
    const { type: R, el: Y, anchor: z, transition: ee } = P;
    if (R === on) {
      vn(Y, z);
      return;
    }
    if (R === oa) {
      fe(P);
      return;
    }
    const J = () => {
      h(Y), ee && !ee.persisted && ee.afterLeave && ee.afterLeave();
    };
    if (P.shapeFlag & 1 && ee && !ee.persisted) {
      const { leave: se, delayLeave: ce } = ee, re = () => se(Y, J);
      ce ? ce(P.el, J, re) : re();
    } else
      J();
  }, vn = (P, R) => {
    let Y;
    for (; P !== R; )
      Y = Q(P), h(P), P = Y;
    h(R);
  }, Gt = (P, R, Y) => {
    const {
      bum: z,
      scope: ee,
      job: J,
      subTree: se,
      um: ce,
      m: re,
      a: Z,
      parent: ve,
      slots: { __: le }
    } = P;
    us(re), us(Z), z && Qo(z), ve && Oe(le) && le.forEach((ge) => {
      ve.renderCache[ge] = void 0;
    }), ee.stop(), J && (J.flags |= 8, gt(se, P, R, Y)), ce && Lt(ce, R), Lt(() => {
      P.isUnmounted = !0;
    }, R), R && R.pendingBranch && !R.isUnmounted && P.asyncDep && !P.asyncResolved && P.suspenseId === R.pendingId && (R.deps--, R.deps === 0 && R.resolve());
  }, lt = (P, R, Y, z = !1, ee = !1, J = 0) => {
    for (let se = J; se < P.length; se++)
      gt(P[se], R, Y, z, ee);
  }, k = (P) => {
    if (P.shapeFlag & 6)
      return k(P.component.subTree);
    if (P.shapeFlag & 128)
      return P.suspense.next();
    const R = Q(P.anchor || P.el), Y = R && R[tu];
    return Y ? Q(Y) : R;
  };
  let b = !1;
  const N = (P, R, Y) => {
    P == null ? R._vnode && gt(R._vnode, null, null, !0) : de(
      R._vnode || null,
      P,
      R,
      null,
      null,
      null,
      Y
    ), R._vnode = P, b || (b = !0, Ja(), Js(), b = !1);
  }, M = {
    p: de,
    um: gt,
    m: ut,
    r: bt,
    mt: $t,
    mc: _e,
    pc: Pe,
    pbc: Xe,
    n: k,
    o: n
  };
  return {
    render: N,
    hydrate: void 0,
    createApp: Jc(N)
  };
}
function ra({ type: n, props: i }, u) {
  return u === "svg" && n === "foreignObject" || u === "mathml" && n === "annotation-xml" && i && i.encoding && i.encoding.includes("html") ? void 0 : u;
}
function qr({ effect: n, job: i }, u) {
  u ? (n.flags |= 32, i.flags |= 4) : (n.flags &= -33, i.flags &= -5);
}
function sl(n, i) {
  return (!n || n && !n.pendingBranch) && i && !i.persisted;
}
function Ha(n, i, u = !1) {
  const c = n.children, h = i.children;
  if (Oe(c) && Oe(h))
    for (let p = 0; p < c.length; p++) {
      const O = c[p];
      let S = h[p];
      S.shapeFlag & 1 && !S.dynamicChildren && ((S.patchFlag <= 0 || S.patchFlag === 32) && (S = h[p] = or(h[p]), S.el = O.el), !u && S.patchFlag !== -2 && Ha(O, S)), S.type === Eo && (S.el = O.el), S.type === nr && !S.el && (S.el = O.el);
    }
}
function ul(n) {
  const i = n.slice(), u = [0];
  let c, h, p, O, S;
  const D = n.length;
  for (c = 0; c < D; c++) {
    const H = n[c];
    if (H !== 0) {
      if (h = u[u.length - 1], n[h] < H) {
        i[c] = h, u.push(c);
        continue;
      }
      for (p = 0, O = u.length - 1; p < O; )
        S = p + O >> 1, n[u[S]] < H ? p = S + 1 : O = S;
      H < n[u[p]] && (p > 0 && (i[c] = u[p - 1]), u[p] = c);
    }
  }
  for (p = u.length, O = u[p - 1]; p-- > 0; )
    u[p] = O, O = i[O];
  return u;
}
function Tu(n) {
  const i = n.subTree.component;
  if (i)
    return i.asyncDep && !i.asyncResolved ? i : Tu(i);
}
function us(n) {
  if (n)
    for (let i = 0; i < n.length; i++)
      n[i].flags |= 8;
}
const cl = Symbol.for("v-scx"), ll = () => ro(cl);
function Ou(n, i) {
  return Wa(n, null, i);
}
function ia(n, i, u) {
  return Wa(n, i, u);
}
function Wa(n, i, u = Je) {
  const { immediate: c, deep: h, flush: p, once: O } = u, S = Wt({}, u), D = i && c || !i && p !== "post";
  let H;
  if (Gi) {
    if (p === "sync") {
      const ae = ll();
      H = ae.__watcherHandles || (ae.__watcherHandles = []);
    } else if (!D) {
      const ae = () => {
      };
      return ae.stop = xn, ae.resume = xn, ae.pause = xn, ae;
    }
  }
  const j = _t;
  S.call = (ae, he, de) => tr(ae, j, he, de);
  let L = !1;
  p === "post" ? S.scheduler = (ae) => {
    Lt(ae, j && j.suspense);
  } : p !== "sync" && (L = !0, S.scheduler = (ae, he) => {
    he ? ae() : qa(ae);
  }), S.augmentJob = (ae) => {
    i && (ae.flags |= 4), L && (ae.flags |= 2, j && (ae.id = j.uid, ae.i = j));
  };
  const Q = Oc(n, i, S);
  return Gi && (H ? H.push(Q) : D && Q()), Q;
}
function fl(n, i, u) {
  const c = this.proxy, h = wt(n) ? n.includes(".") ? Su(c, n) : () => c[n] : n.bind(c, c);
  let p;
  Ie(i) ? p = i : (p = i.handler, u = i);
  const O = Qi(this), S = Wa(h, p.bind(c), u);
  return O(), S;
}
function Su(n, i) {
  const u = i.split(".");
  return () => {
    let c = n;
    for (let h = 0; h < u.length && c; h++)
      c = c[u[h]];
    return c;
  };
}
const hl = (n, i) => i === "modelValue" || i === "model-value" ? n.modelModifiers : n[`${i}Modifiers`] || n[`${Tn(i)}Modifiers`] || n[`${Xi(i)}Modifiers`];
function dl(n, i, ...u) {
  if (n.isUnmounted) return;
  const c = n.vnode.props || Je;
  let h = u;
  const p = i.startsWith("update:"), O = p && hl(c, i.slice(7));
  O && (O.trim && (h = u.map((j) => wt(j) ? j.trim() : j)), O.number && (h = u.map(Lu)));
  let S, D = c[S = zo(i)] || // also try camelCase event handler (#2249)
  c[S = zo(Tn(i))];
  !D && p && (D = c[S = zo(Xi(i))]), D && tr(
    D,
    n,
    6,
    h
  );
  const H = c[S + "Once"];
  if (H) {
    if (!n.emitted)
      n.emitted = {};
    else if (n.emitted[S])
      return;
    n.emitted[S] = !0, tr(
      H,
      n,
      6,
      h
    );
  }
}
function Pu(n, i, u = !1) {
  const c = i.emitsCache, h = c.get(n);
  if (h !== void 0)
    return h;
  const p = n.emits;
  let O = {}, S = !1;
  if (!Ie(n)) {
    const D = (H) => {
      const j = Pu(H, i, !0);
      j && (S = !0, Wt(O, j));
    };
    !u && i.mixins.length && i.mixins.forEach(D), n.extends && D(n.extends), n.mixins && n.mixins.forEach(D);
  }
  return !p && !S ? (et(n) && c.set(n, null), null) : (Oe(p) ? p.forEach((D) => O[D] = null) : Wt(O, p), et(n) && c.set(n, O), O);
}
function xo(n, i) {
  return !n || !Sa(i) ? !1 : (i = i.slice(2).replace(/Once$/, ""), Ye(n, i[0].toLowerCase() + i.slice(1)) || Ye(n, Xi(i)) || Ye(n, i));
}
function cs(n) {
  const {
    type: i,
    vnode: u,
    proxy: c,
    withProxy: h,
    propsOptions: [p],
    slots: O,
    attrs: S,
    emit: D,
    render: H,
    renderCache: j,
    props: L,
    data: Q,
    setupState: ae,
    ctx: he,
    inheritAttrs: de
  } = n, He = lo(n);
  let ke, Ke;
  try {
    if (u.shapeFlag & 4) {
      const fe = h || c, je = fe;
      ke = wn(
        H.call(
          je,
          fe,
          j,
          L,
          ae,
          Q,
          he
        )
      ), Ke = S;
    } else {
      const fe = i;
      ke = wn(
        fe.length > 1 ? fe(
          L,
          { attrs: S, slots: O, emit: D }
        ) : fe(
          L,
          null
        )
      ), Ke = i.props ? S : pl(S);
    }
  } catch (fe) {
    Li.length = 0, _o(fe, n, 1), ke = Xt(nr);
  }
  let qe = ke;
  if (Ke && de !== !1) {
    const fe = Object.keys(Ke), { shapeFlag: je } = qe;
    fe.length && je & 7 && (p && fe.some(Es) && (Ke = yl(
      Ke,
      p
    )), qe = Jr(qe, Ke, !1, !0));
  }
  return u.dirs && (qe = Jr(qe, null, !1, !0), qe.dirs = qe.dirs ? qe.dirs.concat(u.dirs) : u.dirs), u.transition && La(qe, u.transition), ke = qe, lo(He), ke;
}
const pl = (n) => {
  let i;
  for (const u in n)
    (u === "class" || u === "style" || Sa(u)) && ((i || (i = {}))[u] = n[u]);
  return i;
}, yl = (n, i) => {
  const u = {};
  for (const c in n)
    (!Es(c) || !(c.slice(9) in i)) && (u[c] = n[c]);
  return u;
};
function ml(n, i, u) {
  const { props: c, children: h, component: p } = n, { props: O, children: S, patchFlag: D } = i, H = p.emitsOptions;
  if (i.dirs || i.transition)
    return !0;
  if (u && D >= 0) {
    if (D & 1024)
      return !0;
    if (D & 16)
      return c ? ls(c, O, H) : !!O;
    if (D & 8) {
      const j = i.dynamicProps;
      for (let L = 0; L < j.length; L++) {
        const Q = j[L];
        if (O[Q] !== c[Q] && !xo(H, Q))
          return !0;
      }
    }
  } else
    return (h || S) && (!S || !S.$stable) ? !0 : c === O ? !1 : c ? O ? ls(c, O, H) : !0 : !!O;
  return !1;
}
function ls(n, i, u) {
  const c = Object.keys(i);
  if (c.length !== Object.keys(n).length)
    return !0;
  for (let h = 0; h < c.length; h++) {
    const p = c[h];
    if (i[p] !== n[p] && !xo(u, p))
      return !0;
  }
  return !1;
}
function vl({ vnode: n, parent: i }, u) {
  for (; i; ) {
    const c = i.subTree;
    if (c.suspense && c.suspense.activeBranch === n && (c.el = n.el), c === n)
      (n = i.vnode).el = u, i = i.parent;
    else
      break;
  }
}
const ku = (n) => n.__isSuspense;
function gl(n, i) {
  i && i.pendingBranch ? Oe(n) ? i.effects.push(...n) : i.effects.push(n) : Ac(n);
}
const on = Symbol.for("v-fgt"), Eo = Symbol.for("v-txt"), nr = Symbol.for("v-cmt"), oa = Symbol.for("v-stc"), Li = [];
let Ht = null;
function ma(n = !1) {
  Li.push(Ht = n ? null : []);
}
function bl() {
  Li.pop(), Ht = Li[Li.length - 1] || null;
}
let Qr = 1;
function fs(n, i = !1) {
  Qr += n, n < 0 && Ht && i && (Ht.hasOnce = !0);
}
function Au(n) {
  return n.dynamicChildren = Qr > 0 ? Ht || $r : null, bl(), Qr > 0 && Ht && Ht.push(n), n;
}
function zf(n, i, u, c, h, p) {
  return Au(
    Iu(
      n,
      i,
      u,
      c,
      h,
      p,
      !0
    )
  );
}
function va(n, i, u, c, h) {
  return Au(
    Xt(
      n,
      i,
      u,
      c,
      h,
      !0
    )
  );
}
function $i(n) {
  return n ? n.__v_isVNode === !0 : !1;
}
function Ni(n, i) {
  return n.type === i.type && n.key === i.key;
}
const Cu = ({ key: n }) => n ?? null, io = ({
  ref: n,
  ref_key: i,
  ref_for: u
}) => (typeof n == "number" && (n = "" + n), n != null ? wt(n) || vt(n) || Ie(n) ? { i: mt, r: n, k: i, f: !!u } : n : null);
function Iu(n, i = null, u = null, c = 0, h = null, p = n === on ? 0 : 1, O = !1, S = !1) {
  const D = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n,
    props: i,
    key: i && Cu(i),
    ref: i && io(i),
    scopeId: eu,
    slotScopeIds: null,
    children: u,
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
    shapeFlag: p,
    patchFlag: c,
    dynamicProps: h,
    dynamicChildren: null,
    appContext: null,
    ctx: mt
  };
  return S ? ($a(D, u), p & 128 && n.normalize(D)) : u && (D.shapeFlag |= wt(u) ? 8 : 16), Qr > 0 && // avoid a block node from tracking itself
  !O && // has current parent block
  Ht && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (D.patchFlag > 0 || p & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  D.patchFlag !== 32 && Ht.push(D), D;
}
const Xt = _l;
function _l(n, i = null, u = null, c = 0, h = null, p = !1) {
  if ((!n || n === cu) && (n = nr), $i(n)) {
    const S = Jr(
      n,
      i,
      !0
      /* mergeRef: true */
    );
    return u && $a(S, u), Qr > 0 && !p && Ht && (S.shapeFlag & 6 ? Ht[Ht.indexOf(n)] = S : Ht.push(S)), S.patchFlag = -2, S;
  }
  if (Il(n) && (n = n.__vccOpts), i) {
    i = wl(i);
    let { class: S, style: D } = i;
    S && !wt(S) && (i.class = vo(S)), et(D) && (Ba(D) && !Oe(D) && (D = Wt({}, D)), i.style = mo(D));
  }
  const O = wt(n) ? 1 : ku(n) ? 128 : Ic(n) ? 64 : et(n) ? 4 : Ie(n) ? 2 : 0;
  return Iu(
    n,
    i,
    u,
    c,
    h,
    O,
    p,
    !0
  );
}
function wl(n) {
  return n ? Ba(n) || gu(n) ? Wt({}, n) : n : null;
}
function Jr(n, i, u = !1, c = !1) {
  const { props: h, ref: p, patchFlag: O, children: S, transition: D } = n, H = i ? El(h || {}, i) : h, j = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n.type,
    props: H,
    key: H && Cu(H),
    ref: i && i.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      u && p ? Oe(p) ? p.concat(io(i)) : [p, io(i)] : io(i)
    ) : p,
    scopeId: n.scopeId,
    slotScopeIds: n.slotScopeIds,
    children: S,
    target: n.target,
    targetStart: n.targetStart,
    targetAnchor: n.targetAnchor,
    staticCount: n.staticCount,
    shapeFlag: n.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: i && n.type !== on ? O === -1 ? 16 : O | 16 : O,
    dynamicProps: n.dynamicProps,
    dynamicChildren: n.dynamicChildren,
    appContext: n.appContext,
    dirs: n.dirs,
    transition: D,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: n.component,
    suspense: n.suspense,
    ssContent: n.ssContent && Jr(n.ssContent),
    ssFallback: n.ssFallback && Jr(n.ssFallback),
    el: n.el,
    anchor: n.anchor,
    ctx: n.ctx,
    ce: n.ce
  };
  return D && c && La(
    j,
    D.clone(j)
  ), j;
}
function xl(n = " ", i = 0) {
  return Xt(Eo, null, n, i);
}
function Qf(n = "", i = !1) {
  return i ? (ma(), va(nr, null, n)) : Xt(nr, null, n);
}
function wn(n) {
  return n == null || typeof n == "boolean" ? Xt(nr) : Oe(n) ? Xt(
    on,
    null,
    // #3666, avoid reference pollution when reusing vnode
    n.slice()
  ) : $i(n) ? or(n) : Xt(Eo, null, String(n));
}
function or(n) {
  return n.el === null && n.patchFlag !== -1 || n.memo ? n : Jr(n);
}
function $a(n, i) {
  let u = 0;
  const { shapeFlag: c } = n;
  if (i == null)
    i = null;
  else if (Oe(i))
    u = 16;
  else if (typeof i == "object")
    if (c & 65) {
      const h = i.default;
      h && (h._c && (h._d = !1), $a(n, h()), h._c && (h._d = !0));
      return;
    } else {
      u = 32;
      const h = i._;
      !h && !gu(i) ? i._ctx = mt : h === 3 && mt && (mt.slots._ === 1 ? i._ = 1 : (i._ = 2, n.patchFlag |= 1024));
    }
  else Ie(i) ? (i = { default: i, _ctx: mt }, u = 32) : (i = String(i), c & 64 ? (u = 16, i = [xl(i)]) : u = 8);
  n.children = i, n.shapeFlag |= u;
}
function El(...n) {
  const i = {};
  for (let u = 0; u < n.length; u++) {
    const c = n[u];
    for (const h in c)
      if (h === "class")
        i.class !== c.class && (i.class = vo([i.class, c.class]));
      else if (h === "style")
        i.style = mo([i.style, c.style]);
      else if (Sa(h)) {
        const p = i[h], O = c[h];
        O && p !== O && !(Oe(p) && p.includes(O)) && (i[h] = p ? [].concat(p, O) : O);
      } else h !== "" && (i[h] = c[h]);
  }
  return i;
}
function bn(n, i, u, c = null) {
  tr(n, i, 7, [
    u,
    c
  ]);
}
const Tl = yu();
let Ol = 0;
function Sl(n, i, u) {
  const c = n.type, h = (i ? i.appContext : n.appContext) || Tl, p = {
    uid: Ol++,
    vnode: n,
    type: c,
    parent: i,
    appContext: h,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Cs(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: i ? i.provides : Object.create(h.provides),
    ids: i ? i.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: _u(c, h),
    emitsOptions: Pu(c, h),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Je,
    // inheritAttrs
    inheritAttrs: c.inheritAttrs,
    // state
    ctx: Je,
    data: Je,
    props: Je,
    attrs: Je,
    slots: Je,
    refs: Je,
    setupState: Je,
    setupContext: null,
    // suspense related
    suspense: u,
    suspenseId: u ? u.pendingId : 0,
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
  return p.ctx = { _: p }, p.root = i ? i.root : p, p.emit = dl.bind(null, p), n.ce && n.ce(p), p;
}
let _t = null;
const Du = () => _t || mt;
let ho, ga;
{
  const n = yo(), i = (u, c) => {
    let h;
    return (h = n[u]) || (h = n[u] = []), h.push(c), (p) => {
      h.length > 1 ? h.forEach((O) => O(p)) : h[0](p);
    };
  };
  ho = i(
    "__VUE_INSTANCE_SETTERS__",
    (u) => _t = u
  ), ga = i(
    "__VUE_SSR_SETTERS__",
    (u) => Gi = u
  );
}
const Qi = (n) => {
  const i = _t;
  return ho(n), n.scope.on(), () => {
    n.scope.off(), ho(i);
  };
}, hs = () => {
  _t && _t.scope.off(), ho(null);
};
function Nu(n) {
  return n.vnode.shapeFlag & 4;
}
let Gi = !1;
function Pl(n, i = !1, u = !1) {
  i && ga(i);
  const { props: c, children: h } = n.vnode, p = Nu(n);
  el(n, c, p, i), il(n, h, u || i);
  const O = p ? kl(n, i) : void 0;
  return i && ga(!1), O;
}
function kl(n, i) {
  const u = n.type;
  n.accessCache = /* @__PURE__ */ Object.create(null), n.proxy = new Proxy(n.ctx, Wc);
  const { setup: c } = u;
  if (c) {
    Zn();
    const h = n.setupContext = c.length > 1 ? Ku(n) : null, p = Qi(n), O = zi(
      c,
      n,
      0,
      [
        n.props,
        h
      ]
    ), S = Os(O);
    if (er(), p(), (S || n.sp) && !zr(n) && iu(n), S) {
      if (O.then(hs, hs), i)
        return O.then((D) => {
          ds(n, D);
        }).catch((D) => {
          _o(D, n, 0);
        });
      n.asyncDep = O;
    } else
      ds(n, O);
  } else
    Ru(n);
}
function ds(n, i, u) {
  Ie(i) ? n.type.__ssrInlineRender ? n.ssrRender = i : n.render = i : et(i) && (n.setupState = Ys(i)), Ru(n);
}
function Ru(n, i, u) {
  const c = n.type;
  n.render || (n.render = c.render || xn);
  {
    const h = Qi(n);
    Zn();
    try {
      $c(n);
    } finally {
      er(), h();
    }
  }
}
const Al = {
  get(n, i) {
    return It(n, "get", ""), n[i];
  }
};
function Ku(n) {
  const i = (u) => {
    n.exposed = u || {};
  };
  return {
    attrs: new Proxy(n.attrs, Al),
    slots: n.slots,
    emit: n.emit,
    expose: i
  };
}
function To(n) {
  return n.exposed ? n.exposeProxy || (n.exposeProxy = new Proxy(Ys(mc(n.exposed)), {
    get(i, u) {
      if (u in i)
        return i[u];
      if (u in qi)
        return qi[u](n);
    },
    has(i, u) {
      return u in i || u in qi;
    }
  })) : n.proxy;
}
function Cl(n, i = !0) {
  return Ie(n) ? n.displayName || n.name : n.name || i && n.__name;
}
function Il(n) {
  return Ie(n) && "__vccOpts" in n;
}
const Ga = (n, i) => Ec(n, i, Gi);
function Jf(n, i, u) {
  const c = arguments.length;
  return c === 2 ? et(i) && !Oe(i) ? $i(i) ? Xt(n, null, [i]) : Xt(n, i) : Xt(n, null, i) : (c > 3 ? u = Array.prototype.slice.call(arguments, 2) : c === 3 && $i(u) && (u = [u]), Xt(n, i, u));
}
function Zf(n, i) {
  const u = n.memo;
  if (u.length != i.length)
    return !1;
  for (let c = 0; c < u.length; c++)
    if (Jn(u[c], i[c]))
      return !1;
  return Qr > 0 && Ht && Ht.push(n), !0;
}
const Dl = "3.5.17";
function Nl(n) {
  return Is() ? (Xu(n), !0) : !1;
}
// @__NO_SIDE_EFFECTS__
function ps() {
  const n = /* @__PURE__ */ new Set(), i = (p) => {
    n.delete(p);
  };
  return {
    on: (p) => {
      n.add(p);
      const O = () => i(p);
      return Nl(O), {
        off: O
      };
    },
    off: i,
    trigger: (...p) => Promise.all(Array.from(n).map((O) => O(...p))),
    clear: () => {
      n.clear();
    }
  };
}
const Rl = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ba = () => {
}, Kl = (n, i) => Object.prototype.hasOwnProperty.call(n, i);
function jl(n, i) {
  function u(...c) {
    return new Promise((h, p) => {
      Promise.resolve(n(() => i.apply(this, c), { fn: i, thisArg: this, args: c })).then(h).catch(p);
    });
  }
  return u;
}
function Fl(n, i = {}) {
  let u, c, h = ba;
  const p = (D) => {
    clearTimeout(D), h(), h = ba;
  };
  let O;
  return (D) => {
    const H = ar(n), j = ar(i.maxWait);
    return u && p(u), H <= 0 || j !== void 0 && j <= 0 ? (c && (p(c), c = void 0), Promise.resolve(D())) : new Promise((L, Q) => {
      h = i.rejectOnCancel ? Q : L, O = D, j && !c && (c = setTimeout(() => {
        u && p(u), c = void 0, L(O());
      }, j)), u = setTimeout(() => {
        c && p(c), c = void 0, L(D());
      }, H);
    });
  };
}
// @__NO_SIDE_EFFECTS__
function eh(n, i = 200, u = {}) {
  return jl(
    Fl(i, u),
    n
  );
}
function th(n, i, u) {
  let c;
  vt(u) ? c = {
    evaluating: u
  } : c = {};
  const {
    lazy: h = !1,
    flush: p = "pre",
    evaluating: O = void 0,
    shallow: S = !0,
    onError: D = ba
  } = c, H = la(!h), j = S ? la(i) : Ma(i);
  let L = 0;
  return Ou(async (Q) => {
    if (!H.value)
      return;
    L++;
    const ae = L;
    let he = !1;
    O && Promise.resolve().then(() => {
      O.value = !0;
    });
    try {
      const de = await n((He) => {
        Q(() => {
          O && (O.value = !1), he || He();
        });
      });
      ae === L && (j.value = de);
    } catch (de) {
      D(de);
    } finally {
      O && ae === L && (O.value = !1), he = !0;
    }
  }, { flush: p }), h ? Ga(() => (H.value = !0, j.value)) : j;
}
const Bl = Rl ? window.document : void 0;
function Ml(n) {
  var i;
  const u = ar(n);
  return (i = u?.$el) != null ? i : u;
}
const ql = {
  multiple: !0,
  accept: "*",
  reset: !1,
  directory: !1
};
function Ll(n) {
  if (!n)
    return null;
  if (n instanceof FileList)
    return n;
  const i = new DataTransfer();
  for (const u of n)
    i.items.add(u);
  return i.files;
}
function nh(n = {}) {
  const {
    document: i = Bl
  } = n, u = Ma(Ll(n.initialFiles)), { on: c, trigger: h } = /* @__PURE__ */ ps(), { on: p, trigger: O } = /* @__PURE__ */ ps(), S = Ga(() => {
    var L;
    const Q = (L = Ml(n.input)) != null ? L : i ? i.createElement("input") : void 0;
    return Q && (Q.type = "file", Q.onchange = (ae) => {
      const he = ae.target;
      u.value = he.files, h(u.value);
    }, Q.oncancel = () => {
      O();
    }), Q;
  }), D = () => {
    u.value = null, S.value && S.value.value && (S.value.value = "", h(null));
  }, H = (L) => {
    const Q = S.value;
    Q && (Q.multiple = ar(L.multiple), Q.accept = ar(L.accept), Q.webkitdirectory = ar(L.directory), Kl(L, "capture") && (Q.capture = ar(L.capture)));
  }, j = (L) => {
    const Q = S.value;
    if (!Q)
      return;
    const ae = {
      ...ql,
      ...n,
      ...L
    };
    H(ae), ar(ae.reset) && D(), Q.click();
  };
  return Ou(() => {
    H(n);
  }), {
    files: ja(u),
    open: j,
    reset: D,
    onCancel: p,
    onChange: c
  };
}
var Ul = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vl(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Hl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Wl(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function $l(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var i = n.default;
  if (typeof i == "function") {
    var u = function c() {
      var h = !1;
      try {
        h = this instanceof c;
      } catch {
      }
      return h ? Reflect.construct(i, arguments, this.constructor) : i.apply(this, arguments);
    };
    u.prototype = i.prototype;
  } else u = {};
  return Object.defineProperty(u, "__esModule", { value: !0 }), Object.keys(n).forEach(function(c) {
    var h = Object.getOwnPropertyDescriptor(n, c);
    Object.defineProperty(u, c, h.get ? h : {
      enumerable: !0,
      get: function() {
        return n[c];
      }
    });
  }), u;
}
var ys = {};
const Gl = {}, Yl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gl
}, Symbol.toStringTag, { value: "Module" })), ms = /* @__PURE__ */ $l(Yl);
var vs;
function Xl() {
  return vs || (vs = 1, function(n) {
    (function(i) {
      i.parser = function(k, b) {
        return new c(k, b);
      }, i.SAXParser = c, i.SAXStream = j, i.createStream = H, i.MAX_BUFFER_LENGTH = 64 * 1024;
      var u = [
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
      function c(k, b) {
        if (!(this instanceof c))
          return new c(k, b);
        var N = this;
        p(N), N.q = N.c = "", N.bufferCheckPosition = i.MAX_BUFFER_LENGTH, N.opt = b || {}, N.opt.lowercase = N.opt.lowercase || N.opt.lowercasetags, N.looseCase = N.opt.lowercase ? "toLowerCase" : "toUpperCase", N.tags = [], N.closed = N.closedRoot = N.sawRoot = !1, N.tag = N.error = null, N.strict = !!k, N.noscript = !!(k || N.opt.noscript), N.state = F.BEGIN, N.strictEntities = N.opt.strictEntities, N.ENTITIES = N.strictEntities ? Object.create(i.XML_ENTITIES) : Object.create(i.ENTITIES), N.attribList = [], N.opt.xmlns && (N.ns = Object.create(de)), N.opt.unquotedAttributeValues === void 0 && (N.opt.unquotedAttributeValues = !k), N.trackPosition = N.opt.position !== !1, N.trackPosition && (N.position = N.line = N.column = 0), st(N, "onready");
      }
      Object.create || (Object.create = function(k) {
        function b() {
        }
        b.prototype = k;
        var N = new b();
        return N;
      }), Object.keys || (Object.keys = function(k) {
        var b = [];
        for (var N in k) k.hasOwnProperty(N) && b.push(N);
        return b;
      });
      function h(k) {
        for (var b = Math.max(i.MAX_BUFFER_LENGTH, 10), N = 0, M = 0, Re = u.length; M < Re; M++) {
          var P = k[u[M]].length;
          if (P > b)
            switch (u[M]) {
              case "textNode":
                ze(k);
                break;
              case "cdata":
                Ne(k, "oncdata", k.cdata), k.cdata = "";
                break;
              case "script":
                Ne(k, "onscript", k.script), k.script = "";
                break;
              default:
                At(k, "Max buffer length exceeded: " + u[M]);
            }
          N = Math.max(N, P);
        }
        var R = i.MAX_BUFFER_LENGTH - N;
        k.bufferCheckPosition = R + k.position;
      }
      function p(k) {
        for (var b = 0, N = u.length; b < N; b++)
          k[u[b]] = "";
      }
      function O(k) {
        ze(k), k.cdata !== "" && (Ne(k, "oncdata", k.cdata), k.cdata = ""), k.script !== "" && (Ne(k, "onscript", k.script), k.script = "");
      }
      c.prototype = {
        end: function() {
          tt(this);
        },
        write: lt,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          O(this);
        }
      };
      var S;
      try {
        S = ms.Stream;
      } catch {
        S = function() {
        };
      }
      S || (S = function() {
      });
      var D = i.EVENTS.filter(function(k) {
        return k !== "error" && k !== "end";
      });
      function H(k, b) {
        return new j(k, b);
      }
      function j(k, b) {
        if (!(this instanceof j))
          return new j(k, b);
        S.apply(this), this._parser = new c(k, b), this.writable = !0, this.readable = !0;
        var N = this;
        this._parser.onend = function() {
          N.emit("end");
        }, this._parser.onerror = function(M) {
          N.emit("error", M), N._parser.error = null;
        }, this._decoder = null, D.forEach(function(M) {
          Object.defineProperty(N, "on" + M, {
            get: function() {
              return N._parser["on" + M];
            },
            set: function(Re) {
              if (!Re)
                return N.removeAllListeners(M), N._parser["on" + M] = Re, Re;
              N.on(M, Re);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      j.prototype = Object.create(S.prototype, {
        constructor: {
          value: j
        }
      }), j.prototype.write = function(k) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(k)) {
          if (!this._decoder) {
            var b = ms.StringDecoder;
            this._decoder = new b("utf8");
          }
          k = this._decoder.write(k);
        }
        return this._parser.write(k.toString()), this.emit("data", k), !0;
      }, j.prototype.end = function(k) {
        return k && k.length && this.write(k), this._parser.end(), !0;
      }, j.prototype.on = function(k, b) {
        var N = this;
        return !N._parser["on" + k] && D.indexOf(k) !== -1 && (N._parser["on" + k] = function() {
          var M = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          M.splice(0, 0, k), N.emit.apply(N, M);
        }), S.prototype.on.call(N, k, b);
      };
      var L = "[CDATA[", Q = "DOCTYPE", ae = "http://www.w3.org/XML/1998/namespace", he = "http://www.w3.org/2000/xmlns/", de = { xml: ae, xmlns: he }, He = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, ke = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, Ke = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, qe = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function fe(k) {
        return k === " " || k === `
` || k === "\r" || k === "	";
      }
      function je(k) {
        return k === '"' || k === "'";
      }
      function ne(k) {
        return k === ">" || fe(k);
      }
      function te(k, b) {
        return k.test(b);
      }
      function _e(k, b) {
        return !te(k, b);
      }
      var F = 0;
      i.STATE = {
        BEGIN: F++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: F++,
        // leading whitespace
        TEXT: F++,
        // general stuff
        TEXT_ENTITY: F++,
        // &amp and such.
        OPEN_WAKA: F++,
        // <
        SGML_DECL: F++,
        // <!BLARG
        SGML_DECL_QUOTED: F++,
        // <!BLARG foo "bar
        DOCTYPE: F++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: F++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: F++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: F++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: F++,
        // <!-
        COMMENT: F++,
        // <!--
        COMMENT_ENDING: F++,
        // <!-- blah -
        COMMENT_ENDED: F++,
        // <!-- blah --
        CDATA: F++,
        // <![CDATA[ something
        CDATA_ENDING: F++,
        // ]
        CDATA_ENDING_2: F++,
        // ]]
        PROC_INST: F++,
        // <?hi
        PROC_INST_BODY: F++,
        // <?hi there
        PROC_INST_ENDING: F++,
        // <?hi "there" ?
        OPEN_TAG: F++,
        // <strong
        OPEN_TAG_SLASH: F++,
        // <strong /
        ATTRIB: F++,
        // <a
        ATTRIB_NAME: F++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: F++,
        // <a foo _
        ATTRIB_VALUE: F++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: F++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: F++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: F++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: F++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: F++,
        // <foo bar=&quot
        CLOSE_TAG: F++,
        // </a
        CLOSE_TAG_SAW_WHITE: F++,
        // </a   >
        SCRIPT: F++,
        // <script> ...
        SCRIPT_ENDING: F++
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
      }, Object.keys(i.ENTITIES).forEach(function(k) {
        var b = i.ENTITIES[k], N = typeof b == "number" ? String.fromCharCode(b) : b;
        i.ENTITIES[k] = N;
      });
      for (var Xe in i.STATE)
        i.STATE[i.STATE[Xe]] = Xe;
      F = i.STATE;
      function st(k, b, N) {
        k[b] && k[b](N);
      }
      function Ne(k, b, N) {
        k.textNode && ze(k), st(k, b, N);
      }
      function ze(k) {
        k.textNode = $t(k.opt, k.textNode), k.textNode && st(k, "ontext", k.textNode), k.textNode = "";
      }
      function $t(k, b) {
        return k.trim && (b = b.trim()), k.normalize && (b = b.replace(/\s+/g, " ")), b;
      }
      function At(k, b) {
        return ze(k), k.trackPosition && (b += `
Line: ` + k.line + `
Column: ` + k.column + `
Char: ` + k.c), b = new Error(b), k.error = b, st(k, "onerror", b), k;
      }
      function tt(k) {
        return k.sawRoot && !k.closedRoot && we(k, "Unclosed root tag"), k.state !== F.BEGIN && k.state !== F.BEGIN_WHITESPACE && k.state !== F.TEXT && At(k, "Unexpected end"), ze(k), k.c = "", k.closed = !0, st(k, "onend"), c.call(k, k.strict, k.opt), k;
      }
      function we(k, b) {
        if (typeof k != "object" || !(k instanceof c))
          throw new Error("bad call to strictFail");
        k.strict && At(k, b);
      }
      function Pe(k) {
        k.strict || (k.tagName = k.tagName[k.looseCase]());
        var b = k.tags[k.tags.length - 1] || k, N = k.tag = { name: k.tagName, attributes: {} };
        k.opt.xmlns && (N.ns = b.ns), k.attribList.length = 0, Ne(k, "onopentagstart", N);
      }
      function ot(k, b) {
        var N = k.indexOf(":"), M = N < 0 ? ["", k] : k.split(":"), Re = M[0], P = M[1];
        return b && k === "xmlns" && (Re = "xmlns", P = ""), { prefix: Re, local: P };
      }
      function Qe(k) {
        if (k.strict || (k.attribName = k.attribName[k.looseCase]()), k.attribList.indexOf(k.attribName) !== -1 || k.tag.attributes.hasOwnProperty(k.attribName)) {
          k.attribName = k.attribValue = "";
          return;
        }
        if (k.opt.xmlns) {
          var b = ot(k.attribName, !0), N = b.prefix, M = b.local;
          if (N === "xmlns")
            if (M === "xml" && k.attribValue !== ae)
              we(
                k,
                "xml: prefix must be bound to " + ae + `
Actual: ` + k.attribValue
              );
            else if (M === "xmlns" && k.attribValue !== he)
              we(
                k,
                "xmlns: prefix must be bound to " + he + `
Actual: ` + k.attribValue
              );
            else {
              var Re = k.tag, P = k.tags[k.tags.length - 1] || k;
              Re.ns === P.ns && (Re.ns = Object.create(P.ns)), Re.ns[M] = k.attribValue;
            }
          k.attribList.push([k.attribName, k.attribValue]);
        } else
          k.tag.attributes[k.attribName] = k.attribValue, Ne(k, "onattribute", {
            name: k.attribName,
            value: k.attribValue
          });
        k.attribName = k.attribValue = "";
      }
      function ut(k, b) {
        if (k.opt.xmlns) {
          var N = k.tag, M = ot(k.tagName);
          N.prefix = M.prefix, N.local = M.local, N.uri = N.ns[M.prefix] || "", N.prefix && !N.uri && (we(k, "Unbound namespace prefix: " + JSON.stringify(k.tagName)), N.uri = M.prefix);
          var Re = k.tags[k.tags.length - 1] || k;
          N.ns && Re.ns !== N.ns && Object.keys(N.ns).forEach(function(ve) {
            Ne(k, "onopennamespace", {
              prefix: ve,
              uri: N.ns[ve]
            });
          });
          for (var P = 0, R = k.attribList.length; P < R; P++) {
            var Y = k.attribList[P], z = Y[0], ee = Y[1], J = ot(z, !0), se = J.prefix, ce = J.local, re = se === "" ? "" : N.ns[se] || "", Z = {
              name: z,
              value: ee,
              prefix: se,
              local: ce,
              uri: re
            };
            se && se !== "xmlns" && !re && (we(k, "Unbound namespace prefix: " + JSON.stringify(se)), Z.uri = se), k.tag.attributes[z] = Z, Ne(k, "onattribute", Z);
          }
          k.attribList.length = 0;
        }
        k.tag.isSelfClosing = !!b, k.sawRoot = !0, k.tags.push(k.tag), Ne(k, "onopentag", k.tag), b || (!k.noscript && k.tagName.toLowerCase() === "script" ? k.state = F.SCRIPT : k.state = F.TEXT, k.tag = null, k.tagName = ""), k.attribName = k.attribValue = "", k.attribList.length = 0;
      }
      function gt(k) {
        if (!k.tagName) {
          we(k, "Weird empty close tag."), k.textNode += "</>", k.state = F.TEXT;
          return;
        }
        if (k.script) {
          if (k.tagName !== "script") {
            k.script += "</" + k.tagName + ">", k.tagName = "", k.state = F.SCRIPT;
            return;
          }
          Ne(k, "onscript", k.script), k.script = "";
        }
        var b = k.tags.length, N = k.tagName;
        k.strict || (N = N[k.looseCase]());
        for (var M = N; b--; ) {
          var Re = k.tags[b];
          if (Re.name !== M)
            we(k, "Unexpected close tag");
          else
            break;
        }
        if (b < 0) {
          we(k, "Unmatched closing tag: " + k.tagName), k.textNode += "</" + k.tagName + ">", k.state = F.TEXT;
          return;
        }
        k.tagName = N;
        for (var P = k.tags.length; P-- > b; ) {
          var R = k.tag = k.tags.pop();
          k.tagName = k.tag.name, Ne(k, "onclosetag", k.tagName);
          var Y = {};
          for (var z in R.ns)
            Y[z] = R.ns[z];
          var ee = k.tags[k.tags.length - 1] || k;
          k.opt.xmlns && R.ns !== ee.ns && Object.keys(R.ns).forEach(function(J) {
            var se = R.ns[J];
            Ne(k, "onclosenamespace", { prefix: J, uri: se });
          });
        }
        b === 0 && (k.closedRoot = !0), k.tagName = k.attribValue = k.attribName = "", k.attribList.length = 0, k.state = F.TEXT;
      }
      function bt(k) {
        var b = k.entity, N = b.toLowerCase(), M, Re = "";
        return k.ENTITIES[b] ? k.ENTITIES[b] : k.ENTITIES[N] ? k.ENTITIES[N] : (b = N, b.charAt(0) === "#" && (b.charAt(1) === "x" ? (b = b.slice(2), M = parseInt(b, 16), Re = M.toString(16)) : (b = b.slice(1), M = parseInt(b, 10), Re = M.toString(10))), b = b.replace(/^0+/, ""), isNaN(M) || Re.toLowerCase() !== b ? (we(k, "Invalid character entity"), "&" + k.entity + ";") : String.fromCodePoint(M));
      }
      function vn(k, b) {
        b === "<" ? (k.state = F.OPEN_WAKA, k.startTagPosition = k.position) : fe(b) || (we(k, "Non-whitespace before first tag."), k.textNode = b, k.state = F.TEXT);
      }
      function Gt(k, b) {
        var N = "";
        return b < k.length && (N = k.charAt(b)), N;
      }
      function lt(k) {
        var b = this;
        if (this.error)
          throw this.error;
        if (b.closed)
          return At(
            b,
            "Cannot write after close. Assign an onready handler."
          );
        if (k === null)
          return tt(b);
        typeof k == "object" && (k = k.toString());
        for (var N = 0, M = ""; M = Gt(k, N++), b.c = M, !!M; )
          switch (b.trackPosition && (b.position++, M === `
` ? (b.line++, b.column = 0) : b.column++), b.state) {
            case F.BEGIN:
              if (b.state = F.BEGIN_WHITESPACE, M === "\uFEFF")
                continue;
              vn(b, M);
              continue;
            case F.BEGIN_WHITESPACE:
              vn(b, M);
              continue;
            case F.TEXT:
              if (b.sawRoot && !b.closedRoot) {
                for (var Re = N - 1; M && M !== "<" && M !== "&"; )
                  M = Gt(k, N++), M && b.trackPosition && (b.position++, M === `
` ? (b.line++, b.column = 0) : b.column++);
                b.textNode += k.substring(Re, N - 1);
              }
              M === "<" && !(b.sawRoot && b.closedRoot && !b.strict) ? (b.state = F.OPEN_WAKA, b.startTagPosition = b.position) : (!fe(M) && (!b.sawRoot || b.closedRoot) && we(b, "Text data outside of root node."), M === "&" ? b.state = F.TEXT_ENTITY : b.textNode += M);
              continue;
            case F.SCRIPT:
              M === "<" ? b.state = F.SCRIPT_ENDING : b.script += M;
              continue;
            case F.SCRIPT_ENDING:
              M === "/" ? b.state = F.CLOSE_TAG : (b.script += "<" + M, b.state = F.SCRIPT);
              continue;
            case F.OPEN_WAKA:
              if (M === "!")
                b.state = F.SGML_DECL, b.sgmlDecl = "";
              else if (!fe(M)) if (te(He, M))
                b.state = F.OPEN_TAG, b.tagName = M;
              else if (M === "/")
                b.state = F.CLOSE_TAG, b.tagName = "";
              else if (M === "?")
                b.state = F.PROC_INST, b.procInstName = b.procInstBody = "";
              else {
                if (we(b, "Unencoded <"), b.startTagPosition + 1 < b.position) {
                  var P = b.position - b.startTagPosition;
                  M = new Array(P).join(" ") + M;
                }
                b.textNode += "<" + M, b.state = F.TEXT;
              }
              continue;
            case F.SGML_DECL:
              if (b.sgmlDecl + M === "--") {
                b.state = F.COMMENT, b.comment = "", b.sgmlDecl = "";
                continue;
              }
              b.doctype && b.doctype !== !0 && b.sgmlDecl ? (b.state = F.DOCTYPE_DTD, b.doctype += "<!" + b.sgmlDecl + M, b.sgmlDecl = "") : (b.sgmlDecl + M).toUpperCase() === L ? (Ne(b, "onopencdata"), b.state = F.CDATA, b.sgmlDecl = "", b.cdata = "") : (b.sgmlDecl + M).toUpperCase() === Q ? (b.state = F.DOCTYPE, (b.doctype || b.sawRoot) && we(
                b,
                "Inappropriately located doctype declaration"
              ), b.doctype = "", b.sgmlDecl = "") : M === ">" ? (Ne(b, "onsgmldeclaration", b.sgmlDecl), b.sgmlDecl = "", b.state = F.TEXT) : (je(M) && (b.state = F.SGML_DECL_QUOTED), b.sgmlDecl += M);
              continue;
            case F.SGML_DECL_QUOTED:
              M === b.q && (b.state = F.SGML_DECL, b.q = ""), b.sgmlDecl += M;
              continue;
            case F.DOCTYPE:
              M === ">" ? (b.state = F.TEXT, Ne(b, "ondoctype", b.doctype), b.doctype = !0) : (b.doctype += M, M === "[" ? b.state = F.DOCTYPE_DTD : je(M) && (b.state = F.DOCTYPE_QUOTED, b.q = M));
              continue;
            case F.DOCTYPE_QUOTED:
              b.doctype += M, M === b.q && (b.q = "", b.state = F.DOCTYPE);
              continue;
            case F.DOCTYPE_DTD:
              M === "]" ? (b.doctype += M, b.state = F.DOCTYPE) : M === "<" ? (b.state = F.OPEN_WAKA, b.startTagPosition = b.position) : je(M) ? (b.doctype += M, b.state = F.DOCTYPE_DTD_QUOTED, b.q = M) : b.doctype += M;
              continue;
            case F.DOCTYPE_DTD_QUOTED:
              b.doctype += M, M === b.q && (b.state = F.DOCTYPE_DTD, b.q = "");
              continue;
            case F.COMMENT:
              M === "-" ? b.state = F.COMMENT_ENDING : b.comment += M;
              continue;
            case F.COMMENT_ENDING:
              M === "-" ? (b.state = F.COMMENT_ENDED, b.comment = $t(b.opt, b.comment), b.comment && Ne(b, "oncomment", b.comment), b.comment = "") : (b.comment += "-" + M, b.state = F.COMMENT);
              continue;
            case F.COMMENT_ENDED:
              M !== ">" ? (we(b, "Malformed comment"), b.comment += "--" + M, b.state = F.COMMENT) : b.doctype && b.doctype !== !0 ? b.state = F.DOCTYPE_DTD : b.state = F.TEXT;
              continue;
            case F.CDATA:
              M === "]" ? b.state = F.CDATA_ENDING : b.cdata += M;
              continue;
            case F.CDATA_ENDING:
              M === "]" ? b.state = F.CDATA_ENDING_2 : (b.cdata += "]" + M, b.state = F.CDATA);
              continue;
            case F.CDATA_ENDING_2:
              M === ">" ? (b.cdata && Ne(b, "oncdata", b.cdata), Ne(b, "onclosecdata"), b.cdata = "", b.state = F.TEXT) : M === "]" ? b.cdata += "]" : (b.cdata += "]]" + M, b.state = F.CDATA);
              continue;
            case F.PROC_INST:
              M === "?" ? b.state = F.PROC_INST_ENDING : fe(M) ? b.state = F.PROC_INST_BODY : b.procInstName += M;
              continue;
            case F.PROC_INST_BODY:
              if (!b.procInstBody && fe(M))
                continue;
              M === "?" ? b.state = F.PROC_INST_ENDING : b.procInstBody += M;
              continue;
            case F.PROC_INST_ENDING:
              M === ">" ? (Ne(b, "onprocessinginstruction", {
                name: b.procInstName,
                body: b.procInstBody
              }), b.procInstName = b.procInstBody = "", b.state = F.TEXT) : (b.procInstBody += "?" + M, b.state = F.PROC_INST_BODY);
              continue;
            case F.OPEN_TAG:
              te(ke, M) ? b.tagName += M : (Pe(b), M === ">" ? ut(b) : M === "/" ? b.state = F.OPEN_TAG_SLASH : (fe(M) || we(b, "Invalid character in tag name"), b.state = F.ATTRIB));
              continue;
            case F.OPEN_TAG_SLASH:
              M === ">" ? (ut(b, !0), gt(b)) : (we(b, "Forward-slash in opening tag not followed by >"), b.state = F.ATTRIB);
              continue;
            case F.ATTRIB:
              if (fe(M))
                continue;
              M === ">" ? ut(b) : M === "/" ? b.state = F.OPEN_TAG_SLASH : te(He, M) ? (b.attribName = M, b.attribValue = "", b.state = F.ATTRIB_NAME) : we(b, "Invalid attribute name");
              continue;
            case F.ATTRIB_NAME:
              M === "=" ? b.state = F.ATTRIB_VALUE : M === ">" ? (we(b, "Attribute without value"), b.attribValue = b.attribName, Qe(b), ut(b)) : fe(M) ? b.state = F.ATTRIB_NAME_SAW_WHITE : te(ke, M) ? b.attribName += M : we(b, "Invalid attribute name");
              continue;
            case F.ATTRIB_NAME_SAW_WHITE:
              if (M === "=")
                b.state = F.ATTRIB_VALUE;
              else {
                if (fe(M))
                  continue;
                we(b, "Attribute without value"), b.tag.attributes[b.attribName] = "", b.attribValue = "", Ne(b, "onattribute", {
                  name: b.attribName,
                  value: ""
                }), b.attribName = "", M === ">" ? ut(b) : te(He, M) ? (b.attribName = M, b.state = F.ATTRIB_NAME) : (we(b, "Invalid attribute name"), b.state = F.ATTRIB);
              }
              continue;
            case F.ATTRIB_VALUE:
              if (fe(M))
                continue;
              je(M) ? (b.q = M, b.state = F.ATTRIB_VALUE_QUOTED) : (b.opt.unquotedAttributeValues || At(b, "Unquoted attribute value"), b.state = F.ATTRIB_VALUE_UNQUOTED, b.attribValue = M);
              continue;
            case F.ATTRIB_VALUE_QUOTED:
              if (M !== b.q) {
                M === "&" ? b.state = F.ATTRIB_VALUE_ENTITY_Q : b.attribValue += M;
                continue;
              }
              Qe(b), b.q = "", b.state = F.ATTRIB_VALUE_CLOSED;
              continue;
            case F.ATTRIB_VALUE_CLOSED:
              fe(M) ? b.state = F.ATTRIB : M === ">" ? ut(b) : M === "/" ? b.state = F.OPEN_TAG_SLASH : te(He, M) ? (we(b, "No whitespace between attributes"), b.attribName = M, b.attribValue = "", b.state = F.ATTRIB_NAME) : we(b, "Invalid attribute name");
              continue;
            case F.ATTRIB_VALUE_UNQUOTED:
              if (!ne(M)) {
                M === "&" ? b.state = F.ATTRIB_VALUE_ENTITY_U : b.attribValue += M;
                continue;
              }
              Qe(b), M === ">" ? ut(b) : b.state = F.ATTRIB;
              continue;
            case F.CLOSE_TAG:
              if (b.tagName)
                M === ">" ? gt(b) : te(ke, M) ? b.tagName += M : b.script ? (b.script += "</" + b.tagName, b.tagName = "", b.state = F.SCRIPT) : (fe(M) || we(b, "Invalid tagname in closing tag"), b.state = F.CLOSE_TAG_SAW_WHITE);
              else {
                if (fe(M))
                  continue;
                _e(He, M) ? b.script ? (b.script += "</" + M, b.state = F.SCRIPT) : we(b, "Invalid tagname in closing tag.") : b.tagName = M;
              }
              continue;
            case F.CLOSE_TAG_SAW_WHITE:
              if (fe(M))
                continue;
              M === ">" ? gt(b) : we(b, "Invalid characters in closing tag");
              continue;
            case F.TEXT_ENTITY:
            case F.ATTRIB_VALUE_ENTITY_Q:
            case F.ATTRIB_VALUE_ENTITY_U:
              var R, Y;
              switch (b.state) {
                case F.TEXT_ENTITY:
                  R = F.TEXT, Y = "textNode";
                  break;
                case F.ATTRIB_VALUE_ENTITY_Q:
                  R = F.ATTRIB_VALUE_QUOTED, Y = "attribValue";
                  break;
                case F.ATTRIB_VALUE_ENTITY_U:
                  R = F.ATTRIB_VALUE_UNQUOTED, Y = "attribValue";
                  break;
              }
              if (M === ";") {
                var z = bt(b);
                b.opt.unparsedEntities && !Object.values(i.XML_ENTITIES).includes(z) ? (b.entity = "", b.state = R, b.write(z)) : (b[Y] += z, b.entity = "", b.state = R);
              } else te(b.entity.length ? qe : Ke, M) ? b.entity += M : (we(b, "Invalid character in entity name"), b[Y] += "&" + b.entity + M, b.entity = "", b.state = R);
              continue;
            default:
              throw new Error(b, "Unknown state: " + b.state);
          }
        return b.position >= b.bufferCheckPosition && h(b), b;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var k = String.fromCharCode, b = Math.floor, N = function() {
          var M = 16384, Re = [], P, R, Y = -1, z = arguments.length;
          if (!z)
            return "";
          for (var ee = ""; ++Y < z; ) {
            var J = Number(arguments[Y]);
            if (!isFinite(J) || // `NaN`, `+Infinity`, or `-Infinity`
            J < 0 || // not a valid Unicode code point
            J > 1114111 || // not a valid Unicode code point
            b(J) !== J)
              throw RangeError("Invalid code point: " + J);
            J <= 65535 ? Re.push(J) : (J -= 65536, P = (J >> 10) + 55296, R = J % 1024 + 56320, Re.push(P, R)), (Y + 1 === z || Re.length > M) && (ee += k.apply(null, Re), Re.length = 0);
          }
          return ee;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: N,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = N;
      }();
    })(n);
  }(ys)), ys;
}
var zl = Xl();
const Ui = {};
function Ql(n) {
  const { parentId: i, child: u } = n;
  Ui[i] || (Ui[i] = []);
  const c = {
    id: u.id,
    tagName: u.tagName
  };
  Ui[i].push(c);
}
function Jl(n) {
  const { currentBatch: i } = n, u = [...i];
  for (const [c, h] of u.entries()) {
    const p = Ui[h.id] || [];
    p.length > 0 && (u[c].children.push(...p), Zl({
      parentId: h.id
    }));
  }
  return u;
}
function Zl(n) {
  const { parentId: i } = n;
  delete Ui[i];
}
function ef(n) {
  return "prefix" in n && "uri" in n && !!n.prefix && !!n.uri;
}
function tf() {
  let n = {
    stack: [],
    recordsBatch: []
  };
  const i = zl.parser(
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
  i.onopentag = (h) => n = nf({ node: h, state: n }), i.ontext = (h) => n = rf({ text: h, state: n }), i.onclosetag = () => ({ updatedState: n } = of({
    state: n
  })), i.onerror = af;
  function u() {
    const h = n.recordsBatch;
    return n.recordsBatch = [], h;
  }
  function c() {
    return n.recordsBatch.length;
  }
  return {
    parser: i,
    drainBatch: u,
    getSize: c
  };
}
function nf(n) {
  const { node: i, state: u } = n, c = { ...u }, h = sf(i), p = uf(i), O = cf(i.attributes), S = lf(u.stack), D = {
    id: crypto.randomUUID(),
    tagName: h,
    namespace: p,
    attributes: O,
    value: "",
    parent: S,
    children: []
  };
  return c.stack.push(D), c;
}
function rf(n) {
  const { text: i, state: u } = n;
  return i && u.stack.length > 0 && (u.stack[u.stack.length - 1].value += i), u;
}
function of(n) {
  const { state: i } = n, u = i.stack.at(-1);
  let c = i.stack.slice(0, -1);
  const h = [...i.recordsBatch];
  if (u) {
    if (c.length) {
      const p = c.length - 1;
      c = c.map(
        (O, S) => S === p ? {
          ...O,
          children: [
            ...O.children,
            { id: u.id, tagName: u.tagName }
          ]
        } : O
      );
    } else u.parent && Ql({
      parentId: u.parent.id,
      child: { id: u.id, tagName: u.tagName }
    });
    h.push(u);
  }
  return {
    updatedState: {
      stack: c,
      recordsBatch: h
    }
  };
}
function af(n) {
  return new Error(`XML parsing error: ${n}`);
}
function sf(n) {
  return n.local || null;
}
function uf(n) {
  return ef(n) ? {
    prefix: n.prefix,
    uri: n.uri
  } : null;
}
function cf(n) {
  return Object.values(n).map((i) => {
    const u = i.prefix && i.uri ? {
      prefix: i.prefix,
      uri: i.uri
    } : null;
    return {
      name: i.name,
      value: i.value,
      ...u && { namespace: u }
    };
  });
}
function lf(n) {
  if (n.length === 0) return null;
  const i = n[n.length - 1];
  return i ? { id: i.id, tagName: i.tagName } : null;
}
var _a = { exports: {} }, ff = _a.exports, gs;
function hf() {
  return gs || (gs = 1, function(n, i) {
    (function(u, c) {
      n.exports = c();
    })(ff, function() {
      var u = function(e, t) {
        return (u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
          r.__proto__ = o;
        } || function(r, o) {
          for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (r[a] = o[a]);
        })(e, t);
      }, c = function() {
        return (c = Object.assign || function(e) {
          for (var t, r = 1, o = arguments.length; r < o; r++) for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return e;
        }).apply(this, arguments);
      };
      function h(e, t, r) {
        for (var o, a = 0, s = t.length; a < s; a++) !o && a in t || ((o = o || Array.prototype.slice.call(t, 0, a))[a] = t[a]);
        return e.concat(o || Array.prototype.slice.call(t));
      }
      var p = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Hl, O = Object.keys, S = Array.isArray;
      function D(e, t) {
        return typeof t != "object" || O(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || p.Promise || (p.Promise = Promise);
      var H = Object.getPrototypeOf, j = {}.hasOwnProperty;
      function L(e, t) {
        return j.call(e, t);
      }
      function Q(e, t) {
        typeof t == "function" && (t = t(H(e))), (typeof Reflect > "u" ? O : Reflect.ownKeys)(t).forEach(function(r) {
          he(e, r, t[r]);
        });
      }
      var ae = Object.defineProperty;
      function he(e, t, r, o) {
        ae(e, t, D(r && L(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function de(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), he(e.prototype, "constructor", e), { extend: Q.bind(null, e.prototype) };
        } };
      }
      var He = Object.getOwnPropertyDescriptor, ke = [].slice;
      function Ke(e, t, r) {
        return ke.call(e, t, r);
      }
      function qe(e, t) {
        return t(e);
      }
      function fe(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function je(e) {
        p.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function ne(e, t) {
        if (typeof t == "string" && L(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var r = [], o = 0, a = t.length; o < a; ++o) {
            var s = ne(e, t[o]);
            r.push(s);
          }
          return r;
        }
        var l = t.indexOf(".");
        if (l !== -1) {
          var f = e[t.substr(0, l)];
          return f == null ? void 0 : ne(f, t.substr(l + 1));
        }
      }
      function te(e, t, r) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          fe(typeof r != "string" && "length" in r);
          for (var o = 0, a = t.length; o < a; ++o) te(e, t[o], r[o]);
        } else {
          var s, l, f = t.indexOf(".");
          f !== -1 ? (s = t.substr(0, f), (l = t.substr(f + 1)) === "" ? r === void 0 ? S(e) && !isNaN(parseInt(s)) ? e.splice(s, 1) : delete e[s] : e[s] = r : te(f = !(f = e[s]) || !L(e, s) ? e[s] = {} : f, l, r)) : r === void 0 ? S(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function _e(e) {
        var t, r = {};
        for (t in e) L(e, t) && (r[t] = e[t]);
        return r;
      }
      var F = [].concat;
      function Xe(e) {
        return F.apply([], e);
      }
      var Ee = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Xe([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return p[e];
      }), st = new Set(Ee.map(function(e) {
        return p[e];
      })), Ne = null;
      function ze(e) {
        return Ne = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var o = Ne.get(r);
          if (o) return o;
          if (S(r)) {
            o = [], Ne.set(r, o);
            for (var a = 0, s = r.length; a < s; ++a) o.push(t(r[a]));
          } else if (st.has(r.constructor)) o = r;
          else {
            var l, f = H(r);
            for (l in o = f === Object.prototype ? {} : Object.create(f), Ne.set(r, o), r) L(r, l) && (o[l] = t(r[l]));
          }
          return o;
        }(e), Ne = null, e;
      }
      var $t = {}.toString;
      function At(e) {
        return $t.call(e).slice(8, -1);
      }
      var tt = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", we = typeof tt == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[tt]) && t.apply(e);
      } : function() {
        return null;
      };
      function Pe(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var ot = {};
      function Qe(e) {
        var t, r, o, a;
        if (arguments.length === 1) {
          if (S(e)) return e.slice();
          if (this === ot && typeof e == "string") return [e];
          if (a = we(e)) {
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
      var ut = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, be = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], at = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(be), gt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function bt(e, t) {
        this.name = e, this.message = t;
      }
      function vn(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(r) {
          return t[r].toString();
        }).filter(function(r, o, a) {
          return a.indexOf(r) === o;
        }).join(`
`);
      }
      function Gt(e, t, r, o) {
        this.failures = t, this.failedKeys = o, this.successCount = r, this.message = vn(e, t);
      }
      function lt(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(r) {
          return t[r];
        }), this.failuresByPos = t, this.message = vn(e, this.failures);
      }
      de(bt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), de(Gt).from(bt), de(lt).from(bt);
      var k = at.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), b = bt, N = at.reduce(function(e, t) {
        var r = t + "Error";
        function o(a, s) {
          this.name = r, a ? typeof a == "string" ? (this.message = "".concat(a).concat(s ? `
 ` + s : ""), this.inner = s || null) : typeof a == "object" && (this.message = "".concat(a.name, " ").concat(a.message), this.inner = a) : (this.message = gt[t] || r, this.inner = null);
        }
        return de(o).from(b), e[t] = o, e;
      }, {});
      N.Syntax = SyntaxError, N.Type = TypeError, N.Range = RangeError;
      var M = be.reduce(function(e, t) {
        return e[t + "Error"] = N[t], e;
      }, {}), Re = at.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = N[t]), e;
      }, {});
      function P() {
      }
      function R(e) {
        return e;
      }
      function Y(e, t) {
        return e == null || e === R ? t : function(r) {
          return t(e(r));
        };
      }
      function z(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function ee(e, t) {
        return e === P ? t : function() {
          var r = e.apply(this, arguments);
          r !== void 0 && (arguments[0] = r);
          var o = this.onsuccess, a = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var s = t.apply(this, arguments);
          return o && (this.onsuccess = this.onsuccess ? z(o, this.onsuccess) : o), a && (this.onerror = this.onerror ? z(a, this.onerror) : a), s !== void 0 ? s : r;
        };
      }
      function J(e, t) {
        return e === P ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? z(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? z(o, this.onerror) : o);
        };
      }
      function se(e, t) {
        return e === P ? t : function(r) {
          var o = e.apply(this, arguments);
          D(r, o);
          var a = this.onsuccess, s = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), a && (this.onsuccess = this.onsuccess ? z(a, this.onsuccess) : a), s && (this.onerror = this.onerror ? z(s, this.onerror) : s), o === void 0 ? r === void 0 ? void 0 : r : D(o, r);
        };
      }
      function ce(e, t) {
        return e === P ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function re(e, t) {
        return e === P ? t : function() {
          var r = e.apply(this, arguments);
          if (r && typeof r.then == "function") {
            for (var o = this, a = arguments.length, s = new Array(a); a--; ) s[a] = arguments[a];
            return r.then(function() {
              return t.apply(o, s);
            });
          }
          return t.apply(this, arguments);
        };
      }
      Re.ModifyError = Gt, Re.DexieError = bt, Re.BulkError = lt;
      var Z = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function ve(e) {
        Z = e;
      }
      var le = {}, ge = 100, Ee = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, H(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, H(t), e];
      }(), be = Ee[0], at = Ee[1], Ee = Ee[2], at = at && at.then, De = be && be.constructor, Fe = !!Ee, nt = function(e, t) {
        Yt.push([e, t]), dt && (queueMicrotask(So), dt = !1);
      }, ct = !0, dt = !0, rt = [], Dt = [], gn = R, We = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: P, pgp: !1, env: {}, finalize: P }, X = We, Yt = [], Nt = 0, On = [];
      function $(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = X;
        if (typeof e != "function") {
          if (e !== le) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && cr(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function r(o, a) {
          try {
            a(function(s) {
              if (o._state === null) {
                if (s === o) throw new TypeError("A promise cannot be resolved with itself.");
                var l = o._lib && zt();
                s && typeof s.then == "function" ? r(o, function(f, y) {
                  s instanceof $ ? s._then(f, y) : s.then(f, y);
                }) : (o._state = !0, o._value = s, ti(o)), l && Qt();
              }
            }, cr.bind(null, o));
          } catch (s) {
            cr(o, s);
          }
        }(this, e);
      }
      var ur = { get: function() {
        var e = X, t = An;
        function r(o, a) {
          var s = this, l = !e.global && (e !== X || t !== An), f = l && !Et(), y = new $(function(v, _) {
            lr(s, new ei(ri(o, e, l, f), ri(a, e, l, f), v, _, e));
          });
          return this._consoleTask && (y._consoleTask = this._consoleTask), y;
        }
        return r.prototype = le, r;
      }, set: function(e) {
        he(this, "then", e && e.prototype === le ? ur : { get: function() {
          return e;
        }, set: ur.set });
      } };
      function ei(e, t, r, o, a) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = r, this.reject = o, this.psd = a;
      }
      function cr(e, t) {
        var r, o;
        Dt.push(t), e._state === null && (r = e._lib && zt(), t = gn(t), e._state = !1, e._value = t, o = e, rt.some(function(a) {
          return a._value === o._value;
        }) || rt.push(o), ti(e), r && Qt());
      }
      function ti(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var r = 0, o = t.length; r < o; ++r) lr(e, t[r]);
        var a = e._PSD;
        --a.ref || a.finalize(), Nt === 0 && (++Nt, nt(function() {
          --Nt == 0 && fr();
        }, []));
      }
      function lr(e, t) {
        if (e._state !== null) {
          var r = e._state ? t.onFulfilled : t.onRejected;
          if (r === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++Nt, nt(Oo, [r, e, t]);
        } else e._listeners.push(t);
      }
      function Oo(e, t, r) {
        try {
          var o, a = t._value;
          !t._state && Dt.length && (Dt = []), o = Z && t._consoleTask ? t._consoleTask.run(function() {
            return e(a);
          }) : e(a), t._state || Dt.indexOf(a) !== -1 || function(s) {
            for (var l = rt.length; l; ) if (rt[--l]._value === s._value) return rt.splice(l, 1);
          }(t), r.resolve(o);
        } catch (s) {
          r.reject(s);
        } finally {
          --Nt == 0 && fr(), --r.psd.ref || r.psd.finalize();
        }
      }
      function So() {
        Rt(We, function() {
          zt() && Qt();
        });
      }
      function zt() {
        var e = ct;
        return dt = ct = !1, e;
      }
      function Qt() {
        var e, t, r;
        do
          for (; 0 < Yt.length; ) for (e = Yt, Yt = [], r = e.length, t = 0; t < r; ++t) {
            var o = e[t];
            o[0].apply(null, o[1]);
          }
        while (0 < Yt.length);
        dt = ct = !0;
      }
      function fr() {
        var e = rt;
        rt = [], e.forEach(function(o) {
          o._PSD.onunhandled.call(null, o._value, o);
        });
        for (var t = On.slice(0), r = t.length; r; ) t[--r]();
      }
      function Sn(e) {
        return new $(le, !1, e);
      }
      function Te(e, t) {
        var r = X;
        return function() {
          var o = zt(), a = X;
          try {
            return Tt(r, !0), e.apply(this, arguments);
          } catch (s) {
            t && t(s);
          } finally {
            Tt(a, !1), o && Qt();
          }
        };
      }
      Q($.prototype, { then: ur, _then: function(e, t) {
        lr(this, new ei(null, null, e, t, X));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, r = arguments[1];
        return typeof t == "function" ? this.then(null, function(o) {
          return (o instanceof t ? r : Sn)(o);
        }) : this.then(null, function(o) {
          return (o && o.name === t ? r : Sn)(o);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return $.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return $.resolve(e()).then(function() {
            return Sn(t);
          });
        });
      }, timeout: function(e, t) {
        var r = this;
        return e < 1 / 0 ? new $(function(o, a) {
          var s = setTimeout(function() {
            return a(new N.Timeout(t));
          }, e);
          r.then(o, a).finally(clearTimeout.bind(null, s));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && he($.prototype, Symbol.toStringTag, "Dexie.Promise"), We.env = ni(), Q($, { all: function() {
        var e = Qe.apply(null, arguments).map(Cn);
        return new $(function(t, r) {
          e.length === 0 && t([]);
          var o = e.length;
          e.forEach(function(a, s) {
            return $.resolve(a).then(function(l) {
              e[s] = l, --o || t(e);
            }, r);
          });
        });
      }, resolve: function(e) {
        return e instanceof $ ? e : e && typeof e.then == "function" ? new $(function(t, r) {
          e.then(t, r);
        }) : new $(le, !0, e);
      }, reject: Sn, race: function() {
        var e = Qe.apply(null, arguments).map(Cn);
        return new $(function(t, r) {
          e.map(function(o) {
            return $.resolve(o).then(t, r);
          });
        });
      }, PSD: { get: function() {
        return X;
      }, set: function(e) {
        return X = e;
      } }, totalEchoes: { get: function() {
        return An;
      } }, newPSD: xt, usePSD: Rt, scheduler: { get: function() {
        return nt;
      }, set: function(e) {
        nt = e;
      } }, rejectionMapper: { get: function() {
        return gn;
      }, set: function(e) {
        gn = e;
      } }, follow: function(e, t) {
        return new $(function(r, o) {
          return xt(function(a, s) {
            var l = X;
            l.unhandleds = [], l.onunhandled = s, l.finalize = z(function() {
              var f, y = this;
              f = function() {
                y.unhandleds.length === 0 ? a() : s(y.unhandleds[0]);
              }, On.push(function v() {
                f(), On.splice(On.indexOf(v), 1);
              }), ++Nt, nt(function() {
                --Nt == 0 && fr();
              }, []);
            }, l.finalize), e();
          }, t, r, o);
        });
      } }), De && (De.allSettled && he($, "allSettled", function() {
        var e = Qe.apply(null, arguments).map(Cn);
        return new $(function(t) {
          e.length === 0 && t([]);
          var r = e.length, o = new Array(r);
          e.forEach(function(a, s) {
            return $.resolve(a).then(function(l) {
              return o[s] = { status: "fulfilled", value: l };
            }, function(l) {
              return o[s] = { status: "rejected", reason: l };
            }).then(function() {
              return --r || t(o);
            });
          });
        });
      }), De.any && typeof AggregateError < "u" && he($, "any", function() {
        var e = Qe.apply(null, arguments).map(Cn);
        return new $(function(t, r) {
          e.length === 0 && r(new AggregateError([]));
          var o = e.length, a = new Array(o);
          e.forEach(function(s, l) {
            return $.resolve(s).then(function(f) {
              return t(f);
            }, function(f) {
              a[l] = f, --o || r(new AggregateError(a));
            });
          });
        });
      }), De.withResolvers && ($.withResolvers = De.withResolvers));
      var Be = { awaits: 0, echoes: 0, id: 0 }, Po = 0, Pn = [], kn = 0, An = 0, ko = 0;
      function xt(e, t, r, o) {
        var a = X, s = Object.create(a);
        return s.parent = a, s.ref = 0, s.global = !1, s.id = ++ko, We.env, s.env = Fe ? { Promise: $, PromiseProp: { value: $, configurable: !0, writable: !0 }, all: $.all, race: $.race, allSettled: $.allSettled, any: $.any, resolve: $.resolve, reject: $.reject } : {}, t && D(s, t), ++a.ref, s.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = Rt(s, e, r, o), s.ref === 0 && s.finalize(), o;
      }
      function Jt() {
        return Be.id || (Be.id = ++Po), ++Be.awaits, Be.echoes += ge, Be.id;
      }
      function Et() {
        return !!Be.awaits && (--Be.awaits == 0 && (Be.id = 0), Be.echoes = Be.awaits * ge, !0);
      }
      function Cn(e) {
        return Be.echoes && e && e.constructor === De ? (Jt(), e.then(function(t) {
          return Et(), t;
        }, function(t) {
          return Et(), Ae(t);
        })) : e;
      }
      function Ao() {
        var e = Pn[Pn.length - 1];
        Pn.pop(), Tt(e, !1);
      }
      function Tt(e, t) {
        var r, o = X;
        (t ? !Be.echoes || kn++ && e === X : !kn || --kn && e === X) || queueMicrotask(t ? (function(a) {
          ++An, Be.echoes && --Be.echoes != 0 || (Be.echoes = Be.awaits = Be.id = 0), Pn.push(X), Tt(a, !0);
        }).bind(null, e) : Ao), e !== X && (X = e, o === We && (We.env = ni()), Fe && (r = We.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(p, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function ni() {
        var e = p.Promise;
        return Fe ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(p, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Rt(e, t, r, o, a) {
        var s = X;
        try {
          return Tt(e, !0), t(r, o, a);
        } finally {
          Tt(s, !1);
        }
      }
      function ri(e, t, r, o) {
        return typeof e != "function" ? e : function() {
          var a = X;
          r && Jt(), Tt(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Tt(a, !1), o && queueMicrotask(Et);
          }
        };
      }
      function hr(e) {
        Promise === De && Be.echoes === 0 ? kn === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + at).indexOf("[native code]") === -1 && (Jt = Et = P);
      var Ae = $.reject, Kt = "￿", pt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", ii = "String expected.", Zt = [], In = "__dbnames", dr = "readonly", pr = "readwrite";
      function jt(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var oi = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Dn(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = ze(t))[e], t;
        };
      }
      function ai() {
        throw N.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function pe(e, t) {
        try {
          var r = si(e), o = si(t);
          if (r !== o) return r === "Array" ? 1 : o === "Array" ? -1 : r === "binary" ? 1 : o === "binary" ? -1 : r === "string" ? 1 : o === "string" ? -1 : r === "Date" ? 1 : o !== "Date" ? NaN : -1;
          switch (r) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return function(a, s) {
                for (var l = a.length, f = s.length, y = l < f ? l : f, v = 0; v < y; ++v) if (a[v] !== s[v]) return a[v] < s[v] ? -1 : 1;
                return l === f ? 0 : l < f ? -1 : 1;
              }(ui(e), ui(t));
            case "Array":
              return function(a, s) {
                for (var l = a.length, f = s.length, y = l < f ? l : f, v = 0; v < y; ++v) {
                  var _ = pe(a[v], s[v]);
                  if (_ !== 0) return _;
                }
                return l === f ? 0 : l < f ? -1 : 1;
              }(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function si(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = At(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function ui(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function Nn(e, t, r) {
        var o = e.schema.yProps;
        return o ? (t && 0 < r.numFailures && (t = t.filter(function(a, s) {
          return !r.failures[s];
        })), Promise.all(o.map(function(a) {
          return a = a.updatesTable, t ? e.db.table(a).where("k").anyOf(t).delete() : e.db.table(a).clear();
        })).then(function() {
          return r;
        })) : r;
      }
      var ci = (xe.prototype._trans = function(e, t, r) {
        var o = this._tx || X.trans, a = this.name, s = Z && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function l(v, _, d) {
          if (!d.schema[a]) throw new N.NotFound("Table " + a + " not part of transaction");
          return t(d.idbtrans, d);
        }
        var f = zt();
        try {
          var y = o && o.db._novip === this.db._novip ? o === X.trans ? o._promise(e, l, r) : xt(function() {
            return o._promise(e, l, r);
          }, { trans: o, transless: X.transless || X }) : function v(_, d, E, m) {
            if (_.idbdb && (_._state.openComplete || X.letThrough || _._vip)) {
              var g = _._createTransaction(d, E, _._dbSchema);
              try {
                g.create(), _._state.PR1398_maxLoop = 3;
              } catch (x) {
                return x.name === k.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                  return v(_, d, E, m);
                })) : Ae(x);
              }
              return g._promise(d, function(x, w) {
                return xt(function() {
                  return X.trans = g, m(x, w, g);
                });
              }).then(function(x) {
                if (d === "readwrite") try {
                  g.idbtrans.commit();
                } catch {
                }
                return d === "readonly" ? x : g._completion.then(function() {
                  return x;
                });
              });
            }
            if (_._state.openComplete) return Ae(new N.DatabaseClosed(_._state.dbOpenError));
            if (!_._state.isBeingOpened) {
              if (!_._state.autoOpen) return Ae(new N.DatabaseClosed());
              _.open().catch(P);
            }
            return _._state.dbReadyPromise.then(function() {
              return v(_, d, E, m);
            });
          }(this.db, e, [this.name], l);
          return s && (y._consoleTask = s, y = y.catch(function(v) {
            return console.trace(v), Ae(v);
          })), y;
        } finally {
          f && Qt();
        }
      }, xe.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? Ae(new N.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(a) {
            return r.hook.reading.fire(a);
          });
        }).then(t);
      }, xe.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (S(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = O(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var r = this.schema.indexes.concat(this.schema.primKey).filter(function(f) {
          if (f.compound && t.every(function(v) {
            return 0 <= f.keyPath.indexOf(v);
          })) {
            for (var y = 0; y < t.length; ++y) if (t.indexOf(f.keyPath[y]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(f, y) {
          return f.keyPath.length - y.keyPath.length;
        })[0];
        if (r && this.db._maxKey !== Kt) {
          var s = r.keyPath.slice(0, t.length);
          return this.where(s).equals(s.map(function(y) {
            return e[y];
          }));
        }
        !r && Z && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var o = this.schema.idxByName;
        function a(f, y) {
          return pe(f, y) === 0;
        }
        var l = t.reduce(function(d, y) {
          var v = d[0], _ = d[1], d = o[y], E = e[y];
          return [v || d, v || !d ? jt(_, d && d.multi ? function(m) {
            return m = ne(m, y), S(m) && m.some(function(g) {
              return a(E, g);
            });
          } : function(m) {
            return a(E, ne(m, y));
          }) : _];
        }, [null, null]), s = l[0], l = l[1];
        return s ? this.where(s.name).equals(e[s.keyPath]).filter(l) : r ? this.filter(l) : this.where(t).equals("");
      }, xe.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, xe.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, xe.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, xe.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, xe.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, xe.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, xe.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, xe.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, S(e) ? "[".concat(e.join("+"), "]") : e));
      }, xe.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, xe.prototype.mapToClass = function(e) {
        var t, r = this.db, o = this.name;
        function a() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof ai && (function(y, v) {
          if (typeof v != "function" && v !== null) throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
          function _() {
            this.constructor = y;
          }
          u(y, v), y.prototype = v === null ? Object.create(v) : (_.prototype = v.prototype, new _());
        }(a, t = e), Object.defineProperty(a.prototype, "db", { get: function() {
          return r;
        }, enumerable: !1, configurable: !0 }), a.prototype.table = function() {
          return o;
        }, e = a);
        for (var s = /* @__PURE__ */ new Set(), l = e.prototype; l; l = H(l)) Object.getOwnPropertyNames(l).forEach(function(y) {
          return s.add(y);
        });
        function f(y) {
          if (!y) return y;
          var v, _ = Object.create(e.prototype);
          for (v in y) if (!s.has(v)) try {
            _[v] = y[v];
          } catch {
          }
          return _;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = f, this.hook("reading", f), e;
      }, xe.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          D(this, e);
        });
      }, xe.prototype.add = function(e, t) {
        var r = this, o = this.schema.primKey, a = o.auto, s = o.keyPath, l = e;
        return s && a && (l = Dn(s)(e)), this._trans("readwrite", function(f) {
          return r.core.mutate({ trans: f, type: "add", keys: t != null ? [t] : null, values: [l] });
        }).then(function(f) {
          return f.numFailures ? $.reject(f.failures[0]) : f.lastResult;
        }).then(function(f) {
          if (s) try {
            te(e, s, f);
          } catch {
          }
          return f;
        });
      }, xe.prototype.update = function(e, t) {
        return typeof e != "object" || S(e) ? this.where(":id").equals(e).modify(t) : (e = ne(e, this.schema.primKey.keyPath), e === void 0 ? Ae(new N.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, xe.prototype.put = function(e, t) {
        var r = this, o = this.schema.primKey, a = o.auto, s = o.keyPath, l = e;
        return s && a && (l = Dn(s)(e)), this._trans("readwrite", function(f) {
          return r.core.mutate({ trans: f, type: "put", values: [l], keys: t != null ? [t] : null });
        }).then(function(f) {
          return f.numFailures ? $.reject(f.failures[0]) : f.lastResult;
        }).then(function(f) {
          if (s) try {
            te(e, s, f);
          } catch {
          }
          return f;
        });
      }, xe.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: [e] }).then(function(o) {
            return Nn(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? $.reject(o.failures[0]) : void 0;
          });
        });
      }, xe.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: oi }).then(function(r) {
            return Nn(e, null, r);
          });
        }).then(function(t) {
          return t.numFailures ? $.reject(t.failures[0]) : void 0;
        });
      }, xe.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(r) {
          return t.core.getMany({ keys: e, trans: r }).then(function(o) {
            return o.map(function(a) {
              return t.hook.reading.fire(a);
            });
          });
        });
      }, xe.prototype.bulkAdd = function(e, t, r) {
        var o = this, a = Array.isArray(t) ? t : void 0, s = (r = r || (a ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var v = o.schema.primKey, f = v.auto, v = v.keyPath;
          if (v && a) throw new N.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new N.InvalidArgument("Arguments objects and keys must have the same length");
          var y = e.length, v = v && f ? e.map(Dn(v)) : e;
          return o.core.mutate({ trans: l, type: "add", keys: a, values: v, wantResults: s }).then(function(g) {
            var d = g.numFailures, E = g.results, m = g.lastResult, g = g.failures;
            if (d === 0) return s ? E : m;
            throw new lt("".concat(o.name, ".bulkAdd(): ").concat(d, " of ").concat(y, " operations failed"), g);
          });
        });
      }, xe.prototype.bulkPut = function(e, t, r) {
        var o = this, a = Array.isArray(t) ? t : void 0, s = (r = r || (a ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var v = o.schema.primKey, f = v.auto, v = v.keyPath;
          if (v && a) throw new N.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new N.InvalidArgument("Arguments objects and keys must have the same length");
          var y = e.length, v = v && f ? e.map(Dn(v)) : e;
          return o.core.mutate({ trans: l, type: "put", keys: a, values: v, wantResults: s }).then(function(g) {
            var d = g.numFailures, E = g.results, m = g.lastResult, g = g.failures;
            if (d === 0) return s ? E : m;
            throw new lt("".concat(o.name, ".bulkPut(): ").concat(d, " of ").concat(y, " operations failed"), g);
          });
        });
      }, xe.prototype.bulkUpdate = function(e) {
        var t = this, r = this.core, o = e.map(function(l) {
          return l.key;
        }), a = e.map(function(l) {
          return l.changes;
        }), s = [];
        return this._trans("readwrite", function(l) {
          return r.getMany({ trans: l, keys: o, cache: "clone" }).then(function(f) {
            var y = [], v = [];
            e.forEach(function(d, E) {
              var m = d.key, g = d.changes, x = f[E];
              if (x) {
                for (var w = 0, T = Object.keys(g); w < T.length; w++) {
                  var A = T[w], C = g[A];
                  if (A === t.schema.primKey.keyPath) {
                    if (pe(C, m) !== 0) throw new N.Constraint("Cannot update primary key in bulkUpdate()");
                  } else te(x, A, C);
                }
                s.push(E), y.push(m), v.push(x);
              }
            });
            var _ = y.length;
            return r.mutate({ trans: l, type: "put", keys: y, values: v, updates: { keys: o, changeSpecs: a } }).then(function(d) {
              var E = d.numFailures, m = d.failures;
              if (E === 0) return _;
              for (var g = 0, x = Object.keys(m); g < x.length; g++) {
                var w, T = x[g], A = s[Number(T)];
                A != null && (w = m[T], delete m[T], m[A] = w);
              }
              throw new lt("".concat(t.name, ".bulkUpdate(): ").concat(E, " of ").concat(_, " operations failed"), m);
            });
          });
        });
      }, xe.prototype.bulkDelete = function(e) {
        var t = this, r = e.length;
        return this._trans("readwrite", function(o) {
          return t.core.mutate({ trans: o, type: "delete", keys: e }).then(function(a) {
            return Nn(t, e, a);
          });
        }).then(function(l) {
          var a = l.numFailures, s = l.lastResult, l = l.failures;
          if (a === 0) return s;
          throw new lt("".concat(t.name, ".bulkDelete(): ").concat(a, " of ").concat(r, " operations failed"), l);
        });
      }, xe);
      function xe() {
      }
      function sn(e) {
        function t(l, f) {
          if (f) {
            for (var y = arguments.length, v = new Array(y - 1); --y; ) v[y - 1] = arguments[y];
            return r[l].subscribe.apply(null, v), e;
          }
          if (typeof l == "string") return r[l];
        }
        var r = {};
        t.addEventType = s;
        for (var o = 1, a = arguments.length; o < a; ++o) s(arguments[o]);
        return t;
        function s(l, f, y) {
          if (typeof l != "object") {
            var v;
            f = f || ce;
            var _ = { subscribers: [], fire: y = y || P, subscribe: function(d) {
              _.subscribers.indexOf(d) === -1 && (_.subscribers.push(d), _.fire = f(_.fire, d));
            }, unsubscribe: function(d) {
              _.subscribers = _.subscribers.filter(function(E) {
                return E !== d;
              }), _.fire = _.subscribers.reduce(f, y);
            } };
            return r[l] = t[l] = _;
          }
          O(v = l).forEach(function(d) {
            var E = v[d];
            if (S(E)) s(d, v[d][0], v[d][1]);
            else {
              if (E !== "asap") throw new N.InvalidArgument("Invalid event config");
              var m = s(d, R, function() {
                for (var g = arguments.length, x = new Array(g); g--; ) x[g] = arguments[g];
                m.subscribers.forEach(function(w) {
                  je(function() {
                    w.apply(null, x);
                  });
                });
              });
            }
          });
        }
      }
      function un(e, t) {
        return de(t).from({ prototype: e }), t;
      }
      function en(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function yr(e, t) {
        e.filter = jt(e.filter, t);
      }
      function mr(e, t, r) {
        var o = e.replayFilter;
        e.replayFilter = o ? function() {
          return jt(o(), t());
        } : t, e.justLimit = r && !o;
      }
      function Rn(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var r = t.getIndexByKeyPath(e.index);
        if (!r) throw new N.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return r;
      }
      function li(e, t, r) {
        var o = Rn(e, t.schema);
        return t.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: o, range: e.range } });
      }
      function Kn(e, t, r, o) {
        var a = e.replayFilter ? jt(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var s = {}, l = function(f, y, v) {
            var _, d;
            a && !a(y, v, function(E) {
              return y.stop(E);
            }, function(E) {
              return y.fail(E);
            }) || ((d = "" + (_ = y.primaryKey)) == "[object ArrayBuffer]" && (d = "" + new Uint8Array(_)), L(s, d) || (s[d] = !0, t(f, y, v)));
          };
          return Promise.all([e.or._iterate(l, r), fi(li(e, o, r), e.algorithm, l, !e.keysOnly && e.valueMapper)]);
        }
        return fi(li(e, o, r), jt(e.algorithm, a), t, !e.keysOnly && e.valueMapper);
      }
      function fi(e, t, r, o) {
        var a = Te(o ? function(s, l, f) {
          return r(o(s), l, f);
        } : r);
        return e.then(function(s) {
          if (s) return s.start(function() {
            var l = function() {
              return s.continue();
            };
            t && !t(s, function(f) {
              return l = f;
            }, function(f) {
              s.stop(f), l = P;
            }, function(f) {
              s.fail(f), l = P;
            }) || a(s.value, s, function(f) {
              return l = f;
            }), l();
          });
        });
      }
      var cn = (hi.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var r = t.add;
          if (S(r)) return h(h([], S(e) ? e : [], !0), r).sort();
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
          if (S(o)) return S(e) ? e.filter(function(a) {
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
      }, hi);
      function hi(e) {
        this["@@propmod"] = e;
      }
      var Co = (me.prototype._read = function(e, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, Ae.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, me.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, Ae.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, me.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = jt(t.algorithm, e);
      }, me.prototype._iterate = function(e, t) {
        return Kn(this._ctx, e, t, this._ctx.table.core);
      }, me.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && D(r, e), t._ctx = r, t;
      }, me.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, me.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(r) {
          return Kn(t, e, r, t.table.core);
        });
      }, me.prototype.count = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx, a = o.table.core;
          if (en(o, !0)) return a.count({ trans: r, query: { index: Rn(o, a.schema), range: o.range } }).then(function(l) {
            return Math.min(l, o.limit);
          });
          var s = 0;
          return Kn(o, function() {
            return ++s, !1;
          }, r, a).then(function() {
            return s;
          });
        }).then(e);
      }, me.prototype.sortBy = function(e, t) {
        var r = e.split(".").reverse(), o = r[0], a = r.length - 1;
        function s(y, v) {
          return v ? s(y[r[v]], v - 1) : y[o];
        }
        var l = this._ctx.dir === "next" ? 1 : -1;
        function f(y, v) {
          return pe(s(y, a), s(v, a)) * l;
        }
        return this.toArray(function(y) {
          return y.sort(f);
        }).then(t);
      }, me.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx;
          if (o.dir === "next" && en(o, !0) && 0 < o.limit) {
            var a = o.valueMapper, s = Rn(o, o.table.core.schema);
            return o.table.core.query({ trans: r, limit: o.limit, values: !0, query: { index: s, range: o.range } }).then(function(f) {
              return f = f.result, a ? f.map(a) : f;
            });
          }
          var l = [];
          return Kn(o, function(f) {
            return l.push(f);
          }, r, o.table.core).then(function() {
            return l;
          });
        }, e);
      }, me.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, en(t) ? mr(t, function() {
          var r = e;
          return function(o, a) {
            return r === 0 || (r === 1 ? --r : a(function() {
              o.advance(r), r = 0;
            }), !1);
          };
        }) : mr(t, function() {
          var r = e;
          return function() {
            return --r < 0;
          };
        })), this;
      }, me.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), mr(this._ctx, function() {
          var t = e;
          return function(r, o, a) {
            return --t <= 0 && o(a), 0 <= t;
          };
        }, !0), this;
      }, me.prototype.until = function(e, t) {
        return yr(this._ctx, function(r, o, a) {
          return !e(r.value) || (o(a), t);
        }), this;
      }, me.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, me.prototype.last = function(e) {
        return this.reverse().first(e);
      }, me.prototype.filter = function(e) {
        var t;
        return yr(this._ctx, function(r) {
          return e(r.value);
        }), (t = this._ctx).isMatch = jt(t.isMatch, e), this;
      }, me.prototype.and = function(e) {
        return this.filter(e);
      }, me.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, me.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, me.prototype.desc = function() {
        return this.reverse();
      }, me.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.key, o);
        });
      }, me.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, me.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.primaryKey, o);
        });
      }, me.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(o, a) {
          r.push(a.key);
        }).then(function() {
          return r;
        }).then(e);
      }, me.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && en(t, !0) && 0 < t.limit) return this._read(function(o) {
          var a = Rn(t, t.table.core.schema);
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
      }, me.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, me.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, me.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, me.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return yr(this._ctx, function(a) {
          var o = a.primaryKey.toString(), a = L(t, o);
          return t[o] = !0, !a;
        }), this;
      }, me.prototype.modify = function(e) {
        var t = this, r = this._ctx;
        return this._write(function(o) {
          var a, s, l;
          l = typeof e == "function" ? e : (a = O(e), s = a.length, function(T) {
            for (var A = !1, C = 0; C < s; ++C) {
              var I = a[C], K = e[I], U = ne(T, I);
              K instanceof cn ? (te(T, I, K.execute(U)), A = !0) : U !== K && (te(T, I, K), A = !0);
            }
            return A;
          });
          var f = r.table.core, d = f.schema.primaryKey, y = d.outbound, v = d.extractKey, _ = 200, d = t.db._options.modifyChunkSize;
          d && (_ = typeof d == "object" ? d[f.name] || d["*"] || 200 : d);
          function E(T, I) {
            var C = I.failures, I = I.numFailures;
            g += T - I;
            for (var K = 0, U = O(C); K < U.length; K++) {
              var B = U[K];
              m.push(C[B]);
            }
          }
          var m = [], g = 0, x = [], w = e === di;
          return t.clone().primaryKeys().then(function(T) {
            function A(I) {
              var K = Math.min(_, T.length - I), U = T.slice(I, I + K);
              return (w ? Promise.resolve([]) : f.getMany({ trans: o, keys: U, cache: "immutable" })).then(function(B) {
                var q = [], W = [], V = y ? [] : null, G = w ? U : [];
                if (!w) for (var ue = 0; ue < K; ++ue) {
                  var ye = B[ue], oe = { value: ze(ye), primKey: T[I + ue] };
                  l.call(oe, oe.value, oe) !== !1 && (oe.value == null ? G.push(T[I + ue]) : y || pe(v(ye), v(oe.value)) === 0 ? (W.push(oe.value), y && V.push(T[I + ue])) : (G.push(T[I + ue]), q.push(oe.value)));
                }
                return Promise.resolve(0 < q.length && f.mutate({ trans: o, type: "add", values: q }).then(function(Se) {
                  for (var ie in Se.failures) G.splice(parseInt(ie), 1);
                  E(q.length, Se);
                })).then(function() {
                  return (0 < W.length || C && typeof e == "object") && f.mutate({ trans: o, type: "put", keys: V, values: W, criteria: C, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < I }).then(function(Se) {
                    return E(W.length, Se);
                  });
                }).then(function() {
                  return (0 < G.length || C && w) && f.mutate({ trans: o, type: "delete", keys: G, criteria: C, isAdditionalChunk: 0 < I }).then(function(Se) {
                    return Nn(r.table, G, Se);
                  }).then(function(Se) {
                    return E(G.length, Se);
                  });
                }).then(function() {
                  return T.length > I + K && A(I + _);
                });
              });
            }
            var C = en(r) && r.limit === 1 / 0 && (typeof e != "function" || w) && { index: r.index, range: r.range };
            return A(0).then(function() {
              if (0 < m.length) throw new Gt("Error modifying one or more objects", m, g, x);
              return T.length;
            });
          });
        });
      }, me.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !en(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(di) : this._write(function(r) {
          var o = e.table.core.schema.primaryKey, a = t;
          return e.table.core.count({ trans: r, query: { index: o, range: a } }).then(function(s) {
            return e.table.core.mutate({ trans: r, type: "deleteRange", range: a }).then(function(y) {
              var f = y.failures, y = y.numFailures;
              if (y) throw new Gt("Could not delete some values", Object.keys(f).map(function(v) {
                return f[v];
              }), s - y);
              return s - y;
            });
          });
        });
      }, me);
      function me() {
      }
      var di = function(e, t) {
        return t.value = null;
      };
      function Io(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function Do(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function Ze(e, t, r) {
        return e = e instanceof yi ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function tn(e) {
        return new e.Collection(e, function() {
          return pi("");
        }).limit(0);
      }
      function jn(e, t, r, o) {
        var a, s, l, f, y, v, _, d = r.length;
        if (!r.every(function(g) {
          return typeof g == "string";
        })) return Ze(e, ii);
        function E(g) {
          a = g === "next" ? function(w) {
            return w.toUpperCase();
          } : function(w) {
            return w.toLowerCase();
          }, s = g === "next" ? function(w) {
            return w.toLowerCase();
          } : function(w) {
            return w.toUpperCase();
          }, l = g === "next" ? Io : Do;
          var x = r.map(function(w) {
            return { lower: s(w), upper: a(w) };
          }).sort(function(w, T) {
            return l(w.lower, T.lower);
          });
          f = x.map(function(w) {
            return w.upper;
          }), y = x.map(function(w) {
            return w.lower;
          }), _ = (v = g) === "next" ? "" : o;
        }
        E("next"), e = new e.Collection(e, function() {
          return Ot(f[0], y[d - 1] + o);
        }), e._ondirectionchange = function(g) {
          E(g);
        };
        var m = 0;
        return e._addAlgorithm(function(g, x, w) {
          var T = g.key;
          if (typeof T != "string") return !1;
          var A = s(T);
          if (t(A, y, m)) return !0;
          for (var C = null, I = m; I < d; ++I) {
            var K = function(U, B, q, W, V, G) {
              for (var ue = Math.min(U.length, W.length), ye = -1, oe = 0; oe < ue; ++oe) {
                var Se = B[oe];
                if (Se !== W[oe]) return V(U[oe], q[oe]) < 0 ? U.substr(0, oe) + q[oe] + q.substr(oe + 1) : V(U[oe], W[oe]) < 0 ? U.substr(0, oe) + W[oe] + q.substr(oe + 1) : 0 <= ye ? U.substr(0, ye) + B[ye] + q.substr(ye + 1) : null;
                V(U[oe], Se) < 0 && (ye = oe);
              }
              return ue < W.length && G === "next" ? U + q.substr(U.length) : ue < U.length && G === "prev" ? U.substr(0, q.length) : ye < 0 ? null : U.substr(0, ye) + W[ye] + q.substr(ye + 1);
            }(T, A, f[I], y[I], l, v);
            K === null && C === null ? m = I + 1 : (C === null || 0 < l(C, K)) && (C = K);
          }
          return x(C !== null ? function() {
            g.continue(C + _);
          } : w), !1;
        }), e;
      }
      function Ot(e, t, r, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: o };
      }
      function pi(e) {
        return { type: 1, lower: e, upper: e };
      }
      var yi = (Object.defineProperty(Me.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Me.prototype.between = function(e, t, r, o) {
        r = r !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || o) && (!r || !o) ? tn(this) : new this.Collection(this, function() {
            return Ot(e, t, !r, !o);
          });
        } catch {
          return Ze(this, pt);
        }
      }, Me.prototype.equals = function(e) {
        return e == null ? Ze(this, pt) : new this.Collection(this, function() {
          return pi(e);
        });
      }, Me.prototype.above = function(e) {
        return e == null ? Ze(this, pt) : new this.Collection(this, function() {
          return Ot(e, void 0, !0);
        });
      }, Me.prototype.aboveOrEqual = function(e) {
        return e == null ? Ze(this, pt) : new this.Collection(this, function() {
          return Ot(e, void 0, !1);
        });
      }, Me.prototype.below = function(e) {
        return e == null ? Ze(this, pt) : new this.Collection(this, function() {
          return Ot(void 0, e, !1, !0);
        });
      }, Me.prototype.belowOrEqual = function(e) {
        return e == null ? Ze(this, pt) : new this.Collection(this, function() {
          return Ot(void 0, e);
        });
      }, Me.prototype.startsWith = function(e) {
        return typeof e != "string" ? Ze(this, ii) : this.between(e, e + Kt, !0, !0);
      }, Me.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : jn(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], Kt);
      }, Me.prototype.equalsIgnoreCase = function(e) {
        return jn(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, Me.prototype.anyOfIgnoreCase = function() {
        var e = Qe.apply(ot, arguments);
        return e.length === 0 ? tn(this) : jn(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, Me.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = Qe.apply(ot, arguments);
        return e.length === 0 ? tn(this) : jn(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, Kt);
      }, Me.prototype.anyOf = function() {
        var e = this, t = Qe.apply(ot, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return Ze(this, pt);
        }
        if (t.length === 0) return tn(this);
        var o = new this.Collection(this, function() {
          return Ot(t[0], t[t.length - 1]);
        });
        o._ondirectionchange = function(s) {
          r = s === "next" ? e._ascending : e._descending, t.sort(r);
        };
        var a = 0;
        return o._addAlgorithm(function(s, l, f) {
          for (var y = s.key; 0 < r(y, t[a]); ) if (++a === t.length) return l(f), !1;
          return r(y, t[a]) === 0 || (l(function() {
            s.continue(t[a]);
          }), !1);
        }), o;
      }, Me.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Me.prototype.noneOf = function() {
        var e = Qe.apply(ot, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return Ze(this, pt);
        }
        var t = e.reduce(function(r, o) {
          return r ? r.concat([[r[r.length - 1][1], o]]) : [[-1 / 0, o]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, Me.prototype.inAnyRange = function(T, t) {
        var r = this, o = this._cmp, a = this._ascending, s = this._descending, l = this._min, f = this._max;
        if (T.length === 0) return tn(this);
        if (!T.every(function(A) {
          return A[0] !== void 0 && A[1] !== void 0 && a(A[0], A[1]) <= 0;
        })) return Ze(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", N.InvalidArgument);
        var y = !t || t.includeLowers !== !1, v = t && t.includeUppers === !0, _, d = a;
        function E(A, C) {
          return d(A[0], C[0]);
        }
        try {
          (_ = T.reduce(function(A, C) {
            for (var I = 0, K = A.length; I < K; ++I) {
              var U = A[I];
              if (o(C[0], U[1]) < 0 && 0 < o(C[1], U[0])) {
                U[0] = l(U[0], C[0]), U[1] = f(U[1], C[1]);
                break;
              }
            }
            return I === K && A.push(C), A;
          }, [])).sort(E);
        } catch {
          return Ze(this, pt);
        }
        var m = 0, g = v ? function(A) {
          return 0 < a(A, _[m][1]);
        } : function(A) {
          return 0 <= a(A, _[m][1]);
        }, x = y ? function(A) {
          return 0 < s(A, _[m][0]);
        } : function(A) {
          return 0 <= s(A, _[m][0]);
        }, w = g, T = new this.Collection(this, function() {
          return Ot(_[0][0], _[_.length - 1][1], !y, !v);
        });
        return T._ondirectionchange = function(A) {
          d = A === "next" ? (w = g, a) : (w = x, s), _.sort(E);
        }, T._addAlgorithm(function(A, C, I) {
          for (var K, U = A.key; w(U); ) if (++m === _.length) return C(I), !1;
          return !g(K = U) && !x(K) || (r._cmp(U, _[m][1]) === 0 || r._cmp(U, _[m][0]) === 0 || C(function() {
            d === a ? A.continue(_[m][0]) : A.continue(_[m][1]);
          }), !1);
        }), T;
      }, Me.prototype.startsWithAnyOf = function() {
        var e = Qe.apply(ot, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? tn(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + Kt];
        })) : Ze(this, "startsWithAnyOf() only works with strings");
      }, Me);
      function Me() {
      }
      function ft(e) {
        return Te(function(t) {
          return ln(t), e(t.target.error), !1;
        });
      }
      function ln(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var fn = "storagemutated", vr = "x-storagemutated-1", St = sn(null, fn), No = (ht.prototype._lock = function() {
        return fe(!X.global), ++this._reculock, this._reculock !== 1 || X.global || (X.lockOwnerFor = this), this;
      }, ht.prototype._unlock = function() {
        if (fe(!X.global), --this._reculock == 0) for (X.global || (X.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Rt(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, ht.prototype._locked = function() {
        return this._reculock && X.lockOwnerFor !== this;
      }, ht.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var r = this.db.idbdb, o = this.db._state.dbOpenError;
        if (fe(!this.idbtrans), !e && !r) switch (o && o.name) {
          case "DatabaseClosedError":
            throw new N.DatabaseClosed(o);
          case "MissingAPIError":
            throw new N.MissingAPI(o.message, o);
          default:
            throw new N.OpenFailed(o);
        }
        if (!this.active) throw new N.TransactionInactive();
        return fe(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Te(function(a) {
          ln(a), t._reject(e.error);
        }), e.onabort = Te(function(a) {
          ln(a), t.active && t._reject(new N.Abort(e.error)), t.active = !1, t.on("abort").fire(a);
        }), e.oncomplete = Te(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && St.storagemutated.fire(e.mutatedParts);
        }), this;
      }, ht.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Ae(new N.ReadOnly("Transaction is readonly"));
        if (!this.active) return Ae(new N.TransactionInactive());
        if (this._locked()) return new $(function(s, l) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, r).then(s, l);
          }, X]);
        });
        if (r) return xt(function() {
          var s = new $(function(l, f) {
            o._lock();
            var y = t(l, f, o);
            y && y.then && y.then(l, f);
          });
          return s.finally(function() {
            return o._unlock();
          }), s._lib = !0, s;
        });
        var a = new $(function(s, l) {
          var f = t(s, l, o);
          f && f.then && f.then(s, l);
        });
        return a._lib = !0, a;
      }, ht.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, ht.prototype.waitFor = function(e) {
        var t, r = this._root(), o = $.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return o;
        }) : (r._waitingFor = o, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function s() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (t.get(-1 / 0).onsuccess = s);
        }());
        var a = r._waitingFor;
        return new $(function(s, l) {
          o.then(function(f) {
            return r._waitingQueue.push(Te(s.bind(null, f)));
          }, function(f) {
            return r._waitingQueue.push(Te(l.bind(null, f)));
          }).finally(function() {
            r._waitingFor === a && (r._waitingFor = null);
          });
        });
      }, ht.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new N.Abort()));
      }, ht.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (L(t, e)) return t[e];
        var r = this.schema[e];
        if (!r) throw new N.NotFound("Table " + e + " not part of transaction");
        return r = new this.db.Table(e, r, this), r.core = this.db.core.table(e), t[e] = r;
      }, ht);
      function ht() {
      }
      function gr(e, t, r, o, a, s, l, f) {
        return { name: e, keyPath: t, unique: r, multi: o, auto: a, compound: s, src: (r && !l ? "&" : "") + (o ? "*" : "") + (a ? "++" : "") + mi(t), type: f };
      }
      function mi(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function br(e, t, r) {
        return { name: e, primKey: t, indexes: r, mappedClass: null, idxByName: (o = function(a) {
          return [a.name, a];
        }, r.reduce(function(a, s, l) {
          return l = o(s, l), l && (a[l[0]] = l[1]), a;
        }, {})) };
        var o;
      }
      var hn = function(e) {
        try {
          return e.only([[]]), hn = function() {
            return [[]];
          }, [[]];
        } catch {
          return hn = function() {
            return Kt;
          }, Kt;
        }
      };
      function _r(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(r) {
          return r[t];
        } : function(r) {
          return ne(r, t);
        } : function(r) {
          return ne(r, e);
        };
        var t;
      }
      function vi(e) {
        return [].slice.call(e);
      }
      var Ro = 0;
      function dn(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Ko(e, t, y) {
        function o(w) {
          if (w.type === 3) return null;
          if (w.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var m = w.lower, g = w.upper, x = w.lowerOpen, w = w.upperOpen;
          return m === void 0 ? g === void 0 ? null : t.upperBound(g, !!w) : g === void 0 ? t.lowerBound(m, !!x) : t.bound(m, g, !!x, !!w);
        }
        function a(E) {
          var m, g = E.name;
          return { name: g, schema: E, mutate: function(x) {
            var w = x.trans, T = x.type, A = x.keys, C = x.values, I = x.range;
            return new Promise(function(K, U) {
              K = Te(K);
              var B = w.objectStore(g), q = B.keyPath == null, W = T === "put" || T === "add";
              if (!W && T !== "delete" && T !== "deleteRange") throw new Error("Invalid operation type: " + T);
              var V, G = (A || C || { length: 1 }).length;
              if (A && C && A.length !== C.length) throw new Error("Given keys array must have same length as given values array.");
              if (G === 0) return K({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function ue($e) {
                ++Se, ln($e);
              }
              var ye = [], oe = [], Se = 0;
              if (T === "deleteRange") {
                if (I.type === 4) return K({ numFailures: Se, failures: oe, results: [], lastResult: void 0 });
                I.type === 3 ? ye.push(V = B.clear()) : ye.push(V = B.delete(o(I)));
              } else {
                var q = W ? q ? [C, A] : [C, null] : [A, null], ie = q[0], Ue = q[1];
                if (W) for (var Ve = 0; Ve < G; ++Ve) ye.push(V = Ue && Ue[Ve] !== void 0 ? B[T](ie[Ve], Ue[Ve]) : B[T](ie[Ve])), V.onerror = ue;
                else for (Ve = 0; Ve < G; ++Ve) ye.push(V = B[T](ie[Ve])), V.onerror = ue;
              }
              function Yn($e) {
                $e = $e.target.result, ye.forEach(function(Mt, Br) {
                  return Mt.error != null && (oe[Br] = Mt.error);
                }), K({ numFailures: Se, failures: oe, results: T === "delete" ? A : ye.map(function(Mt) {
                  return Mt.result;
                }), lastResult: $e });
              }
              V.onerror = function($e) {
                ue($e), Yn($e);
              }, V.onsuccess = Yn;
            });
          }, getMany: function(x) {
            var w = x.trans, T = x.keys;
            return new Promise(function(A, C) {
              A = Te(A);
              for (var I, K = w.objectStore(g), U = T.length, B = new Array(U), q = 0, W = 0, V = function(ye) {
                ye = ye.target, B[ye._pos] = ye.result, ++W === q && A(B);
              }, G = ft(C), ue = 0; ue < U; ++ue) T[ue] != null && ((I = K.get(T[ue]))._pos = ue, I.onsuccess = V, I.onerror = G, ++q);
              q === 0 && A(B);
            });
          }, get: function(x) {
            var w = x.trans, T = x.key;
            return new Promise(function(A, C) {
              A = Te(A);
              var I = w.objectStore(g).get(T);
              I.onsuccess = function(K) {
                return A(K.target.result);
              }, I.onerror = ft(C);
            });
          }, query: (m = v, function(x) {
            return new Promise(function(w, T) {
              w = Te(w);
              var A, C, I, q = x.trans, K = x.values, U = x.limit, V = x.query, B = U === 1 / 0 ? void 0 : U, W = V.index, V = V.range, q = q.objectStore(g), W = W.isPrimaryKey ? q : q.index(W.name), V = o(V);
              if (U === 0) return w({ result: [] });
              m ? ((B = K ? W.getAll(V, B) : W.getAllKeys(V, B)).onsuccess = function(G) {
                return w({ result: G.target.result });
              }, B.onerror = ft(T)) : (A = 0, C = !K && "openKeyCursor" in W ? W.openKeyCursor(V) : W.openCursor(V), I = [], C.onsuccess = function(G) {
                var ue = C.result;
                return ue ? (I.push(K ? ue.value : ue.primaryKey), ++A === U ? w({ result: I }) : void ue.continue()) : w({ result: I });
              }, C.onerror = ft(T));
            });
          }), openCursor: function(x) {
            var w = x.trans, T = x.values, A = x.query, C = x.reverse, I = x.unique;
            return new Promise(function(K, U) {
              K = Te(K);
              var W = A.index, B = A.range, q = w.objectStore(g), q = W.isPrimaryKey ? q : q.index(W.name), W = C ? I ? "prevunique" : "prev" : I ? "nextunique" : "next", V = !T && "openKeyCursor" in q ? q.openKeyCursor(o(B), W) : q.openCursor(o(B), W);
              V.onerror = ft(U), V.onsuccess = Te(function(G) {
                var ue, ye, oe, Se, ie = V.result;
                ie ? (ie.___id = ++Ro, ie.done = !1, ue = ie.continue.bind(ie), ye = (ye = ie.continuePrimaryKey) && ye.bind(ie), oe = ie.advance.bind(ie), Se = function() {
                  throw new Error("Cursor not stopped");
                }, ie.trans = w, ie.stop = ie.continue = ie.continuePrimaryKey = ie.advance = function() {
                  throw new Error("Cursor not started");
                }, ie.fail = Te(U), ie.next = function() {
                  var Ue = this, Ve = 1;
                  return this.start(function() {
                    return Ve-- ? Ue.continue() : Ue.stop();
                  }).then(function() {
                    return Ue;
                  });
                }, ie.start = function(Ue) {
                  function Ve() {
                    if (V.result) try {
                      Ue();
                    } catch ($e) {
                      ie.fail($e);
                    }
                    else ie.done = !0, ie.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ie.stop();
                  }
                  var Yn = new Promise(function($e, Mt) {
                    $e = Te($e), V.onerror = ft(Mt), ie.fail = Mt, ie.stop = function(Br) {
                      ie.stop = ie.continue = ie.continuePrimaryKey = ie.advance = Se, $e(Br);
                    };
                  });
                  return V.onsuccess = Te(function($e) {
                    V.onsuccess = Ve, Ve();
                  }), ie.continue = ue, ie.continuePrimaryKey = ye, ie.advance = oe, Ve(), Yn;
                }, K(ie)) : K(null);
              }, U);
            });
          }, count: function(x) {
            var w = x.query, T = x.trans, A = w.index, C = w.range;
            return new Promise(function(I, K) {
              var U = T.objectStore(g), B = A.isPrimaryKey ? U : U.index(A.name), U = o(C), B = U ? B.count(U) : B.count();
              B.onsuccess = Te(function(q) {
                return I(q.target.result);
              }), B.onerror = ft(K);
            });
          } };
        }
        var s, l, f, _ = (l = y, f = vi((s = e).objectStoreNames), { schema: { name: s.name, tables: f.map(function(E) {
          return l.objectStore(E);
        }).map(function(E) {
          var m = E.keyPath, w = E.autoIncrement, g = S(m), x = {}, w = { name: E.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: m == null, compound: g, keyPath: m, autoIncrement: w, unique: !0, extractKey: _r(m) }, indexes: vi(E.indexNames).map(function(T) {
            return E.index(T);
          }).map(function(I) {
            var A = I.name, C = I.unique, K = I.multiEntry, I = I.keyPath, K = { name: A, compound: S(I), keyPath: I, unique: C, multiEntry: K, extractKey: _r(I) };
            return x[dn(I)] = K;
          }), getIndexByKeyPath: function(T) {
            return x[dn(T)];
          } };
          return x[":id"] = w.primaryKey, m != null && (x[dn(m)] = w.primaryKey), w;
        }) }, hasGetAll: 0 < f.length && "getAll" in l.objectStore(f[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), y = _.schema, v = _.hasGetAll, _ = y.tables.map(a), d = {};
        return _.forEach(function(E) {
          return d[E.name] = E;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(E) {
          if (!d[E]) throw new Error("Table '".concat(E, "' not found"));
          return d[E];
        }, MIN_KEY: -1 / 0, MAX_KEY: hn(t), schema: y };
      }
      function jo(e, t, r, o) {
        var a = r.IDBKeyRange;
        return r.indexedDB, { dbcore: (o = Ko(t, a, o), e.dbcore.reduce(function(s, l) {
          return l = l.create, c(c({}, s), l(s));
        }, o)) };
      }
      function Fn(e, o) {
        var r = o.db, o = jo(e._middlewares, r, e._deps, o);
        e.core = o.dbcore, e.tables.forEach(function(a) {
          var s = a.name;
          e.core.schema.tables.some(function(l) {
            return l.name === s;
          }) && (a.core = e.core.table(s), e[s] instanceof e.Table && (e[s].core = a.core));
        });
      }
      function Bn(e, t, r, o) {
        r.forEach(function(a) {
          var s = o[a];
          t.forEach(function(l) {
            var f = function y(v, _) {
              return He(v, _) || (v = H(v)) && y(v, _);
            }(l, a);
            (!f || "value" in f && f.value === void 0) && (l === e.Transaction.prototype || l instanceof e.Transaction ? he(l, a, { get: function() {
              return this.table(a);
            }, set: function(y) {
              ae(this, a, { value: y, writable: !0, configurable: !0, enumerable: !0 });
            } }) : l[a] = new e.Table(a, s));
          });
        });
      }
      function wr(e, t) {
        t.forEach(function(r) {
          for (var o in r) r[o] instanceof e.Table && delete r[o];
        });
      }
      function Fo(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function Bo(e, t, r, o) {
        var a = e._dbSchema;
        r.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = br("$meta", bi("")[0], []), e._storeNames.push("$meta"));
        var s = e._createTransaction("readwrite", e._storeNames, a);
        s.create(r), s._completion.catch(o);
        var l = s._reject.bind(s), f = X.transless || X;
        xt(function() {
          return X.trans = s, X.transless = f, t !== 0 ? (Fn(e, r), v = t, ((y = s).storeNames.includes("$meta") ? y.table("$meta").get("version").then(function(_) {
            return _ ?? v;
          }) : $.resolve(v)).then(function(_) {
            return E = _, m = s, g = r, x = [], _ = (d = e)._versions, w = d._dbSchema = qn(0, d.idbdb, g), (_ = _.filter(function(T) {
              return T._cfg.version >= E;
            })).length !== 0 ? (_.forEach(function(T) {
              x.push(function() {
                var A = w, C = T._cfg.dbschema;
                Ln(d, A, g), Ln(d, C, g), w = d._dbSchema = C;
                var I = xr(A, C);
                I.add.forEach(function(W) {
                  Er(g, W[0], W[1].primKey, W[1].indexes);
                }), I.change.forEach(function(W) {
                  if (W.recreate) throw new N.Upgrade("Not yet support for changing primary key");
                  var V = g.objectStore(W.name);
                  W.add.forEach(function(G) {
                    return Mn(V, G);
                  }), W.change.forEach(function(G) {
                    V.deleteIndex(G.name), Mn(V, G);
                  }), W.del.forEach(function(G) {
                    return V.deleteIndex(G);
                  });
                });
                var K = T._cfg.contentUpgrade;
                if (K && T._cfg.version > E) {
                  Fn(d, g), m._memoizedTables = {};
                  var U = _e(C);
                  I.del.forEach(function(W) {
                    U[W] = A[W];
                  }), wr(d, [d.Transaction.prototype]), Bn(d, [d.Transaction.prototype], O(U), U), m.schema = U;
                  var B, q = ut(K);
                  return q && Jt(), I = $.follow(function() {
                    var W;
                    (B = K(m)) && q && (W = Et.bind(null, null), B.then(W, W));
                  }), B && typeof B.then == "function" ? $.resolve(B) : I.then(function() {
                    return B;
                  });
                }
              }), x.push(function(A) {
                var C, I, K = T._cfg.dbschema;
                C = K, I = A, [].slice.call(I.db.objectStoreNames).forEach(function(U) {
                  return C[U] == null && I.db.deleteObjectStore(U);
                }), wr(d, [d.Transaction.prototype]), Bn(d, [d.Transaction.prototype], d._storeNames, d._dbSchema), m.schema = d._dbSchema;
              }), x.push(function(A) {
                d.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(d.idbdb.version / 10) === T._cfg.version ? (d.idbdb.deleteObjectStore("$meta"), delete d._dbSchema.$meta, d._storeNames = d._storeNames.filter(function(C) {
                  return C !== "$meta";
                })) : A.objectStore("$meta").put(T._cfg.version, "version"));
              });
            }), function T() {
              return x.length ? $.resolve(x.shift()(m.idbtrans)).then(T) : $.resolve();
            }().then(function() {
              gi(w, g);
            })) : $.resolve();
            var d, E, m, g, x, w;
          }).catch(l)) : (O(a).forEach(function(_) {
            Er(r, _, a[_].primKey, a[_].indexes);
          }), Fn(e, r), void $.follow(function() {
            return e.on.populate.fire(s);
          }).catch(l));
          var y, v;
        });
      }
      function Mo(e, t) {
        gi(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var r = qn(0, e.idbdb, t);
        Ln(e, e._dbSchema, t);
        for (var o = 0, a = xr(r, e._dbSchema).change; o < a.length; o++) {
          var s = function(l) {
            if (l.change.length || l.recreate) return console.warn("Unable to patch indexes of table ".concat(l.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var f = t.objectStore(l.name);
            l.add.forEach(function(y) {
              Z && console.debug("Dexie upgrade patch: Creating missing index ".concat(l.name, ".").concat(y.src)), Mn(f, y);
            });
          }(a[o]);
          if (typeof s == "object") return s.value;
        }
      }
      function xr(e, t) {
        var r, o = { del: [], add: [], change: [] };
        for (r in e) t[r] || o.del.push(r);
        for (r in t) {
          var a = e[r], s = t[r];
          if (a) {
            var l = { name: r, def: s, recreate: !1, del: [], add: [], change: [] };
            if ("" + (a.primKey.keyPath || "") != "" + (s.primKey.keyPath || "") || a.primKey.auto !== s.primKey.auto) l.recreate = !0, o.change.push(l);
            else {
              var f = a.idxByName, y = s.idxByName, v = void 0;
              for (v in f) y[v] || l.del.push(v);
              for (v in y) {
                var _ = f[v], d = y[v];
                _ ? _.src !== d.src && l.change.push(d) : l.add.push(d);
              }
              (0 < l.del.length || 0 < l.add.length || 0 < l.change.length) && o.change.push(l);
            }
          } else o.add.push([r, s]);
        }
        return o;
      }
      function Er(e, t, r, o) {
        var a = e.db.createObjectStore(t, r.keyPath ? { keyPath: r.keyPath, autoIncrement: r.auto } : { autoIncrement: r.auto });
        return o.forEach(function(s) {
          return Mn(a, s);
        }), a;
      }
      function gi(e, t) {
        O(e).forEach(function(r) {
          t.db.objectStoreNames.contains(r) || (Z && console.debug("Dexie: Creating missing table", r), Er(t, r, e[r].primKey, e[r].indexes));
        });
      }
      function Mn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function qn(e, t, r) {
        var o = {};
        return Ke(t.objectStoreNames, 0).forEach(function(a) {
          for (var s = r.objectStore(a), l = gr(mi(v = s.keyPath), v || "", !0, !1, !!s.autoIncrement, v && typeof v != "string", !0), f = [], y = 0; y < s.indexNames.length; ++y) {
            var _ = s.index(s.indexNames[y]), v = _.keyPath, _ = gr(_.name, v, !!_.unique, !!_.multiEntry, !1, v && typeof v != "string", !1);
            f.push(_);
          }
          o[a] = br(a, l, f);
        }), o;
      }
      function Ln(e, t, r) {
        for (var o = r.db.objectStoreNames, a = 0; a < o.length; ++a) {
          var s = o[a], l = r.objectStore(s);
          e._hasGetAll = "getAll" in l;
          for (var f = 0; f < l.indexNames.length; ++f) {
            var y = l.indexNames[f], v = l.index(y).keyPath, _ = typeof v == "string" ? v : "[" + Ke(v).join("+") + "]";
            !t[s] || (v = t[s].idxByName[_]) && (v.name = y, delete t[s].idxByName[_], t[s].idxByName[y] = v);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && p.WorkerGlobalScope && p instanceof p.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function bi(e) {
        return e.split(",").map(function(t, r) {
          var s = t.split(":"), o = (a = s[1]) === null || a === void 0 ? void 0 : a.trim(), a = (t = s[0].trim()).replace(/([&*]|\+\+)/g, ""), s = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return gr(a, s || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), S(s), r === 0, o);
        });
      }
      var qo = (nn.prototype._createTableSchema = br, nn.prototype._parseIndexSyntax = bi, nn.prototype._parseStoresSpec = function(e, t) {
        var r = this;
        O(e).forEach(function(o) {
          if (e[o] !== null) {
            var a = r._parseIndexSyntax(e[o]), s = a.shift();
            if (!s) throw new N.Schema("Invalid schema for table " + o + ": " + e[o]);
            if (s.unique = !0, s.multi) throw new N.Schema("Primary key cannot be multiEntry*");
            a.forEach(function(l) {
              if (l.auto) throw new N.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!l.keyPath) throw new N.Schema("Index must have a name and cannot be an empty string");
            }), a = r._createTableSchema(o, s, a), t[o] = a;
          }
        });
      }, nn.prototype.stores = function(r) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? D(this._cfg.storesSource, r) : r;
        var r = t._versions, o = {}, a = {};
        return r.forEach(function(s) {
          D(o, s._cfg.storesSource), a = s._cfg.dbschema = {}, s._parseStoresSpec(o, a);
        }), t._dbSchema = a, wr(t, [t._allTables, t, t.Transaction.prototype]), Bn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], O(a), a), t._storeNames = O(a), this;
      }, nn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = re(this._cfg.contentUpgrade || P, e), this;
      }, nn);
      function nn() {
      }
      function Tr(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new yt(In, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function Or(e) {
        return e && typeof e.databases == "function";
      }
      function Sr(e) {
        return xt(function() {
          return X.letThrough = !0, e();
        });
      }
      function Pr(e) {
        return !("from" in e);
      }
      var Le = function(e, t) {
        if (!this) {
          var r = new Le();
          return e && "d" in e && D(r, e), r;
        }
        D(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function pn(e, t, r) {
        var o = pe(t, r);
        if (!isNaN(o)) {
          if (0 < o) throw RangeError();
          if (Pr(e)) return D(e, { from: t, to: r, d: 1 });
          var a = e.l, o = e.r;
          if (pe(r, e.from) < 0) return a ? pn(a, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, wi(e);
          if (0 < pe(t, e.to)) return o ? pn(o, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, wi(e);
          pe(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < pe(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, a && !e.l && yn(e, a), o && r && yn(e, o);
        }
      }
      function yn(e, t) {
        Pr(t) || function r(o, y) {
          var s = y.from, l = y.to, f = y.l, y = y.r;
          pn(o, s, l), f && r(o, f), y && r(o, y);
        }(e, t);
      }
      function _i(e, t) {
        var r = Un(t), o = r.next();
        if (o.done) return !1;
        for (var a = o.value, s = Un(e), l = s.next(a.from), f = l.value; !o.done && !l.done; ) {
          if (pe(f.from, a.to) <= 0 && 0 <= pe(f.to, a.from)) return !0;
          pe(a.from, f.from) < 0 ? a = (o = r.next(f.from)).value : f = (l = s.next(a.from)).value;
        }
        return !1;
      }
      function Un(e) {
        var t = Pr(e) ? null : { s: 0, n: e };
        return { next: function(r) {
          for (var o = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, o) for (; t.n.l && pe(r, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !o || pe(r, t.n.to) <= 0) return { value: t.n, done: !1 };
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
      function wi(e) {
        var t, r, o = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((r = e.l) === null || r === void 0 ? void 0 : r.d) || 0), a = 1 < o ? "r" : o < -1 ? "l" : "";
        a && (t = a == "r" ? "l" : "r", r = c({}, e), o = e[a], e.from = o.from, e.to = o.to, e[a] = o[a], r[a] = o[t], (e[t] = r).d = xi(r)), e.d = xi(e);
      }
      function xi(r) {
        var t = r.r, r = r.l;
        return (t ? r ? Math.max(t.d, r.d) : t.d : r ? r.d : 0) + 1;
      }
      function Vn(e, t) {
        return O(t).forEach(function(r) {
          e[r] ? yn(e[r], t[r]) : e[r] = function o(a) {
            var s, l, f = {};
            for (s in a) L(a, s) && (l = a[s], f[s] = !l || typeof l != "object" || st.has(l.constructor) ? l : o(l));
            return f;
          }(t[r]);
        }), e;
      }
      function kr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && _i(t[r], e[r]);
        });
      }
      Q(Le.prototype, ((at = { add: function(e) {
        return yn(this, e), this;
      }, addKey: function(e) {
        return pn(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(r) {
          return pn(t, r, r);
        }), this;
      }, hasKey: function(e) {
        var t = Un(this).next(e).value;
        return t && pe(t.from, e) <= 0 && 0 <= pe(t.to, e);
      } })[tt] = function() {
        return Un(this);
      }, at));
      var Ft = {}, Ar = {}, Cr = !1;
      function Hn(e) {
        Vn(Ar, e), Cr || (Cr = !0, setTimeout(function() {
          Cr = !1, Ir(Ar, !(Ar = {}));
        }, 0));
      }
      function Ir(e, t) {
        t === void 0 && (t = !1);
        var r = /* @__PURE__ */ new Set();
        if (e.all) for (var o = 0, a = Object.values(Ft); o < a.length; o++) Ei(l = a[o], e, r, t);
        else for (var s in e) {
          var l, f = /^idb\:\/\/(.*)\/(.*)\//.exec(s);
          f && (s = f[1], f = f[2], (l = Ft["idb://".concat(s, "/").concat(f)]) && Ei(l, e, r, t));
        }
        r.forEach(function(y) {
          return y();
        });
      }
      function Ei(e, t, r, o) {
        for (var a = [], s = 0, l = Object.entries(e.queries.query); s < l.length; s++) {
          for (var f = l[s], y = f[0], v = [], _ = 0, d = f[1]; _ < d.length; _++) {
            var E = d[_];
            kr(t, E.obsSet) ? E.subscribers.forEach(function(w) {
              return r.add(w);
            }) : o && v.push(E);
          }
          o && a.push([y, v]);
        }
        if (o) for (var m = 0, g = a; m < g.length; m++) {
          var x = g[m], y = x[0], v = x[1];
          e.queries.query[y] = v;
        }
      }
      function Lo(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? Ae(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, a = Math.round(10 * e.verno), s = !1;
        function l() {
          if (t.openCanceller !== o) throw new N.DatabaseClosed("db.open() was cancelled");
        }
        function f() {
          return new $(function(E, m) {
            if (l(), !r) throw new N.MissingAPI();
            var g = e.name, x = t.autoSchema || !a ? r.open(g) : r.open(g, a);
            if (!x) throw new N.MissingAPI();
            x.onerror = ft(m), x.onblocked = Te(e._fireOnBlocked), x.onupgradeneeded = Te(function(w) {
              var T;
              _ = x.transaction, t.autoSchema && !e._options.allowEmptyDB ? (x.onerror = ln, _.abort(), x.result.close(), (T = r.deleteDatabase(g)).onsuccess = T.onerror = Te(function() {
                m(new N.NoSuchDatabase("Database ".concat(g, " doesnt exist")));
              })) : (_.onerror = ft(m), w = w.oldVersion > Math.pow(2, 62) ? 0 : w.oldVersion, d = w < 1, e.idbdb = x.result, s && Mo(e, _), Bo(e, w / 10, _, m));
            }, m), x.onsuccess = Te(function() {
              _ = null;
              var w, T, A, C, I, K = e.idbdb = x.result, U = Ke(K.objectStoreNames);
              if (0 < U.length) try {
                var B = K.transaction((C = U).length === 1 ? C[0] : C, "readonly");
                if (t.autoSchema) T = K, A = B, (w = e).verno = T.version / 10, A = w._dbSchema = qn(0, T, A), w._storeNames = Ke(T.objectStoreNames, 0), Bn(w, [w._allTables], O(A), A);
                else if (Ln(e, e._dbSchema, B), ((I = xr(qn(0, (I = e).idbdb, B), I._dbSchema)).add.length || I.change.some(function(q) {
                  return q.add.length || q.change.length;
                })) && !s) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), K.close(), a = K.version + 1, s = !0, E(f());
                Fn(e, B);
              } catch {
              }
              Zt.push(e), K.onversionchange = Te(function(q) {
                t.vcFired = !0, e.on("versionchange").fire(q);
              }), K.onclose = Te(function(q) {
                e.on("close").fire(q);
              }), d && (I = e._deps, B = g, K = I.indexedDB, I = I.IDBKeyRange, Or(K) || B === In || Tr(K, I).put({ name: B }).catch(P)), E();
            }, m);
          }).catch(function(E) {
            switch (E?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), f();
                break;
              case "VersionError":
                if (0 < a) return a = 0, f();
            }
            return $.reject(E);
          });
        }
        var y, v = t.dbReadyResolve, _ = null, d = !1;
        return $.race([o, (typeof navigator > "u" ? $.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(E) {
          function m() {
            return indexedDB.databases().finally(E);
          }
          y = setInterval(m, 100), m();
        }).finally(function() {
          return clearInterval(y);
        }) : Promise.resolve()).then(f)]).then(function() {
          return l(), t.onReadyBeingFired = [], $.resolve(Sr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function E() {
            if (0 < t.onReadyBeingFired.length) {
              var m = t.onReadyBeingFired.reduce(re, P);
              return t.onReadyBeingFired = [], $.resolve(Sr(function() {
                return m(e.vip);
              })).then(E);
            }
          });
        }).finally(function() {
          t.openCanceller === o && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(E) {
          t.dbOpenError = E;
          try {
            _ && _.abort();
          } catch {
          }
          return o === t.openCanceller && e._close(), Ae(E);
        }).finally(function() {
          t.openComplete = !0, v();
        }).then(function() {
          var E;
          return d && (E = {}, e.tables.forEach(function(m) {
            m.schema.indexes.forEach(function(g) {
              g.name && (E["idb://".concat(e.name, "/").concat(m.name, "/").concat(g.name)] = new Le(-1 / 0, [[[]]]));
            }), E["idb://".concat(e.name, "/").concat(m.name, "/")] = E["idb://".concat(e.name, "/").concat(m.name, "/:dels")] = new Le(-1 / 0, [[[]]]);
          }), St(fn).fire(E), Ir(E, !0)), e;
        });
      }
      function Dr(e) {
        function t(s) {
          return e.next(s);
        }
        var r = a(t), o = a(function(s) {
          return e.throw(s);
        });
        function a(s) {
          return function(y) {
            var f = s(y), y = f.value;
            return f.done ? y : y && typeof y.then == "function" ? y.then(r, o) : S(y) ? Promise.all(y).then(r, o) : r(y);
          };
        }
        return a(t)();
      }
      function Wn(e, t, r) {
        for (var o = S(e) ? e.slice() : [e], a = 0; a < r; ++a) o.push(t);
        return o;
      }
      var Uo = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return c(c({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema, a = {}, s = [];
          function l(d, E, m) {
            var g = dn(d), x = a[g] = a[g] || [], w = d == null ? 0 : typeof d == "string" ? 1 : d.length, T = 0 < E, T = c(c({}, m), { name: T ? "".concat(g, "(virtual-from:").concat(m.name, ")") : m.name, lowLevelIndex: m, isVirtual: T, keyTail: E, keyLength: w, extractKey: _r(d), unique: !T && m.unique });
            return x.push(T), T.isPrimaryKey || s.push(T), 1 < w && l(w === 2 ? d[0] : d.slice(0, w - 1), E + 1, m), x.sort(function(A, C) {
              return A.keyTail - C.keyTail;
            }), T;
          }
          t = l(o.primaryKey.keyPath, 0, o.primaryKey), a[":id"] = [t];
          for (var f = 0, y = o.indexes; f < y.length; f++) {
            var v = y[f];
            l(v.keyPath, 0, v);
          }
          function _(d) {
            var E, m = d.query.index;
            return m.isVirtual ? c(c({}, d), { query: { index: m.lowLevelIndex, range: (E = d.query.range, m = m.keyTail, { type: E.type === 1 ? 2 : E.type, lower: Wn(E.lower, E.lowerOpen ? e.MAX_KEY : e.MIN_KEY, m), lowerOpen: !0, upper: Wn(E.upper, E.upperOpen ? e.MIN_KEY : e.MAX_KEY, m), upperOpen: !0 }) } }) : d;
          }
          return c(c({}, r), { schema: c(c({}, o), { primaryKey: t, indexes: s, getIndexByKeyPath: function(d) {
            return (d = a[dn(d)]) && d[0];
          } }), count: function(d) {
            return r.count(_(d));
          }, query: function(d) {
            return r.query(_(d));
          }, openCursor: function(d) {
            var E = d.query.index, m = E.keyTail, g = E.isVirtual, x = E.keyLength;
            return g ? r.openCursor(_(d)).then(function(T) {
              return T && w(T);
            }) : r.openCursor(d);
            function w(T) {
              return Object.create(T, { continue: { value: function(A) {
                A != null ? T.continue(Wn(A, d.reverse ? e.MAX_KEY : e.MIN_KEY, m)) : d.unique ? T.continue(T.key.slice(0, x).concat(d.reverse ? e.MIN_KEY : e.MAX_KEY, m)) : T.continue();
              } }, continuePrimaryKey: { value: function(A, C) {
                T.continuePrimaryKey(Wn(A, e.MAX_KEY, m), C);
              } }, primaryKey: { get: function() {
                return T.primaryKey;
              } }, key: { get: function() {
                var A = T.key;
                return x === 1 ? A[0] : A.slice(0, x);
              } }, value: { get: function() {
                return T.value;
              } } });
            }
          } });
        } });
      } };
      function Nr(e, t, r, o) {
        return r = r || {}, o = o || "", O(e).forEach(function(a) {
          var s, l, f;
          L(t, a) ? (s = e[a], l = t[a], typeof s == "object" && typeof l == "object" && s && l ? (f = At(s)) !== At(l) ? r[o + a] = t[a] : f === "Object" ? Nr(s, l, r, o + a + ".") : s !== l && (r[o + a] = t[a]) : s !== l && (r[o + a] = t[a])) : r[o + a] = void 0;
        }), O(t).forEach(function(a) {
          L(e, a) || (r[o + a] = t[a]);
        }), r;
      }
      function Rr(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var Vo = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return c(c({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema.primaryKey;
          return c(c({}, r), { mutate: function(a) {
            var s = X.trans, l = s.table(t).hook, f = l.deleting, y = l.creating, v = l.updating;
            switch (a.type) {
              case "add":
                if (y.fire === P) break;
                return s._promise("readwrite", function() {
                  return _(a);
                }, !0);
              case "put":
                if (y.fire === P && v.fire === P) break;
                return s._promise("readwrite", function() {
                  return _(a);
                }, !0);
              case "delete":
                if (f.fire === P) break;
                return s._promise("readwrite", function() {
                  return _(a);
                }, !0);
              case "deleteRange":
                if (f.fire === P) break;
                return s._promise("readwrite", function() {
                  return function d(E, m, g) {
                    return r.query({ trans: E, values: !1, query: { index: o, range: m }, limit: g }).then(function(x) {
                      var w = x.result;
                      return _({ type: "delete", keys: w, trans: E }).then(function(T) {
                        return 0 < T.numFailures ? Promise.reject(T.failures[0]) : w.length < g ? { failures: [], numFailures: 0, lastResult: void 0 } : d(E, c(c({}, m), { lower: w[w.length - 1], lowerOpen: !0 }), g);
                      });
                    });
                  }(a.trans, a.range, 1e4);
                }, !0);
            }
            return r.mutate(a);
            function _(d) {
              var E, m, g, x = X.trans, w = d.keys || Rr(o, d);
              if (!w) throw new Error("Keys missing");
              return (d = d.type === "add" || d.type === "put" ? c(c({}, d), { keys: w }) : c({}, d)).type !== "delete" && (d.values = h([], d.values)), d.keys && (d.keys = h([], d.keys)), E = r, g = w, ((m = d).type === "add" ? Promise.resolve([]) : E.getMany({ trans: m.trans, keys: g, cache: "immutable" })).then(function(T) {
                var A = w.map(function(C, I) {
                  var K, U, B, q = T[I], W = { onerror: null, onsuccess: null };
                  return d.type === "delete" ? f.fire.call(W, C, q, x) : d.type === "add" || q === void 0 ? (K = y.fire.call(W, C, d.values[I], x), C == null && K != null && (d.keys[I] = C = K, o.outbound || te(d.values[I], o.keyPath, C))) : (K = Nr(q, d.values[I]), (U = v.fire.call(W, K, C, q, x)) && (B = d.values[I], Object.keys(U).forEach(function(V) {
                    L(B, V) ? B[V] = U[V] : te(B, V, U[V]);
                  }))), W;
                });
                return r.mutate(d).then(function(C) {
                  for (var I = C.failures, K = C.results, U = C.numFailures, C = C.lastResult, B = 0; B < w.length; ++B) {
                    var q = (K || w)[B], W = A[B];
                    q == null ? W.onerror && W.onerror(I[B]) : W.onsuccess && W.onsuccess(d.type === "put" && T[B] ? d.values[B] : q);
                  }
                  return { failures: I, results: K, numFailures: U, lastResult: C };
                }).catch(function(C) {
                  return A.forEach(function(I) {
                    return I.onerror && I.onerror(C);
                  }), Promise.reject(C);
                });
              });
            }
          } });
        } });
      } };
      function Ti(e, t, r) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var o = [], a = 0, s = 0; a < t.keys.length && s < e.length; ++a) pe(t.keys[a], e[s]) === 0 && (o.push(r ? ze(t.values[a]) : t.values[a]), ++s);
          return o.length === e.length ? o : null;
        } catch {
          return null;
        }
      }
      var Ho = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var r = e.table(t);
          return c(c({}, r), { getMany: function(o) {
            if (!o.cache) return r.getMany(o);
            var a = Ti(o.keys, o.trans._cache, o.cache === "clone");
            return a ? $.resolve(a) : r.getMany(o).then(function(s) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? ze(s) : s }, s;
            });
          }, mutate: function(o) {
            return o.type !== "add" && (o.trans._cache = null), r.mutate(o);
          } });
        } };
      } };
      function Oi(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Si(e, t) {
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
      var Wo = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, r = new Le(e.MIN_KEY, e.MAX_KEY);
        return c(c({}, e), { transaction: function(o, a, s) {
          if (X.subscr && a !== "readonly") throw new N.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(X.querier));
          return e.transaction(o, a, s);
        }, table: function(o) {
          var a = e.table(o), s = a.schema, l = s.primaryKey, d = s.indexes, f = l.extractKey, y = l.outbound, v = l.autoIncrement && d.filter(function(m) {
            return m.compound && m.keyPath.includes(l.keyPath);
          }), _ = c(c({}, a), { mutate: function(m) {
            function g(V) {
              return V = "idb://".concat(t, "/").concat(o, "/").concat(V), C[V] || (C[V] = new Le());
            }
            var x, w, T, A = m.trans, C = m.mutatedParts || (m.mutatedParts = {}), I = g(""), K = g(":dels"), U = m.type, W = m.type === "deleteRange" ? [m.range] : m.type === "delete" ? [m.keys] : m.values.length < 50 ? [Rr(l, m).filter(function(V) {
              return V;
            }), m.values] : [], B = W[0], q = W[1], W = m.trans._cache;
            return S(B) ? (I.addKeys(B), (W = U === "delete" || B.length === q.length ? Ti(B, W) : null) || K.addKeys(B), (W || q) && (x = g, w = W, T = q, s.indexes.forEach(function(V) {
              var G = x(V.name || "");
              function ue(oe) {
                return oe != null ? V.extractKey(oe) : null;
              }
              function ye(oe) {
                return V.multiEntry && S(oe) ? oe.forEach(function(Se) {
                  return G.addKey(Se);
                }) : G.addKey(oe);
              }
              (w || T).forEach(function(oe, Ue) {
                var ie = w && ue(w[Ue]), Ue = T && ue(T[Ue]);
                pe(ie, Ue) !== 0 && (ie != null && ye(ie), Ue != null && ye(Ue));
              });
            }))) : B ? (q = { from: (q = B.lower) !== null && q !== void 0 ? q : e.MIN_KEY, to: (q = B.upper) !== null && q !== void 0 ? q : e.MAX_KEY }, K.add(q), I.add(q)) : (I.add(r), K.add(r), s.indexes.forEach(function(V) {
              return g(V.name).add(r);
            })), a.mutate(m).then(function(V) {
              return !B || m.type !== "add" && m.type !== "put" || (I.addKeys(V.results), v && v.forEach(function(G) {
                for (var ue = m.values.map(function(ie) {
                  return G.extractKey(ie);
                }), ye = G.keyPath.findIndex(function(ie) {
                  return ie === l.keyPath;
                }), oe = 0, Se = V.results.length; oe < Se; ++oe) ue[oe][ye] = V.results[oe];
                g(G.name).addKeys(ue);
              })), A.mutatedParts = Vn(A.mutatedParts || {}, C), V;
            });
          } }), d = function(g) {
            var x = g.query, g = x.index, x = x.range;
            return [g, new Le((g = x.lower) !== null && g !== void 0 ? g : e.MIN_KEY, (x = x.upper) !== null && x !== void 0 ? x : e.MAX_KEY)];
          }, E = { get: function(m) {
            return [l, new Le(m.key)];
          }, getMany: function(m) {
            return [l, new Le().addKeys(m.keys)];
          }, count: d, query: d, openCursor: d };
          return O(E).forEach(function(m) {
            _[m] = function(g) {
              var x = X.subscr, w = !!x, T = Oi(X, a) && Si(m, g) ? g.obsSet = {} : x;
              if (w) {
                var A = function(q) {
                  return q = "idb://".concat(t, "/").concat(o, "/").concat(q), T[q] || (T[q] = new Le());
                }, C = A(""), I = A(":dels"), x = E[m](g), w = x[0], x = x[1];
                if ((m === "query" && w.isPrimaryKey && !g.values ? I : A(w.name || "")).add(x), !w.isPrimaryKey) {
                  if (m !== "count") {
                    var K = m === "query" && y && g.values && a.query(c(c({}, g), { values: !1 }));
                    return a[m].apply(this, arguments).then(function(q) {
                      if (m === "query") {
                        if (y && g.values) return K.then(function(ue) {
                          return ue = ue.result, C.addKeys(ue), q;
                        });
                        var W = g.values ? q.result.map(f) : q.result;
                        (g.values ? C : I).addKeys(W);
                      } else if (m === "openCursor") {
                        var V = q, G = g.values;
                        return V && Object.create(V, { key: { get: function() {
                          return I.addKey(V.primaryKey), V.key;
                        } }, primaryKey: { get: function() {
                          var ue = V.primaryKey;
                          return I.addKey(ue), ue;
                        } }, value: { get: function() {
                          return G && C.addKey(V.primaryKey), V.value;
                        } } });
                      }
                      return q;
                    });
                  }
                  I.add(r);
                }
              }
              return a[m].apply(this, arguments);
            };
          }), _;
        } });
      } };
      function Pi(e, t, r) {
        if (r.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var o = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return r.numFailures === o ? null : (t = c({}, t), S(t.keys) && (t.keys = t.keys.filter(function(a, s) {
          return !(s in r.failures);
        })), "values" in t && S(t.values) && (t.values = t.values.filter(function(a, s) {
          return !(s in r.failures);
        })), t);
      }
      function Kr(e, t) {
        return r = e, ((o = t).lower === void 0 || (o.lowerOpen ? 0 < pe(r, o.lower) : 0 <= pe(r, o.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? pe(e, t.upper) < 0 : pe(e, t.upper) <= 0));
        var r, o;
      }
      function ki(e, t, E, o, a, s) {
        if (!E || E.length === 0) return e;
        var l = t.query.index, f = l.multiEntry, y = t.query.range, v = o.schema.primaryKey.extractKey, _ = l.extractKey, d = (l.lowLevelIndex || l).extractKey, E = E.reduce(function(m, g) {
          var x = m, w = [];
          if (g.type === "add" || g.type === "put") for (var T = new Le(), A = g.values.length - 1; 0 <= A; --A) {
            var C, I = g.values[A], K = v(I);
            T.hasKey(K) || (C = _(I), (f && S(C) ? C.some(function(V) {
              return Kr(V, y);
            }) : Kr(C, y)) && (T.addKey(K), w.push(I)));
          }
          switch (g.type) {
            case "add":
              var U = new Le().addKeys(t.values ? m.map(function(G) {
                return v(G);
              }) : m), x = m.concat(t.values ? w.filter(function(G) {
                return G = v(G), !U.hasKey(G) && (U.addKey(G), !0);
              }) : w.map(function(G) {
                return v(G);
              }).filter(function(G) {
                return !U.hasKey(G) && (U.addKey(G), !0);
              }));
              break;
            case "put":
              var B = new Le().addKeys(g.values.map(function(G) {
                return v(G);
              }));
              x = m.filter(function(G) {
                return !B.hasKey(t.values ? v(G) : G);
              }).concat(t.values ? w : w.map(function(G) {
                return v(G);
              }));
              break;
            case "delete":
              var q = new Le().addKeys(g.keys);
              x = m.filter(function(G) {
                return !q.hasKey(t.values ? v(G) : G);
              });
              break;
            case "deleteRange":
              var W = g.range;
              x = m.filter(function(G) {
                return !Kr(v(G), W);
              });
          }
          return x;
        }, e);
        return E === e ? e : (E.sort(function(m, g) {
          return pe(d(m), d(g)) || pe(v(m), v(g));
        }), t.limit && t.limit < 1 / 0 && (E.length > t.limit ? E.length = t.limit : e.length === t.limit && E.length < t.limit && (a.dirty = !0)), s ? Object.freeze(E) : E);
      }
      function Ai(e, t) {
        return pe(e.lower, t.lower) === 0 && pe(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function $o(e, t) {
        return function(r, o, a, s) {
          if (r === void 0) return o !== void 0 ? -1 : 0;
          if (o === void 0) return 1;
          if ((o = pe(r, o)) === 0) {
            if (a && s) return 0;
            if (a) return 1;
            if (s) return -1;
          }
          return o;
        }(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function(r, o, a, s) {
          if (r === void 0) return o !== void 0 ? 1 : 0;
          if (o === void 0) return -1;
          if ((o = pe(r, o)) === 0) {
            if (a && s) return 0;
            if (a) return -1;
            if (s) return 1;
          }
          return o;
        }(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function Go(e, t, r, o) {
        e.subscribers.add(r), o.addEventListener("abort", function() {
          var a, s;
          e.subscribers.delete(r), e.subscribers.size === 0 && (a = e, s = t, setTimeout(function() {
            a.subscribers.size === 0 && Pe(s, a);
          }, 3e3));
        });
      }
      var Yo = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return c(c({}, e), { transaction: function(r, o, a) {
          var s, l, f = e.transaction(r, o, a);
          return o === "readwrite" && (l = (s = new AbortController()).signal, a = function(y) {
            return function() {
              if (s.abort(), o === "readwrite") {
                for (var v = /* @__PURE__ */ new Set(), _ = 0, d = r; _ < d.length; _++) {
                  var E = d[_], m = Ft["idb://".concat(t, "/").concat(E)];
                  if (m) {
                    var g = e.table(E), x = m.optimisticOps.filter(function(G) {
                      return G.trans === f;
                    });
                    if (f._explicit && y && f.mutatedParts) for (var w = 0, T = Object.values(m.queries.query); w < T.length; w++) for (var A = 0, C = (U = T[w]).slice(); A < C.length; A++) kr((B = C[A]).obsSet, f.mutatedParts) && (Pe(U, B), B.subscribers.forEach(function(G) {
                      return v.add(G);
                    }));
                    else if (0 < x.length) {
                      m.optimisticOps = m.optimisticOps.filter(function(G) {
                        return G.trans !== f;
                      });
                      for (var I = 0, K = Object.values(m.queries.query); I < K.length; I++) for (var U, B, q, W = 0, V = (U = K[I]).slice(); W < V.length; W++) (B = V[W]).res != null && f.mutatedParts && (y && !B.dirty ? (q = Object.isFrozen(B.res), q = ki(B.res, B.req, x, g, B, q), B.dirty ? (Pe(U, B), B.subscribers.forEach(function(G) {
                        return v.add(G);
                      })) : q !== B.res && (B.res = q, B.promise = $.resolve({ result: q }))) : (B.dirty && Pe(U, B), B.subscribers.forEach(function(G) {
                        return v.add(G);
                      })));
                    }
                  }
                }
                v.forEach(function(G) {
                  return G();
                });
              }
            };
          }, f.addEventListener("abort", a(!1), { signal: l }), f.addEventListener("error", a(!1), { signal: l }), f.addEventListener("complete", a(!0), { signal: l })), f;
        }, table: function(r) {
          var o = e.table(r), a = o.schema.primaryKey;
          return c(c({}, o), { mutate: function(s) {
            var l = X.trans;
            if (a.outbound || l.db._options.cache === "disabled" || l.explicit || l.idbtrans.mode !== "readwrite") return o.mutate(s);
            var f = Ft["idb://".concat(t, "/").concat(r)];
            return f ? (l = o.mutate(s), s.type !== "add" && s.type !== "put" || !(50 <= s.values.length || Rr(a, s).some(function(y) {
              return y == null;
            })) ? (f.optimisticOps.push(s), s.mutatedParts && Hn(s.mutatedParts), l.then(function(y) {
              0 < y.numFailures && (Pe(f.optimisticOps, s), (y = Pi(0, s, y)) && f.optimisticOps.push(y), s.mutatedParts && Hn(s.mutatedParts));
            }), l.catch(function() {
              Pe(f.optimisticOps, s), s.mutatedParts && Hn(s.mutatedParts);
            })) : l.then(function(y) {
              var v = Pi(0, c(c({}, s), { values: s.values.map(function(_, d) {
                var E;
                return y.failures[d] || (_ = (E = a.keyPath) !== null && E !== void 0 && E.includes(".") ? ze(_) : c({}, _), te(_, a.keyPath, y.results[d])), _;
              }) }), y);
              f.optimisticOps.push(v), queueMicrotask(function() {
                return s.mutatedParts && Hn(s.mutatedParts);
              });
            }), l) : o.mutate(s);
          }, query: function(s) {
            if (!Oi(X, o) || !Si("query", s)) return o.query(s);
            var l = ((v = X.trans) === null || v === void 0 ? void 0 : v.db._options.cache) === "immutable", d = X, f = d.requery, y = d.signal, v = function(g, x, w, T) {
              var A = Ft["idb://".concat(g, "/").concat(x)];
              if (!A) return [];
              if (!(x = A.queries[w])) return [null, !1, A, null];
              var C = x[(T.query ? T.query.index.name : null) || ""];
              if (!C) return [null, !1, A, null];
              switch (w) {
                case "query":
                  var I = C.find(function(K) {
                    return K.req.limit === T.limit && K.req.values === T.values && Ai(K.req.query.range, T.query.range);
                  });
                  return I ? [I, !0, A, C] : [C.find(function(K) {
                    return ("limit" in K.req ? K.req.limit : 1 / 0) >= T.limit && (!T.values || K.req.values) && $o(K.req.query.range, T.query.range);
                  }), !1, A, C];
                case "count":
                  return I = C.find(function(K) {
                    return Ai(K.req.query.range, T.query.range);
                  }), [I, !!I, A, C];
              }
            }(t, r, "query", s), _ = v[0], d = v[1], E = v[2], m = v[3];
            return _ && d ? _.obsSet = s.obsSet : (d = o.query(s).then(function(g) {
              var x = g.result;
              if (_ && (_.res = x), l) {
                for (var w = 0, T = x.length; w < T; ++w) Object.freeze(x[w]);
                Object.freeze(x);
              } else g.result = ze(x);
              return g;
            }).catch(function(g) {
              return m && _ && Pe(m, _), Promise.reject(g);
            }), _ = { obsSet: s.obsSet, promise: d, subscribers: /* @__PURE__ */ new Set(), type: "query", req: s, dirty: !1 }, m ? m.push(_) : (m = [_], (E = E || (Ft["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[s.query.index.name || ""] = m)), Go(_, m, f, y), _.promise.then(function(g) {
              return { result: ki(g.result, s, E?.optimisticOps, o, _, l) };
            });
          } });
        } });
      } };
      function $n(e, t) {
        return new Proxy(e, { get: function(r, o, a) {
          return o === "db" ? t : Reflect.get(r, o, a);
        } });
      }
      var yt = (Ce.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new N.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new N.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(Fo), r.stores({}), this._state.autoSchema = !1, r);
      }, Ce.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || X.letThrough || this._vip) ? e() : new $(function(r, o) {
          if (t._state.openComplete) return o(new N.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new N.DatabaseClosed());
            t.open().catch(P);
          }
          t._state.dbReadyPromise.then(r, o);
        }).then(e);
      }, Ce.prototype.use = function(e) {
        var t = e.stack, r = e.create, o = e.level, a = e.name;
        return a && this.unuse({ stack: t, name: a }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: r, level: o ?? 10, name: a }), e.sort(function(s, l) {
          return s.level - l.level;
        }), this;
      }, Ce.prototype.unuse = function(e) {
        var t = e.stack, r = e.name, o = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(a) {
          return o ? a.create !== o : !!r && a.name !== r;
        })), this;
      }, Ce.prototype.open = function() {
        var e = this;
        return Rt(We, function() {
          return Lo(e);
        });
      }, Ce.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, t = Zt.indexOf(this);
        if (0 <= t && Zt.splice(t, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new $(function(r) {
          e.dbReadyResolve = r;
        }), e.openCanceller = new $(function(r, o) {
          e.cancelOpen = o;
        }));
      }, Ce.prototype.close = function(r) {
        var t = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        t ? (r.isBeingOpened && r.cancelOpen(new N.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new N.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, Ce.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", o = this._state;
        return new $(function(a, s) {
          function l() {
            t.close(e);
            var f = t._deps.indexedDB.deleteDatabase(t.name);
            f.onsuccess = Te(function() {
              var y, v, _;
              y = t._deps, v = t.name, _ = y.indexedDB, y = y.IDBKeyRange, Or(_) || v === In || Tr(_, y).delete(v).catch(P), a();
            }), f.onerror = ft(s), f.onblocked = t._fireOnBlocked;
          }
          if (r) throw new N.InvalidArgument("Invalid closeOptions argument to db.delete()");
          o.isBeingOpened ? o.dbReadyPromise.then(l) : l();
        });
      }, Ce.prototype.backendDB = function() {
        return this.idbdb;
      }, Ce.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Ce.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, Ce.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Ce.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Ce.prototype, "tables", { get: function() {
        var e = this;
        return O(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), Ce.prototype.transaction = function() {
        var e = (function(t, r, o) {
          var a = arguments.length;
          if (a < 2) throw new N.InvalidArgument("Too few arguments");
          for (var s = new Array(a - 1); --a; ) s[a - 1] = arguments[a];
          return o = s.pop(), [t, Xe(s), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Ce.prototype._transaction = function(e, t, r) {
        var o = this, a = X.trans;
        a && a.db === this && e.indexOf("!") === -1 || (a = null);
        var s, l, f = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (l = t.map(function(v) {
            if (v = v instanceof o.Table ? v.name : v, typeof v != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return v;
          }), e == "r" || e === dr) s = dr;
          else {
            if (e != "rw" && e != pr) throw new N.InvalidArgument("Invalid transaction mode: " + e);
            s = pr;
          }
          if (a) {
            if (a.mode === dr && s === pr) {
              if (!f) throw new N.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              a = null;
            }
            a && l.forEach(function(v) {
              if (a && a.storeNames.indexOf(v) === -1) {
                if (!f) throw new N.SubTransaction("Table " + v + " not included in parent transaction.");
                a = null;
              }
            }), f && a && !a.active && (a = null);
          }
        } catch (v) {
          return a ? a._promise(null, function(_, d) {
            d(v);
          }) : Ae(v);
        }
        var y = (function v(_, d, E, m, g) {
          return $.resolve().then(function() {
            var x = X.transless || X, w = _._createTransaction(d, E, _._dbSchema, m);
            if (w.explicit = !0, x = { trans: w, transless: x }, m) w.idbtrans = m.idbtrans;
            else try {
              w.create(), w.idbtrans._explicit = !0, _._state.PR1398_maxLoop = 3;
            } catch (C) {
              return C.name === k.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                return v(_, d, E, null, g);
              })) : Ae(C);
            }
            var T, A = ut(g);
            return A && Jt(), x = $.follow(function() {
              var C;
              (T = g.call(w, w)) && (A ? (C = Et.bind(null, null), T.then(C, C)) : typeof T.next == "function" && typeof T.throw == "function" && (T = Dr(T)));
            }, x), (T && typeof T.then == "function" ? $.resolve(T).then(function(C) {
              return w.active ? C : Ae(new N.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : x.then(function() {
              return T;
            })).then(function(C) {
              return m && w._resolve(), w._completion.then(function() {
                return C;
              });
            }).catch(function(C) {
              return w._reject(C), Ae(C);
            });
          });
        }).bind(null, this, s, l, a, r);
        return a ? a._promise(s, y, "lock") : X.trans ? Rt(X.transless, function() {
          return o._whenReady(y);
        }) : this._whenReady(y);
      }, Ce.prototype.table = function(e) {
        if (!L(this._allTables, e)) throw new N.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Ce);
      function Ce(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var o = Ce.dependencies;
        this._options = t = c({ addons: Ce.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var a, s, l, f, y, v = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: P, dbReadyPromise: null, cancelOpen: P, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        v.dbReadyPromise = new $(function(d) {
          v.dbReadyResolve = d;
        }), v.openCanceller = new $(function(d, E) {
          v.cancelOpen = E;
        }), this._state = v, this.name = e, this.on = sn(this, "populate", "blocked", "versionchange", "close", { ready: [re, P] }), this.once = function(d, E) {
          var m = function() {
            for (var g = [], x = 0; x < arguments.length; x++) g[x] = arguments[x];
            r.on(d).unsubscribe(m), E.apply(r, g);
          };
          return r.on(d, m);
        }, this.on.ready.subscribe = qe(this.on.ready.subscribe, function(d) {
          return function(E, m) {
            Ce.vip(function() {
              var g, x = r._state;
              x.openComplete ? (x.dbOpenError || $.resolve().then(E), m && d(E)) : x.onReadyBeingFired ? (x.onReadyBeingFired.push(E), m && d(E)) : (d(E), g = r, m || d(function w() {
                g.on.ready.unsubscribe(E), g.on.ready.unsubscribe(w);
              }));
            });
          };
        }), this.Collection = (a = this, un(Co.prototype, function(T, w) {
          this.db = a;
          var m = oi, g = null;
          if (w) try {
            m = w();
          } catch (A) {
            g = A;
          }
          var x = T._ctx, w = x.table, T = w.hook.reading.fire;
          this._ctx = { table: w, index: x.index, isPrimKey: !x.index || w.schema.primKey.keyPath && x.index === w.schema.primKey.name, range: m, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: g, or: x.or, valueMapper: T !== R ? T : null };
        })), this.Table = (s = this, un(ci.prototype, function(d, E, m) {
          this.db = s, this._tx = m, this.name = d, this.schema = E, this.hook = s._allTables[d] ? s._allTables[d].hook : sn(null, { creating: [ee, P], reading: [Y, R], updating: [se, P], deleting: [J, P] });
        })), this.Transaction = (l = this, un(No.prototype, function(d, E, m, g, x) {
          var w = this;
          d !== "readonly" && E.forEach(function(T) {
            T = (T = m[T]) === null || T === void 0 ? void 0 : T.yProps, T && (E = E.concat(T.map(function(A) {
              return A.updatesTable;
            })));
          }), this.db = l, this.mode = d, this.storeNames = E, this.schema = m, this.chromeTransactionDurability = g, this.idbtrans = null, this.on = sn(this, "complete", "error", "abort"), this.parent = x || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new $(function(T, A) {
            w._resolve = T, w._reject = A;
          }), this._completion.then(function() {
            w.active = !1, w.on.complete.fire();
          }, function(T) {
            var A = w.active;
            return w.active = !1, w.on.error.fire(T), w.parent ? w.parent._reject(T) : A && w.idbtrans && w.idbtrans.abort(), Ae(T);
          });
        })), this.Version = (f = this, un(qo.prototype, function(d) {
          this.db = f, this._cfg = { version: d, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (y = this, un(yi.prototype, function(d, E, m) {
          if (this.db = y, this._ctx = { table: d, index: E === ":id" ? null : E, or: m }, this._cmp = this._ascending = pe, this._descending = function(g, x) {
            return pe(x, g);
          }, this._max = function(g, x) {
            return 0 < pe(g, x) ? g : x;
          }, this._min = function(g, x) {
            return pe(g, x) < 0 ? g : x;
          }, this._IDBKeyRange = y._deps.IDBKeyRange, !this._IDBKeyRange) throw new N.MissingAPI();
        })), this.on("versionchange", function(d) {
          0 < d.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(d) {
          !d.newVersion || d.newVersion < d.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(d.oldVersion / 10));
        }), this._maxKey = hn(t.IDBKeyRange), this._createTransaction = function(d, E, m, g) {
          return new r.Transaction(d, E, m, r._options.chromeTransactionDurability, g);
        }, this._fireOnBlocked = function(d) {
          r.on("blocked").fire(d), Zt.filter(function(E) {
            return E.name === r.name && E !== r && !E._state.vcFired;
          }).map(function(E) {
            return E.on("versionchange").fire(d);
          });
        }, this.use(Ho), this.use(Yo), this.use(Wo), this.use(Uo), this.use(Vo);
        var _ = new Proxy(this, { get: function(d, E, m) {
          if (E === "_vip") return !0;
          if (E === "table") return function(x) {
            return $n(r.table(x), _);
          };
          var g = Reflect.get(d, E, m);
          return g instanceof ci ? $n(g, _) : E === "tables" ? g.map(function(x) {
            return $n(x, _);
          }) : E === "_createTransaction" ? function() {
            return $n(g.apply(this, arguments), _);
          } : g;
        } });
        this.vip = _, o.forEach(function(d) {
          return d(r);
        });
      }
      var Gn, at = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Xo = (jr.prototype.subscribe = function(e, t, r) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: r });
      }, jr.prototype[at] = function() {
        return this;
      }, jr);
      function jr(e) {
        this._subscribe = e;
      }
      try {
        Gn = { indexedDB: p.indexedDB || p.mozIndexedDB || p.webkitIndexedDB || p.msIndexedDB, IDBKeyRange: p.IDBKeyRange || p.webkitIDBKeyRange };
      } catch {
        Gn = { indexedDB: null, IDBKeyRange: null };
      }
      function Ci(e) {
        var t, r = !1, o = new Xo(function(a) {
          var s = ut(e), l, f = !1, y = {}, v = {}, _ = { get closed() {
            return f;
          }, unsubscribe: function() {
            f || (f = !0, l && l.abort(), d && St.storagemutated.unsubscribe(m));
          } };
          a.start && a.start(_);
          var d = !1, E = function() {
            return hr(g);
          }, m = function(x) {
            Vn(y, x), kr(v, y) && E();
          }, g = function() {
            var x, w, T;
            !f && Gn.indexedDB && (y = {}, x = {}, l && l.abort(), l = new AbortController(), T = function(A) {
              var C = zt();
              try {
                s && Jt();
                var I = xt(e, A);
                return I = s ? I.finally(Et) : I;
              } finally {
                C && Qt();
              }
            }(w = { subscr: x, signal: l.signal, requery: E, querier: e, trans: null }), Promise.resolve(T).then(function(A) {
              r = !0, t = A, f || w.signal.aborted || (y = {}, function(C) {
                for (var I in C) if (L(C, I)) return;
                return 1;
              }(v = x) || d || (St(fn, m), d = !0), hr(function() {
                return !f && a.next && a.next(A);
              }));
            }, function(A) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(A?.name) || f || hr(function() {
                f || a.error && a.error(A);
              });
            }));
          };
          return setTimeout(E, 0), _;
        });
        return o.hasValue = function() {
          return r;
        }, o.getValue = function() {
          return t;
        }, o;
      }
      var Bt = yt;
      function Fr(e) {
        var t = Pt;
        try {
          Pt = !0, St.storagemutated.fire(e), Ir(e, !0);
        } finally {
          Pt = t;
        }
      }
      Q(Bt, c(c({}, Re), { delete: function(e) {
        return new Bt(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new Bt(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = Bt.dependencies, r = t.indexedDB, t = t.IDBKeyRange, (Or(r) ? Promise.resolve(r.databases()).then(function(o) {
            return o.map(function(a) {
              return a.name;
            }).filter(function(a) {
              return a !== In;
            });
          }) : Tr(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return Ae(new N.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          D(this, e);
        };
      }, ignoreTransaction: function(e) {
        return X.trans ? Rt(X.transless, e) : e();
      }, vip: Sr, async: function(e) {
        return function() {
          try {
            var t = Dr(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : $.resolve(t);
          } catch (r) {
            return Ae(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = Dr(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : $.resolve(o);
        } catch (a) {
          return Ae(a);
        }
      }, currentTransaction: { get: function() {
        return X.trans || null;
      } }, waitFor: function(e, t) {
        return t = $.resolve(typeof e == "function" ? Bt.ignoreTransaction(e) : e).timeout(t || 6e4), X.trans ? X.trans.waitFor(t) : t;
      }, Promise: $, debug: { get: function() {
        return Z;
      }, set: function(e) {
        ve(e);
      } }, derive: de, extend: D, props: Q, override: qe, Events: sn, on: St, liveQuery: Ci, extendObservabilitySet: Vn, getByKeyPath: ne, setByKeyPath: te, delByKeyPath: function(e, t) {
        typeof t == "string" ? te(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          te(e, r, void 0);
        });
      }, shallowClone: _e, deepClone: ze, getObjectDiff: Nr, cmp: pe, asap: je, minKey: -1 / 0, addons: [], connections: Zt, errnames: k, dependencies: Gn, cache: Ft, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), Bt.maxKey = hn(Bt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (St(fn, function(e) {
        Pt || (e = new CustomEvent(vr, { detail: e }), Pt = !0, dispatchEvent(e), Pt = !1);
      }), addEventListener(vr, function(e) {
        e = e.detail, Pt || Fr(e);
      }));
      var rn, Pt = !1, Ii = function() {
      };
      return typeof BroadcastChannel < "u" && ((Ii = function() {
        (rn = new BroadcastChannel(vr)).onmessage = function(e) {
          return e.data && Fr(e.data);
        };
      })(), typeof rn.unref == "function" && rn.unref(), St(fn, function(e) {
        Pt || rn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!yt.disableBfCache && e.persisted) {
          Z && console.debug("Dexie: handling persisted pagehide"), rn?.close();
          for (var t = 0, r = Zt; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !yt.disableBfCache && e.persisted && (Z && console.debug("Dexie: handling persisted pageshow"), Ii(), Fr({ all: new Le(-1 / 0, [[]]) }));
      })), $.rejectionMapper = function(e, t) {
        return !e || e instanceof bt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !M[e.name] ? e : (t = new M[e.name](t || e.message, e), "stack" in e && he(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, ve(Z), c(yt, Object.freeze({ __proto__: null, Dexie: yt, liveQuery: Ci, Entity: ai, cmp: pe, PropModification: cn, replacePrefix: function(e, t) {
        return new cn({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new cn({ add: e });
      }, remove: function(e) {
        return new cn({ remove: e });
      }, default: yt, RangeSet: Le, mergeRanges: yn, rangesOverlap: _i }), { default: yt }), yt;
    });
  }(_a)), _a.exports;
}
var df = hf();
const wa = /* @__PURE__ */ Wl(df), bs = Symbol.for("Dexie"), Zr = globalThis[bs] || (globalThis[bs] = wa);
if (wa.semVer !== Zr.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${wa.semVer} and ${Zr.semVer}`);
const {
  liveQuery: rh,
  mergeRanges: ih,
  rangesOverlap: oh,
  RangeSet: ah,
  cmp: sh,
  Entity: uh,
  PropModification: ch,
  replacePrefix: lh,
  add: fh,
  remove: hh,
  DexieYProvider: dh
} = Zr, pf = [".fsd", ".asd", ".ssd", ".scd"], Ut = "sclElements", yf = "id, tagName, &attributes.uuid, &attributes.id, attributes.name, parent.id, parent.tagName, *children.id, *children.tagName";
function mf(n) {
  const i = new Zr(n);
  return i.version(1).stores({
    [`${Ut}`]: yf
  }), i;
}
async function vf(n) {
  const { databaseInstance: i, records: u } = n, c = i.table(Ut);
  await i.transaction("rw", c, () => c.bulkAdd(u));
}
async function gf(n) {
  if (await Zr.exists(n))
    return await Zr.delete(n);
}
const bf = {
  useBrowserApi: !0,
  chunkSize: 32 * 1024,
  // 32KB
  batchSize: 2e3
};
async function ph({
  files: n,
  options: i = bf
}) {
  const u = [];
  if (n.length === 0) throw new Error("No files provided for import.");
  for (const c of n) {
    if (!_f(c)) {
      console.error(`Unsupported file type: ${c.name}`);
      continue;
    }
    c.size === 0 && console.warn(`File is empty: ${c.name}`);
    const h = await xf({ file: c, options: i });
    u.push(h);
  }
  return u;
}
function _f(n) {
  return pf.some((i) => n.name.toLowerCase().endsWith(i));
}
function wf(n) {
  return n.name.replace(/\.[^.]+$/, "");
}
async function xf(n) {
  const { file: i, options: u } = n;
  try {
    const c = wf(i);
    await gf(c);
    const h = mf(c);
    return u.useBrowserApi && i.size !== 0 && await Ef({
      file: i,
      databaseInstance: h,
      options: {
        chunkSize: u.chunkSize,
        batchSize: u.batchSize
      }
    }), c;
  } catch (c) {
    throw console.error(`Error importing file ${i.name}:`, c), c;
  }
}
async function Ef(n) {
  const { file: i, databaseInstance: u, options: c } = n, h = i.stream().getReader(), p = tf(), O = new TextDecoder(), S = new Uint8Array(0);
  return await xa({ databaseInstance: u, reader: h, sax: p, textDecoder: O, buffer: S, options: c });
}
async function xa(n) {
  const { databaseInstance: i, reader: u, sax: c, textDecoder: h, buffer: p, options: O } = n, { chunkSize: S, batchSize: D } = O, { done: H, value: j } = await u.read();
  if (H) {
    if (p.length > 0) {
      const Q = h.decode(p);
      c.parser.write(Q);
    }
    return c.parser.close(), await _s({
      databaseInstance: i,
      sax: c,
      batchSize: 0
    });
  }
  if (!j)
    return await xa(n);
  let L = new Uint8Array(p.length + j.length);
  for (L.set(p), L.set(j, p.length); L.length >= S; ) {
    const Q = L.slice(0, S);
    L = L.slice(S);
    const ae = h.decode(Q, { stream: !0 });
    c.parser.write(ae), await _s({
      databaseInstance: i,
      sax: c,
      batchSize: D
    });
  }
  return await xa({ ...n, buffer: L });
}
async function _s(n) {
  const { databaseInstance: i, sax: u, batchSize: c } = n;
  if (u.getSize() >= c) {
    const h = u.drainBatch(), p = Jl({
      currentBatch: h
    });
    await vf({
      databaseInstance: i,
      records: p
    });
  }
}
function yh(n) {
  return {
    addRecord: i,
    createRecord: h,
    updateRecord: u,
    deleteRecord: c,
    findRecordById: j,
    findRecordsByTagName: L,
    findChildRecords: ke,
    findChildRecordsByTagName: Ke,
    findChildRecordsWithinDepthAndGivenTagName: fe,
    instantiate: Q,
    ensureRelationship: O,
    ensurePrivateElement: S,
    findRootSCL: H,
    recordExists: p,
    findOneRecordByAttribute: de,
    findAllRecordsByAttribute: He,
    close: je,
    db: n
  };
  async function i(ne) {
    const te = { ...ne, id: crypto.randomUUID() };
    try {
      return await n.table(Ut).add(te), te;
    } catch (_e) {
      const F = {
        msg: "could not add record",
        db: n.name,
        newRecord: te,
        err: _e
      };
      throw console.error(F), new Error(JSON.stringify(F));
    }
  }
  async function u(ne) {
    try {
      if (await n.table(Ut).update(ne.id, ne) < 1) {
        const _e = { msg: "nothing has been updated", record: ne };
        throw console.error(_e), new Error(JSON.stringify(_e));
      }
    } catch (te) {
      console.error(te);
    }
  }
  async function c(ne) {
    try {
      if (ne.children)
        for (const te of ne.children) {
          const _e = await j(te.id);
          if (!_e) {
            console.warn({
              msg: "deleteRecord: child relationship found but not child record, continuing",
              child: te
            });
            continue;
          }
          await c(_e);
        }
      if (ne.parent?.id) {
        const te = await j(ne.parent.id);
        if (!te) throw new Error("parent relationship found but not parent record");
        await D(te, ne);
      }
      await n.table(Ut).delete(ne.id);
    } catch (te) {
      console.error(te);
    }
  }
  async function h(ne, te) {
    try {
      const _e = { ...ne, id: crypto.randomUUID() };
      return await n.table(Ut).add(_e), te && await O(te, _e), {
        ..._e,
        parent: te ? { id: te.id, tagName: te.tagName } : null
      };
    } catch (_e) {
      const F = {
        msg: "could not add record",
        db: n.name,
        table: ne.tagName,
        recordToCreate: ne,
        err: _e
      };
      throw console.error(F), new Error(JSON.stringify(F));
    }
  }
  async function p(ne) {
    return await n.table(Ut).where({ id: ne.id }).count() > 0;
  }
  async function O(ne, te) {
    const _e = ne.children?.some((Xe) => Xe.id === te.id), F = te.parent?.id === ne.id;
    _e || await n.table(Ut).update(ne.id, {
      children: [...ne.children, { id: te.id, tagName: te.tagName }]
    }), F || (te.parent = {
      id: ne.id,
      tagName: ne.tagName
    }, await n.table(Ut).update(te.id, { parent: te.parent }));
  }
  async function S(ne) {
    let _e = (await He("Private", {
      name: "type",
      value: "eIEC61850-6-100"
    })).find((F) => F.parent?.id === ne.id);
    return _e || (_e = await h({
      tagName: "Private",
      attributes: [{ name: "type", value: "eIEC61850-6-100" }],
      parent: null,
      namespace: null,
      value: "",
      children: []
    }), await O(ne, _e)), _e;
  }
  async function D(ne, te) {
    te.parent = null, await u(te), ne.children && (ne.children = ne.children.filter((_e) => _e.id !== te.id), await u(ne));
  }
  async function H() {
    const ne = await n.table(Ut).where({ tagName: "SCL" }).toArray();
    if (ne.length === 0) throw new Error("there is no SCL element");
    if (ne.length > 1)
      throw new Error("there are multiple SCL elements; there can be only one");
    const te = ne[0];
    if (te.parent)
      throw new Error("the SCL element has a parent; the SCL should be the root element");
    return te;
  }
  async function j(ne) {
    return await n.table(Ut).get(ne);
  }
  async function L(ne) {
    return await n.table(Ut).where({ tagName: ne }).toArray();
  }
  function Q(ne) {
    const te = ae(ne);
    if (!te)
      throw console.error('record does not have a "uuid" to move to "templateUUID"', ne), new Error('record does not have a "uuid" to move to "templateUUID"');
    ne.attributes?.push({ name: "templateUuid", value: te }), he(ne);
  }
  function ae(ne) {
    const te = ne.attributes?.find((_e) => _e.name === "uuid");
    if (te)
      return te.value;
  }
  function he(ne) {
    ne.attributes || (ne.attributes = []);
    const te = crypto.randomUUID(), _e = ne.attributes.findIndex((Xe) => Xe.name === "uuid");
    _e >= 0 ? ne.attributes[_e].value = te : ne.attributes.push({ name: "uuid", value: te });
  }
  async function de(ne, te) {
    return Tf(n, ne, te);
  }
  async function He(ne, te) {
    return Of(n, ne, te);
  }
  async function ke(ne) {
    return ne.children?.length ? await n.table(Ut).where({ "parent.id": ne.id }).toArray() : [];
  }
  async function Ke(ne, te) {
    return (await ke(ne)).filter((F) => te.includes(F.tagName));
  }
  async function fe(ne, te = qe, _e = []) {
    const F = [];
    let Xe = [ne];
    for (let st = 0; st < te; st++) {
      const Ne = [];
      for (const ze of Xe) {
        const $t = await Ke(ze, _e);
        $t.length !== 0 && (Ne.push(...$t), F.push(...$t));
      }
      Xe = [...Ne];
    }
    return F;
  }
  function je() {
    n.close();
  }
}
function mh(n, i) {
  return n.attributes?.find((u) => u.name === i);
}
function vh(n, i, u) {
  n.attributes || (n.attributes = []);
  const c = n.attributes?.findIndex((p) => p.name === i);
  c >= 0 ? n.attributes[c].value = u : n.attributes.push({ name: i, value: u });
}
async function Tf(n, i, u) {
  try {
    return await n.table(Ut).where({ tagName: i }).filter(
      (h) => !!h.attributes?.some((p) => p.name === u.name && p.value === u.value)
    ).first();
  } catch (c) {
    console.error({ msg: "could not find record by attribute", tagName: i, attr: u, err: c });
  }
}
async function Of(n, i, u) {
  try {
    return await n.table(Ut).where({ tagName: i }).filter(
      (h) => !!h.attributes?.some((p) => p.name === u.name && p.value === u.value)
    ).toArray();
  } catch (c) {
    console.error({ msg: "could not find record by attribute", tagName: i, attr: u, err: c });
  }
  return [];
}
var oo = { exports: {} }, Sf = oo.exports, ws;
function Pf() {
  return ws || (ws = 1, function(n, i) {
    (function(u, c) {
      n.exports = c();
    })(Sf, function() {
      var u = function(e, t) {
        return (u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
          r.__proto__ = o;
        } || function(r, o) {
          for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (r[a] = o[a]);
        })(e, t);
      }, c = function() {
        return (c = Object.assign || function(e) {
          for (var t, r = 1, o = arguments.length; r < o; r++) for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return e;
        }).apply(this, arguments);
      };
      function h(e, t, r) {
        for (var o, a = 0, s = t.length; a < s; a++) !o && a in t || ((o = o || Array.prototype.slice.call(t, 0, a))[a] = t[a]);
        return e.concat(o || Array.prototype.slice.call(t));
      }
      var p = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ul, O = Object.keys, S = Array.isArray;
      function D(e, t) {
        return typeof t != "object" || O(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || p.Promise || (p.Promise = Promise);
      var H = Object.getPrototypeOf, j = {}.hasOwnProperty;
      function L(e, t) {
        return j.call(e, t);
      }
      function Q(e, t) {
        typeof t == "function" && (t = t(H(e))), (typeof Reflect > "u" ? O : Reflect.ownKeys)(t).forEach(function(r) {
          he(e, r, t[r]);
        });
      }
      var ae = Object.defineProperty;
      function he(e, t, r, o) {
        ae(e, t, D(r && L(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function de(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), he(e.prototype, "constructor", e), { extend: Q.bind(null, e.prototype) };
        } };
      }
      var He = Object.getOwnPropertyDescriptor, ke = [].slice;
      function Ke(e, t, r) {
        return ke.call(e, t, r);
      }
      function qe(e, t) {
        return t(e);
      }
      function fe(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function je(e) {
        p.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function ne(e, t) {
        if (typeof t == "string" && L(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var r = [], o = 0, a = t.length; o < a; ++o) {
            var s = ne(e, t[o]);
            r.push(s);
          }
          return r;
        }
        var l = t.indexOf(".");
        if (l !== -1) {
          var f = e[t.substr(0, l)];
          return f == null ? void 0 : ne(f, t.substr(l + 1));
        }
      }
      function te(e, t, r) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          fe(typeof r != "string" && "length" in r);
          for (var o = 0, a = t.length; o < a; ++o) te(e, t[o], r[o]);
        } else {
          var s, l, f = t.indexOf(".");
          f !== -1 ? (s = t.substr(0, f), (l = t.substr(f + 1)) === "" ? r === void 0 ? S(e) && !isNaN(parseInt(s)) ? e.splice(s, 1) : delete e[s] : e[s] = r : te(f = !(f = e[s]) || !L(e, s) ? e[s] = {} : f, l, r)) : r === void 0 ? S(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function _e(e) {
        var t, r = {};
        for (t in e) L(e, t) && (r[t] = e[t]);
        return r;
      }
      var F = [].concat;
      function Xe(e) {
        return F.apply([], e);
      }
      var Ee = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Xe([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return p[e];
      }), st = new Set(Ee.map(function(e) {
        return p[e];
      })), Ne = null;
      function ze(e) {
        return Ne = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var o = Ne.get(r);
          if (o) return o;
          if (S(r)) {
            o = [], Ne.set(r, o);
            for (var a = 0, s = r.length; a < s; ++a) o.push(t(r[a]));
          } else if (st.has(r.constructor)) o = r;
          else {
            var l, f = H(r);
            for (l in o = f === Object.prototype ? {} : Object.create(f), Ne.set(r, o), r) L(r, l) && (o[l] = t(r[l]));
          }
          return o;
        }(e), Ne = null, e;
      }
      var $t = {}.toString;
      function At(e) {
        return $t.call(e).slice(8, -1);
      }
      var tt = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", we = typeof tt == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[tt]) && t.apply(e);
      } : function() {
        return null;
      };
      function Pe(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var ot = {};
      function Qe(e) {
        var t, r, o, a;
        if (arguments.length === 1) {
          if (S(e)) return e.slice();
          if (this === ot && typeof e == "string") return [e];
          if (a = we(e)) {
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
      var ut = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, be = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], at = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(be), gt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function bt(e, t) {
        this.name = e, this.message = t;
      }
      function vn(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(r) {
          return t[r].toString();
        }).filter(function(r, o, a) {
          return a.indexOf(r) === o;
        }).join(`
`);
      }
      function Gt(e, t, r, o) {
        this.failures = t, this.failedKeys = o, this.successCount = r, this.message = vn(e, t);
      }
      function lt(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(r) {
          return t[r];
        }), this.failuresByPos = t, this.message = vn(e, this.failures);
      }
      de(bt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), de(Gt).from(bt), de(lt).from(bt);
      var k = at.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), b = bt, N = at.reduce(function(e, t) {
        var r = t + "Error";
        function o(a, s) {
          this.name = r, a ? typeof a == "string" ? (this.message = "".concat(a).concat(s ? `
 ` + s : ""), this.inner = s || null) : typeof a == "object" && (this.message = "".concat(a.name, " ").concat(a.message), this.inner = a) : (this.message = gt[t] || r, this.inner = null);
        }
        return de(o).from(b), e[t] = o, e;
      }, {});
      N.Syntax = SyntaxError, N.Type = TypeError, N.Range = RangeError;
      var M = be.reduce(function(e, t) {
        return e[t + "Error"] = N[t], e;
      }, {}), Re = at.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = N[t]), e;
      }, {});
      function P() {
      }
      function R(e) {
        return e;
      }
      function Y(e, t) {
        return e == null || e === R ? t : function(r) {
          return t(e(r));
        };
      }
      function z(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function ee(e, t) {
        return e === P ? t : function() {
          var r = e.apply(this, arguments);
          r !== void 0 && (arguments[0] = r);
          var o = this.onsuccess, a = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var s = t.apply(this, arguments);
          return o && (this.onsuccess = this.onsuccess ? z(o, this.onsuccess) : o), a && (this.onerror = this.onerror ? z(a, this.onerror) : a), s !== void 0 ? s : r;
        };
      }
      function J(e, t) {
        return e === P ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? z(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? z(o, this.onerror) : o);
        };
      }
      function se(e, t) {
        return e === P ? t : function(r) {
          var o = e.apply(this, arguments);
          D(r, o);
          var a = this.onsuccess, s = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), a && (this.onsuccess = this.onsuccess ? z(a, this.onsuccess) : a), s && (this.onerror = this.onerror ? z(s, this.onerror) : s), o === void 0 ? r === void 0 ? void 0 : r : D(o, r);
        };
      }
      function ce(e, t) {
        return e === P ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function re(e, t) {
        return e === P ? t : function() {
          var r = e.apply(this, arguments);
          if (r && typeof r.then == "function") {
            for (var o = this, a = arguments.length, s = new Array(a); a--; ) s[a] = arguments[a];
            return r.then(function() {
              return t.apply(o, s);
            });
          }
          return t.apply(this, arguments);
        };
      }
      Re.ModifyError = Gt, Re.DexieError = bt, Re.BulkError = lt;
      var Z = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function ve(e) {
        Z = e;
      }
      var le = {}, ge = 100, Ee = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, H(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, H(t), e];
      }(), be = Ee[0], at = Ee[1], Ee = Ee[2], at = at && at.then, De = be && be.constructor, Fe = !!Ee, nt = function(e, t) {
        Yt.push([e, t]), dt && (queueMicrotask(So), dt = !1);
      }, ct = !0, dt = !0, rt = [], Dt = [], gn = R, We = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: P, pgp: !1, env: {}, finalize: P }, X = We, Yt = [], Nt = 0, On = [];
      function $(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = X;
        if (typeof e != "function") {
          if (e !== le) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && cr(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function r(o, a) {
          try {
            a(function(s) {
              if (o._state === null) {
                if (s === o) throw new TypeError("A promise cannot be resolved with itself.");
                var l = o._lib && zt();
                s && typeof s.then == "function" ? r(o, function(f, y) {
                  s instanceof $ ? s._then(f, y) : s.then(f, y);
                }) : (o._state = !0, o._value = s, ti(o)), l && Qt();
              }
            }, cr.bind(null, o));
          } catch (s) {
            cr(o, s);
          }
        }(this, e);
      }
      var ur = { get: function() {
        var e = X, t = An;
        function r(o, a) {
          var s = this, l = !e.global && (e !== X || t !== An), f = l && !Et(), y = new $(function(v, _) {
            lr(s, new ei(ri(o, e, l, f), ri(a, e, l, f), v, _, e));
          });
          return this._consoleTask && (y._consoleTask = this._consoleTask), y;
        }
        return r.prototype = le, r;
      }, set: function(e) {
        he(this, "then", e && e.prototype === le ? ur : { get: function() {
          return e;
        }, set: ur.set });
      } };
      function ei(e, t, r, o, a) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = r, this.reject = o, this.psd = a;
      }
      function cr(e, t) {
        var r, o;
        Dt.push(t), e._state === null && (r = e._lib && zt(), t = gn(t), e._state = !1, e._value = t, o = e, rt.some(function(a) {
          return a._value === o._value;
        }) || rt.push(o), ti(e), r && Qt());
      }
      function ti(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var r = 0, o = t.length; r < o; ++r) lr(e, t[r]);
        var a = e._PSD;
        --a.ref || a.finalize(), Nt === 0 && (++Nt, nt(function() {
          --Nt == 0 && fr();
        }, []));
      }
      function lr(e, t) {
        if (e._state !== null) {
          var r = e._state ? t.onFulfilled : t.onRejected;
          if (r === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++Nt, nt(Oo, [r, e, t]);
        } else e._listeners.push(t);
      }
      function Oo(e, t, r) {
        try {
          var o, a = t._value;
          !t._state && Dt.length && (Dt = []), o = Z && t._consoleTask ? t._consoleTask.run(function() {
            return e(a);
          }) : e(a), t._state || Dt.indexOf(a) !== -1 || function(s) {
            for (var l = rt.length; l; ) if (rt[--l]._value === s._value) return rt.splice(l, 1);
          }(t), r.resolve(o);
        } catch (s) {
          r.reject(s);
        } finally {
          --Nt == 0 && fr(), --r.psd.ref || r.psd.finalize();
        }
      }
      function So() {
        Rt(We, function() {
          zt() && Qt();
        });
      }
      function zt() {
        var e = ct;
        return dt = ct = !1, e;
      }
      function Qt() {
        var e, t, r;
        do
          for (; 0 < Yt.length; ) for (e = Yt, Yt = [], r = e.length, t = 0; t < r; ++t) {
            var o = e[t];
            o[0].apply(null, o[1]);
          }
        while (0 < Yt.length);
        dt = ct = !0;
      }
      function fr() {
        var e = rt;
        rt = [], e.forEach(function(o) {
          o._PSD.onunhandled.call(null, o._value, o);
        });
        for (var t = On.slice(0), r = t.length; r; ) t[--r]();
      }
      function Sn(e) {
        return new $(le, !1, e);
      }
      function Te(e, t) {
        var r = X;
        return function() {
          var o = zt(), a = X;
          try {
            return Tt(r, !0), e.apply(this, arguments);
          } catch (s) {
            t && t(s);
          } finally {
            Tt(a, !1), o && Qt();
          }
        };
      }
      Q($.prototype, { then: ur, _then: function(e, t) {
        lr(this, new ei(null, null, e, t, X));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, r = arguments[1];
        return typeof t == "function" ? this.then(null, function(o) {
          return (o instanceof t ? r : Sn)(o);
        }) : this.then(null, function(o) {
          return (o && o.name === t ? r : Sn)(o);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return $.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return $.resolve(e()).then(function() {
            return Sn(t);
          });
        });
      }, timeout: function(e, t) {
        var r = this;
        return e < 1 / 0 ? new $(function(o, a) {
          var s = setTimeout(function() {
            return a(new N.Timeout(t));
          }, e);
          r.then(o, a).finally(clearTimeout.bind(null, s));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && he($.prototype, Symbol.toStringTag, "Dexie.Promise"), We.env = ni(), Q($, { all: function() {
        var e = Qe.apply(null, arguments).map(Cn);
        return new $(function(t, r) {
          e.length === 0 && t([]);
          var o = e.length;
          e.forEach(function(a, s) {
            return $.resolve(a).then(function(l) {
              e[s] = l, --o || t(e);
            }, r);
          });
        });
      }, resolve: function(e) {
        return e instanceof $ ? e : e && typeof e.then == "function" ? new $(function(t, r) {
          e.then(t, r);
        }) : new $(le, !0, e);
      }, reject: Sn, race: function() {
        var e = Qe.apply(null, arguments).map(Cn);
        return new $(function(t, r) {
          e.map(function(o) {
            return $.resolve(o).then(t, r);
          });
        });
      }, PSD: { get: function() {
        return X;
      }, set: function(e) {
        return X = e;
      } }, totalEchoes: { get: function() {
        return An;
      } }, newPSD: xt, usePSD: Rt, scheduler: { get: function() {
        return nt;
      }, set: function(e) {
        nt = e;
      } }, rejectionMapper: { get: function() {
        return gn;
      }, set: function(e) {
        gn = e;
      } }, follow: function(e, t) {
        return new $(function(r, o) {
          return xt(function(a, s) {
            var l = X;
            l.unhandleds = [], l.onunhandled = s, l.finalize = z(function() {
              var f, y = this;
              f = function() {
                y.unhandleds.length === 0 ? a() : s(y.unhandleds[0]);
              }, On.push(function v() {
                f(), On.splice(On.indexOf(v), 1);
              }), ++Nt, nt(function() {
                --Nt == 0 && fr();
              }, []);
            }, l.finalize), e();
          }, t, r, o);
        });
      } }), De && (De.allSettled && he($, "allSettled", function() {
        var e = Qe.apply(null, arguments).map(Cn);
        return new $(function(t) {
          e.length === 0 && t([]);
          var r = e.length, o = new Array(r);
          e.forEach(function(a, s) {
            return $.resolve(a).then(function(l) {
              return o[s] = { status: "fulfilled", value: l };
            }, function(l) {
              return o[s] = { status: "rejected", reason: l };
            }).then(function() {
              return --r || t(o);
            });
          });
        });
      }), De.any && typeof AggregateError < "u" && he($, "any", function() {
        var e = Qe.apply(null, arguments).map(Cn);
        return new $(function(t, r) {
          e.length === 0 && r(new AggregateError([]));
          var o = e.length, a = new Array(o);
          e.forEach(function(s, l) {
            return $.resolve(s).then(function(f) {
              return t(f);
            }, function(f) {
              a[l] = f, --o || r(new AggregateError(a));
            });
          });
        });
      }), De.withResolvers && ($.withResolvers = De.withResolvers));
      var Be = { awaits: 0, echoes: 0, id: 0 }, Po = 0, Pn = [], kn = 0, An = 0, ko = 0;
      function xt(e, t, r, o) {
        var a = X, s = Object.create(a);
        return s.parent = a, s.ref = 0, s.global = !1, s.id = ++ko, We.env, s.env = Fe ? { Promise: $, PromiseProp: { value: $, configurable: !0, writable: !0 }, all: $.all, race: $.race, allSettled: $.allSettled, any: $.any, resolve: $.resolve, reject: $.reject } : {}, t && D(s, t), ++a.ref, s.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = Rt(s, e, r, o), s.ref === 0 && s.finalize(), o;
      }
      function Jt() {
        return Be.id || (Be.id = ++Po), ++Be.awaits, Be.echoes += ge, Be.id;
      }
      function Et() {
        return !!Be.awaits && (--Be.awaits == 0 && (Be.id = 0), Be.echoes = Be.awaits * ge, !0);
      }
      function Cn(e) {
        return Be.echoes && e && e.constructor === De ? (Jt(), e.then(function(t) {
          return Et(), t;
        }, function(t) {
          return Et(), Ae(t);
        })) : e;
      }
      function Ao() {
        var e = Pn[Pn.length - 1];
        Pn.pop(), Tt(e, !1);
      }
      function Tt(e, t) {
        var r, o = X;
        (t ? !Be.echoes || kn++ && e === X : !kn || --kn && e === X) || queueMicrotask(t ? (function(a) {
          ++An, Be.echoes && --Be.echoes != 0 || (Be.echoes = Be.awaits = Be.id = 0), Pn.push(X), Tt(a, !0);
        }).bind(null, e) : Ao), e !== X && (X = e, o === We && (We.env = ni()), Fe && (r = We.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(p, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function ni() {
        var e = p.Promise;
        return Fe ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(p, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Rt(e, t, r, o, a) {
        var s = X;
        try {
          return Tt(e, !0), t(r, o, a);
        } finally {
          Tt(s, !1);
        }
      }
      function ri(e, t, r, o) {
        return typeof e != "function" ? e : function() {
          var a = X;
          r && Jt(), Tt(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Tt(a, !1), o && queueMicrotask(Et);
          }
        };
      }
      function hr(e) {
        Promise === De && Be.echoes === 0 ? kn === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + at).indexOf("[native code]") === -1 && (Jt = Et = P);
      var Ae = $.reject, Kt = "￿", pt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", ii = "String expected.", Zt = [], In = "__dbnames", dr = "readonly", pr = "readwrite";
      function jt(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var oi = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Dn(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = ze(t))[e], t;
        };
      }
      function ai() {
        throw N.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function pe(e, t) {
        try {
          var r = si(e), o = si(t);
          if (r !== o) return r === "Array" ? 1 : o === "Array" ? -1 : r === "binary" ? 1 : o === "binary" ? -1 : r === "string" ? 1 : o === "string" ? -1 : r === "Date" ? 1 : o !== "Date" ? NaN : -1;
          switch (r) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return function(a, s) {
                for (var l = a.length, f = s.length, y = l < f ? l : f, v = 0; v < y; ++v) if (a[v] !== s[v]) return a[v] < s[v] ? -1 : 1;
                return l === f ? 0 : l < f ? -1 : 1;
              }(ui(e), ui(t));
            case "Array":
              return function(a, s) {
                for (var l = a.length, f = s.length, y = l < f ? l : f, v = 0; v < y; ++v) {
                  var _ = pe(a[v], s[v]);
                  if (_ !== 0) return _;
                }
                return l === f ? 0 : l < f ? -1 : 1;
              }(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function si(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = At(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function ui(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function Nn(e, t, r) {
        var o = e.schema.yProps;
        return o ? (t && 0 < r.numFailures && (t = t.filter(function(a, s) {
          return !r.failures[s];
        })), Promise.all(o.map(function(a) {
          return a = a.updatesTable, t ? e.db.table(a).where("k").anyOf(t).delete() : e.db.table(a).clear();
        })).then(function() {
          return r;
        })) : r;
      }
      var ci = (xe.prototype._trans = function(e, t, r) {
        var o = this._tx || X.trans, a = this.name, s = Z && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function l(v, _, d) {
          if (!d.schema[a]) throw new N.NotFound("Table " + a + " not part of transaction");
          return t(d.idbtrans, d);
        }
        var f = zt();
        try {
          var y = o && o.db._novip === this.db._novip ? o === X.trans ? o._promise(e, l, r) : xt(function() {
            return o._promise(e, l, r);
          }, { trans: o, transless: X.transless || X }) : function v(_, d, E, m) {
            if (_.idbdb && (_._state.openComplete || X.letThrough || _._vip)) {
              var g = _._createTransaction(d, E, _._dbSchema);
              try {
                g.create(), _._state.PR1398_maxLoop = 3;
              } catch (x) {
                return x.name === k.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                  return v(_, d, E, m);
                })) : Ae(x);
              }
              return g._promise(d, function(x, w) {
                return xt(function() {
                  return X.trans = g, m(x, w, g);
                });
              }).then(function(x) {
                if (d === "readwrite") try {
                  g.idbtrans.commit();
                } catch {
                }
                return d === "readonly" ? x : g._completion.then(function() {
                  return x;
                });
              });
            }
            if (_._state.openComplete) return Ae(new N.DatabaseClosed(_._state.dbOpenError));
            if (!_._state.isBeingOpened) {
              if (!_._state.autoOpen) return Ae(new N.DatabaseClosed());
              _.open().catch(P);
            }
            return _._state.dbReadyPromise.then(function() {
              return v(_, d, E, m);
            });
          }(this.db, e, [this.name], l);
          return s && (y._consoleTask = s, y = y.catch(function(v) {
            return console.trace(v), Ae(v);
          })), y;
        } finally {
          f && Qt();
        }
      }, xe.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? Ae(new N.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(a) {
            return r.hook.reading.fire(a);
          });
        }).then(t);
      }, xe.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (S(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = O(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var r = this.schema.indexes.concat(this.schema.primKey).filter(function(f) {
          if (f.compound && t.every(function(v) {
            return 0 <= f.keyPath.indexOf(v);
          })) {
            for (var y = 0; y < t.length; ++y) if (t.indexOf(f.keyPath[y]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(f, y) {
          return f.keyPath.length - y.keyPath.length;
        })[0];
        if (r && this.db._maxKey !== Kt) {
          var s = r.keyPath.slice(0, t.length);
          return this.where(s).equals(s.map(function(y) {
            return e[y];
          }));
        }
        !r && Z && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var o = this.schema.idxByName;
        function a(f, y) {
          return pe(f, y) === 0;
        }
        var l = t.reduce(function(d, y) {
          var v = d[0], _ = d[1], d = o[y], E = e[y];
          return [v || d, v || !d ? jt(_, d && d.multi ? function(m) {
            return m = ne(m, y), S(m) && m.some(function(g) {
              return a(E, g);
            });
          } : function(m) {
            return a(E, ne(m, y));
          }) : _];
        }, [null, null]), s = l[0], l = l[1];
        return s ? this.where(s.name).equals(e[s.keyPath]).filter(l) : r ? this.filter(l) : this.where(t).equals("");
      }, xe.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, xe.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, xe.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, xe.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, xe.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, xe.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, xe.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, xe.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, S(e) ? "[".concat(e.join("+"), "]") : e));
      }, xe.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, xe.prototype.mapToClass = function(e) {
        var t, r = this.db, o = this.name;
        function a() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof ai && (function(y, v) {
          if (typeof v != "function" && v !== null) throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
          function _() {
            this.constructor = y;
          }
          u(y, v), y.prototype = v === null ? Object.create(v) : (_.prototype = v.prototype, new _());
        }(a, t = e), Object.defineProperty(a.prototype, "db", { get: function() {
          return r;
        }, enumerable: !1, configurable: !0 }), a.prototype.table = function() {
          return o;
        }, e = a);
        for (var s = /* @__PURE__ */ new Set(), l = e.prototype; l; l = H(l)) Object.getOwnPropertyNames(l).forEach(function(y) {
          return s.add(y);
        });
        function f(y) {
          if (!y) return y;
          var v, _ = Object.create(e.prototype);
          for (v in y) if (!s.has(v)) try {
            _[v] = y[v];
          } catch {
          }
          return _;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = f, this.hook("reading", f), e;
      }, xe.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          D(this, e);
        });
      }, xe.prototype.add = function(e, t) {
        var r = this, o = this.schema.primKey, a = o.auto, s = o.keyPath, l = e;
        return s && a && (l = Dn(s)(e)), this._trans("readwrite", function(f) {
          return r.core.mutate({ trans: f, type: "add", keys: t != null ? [t] : null, values: [l] });
        }).then(function(f) {
          return f.numFailures ? $.reject(f.failures[0]) : f.lastResult;
        }).then(function(f) {
          if (s) try {
            te(e, s, f);
          } catch {
          }
          return f;
        });
      }, xe.prototype.update = function(e, t) {
        return typeof e != "object" || S(e) ? this.where(":id").equals(e).modify(t) : (e = ne(e, this.schema.primKey.keyPath), e === void 0 ? Ae(new N.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, xe.prototype.put = function(e, t) {
        var r = this, o = this.schema.primKey, a = o.auto, s = o.keyPath, l = e;
        return s && a && (l = Dn(s)(e)), this._trans("readwrite", function(f) {
          return r.core.mutate({ trans: f, type: "put", values: [l], keys: t != null ? [t] : null });
        }).then(function(f) {
          return f.numFailures ? $.reject(f.failures[0]) : f.lastResult;
        }).then(function(f) {
          if (s) try {
            te(e, s, f);
          } catch {
          }
          return f;
        });
      }, xe.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: [e] }).then(function(o) {
            return Nn(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? $.reject(o.failures[0]) : void 0;
          });
        });
      }, xe.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: oi }).then(function(r) {
            return Nn(e, null, r);
          });
        }).then(function(t) {
          return t.numFailures ? $.reject(t.failures[0]) : void 0;
        });
      }, xe.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(r) {
          return t.core.getMany({ keys: e, trans: r }).then(function(o) {
            return o.map(function(a) {
              return t.hook.reading.fire(a);
            });
          });
        });
      }, xe.prototype.bulkAdd = function(e, t, r) {
        var o = this, a = Array.isArray(t) ? t : void 0, s = (r = r || (a ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var v = o.schema.primKey, f = v.auto, v = v.keyPath;
          if (v && a) throw new N.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new N.InvalidArgument("Arguments objects and keys must have the same length");
          var y = e.length, v = v && f ? e.map(Dn(v)) : e;
          return o.core.mutate({ trans: l, type: "add", keys: a, values: v, wantResults: s }).then(function(g) {
            var d = g.numFailures, E = g.results, m = g.lastResult, g = g.failures;
            if (d === 0) return s ? E : m;
            throw new lt("".concat(o.name, ".bulkAdd(): ").concat(d, " of ").concat(y, " operations failed"), g);
          });
        });
      }, xe.prototype.bulkPut = function(e, t, r) {
        var o = this, a = Array.isArray(t) ? t : void 0, s = (r = r || (a ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var v = o.schema.primKey, f = v.auto, v = v.keyPath;
          if (v && a) throw new N.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new N.InvalidArgument("Arguments objects and keys must have the same length");
          var y = e.length, v = v && f ? e.map(Dn(v)) : e;
          return o.core.mutate({ trans: l, type: "put", keys: a, values: v, wantResults: s }).then(function(g) {
            var d = g.numFailures, E = g.results, m = g.lastResult, g = g.failures;
            if (d === 0) return s ? E : m;
            throw new lt("".concat(o.name, ".bulkPut(): ").concat(d, " of ").concat(y, " operations failed"), g);
          });
        });
      }, xe.prototype.bulkUpdate = function(e) {
        var t = this, r = this.core, o = e.map(function(l) {
          return l.key;
        }), a = e.map(function(l) {
          return l.changes;
        }), s = [];
        return this._trans("readwrite", function(l) {
          return r.getMany({ trans: l, keys: o, cache: "clone" }).then(function(f) {
            var y = [], v = [];
            e.forEach(function(d, E) {
              var m = d.key, g = d.changes, x = f[E];
              if (x) {
                for (var w = 0, T = Object.keys(g); w < T.length; w++) {
                  var A = T[w], C = g[A];
                  if (A === t.schema.primKey.keyPath) {
                    if (pe(C, m) !== 0) throw new N.Constraint("Cannot update primary key in bulkUpdate()");
                  } else te(x, A, C);
                }
                s.push(E), y.push(m), v.push(x);
              }
            });
            var _ = y.length;
            return r.mutate({ trans: l, type: "put", keys: y, values: v, updates: { keys: o, changeSpecs: a } }).then(function(d) {
              var E = d.numFailures, m = d.failures;
              if (E === 0) return _;
              for (var g = 0, x = Object.keys(m); g < x.length; g++) {
                var w, T = x[g], A = s[Number(T)];
                A != null && (w = m[T], delete m[T], m[A] = w);
              }
              throw new lt("".concat(t.name, ".bulkUpdate(): ").concat(E, " of ").concat(_, " operations failed"), m);
            });
          });
        });
      }, xe.prototype.bulkDelete = function(e) {
        var t = this, r = e.length;
        return this._trans("readwrite", function(o) {
          return t.core.mutate({ trans: o, type: "delete", keys: e }).then(function(a) {
            return Nn(t, e, a);
          });
        }).then(function(l) {
          var a = l.numFailures, s = l.lastResult, l = l.failures;
          if (a === 0) return s;
          throw new lt("".concat(t.name, ".bulkDelete(): ").concat(a, " of ").concat(r, " operations failed"), l);
        });
      }, xe);
      function xe() {
      }
      function sn(e) {
        function t(l, f) {
          if (f) {
            for (var y = arguments.length, v = new Array(y - 1); --y; ) v[y - 1] = arguments[y];
            return r[l].subscribe.apply(null, v), e;
          }
          if (typeof l == "string") return r[l];
        }
        var r = {};
        t.addEventType = s;
        for (var o = 1, a = arguments.length; o < a; ++o) s(arguments[o]);
        return t;
        function s(l, f, y) {
          if (typeof l != "object") {
            var v;
            f = f || ce;
            var _ = { subscribers: [], fire: y = y || P, subscribe: function(d) {
              _.subscribers.indexOf(d) === -1 && (_.subscribers.push(d), _.fire = f(_.fire, d));
            }, unsubscribe: function(d) {
              _.subscribers = _.subscribers.filter(function(E) {
                return E !== d;
              }), _.fire = _.subscribers.reduce(f, y);
            } };
            return r[l] = t[l] = _;
          }
          O(v = l).forEach(function(d) {
            var E = v[d];
            if (S(E)) s(d, v[d][0], v[d][1]);
            else {
              if (E !== "asap") throw new N.InvalidArgument("Invalid event config");
              var m = s(d, R, function() {
                for (var g = arguments.length, x = new Array(g); g--; ) x[g] = arguments[g];
                m.subscribers.forEach(function(w) {
                  je(function() {
                    w.apply(null, x);
                  });
                });
              });
            }
          });
        }
      }
      function un(e, t) {
        return de(t).from({ prototype: e }), t;
      }
      function en(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function yr(e, t) {
        e.filter = jt(e.filter, t);
      }
      function mr(e, t, r) {
        var o = e.replayFilter;
        e.replayFilter = o ? function() {
          return jt(o(), t());
        } : t, e.justLimit = r && !o;
      }
      function Rn(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var r = t.getIndexByKeyPath(e.index);
        if (!r) throw new N.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return r;
      }
      function li(e, t, r) {
        var o = Rn(e, t.schema);
        return t.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: o, range: e.range } });
      }
      function Kn(e, t, r, o) {
        var a = e.replayFilter ? jt(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var s = {}, l = function(f, y, v) {
            var _, d;
            a && !a(y, v, function(E) {
              return y.stop(E);
            }, function(E) {
              return y.fail(E);
            }) || ((d = "" + (_ = y.primaryKey)) == "[object ArrayBuffer]" && (d = "" + new Uint8Array(_)), L(s, d) || (s[d] = !0, t(f, y, v)));
          };
          return Promise.all([e.or._iterate(l, r), fi(li(e, o, r), e.algorithm, l, !e.keysOnly && e.valueMapper)]);
        }
        return fi(li(e, o, r), jt(e.algorithm, a), t, !e.keysOnly && e.valueMapper);
      }
      function fi(e, t, r, o) {
        var a = Te(o ? function(s, l, f) {
          return r(o(s), l, f);
        } : r);
        return e.then(function(s) {
          if (s) return s.start(function() {
            var l = function() {
              return s.continue();
            };
            t && !t(s, function(f) {
              return l = f;
            }, function(f) {
              s.stop(f), l = P;
            }, function(f) {
              s.fail(f), l = P;
            }) || a(s.value, s, function(f) {
              return l = f;
            }), l();
          });
        });
      }
      var cn = (hi.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var r = t.add;
          if (S(r)) return h(h([], S(e) ? e : [], !0), r).sort();
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
          if (S(o)) return S(e) ? e.filter(function(a) {
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
      }, hi);
      function hi(e) {
        this["@@propmod"] = e;
      }
      var Co = (me.prototype._read = function(e, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, Ae.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, me.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, Ae.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, me.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = jt(t.algorithm, e);
      }, me.prototype._iterate = function(e, t) {
        return Kn(this._ctx, e, t, this._ctx.table.core);
      }, me.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && D(r, e), t._ctx = r, t;
      }, me.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, me.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(r) {
          return Kn(t, e, r, t.table.core);
        });
      }, me.prototype.count = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx, a = o.table.core;
          if (en(o, !0)) return a.count({ trans: r, query: { index: Rn(o, a.schema), range: o.range } }).then(function(l) {
            return Math.min(l, o.limit);
          });
          var s = 0;
          return Kn(o, function() {
            return ++s, !1;
          }, r, a).then(function() {
            return s;
          });
        }).then(e);
      }, me.prototype.sortBy = function(e, t) {
        var r = e.split(".").reverse(), o = r[0], a = r.length - 1;
        function s(y, v) {
          return v ? s(y[r[v]], v - 1) : y[o];
        }
        var l = this._ctx.dir === "next" ? 1 : -1;
        function f(y, v) {
          return pe(s(y, a), s(v, a)) * l;
        }
        return this.toArray(function(y) {
          return y.sort(f);
        }).then(t);
      }, me.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx;
          if (o.dir === "next" && en(o, !0) && 0 < o.limit) {
            var a = o.valueMapper, s = Rn(o, o.table.core.schema);
            return o.table.core.query({ trans: r, limit: o.limit, values: !0, query: { index: s, range: o.range } }).then(function(f) {
              return f = f.result, a ? f.map(a) : f;
            });
          }
          var l = [];
          return Kn(o, function(f) {
            return l.push(f);
          }, r, o.table.core).then(function() {
            return l;
          });
        }, e);
      }, me.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, en(t) ? mr(t, function() {
          var r = e;
          return function(o, a) {
            return r === 0 || (r === 1 ? --r : a(function() {
              o.advance(r), r = 0;
            }), !1);
          };
        }) : mr(t, function() {
          var r = e;
          return function() {
            return --r < 0;
          };
        })), this;
      }, me.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), mr(this._ctx, function() {
          var t = e;
          return function(r, o, a) {
            return --t <= 0 && o(a), 0 <= t;
          };
        }, !0), this;
      }, me.prototype.until = function(e, t) {
        return yr(this._ctx, function(r, o, a) {
          return !e(r.value) || (o(a), t);
        }), this;
      }, me.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, me.prototype.last = function(e) {
        return this.reverse().first(e);
      }, me.prototype.filter = function(e) {
        var t;
        return yr(this._ctx, function(r) {
          return e(r.value);
        }), (t = this._ctx).isMatch = jt(t.isMatch, e), this;
      }, me.prototype.and = function(e) {
        return this.filter(e);
      }, me.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, me.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, me.prototype.desc = function() {
        return this.reverse();
      }, me.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.key, o);
        });
      }, me.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, me.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.primaryKey, o);
        });
      }, me.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(o, a) {
          r.push(a.key);
        }).then(function() {
          return r;
        }).then(e);
      }, me.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && en(t, !0) && 0 < t.limit) return this._read(function(o) {
          var a = Rn(t, t.table.core.schema);
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
      }, me.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, me.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, me.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, me.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return yr(this._ctx, function(a) {
          var o = a.primaryKey.toString(), a = L(t, o);
          return t[o] = !0, !a;
        }), this;
      }, me.prototype.modify = function(e) {
        var t = this, r = this._ctx;
        return this._write(function(o) {
          var a, s, l;
          l = typeof e == "function" ? e : (a = O(e), s = a.length, function(T) {
            for (var A = !1, C = 0; C < s; ++C) {
              var I = a[C], K = e[I], U = ne(T, I);
              K instanceof cn ? (te(T, I, K.execute(U)), A = !0) : U !== K && (te(T, I, K), A = !0);
            }
            return A;
          });
          var f = r.table.core, d = f.schema.primaryKey, y = d.outbound, v = d.extractKey, _ = 200, d = t.db._options.modifyChunkSize;
          d && (_ = typeof d == "object" ? d[f.name] || d["*"] || 200 : d);
          function E(T, I) {
            var C = I.failures, I = I.numFailures;
            g += T - I;
            for (var K = 0, U = O(C); K < U.length; K++) {
              var B = U[K];
              m.push(C[B]);
            }
          }
          var m = [], g = 0, x = [], w = e === di;
          return t.clone().primaryKeys().then(function(T) {
            function A(I) {
              var K = Math.min(_, T.length - I), U = T.slice(I, I + K);
              return (w ? Promise.resolve([]) : f.getMany({ trans: o, keys: U, cache: "immutable" })).then(function(B) {
                var q = [], W = [], V = y ? [] : null, G = w ? U : [];
                if (!w) for (var ue = 0; ue < K; ++ue) {
                  var ye = B[ue], oe = { value: ze(ye), primKey: T[I + ue] };
                  l.call(oe, oe.value, oe) !== !1 && (oe.value == null ? G.push(T[I + ue]) : y || pe(v(ye), v(oe.value)) === 0 ? (W.push(oe.value), y && V.push(T[I + ue])) : (G.push(T[I + ue]), q.push(oe.value)));
                }
                return Promise.resolve(0 < q.length && f.mutate({ trans: o, type: "add", values: q }).then(function(Se) {
                  for (var ie in Se.failures) G.splice(parseInt(ie), 1);
                  E(q.length, Se);
                })).then(function() {
                  return (0 < W.length || C && typeof e == "object") && f.mutate({ trans: o, type: "put", keys: V, values: W, criteria: C, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < I }).then(function(Se) {
                    return E(W.length, Se);
                  });
                }).then(function() {
                  return (0 < G.length || C && w) && f.mutate({ trans: o, type: "delete", keys: G, criteria: C, isAdditionalChunk: 0 < I }).then(function(Se) {
                    return Nn(r.table, G, Se);
                  }).then(function(Se) {
                    return E(G.length, Se);
                  });
                }).then(function() {
                  return T.length > I + K && A(I + _);
                });
              });
            }
            var C = en(r) && r.limit === 1 / 0 && (typeof e != "function" || w) && { index: r.index, range: r.range };
            return A(0).then(function() {
              if (0 < m.length) throw new Gt("Error modifying one or more objects", m, g, x);
              return T.length;
            });
          });
        });
      }, me.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !en(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(di) : this._write(function(r) {
          var o = e.table.core.schema.primaryKey, a = t;
          return e.table.core.count({ trans: r, query: { index: o, range: a } }).then(function(s) {
            return e.table.core.mutate({ trans: r, type: "deleteRange", range: a }).then(function(y) {
              var f = y.failures, y = y.numFailures;
              if (y) throw new Gt("Could not delete some values", Object.keys(f).map(function(v) {
                return f[v];
              }), s - y);
              return s - y;
            });
          });
        });
      }, me);
      function me() {
      }
      var di = function(e, t) {
        return t.value = null;
      };
      function Io(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function Do(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function Ze(e, t, r) {
        return e = e instanceof yi ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function tn(e) {
        return new e.Collection(e, function() {
          return pi("");
        }).limit(0);
      }
      function jn(e, t, r, o) {
        var a, s, l, f, y, v, _, d = r.length;
        if (!r.every(function(g) {
          return typeof g == "string";
        })) return Ze(e, ii);
        function E(g) {
          a = g === "next" ? function(w) {
            return w.toUpperCase();
          } : function(w) {
            return w.toLowerCase();
          }, s = g === "next" ? function(w) {
            return w.toLowerCase();
          } : function(w) {
            return w.toUpperCase();
          }, l = g === "next" ? Io : Do;
          var x = r.map(function(w) {
            return { lower: s(w), upper: a(w) };
          }).sort(function(w, T) {
            return l(w.lower, T.lower);
          });
          f = x.map(function(w) {
            return w.upper;
          }), y = x.map(function(w) {
            return w.lower;
          }), _ = (v = g) === "next" ? "" : o;
        }
        E("next"), e = new e.Collection(e, function() {
          return Ot(f[0], y[d - 1] + o);
        }), e._ondirectionchange = function(g) {
          E(g);
        };
        var m = 0;
        return e._addAlgorithm(function(g, x, w) {
          var T = g.key;
          if (typeof T != "string") return !1;
          var A = s(T);
          if (t(A, y, m)) return !0;
          for (var C = null, I = m; I < d; ++I) {
            var K = function(U, B, q, W, V, G) {
              for (var ue = Math.min(U.length, W.length), ye = -1, oe = 0; oe < ue; ++oe) {
                var Se = B[oe];
                if (Se !== W[oe]) return V(U[oe], q[oe]) < 0 ? U.substr(0, oe) + q[oe] + q.substr(oe + 1) : V(U[oe], W[oe]) < 0 ? U.substr(0, oe) + W[oe] + q.substr(oe + 1) : 0 <= ye ? U.substr(0, ye) + B[ye] + q.substr(ye + 1) : null;
                V(U[oe], Se) < 0 && (ye = oe);
              }
              return ue < W.length && G === "next" ? U + q.substr(U.length) : ue < U.length && G === "prev" ? U.substr(0, q.length) : ye < 0 ? null : U.substr(0, ye) + W[ye] + q.substr(ye + 1);
            }(T, A, f[I], y[I], l, v);
            K === null && C === null ? m = I + 1 : (C === null || 0 < l(C, K)) && (C = K);
          }
          return x(C !== null ? function() {
            g.continue(C + _);
          } : w), !1;
        }), e;
      }
      function Ot(e, t, r, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: o };
      }
      function pi(e) {
        return { type: 1, lower: e, upper: e };
      }
      var yi = (Object.defineProperty(Me.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Me.prototype.between = function(e, t, r, o) {
        r = r !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || o) && (!r || !o) ? tn(this) : new this.Collection(this, function() {
            return Ot(e, t, !r, !o);
          });
        } catch {
          return Ze(this, pt);
        }
      }, Me.prototype.equals = function(e) {
        return e == null ? Ze(this, pt) : new this.Collection(this, function() {
          return pi(e);
        });
      }, Me.prototype.above = function(e) {
        return e == null ? Ze(this, pt) : new this.Collection(this, function() {
          return Ot(e, void 0, !0);
        });
      }, Me.prototype.aboveOrEqual = function(e) {
        return e == null ? Ze(this, pt) : new this.Collection(this, function() {
          return Ot(e, void 0, !1);
        });
      }, Me.prototype.below = function(e) {
        return e == null ? Ze(this, pt) : new this.Collection(this, function() {
          return Ot(void 0, e, !1, !0);
        });
      }, Me.prototype.belowOrEqual = function(e) {
        return e == null ? Ze(this, pt) : new this.Collection(this, function() {
          return Ot(void 0, e);
        });
      }, Me.prototype.startsWith = function(e) {
        return typeof e != "string" ? Ze(this, ii) : this.between(e, e + Kt, !0, !0);
      }, Me.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : jn(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], Kt);
      }, Me.prototype.equalsIgnoreCase = function(e) {
        return jn(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, Me.prototype.anyOfIgnoreCase = function() {
        var e = Qe.apply(ot, arguments);
        return e.length === 0 ? tn(this) : jn(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, Me.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = Qe.apply(ot, arguments);
        return e.length === 0 ? tn(this) : jn(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, Kt);
      }, Me.prototype.anyOf = function() {
        var e = this, t = Qe.apply(ot, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return Ze(this, pt);
        }
        if (t.length === 0) return tn(this);
        var o = new this.Collection(this, function() {
          return Ot(t[0], t[t.length - 1]);
        });
        o._ondirectionchange = function(s) {
          r = s === "next" ? e._ascending : e._descending, t.sort(r);
        };
        var a = 0;
        return o._addAlgorithm(function(s, l, f) {
          for (var y = s.key; 0 < r(y, t[a]); ) if (++a === t.length) return l(f), !1;
          return r(y, t[a]) === 0 || (l(function() {
            s.continue(t[a]);
          }), !1);
        }), o;
      }, Me.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Me.prototype.noneOf = function() {
        var e = Qe.apply(ot, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return Ze(this, pt);
        }
        var t = e.reduce(function(r, o) {
          return r ? r.concat([[r[r.length - 1][1], o]]) : [[-1 / 0, o]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, Me.prototype.inAnyRange = function(T, t) {
        var r = this, o = this._cmp, a = this._ascending, s = this._descending, l = this._min, f = this._max;
        if (T.length === 0) return tn(this);
        if (!T.every(function(A) {
          return A[0] !== void 0 && A[1] !== void 0 && a(A[0], A[1]) <= 0;
        })) return Ze(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", N.InvalidArgument);
        var y = !t || t.includeLowers !== !1, v = t && t.includeUppers === !0, _, d = a;
        function E(A, C) {
          return d(A[0], C[0]);
        }
        try {
          (_ = T.reduce(function(A, C) {
            for (var I = 0, K = A.length; I < K; ++I) {
              var U = A[I];
              if (o(C[0], U[1]) < 0 && 0 < o(C[1], U[0])) {
                U[0] = l(U[0], C[0]), U[1] = f(U[1], C[1]);
                break;
              }
            }
            return I === K && A.push(C), A;
          }, [])).sort(E);
        } catch {
          return Ze(this, pt);
        }
        var m = 0, g = v ? function(A) {
          return 0 < a(A, _[m][1]);
        } : function(A) {
          return 0 <= a(A, _[m][1]);
        }, x = y ? function(A) {
          return 0 < s(A, _[m][0]);
        } : function(A) {
          return 0 <= s(A, _[m][0]);
        }, w = g, T = new this.Collection(this, function() {
          return Ot(_[0][0], _[_.length - 1][1], !y, !v);
        });
        return T._ondirectionchange = function(A) {
          d = A === "next" ? (w = g, a) : (w = x, s), _.sort(E);
        }, T._addAlgorithm(function(A, C, I) {
          for (var K, U = A.key; w(U); ) if (++m === _.length) return C(I), !1;
          return !g(K = U) && !x(K) || (r._cmp(U, _[m][1]) === 0 || r._cmp(U, _[m][0]) === 0 || C(function() {
            d === a ? A.continue(_[m][0]) : A.continue(_[m][1]);
          }), !1);
        }), T;
      }, Me.prototype.startsWithAnyOf = function() {
        var e = Qe.apply(ot, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? tn(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + Kt];
        })) : Ze(this, "startsWithAnyOf() only works with strings");
      }, Me);
      function Me() {
      }
      function ft(e) {
        return Te(function(t) {
          return ln(t), e(t.target.error), !1;
        });
      }
      function ln(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var fn = "storagemutated", vr = "x-storagemutated-1", St = sn(null, fn), No = (ht.prototype._lock = function() {
        return fe(!X.global), ++this._reculock, this._reculock !== 1 || X.global || (X.lockOwnerFor = this), this;
      }, ht.prototype._unlock = function() {
        if (fe(!X.global), --this._reculock == 0) for (X.global || (X.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Rt(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, ht.prototype._locked = function() {
        return this._reculock && X.lockOwnerFor !== this;
      }, ht.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var r = this.db.idbdb, o = this.db._state.dbOpenError;
        if (fe(!this.idbtrans), !e && !r) switch (o && o.name) {
          case "DatabaseClosedError":
            throw new N.DatabaseClosed(o);
          case "MissingAPIError":
            throw new N.MissingAPI(o.message, o);
          default:
            throw new N.OpenFailed(o);
        }
        if (!this.active) throw new N.TransactionInactive();
        return fe(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Te(function(a) {
          ln(a), t._reject(e.error);
        }), e.onabort = Te(function(a) {
          ln(a), t.active && t._reject(new N.Abort(e.error)), t.active = !1, t.on("abort").fire(a);
        }), e.oncomplete = Te(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && St.storagemutated.fire(e.mutatedParts);
        }), this;
      }, ht.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Ae(new N.ReadOnly("Transaction is readonly"));
        if (!this.active) return Ae(new N.TransactionInactive());
        if (this._locked()) return new $(function(s, l) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, r).then(s, l);
          }, X]);
        });
        if (r) return xt(function() {
          var s = new $(function(l, f) {
            o._lock();
            var y = t(l, f, o);
            y && y.then && y.then(l, f);
          });
          return s.finally(function() {
            return o._unlock();
          }), s._lib = !0, s;
        });
        var a = new $(function(s, l) {
          var f = t(s, l, o);
          f && f.then && f.then(s, l);
        });
        return a._lib = !0, a;
      }, ht.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, ht.prototype.waitFor = function(e) {
        var t, r = this._root(), o = $.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return o;
        }) : (r._waitingFor = o, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function s() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (t.get(-1 / 0).onsuccess = s);
        }());
        var a = r._waitingFor;
        return new $(function(s, l) {
          o.then(function(f) {
            return r._waitingQueue.push(Te(s.bind(null, f)));
          }, function(f) {
            return r._waitingQueue.push(Te(l.bind(null, f)));
          }).finally(function() {
            r._waitingFor === a && (r._waitingFor = null);
          });
        });
      }, ht.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new N.Abort()));
      }, ht.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (L(t, e)) return t[e];
        var r = this.schema[e];
        if (!r) throw new N.NotFound("Table " + e + " not part of transaction");
        return r = new this.db.Table(e, r, this), r.core = this.db.core.table(e), t[e] = r;
      }, ht);
      function ht() {
      }
      function gr(e, t, r, o, a, s, l, f) {
        return { name: e, keyPath: t, unique: r, multi: o, auto: a, compound: s, src: (r && !l ? "&" : "") + (o ? "*" : "") + (a ? "++" : "") + mi(t), type: f };
      }
      function mi(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function br(e, t, r) {
        return { name: e, primKey: t, indexes: r, mappedClass: null, idxByName: (o = function(a) {
          return [a.name, a];
        }, r.reduce(function(a, s, l) {
          return l = o(s, l), l && (a[l[0]] = l[1]), a;
        }, {})) };
        var o;
      }
      var hn = function(e) {
        try {
          return e.only([[]]), hn = function() {
            return [[]];
          }, [[]];
        } catch {
          return hn = function() {
            return Kt;
          }, Kt;
        }
      };
      function _r(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(r) {
          return r[t];
        } : function(r) {
          return ne(r, t);
        } : function(r) {
          return ne(r, e);
        };
        var t;
      }
      function vi(e) {
        return [].slice.call(e);
      }
      var Ro = 0;
      function dn(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Ko(e, t, y) {
        function o(w) {
          if (w.type === 3) return null;
          if (w.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var m = w.lower, g = w.upper, x = w.lowerOpen, w = w.upperOpen;
          return m === void 0 ? g === void 0 ? null : t.upperBound(g, !!w) : g === void 0 ? t.lowerBound(m, !!x) : t.bound(m, g, !!x, !!w);
        }
        function a(E) {
          var m, g = E.name;
          return { name: g, schema: E, mutate: function(x) {
            var w = x.trans, T = x.type, A = x.keys, C = x.values, I = x.range;
            return new Promise(function(K, U) {
              K = Te(K);
              var B = w.objectStore(g), q = B.keyPath == null, W = T === "put" || T === "add";
              if (!W && T !== "delete" && T !== "deleteRange") throw new Error("Invalid operation type: " + T);
              var V, G = (A || C || { length: 1 }).length;
              if (A && C && A.length !== C.length) throw new Error("Given keys array must have same length as given values array.");
              if (G === 0) return K({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function ue($e) {
                ++Se, ln($e);
              }
              var ye = [], oe = [], Se = 0;
              if (T === "deleteRange") {
                if (I.type === 4) return K({ numFailures: Se, failures: oe, results: [], lastResult: void 0 });
                I.type === 3 ? ye.push(V = B.clear()) : ye.push(V = B.delete(o(I)));
              } else {
                var q = W ? q ? [C, A] : [C, null] : [A, null], ie = q[0], Ue = q[1];
                if (W) for (var Ve = 0; Ve < G; ++Ve) ye.push(V = Ue && Ue[Ve] !== void 0 ? B[T](ie[Ve], Ue[Ve]) : B[T](ie[Ve])), V.onerror = ue;
                else for (Ve = 0; Ve < G; ++Ve) ye.push(V = B[T](ie[Ve])), V.onerror = ue;
              }
              function Yn($e) {
                $e = $e.target.result, ye.forEach(function(Mt, Br) {
                  return Mt.error != null && (oe[Br] = Mt.error);
                }), K({ numFailures: Se, failures: oe, results: T === "delete" ? A : ye.map(function(Mt) {
                  return Mt.result;
                }), lastResult: $e });
              }
              V.onerror = function($e) {
                ue($e), Yn($e);
              }, V.onsuccess = Yn;
            });
          }, getMany: function(x) {
            var w = x.trans, T = x.keys;
            return new Promise(function(A, C) {
              A = Te(A);
              for (var I, K = w.objectStore(g), U = T.length, B = new Array(U), q = 0, W = 0, V = function(ye) {
                ye = ye.target, B[ye._pos] = ye.result, ++W === q && A(B);
              }, G = ft(C), ue = 0; ue < U; ++ue) T[ue] != null && ((I = K.get(T[ue]))._pos = ue, I.onsuccess = V, I.onerror = G, ++q);
              q === 0 && A(B);
            });
          }, get: function(x) {
            var w = x.trans, T = x.key;
            return new Promise(function(A, C) {
              A = Te(A);
              var I = w.objectStore(g).get(T);
              I.onsuccess = function(K) {
                return A(K.target.result);
              }, I.onerror = ft(C);
            });
          }, query: (m = v, function(x) {
            return new Promise(function(w, T) {
              w = Te(w);
              var A, C, I, q = x.trans, K = x.values, U = x.limit, V = x.query, B = U === 1 / 0 ? void 0 : U, W = V.index, V = V.range, q = q.objectStore(g), W = W.isPrimaryKey ? q : q.index(W.name), V = o(V);
              if (U === 0) return w({ result: [] });
              m ? ((B = K ? W.getAll(V, B) : W.getAllKeys(V, B)).onsuccess = function(G) {
                return w({ result: G.target.result });
              }, B.onerror = ft(T)) : (A = 0, C = !K && "openKeyCursor" in W ? W.openKeyCursor(V) : W.openCursor(V), I = [], C.onsuccess = function(G) {
                var ue = C.result;
                return ue ? (I.push(K ? ue.value : ue.primaryKey), ++A === U ? w({ result: I }) : void ue.continue()) : w({ result: I });
              }, C.onerror = ft(T));
            });
          }), openCursor: function(x) {
            var w = x.trans, T = x.values, A = x.query, C = x.reverse, I = x.unique;
            return new Promise(function(K, U) {
              K = Te(K);
              var W = A.index, B = A.range, q = w.objectStore(g), q = W.isPrimaryKey ? q : q.index(W.name), W = C ? I ? "prevunique" : "prev" : I ? "nextunique" : "next", V = !T && "openKeyCursor" in q ? q.openKeyCursor(o(B), W) : q.openCursor(o(B), W);
              V.onerror = ft(U), V.onsuccess = Te(function(G) {
                var ue, ye, oe, Se, ie = V.result;
                ie ? (ie.___id = ++Ro, ie.done = !1, ue = ie.continue.bind(ie), ye = (ye = ie.continuePrimaryKey) && ye.bind(ie), oe = ie.advance.bind(ie), Se = function() {
                  throw new Error("Cursor not stopped");
                }, ie.trans = w, ie.stop = ie.continue = ie.continuePrimaryKey = ie.advance = function() {
                  throw new Error("Cursor not started");
                }, ie.fail = Te(U), ie.next = function() {
                  var Ue = this, Ve = 1;
                  return this.start(function() {
                    return Ve-- ? Ue.continue() : Ue.stop();
                  }).then(function() {
                    return Ue;
                  });
                }, ie.start = function(Ue) {
                  function Ve() {
                    if (V.result) try {
                      Ue();
                    } catch ($e) {
                      ie.fail($e);
                    }
                    else ie.done = !0, ie.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ie.stop();
                  }
                  var Yn = new Promise(function($e, Mt) {
                    $e = Te($e), V.onerror = ft(Mt), ie.fail = Mt, ie.stop = function(Br) {
                      ie.stop = ie.continue = ie.continuePrimaryKey = ie.advance = Se, $e(Br);
                    };
                  });
                  return V.onsuccess = Te(function($e) {
                    V.onsuccess = Ve, Ve();
                  }), ie.continue = ue, ie.continuePrimaryKey = ye, ie.advance = oe, Ve(), Yn;
                }, K(ie)) : K(null);
              }, U);
            });
          }, count: function(x) {
            var w = x.query, T = x.trans, A = w.index, C = w.range;
            return new Promise(function(I, K) {
              var U = T.objectStore(g), B = A.isPrimaryKey ? U : U.index(A.name), U = o(C), B = U ? B.count(U) : B.count();
              B.onsuccess = Te(function(q) {
                return I(q.target.result);
              }), B.onerror = ft(K);
            });
          } };
        }
        var s, l, f, _ = (l = y, f = vi((s = e).objectStoreNames), { schema: { name: s.name, tables: f.map(function(E) {
          return l.objectStore(E);
        }).map(function(E) {
          var m = E.keyPath, w = E.autoIncrement, g = S(m), x = {}, w = { name: E.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: m == null, compound: g, keyPath: m, autoIncrement: w, unique: !0, extractKey: _r(m) }, indexes: vi(E.indexNames).map(function(T) {
            return E.index(T);
          }).map(function(I) {
            var A = I.name, C = I.unique, K = I.multiEntry, I = I.keyPath, K = { name: A, compound: S(I), keyPath: I, unique: C, multiEntry: K, extractKey: _r(I) };
            return x[dn(I)] = K;
          }), getIndexByKeyPath: function(T) {
            return x[dn(T)];
          } };
          return x[":id"] = w.primaryKey, m != null && (x[dn(m)] = w.primaryKey), w;
        }) }, hasGetAll: 0 < f.length && "getAll" in l.objectStore(f[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), y = _.schema, v = _.hasGetAll, _ = y.tables.map(a), d = {};
        return _.forEach(function(E) {
          return d[E.name] = E;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(E) {
          if (!d[E]) throw new Error("Table '".concat(E, "' not found"));
          return d[E];
        }, MIN_KEY: -1 / 0, MAX_KEY: hn(t), schema: y };
      }
      function jo(e, t, r, o) {
        var a = r.IDBKeyRange;
        return r.indexedDB, { dbcore: (o = Ko(t, a, o), e.dbcore.reduce(function(s, l) {
          return l = l.create, c(c({}, s), l(s));
        }, o)) };
      }
      function Fn(e, o) {
        var r = o.db, o = jo(e._middlewares, r, e._deps, o);
        e.core = o.dbcore, e.tables.forEach(function(a) {
          var s = a.name;
          e.core.schema.tables.some(function(l) {
            return l.name === s;
          }) && (a.core = e.core.table(s), e[s] instanceof e.Table && (e[s].core = a.core));
        });
      }
      function Bn(e, t, r, o) {
        r.forEach(function(a) {
          var s = o[a];
          t.forEach(function(l) {
            var f = function y(v, _) {
              return He(v, _) || (v = H(v)) && y(v, _);
            }(l, a);
            (!f || "value" in f && f.value === void 0) && (l === e.Transaction.prototype || l instanceof e.Transaction ? he(l, a, { get: function() {
              return this.table(a);
            }, set: function(y) {
              ae(this, a, { value: y, writable: !0, configurable: !0, enumerable: !0 });
            } }) : l[a] = new e.Table(a, s));
          });
        });
      }
      function wr(e, t) {
        t.forEach(function(r) {
          for (var o in r) r[o] instanceof e.Table && delete r[o];
        });
      }
      function Fo(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function Bo(e, t, r, o) {
        var a = e._dbSchema;
        r.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = br("$meta", bi("")[0], []), e._storeNames.push("$meta"));
        var s = e._createTransaction("readwrite", e._storeNames, a);
        s.create(r), s._completion.catch(o);
        var l = s._reject.bind(s), f = X.transless || X;
        xt(function() {
          return X.trans = s, X.transless = f, t !== 0 ? (Fn(e, r), v = t, ((y = s).storeNames.includes("$meta") ? y.table("$meta").get("version").then(function(_) {
            return _ ?? v;
          }) : $.resolve(v)).then(function(_) {
            return E = _, m = s, g = r, x = [], _ = (d = e)._versions, w = d._dbSchema = qn(0, d.idbdb, g), (_ = _.filter(function(T) {
              return T._cfg.version >= E;
            })).length !== 0 ? (_.forEach(function(T) {
              x.push(function() {
                var A = w, C = T._cfg.dbschema;
                Ln(d, A, g), Ln(d, C, g), w = d._dbSchema = C;
                var I = xr(A, C);
                I.add.forEach(function(W) {
                  Er(g, W[0], W[1].primKey, W[1].indexes);
                }), I.change.forEach(function(W) {
                  if (W.recreate) throw new N.Upgrade("Not yet support for changing primary key");
                  var V = g.objectStore(W.name);
                  W.add.forEach(function(G) {
                    return Mn(V, G);
                  }), W.change.forEach(function(G) {
                    V.deleteIndex(G.name), Mn(V, G);
                  }), W.del.forEach(function(G) {
                    return V.deleteIndex(G);
                  });
                });
                var K = T._cfg.contentUpgrade;
                if (K && T._cfg.version > E) {
                  Fn(d, g), m._memoizedTables = {};
                  var U = _e(C);
                  I.del.forEach(function(W) {
                    U[W] = A[W];
                  }), wr(d, [d.Transaction.prototype]), Bn(d, [d.Transaction.prototype], O(U), U), m.schema = U;
                  var B, q = ut(K);
                  return q && Jt(), I = $.follow(function() {
                    var W;
                    (B = K(m)) && q && (W = Et.bind(null, null), B.then(W, W));
                  }), B && typeof B.then == "function" ? $.resolve(B) : I.then(function() {
                    return B;
                  });
                }
              }), x.push(function(A) {
                var C, I, K = T._cfg.dbschema;
                C = K, I = A, [].slice.call(I.db.objectStoreNames).forEach(function(U) {
                  return C[U] == null && I.db.deleteObjectStore(U);
                }), wr(d, [d.Transaction.prototype]), Bn(d, [d.Transaction.prototype], d._storeNames, d._dbSchema), m.schema = d._dbSchema;
              }), x.push(function(A) {
                d.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(d.idbdb.version / 10) === T._cfg.version ? (d.idbdb.deleteObjectStore("$meta"), delete d._dbSchema.$meta, d._storeNames = d._storeNames.filter(function(C) {
                  return C !== "$meta";
                })) : A.objectStore("$meta").put(T._cfg.version, "version"));
              });
            }), function T() {
              return x.length ? $.resolve(x.shift()(m.idbtrans)).then(T) : $.resolve();
            }().then(function() {
              gi(w, g);
            })) : $.resolve();
            var d, E, m, g, x, w;
          }).catch(l)) : (O(a).forEach(function(_) {
            Er(r, _, a[_].primKey, a[_].indexes);
          }), Fn(e, r), void $.follow(function() {
            return e.on.populate.fire(s);
          }).catch(l));
          var y, v;
        });
      }
      function Mo(e, t) {
        gi(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var r = qn(0, e.idbdb, t);
        Ln(e, e._dbSchema, t);
        for (var o = 0, a = xr(r, e._dbSchema).change; o < a.length; o++) {
          var s = function(l) {
            if (l.change.length || l.recreate) return console.warn("Unable to patch indexes of table ".concat(l.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var f = t.objectStore(l.name);
            l.add.forEach(function(y) {
              Z && console.debug("Dexie upgrade patch: Creating missing index ".concat(l.name, ".").concat(y.src)), Mn(f, y);
            });
          }(a[o]);
          if (typeof s == "object") return s.value;
        }
      }
      function xr(e, t) {
        var r, o = { del: [], add: [], change: [] };
        for (r in e) t[r] || o.del.push(r);
        for (r in t) {
          var a = e[r], s = t[r];
          if (a) {
            var l = { name: r, def: s, recreate: !1, del: [], add: [], change: [] };
            if ("" + (a.primKey.keyPath || "") != "" + (s.primKey.keyPath || "") || a.primKey.auto !== s.primKey.auto) l.recreate = !0, o.change.push(l);
            else {
              var f = a.idxByName, y = s.idxByName, v = void 0;
              for (v in f) y[v] || l.del.push(v);
              for (v in y) {
                var _ = f[v], d = y[v];
                _ ? _.src !== d.src && l.change.push(d) : l.add.push(d);
              }
              (0 < l.del.length || 0 < l.add.length || 0 < l.change.length) && o.change.push(l);
            }
          } else o.add.push([r, s]);
        }
        return o;
      }
      function Er(e, t, r, o) {
        var a = e.db.createObjectStore(t, r.keyPath ? { keyPath: r.keyPath, autoIncrement: r.auto } : { autoIncrement: r.auto });
        return o.forEach(function(s) {
          return Mn(a, s);
        }), a;
      }
      function gi(e, t) {
        O(e).forEach(function(r) {
          t.db.objectStoreNames.contains(r) || (Z && console.debug("Dexie: Creating missing table", r), Er(t, r, e[r].primKey, e[r].indexes));
        });
      }
      function Mn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function qn(e, t, r) {
        var o = {};
        return Ke(t.objectStoreNames, 0).forEach(function(a) {
          for (var s = r.objectStore(a), l = gr(mi(v = s.keyPath), v || "", !0, !1, !!s.autoIncrement, v && typeof v != "string", !0), f = [], y = 0; y < s.indexNames.length; ++y) {
            var _ = s.index(s.indexNames[y]), v = _.keyPath, _ = gr(_.name, v, !!_.unique, !!_.multiEntry, !1, v && typeof v != "string", !1);
            f.push(_);
          }
          o[a] = br(a, l, f);
        }), o;
      }
      function Ln(e, t, r) {
        for (var o = r.db.objectStoreNames, a = 0; a < o.length; ++a) {
          var s = o[a], l = r.objectStore(s);
          e._hasGetAll = "getAll" in l;
          for (var f = 0; f < l.indexNames.length; ++f) {
            var y = l.indexNames[f], v = l.index(y).keyPath, _ = typeof v == "string" ? v : "[" + Ke(v).join("+") + "]";
            !t[s] || (v = t[s].idxByName[_]) && (v.name = y, delete t[s].idxByName[_], t[s].idxByName[y] = v);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && p.WorkerGlobalScope && p instanceof p.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function bi(e) {
        return e.split(",").map(function(t, r) {
          var s = t.split(":"), o = (a = s[1]) === null || a === void 0 ? void 0 : a.trim(), a = (t = s[0].trim()).replace(/([&*]|\+\+)/g, ""), s = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return gr(a, s || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), S(s), r === 0, o);
        });
      }
      var qo = (nn.prototype._createTableSchema = br, nn.prototype._parseIndexSyntax = bi, nn.prototype._parseStoresSpec = function(e, t) {
        var r = this;
        O(e).forEach(function(o) {
          if (e[o] !== null) {
            var a = r._parseIndexSyntax(e[o]), s = a.shift();
            if (!s) throw new N.Schema("Invalid schema for table " + o + ": " + e[o]);
            if (s.unique = !0, s.multi) throw new N.Schema("Primary key cannot be multiEntry*");
            a.forEach(function(l) {
              if (l.auto) throw new N.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!l.keyPath) throw new N.Schema("Index must have a name and cannot be an empty string");
            }), a = r._createTableSchema(o, s, a), t[o] = a;
          }
        });
      }, nn.prototype.stores = function(r) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? D(this._cfg.storesSource, r) : r;
        var r = t._versions, o = {}, a = {};
        return r.forEach(function(s) {
          D(o, s._cfg.storesSource), a = s._cfg.dbschema = {}, s._parseStoresSpec(o, a);
        }), t._dbSchema = a, wr(t, [t._allTables, t, t.Transaction.prototype]), Bn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], O(a), a), t._storeNames = O(a), this;
      }, nn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = re(this._cfg.contentUpgrade || P, e), this;
      }, nn);
      function nn() {
      }
      function Tr(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new yt(In, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function Or(e) {
        return e && typeof e.databases == "function";
      }
      function Sr(e) {
        return xt(function() {
          return X.letThrough = !0, e();
        });
      }
      function Pr(e) {
        return !("from" in e);
      }
      var Le = function(e, t) {
        if (!this) {
          var r = new Le();
          return e && "d" in e && D(r, e), r;
        }
        D(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function pn(e, t, r) {
        var o = pe(t, r);
        if (!isNaN(o)) {
          if (0 < o) throw RangeError();
          if (Pr(e)) return D(e, { from: t, to: r, d: 1 });
          var a = e.l, o = e.r;
          if (pe(r, e.from) < 0) return a ? pn(a, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, wi(e);
          if (0 < pe(t, e.to)) return o ? pn(o, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, wi(e);
          pe(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < pe(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, a && !e.l && yn(e, a), o && r && yn(e, o);
        }
      }
      function yn(e, t) {
        Pr(t) || function r(o, y) {
          var s = y.from, l = y.to, f = y.l, y = y.r;
          pn(o, s, l), f && r(o, f), y && r(o, y);
        }(e, t);
      }
      function _i(e, t) {
        var r = Un(t), o = r.next();
        if (o.done) return !1;
        for (var a = o.value, s = Un(e), l = s.next(a.from), f = l.value; !o.done && !l.done; ) {
          if (pe(f.from, a.to) <= 0 && 0 <= pe(f.to, a.from)) return !0;
          pe(a.from, f.from) < 0 ? a = (o = r.next(f.from)).value : f = (l = s.next(a.from)).value;
        }
        return !1;
      }
      function Un(e) {
        var t = Pr(e) ? null : { s: 0, n: e };
        return { next: function(r) {
          for (var o = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, o) for (; t.n.l && pe(r, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !o || pe(r, t.n.to) <= 0) return { value: t.n, done: !1 };
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
      function wi(e) {
        var t, r, o = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((r = e.l) === null || r === void 0 ? void 0 : r.d) || 0), a = 1 < o ? "r" : o < -1 ? "l" : "";
        a && (t = a == "r" ? "l" : "r", r = c({}, e), o = e[a], e.from = o.from, e.to = o.to, e[a] = o[a], r[a] = o[t], (e[t] = r).d = xi(r)), e.d = xi(e);
      }
      function xi(r) {
        var t = r.r, r = r.l;
        return (t ? r ? Math.max(t.d, r.d) : t.d : r ? r.d : 0) + 1;
      }
      function Vn(e, t) {
        return O(t).forEach(function(r) {
          e[r] ? yn(e[r], t[r]) : e[r] = function o(a) {
            var s, l, f = {};
            for (s in a) L(a, s) && (l = a[s], f[s] = !l || typeof l != "object" || st.has(l.constructor) ? l : o(l));
            return f;
          }(t[r]);
        }), e;
      }
      function kr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && _i(t[r], e[r]);
        });
      }
      Q(Le.prototype, ((at = { add: function(e) {
        return yn(this, e), this;
      }, addKey: function(e) {
        return pn(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(r) {
          return pn(t, r, r);
        }), this;
      }, hasKey: function(e) {
        var t = Un(this).next(e).value;
        return t && pe(t.from, e) <= 0 && 0 <= pe(t.to, e);
      } })[tt] = function() {
        return Un(this);
      }, at));
      var Ft = {}, Ar = {}, Cr = !1;
      function Hn(e) {
        Vn(Ar, e), Cr || (Cr = !0, setTimeout(function() {
          Cr = !1, Ir(Ar, !(Ar = {}));
        }, 0));
      }
      function Ir(e, t) {
        t === void 0 && (t = !1);
        var r = /* @__PURE__ */ new Set();
        if (e.all) for (var o = 0, a = Object.values(Ft); o < a.length; o++) Ei(l = a[o], e, r, t);
        else for (var s in e) {
          var l, f = /^idb\:\/\/(.*)\/(.*)\//.exec(s);
          f && (s = f[1], f = f[2], (l = Ft["idb://".concat(s, "/").concat(f)]) && Ei(l, e, r, t));
        }
        r.forEach(function(y) {
          return y();
        });
      }
      function Ei(e, t, r, o) {
        for (var a = [], s = 0, l = Object.entries(e.queries.query); s < l.length; s++) {
          for (var f = l[s], y = f[0], v = [], _ = 0, d = f[1]; _ < d.length; _++) {
            var E = d[_];
            kr(t, E.obsSet) ? E.subscribers.forEach(function(w) {
              return r.add(w);
            }) : o && v.push(E);
          }
          o && a.push([y, v]);
        }
        if (o) for (var m = 0, g = a; m < g.length; m++) {
          var x = g[m], y = x[0], v = x[1];
          e.queries.query[y] = v;
        }
      }
      function Lo(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? Ae(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, a = Math.round(10 * e.verno), s = !1;
        function l() {
          if (t.openCanceller !== o) throw new N.DatabaseClosed("db.open() was cancelled");
        }
        function f() {
          return new $(function(E, m) {
            if (l(), !r) throw new N.MissingAPI();
            var g = e.name, x = t.autoSchema || !a ? r.open(g) : r.open(g, a);
            if (!x) throw new N.MissingAPI();
            x.onerror = ft(m), x.onblocked = Te(e._fireOnBlocked), x.onupgradeneeded = Te(function(w) {
              var T;
              _ = x.transaction, t.autoSchema && !e._options.allowEmptyDB ? (x.onerror = ln, _.abort(), x.result.close(), (T = r.deleteDatabase(g)).onsuccess = T.onerror = Te(function() {
                m(new N.NoSuchDatabase("Database ".concat(g, " doesnt exist")));
              })) : (_.onerror = ft(m), w = w.oldVersion > Math.pow(2, 62) ? 0 : w.oldVersion, d = w < 1, e.idbdb = x.result, s && Mo(e, _), Bo(e, w / 10, _, m));
            }, m), x.onsuccess = Te(function() {
              _ = null;
              var w, T, A, C, I, K = e.idbdb = x.result, U = Ke(K.objectStoreNames);
              if (0 < U.length) try {
                var B = K.transaction((C = U).length === 1 ? C[0] : C, "readonly");
                if (t.autoSchema) T = K, A = B, (w = e).verno = T.version / 10, A = w._dbSchema = qn(0, T, A), w._storeNames = Ke(T.objectStoreNames, 0), Bn(w, [w._allTables], O(A), A);
                else if (Ln(e, e._dbSchema, B), ((I = xr(qn(0, (I = e).idbdb, B), I._dbSchema)).add.length || I.change.some(function(q) {
                  return q.add.length || q.change.length;
                })) && !s) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), K.close(), a = K.version + 1, s = !0, E(f());
                Fn(e, B);
              } catch {
              }
              Zt.push(e), K.onversionchange = Te(function(q) {
                t.vcFired = !0, e.on("versionchange").fire(q);
              }), K.onclose = Te(function(q) {
                e.on("close").fire(q);
              }), d && (I = e._deps, B = g, K = I.indexedDB, I = I.IDBKeyRange, Or(K) || B === In || Tr(K, I).put({ name: B }).catch(P)), E();
            }, m);
          }).catch(function(E) {
            switch (E?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), f();
                break;
              case "VersionError":
                if (0 < a) return a = 0, f();
            }
            return $.reject(E);
          });
        }
        var y, v = t.dbReadyResolve, _ = null, d = !1;
        return $.race([o, (typeof navigator > "u" ? $.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(E) {
          function m() {
            return indexedDB.databases().finally(E);
          }
          y = setInterval(m, 100), m();
        }).finally(function() {
          return clearInterval(y);
        }) : Promise.resolve()).then(f)]).then(function() {
          return l(), t.onReadyBeingFired = [], $.resolve(Sr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function E() {
            if (0 < t.onReadyBeingFired.length) {
              var m = t.onReadyBeingFired.reduce(re, P);
              return t.onReadyBeingFired = [], $.resolve(Sr(function() {
                return m(e.vip);
              })).then(E);
            }
          });
        }).finally(function() {
          t.openCanceller === o && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(E) {
          t.dbOpenError = E;
          try {
            _ && _.abort();
          } catch {
          }
          return o === t.openCanceller && e._close(), Ae(E);
        }).finally(function() {
          t.openComplete = !0, v();
        }).then(function() {
          var E;
          return d && (E = {}, e.tables.forEach(function(m) {
            m.schema.indexes.forEach(function(g) {
              g.name && (E["idb://".concat(e.name, "/").concat(m.name, "/").concat(g.name)] = new Le(-1 / 0, [[[]]]));
            }), E["idb://".concat(e.name, "/").concat(m.name, "/")] = E["idb://".concat(e.name, "/").concat(m.name, "/:dels")] = new Le(-1 / 0, [[[]]]);
          }), St(fn).fire(E), Ir(E, !0)), e;
        });
      }
      function Dr(e) {
        function t(s) {
          return e.next(s);
        }
        var r = a(t), o = a(function(s) {
          return e.throw(s);
        });
        function a(s) {
          return function(y) {
            var f = s(y), y = f.value;
            return f.done ? y : y && typeof y.then == "function" ? y.then(r, o) : S(y) ? Promise.all(y).then(r, o) : r(y);
          };
        }
        return a(t)();
      }
      function Wn(e, t, r) {
        for (var o = S(e) ? e.slice() : [e], a = 0; a < r; ++a) o.push(t);
        return o;
      }
      var Uo = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return c(c({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema, a = {}, s = [];
          function l(d, E, m) {
            var g = dn(d), x = a[g] = a[g] || [], w = d == null ? 0 : typeof d == "string" ? 1 : d.length, T = 0 < E, T = c(c({}, m), { name: T ? "".concat(g, "(virtual-from:").concat(m.name, ")") : m.name, lowLevelIndex: m, isVirtual: T, keyTail: E, keyLength: w, extractKey: _r(d), unique: !T && m.unique });
            return x.push(T), T.isPrimaryKey || s.push(T), 1 < w && l(w === 2 ? d[0] : d.slice(0, w - 1), E + 1, m), x.sort(function(A, C) {
              return A.keyTail - C.keyTail;
            }), T;
          }
          t = l(o.primaryKey.keyPath, 0, o.primaryKey), a[":id"] = [t];
          for (var f = 0, y = o.indexes; f < y.length; f++) {
            var v = y[f];
            l(v.keyPath, 0, v);
          }
          function _(d) {
            var E, m = d.query.index;
            return m.isVirtual ? c(c({}, d), { query: { index: m.lowLevelIndex, range: (E = d.query.range, m = m.keyTail, { type: E.type === 1 ? 2 : E.type, lower: Wn(E.lower, E.lowerOpen ? e.MAX_KEY : e.MIN_KEY, m), lowerOpen: !0, upper: Wn(E.upper, E.upperOpen ? e.MIN_KEY : e.MAX_KEY, m), upperOpen: !0 }) } }) : d;
          }
          return c(c({}, r), { schema: c(c({}, o), { primaryKey: t, indexes: s, getIndexByKeyPath: function(d) {
            return (d = a[dn(d)]) && d[0];
          } }), count: function(d) {
            return r.count(_(d));
          }, query: function(d) {
            return r.query(_(d));
          }, openCursor: function(d) {
            var E = d.query.index, m = E.keyTail, g = E.isVirtual, x = E.keyLength;
            return g ? r.openCursor(_(d)).then(function(T) {
              return T && w(T);
            }) : r.openCursor(d);
            function w(T) {
              return Object.create(T, { continue: { value: function(A) {
                A != null ? T.continue(Wn(A, d.reverse ? e.MAX_KEY : e.MIN_KEY, m)) : d.unique ? T.continue(T.key.slice(0, x).concat(d.reverse ? e.MIN_KEY : e.MAX_KEY, m)) : T.continue();
              } }, continuePrimaryKey: { value: function(A, C) {
                T.continuePrimaryKey(Wn(A, e.MAX_KEY, m), C);
              } }, primaryKey: { get: function() {
                return T.primaryKey;
              } }, key: { get: function() {
                var A = T.key;
                return x === 1 ? A[0] : A.slice(0, x);
              } }, value: { get: function() {
                return T.value;
              } } });
            }
          } });
        } });
      } };
      function Nr(e, t, r, o) {
        return r = r || {}, o = o || "", O(e).forEach(function(a) {
          var s, l, f;
          L(t, a) ? (s = e[a], l = t[a], typeof s == "object" && typeof l == "object" && s && l ? (f = At(s)) !== At(l) ? r[o + a] = t[a] : f === "Object" ? Nr(s, l, r, o + a + ".") : s !== l && (r[o + a] = t[a]) : s !== l && (r[o + a] = t[a])) : r[o + a] = void 0;
        }), O(t).forEach(function(a) {
          L(e, a) || (r[o + a] = t[a]);
        }), r;
      }
      function Rr(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var Vo = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return c(c({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema.primaryKey;
          return c(c({}, r), { mutate: function(a) {
            var s = X.trans, l = s.table(t).hook, f = l.deleting, y = l.creating, v = l.updating;
            switch (a.type) {
              case "add":
                if (y.fire === P) break;
                return s._promise("readwrite", function() {
                  return _(a);
                }, !0);
              case "put":
                if (y.fire === P && v.fire === P) break;
                return s._promise("readwrite", function() {
                  return _(a);
                }, !0);
              case "delete":
                if (f.fire === P) break;
                return s._promise("readwrite", function() {
                  return _(a);
                }, !0);
              case "deleteRange":
                if (f.fire === P) break;
                return s._promise("readwrite", function() {
                  return function d(E, m, g) {
                    return r.query({ trans: E, values: !1, query: { index: o, range: m }, limit: g }).then(function(x) {
                      var w = x.result;
                      return _({ type: "delete", keys: w, trans: E }).then(function(T) {
                        return 0 < T.numFailures ? Promise.reject(T.failures[0]) : w.length < g ? { failures: [], numFailures: 0, lastResult: void 0 } : d(E, c(c({}, m), { lower: w[w.length - 1], lowerOpen: !0 }), g);
                      });
                    });
                  }(a.trans, a.range, 1e4);
                }, !0);
            }
            return r.mutate(a);
            function _(d) {
              var E, m, g, x = X.trans, w = d.keys || Rr(o, d);
              if (!w) throw new Error("Keys missing");
              return (d = d.type === "add" || d.type === "put" ? c(c({}, d), { keys: w }) : c({}, d)).type !== "delete" && (d.values = h([], d.values)), d.keys && (d.keys = h([], d.keys)), E = r, g = w, ((m = d).type === "add" ? Promise.resolve([]) : E.getMany({ trans: m.trans, keys: g, cache: "immutable" })).then(function(T) {
                var A = w.map(function(C, I) {
                  var K, U, B, q = T[I], W = { onerror: null, onsuccess: null };
                  return d.type === "delete" ? f.fire.call(W, C, q, x) : d.type === "add" || q === void 0 ? (K = y.fire.call(W, C, d.values[I], x), C == null && K != null && (d.keys[I] = C = K, o.outbound || te(d.values[I], o.keyPath, C))) : (K = Nr(q, d.values[I]), (U = v.fire.call(W, K, C, q, x)) && (B = d.values[I], Object.keys(U).forEach(function(V) {
                    L(B, V) ? B[V] = U[V] : te(B, V, U[V]);
                  }))), W;
                });
                return r.mutate(d).then(function(C) {
                  for (var I = C.failures, K = C.results, U = C.numFailures, C = C.lastResult, B = 0; B < w.length; ++B) {
                    var q = (K || w)[B], W = A[B];
                    q == null ? W.onerror && W.onerror(I[B]) : W.onsuccess && W.onsuccess(d.type === "put" && T[B] ? d.values[B] : q);
                  }
                  return { failures: I, results: K, numFailures: U, lastResult: C };
                }).catch(function(C) {
                  return A.forEach(function(I) {
                    return I.onerror && I.onerror(C);
                  }), Promise.reject(C);
                });
              });
            }
          } });
        } });
      } };
      function Ti(e, t, r) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var o = [], a = 0, s = 0; a < t.keys.length && s < e.length; ++a) pe(t.keys[a], e[s]) === 0 && (o.push(r ? ze(t.values[a]) : t.values[a]), ++s);
          return o.length === e.length ? o : null;
        } catch {
          return null;
        }
      }
      var Ho = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var r = e.table(t);
          return c(c({}, r), { getMany: function(o) {
            if (!o.cache) return r.getMany(o);
            var a = Ti(o.keys, o.trans._cache, o.cache === "clone");
            return a ? $.resolve(a) : r.getMany(o).then(function(s) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? ze(s) : s }, s;
            });
          }, mutate: function(o) {
            return o.type !== "add" && (o.trans._cache = null), r.mutate(o);
          } });
        } };
      } };
      function Oi(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Si(e, t) {
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
      var Wo = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, r = new Le(e.MIN_KEY, e.MAX_KEY);
        return c(c({}, e), { transaction: function(o, a, s) {
          if (X.subscr && a !== "readonly") throw new N.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(X.querier));
          return e.transaction(o, a, s);
        }, table: function(o) {
          var a = e.table(o), s = a.schema, l = s.primaryKey, d = s.indexes, f = l.extractKey, y = l.outbound, v = l.autoIncrement && d.filter(function(m) {
            return m.compound && m.keyPath.includes(l.keyPath);
          }), _ = c(c({}, a), { mutate: function(m) {
            function g(V) {
              return V = "idb://".concat(t, "/").concat(o, "/").concat(V), C[V] || (C[V] = new Le());
            }
            var x, w, T, A = m.trans, C = m.mutatedParts || (m.mutatedParts = {}), I = g(""), K = g(":dels"), U = m.type, W = m.type === "deleteRange" ? [m.range] : m.type === "delete" ? [m.keys] : m.values.length < 50 ? [Rr(l, m).filter(function(V) {
              return V;
            }), m.values] : [], B = W[0], q = W[1], W = m.trans._cache;
            return S(B) ? (I.addKeys(B), (W = U === "delete" || B.length === q.length ? Ti(B, W) : null) || K.addKeys(B), (W || q) && (x = g, w = W, T = q, s.indexes.forEach(function(V) {
              var G = x(V.name || "");
              function ue(oe) {
                return oe != null ? V.extractKey(oe) : null;
              }
              function ye(oe) {
                return V.multiEntry && S(oe) ? oe.forEach(function(Se) {
                  return G.addKey(Se);
                }) : G.addKey(oe);
              }
              (w || T).forEach(function(oe, Ue) {
                var ie = w && ue(w[Ue]), Ue = T && ue(T[Ue]);
                pe(ie, Ue) !== 0 && (ie != null && ye(ie), Ue != null && ye(Ue));
              });
            }))) : B ? (q = { from: (q = B.lower) !== null && q !== void 0 ? q : e.MIN_KEY, to: (q = B.upper) !== null && q !== void 0 ? q : e.MAX_KEY }, K.add(q), I.add(q)) : (I.add(r), K.add(r), s.indexes.forEach(function(V) {
              return g(V.name).add(r);
            })), a.mutate(m).then(function(V) {
              return !B || m.type !== "add" && m.type !== "put" || (I.addKeys(V.results), v && v.forEach(function(G) {
                for (var ue = m.values.map(function(ie) {
                  return G.extractKey(ie);
                }), ye = G.keyPath.findIndex(function(ie) {
                  return ie === l.keyPath;
                }), oe = 0, Se = V.results.length; oe < Se; ++oe) ue[oe][ye] = V.results[oe];
                g(G.name).addKeys(ue);
              })), A.mutatedParts = Vn(A.mutatedParts || {}, C), V;
            });
          } }), d = function(g) {
            var x = g.query, g = x.index, x = x.range;
            return [g, new Le((g = x.lower) !== null && g !== void 0 ? g : e.MIN_KEY, (x = x.upper) !== null && x !== void 0 ? x : e.MAX_KEY)];
          }, E = { get: function(m) {
            return [l, new Le(m.key)];
          }, getMany: function(m) {
            return [l, new Le().addKeys(m.keys)];
          }, count: d, query: d, openCursor: d };
          return O(E).forEach(function(m) {
            _[m] = function(g) {
              var x = X.subscr, w = !!x, T = Oi(X, a) && Si(m, g) ? g.obsSet = {} : x;
              if (w) {
                var A = function(q) {
                  return q = "idb://".concat(t, "/").concat(o, "/").concat(q), T[q] || (T[q] = new Le());
                }, C = A(""), I = A(":dels"), x = E[m](g), w = x[0], x = x[1];
                if ((m === "query" && w.isPrimaryKey && !g.values ? I : A(w.name || "")).add(x), !w.isPrimaryKey) {
                  if (m !== "count") {
                    var K = m === "query" && y && g.values && a.query(c(c({}, g), { values: !1 }));
                    return a[m].apply(this, arguments).then(function(q) {
                      if (m === "query") {
                        if (y && g.values) return K.then(function(ue) {
                          return ue = ue.result, C.addKeys(ue), q;
                        });
                        var W = g.values ? q.result.map(f) : q.result;
                        (g.values ? C : I).addKeys(W);
                      } else if (m === "openCursor") {
                        var V = q, G = g.values;
                        return V && Object.create(V, { key: { get: function() {
                          return I.addKey(V.primaryKey), V.key;
                        } }, primaryKey: { get: function() {
                          var ue = V.primaryKey;
                          return I.addKey(ue), ue;
                        } }, value: { get: function() {
                          return G && C.addKey(V.primaryKey), V.value;
                        } } });
                      }
                      return q;
                    });
                  }
                  I.add(r);
                }
              }
              return a[m].apply(this, arguments);
            };
          }), _;
        } });
      } };
      function Pi(e, t, r) {
        if (r.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var o = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return r.numFailures === o ? null : (t = c({}, t), S(t.keys) && (t.keys = t.keys.filter(function(a, s) {
          return !(s in r.failures);
        })), "values" in t && S(t.values) && (t.values = t.values.filter(function(a, s) {
          return !(s in r.failures);
        })), t);
      }
      function Kr(e, t) {
        return r = e, ((o = t).lower === void 0 || (o.lowerOpen ? 0 < pe(r, o.lower) : 0 <= pe(r, o.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? pe(e, t.upper) < 0 : pe(e, t.upper) <= 0));
        var r, o;
      }
      function ki(e, t, E, o, a, s) {
        if (!E || E.length === 0) return e;
        var l = t.query.index, f = l.multiEntry, y = t.query.range, v = o.schema.primaryKey.extractKey, _ = l.extractKey, d = (l.lowLevelIndex || l).extractKey, E = E.reduce(function(m, g) {
          var x = m, w = [];
          if (g.type === "add" || g.type === "put") for (var T = new Le(), A = g.values.length - 1; 0 <= A; --A) {
            var C, I = g.values[A], K = v(I);
            T.hasKey(K) || (C = _(I), (f && S(C) ? C.some(function(V) {
              return Kr(V, y);
            }) : Kr(C, y)) && (T.addKey(K), w.push(I)));
          }
          switch (g.type) {
            case "add":
              var U = new Le().addKeys(t.values ? m.map(function(G) {
                return v(G);
              }) : m), x = m.concat(t.values ? w.filter(function(G) {
                return G = v(G), !U.hasKey(G) && (U.addKey(G), !0);
              }) : w.map(function(G) {
                return v(G);
              }).filter(function(G) {
                return !U.hasKey(G) && (U.addKey(G), !0);
              }));
              break;
            case "put":
              var B = new Le().addKeys(g.values.map(function(G) {
                return v(G);
              }));
              x = m.filter(function(G) {
                return !B.hasKey(t.values ? v(G) : G);
              }).concat(t.values ? w : w.map(function(G) {
                return v(G);
              }));
              break;
            case "delete":
              var q = new Le().addKeys(g.keys);
              x = m.filter(function(G) {
                return !q.hasKey(t.values ? v(G) : G);
              });
              break;
            case "deleteRange":
              var W = g.range;
              x = m.filter(function(G) {
                return !Kr(v(G), W);
              });
          }
          return x;
        }, e);
        return E === e ? e : (E.sort(function(m, g) {
          return pe(d(m), d(g)) || pe(v(m), v(g));
        }), t.limit && t.limit < 1 / 0 && (E.length > t.limit ? E.length = t.limit : e.length === t.limit && E.length < t.limit && (a.dirty = !0)), s ? Object.freeze(E) : E);
      }
      function Ai(e, t) {
        return pe(e.lower, t.lower) === 0 && pe(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function $o(e, t) {
        return function(r, o, a, s) {
          if (r === void 0) return o !== void 0 ? -1 : 0;
          if (o === void 0) return 1;
          if ((o = pe(r, o)) === 0) {
            if (a && s) return 0;
            if (a) return 1;
            if (s) return -1;
          }
          return o;
        }(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function(r, o, a, s) {
          if (r === void 0) return o !== void 0 ? 1 : 0;
          if (o === void 0) return -1;
          if ((o = pe(r, o)) === 0) {
            if (a && s) return 0;
            if (a) return -1;
            if (s) return 1;
          }
          return o;
        }(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function Go(e, t, r, o) {
        e.subscribers.add(r), o.addEventListener("abort", function() {
          var a, s;
          e.subscribers.delete(r), e.subscribers.size === 0 && (a = e, s = t, setTimeout(function() {
            a.subscribers.size === 0 && Pe(s, a);
          }, 3e3));
        });
      }
      var Yo = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return c(c({}, e), { transaction: function(r, o, a) {
          var s, l, f = e.transaction(r, o, a);
          return o === "readwrite" && (l = (s = new AbortController()).signal, a = function(y) {
            return function() {
              if (s.abort(), o === "readwrite") {
                for (var v = /* @__PURE__ */ new Set(), _ = 0, d = r; _ < d.length; _++) {
                  var E = d[_], m = Ft["idb://".concat(t, "/").concat(E)];
                  if (m) {
                    var g = e.table(E), x = m.optimisticOps.filter(function(G) {
                      return G.trans === f;
                    });
                    if (f._explicit && y && f.mutatedParts) for (var w = 0, T = Object.values(m.queries.query); w < T.length; w++) for (var A = 0, C = (U = T[w]).slice(); A < C.length; A++) kr((B = C[A]).obsSet, f.mutatedParts) && (Pe(U, B), B.subscribers.forEach(function(G) {
                      return v.add(G);
                    }));
                    else if (0 < x.length) {
                      m.optimisticOps = m.optimisticOps.filter(function(G) {
                        return G.trans !== f;
                      });
                      for (var I = 0, K = Object.values(m.queries.query); I < K.length; I++) for (var U, B, q, W = 0, V = (U = K[I]).slice(); W < V.length; W++) (B = V[W]).res != null && f.mutatedParts && (y && !B.dirty ? (q = Object.isFrozen(B.res), q = ki(B.res, B.req, x, g, B, q), B.dirty ? (Pe(U, B), B.subscribers.forEach(function(G) {
                        return v.add(G);
                      })) : q !== B.res && (B.res = q, B.promise = $.resolve({ result: q }))) : (B.dirty && Pe(U, B), B.subscribers.forEach(function(G) {
                        return v.add(G);
                      })));
                    }
                  }
                }
                v.forEach(function(G) {
                  return G();
                });
              }
            };
          }, f.addEventListener("abort", a(!1), { signal: l }), f.addEventListener("error", a(!1), { signal: l }), f.addEventListener("complete", a(!0), { signal: l })), f;
        }, table: function(r) {
          var o = e.table(r), a = o.schema.primaryKey;
          return c(c({}, o), { mutate: function(s) {
            var l = X.trans;
            if (a.outbound || l.db._options.cache === "disabled" || l.explicit || l.idbtrans.mode !== "readwrite") return o.mutate(s);
            var f = Ft["idb://".concat(t, "/").concat(r)];
            return f ? (l = o.mutate(s), s.type !== "add" && s.type !== "put" || !(50 <= s.values.length || Rr(a, s).some(function(y) {
              return y == null;
            })) ? (f.optimisticOps.push(s), s.mutatedParts && Hn(s.mutatedParts), l.then(function(y) {
              0 < y.numFailures && (Pe(f.optimisticOps, s), (y = Pi(0, s, y)) && f.optimisticOps.push(y), s.mutatedParts && Hn(s.mutatedParts));
            }), l.catch(function() {
              Pe(f.optimisticOps, s), s.mutatedParts && Hn(s.mutatedParts);
            })) : l.then(function(y) {
              var v = Pi(0, c(c({}, s), { values: s.values.map(function(_, d) {
                var E;
                return y.failures[d] ? _ : (_ = (E = a.keyPath) !== null && E !== void 0 && E.includes(".") ? ze(_) : c({}, _), te(_, a.keyPath, y.results[d]), _);
              }) }), y);
              f.optimisticOps.push(v), queueMicrotask(function() {
                return s.mutatedParts && Hn(s.mutatedParts);
              });
            }), l) : o.mutate(s);
          }, query: function(s) {
            if (!Oi(X, o) || !Si("query", s)) return o.query(s);
            var l = ((v = X.trans) === null || v === void 0 ? void 0 : v.db._options.cache) === "immutable", d = X, f = d.requery, y = d.signal, v = function(g, x, w, T) {
              var A = Ft["idb://".concat(g, "/").concat(x)];
              if (!A) return [];
              if (!(x = A.queries[w])) return [null, !1, A, null];
              var C = x[(T.query ? T.query.index.name : null) || ""];
              if (!C) return [null, !1, A, null];
              switch (w) {
                case "query":
                  var I = C.find(function(K) {
                    return K.req.limit === T.limit && K.req.values === T.values && Ai(K.req.query.range, T.query.range);
                  });
                  return I ? [I, !0, A, C] : [C.find(function(K) {
                    return ("limit" in K.req ? K.req.limit : 1 / 0) >= T.limit && (!T.values || K.req.values) && $o(K.req.query.range, T.query.range);
                  }), !1, A, C];
                case "count":
                  return I = C.find(function(K) {
                    return Ai(K.req.query.range, T.query.range);
                  }), [I, !!I, A, C];
              }
            }(t, r, "query", s), _ = v[0], d = v[1], E = v[2], m = v[3];
            return _ && d ? _.obsSet = s.obsSet : (d = o.query(s).then(function(g) {
              var x = g.result;
              if (_ && (_.res = x), l) {
                for (var w = 0, T = x.length; w < T; ++w) Object.freeze(x[w]);
                Object.freeze(x);
              } else g.result = ze(x);
              return g;
            }).catch(function(g) {
              return m && _ && Pe(m, _), Promise.reject(g);
            }), _ = { obsSet: s.obsSet, promise: d, subscribers: /* @__PURE__ */ new Set(), type: "query", req: s, dirty: !1 }, m ? m.push(_) : (m = [_], (E = E || (Ft["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[s.query.index.name || ""] = m)), Go(_, m, f, y), _.promise.then(function(g) {
              return { result: ki(g.result, s, E?.optimisticOps, o, _, l) };
            });
          } });
        } });
      } };
      function $n(e, t) {
        return new Proxy(e, { get: function(r, o, a) {
          return o === "db" ? t : Reflect.get(r, o, a);
        } });
      }
      var yt = (Ce.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new N.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new N.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(Fo), r.stores({}), this._state.autoSchema = !1, r);
      }, Ce.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || X.letThrough || this._vip) ? e() : new $(function(r, o) {
          if (t._state.openComplete) return o(new N.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new N.DatabaseClosed());
            t.open().catch(P);
          }
          t._state.dbReadyPromise.then(r, o);
        }).then(e);
      }, Ce.prototype.use = function(e) {
        var t = e.stack, r = e.create, o = e.level, a = e.name;
        return a && this.unuse({ stack: t, name: a }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: r, level: o ?? 10, name: a }), e.sort(function(s, l) {
          return s.level - l.level;
        }), this;
      }, Ce.prototype.unuse = function(e) {
        var t = e.stack, r = e.name, o = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(a) {
          return o ? a.create !== o : !!r && a.name !== r;
        })), this;
      }, Ce.prototype.open = function() {
        var e = this;
        return Rt(We, function() {
          return Lo(e);
        });
      }, Ce.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, t = Zt.indexOf(this);
        if (0 <= t && Zt.splice(t, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new $(function(r) {
          e.dbReadyResolve = r;
        }), e.openCanceller = new $(function(r, o) {
          e.cancelOpen = o;
        }));
      }, Ce.prototype.close = function(r) {
        var t = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        t ? (r.isBeingOpened && r.cancelOpen(new N.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new N.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, Ce.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", o = this._state;
        return new $(function(a, s) {
          function l() {
            t.close(e);
            var f = t._deps.indexedDB.deleteDatabase(t.name);
            f.onsuccess = Te(function() {
              var y, v, _;
              y = t._deps, v = t.name, _ = y.indexedDB, y = y.IDBKeyRange, Or(_) || v === In || Tr(_, y).delete(v).catch(P), a();
            }), f.onerror = ft(s), f.onblocked = t._fireOnBlocked;
          }
          if (r) throw new N.InvalidArgument("Invalid closeOptions argument to db.delete()");
          o.isBeingOpened ? o.dbReadyPromise.then(l) : l();
        });
      }, Ce.prototype.backendDB = function() {
        return this.idbdb;
      }, Ce.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Ce.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, Ce.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Ce.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Ce.prototype, "tables", { get: function() {
        var e = this;
        return O(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), Ce.prototype.transaction = function() {
        var e = (function(t, r, o) {
          var a = arguments.length;
          if (a < 2) throw new N.InvalidArgument("Too few arguments");
          for (var s = new Array(a - 1); --a; ) s[a - 1] = arguments[a];
          return o = s.pop(), [t, Xe(s), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Ce.prototype._transaction = function(e, t, r) {
        var o = this, a = X.trans;
        a && a.db === this && e.indexOf("!") === -1 || (a = null);
        var s, l, f = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (l = t.map(function(v) {
            if (v = v instanceof o.Table ? v.name : v, typeof v != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return v;
          }), e == "r" || e === dr) s = dr;
          else {
            if (e != "rw" && e != pr) throw new N.InvalidArgument("Invalid transaction mode: " + e);
            s = pr;
          }
          if (a) {
            if (a.mode === dr && s === pr) {
              if (!f) throw new N.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              a = null;
            }
            a && l.forEach(function(v) {
              if (a && a.storeNames.indexOf(v) === -1) {
                if (!f) throw new N.SubTransaction("Table " + v + " not included in parent transaction.");
                a = null;
              }
            }), f && a && !a.active && (a = null);
          }
        } catch (v) {
          return a ? a._promise(null, function(_, d) {
            d(v);
          }) : Ae(v);
        }
        var y = (function v(_, d, E, m, g) {
          return $.resolve().then(function() {
            var x = X.transless || X, w = _._createTransaction(d, E, _._dbSchema, m);
            if (w.explicit = !0, x = { trans: w, transless: x }, m) w.idbtrans = m.idbtrans;
            else try {
              w.create(), w.idbtrans._explicit = !0, _._state.PR1398_maxLoop = 3;
            } catch (C) {
              return C.name === k.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                return v(_, d, E, null, g);
              })) : Ae(C);
            }
            var T, A = ut(g);
            return A && Jt(), x = $.follow(function() {
              var C;
              (T = g.call(w, w)) && (A ? (C = Et.bind(null, null), T.then(C, C)) : typeof T.next == "function" && typeof T.throw == "function" && (T = Dr(T)));
            }, x), (T && typeof T.then == "function" ? $.resolve(T).then(function(C) {
              return w.active ? C : Ae(new N.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : x.then(function() {
              return T;
            })).then(function(C) {
              return m && w._resolve(), w._completion.then(function() {
                return C;
              });
            }).catch(function(C) {
              return w._reject(C), Ae(C);
            });
          });
        }).bind(null, this, s, l, a, r);
        return a ? a._promise(s, y, "lock") : X.trans ? Rt(X.transless, function() {
          return o._whenReady(y);
        }) : this._whenReady(y);
      }, Ce.prototype.table = function(e) {
        if (!L(this._allTables, e)) throw new N.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Ce);
      function Ce(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var o = Ce.dependencies;
        this._options = t = c({ addons: Ce.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var a, s, l, f, y, v = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: P, dbReadyPromise: null, cancelOpen: P, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        v.dbReadyPromise = new $(function(d) {
          v.dbReadyResolve = d;
        }), v.openCanceller = new $(function(d, E) {
          v.cancelOpen = E;
        }), this._state = v, this.name = e, this.on = sn(this, "populate", "blocked", "versionchange", "close", { ready: [re, P] }), this.once = function(d, E) {
          var m = function() {
            for (var g = [], x = 0; x < arguments.length; x++) g[x] = arguments[x];
            r.on(d).unsubscribe(m), E.apply(r, g);
          };
          return r.on(d, m);
        }, this.on.ready.subscribe = qe(this.on.ready.subscribe, function(d) {
          return function(E, m) {
            Ce.vip(function() {
              var g, x = r._state;
              x.openComplete ? (x.dbOpenError || $.resolve().then(E), m && d(E)) : x.onReadyBeingFired ? (x.onReadyBeingFired.push(E), m && d(E)) : (d(E), g = r, m || d(function w() {
                g.on.ready.unsubscribe(E), g.on.ready.unsubscribe(w);
              }));
            });
          };
        }), this.Collection = (a = this, un(Co.prototype, function(T, w) {
          this.db = a;
          var m = oi, g = null;
          if (w) try {
            m = w();
          } catch (A) {
            g = A;
          }
          var x = T._ctx, w = x.table, T = w.hook.reading.fire;
          this._ctx = { table: w, index: x.index, isPrimKey: !x.index || w.schema.primKey.keyPath && x.index === w.schema.primKey.name, range: m, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: g, or: x.or, valueMapper: T !== R ? T : null };
        })), this.Table = (s = this, un(ci.prototype, function(d, E, m) {
          this.db = s, this._tx = m, this.name = d, this.schema = E, this.hook = s._allTables[d] ? s._allTables[d].hook : sn(null, { creating: [ee, P], reading: [Y, R], updating: [se, P], deleting: [J, P] });
        })), this.Transaction = (l = this, un(No.prototype, function(d, E, m, g, x) {
          var w = this;
          d !== "readonly" && E.forEach(function(T) {
            T = (T = m[T]) === null || T === void 0 ? void 0 : T.yProps, T && (E = E.concat(T.map(function(A) {
              return A.updatesTable;
            })));
          }), this.db = l, this.mode = d, this.storeNames = E, this.schema = m, this.chromeTransactionDurability = g, this.idbtrans = null, this.on = sn(this, "complete", "error", "abort"), this.parent = x || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new $(function(T, A) {
            w._resolve = T, w._reject = A;
          }), this._completion.then(function() {
            w.active = !1, w.on.complete.fire();
          }, function(T) {
            var A = w.active;
            return w.active = !1, w.on.error.fire(T), w.parent ? w.parent._reject(T) : A && w.idbtrans && w.idbtrans.abort(), Ae(T);
          });
        })), this.Version = (f = this, un(qo.prototype, function(d) {
          this.db = f, this._cfg = { version: d, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (y = this, un(yi.prototype, function(d, E, m) {
          if (this.db = y, this._ctx = { table: d, index: E === ":id" ? null : E, or: m }, this._cmp = this._ascending = pe, this._descending = function(g, x) {
            return pe(x, g);
          }, this._max = function(g, x) {
            return 0 < pe(g, x) ? g : x;
          }, this._min = function(g, x) {
            return pe(g, x) < 0 ? g : x;
          }, this._IDBKeyRange = y._deps.IDBKeyRange, !this._IDBKeyRange) throw new N.MissingAPI();
        })), this.on("versionchange", function(d) {
          0 < d.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(d) {
          !d.newVersion || d.newVersion < d.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(d.oldVersion / 10));
        }), this._maxKey = hn(t.IDBKeyRange), this._createTransaction = function(d, E, m, g) {
          return new r.Transaction(d, E, m, r._options.chromeTransactionDurability, g);
        }, this._fireOnBlocked = function(d) {
          r.on("blocked").fire(d), Zt.filter(function(E) {
            return E.name === r.name && E !== r && !E._state.vcFired;
          }).map(function(E) {
            return E.on("versionchange").fire(d);
          });
        }, this.use(Ho), this.use(Yo), this.use(Wo), this.use(Uo), this.use(Vo);
        var _ = new Proxy(this, { get: function(d, E, m) {
          if (E === "_vip") return !0;
          if (E === "table") return function(x) {
            return $n(r.table(x), _);
          };
          var g = Reflect.get(d, E, m);
          return g instanceof ci ? $n(g, _) : E === "tables" ? g.map(function(x) {
            return $n(x, _);
          }) : E === "_createTransaction" ? function() {
            return $n(g.apply(this, arguments), _);
          } : g;
        } });
        this.vip = _, o.forEach(function(d) {
          return d(r);
        });
      }
      var Gn, at = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Xo = (jr.prototype.subscribe = function(e, t, r) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: r });
      }, jr.prototype[at] = function() {
        return this;
      }, jr);
      function jr(e) {
        this._subscribe = e;
      }
      try {
        Gn = { indexedDB: p.indexedDB || p.mozIndexedDB || p.webkitIndexedDB || p.msIndexedDB, IDBKeyRange: p.IDBKeyRange || p.webkitIDBKeyRange };
      } catch {
        Gn = { indexedDB: null, IDBKeyRange: null };
      }
      function Ci(e) {
        var t, r = !1, o = new Xo(function(a) {
          var s = ut(e), l, f = !1, y = {}, v = {}, _ = { get closed() {
            return f;
          }, unsubscribe: function() {
            f || (f = !0, l && l.abort(), d && St.storagemutated.unsubscribe(m));
          } };
          a.start && a.start(_);
          var d = !1, E = function() {
            return hr(g);
          }, m = function(x) {
            Vn(y, x), kr(v, y) && E();
          }, g = function() {
            var x, w, T;
            !f && Gn.indexedDB && (y = {}, x = {}, l && l.abort(), l = new AbortController(), T = function(A) {
              var C = zt();
              try {
                s && Jt();
                var I = xt(e, A);
                return I = s ? I.finally(Et) : I;
              } finally {
                C && Qt();
              }
            }(w = { subscr: x, signal: l.signal, requery: E, querier: e, trans: null }), Promise.resolve(T).then(function(A) {
              r = !0, t = A, f || w.signal.aborted || (y = {}, function(C) {
                for (var I in C) if (L(C, I)) return;
                return 1;
              }(v = x) || d || (St(fn, m), d = !0), hr(function() {
                return !f && a.next && a.next(A);
              }));
            }, function(A) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(A?.name) || f || hr(function() {
                f || a.error && a.error(A);
              });
            }));
          };
          return setTimeout(E, 0), _;
        });
        return o.hasValue = function() {
          return r;
        }, o.getValue = function() {
          return t;
        }, o;
      }
      var Bt = yt;
      function Fr(e) {
        var t = Pt;
        try {
          Pt = !0, St.storagemutated.fire(e), Ir(e, !0);
        } finally {
          Pt = t;
        }
      }
      Q(Bt, c(c({}, Re), { delete: function(e) {
        return new Bt(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new Bt(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = Bt.dependencies, r = t.indexedDB, t = t.IDBKeyRange, (Or(r) ? Promise.resolve(r.databases()).then(function(o) {
            return o.map(function(a) {
              return a.name;
            }).filter(function(a) {
              return a !== In;
            });
          }) : Tr(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return Ae(new N.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          D(this, e);
        };
      }, ignoreTransaction: function(e) {
        return X.trans ? Rt(X.transless, e) : e();
      }, vip: Sr, async: function(e) {
        return function() {
          try {
            var t = Dr(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : $.resolve(t);
          } catch (r) {
            return Ae(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = Dr(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : $.resolve(o);
        } catch (a) {
          return Ae(a);
        }
      }, currentTransaction: { get: function() {
        return X.trans || null;
      } }, waitFor: function(e, t) {
        return t = $.resolve(typeof e == "function" ? Bt.ignoreTransaction(e) : e).timeout(t || 6e4), X.trans ? X.trans.waitFor(t) : t;
      }, Promise: $, debug: { get: function() {
        return Z;
      }, set: function(e) {
        ve(e);
      } }, derive: de, extend: D, props: Q, override: qe, Events: sn, on: St, liveQuery: Ci, extendObservabilitySet: Vn, getByKeyPath: ne, setByKeyPath: te, delByKeyPath: function(e, t) {
        typeof t == "string" ? te(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          te(e, r, void 0);
        });
      }, shallowClone: _e, deepClone: ze, getObjectDiff: Nr, cmp: pe, asap: je, minKey: -1 / 0, addons: [], connections: Zt, errnames: k, dependencies: Gn, cache: Ft, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), Bt.maxKey = hn(Bt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (St(fn, function(e) {
        Pt || (e = new CustomEvent(vr, { detail: e }), Pt = !0, dispatchEvent(e), Pt = !1);
      }), addEventListener(vr, function(e) {
        e = e.detail, Pt || Fr(e);
      }));
      var rn, Pt = !1, Ii = function() {
      };
      return typeof BroadcastChannel < "u" && ((Ii = function() {
        (rn = new BroadcastChannel(vr)).onmessage = function(e) {
          return e.data && Fr(e.data);
        };
      })(), typeof rn.unref == "function" && rn.unref(), St(fn, function(e) {
        Pt || rn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!yt.disableBfCache && e.persisted) {
          Z && console.debug("Dexie: handling persisted pagehide"), rn?.close();
          for (var t = 0, r = Zt; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !yt.disableBfCache && e.persisted && (Z && console.debug("Dexie: handling persisted pageshow"), Ii(), Fr({ all: new Le(-1 / 0, [[]]) }));
      })), $.rejectionMapper = function(e, t) {
        return !e || e instanceof bt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !M[e.name] ? e : (t = new M[e.name](t || e.message, e), "stack" in e && he(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, ve(Z), c(yt, Object.freeze({ __proto__: null, Dexie: yt, liveQuery: Ci, Entity: ai, cmp: pe, PropModification: cn, replacePrefix: function(e, t) {
        return new cn({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new cn({ add: e });
      }, remove: function(e) {
        return new cn({ remove: e });
      }, default: yt, RangeSet: Le, mergeRanges: yn, rangesOverlap: _i }), { default: yt }), yt;
    });
  }(oo)), oo.exports;
}
var kf = Pf();
const Ea = /* @__PURE__ */ Vl(kf), xs = Symbol.for("Dexie"), Ta = globalThis[xs] || (globalThis[xs] = Ea);
if (Ea.semVer !== Ta.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Ea.semVer} and ${Ta.semVer}`);
const {
  liveQuery: gh,
  mergeRanges: bh,
  rangesOverlap: _h,
  RangeSet: wh,
  cmp: xh,
  Entity: Eh,
  PropModification: Th,
  replacePrefix: Oh,
  add: Sh,
  remove: Ph,
  DexieYProvider: kh
} = Ta;
export {
  su as $,
  ro as A,
  Yf as B,
  Ka as C,
  Is as D,
  Xu as E,
  ia as F,
  Pc as G,
  Kf as H,
  zf as I,
  ma as J,
  Iu as K,
  Mf as L,
  qf as M,
  va as N,
  eh as O,
  Qf as P,
  Ff as Q,
  vo as R,
  la as S,
  Ul as T,
  Vl as U,
  Ou as V,
  mh as W,
  th as X,
  Ta as Y,
  yh as Z,
  Wf as _,
  wt as a,
  Xt as a0,
  Hf as a1,
  Cc as a2,
  Gs as a3,
  Du as a4,
  mo as a5,
  jc as a6,
  Fc as a7,
  on as a8,
  Vf as a9,
  qc as aa,
  Zf as ab,
  Yu as ac,
  Rf as ad,
  Zc as ae,
  Lf as af,
  Jf as ag,
  ar as ah,
  $f as ai,
  El as aj,
  Uf as ak,
  xl as al,
  ja as am,
  Gf as an,
  Af as ao,
  Bf as ap,
  wl as aq,
  ph as ar,
  nh as as,
  Ut as at,
  vh as au,
  Tf as av,
  Sa as b,
  Xf as c,
  Es as d,
  Wt as e,
  Cf as f,
  Tn as g,
  If as h,
  Ie as i,
  En as j,
  Oe as k,
  Xi as l,
  Aa as m,
  tr as n,
  Df as o,
  Ts as p,
  Ca as q,
  Qo as r,
  Nf as s,
  Ma as t,
  mc as u,
  Ge as v,
  Ga as w,
  vt as x,
  Yr as y,
  jf as z
};
