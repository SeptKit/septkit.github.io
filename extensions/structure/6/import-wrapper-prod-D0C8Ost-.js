/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function po(e) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) n[o] = 1;
  return (o) => o in n;
}
const Se = {}, kn = [], bt = () => {
}, da = () => !1, mo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Is = (e) => e.startsWith("onUpdate:"), ut = Object.assign, _o = (e, n) => {
  const o = e.indexOf(n);
  o > -1 && e.splice(o, 1);
}, ha = Object.prototype.hasOwnProperty, Re = (e, n) => ha.call(e, n), fe = Array.isArray, Pn = (e) => Zr(e) === "[object Map]", As = (e) => Zr(e) === "[object Set]", he = (e) => typeof e == "function", $e = (e) => typeof e == "string", rn = (e) => typeof e == "symbol", Ce = (e) => e !== null && typeof e == "object", Ss = (e) => (Ce(e) || he(e)) && he(e.then) && he(e.catch), ks = Object.prototype.toString, Zr = (e) => ks.call(e), pa = (e) => Zr(e).slice(8, -1), Ps = (e) => Zr(e) === "[object Object]", yo = (e) => $e(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, er = /* @__PURE__ */ po(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ei = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (o) => n[o] || (n[o] = e(o));
}, ma = /-(\w)/g, kt = ei(
  (e) => e.replace(ma, (n, o) => o ? o.toUpperCase() : "")
), _a = /\B([A-Z])/g, dr = ei(
  (e) => e.replace(_a, "-$1").toLowerCase()
), go = ei((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gi = ei(
  (e) => e ? `on${go(e)}` : ""
), Kt = (e, n) => !Object.is(e, n), qi = (e, ...n) => {
  for (let o = 0; o < e.length; o++)
    e[o](...n);
}, eo = (e, n, o, u = !1) => {
  Object.defineProperty(e, n, {
    configurable: !0,
    enumerable: !1,
    writable: u,
    value: o
  });
}, ya = (e) => {
  const n = parseFloat(e);
  return isNaN(n) ? e : n;
};
let ls;
const ti = () => ls || (ls = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ni(e) {
  if (fe(e)) {
    const n = {};
    for (let o = 0; o < e.length; o++) {
      const u = e[o], l = $e(u) ? wa(u) : ni(u);
      if (l)
        for (const f in l)
          n[f] = l[f];
    }
    return n;
  } else if ($e(e) || Ce(e))
    return e;
}
const ga = /;(?![^(]*\))/g, va = /:([^]+)/, ba = /\/\*[^]*?\*\//g;
function wa(e) {
  const n = {};
  return e.replace(ba, "").split(ga).forEach((o) => {
    if (o) {
      const u = o.split(va);
      u.length > 1 && (n[u[0].trim()] = u[1].trim());
    }
  }), n;
}
function ri(e) {
  let n = "";
  if ($e(e))
    n = e;
  else if (fe(e))
    for (let o = 0; o < e.length; o++) {
      const u = ri(e[o]);
      u && (n += u + " ");
    }
  else if (Ce(e))
    for (const o in e)
      e[o] && (n += o + " ");
  return n.trim();
}
function Oc(e) {
  if (!e) return null;
  let { class: n, style: o } = e;
  return n && !$e(n) && (e.class = ri(n)), o && (e.style = ni(o)), e;
}
const Ea = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Tc = /* @__PURE__ */ po(Ea);
function Rc(e) {
  return !!e || e === "";
}
const Ns = (e) => !!(e && e.__v_isRef === !0), xa = (e) => $e(e) ? e : e == null ? "" : fe(e) || Ce(e) && (e.toString === ks || !he(e.toString)) ? Ns(e) ? xa(e.value) : JSON.stringify(e, Cs, 2) : String(e), Cs = (e, n) => Ns(n) ? Cs(e, n.value) : Pn(n) ? {
  [`Map(${n.size})`]: [...n.entries()].reduce(
    (o, [u, l], f) => (o[Vi(u, f) + " =>"] = l, o),
    {}
  )
} : As(n) ? {
  [`Set(${n.size})`]: [...n.values()].map((o) => Vi(o))
} : rn(n) ? Vi(n) : Ce(n) && !fe(n) && !Ps(n) ? String(n) : n, Vi = (e, n = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    rn(e) ? `Symbol(${(o = e.description) != null ? o : n})` : e
  );
};
var Oa = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_90161071-11c1-4e4e-a688-0c6dc67933f2", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "pnpm/10.10.0 npm/? node/v20.19.4 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_90161071-11c1-4e4e-a688-0c6dc67933f2", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/usr/local/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/set/set/packages/extensions/structure/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "SeptKit", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-9.0.0", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.2.13676358", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "210705285", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_shared_workspace_lockfile: "", SYSTEMD_EXEC_PID: "1880", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250824.1.0", LOGNAME: "runner", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", npm_config_catalog: '{"@septkit/fileio":"0.0.5","@septkit/ui":"0.0.7"}', CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.12/x64", JOURNAL_STREAM: "9:10151", GITHUB_WORKFLOW: "Deploy Ext. Structure", _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure", GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.6/x64", npm_config_registry: "https://registry.npmjs.org/", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", GITHUB_RUN_ID: "17408854768", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "77625d2af69f4d57dd940bbac1714957e0d4cd91", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "SeptKit/set/.github/workflows/deploy-ext-structure.yml@refs/heads/main", GITHUB_ACTION_REPOSITORY: "", ENABLE_RUNNER_TRACING: "true", npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/set/set/packages/extensions/structure/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node-gyp-bin:/home/runner/work/set/set/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_5fe497bc-6499-4d0c-a4d8-aa9e0a8c2bef", INVOCATION_ID: "cb93ac3f7f2e4b89a3e8feb8d9d06a9b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", npm_package_name: "@septkit/ext-structure", NODE: "/usr/local/bin/node", GITHUB_ACTION: "__run", GITHUB_RUN_NUMBER: "36", GITHUB_TRIGGERING_ACTOR: "NgoEva", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", npm_config_frozen_lockfile: "", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 1000005423", XDG_CONFIG_HOME: "/home/runner/.config", GITHUB_REF_NAME: "main", GITHUB_REPOSITORY: "SeptKit/set", npm_lifecycle_script: "vite build", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", SHELL: "/bin/bash", GITHUB_REPOSITORY_ID: "1003638225", GITHUB_ACTIONS: "true", NODE_PATH: "/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/bin/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/node_modules", npm_package_version: "6", npm_lifecycle_event: "build", npm_config_verify_deps_before_run: "false", GITHUB_REF_PROTECTED: "true", GITHUB_WORKSPACE: "/home/runner/work/set/set", ACCEPT_EULA: "Y", GITHUB_JOB: "build", npm_config_sharedWorkspaceLockfile: "", GITHUB_SHA: "77625d2af69f4d57dd940bbac1714957e0d4cd91", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/main", GITHUB_ACTOR: "NgoEva", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_90161071-11c1-4e4e-a688-0c6dc67933f2", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/set/set/packages/extensions/structure", GITHUB_ACTOR_ID: "32981638", RUNNER_WORKSPACE: "/home/runner/work/set", npm_config_link_workspace_packages: "", npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/pnpm.cjs", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_90161071-11c1-4e4e-a688-0c6dc67933f2", EDGEWEBDRIVER: "/usr/local/share/edge_driver", npm_config__jsr_registry: "https://npm.jsr.io/", npm_command: "run-script", PNPM_SCRIPT_SRC_DIR: "/home/runner/work/set/set/packages/extensions/structure", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_90161071-11c1-4e4e-a688-0c6dc67933f2", INIT_CWD: "/home/runner/work/set/set/packages/extensions/structure", NODE_ENV: "production", LAUNCH_EDITOR: "code" };
let et;
class Ds {
  constructor(n = !1) {
    this.detached = n, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = et, !n && et && (this.index = (et.scopes || (et.scopes = [])).push(
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
      const o = et;
      try {
        return et = this, n();
      } finally {
        et = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = et, et = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (et = this.prevScope, this.prevScope = void 0);
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
function Ic(e) {
  return new Ds(e);
}
function Ta() {
  return et;
}
function Ac(e, n = !1) {
  et && et.cleanups.push(e);
}
let Ae;
const Wi = /* @__PURE__ */ new WeakSet();
class Bs {
  constructor(n) {
    this.fn = n, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, et && et.active && et.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || js(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, cs(this), Ks(this);
    const n = Ae, o = wt;
    Ae = this, wt = !0;
    try {
      return this.fn();
    } finally {
      Us(this), Ae = n, wt = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let n = this.deps; n; n = n.nextDep)
        wo(n);
      this.deps = this.depsTail = void 0, cs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Wi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    to(this) && this.run();
  }
  get dirty() {
    return to(this);
  }
}
let Ms = 0, tr, nr;
function js(e, n = !1) {
  if (e.flags |= 8, n) {
    e.next = nr, nr = e;
    return;
  }
  e.next = tr, tr = e;
}
function vo() {
  Ms++;
}
function bo() {
  if (--Ms > 0)
    return;
  if (nr) {
    let n = nr;
    for (nr = void 0; n; ) {
      const o = n.next;
      n.next = void 0, n.flags &= -9, n = o;
    }
  }
  let e;
  for (; tr; ) {
    let n = tr;
    for (tr = void 0; n; ) {
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
function Ks(e) {
  for (let n = e.deps; n; n = n.nextDep)
    n.version = -1, n.prevActiveLink = n.dep.activeLink, n.dep.activeLink = n;
}
function Us(e) {
  let n, o = e.depsTail, u = o;
  for (; u; ) {
    const l = u.prevDep;
    u.version === -1 ? (u === o && (o = l), wo(u), Ra(u)) : n = u, u.dep.activeLink = u.prevActiveLink, u.prevActiveLink = void 0, u = l;
  }
  e.deps = n, e.depsTail = o;
}
function to(e) {
  for (let n = e.deps; n; n = n.nextDep)
    if (n.dep.version !== n.version || n.dep.computed && (Hs(n.dep.computed) || n.dep.version !== n.version))
      return !0;
  return !!e._dirty;
}
function Hs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ur) || (e.globalVersion = ur, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !to(e))))
    return;
  e.flags |= 2;
  const n = e.dep, o = Ae, u = wt;
  Ae = e, wt = !0;
  try {
    Ks(e);
    const l = e.fn(e._value);
    (n.version === 0 || Kt(l, e._value)) && (e.flags |= 128, e._value = l, n.version++);
  } catch (l) {
    throw n.version++, l;
  } finally {
    Ae = o, wt = u, Us(e), e.flags &= -3;
  }
}
function wo(e, n = !1) {
  const { dep: o, prevSub: u, nextSub: l } = e;
  if (u && (u.nextSub = l, e.prevSub = void 0), l && (l.prevSub = u, e.nextSub = void 0), o.subs === e && (o.subs = u, !u && o.computed)) {
    o.computed.flags &= -5;
    for (let f = o.computed.deps; f; f = f.nextDep)
      wo(f, !0);
  }
  !n && !--o.sc && o.map && o.map.delete(o.key);
}
function Ra(e) {
  const { prevDep: n, nextDep: o } = e;
  n && (n.nextDep = o, e.prevDep = void 0), o && (o.prevDep = n, e.nextDep = void 0);
}
let wt = !0;
const Fs = [];
function Pt() {
  Fs.push(wt), wt = !1;
}
function Nt() {
  const e = Fs.pop();
  wt = e === void 0 ? !0 : e;
}
function cs(e) {
  const { cleanup: n } = e;
  if (e.cleanup = void 0, n) {
    const o = Ae;
    Ae = void 0;
    try {
      n();
    } finally {
      Ae = o;
    }
  }
}
let ur = 0;
class Ia {
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
    if (!Ae || !wt || Ae === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== Ae)
      o = this.activeLink = new Ia(Ae, this), Ae.deps ? (o.prevDep = Ae.depsTail, Ae.depsTail.nextDep = o, Ae.depsTail = o) : Ae.deps = Ae.depsTail = o, Ls(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const u = o.nextDep;
      u.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = u), o.prevDep = Ae.depsTail, o.nextDep = void 0, Ae.depsTail.nextDep = o, Ae.depsTail = o, Ae.deps === o && (Ae.deps = u);
    }
    return o;
  }
  trigger(n) {
    this.version++, ur++, this.notify(n);
  }
  notify(n) {
    vo();
    try {
      Oa.NODE_ENV;
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      bo();
    }
  }
}
function Ls(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const n = e.dep.computed;
    if (n && !e.dep.subs) {
      n.flags |= 20;
      for (let u = n.deps; u; u = u.nextDep)
        Ls(u);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Wr = /* @__PURE__ */ new WeakMap(), mn = Symbol(
  ""
), no = Symbol(
  ""
), ar = Symbol(
  ""
);
function tt(e, n, o) {
  if (wt && Ae) {
    let u = Wr.get(e);
    u || Wr.set(e, u = /* @__PURE__ */ new Map());
    let l = u.get(o);
    l || (u.set(o, l = new ii()), l.map = u, l.key = o), l.track();
  }
}
function jt(e, n, o, u, l, f) {
  const h = Wr.get(e);
  if (!h) {
    ur++;
    return;
  }
  const m = (b) => {
    b && b.trigger();
  };
  if (vo(), n === "clear")
    h.forEach(m);
  else {
    const b = fe(e), B = b && yo(o);
    if (b && o === "length") {
      const S = Number(u);
      h.forEach((D, Y) => {
        (Y === "length" || Y === ar || !rn(Y) && Y >= S) && m(D);
      });
    } else
      switch ((o !== void 0 || h.has(void 0)) && m(h.get(o)), B && m(h.get(ar)), n) {
        case "add":
          b ? B && m(h.get("length")) : (m(h.get(mn)), Pn(e) && m(h.get(no)));
          break;
        case "delete":
          b || (m(h.get(mn)), Pn(e) && m(h.get(no)));
          break;
        case "set":
          Pn(e) && m(h.get(mn));
          break;
      }
  }
  bo();
}
function Aa(e, n) {
  const o = Wr.get(e);
  return o && o.get(n);
}
function An(e) {
  const n = xe(e);
  return n === e ? n : (tt(n, "iterate", ar), gt(e) ? n : n.map(Ye));
}
function oi(e) {
  return tt(e = xe(e), "iterate", ar), e;
}
const Sa = {
  __proto__: null,
  [Symbol.iterator]() {
    return $i(this, Symbol.iterator, Ye);
  },
  concat(...e) {
    return An(this).concat(
      ...e.map((n) => fe(n) ? An(n) : n)
    );
  },
  entries() {
    return $i(this, "entries", (e) => (e[1] = Ye(e[1]), e));
  },
  every(e, n) {
    return Mt(this, "every", e, n, void 0, arguments);
  },
  filter(e, n) {
    return Mt(this, "filter", e, n, (o) => o.map(Ye), arguments);
  },
  find(e, n) {
    return Mt(this, "find", e, n, Ye, arguments);
  },
  findIndex(e, n) {
    return Mt(this, "findIndex", e, n, void 0, arguments);
  },
  findLast(e, n) {
    return Mt(this, "findLast", e, n, Ye, arguments);
  },
  findLastIndex(e, n) {
    return Mt(this, "findLastIndex", e, n, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, n) {
    return Mt(this, "forEach", e, n, void 0, arguments);
  },
  includes(...e) {
    return Yi(this, "includes", e);
  },
  indexOf(...e) {
    return Yi(this, "indexOf", e);
  },
  join(e) {
    return An(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Yi(this, "lastIndexOf", e);
  },
  map(e, n) {
    return Mt(this, "map", e, n, void 0, arguments);
  },
  pop() {
    return Jn(this, "pop");
  },
  push(...e) {
    return Jn(this, "push", e);
  },
  reduce(e, ...n) {
    return fs(this, "reduce", e, n);
  },
  reduceRight(e, ...n) {
    return fs(this, "reduceRight", e, n);
  },
  shift() {
    return Jn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, n) {
    return Mt(this, "some", e, n, void 0, arguments);
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
    return $i(this, "values", Ye);
  }
};
function $i(e, n, o) {
  const u = oi(e), l = u[n]();
  return u !== e && !gt(e) && (l._next = l.next, l.next = () => {
    const f = l._next();
    return f.value && (f.value = o(f.value)), f;
  }), l;
}
const ka = Array.prototype;
function Mt(e, n, o, u, l, f) {
  const h = oi(e), m = h !== e && !gt(e), b = h[n];
  if (b !== ka[n]) {
    const D = b.apply(e, f);
    return m ? Ye(D) : D;
  }
  let B = o;
  h !== e && (m ? B = function(D, Y) {
    return o.call(this, Ye(D), Y, e);
  } : o.length > 2 && (B = function(D, Y) {
    return o.call(this, D, Y, e);
  }));
  const S = b.call(h, B, u);
  return m && l ? l(S) : S;
}
function fs(e, n, o, u) {
  const l = oi(e);
  let f = o;
  return l !== e && (gt(e) ? o.length > 3 && (f = function(h, m, b) {
    return o.call(this, h, m, b, e);
  }) : f = function(h, m, b) {
    return o.call(this, h, Ye(m), b, e);
  }), l[n](f, ...u);
}
function Yi(e, n, o) {
  const u = xe(e);
  tt(u, "iterate", ar);
  const l = u[n](...o);
  return (l === -1 || l === !1) && xo(o[0]) ? (o[0] = xe(o[0]), u[n](...o)) : l;
}
function Jn(e, n, o = []) {
  Pt(), vo();
  const u = xe(e)[n].apply(e, o);
  return bo(), Nt(), u;
}
const Pa = /* @__PURE__ */ po("__proto__,__v_isRef,__isVue"), Gs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(rn)
);
function Na(e) {
  rn(e) || (e = String(e));
  const n = xe(this);
  return tt(n, "has", e), n.hasOwnProperty(e);
}
class qs {
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
      return u === (l ? f ? zs : Xs : f ? Ys : $s).get(n) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(n) === Object.getPrototypeOf(u) ? n : void 0;
    const h = fe(n);
    if (!l) {
      let b;
      if (h && (b = Sa[o]))
        return b;
      if (o === "hasOwnProperty")
        return Na;
    }
    const m = Reflect.get(
      n,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Le(n) ? n : u
    );
    return (rn(o) ? Gs.has(o) : Pa(o)) || (l || tt(n, "get", o), f) ? m : Le(m) ? h && yo(o) ? m : m.value : Ce(m) ? l ? Js(m) : Eo(m) : m;
  }
}
class Vs extends qs {
  constructor(n = !1) {
    super(!1, n);
  }
  set(n, o, u, l) {
    let f = n[o];
    if (!this._isShallow) {
      const b = nn(f);
      if (!gt(u) && !nn(u) && (f = xe(f), u = xe(u)), !fe(n) && Le(f) && !Le(u))
        return b ? !1 : (f.value = u, !0);
    }
    const h = fe(n) && yo(o) ? Number(o) < n.length : Re(n, o), m = Reflect.set(
      n,
      o,
      u,
      Le(n) ? n : l
    );
    return n === xe(l) && (h ? Kt(u, f) && jt(n, "set", o, u) : jt(n, "add", o, u)), m;
  }
  deleteProperty(n, o) {
    const u = Re(n, o);
    n[o];
    const l = Reflect.deleteProperty(n, o);
    return l && u && jt(n, "delete", o, void 0), l;
  }
  has(n, o) {
    const u = Reflect.has(n, o);
    return (!rn(o) || !Gs.has(o)) && tt(n, "has", o), u;
  }
  ownKeys(n) {
    return tt(
      n,
      "iterate",
      fe(n) ? "length" : mn
    ), Reflect.ownKeys(n);
  }
}
class Ws extends qs {
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
const Ca = /* @__PURE__ */ new Vs(), Da = /* @__PURE__ */ new Ws(), Ba = /* @__PURE__ */ new Vs(!0), Ma = /* @__PURE__ */ new Ws(!0), ro = (e) => e, Ur = (e) => Reflect.getPrototypeOf(e);
function ja(e, n, o) {
  return function(...u) {
    const l = this.__v_raw, f = xe(l), h = Pn(f), m = e === "entries" || e === Symbol.iterator && h, b = e === "keys" && h, B = l[e](...u), S = o ? ro : n ? $r : Ye;
    return !n && tt(
      f,
      "iterate",
      b ? no : mn
    ), {
      // iterator protocol
      next() {
        const { value: D, done: Y } = B.next();
        return Y ? { value: D, done: Y } : {
          value: m ? [S(D[0]), S(D[1])] : S(D),
          done: Y
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Hr(e) {
  return function(...n) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ka(e, n) {
  const o = {
    get(l) {
      const f = this.__v_raw, h = xe(f), m = xe(l);
      e || (Kt(l, m) && tt(h, "get", l), tt(h, "get", m));
      const { has: b } = Ur(h), B = n ? ro : e ? $r : Ye;
      if (b.call(h, l))
        return B(f.get(l));
      if (b.call(h, m))
        return B(f.get(m));
      f !== h && f.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && tt(xe(l), "iterate", mn), Reflect.get(l, "size", l);
    },
    has(l) {
      const f = this.__v_raw, h = xe(f), m = xe(l);
      return e || (Kt(l, m) && tt(h, "has", l), tt(h, "has", m)), l === m ? f.has(l) : f.has(l) || f.has(m);
    },
    forEach(l, f) {
      const h = this, m = h.__v_raw, b = xe(m), B = n ? ro : e ? $r : Ye;
      return !e && tt(b, "iterate", mn), m.forEach((S, D) => l.call(f, B(S), B(D), h));
    }
  };
  return ut(
    o,
    e ? {
      add: Hr("add"),
      set: Hr("set"),
      delete: Hr("delete"),
      clear: Hr("clear")
    } : {
      add(l) {
        !n && !gt(l) && !nn(l) && (l = xe(l));
        const f = xe(this);
        return Ur(f).has.call(f, l) || (f.add(l), jt(f, "add", l, l)), this;
      },
      set(l, f) {
        !n && !gt(f) && !nn(f) && (f = xe(f));
        const h = xe(this), { has: m, get: b } = Ur(h);
        let B = m.call(h, l);
        B || (l = xe(l), B = m.call(h, l));
        const S = b.call(h, l);
        return h.set(l, f), B ? Kt(f, S) && jt(h, "set", l, f) : jt(h, "add", l, f), this;
      },
      delete(l) {
        const f = xe(this), { has: h, get: m } = Ur(f);
        let b = h.call(f, l);
        b || (l = xe(l), b = h.call(f, l)), m && m.call(f, l);
        const B = f.delete(l);
        return b && jt(f, "delete", l, void 0), B;
      },
      clear() {
        const l = xe(this), f = l.size !== 0, h = l.clear();
        return f && jt(
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
    o[l] = ja(l, e, n);
  }), o;
}
function si(e, n) {
  const o = Ka(e, n);
  return (u, l, f) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? u : Reflect.get(
    Re(o, l) && l in u ? o : u,
    l,
    f
  );
}
const Ua = {
  get: /* @__PURE__ */ si(!1, !1)
}, Ha = {
  get: /* @__PURE__ */ si(!1, !0)
}, Fa = {
  get: /* @__PURE__ */ si(!0, !1)
}, La = {
  get: /* @__PURE__ */ si(!0, !0)
}, $s = /* @__PURE__ */ new WeakMap(), Ys = /* @__PURE__ */ new WeakMap(), Xs = /* @__PURE__ */ new WeakMap(), zs = /* @__PURE__ */ new WeakMap();
function Ga(e) {
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
function qa(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ga(pa(e));
}
function Eo(e) {
  return nn(e) ? e : ui(
    e,
    !1,
    Ca,
    Ua,
    $s
  );
}
function Va(e) {
  return ui(
    e,
    !1,
    Ba,
    Ha,
    Ys
  );
}
function Js(e) {
  return ui(
    e,
    !0,
    Da,
    Fa,
    Xs
  );
}
function Fr(e) {
  return ui(
    e,
    !0,
    Ma,
    La,
    zs
  );
}
function ui(e, n, o, u, l) {
  if (!Ce(e) || e.__v_raw && !(n && e.__v_isReactive))
    return e;
  const f = qa(e);
  if (f === 0)
    return e;
  const h = l.get(e);
  if (h)
    return h;
  const m = new Proxy(
    e,
    f === 2 ? u : o
  );
  return l.set(e, m), m;
}
function Nn(e) {
  return nn(e) ? Nn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function nn(e) {
  return !!(e && e.__v_isReadonly);
}
function gt(e) {
  return !!(e && e.__v_isShallow);
}
function xo(e) {
  return e ? !!e.__v_raw : !1;
}
function xe(e) {
  const n = e && e.__v_raw;
  return n ? xe(n) : e;
}
function Wa(e) {
  return !Re(e, "__v_skip") && Object.isExtensible(e) && eo(e, "__v_skip", !0), e;
}
const Ye = (e) => Ce(e) ? Eo(e) : e, $r = (e) => Ce(e) ? Js(e) : e;
function Le(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function $a(e) {
  return Qs(e, !1);
}
function Sc(e) {
  return Qs(e, !0);
}
function Qs(e, n) {
  return Le(e) ? e : new Ya(e, n);
}
class Ya {
  constructor(n, o) {
    this.dep = new ii(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? n : xe(n), this._value = o ? n : Ye(n), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(n) {
    const o = this._rawValue, u = this.__v_isShallow || gt(n) || nn(n);
    n = u ? n : xe(n), Kt(n, o) && (this._rawValue = n, this._value = u ? n : Ye(n), this.dep.trigger());
  }
}
function Zs(e) {
  return Le(e) ? e.value : e;
}
function kc(e) {
  return he(e) ? e() : Zs(e);
}
const Xa = {
  get: (e, n, o) => n === "__v_raw" ? e : Zs(Reflect.get(e, n, o)),
  set: (e, n, o, u) => {
    const l = e[n];
    return Le(l) && !Le(o) ? (l.value = o, !0) : Reflect.set(e, n, o, u);
  }
};
function eu(e) {
  return Nn(e) ? e : new Proxy(e, Xa);
}
class za {
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
  return new za(e);
}
function Nc(e) {
  const n = fe(e) ? new Array(e.length) : {};
  for (const o in e)
    n[o] = tu(e, o);
  return n;
}
class Ja {
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
    return Aa(xe(this._object), this._key);
  }
}
class Qa {
  constructor(n) {
    this._getter = n, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Cc(e, n, o) {
  return Le(e) ? e : he(e) ? new Qa(e) : Ce(e) && arguments.length > 1 ? tu(e, n, o) : $a(e);
}
function tu(e, n, o) {
  const u = e[n];
  return Le(u) ? u : new Ja(e, n, o);
}
class Za {
  constructor(n, o, u) {
    this.fn = n, this.setter = o, this._value = void 0, this.dep = new ii(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ur - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = u;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ae !== this)
      return js(this, !0), !0;
  }
  get value() {
    const n = this.dep.track();
    return Hs(this), n && (n.version = this.dep.version), this._value;
  }
  set value(n) {
    this.setter && this.setter(n);
  }
}
function el(e, n, o = !1) {
  let u, l;
  return he(e) ? u = e : (u = e.get, l = e.set), new Za(u, l, o);
}
const Lr = {}, Yr = /* @__PURE__ */ new WeakMap();
let pn;
function tl(e, n = !1, o = pn) {
  if (o) {
    let u = Yr.get(o);
    u || Yr.set(o, u = []), u.push(e);
  }
}
function nl(e, n, o = Se) {
  const { immediate: u, deep: l, once: f, scheduler: h, augmentJob: m, call: b } = o, B = (ne) => l ? ne : gt(ne) || l === !1 || l === 0 ? tn(ne, 1) : tn(ne);
  let S, D, Y, re, de = !1, pe = !1;
  if (Le(e) ? (D = () => e.value, de = gt(e)) : Nn(e) ? (D = () => B(e), de = !0) : fe(e) ? (pe = !0, de = e.some((ne) => Nn(ne) || gt(ne)), D = () => e.map((ne) => {
    if (Le(ne))
      return ne.value;
    if (Nn(ne))
      return B(ne);
    if (he(ne))
      return b ? b(ne, 2) : ne();
  })) : he(e) ? n ? D = b ? () => b(e, 2) : e : D = () => {
    if (Y) {
      Pt();
      try {
        Y();
      } finally {
        Nt();
      }
    }
    const ne = pn;
    pn = S;
    try {
      return b ? b(e, 3, [re]) : e(re);
    } finally {
      pn = ne;
    }
  } : D = bt, n && l) {
    const ne = D, Ie = l === !0 ? 1 / 0 : l;
    D = () => tn(ne(), Ie);
  }
  const ee = Ta(), Z = () => {
    S.stop(), ee && ee.active && _o(ee.effects, S);
  };
  if (f && n) {
    const ne = n;
    n = (...Ie) => {
      ne(...Ie), Z();
    };
  }
  let ae = pe ? new Array(e.length).fill(Lr) : Lr;
  const ye = (ne) => {
    if (!(!(S.flags & 1) || !S.dirty && !ne))
      if (n) {
        const Ie = S.run();
        if (l || de || (pe ? Ie.some((ke, Te) => Kt(ke, ae[Te])) : Kt(Ie, ae))) {
          Y && Y();
          const ke = pn;
          pn = S;
          try {
            const Te = [
              Ie,
              // pass undefined as the old value when it's changed for the first time
              ae === Lr ? void 0 : pe && ae[0] === Lr ? [] : ae,
              re
            ];
            ae = Ie, b ? b(n, 3, Te) : (
              // @ts-expect-error
              n(...Te)
            );
          } finally {
            pn = ke;
          }
        }
      } else
        S.run();
  };
  return m && m(ye), S = new Bs(D), S.scheduler = h ? () => h(ye, !1) : ye, re = (ne) => tl(ne, !1, S), Y = S.onStop = () => {
    const ne = Yr.get(S);
    if (ne) {
      if (b)
        b(ne, 4);
      else
        for (const Ie of ne) Ie();
      Yr.delete(S);
    }
  }, n ? u ? ye(!0) : ae = S.run() : h ? h(ye.bind(null, !0), !0) : S.run(), Z.pause = S.pause.bind(S), Z.resume = S.resume.bind(S), Z.stop = Z, Z;
}
function tn(e, n = 1 / 0, o) {
  if (n <= 0 || !Ce(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Set(), o.has(e)))
    return e;
  if (o.add(e), n--, Le(e))
    tn(e.value, n, o);
  else if (fe(e))
    for (let u = 0; u < e.length; u++)
      tn(e[u], n, o);
  else if (As(e) || Pn(e))
    e.forEach((u) => {
      tn(u, n, o);
    });
  else if (Ps(e)) {
    for (const u in e)
      tn(e[u], n, o);
    for (const u of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, u) && tn(e[u], n, o);
  }
  return e;
}
var Qt = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_90161071-11c1-4e4e-a688-0c6dc67933f2", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "pnpm/10.10.0 npm/? node/v20.19.4 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_90161071-11c1-4e4e-a688-0c6dc67933f2", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/usr/local/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/set/set/packages/extensions/structure/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "SeptKit", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-9.0.0", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.2.13676358", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "210705285", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_shared_workspace_lockfile: "", SYSTEMD_EXEC_PID: "1880", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250824.1.0", LOGNAME: "runner", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", npm_config_catalog: '{"@septkit/fileio":"0.0.5","@septkit/ui":"0.0.7"}', CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.12/x64", JOURNAL_STREAM: "9:10151", GITHUB_WORKFLOW: "Deploy Ext. Structure", _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure", GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.6/x64", npm_config_registry: "https://registry.npmjs.org/", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", GITHUB_RUN_ID: "17408854768", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "77625d2af69f4d57dd940bbac1714957e0d4cd91", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "SeptKit/set/.github/workflows/deploy-ext-structure.yml@refs/heads/main", GITHUB_ACTION_REPOSITORY: "", ENABLE_RUNNER_TRACING: "true", npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/set/set/packages/extensions/structure/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node-gyp-bin:/home/runner/work/set/set/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_5fe497bc-6499-4d0c-a4d8-aa9e0a8c2bef", INVOCATION_ID: "cb93ac3f7f2e4b89a3e8feb8d9d06a9b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", npm_package_name: "@septkit/ext-structure", NODE: "/usr/local/bin/node", GITHUB_ACTION: "__run", GITHUB_RUN_NUMBER: "36", GITHUB_TRIGGERING_ACTOR: "NgoEva", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", npm_config_frozen_lockfile: "", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 1000005423", XDG_CONFIG_HOME: "/home/runner/.config", GITHUB_REF_NAME: "main", GITHUB_REPOSITORY: "SeptKit/set", npm_lifecycle_script: "vite build", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", SHELL: "/bin/bash", GITHUB_REPOSITORY_ID: "1003638225", GITHUB_ACTIONS: "true", NODE_PATH: "/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/bin/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/node_modules", npm_package_version: "6", npm_lifecycle_event: "build", npm_config_verify_deps_before_run: "false", GITHUB_REF_PROTECTED: "true", GITHUB_WORKSPACE: "/home/runner/work/set/set", ACCEPT_EULA: "Y", GITHUB_JOB: "build", npm_config_sharedWorkspaceLockfile: "", GITHUB_SHA: "77625d2af69f4d57dd940bbac1714957e0d4cd91", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/main", GITHUB_ACTOR: "NgoEva", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_90161071-11c1-4e4e-a688-0c6dc67933f2", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/set/set/packages/extensions/structure", GITHUB_ACTOR_ID: "32981638", RUNNER_WORKSPACE: "/home/runner/work/set", npm_config_link_workspace_packages: "", npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/pnpm.cjs", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_90161071-11c1-4e4e-a688-0c6dc67933f2", EDGEWEBDRIVER: "/usr/local/share/edge_driver", npm_config__jsr_registry: "https://npm.jsr.io/", npm_command: "run-script", PNPM_SCRIPT_SRC_DIR: "/home/runner/work/set/set/packages/extensions/structure", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_90161071-11c1-4e4e-a688-0c6dc67933f2", INIT_CWD: "/home/runner/work/set/set/packages/extensions/structure", NODE_ENV: "production", LAUNCH_EDITOR: "code" };
const rr = [];
let Xi = !1;
function rl(e, ...n) {
  if (Xi) return;
  Xi = !0, Pt();
  const o = rr.length ? rr[rr.length - 1].component : null, u = o && o.appContext.config.warnHandler, l = il();
  if (u)
    Kn(
      u,
      o,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + n.map((f) => {
          var h, m;
          return (m = (h = f.toString) == null ? void 0 : h.call(f)) != null ? m : JSON.stringify(f);
        }).join(""),
        o && o.proxy,
        l.map(
          ({ vnode: f }) => `at <${Hu(o, f.type)}>`
        ).join(`
`),
        l
      ]
    );
  else {
    const f = [`[Vue warn]: ${e}`, ...n];
    l.length && f.push(`
`, ...ol(l)), console.warn(...f);
  }
  Nt(), Xi = !1;
}
function il() {
  let e = rr[rr.length - 1];
  if (!e)
    return [];
  const n = [];
  for (; e; ) {
    const o = n[0];
    o && o.vnode === e ? o.recurseCount++ : n.push({
      vnode: e,
      recurseCount: 0
    });
    const u = e.component && e.component.parent;
    e = u && u.vnode;
  }
  return n;
}
function ol(e) {
  const n = [];
  return e.forEach((o, u) => {
    n.push(...u === 0 ? [] : [`
`], ...sl(o));
  }), n;
}
function sl({ vnode: e, recurseCount: n }) {
  const o = n > 0 ? `... (${n} recursive calls)` : "", u = e.component ? e.component.parent == null : !1, l = ` at <${Hu(
    e.component,
    e.type,
    u
  )}`, f = ">" + o;
  return e.props ? [l, ...ul(e.props), f] : [l + f];
}
function ul(e) {
  const n = [], o = Object.keys(e);
  return o.slice(0, 3).forEach((u) => {
    n.push(...nu(u, e[u]));
  }), o.length > 3 && n.push(" ..."), n;
}
function nu(e, n, o) {
  return $e(n) ? (n = JSON.stringify(n), o ? n : [`${e}=${n}`]) : typeof n == "number" || typeof n == "boolean" || n == null ? o ? n : [`${e}=${n}`] : Le(n) ? (n = nu(e, xe(n.value), !0), o ? n : [`${e}=Ref<`, n, ">"]) : he(n) ? [`${e}=fn${n.name ? `<${n.name}>` : ""}`] : (n = xe(n), o ? n : [`${e}=`, n]);
}
function Kn(e, n, o, u) {
  try {
    return u ? e(...u) : e();
  } catch (l) {
    ai(l, n, o);
  }
}
function Ut(e, n, o, u) {
  if (he(e)) {
    const l = Kn(e, n, o, u);
    return l && Ss(l) && l.catch((f) => {
      ai(f, n, o);
    }), l;
  }
  if (fe(e)) {
    const l = [];
    for (let f = 0; f < e.length; f++)
      l.push(Ut(e[f], n, o, u));
    return l;
  }
}
function ai(e, n, o, u = !0) {
  const l = n ? n.vnode : null, { errorHandler: f, throwUnhandledErrorInProduction: h } = n && n.appContext.config || Se;
  if (n) {
    let m = n.parent;
    const b = n.proxy, B = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; m; ) {
      const S = m.ec;
      if (S) {
        for (let D = 0; D < S.length; D++)
          if (S[D](e, b, B) === !1)
            return;
      }
      m = m.parent;
    }
    if (f) {
      Pt(), Kn(f, null, 10, [
        e,
        b,
        B
      ]), Nt();
      return;
    }
  }
  al(e, o, l, u, h);
}
function al(e, n, o, u = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const ot = [];
let At = -1;
const Cn = [];
let Zt = null, Sn = 0;
const ru = /* @__PURE__ */ Promise.resolve();
let Xr = null;
function ll(e) {
  const n = Xr || ru;
  return e ? n.then(this ? e.bind(this) : e) : n;
}
function cl(e) {
  let n = At + 1, o = ot.length;
  for (; n < o; ) {
    const u = n + o >>> 1, l = ot[u], f = lr(l);
    f < e || f === e && l.flags & 2 ? n = u + 1 : o = u;
  }
  return n;
}
function Oo(e) {
  if (!(e.flags & 1)) {
    const n = lr(e), o = ot[ot.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && n >= lr(o) ? ot.push(e) : ot.splice(cl(n), 0, e), e.flags |= 1, iu();
  }
}
function iu() {
  Xr || (Xr = ru.then(su));
}
function fl(e) {
  fe(e) ? Cn.push(...e) : Zt && e.id === -1 ? Zt.splice(Sn + 1, 0, e) : e.flags & 1 || (Cn.push(e), e.flags |= 1), iu();
}
function ds(e, n, o = At + 1) {
  for (; o < ot.length; o++) {
    const u = ot[o];
    if (u && u.flags & 2) {
      if (e && u.id !== e.uid)
        continue;
      ot.splice(o, 1), o--, u.flags & 4 && (u.flags &= -2), u(), u.flags & 4 || (u.flags &= -2);
    }
  }
}
function ou(e) {
  if (Cn.length) {
    const n = [...new Set(Cn)].sort(
      (o, u) => lr(o) - lr(u)
    );
    if (Cn.length = 0, Zt) {
      Zt.push(...n);
      return;
    }
    for (Zt = n, Sn = 0; Sn < Zt.length; Sn++) {
      const o = Zt[Sn];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Zt = null, Sn = 0;
  }
}
const lr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function su(e) {
  const n = bt;
  try {
    for (At = 0; At < ot.length; At++) {
      const o = ot[At];
      o && !(o.flags & 8) && (Qt.NODE_ENV !== "production" && n(o), o.flags & 4 && (o.flags &= -2), Kn(
        o,
        o.i,
        o.i ? 15 : 14
      ), o.flags & 4 || (o.flags &= -2));
    }
  } finally {
    for (; At < ot.length; At++) {
      const o = ot[At];
      o && (o.flags &= -2);
    }
    At = -1, ot.length = 0, ou(), Xr = null, (ot.length || Cn.length) && su();
  }
}
let Xe = null, uu = null;
function zr(e) {
  const n = Xe;
  return Xe = e, uu = e && e.type.__scopeId || null, n;
}
function dl(e, n = Xe, o) {
  if (!n || e._n)
    return e;
  const u = (...l) => {
    u._d && Es(-1);
    const f = zr(n);
    let h;
    try {
      h = e(...l);
    } finally {
      zr(f), u._d && Es(1);
    }
    return h;
  };
  return u._n = !0, u._c = !0, u._d = !0, u;
}
function dn(e, n, o, u) {
  const l = e.dirs, f = n && n.dirs;
  for (let h = 0; h < l.length; h++) {
    const m = l[h];
    f && (m.oldValue = f[h].value);
    let b = m.dir[u];
    b && (Pt(), Ut(b, o, 8, [
      e.el,
      m,
      e,
      n
    ]), Nt());
  }
}
const hl = Symbol("_vte"), pl = (e) => e.__isTeleport;
function To(e, n) {
  e.shapeFlag & 6 && e.component ? (e.transition = n, To(e.component.subTree, n)) : e.shapeFlag & 128 ? (e.ssContent.transition = n.clone(e.ssContent), e.ssFallback.transition = n.clone(e.ssFallback)) : e.transition = n;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Dc(e, n) {
  return he(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ut({ name: e.name }, n, { setup: e })
  ) : e;
}
function au(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ir(e, n, o, u, l = !1) {
  if (fe(e)) {
    e.forEach(
      (de, pe) => ir(
        de,
        n && (fe(n) ? n[pe] : n),
        o,
        u,
        l
      )
    );
    return;
  }
  if (Dn(u) && !l) {
    u.shapeFlag & 512 && u.type.__asyncResolved && u.component.subTree.component && ir(e, n, o, u.component.subTree);
    return;
  }
  const f = u.shapeFlag & 4 ? ko(u.component) : u.el, h = l ? null : f, { i: m, r: b } = e, B = n && n.r, S = m.refs === Se ? m.refs = {} : m.refs, D = m.setupState, Y = xe(D), re = D === Se ? () => !1 : (de) => Re(Y, de);
  if (B != null && B !== b && ($e(B) ? (S[B] = null, re(B) && (D[B] = null)) : Le(B) && (B.value = null)), he(b))
    Kn(b, m, 12, [h, S]);
  else {
    const de = $e(b), pe = Le(b);
    if (de || pe) {
      const ee = () => {
        if (e.f) {
          const Z = de ? re(b) ? D[b] : S[b] : b.value;
          l ? fe(Z) && _o(Z, f) : fe(Z) ? Z.includes(f) || Z.push(f) : de ? (S[b] = [f], re(b) && (D[b] = S[b])) : (b.value = [f], e.k && (S[e.k] = b.value));
        } else de ? (S[b] = h, re(b) && (D[b] = h)) : pe && (b.value = h, e.k && (S[e.k] = h));
      };
      h ? (ee.id = -1, dt(ee, o)) : ee();
    }
  }
}
ti().requestIdleCallback;
ti().cancelIdleCallback;
const Dn = (e) => !!e.type.__asyncLoader, lu = (e) => e.type.__isKeepAlive;
function ml(e, n) {
  cu(e, "a", n);
}
function _l(e, n) {
  cu(e, "da", n);
}
function cu(e, n, o = Fe) {
  const u = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (li(n, u, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      lu(l.parent.vnode) && yl(u, n, o, l), l = l.parent;
  }
}
function yl(e, n, o, u) {
  const l = li(
    n,
    e,
    u,
    !0
    /* prepend */
  );
  fu(() => {
    _o(u[n], l);
  }, o);
}
function li(e, n, o = Fe, u = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), f = n.__weh || (n.__weh = (...h) => {
      Pt();
      const m = hr(o), b = Ut(n, o, e, h);
      return m(), Nt(), b;
    });
    return u ? l.unshift(f) : l.push(f), f;
  }
}
const Ft = (e) => (n, o = Fe) => {
  (!fr || e === "sp") && li(e, (...u) => n(...u), o);
}, gl = Ft("bm"), vl = Ft("m"), bl = Ft(
  "bu"
), wl = Ft("u"), El = Ft(
  "bum"
), fu = Ft("um"), xl = Ft(
  "sp"
), Ol = Ft("rtg"), Tl = Ft("rtc");
function Rl(e, n = Fe) {
  li("ec", e, n);
}
const du = "components";
function Bc(e, n) {
  return pu(du, e, !0, n) || e;
}
const hu = Symbol.for("v-ndc");
function Mc(e) {
  return $e(e) ? pu(du, e, !1) || e : e || hu;
}
function pu(e, n, o = !0, u = !1) {
  const l = Xe || Fe;
  if (l) {
    const f = l.type;
    {
      const m = Uu(
        f,
        !1
      );
      if (m && (m === n || m === kt(n) || m === go(kt(n))))
        return f;
    }
    const h = (
      // local registration
      // check instance[type] first which is resolved for options API
      hs(l[e] || f[e], n) || // global registration
      hs(l.appContext[e], n)
    );
    return !h && u ? f : h;
  }
}
function hs(e, n) {
  return e && (e[n] || e[kt(n)] || e[go(kt(n))]);
}
function jc(e, n, o, u) {
  let l;
  const f = o && o[u], h = fe(e);
  if (h || $e(e)) {
    const m = h && Nn(e);
    let b = !1, B = !1;
    m && (b = !gt(e), B = nn(e), e = oi(e)), l = new Array(e.length);
    for (let S = 0, D = e.length; S < D; S++)
      l[S] = n(
        b ? B ? $r(Ye(e[S])) : Ye(e[S]) : e[S],
        S,
        void 0,
        f && f[S]
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let m = 0; m < e; m++)
      l[m] = n(m + 1, m, void 0, f && f[m]);
  } else if (Ce(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (m, b) => n(m, b, void 0, f && f[b])
      );
    else {
      const m = Object.keys(e);
      l = new Array(m.length);
      for (let b = 0, B = m.length; b < B; b++) {
        const S = m[b];
        l[b] = n(e[S], S, b, f && f[b]);
      }
    }
  else
    l = [];
  return o && (o[u] = l), l;
}
function Kc(e, n, o = {}, u, l) {
  if (Xe.ce || Xe.parent && Dn(Xe.parent) && Xe.parent.ce)
    return n !== "default" && (o.name = n), ao(), lo(
      yt,
      null,
      [ct("slot", o, u && u())],
      64
    );
  let f = e[n];
  f && f._c && (f._d = !1), ao();
  const h = f && mu(f(o)), m = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  h && h.key, b = lo(
    yt,
    {
      key: (m && !rn(m) ? m : `_${n}`) + // #7256 force differentiate fallback content from actual content
      (!h && u ? "_fb" : "")
    },
    h || (u ? u() : []),
    h && e._ === 1 ? 64 : -2
  );
  return b.scopeId && (b.slotScopeIds = [b.scopeId + "-s"]), f && f._c && (f._d = !0), b;
}
function mu(e) {
  return e.some((n) => cr(n) ? !(n.type === Ht || n.type === yt && !mu(n.children)) : !0) ? e : null;
}
const io = (e) => e ? Mu(e) ? ko(e) : io(e.parent) : null, or = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ut(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => io(e.parent),
    $root: (e) => io(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => gu(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Oo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ll.bind(e.proxy)),
    $watch: (e) => $l.bind(e)
  })
), zi = (e, n) => e !== Se && !e.__isScriptSetup && Re(e, n), Il = {
  get({ _: e }, n) {
    if (n === "__v_skip")
      return !0;
    const { ctx: o, setupState: u, data: l, props: f, accessCache: h, type: m, appContext: b } = e;
    let B;
    if (n[0] !== "$") {
      const re = h[n];
      if (re !== void 0)
        switch (re) {
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
        if (zi(u, n))
          return h[n] = 1, u[n];
        if (l !== Se && Re(l, n))
          return h[n] = 2, l[n];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (B = e.propsOptions[0]) && Re(B, n)
        )
          return h[n] = 3, f[n];
        if (o !== Se && Re(o, n))
          return h[n] = 4, o[n];
        oo && (h[n] = 0);
      }
    }
    const S = or[n];
    let D, Y;
    if (S)
      return n === "$attrs" && tt(e.attrs, "get", ""), S(e);
    if (
      // css module (injected by vue-loader)
      (D = m.__cssModules) && (D = D[n])
    )
      return D;
    if (o !== Se && Re(o, n))
      return h[n] = 4, o[n];
    if (
      // global properties
      Y = b.config.globalProperties, Re(Y, n)
    )
      return Y[n];
  },
  set({ _: e }, n, o) {
    const { data: u, setupState: l, ctx: f } = e;
    return zi(l, n) ? (l[n] = o, !0) : u !== Se && Re(u, n) ? (u[n] = o, !0) : Re(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (f[n] = o, !0);
  },
  has({
    _: { data: e, setupState: n, accessCache: o, ctx: u, appContext: l, propsOptions: f }
  }, h) {
    let m;
    return !!o[h] || e !== Se && Re(e, h) || zi(n, h) || (m = f[0]) && Re(m, h) || Re(u, h) || Re(or, h) || Re(l.config.globalProperties, h);
  },
  defineProperty(e, n, o) {
    return o.get != null ? e._.accessCache[n] = 0 : Re(o, "value") && this.set(e, n, o.value, null), Reflect.defineProperty(e, n, o);
  }
};
function Uc() {
  return _u().slots;
}
function Hc() {
  return _u().attrs;
}
function _u() {
  const e = lc();
  return e.setupContext || (e.setupContext = Ku(e));
}
function ps(e) {
  return fe(e) ? e.reduce(
    (n, o) => (n[o] = null, n),
    {}
  ) : e;
}
function Fc(e, n) {
  const o = {};
  for (const u in e)
    n.includes(u) || Object.defineProperty(o, u, {
      enumerable: !0,
      get: () => e[u]
    });
  return o;
}
let oo = !0;
function Al(e) {
  const n = gu(e), o = e.proxy, u = e.ctx;
  oo = !1, n.beforeCreate && ms(n.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: f,
    methods: h,
    watch: m,
    provide: b,
    inject: B,
    // lifecycle
    created: S,
    beforeMount: D,
    mounted: Y,
    beforeUpdate: re,
    updated: de,
    activated: pe,
    deactivated: ee,
    beforeDestroy: Z,
    beforeUnmount: ae,
    destroyed: ye,
    unmounted: ne,
    render: Ie,
    renderTracked: ke,
    renderTriggered: Te,
    errorCaptured: ze,
    serverPrefetch: _n,
    // public API
    expose: Et,
    inheritAttrs: Lt,
    // assets
    components: xt,
    directives: ht,
    filters: Un
  } = n;
  if (B && Sl(B, u, null), h)
    for (const Pe in h) {
      const ve = h[Pe];
      he(ve) && (u[Pe] = ve.bind(o));
    }
  if (l) {
    const Pe = l.call(o, o);
    Ce(Pe) && (e.data = Eo(Pe));
  }
  if (oo = !0, f)
    for (const Pe in f) {
      const ve = f[Pe], at = he(ve) ? ve.bind(o, o) : he(ve.get) ? ve.get.bind(o, o) : bt, lt = !he(ve) && he(ve.set) ? ve.set.bind(o) : bt, vt = _c({
        get: at,
        set: lt
      });
      Object.defineProperty(u, Pe, {
        enumerable: !0,
        configurable: !0,
        get: () => vt.value,
        set: (pt) => vt.value = pt
      });
    }
  if (m)
    for (const Pe in m)
      yu(m[Pe], u, o, Pe);
  if (b) {
    const Pe = he(b) ? b.call(o) : b;
    Reflect.ownKeys(Pe).forEach((ve) => {
      Bl(ve, Pe[ve]);
    });
  }
  S && ms(S, e, "c");
  function He(Pe, ve) {
    fe(ve) ? ve.forEach((at) => Pe(at.bind(o))) : ve && Pe(ve.bind(o));
  }
  if (He(gl, D), He(vl, Y), He(bl, re), He(wl, de), He(ml, pe), He(_l, ee), He(Rl, ze), He(Tl, ke), He(Ol, Te), He(El, ae), He(fu, ne), He(xl, _n), fe(Et))
    if (Et.length) {
      const Pe = e.exposed || (e.exposed = {});
      Et.forEach((ve) => {
        Object.defineProperty(Pe, ve, {
          get: () => o[ve],
          set: (at) => o[ve] = at
        });
      });
    } else e.exposed || (e.exposed = {});
  Ie && e.render === bt && (e.render = Ie), Lt != null && (e.inheritAttrs = Lt), xt && (e.components = xt), ht && (e.directives = ht), _n && au(e);
}
function Sl(e, n, o = bt) {
  fe(e) && (e = so(e));
  for (const u in e) {
    const l = e[u];
    let f;
    Ce(l) ? "default" in l ? f = Gr(
      l.from || u,
      l.default,
      !0
    ) : f = Gr(l.from || u) : f = Gr(l), Le(f) ? Object.defineProperty(n, u, {
      enumerable: !0,
      configurable: !0,
      get: () => f.value,
      set: (h) => f.value = h
    }) : n[u] = f;
  }
}
function ms(e, n, o) {
  Ut(
    fe(e) ? e.map((u) => u.bind(n.proxy)) : e.bind(n.proxy),
    n,
    o
  );
}
function yu(e, n, o, u) {
  let l = u.includes(".") ? ku(o, u) : () => o[u];
  if ($e(e)) {
    const f = n[e];
    he(f) && Qi(l, f);
  } else if (he(e))
    Qi(l, e.bind(o));
  else if (Ce(e))
    if (fe(e))
      e.forEach((f) => yu(f, n, o, u));
    else {
      const f = he(e.handler) ? e.handler.bind(o) : n[e.handler];
      he(f) && Qi(l, f, e);
    }
}
function gu(e) {
  const n = e.type, { mixins: o, extends: u } = n, {
    mixins: l,
    optionsCache: f,
    config: { optionMergeStrategies: h }
  } = e.appContext, m = f.get(n);
  let b;
  return m ? b = m : !l.length && !o && !u ? b = n : (b = {}, l.length && l.forEach(
    (B) => Jr(b, B, h, !0)
  ), Jr(b, n, h)), Ce(n) && f.set(n, b), b;
}
function Jr(e, n, o, u = !1) {
  const { mixins: l, extends: f } = n;
  f && Jr(e, f, o, !0), l && l.forEach(
    (h) => Jr(e, h, o, !0)
  );
  for (const h in n)
    if (!(u && h === "expose")) {
      const m = kl[h] || o && o[h];
      e[h] = m ? m(e[h], n[h]) : n[h];
    }
  return e;
}
const kl = {
  data: _s,
  props: ys,
  emits: ys,
  // objects
  methods: Zn,
  computed: Zn,
  // lifecycle
  beforeCreate: it,
  created: it,
  beforeMount: it,
  mounted: it,
  beforeUpdate: it,
  updated: it,
  beforeDestroy: it,
  beforeUnmount: it,
  destroyed: it,
  unmounted: it,
  activated: it,
  deactivated: it,
  errorCaptured: it,
  serverPrefetch: it,
  // assets
  components: Zn,
  directives: Zn,
  // watch
  watch: Nl,
  // provide / inject
  provide: _s,
  inject: Pl
};
function _s(e, n) {
  return n ? e ? function() {
    return ut(
      he(e) ? e.call(this, this) : e,
      he(n) ? n.call(this, this) : n
    );
  } : n : e;
}
function Pl(e, n) {
  return Zn(so(e), so(n));
}
function so(e) {
  if (fe(e)) {
    const n = {};
    for (let o = 0; o < e.length; o++)
      n[e[o]] = e[o];
    return n;
  }
  return e;
}
function it(e, n) {
  return e ? [...new Set([].concat(e, n))] : n;
}
function Zn(e, n) {
  return e ? ut(/* @__PURE__ */ Object.create(null), e, n) : n;
}
function ys(e, n) {
  return e ? fe(e) && fe(n) ? [.../* @__PURE__ */ new Set([...e, ...n])] : ut(
    /* @__PURE__ */ Object.create(null),
    ps(e),
    ps(n ?? {})
  ) : n;
}
function Nl(e, n) {
  if (!e) return n;
  if (!n) return e;
  const o = ut(/* @__PURE__ */ Object.create(null), e);
  for (const u in n)
    o[u] = it(e[u], n[u]);
  return o;
}
function vu() {
  return {
    app: null,
    config: {
      isNativeTag: da,
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
let Cl = 0;
function Dl(e, n) {
  return function(u, l = null) {
    he(u) || (u = ut({}, u)), l != null && !Ce(l) && (l = null);
    const f = vu(), h = /* @__PURE__ */ new WeakSet(), m = [];
    let b = !1;
    const B = f.app = {
      _uid: Cl++,
      _component: u,
      _props: l,
      _container: null,
      _context: f,
      _instance: null,
      version: yc,
      get config() {
        return f.config;
      },
      set config(S) {
      },
      use(S, ...D) {
        return h.has(S) || (S && he(S.install) ? (h.add(S), S.install(B, ...D)) : he(S) && (h.add(S), S(B, ...D))), B;
      },
      mixin(S) {
        return f.mixins.includes(S) || f.mixins.push(S), B;
      },
      component(S, D) {
        return D ? (f.components[S] = D, B) : f.components[S];
      },
      directive(S, D) {
        return D ? (f.directives[S] = D, B) : f.directives[S];
      },
      mount(S, D, Y) {
        if (!b) {
          const re = B._ceVNode || ct(u, l);
          return re.appContext = f, Y === !0 ? Y = "svg" : Y === !1 && (Y = void 0), e(re, S, Y), b = !0, B._container = S, S.__vue_app__ = B, ko(re.component);
        }
      },
      onUnmount(S) {
        m.push(S);
      },
      unmount() {
        b && (Ut(
          m,
          B._instance,
          16
        ), e(null, B._container), delete B._container.__vue_app__);
      },
      provide(S, D) {
        return f.provides[S] = D, B;
      },
      runWithContext(S) {
        const D = Bn;
        Bn = B;
        try {
          return S();
        } finally {
          Bn = D;
        }
      }
    };
    return B;
  };
}
let Bn = null;
function Bl(e, n) {
  if (Fe) {
    let o = Fe.provides;
    const u = Fe.parent && Fe.parent.provides;
    u === o && (o = Fe.provides = Object.create(u)), o[e] = n;
  }
}
function Gr(e, n, o = !1) {
  const u = Fe || Xe;
  if (u || Bn) {
    let l = Bn ? Bn._context.provides : u ? u.parent == null || u.ce ? u.vnode.appContext && u.vnode.appContext.provides : u.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && he(n) ? n.call(u && u.proxy) : n;
  }
}
const bu = {}, wu = () => Object.create(bu), Eu = (e) => Object.getPrototypeOf(e) === bu;
function Ml(e, n, o, u = !1) {
  const l = {}, f = wu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), xu(e, n, l, f);
  for (const h in e.propsOptions[0])
    h in l || (l[h] = void 0);
  o ? e.props = u ? l : Va(l) : e.type.props ? e.props = l : e.props = f, e.attrs = f;
}
function jl(e, n, o, u) {
  const {
    props: l,
    attrs: f,
    vnode: { patchFlag: h }
  } = e, m = xe(l), [b] = e.propsOptions;
  let B = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (u || h > 0) && !(h & 16)
  ) {
    if (h & 8) {
      const S = e.vnode.dynamicProps;
      for (let D = 0; D < S.length; D++) {
        let Y = S[D];
        if (ci(e.emitsOptions, Y))
          continue;
        const re = n[Y];
        if (b)
          if (Re(f, Y))
            re !== f[Y] && (f[Y] = re, B = !0);
          else {
            const de = kt(Y);
            l[de] = uo(
              b,
              m,
              de,
              re,
              e,
              !1
            );
          }
        else
          re !== f[Y] && (f[Y] = re, B = !0);
      }
    }
  } else {
    xu(e, n, l, f) && (B = !0);
    let S;
    for (const D in m)
      (!n || // for camelCase
      !Re(n, D) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((S = dr(D)) === D || !Re(n, S))) && (b ? o && // for camelCase
      (o[D] !== void 0 || // for kebab-case
      o[S] !== void 0) && (l[D] = uo(
        b,
        m,
        D,
        void 0,
        e,
        !0
      )) : delete l[D]);
    if (f !== m)
      for (const D in f)
        (!n || !Re(n, D)) && (delete f[D], B = !0);
  }
  B && jt(e.attrs, "set", "");
}
function xu(e, n, o, u) {
  const [l, f] = e.propsOptions;
  let h = !1, m;
  if (n)
    for (let b in n) {
      if (er(b))
        continue;
      const B = n[b];
      let S;
      l && Re(l, S = kt(b)) ? !f || !f.includes(S) ? o[S] = B : (m || (m = {}))[S] = B : ci(e.emitsOptions, b) || (!(b in u) || B !== u[b]) && (u[b] = B, h = !0);
    }
  if (f) {
    const b = xe(o), B = m || Se;
    for (let S = 0; S < f.length; S++) {
      const D = f[S];
      o[D] = uo(
        l,
        b,
        D,
        B[D],
        e,
        !Re(B, D)
      );
    }
  }
  return h;
}
function uo(e, n, o, u, l, f) {
  const h = e[o];
  if (h != null) {
    const m = Re(h, "default");
    if (m && u === void 0) {
      const b = h.default;
      if (h.type !== Function && !h.skipFactory && he(b)) {
        const { propsDefaults: B } = l;
        if (o in B)
          u = B[o];
        else {
          const S = hr(l);
          u = B[o] = b.call(
            null,
            n
          ), S();
        }
      } else
        u = b;
      l.ce && l.ce._setProp(o, u);
    }
    h[
      0
      /* shouldCast */
    ] && (f && !m ? u = !1 : h[
      1
      /* shouldCastTrue */
    ] && (u === "" || u === dr(o)) && (u = !0));
  }
  return u;
}
const Kl = /* @__PURE__ */ new WeakMap();
function Ou(e, n, o = !1) {
  const u = o ? Kl : n.propsCache, l = u.get(e);
  if (l)
    return l;
  const f = e.props, h = {}, m = [];
  let b = !1;
  if (!he(e)) {
    const S = (D) => {
      b = !0;
      const [Y, re] = Ou(D, n, !0);
      ut(h, Y), re && m.push(...re);
    };
    !o && n.mixins.length && n.mixins.forEach(S), e.extends && S(e.extends), e.mixins && e.mixins.forEach(S);
  }
  if (!f && !b)
    return Ce(e) && u.set(e, kn), kn;
  if (fe(f))
    for (let S = 0; S < f.length; S++) {
      const D = kt(f[S]);
      gs(D) && (h[D] = Se);
    }
  else if (f)
    for (const S in f) {
      const D = kt(S);
      if (gs(D)) {
        const Y = f[S], re = h[D] = fe(Y) || he(Y) ? { type: Y } : ut({}, Y), de = re.type;
        let pe = !1, ee = !0;
        if (fe(de))
          for (let Z = 0; Z < de.length; ++Z) {
            const ae = de[Z], ye = he(ae) && ae.name;
            if (ye === "Boolean") {
              pe = !0;
              break;
            } else ye === "String" && (ee = !1);
          }
        else
          pe = he(de) && de.name === "Boolean";
        re[
          0
          /* shouldCast */
        ] = pe, re[
          1
          /* shouldCastTrue */
        ] = ee, (pe || Re(re, "default")) && m.push(D);
      }
    }
  const B = [h, m];
  return Ce(e) && u.set(e, B), B;
}
function gs(e) {
  return e[0] !== "$" && !er(e);
}
const Ro = (e) => e[0] === "_" || e === "$stable", Io = (e) => fe(e) ? e.map(St) : [St(e)], Ul = (e, n, o) => {
  if (n._n)
    return n;
  const u = dl((...l) => (Qt.NODE_ENV !== "production" && Fe && !(o === null && Xe) && (o && (o.root, Fe.root)), Io(n(...l))), o);
  return u._c = !1, u;
}, Tu = (e, n, o) => {
  const u = e._ctx;
  for (const l in e) {
    if (Ro(l)) continue;
    const f = e[l];
    if (he(f))
      n[l] = Ul(l, f, u);
    else if (f != null) {
      const h = Io(f);
      n[l] = () => h;
    }
  }
}, Ru = (e, n) => {
  const o = Io(n);
  e.slots.default = () => o;
}, Iu = (e, n, o) => {
  for (const u in n)
    (o || !Ro(u)) && (e[u] = n[u]);
}, Hl = (e, n, o) => {
  const u = e.slots = wu();
  if (e.vnode.shapeFlag & 32) {
    const l = n.__;
    l && eo(u, "__", l, !0);
    const f = n._;
    f ? (Iu(u, n, o), o && eo(u, "_", f, !0)) : Tu(n, u);
  } else n && Ru(e, n);
}, Fl = (e, n, o) => {
  const { vnode: u, slots: l } = e;
  let f = !0, h = Se;
  if (u.shapeFlag & 32) {
    const m = n._;
    m ? o && m === 1 ? f = !1 : Iu(l, n, o) : (f = !n.$stable, Tu(n, l)), h = n;
  } else n && (Ru(e, n), h = { default: 1 });
  if (f)
    for (const m in l)
      !Ro(m) && h[m] == null && delete l[m];
}, dt = ec;
function Lc(e) {
  return Ll(e);
}
function Ll(e, n) {
  const o = ti();
  o.__VUE__ = !0;
  const {
    insert: u,
    remove: l,
    patchProp: f,
    createElement: h,
    createText: m,
    createComment: b,
    setText: B,
    setElementText: S,
    parentNode: D,
    nextSibling: Y,
    setScopeId: re = bt,
    insertStaticContent: de
  } = e, pe = (p, w, C, K = null, j = null, U = null, X = void 0, V = null, G = !!w.dynamicChildren) => {
    if (p === w)
      return;
    p && !Qn(p, w) && (K = Gt(p), pt(p, j, U, !0), p = null), w.patchFlag === -2 && (G = !1, w.dynamicChildren = null);
    const { type: M, ref: se, shapeFlag: W } = w;
    switch (M) {
      case fi:
        ee(p, w, C, K);
        break;
      case Ht:
        Z(p, w, C, K);
        break;
      case Zi:
        p == null && ae(w, C, K, X);
        break;
      case yt:
        xt(
          p,
          w,
          C,
          K,
          j,
          U,
          X,
          V,
          G
        );
        break;
      default:
        W & 1 ? Ie(
          p,
          w,
          C,
          K,
          j,
          U,
          X,
          V,
          G
        ) : W & 6 ? ht(
          p,
          w,
          C,
          K,
          j,
          U,
          X,
          V,
          G
        ) : (W & 64 || W & 128) && M.process(
          p,
          w,
          C,
          K,
          j,
          U,
          X,
          V,
          G,
          qt
        );
    }
    se != null && j ? ir(se, p && p.ref, U, w || p, !w) : se == null && p && p.ref != null && ir(p.ref, null, U, p, !0);
  }, ee = (p, w, C, K) => {
    if (p == null)
      u(
        w.el = m(w.children),
        C,
        K
      );
    else {
      const j = w.el = p.el;
      w.children !== p.children && B(j, w.children);
    }
  }, Z = (p, w, C, K) => {
    p == null ? u(
      w.el = b(w.children || ""),
      C,
      K
    ) : w.el = p.el;
  }, ae = (p, w, C, K) => {
    [p.el, p.anchor] = de(
      p.children,
      w,
      C,
      K,
      p.el,
      p.anchor
    );
  }, ye = ({ el: p, anchor: w }, C, K) => {
    let j;
    for (; p && p !== w; )
      j = Y(p), u(p, C, K), p = j;
    u(w, C, K);
  }, ne = ({ el: p, anchor: w }) => {
    let C;
    for (; p && p !== w; )
      C = Y(p), l(p), p = C;
    l(w);
  }, Ie = (p, w, C, K, j, U, X, V, G) => {
    w.type === "svg" ? X = "svg" : w.type === "math" && (X = "mathml"), p == null ? ke(
      w,
      C,
      K,
      j,
      U,
      X,
      V,
      G
    ) : _n(
      p,
      w,
      j,
      U,
      X,
      V,
      G
    );
  }, ke = (p, w, C, K, j, U, X, V) => {
    let G, M;
    const { props: se, shapeFlag: W, transition: oe, dirs: ue } = p;
    if (G = p.el = h(
      p.type,
      U,
      se && se.is,
      se
    ), W & 8 ? S(G, p.children) : W & 16 && ze(
      p.children,
      G,
      null,
      K,
      j,
      Ji(p, U),
      X,
      V
    ), ue && dn(p, null, K, "created"), Te(G, p, p.scopeId, X, K), se) {
      for (const be in se)
        be !== "value" && !er(be) && f(G, be, null, se[be], U, K);
      "value" in se && f(G, "value", null, se.value, U), (M = se.onVnodeBeforeMount) && It(M, K, p);
    }
    ue && dn(p, null, K, "beforeMount");
    const me = Gl(j, oe);
    me && oe.beforeEnter(G), u(G, w, C), ((M = se && se.onVnodeMounted) || me || ue) && dt(() => {
      M && It(M, K, p), me && oe.enter(G), ue && dn(p, null, K, "mounted");
    }, j);
  }, Te = (p, w, C, K, j) => {
    if (C && re(p, C), K)
      for (let U = 0; U < K.length; U++)
        re(p, K[U]);
    if (j) {
      let U = j.subTree;
      if (w === U || Nu(U.type) && (U.ssContent === w || U.ssFallback === w)) {
        const X = j.vnode;
        Te(
          p,
          X,
          X.scopeId,
          X.slotScopeIds,
          j.parent
        );
      }
    }
  }, ze = (p, w, C, K, j, U, X, V, G = 0) => {
    for (let M = G; M < p.length; M++) {
      const se = p[M] = V ? en(p[M]) : St(p[M]);
      pe(
        null,
        se,
        w,
        C,
        K,
        j,
        U,
        X,
        V
      );
    }
  }, _n = (p, w, C, K, j, U, X) => {
    const V = w.el = p.el;
    let { patchFlag: G, dynamicChildren: M, dirs: se } = w;
    G |= p.patchFlag & 16;
    const W = p.props || Se, oe = w.props || Se;
    let ue;
    if (C && hn(C, !1), (ue = oe.onVnodeBeforeUpdate) && It(ue, C, w, p), se && dn(w, p, C, "beforeUpdate"), C && hn(C, !0), (W.innerHTML && oe.innerHTML == null || W.textContent && oe.textContent == null) && S(V, ""), M ? Et(
      p.dynamicChildren,
      M,
      V,
      C,
      K,
      Ji(w, j),
      U
    ) : X || ve(
      p,
      w,
      V,
      null,
      C,
      K,
      Ji(w, j),
      U,
      !1
    ), G > 0) {
      if (G & 16)
        Lt(V, W, oe, C, j);
      else if (G & 2 && W.class !== oe.class && f(V, "class", null, oe.class, j), G & 4 && f(V, "style", W.style, oe.style, j), G & 8) {
        const me = w.dynamicProps;
        for (let be = 0; be < me.length; be++) {
          const Ee = me[be], Ue = W[Ee], Ge = oe[Ee];
          (Ge !== Ue || Ee === "value") && f(V, Ee, Ue, Ge, j, C);
        }
      }
      G & 1 && p.children !== w.children && S(V, w.children);
    } else !X && M == null && Lt(V, W, oe, C, j);
    ((ue = oe.onVnodeUpdated) || se) && dt(() => {
      ue && It(ue, C, w, p), se && dn(w, p, C, "updated");
    }, K);
  }, Et = (p, w, C, K, j, U, X) => {
    for (let V = 0; V < w.length; V++) {
      const G = p[V], M = w[V], se = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        G.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (G.type === yt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Qn(G, M) || // - In the case of a component, it could contain anything.
        G.shapeFlag & 198) ? D(G.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          C
        )
      );
      pe(
        G,
        M,
        se,
        null,
        K,
        j,
        U,
        X,
        !0
      );
    }
  }, Lt = (p, w, C, K, j) => {
    if (w !== C) {
      if (w !== Se)
        for (const U in w)
          !er(U) && !(U in C) && f(
            p,
            U,
            w[U],
            null,
            j,
            K
          );
      for (const U in C) {
        if (er(U)) continue;
        const X = C[U], V = w[U];
        X !== V && U !== "value" && f(p, U, V, X, j, K);
      }
      "value" in C && f(p, "value", w.value, C.value, j);
    }
  }, xt = (p, w, C, K, j, U, X, V, G) => {
    const M = w.el = p ? p.el : m(""), se = w.anchor = p ? p.anchor : m("");
    let { patchFlag: W, dynamicChildren: oe, slotScopeIds: ue } = w;
    ue && (V = V ? V.concat(ue) : ue), p == null ? (u(M, C, K), u(se, C, K), ze(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      C,
      se,
      j,
      U,
      X,
      V,
      G
    )) : W > 0 && W & 64 && oe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (Et(
      p.dynamicChildren,
      oe,
      C,
      j,
      U,
      X,
      V
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || j && w === j.subTree) && Au(
      p,
      w,
      !0
      /* shallow */
    )) : ve(
      p,
      w,
      C,
      se,
      j,
      U,
      X,
      V,
      G
    );
  }, ht = (p, w, C, K, j, U, X, V, G) => {
    w.slotScopeIds = V, p == null ? w.shapeFlag & 512 ? j.ctx.activate(
      w,
      C,
      K,
      X,
      G
    ) : Un(
      w,
      C,
      K,
      j,
      U,
      X,
      G
    ) : yn(p, w, G);
  }, Un = (p, w, C, K, j, U, X) => {
    const V = p.component = ac(
      p,
      K,
      j
    );
    if (lu(p) && (V.ctx.renderer = qt), cc(V, !1, X), V.asyncDep) {
      if (j && j.registerDep(V, He, X), !p.el) {
        const G = V.subTree = ct(Ht);
        Z(null, G, w, C);
      }
    } else
      He(
        V,
        p,
        w,
        C,
        j,
        U,
        X
      );
  }, yn = (p, w, C) => {
    const K = w.component = p.component;
    if (Ql(p, w, C))
      if (K.asyncDep && !K.asyncResolved) {
        Pe(K, w, C);
        return;
      } else
        K.next = w, K.update();
    else
      w.el = p.el, K.vnode = w;
  }, He = (p, w, C, K, j, U, X) => {
    const V = () => {
      if (p.isMounted) {
        let { next: W, bu: oe, u: ue, parent: me, vnode: be } = p;
        {
          const qe = Su(p);
          if (qe) {
            W && (W.el = be.el, Pe(p, W, X)), qe.asyncDep.then(() => {
              p.isUnmounted || V();
            });
            return;
          }
        }
        let Ee = W, Ue;
        hn(p, !1), W ? (W.el = be.el, Pe(p, W, X)) : W = be, oe && qi(oe), (Ue = W.props && W.props.onVnodeBeforeUpdate) && It(Ue, me, W, be), hn(p, !0);
        const Ge = bs(p), nt = p.subTree;
        p.subTree = Ge, pe(
          nt,
          Ge,
          // parent may have changed if it's in a teleport
          D(nt.el),
          // anchor may have changed if it's in a fragment
          Gt(nt),
          p,
          j,
          U
        ), W.el = Ge.el, Ee === null && Zl(p, Ge.el), ue && dt(ue, j), (Ue = W.props && W.props.onVnodeUpdated) && dt(
          () => It(Ue, me, W, be),
          j
        );
      } else {
        let W;
        const { el: oe, props: ue } = w, { bm: me, m: be, parent: Ee, root: Ue, type: Ge } = p, nt = Dn(w);
        hn(p, !1), me && qi(me), !nt && (W = ue && ue.onVnodeBeforeMount) && It(W, Ee, w), hn(p, !0);
        {
          Ue.ce && // @ts-expect-error _def is private
          Ue.ce._def.shadowRoot !== !1 && Ue.ce._injectChildStyle(Ge);
          const qe = p.subTree = bs(p);
          pe(
            null,
            qe,
            C,
            K,
            p,
            j,
            U
          ), w.el = qe.el;
        }
        if (be && dt(be, j), !nt && (W = ue && ue.onVnodeMounted)) {
          const qe = w;
          dt(
            () => It(W, Ee, qe),
            j
          );
        }
        (w.shapeFlag & 256 || Ee && Dn(Ee.vnode) && Ee.vnode.shapeFlag & 256) && p.a && dt(p.a, j), p.isMounted = !0, w = C = K = null;
      }
    };
    p.scope.on();
    const G = p.effect = new Bs(V);
    p.scope.off();
    const M = p.update = G.run.bind(G), se = p.job = G.runIfDirty.bind(G);
    se.i = p, se.id = p.uid, G.scheduler = () => Oo(se), hn(p, !0), M();
  }, Pe = (p, w, C) => {
    w.component = p;
    const K = p.vnode.props;
    p.vnode = w, p.next = null, jl(p, w.props, K, C), Fl(p, w.children, C), Pt(), ds(p), Nt();
  }, ve = (p, w, C, K, j, U, X, V, G = !1) => {
    const M = p && p.children, se = p ? p.shapeFlag : 0, W = w.children, { patchFlag: oe, shapeFlag: ue } = w;
    if (oe > 0) {
      if (oe & 128) {
        lt(
          M,
          W,
          C,
          K,
          j,
          U,
          X,
          V,
          G
        );
        return;
      } else if (oe & 256) {
        at(
          M,
          W,
          C,
          K,
          j,
          U,
          X,
          V,
          G
        );
        return;
      }
    }
    ue & 8 ? (se & 16 && mt(M, j, U), W !== M && S(C, W)) : se & 16 ? ue & 16 ? lt(
      M,
      W,
      C,
      K,
      j,
      U,
      X,
      V,
      G
    ) : mt(M, j, U, !0) : (se & 8 && S(C, ""), ue & 16 && ze(
      W,
      C,
      K,
      j,
      U,
      X,
      V,
      G
    ));
  }, at = (p, w, C, K, j, U, X, V, G) => {
    p = p || kn, w = w || kn;
    const M = p.length, se = w.length, W = Math.min(M, se);
    let oe;
    for (oe = 0; oe < W; oe++) {
      const ue = w[oe] = G ? en(w[oe]) : St(w[oe]);
      pe(
        p[oe],
        ue,
        C,
        null,
        j,
        U,
        X,
        V,
        G
      );
    }
    M > se ? mt(
      p,
      j,
      U,
      !0,
      !1,
      W
    ) : ze(
      w,
      C,
      K,
      j,
      U,
      X,
      V,
      G,
      W
    );
  }, lt = (p, w, C, K, j, U, X, V, G) => {
    let M = 0;
    const se = w.length;
    let W = p.length - 1, oe = se - 1;
    for (; M <= W && M <= oe; ) {
      const ue = p[M], me = w[M] = G ? en(w[M]) : St(w[M]);
      if (Qn(ue, me))
        pe(
          ue,
          me,
          C,
          null,
          j,
          U,
          X,
          V,
          G
        );
      else
        break;
      M++;
    }
    for (; M <= W && M <= oe; ) {
      const ue = p[W], me = w[oe] = G ? en(w[oe]) : St(w[oe]);
      if (Qn(ue, me))
        pe(
          ue,
          me,
          C,
          null,
          j,
          U,
          X,
          V,
          G
        );
      else
        break;
      W--, oe--;
    }
    if (M > W) {
      if (M <= oe) {
        const ue = oe + 1, me = ue < se ? w[ue].el : K;
        for (; M <= oe; )
          pe(
            null,
            w[M] = G ? en(w[M]) : St(w[M]),
            C,
            me,
            j,
            U,
            X,
            V,
            G
          ), M++;
      }
    } else if (M > oe)
      for (; M <= W; )
        pt(p[M], j, U, !0), M++;
    else {
      const ue = M, me = M, be = /* @__PURE__ */ new Map();
      for (M = me; M <= oe; M++) {
        const Be = w[M] = G ? en(w[M]) : St(w[M]);
        Be.key != null && be.set(Be.key, M);
      }
      let Ee, Ue = 0;
      const Ge = oe - me + 1;
      let nt = !1, qe = 0;
      const Ot = new Array(Ge);
      for (M = 0; M < Ge; M++) Ot[M] = 0;
      for (M = ue; M <= W; M++) {
        const Be = p[M];
        if (Ue >= Ge) {
          pt(Be, j, U, !0);
          continue;
        }
        let te;
        if (Be.key != null)
          te = be.get(Be.key);
        else
          for (Ee = me; Ee <= oe; Ee++)
            if (Ot[Ee - me] === 0 && Qn(Be, w[Ee])) {
              te = Ee;
              break;
            }
        te === void 0 ? pt(Be, j, U, !0) : (Ot[te - me] = M + 1, te >= qe ? qe = te : nt = !0, pe(
          Be,
          w[te],
          C,
          null,
          j,
          U,
          X,
          V,
          G
        ), Ue++);
      }
      const vn = nt ? ql(Ot) : kn;
      for (Ee = vn.length - 1, M = Ge - 1; M >= 0; M--) {
        const Be = me + M, te = w[Be], Vt = Be + 1 < se ? w[Be + 1].el : K;
        Ot[M] === 0 ? pe(
          null,
          te,
          C,
          Vt,
          j,
          U,
          X,
          V,
          G
        ) : nt && (Ee < 0 || M !== vn[Ee] ? vt(te, C, Vt, 2) : Ee--);
      }
    }
  }, vt = (p, w, C, K, j = null) => {
    const { el: U, type: X, transition: V, children: G, shapeFlag: M } = p;
    if (M & 6) {
      vt(p.component.subTree, w, C, K);
      return;
    }
    if (M & 128) {
      p.suspense.move(w, C, K);
      return;
    }
    if (M & 64) {
      X.move(p, w, C, qt);
      return;
    }
    if (X === yt) {
      u(U, w, C);
      for (let W = 0; W < G.length; W++)
        vt(G[W], w, C, K);
      u(p.anchor, w, C);
      return;
    }
    if (X === Zi) {
      ye(p, w, C);
      return;
    }
    if (K !== 2 && M & 1 && V)
      if (K === 0)
        V.beforeEnter(U), u(U, w, C), dt(() => V.enter(U), j);
      else {
        const { leave: W, delayLeave: oe, afterLeave: ue } = V, me = () => {
          p.ctx.isUnmounted ? l(U) : u(U, w, C);
        }, be = () => {
          W(U, () => {
            me(), ue && ue();
          });
        };
        oe ? oe(U, me, be) : be();
      }
    else
      u(U, w, C);
  }, pt = (p, w, C, K = !1, j = !1) => {
    const {
      type: U,
      props: X,
      ref: V,
      children: G,
      dynamicChildren: M,
      shapeFlag: se,
      patchFlag: W,
      dirs: oe,
      cacheIndex: ue
    } = p;
    if (W === -2 && (j = !1), V != null && (Pt(), ir(V, null, C, p, !0), Nt()), ue != null && (w.renderCache[ue] = void 0), se & 256) {
      w.ctx.deactivate(p);
      return;
    }
    const me = se & 1 && oe, be = !Dn(p);
    let Ee;
    if (be && (Ee = X && X.onVnodeBeforeUnmount) && It(Ee, w, p), se & 6)
      gn(p.component, C, K);
    else {
      if (se & 128) {
        p.suspense.unmount(C, K);
        return;
      }
      me && dn(p, null, w, "beforeUnmount"), se & 64 ? p.type.remove(
        p,
        w,
        C,
        qt,
        K
      ) : M && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !M.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (U !== yt || W > 0 && W & 64) ? mt(
        M,
        w,
        C,
        !1,
        !0
      ) : (U === yt && W & 384 || !j && se & 16) && mt(G, w, C), K && Ct(p);
    }
    (be && (Ee = X && X.onVnodeUnmounted) || me) && dt(() => {
      Ee && It(Ee, w, p), me && dn(p, null, w, "unmounted");
    }, C);
  }, Ct = (p) => {
    const { type: w, el: C, anchor: K, transition: j } = p;
    if (w === yt) {
      pr(C, K);
      return;
    }
    if (w === Zi) {
      ne(p);
      return;
    }
    const U = () => {
      l(C), j && !j.persisted && j.afterLeave && j.afterLeave();
    };
    if (p.shapeFlag & 1 && j && !j.persisted) {
      const { leave: X, delayLeave: V } = j, G = () => X(C, U);
      V ? V(p.el, U, G) : G();
    } else
      U();
  }, pr = (p, w) => {
    let C;
    for (; p !== w; )
      C = Y(p), l(p), p = C;
    l(w);
  }, gn = (p, w, C) => {
    const {
      bum: K,
      scope: j,
      job: U,
      subTree: X,
      um: V,
      m: G,
      a: M,
      parent: se,
      slots: { __: W }
    } = p;
    vs(G), vs(M), K && qi(K), se && fe(W) && W.forEach((oe) => {
      se.renderCache[oe] = void 0;
    }), j.stop(), U && (U.flags |= 8, pt(X, p, w, C)), V && dt(V, w), dt(() => {
      p.isUnmounted = !0;
    }, w), w && w.pendingBranch && !w.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === w.pendingId && (w.deps--, w.deps === 0 && w.resolve());
  }, mt = (p, w, C, K = !1, j = !1, U = 0) => {
    for (let X = U; X < p.length; X++)
      pt(p[X], w, C, K, j);
  }, Gt = (p) => {
    if (p.shapeFlag & 6)
      return Gt(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const w = Y(p.anchor || p.el), C = w && w[hl];
    return C ? Y(C) : w;
  };
  let Hn = !1;
  const ie = (p, w, C) => {
    p == null ? w._vnode && pt(w._vnode, null, null, !0) : pe(
      w._vnode || null,
      p,
      w,
      null,
      null,
      null,
      C
    ), w._vnode = p, Hn || (Hn = !0, ds(), ou(), Hn = !1);
  }, qt = {
    p: pe,
    um: pt,
    m: vt,
    r: Ct,
    mt: Un,
    mc: ze,
    pc: ve,
    pbc: Et,
    n: Gt,
    o: e
  };
  return {
    render: ie,
    hydrate: void 0,
    createApp: Dl(ie)
  };
}
function Ji({ type: e, props: n }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && n && n.encoding && n.encoding.includes("html") ? void 0 : o;
}
function hn({ effect: e, job: n }, o) {
  o ? (e.flags |= 32, n.flags |= 4) : (e.flags &= -33, n.flags &= -5);
}
function Gl(e, n) {
  return (!e || e && !e.pendingBranch) && n && !n.persisted;
}
function Au(e, n, o = !1) {
  const u = e.children, l = n.children;
  if (fe(u) && fe(l))
    for (let f = 0; f < u.length; f++) {
      const h = u[f];
      let m = l[f];
      m.shapeFlag & 1 && !m.dynamicChildren && ((m.patchFlag <= 0 || m.patchFlag === 32) && (m = l[f] = en(l[f]), m.el = h.el), !o && m.patchFlag !== -2 && Au(h, m)), m.type === fi && (m.el = h.el), m.type === Ht && !m.el && (m.el = h.el);
    }
}
function ql(e) {
  const n = e.slice(), o = [0];
  let u, l, f, h, m;
  const b = e.length;
  for (u = 0; u < b; u++) {
    const B = e[u];
    if (B !== 0) {
      if (l = o[o.length - 1], e[l] < B) {
        n[u] = l, o.push(u);
        continue;
      }
      for (f = 0, h = o.length - 1; f < h; )
        m = f + h >> 1, e[o[m]] < B ? f = m + 1 : h = m;
      B < e[o[f]] && (f > 0 && (n[u] = o[f - 1]), o[f] = u);
    }
  }
  for (f = o.length, h = o[f - 1]; f-- > 0; )
    o[f] = h, h = n[h];
  return o;
}
function Su(e) {
  const n = e.subTree.component;
  if (n)
    return n.asyncDep && !n.asyncResolved ? n : Su(n);
}
function vs(e) {
  if (e)
    for (let n = 0; n < e.length; n++)
      e[n].flags |= 8;
}
const Vl = Symbol.for("v-scx"), Wl = () => Gr(Vl);
function Gc(e, n) {
  return Ao(e, null, n);
}
function Qi(e, n, o) {
  return Ao(e, n, o);
}
function Ao(e, n, o = Se) {
  const { immediate: u, deep: l, flush: f, once: h } = o, m = ut({}, o), b = n && u || !n && f !== "post";
  let B;
  if (fr) {
    if (f === "sync") {
      const re = Wl();
      B = re.__watcherHandles || (re.__watcherHandles = []);
    } else if (!b) {
      const re = () => {
      };
      return re.stop = bt, re.resume = bt, re.pause = bt, re;
    }
  }
  const S = Fe;
  m.call = (re, de, pe) => Ut(re, S, de, pe);
  let D = !1;
  f === "post" ? m.scheduler = (re) => {
    dt(re, S && S.suspense);
  } : f !== "sync" && (D = !0, m.scheduler = (re, de) => {
    de ? re() : Oo(re);
  }), m.augmentJob = (re) => {
    n && (re.flags |= 4), D && (re.flags |= 2, S && (re.id = S.uid, re.i = S));
  };
  const Y = nl(e, n, m);
  return fr && (B ? B.push(Y) : b && Y()), Y;
}
function $l(e, n, o) {
  const u = this.proxy, l = $e(e) ? e.includes(".") ? ku(u, e) : () => u[e] : e.bind(u, u);
  let f;
  he(n) ? f = n : (f = n.handler, o = n);
  const h = hr(this), m = Ao(l, f.bind(u), o);
  return h(), m;
}
function ku(e, n) {
  const o = n.split(".");
  return () => {
    let u = e;
    for (let l = 0; l < o.length && u; l++)
      u = u[o[l]];
    return u;
  };
}
const Yl = (e, n) => n === "modelValue" || n === "model-value" ? e.modelModifiers : e[`${n}Modifiers`] || e[`${kt(n)}Modifiers`] || e[`${dr(n)}Modifiers`];
function Xl(e, n, ...o) {
  if (e.isUnmounted) return;
  const u = e.vnode.props || Se;
  let l = o;
  const f = n.startsWith("update:"), h = f && Yl(u, n.slice(7));
  h && (h.trim && (l = o.map((S) => $e(S) ? S.trim() : S)), h.number && (l = o.map(ya)));
  let m, b = u[m = Gi(n)] || // also try camelCase event handler (#2249)
  u[m = Gi(kt(n))];
  !b && f && (b = u[m = Gi(dr(n))]), b && Ut(
    b,
    e,
    6,
    l
  );
  const B = u[m + "Once"];
  if (B) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[m])
      return;
    e.emitted[m] = !0, Ut(
      B,
      e,
      6,
      l
    );
  }
}
function Pu(e, n, o = !1) {
  const u = n.emitsCache, l = u.get(e);
  if (l !== void 0)
    return l;
  const f = e.emits;
  let h = {}, m = !1;
  if (!he(e)) {
    const b = (B) => {
      const S = Pu(B, n, !0);
      S && (m = !0, ut(h, S));
    };
    !o && n.mixins.length && n.mixins.forEach(b), e.extends && b(e.extends), e.mixins && e.mixins.forEach(b);
  }
  return !f && !m ? (Ce(e) && u.set(e, null), null) : (fe(f) ? f.forEach((b) => h[b] = null) : ut(h, f), Ce(e) && u.set(e, h), h);
}
function ci(e, n) {
  return !e || !mo(n) ? !1 : (n = n.slice(2).replace(/Once$/, ""), Re(e, n[0].toLowerCase() + n.slice(1)) || Re(e, dr(n)) || Re(e, n));
}
function bs(e) {
  const {
    type: n,
    vnode: o,
    proxy: u,
    withProxy: l,
    propsOptions: [f],
    slots: h,
    attrs: m,
    emit: b,
    render: B,
    renderCache: S,
    props: D,
    data: Y,
    setupState: re,
    ctx: de,
    inheritAttrs: pe
  } = e, ee = zr(e);
  let Z, ae;
  try {
    if (o.shapeFlag & 4) {
      const ne = l || u, Ie = Qt.NODE_ENV !== "production" && re.__isScriptSetup ? new Proxy(ne, {
        get(ke, Te, ze) {
          return rl(
            `Property '${String(
              Te
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ke, Te, ze);
        }
      }) : ne;
      Z = St(
        B.call(
          Ie,
          ne,
          S,
          Qt.NODE_ENV !== "production" ? Fr(D) : D,
          re,
          Y,
          de
        )
      ), ae = m;
    } else {
      const ne = n;
      Qt.NODE_ENV, Z = St(
        ne.length > 1 ? ne(
          Qt.NODE_ENV !== "production" ? Fr(D) : D,
          Qt.NODE_ENV !== "production" ? {
            get attrs() {
              return Fr(m);
            },
            slots: h,
            emit: b
          } : { attrs: m, slots: h, emit: b }
        ) : ne(
          Qt.NODE_ENV !== "production" ? Fr(D) : D,
          null
        )
      ), ae = n.props ? m : zl(m);
    }
  } catch (ne) {
    sr.length = 0, ai(ne, e, 1), Z = ct(Ht);
  }
  let ye = Z;
  if (ae && pe !== !1) {
    const ne = Object.keys(ae), { shapeFlag: Ie } = ye;
    ne.length && Ie & 7 && (f && ne.some(Is) && (ae = Jl(
      ae,
      f
    )), ye = jn(ye, ae, !1, !0));
  }
  return o.dirs && (ye = jn(ye, null, !1, !0), ye.dirs = ye.dirs ? ye.dirs.concat(o.dirs) : o.dirs), o.transition && To(ye, o.transition), Z = ye, zr(ee), Z;
}
const zl = (e) => {
  let n;
  for (const o in e)
    (o === "class" || o === "style" || mo(o)) && ((n || (n = {}))[o] = e[o]);
  return n;
}, Jl = (e, n) => {
  const o = {};
  for (const u in e)
    (!Is(u) || !(u.slice(9) in n)) && (o[u] = e[u]);
  return o;
};
function Ql(e, n, o) {
  const { props: u, children: l, component: f } = e, { props: h, children: m, patchFlag: b } = n, B = f.emitsOptions;
  if (n.dirs || n.transition)
    return !0;
  if (o && b >= 0) {
    if (b & 1024)
      return !0;
    if (b & 16)
      return u ? ws(u, h, B) : !!h;
    if (b & 8) {
      const S = n.dynamicProps;
      for (let D = 0; D < S.length; D++) {
        const Y = S[D];
        if (h[Y] !== u[Y] && !ci(B, Y))
          return !0;
      }
    }
  } else
    return (l || m) && (!m || !m.$stable) ? !0 : u === h ? !1 : u ? h ? ws(u, h, B) : !0 : !!h;
  return !1;
}
function ws(e, n, o) {
  const u = Object.keys(n);
  if (u.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < u.length; l++) {
    const f = u[l];
    if (n[f] !== e[f] && !ci(o, f))
      return !0;
  }
  return !1;
}
function Zl({ vnode: e, parent: n }, o) {
  for (; n; ) {
    const u = n.subTree;
    if (u.suspense && u.suspense.activeBranch === e && (u.el = e.el), u === e)
      (e = n.vnode).el = o, n = n.parent;
    else
      break;
  }
}
const Nu = (e) => e.__isSuspense;
function ec(e, n) {
  n && n.pendingBranch ? fe(e) ? n.effects.push(...e) : n.effects.push(e) : fl(e);
}
const yt = Symbol.for("v-fgt"), fi = Symbol.for("v-txt"), Ht = Symbol.for("v-cmt"), Zi = Symbol.for("v-stc"), sr = [];
let st = null;
function ao(e = !1) {
  sr.push(st = e ? null : []);
}
function tc() {
  sr.pop(), st = sr[sr.length - 1] || null;
}
let Mn = 1;
function Es(e, n = !1) {
  Mn += e, e < 0 && st && n && (st.hasOnce = !0);
}
function Cu(e) {
  return e.dynamicChildren = Mn > 0 ? st || kn : null, tc(), Mn > 0 && st && st.push(e), e;
}
function qc(e, n, o, u, l, f) {
  return Cu(
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
function lo(e, n, o, u, l) {
  return Cu(
    ct(
      e,
      n,
      o,
      u,
      l,
      !0
    )
  );
}
function cr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Qn(e, n) {
  return e.type === n.type && e.key === n.key;
}
const Du = ({ key: e }) => e ?? null, qr = ({
  ref: e,
  ref_key: n,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? $e(e) || Le(e) || he(e) ? { i: Xe, r: e, k: n, f: !!o } : e : null);
function Bu(e, n = null, o = null, u = 0, l = null, f = e === yt ? 0 : 1, h = !1, m = !1) {
  const b = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: n,
    key: n && Du(n),
    ref: n && qr(n),
    scopeId: uu,
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
    ctx: Xe
  };
  return m ? (So(b, o), f & 128 && e.normalize(b)) : o && (b.shapeFlag |= $e(o) ? 8 : 16), Mn > 0 && // avoid a block node from tracking itself
  !h && // has current parent block
  st && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (b.patchFlag > 0 || f & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  b.patchFlag !== 32 && st.push(b), b;
}
const ct = nc;
function nc(e, n = null, o = null, u = 0, l = null, f = !1) {
  if ((!e || e === hu) && (e = Ht), cr(e)) {
    const m = jn(
      e,
      n,
      !0
      /* mergeRef: true */
    );
    return o && So(m, o), Mn > 0 && !f && st && (m.shapeFlag & 6 ? st[st.indexOf(e)] = m : st.push(m)), m.patchFlag = -2, m;
  }
  if (mc(e) && (e = e.__vccOpts), n) {
    n = rc(n);
    let { class: m, style: b } = n;
    m && !$e(m) && (n.class = ri(m)), Ce(b) && (xo(b) && !fe(b) && (b = ut({}, b)), n.style = ni(b));
  }
  const h = $e(e) ? 1 : Nu(e) ? 128 : pl(e) ? 64 : Ce(e) ? 4 : he(e) ? 2 : 0;
  return Bu(
    e,
    n,
    o,
    u,
    l,
    h,
    f,
    !0
  );
}
function rc(e) {
  return e ? xo(e) || Eu(e) ? ut({}, e) : e : null;
}
function jn(e, n, o = !1, u = !1) {
  const { props: l, ref: f, patchFlag: h, children: m, transition: b } = e, B = n ? oc(l || {}, n) : l, S = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: B,
    key: B && Du(B),
    ref: n && n.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && f ? fe(f) ? f.concat(qr(n)) : [f, qr(n)] : qr(n)
    ) : f,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: m,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: n && e.type !== yt ? h === -1 ? 16 : h | 16 : h,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: b,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && jn(e.ssContent),
    ssFallback: e.ssFallback && jn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return b && u && To(
    S,
    b.clone(S)
  ), S;
}
function ic(e = " ", n = 0) {
  return ct(fi, null, e, n);
}
function Vc(e = "", n = !1) {
  return n ? (ao(), lo(Ht, null, e)) : ct(Ht, null, e);
}
function St(e) {
  return e == null || typeof e == "boolean" ? ct(Ht) : fe(e) ? ct(
    yt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : cr(e) ? en(e) : ct(fi, null, String(e));
}
function en(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : jn(e);
}
function So(e, n) {
  let o = 0;
  const { shapeFlag: u } = e;
  if (n == null)
    n = null;
  else if (fe(n))
    o = 16;
  else if (typeof n == "object")
    if (u & 65) {
      const l = n.default;
      l && (l._c && (l._d = !1), So(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = n._;
      !l && !Eu(n) ? n._ctx = Xe : l === 3 && Xe && (Xe.slots._ === 1 ? n._ = 1 : (n._ = 2, e.patchFlag |= 1024));
    }
  else he(n) ? (n = { default: n, _ctx: Xe }, o = 32) : (n = String(n), u & 64 ? (o = 16, n = [ic(n)]) : o = 8);
  e.children = n, e.shapeFlag |= o;
}
function oc(...e) {
  const n = {};
  for (let o = 0; o < e.length; o++) {
    const u = e[o];
    for (const l in u)
      if (l === "class")
        n.class !== u.class && (n.class = ri([n.class, u.class]));
      else if (l === "style")
        n.style = ni([n.style, u.style]);
      else if (mo(l)) {
        const f = n[l], h = u[l];
        h && f !== h && !(fe(f) && f.includes(h)) && (n[l] = f ? [].concat(f, h) : h);
      } else l !== "" && (n[l] = u[l]);
  }
  return n;
}
function It(e, n, o, u = null) {
  Ut(e, n, 7, [
    o,
    u
  ]);
}
const sc = vu();
let uc = 0;
function ac(e, n, o) {
  const u = e.type, l = (n ? n.appContext : e.appContext) || sc, f = {
    uid: uc++,
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
    scope: new Ds(
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
    propsOptions: Ou(u, l),
    emitsOptions: Pu(u, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Se,
    // inheritAttrs
    inheritAttrs: u.inheritAttrs,
    // state
    ctx: Se,
    data: Se,
    props: Se,
    attrs: Se,
    slots: Se,
    refs: Se,
    setupState: Se,
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
  return f.ctx = { _: f }, f.root = n ? n.root : f, f.emit = Xl.bind(null, f), e.ce && e.ce(f), f;
}
let Fe = null;
const lc = () => Fe || Xe;
let Qr, co;
{
  const e = ti(), n = (o, u) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(u), (f) => {
      l.length > 1 ? l.forEach((h) => h(f)) : l[0](f);
    };
  };
  Qr = n(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Fe = o
  ), co = n(
    "__VUE_SSR_SETTERS__",
    (o) => fr = o
  );
}
const hr = (e) => {
  const n = Fe;
  return Qr(e), e.scope.on(), () => {
    e.scope.off(), Qr(n);
  };
}, xs = () => {
  Fe && Fe.scope.off(), Qr(null);
};
function Mu(e) {
  return e.vnode.shapeFlag & 4;
}
let fr = !1;
function cc(e, n = !1, o = !1) {
  n && co(n);
  const { props: u, children: l } = e.vnode, f = Mu(e);
  Ml(e, u, f, n), Hl(e, l, o || n);
  const h = f ? fc(e, n) : void 0;
  return n && co(!1), h;
}
function fc(e, n) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Il);
  const { setup: u } = o;
  if (u) {
    Pt();
    const l = e.setupContext = u.length > 1 ? Ku(e) : null, f = hr(e), h = Kn(
      u,
      e,
      0,
      [
        e.props,
        l
      ]
    ), m = Ss(h);
    if (Nt(), f(), (m || e.sp) && !Dn(e) && au(e), m) {
      if (h.then(xs, xs), n)
        return h.then((b) => {
          Os(e, b);
        }).catch((b) => {
          ai(b, e, 0);
        });
      e.asyncDep = h;
    } else
      Os(e, h);
  } else
    ju(e);
}
function Os(e, n, o) {
  he(n) ? e.type.__ssrInlineRender ? e.ssrRender = n : e.render = n : Ce(n) && (e.setupState = eu(n)), ju(e);
}
function ju(e, n, o) {
  const u = e.type;
  e.render || (e.render = u.render || bt);
  {
    const l = hr(e);
    Pt();
    try {
      Al(e);
    } finally {
      Nt(), l();
    }
  }
}
const dc = {
  get(e, n) {
    return tt(e, "get", ""), e[n];
  }
};
function Ku(e) {
  const n = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, dc),
    slots: e.slots,
    emit: e.emit,
    expose: n
  };
}
function ko(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(eu(Wa(e.exposed)), {
    get(n, o) {
      if (o in n)
        return n[o];
      if (o in or)
        return or[o](e);
    },
    has(n, o) {
      return o in n || o in or;
    }
  })) : e.proxy;
}
const hc = /(?:^|[-_])(\w)/g, pc = (e) => e.replace(hc, (n) => n.toUpperCase()).replace(/[-_]/g, "");
function Uu(e, n = !0) {
  return he(e) ? e.displayName || e.name : e.name || n && e.__name;
}
function Hu(e, n, o = !1) {
  let u = Uu(n);
  if (!u && n.__file) {
    const l = n.__file.match(/([^/\\]+)\.\w+$/);
    l && (u = l[1]);
  }
  if (!u && e && e.parent) {
    const l = (f) => {
      for (const h in f)
        if (f[h] === n)
          return h;
    };
    u = l(
      e.components || e.parent.type.components
    ) || l(e.appContext.components);
  }
  return u ? pc(u) : o ? "App" : "Anonymous";
}
function mc(e) {
  return he(e) && "__vccOpts" in e;
}
const _c = (e, n) => el(e, n, fr);
function Wc(e, n, o) {
  const u = arguments.length;
  return u === 2 ? Ce(n) && !fe(n) ? cr(n) ? ct(e, null, [n]) : ct(e, n) : ct(e, null, n) : (u > 3 ? o = Array.prototype.slice.call(arguments, 2) : u === 3 && cr(o) && (o = [o]), ct(e, n, o));
}
function $c(e, n) {
  const o = e.memo;
  if (o.length != n.length)
    return !1;
  for (let u = 0; u < o.length; u++)
    if (Kt(o[u], n[u]))
      return !1;
  return Mn > 0 && st && st.push(e), !0;
}
const yc = "3.5.17";
function Yc(e) {
  return {
    addRecord: n,
    updateRecord: o,
    findRecordsByTagName: h,
    findChildRecords: D,
    findChildRecordsByTagName: Y,
    findChildRecordsWithinDepthAndGivenTagName: de,
    instantiate: m,
    ensureRelationship: l,
    findRootSCL: f,
    recordExists: u,
    findOneRecordByAttribute: S,
    close: pe,
    db: e
  };
  async function n(ee) {
    const Z = {
      ...ee,
      id: crypto.randomUUID()
    };
    try {
      const ae = await e.table(Z.tagName).add(Z), ye = await e.table(Z.tagName).get(ae);
      if (!ye) {
        const ne = { msg: "could not find added record", table: Z.tagName, addedId: ae };
        throw console.error(ne), new Error(JSON.stringify(ne));
      }
      return ye;
    } catch (ae) {
      const ye = {
        msg: "could not add record",
        db: e.name,
        table: Z.tagName,
        recordToAdd: Z,
        err: ae
      };
      throw console.error(ye), new Error(JSON.stringify(ye));
    }
  }
  async function o(ee) {
    try {
      if (await e.table(ee.tagName).update(ee.id, ee) < 1) {
        const ae = { msg: "nothing has been updated", record: ee };
        throw console.error(ae), new Error(JSON.stringify(ae));
      }
    } catch (Z) {
      console.error(Z);
    }
  }
  async function u(ee) {
    return await e.table(ee.tagName).where({ id: ee.id }).count() > 0;
  }
  async function l(ee, Z) {
    const ae = ee.children?.some(
      (ne) => ne.id === Z.id && ne.tagName === Z.tagName
    ), ye = Z.parent?.id === ee.id && Z.parent?.tagName === ee.tagName;
    ae || (ee.children || (ee.children = []), ee.children.push({
      id: Z.id,
      tagName: Z.tagName
    }), await e.table(ee.tagName).update(ee.id, ee)), ye || (Z.parent = {
      id: ee.id,
      tagName: ee.tagName
    }, await e.table(Z.tagName).update(Z.id, Z));
  }
  async function f() {
    const ee = await e.table("SCL").count();
    if (ee === 0) throw new Error("tfindRootSCLhere is no SCL element");
    if (ee > 1) throw new Error("there are multiple SCL elements; there can be only one");
    const Z = await e.table("SCL").orderBy("id").first();
    if (!Z) throw new Error("no root scl found");
    return Z;
  }
  async function h(ee) {
    return await e.table(ee).toArray();
  }
  function m(ee) {
    const Z = b(ee);
    if (!Z)
      throw console.error('record does not have a "uuid" to move to "templateUUID"', ee), new Error('record does not have a "uuid" to move to "templateUUID"');
    ee.attributes?.push({ name: "templateUuid", value: Z }), B(ee);
  }
  function b(ee) {
    const Z = ee.attributes?.find((ae) => ae.name === "uuid");
    if (Z)
      return Z.value;
  }
  function B(ee) {
    ee.attributes || (ee.attributes = []);
    const Z = crypto.randomUUID(), ae = ee.attributes.findIndex((ne) => ne.name === "uuid");
    ae >= 0 ? ee.attributes[ae].value = Z : ee.attributes.push({ name: "uuid", value: Z });
  }
  async function S(ee, Z) {
    return gc(e, ee, Z);
  }
  async function D(ee) {
    return Y(ee, []);
  }
  async function Y(ee, Z) {
    if (!ee.children || ee.children.length === 0)
      return [];
    let ae = ee.children;
    return Z.length > 0 && (ae = ee.children.filter((ne) => Z.includes(ne.tagName))), (await Promise.all(
      ae.map(async (ne) => {
        const Ie = ne.tagName, ke = ne.id, Te = await e.table(Ie).get({ id: ke });
        return Te || console.warn("could not find element", { id: ke, table: Ie }), Te;
      })
    )).filter(Boolean);
  }
  async function de(ee, Z = re, ae = []) {
    const ye = [];
    let ne = [ee];
    for (let Ie = 0; Ie < Z; Ie++) {
      const ke = [];
      for (const Te of ne) {
        const ze = await Y(Te, ae);
        ze.length !== 0 && (ke.push(...ze), ye.push(...ze));
      }
      ne = [...ke];
    }
    return ye;
  }
  function pe() {
    e.close();
  }
}
function Xc(e, n) {
  return e.attributes?.find((o) => o.name === n);
}
function zc(e, n, o) {
  e.attributes || (e.attributes = []);
  const u = e.attributes?.findIndex((f) => f.name === n);
  u >= 0 ? e.attributes[u].value = o : e.attributes.push({ name: n, value: o });
}
async function gc(e, n, o) {
  try {
    return await e.table(n).filter(
      (l) => !!l.attributes?.some((f) => f.name === o.name && f.value === o.value)
    ).first();
  } catch (u) {
    console.error({ msg: "could not find record by attribute", tagName: n, attr: o, err: u });
  }
}
var vc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vr = { exports: {} }, wc = Vr.exports, Ts;
function Ec() {
  return Ts || (Ts = 1, function(e, n) {
    (function(o, u) {
      e.exports = u();
    })(wc, function() {
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
      var f = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : vc, h = Object.keys, m = Array.isArray;
      function b(t, r) {
        return typeof r != "object" || h(r).forEach(function(i) {
          t[i] = r[i];
        }), t;
      }
      typeof Promise > "u" || f.Promise || (f.Promise = Promise);
      var B = Object.getPrototypeOf, S = {}.hasOwnProperty;
      function D(t, r) {
        return S.call(t, r);
      }
      function Y(t, r) {
        typeof r == "function" && (r = r(B(t))), (typeof Reflect > "u" ? h : Reflect.ownKeys)(r).forEach(function(i) {
          de(t, i, r[i]);
        });
      }
      var re = Object.defineProperty;
      function de(t, r, i, s) {
        re(t, r, b(i && D(i, "get") && typeof i.get == "function" ? { get: i.get, set: i.set, configurable: !0 } : { value: i, configurable: !0, writable: !0 }, s));
      }
      function pe(t) {
        return { from: function(r) {
          return t.prototype = Object.create(r.prototype), de(t.prototype, "constructor", t), { extend: Y.bind(null, t.prototype) };
        } };
      }
      var ee = Object.getOwnPropertyDescriptor, Z = [].slice;
      function ae(t, r, i) {
        return Z.call(t, r, i);
      }
      function ye(t, r) {
        return r(t);
      }
      function ne(t) {
        if (!t) throw new Error("Assertion Failed");
      }
      function Ie(t) {
        f.setImmediate ? setImmediate(t) : setTimeout(t, 0);
      }
      function ke(t, r) {
        if (typeof r == "string" && D(t, r)) return t[r];
        if (!r) return t;
        if (typeof r != "string") {
          for (var i = [], s = 0, a = r.length; s < a; ++s) {
            var c = ke(t, r[s]);
            i.push(c);
          }
          return i;
        }
        var d = r.indexOf(".");
        if (d !== -1) {
          var _ = t[r.substr(0, d)];
          return _ == null ? void 0 : ke(_, r.substr(d + 1));
        }
      }
      function Te(t, r, i) {
        if (t && r !== void 0 && !("isFrozen" in Object && Object.isFrozen(t))) if (typeof r != "string" && "length" in r) {
          ne(typeof i != "string" && "length" in i);
          for (var s = 0, a = r.length; s < a; ++s) Te(t, r[s], i[s]);
        } else {
          var c, d, _ = r.indexOf(".");
          _ !== -1 ? (c = r.substr(0, _), (d = r.substr(_ + 1)) === "" ? i === void 0 ? m(t) && !isNaN(parseInt(c)) ? t.splice(c, 1) : delete t[c] : t[c] = i : Te(_ = !(_ = t[c]) || !D(t, c) ? t[c] = {} : _, d, i)) : i === void 0 ? m(t) && !isNaN(parseInt(r)) ? t.splice(r, 1) : delete t[r] : t[r] = i;
        }
      }
      function ze(t) {
        var r, i = {};
        for (r in t) D(t, r) && (i[r] = t[r]);
        return i;
      }
      var _n = [].concat;
      function Et(t) {
        return _n.apply([], t);
      }
      var me = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Et([8, 16, 32, 64].map(function(t) {
        return ["Int", "Uint", "Float"].map(function(r) {
          return r + t + "Array";
        });
      }))).filter(function(t) {
        return f[t];
      }), Lt = new Set(me.map(function(t) {
        return f[t];
      })), xt = null;
      function ht(t) {
        return xt = /* @__PURE__ */ new WeakMap(), t = function r(i) {
          if (!i || typeof i != "object") return i;
          var s = xt.get(i);
          if (s) return s;
          if (m(i)) {
            s = [], xt.set(i, s);
            for (var a = 0, c = i.length; a < c; ++a) s.push(r(i[a]));
          } else if (Lt.has(i.constructor)) s = i;
          else {
            var d, _ = B(i);
            for (d in s = _ === Object.prototype ? {} : Object.create(_), xt.set(i, s), i) D(i, d) && (s[d] = r(i[d]));
          }
          return s;
        }(t), xt = null, t;
      }
      var Un = {}.toString;
      function yn(t) {
        return Un.call(t).slice(8, -1);
      }
      var He = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Pe = typeof He == "symbol" ? function(t) {
        var r;
        return t != null && (r = t[He]) && r.apply(t);
      } : function() {
        return null;
      };
      function ve(t, r) {
        return r = t.indexOf(r), 0 <= r && t.splice(r, 1), 0 <= r;
      }
      var at = {};
      function lt(t) {
        var r, i, s, a;
        if (arguments.length === 1) {
          if (m(t)) return t.slice();
          if (this === at && typeof t == "string") return [t];
          if (a = Pe(t)) {
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
      var vt = typeof Symbol < "u" ? function(t) {
        return t[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, ue = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], _t = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(ue), pt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Ct(t, r) {
        this.name = t, this.message = r;
      }
      function pr(t, r) {
        return t + ". Errors: " + Object.keys(r).map(function(i) {
          return r[i].toString();
        }).filter(function(i, s, a) {
          return a.indexOf(i) === s;
        }).join(`
`);
      }
      function gn(t, r, i, s) {
        this.failures = r, this.failedKeys = s, this.successCount = i, this.message = pr(t, r);
      }
      function mt(t, r) {
        this.name = "BulkError", this.failures = Object.keys(r).map(function(i) {
          return r[i];
        }), this.failuresByPos = r, this.message = pr(t, this.failures);
      }
      pe(Ct).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), pe(gn).from(Ct), pe(mt).from(Ct);
      var Gt = _t.reduce(function(t, r) {
        return t[r] = r + "Error", t;
      }, {}), Hn = Ct, ie = _t.reduce(function(t, r) {
        var i = r + "Error";
        function s(a, c) {
          this.name = i, a ? typeof a == "string" ? (this.message = "".concat(a).concat(c ? `
 ` + c : ""), this.inner = c || null) : typeof a == "object" && (this.message = "".concat(a.name, " ").concat(a.message), this.inner = a) : (this.message = pt[r] || i, this.inner = null);
        }
        return pe(s).from(Hn), t[r] = s, t;
      }, {});
      ie.Syntax = SyntaxError, ie.Type = TypeError, ie.Range = RangeError;
      var qt = ue.reduce(function(t, r) {
        return t[r + "Error"] = ie[r], t;
      }, {}), Fn = _t.reduce(function(t, r) {
        return ["Syntax", "Type", "Range"].indexOf(r) === -1 && (t[r + "Error"] = ie[r]), t;
      }, {});
      function p() {
      }
      function w(t) {
        return t;
      }
      function C(t, r) {
        return t == null || t === w ? r : function(i) {
          return r(t(i));
        };
      }
      function K(t, r) {
        return function() {
          t.apply(this, arguments), r.apply(this, arguments);
        };
      }
      function j(t, r) {
        return t === p ? r : function() {
          var i = t.apply(this, arguments);
          i !== void 0 && (arguments[0] = i);
          var s = this.onsuccess, a = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var c = r.apply(this, arguments);
          return s && (this.onsuccess = this.onsuccess ? K(s, this.onsuccess) : s), a && (this.onerror = this.onerror ? K(a, this.onerror) : a), c !== void 0 ? c : i;
        };
      }
      function U(t, r) {
        return t === p ? r : function() {
          t.apply(this, arguments);
          var i = this.onsuccess, s = this.onerror;
          this.onsuccess = this.onerror = null, r.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? K(i, this.onsuccess) : i), s && (this.onerror = this.onerror ? K(s, this.onerror) : s);
        };
      }
      function X(t, r) {
        return t === p ? r : function(i) {
          var s = t.apply(this, arguments);
          b(i, s);
          var a = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, i = r.apply(this, arguments), a && (this.onsuccess = this.onsuccess ? K(a, this.onsuccess) : a), c && (this.onerror = this.onerror ? K(c, this.onerror) : c), s === void 0 ? i === void 0 ? void 0 : i : b(s, i);
        };
      }
      function V(t, r) {
        return t === p ? r : function() {
          return r.apply(this, arguments) !== !1 && t.apply(this, arguments);
        };
      }
      function G(t, r) {
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
      Fn.ModifyError = gn, Fn.DexieError = Ct, Fn.BulkError = mt;
      var M = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function se(t) {
        M = t;
      }
      var W = {}, oe = 100, me = typeof Promise > "u" ? [] : function() {
        var t = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [t, B(t), t];
        var r = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [r, B(r), t];
      }(), ue = me[0], _t = me[1], me = me[2], _t = _t && _t.then, be = ue && ue.constructor, Ee = !!me, Ue = function(t, r) {
        Vt.push([t, r]), nt && (queueMicrotask(Lu), nt = !1);
      }, Ge = !0, nt = !0, qe = [], Ot = [], vn = w, Be = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: p, pgp: !1, env: {}, finalize: p }, te = Be, Vt = [], on = 0, mr = [];
      function J(t) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var r = this._PSD = te;
        if (typeof t != "function") {
          if (t !== W) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && hi(this, this._value));
        }
        this._state = null, this._value = null, ++r.ref, function i(s, a) {
          try {
            a(function(c) {
              if (s._state === null) {
                if (c === s) throw new TypeError("A promise cannot be resolved with itself.");
                var d = s._lib && bn();
                c && typeof c.then == "function" ? i(s, function(_, g) {
                  c instanceof J ? c._then(_, g) : c.then(_, g);
                }) : (s._state = !0, s._value = c, No(s)), d && wn();
              }
            }, hi.bind(null, s));
          } catch (c) {
            hi(s, c);
          }
        }(this, t);
      }
      var di = { get: function() {
        var t = te, r = vr;
        function i(s, a) {
          var c = this, d = !t.global && (t !== te || r !== vr), _ = d && !$t(), g = new J(function(E, O) {
            pi(c, new Po(Do(s, t, d, _), Do(a, t, d, _), E, O, t));
          });
          return this._consoleTask && (g._consoleTask = this._consoleTask), g;
        }
        return i.prototype = W, i;
      }, set: function(t) {
        de(this, "then", t && t.prototype === W ? di : { get: function() {
          return t;
        }, set: di.set });
      } };
      function Po(t, r, i, s, a) {
        this.onFulfilled = typeof t == "function" ? t : null, this.onRejected = typeof r == "function" ? r : null, this.resolve = i, this.reject = s, this.psd = a;
      }
      function hi(t, r) {
        var i, s;
        Ot.push(r), t._state === null && (i = t._lib && bn(), r = vn(r), t._state = !1, t._value = r, s = t, qe.some(function(a) {
          return a._value === s._value;
        }) || qe.push(s), No(t), i && wn());
      }
      function No(t) {
        var r = t._listeners;
        t._listeners = [];
        for (var i = 0, s = r.length; i < s; ++i) pi(t, r[i]);
        var a = t._PSD;
        --a.ref || a.finalize(), on === 0 && (++on, Ue(function() {
          --on == 0 && mi();
        }, []));
      }
      function pi(t, r) {
        if (t._state !== null) {
          var i = t._state ? r.onFulfilled : r.onRejected;
          if (i === null) return (t._state ? r.resolve : r.reject)(t._value);
          ++r.psd.ref, ++on, Ue(Fu, [i, t, r]);
        } else t._listeners.push(r);
      }
      function Fu(t, r, i) {
        try {
          var s, a = r._value;
          !r._state && Ot.length && (Ot = []), s = M && r._consoleTask ? r._consoleTask.run(function() {
            return t(a);
          }) : t(a), r._state || Ot.indexOf(a) !== -1 || function(c) {
            for (var d = qe.length; d; ) if (qe[--d]._value === c._value) return qe.splice(d, 1);
          }(r), i.resolve(s);
        } catch (c) {
          i.reject(c);
        } finally {
          --on == 0 && mi(), --i.psd.ref || i.psd.finalize();
        }
      }
      function Lu() {
        sn(Be, function() {
          bn() && wn();
        });
      }
      function bn() {
        var t = Ge;
        return nt = Ge = !1, t;
      }
      function wn() {
        var t, r, i;
        do
          for (; 0 < Vt.length; ) for (t = Vt, Vt = [], i = t.length, r = 0; r < i; ++r) {
            var s = t[r];
            s[0].apply(null, s[1]);
          }
        while (0 < Vt.length);
        nt = Ge = !0;
      }
      function mi() {
        var t = qe;
        qe = [], t.forEach(function(s) {
          s._PSD.onunhandled.call(null, s._value, s);
        });
        for (var r = mr.slice(0), i = r.length; i; ) r[--i]();
      }
      function _r(t) {
        return new J(W, !1, t);
      }
      function De(t, r) {
        var i = te;
        return function() {
          var s = bn(), a = te;
          try {
            return Yt(i, !0), t.apply(this, arguments);
          } catch (c) {
            r && r(c);
          } finally {
            Yt(a, !1), s && wn();
          }
        };
      }
      Y(J.prototype, { then: di, _then: function(t, r) {
        pi(this, new Po(null, null, t, r, te));
      }, catch: function(t) {
        if (arguments.length === 1) return this.then(null, t);
        var r = t, i = arguments[1];
        return typeof r == "function" ? this.then(null, function(s) {
          return (s instanceof r ? i : _r)(s);
        }) : this.then(null, function(s) {
          return (s && s.name === r ? i : _r)(s);
        });
      }, finally: function(t) {
        return this.then(function(r) {
          return J.resolve(t()).then(function() {
            return r;
          });
        }, function(r) {
          return J.resolve(t()).then(function() {
            return _r(r);
          });
        });
      }, timeout: function(t, r) {
        var i = this;
        return t < 1 / 0 ? new J(function(s, a) {
          var c = setTimeout(function() {
            return a(new ie.Timeout(r));
          }, t);
          i.then(s, a).finally(clearTimeout.bind(null, c));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && de(J.prototype, Symbol.toStringTag, "Dexie.Promise"), Be.env = Co(), Y(J, { all: function() {
        var t = lt.apply(null, arguments).map(br);
        return new J(function(r, i) {
          t.length === 0 && r([]);
          var s = t.length;
          t.forEach(function(a, c) {
            return J.resolve(a).then(function(d) {
              t[c] = d, --s || r(t);
            }, i);
          });
        });
      }, resolve: function(t) {
        return t instanceof J ? t : t && typeof t.then == "function" ? new J(function(r, i) {
          t.then(r, i);
        }) : new J(W, !0, t);
      }, reject: _r, race: function() {
        var t = lt.apply(null, arguments).map(br);
        return new J(function(r, i) {
          t.map(function(s) {
            return J.resolve(s).then(r, i);
          });
        });
      }, PSD: { get: function() {
        return te;
      }, set: function(t) {
        return te = t;
      } }, totalEchoes: { get: function() {
        return vr;
      } }, newPSD: Wt, usePSD: sn, scheduler: { get: function() {
        return Ue;
      }, set: function(t) {
        Ue = t;
      } }, rejectionMapper: { get: function() {
        return vn;
      }, set: function(t) {
        vn = t;
      } }, follow: function(t, r) {
        return new J(function(i, s) {
          return Wt(function(a, c) {
            var d = te;
            d.unhandleds = [], d.onunhandled = c, d.finalize = K(function() {
              var _, g = this;
              _ = function() {
                g.unhandleds.length === 0 ? a() : c(g.unhandleds[0]);
              }, mr.push(function E() {
                _(), mr.splice(mr.indexOf(E), 1);
              }), ++on, Ue(function() {
                --on == 0 && mi();
              }, []);
            }, d.finalize), t();
          }, r, i, s);
        });
      } }), be && (be.allSettled && de(J, "allSettled", function() {
        var t = lt.apply(null, arguments).map(br);
        return new J(function(r) {
          t.length === 0 && r([]);
          var i = t.length, s = new Array(i);
          t.forEach(function(a, c) {
            return J.resolve(a).then(function(d) {
              return s[c] = { status: "fulfilled", value: d };
            }, function(d) {
              return s[c] = { status: "rejected", reason: d };
            }).then(function() {
              return --i || r(s);
            });
          });
        });
      }), be.any && typeof AggregateError < "u" && de(J, "any", function() {
        var t = lt.apply(null, arguments).map(br);
        return new J(function(r, i) {
          t.length === 0 && i(new AggregateError([]));
          var s = t.length, a = new Array(s);
          t.forEach(function(c, d) {
            return J.resolve(c).then(function(_) {
              return r(_);
            }, function(_) {
              a[d] = _, --s || i(new AggregateError(a));
            });
          });
        });
      }), be.withResolvers && (J.withResolvers = be.withResolvers));
      var Ve = { awaits: 0, echoes: 0, id: 0 }, Gu = 0, yr = [], gr = 0, vr = 0, qu = 0;
      function Wt(t, r, i, s) {
        var a = te, c = Object.create(a);
        return c.parent = a, c.ref = 0, c.global = !1, c.id = ++qu, Be.env, c.env = Ee ? { Promise: J, PromiseProp: { value: J, configurable: !0, writable: !0 }, all: J.all, race: J.race, allSettled: J.allSettled, any: J.any, resolve: J.resolve, reject: J.reject } : {}, r && b(c, r), ++a.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, s = sn(c, t, i, s), c.ref === 0 && c.finalize(), s;
      }
      function En() {
        return Ve.id || (Ve.id = ++Gu), ++Ve.awaits, Ve.echoes += oe, Ve.id;
      }
      function $t() {
        return !!Ve.awaits && (--Ve.awaits == 0 && (Ve.id = 0), Ve.echoes = Ve.awaits * oe, !0);
      }
      function br(t) {
        return Ve.echoes && t && t.constructor === be ? (En(), t.then(function(r) {
          return $t(), r;
        }, function(r) {
          return $t(), je(r);
        })) : t;
      }
      function Vu() {
        var t = yr[yr.length - 1];
        yr.pop(), Yt(t, !1);
      }
      function Yt(t, r) {
        var i, s = te;
        (r ? !Ve.echoes || gr++ && t === te : !gr || --gr && t === te) || queueMicrotask(r ? (function(a) {
          ++vr, Ve.echoes && --Ve.echoes != 0 || (Ve.echoes = Ve.awaits = Ve.id = 0), yr.push(te), Yt(a, !0);
        }).bind(null, t) : Vu), t !== te && (te = t, s === Be && (Be.env = Co()), Ee && (i = Be.env.Promise, r = t.env, (s.global || t.global) && (Object.defineProperty(f, "Promise", r.PromiseProp), i.all = r.all, i.race = r.race, i.resolve = r.resolve, i.reject = r.reject, r.allSettled && (i.allSettled = r.allSettled), r.any && (i.any = r.any))));
      }
      function Co() {
        var t = f.Promise;
        return Ee ? { Promise: t, PromiseProp: Object.getOwnPropertyDescriptor(f, "Promise"), all: t.all, race: t.race, allSettled: t.allSettled, any: t.any, resolve: t.resolve, reject: t.reject } : {};
      }
      function sn(t, r, i, s, a) {
        var c = te;
        try {
          return Yt(t, !0), r(i, s, a);
        } finally {
          Yt(c, !1);
        }
      }
      function Do(t, r, i, s) {
        return typeof t != "function" ? t : function() {
          var a = te;
          i && En(), Yt(r, !0);
          try {
            return t.apply(this, arguments);
          } finally {
            Yt(a, !1), s && queueMicrotask($t);
          }
        };
      }
      function _i(t) {
        Promise === be && Ve.echoes === 0 ? gr === 0 ? t() : enqueueNativeMicroTask(t) : setTimeout(t, 0);
      }
      ("" + _t).indexOf("[native code]") === -1 && (En = $t = p);
      var je = J.reject, un = "￿", Dt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Bo = "String expected.", xn = [], wr = "__dbnames", yi = "readonly", gi = "readwrite";
      function an(t, r) {
        return t ? r ? function() {
          return t.apply(this, arguments) && r.apply(this, arguments);
        } : t : r;
      }
      var Mo = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Er(t) {
        return typeof t != "string" || /\./.test(t) ? function(r) {
          return r;
        } : function(r) {
          return r[t] === void 0 && t in r && delete (r = ht(r))[t], r;
        };
      }
      function jo() {
        throw ie.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function ge(t, r) {
        try {
          var i = Ko(t), s = Ko(r);
          if (i !== s) return i === "Array" ? 1 : s === "Array" ? -1 : i === "binary" ? 1 : s === "binary" ? -1 : i === "string" ? 1 : s === "string" ? -1 : i === "Date" ? 1 : s !== "Date" ? NaN : -1;
          switch (i) {
            case "number":
            case "Date":
            case "string":
              return r < t ? 1 : t < r ? -1 : 0;
            case "binary":
              return function(a, c) {
                for (var d = a.length, _ = c.length, g = d < _ ? d : _, E = 0; E < g; ++E) if (a[E] !== c[E]) return a[E] < c[E] ? -1 : 1;
                return d === _ ? 0 : d < _ ? -1 : 1;
              }(Uo(t), Uo(r));
            case "Array":
              return function(a, c) {
                for (var d = a.length, _ = c.length, g = d < _ ? d : _, E = 0; E < g; ++E) {
                  var O = ge(a[E], c[E]);
                  if (O !== 0) return O;
                }
                return d === _ ? 0 : d < _ ? -1 : 1;
              }(t, r);
          }
        } catch {
        }
        return NaN;
      }
      function Ko(t) {
        var r = typeof t;
        return r != "object" ? r : ArrayBuffer.isView(t) ? "binary" : (t = yn(t), t === "ArrayBuffer" ? "binary" : t);
      }
      function Uo(t) {
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
      var Ho = (Ne.prototype._trans = function(t, r, i) {
        var s = this._tx || te.trans, a = this.name, c = M && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(t === "readonly" ? "read" : "write", " ").concat(this.name));
        function d(E, O, y) {
          if (!y.schema[a]) throw new ie.NotFound("Table " + a + " not part of transaction");
          return r(y.idbtrans, y);
        }
        var _ = bn();
        try {
          var g = s && s.db._novip === this.db._novip ? s === te.trans ? s._promise(t, d, i) : Wt(function() {
            return s._promise(t, d, i);
          }, { trans: s, transless: te.transless || te }) : function E(O, y, I, v) {
            if (O.idbdb && (O._state.openComplete || te.letThrough || O._vip)) {
              var x = O._createTransaction(y, I, O._dbSchema);
              try {
                x.create(), O._state.PR1398_maxLoop = 3;
              } catch (R) {
                return R.name === Gt.InvalidState && O.isOpen() && 0 < --O._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), O.close({ disableAutoOpen: !1 }), O.open().then(function() {
                  return E(O, y, I, v);
                })) : je(R);
              }
              return x._promise(y, function(R, T) {
                return Wt(function() {
                  return te.trans = x, v(R, T, x);
                });
              }).then(function(R) {
                if (y === "readwrite") try {
                  x.idbtrans.commit();
                } catch {
                }
                return y === "readonly" ? R : x._completion.then(function() {
                  return R;
                });
              });
            }
            if (O._state.openComplete) return je(new ie.DatabaseClosed(O._state.dbOpenError));
            if (!O._state.isBeingOpened) {
              if (!O._state.autoOpen) return je(new ie.DatabaseClosed());
              O.open().catch(p);
            }
            return O._state.dbReadyPromise.then(function() {
              return E(O, y, I, v);
            });
          }(this.db, t, [this.name], d);
          return c && (g._consoleTask = c, g = g.catch(function(E) {
            return console.trace(E), je(E);
          })), g;
        } finally {
          _ && wn();
        }
      }, Ne.prototype.get = function(t, r) {
        var i = this;
        return t && t.constructor === Object ? this.where(t).first(r) : t == null ? je(new ie.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(s) {
          return i.core.get({ trans: s, key: t }).then(function(a) {
            return i.hook.reading.fire(a);
          });
        }).then(r);
      }, Ne.prototype.where = function(t) {
        if (typeof t == "string") return new this.db.WhereClause(this, t);
        if (m(t)) return new this.db.WhereClause(this, "[".concat(t.join("+"), "]"));
        var r = h(t);
        if (r.length === 1) return this.where(r[0]).equals(t[r[0]]);
        var i = this.schema.indexes.concat(this.schema.primKey).filter(function(_) {
          if (_.compound && r.every(function(E) {
            return 0 <= _.keyPath.indexOf(E);
          })) {
            for (var g = 0; g < r.length; ++g) if (r.indexOf(_.keyPath[g]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(_, g) {
          return _.keyPath.length - g.keyPath.length;
        })[0];
        if (i && this.db._maxKey !== un) {
          var c = i.keyPath.slice(0, r.length);
          return this.where(c).equals(c.map(function(g) {
            return t[g];
          }));
        }
        !i && M && console.warn("The query ".concat(JSON.stringify(t), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(r.join("+"), "]"));
        var s = this.schema.idxByName;
        function a(_, g) {
          return ge(_, g) === 0;
        }
        var d = r.reduce(function(y, g) {
          var E = y[0], O = y[1], y = s[g], I = t[g];
          return [E || y, E || !y ? an(O, y && y.multi ? function(v) {
            return v = ke(v, g), m(v) && v.some(function(x) {
              return a(I, x);
            });
          } : function(v) {
            return a(I, ke(v, g));
          }) : O];
        }, [null, null]), c = d[0], d = d[1];
        return c ? this.where(c.name).equals(t[c.keyPath]).filter(d) : i ? this.filter(d) : this.where(r).equals("");
      }, Ne.prototype.filter = function(t) {
        return this.toCollection().and(t);
      }, Ne.prototype.count = function(t) {
        return this.toCollection().count(t);
      }, Ne.prototype.offset = function(t) {
        return this.toCollection().offset(t);
      }, Ne.prototype.limit = function(t) {
        return this.toCollection().limit(t);
      }, Ne.prototype.each = function(t) {
        return this.toCollection().each(t);
      }, Ne.prototype.toArray = function(t) {
        return this.toCollection().toArray(t);
      }, Ne.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Ne.prototype.orderBy = function(t) {
        return new this.db.Collection(new this.db.WhereClause(this, m(t) ? "[".concat(t.join("+"), "]") : t));
      }, Ne.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Ne.prototype.mapToClass = function(t) {
        var r, i = this.db, s = this.name;
        function a() {
          return r !== null && r.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = t).prototype instanceof jo && (function(g, E) {
          if (typeof E != "function" && E !== null) throw new TypeError("Class extends value " + String(E) + " is not a constructor or null");
          function O() {
            this.constructor = g;
          }
          o(g, E), g.prototype = E === null ? Object.create(E) : (O.prototype = E.prototype, new O());
        }(a, r = t), Object.defineProperty(a.prototype, "db", { get: function() {
          return i;
        }, enumerable: !1, configurable: !0 }), a.prototype.table = function() {
          return s;
        }, t = a);
        for (var c = /* @__PURE__ */ new Set(), d = t.prototype; d; d = B(d)) Object.getOwnPropertyNames(d).forEach(function(g) {
          return c.add(g);
        });
        function _(g) {
          if (!g) return g;
          var E, O = Object.create(t.prototype);
          for (E in g) if (!c.has(E)) try {
            O[E] = g[E];
          } catch {
          }
          return O;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = _, this.hook("reading", _), t;
      }, Ne.prototype.defineClass = function() {
        return this.mapToClass(function(t) {
          b(this, t);
        });
      }, Ne.prototype.add = function(t, r) {
        var i = this, s = this.schema.primKey, a = s.auto, c = s.keyPath, d = t;
        return c && a && (d = Er(c)(t)), this._trans("readwrite", function(_) {
          return i.core.mutate({ trans: _, type: "add", keys: r != null ? [r] : null, values: [d] });
        }).then(function(_) {
          return _.numFailures ? J.reject(_.failures[0]) : _.lastResult;
        }).then(function(_) {
          if (c) try {
            Te(t, c, _);
          } catch {
          }
          return _;
        });
      }, Ne.prototype.update = function(t, r) {
        return typeof t != "object" || m(t) ? this.where(":id").equals(t).modify(r) : (t = ke(t, this.schema.primKey.keyPath), t === void 0 ? je(new ie.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(t).modify(r));
      }, Ne.prototype.put = function(t, r) {
        var i = this, s = this.schema.primKey, a = s.auto, c = s.keyPath, d = t;
        return c && a && (d = Er(c)(t)), this._trans("readwrite", function(_) {
          return i.core.mutate({ trans: _, type: "put", values: [d], keys: r != null ? [r] : null });
        }).then(function(_) {
          return _.numFailures ? J.reject(_.failures[0]) : _.lastResult;
        }).then(function(_) {
          if (c) try {
            Te(t, c, _);
          } catch {
          }
          return _;
        });
      }, Ne.prototype.delete = function(t) {
        var r = this;
        return this._trans("readwrite", function(i) {
          return r.core.mutate({ trans: i, type: "delete", keys: [t] }).then(function(s) {
            return xr(r, [t], s);
          }).then(function(s) {
            return s.numFailures ? J.reject(s.failures[0]) : void 0;
          });
        });
      }, Ne.prototype.clear = function() {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "deleteRange", range: Mo }).then(function(i) {
            return xr(t, null, i);
          });
        }).then(function(r) {
          return r.numFailures ? J.reject(r.failures[0]) : void 0;
        });
      }, Ne.prototype.bulkGet = function(t) {
        var r = this;
        return this._trans("readonly", function(i) {
          return r.core.getMany({ keys: t, trans: i }).then(function(s) {
            return s.map(function(a) {
              return r.hook.reading.fire(a);
            });
          });
        });
      }, Ne.prototype.bulkAdd = function(t, r, i) {
        var s = this, a = Array.isArray(r) ? r : void 0, c = (i = i || (a ? void 0 : r)) ? i.allKeys : void 0;
        return this._trans("readwrite", function(d) {
          var E = s.schema.primKey, _ = E.auto, E = E.keyPath;
          if (E && a) throw new ie.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== t.length) throw new ie.InvalidArgument("Arguments objects and keys must have the same length");
          var g = t.length, E = E && _ ? t.map(Er(E)) : t;
          return s.core.mutate({ trans: d, type: "add", keys: a, values: E, wantResults: c }).then(function(x) {
            var y = x.numFailures, I = x.results, v = x.lastResult, x = x.failures;
            if (y === 0) return c ? I : v;
            throw new mt("".concat(s.name, ".bulkAdd(): ").concat(y, " of ").concat(g, " operations failed"), x);
          });
        });
      }, Ne.prototype.bulkPut = function(t, r, i) {
        var s = this, a = Array.isArray(r) ? r : void 0, c = (i = i || (a ? void 0 : r)) ? i.allKeys : void 0;
        return this._trans("readwrite", function(d) {
          var E = s.schema.primKey, _ = E.auto, E = E.keyPath;
          if (E && a) throw new ie.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== t.length) throw new ie.InvalidArgument("Arguments objects and keys must have the same length");
          var g = t.length, E = E && _ ? t.map(Er(E)) : t;
          return s.core.mutate({ trans: d, type: "put", keys: a, values: E, wantResults: c }).then(function(x) {
            var y = x.numFailures, I = x.results, v = x.lastResult, x = x.failures;
            if (y === 0) return c ? I : v;
            throw new mt("".concat(s.name, ".bulkPut(): ").concat(y, " of ").concat(g, " operations failed"), x);
          });
        });
      }, Ne.prototype.bulkUpdate = function(t) {
        var r = this, i = this.core, s = t.map(function(d) {
          return d.key;
        }), a = t.map(function(d) {
          return d.changes;
        }), c = [];
        return this._trans("readwrite", function(d) {
          return i.getMany({ trans: d, keys: s, cache: "clone" }).then(function(_) {
            var g = [], E = [];
            t.forEach(function(y, I) {
              var v = y.key, x = y.changes, R = _[I];
              if (R) {
                for (var T = 0, A = Object.keys(x); T < A.length; T++) {
                  var k = A[T], P = x[k];
                  if (k === r.schema.primKey.keyPath) {
                    if (ge(P, v) !== 0) throw new ie.Constraint("Cannot update primary key in bulkUpdate()");
                  } else Te(R, k, P);
                }
                c.push(I), g.push(v), E.push(R);
              }
            });
            var O = g.length;
            return i.mutate({ trans: d, type: "put", keys: g, values: E, updates: { keys: s, changeSpecs: a } }).then(function(y) {
              var I = y.numFailures, v = y.failures;
              if (I === 0) return O;
              for (var x = 0, R = Object.keys(v); x < R.length; x++) {
                var T, A = R[x], k = c[Number(A)];
                k != null && (T = v[A], delete v[A], v[k] = T);
              }
              throw new mt("".concat(r.name, ".bulkUpdate(): ").concat(I, " of ").concat(O, " operations failed"), v);
            });
          });
        });
      }, Ne.prototype.bulkDelete = function(t) {
        var r = this, i = t.length;
        return this._trans("readwrite", function(s) {
          return r.core.mutate({ trans: s, type: "delete", keys: t }).then(function(a) {
            return xr(r, t, a);
          });
        }).then(function(d) {
          var a = d.numFailures, c = d.lastResult, d = d.failures;
          if (a === 0) return c;
          throw new mt("".concat(r.name, ".bulkDelete(): ").concat(a, " of ").concat(i, " operations failed"), d);
        });
      }, Ne);
      function Ne() {
      }
      function Ln(t) {
        function r(d, _) {
          if (_) {
            for (var g = arguments.length, E = new Array(g - 1); --g; ) E[g - 1] = arguments[g];
            return i[d].subscribe.apply(null, E), t;
          }
          if (typeof d == "string") return i[d];
        }
        var i = {};
        r.addEventType = c;
        for (var s = 1, a = arguments.length; s < a; ++s) c(arguments[s]);
        return r;
        function c(d, _, g) {
          if (typeof d != "object") {
            var E;
            _ = _ || V;
            var O = { subscribers: [], fire: g = g || p, subscribe: function(y) {
              O.subscribers.indexOf(y) === -1 && (O.subscribers.push(y), O.fire = _(O.fire, y));
            }, unsubscribe: function(y) {
              O.subscribers = O.subscribers.filter(function(I) {
                return I !== y;
              }), O.fire = O.subscribers.reduce(_, g);
            } };
            return i[d] = r[d] = O;
          }
          h(E = d).forEach(function(y) {
            var I = E[y];
            if (m(I)) c(y, E[y][0], E[y][1]);
            else {
              if (I !== "asap") throw new ie.InvalidArgument("Invalid event config");
              var v = c(y, w, function() {
                for (var x = arguments.length, R = new Array(x); x--; ) R[x] = arguments[x];
                v.subscribers.forEach(function(T) {
                  Ie(function() {
                    T.apply(null, R);
                  });
                });
              });
            }
          });
        }
      }
      function Gn(t, r) {
        return pe(r).from({ prototype: t }), r;
      }
      function On(t, r) {
        return !(t.filter || t.algorithm || t.or) && (r ? t.justLimit : !t.replayFilter);
      }
      function vi(t, r) {
        t.filter = an(t.filter, r);
      }
      function bi(t, r, i) {
        var s = t.replayFilter;
        t.replayFilter = s ? function() {
          return an(s(), r());
        } : r, t.justLimit = i && !s;
      }
      function Or(t, r) {
        if (t.isPrimKey) return r.primaryKey;
        var i = r.getIndexByKeyPath(t.index);
        if (!i) throw new ie.Schema("KeyPath " + t.index + " on object store " + r.name + " is not indexed");
        return i;
      }
      function Fo(t, r, i) {
        var s = Or(t, r.schema);
        return r.openCursor({ trans: i, values: !t.keysOnly, reverse: t.dir === "prev", unique: !!t.unique, query: { index: s, range: t.range } });
      }
      function Tr(t, r, i, s) {
        var a = t.replayFilter ? an(t.filter, t.replayFilter()) : t.filter;
        if (t.or) {
          var c = {}, d = function(_, g, E) {
            var O, y;
            a && !a(g, E, function(I) {
              return g.stop(I);
            }, function(I) {
              return g.fail(I);
            }) || ((y = "" + (O = g.primaryKey)) == "[object ArrayBuffer]" && (y = "" + new Uint8Array(O)), D(c, y) || (c[y] = !0, r(_, g, E)));
          };
          return Promise.all([t.or._iterate(d, i), Lo(Fo(t, s, i), t.algorithm, d, !t.keysOnly && t.valueMapper)]);
        }
        return Lo(Fo(t, s, i), an(t.algorithm, a), r, !t.keysOnly && t.valueMapper);
      }
      function Lo(t, r, i, s) {
        var a = De(s ? function(c, d, _) {
          return i(s(c), d, _);
        } : i);
        return t.then(function(c) {
          if (c) return c.start(function() {
            var d = function() {
              return c.continue();
            };
            r && !r(c, function(_) {
              return d = _;
            }, function(_) {
              c.stop(_), d = p;
            }, function(_) {
              c.fail(_), d = p;
            }) || a(c.value, c, function(_) {
              return d = _;
            }), d();
          });
        });
      }
      var qn = (Go.prototype.execute = function(t) {
        var r = this["@@propmod"];
        if (r.add !== void 0) {
          var i = r.add;
          if (m(i)) return l(l([], m(t) ? t : [], !0), i).sort();
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
          if (m(s)) return m(t) ? t.filter(function(a) {
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
      }, Go);
      function Go(t) {
        this["@@propmod"] = t;
      }
      var Wu = (Oe.prototype._read = function(t, r) {
        var i = this._ctx;
        return i.error ? i.table._trans(null, je.bind(null, i.error)) : i.table._trans("readonly", t).then(r);
      }, Oe.prototype._write = function(t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, je.bind(null, r.error)) : r.table._trans("readwrite", t, "locked");
      }, Oe.prototype._addAlgorithm = function(t) {
        var r = this._ctx;
        r.algorithm = an(r.algorithm, t);
      }, Oe.prototype._iterate = function(t, r) {
        return Tr(this._ctx, t, r, this._ctx.table.core);
      }, Oe.prototype.clone = function(t) {
        var r = Object.create(this.constructor.prototype), i = Object.create(this._ctx);
        return t && b(i, t), r._ctx = i, r;
      }, Oe.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Oe.prototype.each = function(t) {
        var r = this._ctx;
        return this._read(function(i) {
          return Tr(r, t, i, r.table.core);
        });
      }, Oe.prototype.count = function(t) {
        var r = this;
        return this._read(function(i) {
          var s = r._ctx, a = s.table.core;
          if (On(s, !0)) return a.count({ trans: i, query: { index: Or(s, a.schema), range: s.range } }).then(function(d) {
            return Math.min(d, s.limit);
          });
          var c = 0;
          return Tr(s, function() {
            return ++c, !1;
          }, i, a).then(function() {
            return c;
          });
        }).then(t);
      }, Oe.prototype.sortBy = function(t, r) {
        var i = t.split(".").reverse(), s = i[0], a = i.length - 1;
        function c(g, E) {
          return E ? c(g[i[E]], E - 1) : g[s];
        }
        var d = this._ctx.dir === "next" ? 1 : -1;
        function _(g, E) {
          return ge(c(g, a), c(E, a)) * d;
        }
        return this.toArray(function(g) {
          return g.sort(_);
        }).then(r);
      }, Oe.prototype.toArray = function(t) {
        var r = this;
        return this._read(function(i) {
          var s = r._ctx;
          if (s.dir === "next" && On(s, !0) && 0 < s.limit) {
            var a = s.valueMapper, c = Or(s, s.table.core.schema);
            return s.table.core.query({ trans: i, limit: s.limit, values: !0, query: { index: c, range: s.range } }).then(function(_) {
              return _ = _.result, a ? _.map(a) : _;
            });
          }
          var d = [];
          return Tr(s, function(_) {
            return d.push(_);
          }, i, s.table.core).then(function() {
            return d;
          });
        }, t);
      }, Oe.prototype.offset = function(t) {
        var r = this._ctx;
        return t <= 0 || (r.offset += t, On(r) ? bi(r, function() {
          var i = t;
          return function(s, a) {
            return i === 0 || (i === 1 ? --i : a(function() {
              s.advance(i), i = 0;
            }), !1);
          };
        }) : bi(r, function() {
          var i = t;
          return function() {
            return --i < 0;
          };
        })), this;
      }, Oe.prototype.limit = function(t) {
        return this._ctx.limit = Math.min(this._ctx.limit, t), bi(this._ctx, function() {
          var r = t;
          return function(i, s, a) {
            return --r <= 0 && s(a), 0 <= r;
          };
        }, !0), this;
      }, Oe.prototype.until = function(t, r) {
        return vi(this._ctx, function(i, s, a) {
          return !t(i.value) || (s(a), r);
        }), this;
      }, Oe.prototype.first = function(t) {
        return this.limit(1).toArray(function(r) {
          return r[0];
        }).then(t);
      }, Oe.prototype.last = function(t) {
        return this.reverse().first(t);
      }, Oe.prototype.filter = function(t) {
        var r;
        return vi(this._ctx, function(i) {
          return t(i.value);
        }), (r = this._ctx).isMatch = an(r.isMatch, t), this;
      }, Oe.prototype.and = function(t) {
        return this.filter(t);
      }, Oe.prototype.or = function(t) {
        return new this.db.WhereClause(this._ctx.table, t, this);
      }, Oe.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Oe.prototype.desc = function() {
        return this.reverse();
      }, Oe.prototype.eachKey = function(t) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(i, s) {
          t(s.key, s);
        });
      }, Oe.prototype.eachUniqueKey = function(t) {
        return this._ctx.unique = "unique", this.eachKey(t);
      }, Oe.prototype.eachPrimaryKey = function(t) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(i, s) {
          t(s.primaryKey, s);
        });
      }, Oe.prototype.keys = function(t) {
        var r = this._ctx;
        r.keysOnly = !r.isMatch;
        var i = [];
        return this.each(function(s, a) {
          i.push(a.key);
        }).then(function() {
          return i;
        }).then(t);
      }, Oe.prototype.primaryKeys = function(t) {
        var r = this._ctx;
        if (r.dir === "next" && On(r, !0) && 0 < r.limit) return this._read(function(s) {
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
      }, Oe.prototype.uniqueKeys = function(t) {
        return this._ctx.unique = "unique", this.keys(t);
      }, Oe.prototype.firstKey = function(t) {
        return this.limit(1).keys(function(r) {
          return r[0];
        }).then(t);
      }, Oe.prototype.lastKey = function(t) {
        return this.reverse().firstKey(t);
      }, Oe.prototype.distinct = function() {
        var t = this._ctx, t = t.index && t.table.schema.idxByName[t.index];
        if (!t || !t.multi) return this;
        var r = {};
        return vi(this._ctx, function(a) {
          var s = a.primaryKey.toString(), a = D(r, s);
          return r[s] = !0, !a;
        }), this;
      }, Oe.prototype.modify = function(t) {
        var r = this, i = this._ctx;
        return this._write(function(s) {
          var a, c, d;
          d = typeof t == "function" ? t : (a = h(t), c = a.length, function(A) {
            for (var k = !1, P = 0; P < c; ++P) {
              var N = a[P], H = t[N], q = ke(A, N);
              H instanceof qn ? (Te(A, N, H.execute(q)), k = !0) : q !== H && (Te(A, N, H), k = !0);
            }
            return k;
          });
          var _ = i.table.core, y = _.schema.primaryKey, g = y.outbound, E = y.extractKey, O = 200, y = r.db._options.modifyChunkSize;
          y && (O = typeof y == "object" ? y[_.name] || y["*"] || 200 : y);
          function I(A, N) {
            var P = N.failures, N = N.numFailures;
            x += A - N;
            for (var H = 0, q = h(P); H < q.length; H++) {
              var F = q[H];
              v.push(P[F]);
            }
          }
          var v = [], x = 0, R = [], T = t === qo;
          return r.clone().primaryKeys().then(function(A) {
            function k(N) {
              var H = Math.min(O, A.length - N), q = A.slice(N, N + H);
              return (T ? Promise.resolve([]) : _.getMany({ trans: s, keys: q, cache: "immutable" })).then(function(F) {
                var L = [], z = [], $ = g ? [] : null, Q = T ? q : [];
                if (!T) for (var _e = 0; _e < H; ++_e) {
                  var we = F[_e], ce = { value: ht(we), primKey: A[N + _e] };
                  d.call(ce, ce.value, ce) !== !1 && (ce.value == null ? Q.push(A[N + _e]) : g || ge(E(we), E(ce.value)) === 0 ? (z.push(ce.value), g && $.push(A[N + _e])) : (Q.push(A[N + _e]), L.push(ce.value)));
                }
                return Promise.resolve(0 < L.length && _.mutate({ trans: s, type: "add", values: L }).then(function(Me) {
                  for (var le in Me.failures) Q.splice(parseInt(le), 1);
                  I(L.length, Me);
                })).then(function() {
                  return (0 < z.length || P && typeof t == "object") && _.mutate({ trans: s, type: "put", keys: $, values: z, criteria: P, changeSpec: typeof t != "function" && t, isAdditionalChunk: 0 < N }).then(function(Me) {
                    return I(z.length, Me);
                  });
                }).then(function() {
                  return (0 < Q.length || P && T) && _.mutate({ trans: s, type: "delete", keys: Q, criteria: P, isAdditionalChunk: 0 < N }).then(function(Me) {
                    return xr(i.table, Q, Me);
                  }).then(function(Me) {
                    return I(Q.length, Me);
                  });
                }).then(function() {
                  return A.length > N + H && k(N + O);
                });
              });
            }
            var P = On(i) && i.limit === 1 / 0 && (typeof t != "function" || T) && { index: i.index, range: i.range };
            return k(0).then(function() {
              if (0 < v.length) throw new gn("Error modifying one or more objects", v, x, R);
              return A.length;
            });
          });
        });
      }, Oe.prototype.delete = function() {
        var t = this._ctx, r = t.range;
        return !On(t) || t.table.schema.yProps || !t.isPrimKey && r.type !== 3 ? this.modify(qo) : this._write(function(i) {
          var s = t.table.core.schema.primaryKey, a = r;
          return t.table.core.count({ trans: i, query: { index: s, range: a } }).then(function(c) {
            return t.table.core.mutate({ trans: i, type: "deleteRange", range: a }).then(function(g) {
              var _ = g.failures, g = g.numFailures;
              if (g) throw new gn("Could not delete some values", Object.keys(_).map(function(E) {
                return _[E];
              }), c - g);
              return c - g;
            });
          });
        });
      }, Oe);
      function Oe() {
      }
      var qo = function(t, r) {
        return r.value = null;
      };
      function $u(t, r) {
        return t < r ? -1 : t === r ? 0 : 1;
      }
      function Yu(t, r) {
        return r < t ? -1 : t === r ? 0 : 1;
      }
      function ft(t, r, i) {
        return t = t instanceof Wo ? new t.Collection(t) : t, t._ctx.error = new (i || TypeError)(r), t;
      }
      function Tn(t) {
        return new t.Collection(t, function() {
          return Vo("");
        }).limit(0);
      }
      function Rr(t, r, i, s) {
        var a, c, d, _, g, E, O, y = i.length;
        if (!i.every(function(x) {
          return typeof x == "string";
        })) return ft(t, Bo);
        function I(x) {
          a = x === "next" ? function(T) {
            return T.toUpperCase();
          } : function(T) {
            return T.toLowerCase();
          }, c = x === "next" ? function(T) {
            return T.toLowerCase();
          } : function(T) {
            return T.toUpperCase();
          }, d = x === "next" ? $u : Yu;
          var R = i.map(function(T) {
            return { lower: c(T), upper: a(T) };
          }).sort(function(T, A) {
            return d(T.lower, A.lower);
          });
          _ = R.map(function(T) {
            return T.upper;
          }), g = R.map(function(T) {
            return T.lower;
          }), O = (E = x) === "next" ? "" : s;
        }
        I("next"), t = new t.Collection(t, function() {
          return Xt(_[0], g[y - 1] + s);
        }), t._ondirectionchange = function(x) {
          I(x);
        };
        var v = 0;
        return t._addAlgorithm(function(x, R, T) {
          var A = x.key;
          if (typeof A != "string") return !1;
          var k = c(A);
          if (r(k, g, v)) return !0;
          for (var P = null, N = v; N < y; ++N) {
            var H = function(q, F, L, z, $, Q) {
              for (var _e = Math.min(q.length, z.length), we = -1, ce = 0; ce < _e; ++ce) {
                var Me = F[ce];
                if (Me !== z[ce]) return $(q[ce], L[ce]) < 0 ? q.substr(0, ce) + L[ce] + L.substr(ce + 1) : $(q[ce], z[ce]) < 0 ? q.substr(0, ce) + z[ce] + L.substr(ce + 1) : 0 <= we ? q.substr(0, we) + F[we] + L.substr(we + 1) : null;
                $(q[ce], Me) < 0 && (we = ce);
              }
              return _e < z.length && Q === "next" ? q + L.substr(q.length) : _e < q.length && Q === "prev" ? q.substr(0, L.length) : we < 0 ? null : q.substr(0, we) + z[we] + L.substr(we + 1);
            }(A, k, _[N], g[N], d, E);
            H === null && P === null ? v = N + 1 : (P === null || 0 < d(P, H)) && (P = H);
          }
          return R(P !== null ? function() {
            x.continue(P + O);
          } : T), !1;
        }), t;
      }
      function Xt(t, r, i, s) {
        return { type: 2, lower: t, upper: r, lowerOpen: i, upperOpen: s };
      }
      function Vo(t) {
        return { type: 1, lower: t, upper: t };
      }
      var Wo = (Object.defineProperty(We.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), We.prototype.between = function(t, r, i, s) {
        i = i !== !1, s = s === !0;
        try {
          return 0 < this._cmp(t, r) || this._cmp(t, r) === 0 && (i || s) && (!i || !s) ? Tn(this) : new this.Collection(this, function() {
            return Xt(t, r, !i, !s);
          });
        } catch {
          return ft(this, Dt);
        }
      }, We.prototype.equals = function(t) {
        return t == null ? ft(this, Dt) : new this.Collection(this, function() {
          return Vo(t);
        });
      }, We.prototype.above = function(t) {
        return t == null ? ft(this, Dt) : new this.Collection(this, function() {
          return Xt(t, void 0, !0);
        });
      }, We.prototype.aboveOrEqual = function(t) {
        return t == null ? ft(this, Dt) : new this.Collection(this, function() {
          return Xt(t, void 0, !1);
        });
      }, We.prototype.below = function(t) {
        return t == null ? ft(this, Dt) : new this.Collection(this, function() {
          return Xt(void 0, t, !1, !0);
        });
      }, We.prototype.belowOrEqual = function(t) {
        return t == null ? ft(this, Dt) : new this.Collection(this, function() {
          return Xt(void 0, t);
        });
      }, We.prototype.startsWith = function(t) {
        return typeof t != "string" ? ft(this, Bo) : this.between(t, t + un, !0, !0);
      }, We.prototype.startsWithIgnoreCase = function(t) {
        return t === "" ? this.startsWith(t) : Rr(this, function(r, i) {
          return r.indexOf(i[0]) === 0;
        }, [t], un);
      }, We.prototype.equalsIgnoreCase = function(t) {
        return Rr(this, function(r, i) {
          return r === i[0];
        }, [t], "");
      }, We.prototype.anyOfIgnoreCase = function() {
        var t = lt.apply(at, arguments);
        return t.length === 0 ? Tn(this) : Rr(this, function(r, i) {
          return i.indexOf(r) !== -1;
        }, t, "");
      }, We.prototype.startsWithAnyOfIgnoreCase = function() {
        var t = lt.apply(at, arguments);
        return t.length === 0 ? Tn(this) : Rr(this, function(r, i) {
          return i.some(function(s) {
            return r.indexOf(s) === 0;
          });
        }, t, un);
      }, We.prototype.anyOf = function() {
        var t = this, r = lt.apply(at, arguments), i = this._cmp;
        try {
          r.sort(i);
        } catch {
          return ft(this, Dt);
        }
        if (r.length === 0) return Tn(this);
        var s = new this.Collection(this, function() {
          return Xt(r[0], r[r.length - 1]);
        });
        s._ondirectionchange = function(c) {
          i = c === "next" ? t._ascending : t._descending, r.sort(i);
        };
        var a = 0;
        return s._addAlgorithm(function(c, d, _) {
          for (var g = c.key; 0 < i(g, r[a]); ) if (++a === r.length) return d(_), !1;
          return i(g, r[a]) === 0 || (d(function() {
            c.continue(r[a]);
          }), !1);
        }), s;
      }, We.prototype.notEqual = function(t) {
        return this.inAnyRange([[-1 / 0, t], [t, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, We.prototype.noneOf = function() {
        var t = lt.apply(at, arguments);
        if (t.length === 0) return new this.Collection(this);
        try {
          t.sort(this._ascending);
        } catch {
          return ft(this, Dt);
        }
        var r = t.reduce(function(i, s) {
          return i ? i.concat([[i[i.length - 1][1], s]]) : [[-1 / 0, s]];
        }, null);
        return r.push([t[t.length - 1], this.db._maxKey]), this.inAnyRange(r, { includeLowers: !1, includeUppers: !1 });
      }, We.prototype.inAnyRange = function(A, r) {
        var i = this, s = this._cmp, a = this._ascending, c = this._descending, d = this._min, _ = this._max;
        if (A.length === 0) return Tn(this);
        if (!A.every(function(k) {
          return k[0] !== void 0 && k[1] !== void 0 && a(k[0], k[1]) <= 0;
        })) return ft(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", ie.InvalidArgument);
        var g = !r || r.includeLowers !== !1, E = r && r.includeUppers === !0, O, y = a;
        function I(k, P) {
          return y(k[0], P[0]);
        }
        try {
          (O = A.reduce(function(k, P) {
            for (var N = 0, H = k.length; N < H; ++N) {
              var q = k[N];
              if (s(P[0], q[1]) < 0 && 0 < s(P[1], q[0])) {
                q[0] = d(q[0], P[0]), q[1] = _(q[1], P[1]);
                break;
              }
            }
            return N === H && k.push(P), k;
          }, [])).sort(I);
        } catch {
          return ft(this, Dt);
        }
        var v = 0, x = E ? function(k) {
          return 0 < a(k, O[v][1]);
        } : function(k) {
          return 0 <= a(k, O[v][1]);
        }, R = g ? function(k) {
          return 0 < c(k, O[v][0]);
        } : function(k) {
          return 0 <= c(k, O[v][0]);
        }, T = x, A = new this.Collection(this, function() {
          return Xt(O[0][0], O[O.length - 1][1], !g, !E);
        });
        return A._ondirectionchange = function(k) {
          y = k === "next" ? (T = x, a) : (T = R, c), O.sort(I);
        }, A._addAlgorithm(function(k, P, N) {
          for (var H, q = k.key; T(q); ) if (++v === O.length) return P(N), !1;
          return !x(H = q) && !R(H) || (i._cmp(q, O[v][1]) === 0 || i._cmp(q, O[v][0]) === 0 || P(function() {
            y === a ? k.continue(O[v][0]) : k.continue(O[v][1]);
          }), !1);
        }), A;
      }, We.prototype.startsWithAnyOf = function() {
        var t = lt.apply(at, arguments);
        return t.every(function(r) {
          return typeof r == "string";
        }) ? t.length === 0 ? Tn(this) : this.inAnyRange(t.map(function(r) {
          return [r, r + un];
        })) : ft(this, "startsWithAnyOf() only works with strings");
      }, We);
      function We() {
      }
      function Tt(t) {
        return De(function(r) {
          return Vn(r), t(r.target.error), !1;
        });
      }
      function Vn(t) {
        t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault();
      }
      var Wn = "storagemutated", wi = "x-storagemutated-1", zt = Ln(null, Wn), Xu = (Rt.prototype._lock = function() {
        return ne(!te.global), ++this._reculock, this._reculock !== 1 || te.global || (te.lockOwnerFor = this), this;
      }, Rt.prototype._unlock = function() {
        if (ne(!te.global), --this._reculock == 0) for (te.global || (te.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var t = this._blockedFuncs.shift();
          try {
            sn(t[1], t[0]);
          } catch {
          }
        }
        return this;
      }, Rt.prototype._locked = function() {
        return this._reculock && te.lockOwnerFor !== this;
      }, Rt.prototype.create = function(t) {
        var r = this;
        if (!this.mode) return this;
        var i = this.db.idbdb, s = this.db._state.dbOpenError;
        if (ne(!this.idbtrans), !t && !i) switch (s && s.name) {
          case "DatabaseClosedError":
            throw new ie.DatabaseClosed(s);
          case "MissingAPIError":
            throw new ie.MissingAPI(s.message, s);
          default:
            throw new ie.OpenFailed(s);
        }
        if (!this.active) throw new ie.TransactionInactive();
        return ne(this._completion._state === null), (t = this.idbtrans = t || (this.db.core || i).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = De(function(a) {
          Vn(a), r._reject(t.error);
        }), t.onabort = De(function(a) {
          Vn(a), r.active && r._reject(new ie.Abort(t.error)), r.active = !1, r.on("abort").fire(a);
        }), t.oncomplete = De(function() {
          r.active = !1, r._resolve(), "mutatedParts" in t && zt.storagemutated.fire(t.mutatedParts);
        }), this;
      }, Rt.prototype._promise = function(t, r, i) {
        var s = this;
        if (t === "readwrite" && this.mode !== "readwrite") return je(new ie.ReadOnly("Transaction is readonly"));
        if (!this.active) return je(new ie.TransactionInactive());
        if (this._locked()) return new J(function(c, d) {
          s._blockedFuncs.push([function() {
            s._promise(t, r, i).then(c, d);
          }, te]);
        });
        if (i) return Wt(function() {
          var c = new J(function(d, _) {
            s._lock();
            var g = r(d, _, s);
            g && g.then && g.then(d, _);
          });
          return c.finally(function() {
            return s._unlock();
          }), c._lib = !0, c;
        });
        var a = new J(function(c, d) {
          var _ = r(c, d, s);
          _ && _.then && _.then(c, d);
        });
        return a._lib = !0, a;
      }, Rt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Rt.prototype.waitFor = function(t) {
        var r, i = this._root(), s = J.resolve(t);
        i._waitingFor ? i._waitingFor = i._waitingFor.then(function() {
          return s;
        }) : (i._waitingFor = s, i._waitingQueue = [], r = i.idbtrans.objectStore(i.storeNames[0]), function c() {
          for (++i._spinCount; i._waitingQueue.length; ) i._waitingQueue.shift()();
          i._waitingFor && (r.get(-1 / 0).onsuccess = c);
        }());
        var a = i._waitingFor;
        return new J(function(c, d) {
          s.then(function(_) {
            return i._waitingQueue.push(De(c.bind(null, _)));
          }, function(_) {
            return i._waitingQueue.push(De(d.bind(null, _)));
          }).finally(function() {
            i._waitingFor === a && (i._waitingFor = null);
          });
        });
      }, Rt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new ie.Abort()));
      }, Rt.prototype.table = function(t) {
        var r = this._memoizedTables || (this._memoizedTables = {});
        if (D(r, t)) return r[t];
        var i = this.schema[t];
        if (!i) throw new ie.NotFound("Table " + t + " not part of transaction");
        return i = new this.db.Table(t, i, this), i.core = this.db.core.table(t), r[t] = i;
      }, Rt);
      function Rt() {
      }
      function Ei(t, r, i, s, a, c, d, _) {
        return { name: t, keyPath: r, unique: i, multi: s, auto: a, compound: c, src: (i && !d ? "&" : "") + (s ? "*" : "") + (a ? "++" : "") + $o(r), type: _ };
      }
      function $o(t) {
        return typeof t == "string" ? t : t ? "[" + [].join.call(t, "+") + "]" : "";
      }
      function xi(t, r, i) {
        return { name: t, primKey: r, indexes: i, mappedClass: null, idxByName: (s = function(a) {
          return [a.name, a];
        }, i.reduce(function(a, c, d) {
          return d = s(c, d), d && (a[d[0]] = d[1]), a;
        }, {})) };
        var s;
      }
      var $n = function(t) {
        try {
          return t.only([[]]), $n = function() {
            return [[]];
          }, [[]];
        } catch {
          return $n = function() {
            return un;
          }, un;
        }
      };
      function Oi(t) {
        return t == null ? function() {
        } : typeof t == "string" ? (r = t).split(".").length === 1 ? function(i) {
          return i[r];
        } : function(i) {
          return ke(i, r);
        } : function(i) {
          return ke(i, t);
        };
        var r;
      }
      function Yo(t) {
        return [].slice.call(t);
      }
      var zu = 0;
      function Yn(t) {
        return t == null ? ":id" : typeof t == "string" ? t : "[".concat(t.join("+"), "]");
      }
      function Ju(t, r, g) {
        function s(T) {
          if (T.type === 3) return null;
          if (T.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var v = T.lower, x = T.upper, R = T.lowerOpen, T = T.upperOpen;
          return v === void 0 ? x === void 0 ? null : r.upperBound(x, !!T) : x === void 0 ? r.lowerBound(v, !!R) : r.bound(v, x, !!R, !!T);
        }
        function a(I) {
          var v, x = I.name;
          return { name: x, schema: I, mutate: function(R) {
            var T = R.trans, A = R.type, k = R.keys, P = R.values, N = R.range;
            return new Promise(function(H, q) {
              H = De(H);
              var F = T.objectStore(x), L = F.keyPath == null, z = A === "put" || A === "add";
              if (!z && A !== "delete" && A !== "deleteRange") throw new Error("Invalid operation type: " + A);
              var $, Q = (k || P || { length: 1 }).length;
              if (k && P && k.length !== P.length) throw new Error("Given keys array must have same length as given values array.");
              if (Q === 0) return H({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function _e(rt) {
                ++Me, Vn(rt);
              }
              var we = [], ce = [], Me = 0;
              if (A === "deleteRange") {
                if (N.type === 4) return H({ numFailures: Me, failures: ce, results: [], lastResult: void 0 });
                N.type === 3 ? we.push($ = F.clear()) : we.push($ = F.delete(s(N)));
              } else {
                var L = z ? L ? [P, k] : [P, null] : [k, null], le = L[0], Qe = L[1];
                if (z) for (var Ze = 0; Ze < Q; ++Ze) we.push($ = Qe && Qe[Ze] !== void 0 ? F[A](le[Ze], Qe[Ze]) : F[A](le[Ze])), $.onerror = _e;
                else for (Ze = 0; Ze < Q; ++Ze) we.push($ = F[A](le[Ze])), $.onerror = _e;
              }
              function Kr(rt) {
                rt = rt.target.result, we.forEach(function(fn, Li) {
                  return fn.error != null && (ce[Li] = fn.error);
                }), H({ numFailures: Me, failures: ce, results: A === "delete" ? k : we.map(function(fn) {
                  return fn.result;
                }), lastResult: rt });
              }
              $.onerror = function(rt) {
                _e(rt), Kr(rt);
              }, $.onsuccess = Kr;
            });
          }, getMany: function(R) {
            var T = R.trans, A = R.keys;
            return new Promise(function(k, P) {
              k = De(k);
              for (var N, H = T.objectStore(x), q = A.length, F = new Array(q), L = 0, z = 0, $ = function(we) {
                we = we.target, F[we._pos] = we.result, ++z === L && k(F);
              }, Q = Tt(P), _e = 0; _e < q; ++_e) A[_e] != null && ((N = H.get(A[_e]))._pos = _e, N.onsuccess = $, N.onerror = Q, ++L);
              L === 0 && k(F);
            });
          }, get: function(R) {
            var T = R.trans, A = R.key;
            return new Promise(function(k, P) {
              k = De(k);
              var N = T.objectStore(x).get(A);
              N.onsuccess = function(H) {
                return k(H.target.result);
              }, N.onerror = Tt(P);
            });
          }, query: (v = E, function(R) {
            return new Promise(function(T, A) {
              T = De(T);
              var k, P, N, L = R.trans, H = R.values, q = R.limit, $ = R.query, F = q === 1 / 0 ? void 0 : q, z = $.index, $ = $.range, L = L.objectStore(x), z = z.isPrimaryKey ? L : L.index(z.name), $ = s($);
              if (q === 0) return T({ result: [] });
              v ? ((F = H ? z.getAll($, F) : z.getAllKeys($, F)).onsuccess = function(Q) {
                return T({ result: Q.target.result });
              }, F.onerror = Tt(A)) : (k = 0, P = !H && "openKeyCursor" in z ? z.openKeyCursor($) : z.openCursor($), N = [], P.onsuccess = function(Q) {
                var _e = P.result;
                return _e ? (N.push(H ? _e.value : _e.primaryKey), ++k === q ? T({ result: N }) : void _e.continue()) : T({ result: N });
              }, P.onerror = Tt(A));
            });
          }), openCursor: function(R) {
            var T = R.trans, A = R.values, k = R.query, P = R.reverse, N = R.unique;
            return new Promise(function(H, q) {
              H = De(H);
              var z = k.index, F = k.range, L = T.objectStore(x), L = z.isPrimaryKey ? L : L.index(z.name), z = P ? N ? "prevunique" : "prev" : N ? "nextunique" : "next", $ = !A && "openKeyCursor" in L ? L.openKeyCursor(s(F), z) : L.openCursor(s(F), z);
              $.onerror = Tt(q), $.onsuccess = De(function(Q) {
                var _e, we, ce, Me, le = $.result;
                le ? (le.___id = ++zu, le.done = !1, _e = le.continue.bind(le), we = (we = le.continuePrimaryKey) && we.bind(le), ce = le.advance.bind(le), Me = function() {
                  throw new Error("Cursor not stopped");
                }, le.trans = T, le.stop = le.continue = le.continuePrimaryKey = le.advance = function() {
                  throw new Error("Cursor not started");
                }, le.fail = De(q), le.next = function() {
                  var Qe = this, Ze = 1;
                  return this.start(function() {
                    return Ze-- ? Qe.continue() : Qe.stop();
                  }).then(function() {
                    return Qe;
                  });
                }, le.start = function(Qe) {
                  function Ze() {
                    if ($.result) try {
                      Qe();
                    } catch (rt) {
                      le.fail(rt);
                    }
                    else le.done = !0, le.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, le.stop();
                  }
                  var Kr = new Promise(function(rt, fn) {
                    rt = De(rt), $.onerror = Tt(fn), le.fail = fn, le.stop = function(Li) {
                      le.stop = le.continue = le.continuePrimaryKey = le.advance = Me, rt(Li);
                    };
                  });
                  return $.onsuccess = De(function(rt) {
                    $.onsuccess = Ze, Ze();
                  }), le.continue = _e, le.continuePrimaryKey = we, le.advance = ce, Ze(), Kr;
                }, H(le)) : H(null);
              }, q);
            });
          }, count: function(R) {
            var T = R.query, A = R.trans, k = T.index, P = T.range;
            return new Promise(function(N, H) {
              var q = A.objectStore(x), F = k.isPrimaryKey ? q : q.index(k.name), q = s(P), F = q ? F.count(q) : F.count();
              F.onsuccess = De(function(L) {
                return N(L.target.result);
              }), F.onerror = Tt(H);
            });
          } };
        }
        var c, d, _, O = (d = g, _ = Yo((c = t).objectStoreNames), { schema: { name: c.name, tables: _.map(function(I) {
          return d.objectStore(I);
        }).map(function(I) {
          var v = I.keyPath, T = I.autoIncrement, x = m(v), R = {}, T = { name: I.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: v == null, compound: x, keyPath: v, autoIncrement: T, unique: !0, extractKey: Oi(v) }, indexes: Yo(I.indexNames).map(function(A) {
            return I.index(A);
          }).map(function(N) {
            var k = N.name, P = N.unique, H = N.multiEntry, N = N.keyPath, H = { name: k, compound: m(N), keyPath: N, unique: P, multiEntry: H, extractKey: Oi(N) };
            return R[Yn(N)] = H;
          }), getIndexByKeyPath: function(A) {
            return R[Yn(A)];
          } };
          return R[":id"] = T.primaryKey, v != null && (R[Yn(v)] = T.primaryKey), T;
        }) }, hasGetAll: 0 < _.length && "getAll" in d.objectStore(_[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), g = O.schema, E = O.hasGetAll, O = g.tables.map(a), y = {};
        return O.forEach(function(I) {
          return y[I.name] = I;
        }), { stack: "dbcore", transaction: t.transaction.bind(t), table: function(I) {
          if (!y[I]) throw new Error("Table '".concat(I, "' not found"));
          return y[I];
        }, MIN_KEY: -1 / 0, MAX_KEY: $n(r), schema: g };
      }
      function Qu(t, r, i, s) {
        var a = i.IDBKeyRange;
        return i.indexedDB, { dbcore: (s = Ju(r, a, s), t.dbcore.reduce(function(c, d) {
          return d = d.create, u(u({}, c), d(c));
        }, s)) };
      }
      function Ir(t, s) {
        var i = s.db, s = Qu(t._middlewares, i, t._deps, s);
        t.core = s.dbcore, t.tables.forEach(function(a) {
          var c = a.name;
          t.core.schema.tables.some(function(d) {
            return d.name === c;
          }) && (a.core = t.core.table(c), t[c] instanceof t.Table && (t[c].core = a.core));
        });
      }
      function Ar(t, r, i, s) {
        i.forEach(function(a) {
          var c = s[a];
          r.forEach(function(d) {
            var _ = function g(E, O) {
              return ee(E, O) || (E = B(E)) && g(E, O);
            }(d, a);
            (!_ || "value" in _ && _.value === void 0) && (d === t.Transaction.prototype || d instanceof t.Transaction ? de(d, a, { get: function() {
              return this.table(a);
            }, set: function(g) {
              re(this, a, { value: g, writable: !0, configurable: !0, enumerable: !0 });
            } }) : d[a] = new t.Table(a, c));
          });
        });
      }
      function Ti(t, r) {
        r.forEach(function(i) {
          for (var s in i) i[s] instanceof t.Table && delete i[s];
        });
      }
      function Zu(t, r) {
        return t._cfg.version - r._cfg.version;
      }
      function ea(t, r, i, s) {
        var a = t._dbSchema;
        i.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = xi("$meta", zo("")[0], []), t._storeNames.push("$meta"));
        var c = t._createTransaction("readwrite", t._storeNames, a);
        c.create(i), c._completion.catch(s);
        var d = c._reject.bind(c), _ = te.transless || te;
        Wt(function() {
          return te.trans = c, te.transless = _, r !== 0 ? (Ir(t, i), E = r, ((g = c).storeNames.includes("$meta") ? g.table("$meta").get("version").then(function(O) {
            return O ?? E;
          }) : J.resolve(E)).then(function(O) {
            return I = O, v = c, x = i, R = [], O = (y = t)._versions, T = y._dbSchema = kr(0, y.idbdb, x), (O = O.filter(function(A) {
              return A._cfg.version >= I;
            })).length !== 0 ? (O.forEach(function(A) {
              R.push(function() {
                var k = T, P = A._cfg.dbschema;
                Pr(y, k, x), Pr(y, P, x), T = y._dbSchema = P;
                var N = Ri(k, P);
                N.add.forEach(function(z) {
                  Ii(x, z[0], z[1].primKey, z[1].indexes);
                }), N.change.forEach(function(z) {
                  if (z.recreate) throw new ie.Upgrade("Not yet support for changing primary key");
                  var $ = x.objectStore(z.name);
                  z.add.forEach(function(Q) {
                    return Sr($, Q);
                  }), z.change.forEach(function(Q) {
                    $.deleteIndex(Q.name), Sr($, Q);
                  }), z.del.forEach(function(Q) {
                    return $.deleteIndex(Q);
                  });
                });
                var H = A._cfg.contentUpgrade;
                if (H && A._cfg.version > I) {
                  Ir(y, x), v._memoizedTables = {};
                  var q = ze(P);
                  N.del.forEach(function(z) {
                    q[z] = k[z];
                  }), Ti(y, [y.Transaction.prototype]), Ar(y, [y.Transaction.prototype], h(q), q), v.schema = q;
                  var F, L = vt(H);
                  return L && En(), N = J.follow(function() {
                    var z;
                    (F = H(v)) && L && (z = $t.bind(null, null), F.then(z, z));
                  }), F && typeof F.then == "function" ? J.resolve(F) : N.then(function() {
                    return F;
                  });
                }
              }), R.push(function(k) {
                var P, N, H = A._cfg.dbschema;
                P = H, N = k, [].slice.call(N.db.objectStoreNames).forEach(function(q) {
                  return P[q] == null && N.db.deleteObjectStore(q);
                }), Ti(y, [y.Transaction.prototype]), Ar(y, [y.Transaction.prototype], y._storeNames, y._dbSchema), v.schema = y._dbSchema;
              }), R.push(function(k) {
                y.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(y.idbdb.version / 10) === A._cfg.version ? (y.idbdb.deleteObjectStore("$meta"), delete y._dbSchema.$meta, y._storeNames = y._storeNames.filter(function(P) {
                  return P !== "$meta";
                })) : k.objectStore("$meta").put(A._cfg.version, "version"));
              });
            }), function A() {
              return R.length ? J.resolve(R.shift()(v.idbtrans)).then(A) : J.resolve();
            }().then(function() {
              Xo(T, x);
            })) : J.resolve();
            var y, I, v, x, R, T;
          }).catch(d)) : (h(a).forEach(function(O) {
            Ii(i, O, a[O].primKey, a[O].indexes);
          }), Ir(t, i), void J.follow(function() {
            return t.on.populate.fire(c);
          }).catch(d));
          var g, E;
        });
      }
      function ta(t, r) {
        Xo(t._dbSchema, r), r.db.version % 10 != 0 || r.objectStoreNames.contains("$meta") || r.db.createObjectStore("$meta").add(Math.ceil(r.db.version / 10 - 1), "version");
        var i = kr(0, t.idbdb, r);
        Pr(t, t._dbSchema, r);
        for (var s = 0, a = Ri(i, t._dbSchema).change; s < a.length; s++) {
          var c = function(d) {
            if (d.change.length || d.recreate) return console.warn("Unable to patch indexes of table ".concat(d.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var _ = r.objectStore(d.name);
            d.add.forEach(function(g) {
              M && console.debug("Dexie upgrade patch: Creating missing index ".concat(d.name, ".").concat(g.src)), Sr(_, g);
            });
          }(a[s]);
          if (typeof c == "object") return c.value;
        }
      }
      function Ri(t, r) {
        var i, s = { del: [], add: [], change: [] };
        for (i in t) r[i] || s.del.push(i);
        for (i in r) {
          var a = t[i], c = r[i];
          if (a) {
            var d = { name: i, def: c, recreate: !1, del: [], add: [], change: [] };
            if ("" + (a.primKey.keyPath || "") != "" + (c.primKey.keyPath || "") || a.primKey.auto !== c.primKey.auto) d.recreate = !0, s.change.push(d);
            else {
              var _ = a.idxByName, g = c.idxByName, E = void 0;
              for (E in _) g[E] || d.del.push(E);
              for (E in g) {
                var O = _[E], y = g[E];
                O ? O.src !== y.src && d.change.push(y) : d.add.push(y);
              }
              (0 < d.del.length || 0 < d.add.length || 0 < d.change.length) && s.change.push(d);
            }
          } else s.add.push([i, c]);
        }
        return s;
      }
      function Ii(t, r, i, s) {
        var a = t.db.createObjectStore(r, i.keyPath ? { keyPath: i.keyPath, autoIncrement: i.auto } : { autoIncrement: i.auto });
        return s.forEach(function(c) {
          return Sr(a, c);
        }), a;
      }
      function Xo(t, r) {
        h(t).forEach(function(i) {
          r.db.objectStoreNames.contains(i) || (M && console.debug("Dexie: Creating missing table", i), Ii(r, i, t[i].primKey, t[i].indexes));
        });
      }
      function Sr(t, r) {
        t.createIndex(r.name, r.keyPath, { unique: r.unique, multiEntry: r.multi });
      }
      function kr(t, r, i) {
        var s = {};
        return ae(r.objectStoreNames, 0).forEach(function(a) {
          for (var c = i.objectStore(a), d = Ei($o(E = c.keyPath), E || "", !0, !1, !!c.autoIncrement, E && typeof E != "string", !0), _ = [], g = 0; g < c.indexNames.length; ++g) {
            var O = c.index(c.indexNames[g]), E = O.keyPath, O = Ei(O.name, E, !!O.unique, !!O.multiEntry, !1, E && typeof E != "string", !1);
            _.push(O);
          }
          s[a] = xi(a, d, _);
        }), s;
      }
      function Pr(t, r, i) {
        for (var s = i.db.objectStoreNames, a = 0; a < s.length; ++a) {
          var c = s[a], d = i.objectStore(c);
          t._hasGetAll = "getAll" in d;
          for (var _ = 0; _ < d.indexNames.length; ++_) {
            var g = d.indexNames[_], E = d.index(g).keyPath, O = typeof E == "string" ? E : "[" + ae(E).join("+") + "]";
            !r[c] || (E = r[c].idxByName[O]) && (E.name = g, delete r[c].idxByName[O], r[c].idxByName[g] = E);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && f.WorkerGlobalScope && f instanceof f.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (t._hasGetAll = !1);
      }
      function zo(t) {
        return t.split(",").map(function(r, i) {
          var c = r.split(":"), s = (a = c[1]) === null || a === void 0 ? void 0 : a.trim(), a = (r = c[0].trim()).replace(/([&*]|\+\+)/g, ""), c = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return Ei(a, c || null, /\&/.test(r), /\*/.test(r), /\+\+/.test(r), m(c), i === 0, s);
        });
      }
      var na = (Rn.prototype._createTableSchema = xi, Rn.prototype._parseIndexSyntax = zo, Rn.prototype._parseStoresSpec = function(t, r) {
        var i = this;
        h(t).forEach(function(s) {
          if (t[s] !== null) {
            var a = i._parseIndexSyntax(t[s]), c = a.shift();
            if (!c) throw new ie.Schema("Invalid schema for table " + s + ": " + t[s]);
            if (c.unique = !0, c.multi) throw new ie.Schema("Primary key cannot be multiEntry*");
            a.forEach(function(d) {
              if (d.auto) throw new ie.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!d.keyPath) throw new ie.Schema("Index must have a name and cannot be an empty string");
            }), a = i._createTableSchema(s, c, a), r[s] = a;
          }
        });
      }, Rn.prototype.stores = function(i) {
        var r = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? b(this._cfg.storesSource, i) : i;
        var i = r._versions, s = {}, a = {};
        return i.forEach(function(c) {
          b(s, c._cfg.storesSource), a = c._cfg.dbschema = {}, c._parseStoresSpec(s, a);
        }), r._dbSchema = a, Ti(r, [r._allTables, r, r.Transaction.prototype]), Ar(r, [r._allTables, r, r.Transaction.prototype, this._cfg.tables], h(a), a), r._storeNames = h(a), this;
      }, Rn.prototype.upgrade = function(t) {
        return this._cfg.contentUpgrade = G(this._cfg.contentUpgrade || p, t), this;
      }, Rn);
      function Rn() {
      }
      function Ai(t, r) {
        var i = t._dbNamesDB;
        return i || (i = t._dbNamesDB = new Bt(wr, { addons: [], indexedDB: t, IDBKeyRange: r })).version(1).stores({ dbnames: "name" }), i.table("dbnames");
      }
      function Si(t) {
        return t && typeof t.databases == "function";
      }
      function ki(t) {
        return Wt(function() {
          return te.letThrough = !0, t();
        });
      }
      function Pi(t) {
        return !("from" in t);
      }
      var Je = function(t, r) {
        if (!this) {
          var i = new Je();
          return t && "d" in t && b(i, t), i;
        }
        b(this, arguments.length ? { d: 1, from: t, to: 1 < arguments.length ? r : t } : { d: 0 });
      };
      function Xn(t, r, i) {
        var s = ge(r, i);
        if (!isNaN(s)) {
          if (0 < s) throw RangeError();
          if (Pi(t)) return b(t, { from: r, to: i, d: 1 });
          var a = t.l, s = t.r;
          if (ge(i, t.from) < 0) return a ? Xn(a, r, i) : t.l = { from: r, to: i, d: 1, l: null, r: null }, Qo(t);
          if (0 < ge(r, t.to)) return s ? Xn(s, r, i) : t.r = { from: r, to: i, d: 1, l: null, r: null }, Qo(t);
          ge(r, t.from) < 0 && (t.from = r, t.l = null, t.d = s ? s.d + 1 : 1), 0 < ge(i, t.to) && (t.to = i, t.r = null, t.d = t.l ? t.l.d + 1 : 1), i = !t.r, a && !t.l && zn(t, a), s && i && zn(t, s);
        }
      }
      function zn(t, r) {
        Pi(r) || function i(s, g) {
          var c = g.from, d = g.to, _ = g.l, g = g.r;
          Xn(s, c, d), _ && i(s, _), g && i(s, g);
        }(t, r);
      }
      function Jo(t, r) {
        var i = Nr(r), s = i.next();
        if (s.done) return !1;
        for (var a = s.value, c = Nr(t), d = c.next(a.from), _ = d.value; !s.done && !d.done; ) {
          if (ge(_.from, a.to) <= 0 && 0 <= ge(_.to, a.from)) return !0;
          ge(a.from, _.from) < 0 ? a = (s = i.next(_.from)).value : _ = (d = c.next(a.from)).value;
        }
        return !1;
      }
      function Nr(t) {
        var r = Pi(t) ? null : { s: 0, n: t };
        return { next: function(i) {
          for (var s = 0 < arguments.length; r; ) switch (r.s) {
            case 0:
              if (r.s = 1, s) for (; r.n.l && ge(i, r.n.from) < 0; ) r = { up: r, n: r.n.l, s: 1 };
              else for (; r.n.l; ) r = { up: r, n: r.n.l, s: 1 };
            case 1:
              if (r.s = 2, !s || ge(i, r.n.to) <= 0) return { value: r.n, done: !1 };
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
      function Qo(t) {
        var r, i, s = (((r = t.r) === null || r === void 0 ? void 0 : r.d) || 0) - (((i = t.l) === null || i === void 0 ? void 0 : i.d) || 0), a = 1 < s ? "r" : s < -1 ? "l" : "";
        a && (r = a == "r" ? "l" : "r", i = u({}, t), s = t[a], t.from = s.from, t.to = s.to, t[a] = s[a], i[a] = s[r], (t[r] = i).d = Zo(i)), t.d = Zo(t);
      }
      function Zo(i) {
        var r = i.r, i = i.l;
        return (r ? i ? Math.max(r.d, i.d) : r.d : i ? i.d : 0) + 1;
      }
      function Cr(t, r) {
        return h(r).forEach(function(i) {
          t[i] ? zn(t[i], r[i]) : t[i] = function s(a) {
            var c, d, _ = {};
            for (c in a) D(a, c) && (d = a[c], _[c] = !d || typeof d != "object" || Lt.has(d.constructor) ? d : s(d));
            return _;
          }(r[i]);
        }), t;
      }
      function Ni(t, r) {
        return t.all || r.all || Object.keys(t).some(function(i) {
          return r[i] && Jo(r[i], t[i]);
        });
      }
      Y(Je.prototype, ((_t = { add: function(t) {
        return zn(this, t), this;
      }, addKey: function(t) {
        return Xn(this, t, t), this;
      }, addKeys: function(t) {
        var r = this;
        return t.forEach(function(i) {
          return Xn(r, i, i);
        }), this;
      }, hasKey: function(t) {
        var r = Nr(this).next(t).value;
        return r && ge(r.from, t) <= 0 && 0 <= ge(r.to, t);
      } })[He] = function() {
        return Nr(this);
      }, _t));
      var ln = {}, Ci = {}, Di = !1;
      function Dr(t) {
        Cr(Ci, t), Di || (Di = !0, setTimeout(function() {
          Di = !1, Bi(Ci, !(Ci = {}));
        }, 0));
      }
      function Bi(t, r) {
        r === void 0 && (r = !1);
        var i = /* @__PURE__ */ new Set();
        if (t.all) for (var s = 0, a = Object.values(ln); s < a.length; s++) es(d = a[s], t, i, r);
        else for (var c in t) {
          var d, _ = /^idb\:\/\/(.*)\/(.*)\//.exec(c);
          _ && (c = _[1], _ = _[2], (d = ln["idb://".concat(c, "/").concat(_)]) && es(d, t, i, r));
        }
        i.forEach(function(g) {
          return g();
        });
      }
      function es(t, r, i, s) {
        for (var a = [], c = 0, d = Object.entries(t.queries.query); c < d.length; c++) {
          for (var _ = d[c], g = _[0], E = [], O = 0, y = _[1]; O < y.length; O++) {
            var I = y[O];
            Ni(r, I.obsSet) ? I.subscribers.forEach(function(T) {
              return i.add(T);
            }) : s && E.push(I);
          }
          s && a.push([g, E]);
        }
        if (s) for (var v = 0, x = a; v < x.length; v++) {
          var R = x[v], g = R[0], E = R[1];
          t.queries.query[g] = E;
        }
      }
      function ra(t) {
        var r = t._state, i = t._deps.indexedDB;
        if (r.isBeingOpened || t.idbdb) return r.dbReadyPromise.then(function() {
          return r.dbOpenError ? je(r.dbOpenError) : t;
        });
        r.isBeingOpened = !0, r.dbOpenError = null, r.openComplete = !1;
        var s = r.openCanceller, a = Math.round(10 * t.verno), c = !1;
        function d() {
          if (r.openCanceller !== s) throw new ie.DatabaseClosed("db.open() was cancelled");
        }
        function _() {
          return new J(function(I, v) {
            if (d(), !i) throw new ie.MissingAPI();
            var x = t.name, R = r.autoSchema || !a ? i.open(x) : i.open(x, a);
            if (!R) throw new ie.MissingAPI();
            R.onerror = Tt(v), R.onblocked = De(t._fireOnBlocked), R.onupgradeneeded = De(function(T) {
              var A;
              O = R.transaction, r.autoSchema && !t._options.allowEmptyDB ? (R.onerror = Vn, O.abort(), R.result.close(), (A = i.deleteDatabase(x)).onsuccess = A.onerror = De(function() {
                v(new ie.NoSuchDatabase("Database ".concat(x, " doesnt exist")));
              })) : (O.onerror = Tt(v), T = T.oldVersion > Math.pow(2, 62) ? 0 : T.oldVersion, y = T < 1, t.idbdb = R.result, c && ta(t, O), ea(t, T / 10, O, v));
            }, v), R.onsuccess = De(function() {
              O = null;
              var T, A, k, P, N, H = t.idbdb = R.result, q = ae(H.objectStoreNames);
              if (0 < q.length) try {
                var F = H.transaction((P = q).length === 1 ? P[0] : P, "readonly");
                if (r.autoSchema) A = H, k = F, (T = t).verno = A.version / 10, k = T._dbSchema = kr(0, A, k), T._storeNames = ae(A.objectStoreNames, 0), Ar(T, [T._allTables], h(k), k);
                else if (Pr(t, t._dbSchema, F), ((N = Ri(kr(0, (N = t).idbdb, F), N._dbSchema)).add.length || N.change.some(function(L) {
                  return L.add.length || L.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), H.close(), a = H.version + 1, c = !0, I(_());
                Ir(t, F);
              } catch {
              }
              xn.push(t), H.onversionchange = De(function(L) {
                r.vcFired = !0, t.on("versionchange").fire(L);
              }), H.onclose = De(function(L) {
                t.on("close").fire(L);
              }), y && (N = t._deps, F = x, H = N.indexedDB, N = N.IDBKeyRange, Si(H) || F === wr || Ai(H, N).put({ name: F }).catch(p)), I();
            }, v);
          }).catch(function(I) {
            switch (I?.name) {
              case "UnknownError":
                if (0 < r.PR1398_maxLoop) return r.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), _();
                break;
              case "VersionError":
                if (0 < a) return a = 0, _();
            }
            return J.reject(I);
          });
        }
        var g, E = r.dbReadyResolve, O = null, y = !1;
        return J.race([s, (typeof navigator > "u" ? J.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(I) {
          function v() {
            return indexedDB.databases().finally(I);
          }
          g = setInterval(v, 100), v();
        }).finally(function() {
          return clearInterval(g);
        }) : Promise.resolve()).then(_)]).then(function() {
          return d(), r.onReadyBeingFired = [], J.resolve(ki(function() {
            return t.on.ready.fire(t.vip);
          })).then(function I() {
            if (0 < r.onReadyBeingFired.length) {
              var v = r.onReadyBeingFired.reduce(G, p);
              return r.onReadyBeingFired = [], J.resolve(ki(function() {
                return v(t.vip);
              })).then(I);
            }
          });
        }).finally(function() {
          r.openCanceller === s && (r.onReadyBeingFired = null, r.isBeingOpened = !1);
        }).catch(function(I) {
          r.dbOpenError = I;
          try {
            O && O.abort();
          } catch {
          }
          return s === r.openCanceller && t._close(), je(I);
        }).finally(function() {
          r.openComplete = !0, E();
        }).then(function() {
          var I;
          return y && (I = {}, t.tables.forEach(function(v) {
            v.schema.indexes.forEach(function(x) {
              x.name && (I["idb://".concat(t.name, "/").concat(v.name, "/").concat(x.name)] = new Je(-1 / 0, [[[]]]));
            }), I["idb://".concat(t.name, "/").concat(v.name, "/")] = I["idb://".concat(t.name, "/").concat(v.name, "/:dels")] = new Je(-1 / 0, [[[]]]);
          }), zt(Wn).fire(I), Bi(I, !0)), t;
        });
      }
      function Mi(t) {
        function r(c) {
          return t.next(c);
        }
        var i = a(r), s = a(function(c) {
          return t.throw(c);
        });
        function a(c) {
          return function(g) {
            var _ = c(g), g = _.value;
            return _.done ? g : g && typeof g.then == "function" ? g.then(i, s) : m(g) ? Promise.all(g).then(i, s) : i(g);
          };
        }
        return a(r)();
      }
      function Br(t, r, i) {
        for (var s = m(t) ? t.slice() : [t], a = 0; a < i; ++a) s.push(r);
        return s;
      }
      var ia = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(t) {
        return u(u({}, t), { table: function(r) {
          var i = t.table(r), s = i.schema, a = {}, c = [];
          function d(y, I, v) {
            var x = Yn(y), R = a[x] = a[x] || [], T = y == null ? 0 : typeof y == "string" ? 1 : y.length, A = 0 < I, A = u(u({}, v), { name: A ? "".concat(x, "(virtual-from:").concat(v.name, ")") : v.name, lowLevelIndex: v, isVirtual: A, keyTail: I, keyLength: T, extractKey: Oi(y), unique: !A && v.unique });
            return R.push(A), A.isPrimaryKey || c.push(A), 1 < T && d(T === 2 ? y[0] : y.slice(0, T - 1), I + 1, v), R.sort(function(k, P) {
              return k.keyTail - P.keyTail;
            }), A;
          }
          r = d(s.primaryKey.keyPath, 0, s.primaryKey), a[":id"] = [r];
          for (var _ = 0, g = s.indexes; _ < g.length; _++) {
            var E = g[_];
            d(E.keyPath, 0, E);
          }
          function O(y) {
            var I, v = y.query.index;
            return v.isVirtual ? u(u({}, y), { query: { index: v.lowLevelIndex, range: (I = y.query.range, v = v.keyTail, { type: I.type === 1 ? 2 : I.type, lower: Br(I.lower, I.lowerOpen ? t.MAX_KEY : t.MIN_KEY, v), lowerOpen: !0, upper: Br(I.upper, I.upperOpen ? t.MIN_KEY : t.MAX_KEY, v), upperOpen: !0 }) } }) : y;
          }
          return u(u({}, i), { schema: u(u({}, s), { primaryKey: r, indexes: c, getIndexByKeyPath: function(y) {
            return (y = a[Yn(y)]) && y[0];
          } }), count: function(y) {
            return i.count(O(y));
          }, query: function(y) {
            return i.query(O(y));
          }, openCursor: function(y) {
            var I = y.query.index, v = I.keyTail, x = I.isVirtual, R = I.keyLength;
            return x ? i.openCursor(O(y)).then(function(A) {
              return A && T(A);
            }) : i.openCursor(y);
            function T(A) {
              return Object.create(A, { continue: { value: function(k) {
                k != null ? A.continue(Br(k, y.reverse ? t.MAX_KEY : t.MIN_KEY, v)) : y.unique ? A.continue(A.key.slice(0, R).concat(y.reverse ? t.MIN_KEY : t.MAX_KEY, v)) : A.continue();
              } }, continuePrimaryKey: { value: function(k, P) {
                A.continuePrimaryKey(Br(k, t.MAX_KEY, v), P);
              } }, primaryKey: { get: function() {
                return A.primaryKey;
              } }, key: { get: function() {
                var k = A.key;
                return R === 1 ? k[0] : k.slice(0, R);
              } }, value: { get: function() {
                return A.value;
              } } });
            }
          } });
        } });
      } };
      function ji(t, r, i, s) {
        return i = i || {}, s = s || "", h(t).forEach(function(a) {
          var c, d, _;
          D(r, a) ? (c = t[a], d = r[a], typeof c == "object" && typeof d == "object" && c && d ? (_ = yn(c)) !== yn(d) ? i[s + a] = r[a] : _ === "Object" ? ji(c, d, i, s + a + ".") : c !== d && (i[s + a] = r[a]) : c !== d && (i[s + a] = r[a])) : i[s + a] = void 0;
        }), h(r).forEach(function(a) {
          D(t, a) || (i[s + a] = r[a]);
        }), i;
      }
      function Ki(t, r) {
        return r.type === "delete" ? r.keys : r.keys || r.values.map(t.extractKey);
      }
      var oa = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(t) {
        return u(u({}, t), { table: function(r) {
          var i = t.table(r), s = i.schema.primaryKey;
          return u(u({}, i), { mutate: function(a) {
            var c = te.trans, d = c.table(r).hook, _ = d.deleting, g = d.creating, E = d.updating;
            switch (a.type) {
              case "add":
                if (g.fire === p) break;
                return c._promise("readwrite", function() {
                  return O(a);
                }, !0);
              case "put":
                if (g.fire === p && E.fire === p) break;
                return c._promise("readwrite", function() {
                  return O(a);
                }, !0);
              case "delete":
                if (_.fire === p) break;
                return c._promise("readwrite", function() {
                  return O(a);
                }, !0);
              case "deleteRange":
                if (_.fire === p) break;
                return c._promise("readwrite", function() {
                  return function y(I, v, x) {
                    return i.query({ trans: I, values: !1, query: { index: s, range: v }, limit: x }).then(function(R) {
                      var T = R.result;
                      return O({ type: "delete", keys: T, trans: I }).then(function(A) {
                        return 0 < A.numFailures ? Promise.reject(A.failures[0]) : T.length < x ? { failures: [], numFailures: 0, lastResult: void 0 } : y(I, u(u({}, v), { lower: T[T.length - 1], lowerOpen: !0 }), x);
                      });
                    });
                  }(a.trans, a.range, 1e4);
                }, !0);
            }
            return i.mutate(a);
            function O(y) {
              var I, v, x, R = te.trans, T = y.keys || Ki(s, y);
              if (!T) throw new Error("Keys missing");
              return (y = y.type === "add" || y.type === "put" ? u(u({}, y), { keys: T }) : u({}, y)).type !== "delete" && (y.values = l([], y.values)), y.keys && (y.keys = l([], y.keys)), I = i, x = T, ((v = y).type === "add" ? Promise.resolve([]) : I.getMany({ trans: v.trans, keys: x, cache: "immutable" })).then(function(A) {
                var k = T.map(function(P, N) {
                  var H, q, F, L = A[N], z = { onerror: null, onsuccess: null };
                  return y.type === "delete" ? _.fire.call(z, P, L, R) : y.type === "add" || L === void 0 ? (H = g.fire.call(z, P, y.values[N], R), P == null && H != null && (y.keys[N] = P = H, s.outbound || Te(y.values[N], s.keyPath, P))) : (H = ji(L, y.values[N]), (q = E.fire.call(z, H, P, L, R)) && (F = y.values[N], Object.keys(q).forEach(function($) {
                    D(F, $) ? F[$] = q[$] : Te(F, $, q[$]);
                  }))), z;
                });
                return i.mutate(y).then(function(P) {
                  for (var N = P.failures, H = P.results, q = P.numFailures, P = P.lastResult, F = 0; F < T.length; ++F) {
                    var L = (H || T)[F], z = k[F];
                    L == null ? z.onerror && z.onerror(N[F]) : z.onsuccess && z.onsuccess(y.type === "put" && A[F] ? y.values[F] : L);
                  }
                  return { failures: N, results: H, numFailures: q, lastResult: P };
                }).catch(function(P) {
                  return k.forEach(function(N) {
                    return N.onerror && N.onerror(P);
                  }), Promise.reject(P);
                });
              });
            }
          } });
        } });
      } };
      function ts(t, r, i) {
        try {
          if (!r || r.keys.length < t.length) return null;
          for (var s = [], a = 0, c = 0; a < r.keys.length && c < t.length; ++a) ge(r.keys[a], t[c]) === 0 && (s.push(i ? ht(r.values[a]) : r.values[a]), ++c);
          return s.length === t.length ? s : null;
        } catch {
          return null;
        }
      }
      var sa = { stack: "dbcore", level: -1, create: function(t) {
        return { table: function(r) {
          var i = t.table(r);
          return u(u({}, i), { getMany: function(s) {
            if (!s.cache) return i.getMany(s);
            var a = ts(s.keys, s.trans._cache, s.cache === "clone");
            return a ? J.resolve(a) : i.getMany(s).then(function(c) {
              return s.trans._cache = { keys: s.keys, values: s.cache === "clone" ? ht(c) : c }, c;
            });
          }, mutate: function(s) {
            return s.type !== "add" && (s.trans._cache = null), i.mutate(s);
          } });
        } };
      } };
      function ns(t, r) {
        return t.trans.mode === "readonly" && !!t.subscr && !t.trans.explicit && t.trans.db._options.cache !== "disabled" && !r.schema.primaryKey.outbound;
      }
      function rs(t, r) {
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
      var ua = { stack: "dbcore", level: 0, name: "Observability", create: function(t) {
        var r = t.schema.name, i = new Je(t.MIN_KEY, t.MAX_KEY);
        return u(u({}, t), { transaction: function(s, a, c) {
          if (te.subscr && a !== "readonly") throw new ie.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(te.querier));
          return t.transaction(s, a, c);
        }, table: function(s) {
          var a = t.table(s), c = a.schema, d = c.primaryKey, y = c.indexes, _ = d.extractKey, g = d.outbound, E = d.autoIncrement && y.filter(function(v) {
            return v.compound && v.keyPath.includes(d.keyPath);
          }), O = u(u({}, a), { mutate: function(v) {
            function x($) {
              return $ = "idb://".concat(r, "/").concat(s, "/").concat($), P[$] || (P[$] = new Je());
            }
            var R, T, A, k = v.trans, P = v.mutatedParts || (v.mutatedParts = {}), N = x(""), H = x(":dels"), q = v.type, z = v.type === "deleteRange" ? [v.range] : v.type === "delete" ? [v.keys] : v.values.length < 50 ? [Ki(d, v).filter(function($) {
              return $;
            }), v.values] : [], F = z[0], L = z[1], z = v.trans._cache;
            return m(F) ? (N.addKeys(F), (z = q === "delete" || F.length === L.length ? ts(F, z) : null) || H.addKeys(F), (z || L) && (R = x, T = z, A = L, c.indexes.forEach(function($) {
              var Q = R($.name || "");
              function _e(ce) {
                return ce != null ? $.extractKey(ce) : null;
              }
              function we(ce) {
                return $.multiEntry && m(ce) ? ce.forEach(function(Me) {
                  return Q.addKey(Me);
                }) : Q.addKey(ce);
              }
              (T || A).forEach(function(ce, Qe) {
                var le = T && _e(T[Qe]), Qe = A && _e(A[Qe]);
                ge(le, Qe) !== 0 && (le != null && we(le), Qe != null && we(Qe));
              });
            }))) : F ? (L = { from: (L = F.lower) !== null && L !== void 0 ? L : t.MIN_KEY, to: (L = F.upper) !== null && L !== void 0 ? L : t.MAX_KEY }, H.add(L), N.add(L)) : (N.add(i), H.add(i), c.indexes.forEach(function($) {
              return x($.name).add(i);
            })), a.mutate(v).then(function($) {
              return !F || v.type !== "add" && v.type !== "put" || (N.addKeys($.results), E && E.forEach(function(Q) {
                for (var _e = v.values.map(function(le) {
                  return Q.extractKey(le);
                }), we = Q.keyPath.findIndex(function(le) {
                  return le === d.keyPath;
                }), ce = 0, Me = $.results.length; ce < Me; ++ce) _e[ce][we] = $.results[ce];
                x(Q.name).addKeys(_e);
              })), k.mutatedParts = Cr(k.mutatedParts || {}, P), $;
            });
          } }), y = function(x) {
            var R = x.query, x = R.index, R = R.range;
            return [x, new Je((x = R.lower) !== null && x !== void 0 ? x : t.MIN_KEY, (R = R.upper) !== null && R !== void 0 ? R : t.MAX_KEY)];
          }, I = { get: function(v) {
            return [d, new Je(v.key)];
          }, getMany: function(v) {
            return [d, new Je().addKeys(v.keys)];
          }, count: y, query: y, openCursor: y };
          return h(I).forEach(function(v) {
            O[v] = function(x) {
              var R = te.subscr, T = !!R, A = ns(te, a) && rs(v, x) ? x.obsSet = {} : R;
              if (T) {
                var k = function(L) {
                  return L = "idb://".concat(r, "/").concat(s, "/").concat(L), A[L] || (A[L] = new Je());
                }, P = k(""), N = k(":dels"), R = I[v](x), T = R[0], R = R[1];
                if ((v === "query" && T.isPrimaryKey && !x.values ? N : k(T.name || "")).add(R), !T.isPrimaryKey) {
                  if (v !== "count") {
                    var H = v === "query" && g && x.values && a.query(u(u({}, x), { values: !1 }));
                    return a[v].apply(this, arguments).then(function(L) {
                      if (v === "query") {
                        if (g && x.values) return H.then(function(_e) {
                          return _e = _e.result, P.addKeys(_e), L;
                        });
                        var z = x.values ? L.result.map(_) : L.result;
                        (x.values ? P : N).addKeys(z);
                      } else if (v === "openCursor") {
                        var $ = L, Q = x.values;
                        return $ && Object.create($, { key: { get: function() {
                          return N.addKey($.primaryKey), $.key;
                        } }, primaryKey: { get: function() {
                          var _e = $.primaryKey;
                          return N.addKey(_e), _e;
                        } }, value: { get: function() {
                          return Q && P.addKey($.primaryKey), $.value;
                        } } });
                      }
                      return L;
                    });
                  }
                  N.add(i);
                }
              }
              return a[v].apply(this, arguments);
            };
          }), O;
        } });
      } };
      function is(t, r, i) {
        if (i.numFailures === 0) return r;
        if (r.type === "deleteRange") return null;
        var s = r.keys ? r.keys.length : "values" in r && r.values ? r.values.length : 1;
        return i.numFailures === s ? null : (r = u({}, r), m(r.keys) && (r.keys = r.keys.filter(function(a, c) {
          return !(c in i.failures);
        })), "values" in r && m(r.values) && (r.values = r.values.filter(function(a, c) {
          return !(c in i.failures);
        })), r);
      }
      function Ui(t, r) {
        return i = t, ((s = r).lower === void 0 || (s.lowerOpen ? 0 < ge(i, s.lower) : 0 <= ge(i, s.lower))) && (t = t, (r = r).upper === void 0 || (r.upperOpen ? ge(t, r.upper) < 0 : ge(t, r.upper) <= 0));
        var i, s;
      }
      function os(t, r, I, s, a, c) {
        if (!I || I.length === 0) return t;
        var d = r.query.index, _ = d.multiEntry, g = r.query.range, E = s.schema.primaryKey.extractKey, O = d.extractKey, y = (d.lowLevelIndex || d).extractKey, I = I.reduce(function(v, x) {
          var R = v, T = [];
          if (x.type === "add" || x.type === "put") for (var A = new Je(), k = x.values.length - 1; 0 <= k; --k) {
            var P, N = x.values[k], H = E(N);
            A.hasKey(H) || (P = O(N), (_ && m(P) ? P.some(function($) {
              return Ui($, g);
            }) : Ui(P, g)) && (A.addKey(H), T.push(N)));
          }
          switch (x.type) {
            case "add":
              var q = new Je().addKeys(r.values ? v.map(function(Q) {
                return E(Q);
              }) : v), R = v.concat(r.values ? T.filter(function(Q) {
                return Q = E(Q), !q.hasKey(Q) && (q.addKey(Q), !0);
              }) : T.map(function(Q) {
                return E(Q);
              }).filter(function(Q) {
                return !q.hasKey(Q) && (q.addKey(Q), !0);
              }));
              break;
            case "put":
              var F = new Je().addKeys(x.values.map(function(Q) {
                return E(Q);
              }));
              R = v.filter(function(Q) {
                return !F.hasKey(r.values ? E(Q) : Q);
              }).concat(r.values ? T : T.map(function(Q) {
                return E(Q);
              }));
              break;
            case "delete":
              var L = new Je().addKeys(x.keys);
              R = v.filter(function(Q) {
                return !L.hasKey(r.values ? E(Q) : Q);
              });
              break;
            case "deleteRange":
              var z = x.range;
              R = v.filter(function(Q) {
                return !Ui(E(Q), z);
              });
          }
          return R;
        }, t);
        return I === t ? t : (I.sort(function(v, x) {
          return ge(y(v), y(x)) || ge(E(v), E(x));
        }), r.limit && r.limit < 1 / 0 && (I.length > r.limit ? I.length = r.limit : t.length === r.limit && I.length < r.limit && (a.dirty = !0)), c ? Object.freeze(I) : I);
      }
      function ss(t, r) {
        return ge(t.lower, r.lower) === 0 && ge(t.upper, r.upper) === 0 && !!t.lowerOpen == !!r.lowerOpen && !!t.upperOpen == !!r.upperOpen;
      }
      function aa(t, r) {
        return function(i, s, a, c) {
          if (i === void 0) return s !== void 0 ? -1 : 0;
          if (s === void 0) return 1;
          if ((s = ge(i, s)) === 0) {
            if (a && c) return 0;
            if (a) return 1;
            if (c) return -1;
          }
          return s;
        }(t.lower, r.lower, t.lowerOpen, r.lowerOpen) <= 0 && 0 <= function(i, s, a, c) {
          if (i === void 0) return s !== void 0 ? 1 : 0;
          if (s === void 0) return -1;
          if ((s = ge(i, s)) === 0) {
            if (a && c) return 0;
            if (a) return -1;
            if (c) return 1;
          }
          return s;
        }(t.upper, r.upper, t.upperOpen, r.upperOpen);
      }
      function la(t, r, i, s) {
        t.subscribers.add(i), s.addEventListener("abort", function() {
          var a, c;
          t.subscribers.delete(i), t.subscribers.size === 0 && (a = t, c = r, setTimeout(function() {
            a.subscribers.size === 0 && ve(c, a);
          }, 3e3));
        });
      }
      var ca = { stack: "dbcore", level: 0, name: "Cache", create: function(t) {
        var r = t.schema.name;
        return u(u({}, t), { transaction: function(i, s, a) {
          var c, d, _ = t.transaction(i, s, a);
          return s === "readwrite" && (d = (c = new AbortController()).signal, a = function(g) {
            return function() {
              if (c.abort(), s === "readwrite") {
                for (var E = /* @__PURE__ */ new Set(), O = 0, y = i; O < y.length; O++) {
                  var I = y[O], v = ln["idb://".concat(r, "/").concat(I)];
                  if (v) {
                    var x = t.table(I), R = v.optimisticOps.filter(function(Q) {
                      return Q.trans === _;
                    });
                    if (_._explicit && g && _.mutatedParts) for (var T = 0, A = Object.values(v.queries.query); T < A.length; T++) for (var k = 0, P = (q = A[T]).slice(); k < P.length; k++) Ni((F = P[k]).obsSet, _.mutatedParts) && (ve(q, F), F.subscribers.forEach(function(Q) {
                      return E.add(Q);
                    }));
                    else if (0 < R.length) {
                      v.optimisticOps = v.optimisticOps.filter(function(Q) {
                        return Q.trans !== _;
                      });
                      for (var N = 0, H = Object.values(v.queries.query); N < H.length; N++) for (var q, F, L, z = 0, $ = (q = H[N]).slice(); z < $.length; z++) (F = $[z]).res != null && _.mutatedParts && (g && !F.dirty ? (L = Object.isFrozen(F.res), L = os(F.res, F.req, R, x, F, L), F.dirty ? (ve(q, F), F.subscribers.forEach(function(Q) {
                        return E.add(Q);
                      })) : L !== F.res && (F.res = L, F.promise = J.resolve({ result: L }))) : (F.dirty && ve(q, F), F.subscribers.forEach(function(Q) {
                        return E.add(Q);
                      })));
                    }
                  }
                }
                E.forEach(function(Q) {
                  return Q();
                });
              }
            };
          }, _.addEventListener("abort", a(!1), { signal: d }), _.addEventListener("error", a(!1), { signal: d }), _.addEventListener("complete", a(!0), { signal: d })), _;
        }, table: function(i) {
          var s = t.table(i), a = s.schema.primaryKey;
          return u(u({}, s), { mutate: function(c) {
            var d = te.trans;
            if (a.outbound || d.db._options.cache === "disabled" || d.explicit || d.idbtrans.mode !== "readwrite") return s.mutate(c);
            var _ = ln["idb://".concat(r, "/").concat(i)];
            return _ ? (d = s.mutate(c), c.type !== "add" && c.type !== "put" || !(50 <= c.values.length || Ki(a, c).some(function(g) {
              return g == null;
            })) ? (_.optimisticOps.push(c), c.mutatedParts && Dr(c.mutatedParts), d.then(function(g) {
              0 < g.numFailures && (ve(_.optimisticOps, c), (g = is(0, c, g)) && _.optimisticOps.push(g), c.mutatedParts && Dr(c.mutatedParts));
            }), d.catch(function() {
              ve(_.optimisticOps, c), c.mutatedParts && Dr(c.mutatedParts);
            })) : d.then(function(g) {
              var E = is(0, u(u({}, c), { values: c.values.map(function(O, y) {
                var I;
                return g.failures[y] ? O : (O = (I = a.keyPath) !== null && I !== void 0 && I.includes(".") ? ht(O) : u({}, O), Te(O, a.keyPath, g.results[y]), O);
              }) }), g);
              _.optimisticOps.push(E), queueMicrotask(function() {
                return c.mutatedParts && Dr(c.mutatedParts);
              });
            }), d) : s.mutate(c);
          }, query: function(c) {
            if (!ns(te, s) || !rs("query", c)) return s.query(c);
            var d = ((E = te.trans) === null || E === void 0 ? void 0 : E.db._options.cache) === "immutable", y = te, _ = y.requery, g = y.signal, E = function(x, R, T, A) {
              var k = ln["idb://".concat(x, "/").concat(R)];
              if (!k) return [];
              if (!(R = k.queries[T])) return [null, !1, k, null];
              var P = R[(A.query ? A.query.index.name : null) || ""];
              if (!P) return [null, !1, k, null];
              switch (T) {
                case "query":
                  var N = P.find(function(H) {
                    return H.req.limit === A.limit && H.req.values === A.values && ss(H.req.query.range, A.query.range);
                  });
                  return N ? [N, !0, k, P] : [P.find(function(H) {
                    return ("limit" in H.req ? H.req.limit : 1 / 0) >= A.limit && (!A.values || H.req.values) && aa(H.req.query.range, A.query.range);
                  }), !1, k, P];
                case "count":
                  return N = P.find(function(H) {
                    return ss(H.req.query.range, A.query.range);
                  }), [N, !!N, k, P];
              }
            }(r, i, "query", c), O = E[0], y = E[1], I = E[2], v = E[3];
            return O && y ? O.obsSet = c.obsSet : (y = s.query(c).then(function(x) {
              var R = x.result;
              if (O && (O.res = R), d) {
                for (var T = 0, A = R.length; T < A; ++T) Object.freeze(R[T]);
                Object.freeze(R);
              } else x.result = ht(R);
              return x;
            }).catch(function(x) {
              return v && O && ve(v, O), Promise.reject(x);
            }), O = { obsSet: c.obsSet, promise: y, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, v ? v.push(O) : (v = [O], (I = I || (ln["idb://".concat(r, "/").concat(i)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = v)), la(O, v, _, g), O.promise.then(function(x) {
              return { result: os(x.result, c, I?.optimisticOps, s, O, d) };
            });
          } });
        } });
      } };
      function Mr(t, r) {
        return new Proxy(t, { get: function(i, s, a) {
          return s === "db" ? r : Reflect.get(i, s, a);
        } });
      }
      var Bt = (Ke.prototype.version = function(t) {
        if (isNaN(t) || t < 0.1) throw new ie.Type("Given version is not a positive number");
        if (t = Math.round(10 * t) / 10, this.idbdb || this._state.isBeingOpened) throw new ie.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, t);
        var r = this._versions, i = r.filter(function(s) {
          return s._cfg.version === t;
        })[0];
        return i || (i = new this.Version(t), r.push(i), r.sort(Zu), i.stores({}), this._state.autoSchema = !1, i);
      }, Ke.prototype._whenReady = function(t) {
        var r = this;
        return this.idbdb && (this._state.openComplete || te.letThrough || this._vip) ? t() : new J(function(i, s) {
          if (r._state.openComplete) return s(new ie.DatabaseClosed(r._state.dbOpenError));
          if (!r._state.isBeingOpened) {
            if (!r._state.autoOpen) return void s(new ie.DatabaseClosed());
            r.open().catch(p);
          }
          r._state.dbReadyPromise.then(i, s);
        }).then(t);
      }, Ke.prototype.use = function(t) {
        var r = t.stack, i = t.create, s = t.level, a = t.name;
        return a && this.unuse({ stack: r, name: a }), t = this._middlewares[r] || (this._middlewares[r] = []), t.push({ stack: r, create: i, level: s ?? 10, name: a }), t.sort(function(c, d) {
          return c.level - d.level;
        }), this;
      }, Ke.prototype.unuse = function(t) {
        var r = t.stack, i = t.name, s = t.create;
        return r && this._middlewares[r] && (this._middlewares[r] = this._middlewares[r].filter(function(a) {
          return s ? a.create !== s : !!i && a.name !== i;
        })), this;
      }, Ke.prototype.open = function() {
        var t = this;
        return sn(Be, function() {
          return ra(t);
        });
      }, Ke.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var t = this._state, r = xn.indexOf(this);
        if (0 <= r && xn.splice(r, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        t.isBeingOpened || (t.dbReadyPromise = new J(function(i) {
          t.dbReadyResolve = i;
        }), t.openCanceller = new J(function(i, s) {
          t.cancelOpen = s;
        }));
      }, Ke.prototype.close = function(i) {
        var r = (i === void 0 ? { disableAutoOpen: !0 } : i).disableAutoOpen, i = this._state;
        r ? (i.isBeingOpened && i.cancelOpen(new ie.DatabaseClosed()), this._close(), i.autoOpen = !1, i.dbOpenError = new ie.DatabaseClosed()) : (this._close(), i.autoOpen = this._options.autoOpen || i.isBeingOpened, i.openComplete = !1, i.dbOpenError = null);
      }, Ke.prototype.delete = function(t) {
        var r = this;
        t === void 0 && (t = { disableAutoOpen: !0 });
        var i = 0 < arguments.length && typeof arguments[0] != "object", s = this._state;
        return new J(function(a, c) {
          function d() {
            r.close(t);
            var _ = r._deps.indexedDB.deleteDatabase(r.name);
            _.onsuccess = De(function() {
              var g, E, O;
              g = r._deps, E = r.name, O = g.indexedDB, g = g.IDBKeyRange, Si(O) || E === wr || Ai(O, g).delete(E).catch(p), a();
            }), _.onerror = Tt(c), _.onblocked = r._fireOnBlocked;
          }
          if (i) throw new ie.InvalidArgument("Invalid closeOptions argument to db.delete()");
          s.isBeingOpened ? s.dbReadyPromise.then(d) : d();
        });
      }, Ke.prototype.backendDB = function() {
        return this.idbdb;
      }, Ke.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Ke.prototype.hasBeenClosed = function() {
        var t = this._state.dbOpenError;
        return t && t.name === "DatabaseClosed";
      }, Ke.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Ke.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Ke.prototype, "tables", { get: function() {
        var t = this;
        return h(this._allTables).map(function(r) {
          return t._allTables[r];
        });
      }, enumerable: !1, configurable: !0 }), Ke.prototype.transaction = function() {
        var t = (function(r, i, s) {
          var a = arguments.length;
          if (a < 2) throw new ie.InvalidArgument("Too few arguments");
          for (var c = new Array(a - 1); --a; ) c[a - 1] = arguments[a];
          return s = c.pop(), [r, Et(c), s];
        }).apply(this, arguments);
        return this._transaction.apply(this, t);
      }, Ke.prototype._transaction = function(t, r, i) {
        var s = this, a = te.trans;
        a && a.db === this && t.indexOf("!") === -1 || (a = null);
        var c, d, _ = t.indexOf("?") !== -1;
        t = t.replace("!", "").replace("?", "");
        try {
          if (d = r.map(function(E) {
            if (E = E instanceof s.Table ? E.name : E, typeof E != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return E;
          }), t == "r" || t === yi) c = yi;
          else {
            if (t != "rw" && t != gi) throw new ie.InvalidArgument("Invalid transaction mode: " + t);
            c = gi;
          }
          if (a) {
            if (a.mode === yi && c === gi) {
              if (!_) throw new ie.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              a = null;
            }
            a && d.forEach(function(E) {
              if (a && a.storeNames.indexOf(E) === -1) {
                if (!_) throw new ie.SubTransaction("Table " + E + " not included in parent transaction.");
                a = null;
              }
            }), _ && a && !a.active && (a = null);
          }
        } catch (E) {
          return a ? a._promise(null, function(O, y) {
            y(E);
          }) : je(E);
        }
        var g = (function E(O, y, I, v, x) {
          return J.resolve().then(function() {
            var R = te.transless || te, T = O._createTransaction(y, I, O._dbSchema, v);
            if (T.explicit = !0, R = { trans: T, transless: R }, v) T.idbtrans = v.idbtrans;
            else try {
              T.create(), T.idbtrans._explicit = !0, O._state.PR1398_maxLoop = 3;
            } catch (P) {
              return P.name === Gt.InvalidState && O.isOpen() && 0 < --O._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), O.close({ disableAutoOpen: !1 }), O.open().then(function() {
                return E(O, y, I, null, x);
              })) : je(P);
            }
            var A, k = vt(x);
            return k && En(), R = J.follow(function() {
              var P;
              (A = x.call(T, T)) && (k ? (P = $t.bind(null, null), A.then(P, P)) : typeof A.next == "function" && typeof A.throw == "function" && (A = Mi(A)));
            }, R), (A && typeof A.then == "function" ? J.resolve(A).then(function(P) {
              return T.active ? P : je(new ie.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : R.then(function() {
              return A;
            })).then(function(P) {
              return v && T._resolve(), T._completion.then(function() {
                return P;
              });
            }).catch(function(P) {
              return T._reject(P), je(P);
            });
          });
        }).bind(null, this, c, d, a, i);
        return a ? a._promise(c, g, "lock") : te.trans ? sn(te.transless, function() {
          return s._whenReady(g);
        }) : this._whenReady(g);
      }, Ke.prototype.table = function(t) {
        if (!D(this._allTables, t)) throw new ie.InvalidTable("Table ".concat(t, " does not exist"));
        return this._allTables[t];
      }, Ke);
      function Ke(t, r) {
        var i = this;
        this._middlewares = {}, this.verno = 0;
        var s = Ke.dependencies;
        this._options = r = u({ addons: Ke.addons, autoOpen: !0, indexedDB: s.indexedDB, IDBKeyRange: s.IDBKeyRange, cache: "cloned" }, r), this._deps = { indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange }, s = r.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var a, c, d, _, g, E = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: p, dbReadyPromise: null, cancelOpen: p, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: r.autoOpen };
        E.dbReadyPromise = new J(function(y) {
          E.dbReadyResolve = y;
        }), E.openCanceller = new J(function(y, I) {
          E.cancelOpen = I;
        }), this._state = E, this.name = t, this.on = Ln(this, "populate", "blocked", "versionchange", "close", { ready: [G, p] }), this.once = function(y, I) {
          var v = function() {
            for (var x = [], R = 0; R < arguments.length; R++) x[R] = arguments[R];
            i.on(y).unsubscribe(v), I.apply(i, x);
          };
          return i.on(y, v);
        }, this.on.ready.subscribe = ye(this.on.ready.subscribe, function(y) {
          return function(I, v) {
            Ke.vip(function() {
              var x, R = i._state;
              R.openComplete ? (R.dbOpenError || J.resolve().then(I), v && y(I)) : R.onReadyBeingFired ? (R.onReadyBeingFired.push(I), v && y(I)) : (y(I), x = i, v || y(function T() {
                x.on.ready.unsubscribe(I), x.on.ready.unsubscribe(T);
              }));
            });
          };
        }), this.Collection = (a = this, Gn(Wu.prototype, function(A, T) {
          this.db = a;
          var v = Mo, x = null;
          if (T) try {
            v = T();
          } catch (k) {
            x = k;
          }
          var R = A._ctx, T = R.table, A = T.hook.reading.fire;
          this._ctx = { table: T, index: R.index, isPrimKey: !R.index || T.schema.primKey.keyPath && R.index === T.schema.primKey.name, range: v, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: x, or: R.or, valueMapper: A !== w ? A : null };
        })), this.Table = (c = this, Gn(Ho.prototype, function(y, I, v) {
          this.db = c, this._tx = v, this.name = y, this.schema = I, this.hook = c._allTables[y] ? c._allTables[y].hook : Ln(null, { creating: [j, p], reading: [C, w], updating: [X, p], deleting: [U, p] });
        })), this.Transaction = (d = this, Gn(Xu.prototype, function(y, I, v, x, R) {
          var T = this;
          y !== "readonly" && I.forEach(function(A) {
            A = (A = v[A]) === null || A === void 0 ? void 0 : A.yProps, A && (I = I.concat(A.map(function(k) {
              return k.updatesTable;
            })));
          }), this.db = d, this.mode = y, this.storeNames = I, this.schema = v, this.chromeTransactionDurability = x, this.idbtrans = null, this.on = Ln(this, "complete", "error", "abort"), this.parent = R || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new J(function(A, k) {
            T._resolve = A, T._reject = k;
          }), this._completion.then(function() {
            T.active = !1, T.on.complete.fire();
          }, function(A) {
            var k = T.active;
            return T.active = !1, T.on.error.fire(A), T.parent ? T.parent._reject(A) : k && T.idbtrans && T.idbtrans.abort(), je(A);
          });
        })), this.Version = (_ = this, Gn(na.prototype, function(y) {
          this.db = _, this._cfg = { version: y, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (g = this, Gn(Wo.prototype, function(y, I, v) {
          if (this.db = g, this._ctx = { table: y, index: I === ":id" ? null : I, or: v }, this._cmp = this._ascending = ge, this._descending = function(x, R) {
            return ge(R, x);
          }, this._max = function(x, R) {
            return 0 < ge(x, R) ? x : R;
          }, this._min = function(x, R) {
            return ge(x, R) < 0 ? x : R;
          }, this._IDBKeyRange = g._deps.IDBKeyRange, !this._IDBKeyRange) throw new ie.MissingAPI();
        })), this.on("versionchange", function(y) {
          0 < y.newVersion ? console.warn("Another connection wants to upgrade database '".concat(i.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(i.name, "'. Closing db now to resume the delete request.")), i.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(y) {
          !y.newVersion || y.newVersion < y.oldVersion ? console.warn("Dexie.delete('".concat(i.name, "') was blocked")) : console.warn("Upgrade '".concat(i.name, "' blocked by other connection holding version ").concat(y.oldVersion / 10));
        }), this._maxKey = $n(r.IDBKeyRange), this._createTransaction = function(y, I, v, x) {
          return new i.Transaction(y, I, v, i._options.chromeTransactionDurability, x);
        }, this._fireOnBlocked = function(y) {
          i.on("blocked").fire(y), xn.filter(function(I) {
            return I.name === i.name && I !== i && !I._state.vcFired;
          }).map(function(I) {
            return I.on("versionchange").fire(y);
          });
        }, this.use(sa), this.use(ca), this.use(ua), this.use(ia), this.use(oa);
        var O = new Proxy(this, { get: function(y, I, v) {
          if (I === "_vip") return !0;
          if (I === "table") return function(R) {
            return Mr(i.table(R), O);
          };
          var x = Reflect.get(y, I, v);
          return x instanceof Ho ? Mr(x, O) : I === "tables" ? x.map(function(R) {
            return Mr(R, O);
          }) : I === "_createTransaction" ? function() {
            return Mr(x.apply(this, arguments), O);
          } : x;
        } });
        this.vip = O, s.forEach(function(y) {
          return y(i);
        });
      }
      var jr, _t = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", fa = (Hi.prototype.subscribe = function(t, r, i) {
        return this._subscribe(t && typeof t != "function" ? t : { next: t, error: r, complete: i });
      }, Hi.prototype[_t] = function() {
        return this;
      }, Hi);
      function Hi(t) {
        this._subscribe = t;
      }
      try {
        jr = { indexedDB: f.indexedDB || f.mozIndexedDB || f.webkitIndexedDB || f.msIndexedDB, IDBKeyRange: f.IDBKeyRange || f.webkitIDBKeyRange };
      } catch {
        jr = { indexedDB: null, IDBKeyRange: null };
      }
      function us(t) {
        var r, i = !1, s = new fa(function(a) {
          var c = vt(t), d, _ = !1, g = {}, E = {}, O = { get closed() {
            return _;
          }, unsubscribe: function() {
            _ || (_ = !0, d && d.abort(), y && zt.storagemutated.unsubscribe(v));
          } };
          a.start && a.start(O);
          var y = !1, I = function() {
            return _i(x);
          }, v = function(R) {
            Cr(g, R), Ni(E, g) && I();
          }, x = function() {
            var R, T, A;
            !_ && jr.indexedDB && (g = {}, R = {}, d && d.abort(), d = new AbortController(), A = function(k) {
              var P = bn();
              try {
                c && En();
                var N = Wt(t, k);
                return N = c ? N.finally($t) : N;
              } finally {
                P && wn();
              }
            }(T = { subscr: R, signal: d.signal, requery: I, querier: t, trans: null }), Promise.resolve(A).then(function(k) {
              i = !0, r = k, _ || T.signal.aborted || (g = {}, function(P) {
                for (var N in P) if (D(P, N)) return;
                return 1;
              }(E = R) || y || (zt(Wn, v), y = !0), _i(function() {
                return !_ && a.next && a.next(k);
              }));
            }, function(k) {
              i = !1, ["DatabaseClosedError", "AbortError"].includes(k?.name) || _ || _i(function() {
                _ || a.error && a.error(k);
              });
            }));
          };
          return setTimeout(I, 0), O;
        });
        return s.hasValue = function() {
          return i;
        }, s.getValue = function() {
          return r;
        }, s;
      }
      var cn = Bt;
      function Fi(t) {
        var r = Jt;
        try {
          Jt = !0, zt.storagemutated.fire(t), Bi(t, !0);
        } finally {
          Jt = r;
        }
      }
      Y(cn, u(u({}, Fn), { delete: function(t) {
        return new cn(t, { addons: [] }).delete();
      }, exists: function(t) {
        return new cn(t, { addons: [] }).open().then(function(r) {
          return r.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(t) {
        try {
          return r = cn.dependencies, i = r.indexedDB, r = r.IDBKeyRange, (Si(i) ? Promise.resolve(i.databases()).then(function(s) {
            return s.map(function(a) {
              return a.name;
            }).filter(function(a) {
              return a !== wr;
            });
          }) : Ai(i, r).toCollection().primaryKeys()).then(t);
        } catch {
          return je(new ie.MissingAPI());
        }
        var r, i;
      }, defineClass: function() {
        return function(t) {
          b(this, t);
        };
      }, ignoreTransaction: function(t) {
        return te.trans ? sn(te.transless, t) : t();
      }, vip: ki, async: function(t) {
        return function() {
          try {
            var r = Mi(t.apply(this, arguments));
            return r && typeof r.then == "function" ? r : J.resolve(r);
          } catch (i) {
            return je(i);
          }
        };
      }, spawn: function(t, r, i) {
        try {
          var s = Mi(t.apply(i, r || []));
          return s && typeof s.then == "function" ? s : J.resolve(s);
        } catch (a) {
          return je(a);
        }
      }, currentTransaction: { get: function() {
        return te.trans || null;
      } }, waitFor: function(t, r) {
        return r = J.resolve(typeof t == "function" ? cn.ignoreTransaction(t) : t).timeout(r || 6e4), te.trans ? te.trans.waitFor(r) : r;
      }, Promise: J, debug: { get: function() {
        return M;
      }, set: function(t) {
        se(t);
      } }, derive: pe, extend: b, props: Y, override: ye, Events: Ln, on: zt, liveQuery: us, extendObservabilitySet: Cr, getByKeyPath: ke, setByKeyPath: Te, delByKeyPath: function(t, r) {
        typeof r == "string" ? Te(t, r, void 0) : "length" in r && [].map.call(r, function(i) {
          Te(t, i, void 0);
        });
      }, shallowClone: ze, deepClone: ht, getObjectDiff: ji, cmp: ge, asap: Ie, minKey: -1 / 0, addons: [], connections: xn, errnames: Gt, dependencies: jr, cache: ln, semVer: "4.2.0", version: "4.2.0".split(".").map(function(t) {
        return parseInt(t);
      }).reduce(function(t, r, i) {
        return t + r / Math.pow(10, 2 * i);
      }) })), cn.maxKey = $n(cn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (zt(Wn, function(t) {
        Jt || (t = new CustomEvent(wi, { detail: t }), Jt = !0, dispatchEvent(t), Jt = !1);
      }), addEventListener(wi, function(t) {
        t = t.detail, Jt || Fi(t);
      }));
      var In, Jt = !1, as = function() {
      };
      return typeof BroadcastChannel < "u" && ((as = function() {
        (In = new BroadcastChannel(wi)).onmessage = function(t) {
          return t.data && Fi(t.data);
        };
      })(), typeof In.unref == "function" && In.unref(), zt(Wn, function(t) {
        Jt || In.postMessage(t);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(t) {
        if (!Bt.disableBfCache && t.persisted) {
          M && console.debug("Dexie: handling persisted pagehide"), In?.close();
          for (var r = 0, i = xn; r < i.length; r++) i[r].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(t) {
        !Bt.disableBfCache && t.persisted && (M && console.debug("Dexie: handling persisted pageshow"), as(), Fi({ all: new Je(-1 / 0, [[]]) }));
      })), J.rejectionMapper = function(t, r) {
        return !t || t instanceof Ct || t instanceof TypeError || t instanceof SyntaxError || !t.name || !qt[t.name] ? t : (r = new qt[t.name](r || t.message, t), "stack" in t && de(r, "stack", { get: function() {
          return this.inner.stack;
        } }), r);
      }, se(M), u(Bt, Object.freeze({ __proto__: null, Dexie: Bt, liveQuery: us, Entity: jo, cmp: ge, PropModification: qn, replacePrefix: function(t, r) {
        return new qn({ replacePrefix: [t, r] });
      }, add: function(t) {
        return new qn({ add: t });
      }, remove: function(t) {
        return new qn({ remove: t });
      }, default: Bt, RangeSet: Je, mergeRanges: zn, rangesOverlap: Jo }), { default: Bt }), Bt;
    });
  }(Vr)), Vr.exports;
}
var xc = Ec();
const fo = /* @__PURE__ */ bc(xc), Rs = Symbol.for("Dexie"), ho = globalThis[Rs] || (globalThis[Rs] = fo);
if (fo.semVer !== ho.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${fo.semVer} and ${ho.semVer}`);
const {
  liveQuery: Jc,
  mergeRanges: Qc,
  rangesOverlap: Zc,
  RangeSet: ef,
  cmp: tf,
  Entity: nf,
  PropModification: rf,
  replacePrefix: of,
  add: sf,
  remove: uf,
  DexieYProvider: af
} = ho;
export {
  Mc as $,
  Bu as A,
  Zs as B,
  lc as C,
  Eo as D,
  _c as E,
  Ac as F,
  $a as G,
  ll as H,
  gl as I,
  vl as J,
  yt as K,
  jc as L,
  El as M,
  Vc as N,
  Sc as O,
  Cc as P,
  ri as Q,
  xa as R,
  ni as S,
  Le as T,
  Nc as U,
  Pc as V,
  lo as W,
  Wc as X,
  kc as Y,
  Hc as Z,
  oc as _,
  $e as a,
  ic as a0,
  Wa as a1,
  Js as a2,
  $c as a3,
  Fc as a4,
  Bl as a5,
  Bc as a6,
  Gc as a7,
  Oc as a8,
  vc as a9,
  bc as aa,
  Xc as ab,
  ho as ac,
  Yc as ad,
  zc as ae,
  gc as af,
  mo as b,
  Lc as c,
  Is as d,
  ut as e,
  Tc as f,
  kt as g,
  Rc as h,
  he as i,
  rn as j,
  fe as k,
  dr as l,
  go as m,
  Ut as n,
  Dc as o,
  Ta as p,
  Gr as q,
  Ic as r,
  fu as s,
  qc as t,
  Uc as u,
  ao as v,
  Qi as w,
  ct as x,
  Kc as y,
  dl as z
};
