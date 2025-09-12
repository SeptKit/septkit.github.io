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
const Ne = {}, Pn = [], Ot = () => {
}, Ra = () => !1, vo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), js = (e) => e.startsWith("onUpdate:"), ht = Object.assign, bo = (e, n) => {
  const i = e.indexOf(n);
  i > -1 && e.splice(i, 1);
}, Ia = Object.prototype.hasOwnProperty, Se = (e, n) => Ia.call(e, n), he = Array.isArray, Nn = (e) => ni(e) === "[object Map]", Ks = (e) => ni(e) === "[object Set]", pe = (e) => typeof e == "function", $e = (e) => typeof e == "string", un = (e) => typeof e == "symbol", Be = (e) => e !== null && typeof e == "object", Us = (e) => (Be(e) || pe(e)) && pe(e.then) && pe(e.catch), Hs = Object.prototype.toString, ni = (e) => Hs.call(e), Aa = (e) => ni(e).slice(8, -1), Fs = (e) => ni(e) === "[object Object]", wo = (e) => $e(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, er = /* @__PURE__ */ go(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ri = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (i) => n[i] || (n[i] = e(i));
}, Sa = /-(\w)/g, Dt = ri(
  (e) => e.replace(Sa, (n, i) => i ? i.toUpperCase() : "")
), ka = /\B([A-Z])/g, hr = ri(
  (e) => e.replace(ka, "-$1").toLowerCase()
), Eo = ri((e) => e.charAt(0).toUpperCase() + e.slice(1)), Wi = ri(
  (e) => e ? `on${Eo(e)}` : ""
), Lt = (e, n) => !Object.is(e, n), $i = (e, ...n) => {
  for (let i = 0; i < e.length; i++)
    e[i](...n);
}, ro = (e, n, i, s = !1) => {
  Object.defineProperty(e, n, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: i
  });
}, Pa = (e) => {
  const n = parseFloat(e);
  return isNaN(n) ? e : n;
};
let ps;
const ii = () => ps || (ps = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function oi(e) {
  if (he(e)) {
    const n = {};
    for (let i = 0; i < e.length; i++) {
      const s = e[i], l = $e(s) ? Ma(s) : oi(s);
      if (l)
        for (const c in l)
          n[c] = l[c];
    }
    return n;
  } else if ($e(e) || Be(e))
    return e;
}
const Na = /;(?![^(]*\))/g, Ca = /:([^]+)/, Da = /\/\*[^]*?\*\//g;
function Ma(e) {
  const n = {};
  return e.replace(Da, "").split(Na).forEach((i) => {
    if (i) {
      const s = i.split(Ca);
      s.length > 1 && (n[s[0].trim()] = s[1].trim());
    }
  }), n;
}
function si(e) {
  let n = "";
  if ($e(e))
    n = e;
  else if (he(e))
    for (let i = 0; i < e.length; i++) {
      const s = si(e[i]);
      s && (n += s + " ");
    }
  else if (Be(e))
    for (const i in e)
      e[i] && (n += i + " ");
  return n.trim();
}
function Lc(e) {
  if (!e) return null;
  let { class: n, style: i } = e;
  return n && !$e(n) && (e.class = si(n)), i && (e.style = oi(i)), e;
}
const Ba = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Gc = /* @__PURE__ */ go(Ba);
function Vc(e) {
  return !!e || e === "";
}
const Ls = (e) => !!(e && e.__v_isRef === !0), ja = (e) => $e(e) ? e : e == null ? "" : he(e) || Be(e) && (e.toString === Hs || !pe(e.toString)) ? Ls(e) ? ja(e.value) : JSON.stringify(e, Gs, 2) : String(e), Gs = (e, n) => Ls(n) ? Gs(e, n.value) : Nn(n) ? {
  [`Map(${n.size})`]: [...n.entries()].reduce(
    (i, [s, l], c) => (i[Yi(s, c) + " =>"] = l, i),
    {}
  )
} : Ks(n) ? {
  [`Set(${n.size})`]: [...n.values()].map((i) => Yi(i))
} : un(n) ? Yi(n) : Be(n) && !he(n) && !Fs(n) ? String(n) : n, Yi = (e, n = "") => {
  var i;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    un(e) ? `Symbol(${(i = e.description) != null ? i : n})` : e
  );
};
var Ka = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_e16e40e5-6585-4854-87e7-c91a85bd4704", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "pnpm/10.10.0 npm/? node/v20.19.5 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_e16e40e5-6585-4854-87e7-c91a85bd4704", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/usr/local/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/set/set/packages/extensions/structure/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "SeptKit", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-9.0.0", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.2.13676358", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "210705285", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_shared_workspace_lockfile: "", SYSTEMD_EXEC_PID: "1737", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250907.24.1", LOGNAME: "runner", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", npm_config_catalog: '{"@septkit/fileio":"0.0.5","@septkit/ui":"0.0.7"}', CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.12/x64", JOURNAL_STREAM: "9:10947", GITHUB_WORKFLOW: "Deploy Ext. Structure", _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure", GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.7/x64", npm_config_registry: "https://registry.npmjs.org/", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", GITHUB_RUN_ID: "17665859176", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "1af458b1711301db0296082e6b75282fdf645ac3", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "SeptKit/set/.github/workflows/deploy-ext-structure.yml@refs/heads/main", GITHUB_ACTION_REPOSITORY: "", ENABLE_RUNNER_TRACING: "true", npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/set/set/packages/extensions/structure/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node-gyp-bin:/home/runner/work/set/set/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_331ff468-c844-40ba-9fe2-eea006e47347", INVOCATION_ID: "d815d152e4ba4a998d849a6a68517505", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", npm_package_name: "@septkit/ext-structure", NODE: "/usr/local/bin/node", GITHUB_ACTION: "__run", GITHUB_RUN_NUMBER: "38", GITHUB_TRIGGERING_ACTOR: "trusz", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", npm_config_frozen_lockfile: "", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 1000005841", XDG_CONFIG_HOME: "/home/runner/.config", GITHUB_REF_NAME: "main", GITHUB_REPOSITORY: "SeptKit/set", npm_lifecycle_script: "vite build", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", SHELL: "/bin/bash", GITHUB_REPOSITORY_ID: "1003638225", GITHUB_ACTIONS: "true", NODE_PATH: "/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/bin/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/node_modules", npm_package_version: "7", npm_lifecycle_event: "build", npm_config_verify_deps_before_run: "false", GITHUB_REF_PROTECTED: "true", GITHUB_WORKSPACE: "/home/runner/work/set/set", ACCEPT_EULA: "Y", GITHUB_JOB: "build", npm_config_sharedWorkspaceLockfile: "", GITHUB_SHA: "1af458b1711301db0296082e6b75282fdf645ac3", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/main", GITHUB_ACTOR: "trusz", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_e16e40e5-6585-4854-87e7-c91a85bd4704", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/set/set/packages/extensions/structure", GITHUB_ACTOR_ID: "1510715", RUNNER_WORKSPACE: "/home/runner/work/set", npm_config_link_workspace_packages: "", npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/pnpm.cjs", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_e16e40e5-6585-4854-87e7-c91a85bd4704", EDGEWEBDRIVER: "/usr/local/share/edge_driver", npm_config__jsr_registry: "https://npm.jsr.io/", npm_command: "run-script", PNPM_SCRIPT_SRC_DIR: "/home/runner/work/set/set/packages/extensions/structure", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_e16e40e5-6585-4854-87e7-c91a85bd4704", INIT_CWD: "/home/runner/work/set/set/packages/extensions/structure", NODE_ENV: "production", LAUNCH_EDITOR: "code" };
let ot;
class Vs {
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
function qc(e) {
  return new Vs(e);
}
function qs() {
  return ot;
}
function Ua(e, n = !1) {
  ot && ot.cleanups.push(e);
}
let Ce;
const Xi = /* @__PURE__ */ new WeakSet();
class Ws {
  constructor(n) {
    this.fn = n, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ot && ot.active && ot.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Xi.has(this) && (Xi.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ys(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ms(this), Xs(this);
    const n = Ce, i = Tt;
    Ce = this, Tt = !0;
    try {
      return this.fn();
    } finally {
      zs(this), Ce = n, Tt = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let n = this.deps; n; n = n.nextDep)
        To(n);
      this.deps = this.depsTail = void 0, ms(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Xi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    io(this) && this.run();
  }
  get dirty() {
    return io(this);
  }
}
let $s = 0, tr, nr;
function Ys(e, n = !1) {
  if (e.flags |= 8, n) {
    e.next = nr, nr = e;
    return;
  }
  e.next = tr, tr = e;
}
function xo() {
  $s++;
}
function Oo() {
  if (--$s > 0)
    return;
  if (nr) {
    let n = nr;
    for (nr = void 0; n; ) {
      const i = n.next;
      n.next = void 0, n.flags &= -9, n = i;
    }
  }
  let e;
  for (; tr; ) {
    let n = tr;
    for (tr = void 0; n; ) {
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
function zs(e) {
  let n, i = e.depsTail, s = i;
  for (; s; ) {
    const l = s.prevDep;
    s.version === -1 ? (s === i && (i = l), To(s), Ha(s)) : n = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = l;
  }
  e.deps = n, e.depsTail = i;
}
function io(e) {
  for (let n = e.deps; n; n = n.nextDep)
    if (n.dep.version !== n.version || n.dep.computed && (Js(n.dep.computed) || n.dep.version !== n.version))
      return !0;
  return !!e._dirty;
}
function Js(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ar) || (e.globalVersion = ar, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !io(e))))
    return;
  e.flags |= 2;
  const n = e.dep, i = Ce, s = Tt;
  Ce = e, Tt = !0;
  try {
    Xs(e);
    const l = e.fn(e._value);
    (n.version === 0 || Lt(l, e._value)) && (e.flags |= 128, e._value = l, n.version++);
  } catch (l) {
    throw n.version++, l;
  } finally {
    Ce = i, Tt = s, zs(e), e.flags &= -3;
  }
}
function To(e, n = !1) {
  const { dep: i, prevSub: s, nextSub: l } = e;
  if (s && (s.nextSub = l, e.prevSub = void 0), l && (l.prevSub = s, e.nextSub = void 0), i.subs === e && (i.subs = s, !s && i.computed)) {
    i.computed.flags &= -5;
    for (let c = i.computed.deps; c; c = c.nextDep)
      To(c, !0);
  }
  !n && !--i.sc && i.map && i.map.delete(i.key);
}
function Ha(e) {
  const { prevDep: n, nextDep: i } = e;
  n && (n.nextDep = i, e.prevDep = void 0), i && (i.prevDep = n, e.nextDep = void 0);
}
let Tt = !0;
const Qs = [];
function Mt() {
  Qs.push(Tt), Tt = !1;
}
function Bt() {
  const e = Qs.pop();
  Tt = e === void 0 ? !0 : e;
}
function ms(e) {
  const { cleanup: n } = e;
  if (e.cleanup = void 0, n) {
    const i = Ce;
    Ce = void 0;
    try {
      n();
    } finally {
      Ce = i;
    }
  }
}
let ar = 0;
class Fa {
  constructor(n, i) {
    this.sub = n, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ui {
  // TODO isolatedDeclarations "__v_skip"
  constructor(n) {
    this.computed = n, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(n) {
    if (!Ce || !Tt || Ce === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== Ce)
      i = this.activeLink = new Fa(Ce, this), Ce.deps ? (i.prevDep = Ce.depsTail, Ce.depsTail.nextDep = i, Ce.depsTail = i) : Ce.deps = Ce.depsTail = i, Zs(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const s = i.nextDep;
      s.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = s), i.prevDep = Ce.depsTail, i.nextDep = void 0, Ce.depsTail.nextDep = i, Ce.depsTail = i, Ce.deps === i && (Ce.deps = s);
    }
    return i;
  }
  trigger(n) {
    this.version++, ar++, this.notify(n);
  }
  notify(n) {
    xo();
    try {
      Ka.NODE_ENV;
      for (let i = this.subs; i; i = i.prevSub)
        i.sub.notify() && i.sub.dep.notify();
    } finally {
      Oo();
    }
  }
}
function Zs(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const n = e.dep.computed;
    if (n && !e.dep.subs) {
      n.flags |= 20;
      for (let s = n.deps; s; s = s.nextDep)
        Zs(s);
    }
    const i = e.dep.subs;
    i !== e && (e.prevSub = i, i && (i.nextSub = e)), e.dep.subs = e;
  }
}
const Xr = /* @__PURE__ */ new WeakMap(), gn = Symbol(
  ""
), oo = Symbol(
  ""
), lr = Symbol(
  ""
);
function st(e, n, i) {
  if (Tt && Ce) {
    let s = Xr.get(e);
    s || Xr.set(e, s = /* @__PURE__ */ new Map());
    let l = s.get(i);
    l || (s.set(i, l = new ui()), l.map = s, l.key = i), l.track();
  }
}
function Ft(e, n, i, s, l, c) {
  const d = Xr.get(e);
  if (!d) {
    ar++;
    return;
  }
  const p = (g) => {
    g && g.trigger();
  };
  if (xo(), n === "clear")
    d.forEach(p);
  else {
    const g = he(e), N = g && wo(i);
    if (g && i === "length") {
      const A = Number(s);
      d.forEach((P, L) => {
        (L === "length" || L === lr || !un(L) && L >= A) && p(P);
      });
    } else
      switch ((i !== void 0 || d.has(void 0)) && p(d.get(i)), N && p(d.get(lr)), n) {
        case "add":
          g ? N && p(d.get("length")) : (p(d.get(gn)), Nn(e) && p(d.get(oo)));
          break;
        case "delete":
          g || (p(d.get(gn)), Nn(e) && p(d.get(oo)));
          break;
        case "set":
          Nn(e) && p(d.get(gn));
          break;
      }
  }
  Oo();
}
function La(e, n) {
  const i = Xr.get(e);
  return i && i.get(n);
}
function Sn(e) {
  const n = Oe(e);
  return n === e ? n : (st(n, "iterate", lr), Et(e) ? n : n.map(Ze));
}
function ai(e) {
  return st(e = Oe(e), "iterate", lr), e;
}
const Ga = {
  __proto__: null,
  [Symbol.iterator]() {
    return zi(this, Symbol.iterator, Ze);
  },
  concat(...e) {
    return Sn(this).concat(
      ...e.map((n) => he(n) ? Sn(n) : n)
    );
  },
  entries() {
    return zi(this, "entries", (e) => (e[1] = Ze(e[1]), e));
  },
  every(e, n) {
    return Ht(this, "every", e, n, void 0, arguments);
  },
  filter(e, n) {
    return Ht(this, "filter", e, n, (i) => i.map(Ze), arguments);
  },
  find(e, n) {
    return Ht(this, "find", e, n, Ze, arguments);
  },
  findIndex(e, n) {
    return Ht(this, "findIndex", e, n, void 0, arguments);
  },
  findLast(e, n) {
    return Ht(this, "findLast", e, n, Ze, arguments);
  },
  findLastIndex(e, n) {
    return Ht(this, "findLastIndex", e, n, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, n) {
    return Ht(this, "forEach", e, n, void 0, arguments);
  },
  includes(...e) {
    return Ji(this, "includes", e);
  },
  indexOf(...e) {
    return Ji(this, "indexOf", e);
  },
  join(e) {
    return Sn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Ji(this, "lastIndexOf", e);
  },
  map(e, n) {
    return Ht(this, "map", e, n, void 0, arguments);
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
    return Ht(this, "some", e, n, void 0, arguments);
  },
  splice(...e) {
    return Jn(this, "splice", e);
  },
  toReversed() {
    return Sn(this).toReversed();
  },
  toSorted(e) {
    return Sn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Sn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Jn(this, "unshift", e);
  },
  values() {
    return zi(this, "values", Ze);
  }
};
function zi(e, n, i) {
  const s = ai(e), l = s[n]();
  return s !== e && !Et(e) && (l._next = l.next, l.next = () => {
    const c = l._next();
    return c.value && (c.value = i(c.value)), c;
  }), l;
}
const Va = Array.prototype;
function Ht(e, n, i, s, l, c) {
  const d = ai(e), p = d !== e && !Et(e), g = d[n];
  if (g !== Va[n]) {
    const P = g.apply(e, c);
    return p ? Ze(P) : P;
  }
  let N = i;
  d !== e && (p ? N = function(P, L) {
    return i.call(this, Ze(P), L, e);
  } : i.length > 2 && (N = function(P, L) {
    return i.call(this, P, L, e);
  }));
  const A = g.call(d, N, s);
  return p && l ? l(A) : A;
}
function _s(e, n, i, s) {
  const l = ai(e);
  let c = i;
  return l !== e && (Et(e) ? i.length > 3 && (c = function(d, p, g) {
    return i.call(this, d, p, g, e);
  }) : c = function(d, p, g) {
    return i.call(this, d, Ze(p), g, e);
  }), l[n](c, ...s);
}
function Ji(e, n, i) {
  const s = Oe(e);
  st(s, "iterate", lr);
  const l = s[n](...i);
  return (l === -1 || l === !1) && Io(i[0]) ? (i[0] = Oe(i[0]), s[n](...i)) : l;
}
function Jn(e, n, i = []) {
  Mt(), xo();
  const s = Oe(e)[n].apply(e, i);
  return Oo(), Bt(), s;
}
const qa = /* @__PURE__ */ go("__proto__,__v_isRef,__isVue"), eu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(un)
);
function Wa(e) {
  un(e) || (e = String(e));
  const n = Oe(this);
  return st(n, "has", e), n.hasOwnProperty(e);
}
class tu {
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
      return s === (l ? c ? uu : su : c ? ou : iu).get(n) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(n) === Object.getPrototypeOf(s) ? n : void 0;
    const d = he(n);
    if (!l) {
      let g;
      if (d && (g = Ga[i]))
        return g;
      if (i === "hasOwnProperty")
        return Wa;
    }
    const p = Reflect.get(
      n,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      We(n) ? n : s
    );
    return (un(i) ? eu.has(i) : qa(i)) || (l || st(n, "get", i), c) ? p : We(p) ? d && wo(i) ? p : p.value : Be(p) ? l ? au(p) : Ro(p) : p;
  }
}
class nu extends tu {
  constructor(n = !1) {
    super(!1, n);
  }
  set(n, i, s, l) {
    let c = n[i];
    if (!this._isShallow) {
      const g = sn(c);
      if (!Et(s) && !sn(s) && (c = Oe(c), s = Oe(s)), !he(n) && We(c) && !We(s))
        return g ? !1 : (c.value = s, !0);
    }
    const d = he(n) && wo(i) ? Number(i) < n.length : Se(n, i), p = Reflect.set(
      n,
      i,
      s,
      We(n) ? n : l
    );
    return n === Oe(l) && (d ? Lt(s, c) && Ft(n, "set", i, s) : Ft(n, "add", i, s)), p;
  }
  deleteProperty(n, i) {
    const s = Se(n, i);
    n[i];
    const l = Reflect.deleteProperty(n, i);
    return l && s && Ft(n, "delete", i, void 0), l;
  }
  has(n, i) {
    const s = Reflect.has(n, i);
    return (!un(i) || !eu.has(i)) && st(n, "has", i), s;
  }
  ownKeys(n) {
    return st(
      n,
      "iterate",
      he(n) ? "length" : gn
    ), Reflect.ownKeys(n);
  }
}
class ru extends tu {
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
const $a = /* @__PURE__ */ new nu(), Ya = /* @__PURE__ */ new ru(), Xa = /* @__PURE__ */ new nu(!0), za = /* @__PURE__ */ new ru(!0), so = (e) => e, Hr = (e) => Reflect.getPrototypeOf(e);
function Ja(e, n, i) {
  return function(...s) {
    const l = this.__v_raw, c = Oe(l), d = Nn(c), p = e === "entries" || e === Symbol.iterator && d, g = e === "keys" && d, N = l[e](...s), A = i ? so : n ? zr : Ze;
    return !n && st(
      c,
      "iterate",
      g ? oo : gn
    ), {
      // iterator protocol
      next() {
        const { value: P, done: L } = N.next();
        return L ? { value: P, done: L } : {
          value: p ? [A(P[0]), A(P[1])] : A(P),
          done: L
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Fr(e) {
  return function(...n) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Qa(e, n) {
  const i = {
    get(l) {
      const c = this.__v_raw, d = Oe(c), p = Oe(l);
      e || (Lt(l, p) && st(d, "get", l), st(d, "get", p));
      const { has: g } = Hr(d), N = n ? so : e ? zr : Ze;
      if (g.call(d, l))
        return N(c.get(l));
      if (g.call(d, p))
        return N(c.get(p));
      c !== d && c.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && st(Oe(l), "iterate", gn), Reflect.get(l, "size", l);
    },
    has(l) {
      const c = this.__v_raw, d = Oe(c), p = Oe(l);
      return e || (Lt(l, p) && st(d, "has", l), st(d, "has", p)), l === p ? c.has(l) : c.has(l) || c.has(p);
    },
    forEach(l, c) {
      const d = this, p = d.__v_raw, g = Oe(p), N = n ? so : e ? zr : Ze;
      return !e && st(g, "iterate", gn), p.forEach((A, P) => l.call(c, N(A), N(P), d));
    }
  };
  return ht(
    i,
    e ? {
      add: Fr("add"),
      set: Fr("set"),
      delete: Fr("delete"),
      clear: Fr("clear")
    } : {
      add(l) {
        !n && !Et(l) && !sn(l) && (l = Oe(l));
        const c = Oe(this);
        return Hr(c).has.call(c, l) || (c.add(l), Ft(c, "add", l, l)), this;
      },
      set(l, c) {
        !n && !Et(c) && !sn(c) && (c = Oe(c));
        const d = Oe(this), { has: p, get: g } = Hr(d);
        let N = p.call(d, l);
        N || (l = Oe(l), N = p.call(d, l));
        const A = g.call(d, l);
        return d.set(l, c), N ? Lt(c, A) && Ft(d, "set", l, c) : Ft(d, "add", l, c), this;
      },
      delete(l) {
        const c = Oe(this), { has: d, get: p } = Hr(c);
        let g = d.call(c, l);
        g || (l = Oe(l), g = d.call(c, l)), p && p.call(c, l);
        const N = c.delete(l);
        return g && Ft(c, "delete", l, void 0), N;
      },
      clear() {
        const l = Oe(this), c = l.size !== 0, d = l.clear();
        return c && Ft(
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
    i[l] = Ja(l, e, n);
  }), i;
}
function li(e, n) {
  const i = Qa(e, n);
  return (s, l, c) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? s : Reflect.get(
    Se(i, l) && l in s ? i : s,
    l,
    c
  );
}
const Za = {
  get: /* @__PURE__ */ li(!1, !1)
}, el = {
  get: /* @__PURE__ */ li(!1, !0)
}, tl = {
  get: /* @__PURE__ */ li(!0, !1)
}, nl = {
  get: /* @__PURE__ */ li(!0, !0)
}, iu = /* @__PURE__ */ new WeakMap(), ou = /* @__PURE__ */ new WeakMap(), su = /* @__PURE__ */ new WeakMap(), uu = /* @__PURE__ */ new WeakMap();
function rl(e) {
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
function il(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : rl(Aa(e));
}
function Ro(e) {
  return sn(e) ? e : ci(
    e,
    !1,
    $a,
    Za,
    iu
  );
}
function ol(e) {
  return ci(
    e,
    !1,
    Xa,
    el,
    ou
  );
}
function au(e) {
  return ci(
    e,
    !0,
    Ya,
    tl,
    su
  );
}
function Lr(e) {
  return ci(
    e,
    !0,
    za,
    nl,
    uu
  );
}
function ci(e, n, i, s, l) {
  if (!Be(e) || e.__v_raw && !(n && e.__v_isReactive))
    return e;
  const c = il(e);
  if (c === 0)
    return e;
  const d = l.get(e);
  if (d)
    return d;
  const p = new Proxy(
    e,
    c === 2 ? s : i
  );
  return l.set(e, p), p;
}
function Cn(e) {
  return sn(e) ? Cn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function sn(e) {
  return !!(e && e.__v_isReadonly);
}
function Et(e) {
  return !!(e && e.__v_isShallow);
}
function Io(e) {
  return e ? !!e.__v_raw : !1;
}
function Oe(e) {
  const n = e && e.__v_raw;
  return n ? Oe(n) : e;
}
function sl(e) {
  return !Se(e, "__v_skip") && Object.isExtensible(e) && ro(e, "__v_skip", !0), e;
}
const Ze = (e) => Be(e) ? Ro(e) : e, zr = (e) => Be(e) ? au(e) : e;
function We(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ul(e) {
  return lu(e, !1);
}
function al(e) {
  return lu(e, !0);
}
function lu(e, n) {
  return We(e) ? e : new ll(e, n);
}
class ll {
  constructor(n, i) {
    this.dep = new ui(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? n : Oe(n), this._value = i ? n : Ze(n), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(n) {
    const i = this._rawValue, s = this.__v_isShallow || Et(n) || sn(n);
    n = s ? n : Oe(n), Lt(n, i) && (this._rawValue = n, this._value = s ? n : Ze(n), this.dep.trigger());
  }
}
function cu(e) {
  return We(e) ? e.value : e;
}
function ys(e) {
  return pe(e) ? e() : cu(e);
}
const cl = {
  get: (e, n, i) => n === "__v_raw" ? e : cu(Reflect.get(e, n, i)),
  set: (e, n, i, s) => {
    const l = e[n];
    return We(l) && !We(i) ? (l.value = i, !0) : Reflect.set(e, n, i, s);
  }
};
function fu(e) {
  return Cn(e) ? e : new Proxy(e, cl);
}
class fl {
  constructor(n) {
    this.__v_isRef = !0, this._value = void 0;
    const i = this.dep = new ui(), { get: s, set: l } = n(i.track.bind(i), i.trigger.bind(i));
    this._get = s, this._set = l;
  }
  get value() {
    return this._value = this._get();
  }
  set value(n) {
    this._set(n);
  }
}
function Wc(e) {
  return new fl(e);
}
function $c(e) {
  const n = he(e) ? new Array(e.length) : {};
  for (const i in e)
    n[i] = du(e, i);
  return n;
}
class dl {
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
    return La(Oe(this._object), this._key);
  }
}
class hl {
  constructor(n) {
    this._getter = n, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Yc(e, n, i) {
  return We(e) ? e : pe(e) ? new hl(e) : Be(e) && arguments.length > 1 ? du(e, n, i) : ul(e);
}
function du(e, n, i) {
  const s = e[n];
  return We(s) ? s : new dl(e, n, i);
}
class pl {
  constructor(n, i, s) {
    this.fn = n, this.setter = i, this._value = void 0, this.dep = new ui(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ar - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ce !== this)
      return Ys(this, !0), !0;
  }
  get value() {
    const n = this.dep.track();
    return Js(this), n && (n.version = this.dep.version), this._value;
  }
  set value(n) {
    this.setter && this.setter(n);
  }
}
function ml(e, n, i = !1) {
  let s, l;
  return pe(e) ? s = e : (s = e.get, l = e.set), new pl(s, l, i);
}
const Gr = {}, Jr = /* @__PURE__ */ new WeakMap();
let yn;
function _l(e, n = !1, i = yn) {
  if (i) {
    let s = Jr.get(i);
    s || Jr.set(i, s = []), s.push(e);
  }
}
function yl(e, n, i = Ne) {
  const { immediate: s, deep: l, once: c, scheduler: d, augmentJob: p, call: g } = i, N = (oe) => l ? oe : Et(oe) || l === !1 || l === 0 ? on(oe, 1) : on(oe);
  let A, P, L, ee, ie = !1, re = !1;
  if (We(e) ? (P = () => e.value, ie = Et(e)) : Cn(e) ? (P = () => N(e), ie = !0) : he(e) ? (re = !0, ie = e.some((oe) => Cn(oe) || Et(oe)), P = () => e.map((oe) => {
    if (We(oe))
      return oe.value;
    if (Cn(oe))
      return N(oe);
    if (pe(oe))
      return g ? g(oe, 2) : oe();
  })) : pe(e) ? n ? P = g ? () => g(e, 2) : e : P = () => {
    if (L) {
      Mt();
      try {
        L();
      } finally {
        Bt();
      }
    }
    const oe = yn;
    yn = A;
    try {
      return g ? g(e, 3, [ee]) : e(ee);
    } finally {
      yn = oe;
    }
  } : P = Ot, n && l) {
    const oe = P, ke = l === !0 ? 1 / 0 : l;
    P = () => on(oe(), ke);
  }
  const He = qs(), ge = () => {
    A.stop(), He && He.active && bo(He.effects, A);
  };
  if (c && n) {
    const oe = n;
    n = (...ke) => {
      oe(...ke), ge();
    };
  }
  let Re = re ? new Array(e.length).fill(Gr) : Gr;
  const Ie = (oe) => {
    if (!(!(A.flags & 1) || !A.dirty && !oe))
      if (n) {
        const ke = A.run();
        if (l || ie || (re ? ke.some((Pe, B) => Lt(Pe, Re[B])) : Lt(ke, Re))) {
          L && L();
          const Pe = yn;
          yn = A;
          try {
            const B = [
              ke,
              // pass undefined as the old value when it's changed for the first time
              Re === Gr ? void 0 : re && Re[0] === Gr ? [] : Re,
              ee
            ];
            Re = ke, g ? g(n, 3, B) : (
              // @ts-expect-error
              n(...B)
            );
          } finally {
            yn = Pe;
          }
        }
      } else
        A.run();
  };
  return p && p(Ie), A = new Ws(P), A.scheduler = d ? () => d(Ie, !1) : Ie, ee = (oe) => _l(oe, !1, A), L = A.onStop = () => {
    const oe = Jr.get(A);
    if (oe) {
      if (g)
        g(oe, 4);
      else
        for (const ke of oe) ke();
      Jr.delete(A);
    }
  }, n ? s ? Ie(!0) : Re = A.run() : d ? d(Ie.bind(null, !0), !0) : A.run(), ge.pause = A.pause.bind(A), ge.resume = A.resume.bind(A), ge.stop = ge, ge;
}
function on(e, n = 1 / 0, i) {
  if (n <= 0 || !Be(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Set(), i.has(e)))
    return e;
  if (i.add(e), n--, We(e))
    on(e.value, n, i);
  else if (he(e))
    for (let s = 0; s < e.length; s++)
      on(e[s], n, i);
  else if (Ks(e) || Nn(e))
    e.forEach((s) => {
      on(s, n, i);
    });
  else if (Fs(e)) {
    for (const s in e)
      on(e[s], n, i);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && on(e[s], n, i);
  }
  return e;
}
var tn = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_e16e40e5-6585-4854-87e7-c91a85bd4704", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "pnpm/10.10.0 npm/? node/v20.19.5 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_e16e40e5-6585-4854-87e7-c91a85bd4704", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/usr/local/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/set/set/packages/extensions/structure/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "SeptKit", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-9.0.0", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.2.13676358", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "210705285", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_shared_workspace_lockfile: "", SYSTEMD_EXEC_PID: "1737", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250907.24.1", LOGNAME: "runner", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", npm_config_catalog: '{"@septkit/fileio":"0.0.5","@septkit/ui":"0.0.7"}', CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.12/x64", JOURNAL_STREAM: "9:10947", GITHUB_WORKFLOW: "Deploy Ext. Structure", _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure", GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.7/x64", npm_config_registry: "https://registry.npmjs.org/", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", GITHUB_RUN_ID: "17665859176", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "1af458b1711301db0296082e6b75282fdf645ac3", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "SeptKit/set/.github/workflows/deploy-ext-structure.yml@refs/heads/main", GITHUB_ACTION_REPOSITORY: "", ENABLE_RUNNER_TRACING: "true", npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/set/set/packages/extensions/structure/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node-gyp-bin:/home/runner/work/set/set/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_331ff468-c844-40ba-9fe2-eea006e47347", INVOCATION_ID: "d815d152e4ba4a998d849a6a68517505", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", npm_package_name: "@septkit/ext-structure", NODE: "/usr/local/bin/node", GITHUB_ACTION: "__run", GITHUB_RUN_NUMBER: "38", GITHUB_TRIGGERING_ACTOR: "trusz", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", npm_config_frozen_lockfile: "", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 1000005841", XDG_CONFIG_HOME: "/home/runner/.config", GITHUB_REF_NAME: "main", GITHUB_REPOSITORY: "SeptKit/set", npm_lifecycle_script: "vite build", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", SHELL: "/bin/bash", GITHUB_REPOSITORY_ID: "1003638225", GITHUB_ACTIONS: "true", NODE_PATH: "/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/bin/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules:/home/runner/work/set/set/packages/extensions/structure/node_modules/.pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/node_modules", npm_package_version: "7", npm_lifecycle_event: "build", npm_config_verify_deps_before_run: "false", GITHUB_REF_PROTECTED: "true", GITHUB_WORKSPACE: "/home/runner/work/set/set", ACCEPT_EULA: "Y", GITHUB_JOB: "build", npm_config_sharedWorkspaceLockfile: "", GITHUB_SHA: "1af458b1711301db0296082e6b75282fdf645ac3", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/main", GITHUB_ACTOR: "trusz", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_e16e40e5-6585-4854-87e7-c91a85bd4704", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/set/set/packages/extensions/structure", GITHUB_ACTOR_ID: "1510715", RUNNER_WORKSPACE: "/home/runner/work/set", npm_config_link_workspace_packages: "", npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/pnpm.cjs", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_e16e40e5-6585-4854-87e7-c91a85bd4704", EDGEWEBDRIVER: "/usr/local/share/edge_driver", npm_config__jsr_registry: "https://npm.jsr.io/", npm_command: "run-script", PNPM_SCRIPT_SRC_DIR: "/home/runner/work/set/set/packages/extensions/structure", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_e16e40e5-6585-4854-87e7-c91a85bd4704", INIT_CWD: "/home/runner/work/set/set/packages/extensions/structure", NODE_ENV: "production", LAUNCH_EDITOR: "code" };
const rr = [];
let Qi = !1;
function gl(e, ...n) {
  if (Qi) return;
  Qi = !0, Mt();
  const i = rr.length ? rr[rr.length - 1].component : null, s = i && i.appContext.config.warnHandler, l = vl();
  if (s)
    Un(
      s,
      i,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + n.map((c) => {
          var d, p;
          return (p = (d = c.toString) == null ? void 0 : d.call(c)) != null ? p : JSON.stringify(c);
        }).join(""),
        i && i.proxy,
        l.map(
          ({ vnode: c }) => `at <${ea(i, c.type)}>`
        ).join(`
`),
        l
      ]
    );
  else {
    const c = [`[Vue warn]: ${e}`, ...n];
    l.length && c.push(`
`, ...bl(l)), console.warn(...c);
  }
  Bt(), Qi = !1;
}
function vl() {
  let e = rr[rr.length - 1];
  if (!e)
    return [];
  const n = [];
  for (; e; ) {
    const i = n[0];
    i && i.vnode === e ? i.recurseCount++ : n.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return n;
}
function bl(e) {
  const n = [];
  return e.forEach((i, s) => {
    n.push(...s === 0 ? [] : [`
`], ...wl(i));
  }), n;
}
function wl({ vnode: e, recurseCount: n }) {
  const i = n > 0 ? `... (${n} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, l = ` at <${ea(
    e.component,
    e.type,
    s
  )}`, c = ">" + i;
  return e.props ? [l, ...El(e.props), c] : [l + c];
}
function El(e) {
  const n = [], i = Object.keys(e);
  return i.slice(0, 3).forEach((s) => {
    n.push(...hu(s, e[s]));
  }), i.length > 3 && n.push(" ..."), n;
}
function hu(e, n, i) {
  return $e(n) ? (n = JSON.stringify(n), i ? n : [`${e}=${n}`]) : typeof n == "number" || typeof n == "boolean" || n == null ? i ? n : [`${e}=${n}`] : We(n) ? (n = hu(e, Oe(n.value), !0), i ? n : [`${e}=Ref<`, n, ">"]) : pe(n) ? [`${e}=fn${n.name ? `<${n.name}>` : ""}`] : (n = Oe(n), i ? n : [`${e}=`, n]);
}
function Un(e, n, i, s) {
  try {
    return s ? e(...s) : e();
  } catch (l) {
    fi(l, n, i);
  }
}
function Gt(e, n, i, s) {
  if (pe(e)) {
    const l = Un(e, n, i, s);
    return l && Us(l) && l.catch((c) => {
      fi(c, n, i);
    }), l;
  }
  if (he(e)) {
    const l = [];
    for (let c = 0; c < e.length; c++)
      l.push(Gt(e[c], n, i, s));
    return l;
  }
}
function fi(e, n, i, s = !0) {
  const l = n ? n.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: d } = n && n.appContext.config || Ne;
  if (n) {
    let p = n.parent;
    const g = n.proxy, N = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; p; ) {
      const A = p.ec;
      if (A) {
        for (let P = 0; P < A.length; P++)
          if (A[P](e, g, N) === !1)
            return;
      }
      p = p.parent;
    }
    if (c) {
      Mt(), Un(c, null, 10, [
        e,
        g,
        N
      ]), Bt();
      return;
    }
  }
  xl(e, i, l, s, d);
}
function xl(e, n, i, s = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const ft = [];
let Nt = -1;
const Dn = [];
let nn = null, kn = 0;
const pu = /* @__PURE__ */ Promise.resolve();
let Qr = null;
function Ol(e) {
  const n = Qr || pu;
  return e ? n.then(this ? e.bind(this) : e) : n;
}
function Tl(e) {
  let n = Nt + 1, i = ft.length;
  for (; n < i; ) {
    const s = n + i >>> 1, l = ft[s], c = cr(l);
    c < e || c === e && l.flags & 2 ? n = s + 1 : i = s;
  }
  return n;
}
function Ao(e) {
  if (!(e.flags & 1)) {
    const n = cr(e), i = ft[ft.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(e.flags & 2) && n >= cr(i) ? ft.push(e) : ft.splice(Tl(n), 0, e), e.flags |= 1, mu();
  }
}
function mu() {
  Qr || (Qr = pu.then(yu));
}
function Rl(e) {
  he(e) ? Dn.push(...e) : nn && e.id === -1 ? nn.splice(kn + 1, 0, e) : e.flags & 1 || (Dn.push(e), e.flags |= 1), mu();
}
function gs(e, n, i = Nt + 1) {
  for (; i < ft.length; i++) {
    const s = ft[i];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ft.splice(i, 1), i--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function _u(e) {
  if (Dn.length) {
    const n = [...new Set(Dn)].sort(
      (i, s) => cr(i) - cr(s)
    );
    if (Dn.length = 0, nn) {
      nn.push(...n);
      return;
    }
    for (nn = n, kn = 0; kn < nn.length; kn++) {
      const i = nn[kn];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    nn = null, kn = 0;
  }
}
const cr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function yu(e) {
  const n = Ot;
  try {
    for (Nt = 0; Nt < ft.length; Nt++) {
      const i = ft[Nt];
      i && !(i.flags & 8) && (tn.NODE_ENV !== "production" && n(i), i.flags & 4 && (i.flags &= -2), Un(
        i,
        i.i,
        i.i ? 15 : 14
      ), i.flags & 4 || (i.flags &= -2));
    }
  } finally {
    for (; Nt < ft.length; Nt++) {
      const i = ft[Nt];
      i && (i.flags &= -2);
    }
    Nt = -1, ft.length = 0, _u(), Qr = null, (ft.length || Dn.length) && yu();
  }
}
let et = null, gu = null;
function Zr(e) {
  const n = et;
  return et = e, gu = e && e.type.__scopeId || null, n;
}
function Il(e, n = et, i) {
  if (!n || e._n)
    return e;
  const s = (...l) => {
    s._d && Ps(-1);
    const c = Zr(n);
    let d;
    try {
      d = e(...l);
    } finally {
      Zr(c), s._d && Ps(1);
    }
    return d;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function mn(e, n, i, s) {
  const l = e.dirs, c = n && n.dirs;
  for (let d = 0; d < l.length; d++) {
    const p = l[d];
    c && (p.oldValue = c[d].value);
    let g = p.dir[s];
    g && (Mt(), Gt(g, i, 8, [
      e.el,
      p,
      e,
      n
    ]), Bt());
  }
}
const vu = Symbol("_vte"), Al = (e) => e.__isTeleport, ir = (e) => e && (e.disabled || e.disabled === ""), vs = (e) => e && (e.defer || e.defer === ""), bs = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ws = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, uo = (e, n) => {
  const i = e && e.to;
  return $e(i) ? n ? n(i) : null : i;
}, bu = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, n, i, s, l, c, d, p, g, N) {
    const {
      mc: A,
      pc: P,
      pbc: L,
      o: { insert: ee, querySelector: ie, createText: re, createComment: He }
    } = N, ge = ir(n.props);
    let { shapeFlag: Re, children: Ie, dynamicChildren: oe } = n;
    if (e == null) {
      const ke = n.el = re(""), Pe = n.anchor = re("");
      ee(ke, i, s), ee(Pe, i, s);
      const B = (le, ye) => {
        Re & 16 && (l && l.isCE && (l.ce._teleportTarget = le), A(
          Ie,
          le,
          ye,
          l,
          c,
          d,
          p,
          g
        ));
      }, $ = () => {
        const le = n.target = uo(n.props, ie), ye = wu(le, n, re, ee);
        le && (d !== "svg" && bs(le) ? d = "svg" : d !== "mathml" && ws(le) && (d = "mathml"), ge || (B(le, ye), qr(n, !1)));
      };
      ge && (B(i, Pe), qr(n, !0)), vs(n.props) ? (n.el.__isMounted = !1, ct(() => {
        $(), delete n.el.__isMounted;
      }, c)) : $();
    } else {
      if (vs(n.props) && e.el.__isMounted === !1) {
        ct(() => {
          bu.process(
            e,
            n,
            i,
            s,
            l,
            c,
            d,
            p,
            g,
            N
          );
        }, c);
        return;
      }
      n.el = e.el, n.targetStart = e.targetStart;
      const ke = n.anchor = e.anchor, Pe = n.target = e.target, B = n.targetAnchor = e.targetAnchor, $ = ir(e.props), le = $ ? i : Pe, ye = $ ? ke : B;
      if (d === "svg" || bs(Pe) ? d = "svg" : (d === "mathml" || ws(Pe)) && (d = "mathml"), oe ? (L(
        e.dynamicChildren,
        oe,
        le,
        l,
        c,
        d,
        p
      ), No(e, n, !0)) : g || P(
        e,
        n,
        le,
        ye,
        l,
        c,
        d,
        p,
        !1
      ), ge)
        $ ? n.props && e.props && n.props.to !== e.props.to && (n.props.to = e.props.to) : Vr(
          n,
          i,
          ke,
          N,
          1
        );
      else if ((n.props && n.props.to) !== (e.props && e.props.to)) {
        const Ae = n.target = uo(
          n.props,
          ie
        );
        Ae && Vr(
          n,
          Ae,
          null,
          N,
          0
        );
      } else $ && Vr(
        n,
        Pe,
        B,
        N,
        1
      );
      qr(n, ge);
    }
  },
  remove(e, n, i, { um: s, o: { remove: l } }, c) {
    const {
      shapeFlag: d,
      children: p,
      anchor: g,
      targetStart: N,
      targetAnchor: A,
      target: P,
      props: L
    } = e;
    if (P && (l(N), l(A)), c && l(g), d & 16) {
      const ee = c || !ir(L);
      for (let ie = 0; ie < p.length; ie++) {
        const re = p[ie];
        s(
          re,
          n,
          i,
          ee,
          !!re.dynamicChildren
        );
      }
    }
  },
  move: Vr,
  hydrate: Sl
};
function Vr(e, n, i, { o: { insert: s }, m: l }, c = 2) {
  c === 0 && s(e.targetAnchor, n, i);
  const { el: d, anchor: p, shapeFlag: g, children: N, props: A } = e, P = c === 2;
  if (P && s(d, n, i), (!P || ir(A)) && g & 16)
    for (let L = 0; L < N.length; L++)
      l(
        N[L],
        n,
        i,
        2
      );
  P && s(p, n, i);
}
function Sl(e, n, i, s, l, c, {
  o: { nextSibling: d, parentNode: p, querySelector: g, insert: N, createText: A }
}, P) {
  const L = n.target = uo(
    n.props,
    g
  );
  if (L) {
    const ee = ir(n.props), ie = L._lpa || L.firstChild;
    if (n.shapeFlag & 16)
      if (ee)
        n.anchor = P(
          d(e),
          n,
          p(e),
          i,
          s,
          l,
          c
        ), n.targetStart = ie, n.targetAnchor = ie && d(ie);
      else {
        n.anchor = d(e);
        let re = ie;
        for (; re; ) {
          if (re && re.nodeType === 8) {
            if (re.data === "teleport start anchor")
              n.targetStart = re;
            else if (re.data === "teleport anchor") {
              n.targetAnchor = re, L._lpa = n.targetAnchor && d(n.targetAnchor);
              break;
            }
          }
          re = d(re);
        }
        n.targetAnchor || wu(L, n, A, N), P(
          ie && d(ie),
          n,
          L,
          i,
          s,
          l,
          c
        );
      }
    qr(n, ee);
  }
  return n.anchor && d(n.anchor);
}
const Xc = bu;
function qr(e, n) {
  const i = e.ctx;
  if (i && i.ut) {
    let s, l;
    for (n ? (s = e.el, l = e.anchor) : (s = e.targetStart, l = e.targetAnchor); s && s !== l; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", i.uid), s = s.nextSibling;
    i.ut();
  }
}
function wu(e, n, i, s) {
  const l = n.targetStart = i(""), c = n.targetAnchor = i("");
  return l[vu] = c, e && (s(l, e), s(c, e)), c;
}
function So(e, n) {
  e.shapeFlag & 6 && e.component ? (e.transition = n, So(e.component.subTree, n)) : e.shapeFlag & 128 ? (e.ssContent.transition = n.clone(e.ssContent), e.ssFallback.transition = n.clone(e.ssFallback)) : e.transition = n;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function zc(e, n) {
  return pe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ht({ name: e.name }, n, { setup: e })
  ) : e;
}
function Eu(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Jc(e) {
  const n = Xu(), i = al(null);
  if (n) {
    const l = n.refs === Ne ? n.refs = {} : n.refs;
    Object.defineProperty(l, e, {
      enumerable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    });
  }
  return i;
}
function or(e, n, i, s, l = !1) {
  if (he(e)) {
    e.forEach(
      (ie, re) => or(
        ie,
        n && (he(n) ? n[re] : n),
        i,
        s,
        l
      )
    );
    return;
  }
  if (Mn(s) && !l) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && or(e, n, i, s.component.subTree);
    return;
  }
  const c = s.shapeFlag & 4 ? Mo(s.component) : s.el, d = l ? null : c, { i: p, r: g } = e, N = n && n.r, A = p.refs === Ne ? p.refs = {} : p.refs, P = p.setupState, L = Oe(P), ee = P === Ne ? () => !1 : (ie) => Se(L, ie);
  if (N != null && N !== g && ($e(N) ? (A[N] = null, ee(N) && (P[N] = null)) : We(N) && (N.value = null)), pe(g))
    Un(g, p, 12, [d, A]);
  else {
    const ie = $e(g), re = We(g);
    if (ie || re) {
      const He = () => {
        if (e.f) {
          const ge = ie ? ee(g) ? P[g] : A[g] : g.value;
          l ? he(ge) && bo(ge, c) : he(ge) ? ge.includes(c) || ge.push(c) : ie ? (A[g] = [c], ee(g) && (P[g] = A[g])) : (g.value = [c], e.k && (A[e.k] = g.value));
        } else ie ? (A[g] = d, ee(g) && (P[g] = d)) : re && (g.value = d, e.k && (A[e.k] = d));
      };
      d ? (He.id = -1, ct(He, i)) : He();
    }
  }
}
ii().requestIdleCallback;
ii().cancelIdleCallback;
const Mn = (e) => !!e.type.__asyncLoader, xu = (e) => e.type.__isKeepAlive;
function kl(e, n) {
  Ou(e, "a", n);
}
function Pl(e, n) {
  Ou(e, "da", n);
}
function Ou(e, n, i = qe) {
  const s = e.__wdc || (e.__wdc = () => {
    let l = i;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (di(n, s, i), i) {
    let l = i.parent;
    for (; l && l.parent; )
      xu(l.parent.vnode) && Nl(s, n, i, l), l = l.parent;
  }
}
function Nl(e, n, i, s) {
  const l = di(
    n,
    e,
    s,
    !0
    /* prepend */
  );
  Tu(() => {
    bo(s[n], l);
  }, i);
}
function di(e, n, i = qe, s = !1) {
  if (i) {
    const l = i[e] || (i[e] = []), c = n.__weh || (n.__weh = (...d) => {
      Mt();
      const p = pr(i), g = Gt(n, i, e, d);
      return p(), Bt(), g;
    });
    return s ? l.unshift(c) : l.push(c), c;
  }
}
const qt = (e) => (n, i = qe) => {
  (!dr || e === "sp") && di(e, (...s) => n(...s), i);
}, Cl = qt("bm"), Dl = qt("m"), Ml = qt(
  "bu"
), Bl = qt("u"), jl = qt(
  "bum"
), Tu = qt("um"), Kl = qt(
  "sp"
), Ul = qt("rtg"), Hl = qt("rtc");
function Fl(e, n = qe) {
  di("ec", e, n);
}
const Ru = "components";
function Qc(e, n) {
  return Au(Ru, e, !0, n) || e;
}
const Iu = Symbol.for("v-ndc");
function Zc(e) {
  return $e(e) ? Au(Ru, e, !1) || e : e || Iu;
}
function Au(e, n, i = !0, s = !1) {
  const l = et || qe;
  if (l) {
    const c = l.type;
    {
      const p = Zu(
        c,
        !1
      );
      if (p && (p === n || p === Dt(n) || p === Eo(Dt(n))))
        return c;
    }
    const d = (
      // local registration
      // check instance[type] first which is resolved for options API
      Es(l[e] || c[e], n) || // global registration
      Es(l.appContext[e], n)
    );
    return !d && s ? c : d;
  }
}
function Es(e, n) {
  return e && (e[n] || e[Dt(n)] || e[Eo(Dt(n))]);
}
function ef(e, n, i, s) {
  let l;
  const c = i && i[s], d = he(e);
  if (d || $e(e)) {
    const p = d && Cn(e);
    let g = !1, N = !1;
    p && (g = !Et(e), N = sn(e), e = ai(e)), l = new Array(e.length);
    for (let A = 0, P = e.length; A < P; A++)
      l[A] = n(
        g ? N ? zr(Ze(e[A])) : Ze(e[A]) : e[A],
        A,
        void 0,
        c && c[A]
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let p = 0; p < e; p++)
      l[p] = n(p + 1, p, void 0, c && c[p]);
  } else if (Be(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (p, g) => n(p, g, void 0, c && c[g])
      );
    else {
      const p = Object.keys(e);
      l = new Array(p.length);
      for (let g = 0, N = p.length; g < N; g++) {
        const A = p[g];
        l[g] = n(e[A], A, g, c && c[g]);
      }
    }
  else
    l = [];
  return i && (i[s] = l), l;
}
function tf(e, n, i = {}, s, l) {
  if (et.ce || et.parent && Mn(et.parent) && et.parent.ce)
    return n !== "default" && (i.name = n), ho(), po(
      wt,
      null,
      [_t("slot", i, s && s())],
      64
    );
  let c = e[n];
  c && c._c && (c._d = !1), ho();
  const d = c && Su(c(i)), p = i.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  d && d.key, g = po(
    wt,
    {
      key: (p && !un(p) ? p : `_${n}`) + // #7256 force differentiate fallback content from actual content
      (!d && s ? "_fb" : "")
    },
    d || (s ? s() : []),
    d && e._ === 1 ? 64 : -2
  );
  return g.scopeId && (g.slotScopeIds = [g.scopeId + "-s"]), c && c._c && (c._d = !0), g;
}
function Su(e) {
  return e.some((n) => fr(n) ? !(n.type === Vt || n.type === wt && !Su(n.children)) : !0) ? e : null;
}
const ao = (e) => e ? zu(e) ? Mo(e) : ao(e.parent) : null, sr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ht(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ao(e.parent),
    $root: (e) => ao(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Nu(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ao(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ol.bind(e.proxy)),
    $watch: (e) => ac.bind(e)
  })
), Zi = (e, n) => e !== Ne && !e.__isScriptSetup && Se(e, n), Ll = {
  get({ _: e }, n) {
    if (n === "__v_skip")
      return !0;
    const { ctx: i, setupState: s, data: l, props: c, accessCache: d, type: p, appContext: g } = e;
    let N;
    if (n[0] !== "$") {
      const ee = d[n];
      if (ee !== void 0)
        switch (ee) {
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
        if (Zi(s, n))
          return d[n] = 1, s[n];
        if (l !== Ne && Se(l, n))
          return d[n] = 2, l[n];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (N = e.propsOptions[0]) && Se(N, n)
        )
          return d[n] = 3, c[n];
        if (i !== Ne && Se(i, n))
          return d[n] = 4, i[n];
        lo && (d[n] = 0);
      }
    }
    const A = sr[n];
    let P, L;
    if (A)
      return n === "$attrs" && st(e.attrs, "get", ""), A(e);
    if (
      // css module (injected by vue-loader)
      (P = p.__cssModules) && (P = P[n])
    )
      return P;
    if (i !== Ne && Se(i, n))
      return d[n] = 4, i[n];
    if (
      // global properties
      L = g.config.globalProperties, Se(L, n)
    )
      return L[n];
  },
  set({ _: e }, n, i) {
    const { data: s, setupState: l, ctx: c } = e;
    return Zi(l, n) ? (l[n] = i, !0) : s !== Ne && Se(s, n) ? (s[n] = i, !0) : Se(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (c[n] = i, !0);
  },
  has({
    _: { data: e, setupState: n, accessCache: i, ctx: s, appContext: l, propsOptions: c }
  }, d) {
    let p;
    return !!i[d] || e !== Ne && Se(e, d) || Zi(n, d) || (p = c[0]) && Se(p, d) || Se(s, d) || Se(sr, d) || Se(l.config.globalProperties, d);
  },
  defineProperty(e, n, i) {
    return i.get != null ? e._.accessCache[n] = 0 : Se(i, "value") && this.set(e, n, i.value, null), Reflect.defineProperty(e, n, i);
  }
};
function nf() {
  return ku().slots;
}
function rf() {
  return ku().attrs;
}
function ku() {
  const e = Xu();
  return e.setupContext || (e.setupContext = Qu(e));
}
function xs(e) {
  return he(e) ? e.reduce(
    (n, i) => (n[i] = null, n),
    {}
  ) : e;
}
function of(e, n) {
  const i = {};
  for (const s in e)
    n.includes(s) || Object.defineProperty(i, s, {
      enumerable: !0,
      get: () => e[s]
    });
  return i;
}
let lo = !0;
function Gl(e) {
  const n = Nu(e), i = e.proxy, s = e.ctx;
  lo = !1, n.beforeCreate && Os(n.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: c,
    methods: d,
    watch: p,
    provide: g,
    inject: N,
    // lifecycle
    created: A,
    beforeMount: P,
    mounted: L,
    beforeUpdate: ee,
    updated: ie,
    activated: re,
    deactivated: He,
    beforeDestroy: ge,
    beforeUnmount: Re,
    destroyed: Ie,
    unmounted: oe,
    render: ke,
    renderTracked: Pe,
    renderTriggered: B,
    errorCaptured: $,
    serverPrefetch: le,
    // public API
    expose: ye,
    inheritAttrs: Ae,
    // assets
    components: tt,
    directives: Ye,
    filters: Rt
  } = n;
  if (N && Vl(N, s, null), d)
    for (const De in d) {
      const be = d[De];
      pe(be) && (s[De] = be.bind(i));
    }
  if (l) {
    const De = l.call(i, i);
    Be(De) && (e.data = Ro(De));
  }
  if (lo = !0, c)
    for (const De in c) {
      const be = c[De], pt = pe(be) ? be.bind(i, i) : pe(be.get) ? be.get.bind(i, i) : Ot, mt = !pe(be) && pe(be.set) ? be.set.bind(i) : Ot, xt = kc({
        get: pt,
        set: mt
      });
      Object.defineProperty(s, De, {
        enumerable: !0,
        configurable: !0,
        get: () => xt.value,
        set: (gt) => xt.value = gt
      });
    }
  if (p)
    for (const De in p)
      Pu(p[De], s, i, De);
  if (g) {
    const De = pe(g) ? g.call(i) : g;
    Reflect.ownKeys(De).forEach((be) => {
      zl(be, De[be]);
    });
  }
  A && Os(A, e, "c");
  function Ve(De, be) {
    he(be) ? be.forEach((pt) => De(pt.bind(i))) : be && De(be.bind(i));
  }
  if (Ve(Cl, P), Ve(Dl, L), Ve(Ml, ee), Ve(Bl, ie), Ve(kl, re), Ve(Pl, He), Ve(Fl, $), Ve(Hl, Pe), Ve(Ul, B), Ve(jl, Re), Ve(Tu, oe), Ve(Kl, le), he(ye))
    if (ye.length) {
      const De = e.exposed || (e.exposed = {});
      ye.forEach((be) => {
        Object.defineProperty(De, be, {
          get: () => i[be],
          set: (pt) => i[be] = pt
        });
      });
    } else e.exposed || (e.exposed = {});
  ke && e.render === Ot && (e.render = ke), Ae != null && (e.inheritAttrs = Ae), tt && (e.components = tt), Ye && (e.directives = Ye), le && Eu(e);
}
function Vl(e, n, i = Ot) {
  he(e) && (e = co(e));
  for (const s in e) {
    const l = e[s];
    let c;
    Be(l) ? "default" in l ? c = Wr(
      l.from || s,
      l.default,
      !0
    ) : c = Wr(l.from || s) : c = Wr(l), We(c) ? Object.defineProperty(n, s, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (d) => c.value = d
    }) : n[s] = c;
  }
}
function Os(e, n, i) {
  Gt(
    he(e) ? e.map((s) => s.bind(n.proxy)) : e.bind(n.proxy),
    n,
    i
  );
}
function Pu(e, n, i, s) {
  let l = s.includes(".") ? Gu(i, s) : () => i[s];
  if ($e(e)) {
    const c = n[e];
    pe(c) && to(l, c);
  } else if (pe(e))
    to(l, e.bind(i));
  else if (Be(e))
    if (he(e))
      e.forEach((c) => Pu(c, n, i, s));
    else {
      const c = pe(e.handler) ? e.handler.bind(i) : n[e.handler];
      pe(c) && to(l, c, e);
    }
}
function Nu(e) {
  const n = e.type, { mixins: i, extends: s } = n, {
    mixins: l,
    optionsCache: c,
    config: { optionMergeStrategies: d }
  } = e.appContext, p = c.get(n);
  let g;
  return p ? g = p : !l.length && !i && !s ? g = n : (g = {}, l.length && l.forEach(
    (N) => ei(g, N, d, !0)
  ), ei(g, n, d)), Be(n) && c.set(n, g), g;
}
function ei(e, n, i, s = !1) {
  const { mixins: l, extends: c } = n;
  c && ei(e, c, i, !0), l && l.forEach(
    (d) => ei(e, d, i, !0)
  );
  for (const d in n)
    if (!(s && d === "expose")) {
      const p = ql[d] || i && i[d];
      e[d] = p ? p(e[d], n[d]) : n[d];
    }
  return e;
}
const ql = {
  data: Ts,
  props: Rs,
  emits: Rs,
  // objects
  methods: Zn,
  computed: Zn,
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
  components: Zn,
  directives: Zn,
  // watch
  watch: $l,
  // provide / inject
  provide: Ts,
  inject: Wl
};
function Ts(e, n) {
  return n ? e ? function() {
    return ht(
      pe(e) ? e.call(this, this) : e,
      pe(n) ? n.call(this, this) : n
    );
  } : n : e;
}
function Wl(e, n) {
  return Zn(co(e), co(n));
}
function co(e) {
  if (he(e)) {
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
function Zn(e, n) {
  return e ? ht(/* @__PURE__ */ Object.create(null), e, n) : n;
}
function Rs(e, n) {
  return e ? he(e) && he(n) ? [.../* @__PURE__ */ new Set([...e, ...n])] : ht(
    /* @__PURE__ */ Object.create(null),
    xs(e),
    xs(n ?? {})
  ) : n;
}
function $l(e, n) {
  if (!e) return n;
  if (!n) return e;
  const i = ht(/* @__PURE__ */ Object.create(null), e);
  for (const s in n)
    i[s] = lt(e[s], n[s]);
  return i;
}
function Cu() {
  return {
    app: null,
    config: {
      isNativeTag: Ra,
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
let Yl = 0;
function Xl(e, n) {
  return function(s, l = null) {
    pe(s) || (s = ht({}, s)), l != null && !Be(l) && (l = null);
    const c = Cu(), d = /* @__PURE__ */ new WeakSet(), p = [];
    let g = !1;
    const N = c.app = {
      _uid: Yl++,
      _component: s,
      _props: l,
      _container: null,
      _context: c,
      _instance: null,
      version: Pc,
      get config() {
        return c.config;
      },
      set config(A) {
      },
      use(A, ...P) {
        return d.has(A) || (A && pe(A.install) ? (d.add(A), A.install(N, ...P)) : pe(A) && (d.add(A), A(N, ...P))), N;
      },
      mixin(A) {
        return c.mixins.includes(A) || c.mixins.push(A), N;
      },
      component(A, P) {
        return P ? (c.components[A] = P, N) : c.components[A];
      },
      directive(A, P) {
        return P ? (c.directives[A] = P, N) : c.directives[A];
      },
      mount(A, P, L) {
        if (!g) {
          const ee = N._ceVNode || _t(s, l);
          return ee.appContext = c, L === !0 ? L = "svg" : L === !1 && (L = void 0), e(ee, A, L), g = !0, N._container = A, A.__vue_app__ = N, Mo(ee.component);
        }
      },
      onUnmount(A) {
        p.push(A);
      },
      unmount() {
        g && (Gt(
          p,
          N._instance,
          16
        ), e(null, N._container), delete N._container.__vue_app__);
      },
      provide(A, P) {
        return c.provides[A] = P, N;
      },
      runWithContext(A) {
        const P = Bn;
        Bn = N;
        try {
          return A();
        } finally {
          Bn = P;
        }
      }
    };
    return N;
  };
}
let Bn = null;
function zl(e, n) {
  if (qe) {
    let i = qe.provides;
    const s = qe.parent && qe.parent.provides;
    s === i && (i = qe.provides = Object.create(s)), i[e] = n;
  }
}
function Wr(e, n, i = !1) {
  const s = qe || et;
  if (s || Bn) {
    let l = Bn ? Bn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return i && pe(n) ? n.call(s && s.proxy) : n;
  }
}
const Du = {}, Mu = () => Object.create(Du), Bu = (e) => Object.getPrototypeOf(e) === Du;
function Jl(e, n, i, s = !1) {
  const l = {}, c = Mu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ju(e, n, l, c);
  for (const d in e.propsOptions[0])
    d in l || (l[d] = void 0);
  i ? e.props = s ? l : ol(l) : e.type.props ? e.props = l : e.props = c, e.attrs = c;
}
function Ql(e, n, i, s) {
  const {
    props: l,
    attrs: c,
    vnode: { patchFlag: d }
  } = e, p = Oe(l), [g] = e.propsOptions;
  let N = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || d > 0) && !(d & 16)
  ) {
    if (d & 8) {
      const A = e.vnode.dynamicProps;
      for (let P = 0; P < A.length; P++) {
        let L = A[P];
        if (hi(e.emitsOptions, L))
          continue;
        const ee = n[L];
        if (g)
          if (Se(c, L))
            ee !== c[L] && (c[L] = ee, N = !0);
          else {
            const ie = Dt(L);
            l[ie] = fo(
              g,
              p,
              ie,
              ee,
              e,
              !1
            );
          }
        else
          ee !== c[L] && (c[L] = ee, N = !0);
      }
    }
  } else {
    ju(e, n, l, c) && (N = !0);
    let A;
    for (const P in p)
      (!n || // for camelCase
      !Se(n, P) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((A = hr(P)) === P || !Se(n, A))) && (g ? i && // for camelCase
      (i[P] !== void 0 || // for kebab-case
      i[A] !== void 0) && (l[P] = fo(
        g,
        p,
        P,
        void 0,
        e,
        !0
      )) : delete l[P]);
    if (c !== p)
      for (const P in c)
        (!n || !Se(n, P)) && (delete c[P], N = !0);
  }
  N && Ft(e.attrs, "set", "");
}
function ju(e, n, i, s) {
  const [l, c] = e.propsOptions;
  let d = !1, p;
  if (n)
    for (let g in n) {
      if (er(g))
        continue;
      const N = n[g];
      let A;
      l && Se(l, A = Dt(g)) ? !c || !c.includes(A) ? i[A] = N : (p || (p = {}))[A] = N : hi(e.emitsOptions, g) || (!(g in s) || N !== s[g]) && (s[g] = N, d = !0);
    }
  if (c) {
    const g = Oe(i), N = p || Ne;
    for (let A = 0; A < c.length; A++) {
      const P = c[A];
      i[P] = fo(
        l,
        g,
        P,
        N[P],
        e,
        !Se(N, P)
      );
    }
  }
  return d;
}
function fo(e, n, i, s, l, c) {
  const d = e[i];
  if (d != null) {
    const p = Se(d, "default");
    if (p && s === void 0) {
      const g = d.default;
      if (d.type !== Function && !d.skipFactory && pe(g)) {
        const { propsDefaults: N } = l;
        if (i in N)
          s = N[i];
        else {
          const A = pr(l);
          s = N[i] = g.call(
            null,
            n
          ), A();
        }
      } else
        s = g;
      l.ce && l.ce._setProp(i, s);
    }
    d[
      0
      /* shouldCast */
    ] && (c && !p ? s = !1 : d[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === hr(i)) && (s = !0));
  }
  return s;
}
const Zl = /* @__PURE__ */ new WeakMap();
function Ku(e, n, i = !1) {
  const s = i ? Zl : n.propsCache, l = s.get(e);
  if (l)
    return l;
  const c = e.props, d = {}, p = [];
  let g = !1;
  if (!pe(e)) {
    const A = (P) => {
      g = !0;
      const [L, ee] = Ku(P, n, !0);
      ht(d, L), ee && p.push(...ee);
    };
    !i && n.mixins.length && n.mixins.forEach(A), e.extends && A(e.extends), e.mixins && e.mixins.forEach(A);
  }
  if (!c && !g)
    return Be(e) && s.set(e, Pn), Pn;
  if (he(c))
    for (let A = 0; A < c.length; A++) {
      const P = Dt(c[A]);
      Is(P) && (d[P] = Ne);
    }
  else if (c)
    for (const A in c) {
      const P = Dt(A);
      if (Is(P)) {
        const L = c[A], ee = d[P] = he(L) || pe(L) ? { type: L } : ht({}, L), ie = ee.type;
        let re = !1, He = !0;
        if (he(ie))
          for (let ge = 0; ge < ie.length; ++ge) {
            const Re = ie[ge], Ie = pe(Re) && Re.name;
            if (Ie === "Boolean") {
              re = !0;
              break;
            } else Ie === "String" && (He = !1);
          }
        else
          re = pe(ie) && ie.name === "Boolean";
        ee[
          0
          /* shouldCast */
        ] = re, ee[
          1
          /* shouldCastTrue */
        ] = He, (re || Se(ee, "default")) && p.push(P);
      }
    }
  const N = [d, p];
  return Be(e) && s.set(e, N), N;
}
function Is(e) {
  return e[0] !== "$" && !er(e);
}
const ko = (e) => e[0] === "_" || e === "$stable", Po = (e) => he(e) ? e.map(Ct) : [Ct(e)], ec = (e, n, i) => {
  if (n._n)
    return n;
  const s = Il((...l) => (tn.NODE_ENV !== "production" && qe && !(i === null && et) && (i && (i.root, qe.root)), Po(n(...l))), i);
  return s._c = !1, s;
}, Uu = (e, n, i) => {
  const s = e._ctx;
  for (const l in e) {
    if (ko(l)) continue;
    const c = e[l];
    if (pe(c))
      n[l] = ec(l, c, s);
    else if (c != null) {
      const d = Po(c);
      n[l] = () => d;
    }
  }
}, Hu = (e, n) => {
  const i = Po(n);
  e.slots.default = () => i;
}, Fu = (e, n, i) => {
  for (const s in n)
    (i || !ko(s)) && (e[s] = n[s]);
}, tc = (e, n, i) => {
  const s = e.slots = Mu();
  if (e.vnode.shapeFlag & 32) {
    const l = n.__;
    l && ro(s, "__", l, !0);
    const c = n._;
    c ? (Fu(s, n, i), i && ro(s, "_", c, !0)) : Uu(n, s);
  } else n && Hu(e, n);
}, nc = (e, n, i) => {
  const { vnode: s, slots: l } = e;
  let c = !0, d = Ne;
  if (s.shapeFlag & 32) {
    const p = n._;
    p ? i && p === 1 ? c = !1 : Fu(l, n, i) : (c = !n.$stable, Uu(n, l)), d = n;
  } else n && (Hu(e, n), d = { default: 1 });
  if (c)
    for (const p in l)
      !ko(p) && d[p] == null && delete l[p];
}, ct = mc;
function sf(e) {
  return rc(e);
}
function rc(e, n) {
  const i = ii();
  i.__VUE__ = !0;
  const {
    insert: s,
    remove: l,
    patchProp: c,
    createElement: d,
    createText: p,
    createComment: g,
    setText: N,
    setElementText: A,
    parentNode: P,
    nextSibling: L,
    setScopeId: ee = Ot,
    insertStaticContent: ie
  } = e, re = (m, w, M, U = null, K = null, H = null, J = void 0, Y = null, q = !!w.dynamicChildren) => {
    if (m === w)
      return;
    m && !Qn(m, w) && (U = Wt(m), gt(m, K, H, !0), m = null), w.patchFlag === -2 && (q = !1, w.dynamicChildren = null);
    const { type: j, ref: ae, shapeFlag: X } = w;
    switch (j) {
      case pi:
        He(m, w, M, U);
        break;
      case Vt:
        ge(m, w, M, U);
        break;
      case no:
        m == null && Re(w, M, U, J);
        break;
      case wt:
        tt(
          m,
          w,
          M,
          U,
          K,
          H,
          J,
          Y,
          q
        );
        break;
      default:
        X & 1 ? ke(
          m,
          w,
          M,
          U,
          K,
          H,
          J,
          Y,
          q
        ) : X & 6 ? Ye(
          m,
          w,
          M,
          U,
          K,
          H,
          J,
          Y,
          q
        ) : (X & 64 || X & 128) && j.process(
          m,
          w,
          M,
          U,
          K,
          H,
          J,
          Y,
          q,
          $t
        );
    }
    ae != null && K ? or(ae, m && m.ref, H, w || m, !w) : ae == null && m && m.ref != null && or(m.ref, null, H, m, !0);
  }, He = (m, w, M, U) => {
    if (m == null)
      s(
        w.el = p(w.children),
        M,
        U
      );
    else {
      const K = w.el = m.el;
      w.children !== m.children && N(K, w.children);
    }
  }, ge = (m, w, M, U) => {
    m == null ? s(
      w.el = g(w.children || ""),
      M,
      U
    ) : w.el = m.el;
  }, Re = (m, w, M, U) => {
    [m.el, m.anchor] = ie(
      m.children,
      w,
      M,
      U,
      m.el,
      m.anchor
    );
  }, Ie = ({ el: m, anchor: w }, M, U) => {
    let K;
    for (; m && m !== w; )
      K = L(m), s(m, M, U), m = K;
    s(w, M, U);
  }, oe = ({ el: m, anchor: w }) => {
    let M;
    for (; m && m !== w; )
      M = L(m), l(m), m = M;
    l(w);
  }, ke = (m, w, M, U, K, H, J, Y, q) => {
    w.type === "svg" ? J = "svg" : w.type === "math" && (J = "mathml"), m == null ? Pe(
      w,
      M,
      U,
      K,
      H,
      J,
      Y,
      q
    ) : le(
      m,
      w,
      K,
      H,
      J,
      Y,
      q
    );
  }, Pe = (m, w, M, U, K, H, J, Y) => {
    let q, j;
    const { props: ae, shapeFlag: X, transition: ue, dirs: ce } = m;
    if (q = m.el = d(
      m.type,
      H,
      ae && ae.is,
      ae
    ), X & 8 ? A(q, m.children) : X & 16 && $(
      m.children,
      q,
      null,
      U,
      K,
      eo(m, H),
      J,
      Y
    ), ce && mn(m, null, U, "created"), B(q, m, m.scopeId, J, U), ae) {
      for (const we in ae)
        we !== "value" && !er(we) && c(q, we, null, ae[we], H, U);
      "value" in ae && c(q, "value", null, ae.value, H), (j = ae.onVnodeBeforeMount) && Pt(j, U, m);
    }
    ce && mn(m, null, U, "beforeMount");
    const me = ic(K, ue);
    me && ue.beforeEnter(q), s(q, w, M), ((j = ae && ae.onVnodeMounted) || me || ce) && ct(() => {
      j && Pt(j, U, m), me && ue.enter(q), ce && mn(m, null, U, "mounted");
    }, K);
  }, B = (m, w, M, U, K) => {
    if (M && ee(m, M), U)
      for (let H = 0; H < U.length; H++)
        ee(m, U[H]);
    if (K) {
      let H = K.subTree;
      if (w === H || qu(H.type) && (H.ssContent === w || H.ssFallback === w)) {
        const J = K.vnode;
        B(
          m,
          J,
          J.scopeId,
          J.slotScopeIds,
          K.parent
        );
      }
    }
  }, $ = (m, w, M, U, K, H, J, Y, q = 0) => {
    for (let j = q; j < m.length; j++) {
      const ae = m[j] = Y ? rn(m[j]) : Ct(m[j]);
      re(
        null,
        ae,
        w,
        M,
        U,
        K,
        H,
        J,
        Y
      );
    }
  }, le = (m, w, M, U, K, H, J) => {
    const Y = w.el = m.el;
    let { patchFlag: q, dynamicChildren: j, dirs: ae } = w;
    q |= m.patchFlag & 16;
    const X = m.props || Ne, ue = w.props || Ne;
    let ce;
    if (M && _n(M, !1), (ce = ue.onVnodeBeforeUpdate) && Pt(ce, M, w, m), ae && mn(w, m, M, "beforeUpdate"), M && _n(M, !0), (X.innerHTML && ue.innerHTML == null || X.textContent && ue.textContent == null) && A(Y, ""), j ? ye(
      m.dynamicChildren,
      j,
      Y,
      M,
      U,
      eo(w, K),
      H
    ) : J || be(
      m,
      w,
      Y,
      null,
      M,
      U,
      eo(w, K),
      H,
      !1
    ), q > 0) {
      if (q & 16)
        Ae(Y, X, ue, M, K);
      else if (q & 2 && X.class !== ue.class && c(Y, "class", null, ue.class, K), q & 4 && c(Y, "style", X.style, ue.style, K), q & 8) {
        const me = w.dynamicProps;
        for (let we = 0; we < me.length; we++) {
          const xe = me[we], Ge = X[xe], Xe = ue[xe];
          (Xe !== Ge || xe === "value") && c(Y, xe, Ge, Xe, K, M);
        }
      }
      q & 1 && m.children !== w.children && A(Y, w.children);
    } else !J && j == null && Ae(Y, X, ue, M, K);
    ((ce = ue.onVnodeUpdated) || ae) && ct(() => {
      ce && Pt(ce, M, w, m), ae && mn(w, m, M, "updated");
    }, U);
  }, ye = (m, w, M, U, K, H, J) => {
    for (let Y = 0; Y < w.length; Y++) {
      const q = m[Y], j = w[Y], ae = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (q.type === wt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Qn(q, j) || // - In the case of a component, it could contain anything.
        q.shapeFlag & 198) ? P(q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          M
        )
      );
      re(
        q,
        j,
        ae,
        null,
        U,
        K,
        H,
        J,
        !0
      );
    }
  }, Ae = (m, w, M, U, K) => {
    if (w !== M) {
      if (w !== Ne)
        for (const H in w)
          !er(H) && !(H in M) && c(
            m,
            H,
            w[H],
            null,
            K,
            U
          );
      for (const H in M) {
        if (er(H)) continue;
        const J = M[H], Y = w[H];
        J !== Y && H !== "value" && c(m, H, Y, J, K, U);
      }
      "value" in M && c(m, "value", w.value, M.value, K);
    }
  }, tt = (m, w, M, U, K, H, J, Y, q) => {
    const j = w.el = m ? m.el : p(""), ae = w.anchor = m ? m.anchor : p("");
    let { patchFlag: X, dynamicChildren: ue, slotScopeIds: ce } = w;
    ce && (Y = Y ? Y.concat(ce) : ce), m == null ? (s(j, M, U), s(ae, M, U), $(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      M,
      ae,
      K,
      H,
      J,
      Y,
      q
    )) : X > 0 && X & 64 && ue && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren ? (ye(
      m.dynamicChildren,
      ue,
      M,
      K,
      H,
      J,
      Y
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || K && w === K.subTree) && No(
      m,
      w,
      !0
      /* shallow */
    )) : be(
      m,
      w,
      M,
      ae,
      K,
      H,
      J,
      Y,
      q
    );
  }, Ye = (m, w, M, U, K, H, J, Y, q) => {
    w.slotScopeIds = Y, m == null ? w.shapeFlag & 512 ? K.ctx.activate(
      w,
      M,
      U,
      J,
      q
    ) : Rt(
      w,
      M,
      U,
      K,
      H,
      J,
      q
    ) : It(m, w, q);
  }, Rt = (m, w, M, U, K, H, J) => {
    const Y = m.component = xc(
      m,
      U,
      K
    );
    if (xu(m) && (Y.ctx.renderer = $t), Oc(Y, !1, J), Y.asyncDep) {
      if (K && K.registerDep(Y, Ve, J), !m.el) {
        const q = Y.subTree = _t(Vt);
        ge(null, q, w, M);
      }
    } else
      Ve(
        Y,
        m,
        w,
        M,
        K,
        H,
        J
      );
  }, It = (m, w, M) => {
    const U = w.component = m.component;
    if (hc(m, w, M))
      if (U.asyncDep && !U.asyncResolved) {
        De(U, w, M);
        return;
      } else
        U.next = w, U.update();
    else
      w.el = m.el, U.vnode = w;
  }, Ve = (m, w, M, U, K, H, J) => {
    const Y = () => {
      if (m.isMounted) {
        let { next: X, bu: ue, u: ce, parent: me, vnode: we } = m;
        {
          const ze = Lu(m);
          if (ze) {
            X && (X.el = we.el, De(m, X, J)), ze.asyncDep.then(() => {
              m.isUnmounted || Y();
            });
            return;
          }
        }
        let xe = X, Ge;
        _n(m, !1), X ? (X.el = we.el, De(m, X, J)) : X = we, ue && $i(ue), (Ge = X.props && X.props.onVnodeBeforeUpdate) && Pt(Ge, me, X, we), _n(m, !0);
        const Xe = Ss(m), ut = m.subTree;
        m.subTree = Xe, re(
          ut,
          Xe,
          // parent may have changed if it's in a teleport
          P(ut.el),
          // anchor may have changed if it's in a fragment
          Wt(ut),
          m,
          K,
          H
        ), X.el = Xe.el, xe === null && pc(m, Xe.el), ce && ct(ce, K), (Ge = X.props && X.props.onVnodeUpdated) && ct(
          () => Pt(Ge, me, X, we),
          K
        );
      } else {
        let X;
        const { el: ue, props: ce } = w, { bm: me, m: we, parent: xe, root: Ge, type: Xe } = m, ut = Mn(w);
        _n(m, !1), me && $i(me), !ut && (X = ce && ce.onVnodeBeforeMount) && Pt(X, xe, w), _n(m, !0);
        {
          Ge.ce && // @ts-expect-error _def is private
          Ge.ce._def.shadowRoot !== !1 && Ge.ce._injectChildStyle(Xe);
          const ze = m.subTree = Ss(m);
          re(
            null,
            ze,
            M,
            U,
            m,
            K,
            H
          ), w.el = ze.el;
        }
        if (we && ct(we, K), !ut && (X = ce && ce.onVnodeMounted)) {
          const ze = w;
          ct(
            () => Pt(X, xe, ze),
            K
          );
        }
        (w.shapeFlag & 256 || xe && Mn(xe.vnode) && xe.vnode.shapeFlag & 256) && m.a && ct(m.a, K), m.isMounted = !0, w = M = U = null;
      }
    };
    m.scope.on();
    const q = m.effect = new Ws(Y);
    m.scope.off();
    const j = m.update = q.run.bind(q), ae = m.job = q.runIfDirty.bind(q);
    ae.i = m, ae.id = m.uid, q.scheduler = () => Ao(ae), _n(m, !0), j();
  }, De = (m, w, M) => {
    w.component = m;
    const U = m.vnode.props;
    m.vnode = w, m.next = null, Ql(m, w.props, U, M), nc(m, w.children, M), Mt(), gs(m), Bt();
  }, be = (m, w, M, U, K, H, J, Y, q = !1) => {
    const j = m && m.children, ae = m ? m.shapeFlag : 0, X = w.children, { patchFlag: ue, shapeFlag: ce } = w;
    if (ue > 0) {
      if (ue & 128) {
        mt(
          j,
          X,
          M,
          U,
          K,
          H,
          J,
          Y,
          q
        );
        return;
      } else if (ue & 256) {
        pt(
          j,
          X,
          M,
          U,
          K,
          H,
          J,
          Y,
          q
        );
        return;
      }
    }
    ce & 8 ? (ae & 16 && vt(j, K, H), X !== j && A(M, X)) : ae & 16 ? ce & 16 ? mt(
      j,
      X,
      M,
      U,
      K,
      H,
      J,
      Y,
      q
    ) : vt(j, K, H, !0) : (ae & 8 && A(M, ""), ce & 16 && $(
      X,
      M,
      U,
      K,
      H,
      J,
      Y,
      q
    ));
  }, pt = (m, w, M, U, K, H, J, Y, q) => {
    m = m || Pn, w = w || Pn;
    const j = m.length, ae = w.length, X = Math.min(j, ae);
    let ue;
    for (ue = 0; ue < X; ue++) {
      const ce = w[ue] = q ? rn(w[ue]) : Ct(w[ue]);
      re(
        m[ue],
        ce,
        M,
        null,
        K,
        H,
        J,
        Y,
        q
      );
    }
    j > ae ? vt(
      m,
      K,
      H,
      !0,
      !1,
      X
    ) : $(
      w,
      M,
      U,
      K,
      H,
      J,
      Y,
      q,
      X
    );
  }, mt = (m, w, M, U, K, H, J, Y, q) => {
    let j = 0;
    const ae = w.length;
    let X = m.length - 1, ue = ae - 1;
    for (; j <= X && j <= ue; ) {
      const ce = m[j], me = w[j] = q ? rn(w[j]) : Ct(w[j]);
      if (Qn(ce, me))
        re(
          ce,
          me,
          M,
          null,
          K,
          H,
          J,
          Y,
          q
        );
      else
        break;
      j++;
    }
    for (; j <= X && j <= ue; ) {
      const ce = m[X], me = w[ue] = q ? rn(w[ue]) : Ct(w[ue]);
      if (Qn(ce, me))
        re(
          ce,
          me,
          M,
          null,
          K,
          H,
          J,
          Y,
          q
        );
      else
        break;
      X--, ue--;
    }
    if (j > X) {
      if (j <= ue) {
        const ce = ue + 1, me = ce < ae ? w[ce].el : U;
        for (; j <= ue; )
          re(
            null,
            w[j] = q ? rn(w[j]) : Ct(w[j]),
            M,
            me,
            K,
            H,
            J,
            Y,
            q
          ), j++;
      }
    } else if (j > ue)
      for (; j <= X; )
        gt(m[j], K, H, !0), j++;
    else {
      const ce = j, me = j, we = /* @__PURE__ */ new Map();
      for (j = me; j <= ue; j++) {
        const Ke = w[j] = q ? rn(w[j]) : Ct(w[j]);
        Ke.key != null && we.set(Ke.key, j);
      }
      let xe, Ge = 0;
      const Xe = ue - me + 1;
      let ut = !1, ze = 0;
      const At = new Array(Xe);
      for (j = 0; j < Xe; j++) At[j] = 0;
      for (j = ce; j <= X; j++) {
        const Ke = m[j];
        if (Ge >= Xe) {
          gt(Ke, K, H, !0);
          continue;
        }
        let ne;
        if (Ke.key != null)
          ne = we.get(Ke.key);
        else
          for (xe = me; xe <= ue; xe++)
            if (At[xe - me] === 0 && Qn(Ke, w[xe])) {
              ne = xe;
              break;
            }
        ne === void 0 ? gt(Ke, K, H, !0) : (At[ne - me] = j + 1, ne >= ze ? ze = ne : ut = !0, re(
          Ke,
          w[ne],
          M,
          null,
          K,
          H,
          J,
          Y,
          q
        ), Ge++);
      }
      const bn = ut ? oc(At) : Pn;
      for (xe = bn.length - 1, j = Xe - 1; j >= 0; j--) {
        const Ke = me + j, ne = w[Ke], Yt = Ke + 1 < ae ? w[Ke + 1].el : U;
        At[j] === 0 ? re(
          null,
          ne,
          M,
          Yt,
          K,
          H,
          J,
          Y,
          q
        ) : ut && (xe < 0 || j !== bn[xe] ? xt(ne, M, Yt, 2) : xe--);
      }
    }
  }, xt = (m, w, M, U, K = null) => {
    const { el: H, type: J, transition: Y, children: q, shapeFlag: j } = m;
    if (j & 6) {
      xt(m.component.subTree, w, M, U);
      return;
    }
    if (j & 128) {
      m.suspense.move(w, M, U);
      return;
    }
    if (j & 64) {
      J.move(m, w, M, $t);
      return;
    }
    if (J === wt) {
      s(H, w, M);
      for (let X = 0; X < q.length; X++)
        xt(q[X], w, M, U);
      s(m.anchor, w, M);
      return;
    }
    if (J === no) {
      Ie(m, w, M);
      return;
    }
    if (U !== 2 && j & 1 && Y)
      if (U === 0)
        Y.beforeEnter(H), s(H, w, M), ct(() => Y.enter(H), K);
      else {
        const { leave: X, delayLeave: ue, afterLeave: ce } = Y, me = () => {
          m.ctx.isUnmounted ? l(H) : s(H, w, M);
        }, we = () => {
          X(H, () => {
            me(), ce && ce();
          });
        };
        ue ? ue(H, me, we) : we();
      }
    else
      s(H, w, M);
  }, gt = (m, w, M, U = !1, K = !1) => {
    const {
      type: H,
      props: J,
      ref: Y,
      children: q,
      dynamicChildren: j,
      shapeFlag: ae,
      patchFlag: X,
      dirs: ue,
      cacheIndex: ce
    } = m;
    if (X === -2 && (K = !1), Y != null && (Mt(), or(Y, null, M, m, !0), Bt()), ce != null && (w.renderCache[ce] = void 0), ae & 256) {
      w.ctx.deactivate(m);
      return;
    }
    const me = ae & 1 && ue, we = !Mn(m);
    let xe;
    if (we && (xe = J && J.onVnodeBeforeUnmount) && Pt(xe, w, m), ae & 6)
      vn(m.component, M, U);
    else {
      if (ae & 128) {
        m.suspense.unmount(M, U);
        return;
      }
      me && mn(m, null, w, "beforeUnmount"), ae & 64 ? m.type.remove(
        m,
        w,
        M,
        $t,
        U
      ) : j && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !j.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (H !== wt || X > 0 && X & 64) ? vt(
        j,
        w,
        M,
        !1,
        !0
      ) : (H === wt && X & 384 || !K && ae & 16) && vt(q, w, M), U && jt(m);
    }
    (we && (xe = J && J.onVnodeUnmounted) || me) && ct(() => {
      xe && Pt(xe, w, m), me && mn(m, null, w, "unmounted");
    }, M);
  }, jt = (m) => {
    const { type: w, el: M, anchor: U, transition: K } = m;
    if (w === wt) {
      mr(M, U);
      return;
    }
    if (w === no) {
      oe(m);
      return;
    }
    const H = () => {
      l(M), K && !K.persisted && K.afterLeave && K.afterLeave();
    };
    if (m.shapeFlag & 1 && K && !K.persisted) {
      const { leave: J, delayLeave: Y } = K, q = () => J(M, H);
      Y ? Y(m.el, H, q) : q();
    } else
      H();
  }, mr = (m, w) => {
    let M;
    for (; m !== w; )
      M = L(m), l(m), m = M;
    l(w);
  }, vn = (m, w, M) => {
    const {
      bum: U,
      scope: K,
      job: H,
      subTree: J,
      um: Y,
      m: q,
      a: j,
      parent: ae,
      slots: { __: X }
    } = m;
    As(q), As(j), U && $i(U), ae && he(X) && X.forEach((ue) => {
      ae.renderCache[ue] = void 0;
    }), K.stop(), H && (H.flags |= 8, gt(J, m, w, M)), Y && ct(Y, w), ct(() => {
      m.isUnmounted = !0;
    }, w), w && w.pendingBranch && !w.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === w.pendingId && (w.deps--, w.deps === 0 && w.resolve());
  }, vt = (m, w, M, U = !1, K = !1, H = 0) => {
    for (let J = H; J < m.length; J++)
      gt(m[J], w, M, U, K);
  }, Wt = (m) => {
    if (m.shapeFlag & 6)
      return Wt(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const w = L(m.anchor || m.el), M = w && w[vu];
    return M ? L(M) : w;
  };
  let Hn = !1;
  const se = (m, w, M) => {
    m == null ? w._vnode && gt(w._vnode, null, null, !0) : re(
      w._vnode || null,
      m,
      w,
      null,
      null,
      null,
      M
    ), w._vnode = m, Hn || (Hn = !0, gs(), _u(), Hn = !1);
  }, $t = {
    p: re,
    um: gt,
    m: xt,
    r: jt,
    mt: Rt,
    mc: $,
    pc: be,
    pbc: ye,
    n: Wt,
    o: e
  };
  return {
    render: se,
    hydrate: void 0,
    createApp: Xl(se)
  };
}
function eo({ type: e, props: n }, i) {
  return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && n && n.encoding && n.encoding.includes("html") ? void 0 : i;
}
function _n({ effect: e, job: n }, i) {
  i ? (e.flags |= 32, n.flags |= 4) : (e.flags &= -33, n.flags &= -5);
}
function ic(e, n) {
  return (!e || e && !e.pendingBranch) && n && !n.persisted;
}
function No(e, n, i = !1) {
  const s = e.children, l = n.children;
  if (he(s) && he(l))
    for (let c = 0; c < s.length; c++) {
      const d = s[c];
      let p = l[c];
      p.shapeFlag & 1 && !p.dynamicChildren && ((p.patchFlag <= 0 || p.patchFlag === 32) && (p = l[c] = rn(l[c]), p.el = d.el), !i && p.patchFlag !== -2 && No(d, p)), p.type === pi && (p.el = d.el), p.type === Vt && !p.el && (p.el = d.el);
    }
}
function oc(e) {
  const n = e.slice(), i = [0];
  let s, l, c, d, p;
  const g = e.length;
  for (s = 0; s < g; s++) {
    const N = e[s];
    if (N !== 0) {
      if (l = i[i.length - 1], e[l] < N) {
        n[s] = l, i.push(s);
        continue;
      }
      for (c = 0, d = i.length - 1; c < d; )
        p = c + d >> 1, e[i[p]] < N ? c = p + 1 : d = p;
      N < e[i[c]] && (c > 0 && (n[s] = i[c - 1]), i[c] = s);
    }
  }
  for (c = i.length, d = i[c - 1]; c-- > 0; )
    i[c] = d, d = n[d];
  return i;
}
function Lu(e) {
  const n = e.subTree.component;
  if (n)
    return n.asyncDep && !n.asyncResolved ? n : Lu(n);
}
function As(e) {
  if (e)
    for (let n = 0; n < e.length; n++)
      e[n].flags |= 8;
}
const sc = Symbol.for("v-scx"), uc = () => Wr(sc);
function uf(e, n) {
  return Co(e, null, n);
}
function to(e, n, i) {
  return Co(e, n, i);
}
function Co(e, n, i = Ne) {
  const { immediate: s, deep: l, flush: c, once: d } = i, p = ht({}, i), g = n && s || !n && c !== "post";
  let N;
  if (dr) {
    if (c === "sync") {
      const ee = uc();
      N = ee.__watcherHandles || (ee.__watcherHandles = []);
    } else if (!g) {
      const ee = () => {
      };
      return ee.stop = Ot, ee.resume = Ot, ee.pause = Ot, ee;
    }
  }
  const A = qe;
  p.call = (ee, ie, re) => Gt(ee, A, ie, re);
  let P = !1;
  c === "post" ? p.scheduler = (ee) => {
    ct(ee, A && A.suspense);
  } : c !== "sync" && (P = !0, p.scheduler = (ee, ie) => {
    ie ? ee() : Ao(ee);
  }), p.augmentJob = (ee) => {
    n && (ee.flags |= 4), P && (ee.flags |= 2, A && (ee.id = A.uid, ee.i = A));
  };
  const L = yl(e, n, p);
  return dr && (N ? N.push(L) : g && L()), L;
}
function ac(e, n, i) {
  const s = this.proxy, l = $e(e) ? e.includes(".") ? Gu(s, e) : () => s[e] : e.bind(s, s);
  let c;
  pe(n) ? c = n : (c = n.handler, i = n);
  const d = pr(this), p = Co(l, c.bind(s), i);
  return d(), p;
}
function Gu(e, n) {
  const i = n.split(".");
  return () => {
    let s = e;
    for (let l = 0; l < i.length && s; l++)
      s = s[i[l]];
    return s;
  };
}
const lc = (e, n) => n === "modelValue" || n === "model-value" ? e.modelModifiers : e[`${n}Modifiers`] || e[`${Dt(n)}Modifiers`] || e[`${hr(n)}Modifiers`];
function cc(e, n, ...i) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Ne;
  let l = i;
  const c = n.startsWith("update:"), d = c && lc(s, n.slice(7));
  d && (d.trim && (l = i.map((A) => $e(A) ? A.trim() : A)), d.number && (l = i.map(Pa)));
  let p, g = s[p = Wi(n)] || // also try camelCase event handler (#2249)
  s[p = Wi(Dt(n))];
  !g && c && (g = s[p = Wi(hr(n))]), g && Gt(
    g,
    e,
    6,
    l
  );
  const N = s[p + "Once"];
  if (N) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[p])
      return;
    e.emitted[p] = !0, Gt(
      N,
      e,
      6,
      l
    );
  }
}
function Vu(e, n, i = !1) {
  const s = n.emitsCache, l = s.get(e);
  if (l !== void 0)
    return l;
  const c = e.emits;
  let d = {}, p = !1;
  if (!pe(e)) {
    const g = (N) => {
      const A = Vu(N, n, !0);
      A && (p = !0, ht(d, A));
    };
    !i && n.mixins.length && n.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  return !c && !p ? (Be(e) && s.set(e, null), null) : (he(c) ? c.forEach((g) => d[g] = null) : ht(d, c), Be(e) && s.set(e, d), d);
}
function hi(e, n) {
  return !e || !vo(n) ? !1 : (n = n.slice(2).replace(/Once$/, ""), Se(e, n[0].toLowerCase() + n.slice(1)) || Se(e, hr(n)) || Se(e, n));
}
function Ss(e) {
  const {
    type: n,
    vnode: i,
    proxy: s,
    withProxy: l,
    propsOptions: [c],
    slots: d,
    attrs: p,
    emit: g,
    render: N,
    renderCache: A,
    props: P,
    data: L,
    setupState: ee,
    ctx: ie,
    inheritAttrs: re
  } = e, He = Zr(e);
  let ge, Re;
  try {
    if (i.shapeFlag & 4) {
      const oe = l || s, ke = tn.NODE_ENV !== "production" && ee.__isScriptSetup ? new Proxy(oe, {
        get(Pe, B, $) {
          return gl(
            `Property '${String(
              B
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Pe, B, $);
        }
      }) : oe;
      ge = Ct(
        N.call(
          ke,
          oe,
          A,
          tn.NODE_ENV !== "production" ? Lr(P) : P,
          ee,
          L,
          ie
        )
      ), Re = p;
    } else {
      const oe = n;
      tn.NODE_ENV, ge = Ct(
        oe.length > 1 ? oe(
          tn.NODE_ENV !== "production" ? Lr(P) : P,
          tn.NODE_ENV !== "production" ? {
            get attrs() {
              return Lr(p);
            },
            slots: d,
            emit: g
          } : { attrs: p, slots: d, emit: g }
        ) : oe(
          tn.NODE_ENV !== "production" ? Lr(P) : P,
          null
        )
      ), Re = n.props ? p : fc(p);
    }
  } catch (oe) {
    ur.length = 0, fi(oe, e, 1), ge = _t(Vt);
  }
  let Ie = ge;
  if (Re && re !== !1) {
    const oe = Object.keys(Re), { shapeFlag: ke } = Ie;
    oe.length && ke & 7 && (c && oe.some(js) && (Re = dc(
      Re,
      c
    )), Ie = Kn(Ie, Re, !1, !0));
  }
  return i.dirs && (Ie = Kn(Ie, null, !1, !0), Ie.dirs = Ie.dirs ? Ie.dirs.concat(i.dirs) : i.dirs), i.transition && So(Ie, i.transition), ge = Ie, Zr(He), ge;
}
const fc = (e) => {
  let n;
  for (const i in e)
    (i === "class" || i === "style" || vo(i)) && ((n || (n = {}))[i] = e[i]);
  return n;
}, dc = (e, n) => {
  const i = {};
  for (const s in e)
    (!js(s) || !(s.slice(9) in n)) && (i[s] = e[s]);
  return i;
};
function hc(e, n, i) {
  const { props: s, children: l, component: c } = e, { props: d, children: p, patchFlag: g } = n, N = c.emitsOptions;
  if (n.dirs || n.transition)
    return !0;
  if (i && g >= 0) {
    if (g & 1024)
      return !0;
    if (g & 16)
      return s ? ks(s, d, N) : !!d;
    if (g & 8) {
      const A = n.dynamicProps;
      for (let P = 0; P < A.length; P++) {
        const L = A[P];
        if (d[L] !== s[L] && !hi(N, L))
          return !0;
      }
    }
  } else
    return (l || p) && (!p || !p.$stable) ? !0 : s === d ? !1 : s ? d ? ks(s, d, N) : !0 : !!d;
  return !1;
}
function ks(e, n, i) {
  const s = Object.keys(n);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < s.length; l++) {
    const c = s[l];
    if (n[c] !== e[c] && !hi(i, c))
      return !0;
  }
  return !1;
}
function pc({ vnode: e, parent: n }, i) {
  for (; n; ) {
    const s = n.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = n.vnode).el = i, n = n.parent;
    else
      break;
  }
}
const qu = (e) => e.__isSuspense;
function mc(e, n) {
  n && n.pendingBranch ? he(e) ? n.effects.push(...e) : n.effects.push(e) : Rl(e);
}
const wt = Symbol.for("v-fgt"), pi = Symbol.for("v-txt"), Vt = Symbol.for("v-cmt"), no = Symbol.for("v-stc"), ur = [];
let dt = null;
function ho(e = !1) {
  ur.push(dt = e ? null : []);
}
function _c() {
  ur.pop(), dt = ur[ur.length - 1] || null;
}
let jn = 1;
function Ps(e, n = !1) {
  jn += e, e < 0 && dt && n && (dt.hasOnce = !0);
}
function Wu(e) {
  return e.dynamicChildren = jn > 0 ? dt || Pn : null, _c(), jn > 0 && dt && dt.push(e), e;
}
function af(e, n, i, s, l, c) {
  return Wu(
    Yu(
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
function po(e, n, i, s, l) {
  return Wu(
    _t(
      e,
      n,
      i,
      s,
      l,
      !0
    )
  );
}
function fr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Qn(e, n) {
  return e.type === n.type && e.key === n.key;
}
const $u = ({ key: e }) => e ?? null, $r = ({
  ref: e,
  ref_key: n,
  ref_for: i
}) => (typeof e == "number" && (e = "" + e), e != null ? $e(e) || We(e) || pe(e) ? { i: et, r: e, k: n, f: !!i } : e : null);
function Yu(e, n = null, i = null, s = 0, l = null, c = e === wt ? 0 : 1, d = !1, p = !1) {
  const g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: n,
    key: n && $u(n),
    ref: n && $r(n),
    scopeId: gu,
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
    ctx: et
  };
  return p ? (Do(g, i), c & 128 && e.normalize(g)) : i && (g.shapeFlag |= $e(i) ? 8 : 16), jn > 0 && // avoid a block node from tracking itself
  !d && // has current parent block
  dt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (g.patchFlag > 0 || c & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  g.patchFlag !== 32 && dt.push(g), g;
}
const _t = yc;
function yc(e, n = null, i = null, s = 0, l = null, c = !1) {
  if ((!e || e === Iu) && (e = Vt), fr(e)) {
    const p = Kn(
      e,
      n,
      !0
      /* mergeRef: true */
    );
    return i && Do(p, i), jn > 0 && !c && dt && (p.shapeFlag & 6 ? dt[dt.indexOf(e)] = p : dt.push(p)), p.patchFlag = -2, p;
  }
  if (Sc(e) && (e = e.__vccOpts), n) {
    n = gc(n);
    let { class: p, style: g } = n;
    p && !$e(p) && (n.class = si(p)), Be(g) && (Io(g) && !he(g) && (g = ht({}, g)), n.style = oi(g));
  }
  const d = $e(e) ? 1 : qu(e) ? 128 : Al(e) ? 64 : Be(e) ? 4 : pe(e) ? 2 : 0;
  return Yu(
    e,
    n,
    i,
    s,
    l,
    d,
    c,
    !0
  );
}
function gc(e) {
  return e ? Io(e) || Bu(e) ? ht({}, e) : e : null;
}
function Kn(e, n, i = !1, s = !1) {
  const { props: l, ref: c, patchFlag: d, children: p, transition: g } = e, N = n ? bc(l || {}, n) : l, A = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: N,
    key: N && $u(N),
    ref: n && n.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && c ? he(c) ? c.concat($r(n)) : [c, $r(n)] : $r(n)
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
    patchFlag: n && e.type !== wt ? d === -1 ? 16 : d | 16 : d,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: g,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Kn(e.ssContent),
    ssFallback: e.ssFallback && Kn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return g && s && So(
    A,
    g.clone(A)
  ), A;
}
function vc(e = " ", n = 0) {
  return _t(pi, null, e, n);
}
function lf(e = "", n = !1) {
  return n ? (ho(), po(Vt, null, e)) : _t(Vt, null, e);
}
function Ct(e) {
  return e == null || typeof e == "boolean" ? _t(Vt) : he(e) ? _t(
    wt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : fr(e) ? rn(e) : _t(pi, null, String(e));
}
function rn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Kn(e);
}
function Do(e, n) {
  let i = 0;
  const { shapeFlag: s } = e;
  if (n == null)
    n = null;
  else if (he(n))
    i = 16;
  else if (typeof n == "object")
    if (s & 65) {
      const l = n.default;
      l && (l._c && (l._d = !1), Do(e, l()), l._c && (l._d = !0));
      return;
    } else {
      i = 32;
      const l = n._;
      !l && !Bu(n) ? n._ctx = et : l === 3 && et && (et.slots._ === 1 ? n._ = 1 : (n._ = 2, e.patchFlag |= 1024));
    }
  else pe(n) ? (n = { default: n, _ctx: et }, i = 32) : (n = String(n), s & 64 ? (i = 16, n = [vc(n)]) : i = 8);
  e.children = n, e.shapeFlag |= i;
}
function bc(...e) {
  const n = {};
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    for (const l in s)
      if (l === "class")
        n.class !== s.class && (n.class = si([n.class, s.class]));
      else if (l === "style")
        n.style = oi([n.style, s.style]);
      else if (vo(l)) {
        const c = n[l], d = s[l];
        d && c !== d && !(he(c) && c.includes(d)) && (n[l] = c ? [].concat(c, d) : d);
      } else l !== "" && (n[l] = s[l]);
  }
  return n;
}
function Pt(e, n, i, s = null) {
  Gt(e, n, 7, [
    i,
    s
  ]);
}
const wc = Cu();
let Ec = 0;
function xc(e, n, i) {
  const s = e.type, l = (n ? n.appContext : e.appContext) || wc, c = {
    uid: Ec++,
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
    scope: new Vs(
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
    propsOptions: Ku(s, l),
    emitsOptions: Vu(s, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ne,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Ne,
    data: Ne,
    props: Ne,
    attrs: Ne,
    slots: Ne,
    refs: Ne,
    setupState: Ne,
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
  return c.ctx = { _: c }, c.root = n ? n.root : c, c.emit = cc.bind(null, c), e.ce && e.ce(c), c;
}
let qe = null;
const Xu = () => qe || et;
let ti, mo;
{
  const e = ii(), n = (i, s) => {
    let l;
    return (l = e[i]) || (l = e[i] = []), l.push(s), (c) => {
      l.length > 1 ? l.forEach((d) => d(c)) : l[0](c);
    };
  };
  ti = n(
    "__VUE_INSTANCE_SETTERS__",
    (i) => qe = i
  ), mo = n(
    "__VUE_SSR_SETTERS__",
    (i) => dr = i
  );
}
const pr = (e) => {
  const n = qe;
  return ti(e), e.scope.on(), () => {
    e.scope.off(), ti(n);
  };
}, Ns = () => {
  qe && qe.scope.off(), ti(null);
};
function zu(e) {
  return e.vnode.shapeFlag & 4;
}
let dr = !1;
function Oc(e, n = !1, i = !1) {
  n && mo(n);
  const { props: s, children: l } = e.vnode, c = zu(e);
  Jl(e, s, c, n), tc(e, l, i || n);
  const d = c ? Tc(e, n) : void 0;
  return n && mo(!1), d;
}
function Tc(e, n) {
  const i = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ll);
  const { setup: s } = i;
  if (s) {
    Mt();
    const l = e.setupContext = s.length > 1 ? Qu(e) : null, c = pr(e), d = Un(
      s,
      e,
      0,
      [
        e.props,
        l
      ]
    ), p = Us(d);
    if (Bt(), c(), (p || e.sp) && !Mn(e) && Eu(e), p) {
      if (d.then(Ns, Ns), n)
        return d.then((g) => {
          Cs(e, g);
        }).catch((g) => {
          fi(g, e, 0);
        });
      e.asyncDep = d;
    } else
      Cs(e, d);
  } else
    Ju(e);
}
function Cs(e, n, i) {
  pe(n) ? e.type.__ssrInlineRender ? e.ssrRender = n : e.render = n : Be(n) && (e.setupState = fu(n)), Ju(e);
}
function Ju(e, n, i) {
  const s = e.type;
  e.render || (e.render = s.render || Ot);
  {
    const l = pr(e);
    Mt();
    try {
      Gl(e);
    } finally {
      Bt(), l();
    }
  }
}
const Rc = {
  get(e, n) {
    return st(e, "get", ""), e[n];
  }
};
function Qu(e) {
  const n = (i) => {
    e.exposed = i || {};
  };
  return {
    attrs: new Proxy(e.attrs, Rc),
    slots: e.slots,
    emit: e.emit,
    expose: n
  };
}
function Mo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(fu(sl(e.exposed)), {
    get(n, i) {
      if (i in n)
        return n[i];
      if (i in sr)
        return sr[i](e);
    },
    has(n, i) {
      return i in n || i in sr;
    }
  })) : e.proxy;
}
const Ic = /(?:^|[-_])(\w)/g, Ac = (e) => e.replace(Ic, (n) => n.toUpperCase()).replace(/[-_]/g, "");
function Zu(e, n = !0) {
  return pe(e) ? e.displayName || e.name : e.name || n && e.__name;
}
function ea(e, n, i = !1) {
  let s = Zu(n);
  if (!s && n.__file) {
    const l = n.__file.match(/([^/\\]+)\.\w+$/);
    l && (s = l[1]);
  }
  if (!s && e && e.parent) {
    const l = (c) => {
      for (const d in c)
        if (c[d] === n)
          return d;
    };
    s = l(
      e.components || e.parent.type.components
    ) || l(e.appContext.components);
  }
  return s ? Ac(s) : i ? "App" : "Anonymous";
}
function Sc(e) {
  return pe(e) && "__vccOpts" in e;
}
const kc = (e, n) => ml(e, n, dr);
function cf(e, n, i) {
  const s = arguments.length;
  return s === 2 ? Be(n) && !he(n) ? fr(n) ? _t(e, null, [n]) : _t(e, n) : _t(e, null, n) : (s > 3 ? i = Array.prototype.slice.call(arguments, 2) : s === 3 && fr(i) && (i = [i]), _t(e, n, i));
}
function ff(e, n) {
  const i = e.memo;
  if (i.length != n.length)
    return !1;
  for (let s = 0; s < i.length; s++)
    if (Lt(i[s], n[s]))
      return !1;
  return jn > 0 && dt && dt.push(e), !0;
}
const Pc = "3.5.17";
function df(e) {
  return {
    addRecord: n,
    updateRecord: i,
    deleteRecord: s,
    createRecord: l,
    findRecordById: A,
    findRecordsByTagName: P,
    findChildRecords: Re,
    findChildRecordsByTagName: Ie,
    findChildRecordsWithinDepthAndGivenTagName: ke,
    instantiate: L,
    ensureRelationship: d,
    findRootSCL: g,
    substationExists: N,
    recordExists: c,
    findOneRecordByAttribute: re,
    findAllRecordsByAttribute: He,
    close: Pe,
    db: e
  };
  async function n(B) {
    const $ = {
      ...B,
      id: crypto.randomUUID()
    };
    try {
      const le = await e.table($.tagName).add($), ye = await e.table($.tagName).get(le);
      if (!ye) {
        const Ae = { msg: "could not find added record", table: $.tagName, addedId: le };
        throw console.error(Ae), new Error(JSON.stringify(Ae));
      }
      return ye;
    } catch (le) {
      const ye = {
        msg: "could not add record",
        db: e.name,
        table: $.tagName,
        recordToAdd: $,
        err: le
      };
      throw console.error(ye), new Error(JSON.stringify(ye));
    }
  }
  async function i(B) {
    try {
      if (await e.table(B.tagName).update(B.id, B) < 1) {
        const le = { msg: "nothing has been updated", record: B };
        throw console.error(le), new Error(JSON.stringify(le));
      }
    } catch ($) {
      console.error($);
    }
  }
  async function s(B) {
    try {
      if (B.children)
        for (const le of B.children) {
          const ye = await A(le.id, le.tagName);
          if (!ye) {
            console.warn({
              msg: "deleteRecord: child relationship found but not child record, continuing",
              child: le
            });
            continue;
          }
          await s(ye);
        }
      const $ = await ge(B);
      $ && await p($, B), await e.table(B.tagName).delete(B.id);
    } catch ($) {
      console.error($);
    }
  }
  async function l(B, $) {
    try {
      const le = await e.table(B.tagName).add(B), ye = await e.table(B.tagName).get(le);
      if (!ye) {
        console.error("could not find inserted record by id", le);
        return;
      }
      if (!$)
        return;
      await d($, ye);
    } catch (le) {
      console.error("could not create record:", le);
    }
  }
  async function c(B) {
    return await e.table(B.tagName).where({ id: B.id }).count() > 0;
  }
  async function d(B, $) {
    const le = B.children?.some(
      (Ae) => Ae.id === $.id && Ae.tagName === $.tagName
    ), ye = $.parent?.id === B.id && $.parent?.tagName === B.tagName;
    le || (B.children || (B.children = []), B.children.push({
      id: $.id,
      tagName: $.tagName
    }), await e.table(B.tagName).update(B.id, B)), ye || ($.parent = {
      id: B.id,
      tagName: B.tagName
    }, await e.table($.tagName).update($.id, $));
  }
  async function p(B, $) {
    $.parent = null, await i($), B.children && (B.children = B.children.filter((le) => le.id !== $.id), await i(B));
  }
  async function g() {
    const B = await e.table("SCL").count();
    if (B === 0) throw new Error("tfindRootSCLhere is no SCL element");
    if (B > 1) throw new Error("there are multiple SCL elements; there can be only one");
    const $ = await e.table("SCL").orderBy("id").first();
    if (!$) throw new Error("no root scl found");
    return $;
  }
  async function N(B) {
    return await e.table("Substation").filter(
      (ye) => !!ye.attributes?.some((Ae) => Ae.name === "name" && Ae.value === B)
    ).count() > 0;
  }
  async function A(B, $) {
    return await e.table($).get(B);
  }
  async function P(B) {
    return await e.table(B).toArray();
  }
  function L(B) {
    const $ = ee(B);
    if (!$)
      throw console.error('record does not have a "uuid" to move to "templateUUID"', B), new Error('record does not have a "uuid" to move to "templateUUID"');
    B.attributes?.push({ name: "templateUuid", value: $ }), ie(B);
  }
  function ee(B) {
    const $ = B.attributes?.find((le) => le.name === "uuid");
    if ($)
      return $.value;
  }
  function ie(B) {
    B.attributes || (B.attributes = []);
    const $ = crypto.randomUUID(), le = B.attributes.findIndex((Ae) => Ae.name === "uuid");
    le >= 0 ? B.attributes[le].value = $ : B.attributes.push({ name: "uuid", value: $ });
  }
  async function re(B, $) {
    return Nc(e, B, $);
  }
  async function He(B, $) {
    return Cc(e, B, $);
  }
  async function ge(B) {
    if (!B.parent)
      return;
    const $ = await e.table(B.parent.tagName).get(B.parent.id);
    if (!$) {
      console.warn({
        msg: "finding parent record, there wa a parent relationship but parent was not found, returning",
        parent: B.parent
      });
      return;
    }
    return $;
  }
  async function Re(B) {
    return Ie(B, []);
  }
  async function Ie(B, $) {
    if (!B.children || B.children.length === 0)
      return [];
    let le = B.children;
    return $.length > 0 && (le = B.children.filter((Ae) => $.includes(Ae.tagName))), (await Promise.all(
      le.map(async (Ae) => {
        const tt = Ae.tagName, Ye = Ae.id, Rt = await e.table(tt).get({ id: Ye });
        return Rt || console.warn("could not find element", { id: Ye, table: tt }), Rt;
      })
    )).filter(Boolean);
  }
  async function ke(B, $ = oe, le = []) {
    const ye = [];
    let Ae = [B];
    for (let tt = 0; tt < $; tt++) {
      const Ye = [];
      for (const Rt of Ae) {
        const It = await Ie(Rt, le);
        It.length !== 0 && (Ye.push(...It), ye.push(...It));
      }
      Ae = [...Ye];
    }
    return ye;
  }
  function Pe() {
    e.close();
  }
}
function hf(e, n) {
  return e.attributes?.find((i) => i.name === n);
}
function pf(e, n, i) {
  e.attributes || (e.attributes = []);
  const s = e.attributes?.findIndex((c) => c.name === n);
  s >= 0 ? e.attributes[s].value = i : e.attributes.push({ name: n, value: i });
}
async function Nc(e, n, i) {
  try {
    return await e.table(n).filter(
      (l) => !!l.attributes?.some((c) => c.name === i.name && c.value === i.value)
    ).first();
  } catch (s) {
    console.error({ msg: "could not find record by attribute", tagName: n, attr: i, err: s });
  }
}
async function Cc(e, n, i) {
  try {
    return await e.table(n).filter(
      (l) => !!l.attributes?.some((c) => c.name === i.name && c.value === i.value)
    ).toArray();
  } catch (s) {
    console.error({ msg: "could not find record by attribute", tagName: n, attr: i, err: s });
  }
  return [];
}
var Dc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yr = { exports: {} }, Bc = Yr.exports, Ds;
function jc() {
  return Ds || (Ds = 1, function(e, n) {
    (function(i, s) {
      e.exports = s();
    })(Bc, function() {
      var i = function(t, r) {
        return (i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, u) {
          o.__proto__ = u;
        } || function(o, u) {
          for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (o[a] = u[a]);
        })(t, r);
      }, s = function() {
        return (s = Object.assign || function(t) {
          for (var r, o = 1, u = arguments.length; o < u; o++) for (var a in r = arguments[o]) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
          return t;
        }).apply(this, arguments);
      };
      function l(t, r, o) {
        for (var u, a = 0, f = r.length; a < f; a++) !u && a in r || ((u = u || Array.prototype.slice.call(r, 0, a))[a] = r[a]);
        return t.concat(u || Array.prototype.slice.call(r));
      }
      var c = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Dc, d = Object.keys, p = Array.isArray;
      function g(t, r) {
        return typeof r != "object" || d(r).forEach(function(o) {
          t[o] = r[o];
        }), t;
      }
      typeof Promise > "u" || c.Promise || (c.Promise = Promise);
      var N = Object.getPrototypeOf, A = {}.hasOwnProperty;
      function P(t, r) {
        return A.call(t, r);
      }
      function L(t, r) {
        typeof r == "function" && (r = r(N(t))), (typeof Reflect > "u" ? d : Reflect.ownKeys)(r).forEach(function(o) {
          ie(t, o, r[o]);
        });
      }
      var ee = Object.defineProperty;
      function ie(t, r, o, u) {
        ee(t, r, g(o && P(o, "get") && typeof o.get == "function" ? { get: o.get, set: o.set, configurable: !0 } : { value: o, configurable: !0, writable: !0 }, u));
      }
      function re(t) {
        return { from: function(r) {
          return t.prototype = Object.create(r.prototype), ie(t.prototype, "constructor", t), { extend: L.bind(null, t.prototype) };
        } };
      }
      var He = Object.getOwnPropertyDescriptor, ge = [].slice;
      function Re(t, r, o) {
        return ge.call(t, r, o);
      }
      function Ie(t, r) {
        return r(t);
      }
      function oe(t) {
        if (!t) throw new Error("Assertion Failed");
      }
      function ke(t) {
        c.setImmediate ? setImmediate(t) : setTimeout(t, 0);
      }
      function Pe(t, r) {
        if (typeof r == "string" && P(t, r)) return t[r];
        if (!r) return t;
        if (typeof r != "string") {
          for (var o = [], u = 0, a = r.length; u < a; ++u) {
            var f = Pe(t, r[u]);
            o.push(f);
          }
          return o;
        }
        var h = r.indexOf(".");
        if (h !== -1) {
          var _ = t[r.substr(0, h)];
          return _ == null ? void 0 : Pe(_, r.substr(h + 1));
        }
      }
      function B(t, r, o) {
        if (t && r !== void 0 && !("isFrozen" in Object && Object.isFrozen(t))) if (typeof r != "string" && "length" in r) {
          oe(typeof o != "string" && "length" in o);
          for (var u = 0, a = r.length; u < a; ++u) B(t, r[u], o[u]);
        } else {
          var f, h, _ = r.indexOf(".");
          _ !== -1 ? (f = r.substr(0, _), (h = r.substr(_ + 1)) === "" ? o === void 0 ? p(t) && !isNaN(parseInt(f)) ? t.splice(f, 1) : delete t[f] : t[f] = o : B(_ = !(_ = t[f]) || !P(t, f) ? t[f] = {} : _, h, o)) : o === void 0 ? p(t) && !isNaN(parseInt(r)) ? t.splice(r, 1) : delete t[r] : t[r] = o;
        }
      }
      function $(t) {
        var r, o = {};
        for (r in t) P(t, r) && (o[r] = t[r]);
        return o;
      }
      var le = [].concat;
      function ye(t) {
        return le.apply([], t);
      }
      var me = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ye([8, 16, 32, 64].map(function(t) {
        return ["Int", "Uint", "Float"].map(function(r) {
          return r + t + "Array";
        });
      }))).filter(function(t) {
        return c[t];
      }), Ae = new Set(me.map(function(t) {
        return c[t];
      })), tt = null;
      function Ye(t) {
        return tt = /* @__PURE__ */ new WeakMap(), t = function r(o) {
          if (!o || typeof o != "object") return o;
          var u = tt.get(o);
          if (u) return u;
          if (p(o)) {
            u = [], tt.set(o, u);
            for (var a = 0, f = o.length; a < f; ++a) u.push(r(o[a]));
          } else if (Ae.has(o.constructor)) u = o;
          else {
            var h, _ = N(o);
            for (h in u = _ === Object.prototype ? {} : Object.create(_), tt.set(o, u), o) P(o, h) && (u[h] = r(o[h]));
          }
          return u;
        }(t), tt = null, t;
      }
      var Rt = {}.toString;
      function It(t) {
        return Rt.call(t).slice(8, -1);
      }
      var Ve = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", De = typeof Ve == "symbol" ? function(t) {
        var r;
        return t != null && (r = t[Ve]) && r.apply(t);
      } : function() {
        return null;
      };
      function be(t, r) {
        return r = t.indexOf(r), 0 <= r && t.splice(r, 1), 0 <= r;
      }
      var pt = {};
      function mt(t) {
        var r, o, u, a;
        if (arguments.length === 1) {
          if (p(t)) return t.slice();
          if (this === pt && typeof t == "string") return [t];
          if (a = De(t)) {
            for (o = []; !(u = a.next()).done; ) o.push(u.value);
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
      var xt = typeof Symbol < "u" ? function(t) {
        return t[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, ce = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], bt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(ce), gt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function jt(t, r) {
        this.name = t, this.message = r;
      }
      function mr(t, r) {
        return t + ". Errors: " + Object.keys(r).map(function(o) {
          return r[o].toString();
        }).filter(function(o, u, a) {
          return a.indexOf(o) === u;
        }).join(`
`);
      }
      function vn(t, r, o, u) {
        this.failures = r, this.failedKeys = u, this.successCount = o, this.message = mr(t, r);
      }
      function vt(t, r) {
        this.name = "BulkError", this.failures = Object.keys(r).map(function(o) {
          return r[o];
        }), this.failuresByPos = r, this.message = mr(t, this.failures);
      }
      re(jt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), re(vn).from(jt), re(vt).from(jt);
      var Wt = bt.reduce(function(t, r) {
        return t[r] = r + "Error", t;
      }, {}), Hn = jt, se = bt.reduce(function(t, r) {
        var o = r + "Error";
        function u(a, f) {
          this.name = o, a ? typeof a == "string" ? (this.message = "".concat(a).concat(f ? `
 ` + f : ""), this.inner = f || null) : typeof a == "object" && (this.message = "".concat(a.name, " ").concat(a.message), this.inner = a) : (this.message = gt[r] || o, this.inner = null);
        }
        return re(u).from(Hn), t[r] = u, t;
      }, {});
      se.Syntax = SyntaxError, se.Type = TypeError, se.Range = RangeError;
      var $t = ce.reduce(function(t, r) {
        return t[r + "Error"] = se[r], t;
      }, {}), Fn = bt.reduce(function(t, r) {
        return ["Syntax", "Type", "Range"].indexOf(r) === -1 && (t[r + "Error"] = se[r]), t;
      }, {});
      function m() {
      }
      function w(t) {
        return t;
      }
      function M(t, r) {
        return t == null || t === w ? r : function(o) {
          return r(t(o));
        };
      }
      function U(t, r) {
        return function() {
          t.apply(this, arguments), r.apply(this, arguments);
        };
      }
      function K(t, r) {
        return t === m ? r : function() {
          var o = t.apply(this, arguments);
          o !== void 0 && (arguments[0] = o);
          var u = this.onsuccess, a = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var f = r.apply(this, arguments);
          return u && (this.onsuccess = this.onsuccess ? U(u, this.onsuccess) : u), a && (this.onerror = this.onerror ? U(a, this.onerror) : a), f !== void 0 ? f : o;
        };
      }
      function H(t, r) {
        return t === m ? r : function() {
          t.apply(this, arguments);
          var o = this.onsuccess, u = this.onerror;
          this.onsuccess = this.onerror = null, r.apply(this, arguments), o && (this.onsuccess = this.onsuccess ? U(o, this.onsuccess) : o), u && (this.onerror = this.onerror ? U(u, this.onerror) : u);
        };
      }
      function J(t, r) {
        return t === m ? r : function(o) {
          var u = t.apply(this, arguments);
          g(o, u);
          var a = this.onsuccess, f = this.onerror;
          return this.onsuccess = null, this.onerror = null, o = r.apply(this, arguments), a && (this.onsuccess = this.onsuccess ? U(a, this.onsuccess) : a), f && (this.onerror = this.onerror ? U(f, this.onerror) : f), u === void 0 ? o === void 0 ? void 0 : o : g(u, o);
        };
      }
      function Y(t, r) {
        return t === m ? r : function() {
          return r.apply(this, arguments) !== !1 && t.apply(this, arguments);
        };
      }
      function q(t, r) {
        return t === m ? r : function() {
          var o = t.apply(this, arguments);
          if (o && typeof o.then == "function") {
            for (var u = this, a = arguments.length, f = new Array(a); a--; ) f[a] = arguments[a];
            return o.then(function() {
              return r.apply(u, f);
            });
          }
          return r.apply(this, arguments);
        };
      }
      Fn.ModifyError = vn, Fn.DexieError = jt, Fn.BulkError = vt;
      var j = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function ae(t) {
        j = t;
      }
      var X = {}, ue = 100, me = typeof Promise > "u" ? [] : function() {
        var t = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [t, N(t), t];
        var r = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [r, N(r), t];
      }(), ce = me[0], bt = me[1], me = me[2], bt = bt && bt.then, we = ce && ce.constructor, xe = !!me, Ge = function(t, r) {
        Yt.push([t, r]), ut && (queueMicrotask(na), ut = !1);
      }, Xe = !0, ut = !0, ze = [], At = [], bn = w, Ke = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: m, pgp: !1, env: {}, finalize: m }, ne = Ke, Yt = [], an = 0, _r = [];
      function Z(t) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var r = this._PSD = ne;
        if (typeof t != "function") {
          if (t !== X) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && _i(this, this._value));
        }
        this._state = null, this._value = null, ++r.ref, function o(u, a) {
          try {
            a(function(f) {
              if (u._state === null) {
                if (f === u) throw new TypeError("A promise cannot be resolved with itself.");
                var h = u._lib && wn();
                f && typeof f.then == "function" ? o(u, function(_, v) {
                  f instanceof Z ? f._then(_, v) : f.then(_, v);
                }) : (u._state = !0, u._value = f, jo(u)), h && En();
              }
            }, _i.bind(null, u));
          } catch (f) {
            _i(u, f);
          }
        }(this, t);
      }
      var mi = { get: function() {
        var t = ne, r = br;
        function o(u, a) {
          var f = this, h = !t.global && (t !== ne || r !== br), _ = h && !zt(), v = new Z(function(E, O) {
            yi(f, new Bo(Uo(u, t, h, _), Uo(a, t, h, _), E, O, t));
          });
          return this._consoleTask && (v._consoleTask = this._consoleTask), v;
        }
        return o.prototype = X, o;
      }, set: function(t) {
        ie(this, "then", t && t.prototype === X ? mi : { get: function() {
          return t;
        }, set: mi.set });
      } };
      function Bo(t, r, o, u, a) {
        this.onFulfilled = typeof t == "function" ? t : null, this.onRejected = typeof r == "function" ? r : null, this.resolve = o, this.reject = u, this.psd = a;
      }
      function _i(t, r) {
        var o, u;
        At.push(r), t._state === null && (o = t._lib && wn(), r = bn(r), t._state = !1, t._value = r, u = t, ze.some(function(a) {
          return a._value === u._value;
        }) || ze.push(u), jo(t), o && En());
      }
      function jo(t) {
        var r = t._listeners;
        t._listeners = [];
        for (var o = 0, u = r.length; o < u; ++o) yi(t, r[o]);
        var a = t._PSD;
        --a.ref || a.finalize(), an === 0 && (++an, Ge(function() {
          --an == 0 && gi();
        }, []));
      }
      function yi(t, r) {
        if (t._state !== null) {
          var o = t._state ? r.onFulfilled : r.onRejected;
          if (o === null) return (t._state ? r.resolve : r.reject)(t._value);
          ++r.psd.ref, ++an, Ge(ta, [o, t, r]);
        } else t._listeners.push(r);
      }
      function ta(t, r, o) {
        try {
          var u, a = r._value;
          !r._state && At.length && (At = []), u = j && r._consoleTask ? r._consoleTask.run(function() {
            return t(a);
          }) : t(a), r._state || At.indexOf(a) !== -1 || function(f) {
            for (var h = ze.length; h; ) if (ze[--h]._value === f._value) return ze.splice(h, 1);
          }(r), o.resolve(u);
        } catch (f) {
          o.reject(f);
        } finally {
          --an == 0 && gi(), --o.psd.ref || o.psd.finalize();
        }
      }
      function na() {
        ln(Ke, function() {
          wn() && En();
        });
      }
      function wn() {
        var t = Xe;
        return ut = Xe = !1, t;
      }
      function En() {
        var t, r, o;
        do
          for (; 0 < Yt.length; ) for (t = Yt, Yt = [], o = t.length, r = 0; r < o; ++r) {
            var u = t[r];
            u[0].apply(null, u[1]);
          }
        while (0 < Yt.length);
        ut = Xe = !0;
      }
      function gi() {
        var t = ze;
        ze = [], t.forEach(function(u) {
          u._PSD.onunhandled.call(null, u._value, u);
        });
        for (var r = _r.slice(0), o = r.length; o; ) r[--o]();
      }
      function yr(t) {
        return new Z(X, !1, t);
      }
      function je(t, r) {
        var o = ne;
        return function() {
          var u = wn(), a = ne;
          try {
            return Jt(o, !0), t.apply(this, arguments);
          } catch (f) {
            r && r(f);
          } finally {
            Jt(a, !1), u && En();
          }
        };
      }
      L(Z.prototype, { then: mi, _then: function(t, r) {
        yi(this, new Bo(null, null, t, r, ne));
      }, catch: function(t) {
        if (arguments.length === 1) return this.then(null, t);
        var r = t, o = arguments[1];
        return typeof r == "function" ? this.then(null, function(u) {
          return (u instanceof r ? o : yr)(u);
        }) : this.then(null, function(u) {
          return (u && u.name === r ? o : yr)(u);
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
        var o = this;
        return t < 1 / 0 ? new Z(function(u, a) {
          var f = setTimeout(function() {
            return a(new se.Timeout(r));
          }, t);
          o.then(u, a).finally(clearTimeout.bind(null, f));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && ie(Z.prototype, Symbol.toStringTag, "Dexie.Promise"), Ke.env = Ko(), L(Z, { all: function() {
        var t = mt.apply(null, arguments).map(wr);
        return new Z(function(r, o) {
          t.length === 0 && r([]);
          var u = t.length;
          t.forEach(function(a, f) {
            return Z.resolve(a).then(function(h) {
              t[f] = h, --u || r(t);
            }, o);
          });
        });
      }, resolve: function(t) {
        return t instanceof Z ? t : t && typeof t.then == "function" ? new Z(function(r, o) {
          t.then(r, o);
        }) : new Z(X, !0, t);
      }, reject: yr, race: function() {
        var t = mt.apply(null, arguments).map(wr);
        return new Z(function(r, o) {
          t.map(function(u) {
            return Z.resolve(u).then(r, o);
          });
        });
      }, PSD: { get: function() {
        return ne;
      }, set: function(t) {
        return ne = t;
      } }, totalEchoes: { get: function() {
        return br;
      } }, newPSD: Xt, usePSD: ln, scheduler: { get: function() {
        return Ge;
      }, set: function(t) {
        Ge = t;
      } }, rejectionMapper: { get: function() {
        return bn;
      }, set: function(t) {
        bn = t;
      } }, follow: function(t, r) {
        return new Z(function(o, u) {
          return Xt(function(a, f) {
            var h = ne;
            h.unhandleds = [], h.onunhandled = f, h.finalize = U(function() {
              var _, v = this;
              _ = function() {
                v.unhandleds.length === 0 ? a() : f(v.unhandleds[0]);
              }, _r.push(function E() {
                _(), _r.splice(_r.indexOf(E), 1);
              }), ++an, Ge(function() {
                --an == 0 && gi();
              }, []);
            }, h.finalize), t();
          }, r, o, u);
        });
      } }), we && (we.allSettled && ie(Z, "allSettled", function() {
        var t = mt.apply(null, arguments).map(wr);
        return new Z(function(r) {
          t.length === 0 && r([]);
          var o = t.length, u = new Array(o);
          t.forEach(function(a, f) {
            return Z.resolve(a).then(function(h) {
              return u[f] = { status: "fulfilled", value: h };
            }, function(h) {
              return u[f] = { status: "rejected", reason: h };
            }).then(function() {
              return --o || r(u);
            });
          });
        });
      }), we.any && typeof AggregateError < "u" && ie(Z, "any", function() {
        var t = mt.apply(null, arguments).map(wr);
        return new Z(function(r, o) {
          t.length === 0 && o(new AggregateError([]));
          var u = t.length, a = new Array(u);
          t.forEach(function(f, h) {
            return Z.resolve(f).then(function(_) {
              return r(_);
            }, function(_) {
              a[h] = _, --u || o(new AggregateError(a));
            });
          });
        });
      }), we.withResolvers && (Z.withResolvers = we.withResolvers));
      var Je = { awaits: 0, echoes: 0, id: 0 }, ra = 0, gr = [], vr = 0, br = 0, ia = 0;
      function Xt(t, r, o, u) {
        var a = ne, f = Object.create(a);
        return f.parent = a, f.ref = 0, f.global = !1, f.id = ++ia, Ke.env, f.env = xe ? { Promise: Z, PromiseProp: { value: Z, configurable: !0, writable: !0 }, all: Z.all, race: Z.race, allSettled: Z.allSettled, any: Z.any, resolve: Z.resolve, reject: Z.reject } : {}, r && g(f, r), ++a.ref, f.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, u = ln(f, t, o, u), f.ref === 0 && f.finalize(), u;
      }
      function xn() {
        return Je.id || (Je.id = ++ra), ++Je.awaits, Je.echoes += ue, Je.id;
      }
      function zt() {
        return !!Je.awaits && (--Je.awaits == 0 && (Je.id = 0), Je.echoes = Je.awaits * ue, !0);
      }
      function wr(t) {
        return Je.echoes && t && t.constructor === we ? (xn(), t.then(function(r) {
          return zt(), r;
        }, function(r) {
          return zt(), Fe(r);
        })) : t;
      }
      function oa() {
        var t = gr[gr.length - 1];
        gr.pop(), Jt(t, !1);
      }
      function Jt(t, r) {
        var o, u = ne;
        (r ? !Je.echoes || vr++ && t === ne : !vr || --vr && t === ne) || queueMicrotask(r ? (function(a) {
          ++br, Je.echoes && --Je.echoes != 0 || (Je.echoes = Je.awaits = Je.id = 0), gr.push(ne), Jt(a, !0);
        }).bind(null, t) : oa), t !== ne && (ne = t, u === Ke && (Ke.env = Ko()), xe && (o = Ke.env.Promise, r = t.env, (u.global || t.global) && (Object.defineProperty(c, "Promise", r.PromiseProp), o.all = r.all, o.race = r.race, o.resolve = r.resolve, o.reject = r.reject, r.allSettled && (o.allSettled = r.allSettled), r.any && (o.any = r.any))));
      }
      function Ko() {
        var t = c.Promise;
        return xe ? { Promise: t, PromiseProp: Object.getOwnPropertyDescriptor(c, "Promise"), all: t.all, race: t.race, allSettled: t.allSettled, any: t.any, resolve: t.resolve, reject: t.reject } : {};
      }
      function ln(t, r, o, u, a) {
        var f = ne;
        try {
          return Jt(t, !0), r(o, u, a);
        } finally {
          Jt(f, !1);
        }
      }
      function Uo(t, r, o, u) {
        return typeof t != "function" ? t : function() {
          var a = ne;
          o && xn(), Jt(r, !0);
          try {
            return t.apply(this, arguments);
          } finally {
            Jt(a, !1), u && queueMicrotask(zt);
          }
        };
      }
      function vi(t) {
        Promise === we && Je.echoes === 0 ? vr === 0 ? t() : enqueueNativeMicroTask(t) : setTimeout(t, 0);
      }
      ("" + bt).indexOf("[native code]") === -1 && (xn = zt = m);
      var Fe = Z.reject, cn = "￿", Kt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Ho = "String expected.", On = [], Er = "__dbnames", bi = "readonly", wi = "readwrite";
      function fn(t, r) {
        return t ? r ? function() {
          return t.apply(this, arguments) && r.apply(this, arguments);
        } : t : r;
      }
      var Fo = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function xr(t) {
        return typeof t != "string" || /\./.test(t) ? function(r) {
          return r;
        } : function(r) {
          return r[t] === void 0 && t in r && delete (r = Ye(r))[t], r;
        };
      }
      function Lo() {
        throw se.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function ve(t, r) {
        try {
          var o = Go(t), u = Go(r);
          if (o !== u) return o === "Array" ? 1 : u === "Array" ? -1 : o === "binary" ? 1 : u === "binary" ? -1 : o === "string" ? 1 : u === "string" ? -1 : o === "Date" ? 1 : u !== "Date" ? NaN : -1;
          switch (o) {
            case "number":
            case "Date":
            case "string":
              return r < t ? 1 : t < r ? -1 : 0;
            case "binary":
              return function(a, f) {
                for (var h = a.length, _ = f.length, v = h < _ ? h : _, E = 0; E < v; ++E) if (a[E] !== f[E]) return a[E] < f[E] ? -1 : 1;
                return h === _ ? 0 : h < _ ? -1 : 1;
              }(Vo(t), Vo(r));
            case "Array":
              return function(a, f) {
                for (var h = a.length, _ = f.length, v = h < _ ? h : _, E = 0; E < v; ++E) {
                  var O = ve(a[E], f[E]);
                  if (O !== 0) return O;
                }
                return h === _ ? 0 : h < _ ? -1 : 1;
              }(t, r);
          }
        } catch {
        }
        return NaN;
      }
      function Go(t) {
        var r = typeof t;
        return r != "object" ? r : ArrayBuffer.isView(t) ? "binary" : (t = It(t), t === "ArrayBuffer" ? "binary" : t);
      }
      function Vo(t) {
        return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t);
      }
      function Or(t, r, o) {
        var u = t.schema.yProps;
        return u ? (r && 0 < o.numFailures && (r = r.filter(function(a, f) {
          return !o.failures[f];
        })), Promise.all(u.map(function(a) {
          return a = a.updatesTable, r ? t.db.table(a).where("k").anyOf(r).delete() : t.db.table(a).clear();
        })).then(function() {
          return o;
        })) : o;
      }
      var qo = (Me.prototype._trans = function(t, r, o) {
        var u = this._tx || ne.trans, a = this.name, f = j && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(t === "readonly" ? "read" : "write", " ").concat(this.name));
        function h(E, O, y) {
          if (!y.schema[a]) throw new se.NotFound("Table " + a + " not part of transaction");
          return r(y.idbtrans, y);
        }
        var _ = wn();
        try {
          var v = u && u.db._novip === this.db._novip ? u === ne.trans ? u._promise(t, h, o) : Xt(function() {
            return u._promise(t, h, o);
          }, { trans: u, transless: ne.transless || ne }) : function E(O, y, I, b) {
            if (O.idbdb && (O._state.openComplete || ne.letThrough || O._vip)) {
              var x = O._createTransaction(y, I, O._dbSchema);
              try {
                x.create(), O._state.PR1398_maxLoop = 3;
              } catch (R) {
                return R.name === Wt.InvalidState && O.isOpen() && 0 < --O._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), O.close({ disableAutoOpen: !1 }), O.open().then(function() {
                  return E(O, y, I, b);
                })) : Fe(R);
              }
              return x._promise(y, function(R, T) {
                return Xt(function() {
                  return ne.trans = x, b(R, T, x);
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
            if (O._state.openComplete) return Fe(new se.DatabaseClosed(O._state.dbOpenError));
            if (!O._state.isBeingOpened) {
              if (!O._state.autoOpen) return Fe(new se.DatabaseClosed());
              O.open().catch(m);
            }
            return O._state.dbReadyPromise.then(function() {
              return E(O, y, I, b);
            });
          }(this.db, t, [this.name], h);
          return f && (v._consoleTask = f, v = v.catch(function(E) {
            return console.trace(E), Fe(E);
          })), v;
        } finally {
          _ && En();
        }
      }, Me.prototype.get = function(t, r) {
        var o = this;
        return t && t.constructor === Object ? this.where(t).first(r) : t == null ? Fe(new se.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(u) {
          return o.core.get({ trans: u, key: t }).then(function(a) {
            return o.hook.reading.fire(a);
          });
        }).then(r);
      }, Me.prototype.where = function(t) {
        if (typeof t == "string") return new this.db.WhereClause(this, t);
        if (p(t)) return new this.db.WhereClause(this, "[".concat(t.join("+"), "]"));
        var r = d(t);
        if (r.length === 1) return this.where(r[0]).equals(t[r[0]]);
        var o = this.schema.indexes.concat(this.schema.primKey).filter(function(_) {
          if (_.compound && r.every(function(E) {
            return 0 <= _.keyPath.indexOf(E);
          })) {
            for (var v = 0; v < r.length; ++v) if (r.indexOf(_.keyPath[v]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(_, v) {
          return _.keyPath.length - v.keyPath.length;
        })[0];
        if (o && this.db._maxKey !== cn) {
          var f = o.keyPath.slice(0, r.length);
          return this.where(f).equals(f.map(function(v) {
            return t[v];
          }));
        }
        !o && j && console.warn("The query ".concat(JSON.stringify(t), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(r.join("+"), "]"));
        var u = this.schema.idxByName;
        function a(_, v) {
          return ve(_, v) === 0;
        }
        var h = r.reduce(function(y, v) {
          var E = y[0], O = y[1], y = u[v], I = t[v];
          return [E || y, E || !y ? fn(O, y && y.multi ? function(b) {
            return b = Pe(b, v), p(b) && b.some(function(x) {
              return a(I, x);
            });
          } : function(b) {
            return a(I, Pe(b, v));
          }) : O];
        }, [null, null]), f = h[0], h = h[1];
        return f ? this.where(f.name).equals(t[f.keyPath]).filter(h) : o ? this.filter(h) : this.where(r).equals("");
      }, Me.prototype.filter = function(t) {
        return this.toCollection().and(t);
      }, Me.prototype.count = function(t) {
        return this.toCollection().count(t);
      }, Me.prototype.offset = function(t) {
        return this.toCollection().offset(t);
      }, Me.prototype.limit = function(t) {
        return this.toCollection().limit(t);
      }, Me.prototype.each = function(t) {
        return this.toCollection().each(t);
      }, Me.prototype.toArray = function(t) {
        return this.toCollection().toArray(t);
      }, Me.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Me.prototype.orderBy = function(t) {
        return new this.db.Collection(new this.db.WhereClause(this, p(t) ? "[".concat(t.join("+"), "]") : t));
      }, Me.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Me.prototype.mapToClass = function(t) {
        var r, o = this.db, u = this.name;
        function a() {
          return r !== null && r.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = t).prototype instanceof Lo && (function(v, E) {
          if (typeof E != "function" && E !== null) throw new TypeError("Class extends value " + String(E) + " is not a constructor or null");
          function O() {
            this.constructor = v;
          }
          i(v, E), v.prototype = E === null ? Object.create(E) : (O.prototype = E.prototype, new O());
        }(a, r = t), Object.defineProperty(a.prototype, "db", { get: function() {
          return o;
        }, enumerable: !1, configurable: !0 }), a.prototype.table = function() {
          return u;
        }, t = a);
        for (var f = /* @__PURE__ */ new Set(), h = t.prototype; h; h = N(h)) Object.getOwnPropertyNames(h).forEach(function(v) {
          return f.add(v);
        });
        function _(v) {
          if (!v) return v;
          var E, O = Object.create(t.prototype);
          for (E in v) if (!f.has(E)) try {
            O[E] = v[E];
          } catch {
          }
          return O;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = _, this.hook("reading", _), t;
      }, Me.prototype.defineClass = function() {
        return this.mapToClass(function(t) {
          g(this, t);
        });
      }, Me.prototype.add = function(t, r) {
        var o = this, u = this.schema.primKey, a = u.auto, f = u.keyPath, h = t;
        return f && a && (h = xr(f)(t)), this._trans("readwrite", function(_) {
          return o.core.mutate({ trans: _, type: "add", keys: r != null ? [r] : null, values: [h] });
        }).then(function(_) {
          return _.numFailures ? Z.reject(_.failures[0]) : _.lastResult;
        }).then(function(_) {
          if (f) try {
            B(t, f, _);
          } catch {
          }
          return _;
        });
      }, Me.prototype.update = function(t, r) {
        return typeof t != "object" || p(t) ? this.where(":id").equals(t).modify(r) : (t = Pe(t, this.schema.primKey.keyPath), t === void 0 ? Fe(new se.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(t).modify(r));
      }, Me.prototype.put = function(t, r) {
        var o = this, u = this.schema.primKey, a = u.auto, f = u.keyPath, h = t;
        return f && a && (h = xr(f)(t)), this._trans("readwrite", function(_) {
          return o.core.mutate({ trans: _, type: "put", values: [h], keys: r != null ? [r] : null });
        }).then(function(_) {
          return _.numFailures ? Z.reject(_.failures[0]) : _.lastResult;
        }).then(function(_) {
          if (f) try {
            B(t, f, _);
          } catch {
          }
          return _;
        });
      }, Me.prototype.delete = function(t) {
        var r = this;
        return this._trans("readwrite", function(o) {
          return r.core.mutate({ trans: o, type: "delete", keys: [t] }).then(function(u) {
            return Or(r, [t], u);
          }).then(function(u) {
            return u.numFailures ? Z.reject(u.failures[0]) : void 0;
          });
        });
      }, Me.prototype.clear = function() {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "deleteRange", range: Fo }).then(function(o) {
            return Or(t, null, o);
          });
        }).then(function(r) {
          return r.numFailures ? Z.reject(r.failures[0]) : void 0;
        });
      }, Me.prototype.bulkGet = function(t) {
        var r = this;
        return this._trans("readonly", function(o) {
          return r.core.getMany({ keys: t, trans: o }).then(function(u) {
            return u.map(function(a) {
              return r.hook.reading.fire(a);
            });
          });
        });
      }, Me.prototype.bulkAdd = function(t, r, o) {
        var u = this, a = Array.isArray(r) ? r : void 0, f = (o = o || (a ? void 0 : r)) ? o.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var E = u.schema.primKey, _ = E.auto, E = E.keyPath;
          if (E && a) throw new se.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== t.length) throw new se.InvalidArgument("Arguments objects and keys must have the same length");
          var v = t.length, E = E && _ ? t.map(xr(E)) : t;
          return u.core.mutate({ trans: h, type: "add", keys: a, values: E, wantResults: f }).then(function(x) {
            var y = x.numFailures, I = x.results, b = x.lastResult, x = x.failures;
            if (y === 0) return f ? I : b;
            throw new vt("".concat(u.name, ".bulkAdd(): ").concat(y, " of ").concat(v, " operations failed"), x);
          });
        });
      }, Me.prototype.bulkPut = function(t, r, o) {
        var u = this, a = Array.isArray(r) ? r : void 0, f = (o = o || (a ? void 0 : r)) ? o.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var E = u.schema.primKey, _ = E.auto, E = E.keyPath;
          if (E && a) throw new se.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== t.length) throw new se.InvalidArgument("Arguments objects and keys must have the same length");
          var v = t.length, E = E && _ ? t.map(xr(E)) : t;
          return u.core.mutate({ trans: h, type: "put", keys: a, values: E, wantResults: f }).then(function(x) {
            var y = x.numFailures, I = x.results, b = x.lastResult, x = x.failures;
            if (y === 0) return f ? I : b;
            throw new vt("".concat(u.name, ".bulkPut(): ").concat(y, " of ").concat(v, " operations failed"), x);
          });
        });
      }, Me.prototype.bulkUpdate = function(t) {
        var r = this, o = this.core, u = t.map(function(h) {
          return h.key;
        }), a = t.map(function(h) {
          return h.changes;
        }), f = [];
        return this._trans("readwrite", function(h) {
          return o.getMany({ trans: h, keys: u, cache: "clone" }).then(function(_) {
            var v = [], E = [];
            t.forEach(function(y, I) {
              var b = y.key, x = y.changes, R = _[I];
              if (R) {
                for (var T = 0, S = Object.keys(x); T < S.length; T++) {
                  var k = S[T], C = x[k];
                  if (k === r.schema.primKey.keyPath) {
                    if (ve(C, b) !== 0) throw new se.Constraint("Cannot update primary key in bulkUpdate()");
                  } else B(R, k, C);
                }
                f.push(I), v.push(b), E.push(R);
              }
            });
            var O = v.length;
            return o.mutate({ trans: h, type: "put", keys: v, values: E, updates: { keys: u, changeSpecs: a } }).then(function(y) {
              var I = y.numFailures, b = y.failures;
              if (I === 0) return O;
              for (var x = 0, R = Object.keys(b); x < R.length; x++) {
                var T, S = R[x], k = f[Number(S)];
                k != null && (T = b[S], delete b[S], b[k] = T);
              }
              throw new vt("".concat(r.name, ".bulkUpdate(): ").concat(I, " of ").concat(O, " operations failed"), b);
            });
          });
        });
      }, Me.prototype.bulkDelete = function(t) {
        var r = this, o = t.length;
        return this._trans("readwrite", function(u) {
          return r.core.mutate({ trans: u, type: "delete", keys: t }).then(function(a) {
            return Or(r, t, a);
          });
        }).then(function(h) {
          var a = h.numFailures, f = h.lastResult, h = h.failures;
          if (a === 0) return f;
          throw new vt("".concat(r.name, ".bulkDelete(): ").concat(a, " of ").concat(o, " operations failed"), h);
        });
      }, Me);
      function Me() {
      }
      function Ln(t) {
        function r(h, _) {
          if (_) {
            for (var v = arguments.length, E = new Array(v - 1); --v; ) E[v - 1] = arguments[v];
            return o[h].subscribe.apply(null, E), t;
          }
          if (typeof h == "string") return o[h];
        }
        var o = {};
        r.addEventType = f;
        for (var u = 1, a = arguments.length; u < a; ++u) f(arguments[u]);
        return r;
        function f(h, _, v) {
          if (typeof h != "object") {
            var E;
            _ = _ || Y;
            var O = { subscribers: [], fire: v = v || m, subscribe: function(y) {
              O.subscribers.indexOf(y) === -1 && (O.subscribers.push(y), O.fire = _(O.fire, y));
            }, unsubscribe: function(y) {
              O.subscribers = O.subscribers.filter(function(I) {
                return I !== y;
              }), O.fire = O.subscribers.reduce(_, v);
            } };
            return o[h] = r[h] = O;
          }
          d(E = h).forEach(function(y) {
            var I = E[y];
            if (p(I)) f(y, E[y][0], E[y][1]);
            else {
              if (I !== "asap") throw new se.InvalidArgument("Invalid event config");
              var b = f(y, w, function() {
                for (var x = arguments.length, R = new Array(x); x--; ) R[x] = arguments[x];
                b.subscribers.forEach(function(T) {
                  ke(function() {
                    T.apply(null, R);
                  });
                });
              });
            }
          });
        }
      }
      function Gn(t, r) {
        return re(r).from({ prototype: t }), r;
      }
      function Tn(t, r) {
        return !(t.filter || t.algorithm || t.or) && (r ? t.justLimit : !t.replayFilter);
      }
      function Ei(t, r) {
        t.filter = fn(t.filter, r);
      }
      function xi(t, r, o) {
        var u = t.replayFilter;
        t.replayFilter = u ? function() {
          return fn(u(), r());
        } : r, t.justLimit = o && !u;
      }
      function Tr(t, r) {
        if (t.isPrimKey) return r.primaryKey;
        var o = r.getIndexByKeyPath(t.index);
        if (!o) throw new se.Schema("KeyPath " + t.index + " on object store " + r.name + " is not indexed");
        return o;
      }
      function Wo(t, r, o) {
        var u = Tr(t, r.schema);
        return r.openCursor({ trans: o, values: !t.keysOnly, reverse: t.dir === "prev", unique: !!t.unique, query: { index: u, range: t.range } });
      }
      function Rr(t, r, o, u) {
        var a = t.replayFilter ? fn(t.filter, t.replayFilter()) : t.filter;
        if (t.or) {
          var f = {}, h = function(_, v, E) {
            var O, y;
            a && !a(v, E, function(I) {
              return v.stop(I);
            }, function(I) {
              return v.fail(I);
            }) || ((y = "" + (O = v.primaryKey)) == "[object ArrayBuffer]" && (y = "" + new Uint8Array(O)), P(f, y) || (f[y] = !0, r(_, v, E)));
          };
          return Promise.all([t.or._iterate(h, o), $o(Wo(t, u, o), t.algorithm, h, !t.keysOnly && t.valueMapper)]);
        }
        return $o(Wo(t, u, o), fn(t.algorithm, a), r, !t.keysOnly && t.valueMapper);
      }
      function $o(t, r, o, u) {
        var a = je(u ? function(f, h, _) {
          return o(u(f), h, _);
        } : o);
        return t.then(function(f) {
          if (f) return f.start(function() {
            var h = function() {
              return f.continue();
            };
            r && !r(f, function(_) {
              return h = _;
            }, function(_) {
              f.stop(_), h = m;
            }, function(_) {
              f.fail(_), h = m;
            }) || a(f.value, f, function(_) {
              return h = _;
            }), h();
          });
        });
      }
      var Vn = (Yo.prototype.execute = function(t) {
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
          var u = r.remove;
          if (p(u)) return p(t) ? t.filter(function(a) {
            return !u.includes(a);
          }).sort() : [];
          if (typeof u == "number") return Number(t) - u;
          if (typeof u == "bigint") try {
            return BigInt(t) - u;
          } catch {
            return BigInt(0) - u;
          }
          throw new TypeError("Invalid subtrahend ".concat(u));
        }
        return o = (o = r.replacePrefix) === null || o === void 0 ? void 0 : o[0], o && typeof t == "string" && t.startsWith(o) ? r.replacePrefix[1] + t.substring(o.length) : t;
      }, Yo);
      function Yo(t) {
        this["@@propmod"] = t;
      }
      var sa = (Te.prototype._read = function(t, r) {
        var o = this._ctx;
        return o.error ? o.table._trans(null, Fe.bind(null, o.error)) : o.table._trans("readonly", t).then(r);
      }, Te.prototype._write = function(t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, Fe.bind(null, r.error)) : r.table._trans("readwrite", t, "locked");
      }, Te.prototype._addAlgorithm = function(t) {
        var r = this._ctx;
        r.algorithm = fn(r.algorithm, t);
      }, Te.prototype._iterate = function(t, r) {
        return Rr(this._ctx, t, r, this._ctx.table.core);
      }, Te.prototype.clone = function(t) {
        var r = Object.create(this.constructor.prototype), o = Object.create(this._ctx);
        return t && g(o, t), r._ctx = o, r;
      }, Te.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Te.prototype.each = function(t) {
        var r = this._ctx;
        return this._read(function(o) {
          return Rr(r, t, o, r.table.core);
        });
      }, Te.prototype.count = function(t) {
        var r = this;
        return this._read(function(o) {
          var u = r._ctx, a = u.table.core;
          if (Tn(u, !0)) return a.count({ trans: o, query: { index: Tr(u, a.schema), range: u.range } }).then(function(h) {
            return Math.min(h, u.limit);
          });
          var f = 0;
          return Rr(u, function() {
            return ++f, !1;
          }, o, a).then(function() {
            return f;
          });
        }).then(t);
      }, Te.prototype.sortBy = function(t, r) {
        var o = t.split(".").reverse(), u = o[0], a = o.length - 1;
        function f(v, E) {
          return E ? f(v[o[E]], E - 1) : v[u];
        }
        var h = this._ctx.dir === "next" ? 1 : -1;
        function _(v, E) {
          return ve(f(v, a), f(E, a)) * h;
        }
        return this.toArray(function(v) {
          return v.sort(_);
        }).then(r);
      }, Te.prototype.toArray = function(t) {
        var r = this;
        return this._read(function(o) {
          var u = r._ctx;
          if (u.dir === "next" && Tn(u, !0) && 0 < u.limit) {
            var a = u.valueMapper, f = Tr(u, u.table.core.schema);
            return u.table.core.query({ trans: o, limit: u.limit, values: !0, query: { index: f, range: u.range } }).then(function(_) {
              return _ = _.result, a ? _.map(a) : _;
            });
          }
          var h = [];
          return Rr(u, function(_) {
            return h.push(_);
          }, o, u.table.core).then(function() {
            return h;
          });
        }, t);
      }, Te.prototype.offset = function(t) {
        var r = this._ctx;
        return t <= 0 || (r.offset += t, Tn(r) ? xi(r, function() {
          var o = t;
          return function(u, a) {
            return o === 0 || (o === 1 ? --o : a(function() {
              u.advance(o), o = 0;
            }), !1);
          };
        }) : xi(r, function() {
          var o = t;
          return function() {
            return --o < 0;
          };
        })), this;
      }, Te.prototype.limit = function(t) {
        return this._ctx.limit = Math.min(this._ctx.limit, t), xi(this._ctx, function() {
          var r = t;
          return function(o, u, a) {
            return --r <= 0 && u(a), 0 <= r;
          };
        }, !0), this;
      }, Te.prototype.until = function(t, r) {
        return Ei(this._ctx, function(o, u, a) {
          return !t(o.value) || (u(a), r);
        }), this;
      }, Te.prototype.first = function(t) {
        return this.limit(1).toArray(function(r) {
          return r[0];
        }).then(t);
      }, Te.prototype.last = function(t) {
        return this.reverse().first(t);
      }, Te.prototype.filter = function(t) {
        var r;
        return Ei(this._ctx, function(o) {
          return t(o.value);
        }), (r = this._ctx).isMatch = fn(r.isMatch, t), this;
      }, Te.prototype.and = function(t) {
        return this.filter(t);
      }, Te.prototype.or = function(t) {
        return new this.db.WhereClause(this._ctx.table, t, this);
      }, Te.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Te.prototype.desc = function() {
        return this.reverse();
      }, Te.prototype.eachKey = function(t) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(o, u) {
          t(u.key, u);
        });
      }, Te.prototype.eachUniqueKey = function(t) {
        return this._ctx.unique = "unique", this.eachKey(t);
      }, Te.prototype.eachPrimaryKey = function(t) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(o, u) {
          t(u.primaryKey, u);
        });
      }, Te.prototype.keys = function(t) {
        var r = this._ctx;
        r.keysOnly = !r.isMatch;
        var o = [];
        return this.each(function(u, a) {
          o.push(a.key);
        }).then(function() {
          return o;
        }).then(t);
      }, Te.prototype.primaryKeys = function(t) {
        var r = this._ctx;
        if (r.dir === "next" && Tn(r, !0) && 0 < r.limit) return this._read(function(u) {
          var a = Tr(r, r.table.core.schema);
          return r.table.core.query({ trans: u, values: !1, limit: r.limit, query: { index: a, range: r.range } });
        }).then(function(u) {
          return u.result;
        }).then(t);
        r.keysOnly = !r.isMatch;
        var o = [];
        return this.each(function(u, a) {
          o.push(a.primaryKey);
        }).then(function() {
          return o;
        }).then(t);
      }, Te.prototype.uniqueKeys = function(t) {
        return this._ctx.unique = "unique", this.keys(t);
      }, Te.prototype.firstKey = function(t) {
        return this.limit(1).keys(function(r) {
          return r[0];
        }).then(t);
      }, Te.prototype.lastKey = function(t) {
        return this.reverse().firstKey(t);
      }, Te.prototype.distinct = function() {
        var t = this._ctx, t = t.index && t.table.schema.idxByName[t.index];
        if (!t || !t.multi) return this;
        var r = {};
        return Ei(this._ctx, function(a) {
          var u = a.primaryKey.toString(), a = P(r, u);
          return r[u] = !0, !a;
        }), this;
      }, Te.prototype.modify = function(t) {
        var r = this, o = this._ctx;
        return this._write(function(u) {
          var a, f, h;
          h = typeof t == "function" ? t : (a = d(t), f = a.length, function(S) {
            for (var k = !1, C = 0; C < f; ++C) {
              var D = a[C], F = t[D], W = Pe(S, D);
              F instanceof Vn ? (B(S, D, F.execute(W)), k = !0) : W !== F && (B(S, D, F), k = !0);
            }
            return k;
          });
          var _ = o.table.core, y = _.schema.primaryKey, v = y.outbound, E = y.extractKey, O = 200, y = r.db._options.modifyChunkSize;
          y && (O = typeof y == "object" ? y[_.name] || y["*"] || 200 : y);
          function I(S, D) {
            var C = D.failures, D = D.numFailures;
            x += S - D;
            for (var F = 0, W = d(C); F < W.length; F++) {
              var G = W[F];
              b.push(C[G]);
            }
          }
          var b = [], x = 0, R = [], T = t === Xo;
          return r.clone().primaryKeys().then(function(S) {
            function k(D) {
              var F = Math.min(O, S.length - D), W = S.slice(D, D + F);
              return (T ? Promise.resolve([]) : _.getMany({ trans: u, keys: W, cache: "immutable" })).then(function(G) {
                var V = [], Q = [], z = v ? [] : null, te = T ? W : [];
                if (!T) for (var _e = 0; _e < F; ++_e) {
                  var Ee = G[_e], de = { value: Ye(Ee), primKey: S[D + _e] };
                  h.call(de, de.value, de) !== !1 && (de.value == null ? te.push(S[D + _e]) : v || ve(E(Ee), E(de.value)) === 0 ? (Q.push(de.value), v && z.push(S[D + _e])) : (te.push(S[D + _e]), V.push(de.value)));
                }
                return Promise.resolve(0 < V.length && _.mutate({ trans: u, type: "add", values: V }).then(function(Ue) {
                  for (var fe in Ue.failures) te.splice(parseInt(fe), 1);
                  I(V.length, Ue);
                })).then(function() {
                  return (0 < Q.length || C && typeof t == "object") && _.mutate({ trans: u, type: "put", keys: z, values: Q, criteria: C, changeSpec: typeof t != "function" && t, isAdditionalChunk: 0 < D }).then(function(Ue) {
                    return I(Q.length, Ue);
                  });
                }).then(function() {
                  return (0 < te.length || C && T) && _.mutate({ trans: u, type: "delete", keys: te, criteria: C, isAdditionalChunk: 0 < D }).then(function(Ue) {
                    return Or(o.table, te, Ue);
                  }).then(function(Ue) {
                    return I(te.length, Ue);
                  });
                }).then(function() {
                  return S.length > D + F && k(D + O);
                });
              });
            }
            var C = Tn(o) && o.limit === 1 / 0 && (typeof t != "function" || T) && { index: o.index, range: o.range };
            return k(0).then(function() {
              if (0 < b.length) throw new vn("Error modifying one or more objects", b, x, R);
              return S.length;
            });
          });
        });
      }, Te.prototype.delete = function() {
        var t = this._ctx, r = t.range;
        return !Tn(t) || t.table.schema.yProps || !t.isPrimKey && r.type !== 3 ? this.modify(Xo) : this._write(function(o) {
          var u = t.table.core.schema.primaryKey, a = r;
          return t.table.core.count({ trans: o, query: { index: u, range: a } }).then(function(f) {
            return t.table.core.mutate({ trans: o, type: "deleteRange", range: a }).then(function(v) {
              var _ = v.failures, v = v.numFailures;
              if (v) throw new vn("Could not delete some values", Object.keys(_).map(function(E) {
                return _[E];
              }), f - v);
              return f - v;
            });
          });
        });
      }, Te);
      function Te() {
      }
      var Xo = function(t, r) {
        return r.value = null;
      };
      function ua(t, r) {
        return t < r ? -1 : t === r ? 0 : 1;
      }
      function aa(t, r) {
        return r < t ? -1 : t === r ? 0 : 1;
      }
      function yt(t, r, o) {
        return t = t instanceof Jo ? new t.Collection(t) : t, t._ctx.error = new (o || TypeError)(r), t;
      }
      function Rn(t) {
        return new t.Collection(t, function() {
          return zo("");
        }).limit(0);
      }
      function Ir(t, r, o, u) {
        var a, f, h, _, v, E, O, y = o.length;
        if (!o.every(function(x) {
          return typeof x == "string";
        })) return yt(t, Ho);
        function I(x) {
          a = x === "next" ? function(T) {
            return T.toUpperCase();
          } : function(T) {
            return T.toLowerCase();
          }, f = x === "next" ? function(T) {
            return T.toLowerCase();
          } : function(T) {
            return T.toUpperCase();
          }, h = x === "next" ? ua : aa;
          var R = o.map(function(T) {
            return { lower: f(T), upper: a(T) };
          }).sort(function(T, S) {
            return h(T.lower, S.lower);
          });
          _ = R.map(function(T) {
            return T.upper;
          }), v = R.map(function(T) {
            return T.lower;
          }), O = (E = x) === "next" ? "" : u;
        }
        I("next"), t = new t.Collection(t, function() {
          return Qt(_[0], v[y - 1] + u);
        }), t._ondirectionchange = function(x) {
          I(x);
        };
        var b = 0;
        return t._addAlgorithm(function(x, R, T) {
          var S = x.key;
          if (typeof S != "string") return !1;
          var k = f(S);
          if (r(k, v, b)) return !0;
          for (var C = null, D = b; D < y; ++D) {
            var F = function(W, G, V, Q, z, te) {
              for (var _e = Math.min(W.length, Q.length), Ee = -1, de = 0; de < _e; ++de) {
                var Ue = G[de];
                if (Ue !== Q[de]) return z(W[de], V[de]) < 0 ? W.substr(0, de) + V[de] + V.substr(de + 1) : z(W[de], Q[de]) < 0 ? W.substr(0, de) + Q[de] + V.substr(de + 1) : 0 <= Ee ? W.substr(0, Ee) + G[Ee] + V.substr(Ee + 1) : null;
                z(W[de], Ue) < 0 && (Ee = de);
              }
              return _e < Q.length && te === "next" ? W + V.substr(W.length) : _e < W.length && te === "prev" ? W.substr(0, V.length) : Ee < 0 ? null : W.substr(0, Ee) + Q[Ee] + V.substr(Ee + 1);
            }(S, k, _[D], v[D], h, E);
            F === null && C === null ? b = D + 1 : (C === null || 0 < h(C, F)) && (C = F);
          }
          return R(C !== null ? function() {
            x.continue(C + O);
          } : T), !1;
        }), t;
      }
      function Qt(t, r, o, u) {
        return { type: 2, lower: t, upper: r, lowerOpen: o, upperOpen: u };
      }
      function zo(t) {
        return { type: 1, lower: t, upper: t };
      }
      var Jo = (Object.defineProperty(Qe.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Qe.prototype.between = function(t, r, o, u) {
        o = o !== !1, u = u === !0;
        try {
          return 0 < this._cmp(t, r) || this._cmp(t, r) === 0 && (o || u) && (!o || !u) ? Rn(this) : new this.Collection(this, function() {
            return Qt(t, r, !o, !u);
          });
        } catch {
          return yt(this, Kt);
        }
      }, Qe.prototype.equals = function(t) {
        return t == null ? yt(this, Kt) : new this.Collection(this, function() {
          return zo(t);
        });
      }, Qe.prototype.above = function(t) {
        return t == null ? yt(this, Kt) : new this.Collection(this, function() {
          return Qt(t, void 0, !0);
        });
      }, Qe.prototype.aboveOrEqual = function(t) {
        return t == null ? yt(this, Kt) : new this.Collection(this, function() {
          return Qt(t, void 0, !1);
        });
      }, Qe.prototype.below = function(t) {
        return t == null ? yt(this, Kt) : new this.Collection(this, function() {
          return Qt(void 0, t, !1, !0);
        });
      }, Qe.prototype.belowOrEqual = function(t) {
        return t == null ? yt(this, Kt) : new this.Collection(this, function() {
          return Qt(void 0, t);
        });
      }, Qe.prototype.startsWith = function(t) {
        return typeof t != "string" ? yt(this, Ho) : this.between(t, t + cn, !0, !0);
      }, Qe.prototype.startsWithIgnoreCase = function(t) {
        return t === "" ? this.startsWith(t) : Ir(this, function(r, o) {
          return r.indexOf(o[0]) === 0;
        }, [t], cn);
      }, Qe.prototype.equalsIgnoreCase = function(t) {
        return Ir(this, function(r, o) {
          return r === o[0];
        }, [t], "");
      }, Qe.prototype.anyOfIgnoreCase = function() {
        var t = mt.apply(pt, arguments);
        return t.length === 0 ? Rn(this) : Ir(this, function(r, o) {
          return o.indexOf(r) !== -1;
        }, t, "");
      }, Qe.prototype.startsWithAnyOfIgnoreCase = function() {
        var t = mt.apply(pt, arguments);
        return t.length === 0 ? Rn(this) : Ir(this, function(r, o) {
          return o.some(function(u) {
            return r.indexOf(u) === 0;
          });
        }, t, cn);
      }, Qe.prototype.anyOf = function() {
        var t = this, r = mt.apply(pt, arguments), o = this._cmp;
        try {
          r.sort(o);
        } catch {
          return yt(this, Kt);
        }
        if (r.length === 0) return Rn(this);
        var u = new this.Collection(this, function() {
          return Qt(r[0], r[r.length - 1]);
        });
        u._ondirectionchange = function(f) {
          o = f === "next" ? t._ascending : t._descending, r.sort(o);
        };
        var a = 0;
        return u._addAlgorithm(function(f, h, _) {
          for (var v = f.key; 0 < o(v, r[a]); ) if (++a === r.length) return h(_), !1;
          return o(v, r[a]) === 0 || (h(function() {
            f.continue(r[a]);
          }), !1);
        }), u;
      }, Qe.prototype.notEqual = function(t) {
        return this.inAnyRange([[-1 / 0, t], [t, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Qe.prototype.noneOf = function() {
        var t = mt.apply(pt, arguments);
        if (t.length === 0) return new this.Collection(this);
        try {
          t.sort(this._ascending);
        } catch {
          return yt(this, Kt);
        }
        var r = t.reduce(function(o, u) {
          return o ? o.concat([[o[o.length - 1][1], u]]) : [[-1 / 0, u]];
        }, null);
        return r.push([t[t.length - 1], this.db._maxKey]), this.inAnyRange(r, { includeLowers: !1, includeUppers: !1 });
      }, Qe.prototype.inAnyRange = function(S, r) {
        var o = this, u = this._cmp, a = this._ascending, f = this._descending, h = this._min, _ = this._max;
        if (S.length === 0) return Rn(this);
        if (!S.every(function(k) {
          return k[0] !== void 0 && k[1] !== void 0 && a(k[0], k[1]) <= 0;
        })) return yt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", se.InvalidArgument);
        var v = !r || r.includeLowers !== !1, E = r && r.includeUppers === !0, O, y = a;
        function I(k, C) {
          return y(k[0], C[0]);
        }
        try {
          (O = S.reduce(function(k, C) {
            for (var D = 0, F = k.length; D < F; ++D) {
              var W = k[D];
              if (u(C[0], W[1]) < 0 && 0 < u(C[1], W[0])) {
                W[0] = h(W[0], C[0]), W[1] = _(W[1], C[1]);
                break;
              }
            }
            return D === F && k.push(C), k;
          }, [])).sort(I);
        } catch {
          return yt(this, Kt);
        }
        var b = 0, x = E ? function(k) {
          return 0 < a(k, O[b][1]);
        } : function(k) {
          return 0 <= a(k, O[b][1]);
        }, R = v ? function(k) {
          return 0 < f(k, O[b][0]);
        } : function(k) {
          return 0 <= f(k, O[b][0]);
        }, T = x, S = new this.Collection(this, function() {
          return Qt(O[0][0], O[O.length - 1][1], !v, !E);
        });
        return S._ondirectionchange = function(k) {
          y = k === "next" ? (T = x, a) : (T = R, f), O.sort(I);
        }, S._addAlgorithm(function(k, C, D) {
          for (var F, W = k.key; T(W); ) if (++b === O.length) return C(D), !1;
          return !x(F = W) && !R(F) || (o._cmp(W, O[b][1]) === 0 || o._cmp(W, O[b][0]) === 0 || C(function() {
            y === a ? k.continue(O[b][0]) : k.continue(O[b][1]);
          }), !1);
        }), S;
      }, Qe.prototype.startsWithAnyOf = function() {
        var t = mt.apply(pt, arguments);
        return t.every(function(r) {
          return typeof r == "string";
        }) ? t.length === 0 ? Rn(this) : this.inAnyRange(t.map(function(r) {
          return [r, r + cn];
        })) : yt(this, "startsWithAnyOf() only works with strings");
      }, Qe);
      function Qe() {
      }
      function St(t) {
        return je(function(r) {
          return qn(r), t(r.target.error), !1;
        });
      }
      function qn(t) {
        t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault();
      }
      var Wn = "storagemutated", Oi = "x-storagemutated-1", Zt = Ln(null, Wn), la = (kt.prototype._lock = function() {
        return oe(!ne.global), ++this._reculock, this._reculock !== 1 || ne.global || (ne.lockOwnerFor = this), this;
      }, kt.prototype._unlock = function() {
        if (oe(!ne.global), --this._reculock == 0) for (ne.global || (ne.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var t = this._blockedFuncs.shift();
          try {
            ln(t[1], t[0]);
          } catch {
          }
        }
        return this;
      }, kt.prototype._locked = function() {
        return this._reculock && ne.lockOwnerFor !== this;
      }, kt.prototype.create = function(t) {
        var r = this;
        if (!this.mode) return this;
        var o = this.db.idbdb, u = this.db._state.dbOpenError;
        if (oe(!this.idbtrans), !t && !o) switch (u && u.name) {
          case "DatabaseClosedError":
            throw new se.DatabaseClosed(u);
          case "MissingAPIError":
            throw new se.MissingAPI(u.message, u);
          default:
            throw new se.OpenFailed(u);
        }
        if (!this.active) throw new se.TransactionInactive();
        return oe(this._completion._state === null), (t = this.idbtrans = t || (this.db.core || o).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = je(function(a) {
          qn(a), r._reject(t.error);
        }), t.onabort = je(function(a) {
          qn(a), r.active && r._reject(new se.Abort(t.error)), r.active = !1, r.on("abort").fire(a);
        }), t.oncomplete = je(function() {
          r.active = !1, r._resolve(), "mutatedParts" in t && Zt.storagemutated.fire(t.mutatedParts);
        }), this;
      }, kt.prototype._promise = function(t, r, o) {
        var u = this;
        if (t === "readwrite" && this.mode !== "readwrite") return Fe(new se.ReadOnly("Transaction is readonly"));
        if (!this.active) return Fe(new se.TransactionInactive());
        if (this._locked()) return new Z(function(f, h) {
          u._blockedFuncs.push([function() {
            u._promise(t, r, o).then(f, h);
          }, ne]);
        });
        if (o) return Xt(function() {
          var f = new Z(function(h, _) {
            u._lock();
            var v = r(h, _, u);
            v && v.then && v.then(h, _);
          });
          return f.finally(function() {
            return u._unlock();
          }), f._lib = !0, f;
        });
        var a = new Z(function(f, h) {
          var _ = r(f, h, u);
          _ && _.then && _.then(f, h);
        });
        return a._lib = !0, a;
      }, kt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, kt.prototype.waitFor = function(t) {
        var r, o = this._root(), u = Z.resolve(t);
        o._waitingFor ? o._waitingFor = o._waitingFor.then(function() {
          return u;
        }) : (o._waitingFor = u, o._waitingQueue = [], r = o.idbtrans.objectStore(o.storeNames[0]), function f() {
          for (++o._spinCount; o._waitingQueue.length; ) o._waitingQueue.shift()();
          o._waitingFor && (r.get(-1 / 0).onsuccess = f);
        }());
        var a = o._waitingFor;
        return new Z(function(f, h) {
          u.then(function(_) {
            return o._waitingQueue.push(je(f.bind(null, _)));
          }, function(_) {
            return o._waitingQueue.push(je(h.bind(null, _)));
          }).finally(function() {
            o._waitingFor === a && (o._waitingFor = null);
          });
        });
      }, kt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new se.Abort()));
      }, kt.prototype.table = function(t) {
        var r = this._memoizedTables || (this._memoizedTables = {});
        if (P(r, t)) return r[t];
        var o = this.schema[t];
        if (!o) throw new se.NotFound("Table " + t + " not part of transaction");
        return o = new this.db.Table(t, o, this), o.core = this.db.core.table(t), r[t] = o;
      }, kt);
      function kt() {
      }
      function Ti(t, r, o, u, a, f, h, _) {
        return { name: t, keyPath: r, unique: o, multi: u, auto: a, compound: f, src: (o && !h ? "&" : "") + (u ? "*" : "") + (a ? "++" : "") + Qo(r), type: _ };
      }
      function Qo(t) {
        return typeof t == "string" ? t : t ? "[" + [].join.call(t, "+") + "]" : "";
      }
      function Ri(t, r, o) {
        return { name: t, primKey: r, indexes: o, mappedClass: null, idxByName: (u = function(a) {
          return [a.name, a];
        }, o.reduce(function(a, f, h) {
          return h = u(f, h), h && (a[h[0]] = h[1]), a;
        }, {})) };
        var u;
      }
      var $n = function(t) {
        try {
          return t.only([[]]), $n = function() {
            return [[]];
          }, [[]];
        } catch {
          return $n = function() {
            return cn;
          }, cn;
        }
      };
      function Ii(t) {
        return t == null ? function() {
        } : typeof t == "string" ? (r = t).split(".").length === 1 ? function(o) {
          return o[r];
        } : function(o) {
          return Pe(o, r);
        } : function(o) {
          return Pe(o, t);
        };
        var r;
      }
      function Zo(t) {
        return [].slice.call(t);
      }
      var ca = 0;
      function Yn(t) {
        return t == null ? ":id" : typeof t == "string" ? t : "[".concat(t.join("+"), "]");
      }
      function fa(t, r, v) {
        function u(T) {
          if (T.type === 3) return null;
          if (T.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var b = T.lower, x = T.upper, R = T.lowerOpen, T = T.upperOpen;
          return b === void 0 ? x === void 0 ? null : r.upperBound(x, !!T) : x === void 0 ? r.lowerBound(b, !!R) : r.bound(b, x, !!R, !!T);
        }
        function a(I) {
          var b, x = I.name;
          return { name: x, schema: I, mutate: function(R) {
            var T = R.trans, S = R.type, k = R.keys, C = R.values, D = R.range;
            return new Promise(function(F, W) {
              F = je(F);
              var G = T.objectStore(x), V = G.keyPath == null, Q = S === "put" || S === "add";
              if (!Q && S !== "delete" && S !== "deleteRange") throw new Error("Invalid operation type: " + S);
              var z, te = (k || C || { length: 1 }).length;
              if (k && C && k.length !== C.length) throw new Error("Given keys array must have same length as given values array.");
              if (te === 0) return F({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function _e(at) {
                ++Ue, qn(at);
              }
              var Ee = [], de = [], Ue = 0;
              if (S === "deleteRange") {
                if (D.type === 4) return F({ numFailures: Ue, failures: de, results: [], lastResult: void 0 });
                D.type === 3 ? Ee.push(z = G.clear()) : Ee.push(z = G.delete(u(D)));
              } else {
                var V = Q ? V ? [C, k] : [C, null] : [k, null], fe = V[0], rt = V[1];
                if (Q) for (var it = 0; it < te; ++it) Ee.push(z = rt && rt[it] !== void 0 ? G[S](fe[it], rt[it]) : G[S](fe[it])), z.onerror = _e;
                else for (it = 0; it < te; ++it) Ee.push(z = G[S](fe[it])), z.onerror = _e;
              }
              function Ur(at) {
                at = at.target.result, Ee.forEach(function(pn, qi) {
                  return pn.error != null && (de[qi] = pn.error);
                }), F({ numFailures: Ue, failures: de, results: S === "delete" ? k : Ee.map(function(pn) {
                  return pn.result;
                }), lastResult: at });
              }
              z.onerror = function(at) {
                _e(at), Ur(at);
              }, z.onsuccess = Ur;
            });
          }, getMany: function(R) {
            var T = R.trans, S = R.keys;
            return new Promise(function(k, C) {
              k = je(k);
              for (var D, F = T.objectStore(x), W = S.length, G = new Array(W), V = 0, Q = 0, z = function(Ee) {
                Ee = Ee.target, G[Ee._pos] = Ee.result, ++Q === V && k(G);
              }, te = St(C), _e = 0; _e < W; ++_e) S[_e] != null && ((D = F.get(S[_e]))._pos = _e, D.onsuccess = z, D.onerror = te, ++V);
              V === 0 && k(G);
            });
          }, get: function(R) {
            var T = R.trans, S = R.key;
            return new Promise(function(k, C) {
              k = je(k);
              var D = T.objectStore(x).get(S);
              D.onsuccess = function(F) {
                return k(F.target.result);
              }, D.onerror = St(C);
            });
          }, query: (b = E, function(R) {
            return new Promise(function(T, S) {
              T = je(T);
              var k, C, D, V = R.trans, F = R.values, W = R.limit, z = R.query, G = W === 1 / 0 ? void 0 : W, Q = z.index, z = z.range, V = V.objectStore(x), Q = Q.isPrimaryKey ? V : V.index(Q.name), z = u(z);
              if (W === 0) return T({ result: [] });
              b ? ((G = F ? Q.getAll(z, G) : Q.getAllKeys(z, G)).onsuccess = function(te) {
                return T({ result: te.target.result });
              }, G.onerror = St(S)) : (k = 0, C = !F && "openKeyCursor" in Q ? Q.openKeyCursor(z) : Q.openCursor(z), D = [], C.onsuccess = function(te) {
                var _e = C.result;
                return _e ? (D.push(F ? _e.value : _e.primaryKey), ++k === W ? T({ result: D }) : void _e.continue()) : T({ result: D });
              }, C.onerror = St(S));
            });
          }), openCursor: function(R) {
            var T = R.trans, S = R.values, k = R.query, C = R.reverse, D = R.unique;
            return new Promise(function(F, W) {
              F = je(F);
              var Q = k.index, G = k.range, V = T.objectStore(x), V = Q.isPrimaryKey ? V : V.index(Q.name), Q = C ? D ? "prevunique" : "prev" : D ? "nextunique" : "next", z = !S && "openKeyCursor" in V ? V.openKeyCursor(u(G), Q) : V.openCursor(u(G), Q);
              z.onerror = St(W), z.onsuccess = je(function(te) {
                var _e, Ee, de, Ue, fe = z.result;
                fe ? (fe.___id = ++ca, fe.done = !1, _e = fe.continue.bind(fe), Ee = (Ee = fe.continuePrimaryKey) && Ee.bind(fe), de = fe.advance.bind(fe), Ue = function() {
                  throw new Error("Cursor not stopped");
                }, fe.trans = T, fe.stop = fe.continue = fe.continuePrimaryKey = fe.advance = function() {
                  throw new Error("Cursor not started");
                }, fe.fail = je(W), fe.next = function() {
                  var rt = this, it = 1;
                  return this.start(function() {
                    return it-- ? rt.continue() : rt.stop();
                  }).then(function() {
                    return rt;
                  });
                }, fe.start = function(rt) {
                  function it() {
                    if (z.result) try {
                      rt();
                    } catch (at) {
                      fe.fail(at);
                    }
                    else fe.done = !0, fe.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, fe.stop();
                  }
                  var Ur = new Promise(function(at, pn) {
                    at = je(at), z.onerror = St(pn), fe.fail = pn, fe.stop = function(qi) {
                      fe.stop = fe.continue = fe.continuePrimaryKey = fe.advance = Ue, at(qi);
                    };
                  });
                  return z.onsuccess = je(function(at) {
                    z.onsuccess = it, it();
                  }), fe.continue = _e, fe.continuePrimaryKey = Ee, fe.advance = de, it(), Ur;
                }, F(fe)) : F(null);
              }, W);
            });
          }, count: function(R) {
            var T = R.query, S = R.trans, k = T.index, C = T.range;
            return new Promise(function(D, F) {
              var W = S.objectStore(x), G = k.isPrimaryKey ? W : W.index(k.name), W = u(C), G = W ? G.count(W) : G.count();
              G.onsuccess = je(function(V) {
                return D(V.target.result);
              }), G.onerror = St(F);
            });
          } };
        }
        var f, h, _, O = (h = v, _ = Zo((f = t).objectStoreNames), { schema: { name: f.name, tables: _.map(function(I) {
          return h.objectStore(I);
        }).map(function(I) {
          var b = I.keyPath, T = I.autoIncrement, x = p(b), R = {}, T = { name: I.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: b == null, compound: x, keyPath: b, autoIncrement: T, unique: !0, extractKey: Ii(b) }, indexes: Zo(I.indexNames).map(function(S) {
            return I.index(S);
          }).map(function(D) {
            var k = D.name, C = D.unique, F = D.multiEntry, D = D.keyPath, F = { name: k, compound: p(D), keyPath: D, unique: C, multiEntry: F, extractKey: Ii(D) };
            return R[Yn(D)] = F;
          }), getIndexByKeyPath: function(S) {
            return R[Yn(S)];
          } };
          return R[":id"] = T.primaryKey, b != null && (R[Yn(b)] = T.primaryKey), T;
        }) }, hasGetAll: 0 < _.length && "getAll" in h.objectStore(_[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), v = O.schema, E = O.hasGetAll, O = v.tables.map(a), y = {};
        return O.forEach(function(I) {
          return y[I.name] = I;
        }), { stack: "dbcore", transaction: t.transaction.bind(t), table: function(I) {
          if (!y[I]) throw new Error("Table '".concat(I, "' not found"));
          return y[I];
        }, MIN_KEY: -1 / 0, MAX_KEY: $n(r), schema: v };
      }
      function da(t, r, o, u) {
        var a = o.IDBKeyRange;
        return o.indexedDB, { dbcore: (u = fa(r, a, u), t.dbcore.reduce(function(f, h) {
          return h = h.create, s(s({}, f), h(f));
        }, u)) };
      }
      function Ar(t, u) {
        var o = u.db, u = da(t._middlewares, o, t._deps, u);
        t.core = u.dbcore, t.tables.forEach(function(a) {
          var f = a.name;
          t.core.schema.tables.some(function(h) {
            return h.name === f;
          }) && (a.core = t.core.table(f), t[f] instanceof t.Table && (t[f].core = a.core));
        });
      }
      function Sr(t, r, o, u) {
        o.forEach(function(a) {
          var f = u[a];
          r.forEach(function(h) {
            var _ = function v(E, O) {
              return He(E, O) || (E = N(E)) && v(E, O);
            }(h, a);
            (!_ || "value" in _ && _.value === void 0) && (h === t.Transaction.prototype || h instanceof t.Transaction ? ie(h, a, { get: function() {
              return this.table(a);
            }, set: function(v) {
              ee(this, a, { value: v, writable: !0, configurable: !0, enumerable: !0 });
            } }) : h[a] = new t.Table(a, f));
          });
        });
      }
      function Ai(t, r) {
        r.forEach(function(o) {
          for (var u in o) o[u] instanceof t.Table && delete o[u];
        });
      }
      function ha(t, r) {
        return t._cfg.version - r._cfg.version;
      }
      function pa(t, r, o, u) {
        var a = t._dbSchema;
        o.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = Ri("$meta", ts("")[0], []), t._storeNames.push("$meta"));
        var f = t._createTransaction("readwrite", t._storeNames, a);
        f.create(o), f._completion.catch(u);
        var h = f._reject.bind(f), _ = ne.transless || ne;
        Xt(function() {
          return ne.trans = f, ne.transless = _, r !== 0 ? (Ar(t, o), E = r, ((v = f).storeNames.includes("$meta") ? v.table("$meta").get("version").then(function(O) {
            return O ?? E;
          }) : Z.resolve(E)).then(function(O) {
            return I = O, b = f, x = o, R = [], O = (y = t)._versions, T = y._dbSchema = Pr(0, y.idbdb, x), (O = O.filter(function(S) {
              return S._cfg.version >= I;
            })).length !== 0 ? (O.forEach(function(S) {
              R.push(function() {
                var k = T, C = S._cfg.dbschema;
                Nr(y, k, x), Nr(y, C, x), T = y._dbSchema = C;
                var D = Si(k, C);
                D.add.forEach(function(Q) {
                  ki(x, Q[0], Q[1].primKey, Q[1].indexes);
                }), D.change.forEach(function(Q) {
                  if (Q.recreate) throw new se.Upgrade("Not yet support for changing primary key");
                  var z = x.objectStore(Q.name);
                  Q.add.forEach(function(te) {
                    return kr(z, te);
                  }), Q.change.forEach(function(te) {
                    z.deleteIndex(te.name), kr(z, te);
                  }), Q.del.forEach(function(te) {
                    return z.deleteIndex(te);
                  });
                });
                var F = S._cfg.contentUpgrade;
                if (F && S._cfg.version > I) {
                  Ar(y, x), b._memoizedTables = {};
                  var W = $(C);
                  D.del.forEach(function(Q) {
                    W[Q] = k[Q];
                  }), Ai(y, [y.Transaction.prototype]), Sr(y, [y.Transaction.prototype], d(W), W), b.schema = W;
                  var G, V = xt(F);
                  return V && xn(), D = Z.follow(function() {
                    var Q;
                    (G = F(b)) && V && (Q = zt.bind(null, null), G.then(Q, Q));
                  }), G && typeof G.then == "function" ? Z.resolve(G) : D.then(function() {
                    return G;
                  });
                }
              }), R.push(function(k) {
                var C, D, F = S._cfg.dbschema;
                C = F, D = k, [].slice.call(D.db.objectStoreNames).forEach(function(W) {
                  return C[W] == null && D.db.deleteObjectStore(W);
                }), Ai(y, [y.Transaction.prototype]), Sr(y, [y.Transaction.prototype], y._storeNames, y._dbSchema), b.schema = y._dbSchema;
              }), R.push(function(k) {
                y.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(y.idbdb.version / 10) === S._cfg.version ? (y.idbdb.deleteObjectStore("$meta"), delete y._dbSchema.$meta, y._storeNames = y._storeNames.filter(function(C) {
                  return C !== "$meta";
                })) : k.objectStore("$meta").put(S._cfg.version, "version"));
              });
            }), function S() {
              return R.length ? Z.resolve(R.shift()(b.idbtrans)).then(S) : Z.resolve();
            }().then(function() {
              es(T, x);
            })) : Z.resolve();
            var y, I, b, x, R, T;
          }).catch(h)) : (d(a).forEach(function(O) {
            ki(o, O, a[O].primKey, a[O].indexes);
          }), Ar(t, o), void Z.follow(function() {
            return t.on.populate.fire(f);
          }).catch(h));
          var v, E;
        });
      }
      function ma(t, r) {
        es(t._dbSchema, r), r.db.version % 10 != 0 || r.objectStoreNames.contains("$meta") || r.db.createObjectStore("$meta").add(Math.ceil(r.db.version / 10 - 1), "version");
        var o = Pr(0, t.idbdb, r);
        Nr(t, t._dbSchema, r);
        for (var u = 0, a = Si(o, t._dbSchema).change; u < a.length; u++) {
          var f = function(h) {
            if (h.change.length || h.recreate) return console.warn("Unable to patch indexes of table ".concat(h.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var _ = r.objectStore(h.name);
            h.add.forEach(function(v) {
              j && console.debug("Dexie upgrade patch: Creating missing index ".concat(h.name, ".").concat(v.src)), kr(_, v);
            });
          }(a[u]);
          if (typeof f == "object") return f.value;
        }
      }
      function Si(t, r) {
        var o, u = { del: [], add: [], change: [] };
        for (o in t) r[o] || u.del.push(o);
        for (o in r) {
          var a = t[o], f = r[o];
          if (a) {
            var h = { name: o, def: f, recreate: !1, del: [], add: [], change: [] };
            if ("" + (a.primKey.keyPath || "") != "" + (f.primKey.keyPath || "") || a.primKey.auto !== f.primKey.auto) h.recreate = !0, u.change.push(h);
            else {
              var _ = a.idxByName, v = f.idxByName, E = void 0;
              for (E in _) v[E] || h.del.push(E);
              for (E in v) {
                var O = _[E], y = v[E];
                O ? O.src !== y.src && h.change.push(y) : h.add.push(y);
              }
              (0 < h.del.length || 0 < h.add.length || 0 < h.change.length) && u.change.push(h);
            }
          } else u.add.push([o, f]);
        }
        return u;
      }
      function ki(t, r, o, u) {
        var a = t.db.createObjectStore(r, o.keyPath ? { keyPath: o.keyPath, autoIncrement: o.auto } : { autoIncrement: o.auto });
        return u.forEach(function(f) {
          return kr(a, f);
        }), a;
      }
      function es(t, r) {
        d(t).forEach(function(o) {
          r.db.objectStoreNames.contains(o) || (j && console.debug("Dexie: Creating missing table", o), ki(r, o, t[o].primKey, t[o].indexes));
        });
      }
      function kr(t, r) {
        t.createIndex(r.name, r.keyPath, { unique: r.unique, multiEntry: r.multi });
      }
      function Pr(t, r, o) {
        var u = {};
        return Re(r.objectStoreNames, 0).forEach(function(a) {
          for (var f = o.objectStore(a), h = Ti(Qo(E = f.keyPath), E || "", !0, !1, !!f.autoIncrement, E && typeof E != "string", !0), _ = [], v = 0; v < f.indexNames.length; ++v) {
            var O = f.index(f.indexNames[v]), E = O.keyPath, O = Ti(O.name, E, !!O.unique, !!O.multiEntry, !1, E && typeof E != "string", !1);
            _.push(O);
          }
          u[a] = Ri(a, h, _);
        }), u;
      }
      function Nr(t, r, o) {
        for (var u = o.db.objectStoreNames, a = 0; a < u.length; ++a) {
          var f = u[a], h = o.objectStore(f);
          t._hasGetAll = "getAll" in h;
          for (var _ = 0; _ < h.indexNames.length; ++_) {
            var v = h.indexNames[_], E = h.index(v).keyPath, O = typeof E == "string" ? E : "[" + Re(E).join("+") + "]";
            !r[f] || (E = r[f].idxByName[O]) && (E.name = v, delete r[f].idxByName[O], r[f].idxByName[v] = E);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && c.WorkerGlobalScope && c instanceof c.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (t._hasGetAll = !1);
      }
      function ts(t) {
        return t.split(",").map(function(r, o) {
          var f = r.split(":"), u = (a = f[1]) === null || a === void 0 ? void 0 : a.trim(), a = (r = f[0].trim()).replace(/([&*]|\+\+)/g, ""), f = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return Ti(a, f || null, /\&/.test(r), /\*/.test(r), /\+\+/.test(r), p(f), o === 0, u);
        });
      }
      var _a = (In.prototype._createTableSchema = Ri, In.prototype._parseIndexSyntax = ts, In.prototype._parseStoresSpec = function(t, r) {
        var o = this;
        d(t).forEach(function(u) {
          if (t[u] !== null) {
            var a = o._parseIndexSyntax(t[u]), f = a.shift();
            if (!f) throw new se.Schema("Invalid schema for table " + u + ": " + t[u]);
            if (f.unique = !0, f.multi) throw new se.Schema("Primary key cannot be multiEntry*");
            a.forEach(function(h) {
              if (h.auto) throw new se.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!h.keyPath) throw new se.Schema("Index must have a name and cannot be an empty string");
            }), a = o._createTableSchema(u, f, a), r[u] = a;
          }
        });
      }, In.prototype.stores = function(o) {
        var r = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? g(this._cfg.storesSource, o) : o;
        var o = r._versions, u = {}, a = {};
        return o.forEach(function(f) {
          g(u, f._cfg.storesSource), a = f._cfg.dbschema = {}, f._parseStoresSpec(u, a);
        }), r._dbSchema = a, Ai(r, [r._allTables, r, r.Transaction.prototype]), Sr(r, [r._allTables, r, r.Transaction.prototype, this._cfg.tables], d(a), a), r._storeNames = d(a), this;
      }, In.prototype.upgrade = function(t) {
        return this._cfg.contentUpgrade = q(this._cfg.contentUpgrade || m, t), this;
      }, In);
      function In() {
      }
      function Pi(t, r) {
        var o = t._dbNamesDB;
        return o || (o = t._dbNamesDB = new Ut(Er, { addons: [], indexedDB: t, IDBKeyRange: r })).version(1).stores({ dbnames: "name" }), o.table("dbnames");
      }
      function Ni(t) {
        return t && typeof t.databases == "function";
      }
      function Ci(t) {
        return Xt(function() {
          return ne.letThrough = !0, t();
        });
      }
      function Di(t) {
        return !("from" in t);
      }
      var nt = function(t, r) {
        if (!this) {
          var o = new nt();
          return t && "d" in t && g(o, t), o;
        }
        g(this, arguments.length ? { d: 1, from: t, to: 1 < arguments.length ? r : t } : { d: 0 });
      };
      function Xn(t, r, o) {
        var u = ve(r, o);
        if (!isNaN(u)) {
          if (0 < u) throw RangeError();
          if (Di(t)) return g(t, { from: r, to: o, d: 1 });
          var a = t.l, u = t.r;
          if (ve(o, t.from) < 0) return a ? Xn(a, r, o) : t.l = { from: r, to: o, d: 1, l: null, r: null }, rs(t);
          if (0 < ve(r, t.to)) return u ? Xn(u, r, o) : t.r = { from: r, to: o, d: 1, l: null, r: null }, rs(t);
          ve(r, t.from) < 0 && (t.from = r, t.l = null, t.d = u ? u.d + 1 : 1), 0 < ve(o, t.to) && (t.to = o, t.r = null, t.d = t.l ? t.l.d + 1 : 1), o = !t.r, a && !t.l && zn(t, a), u && o && zn(t, u);
        }
      }
      function zn(t, r) {
        Di(r) || function o(u, v) {
          var f = v.from, h = v.to, _ = v.l, v = v.r;
          Xn(u, f, h), _ && o(u, _), v && o(u, v);
        }(t, r);
      }
      function ns(t, r) {
        var o = Cr(r), u = o.next();
        if (u.done) return !1;
        for (var a = u.value, f = Cr(t), h = f.next(a.from), _ = h.value; !u.done && !h.done; ) {
          if (ve(_.from, a.to) <= 0 && 0 <= ve(_.to, a.from)) return !0;
          ve(a.from, _.from) < 0 ? a = (u = o.next(_.from)).value : _ = (h = f.next(a.from)).value;
        }
        return !1;
      }
      function Cr(t) {
        var r = Di(t) ? null : { s: 0, n: t };
        return { next: function(o) {
          for (var u = 0 < arguments.length; r; ) switch (r.s) {
            case 0:
              if (r.s = 1, u) for (; r.n.l && ve(o, r.n.from) < 0; ) r = { up: r, n: r.n.l, s: 1 };
              else for (; r.n.l; ) r = { up: r, n: r.n.l, s: 1 };
            case 1:
              if (r.s = 2, !u || ve(o, r.n.to) <= 0) return { value: r.n, done: !1 };
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
      function rs(t) {
        var r, o, u = (((r = t.r) === null || r === void 0 ? void 0 : r.d) || 0) - (((o = t.l) === null || o === void 0 ? void 0 : o.d) || 0), a = 1 < u ? "r" : u < -1 ? "l" : "";
        a && (r = a == "r" ? "l" : "r", o = s({}, t), u = t[a], t.from = u.from, t.to = u.to, t[a] = u[a], o[a] = u[r], (t[r] = o).d = is(o)), t.d = is(t);
      }
      function is(o) {
        var r = o.r, o = o.l;
        return (r ? o ? Math.max(r.d, o.d) : r.d : o ? o.d : 0) + 1;
      }
      function Dr(t, r) {
        return d(r).forEach(function(o) {
          t[o] ? zn(t[o], r[o]) : t[o] = function u(a) {
            var f, h, _ = {};
            for (f in a) P(a, f) && (h = a[f], _[f] = !h || typeof h != "object" || Ae.has(h.constructor) ? h : u(h));
            return _;
          }(r[o]);
        }), t;
      }
      function Mi(t, r) {
        return t.all || r.all || Object.keys(t).some(function(o) {
          return r[o] && ns(r[o], t[o]);
        });
      }
      L(nt.prototype, ((bt = { add: function(t) {
        return zn(this, t), this;
      }, addKey: function(t) {
        return Xn(this, t, t), this;
      }, addKeys: function(t) {
        var r = this;
        return t.forEach(function(o) {
          return Xn(r, o, o);
        }), this;
      }, hasKey: function(t) {
        var r = Cr(this).next(t).value;
        return r && ve(r.from, t) <= 0 && 0 <= ve(r.to, t);
      } })[Ve] = function() {
        return Cr(this);
      }, bt));
      var dn = {}, Bi = {}, ji = !1;
      function Mr(t) {
        Dr(Bi, t), ji || (ji = !0, setTimeout(function() {
          ji = !1, Ki(Bi, !(Bi = {}));
        }, 0));
      }
      function Ki(t, r) {
        r === void 0 && (r = !1);
        var o = /* @__PURE__ */ new Set();
        if (t.all) for (var u = 0, a = Object.values(dn); u < a.length; u++) os(h = a[u], t, o, r);
        else for (var f in t) {
          var h, _ = /^idb\:\/\/(.*)\/(.*)\//.exec(f);
          _ && (f = _[1], _ = _[2], (h = dn["idb://".concat(f, "/").concat(_)]) && os(h, t, o, r));
        }
        o.forEach(function(v) {
          return v();
        });
      }
      function os(t, r, o, u) {
        for (var a = [], f = 0, h = Object.entries(t.queries.query); f < h.length; f++) {
          for (var _ = h[f], v = _[0], E = [], O = 0, y = _[1]; O < y.length; O++) {
            var I = y[O];
            Mi(r, I.obsSet) ? I.subscribers.forEach(function(T) {
              return o.add(T);
            }) : u && E.push(I);
          }
          u && a.push([v, E]);
        }
        if (u) for (var b = 0, x = a; b < x.length; b++) {
          var R = x[b], v = R[0], E = R[1];
          t.queries.query[v] = E;
        }
      }
      function ya(t) {
        var r = t._state, o = t._deps.indexedDB;
        if (r.isBeingOpened || t.idbdb) return r.dbReadyPromise.then(function() {
          return r.dbOpenError ? Fe(r.dbOpenError) : t;
        });
        r.isBeingOpened = !0, r.dbOpenError = null, r.openComplete = !1;
        var u = r.openCanceller, a = Math.round(10 * t.verno), f = !1;
        function h() {
          if (r.openCanceller !== u) throw new se.DatabaseClosed("db.open() was cancelled");
        }
        function _() {
          return new Z(function(I, b) {
            if (h(), !o) throw new se.MissingAPI();
            var x = t.name, R = r.autoSchema || !a ? o.open(x) : o.open(x, a);
            if (!R) throw new se.MissingAPI();
            R.onerror = St(b), R.onblocked = je(t._fireOnBlocked), R.onupgradeneeded = je(function(T) {
              var S;
              O = R.transaction, r.autoSchema && !t._options.allowEmptyDB ? (R.onerror = qn, O.abort(), R.result.close(), (S = o.deleteDatabase(x)).onsuccess = S.onerror = je(function() {
                b(new se.NoSuchDatabase("Database ".concat(x, " doesnt exist")));
              })) : (O.onerror = St(b), T = T.oldVersion > Math.pow(2, 62) ? 0 : T.oldVersion, y = T < 1, t.idbdb = R.result, f && ma(t, O), pa(t, T / 10, O, b));
            }, b), R.onsuccess = je(function() {
              O = null;
              var T, S, k, C, D, F = t.idbdb = R.result, W = Re(F.objectStoreNames);
              if (0 < W.length) try {
                var G = F.transaction((C = W).length === 1 ? C[0] : C, "readonly");
                if (r.autoSchema) S = F, k = G, (T = t).verno = S.version / 10, k = T._dbSchema = Pr(0, S, k), T._storeNames = Re(S.objectStoreNames, 0), Sr(T, [T._allTables], d(k), k);
                else if (Nr(t, t._dbSchema, G), ((D = Si(Pr(0, (D = t).idbdb, G), D._dbSchema)).add.length || D.change.some(function(V) {
                  return V.add.length || V.change.length;
                })) && !f) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), F.close(), a = F.version + 1, f = !0, I(_());
                Ar(t, G);
              } catch {
              }
              On.push(t), F.onversionchange = je(function(V) {
                r.vcFired = !0, t.on("versionchange").fire(V);
              }), F.onclose = je(function(V) {
                t.on("close").fire(V);
              }), y && (D = t._deps, G = x, F = D.indexedDB, D = D.IDBKeyRange, Ni(F) || G === Er || Pi(F, D).put({ name: G }).catch(m)), I();
            }, b);
          }).catch(function(I) {
            switch (I?.name) {
              case "UnknownError":
                if (0 < r.PR1398_maxLoop) return r.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), _();
                break;
              case "VersionError":
                if (0 < a) return a = 0, _();
            }
            return Z.reject(I);
          });
        }
        var v, E = r.dbReadyResolve, O = null, y = !1;
        return Z.race([u, (typeof navigator > "u" ? Z.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(I) {
          function b() {
            return indexedDB.databases().finally(I);
          }
          v = setInterval(b, 100), b();
        }).finally(function() {
          return clearInterval(v);
        }) : Promise.resolve()).then(_)]).then(function() {
          return h(), r.onReadyBeingFired = [], Z.resolve(Ci(function() {
            return t.on.ready.fire(t.vip);
          })).then(function I() {
            if (0 < r.onReadyBeingFired.length) {
              var b = r.onReadyBeingFired.reduce(q, m);
              return r.onReadyBeingFired = [], Z.resolve(Ci(function() {
                return b(t.vip);
              })).then(I);
            }
          });
        }).finally(function() {
          r.openCanceller === u && (r.onReadyBeingFired = null, r.isBeingOpened = !1);
        }).catch(function(I) {
          r.dbOpenError = I;
          try {
            O && O.abort();
          } catch {
          }
          return u === r.openCanceller && t._close(), Fe(I);
        }).finally(function() {
          r.openComplete = !0, E();
        }).then(function() {
          var I;
          return y && (I = {}, t.tables.forEach(function(b) {
            b.schema.indexes.forEach(function(x) {
              x.name && (I["idb://".concat(t.name, "/").concat(b.name, "/").concat(x.name)] = new nt(-1 / 0, [[[]]]));
            }), I["idb://".concat(t.name, "/").concat(b.name, "/")] = I["idb://".concat(t.name, "/").concat(b.name, "/:dels")] = new nt(-1 / 0, [[[]]]);
          }), Zt(Wn).fire(I), Ki(I, !0)), t;
        });
      }
      function Ui(t) {
        function r(f) {
          return t.next(f);
        }
        var o = a(r), u = a(function(f) {
          return t.throw(f);
        });
        function a(f) {
          return function(v) {
            var _ = f(v), v = _.value;
            return _.done ? v : v && typeof v.then == "function" ? v.then(o, u) : p(v) ? Promise.all(v).then(o, u) : o(v);
          };
        }
        return a(r)();
      }
      function Br(t, r, o) {
        for (var u = p(t) ? t.slice() : [t], a = 0; a < o; ++a) u.push(r);
        return u;
      }
      var ga = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(t) {
        return s(s({}, t), { table: function(r) {
          var o = t.table(r), u = o.schema, a = {}, f = [];
          function h(y, I, b) {
            var x = Yn(y), R = a[x] = a[x] || [], T = y == null ? 0 : typeof y == "string" ? 1 : y.length, S = 0 < I, S = s(s({}, b), { name: S ? "".concat(x, "(virtual-from:").concat(b.name, ")") : b.name, lowLevelIndex: b, isVirtual: S, keyTail: I, keyLength: T, extractKey: Ii(y), unique: !S && b.unique });
            return R.push(S), S.isPrimaryKey || f.push(S), 1 < T && h(T === 2 ? y[0] : y.slice(0, T - 1), I + 1, b), R.sort(function(k, C) {
              return k.keyTail - C.keyTail;
            }), S;
          }
          r = h(u.primaryKey.keyPath, 0, u.primaryKey), a[":id"] = [r];
          for (var _ = 0, v = u.indexes; _ < v.length; _++) {
            var E = v[_];
            h(E.keyPath, 0, E);
          }
          function O(y) {
            var I, b = y.query.index;
            return b.isVirtual ? s(s({}, y), { query: { index: b.lowLevelIndex, range: (I = y.query.range, b = b.keyTail, { type: I.type === 1 ? 2 : I.type, lower: Br(I.lower, I.lowerOpen ? t.MAX_KEY : t.MIN_KEY, b), lowerOpen: !0, upper: Br(I.upper, I.upperOpen ? t.MIN_KEY : t.MAX_KEY, b), upperOpen: !0 }) } }) : y;
          }
          return s(s({}, o), { schema: s(s({}, u), { primaryKey: r, indexes: f, getIndexByKeyPath: function(y) {
            return (y = a[Yn(y)]) && y[0];
          } }), count: function(y) {
            return o.count(O(y));
          }, query: function(y) {
            return o.query(O(y));
          }, openCursor: function(y) {
            var I = y.query.index, b = I.keyTail, x = I.isVirtual, R = I.keyLength;
            return x ? o.openCursor(O(y)).then(function(S) {
              return S && T(S);
            }) : o.openCursor(y);
            function T(S) {
              return Object.create(S, { continue: { value: function(k) {
                k != null ? S.continue(Br(k, y.reverse ? t.MAX_KEY : t.MIN_KEY, b)) : y.unique ? S.continue(S.key.slice(0, R).concat(y.reverse ? t.MIN_KEY : t.MAX_KEY, b)) : S.continue();
              } }, continuePrimaryKey: { value: function(k, C) {
                S.continuePrimaryKey(Br(k, t.MAX_KEY, b), C);
              } }, primaryKey: { get: function() {
                return S.primaryKey;
              } }, key: { get: function() {
                var k = S.key;
                return R === 1 ? k[0] : k.slice(0, R);
              } }, value: { get: function() {
                return S.value;
              } } });
            }
          } });
        } });
      } };
      function Hi(t, r, o, u) {
        return o = o || {}, u = u || "", d(t).forEach(function(a) {
          var f, h, _;
          P(r, a) ? (f = t[a], h = r[a], typeof f == "object" && typeof h == "object" && f && h ? (_ = It(f)) !== It(h) ? o[u + a] = r[a] : _ === "Object" ? Hi(f, h, o, u + a + ".") : f !== h && (o[u + a] = r[a]) : f !== h && (o[u + a] = r[a])) : o[u + a] = void 0;
        }), d(r).forEach(function(a) {
          P(t, a) || (o[u + a] = r[a]);
        }), o;
      }
      function Fi(t, r) {
        return r.type === "delete" ? r.keys : r.keys || r.values.map(t.extractKey);
      }
      var va = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(t) {
        return s(s({}, t), { table: function(r) {
          var o = t.table(r), u = o.schema.primaryKey;
          return s(s({}, o), { mutate: function(a) {
            var f = ne.trans, h = f.table(r).hook, _ = h.deleting, v = h.creating, E = h.updating;
            switch (a.type) {
              case "add":
                if (v.fire === m) break;
                return f._promise("readwrite", function() {
                  return O(a);
                }, !0);
              case "put":
                if (v.fire === m && E.fire === m) break;
                return f._promise("readwrite", function() {
                  return O(a);
                }, !0);
              case "delete":
                if (_.fire === m) break;
                return f._promise("readwrite", function() {
                  return O(a);
                }, !0);
              case "deleteRange":
                if (_.fire === m) break;
                return f._promise("readwrite", function() {
                  return function y(I, b, x) {
                    return o.query({ trans: I, values: !1, query: { index: u, range: b }, limit: x }).then(function(R) {
                      var T = R.result;
                      return O({ type: "delete", keys: T, trans: I }).then(function(S) {
                        return 0 < S.numFailures ? Promise.reject(S.failures[0]) : T.length < x ? { failures: [], numFailures: 0, lastResult: void 0 } : y(I, s(s({}, b), { lower: T[T.length - 1], lowerOpen: !0 }), x);
                      });
                    });
                  }(a.trans, a.range, 1e4);
                }, !0);
            }
            return o.mutate(a);
            function O(y) {
              var I, b, x, R = ne.trans, T = y.keys || Fi(u, y);
              if (!T) throw new Error("Keys missing");
              return (y = y.type === "add" || y.type === "put" ? s(s({}, y), { keys: T }) : s({}, y)).type !== "delete" && (y.values = l([], y.values)), y.keys && (y.keys = l([], y.keys)), I = o, x = T, ((b = y).type === "add" ? Promise.resolve([]) : I.getMany({ trans: b.trans, keys: x, cache: "immutable" })).then(function(S) {
                var k = T.map(function(C, D) {
                  var F, W, G, V = S[D], Q = { onerror: null, onsuccess: null };
                  return y.type === "delete" ? _.fire.call(Q, C, V, R) : y.type === "add" || V === void 0 ? (F = v.fire.call(Q, C, y.values[D], R), C == null && F != null && (y.keys[D] = C = F, u.outbound || B(y.values[D], u.keyPath, C))) : (F = Hi(V, y.values[D]), (W = E.fire.call(Q, F, C, V, R)) && (G = y.values[D], Object.keys(W).forEach(function(z) {
                    P(G, z) ? G[z] = W[z] : B(G, z, W[z]);
                  }))), Q;
                });
                return o.mutate(y).then(function(C) {
                  for (var D = C.failures, F = C.results, W = C.numFailures, C = C.lastResult, G = 0; G < T.length; ++G) {
                    var V = (F || T)[G], Q = k[G];
                    V == null ? Q.onerror && Q.onerror(D[G]) : Q.onsuccess && Q.onsuccess(y.type === "put" && S[G] ? y.values[G] : V);
                  }
                  return { failures: D, results: F, numFailures: W, lastResult: C };
                }).catch(function(C) {
                  return k.forEach(function(D) {
                    return D.onerror && D.onerror(C);
                  }), Promise.reject(C);
                });
              });
            }
          } });
        } });
      } };
      function ss(t, r, o) {
        try {
          if (!r || r.keys.length < t.length) return null;
          for (var u = [], a = 0, f = 0; a < r.keys.length && f < t.length; ++a) ve(r.keys[a], t[f]) === 0 && (u.push(o ? Ye(r.values[a]) : r.values[a]), ++f);
          return u.length === t.length ? u : null;
        } catch {
          return null;
        }
      }
      var ba = { stack: "dbcore", level: -1, create: function(t) {
        return { table: function(r) {
          var o = t.table(r);
          return s(s({}, o), { getMany: function(u) {
            if (!u.cache) return o.getMany(u);
            var a = ss(u.keys, u.trans._cache, u.cache === "clone");
            return a ? Z.resolve(a) : o.getMany(u).then(function(f) {
              return u.trans._cache = { keys: u.keys, values: u.cache === "clone" ? Ye(f) : f }, f;
            });
          }, mutate: function(u) {
            return u.type !== "add" && (u.trans._cache = null), o.mutate(u);
          } });
        } };
      } };
      function us(t, r) {
        return t.trans.mode === "readonly" && !!t.subscr && !t.trans.explicit && t.trans.db._options.cache !== "disabled" && !r.schema.primaryKey.outbound;
      }
      function as(t, r) {
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
      var wa = { stack: "dbcore", level: 0, name: "Observability", create: function(t) {
        var r = t.schema.name, o = new nt(t.MIN_KEY, t.MAX_KEY);
        return s(s({}, t), { transaction: function(u, a, f) {
          if (ne.subscr && a !== "readonly") throw new se.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ne.querier));
          return t.transaction(u, a, f);
        }, table: function(u) {
          var a = t.table(u), f = a.schema, h = f.primaryKey, y = f.indexes, _ = h.extractKey, v = h.outbound, E = h.autoIncrement && y.filter(function(b) {
            return b.compound && b.keyPath.includes(h.keyPath);
          }), O = s(s({}, a), { mutate: function(b) {
            function x(z) {
              return z = "idb://".concat(r, "/").concat(u, "/").concat(z), C[z] || (C[z] = new nt());
            }
            var R, T, S, k = b.trans, C = b.mutatedParts || (b.mutatedParts = {}), D = x(""), F = x(":dels"), W = b.type, Q = b.type === "deleteRange" ? [b.range] : b.type === "delete" ? [b.keys] : b.values.length < 50 ? [Fi(h, b).filter(function(z) {
              return z;
            }), b.values] : [], G = Q[0], V = Q[1], Q = b.trans._cache;
            return p(G) ? (D.addKeys(G), (Q = W === "delete" || G.length === V.length ? ss(G, Q) : null) || F.addKeys(G), (Q || V) && (R = x, T = Q, S = V, f.indexes.forEach(function(z) {
              var te = R(z.name || "");
              function _e(de) {
                return de != null ? z.extractKey(de) : null;
              }
              function Ee(de) {
                return z.multiEntry && p(de) ? de.forEach(function(Ue) {
                  return te.addKey(Ue);
                }) : te.addKey(de);
              }
              (T || S).forEach(function(de, rt) {
                var fe = T && _e(T[rt]), rt = S && _e(S[rt]);
                ve(fe, rt) !== 0 && (fe != null && Ee(fe), rt != null && Ee(rt));
              });
            }))) : G ? (V = { from: (V = G.lower) !== null && V !== void 0 ? V : t.MIN_KEY, to: (V = G.upper) !== null && V !== void 0 ? V : t.MAX_KEY }, F.add(V), D.add(V)) : (D.add(o), F.add(o), f.indexes.forEach(function(z) {
              return x(z.name).add(o);
            })), a.mutate(b).then(function(z) {
              return !G || b.type !== "add" && b.type !== "put" || (D.addKeys(z.results), E && E.forEach(function(te) {
                for (var _e = b.values.map(function(fe) {
                  return te.extractKey(fe);
                }), Ee = te.keyPath.findIndex(function(fe) {
                  return fe === h.keyPath;
                }), de = 0, Ue = z.results.length; de < Ue; ++de) _e[de][Ee] = z.results[de];
                x(te.name).addKeys(_e);
              })), k.mutatedParts = Dr(k.mutatedParts || {}, C), z;
            });
          } }), y = function(x) {
            var R = x.query, x = R.index, R = R.range;
            return [x, new nt((x = R.lower) !== null && x !== void 0 ? x : t.MIN_KEY, (R = R.upper) !== null && R !== void 0 ? R : t.MAX_KEY)];
          }, I = { get: function(b) {
            return [h, new nt(b.key)];
          }, getMany: function(b) {
            return [h, new nt().addKeys(b.keys)];
          }, count: y, query: y, openCursor: y };
          return d(I).forEach(function(b) {
            O[b] = function(x) {
              var R = ne.subscr, T = !!R, S = us(ne, a) && as(b, x) ? x.obsSet = {} : R;
              if (T) {
                var k = function(V) {
                  return V = "idb://".concat(r, "/").concat(u, "/").concat(V), S[V] || (S[V] = new nt());
                }, C = k(""), D = k(":dels"), R = I[b](x), T = R[0], R = R[1];
                if ((b === "query" && T.isPrimaryKey && !x.values ? D : k(T.name || "")).add(R), !T.isPrimaryKey) {
                  if (b !== "count") {
                    var F = b === "query" && v && x.values && a.query(s(s({}, x), { values: !1 }));
                    return a[b].apply(this, arguments).then(function(V) {
                      if (b === "query") {
                        if (v && x.values) return F.then(function(_e) {
                          return _e = _e.result, C.addKeys(_e), V;
                        });
                        var Q = x.values ? V.result.map(_) : V.result;
                        (x.values ? C : D).addKeys(Q);
                      } else if (b === "openCursor") {
                        var z = V, te = x.values;
                        return z && Object.create(z, { key: { get: function() {
                          return D.addKey(z.primaryKey), z.key;
                        } }, primaryKey: { get: function() {
                          var _e = z.primaryKey;
                          return D.addKey(_e), _e;
                        } }, value: { get: function() {
                          return te && C.addKey(z.primaryKey), z.value;
                        } } });
                      }
                      return V;
                    });
                  }
                  D.add(o);
                }
              }
              return a[b].apply(this, arguments);
            };
          }), O;
        } });
      } };
      function ls(t, r, o) {
        if (o.numFailures === 0) return r;
        if (r.type === "deleteRange") return null;
        var u = r.keys ? r.keys.length : "values" in r && r.values ? r.values.length : 1;
        return o.numFailures === u ? null : (r = s({}, r), p(r.keys) && (r.keys = r.keys.filter(function(a, f) {
          return !(f in o.failures);
        })), "values" in r && p(r.values) && (r.values = r.values.filter(function(a, f) {
          return !(f in o.failures);
        })), r);
      }
      function Li(t, r) {
        return o = t, ((u = r).lower === void 0 || (u.lowerOpen ? 0 < ve(o, u.lower) : 0 <= ve(o, u.lower))) && (t = t, (r = r).upper === void 0 || (r.upperOpen ? ve(t, r.upper) < 0 : ve(t, r.upper) <= 0));
        var o, u;
      }
      function cs(t, r, I, u, a, f) {
        if (!I || I.length === 0) return t;
        var h = r.query.index, _ = h.multiEntry, v = r.query.range, E = u.schema.primaryKey.extractKey, O = h.extractKey, y = (h.lowLevelIndex || h).extractKey, I = I.reduce(function(b, x) {
          var R = b, T = [];
          if (x.type === "add" || x.type === "put") for (var S = new nt(), k = x.values.length - 1; 0 <= k; --k) {
            var C, D = x.values[k], F = E(D);
            S.hasKey(F) || (C = O(D), (_ && p(C) ? C.some(function(z) {
              return Li(z, v);
            }) : Li(C, v)) && (S.addKey(F), T.push(D)));
          }
          switch (x.type) {
            case "add":
              var W = new nt().addKeys(r.values ? b.map(function(te) {
                return E(te);
              }) : b), R = b.concat(r.values ? T.filter(function(te) {
                return te = E(te), !W.hasKey(te) && (W.addKey(te), !0);
              }) : T.map(function(te) {
                return E(te);
              }).filter(function(te) {
                return !W.hasKey(te) && (W.addKey(te), !0);
              }));
              break;
            case "put":
              var G = new nt().addKeys(x.values.map(function(te) {
                return E(te);
              }));
              R = b.filter(function(te) {
                return !G.hasKey(r.values ? E(te) : te);
              }).concat(r.values ? T : T.map(function(te) {
                return E(te);
              }));
              break;
            case "delete":
              var V = new nt().addKeys(x.keys);
              R = b.filter(function(te) {
                return !V.hasKey(r.values ? E(te) : te);
              });
              break;
            case "deleteRange":
              var Q = x.range;
              R = b.filter(function(te) {
                return !Li(E(te), Q);
              });
          }
          return R;
        }, t);
        return I === t ? t : (I.sort(function(b, x) {
          return ve(y(b), y(x)) || ve(E(b), E(x));
        }), r.limit && r.limit < 1 / 0 && (I.length > r.limit ? I.length = r.limit : t.length === r.limit && I.length < r.limit && (a.dirty = !0)), f ? Object.freeze(I) : I);
      }
      function fs(t, r) {
        return ve(t.lower, r.lower) === 0 && ve(t.upper, r.upper) === 0 && !!t.lowerOpen == !!r.lowerOpen && !!t.upperOpen == !!r.upperOpen;
      }
      function Ea(t, r) {
        return function(o, u, a, f) {
          if (o === void 0) return u !== void 0 ? -1 : 0;
          if (u === void 0) return 1;
          if ((u = ve(o, u)) === 0) {
            if (a && f) return 0;
            if (a) return 1;
            if (f) return -1;
          }
          return u;
        }(t.lower, r.lower, t.lowerOpen, r.lowerOpen) <= 0 && 0 <= function(o, u, a, f) {
          if (o === void 0) return u !== void 0 ? 1 : 0;
          if (u === void 0) return -1;
          if ((u = ve(o, u)) === 0) {
            if (a && f) return 0;
            if (a) return -1;
            if (f) return 1;
          }
          return u;
        }(t.upper, r.upper, t.upperOpen, r.upperOpen);
      }
      function xa(t, r, o, u) {
        t.subscribers.add(o), u.addEventListener("abort", function() {
          var a, f;
          t.subscribers.delete(o), t.subscribers.size === 0 && (a = t, f = r, setTimeout(function() {
            a.subscribers.size === 0 && be(f, a);
          }, 3e3));
        });
      }
      var Oa = { stack: "dbcore", level: 0, name: "Cache", create: function(t) {
        var r = t.schema.name;
        return s(s({}, t), { transaction: function(o, u, a) {
          var f, h, _ = t.transaction(o, u, a);
          return u === "readwrite" && (h = (f = new AbortController()).signal, a = function(v) {
            return function() {
              if (f.abort(), u === "readwrite") {
                for (var E = /* @__PURE__ */ new Set(), O = 0, y = o; O < y.length; O++) {
                  var I = y[O], b = dn["idb://".concat(r, "/").concat(I)];
                  if (b) {
                    var x = t.table(I), R = b.optimisticOps.filter(function(te) {
                      return te.trans === _;
                    });
                    if (_._explicit && v && _.mutatedParts) for (var T = 0, S = Object.values(b.queries.query); T < S.length; T++) for (var k = 0, C = (W = S[T]).slice(); k < C.length; k++) Mi((G = C[k]).obsSet, _.mutatedParts) && (be(W, G), G.subscribers.forEach(function(te) {
                      return E.add(te);
                    }));
                    else if (0 < R.length) {
                      b.optimisticOps = b.optimisticOps.filter(function(te) {
                        return te.trans !== _;
                      });
                      for (var D = 0, F = Object.values(b.queries.query); D < F.length; D++) for (var W, G, V, Q = 0, z = (W = F[D]).slice(); Q < z.length; Q++) (G = z[Q]).res != null && _.mutatedParts && (v && !G.dirty ? (V = Object.isFrozen(G.res), V = cs(G.res, G.req, R, x, G, V), G.dirty ? (be(W, G), G.subscribers.forEach(function(te) {
                        return E.add(te);
                      })) : V !== G.res && (G.res = V, G.promise = Z.resolve({ result: V }))) : (G.dirty && be(W, G), G.subscribers.forEach(function(te) {
                        return E.add(te);
                      })));
                    }
                  }
                }
                E.forEach(function(te) {
                  return te();
                });
              }
            };
          }, _.addEventListener("abort", a(!1), { signal: h }), _.addEventListener("error", a(!1), { signal: h }), _.addEventListener("complete", a(!0), { signal: h })), _;
        }, table: function(o) {
          var u = t.table(o), a = u.schema.primaryKey;
          return s(s({}, u), { mutate: function(f) {
            var h = ne.trans;
            if (a.outbound || h.db._options.cache === "disabled" || h.explicit || h.idbtrans.mode !== "readwrite") return u.mutate(f);
            var _ = dn["idb://".concat(r, "/").concat(o)];
            return _ ? (h = u.mutate(f), f.type !== "add" && f.type !== "put" || !(50 <= f.values.length || Fi(a, f).some(function(v) {
              return v == null;
            })) ? (_.optimisticOps.push(f), f.mutatedParts && Mr(f.mutatedParts), h.then(function(v) {
              0 < v.numFailures && (be(_.optimisticOps, f), (v = ls(0, f, v)) && _.optimisticOps.push(v), f.mutatedParts && Mr(f.mutatedParts));
            }), h.catch(function() {
              be(_.optimisticOps, f), f.mutatedParts && Mr(f.mutatedParts);
            })) : h.then(function(v) {
              var E = ls(0, s(s({}, f), { values: f.values.map(function(O, y) {
                var I;
                return v.failures[y] ? O : (O = (I = a.keyPath) !== null && I !== void 0 && I.includes(".") ? Ye(O) : s({}, O), B(O, a.keyPath, v.results[y]), O);
              }) }), v);
              _.optimisticOps.push(E), queueMicrotask(function() {
                return f.mutatedParts && Mr(f.mutatedParts);
              });
            }), h) : u.mutate(f);
          }, query: function(f) {
            if (!us(ne, u) || !as("query", f)) return u.query(f);
            var h = ((E = ne.trans) === null || E === void 0 ? void 0 : E.db._options.cache) === "immutable", y = ne, _ = y.requery, v = y.signal, E = function(x, R, T, S) {
              var k = dn["idb://".concat(x, "/").concat(R)];
              if (!k) return [];
              if (!(R = k.queries[T])) return [null, !1, k, null];
              var C = R[(S.query ? S.query.index.name : null) || ""];
              if (!C) return [null, !1, k, null];
              switch (T) {
                case "query":
                  var D = C.find(function(F) {
                    return F.req.limit === S.limit && F.req.values === S.values && fs(F.req.query.range, S.query.range);
                  });
                  return D ? [D, !0, k, C] : [C.find(function(F) {
                    return ("limit" in F.req ? F.req.limit : 1 / 0) >= S.limit && (!S.values || F.req.values) && Ea(F.req.query.range, S.query.range);
                  }), !1, k, C];
                case "count":
                  return D = C.find(function(F) {
                    return fs(F.req.query.range, S.query.range);
                  }), [D, !!D, k, C];
              }
            }(r, o, "query", f), O = E[0], y = E[1], I = E[2], b = E[3];
            return O && y ? O.obsSet = f.obsSet : (y = u.query(f).then(function(x) {
              var R = x.result;
              if (O && (O.res = R), h) {
                for (var T = 0, S = R.length; T < S; ++T) Object.freeze(R[T]);
                Object.freeze(R);
              } else x.result = Ye(R);
              return x;
            }).catch(function(x) {
              return b && O && be(b, O), Promise.reject(x);
            }), O = { obsSet: f.obsSet, promise: y, subscribers: /* @__PURE__ */ new Set(), type: "query", req: f, dirty: !1 }, b ? b.push(O) : (b = [O], (I = I || (dn["idb://".concat(r, "/").concat(o)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[f.query.index.name || ""] = b)), xa(O, b, _, v), O.promise.then(function(x) {
              return { result: cs(x.result, f, I?.optimisticOps, u, O, h) };
            });
          } });
        } });
      } };
      function jr(t, r) {
        return new Proxy(t, { get: function(o, u, a) {
          return u === "db" ? r : Reflect.get(o, u, a);
        } });
      }
      var Ut = (Le.prototype.version = function(t) {
        if (isNaN(t) || t < 0.1) throw new se.Type("Given version is not a positive number");
        if (t = Math.round(10 * t) / 10, this.idbdb || this._state.isBeingOpened) throw new se.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, t);
        var r = this._versions, o = r.filter(function(u) {
          return u._cfg.version === t;
        })[0];
        return o || (o = new this.Version(t), r.push(o), r.sort(ha), o.stores({}), this._state.autoSchema = !1, o);
      }, Le.prototype._whenReady = function(t) {
        var r = this;
        return this.idbdb && (this._state.openComplete || ne.letThrough || this._vip) ? t() : new Z(function(o, u) {
          if (r._state.openComplete) return u(new se.DatabaseClosed(r._state.dbOpenError));
          if (!r._state.isBeingOpened) {
            if (!r._state.autoOpen) return void u(new se.DatabaseClosed());
            r.open().catch(m);
          }
          r._state.dbReadyPromise.then(o, u);
        }).then(t);
      }, Le.prototype.use = function(t) {
        var r = t.stack, o = t.create, u = t.level, a = t.name;
        return a && this.unuse({ stack: r, name: a }), t = this._middlewares[r] || (this._middlewares[r] = []), t.push({ stack: r, create: o, level: u ?? 10, name: a }), t.sort(function(f, h) {
          return f.level - h.level;
        }), this;
      }, Le.prototype.unuse = function(t) {
        var r = t.stack, o = t.name, u = t.create;
        return r && this._middlewares[r] && (this._middlewares[r] = this._middlewares[r].filter(function(a) {
          return u ? a.create !== u : !!o && a.name !== o;
        })), this;
      }, Le.prototype.open = function() {
        var t = this;
        return ln(Ke, function() {
          return ya(t);
        });
      }, Le.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var t = this._state, r = On.indexOf(this);
        if (0 <= r && On.splice(r, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        t.isBeingOpened || (t.dbReadyPromise = new Z(function(o) {
          t.dbReadyResolve = o;
        }), t.openCanceller = new Z(function(o, u) {
          t.cancelOpen = u;
        }));
      }, Le.prototype.close = function(o) {
        var r = (o === void 0 ? { disableAutoOpen: !0 } : o).disableAutoOpen, o = this._state;
        r ? (o.isBeingOpened && o.cancelOpen(new se.DatabaseClosed()), this._close(), o.autoOpen = !1, o.dbOpenError = new se.DatabaseClosed()) : (this._close(), o.autoOpen = this._options.autoOpen || o.isBeingOpened, o.openComplete = !1, o.dbOpenError = null);
      }, Le.prototype.delete = function(t) {
        var r = this;
        t === void 0 && (t = { disableAutoOpen: !0 });
        var o = 0 < arguments.length && typeof arguments[0] != "object", u = this._state;
        return new Z(function(a, f) {
          function h() {
            r.close(t);
            var _ = r._deps.indexedDB.deleteDatabase(r.name);
            _.onsuccess = je(function() {
              var v, E, O;
              v = r._deps, E = r.name, O = v.indexedDB, v = v.IDBKeyRange, Ni(O) || E === Er || Pi(O, v).delete(E).catch(m), a();
            }), _.onerror = St(f), _.onblocked = r._fireOnBlocked;
          }
          if (o) throw new se.InvalidArgument("Invalid closeOptions argument to db.delete()");
          u.isBeingOpened ? u.dbReadyPromise.then(h) : h();
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
        return d(this._allTables).map(function(r) {
          return t._allTables[r];
        });
      }, enumerable: !1, configurable: !0 }), Le.prototype.transaction = function() {
        var t = (function(r, o, u) {
          var a = arguments.length;
          if (a < 2) throw new se.InvalidArgument("Too few arguments");
          for (var f = new Array(a - 1); --a; ) f[a - 1] = arguments[a];
          return u = f.pop(), [r, ye(f), u];
        }).apply(this, arguments);
        return this._transaction.apply(this, t);
      }, Le.prototype._transaction = function(t, r, o) {
        var u = this, a = ne.trans;
        a && a.db === this && t.indexOf("!") === -1 || (a = null);
        var f, h, _ = t.indexOf("?") !== -1;
        t = t.replace("!", "").replace("?", "");
        try {
          if (h = r.map(function(E) {
            if (E = E instanceof u.Table ? E.name : E, typeof E != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return E;
          }), t == "r" || t === bi) f = bi;
          else {
            if (t != "rw" && t != wi) throw new se.InvalidArgument("Invalid transaction mode: " + t);
            f = wi;
          }
          if (a) {
            if (a.mode === bi && f === wi) {
              if (!_) throw new se.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              a = null;
            }
            a && h.forEach(function(E) {
              if (a && a.storeNames.indexOf(E) === -1) {
                if (!_) throw new se.SubTransaction("Table " + E + " not included in parent transaction.");
                a = null;
              }
            }), _ && a && !a.active && (a = null);
          }
        } catch (E) {
          return a ? a._promise(null, function(O, y) {
            y(E);
          }) : Fe(E);
        }
        var v = (function E(O, y, I, b, x) {
          return Z.resolve().then(function() {
            var R = ne.transless || ne, T = O._createTransaction(y, I, O._dbSchema, b);
            if (T.explicit = !0, R = { trans: T, transless: R }, b) T.idbtrans = b.idbtrans;
            else try {
              T.create(), T.idbtrans._explicit = !0, O._state.PR1398_maxLoop = 3;
            } catch (C) {
              return C.name === Wt.InvalidState && O.isOpen() && 0 < --O._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), O.close({ disableAutoOpen: !1 }), O.open().then(function() {
                return E(O, y, I, null, x);
              })) : Fe(C);
            }
            var S, k = xt(x);
            return k && xn(), R = Z.follow(function() {
              var C;
              (S = x.call(T, T)) && (k ? (C = zt.bind(null, null), S.then(C, C)) : typeof S.next == "function" && typeof S.throw == "function" && (S = Ui(S)));
            }, R), (S && typeof S.then == "function" ? Z.resolve(S).then(function(C) {
              return T.active ? C : Fe(new se.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : R.then(function() {
              return S;
            })).then(function(C) {
              return b && T._resolve(), T._completion.then(function() {
                return C;
              });
            }).catch(function(C) {
              return T._reject(C), Fe(C);
            });
          });
        }).bind(null, this, f, h, a, o);
        return a ? a._promise(f, v, "lock") : ne.trans ? ln(ne.transless, function() {
          return u._whenReady(v);
        }) : this._whenReady(v);
      }, Le.prototype.table = function(t) {
        if (!P(this._allTables, t)) throw new se.InvalidTable("Table ".concat(t, " does not exist"));
        return this._allTables[t];
      }, Le);
      function Le(t, r) {
        var o = this;
        this._middlewares = {}, this.verno = 0;
        var u = Le.dependencies;
        this._options = r = s({ addons: Le.addons, autoOpen: !0, indexedDB: u.indexedDB, IDBKeyRange: u.IDBKeyRange, cache: "cloned" }, r), this._deps = { indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange }, u = r.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var a, f, h, _, v, E = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: m, dbReadyPromise: null, cancelOpen: m, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: r.autoOpen };
        E.dbReadyPromise = new Z(function(y) {
          E.dbReadyResolve = y;
        }), E.openCanceller = new Z(function(y, I) {
          E.cancelOpen = I;
        }), this._state = E, this.name = t, this.on = Ln(this, "populate", "blocked", "versionchange", "close", { ready: [q, m] }), this.once = function(y, I) {
          var b = function() {
            for (var x = [], R = 0; R < arguments.length; R++) x[R] = arguments[R];
            o.on(y).unsubscribe(b), I.apply(o, x);
          };
          return o.on(y, b);
        }, this.on.ready.subscribe = Ie(this.on.ready.subscribe, function(y) {
          return function(I, b) {
            Le.vip(function() {
              var x, R = o._state;
              R.openComplete ? (R.dbOpenError || Z.resolve().then(I), b && y(I)) : R.onReadyBeingFired ? (R.onReadyBeingFired.push(I), b && y(I)) : (y(I), x = o, b || y(function T() {
                x.on.ready.unsubscribe(I), x.on.ready.unsubscribe(T);
              }));
            });
          };
        }), this.Collection = (a = this, Gn(sa.prototype, function(S, T) {
          this.db = a;
          var b = Fo, x = null;
          if (T) try {
            b = T();
          } catch (k) {
            x = k;
          }
          var R = S._ctx, T = R.table, S = T.hook.reading.fire;
          this._ctx = { table: T, index: R.index, isPrimKey: !R.index || T.schema.primKey.keyPath && R.index === T.schema.primKey.name, range: b, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: x, or: R.or, valueMapper: S !== w ? S : null };
        })), this.Table = (f = this, Gn(qo.prototype, function(y, I, b) {
          this.db = f, this._tx = b, this.name = y, this.schema = I, this.hook = f._allTables[y] ? f._allTables[y].hook : Ln(null, { creating: [K, m], reading: [M, w], updating: [J, m], deleting: [H, m] });
        })), this.Transaction = (h = this, Gn(la.prototype, function(y, I, b, x, R) {
          var T = this;
          y !== "readonly" && I.forEach(function(S) {
            S = (S = b[S]) === null || S === void 0 ? void 0 : S.yProps, S && (I = I.concat(S.map(function(k) {
              return k.updatesTable;
            })));
          }), this.db = h, this.mode = y, this.storeNames = I, this.schema = b, this.chromeTransactionDurability = x, this.idbtrans = null, this.on = Ln(this, "complete", "error", "abort"), this.parent = R || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Z(function(S, k) {
            T._resolve = S, T._reject = k;
          }), this._completion.then(function() {
            T.active = !1, T.on.complete.fire();
          }, function(S) {
            var k = T.active;
            return T.active = !1, T.on.error.fire(S), T.parent ? T.parent._reject(S) : k && T.idbtrans && T.idbtrans.abort(), Fe(S);
          });
        })), this.Version = (_ = this, Gn(_a.prototype, function(y) {
          this.db = _, this._cfg = { version: y, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (v = this, Gn(Jo.prototype, function(y, I, b) {
          if (this.db = v, this._ctx = { table: y, index: I === ":id" ? null : I, or: b }, this._cmp = this._ascending = ve, this._descending = function(x, R) {
            return ve(R, x);
          }, this._max = function(x, R) {
            return 0 < ve(x, R) ? x : R;
          }, this._min = function(x, R) {
            return ve(x, R) < 0 ? x : R;
          }, this._IDBKeyRange = v._deps.IDBKeyRange, !this._IDBKeyRange) throw new se.MissingAPI();
        })), this.on("versionchange", function(y) {
          0 < y.newVersion ? console.warn("Another connection wants to upgrade database '".concat(o.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(o.name, "'. Closing db now to resume the delete request.")), o.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(y) {
          !y.newVersion || y.newVersion < y.oldVersion ? console.warn("Dexie.delete('".concat(o.name, "') was blocked")) : console.warn("Upgrade '".concat(o.name, "' blocked by other connection holding version ").concat(y.oldVersion / 10));
        }), this._maxKey = $n(r.IDBKeyRange), this._createTransaction = function(y, I, b, x) {
          return new o.Transaction(y, I, b, o._options.chromeTransactionDurability, x);
        }, this._fireOnBlocked = function(y) {
          o.on("blocked").fire(y), On.filter(function(I) {
            return I.name === o.name && I !== o && !I._state.vcFired;
          }).map(function(I) {
            return I.on("versionchange").fire(y);
          });
        }, this.use(ba), this.use(Oa), this.use(wa), this.use(ga), this.use(va);
        var O = new Proxy(this, { get: function(y, I, b) {
          if (I === "_vip") return !0;
          if (I === "table") return function(R) {
            return jr(o.table(R), O);
          };
          var x = Reflect.get(y, I, b);
          return x instanceof qo ? jr(x, O) : I === "tables" ? x.map(function(R) {
            return jr(R, O);
          }) : I === "_createTransaction" ? function() {
            return jr(x.apply(this, arguments), O);
          } : x;
        } });
        this.vip = O, u.forEach(function(y) {
          return y(o);
        });
      }
      var Kr, bt = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Ta = (Gi.prototype.subscribe = function(t, r, o) {
        return this._subscribe(t && typeof t != "function" ? t : { next: t, error: r, complete: o });
      }, Gi.prototype[bt] = function() {
        return this;
      }, Gi);
      function Gi(t) {
        this._subscribe = t;
      }
      try {
        Kr = { indexedDB: c.indexedDB || c.mozIndexedDB || c.webkitIndexedDB || c.msIndexedDB, IDBKeyRange: c.IDBKeyRange || c.webkitIDBKeyRange };
      } catch {
        Kr = { indexedDB: null, IDBKeyRange: null };
      }
      function ds(t) {
        var r, o = !1, u = new Ta(function(a) {
          var f = xt(t), h, _ = !1, v = {}, E = {}, O = { get closed() {
            return _;
          }, unsubscribe: function() {
            _ || (_ = !0, h && h.abort(), y && Zt.storagemutated.unsubscribe(b));
          } };
          a.start && a.start(O);
          var y = !1, I = function() {
            return vi(x);
          }, b = function(R) {
            Dr(v, R), Mi(E, v) && I();
          }, x = function() {
            var R, T, S;
            !_ && Kr.indexedDB && (v = {}, R = {}, h && h.abort(), h = new AbortController(), S = function(k) {
              var C = wn();
              try {
                f && xn();
                var D = Xt(t, k);
                return D = f ? D.finally(zt) : D;
              } finally {
                C && En();
              }
            }(T = { subscr: R, signal: h.signal, requery: I, querier: t, trans: null }), Promise.resolve(S).then(function(k) {
              o = !0, r = k, _ || T.signal.aborted || (v = {}, function(C) {
                for (var D in C) if (P(C, D)) return;
                return 1;
              }(E = R) || y || (Zt(Wn, b), y = !0), vi(function() {
                return !_ && a.next && a.next(k);
              }));
            }, function(k) {
              o = !1, ["DatabaseClosedError", "AbortError"].includes(k?.name) || _ || vi(function() {
                _ || a.error && a.error(k);
              });
            }));
          };
          return setTimeout(I, 0), O;
        });
        return u.hasValue = function() {
          return o;
        }, u.getValue = function() {
          return r;
        }, u;
      }
      var hn = Ut;
      function Vi(t) {
        var r = en;
        try {
          en = !0, Zt.storagemutated.fire(t), Ki(t, !0);
        } finally {
          en = r;
        }
      }
      L(hn, s(s({}, Fn), { delete: function(t) {
        return new hn(t, { addons: [] }).delete();
      }, exists: function(t) {
        return new hn(t, { addons: [] }).open().then(function(r) {
          return r.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(t) {
        try {
          return r = hn.dependencies, o = r.indexedDB, r = r.IDBKeyRange, (Ni(o) ? Promise.resolve(o.databases()).then(function(u) {
            return u.map(function(a) {
              return a.name;
            }).filter(function(a) {
              return a !== Er;
            });
          }) : Pi(o, r).toCollection().primaryKeys()).then(t);
        } catch {
          return Fe(new se.MissingAPI());
        }
        var r, o;
      }, defineClass: function() {
        return function(t) {
          g(this, t);
        };
      }, ignoreTransaction: function(t) {
        return ne.trans ? ln(ne.transless, t) : t();
      }, vip: Ci, async: function(t) {
        return function() {
          try {
            var r = Ui(t.apply(this, arguments));
            return r && typeof r.then == "function" ? r : Z.resolve(r);
          } catch (o) {
            return Fe(o);
          }
        };
      }, spawn: function(t, r, o) {
        try {
          var u = Ui(t.apply(o, r || []));
          return u && typeof u.then == "function" ? u : Z.resolve(u);
        } catch (a) {
          return Fe(a);
        }
      }, currentTransaction: { get: function() {
        return ne.trans || null;
      } }, waitFor: function(t, r) {
        return r = Z.resolve(typeof t == "function" ? hn.ignoreTransaction(t) : t).timeout(r || 6e4), ne.trans ? ne.trans.waitFor(r) : r;
      }, Promise: Z, debug: { get: function() {
        return j;
      }, set: function(t) {
        ae(t);
      } }, derive: re, extend: g, props: L, override: Ie, Events: Ln, on: Zt, liveQuery: ds, extendObservabilitySet: Dr, getByKeyPath: Pe, setByKeyPath: B, delByKeyPath: function(t, r) {
        typeof r == "string" ? B(t, r, void 0) : "length" in r && [].map.call(r, function(o) {
          B(t, o, void 0);
        });
      }, shallowClone: $, deepClone: Ye, getObjectDiff: Hi, cmp: ve, asap: ke, minKey: -1 / 0, addons: [], connections: On, errnames: Wt, dependencies: Kr, cache: dn, semVer: "4.2.0", version: "4.2.0".split(".").map(function(t) {
        return parseInt(t);
      }).reduce(function(t, r, o) {
        return t + r / Math.pow(10, 2 * o);
      }) })), hn.maxKey = $n(hn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Zt(Wn, function(t) {
        en || (t = new CustomEvent(Oi, { detail: t }), en = !0, dispatchEvent(t), en = !1);
      }), addEventListener(Oi, function(t) {
        t = t.detail, en || Vi(t);
      }));
      var An, en = !1, hs = function() {
      };
      return typeof BroadcastChannel < "u" && ((hs = function() {
        (An = new BroadcastChannel(Oi)).onmessage = function(t) {
          return t.data && Vi(t.data);
        };
      })(), typeof An.unref == "function" && An.unref(), Zt(Wn, function(t) {
        en || An.postMessage(t);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(t) {
        if (!Ut.disableBfCache && t.persisted) {
          j && console.debug("Dexie: handling persisted pagehide"), An?.close();
          for (var r = 0, o = On; r < o.length; r++) o[r].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(t) {
        !Ut.disableBfCache && t.persisted && (j && console.debug("Dexie: handling persisted pageshow"), hs(), Vi({ all: new nt(-1 / 0, [[]]) }));
      })), Z.rejectionMapper = function(t, r) {
        return !t || t instanceof jt || t instanceof TypeError || t instanceof SyntaxError || !t.name || !$t[t.name] ? t : (r = new $t[t.name](r || t.message, t), "stack" in t && ie(r, "stack", { get: function() {
          return this.inner.stack;
        } }), r);
      }, ae(j), s(Ut, Object.freeze({ __proto__: null, Dexie: Ut, liveQuery: ds, Entity: Lo, cmp: ve, PropModification: Vn, replacePrefix: function(t, r) {
        return new Vn({ replacePrefix: [t, r] });
      }, add: function(t) {
        return new Vn({ add: t });
      }, remove: function(t) {
        return new Vn({ remove: t });
      }, default: Ut, RangeSet: nt, mergeRanges: zn, rangesOverlap: ns }), { default: Ut }), Ut;
    });
  }(Yr)), Yr.exports;
}
var Kc = jc();
const _o = /* @__PURE__ */ Mc(Kc), Ms = Symbol.for("Dexie"), yo = globalThis[Ms] || (globalThis[Ms] = _o);
if (_o.semVer !== yo.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${_o.semVer} and ${yo.semVer}`);
const {
  liveQuery: mf,
  mergeRanges: _f,
  rangesOverlap: yf,
  RangeSet: gf,
  cmp: vf,
  Entity: bf,
  PropModification: wf,
  replacePrefix: Ef,
  add: xf,
  remove: Of,
  DexieYProvider: Tf
} = yo;
function Uc(e) {
  return qs() ? (Ua(e), !0) : !1;
}
// @__NO_SIDE_EFFECTS__
function Rf() {
  const e = /* @__PURE__ */ new Set(), n = (c) => {
    e.delete(c);
  };
  return {
    on: (c) => {
      e.add(c);
      const d = () => n(c);
      return Uc(d), {
        off: d
      };
    },
    off: n,
    trigger: (...c) => Promise.all(Array.from(e).map((d) => d(...c))),
    clear: () => {
      e.clear();
    }
  };
}
const If = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Bs = () => {
}, Af = (e, n) => Object.prototype.hasOwnProperty.call(e, n);
function Hc(e, n) {
  function i(...s) {
    return new Promise((l, c) => {
      Promise.resolve(e(() => n.apply(this, s), { fn: n, thisArg: this, args: s })).then(l).catch(c);
    });
  }
  return i;
}
function Fc(e, n = {}) {
  let i, s, l = Bs;
  const c = (g) => {
    clearTimeout(g), l(), l = Bs;
  };
  let d;
  return (g) => {
    const N = ys(e), A = ys(n.maxWait);
    return i && c(i), N <= 0 || A !== void 0 && A <= 0 ? (s && (c(s), s = void 0), Promise.resolve(g())) : new Promise((P, L) => {
      l = n.rejectOnCancel ? L : P, d = g, A && !s && (s = setTimeout(() => {
        i && c(i), s = void 0, P(d());
      }, A)), i = setTimeout(() => {
        s && c(s), s = void 0, P(g());
      }, N);
    });
  };
}
// @__NO_SIDE_EFFECTS__
function Sf(e, n = 200, i = {}) {
  return Hc(
    Fc(n, i),
    e
  );
}
export {
  ys as $,
  Yu as A,
  cu as B,
  Xu as C,
  Ro as D,
  kc as E,
  Ua as F,
  ul as G,
  Ol as H,
  Cl as I,
  Dl as J,
  wt as K,
  ef as L,
  oi as M,
  jl as N,
  lf as O,
  ff as P,
  po as Q,
  al as R,
  Yc as S,
  si as T,
  ja as U,
  We as V,
  $c as W,
  Wc as X,
  zl as Y,
  Qc as Z,
  cf as _,
  $e as a,
  rf as a0,
  bc as a1,
  Zc as a2,
  vc as a3,
  sl as a4,
  au as a5,
  of as a6,
  uf as a7,
  Lc as a8,
  Xc as a9,
  Jc as aa,
  Dc as ab,
  Mc as ac,
  hf as ad,
  Sf as ae,
  yo as af,
  df as ag,
  Rf as ah,
  If as ai,
  Af as aj,
  pf as ak,
  Nc as al,
  vo as b,
  sf as c,
  js as d,
  ht as e,
  Gc as f,
  Dt as g,
  Vc as h,
  pe as i,
  un as j,
  he as k,
  hr as l,
  Eo as m,
  Gt as n,
  zc as o,
  qs as p,
  Wr as q,
  qc as r,
  Tu as s,
  af as t,
  nf as u,
  ho as v,
  to as w,
  _t as x,
  tf as y,
  Il as z
};
