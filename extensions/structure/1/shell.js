/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function vn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const k = {}, ze = [], de = () => {
}, Br = () => !1, Vt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), yn = (e) => e.startsWith("onUpdate:"), Z = Object.assign, Cn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Lr = Object.prototype.hasOwnProperty, U = (e, t) => Lr.call(e, t), C = Array.isArray, qe = (e) => Wt(e) === "[object Map]", Ss = (e) => Wt(e) === "[object Set]", y = (e) => typeof e == "function", $ = (e) => typeof e == "string", Le = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", vs = (e) => (K(e) || y(e)) && y(e.then) && y(e.catch), ys = Object.prototype.toString, Wt = (e) => ys.call(e), Gr = (e) => Wt(e).slice(8, -1), Cs = (e) => Wt(e) === "[object Object]", Hn = (e) => $(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, at = /* @__PURE__ */ vn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Kt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Fr = /-(\w)/g, ae = Kt(
  (e) => e.replace(Fr, (t, n) => n ? n.toUpperCase() : "")
), kr = /\B([A-Z])/g, Xe = Kt(
  (e) => e.replace(kr, "-$1").toLowerCase()
), $t = Kt((e) => e.charAt(0).toUpperCase() + e.slice(1)), nn = Kt(
  (e) => e ? `on${$t(e)}` : ""
), Me = (e, t) => !Object.is(e, t), sn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, mn = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, jr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Qn;
const Xt = () => Qn || (Qn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function wn(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = $(s) ? $r(s) : wn(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if ($(e) || K(e))
    return e;
}
const Vr = /;(?![^(]*\))/g, Wr = /:([^]+)/, Kr = /\/\*[^]*?\*\//g;
function $r(e) {
  const t = {};
  return e.replace(Kr, "").split(Vr).forEach((n) => {
    if (n) {
      const s = n.split(Wr);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Dn(e) {
  let t = "";
  if ($(e))
    t = e;
  else if (C(e))
    for (let n = 0; n < e.length; n++) {
      const s = Dn(e[n]);
      s && (t += s + " ");
    }
  else if (K(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Xr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Yr = /* @__PURE__ */ vn(Xr);
function Hs(e) {
  return !!e || e === "";
}
const ws = (e) => !!(e && e.__v_isRef === !0), Ds = (e) => $(e) ? e : e == null ? "" : C(e) || K(e) && (e.toString === ys || !y(e.toString)) ? ws(e) ? Ds(e.value) : JSON.stringify(e, Ps, 2) : String(e), Ps = (e, t) => ws(t) ? Ps(e, t.value) : qe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], o) => (n[rn(s, o) + " =>"] = r, n),
    {}
  )
} : Ss(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => rn(n))
} : Le(t) ? rn(t) : K(t) && !C(t) && !Cs(t) ? String(t) : t, rn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Le(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var Jr = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_2029dcc8-0680-4047-b5b3-9cfc00b3903f", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "pnpm/10.10.0 npm/? node/v20.19.4 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_2029dcc8-0680-4047-b5b3-9cfc00b3903f", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/usr/local/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/set/set/packages/extensions/structure/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "SeptKit", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.14.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.2.13676358", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "210705285", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_shared_workspace_lockfile: "", SYSTEMD_EXEC_PID: "1891", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250720.1.0", LOGNAME: "runner", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.11/x64", JOURNAL_STREAM: "9:9027", GITHUB_WORKFLOW: "Deploy Ext. Structure", _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure", GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.5/x64", npm_config_registry: "https://registry.npmjs.org/", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", GITHUB_RUN_ID: "16620406694", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "0bab98214b53ea1bb393264c401e8c5db7f59607", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "SeptKit/set/.github/workflows/deploy-ext-structure.yml@refs/heads/infra/ext-structure-pipeline", GITHUB_ACTION_REPOSITORY: "", ENABLE_RUNNER_TRACING: "true", npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/set/set/packages/extensions/structure/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node-gyp-bin:/home/runner/work/set/set/node_modules/.bin:/home/runner/work/set/set/packages/extensions/structure/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node-gyp-bin:/home/runner/work/set/set/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_7c1c8ef5-d87f-40e5-ba01-9a20498a28c3", INVOCATION_ID: "4a5090e3bf3645efb3cc7569f2338571", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", NODE: "/usr/local/bin/node", npm_package_name: "@septkit/ext-structure", GITHUB_ACTION: "__run", GITHUB_RUN_NUMBER: "9", GITHUB_TRIGGERING_ACTOR: "trusz", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", npm_config_frozen_lockfile: "", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 1000000408", XDG_CONFIG_HOME: "/home/runner/.config", GITHUB_REF_NAME: "infra/ext-structure-pipeline", GITHUB_REPOSITORY: "SeptKit/set", npm_lifecycle_script: "vite build", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", SHELL: "/bin/bash", GITHUB_REPOSITORY_ID: "1003638225", GITHUB_ACTIONS: "true", NODE_PATH: "/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/bin/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/npm-run-all2@8.0.4/node_modules/npm-run-all2/bin/run-p/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/npm-run-all2@8.0.4/node_modules/npm-run-all2/bin/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/npm-run-all2@8.0.4/node_modules/npm-run-all2/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/npm-run-all2@8.0.4/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/node_modules", npm_package_version: "1", npm_config_verify_deps_before_run: "false", npm_lifecycle_event: "build-only", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/set/set", ACCEPT_EULA: "Y", GITHUB_JOB: "build", npm_config_sharedWorkspaceLockfile: "", GITHUB_SHA: "0bab98214b53ea1bb393264c401e8c5db7f59607", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/infra/ext-structure-pipeline", GITHUB_ACTOR: "trusz", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_2029dcc8-0680-4047-b5b3-9cfc00b3903f", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/set/set/packages/extensions/structure", GITHUB_ACTOR_ID: "1510715", RUNNER_WORKSPACE: "/home/runner/work/set", npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/pnpm.cjs", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", GITHUB_EVENT_NAME: "workflow_dispatch", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_2029dcc8-0680-4047-b5b3-9cfc00b3903f", EDGEWEBDRIVER: "/usr/local/share/edge_driver", PNPM_SCRIPT_SRC_DIR: "/home/runner/work/set/set/packages/extensions/structure", npm_config__jsr_registry: "https://npm.jsr.io/", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_2029dcc8-0680-4047-b5b3-9cfc00b3903f", INIT_CWD: "/home/runner/work/set/set/packages/extensions/structure", NODE_ENV: "production", LAUNCH_EDITOR: "code" };
let oe;
class zr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = oe, !t && oe && (this.index = (oe.scopes || (oe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = oe;
      try {
        return oe = this, t();
      } finally {
        oe = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = oe, oe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (oe = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
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
function qr() {
  return oe;
}
let F;
const on = /* @__PURE__ */ new WeakSet();
class Us {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, oe && oe.active && oe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, on.has(this) && (on.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Bs(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, es(this), Ls(this);
    const t = F, n = pe;
    F = this, pe = !0;
    try {
      return this.fn();
    } finally {
      Gs(this), F = t, pe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Mn(t);
      this.deps = this.depsTail = void 0, es(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? on.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    gn(this) && this.run();
  }
  get dirty() {
    return gn(this);
  }
}
let Ms = 0, dt, pt;
function Bs(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = pt, pt = e;
    return;
  }
  e.next = dt, dt = e;
}
function Pn() {
  Ms++;
}
function Un() {
  if (--Ms > 0)
    return;
  if (pt) {
    let t = pt;
    for (pt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; dt; ) {
    let t = dt;
    for (dt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ls(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Gs(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Mn(s), Zr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function gn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Fs(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Fs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Tt) || (e.globalVersion = Tt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !gn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = F, s = pe;
  F = e, pe = !0;
  try {
    Ls(e);
    const r = e.fn(e._value);
    (t.version === 0 || Me(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    F = n, pe = s, Gs(e), e.flags &= -3;
  }
}
function Mn(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Mn(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Zr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let pe = !0;
const ks = [];
function Re() {
  ks.push(pe), pe = !1;
}
function Ie() {
  const e = ks.pop();
  pe = e === void 0 ? !0 : e;
}
function es(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = F;
    F = void 0;
    try {
      t();
    } finally {
      F = n;
    }
  }
}
let Tt = 0;
class Qr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Bn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!F || !pe || F === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== F)
      n = this.activeLink = new Qr(F, this), F.deps ? (n.prevDep = F.depsTail, F.depsTail.nextDep = n, F.depsTail = n) : F.deps = F.depsTail = n, js(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = F.depsTail, n.nextDep = void 0, F.depsTail.nextDep = n, F.depsTail = n, F.deps === n && (F.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Tt++, this.notify(t);
  }
  notify(t) {
    Pn();
    try {
      Jr.NODE_ENV;
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Un();
    }
  }
}
function js(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        js(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const bn = /* @__PURE__ */ new WeakMap(), Ke = Symbol(
  ""
), En = Symbol(
  ""
), Ot = Symbol(
  ""
);
function q(e, t, n) {
  if (pe && F) {
    let s = bn.get(e);
    s || bn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new Bn()), r.map = s, r.key = n), r.track();
  }
}
function Ce(e, t, n, s, r, o) {
  const i = bn.get(e);
  if (!i) {
    Tt++;
    return;
  }
  const c = (f) => {
    f && f.trigger();
  };
  if (Pn(), t === "clear")
    i.forEach(c);
  else {
    const f = C(e), p = f && Hn(n);
    if (f && n === "length") {
      const a = Number(s);
      i.forEach((_, I) => {
        (I === "length" || I === Ot || !Le(I) && I >= a) && c(_);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && c(i.get(n)), p && c(i.get(Ot)), t) {
        case "add":
          f ? p && c(i.get("length")) : (c(i.get(Ke)), qe(e) && c(i.get(En)));
          break;
        case "delete":
          f || (c(i.get(Ke)), qe(e) && c(i.get(En)));
          break;
        case "set":
          qe(e) && c(i.get(Ke));
          break;
      }
  }
  Un();
}
function Ye(e) {
  const t = P(e);
  return t === e ? t : (q(t, "iterate", Ot), _e(e) ? t : t.map(te));
}
function Ln(e) {
  return q(e = P(e), "iterate", Ot), e;
}
const eo = {
  __proto__: null,
  [Symbol.iterator]() {
    return ln(this, Symbol.iterator, te);
  },
  concat(...e) {
    return Ye(this).concat(
      ...e.map((t) => C(t) ? Ye(t) : t)
    );
  },
  entries() {
    return ln(this, "entries", (e) => (e[1] = te(e[1]), e));
  },
  every(e, t) {
    return Se(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Se(this, "filter", e, t, (n) => n.map(te), arguments);
  },
  find(e, t) {
    return Se(this, "find", e, t, te, arguments);
  },
  findIndex(e, t) {
    return Se(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Se(this, "findLast", e, t, te, arguments);
  },
  findLastIndex(e, t) {
    return Se(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Se(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return cn(this, "includes", e);
  },
  indexOf(...e) {
    return cn(this, "indexOf", e);
  },
  join(e) {
    return Ye(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return cn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Se(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return lt(this, "pop");
  },
  push(...e) {
    return lt(this, "push", e);
  },
  reduce(e, ...t) {
    return ts(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ts(this, "reduceRight", e, t);
  },
  shift() {
    return lt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Se(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return lt(this, "splice", e);
  },
  toReversed() {
    return Ye(this).toReversed();
  },
  toSorted(e) {
    return Ye(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ye(this).toSpliced(...e);
  },
  unshift(...e) {
    return lt(this, "unshift", e);
  },
  values() {
    return ln(this, "values", te);
  }
};
function ln(e, t, n) {
  const s = Ln(e), r = s[t]();
  return s !== e && !_e(e) && (r._next = r.next, r.next = () => {
    const o = r._next();
    return o.value && (o.value = n(o.value)), o;
  }), r;
}
const to = Array.prototype;
function Se(e, t, n, s, r, o) {
  const i = Ln(e), c = i !== e && !_e(e), f = i[t];
  if (f !== to[t]) {
    const _ = f.apply(e, o);
    return c ? te(_) : _;
  }
  let p = n;
  i !== e && (c ? p = function(_, I) {
    return n.call(this, te(_), I, e);
  } : n.length > 2 && (p = function(_, I) {
    return n.call(this, _, I, e);
  }));
  const a = f.call(i, p, s);
  return c && r ? r(a) : a;
}
function ts(e, t, n, s) {
  const r = Ln(e);
  let o = n;
  return r !== e && (_e(e) ? n.length > 3 && (o = function(i, c, f) {
    return n.call(this, i, c, f, e);
  }) : o = function(i, c, f) {
    return n.call(this, i, te(c), f, e);
  }), r[t](o, ...s);
}
function cn(e, t, n) {
  const s = P(e);
  q(s, "iterate", Ot);
  const r = s[t](...n);
  return (r === -1 || r === !1) && Fn(n[0]) ? (n[0] = P(n[0]), s[t](...n)) : r;
}
function lt(e, t, n = []) {
  Re(), Pn();
  const s = P(e)[t].apply(e, n);
  return Un(), Ie(), s;
}
const no = /* @__PURE__ */ vn("__proto__,__v_isRef,__isVue"), Vs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Le)
);
function so(e) {
  Le(e) || (e = String(e));
  const t = P(this);
  return q(t, "has", e), t.hasOwnProperty(e);
}
class Ws {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (r ? o ? zs : Js : o ? Ys : Xs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = C(t);
    if (!r) {
      let f;
      if (i && (f = eo[n]))
        return f;
      if (n === "hasOwnProperty")
        return so;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      J(t) ? t : s
    );
    return (Le(n) ? Vs.has(n) : no(n)) || (r || q(t, "get", n), o) ? c : J(c) ? i && Hn(n) ? c : c.value : K(c) ? r ? qs(c) : Gn(c) : c;
  }
}
class Ks extends Ws {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._isShallow) {
      const f = $e(o);
      if (!_e(s) && !$e(s) && (o = P(o), s = P(s)), !C(t) && J(o) && !J(s))
        return f ? !1 : (o.value = s, !0);
    }
    const i = C(t) && Hn(n) ? Number(n) < t.length : U(t, n), c = Reflect.set(
      t,
      n,
      s,
      J(t) ? t : r
    );
    return t === P(r) && (i ? Me(s, o) && Ce(t, "set", n, s) : Ce(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = U(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Ce(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Le(n) || !Vs.has(n)) && q(t, "has", n), s;
  }
  ownKeys(t) {
    return q(
      t,
      "iterate",
      C(t) ? "length" : Ke
    ), Reflect.ownKeys(t);
  }
}
class $s extends Ws {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const ro = /* @__PURE__ */ new Ks(), oo = /* @__PURE__ */ new $s(), io = /* @__PURE__ */ new Ks(!0), lo = /* @__PURE__ */ new $s(!0), Tn = (e) => e, Ht = (e) => Reflect.getPrototypeOf(e);
function co(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = P(r), i = qe(o), c = e === "entries" || e === Symbol.iterator && i, f = e === "keys" && i, p = r[e](...s), a = n ? Tn : t ? On : te;
    return !t && q(
      o,
      "iterate",
      f ? En : Ke
    ), {
      // iterator protocol
      next() {
        const { value: _, done: I } = p.next();
        return I ? { value: _, done: I } : {
          value: c ? [a(_[0]), a(_[1])] : a(_),
          done: I
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function wt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function uo(e, t) {
  const n = {
    get(r) {
      const o = this.__v_raw, i = P(o), c = P(r);
      e || (Me(r, c) && q(i, "get", r), q(i, "get", c));
      const { has: f } = Ht(i), p = t ? Tn : e ? On : te;
      if (f.call(i, r))
        return p(o.get(r));
      if (f.call(i, c))
        return p(o.get(c));
      o !== i && o.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && q(P(r), "iterate", Ke), Reflect.get(r, "size", r);
    },
    has(r) {
      const o = this.__v_raw, i = P(o), c = P(r);
      return e || (Me(r, c) && q(i, "has", r), q(i, "has", c)), r === c ? o.has(r) : o.has(r) || o.has(c);
    },
    forEach(r, o) {
      const i = this, c = i.__v_raw, f = P(c), p = t ? Tn : e ? On : te;
      return !e && q(f, "iterate", Ke), c.forEach((a, _) => r.call(o, p(a), p(_), i));
    }
  };
  return Z(
    n,
    e ? {
      add: wt("add"),
      set: wt("set"),
      delete: wt("delete"),
      clear: wt("clear")
    } : {
      add(r) {
        !t && !_e(r) && !$e(r) && (r = P(r));
        const o = P(this);
        return Ht(o).has.call(o, r) || (o.add(r), Ce(o, "add", r, r)), this;
      },
      set(r, o) {
        !t && !_e(o) && !$e(o) && (o = P(o));
        const i = P(this), { has: c, get: f } = Ht(i);
        let p = c.call(i, r);
        p || (r = P(r), p = c.call(i, r));
        const a = f.call(i, r);
        return i.set(r, o), p ? Me(o, a) && Ce(i, "set", r, o) : Ce(i, "add", r, o), this;
      },
      delete(r) {
        const o = P(this), { has: i, get: c } = Ht(o);
        let f = i.call(o, r);
        f || (r = P(r), f = i.call(o, r)), c && c.call(o, r);
        const p = o.delete(r);
        return f && Ce(o, "delete", r, void 0), p;
      },
      clear() {
        const r = P(this), o = r.size !== 0, i = r.clear();
        return o && Ce(
          r,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = co(r, e, t);
  }), n;
}
function Yt(e, t) {
  const n = uo(e, t);
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    U(n, r) && r in s ? n : s,
    r,
    o
  );
}
const fo = {
  get: /* @__PURE__ */ Yt(!1, !1)
}, ao = {
  get: /* @__PURE__ */ Yt(!1, !0)
}, po = {
  get: /* @__PURE__ */ Yt(!0, !1)
}, _o = {
  get: /* @__PURE__ */ Yt(!0, !0)
}, Xs = /* @__PURE__ */ new WeakMap(), Ys = /* @__PURE__ */ new WeakMap(), Js = /* @__PURE__ */ new WeakMap(), zs = /* @__PURE__ */ new WeakMap();
function ho(e) {
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
function mo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ho(Gr(e));
}
function Gn(e) {
  return $e(e) ? e : Jt(
    e,
    !1,
    ro,
    fo,
    Xs
  );
}
function go(e) {
  return Jt(
    e,
    !1,
    io,
    ao,
    Ys
  );
}
function qs(e) {
  return Jt(
    e,
    !0,
    oo,
    po,
    Js
  );
}
function Dt(e) {
  return Jt(
    e,
    !0,
    lo,
    _o,
    zs
  );
}
function Jt(e, t, n, s, r) {
  if (!K(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = mo(e);
  if (o === 0)
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const c = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, c), c;
}
function _t(e) {
  return $e(e) ? _t(e.__v_raw) : !!(e && e.__v_isReactive);
}
function $e(e) {
  return !!(e && e.__v_isReadonly);
}
function _e(e) {
  return !!(e && e.__v_isShallow);
}
function Fn(e) {
  return e ? !!e.__v_raw : !1;
}
function P(e) {
  const t = e && e.__v_raw;
  return t ? P(t) : e;
}
function bo(e) {
  return !U(e, "__v_skip") && Object.isExtensible(e) && mn(e, "__v_skip", !0), e;
}
const te = (e) => K(e) ? Gn(e) : e, On = (e) => K(e) ? qs(e) : e;
function J(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Eo(e) {
  return To(e, !1);
}
function To(e, t) {
  return J(e) ? e : new Oo(e, t);
}
class Oo {
  constructor(t, n) {
    this.dep = new Bn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : P(t), this._value = n ? t : te(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || _e(t) || $e(t);
    t = s ? t : P(t), Me(t, n) && (this._rawValue = t, this._value = s ? t : te(t), this.dep.trigger());
  }
}
function Zs(e) {
  return J(e) ? e.value : e;
}
const Ro = {
  get: (e, t, n) => t === "__v_raw" ? e : Zs(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return J(r) && !J(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Qs(e) {
  return _t(e) ? e : new Proxy(e, Ro);
}
class Io {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Bn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Tt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    F !== this)
      return Bs(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Fs(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function xo(e, t, n = !1) {
  let s, r;
  return y(e) ? s = e : (s = e.get, r = e.set), new Io(s, r, n);
}
const Pt = {}, Lt = /* @__PURE__ */ new WeakMap();
let We;
function Ao(e, t = !1, n = We) {
  if (n) {
    let s = Lt.get(n);
    s || Lt.set(n, s = []), s.push(e);
  }
}
function No(e, t, n = k) {
  const { immediate: s, deep: r, once: o, scheduler: i, augmentJob: c, call: f } = n, p = (S) => r ? S : _e(S) || r === !1 || r === 0 ? Ue(S, 1) : Ue(S);
  let a, _, I, x, D = !1, w = !1;
  if (J(e) ? (_ = () => e.value, D = _e(e)) : _t(e) ? (_ = () => p(e), D = !0) : C(e) ? (w = !0, D = e.some((S) => _t(S) || _e(S)), _ = () => e.map((S) => {
    if (J(S))
      return S.value;
    if (_t(S))
      return p(S);
    if (y(S))
      return f ? f(S, 2) : S();
  })) : y(e) ? t ? _ = f ? () => f(e, 2) : e : _ = () => {
    if (I) {
      Re();
      try {
        I();
      } finally {
        Ie();
      }
    }
    const S = We;
    We = a;
    try {
      return f ? f(e, 3, [x]) : e(x);
    } finally {
      We = S;
    }
  } : _ = de, t && r) {
    const S = _, X = r === !0 ? 1 / 0 : r;
    _ = () => Ue(S(), X);
  }
  const z = qr(), B = () => {
    a.stop(), z && z.active && Cn(z.effects, a);
  };
  if (o && t) {
    const S = t;
    t = (...X) => {
      S(...X), B();
    };
  }
  let V = w ? new Array(e.length).fill(Pt) : Pt;
  const W = (S) => {
    if (!(!(a.flags & 1) || !a.dirty && !S))
      if (t) {
        const X = a.run();
        if (r || D || (w ? X.some((Ae, ue) => Me(Ae, V[ue])) : Me(X, V))) {
          I && I();
          const Ae = We;
          We = a;
          try {
            const ue = [
              X,
              // pass undefined as the old value when it's changed for the first time
              V === Pt ? void 0 : w && V[0] === Pt ? [] : V,
              x
            ];
            V = X, f ? f(t, 3, ue) : (
              // @ts-expect-error
              t(...ue)
            );
          } finally {
            We = Ae;
          }
        }
      } else
        a.run();
  };
  return c && c(W), a = new Us(_), a.scheduler = i ? () => i(W, !1) : W, x = (S) => Ao(S, !1, a), I = a.onStop = () => {
    const S = Lt.get(a);
    if (S) {
      if (f)
        f(S, 4);
      else
        for (const X of S) X();
      Lt.delete(a);
    }
  }, t ? s ? W(!0) : V = a.run() : i ? i(W.bind(null, !0), !0) : a.run(), B.pause = a.pause.bind(a), B.resume = a.resume.bind(a), B.stop = B, B;
}
function Ue(e, t = 1 / 0, n) {
  if (t <= 0 || !K(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, J(e))
    Ue(e.value, t, n);
  else if (C(e))
    for (let s = 0; s < e.length; s++)
      Ue(e[s], t, n);
  else if (Ss(e) || qe(e))
    e.forEach((s) => {
      Ue(s, t, n);
    });
  else if (Cs(e)) {
    for (const s in e)
      Ue(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ue(e[s], t, n);
  }
  return e;
}
var we = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_2029dcc8-0680-4047-b5b3-9cfc00b3903f", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "pnpm/10.10.0 npm/? node/v20.19.4 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_2029dcc8-0680-4047-b5b3-9cfc00b3903f", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/usr/local/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/set/set/packages/extensions/structure/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "SeptKit", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.14.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.2.13676358", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "210705285", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_shared_workspace_lockfile: "", SYSTEMD_EXEC_PID: "1891", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250720.1.0", LOGNAME: "runner", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.11/x64", JOURNAL_STREAM: "9:9027", GITHUB_WORKFLOW: "Deploy Ext. Structure", _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure", GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.5/x64", npm_config_registry: "https://registry.npmjs.org/", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", GITHUB_RUN_ID: "16620406694", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "0bab98214b53ea1bb393264c401e8c5db7f59607", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "SeptKit/set/.github/workflows/deploy-ext-structure.yml@refs/heads/infra/ext-structure-pipeline", GITHUB_ACTION_REPOSITORY: "", ENABLE_RUNNER_TRACING: "true", npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/set/set/packages/extensions/structure/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node-gyp-bin:/home/runner/work/set/set/node_modules/.bin:/home/runner/work/set/set/packages/extensions/structure/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node-gyp-bin:/home/runner/work/set/set/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_7c1c8ef5-d87f-40e5-ba01-9a20498a28c3", INVOCATION_ID: "4a5090e3bf3645efb3cc7569f2338571", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", NODE: "/usr/local/bin/node", npm_package_name: "@septkit/ext-structure", GITHUB_ACTION: "__run", GITHUB_RUN_NUMBER: "9", GITHUB_TRIGGERING_ACTOR: "trusz", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", npm_config_frozen_lockfile: "", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 1000000408", XDG_CONFIG_HOME: "/home/runner/.config", GITHUB_REF_NAME: "infra/ext-structure-pipeline", GITHUB_REPOSITORY: "SeptKit/set", npm_lifecycle_script: "vite build", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", SHELL: "/bin/bash", GITHUB_REPOSITORY_ID: "1003638225", GITHUB_ACTIONS: "true", NODE_PATH: "/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/bin/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/npm-run-all2@8.0.4/node_modules/npm-run-all2/bin/run-p/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/npm-run-all2@8.0.4/node_modules/npm-run-all2/bin/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/npm-run-all2@8.0.4/node_modules/npm-run-all2/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/npm-run-all2@8.0.4/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/node_modules", npm_package_version: "1", npm_config_verify_deps_before_run: "false", npm_lifecycle_event: "build-only", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/set/set", ACCEPT_EULA: "Y", GITHUB_JOB: "build", npm_config_sharedWorkspaceLockfile: "", GITHUB_SHA: "0bab98214b53ea1bb393264c401e8c5db7f59607", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/infra/ext-structure-pipeline", GITHUB_ACTOR: "trusz", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_2029dcc8-0680-4047-b5b3-9cfc00b3903f", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/set/set/packages/extensions/structure", GITHUB_ACTOR_ID: "1510715", RUNNER_WORKSPACE: "/home/runner/work/set", npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/pnpm.cjs", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", GITHUB_EVENT_NAME: "workflow_dispatch", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_2029dcc8-0680-4047-b5b3-9cfc00b3903f", EDGEWEBDRIVER: "/usr/local/share/edge_driver", PNPM_SCRIPT_SRC_DIR: "/home/runner/work/set/set/packages/extensions/structure", npm_config__jsr_registry: "https://npm.jsr.io/", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_2029dcc8-0680-4047-b5b3-9cfc00b3903f", INIT_CWD: "/home/runner/work/set/set/packages/extensions/structure", NODE_ENV: "production", LAUNCH_EDITOR: "code" };
const ht = [];
let un = !1;
function So(e, ...t) {
  if (un) return;
  un = !0, Re();
  const n = ht.length ? ht[ht.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = vo();
  if (s)
    nt(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var i, c;
          return (c = (i = o.toString) == null ? void 0 : i.call(o)) != null ? c : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: o }) => `at <${Dr(n, o.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ...yo(r)), console.warn(...o);
  }
  Ie(), un = !1;
}
function vo() {
  let e = ht[ht.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function yo(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Co(n));
  }), t;
}
function Co({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${Dr(
    e.component,
    e.type,
    s
  )}`, o = ">" + n;
  return e.props ? [r, ...Ho(e.props), o] : [r + o];
}
function Ho(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...er(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function er(e, t, n) {
  return $(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : J(t) ? (t = er(e, P(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : y(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = P(t), n ? t : [`${e}=`, t]);
}
function nt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    zt(r, t, n);
  }
}
function xe(e, t, n, s) {
  if (y(e)) {
    const r = nt(e, t, n, s);
    return r && vs(r) && r.catch((o) => {
      zt(o, t, n);
    }), r;
  }
  if (C(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(xe(e[o], t, n, s));
    return r;
  }
}
function zt(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || k;
  if (t) {
    let c = t.parent;
    const f = t.proxy, p = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const a = c.ec;
      if (a) {
        for (let _ = 0; _ < a.length; _++)
          if (a[_](e, f, p) === !1)
            return;
      }
      c = c.parent;
    }
    if (o) {
      Re(), nt(o, null, 10, [
        e,
        f,
        p
      ]), Ie();
      return;
    }
  }
  wo(e, n, r, s, i);
}
function wo(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ne = [];
let Te = -1;
const Ze = [];
let De = null, Je = 0;
const tr = /* @__PURE__ */ Promise.resolve();
let Gt = null;
function Do(e) {
  const t = Gt || tr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Po(e) {
  let t = Te + 1, n = ne.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = ne[s], o = Rt(r);
    o < e || o === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function kn(e) {
  if (!(e.flags & 1)) {
    const t = Rt(e), n = ne[ne.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Rt(n) ? ne.push(e) : ne.splice(Po(t), 0, e), e.flags |= 1, nr();
  }
}
function nr() {
  Gt || (Gt = tr.then(rr));
}
function Uo(e) {
  C(e) ? Ze.push(...e) : De && e.id === -1 ? De.splice(Je + 1, 0, e) : e.flags & 1 || (Ze.push(e), e.flags |= 1), nr();
}
function ns(e, t, n = Te + 1) {
  for (; n < ne.length; n++) {
    const s = ne[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ne.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function sr(e) {
  if (Ze.length) {
    const t = [...new Set(Ze)].sort(
      (n, s) => Rt(n) - Rt(s)
    );
    if (Ze.length = 0, De) {
      De.push(...t);
      return;
    }
    for (De = t, Je = 0; Je < De.length; Je++) {
      const n = De[Je];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    De = null, Je = 0;
  }
}
const Rt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function rr(e) {
  const t = de;
  try {
    for (Te = 0; Te < ne.length; Te++) {
      const n = ne[Te];
      n && !(n.flags & 8) && (we.NODE_ENV !== "production" && t(n), n.flags & 4 && (n.flags &= -2), nt(
        n,
        n.i,
        n.i ? 15 : 14
      ), n.flags & 4 || (n.flags &= -2));
    }
  } finally {
    for (; Te < ne.length; Te++) {
      const n = ne[Te];
      n && (n.flags &= -2);
    }
    Te = -1, ne.length = 0, sr(), Gt = null, (ne.length || Ze.length) && rr();
  }
}
let fe = null, or = null;
function Ft(e) {
  const t = fe;
  return fe = e, or = e && e.type.__scopeId || null, t;
}
function ir(e, t = fe, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && ds(-1);
    const o = Ft(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Ft(o), s._d && ds(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function je(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    o && (c.oldValue = o[i].value);
    let f = c.dir[s];
    f && (Re(), xe(f, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Ie());
  }
}
const Mo = Symbol("_vte"), Bo = (e) => e.__isTeleport;
function jn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, jn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Lo(e, t) {
  return y(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Z({ name: e.name }, t, { setup: e })
  ) : e;
}
function lr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function mt(e, t, n, s, r = !1) {
  if (C(e)) {
    e.forEach(
      (D, w) => mt(
        D,
        t && (C(t) ? t[w] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (gt(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && mt(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? Xn(s.component) : s.el, i = r ? null : o, { i: c, r: f } = e, p = t && t.r, a = c.refs === k ? c.refs = {} : c.refs, _ = c.setupState, I = P(_), x = _ === k ? () => !1 : (D) => U(I, D);
  if (p != null && p !== f && ($(p) ? (a[p] = null, x(p) && (_[p] = null)) : J(p) && (p.value = null)), y(f))
    nt(f, c, 12, [i, a]);
  else {
    const D = $(f), w = J(f);
    if (D || w) {
      const z = () => {
        if (e.f) {
          const B = D ? x(f) ? _[f] : a[f] : f.value;
          r ? C(B) && Cn(B, o) : C(B) ? B.includes(o) || B.push(o) : D ? (a[f] = [o], x(f) && (_[f] = a[f])) : (f.value = [o], e.k && (a[e.k] = f.value));
        } else D ? (a[f] = i, x(f) && (_[f] = i)) : w && (f.value = i, e.k && (a[e.k] = i));
      };
      i ? (z.id = -1, le(z, n)) : z();
    }
  }
}
Xt().requestIdleCallback;
Xt().cancelIdleCallback;
const gt = (e) => !!e.type.__asyncLoader, cr = (e) => e.type.__isKeepAlive;
function Go(e, t) {
  ur(e, "a", t);
}
function Fo(e, t) {
  ur(e, "da", t);
}
function ur(e, t, n = Y) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (qt(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      cr(r.parent.vnode) && ko(s, t, n, r), r = r.parent;
  }
}
function ko(e, t, n, s) {
  const r = qt(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Vn(() => {
    Cn(s[t], r);
  }, n);
}
function qt(e, t, n = Y, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      Re();
      const c = At(n), f = xe(t, n, e, i);
      return c(), Ie(), f;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const He = (e) => (t, n = Y) => {
  (!xt || e === "sp") && qt(e, (...s) => t(...s), n);
}, jo = He("bm"), fr = He("m"), Vo = He(
  "bu"
), Wo = He("u"), Ko = He(
  "bum"
), Vn = He("um"), $o = He(
  "sp"
), Xo = He("rtg"), Yo = He("rtc");
function Jo(e, t = Y) {
  qt("ec", e, t);
}
const zo = "components";
function qo(e, t) {
  return Qo(zo, e, !0, t) || e;
}
const Zo = Symbol.for("v-ndc");
function Qo(e, t, n = !0, s = !1) {
  const r = fe || Y;
  if (r) {
    const o = r.type;
    {
      const c = wr(
        o,
        !1
      );
      if (c && (c === t || c === ae(t) || c === $t(ae(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      ss(r[e] || o[e], t) || // global registration
      ss(r.appContext[e], t)
    );
    return !i && s ? o : i;
  }
}
function ss(e, t) {
  return e && (e[t] || e[ae(t)] || e[$t(ae(t))]);
}
const Rn = (e) => e ? Cr(e) ? Xn(e) : Rn(e.parent) : null, bt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Z(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Rn(e.parent),
    $root: (e) => Rn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => dr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      kn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Do.bind(e.proxy)),
    $watch: (e) => Oi.bind(e)
  })
), fn = (e, t) => e !== k && !e.__isScriptSetup && U(e, t), ei = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: c, appContext: f } = e;
    let p;
    if (t[0] !== "$") {
      const x = i[t];
      if (x !== void 0)
        switch (x) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (fn(s, t))
          return i[t] = 1, s[t];
        if (r !== k && U(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && U(p, t)
        )
          return i[t] = 3, o[t];
        if (n !== k && U(n, t))
          return i[t] = 4, n[t];
        In && (i[t] = 0);
      }
    }
    const a = bt[t];
    let _, I;
    if (a)
      return t === "$attrs" && q(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (_ = c.__cssModules) && (_ = _[t])
    )
      return _;
    if (n !== k && U(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      I = f.config.globalProperties, U(I, t)
    )
      return I[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return fn(r, t) ? (r[t] = n, !0) : s !== k && U(s, t) ? (s[t] = n, !0) : U(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o }
  }, i) {
    let c;
    return !!n[i] || e !== k && U(e, i) || fn(t, i) || (c = o[0]) && U(c, i) || U(s, i) || U(bt, i) || U(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : U(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function rs(e) {
  return C(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let In = !0;
function ti(e) {
  const t = dr(e), n = e.proxy, s = e.ctx;
  In = !1, t.beforeCreate && os(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: o,
    methods: i,
    watch: c,
    provide: f,
    inject: p,
    // lifecycle
    created: a,
    beforeMount: _,
    mounted: I,
    beforeUpdate: x,
    updated: D,
    activated: w,
    deactivated: z,
    beforeDestroy: B,
    beforeUnmount: V,
    destroyed: W,
    unmounted: S,
    render: X,
    renderTracked: Ae,
    renderTriggered: ue,
    errorCaptured: Ne,
    serverPrefetch: Nt,
    // public API
    expose: Ge,
    inheritAttrs: st,
    // assets
    components: St,
    directives: vt,
    filters: en
  } = t;
  if (p && ni(p, s, null), i)
    for (const j in i) {
      const L = i[j];
      y(L) && (s[j] = L.bind(n));
    }
  if (r) {
    const j = r.call(n, n);
    K(j) && (e.data = Gn(j));
  }
  if (In = !0, o)
    for (const j in o) {
      const L = o[j], Fe = y(L) ? L.bind(n, n) : y(L.get) ? L.get.bind(n, n) : de, yt = !y(L) && y(L.set) ? L.set.bind(n) : de, ke = Xi({
        get: Fe,
        set: yt
      });
      Object.defineProperty(s, j, {
        enumerable: !0,
        configurable: !0,
        get: () => ke.value,
        set: (he) => ke.value = he
      });
    }
  if (c)
    for (const j in c)
      ar(c[j], s, n, j);
  if (f) {
    const j = y(f) ? f.call(n) : f;
    Reflect.ownKeys(j).forEach((L) => {
      ci(L, j[L]);
    });
  }
  a && os(a, e, "c");
  function Q(j, L) {
    C(L) ? L.forEach((Fe) => j(Fe.bind(n))) : L && j(L.bind(n));
  }
  if (Q(jo, _), Q(fr, I), Q(Vo, x), Q(Wo, D), Q(Go, w), Q(Fo, z), Q(Jo, Ne), Q(Yo, Ae), Q(Xo, ue), Q(Ko, V), Q(Vn, S), Q($o, Nt), C(Ge))
    if (Ge.length) {
      const j = e.exposed || (e.exposed = {});
      Ge.forEach((L) => {
        Object.defineProperty(j, L, {
          get: () => n[L],
          set: (Fe) => n[L] = Fe
        });
      });
    } else e.exposed || (e.exposed = {});
  X && e.render === de && (e.render = X), st != null && (e.inheritAttrs = st), St && (e.components = St), vt && (e.directives = vt), Nt && lr(e);
}
function ni(e, t, n = de) {
  C(e) && (e = xn(e));
  for (const s in e) {
    const r = e[s];
    let o;
    K(r) ? "default" in r ? o = Ut(
      r.from || s,
      r.default,
      !0
    ) : o = Ut(r.from || s) : o = Ut(r), J(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[s] = o;
  }
}
function os(e, t, n) {
  xe(
    C(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ar(e, t, n, s) {
  let r = s.includes(".") ? Ar(n, s) : () => n[s];
  if ($(e)) {
    const o = t[e];
    y(o) && dn(r, o);
  } else if (y(e))
    dn(r, e.bind(n));
  else if (K(e))
    if (C(e))
      e.forEach((o) => ar(o, t, n, s));
    else {
      const o = y(e.handler) ? e.handler.bind(n) : t[e.handler];
      y(o) && dn(r, o, e);
    }
}
function dr(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = o.get(t);
  let f;
  return c ? f = c : !r.length && !n && !s ? f = t : (f = {}, r.length && r.forEach(
    (p) => kt(f, p, i, !0)
  ), kt(f, t, i)), K(t) && o.set(t, f), f;
}
function kt(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && kt(e, o, n, !0), r && r.forEach(
    (i) => kt(e, i, n, !0)
  );
  for (const i in t)
    if (!(s && i === "expose")) {
      const c = si[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const si = {
  data: is,
  props: ls,
  emits: ls,
  // objects
  methods: ut,
  computed: ut,
  // lifecycle
  beforeCreate: ee,
  created: ee,
  beforeMount: ee,
  mounted: ee,
  beforeUpdate: ee,
  updated: ee,
  beforeDestroy: ee,
  beforeUnmount: ee,
  destroyed: ee,
  unmounted: ee,
  activated: ee,
  deactivated: ee,
  errorCaptured: ee,
  serverPrefetch: ee,
  // assets
  components: ut,
  directives: ut,
  // watch
  watch: oi,
  // provide / inject
  provide: is,
  inject: ri
};
function is(e, t) {
  return t ? e ? function() {
    return Z(
      y(e) ? e.call(this, this) : e,
      y(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ri(e, t) {
  return ut(xn(e), xn(t));
}
function xn(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ee(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ut(e, t) {
  return e ? Z(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ls(e, t) {
  return e ? C(e) && C(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Z(
    /* @__PURE__ */ Object.create(null),
    rs(e),
    rs(t ?? {})
  ) : t;
}
function oi(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Z(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ee(e[s], t[s]);
  return n;
}
function pr() {
  return {
    app: null,
    config: {
      isNativeTag: Br,
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
let ii = 0;
function li(e, t) {
  return function(s, r = null) {
    y(s) || (s = Z({}, s)), r != null && !K(r) && (r = null);
    const o = pr(), i = /* @__PURE__ */ new WeakSet(), c = [];
    let f = !1;
    const p = o.app = {
      _uid: ii++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Yi,
      get config() {
        return o.config;
      },
      set config(a) {
      },
      use(a, ..._) {
        return i.has(a) || (a && y(a.install) ? (i.add(a), a.install(p, ..._)) : y(a) && (i.add(a), a(p, ..._))), p;
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), p;
      },
      component(a, _) {
        return _ ? (o.components[a] = _, p) : o.components[a];
      },
      directive(a, _) {
        return _ ? (o.directives[a] = _, p) : o.directives[a];
      },
      mount(a, _, I) {
        if (!f) {
          const x = p._ceVNode || Be(s, r);
          return x.appContext = o, I === !0 ? I = "svg" : I === !1 && (I = void 0), e(x, a, I), f = !0, p._container = a, a.__vue_app__ = p, Xn(x.component);
        }
      },
      onUnmount(a) {
        c.push(a);
      },
      unmount() {
        f && (xe(
          c,
          p._instance,
          16
        ), e(null, p._container), delete p._container.__vue_app__);
      },
      provide(a, _) {
        return o.provides[a] = _, p;
      },
      runWithContext(a) {
        const _ = Qe;
        Qe = p;
        try {
          return a();
        } finally {
          Qe = _;
        }
      }
    };
    return p;
  };
}
let Qe = null;
function ci(e, t) {
  if (Y) {
    let n = Y.provides;
    const s = Y.parent && Y.parent.provides;
    s === n && (n = Y.provides = Object.create(s)), n[e] = t;
  }
}
function Ut(e, t, n = !1) {
  const s = Y || fe;
  if (s || Qe) {
    let r = Qe ? Qe._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && y(t) ? t.call(s && s.proxy) : t;
  }
}
const _r = {}, hr = () => Object.create(_r), mr = (e) => Object.getPrototypeOf(e) === _r;
function ui(e, t, n, s = !1) {
  const r = {}, o = hr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), gr(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = s ? r : go(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function fi(e, t, n, s) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, c = P(r), [f] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const a = e.vnode.dynamicProps;
      for (let _ = 0; _ < a.length; _++) {
        let I = a[_];
        if (Zt(e.emitsOptions, I))
          continue;
        const x = t[I];
        if (f)
          if (U(o, I))
            x !== o[I] && (o[I] = x, p = !0);
          else {
            const D = ae(I);
            r[D] = An(
              f,
              c,
              D,
              x,
              e,
              !1
            );
          }
        else
          x !== o[I] && (o[I] = x, p = !0);
      }
    }
  } else {
    gr(e, t, r, o) && (p = !0);
    let a;
    for (const _ in c)
      (!t || // for camelCase
      !U(t, _) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Xe(_)) === _ || !U(t, a))) && (f ? n && // for camelCase
      (n[_] !== void 0 || // for kebab-case
      n[a] !== void 0) && (r[_] = An(
        f,
        c,
        _,
        void 0,
        e,
        !0
      )) : delete r[_]);
    if (o !== c)
      for (const _ in o)
        (!t || !U(t, _)) && (delete o[_], p = !0);
  }
  p && Ce(e.attrs, "set", "");
}
function gr(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let f in t) {
      if (at(f))
        continue;
      const p = t[f];
      let a;
      r && U(r, a = ae(f)) ? !o || !o.includes(a) ? n[a] = p : (c || (c = {}))[a] = p : Zt(e.emitsOptions, f) || (!(f in s) || p !== s[f]) && (s[f] = p, i = !0);
    }
  if (o) {
    const f = P(n), p = c || k;
    for (let a = 0; a < o.length; a++) {
      const _ = o[a];
      n[_] = An(
        r,
        f,
        _,
        p[_],
        e,
        !U(p, _)
      );
    }
  }
  return i;
}
function An(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const c = U(i, "default");
    if (c && s === void 0) {
      const f = i.default;
      if (i.type !== Function && !i.skipFactory && y(f)) {
        const { propsDefaults: p } = r;
        if (n in p)
          s = p[n];
        else {
          const a = At(r);
          s = p[n] = f.call(
            null,
            t
          ), a();
        }
      } else
        s = f;
      r.ce && r.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (o && !c ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Xe(n)) && (s = !0));
  }
  return s;
}
const ai = /* @__PURE__ */ new WeakMap();
function br(e, t, n = !1) {
  const s = n ? ai : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, c = [];
  let f = !1;
  if (!y(e)) {
    const a = (_) => {
      f = !0;
      const [I, x] = br(_, t, !0);
      Z(i, I), x && c.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!o && !f)
    return K(e) && s.set(e, ze), ze;
  if (C(o))
    for (let a = 0; a < o.length; a++) {
      const _ = ae(o[a]);
      cs(_) && (i[_] = k);
    }
  else if (o)
    for (const a in o) {
      const _ = ae(a);
      if (cs(_)) {
        const I = o[a], x = i[_] = C(I) || y(I) ? { type: I } : Z({}, I), D = x.type;
        let w = !1, z = !0;
        if (C(D))
          for (let B = 0; B < D.length; ++B) {
            const V = D[B], W = y(V) && V.name;
            if (W === "Boolean") {
              w = !0;
              break;
            } else W === "String" && (z = !1);
          }
        else
          w = y(D) && D.name === "Boolean";
        x[
          0
          /* shouldCast */
        ] = w, x[
          1
          /* shouldCastTrue */
        ] = z, (w || U(x, "default")) && c.push(_);
      }
    }
  const p = [i, c];
  return K(e) && s.set(e, p), p;
}
function cs(e) {
  return e[0] !== "$" && !at(e);
}
const Wn = (e) => e[0] === "_" || e === "$stable", Kn = (e) => C(e) ? e.map(Oe) : [Oe(e)], di = (e, t, n) => {
  if (t._n)
    return t;
  const s = ir((...r) => (we.NODE_ENV !== "production" && Y && !(n === null && fe) && (n && (n.root, Y.root)), Kn(t(...r))), n);
  return s._c = !1, s;
}, Er = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Wn(r)) continue;
    const o = e[r];
    if (y(o))
      t[r] = di(r, o, s);
    else if (o != null) {
      const i = Kn(o);
      t[r] = () => i;
    }
  }
}, Tr = (e, t) => {
  const n = Kn(t);
  e.slots.default = () => n;
}, Or = (e, t, n) => {
  for (const s in t)
    (n || !Wn(s)) && (e[s] = t[s]);
}, pi = (e, t, n) => {
  const s = e.slots = hr();
  if (e.vnode.shapeFlag & 32) {
    const r = t.__;
    r && mn(s, "__", r, !0);
    const o = t._;
    o ? (Or(s, t, n), n && mn(s, "_", o, !0)) : Er(t, s);
  } else t && Tr(e, t);
}, _i = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = k;
  if (s.shapeFlag & 32) {
    const c = t._;
    c ? n && c === 1 ? o = !1 : Or(r, t, n) : (o = !t.$stable, Er(t, r)), i = t;
  } else t && (Tr(e, t), i = { default: 1 });
  if (o)
    for (const c in r)
      !Wn(c) && i[c] == null && delete r[c];
}, le = vi;
function hi(e) {
  return mi(e);
}
function mi(e, t) {
  const n = Xt();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: o,
    createElement: i,
    createText: c,
    createComment: f,
    setText: p,
    setElementText: a,
    parentNode: _,
    nextSibling: I,
    setScopeId: x = de,
    insertStaticContent: D
  } = e, w = (l, u, d, g = null, h = null, m = null, O = void 0, T = null, E = !!u.dynamicChildren) => {
    if (l === u)
      return;
    l && !ct(l, u) && (g = Ct(l), he(l, h, m, !0), l = null), u.patchFlag === -2 && (E = !1, u.dynamicChildren = null);
    const { type: b, ref: N, shapeFlag: R } = u;
    switch (b) {
      case Qt:
        z(l, u, d, g);
        break;
      case et:
        B(l, u, d, g);
        break;
      case pn:
        l == null && V(u, d, g, O);
        break;
      case ye:
        St(
          l,
          u,
          d,
          g,
          h,
          m,
          O,
          T,
          E
        );
        break;
      default:
        R & 1 ? X(
          l,
          u,
          d,
          g,
          h,
          m,
          O,
          T,
          E
        ) : R & 6 ? vt(
          l,
          u,
          d,
          g,
          h,
          m,
          O,
          T,
          E
        ) : (R & 64 || R & 128) && b.process(
          l,
          u,
          d,
          g,
          h,
          m,
          O,
          T,
          E,
          ot
        );
    }
    N != null && h ? mt(N, l && l.ref, m, u || l, !u) : N == null && l && l.ref != null && mt(l.ref, null, m, l, !0);
  }, z = (l, u, d, g) => {
    if (l == null)
      s(
        u.el = c(u.children),
        d,
        g
      );
    else {
      const h = u.el = l.el;
      u.children !== l.children && p(h, u.children);
    }
  }, B = (l, u, d, g) => {
    l == null ? s(
      u.el = f(u.children || ""),
      d,
      g
    ) : u.el = l.el;
  }, V = (l, u, d, g) => {
    [l.el, l.anchor] = D(
      l.children,
      u,
      d,
      g,
      l.el,
      l.anchor
    );
  }, W = ({ el: l, anchor: u }, d, g) => {
    let h;
    for (; l && l !== u; )
      h = I(l), s(l, d, g), l = h;
    s(u, d, g);
  }, S = ({ el: l, anchor: u }) => {
    let d;
    for (; l && l !== u; )
      d = I(l), r(l), l = d;
    r(u);
  }, X = (l, u, d, g, h, m, O, T, E) => {
    u.type === "svg" ? O = "svg" : u.type === "math" && (O = "mathml"), l == null ? Ae(
      u,
      d,
      g,
      h,
      m,
      O,
      T,
      E
    ) : Nt(
      l,
      u,
      h,
      m,
      O,
      T,
      E
    );
  }, Ae = (l, u, d, g, h, m, O, T) => {
    let E, b;
    const { props: N, shapeFlag: R, transition: A, dirs: v } = l;
    if (E = l.el = i(
      l.type,
      m,
      N && N.is,
      N
    ), R & 8 ? a(E, l.children) : R & 16 && Ne(
      l.children,
      E,
      null,
      g,
      h,
      an(l, m),
      O,
      T
    ), v && je(l, null, g, "created"), ue(E, l, l.scopeId, O, g), N) {
      for (const G in N)
        G !== "value" && !at(G) && o(E, G, null, N[G], m, g);
      "value" in N && o(E, "value", null, N.value, m), (b = N.onVnodeBeforeMount) && Ee(b, g, l);
    }
    v && je(l, null, g, "beforeMount");
    const H = gi(h, A);
    H && A.beforeEnter(E), s(E, u, d), ((b = N && N.onVnodeMounted) || H || v) && le(() => {
      b && Ee(b, g, l), H && A.enter(E), v && je(l, null, g, "mounted");
    }, h);
  }, ue = (l, u, d, g, h) => {
    if (d && x(l, d), g)
      for (let m = 0; m < g.length; m++)
        x(l, g[m]);
    if (h) {
      let m = h.subTree;
      if (u === m || Sr(m.type) && (m.ssContent === u || m.ssFallback === u)) {
        const O = h.vnode;
        ue(
          l,
          O,
          O.scopeId,
          O.slotScopeIds,
          h.parent
        );
      }
    }
  }, Ne = (l, u, d, g, h, m, O, T, E = 0) => {
    for (let b = E; b < l.length; b++) {
      const N = l[b] = T ? Pe(l[b]) : Oe(l[b]);
      w(
        null,
        N,
        u,
        d,
        g,
        h,
        m,
        O,
        T
      );
    }
  }, Nt = (l, u, d, g, h, m, O) => {
    const T = u.el = l.el;
    let { patchFlag: E, dynamicChildren: b, dirs: N } = u;
    E |= l.patchFlag & 16;
    const R = l.props || k, A = u.props || k;
    let v;
    if (d && Ve(d, !1), (v = A.onVnodeBeforeUpdate) && Ee(v, d, u, l), N && je(u, l, d, "beforeUpdate"), d && Ve(d, !0), (R.innerHTML && A.innerHTML == null || R.textContent && A.textContent == null) && a(T, ""), b ? Ge(
      l.dynamicChildren,
      b,
      T,
      d,
      g,
      an(u, h),
      m
    ) : O || L(
      l,
      u,
      T,
      null,
      d,
      g,
      an(u, h),
      m,
      !1
    ), E > 0) {
      if (E & 16)
        st(T, R, A, d, h);
      else if (E & 2 && R.class !== A.class && o(T, "class", null, A.class, h), E & 4 && o(T, "style", R.style, A.style, h), E & 8) {
        const H = u.dynamicProps;
        for (let G = 0; G < H.length; G++) {
          const M = H[G], se = R[M], re = A[M];
          (re !== se || M === "value") && o(T, M, se, re, h, d);
        }
      }
      E & 1 && l.children !== u.children && a(T, u.children);
    } else !O && b == null && st(T, R, A, d, h);
    ((v = A.onVnodeUpdated) || N) && le(() => {
      v && Ee(v, d, u, l), N && je(u, l, d, "updated");
    }, g);
  }, Ge = (l, u, d, g, h, m, O) => {
    for (let T = 0; T < u.length; T++) {
      const E = l[T], b = u[T], N = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ct(E, b) || // - In the case of a component, it could contain anything.
        E.shapeFlag & 198) ? _(E.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      w(
        E,
        b,
        N,
        null,
        g,
        h,
        m,
        O,
        !0
      );
    }
  }, st = (l, u, d, g, h) => {
    if (u !== d) {
      if (u !== k)
        for (const m in u)
          !at(m) && !(m in d) && o(
            l,
            m,
            u[m],
            null,
            h,
            g
          );
      for (const m in d) {
        if (at(m)) continue;
        const O = d[m], T = u[m];
        O !== T && m !== "value" && o(l, m, T, O, h, g);
      }
      "value" in d && o(l, "value", u.value, d.value, h);
    }
  }, St = (l, u, d, g, h, m, O, T, E) => {
    const b = u.el = l ? l.el : c(""), N = u.anchor = l ? l.anchor : c("");
    let { patchFlag: R, dynamicChildren: A, slotScopeIds: v } = u;
    v && (T = T ? T.concat(v) : v), l == null ? (s(b, d, g), s(N, d, g), Ne(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      d,
      N,
      h,
      m,
      O,
      T,
      E
    )) : R > 0 && R & 64 && A && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Ge(
      l.dynamicChildren,
      A,
      d,
      h,
      m,
      O,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || h && u === h.subTree) && Rr(
      l,
      u,
      !0
      /* shallow */
    )) : L(
      l,
      u,
      d,
      N,
      h,
      m,
      O,
      T,
      E
    );
  }, vt = (l, u, d, g, h, m, O, T, E) => {
    u.slotScopeIds = T, l == null ? u.shapeFlag & 512 ? h.ctx.activate(
      u,
      d,
      g,
      O,
      E
    ) : en(
      u,
      d,
      g,
      h,
      m,
      O,
      E
    ) : Yn(l, u, E);
  }, en = (l, u, d, g, h, m, O) => {
    const T = l.component = Gi(
      l,
      g,
      h
    );
    if (cr(l) && (T.ctx.renderer = ot), Fi(T, !1, O), T.asyncDep) {
      if (h && h.registerDep(T, Q, O), !l.el) {
        const E = T.subTree = Be(et);
        B(null, E, u, d);
      }
    } else
      Q(
        T,
        l,
        u,
        d,
        h,
        m,
        O
      );
  }, Yn = (l, u, d) => {
    const g = u.component = l.component;
    if (Ni(l, u, d))
      if (g.asyncDep && !g.asyncResolved) {
        j(g, u, d);
        return;
      } else
        g.next = u, g.update();
    else
      u.el = l.el, g.vnode = u;
  }, Q = (l, u, d, g, h, m, O) => {
    const T = () => {
      if (l.isMounted) {
        let { next: R, bu: A, u: v, parent: H, vnode: G } = l;
        {
          const ge = Ir(l);
          if (ge) {
            R && (R.el = G.el, j(l, R, O)), ge.asyncDep.then(() => {
              l.isUnmounted || T();
            });
            return;
          }
        }
        let M = R, se;
        Ve(l, !1), R ? (R.el = G.el, j(l, R, O)) : R = G, A && sn(A), (se = R.props && R.props.onVnodeBeforeUpdate) && Ee(se, H, R, G), Ve(l, !0);
        const re = fs(l), me = l.subTree;
        l.subTree = re, w(
          me,
          re,
          // parent may have changed if it's in a teleport
          _(me.el),
          // anchor may have changed if it's in a fragment
          Ct(me),
          l,
          h,
          m
        ), R.el = re.el, M === null && Si(l, re.el), v && le(v, h), (se = R.props && R.props.onVnodeUpdated) && le(
          () => Ee(se, H, R, G),
          h
        );
      } else {
        let R;
        const { el: A, props: v } = u, { bm: H, m: G, parent: M, root: se, type: re } = l, me = gt(u);
        Ve(l, !1), H && sn(H), !me && (R = v && v.onVnodeBeforeMount) && Ee(R, M, u), Ve(l, !0);
        {
          se.ce && // @ts-expect-error _def is private
          se.ce._def.shadowRoot !== !1 && se.ce._injectChildStyle(re);
          const ge = l.subTree = fs(l);
          w(
            null,
            ge,
            d,
            g,
            l,
            h,
            m
          ), u.el = ge.el;
        }
        if (G && le(G, h), !me && (R = v && v.onVnodeMounted)) {
          const ge = u;
          le(
            () => Ee(R, M, ge),
            h
          );
        }
        (u.shapeFlag & 256 || M && gt(M.vnode) && M.vnode.shapeFlag & 256) && l.a && le(l.a, h), l.isMounted = !0, u = d = g = null;
      }
    };
    l.scope.on();
    const E = l.effect = new Us(T);
    l.scope.off();
    const b = l.update = E.run.bind(E), N = l.job = E.runIfDirty.bind(E);
    N.i = l, N.id = l.uid, E.scheduler = () => kn(N), Ve(l, !0), b();
  }, j = (l, u, d) => {
    u.component = l;
    const g = l.vnode.props;
    l.vnode = u, l.next = null, fi(l, u.props, g, d), _i(l, u.children, d), Re(), ns(l), Ie();
  }, L = (l, u, d, g, h, m, O, T, E = !1) => {
    const b = l && l.children, N = l ? l.shapeFlag : 0, R = u.children, { patchFlag: A, shapeFlag: v } = u;
    if (A > 0) {
      if (A & 128) {
        yt(
          b,
          R,
          d,
          g,
          h,
          m,
          O,
          T,
          E
        );
        return;
      } else if (A & 256) {
        Fe(
          b,
          R,
          d,
          g,
          h,
          m,
          O,
          T,
          E
        );
        return;
      }
    }
    v & 8 ? (N & 16 && rt(b, h, m), R !== b && a(d, R)) : N & 16 ? v & 16 ? yt(
      b,
      R,
      d,
      g,
      h,
      m,
      O,
      T,
      E
    ) : rt(b, h, m, !0) : (N & 8 && a(d, ""), v & 16 && Ne(
      R,
      d,
      g,
      h,
      m,
      O,
      T,
      E
    ));
  }, Fe = (l, u, d, g, h, m, O, T, E) => {
    l = l || ze, u = u || ze;
    const b = l.length, N = u.length, R = Math.min(b, N);
    let A;
    for (A = 0; A < R; A++) {
      const v = u[A] = E ? Pe(u[A]) : Oe(u[A]);
      w(
        l[A],
        v,
        d,
        null,
        h,
        m,
        O,
        T,
        E
      );
    }
    b > N ? rt(
      l,
      h,
      m,
      !0,
      !1,
      R
    ) : Ne(
      u,
      d,
      g,
      h,
      m,
      O,
      T,
      E,
      R
    );
  }, yt = (l, u, d, g, h, m, O, T, E) => {
    let b = 0;
    const N = u.length;
    let R = l.length - 1, A = N - 1;
    for (; b <= R && b <= A; ) {
      const v = l[b], H = u[b] = E ? Pe(u[b]) : Oe(u[b]);
      if (ct(v, H))
        w(
          v,
          H,
          d,
          null,
          h,
          m,
          O,
          T,
          E
        );
      else
        break;
      b++;
    }
    for (; b <= R && b <= A; ) {
      const v = l[R], H = u[A] = E ? Pe(u[A]) : Oe(u[A]);
      if (ct(v, H))
        w(
          v,
          H,
          d,
          null,
          h,
          m,
          O,
          T,
          E
        );
      else
        break;
      R--, A--;
    }
    if (b > R) {
      if (b <= A) {
        const v = A + 1, H = v < N ? u[v].el : g;
        for (; b <= A; )
          w(
            null,
            u[b] = E ? Pe(u[b]) : Oe(u[b]),
            d,
            H,
            h,
            m,
            O,
            T,
            E
          ), b++;
      }
    } else if (b > A)
      for (; b <= R; )
        he(l[b], h, m, !0), b++;
    else {
      const v = b, H = b, G = /* @__PURE__ */ new Map();
      for (b = H; b <= A; b++) {
        const ie = u[b] = E ? Pe(u[b]) : Oe(u[b]);
        ie.key != null && G.set(ie.key, b);
      }
      let M, se = 0;
      const re = A - H + 1;
      let me = !1, ge = 0;
      const it = new Array(re);
      for (b = 0; b < re; b++) it[b] = 0;
      for (b = v; b <= R; b++) {
        const ie = l[b];
        if (se >= re) {
          he(ie, h, m, !0);
          continue;
        }
        let be;
        if (ie.key != null)
          be = G.get(ie.key);
        else
          for (M = H; M <= A; M++)
            if (it[M - H] === 0 && ct(ie, u[M])) {
              be = M;
              break;
            }
        be === void 0 ? he(ie, h, m, !0) : (it[be - H] = b + 1, be >= ge ? ge = be : me = !0, w(
          ie,
          u[be],
          d,
          null,
          h,
          m,
          O,
          T,
          E
        ), se++);
      }
      const qn = me ? bi(it) : ze;
      for (M = qn.length - 1, b = re - 1; b >= 0; b--) {
        const ie = H + b, be = u[ie], Zn = ie + 1 < N ? u[ie + 1].el : g;
        it[b] === 0 ? w(
          null,
          be,
          d,
          Zn,
          h,
          m,
          O,
          T,
          E
        ) : me && (M < 0 || b !== qn[M] ? ke(be, d, Zn, 2) : M--);
      }
    }
  }, ke = (l, u, d, g, h = null) => {
    const { el: m, type: O, transition: T, children: E, shapeFlag: b } = l;
    if (b & 6) {
      ke(l.component.subTree, u, d, g);
      return;
    }
    if (b & 128) {
      l.suspense.move(u, d, g);
      return;
    }
    if (b & 64) {
      O.move(l, u, d, ot);
      return;
    }
    if (O === ye) {
      s(m, u, d);
      for (let R = 0; R < E.length; R++)
        ke(E[R], u, d, g);
      s(l.anchor, u, d);
      return;
    }
    if (O === pn) {
      W(l, u, d);
      return;
    }
    if (g !== 2 && b & 1 && T)
      if (g === 0)
        T.beforeEnter(m), s(m, u, d), le(() => T.enter(m), h);
      else {
        const { leave: R, delayLeave: A, afterLeave: v } = T, H = () => {
          l.ctx.isUnmounted ? r(m) : s(m, u, d);
        }, G = () => {
          R(m, () => {
            H(), v && v();
          });
        };
        A ? A(m, H, G) : G();
      }
    else
      s(m, u, d);
  }, he = (l, u, d, g = !1, h = !1) => {
    const {
      type: m,
      props: O,
      ref: T,
      children: E,
      dynamicChildren: b,
      shapeFlag: N,
      patchFlag: R,
      dirs: A,
      cacheIndex: v
    } = l;
    if (R === -2 && (h = !1), T != null && (Re(), mt(T, null, d, l, !0), Ie()), v != null && (u.renderCache[v] = void 0), N & 256) {
      u.ctx.deactivate(l);
      return;
    }
    const H = N & 1 && A, G = !gt(l);
    let M;
    if (G && (M = O && O.onVnodeBeforeUnmount) && Ee(M, u, l), N & 6)
      Mr(l.component, d, g);
    else {
      if (N & 128) {
        l.suspense.unmount(d, g);
        return;
      }
      H && je(l, null, u, "beforeUnmount"), N & 64 ? l.type.remove(
        l,
        u,
        d,
        ot,
        g
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== ye || R > 0 && R & 64) ? rt(
        b,
        u,
        d,
        !1,
        !0
      ) : (m === ye && R & 384 || !h && N & 16) && rt(E, u, d), g && Jn(l);
    }
    (G && (M = O && O.onVnodeUnmounted) || H) && le(() => {
      M && Ee(M, u, l), H && je(l, null, u, "unmounted");
    }, d);
  }, Jn = (l) => {
    const { type: u, el: d, anchor: g, transition: h } = l;
    if (u === ye) {
      Ur(d, g);
      return;
    }
    if (u === pn) {
      S(l);
      return;
    }
    const m = () => {
      r(d), h && !h.persisted && h.afterLeave && h.afterLeave();
    };
    if (l.shapeFlag & 1 && h && !h.persisted) {
      const { leave: O, delayLeave: T } = h, E = () => O(d, m);
      T ? T(l.el, m, E) : E();
    } else
      m();
  }, Ur = (l, u) => {
    let d;
    for (; l !== u; )
      d = I(l), r(l), l = d;
    r(u);
  }, Mr = (l, u, d) => {
    const {
      bum: g,
      scope: h,
      job: m,
      subTree: O,
      um: T,
      m: E,
      a: b,
      parent: N,
      slots: { __: R }
    } = l;
    us(E), us(b), g && sn(g), N && C(R) && R.forEach((A) => {
      N.renderCache[A] = void 0;
    }), h.stop(), m && (m.flags |= 8, he(O, l, u, d)), T && le(T, u), le(() => {
      l.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve());
  }, rt = (l, u, d, g = !1, h = !1, m = 0) => {
    for (let O = m; O < l.length; O++)
      he(l[O], u, d, g, h);
  }, Ct = (l) => {
    if (l.shapeFlag & 6)
      return Ct(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const u = I(l.anchor || l.el), d = u && u[Mo];
    return d ? I(d) : u;
  };
  let tn = !1;
  const zn = (l, u, d) => {
    l == null ? u._vnode && he(u._vnode, null, null, !0) : w(
      u._vnode || null,
      l,
      u,
      null,
      null,
      null,
      d
    ), u._vnode = l, tn || (tn = !0, ns(), sr(), tn = !1);
  }, ot = {
    p: w,
    um: he,
    m: ke,
    r: Jn,
    mt: en,
    mc: Ne,
    pc: L,
    pbc: Ge,
    n: Ct,
    o: e
  };
  return {
    render: zn,
    hydrate: void 0,
    createApp: li(zn)
  };
}
function an({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ve({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gi(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Rr(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (C(s) && C(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let c = r[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[o] = Pe(r[o]), c.el = i.el), !n && c.patchFlag !== -2 && Rr(i, c)), c.type === Qt && (c.el = i.el), c.type === et && !c.el && (c.el = i.el);
    }
}
function bi(e) {
  const t = e.slice(), n = [0];
  let s, r, o, i, c;
  const f = e.length;
  for (s = 0; s < f; s++) {
    const p = e[s];
    if (p !== 0) {
      if (r = n[n.length - 1], e[r] < p) {
        t[s] = r, n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        c = o + i >> 1, e[n[c]] < p ? o = c + 1 : i = c;
      p < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function Ir(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ir(t);
}
function us(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Ei = Symbol.for("v-scx"), Ti = () => Ut(Ei);
function dn(e, t, n) {
  return xr(e, t, n);
}
function xr(e, t, n = k) {
  const { immediate: s, deep: r, flush: o, once: i } = n, c = Z({}, n), f = t && s || !t && o !== "post";
  let p;
  if (xt) {
    if (o === "sync") {
      const x = Ti();
      p = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!f) {
      const x = () => {
      };
      return x.stop = de, x.resume = de, x.pause = de, x;
    }
  }
  const a = Y;
  c.call = (x, D, w) => xe(x, a, D, w);
  let _ = !1;
  o === "post" ? c.scheduler = (x) => {
    le(x, a && a.suspense);
  } : o !== "sync" && (_ = !0, c.scheduler = (x, D) => {
    D ? x() : kn(x);
  }), c.augmentJob = (x) => {
    t && (x.flags |= 4), _ && (x.flags |= 2, a && (x.id = a.uid, x.i = a));
  };
  const I = No(e, t, c);
  return xt && (p ? p.push(I) : f && I()), I;
}
function Oi(e, t, n) {
  const s = this.proxy, r = $(e) ? e.includes(".") ? Ar(s, e) : () => s[e] : e.bind(s, s);
  let o;
  y(t) ? o = t : (o = t.handler, n = t);
  const i = At(this), c = xr(r, o.bind(s), n);
  return i(), c;
}
function Ar(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const Ri = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ae(t)}Modifiers`] || e[`${Xe(t)}Modifiers`];
function Ii(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || k;
  let r = n;
  const o = t.startsWith("update:"), i = o && Ri(s, t.slice(7));
  i && (i.trim && (r = n.map((a) => $(a) ? a.trim() : a)), i.number && (r = n.map(jr)));
  let c, f = s[c = nn(t)] || // also try camelCase event handler (#2249)
  s[c = nn(ae(t))];
  !f && o && (f = s[c = nn(Xe(t))]), f && xe(
    f,
    e,
    6,
    r
  );
  const p = s[c + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, xe(
      p,
      e,
      6,
      r
    );
  }
}
function Nr(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, c = !1;
  if (!y(e)) {
    const f = (p) => {
      const a = Nr(p, t, !0);
      a && (c = !0, Z(i, a));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !o && !c ? (K(e) && s.set(e, null), null) : (C(o) ? o.forEach((f) => i[f] = null) : Z(i, o), K(e) && s.set(e, i), i);
}
function Zt(e, t) {
  return !e || !Vt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), U(e, t[0].toLowerCase() + t.slice(1)) || U(e, Xe(t)) || U(e, t));
}
function fs(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [o],
    slots: i,
    attrs: c,
    emit: f,
    render: p,
    renderCache: a,
    props: _,
    data: I,
    setupState: x,
    ctx: D,
    inheritAttrs: w
  } = e, z = Ft(e);
  let B, V;
  try {
    if (n.shapeFlag & 4) {
      const S = r || s, X = we.NODE_ENV !== "production" && x.__isScriptSetup ? new Proxy(S, {
        get(Ae, ue, Ne) {
          return So(
            `Property '${String(
              ue
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Ae, ue, Ne);
        }
      }) : S;
      B = Oe(
        p.call(
          X,
          S,
          a,
          we.NODE_ENV !== "production" ? Dt(_) : _,
          x,
          I,
          D
        )
      ), V = c;
    } else {
      const S = t;
      we.NODE_ENV, B = Oe(
        S.length > 1 ? S(
          we.NODE_ENV !== "production" ? Dt(_) : _,
          we.NODE_ENV !== "production" ? {
            get attrs() {
              return Dt(c);
            },
            slots: i,
            emit: f
          } : { attrs: c, slots: i, emit: f }
        ) : S(
          we.NODE_ENV !== "production" ? Dt(_) : _,
          null
        )
      ), V = t.props ? c : xi(c);
    }
  } catch (S) {
    Et.length = 0, zt(S, e, 1), B = Be(et);
  }
  let W = B;
  if (V && w !== !1) {
    const S = Object.keys(V), { shapeFlag: X } = W;
    S.length && X & 7 && (o && S.some(yn) && (V = Ai(
      V,
      o
    )), W = tt(W, V, !1, !0));
  }
  return n.dirs && (W = tt(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition && jn(W, n.transition), B = W, Ft(z), B;
}
const xi = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Vt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ai = (e, t) => {
  const n = {};
  for (const s in e)
    (!yn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Ni(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: i, children: c, patchFlag: f } = t, p = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return s ? as(s, i, p) : !!i;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let _ = 0; _ < a.length; _++) {
        const I = a[_];
        if (i[I] !== s[I] && !Zt(p, I))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : s === i ? !1 : s ? i ? as(s, i, p) : !0 : !!i;
  return !1;
}
function as(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !Zt(n, o))
      return !0;
  }
  return !1;
}
function Si({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Sr = (e) => e.__isSuspense;
function vi(e, t) {
  t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : Uo(e);
}
const ye = Symbol.for("v-fgt"), Qt = Symbol.for("v-txt"), et = Symbol.for("v-cmt"), pn = Symbol.for("v-stc"), Et = [];
let ce = null;
function yi(e = !1) {
  Et.push(ce = e ? null : []);
}
function Ci() {
  Et.pop(), ce = Et[Et.length - 1] || null;
}
let It = 1;
function ds(e, t = !1) {
  It += e, e < 0 && ce && t && (ce.hasOnce = !0);
}
function Hi(e) {
  return e.dynamicChildren = It > 0 ? ce || ze : null, Ci(), It > 0 && ce && ce.push(e), e;
}
function wi(e, t, n, s, r) {
  return Hi(
    Be(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function vr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ct(e, t) {
  return e.type === t.type && e.key === t.key;
}
const yr = ({ key: e }) => e ?? null, Mt = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? $(e) || J(e) || y(e) ? { i: fe, r: e, k: t, f: !!n } : e : null);
function ft(e, t = null, n = null, s = 0, r = null, o = e === ye ? 0 : 1, i = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yr(t),
    ref: t && Mt(t),
    scopeId: or,
    slotScopeIds: null,
    children: n,
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
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: fe
  };
  return c ? ($n(f, n), o & 128 && e.normalize(f)) : n && (f.shapeFlag |= $(n) ? 8 : 16), It > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ce.push(f), f;
}
const Be = Di;
function Di(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === Zo) && (e = et), vr(e)) {
    const c = tt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && $n(c, n), It > 0 && !o && ce && (c.shapeFlag & 6 ? ce[ce.indexOf(e)] = c : ce.push(c)), c.patchFlag = -2, c;
  }
  if ($i(e) && (e = e.__vccOpts), t) {
    t = Pi(t);
    let { class: c, style: f } = t;
    c && !$(c) && (t.class = Dn(c)), K(f) && (Fn(f) && !C(f) && (f = Z({}, f)), t.style = wn(f));
  }
  const i = $(e) ? 1 : Sr(e) ? 128 : Bo(e) ? 64 : K(e) ? 4 : y(e) ? 2 : 0;
  return ft(
    e,
    t,
    n,
    s,
    r,
    i,
    o,
    !0
  );
}
function Pi(e) {
  return e ? Fn(e) || mr(e) ? Z({}, e) : e : null;
}
function tt(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: i, children: c, transition: f } = e, p = t ? Mi(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && yr(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? C(o) ? o.concat(Mt(t)) : [o, Mt(t)] : Mt(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ye ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && tt(e.ssContent),
    ssFallback: e.ssFallback && tt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && s && jn(
    a,
    f.clone(a)
  ), a;
}
function Ui(e = " ", t = 0) {
  return Be(Qt, null, e, t);
}
function Oe(e) {
  return e == null || typeof e == "boolean" ? Be(et) : C(e) ? Be(
    ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : vr(e) ? Pe(e) : Be(Qt, null, String(e));
}
function Pe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : tt(e);
}
function $n(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (C(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), $n(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !mr(t) ? t._ctx = fe : r === 3 && fe && (fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else y(t) ? (t = { default: t, _ctx: fe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Ui(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Mi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Dn([t.class, s.class]));
      else if (r === "style")
        t.style = wn([t.style, s.style]);
      else if (Vt(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(C(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Ee(e, t, n, s = null) {
  xe(e, t, 7, [
    n,
    s
  ]);
}
const Bi = pr();
let Li = 0;
function Gi(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Bi, o = {
    uid: Li++,
    vnode: e,
    type: s,
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
    scope: new zr(
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
    propsOptions: br(s, r),
    emitsOptions: Nr(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: k,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: k,
    data: k,
    props: k,
    attrs: k,
    slots: k,
    refs: k,
    setupState: k,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Ii.bind(null, o), e.ce && e.ce(o), o;
}
let Y = null, jt, Nn;
{
  const e = Xt(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  jt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Y = n
  ), Nn = t(
    "__VUE_SSR_SETTERS__",
    (n) => xt = n
  );
}
const At = (e) => {
  const t = Y;
  return jt(e), e.scope.on(), () => {
    e.scope.off(), jt(t);
  };
}, ps = () => {
  Y && Y.scope.off(), jt(null);
};
function Cr(e) {
  return e.vnode.shapeFlag & 4;
}
let xt = !1;
function Fi(e, t = !1, n = !1) {
  t && Nn(t);
  const { props: s, children: r } = e.vnode, o = Cr(e);
  ui(e, s, o, t), pi(e, r, n || t);
  const i = o ? ki(e, t) : void 0;
  return t && Nn(!1), i;
}
function ki(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ei);
  const { setup: s } = n;
  if (s) {
    Re();
    const r = e.setupContext = s.length > 1 ? Vi(e) : null, o = At(e), i = nt(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), c = vs(i);
    if (Ie(), o(), (c || e.sp) && !gt(e) && lr(e), c) {
      if (i.then(ps, ps), t)
        return i.then((f) => {
          _s(e, f);
        }).catch((f) => {
          zt(f, e, 0);
        });
      e.asyncDep = i;
    } else
      _s(e, i);
  } else
    Hr(e);
}
function _s(e, t, n) {
  y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) && (e.setupState = Qs(t)), Hr(e);
}
function Hr(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || de);
  {
    const r = At(e);
    Re();
    try {
      ti(e);
    } finally {
      Ie(), r();
    }
  }
}
const ji = {
  get(e, t) {
    return q(e, "get", ""), e[t];
  }
};
function Vi(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ji),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Xn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Qs(bo(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in bt)
        return bt[n](e);
    },
    has(t, n) {
      return n in t || n in bt;
    }
  })) : e.proxy;
}
const Wi = /(?:^|[-_])(\w)/g, Ki = (e) => e.replace(Wi, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function wr(e, t = !0) {
  return y(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Dr(e, t, n = !1) {
  let s = wr(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    s = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? Ki(s) : n ? "App" : "Anonymous";
}
function $i(e) {
  return y(e) && "__vccOpts" in e;
}
const Xi = (e, t) => xo(e, t, xt), Yi = "3.5.17";
let Sn;
const hs = typeof window < "u" && window.trustedTypes;
if (hs)
  try {
    Sn = /* @__PURE__ */ hs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Pr = Sn ? (e) => Sn.createHTML(e) : (e) => e, Ji = "http://www.w3.org/2000/svg", zi = "http://www.w3.org/1998/Math/MathML", ve = typeof document < "u" ? document : null, ms = ve && /* @__PURE__ */ ve.createElement("template"), qi = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? ve.createElementNS(Ji, e) : t === "mathml" ? ve.createElementNS(zi, e) : n ? ve.createElement(e, { is: n }) : ve.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => ve.createTextNode(e),
  createComment: (e) => ve.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ve.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      ms.innerHTML = Pr(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const c = ms.content;
      if (s === "svg" || s === "mathml") {
        const f = c.firstChild;
        for (; f.firstChild; )
          c.appendChild(f.firstChild);
        c.removeChild(f);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Zi = Symbol("_vtc");
function Qi(e, t, n) {
  const s = e[Zi];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const gs = Symbol("_vod"), el = Symbol("_vsh"), tl = Symbol(""), nl = /(^|;)\s*display\s*:/;
function sl(e, t, n) {
  const s = e.style, r = $(n);
  let o = !1;
  if (n && !r) {
    if (t)
      if ($(t))
        for (const i of t.split(";")) {
          const c = i.slice(0, i.indexOf(":")).trim();
          n[c] == null && Bt(s, c, "");
        }
      else
        for (const i in t)
          n[i] == null && Bt(s, i, "");
    for (const i in n)
      i === "display" && (o = !0), Bt(s, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = s[tl];
      i && (n += ";" + i), s.cssText = n, o = nl.test(n);
    }
  } else t && e.removeAttribute("style");
  gs in e && (e[gs] = o ? s.display : "", e[el] && (s.display = "none"));
}
const bs = /\s*!important$/;
function Bt(e, t, n) {
  if (C(n))
    n.forEach((s) => Bt(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = rl(e, t);
    bs.test(n) ? e.setProperty(
      Xe(s),
      n.replace(bs, ""),
      "important"
    ) : e[s] = n;
  }
}
const Es = ["Webkit", "Moz", "ms"], _n = {};
function rl(e, t) {
  const n = _n[t];
  if (n)
    return n;
  let s = ae(t);
  if (s !== "filter" && s in e)
    return _n[t] = s;
  s = $t(s);
  for (let r = 0; r < Es.length; r++) {
    const o = Es[r] + s;
    if (o in e)
      return _n[t] = o;
  }
  return t;
}
const Ts = "http://www.w3.org/1999/xlink";
function Os(e, t, n, s, r, o = Yr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ts, t.slice(6, t.length)) : e.setAttributeNS(Ts, t, n) : n == null || o && !Hs(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Le(n) ? String(n) : n
  );
}
function Rs(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Pr(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const c = o === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (c !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = Hs(n) : n == null && c === "string" ? (n = "", i = !0) : c === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(r || t);
}
function ol(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function il(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Is = Symbol("_vei");
function ll(e, t, n, s, r = null) {
  const o = e[Is] || (e[Is] = {}), i = o[t];
  if (s && i)
    i.value = s;
  else {
    const [c, f] = cl(t);
    if (s) {
      const p = o[t] = al(
        s,
        r
      );
      ol(e, c, p, f);
    } else i && (il(e, c, i, f), o[t] = void 0);
  }
}
const xs = /(?:Once|Passive|Capture)$/;
function cl(e) {
  let t;
  if (xs.test(e)) {
    t = {};
    let s;
    for (; s = e.match(xs); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Xe(e.slice(2)), t];
}
let hn = 0;
const ul = /* @__PURE__ */ Promise.resolve(), fl = () => hn || (ul.then(() => hn = 0), hn = Date.now());
function al(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    xe(
      dl(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = fl(), n;
}
function dl(e, t) {
  if (C(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const As = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, pl = (e, t, n, s, r, o) => {
  const i = r === "svg";
  t === "class" ? Qi(e, s, i) : t === "style" ? sl(e, n, s) : Vt(t) ? yn(t) || ll(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : _l(e, t, s, i)) ? (Rs(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Os(e, t, s, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !$(s)) ? Rs(e, ae(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Os(e, t, s, i));
};
function _l(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && As(t) && y(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return As(t) && $(n) ? !1 : t in e;
}
const hl = /* @__PURE__ */ Z({ patchProp: pl }, qi);
let Ns;
function ml() {
  return Ns || (Ns = hi(hl));
}
const gl = (...e) => {
  const t = ml().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = El(s);
    if (!r) return;
    const o = t._component;
    !y(o) && !o.render && !o.template && (o.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, bl(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function bl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function El(e) {
  return $(e) ? document.querySelector(e) : e;
}
const Tl = {
  class: "min-h-screen flex flex-col items-center justify-center",
  style: {
    background: "repeating-linear-gradient(45deg, #ffe066, #ffe066 30px, #fff 30px, #fff 60px)"
  }
}, Ol = { class: "text-2xl text-center font-semibold my-4" }, Rl = /* @__PURE__ */ Lo({
  __name: "app",
  props: {
    api: {}
  },
  setup(e) {
    const t = e;
    let n = Eo(""), s = () => {
    };
    return fr(() => {
      s = t.api.activeFileName.subscribe((r, o) => {
        n.value = r;
      });
    }), Vn(() => {
      s();
    }), (r, o) => {
      const i = qo("Layout");
      return yi(), wi(i, null, {
        default: ir(() => [
          ft("div", Tl, [
            o[0] || (o[0] = ft("h1", { class: "text-5xl font-bold text-center my-8 uppercase tracking-wider" }, "Structure", -1)),
            o[1] || (o[1] = ft("h2", { class: "text-2xl text-center font-semibold my-4" }, "Template for SET Extensions", -1)),
            ft("h2", Ol, "file: " + Ds(Zs(n)), 1)
          ])
        ]),
        _: 1
      });
    };
  }
}), Il = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, xl = /* @__PURE__ */ Il(Rl, [["__scopeId", "data-v-e3091a2d"]]);
function Nl(e, t) {
  if (!document.getElementById(e)) {
    console.error({ msg: "could not found root element", rootId: e });
    return;
  }
  gl(xl, { api: t }).mount(`#${e}`);
}
export {
  Nl as default
};
