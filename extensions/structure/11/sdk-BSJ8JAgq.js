/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ka(n) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const u of n.split(",")) i[u] = 1;
  return (u) => u in i;
}
const tt = {}, Hr = [], xn = () => {
}, Mu = () => !1, Aa = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // uppercase letter
(n.charCodeAt(2) > 122 || n.charCodeAt(2) < 97), Os = (n) => n.startsWith("onUpdate:"), Ht = Object.assign, Pa = (n, i) => {
  const u = n.indexOf(i);
  u > -1 && n.splice(u, 1);
}, qu = Object.prototype.hasOwnProperty, Je = (n, i) => qu.call(n, i), Se = Array.isArray, Gr = (n) => Yi(n) === "[object Map]", Ss = (n) => Yi(n) === "[object Set]", za = (n) => Yi(n) === "[object Date]", Ie = (n) => typeof n == "function", Et = (n) => typeof n == "string", En = (n) => typeof n == "symbol", rt = (n) => n !== null && typeof n == "object", ks = (n) => (rt(n) || Ie(n)) && Ie(n.then) && Ie(n.catch), As = Object.prototype.toString, Yi = (n) => As.call(n), Lu = (n) => Yi(n).slice(8, -1), Ps = (n) => Yi(n) === "[object Object]", Ca = (n) => Et(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, Ki = /* @__PURE__ */ ka(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), po = (n) => {
  const i = /* @__PURE__ */ Object.create(null);
  return (u) => i[u] || (i[u] = n(u));
}, Uu = /-(\w)/g, Tn = po(
  (n) => n.replace(Uu, (i, u) => u ? u.toUpperCase() : "")
), Vu = /\B([A-Z])/g, Xi = po(
  (n) => n.replace(Vu, "-$1").toLowerCase()
), Ia = po((n) => n.charAt(0).toUpperCase() + n.slice(1)), zo = po(
  (n) => n ? `on${Ia(n)}` : ""
), Jn = (n, i) => !Object.is(n, i), Qo = (n, ...i) => {
  for (let u = 0; u < n.length; u++)
    n[u](...i);
}, sa = (n, i, u, c = !1) => {
  Object.defineProperty(n, i, {
    configurable: !0,
    enumerable: !1,
    writable: c,
    value: u
  });
}, $u = (n) => {
  const i = parseFloat(n);
  return isNaN(i) ? n : i;
};
let Qa;
const yo = () => Qa || (Qa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function mo(n) {
  if (Se(n)) {
    const i = {};
    for (let u = 0; u < n.length; u++) {
      const c = n[u], h = Et(c) ? Yu(c) : mo(c);
      if (h)
        for (const p in h)
          i[p] = h[p];
    }
    return i;
  } else if (Et(n) || rt(n))
    return n;
}
const Wu = /;(?![^(]*\))/g, Hu = /:([^]+)/, Gu = /\/\*[^]*?\*\//g;
function Yu(n) {
  const i = {};
  return n.replace(Gu, "").split(Wu).forEach((u) => {
    if (u) {
      const c = u.split(Hu);
      c.length > 1 && (i[c[0].trim()] = c[1].trim());
    }
  }), i;
}
function go(n) {
  let i = "";
  if (Et(n))
    i = n;
  else if (Se(n))
    for (let u = 0; u < n.length; u++) {
      const c = go(n[u]);
      c && (i += c + " ");
    }
  else if (rt(n))
    for (const u in n)
      n[u] && (i += u + " ");
  return i.trim();
}
function Nf(n) {
  if (!n) return null;
  let { class: i, style: u } = n;
  return i && !Et(i) && (n.class = go(i)), u && (n.style = mo(u)), n;
}
const Xu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Df = /* @__PURE__ */ ka(Xu);
function Rf(n) {
  return !!n || n === "";
}
function zu(n, i) {
  if (n.length !== i.length) return !1;
  let u = !0;
  for (let c = 0; u && c < n.length; c++)
    u = Na(n[c], i[c]);
  return u;
}
function Na(n, i) {
  if (n === i) return !0;
  let u = za(n), c = za(i);
  if (u || c)
    return u && c ? n.getTime() === i.getTime() : !1;
  if (u = En(n), c = En(i), u || c)
    return n === i;
  if (u = Se(n), c = Se(i), u || c)
    return u && c ? zu(n, i) : !1;
  if (u = rt(n), c = rt(i), u || c) {
    if (!u || !c)
      return !1;
    const h = Object.keys(n).length, p = Object.keys(i).length;
    if (h !== p)
      return !1;
    for (const O in n) {
      const S = n.hasOwnProperty(O), N = i.hasOwnProperty(O);
      if (S && !N || !S && N || !Na(n[O], i[O]))
        return !1;
    }
  }
  return String(n) === String(i);
}
function Kf(n, i) {
  return n.findIndex((u) => Na(u, i));
}
const Cs = (n) => !!(n && n.__v_isRef === !0), Qu = (n) => Et(n) ? n : n == null ? "" : Se(n) || rt(n) && (n.toString === As || !Ie(n.toString)) ? Cs(n) ? Qu(n.value) : JSON.stringify(n, Is, 2) : String(n), Is = (n, i) => Cs(i) ? Is(n, i.value) : Gr(i) ? {
  [`Map(${i.size})`]: [...i.entries()].reduce(
    (u, [c, h], p) => (u[Jo(c, p) + " =>"] = h, u),
    {}
  )
} : Ss(i) ? {
  [`Set(${i.size})`]: [...i.values()].map((u) => Jo(u))
} : En(i) ? Jo(i) : rt(i) && !Se(i) && !Ps(i) ? String(i) : i, Jo = (n, i = "") => {
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
let It;
class Ns {
  constructor(i = !1) {
    this.detached = i, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = It, !i && It && (this.index = (It.scopes || (It.scopes = [])).push(
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
      const u = It;
      try {
        return It = this, i();
      } finally {
        It = u;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = It, It = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (It = this.prevScope, this.prevScope = void 0);
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
function jf(n) {
  return new Ns(n);
}
function Ds() {
  return It;
}
function Ju(n, i = !1) {
  It && It.cleanups.push(n);
}
let at;
const Zo = /* @__PURE__ */ new WeakSet();
class Rs {
  constructor(i) {
    this.fn = i, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, It && It.active && It.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || js(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ja(this), Fs(this);
    const i = at, u = mn;
    at = this, mn = !0;
    try {
      return this.fn();
    } finally {
      Bs(this), at = i, mn = u, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let i = this.deps; i; i = i.nextDep)
        Ka(i);
      this.deps = this.depsTail = void 0, Ja(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Zo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ua(this) && this.run();
  }
  get dirty() {
    return ua(this);
  }
}
let Ks = 0, ji, Fi;
function js(n, i = !1) {
  if (n.flags |= 8, i) {
    n.next = Fi, Fi = n;
    return;
  }
  n.next = ji, ji = n;
}
function Da() {
  Ks++;
}
function Ra() {
  if (--Ks > 0)
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
function Fs(n) {
  for (let i = n.deps; i; i = i.nextDep)
    i.version = -1, i.prevActiveLink = i.dep.activeLink, i.dep.activeLink = i;
}
function Bs(n) {
  let i, u = n.depsTail, c = u;
  for (; c; ) {
    const h = c.prevDep;
    c.version === -1 ? (c === u && (u = h), Ka(c), Zu(c)) : i = c, c.dep.activeLink = c.prevActiveLink, c.prevActiveLink = void 0, c = h;
  }
  n.deps = i, n.depsTail = u;
}
function ua(n) {
  for (let i = n.deps; i; i = i.nextDep)
    if (i.dep.version !== i.version || i.dep.computed && (Ms(i.dep.computed) || i.dep.version !== i.version))
      return !0;
  return !!n._dirty;
}
function Ms(n) {
  if (n.flags & 4 && !(n.flags & 16) || (n.flags &= -17, n.globalVersion === Vi) || (n.globalVersion = Vi, !n.isSSR && n.flags & 128 && (!n.deps && !n._dirty || !ua(n))))
    return;
  n.flags |= 2;
  const i = n.dep, u = at, c = mn;
  at = n, mn = !0;
  try {
    Fs(n);
    const h = n.fn(n._value);
    (i.version === 0 || Jn(h, n._value)) && (n.flags |= 128, n._value = h, i.version++);
  } catch (h) {
    throw i.version++, h;
  } finally {
    at = u, mn = c, Bs(n), n.flags &= -3;
  }
}
function Ka(n, i = !1) {
  const { dep: u, prevSub: c, nextSub: h } = n;
  if (c && (c.nextSub = h, n.prevSub = void 0), h && (h.prevSub = c, n.nextSub = void 0), u.subs === n && (u.subs = c, !c && u.computed)) {
    u.computed.flags &= -5;
    for (let p = u.computed.deps; p; p = p.nextDep)
      Ka(p, !0);
  }
  !i && !--u.sc && u.map && u.map.delete(u.key);
}
function Zu(n) {
  const { prevDep: i, nextDep: u } = n;
  i && (i.nextDep = u, n.prevDep = void 0), u && (u.prevDep = i, n.nextDep = void 0);
}
let mn = !0;
const qs = [];
function Zn() {
  qs.push(mn), mn = !1;
}
function er() {
  const n = qs.pop();
  mn = n === void 0 ? !0 : n;
}
function Ja(n) {
  const { cleanup: i } = n;
  if (n.cleanup = void 0, i) {
    const u = at;
    at = void 0;
    try {
      i();
    } finally {
      at = u;
    }
  }
}
let Vi = 0;
class ec {
  constructor(i, u) {
    this.sub = i, this.dep = u, this.version = u.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class vo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(i) {
    this.computed = i, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(i) {
    if (!at || !mn || at === this.computed)
      return;
    let u = this.activeLink;
    if (u === void 0 || u.sub !== at)
      u = this.activeLink = new ec(at, this), at.deps ? (u.prevDep = at.depsTail, at.depsTail.nextDep = u, at.depsTail = u) : at.deps = at.depsTail = u, Ls(u);
    else if (u.version === -1 && (u.version = this.version, u.nextDep)) {
      const c = u.nextDep;
      c.prevDep = u.prevDep, u.prevDep && (u.prevDep.nextDep = c), u.prevDep = at.depsTail, u.nextDep = void 0, at.depsTail.nextDep = u, at.depsTail = u, at.deps === u && (at.deps = c);
    }
    return u;
  }
  trigger(i) {
    this.version++, Vi++, this.notify(i);
  }
  notify(i) {
    Da();
    try {
      for (let u = this.subs; u; u = u.prevSub)
        u.sub.notify() && u.sub.dep.notify();
    } finally {
      Ra();
    }
  }
}
function Ls(n) {
  if (n.dep.sc++, n.sub.flags & 4) {
    const i = n.dep.computed;
    if (i && !n.dep.subs) {
      i.flags |= 20;
      for (let c = i.deps; c; c = c.nextDep)
        Ls(c);
    }
    const u = n.dep.subs;
    u !== n && (n.prevSub = u, u && (u.nextSub = n)), n.dep.subs = n;
  }
}
const ao = /* @__PURE__ */ new WeakMap(), Ur = Symbol(
  ""
), ca = Symbol(
  ""
), $i = Symbol(
  ""
);
function Nt(n, i, u) {
  if (mn && at) {
    let c = ao.get(n);
    c || ao.set(n, c = /* @__PURE__ */ new Map());
    let h = c.get(u);
    h || (c.set(u, h = new vo()), h.map = c, h.key = u), h.track();
  }
}
function zn(n, i, u, c, h, p) {
  const O = ao.get(n);
  if (!O) {
    Vi++;
    return;
  }
  const S = (N) => {
    N && N.trigger();
  };
  if (Da(), i === "clear")
    O.forEach(S);
  else {
    const N = Se(n), $ = N && Ca(u);
    if (N && u === "length") {
      const j = Number(c);
      O.forEach((L, Q) => {
        (Q === "length" || Q === $i || !En(Q) && Q >= j) && S(L);
      });
    } else
      switch ((u !== void 0 || O.has(void 0)) && S(O.get(u)), $ && S(O.get($i)), i) {
        case "add":
          N ? $ && S(O.get("length")) : (S(O.get(Ur)), Gr(n) && S(O.get(ca)));
          break;
        case "delete":
          N || (S(O.get(Ur)), Gr(n) && S(O.get(ca)));
          break;
        case "set":
          Gr(n) && S(O.get(Ur));
          break;
      }
  }
  Ra();
}
function tc(n, i) {
  const u = ao.get(n);
  return u && u.get(i);
}
function $r(n) {
  const i = Qe(n);
  return i === n ? i : (Nt(i, "iterate", $i), an(n) ? i : i.map(Ct));
}
function bo(n) {
  return Nt(n = Qe(n), "iterate", $i), n;
}
const nc = {
  __proto__: null,
  [Symbol.iterator]() {
    return ea(this, Symbol.iterator, Ct);
  },
  concat(...n) {
    return $r(this).concat(
      ...n.map((i) => Se(i) ? $r(i) : i)
    );
  },
  entries() {
    return ea(this, "entries", (n) => (n[1] = Ct(n[1]), n));
  },
  every(n, i) {
    return Xn(this, "every", n, i, void 0, arguments);
  },
  filter(n, i) {
    return Xn(this, "filter", n, i, (u) => u.map(Ct), arguments);
  },
  find(n, i) {
    return Xn(this, "find", n, i, Ct, arguments);
  },
  findIndex(n, i) {
    return Xn(this, "findIndex", n, i, void 0, arguments);
  },
  findLast(n, i) {
    return Xn(this, "findLast", n, i, Ct, arguments);
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
    return $r(this).join(n);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...n) {
    return ta(this, "lastIndexOf", n);
  },
  map(n, i) {
    return Xn(this, "map", n, i, void 0, arguments);
  },
  pop() {
    return Ni(this, "pop");
  },
  push(...n) {
    return Ni(this, "push", n);
  },
  reduce(n, ...i) {
    return Za(this, "reduce", n, i);
  },
  reduceRight(n, ...i) {
    return Za(this, "reduceRight", n, i);
  },
  shift() {
    return Ni(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(n, i) {
    return Xn(this, "some", n, i, void 0, arguments);
  },
  splice(...n) {
    return Ni(this, "splice", n);
  },
  toReversed() {
    return $r(this).toReversed();
  },
  toSorted(n) {
    return $r(this).toSorted(n);
  },
  toSpliced(...n) {
    return $r(this).toSpliced(...n);
  },
  unshift(...n) {
    return Ni(this, "unshift", n);
  },
  values() {
    return ea(this, "values", Ct);
  }
};
function ea(n, i, u) {
  const c = bo(n), h = c[i]();
  return c !== n && !an(n) && (h._next = h.next, h.next = () => {
    const p = h._next();
    return p.value && (p.value = u(p.value)), p;
  }), h;
}
const rc = Array.prototype;
function Xn(n, i, u, c, h, p) {
  const O = bo(n), S = O !== n && !an(n), N = O[i];
  if (N !== rc[i]) {
    const L = N.apply(n, p);
    return S ? Ct(L) : L;
  }
  let $ = u;
  O !== n && (S ? $ = function(L, Q) {
    return u.call(this, Ct(L), Q, n);
  } : u.length > 2 && ($ = function(L, Q) {
    return u.call(this, L, Q, n);
  }));
  const j = N.call(O, $, c);
  return S && h ? h(j) : j;
}
function Za(n, i, u, c) {
  const h = bo(n);
  let p = u;
  return h !== n && (an(n) ? u.length > 3 && (p = function(O, S, N) {
    return u.call(this, O, S, N, n);
  }) : p = function(O, S, N) {
    return u.call(this, O, Ct(S), N, n);
  }), h[i](p, ...c);
}
function ta(n, i, u) {
  const c = Qe(n);
  Nt(c, "iterate", $i);
  const h = c[i](...u);
  return (h === -1 || h === !1) && qa(u[0]) ? (u[0] = Qe(u[0]), c[i](...u)) : h;
}
function Ni(n, i, u = []) {
  Zn(), Da();
  const c = Qe(n)[i].apply(n, u);
  return Ra(), er(), c;
}
const ic = /* @__PURE__ */ ka("__proto__,__v_isRef,__isVue"), Us = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(En)
);
function oc(n) {
  En(n) || (n = String(n));
  const i = Qe(this);
  return Nt(i, "has", n), i.hasOwnProperty(n);
}
class Vs {
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
      return c === (h ? p ? yc : Gs : p ? Hs : Ws).get(i) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(i) === Object.getPrototypeOf(c) ? i : void 0;
    const O = Se(i);
    if (!h) {
      let N;
      if (O && (N = nc[u]))
        return N;
      if (u === "hasOwnProperty")
        return oc;
    }
    const S = Reflect.get(
      i,
      u,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      bt(i) ? i : c
    );
    return (En(u) ? Us.has(u) : ic(u)) || (h || Nt(i, "get", u), p) ? S : bt(S) ? O && Ca(u) ? S : S.value : rt(S) ? h ? Ba(S) : Fa(S) : S;
  }
}
class $s extends Vs {
  constructor(i = !1) {
    super(!1, i);
  }
  set(i, u, c, h) {
    let p = i[u];
    if (!this._isShallow) {
      const N = sr(p);
      if (!an(c) && !sr(c) && (p = Qe(p), c = Qe(c)), !Se(i) && bt(p) && !bt(c))
        return N ? !1 : (p.value = c, !0);
    }
    const O = Se(i) && Ca(u) ? Number(u) < i.length : Je(i, u), S = Reflect.set(
      i,
      u,
      c,
      bt(i) ? i : h
    );
    return i === Qe(h) && (O ? Jn(c, p) && zn(i, "set", u, c) : zn(i, "add", u, c)), S;
  }
  deleteProperty(i, u) {
    const c = Je(i, u);
    i[u];
    const h = Reflect.deleteProperty(i, u);
    return h && c && zn(i, "delete", u, void 0), h;
  }
  has(i, u) {
    const c = Reflect.has(i, u);
    return (!En(u) || !Us.has(u)) && Nt(i, "has", u), c;
  }
  ownKeys(i) {
    return Nt(
      i,
      "iterate",
      Se(i) ? "length" : Ur
    ), Reflect.ownKeys(i);
  }
}
class ac extends Vs {
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
const sc = /* @__PURE__ */ new $s(), uc = /* @__PURE__ */ new ac(), cc = /* @__PURE__ */ new $s(!0);
const la = (n) => n, Ji = (n) => Reflect.getPrototypeOf(n);
function lc(n, i, u) {
  return function(...c) {
    const h = this.__v_raw, p = Qe(h), O = Gr(p), S = n === "entries" || n === Symbol.iterator && O, N = n === "keys" && O, $ = h[n](...c), j = u ? la : i ? so : Ct;
    return !i && Nt(
      p,
      "iterate",
      N ? ca : Ur
    ), {
      // iterator protocol
      next() {
        const { value: L, done: Q } = $.next();
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
function fc(n, i) {
  const u = {
    get(h) {
      const p = this.__v_raw, O = Qe(p), S = Qe(h);
      n || (Jn(h, S) && Nt(O, "get", h), Nt(O, "get", S));
      const { has: N } = Ji(O), $ = i ? la : n ? so : Ct;
      if (N.call(O, h))
        return $(p.get(h));
      if (N.call(O, S))
        return $(p.get(S));
      p !== O && p.get(h);
    },
    get size() {
      const h = this.__v_raw;
      return !n && Nt(Qe(h), "iterate", Ur), Reflect.get(h, "size", h);
    },
    has(h) {
      const p = this.__v_raw, O = Qe(p), S = Qe(h);
      return n || (Jn(h, S) && Nt(O, "has", h), Nt(O, "has", S)), h === S ? p.has(h) : p.has(h) || p.has(S);
    },
    forEach(h, p) {
      const O = this, S = O.__v_raw, N = Qe(S), $ = i ? la : n ? so : Ct;
      return !n && Nt(N, "iterate", Ur), S.forEach((j, L) => h.call(p, $(j), $(L), O));
    }
  };
  return Ht(
    u,
    n ? {
      add: Zi("add"),
      set: Zi("set"),
      delete: Zi("delete"),
      clear: Zi("clear")
    } : {
      add(h) {
        !i && !an(h) && !sr(h) && (h = Qe(h));
        const p = Qe(this);
        return Ji(p).has.call(p, h) || (p.add(h), zn(p, "add", h, h)), this;
      },
      set(h, p) {
        !i && !an(p) && !sr(p) && (p = Qe(p));
        const O = Qe(this), { has: S, get: N } = Ji(O);
        let $ = S.call(O, h);
        $ || (h = Qe(h), $ = S.call(O, h));
        const j = N.call(O, h);
        return O.set(h, p), $ ? Jn(p, j) && zn(O, "set", h, p) : zn(O, "add", h, p), this;
      },
      delete(h) {
        const p = Qe(this), { has: O, get: S } = Ji(p);
        let N = O.call(p, h);
        N || (h = Qe(h), N = O.call(p, h)), S && S.call(p, h);
        const $ = p.delete(h);
        return N && zn(p, "delete", h, void 0), $;
      },
      clear() {
        const h = Qe(this), p = h.size !== 0, O = h.clear();
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
    u[h] = lc(h, n, i);
  }), u;
}
function ja(n, i) {
  const u = fc(n, i);
  return (c, h, p) => h === "__v_isReactive" ? !n : h === "__v_isReadonly" ? n : h === "__v_raw" ? c : Reflect.get(
    Je(u, h) && h in c ? u : c,
    h,
    p
  );
}
const hc = {
  get: /* @__PURE__ */ ja(!1, !1)
}, dc = {
  get: /* @__PURE__ */ ja(!1, !0)
}, pc = {
  get: /* @__PURE__ */ ja(!0, !1)
};
const Ws = /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ new WeakMap(), Gs = /* @__PURE__ */ new WeakMap(), yc = /* @__PURE__ */ new WeakMap();
function mc(n) {
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
function gc(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : mc(Lu(n));
}
function Fa(n) {
  return sr(n) ? n : Ma(
    n,
    !1,
    sc,
    hc,
    Ws
  );
}
function vc(n) {
  return Ma(
    n,
    !1,
    cc,
    dc,
    Hs
  );
}
function Ba(n) {
  return Ma(
    n,
    !0,
    uc,
    pc,
    Gs
  );
}
function Ma(n, i, u, c, h) {
  if (!rt(n) || n.__v_raw && !(i && n.__v_isReactive))
    return n;
  const p = gc(n);
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
function qa(n) {
  return n ? !!n.__v_raw : !1;
}
function Qe(n) {
  const i = n && n.__v_raw;
  return i ? Qe(i) : n;
}
function bc(n) {
  return !Je(n, "__v_skip") && Object.isExtensible(n) && sa(n, "__v_skip", !0), n;
}
const Ct = (n) => rt(n) ? Fa(n) : n, so = (n) => rt(n) ? Ba(n) : n;
function bt(n) {
  return n ? n.__v_isRef === !0 : !1;
}
function La(n) {
  return Ys(n, !1);
}
function fa(n) {
  return Ys(n, !0);
}
function Ys(n, i) {
  return bt(n) ? n : new _c(n, i);
}
class _c {
  constructor(i, u) {
    this.dep = new vo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = u ? i : Qe(i), this._value = u ? i : Ct(i), this.__v_isShallow = u;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(i) {
    const u = this._rawValue, c = this.__v_isShallow || an(i) || sr(i);
    i = c ? i : Qe(i), Jn(i, u) && (this._rawValue = i, this._value = c ? i : Ct(i), this.dep.trigger());
  }
}
function Xs(n) {
  return bt(n) ? n.value : n;
}
function ar(n) {
  return Ie(n) ? n() : Xs(n);
}
const wc = {
  get: (n, i, u) => i === "__v_raw" ? n : Xs(Reflect.get(n, i, u)),
  set: (n, i, u, c) => {
    const h = n[i];
    return bt(h) && !bt(u) ? (h.value = u, !0) : Reflect.set(n, i, u, c);
  }
};
function zs(n) {
  return Yr(n) ? n : new Proxy(n, wc);
}
class xc {
  constructor(i) {
    this.__v_isRef = !0, this._value = void 0;
    const u = this.dep = new vo(), { get: c, set: h } = i(u.track.bind(u), u.trigger.bind(u));
    this._get = c, this._set = h;
  }
  get value() {
    return this._value = this._get();
  }
  set value(i) {
    this._set(i);
  }
}
function Ff(n) {
  return new xc(n);
}
function Bf(n) {
  const i = Se(n) ? new Array(n.length) : {};
  for (const u in n)
    i[u] = Qs(n, u);
  return i;
}
class Ec {
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
    return tc(Qe(this._object), this._key);
  }
}
class Tc {
  constructor(i) {
    this._getter = i, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Mf(n, i, u) {
  return bt(n) ? n : Ie(n) ? new Tc(n) : rt(n) && arguments.length > 1 ? Qs(n, i, u) : La(n);
}
function Qs(n, i, u) {
  const c = n[i];
  return bt(c) ? c : new Ec(n, i, u);
}
class Oc {
  constructor(i, u, c) {
    this.fn = i, this.setter = u, this._value = void 0, this.dep = new vo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Vi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !u, this.isSSR = c;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    at !== this)
      return js(this, !0), !0;
  }
  get value() {
    const i = this.dep.track();
    return Ms(this), i && (i.version = this.dep.version), this._value;
  }
  set value(i) {
    this.setter && this.setter(i);
  }
}
function Sc(n, i, u = !1) {
  let c, h;
  return Ie(n) ? c = n : (c = n.get, h = n.set), new Oc(c, h, u);
}
const eo = {}, uo = /* @__PURE__ */ new WeakMap();
let Lr;
function kc(n, i = !1, u = Lr) {
  if (u) {
    let c = uo.get(u);
    c || uo.set(u, c = []), c.push(n);
  }
}
function Ac(n, i, u = tt) {
  const { immediate: c, deep: h, once: p, scheduler: O, augmentJob: S, call: N } = u, $ = (fe) => h ? fe : an(fe) || h === !1 || h === 0 ? Qn(fe, 1) : Qn(fe);
  let j, L, Q, ae, he = !1, de = !1;
  if (bt(n) ? (L = () => n.value, he = an(n)) : Yr(n) ? (L = () => $(n), he = !0) : Se(n) ? (de = !0, he = n.some((fe) => Yr(fe) || an(fe)), L = () => n.map((fe) => {
    if (bt(fe))
      return fe.value;
    if (Yr(fe))
      return $(fe);
    if (Ie(fe))
      return N ? N(fe, 2) : fe();
  })) : Ie(n) ? i ? L = N ? () => N(n, 2) : n : L = () => {
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
      return N ? N(n, 3, [ae]) : n(ae);
    } finally {
      Lr = fe;
    }
  } : L = xn, i && h) {
    const fe = L, Me = h === !0 ? 1 / 0 : h;
    L = () => Qn(fe(), Me);
  }
  const $e = Ds(), Ne = () => {
    j.stop(), $e && $e.active && Pa($e.effects, j);
  };
  if (p && i) {
    const fe = i;
    i = (...Me) => {
      fe(...Me), Ne();
    };
  }
  let Be = de ? new Array(n.length).fill(eo) : eo;
  const Ve = (fe) => {
    if (!(!(j.flags & 1) || !j.dirty && !fe))
      if (i) {
        const Me = j.run();
        if (h || he || (de ? Me.some((Re, ee) => Jn(Re, Be[ee])) : Jn(Me, Be))) {
          Q && Q();
          const Re = Lr;
          Lr = j;
          try {
            const ee = [
              Me,
              // pass undefined as the old value when it's changed for the first time
              Be === eo ? void 0 : de && Be[0] === eo ? [] : Be,
              ae
            ];
            Be = Me, N ? N(i, 3, ee) : (
              // @ts-expect-error
              i(...ee)
            );
          } finally {
            Lr = Re;
          }
        }
      } else
        j.run();
  };
  return S && S(Ve), j = new Rs(L), j.scheduler = O ? () => O(Ve, !1) : Ve, ae = (fe) => kc(fe, !1, j), Q = j.onStop = () => {
    const fe = uo.get(j);
    if (fe) {
      if (N)
        N(fe, 4);
      else
        for (const Me of fe) Me();
      uo.delete(j);
    }
  }, i ? c ? Ve(!0) : Be = j.run() : O ? O(Ve.bind(null, !0), !0) : j.run(), Ne.pause = j.pause.bind(j), Ne.resume = j.resume.bind(j), Ne.stop = Ne, Ne;
}
function Qn(n, i = 1 / 0, u) {
  if (i <= 0 || !rt(n) || n.__v_skip || (u = u || /* @__PURE__ */ new Set(), u.has(n)))
    return n;
  if (u.add(n), i--, bt(n))
    Qn(n.value, i, u);
  else if (Se(n))
    for (let c = 0; c < n.length; c++)
      Qn(n[c], i, u);
  else if (Ss(n) || Gr(n))
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
    return h && ks(h) && h.catch((p) => {
      _o(p, i, u);
    }), h;
  }
  if (Se(n)) {
    const h = [];
    for (let p = 0; p < n.length; p++)
      h.push(tr(n[p], i, u, c));
    return h;
  }
}
function _o(n, i, u, c = !0) {
  const h = i ? i.vnode : null, { errorHandler: p, throwUnhandledErrorInProduction: O } = i && i.appContext.config || tt;
  if (i) {
    let S = i.parent;
    const N = i.proxy, $ = `https://vuejs.org/error-reference/#runtime-${u}`;
    for (; S; ) {
      const j = S.ec;
      if (j) {
        for (let L = 0; L < j.length; L++)
          if (j[L](n, N, $) === !1)
            return;
      }
      S = S.parent;
    }
    if (p) {
      Zn(), zi(p, null, 10, [
        n,
        N,
        $
      ]), er();
      return;
    }
  }
  Pc(n, u, h, c, O);
}
function Pc(n, i, u, c = !0, h = !1) {
  if (h)
    throw n;
  console.error(n);
}
const $t = [];
let _n = -1;
const Xr = [];
let ir = null, Wr = 0;
const Js = /* @__PURE__ */ Promise.resolve();
let co = null;
function Cc(n) {
  const i = co || Js;
  return n ? i.then(this ? n.bind(this) : n) : i;
}
function Ic(n) {
  let i = _n + 1, u = $t.length;
  for (; i < u; ) {
    const c = i + u >>> 1, h = $t[c], p = Wi(h);
    p < n || p === n && h.flags & 2 ? i = c + 1 : u = c;
  }
  return i;
}
function Ua(n) {
  if (!(n.flags & 1)) {
    const i = Wi(n), u = $t[$t.length - 1];
    !u || // fast path when the job id is larger than the tail
    !(n.flags & 2) && i >= Wi(u) ? $t.push(n) : $t.splice(Ic(i), 0, n), n.flags |= 1, Zs();
  }
}
function Zs() {
  co || (co = Js.then(tu));
}
function Nc(n) {
  Se(n) ? Xr.push(...n) : ir && n.id === -1 ? ir.splice(Wr + 1, 0, n) : n.flags & 1 || (Xr.push(n), n.flags |= 1), Zs();
}
function es(n, i, u = _n + 1) {
  for (; u < $t.length; u++) {
    const c = $t[u];
    if (c && c.flags & 2) {
      if (n && c.id !== n.uid)
        continue;
      $t.splice(u, 1), u--, c.flags & 4 && (c.flags &= -2), c(), c.flags & 4 || (c.flags &= -2);
    }
  }
}
function eu(n) {
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
function tu(n) {
  try {
    for (_n = 0; _n < $t.length; _n++) {
      const i = $t[_n];
      i && !(i.flags & 8) && (i.flags & 4 && (i.flags &= -2), zi(
        i,
        i.i,
        i.i ? 15 : 14
      ), i.flags & 4 || (i.flags &= -2));
    }
  } finally {
    for (; _n < $t.length; _n++) {
      const i = $t[_n];
      i && (i.flags &= -2);
    }
    _n = -1, $t.length = 0, eu(), co = null, ($t.length || Xr.length) && tu();
  }
}
let vt = null, nu = null;
function lo(n) {
  const i = vt;
  return vt = n, nu = n && n.type.__scopeId || null, i;
}
function Dc(n, i = vt, u) {
  if (!i || n._n)
    return n;
  const c = (...h) => {
    c._d && ds(-1);
    const p = lo(i);
    let O;
    try {
      O = n(...h);
    } finally {
      lo(p), c._d && ds(1);
    }
    return O;
  };
  return c._n = !0, c._c = !0, c._d = !0, c;
}
function qf(n, i) {
  if (vt === null)
    return n;
  const u = To(vt), c = n.dirs || (n.dirs = []);
  for (let h = 0; h < i.length; h++) {
    let [p, O, S, N = tt] = i[h];
    p && (Ie(p) && (p = {
      mounted: p,
      updated: p
    }), p.deep && Qn(O), c.push({
      dir: p,
      instance: u,
      value: O,
      oldValue: void 0,
      arg: S,
      modifiers: N
    }));
  }
  return n;
}
function Mr(n, i, u, c) {
  const h = n.dirs, p = i && i.dirs;
  for (let O = 0; O < h.length; O++) {
    const S = h[O];
    p && (S.oldValue = p[O].value);
    let N = S.dir[c];
    N && (Zn(), tr(N, u, 8, [
      n.el,
      S,
      n,
      i
    ]), er());
  }
}
const ru = Symbol("_vte"), Rc = (n) => n.__isTeleport, Bi = (n) => n && (n.disabled || n.disabled === ""), ts = (n) => n && (n.defer || n.defer === ""), ns = (n) => typeof SVGElement < "u" && n instanceof SVGElement, rs = (n) => typeof MathMLElement == "function" && n instanceof MathMLElement, ha = (n, i) => {
  const u = n && n.to;
  return Et(u) ? i ? i(u) : null : u;
}, iu = {
  name: "Teleport",
  __isTeleport: !0,
  process(n, i, u, c, h, p, O, S, N, $) {
    const {
      mc: j,
      pc: L,
      pbc: Q,
      o: { insert: ae, querySelector: he, createText: de, createComment: $e }
    } = $, Ne = Bi(i.props);
    let { shapeFlag: Be, children: Ve, dynamicChildren: fe } = i;
    if (n == null) {
      const Me = i.el = de(""), Re = i.anchor = de("");
      ae(Me, u, c), ae(Re, u, c);
      const ee = (K, xe) => {
        Be & 16 && (h && h.isCE && (h.ce._teleportTarget = K), j(
          Ve,
          K,
          xe,
          h,
          p,
          O,
          S,
          N
        ));
      }, ne = () => {
        const K = i.target = ha(i.props, he), xe = ou(K, i, de, ae);
        K && (O !== "svg" && ns(K) ? O = "svg" : O !== "mathml" && rs(K) && (O = "mathml"), Ne || (ee(K, xe), no(i, !1)));
      };
      Ne && (ee(u, Re), no(i, !0)), ts(i.props) ? (i.el.__isMounted = !1, Ut(() => {
        ne(), delete i.el.__isMounted;
      }, p)) : ne();
    } else {
      if (ts(i.props) && n.el.__isMounted === !1) {
        Ut(() => {
          iu.process(
            n,
            i,
            u,
            c,
            h,
            p,
            O,
            S,
            N,
            $
          );
        }, p);
        return;
      }
      i.el = n.el, i.targetStart = n.targetStart;
      const Me = i.anchor = n.anchor, Re = i.target = n.target, ee = i.targetAnchor = n.targetAnchor, ne = Bi(n.props), K = ne ? u : Re, xe = ne ? Me : ee;
      if (O === "svg" || ns(Re) ? O = "svg" : (O === "mathml" || rs(Re)) && (O = "mathml"), fe ? (Q(
        n.dynamicChildren,
        fe,
        K,
        h,
        p,
        O,
        S
      ), Ha(n, i, !0)) : N || L(
        n,
        i,
        K,
        xe,
        h,
        p,
        O,
        S,
        !1
      ), Ne)
        ne ? i.props && n.props && i.props.to !== n.props.to && (i.props.to = n.props.to) : to(
          i,
          u,
          Me,
          $,
          1
        );
      else if ((i.props && i.props.to) !== (n.props && n.props.to)) {
        const Ke = i.target = ha(
          i.props,
          he
        );
        Ke && to(
          i,
          Ke,
          null,
          $,
          0
        );
      } else ne && to(
        i,
        Re,
        ee,
        $,
        1
      );
      no(i, Ne);
    }
  },
  remove(n, i, u, { um: c, o: { remove: h } }, p) {
    const {
      shapeFlag: O,
      children: S,
      anchor: N,
      targetStart: $,
      targetAnchor: j,
      target: L,
      props: Q
    } = n;
    if (L && (h($), h(j)), p && h(N), O & 16) {
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
  hydrate: Kc
};
function to(n, i, u, { o: { insert: c }, m: h }, p = 2) {
  p === 0 && c(n.targetAnchor, i, u);
  const { el: O, anchor: S, shapeFlag: N, children: $, props: j } = n, L = p === 2;
  if (L && c(O, i, u), (!L || Bi(j)) && N & 16)
    for (let Q = 0; Q < $.length; Q++)
      h(
        $[Q],
        i,
        u,
        2
      );
  L && c(S, i, u);
}
function Kc(n, i, u, c, h, p, {
  o: { nextSibling: O, parentNode: S, querySelector: N, insert: $, createText: j }
}, L) {
  const Q = i.target = ha(
    i.props,
    N
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
        i.targetAnchor || ou(Q, i, j, $), L(
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
const Lf = iu;
function no(n, i) {
  const u = n.ctx;
  if (u && u.ut) {
    let c, h;
    for (i ? (c = n.el, h = n.anchor) : (c = n.targetStart, h = n.targetAnchor); c && c !== h; )
      c.nodeType === 1 && c.setAttribute("data-v-owner", u.uid), c = c.nextSibling;
    u.ut();
  }
}
function ou(n, i, u, c) {
  const h = i.targetStart = u(""), p = i.targetAnchor = u("");
  return h[ru] = p, n && (c(h, n), c(p, n)), p;
}
function Va(n, i) {
  n.shapeFlag & 6 && n.component ? (n.transition = i, Va(n.component.subTree, i)) : n.shapeFlag & 128 ? (n.ssContent.transition = i.clone(n.ssContent), n.ssFallback.transition = i.clone(n.ssFallback)) : n.transition = i;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Uf(n, i) {
  return Ie(n) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ht({ name: n.name }, i, { setup: n })
  ) : n;
}
function au(n) {
  n.ids = [n.ids[0] + n.ids[2]++ + "-", 0, 0];
}
function Vf(n) {
  const i = Ru(), u = fa(null);
  if (i) {
    const h = i.refs === tt ? i.refs = {} : i.refs;
    Object.defineProperty(h, n, {
      enumerable: !0,
      get: () => u.value,
      set: (p) => u.value = p
    });
  }
  return u;
}
function Mi(n, i, u, c, h = !1) {
  if (Se(n)) {
    n.forEach(
      (he, de) => Mi(
        he,
        i && (Se(i) ? i[de] : i),
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
  const p = c.shapeFlag & 4 ? To(c.component) : c.el, O = h ? null : p, { i: S, r: N } = n, $ = i && i.r, j = S.refs === tt ? S.refs = {} : S.refs, L = S.setupState, Q = Qe(L), ae = L === tt ? () => !1 : (he) => Je(Q, he);
  if ($ != null && $ !== N && (Et($) ? (j[$] = null, ae($) && (L[$] = null)) : bt($) && ($.value = null)), Ie(N))
    zi(N, S, 12, [O, j]);
  else {
    const he = Et(N), de = bt(N);
    if (he || de) {
      const $e = () => {
        if (n.f) {
          const Ne = he ? ae(N) ? L[N] : j[N] : N.value;
          h ? Se(Ne) && Pa(Ne, p) : Se(Ne) ? Ne.includes(p) || Ne.push(p) : he ? (j[N] = [p], ae(N) && (L[N] = j[N])) : (N.value = [p], n.k && (j[n.k] = N.value));
        } else he ? (j[N] = O, ae(N) && (L[N] = O)) : de && (N.value = O, n.k && (j[n.k] = O));
      };
      O ? ($e.id = -1, Ut($e, u)) : $e();
    }
  }
}
yo().requestIdleCallback;
yo().cancelIdleCallback;
const zr = (n) => !!n.type.__asyncLoader, su = (n) => n.type.__isKeepAlive;
function jc(n, i) {
  uu(n, "a", i);
}
function Fc(n, i) {
  uu(n, "da", i);
}
function uu(n, i, u = xt) {
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
      su(h.parent.vnode) && Bc(c, i, u, h), h = h.parent;
  }
}
function Bc(n, i, u, c) {
  const h = wo(
    i,
    n,
    c,
    !0
    /* prepend */
  );
  cu(() => {
    Pa(c[i], h);
  }, u);
}
function wo(n, i, u = xt, c = !1) {
  if (u) {
    const h = u[n] || (u[n] = []), p = i.__weh || (i.__weh = (...O) => {
      Zn();
      const S = Qi(u), N = tr(i, u, n, O);
      return S(), er(), N;
    });
    return c ? h.unshift(p) : h.push(p), p;
  }
}
const rr = (n) => (i, u = xt) => {
  (!Gi || n === "sp") && wo(n, (...c) => i(...c), u);
}, Mc = rr("bm"), qc = rr("m"), Lc = rr(
  "bu"
), Uc = rr("u"), Vc = rr(
  "bum"
), cu = rr("um"), $c = rr(
  "sp"
), Wc = rr("rtg"), Hc = rr("rtc");
function Gc(n, i = xt) {
  wo("ec", n, i);
}
const lu = "components";
function $f(n, i) {
  return hu(lu, n, !0, i) || n;
}
const fu = Symbol.for("v-ndc");
function Wf(n) {
  return Et(n) ? hu(lu, n, !1) || n : n || fu;
}
function hu(n, i, u = !0, c = !1) {
  const h = vt || xt;
  if (h) {
    const p = h.type;
    {
      const S = Dl(
        p,
        !1
      );
      if (S && (S === i || S === Tn(i) || S === Ia(Tn(i))))
        return p;
    }
    const O = (
      // local registration
      // check instance[type] first which is resolved for options API
      is(h[n] || p[n], i) || // global registration
      is(h.appContext[n], i)
    );
    return !O && c ? p : O;
  }
}
function is(n, i) {
  return n && (n[i] || n[Tn(i)] || n[Ia(Tn(i))]);
}
function Hf(n, i, u, c) {
  let h;
  const p = u && u[c], O = Se(n);
  if (O || Et(n)) {
    const S = O && Yr(n);
    let N = !1, $ = !1;
    S && (N = !an(n), $ = sr(n), n = bo(n)), h = new Array(n.length);
    for (let j = 0, L = n.length; j < L; j++)
      h[j] = i(
        N ? $ ? so(Ct(n[j])) : Ct(n[j]) : n[j],
        j,
        void 0,
        p && p[j]
      );
  } else if (typeof n == "number") {
    h = new Array(n);
    for (let S = 0; S < n; S++)
      h[S] = i(S + 1, S, void 0, p && p[S]);
  } else if (rt(n))
    if (n[Symbol.iterator])
      h = Array.from(
        n,
        (S, N) => i(S, N, void 0, p && p[N])
      );
    else {
      const S = Object.keys(n);
      h = new Array(S.length);
      for (let N = 0, $ = S.length; N < $; N++) {
        const j = S[N];
        h[N] = i(n[j], j, N, p && p[N]);
      }
    }
  else
    h = [];
  return u && (u[c] = h), h;
}
function Gf(n, i, u = {}, c, h) {
  if (vt.ce || vt.parent && zr(vt.parent) && vt.parent.ce)
    return i !== "default" && (u.name = i), ga(), va(
      on,
      null,
      [Xt("slot", u, c && c())],
      64
    );
  let p = n[i];
  p && p._c && (p._d = !1), ga();
  const O = p && du(p(u)), S = u.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  O && O.key, N = va(
    on,
    {
      key: (S && !En(S) ? S : `_${i}`) + // #7256 force differentiate fallback content from actual content
      (!O && c ? "_fb" : "")
    },
    O || (c ? c() : []),
    O && n._ === 1 ? 64 : -2
  );
  return N.scopeId && (N.slotScopeIds = [N.scopeId + "-s"]), p && p._c && (p._d = !0), N;
}
function du(n) {
  return n.some((i) => Hi(i) ? !(i.type === nr || i.type === on && !du(i.children)) : !0) ? n : null;
}
const da = (n) => n ? Ku(n) ? To(n) : da(n.parent) : null, qi = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ht(/* @__PURE__ */ Object.create(null), {
    $: (n) => n,
    $el: (n) => n.vnode.el,
    $data: (n) => n.data,
    $props: (n) => n.props,
    $attrs: (n) => n.attrs,
    $slots: (n) => n.slots,
    $refs: (n) => n.refs,
    $parent: (n) => da(n.parent),
    $root: (n) => da(n.root),
    $host: (n) => n.ce,
    $emit: (n) => n.emit,
    $options: (n) => mu(n),
    $forceUpdate: (n) => n.f || (n.f = () => {
      Ua(n.update);
    }),
    $nextTick: (n) => n.n || (n.n = Cc.bind(n.proxy)),
    $watch: (n) => pl.bind(n)
  })
), na = (n, i) => n !== tt && !n.__isScriptSetup && Je(n, i), Yc = {
  get({ _: n }, i) {
    if (i === "__v_skip")
      return !0;
    const { ctx: u, setupState: c, data: h, props: p, accessCache: O, type: S, appContext: N } = n;
    let $;
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
        if (h !== tt && Je(h, i))
          return O[i] = 2, h[i];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          ($ = n.propsOptions[0]) && Je($, i)
        )
          return O[i] = 3, p[i];
        if (u !== tt && Je(u, i))
          return O[i] = 4, u[i];
        pa && (O[i] = 0);
      }
    }
    const j = qi[i];
    let L, Q;
    if (j)
      return i === "$attrs" && Nt(n.attrs, "get", ""), j(n);
    if (
      // css module (injected by vue-loader)
      (L = S.__cssModules) && (L = L[i])
    )
      return L;
    if (u !== tt && Je(u, i))
      return O[i] = 4, u[i];
    if (
      // global properties
      Q = N.config.globalProperties, Je(Q, i)
    )
      return Q[i];
  },
  set({ _: n }, i, u) {
    const { data: c, setupState: h, ctx: p } = n;
    return na(h, i) ? (h[i] = u, !0) : c !== tt && Je(c, i) ? (c[i] = u, !0) : Je(n.props, i) || i[0] === "$" && i.slice(1) in n ? !1 : (p[i] = u, !0);
  },
  has({
    _: { data: n, setupState: i, accessCache: u, ctx: c, appContext: h, propsOptions: p }
  }, O) {
    let S;
    return !!u[O] || n !== tt && Je(n, O) || na(i, O) || (S = p[0]) && Je(S, O) || Je(c, O) || Je(qi, O) || Je(h.config.globalProperties, O);
  },
  defineProperty(n, i, u) {
    return u.get != null ? n._.accessCache[i] = 0 : Je(u, "value") && this.set(n, i, u.value, null), Reflect.defineProperty(n, i, u);
  }
};
function Yf() {
  return pu().slots;
}
function Xf() {
  return pu().attrs;
}
function pu() {
  const n = Ru();
  return n.setupContext || (n.setupContext = Fu(n));
}
function os(n) {
  return Se(n) ? n.reduce(
    (i, u) => (i[u] = null, i),
    {}
  ) : n;
}
function zf(n, i) {
  const u = {};
  for (const c in n)
    i.includes(c) || Object.defineProperty(u, c, {
      enumerable: !0,
      get: () => n[c]
    });
  return u;
}
let pa = !0;
function Xc(n) {
  const i = mu(n), u = n.proxy, c = n.ctx;
  pa = !1, i.beforeCreate && as(i.beforeCreate, n, "bc");
  const {
    // state
    data: h,
    computed: p,
    methods: O,
    watch: S,
    provide: N,
    inject: $,
    // lifecycle
    created: j,
    beforeMount: L,
    mounted: Q,
    beforeUpdate: ae,
    updated: he,
    activated: de,
    deactivated: $e,
    beforeDestroy: Ne,
    beforeUnmount: Be,
    destroyed: Ve,
    unmounted: fe,
    render: Me,
    renderTracked: Re,
    renderTriggered: ee,
    errorCaptured: ne,
    serverPrefetch: K,
    // public API
    expose: xe,
    inheritAttrs: Ke,
    // assets
    components: be,
    directives: Fe,
    filters: pt
  } = i;
  if ($ && zc($, c, null), O)
    for (const _e in O) {
      const Ae = O[_e];
      Ie(Ae) && (c[_e] = Ae.bind(u));
    }
  if (h) {
    const _e = h.call(u, u);
    rt(_e) && (n.data = Fa(_e));
  }
  if (pa = !0, p)
    for (const _e in p) {
      const Ae = p[_e], st = Ie(Ae) ? Ae.bind(u, u) : Ie(Ae.get) ? Ae.get.bind(u, u) : xn, et = !Ie(Ae) && Ie(Ae.set) ? Ae.set.bind(u) : xn, ct = Xa({
        get: st,
        set: et
      });
      Object.defineProperty(c, _e, {
        enumerable: !0,
        configurable: !0,
        get: () => ct.value,
        set: (_t) => ct.value = _t
      });
    }
  if (S)
    for (const _e in S)
      yu(S[_e], c, u, _e);
  if (N) {
    const _e = Ie(N) ? N.call(u) : N;
    Reflect.ownKeys(_e).forEach((Ae) => {
      nl(Ae, _e[Ae]);
    });
  }
  j && as(j, n, "c");
  function Ye(_e, Ae) {
    Se(Ae) ? Ae.forEach((st) => _e(st.bind(u))) : Ae && _e(Ae.bind(u));
  }
  if (Ye(Mc, L), Ye(qc, Q), Ye(Lc, ae), Ye(Uc, he), Ye(jc, de), Ye(Fc, $e), Ye(Gc, ne), Ye(Hc, Re), Ye(Wc, ee), Ye(Vc, Be), Ye(cu, fe), Ye($c, K), Se(xe))
    if (xe.length) {
      const _e = n.exposed || (n.exposed = {});
      xe.forEach((Ae) => {
        Object.defineProperty(_e, Ae, {
          get: () => u[Ae],
          set: (st) => u[Ae] = st
        });
      });
    } else n.exposed || (n.exposed = {});
  Me && n.render === xn && (n.render = Me), Ke != null && (n.inheritAttrs = Ke), be && (n.components = be), Fe && (n.directives = Fe), K && au(n);
}
function zc(n, i, u = xn) {
  Se(n) && (n = ya(n));
  for (const c in n) {
    const h = n[c];
    let p;
    rt(h) ? "default" in h ? p = ro(
      h.from || c,
      h.default,
      !0
    ) : p = ro(h.from || c) : p = ro(h), bt(p) ? Object.defineProperty(i, c, {
      enumerable: !0,
      configurable: !0,
      get: () => p.value,
      set: (O) => p.value = O
    }) : i[c] = p;
  }
}
function as(n, i, u) {
  tr(
    Se(n) ? n.map((c) => c.bind(i.proxy)) : n.bind(i.proxy),
    i,
    u
  );
}
function yu(n, i, u, c) {
  let h = c.includes(".") ? Au(u, c) : () => u[c];
  if (Et(n)) {
    const p = i[n];
    Ie(p) && ia(h, p);
  } else if (Ie(n))
    ia(h, n.bind(u));
  else if (rt(n))
    if (Se(n))
      n.forEach((p) => yu(p, i, u, c));
    else {
      const p = Ie(n.handler) ? n.handler.bind(u) : i[n.handler];
      Ie(p) && ia(h, p, n);
    }
}
function mu(n) {
  const i = n.type, { mixins: u, extends: c } = i, {
    mixins: h,
    optionsCache: p,
    config: { optionMergeStrategies: O }
  } = n.appContext, S = p.get(i);
  let N;
  return S ? N = S : !h.length && !u && !c ? N = i : (N = {}, h.length && h.forEach(
    ($) => fo(N, $, O, !0)
  ), fo(N, i, O)), rt(i) && p.set(i, N), N;
}
function fo(n, i, u, c = !1) {
  const { mixins: h, extends: p } = i;
  p && fo(n, p, u, !0), h && h.forEach(
    (O) => fo(n, O, u, !0)
  );
  for (const O in i)
    if (!(c && O === "expose")) {
      const S = Qc[O] || u && u[O];
      n[O] = S ? S(n[O], i[O]) : i[O];
    }
  return n;
}
const Qc = {
  data: ss,
  props: us,
  emits: us,
  // objects
  methods: Ri,
  computed: Ri,
  // lifecycle
  beforeCreate: Lt,
  created: Lt,
  beforeMount: Lt,
  mounted: Lt,
  beforeUpdate: Lt,
  updated: Lt,
  beforeDestroy: Lt,
  beforeUnmount: Lt,
  destroyed: Lt,
  unmounted: Lt,
  activated: Lt,
  deactivated: Lt,
  errorCaptured: Lt,
  serverPrefetch: Lt,
  // assets
  components: Ri,
  directives: Ri,
  // watch
  watch: Zc,
  // provide / inject
  provide: ss,
  inject: Jc
};
function ss(n, i) {
  return i ? n ? function() {
    return Ht(
      Ie(n) ? n.call(this, this) : n,
      Ie(i) ? i.call(this, this) : i
    );
  } : i : n;
}
function Jc(n, i) {
  return Ri(ya(n), ya(i));
}
function ya(n) {
  if (Se(n)) {
    const i = {};
    for (let u = 0; u < n.length; u++)
      i[n[u]] = n[u];
    return i;
  }
  return n;
}
function Lt(n, i) {
  return n ? [...new Set([].concat(n, i))] : i;
}
function Ri(n, i) {
  return n ? Ht(/* @__PURE__ */ Object.create(null), n, i) : i;
}
function us(n, i) {
  return n ? Se(n) && Se(i) ? [.../* @__PURE__ */ new Set([...n, ...i])] : Ht(
    /* @__PURE__ */ Object.create(null),
    os(n),
    os(i ?? {})
  ) : i;
}
function Zc(n, i) {
  if (!n) return i;
  if (!i) return n;
  const u = Ht(/* @__PURE__ */ Object.create(null), n);
  for (const c in i)
    u[c] = Lt(n[c], i[c]);
  return u;
}
function gu() {
  return {
    app: null,
    config: {
      isNativeTag: Mu,
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
let el = 0;
function tl(n, i) {
  return function(c, h = null) {
    Ie(c) || (c = Ht({}, c)), h != null && !rt(h) && (h = null);
    const p = gu(), O = /* @__PURE__ */ new WeakSet(), S = [];
    let N = !1;
    const $ = p.app = {
      _uid: el++,
      _component: c,
      _props: h,
      _container: null,
      _context: p,
      _instance: null,
      version: Kl,
      get config() {
        return p.config;
      },
      set config(j) {
      },
      use(j, ...L) {
        return O.has(j) || (j && Ie(j.install) ? (O.add(j), j.install($, ...L)) : Ie(j) && (O.add(j), j($, ...L))), $;
      },
      mixin(j) {
        return p.mixins.includes(j) || p.mixins.push(j), $;
      },
      component(j, L) {
        return L ? (p.components[j] = L, $) : p.components[j];
      },
      directive(j, L) {
        return L ? (p.directives[j] = L, $) : p.directives[j];
      },
      mount(j, L, Q) {
        if (!N) {
          const ae = $._ceVNode || Xt(c, h);
          return ae.appContext = p, Q === !0 ? Q = "svg" : Q === !1 && (Q = void 0), n(ae, j, Q), N = !0, $._container = j, j.__vue_app__ = $, To(ae.component);
        }
      },
      onUnmount(j) {
        S.push(j);
      },
      unmount() {
        N && (tr(
          S,
          $._instance,
          16
        ), n(null, $._container), delete $._container.__vue_app__);
      },
      provide(j, L) {
        return p.provides[j] = L, $;
      },
      runWithContext(j) {
        const L = Vr;
        Vr = $;
        try {
          return j();
        } finally {
          Vr = L;
        }
      }
    };
    return $;
  };
}
let Vr = null;
function nl(n, i) {
  if (xt) {
    let u = xt.provides;
    const c = xt.parent && xt.parent.provides;
    c === u && (u = xt.provides = Object.create(c)), u[n] = i;
  }
}
function ro(n, i, u = !1) {
  const c = xt || vt;
  if (c || Vr) {
    let h = Vr ? Vr._context.provides : c ? c.parent == null || c.ce ? c.vnode.appContext && c.vnode.appContext.provides : c.parent.provides : void 0;
    if (h && n in h)
      return h[n];
    if (arguments.length > 1)
      return u && Ie(i) ? i.call(c && c.proxy) : i;
  }
}
function Qf() {
  return !!(xt || vt || Vr);
}
const vu = {}, bu = () => Object.create(vu), _u = (n) => Object.getPrototypeOf(n) === vu;
function rl(n, i, u, c = !1) {
  const h = {}, p = bu();
  n.propsDefaults = /* @__PURE__ */ Object.create(null), wu(n, i, h, p);
  for (const O in n.propsOptions[0])
    O in h || (h[O] = void 0);
  u ? n.props = c ? h : vc(h) : n.type.props ? n.props = h : n.props = p, n.attrs = p;
}
function il(n, i, u, c) {
  const {
    props: h,
    attrs: p,
    vnode: { patchFlag: O }
  } = n, S = Qe(h), [N] = n.propsOptions;
  let $ = !1;
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
        if (N)
          if (Je(p, Q))
            ae !== p[Q] && (p[Q] = ae, $ = !0);
          else {
            const he = Tn(Q);
            h[he] = ma(
              N,
              S,
              he,
              ae,
              n,
              !1
            );
          }
        else
          ae !== p[Q] && (p[Q] = ae, $ = !0);
      }
    }
  } else {
    wu(n, i, h, p) && ($ = !0);
    let j;
    for (const L in S)
      (!i || // for camelCase
      !Je(i, L) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((j = Xi(L)) === L || !Je(i, j))) && (N ? u && // for camelCase
      (u[L] !== void 0 || // for kebab-case
      u[j] !== void 0) && (h[L] = ma(
        N,
        S,
        L,
        void 0,
        n,
        !0
      )) : delete h[L]);
    if (p !== S)
      for (const L in p)
        (!i || !Je(i, L)) && (delete p[L], $ = !0);
  }
  $ && zn(n.attrs, "set", "");
}
function wu(n, i, u, c) {
  const [h, p] = n.propsOptions;
  let O = !1, S;
  if (i)
    for (let N in i) {
      if (Ki(N))
        continue;
      const $ = i[N];
      let j;
      h && Je(h, j = Tn(N)) ? !p || !p.includes(j) ? u[j] = $ : (S || (S = {}))[j] = $ : xo(n.emitsOptions, N) || (!(N in c) || $ !== c[N]) && (c[N] = $, O = !0);
    }
  if (p) {
    const N = Qe(u), $ = S || tt;
    for (let j = 0; j < p.length; j++) {
      const L = p[j];
      u[L] = ma(
        h,
        N,
        L,
        $[L],
        n,
        !Je($, L)
      );
    }
  }
  return O;
}
function ma(n, i, u, c, h, p) {
  const O = n[u];
  if (O != null) {
    const S = Je(O, "default");
    if (S && c === void 0) {
      const N = O.default;
      if (O.type !== Function && !O.skipFactory && Ie(N)) {
        const { propsDefaults: $ } = h;
        if (u in $)
          c = $[u];
        else {
          const j = Qi(h);
          c = $[u] = N.call(
            null,
            i
          ), j();
        }
      } else
        c = N;
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
const ol = /* @__PURE__ */ new WeakMap();
function xu(n, i, u = !1) {
  const c = u ? ol : i.propsCache, h = c.get(n);
  if (h)
    return h;
  const p = n.props, O = {}, S = [];
  let N = !1;
  if (!Ie(n)) {
    const j = (L) => {
      N = !0;
      const [Q, ae] = xu(L, i, !0);
      Ht(O, Q), ae && S.push(...ae);
    };
    !u && i.mixins.length && i.mixins.forEach(j), n.extends && j(n.extends), n.mixins && n.mixins.forEach(j);
  }
  if (!p && !N)
    return rt(n) && c.set(n, Hr), Hr;
  if (Se(p))
    for (let j = 0; j < p.length; j++) {
      const L = Tn(p[j]);
      cs(L) && (O[L] = tt);
    }
  else if (p)
    for (const j in p) {
      const L = Tn(j);
      if (cs(L)) {
        const Q = p[j], ae = O[L] = Se(Q) || Ie(Q) ? { type: Q } : Ht({}, Q), he = ae.type;
        let de = !1, $e = !0;
        if (Se(he))
          for (let Ne = 0; Ne < he.length; ++Ne) {
            const Be = he[Ne], Ve = Ie(Be) && Be.name;
            if (Ve === "Boolean") {
              de = !0;
              break;
            } else Ve === "String" && ($e = !1);
          }
        else
          de = Ie(he) && he.name === "Boolean";
        ae[
          0
          /* shouldCast */
        ] = de, ae[
          1
          /* shouldCastTrue */
        ] = $e, (de || Je(ae, "default")) && S.push(L);
      }
    }
  const $ = [O, S];
  return rt(n) && c.set(n, $), $;
}
function cs(n) {
  return n[0] !== "$" && !Ki(n);
}
const $a = (n) => n[0] === "_" || n === "$stable", Wa = (n) => Se(n) ? n.map(wn) : [wn(n)], al = (n, i, u) => {
  if (i._n)
    return i;
  const c = Dc((...h) => Wa(i(...h)), u);
  return c._c = !1, c;
}, Eu = (n, i, u) => {
  const c = n._ctx;
  for (const h in n) {
    if ($a(h)) continue;
    const p = n[h];
    if (Ie(p))
      i[h] = al(h, p, c);
    else if (p != null) {
      const O = Wa(p);
      i[h] = () => O;
    }
  }
}, Tu = (n, i) => {
  const u = Wa(i);
  n.slots.default = () => u;
}, Ou = (n, i, u) => {
  for (const c in i)
    (u || !$a(c)) && (n[c] = i[c]);
}, sl = (n, i, u) => {
  const c = n.slots = bu();
  if (n.vnode.shapeFlag & 32) {
    const h = i.__;
    h && sa(c, "__", h, !0);
    const p = i._;
    p ? (Ou(c, i, u), u && sa(c, "_", p, !0)) : Eu(i, c);
  } else i && Tu(n, i);
}, ul = (n, i, u) => {
  const { vnode: c, slots: h } = n;
  let p = !0, O = tt;
  if (c.shapeFlag & 32) {
    const S = i._;
    S ? u && S === 1 ? p = !1 : Ou(h, i, u) : (p = !i.$stable, Eu(i, h)), O = i;
  } else i && (Tu(n, i), O = { default: 1 });
  if (p)
    for (const S in h)
      !$a(S) && O[S] == null && delete h[S];
}, Ut = wl;
function Jf(n) {
  return cl(n);
}
function cl(n, i) {
  const u = yo();
  u.__VUE__ = !0;
  const {
    insert: c,
    remove: h,
    patchProp: p,
    createElement: O,
    createText: S,
    createComment: N,
    setText: $,
    setElementText: j,
    parentNode: L,
    nextSibling: Q,
    setScopeId: ae = xn,
    insertStaticContent: he
  } = n, de = (k, R, Y, z = null, te = null, J = null, se = void 0, ce = null, re = !!R.dynamicChildren) => {
    if (k === R)
      return;
    k && !Di(k, R) && (z = A(k), _t(k, te, J, !0), k = null), R.patchFlag === -2 && (re = !1, R.dynamicChildren = null);
    const { type: Z, ref: ge, shapeFlag: le } = R;
    switch (Z) {
      case Eo:
        $e(k, R, Y, z);
        break;
      case nr:
        Ne(k, R, Y, z);
        break;
      case oa:
        k == null && Be(R, Y, z, se);
        break;
      case on:
        be(
          k,
          R,
          Y,
          z,
          te,
          J,
          se,
          ce,
          re
        );
        break;
      default:
        le & 1 ? Me(
          k,
          R,
          Y,
          z,
          te,
          J,
          se,
          ce,
          re
        ) : le & 6 ? Fe(
          k,
          R,
          Y,
          z,
          te,
          J,
          se,
          ce,
          re
        ) : (le & 64 || le & 128) && Z.process(
          k,
          R,
          Y,
          z,
          te,
          J,
          se,
          ce,
          re,
          M
        );
    }
    ge != null && te ? Mi(ge, k && k.ref, J, R || k, !R) : ge == null && k && k.ref != null && Mi(k.ref, null, J, k, !0);
  }, $e = (k, R, Y, z) => {
    if (k == null)
      c(
        R.el = S(R.children),
        Y,
        z
      );
    else {
      const te = R.el = k.el;
      R.children !== k.children && $(te, R.children);
    }
  }, Ne = (k, R, Y, z) => {
    k == null ? c(
      R.el = N(R.children || ""),
      Y,
      z
    ) : R.el = k.el;
  }, Be = (k, R, Y, z) => {
    [k.el, k.anchor] = he(
      k.children,
      R,
      Y,
      z,
      k.el,
      k.anchor
    );
  }, Ve = ({ el: k, anchor: R }, Y, z) => {
    let te;
    for (; k && k !== R; )
      te = Q(k), c(k, Y, z), k = te;
    c(R, Y, z);
  }, fe = ({ el: k, anchor: R }) => {
    let Y;
    for (; k && k !== R; )
      Y = Q(k), h(k), k = Y;
    h(R);
  }, Me = (k, R, Y, z, te, J, se, ce, re) => {
    R.type === "svg" ? se = "svg" : R.type === "math" && (se = "mathml"), k == null ? Re(
      R,
      Y,
      z,
      te,
      J,
      se,
      ce,
      re
    ) : K(
      k,
      R,
      te,
      J,
      se,
      ce,
      re
    );
  }, Re = (k, R, Y, z, te, J, se, ce) => {
    let re, Z;
    const { props: ge, shapeFlag: le, transition: ve, dirs: we } = k;
    if (re = k.el = O(
      k.type,
      J,
      ge && ge.is,
      ge
    ), le & 8 ? j(re, k.children) : le & 16 && ne(
      k.children,
      re,
      null,
      z,
      te,
      ra(k, J),
      se,
      ce
    ), we && Mr(k, null, z, "created"), ee(re, k, k.scopeId, se, z), ge) {
      for (const De in ge)
        De !== "value" && !Ki(De) && p(re, De, null, ge[De], J, z);
      "value" in ge && p(re, "value", null, ge.value, J), (Z = ge.onVnodeBeforeMount) && bn(Z, z, k);
    }
    we && Mr(k, null, z, "beforeMount");
    const Te = ll(te, ve);
    Te && ve.beforeEnter(re), c(re, R, Y), ((Z = ge && ge.onVnodeMounted) || Te || we) && Ut(() => {
      Z && bn(Z, z, k), Te && ve.enter(re), we && Mr(k, null, z, "mounted");
    }, te);
  }, ee = (k, R, Y, z, te) => {
    if (Y && ae(k, Y), z)
      for (let J = 0; J < z.length; J++)
        ae(k, z[J]);
    if (te) {
      let J = te.subTree;
      if (R === J || Cu(J.type) && (J.ssContent === R || J.ssFallback === R)) {
        const se = te.vnode;
        ee(
          k,
          se,
          se.scopeId,
          se.slotScopeIds,
          te.parent
        );
      }
    }
  }, ne = (k, R, Y, z, te, J, se, ce, re = 0) => {
    for (let Z = re; Z < k.length; Z++) {
      const ge = k[Z] = ce ? or(k[Z]) : wn(k[Z]);
      de(
        null,
        ge,
        R,
        Y,
        z,
        te,
        J,
        se,
        ce
      );
    }
  }, K = (k, R, Y, z, te, J, se) => {
    const ce = R.el = k.el;
    let { patchFlag: re, dynamicChildren: Z, dirs: ge } = R;
    re |= k.patchFlag & 16;
    const le = k.props || tt, ve = R.props || tt;
    let we;
    if (Y && qr(Y, !1), (we = ve.onVnodeBeforeUpdate) && bn(we, Y, R, k), ge && Mr(R, k, Y, "beforeUpdate"), Y && qr(Y, !0), (le.innerHTML && ve.innerHTML == null || le.textContent && ve.textContent == null) && j(ce, ""), Z ? xe(
      k.dynamicChildren,
      Z,
      ce,
      Y,
      z,
      ra(R, te),
      J
    ) : se || Ae(
      k,
      R,
      ce,
      null,
      Y,
      z,
      ra(R, te),
      J,
      !1
    ), re > 0) {
      if (re & 16)
        Ke(ce, le, ve, Y, te);
      else if (re & 2 && le.class !== ve.class && p(ce, "class", null, ve.class, te), re & 4 && p(ce, "style", le.style, ve.style, te), re & 8) {
        const Te = R.dynamicProps;
        for (let De = 0; De < Te.length; De++) {
          const qe = Te[De], it = le[qe], lt = ve[qe];
          (lt !== it || qe === "value") && p(ce, qe, it, lt, te, Y);
        }
      }
      re & 1 && k.children !== R.children && j(ce, R.children);
    } else !se && Z == null && Ke(ce, le, ve, Y, te);
    ((we = ve.onVnodeUpdated) || ge) && Ut(() => {
      we && bn(we, Y, R, k), ge && Mr(R, k, Y, "updated");
    }, z);
  }, xe = (k, R, Y, z, te, J, se) => {
    for (let ce = 0; ce < R.length; ce++) {
      const re = k[ce], Z = R[ce], ge = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        re.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (re.type === on || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Di(re, Z) || // - In the case of a component, it could contain anything.
        re.shapeFlag & 198) ? L(re.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Y
        )
      );
      de(
        re,
        Z,
        ge,
        null,
        z,
        te,
        J,
        se,
        !0
      );
    }
  }, Ke = (k, R, Y, z, te) => {
    if (R !== Y) {
      if (R !== tt)
        for (const J in R)
          !Ki(J) && !(J in Y) && p(
            k,
            J,
            R[J],
            null,
            te,
            z
          );
      for (const J in Y) {
        if (Ki(J)) continue;
        const se = Y[J], ce = R[J];
        se !== ce && J !== "value" && p(k, J, ce, se, te, z);
      }
      "value" in Y && p(k, "value", R.value, Y.value, te);
    }
  }, be = (k, R, Y, z, te, J, se, ce, re) => {
    const Z = R.el = k ? k.el : S(""), ge = R.anchor = k ? k.anchor : S("");
    let { patchFlag: le, dynamicChildren: ve, slotScopeIds: we } = R;
    we && (ce = ce ? ce.concat(we) : we), k == null ? (c(Z, Y, z), c(ge, Y, z), ne(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      R.children || [],
      Y,
      ge,
      te,
      J,
      se,
      ce,
      re
    )) : le > 0 && le & 64 && ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    k.dynamicChildren ? (xe(
      k.dynamicChildren,
      ve,
      Y,
      te,
      J,
      se,
      ce
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (R.key != null || te && R === te.subTree) && Ha(
      k,
      R,
      !0
      /* shallow */
    )) : Ae(
      k,
      R,
      Y,
      ge,
      te,
      J,
      se,
      ce,
      re
    );
  }, Fe = (k, R, Y, z, te, J, se, ce, re) => {
    R.slotScopeIds = ce, k == null ? R.shapeFlag & 512 ? te.ctx.activate(
      R,
      Y,
      z,
      se,
      re
    ) : pt(
      R,
      Y,
      z,
      te,
      J,
      se,
      re
    ) : Ze(k, R, re);
  }, pt = (k, R, Y, z, te, J, se) => {
    const ce = k.component = Pl(
      k,
      z,
      te
    );
    if (su(k) && (ce.ctx.renderer = M), Cl(ce, !1, se), ce.asyncDep) {
      if (te && te.registerDep(ce, Ye, se), !k.el) {
        const re = ce.subTree = Xt(nr);
        Ne(null, re, R, Y);
      }
    } else
      Ye(
        ce,
        k,
        R,
        Y,
        te,
        J,
        se
      );
  }, Ze = (k, R, Y) => {
    const z = R.component = k.component;
    if (bl(k, R, Y))
      if (z.asyncDep && !z.asyncResolved) {
        _e(z, R, Y);
        return;
      } else
        z.next = R, z.update();
    else
      R.el = k.el, z.vnode = R;
  }, Ye = (k, R, Y, z, te, J, se) => {
    const ce = () => {
      if (k.isMounted) {
        let { next: le, bu: ve, u: we, parent: Te, vnode: De } = k;
        {
          const ot = Su(k);
          if (ot) {
            le && (le.el = De.el, _e(k, le, se)), ot.asyncDep.then(() => {
              k.isUnmounted || ce();
            });
            return;
          }
        }
        let qe = le, it;
        qr(k, !1), le ? (le.el = De.el, _e(k, le, se)) : le = De, ve && Qo(ve), (it = le.props && le.props.onVnodeBeforeUpdate) && bn(it, Te, le, De), qr(k, !0);
        const lt = fs(k), yt = k.subTree;
        k.subTree = lt, de(
          yt,
          lt,
          // parent may have changed if it's in a teleport
          L(yt.el),
          // anchor may have changed if it's in a fragment
          A(yt),
          k,
          te,
          J
        ), le.el = lt.el, qe === null && _l(k, lt.el), we && Ut(we, te), (it = le.props && le.props.onVnodeUpdated) && Ut(
          () => bn(it, Te, le, De),
          te
        );
      } else {
        let le;
        const { el: ve, props: we } = R, { bm: Te, m: De, parent: qe, root: it, type: lt } = k, yt = zr(R);
        qr(k, !1), Te && Qo(Te), !yt && (le = we && we.onVnodeBeforeMount) && bn(le, qe, R), qr(k, !0);
        {
          it.ce && // @ts-expect-error _def is private
          it.ce._def.shadowRoot !== !1 && it.ce._injectChildStyle(lt);
          const ot = k.subTree = fs(k);
          de(
            null,
            ot,
            Y,
            z,
            k,
            te,
            J
          ), R.el = ot.el;
        }
        if (De && Ut(De, te), !yt && (le = we && we.onVnodeMounted)) {
          const ot = R;
          Ut(
            () => bn(le, qe, ot),
            te
          );
        }
        (R.shapeFlag & 256 || qe && zr(qe.vnode) && qe.vnode.shapeFlag & 256) && k.a && Ut(k.a, te), k.isMounted = !0, R = Y = z = null;
      }
    };
    k.scope.on();
    const re = k.effect = new Rs(ce);
    k.scope.off();
    const Z = k.update = re.run.bind(re), ge = k.job = re.runIfDirty.bind(re);
    ge.i = k, ge.id = k.uid, re.scheduler = () => Ua(ge), qr(k, !0), Z();
  }, _e = (k, R, Y) => {
    R.component = k;
    const z = k.vnode.props;
    k.vnode = R, k.next = null, il(k, R.props, z, Y), ul(k, R.children, Y), Zn(), es(k), er();
  }, Ae = (k, R, Y, z, te, J, se, ce, re = !1) => {
    const Z = k && k.children, ge = k ? k.shapeFlag : 0, le = R.children, { patchFlag: ve, shapeFlag: we } = R;
    if (ve > 0) {
      if (ve & 128) {
        et(
          Z,
          le,
          Y,
          z,
          te,
          J,
          se,
          ce,
          re
        );
        return;
      } else if (ve & 256) {
        st(
          Z,
          le,
          Y,
          z,
          te,
          J,
          se,
          ce,
          re
        );
        return;
      }
    }
    we & 8 ? (ge & 16 && ft(Z, te, J), le !== Z && j(Y, le)) : ge & 16 ? we & 16 ? et(
      Z,
      le,
      Y,
      z,
      te,
      J,
      se,
      ce,
      re
    ) : ft(Z, te, J, !0) : (ge & 8 && j(Y, ""), we & 16 && ne(
      le,
      Y,
      z,
      te,
      J,
      se,
      ce,
      re
    ));
  }, st = (k, R, Y, z, te, J, se, ce, re) => {
    k = k || Hr, R = R || Hr;
    const Z = k.length, ge = R.length, le = Math.min(Z, ge);
    let ve;
    for (ve = 0; ve < le; ve++) {
      const we = R[ve] = re ? or(R[ve]) : wn(R[ve]);
      de(
        k[ve],
        we,
        Y,
        null,
        te,
        J,
        se,
        ce,
        re
      );
    }
    Z > ge ? ft(
      k,
      te,
      J,
      !0,
      !1,
      le
    ) : ne(
      R,
      Y,
      z,
      te,
      J,
      se,
      ce,
      re,
      le
    );
  }, et = (k, R, Y, z, te, J, se, ce, re) => {
    let Z = 0;
    const ge = R.length;
    let le = k.length - 1, ve = ge - 1;
    for (; Z <= le && Z <= ve; ) {
      const we = k[Z], Te = R[Z] = re ? or(R[Z]) : wn(R[Z]);
      if (Di(we, Te))
        de(
          we,
          Te,
          Y,
          null,
          te,
          J,
          se,
          ce,
          re
        );
      else
        break;
      Z++;
    }
    for (; Z <= le && Z <= ve; ) {
      const we = k[le], Te = R[ve] = re ? or(R[ve]) : wn(R[ve]);
      if (Di(we, Te))
        de(
          we,
          Te,
          Y,
          null,
          te,
          J,
          se,
          ce,
          re
        );
      else
        break;
      le--, ve--;
    }
    if (Z > le) {
      if (Z <= ve) {
        const we = ve + 1, Te = we < ge ? R[we].el : z;
        for (; Z <= ve; )
          de(
            null,
            R[Z] = re ? or(R[Z]) : wn(R[Z]),
            Y,
            Te,
            te,
            J,
            se,
            ce,
            re
          ), Z++;
      }
    } else if (Z > ve)
      for (; Z <= le; )
        _t(k[Z], te, J, !0), Z++;
    else {
      const we = Z, Te = Z, De = /* @__PURE__ */ new Map();
      for (Z = Te; Z <= ve; Z++) {
        const Xe = R[Z] = re ? or(R[Z]) : wn(R[Z]);
        Xe.key != null && De.set(Xe.key, Z);
      }
      let qe, it = 0;
      const lt = ve - Te + 1;
      let yt = !1, ot = 0;
      const Dt = new Array(lt);
      for (Z = 0; Z < lt; Z++) Dt[Z] = 0;
      for (Z = we; Z <= le; Z++) {
        const Xe = k[Z];
        if (it >= lt) {
          _t(Xe, te, J, !0);
          continue;
        }
        let X;
        if (Xe.key != null)
          X = De.get(Xe.key);
        else
          for (qe = Te; qe <= ve; qe++)
            if (Dt[qe - Te] === 0 && Di(Xe, R[qe])) {
              X = qe;
              break;
            }
        X === void 0 ? _t(Xe, te, J, !0) : (Dt[X - Te] = Z + 1, X >= ot ? ot = X : yt = !0, de(
          Xe,
          R[X],
          Y,
          null,
          te,
          J,
          se,
          ce,
          re
        ), it++);
      }
      const vn = yt ? fl(Dt) : Hr;
      for (qe = vn.length - 1, Z = lt - 1; Z >= 0; Z--) {
        const Xe = Te + Z, X = R[Xe], Yt = Xe + 1 < ge ? R[Xe + 1].el : z;
        Dt[Z] === 0 ? de(
          null,
          X,
          Y,
          Yt,
          te,
          J,
          se,
          ce,
          re
        ) : yt && (qe < 0 || Z !== vn[qe] ? ct(X, Y, Yt, 2) : qe--);
      }
    }
  }, ct = (k, R, Y, z, te = null) => {
    const { el: J, type: se, transition: ce, children: re, shapeFlag: Z } = k;
    if (Z & 6) {
      ct(k.component.subTree, R, Y, z);
      return;
    }
    if (Z & 128) {
      k.suspense.move(R, Y, z);
      return;
    }
    if (Z & 64) {
      se.move(k, R, Y, M);
      return;
    }
    if (se === on) {
      c(J, R, Y);
      for (let le = 0; le < re.length; le++)
        ct(re[le], R, Y, z);
      c(k.anchor, R, Y);
      return;
    }
    if (se === oa) {
      Ve(k, R, Y);
      return;
    }
    if (z !== 2 && Z & 1 && ce)
      if (z === 0)
        ce.beforeEnter(J), c(J, R, Y), Ut(() => ce.enter(J), te);
      else {
        const { leave: le, delayLeave: ve, afterLeave: we } = ce, Te = () => {
          k.ctx.isUnmounted ? h(J) : c(J, R, Y);
        }, De = () => {
          le(J, () => {
            Te(), we && we();
          });
        };
        ve ? ve(J, Te, De) : De();
      }
    else
      c(J, R, Y);
  }, _t = (k, R, Y, z = !1, te = !1) => {
    const {
      type: J,
      props: se,
      ref: ce,
      children: re,
      dynamicChildren: Z,
      shapeFlag: ge,
      patchFlag: le,
      dirs: ve,
      cacheIndex: we
    } = k;
    if (le === -2 && (te = !1), ce != null && (Zn(), Mi(ce, null, Y, k, !0), er()), we != null && (R.renderCache[we] = void 0), ge & 256) {
      R.ctx.deactivate(k);
      return;
    }
    const Te = ge & 1 && ve, De = !zr(k);
    let qe;
    if (De && (qe = se && se.onVnodeBeforeUnmount) && bn(qe, R, k), ge & 6)
      Gt(k.component, Y, z);
    else {
      if (ge & 128) {
        k.suspense.unmount(Y, z);
        return;
      }
      Te && Mr(k, null, R, "beforeUnmount"), ge & 64 ? k.type.remove(
        k,
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
      (J !== on || le > 0 && le & 64) ? ft(
        Z,
        R,
        Y,
        !1,
        !0
      ) : (J === on && le & 384 || !te && ge & 16) && ft(re, R, Y), z && wt(k);
    }
    (De && (qe = se && se.onVnodeUnmounted) || Te) && Ut(() => {
      qe && bn(qe, R, k), Te && Mr(k, null, R, "unmounted");
    }, Y);
  }, wt = (k) => {
    const { type: R, el: Y, anchor: z, transition: te } = k;
    if (R === on) {
      gn(Y, z);
      return;
    }
    if (R === oa) {
      fe(k);
      return;
    }
    const J = () => {
      h(Y), te && !te.persisted && te.afterLeave && te.afterLeave();
    };
    if (k.shapeFlag & 1 && te && !te.persisted) {
      const { leave: se, delayLeave: ce } = te, re = () => se(Y, J);
      ce ? ce(k.el, J, re) : re();
    } else
      J();
  }, gn = (k, R) => {
    let Y;
    for (; k !== R; )
      Y = Q(k), h(k), k = Y;
    h(R);
  }, Gt = (k, R, Y) => {
    const {
      bum: z,
      scope: te,
      job: J,
      subTree: se,
      um: ce,
      m: re,
      a: Z,
      parent: ge,
      slots: { __: le }
    } = k;
    ls(re), ls(Z), z && Qo(z), ge && Se(le) && le.forEach((ve) => {
      ge.renderCache[ve] = void 0;
    }), te.stop(), J && (J.flags |= 8, _t(se, k, R, Y)), ce && Ut(ce, R), Ut(() => {
      k.isUnmounted = !0;
    }, R), R && R.pendingBranch && !R.isUnmounted && k.asyncDep && !k.asyncResolved && k.suspenseId === R.pendingId && (R.deps--, R.deps === 0 && R.resolve());
  }, ft = (k, R, Y, z = !1, te = !1, J = 0) => {
    for (let se = J; se < k.length; se++)
      _t(k[se], R, Y, z, te);
  }, A = (k) => {
    if (k.shapeFlag & 6)
      return A(k.component.subTree);
    if (k.shapeFlag & 128)
      return k.suspense.next();
    const R = Q(k.anchor || k.el), Y = R && R[ru];
    return Y ? Q(Y) : R;
  };
  let b = !1;
  const D = (k, R, Y) => {
    k == null ? R._vnode && _t(R._vnode, null, null, !0) : de(
      R._vnode || null,
      k,
      R,
      null,
      null,
      null,
      Y
    ), R._vnode = k, b || (b = !0, es(), eu(), b = !1);
  }, M = {
    p: de,
    um: _t,
    m: ct,
    r: wt,
    mt: pt,
    mc: ne,
    pc: Ae,
    pbc: xe,
    n: A,
    o: n
  };
  return {
    render: D,
    hydrate: void 0,
    createApp: tl(D)
  };
}
function ra({ type: n, props: i }, u) {
  return u === "svg" && n === "foreignObject" || u === "mathml" && n === "annotation-xml" && i && i.encoding && i.encoding.includes("html") ? void 0 : u;
}
function qr({ effect: n, job: i }, u) {
  u ? (n.flags |= 32, i.flags |= 4) : (n.flags &= -33, i.flags &= -5);
}
function ll(n, i) {
  return (!n || n && !n.pendingBranch) && i && !i.persisted;
}
function Ha(n, i, u = !1) {
  const c = n.children, h = i.children;
  if (Se(c) && Se(h))
    for (let p = 0; p < c.length; p++) {
      const O = c[p];
      let S = h[p];
      S.shapeFlag & 1 && !S.dynamicChildren && ((S.patchFlag <= 0 || S.patchFlag === 32) && (S = h[p] = or(h[p]), S.el = O.el), !u && S.patchFlag !== -2 && Ha(O, S)), S.type === Eo && (S.el = O.el), S.type === nr && !S.el && (S.el = O.el);
    }
}
function fl(n) {
  const i = n.slice(), u = [0];
  let c, h, p, O, S;
  const N = n.length;
  for (c = 0; c < N; c++) {
    const $ = n[c];
    if ($ !== 0) {
      if (h = u[u.length - 1], n[h] < $) {
        i[c] = h, u.push(c);
        continue;
      }
      for (p = 0, O = u.length - 1; p < O; )
        S = p + O >> 1, n[u[S]] < $ ? p = S + 1 : O = S;
      $ < n[u[p]] && (p > 0 && (i[c] = u[p - 1]), u[p] = c);
    }
  }
  for (p = u.length, O = u[p - 1]; p-- > 0; )
    u[p] = O, O = i[O];
  return u;
}
function Su(n) {
  const i = n.subTree.component;
  if (i)
    return i.asyncDep && !i.asyncResolved ? i : Su(i);
}
function ls(n) {
  if (n)
    for (let i = 0; i < n.length; i++)
      n[i].flags |= 8;
}
const hl = Symbol.for("v-scx"), dl = () => ro(hl);
function ku(n, i) {
  return Ga(n, null, i);
}
function ia(n, i, u) {
  return Ga(n, i, u);
}
function Ga(n, i, u = tt) {
  const { immediate: c, deep: h, flush: p, once: O } = u, S = Ht({}, u), N = i && c || !i && p !== "post";
  let $;
  if (Gi) {
    if (p === "sync") {
      const ae = dl();
      $ = ae.__watcherHandles || (ae.__watcherHandles = []);
    } else if (!N) {
      const ae = () => {
      };
      return ae.stop = xn, ae.resume = xn, ae.pause = xn, ae;
    }
  }
  const j = xt;
  S.call = (ae, he, de) => tr(ae, j, he, de);
  let L = !1;
  p === "post" ? S.scheduler = (ae) => {
    Ut(ae, j && j.suspense);
  } : p !== "sync" && (L = !0, S.scheduler = (ae, he) => {
    he ? ae() : Ua(ae);
  }), S.augmentJob = (ae) => {
    i && (ae.flags |= 4), L && (ae.flags |= 2, j && (ae.id = j.uid, ae.i = j));
  };
  const Q = Ac(n, i, S);
  return Gi && ($ ? $.push(Q) : N && Q()), Q;
}
function pl(n, i, u) {
  const c = this.proxy, h = Et(n) ? n.includes(".") ? Au(c, n) : () => c[n] : n.bind(c, c);
  let p;
  Ie(i) ? p = i : (p = i.handler, u = i);
  const O = Qi(this), S = Ga(h, p.bind(c), u);
  return O(), S;
}
function Au(n, i) {
  const u = i.split(".");
  return () => {
    let c = n;
    for (let h = 0; h < u.length && c; h++)
      c = c[u[h]];
    return c;
  };
}
const yl = (n, i) => i === "modelValue" || i === "model-value" ? n.modelModifiers : n[`${i}Modifiers`] || n[`${Tn(i)}Modifiers`] || n[`${Xi(i)}Modifiers`];
function ml(n, i, ...u) {
  if (n.isUnmounted) return;
  const c = n.vnode.props || tt;
  let h = u;
  const p = i.startsWith("update:"), O = p && yl(c, i.slice(7));
  O && (O.trim && (h = u.map((j) => Et(j) ? j.trim() : j)), O.number && (h = u.map($u)));
  let S, N = c[S = zo(i)] || // also try camelCase event handler (#2249)
  c[S = zo(Tn(i))];
  !N && p && (N = c[S = zo(Xi(i))]), N && tr(
    N,
    n,
    6,
    h
  );
  const $ = c[S + "Once"];
  if ($) {
    if (!n.emitted)
      n.emitted = {};
    else if (n.emitted[S])
      return;
    n.emitted[S] = !0, tr(
      $,
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
    const N = ($) => {
      const j = Pu($, i, !0);
      j && (S = !0, Ht(O, j));
    };
    !u && i.mixins.length && i.mixins.forEach(N), n.extends && N(n.extends), n.mixins && n.mixins.forEach(N);
  }
  return !p && !S ? (rt(n) && c.set(n, null), null) : (Se(p) ? p.forEach((N) => O[N] = null) : Ht(O, p), rt(n) && c.set(n, O), O);
}
function xo(n, i) {
  return !n || !Aa(i) ? !1 : (i = i.slice(2).replace(/Once$/, ""), Je(n, i[0].toLowerCase() + i.slice(1)) || Je(n, Xi(i)) || Je(n, i));
}
function fs(n) {
  const {
    type: i,
    vnode: u,
    proxy: c,
    withProxy: h,
    propsOptions: [p],
    slots: O,
    attrs: S,
    emit: N,
    render: $,
    renderCache: j,
    props: L,
    data: Q,
    setupState: ae,
    ctx: he,
    inheritAttrs: de
  } = n, $e = lo(n);
  let Ne, Be;
  try {
    if (u.shapeFlag & 4) {
      const fe = h || c, Me = fe;
      Ne = wn(
        $.call(
          Me,
          fe,
          j,
          L,
          ae,
          Q,
          he
        )
      ), Be = S;
    } else {
      const fe = i;
      Ne = wn(
        fe.length > 1 ? fe(
          L,
          { attrs: S, slots: O, emit: N }
        ) : fe(
          L,
          null
        )
      ), Be = i.props ? S : gl(S);
    }
  } catch (fe) {
    Li.length = 0, _o(fe, n, 1), Ne = Xt(nr);
  }
  let Ve = Ne;
  if (Be && de !== !1) {
    const fe = Object.keys(Be), { shapeFlag: Me } = Ve;
    fe.length && Me & 7 && (p && fe.some(Os) && (Be = vl(
      Be,
      p
    )), Ve = Jr(Ve, Be, !1, !0));
  }
  return u.dirs && (Ve = Jr(Ve, null, !1, !0), Ve.dirs = Ve.dirs ? Ve.dirs.concat(u.dirs) : u.dirs), u.transition && Va(Ve, u.transition), Ne = Ve, lo($e), Ne;
}
const gl = (n) => {
  let i;
  for (const u in n)
    (u === "class" || u === "style" || Aa(u)) && ((i || (i = {}))[u] = n[u]);
  return i;
}, vl = (n, i) => {
  const u = {};
  for (const c in n)
    (!Os(c) || !(c.slice(9) in i)) && (u[c] = n[c]);
  return u;
};
function bl(n, i, u) {
  const { props: c, children: h, component: p } = n, { props: O, children: S, patchFlag: N } = i, $ = p.emitsOptions;
  if (i.dirs || i.transition)
    return !0;
  if (u && N >= 0) {
    if (N & 1024)
      return !0;
    if (N & 16)
      return c ? hs(c, O, $) : !!O;
    if (N & 8) {
      const j = i.dynamicProps;
      for (let L = 0; L < j.length; L++) {
        const Q = j[L];
        if (O[Q] !== c[Q] && !xo($, Q))
          return !0;
      }
    }
  } else
    return (h || S) && (!S || !S.$stable) ? !0 : c === O ? !1 : c ? O ? hs(c, O, $) : !0 : !!O;
  return !1;
}
function hs(n, i, u) {
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
function _l({ vnode: n, parent: i }, u) {
  for (; i; ) {
    const c = i.subTree;
    if (c.suspense && c.suspense.activeBranch === n && (c.el = n.el), c === n)
      (n = i.vnode).el = u, i = i.parent;
    else
      break;
  }
}
const Cu = (n) => n.__isSuspense;
function wl(n, i) {
  i && i.pendingBranch ? Se(n) ? i.effects.push(...n) : i.effects.push(n) : Nc(n);
}
const on = Symbol.for("v-fgt"), Eo = Symbol.for("v-txt"), nr = Symbol.for("v-cmt"), oa = Symbol.for("v-stc"), Li = [];
let Wt = null;
function ga(n = !1) {
  Li.push(Wt = n ? null : []);
}
function xl() {
  Li.pop(), Wt = Li[Li.length - 1] || null;
}
let Qr = 1;
function ds(n, i = !1) {
  Qr += n, n < 0 && Wt && i && (Wt.hasOnce = !0);
}
function Iu(n) {
  return n.dynamicChildren = Qr > 0 ? Wt || Hr : null, xl(), Qr > 0 && Wt && Wt.push(n), n;
}
function Zf(n, i, u, c, h, p) {
  return Iu(
    Du(
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
  return Iu(
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
function Hi(n) {
  return n ? n.__v_isVNode === !0 : !1;
}
function Di(n, i) {
  return n.type === i.type && n.key === i.key;
}
const Nu = ({ key: n }) => n ?? null, io = ({
  ref: n,
  ref_key: i,
  ref_for: u
}) => (typeof n == "number" && (n = "" + n), n != null ? Et(n) || bt(n) || Ie(n) ? { i: vt, r: n, k: i, f: !!u } : n : null);
function Du(n, i = null, u = null, c = 0, h = null, p = n === on ? 0 : 1, O = !1, S = !1) {
  const N = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n,
    props: i,
    key: i && Nu(i),
    ref: i && io(i),
    scopeId: nu,
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
    ctx: vt
  };
  return S ? (Ya(N, u), p & 128 && n.normalize(N)) : u && (N.shapeFlag |= Et(u) ? 8 : 16), Qr > 0 && // avoid a block node from tracking itself
  !O && // has current parent block
  Wt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (N.patchFlag > 0 || p & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  N.patchFlag !== 32 && Wt.push(N), N;
}
const Xt = El;
function El(n, i = null, u = null, c = 0, h = null, p = !1) {
  if ((!n || n === fu) && (n = nr), Hi(n)) {
    const S = Jr(
      n,
      i,
      !0
      /* mergeRef: true */
    );
    return u && Ya(S, u), Qr > 0 && !p && Wt && (S.shapeFlag & 6 ? Wt[Wt.indexOf(n)] = S : Wt.push(S)), S.patchFlag = -2, S;
  }
  if (Rl(n) && (n = n.__vccOpts), i) {
    i = Tl(i);
    let { class: S, style: N } = i;
    S && !Et(S) && (i.class = go(S)), rt(N) && (qa(N) && !Se(N) && (N = Ht({}, N)), i.style = mo(N));
  }
  const O = Et(n) ? 1 : Cu(n) ? 128 : Rc(n) ? 64 : rt(n) ? 4 : Ie(n) ? 2 : 0;
  return Du(
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
function Tl(n) {
  return n ? qa(n) || _u(n) ? Ht({}, n) : n : null;
}
function Jr(n, i, u = !1, c = !1) {
  const { props: h, ref: p, patchFlag: O, children: S, transition: N } = n, $ = i ? Sl(h || {}, i) : h, j = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n.type,
    props: $,
    key: $ && Nu($),
    ref: i && i.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      u && p ? Se(p) ? p.concat(io(i)) : [p, io(i)] : io(i)
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
    transition: N,
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
  return N && c && Va(
    j,
    N.clone(j)
  ), j;
}
function Ol(n = " ", i = 0) {
  return Xt(Eo, null, n, i);
}
function eh(n = "", i = !1) {
  return i ? (ga(), va(nr, null, n)) : Xt(nr, null, n);
}
function wn(n) {
  return n == null || typeof n == "boolean" ? Xt(nr) : Se(n) ? Xt(
    on,
    null,
    // #3666, avoid reference pollution when reusing vnode
    n.slice()
  ) : Hi(n) ? or(n) : Xt(Eo, null, String(n));
}
function or(n) {
  return n.el === null && n.patchFlag !== -1 || n.memo ? n : Jr(n);
}
function Ya(n, i) {
  let u = 0;
  const { shapeFlag: c } = n;
  if (i == null)
    i = null;
  else if (Se(i))
    u = 16;
  else if (typeof i == "object")
    if (c & 65) {
      const h = i.default;
      h && (h._c && (h._d = !1), Ya(n, h()), h._c && (h._d = !0));
      return;
    } else {
      u = 32;
      const h = i._;
      !h && !_u(i) ? i._ctx = vt : h === 3 && vt && (vt.slots._ === 1 ? i._ = 1 : (i._ = 2, n.patchFlag |= 1024));
    }
  else Ie(i) ? (i = { default: i, _ctx: vt }, u = 32) : (i = String(i), c & 64 ? (u = 16, i = [Ol(i)]) : u = 8);
  n.children = i, n.shapeFlag |= u;
}
function Sl(...n) {
  const i = {};
  for (let u = 0; u < n.length; u++) {
    const c = n[u];
    for (const h in c)
      if (h === "class")
        i.class !== c.class && (i.class = go([i.class, c.class]));
      else if (h === "style")
        i.style = mo([i.style, c.style]);
      else if (Aa(h)) {
        const p = i[h], O = c[h];
        O && p !== O && !(Se(p) && p.includes(O)) && (i[h] = p ? [].concat(p, O) : O);
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
const kl = gu();
let Al = 0;
function Pl(n, i, u) {
  const c = n.type, h = (i ? i.appContext : n.appContext) || kl, p = {
    uid: Al++,
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
    scope: new Ns(
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
    propsOptions: xu(c, h),
    emitsOptions: Pu(c, h),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: tt,
    // inheritAttrs
    inheritAttrs: c.inheritAttrs,
    // state
    ctx: tt,
    data: tt,
    props: tt,
    attrs: tt,
    slots: tt,
    refs: tt,
    setupState: tt,
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
  return p.ctx = { _: p }, p.root = i ? i.root : p, p.emit = ml.bind(null, p), n.ce && n.ce(p), p;
}
let xt = null;
const Ru = () => xt || vt;
let ho, ba;
{
  const n = yo(), i = (u, c) => {
    let h;
    return (h = n[u]) || (h = n[u] = []), h.push(c), (p) => {
      h.length > 1 ? h.forEach((O) => O(p)) : h[0](p);
    };
  };
  ho = i(
    "__VUE_INSTANCE_SETTERS__",
    (u) => xt = u
  ), ba = i(
    "__VUE_SSR_SETTERS__",
    (u) => Gi = u
  );
}
const Qi = (n) => {
  const i = xt;
  return ho(n), n.scope.on(), () => {
    n.scope.off(), ho(i);
  };
}, ps = () => {
  xt && xt.scope.off(), ho(null);
};
function Ku(n) {
  return n.vnode.shapeFlag & 4;
}
let Gi = !1;
function Cl(n, i = !1, u = !1) {
  i && ba(i);
  const { props: c, children: h } = n.vnode, p = Ku(n);
  rl(n, c, p, i), sl(n, h, u || i);
  const O = p ? Il(n, i) : void 0;
  return i && ba(!1), O;
}
function Il(n, i) {
  const u = n.type;
  n.accessCache = /* @__PURE__ */ Object.create(null), n.proxy = new Proxy(n.ctx, Yc);
  const { setup: c } = u;
  if (c) {
    Zn();
    const h = n.setupContext = c.length > 1 ? Fu(n) : null, p = Qi(n), O = zi(
      c,
      n,
      0,
      [
        n.props,
        h
      ]
    ), S = ks(O);
    if (er(), p(), (S || n.sp) && !zr(n) && au(n), S) {
      if (O.then(ps, ps), i)
        return O.then((N) => {
          ys(n, N);
        }).catch((N) => {
          _o(N, n, 0);
        });
      n.asyncDep = O;
    } else
      ys(n, O);
  } else
    ju(n);
}
function ys(n, i, u) {
  Ie(i) ? n.type.__ssrInlineRender ? n.ssrRender = i : n.render = i : rt(i) && (n.setupState = zs(i)), ju(n);
}
function ju(n, i, u) {
  const c = n.type;
  n.render || (n.render = c.render || xn);
  {
    const h = Qi(n);
    Zn();
    try {
      Xc(n);
    } finally {
      er(), h();
    }
  }
}
const Nl = {
  get(n, i) {
    return Nt(n, "get", ""), n[i];
  }
};
function Fu(n) {
  const i = (u) => {
    n.exposed = u || {};
  };
  return {
    attrs: new Proxy(n.attrs, Nl),
    slots: n.slots,
    emit: n.emit,
    expose: i
  };
}
function To(n) {
  return n.exposed ? n.exposeProxy || (n.exposeProxy = new Proxy(zs(bc(n.exposed)), {
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
function Dl(n, i = !0) {
  return Ie(n) ? n.displayName || n.name : n.name || i && n.__name;
}
function Rl(n) {
  return Ie(n) && "__vccOpts" in n;
}
const Xa = (n, i) => Sc(n, i, Gi);
function th(n, i, u) {
  const c = arguments.length;
  return c === 2 ? rt(i) && !Se(i) ? Hi(i) ? Xt(n, null, [i]) : Xt(n, i) : Xt(n, null, i) : (c > 3 ? u = Array.prototype.slice.call(arguments, 2) : c === 3 && Hi(u) && (u = [u]), Xt(n, i, u));
}
function nh(n, i) {
  const u = n.memo;
  if (u.length != i.length)
    return !1;
  for (let c = 0; c < u.length; c++)
    if (Jn(u[c], i[c]))
      return !1;
  return Qr > 0 && Wt && Wt.push(n), !0;
}
const Kl = "3.5.17";
function jl(n) {
  return Ds() ? (Ju(n), !0) : !1;
}
// @__NO_SIDE_EFFECTS__
function ms() {
  const n = /* @__PURE__ */ new Set(), i = (p) => {
    n.delete(p);
  };
  return {
    on: (p) => {
      n.add(p);
      const O = () => i(p);
      return jl(O), {
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
const Fl = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const _a = () => {
}, Bl = (n, i) => Object.prototype.hasOwnProperty.call(n, i);
function Ml(n, i) {
  function u(...c) {
    return new Promise((h, p) => {
      Promise.resolve(n(() => i.apply(this, c), { fn: i, thisArg: this, args: c })).then(h).catch(p);
    });
  }
  return u;
}
function ql(n, i = {}) {
  let u, c, h = _a;
  const p = (N) => {
    clearTimeout(N), h(), h = _a;
  };
  let O;
  return (N) => {
    const $ = ar(n), j = ar(i.maxWait);
    return u && p(u), $ <= 0 || j !== void 0 && j <= 0 ? (c && (p(c), c = void 0), Promise.resolve(N())) : new Promise((L, Q) => {
      h = i.rejectOnCancel ? Q : L, O = N, j && !c && (c = setTimeout(() => {
        u && p(u), c = void 0, L(O());
      }, j)), u = setTimeout(() => {
        c && p(c), c = void 0, L(N());
      }, $);
    });
  };
}
// @__NO_SIDE_EFFECTS__
function rh(n, i = 200, u = {}) {
  return Ml(
    ql(i, u),
    n
  );
}
function ih(n, i, u) {
  let c;
  bt(u) ? c = {
    evaluating: u
  } : c = {};
  const {
    lazy: h = !1,
    flush: p = "pre",
    evaluating: O = void 0,
    shallow: S = !0,
    onError: N = _a
  } = c, $ = fa(!h), j = S ? fa(i) : La(i);
  let L = 0;
  return ku(async (Q) => {
    if (!$.value)
      return;
    L++;
    const ae = L;
    let he = !1;
    O && Promise.resolve().then(() => {
      O.value = !0;
    });
    try {
      const de = await n(($e) => {
        Q(() => {
          O && (O.value = !1), he || $e();
        });
      });
      ae === L && (j.value = de);
    } catch (de) {
      N(de);
    } finally {
      O && ae === L && (O.value = !1), he = !0;
    }
  }, { flush: p }), h ? Xa(() => ($.value = !0, j.value)) : j;
}
const Ll = Fl ? window.document : void 0;
function Ul(n) {
  var i;
  const u = ar(n);
  return (i = u?.$el) != null ? i : u;
}
const Vl = {
  multiple: !0,
  accept: "*",
  reset: !1,
  directory: !1
};
function $l(n) {
  if (!n)
    return null;
  if (n instanceof FileList)
    return n;
  const i = new DataTransfer();
  for (const u of n)
    i.items.add(u);
  return i.files;
}
function oh(n = {}) {
  const {
    document: i = Ll
  } = n, u = La($l(n.initialFiles)), { on: c, trigger: h } = /* @__PURE__ */ ms(), { on: p, trigger: O } = /* @__PURE__ */ ms(), S = Xa(() => {
    var L;
    const Q = (L = Ul(n.input)) != null ? L : i ? i.createElement("input") : void 0;
    return Q && (Q.type = "file", Q.onchange = (ae) => {
      const he = ae.target;
      u.value = he.files, h(u.value);
    }, Q.oncancel = () => {
      O();
    }), Q;
  }), N = () => {
    u.value = null, S.value && S.value.value && (S.value.value = "", h(null));
  }, $ = (L) => {
    const Q = S.value;
    Q && (Q.multiple = ar(L.multiple), Q.accept = ar(L.accept), Q.webkitdirectory = ar(L.directory), Bl(L, "capture") && (Q.capture = ar(L.capture)));
  }, j = (L) => {
    const Q = S.value;
    if (!Q)
      return;
    const ae = {
      ...Vl,
      ...n,
      ...L
    };
    $(ae), ar(ae.reset) && N(), Q.click();
  };
  return ku(() => {
    $(n);
  }), {
    files: Ba(u),
    open: j,
    reset: N,
    onCancel: p,
    onChange: c
  };
}
var Wl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Hl(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Gl(n) {
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
var gs = {};
const Yl = {}, Xl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yl
}, Symbol.toStringTag, { value: "Module" })), vs = /* @__PURE__ */ Gl(Xl);
var bs;
function zl() {
  return bs || (bs = 1, function(n) {
    (function(i) {
      i.parser = function(A, b) {
        return new c(A, b);
      }, i.SAXParser = c, i.SAXStream = j, i.createStream = $, i.MAX_BUFFER_LENGTH = 64 * 1024;
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
      function c(A, b) {
        if (!(this instanceof c))
          return new c(A, b);
        var D = this;
        p(D), D.q = D.c = "", D.bufferCheckPosition = i.MAX_BUFFER_LENGTH, D.opt = b || {}, D.opt.lowercase = D.opt.lowercase || D.opt.lowercasetags, D.looseCase = D.opt.lowercase ? "toLowerCase" : "toUpperCase", D.tags = [], D.closed = D.closedRoot = D.sawRoot = !1, D.tag = D.error = null, D.strict = !!A, D.noscript = !!(A || D.opt.noscript), D.state = K.BEGIN, D.strictEntities = D.opt.strictEntities, D.ENTITIES = D.strictEntities ? Object.create(i.XML_ENTITIES) : Object.create(i.ENTITIES), D.attribList = [], D.opt.xmlns && (D.ns = Object.create(de)), D.opt.unquotedAttributeValues === void 0 && (D.opt.unquotedAttributeValues = !A), D.trackPosition = D.opt.position !== !1, D.trackPosition && (D.position = D.line = D.column = 0), Ke(D, "onready");
      }
      Object.create || (Object.create = function(A) {
        function b() {
        }
        b.prototype = A;
        var D = new b();
        return D;
      }), Object.keys || (Object.keys = function(A) {
        var b = [];
        for (var D in A) A.hasOwnProperty(D) && b.push(D);
        return b;
      });
      function h(A) {
        for (var b = Math.max(i.MAX_BUFFER_LENGTH, 10), D = 0, M = 0, je = u.length; M < je; M++) {
          var k = A[u[M]].length;
          if (k > b)
            switch (u[M]) {
              case "textNode":
                Fe(A);
                break;
              case "cdata":
                be(A, "oncdata", A.cdata), A.cdata = "";
                break;
              case "script":
                be(A, "onscript", A.script), A.script = "";
                break;
              default:
                Ze(A, "Max buffer length exceeded: " + u[M]);
            }
          D = Math.max(D, k);
        }
        var R = i.MAX_BUFFER_LENGTH - D;
        A.bufferCheckPosition = R + A.position;
      }
      function p(A) {
        for (var b = 0, D = u.length; b < D; b++)
          A[u[b]] = "";
      }
      function O(A) {
        Fe(A), A.cdata !== "" && (be(A, "oncdata", A.cdata), A.cdata = ""), A.script !== "" && (be(A, "onscript", A.script), A.script = "");
      }
      c.prototype = {
        end: function() {
          Ye(this);
        },
        write: ft,
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
        S = vs.Stream;
      } catch {
        S = function() {
        };
      }
      S || (S = function() {
      });
      var N = i.EVENTS.filter(function(A) {
        return A !== "error" && A !== "end";
      });
      function $(A, b) {
        return new j(A, b);
      }
      function j(A, b) {
        if (!(this instanceof j))
          return new j(A, b);
        S.apply(this), this._parser = new c(A, b), this.writable = !0, this.readable = !0;
        var D = this;
        this._parser.onend = function() {
          D.emit("end");
        }, this._parser.onerror = function(M) {
          D.emit("error", M), D._parser.error = null;
        }, this._decoder = null, N.forEach(function(M) {
          Object.defineProperty(D, "on" + M, {
            get: function() {
              return D._parser["on" + M];
            },
            set: function(je) {
              if (!je)
                return D.removeAllListeners(M), D._parser["on" + M] = je, je;
              D.on(M, je);
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
      }), j.prototype.write = function(A) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(A)) {
          if (!this._decoder) {
            var b = vs.StringDecoder;
            this._decoder = new b("utf8");
          }
          A = this._decoder.write(A);
        }
        return this._parser.write(A.toString()), this.emit("data", A), !0;
      }, j.prototype.end = function(A) {
        return A && A.length && this.write(A), this._parser.end(), !0;
      }, j.prototype.on = function(A, b) {
        var D = this;
        return !D._parser["on" + A] && N.indexOf(A) !== -1 && (D._parser["on" + A] = function() {
          var M = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          M.splice(0, 0, A), D.emit.apply(D, M);
        }), S.prototype.on.call(D, A, b);
      };
      var L = "[CDATA[", Q = "DOCTYPE", ae = "http://www.w3.org/XML/1998/namespace", he = "http://www.w3.org/2000/xmlns/", de = { xml: ae, xmlns: he }, $e = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Ne = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, Be = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Ve = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function fe(A) {
        return A === " " || A === `
` || A === "\r" || A === "	";
      }
      function Me(A) {
        return A === '"' || A === "'";
      }
      function Re(A) {
        return A === ">" || fe(A);
      }
      function ee(A, b) {
        return A.test(b);
      }
      function ne(A, b) {
        return !ee(A, b);
      }
      var K = 0;
      i.STATE = {
        BEGIN: K++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: K++,
        // leading whitespace
        TEXT: K++,
        // general stuff
        TEXT_ENTITY: K++,
        // &amp and such.
        OPEN_WAKA: K++,
        // <
        SGML_DECL: K++,
        // <!BLARG
        SGML_DECL_QUOTED: K++,
        // <!BLARG foo "bar
        DOCTYPE: K++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: K++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: K++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: K++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: K++,
        // <!-
        COMMENT: K++,
        // <!--
        COMMENT_ENDING: K++,
        // <!-- blah -
        COMMENT_ENDED: K++,
        // <!-- blah --
        CDATA: K++,
        // <![CDATA[ something
        CDATA_ENDING: K++,
        // ]
        CDATA_ENDING_2: K++,
        // ]]
        PROC_INST: K++,
        // <?hi
        PROC_INST_BODY: K++,
        // <?hi there
        PROC_INST_ENDING: K++,
        // <?hi "there" ?
        OPEN_TAG: K++,
        // <strong
        OPEN_TAG_SLASH: K++,
        // <strong /
        ATTRIB: K++,
        // <a
        ATTRIB_NAME: K++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: K++,
        // <a foo _
        ATTRIB_VALUE: K++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: K++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: K++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: K++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: K++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: K++,
        // <foo bar=&quot
        CLOSE_TAG: K++,
        // </a
        CLOSE_TAG_SAW_WHITE: K++,
        // </a   >
        SCRIPT: K++,
        // <script> ...
        SCRIPT_ENDING: K++
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
      }, Object.keys(i.ENTITIES).forEach(function(A) {
        var b = i.ENTITIES[A], D = typeof b == "number" ? String.fromCharCode(b) : b;
        i.ENTITIES[A] = D;
      });
      for (var xe in i.STATE)
        i.STATE[i.STATE[xe]] = xe;
      K = i.STATE;
      function Ke(A, b, D) {
        A[b] && A[b](D);
      }
      function be(A, b, D) {
        A.textNode && Fe(A), Ke(A, b, D);
      }
      function Fe(A) {
        A.textNode = pt(A.opt, A.textNode), A.textNode && Ke(A, "ontext", A.textNode), A.textNode = "";
      }
      function pt(A, b) {
        return A.trim && (b = b.trim()), A.normalize && (b = b.replace(/\s+/g, " ")), b;
      }
      function Ze(A, b) {
        return Fe(A), A.trackPosition && (b += `
Line: ` + A.line + `
Column: ` + A.column + `
Char: ` + A.c), b = new Error(b), A.error = b, Ke(A, "onerror", b), A;
      }
      function Ye(A) {
        return A.sawRoot && !A.closedRoot && _e(A, "Unclosed root tag"), A.state !== K.BEGIN && A.state !== K.BEGIN_WHITESPACE && A.state !== K.TEXT && Ze(A, "Unexpected end"), Fe(A), A.c = "", A.closed = !0, Ke(A, "onend"), c.call(A, A.strict, A.opt), A;
      }
      function _e(A, b) {
        if (typeof A != "object" || !(A instanceof c))
          throw new Error("bad call to strictFail");
        A.strict && Ze(A, b);
      }
      function Ae(A) {
        A.strict || (A.tagName = A.tagName[A.looseCase]());
        var b = A.tags[A.tags.length - 1] || A, D = A.tag = { name: A.tagName, attributes: {} };
        A.opt.xmlns && (D.ns = b.ns), A.attribList.length = 0, be(A, "onopentagstart", D);
      }
      function st(A, b) {
        var D = A.indexOf(":"), M = D < 0 ? ["", A] : A.split(":"), je = M[0], k = M[1];
        return b && A === "xmlns" && (je = "xmlns", k = ""), { prefix: je, local: k };
      }
      function et(A) {
        if (A.strict || (A.attribName = A.attribName[A.looseCase]()), A.attribList.indexOf(A.attribName) !== -1 || A.tag.attributes.hasOwnProperty(A.attribName)) {
          A.attribName = A.attribValue = "";
          return;
        }
        if (A.opt.xmlns) {
          var b = st(A.attribName, !0), D = b.prefix, M = b.local;
          if (D === "xmlns")
            if (M === "xml" && A.attribValue !== ae)
              _e(
                A,
                "xml: prefix must be bound to " + ae + `
Actual: ` + A.attribValue
              );
            else if (M === "xmlns" && A.attribValue !== he)
              _e(
                A,
                "xmlns: prefix must be bound to " + he + `
Actual: ` + A.attribValue
              );
            else {
              var je = A.tag, k = A.tags[A.tags.length - 1] || A;
              je.ns === k.ns && (je.ns = Object.create(k.ns)), je.ns[M] = A.attribValue;
            }
          A.attribList.push([A.attribName, A.attribValue]);
        } else
          A.tag.attributes[A.attribName] = A.attribValue, be(A, "onattribute", {
            name: A.attribName,
            value: A.attribValue
          });
        A.attribName = A.attribValue = "";
      }
      function ct(A, b) {
        if (A.opt.xmlns) {
          var D = A.tag, M = st(A.tagName);
          D.prefix = M.prefix, D.local = M.local, D.uri = D.ns[M.prefix] || "", D.prefix && !D.uri && (_e(A, "Unbound namespace prefix: " + JSON.stringify(A.tagName)), D.uri = M.prefix);
          var je = A.tags[A.tags.length - 1] || A;
          D.ns && je.ns !== D.ns && Object.keys(D.ns).forEach(function(ge) {
            be(A, "onopennamespace", {
              prefix: ge,
              uri: D.ns[ge]
            });
          });
          for (var k = 0, R = A.attribList.length; k < R; k++) {
            var Y = A.attribList[k], z = Y[0], te = Y[1], J = st(z, !0), se = J.prefix, ce = J.local, re = se === "" ? "" : D.ns[se] || "", Z = {
              name: z,
              value: te,
              prefix: se,
              local: ce,
              uri: re
            };
            se && se !== "xmlns" && !re && (_e(A, "Unbound namespace prefix: " + JSON.stringify(se)), Z.uri = se), A.tag.attributes[z] = Z, be(A, "onattribute", Z);
          }
          A.attribList.length = 0;
        }
        A.tag.isSelfClosing = !!b, A.sawRoot = !0, A.tags.push(A.tag), be(A, "onopentag", A.tag), b || (!A.noscript && A.tagName.toLowerCase() === "script" ? A.state = K.SCRIPT : A.state = K.TEXT, A.tag = null, A.tagName = ""), A.attribName = A.attribValue = "", A.attribList.length = 0;
      }
      function _t(A) {
        if (!A.tagName) {
          _e(A, "Weird empty close tag."), A.textNode += "</>", A.state = K.TEXT;
          return;
        }
        if (A.script) {
          if (A.tagName !== "script") {
            A.script += "</" + A.tagName + ">", A.tagName = "", A.state = K.SCRIPT;
            return;
          }
          be(A, "onscript", A.script), A.script = "";
        }
        var b = A.tags.length, D = A.tagName;
        A.strict || (D = D[A.looseCase]());
        for (var M = D; b--; ) {
          var je = A.tags[b];
          if (je.name !== M)
            _e(A, "Unexpected close tag");
          else
            break;
        }
        if (b < 0) {
          _e(A, "Unmatched closing tag: " + A.tagName), A.textNode += "</" + A.tagName + ">", A.state = K.TEXT;
          return;
        }
        A.tagName = D;
        for (var k = A.tags.length; k-- > b; ) {
          var R = A.tag = A.tags.pop();
          A.tagName = A.tag.name, be(A, "onclosetag", A.tagName);
          var Y = {};
          for (var z in R.ns)
            Y[z] = R.ns[z];
          var te = A.tags[A.tags.length - 1] || A;
          A.opt.xmlns && R.ns !== te.ns && Object.keys(R.ns).forEach(function(J) {
            var se = R.ns[J];
            be(A, "onclosenamespace", { prefix: J, uri: se });
          });
        }
        b === 0 && (A.closedRoot = !0), A.tagName = A.attribValue = A.attribName = "", A.attribList.length = 0, A.state = K.TEXT;
      }
      function wt(A) {
        var b = A.entity, D = b.toLowerCase(), M, je = "";
        return A.ENTITIES[b] ? A.ENTITIES[b] : A.ENTITIES[D] ? A.ENTITIES[D] : (b = D, b.charAt(0) === "#" && (b.charAt(1) === "x" ? (b = b.slice(2), M = parseInt(b, 16), je = M.toString(16)) : (b = b.slice(1), M = parseInt(b, 10), je = M.toString(10))), b = b.replace(/^0+/, ""), isNaN(M) || je.toLowerCase() !== b ? (_e(A, "Invalid character entity"), "&" + A.entity + ";") : String.fromCodePoint(M));
      }
      function gn(A, b) {
        b === "<" ? (A.state = K.OPEN_WAKA, A.startTagPosition = A.position) : fe(b) || (_e(A, "Non-whitespace before first tag."), A.textNode = b, A.state = K.TEXT);
      }
      function Gt(A, b) {
        var D = "";
        return b < A.length && (D = A.charAt(b)), D;
      }
      function ft(A) {
        var b = this;
        if (this.error)
          throw this.error;
        if (b.closed)
          return Ze(
            b,
            "Cannot write after close. Assign an onready handler."
          );
        if (A === null)
          return Ye(b);
        typeof A == "object" && (A = A.toString());
        for (var D = 0, M = ""; M = Gt(A, D++), b.c = M, !!M; )
          switch (b.trackPosition && (b.position++, M === `
` ? (b.line++, b.column = 0) : b.column++), b.state) {
            case K.BEGIN:
              if (b.state = K.BEGIN_WHITESPACE, M === "\uFEFF")
                continue;
              gn(b, M);
              continue;
            case K.BEGIN_WHITESPACE:
              gn(b, M);
              continue;
            case K.TEXT:
              if (b.sawRoot && !b.closedRoot) {
                for (var je = D - 1; M && M !== "<" && M !== "&"; )
                  M = Gt(A, D++), M && b.trackPosition && (b.position++, M === `
` ? (b.line++, b.column = 0) : b.column++);
                b.textNode += A.substring(je, D - 1);
              }
              M === "<" && !(b.sawRoot && b.closedRoot && !b.strict) ? (b.state = K.OPEN_WAKA, b.startTagPosition = b.position) : (!fe(M) && (!b.sawRoot || b.closedRoot) && _e(b, "Text data outside of root node."), M === "&" ? b.state = K.TEXT_ENTITY : b.textNode += M);
              continue;
            case K.SCRIPT:
              M === "<" ? b.state = K.SCRIPT_ENDING : b.script += M;
              continue;
            case K.SCRIPT_ENDING:
              M === "/" ? b.state = K.CLOSE_TAG : (b.script += "<" + M, b.state = K.SCRIPT);
              continue;
            case K.OPEN_WAKA:
              if (M === "!")
                b.state = K.SGML_DECL, b.sgmlDecl = "";
              else if (!fe(M)) if (ee($e, M))
                b.state = K.OPEN_TAG, b.tagName = M;
              else if (M === "/")
                b.state = K.CLOSE_TAG, b.tagName = "";
              else if (M === "?")
                b.state = K.PROC_INST, b.procInstName = b.procInstBody = "";
              else {
                if (_e(b, "Unencoded <"), b.startTagPosition + 1 < b.position) {
                  var k = b.position - b.startTagPosition;
                  M = new Array(k).join(" ") + M;
                }
                b.textNode += "<" + M, b.state = K.TEXT;
              }
              continue;
            case K.SGML_DECL:
              if (b.sgmlDecl + M === "--") {
                b.state = K.COMMENT, b.comment = "", b.sgmlDecl = "";
                continue;
              }
              b.doctype && b.doctype !== !0 && b.sgmlDecl ? (b.state = K.DOCTYPE_DTD, b.doctype += "<!" + b.sgmlDecl + M, b.sgmlDecl = "") : (b.sgmlDecl + M).toUpperCase() === L ? (be(b, "onopencdata"), b.state = K.CDATA, b.sgmlDecl = "", b.cdata = "") : (b.sgmlDecl + M).toUpperCase() === Q ? (b.state = K.DOCTYPE, (b.doctype || b.sawRoot) && _e(
                b,
                "Inappropriately located doctype declaration"
              ), b.doctype = "", b.sgmlDecl = "") : M === ">" ? (be(b, "onsgmldeclaration", b.sgmlDecl), b.sgmlDecl = "", b.state = K.TEXT) : (Me(M) && (b.state = K.SGML_DECL_QUOTED), b.sgmlDecl += M);
              continue;
            case K.SGML_DECL_QUOTED:
              M === b.q && (b.state = K.SGML_DECL, b.q = ""), b.sgmlDecl += M;
              continue;
            case K.DOCTYPE:
              M === ">" ? (b.state = K.TEXT, be(b, "ondoctype", b.doctype), b.doctype = !0) : (b.doctype += M, M === "[" ? b.state = K.DOCTYPE_DTD : Me(M) && (b.state = K.DOCTYPE_QUOTED, b.q = M));
              continue;
            case K.DOCTYPE_QUOTED:
              b.doctype += M, M === b.q && (b.q = "", b.state = K.DOCTYPE);
              continue;
            case K.DOCTYPE_DTD:
              M === "]" ? (b.doctype += M, b.state = K.DOCTYPE) : M === "<" ? (b.state = K.OPEN_WAKA, b.startTagPosition = b.position) : Me(M) ? (b.doctype += M, b.state = K.DOCTYPE_DTD_QUOTED, b.q = M) : b.doctype += M;
              continue;
            case K.DOCTYPE_DTD_QUOTED:
              b.doctype += M, M === b.q && (b.state = K.DOCTYPE_DTD, b.q = "");
              continue;
            case K.COMMENT:
              M === "-" ? b.state = K.COMMENT_ENDING : b.comment += M;
              continue;
            case K.COMMENT_ENDING:
              M === "-" ? (b.state = K.COMMENT_ENDED, b.comment = pt(b.opt, b.comment), b.comment && be(b, "oncomment", b.comment), b.comment = "") : (b.comment += "-" + M, b.state = K.COMMENT);
              continue;
            case K.COMMENT_ENDED:
              M !== ">" ? (_e(b, "Malformed comment"), b.comment += "--" + M, b.state = K.COMMENT) : b.doctype && b.doctype !== !0 ? b.state = K.DOCTYPE_DTD : b.state = K.TEXT;
              continue;
            case K.CDATA:
              M === "]" ? b.state = K.CDATA_ENDING : b.cdata += M;
              continue;
            case K.CDATA_ENDING:
              M === "]" ? b.state = K.CDATA_ENDING_2 : (b.cdata += "]" + M, b.state = K.CDATA);
              continue;
            case K.CDATA_ENDING_2:
              M === ">" ? (b.cdata && be(b, "oncdata", b.cdata), be(b, "onclosecdata"), b.cdata = "", b.state = K.TEXT) : M === "]" ? b.cdata += "]" : (b.cdata += "]]" + M, b.state = K.CDATA);
              continue;
            case K.PROC_INST:
              M === "?" ? b.state = K.PROC_INST_ENDING : fe(M) ? b.state = K.PROC_INST_BODY : b.procInstName += M;
              continue;
            case K.PROC_INST_BODY:
              if (!b.procInstBody && fe(M))
                continue;
              M === "?" ? b.state = K.PROC_INST_ENDING : b.procInstBody += M;
              continue;
            case K.PROC_INST_ENDING:
              M === ">" ? (be(b, "onprocessinginstruction", {
                name: b.procInstName,
                body: b.procInstBody
              }), b.procInstName = b.procInstBody = "", b.state = K.TEXT) : (b.procInstBody += "?" + M, b.state = K.PROC_INST_BODY);
              continue;
            case K.OPEN_TAG:
              ee(Ne, M) ? b.tagName += M : (Ae(b), M === ">" ? ct(b) : M === "/" ? b.state = K.OPEN_TAG_SLASH : (fe(M) || _e(b, "Invalid character in tag name"), b.state = K.ATTRIB));
              continue;
            case K.OPEN_TAG_SLASH:
              M === ">" ? (ct(b, !0), _t(b)) : (_e(b, "Forward-slash in opening tag not followed by >"), b.state = K.ATTRIB);
              continue;
            case K.ATTRIB:
              if (fe(M))
                continue;
              M === ">" ? ct(b) : M === "/" ? b.state = K.OPEN_TAG_SLASH : ee($e, M) ? (b.attribName = M, b.attribValue = "", b.state = K.ATTRIB_NAME) : _e(b, "Invalid attribute name");
              continue;
            case K.ATTRIB_NAME:
              M === "=" ? b.state = K.ATTRIB_VALUE : M === ">" ? (_e(b, "Attribute without value"), b.attribValue = b.attribName, et(b), ct(b)) : fe(M) ? b.state = K.ATTRIB_NAME_SAW_WHITE : ee(Ne, M) ? b.attribName += M : _e(b, "Invalid attribute name");
              continue;
            case K.ATTRIB_NAME_SAW_WHITE:
              if (M === "=")
                b.state = K.ATTRIB_VALUE;
              else {
                if (fe(M))
                  continue;
                _e(b, "Attribute without value"), b.tag.attributes[b.attribName] = "", b.attribValue = "", be(b, "onattribute", {
                  name: b.attribName,
                  value: ""
                }), b.attribName = "", M === ">" ? ct(b) : ee($e, M) ? (b.attribName = M, b.state = K.ATTRIB_NAME) : (_e(b, "Invalid attribute name"), b.state = K.ATTRIB);
              }
              continue;
            case K.ATTRIB_VALUE:
              if (fe(M))
                continue;
              Me(M) ? (b.q = M, b.state = K.ATTRIB_VALUE_QUOTED) : (b.opt.unquotedAttributeValues || Ze(b, "Unquoted attribute value"), b.state = K.ATTRIB_VALUE_UNQUOTED, b.attribValue = M);
              continue;
            case K.ATTRIB_VALUE_QUOTED:
              if (M !== b.q) {
                M === "&" ? b.state = K.ATTRIB_VALUE_ENTITY_Q : b.attribValue += M;
                continue;
              }
              et(b), b.q = "", b.state = K.ATTRIB_VALUE_CLOSED;
              continue;
            case K.ATTRIB_VALUE_CLOSED:
              fe(M) ? b.state = K.ATTRIB : M === ">" ? ct(b) : M === "/" ? b.state = K.OPEN_TAG_SLASH : ee($e, M) ? (_e(b, "No whitespace between attributes"), b.attribName = M, b.attribValue = "", b.state = K.ATTRIB_NAME) : _e(b, "Invalid attribute name");
              continue;
            case K.ATTRIB_VALUE_UNQUOTED:
              if (!Re(M)) {
                M === "&" ? b.state = K.ATTRIB_VALUE_ENTITY_U : b.attribValue += M;
                continue;
              }
              et(b), M === ">" ? ct(b) : b.state = K.ATTRIB;
              continue;
            case K.CLOSE_TAG:
              if (b.tagName)
                M === ">" ? _t(b) : ee(Ne, M) ? b.tagName += M : b.script ? (b.script += "</" + b.tagName, b.tagName = "", b.state = K.SCRIPT) : (fe(M) || _e(b, "Invalid tagname in closing tag"), b.state = K.CLOSE_TAG_SAW_WHITE);
              else {
                if (fe(M))
                  continue;
                ne($e, M) ? b.script ? (b.script += "</" + M, b.state = K.SCRIPT) : _e(b, "Invalid tagname in closing tag.") : b.tagName = M;
              }
              continue;
            case K.CLOSE_TAG_SAW_WHITE:
              if (fe(M))
                continue;
              M === ">" ? _t(b) : _e(b, "Invalid characters in closing tag");
              continue;
            case K.TEXT_ENTITY:
            case K.ATTRIB_VALUE_ENTITY_Q:
            case K.ATTRIB_VALUE_ENTITY_U:
              var R, Y;
              switch (b.state) {
                case K.TEXT_ENTITY:
                  R = K.TEXT, Y = "textNode";
                  break;
                case K.ATTRIB_VALUE_ENTITY_Q:
                  R = K.ATTRIB_VALUE_QUOTED, Y = "attribValue";
                  break;
                case K.ATTRIB_VALUE_ENTITY_U:
                  R = K.ATTRIB_VALUE_UNQUOTED, Y = "attribValue";
                  break;
              }
              if (M === ";") {
                var z = wt(b);
                b.opt.unparsedEntities && !Object.values(i.XML_ENTITIES).includes(z) ? (b.entity = "", b.state = R, b.write(z)) : (b[Y] += z, b.entity = "", b.state = R);
              } else ee(b.entity.length ? Ve : Be, M) ? b.entity += M : (_e(b, "Invalid character in entity name"), b[Y] += "&" + b.entity + M, b.entity = "", b.state = R);
              continue;
            default:
              throw new Error(b, "Unknown state: " + b.state);
          }
        return b.position >= b.bufferCheckPosition && h(b), b;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var A = String.fromCharCode, b = Math.floor, D = function() {
          var M = 16384, je = [], k, R, Y = -1, z = arguments.length;
          if (!z)
            return "";
          for (var te = ""; ++Y < z; ) {
            var J = Number(arguments[Y]);
            if (!isFinite(J) || // `NaN`, `+Infinity`, or `-Infinity`
            J < 0 || // not a valid Unicode code point
            J > 1114111 || // not a valid Unicode code point
            b(J) !== J)
              throw RangeError("Invalid code point: " + J);
            J <= 65535 ? je.push(J) : (J -= 65536, k = (J >> 10) + 55296, R = J % 1024 + 56320, je.push(k, R)), (Y + 1 === z || je.length > M) && (te += A.apply(null, je), je.length = 0);
          }
          return te;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: D,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = D;
      }();
    })(n);
  }(gs)), gs;
}
var Ql = zl();
const Ui = {};
function Jl(n) {
  const { parentId: i, child: u } = n;
  Ui[i] || (Ui[i] = []);
  const c = {
    id: u.id,
    tagName: u.tagName
  };
  Ui[i].push(c);
}
function Zl(n) {
  const { currentBatch: i } = n, u = [...i];
  for (const [c, h] of u.entries()) {
    const p = Ui[h.id] || [];
    p.length > 0 && (u[c].children.push(...p), ef({
      parentId: h.id
    }));
  }
  return u;
}
function ef(n) {
  const { parentId: i } = n;
  delete Ui[i];
}
function tf(n) {
  return "prefix" in n && "uri" in n && !!n.prefix && !!n.uri;
}
function nf() {
  let n = {
    stack: [],
    recordsBatch: []
  };
  const i = Ql.parser(
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
  i.onopentag = (h) => n = rf({ node: h, state: n }), i.ontext = (h) => n = of({ text: h, state: n }), i.onclosetag = () => ({ updatedState: n } = af({
    state: n
  })), i.onerror = sf;
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
function rf(n) {
  const { node: i, state: u } = n, c = { ...u }, h = uf(i), p = cf(i), O = lf(i.attributes), S = ff(u.stack), N = {
    id: crypto.randomUUID(),
    tagName: h,
    namespace: p,
    attributes: O,
    value: "",
    parent: S,
    children: []
  };
  return c.stack.push(N), c;
}
function of(n) {
  const { text: i, state: u } = n;
  return i && u.stack.length > 0 && (u.stack[u.stack.length - 1].value += i), u;
}
function af(n) {
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
    } else u.parent && Jl({
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
function sf(n) {
  return new Error(`XML parsing error: ${n}`);
}
function uf(n) {
  return n.local || null;
}
function cf(n) {
  return tf(n) ? {
    prefix: n.prefix,
    uri: n.uri
  } : null;
}
function lf(n) {
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
function ff(n) {
  if (n.length === 0) return null;
  const i = n[n.length - 1];
  return i ? { id: i.id, tagName: i.tagName } : null;
}
var wa = { exports: {} }, hf = wa.exports, _s;
function df() {
  return _s || (_s = 1, function(n, i) {
    (function(u, c) {
      n.exports = c();
    })(hf, function() {
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
      var p = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Wl, O = Object.keys, S = Array.isArray;
      function N(e, t) {
        return typeof t != "object" || O(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || p.Promise || (p.Promise = Promise);
      var $ = Object.getPrototypeOf, j = {}.hasOwnProperty;
      function L(e, t) {
        return j.call(e, t);
      }
      function Q(e, t) {
        typeof t == "function" && (t = t($(e))), (typeof Reflect > "u" ? O : Reflect.ownKeys)(t).forEach(function(r) {
          he(e, r, t[r]);
        });
      }
      var ae = Object.defineProperty;
      function he(e, t, r, o) {
        ae(e, t, N(r && L(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function de(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), he(e.prototype, "constructor", e), { extend: Q.bind(null, e.prototype) };
        } };
      }
      var $e = Object.getOwnPropertyDescriptor, Ne = [].slice;
      function Be(e, t, r) {
        return Ne.call(e, t, r);
      }
      function Ve(e, t) {
        return t(e);
      }
      function fe(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Me(e) {
        p.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Re(e, t) {
        if (typeof t == "string" && L(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var r = [], o = 0, a = t.length; o < a; ++o) {
            var s = Re(e, t[o]);
            r.push(s);
          }
          return r;
        }
        var l = t.indexOf(".");
        if (l !== -1) {
          var f = e[t.substr(0, l)];
          return f == null ? void 0 : Re(f, t.substr(l + 1));
        }
      }
      function ee(e, t, r) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          fe(typeof r != "string" && "length" in r);
          for (var o = 0, a = t.length; o < a; ++o) ee(e, t[o], r[o]);
        } else {
          var s, l, f = t.indexOf(".");
          f !== -1 ? (s = t.substr(0, f), (l = t.substr(f + 1)) === "" ? r === void 0 ? S(e) && !isNaN(parseInt(s)) ? e.splice(s, 1) : delete e[s] : e[s] = r : ee(f = !(f = e[s]) || !L(e, s) ? e[s] = {} : f, l, r)) : r === void 0 ? S(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function ne(e) {
        var t, r = {};
        for (t in e) L(e, t) && (r[t] = e[t]);
        return r;
      }
      var K = [].concat;
      function xe(e) {
        return K.apply([], e);
      }
      var Te = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(xe([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return p[e];
      }), Ke = new Set(Te.map(function(e) {
        return p[e];
      })), be = null;
      function Fe(e) {
        return be = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var o = be.get(r);
          if (o) return o;
          if (S(r)) {
            o = [], be.set(r, o);
            for (var a = 0, s = r.length; a < s; ++a) o.push(t(r[a]));
          } else if (Ke.has(r.constructor)) o = r;
          else {
            var l, f = $(r);
            for (l in o = f === Object.prototype ? {} : Object.create(f), be.set(r, o), r) L(r, l) && (o[l] = t(r[l]));
          }
          return o;
        }(e), be = null, e;
      }
      var pt = {}.toString;
      function Ze(e) {
        return pt.call(e).slice(8, -1);
      }
      var Ye = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", _e = typeof Ye == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Ye]) && t.apply(e);
      } : function() {
        return null;
      };
      function Ae(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var st = {};
      function et(e) {
        var t, r, o, a;
        if (arguments.length === 1) {
          if (S(e)) return e.slice();
          if (this === st && typeof e == "string") return [e];
          if (a = _e(e)) {
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
      var ct = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, we = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], ut = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(we), _t = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function wt(e, t) {
        this.name = e, this.message = t;
      }
      function gn(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(r) {
          return t[r].toString();
        }).filter(function(r, o, a) {
          return a.indexOf(r) === o;
        }).join(`
`);
      }
      function Gt(e, t, r, o) {
        this.failures = t, this.failedKeys = o, this.successCount = r, this.message = gn(e, t);
      }
      function ft(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(r) {
          return t[r];
        }), this.failuresByPos = t, this.message = gn(e, this.failures);
      }
      de(wt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), de(Gt).from(wt), de(ft).from(wt);
      var A = ut.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), b = wt, D = ut.reduce(function(e, t) {
        var r = t + "Error";
        function o(a, s) {
          this.name = r, a ? typeof a == "string" ? (this.message = "".concat(a).concat(s ? `
 ` + s : ""), this.inner = s || null) : typeof a == "object" && (this.message = "".concat(a.name, " ").concat(a.message), this.inner = a) : (this.message = _t[t] || r, this.inner = null);
        }
        return de(o).from(b), e[t] = o, e;
      }, {});
      D.Syntax = SyntaxError, D.Type = TypeError, D.Range = RangeError;
      var M = we.reduce(function(e, t) {
        return e[t + "Error"] = D[t], e;
      }, {}), je = ut.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = D[t]), e;
      }, {});
      function k() {
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
      function te(e, t) {
        return e === k ? t : function() {
          var r = e.apply(this, arguments);
          r !== void 0 && (arguments[0] = r);
          var o = this.onsuccess, a = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var s = t.apply(this, arguments);
          return o && (this.onsuccess = this.onsuccess ? z(o, this.onsuccess) : o), a && (this.onerror = this.onerror ? z(a, this.onerror) : a), s !== void 0 ? s : r;
        };
      }
      function J(e, t) {
        return e === k ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? z(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? z(o, this.onerror) : o);
        };
      }
      function se(e, t) {
        return e === k ? t : function(r) {
          var o = e.apply(this, arguments);
          N(r, o);
          var a = this.onsuccess, s = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), a && (this.onsuccess = this.onsuccess ? z(a, this.onsuccess) : a), s && (this.onerror = this.onerror ? z(s, this.onerror) : s), o === void 0 ? r === void 0 ? void 0 : r : N(o, r);
        };
      }
      function ce(e, t) {
        return e === k ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function re(e, t) {
        return e === k ? t : function() {
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
      je.ModifyError = Gt, je.DexieError = wt, je.BulkError = ft;
      var Z = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function ge(e) {
        Z = e;
      }
      var le = {}, ve = 100, Te = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, $(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, $(t), e];
      }(), we = Te[0], ut = Te[1], Te = Te[2], ut = ut && ut.then, De = we && we.constructor, qe = !!Te, it = function(e, t) {
        Yt.push([e, t]), yt && (queueMicrotask(So), yt = !1);
      }, lt = !0, yt = !0, ot = [], Dt = [], vn = R, Xe = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: k, pgp: !1, env: {}, finalize: k }, X = Xe, Yt = [], Rt = 0, On = [];
      function H(e) {
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
                  s instanceof H ? s._then(f, y) : s.then(f, y);
                }) : (o._state = !0, o._value = s, ti(o)), l && Qt();
              }
            }, cr.bind(null, o));
          } catch (s) {
            cr(o, s);
          }
        }(this, e);
      }
      var ur = { get: function() {
        var e = X, t = Pn;
        function r(o, a) {
          var s = this, l = !e.global && (e !== X || t !== Pn), f = l && !Ot(), y = new H(function(g, _) {
            lr(s, new ei(ri(o, e, l, f), ri(a, e, l, f), g, _, e));
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
        Dt.push(t), e._state === null && (r = e._lib && zt(), t = vn(t), e._state = !1, e._value = t, o = e, ot.some(function(a) {
          return a._value === o._value;
        }) || ot.push(o), ti(e), r && Qt());
      }
      function ti(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var r = 0, o = t.length; r < o; ++r) lr(e, t[r]);
        var a = e._PSD;
        --a.ref || a.finalize(), Rt === 0 && (++Rt, it(function() {
          --Rt == 0 && fr();
        }, []));
      }
      function lr(e, t) {
        if (e._state !== null) {
          var r = e._state ? t.onFulfilled : t.onRejected;
          if (r === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++Rt, it(Oo, [r, e, t]);
        } else e._listeners.push(t);
      }
      function Oo(e, t, r) {
        try {
          var o, a = t._value;
          !t._state && Dt.length && (Dt = []), o = Z && t._consoleTask ? t._consoleTask.run(function() {
            return e(a);
          }) : e(a), t._state || Dt.indexOf(a) !== -1 || function(s) {
            for (var l = ot.length; l; ) if (ot[--l]._value === s._value) return ot.splice(l, 1);
          }(t), r.resolve(o);
        } catch (s) {
          r.reject(s);
        } finally {
          --Rt == 0 && fr(), --r.psd.ref || r.psd.finalize();
        }
      }
      function So() {
        Kt(Xe, function() {
          zt() && Qt();
        });
      }
      function zt() {
        var e = lt;
        return yt = lt = !1, e;
      }
      function Qt() {
        var e, t, r;
        do
          for (; 0 < Yt.length; ) for (e = Yt, Yt = [], r = e.length, t = 0; t < r; ++t) {
            var o = e[t];
            o[0].apply(null, o[1]);
          }
        while (0 < Yt.length);
        yt = lt = !0;
      }
      function fr() {
        var e = ot;
        ot = [], e.forEach(function(o) {
          o._PSD.onunhandled.call(null, o._value, o);
        });
        for (var t = On.slice(0), r = t.length; r; ) t[--r]();
      }
      function Sn(e) {
        return new H(le, !1, e);
      }
      function Oe(e, t) {
        var r = X;
        return function() {
          var o = zt(), a = X;
          try {
            return St(r, !0), e.apply(this, arguments);
          } catch (s) {
            t && t(s);
          } finally {
            St(a, !1), o && Qt();
          }
        };
      }
      Q(H.prototype, { then: ur, _then: function(e, t) {
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
          return H.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return H.resolve(e()).then(function() {
            return Sn(t);
          });
        });
      }, timeout: function(e, t) {
        var r = this;
        return e < 1 / 0 ? new H(function(o, a) {
          var s = setTimeout(function() {
            return a(new D.Timeout(t));
          }, e);
          r.then(o, a).finally(clearTimeout.bind(null, s));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && he(H.prototype, Symbol.toStringTag, "Dexie.Promise"), Xe.env = ni(), Q(H, { all: function() {
        var e = et.apply(null, arguments).map(Cn);
        return new H(function(t, r) {
          e.length === 0 && t([]);
          var o = e.length;
          e.forEach(function(a, s) {
            return H.resolve(a).then(function(l) {
              e[s] = l, --o || t(e);
            }, r);
          });
        });
      }, resolve: function(e) {
        return e instanceof H ? e : e && typeof e.then == "function" ? new H(function(t, r) {
          e.then(t, r);
        }) : new H(le, !0, e);
      }, reject: Sn, race: function() {
        var e = et.apply(null, arguments).map(Cn);
        return new H(function(t, r) {
          e.map(function(o) {
            return H.resolve(o).then(t, r);
          });
        });
      }, PSD: { get: function() {
        return X;
      }, set: function(e) {
        return X = e;
      } }, totalEchoes: { get: function() {
        return Pn;
      } }, newPSD: Tt, usePSD: Kt, scheduler: { get: function() {
        return it;
      }, set: function(e) {
        it = e;
      } }, rejectionMapper: { get: function() {
        return vn;
      }, set: function(e) {
        vn = e;
      } }, follow: function(e, t) {
        return new H(function(r, o) {
          return Tt(function(a, s) {
            var l = X;
            l.unhandleds = [], l.onunhandled = s, l.finalize = z(function() {
              var f, y = this;
              f = function() {
                y.unhandleds.length === 0 ? a() : s(y.unhandleds[0]);
              }, On.push(function g() {
                f(), On.splice(On.indexOf(g), 1);
              }), ++Rt, it(function() {
                --Rt == 0 && fr();
              }, []);
            }, l.finalize), e();
          }, t, r, o);
        });
      } }), De && (De.allSettled && he(H, "allSettled", function() {
        var e = et.apply(null, arguments).map(Cn);
        return new H(function(t) {
          e.length === 0 && t([]);
          var r = e.length, o = new Array(r);
          e.forEach(function(a, s) {
            return H.resolve(a).then(function(l) {
              return o[s] = { status: "fulfilled", value: l };
            }, function(l) {
              return o[s] = { status: "rejected", reason: l };
            }).then(function() {
              return --r || t(o);
            });
          });
        });
      }), De.any && typeof AggregateError < "u" && he(H, "any", function() {
        var e = et.apply(null, arguments).map(Cn);
        return new H(function(t, r) {
          e.length === 0 && r(new AggregateError([]));
          var o = e.length, a = new Array(o);
          e.forEach(function(s, l) {
            return H.resolve(s).then(function(f) {
              return t(f);
            }, function(f) {
              a[l] = f, --o || r(new AggregateError(a));
            });
          });
        });
      }), De.withResolvers && (H.withResolvers = De.withResolvers));
      var Le = { awaits: 0, echoes: 0, id: 0 }, ko = 0, kn = [], An = 0, Pn = 0, Ao = 0;
      function Tt(e, t, r, o) {
        var a = X, s = Object.create(a);
        return s.parent = a, s.ref = 0, s.global = !1, s.id = ++Ao, Xe.env, s.env = qe ? { Promise: H, PromiseProp: { value: H, configurable: !0, writable: !0 }, all: H.all, race: H.race, allSettled: H.allSettled, any: H.any, resolve: H.resolve, reject: H.reject } : {}, t && N(s, t), ++a.ref, s.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = Kt(s, e, r, o), s.ref === 0 && s.finalize(), o;
      }
      function Jt() {
        return Le.id || (Le.id = ++ko), ++Le.awaits, Le.echoes += ve, Le.id;
      }
      function Ot() {
        return !!Le.awaits && (--Le.awaits == 0 && (Le.id = 0), Le.echoes = Le.awaits * ve, !0);
      }
      function Cn(e) {
        return Le.echoes && e && e.constructor === De ? (Jt(), e.then(function(t) {
          return Ot(), t;
        }, function(t) {
          return Ot(), Pe(t);
        })) : e;
      }
      function Po() {
        var e = kn[kn.length - 1];
        kn.pop(), St(e, !1);
      }
      function St(e, t) {
        var r, o = X;
        (t ? !Le.echoes || An++ && e === X : !An || --An && e === X) || queueMicrotask(t ? (function(a) {
          ++Pn, Le.echoes && --Le.echoes != 0 || (Le.echoes = Le.awaits = Le.id = 0), kn.push(X), St(a, !0);
        }).bind(null, e) : Po), e !== X && (X = e, o === Xe && (Xe.env = ni()), qe && (r = Xe.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(p, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function ni() {
        var e = p.Promise;
        return qe ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(p, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Kt(e, t, r, o, a) {
        var s = X;
        try {
          return St(e, !0), t(r, o, a);
        } finally {
          St(s, !1);
        }
      }
      function ri(e, t, r, o) {
        return typeof e != "function" ? e : function() {
          var a = X;
          r && Jt(), St(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            St(a, !1), o && queueMicrotask(Ot);
          }
        };
      }
      function hr(e) {
        Promise === De && Le.echoes === 0 ? An === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + ut).indexOf("[native code]") === -1 && (Jt = Ot = k);
      var Pe = H.reject, jt = "￿", mt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", ii = "String expected.", Zt = [], In = "__dbnames", dr = "readonly", pr = "readwrite";
      function Ft(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var oi = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Nn(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = Fe(t))[e], t;
        };
      }
      function ai() {
        throw D.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
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
                for (var l = a.length, f = s.length, y = l < f ? l : f, g = 0; g < y; ++g) if (a[g] !== s[g]) return a[g] < s[g] ? -1 : 1;
                return l === f ? 0 : l < f ? -1 : 1;
              }(ui(e), ui(t));
            case "Array":
              return function(a, s) {
                for (var l = a.length, f = s.length, y = l < f ? l : f, g = 0; g < y; ++g) {
                  var _ = pe(a[g], s[g]);
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
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = Ze(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function ui(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function Dn(e, t, r) {
        var o = e.schema.yProps;
        return o ? (t && 0 < r.numFailures && (t = t.filter(function(a, s) {
          return !r.failures[s];
        })), Promise.all(o.map(function(a) {
          return a = a.updatesTable, t ? e.db.table(a).where("k").anyOf(t).delete() : e.db.table(a).clear();
        })).then(function() {
          return r;
        })) : r;
      }
      var ci = (Ee.prototype._trans = function(e, t, r) {
        var o = this._tx || X.trans, a = this.name, s = Z && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function l(g, _, d) {
          if (!d.schema[a]) throw new D.NotFound("Table " + a + " not part of transaction");
          return t(d.idbtrans, d);
        }
        var f = zt();
        try {
          var y = o && o.db._novip === this.db._novip ? o === X.trans ? o._promise(e, l, r) : Tt(function() {
            return o._promise(e, l, r);
          }, { trans: o, transless: X.transless || X }) : function g(_, d, E, m) {
            if (_.idbdb && (_._state.openComplete || X.letThrough || _._vip)) {
              var v = _._createTransaction(d, E, _._dbSchema);
              try {
                v.create(), _._state.PR1398_maxLoop = 3;
              } catch (x) {
                return x.name === A.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                  return g(_, d, E, m);
                })) : Pe(x);
              }
              return v._promise(d, function(x, w) {
                return Tt(function() {
                  return X.trans = v, m(x, w, v);
                });
              }).then(function(x) {
                if (d === "readwrite") try {
                  v.idbtrans.commit();
                } catch {
                }
                return d === "readonly" ? x : v._completion.then(function() {
                  return x;
                });
              });
            }
            if (_._state.openComplete) return Pe(new D.DatabaseClosed(_._state.dbOpenError));
            if (!_._state.isBeingOpened) {
              if (!_._state.autoOpen) return Pe(new D.DatabaseClosed());
              _.open().catch(k);
            }
            return _._state.dbReadyPromise.then(function() {
              return g(_, d, E, m);
            });
          }(this.db, e, [this.name], l);
          return s && (y._consoleTask = s, y = y.catch(function(g) {
            return console.trace(g), Pe(g);
          })), y;
        } finally {
          f && Qt();
        }
      }, Ee.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? Pe(new D.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(a) {
            return r.hook.reading.fire(a);
          });
        }).then(t);
      }, Ee.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (S(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = O(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var r = this.schema.indexes.concat(this.schema.primKey).filter(function(f) {
          if (f.compound && t.every(function(g) {
            return 0 <= f.keyPath.indexOf(g);
          })) {
            for (var y = 0; y < t.length; ++y) if (t.indexOf(f.keyPath[y]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(f, y) {
          return f.keyPath.length - y.keyPath.length;
        })[0];
        if (r && this.db._maxKey !== jt) {
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
          var g = d[0], _ = d[1], d = o[y], E = e[y];
          return [g || d, g || !d ? Ft(_, d && d.multi ? function(m) {
            return m = Re(m, y), S(m) && m.some(function(v) {
              return a(E, v);
            });
          } : function(m) {
            return a(E, Re(m, y));
          }) : _];
        }, [null, null]), s = l[0], l = l[1];
        return s ? this.where(s.name).equals(e[s.keyPath]).filter(l) : r ? this.filter(l) : this.where(t).equals("");
      }, Ee.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, Ee.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, Ee.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, Ee.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, Ee.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, Ee.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, Ee.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Ee.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, S(e) ? "[".concat(e.join("+"), "]") : e));
      }, Ee.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Ee.prototype.mapToClass = function(e) {
        var t, r = this.db, o = this.name;
        function a() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof ai && (function(y, g) {
          if (typeof g != "function" && g !== null) throw new TypeError("Class extends value " + String(g) + " is not a constructor or null");
          function _() {
            this.constructor = y;
          }
          u(y, g), y.prototype = g === null ? Object.create(g) : (_.prototype = g.prototype, new _());
        }(a, t = e), Object.defineProperty(a.prototype, "db", { get: function() {
          return r;
        }, enumerable: !1, configurable: !0 }), a.prototype.table = function() {
          return o;
        }, e = a);
        for (var s = /* @__PURE__ */ new Set(), l = e.prototype; l; l = $(l)) Object.getOwnPropertyNames(l).forEach(function(y) {
          return s.add(y);
        });
        function f(y) {
          if (!y) return y;
          var g, _ = Object.create(e.prototype);
          for (g in y) if (!s.has(g)) try {
            _[g] = y[g];
          } catch {
          }
          return _;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = f, this.hook("reading", f), e;
      }, Ee.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          N(this, e);
        });
      }, Ee.prototype.add = function(e, t) {
        var r = this, o = this.schema.primKey, a = o.auto, s = o.keyPath, l = e;
        return s && a && (l = Nn(s)(e)), this._trans("readwrite", function(f) {
          return r.core.mutate({ trans: f, type: "add", keys: t != null ? [t] : null, values: [l] });
        }).then(function(f) {
          return f.numFailures ? H.reject(f.failures[0]) : f.lastResult;
        }).then(function(f) {
          if (s) try {
            ee(e, s, f);
          } catch {
          }
          return f;
        });
      }, Ee.prototype.update = function(e, t) {
        return typeof e != "object" || S(e) ? this.where(":id").equals(e).modify(t) : (e = Re(e, this.schema.primKey.keyPath), e === void 0 ? Pe(new D.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, Ee.prototype.put = function(e, t) {
        var r = this, o = this.schema.primKey, a = o.auto, s = o.keyPath, l = e;
        return s && a && (l = Nn(s)(e)), this._trans("readwrite", function(f) {
          return r.core.mutate({ trans: f, type: "put", values: [l], keys: t != null ? [t] : null });
        }).then(function(f) {
          return f.numFailures ? H.reject(f.failures[0]) : f.lastResult;
        }).then(function(f) {
          if (s) try {
            ee(e, s, f);
          } catch {
          }
          return f;
        });
      }, Ee.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: [e] }).then(function(o) {
            return Dn(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? H.reject(o.failures[0]) : void 0;
          });
        });
      }, Ee.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: oi }).then(function(r) {
            return Dn(e, null, r);
          });
        }).then(function(t) {
          return t.numFailures ? H.reject(t.failures[0]) : void 0;
        });
      }, Ee.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(r) {
          return t.core.getMany({ keys: e, trans: r }).then(function(o) {
            return o.map(function(a) {
              return t.hook.reading.fire(a);
            });
          });
        });
      }, Ee.prototype.bulkAdd = function(e, t, r) {
        var o = this, a = Array.isArray(t) ? t : void 0, s = (r = r || (a ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var g = o.schema.primKey, f = g.auto, g = g.keyPath;
          if (g && a) throw new D.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new D.InvalidArgument("Arguments objects and keys must have the same length");
          var y = e.length, g = g && f ? e.map(Nn(g)) : e;
          return o.core.mutate({ trans: l, type: "add", keys: a, values: g, wantResults: s }).then(function(v) {
            var d = v.numFailures, E = v.results, m = v.lastResult, v = v.failures;
            if (d === 0) return s ? E : m;
            throw new ft("".concat(o.name, ".bulkAdd(): ").concat(d, " of ").concat(y, " operations failed"), v);
          });
        });
      }, Ee.prototype.bulkPut = function(e, t, r) {
        var o = this, a = Array.isArray(t) ? t : void 0, s = (r = r || (a ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var g = o.schema.primKey, f = g.auto, g = g.keyPath;
          if (g && a) throw new D.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new D.InvalidArgument("Arguments objects and keys must have the same length");
          var y = e.length, g = g && f ? e.map(Nn(g)) : e;
          return o.core.mutate({ trans: l, type: "put", keys: a, values: g, wantResults: s }).then(function(v) {
            var d = v.numFailures, E = v.results, m = v.lastResult, v = v.failures;
            if (d === 0) return s ? E : m;
            throw new ft("".concat(o.name, ".bulkPut(): ").concat(d, " of ").concat(y, " operations failed"), v);
          });
        });
      }, Ee.prototype.bulkUpdate = function(e) {
        var t = this, r = this.core, o = e.map(function(l) {
          return l.key;
        }), a = e.map(function(l) {
          return l.changes;
        }), s = [];
        return this._trans("readwrite", function(l) {
          return r.getMany({ trans: l, keys: o, cache: "clone" }).then(function(f) {
            var y = [], g = [];
            e.forEach(function(d, E) {
              var m = d.key, v = d.changes, x = f[E];
              if (x) {
                for (var w = 0, T = Object.keys(v); w < T.length; w++) {
                  var P = T[w], C = v[P];
                  if (P === t.schema.primKey.keyPath) {
                    if (pe(C, m) !== 0) throw new D.Constraint("Cannot update primary key in bulkUpdate()");
                  } else ee(x, P, C);
                }
                s.push(E), y.push(m), g.push(x);
              }
            });
            var _ = y.length;
            return r.mutate({ trans: l, type: "put", keys: y, values: g, updates: { keys: o, changeSpecs: a } }).then(function(d) {
              var E = d.numFailures, m = d.failures;
              if (E === 0) return _;
              for (var v = 0, x = Object.keys(m); v < x.length; v++) {
                var w, T = x[v], P = s[Number(T)];
                P != null && (w = m[T], delete m[T], m[P] = w);
              }
              throw new ft("".concat(t.name, ".bulkUpdate(): ").concat(E, " of ").concat(_, " operations failed"), m);
            });
          });
        });
      }, Ee.prototype.bulkDelete = function(e) {
        var t = this, r = e.length;
        return this._trans("readwrite", function(o) {
          return t.core.mutate({ trans: o, type: "delete", keys: e }).then(function(a) {
            return Dn(t, e, a);
          });
        }).then(function(l) {
          var a = l.numFailures, s = l.lastResult, l = l.failures;
          if (a === 0) return s;
          throw new ft("".concat(t.name, ".bulkDelete(): ").concat(a, " of ").concat(r, " operations failed"), l);
        });
      }, Ee);
      function Ee() {
      }
      function sn(e) {
        function t(l, f) {
          if (f) {
            for (var y = arguments.length, g = new Array(y - 1); --y; ) g[y - 1] = arguments[y];
            return r[l].subscribe.apply(null, g), e;
          }
          if (typeof l == "string") return r[l];
        }
        var r = {};
        t.addEventType = s;
        for (var o = 1, a = arguments.length; o < a; ++o) s(arguments[o]);
        return t;
        function s(l, f, y) {
          if (typeof l != "object") {
            var g;
            f = f || ce;
            var _ = { subscribers: [], fire: y = y || k, subscribe: function(d) {
              _.subscribers.indexOf(d) === -1 && (_.subscribers.push(d), _.fire = f(_.fire, d));
            }, unsubscribe: function(d) {
              _.subscribers = _.subscribers.filter(function(E) {
                return E !== d;
              }), _.fire = _.subscribers.reduce(f, y);
            } };
            return r[l] = t[l] = _;
          }
          O(g = l).forEach(function(d) {
            var E = g[d];
            if (S(E)) s(d, g[d][0], g[d][1]);
            else {
              if (E !== "asap") throw new D.InvalidArgument("Invalid event config");
              var m = s(d, R, function() {
                for (var v = arguments.length, x = new Array(v); v--; ) x[v] = arguments[v];
                m.subscribers.forEach(function(w) {
                  Me(function() {
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
        e.filter = Ft(e.filter, t);
      }
      function mr(e, t, r) {
        var o = e.replayFilter;
        e.replayFilter = o ? function() {
          return Ft(o(), t());
        } : t, e.justLimit = r && !o;
      }
      function Rn(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var r = t.getIndexByKeyPath(e.index);
        if (!r) throw new D.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return r;
      }
      function li(e, t, r) {
        var o = Rn(e, t.schema);
        return t.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: o, range: e.range } });
      }
      function Kn(e, t, r, o) {
        var a = e.replayFilter ? Ft(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var s = {}, l = function(f, y, g) {
            var _, d;
            a && !a(y, g, function(E) {
              return y.stop(E);
            }, function(E) {
              return y.fail(E);
            }) || ((d = "" + (_ = y.primaryKey)) == "[object ArrayBuffer]" && (d = "" + new Uint8Array(_)), L(s, d) || (s[d] = !0, t(f, y, g)));
          };
          return Promise.all([e.or._iterate(l, r), fi(li(e, o, r), e.algorithm, l, !e.keysOnly && e.valueMapper)]);
        }
        return fi(li(e, o, r), Ft(e.algorithm, a), t, !e.keysOnly && e.valueMapper);
      }
      function fi(e, t, r, o) {
        var a = Oe(o ? function(s, l, f) {
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
              s.stop(f), l = k;
            }, function(f) {
              s.fail(f), l = k;
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
        return r.error ? r.table._trans(null, Pe.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, me.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, Pe.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, me.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Ft(t.algorithm, e);
      }, me.prototype._iterate = function(e, t) {
        return Kn(this._ctx, e, t, this._ctx.table.core);
      }, me.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && N(r, e), t._ctx = r, t;
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
        function s(y, g) {
          return g ? s(y[r[g]], g - 1) : y[o];
        }
        var l = this._ctx.dir === "next" ? 1 : -1;
        function f(y, g) {
          return pe(s(y, a), s(g, a)) * l;
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
        }), (t = this._ctx).isMatch = Ft(t.isMatch, e), this;
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
            for (var P = !1, C = 0; C < s; ++C) {
              var I = a[C], F = e[I], U = Re(T, I);
              F instanceof cn ? (ee(T, I, F.execute(U)), P = !0) : U !== F && (ee(T, I, F), P = !0);
            }
            return P;
          });
          var f = r.table.core, d = f.schema.primaryKey, y = d.outbound, g = d.extractKey, _ = 200, d = t.db._options.modifyChunkSize;
          d && (_ = typeof d == "object" ? d[f.name] || d["*"] || 200 : d);
          function E(T, I) {
            var C = I.failures, I = I.numFailures;
            v += T - I;
            for (var F = 0, U = O(C); F < U.length; F++) {
              var B = U[F];
              m.push(C[B]);
            }
          }
          var m = [], v = 0, x = [], w = e === di;
          return t.clone().primaryKeys().then(function(T) {
            function P(I) {
              var F = Math.min(_, T.length - I), U = T.slice(I, I + F);
              return (w ? Promise.resolve([]) : f.getMany({ trans: o, keys: U, cache: "immutable" })).then(function(B) {
                var q = [], W = [], V = y ? [] : null, G = w ? U : [];
                if (!w) for (var ue = 0; ue < F; ++ue) {
                  var ye = B[ue], oe = { value: Fe(ye), primKey: T[I + ue] };
                  l.call(oe, oe.value, oe) !== !1 && (oe.value == null ? G.push(T[I + ue]) : y || pe(g(ye), g(oe.value)) === 0 ? (W.push(oe.value), y && V.push(T[I + ue])) : (G.push(T[I + ue]), q.push(oe.value)));
                }
                return Promise.resolve(0 < q.length && f.mutate({ trans: o, type: "add", values: q }).then(function(ke) {
                  for (var ie in ke.failures) G.splice(parseInt(ie), 1);
                  E(q.length, ke);
                })).then(function() {
                  return (0 < W.length || C && typeof e == "object") && f.mutate({ trans: o, type: "put", keys: V, values: W, criteria: C, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < I }).then(function(ke) {
                    return E(W.length, ke);
                  });
                }).then(function() {
                  return (0 < G.length || C && w) && f.mutate({ trans: o, type: "delete", keys: G, criteria: C, isAdditionalChunk: 0 < I }).then(function(ke) {
                    return Dn(r.table, G, ke);
                  }).then(function(ke) {
                    return E(G.length, ke);
                  });
                }).then(function() {
                  return T.length > I + F && P(I + _);
                });
              });
            }
            var C = en(r) && r.limit === 1 / 0 && (typeof e != "function" || w) && { index: r.index, range: r.range };
            return P(0).then(function() {
              if (0 < m.length) throw new Gt("Error modifying one or more objects", m, v, x);
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
              if (y) throw new Gt("Could not delete some values", Object.keys(f).map(function(g) {
                return f[g];
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
      function No(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function nt(e, t, r) {
        return e = e instanceof yi ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function tn(e) {
        return new e.Collection(e, function() {
          return pi("");
        }).limit(0);
      }
      function jn(e, t, r, o) {
        var a, s, l, f, y, g, _, d = r.length;
        if (!r.every(function(v) {
          return typeof v == "string";
        })) return nt(e, ii);
        function E(v) {
          a = v === "next" ? function(w) {
            return w.toUpperCase();
          } : function(w) {
            return w.toLowerCase();
          }, s = v === "next" ? function(w) {
            return w.toLowerCase();
          } : function(w) {
            return w.toUpperCase();
          }, l = v === "next" ? Io : No;
          var x = r.map(function(w) {
            return { lower: s(w), upper: a(w) };
          }).sort(function(w, T) {
            return l(w.lower, T.lower);
          });
          f = x.map(function(w) {
            return w.upper;
          }), y = x.map(function(w) {
            return w.lower;
          }), _ = (g = v) === "next" ? "" : o;
        }
        E("next"), e = new e.Collection(e, function() {
          return kt(f[0], y[d - 1] + o);
        }), e._ondirectionchange = function(v) {
          E(v);
        };
        var m = 0;
        return e._addAlgorithm(function(v, x, w) {
          var T = v.key;
          if (typeof T != "string") return !1;
          var P = s(T);
          if (t(P, y, m)) return !0;
          for (var C = null, I = m; I < d; ++I) {
            var F = function(U, B, q, W, V, G) {
              for (var ue = Math.min(U.length, W.length), ye = -1, oe = 0; oe < ue; ++oe) {
                var ke = B[oe];
                if (ke !== W[oe]) return V(U[oe], q[oe]) < 0 ? U.substr(0, oe) + q[oe] + q.substr(oe + 1) : V(U[oe], W[oe]) < 0 ? U.substr(0, oe) + W[oe] + q.substr(oe + 1) : 0 <= ye ? U.substr(0, ye) + B[ye] + q.substr(ye + 1) : null;
                V(U[oe], ke) < 0 && (ye = oe);
              }
              return ue < W.length && G === "next" ? U + q.substr(U.length) : ue < U.length && G === "prev" ? U.substr(0, q.length) : ye < 0 ? null : U.substr(0, ye) + W[ye] + q.substr(ye + 1);
            }(T, P, f[I], y[I], l, g);
            F === null && C === null ? m = I + 1 : (C === null || 0 < l(C, F)) && (C = F);
          }
          return x(C !== null ? function() {
            v.continue(C + _);
          } : w), !1;
        }), e;
      }
      function kt(e, t, r, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: o };
      }
      function pi(e) {
        return { type: 1, lower: e, upper: e };
      }
      var yi = (Object.defineProperty(Ue.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Ue.prototype.between = function(e, t, r, o) {
        r = r !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || o) && (!r || !o) ? tn(this) : new this.Collection(this, function() {
            return kt(e, t, !r, !o);
          });
        } catch {
          return nt(this, mt);
        }
      }, Ue.prototype.equals = function(e) {
        return e == null ? nt(this, mt) : new this.Collection(this, function() {
          return pi(e);
        });
      }, Ue.prototype.above = function(e) {
        return e == null ? nt(this, mt) : new this.Collection(this, function() {
          return kt(e, void 0, !0);
        });
      }, Ue.prototype.aboveOrEqual = function(e) {
        return e == null ? nt(this, mt) : new this.Collection(this, function() {
          return kt(e, void 0, !1);
        });
      }, Ue.prototype.below = function(e) {
        return e == null ? nt(this, mt) : new this.Collection(this, function() {
          return kt(void 0, e, !1, !0);
        });
      }, Ue.prototype.belowOrEqual = function(e) {
        return e == null ? nt(this, mt) : new this.Collection(this, function() {
          return kt(void 0, e);
        });
      }, Ue.prototype.startsWith = function(e) {
        return typeof e != "string" ? nt(this, ii) : this.between(e, e + jt, !0, !0);
      }, Ue.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : jn(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], jt);
      }, Ue.prototype.equalsIgnoreCase = function(e) {
        return jn(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, Ue.prototype.anyOfIgnoreCase = function() {
        var e = et.apply(st, arguments);
        return e.length === 0 ? tn(this) : jn(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, Ue.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = et.apply(st, arguments);
        return e.length === 0 ? tn(this) : jn(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, jt);
      }, Ue.prototype.anyOf = function() {
        var e = this, t = et.apply(st, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return nt(this, mt);
        }
        if (t.length === 0) return tn(this);
        var o = new this.Collection(this, function() {
          return kt(t[0], t[t.length - 1]);
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
      }, Ue.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Ue.prototype.noneOf = function() {
        var e = et.apply(st, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return nt(this, mt);
        }
        var t = e.reduce(function(r, o) {
          return r ? r.concat([[r[r.length - 1][1], o]]) : [[-1 / 0, o]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, Ue.prototype.inAnyRange = function(T, t) {
        var r = this, o = this._cmp, a = this._ascending, s = this._descending, l = this._min, f = this._max;
        if (T.length === 0) return tn(this);
        if (!T.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && a(P[0], P[1]) <= 0;
        })) return nt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", D.InvalidArgument);
        var y = !t || t.includeLowers !== !1, g = t && t.includeUppers === !0, _, d = a;
        function E(P, C) {
          return d(P[0], C[0]);
        }
        try {
          (_ = T.reduce(function(P, C) {
            for (var I = 0, F = P.length; I < F; ++I) {
              var U = P[I];
              if (o(C[0], U[1]) < 0 && 0 < o(C[1], U[0])) {
                U[0] = l(U[0], C[0]), U[1] = f(U[1], C[1]);
                break;
              }
            }
            return I === F && P.push(C), P;
          }, [])).sort(E);
        } catch {
          return nt(this, mt);
        }
        var m = 0, v = g ? function(P) {
          return 0 < a(P, _[m][1]);
        } : function(P) {
          return 0 <= a(P, _[m][1]);
        }, x = y ? function(P) {
          return 0 < s(P, _[m][0]);
        } : function(P) {
          return 0 <= s(P, _[m][0]);
        }, w = v, T = new this.Collection(this, function() {
          return kt(_[0][0], _[_.length - 1][1], !y, !g);
        });
        return T._ondirectionchange = function(P) {
          d = P === "next" ? (w = v, a) : (w = x, s), _.sort(E);
        }, T._addAlgorithm(function(P, C, I) {
          for (var F, U = P.key; w(U); ) if (++m === _.length) return C(I), !1;
          return !v(F = U) && !x(F) || (r._cmp(U, _[m][1]) === 0 || r._cmp(U, _[m][0]) === 0 || C(function() {
            d === a ? P.continue(_[m][0]) : P.continue(_[m][1]);
          }), !1);
        }), T;
      }, Ue.prototype.startsWithAnyOf = function() {
        var e = et.apply(st, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? tn(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + jt];
        })) : nt(this, "startsWithAnyOf() only works with strings");
      }, Ue);
      function Ue() {
      }
      function ht(e) {
        return Oe(function(t) {
          return ln(t), e(t.target.error), !1;
        });
      }
      function ln(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var fn = "storagemutated", gr = "x-storagemutated-1", At = sn(null, fn), Do = (dt.prototype._lock = function() {
        return fe(!X.global), ++this._reculock, this._reculock !== 1 || X.global || (X.lockOwnerFor = this), this;
      }, dt.prototype._unlock = function() {
        if (fe(!X.global), --this._reculock == 0) for (X.global || (X.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Kt(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, dt.prototype._locked = function() {
        return this._reculock && X.lockOwnerFor !== this;
      }, dt.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var r = this.db.idbdb, o = this.db._state.dbOpenError;
        if (fe(!this.idbtrans), !e && !r) switch (o && o.name) {
          case "DatabaseClosedError":
            throw new D.DatabaseClosed(o);
          case "MissingAPIError":
            throw new D.MissingAPI(o.message, o);
          default:
            throw new D.OpenFailed(o);
        }
        if (!this.active) throw new D.TransactionInactive();
        return fe(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Oe(function(a) {
          ln(a), t._reject(e.error);
        }), e.onabort = Oe(function(a) {
          ln(a), t.active && t._reject(new D.Abort(e.error)), t.active = !1, t.on("abort").fire(a);
        }), e.oncomplete = Oe(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && At.storagemutated.fire(e.mutatedParts);
        }), this;
      }, dt.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Pe(new D.ReadOnly("Transaction is readonly"));
        if (!this.active) return Pe(new D.TransactionInactive());
        if (this._locked()) return new H(function(s, l) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, r).then(s, l);
          }, X]);
        });
        if (r) return Tt(function() {
          var s = new H(function(l, f) {
            o._lock();
            var y = t(l, f, o);
            y && y.then && y.then(l, f);
          });
          return s.finally(function() {
            return o._unlock();
          }), s._lib = !0, s;
        });
        var a = new H(function(s, l) {
          var f = t(s, l, o);
          f && f.then && f.then(s, l);
        });
        return a._lib = !0, a;
      }, dt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, dt.prototype.waitFor = function(e) {
        var t, r = this._root(), o = H.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return o;
        }) : (r._waitingFor = o, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function s() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (t.get(-1 / 0).onsuccess = s);
        }());
        var a = r._waitingFor;
        return new H(function(s, l) {
          o.then(function(f) {
            return r._waitingQueue.push(Oe(s.bind(null, f)));
          }, function(f) {
            return r._waitingQueue.push(Oe(l.bind(null, f)));
          }).finally(function() {
            r._waitingFor === a && (r._waitingFor = null);
          });
        });
      }, dt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new D.Abort()));
      }, dt.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (L(t, e)) return t[e];
        var r = this.schema[e];
        if (!r) throw new D.NotFound("Table " + e + " not part of transaction");
        return r = new this.db.Table(e, r, this), r.core = this.db.core.table(e), t[e] = r;
      }, dt);
      function dt() {
      }
      function vr(e, t, r, o, a, s, l, f) {
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
            return jt;
          }, jt;
        }
      };
      function _r(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(r) {
          return r[t];
        } : function(r) {
          return Re(r, t);
        } : function(r) {
          return Re(r, e);
        };
        var t;
      }
      function gi(e) {
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
          var m = w.lower, v = w.upper, x = w.lowerOpen, w = w.upperOpen;
          return m === void 0 ? v === void 0 ? null : t.upperBound(v, !!w) : v === void 0 ? t.lowerBound(m, !!x) : t.bound(m, v, !!x, !!w);
        }
        function a(E) {
          var m, v = E.name;
          return { name: v, schema: E, mutate: function(x) {
            var w = x.trans, T = x.type, P = x.keys, C = x.values, I = x.range;
            return new Promise(function(F, U) {
              F = Oe(F);
              var B = w.objectStore(v), q = B.keyPath == null, W = T === "put" || T === "add";
              if (!W && T !== "delete" && T !== "deleteRange") throw new Error("Invalid operation type: " + T);
              var V, G = (P || C || { length: 1 }).length;
              if (P && C && P.length !== C.length) throw new Error("Given keys array must have same length as given values array.");
              if (G === 0) return F({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function ue(ze) {
                ++ke, ln(ze);
              }
              var ye = [], oe = [], ke = 0;
              if (T === "deleteRange") {
                if (I.type === 4) return F({ numFailures: ke, failures: oe, results: [], lastResult: void 0 });
                I.type === 3 ? ye.push(V = B.clear()) : ye.push(V = B.delete(o(I)));
              } else {
                var q = W ? q ? [C, P] : [C, null] : [P, null], ie = q[0], He = q[1];
                if (W) for (var Ge = 0; Ge < G; ++Ge) ye.push(V = He && He[Ge] !== void 0 ? B[T](ie[Ge], He[Ge]) : B[T](ie[Ge])), V.onerror = ue;
                else for (Ge = 0; Ge < G; ++Ge) ye.push(V = B[T](ie[Ge])), V.onerror = ue;
              }
              function Yn(ze) {
                ze = ze.target.result, ye.forEach(function(qt, Br) {
                  return qt.error != null && (oe[Br] = qt.error);
                }), F({ numFailures: ke, failures: oe, results: T === "delete" ? P : ye.map(function(qt) {
                  return qt.result;
                }), lastResult: ze });
              }
              V.onerror = function(ze) {
                ue(ze), Yn(ze);
              }, V.onsuccess = Yn;
            });
          }, getMany: function(x) {
            var w = x.trans, T = x.keys;
            return new Promise(function(P, C) {
              P = Oe(P);
              for (var I, F = w.objectStore(v), U = T.length, B = new Array(U), q = 0, W = 0, V = function(ye) {
                ye = ye.target, B[ye._pos] = ye.result, ++W === q && P(B);
              }, G = ht(C), ue = 0; ue < U; ++ue) T[ue] != null && ((I = F.get(T[ue]))._pos = ue, I.onsuccess = V, I.onerror = G, ++q);
              q === 0 && P(B);
            });
          }, get: function(x) {
            var w = x.trans, T = x.key;
            return new Promise(function(P, C) {
              P = Oe(P);
              var I = w.objectStore(v).get(T);
              I.onsuccess = function(F) {
                return P(F.target.result);
              }, I.onerror = ht(C);
            });
          }, query: (m = g, function(x) {
            return new Promise(function(w, T) {
              w = Oe(w);
              var P, C, I, q = x.trans, F = x.values, U = x.limit, V = x.query, B = U === 1 / 0 ? void 0 : U, W = V.index, V = V.range, q = q.objectStore(v), W = W.isPrimaryKey ? q : q.index(W.name), V = o(V);
              if (U === 0) return w({ result: [] });
              m ? ((B = F ? W.getAll(V, B) : W.getAllKeys(V, B)).onsuccess = function(G) {
                return w({ result: G.target.result });
              }, B.onerror = ht(T)) : (P = 0, C = !F && "openKeyCursor" in W ? W.openKeyCursor(V) : W.openCursor(V), I = [], C.onsuccess = function(G) {
                var ue = C.result;
                return ue ? (I.push(F ? ue.value : ue.primaryKey), ++P === U ? w({ result: I }) : void ue.continue()) : w({ result: I });
              }, C.onerror = ht(T));
            });
          }), openCursor: function(x) {
            var w = x.trans, T = x.values, P = x.query, C = x.reverse, I = x.unique;
            return new Promise(function(F, U) {
              F = Oe(F);
              var W = P.index, B = P.range, q = w.objectStore(v), q = W.isPrimaryKey ? q : q.index(W.name), W = C ? I ? "prevunique" : "prev" : I ? "nextunique" : "next", V = !T && "openKeyCursor" in q ? q.openKeyCursor(o(B), W) : q.openCursor(o(B), W);
              V.onerror = ht(U), V.onsuccess = Oe(function(G) {
                var ue, ye, oe, ke, ie = V.result;
                ie ? (ie.___id = ++Ro, ie.done = !1, ue = ie.continue.bind(ie), ye = (ye = ie.continuePrimaryKey) && ye.bind(ie), oe = ie.advance.bind(ie), ke = function() {
                  throw new Error("Cursor not stopped");
                }, ie.trans = w, ie.stop = ie.continue = ie.continuePrimaryKey = ie.advance = function() {
                  throw new Error("Cursor not started");
                }, ie.fail = Oe(U), ie.next = function() {
                  var He = this, Ge = 1;
                  return this.start(function() {
                    return Ge-- ? He.continue() : He.stop();
                  }).then(function() {
                    return He;
                  });
                }, ie.start = function(He) {
                  function Ge() {
                    if (V.result) try {
                      He();
                    } catch (ze) {
                      ie.fail(ze);
                    }
                    else ie.done = !0, ie.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ie.stop();
                  }
                  var Yn = new Promise(function(ze, qt) {
                    ze = Oe(ze), V.onerror = ht(qt), ie.fail = qt, ie.stop = function(Br) {
                      ie.stop = ie.continue = ie.continuePrimaryKey = ie.advance = ke, ze(Br);
                    };
                  });
                  return V.onsuccess = Oe(function(ze) {
                    V.onsuccess = Ge, Ge();
                  }), ie.continue = ue, ie.continuePrimaryKey = ye, ie.advance = oe, Ge(), Yn;
                }, F(ie)) : F(null);
              }, U);
            });
          }, count: function(x) {
            var w = x.query, T = x.trans, P = w.index, C = w.range;
            return new Promise(function(I, F) {
              var U = T.objectStore(v), B = P.isPrimaryKey ? U : U.index(P.name), U = o(C), B = U ? B.count(U) : B.count();
              B.onsuccess = Oe(function(q) {
                return I(q.target.result);
              }), B.onerror = ht(F);
            });
          } };
        }
        var s, l, f, _ = (l = y, f = gi((s = e).objectStoreNames), { schema: { name: s.name, tables: f.map(function(E) {
          return l.objectStore(E);
        }).map(function(E) {
          var m = E.keyPath, w = E.autoIncrement, v = S(m), x = {}, w = { name: E.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: m == null, compound: v, keyPath: m, autoIncrement: w, unique: !0, extractKey: _r(m) }, indexes: gi(E.indexNames).map(function(T) {
            return E.index(T);
          }).map(function(I) {
            var P = I.name, C = I.unique, F = I.multiEntry, I = I.keyPath, F = { name: P, compound: S(I), keyPath: I, unique: C, multiEntry: F, extractKey: _r(I) };
            return x[dn(I)] = F;
          }), getIndexByKeyPath: function(T) {
            return x[dn(T)];
          } };
          return x[":id"] = w.primaryKey, m != null && (x[dn(m)] = w.primaryKey), w;
        }) }, hasGetAll: 0 < f.length && "getAll" in l.objectStore(f[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), y = _.schema, g = _.hasGetAll, _ = y.tables.map(a), d = {};
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
            var f = function y(g, _) {
              return $e(g, _) || (g = $(g)) && y(g, _);
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
        Tt(function() {
          return X.trans = s, X.transless = f, t !== 0 ? (Fn(e, r), g = t, ((y = s).storeNames.includes("$meta") ? y.table("$meta").get("version").then(function(_) {
            return _ ?? g;
          }) : H.resolve(g)).then(function(_) {
            return E = _, m = s, v = r, x = [], _ = (d = e)._versions, w = d._dbSchema = qn(0, d.idbdb, v), (_ = _.filter(function(T) {
              return T._cfg.version >= E;
            })).length !== 0 ? (_.forEach(function(T) {
              x.push(function() {
                var P = w, C = T._cfg.dbschema;
                Ln(d, P, v), Ln(d, C, v), w = d._dbSchema = C;
                var I = xr(P, C);
                I.add.forEach(function(W) {
                  Er(v, W[0], W[1].primKey, W[1].indexes);
                }), I.change.forEach(function(W) {
                  if (W.recreate) throw new D.Upgrade("Not yet support for changing primary key");
                  var V = v.objectStore(W.name);
                  W.add.forEach(function(G) {
                    return Mn(V, G);
                  }), W.change.forEach(function(G) {
                    V.deleteIndex(G.name), Mn(V, G);
                  }), W.del.forEach(function(G) {
                    return V.deleteIndex(G);
                  });
                });
                var F = T._cfg.contentUpgrade;
                if (F && T._cfg.version > E) {
                  Fn(d, v), m._memoizedTables = {};
                  var U = ne(C);
                  I.del.forEach(function(W) {
                    U[W] = P[W];
                  }), wr(d, [d.Transaction.prototype]), Bn(d, [d.Transaction.prototype], O(U), U), m.schema = U;
                  var B, q = ct(F);
                  return q && Jt(), I = H.follow(function() {
                    var W;
                    (B = F(m)) && q && (W = Ot.bind(null, null), B.then(W, W));
                  }), B && typeof B.then == "function" ? H.resolve(B) : I.then(function() {
                    return B;
                  });
                }
              }), x.push(function(P) {
                var C, I, F = T._cfg.dbschema;
                C = F, I = P, [].slice.call(I.db.objectStoreNames).forEach(function(U) {
                  return C[U] == null && I.db.deleteObjectStore(U);
                }), wr(d, [d.Transaction.prototype]), Bn(d, [d.Transaction.prototype], d._storeNames, d._dbSchema), m.schema = d._dbSchema;
              }), x.push(function(P) {
                d.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(d.idbdb.version / 10) === T._cfg.version ? (d.idbdb.deleteObjectStore("$meta"), delete d._dbSchema.$meta, d._storeNames = d._storeNames.filter(function(C) {
                  return C !== "$meta";
                })) : P.objectStore("$meta").put(T._cfg.version, "version"));
              });
            }), function T() {
              return x.length ? H.resolve(x.shift()(m.idbtrans)).then(T) : H.resolve();
            }().then(function() {
              vi(w, v);
            })) : H.resolve();
            var d, E, m, v, x, w;
          }).catch(l)) : (O(a).forEach(function(_) {
            Er(r, _, a[_].primKey, a[_].indexes);
          }), Fn(e, r), void H.follow(function() {
            return e.on.populate.fire(s);
          }).catch(l));
          var y, g;
        });
      }
      function Mo(e, t) {
        vi(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
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
              var f = a.idxByName, y = s.idxByName, g = void 0;
              for (g in f) y[g] || l.del.push(g);
              for (g in y) {
                var _ = f[g], d = y[g];
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
      function vi(e, t) {
        O(e).forEach(function(r) {
          t.db.objectStoreNames.contains(r) || (Z && console.debug("Dexie: Creating missing table", r), Er(t, r, e[r].primKey, e[r].indexes));
        });
      }
      function Mn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function qn(e, t, r) {
        var o = {};
        return Be(t.objectStoreNames, 0).forEach(function(a) {
          for (var s = r.objectStore(a), l = vr(mi(g = s.keyPath), g || "", !0, !1, !!s.autoIncrement, g && typeof g != "string", !0), f = [], y = 0; y < s.indexNames.length; ++y) {
            var _ = s.index(s.indexNames[y]), g = _.keyPath, _ = vr(_.name, g, !!_.unique, !!_.multiEntry, !1, g && typeof g != "string", !1);
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
            var y = l.indexNames[f], g = l.index(y).keyPath, _ = typeof g == "string" ? g : "[" + Be(g).join("+") + "]";
            !t[s] || (g = t[s].idxByName[_]) && (g.name = y, delete t[s].idxByName[_], t[s].idxByName[y] = g);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && p.WorkerGlobalScope && p instanceof p.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function bi(e) {
        return e.split(",").map(function(t, r) {
          var s = t.split(":"), o = (a = s[1]) === null || a === void 0 ? void 0 : a.trim(), a = (t = s[0].trim()).replace(/([&*]|\+\+)/g, ""), s = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return vr(a, s || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), S(s), r === 0, o);
        });
      }
      var qo = (nn.prototype._createTableSchema = br, nn.prototype._parseIndexSyntax = bi, nn.prototype._parseStoresSpec = function(e, t) {
        var r = this;
        O(e).forEach(function(o) {
          if (e[o] !== null) {
            var a = r._parseIndexSyntax(e[o]), s = a.shift();
            if (!s) throw new D.Schema("Invalid schema for table " + o + ": " + e[o]);
            if (s.unique = !0, s.multi) throw new D.Schema("Primary key cannot be multiEntry*");
            a.forEach(function(l) {
              if (l.auto) throw new D.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!l.keyPath) throw new D.Schema("Index must have a name and cannot be an empty string");
            }), a = r._createTableSchema(o, s, a), t[o] = a;
          }
        });
      }, nn.prototype.stores = function(r) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? N(this._cfg.storesSource, r) : r;
        var r = t._versions, o = {}, a = {};
        return r.forEach(function(s) {
          N(o, s._cfg.storesSource), a = s._cfg.dbschema = {}, s._parseStoresSpec(o, a);
        }), t._dbSchema = a, wr(t, [t._allTables, t, t.Transaction.prototype]), Bn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], O(a), a), t._storeNames = O(a), this;
      }, nn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = re(this._cfg.contentUpgrade || k, e), this;
      }, nn);
      function nn() {
      }
      function Tr(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new gt(In, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function Or(e) {
        return e && typeof e.databases == "function";
      }
      function Sr(e) {
        return Tt(function() {
          return X.letThrough = !0, e();
        });
      }
      function kr(e) {
        return !("from" in e);
      }
      var We = function(e, t) {
        if (!this) {
          var r = new We();
          return e && "d" in e && N(r, e), r;
        }
        N(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function pn(e, t, r) {
        var o = pe(t, r);
        if (!isNaN(o)) {
          if (0 < o) throw RangeError();
          if (kr(e)) return N(e, { from: t, to: r, d: 1 });
          var a = e.l, o = e.r;
          if (pe(r, e.from) < 0) return a ? pn(a, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, wi(e);
          if (0 < pe(t, e.to)) return o ? pn(o, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, wi(e);
          pe(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < pe(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, a && !e.l && yn(e, a), o && r && yn(e, o);
        }
      }
      function yn(e, t) {
        kr(t) || function r(o, y) {
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
        var t = kr(e) ? null : { s: 0, n: e };
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
            for (s in a) L(a, s) && (l = a[s], f[s] = !l || typeof l != "object" || Ke.has(l.constructor) ? l : o(l));
            return f;
          }(t[r]);
        }), e;
      }
      function Ar(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && _i(t[r], e[r]);
        });
      }
      Q(We.prototype, ((ut = { add: function(e) {
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
      } })[Ye] = function() {
        return Un(this);
      }, ut));
      var Bt = {}, Pr = {}, Cr = !1;
      function $n(e) {
        Vn(Pr, e), Cr || (Cr = !0, setTimeout(function() {
          Cr = !1, Ir(Pr, !(Pr = {}));
        }, 0));
      }
      function Ir(e, t) {
        t === void 0 && (t = !1);
        var r = /* @__PURE__ */ new Set();
        if (e.all) for (var o = 0, a = Object.values(Bt); o < a.length; o++) Ei(l = a[o], e, r, t);
        else for (var s in e) {
          var l, f = /^idb\:\/\/(.*)\/(.*)\//.exec(s);
          f && (s = f[1], f = f[2], (l = Bt["idb://".concat(s, "/").concat(f)]) && Ei(l, e, r, t));
        }
        r.forEach(function(y) {
          return y();
        });
      }
      function Ei(e, t, r, o) {
        for (var a = [], s = 0, l = Object.entries(e.queries.query); s < l.length; s++) {
          for (var f = l[s], y = f[0], g = [], _ = 0, d = f[1]; _ < d.length; _++) {
            var E = d[_];
            Ar(t, E.obsSet) ? E.subscribers.forEach(function(w) {
              return r.add(w);
            }) : o && g.push(E);
          }
          o && a.push([y, g]);
        }
        if (o) for (var m = 0, v = a; m < v.length; m++) {
          var x = v[m], y = x[0], g = x[1];
          e.queries.query[y] = g;
        }
      }
      function Lo(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? Pe(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, a = Math.round(10 * e.verno), s = !1;
        function l() {
          if (t.openCanceller !== o) throw new D.DatabaseClosed("db.open() was cancelled");
        }
        function f() {
          return new H(function(E, m) {
            if (l(), !r) throw new D.MissingAPI();
            var v = e.name, x = t.autoSchema || !a ? r.open(v) : r.open(v, a);
            if (!x) throw new D.MissingAPI();
            x.onerror = ht(m), x.onblocked = Oe(e._fireOnBlocked), x.onupgradeneeded = Oe(function(w) {
              var T;
              _ = x.transaction, t.autoSchema && !e._options.allowEmptyDB ? (x.onerror = ln, _.abort(), x.result.close(), (T = r.deleteDatabase(v)).onsuccess = T.onerror = Oe(function() {
                m(new D.NoSuchDatabase("Database ".concat(v, " doesnt exist")));
              })) : (_.onerror = ht(m), w = w.oldVersion > Math.pow(2, 62) ? 0 : w.oldVersion, d = w < 1, e.idbdb = x.result, s && Mo(e, _), Bo(e, w / 10, _, m));
            }, m), x.onsuccess = Oe(function() {
              _ = null;
              var w, T, P, C, I, F = e.idbdb = x.result, U = Be(F.objectStoreNames);
              if (0 < U.length) try {
                var B = F.transaction((C = U).length === 1 ? C[0] : C, "readonly");
                if (t.autoSchema) T = F, P = B, (w = e).verno = T.version / 10, P = w._dbSchema = qn(0, T, P), w._storeNames = Be(T.objectStoreNames, 0), Bn(w, [w._allTables], O(P), P);
                else if (Ln(e, e._dbSchema, B), ((I = xr(qn(0, (I = e).idbdb, B), I._dbSchema)).add.length || I.change.some(function(q) {
                  return q.add.length || q.change.length;
                })) && !s) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), F.close(), a = F.version + 1, s = !0, E(f());
                Fn(e, B);
              } catch {
              }
              Zt.push(e), F.onversionchange = Oe(function(q) {
                t.vcFired = !0, e.on("versionchange").fire(q);
              }), F.onclose = Oe(function(q) {
                e.on("close").fire(q);
              }), d && (I = e._deps, B = v, F = I.indexedDB, I = I.IDBKeyRange, Or(F) || B === In || Tr(F, I).put({ name: B }).catch(k)), E();
            }, m);
          }).catch(function(E) {
            switch (E?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), f();
                break;
              case "VersionError":
                if (0 < a) return a = 0, f();
            }
            return H.reject(E);
          });
        }
        var y, g = t.dbReadyResolve, _ = null, d = !1;
        return H.race([o, (typeof navigator > "u" ? H.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(E) {
          function m() {
            return indexedDB.databases().finally(E);
          }
          y = setInterval(m, 100), m();
        }).finally(function() {
          return clearInterval(y);
        }) : Promise.resolve()).then(f)]).then(function() {
          return l(), t.onReadyBeingFired = [], H.resolve(Sr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function E() {
            if (0 < t.onReadyBeingFired.length) {
              var m = t.onReadyBeingFired.reduce(re, k);
              return t.onReadyBeingFired = [], H.resolve(Sr(function() {
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
          return o === t.openCanceller && e._close(), Pe(E);
        }).finally(function() {
          t.openComplete = !0, g();
        }).then(function() {
          var E;
          return d && (E = {}, e.tables.forEach(function(m) {
            m.schema.indexes.forEach(function(v) {
              v.name && (E["idb://".concat(e.name, "/").concat(m.name, "/").concat(v.name)] = new We(-1 / 0, [[[]]]));
            }), E["idb://".concat(e.name, "/").concat(m.name, "/")] = E["idb://".concat(e.name, "/").concat(m.name, "/:dels")] = new We(-1 / 0, [[[]]]);
          }), At(fn).fire(E), Ir(E, !0)), e;
        });
      }
      function Nr(e) {
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
            var v = dn(d), x = a[v] = a[v] || [], w = d == null ? 0 : typeof d == "string" ? 1 : d.length, T = 0 < E, T = c(c({}, m), { name: T ? "".concat(v, "(virtual-from:").concat(m.name, ")") : m.name, lowLevelIndex: m, isVirtual: T, keyTail: E, keyLength: w, extractKey: _r(d), unique: !T && m.unique });
            return x.push(T), T.isPrimaryKey || s.push(T), 1 < w && l(w === 2 ? d[0] : d.slice(0, w - 1), E + 1, m), x.sort(function(P, C) {
              return P.keyTail - C.keyTail;
            }), T;
          }
          t = l(o.primaryKey.keyPath, 0, o.primaryKey), a[":id"] = [t];
          for (var f = 0, y = o.indexes; f < y.length; f++) {
            var g = y[f];
            l(g.keyPath, 0, g);
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
            var E = d.query.index, m = E.keyTail, v = E.isVirtual, x = E.keyLength;
            return v ? r.openCursor(_(d)).then(function(T) {
              return T && w(T);
            }) : r.openCursor(d);
            function w(T) {
              return Object.create(T, { continue: { value: function(P) {
                P != null ? T.continue(Wn(P, d.reverse ? e.MAX_KEY : e.MIN_KEY, m)) : d.unique ? T.continue(T.key.slice(0, x).concat(d.reverse ? e.MIN_KEY : e.MAX_KEY, m)) : T.continue();
              } }, continuePrimaryKey: { value: function(P, C) {
                T.continuePrimaryKey(Wn(P, e.MAX_KEY, m), C);
              } }, primaryKey: { get: function() {
                return T.primaryKey;
              } }, key: { get: function() {
                var P = T.key;
                return x === 1 ? P[0] : P.slice(0, x);
              } }, value: { get: function() {
                return T.value;
              } } });
            }
          } });
        } });
      } };
      function Dr(e, t, r, o) {
        return r = r || {}, o = o || "", O(e).forEach(function(a) {
          var s, l, f;
          L(t, a) ? (s = e[a], l = t[a], typeof s == "object" && typeof l == "object" && s && l ? (f = Ze(s)) !== Ze(l) ? r[o + a] = t[a] : f === "Object" ? Dr(s, l, r, o + a + ".") : s !== l && (r[o + a] = t[a]) : s !== l && (r[o + a] = t[a])) : r[o + a] = void 0;
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
            var s = X.trans, l = s.table(t).hook, f = l.deleting, y = l.creating, g = l.updating;
            switch (a.type) {
              case "add":
                if (y.fire === k) break;
                return s._promise("readwrite", function() {
                  return _(a);
                }, !0);
              case "put":
                if (y.fire === k && g.fire === k) break;
                return s._promise("readwrite", function() {
                  return _(a);
                }, !0);
              case "delete":
                if (f.fire === k) break;
                return s._promise("readwrite", function() {
                  return _(a);
                }, !0);
              case "deleteRange":
                if (f.fire === k) break;
                return s._promise("readwrite", function() {
                  return function d(E, m, v) {
                    return r.query({ trans: E, values: !1, query: { index: o, range: m }, limit: v }).then(function(x) {
                      var w = x.result;
                      return _({ type: "delete", keys: w, trans: E }).then(function(T) {
                        return 0 < T.numFailures ? Promise.reject(T.failures[0]) : w.length < v ? { failures: [], numFailures: 0, lastResult: void 0 } : d(E, c(c({}, m), { lower: w[w.length - 1], lowerOpen: !0 }), v);
                      });
                    });
                  }(a.trans, a.range, 1e4);
                }, !0);
            }
            return r.mutate(a);
            function _(d) {
              var E, m, v, x = X.trans, w = d.keys || Rr(o, d);
              if (!w) throw new Error("Keys missing");
              return (d = d.type === "add" || d.type === "put" ? c(c({}, d), { keys: w }) : c({}, d)).type !== "delete" && (d.values = h([], d.values)), d.keys && (d.keys = h([], d.keys)), E = r, v = w, ((m = d).type === "add" ? Promise.resolve([]) : E.getMany({ trans: m.trans, keys: v, cache: "immutable" })).then(function(T) {
                var P = w.map(function(C, I) {
                  var F, U, B, q = T[I], W = { onerror: null, onsuccess: null };
                  return d.type === "delete" ? f.fire.call(W, C, q, x) : d.type === "add" || q === void 0 ? (F = y.fire.call(W, C, d.values[I], x), C == null && F != null && (d.keys[I] = C = F, o.outbound || ee(d.values[I], o.keyPath, C))) : (F = Dr(q, d.values[I]), (U = g.fire.call(W, F, C, q, x)) && (B = d.values[I], Object.keys(U).forEach(function(V) {
                    L(B, V) ? B[V] = U[V] : ee(B, V, U[V]);
                  }))), W;
                });
                return r.mutate(d).then(function(C) {
                  for (var I = C.failures, F = C.results, U = C.numFailures, C = C.lastResult, B = 0; B < w.length; ++B) {
                    var q = (F || w)[B], W = P[B];
                    q == null ? W.onerror && W.onerror(I[B]) : W.onsuccess && W.onsuccess(d.type === "put" && T[B] ? d.values[B] : q);
                  }
                  return { failures: I, results: F, numFailures: U, lastResult: C };
                }).catch(function(C) {
                  return P.forEach(function(I) {
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
          for (var o = [], a = 0, s = 0; a < t.keys.length && s < e.length; ++a) pe(t.keys[a], e[s]) === 0 && (o.push(r ? Fe(t.values[a]) : t.values[a]), ++s);
          return o.length === e.length ? o : null;
        } catch {
          return null;
        }
      }
      var $o = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var r = e.table(t);
          return c(c({}, r), { getMany: function(o) {
            if (!o.cache) return r.getMany(o);
            var a = Ti(o.keys, o.trans._cache, o.cache === "clone");
            return a ? H.resolve(a) : r.getMany(o).then(function(s) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? Fe(s) : s }, s;
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
        var t = e.schema.name, r = new We(e.MIN_KEY, e.MAX_KEY);
        return c(c({}, e), { transaction: function(o, a, s) {
          if (X.subscr && a !== "readonly") throw new D.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(X.querier));
          return e.transaction(o, a, s);
        }, table: function(o) {
          var a = e.table(o), s = a.schema, l = s.primaryKey, d = s.indexes, f = l.extractKey, y = l.outbound, g = l.autoIncrement && d.filter(function(m) {
            return m.compound && m.keyPath.includes(l.keyPath);
          }), _ = c(c({}, a), { mutate: function(m) {
            function v(V) {
              return V = "idb://".concat(t, "/").concat(o, "/").concat(V), C[V] || (C[V] = new We());
            }
            var x, w, T, P = m.trans, C = m.mutatedParts || (m.mutatedParts = {}), I = v(""), F = v(":dels"), U = m.type, W = m.type === "deleteRange" ? [m.range] : m.type === "delete" ? [m.keys] : m.values.length < 50 ? [Rr(l, m).filter(function(V) {
              return V;
            }), m.values] : [], B = W[0], q = W[1], W = m.trans._cache;
            return S(B) ? (I.addKeys(B), (W = U === "delete" || B.length === q.length ? Ti(B, W) : null) || F.addKeys(B), (W || q) && (x = v, w = W, T = q, s.indexes.forEach(function(V) {
              var G = x(V.name || "");
              function ue(oe) {
                return oe != null ? V.extractKey(oe) : null;
              }
              function ye(oe) {
                return V.multiEntry && S(oe) ? oe.forEach(function(ke) {
                  return G.addKey(ke);
                }) : G.addKey(oe);
              }
              (w || T).forEach(function(oe, He) {
                var ie = w && ue(w[He]), He = T && ue(T[He]);
                pe(ie, He) !== 0 && (ie != null && ye(ie), He != null && ye(He));
              });
            }))) : B ? (q = { from: (q = B.lower) !== null && q !== void 0 ? q : e.MIN_KEY, to: (q = B.upper) !== null && q !== void 0 ? q : e.MAX_KEY }, F.add(q), I.add(q)) : (I.add(r), F.add(r), s.indexes.forEach(function(V) {
              return v(V.name).add(r);
            })), a.mutate(m).then(function(V) {
              return !B || m.type !== "add" && m.type !== "put" || (I.addKeys(V.results), g && g.forEach(function(G) {
                for (var ue = m.values.map(function(ie) {
                  return G.extractKey(ie);
                }), ye = G.keyPath.findIndex(function(ie) {
                  return ie === l.keyPath;
                }), oe = 0, ke = V.results.length; oe < ke; ++oe) ue[oe][ye] = V.results[oe];
                v(G.name).addKeys(ue);
              })), P.mutatedParts = Vn(P.mutatedParts || {}, C), V;
            });
          } }), d = function(v) {
            var x = v.query, v = x.index, x = x.range;
            return [v, new We((v = x.lower) !== null && v !== void 0 ? v : e.MIN_KEY, (x = x.upper) !== null && x !== void 0 ? x : e.MAX_KEY)];
          }, E = { get: function(m) {
            return [l, new We(m.key)];
          }, getMany: function(m) {
            return [l, new We().addKeys(m.keys)];
          }, count: d, query: d, openCursor: d };
          return O(E).forEach(function(m) {
            _[m] = function(v) {
              var x = X.subscr, w = !!x, T = Oi(X, a) && Si(m, v) ? v.obsSet = {} : x;
              if (w) {
                var P = function(q) {
                  return q = "idb://".concat(t, "/").concat(o, "/").concat(q), T[q] || (T[q] = new We());
                }, C = P(""), I = P(":dels"), x = E[m](v), w = x[0], x = x[1];
                if ((m === "query" && w.isPrimaryKey && !v.values ? I : P(w.name || "")).add(x), !w.isPrimaryKey) {
                  if (m !== "count") {
                    var F = m === "query" && y && v.values && a.query(c(c({}, v), { values: !1 }));
                    return a[m].apply(this, arguments).then(function(q) {
                      if (m === "query") {
                        if (y && v.values) return F.then(function(ue) {
                          return ue = ue.result, C.addKeys(ue), q;
                        });
                        var W = v.values ? q.result.map(f) : q.result;
                        (v.values ? C : I).addKeys(W);
                      } else if (m === "openCursor") {
                        var V = q, G = v.values;
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
      function ki(e, t, r) {
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
      function Ai(e, t, E, o, a, s) {
        if (!E || E.length === 0) return e;
        var l = t.query.index, f = l.multiEntry, y = t.query.range, g = o.schema.primaryKey.extractKey, _ = l.extractKey, d = (l.lowLevelIndex || l).extractKey, E = E.reduce(function(m, v) {
          var x = m, w = [];
          if (v.type === "add" || v.type === "put") for (var T = new We(), P = v.values.length - 1; 0 <= P; --P) {
            var C, I = v.values[P], F = g(I);
            T.hasKey(F) || (C = _(I), (f && S(C) ? C.some(function(V) {
              return Kr(V, y);
            }) : Kr(C, y)) && (T.addKey(F), w.push(I)));
          }
          switch (v.type) {
            case "add":
              var U = new We().addKeys(t.values ? m.map(function(G) {
                return g(G);
              }) : m), x = m.concat(t.values ? w.filter(function(G) {
                return G = g(G), !U.hasKey(G) && (U.addKey(G), !0);
              }) : w.map(function(G) {
                return g(G);
              }).filter(function(G) {
                return !U.hasKey(G) && (U.addKey(G), !0);
              }));
              break;
            case "put":
              var B = new We().addKeys(v.values.map(function(G) {
                return g(G);
              }));
              x = m.filter(function(G) {
                return !B.hasKey(t.values ? g(G) : G);
              }).concat(t.values ? w : w.map(function(G) {
                return g(G);
              }));
              break;
            case "delete":
              var q = new We().addKeys(v.keys);
              x = m.filter(function(G) {
                return !q.hasKey(t.values ? g(G) : G);
              });
              break;
            case "deleteRange":
              var W = v.range;
              x = m.filter(function(G) {
                return !Kr(g(G), W);
              });
          }
          return x;
        }, e);
        return E === e ? e : (E.sort(function(m, v) {
          return pe(d(m), d(v)) || pe(g(m), g(v));
        }), t.limit && t.limit < 1 / 0 && (E.length > t.limit ? E.length = t.limit : e.length === t.limit && E.length < t.limit && (a.dirty = !0)), s ? Object.freeze(E) : E);
      }
      function Pi(e, t) {
        return pe(e.lower, t.lower) === 0 && pe(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function Ho(e, t) {
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
            a.subscribers.size === 0 && Ae(s, a);
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
                for (var g = /* @__PURE__ */ new Set(), _ = 0, d = r; _ < d.length; _++) {
                  var E = d[_], m = Bt["idb://".concat(t, "/").concat(E)];
                  if (m) {
                    var v = e.table(E), x = m.optimisticOps.filter(function(G) {
                      return G.trans === f;
                    });
                    if (f._explicit && y && f.mutatedParts) for (var w = 0, T = Object.values(m.queries.query); w < T.length; w++) for (var P = 0, C = (U = T[w]).slice(); P < C.length; P++) Ar((B = C[P]).obsSet, f.mutatedParts) && (Ae(U, B), B.subscribers.forEach(function(G) {
                      return g.add(G);
                    }));
                    else if (0 < x.length) {
                      m.optimisticOps = m.optimisticOps.filter(function(G) {
                        return G.trans !== f;
                      });
                      for (var I = 0, F = Object.values(m.queries.query); I < F.length; I++) for (var U, B, q, W = 0, V = (U = F[I]).slice(); W < V.length; W++) (B = V[W]).res != null && f.mutatedParts && (y && !B.dirty ? (q = Object.isFrozen(B.res), q = Ai(B.res, B.req, x, v, B, q), B.dirty ? (Ae(U, B), B.subscribers.forEach(function(G) {
                        return g.add(G);
                      })) : q !== B.res && (B.res = q, B.promise = H.resolve({ result: q }))) : (B.dirty && Ae(U, B), B.subscribers.forEach(function(G) {
                        return g.add(G);
                      })));
                    }
                  }
                }
                g.forEach(function(G) {
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
            var f = Bt["idb://".concat(t, "/").concat(r)];
            return f ? (l = o.mutate(s), s.type !== "add" && s.type !== "put" || !(50 <= s.values.length || Rr(a, s).some(function(y) {
              return y == null;
            })) ? (f.optimisticOps.push(s), s.mutatedParts && $n(s.mutatedParts), l.then(function(y) {
              0 < y.numFailures && (Ae(f.optimisticOps, s), (y = ki(0, s, y)) && f.optimisticOps.push(y), s.mutatedParts && $n(s.mutatedParts));
            }), l.catch(function() {
              Ae(f.optimisticOps, s), s.mutatedParts && $n(s.mutatedParts);
            })) : l.then(function(y) {
              var g = ki(0, c(c({}, s), { values: s.values.map(function(_, d) {
                var E;
                return y.failures[d] || (_ = (E = a.keyPath) !== null && E !== void 0 && E.includes(".") ? Fe(_) : c({}, _), ee(_, a.keyPath, y.results[d])), _;
              }) }), y);
              f.optimisticOps.push(g), queueMicrotask(function() {
                return s.mutatedParts && $n(s.mutatedParts);
              });
            }), l) : o.mutate(s);
          }, query: function(s) {
            if (!Oi(X, o) || !Si("query", s)) return o.query(s);
            var l = ((g = X.trans) === null || g === void 0 ? void 0 : g.db._options.cache) === "immutable", d = X, f = d.requery, y = d.signal, g = function(v, x, w, T) {
              var P = Bt["idb://".concat(v, "/").concat(x)];
              if (!P) return [];
              if (!(x = P.queries[w])) return [null, !1, P, null];
              var C = x[(T.query ? T.query.index.name : null) || ""];
              if (!C) return [null, !1, P, null];
              switch (w) {
                case "query":
                  var I = C.find(function(F) {
                    return F.req.limit === T.limit && F.req.values === T.values && Pi(F.req.query.range, T.query.range);
                  });
                  return I ? [I, !0, P, C] : [C.find(function(F) {
                    return ("limit" in F.req ? F.req.limit : 1 / 0) >= T.limit && (!T.values || F.req.values) && Ho(F.req.query.range, T.query.range);
                  }), !1, P, C];
                case "count":
                  return I = C.find(function(F) {
                    return Pi(F.req.query.range, T.query.range);
                  }), [I, !!I, P, C];
              }
            }(t, r, "query", s), _ = g[0], d = g[1], E = g[2], m = g[3];
            return _ && d ? _.obsSet = s.obsSet : (d = o.query(s).then(function(v) {
              var x = v.result;
              if (_ && (_.res = x), l) {
                for (var w = 0, T = x.length; w < T; ++w) Object.freeze(x[w]);
                Object.freeze(x);
              } else v.result = Fe(x);
              return v;
            }).catch(function(v) {
              return m && _ && Ae(m, _), Promise.reject(v);
            }), _ = { obsSet: s.obsSet, promise: d, subscribers: /* @__PURE__ */ new Set(), type: "query", req: s, dirty: !1 }, m ? m.push(_) : (m = [_], (E = E || (Bt["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[s.query.index.name || ""] = m)), Go(_, m, f, y), _.promise.then(function(v) {
              return { result: Ai(v.result, s, E?.optimisticOps, o, _, l) };
            });
          } });
        } });
      } };
      function Hn(e, t) {
        return new Proxy(e, { get: function(r, o, a) {
          return o === "db" ? t : Reflect.get(r, o, a);
        } });
      }
      var gt = (Ce.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new D.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new D.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(Fo), r.stores({}), this._state.autoSchema = !1, r);
      }, Ce.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || X.letThrough || this._vip) ? e() : new H(function(r, o) {
          if (t._state.openComplete) return o(new D.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new D.DatabaseClosed());
            t.open().catch(k);
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
        return Kt(Xe, function() {
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
        e.isBeingOpened || (e.dbReadyPromise = new H(function(r) {
          e.dbReadyResolve = r;
        }), e.openCanceller = new H(function(r, o) {
          e.cancelOpen = o;
        }));
      }, Ce.prototype.close = function(r) {
        var t = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        t ? (r.isBeingOpened && r.cancelOpen(new D.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new D.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, Ce.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", o = this._state;
        return new H(function(a, s) {
          function l() {
            t.close(e);
            var f = t._deps.indexedDB.deleteDatabase(t.name);
            f.onsuccess = Oe(function() {
              var y, g, _;
              y = t._deps, g = t.name, _ = y.indexedDB, y = y.IDBKeyRange, Or(_) || g === In || Tr(_, y).delete(g).catch(k), a();
            }), f.onerror = ht(s), f.onblocked = t._fireOnBlocked;
          }
          if (r) throw new D.InvalidArgument("Invalid closeOptions argument to db.delete()");
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
          if (a < 2) throw new D.InvalidArgument("Too few arguments");
          for (var s = new Array(a - 1); --a; ) s[a - 1] = arguments[a];
          return o = s.pop(), [t, xe(s), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Ce.prototype._transaction = function(e, t, r) {
        var o = this, a = X.trans;
        a && a.db === this && e.indexOf("!") === -1 || (a = null);
        var s, l, f = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (l = t.map(function(g) {
            if (g = g instanceof o.Table ? g.name : g, typeof g != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return g;
          }), e == "r" || e === dr) s = dr;
          else {
            if (e != "rw" && e != pr) throw new D.InvalidArgument("Invalid transaction mode: " + e);
            s = pr;
          }
          if (a) {
            if (a.mode === dr && s === pr) {
              if (!f) throw new D.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              a = null;
            }
            a && l.forEach(function(g) {
              if (a && a.storeNames.indexOf(g) === -1) {
                if (!f) throw new D.SubTransaction("Table " + g + " not included in parent transaction.");
                a = null;
              }
            }), f && a && !a.active && (a = null);
          }
        } catch (g) {
          return a ? a._promise(null, function(_, d) {
            d(g);
          }) : Pe(g);
        }
        var y = (function g(_, d, E, m, v) {
          return H.resolve().then(function() {
            var x = X.transless || X, w = _._createTransaction(d, E, _._dbSchema, m);
            if (w.explicit = !0, x = { trans: w, transless: x }, m) w.idbtrans = m.idbtrans;
            else try {
              w.create(), w.idbtrans._explicit = !0, _._state.PR1398_maxLoop = 3;
            } catch (C) {
              return C.name === A.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                return g(_, d, E, null, v);
              })) : Pe(C);
            }
            var T, P = ct(v);
            return P && Jt(), x = H.follow(function() {
              var C;
              (T = v.call(w, w)) && (P ? (C = Ot.bind(null, null), T.then(C, C)) : typeof T.next == "function" && typeof T.throw == "function" && (T = Nr(T)));
            }, x), (T && typeof T.then == "function" ? H.resolve(T).then(function(C) {
              return w.active ? C : Pe(new D.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : x.then(function() {
              return T;
            })).then(function(C) {
              return m && w._resolve(), w._completion.then(function() {
                return C;
              });
            }).catch(function(C) {
              return w._reject(C), Pe(C);
            });
          });
        }).bind(null, this, s, l, a, r);
        return a ? a._promise(s, y, "lock") : X.trans ? Kt(X.transless, function() {
          return o._whenReady(y);
        }) : this._whenReady(y);
      }, Ce.prototype.table = function(e) {
        if (!L(this._allTables, e)) throw new D.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Ce);
      function Ce(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var o = Ce.dependencies;
        this._options = t = c({ addons: Ce.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var a, s, l, f, y, g = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: k, dbReadyPromise: null, cancelOpen: k, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        g.dbReadyPromise = new H(function(d) {
          g.dbReadyResolve = d;
        }), g.openCanceller = new H(function(d, E) {
          g.cancelOpen = E;
        }), this._state = g, this.name = e, this.on = sn(this, "populate", "blocked", "versionchange", "close", { ready: [re, k] }), this.once = function(d, E) {
          var m = function() {
            for (var v = [], x = 0; x < arguments.length; x++) v[x] = arguments[x];
            r.on(d).unsubscribe(m), E.apply(r, v);
          };
          return r.on(d, m);
        }, this.on.ready.subscribe = Ve(this.on.ready.subscribe, function(d) {
          return function(E, m) {
            Ce.vip(function() {
              var v, x = r._state;
              x.openComplete ? (x.dbOpenError || H.resolve().then(E), m && d(E)) : x.onReadyBeingFired ? (x.onReadyBeingFired.push(E), m && d(E)) : (d(E), v = r, m || d(function w() {
                v.on.ready.unsubscribe(E), v.on.ready.unsubscribe(w);
              }));
            });
          };
        }), this.Collection = (a = this, un(Co.prototype, function(T, w) {
          this.db = a;
          var m = oi, v = null;
          if (w) try {
            m = w();
          } catch (P) {
            v = P;
          }
          var x = T._ctx, w = x.table, T = w.hook.reading.fire;
          this._ctx = { table: w, index: x.index, isPrimKey: !x.index || w.schema.primKey.keyPath && x.index === w.schema.primKey.name, range: m, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: v, or: x.or, valueMapper: T !== R ? T : null };
        })), this.Table = (s = this, un(ci.prototype, function(d, E, m) {
          this.db = s, this._tx = m, this.name = d, this.schema = E, this.hook = s._allTables[d] ? s._allTables[d].hook : sn(null, { creating: [te, k], reading: [Y, R], updating: [se, k], deleting: [J, k] });
        })), this.Transaction = (l = this, un(Do.prototype, function(d, E, m, v, x) {
          var w = this;
          d !== "readonly" && E.forEach(function(T) {
            T = (T = m[T]) === null || T === void 0 ? void 0 : T.yProps, T && (E = E.concat(T.map(function(P) {
              return P.updatesTable;
            })));
          }), this.db = l, this.mode = d, this.storeNames = E, this.schema = m, this.chromeTransactionDurability = v, this.idbtrans = null, this.on = sn(this, "complete", "error", "abort"), this.parent = x || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new H(function(T, P) {
            w._resolve = T, w._reject = P;
          }), this._completion.then(function() {
            w.active = !1, w.on.complete.fire();
          }, function(T) {
            var P = w.active;
            return w.active = !1, w.on.error.fire(T), w.parent ? w.parent._reject(T) : P && w.idbtrans && w.idbtrans.abort(), Pe(T);
          });
        })), this.Version = (f = this, un(qo.prototype, function(d) {
          this.db = f, this._cfg = { version: d, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (y = this, un(yi.prototype, function(d, E, m) {
          if (this.db = y, this._ctx = { table: d, index: E === ":id" ? null : E, or: m }, this._cmp = this._ascending = pe, this._descending = function(v, x) {
            return pe(x, v);
          }, this._max = function(v, x) {
            return 0 < pe(v, x) ? v : x;
          }, this._min = function(v, x) {
            return pe(v, x) < 0 ? v : x;
          }, this._IDBKeyRange = y._deps.IDBKeyRange, !this._IDBKeyRange) throw new D.MissingAPI();
        })), this.on("versionchange", function(d) {
          0 < d.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(d) {
          !d.newVersion || d.newVersion < d.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(d.oldVersion / 10));
        }), this._maxKey = hn(t.IDBKeyRange), this._createTransaction = function(d, E, m, v) {
          return new r.Transaction(d, E, m, r._options.chromeTransactionDurability, v);
        }, this._fireOnBlocked = function(d) {
          r.on("blocked").fire(d), Zt.filter(function(E) {
            return E.name === r.name && E !== r && !E._state.vcFired;
          }).map(function(E) {
            return E.on("versionchange").fire(d);
          });
        }, this.use($o), this.use(Yo), this.use(Wo), this.use(Uo), this.use(Vo);
        var _ = new Proxy(this, { get: function(d, E, m) {
          if (E === "_vip") return !0;
          if (E === "table") return function(x) {
            return Hn(r.table(x), _);
          };
          var v = Reflect.get(d, E, m);
          return v instanceof ci ? Hn(v, _) : E === "tables" ? v.map(function(x) {
            return Hn(x, _);
          }) : E === "_createTransaction" ? function() {
            return Hn(v.apply(this, arguments), _);
          } : v;
        } });
        this.vip = _, o.forEach(function(d) {
          return d(r);
        });
      }
      var Gn, ut = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Xo = (jr.prototype.subscribe = function(e, t, r) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: r });
      }, jr.prototype[ut] = function() {
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
          var s = ct(e), l, f = !1, y = {}, g = {}, _ = { get closed() {
            return f;
          }, unsubscribe: function() {
            f || (f = !0, l && l.abort(), d && At.storagemutated.unsubscribe(m));
          } };
          a.start && a.start(_);
          var d = !1, E = function() {
            return hr(v);
          }, m = function(x) {
            Vn(y, x), Ar(g, y) && E();
          }, v = function() {
            var x, w, T;
            !f && Gn.indexedDB && (y = {}, x = {}, l && l.abort(), l = new AbortController(), T = function(P) {
              var C = zt();
              try {
                s && Jt();
                var I = Tt(e, P);
                return I = s ? I.finally(Ot) : I;
              } finally {
                C && Qt();
              }
            }(w = { subscr: x, signal: l.signal, requery: E, querier: e, trans: null }), Promise.resolve(T).then(function(P) {
              r = !0, t = P, f || w.signal.aborted || (y = {}, function(C) {
                for (var I in C) if (L(C, I)) return;
                return 1;
              }(g = x) || d || (At(fn, m), d = !0), hr(function() {
                return !f && a.next && a.next(P);
              }));
            }, function(P) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || f || hr(function() {
                f || a.error && a.error(P);
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
      var Mt = gt;
      function Fr(e) {
        var t = Pt;
        try {
          Pt = !0, At.storagemutated.fire(e), Ir(e, !0);
        } finally {
          Pt = t;
        }
      }
      Q(Mt, c(c({}, je), { delete: function(e) {
        return new Mt(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new Mt(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = Mt.dependencies, r = t.indexedDB, t = t.IDBKeyRange, (Or(r) ? Promise.resolve(r.databases()).then(function(o) {
            return o.map(function(a) {
              return a.name;
            }).filter(function(a) {
              return a !== In;
            });
          }) : Tr(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return Pe(new D.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          N(this, e);
        };
      }, ignoreTransaction: function(e) {
        return X.trans ? Kt(X.transless, e) : e();
      }, vip: Sr, async: function(e) {
        return function() {
          try {
            var t = Nr(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : H.resolve(t);
          } catch (r) {
            return Pe(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = Nr(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : H.resolve(o);
        } catch (a) {
          return Pe(a);
        }
      }, currentTransaction: { get: function() {
        return X.trans || null;
      } }, waitFor: function(e, t) {
        return t = H.resolve(typeof e == "function" ? Mt.ignoreTransaction(e) : e).timeout(t || 6e4), X.trans ? X.trans.waitFor(t) : t;
      }, Promise: H, debug: { get: function() {
        return Z;
      }, set: function(e) {
        ge(e);
      } }, derive: de, extend: N, props: Q, override: Ve, Events: sn, on: At, liveQuery: Ci, extendObservabilitySet: Vn, getByKeyPath: Re, setByKeyPath: ee, delByKeyPath: function(e, t) {
        typeof t == "string" ? ee(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          ee(e, r, void 0);
        });
      }, shallowClone: ne, deepClone: Fe, getObjectDiff: Dr, cmp: pe, asap: Me, minKey: -1 / 0, addons: [], connections: Zt, errnames: A, dependencies: Gn, cache: Bt, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), Mt.maxKey = hn(Mt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (At(fn, function(e) {
        Pt || (e = new CustomEvent(gr, { detail: e }), Pt = !0, dispatchEvent(e), Pt = !1);
      }), addEventListener(gr, function(e) {
        e = e.detail, Pt || Fr(e);
      }));
      var rn, Pt = !1, Ii = function() {
      };
      return typeof BroadcastChannel < "u" && ((Ii = function() {
        (rn = new BroadcastChannel(gr)).onmessage = function(e) {
          return e.data && Fr(e.data);
        };
      })(), typeof rn.unref == "function" && rn.unref(), At(fn, function(e) {
        Pt || rn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!gt.disableBfCache && e.persisted) {
          Z && console.debug("Dexie: handling persisted pagehide"), rn?.close();
          for (var t = 0, r = Zt; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !gt.disableBfCache && e.persisted && (Z && console.debug("Dexie: handling persisted pageshow"), Ii(), Fr({ all: new We(-1 / 0, [[]]) }));
      })), H.rejectionMapper = function(e, t) {
        return !e || e instanceof wt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !M[e.name] ? e : (t = new M[e.name](t || e.message, e), "stack" in e && he(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, ge(Z), c(gt, Object.freeze({ __proto__: null, Dexie: gt, liveQuery: Ci, Entity: ai, cmp: pe, PropModification: cn, replacePrefix: function(e, t) {
        return new cn({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new cn({ add: e });
      }, remove: function(e) {
        return new cn({ remove: e });
      }, default: gt, RangeSet: We, mergeRanges: yn, rangesOverlap: _i }), { default: gt }), gt;
    });
  }(wa)), wa.exports;
}
var pf = df();
const xa = /* @__PURE__ */ Hl(pf), ws = Symbol.for("Dexie"), Zr = globalThis[ws] || (globalThis[ws] = xa);
if (xa.semVer !== Zr.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${xa.semVer} and ${Zr.semVer}`);
const {
  liveQuery: ah,
  mergeRanges: sh,
  rangesOverlap: uh,
  RangeSet: ch,
  cmp: lh,
  Entity: fh,
  PropModification: hh,
  replacePrefix: dh,
  add: ph,
  remove: yh,
  DexieYProvider: mh
} = Zr, yf = [
  ".fsd",
  ".asd",
  ".ssd",
  ".scd",
  ".isd",
  ".icd",
  ".xml"
], Vt = "sclElements", mf = "id, tagName, &attributes.uuid, &attributes.id, attributes.name, parent.id, parent.tagName, *children.id, *children.tagName";
function gf(n) {
  const i = new Zr(n);
  return i.version(1).stores({
    [`${Vt}`]: mf
  }), i;
}
async function vf(n) {
  const { databaseInstance: i, records: u } = n, c = i.table(Vt);
  await i.transaction("rw", c, () => c.bulkAdd(u));
}
async function bf(n) {
  if (await Zr.exists(n))
    return await Zr.delete(n);
}
const _f = {
  useBrowserApi: !0,
  chunkSize: 32 * 1024,
  // 32KB
  batchSize: 2e3
};
async function gh({
  files: n,
  options: i = _f
}) {
  const u = [];
  if (n.length === 0) throw new Error("No files provided for import.");
  for (const c of n) {
    if (!wf(c)) {
      console.error(`Unsupported file type: ${c.name}`);
      continue;
    }
    c.size === 0 && console.warn(`File is empty: ${c.name}`);
    const h = await Ef({ file: c, options: i });
    u.push(h);
  }
  return u;
}
function wf(n) {
  return yf.some((i) => n.name.toLowerCase().endsWith(i));
}
function xf(n) {
  return n.name.replace(/\.[^.]+$/, "");
}
async function Ef(n) {
  const { file: i, options: u } = n;
  try {
    const c = xf(i);
    await bf(c);
    const h = gf(c);
    return u.useBrowserApi && i.size !== 0 && await Tf({
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
async function Tf(n) {
  const { file: i, databaseInstance: u, options: c } = n, h = i.stream().getReader(), p = nf(), O = new TextDecoder(), S = new Uint8Array(0);
  return await Ea({ databaseInstance: u, reader: h, sax: p, textDecoder: O, buffer: S, options: c });
}
async function Ea(n) {
  const { databaseInstance: i, reader: u, sax: c, textDecoder: h, buffer: p, options: O } = n, { chunkSize: S, batchSize: N } = O, { done: $, value: j } = await u.read();
  if ($) {
    if (p.length > 0) {
      const Q = h.decode(p);
      c.parser.write(Q);
    }
    return c.parser.close(), await xs({
      databaseInstance: i,
      sax: c,
      batchSize: 0
    });
  }
  if (!j)
    return await Ea(n);
  let L = new Uint8Array(p.length + j.length);
  for (L.set(p), L.set(j, p.length); L.length >= S; ) {
    const Q = L.slice(0, S);
    L = L.slice(S);
    const ae = h.decode(Q, { stream: !0 });
    c.parser.write(ae), await xs({
      databaseInstance: i,
      sax: c,
      batchSize: N
    });
  }
  return await Ea({ ...n, buffer: L });
}
async function xs(n) {
  const { databaseInstance: i, sax: u, batchSize: c } = n;
  if (u.getSize() >= c) {
    const h = u.drainBatch(), p = Zl({
      currentBatch: h
    });
    await vf({
      databaseInstance: i,
      records: p
    });
  }
}
var Of = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Sf(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var oo = { exports: {} }, kf = oo.exports, Es;
function Af() {
  return Es || (Es = 1, function(n, i) {
    (function(u, c) {
      n.exports = c();
    })(kf, function() {
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
      var p = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Of, O = Object.keys, S = Array.isArray;
      function N(e, t) {
        return typeof t != "object" || O(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || p.Promise || (p.Promise = Promise);
      var $ = Object.getPrototypeOf, j = {}.hasOwnProperty;
      function L(e, t) {
        return j.call(e, t);
      }
      function Q(e, t) {
        typeof t == "function" && (t = t($(e))), (typeof Reflect > "u" ? O : Reflect.ownKeys)(t).forEach(function(r) {
          he(e, r, t[r]);
        });
      }
      var ae = Object.defineProperty;
      function he(e, t, r, o) {
        ae(e, t, N(r && L(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function de(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), he(e.prototype, "constructor", e), { extend: Q.bind(null, e.prototype) };
        } };
      }
      var $e = Object.getOwnPropertyDescriptor, Ne = [].slice;
      function Be(e, t, r) {
        return Ne.call(e, t, r);
      }
      function Ve(e, t) {
        return t(e);
      }
      function fe(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Me(e) {
        p.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Re(e, t) {
        if (typeof t == "string" && L(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var r = [], o = 0, a = t.length; o < a; ++o) {
            var s = Re(e, t[o]);
            r.push(s);
          }
          return r;
        }
        var l = t.indexOf(".");
        if (l !== -1) {
          var f = e[t.substr(0, l)];
          return f == null ? void 0 : Re(f, t.substr(l + 1));
        }
      }
      function ee(e, t, r) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          fe(typeof r != "string" && "length" in r);
          for (var o = 0, a = t.length; o < a; ++o) ee(e, t[o], r[o]);
        } else {
          var s, l, f = t.indexOf(".");
          f !== -1 ? (s = t.substr(0, f), (l = t.substr(f + 1)) === "" ? r === void 0 ? S(e) && !isNaN(parseInt(s)) ? e.splice(s, 1) : delete e[s] : e[s] = r : ee(f = !(f = e[s]) || !L(e, s) ? e[s] = {} : f, l, r)) : r === void 0 ? S(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function ne(e) {
        var t, r = {};
        for (t in e) L(e, t) && (r[t] = e[t]);
        return r;
      }
      var K = [].concat;
      function xe(e) {
        return K.apply([], e);
      }
      var Te = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(xe([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return p[e];
      }), Ke = new Set(Te.map(function(e) {
        return p[e];
      })), be = null;
      function Fe(e) {
        return be = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var o = be.get(r);
          if (o) return o;
          if (S(r)) {
            o = [], be.set(r, o);
            for (var a = 0, s = r.length; a < s; ++a) o.push(t(r[a]));
          } else if (Ke.has(r.constructor)) o = r;
          else {
            var l, f = $(r);
            for (l in o = f === Object.prototype ? {} : Object.create(f), be.set(r, o), r) L(r, l) && (o[l] = t(r[l]));
          }
          return o;
        }(e), be = null, e;
      }
      var pt = {}.toString;
      function Ze(e) {
        return pt.call(e).slice(8, -1);
      }
      var Ye = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", _e = typeof Ye == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Ye]) && t.apply(e);
      } : function() {
        return null;
      };
      function Ae(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var st = {};
      function et(e) {
        var t, r, o, a;
        if (arguments.length === 1) {
          if (S(e)) return e.slice();
          if (this === st && typeof e == "string") return [e];
          if (a = _e(e)) {
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
      var ct = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, we = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], ut = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(we), _t = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function wt(e, t) {
        this.name = e, this.message = t;
      }
      function gn(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(r) {
          return t[r].toString();
        }).filter(function(r, o, a) {
          return a.indexOf(r) === o;
        }).join(`
`);
      }
      function Gt(e, t, r, o) {
        this.failures = t, this.failedKeys = o, this.successCount = r, this.message = gn(e, t);
      }
      function ft(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(r) {
          return t[r];
        }), this.failuresByPos = t, this.message = gn(e, this.failures);
      }
      de(wt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), de(Gt).from(wt), de(ft).from(wt);
      var A = ut.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), b = wt, D = ut.reduce(function(e, t) {
        var r = t + "Error";
        function o(a, s) {
          this.name = r, a ? typeof a == "string" ? (this.message = "".concat(a).concat(s ? `
 ` + s : ""), this.inner = s || null) : typeof a == "object" && (this.message = "".concat(a.name, " ").concat(a.message), this.inner = a) : (this.message = _t[t] || r, this.inner = null);
        }
        return de(o).from(b), e[t] = o, e;
      }, {});
      D.Syntax = SyntaxError, D.Type = TypeError, D.Range = RangeError;
      var M = we.reduce(function(e, t) {
        return e[t + "Error"] = D[t], e;
      }, {}), je = ut.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = D[t]), e;
      }, {});
      function k() {
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
      function te(e, t) {
        return e === k ? t : function() {
          var r = e.apply(this, arguments);
          r !== void 0 && (arguments[0] = r);
          var o = this.onsuccess, a = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var s = t.apply(this, arguments);
          return o && (this.onsuccess = this.onsuccess ? z(o, this.onsuccess) : o), a && (this.onerror = this.onerror ? z(a, this.onerror) : a), s !== void 0 ? s : r;
        };
      }
      function J(e, t) {
        return e === k ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? z(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? z(o, this.onerror) : o);
        };
      }
      function se(e, t) {
        return e === k ? t : function(r) {
          var o = e.apply(this, arguments);
          N(r, o);
          var a = this.onsuccess, s = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), a && (this.onsuccess = this.onsuccess ? z(a, this.onsuccess) : a), s && (this.onerror = this.onerror ? z(s, this.onerror) : s), o === void 0 ? r === void 0 ? void 0 : r : N(o, r);
        };
      }
      function ce(e, t) {
        return e === k ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function re(e, t) {
        return e === k ? t : function() {
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
      je.ModifyError = Gt, je.DexieError = wt, je.BulkError = ft;
      var Z = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function ge(e) {
        Z = e;
      }
      var le = {}, ve = 100, Te = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, $(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, $(t), e];
      }(), we = Te[0], ut = Te[1], Te = Te[2], ut = ut && ut.then, De = we && we.constructor, qe = !!Te, it = function(e, t) {
        Yt.push([e, t]), yt && (queueMicrotask(So), yt = !1);
      }, lt = !0, yt = !0, ot = [], Dt = [], vn = R, Xe = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: k, pgp: !1, env: {}, finalize: k }, X = Xe, Yt = [], Rt = 0, On = [];
      function H(e) {
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
                  s instanceof H ? s._then(f, y) : s.then(f, y);
                }) : (o._state = !0, o._value = s, ti(o)), l && Qt();
              }
            }, cr.bind(null, o));
          } catch (s) {
            cr(o, s);
          }
        }(this, e);
      }
      var ur = { get: function() {
        var e = X, t = Pn;
        function r(o, a) {
          var s = this, l = !e.global && (e !== X || t !== Pn), f = l && !Ot(), y = new H(function(g, _) {
            lr(s, new ei(ri(o, e, l, f), ri(a, e, l, f), g, _, e));
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
        Dt.push(t), e._state === null && (r = e._lib && zt(), t = vn(t), e._state = !1, e._value = t, o = e, ot.some(function(a) {
          return a._value === o._value;
        }) || ot.push(o), ti(e), r && Qt());
      }
      function ti(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var r = 0, o = t.length; r < o; ++r) lr(e, t[r]);
        var a = e._PSD;
        --a.ref || a.finalize(), Rt === 0 && (++Rt, it(function() {
          --Rt == 0 && fr();
        }, []));
      }
      function lr(e, t) {
        if (e._state !== null) {
          var r = e._state ? t.onFulfilled : t.onRejected;
          if (r === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++Rt, it(Oo, [r, e, t]);
        } else e._listeners.push(t);
      }
      function Oo(e, t, r) {
        try {
          var o, a = t._value;
          !t._state && Dt.length && (Dt = []), o = Z && t._consoleTask ? t._consoleTask.run(function() {
            return e(a);
          }) : e(a), t._state || Dt.indexOf(a) !== -1 || function(s) {
            for (var l = ot.length; l; ) if (ot[--l]._value === s._value) return ot.splice(l, 1);
          }(t), r.resolve(o);
        } catch (s) {
          r.reject(s);
        } finally {
          --Rt == 0 && fr(), --r.psd.ref || r.psd.finalize();
        }
      }
      function So() {
        Kt(Xe, function() {
          zt() && Qt();
        });
      }
      function zt() {
        var e = lt;
        return yt = lt = !1, e;
      }
      function Qt() {
        var e, t, r;
        do
          for (; 0 < Yt.length; ) for (e = Yt, Yt = [], r = e.length, t = 0; t < r; ++t) {
            var o = e[t];
            o[0].apply(null, o[1]);
          }
        while (0 < Yt.length);
        yt = lt = !0;
      }
      function fr() {
        var e = ot;
        ot = [], e.forEach(function(o) {
          o._PSD.onunhandled.call(null, o._value, o);
        });
        for (var t = On.slice(0), r = t.length; r; ) t[--r]();
      }
      function Sn(e) {
        return new H(le, !1, e);
      }
      function Oe(e, t) {
        var r = X;
        return function() {
          var o = zt(), a = X;
          try {
            return St(r, !0), e.apply(this, arguments);
          } catch (s) {
            t && t(s);
          } finally {
            St(a, !1), o && Qt();
          }
        };
      }
      Q(H.prototype, { then: ur, _then: function(e, t) {
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
          return H.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return H.resolve(e()).then(function() {
            return Sn(t);
          });
        });
      }, timeout: function(e, t) {
        var r = this;
        return e < 1 / 0 ? new H(function(o, a) {
          var s = setTimeout(function() {
            return a(new D.Timeout(t));
          }, e);
          r.then(o, a).finally(clearTimeout.bind(null, s));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && he(H.prototype, Symbol.toStringTag, "Dexie.Promise"), Xe.env = ni(), Q(H, { all: function() {
        var e = et.apply(null, arguments).map(Cn);
        return new H(function(t, r) {
          e.length === 0 && t([]);
          var o = e.length;
          e.forEach(function(a, s) {
            return H.resolve(a).then(function(l) {
              e[s] = l, --o || t(e);
            }, r);
          });
        });
      }, resolve: function(e) {
        return e instanceof H ? e : e && typeof e.then == "function" ? new H(function(t, r) {
          e.then(t, r);
        }) : new H(le, !0, e);
      }, reject: Sn, race: function() {
        var e = et.apply(null, arguments).map(Cn);
        return new H(function(t, r) {
          e.map(function(o) {
            return H.resolve(o).then(t, r);
          });
        });
      }, PSD: { get: function() {
        return X;
      }, set: function(e) {
        return X = e;
      } }, totalEchoes: { get: function() {
        return Pn;
      } }, newPSD: Tt, usePSD: Kt, scheduler: { get: function() {
        return it;
      }, set: function(e) {
        it = e;
      } }, rejectionMapper: { get: function() {
        return vn;
      }, set: function(e) {
        vn = e;
      } }, follow: function(e, t) {
        return new H(function(r, o) {
          return Tt(function(a, s) {
            var l = X;
            l.unhandleds = [], l.onunhandled = s, l.finalize = z(function() {
              var f, y = this;
              f = function() {
                y.unhandleds.length === 0 ? a() : s(y.unhandleds[0]);
              }, On.push(function g() {
                f(), On.splice(On.indexOf(g), 1);
              }), ++Rt, it(function() {
                --Rt == 0 && fr();
              }, []);
            }, l.finalize), e();
          }, t, r, o);
        });
      } }), De && (De.allSettled && he(H, "allSettled", function() {
        var e = et.apply(null, arguments).map(Cn);
        return new H(function(t) {
          e.length === 0 && t([]);
          var r = e.length, o = new Array(r);
          e.forEach(function(a, s) {
            return H.resolve(a).then(function(l) {
              return o[s] = { status: "fulfilled", value: l };
            }, function(l) {
              return o[s] = { status: "rejected", reason: l };
            }).then(function() {
              return --r || t(o);
            });
          });
        });
      }), De.any && typeof AggregateError < "u" && he(H, "any", function() {
        var e = et.apply(null, arguments).map(Cn);
        return new H(function(t, r) {
          e.length === 0 && r(new AggregateError([]));
          var o = e.length, a = new Array(o);
          e.forEach(function(s, l) {
            return H.resolve(s).then(function(f) {
              return t(f);
            }, function(f) {
              a[l] = f, --o || r(new AggregateError(a));
            });
          });
        });
      }), De.withResolvers && (H.withResolvers = De.withResolvers));
      var Le = { awaits: 0, echoes: 0, id: 0 }, ko = 0, kn = [], An = 0, Pn = 0, Ao = 0;
      function Tt(e, t, r, o) {
        var a = X, s = Object.create(a);
        return s.parent = a, s.ref = 0, s.global = !1, s.id = ++Ao, Xe.env, s.env = qe ? { Promise: H, PromiseProp: { value: H, configurable: !0, writable: !0 }, all: H.all, race: H.race, allSettled: H.allSettled, any: H.any, resolve: H.resolve, reject: H.reject } : {}, t && N(s, t), ++a.ref, s.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = Kt(s, e, r, o), s.ref === 0 && s.finalize(), o;
      }
      function Jt() {
        return Le.id || (Le.id = ++ko), ++Le.awaits, Le.echoes += ve, Le.id;
      }
      function Ot() {
        return !!Le.awaits && (--Le.awaits == 0 && (Le.id = 0), Le.echoes = Le.awaits * ve, !0);
      }
      function Cn(e) {
        return Le.echoes && e && e.constructor === De ? (Jt(), e.then(function(t) {
          return Ot(), t;
        }, function(t) {
          return Ot(), Pe(t);
        })) : e;
      }
      function Po() {
        var e = kn[kn.length - 1];
        kn.pop(), St(e, !1);
      }
      function St(e, t) {
        var r, o = X;
        (t ? !Le.echoes || An++ && e === X : !An || --An && e === X) || queueMicrotask(t ? (function(a) {
          ++Pn, Le.echoes && --Le.echoes != 0 || (Le.echoes = Le.awaits = Le.id = 0), kn.push(X), St(a, !0);
        }).bind(null, e) : Po), e !== X && (X = e, o === Xe && (Xe.env = ni()), qe && (r = Xe.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(p, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function ni() {
        var e = p.Promise;
        return qe ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(p, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Kt(e, t, r, o, a) {
        var s = X;
        try {
          return St(e, !0), t(r, o, a);
        } finally {
          St(s, !1);
        }
      }
      function ri(e, t, r, o) {
        return typeof e != "function" ? e : function() {
          var a = X;
          r && Jt(), St(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            St(a, !1), o && queueMicrotask(Ot);
          }
        };
      }
      function hr(e) {
        Promise === De && Le.echoes === 0 ? An === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + ut).indexOf("[native code]") === -1 && (Jt = Ot = k);
      var Pe = H.reject, jt = "￿", mt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", ii = "String expected.", Zt = [], In = "__dbnames", dr = "readonly", pr = "readwrite";
      function Ft(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var oi = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Nn(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = Fe(t))[e], t;
        };
      }
      function ai() {
        throw D.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
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
                for (var l = a.length, f = s.length, y = l < f ? l : f, g = 0; g < y; ++g) if (a[g] !== s[g]) return a[g] < s[g] ? -1 : 1;
                return l === f ? 0 : l < f ? -1 : 1;
              }(ui(e), ui(t));
            case "Array":
              return function(a, s) {
                for (var l = a.length, f = s.length, y = l < f ? l : f, g = 0; g < y; ++g) {
                  var _ = pe(a[g], s[g]);
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
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = Ze(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function ui(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function Dn(e, t, r) {
        var o = e.schema.yProps;
        return o ? (t && 0 < r.numFailures && (t = t.filter(function(a, s) {
          return !r.failures[s];
        })), Promise.all(o.map(function(a) {
          return a = a.updatesTable, t ? e.db.table(a).where("k").anyOf(t).delete() : e.db.table(a).clear();
        })).then(function() {
          return r;
        })) : r;
      }
      var ci = (Ee.prototype._trans = function(e, t, r) {
        var o = this._tx || X.trans, a = this.name, s = Z && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function l(g, _, d) {
          if (!d.schema[a]) throw new D.NotFound("Table " + a + " not part of transaction");
          return t(d.idbtrans, d);
        }
        var f = zt();
        try {
          var y = o && o.db._novip === this.db._novip ? o === X.trans ? o._promise(e, l, r) : Tt(function() {
            return o._promise(e, l, r);
          }, { trans: o, transless: X.transless || X }) : function g(_, d, E, m) {
            if (_.idbdb && (_._state.openComplete || X.letThrough || _._vip)) {
              var v = _._createTransaction(d, E, _._dbSchema);
              try {
                v.create(), _._state.PR1398_maxLoop = 3;
              } catch (x) {
                return x.name === A.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                  return g(_, d, E, m);
                })) : Pe(x);
              }
              return v._promise(d, function(x, w) {
                return Tt(function() {
                  return X.trans = v, m(x, w, v);
                });
              }).then(function(x) {
                if (d === "readwrite") try {
                  v.idbtrans.commit();
                } catch {
                }
                return d === "readonly" ? x : v._completion.then(function() {
                  return x;
                });
              });
            }
            if (_._state.openComplete) return Pe(new D.DatabaseClosed(_._state.dbOpenError));
            if (!_._state.isBeingOpened) {
              if (!_._state.autoOpen) return Pe(new D.DatabaseClosed());
              _.open().catch(k);
            }
            return _._state.dbReadyPromise.then(function() {
              return g(_, d, E, m);
            });
          }(this.db, e, [this.name], l);
          return s && (y._consoleTask = s, y = y.catch(function(g) {
            return console.trace(g), Pe(g);
          })), y;
        } finally {
          f && Qt();
        }
      }, Ee.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? Pe(new D.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(a) {
            return r.hook.reading.fire(a);
          });
        }).then(t);
      }, Ee.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (S(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = O(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var r = this.schema.indexes.concat(this.schema.primKey).filter(function(f) {
          if (f.compound && t.every(function(g) {
            return 0 <= f.keyPath.indexOf(g);
          })) {
            for (var y = 0; y < t.length; ++y) if (t.indexOf(f.keyPath[y]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(f, y) {
          return f.keyPath.length - y.keyPath.length;
        })[0];
        if (r && this.db._maxKey !== jt) {
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
          var g = d[0], _ = d[1], d = o[y], E = e[y];
          return [g || d, g || !d ? Ft(_, d && d.multi ? function(m) {
            return m = Re(m, y), S(m) && m.some(function(v) {
              return a(E, v);
            });
          } : function(m) {
            return a(E, Re(m, y));
          }) : _];
        }, [null, null]), s = l[0], l = l[1];
        return s ? this.where(s.name).equals(e[s.keyPath]).filter(l) : r ? this.filter(l) : this.where(t).equals("");
      }, Ee.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, Ee.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, Ee.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, Ee.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, Ee.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, Ee.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, Ee.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Ee.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, S(e) ? "[".concat(e.join("+"), "]") : e));
      }, Ee.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Ee.prototype.mapToClass = function(e) {
        var t, r = this.db, o = this.name;
        function a() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof ai && (function(y, g) {
          if (typeof g != "function" && g !== null) throw new TypeError("Class extends value " + String(g) + " is not a constructor or null");
          function _() {
            this.constructor = y;
          }
          u(y, g), y.prototype = g === null ? Object.create(g) : (_.prototype = g.prototype, new _());
        }(a, t = e), Object.defineProperty(a.prototype, "db", { get: function() {
          return r;
        }, enumerable: !1, configurable: !0 }), a.prototype.table = function() {
          return o;
        }, e = a);
        for (var s = /* @__PURE__ */ new Set(), l = e.prototype; l; l = $(l)) Object.getOwnPropertyNames(l).forEach(function(y) {
          return s.add(y);
        });
        function f(y) {
          if (!y) return y;
          var g, _ = Object.create(e.prototype);
          for (g in y) if (!s.has(g)) try {
            _[g] = y[g];
          } catch {
          }
          return _;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = f, this.hook("reading", f), e;
      }, Ee.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          N(this, e);
        });
      }, Ee.prototype.add = function(e, t) {
        var r = this, o = this.schema.primKey, a = o.auto, s = o.keyPath, l = e;
        return s && a && (l = Nn(s)(e)), this._trans("readwrite", function(f) {
          return r.core.mutate({ trans: f, type: "add", keys: t != null ? [t] : null, values: [l] });
        }).then(function(f) {
          return f.numFailures ? H.reject(f.failures[0]) : f.lastResult;
        }).then(function(f) {
          if (s) try {
            ee(e, s, f);
          } catch {
          }
          return f;
        });
      }, Ee.prototype.update = function(e, t) {
        return typeof e != "object" || S(e) ? this.where(":id").equals(e).modify(t) : (e = Re(e, this.schema.primKey.keyPath), e === void 0 ? Pe(new D.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, Ee.prototype.put = function(e, t) {
        var r = this, o = this.schema.primKey, a = o.auto, s = o.keyPath, l = e;
        return s && a && (l = Nn(s)(e)), this._trans("readwrite", function(f) {
          return r.core.mutate({ trans: f, type: "put", values: [l], keys: t != null ? [t] : null });
        }).then(function(f) {
          return f.numFailures ? H.reject(f.failures[0]) : f.lastResult;
        }).then(function(f) {
          if (s) try {
            ee(e, s, f);
          } catch {
          }
          return f;
        });
      }, Ee.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: [e] }).then(function(o) {
            return Dn(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? H.reject(o.failures[0]) : void 0;
          });
        });
      }, Ee.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: oi }).then(function(r) {
            return Dn(e, null, r);
          });
        }).then(function(t) {
          return t.numFailures ? H.reject(t.failures[0]) : void 0;
        });
      }, Ee.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(r) {
          return t.core.getMany({ keys: e, trans: r }).then(function(o) {
            return o.map(function(a) {
              return t.hook.reading.fire(a);
            });
          });
        });
      }, Ee.prototype.bulkAdd = function(e, t, r) {
        var o = this, a = Array.isArray(t) ? t : void 0, s = (r = r || (a ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var g = o.schema.primKey, f = g.auto, g = g.keyPath;
          if (g && a) throw new D.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new D.InvalidArgument("Arguments objects and keys must have the same length");
          var y = e.length, g = g && f ? e.map(Nn(g)) : e;
          return o.core.mutate({ trans: l, type: "add", keys: a, values: g, wantResults: s }).then(function(v) {
            var d = v.numFailures, E = v.results, m = v.lastResult, v = v.failures;
            if (d === 0) return s ? E : m;
            throw new ft("".concat(o.name, ".bulkAdd(): ").concat(d, " of ").concat(y, " operations failed"), v);
          });
        });
      }, Ee.prototype.bulkPut = function(e, t, r) {
        var o = this, a = Array.isArray(t) ? t : void 0, s = (r = r || (a ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var g = o.schema.primKey, f = g.auto, g = g.keyPath;
          if (g && a) throw new D.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new D.InvalidArgument("Arguments objects and keys must have the same length");
          var y = e.length, g = g && f ? e.map(Nn(g)) : e;
          return o.core.mutate({ trans: l, type: "put", keys: a, values: g, wantResults: s }).then(function(v) {
            var d = v.numFailures, E = v.results, m = v.lastResult, v = v.failures;
            if (d === 0) return s ? E : m;
            throw new ft("".concat(o.name, ".bulkPut(): ").concat(d, " of ").concat(y, " operations failed"), v);
          });
        });
      }, Ee.prototype.bulkUpdate = function(e) {
        var t = this, r = this.core, o = e.map(function(l) {
          return l.key;
        }), a = e.map(function(l) {
          return l.changes;
        }), s = [];
        return this._trans("readwrite", function(l) {
          return r.getMany({ trans: l, keys: o, cache: "clone" }).then(function(f) {
            var y = [], g = [];
            e.forEach(function(d, E) {
              var m = d.key, v = d.changes, x = f[E];
              if (x) {
                for (var w = 0, T = Object.keys(v); w < T.length; w++) {
                  var P = T[w], C = v[P];
                  if (P === t.schema.primKey.keyPath) {
                    if (pe(C, m) !== 0) throw new D.Constraint("Cannot update primary key in bulkUpdate()");
                  } else ee(x, P, C);
                }
                s.push(E), y.push(m), g.push(x);
              }
            });
            var _ = y.length;
            return r.mutate({ trans: l, type: "put", keys: y, values: g, updates: { keys: o, changeSpecs: a } }).then(function(d) {
              var E = d.numFailures, m = d.failures;
              if (E === 0) return _;
              for (var v = 0, x = Object.keys(m); v < x.length; v++) {
                var w, T = x[v], P = s[Number(T)];
                P != null && (w = m[T], delete m[T], m[P] = w);
              }
              throw new ft("".concat(t.name, ".bulkUpdate(): ").concat(E, " of ").concat(_, " operations failed"), m);
            });
          });
        });
      }, Ee.prototype.bulkDelete = function(e) {
        var t = this, r = e.length;
        return this._trans("readwrite", function(o) {
          return t.core.mutate({ trans: o, type: "delete", keys: e }).then(function(a) {
            return Dn(t, e, a);
          });
        }).then(function(l) {
          var a = l.numFailures, s = l.lastResult, l = l.failures;
          if (a === 0) return s;
          throw new ft("".concat(t.name, ".bulkDelete(): ").concat(a, " of ").concat(r, " operations failed"), l);
        });
      }, Ee);
      function Ee() {
      }
      function sn(e) {
        function t(l, f) {
          if (f) {
            for (var y = arguments.length, g = new Array(y - 1); --y; ) g[y - 1] = arguments[y];
            return r[l].subscribe.apply(null, g), e;
          }
          if (typeof l == "string") return r[l];
        }
        var r = {};
        t.addEventType = s;
        for (var o = 1, a = arguments.length; o < a; ++o) s(arguments[o]);
        return t;
        function s(l, f, y) {
          if (typeof l != "object") {
            var g;
            f = f || ce;
            var _ = { subscribers: [], fire: y = y || k, subscribe: function(d) {
              _.subscribers.indexOf(d) === -1 && (_.subscribers.push(d), _.fire = f(_.fire, d));
            }, unsubscribe: function(d) {
              _.subscribers = _.subscribers.filter(function(E) {
                return E !== d;
              }), _.fire = _.subscribers.reduce(f, y);
            } };
            return r[l] = t[l] = _;
          }
          O(g = l).forEach(function(d) {
            var E = g[d];
            if (S(E)) s(d, g[d][0], g[d][1]);
            else {
              if (E !== "asap") throw new D.InvalidArgument("Invalid event config");
              var m = s(d, R, function() {
                for (var v = arguments.length, x = new Array(v); v--; ) x[v] = arguments[v];
                m.subscribers.forEach(function(w) {
                  Me(function() {
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
        e.filter = Ft(e.filter, t);
      }
      function mr(e, t, r) {
        var o = e.replayFilter;
        e.replayFilter = o ? function() {
          return Ft(o(), t());
        } : t, e.justLimit = r && !o;
      }
      function Rn(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var r = t.getIndexByKeyPath(e.index);
        if (!r) throw new D.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return r;
      }
      function li(e, t, r) {
        var o = Rn(e, t.schema);
        return t.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: o, range: e.range } });
      }
      function Kn(e, t, r, o) {
        var a = e.replayFilter ? Ft(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var s = {}, l = function(f, y, g) {
            var _, d;
            a && !a(y, g, function(E) {
              return y.stop(E);
            }, function(E) {
              return y.fail(E);
            }) || ((d = "" + (_ = y.primaryKey)) == "[object ArrayBuffer]" && (d = "" + new Uint8Array(_)), L(s, d) || (s[d] = !0, t(f, y, g)));
          };
          return Promise.all([e.or._iterate(l, r), fi(li(e, o, r), e.algorithm, l, !e.keysOnly && e.valueMapper)]);
        }
        return fi(li(e, o, r), Ft(e.algorithm, a), t, !e.keysOnly && e.valueMapper);
      }
      function fi(e, t, r, o) {
        var a = Oe(o ? function(s, l, f) {
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
              s.stop(f), l = k;
            }, function(f) {
              s.fail(f), l = k;
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
        return r.error ? r.table._trans(null, Pe.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, me.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, Pe.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, me.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Ft(t.algorithm, e);
      }, me.prototype._iterate = function(e, t) {
        return Kn(this._ctx, e, t, this._ctx.table.core);
      }, me.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && N(r, e), t._ctx = r, t;
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
        function s(y, g) {
          return g ? s(y[r[g]], g - 1) : y[o];
        }
        var l = this._ctx.dir === "next" ? 1 : -1;
        function f(y, g) {
          return pe(s(y, a), s(g, a)) * l;
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
        }), (t = this._ctx).isMatch = Ft(t.isMatch, e), this;
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
            for (var P = !1, C = 0; C < s; ++C) {
              var I = a[C], F = e[I], U = Re(T, I);
              F instanceof cn ? (ee(T, I, F.execute(U)), P = !0) : U !== F && (ee(T, I, F), P = !0);
            }
            return P;
          });
          var f = r.table.core, d = f.schema.primaryKey, y = d.outbound, g = d.extractKey, _ = 200, d = t.db._options.modifyChunkSize;
          d && (_ = typeof d == "object" ? d[f.name] || d["*"] || 200 : d);
          function E(T, I) {
            var C = I.failures, I = I.numFailures;
            v += T - I;
            for (var F = 0, U = O(C); F < U.length; F++) {
              var B = U[F];
              m.push(C[B]);
            }
          }
          var m = [], v = 0, x = [], w = e === di;
          return t.clone().primaryKeys().then(function(T) {
            function P(I) {
              var F = Math.min(_, T.length - I), U = T.slice(I, I + F);
              return (w ? Promise.resolve([]) : f.getMany({ trans: o, keys: U, cache: "immutable" })).then(function(B) {
                var q = [], W = [], V = y ? [] : null, G = w ? U : [];
                if (!w) for (var ue = 0; ue < F; ++ue) {
                  var ye = B[ue], oe = { value: Fe(ye), primKey: T[I + ue] };
                  l.call(oe, oe.value, oe) !== !1 && (oe.value == null ? G.push(T[I + ue]) : y || pe(g(ye), g(oe.value)) === 0 ? (W.push(oe.value), y && V.push(T[I + ue])) : (G.push(T[I + ue]), q.push(oe.value)));
                }
                return Promise.resolve(0 < q.length && f.mutate({ trans: o, type: "add", values: q }).then(function(ke) {
                  for (var ie in ke.failures) G.splice(parseInt(ie), 1);
                  E(q.length, ke);
                })).then(function() {
                  return (0 < W.length || C && typeof e == "object") && f.mutate({ trans: o, type: "put", keys: V, values: W, criteria: C, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < I }).then(function(ke) {
                    return E(W.length, ke);
                  });
                }).then(function() {
                  return (0 < G.length || C && w) && f.mutate({ trans: o, type: "delete", keys: G, criteria: C, isAdditionalChunk: 0 < I }).then(function(ke) {
                    return Dn(r.table, G, ke);
                  }).then(function(ke) {
                    return E(G.length, ke);
                  });
                }).then(function() {
                  return T.length > I + F && P(I + _);
                });
              });
            }
            var C = en(r) && r.limit === 1 / 0 && (typeof e != "function" || w) && { index: r.index, range: r.range };
            return P(0).then(function() {
              if (0 < m.length) throw new Gt("Error modifying one or more objects", m, v, x);
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
              if (y) throw new Gt("Could not delete some values", Object.keys(f).map(function(g) {
                return f[g];
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
      function No(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function nt(e, t, r) {
        return e = e instanceof yi ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function tn(e) {
        return new e.Collection(e, function() {
          return pi("");
        }).limit(0);
      }
      function jn(e, t, r, o) {
        var a, s, l, f, y, g, _, d = r.length;
        if (!r.every(function(v) {
          return typeof v == "string";
        })) return nt(e, ii);
        function E(v) {
          a = v === "next" ? function(w) {
            return w.toUpperCase();
          } : function(w) {
            return w.toLowerCase();
          }, s = v === "next" ? function(w) {
            return w.toLowerCase();
          } : function(w) {
            return w.toUpperCase();
          }, l = v === "next" ? Io : No;
          var x = r.map(function(w) {
            return { lower: s(w), upper: a(w) };
          }).sort(function(w, T) {
            return l(w.lower, T.lower);
          });
          f = x.map(function(w) {
            return w.upper;
          }), y = x.map(function(w) {
            return w.lower;
          }), _ = (g = v) === "next" ? "" : o;
        }
        E("next"), e = new e.Collection(e, function() {
          return kt(f[0], y[d - 1] + o);
        }), e._ondirectionchange = function(v) {
          E(v);
        };
        var m = 0;
        return e._addAlgorithm(function(v, x, w) {
          var T = v.key;
          if (typeof T != "string") return !1;
          var P = s(T);
          if (t(P, y, m)) return !0;
          for (var C = null, I = m; I < d; ++I) {
            var F = function(U, B, q, W, V, G) {
              for (var ue = Math.min(U.length, W.length), ye = -1, oe = 0; oe < ue; ++oe) {
                var ke = B[oe];
                if (ke !== W[oe]) return V(U[oe], q[oe]) < 0 ? U.substr(0, oe) + q[oe] + q.substr(oe + 1) : V(U[oe], W[oe]) < 0 ? U.substr(0, oe) + W[oe] + q.substr(oe + 1) : 0 <= ye ? U.substr(0, ye) + B[ye] + q.substr(ye + 1) : null;
                V(U[oe], ke) < 0 && (ye = oe);
              }
              return ue < W.length && G === "next" ? U + q.substr(U.length) : ue < U.length && G === "prev" ? U.substr(0, q.length) : ye < 0 ? null : U.substr(0, ye) + W[ye] + q.substr(ye + 1);
            }(T, P, f[I], y[I], l, g);
            F === null && C === null ? m = I + 1 : (C === null || 0 < l(C, F)) && (C = F);
          }
          return x(C !== null ? function() {
            v.continue(C + _);
          } : w), !1;
        }), e;
      }
      function kt(e, t, r, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: o };
      }
      function pi(e) {
        return { type: 1, lower: e, upper: e };
      }
      var yi = (Object.defineProperty(Ue.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Ue.prototype.between = function(e, t, r, o) {
        r = r !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || o) && (!r || !o) ? tn(this) : new this.Collection(this, function() {
            return kt(e, t, !r, !o);
          });
        } catch {
          return nt(this, mt);
        }
      }, Ue.prototype.equals = function(e) {
        return e == null ? nt(this, mt) : new this.Collection(this, function() {
          return pi(e);
        });
      }, Ue.prototype.above = function(e) {
        return e == null ? nt(this, mt) : new this.Collection(this, function() {
          return kt(e, void 0, !0);
        });
      }, Ue.prototype.aboveOrEqual = function(e) {
        return e == null ? nt(this, mt) : new this.Collection(this, function() {
          return kt(e, void 0, !1);
        });
      }, Ue.prototype.below = function(e) {
        return e == null ? nt(this, mt) : new this.Collection(this, function() {
          return kt(void 0, e, !1, !0);
        });
      }, Ue.prototype.belowOrEqual = function(e) {
        return e == null ? nt(this, mt) : new this.Collection(this, function() {
          return kt(void 0, e);
        });
      }, Ue.prototype.startsWith = function(e) {
        return typeof e != "string" ? nt(this, ii) : this.between(e, e + jt, !0, !0);
      }, Ue.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : jn(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], jt);
      }, Ue.prototype.equalsIgnoreCase = function(e) {
        return jn(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, Ue.prototype.anyOfIgnoreCase = function() {
        var e = et.apply(st, arguments);
        return e.length === 0 ? tn(this) : jn(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, Ue.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = et.apply(st, arguments);
        return e.length === 0 ? tn(this) : jn(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, jt);
      }, Ue.prototype.anyOf = function() {
        var e = this, t = et.apply(st, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return nt(this, mt);
        }
        if (t.length === 0) return tn(this);
        var o = new this.Collection(this, function() {
          return kt(t[0], t[t.length - 1]);
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
      }, Ue.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Ue.prototype.noneOf = function() {
        var e = et.apply(st, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return nt(this, mt);
        }
        var t = e.reduce(function(r, o) {
          return r ? r.concat([[r[r.length - 1][1], o]]) : [[-1 / 0, o]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, Ue.prototype.inAnyRange = function(T, t) {
        var r = this, o = this._cmp, a = this._ascending, s = this._descending, l = this._min, f = this._max;
        if (T.length === 0) return tn(this);
        if (!T.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && a(P[0], P[1]) <= 0;
        })) return nt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", D.InvalidArgument);
        var y = !t || t.includeLowers !== !1, g = t && t.includeUppers === !0, _, d = a;
        function E(P, C) {
          return d(P[0], C[0]);
        }
        try {
          (_ = T.reduce(function(P, C) {
            for (var I = 0, F = P.length; I < F; ++I) {
              var U = P[I];
              if (o(C[0], U[1]) < 0 && 0 < o(C[1], U[0])) {
                U[0] = l(U[0], C[0]), U[1] = f(U[1], C[1]);
                break;
              }
            }
            return I === F && P.push(C), P;
          }, [])).sort(E);
        } catch {
          return nt(this, mt);
        }
        var m = 0, v = g ? function(P) {
          return 0 < a(P, _[m][1]);
        } : function(P) {
          return 0 <= a(P, _[m][1]);
        }, x = y ? function(P) {
          return 0 < s(P, _[m][0]);
        } : function(P) {
          return 0 <= s(P, _[m][0]);
        }, w = v, T = new this.Collection(this, function() {
          return kt(_[0][0], _[_.length - 1][1], !y, !g);
        });
        return T._ondirectionchange = function(P) {
          d = P === "next" ? (w = v, a) : (w = x, s), _.sort(E);
        }, T._addAlgorithm(function(P, C, I) {
          for (var F, U = P.key; w(U); ) if (++m === _.length) return C(I), !1;
          return !v(F = U) && !x(F) || (r._cmp(U, _[m][1]) === 0 || r._cmp(U, _[m][0]) === 0 || C(function() {
            d === a ? P.continue(_[m][0]) : P.continue(_[m][1]);
          }), !1);
        }), T;
      }, Ue.prototype.startsWithAnyOf = function() {
        var e = et.apply(st, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? tn(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + jt];
        })) : nt(this, "startsWithAnyOf() only works with strings");
      }, Ue);
      function Ue() {
      }
      function ht(e) {
        return Oe(function(t) {
          return ln(t), e(t.target.error), !1;
        });
      }
      function ln(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var fn = "storagemutated", gr = "x-storagemutated-1", At = sn(null, fn), Do = (dt.prototype._lock = function() {
        return fe(!X.global), ++this._reculock, this._reculock !== 1 || X.global || (X.lockOwnerFor = this), this;
      }, dt.prototype._unlock = function() {
        if (fe(!X.global), --this._reculock == 0) for (X.global || (X.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Kt(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, dt.prototype._locked = function() {
        return this._reculock && X.lockOwnerFor !== this;
      }, dt.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var r = this.db.idbdb, o = this.db._state.dbOpenError;
        if (fe(!this.idbtrans), !e && !r) switch (o && o.name) {
          case "DatabaseClosedError":
            throw new D.DatabaseClosed(o);
          case "MissingAPIError":
            throw new D.MissingAPI(o.message, o);
          default:
            throw new D.OpenFailed(o);
        }
        if (!this.active) throw new D.TransactionInactive();
        return fe(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Oe(function(a) {
          ln(a), t._reject(e.error);
        }), e.onabort = Oe(function(a) {
          ln(a), t.active && t._reject(new D.Abort(e.error)), t.active = !1, t.on("abort").fire(a);
        }), e.oncomplete = Oe(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && At.storagemutated.fire(e.mutatedParts);
        }), this;
      }, dt.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Pe(new D.ReadOnly("Transaction is readonly"));
        if (!this.active) return Pe(new D.TransactionInactive());
        if (this._locked()) return new H(function(s, l) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, r).then(s, l);
          }, X]);
        });
        if (r) return Tt(function() {
          var s = new H(function(l, f) {
            o._lock();
            var y = t(l, f, o);
            y && y.then && y.then(l, f);
          });
          return s.finally(function() {
            return o._unlock();
          }), s._lib = !0, s;
        });
        var a = new H(function(s, l) {
          var f = t(s, l, o);
          f && f.then && f.then(s, l);
        });
        return a._lib = !0, a;
      }, dt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, dt.prototype.waitFor = function(e) {
        var t, r = this._root(), o = H.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return o;
        }) : (r._waitingFor = o, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function s() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (t.get(-1 / 0).onsuccess = s);
        }());
        var a = r._waitingFor;
        return new H(function(s, l) {
          o.then(function(f) {
            return r._waitingQueue.push(Oe(s.bind(null, f)));
          }, function(f) {
            return r._waitingQueue.push(Oe(l.bind(null, f)));
          }).finally(function() {
            r._waitingFor === a && (r._waitingFor = null);
          });
        });
      }, dt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new D.Abort()));
      }, dt.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (L(t, e)) return t[e];
        var r = this.schema[e];
        if (!r) throw new D.NotFound("Table " + e + " not part of transaction");
        return r = new this.db.Table(e, r, this), r.core = this.db.core.table(e), t[e] = r;
      }, dt);
      function dt() {
      }
      function vr(e, t, r, o, a, s, l, f) {
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
            return jt;
          }, jt;
        }
      };
      function _r(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(r) {
          return r[t];
        } : function(r) {
          return Re(r, t);
        } : function(r) {
          return Re(r, e);
        };
        var t;
      }
      function gi(e) {
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
          var m = w.lower, v = w.upper, x = w.lowerOpen, w = w.upperOpen;
          return m === void 0 ? v === void 0 ? null : t.upperBound(v, !!w) : v === void 0 ? t.lowerBound(m, !!x) : t.bound(m, v, !!x, !!w);
        }
        function a(E) {
          var m, v = E.name;
          return { name: v, schema: E, mutate: function(x) {
            var w = x.trans, T = x.type, P = x.keys, C = x.values, I = x.range;
            return new Promise(function(F, U) {
              F = Oe(F);
              var B = w.objectStore(v), q = B.keyPath == null, W = T === "put" || T === "add";
              if (!W && T !== "delete" && T !== "deleteRange") throw new Error("Invalid operation type: " + T);
              var V, G = (P || C || { length: 1 }).length;
              if (P && C && P.length !== C.length) throw new Error("Given keys array must have same length as given values array.");
              if (G === 0) return F({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function ue(ze) {
                ++ke, ln(ze);
              }
              var ye = [], oe = [], ke = 0;
              if (T === "deleteRange") {
                if (I.type === 4) return F({ numFailures: ke, failures: oe, results: [], lastResult: void 0 });
                I.type === 3 ? ye.push(V = B.clear()) : ye.push(V = B.delete(o(I)));
              } else {
                var q = W ? q ? [C, P] : [C, null] : [P, null], ie = q[0], He = q[1];
                if (W) for (var Ge = 0; Ge < G; ++Ge) ye.push(V = He && He[Ge] !== void 0 ? B[T](ie[Ge], He[Ge]) : B[T](ie[Ge])), V.onerror = ue;
                else for (Ge = 0; Ge < G; ++Ge) ye.push(V = B[T](ie[Ge])), V.onerror = ue;
              }
              function Yn(ze) {
                ze = ze.target.result, ye.forEach(function(qt, Br) {
                  return qt.error != null && (oe[Br] = qt.error);
                }), F({ numFailures: ke, failures: oe, results: T === "delete" ? P : ye.map(function(qt) {
                  return qt.result;
                }), lastResult: ze });
              }
              V.onerror = function(ze) {
                ue(ze), Yn(ze);
              }, V.onsuccess = Yn;
            });
          }, getMany: function(x) {
            var w = x.trans, T = x.keys;
            return new Promise(function(P, C) {
              P = Oe(P);
              for (var I, F = w.objectStore(v), U = T.length, B = new Array(U), q = 0, W = 0, V = function(ye) {
                ye = ye.target, B[ye._pos] = ye.result, ++W === q && P(B);
              }, G = ht(C), ue = 0; ue < U; ++ue) T[ue] != null && ((I = F.get(T[ue]))._pos = ue, I.onsuccess = V, I.onerror = G, ++q);
              q === 0 && P(B);
            });
          }, get: function(x) {
            var w = x.trans, T = x.key;
            return new Promise(function(P, C) {
              P = Oe(P);
              var I = w.objectStore(v).get(T);
              I.onsuccess = function(F) {
                return P(F.target.result);
              }, I.onerror = ht(C);
            });
          }, query: (m = g, function(x) {
            return new Promise(function(w, T) {
              w = Oe(w);
              var P, C, I, q = x.trans, F = x.values, U = x.limit, V = x.query, B = U === 1 / 0 ? void 0 : U, W = V.index, V = V.range, q = q.objectStore(v), W = W.isPrimaryKey ? q : q.index(W.name), V = o(V);
              if (U === 0) return w({ result: [] });
              m ? ((B = F ? W.getAll(V, B) : W.getAllKeys(V, B)).onsuccess = function(G) {
                return w({ result: G.target.result });
              }, B.onerror = ht(T)) : (P = 0, C = !F && "openKeyCursor" in W ? W.openKeyCursor(V) : W.openCursor(V), I = [], C.onsuccess = function(G) {
                var ue = C.result;
                return ue ? (I.push(F ? ue.value : ue.primaryKey), ++P === U ? w({ result: I }) : void ue.continue()) : w({ result: I });
              }, C.onerror = ht(T));
            });
          }), openCursor: function(x) {
            var w = x.trans, T = x.values, P = x.query, C = x.reverse, I = x.unique;
            return new Promise(function(F, U) {
              F = Oe(F);
              var W = P.index, B = P.range, q = w.objectStore(v), q = W.isPrimaryKey ? q : q.index(W.name), W = C ? I ? "prevunique" : "prev" : I ? "nextunique" : "next", V = !T && "openKeyCursor" in q ? q.openKeyCursor(o(B), W) : q.openCursor(o(B), W);
              V.onerror = ht(U), V.onsuccess = Oe(function(G) {
                var ue, ye, oe, ke, ie = V.result;
                ie ? (ie.___id = ++Ro, ie.done = !1, ue = ie.continue.bind(ie), ye = (ye = ie.continuePrimaryKey) && ye.bind(ie), oe = ie.advance.bind(ie), ke = function() {
                  throw new Error("Cursor not stopped");
                }, ie.trans = w, ie.stop = ie.continue = ie.continuePrimaryKey = ie.advance = function() {
                  throw new Error("Cursor not started");
                }, ie.fail = Oe(U), ie.next = function() {
                  var He = this, Ge = 1;
                  return this.start(function() {
                    return Ge-- ? He.continue() : He.stop();
                  }).then(function() {
                    return He;
                  });
                }, ie.start = function(He) {
                  function Ge() {
                    if (V.result) try {
                      He();
                    } catch (ze) {
                      ie.fail(ze);
                    }
                    else ie.done = !0, ie.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ie.stop();
                  }
                  var Yn = new Promise(function(ze, qt) {
                    ze = Oe(ze), V.onerror = ht(qt), ie.fail = qt, ie.stop = function(Br) {
                      ie.stop = ie.continue = ie.continuePrimaryKey = ie.advance = ke, ze(Br);
                    };
                  });
                  return V.onsuccess = Oe(function(ze) {
                    V.onsuccess = Ge, Ge();
                  }), ie.continue = ue, ie.continuePrimaryKey = ye, ie.advance = oe, Ge(), Yn;
                }, F(ie)) : F(null);
              }, U);
            });
          }, count: function(x) {
            var w = x.query, T = x.trans, P = w.index, C = w.range;
            return new Promise(function(I, F) {
              var U = T.objectStore(v), B = P.isPrimaryKey ? U : U.index(P.name), U = o(C), B = U ? B.count(U) : B.count();
              B.onsuccess = Oe(function(q) {
                return I(q.target.result);
              }), B.onerror = ht(F);
            });
          } };
        }
        var s, l, f, _ = (l = y, f = gi((s = e).objectStoreNames), { schema: { name: s.name, tables: f.map(function(E) {
          return l.objectStore(E);
        }).map(function(E) {
          var m = E.keyPath, w = E.autoIncrement, v = S(m), x = {}, w = { name: E.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: m == null, compound: v, keyPath: m, autoIncrement: w, unique: !0, extractKey: _r(m) }, indexes: gi(E.indexNames).map(function(T) {
            return E.index(T);
          }).map(function(I) {
            var P = I.name, C = I.unique, F = I.multiEntry, I = I.keyPath, F = { name: P, compound: S(I), keyPath: I, unique: C, multiEntry: F, extractKey: _r(I) };
            return x[dn(I)] = F;
          }), getIndexByKeyPath: function(T) {
            return x[dn(T)];
          } };
          return x[":id"] = w.primaryKey, m != null && (x[dn(m)] = w.primaryKey), w;
        }) }, hasGetAll: 0 < f.length && "getAll" in l.objectStore(f[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), y = _.schema, g = _.hasGetAll, _ = y.tables.map(a), d = {};
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
            var f = function y(g, _) {
              return $e(g, _) || (g = $(g)) && y(g, _);
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
        Tt(function() {
          return X.trans = s, X.transless = f, t !== 0 ? (Fn(e, r), g = t, ((y = s).storeNames.includes("$meta") ? y.table("$meta").get("version").then(function(_) {
            return _ ?? g;
          }) : H.resolve(g)).then(function(_) {
            return E = _, m = s, v = r, x = [], _ = (d = e)._versions, w = d._dbSchema = qn(0, d.idbdb, v), (_ = _.filter(function(T) {
              return T._cfg.version >= E;
            })).length !== 0 ? (_.forEach(function(T) {
              x.push(function() {
                var P = w, C = T._cfg.dbschema;
                Ln(d, P, v), Ln(d, C, v), w = d._dbSchema = C;
                var I = xr(P, C);
                I.add.forEach(function(W) {
                  Er(v, W[0], W[1].primKey, W[1].indexes);
                }), I.change.forEach(function(W) {
                  if (W.recreate) throw new D.Upgrade("Not yet support for changing primary key");
                  var V = v.objectStore(W.name);
                  W.add.forEach(function(G) {
                    return Mn(V, G);
                  }), W.change.forEach(function(G) {
                    V.deleteIndex(G.name), Mn(V, G);
                  }), W.del.forEach(function(G) {
                    return V.deleteIndex(G);
                  });
                });
                var F = T._cfg.contentUpgrade;
                if (F && T._cfg.version > E) {
                  Fn(d, v), m._memoizedTables = {};
                  var U = ne(C);
                  I.del.forEach(function(W) {
                    U[W] = P[W];
                  }), wr(d, [d.Transaction.prototype]), Bn(d, [d.Transaction.prototype], O(U), U), m.schema = U;
                  var B, q = ct(F);
                  return q && Jt(), I = H.follow(function() {
                    var W;
                    (B = F(m)) && q && (W = Ot.bind(null, null), B.then(W, W));
                  }), B && typeof B.then == "function" ? H.resolve(B) : I.then(function() {
                    return B;
                  });
                }
              }), x.push(function(P) {
                var C, I, F = T._cfg.dbschema;
                C = F, I = P, [].slice.call(I.db.objectStoreNames).forEach(function(U) {
                  return C[U] == null && I.db.deleteObjectStore(U);
                }), wr(d, [d.Transaction.prototype]), Bn(d, [d.Transaction.prototype], d._storeNames, d._dbSchema), m.schema = d._dbSchema;
              }), x.push(function(P) {
                d.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(d.idbdb.version / 10) === T._cfg.version ? (d.idbdb.deleteObjectStore("$meta"), delete d._dbSchema.$meta, d._storeNames = d._storeNames.filter(function(C) {
                  return C !== "$meta";
                })) : P.objectStore("$meta").put(T._cfg.version, "version"));
              });
            }), function T() {
              return x.length ? H.resolve(x.shift()(m.idbtrans)).then(T) : H.resolve();
            }().then(function() {
              vi(w, v);
            })) : H.resolve();
            var d, E, m, v, x, w;
          }).catch(l)) : (O(a).forEach(function(_) {
            Er(r, _, a[_].primKey, a[_].indexes);
          }), Fn(e, r), void H.follow(function() {
            return e.on.populate.fire(s);
          }).catch(l));
          var y, g;
        });
      }
      function Mo(e, t) {
        vi(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
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
              var f = a.idxByName, y = s.idxByName, g = void 0;
              for (g in f) y[g] || l.del.push(g);
              for (g in y) {
                var _ = f[g], d = y[g];
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
      function vi(e, t) {
        O(e).forEach(function(r) {
          t.db.objectStoreNames.contains(r) || (Z && console.debug("Dexie: Creating missing table", r), Er(t, r, e[r].primKey, e[r].indexes));
        });
      }
      function Mn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function qn(e, t, r) {
        var o = {};
        return Be(t.objectStoreNames, 0).forEach(function(a) {
          for (var s = r.objectStore(a), l = vr(mi(g = s.keyPath), g || "", !0, !1, !!s.autoIncrement, g && typeof g != "string", !0), f = [], y = 0; y < s.indexNames.length; ++y) {
            var _ = s.index(s.indexNames[y]), g = _.keyPath, _ = vr(_.name, g, !!_.unique, !!_.multiEntry, !1, g && typeof g != "string", !1);
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
            var y = l.indexNames[f], g = l.index(y).keyPath, _ = typeof g == "string" ? g : "[" + Be(g).join("+") + "]";
            !t[s] || (g = t[s].idxByName[_]) && (g.name = y, delete t[s].idxByName[_], t[s].idxByName[y] = g);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && p.WorkerGlobalScope && p instanceof p.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function bi(e) {
        return e.split(",").map(function(t, r) {
          var s = t.split(":"), o = (a = s[1]) === null || a === void 0 ? void 0 : a.trim(), a = (t = s[0].trim()).replace(/([&*]|\+\+)/g, ""), s = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return vr(a, s || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), S(s), r === 0, o);
        });
      }
      var qo = (nn.prototype._createTableSchema = br, nn.prototype._parseIndexSyntax = bi, nn.prototype._parseStoresSpec = function(e, t) {
        var r = this;
        O(e).forEach(function(o) {
          if (e[o] !== null) {
            var a = r._parseIndexSyntax(e[o]), s = a.shift();
            if (!s) throw new D.Schema("Invalid schema for table " + o + ": " + e[o]);
            if (s.unique = !0, s.multi) throw new D.Schema("Primary key cannot be multiEntry*");
            a.forEach(function(l) {
              if (l.auto) throw new D.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!l.keyPath) throw new D.Schema("Index must have a name and cannot be an empty string");
            }), a = r._createTableSchema(o, s, a), t[o] = a;
          }
        });
      }, nn.prototype.stores = function(r) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? N(this._cfg.storesSource, r) : r;
        var r = t._versions, o = {}, a = {};
        return r.forEach(function(s) {
          N(o, s._cfg.storesSource), a = s._cfg.dbschema = {}, s._parseStoresSpec(o, a);
        }), t._dbSchema = a, wr(t, [t._allTables, t, t.Transaction.prototype]), Bn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], O(a), a), t._storeNames = O(a), this;
      }, nn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = re(this._cfg.contentUpgrade || k, e), this;
      }, nn);
      function nn() {
      }
      function Tr(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new gt(In, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function Or(e) {
        return e && typeof e.databases == "function";
      }
      function Sr(e) {
        return Tt(function() {
          return X.letThrough = !0, e();
        });
      }
      function kr(e) {
        return !("from" in e);
      }
      var We = function(e, t) {
        if (!this) {
          var r = new We();
          return e && "d" in e && N(r, e), r;
        }
        N(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function pn(e, t, r) {
        var o = pe(t, r);
        if (!isNaN(o)) {
          if (0 < o) throw RangeError();
          if (kr(e)) return N(e, { from: t, to: r, d: 1 });
          var a = e.l, o = e.r;
          if (pe(r, e.from) < 0) return a ? pn(a, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, wi(e);
          if (0 < pe(t, e.to)) return o ? pn(o, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, wi(e);
          pe(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < pe(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, a && !e.l && yn(e, a), o && r && yn(e, o);
        }
      }
      function yn(e, t) {
        kr(t) || function r(o, y) {
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
        var t = kr(e) ? null : { s: 0, n: e };
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
            for (s in a) L(a, s) && (l = a[s], f[s] = !l || typeof l != "object" || Ke.has(l.constructor) ? l : o(l));
            return f;
          }(t[r]);
        }), e;
      }
      function Ar(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && _i(t[r], e[r]);
        });
      }
      Q(We.prototype, ((ut = { add: function(e) {
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
      } })[Ye] = function() {
        return Un(this);
      }, ut));
      var Bt = {}, Pr = {}, Cr = !1;
      function $n(e) {
        Vn(Pr, e), Cr || (Cr = !0, setTimeout(function() {
          Cr = !1, Ir(Pr, !(Pr = {}));
        }, 0));
      }
      function Ir(e, t) {
        t === void 0 && (t = !1);
        var r = /* @__PURE__ */ new Set();
        if (e.all) for (var o = 0, a = Object.values(Bt); o < a.length; o++) Ei(l = a[o], e, r, t);
        else for (var s in e) {
          var l, f = /^idb\:\/\/(.*)\/(.*)\//.exec(s);
          f && (s = f[1], f = f[2], (l = Bt["idb://".concat(s, "/").concat(f)]) && Ei(l, e, r, t));
        }
        r.forEach(function(y) {
          return y();
        });
      }
      function Ei(e, t, r, o) {
        for (var a = [], s = 0, l = Object.entries(e.queries.query); s < l.length; s++) {
          for (var f = l[s], y = f[0], g = [], _ = 0, d = f[1]; _ < d.length; _++) {
            var E = d[_];
            Ar(t, E.obsSet) ? E.subscribers.forEach(function(w) {
              return r.add(w);
            }) : o && g.push(E);
          }
          o && a.push([y, g]);
        }
        if (o) for (var m = 0, v = a; m < v.length; m++) {
          var x = v[m], y = x[0], g = x[1];
          e.queries.query[y] = g;
        }
      }
      function Lo(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? Pe(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, a = Math.round(10 * e.verno), s = !1;
        function l() {
          if (t.openCanceller !== o) throw new D.DatabaseClosed("db.open() was cancelled");
        }
        function f() {
          return new H(function(E, m) {
            if (l(), !r) throw new D.MissingAPI();
            var v = e.name, x = t.autoSchema || !a ? r.open(v) : r.open(v, a);
            if (!x) throw new D.MissingAPI();
            x.onerror = ht(m), x.onblocked = Oe(e._fireOnBlocked), x.onupgradeneeded = Oe(function(w) {
              var T;
              _ = x.transaction, t.autoSchema && !e._options.allowEmptyDB ? (x.onerror = ln, _.abort(), x.result.close(), (T = r.deleteDatabase(v)).onsuccess = T.onerror = Oe(function() {
                m(new D.NoSuchDatabase("Database ".concat(v, " doesnt exist")));
              })) : (_.onerror = ht(m), w = w.oldVersion > Math.pow(2, 62) ? 0 : w.oldVersion, d = w < 1, e.idbdb = x.result, s && Mo(e, _), Bo(e, w / 10, _, m));
            }, m), x.onsuccess = Oe(function() {
              _ = null;
              var w, T, P, C, I, F = e.idbdb = x.result, U = Be(F.objectStoreNames);
              if (0 < U.length) try {
                var B = F.transaction((C = U).length === 1 ? C[0] : C, "readonly");
                if (t.autoSchema) T = F, P = B, (w = e).verno = T.version / 10, P = w._dbSchema = qn(0, T, P), w._storeNames = Be(T.objectStoreNames, 0), Bn(w, [w._allTables], O(P), P);
                else if (Ln(e, e._dbSchema, B), ((I = xr(qn(0, (I = e).idbdb, B), I._dbSchema)).add.length || I.change.some(function(q) {
                  return q.add.length || q.change.length;
                })) && !s) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), F.close(), a = F.version + 1, s = !0, E(f());
                Fn(e, B);
              } catch {
              }
              Zt.push(e), F.onversionchange = Oe(function(q) {
                t.vcFired = !0, e.on("versionchange").fire(q);
              }), F.onclose = Oe(function(q) {
                e.on("close").fire(q);
              }), d && (I = e._deps, B = v, F = I.indexedDB, I = I.IDBKeyRange, Or(F) || B === In || Tr(F, I).put({ name: B }).catch(k)), E();
            }, m);
          }).catch(function(E) {
            switch (E?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), f();
                break;
              case "VersionError":
                if (0 < a) return a = 0, f();
            }
            return H.reject(E);
          });
        }
        var y, g = t.dbReadyResolve, _ = null, d = !1;
        return H.race([o, (typeof navigator > "u" ? H.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(E) {
          function m() {
            return indexedDB.databases().finally(E);
          }
          y = setInterval(m, 100), m();
        }).finally(function() {
          return clearInterval(y);
        }) : Promise.resolve()).then(f)]).then(function() {
          return l(), t.onReadyBeingFired = [], H.resolve(Sr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function E() {
            if (0 < t.onReadyBeingFired.length) {
              var m = t.onReadyBeingFired.reduce(re, k);
              return t.onReadyBeingFired = [], H.resolve(Sr(function() {
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
          return o === t.openCanceller && e._close(), Pe(E);
        }).finally(function() {
          t.openComplete = !0, g();
        }).then(function() {
          var E;
          return d && (E = {}, e.tables.forEach(function(m) {
            m.schema.indexes.forEach(function(v) {
              v.name && (E["idb://".concat(e.name, "/").concat(m.name, "/").concat(v.name)] = new We(-1 / 0, [[[]]]));
            }), E["idb://".concat(e.name, "/").concat(m.name, "/")] = E["idb://".concat(e.name, "/").concat(m.name, "/:dels")] = new We(-1 / 0, [[[]]]);
          }), At(fn).fire(E), Ir(E, !0)), e;
        });
      }
      function Nr(e) {
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
            var v = dn(d), x = a[v] = a[v] || [], w = d == null ? 0 : typeof d == "string" ? 1 : d.length, T = 0 < E, T = c(c({}, m), { name: T ? "".concat(v, "(virtual-from:").concat(m.name, ")") : m.name, lowLevelIndex: m, isVirtual: T, keyTail: E, keyLength: w, extractKey: _r(d), unique: !T && m.unique });
            return x.push(T), T.isPrimaryKey || s.push(T), 1 < w && l(w === 2 ? d[0] : d.slice(0, w - 1), E + 1, m), x.sort(function(P, C) {
              return P.keyTail - C.keyTail;
            }), T;
          }
          t = l(o.primaryKey.keyPath, 0, o.primaryKey), a[":id"] = [t];
          for (var f = 0, y = o.indexes; f < y.length; f++) {
            var g = y[f];
            l(g.keyPath, 0, g);
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
            var E = d.query.index, m = E.keyTail, v = E.isVirtual, x = E.keyLength;
            return v ? r.openCursor(_(d)).then(function(T) {
              return T && w(T);
            }) : r.openCursor(d);
            function w(T) {
              return Object.create(T, { continue: { value: function(P) {
                P != null ? T.continue(Wn(P, d.reverse ? e.MAX_KEY : e.MIN_KEY, m)) : d.unique ? T.continue(T.key.slice(0, x).concat(d.reverse ? e.MIN_KEY : e.MAX_KEY, m)) : T.continue();
              } }, continuePrimaryKey: { value: function(P, C) {
                T.continuePrimaryKey(Wn(P, e.MAX_KEY, m), C);
              } }, primaryKey: { get: function() {
                return T.primaryKey;
              } }, key: { get: function() {
                var P = T.key;
                return x === 1 ? P[0] : P.slice(0, x);
              } }, value: { get: function() {
                return T.value;
              } } });
            }
          } });
        } });
      } };
      function Dr(e, t, r, o) {
        return r = r || {}, o = o || "", O(e).forEach(function(a) {
          var s, l, f;
          L(t, a) ? (s = e[a], l = t[a], typeof s == "object" && typeof l == "object" && s && l ? (f = Ze(s)) !== Ze(l) ? r[o + a] = t[a] : f === "Object" ? Dr(s, l, r, o + a + ".") : s !== l && (r[o + a] = t[a]) : s !== l && (r[o + a] = t[a])) : r[o + a] = void 0;
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
            var s = X.trans, l = s.table(t).hook, f = l.deleting, y = l.creating, g = l.updating;
            switch (a.type) {
              case "add":
                if (y.fire === k) break;
                return s._promise("readwrite", function() {
                  return _(a);
                }, !0);
              case "put":
                if (y.fire === k && g.fire === k) break;
                return s._promise("readwrite", function() {
                  return _(a);
                }, !0);
              case "delete":
                if (f.fire === k) break;
                return s._promise("readwrite", function() {
                  return _(a);
                }, !0);
              case "deleteRange":
                if (f.fire === k) break;
                return s._promise("readwrite", function() {
                  return function d(E, m, v) {
                    return r.query({ trans: E, values: !1, query: { index: o, range: m }, limit: v }).then(function(x) {
                      var w = x.result;
                      return _({ type: "delete", keys: w, trans: E }).then(function(T) {
                        return 0 < T.numFailures ? Promise.reject(T.failures[0]) : w.length < v ? { failures: [], numFailures: 0, lastResult: void 0 } : d(E, c(c({}, m), { lower: w[w.length - 1], lowerOpen: !0 }), v);
                      });
                    });
                  }(a.trans, a.range, 1e4);
                }, !0);
            }
            return r.mutate(a);
            function _(d) {
              var E, m, v, x = X.trans, w = d.keys || Rr(o, d);
              if (!w) throw new Error("Keys missing");
              return (d = d.type === "add" || d.type === "put" ? c(c({}, d), { keys: w }) : c({}, d)).type !== "delete" && (d.values = h([], d.values)), d.keys && (d.keys = h([], d.keys)), E = r, v = w, ((m = d).type === "add" ? Promise.resolve([]) : E.getMany({ trans: m.trans, keys: v, cache: "immutable" })).then(function(T) {
                var P = w.map(function(C, I) {
                  var F, U, B, q = T[I], W = { onerror: null, onsuccess: null };
                  return d.type === "delete" ? f.fire.call(W, C, q, x) : d.type === "add" || q === void 0 ? (F = y.fire.call(W, C, d.values[I], x), C == null && F != null && (d.keys[I] = C = F, o.outbound || ee(d.values[I], o.keyPath, C))) : (F = Dr(q, d.values[I]), (U = g.fire.call(W, F, C, q, x)) && (B = d.values[I], Object.keys(U).forEach(function(V) {
                    L(B, V) ? B[V] = U[V] : ee(B, V, U[V]);
                  }))), W;
                });
                return r.mutate(d).then(function(C) {
                  for (var I = C.failures, F = C.results, U = C.numFailures, C = C.lastResult, B = 0; B < w.length; ++B) {
                    var q = (F || w)[B], W = P[B];
                    q == null ? W.onerror && W.onerror(I[B]) : W.onsuccess && W.onsuccess(d.type === "put" && T[B] ? d.values[B] : q);
                  }
                  return { failures: I, results: F, numFailures: U, lastResult: C };
                }).catch(function(C) {
                  return P.forEach(function(I) {
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
          for (var o = [], a = 0, s = 0; a < t.keys.length && s < e.length; ++a) pe(t.keys[a], e[s]) === 0 && (o.push(r ? Fe(t.values[a]) : t.values[a]), ++s);
          return o.length === e.length ? o : null;
        } catch {
          return null;
        }
      }
      var $o = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var r = e.table(t);
          return c(c({}, r), { getMany: function(o) {
            if (!o.cache) return r.getMany(o);
            var a = Ti(o.keys, o.trans._cache, o.cache === "clone");
            return a ? H.resolve(a) : r.getMany(o).then(function(s) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? Fe(s) : s }, s;
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
        var t = e.schema.name, r = new We(e.MIN_KEY, e.MAX_KEY);
        return c(c({}, e), { transaction: function(o, a, s) {
          if (X.subscr && a !== "readonly") throw new D.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(X.querier));
          return e.transaction(o, a, s);
        }, table: function(o) {
          var a = e.table(o), s = a.schema, l = s.primaryKey, d = s.indexes, f = l.extractKey, y = l.outbound, g = l.autoIncrement && d.filter(function(m) {
            return m.compound && m.keyPath.includes(l.keyPath);
          }), _ = c(c({}, a), { mutate: function(m) {
            function v(V) {
              return V = "idb://".concat(t, "/").concat(o, "/").concat(V), C[V] || (C[V] = new We());
            }
            var x, w, T, P = m.trans, C = m.mutatedParts || (m.mutatedParts = {}), I = v(""), F = v(":dels"), U = m.type, W = m.type === "deleteRange" ? [m.range] : m.type === "delete" ? [m.keys] : m.values.length < 50 ? [Rr(l, m).filter(function(V) {
              return V;
            }), m.values] : [], B = W[0], q = W[1], W = m.trans._cache;
            return S(B) ? (I.addKeys(B), (W = U === "delete" || B.length === q.length ? Ti(B, W) : null) || F.addKeys(B), (W || q) && (x = v, w = W, T = q, s.indexes.forEach(function(V) {
              var G = x(V.name || "");
              function ue(oe) {
                return oe != null ? V.extractKey(oe) : null;
              }
              function ye(oe) {
                return V.multiEntry && S(oe) ? oe.forEach(function(ke) {
                  return G.addKey(ke);
                }) : G.addKey(oe);
              }
              (w || T).forEach(function(oe, He) {
                var ie = w && ue(w[He]), He = T && ue(T[He]);
                pe(ie, He) !== 0 && (ie != null && ye(ie), He != null && ye(He));
              });
            }))) : B ? (q = { from: (q = B.lower) !== null && q !== void 0 ? q : e.MIN_KEY, to: (q = B.upper) !== null && q !== void 0 ? q : e.MAX_KEY }, F.add(q), I.add(q)) : (I.add(r), F.add(r), s.indexes.forEach(function(V) {
              return v(V.name).add(r);
            })), a.mutate(m).then(function(V) {
              return !B || m.type !== "add" && m.type !== "put" || (I.addKeys(V.results), g && g.forEach(function(G) {
                for (var ue = m.values.map(function(ie) {
                  return G.extractKey(ie);
                }), ye = G.keyPath.findIndex(function(ie) {
                  return ie === l.keyPath;
                }), oe = 0, ke = V.results.length; oe < ke; ++oe) ue[oe][ye] = V.results[oe];
                v(G.name).addKeys(ue);
              })), P.mutatedParts = Vn(P.mutatedParts || {}, C), V;
            });
          } }), d = function(v) {
            var x = v.query, v = x.index, x = x.range;
            return [v, new We((v = x.lower) !== null && v !== void 0 ? v : e.MIN_KEY, (x = x.upper) !== null && x !== void 0 ? x : e.MAX_KEY)];
          }, E = { get: function(m) {
            return [l, new We(m.key)];
          }, getMany: function(m) {
            return [l, new We().addKeys(m.keys)];
          }, count: d, query: d, openCursor: d };
          return O(E).forEach(function(m) {
            _[m] = function(v) {
              var x = X.subscr, w = !!x, T = Oi(X, a) && Si(m, v) ? v.obsSet = {} : x;
              if (w) {
                var P = function(q) {
                  return q = "idb://".concat(t, "/").concat(o, "/").concat(q), T[q] || (T[q] = new We());
                }, C = P(""), I = P(":dels"), x = E[m](v), w = x[0], x = x[1];
                if ((m === "query" && w.isPrimaryKey && !v.values ? I : P(w.name || "")).add(x), !w.isPrimaryKey) {
                  if (m !== "count") {
                    var F = m === "query" && y && v.values && a.query(c(c({}, v), { values: !1 }));
                    return a[m].apply(this, arguments).then(function(q) {
                      if (m === "query") {
                        if (y && v.values) return F.then(function(ue) {
                          return ue = ue.result, C.addKeys(ue), q;
                        });
                        var W = v.values ? q.result.map(f) : q.result;
                        (v.values ? C : I).addKeys(W);
                      } else if (m === "openCursor") {
                        var V = q, G = v.values;
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
      function ki(e, t, r) {
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
      function Ai(e, t, E, o, a, s) {
        if (!E || E.length === 0) return e;
        var l = t.query.index, f = l.multiEntry, y = t.query.range, g = o.schema.primaryKey.extractKey, _ = l.extractKey, d = (l.lowLevelIndex || l).extractKey, E = E.reduce(function(m, v) {
          var x = m, w = [];
          if (v.type === "add" || v.type === "put") for (var T = new We(), P = v.values.length - 1; 0 <= P; --P) {
            var C, I = v.values[P], F = g(I);
            T.hasKey(F) || (C = _(I), (f && S(C) ? C.some(function(V) {
              return Kr(V, y);
            }) : Kr(C, y)) && (T.addKey(F), w.push(I)));
          }
          switch (v.type) {
            case "add":
              var U = new We().addKeys(t.values ? m.map(function(G) {
                return g(G);
              }) : m), x = m.concat(t.values ? w.filter(function(G) {
                return G = g(G), !U.hasKey(G) && (U.addKey(G), !0);
              }) : w.map(function(G) {
                return g(G);
              }).filter(function(G) {
                return !U.hasKey(G) && (U.addKey(G), !0);
              }));
              break;
            case "put":
              var B = new We().addKeys(v.values.map(function(G) {
                return g(G);
              }));
              x = m.filter(function(G) {
                return !B.hasKey(t.values ? g(G) : G);
              }).concat(t.values ? w : w.map(function(G) {
                return g(G);
              }));
              break;
            case "delete":
              var q = new We().addKeys(v.keys);
              x = m.filter(function(G) {
                return !q.hasKey(t.values ? g(G) : G);
              });
              break;
            case "deleteRange":
              var W = v.range;
              x = m.filter(function(G) {
                return !Kr(g(G), W);
              });
          }
          return x;
        }, e);
        return E === e ? e : (E.sort(function(m, v) {
          return pe(d(m), d(v)) || pe(g(m), g(v));
        }), t.limit && t.limit < 1 / 0 && (E.length > t.limit ? E.length = t.limit : e.length === t.limit && E.length < t.limit && (a.dirty = !0)), s ? Object.freeze(E) : E);
      }
      function Pi(e, t) {
        return pe(e.lower, t.lower) === 0 && pe(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function Ho(e, t) {
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
            a.subscribers.size === 0 && Ae(s, a);
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
                for (var g = /* @__PURE__ */ new Set(), _ = 0, d = r; _ < d.length; _++) {
                  var E = d[_], m = Bt["idb://".concat(t, "/").concat(E)];
                  if (m) {
                    var v = e.table(E), x = m.optimisticOps.filter(function(G) {
                      return G.trans === f;
                    });
                    if (f._explicit && y && f.mutatedParts) for (var w = 0, T = Object.values(m.queries.query); w < T.length; w++) for (var P = 0, C = (U = T[w]).slice(); P < C.length; P++) Ar((B = C[P]).obsSet, f.mutatedParts) && (Ae(U, B), B.subscribers.forEach(function(G) {
                      return g.add(G);
                    }));
                    else if (0 < x.length) {
                      m.optimisticOps = m.optimisticOps.filter(function(G) {
                        return G.trans !== f;
                      });
                      for (var I = 0, F = Object.values(m.queries.query); I < F.length; I++) for (var U, B, q, W = 0, V = (U = F[I]).slice(); W < V.length; W++) (B = V[W]).res != null && f.mutatedParts && (y && !B.dirty ? (q = Object.isFrozen(B.res), q = Ai(B.res, B.req, x, v, B, q), B.dirty ? (Ae(U, B), B.subscribers.forEach(function(G) {
                        return g.add(G);
                      })) : q !== B.res && (B.res = q, B.promise = H.resolve({ result: q }))) : (B.dirty && Ae(U, B), B.subscribers.forEach(function(G) {
                        return g.add(G);
                      })));
                    }
                  }
                }
                g.forEach(function(G) {
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
            var f = Bt["idb://".concat(t, "/").concat(r)];
            return f ? (l = o.mutate(s), s.type !== "add" && s.type !== "put" || !(50 <= s.values.length || Rr(a, s).some(function(y) {
              return y == null;
            })) ? (f.optimisticOps.push(s), s.mutatedParts && $n(s.mutatedParts), l.then(function(y) {
              0 < y.numFailures && (Ae(f.optimisticOps, s), (y = ki(0, s, y)) && f.optimisticOps.push(y), s.mutatedParts && $n(s.mutatedParts));
            }), l.catch(function() {
              Ae(f.optimisticOps, s), s.mutatedParts && $n(s.mutatedParts);
            })) : l.then(function(y) {
              var g = ki(0, c(c({}, s), { values: s.values.map(function(_, d) {
                var E;
                return y.failures[d] ? _ : (_ = (E = a.keyPath) !== null && E !== void 0 && E.includes(".") ? Fe(_) : c({}, _), ee(_, a.keyPath, y.results[d]), _);
              }) }), y);
              f.optimisticOps.push(g), queueMicrotask(function() {
                return s.mutatedParts && $n(s.mutatedParts);
              });
            }), l) : o.mutate(s);
          }, query: function(s) {
            if (!Oi(X, o) || !Si("query", s)) return o.query(s);
            var l = ((g = X.trans) === null || g === void 0 ? void 0 : g.db._options.cache) === "immutable", d = X, f = d.requery, y = d.signal, g = function(v, x, w, T) {
              var P = Bt["idb://".concat(v, "/").concat(x)];
              if (!P) return [];
              if (!(x = P.queries[w])) return [null, !1, P, null];
              var C = x[(T.query ? T.query.index.name : null) || ""];
              if (!C) return [null, !1, P, null];
              switch (w) {
                case "query":
                  var I = C.find(function(F) {
                    return F.req.limit === T.limit && F.req.values === T.values && Pi(F.req.query.range, T.query.range);
                  });
                  return I ? [I, !0, P, C] : [C.find(function(F) {
                    return ("limit" in F.req ? F.req.limit : 1 / 0) >= T.limit && (!T.values || F.req.values) && Ho(F.req.query.range, T.query.range);
                  }), !1, P, C];
                case "count":
                  return I = C.find(function(F) {
                    return Pi(F.req.query.range, T.query.range);
                  }), [I, !!I, P, C];
              }
            }(t, r, "query", s), _ = g[0], d = g[1], E = g[2], m = g[3];
            return _ && d ? _.obsSet = s.obsSet : (d = o.query(s).then(function(v) {
              var x = v.result;
              if (_ && (_.res = x), l) {
                for (var w = 0, T = x.length; w < T; ++w) Object.freeze(x[w]);
                Object.freeze(x);
              } else v.result = Fe(x);
              return v;
            }).catch(function(v) {
              return m && _ && Ae(m, _), Promise.reject(v);
            }), _ = { obsSet: s.obsSet, promise: d, subscribers: /* @__PURE__ */ new Set(), type: "query", req: s, dirty: !1 }, m ? m.push(_) : (m = [_], (E = E || (Bt["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[s.query.index.name || ""] = m)), Go(_, m, f, y), _.promise.then(function(v) {
              return { result: Ai(v.result, s, E?.optimisticOps, o, _, l) };
            });
          } });
        } });
      } };
      function Hn(e, t) {
        return new Proxy(e, { get: function(r, o, a) {
          return o === "db" ? t : Reflect.get(r, o, a);
        } });
      }
      var gt = (Ce.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new D.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new D.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(Fo), r.stores({}), this._state.autoSchema = !1, r);
      }, Ce.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || X.letThrough || this._vip) ? e() : new H(function(r, o) {
          if (t._state.openComplete) return o(new D.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new D.DatabaseClosed());
            t.open().catch(k);
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
        return Kt(Xe, function() {
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
        e.isBeingOpened || (e.dbReadyPromise = new H(function(r) {
          e.dbReadyResolve = r;
        }), e.openCanceller = new H(function(r, o) {
          e.cancelOpen = o;
        }));
      }, Ce.prototype.close = function(r) {
        var t = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        t ? (r.isBeingOpened && r.cancelOpen(new D.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new D.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, Ce.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", o = this._state;
        return new H(function(a, s) {
          function l() {
            t.close(e);
            var f = t._deps.indexedDB.deleteDatabase(t.name);
            f.onsuccess = Oe(function() {
              var y, g, _;
              y = t._deps, g = t.name, _ = y.indexedDB, y = y.IDBKeyRange, Or(_) || g === In || Tr(_, y).delete(g).catch(k), a();
            }), f.onerror = ht(s), f.onblocked = t._fireOnBlocked;
          }
          if (r) throw new D.InvalidArgument("Invalid closeOptions argument to db.delete()");
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
          if (a < 2) throw new D.InvalidArgument("Too few arguments");
          for (var s = new Array(a - 1); --a; ) s[a - 1] = arguments[a];
          return o = s.pop(), [t, xe(s), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Ce.prototype._transaction = function(e, t, r) {
        var o = this, a = X.trans;
        a && a.db === this && e.indexOf("!") === -1 || (a = null);
        var s, l, f = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (l = t.map(function(g) {
            if (g = g instanceof o.Table ? g.name : g, typeof g != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return g;
          }), e == "r" || e === dr) s = dr;
          else {
            if (e != "rw" && e != pr) throw new D.InvalidArgument("Invalid transaction mode: " + e);
            s = pr;
          }
          if (a) {
            if (a.mode === dr && s === pr) {
              if (!f) throw new D.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              a = null;
            }
            a && l.forEach(function(g) {
              if (a && a.storeNames.indexOf(g) === -1) {
                if (!f) throw new D.SubTransaction("Table " + g + " not included in parent transaction.");
                a = null;
              }
            }), f && a && !a.active && (a = null);
          }
        } catch (g) {
          return a ? a._promise(null, function(_, d) {
            d(g);
          }) : Pe(g);
        }
        var y = (function g(_, d, E, m, v) {
          return H.resolve().then(function() {
            var x = X.transless || X, w = _._createTransaction(d, E, _._dbSchema, m);
            if (w.explicit = !0, x = { trans: w, transless: x }, m) w.idbtrans = m.idbtrans;
            else try {
              w.create(), w.idbtrans._explicit = !0, _._state.PR1398_maxLoop = 3;
            } catch (C) {
              return C.name === A.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                return g(_, d, E, null, v);
              })) : Pe(C);
            }
            var T, P = ct(v);
            return P && Jt(), x = H.follow(function() {
              var C;
              (T = v.call(w, w)) && (P ? (C = Ot.bind(null, null), T.then(C, C)) : typeof T.next == "function" && typeof T.throw == "function" && (T = Nr(T)));
            }, x), (T && typeof T.then == "function" ? H.resolve(T).then(function(C) {
              return w.active ? C : Pe(new D.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : x.then(function() {
              return T;
            })).then(function(C) {
              return m && w._resolve(), w._completion.then(function() {
                return C;
              });
            }).catch(function(C) {
              return w._reject(C), Pe(C);
            });
          });
        }).bind(null, this, s, l, a, r);
        return a ? a._promise(s, y, "lock") : X.trans ? Kt(X.transless, function() {
          return o._whenReady(y);
        }) : this._whenReady(y);
      }, Ce.prototype.table = function(e) {
        if (!L(this._allTables, e)) throw new D.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Ce);
      function Ce(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var o = Ce.dependencies;
        this._options = t = c({ addons: Ce.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var a, s, l, f, y, g = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: k, dbReadyPromise: null, cancelOpen: k, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        g.dbReadyPromise = new H(function(d) {
          g.dbReadyResolve = d;
        }), g.openCanceller = new H(function(d, E) {
          g.cancelOpen = E;
        }), this._state = g, this.name = e, this.on = sn(this, "populate", "blocked", "versionchange", "close", { ready: [re, k] }), this.once = function(d, E) {
          var m = function() {
            for (var v = [], x = 0; x < arguments.length; x++) v[x] = arguments[x];
            r.on(d).unsubscribe(m), E.apply(r, v);
          };
          return r.on(d, m);
        }, this.on.ready.subscribe = Ve(this.on.ready.subscribe, function(d) {
          return function(E, m) {
            Ce.vip(function() {
              var v, x = r._state;
              x.openComplete ? (x.dbOpenError || H.resolve().then(E), m && d(E)) : x.onReadyBeingFired ? (x.onReadyBeingFired.push(E), m && d(E)) : (d(E), v = r, m || d(function w() {
                v.on.ready.unsubscribe(E), v.on.ready.unsubscribe(w);
              }));
            });
          };
        }), this.Collection = (a = this, un(Co.prototype, function(T, w) {
          this.db = a;
          var m = oi, v = null;
          if (w) try {
            m = w();
          } catch (P) {
            v = P;
          }
          var x = T._ctx, w = x.table, T = w.hook.reading.fire;
          this._ctx = { table: w, index: x.index, isPrimKey: !x.index || w.schema.primKey.keyPath && x.index === w.schema.primKey.name, range: m, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: v, or: x.or, valueMapper: T !== R ? T : null };
        })), this.Table = (s = this, un(ci.prototype, function(d, E, m) {
          this.db = s, this._tx = m, this.name = d, this.schema = E, this.hook = s._allTables[d] ? s._allTables[d].hook : sn(null, { creating: [te, k], reading: [Y, R], updating: [se, k], deleting: [J, k] });
        })), this.Transaction = (l = this, un(Do.prototype, function(d, E, m, v, x) {
          var w = this;
          d !== "readonly" && E.forEach(function(T) {
            T = (T = m[T]) === null || T === void 0 ? void 0 : T.yProps, T && (E = E.concat(T.map(function(P) {
              return P.updatesTable;
            })));
          }), this.db = l, this.mode = d, this.storeNames = E, this.schema = m, this.chromeTransactionDurability = v, this.idbtrans = null, this.on = sn(this, "complete", "error", "abort"), this.parent = x || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new H(function(T, P) {
            w._resolve = T, w._reject = P;
          }), this._completion.then(function() {
            w.active = !1, w.on.complete.fire();
          }, function(T) {
            var P = w.active;
            return w.active = !1, w.on.error.fire(T), w.parent ? w.parent._reject(T) : P && w.idbtrans && w.idbtrans.abort(), Pe(T);
          });
        })), this.Version = (f = this, un(qo.prototype, function(d) {
          this.db = f, this._cfg = { version: d, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (y = this, un(yi.prototype, function(d, E, m) {
          if (this.db = y, this._ctx = { table: d, index: E === ":id" ? null : E, or: m }, this._cmp = this._ascending = pe, this._descending = function(v, x) {
            return pe(x, v);
          }, this._max = function(v, x) {
            return 0 < pe(v, x) ? v : x;
          }, this._min = function(v, x) {
            return pe(v, x) < 0 ? v : x;
          }, this._IDBKeyRange = y._deps.IDBKeyRange, !this._IDBKeyRange) throw new D.MissingAPI();
        })), this.on("versionchange", function(d) {
          0 < d.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(d) {
          !d.newVersion || d.newVersion < d.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(d.oldVersion / 10));
        }), this._maxKey = hn(t.IDBKeyRange), this._createTransaction = function(d, E, m, v) {
          return new r.Transaction(d, E, m, r._options.chromeTransactionDurability, v);
        }, this._fireOnBlocked = function(d) {
          r.on("blocked").fire(d), Zt.filter(function(E) {
            return E.name === r.name && E !== r && !E._state.vcFired;
          }).map(function(E) {
            return E.on("versionchange").fire(d);
          });
        }, this.use($o), this.use(Yo), this.use(Wo), this.use(Uo), this.use(Vo);
        var _ = new Proxy(this, { get: function(d, E, m) {
          if (E === "_vip") return !0;
          if (E === "table") return function(x) {
            return Hn(r.table(x), _);
          };
          var v = Reflect.get(d, E, m);
          return v instanceof ci ? Hn(v, _) : E === "tables" ? v.map(function(x) {
            return Hn(x, _);
          }) : E === "_createTransaction" ? function() {
            return Hn(v.apply(this, arguments), _);
          } : v;
        } });
        this.vip = _, o.forEach(function(d) {
          return d(r);
        });
      }
      var Gn, ut = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Xo = (jr.prototype.subscribe = function(e, t, r) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: r });
      }, jr.prototype[ut] = function() {
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
          var s = ct(e), l, f = !1, y = {}, g = {}, _ = { get closed() {
            return f;
          }, unsubscribe: function() {
            f || (f = !0, l && l.abort(), d && At.storagemutated.unsubscribe(m));
          } };
          a.start && a.start(_);
          var d = !1, E = function() {
            return hr(v);
          }, m = function(x) {
            Vn(y, x), Ar(g, y) && E();
          }, v = function() {
            var x, w, T;
            !f && Gn.indexedDB && (y = {}, x = {}, l && l.abort(), l = new AbortController(), T = function(P) {
              var C = zt();
              try {
                s && Jt();
                var I = Tt(e, P);
                return I = s ? I.finally(Ot) : I;
              } finally {
                C && Qt();
              }
            }(w = { subscr: x, signal: l.signal, requery: E, querier: e, trans: null }), Promise.resolve(T).then(function(P) {
              r = !0, t = P, f || w.signal.aborted || (y = {}, function(C) {
                for (var I in C) if (L(C, I)) return;
                return 1;
              }(g = x) || d || (At(fn, m), d = !0), hr(function() {
                return !f && a.next && a.next(P);
              }));
            }, function(P) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || f || hr(function() {
                f || a.error && a.error(P);
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
      var Mt = gt;
      function Fr(e) {
        var t = Pt;
        try {
          Pt = !0, At.storagemutated.fire(e), Ir(e, !0);
        } finally {
          Pt = t;
        }
      }
      Q(Mt, c(c({}, je), { delete: function(e) {
        return new Mt(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new Mt(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = Mt.dependencies, r = t.indexedDB, t = t.IDBKeyRange, (Or(r) ? Promise.resolve(r.databases()).then(function(o) {
            return o.map(function(a) {
              return a.name;
            }).filter(function(a) {
              return a !== In;
            });
          }) : Tr(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return Pe(new D.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          N(this, e);
        };
      }, ignoreTransaction: function(e) {
        return X.trans ? Kt(X.transless, e) : e();
      }, vip: Sr, async: function(e) {
        return function() {
          try {
            var t = Nr(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : H.resolve(t);
          } catch (r) {
            return Pe(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = Nr(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : H.resolve(o);
        } catch (a) {
          return Pe(a);
        }
      }, currentTransaction: { get: function() {
        return X.trans || null;
      } }, waitFor: function(e, t) {
        return t = H.resolve(typeof e == "function" ? Mt.ignoreTransaction(e) : e).timeout(t || 6e4), X.trans ? X.trans.waitFor(t) : t;
      }, Promise: H, debug: { get: function() {
        return Z;
      }, set: function(e) {
        ge(e);
      } }, derive: de, extend: N, props: Q, override: Ve, Events: sn, on: At, liveQuery: Ci, extendObservabilitySet: Vn, getByKeyPath: Re, setByKeyPath: ee, delByKeyPath: function(e, t) {
        typeof t == "string" ? ee(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          ee(e, r, void 0);
        });
      }, shallowClone: ne, deepClone: Fe, getObjectDiff: Dr, cmp: pe, asap: Me, minKey: -1 / 0, addons: [], connections: Zt, errnames: A, dependencies: Gn, cache: Bt, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), Mt.maxKey = hn(Mt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (At(fn, function(e) {
        Pt || (e = new CustomEvent(gr, { detail: e }), Pt = !0, dispatchEvent(e), Pt = !1);
      }), addEventListener(gr, function(e) {
        e = e.detail, Pt || Fr(e);
      }));
      var rn, Pt = !1, Ii = function() {
      };
      return typeof BroadcastChannel < "u" && ((Ii = function() {
        (rn = new BroadcastChannel(gr)).onmessage = function(e) {
          return e.data && Fr(e.data);
        };
      })(), typeof rn.unref == "function" && rn.unref(), At(fn, function(e) {
        Pt || rn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!gt.disableBfCache && e.persisted) {
          Z && console.debug("Dexie: handling persisted pagehide"), rn?.close();
          for (var t = 0, r = Zt; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !gt.disableBfCache && e.persisted && (Z && console.debug("Dexie: handling persisted pageshow"), Ii(), Fr({ all: new We(-1 / 0, [[]]) }));
      })), H.rejectionMapper = function(e, t) {
        return !e || e instanceof wt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !M[e.name] ? e : (t = new M[e.name](t || e.message, e), "stack" in e && he(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, ge(Z), c(gt, Object.freeze({ __proto__: null, Dexie: gt, liveQuery: Ci, Entity: ai, cmp: pe, PropModification: cn, replacePrefix: function(e, t) {
        return new cn({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new cn({ add: e });
      }, remove: function(e) {
        return new cn({ remove: e });
      }, default: gt, RangeSet: We, mergeRanges: yn, rangesOverlap: _i }), { default: gt }), gt;
    });
  }(oo)), oo.exports;
}
var Pf = Af();
const Ta = /* @__PURE__ */ Sf(Pf), Ts = Symbol.for("Dexie"), Oa = globalThis[Ts] || (globalThis[Ts] = Ta);
if (Ta.semVer !== Oa.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Ta.semVer} and ${Oa.semVer}`);
const {
  liveQuery: vh,
  mergeRanges: bh,
  rangesOverlap: _h,
  RangeSet: wh,
  cmp: xh,
  Entity: Eh,
  PropModification: Th,
  replacePrefix: Oh,
  add: Cf,
  remove: Sh,
  DexieYProvider: kh
} = Oa;
function Ah(n) {
  return {
    refetchRecord: i,
    addRecord: u,
    createRecord: p,
    updateRecord: c,
    deleteRecord: h,
    findRecordById: j,
    findRecordByAttribute: ae,
    findRecordsByTagName: L,
    findChildRecords: de,
    findChildRecordsByTagName: $e,
    findChildRecordsWithinDepthAndGivenTagName: Be,
    findDescendants: Ve,
    findAncestors: fe,
    findFirstAncestorByTagName: Me,
    ensureRelationship: S,
    findRootSCL: $,
    recordExists: O,
    findOneRecordByAttribute: Q,
    findAllRecordsByAttribute: he,
    close: Re,
    extractAttr: Sa,
    updateAttr: If,
    copyRecordTreeRecursively: Bu,
    db: n
  };
  async function i(ee) {
    const ne = await j(ee.id);
    if (!ne)
      throw new Error(`could not re-fetch record id:${ee.id}`);
    return ne;
  }
  async function u(ee) {
    const ne = { ...ee, id: crypto.randomUUID() };
    try {
      return await n.table(Vt).add(ne), ne;
    } catch (K) {
      const xe = {
        msg: "could not add record",
        db: n.name,
        newRecord: ne,
        err: K
      };
      throw console.error(xe), new Error(JSON.stringify(xe));
    }
  }
  async function c(ee) {
    try {
      if (await n.table(Vt).update(ee.id, ee) < 1) {
        const K = { msg: "nothing has been updated", record: ee };
        throw console.error(K), new Error(JSON.stringify(K));
      }
    } catch (ne) {
      console.error(ne);
    }
  }
  async function h(ee) {
    try {
      if (ee.children)
        for (const ne of ee.children) {
          const K = await j(ne.id);
          if (!K) {
            console.warn({
              msg: "deleteRecord: child relationship found but not child record, continuing",
              child: ne
            });
            continue;
          }
          await h(K);
        }
      if (ee.parent?.id) {
        const ne = await j(ee.parent.id);
        if (!ne) throw new Error("parent relationship found but not parent record");
        await N(ne, ee);
      }
      await n.table(Vt).delete(ee.id);
    } catch (ne) {
      console.error(ne);
    }
  }
  async function p(ee, ne) {
    const xe = {
      ...{
        id: "",
        tagName: "SCL",
        attributes: [],
        parent: null,
        namespace: null,
        value: "",
        children: []
      },
      ...ee,
      id: crypto.randomUUID()
    };
    try {
      return await n.table(Vt).add(xe), ne && await S(ne, xe), {
        ...xe,
        parent: ne ? { id: ne.id, tagName: ne.tagName } : null
      };
    } catch (Ke) {
      const be = {
        msg: "could not add record",
        db: n.name,
        table: ee.tagName,
        recordToCreate: ee,
        err: Ke
      };
      throw console.error(be), new Error(JSON.stringify(be));
    }
  }
  async function O(ee) {
    return await n.table(Vt).where({ id: ee.id }).count() > 0;
  }
  async function S(ee, ne) {
    const K = ee.children?.some((Fe) => Fe.id === ne.id), xe = ne.parent?.id === ee.id;
    let Ke, be;
    if (K || await n.table(Vt).update(ee.id, {
      children: Cf([{ id: ne.id, tagName: ne.tagName }])
    }), Ke = await j(ee.id), xe || (ne.parent = {
      id: ee.id,
      tagName: ee.tagName
    }, await n.table(Vt).update(ne.id, { parent: ne.parent }), be = await j(ne.id)), !Ke || !be)
      throw new Error(
        `updating relationship: could not update records: ${Ke?.tagName} ${be?.tagName}`
      );
    return [Ke, be];
  }
  async function N(ee, ne) {
    ne.parent = null, await c(ne), ee.children && (ee.children = ee.children.filter((K) => K.id !== ne.id), await c(ee));
  }
  async function $() {
    const ee = await n.table(Vt).where({ tagName: "SCL" }).toArray();
    if (ee.length === 0) throw new Error("there is no SCL element");
    if (ee.length > 1)
      throw new Error("there are multiple SCL elements; there can be only one");
    const ne = ee[0];
    if (ne.parent)
      throw new Error("the SCL element has a parent; the SCL should be the root element");
    return ne;
  }
  async function j(ee) {
    return await n.table(Vt).get(ee);
  }
  async function L(ee) {
    return await n.table(Vt).where({ tagName: ee }).toArray();
  }
  async function Q(ee, ne) {
    const [K] = await aa(n, { tagNames: [ee], attr: ne });
    return K;
  }
  async function ae(ee) {
    const [ne] = await aa(n, { attr: ee });
    return ne;
  }
  async function he(ee, ne) {
    return aa(n, { tagNames: [ee], attr: ne });
  }
  async function de(ee, ne) {
    if (!ee.children?.length)
      return [];
    let K = (await n.table(Vt).bulkGet(ee.children.map((xe) => xe.id))).filter(Boolean);
    return ne?.tagNames && ne.tagNames.length > 0 && (K = K.filter((xe) => ne?.tagNames?.includes(xe.tagName))), ne?.attr && (K = K.filter(
      (xe) => xe.attributes.some(
        (Ke) => Ke.name === ne?.attr?.name && Ke.value === ne.attr.value
      )
    )), K;
  }
  async function $e(ee, ne) {
    const K = await de(ee);
    return ne.length === 0 ? K : K.filter((Ke) => ne.includes(Ke.tagName));
  }
  async function Be(ee, ne = Ne, K = []) {
    const xe = [];
    let Ke = [ee];
    for (let be = 0; be < ne; be++) {
      const Fe = [];
      if (Ke.length === 0)
        break;
      for (const pt of Ke) {
        const Ze = await $e(pt, K);
        Ze.length !== 0 && (Fe.push(...Ze), xe.push(...Ze));
      }
      Ke = [...Fe];
    }
    return xe;
  }
  async function Ve(ee, ne = {}) {
    const { depth: K = 1 / 0, tagNames: xe = [] } = ne, Ke = xe.length === 0;
    let be = [], Fe = [ee];
    for (let pt = 0; pt < K; pt++) {
      const Ze = [];
      if (Fe.length === 0)
        break;
      for (const Ye of Fe) {
        const _e = await $e(Ye, []);
        _e.length !== 0 && (Ze.push(..._e), be.push(..._e));
      }
      Fe = Ze;
    }
    return Ke || (be = be.filter((pt) => xe.includes(pt.tagName))), ne.attr && (be = be.filter((pt) => Sa(pt, ne.attr.name)?.value === ne.attr.value)), be;
  }
  async function fe(ee, ne = {}) {
    const { depth: K = 1 / 0, tagNames: xe = [] } = ne, Ke = xe.length === 0, be = [];
    let Fe = ee;
    for (let Ze = 0; Ze < K && Fe.parent?.id; Ze++) {
      const Ye = await j(Fe.parent.id);
      if (!Ye)
        break;
      be.push(Ye), Fe = Ye;
    }
    return Ke ? be : be.filter((Ze) => xe.includes(Ze.tagName));
  }
  async function Me(ee, ne) {
    let K = ee;
    for (; K.parent?.id; ) {
      const xe = await j(K.parent.id);
      if (!xe)
        break;
      if (xe.tagName === ne)
        return xe;
      K = xe;
    }
  }
  function Re() {
    n.close();
  }
}
function Sa(n, i) {
  return n.attributes?.find((u) => u.name === i);
}
function If(n, i, u) {
  n.attributes || (n.attributes = []);
  const c = n.attributes?.findIndex((p) => p.name === i);
  c >= 0 ? n.attributes[c].value = u : n.attributes.push({ name: i, value: u });
}
function Ph(n, i) {
  const u = Sa(n, i);
  if (!u)
    throw new Error(
      `record does not have given attribute, recordId=${n.id}, attributeName=${i}`
    );
  return u;
}
async function Ch(n, i, u) {
  try {
    return await n.table(Vt).where({ tagName: i }).filter(
      (h) => !!h.attributes?.some((p) => p.name === u.name && p.value === u.value)
    ).first();
  } catch (c) {
    console.error({ msg: "could not find record by attribute", tagName: i, attr: u, err: c });
  }
}
async function aa(n, i) {
  try {
    const u = n.table(Vt);
    let c = i.tagNames && i.tagNames.length > 0 ? u.where("tagName").anyOf(i.tagNames) : u.toCollection();
    return i.attr && (c = c.filter((p) => p.attributes?.some(
      (S) => S.name === i.attr.name && S.value === i.attr.value
    ))), await c.toArray();
  } catch (u) {
    return console.error({ msg: "could not find records by options", options: i, err: u }), [];
  }
}
async function Bu(n, i, u, c) {
  for (const h of n) {
    const p = {
      tagName: h.tagName,
      attributes: [...h.attributes],
      parent: null,
      namespace: h.namespace,
      value: h.value,
      children: []
    };
    let O = await c.createRecord(p);
    O = (await c.ensureRelationship(i, O))[1];
    const N = await u.findChildRecords(h);
    N.length > 0 && await Bu(N, O, u, c);
  }
}
export {
  Ph as $,
  Mf as A,
  ro as B,
  Qf as C,
  Fa as D,
  Ds as E,
  Ju as F,
  ia as G,
  Cc as H,
  Bf as I,
  Zf as J,
  ga as K,
  Du as L,
  Uf as M,
  Vf as N,
  va as O,
  rh as P,
  eh as Q,
  qf as R,
  go as S,
  gh as T,
  fa as U,
  Of as V,
  Sf as W,
  ku as X,
  Sa as Y,
  Oa as Z,
  Ah as _,
  Et as a,
  Bu as a0,
  ih as a1,
  vh as a2,
  Vt as a3,
  Yf as a4,
  cu as a5,
  Xt as a6,
  Gf as a7,
  Dc as a8,
  Xs as a9,
  Ru as aa,
  mo as ab,
  Mc as ac,
  qc as ad,
  on as ae,
  Hf as af,
  Vc as ag,
  nh as ah,
  Qu as ai,
  Ff as aj,
  nl as ak,
  $f as al,
  th as am,
  ar as an,
  Xf as ao,
  Sl as ap,
  Wf as aq,
  Ol as ar,
  Ba as as,
  zf as at,
  Nf as au,
  Lf as av,
  Tl as aw,
  oh as ax,
  If as ay,
  Ch as az,
  Aa as b,
  Jf as c,
  Os as d,
  Ht as e,
  Df as f,
  Tn as g,
  Rf as h,
  Ie as i,
  En as j,
  Se as k,
  Xi as l,
  Ia as m,
  tr as n,
  $u as o,
  Kf as p,
  Ss as q,
  Na as r,
  Qo as s,
  jf as t,
  La as u,
  bc as v,
  Qe as w,
  Xa as x,
  bt as y,
  Yr as z
};
