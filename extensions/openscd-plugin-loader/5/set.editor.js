(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`:host{display:block;font-family:var(--oscd-text-font, "Roboto");color:var(--mdc-theme-on-surface);background-color:var(--mdc-theme-surface)}h3{color:var(--primary)}#root-container{padding:16px}*{--base03: #002b36;--base02: #073642;--base01: #586e75;--base00: #657b83;--base0: #839496;--base1: #93a1a1;--base2: #eee8d5;--base3: #fdf6e3;--yellow: #b58900;--orange: #cb4b16;--red: #dc322f;--magenta: #d33682;--violet: #6c71c4;--blue: #268bd2;--cyan: #2aa198;--green: #859900;--primary: var(--cyan);--secondary: var(--violet);--mdc-theme-primary: var(--primary);--mdc-theme-secondary: var(--secondary);--mdc-theme-background: var(--base3);--mdc-theme-surface: var(--base3);--mdc-theme-on-primary: var(--base2);--mdc-theme-on-secondary: var(--base2);--mdc-theme-on-background: var(--base00);--mdc-theme-on-surface: var(--base00);--mdc-theme-text-primary-on-background: var(--base01);--mdc-theme-text-secondary-on-background: var(--base00);--mdc-theme-text-icon-on-background: var(--base00);--mdc-theme-error: var(--red);--mdc-button-disabled-ink-color: var(--base1);--mdc-drawer-heading-ink-color: var(--base00);--mdc-text-field-fill-color: var(--base2);--mdc-text-field-disabled-fill-color: var(--base3);--mdc-text-field-ink-color: var(--base00);--mdc-text-field-label-ink-color: var(--base00);--mdc-select-fill-color: var(--base2);--mdc-select-disabled-fill-color: var(--base3);--mdc-select-ink-color: var(--base00);--mdc-dialog-heading-ink-color: var(--base00);--mdc-icon-font: "Material Icons Outlined";--oscd-primary: var(--oscd-theme-primary, var(--cyan));--oscd-secondary: var(--oscd-theme-secondary, var(--violet));--oscd-error: var(--oscd-theme-error, var(--red));--oscd-base03: var(--oscd-theme-base03, var(--base03));--oscd-base02: var(--oscd-theme-base02, var(--base02));--oscd-base01: var(--oscd-theme-base01, var(--base01));--oscd-base00: var(--oscd-theme-base00, var(--base00));--oscd-base0: var(--oscd-theme-base0, var(--base0));--oscd-base1: var(--oscd-theme-base1, var(--base1));--oscd-base2: var(--oscd-theme-base2, var(--base2));--oscd-base3: var(--oscd-theme-base3, var(--base3));--oscd-text-font: var(--oscd-theme-text-font, "Roboto");--oscd-icon-font: var(--oscd-theme-icon-font, "Material Icons")}.mdc-drawer span.mdc-drawer__title{color:var(--mdc-theme-text-primary-on-background)!important}abbr{text-decoration:none;border-bottom:none}mwc-textfield[iconTrailing=search]{--mdc-shape-small: 28px}/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */@layer theme{[data-v-52fe7d34]:root,[data-v-52fe7d34]:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{[data-v-52fe7d34],[data-v-52fe7d34]:after,[data-v-52fe7d34]:before,[data-v-52fe7d34]::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-v-52fe7d34]::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html[data-v-52fe7d34],[data-v-52fe7d34]:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr[data-v-52fe7d34]{height:0;color:inherit;border-top-width:1px}abbr[data-v-52fe7d34]:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1[data-v-52fe7d34],h2[data-v-52fe7d34],h3[data-v-52fe7d34],h4[data-v-52fe7d34],h5[data-v-52fe7d34],h6[data-v-52fe7d34]{font-size:inherit;font-weight:inherit}a[data-v-52fe7d34]{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b[data-v-52fe7d34],strong[data-v-52fe7d34]{font-weight:bolder}code[data-v-52fe7d34],kbd[data-v-52fe7d34],samp[data-v-52fe7d34],pre[data-v-52fe7d34]{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small[data-v-52fe7d34]{font-size:80%}sub[data-v-52fe7d34],sup[data-v-52fe7d34]{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub[data-v-52fe7d34]{bottom:-.25em}sup[data-v-52fe7d34]{top:-.5em}table[data-v-52fe7d34]{text-indent:0;border-color:inherit;border-collapse:collapse}[data-v-52fe7d34]:-moz-focusring{outline:auto}progress[data-v-52fe7d34]{vertical-align:baseline}summary[data-v-52fe7d34]{display:list-item}ol[data-v-52fe7d34],ul[data-v-52fe7d34],menu[data-v-52fe7d34]{list-style:none}img[data-v-52fe7d34],svg[data-v-52fe7d34],video[data-v-52fe7d34],canvas[data-v-52fe7d34],audio[data-v-52fe7d34],iframe[data-v-52fe7d34],embed[data-v-52fe7d34],object[data-v-52fe7d34]{vertical-align:middle;display:block}img[data-v-52fe7d34],video[data-v-52fe7d34]{max-width:100%;height:auto}button[data-v-52fe7d34],input[data-v-52fe7d34],select[data-v-52fe7d34],optgroup[data-v-52fe7d34],textarea[data-v-52fe7d34]{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-v-52fe7d34]::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup[data-v-52fe7d34]{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option[data-v-52fe7d34]{padding-inline-start:20px}[data-v-52fe7d34]::file-selector-button{margin-inline-end:4px}[data-v-52fe7d34]::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){[data-v-52fe7d34]::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-v-52fe7d34]::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea[data-v-52fe7d34]{resize:vertical}[data-v-52fe7d34]::-webkit-search-decoration{-webkit-appearance:none}[data-v-52fe7d34]::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-v-52fe7d34]::-webkit-datetime-edit{display:inline-flex}[data-v-52fe7d34]::-webkit-datetime-edit-fields-wrapper{padding:0}[data-v-52fe7d34]::-webkit-datetime-edit{padding-block:0}[data-v-52fe7d34]::-webkit-datetime-edit-year-field{padding-block:0}[data-v-52fe7d34]::-webkit-datetime-edit-month-field{padding-block:0}[data-v-52fe7d34]::-webkit-datetime-edit-day-field{padding-block:0}[data-v-52fe7d34]::-webkit-datetime-edit-hour-field{padding-block:0}[data-v-52fe7d34]::-webkit-datetime-edit-minute-field{padding-block:0}[data-v-52fe7d34]::-webkit-datetime-edit-second-field{padding-block:0}[data-v-52fe7d34]::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-v-52fe7d34]::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-v-52fe7d34]::-webkit-calendar-picker-indicator{line-height:1}[data-v-52fe7d34]:-moz-ui-invalid{box-shadow:none}button[data-v-52fe7d34],input[data-v-52fe7d34]:where([type=button],[type=reset],[type=submit]){appearance:button}[data-v-52fe7d34]::file-selector-button{appearance:button}[data-v-52fe7d34]::-webkit-inner-spin-button{height:auto}[data-v-52fe7d34]::-webkit-outer-spin-button{height:auto}[hidden][data-v-52fe7d34]:where(:not([hidden=until-found])){display:none!important}:where([data-v-52fe7d34]:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where([data-v-52fe7d34]:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open][data-v-52fe7d34],.modal-open[data-v-52fe7d34],.modal-toggle:checked+.modal[data-v-52fe7d34]):not(.modal-start,.modal-end){scrollbar-gutter:stable}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}[data-v-52fe7d34]:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}[data-v-52fe7d34]:root,[data-theme][data-v-52fe7d34]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}[data-v-52fe7d34]:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){[data-v-52fe7d34]:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}[data-v-52fe7d34]:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}:where([data-v-52fe7d34]:root),[data-v-52fe7d34]:root:has(input.theme-controller[value=ocean-light]:checked),[data-theme=ocean-light][data-v-52fe7d34]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(37% 0 0);--color-primary:oklch(58.13% .0903 209.8);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(65.24% .0821 207.95);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(98% .001 106.423);--color-neutral:oklch(55% .013 58.071);--color-neutral-content:oklch(98% .031 120.757);--color-info:oklch(70% .165 254.624);--color-info-content:oklch(98% .001 106.423);--color-success:oklch(72% .219 149.579);--color-success-content:oklch(98% .001 106.423);--color-warning:oklch(87% .169 91.605);--color-warning-content:oklch(98% .001 106.423);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(98% .001 106.423);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.21875rem;--size-field:.21875rem;--border:1.5px;--depth:1;--noise:1;--border-color:var(--color-base-content)}}@layer components;@layer utilities{.table[data-v-52fe7d34]{border-radius:var(--radius-box);text-align:left;width:100%;font-size:.875rem;position:relative}.table[data-v-52fe7d34]:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media (hover:hover){:is(.table tr.row-hover[data-v-52fe7d34],.table tr.row-hover[data-v-52fe7d34]:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table[data-v-52fe7d34] :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table[data-v-52fe7d34] :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table[data-v-52fe7d34] :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.table[data-v-52fe7d34] :where(thead,tfoot){font-size:.875rem;font-weight:600}.table[data-v-52fe7d34] :where(tfoot){border-top:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table[data-v-52fe7d34] :where(tfoot){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.table[data-v-52fe7d34] :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table[data-v-52fe7d34] :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table[data-v-52fe7d34] :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table[data-v-52fe7d34] :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table[data-v-52fe7d34] :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.inline[data-v-52fe7d34]{display:inline}.table[data-v-52fe7d34]{display:table}.link[data-v-52fe7d34]{cursor:pointer;text-decoration-line:underline}.link[data-v-52fe7d34]:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link[data-v-52fe7d34]:focus{outline-offset:2px;outline:2px solid #0000}}.link[data-v-52fe7d34]:focus-visible{outline-offset:2px;outline:2px solid}.flex-wrap[data-v-52fe7d34]{flex-wrap:wrap}}[data-v-52fe7d34]:root{--color-ocean-gray-00:#fff;--color-ocean-gray-25:#fafbfb;--color-ocean-gray-50:#f5f6f7;--color-ocean-gray-75:#eaeeef;--color-ocean-gray-100:#e1e4e6;--color-ocean-gray-150:#c6ced1;--color-ocean-gray-200:#bac1c4;--color-ocean-gray-250:#9fadb2;--color-ocean-gray-300:#889499;--color-ocean-gray-350:#72858c;--color-ocean-gray-400:#617177;--color-ocean-gray-450:#3f555e;--color-ocean-gray-500:#394d55;--color-ocean-gray-550:#34464d;--color-ocean-gray-600:#2e3e44;--color-ocean-gray-650:#27353b;--color-ocean-gray-700:#222e33;--color-ocean-gray-750:#1f272b;--color-ocean-gray-800:#171f22;--color-ocean-gray-850:#11171a;--color-ocean-gray-900:#0b0f11;--color-chart-1:#f7931e;--color-chart-2:#40535b;--color-chart-3:#2798aa;--color-chart-4:#6da89c;--color-chart-5:#a4cadd;--color-chart-6:#97b42d;--color-chart-7:#ffcb05;--color-chart-8:#ee652e;--color-chart-9:#528694;--color-chart-10:#a10f3b}header[data-v-52fe7d34]{line-height:1.5}.logo[data-v-52fe7d34]{margin:0 auto 2rem;display:block}@media (min-width:1024px){header[data-v-52fe7d34]{padding-right:calc(var(--section-gap)/2);place-items:center;display:flex}.logo[data-v-52fe7d34]{margin:0 2rem 0 0}header .wrapper[data-v-52fe7d34]{flex-wrap:wrap;place-items:flex-start;display:flex}}@keyframes dropdown-52fe7d34{0%{opacity:0}}@keyframes radio-52fe7d34{0%{padding:5px}50%{padding:3px}}@keyframes toast-52fe7d34{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes rating-52fe7d34{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes skeleton-52fe7d34{0%{background-position:150%}to{background-position:-50%}}@keyframes progress-52fe7d34{50%{background-position-x:-115%}}`)),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Vs(n) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const a of n.split(",")) i[a] = 1;
  return (a) => a in i;
}
const at = {}, ii = [], Pn = () => {
}, Rc = () => !1, Ro = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // uppercase letter
(n.charCodeAt(2) > 122 || n.charCodeAt(2) < 97), Gs = (n) => n.startsWith("onUpdate:"), Mt = Object.assign, Hs = (n, i) => {
  const a = n.indexOf(i);
  a > -1 && n.splice(a, 1);
}, kc = Object.prototype.hasOwnProperty, Ze = (n, i) => kc.call(n, i), Ke = Array.isArray, Hi = (n) => ko(n) === "[object Map]", jc = (n) => ko(n) === "[object Set]", Be = (n) => typeof n == "function", At = (n) => typeof n == "string", ci = (n) => typeof n == "symbol", bt = (n) => n !== null && typeof n == "object", hu = (n) => (bt(n) || Be(n)) && Be(n.then) && Be(n.catch), Fc = Object.prototype.toString, ko = (n) => Fc.call(n), Kc = (n) => ko(n).slice(8, -1), Mc = (n) => ko(n) === "[object Object]", Ws = (n) => At(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, Wi = /* @__PURE__ */ Vs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), jo = (n) => {
  const i = /* @__PURE__ */ Object.create(null);
  return (a) => i[a] || (i[a] = n(a));
}, Bc = /-(\w)/g, vr = jo(
  (n) => n.replace(Bc, (i, a) => a ? a.toUpperCase() : "")
), qc = /\B([A-Z])/g, ti = jo(
  (n) => n.replace(qc, "-$1").toLowerCase()
), mu = jo((n) => n.charAt(0).toUpperCase() + n.slice(1)), ps = jo(
  (n) => n ? `on${mu(n)}` : ""
), mr = (n, i) => !Object.is(n, i), hs = (n, ...i) => {
  for (let a = 0; a < n.length; a++)
    n[a](...i);
}, Ts = (n, i, a, u = !1) => {
  Object.defineProperty(n, i, {
    configurable: !0,
    enumerable: !1,
    writable: u,
    value: a
  });
}, Lc = (n) => {
  const i = parseFloat(n);
  return isNaN(i) ? n : i;
};
let ga;
const Fo = () => ga || (ga = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ys(n) {
  if (Ke(n)) {
    const i = {};
    for (let a = 0; a < n.length; a++) {
      const u = n[a], l = At(u) ? Gc(u) : Ys(u);
      if (l)
        for (const d in l)
          i[d] = l[d];
    }
    return i;
  } else if (At(n) || bt(n))
    return n;
}
const $c = /;(?![^(]*\))/g, Uc = /:([^]+)/, Vc = /\/\*[^]*?\*\//g;
function Gc(n) {
  const i = {};
  return n.replace(Vc, "").split($c).forEach((a) => {
    if (a) {
      const u = a.split(Uc);
      u.length > 1 && (i[u[0].trim()] = u[1].trim());
    }
  }), i;
}
function Xs(n) {
  let i = "";
  if (At(n))
    i = n;
  else if (Ke(n))
    for (let a = 0; a < n.length; a++) {
      const u = Xs(n[a]);
      u && (i += u + " ");
    }
  else if (bt(n))
    for (const a in n)
      n[a] && (i += a + " ");
  return i.trim();
}
const Hc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Wc = /* @__PURE__ */ Vs(Hc);
function yu(n) {
  return !!n || n === "";
}
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let nn;
class Yc {
  constructor(i = !1) {
    this.detached = i, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = nn, !i && nn && (this.index = (nn.scopes || (nn.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let i, a;
      if (this.scopes)
        for (i = 0, a = this.scopes.length; i < a; i++)
          this.scopes[i].pause();
      for (i = 0, a = this.effects.length; i < a; i++)
        this.effects[i].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let i, a;
      if (this.scopes)
        for (i = 0, a = this.scopes.length; i < a; i++)
          this.scopes[i].resume();
      for (i = 0, a = this.effects.length; i < a; i++)
        this.effects[i].resume();
    }
  }
  run(i) {
    if (this._active) {
      const a = nn;
      try {
        return nn = this, i();
      } finally {
        nn = a;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = nn, nn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (nn = this.prevScope, this.prevScope = void 0);
  }
  stop(i) {
    if (this._active) {
      this._active = !1;
      let a, u;
      for (a = 0, u = this.effects.length; a < u; a++)
        this.effects[a].stop();
      for (this.effects.length = 0, a = 0, u = this.cleanups.length; a < u; a++)
        this.cleanups[a]();
      if (this.cleanups.length = 0, this.scopes) {
        for (a = 0, u = this.scopes.length; a < u; a++)
          this.scopes[a].stop(!0);
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
function Xc() {
  return nn;
}
let st;
const ms = /* @__PURE__ */ new WeakSet();
class vu {
  constructor(i) {
    this.fn = i, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, nn && nn.active && nn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ms.has(this) && (ms.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || bu(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ba(this), _u(this);
    const i = st, a = Sn;
    st = this, Sn = !0;
    try {
      return this.fn();
    } finally {
      wu(this), st = i, Sn = a, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let i = this.deps; i; i = i.nextDep)
        Js(i);
      this.deps = this.depsTail = void 0, ba(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ms.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Cs(this) && this.run();
  }
  get dirty() {
    return Cs(this);
  }
}
let gu = 0, Yi, Xi;
function bu(n, i = !1) {
  if (n.flags |= 8, i) {
    n.next = Xi, Xi = n;
    return;
  }
  n.next = Yi, Yi = n;
}
function Qs() {
  gu++;
}
function zs() {
  if (--gu > 0)
    return;
  if (Xi) {
    let i = Xi;
    for (Xi = void 0; i; ) {
      const a = i.next;
      i.next = void 0, i.flags &= -9, i = a;
    }
  }
  let n;
  for (; Yi; ) {
    let i = Yi;
    for (Yi = void 0; i; ) {
      const a = i.next;
      if (i.next = void 0, i.flags &= -9, i.flags & 1)
        try {
          i.trigger();
        } catch (u) {
          n || (n = u);
        }
      i = a;
    }
  }
  if (n) throw n;
}
function _u(n) {
  for (let i = n.deps; i; i = i.nextDep)
    i.version = -1, i.prevActiveLink = i.dep.activeLink, i.dep.activeLink = i;
}
function wu(n) {
  let i, a = n.depsTail, u = a;
  for (; u; ) {
    const l = u.prevDep;
    u.version === -1 ? (u === a && (a = l), Js(u), Qc(u)) : i = u, u.dep.activeLink = u.prevActiveLink, u.prevActiveLink = void 0, u = l;
  }
  n.deps = i, n.depsTail = a;
}
function Cs(n) {
  for (let i = n.deps; i; i = i.nextDep)
    if (i.dep.version !== i.version || i.dep.computed && (xu(i.dep.computed) || i.dep.version !== i.version))
      return !0;
  return !!n._dirty;
}
function xu(n) {
  if (n.flags & 4 && !(n.flags & 16) || (n.flags &= -17, n.globalVersion === no) || (n.globalVersion = no, !n.isSSR && n.flags & 128 && (!n.deps && !n._dirty || !Cs(n))))
    return;
  n.flags |= 2;
  const i = n.dep, a = st, u = Sn;
  st = n, Sn = !0;
  try {
    _u(n);
    const l = n.fn(n._value);
    (i.version === 0 || mr(l, n._value)) && (n.flags |= 128, n._value = l, i.version++);
  } catch (l) {
    throw i.version++, l;
  } finally {
    st = a, Sn = u, wu(n), n.flags &= -3;
  }
}
function Js(n, i = !1) {
  const { dep: a, prevSub: u, nextSub: l } = n;
  if (u && (u.nextSub = l, n.prevSub = void 0), l && (l.prevSub = u, n.nextSub = void 0), a.subs === n && (a.subs = u, !u && a.computed)) {
    a.computed.flags &= -5;
    for (let d = a.computed.deps; d; d = d.nextDep)
      Js(d, !0);
  }
  !i && !--a.sc && a.map && a.map.delete(a.key);
}
function Qc(n) {
  const { prevDep: i, nextDep: a } = n;
  i && (i.nextDep = a, n.prevDep = void 0), a && (a.prevDep = i, n.nextDep = void 0);
}
let Sn = !0;
const Su = [];
function ar() {
  Su.push(Sn), Sn = !1;
}
function ur() {
  const n = Su.pop();
  Sn = n === void 0 ? !0 : n;
}
function ba(n) {
  const { cleanup: i } = n;
  if (n.cleanup = void 0, i) {
    const a = st;
    st = void 0;
    try {
      i();
    } finally {
      st = a;
    }
  }
}
let no = 0;
class zc {
  constructor(i, a) {
    this.sub = i, this.dep = a, this.version = a.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Zs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(i) {
    this.computed = i, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(i) {
    if (!st || !Sn || st === this.computed)
      return;
    let a = this.activeLink;
    if (a === void 0 || a.sub !== st)
      a = this.activeLink = new zc(st, this), st.deps ? (a.prevDep = st.depsTail, st.depsTail.nextDep = a, st.depsTail = a) : st.deps = st.depsTail = a, Eu(a);
    else if (a.version === -1 && (a.version = this.version, a.nextDep)) {
      const u = a.nextDep;
      u.prevDep = a.prevDep, a.prevDep && (a.prevDep.nextDep = u), a.prevDep = st.depsTail, a.nextDep = void 0, st.depsTail.nextDep = a, st.depsTail = a, st.deps === a && (st.deps = u);
    }
    return a;
  }
  trigger(i) {
    this.version++, no++, this.notify(i);
  }
  notify(i) {
    Qs();
    try {
      for (let a = this.subs; a; a = a.prevSub)
        a.sub.notify() && a.sub.dep.notify();
    } finally {
      zs();
    }
  }
}
function Eu(n) {
  if (n.dep.sc++, n.sub.flags & 4) {
    const i = n.dep.computed;
    if (i && !n.dep.subs) {
      i.flags |= 20;
      for (let u = i.deps; u; u = u.nextDep)
        Eu(u);
    }
    const a = n.dep.subs;
    a !== n && (n.prevSub = a, a && (a.nextSub = n)), n.dep.subs = n;
  }
}
const As = /* @__PURE__ */ new WeakMap(), Zr = Symbol(
  ""
), Is = Symbol(
  ""
), ro = Symbol(
  ""
);
function Ft(n, i, a) {
  if (Sn && st) {
    let u = As.get(n);
    u || As.set(n, u = /* @__PURE__ */ new Map());
    let l = u.get(a);
    l || (u.set(a, l = new Zs()), l.map = u, l.key = a), l.track();
  }
}
function sr(n, i, a, u, l, d) {
  const g = As.get(n);
  if (!g) {
    no++;
    return;
  }
  const T = (N) => {
    N && N.trigger();
  };
  if (Qs(), i === "clear")
    g.forEach(T);
  else {
    const N = Ke(n), $ = N && Ws(a);
    if (N && a === "length") {
      const j = Number(u);
      g.forEach((L, z) => {
        (z === "length" || z === ro || !ci(z) && z >= j) && T(L);
      });
    } else
      switch ((a !== void 0 || g.has(void 0)) && T(g.get(a)), $ && T(g.get(ro)), i) {
        case "add":
          N ? $ && T(g.get("length")) : (T(g.get(Zr)), Hi(n) && T(g.get(Is)));
          break;
        case "delete":
          N || (T(g.get(Zr)), Hi(n) && T(g.get(Is)));
          break;
        case "set":
          Hi(n) && T(g.get(Zr));
          break;
      }
  }
  zs();
}
function ni(n) {
  const i = Je(n);
  return i === n ? i : (Ft(i, "iterate", ro), En(n) ? i : i.map(zt));
}
function ea(n) {
  return Ft(n = Je(n), "iterate", ro), n;
}
const Jc = {
  __proto__: null,
  [Symbol.iterator]() {
    return ys(this, Symbol.iterator, zt);
  },
  concat(...n) {
    return ni(this).concat(
      ...n.map((i) => Ke(i) ? ni(i) : i)
    );
  },
  entries() {
    return ys(this, "entries", (n) => (n[1] = zt(n[1]), n));
  },
  every(n, i) {
    return rr(this, "every", n, i, void 0, arguments);
  },
  filter(n, i) {
    return rr(this, "filter", n, i, (a) => a.map(zt), arguments);
  },
  find(n, i) {
    return rr(this, "find", n, i, zt, arguments);
  },
  findIndex(n, i) {
    return rr(this, "findIndex", n, i, void 0, arguments);
  },
  findLast(n, i) {
    return rr(this, "findLast", n, i, zt, arguments);
  },
  findLastIndex(n, i) {
    return rr(this, "findLastIndex", n, i, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(n, i) {
    return rr(this, "forEach", n, i, void 0, arguments);
  },
  includes(...n) {
    return vs(this, "includes", n);
  },
  indexOf(...n) {
    return vs(this, "indexOf", n);
  },
  join(n) {
    return ni(this).join(n);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...n) {
    return vs(this, "lastIndexOf", n);
  },
  map(n, i) {
    return rr(this, "map", n, i, void 0, arguments);
  },
  pop() {
    return Ui(this, "pop");
  },
  push(...n) {
    return Ui(this, "push", n);
  },
  reduce(n, ...i) {
    return _a(this, "reduce", n, i);
  },
  reduceRight(n, ...i) {
    return _a(this, "reduceRight", n, i);
  },
  shift() {
    return Ui(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(n, i) {
    return rr(this, "some", n, i, void 0, arguments);
  },
  splice(...n) {
    return Ui(this, "splice", n);
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
    return Ui(this, "unshift", n);
  },
  values() {
    return ys(this, "values", zt);
  }
};
function ys(n, i, a) {
  const u = ea(n), l = u[i]();
  return u !== n && !En(n) && (l._next = l.next, l.next = () => {
    const d = l._next();
    return d.value && (d.value = a(d.value)), d;
  }), l;
}
const Zc = Array.prototype;
function rr(n, i, a, u, l, d) {
  const g = ea(n), T = g !== n && !En(n), N = g[i];
  if (N !== Zc[i]) {
    const L = N.apply(n, d);
    return T ? zt(L) : L;
  }
  let $ = a;
  g !== n && (T ? $ = function(L, z) {
    return a.call(this, zt(L), z, n);
  } : a.length > 2 && ($ = function(L, z) {
    return a.call(this, L, z, n);
  }));
  const j = N.call(g, $, u);
  return T && l ? l(j) : j;
}
function _a(n, i, a, u) {
  const l = ea(n);
  let d = a;
  return l !== n && (En(n) ? a.length > 3 && (d = function(g, T, N) {
    return a.call(this, g, T, N, n);
  }) : d = function(g, T, N) {
    return a.call(this, g, zt(T), N, n);
  }), l[i](d, ...u);
}
function vs(n, i, a) {
  const u = Je(n);
  Ft(u, "iterate", ro);
  const l = u[i](...a);
  return (l === -1 || l === !1) && ia(a[0]) ? (a[0] = Je(a[0]), u[i](...a)) : l;
}
function Ui(n, i, a = []) {
  ar(), Qs();
  const u = Je(n)[i].apply(n, a);
  return zs(), ur(), u;
}
const el = /* @__PURE__ */ Vs("__proto__,__v_isRef,__isVue"), Tu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(ci)
);
function tl(n) {
  ci(n) || (n = String(n));
  const i = Je(this);
  return Ft(i, "has", n), i.hasOwnProperty(n);
}
class Cu {
  constructor(i = !1, a = !1) {
    this._isReadonly = i, this._isShallow = a;
  }
  get(i, a, u) {
    if (a === "__v_skip") return i.__v_skip;
    const l = this._isReadonly, d = this._isShallow;
    if (a === "__v_isReactive")
      return !l;
    if (a === "__v_isReadonly")
      return l;
    if (a === "__v_isShallow")
      return d;
    if (a === "__v_raw")
      return u === (l ? d ? fl : Nu : d ? Ou : Iu).get(i) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(i) === Object.getPrototypeOf(u) ? i : void 0;
    const g = Ke(i);
    if (!l) {
      let N;
      if (g && (N = Jc[a]))
        return N;
      if (a === "hasOwnProperty")
        return tl;
    }
    const T = Reflect.get(
      i,
      a,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Kt(i) ? i : u
    );
    return (ci(a) ? Tu.has(a) : el(a)) || (l || Ft(i, "get", a), d) ? T : Kt(T) ? g && Ws(a) ? T : T.value : bt(T) ? l ? Pu(T) : na(T) : T;
  }
}
class Au extends Cu {
  constructor(i = !1) {
    super(!1, i);
  }
  set(i, a, u, l) {
    let d = i[a];
    if (!this._isShallow) {
      const N = ei(d);
      if (!En(u) && !ei(u) && (d = Je(d), u = Je(u)), !Ke(i) && Kt(d) && !Kt(u))
        return N ? !1 : (d.value = u, !0);
    }
    const g = Ke(i) && Ws(a) ? Number(a) < i.length : Ze(i, a), T = Reflect.set(
      i,
      a,
      u,
      Kt(i) ? i : l
    );
    return i === Je(l) && (g ? mr(u, d) && sr(i, "set", a, u) : sr(i, "add", a, u)), T;
  }
  deleteProperty(i, a) {
    const u = Ze(i, a);
    i[a];
    const l = Reflect.deleteProperty(i, a);
    return l && u && sr(i, "delete", a, void 0), l;
  }
  has(i, a) {
    const u = Reflect.has(i, a);
    return (!ci(a) || !Tu.has(a)) && Ft(i, "has", a), u;
  }
  ownKeys(i) {
    return Ft(
      i,
      "iterate",
      Ke(i) ? "length" : Zr
    ), Reflect.ownKeys(i);
  }
}
class nl extends Cu {
  constructor(i = !1) {
    super(!0, i);
  }
  set(i, a) {
    return !0;
  }
  deleteProperty(i, a) {
    return !0;
  }
}
const rl = /* @__PURE__ */ new Au(), il = /* @__PURE__ */ new nl(), ol = /* @__PURE__ */ new Au(!0);
const Os = (n) => n, po = (n) => Reflect.getPrototypeOf(n);
function sl(n, i, a) {
  return function(...u) {
    const l = this.__v_raw, d = Je(l), g = Hi(d), T = n === "entries" || n === Symbol.iterator && g, N = n === "keys" && g, $ = l[n](...u), j = a ? Os : i ? Ns : zt;
    return !i && Ft(
      d,
      "iterate",
      N ? Is : Zr
    ), {
      // iterator protocol
      next() {
        const { value: L, done: z } = $.next();
        return z ? { value: L, done: z } : {
          value: T ? [j(L[0]), j(L[1])] : j(L),
          done: z
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ho(n) {
  return function(...i) {
    return n === "delete" ? !1 : n === "clear" ? void 0 : this;
  };
}
function al(n, i) {
  const a = {
    get(l) {
      const d = this.__v_raw, g = Je(d), T = Je(l);
      n || (mr(l, T) && Ft(g, "get", l), Ft(g, "get", T));
      const { has: N } = po(g), $ = i ? Os : n ? Ns : zt;
      if (N.call(g, l))
        return $(d.get(l));
      if (N.call(g, T))
        return $(d.get(T));
      d !== g && d.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !n && Ft(Je(l), "iterate", Zr), Reflect.get(l, "size", l);
    },
    has(l) {
      const d = this.__v_raw, g = Je(d), T = Je(l);
      return n || (mr(l, T) && Ft(g, "has", l), Ft(g, "has", T)), l === T ? d.has(l) : d.has(l) || d.has(T);
    },
    forEach(l, d) {
      const g = this, T = g.__v_raw, N = Je(T), $ = i ? Os : n ? Ns : zt;
      return !n && Ft(N, "iterate", Zr), T.forEach((j, L) => l.call(d, $(j), $(L), g));
    }
  };
  return Mt(
    a,
    n ? {
      add: ho("add"),
      set: ho("set"),
      delete: ho("delete"),
      clear: ho("clear")
    } : {
      add(l) {
        !i && !En(l) && !ei(l) && (l = Je(l));
        const d = Je(this);
        return po(d).has.call(d, l) || (d.add(l), sr(d, "add", l, l)), this;
      },
      set(l, d) {
        !i && !En(d) && !ei(d) && (d = Je(d));
        const g = Je(this), { has: T, get: N } = po(g);
        let $ = T.call(g, l);
        $ || (l = Je(l), $ = T.call(g, l));
        const j = N.call(g, l);
        return g.set(l, d), $ ? mr(d, j) && sr(g, "set", l, d) : sr(g, "add", l, d), this;
      },
      delete(l) {
        const d = Je(this), { has: g, get: T } = po(d);
        let N = g.call(d, l);
        N || (l = Je(l), N = g.call(d, l)), T && T.call(d, l);
        const $ = d.delete(l);
        return N && sr(d, "delete", l, void 0), $;
      },
      clear() {
        const l = Je(this), d = l.size !== 0, g = l.clear();
        return d && sr(
          l,
          "clear",
          void 0,
          void 0
        ), g;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((l) => {
    a[l] = sl(l, n, i);
  }), a;
}
function ta(n, i) {
  const a = al(n, i);
  return (u, l, d) => l === "__v_isReactive" ? !n : l === "__v_isReadonly" ? n : l === "__v_raw" ? u : Reflect.get(
    Ze(a, l) && l in u ? a : u,
    l,
    d
  );
}
const ul = {
  get: /* @__PURE__ */ ta(!1, !1)
}, cl = {
  get: /* @__PURE__ */ ta(!1, !0)
}, ll = {
  get: /* @__PURE__ */ ta(!0, !1)
};
const Iu = /* @__PURE__ */ new WeakMap(), Ou = /* @__PURE__ */ new WeakMap(), Nu = /* @__PURE__ */ new WeakMap(), fl = /* @__PURE__ */ new WeakMap();
function dl(n) {
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
function pl(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : dl(Kc(n));
}
function na(n) {
  return ei(n) ? n : ra(
    n,
    !1,
    rl,
    ul,
    Iu
  );
}
function hl(n) {
  return ra(
    n,
    !1,
    ol,
    cl,
    Ou
  );
}
function Pu(n) {
  return ra(
    n,
    !0,
    il,
    ll,
    Nu
  );
}
function ra(n, i, a, u, l) {
  if (!bt(n) || n.__v_raw && !(i && n.__v_isReactive))
    return n;
  const d = pl(n);
  if (d === 0)
    return n;
  const g = l.get(n);
  if (g)
    return g;
  const T = new Proxy(
    n,
    d === 2 ? u : a
  );
  return l.set(n, T), T;
}
function Qi(n) {
  return ei(n) ? Qi(n.__v_raw) : !!(n && n.__v_isReactive);
}
function ei(n) {
  return !!(n && n.__v_isReadonly);
}
function En(n) {
  return !!(n && n.__v_isShallow);
}
function ia(n) {
  return n ? !!n.__v_raw : !1;
}
function Je(n) {
  const i = n && n.__v_raw;
  return i ? Je(i) : n;
}
function ml(n) {
  return !Ze(n, "__v_skip") && Object.isExtensible(n) && Ts(n, "__v_skip", !0), n;
}
const zt = (n) => bt(n) ? na(n) : n, Ns = (n) => bt(n) ? Pu(n) : n;
function Kt(n) {
  return n ? n.__v_isRef === !0 : !1;
}
function zi(n) {
  return yl(n, !1);
}
function yl(n, i) {
  return Kt(n) ? n : new vl(n, i);
}
class vl {
  constructor(i, a) {
    this.dep = new Zs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = a ? i : Je(i), this._value = a ? i : zt(i), this.__v_isShallow = a;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(i) {
    const a = this._rawValue, u = this.__v_isShallow || En(i) || ei(i);
    i = u ? i : Je(i), mr(i, a) && (this._rawValue = i, this._value = u ? i : zt(i), this.dep.trigger());
  }
}
function Du(n) {
  return Kt(n) ? n.value : n;
}
const gl = {
  get: (n, i, a) => i === "__v_raw" ? n : Du(Reflect.get(n, i, a)),
  set: (n, i, a, u) => {
    const l = n[i];
    return Kt(l) && !Kt(a) ? (l.value = a, !0) : Reflect.set(n, i, a, u);
  }
};
function Ru(n) {
  return Qi(n) ? n : new Proxy(n, gl);
}
class bl {
  constructor(i, a, u) {
    this.fn = i, this.setter = a, this._value = void 0, this.dep = new Zs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = no - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !a, this.isSSR = u;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    st !== this)
      return bu(this, !0), !0;
  }
  get value() {
    const i = this.dep.track();
    return xu(this), i && (i.version = this.dep.version), this._value;
  }
  set value(i) {
    this.setter && this.setter(i);
  }
}
function _l(n, i, a = !1) {
  let u, l;
  return Be(n) ? u = n : (u = n.get, l = n.set), new bl(u, l, a);
}
const mo = {}, To = /* @__PURE__ */ new WeakMap();
let zr;
function wl(n, i = !1, a = zr) {
  if (a) {
    let u = To.get(a);
    u || To.set(a, u = []), u.push(n);
  }
}
function xl(n, i, a = at) {
  const { immediate: u, deep: l, once: d, scheduler: g, augmentJob: T, call: N } = a, $ = (de) => l ? de : En(de) || l === !1 || l === 0 ? pr(de, 1) : pr(de);
  let j, L, z, ie, pe = !1, ne = !1;
  if (Kt(n) ? (L = () => n.value, pe = En(n)) : Qi(n) ? (L = () => $(n), pe = !0) : Ke(n) ? (ne = !0, pe = n.some((de) => Qi(de) || En(de)), L = () => n.map((de) => {
    if (Kt(de))
      return de.value;
    if (Qi(de))
      return $(de);
    if (Be(de))
      return N ? N(de, 2) : de();
  })) : Be(n) ? i ? L = N ? () => N(n, 2) : n : L = () => {
    if (z) {
      ar();
      try {
        z();
      } finally {
        ur();
      }
    }
    const de = zr;
    zr = j;
    try {
      return N ? N(n, 3, [ie]) : n(ie);
    } finally {
      zr = de;
    }
  } : L = Pn, i && l) {
    const de = L, qe = l === !0 ? 1 / 0 : l;
    L = () => pr(de(), qe);
  }
  const he = Xc(), ve = () => {
    j.stop(), he && he.active && Hs(he.effects, j);
  };
  if (d && i) {
    const de = i;
    i = (...qe) => {
      de(...qe), ve();
    };
  }
  let Ce = ne ? new Array(n.length).fill(mo) : mo;
  const Fe = (de) => {
    if (!(!(j.flags & 1) || !j.dirty && !de))
      if (i) {
        const qe = j.run();
        if (l || pe || (ne ? qe.some((re, te) => mr(re, Ce[te])) : mr(qe, Ce))) {
          z && z();
          const re = zr;
          zr = j;
          try {
            const te = [
              qe,
              // pass undefined as the old value when it's changed for the first time
              Ce === mo ? void 0 : ne && Ce[0] === mo ? [] : Ce,
              ie
            ];
            Ce = qe, N ? N(i, 3, te) : (
              // @ts-expect-error
              i(...te)
            );
          } finally {
            zr = re;
          }
        }
      } else
        j.run();
  };
  return T && T(Fe), j = new vu(L), j.scheduler = g ? () => g(Fe, !1) : Fe, ie = (de) => wl(de, !1, j), z = j.onStop = () => {
    const de = To.get(j);
    if (de) {
      if (N)
        N(de, 4);
      else
        for (const qe of de) qe();
      To.delete(j);
    }
  }, i ? u ? Fe(!0) : Ce = j.run() : g ? g(Fe.bind(null, !0), !0) : j.run(), ve.pause = j.pause.bind(j), ve.resume = j.resume.bind(j), ve.stop = ve, ve;
}
function pr(n, i = 1 / 0, a) {
  if (i <= 0 || !bt(n) || n.__v_skip || (a = a || /* @__PURE__ */ new Set(), a.has(n)))
    return n;
  if (a.add(n), i--, Kt(n))
    pr(n.value, i, a);
  else if (Ke(n))
    for (let u = 0; u < n.length; u++)
      pr(n[u], i, a);
  else if (jc(n) || Hi(n))
    n.forEach((u) => {
      pr(u, i, a);
    });
  else if (Mc(n)) {
    for (const u in n)
      pr(n[u], i, a);
    for (const u of Object.getOwnPropertySymbols(n))
      Object.prototype.propertyIsEnumerable.call(n, u) && pr(n[u], i, a);
  }
  return n;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function uo(n, i, a, u) {
  try {
    return u ? n(...u) : n();
  } catch (l) {
    Ko(l, i, a);
  }
}
function Dn(n, i, a, u) {
  if (Be(n)) {
    const l = uo(n, i, a, u);
    return l && hu(l) && l.catch((d) => {
      Ko(d, i, a);
    }), l;
  }
  if (Ke(n)) {
    const l = [];
    for (let d = 0; d < n.length; d++)
      l.push(Dn(n[d], i, a, u));
    return l;
  }
}
function Ko(n, i, a, u = !0) {
  const l = i ? i.vnode : null, { errorHandler: d, throwUnhandledErrorInProduction: g } = i && i.appContext.config || at;
  if (i) {
    let T = i.parent;
    const N = i.proxy, $ = `https://vuejs.org/error-reference/#runtime-${a}`;
    for (; T; ) {
      const j = T.ec;
      if (j) {
        for (let L = 0; L < j.length; L++)
          if (j[L](n, N, $) === !1)
            return;
      }
      T = T.parent;
    }
    if (d) {
      ar(), uo(d, null, 10, [
        n,
        N,
        $
      ]), ur();
      return;
    }
  }
  Sl(n, a, l, u, g);
}
function Sl(n, i, a, u = !0, l = !1) {
  if (l)
    throw n;
  console.error(n);
}
const Jt = [];
let In = -1;
const oi = [];
let lr = null, ri = 0;
const ku = /* @__PURE__ */ Promise.resolve();
let Co = null;
function El(n) {
  const i = Co || ku;
  return n ? i.then(this ? n.bind(this) : n) : i;
}
function Tl(n) {
  let i = In + 1, a = Jt.length;
  for (; i < a; ) {
    const u = i + a >>> 1, l = Jt[u], d = io(l);
    d < n || d === n && l.flags & 2 ? i = u + 1 : a = u;
  }
  return i;
}
function oa(n) {
  if (!(n.flags & 1)) {
    const i = io(n), a = Jt[Jt.length - 1];
    !a || // fast path when the job id is larger than the tail
    !(n.flags & 2) && i >= io(a) ? Jt.push(n) : Jt.splice(Tl(i), 0, n), n.flags |= 1, ju();
  }
}
function ju() {
  Co || (Co = ku.then(Ku));
}
function Cl(n) {
  Ke(n) ? oi.push(...n) : lr && n.id === -1 ? lr.splice(ri + 1, 0, n) : n.flags & 1 || (oi.push(n), n.flags |= 1), ju();
}
function wa(n, i, a = In + 1) {
  for (; a < Jt.length; a++) {
    const u = Jt[a];
    if (u && u.flags & 2) {
      if (n && u.id !== n.uid)
        continue;
      Jt.splice(a, 1), a--, u.flags & 4 && (u.flags &= -2), u(), u.flags & 4 || (u.flags &= -2);
    }
  }
}
function Fu(n) {
  if (oi.length) {
    const i = [...new Set(oi)].sort(
      (a, u) => io(a) - io(u)
    );
    if (oi.length = 0, lr) {
      lr.push(...i);
      return;
    }
    for (lr = i, ri = 0; ri < lr.length; ri++) {
      const a = lr[ri];
      a.flags & 4 && (a.flags &= -2), a.flags & 8 || a(), a.flags &= -2;
    }
    lr = null, ri = 0;
  }
}
const io = (n) => n.id == null ? n.flags & 2 ? -1 : 1 / 0 : n.id;
function Ku(n) {
  try {
    for (In = 0; In < Jt.length; In++) {
      const i = Jt[In];
      i && !(i.flags & 8) && (i.flags & 4 && (i.flags &= -2), uo(
        i,
        i.i,
        i.i ? 15 : 14
      ), i.flags & 4 || (i.flags &= -2));
    }
  } finally {
    for (; In < Jt.length; In++) {
      const i = Jt[In];
      i && (i.flags &= -2);
    }
    In = -1, Jt.length = 0, Fu(), Co = null, (Jt.length || oi.length) && Ku();
  }
}
let Nn = null, Mu = null;
function Ao(n) {
  const i = Nn;
  return Nn = n, Mu = n && n.type.__scopeId || null, i;
}
function Al(n, i = Nn, a) {
  if (!i || n._n)
    return n;
  const u = (...l) => {
    u._d && Na(-1);
    const d = Ao(i);
    let g;
    try {
      g = n(...l);
    } finally {
      Ao(d), u._d && Na(1);
    }
    return g;
  };
  return u._n = !0, u._c = !0, u._d = !0, u;
}
function Xr(n, i, a, u) {
  const l = n.dirs, d = i && i.dirs;
  for (let g = 0; g < l.length; g++) {
    const T = l[g];
    d && (T.oldValue = d[g].value);
    let N = T.dir[u];
    N && (ar(), Dn(N, a, 8, [
      n.el,
      T,
      n,
      i
    ]), ur());
  }
}
const Il = Symbol("_vte"), Ol = (n) => n.__isTeleport;
function sa(n, i) {
  n.shapeFlag & 6 && n.component ? (n.transition = i, sa(n.component.subTree, i)) : n.shapeFlag & 128 ? (n.ssContent.transition = i.clone(n.ssContent), n.ssFallback.transition = i.clone(n.ssFallback)) : n.transition = i;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Bu(n, i) {
  return Be(n) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Mt({ name: n.name }, i, { setup: n })
  ) : n;
}
function qu(n) {
  n.ids = [n.ids[0] + n.ids[2]++ + "-", 0, 0];
}
function Ji(n, i, a, u, l = !1) {
  if (Ke(n)) {
    n.forEach(
      (pe, ne) => Ji(
        pe,
        i && (Ke(i) ? i[ne] : i),
        a,
        u,
        l
      )
    );
    return;
  }
  if (Zi(u) && !l) {
    u.shapeFlag & 512 && u.type.__asyncResolved && u.component.subTree.component && Ji(n, i, a, u.component.subTree);
    return;
  }
  const d = u.shapeFlag & 4 ? da(u.component) : u.el, g = l ? null : d, { i: T, r: N } = n, $ = i && i.r, j = T.refs === at ? T.refs = {} : T.refs, L = T.setupState, z = Je(L), ie = L === at ? () => !1 : (pe) => Ze(z, pe);
  if ($ != null && $ !== N && (At($) ? (j[$] = null, ie($) && (L[$] = null)) : Kt($) && ($.value = null)), Be(N))
    uo(N, T, 12, [g, j]);
  else {
    const pe = At(N), ne = Kt(N);
    if (pe || ne) {
      const he = () => {
        if (n.f) {
          const ve = pe ? ie(N) ? L[N] : j[N] : N.value;
          l ? Ke(ve) && Hs(ve, d) : Ke(ve) ? ve.includes(d) || ve.push(d) : pe ? (j[N] = [d], ie(N) && (L[N] = j[N])) : (N.value = [d], n.k && (j[n.k] = N.value));
        } else pe ? (j[N] = g, ie(N) && (L[N] = g)) : ne && (N.value = g, n.k && (j[n.k] = g));
      };
      g ? (he.id = -1, fn(he, a)) : he();
    }
  }
}
Fo().requestIdleCallback;
Fo().cancelIdleCallback;
const Zi = (n) => !!n.type.__asyncLoader, Lu = (n) => n.type.__isKeepAlive;
function Nl(n, i) {
  $u(n, "a", i);
}
function Pl(n, i) {
  $u(n, "da", i);
}
function $u(n, i, a = Zt) {
  const u = n.__wdc || (n.__wdc = () => {
    let l = a;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return n();
  });
  if (Mo(i, u, a), a) {
    let l = a.parent;
    for (; l && l.parent; )
      Lu(l.parent.vnode) && Dl(u, i, a, l), l = l.parent;
  }
}
function Dl(n, i, a, u) {
  const l = Mo(
    i,
    n,
    u,
    !0
    /* prepend */
  );
  aa(() => {
    Hs(u[i], l);
  }, a);
}
function Mo(n, i, a = Zt, u = !1) {
  if (a) {
    const l = a[n] || (a[n] = []), d = i.__weh || (i.__weh = (...g) => {
      ar();
      const T = co(a), N = Dn(i, a, n, g);
      return T(), ur(), N;
    });
    return u ? l.unshift(d) : l.push(d), d;
  }
}
const cr = (n) => (i, a = Zt) => {
  (!so || n === "sp") && Mo(n, (...u) => i(...u), a);
}, Rl = cr("bm"), Io = cr("m"), kl = cr(
  "bu"
), jl = cr("u"), Fl = cr(
  "bum"
), aa = cr("um"), Kl = cr(
  "sp"
), Ml = cr("rtg"), Bl = cr("rtc");
function ql(n, i = Zt) {
  Mo("ec", n, i);
}
const Ll = Symbol.for("v-ndc"), Ps = (n) => n ? lc(n) ? da(n) : Ps(n.parent) : null, eo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Mt(/* @__PURE__ */ Object.create(null), {
    $: (n) => n,
    $el: (n) => n.vnode.el,
    $data: (n) => n.data,
    $props: (n) => n.props,
    $attrs: (n) => n.attrs,
    $slots: (n) => n.slots,
    $refs: (n) => n.refs,
    $parent: (n) => Ps(n.parent),
    $root: (n) => Ps(n.root),
    $host: (n) => n.ce,
    $emit: (n) => n.emit,
    $options: (n) => Vu(n),
    $forceUpdate: (n) => n.f || (n.f = () => {
      oa(n.update);
    }),
    $nextTick: (n) => n.n || (n.n = El.bind(n.proxy)),
    $watch: (n) => ff.bind(n)
  })
), gs = (n, i) => n !== at && !n.__isScriptSetup && Ze(n, i), $l = {
  get({ _: n }, i) {
    if (i === "__v_skip")
      return !0;
    const { ctx: a, setupState: u, data: l, props: d, accessCache: g, type: T, appContext: N } = n;
    let $;
    if (i[0] !== "$") {
      const ie = g[i];
      if (ie !== void 0)
        switch (ie) {
          case 1:
            return u[i];
          case 2:
            return l[i];
          case 4:
            return a[i];
          case 3:
            return d[i];
        }
      else {
        if (gs(u, i))
          return g[i] = 1, u[i];
        if (l !== at && Ze(l, i))
          return g[i] = 2, l[i];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          ($ = n.propsOptions[0]) && Ze($, i)
        )
          return g[i] = 3, d[i];
        if (a !== at && Ze(a, i))
          return g[i] = 4, a[i];
        Ds && (g[i] = 0);
      }
    }
    const j = eo[i];
    let L, z;
    if (j)
      return i === "$attrs" && Ft(n.attrs, "get", ""), j(n);
    if (
      // css module (injected by vue-loader)
      (L = T.__cssModules) && (L = L[i])
    )
      return L;
    if (a !== at && Ze(a, i))
      return g[i] = 4, a[i];
    if (
      // global properties
      z = N.config.globalProperties, Ze(z, i)
    )
      return z[i];
  },
  set({ _: n }, i, a) {
    const { data: u, setupState: l, ctx: d } = n;
    return gs(l, i) ? (l[i] = a, !0) : u !== at && Ze(u, i) ? (u[i] = a, !0) : Ze(n.props, i) || i[0] === "$" && i.slice(1) in n ? !1 : (d[i] = a, !0);
  },
  has({
    _: { data: n, setupState: i, accessCache: a, ctx: u, appContext: l, propsOptions: d }
  }, g) {
    let T;
    return !!a[g] || n !== at && Ze(n, g) || gs(i, g) || (T = d[0]) && Ze(T, g) || Ze(u, g) || Ze(eo, g) || Ze(l.config.globalProperties, g);
  },
  defineProperty(n, i, a) {
    return a.get != null ? n._.accessCache[i] = 0 : Ze(a, "value") && this.set(n, i, a.value, null), Reflect.defineProperty(n, i, a);
  }
};
function xa(n) {
  return Ke(n) ? n.reduce(
    (i, a) => (i[a] = null, i),
    {}
  ) : n;
}
let Ds = !0;
function Ul(n) {
  const i = Vu(n), a = n.proxy, u = n.ctx;
  Ds = !1, i.beforeCreate && Sa(i.beforeCreate, n, "bc");
  const {
    // state
    data: l,
    computed: d,
    methods: g,
    watch: T,
    provide: N,
    inject: $,
    // lifecycle
    created: j,
    beforeMount: L,
    mounted: z,
    beforeUpdate: ie,
    updated: pe,
    activated: ne,
    deactivated: he,
    beforeDestroy: ve,
    beforeUnmount: Ce,
    destroyed: Fe,
    unmounted: de,
    render: qe,
    renderTracked: re,
    renderTriggered: te,
    errorCaptured: Te,
    serverPrefetch: K,
    // public API
    expose: ut,
    inheritAttrs: ft,
    // assets
    components: ke,
    directives: ze,
    filters: jt
  } = i;
  if ($ && Vl($, u, null), g)
    for (const xe in g) {
      const Ne = g[xe];
      Be(Ne) && (u[xe] = Ne.bind(a));
    }
  if (l) {
    const xe = l.call(a, a);
    bt(xe) && (n.data = na(xe));
  }
  if (Ds = !0, d)
    for (const xe in d) {
      const Ne = d[xe], nt = Be(Ne) ? Ne.bind(a, a) : Be(Ne.get) ? Ne.get.bind(a, a) : Pn, tt = !Be(Ne) && Be(Ne.set) ? Ne.set.bind(a) : Pn, lt = kf({
        get: nt,
        set: tt
      });
      Object.defineProperty(u, xe, {
        enumerable: !0,
        configurable: !0,
        get: () => lt.value,
        set: (Tt) => lt.value = Tt
      });
    }
  if (T)
    for (const xe in T)
      Uu(T[xe], u, a, xe);
  if (N) {
    const xe = Be(N) ? N.call(a) : N;
    Reflect.ownKeys(xe).forEach((Ne) => {
      Ql(Ne, xe[Ne]);
    });
  }
  j && Sa(j, n, "c");
  function et(xe, Ne) {
    Ke(Ne) ? Ne.forEach((nt) => xe(nt.bind(a))) : Ne && xe(Ne.bind(a));
  }
  if (et(Rl, L), et(Io, z), et(kl, ie), et(jl, pe), et(Nl, ne), et(Pl, he), et(ql, Te), et(Bl, re), et(Ml, te), et(Fl, Ce), et(aa, de), et(Kl, K), Ke(ut))
    if (ut.length) {
      const xe = n.exposed || (n.exposed = {});
      ut.forEach((Ne) => {
        Object.defineProperty(xe, Ne, {
          get: () => a[Ne],
          set: (nt) => a[Ne] = nt
        });
      });
    } else n.exposed || (n.exposed = {});
  qe && n.render === Pn && (n.render = qe), ft != null && (n.inheritAttrs = ft), ke && (n.components = ke), ze && (n.directives = ze), K && qu(n);
}
function Vl(n, i, a = Pn) {
  Ke(n) && (n = Rs(n));
  for (const u in n) {
    const l = n[u];
    let d;
    bt(l) ? "default" in l ? d = bo(
      l.from || u,
      l.default,
      !0
    ) : d = bo(l.from || u) : d = bo(l), Kt(d) ? Object.defineProperty(i, u, {
      enumerable: !0,
      configurable: !0,
      get: () => d.value,
      set: (g) => d.value = g
    }) : i[u] = d;
  }
}
function Sa(n, i, a) {
  Dn(
    Ke(n) ? n.map((u) => u.bind(i.proxy)) : n.bind(i.proxy),
    i,
    a
  );
}
function Uu(n, i, a, u) {
  let l = u.includes(".") ? nc(a, u) : () => a[u];
  if (At(n)) {
    const d = i[n];
    Be(d) && _o(l, d);
  } else if (Be(n))
    _o(l, n.bind(a));
  else if (bt(n))
    if (Ke(n))
      n.forEach((d) => Uu(d, i, a, u));
    else {
      const d = Be(n.handler) ? n.handler.bind(a) : i[n.handler];
      Be(d) && _o(l, d, n);
    }
}
function Vu(n) {
  const i = n.type, { mixins: a, extends: u } = i, {
    mixins: l,
    optionsCache: d,
    config: { optionMergeStrategies: g }
  } = n.appContext, T = d.get(i);
  let N;
  return T ? N = T : !l.length && !a && !u ? N = i : (N = {}, l.length && l.forEach(
    ($) => Oo(N, $, g, !0)
  ), Oo(N, i, g)), bt(i) && d.set(i, N), N;
}
function Oo(n, i, a, u = !1) {
  const { mixins: l, extends: d } = i;
  d && Oo(n, d, a, !0), l && l.forEach(
    (g) => Oo(n, g, a, !0)
  );
  for (const g in i)
    if (!(u && g === "expose")) {
      const T = Gl[g] || a && a[g];
      n[g] = T ? T(n[g], i[g]) : i[g];
    }
  return n;
}
const Gl = {
  data: Ea,
  props: Ta,
  emits: Ta,
  // objects
  methods: Gi,
  computed: Gi,
  // lifecycle
  beforeCreate: Xt,
  created: Xt,
  beforeMount: Xt,
  mounted: Xt,
  beforeUpdate: Xt,
  updated: Xt,
  beforeDestroy: Xt,
  beforeUnmount: Xt,
  destroyed: Xt,
  unmounted: Xt,
  activated: Xt,
  deactivated: Xt,
  errorCaptured: Xt,
  serverPrefetch: Xt,
  // assets
  components: Gi,
  directives: Gi,
  // watch
  watch: Wl,
  // provide / inject
  provide: Ea,
  inject: Hl
};
function Ea(n, i) {
  return i ? n ? function() {
    return Mt(
      Be(n) ? n.call(this, this) : n,
      Be(i) ? i.call(this, this) : i
    );
  } : i : n;
}
function Hl(n, i) {
  return Gi(Rs(n), Rs(i));
}
function Rs(n) {
  if (Ke(n)) {
    const i = {};
    for (let a = 0; a < n.length; a++)
      i[n[a]] = n[a];
    return i;
  }
  return n;
}
function Xt(n, i) {
  return n ? [...new Set([].concat(n, i))] : i;
}
function Gi(n, i) {
  return n ? Mt(/* @__PURE__ */ Object.create(null), n, i) : i;
}
function Ta(n, i) {
  return n ? Ke(n) && Ke(i) ? [.../* @__PURE__ */ new Set([...n, ...i])] : Mt(
    /* @__PURE__ */ Object.create(null),
    xa(n),
    xa(i ?? {})
  ) : i;
}
function Wl(n, i) {
  if (!n) return i;
  if (!i) return n;
  const a = Mt(/* @__PURE__ */ Object.create(null), n);
  for (const u in i)
    a[u] = Xt(n[u], i[u]);
  return a;
}
function Gu() {
  return {
    app: null,
    config: {
      isNativeTag: Rc,
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
function Xl(n, i) {
  return function(u, l = null) {
    Be(u) || (u = Mt({}, u)), l != null && !bt(l) && (l = null);
    const d = Gu(), g = /* @__PURE__ */ new WeakSet(), T = [];
    let N = !1;
    const $ = d.app = {
      _uid: Yl++,
      _component: u,
      _props: l,
      _container: null,
      _context: d,
      _instance: null,
      version: jf,
      get config() {
        return d.config;
      },
      set config(j) {
      },
      use(j, ...L) {
        return g.has(j) || (j && Be(j.install) ? (g.add(j), j.install($, ...L)) : Be(j) && (g.add(j), j($, ...L))), $;
      },
      mixin(j) {
        return d.mixins.includes(j) || d.mixins.push(j), $;
      },
      component(j, L) {
        return L ? (d.components[j] = L, $) : d.components[j];
      },
      directive(j, L) {
        return L ? (d.directives[j] = L, $) : d.directives[j];
      },
      mount(j, L, z) {
        if (!N) {
          const ie = $._ceVNode || yr(u, l);
          return ie.appContext = d, z === !0 ? z = "svg" : z === !1 && (z = void 0), n(ie, j, z), N = !0, $._container = j, j.__vue_app__ = $, da(ie.component);
        }
      },
      onUnmount(j) {
        T.push(j);
      },
      unmount() {
        N && (Dn(
          T,
          $._instance,
          16
        ), n(null, $._container), delete $._container.__vue_app__);
      },
      provide(j, L) {
        return d.provides[j] = L, $;
      },
      runWithContext(j) {
        const L = si;
        si = $;
        try {
          return j();
        } finally {
          si = L;
        }
      }
    };
    return $;
  };
}
let si = null;
function Ql(n, i) {
  if (Zt) {
    let a = Zt.provides;
    const u = Zt.parent && Zt.parent.provides;
    u === a && (a = Zt.provides = Object.create(u)), a[n] = i;
  }
}
function bo(n, i, a = !1) {
  const u = Zt || Nn;
  if (u || si) {
    let l = si ? si._context.provides : u ? u.parent == null || u.ce ? u.vnode.appContext && u.vnode.appContext.provides : u.parent.provides : void 0;
    if (l && n in l)
      return l[n];
    if (arguments.length > 1)
      return a && Be(i) ? i.call(u && u.proxy) : i;
  }
}
const Hu = {}, Wu = () => Object.create(Hu), Yu = (n) => Object.getPrototypeOf(n) === Hu;
function zl(n, i, a, u = !1) {
  const l = {}, d = Wu();
  n.propsDefaults = /* @__PURE__ */ Object.create(null), Xu(n, i, l, d);
  for (const g in n.propsOptions[0])
    g in l || (l[g] = void 0);
  a ? n.props = u ? l : hl(l) : n.type.props ? n.props = l : n.props = d, n.attrs = d;
}
function Jl(n, i, a, u) {
  const {
    props: l,
    attrs: d,
    vnode: { patchFlag: g }
  } = n, T = Je(l), [N] = n.propsOptions;
  let $ = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (u || g > 0) && !(g & 16)
  ) {
    if (g & 8) {
      const j = n.vnode.dynamicProps;
      for (let L = 0; L < j.length; L++) {
        let z = j[L];
        if (Bo(n.emitsOptions, z))
          continue;
        const ie = i[z];
        if (N)
          if (Ze(d, z))
            ie !== d[z] && (d[z] = ie, $ = !0);
          else {
            const pe = vr(z);
            l[pe] = ks(
              N,
              T,
              pe,
              ie,
              n,
              !1
            );
          }
        else
          ie !== d[z] && (d[z] = ie, $ = !0);
      }
    }
  } else {
    Xu(n, i, l, d) && ($ = !0);
    let j;
    for (const L in T)
      (!i || // for camelCase
      !Ze(i, L) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((j = ti(L)) === L || !Ze(i, j))) && (N ? a && // for camelCase
      (a[L] !== void 0 || // for kebab-case
      a[j] !== void 0) && (l[L] = ks(
        N,
        T,
        L,
        void 0,
        n,
        !0
      )) : delete l[L]);
    if (d !== T)
      for (const L in d)
        (!i || !Ze(i, L)) && (delete d[L], $ = !0);
  }
  $ && sr(n.attrs, "set", "");
}
function Xu(n, i, a, u) {
  const [l, d] = n.propsOptions;
  let g = !1, T;
  if (i)
    for (let N in i) {
      if (Wi(N))
        continue;
      const $ = i[N];
      let j;
      l && Ze(l, j = vr(N)) ? !d || !d.includes(j) ? a[j] = $ : (T || (T = {}))[j] = $ : Bo(n.emitsOptions, N) || (!(N in u) || $ !== u[N]) && (u[N] = $, g = !0);
    }
  if (d) {
    const N = Je(a), $ = T || at;
    for (let j = 0; j < d.length; j++) {
      const L = d[j];
      a[L] = ks(
        l,
        N,
        L,
        $[L],
        n,
        !Ze($, L)
      );
    }
  }
  return g;
}
function ks(n, i, a, u, l, d) {
  const g = n[a];
  if (g != null) {
    const T = Ze(g, "default");
    if (T && u === void 0) {
      const N = g.default;
      if (g.type !== Function && !g.skipFactory && Be(N)) {
        const { propsDefaults: $ } = l;
        if (a in $)
          u = $[a];
        else {
          const j = co(l);
          u = $[a] = N.call(
            null,
            i
          ), j();
        }
      } else
        u = N;
      l.ce && l.ce._setProp(a, u);
    }
    g[
      0
      /* shouldCast */
    ] && (d && !T ? u = !1 : g[
      1
      /* shouldCastTrue */
    ] && (u === "" || u === ti(a)) && (u = !0));
  }
  return u;
}
const Zl = /* @__PURE__ */ new WeakMap();
function Qu(n, i, a = !1) {
  const u = a ? Zl : i.propsCache, l = u.get(n);
  if (l)
    return l;
  const d = n.props, g = {}, T = [];
  let N = !1;
  if (!Be(n)) {
    const j = (L) => {
      N = !0;
      const [z, ie] = Qu(L, i, !0);
      Mt(g, z), ie && T.push(...ie);
    };
    !a && i.mixins.length && i.mixins.forEach(j), n.extends && j(n.extends), n.mixins && n.mixins.forEach(j);
  }
  if (!d && !N)
    return bt(n) && u.set(n, ii), ii;
  if (Ke(d))
    for (let j = 0; j < d.length; j++) {
      const L = vr(d[j]);
      Ca(L) && (g[L] = at);
    }
  else if (d)
    for (const j in d) {
      const L = vr(j);
      if (Ca(L)) {
        const z = d[j], ie = g[L] = Ke(z) || Be(z) ? { type: z } : Mt({}, z), pe = ie.type;
        let ne = !1, he = !0;
        if (Ke(pe))
          for (let ve = 0; ve < pe.length; ++ve) {
            const Ce = pe[ve], Fe = Be(Ce) && Ce.name;
            if (Fe === "Boolean") {
              ne = !0;
              break;
            } else Fe === "String" && (he = !1);
          }
        else
          ne = Be(pe) && pe.name === "Boolean";
        ie[
          0
          /* shouldCast */
        ] = ne, ie[
          1
          /* shouldCastTrue */
        ] = he, (ne || Ze(ie, "default")) && T.push(L);
      }
    }
  const $ = [g, T];
  return bt(n) && u.set(n, $), $;
}
function Ca(n) {
  return n[0] !== "$" && !Wi(n);
}
const ua = (n) => n[0] === "_" || n === "$stable", ca = (n) => Ke(n) ? n.map(On) : [On(n)], ef = (n, i, a) => {
  if (i._n)
    return i;
  const u = Al((...l) => ca(i(...l)), a);
  return u._c = !1, u;
}, zu = (n, i, a) => {
  const u = n._ctx;
  for (const l in n) {
    if (ua(l)) continue;
    const d = n[l];
    if (Be(d))
      i[l] = ef(l, d, u);
    else if (d != null) {
      const g = ca(d);
      i[l] = () => g;
    }
  }
}, Ju = (n, i) => {
  const a = ca(i);
  n.slots.default = () => a;
}, Zu = (n, i, a) => {
  for (const u in i)
    (a || !ua(u)) && (n[u] = i[u]);
}, tf = (n, i, a) => {
  const u = n.slots = Wu();
  if (n.vnode.shapeFlag & 32) {
    const l = i.__;
    l && Ts(u, "__", l, !0);
    const d = i._;
    d ? (Zu(u, i, a), a && Ts(u, "_", d, !0)) : zu(i, u);
  } else i && Ju(n, i);
}, nf = (n, i, a) => {
  const { vnode: u, slots: l } = n;
  let d = !0, g = at;
  if (u.shapeFlag & 32) {
    const T = i._;
    T ? a && T === 1 ? d = !1 : Zu(l, i, a) : (d = !i.$stable, zu(i, l)), g = i;
  } else i && (Ju(n, i), g = { default: 1 });
  if (d)
    for (const T in l)
      !ua(T) && g[T] == null && delete l[T];
}, fn = gf;
function rf(n) {
  return of(n);
}
function of(n, i) {
  const a = Fo();
  a.__VUE__ = !0;
  const {
    insert: u,
    remove: l,
    patchProp: d,
    createElement: g,
    createText: T,
    createComment: N,
    setText: $,
    setElementText: j,
    parentNode: L,
    nextSibling: z,
    setScopeId: ie = Pn,
    insertStaticContent: pe
  } = n, ne = (A, k, Y, Q = null, ee = null, J = null, ue = void 0, le = null, oe = !!k.dynamicChildren) => {
    if (A === k)
      return;
    A && !Vi(A, k) && (Q = I(A), Tt(A, ee, J, !0), A = null), k.patchFlag === -2 && (oe = !1, k.dynamicChildren = null);
    const { type: Z, ref: we, shapeFlag: fe } = k;
    switch (Z) {
      case qo:
        he(A, k, Y, Q);
        break;
      case ai:
        ve(A, k, Y, Q);
        break;
      case _s:
        A == null && Ce(k, Y, Q, ue);
        break;
      case or:
        ke(
          A,
          k,
          Y,
          Q,
          ee,
          J,
          ue,
          le,
          oe
        );
        break;
      default:
        fe & 1 ? qe(
          A,
          k,
          Y,
          Q,
          ee,
          J,
          ue,
          le,
          oe
        ) : fe & 6 ? ze(
          A,
          k,
          Y,
          Q,
          ee,
          J,
          ue,
          le,
          oe
        ) : (fe & 64 || fe & 128) && Z.process(
          A,
          k,
          Y,
          Q,
          ee,
          J,
          ue,
          le,
          oe,
          B
        );
    }
    we != null && ee ? Ji(we, A && A.ref, J, k || A, !k) : we == null && A && A.ref != null && Ji(A.ref, null, J, A, !0);
  }, he = (A, k, Y, Q) => {
    if (A == null)
      u(
        k.el = T(k.children),
        Y,
        Q
      );
    else {
      const ee = k.el = A.el;
      k.children !== A.children && $(ee, k.children);
    }
  }, ve = (A, k, Y, Q) => {
    A == null ? u(
      k.el = N(k.children || ""),
      Y,
      Q
    ) : k.el = A.el;
  }, Ce = (A, k, Y, Q) => {
    [A.el, A.anchor] = pe(
      A.children,
      k,
      Y,
      Q,
      A.el,
      A.anchor
    );
  }, Fe = ({ el: A, anchor: k }, Y, Q) => {
    let ee;
    for (; A && A !== k; )
      ee = z(A), u(A, Y, Q), A = ee;
    u(k, Y, Q);
  }, de = ({ el: A, anchor: k }) => {
    let Y;
    for (; A && A !== k; )
      Y = z(A), l(A), A = Y;
    l(k);
  }, qe = (A, k, Y, Q, ee, J, ue, le, oe) => {
    k.type === "svg" ? ue = "svg" : k.type === "math" && (ue = "mathml"), A == null ? re(
      k,
      Y,
      Q,
      ee,
      J,
      ue,
      le,
      oe
    ) : K(
      A,
      k,
      ee,
      J,
      ue,
      le,
      oe
    );
  }, re = (A, k, Y, Q, ee, J, ue, le) => {
    let oe, Z;
    const { props: we, shapeFlag: fe, transition: Se, dirs: Ee } = A;
    if (oe = A.el = g(
      A.type,
      J,
      we && we.is,
      we
    ), fe & 8 ? j(oe, A.children) : fe & 16 && Te(
      A.children,
      oe,
      null,
      Q,
      ee,
      bs(A, J),
      ue,
      le
    ), Ee && Xr(A, null, Q, "created"), te(oe, A, A.scopeId, ue, Q), we) {
      for (const je in we)
        je !== "value" && !Wi(je) && d(oe, je, null, we[je], J, Q);
      "value" in we && d(oe, "value", null, we.value, J), (Z = we.onVnodeBeforeMount) && An(Z, Q, A);
    }
    Ee && Xr(A, null, Q, "beforeMount");
    const Ie = sf(ee, Se);
    Ie && Se.beforeEnter(oe), u(oe, k, Y), ((Z = we && we.onVnodeMounted) || Ie || Ee) && fn(() => {
      Z && An(Z, Q, A), Ie && Se.enter(oe), Ee && Xr(A, null, Q, "mounted");
    }, ee);
  }, te = (A, k, Y, Q, ee) => {
    if (Y && ie(A, Y), Q)
      for (let J = 0; J < Q.length; J++)
        ie(A, Q[J]);
    if (ee) {
      let J = ee.subTree;
      if (k === J || ic(J.type) && (J.ssContent === k || J.ssFallback === k)) {
        const ue = ee.vnode;
        te(
          A,
          ue,
          ue.scopeId,
          ue.slotScopeIds,
          ee.parent
        );
      }
    }
  }, Te = (A, k, Y, Q, ee, J, ue, le, oe = 0) => {
    for (let Z = oe; Z < A.length; Z++) {
      const we = A[Z] = le ? fr(A[Z]) : On(A[Z]);
      ne(
        null,
        we,
        k,
        Y,
        Q,
        ee,
        J,
        ue,
        le
      );
    }
  }, K = (A, k, Y, Q, ee, J, ue) => {
    const le = k.el = A.el;
    let { patchFlag: oe, dynamicChildren: Z, dirs: we } = k;
    oe |= A.patchFlag & 16;
    const fe = A.props || at, Se = k.props || at;
    let Ee;
    if (Y && Qr(Y, !1), (Ee = Se.onVnodeBeforeUpdate) && An(Ee, Y, k, A), we && Xr(k, A, Y, "beforeUpdate"), Y && Qr(Y, !0), (fe.innerHTML && Se.innerHTML == null || fe.textContent && Se.textContent == null) && j(le, ""), Z ? ut(
      A.dynamicChildren,
      Z,
      le,
      Y,
      Q,
      bs(k, ee),
      J
    ) : ue || Ne(
      A,
      k,
      le,
      null,
      Y,
      Q,
      bs(k, ee),
      J,
      !1
    ), oe > 0) {
      if (oe & 16)
        ft(le, fe, Se, Y, ee);
      else if (oe & 2 && fe.class !== Se.class && d(le, "class", null, Se.class, ee), oe & 4 && d(le, "style", fe.style, Se.style, ee), oe & 8) {
        const Ie = k.dynamicProps;
        for (let je = 0; je < Ie.length; je++) {
          const Le = Ie[je], it = fe[Le], dt = Se[Le];
          (dt !== it || Le === "value") && d(le, Le, it, dt, ee, Y);
        }
      }
      oe & 1 && A.children !== k.children && j(le, k.children);
    } else !ue && Z == null && ft(le, fe, Se, Y, ee);
    ((Ee = Se.onVnodeUpdated) || we) && fn(() => {
      Ee && An(Ee, Y, k, A), we && Xr(k, A, Y, "updated");
    }, Q);
  }, ut = (A, k, Y, Q, ee, J, ue) => {
    for (let le = 0; le < k.length; le++) {
      const oe = A[le], Z = k[le], we = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oe.type === or || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Vi(oe, Z) || // - In the case of a component, it could contain anything.
        oe.shapeFlag & 198) ? L(oe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Y
        )
      );
      ne(
        oe,
        Z,
        we,
        null,
        Q,
        ee,
        J,
        ue,
        !0
      );
    }
  }, ft = (A, k, Y, Q, ee) => {
    if (k !== Y) {
      if (k !== at)
        for (const J in k)
          !Wi(J) && !(J in Y) && d(
            A,
            J,
            k[J],
            null,
            ee,
            Q
          );
      for (const J in Y) {
        if (Wi(J)) continue;
        const ue = Y[J], le = k[J];
        ue !== le && J !== "value" && d(A, J, le, ue, ee, Q);
      }
      "value" in Y && d(A, "value", k.value, Y.value, ee);
    }
  }, ke = (A, k, Y, Q, ee, J, ue, le, oe) => {
    const Z = k.el = A ? A.el : T(""), we = k.anchor = A ? A.anchor : T("");
    let { patchFlag: fe, dynamicChildren: Se, slotScopeIds: Ee } = k;
    Ee && (le = le ? le.concat(Ee) : Ee), A == null ? (u(Z, Y, Q), u(we, Y, Q), Te(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      k.children || [],
      Y,
      we,
      ee,
      J,
      ue,
      le,
      oe
    )) : fe > 0 && fe & 64 && Se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    A.dynamicChildren ? (ut(
      A.dynamicChildren,
      Se,
      Y,
      ee,
      J,
      ue,
      le
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (k.key != null || ee && k === ee.subTree) && ec(
      A,
      k,
      !0
      /* shallow */
    )) : Ne(
      A,
      k,
      Y,
      we,
      ee,
      J,
      ue,
      le,
      oe
    );
  }, ze = (A, k, Y, Q, ee, J, ue, le, oe) => {
    k.slotScopeIds = le, A == null ? k.shapeFlag & 512 ? ee.ctx.activate(
      k,
      Y,
      Q,
      ue,
      oe
    ) : jt(
      k,
      Y,
      Q,
      ee,
      J,
      ue,
      oe
    ) : Et(A, k, oe);
  }, jt = (A, k, Y, Q, ee, J, ue) => {
    const le = A.component = If(
      A,
      Q,
      ee
    );
    if (Lu(A) && (le.ctx.renderer = B), Of(le, !1, ue), le.asyncDep) {
      if (ee && ee.registerDep(le, et, ue), !A.el) {
        const oe = le.subTree = yr(ai);
        ve(null, oe, k, Y);
      }
    } else
      et(
        le,
        A,
        k,
        Y,
        ee,
        J,
        ue
      );
  }, Et = (A, k, Y) => {
    const Q = k.component = A.component;
    if (yf(A, k, Y))
      if (Q.asyncDep && !Q.asyncResolved) {
        xe(Q, k, Y);
        return;
      } else
        Q.next = k, Q.update();
    else
      k.el = A.el, Q.vnode = k;
  }, et = (A, k, Y, Q, ee, J, ue) => {
    const le = () => {
      if (A.isMounted) {
        let { next: fe, bu: Se, u: Ee, parent: Ie, vnode: je } = A;
        {
          const ot = tc(A);
          if (ot) {
            fe && (fe.el = je.el, xe(A, fe, ue)), ot.asyncDep.then(() => {
              A.isUnmounted || le();
            });
            return;
          }
        }
        let Le = fe, it;
        Qr(A, !1), fe ? (fe.el = je.el, xe(A, fe, ue)) : fe = je, Se && hs(Se), (it = fe.props && fe.props.onVnodeBeforeUpdate) && An(it, Ie, fe, je), Qr(A, !0);
        const dt = Ia(A), gt = A.subTree;
        A.subTree = dt, ne(
          gt,
          dt,
          // parent may have changed if it's in a teleport
          L(gt.el),
          // anchor may have changed if it's in a fragment
          I(gt),
          A,
          ee,
          J
        ), fe.el = dt.el, Le === null && vf(A, dt.el), Ee && fn(Ee, ee), (it = fe.props && fe.props.onVnodeUpdated) && fn(
          () => An(it, Ie, fe, je),
          ee
        );
      } else {
        let fe;
        const { el: Se, props: Ee } = k, { bm: Ie, m: je, parent: Le, root: it, type: dt } = A, gt = Zi(k);
        Qr(A, !1), Ie && hs(Ie), !gt && (fe = Ee && Ee.onVnodeBeforeMount) && An(fe, Le, k), Qr(A, !0);
        {
          it.ce && // @ts-expect-error _def is private
          it.ce._def.shadowRoot !== !1 && it.ce._injectChildStyle(dt);
          const ot = A.subTree = Ia(A);
          ne(
            null,
            ot,
            Y,
            Q,
            A,
            ee,
            J
          ), k.el = ot.el;
        }
        if (je && fn(je, ee), !gt && (fe = Ee && Ee.onVnodeMounted)) {
          const ot = k;
          fn(
            () => An(fe, Le, ot),
            ee
          );
        }
        (k.shapeFlag & 256 || Le && Zi(Le.vnode) && Le.vnode.shapeFlag & 256) && A.a && fn(A.a, ee), A.isMounted = !0, k = Y = Q = null;
      }
    };
    A.scope.on();
    const oe = A.effect = new vu(le);
    A.scope.off();
    const Z = A.update = oe.run.bind(oe), we = A.job = oe.runIfDirty.bind(oe);
    we.i = A, we.id = A.uid, oe.scheduler = () => oa(we), Qr(A, !0), Z();
  }, xe = (A, k, Y) => {
    k.component = A;
    const Q = A.vnode.props;
    A.vnode = k, A.next = null, Jl(A, k.props, Q, Y), nf(A, k.children, Y), ar(), wa(A), ur();
  }, Ne = (A, k, Y, Q, ee, J, ue, le, oe = !1) => {
    const Z = A && A.children, we = A ? A.shapeFlag : 0, fe = k.children, { patchFlag: Se, shapeFlag: Ee } = k;
    if (Se > 0) {
      if (Se & 128) {
        tt(
          Z,
          fe,
          Y,
          Q,
          ee,
          J,
          ue,
          le,
          oe
        );
        return;
      } else if (Se & 256) {
        nt(
          Z,
          fe,
          Y,
          Q,
          ee,
          J,
          ue,
          le,
          oe
        );
        return;
      }
    }
    Ee & 8 ? (we & 16 && pt(Z, ee, J), fe !== Z && j(Y, fe)) : we & 16 ? Ee & 16 ? tt(
      Z,
      fe,
      Y,
      Q,
      ee,
      J,
      ue,
      le,
      oe
    ) : pt(Z, ee, J, !0) : (we & 8 && j(Y, ""), Ee & 16 && Te(
      fe,
      Y,
      Q,
      ee,
      J,
      ue,
      le,
      oe
    ));
  }, nt = (A, k, Y, Q, ee, J, ue, le, oe) => {
    A = A || ii, k = k || ii;
    const Z = A.length, we = k.length, fe = Math.min(Z, we);
    let Se;
    for (Se = 0; Se < fe; Se++) {
      const Ee = k[Se] = oe ? fr(k[Se]) : On(k[Se]);
      ne(
        A[Se],
        Ee,
        Y,
        null,
        ee,
        J,
        ue,
        le,
        oe
      );
    }
    Z > we ? pt(
      A,
      ee,
      J,
      !0,
      !1,
      fe
    ) : Te(
      k,
      Y,
      Q,
      ee,
      J,
      ue,
      le,
      oe,
      fe
    );
  }, tt = (A, k, Y, Q, ee, J, ue, le, oe) => {
    let Z = 0;
    const we = k.length;
    let fe = A.length - 1, Se = we - 1;
    for (; Z <= fe && Z <= Se; ) {
      const Ee = A[Z], Ie = k[Z] = oe ? fr(k[Z]) : On(k[Z]);
      if (Vi(Ee, Ie))
        ne(
          Ee,
          Ie,
          Y,
          null,
          ee,
          J,
          ue,
          le,
          oe
        );
      else
        break;
      Z++;
    }
    for (; Z <= fe && Z <= Se; ) {
      const Ee = A[fe], Ie = k[Se] = oe ? fr(k[Se]) : On(k[Se]);
      if (Vi(Ee, Ie))
        ne(
          Ee,
          Ie,
          Y,
          null,
          ee,
          J,
          ue,
          le,
          oe
        );
      else
        break;
      fe--, Se--;
    }
    if (Z > fe) {
      if (Z <= Se) {
        const Ee = Se + 1, Ie = Ee < we ? k[Ee].el : Q;
        for (; Z <= Se; )
          ne(
            null,
            k[Z] = oe ? fr(k[Z]) : On(k[Z]),
            Y,
            Ie,
            ee,
            J,
            ue,
            le,
            oe
          ), Z++;
      }
    } else if (Z > Se)
      for (; Z <= fe; )
        Tt(A[Z], ee, J, !0), Z++;
    else {
      const Ee = Z, Ie = Z, je = /* @__PURE__ */ new Map();
      for (Z = Ie; Z <= Se; Z++) {
        const Xe = k[Z] = oe ? fr(k[Z]) : On(k[Z]);
        Xe.key != null && je.set(Xe.key, Z);
      }
      let Le, it = 0;
      const dt = Se - Ie + 1;
      let gt = !1, ot = 0;
      const Lt = new Array(dt);
      for (Z = 0; Z < dt; Z++) Lt[Z] = 0;
      for (Z = Ee; Z <= fe; Z++) {
        const Xe = A[Z];
        if (it >= dt) {
          Tt(Xe, ee, J, !0);
          continue;
        }
        let X;
        if (Xe.key != null)
          X = je.get(Xe.key);
        else
          for (Le = Ie; Le <= Se; Le++)
            if (Lt[Le - Ie] === 0 && Vi(Xe, k[Le])) {
              X = Le;
              break;
            }
        X === void 0 ? Tt(Xe, ee, J, !0) : (Lt[X - Ie] = Z + 1, X >= ot ? ot = X : gt = !0, ne(
          Xe,
          k[X],
          Y,
          null,
          ee,
          J,
          ue,
          le,
          oe
        ), it++);
      }
      const Cn = gt ? af(Lt) : ii;
      for (Le = Cn.length - 1, Z = dt - 1; Z >= 0; Z--) {
        const Xe = Ie + Z, X = k[Xe], tn = Xe + 1 < we ? k[Xe + 1].el : Q;
        Lt[Z] === 0 ? ne(
          null,
          X,
          Y,
          tn,
          ee,
          J,
          ue,
          le,
          oe
        ) : gt && (Le < 0 || Z !== Cn[Le] ? lt(X, Y, tn, 2) : Le--);
      }
    }
  }, lt = (A, k, Y, Q, ee = null) => {
    const { el: J, type: ue, transition: le, children: oe, shapeFlag: Z } = A;
    if (Z & 6) {
      lt(A.component.subTree, k, Y, Q);
      return;
    }
    if (Z & 128) {
      A.suspense.move(k, Y, Q);
      return;
    }
    if (Z & 64) {
      ue.move(A, k, Y, B);
      return;
    }
    if (ue === or) {
      u(J, k, Y);
      for (let fe = 0; fe < oe.length; fe++)
        lt(oe[fe], k, Y, Q);
      u(A.anchor, k, Y);
      return;
    }
    if (ue === _s) {
      Fe(A, k, Y);
      return;
    }
    if (Q !== 2 && Z & 1 && le)
      if (Q === 0)
        le.beforeEnter(J), u(J, k, Y), fn(() => le.enter(J), ee);
      else {
        const { leave: fe, delayLeave: Se, afterLeave: Ee } = le, Ie = () => {
          A.ctx.isUnmounted ? l(J) : u(J, k, Y);
        }, je = () => {
          fe(J, () => {
            Ie(), Ee && Ee();
          });
        };
        Se ? Se(J, Ie, je) : je();
      }
    else
      u(J, k, Y);
  }, Tt = (A, k, Y, Q = !1, ee = !1) => {
    const {
      type: J,
      props: ue,
      ref: le,
      children: oe,
      dynamicChildren: Z,
      shapeFlag: we,
      patchFlag: fe,
      dirs: Se,
      cacheIndex: Ee
    } = A;
    if (fe === -2 && (ee = !1), le != null && (ar(), Ji(le, null, Y, A, !0), ur()), Ee != null && (k.renderCache[Ee] = void 0), we & 256) {
      k.ctx.deactivate(A);
      return;
    }
    const Ie = we & 1 && Se, je = !Zi(A);
    let Le;
    if (je && (Le = ue && ue.onVnodeBeforeUnmount) && An(Le, k, A), we & 6)
      en(A.component, Y, Q);
    else {
      if (we & 128) {
        A.suspense.unmount(Y, Q);
        return;
      }
      Ie && Xr(A, null, k, "beforeUnmount"), we & 64 ? A.type.remove(
        A,
        k,
        Y,
        B,
        Q
      ) : Z && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Z.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (J !== or || fe > 0 && fe & 64) ? pt(
        Z,
        k,
        Y,
        !1,
        !0
      ) : (J === or && fe & 384 || !ee && we & 16) && pt(oe, k, Y), Q && Ct(A);
    }
    (je && (Le = ue && ue.onVnodeUnmounted) || Ie) && fn(() => {
      Le && An(Le, k, A), Ie && Xr(A, null, k, "unmounted");
    }, Y);
  }, Ct = (A) => {
    const { type: k, el: Y, anchor: Q, transition: ee } = A;
    if (k === or) {
      Tn(Y, Q);
      return;
    }
    if (k === _s) {
      de(A);
      return;
    }
    const J = () => {
      l(Y), ee && !ee.persisted && ee.afterLeave && ee.afterLeave();
    };
    if (A.shapeFlag & 1 && ee && !ee.persisted) {
      const { leave: ue, delayLeave: le } = ee, oe = () => ue(Y, J);
      le ? le(A.el, J, oe) : oe();
    } else
      J();
  }, Tn = (A, k) => {
    let Y;
    for (; A !== k; )
      Y = z(A), l(A), A = Y;
    l(k);
  }, en = (A, k, Y) => {
    const {
      bum: Q,
      scope: ee,
      job: J,
      subTree: ue,
      um: le,
      m: oe,
      a: Z,
      parent: we,
      slots: { __: fe }
    } = A;
    Aa(oe), Aa(Z), Q && hs(Q), we && Ke(fe) && fe.forEach((Se) => {
      we.renderCache[Se] = void 0;
    }), ee.stop(), J && (J.flags |= 8, Tt(ue, A, k, Y)), le && fn(le, k), fn(() => {
      A.isUnmounted = !0;
    }, k), k && k.pendingBranch && !k.isUnmounted && A.asyncDep && !A.asyncResolved && A.suspenseId === k.pendingId && (k.deps--, k.deps === 0 && k.resolve());
  }, pt = (A, k, Y, Q = !1, ee = !1, J = 0) => {
    for (let ue = J; ue < A.length; ue++)
      Tt(A[ue], k, Y, Q, ee);
  }, I = (A) => {
    if (A.shapeFlag & 6)
      return I(A.component.subTree);
    if (A.shapeFlag & 128)
      return A.suspense.next();
    const k = z(A.anchor || A.el), Y = k && k[Il];
    return Y ? z(Y) : k;
  };
  let _ = !1;
  const R = (A, k, Y) => {
    A == null ? k._vnode && Tt(k._vnode, null, null, !0) : ne(
      k._vnode || null,
      A,
      k,
      null,
      null,
      null,
      Y
    ), k._vnode = A, _ || (_ = !0, wa(), Fu(), _ = !1);
  }, B = {
    p: ne,
    um: Tt,
    m: lt,
    r: Ct,
    mt: jt,
    mc: Te,
    pc: Ne,
    pbc: ut,
    n: I,
    o: n
  };
  return {
    render: R,
    hydrate: void 0,
    createApp: Xl(R)
  };
}
function bs({ type: n, props: i }, a) {
  return a === "svg" && n === "foreignObject" || a === "mathml" && n === "annotation-xml" && i && i.encoding && i.encoding.includes("html") ? void 0 : a;
}
function Qr({ effect: n, job: i }, a) {
  a ? (n.flags |= 32, i.flags |= 4) : (n.flags &= -33, i.flags &= -5);
}
function sf(n, i) {
  return (!n || n && !n.pendingBranch) && i && !i.persisted;
}
function ec(n, i, a = !1) {
  const u = n.children, l = i.children;
  if (Ke(u) && Ke(l))
    for (let d = 0; d < u.length; d++) {
      const g = u[d];
      let T = l[d];
      T.shapeFlag & 1 && !T.dynamicChildren && ((T.patchFlag <= 0 || T.patchFlag === 32) && (T = l[d] = fr(l[d]), T.el = g.el), !a && T.patchFlag !== -2 && ec(g, T)), T.type === qo && (T.el = g.el), T.type === ai && !T.el && (T.el = g.el);
    }
}
function af(n) {
  const i = n.slice(), a = [0];
  let u, l, d, g, T;
  const N = n.length;
  for (u = 0; u < N; u++) {
    const $ = n[u];
    if ($ !== 0) {
      if (l = a[a.length - 1], n[l] < $) {
        i[u] = l, a.push(u);
        continue;
      }
      for (d = 0, g = a.length - 1; d < g; )
        T = d + g >> 1, n[a[T]] < $ ? d = T + 1 : g = T;
      $ < n[a[d]] && (d > 0 && (i[u] = a[d - 1]), a[d] = u);
    }
  }
  for (d = a.length, g = a[d - 1]; d-- > 0; )
    a[d] = g, g = i[g];
  return a;
}
function tc(n) {
  const i = n.subTree.component;
  if (i)
    return i.asyncDep && !i.asyncResolved ? i : tc(i);
}
function Aa(n) {
  if (n)
    for (let i = 0; i < n.length; i++)
      n[i].flags |= 8;
}
const uf = Symbol.for("v-scx"), cf = () => bo(uf);
function lf(n, i) {
  return la(n, null, i);
}
function _o(n, i, a) {
  return la(n, i, a);
}
function la(n, i, a = at) {
  const { immediate: u, deep: l, flush: d, once: g } = a, T = Mt({}, a), N = i && u || !i && d !== "post";
  let $;
  if (so) {
    if (d === "sync") {
      const ie = cf();
      $ = ie.__watcherHandles || (ie.__watcherHandles = []);
    } else if (!N) {
      const ie = () => {
      };
      return ie.stop = Pn, ie.resume = Pn, ie.pause = Pn, ie;
    }
  }
  const j = Zt;
  T.call = (ie, pe, ne) => Dn(ie, j, pe, ne);
  let L = !1;
  d === "post" ? T.scheduler = (ie) => {
    fn(ie, j && j.suspense);
  } : d !== "sync" && (L = !0, T.scheduler = (ie, pe) => {
    pe ? ie() : oa(ie);
  }), T.augmentJob = (ie) => {
    i && (ie.flags |= 4), L && (ie.flags |= 2, j && (ie.id = j.uid, ie.i = j));
  };
  const z = xl(n, i, T);
  return so && ($ ? $.push(z) : N && z()), z;
}
function ff(n, i, a) {
  const u = this.proxy, l = At(n) ? n.includes(".") ? nc(u, n) : () => u[n] : n.bind(u, u);
  let d;
  Be(i) ? d = i : (d = i.handler, a = i);
  const g = co(this), T = la(l, d.bind(u), a);
  return g(), T;
}
function nc(n, i) {
  const a = i.split(".");
  return () => {
    let u = n;
    for (let l = 0; l < a.length && u; l++)
      u = u[a[l]];
    return u;
  };
}
const df = (n, i) => i === "modelValue" || i === "model-value" ? n.modelModifiers : n[`${i}Modifiers`] || n[`${vr(i)}Modifiers`] || n[`${ti(i)}Modifiers`];
function pf(n, i, ...a) {
  if (n.isUnmounted) return;
  const u = n.vnode.props || at;
  let l = a;
  const d = i.startsWith("update:"), g = d && df(u, i.slice(7));
  g && (g.trim && (l = a.map((j) => At(j) ? j.trim() : j)), g.number && (l = a.map(Lc)));
  let T, N = u[T = ps(i)] || // also try camelCase event handler (#2249)
  u[T = ps(vr(i))];
  !N && d && (N = u[T = ps(ti(i))]), N && Dn(
    N,
    n,
    6,
    l
  );
  const $ = u[T + "Once"];
  if ($) {
    if (!n.emitted)
      n.emitted = {};
    else if (n.emitted[T])
      return;
    n.emitted[T] = !0, Dn(
      $,
      n,
      6,
      l
    );
  }
}
function rc(n, i, a = !1) {
  const u = i.emitsCache, l = u.get(n);
  if (l !== void 0)
    return l;
  const d = n.emits;
  let g = {}, T = !1;
  if (!Be(n)) {
    const N = ($) => {
      const j = rc($, i, !0);
      j && (T = !0, Mt(g, j));
    };
    !a && i.mixins.length && i.mixins.forEach(N), n.extends && N(n.extends), n.mixins && n.mixins.forEach(N);
  }
  return !d && !T ? (bt(n) && u.set(n, null), null) : (Ke(d) ? d.forEach((N) => g[N] = null) : Mt(g, d), bt(n) && u.set(n, g), g);
}
function Bo(n, i) {
  return !n || !Ro(i) ? !1 : (i = i.slice(2).replace(/Once$/, ""), Ze(n, i[0].toLowerCase() + i.slice(1)) || Ze(n, ti(i)) || Ze(n, i));
}
function Ia(n) {
  const {
    type: i,
    vnode: a,
    proxy: u,
    withProxy: l,
    propsOptions: [d],
    slots: g,
    attrs: T,
    emit: N,
    render: $,
    renderCache: j,
    props: L,
    data: z,
    setupState: ie,
    ctx: pe,
    inheritAttrs: ne
  } = n, he = Ao(n);
  let ve, Ce;
  try {
    if (a.shapeFlag & 4) {
      const de = l || u, qe = de;
      ve = On(
        $.call(
          qe,
          de,
          j,
          L,
          ie,
          z,
          pe
        )
      ), Ce = T;
    } else {
      const de = i;
      ve = On(
        de.length > 1 ? de(
          L,
          { attrs: T, slots: g, emit: N }
        ) : de(
          L,
          null
        )
      ), Ce = i.props ? T : hf(T);
    }
  } catch (de) {
    to.length = 0, Ko(de, n, 1), ve = yr(ai);
  }
  let Fe = ve;
  if (Ce && ne !== !1) {
    const de = Object.keys(Ce), { shapeFlag: qe } = Fe;
    de.length && qe & 7 && (d && de.some(Gs) && (Ce = mf(
      Ce,
      d
    )), Fe = ui(Fe, Ce, !1, !0));
  }
  return a.dirs && (Fe = ui(Fe, null, !1, !0), Fe.dirs = Fe.dirs ? Fe.dirs.concat(a.dirs) : a.dirs), a.transition && sa(Fe, a.transition), ve = Fe, Ao(he), ve;
}
const hf = (n) => {
  let i;
  for (const a in n)
    (a === "class" || a === "style" || Ro(a)) && ((i || (i = {}))[a] = n[a]);
  return i;
}, mf = (n, i) => {
  const a = {};
  for (const u in n)
    (!Gs(u) || !(u.slice(9) in i)) && (a[u] = n[u]);
  return a;
};
function yf(n, i, a) {
  const { props: u, children: l, component: d } = n, { props: g, children: T, patchFlag: N } = i, $ = d.emitsOptions;
  if (i.dirs || i.transition)
    return !0;
  if (a && N >= 0) {
    if (N & 1024)
      return !0;
    if (N & 16)
      return u ? Oa(u, g, $) : !!g;
    if (N & 8) {
      const j = i.dynamicProps;
      for (let L = 0; L < j.length; L++) {
        const z = j[L];
        if (g[z] !== u[z] && !Bo($, z))
          return !0;
      }
    }
  } else
    return (l || T) && (!T || !T.$stable) ? !0 : u === g ? !1 : u ? g ? Oa(u, g, $) : !0 : !!g;
  return !1;
}
function Oa(n, i, a) {
  const u = Object.keys(i);
  if (u.length !== Object.keys(n).length)
    return !0;
  for (let l = 0; l < u.length; l++) {
    const d = u[l];
    if (i[d] !== n[d] && !Bo(a, d))
      return !0;
  }
  return !1;
}
function vf({ vnode: n, parent: i }, a) {
  for (; i; ) {
    const u = i.subTree;
    if (u.suspense && u.suspense.activeBranch === n && (u.el = n.el), u === n)
      (n = i.vnode).el = a, i = i.parent;
    else
      break;
  }
}
const ic = (n) => n.__isSuspense;
function gf(n, i) {
  i && i.pendingBranch ? Ke(n) ? i.effects.push(...n) : i.effects.push(n) : Cl(n);
}
const or = Symbol.for("v-fgt"), qo = Symbol.for("v-txt"), ai = Symbol.for("v-cmt"), _s = Symbol.for("v-stc"), to = [];
let dn = null;
function oc(n = !1) {
  to.push(dn = n ? null : []);
}
function bf() {
  to.pop(), dn = to[to.length - 1] || null;
}
let oo = 1;
function Na(n, i = !1) {
  oo += n, n < 0 && dn && i && (dn.hasOnce = !0);
}
function sc(n) {
  return n.dynamicChildren = oo > 0 ? dn || ii : null, bf(), oo > 0 && dn && dn.push(n), n;
}
function _f(n, i, a, u, l, d) {
  return sc(
    cc(
      n,
      i,
      a,
      u,
      l,
      d,
      !0
    )
  );
}
function wf(n, i, a, u, l) {
  return sc(
    yr(
      n,
      i,
      a,
      u,
      l,
      !0
    )
  );
}
function ac(n) {
  return n ? n.__v_isVNode === !0 : !1;
}
function Vi(n, i) {
  return n.type === i.type && n.key === i.key;
}
const uc = ({ key: n }) => n ?? null, wo = ({
  ref: n,
  ref_key: i,
  ref_for: a
}) => (typeof n == "number" && (n = "" + n), n != null ? At(n) || Kt(n) || Be(n) ? { i: Nn, r: n, k: i, f: !!a } : n : null);
function cc(n, i = null, a = null, u = 0, l = null, d = n === or ? 0 : 1, g = !1, T = !1) {
  const N = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n,
    props: i,
    key: i && uc(i),
    ref: i && wo(i),
    scopeId: Mu,
    slotScopeIds: null,
    children: a,
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
    shapeFlag: d,
    patchFlag: u,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: Nn
  };
  return T ? (fa(N, a), d & 128 && n.normalize(N)) : a && (N.shapeFlag |= At(a) ? 8 : 16), oo > 0 && // avoid a block node from tracking itself
  !g && // has current parent block
  dn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (N.patchFlag > 0 || d & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  N.patchFlag !== 32 && dn.push(N), N;
}
const yr = xf;
function xf(n, i = null, a = null, u = 0, l = null, d = !1) {
  if ((!n || n === Ll) && (n = ai), ac(n)) {
    const T = ui(
      n,
      i,
      !0
      /* mergeRef: true */
    );
    return a && fa(T, a), oo > 0 && !d && dn && (T.shapeFlag & 6 ? dn[dn.indexOf(n)] = T : dn.push(T)), T.patchFlag = -2, T;
  }
  if (Rf(n) && (n = n.__vccOpts), i) {
    i = Sf(i);
    let { class: T, style: N } = i;
    T && !At(T) && (i.class = Xs(T)), bt(N) && (ia(N) && !Ke(N) && (N = Mt({}, N)), i.style = Ys(N));
  }
  const g = At(n) ? 1 : ic(n) ? 128 : Ol(n) ? 64 : bt(n) ? 4 : Be(n) ? 2 : 0;
  return cc(
    n,
    i,
    a,
    u,
    l,
    g,
    d,
    !0
  );
}
function Sf(n) {
  return n ? ia(n) || Yu(n) ? Mt({}, n) : n : null;
}
function ui(n, i, a = !1, u = !1) {
  const { props: l, ref: d, patchFlag: g, children: T, transition: N } = n, $ = i ? Tf(l || {}, i) : l, j = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n.type,
    props: $,
    key: $ && uc($),
    ref: i && i.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      a && d ? Ke(d) ? d.concat(wo(i)) : [d, wo(i)] : wo(i)
    ) : d,
    scopeId: n.scopeId,
    slotScopeIds: n.slotScopeIds,
    children: T,
    target: n.target,
    targetStart: n.targetStart,
    targetAnchor: n.targetAnchor,
    staticCount: n.staticCount,
    shapeFlag: n.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: i && n.type !== or ? g === -1 ? 16 : g | 16 : g,
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
    ssContent: n.ssContent && ui(n.ssContent),
    ssFallback: n.ssFallback && ui(n.ssFallback),
    el: n.el,
    anchor: n.anchor,
    ctx: n.ctx,
    ce: n.ce
  };
  return N && u && sa(
    j,
    N.clone(j)
  ), j;
}
function Ef(n = " ", i = 0) {
  return yr(qo, null, n, i);
}
function On(n) {
  return n == null || typeof n == "boolean" ? yr(ai) : Ke(n) ? yr(
    or,
    null,
    // #3666, avoid reference pollution when reusing vnode
    n.slice()
  ) : ac(n) ? fr(n) : yr(qo, null, String(n));
}
function fr(n) {
  return n.el === null && n.patchFlag !== -1 || n.memo ? n : ui(n);
}
function fa(n, i) {
  let a = 0;
  const { shapeFlag: u } = n;
  if (i == null)
    i = null;
  else if (Ke(i))
    a = 16;
  else if (typeof i == "object")
    if (u & 65) {
      const l = i.default;
      l && (l._c && (l._d = !1), fa(n, l()), l._c && (l._d = !0));
      return;
    } else {
      a = 32;
      const l = i._;
      !l && !Yu(i) ? i._ctx = Nn : l === 3 && Nn && (Nn.slots._ === 1 ? i._ = 1 : (i._ = 2, n.patchFlag |= 1024));
    }
  else Be(i) ? (i = { default: i, _ctx: Nn }, a = 32) : (i = String(i), u & 64 ? (a = 16, i = [Ef(i)]) : a = 8);
  n.children = i, n.shapeFlag |= a;
}
function Tf(...n) {
  const i = {};
  for (let a = 0; a < n.length; a++) {
    const u = n[a];
    for (const l in u)
      if (l === "class")
        i.class !== u.class && (i.class = Xs([i.class, u.class]));
      else if (l === "style")
        i.style = Ys([i.style, u.style]);
      else if (Ro(l)) {
        const d = i[l], g = u[l];
        g && d !== g && !(Ke(d) && d.includes(g)) && (i[l] = d ? [].concat(d, g) : g);
      } else l !== "" && (i[l] = u[l]);
  }
  return i;
}
function An(n, i, a, u = null) {
  Dn(n, i, 7, [
    a,
    u
  ]);
}
const Cf = Gu();
let Af = 0;
function If(n, i, a) {
  const u = n.type, l = (i ? i.appContext : n.appContext) || Cf, d = {
    uid: Af++,
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
    scope: new Yc(
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
    propsOptions: Qu(u, l),
    emitsOptions: rc(u, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: at,
    // inheritAttrs
    inheritAttrs: u.inheritAttrs,
    // state
    ctx: at,
    data: at,
    props: at,
    attrs: at,
    slots: at,
    refs: at,
    setupState: at,
    setupContext: null,
    // suspense related
    suspense: a,
    suspenseId: a ? a.pendingId : 0,
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
  return d.ctx = { _: d }, d.root = i ? i.root : d, d.emit = pf.bind(null, d), n.ce && n.ce(d), d;
}
let Zt = null, No, js;
{
  const n = Fo(), i = (a, u) => {
    let l;
    return (l = n[a]) || (l = n[a] = []), l.push(u), (d) => {
      l.length > 1 ? l.forEach((g) => g(d)) : l[0](d);
    };
  };
  No = i(
    "__VUE_INSTANCE_SETTERS__",
    (a) => Zt = a
  ), js = i(
    "__VUE_SSR_SETTERS__",
    (a) => so = a
  );
}
const co = (n) => {
  const i = Zt;
  return No(n), n.scope.on(), () => {
    n.scope.off(), No(i);
  };
}, Pa = () => {
  Zt && Zt.scope.off(), No(null);
};
function lc(n) {
  return n.vnode.shapeFlag & 4;
}
let so = !1;
function Of(n, i = !1, a = !1) {
  i && js(i);
  const { props: u, children: l } = n.vnode, d = lc(n);
  zl(n, u, d, i), tf(n, l, a || i);
  const g = d ? Nf(n, i) : void 0;
  return i && js(!1), g;
}
function Nf(n, i) {
  const a = n.type;
  n.accessCache = /* @__PURE__ */ Object.create(null), n.proxy = new Proxy(n.ctx, $l);
  const { setup: u } = a;
  if (u) {
    ar();
    const l = n.setupContext = u.length > 1 ? Df(n) : null, d = co(n), g = uo(
      u,
      n,
      0,
      [
        n.props,
        l
      ]
    ), T = hu(g);
    if (ur(), d(), (T || n.sp) && !Zi(n) && qu(n), T) {
      if (g.then(Pa, Pa), i)
        return g.then((N) => {
          Da(n, N);
        }).catch((N) => {
          Ko(N, n, 0);
        });
      n.asyncDep = g;
    } else
      Da(n, g);
  } else
    fc(n);
}
function Da(n, i, a) {
  Be(i) ? n.type.__ssrInlineRender ? n.ssrRender = i : n.render = i : bt(i) && (n.setupState = Ru(i)), fc(n);
}
function fc(n, i, a) {
  const u = n.type;
  n.render || (n.render = u.render || Pn);
  {
    const l = co(n);
    ar();
    try {
      Ul(n);
    } finally {
      ur(), l();
    }
  }
}
const Pf = {
  get(n, i) {
    return Ft(n, "get", ""), n[i];
  }
};
function Df(n) {
  const i = (a) => {
    n.exposed = a || {};
  };
  return {
    attrs: new Proxy(n.attrs, Pf),
    slots: n.slots,
    emit: n.emit,
    expose: i
  };
}
function da(n) {
  return n.exposed ? n.exposeProxy || (n.exposeProxy = new Proxy(Ru(ml(n.exposed)), {
    get(i, a) {
      if (a in i)
        return i[a];
      if (a in eo)
        return eo[a](n);
    },
    has(i, a) {
      return a in i || a in eo;
    }
  })) : n.proxy;
}
function Rf(n) {
  return Be(n) && "__vccOpts" in n;
}
const kf = (n, i) => _l(n, i, so), jf = "3.5.17";
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Fs;
const Ra = typeof window < "u" && window.trustedTypes;
if (Ra)
  try {
    Fs = /* @__PURE__ */ Ra.createPolicy("vue", {
      createHTML: (n) => n
    });
  } catch {
  }
const dc = Fs ? (n) => Fs.createHTML(n) : (n) => n, Ff = "http://www.w3.org/2000/svg", Kf = "http://www.w3.org/1998/Math/MathML", ir = typeof document < "u" ? document : null, ka = ir && /* @__PURE__ */ ir.createElement("template"), Mf = {
  insert: (n, i, a) => {
    i.insertBefore(n, a || null);
  },
  remove: (n) => {
    const i = n.parentNode;
    i && i.removeChild(n);
  },
  createElement: (n, i, a, u) => {
    const l = i === "svg" ? ir.createElementNS(Ff, n) : i === "mathml" ? ir.createElementNS(Kf, n) : a ? ir.createElement(n, { is: a }) : ir.createElement(n);
    return n === "select" && u && u.multiple != null && l.setAttribute("multiple", u.multiple), l;
  },
  createText: (n) => ir.createTextNode(n),
  createComment: (n) => ir.createComment(n),
  setText: (n, i) => {
    n.nodeValue = i;
  },
  setElementText: (n, i) => {
    n.textContent = i;
  },
  parentNode: (n) => n.parentNode,
  nextSibling: (n) => n.nextSibling,
  querySelector: (n) => ir.querySelector(n),
  setScopeId(n, i) {
    n.setAttribute(i, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(n, i, a, u, l, d) {
    const g = a ? a.previousSibling : i.lastChild;
    if (l && (l === d || l.nextSibling))
      for (; i.insertBefore(l.cloneNode(!0), a), !(l === d || !(l = l.nextSibling)); )
        ;
    else {
      ka.innerHTML = dc(
        u === "svg" ? `<svg>${n}</svg>` : u === "mathml" ? `<math>${n}</math>` : n
      );
      const T = ka.content;
      if (u === "svg" || u === "mathml") {
        const N = T.firstChild;
        for (; N.firstChild; )
          T.appendChild(N.firstChild);
        T.removeChild(N);
      }
      i.insertBefore(T, a);
    }
    return [
      // first
      g ? g.nextSibling : i.firstChild,
      // last
      a ? a.previousSibling : i.lastChild
    ];
  }
}, Bf = Symbol("_vtc");
function qf(n, i, a) {
  const u = n[Bf];
  u && (i = (i ? [i, ...u] : [...u]).join(" ")), i == null ? n.removeAttribute("class") : a ? n.setAttribute("class", i) : n.className = i;
}
const ja = Symbol("_vod"), Lf = Symbol("_vsh"), $f = Symbol(""), Uf = /(^|;)\s*display\s*:/;
function Vf(n, i, a) {
  const u = n.style, l = At(a);
  let d = !1;
  if (a && !l) {
    if (i)
      if (At(i))
        for (const g of i.split(";")) {
          const T = g.slice(0, g.indexOf(":")).trim();
          a[T] == null && xo(u, T, "");
        }
      else
        for (const g in i)
          a[g] == null && xo(u, g, "");
    for (const g in a)
      g === "display" && (d = !0), xo(u, g, a[g]);
  } else if (l) {
    if (i !== a) {
      const g = u[$f];
      g && (a += ";" + g), u.cssText = a, d = Uf.test(a);
    }
  } else i && n.removeAttribute("style");
  ja in n && (n[ja] = d ? u.display : "", n[Lf] && (u.display = "none"));
}
const Fa = /\s*!important$/;
function xo(n, i, a) {
  if (Ke(a))
    a.forEach((u) => xo(n, i, u));
  else if (a == null && (a = ""), i.startsWith("--"))
    n.setProperty(i, a);
  else {
    const u = Gf(n, i);
    Fa.test(a) ? n.setProperty(
      ti(u),
      a.replace(Fa, ""),
      "important"
    ) : n[u] = a;
  }
}
const Ka = ["Webkit", "Moz", "ms"], ws = {};
function Gf(n, i) {
  const a = ws[i];
  if (a)
    return a;
  let u = vr(i);
  if (u !== "filter" && u in n)
    return ws[i] = u;
  u = mu(u);
  for (let l = 0; l < Ka.length; l++) {
    const d = Ka[l] + u;
    if (d in n)
      return ws[i] = d;
  }
  return i;
}
const Ma = "http://www.w3.org/1999/xlink";
function Ba(n, i, a, u, l, d = Wc(i)) {
  u && i.startsWith("xlink:") ? a == null ? n.removeAttributeNS(Ma, i.slice(6, i.length)) : n.setAttributeNS(Ma, i, a) : a == null || d && !yu(a) ? n.removeAttribute(i) : n.setAttribute(
    i,
    d ? "" : ci(a) ? String(a) : a
  );
}
function qa(n, i, a, u, l) {
  if (i === "innerHTML" || i === "textContent") {
    a != null && (n[i] = i === "innerHTML" ? dc(a) : a);
    return;
  }
  const d = n.tagName;
  if (i === "value" && d !== "PROGRESS" && // custom elements may use _value internally
  !d.includes("-")) {
    const T = d === "OPTION" ? n.getAttribute("value") || "" : n.value, N = a == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      n.type === "checkbox" ? "on" : ""
    ) : String(a);
    (T !== N || !("_value" in n)) && (n.value = N), a == null && n.removeAttribute(i), n._value = a;
    return;
  }
  let g = !1;
  if (a === "" || a == null) {
    const T = typeof n[i];
    T === "boolean" ? a = yu(a) : a == null && T === "string" ? (a = "", g = !0) : T === "number" && (a = 0, g = !0);
  }
  try {
    n[i] = a;
  } catch {
  }
  g && n.removeAttribute(l || i);
}
function Hf(n, i, a, u) {
  n.addEventListener(i, a, u);
}
function Wf(n, i, a, u) {
  n.removeEventListener(i, a, u);
}
const La = Symbol("_vei");
function Yf(n, i, a, u, l = null) {
  const d = n[La] || (n[La] = {}), g = d[i];
  if (u && g)
    g.value = u;
  else {
    const [T, N] = Xf(i);
    if (u) {
      const $ = d[i] = Jf(
        u,
        l
      );
      Hf(n, T, $, N);
    } else g && (Wf(n, T, g, N), d[i] = void 0);
  }
}
const $a = /(?:Once|Passive|Capture)$/;
function Xf(n) {
  let i;
  if ($a.test(n)) {
    i = {};
    let u;
    for (; u = n.match($a); )
      n = n.slice(0, n.length - u[0].length), i[u[0].toLowerCase()] = !0;
  }
  return [n[2] === ":" ? n.slice(3) : ti(n.slice(2)), i];
}
let xs = 0;
const Qf = /* @__PURE__ */ Promise.resolve(), zf = () => xs || (Qf.then(() => xs = 0), xs = Date.now());
function Jf(n, i) {
  const a = (u) => {
    if (!u._vts)
      u._vts = Date.now();
    else if (u._vts <= a.attached)
      return;
    Dn(
      Zf(u, a.value),
      i,
      5,
      [u]
    );
  };
  return a.value = n, a.attached = zf(), a;
}
function Zf(n, i) {
  if (Ke(i)) {
    const a = n.stopImmediatePropagation;
    return n.stopImmediatePropagation = () => {
      a.call(n), n._stopped = !0;
    }, i.map(
      (u) => (l) => !l._stopped && u && u(l)
    );
  } else
    return i;
}
const Ua = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // lowercase letter
n.charCodeAt(2) > 96 && n.charCodeAt(2) < 123, ed = (n, i, a, u, l, d) => {
  const g = l === "svg";
  i === "class" ? qf(n, u, g) : i === "style" ? Vf(n, a, u) : Ro(i) ? Gs(i) || Yf(n, i, a, u, d) : (i[0] === "." ? (i = i.slice(1), !0) : i[0] === "^" ? (i = i.slice(1), !1) : td(n, i, u, g)) ? (qa(n, i, u), !n.tagName.includes("-") && (i === "value" || i === "checked" || i === "selected") && Ba(n, i, u, g, d, i !== "value")) : /* #11081 force set props for possible async custom element */ n._isVueCE && (/[A-Z]/.test(i) || !At(u)) ? qa(n, vr(i), u, d, i) : (i === "true-value" ? n._trueValue = u : i === "false-value" && (n._falseValue = u), Ba(n, i, u, g));
};
function td(n, i, a, u) {
  if (u)
    return !!(i === "innerHTML" || i === "textContent" || i in n && Ua(i) && Be(a));
  if (i === "spellcheck" || i === "draggable" || i === "translate" || i === "autocorrect" || i === "form" || i === "list" && n.tagName === "INPUT" || i === "type" && n.tagName === "TEXTAREA")
    return !1;
  if (i === "width" || i === "height") {
    const l = n.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Ua(i) && At(a) ? !1 : i in n;
}
const nd = /* @__PURE__ */ Mt({ patchProp: ed }, Mf);
let Va;
function rd() {
  return Va || (Va = rf(nd));
}
const id = (...n) => {
  const i = rd().createApp(...n), { mount: a } = i;
  return i.mount = (u) => {
    const l = sd(u);
    if (!l) return;
    const d = i._component;
    !Be(d) && !d.render && !d.template && (d.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const g = a(l, !1, od(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), g;
  }, i;
};
function od(n) {
  if (n instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && n instanceof MathMLElement)
    return "mathml";
}
function sd(n) {
  return At(n) ? document.querySelector(n) : n;
}
var ad = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ud(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function cd(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var i = n.default;
  if (typeof i == "function") {
    var a = function u() {
      var l = !1;
      try {
        l = this instanceof u;
      } catch {
      }
      return l ? Reflect.construct(i, arguments, this.constructor) : i.apply(this, arguments);
    };
    a.prototype = i.prototype;
  } else a = {};
  return Object.defineProperty(a, "__esModule", { value: !0 }), Object.keys(n).forEach(function(u) {
    var l = Object.getOwnPropertyDescriptor(n, u);
    Object.defineProperty(a, u, l.get ? l : {
      enumerable: !0,
      get: function() {
        return n[u];
      }
    });
  }), a;
}
var Ga = {};
const ld = {}, fd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ld
}, Symbol.toStringTag, { value: "Module" })), Ha = /* @__PURE__ */ cd(fd);
var Wa;
function dd() {
  return Wa || (Wa = 1, function(n) {
    (function(i) {
      i.parser = function(I, _) {
        return new u(I, _);
      }, i.SAXParser = u, i.SAXStream = j, i.createStream = $, i.MAX_BUFFER_LENGTH = 64 * 1024;
      var a = [
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
      function u(I, _) {
        if (!(this instanceof u))
          return new u(I, _);
        var R = this;
        d(R), R.q = R.c = "", R.bufferCheckPosition = i.MAX_BUFFER_LENGTH, R.opt = _ || {}, R.opt.lowercase = R.opt.lowercase || R.opt.lowercasetags, R.looseCase = R.opt.lowercase ? "toLowerCase" : "toUpperCase", R.tags = [], R.closed = R.closedRoot = R.sawRoot = !1, R.tag = R.error = null, R.strict = !!I, R.noscript = !!(I || R.opt.noscript), R.state = K.BEGIN, R.strictEntities = R.opt.strictEntities, R.ENTITIES = R.strictEntities ? Object.create(i.XML_ENTITIES) : Object.create(i.ENTITIES), R.attribList = [], R.opt.xmlns && (R.ns = Object.create(ne)), R.opt.unquotedAttributeValues === void 0 && (R.opt.unquotedAttributeValues = !I), R.trackPosition = R.opt.position !== !1, R.trackPosition && (R.position = R.line = R.column = 0), ft(R, "onready");
      }
      Object.create || (Object.create = function(I) {
        function _() {
        }
        _.prototype = I;
        var R = new _();
        return R;
      }), Object.keys || (Object.keys = function(I) {
        var _ = [];
        for (var R in I) I.hasOwnProperty(R) && _.push(R);
        return _;
      });
      function l(I) {
        for (var _ = Math.max(i.MAX_BUFFER_LENGTH, 10), R = 0, B = 0, Me = a.length; B < Me; B++) {
          var A = I[a[B]].length;
          if (A > _)
            switch (a[B]) {
              case "textNode":
                ze(I);
                break;
              case "cdata":
                ke(I, "oncdata", I.cdata), I.cdata = "";
                break;
              case "script":
                ke(I, "onscript", I.script), I.script = "";
                break;
              default:
                Et(I, "Max buffer length exceeded: " + a[B]);
            }
          R = Math.max(R, A);
        }
        var k = i.MAX_BUFFER_LENGTH - R;
        I.bufferCheckPosition = k + I.position;
      }
      function d(I) {
        for (var _ = 0, R = a.length; _ < R; _++)
          I[a[_]] = "";
      }
      function g(I) {
        ze(I), I.cdata !== "" && (ke(I, "oncdata", I.cdata), I.cdata = ""), I.script !== "" && (ke(I, "onscript", I.script), I.script = "");
      }
      u.prototype = {
        end: function() {
          et(this);
        },
        write: pt,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          g(this);
        }
      };
      var T;
      try {
        T = Ha.Stream;
      } catch {
        T = function() {
        };
      }
      T || (T = function() {
      });
      var N = i.EVENTS.filter(function(I) {
        return I !== "error" && I !== "end";
      });
      function $(I, _) {
        return new j(I, _);
      }
      function j(I, _) {
        if (!(this instanceof j))
          return new j(I, _);
        T.apply(this), this._parser = new u(I, _), this.writable = !0, this.readable = !0;
        var R = this;
        this._parser.onend = function() {
          R.emit("end");
        }, this._parser.onerror = function(B) {
          R.emit("error", B), R._parser.error = null;
        }, this._decoder = null, N.forEach(function(B) {
          Object.defineProperty(R, "on" + B, {
            get: function() {
              return R._parser["on" + B];
            },
            set: function(Me) {
              if (!Me)
                return R.removeAllListeners(B), R._parser["on" + B] = Me, Me;
              R.on(B, Me);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      j.prototype = Object.create(T.prototype, {
        constructor: {
          value: j
        }
      }), j.prototype.write = function(I) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(I)) {
          if (!this._decoder) {
            var _ = Ha.StringDecoder;
            this._decoder = new _("utf8");
          }
          I = this._decoder.write(I);
        }
        return this._parser.write(I.toString()), this.emit("data", I), !0;
      }, j.prototype.end = function(I) {
        return I && I.length && this.write(I), this._parser.end(), !0;
      }, j.prototype.on = function(I, _) {
        var R = this;
        return !R._parser["on" + I] && N.indexOf(I) !== -1 && (R._parser["on" + I] = function() {
          var B = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          B.splice(0, 0, I), R.emit.apply(R, B);
        }), T.prototype.on.call(R, I, _);
      };
      var L = "[CDATA[", z = "DOCTYPE", ie = "http://www.w3.org/XML/1998/namespace", pe = "http://www.w3.org/2000/xmlns/", ne = { xml: ie, xmlns: pe }, he = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, ve = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, Ce = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Fe = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function de(I) {
        return I === " " || I === `
` || I === "\r" || I === "	";
      }
      function qe(I) {
        return I === '"' || I === "'";
      }
      function re(I) {
        return I === ">" || de(I);
      }
      function te(I, _) {
        return I.test(_);
      }
      function Te(I, _) {
        return !te(I, _);
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
      }, Object.keys(i.ENTITIES).forEach(function(I) {
        var _ = i.ENTITIES[I], R = typeof _ == "number" ? String.fromCharCode(_) : _;
        i.ENTITIES[I] = R;
      });
      for (var ut in i.STATE)
        i.STATE[i.STATE[ut]] = ut;
      K = i.STATE;
      function ft(I, _, R) {
        I[_] && I[_](R);
      }
      function ke(I, _, R) {
        I.textNode && ze(I), ft(I, _, R);
      }
      function ze(I) {
        I.textNode = jt(I.opt, I.textNode), I.textNode && ft(I, "ontext", I.textNode), I.textNode = "";
      }
      function jt(I, _) {
        return I.trim && (_ = _.trim()), I.normalize && (_ = _.replace(/\s+/g, " ")), _;
      }
      function Et(I, _) {
        return ze(I), I.trackPosition && (_ += `
Line: ` + I.line + `
Column: ` + I.column + `
Char: ` + I.c), _ = new Error(_), I.error = _, ft(I, "onerror", _), I;
      }
      function et(I) {
        return I.sawRoot && !I.closedRoot && xe(I, "Unclosed root tag"), I.state !== K.BEGIN && I.state !== K.BEGIN_WHITESPACE && I.state !== K.TEXT && Et(I, "Unexpected end"), ze(I), I.c = "", I.closed = !0, ft(I, "onend"), u.call(I, I.strict, I.opt), I;
      }
      function xe(I, _) {
        if (typeof I != "object" || !(I instanceof u))
          throw new Error("bad call to strictFail");
        I.strict && Et(I, _);
      }
      function Ne(I) {
        I.strict || (I.tagName = I.tagName[I.looseCase]());
        var _ = I.tags[I.tags.length - 1] || I, R = I.tag = { name: I.tagName, attributes: {} };
        I.opt.xmlns && (R.ns = _.ns), I.attribList.length = 0, ke(I, "onopentagstart", R);
      }
      function nt(I, _) {
        var R = I.indexOf(":"), B = R < 0 ? ["", I] : I.split(":"), Me = B[0], A = B[1];
        return _ && I === "xmlns" && (Me = "xmlns", A = ""), { prefix: Me, local: A };
      }
      function tt(I) {
        if (I.strict || (I.attribName = I.attribName[I.looseCase]()), I.attribList.indexOf(I.attribName) !== -1 || I.tag.attributes.hasOwnProperty(I.attribName)) {
          I.attribName = I.attribValue = "";
          return;
        }
        if (I.opt.xmlns) {
          var _ = nt(I.attribName, !0), R = _.prefix, B = _.local;
          if (R === "xmlns")
            if (B === "xml" && I.attribValue !== ie)
              xe(
                I,
                "xml: prefix must be bound to " + ie + `
Actual: ` + I.attribValue
              );
            else if (B === "xmlns" && I.attribValue !== pe)
              xe(
                I,
                "xmlns: prefix must be bound to " + pe + `
Actual: ` + I.attribValue
              );
            else {
              var Me = I.tag, A = I.tags[I.tags.length - 1] || I;
              Me.ns === A.ns && (Me.ns = Object.create(A.ns)), Me.ns[B] = I.attribValue;
            }
          I.attribList.push([I.attribName, I.attribValue]);
        } else
          I.tag.attributes[I.attribName] = I.attribValue, ke(I, "onattribute", {
            name: I.attribName,
            value: I.attribValue
          });
        I.attribName = I.attribValue = "";
      }
      function lt(I, _) {
        if (I.opt.xmlns) {
          var R = I.tag, B = nt(I.tagName);
          R.prefix = B.prefix, R.local = B.local, R.uri = R.ns[B.prefix] || "", R.prefix && !R.uri && (xe(I, "Unbound namespace prefix: " + JSON.stringify(I.tagName)), R.uri = B.prefix);
          var Me = I.tags[I.tags.length - 1] || I;
          R.ns && Me.ns !== R.ns && Object.keys(R.ns).forEach(function(we) {
            ke(I, "onopennamespace", {
              prefix: we,
              uri: R.ns[we]
            });
          });
          for (var A = 0, k = I.attribList.length; A < k; A++) {
            var Y = I.attribList[A], Q = Y[0], ee = Y[1], J = nt(Q, !0), ue = J.prefix, le = J.local, oe = ue === "" ? "" : R.ns[ue] || "", Z = {
              name: Q,
              value: ee,
              prefix: ue,
              local: le,
              uri: oe
            };
            ue && ue !== "xmlns" && !oe && (xe(I, "Unbound namespace prefix: " + JSON.stringify(ue)), Z.uri = ue), I.tag.attributes[Q] = Z, ke(I, "onattribute", Z);
          }
          I.attribList.length = 0;
        }
        I.tag.isSelfClosing = !!_, I.sawRoot = !0, I.tags.push(I.tag), ke(I, "onopentag", I.tag), _ || (!I.noscript && I.tagName.toLowerCase() === "script" ? I.state = K.SCRIPT : I.state = K.TEXT, I.tag = null, I.tagName = ""), I.attribName = I.attribValue = "", I.attribList.length = 0;
      }
      function Tt(I) {
        if (!I.tagName) {
          xe(I, "Weird empty close tag."), I.textNode += "</>", I.state = K.TEXT;
          return;
        }
        if (I.script) {
          if (I.tagName !== "script") {
            I.script += "</" + I.tagName + ">", I.tagName = "", I.state = K.SCRIPT;
            return;
          }
          ke(I, "onscript", I.script), I.script = "";
        }
        var _ = I.tags.length, R = I.tagName;
        I.strict || (R = R[I.looseCase]());
        for (var B = R; _--; ) {
          var Me = I.tags[_];
          if (Me.name !== B)
            xe(I, "Unexpected close tag");
          else
            break;
        }
        if (_ < 0) {
          xe(I, "Unmatched closing tag: " + I.tagName), I.textNode += "</" + I.tagName + ">", I.state = K.TEXT;
          return;
        }
        I.tagName = R;
        for (var A = I.tags.length; A-- > _; ) {
          var k = I.tag = I.tags.pop();
          I.tagName = I.tag.name, ke(I, "onclosetag", I.tagName);
          var Y = {};
          for (var Q in k.ns)
            Y[Q] = k.ns[Q];
          var ee = I.tags[I.tags.length - 1] || I;
          I.opt.xmlns && k.ns !== ee.ns && Object.keys(k.ns).forEach(function(J) {
            var ue = k.ns[J];
            ke(I, "onclosenamespace", { prefix: J, uri: ue });
          });
        }
        _ === 0 && (I.closedRoot = !0), I.tagName = I.attribValue = I.attribName = "", I.attribList.length = 0, I.state = K.TEXT;
      }
      function Ct(I) {
        var _ = I.entity, R = _.toLowerCase(), B, Me = "";
        return I.ENTITIES[_] ? I.ENTITIES[_] : I.ENTITIES[R] ? I.ENTITIES[R] : (_ = R, _.charAt(0) === "#" && (_.charAt(1) === "x" ? (_ = _.slice(2), B = parseInt(_, 16), Me = B.toString(16)) : (_ = _.slice(1), B = parseInt(_, 10), Me = B.toString(10))), _ = _.replace(/^0+/, ""), isNaN(B) || Me.toLowerCase() !== _ ? (xe(I, "Invalid character entity"), "&" + I.entity + ";") : String.fromCodePoint(B));
      }
      function Tn(I, _) {
        _ === "<" ? (I.state = K.OPEN_WAKA, I.startTagPosition = I.position) : de(_) || (xe(I, "Non-whitespace before first tag."), I.textNode = _, I.state = K.TEXT);
      }
      function en(I, _) {
        var R = "";
        return _ < I.length && (R = I.charAt(_)), R;
      }
      function pt(I) {
        var _ = this;
        if (this.error)
          throw this.error;
        if (_.closed)
          return Et(
            _,
            "Cannot write after close. Assign an onready handler."
          );
        if (I === null)
          return et(_);
        typeof I == "object" && (I = I.toString());
        for (var R = 0, B = ""; B = en(I, R++), _.c = B, !!B; )
          switch (_.trackPosition && (_.position++, B === `
` ? (_.line++, _.column = 0) : _.column++), _.state) {
            case K.BEGIN:
              if (_.state = K.BEGIN_WHITESPACE, B === "\uFEFF")
                continue;
              Tn(_, B);
              continue;
            case K.BEGIN_WHITESPACE:
              Tn(_, B);
              continue;
            case K.TEXT:
              if (_.sawRoot && !_.closedRoot) {
                for (var Me = R - 1; B && B !== "<" && B !== "&"; )
                  B = en(I, R++), B && _.trackPosition && (_.position++, B === `
` ? (_.line++, _.column = 0) : _.column++);
                _.textNode += I.substring(Me, R - 1);
              }
              B === "<" && !(_.sawRoot && _.closedRoot && !_.strict) ? (_.state = K.OPEN_WAKA, _.startTagPosition = _.position) : (!de(B) && (!_.sawRoot || _.closedRoot) && xe(_, "Text data outside of root node."), B === "&" ? _.state = K.TEXT_ENTITY : _.textNode += B);
              continue;
            case K.SCRIPT:
              B === "<" ? _.state = K.SCRIPT_ENDING : _.script += B;
              continue;
            case K.SCRIPT_ENDING:
              B === "/" ? _.state = K.CLOSE_TAG : (_.script += "<" + B, _.state = K.SCRIPT);
              continue;
            case K.OPEN_WAKA:
              if (B === "!")
                _.state = K.SGML_DECL, _.sgmlDecl = "";
              else if (!de(B)) if (te(he, B))
                _.state = K.OPEN_TAG, _.tagName = B;
              else if (B === "/")
                _.state = K.CLOSE_TAG, _.tagName = "";
              else if (B === "?")
                _.state = K.PROC_INST, _.procInstName = _.procInstBody = "";
              else {
                if (xe(_, "Unencoded <"), _.startTagPosition + 1 < _.position) {
                  var A = _.position - _.startTagPosition;
                  B = new Array(A).join(" ") + B;
                }
                _.textNode += "<" + B, _.state = K.TEXT;
              }
              continue;
            case K.SGML_DECL:
              if (_.sgmlDecl + B === "--") {
                _.state = K.COMMENT, _.comment = "", _.sgmlDecl = "";
                continue;
              }
              _.doctype && _.doctype !== !0 && _.sgmlDecl ? (_.state = K.DOCTYPE_DTD, _.doctype += "<!" + _.sgmlDecl + B, _.sgmlDecl = "") : (_.sgmlDecl + B).toUpperCase() === L ? (ke(_, "onopencdata"), _.state = K.CDATA, _.sgmlDecl = "", _.cdata = "") : (_.sgmlDecl + B).toUpperCase() === z ? (_.state = K.DOCTYPE, (_.doctype || _.sawRoot) && xe(
                _,
                "Inappropriately located doctype declaration"
              ), _.doctype = "", _.sgmlDecl = "") : B === ">" ? (ke(_, "onsgmldeclaration", _.sgmlDecl), _.sgmlDecl = "", _.state = K.TEXT) : (qe(B) && (_.state = K.SGML_DECL_QUOTED), _.sgmlDecl += B);
              continue;
            case K.SGML_DECL_QUOTED:
              B === _.q && (_.state = K.SGML_DECL, _.q = ""), _.sgmlDecl += B;
              continue;
            case K.DOCTYPE:
              B === ">" ? (_.state = K.TEXT, ke(_, "ondoctype", _.doctype), _.doctype = !0) : (_.doctype += B, B === "[" ? _.state = K.DOCTYPE_DTD : qe(B) && (_.state = K.DOCTYPE_QUOTED, _.q = B));
              continue;
            case K.DOCTYPE_QUOTED:
              _.doctype += B, B === _.q && (_.q = "", _.state = K.DOCTYPE);
              continue;
            case K.DOCTYPE_DTD:
              B === "]" ? (_.doctype += B, _.state = K.DOCTYPE) : B === "<" ? (_.state = K.OPEN_WAKA, _.startTagPosition = _.position) : qe(B) ? (_.doctype += B, _.state = K.DOCTYPE_DTD_QUOTED, _.q = B) : _.doctype += B;
              continue;
            case K.DOCTYPE_DTD_QUOTED:
              _.doctype += B, B === _.q && (_.state = K.DOCTYPE_DTD, _.q = "");
              continue;
            case K.COMMENT:
              B === "-" ? _.state = K.COMMENT_ENDING : _.comment += B;
              continue;
            case K.COMMENT_ENDING:
              B === "-" ? (_.state = K.COMMENT_ENDED, _.comment = jt(_.opt, _.comment), _.comment && ke(_, "oncomment", _.comment), _.comment = "") : (_.comment += "-" + B, _.state = K.COMMENT);
              continue;
            case K.COMMENT_ENDED:
              B !== ">" ? (xe(_, "Malformed comment"), _.comment += "--" + B, _.state = K.COMMENT) : _.doctype && _.doctype !== !0 ? _.state = K.DOCTYPE_DTD : _.state = K.TEXT;
              continue;
            case K.CDATA:
              B === "]" ? _.state = K.CDATA_ENDING : _.cdata += B;
              continue;
            case K.CDATA_ENDING:
              B === "]" ? _.state = K.CDATA_ENDING_2 : (_.cdata += "]" + B, _.state = K.CDATA);
              continue;
            case K.CDATA_ENDING_2:
              B === ">" ? (_.cdata && ke(_, "oncdata", _.cdata), ke(_, "onclosecdata"), _.cdata = "", _.state = K.TEXT) : B === "]" ? _.cdata += "]" : (_.cdata += "]]" + B, _.state = K.CDATA);
              continue;
            case K.PROC_INST:
              B === "?" ? _.state = K.PROC_INST_ENDING : de(B) ? _.state = K.PROC_INST_BODY : _.procInstName += B;
              continue;
            case K.PROC_INST_BODY:
              if (!_.procInstBody && de(B))
                continue;
              B === "?" ? _.state = K.PROC_INST_ENDING : _.procInstBody += B;
              continue;
            case K.PROC_INST_ENDING:
              B === ">" ? (ke(_, "onprocessinginstruction", {
                name: _.procInstName,
                body: _.procInstBody
              }), _.procInstName = _.procInstBody = "", _.state = K.TEXT) : (_.procInstBody += "?" + B, _.state = K.PROC_INST_BODY);
              continue;
            case K.OPEN_TAG:
              te(ve, B) ? _.tagName += B : (Ne(_), B === ">" ? lt(_) : B === "/" ? _.state = K.OPEN_TAG_SLASH : (de(B) || xe(_, "Invalid character in tag name"), _.state = K.ATTRIB));
              continue;
            case K.OPEN_TAG_SLASH:
              B === ">" ? (lt(_, !0), Tt(_)) : (xe(_, "Forward-slash in opening tag not followed by >"), _.state = K.ATTRIB);
              continue;
            case K.ATTRIB:
              if (de(B))
                continue;
              B === ">" ? lt(_) : B === "/" ? _.state = K.OPEN_TAG_SLASH : te(he, B) ? (_.attribName = B, _.attribValue = "", _.state = K.ATTRIB_NAME) : xe(_, "Invalid attribute name");
              continue;
            case K.ATTRIB_NAME:
              B === "=" ? _.state = K.ATTRIB_VALUE : B === ">" ? (xe(_, "Attribute without value"), _.attribValue = _.attribName, tt(_), lt(_)) : de(B) ? _.state = K.ATTRIB_NAME_SAW_WHITE : te(ve, B) ? _.attribName += B : xe(_, "Invalid attribute name");
              continue;
            case K.ATTRIB_NAME_SAW_WHITE:
              if (B === "=")
                _.state = K.ATTRIB_VALUE;
              else {
                if (de(B))
                  continue;
                xe(_, "Attribute without value"), _.tag.attributes[_.attribName] = "", _.attribValue = "", ke(_, "onattribute", {
                  name: _.attribName,
                  value: ""
                }), _.attribName = "", B === ">" ? lt(_) : te(he, B) ? (_.attribName = B, _.state = K.ATTRIB_NAME) : (xe(_, "Invalid attribute name"), _.state = K.ATTRIB);
              }
              continue;
            case K.ATTRIB_VALUE:
              if (de(B))
                continue;
              qe(B) ? (_.q = B, _.state = K.ATTRIB_VALUE_QUOTED) : (_.opt.unquotedAttributeValues || Et(_, "Unquoted attribute value"), _.state = K.ATTRIB_VALUE_UNQUOTED, _.attribValue = B);
              continue;
            case K.ATTRIB_VALUE_QUOTED:
              if (B !== _.q) {
                B === "&" ? _.state = K.ATTRIB_VALUE_ENTITY_Q : _.attribValue += B;
                continue;
              }
              tt(_), _.q = "", _.state = K.ATTRIB_VALUE_CLOSED;
              continue;
            case K.ATTRIB_VALUE_CLOSED:
              de(B) ? _.state = K.ATTRIB : B === ">" ? lt(_) : B === "/" ? _.state = K.OPEN_TAG_SLASH : te(he, B) ? (xe(_, "No whitespace between attributes"), _.attribName = B, _.attribValue = "", _.state = K.ATTRIB_NAME) : xe(_, "Invalid attribute name");
              continue;
            case K.ATTRIB_VALUE_UNQUOTED:
              if (!re(B)) {
                B === "&" ? _.state = K.ATTRIB_VALUE_ENTITY_U : _.attribValue += B;
                continue;
              }
              tt(_), B === ">" ? lt(_) : _.state = K.ATTRIB;
              continue;
            case K.CLOSE_TAG:
              if (_.tagName)
                B === ">" ? Tt(_) : te(ve, B) ? _.tagName += B : _.script ? (_.script += "</" + _.tagName, _.tagName = "", _.state = K.SCRIPT) : (de(B) || xe(_, "Invalid tagname in closing tag"), _.state = K.CLOSE_TAG_SAW_WHITE);
              else {
                if (de(B))
                  continue;
                Te(he, B) ? _.script ? (_.script += "</" + B, _.state = K.SCRIPT) : xe(_, "Invalid tagname in closing tag.") : _.tagName = B;
              }
              continue;
            case K.CLOSE_TAG_SAW_WHITE:
              if (de(B))
                continue;
              B === ">" ? Tt(_) : xe(_, "Invalid characters in closing tag");
              continue;
            case K.TEXT_ENTITY:
            case K.ATTRIB_VALUE_ENTITY_Q:
            case K.ATTRIB_VALUE_ENTITY_U:
              var k, Y;
              switch (_.state) {
                case K.TEXT_ENTITY:
                  k = K.TEXT, Y = "textNode";
                  break;
                case K.ATTRIB_VALUE_ENTITY_Q:
                  k = K.ATTRIB_VALUE_QUOTED, Y = "attribValue";
                  break;
                case K.ATTRIB_VALUE_ENTITY_U:
                  k = K.ATTRIB_VALUE_UNQUOTED, Y = "attribValue";
                  break;
              }
              if (B === ";") {
                var Q = Ct(_);
                _.opt.unparsedEntities && !Object.values(i.XML_ENTITIES).includes(Q) ? (_.entity = "", _.state = k, _.write(Q)) : (_[Y] += Q, _.entity = "", _.state = k);
              } else te(_.entity.length ? Fe : Ce, B) ? _.entity += B : (xe(_, "Invalid character in entity name"), _[Y] += "&" + _.entity + B, _.entity = "", _.state = k);
              continue;
            default:
              throw new Error(_, "Unknown state: " + _.state);
          }
        return _.position >= _.bufferCheckPosition && l(_), _;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var I = String.fromCharCode, _ = Math.floor, R = function() {
          var B = 16384, Me = [], A, k, Y = -1, Q = arguments.length;
          if (!Q)
            return "";
          for (var ee = ""; ++Y < Q; ) {
            var J = Number(arguments[Y]);
            if (!isFinite(J) || // `NaN`, `+Infinity`, or `-Infinity`
            J < 0 || // not a valid Unicode code point
            J > 1114111 || // not a valid Unicode code point
            _(J) !== J)
              throw RangeError("Invalid code point: " + J);
            J <= 65535 ? Me.push(J) : (J -= 65536, A = (J >> 10) + 55296, k = J % 1024 + 56320, Me.push(A, k)), (Y + 1 === Q || Me.length > B) && (ee += I.apply(null, Me), Me.length = 0);
          }
          return ee;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: R,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = R;
      }();
    })(n);
  }(Ga)), Ga;
}
dd();
const Qt = "sclElements", pa = {
  default: {
    prefix: "",
    uri: "http://www.iec.ch/61850/2003/SCL"
  }
};
function pd(n) {
  return n !== null && typeof n == "object" && "namespace" in n && n.namespace !== null;
}
var Ks = { exports: {} }, hd = Ks.exports, Ya;
function md() {
  return Ya || (Ya = 1, function(n, i) {
    (function(a, u) {
      n.exports = u();
    })(hd, function() {
      var a = function(e, t) {
        return (a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
          r.__proto__ = o;
        } || function(r, o) {
          for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
        })(e, t);
      }, u = function() {
        return (u = Object.assign || function(e) {
          for (var t, r = 1, o = arguments.length; r < o; r++) for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
          return e;
        }).apply(this, arguments);
      };
      function l(e, t, r) {
        for (var o, s = 0, c = t.length; s < c; s++) !o && s in t || ((o = o || Array.prototype.slice.call(t, 0, s))[s] = t[s]);
        return e.concat(o || Array.prototype.slice.call(t));
      }
      var d = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : ad, g = Object.keys, T = Array.isArray;
      function N(e, t) {
        return typeof t != "object" || g(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || d.Promise || (d.Promise = Promise);
      var $ = Object.getPrototypeOf, j = {}.hasOwnProperty;
      function L(e, t) {
        return j.call(e, t);
      }
      function z(e, t) {
        typeof t == "function" && (t = t($(e))), (typeof Reflect > "u" ? g : Reflect.ownKeys)(t).forEach(function(r) {
          pe(e, r, t[r]);
        });
      }
      var ie = Object.defineProperty;
      function pe(e, t, r, o) {
        ie(e, t, N(r && L(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function ne(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), pe(e.prototype, "constructor", e), { extend: z.bind(null, e.prototype) };
        } };
      }
      var he = Object.getOwnPropertyDescriptor, ve = [].slice;
      function Ce(e, t, r) {
        return ve.call(e, t, r);
      }
      function Fe(e, t) {
        return t(e);
      }
      function de(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function qe(e) {
        d.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function re(e, t) {
        if (typeof t == "string" && L(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var r = [], o = 0, s = t.length; o < s; ++o) {
            var c = re(e, t[o]);
            r.push(c);
          }
          return r;
        }
        var f = t.indexOf(".");
        if (f !== -1) {
          var p = e[t.substr(0, f)];
          return p == null ? void 0 : re(p, t.substr(f + 1));
        }
      }
      function te(e, t, r) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          de(typeof r != "string" && "length" in r);
          for (var o = 0, s = t.length; o < s; ++o) te(e, t[o], r[o]);
        } else {
          var c, f, p = t.indexOf(".");
          p !== -1 ? (c = t.substr(0, p), (f = t.substr(p + 1)) === "" ? r === void 0 ? T(e) && !isNaN(parseInt(c)) ? e.splice(c, 1) : delete e[c] : e[c] = r : te(p = !(p = e[c]) || !L(e, c) ? e[c] = {} : p, f, r)) : r === void 0 ? T(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function Te(e) {
        var t, r = {};
        for (t in e) L(e, t) && (r[t] = e[t]);
        return r;
      }
      var K = [].concat;
      function ut(e) {
        return K.apply([], e);
      }
      var Ie = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ut([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return d[e];
      }), ft = new Set(Ie.map(function(e) {
        return d[e];
      })), ke = null;
      function ze(e) {
        return ke = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var o = ke.get(r);
          if (o) return o;
          if (T(r)) {
            o = [], ke.set(r, o);
            for (var s = 0, c = r.length; s < c; ++s) o.push(t(r[s]));
          } else if (ft.has(r.constructor)) o = r;
          else {
            var f, p = $(r);
            for (f in o = p === Object.prototype ? {} : Object.create(p), ke.set(r, o), r) L(r, f) && (o[f] = t(r[f]));
          }
          return o;
        }(e), ke = null, e;
      }
      var jt = {}.toString;
      function Et(e) {
        return jt.call(e).slice(8, -1);
      }
      var et = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", xe = typeof et == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[et]) && t.apply(e);
      } : function() {
        return null;
      };
      function Ne(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var nt = {};
      function tt(e) {
        var t, r, o, s;
        if (arguments.length === 1) {
          if (T(e)) return e.slice();
          if (this === nt && typeof e == "string") return [e];
          if (s = xe(e)) {
            for (r = []; !(o = s.next()).done; ) r.push(o.value);
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
      }, Ee = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], ct = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Ee), Tt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Ct(e, t) {
        this.name = e, this.message = t;
      }
      function Tn(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(r) {
          return t[r].toString();
        }).filter(function(r, o, s) {
          return s.indexOf(r) === o;
        }).join(`
`);
      }
      function en(e, t, r, o) {
        this.failures = t, this.failedKeys = o, this.successCount = r, this.message = Tn(e, t);
      }
      function pt(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(r) {
          return t[r];
        }), this.failuresByPos = t, this.message = Tn(e, this.failures);
      }
      ne(Ct).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), ne(en).from(Ct), ne(pt).from(Ct);
      var I = ct.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), _ = Ct, R = ct.reduce(function(e, t) {
        var r = t + "Error";
        function o(s, c) {
          this.name = r, s ? typeof s == "string" ? (this.message = "".concat(s).concat(c ? `
 ` + c : ""), this.inner = c || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = Tt[t] || r, this.inner = null);
        }
        return ne(o).from(_), e[t] = o, e;
      }, {});
      R.Syntax = SyntaxError, R.Type = TypeError, R.Range = RangeError;
      var B = Ee.reduce(function(e, t) {
        return e[t + "Error"] = R[t], e;
      }, {}), Me = ct.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = R[t]), e;
      }, {});
      function A() {
      }
      function k(e) {
        return e;
      }
      function Y(e, t) {
        return e == null || e === k ? t : function(r) {
          return t(e(r));
        };
      }
      function Q(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function ee(e, t) {
        return e === A ? t : function() {
          var r = e.apply(this, arguments);
          r !== void 0 && (arguments[0] = r);
          var o = this.onsuccess, s = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var c = t.apply(this, arguments);
          return o && (this.onsuccess = this.onsuccess ? Q(o, this.onsuccess) : o), s && (this.onerror = this.onerror ? Q(s, this.onerror) : s), c !== void 0 ? c : r;
        };
      }
      function J(e, t) {
        return e === A ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? Q(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? Q(o, this.onerror) : o);
        };
      }
      function ue(e, t) {
        return e === A ? t : function(r) {
          var o = e.apply(this, arguments);
          N(r, o);
          var s = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? Q(s, this.onsuccess) : s), c && (this.onerror = this.onerror ? Q(c, this.onerror) : c), o === void 0 ? r === void 0 ? void 0 : r : N(o, r);
        };
      }
      function le(e, t) {
        return e === A ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function oe(e, t) {
        return e === A ? t : function() {
          var r = e.apply(this, arguments);
          if (r && typeof r.then == "function") {
            for (var o = this, s = arguments.length, c = new Array(s); s--; ) c[s] = arguments[s];
            return r.then(function() {
              return t.apply(o, c);
            });
          }
          return t.apply(this, arguments);
        };
      }
      Me.ModifyError = en, Me.DexieError = Ct, Me.BulkError = pt;
      var Z = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function we(e) {
        Z = e;
      }
      var fe = {}, Se = 100, Ie = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, $(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, $(t), e];
      }(), Ee = Ie[0], ct = Ie[1], Ie = Ie[2], ct = ct && ct.then, je = Ee && Ee.constructor, Le = !!Ie, it = function(e, t) {
        tn.push([e, t]), gt && (queueMicrotask(Uo), gt = !1);
      }, dt = !0, gt = !0, ot = [], Lt = [], Cn = k, Xe = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: A, pgp: !1, env: {}, finalize: A }, X = Xe, tn = [], $t = 0, Rn = [];
      function H(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = X;
        if (typeof e != "function") {
          if (e !== fe) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && br(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function r(o, s) {
          try {
            s(function(c) {
              if (o._state === null) {
                if (c === o) throw new TypeError("A promise cannot be resolved with itself.");
                var f = o._lib && rn();
                c && typeof c.then == "function" ? r(o, function(p, m) {
                  c instanceof H ? c._then(p, m) : c.then(p, m);
                }) : (o._state = !0, o._value = c, di(o)), f && on();
              }
            }, br.bind(null, o));
          } catch (c) {
            br(o, c);
          }
        }(this, e);
      }
      var gr = { get: function() {
        var e = X, t = Kn;
        function r(o, s) {
          var c = this, f = !e.global && (e !== X || t !== Kn), p = f && !Ot(), m = new H(function(v, w) {
            _r(c, new fi(hi(o, e, f, p), hi(s, e, f, p), v, w, e));
          });
          return this._consoleTask && (m._consoleTask = this._consoleTask), m;
        }
        return r.prototype = fe, r;
      }, set: function(e) {
        pe(this, "then", e && e.prototype === fe ? gr : { get: function() {
          return e;
        }, set: gr.set });
      } };
      function fi(e, t, r, o, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = r, this.reject = o, this.psd = s;
      }
      function br(e, t) {
        var r, o;
        Lt.push(t), e._state === null && (r = e._lib && rn(), t = Cn(t), e._state = !1, e._value = t, o = e, ot.some(function(s) {
          return s._value === o._value;
        }) || ot.push(o), di(e), r && on());
      }
      function di(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var r = 0, o = t.length; r < o; ++r) _r(e, t[r]);
        var s = e._PSD;
        --s.ref || s.finalize(), $t === 0 && (++$t, it(function() {
          --$t == 0 && wr();
        }, []));
      }
      function _r(e, t) {
        if (e._state !== null) {
          var r = e._state ? t.onFulfilled : t.onRejected;
          if (r === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++$t, it($o, [r, e, t]);
        } else e._listeners.push(t);
      }
      function $o(e, t, r) {
        try {
          var o, s = t._value;
          !t._state && Lt.length && (Lt = []), o = Z && t._consoleTask ? t._consoleTask.run(function() {
            return e(s);
          }) : e(s), t._state || Lt.indexOf(s) !== -1 || function(c) {
            for (var f = ot.length; f; ) if (ot[--f]._value === c._value) return ot.splice(f, 1);
          }(t), r.resolve(o);
        } catch (c) {
          r.reject(c);
        } finally {
          --$t == 0 && wr(), --r.psd.ref || r.psd.finalize();
        }
      }
      function Uo() {
        Ut(Xe, function() {
          rn() && on();
        });
      }
      function rn() {
        var e = dt;
        return gt = dt = !1, e;
      }
      function on() {
        var e, t, r;
        do
          for (; 0 < tn.length; ) for (e = tn, tn = [], r = e.length, t = 0; t < r; ++t) {
            var o = e[t];
            o[0].apply(null, o[1]);
          }
        while (0 < tn.length);
        gt = dt = !0;
      }
      function wr() {
        var e = ot;
        ot = [], e.forEach(function(o) {
          o._PSD.onunhandled.call(null, o._value, o);
        });
        for (var t = Rn.slice(0), r = t.length; r; ) t[--r]();
      }
      function kn(e) {
        return new H(fe, !1, e);
      }
      function Oe(e, t) {
        var r = X;
        return function() {
          var o = rn(), s = X;
          try {
            return Nt(r, !0), e.apply(this, arguments);
          } catch (c) {
            t && t(c);
          } finally {
            Nt(s, !1), o && on();
          }
        };
      }
      z(H.prototype, { then: gr, _then: function(e, t) {
        _r(this, new fi(null, null, e, t, X));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, r = arguments[1];
        return typeof t == "function" ? this.then(null, function(o) {
          return (o instanceof t ? r : kn)(o);
        }) : this.then(null, function(o) {
          return (o && o.name === t ? r : kn)(o);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return H.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return H.resolve(e()).then(function() {
            return kn(t);
          });
        });
      }, timeout: function(e, t) {
        var r = this;
        return e < 1 / 0 ? new H(function(o, s) {
          var c = setTimeout(function() {
            return s(new R.Timeout(t));
          }, e);
          r.then(o, s).finally(clearTimeout.bind(null, c));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && pe(H.prototype, Symbol.toStringTag, "Dexie.Promise"), Xe.env = pi(), z(H, { all: function() {
        var e = tt.apply(null, arguments).map(Mn);
        return new H(function(t, r) {
          e.length === 0 && t([]);
          var o = e.length;
          e.forEach(function(s, c) {
            return H.resolve(s).then(function(f) {
              e[c] = f, --o || t(e);
            }, r);
          });
        });
      }, resolve: function(e) {
        return e instanceof H ? e : e && typeof e.then == "function" ? new H(function(t, r) {
          e.then(t, r);
        }) : new H(fe, !0, e);
      }, reject: kn, race: function() {
        var e = tt.apply(null, arguments).map(Mn);
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
        return Kn;
      } }, newPSD: It, usePSD: Ut, scheduler: { get: function() {
        return it;
      }, set: function(e) {
        it = e;
      } }, rejectionMapper: { get: function() {
        return Cn;
      }, set: function(e) {
        Cn = e;
      } }, follow: function(e, t) {
        return new H(function(r, o) {
          return It(function(s, c) {
            var f = X;
            f.unhandleds = [], f.onunhandled = c, f.finalize = Q(function() {
              var p, m = this;
              p = function() {
                m.unhandleds.length === 0 ? s() : c(m.unhandleds[0]);
              }, Rn.push(function v() {
                p(), Rn.splice(Rn.indexOf(v), 1);
              }), ++$t, it(function() {
                --$t == 0 && wr();
              }, []);
            }, f.finalize), e();
          }, t, r, o);
        });
      } }), je && (je.allSettled && pe(H, "allSettled", function() {
        var e = tt.apply(null, arguments).map(Mn);
        return new H(function(t) {
          e.length === 0 && t([]);
          var r = e.length, o = new Array(r);
          e.forEach(function(s, c) {
            return H.resolve(s).then(function(f) {
              return o[c] = { status: "fulfilled", value: f };
            }, function(f) {
              return o[c] = { status: "rejected", reason: f };
            }).then(function() {
              return --r || t(o);
            });
          });
        });
      }), je.any && typeof AggregateError < "u" && pe(H, "any", function() {
        var e = tt.apply(null, arguments).map(Mn);
        return new H(function(t, r) {
          e.length === 0 && r(new AggregateError([]));
          var o = e.length, s = new Array(o);
          e.forEach(function(c, f) {
            return H.resolve(c).then(function(p) {
              return t(p);
            }, function(p) {
              s[f] = p, --o || r(new AggregateError(s));
            });
          });
        });
      }), je.withResolvers && (H.withResolvers = je.withResolvers));
      var $e = { awaits: 0, echoes: 0, id: 0 }, Vo = 0, jn = [], Fn = 0, Kn = 0, Go = 0;
      function It(e, t, r, o) {
        var s = X, c = Object.create(s);
        return c.parent = s, c.ref = 0, c.global = !1, c.id = ++Go, Xe.env, c.env = Le ? { Promise: H, PromiseProp: { value: H, configurable: !0, writable: !0 }, all: H.all, race: H.race, allSettled: H.allSettled, any: H.any, resolve: H.resolve, reject: H.reject } : {}, t && N(c, t), ++s.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = Ut(c, e, r, o), c.ref === 0 && c.finalize(), o;
      }
      function sn() {
        return $e.id || ($e.id = ++Vo), ++$e.awaits, $e.echoes += Se, $e.id;
      }
      function Ot() {
        return !!$e.awaits && (--$e.awaits == 0 && ($e.id = 0), $e.echoes = $e.awaits * Se, !0);
      }
      function Mn(e) {
        return $e.echoes && e && e.constructor === je ? (sn(), e.then(function(t) {
          return Ot(), t;
        }, function(t) {
          return Ot(), De(t);
        })) : e;
      }
      function Ho() {
        var e = jn[jn.length - 1];
        jn.pop(), Nt(e, !1);
      }
      function Nt(e, t) {
        var r, o = X;
        (t ? !$e.echoes || Fn++ && e === X : !Fn || --Fn && e === X) || queueMicrotask(t ? (function(s) {
          ++Kn, $e.echoes && --$e.echoes != 0 || ($e.echoes = $e.awaits = $e.id = 0), jn.push(X), Nt(s, !0);
        }).bind(null, e) : Ho), e !== X && (X = e, o === Xe && (Xe.env = pi()), Le && (r = Xe.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(d, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function pi() {
        var e = d.Promise;
        return Le ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(d, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Ut(e, t, r, o, s) {
        var c = X;
        try {
          return Nt(e, !0), t(r, o, s);
        } finally {
          Nt(c, !1);
        }
      }
      function hi(e, t, r, o) {
        return typeof e != "function" ? e : function() {
          var s = X;
          r && sn(), Nt(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Nt(s, !1), o && queueMicrotask(Ot);
          }
        };
      }
      function xr(e) {
        Promise === je && $e.echoes === 0 ? Fn === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + ct).indexOf("[native code]") === -1 && (sn = Ot = A);
      var De = H.reject, Vt = "￿", _t = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", mi = "String expected.", an = [], Bn = "__dbnames", Sr = "readonly", Er = "readwrite";
      function Gt(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var yi = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function qn(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = ze(t))[e], t;
        };
      }
      function vi() {
        throw R.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function me(e, t) {
        try {
          var r = gi(e), o = gi(t);
          if (r !== o) return r === "Array" ? 1 : o === "Array" ? -1 : r === "binary" ? 1 : o === "binary" ? -1 : r === "string" ? 1 : o === "string" ? -1 : r === "Date" ? 1 : o !== "Date" ? NaN : -1;
          switch (r) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return function(s, c) {
                for (var f = s.length, p = c.length, m = f < p ? f : p, v = 0; v < m; ++v) if (s[v] !== c[v]) return s[v] < c[v] ? -1 : 1;
                return f === p ? 0 : f < p ? -1 : 1;
              }(bi(e), bi(t));
            case "Array":
              return function(s, c) {
                for (var f = s.length, p = c.length, m = f < p ? f : p, v = 0; v < m; ++v) {
                  var w = me(s[v], c[v]);
                  if (w !== 0) return w;
                }
                return f === p ? 0 : f < p ? -1 : 1;
              }(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function gi(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = Et(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function bi(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function Ln(e, t, r) {
        var o = e.schema.yProps;
        return o ? (t && 0 < r.numFailures && (t = t.filter(function(s, c) {
          return !r.failures[c];
        })), Promise.all(o.map(function(s) {
          return s = s.updatesTable, t ? e.db.table(s).where("k").anyOf(t).delete() : e.db.table(s).clear();
        })).then(function() {
          return r;
        })) : r;
      }
      var _i = (Ae.prototype._trans = function(e, t, r) {
        var o = this._tx || X.trans, s = this.name, c = Z && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function f(v, w, h) {
          if (!h.schema[s]) throw new R.NotFound("Table " + s + " not part of transaction");
          return t(h.idbtrans, h);
        }
        var p = rn();
        try {
          var m = o && o.db._novip === this.db._novip ? o === X.trans ? o._promise(e, f, r) : It(function() {
            return o._promise(e, f, r);
          }, { trans: o, transless: X.transless || X }) : function v(w, h, E, y) {
            if (w.idbdb && (w._state.openComplete || X.letThrough || w._vip)) {
              var b = w._createTransaction(h, E, w._dbSchema);
              try {
                b.create(), w._state.PR1398_maxLoop = 3;
              } catch (S) {
                return S.name === I.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                  return v(w, h, E, y);
                })) : De(S);
              }
              return b._promise(h, function(S, x) {
                return It(function() {
                  return X.trans = b, y(S, x, b);
                });
              }).then(function(S) {
                if (h === "readwrite") try {
                  b.idbtrans.commit();
                } catch {
                }
                return h === "readonly" ? S : b._completion.then(function() {
                  return S;
                });
              });
            }
            if (w._state.openComplete) return De(new R.DatabaseClosed(w._state.dbOpenError));
            if (!w._state.isBeingOpened) {
              if (!w._state.autoOpen) return De(new R.DatabaseClosed());
              w.open().catch(A);
            }
            return w._state.dbReadyPromise.then(function() {
              return v(w, h, E, y);
            });
          }(this.db, e, [this.name], f);
          return c && (m._consoleTask = c, m = m.catch(function(v) {
            return console.trace(v), De(v);
          })), m;
        } finally {
          p && on();
        }
      }, Ae.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? De(new R.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(s) {
            return r.hook.reading.fire(s);
          });
        }).then(t);
      }, Ae.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (T(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = g(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var r = this.schema.indexes.concat(this.schema.primKey).filter(function(p) {
          if (p.compound && t.every(function(v) {
            return 0 <= p.keyPath.indexOf(v);
          })) {
            for (var m = 0; m < t.length; ++m) if (t.indexOf(p.keyPath[m]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(p, m) {
          return p.keyPath.length - m.keyPath.length;
        })[0];
        if (r && this.db._maxKey !== Vt) {
          var c = r.keyPath.slice(0, t.length);
          return this.where(c).equals(c.map(function(m) {
            return e[m];
          }));
        }
        !r && Z && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var o = this.schema.idxByName;
        function s(p, m) {
          return me(p, m) === 0;
        }
        var f = t.reduce(function(h, m) {
          var v = h[0], w = h[1], h = o[m], E = e[m];
          return [v || h, v || !h ? Gt(w, h && h.multi ? function(y) {
            return y = re(y, m), T(y) && y.some(function(b) {
              return s(E, b);
            });
          } : function(y) {
            return s(E, re(y, m));
          }) : w];
        }, [null, null]), c = f[0], f = f[1];
        return c ? this.where(c.name).equals(e[c.keyPath]).filter(f) : r ? this.filter(f) : this.where(t).equals("");
      }, Ae.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, Ae.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, Ae.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, Ae.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, Ae.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, Ae.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, Ae.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Ae.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, T(e) ? "[".concat(e.join("+"), "]") : e));
      }, Ae.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Ae.prototype.mapToClass = function(e) {
        var t, r = this.db, o = this.name;
        function s() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof vi && (function(m, v) {
          if (typeof v != "function" && v !== null) throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
          function w() {
            this.constructor = m;
          }
          a(m, v), m.prototype = v === null ? Object.create(v) : (w.prototype = v.prototype, new w());
        }(s, t = e), Object.defineProperty(s.prototype, "db", { get: function() {
          return r;
        }, enumerable: !1, configurable: !0 }), s.prototype.table = function() {
          return o;
        }, e = s);
        for (var c = /* @__PURE__ */ new Set(), f = e.prototype; f; f = $(f)) Object.getOwnPropertyNames(f).forEach(function(m) {
          return c.add(m);
        });
        function p(m) {
          if (!m) return m;
          var v, w = Object.create(e.prototype);
          for (v in m) if (!c.has(v)) try {
            w[v] = m[v];
          } catch {
          }
          return w;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = p, this.hook("reading", p), e;
      }, Ae.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          N(this, e);
        });
      }, Ae.prototype.add = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, f = e;
        return c && s && (f = qn(c)(e)), this._trans("readwrite", function(p) {
          return r.core.mutate({ trans: p, type: "add", keys: t != null ? [t] : null, values: [f] });
        }).then(function(p) {
          return p.numFailures ? H.reject(p.failures[0]) : p.lastResult;
        }).then(function(p) {
          if (c) try {
            te(e, c, p);
          } catch {
          }
          return p;
        });
      }, Ae.prototype.update = function(e, t) {
        return typeof e != "object" || T(e) ? this.where(":id").equals(e).modify(t) : (e = re(e, this.schema.primKey.keyPath), e === void 0 ? De(new R.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, Ae.prototype.put = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, f = e;
        return c && s && (f = qn(c)(e)), this._trans("readwrite", function(p) {
          return r.core.mutate({ trans: p, type: "put", values: [f], keys: t != null ? [t] : null });
        }).then(function(p) {
          return p.numFailures ? H.reject(p.failures[0]) : p.lastResult;
        }).then(function(p) {
          if (c) try {
            te(e, c, p);
          } catch {
          }
          return p;
        });
      }, Ae.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: [e] }).then(function(o) {
            return Ln(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? H.reject(o.failures[0]) : void 0;
          });
        });
      }, Ae.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: yi }).then(function(r) {
            return Ln(e, null, r);
          });
        }).then(function(t) {
          return t.numFailures ? H.reject(t.failures[0]) : void 0;
        });
      }, Ae.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(r) {
          return t.core.getMany({ keys: e, trans: r }).then(function(o) {
            return o.map(function(s) {
              return t.hook.reading.fire(s);
            });
          });
        });
      }, Ae.prototype.bulkAdd = function(e, t, r) {
        var o = this, s = Array.isArray(t) ? t : void 0, c = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(f) {
          var v = o.schema.primKey, p = v.auto, v = v.keyPath;
          if (v && s) throw new R.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new R.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, v = v && p ? e.map(qn(v)) : e;
          return o.core.mutate({ trans: f, type: "add", keys: s, values: v, wantResults: c }).then(function(b) {
            var h = b.numFailures, E = b.results, y = b.lastResult, b = b.failures;
            if (h === 0) return c ? E : y;
            throw new pt("".concat(o.name, ".bulkAdd(): ").concat(h, " of ").concat(m, " operations failed"), b);
          });
        });
      }, Ae.prototype.bulkPut = function(e, t, r) {
        var o = this, s = Array.isArray(t) ? t : void 0, c = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(f) {
          var v = o.schema.primKey, p = v.auto, v = v.keyPath;
          if (v && s) throw new R.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new R.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, v = v && p ? e.map(qn(v)) : e;
          return o.core.mutate({ trans: f, type: "put", keys: s, values: v, wantResults: c }).then(function(b) {
            var h = b.numFailures, E = b.results, y = b.lastResult, b = b.failures;
            if (h === 0) return c ? E : y;
            throw new pt("".concat(o.name, ".bulkPut(): ").concat(h, " of ").concat(m, " operations failed"), b);
          });
        });
      }, Ae.prototype.bulkUpdate = function(e) {
        var t = this, r = this.core, o = e.map(function(f) {
          return f.key;
        }), s = e.map(function(f) {
          return f.changes;
        }), c = [];
        return this._trans("readwrite", function(f) {
          return r.getMany({ trans: f, keys: o, cache: "clone" }).then(function(p) {
            var m = [], v = [];
            e.forEach(function(h, E) {
              var y = h.key, b = h.changes, S = p[E];
              if (S) {
                for (var x = 0, C = Object.keys(b); x < C.length; x++) {
                  var O = C[x], P = b[O];
                  if (O === t.schema.primKey.keyPath) {
                    if (me(P, y) !== 0) throw new R.Constraint("Cannot update primary key in bulkUpdate()");
                  } else te(S, O, P);
                }
                c.push(E), m.push(y), v.push(S);
              }
            });
            var w = m.length;
            return r.mutate({ trans: f, type: "put", keys: m, values: v, updates: { keys: o, changeSpecs: s } }).then(function(h) {
              var E = h.numFailures, y = h.failures;
              if (E === 0) return w;
              for (var b = 0, S = Object.keys(y); b < S.length; b++) {
                var x, C = S[b], O = c[Number(C)];
                O != null && (x = y[C], delete y[C], y[O] = x);
              }
              throw new pt("".concat(t.name, ".bulkUpdate(): ").concat(E, " of ").concat(w, " operations failed"), y);
            });
          });
        });
      }, Ae.prototype.bulkDelete = function(e) {
        var t = this, r = e.length;
        return this._trans("readwrite", function(o) {
          return t.core.mutate({ trans: o, type: "delete", keys: e }).then(function(s) {
            return Ln(t, e, s);
          });
        }).then(function(f) {
          var s = f.numFailures, c = f.lastResult, f = f.failures;
          if (s === 0) return c;
          throw new pt("".concat(t.name, ".bulkDelete(): ").concat(s, " of ").concat(r, " operations failed"), f);
        });
      }, Ae);
      function Ae() {
      }
      function hn(e) {
        function t(f, p) {
          if (p) {
            for (var m = arguments.length, v = new Array(m - 1); --m; ) v[m - 1] = arguments[m];
            return r[f].subscribe.apply(null, v), e;
          }
          if (typeof f == "string") return r[f];
        }
        var r = {};
        t.addEventType = c;
        for (var o = 1, s = arguments.length; o < s; ++o) c(arguments[o]);
        return t;
        function c(f, p, m) {
          if (typeof f != "object") {
            var v;
            p = p || le;
            var w = { subscribers: [], fire: m = m || A, subscribe: function(h) {
              w.subscribers.indexOf(h) === -1 && (w.subscribers.push(h), w.fire = p(w.fire, h));
            }, unsubscribe: function(h) {
              w.subscribers = w.subscribers.filter(function(E) {
                return E !== h;
              }), w.fire = w.subscribers.reduce(p, m);
            } };
            return r[f] = t[f] = w;
          }
          g(v = f).forEach(function(h) {
            var E = v[h];
            if (T(E)) c(h, v[h][0], v[h][1]);
            else {
              if (E !== "asap") throw new R.InvalidArgument("Invalid event config");
              var y = c(h, k, function() {
                for (var b = arguments.length, S = new Array(b); b--; ) S[b] = arguments[b];
                y.subscribers.forEach(function(x) {
                  qe(function() {
                    x.apply(null, S);
                  });
                });
              });
            }
          });
        }
      }
      function mn(e, t) {
        return ne(t).from({ prototype: e }), t;
      }
      function un(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function Tr(e, t) {
        e.filter = Gt(e.filter, t);
      }
      function Cr(e, t, r) {
        var o = e.replayFilter;
        e.replayFilter = o ? function() {
          return Gt(o(), t());
        } : t, e.justLimit = r && !o;
      }
      function $n(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var r = t.getIndexByKeyPath(e.index);
        if (!r) throw new R.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return r;
      }
      function wi(e, t, r) {
        var o = $n(e, t.schema);
        return t.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: o, range: e.range } });
      }
      function Un(e, t, r, o) {
        var s = e.replayFilter ? Gt(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var c = {}, f = function(p, m, v) {
            var w, h;
            s && !s(m, v, function(E) {
              return m.stop(E);
            }, function(E) {
              return m.fail(E);
            }) || ((h = "" + (w = m.primaryKey)) == "[object ArrayBuffer]" && (h = "" + new Uint8Array(w)), L(c, h) || (c[h] = !0, t(p, m, v)));
          };
          return Promise.all([e.or._iterate(f, r), xi(wi(e, o, r), e.algorithm, f, !e.keysOnly && e.valueMapper)]);
        }
        return xi(wi(e, o, r), Gt(e.algorithm, s), t, !e.keysOnly && e.valueMapper);
      }
      function xi(e, t, r, o) {
        var s = Oe(o ? function(c, f, p) {
          return r(o(c), f, p);
        } : r);
        return e.then(function(c) {
          if (c) return c.start(function() {
            var f = function() {
              return c.continue();
            };
            t && !t(c, function(p) {
              return f = p;
            }, function(p) {
              c.stop(p), f = A;
            }, function(p) {
              c.fail(p), f = A;
            }) || s(c.value, c, function(p) {
              return f = p;
            }), f();
          });
        });
      }
      var yn = (Si.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var r = t.add;
          if (T(r)) return l(l([], T(e) ? e : [], !0), r).sort();
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
          if (T(o)) return T(e) ? e.filter(function(s) {
            return !o.includes(s);
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
      }, Si);
      function Si(e) {
        this["@@propmod"] = e;
      }
      var Wo = (ge.prototype._read = function(e, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, De.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, ge.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, De.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, ge.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Gt(t.algorithm, e);
      }, ge.prototype._iterate = function(e, t) {
        return Un(this._ctx, e, t, this._ctx.table.core);
      }, ge.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && N(r, e), t._ctx = r, t;
      }, ge.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, ge.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(r) {
          return Un(t, e, r, t.table.core);
        });
      }, ge.prototype.count = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx, s = o.table.core;
          if (un(o, !0)) return s.count({ trans: r, query: { index: $n(o, s.schema), range: o.range } }).then(function(f) {
            return Math.min(f, o.limit);
          });
          var c = 0;
          return Un(o, function() {
            return ++c, !1;
          }, r, s).then(function() {
            return c;
          });
        }).then(e);
      }, ge.prototype.sortBy = function(e, t) {
        var r = e.split(".").reverse(), o = r[0], s = r.length - 1;
        function c(m, v) {
          return v ? c(m[r[v]], v - 1) : m[o];
        }
        var f = this._ctx.dir === "next" ? 1 : -1;
        function p(m, v) {
          return me(c(m, s), c(v, s)) * f;
        }
        return this.toArray(function(m) {
          return m.sort(p);
        }).then(t);
      }, ge.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx;
          if (o.dir === "next" && un(o, !0) && 0 < o.limit) {
            var s = o.valueMapper, c = $n(o, o.table.core.schema);
            return o.table.core.query({ trans: r, limit: o.limit, values: !0, query: { index: c, range: o.range } }).then(function(p) {
              return p = p.result, s ? p.map(s) : p;
            });
          }
          var f = [];
          return Un(o, function(p) {
            return f.push(p);
          }, r, o.table.core).then(function() {
            return f;
          });
        }, e);
      }, ge.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, un(t) ? Cr(t, function() {
          var r = e;
          return function(o, s) {
            return r === 0 || (r === 1 ? --r : s(function() {
              o.advance(r), r = 0;
            }), !1);
          };
        }) : Cr(t, function() {
          var r = e;
          return function() {
            return --r < 0;
          };
        })), this;
      }, ge.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Cr(this._ctx, function() {
          var t = e;
          return function(r, o, s) {
            return --t <= 0 && o(s), 0 <= t;
          };
        }, !0), this;
      }, ge.prototype.until = function(e, t) {
        return Tr(this._ctx, function(r, o, s) {
          return !e(r.value) || (o(s), t);
        }), this;
      }, ge.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, ge.prototype.last = function(e) {
        return this.reverse().first(e);
      }, ge.prototype.filter = function(e) {
        var t;
        return Tr(this._ctx, function(r) {
          return e(r.value);
        }), (t = this._ctx).isMatch = Gt(t.isMatch, e), this;
      }, ge.prototype.and = function(e) {
        return this.filter(e);
      }, ge.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, ge.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, ge.prototype.desc = function() {
        return this.reverse();
      }, ge.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.key, o);
        });
      }, ge.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, ge.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.primaryKey, o);
        });
      }, ge.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(o, s) {
          r.push(s.key);
        }).then(function() {
          return r;
        }).then(e);
      }, ge.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && un(t, !0) && 0 < t.limit) return this._read(function(o) {
          var s = $n(t, t.table.core.schema);
          return t.table.core.query({ trans: o, values: !1, limit: t.limit, query: { index: s, range: t.range } });
        }).then(function(o) {
          return o.result;
        }).then(e);
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(o, s) {
          r.push(s.primaryKey);
        }).then(function() {
          return r;
        }).then(e);
      }, ge.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, ge.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, ge.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, ge.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return Tr(this._ctx, function(s) {
          var o = s.primaryKey.toString(), s = L(t, o);
          return t[o] = !0, !s;
        }), this;
      }, ge.prototype.modify = function(e) {
        var t = this, r = this._ctx;
        return this._write(function(o) {
          var s, c, f;
          f = typeof e == "function" ? e : (s = g(e), c = s.length, function(C) {
            for (var O = !1, P = 0; P < c; ++P) {
              var D = s[P], F = e[D], U = re(C, D);
              F instanceof yn ? (te(C, D, F.execute(U)), O = !0) : U !== F && (te(C, D, F), O = !0);
            }
            return O;
          });
          var p = r.table.core, h = p.schema.primaryKey, m = h.outbound, v = h.extractKey, w = 200, h = t.db._options.modifyChunkSize;
          h && (w = typeof h == "object" ? h[p.name] || h["*"] || 200 : h);
          function E(C, D) {
            var P = D.failures, D = D.numFailures;
            b += C - D;
            for (var F = 0, U = g(P); F < U.length; F++) {
              var M = U[F];
              y.push(P[M]);
            }
          }
          var y = [], b = 0, S = [], x = e === Ei;
          return t.clone().primaryKeys().then(function(C) {
            function O(D) {
              var F = Math.min(w, C.length - D), U = C.slice(D, D + F);
              return (x ? Promise.resolve([]) : p.getMany({ trans: o, keys: U, cache: "immutable" })).then(function(M) {
                var q = [], G = [], V = m ? [] : null, W = x ? U : [];
                if (!x) for (var ce = 0; ce < F; ++ce) {
                  var ye = M[ce], ae = { value: ze(ye), primKey: C[D + ce] };
                  f.call(ae, ae.value, ae) !== !1 && (ae.value == null ? W.push(C[D + ce]) : m || me(v(ye), v(ae.value)) === 0 ? (G.push(ae.value), m && V.push(C[D + ce])) : (W.push(C[D + ce]), q.push(ae.value)));
                }
                return Promise.resolve(0 < q.length && p.mutate({ trans: o, type: "add", values: q }).then(function(Pe) {
                  for (var se in Pe.failures) W.splice(parseInt(se), 1);
                  E(q.length, Pe);
                })).then(function() {
                  return (0 < G.length || P && typeof e == "object") && p.mutate({ trans: o, type: "put", keys: V, values: G, criteria: P, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < D }).then(function(Pe) {
                    return E(G.length, Pe);
                  });
                }).then(function() {
                  return (0 < W.length || P && x) && p.mutate({ trans: o, type: "delete", keys: W, criteria: P, isAdditionalChunk: 0 < D }).then(function(Pe) {
                    return Ln(r.table, W, Pe);
                  }).then(function(Pe) {
                    return E(W.length, Pe);
                  });
                }).then(function() {
                  return C.length > D + F && O(D + w);
                });
              });
            }
            var P = un(r) && r.limit === 1 / 0 && (typeof e != "function" || x) && { index: r.index, range: r.range };
            return O(0).then(function() {
              if (0 < y.length) throw new en("Error modifying one or more objects", y, b, S);
              return C.length;
            });
          });
        });
      }, ge.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !un(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(Ei) : this._write(function(r) {
          var o = e.table.core.schema.primaryKey, s = t;
          return e.table.core.count({ trans: r, query: { index: o, range: s } }).then(function(c) {
            return e.table.core.mutate({ trans: r, type: "deleteRange", range: s }).then(function(m) {
              var p = m.failures, m = m.numFailures;
              if (m) throw new en("Could not delete some values", Object.keys(p).map(function(v) {
                return p[v];
              }), c - m);
              return c - m;
            });
          });
        });
      }, ge);
      function ge() {
      }
      var Ei = function(e, t) {
        return t.value = null;
      };
      function Yo(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function Xo(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function rt(e, t, r) {
        return e = e instanceof Ci ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function cn(e) {
        return new e.Collection(e, function() {
          return Ti("");
        }).limit(0);
      }
      function Vn(e, t, r, o) {
        var s, c, f, p, m, v, w, h = r.length;
        if (!r.every(function(b) {
          return typeof b == "string";
        })) return rt(e, mi);
        function E(b) {
          s = b === "next" ? function(x) {
            return x.toUpperCase();
          } : function(x) {
            return x.toLowerCase();
          }, c = b === "next" ? function(x) {
            return x.toLowerCase();
          } : function(x) {
            return x.toUpperCase();
          }, f = b === "next" ? Yo : Xo;
          var S = r.map(function(x) {
            return { lower: c(x), upper: s(x) };
          }).sort(function(x, C) {
            return f(x.lower, C.lower);
          });
          p = S.map(function(x) {
            return x.upper;
          }), m = S.map(function(x) {
            return x.lower;
          }), w = (v = b) === "next" ? "" : o;
        }
        E("next"), e = new e.Collection(e, function() {
          return Pt(p[0], m[h - 1] + o);
        }), e._ondirectionchange = function(b) {
          E(b);
        };
        var y = 0;
        return e._addAlgorithm(function(b, S, x) {
          var C = b.key;
          if (typeof C != "string") return !1;
          var O = c(C);
          if (t(O, m, y)) return !0;
          for (var P = null, D = y; D < h; ++D) {
            var F = function(U, M, q, G, V, W) {
              for (var ce = Math.min(U.length, G.length), ye = -1, ae = 0; ae < ce; ++ae) {
                var Pe = M[ae];
                if (Pe !== G[ae]) return V(U[ae], q[ae]) < 0 ? U.substr(0, ae) + q[ae] + q.substr(ae + 1) : V(U[ae], G[ae]) < 0 ? U.substr(0, ae) + G[ae] + q.substr(ae + 1) : 0 <= ye ? U.substr(0, ye) + M[ye] + q.substr(ye + 1) : null;
                V(U[ae], Pe) < 0 && (ye = ae);
              }
              return ce < G.length && W === "next" ? U + q.substr(U.length) : ce < U.length && W === "prev" ? U.substr(0, q.length) : ye < 0 ? null : U.substr(0, ye) + G[ye] + q.substr(ye + 1);
            }(C, O, p[D], m[D], f, v);
            F === null && P === null ? y = D + 1 : (P === null || 0 < f(P, F)) && (P = F);
          }
          return S(P !== null ? function() {
            b.continue(P + w);
          } : x), !1;
        }), e;
      }
      function Pt(e, t, r, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: o };
      }
      function Ti(e) {
        return { type: 1, lower: e, upper: e };
      }
      var Ci = (Object.defineProperty(Ue.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Ue.prototype.between = function(e, t, r, o) {
        r = r !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || o) && (!r || !o) ? cn(this) : new this.Collection(this, function() {
            return Pt(e, t, !r, !o);
          });
        } catch {
          return rt(this, _t);
        }
      }, Ue.prototype.equals = function(e) {
        return e == null ? rt(this, _t) : new this.Collection(this, function() {
          return Ti(e);
        });
      }, Ue.prototype.above = function(e) {
        return e == null ? rt(this, _t) : new this.Collection(this, function() {
          return Pt(e, void 0, !0);
        });
      }, Ue.prototype.aboveOrEqual = function(e) {
        return e == null ? rt(this, _t) : new this.Collection(this, function() {
          return Pt(e, void 0, !1);
        });
      }, Ue.prototype.below = function(e) {
        return e == null ? rt(this, _t) : new this.Collection(this, function() {
          return Pt(void 0, e, !1, !0);
        });
      }, Ue.prototype.belowOrEqual = function(e) {
        return e == null ? rt(this, _t) : new this.Collection(this, function() {
          return Pt(void 0, e);
        });
      }, Ue.prototype.startsWith = function(e) {
        return typeof e != "string" ? rt(this, mi) : this.between(e, e + Vt, !0, !0);
      }, Ue.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Vn(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], Vt);
      }, Ue.prototype.equalsIgnoreCase = function(e) {
        return Vn(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, Ue.prototype.anyOfIgnoreCase = function() {
        var e = tt.apply(nt, arguments);
        return e.length === 0 ? cn(this) : Vn(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, Ue.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = tt.apply(nt, arguments);
        return e.length === 0 ? cn(this) : Vn(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, Vt);
      }, Ue.prototype.anyOf = function() {
        var e = this, t = tt.apply(nt, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return rt(this, _t);
        }
        if (t.length === 0) return cn(this);
        var o = new this.Collection(this, function() {
          return Pt(t[0], t[t.length - 1]);
        });
        o._ondirectionchange = function(c) {
          r = c === "next" ? e._ascending : e._descending, t.sort(r);
        };
        var s = 0;
        return o._addAlgorithm(function(c, f, p) {
          for (var m = c.key; 0 < r(m, t[s]); ) if (++s === t.length) return f(p), !1;
          return r(m, t[s]) === 0 || (f(function() {
            c.continue(t[s]);
          }), !1);
        }), o;
      }, Ue.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Ue.prototype.noneOf = function() {
        var e = tt.apply(nt, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return rt(this, _t);
        }
        var t = e.reduce(function(r, o) {
          return r ? r.concat([[r[r.length - 1][1], o]]) : [[-1 / 0, o]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, Ue.prototype.inAnyRange = function(C, t) {
        var r = this, o = this._cmp, s = this._ascending, c = this._descending, f = this._min, p = this._max;
        if (C.length === 0) return cn(this);
        if (!C.every(function(O) {
          return O[0] !== void 0 && O[1] !== void 0 && s(O[0], O[1]) <= 0;
        })) return rt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", R.InvalidArgument);
        var m = !t || t.includeLowers !== !1, v = t && t.includeUppers === !0, w, h = s;
        function E(O, P) {
          return h(O[0], P[0]);
        }
        try {
          (w = C.reduce(function(O, P) {
            for (var D = 0, F = O.length; D < F; ++D) {
              var U = O[D];
              if (o(P[0], U[1]) < 0 && 0 < o(P[1], U[0])) {
                U[0] = f(U[0], P[0]), U[1] = p(U[1], P[1]);
                break;
              }
            }
            return D === F && O.push(P), O;
          }, [])).sort(E);
        } catch {
          return rt(this, _t);
        }
        var y = 0, b = v ? function(O) {
          return 0 < s(O, w[y][1]);
        } : function(O) {
          return 0 <= s(O, w[y][1]);
        }, S = m ? function(O) {
          return 0 < c(O, w[y][0]);
        } : function(O) {
          return 0 <= c(O, w[y][0]);
        }, x = b, C = new this.Collection(this, function() {
          return Pt(w[0][0], w[w.length - 1][1], !m, !v);
        });
        return C._ondirectionchange = function(O) {
          h = O === "next" ? (x = b, s) : (x = S, c), w.sort(E);
        }, C._addAlgorithm(function(O, P, D) {
          for (var F, U = O.key; x(U); ) if (++y === w.length) return P(D), !1;
          return !b(F = U) && !S(F) || (r._cmp(U, w[y][1]) === 0 || r._cmp(U, w[y][0]) === 0 || P(function() {
            h === s ? O.continue(w[y][0]) : O.continue(w[y][1]);
          }), !1);
        }), C;
      }, Ue.prototype.startsWithAnyOf = function() {
        var e = tt.apply(nt, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? cn(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + Vt];
        })) : rt(this, "startsWithAnyOf() only works with strings");
      }, Ue);
      function Ue() {
      }
      function ht(e) {
        return Oe(function(t) {
          return vn(t), e(t.target.error), !1;
        });
      }
      function vn(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var gn = "storagemutated", Ar = "x-storagemutated-1", Dt = hn(null, gn), Qo = (mt.prototype._lock = function() {
        return de(!X.global), ++this._reculock, this._reculock !== 1 || X.global || (X.lockOwnerFor = this), this;
      }, mt.prototype._unlock = function() {
        if (de(!X.global), --this._reculock == 0) for (X.global || (X.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Ut(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, mt.prototype._locked = function() {
        return this._reculock && X.lockOwnerFor !== this;
      }, mt.prototype.create = function(e) {
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
        return de(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Oe(function(s) {
          vn(s), t._reject(e.error);
        }), e.onabort = Oe(function(s) {
          vn(s), t.active && t._reject(new R.Abort(e.error)), t.active = !1, t.on("abort").fire(s);
        }), e.oncomplete = Oe(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && Dt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, mt.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return De(new R.ReadOnly("Transaction is readonly"));
        if (!this.active) return De(new R.TransactionInactive());
        if (this._locked()) return new H(function(c, f) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, r).then(c, f);
          }, X]);
        });
        if (r) return It(function() {
          var c = new H(function(f, p) {
            o._lock();
            var m = t(f, p, o);
            m && m.then && m.then(f, p);
          });
          return c.finally(function() {
            return o._unlock();
          }), c._lib = !0, c;
        });
        var s = new H(function(c, f) {
          var p = t(c, f, o);
          p && p.then && p.then(c, f);
        });
        return s._lib = !0, s;
      }, mt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, mt.prototype.waitFor = function(e) {
        var t, r = this._root(), o = H.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return o;
        }) : (r._waitingFor = o, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function c() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (t.get(-1 / 0).onsuccess = c);
        }());
        var s = r._waitingFor;
        return new H(function(c, f) {
          o.then(function(p) {
            return r._waitingQueue.push(Oe(c.bind(null, p)));
          }, function(p) {
            return r._waitingQueue.push(Oe(f.bind(null, p)));
          }).finally(function() {
            r._waitingFor === s && (r._waitingFor = null);
          });
        });
      }, mt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new R.Abort()));
      }, mt.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (L(t, e)) return t[e];
        var r = this.schema[e];
        if (!r) throw new R.NotFound("Table " + e + " not part of transaction");
        return r = new this.db.Table(e, r, this), r.core = this.db.core.table(e), t[e] = r;
      }, mt);
      function mt() {
      }
      function Ir(e, t, r, o, s, c, f, p) {
        return { name: e, keyPath: t, unique: r, multi: o, auto: s, compound: c, src: (r && !f ? "&" : "") + (o ? "*" : "") + (s ? "++" : "") + Ai(t), type: p };
      }
      function Ai(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Or(e, t, r) {
        return { name: e, primKey: t, indexes: r, mappedClass: null, idxByName: (o = function(s) {
          return [s.name, s];
        }, r.reduce(function(s, c, f) {
          return f = o(c, f), f && (s[f[0]] = f[1]), s;
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
            return Vt;
          }, Vt;
        }
      };
      function Nr(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(r) {
          return r[t];
        } : function(r) {
          return re(r, t);
        } : function(r) {
          return re(r, e);
        };
        var t;
      }
      function Ii(e) {
        return [].slice.call(e);
      }
      var zo = 0;
      function _n(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Jo(e, t, m) {
        function o(x) {
          if (x.type === 3) return null;
          if (x.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var y = x.lower, b = x.upper, S = x.lowerOpen, x = x.upperOpen;
          return y === void 0 ? b === void 0 ? null : t.upperBound(b, !!x) : b === void 0 ? t.lowerBound(y, !!S) : t.bound(y, b, !!S, !!x);
        }
        function s(E) {
          var y, b = E.name;
          return { name: b, schema: E, mutate: function(S) {
            var x = S.trans, C = S.type, O = S.keys, P = S.values, D = S.range;
            return new Promise(function(F, U) {
              F = Oe(F);
              var M = x.objectStore(b), q = M.keyPath == null, G = C === "put" || C === "add";
              if (!G && C !== "delete" && C !== "deleteRange") throw new Error("Invalid operation type: " + C);
              var V, W = (O || P || { length: 1 }).length;
              if (O && P && O.length !== P.length) throw new Error("Given keys array must have same length as given values array.");
              if (W === 0) return F({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function ce(Qe) {
                ++Pe, vn(Qe);
              }
              var ye = [], ae = [], Pe = 0;
              if (C === "deleteRange") {
                if (D.type === 4) return F({ numFailures: Pe, failures: ae, results: [], lastResult: void 0 });
                D.type === 3 ? ye.push(V = M.clear()) : ye.push(V = M.delete(o(D)));
              } else {
                var q = G ? q ? [P, O] : [P, null] : [O, null], se = q[0], Ge = q[1];
                if (G) for (var He = 0; He < W; ++He) ye.push(V = Ge && Ge[He] !== void 0 ? M[C](se[He], Ge[He]) : M[C](se[He])), V.onerror = ce;
                else for (He = 0; He < W; ++He) ye.push(V = M[C](se[He])), V.onerror = ce;
              }
              function nr(Qe) {
                Qe = Qe.target.result, ye.forEach(function(Yt, Yr) {
                  return Yt.error != null && (ae[Yr] = Yt.error);
                }), F({ numFailures: Pe, failures: ae, results: C === "delete" ? O : ye.map(function(Yt) {
                  return Yt.result;
                }), lastResult: Qe });
              }
              V.onerror = function(Qe) {
                ce(Qe), nr(Qe);
              }, V.onsuccess = nr;
            });
          }, getMany: function(S) {
            var x = S.trans, C = S.keys;
            return new Promise(function(O, P) {
              O = Oe(O);
              for (var D, F = x.objectStore(b), U = C.length, M = new Array(U), q = 0, G = 0, V = function(ye) {
                ye = ye.target, M[ye._pos] = ye.result, ++G === q && O(M);
              }, W = ht(P), ce = 0; ce < U; ++ce) C[ce] != null && ((D = F.get(C[ce]))._pos = ce, D.onsuccess = V, D.onerror = W, ++q);
              q === 0 && O(M);
            });
          }, get: function(S) {
            var x = S.trans, C = S.key;
            return new Promise(function(O, P) {
              O = Oe(O);
              var D = x.objectStore(b).get(C);
              D.onsuccess = function(F) {
                return O(F.target.result);
              }, D.onerror = ht(P);
            });
          }, query: (y = v, function(S) {
            return new Promise(function(x, C) {
              x = Oe(x);
              var O, P, D, q = S.trans, F = S.values, U = S.limit, V = S.query, M = U === 1 / 0 ? void 0 : U, G = V.index, V = V.range, q = q.objectStore(b), G = G.isPrimaryKey ? q : q.index(G.name), V = o(V);
              if (U === 0) return x({ result: [] });
              y ? ((M = F ? G.getAll(V, M) : G.getAllKeys(V, M)).onsuccess = function(W) {
                return x({ result: W.target.result });
              }, M.onerror = ht(C)) : (O = 0, P = !F && "openKeyCursor" in G ? G.openKeyCursor(V) : G.openCursor(V), D = [], P.onsuccess = function(W) {
                var ce = P.result;
                return ce ? (D.push(F ? ce.value : ce.primaryKey), ++O === U ? x({ result: D }) : void ce.continue()) : x({ result: D });
              }, P.onerror = ht(C));
            });
          }), openCursor: function(S) {
            var x = S.trans, C = S.values, O = S.query, P = S.reverse, D = S.unique;
            return new Promise(function(F, U) {
              F = Oe(F);
              var G = O.index, M = O.range, q = x.objectStore(b), q = G.isPrimaryKey ? q : q.index(G.name), G = P ? D ? "prevunique" : "prev" : D ? "nextunique" : "next", V = !C && "openKeyCursor" in q ? q.openKeyCursor(o(M), G) : q.openCursor(o(M), G);
              V.onerror = ht(U), V.onsuccess = Oe(function(W) {
                var ce, ye, ae, Pe, se = V.result;
                se ? (se.___id = ++zo, se.done = !1, ce = se.continue.bind(se), ye = (ye = se.continuePrimaryKey) && ye.bind(se), ae = se.advance.bind(se), Pe = function() {
                  throw new Error("Cursor not stopped");
                }, se.trans = x, se.stop = se.continue = se.continuePrimaryKey = se.advance = function() {
                  throw new Error("Cursor not started");
                }, se.fail = Oe(U), se.next = function() {
                  var Ge = this, He = 1;
                  return this.start(function() {
                    return He-- ? Ge.continue() : Ge.stop();
                  }).then(function() {
                    return Ge;
                  });
                }, se.start = function(Ge) {
                  function He() {
                    if (V.result) try {
                      Ge();
                    } catch (Qe) {
                      se.fail(Qe);
                    }
                    else se.done = !0, se.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, se.stop();
                  }
                  var nr = new Promise(function(Qe, Yt) {
                    Qe = Oe(Qe), V.onerror = ht(Yt), se.fail = Yt, se.stop = function(Yr) {
                      se.stop = se.continue = se.continuePrimaryKey = se.advance = Pe, Qe(Yr);
                    };
                  });
                  return V.onsuccess = Oe(function(Qe) {
                    V.onsuccess = He, He();
                  }), se.continue = ce, se.continuePrimaryKey = ye, se.advance = ae, He(), nr;
                }, F(se)) : F(null);
              }, U);
            });
          }, count: function(S) {
            var x = S.query, C = S.trans, O = x.index, P = x.range;
            return new Promise(function(D, F) {
              var U = C.objectStore(b), M = O.isPrimaryKey ? U : U.index(O.name), U = o(P), M = U ? M.count(U) : M.count();
              M.onsuccess = Oe(function(q) {
                return D(q.target.result);
              }), M.onerror = ht(F);
            });
          } };
        }
        var c, f, p, w = (f = m, p = Ii((c = e).objectStoreNames), { schema: { name: c.name, tables: p.map(function(E) {
          return f.objectStore(E);
        }).map(function(E) {
          var y = E.keyPath, x = E.autoIncrement, b = T(y), S = {}, x = { name: E.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: y == null, compound: b, keyPath: y, autoIncrement: x, unique: !0, extractKey: Nr(y) }, indexes: Ii(E.indexNames).map(function(C) {
            return E.index(C);
          }).map(function(D) {
            var O = D.name, P = D.unique, F = D.multiEntry, D = D.keyPath, F = { name: O, compound: T(D), keyPath: D, unique: P, multiEntry: F, extractKey: Nr(D) };
            return S[_n(D)] = F;
          }), getIndexByKeyPath: function(C) {
            return S[_n(C)];
          } };
          return S[":id"] = x.primaryKey, y != null && (S[_n(y)] = x.primaryKey), x;
        }) }, hasGetAll: 0 < p.length && "getAll" in f.objectStore(p[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), m = w.schema, v = w.hasGetAll, w = m.tables.map(s), h = {};
        return w.forEach(function(E) {
          return h[E.name] = E;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(E) {
          if (!h[E]) throw new Error("Table '".concat(E, "' not found"));
          return h[E];
        }, MIN_KEY: -1 / 0, MAX_KEY: bn(t), schema: m };
      }
      function Zo(e, t, r, o) {
        var s = r.IDBKeyRange;
        return r.indexedDB, { dbcore: (o = Jo(t, s, o), e.dbcore.reduce(function(c, f) {
          return f = f.create, u(u({}, c), f(c));
        }, o)) };
      }
      function Gn(e, o) {
        var r = o.db, o = Zo(e._middlewares, r, e._deps, o);
        e.core = o.dbcore, e.tables.forEach(function(s) {
          var c = s.name;
          e.core.schema.tables.some(function(f) {
            return f.name === c;
          }) && (s.core = e.core.table(c), e[c] instanceof e.Table && (e[c].core = s.core));
        });
      }
      function Hn(e, t, r, o) {
        r.forEach(function(s) {
          var c = o[s];
          t.forEach(function(f) {
            var p = function m(v, w) {
              return he(v, w) || (v = $(v)) && m(v, w);
            }(f, s);
            (!p || "value" in p && p.value === void 0) && (f === e.Transaction.prototype || f instanceof e.Transaction ? pe(f, s, { get: function() {
              return this.table(s);
            }, set: function(m) {
              ie(this, s, { value: m, writable: !0, configurable: !0, enumerable: !0 });
            } }) : f[s] = new e.Table(s, c));
          });
        });
      }
      function Pr(e, t) {
        t.forEach(function(r) {
          for (var o in r) r[o] instanceof e.Table && delete r[o];
        });
      }
      function es(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function ts(e, t, r, o) {
        var s = e._dbSchema;
        r.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = Or("$meta", Ni("")[0], []), e._storeNames.push("$meta"));
        var c = e._createTransaction("readwrite", e._storeNames, s);
        c.create(r), c._completion.catch(o);
        var f = c._reject.bind(c), p = X.transless || X;
        It(function() {
          return X.trans = c, X.transless = p, t !== 0 ? (Gn(e, r), v = t, ((m = c).storeNames.includes("$meta") ? m.table("$meta").get("version").then(function(w) {
            return w ?? v;
          }) : H.resolve(v)).then(function(w) {
            return E = w, y = c, b = r, S = [], w = (h = e)._versions, x = h._dbSchema = Yn(0, h.idbdb, b), (w = w.filter(function(C) {
              return C._cfg.version >= E;
            })).length !== 0 ? (w.forEach(function(C) {
              S.push(function() {
                var O = x, P = C._cfg.dbschema;
                Xn(h, O, b), Xn(h, P, b), x = h._dbSchema = P;
                var D = Dr(O, P);
                D.add.forEach(function(G) {
                  Rr(b, G[0], G[1].primKey, G[1].indexes);
                }), D.change.forEach(function(G) {
                  if (G.recreate) throw new R.Upgrade("Not yet support for changing primary key");
                  var V = b.objectStore(G.name);
                  G.add.forEach(function(W) {
                    return Wn(V, W);
                  }), G.change.forEach(function(W) {
                    V.deleteIndex(W.name), Wn(V, W);
                  }), G.del.forEach(function(W) {
                    return V.deleteIndex(W);
                  });
                });
                var F = C._cfg.contentUpgrade;
                if (F && C._cfg.version > E) {
                  Gn(h, b), y._memoizedTables = {};
                  var U = Te(P);
                  D.del.forEach(function(G) {
                    U[G] = O[G];
                  }), Pr(h, [h.Transaction.prototype]), Hn(h, [h.Transaction.prototype], g(U), U), y.schema = U;
                  var M, q = lt(F);
                  return q && sn(), D = H.follow(function() {
                    var G;
                    (M = F(y)) && q && (G = Ot.bind(null, null), M.then(G, G));
                  }), M && typeof M.then == "function" ? H.resolve(M) : D.then(function() {
                    return M;
                  });
                }
              }), S.push(function(O) {
                var P, D, F = C._cfg.dbschema;
                P = F, D = O, [].slice.call(D.db.objectStoreNames).forEach(function(U) {
                  return P[U] == null && D.db.deleteObjectStore(U);
                }), Pr(h, [h.Transaction.prototype]), Hn(h, [h.Transaction.prototype], h._storeNames, h._dbSchema), y.schema = h._dbSchema;
              }), S.push(function(O) {
                h.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(h.idbdb.version / 10) === C._cfg.version ? (h.idbdb.deleteObjectStore("$meta"), delete h._dbSchema.$meta, h._storeNames = h._storeNames.filter(function(P) {
                  return P !== "$meta";
                })) : O.objectStore("$meta").put(C._cfg.version, "version"));
              });
            }), function C() {
              return S.length ? H.resolve(S.shift()(y.idbtrans)).then(C) : H.resolve();
            }().then(function() {
              Oi(x, b);
            })) : H.resolve();
            var h, E, y, b, S, x;
          }).catch(f)) : (g(s).forEach(function(w) {
            Rr(r, w, s[w].primKey, s[w].indexes);
          }), Gn(e, r), void H.follow(function() {
            return e.on.populate.fire(c);
          }).catch(f));
          var m, v;
        });
      }
      function ns(e, t) {
        Oi(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var r = Yn(0, e.idbdb, t);
        Xn(e, e._dbSchema, t);
        for (var o = 0, s = Dr(r, e._dbSchema).change; o < s.length; o++) {
          var c = function(f) {
            if (f.change.length || f.recreate) return console.warn("Unable to patch indexes of table ".concat(f.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var p = t.objectStore(f.name);
            f.add.forEach(function(m) {
              Z && console.debug("Dexie upgrade patch: Creating missing index ".concat(f.name, ".").concat(m.src)), Wn(p, m);
            });
          }(s[o]);
          if (typeof c == "object") return c.value;
        }
      }
      function Dr(e, t) {
        var r, o = { del: [], add: [], change: [] };
        for (r in e) t[r] || o.del.push(r);
        for (r in t) {
          var s = e[r], c = t[r];
          if (s) {
            var f = { name: r, def: c, recreate: !1, del: [], add: [], change: [] };
            if ("" + (s.primKey.keyPath || "") != "" + (c.primKey.keyPath || "") || s.primKey.auto !== c.primKey.auto) f.recreate = !0, o.change.push(f);
            else {
              var p = s.idxByName, m = c.idxByName, v = void 0;
              for (v in p) m[v] || f.del.push(v);
              for (v in m) {
                var w = p[v], h = m[v];
                w ? w.src !== h.src && f.change.push(h) : f.add.push(h);
              }
              (0 < f.del.length || 0 < f.add.length || 0 < f.change.length) && o.change.push(f);
            }
          } else o.add.push([r, c]);
        }
        return o;
      }
      function Rr(e, t, r, o) {
        var s = e.db.createObjectStore(t, r.keyPath ? { keyPath: r.keyPath, autoIncrement: r.auto } : { autoIncrement: r.auto });
        return o.forEach(function(c) {
          return Wn(s, c);
        }), s;
      }
      function Oi(e, t) {
        g(e).forEach(function(r) {
          t.db.objectStoreNames.contains(r) || (Z && console.debug("Dexie: Creating missing table", r), Rr(t, r, e[r].primKey, e[r].indexes));
        });
      }
      function Wn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function Yn(e, t, r) {
        var o = {};
        return Ce(t.objectStoreNames, 0).forEach(function(s) {
          for (var c = r.objectStore(s), f = Ir(Ai(v = c.keyPath), v || "", !0, !1, !!c.autoIncrement, v && typeof v != "string", !0), p = [], m = 0; m < c.indexNames.length; ++m) {
            var w = c.index(c.indexNames[m]), v = w.keyPath, w = Ir(w.name, v, !!w.unique, !!w.multiEntry, !1, v && typeof v != "string", !1);
            p.push(w);
          }
          o[s] = Or(s, f, p);
        }), o;
      }
      function Xn(e, t, r) {
        for (var o = r.db.objectStoreNames, s = 0; s < o.length; ++s) {
          var c = o[s], f = r.objectStore(c);
          e._hasGetAll = "getAll" in f;
          for (var p = 0; p < f.indexNames.length; ++p) {
            var m = f.indexNames[p], v = f.index(m).keyPath, w = typeof v == "string" ? v : "[" + Ce(v).join("+") + "]";
            !t[c] || (v = t[c].idxByName[w]) && (v.name = m, delete t[c].idxByName[w], t[c].idxByName[m] = v);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && d.WorkerGlobalScope && d instanceof d.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Ni(e) {
        return e.split(",").map(function(t, r) {
          var c = t.split(":"), o = (s = c[1]) === null || s === void 0 ? void 0 : s.trim(), s = (t = c[0].trim()).replace(/([&*]|\+\+)/g, ""), c = /^\[/.test(s) ? s.match(/^\[(.*)\]$/)[1].split("+") : s;
          return Ir(s, c || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), T(c), r === 0, o);
        });
      }
      var rs = (ln.prototype._createTableSchema = Or, ln.prototype._parseIndexSyntax = Ni, ln.prototype._parseStoresSpec = function(e, t) {
        var r = this;
        g(e).forEach(function(o) {
          if (e[o] !== null) {
            var s = r._parseIndexSyntax(e[o]), c = s.shift();
            if (!c) throw new R.Schema("Invalid schema for table " + o + ": " + e[o]);
            if (c.unique = !0, c.multi) throw new R.Schema("Primary key cannot be multiEntry*");
            s.forEach(function(f) {
              if (f.auto) throw new R.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!f.keyPath) throw new R.Schema("Index must have a name and cannot be an empty string");
            }), s = r._createTableSchema(o, c, s), t[o] = s;
          }
        });
      }, ln.prototype.stores = function(r) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? N(this._cfg.storesSource, r) : r;
        var r = t._versions, o = {}, s = {};
        return r.forEach(function(c) {
          N(o, c._cfg.storesSource), s = c._cfg.dbschema = {}, c._parseStoresSpec(o, s);
        }), t._dbSchema = s, Pr(t, [t._allTables, t, t.Transaction.prototype]), Hn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], g(s), s), t._storeNames = g(s), this;
      }, ln.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = oe(this._cfg.contentUpgrade || A, e), this;
      }, ln);
      function ln() {
      }
      function kr(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new wt(Bn, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function jr(e) {
        return e && typeof e.databases == "function";
      }
      function Fr(e) {
        return It(function() {
          return X.letThrough = !0, e();
        });
      }
      function Kr(e) {
        return !("from" in e);
      }
      var Ve = function(e, t) {
        if (!this) {
          var r = new Ve();
          return e && "d" in e && N(r, e), r;
        }
        N(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function wn(e, t, r) {
        var o = me(t, r);
        if (!isNaN(o)) {
          if (0 < o) throw RangeError();
          if (Kr(e)) return N(e, { from: t, to: r, d: 1 });
          var s = e.l, o = e.r;
          if (me(r, e.from) < 0) return s ? wn(s, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, Di(e);
          if (0 < me(t, e.to)) return o ? wn(o, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, Di(e);
          me(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < me(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, s && !e.l && xn(e, s), o && r && xn(e, o);
        }
      }
      function xn(e, t) {
        Kr(t) || function r(o, m) {
          var c = m.from, f = m.to, p = m.l, m = m.r;
          wn(o, c, f), p && r(o, p), m && r(o, m);
        }(e, t);
      }
      function Pi(e, t) {
        var r = Qn(t), o = r.next();
        if (o.done) return !1;
        for (var s = o.value, c = Qn(e), f = c.next(s.from), p = f.value; !o.done && !f.done; ) {
          if (me(p.from, s.to) <= 0 && 0 <= me(p.to, s.from)) return !0;
          me(s.from, p.from) < 0 ? s = (o = r.next(p.from)).value : p = (f = c.next(s.from)).value;
        }
        return !1;
      }
      function Qn(e) {
        var t = Kr(e) ? null : { s: 0, n: e };
        return { next: function(r) {
          for (var o = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, o) for (; t.n.l && me(r, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !o || me(r, t.n.to) <= 0) return { value: t.n, done: !1 };
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
      function Di(e) {
        var t, r, o = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((r = e.l) === null || r === void 0 ? void 0 : r.d) || 0), s = 1 < o ? "r" : o < -1 ? "l" : "";
        s && (t = s == "r" ? "l" : "r", r = u({}, e), o = e[s], e.from = o.from, e.to = o.to, e[s] = o[s], r[s] = o[t], (e[t] = r).d = Ri(r)), e.d = Ri(e);
      }
      function Ri(r) {
        var t = r.r, r = r.l;
        return (t ? r ? Math.max(t.d, r.d) : t.d : r ? r.d : 0) + 1;
      }
      function zn(e, t) {
        return g(t).forEach(function(r) {
          e[r] ? xn(e[r], t[r]) : e[r] = function o(s) {
            var c, f, p = {};
            for (c in s) L(s, c) && (f = s[c], p[c] = !f || typeof f != "object" || ft.has(f.constructor) ? f : o(f));
            return p;
          }(t[r]);
        }), e;
      }
      function Mr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && Pi(t[r], e[r]);
        });
      }
      z(Ve.prototype, ((ct = { add: function(e) {
        return xn(this, e), this;
      }, addKey: function(e) {
        return wn(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(r) {
          return wn(t, r, r);
        }), this;
      }, hasKey: function(e) {
        var t = Qn(this).next(e).value;
        return t && me(t.from, e) <= 0 && 0 <= me(t.to, e);
      } })[et] = function() {
        return Qn(this);
      }, ct));
      var Ht = {}, Br = {}, qr = !1;
      function Jn(e) {
        zn(Br, e), qr || (qr = !0, setTimeout(function() {
          qr = !1, Lr(Br, !(Br = {}));
        }, 0));
      }
      function Lr(e, t) {
        t === void 0 && (t = !1);
        var r = /* @__PURE__ */ new Set();
        if (e.all) for (var o = 0, s = Object.values(Ht); o < s.length; o++) ki(f = s[o], e, r, t);
        else for (var c in e) {
          var f, p = /^idb\:\/\/(.*)\/(.*)\//.exec(c);
          p && (c = p[1], p = p[2], (f = Ht["idb://".concat(c, "/").concat(p)]) && ki(f, e, r, t));
        }
        r.forEach(function(m) {
          return m();
        });
      }
      function ki(e, t, r, o) {
        for (var s = [], c = 0, f = Object.entries(e.queries.query); c < f.length; c++) {
          for (var p = f[c], m = p[0], v = [], w = 0, h = p[1]; w < h.length; w++) {
            var E = h[w];
            Mr(t, E.obsSet) ? E.subscribers.forEach(function(x) {
              return r.add(x);
            }) : o && v.push(E);
          }
          o && s.push([m, v]);
        }
        if (o) for (var y = 0, b = s; y < b.length; y++) {
          var S = b[y], m = S[0], v = S[1];
          e.queries.query[m] = v;
        }
      }
      function is(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? De(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, s = Math.round(10 * e.verno), c = !1;
        function f() {
          if (t.openCanceller !== o) throw new R.DatabaseClosed("db.open() was cancelled");
        }
        function p() {
          return new H(function(E, y) {
            if (f(), !r) throw new R.MissingAPI();
            var b = e.name, S = t.autoSchema || !s ? r.open(b) : r.open(b, s);
            if (!S) throw new R.MissingAPI();
            S.onerror = ht(y), S.onblocked = Oe(e._fireOnBlocked), S.onupgradeneeded = Oe(function(x) {
              var C;
              w = S.transaction, t.autoSchema && !e._options.allowEmptyDB ? (S.onerror = vn, w.abort(), S.result.close(), (C = r.deleteDatabase(b)).onsuccess = C.onerror = Oe(function() {
                y(new R.NoSuchDatabase("Database ".concat(b, " doesnt exist")));
              })) : (w.onerror = ht(y), x = x.oldVersion > Math.pow(2, 62) ? 0 : x.oldVersion, h = x < 1, e.idbdb = S.result, c && ns(e, w), ts(e, x / 10, w, y));
            }, y), S.onsuccess = Oe(function() {
              w = null;
              var x, C, O, P, D, F = e.idbdb = S.result, U = Ce(F.objectStoreNames);
              if (0 < U.length) try {
                var M = F.transaction((P = U).length === 1 ? P[0] : P, "readonly");
                if (t.autoSchema) C = F, O = M, (x = e).verno = C.version / 10, O = x._dbSchema = Yn(0, C, O), x._storeNames = Ce(C.objectStoreNames, 0), Hn(x, [x._allTables], g(O), O);
                else if (Xn(e, e._dbSchema, M), ((D = Dr(Yn(0, (D = e).idbdb, M), D._dbSchema)).add.length || D.change.some(function(q) {
                  return q.add.length || q.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), F.close(), s = F.version + 1, c = !0, E(p());
                Gn(e, M);
              } catch {
              }
              an.push(e), F.onversionchange = Oe(function(q) {
                t.vcFired = !0, e.on("versionchange").fire(q);
              }), F.onclose = Oe(function(q) {
                e.on("close").fire(q);
              }), h && (D = e._deps, M = b, F = D.indexedDB, D = D.IDBKeyRange, jr(F) || M === Bn || kr(F, D).put({ name: M }).catch(A)), E();
            }, y);
          }).catch(function(E) {
            switch (E?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), p();
                break;
              case "VersionError":
                if (0 < s) return s = 0, p();
            }
            return H.reject(E);
          });
        }
        var m, v = t.dbReadyResolve, w = null, h = !1;
        return H.race([o, (typeof navigator > "u" ? H.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(E) {
          function y() {
            return indexedDB.databases().finally(E);
          }
          m = setInterval(y, 100), y();
        }).finally(function() {
          return clearInterval(m);
        }) : Promise.resolve()).then(p)]).then(function() {
          return f(), t.onReadyBeingFired = [], H.resolve(Fr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function E() {
            if (0 < t.onReadyBeingFired.length) {
              var y = t.onReadyBeingFired.reduce(oe, A);
              return t.onReadyBeingFired = [], H.resolve(Fr(function() {
                return y(e.vip);
              })).then(E);
            }
          });
        }).finally(function() {
          t.openCanceller === o && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(E) {
          t.dbOpenError = E;
          try {
            w && w.abort();
          } catch {
          }
          return o === t.openCanceller && e._close(), De(E);
        }).finally(function() {
          t.openComplete = !0, v();
        }).then(function() {
          var E;
          return h && (E = {}, e.tables.forEach(function(y) {
            y.schema.indexes.forEach(function(b) {
              b.name && (E["idb://".concat(e.name, "/").concat(y.name, "/").concat(b.name)] = new Ve(-1 / 0, [[[]]]));
            }), E["idb://".concat(e.name, "/").concat(y.name, "/")] = E["idb://".concat(e.name, "/").concat(y.name, "/:dels")] = new Ve(-1 / 0, [[[]]]);
          }), Dt(gn).fire(E), Lr(E, !0)), e;
        });
      }
      function $r(e) {
        function t(c) {
          return e.next(c);
        }
        var r = s(t), o = s(function(c) {
          return e.throw(c);
        });
        function s(c) {
          return function(m) {
            var p = c(m), m = p.value;
            return p.done ? m : m && typeof m.then == "function" ? m.then(r, o) : T(m) ? Promise.all(m).then(r, o) : r(m);
          };
        }
        return s(t)();
      }
      function Zn(e, t, r) {
        for (var o = T(e) ? e.slice() : [e], s = 0; s < r; ++s) o.push(t);
        return o;
      }
      var os = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema, s = {}, c = [];
          function f(h, E, y) {
            var b = _n(h), S = s[b] = s[b] || [], x = h == null ? 0 : typeof h == "string" ? 1 : h.length, C = 0 < E, C = u(u({}, y), { name: C ? "".concat(b, "(virtual-from:").concat(y.name, ")") : y.name, lowLevelIndex: y, isVirtual: C, keyTail: E, keyLength: x, extractKey: Nr(h), unique: !C && y.unique });
            return S.push(C), C.isPrimaryKey || c.push(C), 1 < x && f(x === 2 ? h[0] : h.slice(0, x - 1), E + 1, y), S.sort(function(O, P) {
              return O.keyTail - P.keyTail;
            }), C;
          }
          t = f(o.primaryKey.keyPath, 0, o.primaryKey), s[":id"] = [t];
          for (var p = 0, m = o.indexes; p < m.length; p++) {
            var v = m[p];
            f(v.keyPath, 0, v);
          }
          function w(h) {
            var E, y = h.query.index;
            return y.isVirtual ? u(u({}, h), { query: { index: y.lowLevelIndex, range: (E = h.query.range, y = y.keyTail, { type: E.type === 1 ? 2 : E.type, lower: Zn(E.lower, E.lowerOpen ? e.MAX_KEY : e.MIN_KEY, y), lowerOpen: !0, upper: Zn(E.upper, E.upperOpen ? e.MIN_KEY : e.MAX_KEY, y), upperOpen: !0 }) } }) : h;
          }
          return u(u({}, r), { schema: u(u({}, o), { primaryKey: t, indexes: c, getIndexByKeyPath: function(h) {
            return (h = s[_n(h)]) && h[0];
          } }), count: function(h) {
            return r.count(w(h));
          }, query: function(h) {
            return r.query(w(h));
          }, openCursor: function(h) {
            var E = h.query.index, y = E.keyTail, b = E.isVirtual, S = E.keyLength;
            return b ? r.openCursor(w(h)).then(function(C) {
              return C && x(C);
            }) : r.openCursor(h);
            function x(C) {
              return Object.create(C, { continue: { value: function(O) {
                O != null ? C.continue(Zn(O, h.reverse ? e.MAX_KEY : e.MIN_KEY, y)) : h.unique ? C.continue(C.key.slice(0, S).concat(h.reverse ? e.MIN_KEY : e.MAX_KEY, y)) : C.continue();
              } }, continuePrimaryKey: { value: function(O, P) {
                C.continuePrimaryKey(Zn(O, e.MAX_KEY, y), P);
              } }, primaryKey: { get: function() {
                return C.primaryKey;
              } }, key: { get: function() {
                var O = C.key;
                return S === 1 ? O[0] : O.slice(0, S);
              } }, value: { get: function() {
                return C.value;
              } } });
            }
          } });
        } });
      } };
      function Ur(e, t, r, o) {
        return r = r || {}, o = o || "", g(e).forEach(function(s) {
          var c, f, p;
          L(t, s) ? (c = e[s], f = t[s], typeof c == "object" && typeof f == "object" && c && f ? (p = Et(c)) !== Et(f) ? r[o + s] = t[s] : p === "Object" ? Ur(c, f, r, o + s + ".") : c !== f && (r[o + s] = t[s]) : c !== f && (r[o + s] = t[s])) : r[o + s] = void 0;
        }), g(t).forEach(function(s) {
          L(e, s) || (r[o + s] = t[s]);
        }), r;
      }
      function Vr(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var ss = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema.primaryKey;
          return u(u({}, r), { mutate: function(s) {
            var c = X.trans, f = c.table(t).hook, p = f.deleting, m = f.creating, v = f.updating;
            switch (s.type) {
              case "add":
                if (m.fire === A) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "put":
                if (m.fire === A && v.fire === A) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "delete":
                if (p.fire === A) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "deleteRange":
                if (p.fire === A) break;
                return c._promise("readwrite", function() {
                  return function h(E, y, b) {
                    return r.query({ trans: E, values: !1, query: { index: o, range: y }, limit: b }).then(function(S) {
                      var x = S.result;
                      return w({ type: "delete", keys: x, trans: E }).then(function(C) {
                        return 0 < C.numFailures ? Promise.reject(C.failures[0]) : x.length < b ? { failures: [], numFailures: 0, lastResult: void 0 } : h(E, u(u({}, y), { lower: x[x.length - 1], lowerOpen: !0 }), b);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return r.mutate(s);
            function w(h) {
              var E, y, b, S = X.trans, x = h.keys || Vr(o, h);
              if (!x) throw new Error("Keys missing");
              return (h = h.type === "add" || h.type === "put" ? u(u({}, h), { keys: x }) : u({}, h)).type !== "delete" && (h.values = l([], h.values)), h.keys && (h.keys = l([], h.keys)), E = r, b = x, ((y = h).type === "add" ? Promise.resolve([]) : E.getMany({ trans: y.trans, keys: b, cache: "immutable" })).then(function(C) {
                var O = x.map(function(P, D) {
                  var F, U, M, q = C[D], G = { onerror: null, onsuccess: null };
                  return h.type === "delete" ? p.fire.call(G, P, q, S) : h.type === "add" || q === void 0 ? (F = m.fire.call(G, P, h.values[D], S), P == null && F != null && (h.keys[D] = P = F, o.outbound || te(h.values[D], o.keyPath, P))) : (F = Ur(q, h.values[D]), (U = v.fire.call(G, F, P, q, S)) && (M = h.values[D], Object.keys(U).forEach(function(V) {
                    L(M, V) ? M[V] = U[V] : te(M, V, U[V]);
                  }))), G;
                });
                return r.mutate(h).then(function(P) {
                  for (var D = P.failures, F = P.results, U = P.numFailures, P = P.lastResult, M = 0; M < x.length; ++M) {
                    var q = (F || x)[M], G = O[M];
                    q == null ? G.onerror && G.onerror(D[M]) : G.onsuccess && G.onsuccess(h.type === "put" && C[M] ? h.values[M] : q);
                  }
                  return { failures: D, results: F, numFailures: U, lastResult: P };
                }).catch(function(P) {
                  return O.forEach(function(D) {
                    return D.onerror && D.onerror(P);
                  }), Promise.reject(P);
                });
              });
            }
          } });
        } });
      } };
      function ji(e, t, r) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var o = [], s = 0, c = 0; s < t.keys.length && c < e.length; ++s) me(t.keys[s], e[c]) === 0 && (o.push(r ? ze(t.values[s]) : t.values[s]), ++c);
          return o.length === e.length ? o : null;
        } catch {
          return null;
        }
      }
      var as = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var r = e.table(t);
          return u(u({}, r), { getMany: function(o) {
            if (!o.cache) return r.getMany(o);
            var s = ji(o.keys, o.trans._cache, o.cache === "clone");
            return s ? H.resolve(s) : r.getMany(o).then(function(c) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? ze(c) : c }, c;
            });
          }, mutate: function(o) {
            return o.type !== "add" && (o.trans._cache = null), r.mutate(o);
          } });
        } };
      } };
      function Fi(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Ki(e, t) {
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
      var us = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, r = new Ve(e.MIN_KEY, e.MAX_KEY);
        return u(u({}, e), { transaction: function(o, s, c) {
          if (X.subscr && s !== "readonly") throw new R.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(X.querier));
          return e.transaction(o, s, c);
        }, table: function(o) {
          var s = e.table(o), c = s.schema, f = c.primaryKey, h = c.indexes, p = f.extractKey, m = f.outbound, v = f.autoIncrement && h.filter(function(y) {
            return y.compound && y.keyPath.includes(f.keyPath);
          }), w = u(u({}, s), { mutate: function(y) {
            function b(V) {
              return V = "idb://".concat(t, "/").concat(o, "/").concat(V), P[V] || (P[V] = new Ve());
            }
            var S, x, C, O = y.trans, P = y.mutatedParts || (y.mutatedParts = {}), D = b(""), F = b(":dels"), U = y.type, G = y.type === "deleteRange" ? [y.range] : y.type === "delete" ? [y.keys] : y.values.length < 50 ? [Vr(f, y).filter(function(V) {
              return V;
            }), y.values] : [], M = G[0], q = G[1], G = y.trans._cache;
            return T(M) ? (D.addKeys(M), (G = U === "delete" || M.length === q.length ? ji(M, G) : null) || F.addKeys(M), (G || q) && (S = b, x = G, C = q, c.indexes.forEach(function(V) {
              var W = S(V.name || "");
              function ce(ae) {
                return ae != null ? V.extractKey(ae) : null;
              }
              function ye(ae) {
                return V.multiEntry && T(ae) ? ae.forEach(function(Pe) {
                  return W.addKey(Pe);
                }) : W.addKey(ae);
              }
              (x || C).forEach(function(ae, Ge) {
                var se = x && ce(x[Ge]), Ge = C && ce(C[Ge]);
                me(se, Ge) !== 0 && (se != null && ye(se), Ge != null && ye(Ge));
              });
            }))) : M ? (q = { from: (q = M.lower) !== null && q !== void 0 ? q : e.MIN_KEY, to: (q = M.upper) !== null && q !== void 0 ? q : e.MAX_KEY }, F.add(q), D.add(q)) : (D.add(r), F.add(r), c.indexes.forEach(function(V) {
              return b(V.name).add(r);
            })), s.mutate(y).then(function(V) {
              return !M || y.type !== "add" && y.type !== "put" || (D.addKeys(V.results), v && v.forEach(function(W) {
                for (var ce = y.values.map(function(se) {
                  return W.extractKey(se);
                }), ye = W.keyPath.findIndex(function(se) {
                  return se === f.keyPath;
                }), ae = 0, Pe = V.results.length; ae < Pe; ++ae) ce[ae][ye] = V.results[ae];
                b(W.name).addKeys(ce);
              })), O.mutatedParts = zn(O.mutatedParts || {}, P), V;
            });
          } }), h = function(b) {
            var S = b.query, b = S.index, S = S.range;
            return [b, new Ve((b = S.lower) !== null && b !== void 0 ? b : e.MIN_KEY, (S = S.upper) !== null && S !== void 0 ? S : e.MAX_KEY)];
          }, E = { get: function(y) {
            return [f, new Ve(y.key)];
          }, getMany: function(y) {
            return [f, new Ve().addKeys(y.keys)];
          }, count: h, query: h, openCursor: h };
          return g(E).forEach(function(y) {
            w[y] = function(b) {
              var S = X.subscr, x = !!S, C = Fi(X, s) && Ki(y, b) ? b.obsSet = {} : S;
              if (x) {
                var O = function(q) {
                  return q = "idb://".concat(t, "/").concat(o, "/").concat(q), C[q] || (C[q] = new Ve());
                }, P = O(""), D = O(":dels"), S = E[y](b), x = S[0], S = S[1];
                if ((y === "query" && x.isPrimaryKey && !b.values ? D : O(x.name || "")).add(S), !x.isPrimaryKey) {
                  if (y !== "count") {
                    var F = y === "query" && m && b.values && s.query(u(u({}, b), { values: !1 }));
                    return s[y].apply(this, arguments).then(function(q) {
                      if (y === "query") {
                        if (m && b.values) return F.then(function(ce) {
                          return ce = ce.result, P.addKeys(ce), q;
                        });
                        var G = b.values ? q.result.map(p) : q.result;
                        (b.values ? P : D).addKeys(G);
                      } else if (y === "openCursor") {
                        var V = q, W = b.values;
                        return V && Object.create(V, { key: { get: function() {
                          return D.addKey(V.primaryKey), V.key;
                        } }, primaryKey: { get: function() {
                          var ce = V.primaryKey;
                          return D.addKey(ce), ce;
                        } }, value: { get: function() {
                          return W && P.addKey(V.primaryKey), V.value;
                        } } });
                      }
                      return q;
                    });
                  }
                  D.add(r);
                }
              }
              return s[y].apply(this, arguments);
            };
          }), w;
        } });
      } };
      function Mi(e, t, r) {
        if (r.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var o = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return r.numFailures === o ? null : (t = u({}, t), T(t.keys) && (t.keys = t.keys.filter(function(s, c) {
          return !(c in r.failures);
        })), "values" in t && T(t.values) && (t.values = t.values.filter(function(s, c) {
          return !(c in r.failures);
        })), t);
      }
      function Gr(e, t) {
        return r = e, ((o = t).lower === void 0 || (o.lowerOpen ? 0 < me(r, o.lower) : 0 <= me(r, o.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? me(e, t.upper) < 0 : me(e, t.upper) <= 0));
        var r, o;
      }
      function Bi(e, t, E, o, s, c) {
        if (!E || E.length === 0) return e;
        var f = t.query.index, p = f.multiEntry, m = t.query.range, v = o.schema.primaryKey.extractKey, w = f.extractKey, h = (f.lowLevelIndex || f).extractKey, E = E.reduce(function(y, b) {
          var S = y, x = [];
          if (b.type === "add" || b.type === "put") for (var C = new Ve(), O = b.values.length - 1; 0 <= O; --O) {
            var P, D = b.values[O], F = v(D);
            C.hasKey(F) || (P = w(D), (p && T(P) ? P.some(function(V) {
              return Gr(V, m);
            }) : Gr(P, m)) && (C.addKey(F), x.push(D)));
          }
          switch (b.type) {
            case "add":
              var U = new Ve().addKeys(t.values ? y.map(function(W) {
                return v(W);
              }) : y), S = y.concat(t.values ? x.filter(function(W) {
                return W = v(W), !U.hasKey(W) && (U.addKey(W), !0);
              }) : x.map(function(W) {
                return v(W);
              }).filter(function(W) {
                return !U.hasKey(W) && (U.addKey(W), !0);
              }));
              break;
            case "put":
              var M = new Ve().addKeys(b.values.map(function(W) {
                return v(W);
              }));
              S = y.filter(function(W) {
                return !M.hasKey(t.values ? v(W) : W);
              }).concat(t.values ? x : x.map(function(W) {
                return v(W);
              }));
              break;
            case "delete":
              var q = new Ve().addKeys(b.keys);
              S = y.filter(function(W) {
                return !q.hasKey(t.values ? v(W) : W);
              });
              break;
            case "deleteRange":
              var G = b.range;
              S = y.filter(function(W) {
                return !Gr(v(W), G);
              });
          }
          return S;
        }, e);
        return E === e ? e : (E.sort(function(y, b) {
          return me(h(y), h(b)) || me(v(y), v(b));
        }), t.limit && t.limit < 1 / 0 && (E.length > t.limit ? E.length = t.limit : e.length === t.limit && E.length < t.limit && (s.dirty = !0)), c ? Object.freeze(E) : E);
      }
      function qi(e, t) {
        return me(e.lower, t.lower) === 0 && me(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function cs(e, t) {
        return function(r, o, s, c) {
          if (r === void 0) return o !== void 0 ? -1 : 0;
          if (o === void 0) return 1;
          if ((o = me(r, o)) === 0) {
            if (s && c) return 0;
            if (s) return 1;
            if (c) return -1;
          }
          return o;
        }(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function(r, o, s, c) {
          if (r === void 0) return o !== void 0 ? 1 : 0;
          if (o === void 0) return -1;
          if ((o = me(r, o)) === 0) {
            if (s && c) return 0;
            if (s) return -1;
            if (c) return 1;
          }
          return o;
        }(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function ls(e, t, r, o) {
        e.subscribers.add(r), o.addEventListener("abort", function() {
          var s, c;
          e.subscribers.delete(r), e.subscribers.size === 0 && (s = e, c = t, setTimeout(function() {
            s.subscribers.size === 0 && Ne(c, s);
          }, 3e3));
        });
      }
      var fs = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return u(u({}, e), { transaction: function(r, o, s) {
          var c, f, p = e.transaction(r, o, s);
          return o === "readwrite" && (f = (c = new AbortController()).signal, s = function(m) {
            return function() {
              if (c.abort(), o === "readwrite") {
                for (var v = /* @__PURE__ */ new Set(), w = 0, h = r; w < h.length; w++) {
                  var E = h[w], y = Ht["idb://".concat(t, "/").concat(E)];
                  if (y) {
                    var b = e.table(E), S = y.optimisticOps.filter(function(W) {
                      return W.trans === p;
                    });
                    if (p._explicit && m && p.mutatedParts) for (var x = 0, C = Object.values(y.queries.query); x < C.length; x++) for (var O = 0, P = (U = C[x]).slice(); O < P.length; O++) Mr((M = P[O]).obsSet, p.mutatedParts) && (Ne(U, M), M.subscribers.forEach(function(W) {
                      return v.add(W);
                    }));
                    else if (0 < S.length) {
                      y.optimisticOps = y.optimisticOps.filter(function(W) {
                        return W.trans !== p;
                      });
                      for (var D = 0, F = Object.values(y.queries.query); D < F.length; D++) for (var U, M, q, G = 0, V = (U = F[D]).slice(); G < V.length; G++) (M = V[G]).res != null && p.mutatedParts && (m && !M.dirty ? (q = Object.isFrozen(M.res), q = Bi(M.res, M.req, S, b, M, q), M.dirty ? (Ne(U, M), M.subscribers.forEach(function(W) {
                        return v.add(W);
                      })) : q !== M.res && (M.res = q, M.promise = H.resolve({ result: q }))) : (M.dirty && Ne(U, M), M.subscribers.forEach(function(W) {
                        return v.add(W);
                      })));
                    }
                  }
                }
                v.forEach(function(W) {
                  return W();
                });
              }
            };
          }, p.addEventListener("abort", s(!1), { signal: f }), p.addEventListener("error", s(!1), { signal: f }), p.addEventListener("complete", s(!0), { signal: f })), p;
        }, table: function(r) {
          var o = e.table(r), s = o.schema.primaryKey;
          return u(u({}, o), { mutate: function(c) {
            var f = X.trans;
            if (s.outbound || f.db._options.cache === "disabled" || f.explicit || f.idbtrans.mode !== "readwrite") return o.mutate(c);
            var p = Ht["idb://".concat(t, "/").concat(r)];
            return p ? (f = o.mutate(c), c.type !== "add" && c.type !== "put" || !(50 <= c.values.length || Vr(s, c).some(function(m) {
              return m == null;
            })) ? (p.optimisticOps.push(c), c.mutatedParts && Jn(c.mutatedParts), f.then(function(m) {
              0 < m.numFailures && (Ne(p.optimisticOps, c), (m = Mi(0, c, m)) && p.optimisticOps.push(m), c.mutatedParts && Jn(c.mutatedParts));
            }), f.catch(function() {
              Ne(p.optimisticOps, c), c.mutatedParts && Jn(c.mutatedParts);
            })) : f.then(function(m) {
              var v = Mi(0, u(u({}, c), { values: c.values.map(function(w, h) {
                var E;
                return m.failures[h] || (w = (E = s.keyPath) !== null && E !== void 0 && E.includes(".") ? ze(w) : u({}, w), te(w, s.keyPath, m.results[h])), w;
              }) }), m);
              p.optimisticOps.push(v), queueMicrotask(function() {
                return c.mutatedParts && Jn(c.mutatedParts);
              });
            }), f) : o.mutate(c);
          }, query: function(c) {
            if (!Fi(X, o) || !Ki("query", c)) return o.query(c);
            var f = ((v = X.trans) === null || v === void 0 ? void 0 : v.db._options.cache) === "immutable", h = X, p = h.requery, m = h.signal, v = function(b, S, x, C) {
              var O = Ht["idb://".concat(b, "/").concat(S)];
              if (!O) return [];
              if (!(S = O.queries[x])) return [null, !1, O, null];
              var P = S[(C.query ? C.query.index.name : null) || ""];
              if (!P) return [null, !1, O, null];
              switch (x) {
                case "query":
                  var D = P.find(function(F) {
                    return F.req.limit === C.limit && F.req.values === C.values && qi(F.req.query.range, C.query.range);
                  });
                  return D ? [D, !0, O, P] : [P.find(function(F) {
                    return ("limit" in F.req ? F.req.limit : 1 / 0) >= C.limit && (!C.values || F.req.values) && cs(F.req.query.range, C.query.range);
                  }), !1, O, P];
                case "count":
                  return D = P.find(function(F) {
                    return qi(F.req.query.range, C.query.range);
                  }), [D, !!D, O, P];
              }
            }(t, r, "query", c), w = v[0], h = v[1], E = v[2], y = v[3];
            return w && h ? w.obsSet = c.obsSet : (h = o.query(c).then(function(b) {
              var S = b.result;
              if (w && (w.res = S), f) {
                for (var x = 0, C = S.length; x < C; ++x) Object.freeze(S[x]);
                Object.freeze(S);
              } else b.result = ze(S);
              return b;
            }).catch(function(b) {
              return y && w && Ne(y, w), Promise.reject(b);
            }), w = { obsSet: c.obsSet, promise: h, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, y ? y.push(w) : (y = [w], (E = E || (Ht["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = y)), ls(w, y, p, m), w.promise.then(function(b) {
              return { result: Bi(b.result, c, E?.optimisticOps, o, w, f) };
            });
          } });
        } });
      } };
      function er(e, t) {
        return new Proxy(e, { get: function(r, o, s) {
          return o === "db" ? t : Reflect.get(r, o, s);
        } });
      }
      var wt = (Re.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new R.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new R.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(es), r.stores({}), this._state.autoSchema = !1, r);
      }, Re.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || X.letThrough || this._vip) ? e() : new H(function(r, o) {
          if (t._state.openComplete) return o(new R.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new R.DatabaseClosed());
            t.open().catch(A);
          }
          t._state.dbReadyPromise.then(r, o);
        }).then(e);
      }, Re.prototype.use = function(e) {
        var t = e.stack, r = e.create, o = e.level, s = e.name;
        return s && this.unuse({ stack: t, name: s }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: r, level: o ?? 10, name: s }), e.sort(function(c, f) {
          return c.level - f.level;
        }), this;
      }, Re.prototype.unuse = function(e) {
        var t = e.stack, r = e.name, o = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(s) {
          return o ? s.create !== o : !!r && s.name !== r;
        })), this;
      }, Re.prototype.open = function() {
        var e = this;
        return Ut(Xe, function() {
          return is(e);
        });
      }, Re.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, t = an.indexOf(this);
        if (0 <= t && an.splice(t, 1), this.idbdb) {
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
        return new H(function(s, c) {
          function f() {
            t.close(e);
            var p = t._deps.indexedDB.deleteDatabase(t.name);
            p.onsuccess = Oe(function() {
              var m, v, w;
              m = t._deps, v = t.name, w = m.indexedDB, m = m.IDBKeyRange, jr(w) || v === Bn || kr(w, m).delete(v).catch(A), s();
            }), p.onerror = ht(c), p.onblocked = t._fireOnBlocked;
          }
          if (r) throw new R.InvalidArgument("Invalid closeOptions argument to db.delete()");
          o.isBeingOpened ? o.dbReadyPromise.then(f) : f();
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
        return g(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), Re.prototype.transaction = function() {
        var e = (function(t, r, o) {
          var s = arguments.length;
          if (s < 2) throw new R.InvalidArgument("Too few arguments");
          for (var c = new Array(s - 1); --s; ) c[s - 1] = arguments[s];
          return o = c.pop(), [t, ut(c), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Re.prototype._transaction = function(e, t, r) {
        var o = this, s = X.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var c, f, p = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (f = t.map(function(v) {
            if (v = v instanceof o.Table ? v.name : v, typeof v != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return v;
          }), e == "r" || e === Sr) c = Sr;
          else {
            if (e != "rw" && e != Er) throw new R.InvalidArgument("Invalid transaction mode: " + e);
            c = Er;
          }
          if (s) {
            if (s.mode === Sr && c === Er) {
              if (!p) throw new R.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              s = null;
            }
            s && f.forEach(function(v) {
              if (s && s.storeNames.indexOf(v) === -1) {
                if (!p) throw new R.SubTransaction("Table " + v + " not included in parent transaction.");
                s = null;
              }
            }), p && s && !s.active && (s = null);
          }
        } catch (v) {
          return s ? s._promise(null, function(w, h) {
            h(v);
          }) : De(v);
        }
        var m = (function v(w, h, E, y, b) {
          return H.resolve().then(function() {
            var S = X.transless || X, x = w._createTransaction(h, E, w._dbSchema, y);
            if (x.explicit = !0, S = { trans: x, transless: S }, y) x.idbtrans = y.idbtrans;
            else try {
              x.create(), x.idbtrans._explicit = !0, w._state.PR1398_maxLoop = 3;
            } catch (P) {
              return P.name === I.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                return v(w, h, E, null, b);
              })) : De(P);
            }
            var C, O = lt(b);
            return O && sn(), S = H.follow(function() {
              var P;
              (C = b.call(x, x)) && (O ? (P = Ot.bind(null, null), C.then(P, P)) : typeof C.next == "function" && typeof C.throw == "function" && (C = $r(C)));
            }, S), (C && typeof C.then == "function" ? H.resolve(C).then(function(P) {
              return x.active ? P : De(new R.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : S.then(function() {
              return C;
            })).then(function(P) {
              return y && x._resolve(), x._completion.then(function() {
                return P;
              });
            }).catch(function(P) {
              return x._reject(P), De(P);
            });
          });
        }).bind(null, this, c, f, s, r);
        return s ? s._promise(c, m, "lock") : X.trans ? Ut(X.transless, function() {
          return o._whenReady(m);
        }) : this._whenReady(m);
      }, Re.prototype.table = function(e) {
        if (!L(this._allTables, e)) throw new R.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Re);
      function Re(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var o = Re.dependencies;
        this._options = t = u({ addons: Re.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, c, f, p, m, v = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: A, dbReadyPromise: null, cancelOpen: A, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        v.dbReadyPromise = new H(function(h) {
          v.dbReadyResolve = h;
        }), v.openCanceller = new H(function(h, E) {
          v.cancelOpen = E;
        }), this._state = v, this.name = e, this.on = hn(this, "populate", "blocked", "versionchange", "close", { ready: [oe, A] }), this.once = function(h, E) {
          var y = function() {
            for (var b = [], S = 0; S < arguments.length; S++) b[S] = arguments[S];
            r.on(h).unsubscribe(y), E.apply(r, b);
          };
          return r.on(h, y);
        }, this.on.ready.subscribe = Fe(this.on.ready.subscribe, function(h) {
          return function(E, y) {
            Re.vip(function() {
              var b, S = r._state;
              S.openComplete ? (S.dbOpenError || H.resolve().then(E), y && h(E)) : S.onReadyBeingFired ? (S.onReadyBeingFired.push(E), y && h(E)) : (h(E), b = r, y || h(function x() {
                b.on.ready.unsubscribe(E), b.on.ready.unsubscribe(x);
              }));
            });
          };
        }), this.Collection = (s = this, mn(Wo.prototype, function(C, x) {
          this.db = s;
          var y = yi, b = null;
          if (x) try {
            y = x();
          } catch (O) {
            b = O;
          }
          var S = C._ctx, x = S.table, C = x.hook.reading.fire;
          this._ctx = { table: x, index: S.index, isPrimKey: !S.index || x.schema.primKey.keyPath && S.index === x.schema.primKey.name, range: y, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: b, or: S.or, valueMapper: C !== k ? C : null };
        })), this.Table = (c = this, mn(_i.prototype, function(h, E, y) {
          this.db = c, this._tx = y, this.name = h, this.schema = E, this.hook = c._allTables[h] ? c._allTables[h].hook : hn(null, { creating: [ee, A], reading: [Y, k], updating: [ue, A], deleting: [J, A] });
        })), this.Transaction = (f = this, mn(Qo.prototype, function(h, E, y, b, S) {
          var x = this;
          h !== "readonly" && E.forEach(function(C) {
            C = (C = y[C]) === null || C === void 0 ? void 0 : C.yProps, C && (E = E.concat(C.map(function(O) {
              return O.updatesTable;
            })));
          }), this.db = f, this.mode = h, this.storeNames = E, this.schema = y, this.chromeTransactionDurability = b, this.idbtrans = null, this.on = hn(this, "complete", "error", "abort"), this.parent = S || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new H(function(C, O) {
            x._resolve = C, x._reject = O;
          }), this._completion.then(function() {
            x.active = !1, x.on.complete.fire();
          }, function(C) {
            var O = x.active;
            return x.active = !1, x.on.error.fire(C), x.parent ? x.parent._reject(C) : O && x.idbtrans && x.idbtrans.abort(), De(C);
          });
        })), this.Version = (p = this, mn(rs.prototype, function(h) {
          this.db = p, this._cfg = { version: h, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (m = this, mn(Ci.prototype, function(h, E, y) {
          if (this.db = m, this._ctx = { table: h, index: E === ":id" ? null : E, or: y }, this._cmp = this._ascending = me, this._descending = function(b, S) {
            return me(S, b);
          }, this._max = function(b, S) {
            return 0 < me(b, S) ? b : S;
          }, this._min = function(b, S) {
            return me(b, S) < 0 ? b : S;
          }, this._IDBKeyRange = m._deps.IDBKeyRange, !this._IDBKeyRange) throw new R.MissingAPI();
        })), this.on("versionchange", function(h) {
          0 < h.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(h) {
          !h.newVersion || h.newVersion < h.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(h.oldVersion / 10));
        }), this._maxKey = bn(t.IDBKeyRange), this._createTransaction = function(h, E, y, b) {
          return new r.Transaction(h, E, y, r._options.chromeTransactionDurability, b);
        }, this._fireOnBlocked = function(h) {
          r.on("blocked").fire(h), an.filter(function(E) {
            return E.name === r.name && E !== r && !E._state.vcFired;
          }).map(function(E) {
            return E.on("versionchange").fire(h);
          });
        }, this.use(as), this.use(fs), this.use(us), this.use(os), this.use(ss);
        var w = new Proxy(this, { get: function(h, E, y) {
          if (E === "_vip") return !0;
          if (E === "table") return function(S) {
            return er(r.table(S), w);
          };
          var b = Reflect.get(h, E, y);
          return b instanceof _i ? er(b, w) : E === "tables" ? b.map(function(S) {
            return er(S, w);
          }) : E === "_createTransaction" ? function() {
            return er(b.apply(this, arguments), w);
          } : b;
        } });
        this.vip = w, o.forEach(function(h) {
          return h(r);
        });
      }
      var tr, ct = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ds = (Hr.prototype.subscribe = function(e, t, r) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: r });
      }, Hr.prototype[ct] = function() {
        return this;
      }, Hr);
      function Hr(e) {
        this._subscribe = e;
      }
      try {
        tr = { indexedDB: d.indexedDB || d.mozIndexedDB || d.webkitIndexedDB || d.msIndexedDB, IDBKeyRange: d.IDBKeyRange || d.webkitIDBKeyRange };
      } catch {
        tr = { indexedDB: null, IDBKeyRange: null };
      }
      function Li(e) {
        var t, r = !1, o = new ds(function(s) {
          var c = lt(e), f, p = !1, m = {}, v = {}, w = { get closed() {
            return p;
          }, unsubscribe: function() {
            p || (p = !0, f && f.abort(), h && Dt.storagemutated.unsubscribe(y));
          } };
          s.start && s.start(w);
          var h = !1, E = function() {
            return xr(b);
          }, y = function(S) {
            zn(m, S), Mr(v, m) && E();
          }, b = function() {
            var S, x, C;
            !p && tr.indexedDB && (m = {}, S = {}, f && f.abort(), f = new AbortController(), C = function(O) {
              var P = rn();
              try {
                c && sn();
                var D = It(e, O);
                return D = c ? D.finally(Ot) : D;
              } finally {
                P && on();
              }
            }(x = { subscr: S, signal: f.signal, requery: E, querier: e, trans: null }), Promise.resolve(C).then(function(O) {
              r = !0, t = O, p || x.signal.aborted || (m = {}, function(P) {
                for (var D in P) if (L(P, D)) return;
                return 1;
              }(v = S) || h || (Dt(gn, y), h = !0), xr(function() {
                return !p && s.next && s.next(O);
              }));
            }, function(O) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(O?.name) || p || xr(function() {
                p || s.error && s.error(O);
              });
            }));
          };
          return setTimeout(E, 0), w;
        });
        return o.hasValue = function() {
          return r;
        }, o.getValue = function() {
          return t;
        }, o;
      }
      var Wt = wt;
      function Wr(e) {
        var t = Rt;
        try {
          Rt = !0, Dt.storagemutated.fire(e), Lr(e, !0);
        } finally {
          Rt = t;
        }
      }
      z(Wt, u(u({}, Me), { delete: function(e) {
        return new Wt(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new Wt(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = Wt.dependencies, r = t.indexedDB, t = t.IDBKeyRange, (jr(r) ? Promise.resolve(r.databases()).then(function(o) {
            return o.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== Bn;
            });
          }) : kr(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return De(new R.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          N(this, e);
        };
      }, ignoreTransaction: function(e) {
        return X.trans ? Ut(X.transless, e) : e();
      }, vip: Fr, async: function(e) {
        return function() {
          try {
            var t = $r(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : H.resolve(t);
          } catch (r) {
            return De(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = $r(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : H.resolve(o);
        } catch (s) {
          return De(s);
        }
      }, currentTransaction: { get: function() {
        return X.trans || null;
      } }, waitFor: function(e, t) {
        return t = H.resolve(typeof e == "function" ? Wt.ignoreTransaction(e) : e).timeout(t || 6e4), X.trans ? X.trans.waitFor(t) : t;
      }, Promise: H, debug: { get: function() {
        return Z;
      }, set: function(e) {
        we(e);
      } }, derive: ne, extend: N, props: z, override: Fe, Events: hn, on: Dt, liveQuery: Li, extendObservabilitySet: zn, getByKeyPath: re, setByKeyPath: te, delByKeyPath: function(e, t) {
        typeof t == "string" ? te(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          te(e, r, void 0);
        });
      }, shallowClone: Te, deepClone: ze, getObjectDiff: Ur, cmp: me, asap: qe, minKey: -1 / 0, addons: [], connections: an, errnames: I, dependencies: tr, cache: Ht, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), Wt.maxKey = bn(Wt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Dt(gn, function(e) {
        Rt || (e = new CustomEvent(Ar, { detail: e }), Rt = !0, dispatchEvent(e), Rt = !1);
      }), addEventListener(Ar, function(e) {
        e = e.detail, Rt || Wr(e);
      }));
      var pn, Rt = !1, $i = function() {
      };
      return typeof BroadcastChannel < "u" && (($i = function() {
        (pn = new BroadcastChannel(Ar)).onmessage = function(e) {
          return e.data && Wr(e.data);
        };
      })(), typeof pn.unref == "function" && pn.unref(), Dt(gn, function(e) {
        Rt || pn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!wt.disableBfCache && e.persisted) {
          Z && console.debug("Dexie: handling persisted pagehide"), pn?.close();
          for (var t = 0, r = an; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !wt.disableBfCache && e.persisted && (Z && console.debug("Dexie: handling persisted pageshow"), $i(), Wr({ all: new Ve(-1 / 0, [[]]) }));
      })), H.rejectionMapper = function(e, t) {
        return !e || e instanceof Ct || e instanceof TypeError || e instanceof SyntaxError || !e.name || !B[e.name] ? e : (t = new B[e.name](t || e.message, e), "stack" in e && pe(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, we(Z), u(wt, Object.freeze({ __proto__: null, Dexie: wt, liveQuery: Li, Entity: vi, cmp: me, PropModification: yn, replacePrefix: function(e, t) {
        return new yn({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new yn({ add: e });
      }, remove: function(e) {
        return new yn({ remove: e });
      }, default: wt, RangeSet: Ve, mergeRanges: xn, rangesOverlap: Pi }), { default: wt }), wt;
    });
  }(Ks)), Ks.exports;
}
var yd = md();
const Ms = /* @__PURE__ */ ud(yd), Xa = Symbol.for("Dexie"), Po = globalThis[Xa] || (globalThis[Xa] = Ms);
if (Ms.semVer !== Po.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Ms.semVer} and ${Po.semVer}`);
const {
  liveQuery: _h,
  mergeRanges: wh,
  rangesOverlap: xh,
  RangeSet: Sh,
  cmp: Eh,
  Entity: Th,
  PropModification: Ch,
  replacePrefix: Ah,
  add: Ih,
  remove: Oh,
  DexieYProvider: Nh
} = Po, li = "_temp-idb-id";
async function vd(n) {
  return gd({
    databaseName: n.databaseName,
    withDatabaseIds: !0
  });
}
async function gd(n) {
  const { databaseName: i, withDatabaseIds: a } = n, u = new Po(i);
  await u.open();
  const l = await bd({
    databaseInstance: u,
    withDatabaseIds: a
  });
  if (!l)
    throw new Error("Failed to rebuild XML document from IndexedDB.");
  return {
    xmlDocument: l,
    filename: u.name + ".scd"
  };
}
async function bd(n) {
  const { databaseInstance: i, withDatabaseIds: a } = n;
  {
    const u = document.implementation.createDocument(
      "http://www.iec.ch/61850/2003/SCL",
      null,
      null
    ), l = await i.table(Qt).where({ tagName: "SCL" }).first();
    if (!l) throw new Error("No SCL root element found in DB");
    const d = u.createElementNS(
      l.namespace.uri,
      l.tagName
    );
    return d.setAttribute("xmlns", l.namespace.uri), l.attributes && hc({
      document: u,
      element: d,
      attributes: l.attributes,
      isRoot: !0
    }), l.value && (d.textContent = l.value.trim()), d.setAttribute(li, l.id), u.appendChild(d), await pc({
      databaseInstance: i,
      withDatabaseIds: a,
      xmlDocument: u,
      databaseRecord: l,
      parentDomElement: d
    });
  }
}
async function pc(n) {
  const { databaseInstance: i, withDatabaseIds: a, xmlDocument: u, databaseRecord: l, parentDomElement: d } = n;
  if (!l.children) return;
  const g = l.children.map((N) => N.id), T = await i.table(Qt).bulkGet(g);
  for (const N of T) {
    if (!N) continue;
    const $ = _d({
      document: u,
      record: N,
      withDatabaseIds: a
    });
    d.appendChild($), await pc({
      databaseInstance: i,
      withDatabaseIds: a,
      xmlDocument: u,
      databaseRecord: N,
      parentDomElement: $
    });
  }
  return n.xmlDocument;
}
function _d(n) {
  const { document: i, record: a, withDatabaseIds: u } = n;
  let l;
  return a.namespace.uri === pa.default.uri ? l = i.createElementNS(a.namespace.uri, a.tagName) : l = i.createElementNS(
    a.namespace.uri,
    `${a.namespace.prefix}:${a.tagName}`
  ), a.attributes && hc({ document: i, element: l, attributes: a.attributes, isRoot: !1 }), a.value && (l.textContent = a.value.trim()), u && l.setAttribute(li, a.id), l;
}
function hc(n) {
  const { document: i, element: a, attributes: u, isRoot: l } = n;
  for (const d of u)
    d.name !== "xmlns" && (pd(d) ? (l || wd({
      document: i,
      namespace: d.namespace
    }), a.setAttributeNS(d.namespace.uri, d.name, String(d.value))) : a.setAttribute(d.name, String(d.value)));
}
function wd(n) {
  const { document: i, namespace: a } = n, u = i.documentElement;
  u && (u.getAttribute(`xmlns:${a.prefix}`) !== null || u.setAttribute(`xmlns:${a.prefix}`, a.uri));
}
function xd(n) {
  return n.old === void 0 && n.new?.parent !== void 0 && n.new?.element !== void 0;
}
function Sd(n) {
  return n.old?.parent !== void 0 && n.old?.element !== void 0 && n.new === void 0;
}
function Ed(n) {
  return n.old?.parent !== void 0 && n.old?.element !== void 0 && n.new?.parent !== void 0 && n.new?.element == null;
}
function Td(n) {
  return n.old?.parent === void 0 && n.old?.element !== void 0 && n.new?.parent === void 0 && n.new?.element !== void 0;
}
function Cd(n) {
  return n.old === void 0 && n.new === void 0 && n.element !== void 0 && n.newAttributes !== void 0 && n.oldAttributes !== void 0;
}
function Ad(n) {
  return !(n.actions instanceof Array);
}
function qt(n) {
  const i = n.split(">"), a = i.pop() ?? "";
  return [i.join(">"), a];
}
const vt = ":not(*)";
function Id(n) {
  return `${n.getAttribute("version")}	${n.getAttribute("revision")}`;
}
function Od(n, i) {
  const [a, u] = i.split("	");
  return !a || !u ? vt : `${n}[version="${a}"][revision="${u}"]`;
}
function Qa(n) {
  return St(n.parentElement) + ">" + n.getAttribute("connectivityNode");
}
function za(n, i) {
  const [a, u] = qt(i), l = xt[n].parents.flatMap(
    (d) => kt(d, a).split(",")
  );
  return Bt(
    l,
    [">"],
    [`${n}[connectivityNode="${u}"]`]
  ).map((d) => d.join("")).join(",");
}
function Nd(n) {
  const [i, a, u, l, d, g] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((T) => n.getAttribute(T));
  return i === "None" ? `${St(n.parentElement)}>(${l} ${g} ${d})` : `${i} ${a || "(Client)"}/${u ?? ""} ${l} ${d ?? ""}`;
}
function Pd(n, i) {
  if (i.endsWith(")")) {
    const [z, ie] = qt(i), [pe, ne, he] = ie.substring(1, ie.length - 1).split(" ");
    if (!pe || !ne) return vt;
    const ve = xt[n].parents.flatMap(
      (Ce) => kt(Ce, z).split(",")
    );
    return Bt(
      ve,
      [">"],
      [`${n}[iedName="None"][lnClass="${pe}"][lnType="${ne}"][lnInst="${he}"]`]
    ).map((Ce) => Ce.join("")).join(",");
  }
  const [a, u, l, d, g] = i.split(/[ /]/);
  if (!a || !u || !d) return vt;
  const [T, N, $, j, L] = [
    [`[iedName="${a}"]`],
    u === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${u}"]`],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    g ? [`[lnInst="${g}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return Bt(
    [n],
    T,
    N,
    $,
    j,
    L
  ).map((z) => z.join("")).join(",");
}
function Dd(n) {
  return `${St(n.parentElement)}>${n.getAttribute("iedName")} ${n.getAttribute("apName")}`;
}
function Rd(n, i) {
  const [a, u] = qt(i), [l, d] = u.split(" ");
  return `${kt("IED", a)}>${n}[iedName="${l}"][apName="${d}"]`;
}
function kd(n) {
  return `${St(n.parentElement)}>${n.getAttribute("associationID") ?? ""}`;
}
function jd(n, i) {
  const [a, u] = qt(i);
  return u ? `${kt("Server", a)}>${n}[associationID="${u}"]` : vt;
}
function Fd(n) {
  return `${St(n.closest("IED"))}>>${n.getAttribute("inst")}`;
}
function Kd(n, i) {
  const [a, u] = i.split(">>");
  return u ? `IED[name="${a}"] ${n}[inst="${u}"]` : vt;
}
function Md(n) {
  const i = n.textContent, [a, u, l, d, g] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((T) => n.getAttribute(T));
  return `${St(n.parentElement)}>${i} ${a || ""} ${u || ""}/${l ?? ""} ${d ?? ""} ${g ?? ""}`;
}
function Bd(n, i) {
  const [a, u] = qt(i), [l, d, g, T, N, $] = u.split(/[ /]/), [
    j,
    L,
    z,
    ie,
    pe,
    ne
  ] = [
    xt[n].parents.flatMap((he) => kt(he, a).split(",")),
    [`${l}`],
    d ? [`[apRef="${d}"]`] : [":not([apRef])", '[apRef=""]'],
    g ? [`[ldInst="${g}"]`] : [":not([ldInst])", '[ldInst=""]'],
    T ? [`[prefix="${T}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${N}"]`],
    $ ? [`[lnInst="${$}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return Bt(
    j,
    [">"],
    [n],
    L,
    z,
    ie,
    pe,
    ne
  ).map((he) => he.join("")).join(",");
}
function qd(n) {
  const [i, a, u, l, d, g, T, N] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((j) => n.getAttribute(j)), $ = `${i}/${a ?? ""} ${u} ${l ?? ""}.${d} ${g || ""}`;
  return `${St(n.parentElement)}>${$} (${T}${N ? " [" + N + "]" : ""})`;
}
function Ld(n, i) {
  const [a, u] = qt(i), [l, d, g, T] = u.split(/[ /.]/), N = u.match(/.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/), $ = N && N[1] ? N[1] : "", j = N && N[2] ? N[2] : "", L = u.match(/\(([A-Z]{2})/), z = u.match(/ \[([0-9]{1,2})\]/), ie = L && L[1] ? L[1] : "", pe = z && z[1] ? z[1] : "", [
    ne,
    he,
    ve,
    Ce,
    Fe,
    de,
    qe,
    re,
    te
  ] = [
    xt[n].parents.flatMap((Te) => kt(Te, a).split(",")),
    [`[ldInst="${l}"]`],
    d ? [`[prefix="${d}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${g}"]`],
    T ? [`[lnInst="${T}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${$}"]`],
    j ? [`[daName="${j}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${ie}"]`],
    pe ? [`[ix="${pe}"]`] : [":not([ix])", '[ix=""]']
  ];
  return Bt(
    ne,
    [">"],
    [n],
    he,
    ve,
    Ce,
    Fe,
    de,
    qe,
    re,
    te
  ).map((Te) => Te.join("")).join(",");
}
function $d(n) {
  if (!n.parentElement) return NaN;
  const i = St(n.parentElement), a = n.getAttribute("iedName"), u = n.getAttribute("intAddr"), l = Array.from(
    n.parentElement.querySelectorAll(`ExtRef[intAddr="${u}"]`)
  ).indexOf(n);
  if (u) return `${i}>${u}[${l}]`;
  const [
    d,
    g,
    T,
    N,
    $,
    j,
    L,
    z,
    ie,
    pe,
    ne,
    he
  ] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "serviceType",
    "srcLDInst",
    "srcPrefix",
    "srcLNClass",
    "srcLNInst",
    "srcCBName"
  ].map((Fe) => n.getAttribute(Fe)), ve = he ? `${L}:${he} ${z ?? ""}/${ie ?? ""} ${pe ?? ""} ${ne ?? ""}` : "", Ce = `${a} ${d}/${g ?? ""} ${T} ${N ?? ""} ${$} ${j || ""}`;
  return `${i}>${ve ? ve + " " : ""}${Ce}${u ? `@${u}` : ""}`;
}
function Ud(n, i) {
  const [a, u] = qt(i), l = xt[n].parents.flatMap(
    (xe) => kt(xe, a).split(",")
  );
  if (u.endsWith("]")) {
    const [xe] = u.split("["), Ne = [`[intAddr="${xe}"]`];
    return Bt(l, [">"], [n], Ne).map((nt) => nt.join("")).join(",");
  }
  let d, g, T, N, $, j, L, z, ie, pe, ne, he, ve, Ce;
  !u.includes(":") && !u.includes("@") ? [d, g, T, N, $, j, L] = u.split(/[ /]/) : u.includes(":") && !u.includes("@") ? [
    z,
    ie,
    pe,
    ne,
    he,
    ve,
    d,
    g,
    T,
    N,
    $,
    j,
    L
  ] = u.split(/[ /:]/) : !u.includes(":") && u.includes("@") ? [d, g, T, N, $, j, L, Ce] = u.split(/[ /@]/) : [
    z,
    ie,
    pe,
    ne,
    he,
    ve,
    d,
    g,
    T,
    N,
    $,
    j,
    L,
    Ce
  ] = u.split(/[ /:@]/);
  const [
    Fe,
    de,
    qe,
    re,
    te,
    Te,
    K,
    ut,
    ft,
    ke,
    ze,
    jt,
    Et,
    et
  ] = [
    d ? [`[iedName="${d}"]`] : [":not([iedName])"],
    g ? [`[ldInst="${g}"]`] : [":not([ldInst])", '[ldInst=""]'],
    T ? [`[prefix="${T}"]`] : [":not([prefix])", '[prefix=""]'],
    N ? [`[lnClass="${N}"]`] : [":not([lnClass])"],
    $ ? [`[lnInst="${$}"]`] : [":not([lnInst])", '[lnInst=""]'],
    j ? [`[doName="${j}"]`] : [":not([doName])"],
    L ? [`[daName="${L}"]`] : [":not([daName])", '[daName=""]'],
    z ? [`[serviceType="${z}"]`] : [":not([serviceType])", '[serviceType=""]'],
    ie ? [`[srcCBName="${ie}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    pe ? [`[srcLDInst="${pe}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    ne ? [`[srcPrefix="${ne}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    he ? [`[srcLNClass="${he}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    ve ? [`[srcLNInst="${ve}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    Ce ? [`[intAddr="${Ce}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return Bt(
    l,
    [">"],
    [n],
    Fe,
    de,
    qe,
    re,
    te,
    Te,
    K,
    ut,
    ft,
    ke,
    ze,
    jt,
    Et,
    et
  ).map((xe) => xe.join("")).join(",");
}
function Vd(n) {
  const [i, a, u] = ["prefix", "lnClass", "inst"].map((l) => n.getAttribute(l));
  return `${St(n.parentElement)}>${i ?? ""} ${a} ${u}`;
}
function Gd(n, i) {
  const [a, u] = qt(i), l = xt[n].parents.flatMap(
    (L) => kt(L, a).split(",")
  ), [d, g, T] = u.split(" ");
  if (!g) return vt;
  const [N, $, j] = [
    d ? [`[prefix="${d}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${g}"]`],
    [`[inst="${T}"]`]
  ];
  return Bt(
    l,
    [">"],
    [n],
    N,
    $,
    j
  ).map((L) => L.join("")).join(",");
}
function Hd(n) {
  const [i, a, u, l, d, g] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((T) => n.getAttribute(T));
  return `${St(n.parentElement)}>${a} ${i || ""} ${u}/${l ?? ""} ${d} ${g}`;
}
function Wd(n, i) {
  const [a, u] = qt(i), l = xt[n].parents.flatMap(
    (ve) => kt(ve, a).split(",")
  ), [d, g, T, N, $, j] = u.split(/[ /]/), [
    L,
    z,
    ie,
    pe,
    ne,
    he
  ] = [
    d ? [`[iedName="${d}"]`] : [":not([iedName])", '[iedName=""]'],
    g ? [`[apRef="${g}"]`] : [":not([apRef])", '[apRef=""]'],
    T ? [`[ldInst="${T}"]`] : [":not([ldInst])", '[ldInst=""]'],
    N ? [`[prefix="${N}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${$}"]`],
    j ? [`[lnInst="${j}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return Bt(
    l,
    [">"],
    [n],
    L,
    z,
    ie,
    pe,
    ne,
    he
  ).map((ve) => ve.join("")).join(",");
}
function Ja(n) {
  const [i, a] = ["name", "ix"].map((u) => n.getAttribute(u));
  return `${St(n.parentElement)}>${i}${a ? "[" + a + "]" : ""}`;
}
function Bs(n, i, a = -1) {
  a === -1 && (a = i.split(">").length);
  const [u, l] = qt(i), [d, g, T, N] = l.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!g) return vt;
  if (a === 0) return `${n}[name="${g}"]`;
  const $ = xt[n].parents.flatMap(
    (z) => z === "SDI" ? Bs(z, u, a - 1).split(",") : kt(z, u).split(",")
  ).filter((z) => !z.startsWith(vt));
  if ($.length === 0) return vt;
  const [j, L] = [
    [`[name="${g}"]`],
    N ? [`[ix="${N}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return Bt($, [">"], [n], j, L).map((z) => z.join("")).join(",");
}
function Yd(n) {
  if (!n.parentElement) return NaN;
  const i = n.getAttribute("sGroup"), a = Array.from(n.parentElement.children).filter((u) => u.getAttribute("sGroup") === i).findIndex((u) => u.isSameNode(n));
  return `${St(n.parentElement)}>${i ? i + "." : ""} ${a}`;
}
function Xd(n, i) {
  const [a, u] = qt(i), [l, d] = u.split(" "), g = parseFloat(d), T = xt[n].parents.flatMap(
    (j) => kt(j, a).split(",")
  ), [N, $] = [
    l ? [`[sGroup="${l}"]`] : [""],
    g ? [`:nth-child(${g + 1})`] : [""]
  ];
  return Bt(T, [">"], [n], N, $).map((j) => j.join("")).join(",");
}
function Qd(n) {
  const [i, a] = ["iedName", "apName"].map((u) => n.getAttribute(u));
  return `${i} ${a}`;
}
function zd(n, i) {
  const [a, u] = i.split(" ");
  return !a || !u ? vt : `${n}[iedName="${a}"][apName="${u}"]`;
}
function Za(n) {
  const [i, a] = ["ldInst", "cbName"].map((u) => n.getAttribute(u));
  return `${i} ${a}`;
}
function eu(n, i) {
  const [a, u] = i.split(" ");
  return !a || !u ? vt : `${n}[ldInst="${a}"][cbName="${u}"]`;
}
function Jd(n) {
  if (!n.parentElement) return NaN;
  if (!n.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const i = n.getAttribute("type");
  return n.parentElement.children.length > 1 && i !== "Connection" && i !== "RedConn" ? NaN : `${St(n.parentElement)}>${i}`;
}
function Zd(n, i) {
  const [a, u] = qt(i), [l, d] = [
    xt[n].parents.flatMap((g) => kt(g, a).split(",")),
    u ? [`[type="${u}"]`] : [""]
  ];
  return Bt(l, [">"], [n], d).map((g) => g.join("")).join(",");
}
function ep(n) {
  if (!n.parentElement) return NaN;
  const i = n.parentElement, a = n.getAttribute("type");
  if (i.tagName === "PhysConn") return `${St(n.parentElement)}>${a}`;
  const u = Array.from(n.parentElement.children).filter((l) => l.getAttribute("type") === a).findIndex((l) => l.isSameNode(n));
  return `${St(n.parentElement)}>${a} [${u}]`;
}
function tp(n, i) {
  const [a, u] = qt(i), [l] = u.split(" "), d = u && u.match(/\[([0-9]+)\]/) && u.match(/\[([0-9]+)\]/)[1] ? parseFloat(u.match(/\[([0-9]+)\]/)[1]) : NaN, [g, T, N] = [
    xt[n].parents.flatMap(($) => kt($, a).split(",")),
    [`[type="${l}"]`],
    d ? [`:nth-child(${d + 1})`] : [""]
  ];
  return Bt(g, [">"], [n], T, N).map(($) => $.join("")).join(",");
}
function np(n) {
  return `${St(n.parentElement)}>${n.getAttribute("ord")}`;
}
function rp(n, i) {
  const [a, u] = qt(i);
  return `${kt("EnumType", a)}>${n}[ord="${u}"]`;
}
function ip(n) {
  return `${St(n.parentElement)}>${n.getAttribute("type") || "8-MMS"}	${n.textContent}`;
}
function op(n, i) {
  const [a, u] = qt(i), [l, d] = u.split("	"), [g] = [
    xt[n].parents.flatMap((T) => kt(T, a).split(","))
  ];
  return Bt(g, [">"], [n], [`[type="${l}"]`], [">"], [d]).map((T) => T.join("")).join(",");
}
function sp() {
  return "";
}
function ap() {
  return ":root";
}
function Ye(n) {
  return n.parentElement.tagName === "SCL" ? n.getAttribute("name") : `${St(n.parentElement)}>${n.getAttribute("name")}`;
}
function We(n, i, a = -1) {
  a === -1 && (a = i.split(">").length);
  const [u, l] = qt(i);
  if (!l) return vt;
  if (a === 0) return `${n}[name="${l}"]`;
  const d = xt[n].parents;
  if (!d) return vt;
  const g = d.flatMap(
    (T) => xt[T].selector === xt.Substation.selector ? We(T, u, a - 1).split(",") : kt(T, u).split(",")
  ).filter((T) => !T.startsWith(vt));
  return g.length === 0 ? vt : Bt(g, [">"], [n], [`[name="${l}"]`]).map((T) => T.join("")).join(",");
}
function be(n) {
  return St(n.parentElement).toString();
}
function _e(n, i) {
  const a = xt[n].parents;
  if (!a) return vt;
  const u = a.flatMap((l) => kt(l, i).split(",")).filter((l) => !l.startsWith(vt));
  return u.length === 0 ? vt : Bt(u, [">"], [n]).map((l) => l.join("")).join(",");
}
function yo(n) {
  return `#${n.id}`;
}
function vo(n, i) {
  const a = i.replace(/^#/, "");
  return a ? `${n}[id="${a}"]` : vt;
}
const mc = ["TransformerWinding", "ConductingEquipment"], yc = [
  "GeneralEquipment",
  "PowerTransformer",
  ...mc
], qs = ["Substation", "VoltageLevel", "Bay"], vc = ["Process", "Line"], gc = ["EqSubFunction", "EqFunction"], up = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...yc,
  ...qs,
  ...vc,
  ...gc
], bc = ["ConnectivityNode", ...up], cp = ["GOOSESecurity", "SMVSecurity"], lp = ["SubNetwork", ...cp, ...bc], fp = ["BDA", "DA"], dp = ["SampledValueControl", "GSEControl"], pp = ["LogControl", "ReportControl"], hp = [...dp, ...pp], mp = ["GSE", "SMV"], yp = [
  "ConnectedAP",
  "PhysConn",
  "SDO",
  "DO",
  "DAI",
  "SDI",
  "DOI",
  "Inputs",
  "RptEnabled",
  "Server",
  "ServerAt",
  "SettingControl",
  "Communication",
  "Log",
  "LDevice",
  "DataSet",
  "AccessPoint",
  "IED",
  "NeutralPoint",
  ...hp,
  ...mp,
  ...fp
], Jr = ["LN0", "LN"], vp = ["Text", "Private", "Hitem", "AccessControl"], gp = ["Subject", "IssuerName"], bp = ["MinTime", "MaxTime"], _p = ["LNodeType", "DOType", "DAType", "EnumType"], wp = [
  "FileHandling",
  "TimeSyncProt",
  "CommProt",
  "SGEdit",
  "ConfSG",
  "GetDirectory",
  "GetDataObjectDefinition",
  "DataObjectDirectory",
  "GetDataSetValue",
  "SetDataSetValue",
  "DataSetDirectory",
  "ReadWrite",
  "TimerActivatedControl",
  "GetCBValues",
  "GSEDir",
  "ConfLdName"
], xp = ["DynDataSet", "ConfDataSet"], Sp = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...xp
], Ep = ["ConfLogControl", "ConfSigRef"], Tp = ["ReportSettings", "LogSettings", "GSESettings", "SMVSettings"], Cp = ["SCL", ...lp, ...yp, ..._p], _c = [
  ...Cp,
  ...vp,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...gp,
  ...bp,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Jr,
  ...wp,
  "DynAssociation",
  "SettingGroups",
  ...Sp,
  ...Ep,
  ...Tp,
  "ConfLNs",
  "ClientServices",
  "SupSubscription",
  "ValueHandling",
  "RedProt",
  "McSecurity",
  "KDC",
  "Address",
  "P",
  "ProtNs",
  "EnumVal",
  "Terminal",
  "BitRate",
  "Authentication",
  "DataTypeTemplates",
  "History",
  "OptFields",
  "SmvOpts",
  "TrgOps",
  "SamplesPerSec",
  "SmpRate",
  "SecPerSamples"
], Ap = new Set(_c);
function ha(n) {
  return Ap.has(n);
}
const Lo = ["Text", "Private"], dr = [...Lo], yt = [...Lo], go = [...Lo], tu = [...yt, "Val"], wc = [...dr, "LNode"], hr = [...wc], Ls = [...hr], Ss = [
  ...hr,
  "PowerTransformer",
  "GeneralEquipment"
], nu = [...Ls, "Terminal"], ru = [...yt, "Address"], xc = [...dr], iu = [...xc, "IEDName"], ou = [
  ...yt,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], su = [
  ...hr,
  "GeneralEquipment",
  "Function"
], au = [...xc, "TrgOps"], uu = [
  ...hr,
  "GeneralEquipment",
  "EqSubFunction"
], xt = {
  AccessControl: {
    identity: be,
    selector: _e,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: Ye,
    selector: We,
    parents: ["IED"],
    children: [
      ...dr,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: be,
    selector: _e,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: kd,
    selector: jd,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: be,
    selector: _e,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: Ye,
    selector: We,
    parents: ["DAType"],
    children: [...tu]
  },
  BitRate: {
    identity: be,
    selector: _e,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: Ye,
    selector: We,
    parents: ["VoltageLevel"],
    children: [
      ...Ss,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Hd,
    selector: Wd,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: be,
    selector: _e,
    parents: ["SCL"],
    children: [...yt, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: Ye,
    selector: We,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [...nu, "EqFunction", "SubEquipment"]
  },
  ConfDataSet: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: be,
    selector: _e,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: Qd,
    selector: zd,
    parents: ["SubNetwork"],
    children: [...yt, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: Ye,
    selector: We,
    parents: ["Bay", "Line"],
    children: [...wc]
  },
  DA: {
    identity: Ye,
    selector: We,
    parents: ["DOType"],
    children: [...tu]
  },
  DAI: {
    identity: Ja,
    selector: Bs,
    parents: ["DOI", "SDI"],
    children: [...yt, "Val"]
  },
  DAType: {
    identity: yo,
    selector: vo,
    parents: ["DataTypeTemplates"],
    children: [...go, "BDA", "ProtNs"]
  },
  DO: {
    identity: Ye,
    selector: We,
    parents: ["LNodeType"],
    children: [...yt]
  },
  DOI: {
    identity: Ye,
    selector: We,
    parents: [...Jr],
    children: [...yt, "SDI", "DAI"]
  },
  DOType: {
    identity: yo,
    selector: vo,
    parents: ["DataTypeTemplates"],
    children: [...go, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: Ye,
    selector: We,
    parents: [...Jr],
    children: [...dr, "FCDA"]
  },
  DataSetDirectory: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: be,
    selector: _e,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: yo,
    selector: vo,
    parents: ["DataTypeTemplates"],
    children: [...go, "EnumVal"]
  },
  EnumVal: {
    identity: np,
    selector: rp,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: Ye,
    selector: We,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...uu]
  },
  EqSubFunction: {
    identity: Ye,
    selector: We,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...uu]
  },
  ExtRef: {
    identity: $d,
    selector: Ud,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: qd,
    selector: Ld,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: Ye,
    selector: We,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...hr,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: Ye,
    selector: We,
    parents: [
      "SubFunction",
      "Function",
      ...vc,
      ...gc,
      ...qs
    ],
    children: [...Ls, "EqFunction"]
  },
  GetCBValues: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: Ye,
    selector: We,
    parents: ["AccessPoint"],
    children: [...dr, "Subject", "IssuerName"]
  },
  GSE: {
    identity: Za,
    selector: eu,
    parents: ["ConnectedAP"],
    children: [...ru, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: Ye,
    selector: We,
    parents: ["LN0"],
    children: [...iu, "Protocol"]
  },
  GSESettings: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: be,
    selector: _e,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: be,
    selector: _e,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Id,
    selector: Od,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: Ye,
    selector: We,
    parents: ["SCL"],
    children: [...yt, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Md,
    selector: Bd,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: be,
    selector: _e,
    parents: [...Jr],
    children: [...yt, "ExtRef"]
  },
  IssuerName: {
    identity: be,
    selector: _e,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Dd,
    selector: Rd,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Fd,
    selector: Kd,
    parents: ["Server"],
    children: [...yt, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Vd,
    selector: Gd,
    parents: ["AccessPoint", "LDevice"],
    children: [...ou]
  },
  LN0: {
    identity: be,
    selector: _e,
    parents: ["LDevice"],
    children: [...ou, "GSEControl", "SampledValueControl", "SettingControl"]
  },
  LNode: {
    identity: Nd,
    selector: Pd,
    parents: [...bc],
    children: [...yt]
  },
  LNodeType: {
    identity: yo,
    selector: vo,
    parents: ["DataTypeTemplates"],
    children: [...go, "DO"]
  },
  Line: {
    identity: Ye,
    selector: We,
    parents: ["Process", "SCL"],
    children: [...su, "Voltage", "ConductingEquipment"]
  },
  Log: {
    identity: Ye,
    selector: We,
    parents: [...Jr],
    children: [...yt]
  },
  LogControl: {
    identity: Ye,
    selector: We,
    parents: [...Jr],
    children: [...au]
  },
  LogSettings: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: be,
    selector: _e,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: be,
    selector: _e,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: be,
    selector: _e,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: Qa,
    selector: za,
    parents: ["TransformerWinding"],
    children: [...yt]
  },
  OptFields: {
    identity: be,
    selector: _e,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: ep,
    selector: tp,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: Jd,
    selector: Zd,
    parents: ["ConnectedAP"],
    children: [...yt, "P"]
  },
  PowerTransformer: {
    identity: Ye,
    selector: We,
    parents: [...qs],
    children: [...Ls, "TransformerWinding", "SubEquipment", "EqFunction"]
  },
  Private: {
    identity: () => NaN,
    selector: () => vt,
    parents: [],
    children: []
  },
  Process: {
    identity: Ye,
    selector: We,
    parents: ["Process", "SCL"],
    children: [
      ...su,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: ip,
    selector: op,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: be,
    selector: _e,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: Ye,
    selector: We,
    parents: [...Jr],
    children: [...au, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: be,
    selector: _e,
    parents: ["ReportControl"],
    children: [...yt, "ClientLN"]
  },
  SamplesPerSec: {
    identity: be,
    selector: _e,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: Ye,
    selector: We,
    parents: ["LN0"],
    children: [...iu, "SmvOpts"]
  },
  SecPerSamples: {
    identity: be,
    selector: _e,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: sp,
    selector: ap,
    parents: [],
    children: [
      ...Lo,
      "Header",
      "Substation",
      "Communication",
      "IED",
      "DataTypeTemplates",
      "Line",
      "Process"
    ]
  },
  SDI: {
    identity: Ja,
    selector: Bs,
    parents: ["DOI", "SDI"],
    children: [...yt, "SDI", "DAI"]
  },
  SDO: {
    identity: Ye,
    selector: We,
    parents: ["DOType"],
    children: [...dr]
  },
  Server: {
    identity: be,
    selector: _e,
    parents: ["AccessPoint"],
    children: [...yt, "Authentication", "LDevice", "Association"]
  },
  ServerAt: {
    identity: be,
    selector: _e,
    parents: ["AccessPoint"],
    children: [...yt]
  },
  Services: {
    identity: be,
    selector: _e,
    parents: ["IED", "AccessPoint"],
    children: [
      "DynAssociation",
      "SettingGroups",
      "GetDirectory",
      "GetDataObjectDefinition",
      "DataObjectDirectory",
      "GetDataSetValue",
      "SetDataSetValue",
      "DataSetDirectory",
      "ConfDataSet",
      "DynDataSet",
      "ReadWrite",
      "TimerActivatedControl",
      "ConfReportControl",
      "GetCBValues",
      "ConfLogControl",
      "ReportSettings",
      "LogSettings",
      "GSESettings",
      "SMVSettings",
      "GSEDir",
      "GOOSE",
      "GSSE",
      "SMVsc",
      "FileHandling",
      "ConfLNs",
      "ClientServices",
      "ConfLdName",
      "SupSubscription",
      "ConfSigRef",
      "ValueHandling",
      "RedProt",
      "TimeSyncProt",
      "CommProt"
    ]
  },
  SetDataSetValue: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: be,
    selector: _e,
    parents: ["LN0"],
    children: [...yt]
  },
  SettingGroups: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: be,
    selector: _e,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: be,
    selector: _e,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: Za,
    selector: eu,
    parents: ["ConnectedAP"],
    children: [...ru]
  },
  SmvOpts: {
    identity: be,
    selector: _e,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: Ye,
    selector: We,
    parents: ["AccessPoint"],
    children: [...dr, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: Ye,
    selector: We,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...mc
    ],
    children: [...hr, "EqFunction"]
  },
  SubFunction: {
    identity: Ye,
    selector: We,
    parents: ["SubFunction", "Function"],
    children: [
      ...hr,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: Ye,
    selector: We,
    parents: ["Communication"],
    children: [...dr, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: be,
    selector: _e,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: Ye,
    selector: We,
    parents: ["SCL"],
    children: [...Ss, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: Ye,
    selector: We,
    parents: ["TransformerWinding"],
    children: [...hr, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Qa,
    selector: za,
    parents: [...yc],
    children: [...yt]
  },
  Text: {
    identity: be,
    selector: _e,
    parents: _c.filter((n) => n !== "Text" && n !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: be,
    selector: _e,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: Ye,
    selector: We,
    parents: ["PowerTransformer"],
    children: [
      ...nu,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: be,
    selector: _e,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: Yd,
    selector: Xd,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: be,
    selector: _e,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: be,
    selector: _e,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: Ye,
    selector: We,
    parents: ["Substation"],
    children: [...Ss, "Voltage", "Bay", "Function"]
  }
};
function Sc(n, i) {
  const a = n.tagName, u = Array.from(n.children);
  if (a === "Services" || a === "SettingGroups" || !ha(a))
    return u.find((T) => T.tagName === i) ?? null;
  const l = xt[a]?.children ?? [];
  let d = l.findIndex((T) => T === i);
  if (d < 0) return null;
  let g;
  for (; d < l.length && !g; )
    g = u.find((T) => T.tagName === l[d]), d++;
  return g ?? null;
}
function kt(n, i) {
  return typeof i != "string" ? vt : ha(n) ? xt[n].selector(n, i) : n;
}
function St(n) {
  if (n === null) return NaN;
  if (n.closest("Private")) return NaN;
  const i = n.tagName;
  return ha(i) ? xt[i].identity(n) : NaN;
}
function Bt(...n) {
  return n.reduce((i, a) => i.flatMap((u) => a.map((l) => [u, l].flat())), [[]]);
}
const Ip = 99;
Array(Ip).fill(1).map((n, i) => `${i + 1}`);
function Op(n) {
  return Ad(n) ? cu(n) : n.actions.map(cu);
}
function cu(n) {
  if (xd(n))
    return Np(n);
  if (Sd(n))
    return Pp(n);
  if (Cd(n))
    return Dp(n);
  if (Ed(n))
    return Rp(n);
  if (Td(n))
    return kp(n);
  throw console.error("Unknown action type", n), new Error("Unknown action type");
}
function Np(n) {
  let i = null;
  return n.new.reference === void 0 && n.new.element instanceof Element && n.new.parent instanceof Element ? i = Sc(n.new.parent, n.new.element.tagName) : i = n.new.reference ?? null, {
    parent: n.new.parent,
    node: n.new.element,
    reference: i
  };
}
function Pp(n) {
  return {
    node: n.old.element
  };
}
function Dp(n) {
  const i = {};
  Array.from(n.element.attributes).forEach((u) => {
    i[u.name] = null;
  });
  const a = {
    ...i,
    ...n.newAttributes
  };
  return {
    element: n.element,
    attributes: a
  };
}
function Rp(n) {
  return n.new.reference === void 0 && (n.new.reference = Sc(n.new.parent, n.old.element.tagName)), {
    parent: n.new.parent,
    node: n.old.element,
    reference: n.new.reference ?? null
  };
}
function kp(n) {
  const i = n.old.element.children, a = Array.from(i).map((N) => N.cloneNode(!0)), u = n.new.element.cloneNode(!0);
  u.append(...Array.from(a));
  const l = n.old.element.parentElement;
  if (!l)
    throw new Error("Replace action called without parent in old element");
  const d = n.old.element.nextSibling;
  return [{ node: n.old.element }, {
    parent: l,
    node: u,
    reference: d
  }];
}
function jp(n) {
  return n instanceof Array;
}
function Fp(n) {
  return n.parent !== void 0;
}
function Kp(n) {
  return n !== null && typeof n != "string";
}
function Mp(n) {
  return n.element !== void 0;
}
function Bp(n) {
  return n.parent === void 0 && n.node !== void 0;
}
function Ec(n) {
  if (jp(n))
    return n.map(Ec);
  if (Bp(n))
    return n;
  if (Fp(n))
    return n;
  if (Mp(n))
    return qp(n);
  throw new Error("Unknown edit type");
}
function qp(n) {
  const i = {}, a = {};
  return Object.entries(n.attributes).forEach(([u, l]) => {
    if (Kp(l)) {
      const d = l.namespaceURI;
      if (!d) return;
      a[d] || (a[d] = {}), a[d][u] = l.value;
    } else i[u] = l;
  }), { element: n.element, attributes: i, attributesNS: a };
}
function Tc(n) {
  return typeof n != "object" || n === null ? !1 : Object.entries(n).every(([i, a]) => typeof i == "string" && (a === null || typeof a == "string"));
}
function Lp(n) {
  return typeof n != "object" || n === null ? !1 : Object.entries(n).every(([i, a]) => typeof i == "string" && Tc(a));
}
function ma(n) {
  return n instanceof Array && n.every((i) => $p(i));
}
function ya(n) {
  return n.element instanceof Element && typeof n.textContent == "string";
}
function lo(n) {
  return n.parent === void 0 && n.node instanceof Node;
}
function va(n) {
  const i = n;
  return i.element instanceof Element && (Tc(i.attributes) || Lp(i.attributesNS));
}
function fo(n) {
  return (n.parent instanceof Element || n.parent instanceof Document || n.parent instanceof DocumentFragment) && n.node instanceof Node && (n.reference instanceof Node || n.reference === null);
}
function $p(n) {
  return ma(n) ? !0 : va(n) || ya(n) || fo(n) || lo(n);
}
function Cc(n) {
  return n !== null && typeof n == "object" && "namespaceURI" in n && typeof n.namespaceURI == "string" && "value" in n && typeof n.value == "string";
}
function Up(n) {
  return n === null || typeof n != "object" ? !1 : Object.entries(n).every(([i, a]) => typeof i == "string" && (a === null || typeof a == "string" || Cc(a)));
}
function Ac(n) {
  return n instanceof Array && n.every(Vp);
}
function Ic(n) {
  return n.element instanceof Element && Up(n.attributes);
}
function Vp(n) {
  return Ac(n) ? !0 : Ic(n) || fo(n) || lo(n);
}
function Gp(n) {
  let i = {};
  const a = {};
  return Object.entries(n.attributes).forEach(([u, l]) => {
    if (Cc(l)) {
      const d = l.namespaceURI;
      if (!d)
        return;
      a[d] || (a[d] = {}), a[d] = { ...a[d], [u]: l.value };
    } else
      i = { ...i, [u]: l };
  }), { element: n.element, attributes: i, attributesNS: a };
}
function Oc(n) {
  return lo(n) || fo(n) ? n : Ic(n) ? Gp(n) : Ac(n) ? n.map(Oc) : [];
}
function Hp({
  element: n,
  textContent: i
}) {
  const { childNodes: a } = n, u = Array.from(a).map((d) => ({
    parent: n,
    node: d,
    reference: null
  }));
  return n.textContent = i, [{ element: n, textContent: "" }, ...u];
}
function Wp({
  element: n,
  attributes: i = {},
  attributesNS: a = {}
}) {
  const u = { ...i }, l = { ...a };
  if (i && Object.keys(i).reverse().forEach((d) => {
    u[d] = n.getAttribute(d);
  }), i)
    for (const d of Object.entries(i))
      try {
        const [g, T] = d;
        T === null ? n.removeAttribute(g) : n.setAttribute(g, T);
      } catch {
        delete u[d[0]];
      }
  if (a && Object.entries(a).forEach(([d, g]) => {
    Object.keys(g).reverse().forEach((T) => {
      l[d] = {
        ...l[d],
        [T]: n.getAttributeNS(d, T.split(":").pop())
      };
    });
  }), a)
    for (const d of Object.entries(a)) {
      const [g, T] = d;
      for (const N of Object.entries(T))
        try {
          const [$, j] = N;
          j === null ? n.removeAttributeNS(g, $.split(":").pop()) : n.setAttributeNS(g, $, j);
        } catch {
          delete l[g][N[0]];
        }
    }
  return {
    element: n,
    attributes: u,
    attributesNS: l
  };
}
function Yp({ node: n }) {
  const { parentNode: i, nextSibling: a } = n;
  return i ? (i.removeChild(n), {
    node: n,
    parent: i,
    reference: a
  }) : [];
}
function Xp({ parent: n, node: i, reference: a }) {
  try {
    const { parentNode: u, nextSibling: l } = i;
    return n.insertBefore(i, a), u ? {
      node: i,
      parent: u,
      reference: l
    } : { node: i };
  } catch {
    return [];
  }
}
function So(n) {
  return fo(n) ? Xp(n) : lo(n) ? Yp(n) : va(n) ? Wp(n) : ya(n) ? Hp(n) : ma(n) ? n.map((i) => So(i)).reverse().flat(1 / 0) : [];
}
class Qp {
  past = [];
  future = [];
  commit(i, { title: a, squash: u } = {}) {
    const l = u && this.past.length ? this.past[this.past.length - 1] : { undo: [], redo: [] }, d = So(i);
    return l.undo.unshift(...[d].flat(1 / 0)), l.redo.push(...[i].flat(1 / 0)), a && (l.title = a), u && this.past.length && this.past.pop(), this.past.push(l), this.future = [], this.#e.forEach((g) => g(l)), l;
  }
  undo() {
    const i = this.past.pop();
    if (i)
      return So(i.undo), this.future.unshift(i), i;
  }
  redo() {
    const i = this.future.shift();
    if (i)
      return So(i.redo), this.past.push(i), i;
  }
  #e = [];
  subscribe(i) {
    const a = this.#e.length;
    return this.#e.push(i), () => (this.#e.splice(a, 1), i);
  }
}
async function Nc(n, i) {
  if (fo(n))
    await zp(n, i);
  else if (lo(n))
    await Jp(n, i);
  else if (va(n))
    await Zp(n, i);
  else if (ya(n))
    await eh(n, i);
  else if (ma(n))
    for (const a of n)
      await Nc(a, i);
}
async function zp(n, i) {
  const { parent: a, node: u } = n, l = u, d = a;
  let g = ao(l);
  const T = ao(d), N = await oh(i);
  g || (g = crypto.randomUUID(), l.setAttribute(li, g));
  const $ = th(l), j = {
    id: g,
    tagName: l.tagName,
    namespace: $,
    attributes: ih(l, N),
    value: l.textContent || "",
    parent: null,
    // Will be set by `ensureRelationship`
    children: []
  }, L = Pc(j), z = await i.addRecord({ ...L });
  let ie;
  if (T) {
    if (ie = await i.findRecordById(T), !ie)
      throw new Error(`parentId present: ${T}, but no record found`);
    await i.ensureRelationship(ie, z);
  }
}
async function Jp(n, i) {
  const { node: a } = n, l = ao(a);
  if (!l)
    throw new Error("Element must have a temp ID attribute for database operations");
  const d = await i.findRecordById(l);
  d && await i.deleteRecord(d);
}
async function Zp(n, i) {
  const { element: a, attributes: u = {}, attributesNS: l = {} } = n, d = ao(a);
  if (!d)
    throw new Error("Element must have a temp ID attribute for database operations");
  const g = await i.findRecordById(d);
  if (!g)
    throw new Error(`Record with ID ${d} not found`);
  const N = [...Pc(g).attributes || []];
  for (const [j, L] of Object.entries(u))
    if (L == null)
      Es(N, j);
    else {
      const ie = $s(j, L);
      fu(N, ie);
    }
  for (const [j, L] of Object.entries(l))
    if (L)
      for (const [z, ie] of Object.entries(L))
        if (ie == null) {
          const ne = await lu(j, i), he = ne ? `${ne}:${z}` : z;
          Es(N, he) || Es(N, z);
        } else {
          const ne = await lu(j, i), he = ne ? `${ne}:${z}` : z, ve = $s(
            he,
            ie,
            ne ? j : void 0,
            ne
          );
          fu(N, ve);
        }
  const $ = {
    ...g,
    attributes: N
  };
  await i.updateRecord($);
}
async function eh(n, i) {
  const { element: a, textContent: u } = n, l = ao(a);
  if (!l)
    throw new Error("Element must have a temp ID attribute for database operations");
  const d = await i.findRecordById(l);
  if (!d)
    throw new Error(`Record with ID ${l} not found`);
  const g = {
    ...d,
    value: u || ""
  };
  await i.updateRecord(g);
}
function ao(n) {
  return n.getAttribute(li);
}
function th(n) {
  return n.namespaceURI && n.prefix ? {
    prefix: n.prefix,
    uri: n.namespaceURI
  } : pa.default;
}
async function nh(n, i) {
  const u = (await i.findRootSCL()).attributes.find((d) => d.value === n);
  if (!u)
    throw new Error("could not find namespace by uri:" + n);
  const l = u.name.split(":");
  if (l.length < 2 || l[0] !== "xmlns")
    throw new Error("invalid namespace attribute format:" + u.name);
  return l[1];
}
async function lu(n, i) {
  try {
    return await nh(n, i);
  } catch (a) {
    return console.warn(`Could not resolve namespace prefix for ${n}:`, a), "";
  }
}
function $s(n, i, a, u) {
  return a && a !== sh ? {
    name: n,
    value: i,
    namespace: {
      prefix: u || "",
      uri: a
    }
  } : {
    name: n,
    value: i
  };
}
function rh(n, i) {
  if (!("namespace" in n && n.namespace.uri))
    return n;
  const u = i[n.namespace.uri];
  if (!u)
    return console.warn("no definition found for namespace", { uri: n.namespace.uri }), n;
  const l = n.name.split(":");
  return l.length === 2 && l[0] === u ? n : {
    name: `${u}:${n.name}`,
    value: n.value,
    namespace: {
      uri: n.namespace.uri,
      prefix: u
    }
  };
}
function fu(n, i) {
  const a = n.findIndex((l) => l.name === i.name);
  a !== -1 ? n[a] = i : n.push(i);
}
function Es(n, i) {
  const a = n.findIndex((l) => l.name === i);
  return a !== -1 ? (n.splice(a, 1), !0) : !1;
}
function ih(n, i) {
  const a = [];
  for (let u = 0; u < n.attributes.length; u++) {
    const l = n.attributes[u];
    if (l.name === li)
      continue;
    const g = $s(
      l.name,
      l.value,
      l.namespaceURI,
      l.prefix || void 0
    ), T = rh(g, i);
    a.push(T);
  }
  return a;
}
function Pc(n) {
  const i = n.attributes.filter(
    (a) => a.name !== li
  );
  return {
    ...n,
    attributes: i
  };
}
async function oh(n) {
  const i = {};
  try {
    const a = await n.findRootSCL();
    for (const u of a.attributes)
      if (u.name.startsWith("xmlns:")) {
        const d = u.name.split(":");
        if (d.length === 2) {
          const T = d[1], N = u.value;
          i[N] = T;
        } else
          console.warn(`Invalid namespace declaration format: ${u.name}`);
      }
  } catch (a) {
    console.warn("Could not gather namespaces from SCL root:", a);
  }
  return i;
}
const sh = "http://www.w3.org/1999/xhtml";
function ah(n) {
  return {
    addRecord: i,
    createRecord: l,
    updateRecord: a,
    deleteRecord: u,
    findRecordById: j,
    findRecordsByTagName: L,
    findChildRecords: ve,
    findChildRecordsByTagName: Ce,
    findChildRecordsWithinDepthAndGivenTagName: de,
    instantiate: z,
    ensureRelationship: g,
    ensurePrivateElement: T,
    findRootSCL: $,
    recordExists: d,
    findOneRecordByAttribute: ne,
    findAllRecordsByAttribute: he,
    close: qe,
    db: n
  };
  async function i(re) {
    const te = { ...re, id: re.id ?? crypto.randomUUID() };
    try {
      return await n.table(Qt).add(te), te;
    } catch (Te) {
      const K = {
        msg: "could not add record",
        db: n.name,
        newRecord: te,
        err: Te
      };
      throw console.error(K), new Error(JSON.stringify(K));
    }
  }
  async function a(re) {
    try {
      if (await n.table(Qt).update(re.id, re) < 1) {
        const Te = { msg: "nothing has been updated", record: re };
        throw console.error(Te), new Error(JSON.stringify(Te));
      }
    } catch (te) {
      console.error(te);
    }
  }
  async function u(re) {
    try {
      if (re.children)
        for (const te of re.children) {
          const Te = await j(te.id);
          if (!Te) {
            console.warn({
              msg: "deleteRecord: child relationship found but not child record, continuing",
              child: te
            });
            continue;
          }
          await u(Te);
        }
      if (re.parent?.id) {
        const te = await j(re.parent.id);
        if (!te) throw new Error("parent relationship found but not parent record");
        await N(te, re);
      }
      await n.table(Qt).delete(re.id);
    } catch (te) {
      console.error(te);
    }
  }
  async function l(re, te) {
    try {
      const Te = { ...re, id: crypto.randomUUID() };
      return await n.table(Qt).add(Te), te && await g(te, Te), {
        ...Te,
        parent: te ? { id: te.id, tagName: te.tagName } : null
      };
    } catch (Te) {
      const K = {
        msg: "could not add record",
        db: n.name,
        table: re.tagName,
        recordToCreate: re,
        err: Te
      };
      throw console.error(K), new Error(JSON.stringify(K));
    }
  }
  async function d(re) {
    return await n.table(Qt).where({ id: re.id }).count() > 0;
  }
  async function g(re, te) {
    const Te = re.children?.some((ut) => ut.id === te.id), K = te.parent?.id === re.id;
    Te || await n.table(Qt).update(re.id, {
      children: [...re.children, { id: te.id, tagName: te.tagName }]
    }), K || (te.parent = {
      id: re.id,
      tagName: re.tagName
    }, await n.table(Qt).update(te.id, { parent: te.parent }));
  }
  async function T(re) {
    let Te = (await he("Private", {
      name: "type",
      value: "eIEC61850-6-100"
    })).find((K) => K.parent?.id === re.id);
    if (!Te) {
      const K = {
        tagName: "Private",
        attributes: [{ name: "type", value: "eIEC61850-6-100" }],
        parent: null,
        namespace: pa.default,
        value: "",
        children: []
      };
      Te = await l(K), await g(re, Te);
    }
    return Te;
  }
  async function N(re, te) {
    te.parent = null, await a(te), re.children && (re.children = re.children.filter((Te) => Te.id !== te.id), await a(re));
  }
  async function $() {
    const re = await n.table(Qt).where({ tagName: "SCL" }).toArray();
    if (re.length === 0) throw new Error("there is no SCL element");
    if (re.length > 1)
      throw new Error("there are multiple SCL elements; there can be only one");
    const te = re[0];
    if (te.parent)
      throw new Error("the SCL element has a parent; the SCL should be the root element");
    return te;
  }
  async function j(re) {
    return await n.table(Qt).get(re);
  }
  async function L(re) {
    return await n.table(Qt).where({ tagName: re }).toArray();
  }
  function z(re) {
    const te = ie(re);
    if (!te)
      throw console.error('record does not have a "uuid" to move to "templateUUID"', re), new Error('record does not have a "uuid" to move to "templateUUID"');
    re.attributes?.push({ name: "templateUuid", value: te }), pe(re);
  }
  function ie(re) {
    const te = re.attributes?.find((Te) => Te.name === "uuid");
    if (te)
      return te.value;
  }
  function pe(re) {
    re.attributes || (re.attributes = []);
    const te = crypto.randomUUID(), Te = re.attributes.findIndex((ut) => ut.name === "uuid");
    Te >= 0 ? re.attributes[Te].value = te : re.attributes.push({ name: "uuid", value: te });
  }
  async function ne(re, te) {
    return uh(n, re, te);
  }
  async function he(re, te) {
    return ch(n, re, te);
  }
  async function ve(re) {
    return re.children?.length ? await n.table(Qt).where({ "parent.id": re.id }).toArray() : [];
  }
  async function Ce(re, te) {
    return (await ve(re)).filter((K) => te.includes(K.tagName));
  }
  async function de(re, te = Fe, Te = []) {
    const K = [];
    let ut = [re];
    for (let ft = 0; ft < te; ft++) {
      const ke = [];
      for (const ze of ut) {
        const jt = await Ce(ze, Te);
        jt.length !== 0 && (ke.push(...jt), K.push(...jt));
      }
      ut = [...ke];
    }
    return K;
  }
  function qe() {
    n.close();
  }
}
async function uh(n, i, a) {
  try {
    return await n.table(Qt).where({ tagName: i }).filter(
      (l) => !!l.attributes?.some((d) => d.name === a.name && d.value === a.value)
    ).first();
  } catch (u) {
    console.error({ msg: "could not find record by attribute", tagName: i, attr: a, err: u });
  }
}
async function ch(n, i, a) {
  try {
    return await n.table(Qt).where({ tagName: i }).filter(
      (l) => !!l.attributes?.some((d) => d.name === a.name && d.value === a.value)
    ).toArray();
  } catch (u) {
    console.error({ msg: "could not find record by attribute", tagName: i, attr: a, err: u });
  }
  return [];
}
const lh = zi("");
function Dc() {
  return lh;
}
var fh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function dh(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Eo = { exports: {} }, ph = Eo.exports, du;
function hh() {
  return du || (du = 1, function(n, i) {
    (function(a, u) {
      n.exports = u();
    })(ph, function() {
      var a = function(e, t) {
        return (a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
          r.__proto__ = o;
        } || function(r, o) {
          for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
        })(e, t);
      }, u = function() {
        return (u = Object.assign || function(e) {
          for (var t, r = 1, o = arguments.length; r < o; r++) for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
          return e;
        }).apply(this, arguments);
      };
      function l(e, t, r) {
        for (var o, s = 0, c = t.length; s < c; s++) !o && s in t || ((o = o || Array.prototype.slice.call(t, 0, s))[s] = t[s]);
        return e.concat(o || Array.prototype.slice.call(t));
      }
      var d = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : fh, g = Object.keys, T = Array.isArray;
      function N(e, t) {
        return typeof t != "object" || g(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || d.Promise || (d.Promise = Promise);
      var $ = Object.getPrototypeOf, j = {}.hasOwnProperty;
      function L(e, t) {
        return j.call(e, t);
      }
      function z(e, t) {
        typeof t == "function" && (t = t($(e))), (typeof Reflect > "u" ? g : Reflect.ownKeys)(t).forEach(function(r) {
          pe(e, r, t[r]);
        });
      }
      var ie = Object.defineProperty;
      function pe(e, t, r, o) {
        ie(e, t, N(r && L(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function ne(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), pe(e.prototype, "constructor", e), { extend: z.bind(null, e.prototype) };
        } };
      }
      var he = Object.getOwnPropertyDescriptor, ve = [].slice;
      function Ce(e, t, r) {
        return ve.call(e, t, r);
      }
      function Fe(e, t) {
        return t(e);
      }
      function de(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function qe(e) {
        d.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function re(e, t) {
        if (typeof t == "string" && L(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var r = [], o = 0, s = t.length; o < s; ++o) {
            var c = re(e, t[o]);
            r.push(c);
          }
          return r;
        }
        var f = t.indexOf(".");
        if (f !== -1) {
          var p = e[t.substr(0, f)];
          return p == null ? void 0 : re(p, t.substr(f + 1));
        }
      }
      function te(e, t, r) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          de(typeof r != "string" && "length" in r);
          for (var o = 0, s = t.length; o < s; ++o) te(e, t[o], r[o]);
        } else {
          var c, f, p = t.indexOf(".");
          p !== -1 ? (c = t.substr(0, p), (f = t.substr(p + 1)) === "" ? r === void 0 ? T(e) && !isNaN(parseInt(c)) ? e.splice(c, 1) : delete e[c] : e[c] = r : te(p = !(p = e[c]) || !L(e, c) ? e[c] = {} : p, f, r)) : r === void 0 ? T(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function Te(e) {
        var t, r = {};
        for (t in e) L(e, t) && (r[t] = e[t]);
        return r;
      }
      var K = [].concat;
      function ut(e) {
        return K.apply([], e);
      }
      var Ie = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ut([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return d[e];
      }), ft = new Set(Ie.map(function(e) {
        return d[e];
      })), ke = null;
      function ze(e) {
        return ke = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var o = ke.get(r);
          if (o) return o;
          if (T(r)) {
            o = [], ke.set(r, o);
            for (var s = 0, c = r.length; s < c; ++s) o.push(t(r[s]));
          } else if (ft.has(r.constructor)) o = r;
          else {
            var f, p = $(r);
            for (f in o = p === Object.prototype ? {} : Object.create(p), ke.set(r, o), r) L(r, f) && (o[f] = t(r[f]));
          }
          return o;
        }(e), ke = null, e;
      }
      var jt = {}.toString;
      function Et(e) {
        return jt.call(e).slice(8, -1);
      }
      var et = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", xe = typeof et == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[et]) && t.apply(e);
      } : function() {
        return null;
      };
      function Ne(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var nt = {};
      function tt(e) {
        var t, r, o, s;
        if (arguments.length === 1) {
          if (T(e)) return e.slice();
          if (this === nt && typeof e == "string") return [e];
          if (s = xe(e)) {
            for (r = []; !(o = s.next()).done; ) r.push(o.value);
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
      }, Ee = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], ct = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Ee), Tt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Ct(e, t) {
        this.name = e, this.message = t;
      }
      function Tn(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(r) {
          return t[r].toString();
        }).filter(function(r, o, s) {
          return s.indexOf(r) === o;
        }).join(`
`);
      }
      function en(e, t, r, o) {
        this.failures = t, this.failedKeys = o, this.successCount = r, this.message = Tn(e, t);
      }
      function pt(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(r) {
          return t[r];
        }), this.failuresByPos = t, this.message = Tn(e, this.failures);
      }
      ne(Ct).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), ne(en).from(Ct), ne(pt).from(Ct);
      var I = ct.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), _ = Ct, R = ct.reduce(function(e, t) {
        var r = t + "Error";
        function o(s, c) {
          this.name = r, s ? typeof s == "string" ? (this.message = "".concat(s).concat(c ? `
 ` + c : ""), this.inner = c || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = Tt[t] || r, this.inner = null);
        }
        return ne(o).from(_), e[t] = o, e;
      }, {});
      R.Syntax = SyntaxError, R.Type = TypeError, R.Range = RangeError;
      var B = Ee.reduce(function(e, t) {
        return e[t + "Error"] = R[t], e;
      }, {}), Me = ct.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = R[t]), e;
      }, {});
      function A() {
      }
      function k(e) {
        return e;
      }
      function Y(e, t) {
        return e == null || e === k ? t : function(r) {
          return t(e(r));
        };
      }
      function Q(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function ee(e, t) {
        return e === A ? t : function() {
          var r = e.apply(this, arguments);
          r !== void 0 && (arguments[0] = r);
          var o = this.onsuccess, s = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var c = t.apply(this, arguments);
          return o && (this.onsuccess = this.onsuccess ? Q(o, this.onsuccess) : o), s && (this.onerror = this.onerror ? Q(s, this.onerror) : s), c !== void 0 ? c : r;
        };
      }
      function J(e, t) {
        return e === A ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? Q(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? Q(o, this.onerror) : o);
        };
      }
      function ue(e, t) {
        return e === A ? t : function(r) {
          var o = e.apply(this, arguments);
          N(r, o);
          var s = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? Q(s, this.onsuccess) : s), c && (this.onerror = this.onerror ? Q(c, this.onerror) : c), o === void 0 ? r === void 0 ? void 0 : r : N(o, r);
        };
      }
      function le(e, t) {
        return e === A ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function oe(e, t) {
        return e === A ? t : function() {
          var r = e.apply(this, arguments);
          if (r && typeof r.then == "function") {
            for (var o = this, s = arguments.length, c = new Array(s); s--; ) c[s] = arguments[s];
            return r.then(function() {
              return t.apply(o, c);
            });
          }
          return t.apply(this, arguments);
        };
      }
      Me.ModifyError = en, Me.DexieError = Ct, Me.BulkError = pt;
      var Z = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function we(e) {
        Z = e;
      }
      var fe = {}, Se = 100, Ie = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, $(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, $(t), e];
      }(), Ee = Ie[0], ct = Ie[1], Ie = Ie[2], ct = ct && ct.then, je = Ee && Ee.constructor, Le = !!Ie, it = function(e, t) {
        tn.push([e, t]), gt && (queueMicrotask(Uo), gt = !1);
      }, dt = !0, gt = !0, ot = [], Lt = [], Cn = k, Xe = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: A, pgp: !1, env: {}, finalize: A }, X = Xe, tn = [], $t = 0, Rn = [];
      function H(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = X;
        if (typeof e != "function") {
          if (e !== fe) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && br(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function r(o, s) {
          try {
            s(function(c) {
              if (o._state === null) {
                if (c === o) throw new TypeError("A promise cannot be resolved with itself.");
                var f = o._lib && rn();
                c && typeof c.then == "function" ? r(o, function(p, m) {
                  c instanceof H ? c._then(p, m) : c.then(p, m);
                }) : (o._state = !0, o._value = c, di(o)), f && on();
              }
            }, br.bind(null, o));
          } catch (c) {
            br(o, c);
          }
        }(this, e);
      }
      var gr = { get: function() {
        var e = X, t = Kn;
        function r(o, s) {
          var c = this, f = !e.global && (e !== X || t !== Kn), p = f && !Ot(), m = new H(function(v, w) {
            _r(c, new fi(hi(o, e, f, p), hi(s, e, f, p), v, w, e));
          });
          return this._consoleTask && (m._consoleTask = this._consoleTask), m;
        }
        return r.prototype = fe, r;
      }, set: function(e) {
        pe(this, "then", e && e.prototype === fe ? gr : { get: function() {
          return e;
        }, set: gr.set });
      } };
      function fi(e, t, r, o, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = r, this.reject = o, this.psd = s;
      }
      function br(e, t) {
        var r, o;
        Lt.push(t), e._state === null && (r = e._lib && rn(), t = Cn(t), e._state = !1, e._value = t, o = e, ot.some(function(s) {
          return s._value === o._value;
        }) || ot.push(o), di(e), r && on());
      }
      function di(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var r = 0, o = t.length; r < o; ++r) _r(e, t[r]);
        var s = e._PSD;
        --s.ref || s.finalize(), $t === 0 && (++$t, it(function() {
          --$t == 0 && wr();
        }, []));
      }
      function _r(e, t) {
        if (e._state !== null) {
          var r = e._state ? t.onFulfilled : t.onRejected;
          if (r === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++$t, it($o, [r, e, t]);
        } else e._listeners.push(t);
      }
      function $o(e, t, r) {
        try {
          var o, s = t._value;
          !t._state && Lt.length && (Lt = []), o = Z && t._consoleTask ? t._consoleTask.run(function() {
            return e(s);
          }) : e(s), t._state || Lt.indexOf(s) !== -1 || function(c) {
            for (var f = ot.length; f; ) if (ot[--f]._value === c._value) return ot.splice(f, 1);
          }(t), r.resolve(o);
        } catch (c) {
          r.reject(c);
        } finally {
          --$t == 0 && wr(), --r.psd.ref || r.psd.finalize();
        }
      }
      function Uo() {
        Ut(Xe, function() {
          rn() && on();
        });
      }
      function rn() {
        var e = dt;
        return gt = dt = !1, e;
      }
      function on() {
        var e, t, r;
        do
          for (; 0 < tn.length; ) for (e = tn, tn = [], r = e.length, t = 0; t < r; ++t) {
            var o = e[t];
            o[0].apply(null, o[1]);
          }
        while (0 < tn.length);
        gt = dt = !0;
      }
      function wr() {
        var e = ot;
        ot = [], e.forEach(function(o) {
          o._PSD.onunhandled.call(null, o._value, o);
        });
        for (var t = Rn.slice(0), r = t.length; r; ) t[--r]();
      }
      function kn(e) {
        return new H(fe, !1, e);
      }
      function Oe(e, t) {
        var r = X;
        return function() {
          var o = rn(), s = X;
          try {
            return Nt(r, !0), e.apply(this, arguments);
          } catch (c) {
            t && t(c);
          } finally {
            Nt(s, !1), o && on();
          }
        };
      }
      z(H.prototype, { then: gr, _then: function(e, t) {
        _r(this, new fi(null, null, e, t, X));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, r = arguments[1];
        return typeof t == "function" ? this.then(null, function(o) {
          return (o instanceof t ? r : kn)(o);
        }) : this.then(null, function(o) {
          return (o && o.name === t ? r : kn)(o);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return H.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return H.resolve(e()).then(function() {
            return kn(t);
          });
        });
      }, timeout: function(e, t) {
        var r = this;
        return e < 1 / 0 ? new H(function(o, s) {
          var c = setTimeout(function() {
            return s(new R.Timeout(t));
          }, e);
          r.then(o, s).finally(clearTimeout.bind(null, c));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && pe(H.prototype, Symbol.toStringTag, "Dexie.Promise"), Xe.env = pi(), z(H, { all: function() {
        var e = tt.apply(null, arguments).map(Mn);
        return new H(function(t, r) {
          e.length === 0 && t([]);
          var o = e.length;
          e.forEach(function(s, c) {
            return H.resolve(s).then(function(f) {
              e[c] = f, --o || t(e);
            }, r);
          });
        });
      }, resolve: function(e) {
        return e instanceof H ? e : e && typeof e.then == "function" ? new H(function(t, r) {
          e.then(t, r);
        }) : new H(fe, !0, e);
      }, reject: kn, race: function() {
        var e = tt.apply(null, arguments).map(Mn);
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
        return Kn;
      } }, newPSD: It, usePSD: Ut, scheduler: { get: function() {
        return it;
      }, set: function(e) {
        it = e;
      } }, rejectionMapper: { get: function() {
        return Cn;
      }, set: function(e) {
        Cn = e;
      } }, follow: function(e, t) {
        return new H(function(r, o) {
          return It(function(s, c) {
            var f = X;
            f.unhandleds = [], f.onunhandled = c, f.finalize = Q(function() {
              var p, m = this;
              p = function() {
                m.unhandleds.length === 0 ? s() : c(m.unhandleds[0]);
              }, Rn.push(function v() {
                p(), Rn.splice(Rn.indexOf(v), 1);
              }), ++$t, it(function() {
                --$t == 0 && wr();
              }, []);
            }, f.finalize), e();
          }, t, r, o);
        });
      } }), je && (je.allSettled && pe(H, "allSettled", function() {
        var e = tt.apply(null, arguments).map(Mn);
        return new H(function(t) {
          e.length === 0 && t([]);
          var r = e.length, o = new Array(r);
          e.forEach(function(s, c) {
            return H.resolve(s).then(function(f) {
              return o[c] = { status: "fulfilled", value: f };
            }, function(f) {
              return o[c] = { status: "rejected", reason: f };
            }).then(function() {
              return --r || t(o);
            });
          });
        });
      }), je.any && typeof AggregateError < "u" && pe(H, "any", function() {
        var e = tt.apply(null, arguments).map(Mn);
        return new H(function(t, r) {
          e.length === 0 && r(new AggregateError([]));
          var o = e.length, s = new Array(o);
          e.forEach(function(c, f) {
            return H.resolve(c).then(function(p) {
              return t(p);
            }, function(p) {
              s[f] = p, --o || r(new AggregateError(s));
            });
          });
        });
      }), je.withResolvers && (H.withResolvers = je.withResolvers));
      var $e = { awaits: 0, echoes: 0, id: 0 }, Vo = 0, jn = [], Fn = 0, Kn = 0, Go = 0;
      function It(e, t, r, o) {
        var s = X, c = Object.create(s);
        return c.parent = s, c.ref = 0, c.global = !1, c.id = ++Go, Xe.env, c.env = Le ? { Promise: H, PromiseProp: { value: H, configurable: !0, writable: !0 }, all: H.all, race: H.race, allSettled: H.allSettled, any: H.any, resolve: H.resolve, reject: H.reject } : {}, t && N(c, t), ++s.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = Ut(c, e, r, o), c.ref === 0 && c.finalize(), o;
      }
      function sn() {
        return $e.id || ($e.id = ++Vo), ++$e.awaits, $e.echoes += Se, $e.id;
      }
      function Ot() {
        return !!$e.awaits && (--$e.awaits == 0 && ($e.id = 0), $e.echoes = $e.awaits * Se, !0);
      }
      function Mn(e) {
        return $e.echoes && e && e.constructor === je ? (sn(), e.then(function(t) {
          return Ot(), t;
        }, function(t) {
          return Ot(), De(t);
        })) : e;
      }
      function Ho() {
        var e = jn[jn.length - 1];
        jn.pop(), Nt(e, !1);
      }
      function Nt(e, t) {
        var r, o = X;
        (t ? !$e.echoes || Fn++ && e === X : !Fn || --Fn && e === X) || queueMicrotask(t ? (function(s) {
          ++Kn, $e.echoes && --$e.echoes != 0 || ($e.echoes = $e.awaits = $e.id = 0), jn.push(X), Nt(s, !0);
        }).bind(null, e) : Ho), e !== X && (X = e, o === Xe && (Xe.env = pi()), Le && (r = Xe.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(d, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function pi() {
        var e = d.Promise;
        return Le ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(d, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Ut(e, t, r, o, s) {
        var c = X;
        try {
          return Nt(e, !0), t(r, o, s);
        } finally {
          Nt(c, !1);
        }
      }
      function hi(e, t, r, o) {
        return typeof e != "function" ? e : function() {
          var s = X;
          r && sn(), Nt(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Nt(s, !1), o && queueMicrotask(Ot);
          }
        };
      }
      function xr(e) {
        Promise === je && $e.echoes === 0 ? Fn === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + ct).indexOf("[native code]") === -1 && (sn = Ot = A);
      var De = H.reject, Vt = "￿", _t = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", mi = "String expected.", an = [], Bn = "__dbnames", Sr = "readonly", Er = "readwrite";
      function Gt(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var yi = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function qn(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = ze(t))[e], t;
        };
      }
      function vi() {
        throw R.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function me(e, t) {
        try {
          var r = gi(e), o = gi(t);
          if (r !== o) return r === "Array" ? 1 : o === "Array" ? -1 : r === "binary" ? 1 : o === "binary" ? -1 : r === "string" ? 1 : o === "string" ? -1 : r === "Date" ? 1 : o !== "Date" ? NaN : -1;
          switch (r) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return function(s, c) {
                for (var f = s.length, p = c.length, m = f < p ? f : p, v = 0; v < m; ++v) if (s[v] !== c[v]) return s[v] < c[v] ? -1 : 1;
                return f === p ? 0 : f < p ? -1 : 1;
              }(bi(e), bi(t));
            case "Array":
              return function(s, c) {
                for (var f = s.length, p = c.length, m = f < p ? f : p, v = 0; v < m; ++v) {
                  var w = me(s[v], c[v]);
                  if (w !== 0) return w;
                }
                return f === p ? 0 : f < p ? -1 : 1;
              }(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function gi(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = Et(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function bi(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function Ln(e, t, r) {
        var o = e.schema.yProps;
        return o ? (t && 0 < r.numFailures && (t = t.filter(function(s, c) {
          return !r.failures[c];
        })), Promise.all(o.map(function(s) {
          return s = s.updatesTable, t ? e.db.table(s).where("k").anyOf(t).delete() : e.db.table(s).clear();
        })).then(function() {
          return r;
        })) : r;
      }
      var _i = (Ae.prototype._trans = function(e, t, r) {
        var o = this._tx || X.trans, s = this.name, c = Z && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function f(v, w, h) {
          if (!h.schema[s]) throw new R.NotFound("Table " + s + " not part of transaction");
          return t(h.idbtrans, h);
        }
        var p = rn();
        try {
          var m = o && o.db._novip === this.db._novip ? o === X.trans ? o._promise(e, f, r) : It(function() {
            return o._promise(e, f, r);
          }, { trans: o, transless: X.transless || X }) : function v(w, h, E, y) {
            if (w.idbdb && (w._state.openComplete || X.letThrough || w._vip)) {
              var b = w._createTransaction(h, E, w._dbSchema);
              try {
                b.create(), w._state.PR1398_maxLoop = 3;
              } catch (S) {
                return S.name === I.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                  return v(w, h, E, y);
                })) : De(S);
              }
              return b._promise(h, function(S, x) {
                return It(function() {
                  return X.trans = b, y(S, x, b);
                });
              }).then(function(S) {
                if (h === "readwrite") try {
                  b.idbtrans.commit();
                } catch {
                }
                return h === "readonly" ? S : b._completion.then(function() {
                  return S;
                });
              });
            }
            if (w._state.openComplete) return De(new R.DatabaseClosed(w._state.dbOpenError));
            if (!w._state.isBeingOpened) {
              if (!w._state.autoOpen) return De(new R.DatabaseClosed());
              w.open().catch(A);
            }
            return w._state.dbReadyPromise.then(function() {
              return v(w, h, E, y);
            });
          }(this.db, e, [this.name], f);
          return c && (m._consoleTask = c, m = m.catch(function(v) {
            return console.trace(v), De(v);
          })), m;
        } finally {
          p && on();
        }
      }, Ae.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? De(new R.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(s) {
            return r.hook.reading.fire(s);
          });
        }).then(t);
      }, Ae.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (T(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = g(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var r = this.schema.indexes.concat(this.schema.primKey).filter(function(p) {
          if (p.compound && t.every(function(v) {
            return 0 <= p.keyPath.indexOf(v);
          })) {
            for (var m = 0; m < t.length; ++m) if (t.indexOf(p.keyPath[m]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(p, m) {
          return p.keyPath.length - m.keyPath.length;
        })[0];
        if (r && this.db._maxKey !== Vt) {
          var c = r.keyPath.slice(0, t.length);
          return this.where(c).equals(c.map(function(m) {
            return e[m];
          }));
        }
        !r && Z && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var o = this.schema.idxByName;
        function s(p, m) {
          return me(p, m) === 0;
        }
        var f = t.reduce(function(h, m) {
          var v = h[0], w = h[1], h = o[m], E = e[m];
          return [v || h, v || !h ? Gt(w, h && h.multi ? function(y) {
            return y = re(y, m), T(y) && y.some(function(b) {
              return s(E, b);
            });
          } : function(y) {
            return s(E, re(y, m));
          }) : w];
        }, [null, null]), c = f[0], f = f[1];
        return c ? this.where(c.name).equals(e[c.keyPath]).filter(f) : r ? this.filter(f) : this.where(t).equals("");
      }, Ae.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, Ae.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, Ae.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, Ae.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, Ae.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, Ae.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, Ae.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Ae.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, T(e) ? "[".concat(e.join("+"), "]") : e));
      }, Ae.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Ae.prototype.mapToClass = function(e) {
        var t, r = this.db, o = this.name;
        function s() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof vi && (function(m, v) {
          if (typeof v != "function" && v !== null) throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
          function w() {
            this.constructor = m;
          }
          a(m, v), m.prototype = v === null ? Object.create(v) : (w.prototype = v.prototype, new w());
        }(s, t = e), Object.defineProperty(s.prototype, "db", { get: function() {
          return r;
        }, enumerable: !1, configurable: !0 }), s.prototype.table = function() {
          return o;
        }, e = s);
        for (var c = /* @__PURE__ */ new Set(), f = e.prototype; f; f = $(f)) Object.getOwnPropertyNames(f).forEach(function(m) {
          return c.add(m);
        });
        function p(m) {
          if (!m) return m;
          var v, w = Object.create(e.prototype);
          for (v in m) if (!c.has(v)) try {
            w[v] = m[v];
          } catch {
          }
          return w;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = p, this.hook("reading", p), e;
      }, Ae.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          N(this, e);
        });
      }, Ae.prototype.add = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, f = e;
        return c && s && (f = qn(c)(e)), this._trans("readwrite", function(p) {
          return r.core.mutate({ trans: p, type: "add", keys: t != null ? [t] : null, values: [f] });
        }).then(function(p) {
          return p.numFailures ? H.reject(p.failures[0]) : p.lastResult;
        }).then(function(p) {
          if (c) try {
            te(e, c, p);
          } catch {
          }
          return p;
        });
      }, Ae.prototype.update = function(e, t) {
        return typeof e != "object" || T(e) ? this.where(":id").equals(e).modify(t) : (e = re(e, this.schema.primKey.keyPath), e === void 0 ? De(new R.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, Ae.prototype.put = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, f = e;
        return c && s && (f = qn(c)(e)), this._trans("readwrite", function(p) {
          return r.core.mutate({ trans: p, type: "put", values: [f], keys: t != null ? [t] : null });
        }).then(function(p) {
          return p.numFailures ? H.reject(p.failures[0]) : p.lastResult;
        }).then(function(p) {
          if (c) try {
            te(e, c, p);
          } catch {
          }
          return p;
        });
      }, Ae.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: [e] }).then(function(o) {
            return Ln(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? H.reject(o.failures[0]) : void 0;
          });
        });
      }, Ae.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: yi }).then(function(r) {
            return Ln(e, null, r);
          });
        }).then(function(t) {
          return t.numFailures ? H.reject(t.failures[0]) : void 0;
        });
      }, Ae.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(r) {
          return t.core.getMany({ keys: e, trans: r }).then(function(o) {
            return o.map(function(s) {
              return t.hook.reading.fire(s);
            });
          });
        });
      }, Ae.prototype.bulkAdd = function(e, t, r) {
        var o = this, s = Array.isArray(t) ? t : void 0, c = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(f) {
          var v = o.schema.primKey, p = v.auto, v = v.keyPath;
          if (v && s) throw new R.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new R.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, v = v && p ? e.map(qn(v)) : e;
          return o.core.mutate({ trans: f, type: "add", keys: s, values: v, wantResults: c }).then(function(b) {
            var h = b.numFailures, E = b.results, y = b.lastResult, b = b.failures;
            if (h === 0) return c ? E : y;
            throw new pt("".concat(o.name, ".bulkAdd(): ").concat(h, " of ").concat(m, " operations failed"), b);
          });
        });
      }, Ae.prototype.bulkPut = function(e, t, r) {
        var o = this, s = Array.isArray(t) ? t : void 0, c = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(f) {
          var v = o.schema.primKey, p = v.auto, v = v.keyPath;
          if (v && s) throw new R.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new R.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, v = v && p ? e.map(qn(v)) : e;
          return o.core.mutate({ trans: f, type: "put", keys: s, values: v, wantResults: c }).then(function(b) {
            var h = b.numFailures, E = b.results, y = b.lastResult, b = b.failures;
            if (h === 0) return c ? E : y;
            throw new pt("".concat(o.name, ".bulkPut(): ").concat(h, " of ").concat(m, " operations failed"), b);
          });
        });
      }, Ae.prototype.bulkUpdate = function(e) {
        var t = this, r = this.core, o = e.map(function(f) {
          return f.key;
        }), s = e.map(function(f) {
          return f.changes;
        }), c = [];
        return this._trans("readwrite", function(f) {
          return r.getMany({ trans: f, keys: o, cache: "clone" }).then(function(p) {
            var m = [], v = [];
            e.forEach(function(h, E) {
              var y = h.key, b = h.changes, S = p[E];
              if (S) {
                for (var x = 0, C = Object.keys(b); x < C.length; x++) {
                  var O = C[x], P = b[O];
                  if (O === t.schema.primKey.keyPath) {
                    if (me(P, y) !== 0) throw new R.Constraint("Cannot update primary key in bulkUpdate()");
                  } else te(S, O, P);
                }
                c.push(E), m.push(y), v.push(S);
              }
            });
            var w = m.length;
            return r.mutate({ trans: f, type: "put", keys: m, values: v, updates: { keys: o, changeSpecs: s } }).then(function(h) {
              var E = h.numFailures, y = h.failures;
              if (E === 0) return w;
              for (var b = 0, S = Object.keys(y); b < S.length; b++) {
                var x, C = S[b], O = c[Number(C)];
                O != null && (x = y[C], delete y[C], y[O] = x);
              }
              throw new pt("".concat(t.name, ".bulkUpdate(): ").concat(E, " of ").concat(w, " operations failed"), y);
            });
          });
        });
      }, Ae.prototype.bulkDelete = function(e) {
        var t = this, r = e.length;
        return this._trans("readwrite", function(o) {
          return t.core.mutate({ trans: o, type: "delete", keys: e }).then(function(s) {
            return Ln(t, e, s);
          });
        }).then(function(f) {
          var s = f.numFailures, c = f.lastResult, f = f.failures;
          if (s === 0) return c;
          throw new pt("".concat(t.name, ".bulkDelete(): ").concat(s, " of ").concat(r, " operations failed"), f);
        });
      }, Ae);
      function Ae() {
      }
      function hn(e) {
        function t(f, p) {
          if (p) {
            for (var m = arguments.length, v = new Array(m - 1); --m; ) v[m - 1] = arguments[m];
            return r[f].subscribe.apply(null, v), e;
          }
          if (typeof f == "string") return r[f];
        }
        var r = {};
        t.addEventType = c;
        for (var o = 1, s = arguments.length; o < s; ++o) c(arguments[o]);
        return t;
        function c(f, p, m) {
          if (typeof f != "object") {
            var v;
            p = p || le;
            var w = { subscribers: [], fire: m = m || A, subscribe: function(h) {
              w.subscribers.indexOf(h) === -1 && (w.subscribers.push(h), w.fire = p(w.fire, h));
            }, unsubscribe: function(h) {
              w.subscribers = w.subscribers.filter(function(E) {
                return E !== h;
              }), w.fire = w.subscribers.reduce(p, m);
            } };
            return r[f] = t[f] = w;
          }
          g(v = f).forEach(function(h) {
            var E = v[h];
            if (T(E)) c(h, v[h][0], v[h][1]);
            else {
              if (E !== "asap") throw new R.InvalidArgument("Invalid event config");
              var y = c(h, k, function() {
                for (var b = arguments.length, S = new Array(b); b--; ) S[b] = arguments[b];
                y.subscribers.forEach(function(x) {
                  qe(function() {
                    x.apply(null, S);
                  });
                });
              });
            }
          });
        }
      }
      function mn(e, t) {
        return ne(t).from({ prototype: e }), t;
      }
      function un(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function Tr(e, t) {
        e.filter = Gt(e.filter, t);
      }
      function Cr(e, t, r) {
        var o = e.replayFilter;
        e.replayFilter = o ? function() {
          return Gt(o(), t());
        } : t, e.justLimit = r && !o;
      }
      function $n(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var r = t.getIndexByKeyPath(e.index);
        if (!r) throw new R.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return r;
      }
      function wi(e, t, r) {
        var o = $n(e, t.schema);
        return t.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: o, range: e.range } });
      }
      function Un(e, t, r, o) {
        var s = e.replayFilter ? Gt(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var c = {}, f = function(p, m, v) {
            var w, h;
            s && !s(m, v, function(E) {
              return m.stop(E);
            }, function(E) {
              return m.fail(E);
            }) || ((h = "" + (w = m.primaryKey)) == "[object ArrayBuffer]" && (h = "" + new Uint8Array(w)), L(c, h) || (c[h] = !0, t(p, m, v)));
          };
          return Promise.all([e.or._iterate(f, r), xi(wi(e, o, r), e.algorithm, f, !e.keysOnly && e.valueMapper)]);
        }
        return xi(wi(e, o, r), Gt(e.algorithm, s), t, !e.keysOnly && e.valueMapper);
      }
      function xi(e, t, r, o) {
        var s = Oe(o ? function(c, f, p) {
          return r(o(c), f, p);
        } : r);
        return e.then(function(c) {
          if (c) return c.start(function() {
            var f = function() {
              return c.continue();
            };
            t && !t(c, function(p) {
              return f = p;
            }, function(p) {
              c.stop(p), f = A;
            }, function(p) {
              c.fail(p), f = A;
            }) || s(c.value, c, function(p) {
              return f = p;
            }), f();
          });
        });
      }
      var yn = (Si.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var r = t.add;
          if (T(r)) return l(l([], T(e) ? e : [], !0), r).sort();
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
          if (T(o)) return T(e) ? e.filter(function(s) {
            return !o.includes(s);
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
      }, Si);
      function Si(e) {
        this["@@propmod"] = e;
      }
      var Wo = (ge.prototype._read = function(e, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, De.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, ge.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, De.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, ge.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Gt(t.algorithm, e);
      }, ge.prototype._iterate = function(e, t) {
        return Un(this._ctx, e, t, this._ctx.table.core);
      }, ge.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && N(r, e), t._ctx = r, t;
      }, ge.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, ge.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(r) {
          return Un(t, e, r, t.table.core);
        });
      }, ge.prototype.count = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx, s = o.table.core;
          if (un(o, !0)) return s.count({ trans: r, query: { index: $n(o, s.schema), range: o.range } }).then(function(f) {
            return Math.min(f, o.limit);
          });
          var c = 0;
          return Un(o, function() {
            return ++c, !1;
          }, r, s).then(function() {
            return c;
          });
        }).then(e);
      }, ge.prototype.sortBy = function(e, t) {
        var r = e.split(".").reverse(), o = r[0], s = r.length - 1;
        function c(m, v) {
          return v ? c(m[r[v]], v - 1) : m[o];
        }
        var f = this._ctx.dir === "next" ? 1 : -1;
        function p(m, v) {
          return me(c(m, s), c(v, s)) * f;
        }
        return this.toArray(function(m) {
          return m.sort(p);
        }).then(t);
      }, ge.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx;
          if (o.dir === "next" && un(o, !0) && 0 < o.limit) {
            var s = o.valueMapper, c = $n(o, o.table.core.schema);
            return o.table.core.query({ trans: r, limit: o.limit, values: !0, query: { index: c, range: o.range } }).then(function(p) {
              return p = p.result, s ? p.map(s) : p;
            });
          }
          var f = [];
          return Un(o, function(p) {
            return f.push(p);
          }, r, o.table.core).then(function() {
            return f;
          });
        }, e);
      }, ge.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, un(t) ? Cr(t, function() {
          var r = e;
          return function(o, s) {
            return r === 0 || (r === 1 ? --r : s(function() {
              o.advance(r), r = 0;
            }), !1);
          };
        }) : Cr(t, function() {
          var r = e;
          return function() {
            return --r < 0;
          };
        })), this;
      }, ge.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Cr(this._ctx, function() {
          var t = e;
          return function(r, o, s) {
            return --t <= 0 && o(s), 0 <= t;
          };
        }, !0), this;
      }, ge.prototype.until = function(e, t) {
        return Tr(this._ctx, function(r, o, s) {
          return !e(r.value) || (o(s), t);
        }), this;
      }, ge.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, ge.prototype.last = function(e) {
        return this.reverse().first(e);
      }, ge.prototype.filter = function(e) {
        var t;
        return Tr(this._ctx, function(r) {
          return e(r.value);
        }), (t = this._ctx).isMatch = Gt(t.isMatch, e), this;
      }, ge.prototype.and = function(e) {
        return this.filter(e);
      }, ge.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, ge.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, ge.prototype.desc = function() {
        return this.reverse();
      }, ge.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.key, o);
        });
      }, ge.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, ge.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.primaryKey, o);
        });
      }, ge.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(o, s) {
          r.push(s.key);
        }).then(function() {
          return r;
        }).then(e);
      }, ge.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && un(t, !0) && 0 < t.limit) return this._read(function(o) {
          var s = $n(t, t.table.core.schema);
          return t.table.core.query({ trans: o, values: !1, limit: t.limit, query: { index: s, range: t.range } });
        }).then(function(o) {
          return o.result;
        }).then(e);
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(o, s) {
          r.push(s.primaryKey);
        }).then(function() {
          return r;
        }).then(e);
      }, ge.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, ge.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, ge.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, ge.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return Tr(this._ctx, function(s) {
          var o = s.primaryKey.toString(), s = L(t, o);
          return t[o] = !0, !s;
        }), this;
      }, ge.prototype.modify = function(e) {
        var t = this, r = this._ctx;
        return this._write(function(o) {
          var s, c, f;
          f = typeof e == "function" ? e : (s = g(e), c = s.length, function(C) {
            for (var O = !1, P = 0; P < c; ++P) {
              var D = s[P], F = e[D], U = re(C, D);
              F instanceof yn ? (te(C, D, F.execute(U)), O = !0) : U !== F && (te(C, D, F), O = !0);
            }
            return O;
          });
          var p = r.table.core, h = p.schema.primaryKey, m = h.outbound, v = h.extractKey, w = 200, h = t.db._options.modifyChunkSize;
          h && (w = typeof h == "object" ? h[p.name] || h["*"] || 200 : h);
          function E(C, D) {
            var P = D.failures, D = D.numFailures;
            b += C - D;
            for (var F = 0, U = g(P); F < U.length; F++) {
              var M = U[F];
              y.push(P[M]);
            }
          }
          var y = [], b = 0, S = [], x = e === Ei;
          return t.clone().primaryKeys().then(function(C) {
            function O(D) {
              var F = Math.min(w, C.length - D), U = C.slice(D, D + F);
              return (x ? Promise.resolve([]) : p.getMany({ trans: o, keys: U, cache: "immutable" })).then(function(M) {
                var q = [], G = [], V = m ? [] : null, W = x ? U : [];
                if (!x) for (var ce = 0; ce < F; ++ce) {
                  var ye = M[ce], ae = { value: ze(ye), primKey: C[D + ce] };
                  f.call(ae, ae.value, ae) !== !1 && (ae.value == null ? W.push(C[D + ce]) : m || me(v(ye), v(ae.value)) === 0 ? (G.push(ae.value), m && V.push(C[D + ce])) : (W.push(C[D + ce]), q.push(ae.value)));
                }
                return Promise.resolve(0 < q.length && p.mutate({ trans: o, type: "add", values: q }).then(function(Pe) {
                  for (var se in Pe.failures) W.splice(parseInt(se), 1);
                  E(q.length, Pe);
                })).then(function() {
                  return (0 < G.length || P && typeof e == "object") && p.mutate({ trans: o, type: "put", keys: V, values: G, criteria: P, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < D }).then(function(Pe) {
                    return E(G.length, Pe);
                  });
                }).then(function() {
                  return (0 < W.length || P && x) && p.mutate({ trans: o, type: "delete", keys: W, criteria: P, isAdditionalChunk: 0 < D }).then(function(Pe) {
                    return Ln(r.table, W, Pe);
                  }).then(function(Pe) {
                    return E(W.length, Pe);
                  });
                }).then(function() {
                  return C.length > D + F && O(D + w);
                });
              });
            }
            var P = un(r) && r.limit === 1 / 0 && (typeof e != "function" || x) && { index: r.index, range: r.range };
            return O(0).then(function() {
              if (0 < y.length) throw new en("Error modifying one or more objects", y, b, S);
              return C.length;
            });
          });
        });
      }, ge.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !un(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(Ei) : this._write(function(r) {
          var o = e.table.core.schema.primaryKey, s = t;
          return e.table.core.count({ trans: r, query: { index: o, range: s } }).then(function(c) {
            return e.table.core.mutate({ trans: r, type: "deleteRange", range: s }).then(function(m) {
              var p = m.failures, m = m.numFailures;
              if (m) throw new en("Could not delete some values", Object.keys(p).map(function(v) {
                return p[v];
              }), c - m);
              return c - m;
            });
          });
        });
      }, ge);
      function ge() {
      }
      var Ei = function(e, t) {
        return t.value = null;
      };
      function Yo(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function Xo(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function rt(e, t, r) {
        return e = e instanceof Ci ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function cn(e) {
        return new e.Collection(e, function() {
          return Ti("");
        }).limit(0);
      }
      function Vn(e, t, r, o) {
        var s, c, f, p, m, v, w, h = r.length;
        if (!r.every(function(b) {
          return typeof b == "string";
        })) return rt(e, mi);
        function E(b) {
          s = b === "next" ? function(x) {
            return x.toUpperCase();
          } : function(x) {
            return x.toLowerCase();
          }, c = b === "next" ? function(x) {
            return x.toLowerCase();
          } : function(x) {
            return x.toUpperCase();
          }, f = b === "next" ? Yo : Xo;
          var S = r.map(function(x) {
            return { lower: c(x), upper: s(x) };
          }).sort(function(x, C) {
            return f(x.lower, C.lower);
          });
          p = S.map(function(x) {
            return x.upper;
          }), m = S.map(function(x) {
            return x.lower;
          }), w = (v = b) === "next" ? "" : o;
        }
        E("next"), e = new e.Collection(e, function() {
          return Pt(p[0], m[h - 1] + o);
        }), e._ondirectionchange = function(b) {
          E(b);
        };
        var y = 0;
        return e._addAlgorithm(function(b, S, x) {
          var C = b.key;
          if (typeof C != "string") return !1;
          var O = c(C);
          if (t(O, m, y)) return !0;
          for (var P = null, D = y; D < h; ++D) {
            var F = function(U, M, q, G, V, W) {
              for (var ce = Math.min(U.length, G.length), ye = -1, ae = 0; ae < ce; ++ae) {
                var Pe = M[ae];
                if (Pe !== G[ae]) return V(U[ae], q[ae]) < 0 ? U.substr(0, ae) + q[ae] + q.substr(ae + 1) : V(U[ae], G[ae]) < 0 ? U.substr(0, ae) + G[ae] + q.substr(ae + 1) : 0 <= ye ? U.substr(0, ye) + M[ye] + q.substr(ye + 1) : null;
                V(U[ae], Pe) < 0 && (ye = ae);
              }
              return ce < G.length && W === "next" ? U + q.substr(U.length) : ce < U.length && W === "prev" ? U.substr(0, q.length) : ye < 0 ? null : U.substr(0, ye) + G[ye] + q.substr(ye + 1);
            }(C, O, p[D], m[D], f, v);
            F === null && P === null ? y = D + 1 : (P === null || 0 < f(P, F)) && (P = F);
          }
          return S(P !== null ? function() {
            b.continue(P + w);
          } : x), !1;
        }), e;
      }
      function Pt(e, t, r, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: o };
      }
      function Ti(e) {
        return { type: 1, lower: e, upper: e };
      }
      var Ci = (Object.defineProperty(Ue.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Ue.prototype.between = function(e, t, r, o) {
        r = r !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || o) && (!r || !o) ? cn(this) : new this.Collection(this, function() {
            return Pt(e, t, !r, !o);
          });
        } catch {
          return rt(this, _t);
        }
      }, Ue.prototype.equals = function(e) {
        return e == null ? rt(this, _t) : new this.Collection(this, function() {
          return Ti(e);
        });
      }, Ue.prototype.above = function(e) {
        return e == null ? rt(this, _t) : new this.Collection(this, function() {
          return Pt(e, void 0, !0);
        });
      }, Ue.prototype.aboveOrEqual = function(e) {
        return e == null ? rt(this, _t) : new this.Collection(this, function() {
          return Pt(e, void 0, !1);
        });
      }, Ue.prototype.below = function(e) {
        return e == null ? rt(this, _t) : new this.Collection(this, function() {
          return Pt(void 0, e, !1, !0);
        });
      }, Ue.prototype.belowOrEqual = function(e) {
        return e == null ? rt(this, _t) : new this.Collection(this, function() {
          return Pt(void 0, e);
        });
      }, Ue.prototype.startsWith = function(e) {
        return typeof e != "string" ? rt(this, mi) : this.between(e, e + Vt, !0, !0);
      }, Ue.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Vn(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], Vt);
      }, Ue.prototype.equalsIgnoreCase = function(e) {
        return Vn(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, Ue.prototype.anyOfIgnoreCase = function() {
        var e = tt.apply(nt, arguments);
        return e.length === 0 ? cn(this) : Vn(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, Ue.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = tt.apply(nt, arguments);
        return e.length === 0 ? cn(this) : Vn(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, Vt);
      }, Ue.prototype.anyOf = function() {
        var e = this, t = tt.apply(nt, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return rt(this, _t);
        }
        if (t.length === 0) return cn(this);
        var o = new this.Collection(this, function() {
          return Pt(t[0], t[t.length - 1]);
        });
        o._ondirectionchange = function(c) {
          r = c === "next" ? e._ascending : e._descending, t.sort(r);
        };
        var s = 0;
        return o._addAlgorithm(function(c, f, p) {
          for (var m = c.key; 0 < r(m, t[s]); ) if (++s === t.length) return f(p), !1;
          return r(m, t[s]) === 0 || (f(function() {
            c.continue(t[s]);
          }), !1);
        }), o;
      }, Ue.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Ue.prototype.noneOf = function() {
        var e = tt.apply(nt, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return rt(this, _t);
        }
        var t = e.reduce(function(r, o) {
          return r ? r.concat([[r[r.length - 1][1], o]]) : [[-1 / 0, o]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, Ue.prototype.inAnyRange = function(C, t) {
        var r = this, o = this._cmp, s = this._ascending, c = this._descending, f = this._min, p = this._max;
        if (C.length === 0) return cn(this);
        if (!C.every(function(O) {
          return O[0] !== void 0 && O[1] !== void 0 && s(O[0], O[1]) <= 0;
        })) return rt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", R.InvalidArgument);
        var m = !t || t.includeLowers !== !1, v = t && t.includeUppers === !0, w, h = s;
        function E(O, P) {
          return h(O[0], P[0]);
        }
        try {
          (w = C.reduce(function(O, P) {
            for (var D = 0, F = O.length; D < F; ++D) {
              var U = O[D];
              if (o(P[0], U[1]) < 0 && 0 < o(P[1], U[0])) {
                U[0] = f(U[0], P[0]), U[1] = p(U[1], P[1]);
                break;
              }
            }
            return D === F && O.push(P), O;
          }, [])).sort(E);
        } catch {
          return rt(this, _t);
        }
        var y = 0, b = v ? function(O) {
          return 0 < s(O, w[y][1]);
        } : function(O) {
          return 0 <= s(O, w[y][1]);
        }, S = m ? function(O) {
          return 0 < c(O, w[y][0]);
        } : function(O) {
          return 0 <= c(O, w[y][0]);
        }, x = b, C = new this.Collection(this, function() {
          return Pt(w[0][0], w[w.length - 1][1], !m, !v);
        });
        return C._ondirectionchange = function(O) {
          h = O === "next" ? (x = b, s) : (x = S, c), w.sort(E);
        }, C._addAlgorithm(function(O, P, D) {
          for (var F, U = O.key; x(U); ) if (++y === w.length) return P(D), !1;
          return !b(F = U) && !S(F) || (r._cmp(U, w[y][1]) === 0 || r._cmp(U, w[y][0]) === 0 || P(function() {
            h === s ? O.continue(w[y][0]) : O.continue(w[y][1]);
          }), !1);
        }), C;
      }, Ue.prototype.startsWithAnyOf = function() {
        var e = tt.apply(nt, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? cn(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + Vt];
        })) : rt(this, "startsWithAnyOf() only works with strings");
      }, Ue);
      function Ue() {
      }
      function ht(e) {
        return Oe(function(t) {
          return vn(t), e(t.target.error), !1;
        });
      }
      function vn(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var gn = "storagemutated", Ar = "x-storagemutated-1", Dt = hn(null, gn), Qo = (mt.prototype._lock = function() {
        return de(!X.global), ++this._reculock, this._reculock !== 1 || X.global || (X.lockOwnerFor = this), this;
      }, mt.prototype._unlock = function() {
        if (de(!X.global), --this._reculock == 0) for (X.global || (X.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Ut(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, mt.prototype._locked = function() {
        return this._reculock && X.lockOwnerFor !== this;
      }, mt.prototype.create = function(e) {
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
        return de(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Oe(function(s) {
          vn(s), t._reject(e.error);
        }), e.onabort = Oe(function(s) {
          vn(s), t.active && t._reject(new R.Abort(e.error)), t.active = !1, t.on("abort").fire(s);
        }), e.oncomplete = Oe(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && Dt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, mt.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return De(new R.ReadOnly("Transaction is readonly"));
        if (!this.active) return De(new R.TransactionInactive());
        if (this._locked()) return new H(function(c, f) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, r).then(c, f);
          }, X]);
        });
        if (r) return It(function() {
          var c = new H(function(f, p) {
            o._lock();
            var m = t(f, p, o);
            m && m.then && m.then(f, p);
          });
          return c.finally(function() {
            return o._unlock();
          }), c._lib = !0, c;
        });
        var s = new H(function(c, f) {
          var p = t(c, f, o);
          p && p.then && p.then(c, f);
        });
        return s._lib = !0, s;
      }, mt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, mt.prototype.waitFor = function(e) {
        var t, r = this._root(), o = H.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return o;
        }) : (r._waitingFor = o, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function c() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (t.get(-1 / 0).onsuccess = c);
        }());
        var s = r._waitingFor;
        return new H(function(c, f) {
          o.then(function(p) {
            return r._waitingQueue.push(Oe(c.bind(null, p)));
          }, function(p) {
            return r._waitingQueue.push(Oe(f.bind(null, p)));
          }).finally(function() {
            r._waitingFor === s && (r._waitingFor = null);
          });
        });
      }, mt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new R.Abort()));
      }, mt.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (L(t, e)) return t[e];
        var r = this.schema[e];
        if (!r) throw new R.NotFound("Table " + e + " not part of transaction");
        return r = new this.db.Table(e, r, this), r.core = this.db.core.table(e), t[e] = r;
      }, mt);
      function mt() {
      }
      function Ir(e, t, r, o, s, c, f, p) {
        return { name: e, keyPath: t, unique: r, multi: o, auto: s, compound: c, src: (r && !f ? "&" : "") + (o ? "*" : "") + (s ? "++" : "") + Ai(t), type: p };
      }
      function Ai(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Or(e, t, r) {
        return { name: e, primKey: t, indexes: r, mappedClass: null, idxByName: (o = function(s) {
          return [s.name, s];
        }, r.reduce(function(s, c, f) {
          return f = o(c, f), f && (s[f[0]] = f[1]), s;
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
            return Vt;
          }, Vt;
        }
      };
      function Nr(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(r) {
          return r[t];
        } : function(r) {
          return re(r, t);
        } : function(r) {
          return re(r, e);
        };
        var t;
      }
      function Ii(e) {
        return [].slice.call(e);
      }
      var zo = 0;
      function _n(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Jo(e, t, m) {
        function o(x) {
          if (x.type === 3) return null;
          if (x.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var y = x.lower, b = x.upper, S = x.lowerOpen, x = x.upperOpen;
          return y === void 0 ? b === void 0 ? null : t.upperBound(b, !!x) : b === void 0 ? t.lowerBound(y, !!S) : t.bound(y, b, !!S, !!x);
        }
        function s(E) {
          var y, b = E.name;
          return { name: b, schema: E, mutate: function(S) {
            var x = S.trans, C = S.type, O = S.keys, P = S.values, D = S.range;
            return new Promise(function(F, U) {
              F = Oe(F);
              var M = x.objectStore(b), q = M.keyPath == null, G = C === "put" || C === "add";
              if (!G && C !== "delete" && C !== "deleteRange") throw new Error("Invalid operation type: " + C);
              var V, W = (O || P || { length: 1 }).length;
              if (O && P && O.length !== P.length) throw new Error("Given keys array must have same length as given values array.");
              if (W === 0) return F({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function ce(Qe) {
                ++Pe, vn(Qe);
              }
              var ye = [], ae = [], Pe = 0;
              if (C === "deleteRange") {
                if (D.type === 4) return F({ numFailures: Pe, failures: ae, results: [], lastResult: void 0 });
                D.type === 3 ? ye.push(V = M.clear()) : ye.push(V = M.delete(o(D)));
              } else {
                var q = G ? q ? [P, O] : [P, null] : [O, null], se = q[0], Ge = q[1];
                if (G) for (var He = 0; He < W; ++He) ye.push(V = Ge && Ge[He] !== void 0 ? M[C](se[He], Ge[He]) : M[C](se[He])), V.onerror = ce;
                else for (He = 0; He < W; ++He) ye.push(V = M[C](se[He])), V.onerror = ce;
              }
              function nr(Qe) {
                Qe = Qe.target.result, ye.forEach(function(Yt, Yr) {
                  return Yt.error != null && (ae[Yr] = Yt.error);
                }), F({ numFailures: Pe, failures: ae, results: C === "delete" ? O : ye.map(function(Yt) {
                  return Yt.result;
                }), lastResult: Qe });
              }
              V.onerror = function(Qe) {
                ce(Qe), nr(Qe);
              }, V.onsuccess = nr;
            });
          }, getMany: function(S) {
            var x = S.trans, C = S.keys;
            return new Promise(function(O, P) {
              O = Oe(O);
              for (var D, F = x.objectStore(b), U = C.length, M = new Array(U), q = 0, G = 0, V = function(ye) {
                ye = ye.target, M[ye._pos] = ye.result, ++G === q && O(M);
              }, W = ht(P), ce = 0; ce < U; ++ce) C[ce] != null && ((D = F.get(C[ce]))._pos = ce, D.onsuccess = V, D.onerror = W, ++q);
              q === 0 && O(M);
            });
          }, get: function(S) {
            var x = S.trans, C = S.key;
            return new Promise(function(O, P) {
              O = Oe(O);
              var D = x.objectStore(b).get(C);
              D.onsuccess = function(F) {
                return O(F.target.result);
              }, D.onerror = ht(P);
            });
          }, query: (y = v, function(S) {
            return new Promise(function(x, C) {
              x = Oe(x);
              var O, P, D, q = S.trans, F = S.values, U = S.limit, V = S.query, M = U === 1 / 0 ? void 0 : U, G = V.index, V = V.range, q = q.objectStore(b), G = G.isPrimaryKey ? q : q.index(G.name), V = o(V);
              if (U === 0) return x({ result: [] });
              y ? ((M = F ? G.getAll(V, M) : G.getAllKeys(V, M)).onsuccess = function(W) {
                return x({ result: W.target.result });
              }, M.onerror = ht(C)) : (O = 0, P = !F && "openKeyCursor" in G ? G.openKeyCursor(V) : G.openCursor(V), D = [], P.onsuccess = function(W) {
                var ce = P.result;
                return ce ? (D.push(F ? ce.value : ce.primaryKey), ++O === U ? x({ result: D }) : void ce.continue()) : x({ result: D });
              }, P.onerror = ht(C));
            });
          }), openCursor: function(S) {
            var x = S.trans, C = S.values, O = S.query, P = S.reverse, D = S.unique;
            return new Promise(function(F, U) {
              F = Oe(F);
              var G = O.index, M = O.range, q = x.objectStore(b), q = G.isPrimaryKey ? q : q.index(G.name), G = P ? D ? "prevunique" : "prev" : D ? "nextunique" : "next", V = !C && "openKeyCursor" in q ? q.openKeyCursor(o(M), G) : q.openCursor(o(M), G);
              V.onerror = ht(U), V.onsuccess = Oe(function(W) {
                var ce, ye, ae, Pe, se = V.result;
                se ? (se.___id = ++zo, se.done = !1, ce = se.continue.bind(se), ye = (ye = se.continuePrimaryKey) && ye.bind(se), ae = se.advance.bind(se), Pe = function() {
                  throw new Error("Cursor not stopped");
                }, se.trans = x, se.stop = se.continue = se.continuePrimaryKey = se.advance = function() {
                  throw new Error("Cursor not started");
                }, se.fail = Oe(U), se.next = function() {
                  var Ge = this, He = 1;
                  return this.start(function() {
                    return He-- ? Ge.continue() : Ge.stop();
                  }).then(function() {
                    return Ge;
                  });
                }, se.start = function(Ge) {
                  function He() {
                    if (V.result) try {
                      Ge();
                    } catch (Qe) {
                      se.fail(Qe);
                    }
                    else se.done = !0, se.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, se.stop();
                  }
                  var nr = new Promise(function(Qe, Yt) {
                    Qe = Oe(Qe), V.onerror = ht(Yt), se.fail = Yt, se.stop = function(Yr) {
                      se.stop = se.continue = se.continuePrimaryKey = se.advance = Pe, Qe(Yr);
                    };
                  });
                  return V.onsuccess = Oe(function(Qe) {
                    V.onsuccess = He, He();
                  }), se.continue = ce, se.continuePrimaryKey = ye, se.advance = ae, He(), nr;
                }, F(se)) : F(null);
              }, U);
            });
          }, count: function(S) {
            var x = S.query, C = S.trans, O = x.index, P = x.range;
            return new Promise(function(D, F) {
              var U = C.objectStore(b), M = O.isPrimaryKey ? U : U.index(O.name), U = o(P), M = U ? M.count(U) : M.count();
              M.onsuccess = Oe(function(q) {
                return D(q.target.result);
              }), M.onerror = ht(F);
            });
          } };
        }
        var c, f, p, w = (f = m, p = Ii((c = e).objectStoreNames), { schema: { name: c.name, tables: p.map(function(E) {
          return f.objectStore(E);
        }).map(function(E) {
          var y = E.keyPath, x = E.autoIncrement, b = T(y), S = {}, x = { name: E.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: y == null, compound: b, keyPath: y, autoIncrement: x, unique: !0, extractKey: Nr(y) }, indexes: Ii(E.indexNames).map(function(C) {
            return E.index(C);
          }).map(function(D) {
            var O = D.name, P = D.unique, F = D.multiEntry, D = D.keyPath, F = { name: O, compound: T(D), keyPath: D, unique: P, multiEntry: F, extractKey: Nr(D) };
            return S[_n(D)] = F;
          }), getIndexByKeyPath: function(C) {
            return S[_n(C)];
          } };
          return S[":id"] = x.primaryKey, y != null && (S[_n(y)] = x.primaryKey), x;
        }) }, hasGetAll: 0 < p.length && "getAll" in f.objectStore(p[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), m = w.schema, v = w.hasGetAll, w = m.tables.map(s), h = {};
        return w.forEach(function(E) {
          return h[E.name] = E;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(E) {
          if (!h[E]) throw new Error("Table '".concat(E, "' not found"));
          return h[E];
        }, MIN_KEY: -1 / 0, MAX_KEY: bn(t), schema: m };
      }
      function Zo(e, t, r, o) {
        var s = r.IDBKeyRange;
        return r.indexedDB, { dbcore: (o = Jo(t, s, o), e.dbcore.reduce(function(c, f) {
          return f = f.create, u(u({}, c), f(c));
        }, o)) };
      }
      function Gn(e, o) {
        var r = o.db, o = Zo(e._middlewares, r, e._deps, o);
        e.core = o.dbcore, e.tables.forEach(function(s) {
          var c = s.name;
          e.core.schema.tables.some(function(f) {
            return f.name === c;
          }) && (s.core = e.core.table(c), e[c] instanceof e.Table && (e[c].core = s.core));
        });
      }
      function Hn(e, t, r, o) {
        r.forEach(function(s) {
          var c = o[s];
          t.forEach(function(f) {
            var p = function m(v, w) {
              return he(v, w) || (v = $(v)) && m(v, w);
            }(f, s);
            (!p || "value" in p && p.value === void 0) && (f === e.Transaction.prototype || f instanceof e.Transaction ? pe(f, s, { get: function() {
              return this.table(s);
            }, set: function(m) {
              ie(this, s, { value: m, writable: !0, configurable: !0, enumerable: !0 });
            } }) : f[s] = new e.Table(s, c));
          });
        });
      }
      function Pr(e, t) {
        t.forEach(function(r) {
          for (var o in r) r[o] instanceof e.Table && delete r[o];
        });
      }
      function es(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function ts(e, t, r, o) {
        var s = e._dbSchema;
        r.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = Or("$meta", Ni("")[0], []), e._storeNames.push("$meta"));
        var c = e._createTransaction("readwrite", e._storeNames, s);
        c.create(r), c._completion.catch(o);
        var f = c._reject.bind(c), p = X.transless || X;
        It(function() {
          return X.trans = c, X.transless = p, t !== 0 ? (Gn(e, r), v = t, ((m = c).storeNames.includes("$meta") ? m.table("$meta").get("version").then(function(w) {
            return w ?? v;
          }) : H.resolve(v)).then(function(w) {
            return E = w, y = c, b = r, S = [], w = (h = e)._versions, x = h._dbSchema = Yn(0, h.idbdb, b), (w = w.filter(function(C) {
              return C._cfg.version >= E;
            })).length !== 0 ? (w.forEach(function(C) {
              S.push(function() {
                var O = x, P = C._cfg.dbschema;
                Xn(h, O, b), Xn(h, P, b), x = h._dbSchema = P;
                var D = Dr(O, P);
                D.add.forEach(function(G) {
                  Rr(b, G[0], G[1].primKey, G[1].indexes);
                }), D.change.forEach(function(G) {
                  if (G.recreate) throw new R.Upgrade("Not yet support for changing primary key");
                  var V = b.objectStore(G.name);
                  G.add.forEach(function(W) {
                    return Wn(V, W);
                  }), G.change.forEach(function(W) {
                    V.deleteIndex(W.name), Wn(V, W);
                  }), G.del.forEach(function(W) {
                    return V.deleteIndex(W);
                  });
                });
                var F = C._cfg.contentUpgrade;
                if (F && C._cfg.version > E) {
                  Gn(h, b), y._memoizedTables = {};
                  var U = Te(P);
                  D.del.forEach(function(G) {
                    U[G] = O[G];
                  }), Pr(h, [h.Transaction.prototype]), Hn(h, [h.Transaction.prototype], g(U), U), y.schema = U;
                  var M, q = lt(F);
                  return q && sn(), D = H.follow(function() {
                    var G;
                    (M = F(y)) && q && (G = Ot.bind(null, null), M.then(G, G));
                  }), M && typeof M.then == "function" ? H.resolve(M) : D.then(function() {
                    return M;
                  });
                }
              }), S.push(function(O) {
                var P, D, F = C._cfg.dbschema;
                P = F, D = O, [].slice.call(D.db.objectStoreNames).forEach(function(U) {
                  return P[U] == null && D.db.deleteObjectStore(U);
                }), Pr(h, [h.Transaction.prototype]), Hn(h, [h.Transaction.prototype], h._storeNames, h._dbSchema), y.schema = h._dbSchema;
              }), S.push(function(O) {
                h.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(h.idbdb.version / 10) === C._cfg.version ? (h.idbdb.deleteObjectStore("$meta"), delete h._dbSchema.$meta, h._storeNames = h._storeNames.filter(function(P) {
                  return P !== "$meta";
                })) : O.objectStore("$meta").put(C._cfg.version, "version"));
              });
            }), function C() {
              return S.length ? H.resolve(S.shift()(y.idbtrans)).then(C) : H.resolve();
            }().then(function() {
              Oi(x, b);
            })) : H.resolve();
            var h, E, y, b, S, x;
          }).catch(f)) : (g(s).forEach(function(w) {
            Rr(r, w, s[w].primKey, s[w].indexes);
          }), Gn(e, r), void H.follow(function() {
            return e.on.populate.fire(c);
          }).catch(f));
          var m, v;
        });
      }
      function ns(e, t) {
        Oi(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var r = Yn(0, e.idbdb, t);
        Xn(e, e._dbSchema, t);
        for (var o = 0, s = Dr(r, e._dbSchema).change; o < s.length; o++) {
          var c = function(f) {
            if (f.change.length || f.recreate) return console.warn("Unable to patch indexes of table ".concat(f.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var p = t.objectStore(f.name);
            f.add.forEach(function(m) {
              Z && console.debug("Dexie upgrade patch: Creating missing index ".concat(f.name, ".").concat(m.src)), Wn(p, m);
            });
          }(s[o]);
          if (typeof c == "object") return c.value;
        }
      }
      function Dr(e, t) {
        var r, o = { del: [], add: [], change: [] };
        for (r in e) t[r] || o.del.push(r);
        for (r in t) {
          var s = e[r], c = t[r];
          if (s) {
            var f = { name: r, def: c, recreate: !1, del: [], add: [], change: [] };
            if ("" + (s.primKey.keyPath || "") != "" + (c.primKey.keyPath || "") || s.primKey.auto !== c.primKey.auto) f.recreate = !0, o.change.push(f);
            else {
              var p = s.idxByName, m = c.idxByName, v = void 0;
              for (v in p) m[v] || f.del.push(v);
              for (v in m) {
                var w = p[v], h = m[v];
                w ? w.src !== h.src && f.change.push(h) : f.add.push(h);
              }
              (0 < f.del.length || 0 < f.add.length || 0 < f.change.length) && o.change.push(f);
            }
          } else o.add.push([r, c]);
        }
        return o;
      }
      function Rr(e, t, r, o) {
        var s = e.db.createObjectStore(t, r.keyPath ? { keyPath: r.keyPath, autoIncrement: r.auto } : { autoIncrement: r.auto });
        return o.forEach(function(c) {
          return Wn(s, c);
        }), s;
      }
      function Oi(e, t) {
        g(e).forEach(function(r) {
          t.db.objectStoreNames.contains(r) || (Z && console.debug("Dexie: Creating missing table", r), Rr(t, r, e[r].primKey, e[r].indexes));
        });
      }
      function Wn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function Yn(e, t, r) {
        var o = {};
        return Ce(t.objectStoreNames, 0).forEach(function(s) {
          for (var c = r.objectStore(s), f = Ir(Ai(v = c.keyPath), v || "", !0, !1, !!c.autoIncrement, v && typeof v != "string", !0), p = [], m = 0; m < c.indexNames.length; ++m) {
            var w = c.index(c.indexNames[m]), v = w.keyPath, w = Ir(w.name, v, !!w.unique, !!w.multiEntry, !1, v && typeof v != "string", !1);
            p.push(w);
          }
          o[s] = Or(s, f, p);
        }), o;
      }
      function Xn(e, t, r) {
        for (var o = r.db.objectStoreNames, s = 0; s < o.length; ++s) {
          var c = o[s], f = r.objectStore(c);
          e._hasGetAll = "getAll" in f;
          for (var p = 0; p < f.indexNames.length; ++p) {
            var m = f.indexNames[p], v = f.index(m).keyPath, w = typeof v == "string" ? v : "[" + Ce(v).join("+") + "]";
            !t[c] || (v = t[c].idxByName[w]) && (v.name = m, delete t[c].idxByName[w], t[c].idxByName[m] = v);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && d.WorkerGlobalScope && d instanceof d.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Ni(e) {
        return e.split(",").map(function(t, r) {
          var c = t.split(":"), o = (s = c[1]) === null || s === void 0 ? void 0 : s.trim(), s = (t = c[0].trim()).replace(/([&*]|\+\+)/g, ""), c = /^\[/.test(s) ? s.match(/^\[(.*)\]$/)[1].split("+") : s;
          return Ir(s, c || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), T(c), r === 0, o);
        });
      }
      var rs = (ln.prototype._createTableSchema = Or, ln.prototype._parseIndexSyntax = Ni, ln.prototype._parseStoresSpec = function(e, t) {
        var r = this;
        g(e).forEach(function(o) {
          if (e[o] !== null) {
            var s = r._parseIndexSyntax(e[o]), c = s.shift();
            if (!c) throw new R.Schema("Invalid schema for table " + o + ": " + e[o]);
            if (c.unique = !0, c.multi) throw new R.Schema("Primary key cannot be multiEntry*");
            s.forEach(function(f) {
              if (f.auto) throw new R.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!f.keyPath) throw new R.Schema("Index must have a name and cannot be an empty string");
            }), s = r._createTableSchema(o, c, s), t[o] = s;
          }
        });
      }, ln.prototype.stores = function(r) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? N(this._cfg.storesSource, r) : r;
        var r = t._versions, o = {}, s = {};
        return r.forEach(function(c) {
          N(o, c._cfg.storesSource), s = c._cfg.dbschema = {}, c._parseStoresSpec(o, s);
        }), t._dbSchema = s, Pr(t, [t._allTables, t, t.Transaction.prototype]), Hn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], g(s), s), t._storeNames = g(s), this;
      }, ln.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = oe(this._cfg.contentUpgrade || A, e), this;
      }, ln);
      function ln() {
      }
      function kr(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new wt(Bn, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function jr(e) {
        return e && typeof e.databases == "function";
      }
      function Fr(e) {
        return It(function() {
          return X.letThrough = !0, e();
        });
      }
      function Kr(e) {
        return !("from" in e);
      }
      var Ve = function(e, t) {
        if (!this) {
          var r = new Ve();
          return e && "d" in e && N(r, e), r;
        }
        N(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function wn(e, t, r) {
        var o = me(t, r);
        if (!isNaN(o)) {
          if (0 < o) throw RangeError();
          if (Kr(e)) return N(e, { from: t, to: r, d: 1 });
          var s = e.l, o = e.r;
          if (me(r, e.from) < 0) return s ? wn(s, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, Di(e);
          if (0 < me(t, e.to)) return o ? wn(o, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, Di(e);
          me(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < me(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, s && !e.l && xn(e, s), o && r && xn(e, o);
        }
      }
      function xn(e, t) {
        Kr(t) || function r(o, m) {
          var c = m.from, f = m.to, p = m.l, m = m.r;
          wn(o, c, f), p && r(o, p), m && r(o, m);
        }(e, t);
      }
      function Pi(e, t) {
        var r = Qn(t), o = r.next();
        if (o.done) return !1;
        for (var s = o.value, c = Qn(e), f = c.next(s.from), p = f.value; !o.done && !f.done; ) {
          if (me(p.from, s.to) <= 0 && 0 <= me(p.to, s.from)) return !0;
          me(s.from, p.from) < 0 ? s = (o = r.next(p.from)).value : p = (f = c.next(s.from)).value;
        }
        return !1;
      }
      function Qn(e) {
        var t = Kr(e) ? null : { s: 0, n: e };
        return { next: function(r) {
          for (var o = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, o) for (; t.n.l && me(r, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !o || me(r, t.n.to) <= 0) return { value: t.n, done: !1 };
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
      function Di(e) {
        var t, r, o = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((r = e.l) === null || r === void 0 ? void 0 : r.d) || 0), s = 1 < o ? "r" : o < -1 ? "l" : "";
        s && (t = s == "r" ? "l" : "r", r = u({}, e), o = e[s], e.from = o.from, e.to = o.to, e[s] = o[s], r[s] = o[t], (e[t] = r).d = Ri(r)), e.d = Ri(e);
      }
      function Ri(r) {
        var t = r.r, r = r.l;
        return (t ? r ? Math.max(t.d, r.d) : t.d : r ? r.d : 0) + 1;
      }
      function zn(e, t) {
        return g(t).forEach(function(r) {
          e[r] ? xn(e[r], t[r]) : e[r] = function o(s) {
            var c, f, p = {};
            for (c in s) L(s, c) && (f = s[c], p[c] = !f || typeof f != "object" || ft.has(f.constructor) ? f : o(f));
            return p;
          }(t[r]);
        }), e;
      }
      function Mr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && Pi(t[r], e[r]);
        });
      }
      z(Ve.prototype, ((ct = { add: function(e) {
        return xn(this, e), this;
      }, addKey: function(e) {
        return wn(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(r) {
          return wn(t, r, r);
        }), this;
      }, hasKey: function(e) {
        var t = Qn(this).next(e).value;
        return t && me(t.from, e) <= 0 && 0 <= me(t.to, e);
      } })[et] = function() {
        return Qn(this);
      }, ct));
      var Ht = {}, Br = {}, qr = !1;
      function Jn(e) {
        zn(Br, e), qr || (qr = !0, setTimeout(function() {
          qr = !1, Lr(Br, !(Br = {}));
        }, 0));
      }
      function Lr(e, t) {
        t === void 0 && (t = !1);
        var r = /* @__PURE__ */ new Set();
        if (e.all) for (var o = 0, s = Object.values(Ht); o < s.length; o++) ki(f = s[o], e, r, t);
        else for (var c in e) {
          var f, p = /^idb\:\/\/(.*)\/(.*)\//.exec(c);
          p && (c = p[1], p = p[2], (f = Ht["idb://".concat(c, "/").concat(p)]) && ki(f, e, r, t));
        }
        r.forEach(function(m) {
          return m();
        });
      }
      function ki(e, t, r, o) {
        for (var s = [], c = 0, f = Object.entries(e.queries.query); c < f.length; c++) {
          for (var p = f[c], m = p[0], v = [], w = 0, h = p[1]; w < h.length; w++) {
            var E = h[w];
            Mr(t, E.obsSet) ? E.subscribers.forEach(function(x) {
              return r.add(x);
            }) : o && v.push(E);
          }
          o && s.push([m, v]);
        }
        if (o) for (var y = 0, b = s; y < b.length; y++) {
          var S = b[y], m = S[0], v = S[1];
          e.queries.query[m] = v;
        }
      }
      function is(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? De(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, s = Math.round(10 * e.verno), c = !1;
        function f() {
          if (t.openCanceller !== o) throw new R.DatabaseClosed("db.open() was cancelled");
        }
        function p() {
          return new H(function(E, y) {
            if (f(), !r) throw new R.MissingAPI();
            var b = e.name, S = t.autoSchema || !s ? r.open(b) : r.open(b, s);
            if (!S) throw new R.MissingAPI();
            S.onerror = ht(y), S.onblocked = Oe(e._fireOnBlocked), S.onupgradeneeded = Oe(function(x) {
              var C;
              w = S.transaction, t.autoSchema && !e._options.allowEmptyDB ? (S.onerror = vn, w.abort(), S.result.close(), (C = r.deleteDatabase(b)).onsuccess = C.onerror = Oe(function() {
                y(new R.NoSuchDatabase("Database ".concat(b, " doesnt exist")));
              })) : (w.onerror = ht(y), x = x.oldVersion > Math.pow(2, 62) ? 0 : x.oldVersion, h = x < 1, e.idbdb = S.result, c && ns(e, w), ts(e, x / 10, w, y));
            }, y), S.onsuccess = Oe(function() {
              w = null;
              var x, C, O, P, D, F = e.idbdb = S.result, U = Ce(F.objectStoreNames);
              if (0 < U.length) try {
                var M = F.transaction((P = U).length === 1 ? P[0] : P, "readonly");
                if (t.autoSchema) C = F, O = M, (x = e).verno = C.version / 10, O = x._dbSchema = Yn(0, C, O), x._storeNames = Ce(C.objectStoreNames, 0), Hn(x, [x._allTables], g(O), O);
                else if (Xn(e, e._dbSchema, M), ((D = Dr(Yn(0, (D = e).idbdb, M), D._dbSchema)).add.length || D.change.some(function(q) {
                  return q.add.length || q.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), F.close(), s = F.version + 1, c = !0, E(p());
                Gn(e, M);
              } catch {
              }
              an.push(e), F.onversionchange = Oe(function(q) {
                t.vcFired = !0, e.on("versionchange").fire(q);
              }), F.onclose = Oe(function(q) {
                e.on("close").fire(q);
              }), h && (D = e._deps, M = b, F = D.indexedDB, D = D.IDBKeyRange, jr(F) || M === Bn || kr(F, D).put({ name: M }).catch(A)), E();
            }, y);
          }).catch(function(E) {
            switch (E?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), p();
                break;
              case "VersionError":
                if (0 < s) return s = 0, p();
            }
            return H.reject(E);
          });
        }
        var m, v = t.dbReadyResolve, w = null, h = !1;
        return H.race([o, (typeof navigator > "u" ? H.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(E) {
          function y() {
            return indexedDB.databases().finally(E);
          }
          m = setInterval(y, 100), y();
        }).finally(function() {
          return clearInterval(m);
        }) : Promise.resolve()).then(p)]).then(function() {
          return f(), t.onReadyBeingFired = [], H.resolve(Fr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function E() {
            if (0 < t.onReadyBeingFired.length) {
              var y = t.onReadyBeingFired.reduce(oe, A);
              return t.onReadyBeingFired = [], H.resolve(Fr(function() {
                return y(e.vip);
              })).then(E);
            }
          });
        }).finally(function() {
          t.openCanceller === o && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(E) {
          t.dbOpenError = E;
          try {
            w && w.abort();
          } catch {
          }
          return o === t.openCanceller && e._close(), De(E);
        }).finally(function() {
          t.openComplete = !0, v();
        }).then(function() {
          var E;
          return h && (E = {}, e.tables.forEach(function(y) {
            y.schema.indexes.forEach(function(b) {
              b.name && (E["idb://".concat(e.name, "/").concat(y.name, "/").concat(b.name)] = new Ve(-1 / 0, [[[]]]));
            }), E["idb://".concat(e.name, "/").concat(y.name, "/")] = E["idb://".concat(e.name, "/").concat(y.name, "/:dels")] = new Ve(-1 / 0, [[[]]]);
          }), Dt(gn).fire(E), Lr(E, !0)), e;
        });
      }
      function $r(e) {
        function t(c) {
          return e.next(c);
        }
        var r = s(t), o = s(function(c) {
          return e.throw(c);
        });
        function s(c) {
          return function(m) {
            var p = c(m), m = p.value;
            return p.done ? m : m && typeof m.then == "function" ? m.then(r, o) : T(m) ? Promise.all(m).then(r, o) : r(m);
          };
        }
        return s(t)();
      }
      function Zn(e, t, r) {
        for (var o = T(e) ? e.slice() : [e], s = 0; s < r; ++s) o.push(t);
        return o;
      }
      var os = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema, s = {}, c = [];
          function f(h, E, y) {
            var b = _n(h), S = s[b] = s[b] || [], x = h == null ? 0 : typeof h == "string" ? 1 : h.length, C = 0 < E, C = u(u({}, y), { name: C ? "".concat(b, "(virtual-from:").concat(y.name, ")") : y.name, lowLevelIndex: y, isVirtual: C, keyTail: E, keyLength: x, extractKey: Nr(h), unique: !C && y.unique });
            return S.push(C), C.isPrimaryKey || c.push(C), 1 < x && f(x === 2 ? h[0] : h.slice(0, x - 1), E + 1, y), S.sort(function(O, P) {
              return O.keyTail - P.keyTail;
            }), C;
          }
          t = f(o.primaryKey.keyPath, 0, o.primaryKey), s[":id"] = [t];
          for (var p = 0, m = o.indexes; p < m.length; p++) {
            var v = m[p];
            f(v.keyPath, 0, v);
          }
          function w(h) {
            var E, y = h.query.index;
            return y.isVirtual ? u(u({}, h), { query: { index: y.lowLevelIndex, range: (E = h.query.range, y = y.keyTail, { type: E.type === 1 ? 2 : E.type, lower: Zn(E.lower, E.lowerOpen ? e.MAX_KEY : e.MIN_KEY, y), lowerOpen: !0, upper: Zn(E.upper, E.upperOpen ? e.MIN_KEY : e.MAX_KEY, y), upperOpen: !0 }) } }) : h;
          }
          return u(u({}, r), { schema: u(u({}, o), { primaryKey: t, indexes: c, getIndexByKeyPath: function(h) {
            return (h = s[_n(h)]) && h[0];
          } }), count: function(h) {
            return r.count(w(h));
          }, query: function(h) {
            return r.query(w(h));
          }, openCursor: function(h) {
            var E = h.query.index, y = E.keyTail, b = E.isVirtual, S = E.keyLength;
            return b ? r.openCursor(w(h)).then(function(C) {
              return C && x(C);
            }) : r.openCursor(h);
            function x(C) {
              return Object.create(C, { continue: { value: function(O) {
                O != null ? C.continue(Zn(O, h.reverse ? e.MAX_KEY : e.MIN_KEY, y)) : h.unique ? C.continue(C.key.slice(0, S).concat(h.reverse ? e.MIN_KEY : e.MAX_KEY, y)) : C.continue();
              } }, continuePrimaryKey: { value: function(O, P) {
                C.continuePrimaryKey(Zn(O, e.MAX_KEY, y), P);
              } }, primaryKey: { get: function() {
                return C.primaryKey;
              } }, key: { get: function() {
                var O = C.key;
                return S === 1 ? O[0] : O.slice(0, S);
              } }, value: { get: function() {
                return C.value;
              } } });
            }
          } });
        } });
      } };
      function Ur(e, t, r, o) {
        return r = r || {}, o = o || "", g(e).forEach(function(s) {
          var c, f, p;
          L(t, s) ? (c = e[s], f = t[s], typeof c == "object" && typeof f == "object" && c && f ? (p = Et(c)) !== Et(f) ? r[o + s] = t[s] : p === "Object" ? Ur(c, f, r, o + s + ".") : c !== f && (r[o + s] = t[s]) : c !== f && (r[o + s] = t[s])) : r[o + s] = void 0;
        }), g(t).forEach(function(s) {
          L(e, s) || (r[o + s] = t[s]);
        }), r;
      }
      function Vr(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var ss = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema.primaryKey;
          return u(u({}, r), { mutate: function(s) {
            var c = X.trans, f = c.table(t).hook, p = f.deleting, m = f.creating, v = f.updating;
            switch (s.type) {
              case "add":
                if (m.fire === A) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "put":
                if (m.fire === A && v.fire === A) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "delete":
                if (p.fire === A) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "deleteRange":
                if (p.fire === A) break;
                return c._promise("readwrite", function() {
                  return function h(E, y, b) {
                    return r.query({ trans: E, values: !1, query: { index: o, range: y }, limit: b }).then(function(S) {
                      var x = S.result;
                      return w({ type: "delete", keys: x, trans: E }).then(function(C) {
                        return 0 < C.numFailures ? Promise.reject(C.failures[0]) : x.length < b ? { failures: [], numFailures: 0, lastResult: void 0 } : h(E, u(u({}, y), { lower: x[x.length - 1], lowerOpen: !0 }), b);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return r.mutate(s);
            function w(h) {
              var E, y, b, S = X.trans, x = h.keys || Vr(o, h);
              if (!x) throw new Error("Keys missing");
              return (h = h.type === "add" || h.type === "put" ? u(u({}, h), { keys: x }) : u({}, h)).type !== "delete" && (h.values = l([], h.values)), h.keys && (h.keys = l([], h.keys)), E = r, b = x, ((y = h).type === "add" ? Promise.resolve([]) : E.getMany({ trans: y.trans, keys: b, cache: "immutable" })).then(function(C) {
                var O = x.map(function(P, D) {
                  var F, U, M, q = C[D], G = { onerror: null, onsuccess: null };
                  return h.type === "delete" ? p.fire.call(G, P, q, S) : h.type === "add" || q === void 0 ? (F = m.fire.call(G, P, h.values[D], S), P == null && F != null && (h.keys[D] = P = F, o.outbound || te(h.values[D], o.keyPath, P))) : (F = Ur(q, h.values[D]), (U = v.fire.call(G, F, P, q, S)) && (M = h.values[D], Object.keys(U).forEach(function(V) {
                    L(M, V) ? M[V] = U[V] : te(M, V, U[V]);
                  }))), G;
                });
                return r.mutate(h).then(function(P) {
                  for (var D = P.failures, F = P.results, U = P.numFailures, P = P.lastResult, M = 0; M < x.length; ++M) {
                    var q = (F || x)[M], G = O[M];
                    q == null ? G.onerror && G.onerror(D[M]) : G.onsuccess && G.onsuccess(h.type === "put" && C[M] ? h.values[M] : q);
                  }
                  return { failures: D, results: F, numFailures: U, lastResult: P };
                }).catch(function(P) {
                  return O.forEach(function(D) {
                    return D.onerror && D.onerror(P);
                  }), Promise.reject(P);
                });
              });
            }
          } });
        } });
      } };
      function ji(e, t, r) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var o = [], s = 0, c = 0; s < t.keys.length && c < e.length; ++s) me(t.keys[s], e[c]) === 0 && (o.push(r ? ze(t.values[s]) : t.values[s]), ++c);
          return o.length === e.length ? o : null;
        } catch {
          return null;
        }
      }
      var as = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var r = e.table(t);
          return u(u({}, r), { getMany: function(o) {
            if (!o.cache) return r.getMany(o);
            var s = ji(o.keys, o.trans._cache, o.cache === "clone");
            return s ? H.resolve(s) : r.getMany(o).then(function(c) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? ze(c) : c }, c;
            });
          }, mutate: function(o) {
            return o.type !== "add" && (o.trans._cache = null), r.mutate(o);
          } });
        } };
      } };
      function Fi(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Ki(e, t) {
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
      var us = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, r = new Ve(e.MIN_KEY, e.MAX_KEY);
        return u(u({}, e), { transaction: function(o, s, c) {
          if (X.subscr && s !== "readonly") throw new R.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(X.querier));
          return e.transaction(o, s, c);
        }, table: function(o) {
          var s = e.table(o), c = s.schema, f = c.primaryKey, h = c.indexes, p = f.extractKey, m = f.outbound, v = f.autoIncrement && h.filter(function(y) {
            return y.compound && y.keyPath.includes(f.keyPath);
          }), w = u(u({}, s), { mutate: function(y) {
            function b(V) {
              return V = "idb://".concat(t, "/").concat(o, "/").concat(V), P[V] || (P[V] = new Ve());
            }
            var S, x, C, O = y.trans, P = y.mutatedParts || (y.mutatedParts = {}), D = b(""), F = b(":dels"), U = y.type, G = y.type === "deleteRange" ? [y.range] : y.type === "delete" ? [y.keys] : y.values.length < 50 ? [Vr(f, y).filter(function(V) {
              return V;
            }), y.values] : [], M = G[0], q = G[1], G = y.trans._cache;
            return T(M) ? (D.addKeys(M), (G = U === "delete" || M.length === q.length ? ji(M, G) : null) || F.addKeys(M), (G || q) && (S = b, x = G, C = q, c.indexes.forEach(function(V) {
              var W = S(V.name || "");
              function ce(ae) {
                return ae != null ? V.extractKey(ae) : null;
              }
              function ye(ae) {
                return V.multiEntry && T(ae) ? ae.forEach(function(Pe) {
                  return W.addKey(Pe);
                }) : W.addKey(ae);
              }
              (x || C).forEach(function(ae, Ge) {
                var se = x && ce(x[Ge]), Ge = C && ce(C[Ge]);
                me(se, Ge) !== 0 && (se != null && ye(se), Ge != null && ye(Ge));
              });
            }))) : M ? (q = { from: (q = M.lower) !== null && q !== void 0 ? q : e.MIN_KEY, to: (q = M.upper) !== null && q !== void 0 ? q : e.MAX_KEY }, F.add(q), D.add(q)) : (D.add(r), F.add(r), c.indexes.forEach(function(V) {
              return b(V.name).add(r);
            })), s.mutate(y).then(function(V) {
              return !M || y.type !== "add" && y.type !== "put" || (D.addKeys(V.results), v && v.forEach(function(W) {
                for (var ce = y.values.map(function(se) {
                  return W.extractKey(se);
                }), ye = W.keyPath.findIndex(function(se) {
                  return se === f.keyPath;
                }), ae = 0, Pe = V.results.length; ae < Pe; ++ae) ce[ae][ye] = V.results[ae];
                b(W.name).addKeys(ce);
              })), O.mutatedParts = zn(O.mutatedParts || {}, P), V;
            });
          } }), h = function(b) {
            var S = b.query, b = S.index, S = S.range;
            return [b, new Ve((b = S.lower) !== null && b !== void 0 ? b : e.MIN_KEY, (S = S.upper) !== null && S !== void 0 ? S : e.MAX_KEY)];
          }, E = { get: function(y) {
            return [f, new Ve(y.key)];
          }, getMany: function(y) {
            return [f, new Ve().addKeys(y.keys)];
          }, count: h, query: h, openCursor: h };
          return g(E).forEach(function(y) {
            w[y] = function(b) {
              var S = X.subscr, x = !!S, C = Fi(X, s) && Ki(y, b) ? b.obsSet = {} : S;
              if (x) {
                var O = function(q) {
                  return q = "idb://".concat(t, "/").concat(o, "/").concat(q), C[q] || (C[q] = new Ve());
                }, P = O(""), D = O(":dels"), S = E[y](b), x = S[0], S = S[1];
                if ((y === "query" && x.isPrimaryKey && !b.values ? D : O(x.name || "")).add(S), !x.isPrimaryKey) {
                  if (y !== "count") {
                    var F = y === "query" && m && b.values && s.query(u(u({}, b), { values: !1 }));
                    return s[y].apply(this, arguments).then(function(q) {
                      if (y === "query") {
                        if (m && b.values) return F.then(function(ce) {
                          return ce = ce.result, P.addKeys(ce), q;
                        });
                        var G = b.values ? q.result.map(p) : q.result;
                        (b.values ? P : D).addKeys(G);
                      } else if (y === "openCursor") {
                        var V = q, W = b.values;
                        return V && Object.create(V, { key: { get: function() {
                          return D.addKey(V.primaryKey), V.key;
                        } }, primaryKey: { get: function() {
                          var ce = V.primaryKey;
                          return D.addKey(ce), ce;
                        } }, value: { get: function() {
                          return W && P.addKey(V.primaryKey), V.value;
                        } } });
                      }
                      return q;
                    });
                  }
                  D.add(r);
                }
              }
              return s[y].apply(this, arguments);
            };
          }), w;
        } });
      } };
      function Mi(e, t, r) {
        if (r.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var o = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return r.numFailures === o ? null : (t = u({}, t), T(t.keys) && (t.keys = t.keys.filter(function(s, c) {
          return !(c in r.failures);
        })), "values" in t && T(t.values) && (t.values = t.values.filter(function(s, c) {
          return !(c in r.failures);
        })), t);
      }
      function Gr(e, t) {
        return r = e, ((o = t).lower === void 0 || (o.lowerOpen ? 0 < me(r, o.lower) : 0 <= me(r, o.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? me(e, t.upper) < 0 : me(e, t.upper) <= 0));
        var r, o;
      }
      function Bi(e, t, E, o, s, c) {
        if (!E || E.length === 0) return e;
        var f = t.query.index, p = f.multiEntry, m = t.query.range, v = o.schema.primaryKey.extractKey, w = f.extractKey, h = (f.lowLevelIndex || f).extractKey, E = E.reduce(function(y, b) {
          var S = y, x = [];
          if (b.type === "add" || b.type === "put") for (var C = new Ve(), O = b.values.length - 1; 0 <= O; --O) {
            var P, D = b.values[O], F = v(D);
            C.hasKey(F) || (P = w(D), (p && T(P) ? P.some(function(V) {
              return Gr(V, m);
            }) : Gr(P, m)) && (C.addKey(F), x.push(D)));
          }
          switch (b.type) {
            case "add":
              var U = new Ve().addKeys(t.values ? y.map(function(W) {
                return v(W);
              }) : y), S = y.concat(t.values ? x.filter(function(W) {
                return W = v(W), !U.hasKey(W) && (U.addKey(W), !0);
              }) : x.map(function(W) {
                return v(W);
              }).filter(function(W) {
                return !U.hasKey(W) && (U.addKey(W), !0);
              }));
              break;
            case "put":
              var M = new Ve().addKeys(b.values.map(function(W) {
                return v(W);
              }));
              S = y.filter(function(W) {
                return !M.hasKey(t.values ? v(W) : W);
              }).concat(t.values ? x : x.map(function(W) {
                return v(W);
              }));
              break;
            case "delete":
              var q = new Ve().addKeys(b.keys);
              S = y.filter(function(W) {
                return !q.hasKey(t.values ? v(W) : W);
              });
              break;
            case "deleteRange":
              var G = b.range;
              S = y.filter(function(W) {
                return !Gr(v(W), G);
              });
          }
          return S;
        }, e);
        return E === e ? e : (E.sort(function(y, b) {
          return me(h(y), h(b)) || me(v(y), v(b));
        }), t.limit && t.limit < 1 / 0 && (E.length > t.limit ? E.length = t.limit : e.length === t.limit && E.length < t.limit && (s.dirty = !0)), c ? Object.freeze(E) : E);
      }
      function qi(e, t) {
        return me(e.lower, t.lower) === 0 && me(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function cs(e, t) {
        return function(r, o, s, c) {
          if (r === void 0) return o !== void 0 ? -1 : 0;
          if (o === void 0) return 1;
          if ((o = me(r, o)) === 0) {
            if (s && c) return 0;
            if (s) return 1;
            if (c) return -1;
          }
          return o;
        }(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function(r, o, s, c) {
          if (r === void 0) return o !== void 0 ? 1 : 0;
          if (o === void 0) return -1;
          if ((o = me(r, o)) === 0) {
            if (s && c) return 0;
            if (s) return -1;
            if (c) return 1;
          }
          return o;
        }(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function ls(e, t, r, o) {
        e.subscribers.add(r), o.addEventListener("abort", function() {
          var s, c;
          e.subscribers.delete(r), e.subscribers.size === 0 && (s = e, c = t, setTimeout(function() {
            s.subscribers.size === 0 && Ne(c, s);
          }, 3e3));
        });
      }
      var fs = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return u(u({}, e), { transaction: function(r, o, s) {
          var c, f, p = e.transaction(r, o, s);
          return o === "readwrite" && (f = (c = new AbortController()).signal, s = function(m) {
            return function() {
              if (c.abort(), o === "readwrite") {
                for (var v = /* @__PURE__ */ new Set(), w = 0, h = r; w < h.length; w++) {
                  var E = h[w], y = Ht["idb://".concat(t, "/").concat(E)];
                  if (y) {
                    var b = e.table(E), S = y.optimisticOps.filter(function(W) {
                      return W.trans === p;
                    });
                    if (p._explicit && m && p.mutatedParts) for (var x = 0, C = Object.values(y.queries.query); x < C.length; x++) for (var O = 0, P = (U = C[x]).slice(); O < P.length; O++) Mr((M = P[O]).obsSet, p.mutatedParts) && (Ne(U, M), M.subscribers.forEach(function(W) {
                      return v.add(W);
                    }));
                    else if (0 < S.length) {
                      y.optimisticOps = y.optimisticOps.filter(function(W) {
                        return W.trans !== p;
                      });
                      for (var D = 0, F = Object.values(y.queries.query); D < F.length; D++) for (var U, M, q, G = 0, V = (U = F[D]).slice(); G < V.length; G++) (M = V[G]).res != null && p.mutatedParts && (m && !M.dirty ? (q = Object.isFrozen(M.res), q = Bi(M.res, M.req, S, b, M, q), M.dirty ? (Ne(U, M), M.subscribers.forEach(function(W) {
                        return v.add(W);
                      })) : q !== M.res && (M.res = q, M.promise = H.resolve({ result: q }))) : (M.dirty && Ne(U, M), M.subscribers.forEach(function(W) {
                        return v.add(W);
                      })));
                    }
                  }
                }
                v.forEach(function(W) {
                  return W();
                });
              }
            };
          }, p.addEventListener("abort", s(!1), { signal: f }), p.addEventListener("error", s(!1), { signal: f }), p.addEventListener("complete", s(!0), { signal: f })), p;
        }, table: function(r) {
          var o = e.table(r), s = o.schema.primaryKey;
          return u(u({}, o), { mutate: function(c) {
            var f = X.trans;
            if (s.outbound || f.db._options.cache === "disabled" || f.explicit || f.idbtrans.mode !== "readwrite") return o.mutate(c);
            var p = Ht["idb://".concat(t, "/").concat(r)];
            return p ? (f = o.mutate(c), c.type !== "add" && c.type !== "put" || !(50 <= c.values.length || Vr(s, c).some(function(m) {
              return m == null;
            })) ? (p.optimisticOps.push(c), c.mutatedParts && Jn(c.mutatedParts), f.then(function(m) {
              0 < m.numFailures && (Ne(p.optimisticOps, c), (m = Mi(0, c, m)) && p.optimisticOps.push(m), c.mutatedParts && Jn(c.mutatedParts));
            }), f.catch(function() {
              Ne(p.optimisticOps, c), c.mutatedParts && Jn(c.mutatedParts);
            })) : f.then(function(m) {
              var v = Mi(0, u(u({}, c), { values: c.values.map(function(w, h) {
                var E;
                return m.failures[h] ? w : (w = (E = s.keyPath) !== null && E !== void 0 && E.includes(".") ? ze(w) : u({}, w), te(w, s.keyPath, m.results[h]), w);
              }) }), m);
              p.optimisticOps.push(v), queueMicrotask(function() {
                return c.mutatedParts && Jn(c.mutatedParts);
              });
            }), f) : o.mutate(c);
          }, query: function(c) {
            if (!Fi(X, o) || !Ki("query", c)) return o.query(c);
            var f = ((v = X.trans) === null || v === void 0 ? void 0 : v.db._options.cache) === "immutable", h = X, p = h.requery, m = h.signal, v = function(b, S, x, C) {
              var O = Ht["idb://".concat(b, "/").concat(S)];
              if (!O) return [];
              if (!(S = O.queries[x])) return [null, !1, O, null];
              var P = S[(C.query ? C.query.index.name : null) || ""];
              if (!P) return [null, !1, O, null];
              switch (x) {
                case "query":
                  var D = P.find(function(F) {
                    return F.req.limit === C.limit && F.req.values === C.values && qi(F.req.query.range, C.query.range);
                  });
                  return D ? [D, !0, O, P] : [P.find(function(F) {
                    return ("limit" in F.req ? F.req.limit : 1 / 0) >= C.limit && (!C.values || F.req.values) && cs(F.req.query.range, C.query.range);
                  }), !1, O, P];
                case "count":
                  return D = P.find(function(F) {
                    return qi(F.req.query.range, C.query.range);
                  }), [D, !!D, O, P];
              }
            }(t, r, "query", c), w = v[0], h = v[1], E = v[2], y = v[3];
            return w && h ? w.obsSet = c.obsSet : (h = o.query(c).then(function(b) {
              var S = b.result;
              if (w && (w.res = S), f) {
                for (var x = 0, C = S.length; x < C; ++x) Object.freeze(S[x]);
                Object.freeze(S);
              } else b.result = ze(S);
              return b;
            }).catch(function(b) {
              return y && w && Ne(y, w), Promise.reject(b);
            }), w = { obsSet: c.obsSet, promise: h, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, y ? y.push(w) : (y = [w], (E = E || (Ht["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = y)), ls(w, y, p, m), w.promise.then(function(b) {
              return { result: Bi(b.result, c, E?.optimisticOps, o, w, f) };
            });
          } });
        } });
      } };
      function er(e, t) {
        return new Proxy(e, { get: function(r, o, s) {
          return o === "db" ? t : Reflect.get(r, o, s);
        } });
      }
      var wt = (Re.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new R.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new R.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(es), r.stores({}), this._state.autoSchema = !1, r);
      }, Re.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || X.letThrough || this._vip) ? e() : new H(function(r, o) {
          if (t._state.openComplete) return o(new R.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new R.DatabaseClosed());
            t.open().catch(A);
          }
          t._state.dbReadyPromise.then(r, o);
        }).then(e);
      }, Re.prototype.use = function(e) {
        var t = e.stack, r = e.create, o = e.level, s = e.name;
        return s && this.unuse({ stack: t, name: s }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: r, level: o ?? 10, name: s }), e.sort(function(c, f) {
          return c.level - f.level;
        }), this;
      }, Re.prototype.unuse = function(e) {
        var t = e.stack, r = e.name, o = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(s) {
          return o ? s.create !== o : !!r && s.name !== r;
        })), this;
      }, Re.prototype.open = function() {
        var e = this;
        return Ut(Xe, function() {
          return is(e);
        });
      }, Re.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, t = an.indexOf(this);
        if (0 <= t && an.splice(t, 1), this.idbdb) {
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
        return new H(function(s, c) {
          function f() {
            t.close(e);
            var p = t._deps.indexedDB.deleteDatabase(t.name);
            p.onsuccess = Oe(function() {
              var m, v, w;
              m = t._deps, v = t.name, w = m.indexedDB, m = m.IDBKeyRange, jr(w) || v === Bn || kr(w, m).delete(v).catch(A), s();
            }), p.onerror = ht(c), p.onblocked = t._fireOnBlocked;
          }
          if (r) throw new R.InvalidArgument("Invalid closeOptions argument to db.delete()");
          o.isBeingOpened ? o.dbReadyPromise.then(f) : f();
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
        return g(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), Re.prototype.transaction = function() {
        var e = (function(t, r, o) {
          var s = arguments.length;
          if (s < 2) throw new R.InvalidArgument("Too few arguments");
          for (var c = new Array(s - 1); --s; ) c[s - 1] = arguments[s];
          return o = c.pop(), [t, ut(c), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Re.prototype._transaction = function(e, t, r) {
        var o = this, s = X.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var c, f, p = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (f = t.map(function(v) {
            if (v = v instanceof o.Table ? v.name : v, typeof v != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return v;
          }), e == "r" || e === Sr) c = Sr;
          else {
            if (e != "rw" && e != Er) throw new R.InvalidArgument("Invalid transaction mode: " + e);
            c = Er;
          }
          if (s) {
            if (s.mode === Sr && c === Er) {
              if (!p) throw new R.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              s = null;
            }
            s && f.forEach(function(v) {
              if (s && s.storeNames.indexOf(v) === -1) {
                if (!p) throw new R.SubTransaction("Table " + v + " not included in parent transaction.");
                s = null;
              }
            }), p && s && !s.active && (s = null);
          }
        } catch (v) {
          return s ? s._promise(null, function(w, h) {
            h(v);
          }) : De(v);
        }
        var m = (function v(w, h, E, y, b) {
          return H.resolve().then(function() {
            var S = X.transless || X, x = w._createTransaction(h, E, w._dbSchema, y);
            if (x.explicit = !0, S = { trans: x, transless: S }, y) x.idbtrans = y.idbtrans;
            else try {
              x.create(), x.idbtrans._explicit = !0, w._state.PR1398_maxLoop = 3;
            } catch (P) {
              return P.name === I.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                return v(w, h, E, null, b);
              })) : De(P);
            }
            var C, O = lt(b);
            return O && sn(), S = H.follow(function() {
              var P;
              (C = b.call(x, x)) && (O ? (P = Ot.bind(null, null), C.then(P, P)) : typeof C.next == "function" && typeof C.throw == "function" && (C = $r(C)));
            }, S), (C && typeof C.then == "function" ? H.resolve(C).then(function(P) {
              return x.active ? P : De(new R.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : S.then(function() {
              return C;
            })).then(function(P) {
              return y && x._resolve(), x._completion.then(function() {
                return P;
              });
            }).catch(function(P) {
              return x._reject(P), De(P);
            });
          });
        }).bind(null, this, c, f, s, r);
        return s ? s._promise(c, m, "lock") : X.trans ? Ut(X.transless, function() {
          return o._whenReady(m);
        }) : this._whenReady(m);
      }, Re.prototype.table = function(e) {
        if (!L(this._allTables, e)) throw new R.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Re);
      function Re(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var o = Re.dependencies;
        this._options = t = u({ addons: Re.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, c, f, p, m, v = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: A, dbReadyPromise: null, cancelOpen: A, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        v.dbReadyPromise = new H(function(h) {
          v.dbReadyResolve = h;
        }), v.openCanceller = new H(function(h, E) {
          v.cancelOpen = E;
        }), this._state = v, this.name = e, this.on = hn(this, "populate", "blocked", "versionchange", "close", { ready: [oe, A] }), this.once = function(h, E) {
          var y = function() {
            for (var b = [], S = 0; S < arguments.length; S++) b[S] = arguments[S];
            r.on(h).unsubscribe(y), E.apply(r, b);
          };
          return r.on(h, y);
        }, this.on.ready.subscribe = Fe(this.on.ready.subscribe, function(h) {
          return function(E, y) {
            Re.vip(function() {
              var b, S = r._state;
              S.openComplete ? (S.dbOpenError || H.resolve().then(E), y && h(E)) : S.onReadyBeingFired ? (S.onReadyBeingFired.push(E), y && h(E)) : (h(E), b = r, y || h(function x() {
                b.on.ready.unsubscribe(E), b.on.ready.unsubscribe(x);
              }));
            });
          };
        }), this.Collection = (s = this, mn(Wo.prototype, function(C, x) {
          this.db = s;
          var y = yi, b = null;
          if (x) try {
            y = x();
          } catch (O) {
            b = O;
          }
          var S = C._ctx, x = S.table, C = x.hook.reading.fire;
          this._ctx = { table: x, index: S.index, isPrimKey: !S.index || x.schema.primKey.keyPath && S.index === x.schema.primKey.name, range: y, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: b, or: S.or, valueMapper: C !== k ? C : null };
        })), this.Table = (c = this, mn(_i.prototype, function(h, E, y) {
          this.db = c, this._tx = y, this.name = h, this.schema = E, this.hook = c._allTables[h] ? c._allTables[h].hook : hn(null, { creating: [ee, A], reading: [Y, k], updating: [ue, A], deleting: [J, A] });
        })), this.Transaction = (f = this, mn(Qo.prototype, function(h, E, y, b, S) {
          var x = this;
          h !== "readonly" && E.forEach(function(C) {
            C = (C = y[C]) === null || C === void 0 ? void 0 : C.yProps, C && (E = E.concat(C.map(function(O) {
              return O.updatesTable;
            })));
          }), this.db = f, this.mode = h, this.storeNames = E, this.schema = y, this.chromeTransactionDurability = b, this.idbtrans = null, this.on = hn(this, "complete", "error", "abort"), this.parent = S || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new H(function(C, O) {
            x._resolve = C, x._reject = O;
          }), this._completion.then(function() {
            x.active = !1, x.on.complete.fire();
          }, function(C) {
            var O = x.active;
            return x.active = !1, x.on.error.fire(C), x.parent ? x.parent._reject(C) : O && x.idbtrans && x.idbtrans.abort(), De(C);
          });
        })), this.Version = (p = this, mn(rs.prototype, function(h) {
          this.db = p, this._cfg = { version: h, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (m = this, mn(Ci.prototype, function(h, E, y) {
          if (this.db = m, this._ctx = { table: h, index: E === ":id" ? null : E, or: y }, this._cmp = this._ascending = me, this._descending = function(b, S) {
            return me(S, b);
          }, this._max = function(b, S) {
            return 0 < me(b, S) ? b : S;
          }, this._min = function(b, S) {
            return me(b, S) < 0 ? b : S;
          }, this._IDBKeyRange = m._deps.IDBKeyRange, !this._IDBKeyRange) throw new R.MissingAPI();
        })), this.on("versionchange", function(h) {
          0 < h.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(h) {
          !h.newVersion || h.newVersion < h.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(h.oldVersion / 10));
        }), this._maxKey = bn(t.IDBKeyRange), this._createTransaction = function(h, E, y, b) {
          return new r.Transaction(h, E, y, r._options.chromeTransactionDurability, b);
        }, this._fireOnBlocked = function(h) {
          r.on("blocked").fire(h), an.filter(function(E) {
            return E.name === r.name && E !== r && !E._state.vcFired;
          }).map(function(E) {
            return E.on("versionchange").fire(h);
          });
        }, this.use(as), this.use(fs), this.use(us), this.use(os), this.use(ss);
        var w = new Proxy(this, { get: function(h, E, y) {
          if (E === "_vip") return !0;
          if (E === "table") return function(S) {
            return er(r.table(S), w);
          };
          var b = Reflect.get(h, E, y);
          return b instanceof _i ? er(b, w) : E === "tables" ? b.map(function(S) {
            return er(S, w);
          }) : E === "_createTransaction" ? function() {
            return er(b.apply(this, arguments), w);
          } : b;
        } });
        this.vip = w, o.forEach(function(h) {
          return h(r);
        });
      }
      var tr, ct = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ds = (Hr.prototype.subscribe = function(e, t, r) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: r });
      }, Hr.prototype[ct] = function() {
        return this;
      }, Hr);
      function Hr(e) {
        this._subscribe = e;
      }
      try {
        tr = { indexedDB: d.indexedDB || d.mozIndexedDB || d.webkitIndexedDB || d.msIndexedDB, IDBKeyRange: d.IDBKeyRange || d.webkitIDBKeyRange };
      } catch {
        tr = { indexedDB: null, IDBKeyRange: null };
      }
      function Li(e) {
        var t, r = !1, o = new ds(function(s) {
          var c = lt(e), f, p = !1, m = {}, v = {}, w = { get closed() {
            return p;
          }, unsubscribe: function() {
            p || (p = !0, f && f.abort(), h && Dt.storagemutated.unsubscribe(y));
          } };
          s.start && s.start(w);
          var h = !1, E = function() {
            return xr(b);
          }, y = function(S) {
            zn(m, S), Mr(v, m) && E();
          }, b = function() {
            var S, x, C;
            !p && tr.indexedDB && (m = {}, S = {}, f && f.abort(), f = new AbortController(), C = function(O) {
              var P = rn();
              try {
                c && sn();
                var D = It(e, O);
                return D = c ? D.finally(Ot) : D;
              } finally {
                P && on();
              }
            }(x = { subscr: S, signal: f.signal, requery: E, querier: e, trans: null }), Promise.resolve(C).then(function(O) {
              r = !0, t = O, p || x.signal.aborted || (m = {}, function(P) {
                for (var D in P) if (L(P, D)) return;
                return 1;
              }(v = S) || h || (Dt(gn, y), h = !0), xr(function() {
                return !p && s.next && s.next(O);
              }));
            }, function(O) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(O?.name) || p || xr(function() {
                p || s.error && s.error(O);
              });
            }));
          };
          return setTimeout(E, 0), w;
        });
        return o.hasValue = function() {
          return r;
        }, o.getValue = function() {
          return t;
        }, o;
      }
      var Wt = wt;
      function Wr(e) {
        var t = Rt;
        try {
          Rt = !0, Dt.storagemutated.fire(e), Lr(e, !0);
        } finally {
          Rt = t;
        }
      }
      z(Wt, u(u({}, Me), { delete: function(e) {
        return new Wt(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new Wt(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = Wt.dependencies, r = t.indexedDB, t = t.IDBKeyRange, (jr(r) ? Promise.resolve(r.databases()).then(function(o) {
            return o.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== Bn;
            });
          }) : kr(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return De(new R.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          N(this, e);
        };
      }, ignoreTransaction: function(e) {
        return X.trans ? Ut(X.transless, e) : e();
      }, vip: Fr, async: function(e) {
        return function() {
          try {
            var t = $r(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : H.resolve(t);
          } catch (r) {
            return De(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = $r(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : H.resolve(o);
        } catch (s) {
          return De(s);
        }
      }, currentTransaction: { get: function() {
        return X.trans || null;
      } }, waitFor: function(e, t) {
        return t = H.resolve(typeof e == "function" ? Wt.ignoreTransaction(e) : e).timeout(t || 6e4), X.trans ? X.trans.waitFor(t) : t;
      }, Promise: H, debug: { get: function() {
        return Z;
      }, set: function(e) {
        we(e);
      } }, derive: ne, extend: N, props: z, override: Fe, Events: hn, on: Dt, liveQuery: Li, extendObservabilitySet: zn, getByKeyPath: re, setByKeyPath: te, delByKeyPath: function(e, t) {
        typeof t == "string" ? te(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          te(e, r, void 0);
        });
      }, shallowClone: Te, deepClone: ze, getObjectDiff: Ur, cmp: me, asap: qe, minKey: -1 / 0, addons: [], connections: an, errnames: I, dependencies: tr, cache: Ht, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), Wt.maxKey = bn(Wt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Dt(gn, function(e) {
        Rt || (e = new CustomEvent(Ar, { detail: e }), Rt = !0, dispatchEvent(e), Rt = !1);
      }), addEventListener(Ar, function(e) {
        e = e.detail, Rt || Wr(e);
      }));
      var pn, Rt = !1, $i = function() {
      };
      return typeof BroadcastChannel < "u" && (($i = function() {
        (pn = new BroadcastChannel(Ar)).onmessage = function(e) {
          return e.data && Wr(e.data);
        };
      })(), typeof pn.unref == "function" && pn.unref(), Dt(gn, function(e) {
        Rt || pn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!wt.disableBfCache && e.persisted) {
          Z && console.debug("Dexie: handling persisted pagehide"), pn?.close();
          for (var t = 0, r = an; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !wt.disableBfCache && e.persisted && (Z && console.debug("Dexie: handling persisted pageshow"), $i(), Wr({ all: new Ve(-1 / 0, [[]]) }));
      })), H.rejectionMapper = function(e, t) {
        return !e || e instanceof Ct || e instanceof TypeError || e instanceof SyntaxError || !e.name || !B[e.name] ? e : (t = new B[e.name](t || e.message, e), "stack" in e && pe(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, we(Z), u(wt, Object.freeze({ __proto__: null, Dexie: wt, liveQuery: Li, Entity: vi, cmp: me, PropModification: yn, replacePrefix: function(e, t) {
        return new yn({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new yn({ add: e });
      }, remove: function(e) {
        return new yn({ remove: e });
      }, default: wt, RangeSet: Ve, mergeRanges: xn, rangesOverlap: Pi }), { default: wt }), wt;
    });
  }(Eo)), Eo.exports;
}
var mh = hh();
const Us = /* @__PURE__ */ dh(mh), pu = Symbol.for("Dexie"), Do = globalThis[pu] || (globalThis[pu] = Us);
if (Us.semVer !== Do.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Us.semVer} and ${Do.semVer}`);
const {
  liveQuery: Ph,
  mergeRanges: Dh,
  rangesOverlap: Rh,
  RangeSet: kh,
  cmp: jh,
  Entity: Fh,
  PropModification: Kh,
  replacePrefix: Mh,
  add: Bh,
  remove: qh,
  DexieYProvider: Lh
} = Do, yh = /* @__PURE__ */ Bu({
  __name: "oscd-loader",
  props: {
    doc: {}
  },
  setup(n) {
    const i = n, a = zi(0), u = zi(), l = new Qp(), d = Dc(), g = zi();
    Io($), Io(N), lf(() => {
      i.doc && z(i.doc);
    }), _o(
      () => d.value,
      (ne) => {
        ne && T(ne);
      },
      { immediate: !0 }
    );
    async function T(ne) {
      const he = new Do(ne);
      await he.open(), g.value = ah(he);
    }
    async function N() {
      try {
        if (!u.value)
          return;
        const ve = (await import("https://openenergytools.github.io/scl-editor/plugins/oscd-designer/oscd-designer.js")).default;
        class Ce extends ve {
        }
        const Fe = `oscd-plugin-${Date.now()}`;
        customElements.define(Fe, Ce);
        const de = document.createElement(Fe);
        u.value.innerHTML = "", u.value.appendChild(de), pe(l), L(document.head), i.doc && (z(i.doc), ie(a.value));
      } catch (ne) {
        console.error("Failed to load plugin:", ne);
      }
    }
    function $() {
      u.value && (u.value.addEventListener("editor-action", (ne) => {
        j(Ec(Op(ne.detail.action)));
      }), u.value.addEventListener("oscd-edit", (ne) => {
        const he = ne.detail.edit ?? ne.detail, ve = Oc(he);
        if (j(ve), !g.value) {
          console.warn("sdk is needed to translate and apply events");
          return;
        }
        Nc(ve, g.value);
      }), u.value.addEventListener("oscd-edit-v2", (ne) => j(ne)));
    }
    function j(ne) {
      l.commit(ne), a.value += 1, ie(a.value);
    }
    function L(ne) {
      const he = document.createElement("link");
      he.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&family=Roboto+Mono:wght@400;500&display=swap", he.rel = "stylesheet", ne.appendChild(he);
      const ve = document.createElement("link");
      ve.href = "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined", ve.rel = "stylesheet", ne.appendChild(ve);
    }
    function z(ne) {
      const he = u.value?.firstElementChild;
      he && (he.doc = ne);
    }
    function ie(ne) {
      const he = u.value?.firstElementChild;
      he && (he.editCount = a.value, he.docVersion = a.value);
    }
    function pe(ne) {
      const he = u.value?.firstElementChild;
      he && (he.editor = ne);
    }
    return (ne, he) => (oc(), _f("div", {
      ref_key: "pluginContainerRef",
      ref: u
    }, null, 512));
  }
}), vh = /* @__PURE__ */ Bu({
  __name: "app",
  props: {
    api: {}
  },
  setup(n) {
    const i = n;
    let a = zi(), u = () => {
    };
    const l = Dc();
    Io(() => {
      u = i.api.activeFileName.subscribe(async (g, T) => {
        d(g), l.value = g;
      }), i.api.activeFileName.value && (l.value = i.api.activeFileName.value, d(i.api.activeFileName.value));
    }), aa(() => {
      u();
    });
    async function d(g) {
      if (!g)
        return;
      const { xmlDocument: T } = await vd({ databaseName: g });
      a.value = T;
    }
    return (g, T) => (oc(), wf(yh, { doc: Du(a) }, null, 8, ["doc"]));
  }
}), gh = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [u, l] of i)
    a[u] = l;
  return a;
}, bh = /* @__PURE__ */ gh(vh, [["__scopeId", "data-v-52fe7d34"]]);
function $h(n, i) {
  if (!document.getElementById(n)) {
    console.error({ msg: "could not found root element", rootId: n });
    return;
  }
  id(bh, { api: i }).mount(`#${n}`);
}
export {
  $h as default
};
