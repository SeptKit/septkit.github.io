/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ca(n) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const u of n.split(",")) i[u] = 1;
  return (u) => u in i;
}
const tt = {}, Gr = [], xn = () => {
}, Vu = () => !1, Ia = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // uppercase letter
(n.charCodeAt(2) > 122 || n.charCodeAt(2) < 97), Ps = (n) => n.startsWith("onUpdate:"), Ht = Object.assign, ka = (n, i) => {
  const u = n.indexOf(i);
  u > -1 && n.splice(u, 1);
}, $u = Object.prototype.hasOwnProperty, Ze = (n, i) => $u.call(n, i), Pe = Array.isArray, Yr = (n) => zi(n) === "[object Map]", Cs = (n) => zi(n) === "[object Set]", Za = (n) => zi(n) === "[object Date]", Ke = (n) => typeof n == "function", Tt = (n) => typeof n == "string", Tn = (n) => typeof n == "symbol", rt = (n) => n !== null && typeof n == "object", Is = (n) => (rt(n) || Ke(n)) && Ke(n.then) && Ke(n.catch), ks = Object.prototype.toString, zi = (n) => ks.call(n), Wu = (n) => zi(n).slice(8, -1), Ns = (n) => zi(n) === "[object Object]", Na = (n) => Tt(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, Fi = /* @__PURE__ */ Ca(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), mo = (n) => {
  const i = /* @__PURE__ */ Object.create(null);
  return (u) => i[u] || (i[u] = n(u));
}, Hu = /-(\w)/g, En = mo(
  (n) => n.replace(Hu, (i, u) => u ? u.toUpperCase() : "")
), Gu = /\B([A-Z])/g, Qi = mo(
  (n) => n.replace(Gu, "-$1").toLowerCase()
), Da = mo((n) => n.charAt(0).toUpperCase() + n.slice(1)), Zo = mo(
  (n) => n ? `on${Da(n)}` : ""
), Jn = (n, i) => !Object.is(n, i), ea = (n, ...i) => {
  for (let u = 0; u < n.length; u++)
    n[u](...i);
}, la = (n, i, u, c = !1) => {
  Object.defineProperty(n, i, {
    configurable: !0,
    enumerable: !1,
    writable: c,
    value: u
  });
}, Yu = (n) => {
  const i = parseFloat(n);
  return isNaN(i) ? n : i;
};
let es;
const vo = () => es || (es = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function go(n) {
  if (Pe(n)) {
    const i = {};
    for (let u = 0; u < n.length; u++) {
      const c = n[u], f = Tt(c) ? Ju(c) : go(c);
      if (f)
        for (const p in f)
          i[p] = f[p];
    }
    return i;
  } else if (Tt(n) || rt(n))
    return n;
}
const Xu = /;(?![^(]*\))/g, zu = /:([^]+)/, Qu = /\/\*[^]*?\*\//g;
function Ju(n) {
  const i = {};
  return n.replace(Qu, "").split(Xu).forEach((u) => {
    if (u) {
      const c = u.split(zu);
      c.length > 1 && (i[c[0].trim()] = c[1].trim());
    }
  }), i;
}
function bo(n) {
  let i = "";
  if (Tt(n))
    i = n;
  else if (Pe(n))
    for (let u = 0; u < n.length; u++) {
      const c = bo(n[u]);
      c && (i += c + " ");
    }
  else if (rt(n))
    for (const u in n)
      n[u] && (i += u + " ");
  return i.trim();
}
function Uf(n) {
  if (!n) return null;
  let { class: i, style: u } = n;
  return i && !Tt(i) && (n.class = bo(i)), u && (n.style = go(u)), n;
}
const Zu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Vf = /* @__PURE__ */ Ca(Zu);
function $f(n) {
  return !!n || n === "";
}
function ec(n, i) {
  if (n.length !== i.length) return !1;
  let u = !0;
  for (let c = 0; u && c < n.length; c++)
    u = Ra(n[c], i[c]);
  return u;
}
function Ra(n, i) {
  if (n === i) return !0;
  let u = Za(n), c = Za(i);
  if (u || c)
    return u && c ? n.getTime() === i.getTime() : !1;
  if (u = Tn(n), c = Tn(i), u || c)
    return n === i;
  if (u = Pe(n), c = Pe(i), u || c)
    return u && c ? ec(n, i) : !1;
  if (u = rt(n), c = rt(i), u || c) {
    if (!u || !c)
      return !1;
    const f = Object.keys(n).length, p = Object.keys(i).length;
    if (f !== p)
      return !1;
    for (const E in n) {
      const A = n.hasOwnProperty(E), N = i.hasOwnProperty(E);
      if (A && !N || !A && N || !Ra(n[E], i[E]))
        return !1;
    }
  }
  return String(n) === String(i);
}
function Wf(n, i) {
  return n.findIndex((u) => Ra(u, i));
}
const Ds = (n) => !!(n && n.__v_isRef === !0), tc = (n) => Tt(n) ? n : n == null ? "" : Pe(n) || rt(n) && (n.toString === ks || !Ke(n.toString)) ? Ds(n) ? tc(n.value) : JSON.stringify(n, Rs, 2) : String(n), Rs = (n, i) => Ds(i) ? Rs(n, i.value) : Yr(i) ? {
  [`Map(${i.size})`]: [...i.entries()].reduce(
    (u, [c, f], p) => (u[ta(c, p) + " =>"] = f, u),
    {}
  )
} : Cs(i) ? {
  [`Set(${i.size})`]: [...i.values()].map((u) => ta(u))
} : Tn(i) ? ta(i) : rt(i) && !Pe(i) && !Ns(i) ? String(i) : i, ta = (n, i = "") => {
  var u;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Tn(n) ? `Symbol(${(u = n.description) != null ? u : i})` : n
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let kt;
class Ks {
  constructor(i = !1) {
    this.detached = i, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = kt, !i && kt && (this.index = (kt.scopes || (kt.scopes = [])).push(
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
      const u = kt;
      try {
        return kt = this, i();
      } finally {
        kt = u;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = kt, kt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (kt = this.prevScope, this.prevScope = void 0);
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
        const f = this.parent.scopes.pop();
        f && f !== this && (this.parent.scopes[this.index] = f, f.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Hf(n) {
  return new Ks(n);
}
function js() {
  return kt;
}
function nc(n, i = !1) {
  kt && kt.cleanups.push(n);
}
let at;
const na = /* @__PURE__ */ new WeakSet();
class Fs {
  constructor(i) {
    this.fn = i, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, kt && kt.active && kt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, na.has(this) && (na.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ms(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ts(this), qs(this);
    const i = at, u = mn;
    at = this, mn = !0;
    try {
      return this.fn();
    } finally {
      Ls(this), at = i, mn = u, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let i = this.deps; i; i = i.nextDep)
        Fa(i);
      this.deps = this.depsTail = void 0, ts(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? na.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    fa(this) && this.run();
  }
  get dirty() {
    return fa(this);
  }
}
let Bs = 0, Bi, Mi;
function Ms(n, i = !1) {
  if (n.flags |= 8, i) {
    n.next = Mi, Mi = n;
    return;
  }
  n.next = Bi, Bi = n;
}
function Ka() {
  Bs++;
}
function ja() {
  if (--Bs > 0)
    return;
  if (Mi) {
    let i = Mi;
    for (Mi = void 0; i; ) {
      const u = i.next;
      i.next = void 0, i.flags &= -9, i = u;
    }
  }
  let n;
  for (; Bi; ) {
    let i = Bi;
    for (Bi = void 0; i; ) {
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
function qs(n) {
  for (let i = n.deps; i; i = i.nextDep)
    i.version = -1, i.prevActiveLink = i.dep.activeLink, i.dep.activeLink = i;
}
function Ls(n) {
  let i, u = n.depsTail, c = u;
  for (; c; ) {
    const f = c.prevDep;
    c.version === -1 ? (c === u && (u = f), Fa(c), rc(c)) : i = c, c.dep.activeLink = c.prevActiveLink, c.prevActiveLink = void 0, c = f;
  }
  n.deps = i, n.depsTail = u;
}
function fa(n) {
  for (let i = n.deps; i; i = i.nextDep)
    if (i.dep.version !== i.version || i.dep.computed && (Us(i.dep.computed) || i.dep.version !== i.version))
      return !0;
  return !!n._dirty;
}
function Us(n) {
  if (n.flags & 4 && !(n.flags & 16) || (n.flags &= -17, n.globalVersion === Wi) || (n.globalVersion = Wi, !n.isSSR && n.flags & 128 && (!n.deps && !n._dirty || !fa(n))))
    return;
  n.flags |= 2;
  const i = n.dep, u = at, c = mn;
  at = n, mn = !0;
  try {
    qs(n);
    const f = n.fn(n._value);
    (i.version === 0 || Jn(f, n._value)) && (n.flags |= 128, n._value = f, i.version++);
  } catch (f) {
    throw i.version++, f;
  } finally {
    at = u, mn = c, Ls(n), n.flags &= -3;
  }
}
function Fa(n, i = !1) {
  const { dep: u, prevSub: c, nextSub: f } = n;
  if (c && (c.nextSub = f, n.prevSub = void 0), f && (f.prevSub = c, n.nextSub = void 0), u.subs === n && (u.subs = c, !c && u.computed)) {
    u.computed.flags &= -5;
    for (let p = u.computed.deps; p; p = p.nextDep)
      Fa(p, !0);
  }
  !i && !--u.sc && u.map && u.map.delete(u.key);
}
function rc(n) {
  const { prevDep: i, nextDep: u } = n;
  i && (i.nextDep = u, n.prevDep = void 0), u && (u.prevDep = i, n.nextDep = void 0);
}
let mn = !0;
const Vs = [];
function Zn() {
  Vs.push(mn), mn = !1;
}
function er() {
  const n = Vs.pop();
  mn = n === void 0 ? !0 : n;
}
function ts(n) {
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
let Wi = 0;
class ic {
  constructor(i, u) {
    this.sub = i, this.dep = u, this.version = u.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class _o {
  // TODO isolatedDeclarations "__v_skip"
  constructor(i) {
    this.computed = i, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(i) {
    if (!at || !mn || at === this.computed)
      return;
    let u = this.activeLink;
    if (u === void 0 || u.sub !== at)
      u = this.activeLink = new ic(at, this), at.deps ? (u.prevDep = at.depsTail, at.depsTail.nextDep = u, at.depsTail = u) : at.deps = at.depsTail = u, $s(u);
    else if (u.version === -1 && (u.version = this.version, u.nextDep)) {
      const c = u.nextDep;
      c.prevDep = u.prevDep, u.prevDep && (u.prevDep.nextDep = c), u.prevDep = at.depsTail, u.nextDep = void 0, at.depsTail.nextDep = u, at.depsTail = u, at.deps === u && (at.deps = c);
    }
    return u;
  }
  trigger(i) {
    this.version++, Wi++, this.notify(i);
  }
  notify(i) {
    Ka();
    try {
      for (let u = this.subs; u; u = u.prevSub)
        u.sub.notify() && u.sub.dep.notify();
    } finally {
      ja();
    }
  }
}
function $s(n) {
  if (n.dep.sc++, n.sub.flags & 4) {
    const i = n.dep.computed;
    if (i && !n.dep.subs) {
      i.flags |= 20;
      for (let c = i.deps; c; c = c.nextDep)
        $s(c);
    }
    const u = n.dep.subs;
    u !== n && (n.prevSub = u, u && (u.nextSub = n)), n.dep.subs = n;
  }
}
const uo = /* @__PURE__ */ new WeakMap(), Ur = Symbol(
  ""
), ha = Symbol(
  ""
), Hi = Symbol(
  ""
);
function Nt(n, i, u) {
  if (mn && at) {
    let c = uo.get(n);
    c || uo.set(n, c = /* @__PURE__ */ new Map());
    let f = c.get(u);
    f || (c.set(u, f = new _o()), f.map = c, f.key = u), f.track();
  }
}
function zn(n, i, u, c, f, p) {
  const E = uo.get(n);
  if (!E) {
    Wi++;
    return;
  }
  const A = (N) => {
    N && N.trigger();
  };
  if (Ka(), i === "clear")
    E.forEach(A);
  else {
    const N = Pe(n), F = N && Na(u);
    if (N && u === "length") {
      const D = Number(c);
      E.forEach((M, X) => {
        (X === "length" || X === Hi || !Tn(X) && X >= D) && A(M);
      });
    } else
      switch ((u !== void 0 || E.has(void 0)) && A(E.get(u)), F && A(E.get(Hi)), i) {
        case "add":
          N ? F && A(E.get("length")) : (A(E.get(Ur)), Yr(n) && A(E.get(ha)));
          break;
        case "delete":
          N || (A(E.get(Ur)), Yr(n) && A(E.get(ha)));
          break;
        case "set":
          Yr(n) && A(E.get(Ur));
          break;
      }
  }
  ja();
}
function oc(n, i) {
  const u = uo.get(n);
  return u && u.get(i);
}
function Wr(n) {
  const i = Je(n);
  return i === n ? i : (Nt(i, "iterate", Hi), an(n) ? i : i.map(It));
}
function wo(n) {
  return Nt(n = Je(n), "iterate", Hi), n;
}
const ac = {
  __proto__: null,
  [Symbol.iterator]() {
    return ra(this, Symbol.iterator, It);
  },
  concat(...n) {
    return Wr(this).concat(
      ...n.map((i) => Pe(i) ? Wr(i) : i)
    );
  },
  entries() {
    return ra(this, "entries", (n) => (n[1] = It(n[1]), n));
  },
  every(n, i) {
    return Xn(this, "every", n, i, void 0, arguments);
  },
  filter(n, i) {
    return Xn(this, "filter", n, i, (u) => u.map(It), arguments);
  },
  find(n, i) {
    return Xn(this, "find", n, i, It, arguments);
  },
  findIndex(n, i) {
    return Xn(this, "findIndex", n, i, void 0, arguments);
  },
  findLast(n, i) {
    return Xn(this, "findLast", n, i, It, arguments);
  },
  findLastIndex(n, i) {
    return Xn(this, "findLastIndex", n, i, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(n, i) {
    return Xn(this, "forEach", n, i, void 0, arguments);
  },
  includes(...n) {
    return ia(this, "includes", n);
  },
  indexOf(...n) {
    return ia(this, "indexOf", n);
  },
  join(n) {
    return Wr(this).join(n);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...n) {
    return ia(this, "lastIndexOf", n);
  },
  map(n, i) {
    return Xn(this, "map", n, i, void 0, arguments);
  },
  pop() {
    return Ri(this, "pop");
  },
  push(...n) {
    return Ri(this, "push", n);
  },
  reduce(n, ...i) {
    return ns(this, "reduce", n, i);
  },
  reduceRight(n, ...i) {
    return ns(this, "reduceRight", n, i);
  },
  shift() {
    return Ri(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(n, i) {
    return Xn(this, "some", n, i, void 0, arguments);
  },
  splice(...n) {
    return Ri(this, "splice", n);
  },
  toReversed() {
    return Wr(this).toReversed();
  },
  toSorted(n) {
    return Wr(this).toSorted(n);
  },
  toSpliced(...n) {
    return Wr(this).toSpliced(...n);
  },
  unshift(...n) {
    return Ri(this, "unshift", n);
  },
  values() {
    return ra(this, "values", It);
  }
};
function ra(n, i, u) {
  const c = wo(n), f = c[i]();
  return c !== n && !an(n) && (f._next = f.next, f.next = () => {
    const p = f._next();
    return p.value && (p.value = u(p.value)), p;
  }), f;
}
const sc = Array.prototype;
function Xn(n, i, u, c, f, p) {
  const E = wo(n), A = E !== n && !an(n), N = E[i];
  if (N !== sc[i]) {
    const M = N.apply(n, p);
    return A ? It(M) : M;
  }
  let F = u;
  E !== n && (A ? F = function(M, X) {
    return u.call(this, It(M), X, n);
  } : u.length > 2 && (F = function(M, X) {
    return u.call(this, M, X, n);
  }));
  const D = N.call(E, F, c);
  return A && f ? f(D) : D;
}
function ns(n, i, u, c) {
  const f = wo(n);
  let p = u;
  return f !== n && (an(n) ? u.length > 3 && (p = function(E, A, N) {
    return u.call(this, E, A, N, n);
  }) : p = function(E, A, N) {
    return u.call(this, E, It(A), N, n);
  }), f[i](p, ...c);
}
function ia(n, i, u) {
  const c = Je(n);
  Nt(c, "iterate", Hi);
  const f = c[i](...u);
  return (f === -1 || f === !1) && Ua(u[0]) ? (u[0] = Je(u[0]), c[i](...u)) : f;
}
function Ri(n, i, u = []) {
  Zn(), Ka();
  const c = Je(n)[i].apply(n, u);
  return ja(), er(), c;
}
const uc = /* @__PURE__ */ Ca("__proto__,__v_isRef,__isVue"), Ws = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(Tn)
);
function cc(n) {
  Tn(n) || (n = String(n));
  const i = Je(this);
  return Nt(i, "has", n), i.hasOwnProperty(n);
}
class Hs {
  constructor(i = !1, u = !1) {
    this._isReadonly = i, this._isShallow = u;
  }
  get(i, u, c) {
    if (u === "__v_skip") return i.__v_skip;
    const f = this._isReadonly, p = this._isShallow;
    if (u === "__v_isReactive")
      return !f;
    if (u === "__v_isReadonly")
      return f;
    if (u === "__v_isShallow")
      return p;
    if (u === "__v_raw")
      return c === (f ? p ? bc : zs : p ? Xs : Ys).get(i) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(i) === Object.getPrototypeOf(c) ? i : void 0;
    const E = Pe(i);
    if (!f) {
      let N;
      if (E && (N = ac[u]))
        return N;
      if (u === "hasOwnProperty")
        return cc;
    }
    const A = Reflect.get(
      i,
      u,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      bt(i) ? i : c
    );
    return (Tn(u) ? Ws.has(u) : uc(u)) || (f || Nt(i, "get", u), p) ? A : bt(A) ? E && Na(u) ? A : A.value : rt(A) ? f ? qa(A) : Ma(A) : A;
  }
}
class Gs extends Hs {
  constructor(i = !1) {
    super(!1, i);
  }
  set(i, u, c, f) {
    let p = i[u];
    if (!this._isShallow) {
      const N = sr(p);
      if (!an(c) && !sr(c) && (p = Je(p), c = Je(c)), !Pe(i) && bt(p) && !bt(c))
        return N ? !1 : (p.value = c, !0);
    }
    const E = Pe(i) && Na(u) ? Number(u) < i.length : Ze(i, u), A = Reflect.set(
      i,
      u,
      c,
      bt(i) ? i : f
    );
    return i === Je(f) && (E ? Jn(c, p) && zn(i, "set", u, c) : zn(i, "add", u, c)), A;
  }
  deleteProperty(i, u) {
    const c = Ze(i, u);
    i[u];
    const f = Reflect.deleteProperty(i, u);
    return f && c && zn(i, "delete", u, void 0), f;
  }
  has(i, u) {
    const c = Reflect.has(i, u);
    return (!Tn(u) || !Ws.has(u)) && Nt(i, "has", u), c;
  }
  ownKeys(i) {
    return Nt(
      i,
      "iterate",
      Pe(i) ? "length" : Ur
    ), Reflect.ownKeys(i);
  }
}
class lc extends Hs {
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
const fc = /* @__PURE__ */ new Gs(), hc = /* @__PURE__ */ new lc(), dc = /* @__PURE__ */ new Gs(!0);
const da = (n) => n, eo = (n) => Reflect.getPrototypeOf(n);
function pc(n, i, u) {
  return function(...c) {
    const f = this.__v_raw, p = Je(f), E = Yr(p), A = n === "entries" || n === Symbol.iterator && E, N = n === "keys" && E, F = f[n](...c), D = u ? da : i ? co : It;
    return !i && Nt(
      p,
      "iterate",
      N ? ha : Ur
    ), {
      // iterator protocol
      next() {
        const { value: M, done: X } = F.next();
        return X ? { value: M, done: X } : {
          value: A ? [D(M[0]), D(M[1])] : D(M),
          done: X
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function to(n) {
  return function(...i) {
    return n === "delete" ? !1 : n === "clear" ? void 0 : this;
  };
}
function yc(n, i) {
  const u = {
    get(f) {
      const p = this.__v_raw, E = Je(p), A = Je(f);
      n || (Jn(f, A) && Nt(E, "get", f), Nt(E, "get", A));
      const { has: N } = eo(E), F = i ? da : n ? co : It;
      if (N.call(E, f))
        return F(p.get(f));
      if (N.call(E, A))
        return F(p.get(A));
      p !== E && p.get(f);
    },
    get size() {
      const f = this.__v_raw;
      return !n && Nt(Je(f), "iterate", Ur), Reflect.get(f, "size", f);
    },
    has(f) {
      const p = this.__v_raw, E = Je(p), A = Je(f);
      return n || (Jn(f, A) && Nt(E, "has", f), Nt(E, "has", A)), f === A ? p.has(f) : p.has(f) || p.has(A);
    },
    forEach(f, p) {
      const E = this, A = E.__v_raw, N = Je(A), F = i ? da : n ? co : It;
      return !n && Nt(N, "iterate", Ur), A.forEach((D, M) => f.call(p, F(D), F(M), E));
    }
  };
  return Ht(
    u,
    n ? {
      add: to("add"),
      set: to("set"),
      delete: to("delete"),
      clear: to("clear")
    } : {
      add(f) {
        !i && !an(f) && !sr(f) && (f = Je(f));
        const p = Je(this);
        return eo(p).has.call(p, f) || (p.add(f), zn(p, "add", f, f)), this;
      },
      set(f, p) {
        !i && !an(p) && !sr(p) && (p = Je(p));
        const E = Je(this), { has: A, get: N } = eo(E);
        let F = A.call(E, f);
        F || (f = Je(f), F = A.call(E, f));
        const D = N.call(E, f);
        return E.set(f, p), F ? Jn(p, D) && zn(E, "set", f, p) : zn(E, "add", f, p), this;
      },
      delete(f) {
        const p = Je(this), { has: E, get: A } = eo(p);
        let N = E.call(p, f);
        N || (f = Je(f), N = E.call(p, f)), A && A.call(p, f);
        const F = p.delete(f);
        return N && zn(p, "delete", f, void 0), F;
      },
      clear() {
        const f = Je(this), p = f.size !== 0, E = f.clear();
        return p && zn(
          f,
          "clear",
          void 0,
          void 0
        ), E;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((f) => {
    u[f] = pc(f, n, i);
  }), u;
}
function Ba(n, i) {
  const u = yc(n, i);
  return (c, f, p) => f === "__v_isReactive" ? !n : f === "__v_isReadonly" ? n : f === "__v_raw" ? c : Reflect.get(
    Ze(u, f) && f in c ? u : c,
    f,
    p
  );
}
const mc = {
  get: /* @__PURE__ */ Ba(!1, !1)
}, vc = {
  get: /* @__PURE__ */ Ba(!1, !0)
}, gc = {
  get: /* @__PURE__ */ Ba(!0, !1)
};
const Ys = /* @__PURE__ */ new WeakMap(), Xs = /* @__PURE__ */ new WeakMap(), zs = /* @__PURE__ */ new WeakMap(), bc = /* @__PURE__ */ new WeakMap();
function _c(n) {
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
function wc(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : _c(Wu(n));
}
function Ma(n) {
  return sr(n) ? n : La(
    n,
    !1,
    fc,
    mc,
    Ys
  );
}
function xc(n) {
  return La(
    n,
    !1,
    dc,
    vc,
    Xs
  );
}
function qa(n) {
  return La(
    n,
    !0,
    hc,
    gc,
    zs
  );
}
function La(n, i, u, c, f) {
  if (!rt(n) || n.__v_raw && !(i && n.__v_isReactive))
    return n;
  const p = wc(n);
  if (p === 0)
    return n;
  const E = f.get(n);
  if (E)
    return E;
  const A = new Proxy(
    n,
    p === 2 ? c : u
  );
  return f.set(n, A), A;
}
function Xr(n) {
  return sr(n) ? Xr(n.__v_raw) : !!(n && n.__v_isReactive);
}
function sr(n) {
  return !!(n && n.__v_isReadonly);
}
function an(n) {
  return !!(n && n.__v_isShallow);
}
function Ua(n) {
  return n ? !!n.__v_raw : !1;
}
function Je(n) {
  const i = n && n.__v_raw;
  return i ? Je(i) : n;
}
function Tc(n) {
  return !Ze(n, "__v_skip") && Object.isExtensible(n) && la(n, "__v_skip", !0), n;
}
const It = (n) => rt(n) ? Ma(n) : n, co = (n) => rt(n) ? qa(n) : n;
function bt(n) {
  return n ? n.__v_isRef === !0 : !1;
}
function Va(n) {
  return Qs(n, !1);
}
function pa(n) {
  return Qs(n, !0);
}
function Qs(n, i) {
  return bt(n) ? n : new Ec(n, i);
}
class Ec {
  constructor(i, u) {
    this.dep = new _o(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = u ? i : Je(i), this._value = u ? i : It(i), this.__v_isShallow = u;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(i) {
    const u = this._rawValue, c = this.__v_isShallow || an(i) || sr(i);
    i = c ? i : Je(i), Jn(i, u) && (this._rawValue = i, this._value = c ? i : It(i), this.dep.trigger());
  }
}
function Js(n) {
  return bt(n) ? n.value : n;
}
function ar(n) {
  return Ke(n) ? n() : Js(n);
}
const Oc = {
  get: (n, i, u) => i === "__v_raw" ? n : Js(Reflect.get(n, i, u)),
  set: (n, i, u, c) => {
    const f = n[i];
    return bt(f) && !bt(u) ? (f.value = u, !0) : Reflect.set(n, i, u, c);
  }
};
function Zs(n) {
  return Xr(n) ? n : new Proxy(n, Oc);
}
class Ac {
  constructor(i) {
    this.__v_isRef = !0, this._value = void 0;
    const u = this.dep = new _o(), { get: c, set: f } = i(u.track.bind(u), u.trigger.bind(u));
    this._get = c, this._set = f;
  }
  get value() {
    return this._value = this._get();
  }
  set value(i) {
    this._set(i);
  }
}
function Gf(n) {
  return new Ac(n);
}
function Yf(n) {
  const i = Pe(n) ? new Array(n.length) : {};
  for (const u in n)
    i[u] = eu(n, u);
  return i;
}
class Sc {
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
    return oc(Je(this._object), this._key);
  }
}
class Pc {
  constructor(i) {
    this._getter = i, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Xf(n, i, u) {
  return bt(n) ? n : Ke(n) ? new Pc(n) : rt(n) && arguments.length > 1 ? eu(n, i, u) : Va(n);
}
function eu(n, i, u) {
  const c = n[i];
  return bt(c) ? c : new Sc(n, i, u);
}
class Cc {
  constructor(i, u, c) {
    this.fn = i, this.setter = u, this._value = void 0, this.dep = new _o(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !u, this.isSSR = c;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    at !== this)
      return Ms(this, !0), !0;
  }
  get value() {
    const i = this.dep.track();
    return Us(this), i && (i.version = this.dep.version), this._value;
  }
  set value(i) {
    this.setter && this.setter(i);
  }
}
function Ic(n, i, u = !1) {
  let c, f;
  return Ke(n) ? c = n : (c = n.get, f = n.set), new Cc(c, f, u);
}
const no = {}, lo = /* @__PURE__ */ new WeakMap();
let Lr;
function kc(n, i = !1, u = Lr) {
  if (u) {
    let c = lo.get(u);
    c || lo.set(u, c = []), c.push(n);
  }
}
function Nc(n, i, u = tt) {
  const { immediate: c, deep: f, once: p, scheduler: E, augmentJob: A, call: N } = u, F = (de) => f ? de : an(de) || f === !1 || f === 0 ? Qn(de, 1) : Qn(de);
  let D, M, X, ne, ue = !1, he = !1;
  if (bt(n) ? (M = () => n.value, ue = an(n)) : Xr(n) ? (M = () => F(n), ue = !0) : Pe(n) ? (he = !0, ue = n.some((de) => Xr(de) || an(de)), M = () => n.map((de) => {
    if (bt(de))
      return de.value;
    if (Xr(de))
      return F(de);
    if (Ke(de))
      return N ? N(de, 2) : de();
  })) : Ke(n) ? i ? M = N ? () => N(n, 2) : n : M = () => {
    if (X) {
      Zn();
      try {
        X();
      } finally {
        er();
      }
    }
    const de = Lr;
    Lr = D;
    try {
      return N ? N(n, 3, [ne]) : n(ne);
    } finally {
      Lr = de;
    }
  } : M = xn, i && f) {
    const de = M, qe = f === !0 ? 1 / 0 : f;
    M = () => Qn(de(), qe);
  }
  const Me = js(), Oe = () => {
    D.stop(), Me && Me.active && ka(Me.effects, D);
  };
  if (p && i) {
    const de = i;
    i = (...qe) => {
      de(...qe), Oe();
    };
  }
  let ke = he ? new Array(n.length).fill(no) : no;
  const Le = (de) => {
    if (!(!(D.flags & 1) || !D.dirty && !de))
      if (i) {
        const qe = D.run();
        if (f || ue || (he ? qe.some((Ce, J) => Jn(Ce, ke[J])) : Jn(qe, ke))) {
          X && X();
          const Ce = Lr;
          Lr = D;
          try {
            const J = [
              qe,
              // pass undefined as the old value when it's changed for the first time
              ke === no ? void 0 : he && ke[0] === no ? [] : ke,
              ne
            ];
            ke = qe, N ? N(i, 3, J) : (
              // @ts-expect-error
              i(...J)
            );
          } finally {
            Lr = Ce;
          }
        }
      } else
        D.run();
  };
  return A && A(Le), D = new Fs(M), D.scheduler = E ? () => E(Le, !1) : Le, ne = (de) => kc(de, !1, D), X = D.onStop = () => {
    const de = lo.get(D);
    if (de) {
      if (N)
        N(de, 4);
      else
        for (const qe of de) qe();
      lo.delete(D);
    }
  }, i ? c ? Le(!0) : ke = D.run() : E ? E(Le.bind(null, !0), !0) : D.run(), Oe.pause = D.pause.bind(D), Oe.resume = D.resume.bind(D), Oe.stop = Oe, Oe;
}
function Qn(n, i = 1 / 0, u) {
  if (i <= 0 || !rt(n) || n.__v_skip || (u = u || /* @__PURE__ */ new Set(), u.has(n)))
    return n;
  if (u.add(n), i--, bt(n))
    Qn(n.value, i, u);
  else if (Pe(n))
    for (let c = 0; c < n.length; c++)
      Qn(n[c], i, u);
  else if (Cs(n) || Yr(n))
    n.forEach((c) => {
      Qn(c, i, u);
    });
  else if (Ns(n)) {
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
function Ji(n, i, u, c) {
  try {
    return c ? n(...c) : n();
  } catch (f) {
    xo(f, i, u);
  }
}
function tr(n, i, u, c) {
  if (Ke(n)) {
    const f = Ji(n, i, u, c);
    return f && Is(f) && f.catch((p) => {
      xo(p, i, u);
    }), f;
  }
  if (Pe(n)) {
    const f = [];
    for (let p = 0; p < n.length; p++)
      f.push(tr(n[p], i, u, c));
    return f;
  }
}
function xo(n, i, u, c = !0) {
  const f = i ? i.vnode : null, { errorHandler: p, throwUnhandledErrorInProduction: E } = i && i.appContext.config || tt;
  if (i) {
    let A = i.parent;
    const N = i.proxy, F = `https://vuejs.org/error-reference/#runtime-${u}`;
    for (; A; ) {
      const D = A.ec;
      if (D) {
        for (let M = 0; M < D.length; M++)
          if (D[M](n, N, F) === !1)
            return;
      }
      A = A.parent;
    }
    if (p) {
      Zn(), Ji(p, null, 10, [
        n,
        N,
        F
      ]), er();
      return;
    }
  }
  Dc(n, u, f, c, E);
}
function Dc(n, i, u, c = !0, f = !1) {
  if (f)
    throw n;
  console.error(n);
}
const $t = [];
let _n = -1;
const zr = [];
let ir = null, Hr = 0;
const tu = /* @__PURE__ */ Promise.resolve();
let fo = null;
function Rc(n) {
  const i = fo || tu;
  return n ? i.then(this ? n.bind(this) : n) : i;
}
function Kc(n) {
  let i = _n + 1, u = $t.length;
  for (; i < u; ) {
    const c = i + u >>> 1, f = $t[c], p = Gi(f);
    p < n || p === n && f.flags & 2 ? i = c + 1 : u = c;
  }
  return i;
}
function $a(n) {
  if (!(n.flags & 1)) {
    const i = Gi(n), u = $t[$t.length - 1];
    !u || // fast path when the job id is larger than the tail
    !(n.flags & 2) && i >= Gi(u) ? $t.push(n) : $t.splice(Kc(i), 0, n), n.flags |= 1, nu();
  }
}
function nu() {
  fo || (fo = tu.then(iu));
}
function jc(n) {
  Pe(n) ? zr.push(...n) : ir && n.id === -1 ? ir.splice(Hr + 1, 0, n) : n.flags & 1 || (zr.push(n), n.flags |= 1), nu();
}
function rs(n, i, u = _n + 1) {
  for (; u < $t.length; u++) {
    const c = $t[u];
    if (c && c.flags & 2) {
      if (n && c.id !== n.uid)
        continue;
      $t.splice(u, 1), u--, c.flags & 4 && (c.flags &= -2), c(), c.flags & 4 || (c.flags &= -2);
    }
  }
}
function ru(n) {
  if (zr.length) {
    const i = [...new Set(zr)].sort(
      (u, c) => Gi(u) - Gi(c)
    );
    if (zr.length = 0, ir) {
      ir.push(...i);
      return;
    }
    for (ir = i, Hr = 0; Hr < ir.length; Hr++) {
      const u = ir[Hr];
      u.flags & 4 && (u.flags &= -2), u.flags & 8 || u(), u.flags &= -2;
    }
    ir = null, Hr = 0;
  }
}
const Gi = (n) => n.id == null ? n.flags & 2 ? -1 : 1 / 0 : n.id;
function iu(n) {
  try {
    for (_n = 0; _n < $t.length; _n++) {
      const i = $t[_n];
      i && !(i.flags & 8) && (i.flags & 4 && (i.flags &= -2), Ji(
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
    _n = -1, $t.length = 0, ru(), fo = null, ($t.length || zr.length) && iu();
  }
}
let gt = null, ou = null;
function ho(n) {
  const i = gt;
  return gt = n, ou = n && n.type.__scopeId || null, i;
}
function Fc(n, i = gt, u) {
  if (!i || n._n)
    return n;
  const c = (...f) => {
    c._d && ms(-1);
    const p = ho(i);
    let E;
    try {
      E = n(...f);
    } finally {
      ho(p), c._d && ms(1);
    }
    return E;
  };
  return c._n = !0, c._c = !0, c._d = !0, c;
}
function zf(n, i) {
  if (gt === null)
    return n;
  const u = Ao(gt), c = n.dirs || (n.dirs = []);
  for (let f = 0; f < i.length; f++) {
    let [p, E, A, N = tt] = i[f];
    p && (Ke(p) && (p = {
      mounted: p,
      updated: p
    }), p.deep && Qn(E), c.push({
      dir: p,
      instance: u,
      value: E,
      oldValue: void 0,
      arg: A,
      modifiers: N
    }));
  }
  return n;
}
function Mr(n, i, u, c) {
  const f = n.dirs, p = i && i.dirs;
  for (let E = 0; E < f.length; E++) {
    const A = f[E];
    p && (A.oldValue = p[E].value);
    let N = A.dir[c];
    N && (Zn(), tr(N, u, 8, [
      n.el,
      A,
      n,
      i
    ]), er());
  }
}
const au = Symbol("_vte"), Bc = (n) => n.__isTeleport, qi = (n) => n && (n.disabled || n.disabled === ""), is = (n) => n && (n.defer || n.defer === ""), os = (n) => typeof SVGElement < "u" && n instanceof SVGElement, as = (n) => typeof MathMLElement == "function" && n instanceof MathMLElement, ya = (n, i) => {
  const u = n && n.to;
  return Tt(u) ? i ? i(u) : null : u;
}, su = {
  name: "Teleport",
  __isTeleport: !0,
  process(n, i, u, c, f, p, E, A, N, F) {
    const {
      mc: D,
      pc: M,
      pbc: X,
      o: { insert: ne, querySelector: ue, createText: he, createComment: Me }
    } = F, Oe = qi(i.props);
    let { shapeFlag: ke, children: Le, dynamicChildren: de } = i;
    if (n == null) {
      const qe = i.el = he(""), Ce = i.anchor = he("");
      ne(qe, u, c), ne(Ce, u, c);
      const J = (j, we) => {
        ke & 16 && (f && f.isCE && (f.ce._teleportTarget = j), D(
          Le,
          j,
          we,
          f,
          p,
          E,
          A,
          N
        ));
      }, re = () => {
        const j = i.target = ya(i.props, ue), we = uu(j, i, he, ne);
        j && (E !== "svg" && os(j) ? E = "svg" : E !== "mathml" && as(j) && (E = "mathml"), Oe || (J(j, we), io(i, !1)));
      };
      Oe && (J(u, Ce), io(i, !0)), is(i.props) ? (i.el.__isMounted = !1, Ut(() => {
        re(), delete i.el.__isMounted;
      }, p)) : re();
    } else {
      if (is(i.props) && n.el.__isMounted === !1) {
        Ut(() => {
          su.process(
            n,
            i,
            u,
            c,
            f,
            p,
            E,
            A,
            N,
            F
          );
        }, p);
        return;
      }
      i.el = n.el, i.targetStart = n.targetStart;
      const qe = i.anchor = n.anchor, Ce = i.target = n.target, J = i.targetAnchor = n.targetAnchor, re = qi(n.props), j = re ? u : Ce, we = re ? qe : J;
      if (E === "svg" || os(Ce) ? E = "svg" : (E === "mathml" || as(Ce)) && (E = "mathml"), de ? (X(
        n.dynamicChildren,
        de,
        j,
        f,
        p,
        E,
        A
      ), Ya(n, i, !0)) : N || M(
        n,
        i,
        j,
        we,
        f,
        p,
        E,
        A,
        !1
      ), Oe)
        re ? i.props && n.props && i.props.to !== n.props.to && (i.props.to = n.props.to) : ro(
          i,
          u,
          qe,
          F,
          1
        );
      else if ((i.props && i.props.to) !== (n.props && n.props.to)) {
        const Se = i.target = ya(
          i.props,
          ue
        );
        Se && ro(
          i,
          Se,
          null,
          F,
          0
        );
      } else re && ro(
        i,
        Ce,
        J,
        F,
        1
      );
      io(i, Oe);
    }
  },
  remove(n, i, u, { um: c, o: { remove: f } }, p) {
    const {
      shapeFlag: E,
      children: A,
      anchor: N,
      targetStart: F,
      targetAnchor: D,
      target: M,
      props: X
    } = n;
    if (M && (f(F), f(D)), p && f(N), E & 16) {
      const ne = p || !qi(X);
      for (let ue = 0; ue < A.length; ue++) {
        const he = A[ue];
        c(
          he,
          i,
          u,
          ne,
          !!he.dynamicChildren
        );
      }
    }
  },
  move: ro,
  hydrate: Mc
};
function ro(n, i, u, { o: { insert: c }, m: f }, p = 2) {
  p === 0 && c(n.targetAnchor, i, u);
  const { el: E, anchor: A, shapeFlag: N, children: F, props: D } = n, M = p === 2;
  if (M && c(E, i, u), (!M || qi(D)) && N & 16)
    for (let X = 0; X < F.length; X++)
      f(
        F[X],
        i,
        u,
        2
      );
  M && c(A, i, u);
}
function Mc(n, i, u, c, f, p, {
  o: { nextSibling: E, parentNode: A, querySelector: N, insert: F, createText: D }
}, M) {
  const X = i.target = ya(
    i.props,
    N
  );
  if (X) {
    const ne = qi(i.props), ue = X._lpa || X.firstChild;
    if (i.shapeFlag & 16)
      if (ne)
        i.anchor = M(
          E(n),
          i,
          A(n),
          u,
          c,
          f,
          p
        ), i.targetStart = ue, i.targetAnchor = ue && E(ue);
      else {
        i.anchor = E(n);
        let he = ue;
        for (; he; ) {
          if (he && he.nodeType === 8) {
            if (he.data === "teleport start anchor")
              i.targetStart = he;
            else if (he.data === "teleport anchor") {
              i.targetAnchor = he, X._lpa = i.targetAnchor && E(i.targetAnchor);
              break;
            }
          }
          he = E(he);
        }
        i.targetAnchor || uu(X, i, D, F), M(
          ue && E(ue),
          i,
          X,
          u,
          c,
          f,
          p
        );
      }
    io(i, ne);
  }
  return i.anchor && E(i.anchor);
}
const Qf = su;
function io(n, i) {
  const u = n.ctx;
  if (u && u.ut) {
    let c, f;
    for (i ? (c = n.el, f = n.anchor) : (c = n.targetStart, f = n.targetAnchor); c && c !== f; )
      c.nodeType === 1 && c.setAttribute("data-v-owner", u.uid), c = c.nextSibling;
    u.ut();
  }
}
function uu(n, i, u, c) {
  const f = i.targetStart = u(""), p = i.targetAnchor = u("");
  return f[au] = p, n && (c(f, n), c(p, n)), p;
}
function Wa(n, i) {
  n.shapeFlag & 6 && n.component ? (n.transition = i, Wa(n.component.subTree, i)) : n.shapeFlag & 128 ? (n.ssContent.transition = i.clone(n.ssContent), n.ssFallback.transition = i.clone(n.ssFallback)) : n.transition = i;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Jf(n, i) {
  return Ke(n) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ht({ name: n.name }, i, { setup: n })
  ) : n;
}
function cu(n) {
  n.ids = [n.ids[0] + n.ids[2]++ + "-", 0, 0];
}
function Zf(n) {
  const i = Fu(), u = pa(null);
  if (i) {
    const f = i.refs === tt ? i.refs = {} : i.refs;
    Object.defineProperty(f, n, {
      enumerable: !0,
      get: () => u.value,
      set: (p) => u.value = p
    });
  }
  return u;
}
function Li(n, i, u, c, f = !1) {
  if (Pe(n)) {
    n.forEach(
      (ue, he) => Li(
        ue,
        i && (Pe(i) ? i[he] : i),
        u,
        c,
        f
      )
    );
    return;
  }
  if (Qr(c) && !f) {
    c.shapeFlag & 512 && c.type.__asyncResolved && c.component.subTree.component && Li(n, i, u, c.component.subTree);
    return;
  }
  const p = c.shapeFlag & 4 ? Ao(c.component) : c.el, E = f ? null : p, { i: A, r: N } = n, F = i && i.r, D = A.refs === tt ? A.refs = {} : A.refs, M = A.setupState, X = Je(M), ne = M === tt ? () => !1 : (ue) => Ze(X, ue);
  if (F != null && F !== N && (Tt(F) ? (D[F] = null, ne(F) && (M[F] = null)) : bt(F) && (F.value = null)), Ke(N))
    Ji(N, A, 12, [E, D]);
  else {
    const ue = Tt(N), he = bt(N);
    if (ue || he) {
      const Me = () => {
        if (n.f) {
          const Oe = ue ? ne(N) ? M[N] : D[N] : N.value;
          f ? Pe(Oe) && ka(Oe, p) : Pe(Oe) ? Oe.includes(p) || Oe.push(p) : ue ? (D[N] = [p], ne(N) && (M[N] = D[N])) : (N.value = [p], n.k && (D[n.k] = N.value));
        } else ue ? (D[N] = E, ne(N) && (M[N] = E)) : he && (N.value = E, n.k && (D[n.k] = E));
      };
      E ? (Me.id = -1, Ut(Me, u)) : Me();
    }
  }
}
vo().requestIdleCallback;
vo().cancelIdleCallback;
const Qr = (n) => !!n.type.__asyncLoader, lu = (n) => n.type.__isKeepAlive;
function qc(n, i) {
  fu(n, "a", i);
}
function Lc(n, i) {
  fu(n, "da", i);
}
function fu(n, i, u = xt) {
  const c = n.__wdc || (n.__wdc = () => {
    let f = u;
    for (; f; ) {
      if (f.isDeactivated)
        return;
      f = f.parent;
    }
    return n();
  });
  if (To(i, c, u), u) {
    let f = u.parent;
    for (; f && f.parent; )
      lu(f.parent.vnode) && Uc(c, i, u, f), f = f.parent;
  }
}
function Uc(n, i, u, c) {
  const f = To(
    i,
    n,
    c,
    !0
    /* prepend */
  );
  hu(() => {
    ka(c[i], f);
  }, u);
}
function To(n, i, u = xt, c = !1) {
  if (u) {
    const f = u[n] || (u[n] = []), p = i.__weh || (i.__weh = (...E) => {
      Zn();
      const A = Zi(u), N = tr(i, u, n, E);
      return A(), er(), N;
    });
    return c ? f.unshift(p) : f.push(p), p;
  }
}
const rr = (n) => (i, u = xt) => {
  (!Xi || n === "sp") && To(n, (...c) => i(...c), u);
}, Vc = rr("bm"), $c = rr("m"), Wc = rr(
  "bu"
), Hc = rr("u"), Gc = rr(
  "bum"
), hu = rr("um"), Yc = rr(
  "sp"
), Xc = rr("rtg"), zc = rr("rtc");
function Qc(n, i = xt) {
  To("ec", n, i);
}
const du = "components";
function eh(n, i) {
  return yu(du, n, !0, i) || n;
}
const pu = Symbol.for("v-ndc");
function th(n) {
  return Tt(n) ? yu(du, n, !1) || n : n || pu;
}
function yu(n, i, u = !0, c = !1) {
  const f = gt || xt;
  if (f) {
    const p = f.type;
    {
      const A = Fl(
        p,
        !1
      );
      if (A && (A === i || A === En(i) || A === Da(En(i))))
        return p;
    }
    const E = (
      // local registration
      // check instance[type] first which is resolved for options API
      ss(f[n] || p[n], i) || // global registration
      ss(f.appContext[n], i)
    );
    return !E && c ? p : E;
  }
}
function ss(n, i) {
  return n && (n[i] || n[En(i)] || n[Da(En(i))]);
}
function nh(n, i, u, c) {
  let f;
  const p = u && u[c], E = Pe(n);
  if (E || Tt(n)) {
    const A = E && Xr(n);
    let N = !1, F = !1;
    A && (N = !an(n), F = sr(n), n = wo(n)), f = new Array(n.length);
    for (let D = 0, M = n.length; D < M; D++)
      f[D] = i(
        N ? F ? co(It(n[D])) : It(n[D]) : n[D],
        D,
        void 0,
        p && p[D]
      );
  } else if (typeof n == "number") {
    f = new Array(n);
    for (let A = 0; A < n; A++)
      f[A] = i(A + 1, A, void 0, p && p[A]);
  } else if (rt(n))
    if (n[Symbol.iterator])
      f = Array.from(
        n,
        (A, N) => i(A, N, void 0, p && p[N])
      );
    else {
      const A = Object.keys(n);
      f = new Array(A.length);
      for (let N = 0, F = A.length; N < F; N++) {
        const D = A[N];
        f[N] = i(n[D], D, N, p && p[N]);
      }
    }
  else
    f = [];
  return u && (u[c] = f), f;
}
function rh(n, i, u = {}, c, f) {
  if (gt.ce || gt.parent && Qr(gt.parent) && gt.parent.ce)
    return i !== "default" && (u.name = i), _a(), wa(
      on,
      null,
      [Xt("slot", u, c && c())],
      64
    );
  let p = n[i];
  p && p._c && (p._d = !1), _a();
  const E = p && mu(p(u)), A = u.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  E && E.key, N = wa(
    on,
    {
      key: (A && !Tn(A) ? A : `_${i}`) + // #7256 force differentiate fallback content from actual content
      (!E && c ? "_fb" : "")
    },
    E || (c ? c() : []),
    E && n._ === 1 ? 64 : -2
  );
  return N.scopeId && (N.slotScopeIds = [N.scopeId + "-s"]), p && p._c && (p._d = !0), N;
}
function mu(n) {
  return n.some((i) => Yi(i) ? !(i.type === nr || i.type === on && !mu(i.children)) : !0) ? n : null;
}
const ma = (n) => n ? Bu(n) ? Ao(n) : ma(n.parent) : null, Ui = (
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
    $parent: (n) => ma(n.parent),
    $root: (n) => ma(n.root),
    $host: (n) => n.ce,
    $emit: (n) => n.emit,
    $options: (n) => bu(n),
    $forceUpdate: (n) => n.f || (n.f = () => {
      $a(n.update);
    }),
    $nextTick: (n) => n.n || (n.n = Rc.bind(n.proxy)),
    $watch: (n) => gl.bind(n)
  })
), oa = (n, i) => n !== tt && !n.__isScriptSetup && Ze(n, i), Jc = {
  get({ _: n }, i) {
    if (i === "__v_skip")
      return !0;
    const { ctx: u, setupState: c, data: f, props: p, accessCache: E, type: A, appContext: N } = n;
    let F;
    if (i[0] !== "$") {
      const ne = E[i];
      if (ne !== void 0)
        switch (ne) {
          case 1:
            return c[i];
          case 2:
            return f[i];
          case 4:
            return u[i];
          case 3:
            return p[i];
        }
      else {
        if (oa(c, i))
          return E[i] = 1, c[i];
        if (f !== tt && Ze(f, i))
          return E[i] = 2, f[i];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (F = n.propsOptions[0]) && Ze(F, i)
        )
          return E[i] = 3, p[i];
        if (u !== tt && Ze(u, i))
          return E[i] = 4, u[i];
        va && (E[i] = 0);
      }
    }
    const D = Ui[i];
    let M, X;
    if (D)
      return i === "$attrs" && Nt(n.attrs, "get", ""), D(n);
    if (
      // css module (injected by vue-loader)
      (M = A.__cssModules) && (M = M[i])
    )
      return M;
    if (u !== tt && Ze(u, i))
      return E[i] = 4, u[i];
    if (
      // global properties
      X = N.config.globalProperties, Ze(X, i)
    )
      return X[i];
  },
  set({ _: n }, i, u) {
    const { data: c, setupState: f, ctx: p } = n;
    return oa(f, i) ? (f[i] = u, !0) : c !== tt && Ze(c, i) ? (c[i] = u, !0) : Ze(n.props, i) || i[0] === "$" && i.slice(1) in n ? !1 : (p[i] = u, !0);
  },
  has({
    _: { data: n, setupState: i, accessCache: u, ctx: c, appContext: f, propsOptions: p }
  }, E) {
    let A;
    return !!u[E] || n !== tt && Ze(n, E) || oa(i, E) || (A = p[0]) && Ze(A, E) || Ze(c, E) || Ze(Ui, E) || Ze(f.config.globalProperties, E);
  },
  defineProperty(n, i, u) {
    return u.get != null ? n._.accessCache[i] = 0 : Ze(u, "value") && this.set(n, i, u.value, null), Reflect.defineProperty(n, i, u);
  }
};
function ih() {
  return vu().slots;
}
function oh() {
  return vu().attrs;
}
function vu() {
  const n = Fu();
  return n.setupContext || (n.setupContext = qu(n));
}
function us(n) {
  return Pe(n) ? n.reduce(
    (i, u) => (i[u] = null, i),
    {}
  ) : n;
}
function ah(n, i) {
  const u = {};
  for (const c in n)
    i.includes(c) || Object.defineProperty(u, c, {
      enumerable: !0,
      get: () => n[c]
    });
  return u;
}
let va = !0;
function Zc(n) {
  const i = bu(n), u = n.proxy, c = n.ctx;
  va = !1, i.beforeCreate && cs(i.beforeCreate, n, "bc");
  const {
    // state
    data: f,
    computed: p,
    methods: E,
    watch: A,
    provide: N,
    inject: F,
    // lifecycle
    created: D,
    beforeMount: M,
    mounted: X,
    beforeUpdate: ne,
    updated: ue,
    activated: he,
    deactivated: Me,
    beforeDestroy: Oe,
    beforeUnmount: ke,
    destroyed: Le,
    unmounted: de,
    render: qe,
    renderTracked: Ce,
    renderTriggered: J,
    errorCaptured: re,
    serverPrefetch: j,
    // public API
    expose: we,
    inheritAttrs: Se,
    // assets
    components: ve,
    directives: je,
    filters: lt
  } = i;
  if (F && el(F, c, null), E)
    for (const _e in E) {
      const Ne = E[_e];
      Ke(Ne) && (c[_e] = Ne.bind(u));
    }
  if (f) {
    const _e = f.call(u, u);
    rt(_e) && (n.data = Ma(_e));
  }
  if (va = !0, p)
    for (const _e in p) {
      const Ne = p[_e], st = Ke(Ne) ? Ne.bind(u, u) : Ke(Ne.get) ? Ne.get.bind(u, u) : xn, et = !Ke(Ne) && Ke(Ne.set) ? Ne.set.bind(u) : xn, ct = Qa({
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
  if (A)
    for (const _e in A)
      gu(A[_e], c, u, _e);
  if (N) {
    const _e = Ke(N) ? N.call(u) : N;
    Reflect.ownKeys(_e).forEach((Ne) => {
      al(Ne, _e[Ne]);
    });
  }
  D && cs(D, n, "c");
  function Ye(_e, Ne) {
    Pe(Ne) ? Ne.forEach((st) => _e(st.bind(u))) : Ne && _e(Ne.bind(u));
  }
  if (Ye(Vc, M), Ye($c, X), Ye(Wc, ne), Ye(Hc, ue), Ye(qc, he), Ye(Lc, Me), Ye(Qc, re), Ye(zc, Ce), Ye(Xc, J), Ye(Gc, ke), Ye(hu, de), Ye(Yc, j), Pe(we))
    if (we.length) {
      const _e = n.exposed || (n.exposed = {});
      we.forEach((Ne) => {
        Object.defineProperty(_e, Ne, {
          get: () => u[Ne],
          set: (st) => u[Ne] = st
        });
      });
    } else n.exposed || (n.exposed = {});
  qe && n.render === xn && (n.render = qe), Se != null && (n.inheritAttrs = Se), ve && (n.components = ve), je && (n.directives = je), j && cu(n);
}
function el(n, i, u = xn) {
  Pe(n) && (n = ga(n));
  for (const c in n) {
    const f = n[c];
    let p;
    rt(f) ? "default" in f ? p = oo(
      f.from || c,
      f.default,
      !0
    ) : p = oo(f.from || c) : p = oo(f), bt(p) ? Object.defineProperty(i, c, {
      enumerable: !0,
      configurable: !0,
      get: () => p.value,
      set: (E) => p.value = E
    }) : i[c] = p;
  }
}
function cs(n, i, u) {
  tr(
    Pe(n) ? n.map((c) => c.bind(i.proxy)) : n.bind(i.proxy),
    i,
    u
  );
}
function gu(n, i, u, c) {
  let f = c.includes(".") ? ku(u, c) : () => u[c];
  if (Tt(n)) {
    const p = i[n];
    Ke(p) && sa(f, p);
  } else if (Ke(n))
    sa(f, n.bind(u));
  else if (rt(n))
    if (Pe(n))
      n.forEach((p) => gu(p, i, u, c));
    else {
      const p = Ke(n.handler) ? n.handler.bind(u) : i[n.handler];
      Ke(p) && sa(f, p, n);
    }
}
function bu(n) {
  const i = n.type, { mixins: u, extends: c } = i, {
    mixins: f,
    optionsCache: p,
    config: { optionMergeStrategies: E }
  } = n.appContext, A = p.get(i);
  let N;
  return A ? N = A : !f.length && !u && !c ? N = i : (N = {}, f.length && f.forEach(
    (F) => po(N, F, E, !0)
  ), po(N, i, E)), rt(i) && p.set(i, N), N;
}
function po(n, i, u, c = !1) {
  const { mixins: f, extends: p } = i;
  p && po(n, p, u, !0), f && f.forEach(
    (E) => po(n, E, u, !0)
  );
  for (const E in i)
    if (!(c && E === "expose")) {
      const A = tl[E] || u && u[E];
      n[E] = A ? A(n[E], i[E]) : i[E];
    }
  return n;
}
const tl = {
  data: ls,
  props: fs,
  emits: fs,
  // objects
  methods: ji,
  computed: ji,
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
  components: ji,
  directives: ji,
  // watch
  watch: rl,
  // provide / inject
  provide: ls,
  inject: nl
};
function ls(n, i) {
  return i ? n ? function() {
    return Ht(
      Ke(n) ? n.call(this, this) : n,
      Ke(i) ? i.call(this, this) : i
    );
  } : i : n;
}
function nl(n, i) {
  return ji(ga(n), ga(i));
}
function ga(n) {
  if (Pe(n)) {
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
function ji(n, i) {
  return n ? Ht(/* @__PURE__ */ Object.create(null), n, i) : i;
}
function fs(n, i) {
  return n ? Pe(n) && Pe(i) ? [.../* @__PURE__ */ new Set([...n, ...i])] : Ht(
    /* @__PURE__ */ Object.create(null),
    us(n),
    us(i ?? {})
  ) : i;
}
function rl(n, i) {
  if (!n) return i;
  if (!i) return n;
  const u = Ht(/* @__PURE__ */ Object.create(null), n);
  for (const c in i)
    u[c] = Lt(n[c], i[c]);
  return u;
}
function _u() {
  return {
    app: null,
    config: {
      isNativeTag: Vu,
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
let il = 0;
function ol(n, i) {
  return function(c, f = null) {
    Ke(c) || (c = Ht({}, c)), f != null && !rt(f) && (f = null);
    const p = _u(), E = /* @__PURE__ */ new WeakSet(), A = [];
    let N = !1;
    const F = p.app = {
      _uid: il++,
      _component: c,
      _props: f,
      _container: null,
      _context: p,
      _instance: null,
      version: Ml,
      get config() {
        return p.config;
      },
      set config(D) {
      },
      use(D, ...M) {
        return E.has(D) || (D && Ke(D.install) ? (E.add(D), D.install(F, ...M)) : Ke(D) && (E.add(D), D(F, ...M))), F;
      },
      mixin(D) {
        return p.mixins.includes(D) || p.mixins.push(D), F;
      },
      component(D, M) {
        return M ? (p.components[D] = M, F) : p.components[D];
      },
      directive(D, M) {
        return M ? (p.directives[D] = M, F) : p.directives[D];
      },
      mount(D, M, X) {
        if (!N) {
          const ne = F._ceVNode || Xt(c, f);
          return ne.appContext = p, X === !0 ? X = "svg" : X === !1 && (X = void 0), n(ne, D, X), N = !0, F._container = D, D.__vue_app__ = F, Ao(ne.component);
        }
      },
      onUnmount(D) {
        A.push(D);
      },
      unmount() {
        N && (tr(
          A,
          F._instance,
          16
        ), n(null, F._container), delete F._container.__vue_app__);
      },
      provide(D, M) {
        return p.provides[D] = M, F;
      },
      runWithContext(D) {
        const M = Vr;
        Vr = F;
        try {
          return D();
        } finally {
          Vr = M;
        }
      }
    };
    return F;
  };
}
let Vr = null;
function al(n, i) {
  if (xt) {
    let u = xt.provides;
    const c = xt.parent && xt.parent.provides;
    c === u && (u = xt.provides = Object.create(c)), u[n] = i;
  }
}
function oo(n, i, u = !1) {
  const c = xt || gt;
  if (c || Vr) {
    let f = Vr ? Vr._context.provides : c ? c.parent == null || c.ce ? c.vnode.appContext && c.vnode.appContext.provides : c.parent.provides : void 0;
    if (f && n in f)
      return f[n];
    if (arguments.length > 1)
      return u && Ke(i) ? i.call(c && c.proxy) : i;
  }
}
function sh() {
  return !!(xt || gt || Vr);
}
const wu = {}, xu = () => Object.create(wu), Tu = (n) => Object.getPrototypeOf(n) === wu;
function sl(n, i, u, c = !1) {
  const f = {}, p = xu();
  n.propsDefaults = /* @__PURE__ */ Object.create(null), Eu(n, i, f, p);
  for (const E in n.propsOptions[0])
    E in f || (f[E] = void 0);
  u ? n.props = c ? f : xc(f) : n.type.props ? n.props = f : n.props = p, n.attrs = p;
}
function ul(n, i, u, c) {
  const {
    props: f,
    attrs: p,
    vnode: { patchFlag: E }
  } = n, A = Je(f), [N] = n.propsOptions;
  let F = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (c || E > 0) && !(E & 16)
  ) {
    if (E & 8) {
      const D = n.vnode.dynamicProps;
      for (let M = 0; M < D.length; M++) {
        let X = D[M];
        if (Eo(n.emitsOptions, X))
          continue;
        const ne = i[X];
        if (N)
          if (Ze(p, X))
            ne !== p[X] && (p[X] = ne, F = !0);
          else {
            const ue = En(X);
            f[ue] = ba(
              N,
              A,
              ue,
              ne,
              n,
              !1
            );
          }
        else
          ne !== p[X] && (p[X] = ne, F = !0);
      }
    }
  } else {
    Eu(n, i, f, p) && (F = !0);
    let D;
    for (const M in A)
      (!i || // for camelCase
      !Ze(i, M) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((D = Qi(M)) === M || !Ze(i, D))) && (N ? u && // for camelCase
      (u[M] !== void 0 || // for kebab-case
      u[D] !== void 0) && (f[M] = ba(
        N,
        A,
        M,
        void 0,
        n,
        !0
      )) : delete f[M]);
    if (p !== A)
      for (const M in p)
        (!i || !Ze(i, M)) && (delete p[M], F = !0);
  }
  F && zn(n.attrs, "set", "");
}
function Eu(n, i, u, c) {
  const [f, p] = n.propsOptions;
  let E = !1, A;
  if (i)
    for (let N in i) {
      if (Fi(N))
        continue;
      const F = i[N];
      let D;
      f && Ze(f, D = En(N)) ? !p || !p.includes(D) ? u[D] = F : (A || (A = {}))[D] = F : Eo(n.emitsOptions, N) || (!(N in c) || F !== c[N]) && (c[N] = F, E = !0);
    }
  if (p) {
    const N = Je(u), F = A || tt;
    for (let D = 0; D < p.length; D++) {
      const M = p[D];
      u[M] = ba(
        f,
        N,
        M,
        F[M],
        n,
        !Ze(F, M)
      );
    }
  }
  return E;
}
function ba(n, i, u, c, f, p) {
  const E = n[u];
  if (E != null) {
    const A = Ze(E, "default");
    if (A && c === void 0) {
      const N = E.default;
      if (E.type !== Function && !E.skipFactory && Ke(N)) {
        const { propsDefaults: F } = f;
        if (u in F)
          c = F[u];
        else {
          const D = Zi(f);
          c = F[u] = N.call(
            null,
            i
          ), D();
        }
      } else
        c = N;
      f.ce && f.ce._setProp(u, c);
    }
    E[
      0
      /* shouldCast */
    ] && (p && !A ? c = !1 : E[
      1
      /* shouldCastTrue */
    ] && (c === "" || c === Qi(u)) && (c = !0));
  }
  return c;
}
const cl = /* @__PURE__ */ new WeakMap();
function Ou(n, i, u = !1) {
  const c = u ? cl : i.propsCache, f = c.get(n);
  if (f)
    return f;
  const p = n.props, E = {}, A = [];
  let N = !1;
  if (!Ke(n)) {
    const D = (M) => {
      N = !0;
      const [X, ne] = Ou(M, i, !0);
      Ht(E, X), ne && A.push(...ne);
    };
    !u && i.mixins.length && i.mixins.forEach(D), n.extends && D(n.extends), n.mixins && n.mixins.forEach(D);
  }
  if (!p && !N)
    return rt(n) && c.set(n, Gr), Gr;
  if (Pe(p))
    for (let D = 0; D < p.length; D++) {
      const M = En(p[D]);
      hs(M) && (E[M] = tt);
    }
  else if (p)
    for (const D in p) {
      const M = En(D);
      if (hs(M)) {
        const X = p[D], ne = E[M] = Pe(X) || Ke(X) ? { type: X } : Ht({}, X), ue = ne.type;
        let he = !1, Me = !0;
        if (Pe(ue))
          for (let Oe = 0; Oe < ue.length; ++Oe) {
            const ke = ue[Oe], Le = Ke(ke) && ke.name;
            if (Le === "Boolean") {
              he = !0;
              break;
            } else Le === "String" && (Me = !1);
          }
        else
          he = Ke(ue) && ue.name === "Boolean";
        ne[
          0
          /* shouldCast */
        ] = he, ne[
          1
          /* shouldCastTrue */
        ] = Me, (he || Ze(ne, "default")) && A.push(M);
      }
    }
  const F = [E, A];
  return rt(n) && c.set(n, F), F;
}
function hs(n) {
  return n[0] !== "$" && !Fi(n);
}
const Ha = (n) => n[0] === "_" || n === "$stable", Ga = (n) => Pe(n) ? n.map(wn) : [wn(n)], ll = (n, i, u) => {
  if (i._n)
    return i;
  const c = Fc((...f) => Ga(i(...f)), u);
  return c._c = !1, c;
}, Au = (n, i, u) => {
  const c = n._ctx;
  for (const f in n) {
    if (Ha(f)) continue;
    const p = n[f];
    if (Ke(p))
      i[f] = ll(f, p, c);
    else if (p != null) {
      const E = Ga(p);
      i[f] = () => E;
    }
  }
}, Su = (n, i) => {
  const u = Ga(i);
  n.slots.default = () => u;
}, Pu = (n, i, u) => {
  for (const c in i)
    (u || !Ha(c)) && (n[c] = i[c]);
}, fl = (n, i, u) => {
  const c = n.slots = xu();
  if (n.vnode.shapeFlag & 32) {
    const f = i.__;
    f && la(c, "__", f, !0);
    const p = i._;
    p ? (Pu(c, i, u), u && la(c, "_", p, !0)) : Au(i, c);
  } else i && Su(n, i);
}, hl = (n, i, u) => {
  const { vnode: c, slots: f } = n;
  let p = !0, E = tt;
  if (c.shapeFlag & 32) {
    const A = i._;
    A ? u && A === 1 ? p = !1 : Pu(f, i, u) : (p = !i.$stable, Au(i, f)), E = i;
  } else i && (Su(n, i), E = { default: 1 });
  if (p)
    for (const A in f)
      !Ha(A) && E[A] == null && delete f[A];
}, Ut = Ol;
function uh(n) {
  return dl(n);
}
function dl(n, i) {
  const u = vo();
  u.__VUE__ = !0;
  const {
    insert: c,
    remove: f,
    patchProp: p,
    createElement: E,
    createText: A,
    createComment: N,
    setText: F,
    setElementText: D,
    parentNode: M,
    nextSibling: X,
    setScopeId: ne = xn,
    insertStaticContent: ue
  } = n, he = (S, K, Y, Q = null, te = null, Z = null, se = void 0, le = null, ie = !!K.dynamicChildren) => {
    if (S === K)
      return;
    S && !Ki(S, K) && (Q = P(S), _t(S, te, Z, !0), S = null), K.patchFlag === -2 && (ie = !1, K.dynamicChildren = null);
    const { type: ee, ref: ge, shapeFlag: fe } = K;
    switch (ee) {
      case Oo:
        Me(S, K, Y, Q);
        break;
      case nr:
        Oe(S, K, Y, Q);
        break;
      case ua:
        S == null && ke(K, Y, Q, se);
        break;
      case on:
        ve(
          S,
          K,
          Y,
          Q,
          te,
          Z,
          se,
          le,
          ie
        );
        break;
      default:
        fe & 1 ? qe(
          S,
          K,
          Y,
          Q,
          te,
          Z,
          se,
          le,
          ie
        ) : fe & 6 ? je(
          S,
          K,
          Y,
          Q,
          te,
          Z,
          se,
          le,
          ie
        ) : (fe & 64 || fe & 128) && ee.process(
          S,
          K,
          Y,
          Q,
          te,
          Z,
          se,
          le,
          ie,
          L
        );
    }
    ge != null && te ? Li(ge, S && S.ref, Z, K || S, !K) : ge == null && S && S.ref != null && Li(S.ref, null, Z, S, !0);
  }, Me = (S, K, Y, Q) => {
    if (S == null)
      c(
        K.el = A(K.children),
        Y,
        Q
      );
    else {
      const te = K.el = S.el;
      K.children !== S.children && F(te, K.children);
    }
  }, Oe = (S, K, Y, Q) => {
    S == null ? c(
      K.el = N(K.children || ""),
      Y,
      Q
    ) : K.el = S.el;
  }, ke = (S, K, Y, Q) => {
    [S.el, S.anchor] = ue(
      S.children,
      K,
      Y,
      Q,
      S.el,
      S.anchor
    );
  }, Le = ({ el: S, anchor: K }, Y, Q) => {
    let te;
    for (; S && S !== K; )
      te = X(S), c(S, Y, Q), S = te;
    c(K, Y, Q);
  }, de = ({ el: S, anchor: K }) => {
    let Y;
    for (; S && S !== K; )
      Y = X(S), f(S), S = Y;
    f(K);
  }, qe = (S, K, Y, Q, te, Z, se, le, ie) => {
    K.type === "svg" ? se = "svg" : K.type === "math" && (se = "mathml"), S == null ? Ce(
      K,
      Y,
      Q,
      te,
      Z,
      se,
      le,
      ie
    ) : j(
      S,
      K,
      te,
      Z,
      se,
      le,
      ie
    );
  }, Ce = (S, K, Y, Q, te, Z, se, le) => {
    let ie, ee;
    const { props: ge, shapeFlag: fe, transition: be, dirs: xe } = S;
    if (ie = S.el = E(
      S.type,
      Z,
      ge && ge.is,
      ge
    ), fe & 8 ? D(ie, S.children) : fe & 16 && re(
      S.children,
      ie,
      null,
      Q,
      te,
      aa(S, Z),
      se,
      le
    ), xe && Mr(S, null, Q, "created"), J(ie, S, S.scopeId, se, Q), ge) {
      for (const Fe in ge)
        Fe !== "value" && !Fi(Fe) && p(ie, Fe, null, ge[Fe], Z, Q);
      "value" in ge && p(ie, "value", null, ge.value, Z), (ee = ge.onVnodeBeforeMount) && bn(ee, Q, S);
    }
    xe && Mr(S, null, Q, "beforeMount");
    const Ee = pl(te, be);
    Ee && be.beforeEnter(ie), c(ie, K, Y), ((ee = ge && ge.onVnodeMounted) || Ee || xe) && Ut(() => {
      ee && bn(ee, Q, S), Ee && be.enter(ie), xe && Mr(S, null, Q, "mounted");
    }, te);
  }, J = (S, K, Y, Q, te) => {
    if (Y && ne(S, Y), Q)
      for (let Z = 0; Z < Q.length; Z++)
        ne(S, Q[Z]);
    if (te) {
      let Z = te.subTree;
      if (K === Z || Du(Z.type) && (Z.ssContent === K || Z.ssFallback === K)) {
        const se = te.vnode;
        J(
          S,
          se,
          se.scopeId,
          se.slotScopeIds,
          te.parent
        );
      }
    }
  }, re = (S, K, Y, Q, te, Z, se, le, ie = 0) => {
    for (let ee = ie; ee < S.length; ee++) {
      const ge = S[ee] = le ? or(S[ee]) : wn(S[ee]);
      he(
        null,
        ge,
        K,
        Y,
        Q,
        te,
        Z,
        se,
        le
      );
    }
  }, j = (S, K, Y, Q, te, Z, se) => {
    const le = K.el = S.el;
    let { patchFlag: ie, dynamicChildren: ee, dirs: ge } = K;
    ie |= S.patchFlag & 16;
    const fe = S.props || tt, be = K.props || tt;
    let xe;
    if (Y && qr(Y, !1), (xe = be.onVnodeBeforeUpdate) && bn(xe, Y, K, S), ge && Mr(K, S, Y, "beforeUpdate"), Y && qr(Y, !0), (fe.innerHTML && be.innerHTML == null || fe.textContent && be.textContent == null) && D(le, ""), ee ? we(
      S.dynamicChildren,
      ee,
      le,
      Y,
      Q,
      aa(K, te),
      Z
    ) : se || Ne(
      S,
      K,
      le,
      null,
      Y,
      Q,
      aa(K, te),
      Z,
      !1
    ), ie > 0) {
      if (ie & 16)
        Se(le, fe, be, Y, te);
      else if (ie & 2 && fe.class !== be.class && p(le, "class", null, be.class, te), ie & 4 && p(le, "style", fe.style, be.style, te), ie & 8) {
        const Ee = K.dynamicProps;
        for (let Fe = 0; Fe < Ee.length; Fe++) {
          const Ue = Ee[Fe], it = fe[Ue], ft = be[Ue];
          (ft !== it || Ue === "value") && p(le, Ue, it, ft, te, Y);
        }
      }
      ie & 1 && S.children !== K.children && D(le, K.children);
    } else !se && ee == null && Se(le, fe, be, Y, te);
    ((xe = be.onVnodeUpdated) || ge) && Ut(() => {
      xe && bn(xe, Y, K, S), ge && Mr(K, S, Y, "updated");
    }, Q);
  }, we = (S, K, Y, Q, te, Z, se) => {
    for (let le = 0; le < K.length; le++) {
      const ie = S[le], ee = K[le], ge = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ie.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ie.type === on || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ki(ie, ee) || // - In the case of a component, it could contain anything.
        ie.shapeFlag & 198) ? M(ie.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Y
        )
      );
      he(
        ie,
        ee,
        ge,
        null,
        Q,
        te,
        Z,
        se,
        !0
      );
    }
  }, Se = (S, K, Y, Q, te) => {
    if (K !== Y) {
      if (K !== tt)
        for (const Z in K)
          !Fi(Z) && !(Z in Y) && p(
            S,
            Z,
            K[Z],
            null,
            te,
            Q
          );
      for (const Z in Y) {
        if (Fi(Z)) continue;
        const se = Y[Z], le = K[Z];
        se !== le && Z !== "value" && p(S, Z, le, se, te, Q);
      }
      "value" in Y && p(S, "value", K.value, Y.value, te);
    }
  }, ve = (S, K, Y, Q, te, Z, se, le, ie) => {
    const ee = K.el = S ? S.el : A(""), ge = K.anchor = S ? S.anchor : A("");
    let { patchFlag: fe, dynamicChildren: be, slotScopeIds: xe } = K;
    xe && (le = le ? le.concat(xe) : xe), S == null ? (c(ee, Y, Q), c(ge, Y, Q), re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      K.children || [],
      Y,
      ge,
      te,
      Z,
      se,
      le,
      ie
    )) : fe > 0 && fe & 64 && be && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    S.dynamicChildren ? (we(
      S.dynamicChildren,
      be,
      Y,
      te,
      Z,
      se,
      le
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (K.key != null || te && K === te.subTree) && Ya(
      S,
      K,
      !0
      /* shallow */
    )) : Ne(
      S,
      K,
      Y,
      ge,
      te,
      Z,
      se,
      le,
      ie
    );
  }, je = (S, K, Y, Q, te, Z, se, le, ie) => {
    K.slotScopeIds = le, S == null ? K.shapeFlag & 512 ? te.ctx.activate(
      K,
      Y,
      Q,
      se,
      ie
    ) : lt(
      K,
      Y,
      Q,
      te,
      Z,
      se,
      ie
    ) : Xe(S, K, ie);
  }, lt = (S, K, Y, Q, te, Z, se) => {
    const le = S.component = Dl(
      S,
      Q,
      te
    );
    if (lu(S) && (le.ctx.renderer = L), Rl(le, !1, se), le.asyncDep) {
      if (te && te.registerDep(le, Ye, se), !S.el) {
        const ie = le.subTree = Xt(nr);
        Oe(null, ie, K, Y);
      }
    } else
      Ye(
        le,
        S,
        K,
        Y,
        te,
        Z,
        se
      );
  }, Xe = (S, K, Y) => {
    const Q = K.component = S.component;
    if (Tl(S, K, Y))
      if (Q.asyncDep && !Q.asyncResolved) {
        _e(Q, K, Y);
        return;
      } else
        Q.next = K, Q.update();
    else
      K.el = S.el, Q.vnode = K;
  }, Ye = (S, K, Y, Q, te, Z, se) => {
    const le = () => {
      if (S.isMounted) {
        let { next: fe, bu: be, u: xe, parent: Ee, vnode: Fe } = S;
        {
          const ot = Cu(S);
          if (ot) {
            fe && (fe.el = Fe.el, _e(S, fe, se)), ot.asyncDep.then(() => {
              S.isUnmounted || le();
            });
            return;
          }
        }
        let Ue = fe, it;
        qr(S, !1), fe ? (fe.el = Fe.el, _e(S, fe, se)) : fe = Fe, be && ea(be), (it = fe.props && fe.props.onVnodeBeforeUpdate) && bn(it, Ee, fe, Fe), qr(S, !0);
        const ft = ps(S), yt = S.subTree;
        S.subTree = ft, he(
          yt,
          ft,
          // parent may have changed if it's in a teleport
          M(yt.el),
          // anchor may have changed if it's in a fragment
          P(yt),
          S,
          te,
          Z
        ), fe.el = ft.el, Ue === null && El(S, ft.el), xe && Ut(xe, te), (it = fe.props && fe.props.onVnodeUpdated) && Ut(
          () => bn(it, Ee, fe, Fe),
          te
        );
      } else {
        let fe;
        const { el: be, props: xe } = K, { bm: Ee, m: Fe, parent: Ue, root: it, type: ft } = S, yt = Qr(K);
        qr(S, !1), Ee && ea(Ee), !yt && (fe = xe && xe.onVnodeBeforeMount) && bn(fe, Ue, K), qr(S, !0);
        {
          it.ce && // @ts-expect-error _def is private
          it.ce._def.shadowRoot !== !1 && it.ce._injectChildStyle(ft);
          const ot = S.subTree = ps(S);
          he(
            null,
            ot,
            Y,
            Q,
            S,
            te,
            Z
          ), K.el = ot.el;
        }
        if (Fe && Ut(Fe, te), !yt && (fe = xe && xe.onVnodeMounted)) {
          const ot = K;
          Ut(
            () => bn(fe, Ue, ot),
            te
          );
        }
        (K.shapeFlag & 256 || Ue && Qr(Ue.vnode) && Ue.vnode.shapeFlag & 256) && S.a && Ut(S.a, te), S.isMounted = !0, K = Y = Q = null;
      }
    };
    S.scope.on();
    const ie = S.effect = new Fs(le);
    S.scope.off();
    const ee = S.update = ie.run.bind(ie), ge = S.job = ie.runIfDirty.bind(ie);
    ge.i = S, ge.id = S.uid, ie.scheduler = () => $a(ge), qr(S, !0), ee();
  }, _e = (S, K, Y) => {
    K.component = S;
    const Q = S.vnode.props;
    S.vnode = K, S.next = null, ul(S, K.props, Q, Y), hl(S, K.children, Y), Zn(), rs(S), er();
  }, Ne = (S, K, Y, Q, te, Z, se, le, ie = !1) => {
    const ee = S && S.children, ge = S ? S.shapeFlag : 0, fe = K.children, { patchFlag: be, shapeFlag: xe } = K;
    if (be > 0) {
      if (be & 128) {
        et(
          ee,
          fe,
          Y,
          Q,
          te,
          Z,
          se,
          le,
          ie
        );
        return;
      } else if (be & 256) {
        st(
          ee,
          fe,
          Y,
          Q,
          te,
          Z,
          se,
          le,
          ie
        );
        return;
      }
    }
    xe & 8 ? (ge & 16 && ht(ee, te, Z), fe !== ee && D(Y, fe)) : ge & 16 ? xe & 16 ? et(
      ee,
      fe,
      Y,
      Q,
      te,
      Z,
      se,
      le,
      ie
    ) : ht(ee, te, Z, !0) : (ge & 8 && D(Y, ""), xe & 16 && re(
      fe,
      Y,
      Q,
      te,
      Z,
      se,
      le,
      ie
    ));
  }, st = (S, K, Y, Q, te, Z, se, le, ie) => {
    S = S || Gr, K = K || Gr;
    const ee = S.length, ge = K.length, fe = Math.min(ee, ge);
    let be;
    for (be = 0; be < fe; be++) {
      const xe = K[be] = ie ? or(K[be]) : wn(K[be]);
      he(
        S[be],
        xe,
        Y,
        null,
        te,
        Z,
        se,
        le,
        ie
      );
    }
    ee > ge ? ht(
      S,
      te,
      Z,
      !0,
      !1,
      fe
    ) : re(
      K,
      Y,
      Q,
      te,
      Z,
      se,
      le,
      ie,
      fe
    );
  }, et = (S, K, Y, Q, te, Z, se, le, ie) => {
    let ee = 0;
    const ge = K.length;
    let fe = S.length - 1, be = ge - 1;
    for (; ee <= fe && ee <= be; ) {
      const xe = S[ee], Ee = K[ee] = ie ? or(K[ee]) : wn(K[ee]);
      if (Ki(xe, Ee))
        he(
          xe,
          Ee,
          Y,
          null,
          te,
          Z,
          se,
          le,
          ie
        );
      else
        break;
      ee++;
    }
    for (; ee <= fe && ee <= be; ) {
      const xe = S[fe], Ee = K[be] = ie ? or(K[be]) : wn(K[be]);
      if (Ki(xe, Ee))
        he(
          xe,
          Ee,
          Y,
          null,
          te,
          Z,
          se,
          le,
          ie
        );
      else
        break;
      fe--, be--;
    }
    if (ee > fe) {
      if (ee <= be) {
        const xe = be + 1, Ee = xe < ge ? K[xe].el : Q;
        for (; ee <= be; )
          he(
            null,
            K[ee] = ie ? or(K[ee]) : wn(K[ee]),
            Y,
            Ee,
            te,
            Z,
            se,
            le,
            ie
          ), ee++;
      }
    } else if (ee > be)
      for (; ee <= fe; )
        _t(S[ee], te, Z, !0), ee++;
    else {
      const xe = ee, Ee = ee, Fe = /* @__PURE__ */ new Map();
      for (ee = Ee; ee <= be; ee++) {
        const ze = K[ee] = ie ? or(K[ee]) : wn(K[ee]);
        ze.key != null && Fe.set(ze.key, ee);
      }
      let Ue, it = 0;
      const ft = be - Ee + 1;
      let yt = !1, ot = 0;
      const Dt = new Array(ft);
      for (ee = 0; ee < ft; ee++) Dt[ee] = 0;
      for (ee = xe; ee <= fe; ee++) {
        const ze = S[ee];
        if (it >= ft) {
          _t(ze, te, Z, !0);
          continue;
        }
        let z;
        if (ze.key != null)
          z = Fe.get(ze.key);
        else
          for (Ue = Ee; Ue <= be; Ue++)
            if (Dt[Ue - Ee] === 0 && Ki(ze, K[Ue])) {
              z = Ue;
              break;
            }
        z === void 0 ? _t(ze, te, Z, !0) : (Dt[z - Ee] = ee + 1, z >= ot ? ot = z : yt = !0, he(
          ze,
          K[z],
          Y,
          null,
          te,
          Z,
          se,
          le,
          ie
        ), it++);
      }
      const gn = yt ? yl(Dt) : Gr;
      for (Ue = gn.length - 1, ee = ft - 1; ee >= 0; ee--) {
        const ze = Ee + ee, z = K[ze], Yt = ze + 1 < ge ? K[ze + 1].el : Q;
        Dt[ee] === 0 ? he(
          null,
          z,
          Y,
          Yt,
          te,
          Z,
          se,
          le,
          ie
        ) : yt && (Ue < 0 || ee !== gn[Ue] ? ct(z, Y, Yt, 2) : Ue--);
      }
    }
  }, ct = (S, K, Y, Q, te = null) => {
    const { el: Z, type: se, transition: le, children: ie, shapeFlag: ee } = S;
    if (ee & 6) {
      ct(S.component.subTree, K, Y, Q);
      return;
    }
    if (ee & 128) {
      S.suspense.move(K, Y, Q);
      return;
    }
    if (ee & 64) {
      se.move(S, K, Y, L);
      return;
    }
    if (se === on) {
      c(Z, K, Y);
      for (let fe = 0; fe < ie.length; fe++)
        ct(ie[fe], K, Y, Q);
      c(S.anchor, K, Y);
      return;
    }
    if (se === ua) {
      Le(S, K, Y);
      return;
    }
    if (Q !== 2 && ee & 1 && le)
      if (Q === 0)
        le.beforeEnter(Z), c(Z, K, Y), Ut(() => le.enter(Z), te);
      else {
        const { leave: fe, delayLeave: be, afterLeave: xe } = le, Ee = () => {
          S.ctx.isUnmounted ? f(Z) : c(Z, K, Y);
        }, Fe = () => {
          fe(Z, () => {
            Ee(), xe && xe();
          });
        };
        be ? be(Z, Ee, Fe) : Fe();
      }
    else
      c(Z, K, Y);
  }, _t = (S, K, Y, Q = !1, te = !1) => {
    const {
      type: Z,
      props: se,
      ref: le,
      children: ie,
      dynamicChildren: ee,
      shapeFlag: ge,
      patchFlag: fe,
      dirs: be,
      cacheIndex: xe
    } = S;
    if (fe === -2 && (te = !1), le != null && (Zn(), Li(le, null, Y, S, !0), er()), xe != null && (K.renderCache[xe] = void 0), ge & 256) {
      K.ctx.deactivate(S);
      return;
    }
    const Ee = ge & 1 && be, Fe = !Qr(S);
    let Ue;
    if (Fe && (Ue = se && se.onVnodeBeforeUnmount) && bn(Ue, K, S), ge & 6)
      Gt(S.component, Y, Q);
    else {
      if (ge & 128) {
        S.suspense.unmount(Y, Q);
        return;
      }
      Ee && Mr(S, null, K, "beforeUnmount"), ge & 64 ? S.type.remove(
        S,
        K,
        Y,
        L,
        Q
      ) : ee && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ee.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Z !== on || fe > 0 && fe & 64) ? ht(
        ee,
        K,
        Y,
        !1,
        !0
      ) : (Z === on && fe & 384 || !te && ge & 16) && ht(ie, K, Y), Q && wt(S);
    }
    (Fe && (Ue = se && se.onVnodeUnmounted) || Ee) && Ut(() => {
      Ue && bn(Ue, K, S), Ee && Mr(S, null, K, "unmounted");
    }, Y);
  }, wt = (S) => {
    const { type: K, el: Y, anchor: Q, transition: te } = S;
    if (K === on) {
      vn(Y, Q);
      return;
    }
    if (K === ua) {
      de(S);
      return;
    }
    const Z = () => {
      f(Y), te && !te.persisted && te.afterLeave && te.afterLeave();
    };
    if (S.shapeFlag & 1 && te && !te.persisted) {
      const { leave: se, delayLeave: le } = te, ie = () => se(Y, Z);
      le ? le(S.el, Z, ie) : ie();
    } else
      Z();
  }, vn = (S, K) => {
    let Y;
    for (; S !== K; )
      Y = X(S), f(S), S = Y;
    f(K);
  }, Gt = (S, K, Y) => {
    const {
      bum: Q,
      scope: te,
      job: Z,
      subTree: se,
      um: le,
      m: ie,
      a: ee,
      parent: ge,
      slots: { __: fe }
    } = S;
    ds(ie), ds(ee), Q && ea(Q), ge && Pe(fe) && fe.forEach((be) => {
      ge.renderCache[be] = void 0;
    }), te.stop(), Z && (Z.flags |= 8, _t(se, S, K, Y)), le && Ut(le, K), Ut(() => {
      S.isUnmounted = !0;
    }, K), K && K.pendingBranch && !K.isUnmounted && S.asyncDep && !S.asyncResolved && S.suspenseId === K.pendingId && (K.deps--, K.deps === 0 && K.resolve());
  }, ht = (S, K, Y, Q = !1, te = !1, Z = 0) => {
    for (let se = Z; se < S.length; se++)
      _t(S[se], K, Y, Q, te);
  }, P = (S) => {
    if (S.shapeFlag & 6)
      return P(S.component.subTree);
    if (S.shapeFlag & 128)
      return S.suspense.next();
    const K = X(S.anchor || S.el), Y = K && K[au];
    return Y ? X(Y) : K;
  };
  let b = !1;
  const R = (S, K, Y) => {
    S == null ? K._vnode && _t(K._vnode, null, null, !0) : he(
      K._vnode || null,
      S,
      K,
      null,
      null,
      null,
      Y
    ), K._vnode = S, b || (b = !0, rs(), ru(), b = !1);
  }, L = {
    p: he,
    um: _t,
    m: ct,
    r: wt,
    mt: lt,
    mc: re,
    pc: Ne,
    pbc: we,
    n: P,
    o: n
  };
  return {
    render: R,
    hydrate: void 0,
    createApp: ol(R)
  };
}
function aa({ type: n, props: i }, u) {
  return u === "svg" && n === "foreignObject" || u === "mathml" && n === "annotation-xml" && i && i.encoding && i.encoding.includes("html") ? void 0 : u;
}
function qr({ effect: n, job: i }, u) {
  u ? (n.flags |= 32, i.flags |= 4) : (n.flags &= -33, i.flags &= -5);
}
function pl(n, i) {
  return (!n || n && !n.pendingBranch) && i && !i.persisted;
}
function Ya(n, i, u = !1) {
  const c = n.children, f = i.children;
  if (Pe(c) && Pe(f))
    for (let p = 0; p < c.length; p++) {
      const E = c[p];
      let A = f[p];
      A.shapeFlag & 1 && !A.dynamicChildren && ((A.patchFlag <= 0 || A.patchFlag === 32) && (A = f[p] = or(f[p]), A.el = E.el), !u && A.patchFlag !== -2 && Ya(E, A)), A.type === Oo && (A.el = E.el), A.type === nr && !A.el && (A.el = E.el);
    }
}
function yl(n) {
  const i = n.slice(), u = [0];
  let c, f, p, E, A;
  const N = n.length;
  for (c = 0; c < N; c++) {
    const F = n[c];
    if (F !== 0) {
      if (f = u[u.length - 1], n[f] < F) {
        i[c] = f, u.push(c);
        continue;
      }
      for (p = 0, E = u.length - 1; p < E; )
        A = p + E >> 1, n[u[A]] < F ? p = A + 1 : E = A;
      F < n[u[p]] && (p > 0 && (i[c] = u[p - 1]), u[p] = c);
    }
  }
  for (p = u.length, E = u[p - 1]; p-- > 0; )
    u[p] = E, E = i[E];
  return u;
}
function Cu(n) {
  const i = n.subTree.component;
  if (i)
    return i.asyncDep && !i.asyncResolved ? i : Cu(i);
}
function ds(n) {
  if (n)
    for (let i = 0; i < n.length; i++)
      n[i].flags |= 8;
}
const ml = Symbol.for("v-scx"), vl = () => oo(ml);
function Iu(n, i) {
  return Xa(n, null, i);
}
function sa(n, i, u) {
  return Xa(n, i, u);
}
function Xa(n, i, u = tt) {
  const { immediate: c, deep: f, flush: p, once: E } = u, A = Ht({}, u), N = i && c || !i && p !== "post";
  let F;
  if (Xi) {
    if (p === "sync") {
      const ne = vl();
      F = ne.__watcherHandles || (ne.__watcherHandles = []);
    } else if (!N) {
      const ne = () => {
      };
      return ne.stop = xn, ne.resume = xn, ne.pause = xn, ne;
    }
  }
  const D = xt;
  A.call = (ne, ue, he) => tr(ne, D, ue, he);
  let M = !1;
  p === "post" ? A.scheduler = (ne) => {
    Ut(ne, D && D.suspense);
  } : p !== "sync" && (M = !0, A.scheduler = (ne, ue) => {
    ue ? ne() : $a(ne);
  }), A.augmentJob = (ne) => {
    i && (ne.flags |= 4), M && (ne.flags |= 2, D && (ne.id = D.uid, ne.i = D));
  };
  const X = Nc(n, i, A);
  return Xi && (F ? F.push(X) : N && X()), X;
}
function gl(n, i, u) {
  const c = this.proxy, f = Tt(n) ? n.includes(".") ? ku(c, n) : () => c[n] : n.bind(c, c);
  let p;
  Ke(i) ? p = i : (p = i.handler, u = i);
  const E = Zi(this), A = Xa(f, p.bind(c), u);
  return E(), A;
}
function ku(n, i) {
  const u = i.split(".");
  return () => {
    let c = n;
    for (let f = 0; f < u.length && c; f++)
      c = c[u[f]];
    return c;
  };
}
const bl = (n, i) => i === "modelValue" || i === "model-value" ? n.modelModifiers : n[`${i}Modifiers`] || n[`${En(i)}Modifiers`] || n[`${Qi(i)}Modifiers`];
function _l(n, i, ...u) {
  if (n.isUnmounted) return;
  const c = n.vnode.props || tt;
  let f = u;
  const p = i.startsWith("update:"), E = p && bl(c, i.slice(7));
  E && (E.trim && (f = u.map((D) => Tt(D) ? D.trim() : D)), E.number && (f = u.map(Yu)));
  let A, N = c[A = Zo(i)] || // also try camelCase event handler (#2249)
  c[A = Zo(En(i))];
  !N && p && (N = c[A = Zo(Qi(i))]), N && tr(
    N,
    n,
    6,
    f
  );
  const F = c[A + "Once"];
  if (F) {
    if (!n.emitted)
      n.emitted = {};
    else if (n.emitted[A])
      return;
    n.emitted[A] = !0, tr(
      F,
      n,
      6,
      f
    );
  }
}
function Nu(n, i, u = !1) {
  const c = i.emitsCache, f = c.get(n);
  if (f !== void 0)
    return f;
  const p = n.emits;
  let E = {}, A = !1;
  if (!Ke(n)) {
    const N = (F) => {
      const D = Nu(F, i, !0);
      D && (A = !0, Ht(E, D));
    };
    !u && i.mixins.length && i.mixins.forEach(N), n.extends && N(n.extends), n.mixins && n.mixins.forEach(N);
  }
  return !p && !A ? (rt(n) && c.set(n, null), null) : (Pe(p) ? p.forEach((N) => E[N] = null) : Ht(E, p), rt(n) && c.set(n, E), E);
}
function Eo(n, i) {
  return !n || !Ia(i) ? !1 : (i = i.slice(2).replace(/Once$/, ""), Ze(n, i[0].toLowerCase() + i.slice(1)) || Ze(n, Qi(i)) || Ze(n, i));
}
function ps(n) {
  const {
    type: i,
    vnode: u,
    proxy: c,
    withProxy: f,
    propsOptions: [p],
    slots: E,
    attrs: A,
    emit: N,
    render: F,
    renderCache: D,
    props: M,
    data: X,
    setupState: ne,
    ctx: ue,
    inheritAttrs: he
  } = n, Me = ho(n);
  let Oe, ke;
  try {
    if (u.shapeFlag & 4) {
      const de = f || c, qe = de;
      Oe = wn(
        F.call(
          qe,
          de,
          D,
          M,
          ne,
          X,
          ue
        )
      ), ke = A;
    } else {
      const de = i;
      Oe = wn(
        de.length > 1 ? de(
          M,
          { attrs: A, slots: E, emit: N }
        ) : de(
          M,
          null
        )
      ), ke = i.props ? A : wl(A);
    }
  } catch (de) {
    Vi.length = 0, xo(de, n, 1), Oe = Xt(nr);
  }
  let Le = Oe;
  if (ke && he !== !1) {
    const de = Object.keys(ke), { shapeFlag: qe } = Le;
    de.length && qe & 7 && (p && de.some(Ps) && (ke = xl(
      ke,
      p
    )), Le = Zr(Le, ke, !1, !0));
  }
  return u.dirs && (Le = Zr(Le, null, !1, !0), Le.dirs = Le.dirs ? Le.dirs.concat(u.dirs) : u.dirs), u.transition && Wa(Le, u.transition), Oe = Le, ho(Me), Oe;
}
const wl = (n) => {
  let i;
  for (const u in n)
    (u === "class" || u === "style" || Ia(u)) && ((i || (i = {}))[u] = n[u]);
  return i;
}, xl = (n, i) => {
  const u = {};
  for (const c in n)
    (!Ps(c) || !(c.slice(9) in i)) && (u[c] = n[c]);
  return u;
};
function Tl(n, i, u) {
  const { props: c, children: f, component: p } = n, { props: E, children: A, patchFlag: N } = i, F = p.emitsOptions;
  if (i.dirs || i.transition)
    return !0;
  if (u && N >= 0) {
    if (N & 1024)
      return !0;
    if (N & 16)
      return c ? ys(c, E, F) : !!E;
    if (N & 8) {
      const D = i.dynamicProps;
      for (let M = 0; M < D.length; M++) {
        const X = D[M];
        if (E[X] !== c[X] && !Eo(F, X))
          return !0;
      }
    }
  } else
    return (f || A) && (!A || !A.$stable) ? !0 : c === E ? !1 : c ? E ? ys(c, E, F) : !0 : !!E;
  return !1;
}
function ys(n, i, u) {
  const c = Object.keys(i);
  if (c.length !== Object.keys(n).length)
    return !0;
  for (let f = 0; f < c.length; f++) {
    const p = c[f];
    if (i[p] !== n[p] && !Eo(u, p))
      return !0;
  }
  return !1;
}
function El({ vnode: n, parent: i }, u) {
  for (; i; ) {
    const c = i.subTree;
    if (c.suspense && c.suspense.activeBranch === n && (c.el = n.el), c === n)
      (n = i.vnode).el = u, i = i.parent;
    else
      break;
  }
}
const Du = (n) => n.__isSuspense;
function Ol(n, i) {
  i && i.pendingBranch ? Pe(n) ? i.effects.push(...n) : i.effects.push(n) : jc(n);
}
const on = Symbol.for("v-fgt"), Oo = Symbol.for("v-txt"), nr = Symbol.for("v-cmt"), ua = Symbol.for("v-stc"), Vi = [];
let Wt = null;
function _a(n = !1) {
  Vi.push(Wt = n ? null : []);
}
function Al() {
  Vi.pop(), Wt = Vi[Vi.length - 1] || null;
}
let Jr = 1;
function ms(n, i = !1) {
  Jr += n, n < 0 && Wt && i && (Wt.hasOnce = !0);
}
function Ru(n) {
  return n.dynamicChildren = Jr > 0 ? Wt || Gr : null, Al(), Jr > 0 && Wt && Wt.push(n), n;
}
function ch(n, i, u, c, f, p) {
  return Ru(
    ju(
      n,
      i,
      u,
      c,
      f,
      p,
      !0
    )
  );
}
function wa(n, i, u, c, f) {
  return Ru(
    Xt(
      n,
      i,
      u,
      c,
      f,
      !0
    )
  );
}
function Yi(n) {
  return n ? n.__v_isVNode === !0 : !1;
}
function Ki(n, i) {
  return n.type === i.type && n.key === i.key;
}
const Ku = ({ key: n }) => n ?? null, ao = ({
  ref: n,
  ref_key: i,
  ref_for: u
}) => (typeof n == "number" && (n = "" + n), n != null ? Tt(n) || bt(n) || Ke(n) ? { i: gt, r: n, k: i, f: !!u } : n : null);
function ju(n, i = null, u = null, c = 0, f = null, p = n === on ? 0 : 1, E = !1, A = !1) {
  const N = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n,
    props: i,
    key: i && Ku(i),
    ref: i && ao(i),
    scopeId: ou,
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
    dynamicProps: f,
    dynamicChildren: null,
    appContext: null,
    ctx: gt
  };
  return A ? (za(N, u), p & 128 && n.normalize(N)) : u && (N.shapeFlag |= Tt(u) ? 8 : 16), Jr > 0 && // avoid a block node from tracking itself
  !E && // has current parent block
  Wt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (N.patchFlag > 0 || p & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  N.patchFlag !== 32 && Wt.push(N), N;
}
const Xt = Sl;
function Sl(n, i = null, u = null, c = 0, f = null, p = !1) {
  if ((!n || n === pu) && (n = nr), Yi(n)) {
    const A = Zr(
      n,
      i,
      !0
      /* mergeRef: true */
    );
    return u && za(A, u), Jr > 0 && !p && Wt && (A.shapeFlag & 6 ? Wt[Wt.indexOf(n)] = A : Wt.push(A)), A.patchFlag = -2, A;
  }
  if (Bl(n) && (n = n.__vccOpts), i) {
    i = Pl(i);
    let { class: A, style: N } = i;
    A && !Tt(A) && (i.class = bo(A)), rt(N) && (Ua(N) && !Pe(N) && (N = Ht({}, N)), i.style = go(N));
  }
  const E = Tt(n) ? 1 : Du(n) ? 128 : Bc(n) ? 64 : rt(n) ? 4 : Ke(n) ? 2 : 0;
  return ju(
    n,
    i,
    u,
    c,
    f,
    E,
    p,
    !0
  );
}
function Pl(n) {
  return n ? Ua(n) || Tu(n) ? Ht({}, n) : n : null;
}
function Zr(n, i, u = !1, c = !1) {
  const { props: f, ref: p, patchFlag: E, children: A, transition: N } = n, F = i ? Il(f || {}, i) : f, D = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n.type,
    props: F,
    key: F && Ku(F),
    ref: i && i.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      u && p ? Pe(p) ? p.concat(ao(i)) : [p, ao(i)] : ao(i)
    ) : p,
    scopeId: n.scopeId,
    slotScopeIds: n.slotScopeIds,
    children: A,
    target: n.target,
    targetStart: n.targetStart,
    targetAnchor: n.targetAnchor,
    staticCount: n.staticCount,
    shapeFlag: n.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: i && n.type !== on ? E === -1 ? 16 : E | 16 : E,
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
    ssContent: n.ssContent && Zr(n.ssContent),
    ssFallback: n.ssFallback && Zr(n.ssFallback),
    el: n.el,
    anchor: n.anchor,
    ctx: n.ctx,
    ce: n.ce
  };
  return N && c && Wa(
    D,
    N.clone(D)
  ), D;
}
function Cl(n = " ", i = 0) {
  return Xt(Oo, null, n, i);
}
function lh(n = "", i = !1) {
  return i ? (_a(), wa(nr, null, n)) : Xt(nr, null, n);
}
function wn(n) {
  return n == null || typeof n == "boolean" ? Xt(nr) : Pe(n) ? Xt(
    on,
    null,
    // #3666, avoid reference pollution when reusing vnode
    n.slice()
  ) : Yi(n) ? or(n) : Xt(Oo, null, String(n));
}
function or(n) {
  return n.el === null && n.patchFlag !== -1 || n.memo ? n : Zr(n);
}
function za(n, i) {
  let u = 0;
  const { shapeFlag: c } = n;
  if (i == null)
    i = null;
  else if (Pe(i))
    u = 16;
  else if (typeof i == "object")
    if (c & 65) {
      const f = i.default;
      f && (f._c && (f._d = !1), za(n, f()), f._c && (f._d = !0));
      return;
    } else {
      u = 32;
      const f = i._;
      !f && !Tu(i) ? i._ctx = gt : f === 3 && gt && (gt.slots._ === 1 ? i._ = 1 : (i._ = 2, n.patchFlag |= 1024));
    }
  else Ke(i) ? (i = { default: i, _ctx: gt }, u = 32) : (i = String(i), c & 64 ? (u = 16, i = [Cl(i)]) : u = 8);
  n.children = i, n.shapeFlag |= u;
}
function Il(...n) {
  const i = {};
  for (let u = 0; u < n.length; u++) {
    const c = n[u];
    for (const f in c)
      if (f === "class")
        i.class !== c.class && (i.class = bo([i.class, c.class]));
      else if (f === "style")
        i.style = go([i.style, c.style]);
      else if (Ia(f)) {
        const p = i[f], E = c[f];
        E && p !== E && !(Pe(p) && p.includes(E)) && (i[f] = p ? [].concat(p, E) : E);
      } else f !== "" && (i[f] = c[f]);
  }
  return i;
}
function bn(n, i, u, c = null) {
  tr(n, i, 7, [
    u,
    c
  ]);
}
const kl = _u();
let Nl = 0;
function Dl(n, i, u) {
  const c = n.type, f = (i ? i.appContext : n.appContext) || kl, p = {
    uid: Nl++,
    vnode: n,
    type: c,
    parent: i,
    appContext: f,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Ks(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: i ? i.provides : Object.create(f.provides),
    ids: i ? i.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ou(c, f),
    emitsOptions: Nu(c, f),
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
  return p.ctx = { _: p }, p.root = i ? i.root : p, p.emit = _l.bind(null, p), n.ce && n.ce(p), p;
}
let xt = null;
const Fu = () => xt || gt;
let yo, xa;
{
  const n = vo(), i = (u, c) => {
    let f;
    return (f = n[u]) || (f = n[u] = []), f.push(c), (p) => {
      f.length > 1 ? f.forEach((E) => E(p)) : f[0](p);
    };
  };
  yo = i(
    "__VUE_INSTANCE_SETTERS__",
    (u) => xt = u
  ), xa = i(
    "__VUE_SSR_SETTERS__",
    (u) => Xi = u
  );
}
const Zi = (n) => {
  const i = xt;
  return yo(n), n.scope.on(), () => {
    n.scope.off(), yo(i);
  };
}, vs = () => {
  xt && xt.scope.off(), yo(null);
};
function Bu(n) {
  return n.vnode.shapeFlag & 4;
}
let Xi = !1;
function Rl(n, i = !1, u = !1) {
  i && xa(i);
  const { props: c, children: f } = n.vnode, p = Bu(n);
  sl(n, c, p, i), fl(n, f, u || i);
  const E = p ? Kl(n, i) : void 0;
  return i && xa(!1), E;
}
function Kl(n, i) {
  const u = n.type;
  n.accessCache = /* @__PURE__ */ Object.create(null), n.proxy = new Proxy(n.ctx, Jc);
  const { setup: c } = u;
  if (c) {
    Zn();
    const f = n.setupContext = c.length > 1 ? qu(n) : null, p = Zi(n), E = Ji(
      c,
      n,
      0,
      [
        n.props,
        f
      ]
    ), A = Is(E);
    if (er(), p(), (A || n.sp) && !Qr(n) && cu(n), A) {
      if (E.then(vs, vs), i)
        return E.then((N) => {
          gs(n, N);
        }).catch((N) => {
          xo(N, n, 0);
        });
      n.asyncDep = E;
    } else
      gs(n, E);
  } else
    Mu(n);
}
function gs(n, i, u) {
  Ke(i) ? n.type.__ssrInlineRender ? n.ssrRender = i : n.render = i : rt(i) && (n.setupState = Zs(i)), Mu(n);
}
function Mu(n, i, u) {
  const c = n.type;
  n.render || (n.render = c.render || xn);
  {
    const f = Zi(n);
    Zn();
    try {
      Zc(n);
    } finally {
      er(), f();
    }
  }
}
const jl = {
  get(n, i) {
    return Nt(n, "get", ""), n[i];
  }
};
function qu(n) {
  const i = (u) => {
    n.exposed = u || {};
  };
  return {
    attrs: new Proxy(n.attrs, jl),
    slots: n.slots,
    emit: n.emit,
    expose: i
  };
}
function Ao(n) {
  return n.exposed ? n.exposeProxy || (n.exposeProxy = new Proxy(Zs(Tc(n.exposed)), {
    get(i, u) {
      if (u in i)
        return i[u];
      if (u in Ui)
        return Ui[u](n);
    },
    has(i, u) {
      return u in i || u in Ui;
    }
  })) : n.proxy;
}
function Fl(n, i = !0) {
  return Ke(n) ? n.displayName || n.name : n.name || i && n.__name;
}
function Bl(n) {
  return Ke(n) && "__vccOpts" in n;
}
const Qa = (n, i) => Ic(n, i, Xi);
function fh(n, i, u) {
  const c = arguments.length;
  return c === 2 ? rt(i) && !Pe(i) ? Yi(i) ? Xt(n, null, [i]) : Xt(n, i) : Xt(n, null, i) : (c > 3 ? u = Array.prototype.slice.call(arguments, 2) : c === 3 && Yi(u) && (u = [u]), Xt(n, i, u));
}
function hh(n, i) {
  const u = n.memo;
  if (u.length != i.length)
    return !1;
  for (let c = 0; c < u.length; c++)
    if (Jn(u[c], i[c]))
      return !1;
  return Jr > 0 && Wt && Wt.push(n), !0;
}
const Ml = "3.5.17";
function ql(n) {
  return js() ? (nc(n), !0) : !1;
}
// @__NO_SIDE_EFFECTS__
function bs() {
  const n = /* @__PURE__ */ new Set(), i = (p) => {
    n.delete(p);
  };
  return {
    on: (p) => {
      n.add(p);
      const E = () => i(p);
      return ql(E), {
        off: E
      };
    },
    off: i,
    trigger: (...p) => Promise.all(Array.from(n).map((E) => E(...p))),
    clear: () => {
      n.clear();
    }
  };
}
const Ll = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ta = () => {
}, Ul = (n, i) => Object.prototype.hasOwnProperty.call(n, i);
function Vl(n, i) {
  function u(...c) {
    return new Promise((f, p) => {
      Promise.resolve(n(() => i.apply(this, c), { fn: i, thisArg: this, args: c })).then(f).catch(p);
    });
  }
  return u;
}
function $l(n, i = {}) {
  let u, c, f = Ta;
  const p = (N) => {
    clearTimeout(N), f(), f = Ta;
  };
  let E;
  return (N) => {
    const F = ar(n), D = ar(i.maxWait);
    return u && p(u), F <= 0 || D !== void 0 && D <= 0 ? (c && (p(c), c = void 0), Promise.resolve(N())) : new Promise((M, X) => {
      f = i.rejectOnCancel ? X : M, E = N, D && !c && (c = setTimeout(() => {
        u && p(u), c = void 0, M(E());
      }, D)), u = setTimeout(() => {
        c && p(c), c = void 0, M(N());
      }, F);
    });
  };
}
// @__NO_SIDE_EFFECTS__
function dh(n, i = 200, u = {}) {
  return Vl(
    $l(i, u),
    n
  );
}
function ph(n, i, u) {
  let c;
  bt(u) ? c = {
    evaluating: u
  } : c = {};
  const {
    lazy: f = !1,
    flush: p = "pre",
    evaluating: E = void 0,
    shallow: A = !0,
    onError: N = Ta
  } = c, F = pa(!f), D = A ? pa(i) : Va(i);
  let M = 0;
  return Iu(async (X) => {
    if (!F.value)
      return;
    M++;
    const ne = M;
    let ue = !1;
    E && Promise.resolve().then(() => {
      E.value = !0;
    });
    try {
      const he = await n((Me) => {
        X(() => {
          E && (E.value = !1), ue || Me();
        });
      });
      ne === M && (D.value = he);
    } catch (he) {
      N(he);
    } finally {
      E && ne === M && (E.value = !1), ue = !0;
    }
  }, { flush: p }), f ? Qa(() => (F.value = !0, D.value)) : D;
}
const Wl = Ll ? window.document : void 0;
function Hl(n) {
  var i;
  const u = ar(n);
  return (i = u?.$el) != null ? i : u;
}
const Gl = {
  multiple: !0,
  accept: "*",
  reset: !1,
  directory: !1
};
function Yl(n) {
  if (!n)
    return null;
  if (n instanceof FileList)
    return n;
  const i = new DataTransfer();
  for (const u of n)
    i.items.add(u);
  return i.files;
}
function yh(n = {}) {
  const {
    document: i = Wl
  } = n, u = Va(Yl(n.initialFiles)), { on: c, trigger: f } = /* @__PURE__ */ bs(), { on: p, trigger: E } = /* @__PURE__ */ bs(), A = Qa(() => {
    var M;
    const X = (M = Hl(n.input)) != null ? M : i ? i.createElement("input") : void 0;
    return X && (X.type = "file", X.onchange = (ne) => {
      const ue = ne.target;
      u.value = ue.files, f(u.value);
    }, X.oncancel = () => {
      E();
    }), X;
  }), N = () => {
    u.value = null, A.value && A.value.value && (A.value.value = "", f(null));
  }, F = (M) => {
    const X = A.value;
    X && (X.multiple = ar(M.multiple), X.accept = ar(M.accept), X.webkitdirectory = ar(M.directory), Ul(M, "capture") && (X.capture = ar(M.capture)));
  }, D = (M) => {
    const X = A.value;
    if (!X)
      return;
    const ne = {
      ...Gl,
      ...n,
      ...M
    };
    F(ne), ar(ne.reset) && N(), X.click();
  };
  return Iu(() => {
    F(n);
  }), {
    files: qa(u),
    open: D,
    reset: N,
    onCancel: p,
    onChange: c
  };
}
var Xl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zl(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Ql(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var i = n.default;
  if (typeof i == "function") {
    var u = function c() {
      var f = !1;
      try {
        f = this instanceof c;
      } catch {
      }
      return f ? Reflect.construct(i, arguments, this.constructor) : i.apply(this, arguments);
    };
    u.prototype = i.prototype;
  } else u = {};
  return Object.defineProperty(u, "__esModule", { value: !0 }), Object.keys(n).forEach(function(c) {
    var f = Object.getOwnPropertyDescriptor(n, c);
    Object.defineProperty(u, c, f.get ? f : {
      enumerable: !0,
      get: function() {
        return n[c];
      }
    });
  }), u;
}
var _s = {};
const Jl = {}, Zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jl
}, Symbol.toStringTag, { value: "Module" })), ws = /* @__PURE__ */ Ql(Zl);
var xs;
function ef() {
  return xs || (xs = 1, function(n) {
    (function(i) {
      i.parser = function(P, b) {
        return new c(P, b);
      }, i.SAXParser = c, i.SAXStream = D, i.createStream = F, i.MAX_BUFFER_LENGTH = 64 * 1024;
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
      function c(P, b) {
        if (!(this instanceof c))
          return new c(P, b);
        var R = this;
        p(R), R.q = R.c = "", R.bufferCheckPosition = i.MAX_BUFFER_LENGTH, R.opt = b || {}, R.opt.lowercase = R.opt.lowercase || R.opt.lowercasetags, R.looseCase = R.opt.lowercase ? "toLowerCase" : "toUpperCase", R.tags = [], R.closed = R.closedRoot = R.sawRoot = !1, R.tag = R.error = null, R.strict = !!P, R.noscript = !!(P || R.opt.noscript), R.state = j.BEGIN, R.strictEntities = R.opt.strictEntities, R.ENTITIES = R.strictEntities ? Object.create(i.XML_ENTITIES) : Object.create(i.ENTITIES), R.attribList = [], R.opt.xmlns && (R.ns = Object.create(he)), R.opt.unquotedAttributeValues === void 0 && (R.opt.unquotedAttributeValues = !P), R.trackPosition = R.opt.position !== !1, R.trackPosition && (R.position = R.line = R.column = 0), Se(R, "onready");
      }
      Object.create || (Object.create = function(P) {
        function b() {
        }
        b.prototype = P;
        var R = new b();
        return R;
      }), Object.keys || (Object.keys = function(P) {
        var b = [];
        for (var R in P) P.hasOwnProperty(R) && b.push(R);
        return b;
      });
      function f(P) {
        for (var b = Math.max(i.MAX_BUFFER_LENGTH, 10), R = 0, L = 0, Be = u.length; L < Be; L++) {
          var S = P[u[L]].length;
          if (S > b)
            switch (u[L]) {
              case "textNode":
                je(P);
                break;
              case "cdata":
                ve(P, "oncdata", P.cdata), P.cdata = "";
                break;
              case "script":
                ve(P, "onscript", P.script), P.script = "";
                break;
              default:
                Xe(P, "Max buffer length exceeded: " + u[L]);
            }
          R = Math.max(R, S);
        }
        var K = i.MAX_BUFFER_LENGTH - R;
        P.bufferCheckPosition = K + P.position;
      }
      function p(P) {
        for (var b = 0, R = u.length; b < R; b++)
          P[u[b]] = "";
      }
      function E(P) {
        je(P), P.cdata !== "" && (ve(P, "oncdata", P.cdata), P.cdata = ""), P.script !== "" && (ve(P, "onscript", P.script), P.script = "");
      }
      c.prototype = {
        end: function() {
          Ye(this);
        },
        write: ht,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          E(this);
        }
      };
      var A;
      try {
        A = ws.Stream;
      } catch {
        A = function() {
        };
      }
      A || (A = function() {
      });
      var N = i.EVENTS.filter(function(P) {
        return P !== "error" && P !== "end";
      });
      function F(P, b) {
        return new D(P, b);
      }
      function D(P, b) {
        if (!(this instanceof D))
          return new D(P, b);
        A.apply(this), this._parser = new c(P, b), this.writable = !0, this.readable = !0;
        var R = this;
        this._parser.onend = function() {
          R.emit("end");
        }, this._parser.onerror = function(L) {
          R.emit("error", L), R._parser.error = null;
        }, this._decoder = null, N.forEach(function(L) {
          Object.defineProperty(R, "on" + L, {
            get: function() {
              return R._parser["on" + L];
            },
            set: function(Be) {
              if (!Be)
                return R.removeAllListeners(L), R._parser["on" + L] = Be, Be;
              R.on(L, Be);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      D.prototype = Object.create(A.prototype, {
        constructor: {
          value: D
        }
      }), D.prototype.write = function(P) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(P)) {
          if (!this._decoder) {
            var b = ws.StringDecoder;
            this._decoder = new b("utf8");
          }
          P = this._decoder.write(P);
        }
        return this._parser.write(P.toString()), this.emit("data", P), !0;
      }, D.prototype.end = function(P) {
        return P && P.length && this.write(P), this._parser.end(), !0;
      }, D.prototype.on = function(P, b) {
        var R = this;
        return !R._parser["on" + P] && N.indexOf(P) !== -1 && (R._parser["on" + P] = function() {
          var L = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          L.splice(0, 0, P), R.emit.apply(R, L);
        }), A.prototype.on.call(R, P, b);
      };
      var M = "[CDATA[", X = "DOCTYPE", ne = "http://www.w3.org/XML/1998/namespace", ue = "http://www.w3.org/2000/xmlns/", he = { xml: ne, xmlns: ue }, Me = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Oe = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, ke = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Le = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function de(P) {
        return P === " " || P === `
` || P === "\r" || P === "	";
      }
      function qe(P) {
        return P === '"' || P === "'";
      }
      function Ce(P) {
        return P === ">" || de(P);
      }
      function J(P, b) {
        return P.test(b);
      }
      function re(P, b) {
        return !J(P, b);
      }
      var j = 0;
      i.STATE = {
        BEGIN: j++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: j++,
        // leading whitespace
        TEXT: j++,
        // general stuff
        TEXT_ENTITY: j++,
        // &amp and such.
        OPEN_WAKA: j++,
        // <
        SGML_DECL: j++,
        // <!BLARG
        SGML_DECL_QUOTED: j++,
        // <!BLARG foo "bar
        DOCTYPE: j++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: j++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: j++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: j++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: j++,
        // <!-
        COMMENT: j++,
        // <!--
        COMMENT_ENDING: j++,
        // <!-- blah -
        COMMENT_ENDED: j++,
        // <!-- blah --
        CDATA: j++,
        // <![CDATA[ something
        CDATA_ENDING: j++,
        // ]
        CDATA_ENDING_2: j++,
        // ]]
        PROC_INST: j++,
        // <?hi
        PROC_INST_BODY: j++,
        // <?hi there
        PROC_INST_ENDING: j++,
        // <?hi "there" ?
        OPEN_TAG: j++,
        // <strong
        OPEN_TAG_SLASH: j++,
        // <strong /
        ATTRIB: j++,
        // <a
        ATTRIB_NAME: j++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: j++,
        // <a foo _
        ATTRIB_VALUE: j++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: j++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: j++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: j++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: j++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: j++,
        // <foo bar=&quot
        CLOSE_TAG: j++,
        // </a
        CLOSE_TAG_SAW_WHITE: j++,
        // </a   >
        SCRIPT: j++,
        // <script> ...
        SCRIPT_ENDING: j++
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
      }, Object.keys(i.ENTITIES).forEach(function(P) {
        var b = i.ENTITIES[P], R = typeof b == "number" ? String.fromCharCode(b) : b;
        i.ENTITIES[P] = R;
      });
      for (var we in i.STATE)
        i.STATE[i.STATE[we]] = we;
      j = i.STATE;
      function Se(P, b, R) {
        P[b] && P[b](R);
      }
      function ve(P, b, R) {
        P.textNode && je(P), Se(P, b, R);
      }
      function je(P) {
        P.textNode = lt(P.opt, P.textNode), P.textNode && Se(P, "ontext", P.textNode), P.textNode = "";
      }
      function lt(P, b) {
        return P.trim && (b = b.trim()), P.normalize && (b = b.replace(/\s+/g, " ")), b;
      }
      function Xe(P, b) {
        return je(P), P.trackPosition && (b += `
Line: ` + P.line + `
Column: ` + P.column + `
Char: ` + P.c), b = new Error(b), P.error = b, Se(P, "onerror", b), P;
      }
      function Ye(P) {
        return P.sawRoot && !P.closedRoot && _e(P, "Unclosed root tag"), P.state !== j.BEGIN && P.state !== j.BEGIN_WHITESPACE && P.state !== j.TEXT && Xe(P, "Unexpected end"), je(P), P.c = "", P.closed = !0, Se(P, "onend"), c.call(P, P.strict, P.opt), P;
      }
      function _e(P, b) {
        if (typeof P != "object" || !(P instanceof c))
          throw new Error("bad call to strictFail");
        P.strict && Xe(P, b);
      }
      function Ne(P) {
        P.strict || (P.tagName = P.tagName[P.looseCase]());
        var b = P.tags[P.tags.length - 1] || P, R = P.tag = { name: P.tagName, attributes: {} };
        P.opt.xmlns && (R.ns = b.ns), P.attribList.length = 0, ve(P, "onopentagstart", R);
      }
      function st(P, b) {
        var R = P.indexOf(":"), L = R < 0 ? ["", P] : P.split(":"), Be = L[0], S = L[1];
        return b && P === "xmlns" && (Be = "xmlns", S = ""), { prefix: Be, local: S };
      }
      function et(P) {
        if (P.strict || (P.attribName = P.attribName[P.looseCase]()), P.attribList.indexOf(P.attribName) !== -1 || P.tag.attributes.hasOwnProperty(P.attribName)) {
          P.attribName = P.attribValue = "";
          return;
        }
        if (P.opt.xmlns) {
          var b = st(P.attribName, !0), R = b.prefix, L = b.local;
          if (R === "xmlns")
            if (L === "xml" && P.attribValue !== ne)
              _e(
                P,
                "xml: prefix must be bound to " + ne + `
Actual: ` + P.attribValue
              );
            else if (L === "xmlns" && P.attribValue !== ue)
              _e(
                P,
                "xmlns: prefix must be bound to " + ue + `
Actual: ` + P.attribValue
              );
            else {
              var Be = P.tag, S = P.tags[P.tags.length - 1] || P;
              Be.ns === S.ns && (Be.ns = Object.create(S.ns)), Be.ns[L] = P.attribValue;
            }
          P.attribList.push([P.attribName, P.attribValue]);
        } else
          P.tag.attributes[P.attribName] = P.attribValue, ve(P, "onattribute", {
            name: P.attribName,
            value: P.attribValue
          });
        P.attribName = P.attribValue = "";
      }
      function ct(P, b) {
        if (P.opt.xmlns) {
          var R = P.tag, L = st(P.tagName);
          R.prefix = L.prefix, R.local = L.local, R.uri = R.ns[L.prefix] || "", R.prefix && !R.uri && (_e(P, "Unbound namespace prefix: " + JSON.stringify(P.tagName)), R.uri = L.prefix);
          var Be = P.tags[P.tags.length - 1] || P;
          R.ns && Be.ns !== R.ns && Object.keys(R.ns).forEach(function(ge) {
            ve(P, "onopennamespace", {
              prefix: ge,
              uri: R.ns[ge]
            });
          });
          for (var S = 0, K = P.attribList.length; S < K; S++) {
            var Y = P.attribList[S], Q = Y[0], te = Y[1], Z = st(Q, !0), se = Z.prefix, le = Z.local, ie = se === "" ? "" : R.ns[se] || "", ee = {
              name: Q,
              value: te,
              prefix: se,
              local: le,
              uri: ie
            };
            se && se !== "xmlns" && !ie && (_e(P, "Unbound namespace prefix: " + JSON.stringify(se)), ee.uri = se), P.tag.attributes[Q] = ee, ve(P, "onattribute", ee);
          }
          P.attribList.length = 0;
        }
        P.tag.isSelfClosing = !!b, P.sawRoot = !0, P.tags.push(P.tag), ve(P, "onopentag", P.tag), b || (!P.noscript && P.tagName.toLowerCase() === "script" ? P.state = j.SCRIPT : P.state = j.TEXT, P.tag = null, P.tagName = ""), P.attribName = P.attribValue = "", P.attribList.length = 0;
      }
      function _t(P) {
        if (!P.tagName) {
          _e(P, "Weird empty close tag."), P.textNode += "</>", P.state = j.TEXT;
          return;
        }
        if (P.script) {
          if (P.tagName !== "script") {
            P.script += "</" + P.tagName + ">", P.tagName = "", P.state = j.SCRIPT;
            return;
          }
          ve(P, "onscript", P.script), P.script = "";
        }
        var b = P.tags.length, R = P.tagName;
        P.strict || (R = R[P.looseCase]());
        for (var L = R; b--; ) {
          var Be = P.tags[b];
          if (Be.name !== L)
            _e(P, "Unexpected close tag");
          else
            break;
        }
        if (b < 0) {
          _e(P, "Unmatched closing tag: " + P.tagName), P.textNode += "</" + P.tagName + ">", P.state = j.TEXT;
          return;
        }
        P.tagName = R;
        for (var S = P.tags.length; S-- > b; ) {
          var K = P.tag = P.tags.pop();
          P.tagName = P.tag.name, ve(P, "onclosetag", P.tagName);
          var Y = {};
          for (var Q in K.ns)
            Y[Q] = K.ns[Q];
          var te = P.tags[P.tags.length - 1] || P;
          P.opt.xmlns && K.ns !== te.ns && Object.keys(K.ns).forEach(function(Z) {
            var se = K.ns[Z];
            ve(P, "onclosenamespace", { prefix: Z, uri: se });
          });
        }
        b === 0 && (P.closedRoot = !0), P.tagName = P.attribValue = P.attribName = "", P.attribList.length = 0, P.state = j.TEXT;
      }
      function wt(P) {
        var b = P.entity, R = b.toLowerCase(), L, Be = "";
        return P.ENTITIES[b] ? P.ENTITIES[b] : P.ENTITIES[R] ? P.ENTITIES[R] : (b = R, b.charAt(0) === "#" && (b.charAt(1) === "x" ? (b = b.slice(2), L = parseInt(b, 16), Be = L.toString(16)) : (b = b.slice(1), L = parseInt(b, 10), Be = L.toString(10))), b = b.replace(/^0+/, ""), isNaN(L) || Be.toLowerCase() !== b ? (_e(P, "Invalid character entity"), "&" + P.entity + ";") : String.fromCodePoint(L));
      }
      function vn(P, b) {
        b === "<" ? (P.state = j.OPEN_WAKA, P.startTagPosition = P.position) : de(b) || (_e(P, "Non-whitespace before first tag."), P.textNode = b, P.state = j.TEXT);
      }
      function Gt(P, b) {
        var R = "";
        return b < P.length && (R = P.charAt(b)), R;
      }
      function ht(P) {
        var b = this;
        if (this.error)
          throw this.error;
        if (b.closed)
          return Xe(
            b,
            "Cannot write after close. Assign an onready handler."
          );
        if (P === null)
          return Ye(b);
        typeof P == "object" && (P = P.toString());
        for (var R = 0, L = ""; L = Gt(P, R++), b.c = L, !!L; )
          switch (b.trackPosition && (b.position++, L === `
` ? (b.line++, b.column = 0) : b.column++), b.state) {
            case j.BEGIN:
              if (b.state = j.BEGIN_WHITESPACE, L === "\uFEFF")
                continue;
              vn(b, L);
              continue;
            case j.BEGIN_WHITESPACE:
              vn(b, L);
              continue;
            case j.TEXT:
              if (b.sawRoot && !b.closedRoot) {
                for (var Be = R - 1; L && L !== "<" && L !== "&"; )
                  L = Gt(P, R++), L && b.trackPosition && (b.position++, L === `
` ? (b.line++, b.column = 0) : b.column++);
                b.textNode += P.substring(Be, R - 1);
              }
              L === "<" && !(b.sawRoot && b.closedRoot && !b.strict) ? (b.state = j.OPEN_WAKA, b.startTagPosition = b.position) : (!de(L) && (!b.sawRoot || b.closedRoot) && _e(b, "Text data outside of root node."), L === "&" ? b.state = j.TEXT_ENTITY : b.textNode += L);
              continue;
            case j.SCRIPT:
              L === "<" ? b.state = j.SCRIPT_ENDING : b.script += L;
              continue;
            case j.SCRIPT_ENDING:
              L === "/" ? b.state = j.CLOSE_TAG : (b.script += "<" + L, b.state = j.SCRIPT);
              continue;
            case j.OPEN_WAKA:
              if (L === "!")
                b.state = j.SGML_DECL, b.sgmlDecl = "";
              else if (!de(L)) if (J(Me, L))
                b.state = j.OPEN_TAG, b.tagName = L;
              else if (L === "/")
                b.state = j.CLOSE_TAG, b.tagName = "";
              else if (L === "?")
                b.state = j.PROC_INST, b.procInstName = b.procInstBody = "";
              else {
                if (_e(b, "Unencoded <"), b.startTagPosition + 1 < b.position) {
                  var S = b.position - b.startTagPosition;
                  L = new Array(S).join(" ") + L;
                }
                b.textNode += "<" + L, b.state = j.TEXT;
              }
              continue;
            case j.SGML_DECL:
              if (b.sgmlDecl + L === "--") {
                b.state = j.COMMENT, b.comment = "", b.sgmlDecl = "";
                continue;
              }
              b.doctype && b.doctype !== !0 && b.sgmlDecl ? (b.state = j.DOCTYPE_DTD, b.doctype += "<!" + b.sgmlDecl + L, b.sgmlDecl = "") : (b.sgmlDecl + L).toUpperCase() === M ? (ve(b, "onopencdata"), b.state = j.CDATA, b.sgmlDecl = "", b.cdata = "") : (b.sgmlDecl + L).toUpperCase() === X ? (b.state = j.DOCTYPE, (b.doctype || b.sawRoot) && _e(
                b,
                "Inappropriately located doctype declaration"
              ), b.doctype = "", b.sgmlDecl = "") : L === ">" ? (ve(b, "onsgmldeclaration", b.sgmlDecl), b.sgmlDecl = "", b.state = j.TEXT) : (qe(L) && (b.state = j.SGML_DECL_QUOTED), b.sgmlDecl += L);
              continue;
            case j.SGML_DECL_QUOTED:
              L === b.q && (b.state = j.SGML_DECL, b.q = ""), b.sgmlDecl += L;
              continue;
            case j.DOCTYPE:
              L === ">" ? (b.state = j.TEXT, ve(b, "ondoctype", b.doctype), b.doctype = !0) : (b.doctype += L, L === "[" ? b.state = j.DOCTYPE_DTD : qe(L) && (b.state = j.DOCTYPE_QUOTED, b.q = L));
              continue;
            case j.DOCTYPE_QUOTED:
              b.doctype += L, L === b.q && (b.q = "", b.state = j.DOCTYPE);
              continue;
            case j.DOCTYPE_DTD:
              L === "]" ? (b.doctype += L, b.state = j.DOCTYPE) : L === "<" ? (b.state = j.OPEN_WAKA, b.startTagPosition = b.position) : qe(L) ? (b.doctype += L, b.state = j.DOCTYPE_DTD_QUOTED, b.q = L) : b.doctype += L;
              continue;
            case j.DOCTYPE_DTD_QUOTED:
              b.doctype += L, L === b.q && (b.state = j.DOCTYPE_DTD, b.q = "");
              continue;
            case j.COMMENT:
              L === "-" ? b.state = j.COMMENT_ENDING : b.comment += L;
              continue;
            case j.COMMENT_ENDING:
              L === "-" ? (b.state = j.COMMENT_ENDED, b.comment = lt(b.opt, b.comment), b.comment && ve(b, "oncomment", b.comment), b.comment = "") : (b.comment += "-" + L, b.state = j.COMMENT);
              continue;
            case j.COMMENT_ENDED:
              L !== ">" ? (_e(b, "Malformed comment"), b.comment += "--" + L, b.state = j.COMMENT) : b.doctype && b.doctype !== !0 ? b.state = j.DOCTYPE_DTD : b.state = j.TEXT;
              continue;
            case j.CDATA:
              L === "]" ? b.state = j.CDATA_ENDING : b.cdata += L;
              continue;
            case j.CDATA_ENDING:
              L === "]" ? b.state = j.CDATA_ENDING_2 : (b.cdata += "]" + L, b.state = j.CDATA);
              continue;
            case j.CDATA_ENDING_2:
              L === ">" ? (b.cdata && ve(b, "oncdata", b.cdata), ve(b, "onclosecdata"), b.cdata = "", b.state = j.TEXT) : L === "]" ? b.cdata += "]" : (b.cdata += "]]" + L, b.state = j.CDATA);
              continue;
            case j.PROC_INST:
              L === "?" ? b.state = j.PROC_INST_ENDING : de(L) ? b.state = j.PROC_INST_BODY : b.procInstName += L;
              continue;
            case j.PROC_INST_BODY:
              if (!b.procInstBody && de(L))
                continue;
              L === "?" ? b.state = j.PROC_INST_ENDING : b.procInstBody += L;
              continue;
            case j.PROC_INST_ENDING:
              L === ">" ? (ve(b, "onprocessinginstruction", {
                name: b.procInstName,
                body: b.procInstBody
              }), b.procInstName = b.procInstBody = "", b.state = j.TEXT) : (b.procInstBody += "?" + L, b.state = j.PROC_INST_BODY);
              continue;
            case j.OPEN_TAG:
              J(Oe, L) ? b.tagName += L : (Ne(b), L === ">" ? ct(b) : L === "/" ? b.state = j.OPEN_TAG_SLASH : (de(L) || _e(b, "Invalid character in tag name"), b.state = j.ATTRIB));
              continue;
            case j.OPEN_TAG_SLASH:
              L === ">" ? (ct(b, !0), _t(b)) : (_e(b, "Forward-slash in opening tag not followed by >"), b.state = j.ATTRIB);
              continue;
            case j.ATTRIB:
              if (de(L))
                continue;
              L === ">" ? ct(b) : L === "/" ? b.state = j.OPEN_TAG_SLASH : J(Me, L) ? (b.attribName = L, b.attribValue = "", b.state = j.ATTRIB_NAME) : _e(b, "Invalid attribute name");
              continue;
            case j.ATTRIB_NAME:
              L === "=" ? b.state = j.ATTRIB_VALUE : L === ">" ? (_e(b, "Attribute without value"), b.attribValue = b.attribName, et(b), ct(b)) : de(L) ? b.state = j.ATTRIB_NAME_SAW_WHITE : J(Oe, L) ? b.attribName += L : _e(b, "Invalid attribute name");
              continue;
            case j.ATTRIB_NAME_SAW_WHITE:
              if (L === "=")
                b.state = j.ATTRIB_VALUE;
              else {
                if (de(L))
                  continue;
                _e(b, "Attribute without value"), b.tag.attributes[b.attribName] = "", b.attribValue = "", ve(b, "onattribute", {
                  name: b.attribName,
                  value: ""
                }), b.attribName = "", L === ">" ? ct(b) : J(Me, L) ? (b.attribName = L, b.state = j.ATTRIB_NAME) : (_e(b, "Invalid attribute name"), b.state = j.ATTRIB);
              }
              continue;
            case j.ATTRIB_VALUE:
              if (de(L))
                continue;
              qe(L) ? (b.q = L, b.state = j.ATTRIB_VALUE_QUOTED) : (b.opt.unquotedAttributeValues || Xe(b, "Unquoted attribute value"), b.state = j.ATTRIB_VALUE_UNQUOTED, b.attribValue = L);
              continue;
            case j.ATTRIB_VALUE_QUOTED:
              if (L !== b.q) {
                L === "&" ? b.state = j.ATTRIB_VALUE_ENTITY_Q : b.attribValue += L;
                continue;
              }
              et(b), b.q = "", b.state = j.ATTRIB_VALUE_CLOSED;
              continue;
            case j.ATTRIB_VALUE_CLOSED:
              de(L) ? b.state = j.ATTRIB : L === ">" ? ct(b) : L === "/" ? b.state = j.OPEN_TAG_SLASH : J(Me, L) ? (_e(b, "No whitespace between attributes"), b.attribName = L, b.attribValue = "", b.state = j.ATTRIB_NAME) : _e(b, "Invalid attribute name");
              continue;
            case j.ATTRIB_VALUE_UNQUOTED:
              if (!Ce(L)) {
                L === "&" ? b.state = j.ATTRIB_VALUE_ENTITY_U : b.attribValue += L;
                continue;
              }
              et(b), L === ">" ? ct(b) : b.state = j.ATTRIB;
              continue;
            case j.CLOSE_TAG:
              if (b.tagName)
                L === ">" ? _t(b) : J(Oe, L) ? b.tagName += L : b.script ? (b.script += "</" + b.tagName, b.tagName = "", b.state = j.SCRIPT) : (de(L) || _e(b, "Invalid tagname in closing tag"), b.state = j.CLOSE_TAG_SAW_WHITE);
              else {
                if (de(L))
                  continue;
                re(Me, L) ? b.script ? (b.script += "</" + L, b.state = j.SCRIPT) : _e(b, "Invalid tagname in closing tag.") : b.tagName = L;
              }
              continue;
            case j.CLOSE_TAG_SAW_WHITE:
              if (de(L))
                continue;
              L === ">" ? _t(b) : _e(b, "Invalid characters in closing tag");
              continue;
            case j.TEXT_ENTITY:
            case j.ATTRIB_VALUE_ENTITY_Q:
            case j.ATTRIB_VALUE_ENTITY_U:
              var K, Y;
              switch (b.state) {
                case j.TEXT_ENTITY:
                  K = j.TEXT, Y = "textNode";
                  break;
                case j.ATTRIB_VALUE_ENTITY_Q:
                  K = j.ATTRIB_VALUE_QUOTED, Y = "attribValue";
                  break;
                case j.ATTRIB_VALUE_ENTITY_U:
                  K = j.ATTRIB_VALUE_UNQUOTED, Y = "attribValue";
                  break;
              }
              if (L === ";") {
                var Q = wt(b);
                b.opt.unparsedEntities && !Object.values(i.XML_ENTITIES).includes(Q) ? (b.entity = "", b.state = K, b.write(Q)) : (b[Y] += Q, b.entity = "", b.state = K);
              } else J(b.entity.length ? Le : ke, L) ? b.entity += L : (_e(b, "Invalid character in entity name"), b[Y] += "&" + b.entity + L, b.entity = "", b.state = K);
              continue;
            default:
              throw new Error(b, "Unknown state: " + b.state);
          }
        return b.position >= b.bufferCheckPosition && f(b), b;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var P = String.fromCharCode, b = Math.floor, R = function() {
          var L = 16384, Be = [], S, K, Y = -1, Q = arguments.length;
          if (!Q)
            return "";
          for (var te = ""; ++Y < Q; ) {
            var Z = Number(arguments[Y]);
            if (!isFinite(Z) || // `NaN`, `+Infinity`, or `-Infinity`
            Z < 0 || // not a valid Unicode code point
            Z > 1114111 || // not a valid Unicode code point
            b(Z) !== Z)
              throw RangeError("Invalid code point: " + Z);
            Z <= 65535 ? Be.push(Z) : (Z -= 65536, S = (Z >> 10) + 55296, K = Z % 1024 + 56320, Be.push(S, K)), (Y + 1 === Q || Be.length > L) && (te += P.apply(null, Be), Be.length = 0);
          }
          return te;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: R,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = R;
      }();
    })(n);
  }(_s)), _s;
}
var tf = ef();
const $i = {};
function nf(n) {
  const { parentId: i, child: u } = n;
  $i[i] || ($i[i] = []);
  const c = {
    id: u.id,
    tagName: u.tagName
  };
  $i[i].push(c);
}
function rf(n) {
  const { currentBatch: i } = n, u = [...i];
  for (const [c, f] of u.entries()) {
    const p = $i[f.id] || [];
    p.length > 0 && (u[c].children.push(...p), of({
      parentId: f.id
    }));
  }
  return u;
}
function of(n) {
  const { parentId: i } = n;
  delete $i[i];
}
function af(n) {
  return "prefix" in n && "uri" in n && !!n.prefix && !!n.uri;
}
const sf = [
  ".fsd",
  ".asd",
  ".ssd",
  ".scd",
  ".isd",
  ".icd",
  ".xml"
], Vt = "sclElements", uf = "id, tagName, &attributes.uuid, &attributes.id, attributes.name, parent.id, parent.tagName, *children.id, *children.tagName", Lu = {
  default: {
    prefix: "",
    uri: "http://www.iec.ch/61850/2003/SCL"
  }
};
function cf() {
  let n = {
    defaultNamespace: null,
    stack: [],
    recordsBatch: []
  };
  const i = tf.parser(
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
  i.onopentag = (f) => n = lf({ node: f, state: n }), i.ontext = (f) => n = ff({ text: f, state: n }), i.onclosetag = () => ({ updatedState: n } = hf({
    state: n
  })), i.onerror = df;
  function u() {
    const f = n.recordsBatch;
    return n.recordsBatch = [], f;
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
function lf(n) {
  const { node: i, state: u } = n, c = { ...u }, f = pf(i);
  c.defaultNamespace || (c.defaultNamespace = yf(i));
  const p = mf(i, c.defaultNamespace), E = vf(i.attributes), A = gf(u.stack), N = {
    id: crypto.randomUUID(),
    tagName: f,
    namespace: p,
    attributes: E,
    value: "",
    parent: A,
    children: []
  };
  return c.stack.push(N), c;
}
function ff(n) {
  const { text: i, state: u } = n;
  return i && u.stack.length > 0 && (u.stack[u.stack.length - 1].value += i), u;
}
function hf(n) {
  const { state: i } = n, u = i.stack.at(-1);
  let c = i.stack.slice(0, -1);
  const f = [...i.recordsBatch];
  if (u) {
    if (c.length) {
      const p = c.length - 1;
      c = c.map(
        (E, A) => A === p ? {
          ...E,
          children: [
            ...E.children,
            { id: u.id, tagName: u.tagName }
          ]
        } : E
      );
    } else u.parent && nf({
      parentId: u.parent.id,
      child: { id: u.id, tagName: u.tagName }
    });
    f.push(u);
  }
  return {
    updatedState: {
      defaultNamespace: i.defaultNamespace,
      stack: c,
      recordsBatch: f
    }
  };
}
function df(n) {
  return new Error(`XML parsing error: ${n}`);
}
function pf(n) {
  return n.local || null;
}
function yf(n) {
  if (n.name !== "SCL") throw new Error("Default namespace can only be set on SCL element");
  return n.attributes?.xmlns?.value ? {
    prefix: "",
    uri: n.attributes.xmlns.value
  } : Lu.default;
}
function mf(n, i) {
  return af(n) ? {
    prefix: n.prefix,
    uri: n.uri
  } : i;
}
function vf(n) {
  return Object.values(n).map((i) => {
    const u = i.prefix && i.uri ? {
      prefix: i.prefix,
      uri: i.uri
    } : void 0;
    return {
      name: i.name,
      value: i.value,
      ...u && { namespace: u }
    };
  });
}
function gf(n) {
  if (n.length === 0) return null;
  const i = n[n.length - 1];
  return i ? { id: i.id, tagName: i.tagName } : null;
}
var Ea = { exports: {} }, bf = Ea.exports, Ts;
function _f() {
  return Ts || (Ts = 1, function(n, i) {
    (function(u, c) {
      n.exports = c();
    })(bf, function() {
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
      function f(e, t, r) {
        for (var o, a = 0, s = t.length; a < s; a++) !o && a in t || ((o = o || Array.prototype.slice.call(t, 0, a))[a] = t[a]);
        return e.concat(o || Array.prototype.slice.call(t));
      }
      var p = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Xl, E = Object.keys, A = Array.isArray;
      function N(e, t) {
        return typeof t != "object" || E(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || p.Promise || (p.Promise = Promise);
      var F = Object.getPrototypeOf, D = {}.hasOwnProperty;
      function M(e, t) {
        return D.call(e, t);
      }
      function X(e, t) {
        typeof t == "function" && (t = t(F(e))), (typeof Reflect > "u" ? E : Reflect.ownKeys)(t).forEach(function(r) {
          ue(e, r, t[r]);
        });
      }
      var ne = Object.defineProperty;
      function ue(e, t, r, o) {
        ne(e, t, N(r && M(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function he(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), ue(e.prototype, "constructor", e), { extend: X.bind(null, e.prototype) };
        } };
      }
      var Me = Object.getOwnPropertyDescriptor, Oe = [].slice;
      function ke(e, t, r) {
        return Oe.call(e, t, r);
      }
      function Le(e, t) {
        return t(e);
      }
      function de(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function qe(e) {
        p.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Ce(e, t) {
        if (typeof t == "string" && M(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var r = [], o = 0, a = t.length; o < a; ++o) {
            var s = Ce(e, t[o]);
            r.push(s);
          }
          return r;
        }
        var l = t.indexOf(".");
        if (l !== -1) {
          var h = e[t.substr(0, l)];
          return h == null ? void 0 : Ce(h, t.substr(l + 1));
        }
      }
      function J(e, t, r) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          de(typeof r != "string" && "length" in r);
          for (var o = 0, a = t.length; o < a; ++o) J(e, t[o], r[o]);
        } else {
          var s, l, h = t.indexOf(".");
          h !== -1 ? (s = t.substr(0, h), (l = t.substr(h + 1)) === "" ? r === void 0 ? A(e) && !isNaN(parseInt(s)) ? e.splice(s, 1) : delete e[s] : e[s] = r : J(h = !(h = e[s]) || !M(e, s) ? e[s] = {} : h, l, r)) : r === void 0 ? A(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function re(e) {
        var t, r = {};
        for (t in e) M(e, t) && (r[t] = e[t]);
        return r;
      }
      var j = [].concat;
      function we(e) {
        return j.apply([], e);
      }
      var Ee = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(we([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return p[e];
      }), Se = new Set(Ee.map(function(e) {
        return p[e];
      })), ve = null;
      function je(e) {
        return ve = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var o = ve.get(r);
          if (o) return o;
          if (A(r)) {
            o = [], ve.set(r, o);
            for (var a = 0, s = r.length; a < s; ++a) o.push(t(r[a]));
          } else if (Se.has(r.constructor)) o = r;
          else {
            var l, h = F(r);
            for (l in o = h === Object.prototype ? {} : Object.create(h), ve.set(r, o), r) M(r, l) && (o[l] = t(r[l]));
          }
          return o;
        }(e), ve = null, e;
      }
      var lt = {}.toString;
      function Xe(e) {
        return lt.call(e).slice(8, -1);
      }
      var Ye = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", _e = typeof Ye == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Ye]) && t.apply(e);
      } : function() {
        return null;
      };
      function Ne(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var st = {};
      function et(e) {
        var t, r, o, a;
        if (arguments.length === 1) {
          if (A(e)) return e.slice();
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
      }, xe = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], ut = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(xe), _t = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function wt(e, t) {
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
      function ht(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(r) {
          return t[r];
        }), this.failuresByPos = t, this.message = vn(e, this.failures);
      }
      he(wt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), he(Gt).from(wt), he(ht).from(wt);
      var P = ut.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), b = wt, R = ut.reduce(function(e, t) {
        var r = t + "Error";
        function o(a, s) {
          this.name = r, a ? typeof a == "string" ? (this.message = "".concat(a).concat(s ? `
 ` + s : ""), this.inner = s || null) : typeof a == "object" && (this.message = "".concat(a.name, " ").concat(a.message), this.inner = a) : (this.message = _t[t] || r, this.inner = null);
        }
        return he(o).from(b), e[t] = o, e;
      }, {});
      R.Syntax = SyntaxError, R.Type = TypeError, R.Range = RangeError;
      var L = xe.reduce(function(e, t) {
        return e[t + "Error"] = R[t], e;
      }, {}), Be = ut.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = R[t]), e;
      }, {});
      function S() {
      }
      function K(e) {
        return e;
      }
      function Y(e, t) {
        return e == null || e === K ? t : function(r) {
          return t(e(r));
        };
      }
      function Q(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function te(e, t) {
        return e === S ? t : function() {
          var r = e.apply(this, arguments);
          r !== void 0 && (arguments[0] = r);
          var o = this.onsuccess, a = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var s = t.apply(this, arguments);
          return o && (this.onsuccess = this.onsuccess ? Q(o, this.onsuccess) : o), a && (this.onerror = this.onerror ? Q(a, this.onerror) : a), s !== void 0 ? s : r;
        };
      }
      function Z(e, t) {
        return e === S ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? Q(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? Q(o, this.onerror) : o);
        };
      }
      function se(e, t) {
        return e === S ? t : function(r) {
          var o = e.apply(this, arguments);
          N(r, o);
          var a = this.onsuccess, s = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), a && (this.onsuccess = this.onsuccess ? Q(a, this.onsuccess) : a), s && (this.onerror = this.onerror ? Q(s, this.onerror) : s), o === void 0 ? r === void 0 ? void 0 : r : N(o, r);
        };
      }
      function le(e, t) {
        return e === S ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function ie(e, t) {
        return e === S ? t : function() {
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
      Be.ModifyError = Gt, Be.DexieError = wt, Be.BulkError = ht;
      var ee = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function ge(e) {
        ee = e;
      }
      var fe = {}, be = 100, Ee = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, F(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, F(t), e];
      }(), xe = Ee[0], ut = Ee[1], Ee = Ee[2], ut = ut && ut.then, Fe = xe && xe.constructor, Ue = !!Ee, it = function(e, t) {
        Yt.push([e, t]), yt && (queueMicrotask(Co), yt = !1);
      }, ft = !0, yt = !0, ot = [], Dt = [], gn = K, ze = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: S, pgp: !1, env: {}, finalize: S }, z = ze, Yt = [], Rt = 0, On = [];
      function H(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = z;
        if (typeof e != "function") {
          if (e !== fe) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && cr(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function r(o, a) {
          try {
            a(function(s) {
              if (o._state === null) {
                if (s === o) throw new TypeError("A promise cannot be resolved with itself.");
                var l = o._lib && zt();
                s && typeof s.then == "function" ? r(o, function(h, y) {
                  s instanceof H ? s._then(h, y) : s.then(h, y);
                }) : (o._state = !0, o._value = s, ri(o)), l && Qt();
              }
            }, cr.bind(null, o));
          } catch (s) {
            cr(o, s);
          }
        }(this, e);
      }
      var ur = { get: function() {
        var e = z, t = Cn;
        function r(o, a) {
          var s = this, l = !e.global && (e !== z || t !== Cn), h = l && !Ot(), y = new H(function(v, _) {
            lr(s, new ni(oi(o, e, l, h), oi(a, e, l, h), v, _, e));
          });
          return this._consoleTask && (y._consoleTask = this._consoleTask), y;
        }
        return r.prototype = fe, r;
      }, set: function(e) {
        ue(this, "then", e && e.prototype === fe ? ur : { get: function() {
          return e;
        }, set: ur.set });
      } };
      function ni(e, t, r, o, a) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = r, this.reject = o, this.psd = a;
      }
      function cr(e, t) {
        var r, o;
        Dt.push(t), e._state === null && (r = e._lib && zt(), t = gn(t), e._state = !1, e._value = t, o = e, ot.some(function(a) {
          return a._value === o._value;
        }) || ot.push(o), ri(e), r && Qt());
      }
      function ri(e) {
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
          ++t.psd.ref, ++Rt, it(Po, [r, e, t]);
        } else e._listeners.push(t);
      }
      function Po(e, t, r) {
        try {
          var o, a = t._value;
          !t._state && Dt.length && (Dt = []), o = ee && t._consoleTask ? t._consoleTask.run(function() {
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
      function Co() {
        Kt(ze, function() {
          zt() && Qt();
        });
      }
      function zt() {
        var e = ft;
        return yt = ft = !1, e;
      }
      function Qt() {
        var e, t, r;
        do
          for (; 0 < Yt.length; ) for (e = Yt, Yt = [], r = e.length, t = 0; t < r; ++t) {
            var o = e[t];
            o[0].apply(null, o[1]);
          }
        while (0 < Yt.length);
        yt = ft = !0;
      }
      function fr() {
        var e = ot;
        ot = [], e.forEach(function(o) {
          o._PSD.onunhandled.call(null, o._value, o);
        });
        for (var t = On.slice(0), r = t.length; r; ) t[--r]();
      }
      function An(e) {
        return new H(fe, !1, e);
      }
      function Ae(e, t) {
        var r = z;
        return function() {
          var o = zt(), a = z;
          try {
            return At(r, !0), e.apply(this, arguments);
          } catch (s) {
            t && t(s);
          } finally {
            At(a, !1), o && Qt();
          }
        };
      }
      X(H.prototype, { then: ur, _then: function(e, t) {
        lr(this, new ni(null, null, e, t, z));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, r = arguments[1];
        return typeof t == "function" ? this.then(null, function(o) {
          return (o instanceof t ? r : An)(o);
        }) : this.then(null, function(o) {
          return (o && o.name === t ? r : An)(o);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return H.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return H.resolve(e()).then(function() {
            return An(t);
          });
        });
      }, timeout: function(e, t) {
        var r = this;
        return e < 1 / 0 ? new H(function(o, a) {
          var s = setTimeout(function() {
            return a(new R.Timeout(t));
          }, e);
          r.then(o, a).finally(clearTimeout.bind(null, s));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && ue(H.prototype, Symbol.toStringTag, "Dexie.Promise"), ze.env = ii(), X(H, { all: function() {
        var e = et.apply(null, arguments).map(In);
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
        }) : new H(fe, !0, e);
      }, reject: An, race: function() {
        var e = et.apply(null, arguments).map(In);
        return new H(function(t, r) {
          e.map(function(o) {
            return H.resolve(o).then(t, r);
          });
        });
      }, PSD: { get: function() {
        return z;
      }, set: function(e) {
        return z = e;
      } }, totalEchoes: { get: function() {
        return Cn;
      } }, newPSD: Et, usePSD: Kt, scheduler: { get: function() {
        return it;
      }, set: function(e) {
        it = e;
      } }, rejectionMapper: { get: function() {
        return gn;
      }, set: function(e) {
        gn = e;
      } }, follow: function(e, t) {
        return new H(function(r, o) {
          return Et(function(a, s) {
            var l = z;
            l.unhandleds = [], l.onunhandled = s, l.finalize = Q(function() {
              var h, y = this;
              h = function() {
                y.unhandleds.length === 0 ? a() : s(y.unhandleds[0]);
              }, On.push(function v() {
                h(), On.splice(On.indexOf(v), 1);
              }), ++Rt, it(function() {
                --Rt == 0 && fr();
              }, []);
            }, l.finalize), e();
          }, t, r, o);
        });
      } }), Fe && (Fe.allSettled && ue(H, "allSettled", function() {
        var e = et.apply(null, arguments).map(In);
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
      }), Fe.any && typeof AggregateError < "u" && ue(H, "any", function() {
        var e = et.apply(null, arguments).map(In);
        return new H(function(t, r) {
          e.length === 0 && r(new AggregateError([]));
          var o = e.length, a = new Array(o);
          e.forEach(function(s, l) {
            return H.resolve(s).then(function(h) {
              return t(h);
            }, function(h) {
              a[l] = h, --o || r(new AggregateError(a));
            });
          });
        });
      }), Fe.withResolvers && (H.withResolvers = Fe.withResolvers));
      var Ve = { awaits: 0, echoes: 0, id: 0 }, Io = 0, Sn = [], Pn = 0, Cn = 0, ko = 0;
      function Et(e, t, r, o) {
        var a = z, s = Object.create(a);
        return s.parent = a, s.ref = 0, s.global = !1, s.id = ++ko, ze.env, s.env = Ue ? { Promise: H, PromiseProp: { value: H, configurable: !0, writable: !0 }, all: H.all, race: H.race, allSettled: H.allSettled, any: H.any, resolve: H.resolve, reject: H.reject } : {}, t && N(s, t), ++a.ref, s.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = Kt(s, e, r, o), s.ref === 0 && s.finalize(), o;
      }
      function Jt() {
        return Ve.id || (Ve.id = ++Io), ++Ve.awaits, Ve.echoes += be, Ve.id;
      }
      function Ot() {
        return !!Ve.awaits && (--Ve.awaits == 0 && (Ve.id = 0), Ve.echoes = Ve.awaits * be, !0);
      }
      function In(e) {
        return Ve.echoes && e && e.constructor === Fe ? (Jt(), e.then(function(t) {
          return Ot(), t;
        }, function(t) {
          return Ot(), De(t);
        })) : e;
      }
      function No() {
        var e = Sn[Sn.length - 1];
        Sn.pop(), At(e, !1);
      }
      function At(e, t) {
        var r, o = z;
        (t ? !Ve.echoes || Pn++ && e === z : !Pn || --Pn && e === z) || queueMicrotask(t ? (function(a) {
          ++Cn, Ve.echoes && --Ve.echoes != 0 || (Ve.echoes = Ve.awaits = Ve.id = 0), Sn.push(z), At(a, !0);
        }).bind(null, e) : No), e !== z && (z = e, o === ze && (ze.env = ii()), Ue && (r = ze.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(p, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function ii() {
        var e = p.Promise;
        return Ue ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(p, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Kt(e, t, r, o, a) {
        var s = z;
        try {
          return At(e, !0), t(r, o, a);
        } finally {
          At(s, !1);
        }
      }
      function oi(e, t, r, o) {
        return typeof e != "function" ? e : function() {
          var a = z;
          r && Jt(), At(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            At(a, !1), o && queueMicrotask(Ot);
          }
        };
      }
      function hr(e) {
        Promise === Fe && Ve.echoes === 0 ? Pn === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + ut).indexOf("[native code]") === -1 && (Jt = Ot = S);
      var De = H.reject, jt = "￿", mt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", ai = "String expected.", Zt = [], kn = "__dbnames", dr = "readonly", pr = "readwrite";
      function Ft(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var si = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Nn(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = je(t))[e], t;
        };
      }
      function ui() {
        throw R.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function pe(e, t) {
        try {
          var r = ci(e), o = ci(t);
          if (r !== o) return r === "Array" ? 1 : o === "Array" ? -1 : r === "binary" ? 1 : o === "binary" ? -1 : r === "string" ? 1 : o === "string" ? -1 : r === "Date" ? 1 : o !== "Date" ? NaN : -1;
          switch (r) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return function(a, s) {
                for (var l = a.length, h = s.length, y = l < h ? l : h, v = 0; v < y; ++v) if (a[v] !== s[v]) return a[v] < s[v] ? -1 : 1;
                return l === h ? 0 : l < h ? -1 : 1;
              }(li(e), li(t));
            case "Array":
              return function(a, s) {
                for (var l = a.length, h = s.length, y = l < h ? l : h, v = 0; v < y; ++v) {
                  var _ = pe(a[v], s[v]);
                  if (_ !== 0) return _;
                }
                return l === h ? 0 : l < h ? -1 : 1;
              }(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function ci(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = Xe(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function li(e) {
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
      var fi = (Te.prototype._trans = function(e, t, r) {
        var o = this._tx || z.trans, a = this.name, s = ee && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function l(v, _, d) {
          if (!d.schema[a]) throw new R.NotFound("Table " + a + " not part of transaction");
          return t(d.idbtrans, d);
        }
        var h = zt();
        try {
          var y = o && o.db._novip === this.db._novip ? o === z.trans ? o._promise(e, l, r) : Et(function() {
            return o._promise(e, l, r);
          }, { trans: o, transless: z.transless || z }) : function v(_, d, T, m) {
            if (_.idbdb && (_._state.openComplete || z.letThrough || _._vip)) {
              var g = _._createTransaction(d, T, _._dbSchema);
              try {
                g.create(), _._state.PR1398_maxLoop = 3;
              } catch (x) {
                return x.name === P.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                  return v(_, d, T, m);
                })) : De(x);
              }
              return g._promise(d, function(x, w) {
                return Et(function() {
                  return z.trans = g, m(x, w, g);
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
            if (_._state.openComplete) return De(new R.DatabaseClosed(_._state.dbOpenError));
            if (!_._state.isBeingOpened) {
              if (!_._state.autoOpen) return De(new R.DatabaseClosed());
              _.open().catch(S);
            }
            return _._state.dbReadyPromise.then(function() {
              return v(_, d, T, m);
            });
          }(this.db, e, [this.name], l);
          return s && (y._consoleTask = s, y = y.catch(function(v) {
            return console.trace(v), De(v);
          })), y;
        } finally {
          h && Qt();
        }
      }, Te.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? De(new R.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(a) {
            return r.hook.reading.fire(a);
          });
        }).then(t);
      }, Te.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (A(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = E(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var r = this.schema.indexes.concat(this.schema.primKey).filter(function(h) {
          if (h.compound && t.every(function(v) {
            return 0 <= h.keyPath.indexOf(v);
          })) {
            for (var y = 0; y < t.length; ++y) if (t.indexOf(h.keyPath[y]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(h, y) {
          return h.keyPath.length - y.keyPath.length;
        })[0];
        if (r && this.db._maxKey !== jt) {
          var s = r.keyPath.slice(0, t.length);
          return this.where(s).equals(s.map(function(y) {
            return e[y];
          }));
        }
        !r && ee && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var o = this.schema.idxByName;
        function a(h, y) {
          return pe(h, y) === 0;
        }
        var l = t.reduce(function(d, y) {
          var v = d[0], _ = d[1], d = o[y], T = e[y];
          return [v || d, v || !d ? Ft(_, d && d.multi ? function(m) {
            return m = Ce(m, y), A(m) && m.some(function(g) {
              return a(T, g);
            });
          } : function(m) {
            return a(T, Ce(m, y));
          }) : _];
        }, [null, null]), s = l[0], l = l[1];
        return s ? this.where(s.name).equals(e[s.keyPath]).filter(l) : r ? this.filter(l) : this.where(t).equals("");
      }, Te.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, Te.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, Te.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, Te.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, Te.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, Te.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, Te.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Te.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, A(e) ? "[".concat(e.join("+"), "]") : e));
      }, Te.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Te.prototype.mapToClass = function(e) {
        var t, r = this.db, o = this.name;
        function a() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof ui && (function(y, v) {
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
        for (var s = /* @__PURE__ */ new Set(), l = e.prototype; l; l = F(l)) Object.getOwnPropertyNames(l).forEach(function(y) {
          return s.add(y);
        });
        function h(y) {
          if (!y) return y;
          var v, _ = Object.create(e.prototype);
          for (v in y) if (!s.has(v)) try {
            _[v] = y[v];
          } catch {
          }
          return _;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = h, this.hook("reading", h), e;
      }, Te.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          N(this, e);
        });
      }, Te.prototype.add = function(e, t) {
        var r = this, o = this.schema.primKey, a = o.auto, s = o.keyPath, l = e;
        return s && a && (l = Nn(s)(e)), this._trans("readwrite", function(h) {
          return r.core.mutate({ trans: h, type: "add", keys: t != null ? [t] : null, values: [l] });
        }).then(function(h) {
          return h.numFailures ? H.reject(h.failures[0]) : h.lastResult;
        }).then(function(h) {
          if (s) try {
            J(e, s, h);
          } catch {
          }
          return h;
        });
      }, Te.prototype.update = function(e, t) {
        return typeof e != "object" || A(e) ? this.where(":id").equals(e).modify(t) : (e = Ce(e, this.schema.primKey.keyPath), e === void 0 ? De(new R.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, Te.prototype.put = function(e, t) {
        var r = this, o = this.schema.primKey, a = o.auto, s = o.keyPath, l = e;
        return s && a && (l = Nn(s)(e)), this._trans("readwrite", function(h) {
          return r.core.mutate({ trans: h, type: "put", values: [l], keys: t != null ? [t] : null });
        }).then(function(h) {
          return h.numFailures ? H.reject(h.failures[0]) : h.lastResult;
        }).then(function(h) {
          if (s) try {
            J(e, s, h);
          } catch {
          }
          return h;
        });
      }, Te.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: [e] }).then(function(o) {
            return Dn(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? H.reject(o.failures[0]) : void 0;
          });
        });
      }, Te.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: si }).then(function(r) {
            return Dn(e, null, r);
          });
        }).then(function(t) {
          return t.numFailures ? H.reject(t.failures[0]) : void 0;
        });
      }, Te.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(r) {
          return t.core.getMany({ keys: e, trans: r }).then(function(o) {
            return o.map(function(a) {
              return t.hook.reading.fire(a);
            });
          });
        });
      }, Te.prototype.bulkAdd = function(e, t, r) {
        var o = this, a = Array.isArray(t) ? t : void 0, s = (r = r || (a ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var v = o.schema.primKey, h = v.auto, v = v.keyPath;
          if (v && a) throw new R.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new R.InvalidArgument("Arguments objects and keys must have the same length");
          var y = e.length, v = v && h ? e.map(Nn(v)) : e;
          return o.core.mutate({ trans: l, type: "add", keys: a, values: v, wantResults: s }).then(function(g) {
            var d = g.numFailures, T = g.results, m = g.lastResult, g = g.failures;
            if (d === 0) return s ? T : m;
            throw new ht("".concat(o.name, ".bulkAdd(): ").concat(d, " of ").concat(y, " operations failed"), g);
          });
        });
      }, Te.prototype.bulkPut = function(e, t, r) {
        var o = this, a = Array.isArray(t) ? t : void 0, s = (r = r || (a ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var v = o.schema.primKey, h = v.auto, v = v.keyPath;
          if (v && a) throw new R.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new R.InvalidArgument("Arguments objects and keys must have the same length");
          var y = e.length, v = v && h ? e.map(Nn(v)) : e;
          return o.core.mutate({ trans: l, type: "put", keys: a, values: v, wantResults: s }).then(function(g) {
            var d = g.numFailures, T = g.results, m = g.lastResult, g = g.failures;
            if (d === 0) return s ? T : m;
            throw new ht("".concat(o.name, ".bulkPut(): ").concat(d, " of ").concat(y, " operations failed"), g);
          });
        });
      }, Te.prototype.bulkUpdate = function(e) {
        var t = this, r = this.core, o = e.map(function(l) {
          return l.key;
        }), a = e.map(function(l) {
          return l.changes;
        }), s = [];
        return this._trans("readwrite", function(l) {
          return r.getMany({ trans: l, keys: o, cache: "clone" }).then(function(h) {
            var y = [], v = [];
            e.forEach(function(d, T) {
              var m = d.key, g = d.changes, x = h[T];
              if (x) {
                for (var w = 0, O = Object.keys(g); w < O.length; w++) {
                  var C = O[w], I = g[C];
                  if (C === t.schema.primKey.keyPath) {
                    if (pe(I, m) !== 0) throw new R.Constraint("Cannot update primary key in bulkUpdate()");
                  } else J(x, C, I);
                }
                s.push(T), y.push(m), v.push(x);
              }
            });
            var _ = y.length;
            return r.mutate({ trans: l, type: "put", keys: y, values: v, updates: { keys: o, changeSpecs: a } }).then(function(d) {
              var T = d.numFailures, m = d.failures;
              if (T === 0) return _;
              for (var g = 0, x = Object.keys(m); g < x.length; g++) {
                var w, O = x[g], C = s[Number(O)];
                C != null && (w = m[O], delete m[O], m[C] = w);
              }
              throw new ht("".concat(t.name, ".bulkUpdate(): ").concat(T, " of ").concat(_, " operations failed"), m);
            });
          });
        });
      }, Te.prototype.bulkDelete = function(e) {
        var t = this, r = e.length;
        return this._trans("readwrite", function(o) {
          return t.core.mutate({ trans: o, type: "delete", keys: e }).then(function(a) {
            return Dn(t, e, a);
          });
        }).then(function(l) {
          var a = l.numFailures, s = l.lastResult, l = l.failures;
          if (a === 0) return s;
          throw new ht("".concat(t.name, ".bulkDelete(): ").concat(a, " of ").concat(r, " operations failed"), l);
        });
      }, Te);
      function Te() {
      }
      function sn(e) {
        function t(l, h) {
          if (h) {
            for (var y = arguments.length, v = new Array(y - 1); --y; ) v[y - 1] = arguments[y];
            return r[l].subscribe.apply(null, v), e;
          }
          if (typeof l == "string") return r[l];
        }
        var r = {};
        t.addEventType = s;
        for (var o = 1, a = arguments.length; o < a; ++o) s(arguments[o]);
        return t;
        function s(l, h, y) {
          if (typeof l != "object") {
            var v;
            h = h || le;
            var _ = { subscribers: [], fire: y = y || S, subscribe: function(d) {
              _.subscribers.indexOf(d) === -1 && (_.subscribers.push(d), _.fire = h(_.fire, d));
            }, unsubscribe: function(d) {
              _.subscribers = _.subscribers.filter(function(T) {
                return T !== d;
              }), _.fire = _.subscribers.reduce(h, y);
            } };
            return r[l] = t[l] = _;
          }
          E(v = l).forEach(function(d) {
            var T = v[d];
            if (A(T)) s(d, v[d][0], v[d][1]);
            else {
              if (T !== "asap") throw new R.InvalidArgument("Invalid event config");
              var m = s(d, K, function() {
                for (var g = arguments.length, x = new Array(g); g--; ) x[g] = arguments[g];
                m.subscribers.forEach(function(w) {
                  qe(function() {
                    w.apply(null, x);
                  });
                });
              });
            }
          });
        }
      }
      function un(e, t) {
        return he(t).from({ prototype: e }), t;
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
        if (!r) throw new R.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return r;
      }
      function hi(e, t, r) {
        var o = Rn(e, t.schema);
        return t.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: o, range: e.range } });
      }
      function Kn(e, t, r, o) {
        var a = e.replayFilter ? Ft(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var s = {}, l = function(h, y, v) {
            var _, d;
            a && !a(y, v, function(T) {
              return y.stop(T);
            }, function(T) {
              return y.fail(T);
            }) || ((d = "" + (_ = y.primaryKey)) == "[object ArrayBuffer]" && (d = "" + new Uint8Array(_)), M(s, d) || (s[d] = !0, t(h, y, v)));
          };
          return Promise.all([e.or._iterate(l, r), di(hi(e, o, r), e.algorithm, l, !e.keysOnly && e.valueMapper)]);
        }
        return di(hi(e, o, r), Ft(e.algorithm, a), t, !e.keysOnly && e.valueMapper);
      }
      function di(e, t, r, o) {
        var a = Ae(o ? function(s, l, h) {
          return r(o(s), l, h);
        } : r);
        return e.then(function(s) {
          if (s) return s.start(function() {
            var l = function() {
              return s.continue();
            };
            t && !t(s, function(h) {
              return l = h;
            }, function(h) {
              s.stop(h), l = S;
            }, function(h) {
              s.fail(h), l = S;
            }) || a(s.value, s, function(h) {
              return l = h;
            }), l();
          });
        });
      }
      var cn = (pi.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var r = t.add;
          if (A(r)) return f(f([], A(e) ? e : [], !0), r).sort();
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
          if (A(o)) return A(e) ? e.filter(function(a) {
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
      }, pi);
      function pi(e) {
        this["@@propmod"] = e;
      }
      var Do = (me.prototype._read = function(e, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, De.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, me.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, De.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
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
        function s(y, v) {
          return v ? s(y[r[v]], v - 1) : y[o];
        }
        var l = this._ctx.dir === "next" ? 1 : -1;
        function h(y, v) {
          return pe(s(y, a), s(v, a)) * l;
        }
        return this.toArray(function(y) {
          return y.sort(h);
        }).then(t);
      }, me.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx;
          if (o.dir === "next" && en(o, !0) && 0 < o.limit) {
            var a = o.valueMapper, s = Rn(o, o.table.core.schema);
            return o.table.core.query({ trans: r, limit: o.limit, values: !0, query: { index: s, range: o.range } }).then(function(h) {
              return h = h.result, a ? h.map(a) : h;
            });
          }
          var l = [];
          return Kn(o, function(h) {
            return l.push(h);
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
          var o = a.primaryKey.toString(), a = M(t, o);
          return t[o] = !0, !a;
        }), this;
      }, me.prototype.modify = function(e) {
        var t = this, r = this._ctx;
        return this._write(function(o) {
          var a, s, l;
          l = typeof e == "function" ? e : (a = E(e), s = a.length, function(O) {
            for (var C = !1, I = 0; I < s; ++I) {
              var k = a[I], B = e[k], V = Ce(O, k);
              B instanceof cn ? (J(O, k, B.execute(V)), C = !0) : V !== B && (J(O, k, B), C = !0);
            }
            return C;
          });
          var h = r.table.core, d = h.schema.primaryKey, y = d.outbound, v = d.extractKey, _ = 200, d = t.db._options.modifyChunkSize;
          d && (_ = typeof d == "object" ? d[h.name] || d["*"] || 200 : d);
          function T(O, k) {
            var I = k.failures, k = k.numFailures;
            g += O - k;
            for (var B = 0, V = E(I); B < V.length; B++) {
              var q = V[B];
              m.push(I[q]);
            }
          }
          var m = [], g = 0, x = [], w = e === yi;
          return t.clone().primaryKeys().then(function(O) {
            function C(k) {
              var B = Math.min(_, O.length - k), V = O.slice(k, k + B);
              return (w ? Promise.resolve([]) : h.getMany({ trans: o, keys: V, cache: "immutable" })).then(function(q) {
                var U = [], W = [], $ = y ? [] : null, G = w ? V : [];
                if (!w) for (var ce = 0; ce < B; ++ce) {
                  var ye = q[ce], ae = { value: je(ye), primKey: O[k + ce] };
                  l.call(ae, ae.value, ae) !== !1 && (ae.value == null ? G.push(O[k + ce]) : y || pe(v(ye), v(ae.value)) === 0 ? (W.push(ae.value), y && $.push(O[k + ce])) : (G.push(O[k + ce]), U.push(ae.value)));
                }
                return Promise.resolve(0 < U.length && h.mutate({ trans: o, type: "add", values: U }).then(function(Ie) {
                  for (var oe in Ie.failures) G.splice(parseInt(oe), 1);
                  T(U.length, Ie);
                })).then(function() {
                  return (0 < W.length || I && typeof e == "object") && h.mutate({ trans: o, type: "put", keys: $, values: W, criteria: I, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < k }).then(function(Ie) {
                    return T(W.length, Ie);
                  });
                }).then(function() {
                  return (0 < G.length || I && w) && h.mutate({ trans: o, type: "delete", keys: G, criteria: I, isAdditionalChunk: 0 < k }).then(function(Ie) {
                    return Dn(r.table, G, Ie);
                  }).then(function(Ie) {
                    return T(G.length, Ie);
                  });
                }).then(function() {
                  return O.length > k + B && C(k + _);
                });
              });
            }
            var I = en(r) && r.limit === 1 / 0 && (typeof e != "function" || w) && { index: r.index, range: r.range };
            return C(0).then(function() {
              if (0 < m.length) throw new Gt("Error modifying one or more objects", m, g, x);
              return O.length;
            });
          });
        });
      }, me.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !en(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(yi) : this._write(function(r) {
          var o = e.table.core.schema.primaryKey, a = t;
          return e.table.core.count({ trans: r, query: { index: o, range: a } }).then(function(s) {
            return e.table.core.mutate({ trans: r, type: "deleteRange", range: a }).then(function(y) {
              var h = y.failures, y = y.numFailures;
              if (y) throw new Gt("Could not delete some values", Object.keys(h).map(function(v) {
                return h[v];
              }), s - y);
              return s - y;
            });
          });
        });
      }, me);
      function me() {
      }
      var yi = function(e, t) {
        return t.value = null;
      };
      function Ro(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function Ko(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function nt(e, t, r) {
        return e = e instanceof vi ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function tn(e) {
        return new e.Collection(e, function() {
          return mi("");
        }).limit(0);
      }
      function jn(e, t, r, o) {
        var a, s, l, h, y, v, _, d = r.length;
        if (!r.every(function(g) {
          return typeof g == "string";
        })) return nt(e, ai);
        function T(g) {
          a = g === "next" ? function(w) {
            return w.toUpperCase();
          } : function(w) {
            return w.toLowerCase();
          }, s = g === "next" ? function(w) {
            return w.toLowerCase();
          } : function(w) {
            return w.toUpperCase();
          }, l = g === "next" ? Ro : Ko;
          var x = r.map(function(w) {
            return { lower: s(w), upper: a(w) };
          }).sort(function(w, O) {
            return l(w.lower, O.lower);
          });
          h = x.map(function(w) {
            return w.upper;
          }), y = x.map(function(w) {
            return w.lower;
          }), _ = (v = g) === "next" ? "" : o;
        }
        T("next"), e = new e.Collection(e, function() {
          return St(h[0], y[d - 1] + o);
        }), e._ondirectionchange = function(g) {
          T(g);
        };
        var m = 0;
        return e._addAlgorithm(function(g, x, w) {
          var O = g.key;
          if (typeof O != "string") return !1;
          var C = s(O);
          if (t(C, y, m)) return !0;
          for (var I = null, k = m; k < d; ++k) {
            var B = function(V, q, U, W, $, G) {
              for (var ce = Math.min(V.length, W.length), ye = -1, ae = 0; ae < ce; ++ae) {
                var Ie = q[ae];
                if (Ie !== W[ae]) return $(V[ae], U[ae]) < 0 ? V.substr(0, ae) + U[ae] + U.substr(ae + 1) : $(V[ae], W[ae]) < 0 ? V.substr(0, ae) + W[ae] + U.substr(ae + 1) : 0 <= ye ? V.substr(0, ye) + q[ye] + U.substr(ye + 1) : null;
                $(V[ae], Ie) < 0 && (ye = ae);
              }
              return ce < W.length && G === "next" ? V + U.substr(V.length) : ce < V.length && G === "prev" ? V.substr(0, U.length) : ye < 0 ? null : V.substr(0, ye) + W[ye] + U.substr(ye + 1);
            }(O, C, h[k], y[k], l, v);
            B === null && I === null ? m = k + 1 : (I === null || 0 < l(I, B)) && (I = B);
          }
          return x(I !== null ? function() {
            g.continue(I + _);
          } : w), !1;
        }), e;
      }
      function St(e, t, r, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: o };
      }
      function mi(e) {
        return { type: 1, lower: e, upper: e };
      }
      var vi = (Object.defineProperty($e.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), $e.prototype.between = function(e, t, r, o) {
        r = r !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || o) && (!r || !o) ? tn(this) : new this.Collection(this, function() {
            return St(e, t, !r, !o);
          });
        } catch {
          return nt(this, mt);
        }
      }, $e.prototype.equals = function(e) {
        return e == null ? nt(this, mt) : new this.Collection(this, function() {
          return mi(e);
        });
      }, $e.prototype.above = function(e) {
        return e == null ? nt(this, mt) : new this.Collection(this, function() {
          return St(e, void 0, !0);
        });
      }, $e.prototype.aboveOrEqual = function(e) {
        return e == null ? nt(this, mt) : new this.Collection(this, function() {
          return St(e, void 0, !1);
        });
      }, $e.prototype.below = function(e) {
        return e == null ? nt(this, mt) : new this.Collection(this, function() {
          return St(void 0, e, !1, !0);
        });
      }, $e.prototype.belowOrEqual = function(e) {
        return e == null ? nt(this, mt) : new this.Collection(this, function() {
          return St(void 0, e);
        });
      }, $e.prototype.startsWith = function(e) {
        return typeof e != "string" ? nt(this, ai) : this.between(e, e + jt, !0, !0);
      }, $e.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : jn(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], jt);
      }, $e.prototype.equalsIgnoreCase = function(e) {
        return jn(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, $e.prototype.anyOfIgnoreCase = function() {
        var e = et.apply(st, arguments);
        return e.length === 0 ? tn(this) : jn(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, $e.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = et.apply(st, arguments);
        return e.length === 0 ? tn(this) : jn(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, jt);
      }, $e.prototype.anyOf = function() {
        var e = this, t = et.apply(st, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return nt(this, mt);
        }
        if (t.length === 0) return tn(this);
        var o = new this.Collection(this, function() {
          return St(t[0], t[t.length - 1]);
        });
        o._ondirectionchange = function(s) {
          r = s === "next" ? e._ascending : e._descending, t.sort(r);
        };
        var a = 0;
        return o._addAlgorithm(function(s, l, h) {
          for (var y = s.key; 0 < r(y, t[a]); ) if (++a === t.length) return l(h), !1;
          return r(y, t[a]) === 0 || (l(function() {
            s.continue(t[a]);
          }), !1);
        }), o;
      }, $e.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, $e.prototype.noneOf = function() {
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
      }, $e.prototype.inAnyRange = function(O, t) {
        var r = this, o = this._cmp, a = this._ascending, s = this._descending, l = this._min, h = this._max;
        if (O.length === 0) return tn(this);
        if (!O.every(function(C) {
          return C[0] !== void 0 && C[1] !== void 0 && a(C[0], C[1]) <= 0;
        })) return nt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", R.InvalidArgument);
        var y = !t || t.includeLowers !== !1, v = t && t.includeUppers === !0, _, d = a;
        function T(C, I) {
          return d(C[0], I[0]);
        }
        try {
          (_ = O.reduce(function(C, I) {
            for (var k = 0, B = C.length; k < B; ++k) {
              var V = C[k];
              if (o(I[0], V[1]) < 0 && 0 < o(I[1], V[0])) {
                V[0] = l(V[0], I[0]), V[1] = h(V[1], I[1]);
                break;
              }
            }
            return k === B && C.push(I), C;
          }, [])).sort(T);
        } catch {
          return nt(this, mt);
        }
        var m = 0, g = v ? function(C) {
          return 0 < a(C, _[m][1]);
        } : function(C) {
          return 0 <= a(C, _[m][1]);
        }, x = y ? function(C) {
          return 0 < s(C, _[m][0]);
        } : function(C) {
          return 0 <= s(C, _[m][0]);
        }, w = g, O = new this.Collection(this, function() {
          return St(_[0][0], _[_.length - 1][1], !y, !v);
        });
        return O._ondirectionchange = function(C) {
          d = C === "next" ? (w = g, a) : (w = x, s), _.sort(T);
        }, O._addAlgorithm(function(C, I, k) {
          for (var B, V = C.key; w(V); ) if (++m === _.length) return I(k), !1;
          return !g(B = V) && !x(B) || (r._cmp(V, _[m][1]) === 0 || r._cmp(V, _[m][0]) === 0 || I(function() {
            d === a ? C.continue(_[m][0]) : C.continue(_[m][1]);
          }), !1);
        }), O;
      }, $e.prototype.startsWithAnyOf = function() {
        var e = et.apply(st, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? tn(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + jt];
        })) : nt(this, "startsWithAnyOf() only works with strings");
      }, $e);
      function $e() {
      }
      function dt(e) {
        return Ae(function(t) {
          return ln(t), e(t.target.error), !1;
        });
      }
      function ln(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var fn = "storagemutated", vr = "x-storagemutated-1", Pt = sn(null, fn), jo = (pt.prototype._lock = function() {
        return de(!z.global), ++this._reculock, this._reculock !== 1 || z.global || (z.lockOwnerFor = this), this;
      }, pt.prototype._unlock = function() {
        if (de(!z.global), --this._reculock == 0) for (z.global || (z.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Kt(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, pt.prototype._locked = function() {
        return this._reculock && z.lockOwnerFor !== this;
      }, pt.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var r = this.db.idbdb, o = this.db._state.dbOpenError;
        if (de(!this.idbtrans), !e && !r) switch (o && o.name) {
          case "DatabaseClosedError":
            throw new R.DatabaseClosed(o);
          case "MissingAPIError":
            throw new R.MissingAPI(o.message, o);
          default:
            throw new R.OpenFailed(o);
        }
        if (!this.active) throw new R.TransactionInactive();
        return de(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Ae(function(a) {
          ln(a), t._reject(e.error);
        }), e.onabort = Ae(function(a) {
          ln(a), t.active && t._reject(new R.Abort(e.error)), t.active = !1, t.on("abort").fire(a);
        }), e.oncomplete = Ae(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && Pt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, pt.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return De(new R.ReadOnly("Transaction is readonly"));
        if (!this.active) return De(new R.TransactionInactive());
        if (this._locked()) return new H(function(s, l) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, r).then(s, l);
          }, z]);
        });
        if (r) return Et(function() {
          var s = new H(function(l, h) {
            o._lock();
            var y = t(l, h, o);
            y && y.then && y.then(l, h);
          });
          return s.finally(function() {
            return o._unlock();
          }), s._lib = !0, s;
        });
        var a = new H(function(s, l) {
          var h = t(s, l, o);
          h && h.then && h.then(s, l);
        });
        return a._lib = !0, a;
      }, pt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, pt.prototype.waitFor = function(e) {
        var t, r = this._root(), o = H.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return o;
        }) : (r._waitingFor = o, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function s() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (t.get(-1 / 0).onsuccess = s);
        }());
        var a = r._waitingFor;
        return new H(function(s, l) {
          o.then(function(h) {
            return r._waitingQueue.push(Ae(s.bind(null, h)));
          }, function(h) {
            return r._waitingQueue.push(Ae(l.bind(null, h)));
          }).finally(function() {
            r._waitingFor === a && (r._waitingFor = null);
          });
        });
      }, pt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new R.Abort()));
      }, pt.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (M(t, e)) return t[e];
        var r = this.schema[e];
        if (!r) throw new R.NotFound("Table " + e + " not part of transaction");
        return r = new this.db.Table(e, r, this), r.core = this.db.core.table(e), t[e] = r;
      }, pt);
      function pt() {
      }
      function gr(e, t, r, o, a, s, l, h) {
        return { name: e, keyPath: t, unique: r, multi: o, auto: a, compound: s, src: (r && !l ? "&" : "") + (o ? "*" : "") + (a ? "++" : "") + gi(t), type: h };
      }
      function gi(e) {
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
          return Ce(r, t);
        } : function(r) {
          return Ce(r, e);
        };
        var t;
      }
      function bi(e) {
        return [].slice.call(e);
      }
      var Fo = 0;
      function dn(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Bo(e, t, y) {
        function o(w) {
          if (w.type === 3) return null;
          if (w.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var m = w.lower, g = w.upper, x = w.lowerOpen, w = w.upperOpen;
          return m === void 0 ? g === void 0 ? null : t.upperBound(g, !!w) : g === void 0 ? t.lowerBound(m, !!x) : t.bound(m, g, !!x, !!w);
        }
        function a(T) {
          var m, g = T.name;
          return { name: g, schema: T, mutate: function(x) {
            var w = x.trans, O = x.type, C = x.keys, I = x.values, k = x.range;
            return new Promise(function(B, V) {
              B = Ae(B);
              var q = w.objectStore(g), U = q.keyPath == null, W = O === "put" || O === "add";
              if (!W && O !== "delete" && O !== "deleteRange") throw new Error("Invalid operation type: " + O);
              var $, G = (C || I || { length: 1 }).length;
              if (C && I && C.length !== I.length) throw new Error("Given keys array must have same length as given values array.");
              if (G === 0) return B({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function ce(Qe) {
                ++Ie, ln(Qe);
              }
              var ye = [], ae = [], Ie = 0;
              if (O === "deleteRange") {
                if (k.type === 4) return B({ numFailures: Ie, failures: ae, results: [], lastResult: void 0 });
                k.type === 3 ? ye.push($ = q.clear()) : ye.push($ = q.delete(o(k)));
              } else {
                var U = W ? U ? [I, C] : [I, null] : [C, null], oe = U[0], He = U[1];
                if (W) for (var Ge = 0; Ge < G; ++Ge) ye.push($ = He && He[Ge] !== void 0 ? q[O](oe[Ge], He[Ge]) : q[O](oe[Ge])), $.onerror = ce;
                else for (Ge = 0; Ge < G; ++Ge) ye.push($ = q[O](oe[Ge])), $.onerror = ce;
              }
              function Yn(Qe) {
                Qe = Qe.target.result, ye.forEach(function(qt, Br) {
                  return qt.error != null && (ae[Br] = qt.error);
                }), B({ numFailures: Ie, failures: ae, results: O === "delete" ? C : ye.map(function(qt) {
                  return qt.result;
                }), lastResult: Qe });
              }
              $.onerror = function(Qe) {
                ce(Qe), Yn(Qe);
              }, $.onsuccess = Yn;
            });
          }, getMany: function(x) {
            var w = x.trans, O = x.keys;
            return new Promise(function(C, I) {
              C = Ae(C);
              for (var k, B = w.objectStore(g), V = O.length, q = new Array(V), U = 0, W = 0, $ = function(ye) {
                ye = ye.target, q[ye._pos] = ye.result, ++W === U && C(q);
              }, G = dt(I), ce = 0; ce < V; ++ce) O[ce] != null && ((k = B.get(O[ce]))._pos = ce, k.onsuccess = $, k.onerror = G, ++U);
              U === 0 && C(q);
            });
          }, get: function(x) {
            var w = x.trans, O = x.key;
            return new Promise(function(C, I) {
              C = Ae(C);
              var k = w.objectStore(g).get(O);
              k.onsuccess = function(B) {
                return C(B.target.result);
              }, k.onerror = dt(I);
            });
          }, query: (m = v, function(x) {
            return new Promise(function(w, O) {
              w = Ae(w);
              var C, I, k, U = x.trans, B = x.values, V = x.limit, $ = x.query, q = V === 1 / 0 ? void 0 : V, W = $.index, $ = $.range, U = U.objectStore(g), W = W.isPrimaryKey ? U : U.index(W.name), $ = o($);
              if (V === 0) return w({ result: [] });
              m ? ((q = B ? W.getAll($, q) : W.getAllKeys($, q)).onsuccess = function(G) {
                return w({ result: G.target.result });
              }, q.onerror = dt(O)) : (C = 0, I = !B && "openKeyCursor" in W ? W.openKeyCursor($) : W.openCursor($), k = [], I.onsuccess = function(G) {
                var ce = I.result;
                return ce ? (k.push(B ? ce.value : ce.primaryKey), ++C === V ? w({ result: k }) : void ce.continue()) : w({ result: k });
              }, I.onerror = dt(O));
            });
          }), openCursor: function(x) {
            var w = x.trans, O = x.values, C = x.query, I = x.reverse, k = x.unique;
            return new Promise(function(B, V) {
              B = Ae(B);
              var W = C.index, q = C.range, U = w.objectStore(g), U = W.isPrimaryKey ? U : U.index(W.name), W = I ? k ? "prevunique" : "prev" : k ? "nextunique" : "next", $ = !O && "openKeyCursor" in U ? U.openKeyCursor(o(q), W) : U.openCursor(o(q), W);
              $.onerror = dt(V), $.onsuccess = Ae(function(G) {
                var ce, ye, ae, Ie, oe = $.result;
                oe ? (oe.___id = ++Fo, oe.done = !1, ce = oe.continue.bind(oe), ye = (ye = oe.continuePrimaryKey) && ye.bind(oe), ae = oe.advance.bind(oe), Ie = function() {
                  throw new Error("Cursor not stopped");
                }, oe.trans = w, oe.stop = oe.continue = oe.continuePrimaryKey = oe.advance = function() {
                  throw new Error("Cursor not started");
                }, oe.fail = Ae(V), oe.next = function() {
                  var He = this, Ge = 1;
                  return this.start(function() {
                    return Ge-- ? He.continue() : He.stop();
                  }).then(function() {
                    return He;
                  });
                }, oe.start = function(He) {
                  function Ge() {
                    if ($.result) try {
                      He();
                    } catch (Qe) {
                      oe.fail(Qe);
                    }
                    else oe.done = !0, oe.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, oe.stop();
                  }
                  var Yn = new Promise(function(Qe, qt) {
                    Qe = Ae(Qe), $.onerror = dt(qt), oe.fail = qt, oe.stop = function(Br) {
                      oe.stop = oe.continue = oe.continuePrimaryKey = oe.advance = Ie, Qe(Br);
                    };
                  });
                  return $.onsuccess = Ae(function(Qe) {
                    $.onsuccess = Ge, Ge();
                  }), oe.continue = ce, oe.continuePrimaryKey = ye, oe.advance = ae, Ge(), Yn;
                }, B(oe)) : B(null);
              }, V);
            });
          }, count: function(x) {
            var w = x.query, O = x.trans, C = w.index, I = w.range;
            return new Promise(function(k, B) {
              var V = O.objectStore(g), q = C.isPrimaryKey ? V : V.index(C.name), V = o(I), q = V ? q.count(V) : q.count();
              q.onsuccess = Ae(function(U) {
                return k(U.target.result);
              }), q.onerror = dt(B);
            });
          } };
        }
        var s, l, h, _ = (l = y, h = bi((s = e).objectStoreNames), { schema: { name: s.name, tables: h.map(function(T) {
          return l.objectStore(T);
        }).map(function(T) {
          var m = T.keyPath, w = T.autoIncrement, g = A(m), x = {}, w = { name: T.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: m == null, compound: g, keyPath: m, autoIncrement: w, unique: !0, extractKey: _r(m) }, indexes: bi(T.indexNames).map(function(O) {
            return T.index(O);
          }).map(function(k) {
            var C = k.name, I = k.unique, B = k.multiEntry, k = k.keyPath, B = { name: C, compound: A(k), keyPath: k, unique: I, multiEntry: B, extractKey: _r(k) };
            return x[dn(k)] = B;
          }), getIndexByKeyPath: function(O) {
            return x[dn(O)];
          } };
          return x[":id"] = w.primaryKey, m != null && (x[dn(m)] = w.primaryKey), w;
        }) }, hasGetAll: 0 < h.length && "getAll" in l.objectStore(h[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), y = _.schema, v = _.hasGetAll, _ = y.tables.map(a), d = {};
        return _.forEach(function(T) {
          return d[T.name] = T;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(T) {
          if (!d[T]) throw new Error("Table '".concat(T, "' not found"));
          return d[T];
        }, MIN_KEY: -1 / 0, MAX_KEY: hn(t), schema: y };
      }
      function Mo(e, t, r, o) {
        var a = r.IDBKeyRange;
        return r.indexedDB, { dbcore: (o = Bo(t, a, o), e.dbcore.reduce(function(s, l) {
          return l = l.create, c(c({}, s), l(s));
        }, o)) };
      }
      function Fn(e, o) {
        var r = o.db, o = Mo(e._middlewares, r, e._deps, o);
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
            var h = function y(v, _) {
              return Me(v, _) || (v = F(v)) && y(v, _);
            }(l, a);
            (!h || "value" in h && h.value === void 0) && (l === e.Transaction.prototype || l instanceof e.Transaction ? ue(l, a, { get: function() {
              return this.table(a);
            }, set: function(y) {
              ne(this, a, { value: y, writable: !0, configurable: !0, enumerable: !0 });
            } }) : l[a] = new e.Table(a, s));
          });
        });
      }
      function wr(e, t) {
        t.forEach(function(r) {
          for (var o in r) r[o] instanceof e.Table && delete r[o];
        });
      }
      function qo(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function Lo(e, t, r, o) {
        var a = e._dbSchema;
        r.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = br("$meta", wi("")[0], []), e._storeNames.push("$meta"));
        var s = e._createTransaction("readwrite", e._storeNames, a);
        s.create(r), s._completion.catch(o);
        var l = s._reject.bind(s), h = z.transless || z;
        Et(function() {
          return z.trans = s, z.transless = h, t !== 0 ? (Fn(e, r), v = t, ((y = s).storeNames.includes("$meta") ? y.table("$meta").get("version").then(function(_) {
            return _ ?? v;
          }) : H.resolve(v)).then(function(_) {
            return T = _, m = s, g = r, x = [], _ = (d = e)._versions, w = d._dbSchema = qn(0, d.idbdb, g), (_ = _.filter(function(O) {
              return O._cfg.version >= T;
            })).length !== 0 ? (_.forEach(function(O) {
              x.push(function() {
                var C = w, I = O._cfg.dbschema;
                Ln(d, C, g), Ln(d, I, g), w = d._dbSchema = I;
                var k = xr(C, I);
                k.add.forEach(function(W) {
                  Tr(g, W[0], W[1].primKey, W[1].indexes);
                }), k.change.forEach(function(W) {
                  if (W.recreate) throw new R.Upgrade("Not yet support for changing primary key");
                  var $ = g.objectStore(W.name);
                  W.add.forEach(function(G) {
                    return Mn($, G);
                  }), W.change.forEach(function(G) {
                    $.deleteIndex(G.name), Mn($, G);
                  }), W.del.forEach(function(G) {
                    return $.deleteIndex(G);
                  });
                });
                var B = O._cfg.contentUpgrade;
                if (B && O._cfg.version > T) {
                  Fn(d, g), m._memoizedTables = {};
                  var V = re(I);
                  k.del.forEach(function(W) {
                    V[W] = C[W];
                  }), wr(d, [d.Transaction.prototype]), Bn(d, [d.Transaction.prototype], E(V), V), m.schema = V;
                  var q, U = ct(B);
                  return U && Jt(), k = H.follow(function() {
                    var W;
                    (q = B(m)) && U && (W = Ot.bind(null, null), q.then(W, W));
                  }), q && typeof q.then == "function" ? H.resolve(q) : k.then(function() {
                    return q;
                  });
                }
              }), x.push(function(C) {
                var I, k, B = O._cfg.dbschema;
                I = B, k = C, [].slice.call(k.db.objectStoreNames).forEach(function(V) {
                  return I[V] == null && k.db.deleteObjectStore(V);
                }), wr(d, [d.Transaction.prototype]), Bn(d, [d.Transaction.prototype], d._storeNames, d._dbSchema), m.schema = d._dbSchema;
              }), x.push(function(C) {
                d.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(d.idbdb.version / 10) === O._cfg.version ? (d.idbdb.deleteObjectStore("$meta"), delete d._dbSchema.$meta, d._storeNames = d._storeNames.filter(function(I) {
                  return I !== "$meta";
                })) : C.objectStore("$meta").put(O._cfg.version, "version"));
              });
            }), function O() {
              return x.length ? H.resolve(x.shift()(m.idbtrans)).then(O) : H.resolve();
            }().then(function() {
              _i(w, g);
            })) : H.resolve();
            var d, T, m, g, x, w;
          }).catch(l)) : (E(a).forEach(function(_) {
            Tr(r, _, a[_].primKey, a[_].indexes);
          }), Fn(e, r), void H.follow(function() {
            return e.on.populate.fire(s);
          }).catch(l));
          var y, v;
        });
      }
      function Uo(e, t) {
        _i(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var r = qn(0, e.idbdb, t);
        Ln(e, e._dbSchema, t);
        for (var o = 0, a = xr(r, e._dbSchema).change; o < a.length; o++) {
          var s = function(l) {
            if (l.change.length || l.recreate) return console.warn("Unable to patch indexes of table ".concat(l.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var h = t.objectStore(l.name);
            l.add.forEach(function(y) {
              ee && console.debug("Dexie upgrade patch: Creating missing index ".concat(l.name, ".").concat(y.src)), Mn(h, y);
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
              var h = a.idxByName, y = s.idxByName, v = void 0;
              for (v in h) y[v] || l.del.push(v);
              for (v in y) {
                var _ = h[v], d = y[v];
                _ ? _.src !== d.src && l.change.push(d) : l.add.push(d);
              }
              (0 < l.del.length || 0 < l.add.length || 0 < l.change.length) && o.change.push(l);
            }
          } else o.add.push([r, s]);
        }
        return o;
      }
      function Tr(e, t, r, o) {
        var a = e.db.createObjectStore(t, r.keyPath ? { keyPath: r.keyPath, autoIncrement: r.auto } : { autoIncrement: r.auto });
        return o.forEach(function(s) {
          return Mn(a, s);
        }), a;
      }
      function _i(e, t) {
        E(e).forEach(function(r) {
          t.db.objectStoreNames.contains(r) || (ee && console.debug("Dexie: Creating missing table", r), Tr(t, r, e[r].primKey, e[r].indexes));
        });
      }
      function Mn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function qn(e, t, r) {
        var o = {};
        return ke(t.objectStoreNames, 0).forEach(function(a) {
          for (var s = r.objectStore(a), l = gr(gi(v = s.keyPath), v || "", !0, !1, !!s.autoIncrement, v && typeof v != "string", !0), h = [], y = 0; y < s.indexNames.length; ++y) {
            var _ = s.index(s.indexNames[y]), v = _.keyPath, _ = gr(_.name, v, !!_.unique, !!_.multiEntry, !1, v && typeof v != "string", !1);
            h.push(_);
          }
          o[a] = br(a, l, h);
        }), o;
      }
      function Ln(e, t, r) {
        for (var o = r.db.objectStoreNames, a = 0; a < o.length; ++a) {
          var s = o[a], l = r.objectStore(s);
          e._hasGetAll = "getAll" in l;
          for (var h = 0; h < l.indexNames.length; ++h) {
            var y = l.indexNames[h], v = l.index(y).keyPath, _ = typeof v == "string" ? v : "[" + ke(v).join("+") + "]";
            !t[s] || (v = t[s].idxByName[_]) && (v.name = y, delete t[s].idxByName[_], t[s].idxByName[y] = v);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && p.WorkerGlobalScope && p instanceof p.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function wi(e) {
        return e.split(",").map(function(t, r) {
          var s = t.split(":"), o = (a = s[1]) === null || a === void 0 ? void 0 : a.trim(), a = (t = s[0].trim()).replace(/([&*]|\+\+)/g, ""), s = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return gr(a, s || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), A(s), r === 0, o);
        });
      }
      var Vo = (nn.prototype._createTableSchema = br, nn.prototype._parseIndexSyntax = wi, nn.prototype._parseStoresSpec = function(e, t) {
        var r = this;
        E(e).forEach(function(o) {
          if (e[o] !== null) {
            var a = r._parseIndexSyntax(e[o]), s = a.shift();
            if (!s) throw new R.Schema("Invalid schema for table " + o + ": " + e[o]);
            if (s.unique = !0, s.multi) throw new R.Schema("Primary key cannot be multiEntry*");
            a.forEach(function(l) {
              if (l.auto) throw new R.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!l.keyPath) throw new R.Schema("Index must have a name and cannot be an empty string");
            }), a = r._createTableSchema(o, s, a), t[o] = a;
          }
        });
      }, nn.prototype.stores = function(r) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? N(this._cfg.storesSource, r) : r;
        var r = t._versions, o = {}, a = {};
        return r.forEach(function(s) {
          N(o, s._cfg.storesSource), a = s._cfg.dbschema = {}, s._parseStoresSpec(o, a);
        }), t._dbSchema = a, wr(t, [t._allTables, t, t.Transaction.prototype]), Bn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], E(a), a), t._storeNames = E(a), this;
      }, nn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = ie(this._cfg.contentUpgrade || S, e), this;
      }, nn);
      function nn() {
      }
      function Er(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new vt(kn, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function Or(e) {
        return e && typeof e.databases == "function";
      }
      function Ar(e) {
        return Et(function() {
          return z.letThrough = !0, e();
        });
      }
      function Sr(e) {
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
          if (Sr(e)) return N(e, { from: t, to: r, d: 1 });
          var a = e.l, o = e.r;
          if (pe(r, e.from) < 0) return a ? pn(a, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, Ti(e);
          if (0 < pe(t, e.to)) return o ? pn(o, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, Ti(e);
          pe(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < pe(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, a && !e.l && yn(e, a), o && r && yn(e, o);
        }
      }
      function yn(e, t) {
        Sr(t) || function r(o, y) {
          var s = y.from, l = y.to, h = y.l, y = y.r;
          pn(o, s, l), h && r(o, h), y && r(o, y);
        }(e, t);
      }
      function xi(e, t) {
        var r = Un(t), o = r.next();
        if (o.done) return !1;
        for (var a = o.value, s = Un(e), l = s.next(a.from), h = l.value; !o.done && !l.done; ) {
          if (pe(h.from, a.to) <= 0 && 0 <= pe(h.to, a.from)) return !0;
          pe(a.from, h.from) < 0 ? a = (o = r.next(h.from)).value : h = (l = s.next(a.from)).value;
        }
        return !1;
      }
      function Un(e) {
        var t = Sr(e) ? null : { s: 0, n: e };
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
      function Ti(e) {
        var t, r, o = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((r = e.l) === null || r === void 0 ? void 0 : r.d) || 0), a = 1 < o ? "r" : o < -1 ? "l" : "";
        a && (t = a == "r" ? "l" : "r", r = c({}, e), o = e[a], e.from = o.from, e.to = o.to, e[a] = o[a], r[a] = o[t], (e[t] = r).d = Ei(r)), e.d = Ei(e);
      }
      function Ei(r) {
        var t = r.r, r = r.l;
        return (t ? r ? Math.max(t.d, r.d) : t.d : r ? r.d : 0) + 1;
      }
      function Vn(e, t) {
        return E(t).forEach(function(r) {
          e[r] ? yn(e[r], t[r]) : e[r] = function o(a) {
            var s, l, h = {};
            for (s in a) M(a, s) && (l = a[s], h[s] = !l || typeof l != "object" || Se.has(l.constructor) ? l : o(l));
            return h;
          }(t[r]);
        }), e;
      }
      function Pr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && xi(t[r], e[r]);
        });
      }
      X(We.prototype, ((ut = { add: function(e) {
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
      var Bt = {}, Cr = {}, Ir = !1;
      function $n(e) {
        Vn(Cr, e), Ir || (Ir = !0, setTimeout(function() {
          Ir = !1, kr(Cr, !(Cr = {}));
        }, 0));
      }
      function kr(e, t) {
        t === void 0 && (t = !1);
        var r = /* @__PURE__ */ new Set();
        if (e.all) for (var o = 0, a = Object.values(Bt); o < a.length; o++) Oi(l = a[o], e, r, t);
        else for (var s in e) {
          var l, h = /^idb\:\/\/(.*)\/(.*)\//.exec(s);
          h && (s = h[1], h = h[2], (l = Bt["idb://".concat(s, "/").concat(h)]) && Oi(l, e, r, t));
        }
        r.forEach(function(y) {
          return y();
        });
      }
      function Oi(e, t, r, o) {
        for (var a = [], s = 0, l = Object.entries(e.queries.query); s < l.length; s++) {
          for (var h = l[s], y = h[0], v = [], _ = 0, d = h[1]; _ < d.length; _++) {
            var T = d[_];
            Pr(t, T.obsSet) ? T.subscribers.forEach(function(w) {
              return r.add(w);
            }) : o && v.push(T);
          }
          o && a.push([y, v]);
        }
        if (o) for (var m = 0, g = a; m < g.length; m++) {
          var x = g[m], y = x[0], v = x[1];
          e.queries.query[y] = v;
        }
      }
      function $o(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? De(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, a = Math.round(10 * e.verno), s = !1;
        function l() {
          if (t.openCanceller !== o) throw new R.DatabaseClosed("db.open() was cancelled");
        }
        function h() {
          return new H(function(T, m) {
            if (l(), !r) throw new R.MissingAPI();
            var g = e.name, x = t.autoSchema || !a ? r.open(g) : r.open(g, a);
            if (!x) throw new R.MissingAPI();
            x.onerror = dt(m), x.onblocked = Ae(e._fireOnBlocked), x.onupgradeneeded = Ae(function(w) {
              var O;
              _ = x.transaction, t.autoSchema && !e._options.allowEmptyDB ? (x.onerror = ln, _.abort(), x.result.close(), (O = r.deleteDatabase(g)).onsuccess = O.onerror = Ae(function() {
                m(new R.NoSuchDatabase("Database ".concat(g, " doesnt exist")));
              })) : (_.onerror = dt(m), w = w.oldVersion > Math.pow(2, 62) ? 0 : w.oldVersion, d = w < 1, e.idbdb = x.result, s && Uo(e, _), Lo(e, w / 10, _, m));
            }, m), x.onsuccess = Ae(function() {
              _ = null;
              var w, O, C, I, k, B = e.idbdb = x.result, V = ke(B.objectStoreNames);
              if (0 < V.length) try {
                var q = B.transaction((I = V).length === 1 ? I[0] : I, "readonly");
                if (t.autoSchema) O = B, C = q, (w = e).verno = O.version / 10, C = w._dbSchema = qn(0, O, C), w._storeNames = ke(O.objectStoreNames, 0), Bn(w, [w._allTables], E(C), C);
                else if (Ln(e, e._dbSchema, q), ((k = xr(qn(0, (k = e).idbdb, q), k._dbSchema)).add.length || k.change.some(function(U) {
                  return U.add.length || U.change.length;
                })) && !s) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), B.close(), a = B.version + 1, s = !0, T(h());
                Fn(e, q);
              } catch {
              }
              Zt.push(e), B.onversionchange = Ae(function(U) {
                t.vcFired = !0, e.on("versionchange").fire(U);
              }), B.onclose = Ae(function(U) {
                e.on("close").fire(U);
              }), d && (k = e._deps, q = g, B = k.indexedDB, k = k.IDBKeyRange, Or(B) || q === kn || Er(B, k).put({ name: q }).catch(S)), T();
            }, m);
          }).catch(function(T) {
            switch (T?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), h();
                break;
              case "VersionError":
                if (0 < a) return a = 0, h();
            }
            return H.reject(T);
          });
        }
        var y, v = t.dbReadyResolve, _ = null, d = !1;
        return H.race([o, (typeof navigator > "u" ? H.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(T) {
          function m() {
            return indexedDB.databases().finally(T);
          }
          y = setInterval(m, 100), m();
        }).finally(function() {
          return clearInterval(y);
        }) : Promise.resolve()).then(h)]).then(function() {
          return l(), t.onReadyBeingFired = [], H.resolve(Ar(function() {
            return e.on.ready.fire(e.vip);
          })).then(function T() {
            if (0 < t.onReadyBeingFired.length) {
              var m = t.onReadyBeingFired.reduce(ie, S);
              return t.onReadyBeingFired = [], H.resolve(Ar(function() {
                return m(e.vip);
              })).then(T);
            }
          });
        }).finally(function() {
          t.openCanceller === o && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(T) {
          t.dbOpenError = T;
          try {
            _ && _.abort();
          } catch {
          }
          return o === t.openCanceller && e._close(), De(T);
        }).finally(function() {
          t.openComplete = !0, v();
        }).then(function() {
          var T;
          return d && (T = {}, e.tables.forEach(function(m) {
            m.schema.indexes.forEach(function(g) {
              g.name && (T["idb://".concat(e.name, "/").concat(m.name, "/").concat(g.name)] = new We(-1 / 0, [[[]]]));
            }), T["idb://".concat(e.name, "/").concat(m.name, "/")] = T["idb://".concat(e.name, "/").concat(m.name, "/:dels")] = new We(-1 / 0, [[[]]]);
          }), Pt(fn).fire(T), kr(T, !0)), e;
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
            var h = s(y), y = h.value;
            return h.done ? y : y && typeof y.then == "function" ? y.then(r, o) : A(y) ? Promise.all(y).then(r, o) : r(y);
          };
        }
        return a(t)();
      }
      function Wn(e, t, r) {
        for (var o = A(e) ? e.slice() : [e], a = 0; a < r; ++a) o.push(t);
        return o;
      }
      var Wo = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return c(c({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema, a = {}, s = [];
          function l(d, T, m) {
            var g = dn(d), x = a[g] = a[g] || [], w = d == null ? 0 : typeof d == "string" ? 1 : d.length, O = 0 < T, O = c(c({}, m), { name: O ? "".concat(g, "(virtual-from:").concat(m.name, ")") : m.name, lowLevelIndex: m, isVirtual: O, keyTail: T, keyLength: w, extractKey: _r(d), unique: !O && m.unique });
            return x.push(O), O.isPrimaryKey || s.push(O), 1 < w && l(w === 2 ? d[0] : d.slice(0, w - 1), T + 1, m), x.sort(function(C, I) {
              return C.keyTail - I.keyTail;
            }), O;
          }
          t = l(o.primaryKey.keyPath, 0, o.primaryKey), a[":id"] = [t];
          for (var h = 0, y = o.indexes; h < y.length; h++) {
            var v = y[h];
            l(v.keyPath, 0, v);
          }
          function _(d) {
            var T, m = d.query.index;
            return m.isVirtual ? c(c({}, d), { query: { index: m.lowLevelIndex, range: (T = d.query.range, m = m.keyTail, { type: T.type === 1 ? 2 : T.type, lower: Wn(T.lower, T.lowerOpen ? e.MAX_KEY : e.MIN_KEY, m), lowerOpen: !0, upper: Wn(T.upper, T.upperOpen ? e.MIN_KEY : e.MAX_KEY, m), upperOpen: !0 }) } }) : d;
          }
          return c(c({}, r), { schema: c(c({}, o), { primaryKey: t, indexes: s, getIndexByKeyPath: function(d) {
            return (d = a[dn(d)]) && d[0];
          } }), count: function(d) {
            return r.count(_(d));
          }, query: function(d) {
            return r.query(_(d));
          }, openCursor: function(d) {
            var T = d.query.index, m = T.keyTail, g = T.isVirtual, x = T.keyLength;
            return g ? r.openCursor(_(d)).then(function(O) {
              return O && w(O);
            }) : r.openCursor(d);
            function w(O) {
              return Object.create(O, { continue: { value: function(C) {
                C != null ? O.continue(Wn(C, d.reverse ? e.MAX_KEY : e.MIN_KEY, m)) : d.unique ? O.continue(O.key.slice(0, x).concat(d.reverse ? e.MIN_KEY : e.MAX_KEY, m)) : O.continue();
              } }, continuePrimaryKey: { value: function(C, I) {
                O.continuePrimaryKey(Wn(C, e.MAX_KEY, m), I);
              } }, primaryKey: { get: function() {
                return O.primaryKey;
              } }, key: { get: function() {
                var C = O.key;
                return x === 1 ? C[0] : C.slice(0, x);
              } }, value: { get: function() {
                return O.value;
              } } });
            }
          } });
        } });
      } };
      function Dr(e, t, r, o) {
        return r = r || {}, o = o || "", E(e).forEach(function(a) {
          var s, l, h;
          M(t, a) ? (s = e[a], l = t[a], typeof s == "object" && typeof l == "object" && s && l ? (h = Xe(s)) !== Xe(l) ? r[o + a] = t[a] : h === "Object" ? Dr(s, l, r, o + a + ".") : s !== l && (r[o + a] = t[a]) : s !== l && (r[o + a] = t[a])) : r[o + a] = void 0;
        }), E(t).forEach(function(a) {
          M(e, a) || (r[o + a] = t[a]);
        }), r;
      }
      function Rr(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var Ho = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return c(c({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema.primaryKey;
          return c(c({}, r), { mutate: function(a) {
            var s = z.trans, l = s.table(t).hook, h = l.deleting, y = l.creating, v = l.updating;
            switch (a.type) {
              case "add":
                if (y.fire === S) break;
                return s._promise("readwrite", function() {
                  return _(a);
                }, !0);
              case "put":
                if (y.fire === S && v.fire === S) break;
                return s._promise("readwrite", function() {
                  return _(a);
                }, !0);
              case "delete":
                if (h.fire === S) break;
                return s._promise("readwrite", function() {
                  return _(a);
                }, !0);
              case "deleteRange":
                if (h.fire === S) break;
                return s._promise("readwrite", function() {
                  return function d(T, m, g) {
                    return r.query({ trans: T, values: !1, query: { index: o, range: m }, limit: g }).then(function(x) {
                      var w = x.result;
                      return _({ type: "delete", keys: w, trans: T }).then(function(O) {
                        return 0 < O.numFailures ? Promise.reject(O.failures[0]) : w.length < g ? { failures: [], numFailures: 0, lastResult: void 0 } : d(T, c(c({}, m), { lower: w[w.length - 1], lowerOpen: !0 }), g);
                      });
                    });
                  }(a.trans, a.range, 1e4);
                }, !0);
            }
            return r.mutate(a);
            function _(d) {
              var T, m, g, x = z.trans, w = d.keys || Rr(o, d);
              if (!w) throw new Error("Keys missing");
              return (d = d.type === "add" || d.type === "put" ? c(c({}, d), { keys: w }) : c({}, d)).type !== "delete" && (d.values = f([], d.values)), d.keys && (d.keys = f([], d.keys)), T = r, g = w, ((m = d).type === "add" ? Promise.resolve([]) : T.getMany({ trans: m.trans, keys: g, cache: "immutable" })).then(function(O) {
                var C = w.map(function(I, k) {
                  var B, V, q, U = O[k], W = { onerror: null, onsuccess: null };
                  return d.type === "delete" ? h.fire.call(W, I, U, x) : d.type === "add" || U === void 0 ? (B = y.fire.call(W, I, d.values[k], x), I == null && B != null && (d.keys[k] = I = B, o.outbound || J(d.values[k], o.keyPath, I))) : (B = Dr(U, d.values[k]), (V = v.fire.call(W, B, I, U, x)) && (q = d.values[k], Object.keys(V).forEach(function($) {
                    M(q, $) ? q[$] = V[$] : J(q, $, V[$]);
                  }))), W;
                });
                return r.mutate(d).then(function(I) {
                  for (var k = I.failures, B = I.results, V = I.numFailures, I = I.lastResult, q = 0; q < w.length; ++q) {
                    var U = (B || w)[q], W = C[q];
                    U == null ? W.onerror && W.onerror(k[q]) : W.onsuccess && W.onsuccess(d.type === "put" && O[q] ? d.values[q] : U);
                  }
                  return { failures: k, results: B, numFailures: V, lastResult: I };
                }).catch(function(I) {
                  return C.forEach(function(k) {
                    return k.onerror && k.onerror(I);
                  }), Promise.reject(I);
                });
              });
            }
          } });
        } });
      } };
      function Ai(e, t, r) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var o = [], a = 0, s = 0; a < t.keys.length && s < e.length; ++a) pe(t.keys[a], e[s]) === 0 && (o.push(r ? je(t.values[a]) : t.values[a]), ++s);
          return o.length === e.length ? o : null;
        } catch {
          return null;
        }
      }
      var Go = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var r = e.table(t);
          return c(c({}, r), { getMany: function(o) {
            if (!o.cache) return r.getMany(o);
            var a = Ai(o.keys, o.trans._cache, o.cache === "clone");
            return a ? H.resolve(a) : r.getMany(o).then(function(s) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? je(s) : s }, s;
            });
          }, mutate: function(o) {
            return o.type !== "add" && (o.trans._cache = null), r.mutate(o);
          } });
        } };
      } };
      function Si(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Pi(e, t) {
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
      var Yo = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, r = new We(e.MIN_KEY, e.MAX_KEY);
        return c(c({}, e), { transaction: function(o, a, s) {
          if (z.subscr && a !== "readonly") throw new R.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(z.querier));
          return e.transaction(o, a, s);
        }, table: function(o) {
          var a = e.table(o), s = a.schema, l = s.primaryKey, d = s.indexes, h = l.extractKey, y = l.outbound, v = l.autoIncrement && d.filter(function(m) {
            return m.compound && m.keyPath.includes(l.keyPath);
          }), _ = c(c({}, a), { mutate: function(m) {
            function g($) {
              return $ = "idb://".concat(t, "/").concat(o, "/").concat($), I[$] || (I[$] = new We());
            }
            var x, w, O, C = m.trans, I = m.mutatedParts || (m.mutatedParts = {}), k = g(""), B = g(":dels"), V = m.type, W = m.type === "deleteRange" ? [m.range] : m.type === "delete" ? [m.keys] : m.values.length < 50 ? [Rr(l, m).filter(function($) {
              return $;
            }), m.values] : [], q = W[0], U = W[1], W = m.trans._cache;
            return A(q) ? (k.addKeys(q), (W = V === "delete" || q.length === U.length ? Ai(q, W) : null) || B.addKeys(q), (W || U) && (x = g, w = W, O = U, s.indexes.forEach(function($) {
              var G = x($.name || "");
              function ce(ae) {
                return ae != null ? $.extractKey(ae) : null;
              }
              function ye(ae) {
                return $.multiEntry && A(ae) ? ae.forEach(function(Ie) {
                  return G.addKey(Ie);
                }) : G.addKey(ae);
              }
              (w || O).forEach(function(ae, He) {
                var oe = w && ce(w[He]), He = O && ce(O[He]);
                pe(oe, He) !== 0 && (oe != null && ye(oe), He != null && ye(He));
              });
            }))) : q ? (U = { from: (U = q.lower) !== null && U !== void 0 ? U : e.MIN_KEY, to: (U = q.upper) !== null && U !== void 0 ? U : e.MAX_KEY }, B.add(U), k.add(U)) : (k.add(r), B.add(r), s.indexes.forEach(function($) {
              return g($.name).add(r);
            })), a.mutate(m).then(function($) {
              return !q || m.type !== "add" && m.type !== "put" || (k.addKeys($.results), v && v.forEach(function(G) {
                for (var ce = m.values.map(function(oe) {
                  return G.extractKey(oe);
                }), ye = G.keyPath.findIndex(function(oe) {
                  return oe === l.keyPath;
                }), ae = 0, Ie = $.results.length; ae < Ie; ++ae) ce[ae][ye] = $.results[ae];
                g(G.name).addKeys(ce);
              })), C.mutatedParts = Vn(C.mutatedParts || {}, I), $;
            });
          } }), d = function(g) {
            var x = g.query, g = x.index, x = x.range;
            return [g, new We((g = x.lower) !== null && g !== void 0 ? g : e.MIN_KEY, (x = x.upper) !== null && x !== void 0 ? x : e.MAX_KEY)];
          }, T = { get: function(m) {
            return [l, new We(m.key)];
          }, getMany: function(m) {
            return [l, new We().addKeys(m.keys)];
          }, count: d, query: d, openCursor: d };
          return E(T).forEach(function(m) {
            _[m] = function(g) {
              var x = z.subscr, w = !!x, O = Si(z, a) && Pi(m, g) ? g.obsSet = {} : x;
              if (w) {
                var C = function(U) {
                  return U = "idb://".concat(t, "/").concat(o, "/").concat(U), O[U] || (O[U] = new We());
                }, I = C(""), k = C(":dels"), x = T[m](g), w = x[0], x = x[1];
                if ((m === "query" && w.isPrimaryKey && !g.values ? k : C(w.name || "")).add(x), !w.isPrimaryKey) {
                  if (m !== "count") {
                    var B = m === "query" && y && g.values && a.query(c(c({}, g), { values: !1 }));
                    return a[m].apply(this, arguments).then(function(U) {
                      if (m === "query") {
                        if (y && g.values) return B.then(function(ce) {
                          return ce = ce.result, I.addKeys(ce), U;
                        });
                        var W = g.values ? U.result.map(h) : U.result;
                        (g.values ? I : k).addKeys(W);
                      } else if (m === "openCursor") {
                        var $ = U, G = g.values;
                        return $ && Object.create($, { key: { get: function() {
                          return k.addKey($.primaryKey), $.key;
                        } }, primaryKey: { get: function() {
                          var ce = $.primaryKey;
                          return k.addKey(ce), ce;
                        } }, value: { get: function() {
                          return G && I.addKey($.primaryKey), $.value;
                        } } });
                      }
                      return U;
                    });
                  }
                  k.add(r);
                }
              }
              return a[m].apply(this, arguments);
            };
          }), _;
        } });
      } };
      function Ci(e, t, r) {
        if (r.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var o = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return r.numFailures === o ? null : (t = c({}, t), A(t.keys) && (t.keys = t.keys.filter(function(a, s) {
          return !(s in r.failures);
        })), "values" in t && A(t.values) && (t.values = t.values.filter(function(a, s) {
          return !(s in r.failures);
        })), t);
      }
      function Kr(e, t) {
        return r = e, ((o = t).lower === void 0 || (o.lowerOpen ? 0 < pe(r, o.lower) : 0 <= pe(r, o.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? pe(e, t.upper) < 0 : pe(e, t.upper) <= 0));
        var r, o;
      }
      function Ii(e, t, T, o, a, s) {
        if (!T || T.length === 0) return e;
        var l = t.query.index, h = l.multiEntry, y = t.query.range, v = o.schema.primaryKey.extractKey, _ = l.extractKey, d = (l.lowLevelIndex || l).extractKey, T = T.reduce(function(m, g) {
          var x = m, w = [];
          if (g.type === "add" || g.type === "put") for (var O = new We(), C = g.values.length - 1; 0 <= C; --C) {
            var I, k = g.values[C], B = v(k);
            O.hasKey(B) || (I = _(k), (h && A(I) ? I.some(function($) {
              return Kr($, y);
            }) : Kr(I, y)) && (O.addKey(B), w.push(k)));
          }
          switch (g.type) {
            case "add":
              var V = new We().addKeys(t.values ? m.map(function(G) {
                return v(G);
              }) : m), x = m.concat(t.values ? w.filter(function(G) {
                return G = v(G), !V.hasKey(G) && (V.addKey(G), !0);
              }) : w.map(function(G) {
                return v(G);
              }).filter(function(G) {
                return !V.hasKey(G) && (V.addKey(G), !0);
              }));
              break;
            case "put":
              var q = new We().addKeys(g.values.map(function(G) {
                return v(G);
              }));
              x = m.filter(function(G) {
                return !q.hasKey(t.values ? v(G) : G);
              }).concat(t.values ? w : w.map(function(G) {
                return v(G);
              }));
              break;
            case "delete":
              var U = new We().addKeys(g.keys);
              x = m.filter(function(G) {
                return !U.hasKey(t.values ? v(G) : G);
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
        return T === e ? e : (T.sort(function(m, g) {
          return pe(d(m), d(g)) || pe(v(m), v(g));
        }), t.limit && t.limit < 1 / 0 && (T.length > t.limit ? T.length = t.limit : e.length === t.limit && T.length < t.limit && (a.dirty = !0)), s ? Object.freeze(T) : T);
      }
      function ki(e, t) {
        return pe(e.lower, t.lower) === 0 && pe(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function Xo(e, t) {
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
      function zo(e, t, r, o) {
        e.subscribers.add(r), o.addEventListener("abort", function() {
          var a, s;
          e.subscribers.delete(r), e.subscribers.size === 0 && (a = e, s = t, setTimeout(function() {
            a.subscribers.size === 0 && Ne(s, a);
          }, 3e3));
        });
      }
      var Qo = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return c(c({}, e), { transaction: function(r, o, a) {
          var s, l, h = e.transaction(r, o, a);
          return o === "readwrite" && (l = (s = new AbortController()).signal, a = function(y) {
            return function() {
              if (s.abort(), o === "readwrite") {
                for (var v = /* @__PURE__ */ new Set(), _ = 0, d = r; _ < d.length; _++) {
                  var T = d[_], m = Bt["idb://".concat(t, "/").concat(T)];
                  if (m) {
                    var g = e.table(T), x = m.optimisticOps.filter(function(G) {
                      return G.trans === h;
                    });
                    if (h._explicit && y && h.mutatedParts) for (var w = 0, O = Object.values(m.queries.query); w < O.length; w++) for (var C = 0, I = (V = O[w]).slice(); C < I.length; C++) Pr((q = I[C]).obsSet, h.mutatedParts) && (Ne(V, q), q.subscribers.forEach(function(G) {
                      return v.add(G);
                    }));
                    else if (0 < x.length) {
                      m.optimisticOps = m.optimisticOps.filter(function(G) {
                        return G.trans !== h;
                      });
                      for (var k = 0, B = Object.values(m.queries.query); k < B.length; k++) for (var V, q, U, W = 0, $ = (V = B[k]).slice(); W < $.length; W++) (q = $[W]).res != null && h.mutatedParts && (y && !q.dirty ? (U = Object.isFrozen(q.res), U = Ii(q.res, q.req, x, g, q, U), q.dirty ? (Ne(V, q), q.subscribers.forEach(function(G) {
                        return v.add(G);
                      })) : U !== q.res && (q.res = U, q.promise = H.resolve({ result: U }))) : (q.dirty && Ne(V, q), q.subscribers.forEach(function(G) {
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
          }, h.addEventListener("abort", a(!1), { signal: l }), h.addEventListener("error", a(!1), { signal: l }), h.addEventListener("complete", a(!0), { signal: l })), h;
        }, table: function(r) {
          var o = e.table(r), a = o.schema.primaryKey;
          return c(c({}, o), { mutate: function(s) {
            var l = z.trans;
            if (a.outbound || l.db._options.cache === "disabled" || l.explicit || l.idbtrans.mode !== "readwrite") return o.mutate(s);
            var h = Bt["idb://".concat(t, "/").concat(r)];
            return h ? (l = o.mutate(s), s.type !== "add" && s.type !== "put" || !(50 <= s.values.length || Rr(a, s).some(function(y) {
              return y == null;
            })) ? (h.optimisticOps.push(s), s.mutatedParts && $n(s.mutatedParts), l.then(function(y) {
              0 < y.numFailures && (Ne(h.optimisticOps, s), (y = Ci(0, s, y)) && h.optimisticOps.push(y), s.mutatedParts && $n(s.mutatedParts));
            }), l.catch(function() {
              Ne(h.optimisticOps, s), s.mutatedParts && $n(s.mutatedParts);
            })) : l.then(function(y) {
              var v = Ci(0, c(c({}, s), { values: s.values.map(function(_, d) {
                var T;
                return y.failures[d] || (_ = (T = a.keyPath) !== null && T !== void 0 && T.includes(".") ? je(_) : c({}, _), J(_, a.keyPath, y.results[d])), _;
              }) }), y);
              h.optimisticOps.push(v), queueMicrotask(function() {
                return s.mutatedParts && $n(s.mutatedParts);
              });
            }), l) : o.mutate(s);
          }, query: function(s) {
            if (!Si(z, o) || !Pi("query", s)) return o.query(s);
            var l = ((v = z.trans) === null || v === void 0 ? void 0 : v.db._options.cache) === "immutable", d = z, h = d.requery, y = d.signal, v = function(g, x, w, O) {
              var C = Bt["idb://".concat(g, "/").concat(x)];
              if (!C) return [];
              if (!(x = C.queries[w])) return [null, !1, C, null];
              var I = x[(O.query ? O.query.index.name : null) || ""];
              if (!I) return [null, !1, C, null];
              switch (w) {
                case "query":
                  var k = I.find(function(B) {
                    return B.req.limit === O.limit && B.req.values === O.values && ki(B.req.query.range, O.query.range);
                  });
                  return k ? [k, !0, C, I] : [I.find(function(B) {
                    return ("limit" in B.req ? B.req.limit : 1 / 0) >= O.limit && (!O.values || B.req.values) && Xo(B.req.query.range, O.query.range);
                  }), !1, C, I];
                case "count":
                  return k = I.find(function(B) {
                    return ki(B.req.query.range, O.query.range);
                  }), [k, !!k, C, I];
              }
            }(t, r, "query", s), _ = v[0], d = v[1], T = v[2], m = v[3];
            return _ && d ? _.obsSet = s.obsSet : (d = o.query(s).then(function(g) {
              var x = g.result;
              if (_ && (_.res = x), l) {
                for (var w = 0, O = x.length; w < O; ++w) Object.freeze(x[w]);
                Object.freeze(x);
              } else g.result = je(x);
              return g;
            }).catch(function(g) {
              return m && _ && Ne(m, _), Promise.reject(g);
            }), _ = { obsSet: s.obsSet, promise: d, subscribers: /* @__PURE__ */ new Set(), type: "query", req: s, dirty: !1 }, m ? m.push(_) : (m = [_], (T = T || (Bt["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[s.query.index.name || ""] = m)), zo(_, m, h, y), _.promise.then(function(g) {
              return { result: Ii(g.result, s, T?.optimisticOps, o, _, l) };
            });
          } });
        } });
      } };
      function Hn(e, t) {
        return new Proxy(e, { get: function(r, o, a) {
          return o === "db" ? t : Reflect.get(r, o, a);
        } });
      }
      var vt = (Re.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new R.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new R.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(qo), r.stores({}), this._state.autoSchema = !1, r);
      }, Re.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || z.letThrough || this._vip) ? e() : new H(function(r, o) {
          if (t._state.openComplete) return o(new R.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new R.DatabaseClosed());
            t.open().catch(S);
          }
          t._state.dbReadyPromise.then(r, o);
        }).then(e);
      }, Re.prototype.use = function(e) {
        var t = e.stack, r = e.create, o = e.level, a = e.name;
        return a && this.unuse({ stack: t, name: a }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: r, level: o ?? 10, name: a }), e.sort(function(s, l) {
          return s.level - l.level;
        }), this;
      }, Re.prototype.unuse = function(e) {
        var t = e.stack, r = e.name, o = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(a) {
          return o ? a.create !== o : !!r && a.name !== r;
        })), this;
      }, Re.prototype.open = function() {
        var e = this;
        return Kt(ze, function() {
          return $o(e);
        });
      }, Re.prototype._close = function() {
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
      }, Re.prototype.close = function(r) {
        var t = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        t ? (r.isBeingOpened && r.cancelOpen(new R.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new R.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, Re.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", o = this._state;
        return new H(function(a, s) {
          function l() {
            t.close(e);
            var h = t._deps.indexedDB.deleteDatabase(t.name);
            h.onsuccess = Ae(function() {
              var y, v, _;
              y = t._deps, v = t.name, _ = y.indexedDB, y = y.IDBKeyRange, Or(_) || v === kn || Er(_, y).delete(v).catch(S), a();
            }), h.onerror = dt(s), h.onblocked = t._fireOnBlocked;
          }
          if (r) throw new R.InvalidArgument("Invalid closeOptions argument to db.delete()");
          o.isBeingOpened ? o.dbReadyPromise.then(l) : l();
        });
      }, Re.prototype.backendDB = function() {
        return this.idbdb;
      }, Re.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Re.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, Re.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Re.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Re.prototype, "tables", { get: function() {
        var e = this;
        return E(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), Re.prototype.transaction = function() {
        var e = (function(t, r, o) {
          var a = arguments.length;
          if (a < 2) throw new R.InvalidArgument("Too few arguments");
          for (var s = new Array(a - 1); --a; ) s[a - 1] = arguments[a];
          return o = s.pop(), [t, we(s), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Re.prototype._transaction = function(e, t, r) {
        var o = this, a = z.trans;
        a && a.db === this && e.indexOf("!") === -1 || (a = null);
        var s, l, h = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (l = t.map(function(v) {
            if (v = v instanceof o.Table ? v.name : v, typeof v != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return v;
          }), e == "r" || e === dr) s = dr;
          else {
            if (e != "rw" && e != pr) throw new R.InvalidArgument("Invalid transaction mode: " + e);
            s = pr;
          }
          if (a) {
            if (a.mode === dr && s === pr) {
              if (!h) throw new R.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              a = null;
            }
            a && l.forEach(function(v) {
              if (a && a.storeNames.indexOf(v) === -1) {
                if (!h) throw new R.SubTransaction("Table " + v + " not included in parent transaction.");
                a = null;
              }
            }), h && a && !a.active && (a = null);
          }
        } catch (v) {
          return a ? a._promise(null, function(_, d) {
            d(v);
          }) : De(v);
        }
        var y = (function v(_, d, T, m, g) {
          return H.resolve().then(function() {
            var x = z.transless || z, w = _._createTransaction(d, T, _._dbSchema, m);
            if (w.explicit = !0, x = { trans: w, transless: x }, m) w.idbtrans = m.idbtrans;
            else try {
              w.create(), w.idbtrans._explicit = !0, _._state.PR1398_maxLoop = 3;
            } catch (I) {
              return I.name === P.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                return v(_, d, T, null, g);
              })) : De(I);
            }
            var O, C = ct(g);
            return C && Jt(), x = H.follow(function() {
              var I;
              (O = g.call(w, w)) && (C ? (I = Ot.bind(null, null), O.then(I, I)) : typeof O.next == "function" && typeof O.throw == "function" && (O = Nr(O)));
            }, x), (O && typeof O.then == "function" ? H.resolve(O).then(function(I) {
              return w.active ? I : De(new R.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : x.then(function() {
              return O;
            })).then(function(I) {
              return m && w._resolve(), w._completion.then(function() {
                return I;
              });
            }).catch(function(I) {
              return w._reject(I), De(I);
            });
          });
        }).bind(null, this, s, l, a, r);
        return a ? a._promise(s, y, "lock") : z.trans ? Kt(z.transless, function() {
          return o._whenReady(y);
        }) : this._whenReady(y);
      }, Re.prototype.table = function(e) {
        if (!M(this._allTables, e)) throw new R.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Re);
      function Re(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var o = Re.dependencies;
        this._options = t = c({ addons: Re.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var a, s, l, h, y, v = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: S, dbReadyPromise: null, cancelOpen: S, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        v.dbReadyPromise = new H(function(d) {
          v.dbReadyResolve = d;
        }), v.openCanceller = new H(function(d, T) {
          v.cancelOpen = T;
        }), this._state = v, this.name = e, this.on = sn(this, "populate", "blocked", "versionchange", "close", { ready: [ie, S] }), this.once = function(d, T) {
          var m = function() {
            for (var g = [], x = 0; x < arguments.length; x++) g[x] = arguments[x];
            r.on(d).unsubscribe(m), T.apply(r, g);
          };
          return r.on(d, m);
        }, this.on.ready.subscribe = Le(this.on.ready.subscribe, function(d) {
          return function(T, m) {
            Re.vip(function() {
              var g, x = r._state;
              x.openComplete ? (x.dbOpenError || H.resolve().then(T), m && d(T)) : x.onReadyBeingFired ? (x.onReadyBeingFired.push(T), m && d(T)) : (d(T), g = r, m || d(function w() {
                g.on.ready.unsubscribe(T), g.on.ready.unsubscribe(w);
              }));
            });
          };
        }), this.Collection = (a = this, un(Do.prototype, function(O, w) {
          this.db = a;
          var m = si, g = null;
          if (w) try {
            m = w();
          } catch (C) {
            g = C;
          }
          var x = O._ctx, w = x.table, O = w.hook.reading.fire;
          this._ctx = { table: w, index: x.index, isPrimKey: !x.index || w.schema.primKey.keyPath && x.index === w.schema.primKey.name, range: m, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: g, or: x.or, valueMapper: O !== K ? O : null };
        })), this.Table = (s = this, un(fi.prototype, function(d, T, m) {
          this.db = s, this._tx = m, this.name = d, this.schema = T, this.hook = s._allTables[d] ? s._allTables[d].hook : sn(null, { creating: [te, S], reading: [Y, K], updating: [se, S], deleting: [Z, S] });
        })), this.Transaction = (l = this, un(jo.prototype, function(d, T, m, g, x) {
          var w = this;
          d !== "readonly" && T.forEach(function(O) {
            O = (O = m[O]) === null || O === void 0 ? void 0 : O.yProps, O && (T = T.concat(O.map(function(C) {
              return C.updatesTable;
            })));
          }), this.db = l, this.mode = d, this.storeNames = T, this.schema = m, this.chromeTransactionDurability = g, this.idbtrans = null, this.on = sn(this, "complete", "error", "abort"), this.parent = x || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new H(function(O, C) {
            w._resolve = O, w._reject = C;
          }), this._completion.then(function() {
            w.active = !1, w.on.complete.fire();
          }, function(O) {
            var C = w.active;
            return w.active = !1, w.on.error.fire(O), w.parent ? w.parent._reject(O) : C && w.idbtrans && w.idbtrans.abort(), De(O);
          });
        })), this.Version = (h = this, un(Vo.prototype, function(d) {
          this.db = h, this._cfg = { version: d, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (y = this, un(vi.prototype, function(d, T, m) {
          if (this.db = y, this._ctx = { table: d, index: T === ":id" ? null : T, or: m }, this._cmp = this._ascending = pe, this._descending = function(g, x) {
            return pe(x, g);
          }, this._max = function(g, x) {
            return 0 < pe(g, x) ? g : x;
          }, this._min = function(g, x) {
            return pe(g, x) < 0 ? g : x;
          }, this._IDBKeyRange = y._deps.IDBKeyRange, !this._IDBKeyRange) throw new R.MissingAPI();
        })), this.on("versionchange", function(d) {
          0 < d.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(d) {
          !d.newVersion || d.newVersion < d.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(d.oldVersion / 10));
        }), this._maxKey = hn(t.IDBKeyRange), this._createTransaction = function(d, T, m, g) {
          return new r.Transaction(d, T, m, r._options.chromeTransactionDurability, g);
        }, this._fireOnBlocked = function(d) {
          r.on("blocked").fire(d), Zt.filter(function(T) {
            return T.name === r.name && T !== r && !T._state.vcFired;
          }).map(function(T) {
            return T.on("versionchange").fire(d);
          });
        }, this.use(Go), this.use(Qo), this.use(Yo), this.use(Wo), this.use(Ho);
        var _ = new Proxy(this, { get: function(d, T, m) {
          if (T === "_vip") return !0;
          if (T === "table") return function(x) {
            return Hn(r.table(x), _);
          };
          var g = Reflect.get(d, T, m);
          return g instanceof fi ? Hn(g, _) : T === "tables" ? g.map(function(x) {
            return Hn(x, _);
          }) : T === "_createTransaction" ? function() {
            return Hn(g.apply(this, arguments), _);
          } : g;
        } });
        this.vip = _, o.forEach(function(d) {
          return d(r);
        });
      }
      var Gn, ut = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Jo = (jr.prototype.subscribe = function(e, t, r) {
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
      function Ni(e) {
        var t, r = !1, o = new Jo(function(a) {
          var s = ct(e), l, h = !1, y = {}, v = {}, _ = { get closed() {
            return h;
          }, unsubscribe: function() {
            h || (h = !0, l && l.abort(), d && Pt.storagemutated.unsubscribe(m));
          } };
          a.start && a.start(_);
          var d = !1, T = function() {
            return hr(g);
          }, m = function(x) {
            Vn(y, x), Pr(v, y) && T();
          }, g = function() {
            var x, w, O;
            !h && Gn.indexedDB && (y = {}, x = {}, l && l.abort(), l = new AbortController(), O = function(C) {
              var I = zt();
              try {
                s && Jt();
                var k = Et(e, C);
                return k = s ? k.finally(Ot) : k;
              } finally {
                I && Qt();
              }
            }(w = { subscr: x, signal: l.signal, requery: T, querier: e, trans: null }), Promise.resolve(O).then(function(C) {
              r = !0, t = C, h || w.signal.aborted || (y = {}, function(I) {
                for (var k in I) if (M(I, k)) return;
                return 1;
              }(v = x) || d || (Pt(fn, m), d = !0), hr(function() {
                return !h && a.next && a.next(C);
              }));
            }, function(C) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(C?.name) || h || hr(function() {
                h || a.error && a.error(C);
              });
            }));
          };
          return setTimeout(T, 0), _;
        });
        return o.hasValue = function() {
          return r;
        }, o.getValue = function() {
          return t;
        }, o;
      }
      var Mt = vt;
      function Fr(e) {
        var t = Ct;
        try {
          Ct = !0, Pt.storagemutated.fire(e), kr(e, !0);
        } finally {
          Ct = t;
        }
      }
      X(Mt, c(c({}, Be), { delete: function(e) {
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
              return a !== kn;
            });
          }) : Er(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return De(new R.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          N(this, e);
        };
      }, ignoreTransaction: function(e) {
        return z.trans ? Kt(z.transless, e) : e();
      }, vip: Ar, async: function(e) {
        return function() {
          try {
            var t = Nr(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : H.resolve(t);
          } catch (r) {
            return De(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = Nr(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : H.resolve(o);
        } catch (a) {
          return De(a);
        }
      }, currentTransaction: { get: function() {
        return z.trans || null;
      } }, waitFor: function(e, t) {
        return t = H.resolve(typeof e == "function" ? Mt.ignoreTransaction(e) : e).timeout(t || 6e4), z.trans ? z.trans.waitFor(t) : t;
      }, Promise: H, debug: { get: function() {
        return ee;
      }, set: function(e) {
        ge(e);
      } }, derive: he, extend: N, props: X, override: Le, Events: sn, on: Pt, liveQuery: Ni, extendObservabilitySet: Vn, getByKeyPath: Ce, setByKeyPath: J, delByKeyPath: function(e, t) {
        typeof t == "string" ? J(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          J(e, r, void 0);
        });
      }, shallowClone: re, deepClone: je, getObjectDiff: Dr, cmp: pe, asap: qe, minKey: -1 / 0, addons: [], connections: Zt, errnames: P, dependencies: Gn, cache: Bt, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), Mt.maxKey = hn(Mt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Pt(fn, function(e) {
        Ct || (e = new CustomEvent(vr, { detail: e }), Ct = !0, dispatchEvent(e), Ct = !1);
      }), addEventListener(vr, function(e) {
        e = e.detail, Ct || Fr(e);
      }));
      var rn, Ct = !1, Di = function() {
      };
      return typeof BroadcastChannel < "u" && ((Di = function() {
        (rn = new BroadcastChannel(vr)).onmessage = function(e) {
          return e.data && Fr(e.data);
        };
      })(), typeof rn.unref == "function" && rn.unref(), Pt(fn, function(e) {
        Ct || rn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!vt.disableBfCache && e.persisted) {
          ee && console.debug("Dexie: handling persisted pagehide"), rn?.close();
          for (var t = 0, r = Zt; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !vt.disableBfCache && e.persisted && (ee && console.debug("Dexie: handling persisted pageshow"), Di(), Fr({ all: new We(-1 / 0, [[]]) }));
      })), H.rejectionMapper = function(e, t) {
        return !e || e instanceof wt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !L[e.name] ? e : (t = new L[e.name](t || e.message, e), "stack" in e && ue(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, ge(ee), c(vt, Object.freeze({ __proto__: null, Dexie: vt, liveQuery: Ni, Entity: ui, cmp: pe, PropModification: cn, replacePrefix: function(e, t) {
        return new cn({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new cn({ add: e });
      }, remove: function(e) {
        return new cn({ remove: e });
      }, default: vt, RangeSet: We, mergeRanges: yn, rangesOverlap: xi }), { default: vt }), vt;
    });
  }(Ea)), Ea.exports;
}
var wf = _f();
const Oa = /* @__PURE__ */ zl(wf), Es = Symbol.for("Dexie"), ei = globalThis[Es] || (globalThis[Es] = Oa);
if (Oa.semVer !== ei.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Oa.semVer} and ${ei.semVer}`);
const {
  liveQuery: mh,
  mergeRanges: vh,
  rangesOverlap: gh,
  RangeSet: bh,
  cmp: _h,
  Entity: wh,
  PropModification: xh,
  replacePrefix: Th,
  add: Eh,
  remove: Oh,
  DexieYProvider: Ah
} = ei;
function xf(n) {
  const i = new ei(n);
  return i.version(1).stores({
    [`${Vt}`]: uf
  }), i;
}
async function Tf(n) {
  const { databaseInstance: i, records: u } = n, c = i.table(Vt);
  await i.transaction("rw", c, () => c.bulkAdd(u));
}
async function Ef(n) {
  if (await ei.exists(n))
    return await ei.delete(n);
}
const Of = {
  useBrowserApi: !0,
  chunkSize: 32 * 1024,
  // 32KB
  batchSize: 2e3
};
async function Sh({
  files: n,
  options: i = Of
}) {
  const u = [];
  if (n.length === 0) throw new Error("No files provided for import.");
  for (const c of n) {
    if (!Af(c)) {
      console.error(`Unsupported file type: ${c.name}`);
      continue;
    }
    c.size === 0 && console.warn(`File is empty: ${c.name}`);
    const f = await Pf({ file: c, options: i });
    u.push(f);
  }
  return u;
}
function Af(n) {
  return sf.some((i) => n.name.toLowerCase().endsWith(i));
}
function Sf(n) {
  return n.name.replace(/\.[^.]+$/, "");
}
async function Pf(n) {
  const { file: i, options: u } = n;
  try {
    const c = Sf(i);
    await Ef(c);
    const f = xf(c);
    return u.useBrowserApi && i.size !== 0 && await Cf({
      file: i,
      databaseInstance: f,
      options: {
        chunkSize: u.chunkSize,
        batchSize: u.batchSize
      }
    }), c;
  } catch (c) {
    throw console.error(`Error importing file ${i.name}:`, c), c;
  }
}
async function Cf(n) {
  const { file: i, databaseInstance: u, options: c } = n, f = i.stream().getReader(), p = cf(), E = new TextDecoder(), A = new Uint8Array(0);
  return await Aa({ databaseInstance: u, reader: f, sax: p, textDecoder: E, buffer: A, options: c });
}
async function Aa(n) {
  const { databaseInstance: i, reader: u, sax: c, textDecoder: f, buffer: p, options: E } = n, { chunkSize: A, batchSize: N } = E, { done: F, value: D } = await u.read();
  if (F) {
    if (p.length > 0) {
      const X = f.decode(p);
      c.parser.write(X);
    }
    return c.parser.close(), await Os({
      databaseInstance: i,
      sax: c,
      batchSize: 0
    });
  }
  if (!D)
    return await Aa(n);
  let M = new Uint8Array(p.length + D.length);
  for (M.set(p), M.set(D, p.length); M.length >= A; ) {
    const X = M.slice(0, A);
    M = M.slice(A);
    const ne = f.decode(X, { stream: !0 });
    c.parser.write(ne), await Os({
      databaseInstance: i,
      sax: c,
      batchSize: N
    });
  }
  return await Aa({ ...n, buffer: M });
}
async function Os(n) {
  const { databaseInstance: i, sax: u, batchSize: c } = n;
  if (u.getSize() >= c) {
    const f = u.drainBatch(), p = rf({
      currentBatch: f
    });
    await Tf({
      databaseInstance: i,
      records: p
    });
  }
}
var If = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function kf(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var so = { exports: {} }, Nf = so.exports, As;
function Df() {
  return As || (As = 1, function(n, i) {
    (function(u, c) {
      n.exports = c();
    })(Nf, function() {
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
      function f(e, t, r) {
        for (var o, a = 0, s = t.length; a < s; a++) !o && a in t || ((o = o || Array.prototype.slice.call(t, 0, a))[a] = t[a]);
        return e.concat(o || Array.prototype.slice.call(t));
      }
      var p = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : If, E = Object.keys, A = Array.isArray;
      function N(e, t) {
        return typeof t != "object" || E(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || p.Promise || (p.Promise = Promise);
      var F = Object.getPrototypeOf, D = {}.hasOwnProperty;
      function M(e, t) {
        return D.call(e, t);
      }
      function X(e, t) {
        typeof t == "function" && (t = t(F(e))), (typeof Reflect > "u" ? E : Reflect.ownKeys)(t).forEach(function(r) {
          ue(e, r, t[r]);
        });
      }
      var ne = Object.defineProperty;
      function ue(e, t, r, o) {
        ne(e, t, N(r && M(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function he(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), ue(e.prototype, "constructor", e), { extend: X.bind(null, e.prototype) };
        } };
      }
      var Me = Object.getOwnPropertyDescriptor, Oe = [].slice;
      function ke(e, t, r) {
        return Oe.call(e, t, r);
      }
      function Le(e, t) {
        return t(e);
      }
      function de(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function qe(e) {
        p.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Ce(e, t) {
        if (typeof t == "string" && M(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var r = [], o = 0, a = t.length; o < a; ++o) {
            var s = Ce(e, t[o]);
            r.push(s);
          }
          return r;
        }
        var l = t.indexOf(".");
        if (l !== -1) {
          var h = e[t.substr(0, l)];
          return h == null ? void 0 : Ce(h, t.substr(l + 1));
        }
      }
      function J(e, t, r) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          de(typeof r != "string" && "length" in r);
          for (var o = 0, a = t.length; o < a; ++o) J(e, t[o], r[o]);
        } else {
          var s, l, h = t.indexOf(".");
          h !== -1 ? (s = t.substr(0, h), (l = t.substr(h + 1)) === "" ? r === void 0 ? A(e) && !isNaN(parseInt(s)) ? e.splice(s, 1) : delete e[s] : e[s] = r : J(h = !(h = e[s]) || !M(e, s) ? e[s] = {} : h, l, r)) : r === void 0 ? A(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function re(e) {
        var t, r = {};
        for (t in e) M(e, t) && (r[t] = e[t]);
        return r;
      }
      var j = [].concat;
      function we(e) {
        return j.apply([], e);
      }
      var Ee = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(we([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return p[e];
      }), Se = new Set(Ee.map(function(e) {
        return p[e];
      })), ve = null;
      function je(e) {
        return ve = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var o = ve.get(r);
          if (o) return o;
          if (A(r)) {
            o = [], ve.set(r, o);
            for (var a = 0, s = r.length; a < s; ++a) o.push(t(r[a]));
          } else if (Se.has(r.constructor)) o = r;
          else {
            var l, h = F(r);
            for (l in o = h === Object.prototype ? {} : Object.create(h), ve.set(r, o), r) M(r, l) && (o[l] = t(r[l]));
          }
          return o;
        }(e), ve = null, e;
      }
      var lt = {}.toString;
      function Xe(e) {
        return lt.call(e).slice(8, -1);
      }
      var Ye = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", _e = typeof Ye == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Ye]) && t.apply(e);
      } : function() {
        return null;
      };
      function Ne(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var st = {};
      function et(e) {
        var t, r, o, a;
        if (arguments.length === 1) {
          if (A(e)) return e.slice();
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
      }, xe = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], ut = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(xe), _t = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function wt(e, t) {
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
      function ht(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(r) {
          return t[r];
        }), this.failuresByPos = t, this.message = vn(e, this.failures);
      }
      he(wt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), he(Gt).from(wt), he(ht).from(wt);
      var P = ut.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), b = wt, R = ut.reduce(function(e, t) {
        var r = t + "Error";
        function o(a, s) {
          this.name = r, a ? typeof a == "string" ? (this.message = "".concat(a).concat(s ? `
 ` + s : ""), this.inner = s || null) : typeof a == "object" && (this.message = "".concat(a.name, " ").concat(a.message), this.inner = a) : (this.message = _t[t] || r, this.inner = null);
        }
        return he(o).from(b), e[t] = o, e;
      }, {});
      R.Syntax = SyntaxError, R.Type = TypeError, R.Range = RangeError;
      var L = xe.reduce(function(e, t) {
        return e[t + "Error"] = R[t], e;
      }, {}), Be = ut.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = R[t]), e;
      }, {});
      function S() {
      }
      function K(e) {
        return e;
      }
      function Y(e, t) {
        return e == null || e === K ? t : function(r) {
          return t(e(r));
        };
      }
      function Q(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function te(e, t) {
        return e === S ? t : function() {
          var r = e.apply(this, arguments);
          r !== void 0 && (arguments[0] = r);
          var o = this.onsuccess, a = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var s = t.apply(this, arguments);
          return o && (this.onsuccess = this.onsuccess ? Q(o, this.onsuccess) : o), a && (this.onerror = this.onerror ? Q(a, this.onerror) : a), s !== void 0 ? s : r;
        };
      }
      function Z(e, t) {
        return e === S ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? Q(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? Q(o, this.onerror) : o);
        };
      }
      function se(e, t) {
        return e === S ? t : function(r) {
          var o = e.apply(this, arguments);
          N(r, o);
          var a = this.onsuccess, s = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), a && (this.onsuccess = this.onsuccess ? Q(a, this.onsuccess) : a), s && (this.onerror = this.onerror ? Q(s, this.onerror) : s), o === void 0 ? r === void 0 ? void 0 : r : N(o, r);
        };
      }
      function le(e, t) {
        return e === S ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function ie(e, t) {
        return e === S ? t : function() {
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
      Be.ModifyError = Gt, Be.DexieError = wt, Be.BulkError = ht;
      var ee = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function ge(e) {
        ee = e;
      }
      var fe = {}, be = 100, Ee = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, F(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, F(t), e];
      }(), xe = Ee[0], ut = Ee[1], Ee = Ee[2], ut = ut && ut.then, Fe = xe && xe.constructor, Ue = !!Ee, it = function(e, t) {
        Yt.push([e, t]), yt && (queueMicrotask(Co), yt = !1);
      }, ft = !0, yt = !0, ot = [], Dt = [], gn = K, ze = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: S, pgp: !1, env: {}, finalize: S }, z = ze, Yt = [], Rt = 0, On = [];
      function H(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = z;
        if (typeof e != "function") {
          if (e !== fe) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && cr(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function r(o, a) {
          try {
            a(function(s) {
              if (o._state === null) {
                if (s === o) throw new TypeError("A promise cannot be resolved with itself.");
                var l = o._lib && zt();
                s && typeof s.then == "function" ? r(o, function(h, y) {
                  s instanceof H ? s._then(h, y) : s.then(h, y);
                }) : (o._state = !0, o._value = s, ri(o)), l && Qt();
              }
            }, cr.bind(null, o));
          } catch (s) {
            cr(o, s);
          }
        }(this, e);
      }
      var ur = { get: function() {
        var e = z, t = Cn;
        function r(o, a) {
          var s = this, l = !e.global && (e !== z || t !== Cn), h = l && !Ot(), y = new H(function(v, _) {
            lr(s, new ni(oi(o, e, l, h), oi(a, e, l, h), v, _, e));
          });
          return this._consoleTask && (y._consoleTask = this._consoleTask), y;
        }
        return r.prototype = fe, r;
      }, set: function(e) {
        ue(this, "then", e && e.prototype === fe ? ur : { get: function() {
          return e;
        }, set: ur.set });
      } };
      function ni(e, t, r, o, a) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = r, this.reject = o, this.psd = a;
      }
      function cr(e, t) {
        var r, o;
        Dt.push(t), e._state === null && (r = e._lib && zt(), t = gn(t), e._state = !1, e._value = t, o = e, ot.some(function(a) {
          return a._value === o._value;
        }) || ot.push(o), ri(e), r && Qt());
      }
      function ri(e) {
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
          ++t.psd.ref, ++Rt, it(Po, [r, e, t]);
        } else e._listeners.push(t);
      }
      function Po(e, t, r) {
        try {
          var o, a = t._value;
          !t._state && Dt.length && (Dt = []), o = ee && t._consoleTask ? t._consoleTask.run(function() {
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
      function Co() {
        Kt(ze, function() {
          zt() && Qt();
        });
      }
      function zt() {
        var e = ft;
        return yt = ft = !1, e;
      }
      function Qt() {
        var e, t, r;
        do
          for (; 0 < Yt.length; ) for (e = Yt, Yt = [], r = e.length, t = 0; t < r; ++t) {
            var o = e[t];
            o[0].apply(null, o[1]);
          }
        while (0 < Yt.length);
        yt = ft = !0;
      }
      function fr() {
        var e = ot;
        ot = [], e.forEach(function(o) {
          o._PSD.onunhandled.call(null, o._value, o);
        });
        for (var t = On.slice(0), r = t.length; r; ) t[--r]();
      }
      function An(e) {
        return new H(fe, !1, e);
      }
      function Ae(e, t) {
        var r = z;
        return function() {
          var o = zt(), a = z;
          try {
            return At(r, !0), e.apply(this, arguments);
          } catch (s) {
            t && t(s);
          } finally {
            At(a, !1), o && Qt();
          }
        };
      }
      X(H.prototype, { then: ur, _then: function(e, t) {
        lr(this, new ni(null, null, e, t, z));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, r = arguments[1];
        return typeof t == "function" ? this.then(null, function(o) {
          return (o instanceof t ? r : An)(o);
        }) : this.then(null, function(o) {
          return (o && o.name === t ? r : An)(o);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return H.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return H.resolve(e()).then(function() {
            return An(t);
          });
        });
      }, timeout: function(e, t) {
        var r = this;
        return e < 1 / 0 ? new H(function(o, a) {
          var s = setTimeout(function() {
            return a(new R.Timeout(t));
          }, e);
          r.then(o, a).finally(clearTimeout.bind(null, s));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && ue(H.prototype, Symbol.toStringTag, "Dexie.Promise"), ze.env = ii(), X(H, { all: function() {
        var e = et.apply(null, arguments).map(In);
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
        }) : new H(fe, !0, e);
      }, reject: An, race: function() {
        var e = et.apply(null, arguments).map(In);
        return new H(function(t, r) {
          e.map(function(o) {
            return H.resolve(o).then(t, r);
          });
        });
      }, PSD: { get: function() {
        return z;
      }, set: function(e) {
        return z = e;
      } }, totalEchoes: { get: function() {
        return Cn;
      } }, newPSD: Et, usePSD: Kt, scheduler: { get: function() {
        return it;
      }, set: function(e) {
        it = e;
      } }, rejectionMapper: { get: function() {
        return gn;
      }, set: function(e) {
        gn = e;
      } }, follow: function(e, t) {
        return new H(function(r, o) {
          return Et(function(a, s) {
            var l = z;
            l.unhandleds = [], l.onunhandled = s, l.finalize = Q(function() {
              var h, y = this;
              h = function() {
                y.unhandleds.length === 0 ? a() : s(y.unhandleds[0]);
              }, On.push(function v() {
                h(), On.splice(On.indexOf(v), 1);
              }), ++Rt, it(function() {
                --Rt == 0 && fr();
              }, []);
            }, l.finalize), e();
          }, t, r, o);
        });
      } }), Fe && (Fe.allSettled && ue(H, "allSettled", function() {
        var e = et.apply(null, arguments).map(In);
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
      }), Fe.any && typeof AggregateError < "u" && ue(H, "any", function() {
        var e = et.apply(null, arguments).map(In);
        return new H(function(t, r) {
          e.length === 0 && r(new AggregateError([]));
          var o = e.length, a = new Array(o);
          e.forEach(function(s, l) {
            return H.resolve(s).then(function(h) {
              return t(h);
            }, function(h) {
              a[l] = h, --o || r(new AggregateError(a));
            });
          });
        });
      }), Fe.withResolvers && (H.withResolvers = Fe.withResolvers));
      var Ve = { awaits: 0, echoes: 0, id: 0 }, Io = 0, Sn = [], Pn = 0, Cn = 0, ko = 0;
      function Et(e, t, r, o) {
        var a = z, s = Object.create(a);
        return s.parent = a, s.ref = 0, s.global = !1, s.id = ++ko, ze.env, s.env = Ue ? { Promise: H, PromiseProp: { value: H, configurable: !0, writable: !0 }, all: H.all, race: H.race, allSettled: H.allSettled, any: H.any, resolve: H.resolve, reject: H.reject } : {}, t && N(s, t), ++a.ref, s.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = Kt(s, e, r, o), s.ref === 0 && s.finalize(), o;
      }
      function Jt() {
        return Ve.id || (Ve.id = ++Io), ++Ve.awaits, Ve.echoes += be, Ve.id;
      }
      function Ot() {
        return !!Ve.awaits && (--Ve.awaits == 0 && (Ve.id = 0), Ve.echoes = Ve.awaits * be, !0);
      }
      function In(e) {
        return Ve.echoes && e && e.constructor === Fe ? (Jt(), e.then(function(t) {
          return Ot(), t;
        }, function(t) {
          return Ot(), De(t);
        })) : e;
      }
      function No() {
        var e = Sn[Sn.length - 1];
        Sn.pop(), At(e, !1);
      }
      function At(e, t) {
        var r, o = z;
        (t ? !Ve.echoes || Pn++ && e === z : !Pn || --Pn && e === z) || queueMicrotask(t ? (function(a) {
          ++Cn, Ve.echoes && --Ve.echoes != 0 || (Ve.echoes = Ve.awaits = Ve.id = 0), Sn.push(z), At(a, !0);
        }).bind(null, e) : No), e !== z && (z = e, o === ze && (ze.env = ii()), Ue && (r = ze.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(p, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function ii() {
        var e = p.Promise;
        return Ue ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(p, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Kt(e, t, r, o, a) {
        var s = z;
        try {
          return At(e, !0), t(r, o, a);
        } finally {
          At(s, !1);
        }
      }
      function oi(e, t, r, o) {
        return typeof e != "function" ? e : function() {
          var a = z;
          r && Jt(), At(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            At(a, !1), o && queueMicrotask(Ot);
          }
        };
      }
      function hr(e) {
        Promise === Fe && Ve.echoes === 0 ? Pn === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + ut).indexOf("[native code]") === -1 && (Jt = Ot = S);
      var De = H.reject, jt = "￿", mt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", ai = "String expected.", Zt = [], kn = "__dbnames", dr = "readonly", pr = "readwrite";
      function Ft(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var si = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Nn(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = je(t))[e], t;
        };
      }
      function ui() {
        throw R.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function pe(e, t) {
        try {
          var r = ci(e), o = ci(t);
          if (r !== o) return r === "Array" ? 1 : o === "Array" ? -1 : r === "binary" ? 1 : o === "binary" ? -1 : r === "string" ? 1 : o === "string" ? -1 : r === "Date" ? 1 : o !== "Date" ? NaN : -1;
          switch (r) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return function(a, s) {
                for (var l = a.length, h = s.length, y = l < h ? l : h, v = 0; v < y; ++v) if (a[v] !== s[v]) return a[v] < s[v] ? -1 : 1;
                return l === h ? 0 : l < h ? -1 : 1;
              }(li(e), li(t));
            case "Array":
              return function(a, s) {
                for (var l = a.length, h = s.length, y = l < h ? l : h, v = 0; v < y; ++v) {
                  var _ = pe(a[v], s[v]);
                  if (_ !== 0) return _;
                }
                return l === h ? 0 : l < h ? -1 : 1;
              }(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function ci(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = Xe(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function li(e) {
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
      var fi = (Te.prototype._trans = function(e, t, r) {
        var o = this._tx || z.trans, a = this.name, s = ee && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function l(v, _, d) {
          if (!d.schema[a]) throw new R.NotFound("Table " + a + " not part of transaction");
          return t(d.idbtrans, d);
        }
        var h = zt();
        try {
          var y = o && o.db._novip === this.db._novip ? o === z.trans ? o._promise(e, l, r) : Et(function() {
            return o._promise(e, l, r);
          }, { trans: o, transless: z.transless || z }) : function v(_, d, T, m) {
            if (_.idbdb && (_._state.openComplete || z.letThrough || _._vip)) {
              var g = _._createTransaction(d, T, _._dbSchema);
              try {
                g.create(), _._state.PR1398_maxLoop = 3;
              } catch (x) {
                return x.name === P.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                  return v(_, d, T, m);
                })) : De(x);
              }
              return g._promise(d, function(x, w) {
                return Et(function() {
                  return z.trans = g, m(x, w, g);
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
            if (_._state.openComplete) return De(new R.DatabaseClosed(_._state.dbOpenError));
            if (!_._state.isBeingOpened) {
              if (!_._state.autoOpen) return De(new R.DatabaseClosed());
              _.open().catch(S);
            }
            return _._state.dbReadyPromise.then(function() {
              return v(_, d, T, m);
            });
          }(this.db, e, [this.name], l);
          return s && (y._consoleTask = s, y = y.catch(function(v) {
            return console.trace(v), De(v);
          })), y;
        } finally {
          h && Qt();
        }
      }, Te.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? De(new R.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(a) {
            return r.hook.reading.fire(a);
          });
        }).then(t);
      }, Te.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (A(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = E(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var r = this.schema.indexes.concat(this.schema.primKey).filter(function(h) {
          if (h.compound && t.every(function(v) {
            return 0 <= h.keyPath.indexOf(v);
          })) {
            for (var y = 0; y < t.length; ++y) if (t.indexOf(h.keyPath[y]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(h, y) {
          return h.keyPath.length - y.keyPath.length;
        })[0];
        if (r && this.db._maxKey !== jt) {
          var s = r.keyPath.slice(0, t.length);
          return this.where(s).equals(s.map(function(y) {
            return e[y];
          }));
        }
        !r && ee && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var o = this.schema.idxByName;
        function a(h, y) {
          return pe(h, y) === 0;
        }
        var l = t.reduce(function(d, y) {
          var v = d[0], _ = d[1], d = o[y], T = e[y];
          return [v || d, v || !d ? Ft(_, d && d.multi ? function(m) {
            return m = Ce(m, y), A(m) && m.some(function(g) {
              return a(T, g);
            });
          } : function(m) {
            return a(T, Ce(m, y));
          }) : _];
        }, [null, null]), s = l[0], l = l[1];
        return s ? this.where(s.name).equals(e[s.keyPath]).filter(l) : r ? this.filter(l) : this.where(t).equals("");
      }, Te.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, Te.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, Te.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, Te.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, Te.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, Te.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, Te.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Te.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, A(e) ? "[".concat(e.join("+"), "]") : e));
      }, Te.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Te.prototype.mapToClass = function(e) {
        var t, r = this.db, o = this.name;
        function a() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof ui && (function(y, v) {
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
        for (var s = /* @__PURE__ */ new Set(), l = e.prototype; l; l = F(l)) Object.getOwnPropertyNames(l).forEach(function(y) {
          return s.add(y);
        });
        function h(y) {
          if (!y) return y;
          var v, _ = Object.create(e.prototype);
          for (v in y) if (!s.has(v)) try {
            _[v] = y[v];
          } catch {
          }
          return _;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = h, this.hook("reading", h), e;
      }, Te.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          N(this, e);
        });
      }, Te.prototype.add = function(e, t) {
        var r = this, o = this.schema.primKey, a = o.auto, s = o.keyPath, l = e;
        return s && a && (l = Nn(s)(e)), this._trans("readwrite", function(h) {
          return r.core.mutate({ trans: h, type: "add", keys: t != null ? [t] : null, values: [l] });
        }).then(function(h) {
          return h.numFailures ? H.reject(h.failures[0]) : h.lastResult;
        }).then(function(h) {
          if (s) try {
            J(e, s, h);
          } catch {
          }
          return h;
        });
      }, Te.prototype.update = function(e, t) {
        return typeof e != "object" || A(e) ? this.where(":id").equals(e).modify(t) : (e = Ce(e, this.schema.primKey.keyPath), e === void 0 ? De(new R.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, Te.prototype.put = function(e, t) {
        var r = this, o = this.schema.primKey, a = o.auto, s = o.keyPath, l = e;
        return s && a && (l = Nn(s)(e)), this._trans("readwrite", function(h) {
          return r.core.mutate({ trans: h, type: "put", values: [l], keys: t != null ? [t] : null });
        }).then(function(h) {
          return h.numFailures ? H.reject(h.failures[0]) : h.lastResult;
        }).then(function(h) {
          if (s) try {
            J(e, s, h);
          } catch {
          }
          return h;
        });
      }, Te.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: [e] }).then(function(o) {
            return Dn(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? H.reject(o.failures[0]) : void 0;
          });
        });
      }, Te.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: si }).then(function(r) {
            return Dn(e, null, r);
          });
        }).then(function(t) {
          return t.numFailures ? H.reject(t.failures[0]) : void 0;
        });
      }, Te.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(r) {
          return t.core.getMany({ keys: e, trans: r }).then(function(o) {
            return o.map(function(a) {
              return t.hook.reading.fire(a);
            });
          });
        });
      }, Te.prototype.bulkAdd = function(e, t, r) {
        var o = this, a = Array.isArray(t) ? t : void 0, s = (r = r || (a ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var v = o.schema.primKey, h = v.auto, v = v.keyPath;
          if (v && a) throw new R.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new R.InvalidArgument("Arguments objects and keys must have the same length");
          var y = e.length, v = v && h ? e.map(Nn(v)) : e;
          return o.core.mutate({ trans: l, type: "add", keys: a, values: v, wantResults: s }).then(function(g) {
            var d = g.numFailures, T = g.results, m = g.lastResult, g = g.failures;
            if (d === 0) return s ? T : m;
            throw new ht("".concat(o.name, ".bulkAdd(): ").concat(d, " of ").concat(y, " operations failed"), g);
          });
        });
      }, Te.prototype.bulkPut = function(e, t, r) {
        var o = this, a = Array.isArray(t) ? t : void 0, s = (r = r || (a ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var v = o.schema.primKey, h = v.auto, v = v.keyPath;
          if (v && a) throw new R.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== e.length) throw new R.InvalidArgument("Arguments objects and keys must have the same length");
          var y = e.length, v = v && h ? e.map(Nn(v)) : e;
          return o.core.mutate({ trans: l, type: "put", keys: a, values: v, wantResults: s }).then(function(g) {
            var d = g.numFailures, T = g.results, m = g.lastResult, g = g.failures;
            if (d === 0) return s ? T : m;
            throw new ht("".concat(o.name, ".bulkPut(): ").concat(d, " of ").concat(y, " operations failed"), g);
          });
        });
      }, Te.prototype.bulkUpdate = function(e) {
        var t = this, r = this.core, o = e.map(function(l) {
          return l.key;
        }), a = e.map(function(l) {
          return l.changes;
        }), s = [];
        return this._trans("readwrite", function(l) {
          return r.getMany({ trans: l, keys: o, cache: "clone" }).then(function(h) {
            var y = [], v = [];
            e.forEach(function(d, T) {
              var m = d.key, g = d.changes, x = h[T];
              if (x) {
                for (var w = 0, O = Object.keys(g); w < O.length; w++) {
                  var C = O[w], I = g[C];
                  if (C === t.schema.primKey.keyPath) {
                    if (pe(I, m) !== 0) throw new R.Constraint("Cannot update primary key in bulkUpdate()");
                  } else J(x, C, I);
                }
                s.push(T), y.push(m), v.push(x);
              }
            });
            var _ = y.length;
            return r.mutate({ trans: l, type: "put", keys: y, values: v, updates: { keys: o, changeSpecs: a } }).then(function(d) {
              var T = d.numFailures, m = d.failures;
              if (T === 0) return _;
              for (var g = 0, x = Object.keys(m); g < x.length; g++) {
                var w, O = x[g], C = s[Number(O)];
                C != null && (w = m[O], delete m[O], m[C] = w);
              }
              throw new ht("".concat(t.name, ".bulkUpdate(): ").concat(T, " of ").concat(_, " operations failed"), m);
            });
          });
        });
      }, Te.prototype.bulkDelete = function(e) {
        var t = this, r = e.length;
        return this._trans("readwrite", function(o) {
          return t.core.mutate({ trans: o, type: "delete", keys: e }).then(function(a) {
            return Dn(t, e, a);
          });
        }).then(function(l) {
          var a = l.numFailures, s = l.lastResult, l = l.failures;
          if (a === 0) return s;
          throw new ht("".concat(t.name, ".bulkDelete(): ").concat(a, " of ").concat(r, " operations failed"), l);
        });
      }, Te);
      function Te() {
      }
      function sn(e) {
        function t(l, h) {
          if (h) {
            for (var y = arguments.length, v = new Array(y - 1); --y; ) v[y - 1] = arguments[y];
            return r[l].subscribe.apply(null, v), e;
          }
          if (typeof l == "string") return r[l];
        }
        var r = {};
        t.addEventType = s;
        for (var o = 1, a = arguments.length; o < a; ++o) s(arguments[o]);
        return t;
        function s(l, h, y) {
          if (typeof l != "object") {
            var v;
            h = h || le;
            var _ = { subscribers: [], fire: y = y || S, subscribe: function(d) {
              _.subscribers.indexOf(d) === -1 && (_.subscribers.push(d), _.fire = h(_.fire, d));
            }, unsubscribe: function(d) {
              _.subscribers = _.subscribers.filter(function(T) {
                return T !== d;
              }), _.fire = _.subscribers.reduce(h, y);
            } };
            return r[l] = t[l] = _;
          }
          E(v = l).forEach(function(d) {
            var T = v[d];
            if (A(T)) s(d, v[d][0], v[d][1]);
            else {
              if (T !== "asap") throw new R.InvalidArgument("Invalid event config");
              var m = s(d, K, function() {
                for (var g = arguments.length, x = new Array(g); g--; ) x[g] = arguments[g];
                m.subscribers.forEach(function(w) {
                  qe(function() {
                    w.apply(null, x);
                  });
                });
              });
            }
          });
        }
      }
      function un(e, t) {
        return he(t).from({ prototype: e }), t;
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
        if (!r) throw new R.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return r;
      }
      function hi(e, t, r) {
        var o = Rn(e, t.schema);
        return t.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: o, range: e.range } });
      }
      function Kn(e, t, r, o) {
        var a = e.replayFilter ? Ft(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var s = {}, l = function(h, y, v) {
            var _, d;
            a && !a(y, v, function(T) {
              return y.stop(T);
            }, function(T) {
              return y.fail(T);
            }) || ((d = "" + (_ = y.primaryKey)) == "[object ArrayBuffer]" && (d = "" + new Uint8Array(_)), M(s, d) || (s[d] = !0, t(h, y, v)));
          };
          return Promise.all([e.or._iterate(l, r), di(hi(e, o, r), e.algorithm, l, !e.keysOnly && e.valueMapper)]);
        }
        return di(hi(e, o, r), Ft(e.algorithm, a), t, !e.keysOnly && e.valueMapper);
      }
      function di(e, t, r, o) {
        var a = Ae(o ? function(s, l, h) {
          return r(o(s), l, h);
        } : r);
        return e.then(function(s) {
          if (s) return s.start(function() {
            var l = function() {
              return s.continue();
            };
            t && !t(s, function(h) {
              return l = h;
            }, function(h) {
              s.stop(h), l = S;
            }, function(h) {
              s.fail(h), l = S;
            }) || a(s.value, s, function(h) {
              return l = h;
            }), l();
          });
        });
      }
      var cn = (pi.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var r = t.add;
          if (A(r)) return f(f([], A(e) ? e : [], !0), r).sort();
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
          if (A(o)) return A(e) ? e.filter(function(a) {
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
      }, pi);
      function pi(e) {
        this["@@propmod"] = e;
      }
      var Do = (me.prototype._read = function(e, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, De.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, me.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, De.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
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
        function s(y, v) {
          return v ? s(y[r[v]], v - 1) : y[o];
        }
        var l = this._ctx.dir === "next" ? 1 : -1;
        function h(y, v) {
          return pe(s(y, a), s(v, a)) * l;
        }
        return this.toArray(function(y) {
          return y.sort(h);
        }).then(t);
      }, me.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx;
          if (o.dir === "next" && en(o, !0) && 0 < o.limit) {
            var a = o.valueMapper, s = Rn(o, o.table.core.schema);
            return o.table.core.query({ trans: r, limit: o.limit, values: !0, query: { index: s, range: o.range } }).then(function(h) {
              return h = h.result, a ? h.map(a) : h;
            });
          }
          var l = [];
          return Kn(o, function(h) {
            return l.push(h);
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
          var o = a.primaryKey.toString(), a = M(t, o);
          return t[o] = !0, !a;
        }), this;
      }, me.prototype.modify = function(e) {
        var t = this, r = this._ctx;
        return this._write(function(o) {
          var a, s, l;
          l = typeof e == "function" ? e : (a = E(e), s = a.length, function(O) {
            for (var C = !1, I = 0; I < s; ++I) {
              var k = a[I], B = e[k], V = Ce(O, k);
              B instanceof cn ? (J(O, k, B.execute(V)), C = !0) : V !== B && (J(O, k, B), C = !0);
            }
            return C;
          });
          var h = r.table.core, d = h.schema.primaryKey, y = d.outbound, v = d.extractKey, _ = 200, d = t.db._options.modifyChunkSize;
          d && (_ = typeof d == "object" ? d[h.name] || d["*"] || 200 : d);
          function T(O, k) {
            var I = k.failures, k = k.numFailures;
            g += O - k;
            for (var B = 0, V = E(I); B < V.length; B++) {
              var q = V[B];
              m.push(I[q]);
            }
          }
          var m = [], g = 0, x = [], w = e === yi;
          return t.clone().primaryKeys().then(function(O) {
            function C(k) {
              var B = Math.min(_, O.length - k), V = O.slice(k, k + B);
              return (w ? Promise.resolve([]) : h.getMany({ trans: o, keys: V, cache: "immutable" })).then(function(q) {
                var U = [], W = [], $ = y ? [] : null, G = w ? V : [];
                if (!w) for (var ce = 0; ce < B; ++ce) {
                  var ye = q[ce], ae = { value: je(ye), primKey: O[k + ce] };
                  l.call(ae, ae.value, ae) !== !1 && (ae.value == null ? G.push(O[k + ce]) : y || pe(v(ye), v(ae.value)) === 0 ? (W.push(ae.value), y && $.push(O[k + ce])) : (G.push(O[k + ce]), U.push(ae.value)));
                }
                return Promise.resolve(0 < U.length && h.mutate({ trans: o, type: "add", values: U }).then(function(Ie) {
                  for (var oe in Ie.failures) G.splice(parseInt(oe), 1);
                  T(U.length, Ie);
                })).then(function() {
                  return (0 < W.length || I && typeof e == "object") && h.mutate({ trans: o, type: "put", keys: $, values: W, criteria: I, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < k }).then(function(Ie) {
                    return T(W.length, Ie);
                  });
                }).then(function() {
                  return (0 < G.length || I && w) && h.mutate({ trans: o, type: "delete", keys: G, criteria: I, isAdditionalChunk: 0 < k }).then(function(Ie) {
                    return Dn(r.table, G, Ie);
                  }).then(function(Ie) {
                    return T(G.length, Ie);
                  });
                }).then(function() {
                  return O.length > k + B && C(k + _);
                });
              });
            }
            var I = en(r) && r.limit === 1 / 0 && (typeof e != "function" || w) && { index: r.index, range: r.range };
            return C(0).then(function() {
              if (0 < m.length) throw new Gt("Error modifying one or more objects", m, g, x);
              return O.length;
            });
          });
        });
      }, me.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !en(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(yi) : this._write(function(r) {
          var o = e.table.core.schema.primaryKey, a = t;
          return e.table.core.count({ trans: r, query: { index: o, range: a } }).then(function(s) {
            return e.table.core.mutate({ trans: r, type: "deleteRange", range: a }).then(function(y) {
              var h = y.failures, y = y.numFailures;
              if (y) throw new Gt("Could not delete some values", Object.keys(h).map(function(v) {
                return h[v];
              }), s - y);
              return s - y;
            });
          });
        });
      }, me);
      function me() {
      }
      var yi = function(e, t) {
        return t.value = null;
      };
      function Ro(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function Ko(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function nt(e, t, r) {
        return e = e instanceof vi ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function tn(e) {
        return new e.Collection(e, function() {
          return mi("");
        }).limit(0);
      }
      function jn(e, t, r, o) {
        var a, s, l, h, y, v, _, d = r.length;
        if (!r.every(function(g) {
          return typeof g == "string";
        })) return nt(e, ai);
        function T(g) {
          a = g === "next" ? function(w) {
            return w.toUpperCase();
          } : function(w) {
            return w.toLowerCase();
          }, s = g === "next" ? function(w) {
            return w.toLowerCase();
          } : function(w) {
            return w.toUpperCase();
          }, l = g === "next" ? Ro : Ko;
          var x = r.map(function(w) {
            return { lower: s(w), upper: a(w) };
          }).sort(function(w, O) {
            return l(w.lower, O.lower);
          });
          h = x.map(function(w) {
            return w.upper;
          }), y = x.map(function(w) {
            return w.lower;
          }), _ = (v = g) === "next" ? "" : o;
        }
        T("next"), e = new e.Collection(e, function() {
          return St(h[0], y[d - 1] + o);
        }), e._ondirectionchange = function(g) {
          T(g);
        };
        var m = 0;
        return e._addAlgorithm(function(g, x, w) {
          var O = g.key;
          if (typeof O != "string") return !1;
          var C = s(O);
          if (t(C, y, m)) return !0;
          for (var I = null, k = m; k < d; ++k) {
            var B = function(V, q, U, W, $, G) {
              for (var ce = Math.min(V.length, W.length), ye = -1, ae = 0; ae < ce; ++ae) {
                var Ie = q[ae];
                if (Ie !== W[ae]) return $(V[ae], U[ae]) < 0 ? V.substr(0, ae) + U[ae] + U.substr(ae + 1) : $(V[ae], W[ae]) < 0 ? V.substr(0, ae) + W[ae] + U.substr(ae + 1) : 0 <= ye ? V.substr(0, ye) + q[ye] + U.substr(ye + 1) : null;
                $(V[ae], Ie) < 0 && (ye = ae);
              }
              return ce < W.length && G === "next" ? V + U.substr(V.length) : ce < V.length && G === "prev" ? V.substr(0, U.length) : ye < 0 ? null : V.substr(0, ye) + W[ye] + U.substr(ye + 1);
            }(O, C, h[k], y[k], l, v);
            B === null && I === null ? m = k + 1 : (I === null || 0 < l(I, B)) && (I = B);
          }
          return x(I !== null ? function() {
            g.continue(I + _);
          } : w), !1;
        }), e;
      }
      function St(e, t, r, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: o };
      }
      function mi(e) {
        return { type: 1, lower: e, upper: e };
      }
      var vi = (Object.defineProperty($e.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), $e.prototype.between = function(e, t, r, o) {
        r = r !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || o) && (!r || !o) ? tn(this) : new this.Collection(this, function() {
            return St(e, t, !r, !o);
          });
        } catch {
          return nt(this, mt);
        }
      }, $e.prototype.equals = function(e) {
        return e == null ? nt(this, mt) : new this.Collection(this, function() {
          return mi(e);
        });
      }, $e.prototype.above = function(e) {
        return e == null ? nt(this, mt) : new this.Collection(this, function() {
          return St(e, void 0, !0);
        });
      }, $e.prototype.aboveOrEqual = function(e) {
        return e == null ? nt(this, mt) : new this.Collection(this, function() {
          return St(e, void 0, !1);
        });
      }, $e.prototype.below = function(e) {
        return e == null ? nt(this, mt) : new this.Collection(this, function() {
          return St(void 0, e, !1, !0);
        });
      }, $e.prototype.belowOrEqual = function(e) {
        return e == null ? nt(this, mt) : new this.Collection(this, function() {
          return St(void 0, e);
        });
      }, $e.prototype.startsWith = function(e) {
        return typeof e != "string" ? nt(this, ai) : this.between(e, e + jt, !0, !0);
      }, $e.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : jn(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], jt);
      }, $e.prototype.equalsIgnoreCase = function(e) {
        return jn(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, $e.prototype.anyOfIgnoreCase = function() {
        var e = et.apply(st, arguments);
        return e.length === 0 ? tn(this) : jn(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, $e.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = et.apply(st, arguments);
        return e.length === 0 ? tn(this) : jn(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, jt);
      }, $e.prototype.anyOf = function() {
        var e = this, t = et.apply(st, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return nt(this, mt);
        }
        if (t.length === 0) return tn(this);
        var o = new this.Collection(this, function() {
          return St(t[0], t[t.length - 1]);
        });
        o._ondirectionchange = function(s) {
          r = s === "next" ? e._ascending : e._descending, t.sort(r);
        };
        var a = 0;
        return o._addAlgorithm(function(s, l, h) {
          for (var y = s.key; 0 < r(y, t[a]); ) if (++a === t.length) return l(h), !1;
          return r(y, t[a]) === 0 || (l(function() {
            s.continue(t[a]);
          }), !1);
        }), o;
      }, $e.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, $e.prototype.noneOf = function() {
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
      }, $e.prototype.inAnyRange = function(O, t) {
        var r = this, o = this._cmp, a = this._ascending, s = this._descending, l = this._min, h = this._max;
        if (O.length === 0) return tn(this);
        if (!O.every(function(C) {
          return C[0] !== void 0 && C[1] !== void 0 && a(C[0], C[1]) <= 0;
        })) return nt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", R.InvalidArgument);
        var y = !t || t.includeLowers !== !1, v = t && t.includeUppers === !0, _, d = a;
        function T(C, I) {
          return d(C[0], I[0]);
        }
        try {
          (_ = O.reduce(function(C, I) {
            for (var k = 0, B = C.length; k < B; ++k) {
              var V = C[k];
              if (o(I[0], V[1]) < 0 && 0 < o(I[1], V[0])) {
                V[0] = l(V[0], I[0]), V[1] = h(V[1], I[1]);
                break;
              }
            }
            return k === B && C.push(I), C;
          }, [])).sort(T);
        } catch {
          return nt(this, mt);
        }
        var m = 0, g = v ? function(C) {
          return 0 < a(C, _[m][1]);
        } : function(C) {
          return 0 <= a(C, _[m][1]);
        }, x = y ? function(C) {
          return 0 < s(C, _[m][0]);
        } : function(C) {
          return 0 <= s(C, _[m][0]);
        }, w = g, O = new this.Collection(this, function() {
          return St(_[0][0], _[_.length - 1][1], !y, !v);
        });
        return O._ondirectionchange = function(C) {
          d = C === "next" ? (w = g, a) : (w = x, s), _.sort(T);
        }, O._addAlgorithm(function(C, I, k) {
          for (var B, V = C.key; w(V); ) if (++m === _.length) return I(k), !1;
          return !g(B = V) && !x(B) || (r._cmp(V, _[m][1]) === 0 || r._cmp(V, _[m][0]) === 0 || I(function() {
            d === a ? C.continue(_[m][0]) : C.continue(_[m][1]);
          }), !1);
        }), O;
      }, $e.prototype.startsWithAnyOf = function() {
        var e = et.apply(st, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? tn(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + jt];
        })) : nt(this, "startsWithAnyOf() only works with strings");
      }, $e);
      function $e() {
      }
      function dt(e) {
        return Ae(function(t) {
          return ln(t), e(t.target.error), !1;
        });
      }
      function ln(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var fn = "storagemutated", vr = "x-storagemutated-1", Pt = sn(null, fn), jo = (pt.prototype._lock = function() {
        return de(!z.global), ++this._reculock, this._reculock !== 1 || z.global || (z.lockOwnerFor = this), this;
      }, pt.prototype._unlock = function() {
        if (de(!z.global), --this._reculock == 0) for (z.global || (z.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Kt(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, pt.prototype._locked = function() {
        return this._reculock && z.lockOwnerFor !== this;
      }, pt.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var r = this.db.idbdb, o = this.db._state.dbOpenError;
        if (de(!this.idbtrans), !e && !r) switch (o && o.name) {
          case "DatabaseClosedError":
            throw new R.DatabaseClosed(o);
          case "MissingAPIError":
            throw new R.MissingAPI(o.message, o);
          default:
            throw new R.OpenFailed(o);
        }
        if (!this.active) throw new R.TransactionInactive();
        return de(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Ae(function(a) {
          ln(a), t._reject(e.error);
        }), e.onabort = Ae(function(a) {
          ln(a), t.active && t._reject(new R.Abort(e.error)), t.active = !1, t.on("abort").fire(a);
        }), e.oncomplete = Ae(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && Pt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, pt.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return De(new R.ReadOnly("Transaction is readonly"));
        if (!this.active) return De(new R.TransactionInactive());
        if (this._locked()) return new H(function(s, l) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, r).then(s, l);
          }, z]);
        });
        if (r) return Et(function() {
          var s = new H(function(l, h) {
            o._lock();
            var y = t(l, h, o);
            y && y.then && y.then(l, h);
          });
          return s.finally(function() {
            return o._unlock();
          }), s._lib = !0, s;
        });
        var a = new H(function(s, l) {
          var h = t(s, l, o);
          h && h.then && h.then(s, l);
        });
        return a._lib = !0, a;
      }, pt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, pt.prototype.waitFor = function(e) {
        var t, r = this._root(), o = H.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return o;
        }) : (r._waitingFor = o, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function s() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (t.get(-1 / 0).onsuccess = s);
        }());
        var a = r._waitingFor;
        return new H(function(s, l) {
          o.then(function(h) {
            return r._waitingQueue.push(Ae(s.bind(null, h)));
          }, function(h) {
            return r._waitingQueue.push(Ae(l.bind(null, h)));
          }).finally(function() {
            r._waitingFor === a && (r._waitingFor = null);
          });
        });
      }, pt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new R.Abort()));
      }, pt.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (M(t, e)) return t[e];
        var r = this.schema[e];
        if (!r) throw new R.NotFound("Table " + e + " not part of transaction");
        return r = new this.db.Table(e, r, this), r.core = this.db.core.table(e), t[e] = r;
      }, pt);
      function pt() {
      }
      function gr(e, t, r, o, a, s, l, h) {
        return { name: e, keyPath: t, unique: r, multi: o, auto: a, compound: s, src: (r && !l ? "&" : "") + (o ? "*" : "") + (a ? "++" : "") + gi(t), type: h };
      }
      function gi(e) {
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
          return Ce(r, t);
        } : function(r) {
          return Ce(r, e);
        };
        var t;
      }
      function bi(e) {
        return [].slice.call(e);
      }
      var Fo = 0;
      function dn(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Bo(e, t, y) {
        function o(w) {
          if (w.type === 3) return null;
          if (w.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var m = w.lower, g = w.upper, x = w.lowerOpen, w = w.upperOpen;
          return m === void 0 ? g === void 0 ? null : t.upperBound(g, !!w) : g === void 0 ? t.lowerBound(m, !!x) : t.bound(m, g, !!x, !!w);
        }
        function a(T) {
          var m, g = T.name;
          return { name: g, schema: T, mutate: function(x) {
            var w = x.trans, O = x.type, C = x.keys, I = x.values, k = x.range;
            return new Promise(function(B, V) {
              B = Ae(B);
              var q = w.objectStore(g), U = q.keyPath == null, W = O === "put" || O === "add";
              if (!W && O !== "delete" && O !== "deleteRange") throw new Error("Invalid operation type: " + O);
              var $, G = (C || I || { length: 1 }).length;
              if (C && I && C.length !== I.length) throw new Error("Given keys array must have same length as given values array.");
              if (G === 0) return B({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function ce(Qe) {
                ++Ie, ln(Qe);
              }
              var ye = [], ae = [], Ie = 0;
              if (O === "deleteRange") {
                if (k.type === 4) return B({ numFailures: Ie, failures: ae, results: [], lastResult: void 0 });
                k.type === 3 ? ye.push($ = q.clear()) : ye.push($ = q.delete(o(k)));
              } else {
                var U = W ? U ? [I, C] : [I, null] : [C, null], oe = U[0], He = U[1];
                if (W) for (var Ge = 0; Ge < G; ++Ge) ye.push($ = He && He[Ge] !== void 0 ? q[O](oe[Ge], He[Ge]) : q[O](oe[Ge])), $.onerror = ce;
                else for (Ge = 0; Ge < G; ++Ge) ye.push($ = q[O](oe[Ge])), $.onerror = ce;
              }
              function Yn(Qe) {
                Qe = Qe.target.result, ye.forEach(function(qt, Br) {
                  return qt.error != null && (ae[Br] = qt.error);
                }), B({ numFailures: Ie, failures: ae, results: O === "delete" ? C : ye.map(function(qt) {
                  return qt.result;
                }), lastResult: Qe });
              }
              $.onerror = function(Qe) {
                ce(Qe), Yn(Qe);
              }, $.onsuccess = Yn;
            });
          }, getMany: function(x) {
            var w = x.trans, O = x.keys;
            return new Promise(function(C, I) {
              C = Ae(C);
              for (var k, B = w.objectStore(g), V = O.length, q = new Array(V), U = 0, W = 0, $ = function(ye) {
                ye = ye.target, q[ye._pos] = ye.result, ++W === U && C(q);
              }, G = dt(I), ce = 0; ce < V; ++ce) O[ce] != null && ((k = B.get(O[ce]))._pos = ce, k.onsuccess = $, k.onerror = G, ++U);
              U === 0 && C(q);
            });
          }, get: function(x) {
            var w = x.trans, O = x.key;
            return new Promise(function(C, I) {
              C = Ae(C);
              var k = w.objectStore(g).get(O);
              k.onsuccess = function(B) {
                return C(B.target.result);
              }, k.onerror = dt(I);
            });
          }, query: (m = v, function(x) {
            return new Promise(function(w, O) {
              w = Ae(w);
              var C, I, k, U = x.trans, B = x.values, V = x.limit, $ = x.query, q = V === 1 / 0 ? void 0 : V, W = $.index, $ = $.range, U = U.objectStore(g), W = W.isPrimaryKey ? U : U.index(W.name), $ = o($);
              if (V === 0) return w({ result: [] });
              m ? ((q = B ? W.getAll($, q) : W.getAllKeys($, q)).onsuccess = function(G) {
                return w({ result: G.target.result });
              }, q.onerror = dt(O)) : (C = 0, I = !B && "openKeyCursor" in W ? W.openKeyCursor($) : W.openCursor($), k = [], I.onsuccess = function(G) {
                var ce = I.result;
                return ce ? (k.push(B ? ce.value : ce.primaryKey), ++C === V ? w({ result: k }) : void ce.continue()) : w({ result: k });
              }, I.onerror = dt(O));
            });
          }), openCursor: function(x) {
            var w = x.trans, O = x.values, C = x.query, I = x.reverse, k = x.unique;
            return new Promise(function(B, V) {
              B = Ae(B);
              var W = C.index, q = C.range, U = w.objectStore(g), U = W.isPrimaryKey ? U : U.index(W.name), W = I ? k ? "prevunique" : "prev" : k ? "nextunique" : "next", $ = !O && "openKeyCursor" in U ? U.openKeyCursor(o(q), W) : U.openCursor(o(q), W);
              $.onerror = dt(V), $.onsuccess = Ae(function(G) {
                var ce, ye, ae, Ie, oe = $.result;
                oe ? (oe.___id = ++Fo, oe.done = !1, ce = oe.continue.bind(oe), ye = (ye = oe.continuePrimaryKey) && ye.bind(oe), ae = oe.advance.bind(oe), Ie = function() {
                  throw new Error("Cursor not stopped");
                }, oe.trans = w, oe.stop = oe.continue = oe.continuePrimaryKey = oe.advance = function() {
                  throw new Error("Cursor not started");
                }, oe.fail = Ae(V), oe.next = function() {
                  var He = this, Ge = 1;
                  return this.start(function() {
                    return Ge-- ? He.continue() : He.stop();
                  }).then(function() {
                    return He;
                  });
                }, oe.start = function(He) {
                  function Ge() {
                    if ($.result) try {
                      He();
                    } catch (Qe) {
                      oe.fail(Qe);
                    }
                    else oe.done = !0, oe.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, oe.stop();
                  }
                  var Yn = new Promise(function(Qe, qt) {
                    Qe = Ae(Qe), $.onerror = dt(qt), oe.fail = qt, oe.stop = function(Br) {
                      oe.stop = oe.continue = oe.continuePrimaryKey = oe.advance = Ie, Qe(Br);
                    };
                  });
                  return $.onsuccess = Ae(function(Qe) {
                    $.onsuccess = Ge, Ge();
                  }), oe.continue = ce, oe.continuePrimaryKey = ye, oe.advance = ae, Ge(), Yn;
                }, B(oe)) : B(null);
              }, V);
            });
          }, count: function(x) {
            var w = x.query, O = x.trans, C = w.index, I = w.range;
            return new Promise(function(k, B) {
              var V = O.objectStore(g), q = C.isPrimaryKey ? V : V.index(C.name), V = o(I), q = V ? q.count(V) : q.count();
              q.onsuccess = Ae(function(U) {
                return k(U.target.result);
              }), q.onerror = dt(B);
            });
          } };
        }
        var s, l, h, _ = (l = y, h = bi((s = e).objectStoreNames), { schema: { name: s.name, tables: h.map(function(T) {
          return l.objectStore(T);
        }).map(function(T) {
          var m = T.keyPath, w = T.autoIncrement, g = A(m), x = {}, w = { name: T.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: m == null, compound: g, keyPath: m, autoIncrement: w, unique: !0, extractKey: _r(m) }, indexes: bi(T.indexNames).map(function(O) {
            return T.index(O);
          }).map(function(k) {
            var C = k.name, I = k.unique, B = k.multiEntry, k = k.keyPath, B = { name: C, compound: A(k), keyPath: k, unique: I, multiEntry: B, extractKey: _r(k) };
            return x[dn(k)] = B;
          }), getIndexByKeyPath: function(O) {
            return x[dn(O)];
          } };
          return x[":id"] = w.primaryKey, m != null && (x[dn(m)] = w.primaryKey), w;
        }) }, hasGetAll: 0 < h.length && "getAll" in l.objectStore(h[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), y = _.schema, v = _.hasGetAll, _ = y.tables.map(a), d = {};
        return _.forEach(function(T) {
          return d[T.name] = T;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(T) {
          if (!d[T]) throw new Error("Table '".concat(T, "' not found"));
          return d[T];
        }, MIN_KEY: -1 / 0, MAX_KEY: hn(t), schema: y };
      }
      function Mo(e, t, r, o) {
        var a = r.IDBKeyRange;
        return r.indexedDB, { dbcore: (o = Bo(t, a, o), e.dbcore.reduce(function(s, l) {
          return l = l.create, c(c({}, s), l(s));
        }, o)) };
      }
      function Fn(e, o) {
        var r = o.db, o = Mo(e._middlewares, r, e._deps, o);
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
            var h = function y(v, _) {
              return Me(v, _) || (v = F(v)) && y(v, _);
            }(l, a);
            (!h || "value" in h && h.value === void 0) && (l === e.Transaction.prototype || l instanceof e.Transaction ? ue(l, a, { get: function() {
              return this.table(a);
            }, set: function(y) {
              ne(this, a, { value: y, writable: !0, configurable: !0, enumerable: !0 });
            } }) : l[a] = new e.Table(a, s));
          });
        });
      }
      function wr(e, t) {
        t.forEach(function(r) {
          for (var o in r) r[o] instanceof e.Table && delete r[o];
        });
      }
      function qo(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function Lo(e, t, r, o) {
        var a = e._dbSchema;
        r.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = br("$meta", wi("")[0], []), e._storeNames.push("$meta"));
        var s = e._createTransaction("readwrite", e._storeNames, a);
        s.create(r), s._completion.catch(o);
        var l = s._reject.bind(s), h = z.transless || z;
        Et(function() {
          return z.trans = s, z.transless = h, t !== 0 ? (Fn(e, r), v = t, ((y = s).storeNames.includes("$meta") ? y.table("$meta").get("version").then(function(_) {
            return _ ?? v;
          }) : H.resolve(v)).then(function(_) {
            return T = _, m = s, g = r, x = [], _ = (d = e)._versions, w = d._dbSchema = qn(0, d.idbdb, g), (_ = _.filter(function(O) {
              return O._cfg.version >= T;
            })).length !== 0 ? (_.forEach(function(O) {
              x.push(function() {
                var C = w, I = O._cfg.dbschema;
                Ln(d, C, g), Ln(d, I, g), w = d._dbSchema = I;
                var k = xr(C, I);
                k.add.forEach(function(W) {
                  Tr(g, W[0], W[1].primKey, W[1].indexes);
                }), k.change.forEach(function(W) {
                  if (W.recreate) throw new R.Upgrade("Not yet support for changing primary key");
                  var $ = g.objectStore(W.name);
                  W.add.forEach(function(G) {
                    return Mn($, G);
                  }), W.change.forEach(function(G) {
                    $.deleteIndex(G.name), Mn($, G);
                  }), W.del.forEach(function(G) {
                    return $.deleteIndex(G);
                  });
                });
                var B = O._cfg.contentUpgrade;
                if (B && O._cfg.version > T) {
                  Fn(d, g), m._memoizedTables = {};
                  var V = re(I);
                  k.del.forEach(function(W) {
                    V[W] = C[W];
                  }), wr(d, [d.Transaction.prototype]), Bn(d, [d.Transaction.prototype], E(V), V), m.schema = V;
                  var q, U = ct(B);
                  return U && Jt(), k = H.follow(function() {
                    var W;
                    (q = B(m)) && U && (W = Ot.bind(null, null), q.then(W, W));
                  }), q && typeof q.then == "function" ? H.resolve(q) : k.then(function() {
                    return q;
                  });
                }
              }), x.push(function(C) {
                var I, k, B = O._cfg.dbschema;
                I = B, k = C, [].slice.call(k.db.objectStoreNames).forEach(function(V) {
                  return I[V] == null && k.db.deleteObjectStore(V);
                }), wr(d, [d.Transaction.prototype]), Bn(d, [d.Transaction.prototype], d._storeNames, d._dbSchema), m.schema = d._dbSchema;
              }), x.push(function(C) {
                d.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(d.idbdb.version / 10) === O._cfg.version ? (d.idbdb.deleteObjectStore("$meta"), delete d._dbSchema.$meta, d._storeNames = d._storeNames.filter(function(I) {
                  return I !== "$meta";
                })) : C.objectStore("$meta").put(O._cfg.version, "version"));
              });
            }), function O() {
              return x.length ? H.resolve(x.shift()(m.idbtrans)).then(O) : H.resolve();
            }().then(function() {
              _i(w, g);
            })) : H.resolve();
            var d, T, m, g, x, w;
          }).catch(l)) : (E(a).forEach(function(_) {
            Tr(r, _, a[_].primKey, a[_].indexes);
          }), Fn(e, r), void H.follow(function() {
            return e.on.populate.fire(s);
          }).catch(l));
          var y, v;
        });
      }
      function Uo(e, t) {
        _i(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var r = qn(0, e.idbdb, t);
        Ln(e, e._dbSchema, t);
        for (var o = 0, a = xr(r, e._dbSchema).change; o < a.length; o++) {
          var s = function(l) {
            if (l.change.length || l.recreate) return console.warn("Unable to patch indexes of table ".concat(l.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var h = t.objectStore(l.name);
            l.add.forEach(function(y) {
              ee && console.debug("Dexie upgrade patch: Creating missing index ".concat(l.name, ".").concat(y.src)), Mn(h, y);
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
              var h = a.idxByName, y = s.idxByName, v = void 0;
              for (v in h) y[v] || l.del.push(v);
              for (v in y) {
                var _ = h[v], d = y[v];
                _ ? _.src !== d.src && l.change.push(d) : l.add.push(d);
              }
              (0 < l.del.length || 0 < l.add.length || 0 < l.change.length) && o.change.push(l);
            }
          } else o.add.push([r, s]);
        }
        return o;
      }
      function Tr(e, t, r, o) {
        var a = e.db.createObjectStore(t, r.keyPath ? { keyPath: r.keyPath, autoIncrement: r.auto } : { autoIncrement: r.auto });
        return o.forEach(function(s) {
          return Mn(a, s);
        }), a;
      }
      function _i(e, t) {
        E(e).forEach(function(r) {
          t.db.objectStoreNames.contains(r) || (ee && console.debug("Dexie: Creating missing table", r), Tr(t, r, e[r].primKey, e[r].indexes));
        });
      }
      function Mn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function qn(e, t, r) {
        var o = {};
        return ke(t.objectStoreNames, 0).forEach(function(a) {
          for (var s = r.objectStore(a), l = gr(gi(v = s.keyPath), v || "", !0, !1, !!s.autoIncrement, v && typeof v != "string", !0), h = [], y = 0; y < s.indexNames.length; ++y) {
            var _ = s.index(s.indexNames[y]), v = _.keyPath, _ = gr(_.name, v, !!_.unique, !!_.multiEntry, !1, v && typeof v != "string", !1);
            h.push(_);
          }
          o[a] = br(a, l, h);
        }), o;
      }
      function Ln(e, t, r) {
        for (var o = r.db.objectStoreNames, a = 0; a < o.length; ++a) {
          var s = o[a], l = r.objectStore(s);
          e._hasGetAll = "getAll" in l;
          for (var h = 0; h < l.indexNames.length; ++h) {
            var y = l.indexNames[h], v = l.index(y).keyPath, _ = typeof v == "string" ? v : "[" + ke(v).join("+") + "]";
            !t[s] || (v = t[s].idxByName[_]) && (v.name = y, delete t[s].idxByName[_], t[s].idxByName[y] = v);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && p.WorkerGlobalScope && p instanceof p.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function wi(e) {
        return e.split(",").map(function(t, r) {
          var s = t.split(":"), o = (a = s[1]) === null || a === void 0 ? void 0 : a.trim(), a = (t = s[0].trim()).replace(/([&*]|\+\+)/g, ""), s = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return gr(a, s || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), A(s), r === 0, o);
        });
      }
      var Vo = (nn.prototype._createTableSchema = br, nn.prototype._parseIndexSyntax = wi, nn.prototype._parseStoresSpec = function(e, t) {
        var r = this;
        E(e).forEach(function(o) {
          if (e[o] !== null) {
            var a = r._parseIndexSyntax(e[o]), s = a.shift();
            if (!s) throw new R.Schema("Invalid schema for table " + o + ": " + e[o]);
            if (s.unique = !0, s.multi) throw new R.Schema("Primary key cannot be multiEntry*");
            a.forEach(function(l) {
              if (l.auto) throw new R.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!l.keyPath) throw new R.Schema("Index must have a name and cannot be an empty string");
            }), a = r._createTableSchema(o, s, a), t[o] = a;
          }
        });
      }, nn.prototype.stores = function(r) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? N(this._cfg.storesSource, r) : r;
        var r = t._versions, o = {}, a = {};
        return r.forEach(function(s) {
          N(o, s._cfg.storesSource), a = s._cfg.dbschema = {}, s._parseStoresSpec(o, a);
        }), t._dbSchema = a, wr(t, [t._allTables, t, t.Transaction.prototype]), Bn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], E(a), a), t._storeNames = E(a), this;
      }, nn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = ie(this._cfg.contentUpgrade || S, e), this;
      }, nn);
      function nn() {
      }
      function Er(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new vt(kn, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function Or(e) {
        return e && typeof e.databases == "function";
      }
      function Ar(e) {
        return Et(function() {
          return z.letThrough = !0, e();
        });
      }
      function Sr(e) {
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
          if (Sr(e)) return N(e, { from: t, to: r, d: 1 });
          var a = e.l, o = e.r;
          if (pe(r, e.from) < 0) return a ? pn(a, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, Ti(e);
          if (0 < pe(t, e.to)) return o ? pn(o, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, Ti(e);
          pe(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < pe(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, a && !e.l && yn(e, a), o && r && yn(e, o);
        }
      }
      function yn(e, t) {
        Sr(t) || function r(o, y) {
          var s = y.from, l = y.to, h = y.l, y = y.r;
          pn(o, s, l), h && r(o, h), y && r(o, y);
        }(e, t);
      }
      function xi(e, t) {
        var r = Un(t), o = r.next();
        if (o.done) return !1;
        for (var a = o.value, s = Un(e), l = s.next(a.from), h = l.value; !o.done && !l.done; ) {
          if (pe(h.from, a.to) <= 0 && 0 <= pe(h.to, a.from)) return !0;
          pe(a.from, h.from) < 0 ? a = (o = r.next(h.from)).value : h = (l = s.next(a.from)).value;
        }
        return !1;
      }
      function Un(e) {
        var t = Sr(e) ? null : { s: 0, n: e };
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
      function Ti(e) {
        var t, r, o = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((r = e.l) === null || r === void 0 ? void 0 : r.d) || 0), a = 1 < o ? "r" : o < -1 ? "l" : "";
        a && (t = a == "r" ? "l" : "r", r = c({}, e), o = e[a], e.from = o.from, e.to = o.to, e[a] = o[a], r[a] = o[t], (e[t] = r).d = Ei(r)), e.d = Ei(e);
      }
      function Ei(r) {
        var t = r.r, r = r.l;
        return (t ? r ? Math.max(t.d, r.d) : t.d : r ? r.d : 0) + 1;
      }
      function Vn(e, t) {
        return E(t).forEach(function(r) {
          e[r] ? yn(e[r], t[r]) : e[r] = function o(a) {
            var s, l, h = {};
            for (s in a) M(a, s) && (l = a[s], h[s] = !l || typeof l != "object" || Se.has(l.constructor) ? l : o(l));
            return h;
          }(t[r]);
        }), e;
      }
      function Pr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && xi(t[r], e[r]);
        });
      }
      X(We.prototype, ((ut = { add: function(e) {
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
      var Bt = {}, Cr = {}, Ir = !1;
      function $n(e) {
        Vn(Cr, e), Ir || (Ir = !0, setTimeout(function() {
          Ir = !1, kr(Cr, !(Cr = {}));
        }, 0));
      }
      function kr(e, t) {
        t === void 0 && (t = !1);
        var r = /* @__PURE__ */ new Set();
        if (e.all) for (var o = 0, a = Object.values(Bt); o < a.length; o++) Oi(l = a[o], e, r, t);
        else for (var s in e) {
          var l, h = /^idb\:\/\/(.*)\/(.*)\//.exec(s);
          h && (s = h[1], h = h[2], (l = Bt["idb://".concat(s, "/").concat(h)]) && Oi(l, e, r, t));
        }
        r.forEach(function(y) {
          return y();
        });
      }
      function Oi(e, t, r, o) {
        for (var a = [], s = 0, l = Object.entries(e.queries.query); s < l.length; s++) {
          for (var h = l[s], y = h[0], v = [], _ = 0, d = h[1]; _ < d.length; _++) {
            var T = d[_];
            Pr(t, T.obsSet) ? T.subscribers.forEach(function(w) {
              return r.add(w);
            }) : o && v.push(T);
          }
          o && a.push([y, v]);
        }
        if (o) for (var m = 0, g = a; m < g.length; m++) {
          var x = g[m], y = x[0], v = x[1];
          e.queries.query[y] = v;
        }
      }
      function $o(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? De(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, a = Math.round(10 * e.verno), s = !1;
        function l() {
          if (t.openCanceller !== o) throw new R.DatabaseClosed("db.open() was cancelled");
        }
        function h() {
          return new H(function(T, m) {
            if (l(), !r) throw new R.MissingAPI();
            var g = e.name, x = t.autoSchema || !a ? r.open(g) : r.open(g, a);
            if (!x) throw new R.MissingAPI();
            x.onerror = dt(m), x.onblocked = Ae(e._fireOnBlocked), x.onupgradeneeded = Ae(function(w) {
              var O;
              _ = x.transaction, t.autoSchema && !e._options.allowEmptyDB ? (x.onerror = ln, _.abort(), x.result.close(), (O = r.deleteDatabase(g)).onsuccess = O.onerror = Ae(function() {
                m(new R.NoSuchDatabase("Database ".concat(g, " doesnt exist")));
              })) : (_.onerror = dt(m), w = w.oldVersion > Math.pow(2, 62) ? 0 : w.oldVersion, d = w < 1, e.idbdb = x.result, s && Uo(e, _), Lo(e, w / 10, _, m));
            }, m), x.onsuccess = Ae(function() {
              _ = null;
              var w, O, C, I, k, B = e.idbdb = x.result, V = ke(B.objectStoreNames);
              if (0 < V.length) try {
                var q = B.transaction((I = V).length === 1 ? I[0] : I, "readonly");
                if (t.autoSchema) O = B, C = q, (w = e).verno = O.version / 10, C = w._dbSchema = qn(0, O, C), w._storeNames = ke(O.objectStoreNames, 0), Bn(w, [w._allTables], E(C), C);
                else if (Ln(e, e._dbSchema, q), ((k = xr(qn(0, (k = e).idbdb, q), k._dbSchema)).add.length || k.change.some(function(U) {
                  return U.add.length || U.change.length;
                })) && !s) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), B.close(), a = B.version + 1, s = !0, T(h());
                Fn(e, q);
              } catch {
              }
              Zt.push(e), B.onversionchange = Ae(function(U) {
                t.vcFired = !0, e.on("versionchange").fire(U);
              }), B.onclose = Ae(function(U) {
                e.on("close").fire(U);
              }), d && (k = e._deps, q = g, B = k.indexedDB, k = k.IDBKeyRange, Or(B) || q === kn || Er(B, k).put({ name: q }).catch(S)), T();
            }, m);
          }).catch(function(T) {
            switch (T?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), h();
                break;
              case "VersionError":
                if (0 < a) return a = 0, h();
            }
            return H.reject(T);
          });
        }
        var y, v = t.dbReadyResolve, _ = null, d = !1;
        return H.race([o, (typeof navigator > "u" ? H.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(T) {
          function m() {
            return indexedDB.databases().finally(T);
          }
          y = setInterval(m, 100), m();
        }).finally(function() {
          return clearInterval(y);
        }) : Promise.resolve()).then(h)]).then(function() {
          return l(), t.onReadyBeingFired = [], H.resolve(Ar(function() {
            return e.on.ready.fire(e.vip);
          })).then(function T() {
            if (0 < t.onReadyBeingFired.length) {
              var m = t.onReadyBeingFired.reduce(ie, S);
              return t.onReadyBeingFired = [], H.resolve(Ar(function() {
                return m(e.vip);
              })).then(T);
            }
          });
        }).finally(function() {
          t.openCanceller === o && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(T) {
          t.dbOpenError = T;
          try {
            _ && _.abort();
          } catch {
          }
          return o === t.openCanceller && e._close(), De(T);
        }).finally(function() {
          t.openComplete = !0, v();
        }).then(function() {
          var T;
          return d && (T = {}, e.tables.forEach(function(m) {
            m.schema.indexes.forEach(function(g) {
              g.name && (T["idb://".concat(e.name, "/").concat(m.name, "/").concat(g.name)] = new We(-1 / 0, [[[]]]));
            }), T["idb://".concat(e.name, "/").concat(m.name, "/")] = T["idb://".concat(e.name, "/").concat(m.name, "/:dels")] = new We(-1 / 0, [[[]]]);
          }), Pt(fn).fire(T), kr(T, !0)), e;
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
            var h = s(y), y = h.value;
            return h.done ? y : y && typeof y.then == "function" ? y.then(r, o) : A(y) ? Promise.all(y).then(r, o) : r(y);
          };
        }
        return a(t)();
      }
      function Wn(e, t, r) {
        for (var o = A(e) ? e.slice() : [e], a = 0; a < r; ++a) o.push(t);
        return o;
      }
      var Wo = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return c(c({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema, a = {}, s = [];
          function l(d, T, m) {
            var g = dn(d), x = a[g] = a[g] || [], w = d == null ? 0 : typeof d == "string" ? 1 : d.length, O = 0 < T, O = c(c({}, m), { name: O ? "".concat(g, "(virtual-from:").concat(m.name, ")") : m.name, lowLevelIndex: m, isVirtual: O, keyTail: T, keyLength: w, extractKey: _r(d), unique: !O && m.unique });
            return x.push(O), O.isPrimaryKey || s.push(O), 1 < w && l(w === 2 ? d[0] : d.slice(0, w - 1), T + 1, m), x.sort(function(C, I) {
              return C.keyTail - I.keyTail;
            }), O;
          }
          t = l(o.primaryKey.keyPath, 0, o.primaryKey), a[":id"] = [t];
          for (var h = 0, y = o.indexes; h < y.length; h++) {
            var v = y[h];
            l(v.keyPath, 0, v);
          }
          function _(d) {
            var T, m = d.query.index;
            return m.isVirtual ? c(c({}, d), { query: { index: m.lowLevelIndex, range: (T = d.query.range, m = m.keyTail, { type: T.type === 1 ? 2 : T.type, lower: Wn(T.lower, T.lowerOpen ? e.MAX_KEY : e.MIN_KEY, m), lowerOpen: !0, upper: Wn(T.upper, T.upperOpen ? e.MIN_KEY : e.MAX_KEY, m), upperOpen: !0 }) } }) : d;
          }
          return c(c({}, r), { schema: c(c({}, o), { primaryKey: t, indexes: s, getIndexByKeyPath: function(d) {
            return (d = a[dn(d)]) && d[0];
          } }), count: function(d) {
            return r.count(_(d));
          }, query: function(d) {
            return r.query(_(d));
          }, openCursor: function(d) {
            var T = d.query.index, m = T.keyTail, g = T.isVirtual, x = T.keyLength;
            return g ? r.openCursor(_(d)).then(function(O) {
              return O && w(O);
            }) : r.openCursor(d);
            function w(O) {
              return Object.create(O, { continue: { value: function(C) {
                C != null ? O.continue(Wn(C, d.reverse ? e.MAX_KEY : e.MIN_KEY, m)) : d.unique ? O.continue(O.key.slice(0, x).concat(d.reverse ? e.MIN_KEY : e.MAX_KEY, m)) : O.continue();
              } }, continuePrimaryKey: { value: function(C, I) {
                O.continuePrimaryKey(Wn(C, e.MAX_KEY, m), I);
              } }, primaryKey: { get: function() {
                return O.primaryKey;
              } }, key: { get: function() {
                var C = O.key;
                return x === 1 ? C[0] : C.slice(0, x);
              } }, value: { get: function() {
                return O.value;
              } } });
            }
          } });
        } });
      } };
      function Dr(e, t, r, o) {
        return r = r || {}, o = o || "", E(e).forEach(function(a) {
          var s, l, h;
          M(t, a) ? (s = e[a], l = t[a], typeof s == "object" && typeof l == "object" && s && l ? (h = Xe(s)) !== Xe(l) ? r[o + a] = t[a] : h === "Object" ? Dr(s, l, r, o + a + ".") : s !== l && (r[o + a] = t[a]) : s !== l && (r[o + a] = t[a])) : r[o + a] = void 0;
        }), E(t).forEach(function(a) {
          M(e, a) || (r[o + a] = t[a]);
        }), r;
      }
      function Rr(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var Ho = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return c(c({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema.primaryKey;
          return c(c({}, r), { mutate: function(a) {
            var s = z.trans, l = s.table(t).hook, h = l.deleting, y = l.creating, v = l.updating;
            switch (a.type) {
              case "add":
                if (y.fire === S) break;
                return s._promise("readwrite", function() {
                  return _(a);
                }, !0);
              case "put":
                if (y.fire === S && v.fire === S) break;
                return s._promise("readwrite", function() {
                  return _(a);
                }, !0);
              case "delete":
                if (h.fire === S) break;
                return s._promise("readwrite", function() {
                  return _(a);
                }, !0);
              case "deleteRange":
                if (h.fire === S) break;
                return s._promise("readwrite", function() {
                  return function d(T, m, g) {
                    return r.query({ trans: T, values: !1, query: { index: o, range: m }, limit: g }).then(function(x) {
                      var w = x.result;
                      return _({ type: "delete", keys: w, trans: T }).then(function(O) {
                        return 0 < O.numFailures ? Promise.reject(O.failures[0]) : w.length < g ? { failures: [], numFailures: 0, lastResult: void 0 } : d(T, c(c({}, m), { lower: w[w.length - 1], lowerOpen: !0 }), g);
                      });
                    });
                  }(a.trans, a.range, 1e4);
                }, !0);
            }
            return r.mutate(a);
            function _(d) {
              var T, m, g, x = z.trans, w = d.keys || Rr(o, d);
              if (!w) throw new Error("Keys missing");
              return (d = d.type === "add" || d.type === "put" ? c(c({}, d), { keys: w }) : c({}, d)).type !== "delete" && (d.values = f([], d.values)), d.keys && (d.keys = f([], d.keys)), T = r, g = w, ((m = d).type === "add" ? Promise.resolve([]) : T.getMany({ trans: m.trans, keys: g, cache: "immutable" })).then(function(O) {
                var C = w.map(function(I, k) {
                  var B, V, q, U = O[k], W = { onerror: null, onsuccess: null };
                  return d.type === "delete" ? h.fire.call(W, I, U, x) : d.type === "add" || U === void 0 ? (B = y.fire.call(W, I, d.values[k], x), I == null && B != null && (d.keys[k] = I = B, o.outbound || J(d.values[k], o.keyPath, I))) : (B = Dr(U, d.values[k]), (V = v.fire.call(W, B, I, U, x)) && (q = d.values[k], Object.keys(V).forEach(function($) {
                    M(q, $) ? q[$] = V[$] : J(q, $, V[$]);
                  }))), W;
                });
                return r.mutate(d).then(function(I) {
                  for (var k = I.failures, B = I.results, V = I.numFailures, I = I.lastResult, q = 0; q < w.length; ++q) {
                    var U = (B || w)[q], W = C[q];
                    U == null ? W.onerror && W.onerror(k[q]) : W.onsuccess && W.onsuccess(d.type === "put" && O[q] ? d.values[q] : U);
                  }
                  return { failures: k, results: B, numFailures: V, lastResult: I };
                }).catch(function(I) {
                  return C.forEach(function(k) {
                    return k.onerror && k.onerror(I);
                  }), Promise.reject(I);
                });
              });
            }
          } });
        } });
      } };
      function Ai(e, t, r) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var o = [], a = 0, s = 0; a < t.keys.length && s < e.length; ++a) pe(t.keys[a], e[s]) === 0 && (o.push(r ? je(t.values[a]) : t.values[a]), ++s);
          return o.length === e.length ? o : null;
        } catch {
          return null;
        }
      }
      var Go = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var r = e.table(t);
          return c(c({}, r), { getMany: function(o) {
            if (!o.cache) return r.getMany(o);
            var a = Ai(o.keys, o.trans._cache, o.cache === "clone");
            return a ? H.resolve(a) : r.getMany(o).then(function(s) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? je(s) : s }, s;
            });
          }, mutate: function(o) {
            return o.type !== "add" && (o.trans._cache = null), r.mutate(o);
          } });
        } };
      } };
      function Si(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Pi(e, t) {
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
      var Yo = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, r = new We(e.MIN_KEY, e.MAX_KEY);
        return c(c({}, e), { transaction: function(o, a, s) {
          if (z.subscr && a !== "readonly") throw new R.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(z.querier));
          return e.transaction(o, a, s);
        }, table: function(o) {
          var a = e.table(o), s = a.schema, l = s.primaryKey, d = s.indexes, h = l.extractKey, y = l.outbound, v = l.autoIncrement && d.filter(function(m) {
            return m.compound && m.keyPath.includes(l.keyPath);
          }), _ = c(c({}, a), { mutate: function(m) {
            function g($) {
              return $ = "idb://".concat(t, "/").concat(o, "/").concat($), I[$] || (I[$] = new We());
            }
            var x, w, O, C = m.trans, I = m.mutatedParts || (m.mutatedParts = {}), k = g(""), B = g(":dels"), V = m.type, W = m.type === "deleteRange" ? [m.range] : m.type === "delete" ? [m.keys] : m.values.length < 50 ? [Rr(l, m).filter(function($) {
              return $;
            }), m.values] : [], q = W[0], U = W[1], W = m.trans._cache;
            return A(q) ? (k.addKeys(q), (W = V === "delete" || q.length === U.length ? Ai(q, W) : null) || B.addKeys(q), (W || U) && (x = g, w = W, O = U, s.indexes.forEach(function($) {
              var G = x($.name || "");
              function ce(ae) {
                return ae != null ? $.extractKey(ae) : null;
              }
              function ye(ae) {
                return $.multiEntry && A(ae) ? ae.forEach(function(Ie) {
                  return G.addKey(Ie);
                }) : G.addKey(ae);
              }
              (w || O).forEach(function(ae, He) {
                var oe = w && ce(w[He]), He = O && ce(O[He]);
                pe(oe, He) !== 0 && (oe != null && ye(oe), He != null && ye(He));
              });
            }))) : q ? (U = { from: (U = q.lower) !== null && U !== void 0 ? U : e.MIN_KEY, to: (U = q.upper) !== null && U !== void 0 ? U : e.MAX_KEY }, B.add(U), k.add(U)) : (k.add(r), B.add(r), s.indexes.forEach(function($) {
              return g($.name).add(r);
            })), a.mutate(m).then(function($) {
              return !q || m.type !== "add" && m.type !== "put" || (k.addKeys($.results), v && v.forEach(function(G) {
                for (var ce = m.values.map(function(oe) {
                  return G.extractKey(oe);
                }), ye = G.keyPath.findIndex(function(oe) {
                  return oe === l.keyPath;
                }), ae = 0, Ie = $.results.length; ae < Ie; ++ae) ce[ae][ye] = $.results[ae];
                g(G.name).addKeys(ce);
              })), C.mutatedParts = Vn(C.mutatedParts || {}, I), $;
            });
          } }), d = function(g) {
            var x = g.query, g = x.index, x = x.range;
            return [g, new We((g = x.lower) !== null && g !== void 0 ? g : e.MIN_KEY, (x = x.upper) !== null && x !== void 0 ? x : e.MAX_KEY)];
          }, T = { get: function(m) {
            return [l, new We(m.key)];
          }, getMany: function(m) {
            return [l, new We().addKeys(m.keys)];
          }, count: d, query: d, openCursor: d };
          return E(T).forEach(function(m) {
            _[m] = function(g) {
              var x = z.subscr, w = !!x, O = Si(z, a) && Pi(m, g) ? g.obsSet = {} : x;
              if (w) {
                var C = function(U) {
                  return U = "idb://".concat(t, "/").concat(o, "/").concat(U), O[U] || (O[U] = new We());
                }, I = C(""), k = C(":dels"), x = T[m](g), w = x[0], x = x[1];
                if ((m === "query" && w.isPrimaryKey && !g.values ? k : C(w.name || "")).add(x), !w.isPrimaryKey) {
                  if (m !== "count") {
                    var B = m === "query" && y && g.values && a.query(c(c({}, g), { values: !1 }));
                    return a[m].apply(this, arguments).then(function(U) {
                      if (m === "query") {
                        if (y && g.values) return B.then(function(ce) {
                          return ce = ce.result, I.addKeys(ce), U;
                        });
                        var W = g.values ? U.result.map(h) : U.result;
                        (g.values ? I : k).addKeys(W);
                      } else if (m === "openCursor") {
                        var $ = U, G = g.values;
                        return $ && Object.create($, { key: { get: function() {
                          return k.addKey($.primaryKey), $.key;
                        } }, primaryKey: { get: function() {
                          var ce = $.primaryKey;
                          return k.addKey(ce), ce;
                        } }, value: { get: function() {
                          return G && I.addKey($.primaryKey), $.value;
                        } } });
                      }
                      return U;
                    });
                  }
                  k.add(r);
                }
              }
              return a[m].apply(this, arguments);
            };
          }), _;
        } });
      } };
      function Ci(e, t, r) {
        if (r.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var o = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return r.numFailures === o ? null : (t = c({}, t), A(t.keys) && (t.keys = t.keys.filter(function(a, s) {
          return !(s in r.failures);
        })), "values" in t && A(t.values) && (t.values = t.values.filter(function(a, s) {
          return !(s in r.failures);
        })), t);
      }
      function Kr(e, t) {
        return r = e, ((o = t).lower === void 0 || (o.lowerOpen ? 0 < pe(r, o.lower) : 0 <= pe(r, o.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? pe(e, t.upper) < 0 : pe(e, t.upper) <= 0));
        var r, o;
      }
      function Ii(e, t, T, o, a, s) {
        if (!T || T.length === 0) return e;
        var l = t.query.index, h = l.multiEntry, y = t.query.range, v = o.schema.primaryKey.extractKey, _ = l.extractKey, d = (l.lowLevelIndex || l).extractKey, T = T.reduce(function(m, g) {
          var x = m, w = [];
          if (g.type === "add" || g.type === "put") for (var O = new We(), C = g.values.length - 1; 0 <= C; --C) {
            var I, k = g.values[C], B = v(k);
            O.hasKey(B) || (I = _(k), (h && A(I) ? I.some(function($) {
              return Kr($, y);
            }) : Kr(I, y)) && (O.addKey(B), w.push(k)));
          }
          switch (g.type) {
            case "add":
              var V = new We().addKeys(t.values ? m.map(function(G) {
                return v(G);
              }) : m), x = m.concat(t.values ? w.filter(function(G) {
                return G = v(G), !V.hasKey(G) && (V.addKey(G), !0);
              }) : w.map(function(G) {
                return v(G);
              }).filter(function(G) {
                return !V.hasKey(G) && (V.addKey(G), !0);
              }));
              break;
            case "put":
              var q = new We().addKeys(g.values.map(function(G) {
                return v(G);
              }));
              x = m.filter(function(G) {
                return !q.hasKey(t.values ? v(G) : G);
              }).concat(t.values ? w : w.map(function(G) {
                return v(G);
              }));
              break;
            case "delete":
              var U = new We().addKeys(g.keys);
              x = m.filter(function(G) {
                return !U.hasKey(t.values ? v(G) : G);
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
        return T === e ? e : (T.sort(function(m, g) {
          return pe(d(m), d(g)) || pe(v(m), v(g));
        }), t.limit && t.limit < 1 / 0 && (T.length > t.limit ? T.length = t.limit : e.length === t.limit && T.length < t.limit && (a.dirty = !0)), s ? Object.freeze(T) : T);
      }
      function ki(e, t) {
        return pe(e.lower, t.lower) === 0 && pe(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function Xo(e, t) {
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
      function zo(e, t, r, o) {
        e.subscribers.add(r), o.addEventListener("abort", function() {
          var a, s;
          e.subscribers.delete(r), e.subscribers.size === 0 && (a = e, s = t, setTimeout(function() {
            a.subscribers.size === 0 && Ne(s, a);
          }, 3e3));
        });
      }
      var Qo = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return c(c({}, e), { transaction: function(r, o, a) {
          var s, l, h = e.transaction(r, o, a);
          return o === "readwrite" && (l = (s = new AbortController()).signal, a = function(y) {
            return function() {
              if (s.abort(), o === "readwrite") {
                for (var v = /* @__PURE__ */ new Set(), _ = 0, d = r; _ < d.length; _++) {
                  var T = d[_], m = Bt["idb://".concat(t, "/").concat(T)];
                  if (m) {
                    var g = e.table(T), x = m.optimisticOps.filter(function(G) {
                      return G.trans === h;
                    });
                    if (h._explicit && y && h.mutatedParts) for (var w = 0, O = Object.values(m.queries.query); w < O.length; w++) for (var C = 0, I = (V = O[w]).slice(); C < I.length; C++) Pr((q = I[C]).obsSet, h.mutatedParts) && (Ne(V, q), q.subscribers.forEach(function(G) {
                      return v.add(G);
                    }));
                    else if (0 < x.length) {
                      m.optimisticOps = m.optimisticOps.filter(function(G) {
                        return G.trans !== h;
                      });
                      for (var k = 0, B = Object.values(m.queries.query); k < B.length; k++) for (var V, q, U, W = 0, $ = (V = B[k]).slice(); W < $.length; W++) (q = $[W]).res != null && h.mutatedParts && (y && !q.dirty ? (U = Object.isFrozen(q.res), U = Ii(q.res, q.req, x, g, q, U), q.dirty ? (Ne(V, q), q.subscribers.forEach(function(G) {
                        return v.add(G);
                      })) : U !== q.res && (q.res = U, q.promise = H.resolve({ result: U }))) : (q.dirty && Ne(V, q), q.subscribers.forEach(function(G) {
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
          }, h.addEventListener("abort", a(!1), { signal: l }), h.addEventListener("error", a(!1), { signal: l }), h.addEventListener("complete", a(!0), { signal: l })), h;
        }, table: function(r) {
          var o = e.table(r), a = o.schema.primaryKey;
          return c(c({}, o), { mutate: function(s) {
            var l = z.trans;
            if (a.outbound || l.db._options.cache === "disabled" || l.explicit || l.idbtrans.mode !== "readwrite") return o.mutate(s);
            var h = Bt["idb://".concat(t, "/").concat(r)];
            return h ? (l = o.mutate(s), s.type !== "add" && s.type !== "put" || !(50 <= s.values.length || Rr(a, s).some(function(y) {
              return y == null;
            })) ? (h.optimisticOps.push(s), s.mutatedParts && $n(s.mutatedParts), l.then(function(y) {
              0 < y.numFailures && (Ne(h.optimisticOps, s), (y = Ci(0, s, y)) && h.optimisticOps.push(y), s.mutatedParts && $n(s.mutatedParts));
            }), l.catch(function() {
              Ne(h.optimisticOps, s), s.mutatedParts && $n(s.mutatedParts);
            })) : l.then(function(y) {
              var v = Ci(0, c(c({}, s), { values: s.values.map(function(_, d) {
                var T;
                return y.failures[d] ? _ : (_ = (T = a.keyPath) !== null && T !== void 0 && T.includes(".") ? je(_) : c({}, _), J(_, a.keyPath, y.results[d]), _);
              }) }), y);
              h.optimisticOps.push(v), queueMicrotask(function() {
                return s.mutatedParts && $n(s.mutatedParts);
              });
            }), l) : o.mutate(s);
          }, query: function(s) {
            if (!Si(z, o) || !Pi("query", s)) return o.query(s);
            var l = ((v = z.trans) === null || v === void 0 ? void 0 : v.db._options.cache) === "immutable", d = z, h = d.requery, y = d.signal, v = function(g, x, w, O) {
              var C = Bt["idb://".concat(g, "/").concat(x)];
              if (!C) return [];
              if (!(x = C.queries[w])) return [null, !1, C, null];
              var I = x[(O.query ? O.query.index.name : null) || ""];
              if (!I) return [null, !1, C, null];
              switch (w) {
                case "query":
                  var k = I.find(function(B) {
                    return B.req.limit === O.limit && B.req.values === O.values && ki(B.req.query.range, O.query.range);
                  });
                  return k ? [k, !0, C, I] : [I.find(function(B) {
                    return ("limit" in B.req ? B.req.limit : 1 / 0) >= O.limit && (!O.values || B.req.values) && Xo(B.req.query.range, O.query.range);
                  }), !1, C, I];
                case "count":
                  return k = I.find(function(B) {
                    return ki(B.req.query.range, O.query.range);
                  }), [k, !!k, C, I];
              }
            }(t, r, "query", s), _ = v[0], d = v[1], T = v[2], m = v[3];
            return _ && d ? _.obsSet = s.obsSet : (d = o.query(s).then(function(g) {
              var x = g.result;
              if (_ && (_.res = x), l) {
                for (var w = 0, O = x.length; w < O; ++w) Object.freeze(x[w]);
                Object.freeze(x);
              } else g.result = je(x);
              return g;
            }).catch(function(g) {
              return m && _ && Ne(m, _), Promise.reject(g);
            }), _ = { obsSet: s.obsSet, promise: d, subscribers: /* @__PURE__ */ new Set(), type: "query", req: s, dirty: !1 }, m ? m.push(_) : (m = [_], (T = T || (Bt["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[s.query.index.name || ""] = m)), zo(_, m, h, y), _.promise.then(function(g) {
              return { result: Ii(g.result, s, T?.optimisticOps, o, _, l) };
            });
          } });
        } });
      } };
      function Hn(e, t) {
        return new Proxy(e, { get: function(r, o, a) {
          return o === "db" ? t : Reflect.get(r, o, a);
        } });
      }
      var vt = (Re.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new R.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new R.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(qo), r.stores({}), this._state.autoSchema = !1, r);
      }, Re.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || z.letThrough || this._vip) ? e() : new H(function(r, o) {
          if (t._state.openComplete) return o(new R.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new R.DatabaseClosed());
            t.open().catch(S);
          }
          t._state.dbReadyPromise.then(r, o);
        }).then(e);
      }, Re.prototype.use = function(e) {
        var t = e.stack, r = e.create, o = e.level, a = e.name;
        return a && this.unuse({ stack: t, name: a }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: r, level: o ?? 10, name: a }), e.sort(function(s, l) {
          return s.level - l.level;
        }), this;
      }, Re.prototype.unuse = function(e) {
        var t = e.stack, r = e.name, o = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(a) {
          return o ? a.create !== o : !!r && a.name !== r;
        })), this;
      }, Re.prototype.open = function() {
        var e = this;
        return Kt(ze, function() {
          return $o(e);
        });
      }, Re.prototype._close = function() {
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
      }, Re.prototype.close = function(r) {
        var t = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        t ? (r.isBeingOpened && r.cancelOpen(new R.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new R.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, Re.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", o = this._state;
        return new H(function(a, s) {
          function l() {
            t.close(e);
            var h = t._deps.indexedDB.deleteDatabase(t.name);
            h.onsuccess = Ae(function() {
              var y, v, _;
              y = t._deps, v = t.name, _ = y.indexedDB, y = y.IDBKeyRange, Or(_) || v === kn || Er(_, y).delete(v).catch(S), a();
            }), h.onerror = dt(s), h.onblocked = t._fireOnBlocked;
          }
          if (r) throw new R.InvalidArgument("Invalid closeOptions argument to db.delete()");
          o.isBeingOpened ? o.dbReadyPromise.then(l) : l();
        });
      }, Re.prototype.backendDB = function() {
        return this.idbdb;
      }, Re.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Re.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, Re.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Re.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Re.prototype, "tables", { get: function() {
        var e = this;
        return E(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), Re.prototype.transaction = function() {
        var e = (function(t, r, o) {
          var a = arguments.length;
          if (a < 2) throw new R.InvalidArgument("Too few arguments");
          for (var s = new Array(a - 1); --a; ) s[a - 1] = arguments[a];
          return o = s.pop(), [t, we(s), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Re.prototype._transaction = function(e, t, r) {
        var o = this, a = z.trans;
        a && a.db === this && e.indexOf("!") === -1 || (a = null);
        var s, l, h = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (l = t.map(function(v) {
            if (v = v instanceof o.Table ? v.name : v, typeof v != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return v;
          }), e == "r" || e === dr) s = dr;
          else {
            if (e != "rw" && e != pr) throw new R.InvalidArgument("Invalid transaction mode: " + e);
            s = pr;
          }
          if (a) {
            if (a.mode === dr && s === pr) {
              if (!h) throw new R.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              a = null;
            }
            a && l.forEach(function(v) {
              if (a && a.storeNames.indexOf(v) === -1) {
                if (!h) throw new R.SubTransaction("Table " + v + " not included in parent transaction.");
                a = null;
              }
            }), h && a && !a.active && (a = null);
          }
        } catch (v) {
          return a ? a._promise(null, function(_, d) {
            d(v);
          }) : De(v);
        }
        var y = (function v(_, d, T, m, g) {
          return H.resolve().then(function() {
            var x = z.transless || z, w = _._createTransaction(d, T, _._dbSchema, m);
            if (w.explicit = !0, x = { trans: w, transless: x }, m) w.idbtrans = m.idbtrans;
            else try {
              w.create(), w.idbtrans._explicit = !0, _._state.PR1398_maxLoop = 3;
            } catch (I) {
              return I.name === P.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                return v(_, d, T, null, g);
              })) : De(I);
            }
            var O, C = ct(g);
            return C && Jt(), x = H.follow(function() {
              var I;
              (O = g.call(w, w)) && (C ? (I = Ot.bind(null, null), O.then(I, I)) : typeof O.next == "function" && typeof O.throw == "function" && (O = Nr(O)));
            }, x), (O && typeof O.then == "function" ? H.resolve(O).then(function(I) {
              return w.active ? I : De(new R.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : x.then(function() {
              return O;
            })).then(function(I) {
              return m && w._resolve(), w._completion.then(function() {
                return I;
              });
            }).catch(function(I) {
              return w._reject(I), De(I);
            });
          });
        }).bind(null, this, s, l, a, r);
        return a ? a._promise(s, y, "lock") : z.trans ? Kt(z.transless, function() {
          return o._whenReady(y);
        }) : this._whenReady(y);
      }, Re.prototype.table = function(e) {
        if (!M(this._allTables, e)) throw new R.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Re);
      function Re(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var o = Re.dependencies;
        this._options = t = c({ addons: Re.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var a, s, l, h, y, v = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: S, dbReadyPromise: null, cancelOpen: S, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        v.dbReadyPromise = new H(function(d) {
          v.dbReadyResolve = d;
        }), v.openCanceller = new H(function(d, T) {
          v.cancelOpen = T;
        }), this._state = v, this.name = e, this.on = sn(this, "populate", "blocked", "versionchange", "close", { ready: [ie, S] }), this.once = function(d, T) {
          var m = function() {
            for (var g = [], x = 0; x < arguments.length; x++) g[x] = arguments[x];
            r.on(d).unsubscribe(m), T.apply(r, g);
          };
          return r.on(d, m);
        }, this.on.ready.subscribe = Le(this.on.ready.subscribe, function(d) {
          return function(T, m) {
            Re.vip(function() {
              var g, x = r._state;
              x.openComplete ? (x.dbOpenError || H.resolve().then(T), m && d(T)) : x.onReadyBeingFired ? (x.onReadyBeingFired.push(T), m && d(T)) : (d(T), g = r, m || d(function w() {
                g.on.ready.unsubscribe(T), g.on.ready.unsubscribe(w);
              }));
            });
          };
        }), this.Collection = (a = this, un(Do.prototype, function(O, w) {
          this.db = a;
          var m = si, g = null;
          if (w) try {
            m = w();
          } catch (C) {
            g = C;
          }
          var x = O._ctx, w = x.table, O = w.hook.reading.fire;
          this._ctx = { table: w, index: x.index, isPrimKey: !x.index || w.schema.primKey.keyPath && x.index === w.schema.primKey.name, range: m, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: g, or: x.or, valueMapper: O !== K ? O : null };
        })), this.Table = (s = this, un(fi.prototype, function(d, T, m) {
          this.db = s, this._tx = m, this.name = d, this.schema = T, this.hook = s._allTables[d] ? s._allTables[d].hook : sn(null, { creating: [te, S], reading: [Y, K], updating: [se, S], deleting: [Z, S] });
        })), this.Transaction = (l = this, un(jo.prototype, function(d, T, m, g, x) {
          var w = this;
          d !== "readonly" && T.forEach(function(O) {
            O = (O = m[O]) === null || O === void 0 ? void 0 : O.yProps, O && (T = T.concat(O.map(function(C) {
              return C.updatesTable;
            })));
          }), this.db = l, this.mode = d, this.storeNames = T, this.schema = m, this.chromeTransactionDurability = g, this.idbtrans = null, this.on = sn(this, "complete", "error", "abort"), this.parent = x || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new H(function(O, C) {
            w._resolve = O, w._reject = C;
          }), this._completion.then(function() {
            w.active = !1, w.on.complete.fire();
          }, function(O) {
            var C = w.active;
            return w.active = !1, w.on.error.fire(O), w.parent ? w.parent._reject(O) : C && w.idbtrans && w.idbtrans.abort(), De(O);
          });
        })), this.Version = (h = this, un(Vo.prototype, function(d) {
          this.db = h, this._cfg = { version: d, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (y = this, un(vi.prototype, function(d, T, m) {
          if (this.db = y, this._ctx = { table: d, index: T === ":id" ? null : T, or: m }, this._cmp = this._ascending = pe, this._descending = function(g, x) {
            return pe(x, g);
          }, this._max = function(g, x) {
            return 0 < pe(g, x) ? g : x;
          }, this._min = function(g, x) {
            return pe(g, x) < 0 ? g : x;
          }, this._IDBKeyRange = y._deps.IDBKeyRange, !this._IDBKeyRange) throw new R.MissingAPI();
        })), this.on("versionchange", function(d) {
          0 < d.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(d) {
          !d.newVersion || d.newVersion < d.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(d.oldVersion / 10));
        }), this._maxKey = hn(t.IDBKeyRange), this._createTransaction = function(d, T, m, g) {
          return new r.Transaction(d, T, m, r._options.chromeTransactionDurability, g);
        }, this._fireOnBlocked = function(d) {
          r.on("blocked").fire(d), Zt.filter(function(T) {
            return T.name === r.name && T !== r && !T._state.vcFired;
          }).map(function(T) {
            return T.on("versionchange").fire(d);
          });
        }, this.use(Go), this.use(Qo), this.use(Yo), this.use(Wo), this.use(Ho);
        var _ = new Proxy(this, { get: function(d, T, m) {
          if (T === "_vip") return !0;
          if (T === "table") return function(x) {
            return Hn(r.table(x), _);
          };
          var g = Reflect.get(d, T, m);
          return g instanceof fi ? Hn(g, _) : T === "tables" ? g.map(function(x) {
            return Hn(x, _);
          }) : T === "_createTransaction" ? function() {
            return Hn(g.apply(this, arguments), _);
          } : g;
        } });
        this.vip = _, o.forEach(function(d) {
          return d(r);
        });
      }
      var Gn, ut = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Jo = (jr.prototype.subscribe = function(e, t, r) {
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
      function Ni(e) {
        var t, r = !1, o = new Jo(function(a) {
          var s = ct(e), l, h = !1, y = {}, v = {}, _ = { get closed() {
            return h;
          }, unsubscribe: function() {
            h || (h = !0, l && l.abort(), d && Pt.storagemutated.unsubscribe(m));
          } };
          a.start && a.start(_);
          var d = !1, T = function() {
            return hr(g);
          }, m = function(x) {
            Vn(y, x), Pr(v, y) && T();
          }, g = function() {
            var x, w, O;
            !h && Gn.indexedDB && (y = {}, x = {}, l && l.abort(), l = new AbortController(), O = function(C) {
              var I = zt();
              try {
                s && Jt();
                var k = Et(e, C);
                return k = s ? k.finally(Ot) : k;
              } finally {
                I && Qt();
              }
            }(w = { subscr: x, signal: l.signal, requery: T, querier: e, trans: null }), Promise.resolve(O).then(function(C) {
              r = !0, t = C, h || w.signal.aborted || (y = {}, function(I) {
                for (var k in I) if (M(I, k)) return;
                return 1;
              }(v = x) || d || (Pt(fn, m), d = !0), hr(function() {
                return !h && a.next && a.next(C);
              }));
            }, function(C) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(C?.name) || h || hr(function() {
                h || a.error && a.error(C);
              });
            }));
          };
          return setTimeout(T, 0), _;
        });
        return o.hasValue = function() {
          return r;
        }, o.getValue = function() {
          return t;
        }, o;
      }
      var Mt = vt;
      function Fr(e) {
        var t = Ct;
        try {
          Ct = !0, Pt.storagemutated.fire(e), kr(e, !0);
        } finally {
          Ct = t;
        }
      }
      X(Mt, c(c({}, Be), { delete: function(e) {
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
              return a !== kn;
            });
          }) : Er(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return De(new R.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          N(this, e);
        };
      }, ignoreTransaction: function(e) {
        return z.trans ? Kt(z.transless, e) : e();
      }, vip: Ar, async: function(e) {
        return function() {
          try {
            var t = Nr(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : H.resolve(t);
          } catch (r) {
            return De(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = Nr(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : H.resolve(o);
        } catch (a) {
          return De(a);
        }
      }, currentTransaction: { get: function() {
        return z.trans || null;
      } }, waitFor: function(e, t) {
        return t = H.resolve(typeof e == "function" ? Mt.ignoreTransaction(e) : e).timeout(t || 6e4), z.trans ? z.trans.waitFor(t) : t;
      }, Promise: H, debug: { get: function() {
        return ee;
      }, set: function(e) {
        ge(e);
      } }, derive: he, extend: N, props: X, override: Le, Events: sn, on: Pt, liveQuery: Ni, extendObservabilitySet: Vn, getByKeyPath: Ce, setByKeyPath: J, delByKeyPath: function(e, t) {
        typeof t == "string" ? J(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          J(e, r, void 0);
        });
      }, shallowClone: re, deepClone: je, getObjectDiff: Dr, cmp: pe, asap: qe, minKey: -1 / 0, addons: [], connections: Zt, errnames: P, dependencies: Gn, cache: Bt, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), Mt.maxKey = hn(Mt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Pt(fn, function(e) {
        Ct || (e = new CustomEvent(vr, { detail: e }), Ct = !0, dispatchEvent(e), Ct = !1);
      }), addEventListener(vr, function(e) {
        e = e.detail, Ct || Fr(e);
      }));
      var rn, Ct = !1, Di = function() {
      };
      return typeof BroadcastChannel < "u" && ((Di = function() {
        (rn = new BroadcastChannel(vr)).onmessage = function(e) {
          return e.data && Fr(e.data);
        };
      })(), typeof rn.unref == "function" && rn.unref(), Pt(fn, function(e) {
        Ct || rn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!vt.disableBfCache && e.persisted) {
          ee && console.debug("Dexie: handling persisted pagehide"), rn?.close();
          for (var t = 0, r = Zt; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !vt.disableBfCache && e.persisted && (ee && console.debug("Dexie: handling persisted pageshow"), Di(), Fr({ all: new We(-1 / 0, [[]]) }));
      })), H.rejectionMapper = function(e, t) {
        return !e || e instanceof wt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !L[e.name] ? e : (t = new L[e.name](t || e.message, e), "stack" in e && ue(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, ge(ee), c(vt, Object.freeze({ __proto__: null, Dexie: vt, liveQuery: Ni, Entity: ui, cmp: pe, PropModification: cn, replacePrefix: function(e, t) {
        return new cn({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new cn({ add: e });
      }, remove: function(e) {
        return new cn({ remove: e });
      }, default: vt, RangeSet: We, mergeRanges: yn, rangesOverlap: xi }), { default: vt }), vt;
    });
  }(so)), so.exports;
}
var Rf = Df();
const Sa = /* @__PURE__ */ kf(Rf), Ss = Symbol.for("Dexie"), ti = globalThis[Ss] || (globalThis[Ss] = Sa);
if (Sa.semVer !== ti.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Sa.semVer} and ${ti.semVer}`);
const {
  liveQuery: Ph,
  mergeRanges: Ch,
  rangesOverlap: Ih,
  RangeSet: kh,
  cmp: Nh,
  Entity: Dh,
  PropModification: Rh,
  replacePrefix: Kh,
  add: Kf,
  remove: jh,
  DexieYProvider: Fh
} = ti;
function Ja(n) {
  return {
    refetchRecord: i,
    addRecord: u,
    createRecord: p,
    updateRecord: c,
    deleteRecord: f,
    findRecordById: D,
    findRecordByAttribute: ne,
    findRecordsByTagName: M,
    findChildRecords: he,
    findChildRecordsByTagName: Me,
    findChildRecordsWithinDepthAndGivenTagName: ke,
    findDescendants: Le,
    findAncestors: de,
    findFirstAncestorByTagName: qe,
    ensureRelationship: A,
    findRootSCL: F,
    recordExists: E,
    findOneRecordByAttribute: X,
    findAllRecordsByAttribute: ue,
    close: Ce,
    extractAttr: Pa,
    updateAttr: jf,
    copyRecordTreeRecursively: So,
    db: n
  };
  async function i(J) {
    const re = await D(J.id);
    if (!re)
      throw new Error(`could not re-fetch record id:${J.id}`);
    return re;
  }
  async function u(J) {
    const re = { ...J, id: crypto.randomUUID() };
    try {
      return await n.table(Vt).add(re), re;
    } catch (j) {
      const we = {
        msg: "could not add record",
        db: n.name,
        newRecord: re,
        err: j
      };
      throw console.error(we), new Error(JSON.stringify(we));
    }
  }
  async function c(J) {
    try {
      if (await n.table(Vt).update(J.id, J) < 1) {
        const j = { msg: "nothing has been updated", record: J };
        throw console.error(j), new Error(JSON.stringify(j));
      }
    } catch (re) {
      console.error(re);
    }
  }
  async function f(J) {
    try {
      if (J.children)
        for (const re of J.children) {
          const j = await D(re.id);
          if (!j) {
            console.warn({
              msg: "deleteRecord: child relationship found but not child record, continuing",
              child: re
            });
            continue;
          }
          await f(j);
        }
      if (J.parent?.id) {
        const re = await D(J.parent.id);
        if (!re) throw new Error("parent relationship found but not parent record");
        await N(re, J);
      }
      await n.table(Vt).delete(J.id);
    } catch (re) {
      console.error(re);
    }
  }
  async function p(J, re) {
    const we = {
      ...{
        id: "",
        tagName: "SCL",
        attributes: [],
        parent: null,
        namespace: Lu.default,
        value: "",
        children: []
      },
      ...J,
      id: crypto.randomUUID()
    };
    try {
      return await n.table(Vt).add(we), re && await A(re, we), {
        ...we,
        parent: re ? { id: re.id, tagName: re.tagName } : null
      };
    } catch (Se) {
      const ve = {
        msg: "could not add record",
        db: n.name,
        table: J.tagName,
        recordToCreate: J,
        err: Se
      };
      throw console.error(ve), new Error(JSON.stringify(ve));
    }
  }
  async function E(J) {
    return await n.table(Vt).where({ id: J.id }).count() > 0;
  }
  async function A(J, re) {
    const j = J.children?.some((je) => je.id === re.id), we = re.parent?.id === J.id;
    let Se = J, ve = re;
    if (j || (await n.table(Vt).update(J.id, {
      children: Kf([{ id: re.id, tagName: re.tagName }])
    }), Se = await D(J.id)), we || (re.parent = {
      id: J.id,
      tagName: J.tagName
    }, await n.table(Vt).update(re.id, { parent: re.parent }), ve = await D(re.id)), !Se || !ve)
      throw new Error(
        `updating relationship: could not update records: ${Se?.tagName} ${ve?.tagName}`
      );
    return [Se, ve];
  }
  async function N(J, re) {
    re.parent = null, await c(re), J.children && (J.children = J.children.filter((j) => j.id !== re.id), await c(J));
  }
  async function F() {
    const J = await n.table(Vt).where({ tagName: "SCL" }).toArray();
    if (J.length === 0) throw new Error("there is no SCL element");
    if (J.length > 1)
      throw new Error("there are multiple SCL elements; there can be only one");
    const re = J[0];
    if (re.parent)
      throw new Error("the SCL element has a parent; the SCL should be the root element");
    return re;
  }
  async function D(J) {
    return await n.table(Vt).get(J);
  }
  async function M(J) {
    return await n.table(Vt).where({ tagName: J }).toArray();
  }
  async function X(J, re) {
    const [j] = await ca(n, { tagNames: [J], attr: re });
    return j;
  }
  async function ne(J) {
    const [re] = await ca(n, { attr: J });
    return re;
  }
  async function ue(J, re) {
    return ca(n, { tagNames: [J], attr: re });
  }
  async function he(J, re) {
    if (!J.children?.length)
      return [];
    let j = (await n.table(Vt).bulkGet(J.children.map((we) => we.id))).filter(Boolean);
    return re?.tagNames && re.tagNames.length > 0 && (j = j.filter((we) => re?.tagNames?.includes(we.tagName))), re?.attrs && re.attrs.length > 0 && (j = j.filter(
      (we) => re.attrs.every(
        (Se) => we.attributes.some(
          (ve) => ve.name === Se.name && ve.value === Se.value
        )
      )
    )), j;
  }
  async function Me(J, re) {
    const j = await he(J);
    return re.length === 0 ? j : j.filter((Se) => re.includes(Se.tagName));
  }
  async function ke(J, re = Oe, j = []) {
    const we = [];
    let Se = [J];
    for (let ve = 0; ve < re; ve++) {
      const je = [];
      if (Se.length === 0)
        break;
      for (const lt of Se) {
        const Xe = await Me(lt, j);
        Xe.length !== 0 && (je.push(...Xe), we.push(...Xe));
      }
      Se = [...je];
    }
    return we;
  }
  async function Le(J, re = {}) {
    const { depth: j = 1 / 0, tagNames: we = [] } = re, Se = we.length === 0;
    let ve = [], je = [J];
    for (let lt = 0; lt < j; lt++) {
      const Xe = [];
      if (je.length === 0)
        break;
      for (const Ye of je) {
        const _e = await Me(Ye, []);
        _e.length !== 0 && (Xe.push(..._e), ve.push(..._e));
      }
      je = Xe;
    }
    return Se || (ve = ve.filter((lt) => we.includes(lt.tagName))), re.attr && (ve = ve.filter((lt) => Pa(lt, re.attr.name)?.value === re.attr.value)), ve;
  }
  async function de(J, re = {}) {
    const { depth: j = 1 / 0, tagNames: we = [] } = re, Se = we.length === 0, ve = [];
    let je = J;
    for (let Xe = 0; Xe < j && je.parent?.id; Xe++) {
      const Ye = await D(je.parent.id);
      if (!Ye)
        break;
      ve.push(Ye), je = Ye;
    }
    return Se ? ve : ve.filter((Xe) => we.includes(Xe.tagName));
  }
  async function qe(J, re) {
    let j = J;
    for (; j.parent?.id; ) {
      const we = await D(j.parent.id);
      if (!we)
        break;
      if (we.tagName === re)
        return we;
      j = we;
    }
  }
  function Ce() {
    n.close();
  }
}
function Pa(n, i) {
  return n.attributes?.find((u) => u.name === i);
}
function jf(n, i, u) {
  n.attributes || (n.attributes = []);
  const c = n.attributes?.findIndex((p) => p.name === i);
  c >= 0 ? n.attributes[c].value = u : n.attributes.push({ name: i, value: u });
}
function $r(n, i) {
  const u = Pa(n, i);
  if (!u)
    throw new Error(
      `record does not have given attribute, recordId=${n.id}, attributeName=${i}`
    );
  return u;
}
async function Bh(n, i, u) {
  try {
    return await n.table(Vt).where({ tagName: i }).filter(
      (f) => !!f.attributes?.some((p) => p.name === u.name && p.value === u.value)
    ).first();
  } catch (c) {
    console.error({ msg: "could not find record by attribute", tagName: i, attr: u, err: c });
  }
}
async function ca(n, i) {
  try {
    const u = n.table(Vt);
    let c = i.tagNames && i.tagNames.length > 0 ? u.where("tagName").anyOf(i.tagNames) : u.toCollection();
    return i.attr && (c = c.filter((p) => p.attributes?.some(
      (A) => A.name === i.attr.name && A.value === i.attr.value
    ))), await c.toArray();
  } catch (u) {
    return console.error({ msg: "could not find records by options", options: i, err: u }), [];
  }
}
async function So(n, i, u, c) {
  for (const f of n) {
    const p = {
      tagName: f.tagName,
      attributes: [...f.attributes],
      parent: null,
      namespace: f.namespace,
      value: f.value,
      children: []
    };
    let E = await c.createRecord(p);
    E = (await c.ensureRelationship(i, E))[1];
    const N = await u.findChildRecords(f);
    N.length > 0 && await So(N, E, u, c);
  }
}
async function Ff(n, i) {
  const u = new ti(n);
  await u.open();
  const c = Ja(u), f = await qf(i), p = f.sdk;
  try {
    const [E] = await c.findRecordsByTagName("DataTypeTemplates");
    if (!E) {
      console.warn("No DataTypeTemplates found in source file");
      return;
    }
    let [A] = await p.findRecordsByTagName("DataTypeTemplates");
    if (!A) {
      const F = await p.findRootSCL();
      if (!F)
        throw new Error("No SCL root found in target database");
      A = await p.createRecord(
        { tagName: "DataTypeTemplates" },
        F
      );
    }
    const N = await c.findChildRecords(E);
    for (const F of N) {
      const D = $r(F, "id"), [M] = await p.findAllRecordsByAttribute(
        F.tagName,
        {
          name: "id",
          value: D.value
        }
      );
      if (M)
        continue;
      await So([F], A, c, p);
      const X = await p.findRecordById(A.id);
      X && (A = X);
    }
  } finally {
    u.close(), f.sdk.db.close();
  }
}
function Uu(n) {
  async function i() {
    return await n.findRecordsByTagName("LNodeType");
  }
  async function u(F) {
    const D = await c(F);
    if (!D)
      throw new Error(`no LNodeType by lnClass found lnClass=${F}`);
    return $r(D, "id").value;
  }
  async function c(F) {
    const [D] = await n.findRecordsByTagName("DataTypeTemplates");
    if (!D)
      throw new Error(`no DataTypeTemplates found by looking for lnClass=${F}`);
    const [M] = await n.findChildRecords(D, {
      tagNames: ["LNodeType"],
      attrs: [{ name: "lnClass", value: F }]
    });
    return M;
  }
  async function f(F) {
    let [D] = await n.findChildRecords(F, {
      tagNames: ["Private"],
      attrs: [{ name: "type", value: "eIEC61850-6-100" }]
    });
    return D || (D = await n.createRecord(
      {
        tagName: "Private",
        attributes: [{ name: "type", value: "eIEC61850-6-100" }]
      },
      F
    )), D;
  }
  async function p(F) {
    if (!((await n.findChildRecords(F, {
      tagNames: ["LN", "LN0"],
      attrs: [{ name: "lnClass", value: "LLN0" }]
    })).length > 0)) {
      const X = await c("LLN0");
      if (!X)
        throw new Error("no LNodeType with lnClass LLN0 found");
      const ne = $r(X, "id");
      await n.createRecord(
        {
          tagName: "LN0",
          attributes: [
            { name: "lnType", value: ne.value },
            { name: "lnClass", value: "LLN0" },
            { name: "uuid", value: crypto.randomUUID() }
          ]
        },
        F
      );
    }
  }
  async function E(F) {
    const [D] = await n.findDescendants(F, { tagNames: ["Server"] });
    if (D || console.warn(`No Server element found in the IED with id:${F.id}, children:${F.children}`), !((await n.findDescendants(F, {
      tagNames: ["LN"],
      attr: { name: "lnClass", value: "LPHD" }
    })).length > 0)) {
      const ne = await n.createRecord(
        {
          tagName: "LDevice",
          attributes: [{ name: "inst", value: "LD0" }]
        },
        D
      ), ue = await u("LPHD");
      await n.createRecord(
        {
          tagName: "LN",
          attributes: [
            { name: "lnType", value: ue },
            { name: "lnClass", value: "LPHD" },
            { name: "uuid", value: crypto.randomUUID() },
            { name: "inst", value: "1" }
          ]
        },
        ne
      ), await p(ne);
    }
  }
  function A(F) {
    const D = $r(F, "uuid");
    if (!D)
      throw console.error('record does not have a "uuid" to move to "templateUUID"', F), new Error('record does not have a "uuid" to move to "templateUUID"');
    F.attributes?.push({ name: "templateUuid", value: D.value }), N(F);
  }
  function N(F) {
    F.attributes || (F.attributes = []);
    const D = crypto.randomUUID(), M = F.attributes.findIndex((ne) => ne.name === "uuid");
    M >= 0 ? F.attributes[M].value = D : F.attributes.push({ name: "uuid", value: D });
  }
  return {
    findLnodeTypeIdByLnClass: u,
    findLnodeTypeByLnClass: c,
    findAllLNodeTypes: i,
    ensurePrivateElement: f,
    ensureLLN0InLDevice: p,
    ensureLphdInIed: E,
    convertToInstance: A
  };
}
const Bf = "S_IED";
function Mf(n) {
  const { findLnodeTypeIdByLnClass: i, ensureLLN0InLDevice: u, ensureLphdInIed: c } = Uu(n);
  async function f(p, E, A) {
    const N = n.db.name;
    await Ff(A, N);
    const F = new ti(A);
    await F.open();
    const D = Ja(F), M = await D.findRootSCL();
    if (!M)
      throw F.close(), new Error("No SCL root found in ISD template");
    let X = await n.findOneRecordByAttribute("IED", {
      name: "name",
      value: E
    });
    if (!X) {
      const [ue] = await D.findChildRecordsByTagName(M, ["IED"]);
      if (!ue)
        throw F.close(), new Error("No IED found in the provided .isd template");
      X = await n.createRecord({
        tagName: "IED",
        attributes: [
          { name: "name", value: E },
          { name: "manufacturer", value: Bf },
          ...ue.attributes.filter(
            (Oe) => Oe.name !== "name" && Oe.name !== "manufacturer"
          )
        ],
        namespace: ue.namespace,
        value: ue.value
      });
      let he = await n.findRootSCL();
      he && ([he, X] = await n.ensureRelationship(he, X));
      const Me = await D.findChildRecords(ue);
      await So(Me, X, D, n);
    }
    X = await n.refetchRecord(X), F.close();
    const ne = await n.findDescendants(p, { tagNames: ["FunctionRef"] });
    for (const ue of ne) {
      const he = n.extractAttr(ue, "functionUuid");
      if (!he?.value) {
        console.warn(`FunctionRef does not have functionUuid. dbid="${ue.id}"`);
        continue;
      }
      const [Me] = await n.findAllRecordsByAttribute("Function", {
        name: "uuid",
        value: he.value
      }), [Oe] = await n.findAllRecordsByAttribute("SubFunction", {
        name: "uuid",
        value: he.value
      });
      let ke;
      if (Me)
        ke = Me;
      else if (Oe)
        ke = await n.findFirstAncestorByTagName(Oe, "Function");
      else
        throw new Error(`no (sub)function found with id:${he.value}`);
      if (!ke)
        throw new Error(
          `no highest level function found for element with id: ${he.value} `
        );
      const Le = n.extractAttr(ke, "name");
      if (!Le?.value) {
        console.warn("Function does not have name", ke);
        continue;
      }
      const [de] = await n.findDescendants(X, { tagNames: ["Server"] });
      de || console.warn(
        `No Server element found in the IED with id:${X.id}, children:${X.children}`
      );
      const Ce = Le.value.replace(/\s+/g, "_");
      let [J] = await n.findChildRecords(de, {
        attrs: [
          {
            name: "inst",
            value: Ce
          }
        ]
      });
      J || (J = await n.createRecord(
        {
          tagName: "LDevice",
          attributes: [{ name: "inst", value: Ce }]
        },
        de
      ));
      const re = Me || Oe, j = await n.findDescendants(re, { tagNames: ["LNode"] });
      await Promise.all(
        j.map((Se) => (n.updateAttr(Se, "ldInst", Ce), n.updateAttr(Se, "iedName", E), n.updateRecord(Se)))
      );
      const [we] = await n.findDescendants(re, {
        tagNames: ["LNodeSpecNaming"]
      });
      if (!we)
        throw new Error(`no LNodeSpecNaming found in function with id:${re.id}`);
      n.updateAttr(we, "sIedName", E), n.updateAttr(we, "sLdInst", Ce), await n.updateRecord(we), await Promise.all(
        j.map(async (Se) => {
          const ve = $r(Se, "prefix"), je = $r(Se, "lnClass"), lt = $r(Se, "lnInst"), Xe = await i(je.value);
          await n.createRecord(
            {
              tagName: "LN",
              attributes: [
                { name: "lnType", value: Xe },
                { name: "lnClass", value: je.value },
                { name: "uuid", value: crypto.randomUUID() },
                { name: "inst", value: lt.value },
                { name: "prefix", value: ve.value }
              ]
            },
            J
          );
        })
        // LNodes map
      ), await u(J);
    }
    await c(X);
  }
  return {
    implementAllocationRoleBySIed: f
  };
}
async function qf(n) {
  const i = new ti(n);
  await i.open();
  const u = Ja(i);
  return Lf(u);
}
function Lf(n) {
  return {
    ...Uu(n),
    ...Mf(n),
    sdk: n
  };
}
export {
  pa as $,
  Xr as A,
  Xf as B,
  oo as C,
  sh as D,
  Ma as E,
  js as F,
  nc as G,
  sa as H,
  Yf as I,
  ch as J,
  _a as K,
  ju as L,
  Jf as M,
  Zf as N,
  wa as O,
  dh as P,
  lh as Q,
  zf as R,
  bo as S,
  Sh as T,
  ph as U,
  Iu as V,
  $r as W,
  on as X,
  nh as Y,
  tc as Z,
  Js as _,
  Tt as a,
  If as a0,
  kf as a1,
  Pa as a2,
  ti as a3,
  qf as a4,
  Ph as a5,
  Vt as a6,
  ih as a7,
  hu as a8,
  Xt as a9,
  Bh as aA,
  rh as aa,
  Fc as ab,
  Fu as ac,
  go as ad,
  Vc as ae,
  $c as af,
  Gc as ag,
  hh as ah,
  Gf as ai,
  al as aj,
  eh as ak,
  fh as al,
  ar as am,
  oh as an,
  Il as ao,
  th as ap,
  Cl as aq,
  qa as ar,
  ah as as,
  Uf as at,
  Qf as au,
  Pl as av,
  yh as aw,
  Ja as ax,
  Lu as ay,
  jf as az,
  Ia as b,
  uh as c,
  Ps as d,
  Ht as e,
  Vf as f,
  En as g,
  $f as h,
  Ke as i,
  Tn as j,
  Pe as k,
  Qi as l,
  Da as m,
  tr as n,
  Cs as o,
  Yu as p,
  Rc as q,
  Wf as r,
  Ra as s,
  ea as t,
  Hf as u,
  Va as v,
  Tc as w,
  Je as x,
  Qa as y,
  bt as z
};
