(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(`:host{display:block;font-family:var(--oscd-text-font, "Roboto");color:var(--mdc-theme-on-surface);background-color:var(--mdc-theme-surface)}h3{color:var(--primary)}#root-container{padding:16px}*{--base03: #002b36;--base02: #073642;--base01: #586e75;--base00: #657b83;--base0: #839496;--base1: #93a1a1;--base2: #eee8d5;--base3: #fdf6e3;--yellow: #b58900;--orange: #cb4b16;--red: #dc322f;--magenta: #d33682;--violet: #6c71c4;--blue: #268bd2;--cyan: #2aa198;--green: #859900;--primary: var(--cyan);--secondary: var(--violet);--mdc-theme-primary: var(--primary);--mdc-theme-secondary: var(--secondary);--mdc-theme-background: var(--base3);--mdc-theme-surface: var(--base3);--mdc-theme-on-primary: var(--base2);--mdc-theme-on-secondary: var(--base2);--mdc-theme-on-background: var(--base00);--mdc-theme-on-surface: var(--base00);--mdc-theme-text-primary-on-background: var(--base01);--mdc-theme-text-secondary-on-background: var(--base00);--mdc-theme-text-icon-on-background: var(--base00);--mdc-theme-error: var(--red);--mdc-button-disabled-ink-color: var(--base1);--mdc-drawer-heading-ink-color: var(--base00);--mdc-text-field-fill-color: var(--base2);--mdc-text-field-disabled-fill-color: var(--base3);--mdc-text-field-ink-color: var(--base00);--mdc-text-field-label-ink-color: var(--base00);--mdc-select-fill-color: var(--base2);--mdc-select-disabled-fill-color: var(--base3);--mdc-select-ink-color: var(--base00);--mdc-dialog-heading-ink-color: var(--base00);--mdc-icon-font: "Material Icons Outlined";--oscd-primary: var(--oscd-theme-primary, var(--cyan));--oscd-secondary: var(--oscd-theme-secondary, var(--violet));--oscd-error: var(--oscd-theme-error, var(--red));--oscd-base03: var(--oscd-theme-base03, var(--base03));--oscd-base02: var(--oscd-theme-base02, var(--base02));--oscd-base01: var(--oscd-theme-base01, var(--base01));--oscd-base00: var(--oscd-theme-base00, var(--base00));--oscd-base0: var(--oscd-theme-base0, var(--base0));--oscd-base1: var(--oscd-theme-base1, var(--base1));--oscd-base2: var(--oscd-theme-base2, var(--base2));--oscd-base3: var(--oscd-theme-base3, var(--base3));--oscd-text-font: var(--oscd-theme-text-font, "Roboto");--oscd-icon-font: var(--oscd-theme-icon-font, "Material Icons")}.mdc-drawer span.mdc-drawer__title{color:var(--mdc-theme-text-primary-on-background)!important}abbr{text-decoration:none;border-bottom:none}mwc-textfield[iconTrailing=search]{--mdc-shape-small: 28px}/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */@layer theme{[data-v-fd2ca7ba]:root,[data-v-fd2ca7ba]:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{[data-v-fd2ca7ba],[data-v-fd2ca7ba]:after,[data-v-fd2ca7ba]:before,[data-v-fd2ca7ba]::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-v-fd2ca7ba]::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html[data-v-fd2ca7ba],[data-v-fd2ca7ba]:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr[data-v-fd2ca7ba]{height:0;color:inherit;border-top-width:1px}abbr[data-v-fd2ca7ba]:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1[data-v-fd2ca7ba],h2[data-v-fd2ca7ba],h3[data-v-fd2ca7ba],h4[data-v-fd2ca7ba],h5[data-v-fd2ca7ba],h6[data-v-fd2ca7ba]{font-size:inherit;font-weight:inherit}a[data-v-fd2ca7ba]{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b[data-v-fd2ca7ba],strong[data-v-fd2ca7ba]{font-weight:bolder}code[data-v-fd2ca7ba],kbd[data-v-fd2ca7ba],samp[data-v-fd2ca7ba],pre[data-v-fd2ca7ba]{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small[data-v-fd2ca7ba]{font-size:80%}sub[data-v-fd2ca7ba],sup[data-v-fd2ca7ba]{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub[data-v-fd2ca7ba]{bottom:-.25em}sup[data-v-fd2ca7ba]{top:-.5em}table[data-v-fd2ca7ba]{text-indent:0;border-color:inherit;border-collapse:collapse}[data-v-fd2ca7ba]:-moz-focusring{outline:auto}progress[data-v-fd2ca7ba]{vertical-align:baseline}summary[data-v-fd2ca7ba]{display:list-item}ol[data-v-fd2ca7ba],ul[data-v-fd2ca7ba],menu[data-v-fd2ca7ba]{list-style:none}img[data-v-fd2ca7ba],svg[data-v-fd2ca7ba],video[data-v-fd2ca7ba],canvas[data-v-fd2ca7ba],audio[data-v-fd2ca7ba],iframe[data-v-fd2ca7ba],embed[data-v-fd2ca7ba],object[data-v-fd2ca7ba]{vertical-align:middle;display:block}img[data-v-fd2ca7ba],video[data-v-fd2ca7ba]{max-width:100%;height:auto}button[data-v-fd2ca7ba],input[data-v-fd2ca7ba],select[data-v-fd2ca7ba],optgroup[data-v-fd2ca7ba],textarea[data-v-fd2ca7ba]{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-v-fd2ca7ba]::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup[data-v-fd2ca7ba]{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option[data-v-fd2ca7ba]{padding-inline-start:20px}[data-v-fd2ca7ba]::file-selector-button{margin-inline-end:4px}[data-v-fd2ca7ba]::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){[data-v-fd2ca7ba]::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-v-fd2ca7ba]::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea[data-v-fd2ca7ba]{resize:vertical}[data-v-fd2ca7ba]::-webkit-search-decoration{-webkit-appearance:none}[data-v-fd2ca7ba]::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-v-fd2ca7ba]::-webkit-datetime-edit{display:inline-flex}[data-v-fd2ca7ba]::-webkit-datetime-edit-fields-wrapper{padding:0}[data-v-fd2ca7ba]::-webkit-datetime-edit{padding-block:0}[data-v-fd2ca7ba]::-webkit-datetime-edit-year-field{padding-block:0}[data-v-fd2ca7ba]::-webkit-datetime-edit-month-field{padding-block:0}[data-v-fd2ca7ba]::-webkit-datetime-edit-day-field{padding-block:0}[data-v-fd2ca7ba]::-webkit-datetime-edit-hour-field{padding-block:0}[data-v-fd2ca7ba]::-webkit-datetime-edit-minute-field{padding-block:0}[data-v-fd2ca7ba]::-webkit-datetime-edit-second-field{padding-block:0}[data-v-fd2ca7ba]::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-v-fd2ca7ba]::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-v-fd2ca7ba]::-webkit-calendar-picker-indicator{line-height:1}[data-v-fd2ca7ba]:-moz-ui-invalid{box-shadow:none}button[data-v-fd2ca7ba],input[data-v-fd2ca7ba]:where([type=button],[type=reset],[type=submit]){appearance:button}[data-v-fd2ca7ba]::file-selector-button{appearance:button}[data-v-fd2ca7ba]::-webkit-inner-spin-button{height:auto}[data-v-fd2ca7ba]::-webkit-outer-spin-button{height:auto}[hidden][data-v-fd2ca7ba]:where(:not([hidden=until-found])){display:none!important}:where([data-v-fd2ca7ba]:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where([data-v-fd2ca7ba]:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open][data-v-fd2ca7ba],.modal-open[data-v-fd2ca7ba],.modal-toggle:checked+.modal[data-v-fd2ca7ba]):not(.modal-start,.modal-end){scrollbar-gutter:stable}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}[data-v-fd2ca7ba]:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}[data-v-fd2ca7ba]:root,[data-theme][data-v-fd2ca7ba]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}[data-v-fd2ca7ba]:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){[data-v-fd2ca7ba]:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}[data-v-fd2ca7ba]:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}:where([data-v-fd2ca7ba]:root),[data-v-fd2ca7ba]:root:has(input.theme-controller[value=ocean-light]:checked),[data-theme=ocean-light][data-v-fd2ca7ba]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(37% 0 0);--color-primary:oklch(58.13% .0903 209.8);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(65.24% .0821 207.95);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(98% .001 106.423);--color-neutral:oklch(55% .013 58.071);--color-neutral-content:oklch(98% .031 120.757);--color-info:oklch(70% .165 254.624);--color-info-content:oklch(98% .001 106.423);--color-success:oklch(72% .219 149.579);--color-success-content:oklch(98% .001 106.423);--color-warning:oklch(87% .169 91.605);--color-warning-content:oklch(98% .001 106.423);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(98% .001 106.423);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.21875rem;--size-field:.21875rem;--border:1.5px;--depth:1;--noise:1;--border-color:var(--color-base-300)}}@layer components;@layer utilities{.table[data-v-fd2ca7ba]{border-radius:var(--radius-box);text-align:left;width:100%;font-size:.875rem;position:relative}.table[data-v-fd2ca7ba]:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media (hover:hover){:is(.table tr.row-hover[data-v-fd2ca7ba],.table tr.row-hover[data-v-fd2ca7ba]:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table[data-v-fd2ca7ba] :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table[data-v-fd2ca7ba] :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table[data-v-fd2ca7ba] :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.table[data-v-fd2ca7ba] :where(thead,tfoot){font-size:.875rem;font-weight:600}.table[data-v-fd2ca7ba] :where(tfoot){border-top:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table[data-v-fd2ca7ba] :where(tfoot){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.table[data-v-fd2ca7ba] :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table[data-v-fd2ca7ba] :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table[data-v-fd2ca7ba] :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table[data-v-fd2ca7ba] :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table[data-v-fd2ca7ba] :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.inline[data-v-fd2ca7ba]{display:inline}.table[data-v-fd2ca7ba]{display:table}.link[data-v-fd2ca7ba]{cursor:pointer;text-decoration-line:underline}.link[data-v-fd2ca7ba]:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link[data-v-fd2ca7ba]:focus{outline-offset:2px;outline:2px solid #0000}}.link[data-v-fd2ca7ba]:focus-visible{outline-offset:2px;outline:2px solid}.flex-wrap[data-v-fd2ca7ba]{flex-wrap:wrap}}[data-v-fd2ca7ba]:root{--color-ocean-gray-00:#fff;--color-ocean-gray-25:#fafbfb;--color-ocean-gray-50:#f5f6f7;--color-ocean-gray-75:#eaeeef;--color-ocean-gray-100:#e1e4e6;--color-ocean-gray-150:#c6ced1;--color-ocean-gray-200:#bac1c4;--color-ocean-gray-250:#9fadb2;--color-ocean-gray-300:#889499;--color-ocean-gray-350:#72858c;--color-ocean-gray-400:#617177;--color-ocean-gray-450:#3f555e;--color-ocean-gray-500:#394d55;--color-ocean-gray-550:#34464d;--color-ocean-gray-600:#2e3e44;--color-ocean-gray-650:#27353b;--color-ocean-gray-700:#222e33;--color-ocean-gray-750:#1f272b;--color-ocean-gray-800:#171f22;--color-ocean-gray-850:#11171a;--color-ocean-gray-900:#0b0f11;--color-chart-1:#f7931e;--color-chart-2:#40535b;--color-chart-3:#2798aa;--color-chart-4:#6da89c;--color-chart-5:#a4cadd;--color-chart-6:#97b42d;--color-chart-7:#ffcb05;--color-chart-8:#ee652e;--color-chart-9:#528694;--color-chart-10:#a10f3b}header[data-v-fd2ca7ba]{line-height:1.5}.logo[data-v-fd2ca7ba]{margin:0 auto 2rem;display:block}@media (min-width:1024px){header[data-v-fd2ca7ba]{padding-right:calc(var(--section-gap)/2);place-items:center;display:flex}.logo[data-v-fd2ca7ba]{margin:0 2rem 0 0}header .wrapper[data-v-fd2ca7ba]{flex-wrap:wrap;place-items:flex-start;display:flex}}@keyframes dropdown-fd2ca7ba{0%{opacity:0}}@keyframes radio-fd2ca7ba{0%{padding:5px}50%{padding:3px}}@keyframes toast-fd2ca7ba{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes rating-fd2ca7ba{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes skeleton-fd2ca7ba{0%{background-position:150%}to{background-position:-50%}}@keyframes progress-fd2ca7ba{50%{background-position-x:-115%}}`)),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Gs(n) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const a of n.split(",")) i[a] = 1;
  return (a) => a in i;
}
const ft = {}, ii = [], Dn = () => {
}, Mc = () => !1, Ro = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // uppercase letter
(n.charCodeAt(2) > 122 || n.charCodeAt(2) < 97), Hs = (n) => n.startsWith("onUpdate:"), Kt = Object.assign, Ws = (n, i) => {
  const a = n.indexOf(i);
  a > -1 && n.splice(a, 1);
}, Kc = Object.prototype.hasOwnProperty, rt = (n, i) => Kc.call(n, i), Ke = Array.isArray, Hi = (n) => ko(n) === "[object Map]", qc = (n) => ko(n) === "[object Set]", qe = (n) => typeof n == "function", Pt = (n) => typeof n == "string", ci = (n) => typeof n == "symbol", St = (n) => n !== null && typeof n == "object", vu = (n) => (St(n) || qe(n)) && qe(n.then) && qe(n.catch), Bc = Object.prototype.toString, ko = (n) => Bc.call(n), $c = (n) => ko(n).slice(8, -1), Vc = (n) => ko(n) === "[object Object]", Ys = (n) => Pt(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, Wi = /* @__PURE__ */ Gs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Fo = (n) => {
  const i = /* @__PURE__ */ Object.create(null);
  return (a) => i[a] || (i[a] = n(a));
}, Uc = /-(\w)/g, vr = Fo(
  (n) => n.replace(Uc, (i, a) => a ? a.toUpperCase() : "")
), Gc = /\B([A-Z])/g, ti = Fo(
  (n) => n.replace(Gc, "-$1").toLowerCase()
), gu = Fo((n) => n.charAt(0).toUpperCase() + n.slice(1)), ps = Fo(
  (n) => n ? `on${gu(n)}` : ""
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
}, Hc = (n) => {
  const i = parseFloat(n);
  return isNaN(i) ? n : i;
};
let ba;
const jo = () => ba || (ba = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Qs(n) {
  if (Ke(n)) {
    const i = {};
    for (let a = 0; a < n.length; a++) {
      const u = n[a], l = Pt(u) ? Xc(u) : Qs(u);
      if (l)
        for (const d in l)
          i[d] = l[d];
    }
    return i;
  } else if (Pt(n) || St(n))
    return n;
}
const Wc = /;(?![^(]*\))/g, Yc = /:([^]+)/, Qc = /\/\*[^]*?\*\//g;
function Xc(n) {
  const i = {};
  return n.replace(Qc, "").split(Wc).forEach((a) => {
    if (a) {
      const u = a.split(Yc);
      u.length > 1 && (i[u[0].trim()] = u[1].trim());
    }
  }), i;
}
function Xs(n) {
  let i = "";
  if (Pt(n))
    i = n;
  else if (Ke(n))
    for (let a = 0; a < n.length; a++) {
      const u = Xs(n[a]);
      u && (i += u + " ");
    }
  else if (St(n))
    for (const a in n)
      n[a] && (i += a + " ");
  return i.trim();
}
const zc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Jc = /* @__PURE__ */ Gs(zc);
function bu(n) {
  return !!n || n === "";
}
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let nn;
class Zc {
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
function el() {
  return nn;
}
let lt;
const ms = /* @__PURE__ */ new WeakSet();
class wu {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Su(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, wa(this), xu(this);
    const i = lt, a = En;
    lt = this, En = !0;
    try {
      return this.fn();
    } finally {
      Eu(this), lt = i, En = a, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let i = this.deps; i; i = i.nextDep)
        Zs(i);
      this.deps = this.depsTail = void 0, wa(this), this.onStop && this.onStop(), this.flags &= -2;
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
let _u = 0, Yi, Qi;
function Su(n, i = !1) {
  if (n.flags |= 8, i) {
    n.next = Qi, Qi = n;
    return;
  }
  n.next = Yi, Yi = n;
}
function zs() {
  _u++;
}
function Js() {
  if (--_u > 0)
    return;
  if (Qi) {
    let i = Qi;
    for (Qi = void 0; i; ) {
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
function xu(n) {
  for (let i = n.deps; i; i = i.nextDep)
    i.version = -1, i.prevActiveLink = i.dep.activeLink, i.dep.activeLink = i;
}
function Eu(n) {
  let i, a = n.depsTail, u = a;
  for (; u; ) {
    const l = u.prevDep;
    u.version === -1 ? (u === a && (a = l), Zs(u), tl(u)) : i = u, u.dep.activeLink = u.prevActiveLink, u.prevActiveLink = void 0, u = l;
  }
  n.deps = i, n.depsTail = a;
}
function Cs(n) {
  for (let i = n.deps; i; i = i.nextDep)
    if (i.dep.version !== i.version || i.dep.computed && (Tu(i.dep.computed) || i.dep.version !== i.version))
      return !0;
  return !!n._dirty;
}
function Tu(n) {
  if (n.flags & 4 && !(n.flags & 16) || (n.flags &= -17, n.globalVersion === no) || (n.globalVersion = no, !n.isSSR && n.flags & 128 && (!n.deps && !n._dirty || !Cs(n))))
    return;
  n.flags |= 2;
  const i = n.dep, a = lt, u = En;
  lt = n, En = !0;
  try {
    xu(n);
    const l = n.fn(n._value);
    (i.version === 0 || mr(l, n._value)) && (n.flags |= 128, n._value = l, i.version++);
  } catch (l) {
    throw i.version++, l;
  } finally {
    lt = a, En = u, Eu(n), n.flags &= -3;
  }
}
function Zs(n, i = !1) {
  const { dep: a, prevSub: u, nextSub: l } = n;
  if (u && (u.nextSub = l, n.prevSub = void 0), l && (l.prevSub = u, n.nextSub = void 0), a.subs === n && (a.subs = u, !u && a.computed)) {
    a.computed.flags &= -5;
    for (let d = a.computed.deps; d; d = d.nextDep)
      Zs(d, !0);
  }
  !i && !--a.sc && a.map && a.map.delete(a.key);
}
function tl(n) {
  const { prevDep: i, nextDep: a } = n;
  i && (i.nextDep = a, n.prevDep = void 0), a && (a.prevDep = i, n.nextDep = void 0);
}
let En = !0;
const Cu = [];
function ar() {
  Cu.push(En), En = !1;
}
function ur() {
  const n = Cu.pop();
  En = n === void 0 ? !0 : n;
}
function wa(n) {
  const { cleanup: i } = n;
  if (n.cleanup = void 0, i) {
    const a = lt;
    lt = void 0;
    try {
      i();
    } finally {
      lt = a;
    }
  }
}
let no = 0;
class nl {
  constructor(i, a) {
    this.sub = i, this.dep = a, this.version = a.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ea {
  // TODO isolatedDeclarations "__v_skip"
  constructor(i) {
    this.computed = i, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(i) {
    if (!lt || !En || lt === this.computed)
      return;
    let a = this.activeLink;
    if (a === void 0 || a.sub !== lt)
      a = this.activeLink = new nl(lt, this), lt.deps ? (a.prevDep = lt.depsTail, lt.depsTail.nextDep = a, lt.depsTail = a) : lt.deps = lt.depsTail = a, Au(a);
    else if (a.version === -1 && (a.version = this.version, a.nextDep)) {
      const u = a.nextDep;
      u.prevDep = a.prevDep, a.prevDep && (a.prevDep.nextDep = u), a.prevDep = lt.depsTail, a.nextDep = void 0, lt.depsTail.nextDep = a, lt.depsTail = a, lt.deps === a && (lt.deps = u);
    }
    return a;
  }
  trigger(i) {
    this.version++, no++, this.notify(i);
  }
  notify(i) {
    zs();
    try {
      for (let a = this.subs; a; a = a.prevSub)
        a.sub.notify() && a.sub.dep.notify();
    } finally {
      Js();
    }
  }
}
function Au(n) {
  if (n.dep.sc++, n.sub.flags & 4) {
    const i = n.dep.computed;
    if (i && !n.dep.subs) {
      i.flags |= 20;
      for (let u = i.deps; u; u = u.nextDep)
        Au(u);
    }
    const a = n.dep.subs;
    a !== n && (n.prevSub = a, a && (a.nextSub = n)), n.dep.subs = n;
  }
}
const As = /* @__PURE__ */ new WeakMap(), Zr = Symbol(
  ""
), Ps = Symbol(
  ""
), ro = Symbol(
  ""
);
function Lt(n, i, a) {
  if (En && lt) {
    let u = As.get(n);
    u || As.set(n, u = /* @__PURE__ */ new Map());
    let l = u.get(a);
    l || (u.set(a, l = new ea()), l.map = u, l.key = a), l.track();
  }
}
function sr(n, i, a, u, l, d) {
  const v = As.get(n);
  if (!v) {
    no++;
    return;
  }
  const x = (D) => {
    D && D.trigger();
  };
  if (zs(), i === "clear")
    v.forEach(x);
  else {
    const D = Ke(n), W = D && Ys(a);
    if (D && a === "length") {
      const K = Number(u);
      v.forEach((G, re) => {
        (re === "length" || re === ro || !ci(re) && re >= K) && x(G);
      });
    } else
      switch ((a !== void 0 || v.has(void 0)) && x(v.get(a)), W && x(v.get(ro)), i) {
        case "add":
          D ? W && x(v.get("length")) : (x(v.get(Zr)), Hi(n) && x(v.get(Ps)));
          break;
        case "delete":
          D || (x(v.get(Zr)), Hi(n) && x(v.get(Ps)));
          break;
        case "set":
          Hi(n) && x(v.get(Zr));
          break;
      }
  }
  Js();
}
function ni(n) {
  const i = nt(n);
  return i === n ? i : (Lt(i, "iterate", ro), Tn(n) ? i : i.map(Jt));
}
function ta(n) {
  return Lt(n = nt(n), "iterate", ro), n;
}
const rl = {
  __proto__: null,
  [Symbol.iterator]() {
    return ys(this, Symbol.iterator, Jt);
  },
  concat(...n) {
    return ni(this).concat(
      ...n.map((i) => Ke(i) ? ni(i) : i)
    );
  },
  entries() {
    return ys(this, "entries", (n) => (n[1] = Jt(n[1]), n));
  },
  every(n, i) {
    return rr(this, "every", n, i, void 0, arguments);
  },
  filter(n, i) {
    return rr(this, "filter", n, i, (a) => a.map(Jt), arguments);
  },
  find(n, i) {
    return rr(this, "find", n, i, Jt, arguments);
  },
  findIndex(n, i) {
    return rr(this, "findIndex", n, i, void 0, arguments);
  },
  findLast(n, i) {
    return rr(this, "findLast", n, i, Jt, arguments);
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
    return Vi(this, "pop");
  },
  push(...n) {
    return Vi(this, "push", n);
  },
  reduce(n, ...i) {
    return _a(this, "reduce", n, i);
  },
  reduceRight(n, ...i) {
    return _a(this, "reduceRight", n, i);
  },
  shift() {
    return Vi(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(n, i) {
    return rr(this, "some", n, i, void 0, arguments);
  },
  splice(...n) {
    return Vi(this, "splice", n);
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
    return Vi(this, "unshift", n);
  },
  values() {
    return ys(this, "values", Jt);
  }
};
function ys(n, i, a) {
  const u = ta(n), l = u[i]();
  return u !== n && !Tn(n) && (l._next = l.next, l.next = () => {
    const d = l._next();
    return d.value && (d.value = a(d.value)), d;
  }), l;
}
const il = Array.prototype;
function rr(n, i, a, u, l, d) {
  const v = ta(n), x = v !== n && !Tn(n), D = v[i];
  if (D !== il[i]) {
    const G = D.apply(n, d);
    return x ? Jt(G) : G;
  }
  let W = a;
  v !== n && (x ? W = function(G, re) {
    return a.call(this, Jt(G), re, n);
  } : a.length > 2 && (W = function(G, re) {
    return a.call(this, G, re, n);
  }));
  const K = D.call(v, W, u);
  return x && l ? l(K) : K;
}
function _a(n, i, a, u) {
  const l = ta(n);
  let d = a;
  return l !== n && (Tn(n) ? a.length > 3 && (d = function(v, x, D) {
    return a.call(this, v, x, D, n);
  }) : d = function(v, x, D) {
    return a.call(this, v, Jt(x), D, n);
  }), l[i](d, ...u);
}
function vs(n, i, a) {
  const u = nt(n);
  Lt(u, "iterate", ro);
  const l = u[i](...a);
  return (l === -1 || l === !1) && oa(a[0]) ? (a[0] = nt(a[0]), u[i](...a)) : l;
}
function Vi(n, i, a = []) {
  ar(), zs();
  const u = nt(n)[i].apply(n, a);
  return Js(), ur(), u;
}
const ol = /* @__PURE__ */ Gs("__proto__,__v_isRef,__isVue"), Pu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(ci)
);
function sl(n) {
  ci(n) || (n = String(n));
  const i = nt(this);
  return Lt(i, "has", n), i.hasOwnProperty(n);
}
class Iu {
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
      return u === (l ? d ? yl : Ru : d ? Nu : Du).get(i) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(i) === Object.getPrototypeOf(u) ? i : void 0;
    const v = Ke(i);
    if (!l) {
      let D;
      if (v && (D = rl[a]))
        return D;
      if (a === "hasOwnProperty")
        return sl;
    }
    const x = Reflect.get(
      i,
      a,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Mt(i) ? i : u
    );
    return (ci(a) ? Pu.has(a) : ol(a)) || (l || Lt(i, "get", a), d) ? x : Mt(x) ? v && Ys(a) ? x : x.value : St(x) ? l ? ku(x) : ra(x) : x;
  }
}
class Ou extends Iu {
  constructor(i = !1) {
    super(!1, i);
  }
  set(i, a, u, l) {
    let d = i[a];
    if (!this._isShallow) {
      const D = ei(d);
      if (!Tn(u) && !ei(u) && (d = nt(d), u = nt(u)), !Ke(i) && Mt(d) && !Mt(u))
        return D ? !1 : (d.value = u, !0);
    }
    const v = Ke(i) && Ys(a) ? Number(a) < i.length : rt(i, a), x = Reflect.set(
      i,
      a,
      u,
      Mt(i) ? i : l
    );
    return i === nt(l) && (v ? mr(u, d) && sr(i, "set", a, u) : sr(i, "add", a, u)), x;
  }
  deleteProperty(i, a) {
    const u = rt(i, a);
    i[a];
    const l = Reflect.deleteProperty(i, a);
    return l && u && sr(i, "delete", a, void 0), l;
  }
  has(i, a) {
    const u = Reflect.has(i, a);
    return (!ci(a) || !Pu.has(a)) && Lt(i, "has", a), u;
  }
  ownKeys(i) {
    return Lt(
      i,
      "iterate",
      Ke(i) ? "length" : Zr
    ), Reflect.ownKeys(i);
  }
}
class al extends Iu {
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
const ul = /* @__PURE__ */ new Ou(), cl = /* @__PURE__ */ new al(), ll = /* @__PURE__ */ new Ou(!0);
const Is = (n) => n, po = (n) => Reflect.getPrototypeOf(n);
function fl(n, i, a) {
  return function(...u) {
    const l = this.__v_raw, d = nt(l), v = Hi(d), x = n === "entries" || n === Symbol.iterator && v, D = n === "keys" && v, W = l[n](...u), K = a ? Is : i ? Os : Jt;
    return !i && Lt(
      d,
      "iterate",
      D ? Ps : Zr
    ), {
      // iterator protocol
      next() {
        const { value: G, done: re } = W.next();
        return re ? { value: G, done: re } : {
          value: x ? [K(G[0]), K(G[1])] : K(G),
          done: re
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
function dl(n, i) {
  const a = {
    get(l) {
      const d = this.__v_raw, v = nt(d), x = nt(l);
      n || (mr(l, x) && Lt(v, "get", l), Lt(v, "get", x));
      const { has: D } = po(v), W = i ? Is : n ? Os : Jt;
      if (D.call(v, l))
        return W(d.get(l));
      if (D.call(v, x))
        return W(d.get(x));
      d !== v && d.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !n && Lt(nt(l), "iterate", Zr), Reflect.get(l, "size", l);
    },
    has(l) {
      const d = this.__v_raw, v = nt(d), x = nt(l);
      return n || (mr(l, x) && Lt(v, "has", l), Lt(v, "has", x)), l === x ? d.has(l) : d.has(l) || d.has(x);
    },
    forEach(l, d) {
      const v = this, x = v.__v_raw, D = nt(x), W = i ? Is : n ? Os : Jt;
      return !n && Lt(D, "iterate", Zr), x.forEach((K, G) => l.call(d, W(K), W(G), v));
    }
  };
  return Kt(
    a,
    n ? {
      add: ho("add"),
      set: ho("set"),
      delete: ho("delete"),
      clear: ho("clear")
    } : {
      add(l) {
        !i && !Tn(l) && !ei(l) && (l = nt(l));
        const d = nt(this);
        return po(d).has.call(d, l) || (d.add(l), sr(d, "add", l, l)), this;
      },
      set(l, d) {
        !i && !Tn(d) && !ei(d) && (d = nt(d));
        const v = nt(this), { has: x, get: D } = po(v);
        let W = x.call(v, l);
        W || (l = nt(l), W = x.call(v, l));
        const K = D.call(v, l);
        return v.set(l, d), W ? mr(d, K) && sr(v, "set", l, d) : sr(v, "add", l, d), this;
      },
      delete(l) {
        const d = nt(this), { has: v, get: x } = po(d);
        let D = v.call(d, l);
        D || (l = nt(l), D = v.call(d, l)), x && x.call(d, l);
        const W = d.delete(l);
        return D && sr(d, "delete", l, void 0), W;
      },
      clear() {
        const l = nt(this), d = l.size !== 0, v = l.clear();
        return d && sr(
          l,
          "clear",
          void 0,
          void 0
        ), v;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((l) => {
    a[l] = fl(l, n, i);
  }), a;
}
function na(n, i) {
  const a = dl(n, i);
  return (u, l, d) => l === "__v_isReactive" ? !n : l === "__v_isReadonly" ? n : l === "__v_raw" ? u : Reflect.get(
    rt(a, l) && l in u ? a : u,
    l,
    d
  );
}
const pl = {
  get: /* @__PURE__ */ na(!1, !1)
}, hl = {
  get: /* @__PURE__ */ na(!1, !0)
}, ml = {
  get: /* @__PURE__ */ na(!0, !1)
};
const Du = /* @__PURE__ */ new WeakMap(), Nu = /* @__PURE__ */ new WeakMap(), Ru = /* @__PURE__ */ new WeakMap(), yl = /* @__PURE__ */ new WeakMap();
function vl(n) {
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
function gl(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : vl($c(n));
}
function ra(n) {
  return ei(n) ? n : ia(
    n,
    !1,
    ul,
    pl,
    Du
  );
}
function bl(n) {
  return ia(
    n,
    !1,
    ll,
    hl,
    Nu
  );
}
function ku(n) {
  return ia(
    n,
    !0,
    cl,
    ml,
    Ru
  );
}
function ia(n, i, a, u, l) {
  if (!St(n) || n.__v_raw && !(i && n.__v_isReactive))
    return n;
  const d = gl(n);
  if (d === 0)
    return n;
  const v = l.get(n);
  if (v)
    return v;
  const x = new Proxy(
    n,
    d === 2 ? u : a
  );
  return l.set(n, x), x;
}
function Xi(n) {
  return ei(n) ? Xi(n.__v_raw) : !!(n && n.__v_isReactive);
}
function ei(n) {
  return !!(n && n.__v_isReadonly);
}
function Tn(n) {
  return !!(n && n.__v_isShallow);
}
function oa(n) {
  return n ? !!n.__v_raw : !1;
}
function nt(n) {
  const i = n && n.__v_raw;
  return i ? nt(i) : n;
}
function wl(n) {
  return !rt(n, "__v_skip") && Object.isExtensible(n) && Ts(n, "__v_skip", !0), n;
}
const Jt = (n) => St(n) ? ra(n) : n, Os = (n) => St(n) ? ku(n) : n;
function Mt(n) {
  return n ? n.__v_isRef === !0 : !1;
}
function zi(n) {
  return _l(n, !1);
}
function _l(n, i) {
  return Mt(n) ? n : new Sl(n, i);
}
class Sl {
  constructor(i, a) {
    this.dep = new ea(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = a ? i : nt(i), this._value = a ? i : Jt(i), this.__v_isShallow = a;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(i) {
    const a = this._rawValue, u = this.__v_isShallow || Tn(i) || ei(i);
    i = u ? i : nt(i), mr(i, a) && (this._rawValue = i, this._value = u ? i : Jt(i), this.dep.trigger());
  }
}
function Fu(n) {
  return Mt(n) ? n.value : n;
}
const xl = {
  get: (n, i, a) => i === "__v_raw" ? n : Fu(Reflect.get(n, i, a)),
  set: (n, i, a, u) => {
    const l = n[i];
    return Mt(l) && !Mt(a) ? (l.value = a, !0) : Reflect.set(n, i, a, u);
  }
};
function ju(n) {
  return Xi(n) ? n : new Proxy(n, xl);
}
class El {
  constructor(i, a, u) {
    this.fn = i, this.setter = a, this._value = void 0, this.dep = new ea(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = no - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !a, this.isSSR = u;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    lt !== this)
      return Su(this, !0), !0;
  }
  get value() {
    const i = this.dep.track();
    return Tu(this), i && (i.version = this.dep.version), this._value;
  }
  set value(i) {
    this.setter && this.setter(i);
  }
}
function Tl(n, i, a = !1) {
  let u, l;
  return qe(n) ? u = n : (u = n.get, l = n.set), new El(u, l, a);
}
const mo = {}, To = /* @__PURE__ */ new WeakMap();
let zr;
function Cl(n, i = !1, a = zr) {
  if (a) {
    let u = To.get(a);
    u || To.set(a, u = []), u.push(n);
  }
}
function Al(n, i, a = ft) {
  const { immediate: u, deep: l, once: d, scheduler: v, augmentJob: x, call: D } = a, W = (pe) => l ? pe : Tn(pe) || l === !1 || l === 0 ? pr(pe, 1) : pr(pe);
  let K, G, re, se, de = !1, he = !1;
  if (Mt(n) ? (G = () => n.value, de = Tn(n)) : Xi(n) ? (G = () => W(n), de = !0) : Ke(n) ? (he = !0, de = n.some((pe) => Xi(pe) || Tn(pe)), G = () => n.map((pe) => {
    if (Mt(pe))
      return pe.value;
    if (Xi(pe))
      return W(pe);
    if (qe(pe))
      return D ? D(pe, 2) : pe();
  })) : qe(n) ? i ? G = D ? () => D(n, 2) : n : G = () => {
    if (re) {
      ar();
      try {
        re();
      } finally {
        ur();
      }
    }
    const pe = zr;
    zr = K;
    try {
      return D ? D(n, 3, [se]) : n(se);
    } finally {
      zr = pe;
    }
  } : G = Dn, i && l) {
    const pe = G, Fe = l === !0 ? 1 / 0 : l;
    G = () => pr(pe(), Fe);
  }
  const Ce = el(), ae = () => {
    K.stop(), Ce && Ce.active && Ws(Ce.effects, K);
  };
  if (d && i) {
    const pe = i;
    i = (...Fe) => {
      pe(...Fe), ae();
    };
  }
  let ye = he ? new Array(n.length).fill(mo) : mo;
  const ke = (pe) => {
    if (!(!(K.flags & 1) || !K.dirty && !pe))
      if (i) {
        const Fe = K.run();
        if (l || de || (he ? Fe.some((ie, oe) => mr(ie, ye[oe])) : mr(Fe, ye))) {
          re && re();
          const ie = zr;
          zr = K;
          try {
            const oe = [
              Fe,
              // pass undefined as the old value when it's changed for the first time
              ye === mo ? void 0 : he && ye[0] === mo ? [] : ye,
              se
            ];
            ye = Fe, D ? D(i, 3, oe) : (
              // @ts-expect-error
              i(...oe)
            );
          } finally {
            zr = ie;
          }
        }
      } else
        K.run();
  };
  return x && x(ke), K = new wu(G), K.scheduler = v ? () => v(ke, !1) : ke, se = (pe) => Cl(pe, !1, K), re = K.onStop = () => {
    const pe = To.get(K);
    if (pe) {
      if (D)
        D(pe, 4);
      else
        for (const Fe of pe) Fe();
      To.delete(K);
    }
  }, i ? u ? ke(!0) : ye = K.run() : v ? v(ke.bind(null, !0), !0) : K.run(), ae.pause = K.pause.bind(K), ae.resume = K.resume.bind(K), ae.stop = ae, ae;
}
function pr(n, i = 1 / 0, a) {
  if (i <= 0 || !St(n) || n.__v_skip || (a = a || /* @__PURE__ */ new Set(), a.has(n)))
    return n;
  if (a.add(n), i--, Mt(n))
    pr(n.value, i, a);
  else if (Ke(n))
    for (let u = 0; u < n.length; u++)
      pr(n[u], i, a);
  else if (qc(n) || Hi(n))
    n.forEach((u) => {
      pr(u, i, a);
    });
  else if (Vc(n)) {
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
    Lo(l, i, a);
  }
}
function Nn(n, i, a, u) {
  if (qe(n)) {
    const l = uo(n, i, a, u);
    return l && vu(l) && l.catch((d) => {
      Lo(d, i, a);
    }), l;
  }
  if (Ke(n)) {
    const l = [];
    for (let d = 0; d < n.length; d++)
      l.push(Nn(n[d], i, a, u));
    return l;
  }
}
function Lo(n, i, a, u = !0) {
  const l = i ? i.vnode : null, { errorHandler: d, throwUnhandledErrorInProduction: v } = i && i.appContext.config || ft;
  if (i) {
    let x = i.parent;
    const D = i.proxy, W = `https://vuejs.org/error-reference/#runtime-${a}`;
    for (; x; ) {
      const K = x.ec;
      if (K) {
        for (let G = 0; G < K.length; G++)
          if (K[G](n, D, W) === !1)
            return;
      }
      x = x.parent;
    }
    if (d) {
      ar(), uo(d, null, 10, [
        n,
        D,
        W
      ]), ur();
      return;
    }
  }
  Pl(n, a, l, u, v);
}
function Pl(n, i, a, u = !0, l = !1) {
  if (l)
    throw n;
  console.error(n);
}
const Zt = [];
let Pn = -1;
const oi = [];
let lr = null, ri = 0;
const Lu = /* @__PURE__ */ Promise.resolve();
let Co = null;
function Il(n) {
  const i = Co || Lu;
  return n ? i.then(this ? n.bind(this) : n) : i;
}
function Ol(n) {
  let i = Pn + 1, a = Zt.length;
  for (; i < a; ) {
    const u = i + a >>> 1, l = Zt[u], d = io(l);
    d < n || d === n && l.flags & 2 ? i = u + 1 : a = u;
  }
  return i;
}
function sa(n) {
  if (!(n.flags & 1)) {
    const i = io(n), a = Zt[Zt.length - 1];
    !a || // fast path when the job id is larger than the tail
    !(n.flags & 2) && i >= io(a) ? Zt.push(n) : Zt.splice(Ol(i), 0, n), n.flags |= 1, Mu();
  }
}
function Mu() {
  Co || (Co = Lu.then(qu));
}
function Dl(n) {
  Ke(n) ? oi.push(...n) : lr && n.id === -1 ? lr.splice(ri + 1, 0, n) : n.flags & 1 || (oi.push(n), n.flags |= 1), Mu();
}
function Sa(n, i, a = Pn + 1) {
  for (; a < Zt.length; a++) {
    const u = Zt[a];
    if (u && u.flags & 2) {
      if (n && u.id !== n.uid)
        continue;
      Zt.splice(a, 1), a--, u.flags & 4 && (u.flags &= -2), u(), u.flags & 4 || (u.flags &= -2);
    }
  }
}
function Ku(n) {
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
function qu(n) {
  try {
    for (Pn = 0; Pn < Zt.length; Pn++) {
      const i = Zt[Pn];
      i && !(i.flags & 8) && (i.flags & 4 && (i.flags &= -2), uo(
        i,
        i.i,
        i.i ? 15 : 14
      ), i.flags & 4 || (i.flags &= -2));
    }
  } finally {
    for (; Pn < Zt.length; Pn++) {
      const i = Zt[Pn];
      i && (i.flags &= -2);
    }
    Pn = -1, Zt.length = 0, Ku(), Co = null, (Zt.length || oi.length) && qu();
  }
}
let On = null, Bu = null;
function Ao(n) {
  const i = On;
  return On = n, Bu = n && n.type.__scopeId || null, i;
}
function Nl(n, i = On, a) {
  if (!i || n._n)
    return n;
  const u = (...l) => {
    u._d && Da(-1);
    const d = Ao(i);
    let v;
    try {
      v = n(...l);
    } finally {
      Ao(d), u._d && Da(1);
    }
    return v;
  };
  return u._n = !0, u._c = !0, u._d = !0, u;
}
function Qr(n, i, a, u) {
  const l = n.dirs, d = i && i.dirs;
  for (let v = 0; v < l.length; v++) {
    const x = l[v];
    d && (x.oldValue = d[v].value);
    let D = x.dir[u];
    D && (ar(), Nn(D, a, 8, [
      n.el,
      x,
      n,
      i
    ]), ur());
  }
}
const Rl = Symbol("_vte"), kl = (n) => n.__isTeleport;
function aa(n, i) {
  n.shapeFlag & 6 && n.component ? (n.transition = i, aa(n.component.subTree, i)) : n.shapeFlag & 128 ? (n.ssContent.transition = i.clone(n.ssContent), n.ssFallback.transition = i.clone(n.ssFallback)) : n.transition = i;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function $u(n, i) {
  return qe(n) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Kt({ name: n.name }, i, { setup: n })
  ) : n;
}
function Vu(n) {
  n.ids = [n.ids[0] + n.ids[2]++ + "-", 0, 0];
}
function Ji(n, i, a, u, l = !1) {
  if (Ke(n)) {
    n.forEach(
      (de, he) => Ji(
        de,
        i && (Ke(i) ? i[he] : i),
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
  const d = u.shapeFlag & 4 ? pa(u.component) : u.el, v = l ? null : d, { i: x, r: D } = n, W = i && i.r, K = x.refs === ft ? x.refs = {} : x.refs, G = x.setupState, re = nt(G), se = G === ft ? () => !1 : (de) => rt(re, de);
  if (W != null && W !== D && (Pt(W) ? (K[W] = null, se(W) && (G[W] = null)) : Mt(W) && (W.value = null)), qe(D))
    uo(D, x, 12, [v, K]);
  else {
    const de = Pt(D), he = Mt(D);
    if (de || he) {
      const Ce = () => {
        if (n.f) {
          const ae = de ? se(D) ? G[D] : K[D] : D.value;
          l ? Ke(ae) && Ws(ae, d) : Ke(ae) ? ae.includes(d) || ae.push(d) : de ? (K[D] = [d], se(D) && (G[D] = K[D])) : (D.value = [d], n.k && (K[n.k] = D.value));
        } else de ? (K[D] = v, se(D) && (G[D] = v)) : he && (D.value = v, n.k && (K[n.k] = v));
      };
      v ? (Ce.id = -1, dn(Ce, a)) : Ce();
    }
  }
}
jo().requestIdleCallback;
jo().cancelIdleCallback;
const Zi = (n) => !!n.type.__asyncLoader, Uu = (n) => n.type.__isKeepAlive;
function Fl(n, i) {
  Gu(n, "a", i);
}
function jl(n, i) {
  Gu(n, "da", i);
}
function Gu(n, i, a = en) {
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
      Uu(l.parent.vnode) && Ll(u, i, a, l), l = l.parent;
  }
}
function Ll(n, i, a, u) {
  const l = Mo(
    i,
    n,
    u,
    !0
    /* prepend */
  );
  ua(() => {
    Ws(u[i], l);
  }, a);
}
function Mo(n, i, a = en, u = !1) {
  if (a) {
    const l = a[n] || (a[n] = []), d = i.__weh || (i.__weh = (...v) => {
      ar();
      const x = co(a), D = Nn(i, a, n, v);
      return x(), ur(), D;
    });
    return u ? l.unshift(d) : l.push(d), d;
  }
}
const cr = (n) => (i, a = en) => {
  (!so || n === "sp") && Mo(n, (...u) => i(...u), a);
}, Ml = cr("bm"), Po = cr("m"), Kl = cr(
  "bu"
), ql = cr("u"), Bl = cr(
  "bum"
), ua = cr("um"), $l = cr(
  "sp"
), Vl = cr("rtg"), Ul = cr("rtc");
function Gl(n, i = en) {
  Mo("ec", n, i);
}
const Hl = Symbol.for("v-ndc"), Ds = (n) => n ? pc(n) ? pa(n) : Ds(n.parent) : null, eo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Kt(/* @__PURE__ */ Object.create(null), {
    $: (n) => n,
    $el: (n) => n.vnode.el,
    $data: (n) => n.data,
    $props: (n) => n.props,
    $attrs: (n) => n.attrs,
    $slots: (n) => n.slots,
    $refs: (n) => n.refs,
    $parent: (n) => Ds(n.parent),
    $root: (n) => Ds(n.root),
    $host: (n) => n.ce,
    $emit: (n) => n.emit,
    $options: (n) => Wu(n),
    $forceUpdate: (n) => n.f || (n.f = () => {
      sa(n.update);
    }),
    $nextTick: (n) => n.n || (n.n = Il.bind(n.proxy)),
    $watch: (n) => yf.bind(n)
  })
), gs = (n, i) => n !== ft && !n.__isScriptSetup && rt(n, i), Wl = {
  get({ _: n }, i) {
    if (i === "__v_skip")
      return !0;
    const { ctx: a, setupState: u, data: l, props: d, accessCache: v, type: x, appContext: D } = n;
    let W;
    if (i[0] !== "$") {
      const se = v[i];
      if (se !== void 0)
        switch (se) {
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
          return v[i] = 1, u[i];
        if (l !== ft && rt(l, i))
          return v[i] = 2, l[i];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (W = n.propsOptions[0]) && rt(W, i)
        )
          return v[i] = 3, d[i];
        if (a !== ft && rt(a, i))
          return v[i] = 4, a[i];
        Ns && (v[i] = 0);
      }
    }
    const K = eo[i];
    let G, re;
    if (K)
      return i === "$attrs" && Lt(n.attrs, "get", ""), K(n);
    if (
      // css module (injected by vue-loader)
      (G = x.__cssModules) && (G = G[i])
    )
      return G;
    if (a !== ft && rt(a, i))
      return v[i] = 4, a[i];
    if (
      // global properties
      re = D.config.globalProperties, rt(re, i)
    )
      return re[i];
  },
  set({ _: n }, i, a) {
    const { data: u, setupState: l, ctx: d } = n;
    return gs(l, i) ? (l[i] = a, !0) : u !== ft && rt(u, i) ? (u[i] = a, !0) : rt(n.props, i) || i[0] === "$" && i.slice(1) in n ? !1 : (d[i] = a, !0);
  },
  has({
    _: { data: n, setupState: i, accessCache: a, ctx: u, appContext: l, propsOptions: d }
  }, v) {
    let x;
    return !!a[v] || n !== ft && rt(n, v) || gs(i, v) || (x = d[0]) && rt(x, v) || rt(u, v) || rt(eo, v) || rt(l.config.globalProperties, v);
  },
  defineProperty(n, i, a) {
    return a.get != null ? n._.accessCache[i] = 0 : rt(a, "value") && this.set(n, i, a.value, null), Reflect.defineProperty(n, i, a);
  }
};
function xa(n) {
  return Ke(n) ? n.reduce(
    (i, a) => (i[a] = null, i),
    {}
  ) : n;
}
let Ns = !0;
function Yl(n) {
  const i = Wu(n), a = n.proxy, u = n.ctx;
  Ns = !1, i.beforeCreate && Ea(i.beforeCreate, n, "bc");
  const {
    // state
    data: l,
    computed: d,
    methods: v,
    watch: x,
    provide: D,
    inject: W,
    // lifecycle
    created: K,
    beforeMount: G,
    mounted: re,
    beforeUpdate: se,
    updated: de,
    activated: he,
    deactivated: Ce,
    beforeDestroy: ae,
    beforeUnmount: ye,
    destroyed: ke,
    unmounted: pe,
    render: Fe,
    renderTracked: ie,
    renderTriggered: oe,
    errorCaptured: Ee,
    serverPrefetch: B,
    // public API
    expose: et,
    inheritAttrs: it,
    // assets
    components: Ne,
    directives: Ge,
    filters: At
  } = i;
  if (W && Ql(W, u, null), v)
    for (const be in v) {
      const Pe = v[be];
      qe(Pe) && (u[be] = Pe.bind(a));
    }
  if (l) {
    const be = l.call(a, a);
    St(be) && (n.data = ra(be));
  }
  if (Ns = !0, d)
    for (const be in d) {
      const Pe = d[be], tt = qe(Pe) ? Pe.bind(a, a) : qe(Pe.get) ? Pe.get.bind(a, a) : Dn, ze = !qe(Pe) && qe(Pe.set) ? Pe.set.bind(a) : Dn, at = Kf({
        get: tt,
        set: ze
      });
      Object.defineProperty(u, be, {
        enumerable: !0,
        configurable: !0,
        get: () => at.value,
        set: (ot) => at.value = ot
      });
    }
  if (x)
    for (const be in x)
      Hu(x[be], u, a, be);
  if (D) {
    const be = qe(D) ? D.call(a) : D;
    Reflect.ownKeys(be).forEach((Pe) => {
      tf(Pe, be[Pe]);
    });
  }
  K && Ea(K, n, "c");
  function Ue(be, Pe) {
    Ke(Pe) ? Pe.forEach((tt) => be(tt.bind(a))) : Pe && be(Pe.bind(a));
  }
  if (Ue(Ml, G), Ue(Po, re), Ue(Kl, se), Ue(ql, de), Ue(Fl, he), Ue(jl, Ce), Ue(Gl, Ee), Ue(Ul, ie), Ue(Vl, oe), Ue(Bl, ye), Ue(ua, pe), Ue($l, B), Ke(et))
    if (et.length) {
      const be = n.exposed || (n.exposed = {});
      et.forEach((Pe) => {
        Object.defineProperty(be, Pe, {
          get: () => a[Pe],
          set: (tt) => a[Pe] = tt
        });
      });
    } else n.exposed || (n.exposed = {});
  Fe && n.render === Dn && (n.render = Fe), it != null && (n.inheritAttrs = it), Ne && (n.components = Ne), Ge && (n.directives = Ge), B && Vu(n);
}
function Ql(n, i, a = Dn) {
  Ke(n) && (n = Rs(n));
  for (const u in n) {
    const l = n[u];
    let d;
    St(l) ? "default" in l ? d = bo(
      l.from || u,
      l.default,
      !0
    ) : d = bo(l.from || u) : d = bo(l), Mt(d) ? Object.defineProperty(i, u, {
      enumerable: !0,
      configurable: !0,
      get: () => d.value,
      set: (v) => d.value = v
    }) : i[u] = d;
  }
}
function Ea(n, i, a) {
  Nn(
    Ke(n) ? n.map((u) => u.bind(i.proxy)) : n.bind(i.proxy),
    i,
    a
  );
}
function Hu(n, i, a, u) {
  let l = u.includes(".") ? oc(a, u) : () => a[u];
  if (Pt(n)) {
    const d = i[n];
    qe(d) && wo(l, d);
  } else if (qe(n))
    wo(l, n.bind(a));
  else if (St(n))
    if (Ke(n))
      n.forEach((d) => Hu(d, i, a, u));
    else {
      const d = qe(n.handler) ? n.handler.bind(a) : i[n.handler];
      qe(d) && wo(l, d, n);
    }
}
function Wu(n) {
  const i = n.type, { mixins: a, extends: u } = i, {
    mixins: l,
    optionsCache: d,
    config: { optionMergeStrategies: v }
  } = n.appContext, x = d.get(i);
  let D;
  return x ? D = x : !l.length && !a && !u ? D = i : (D = {}, l.length && l.forEach(
    (W) => Io(D, W, v, !0)
  ), Io(D, i, v)), St(i) && d.set(i, D), D;
}
function Io(n, i, a, u = !1) {
  const { mixins: l, extends: d } = i;
  d && Io(n, d, a, !0), l && l.forEach(
    (v) => Io(n, v, a, !0)
  );
  for (const v in i)
    if (!(u && v === "expose")) {
      const x = Xl[v] || a && a[v];
      n[v] = x ? x(n[v], i[v]) : i[v];
    }
  return n;
}
const Xl = {
  data: Ta,
  props: Ca,
  emits: Ca,
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
  watch: Jl,
  // provide / inject
  provide: Ta,
  inject: zl
};
function Ta(n, i) {
  return i ? n ? function() {
    return Kt(
      qe(n) ? n.call(this, this) : n,
      qe(i) ? i.call(this, this) : i
    );
  } : i : n;
}
function zl(n, i) {
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
  return n ? Kt(/* @__PURE__ */ Object.create(null), n, i) : i;
}
function Ca(n, i) {
  return n ? Ke(n) && Ke(i) ? [.../* @__PURE__ */ new Set([...n, ...i])] : Kt(
    /* @__PURE__ */ Object.create(null),
    xa(n),
    xa(i ?? {})
  ) : i;
}
function Jl(n, i) {
  if (!n) return i;
  if (!i) return n;
  const a = Kt(/* @__PURE__ */ Object.create(null), n);
  for (const u in i)
    a[u] = Xt(n[u], i[u]);
  return a;
}
function Yu() {
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
let Zl = 0;
function ef(n, i) {
  return function(u, l = null) {
    qe(u) || (u = Kt({}, u)), l != null && !St(l) && (l = null);
    const d = Yu(), v = /* @__PURE__ */ new WeakSet(), x = [];
    let D = !1;
    const W = d.app = {
      _uid: Zl++,
      _component: u,
      _props: l,
      _container: null,
      _context: d,
      _instance: null,
      version: qf,
      get config() {
        return d.config;
      },
      set config(K) {
      },
      use(K, ...G) {
        return v.has(K) || (K && qe(K.install) ? (v.add(K), K.install(W, ...G)) : qe(K) && (v.add(K), K(W, ...G))), W;
      },
      mixin(K) {
        return d.mixins.includes(K) || d.mixins.push(K), W;
      },
      component(K, G) {
        return G ? (d.components[K] = G, W) : d.components[K];
      },
      directive(K, G) {
        return G ? (d.directives[K] = G, W) : d.directives[K];
      },
      mount(K, G, re) {
        if (!D) {
          const se = W._ceVNode || yr(u, l);
          return se.appContext = d, re === !0 ? re = "svg" : re === !1 && (re = void 0), n(se, K, re), D = !0, W._container = K, K.__vue_app__ = W, pa(se.component);
        }
      },
      onUnmount(K) {
        x.push(K);
      },
      unmount() {
        D && (Nn(
          x,
          W._instance,
          16
        ), n(null, W._container), delete W._container.__vue_app__);
      },
      provide(K, G) {
        return d.provides[K] = G, W;
      },
      runWithContext(K) {
        const G = si;
        si = W;
        try {
          return K();
        } finally {
          si = G;
        }
      }
    };
    return W;
  };
}
let si = null;
function tf(n, i) {
  if (en) {
    let a = en.provides;
    const u = en.parent && en.parent.provides;
    u === a && (a = en.provides = Object.create(u)), a[n] = i;
  }
}
function bo(n, i, a = !1) {
  const u = en || On;
  if (u || si) {
    let l = si ? si._context.provides : u ? u.parent == null || u.ce ? u.vnode.appContext && u.vnode.appContext.provides : u.parent.provides : void 0;
    if (l && n in l)
      return l[n];
    if (arguments.length > 1)
      return a && qe(i) ? i.call(u && u.proxy) : i;
  }
}
const Qu = {}, Xu = () => Object.create(Qu), zu = (n) => Object.getPrototypeOf(n) === Qu;
function nf(n, i, a, u = !1) {
  const l = {}, d = Xu();
  n.propsDefaults = /* @__PURE__ */ Object.create(null), Ju(n, i, l, d);
  for (const v in n.propsOptions[0])
    v in l || (l[v] = void 0);
  a ? n.props = u ? l : bl(l) : n.type.props ? n.props = l : n.props = d, n.attrs = d;
}
function rf(n, i, a, u) {
  const {
    props: l,
    attrs: d,
    vnode: { patchFlag: v }
  } = n, x = nt(l), [D] = n.propsOptions;
  let W = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (u || v > 0) && !(v & 16)
  ) {
    if (v & 8) {
      const K = n.vnode.dynamicProps;
      for (let G = 0; G < K.length; G++) {
        let re = K[G];
        if (Ko(n.emitsOptions, re))
          continue;
        const se = i[re];
        if (D)
          if (rt(d, re))
            se !== d[re] && (d[re] = se, W = !0);
          else {
            const de = vr(re);
            l[de] = ks(
              D,
              x,
              de,
              se,
              n,
              !1
            );
          }
        else
          se !== d[re] && (d[re] = se, W = !0);
      }
    }
  } else {
    Ju(n, i, l, d) && (W = !0);
    let K;
    for (const G in x)
      (!i || // for camelCase
      !rt(i, G) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((K = ti(G)) === G || !rt(i, K))) && (D ? a && // for camelCase
      (a[G] !== void 0 || // for kebab-case
      a[K] !== void 0) && (l[G] = ks(
        D,
        x,
        G,
        void 0,
        n,
        !0
      )) : delete l[G]);
    if (d !== x)
      for (const G in d)
        (!i || !rt(i, G)) && (delete d[G], W = !0);
  }
  W && sr(n.attrs, "set", "");
}
function Ju(n, i, a, u) {
  const [l, d] = n.propsOptions;
  let v = !1, x;
  if (i)
    for (let D in i) {
      if (Wi(D))
        continue;
      const W = i[D];
      let K;
      l && rt(l, K = vr(D)) ? !d || !d.includes(K) ? a[K] = W : (x || (x = {}))[K] = W : Ko(n.emitsOptions, D) || (!(D in u) || W !== u[D]) && (u[D] = W, v = !0);
    }
  if (d) {
    const D = nt(a), W = x || ft;
    for (let K = 0; K < d.length; K++) {
      const G = d[K];
      a[G] = ks(
        l,
        D,
        G,
        W[G],
        n,
        !rt(W, G)
      );
    }
  }
  return v;
}
function ks(n, i, a, u, l, d) {
  const v = n[a];
  if (v != null) {
    const x = rt(v, "default");
    if (x && u === void 0) {
      const D = v.default;
      if (v.type !== Function && !v.skipFactory && qe(D)) {
        const { propsDefaults: W } = l;
        if (a in W)
          u = W[a];
        else {
          const K = co(l);
          u = W[a] = D.call(
            null,
            i
          ), K();
        }
      } else
        u = D;
      l.ce && l.ce._setProp(a, u);
    }
    v[
      0
      /* shouldCast */
    ] && (d && !x ? u = !1 : v[
      1
      /* shouldCastTrue */
    ] && (u === "" || u === ti(a)) && (u = !0));
  }
  return u;
}
const of = /* @__PURE__ */ new WeakMap();
function Zu(n, i, a = !1) {
  const u = a ? of : i.propsCache, l = u.get(n);
  if (l)
    return l;
  const d = n.props, v = {}, x = [];
  let D = !1;
  if (!qe(n)) {
    const K = (G) => {
      D = !0;
      const [re, se] = Zu(G, i, !0);
      Kt(v, re), se && x.push(...se);
    };
    !a && i.mixins.length && i.mixins.forEach(K), n.extends && K(n.extends), n.mixins && n.mixins.forEach(K);
  }
  if (!d && !D)
    return St(n) && u.set(n, ii), ii;
  if (Ke(d))
    for (let K = 0; K < d.length; K++) {
      const G = vr(d[K]);
      Aa(G) && (v[G] = ft);
    }
  else if (d)
    for (const K in d) {
      const G = vr(K);
      if (Aa(G)) {
        const re = d[K], se = v[G] = Ke(re) || qe(re) ? { type: re } : Kt({}, re), de = se.type;
        let he = !1, Ce = !0;
        if (Ke(de))
          for (let ae = 0; ae < de.length; ++ae) {
            const ye = de[ae], ke = qe(ye) && ye.name;
            if (ke === "Boolean") {
              he = !0;
              break;
            } else ke === "String" && (Ce = !1);
          }
        else
          he = qe(de) && de.name === "Boolean";
        se[
          0
          /* shouldCast */
        ] = he, se[
          1
          /* shouldCastTrue */
        ] = Ce, (he || rt(se, "default")) && x.push(G);
      }
    }
  const W = [v, x];
  return St(n) && u.set(n, W), W;
}
function Aa(n) {
  return n[0] !== "$" && !Wi(n);
}
const ca = (n) => n[0] === "_" || n === "$stable", la = (n) => Ke(n) ? n.map(In) : [In(n)], sf = (n, i, a) => {
  if (i._n)
    return i;
  const u = Nl((...l) => la(i(...l)), a);
  return u._c = !1, u;
}, ec = (n, i, a) => {
  const u = n._ctx;
  for (const l in n) {
    if (ca(l)) continue;
    const d = n[l];
    if (qe(d))
      i[l] = sf(l, d, u);
    else if (d != null) {
      const v = la(d);
      i[l] = () => v;
    }
  }
}, tc = (n, i) => {
  const a = la(i);
  n.slots.default = () => a;
}, nc = (n, i, a) => {
  for (const u in i)
    (a || !ca(u)) && (n[u] = i[u]);
}, af = (n, i, a) => {
  const u = n.slots = Xu();
  if (n.vnode.shapeFlag & 32) {
    const l = i.__;
    l && Ts(u, "__", l, !0);
    const d = i._;
    d ? (nc(u, i, a), a && Ts(u, "_", d, !0)) : ec(i, u);
  } else i && tc(n, i);
}, uf = (n, i, a) => {
  const { vnode: u, slots: l } = n;
  let d = !0, v = ft;
  if (u.shapeFlag & 32) {
    const x = i._;
    x ? a && x === 1 ? d = !1 : nc(l, i, a) : (d = !i.$stable, ec(i, l)), v = i;
  } else i && (tc(n, i), v = { default: 1 });
  if (d)
    for (const x in l)
      !ca(x) && v[x] == null && delete l[x];
}, dn = xf;
function cf(n) {
  return lf(n);
}
function lf(n, i) {
  const a = jo();
  a.__VUE__ = !0;
  const {
    insert: u,
    remove: l,
    patchProp: d,
    createElement: v,
    createText: x,
    createComment: D,
    setText: W,
    setElementText: K,
    parentNode: G,
    nextSibling: re,
    setScopeId: se = Dn,
    insertStaticContent: de
  } = n, he = (A, L, Z, I = null, k = null, j = null, V = void 0, M = null, te = !!L.dynamicChildren) => {
    if (A === L)
      return;
    A && !Ui(A, L) && (I = P(A), ot(A, k, j, !0), A = null), L.patchFlag === -2 && (te = !1, L.dynamicChildren = null);
    const { type: Q, ref: me, shapeFlag: ce } = L;
    switch (Q) {
      case qo:
        Ce(A, L, Z, I);
        break;
      case ai:
        ae(A, L, Z, I);
        break;
      case ws:
        A == null && ye(L, Z, I, V);
        break;
      case or:
        Ne(
          A,
          L,
          Z,
          I,
          k,
          j,
          V,
          M,
          te
        );
        break;
      default:
        ce & 1 ? Fe(
          A,
          L,
          Z,
          I,
          k,
          j,
          V,
          M,
          te
        ) : ce & 6 ? Ge(
          A,
          L,
          Z,
          I,
          k,
          j,
          V,
          M,
          te
        ) : (ce & 64 || ce & 128) && Q.process(
          A,
          L,
          Z,
          I,
          k,
          j,
          V,
          M,
          te,
          $
        );
    }
    me != null && k ? Ji(me, A && A.ref, j, L || A, !L) : me == null && A && A.ref != null && Ji(A.ref, null, j, A, !0);
  }, Ce = (A, L, Z, I) => {
    if (A == null)
      u(
        L.el = x(L.children),
        Z,
        I
      );
    else {
      const k = L.el = A.el;
      L.children !== A.children && W(k, L.children);
    }
  }, ae = (A, L, Z, I) => {
    A == null ? u(
      L.el = D(L.children || ""),
      Z,
      I
    ) : L.el = A.el;
  }, ye = (A, L, Z, I) => {
    [A.el, A.anchor] = de(
      A.children,
      L,
      Z,
      I,
      A.el,
      A.anchor
    );
  }, ke = ({ el: A, anchor: L }, Z, I) => {
    let k;
    for (; A && A !== L; )
      k = re(A), u(A, Z, I), A = k;
    u(L, Z, I);
  }, pe = ({ el: A, anchor: L }) => {
    let Z;
    for (; A && A !== L; )
      Z = re(A), l(A), A = Z;
    l(L);
  }, Fe = (A, L, Z, I, k, j, V, M, te) => {
    L.type === "svg" ? V = "svg" : L.type === "math" && (V = "mathml"), A == null ? ie(
      L,
      Z,
      I,
      k,
      j,
      V,
      M,
      te
    ) : B(
      A,
      L,
      k,
      j,
      V,
      M,
      te
    );
  }, ie = (A, L, Z, I, k, j, V, M) => {
    let te, Q;
    const { props: me, shapeFlag: ce, transition: xe, dirs: Te } = A;
    if (te = A.el = v(
      A.type,
      j,
      me && me.is,
      me
    ), ce & 8 ? K(te, A.children) : ce & 16 && Ee(
      A.children,
      te,
      null,
      I,
      k,
      bs(A, j),
      V,
      M
    ), Te && Qr(A, null, I, "created"), oe(te, A, A.scopeId, V, I), me) {
      for (const Me in me)
        Me !== "value" && !Wi(Me) && d(te, Me, null, me[Me], j, I);
      "value" in me && d(te, "value", null, me.value, j), (Q = me.onVnodeBeforeMount) && An(Q, I, A);
    }
    Te && Qr(A, null, I, "beforeMount");
    const Ie = ff(k, xe);
    Ie && xe.beforeEnter(te), u(te, L, Z), ((Q = me && me.onVnodeMounted) || Ie || Te) && dn(() => {
      Q && An(Q, I, A), Ie && xe.enter(te), Te && Qr(A, null, I, "mounted");
    }, k);
  }, oe = (A, L, Z, I, k) => {
    if (Z && se(A, Z), I)
      for (let j = 0; j < I.length; j++)
        se(A, I[j]);
    if (k) {
      let j = k.subTree;
      if (L === j || ac(j.type) && (j.ssContent === L || j.ssFallback === L)) {
        const V = k.vnode;
        oe(
          A,
          V,
          V.scopeId,
          V.slotScopeIds,
          k.parent
        );
      }
    }
  }, Ee = (A, L, Z, I, k, j, V, M, te = 0) => {
    for (let Q = te; Q < A.length; Q++) {
      const me = A[Q] = M ? fr(A[Q]) : In(A[Q]);
      he(
        null,
        me,
        L,
        Z,
        I,
        k,
        j,
        V,
        M
      );
    }
  }, B = (A, L, Z, I, k, j, V) => {
    const M = L.el = A.el;
    let { patchFlag: te, dynamicChildren: Q, dirs: me } = L;
    te |= A.patchFlag & 16;
    const ce = A.props || ft, xe = L.props || ft;
    let Te;
    if (Z && Xr(Z, !1), (Te = xe.onVnodeBeforeUpdate) && An(Te, Z, L, A), me && Qr(L, A, Z, "beforeUpdate"), Z && Xr(Z, !0), (ce.innerHTML && xe.innerHTML == null || ce.textContent && xe.textContent == null) && K(M, ""), Q ? et(
      A.dynamicChildren,
      Q,
      M,
      Z,
      I,
      bs(L, k),
      j
    ) : V || Pe(
      A,
      L,
      M,
      null,
      Z,
      I,
      bs(L, k),
      j,
      !1
    ), te > 0) {
      if (te & 16)
        it(M, ce, xe, Z, k);
      else if (te & 2 && ce.class !== xe.class && d(M, "class", null, xe.class, k), te & 4 && d(M, "style", ce.style, xe.style, k), te & 8) {
        const Ie = L.dynamicProps;
        for (let Me = 0; Me < Ie.length; Me++) {
          const Be = Ie[Me], ut = ce[Be], mt = xe[Be];
          (mt !== ut || Be === "value") && d(M, Be, ut, mt, k, Z);
        }
      }
      te & 1 && A.children !== L.children && K(M, L.children);
    } else !V && Q == null && it(M, ce, xe, Z, k);
    ((Te = xe.onVnodeUpdated) || me) && dn(() => {
      Te && An(Te, Z, L, A), me && Qr(L, A, Z, "updated");
    }, I);
  }, et = (A, L, Z, I, k, j, V) => {
    for (let M = 0; M < L.length; M++) {
      const te = A[M], Q = L[M], me = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        te.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (te.type === or || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ui(te, Q) || // - In the case of a component, it could contain anything.
        te.shapeFlag & 198) ? G(te.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Z
        )
      );
      he(
        te,
        Q,
        me,
        null,
        I,
        k,
        j,
        V,
        !0
      );
    }
  }, it = (A, L, Z, I, k) => {
    if (L !== Z) {
      if (L !== ft)
        for (const j in L)
          !Wi(j) && !(j in Z) && d(
            A,
            j,
            L[j],
            null,
            k,
            I
          );
      for (const j in Z) {
        if (Wi(j)) continue;
        const V = Z[j], M = L[j];
        V !== M && j !== "value" && d(A, j, M, V, k, I);
      }
      "value" in Z && d(A, "value", L.value, Z.value, k);
    }
  }, Ne = (A, L, Z, I, k, j, V, M, te) => {
    const Q = L.el = A ? A.el : x(""), me = L.anchor = A ? A.anchor : x("");
    let { patchFlag: ce, dynamicChildren: xe, slotScopeIds: Te } = L;
    Te && (M = M ? M.concat(Te) : Te), A == null ? (u(Q, Z, I), u(me, Z, I), Ee(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      L.children || [],
      Z,
      me,
      k,
      j,
      V,
      M,
      te
    )) : ce > 0 && ce & 64 && xe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    A.dynamicChildren ? (et(
      A.dynamicChildren,
      xe,
      Z,
      k,
      j,
      V,
      M
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (L.key != null || k && L === k.subTree) && rc(
      A,
      L,
      !0
      /* shallow */
    )) : Pe(
      A,
      L,
      Z,
      me,
      k,
      j,
      V,
      M,
      te
    );
  }, Ge = (A, L, Z, I, k, j, V, M, te) => {
    L.slotScopeIds = M, A == null ? L.shapeFlag & 512 ? k.ctx.activate(
      L,
      Z,
      I,
      V,
      te
    ) : At(
      L,
      Z,
      I,
      k,
      j,
      V,
      te
    ) : wt(A, L, te);
  }, At = (A, L, Z, I, k, j, V) => {
    const M = A.component = Rf(
      A,
      I,
      k
    );
    if (Uu(A) && (M.ctx.renderer = $), kf(M, !1, V), M.asyncDep) {
      if (k && k.registerDep(M, Ue, V), !A.el) {
        const te = M.subTree = yr(ai);
        ae(null, te, L, Z);
      }
    } else
      Ue(
        M,
        A,
        L,
        Z,
        k,
        j,
        V
      );
  }, wt = (A, L, Z) => {
    const I = L.component = A.component;
    if (_f(A, L, Z))
      if (I.asyncDep && !I.asyncResolved) {
        be(I, L, Z);
        return;
      } else
        I.next = L, I.update();
    else
      L.el = A.el, I.vnode = L;
  }, Ue = (A, L, Z, I, k, j, V) => {
    const M = () => {
      if (A.isMounted) {
        let { next: ce, bu: xe, u: Te, parent: Ie, vnode: Me } = A;
        {
          const ct = ic(A);
          if (ct) {
            ce && (ce.el = Me.el, be(A, ce, V)), ct.asyncDep.then(() => {
              A.isUnmounted || M();
            });
            return;
          }
        }
        let Be = ce, ut;
        Xr(A, !1), ce ? (ce.el = Me.el, be(A, ce, V)) : ce = Me, xe && hs(xe), (ut = ce.props && ce.props.onVnodeBeforeUpdate) && An(ut, Ie, ce, Me), Xr(A, !0);
        const mt = Ia(A), _t = A.subTree;
        A.subTree = mt, he(
          _t,
          mt,
          // parent may have changed if it's in a teleport
          G(_t.el),
          // anchor may have changed if it's in a fragment
          P(_t),
          A,
          k,
          j
        ), ce.el = mt.el, Be === null && Sf(A, mt.el), Te && dn(Te, k), (ut = ce.props && ce.props.onVnodeUpdated) && dn(
          () => An(ut, Ie, ce, Me),
          k
        );
      } else {
        let ce;
        const { el: xe, props: Te } = L, { bm: Ie, m: Me, parent: Be, root: ut, type: mt } = A, _t = Zi(L);
        Xr(A, !1), Ie && hs(Ie), !_t && (ce = Te && Te.onVnodeBeforeMount) && An(ce, Be, L), Xr(A, !0);
        {
          ut.ce && // @ts-expect-error _def is private
          ut.ce._def.shadowRoot !== !1 && ut.ce._injectChildStyle(mt);
          const ct = A.subTree = Ia(A);
          he(
            null,
            ct,
            Z,
            I,
            A,
            k,
            j
          ), L.el = ct.el;
        }
        if (Me && dn(Me, k), !_t && (ce = Te && Te.onVnodeMounted)) {
          const ct = L;
          dn(
            () => An(ce, Be, ct),
            k
          );
        }
        (L.shapeFlag & 256 || Be && Zi(Be.vnode) && Be.vnode.shapeFlag & 256) && A.a && dn(A.a, k), A.isMounted = !0, L = Z = I = null;
      }
    };
    A.scope.on();
    const te = A.effect = new wu(M);
    A.scope.off();
    const Q = A.update = te.run.bind(te), me = A.job = te.runIfDirty.bind(te);
    me.i = A, me.id = A.uid, te.scheduler = () => sa(me), Xr(A, !0), Q();
  }, be = (A, L, Z) => {
    L.component = A;
    const I = A.vnode.props;
    A.vnode = L, A.next = null, rf(A, L.props, I, Z), uf(A, L.children, Z), ar(), Sa(A), ur();
  }, Pe = (A, L, Z, I, k, j, V, M, te = !1) => {
    const Q = A && A.children, me = A ? A.shapeFlag : 0, ce = L.children, { patchFlag: xe, shapeFlag: Te } = L;
    if (xe > 0) {
      if (xe & 128) {
        ze(
          Q,
          ce,
          Z,
          I,
          k,
          j,
          V,
          M,
          te
        );
        return;
      } else if (xe & 256) {
        tt(
          Q,
          ce,
          Z,
          I,
          k,
          j,
          V,
          M,
          te
        );
        return;
      }
    }
    Te & 8 ? (me & 16 && pt(Q, k, j), ce !== Q && K(Z, ce)) : me & 16 ? Te & 16 ? ze(
      Q,
      ce,
      Z,
      I,
      k,
      j,
      V,
      M,
      te
    ) : pt(Q, k, j, !0) : (me & 8 && K(Z, ""), Te & 16 && Ee(
      ce,
      Z,
      I,
      k,
      j,
      V,
      M,
      te
    ));
  }, tt = (A, L, Z, I, k, j, V, M, te) => {
    A = A || ii, L = L || ii;
    const Q = A.length, me = L.length, ce = Math.min(Q, me);
    let xe;
    for (xe = 0; xe < ce; xe++) {
      const Te = L[xe] = te ? fr(L[xe]) : In(L[xe]);
      he(
        A[xe],
        Te,
        Z,
        null,
        k,
        j,
        V,
        M,
        te
      );
    }
    Q > me ? pt(
      A,
      k,
      j,
      !0,
      !1,
      ce
    ) : Ee(
      L,
      Z,
      I,
      k,
      j,
      V,
      M,
      te,
      ce
    );
  }, ze = (A, L, Z, I, k, j, V, M, te) => {
    let Q = 0;
    const me = L.length;
    let ce = A.length - 1, xe = me - 1;
    for (; Q <= ce && Q <= xe; ) {
      const Te = A[Q], Ie = L[Q] = te ? fr(L[Q]) : In(L[Q]);
      if (Ui(Te, Ie))
        he(
          Te,
          Ie,
          Z,
          null,
          k,
          j,
          V,
          M,
          te
        );
      else
        break;
      Q++;
    }
    for (; Q <= ce && Q <= xe; ) {
      const Te = A[ce], Ie = L[xe] = te ? fr(L[xe]) : In(L[xe]);
      if (Ui(Te, Ie))
        he(
          Te,
          Ie,
          Z,
          null,
          k,
          j,
          V,
          M,
          te
        );
      else
        break;
      ce--, xe--;
    }
    if (Q > ce) {
      if (Q <= xe) {
        const Te = xe + 1, Ie = Te < me ? L[Te].el : I;
        for (; Q <= xe; )
          he(
            null,
            L[Q] = te ? fr(L[Q]) : In(L[Q]),
            Z,
            Ie,
            k,
            j,
            V,
            M,
            te
          ), Q++;
      }
    } else if (Q > xe)
      for (; Q <= ce; )
        ot(A[Q], k, j, !0), Q++;
    else {
      const Te = Q, Ie = Q, Me = /* @__PURE__ */ new Map();
      for (Q = Ie; Q <= xe; Q++) {
        const Je = L[Q] = te ? fr(L[Q]) : In(L[Q]);
        Je.key != null && Me.set(Je.key, Q);
      }
      let Be, ut = 0;
      const mt = xe - Ie + 1;
      let _t = !1, ct = 0;
      const $t = new Array(mt);
      for (Q = 0; Q < mt; Q++) $t[Q] = 0;
      for (Q = Te; Q <= ce; Q++) {
        const Je = A[Q];
        if (ut >= mt) {
          ot(Je, k, j, !0);
          continue;
        }
        let ne;
        if (Je.key != null)
          ne = Me.get(Je.key);
        else
          for (Be = Ie; Be <= xe; Be++)
            if ($t[Be - Ie] === 0 && Ui(Je, L[Be])) {
              ne = Be;
              break;
            }
        ne === void 0 ? ot(Je, k, j, !0) : ($t[ne - Ie] = Q + 1, ne >= ct ? ct = ne : _t = !0, he(
          Je,
          L[ne],
          Z,
          null,
          k,
          j,
          V,
          M,
          te
        ), ut++);
      }
      const Cn = _t ? df($t) : ii;
      for (Be = Cn.length - 1, Q = mt - 1; Q >= 0; Q--) {
        const Je = Ie + Q, ne = L[Je], tn = Je + 1 < me ? L[Je + 1].el : I;
        $t[Q] === 0 ? he(
          null,
          ne,
          Z,
          tn,
          k,
          j,
          V,
          M,
          te
        ) : _t && (Be < 0 || Q !== Cn[Be] ? at(ne, Z, tn, 2) : Be--);
      }
    }
  }, at = (A, L, Z, I, k = null) => {
    const { el: j, type: V, transition: M, children: te, shapeFlag: Q } = A;
    if (Q & 6) {
      at(A.component.subTree, L, Z, I);
      return;
    }
    if (Q & 128) {
      A.suspense.move(L, Z, I);
      return;
    }
    if (Q & 64) {
      V.move(A, L, Z, $);
      return;
    }
    if (V === or) {
      u(j, L, Z);
      for (let ce = 0; ce < te.length; ce++)
        at(te[ce], L, Z, I);
      u(A.anchor, L, Z);
      return;
    }
    if (V === ws) {
      ke(A, L, Z);
      return;
    }
    if (I !== 2 && Q & 1 && M)
      if (I === 0)
        M.beforeEnter(j), u(j, L, Z), dn(() => M.enter(j), k);
      else {
        const { leave: ce, delayLeave: xe, afterLeave: Te } = M, Ie = () => {
          A.ctx.isUnmounted ? l(j) : u(j, L, Z);
        }, Me = () => {
          ce(j, () => {
            Ie(), Te && Te();
          });
        };
        xe ? xe(j, Ie, Me) : Me();
      }
    else
      u(j, L, Z);
  }, ot = (A, L, Z, I = !1, k = !1) => {
    const {
      type: j,
      props: V,
      ref: M,
      children: te,
      dynamicChildren: Q,
      shapeFlag: me,
      patchFlag: ce,
      dirs: xe,
      cacheIndex: Te
    } = A;
    if (ce === -2 && (k = !1), M != null && (ar(), Ji(M, null, Z, A, !0), ur()), Te != null && (L.renderCache[Te] = void 0), me & 256) {
      L.ctx.deactivate(A);
      return;
    }
    const Ie = me & 1 && xe, Me = !Zi(A);
    let Be;
    if (Me && (Be = V && V.onVnodeBeforeUnmount) && An(Be, L, A), me & 6)
      It(A.component, Z, I);
    else {
      if (me & 128) {
        A.suspense.unmount(Z, I);
        return;
      }
      Ie && Qr(A, null, L, "beforeUnmount"), me & 64 ? A.type.remove(
        A,
        L,
        Z,
        $,
        I
      ) : Q && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Q.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (j !== or || ce > 0 && ce & 64) ? pt(
        Q,
        L,
        Z,
        !1,
        !0
      ) : (j === or && ce & 384 || !k && me & 16) && pt(te, L, Z), I && ht(A);
    }
    (Me && (Be = V && V.onVnodeUnmounted) || Ie) && dn(() => {
      Be && An(Be, L, A), Ie && Qr(A, null, L, "unmounted");
    }, Z);
  }, ht = (A) => {
    const { type: L, el: Z, anchor: I, transition: k } = A;
    if (L === or) {
      rn(Z, I);
      return;
    }
    if (L === ws) {
      pe(A);
      return;
    }
    const j = () => {
      l(Z), k && !k.persisted && k.afterLeave && k.afterLeave();
    };
    if (A.shapeFlag & 1 && k && !k.persisted) {
      const { leave: V, delayLeave: M } = k, te = () => V(Z, j);
      M ? M(A.el, j, te) : te();
    } else
      j();
  }, rn = (A, L) => {
    let Z;
    for (; A !== L; )
      Z = re(A), l(A), A = Z;
    l(L);
  }, It = (A, L, Z) => {
    const {
      bum: I,
      scope: k,
      job: j,
      subTree: V,
      um: M,
      m: te,
      a: Q,
      parent: me,
      slots: { __: ce }
    } = A;
    Pa(te), Pa(Q), I && hs(I), me && Ke(ce) && ce.forEach((xe) => {
      me.renderCache[xe] = void 0;
    }), k.stop(), j && (j.flags |= 8, ot(V, A, L, Z)), M && dn(M, L), dn(() => {
      A.isUnmounted = !0;
    }, L), L && L.pendingBranch && !L.isUnmounted && A.asyncDep && !A.asyncResolved && A.suspenseId === L.pendingId && (L.deps--, L.deps === 0 && L.resolve());
  }, pt = (A, L, Z, I = !1, k = !1, j = 0) => {
    for (let V = j; V < A.length; V++)
      ot(A[V], L, Z, I, k);
  }, P = (A) => {
    if (A.shapeFlag & 6)
      return P(A.component.subTree);
    if (A.shapeFlag & 128)
      return A.suspense.next();
    const L = re(A.anchor || A.el), Z = L && L[Rl];
    return Z ? re(Z) : L;
  };
  let w = !1;
  const F = (A, L, Z) => {
    A == null ? L._vnode && ot(L._vnode, null, null, !0) : he(
      L._vnode || null,
      A,
      L,
      null,
      null,
      null,
      Z
    ), L._vnode = A, w || (w = !0, Sa(), Ku(), w = !1);
  }, $ = {
    p: he,
    um: ot,
    m: at,
    r: ht,
    mt: At,
    mc: Ee,
    pc: Pe,
    pbc: et,
    n: P,
    o: n
  };
  return {
    render: F,
    hydrate: void 0,
    createApp: ef(F)
  };
}
function bs({ type: n, props: i }, a) {
  return a === "svg" && n === "foreignObject" || a === "mathml" && n === "annotation-xml" && i && i.encoding && i.encoding.includes("html") ? void 0 : a;
}
function Xr({ effect: n, job: i }, a) {
  a ? (n.flags |= 32, i.flags |= 4) : (n.flags &= -33, i.flags &= -5);
}
function ff(n, i) {
  return (!n || n && !n.pendingBranch) && i && !i.persisted;
}
function rc(n, i, a = !1) {
  const u = n.children, l = i.children;
  if (Ke(u) && Ke(l))
    for (let d = 0; d < u.length; d++) {
      const v = u[d];
      let x = l[d];
      x.shapeFlag & 1 && !x.dynamicChildren && ((x.patchFlag <= 0 || x.patchFlag === 32) && (x = l[d] = fr(l[d]), x.el = v.el), !a && x.patchFlag !== -2 && rc(v, x)), x.type === qo && (x.el = v.el), x.type === ai && !x.el && (x.el = v.el);
    }
}
function df(n) {
  const i = n.slice(), a = [0];
  let u, l, d, v, x;
  const D = n.length;
  for (u = 0; u < D; u++) {
    const W = n[u];
    if (W !== 0) {
      if (l = a[a.length - 1], n[l] < W) {
        i[u] = l, a.push(u);
        continue;
      }
      for (d = 0, v = a.length - 1; d < v; )
        x = d + v >> 1, n[a[x]] < W ? d = x + 1 : v = x;
      W < n[a[d]] && (d > 0 && (i[u] = a[d - 1]), a[d] = u);
    }
  }
  for (d = a.length, v = a[d - 1]; d-- > 0; )
    a[d] = v, v = i[v];
  return a;
}
function ic(n) {
  const i = n.subTree.component;
  if (i)
    return i.asyncDep && !i.asyncResolved ? i : ic(i);
}
function Pa(n) {
  if (n)
    for (let i = 0; i < n.length; i++)
      n[i].flags |= 8;
}
const pf = Symbol.for("v-scx"), hf = () => bo(pf);
function mf(n, i) {
  return fa(n, null, i);
}
function wo(n, i, a) {
  return fa(n, i, a);
}
function fa(n, i, a = ft) {
  const { immediate: u, deep: l, flush: d, once: v } = a, x = Kt({}, a), D = i && u || !i && d !== "post";
  let W;
  if (so) {
    if (d === "sync") {
      const se = hf();
      W = se.__watcherHandles || (se.__watcherHandles = []);
    } else if (!D) {
      const se = () => {
      };
      return se.stop = Dn, se.resume = Dn, se.pause = Dn, se;
    }
  }
  const K = en;
  x.call = (se, de, he) => Nn(se, K, de, he);
  let G = !1;
  d === "post" ? x.scheduler = (se) => {
    dn(se, K && K.suspense);
  } : d !== "sync" && (G = !0, x.scheduler = (se, de) => {
    de ? se() : sa(se);
  }), x.augmentJob = (se) => {
    i && (se.flags |= 4), G && (se.flags |= 2, K && (se.id = K.uid, se.i = K));
  };
  const re = Al(n, i, x);
  return so && (W ? W.push(re) : D && re()), re;
}
function yf(n, i, a) {
  const u = this.proxy, l = Pt(n) ? n.includes(".") ? oc(u, n) : () => u[n] : n.bind(u, u);
  let d;
  qe(i) ? d = i : (d = i.handler, a = i);
  const v = co(this), x = fa(l, d.bind(u), a);
  return v(), x;
}
function oc(n, i) {
  const a = i.split(".");
  return () => {
    let u = n;
    for (let l = 0; l < a.length && u; l++)
      u = u[a[l]];
    return u;
  };
}
const vf = (n, i) => i === "modelValue" || i === "model-value" ? n.modelModifiers : n[`${i}Modifiers`] || n[`${vr(i)}Modifiers`] || n[`${ti(i)}Modifiers`];
function gf(n, i, ...a) {
  if (n.isUnmounted) return;
  const u = n.vnode.props || ft;
  let l = a;
  const d = i.startsWith("update:"), v = d && vf(u, i.slice(7));
  v && (v.trim && (l = a.map((K) => Pt(K) ? K.trim() : K)), v.number && (l = a.map(Hc)));
  let x, D = u[x = ps(i)] || // also try camelCase event handler (#2249)
  u[x = ps(vr(i))];
  !D && d && (D = u[x = ps(ti(i))]), D && Nn(
    D,
    n,
    6,
    l
  );
  const W = u[x + "Once"];
  if (W) {
    if (!n.emitted)
      n.emitted = {};
    else if (n.emitted[x])
      return;
    n.emitted[x] = !0, Nn(
      W,
      n,
      6,
      l
    );
  }
}
function sc(n, i, a = !1) {
  const u = i.emitsCache, l = u.get(n);
  if (l !== void 0)
    return l;
  const d = n.emits;
  let v = {}, x = !1;
  if (!qe(n)) {
    const D = (W) => {
      const K = sc(W, i, !0);
      K && (x = !0, Kt(v, K));
    };
    !a && i.mixins.length && i.mixins.forEach(D), n.extends && D(n.extends), n.mixins && n.mixins.forEach(D);
  }
  return !d && !x ? (St(n) && u.set(n, null), null) : (Ke(d) ? d.forEach((D) => v[D] = null) : Kt(v, d), St(n) && u.set(n, v), v);
}
function Ko(n, i) {
  return !n || !Ro(i) ? !1 : (i = i.slice(2).replace(/Once$/, ""), rt(n, i[0].toLowerCase() + i.slice(1)) || rt(n, ti(i)) || rt(n, i));
}
function Ia(n) {
  const {
    type: i,
    vnode: a,
    proxy: u,
    withProxy: l,
    propsOptions: [d],
    slots: v,
    attrs: x,
    emit: D,
    render: W,
    renderCache: K,
    props: G,
    data: re,
    setupState: se,
    ctx: de,
    inheritAttrs: he
  } = n, Ce = Ao(n);
  let ae, ye;
  try {
    if (a.shapeFlag & 4) {
      const pe = l || u, Fe = pe;
      ae = In(
        W.call(
          Fe,
          pe,
          K,
          G,
          se,
          re,
          de
        )
      ), ye = x;
    } else {
      const pe = i;
      ae = In(
        pe.length > 1 ? pe(
          G,
          { attrs: x, slots: v, emit: D }
        ) : pe(
          G,
          null
        )
      ), ye = i.props ? x : bf(x);
    }
  } catch (pe) {
    to.length = 0, Lo(pe, n, 1), ae = yr(ai);
  }
  let ke = ae;
  if (ye && he !== !1) {
    const pe = Object.keys(ye), { shapeFlag: Fe } = ke;
    pe.length && Fe & 7 && (d && pe.some(Hs) && (ye = wf(
      ye,
      d
    )), ke = ui(ke, ye, !1, !0));
  }
  return a.dirs && (ke = ui(ke, null, !1, !0), ke.dirs = ke.dirs ? ke.dirs.concat(a.dirs) : a.dirs), a.transition && aa(ke, a.transition), ae = ke, Ao(Ce), ae;
}
const bf = (n) => {
  let i;
  for (const a in n)
    (a === "class" || a === "style" || Ro(a)) && ((i || (i = {}))[a] = n[a]);
  return i;
}, wf = (n, i) => {
  const a = {};
  for (const u in n)
    (!Hs(u) || !(u.slice(9) in i)) && (a[u] = n[u]);
  return a;
};
function _f(n, i, a) {
  const { props: u, children: l, component: d } = n, { props: v, children: x, patchFlag: D } = i, W = d.emitsOptions;
  if (i.dirs || i.transition)
    return !0;
  if (a && D >= 0) {
    if (D & 1024)
      return !0;
    if (D & 16)
      return u ? Oa(u, v, W) : !!v;
    if (D & 8) {
      const K = i.dynamicProps;
      for (let G = 0; G < K.length; G++) {
        const re = K[G];
        if (v[re] !== u[re] && !Ko(W, re))
          return !0;
      }
    }
  } else
    return (l || x) && (!x || !x.$stable) ? !0 : u === v ? !1 : u ? v ? Oa(u, v, W) : !0 : !!v;
  return !1;
}
function Oa(n, i, a) {
  const u = Object.keys(i);
  if (u.length !== Object.keys(n).length)
    return !0;
  for (let l = 0; l < u.length; l++) {
    const d = u[l];
    if (i[d] !== n[d] && !Ko(a, d))
      return !0;
  }
  return !1;
}
function Sf({ vnode: n, parent: i }, a) {
  for (; i; ) {
    const u = i.subTree;
    if (u.suspense && u.suspense.activeBranch === n && (u.el = n.el), u === n)
      (n = i.vnode).el = a, i = i.parent;
    else
      break;
  }
}
const ac = (n) => n.__isSuspense;
function xf(n, i) {
  i && i.pendingBranch ? Ke(n) ? i.effects.push(...n) : i.effects.push(n) : Dl(n);
}
const or = Symbol.for("v-fgt"), qo = Symbol.for("v-txt"), ai = Symbol.for("v-cmt"), ws = Symbol.for("v-stc"), to = [];
let pn = null;
function uc(n = !1) {
  to.push(pn = n ? null : []);
}
function Ef() {
  to.pop(), pn = to[to.length - 1] || null;
}
let oo = 1;
function Da(n, i = !1) {
  oo += n, n < 0 && pn && i && (pn.hasOnce = !0);
}
function cc(n) {
  return n.dynamicChildren = oo > 0 ? pn || ii : null, Ef(), oo > 0 && pn && pn.push(n), n;
}
function Tf(n, i, a, u, l, d) {
  return cc(
    dc(
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
function Cf(n, i, a, u, l) {
  return cc(
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
function lc(n) {
  return n ? n.__v_isVNode === !0 : !1;
}
function Ui(n, i) {
  return n.type === i.type && n.key === i.key;
}
const fc = ({ key: n }) => n ?? null, _o = ({
  ref: n,
  ref_key: i,
  ref_for: a
}) => (typeof n == "number" && (n = "" + n), n != null ? Pt(n) || Mt(n) || qe(n) ? { i: On, r: n, k: i, f: !!a } : n : null);
function dc(n, i = null, a = null, u = 0, l = null, d = n === or ? 0 : 1, v = !1, x = !1) {
  const D = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n,
    props: i,
    key: i && fc(i),
    ref: i && _o(i),
    scopeId: Bu,
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
    ctx: On
  };
  return x ? (da(D, a), d & 128 && n.normalize(D)) : a && (D.shapeFlag |= Pt(a) ? 8 : 16), oo > 0 && // avoid a block node from tracking itself
  !v && // has current parent block
  pn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (D.patchFlag > 0 || d & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  D.patchFlag !== 32 && pn.push(D), D;
}
const yr = Af;
function Af(n, i = null, a = null, u = 0, l = null, d = !1) {
  if ((!n || n === Hl) && (n = ai), lc(n)) {
    const x = ui(
      n,
      i,
      !0
      /* mergeRef: true */
    );
    return a && da(x, a), oo > 0 && !d && pn && (x.shapeFlag & 6 ? pn[pn.indexOf(n)] = x : pn.push(x)), x.patchFlag = -2, x;
  }
  if (Mf(n) && (n = n.__vccOpts), i) {
    i = Pf(i);
    let { class: x, style: D } = i;
    x && !Pt(x) && (i.class = Xs(x)), St(D) && (oa(D) && !Ke(D) && (D = Kt({}, D)), i.style = Qs(D));
  }
  const v = Pt(n) ? 1 : ac(n) ? 128 : kl(n) ? 64 : St(n) ? 4 : qe(n) ? 2 : 0;
  return dc(
    n,
    i,
    a,
    u,
    l,
    v,
    d,
    !0
  );
}
function Pf(n) {
  return n ? oa(n) || zu(n) ? Kt({}, n) : n : null;
}
function ui(n, i, a = !1, u = !1) {
  const { props: l, ref: d, patchFlag: v, children: x, transition: D } = n, W = i ? Of(l || {}, i) : l, K = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n.type,
    props: W,
    key: W && fc(W),
    ref: i && i.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      a && d ? Ke(d) ? d.concat(_o(i)) : [d, _o(i)] : _o(i)
    ) : d,
    scopeId: n.scopeId,
    slotScopeIds: n.slotScopeIds,
    children: x,
    target: n.target,
    targetStart: n.targetStart,
    targetAnchor: n.targetAnchor,
    staticCount: n.staticCount,
    shapeFlag: n.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: i && n.type !== or ? v === -1 ? 16 : v | 16 : v,
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
    ssContent: n.ssContent && ui(n.ssContent),
    ssFallback: n.ssFallback && ui(n.ssFallback),
    el: n.el,
    anchor: n.anchor,
    ctx: n.ctx,
    ce: n.ce
  };
  return D && u && aa(
    K,
    D.clone(K)
  ), K;
}
function If(n = " ", i = 0) {
  return yr(qo, null, n, i);
}
function In(n) {
  return n == null || typeof n == "boolean" ? yr(ai) : Ke(n) ? yr(
    or,
    null,
    // #3666, avoid reference pollution when reusing vnode
    n.slice()
  ) : lc(n) ? fr(n) : yr(qo, null, String(n));
}
function fr(n) {
  return n.el === null && n.patchFlag !== -1 || n.memo ? n : ui(n);
}
function da(n, i) {
  let a = 0;
  const { shapeFlag: u } = n;
  if (i == null)
    i = null;
  else if (Ke(i))
    a = 16;
  else if (typeof i == "object")
    if (u & 65) {
      const l = i.default;
      l && (l._c && (l._d = !1), da(n, l()), l._c && (l._d = !0));
      return;
    } else {
      a = 32;
      const l = i._;
      !l && !zu(i) ? i._ctx = On : l === 3 && On && (On.slots._ === 1 ? i._ = 1 : (i._ = 2, n.patchFlag |= 1024));
    }
  else qe(i) ? (i = { default: i, _ctx: On }, a = 32) : (i = String(i), u & 64 ? (a = 16, i = [If(i)]) : a = 8);
  n.children = i, n.shapeFlag |= a;
}
function Of(...n) {
  const i = {};
  for (let a = 0; a < n.length; a++) {
    const u = n[a];
    for (const l in u)
      if (l === "class")
        i.class !== u.class && (i.class = Xs([i.class, u.class]));
      else if (l === "style")
        i.style = Qs([i.style, u.style]);
      else if (Ro(l)) {
        const d = i[l], v = u[l];
        v && d !== v && !(Ke(d) && d.includes(v)) && (i[l] = d ? [].concat(d, v) : v);
      } else l !== "" && (i[l] = u[l]);
  }
  return i;
}
function An(n, i, a, u = null) {
  Nn(n, i, 7, [
    a,
    u
  ]);
}
const Df = Yu();
let Nf = 0;
function Rf(n, i, a) {
  const u = n.type, l = (i ? i.appContext : n.appContext) || Df, d = {
    uid: Nf++,
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
    scope: new Zc(
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
    propsOptions: Zu(u, l),
    emitsOptions: sc(u, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ft,
    // inheritAttrs
    inheritAttrs: u.inheritAttrs,
    // state
    ctx: ft,
    data: ft,
    props: ft,
    attrs: ft,
    slots: ft,
    refs: ft,
    setupState: ft,
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
  return d.ctx = { _: d }, d.root = i ? i.root : d, d.emit = gf.bind(null, d), n.ce && n.ce(d), d;
}
let en = null, Oo, Fs;
{
  const n = jo(), i = (a, u) => {
    let l;
    return (l = n[a]) || (l = n[a] = []), l.push(u), (d) => {
      l.length > 1 ? l.forEach((v) => v(d)) : l[0](d);
    };
  };
  Oo = i(
    "__VUE_INSTANCE_SETTERS__",
    (a) => en = a
  ), Fs = i(
    "__VUE_SSR_SETTERS__",
    (a) => so = a
  );
}
const co = (n) => {
  const i = en;
  return Oo(n), n.scope.on(), () => {
    n.scope.off(), Oo(i);
  };
}, Na = () => {
  en && en.scope.off(), Oo(null);
};
function pc(n) {
  return n.vnode.shapeFlag & 4;
}
let so = !1;
function kf(n, i = !1, a = !1) {
  i && Fs(i);
  const { props: u, children: l } = n.vnode, d = pc(n);
  nf(n, u, d, i), af(n, l, a || i);
  const v = d ? Ff(n, i) : void 0;
  return i && Fs(!1), v;
}
function Ff(n, i) {
  const a = n.type;
  n.accessCache = /* @__PURE__ */ Object.create(null), n.proxy = new Proxy(n.ctx, Wl);
  const { setup: u } = a;
  if (u) {
    ar();
    const l = n.setupContext = u.length > 1 ? Lf(n) : null, d = co(n), v = uo(
      u,
      n,
      0,
      [
        n.props,
        l
      ]
    ), x = vu(v);
    if (ur(), d(), (x || n.sp) && !Zi(n) && Vu(n), x) {
      if (v.then(Na, Na), i)
        return v.then((D) => {
          Ra(n, D);
        }).catch((D) => {
          Lo(D, n, 0);
        });
      n.asyncDep = v;
    } else
      Ra(n, v);
  } else
    hc(n);
}
function Ra(n, i, a) {
  qe(i) ? n.type.__ssrInlineRender ? n.ssrRender = i : n.render = i : St(i) && (n.setupState = ju(i)), hc(n);
}
function hc(n, i, a) {
  const u = n.type;
  n.render || (n.render = u.render || Dn);
  {
    const l = co(n);
    ar();
    try {
      Yl(n);
    } finally {
      ur(), l();
    }
  }
}
const jf = {
  get(n, i) {
    return Lt(n, "get", ""), n[i];
  }
};
function Lf(n) {
  const i = (a) => {
    n.exposed = a || {};
  };
  return {
    attrs: new Proxy(n.attrs, jf),
    slots: n.slots,
    emit: n.emit,
    expose: i
  };
}
function pa(n) {
  return n.exposed ? n.exposeProxy || (n.exposeProxy = new Proxy(ju(wl(n.exposed)), {
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
function Mf(n) {
  return qe(n) && "__vccOpts" in n;
}
const Kf = (n, i) => Tl(n, i, so), qf = "3.5.17";
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let js;
const ka = typeof window < "u" && window.trustedTypes;
if (ka)
  try {
    js = /* @__PURE__ */ ka.createPolicy("vue", {
      createHTML: (n) => n
    });
  } catch {
  }
const mc = js ? (n) => js.createHTML(n) : (n) => n, Bf = "http://www.w3.org/2000/svg", $f = "http://www.w3.org/1998/Math/MathML", ir = typeof document < "u" ? document : null, Fa = ir && /* @__PURE__ */ ir.createElement("template"), Vf = {
  insert: (n, i, a) => {
    i.insertBefore(n, a || null);
  },
  remove: (n) => {
    const i = n.parentNode;
    i && i.removeChild(n);
  },
  createElement: (n, i, a, u) => {
    const l = i === "svg" ? ir.createElementNS(Bf, n) : i === "mathml" ? ir.createElementNS($f, n) : a ? ir.createElement(n, { is: a }) : ir.createElement(n);
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
    const v = a ? a.previousSibling : i.lastChild;
    if (l && (l === d || l.nextSibling))
      for (; i.insertBefore(l.cloneNode(!0), a), !(l === d || !(l = l.nextSibling)); )
        ;
    else {
      Fa.innerHTML = mc(
        u === "svg" ? `<svg>${n}</svg>` : u === "mathml" ? `<math>${n}</math>` : n
      );
      const x = Fa.content;
      if (u === "svg" || u === "mathml") {
        const D = x.firstChild;
        for (; D.firstChild; )
          x.appendChild(D.firstChild);
        x.removeChild(D);
      }
      i.insertBefore(x, a);
    }
    return [
      // first
      v ? v.nextSibling : i.firstChild,
      // last
      a ? a.previousSibling : i.lastChild
    ];
  }
}, Uf = Symbol("_vtc");
function Gf(n, i, a) {
  const u = n[Uf];
  u && (i = (i ? [i, ...u] : [...u]).join(" ")), i == null ? n.removeAttribute("class") : a ? n.setAttribute("class", i) : n.className = i;
}
const ja = Symbol("_vod"), Hf = Symbol("_vsh"), Wf = Symbol(""), Yf = /(^|;)\s*display\s*:/;
function Qf(n, i, a) {
  const u = n.style, l = Pt(a);
  let d = !1;
  if (a && !l) {
    if (i)
      if (Pt(i))
        for (const v of i.split(";")) {
          const x = v.slice(0, v.indexOf(":")).trim();
          a[x] == null && So(u, x, "");
        }
      else
        for (const v in i)
          a[v] == null && So(u, v, "");
    for (const v in a)
      v === "display" && (d = !0), So(u, v, a[v]);
  } else if (l) {
    if (i !== a) {
      const v = u[Wf];
      v && (a += ";" + v), u.cssText = a, d = Yf.test(a);
    }
  } else i && n.removeAttribute("style");
  ja in n && (n[ja] = d ? u.display : "", n[Hf] && (u.display = "none"));
}
const La = /\s*!important$/;
function So(n, i, a) {
  if (Ke(a))
    a.forEach((u) => So(n, i, u));
  else if (a == null && (a = ""), i.startsWith("--"))
    n.setProperty(i, a);
  else {
    const u = Xf(n, i);
    La.test(a) ? n.setProperty(
      ti(u),
      a.replace(La, ""),
      "important"
    ) : n[u] = a;
  }
}
const Ma = ["Webkit", "Moz", "ms"], _s = {};
function Xf(n, i) {
  const a = _s[i];
  if (a)
    return a;
  let u = vr(i);
  if (u !== "filter" && u in n)
    return _s[i] = u;
  u = gu(u);
  for (let l = 0; l < Ma.length; l++) {
    const d = Ma[l] + u;
    if (d in n)
      return _s[i] = d;
  }
  return i;
}
const Ka = "http://www.w3.org/1999/xlink";
function qa(n, i, a, u, l, d = Jc(i)) {
  u && i.startsWith("xlink:") ? a == null ? n.removeAttributeNS(Ka, i.slice(6, i.length)) : n.setAttributeNS(Ka, i, a) : a == null || d && !bu(a) ? n.removeAttribute(i) : n.setAttribute(
    i,
    d ? "" : ci(a) ? String(a) : a
  );
}
function Ba(n, i, a, u, l) {
  if (i === "innerHTML" || i === "textContent") {
    a != null && (n[i] = i === "innerHTML" ? mc(a) : a);
    return;
  }
  const d = n.tagName;
  if (i === "value" && d !== "PROGRESS" && // custom elements may use _value internally
  !d.includes("-")) {
    const x = d === "OPTION" ? n.getAttribute("value") || "" : n.value, D = a == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      n.type === "checkbox" ? "on" : ""
    ) : String(a);
    (x !== D || !("_value" in n)) && (n.value = D), a == null && n.removeAttribute(i), n._value = a;
    return;
  }
  let v = !1;
  if (a === "" || a == null) {
    const x = typeof n[i];
    x === "boolean" ? a = bu(a) : a == null && x === "string" ? (a = "", v = !0) : x === "number" && (a = 0, v = !0);
  }
  try {
    n[i] = a;
  } catch {
  }
  v && n.removeAttribute(l || i);
}
function zf(n, i, a, u) {
  n.addEventListener(i, a, u);
}
function Jf(n, i, a, u) {
  n.removeEventListener(i, a, u);
}
const $a = Symbol("_vei");
function Zf(n, i, a, u, l = null) {
  const d = n[$a] || (n[$a] = {}), v = d[i];
  if (u && v)
    v.value = u;
  else {
    const [x, D] = ed(i);
    if (u) {
      const W = d[i] = rd(
        u,
        l
      );
      zf(n, x, W, D);
    } else v && (Jf(n, x, v, D), d[i] = void 0);
  }
}
const Va = /(?:Once|Passive|Capture)$/;
function ed(n) {
  let i;
  if (Va.test(n)) {
    i = {};
    let u;
    for (; u = n.match(Va); )
      n = n.slice(0, n.length - u[0].length), i[u[0].toLowerCase()] = !0;
  }
  return [n[2] === ":" ? n.slice(3) : ti(n.slice(2)), i];
}
let Ss = 0;
const td = /* @__PURE__ */ Promise.resolve(), nd = () => Ss || (td.then(() => Ss = 0), Ss = Date.now());
function rd(n, i) {
  const a = (u) => {
    if (!u._vts)
      u._vts = Date.now();
    else if (u._vts <= a.attached)
      return;
    Nn(
      id(u, a.value),
      i,
      5,
      [u]
    );
  };
  return a.value = n, a.attached = nd(), a;
}
function id(n, i) {
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
n.charCodeAt(2) > 96 && n.charCodeAt(2) < 123, od = (n, i, a, u, l, d) => {
  const v = l === "svg";
  i === "class" ? Gf(n, u, v) : i === "style" ? Qf(n, a, u) : Ro(i) ? Hs(i) || Zf(n, i, a, u, d) : (i[0] === "." ? (i = i.slice(1), !0) : i[0] === "^" ? (i = i.slice(1), !1) : sd(n, i, u, v)) ? (Ba(n, i, u), !n.tagName.includes("-") && (i === "value" || i === "checked" || i === "selected") && qa(n, i, u, v, d, i !== "value")) : /* #11081 force set props for possible async custom element */ n._isVueCE && (/[A-Z]/.test(i) || !Pt(u)) ? Ba(n, vr(i), u, d, i) : (i === "true-value" ? n._trueValue = u : i === "false-value" && (n._falseValue = u), qa(n, i, u, v));
};
function sd(n, i, a, u) {
  if (u)
    return !!(i === "innerHTML" || i === "textContent" || i in n && Ua(i) && qe(a));
  if (i === "spellcheck" || i === "draggable" || i === "translate" || i === "autocorrect" || i === "form" || i === "list" && n.tagName === "INPUT" || i === "type" && n.tagName === "TEXTAREA")
    return !1;
  if (i === "width" || i === "height") {
    const l = n.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Ua(i) && Pt(a) ? !1 : i in n;
}
const ad = /* @__PURE__ */ Kt({ patchProp: od }, Vf);
let Ga;
function ud() {
  return Ga || (Ga = cf(ad));
}
const cd = (...n) => {
  const i = ud().createApp(...n), { mount: a } = i;
  return i.mount = (u) => {
    const l = fd(u);
    if (!l) return;
    const d = i._component;
    !qe(d) && !d.render && !d.template && (d.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const v = a(l, !1, ld(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), v;
  }, i;
};
function ld(n) {
  if (n instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && n instanceof MathMLElement)
    return "mathml";
}
function fd(n) {
  return Pt(n) ? document.querySelector(n) : n;
}
var dd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pd(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function hd(n) {
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
var Ha = {};
const md = {}, yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: md
}, Symbol.toStringTag, { value: "Module" })), Wa = /* @__PURE__ */ hd(yd);
var Ya;
function vd() {
  return Ya || (Ya = 1, function(n) {
    (function(i) {
      i.parser = function(P, w) {
        return new u(P, w);
      }, i.SAXParser = u, i.SAXStream = K, i.createStream = W, i.MAX_BUFFER_LENGTH = 64 * 1024;
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
      function u(P, w) {
        if (!(this instanceof u))
          return new u(P, w);
        var F = this;
        d(F), F.q = F.c = "", F.bufferCheckPosition = i.MAX_BUFFER_LENGTH, F.opt = w || {}, F.opt.lowercase = F.opt.lowercase || F.opt.lowercasetags, F.looseCase = F.opt.lowercase ? "toLowerCase" : "toUpperCase", F.tags = [], F.closed = F.closedRoot = F.sawRoot = !1, F.tag = F.error = null, F.strict = !!P, F.noscript = !!(P || F.opt.noscript), F.state = B.BEGIN, F.strictEntities = F.opt.strictEntities, F.ENTITIES = F.strictEntities ? Object.create(i.XML_ENTITIES) : Object.create(i.ENTITIES), F.attribList = [], F.opt.xmlns && (F.ns = Object.create(he)), F.opt.unquotedAttributeValues === void 0 && (F.opt.unquotedAttributeValues = !P), F.trackPosition = F.opt.position !== !1, F.trackPosition && (F.position = F.line = F.column = 0), it(F, "onready");
      }
      Object.create || (Object.create = function(P) {
        function w() {
        }
        w.prototype = P;
        var F = new w();
        return F;
      }), Object.keys || (Object.keys = function(P) {
        var w = [];
        for (var F in P) P.hasOwnProperty(F) && w.push(F);
        return w;
      });
      function l(P) {
        for (var w = Math.max(i.MAX_BUFFER_LENGTH, 10), F = 0, $ = 0, De = a.length; $ < De; $++) {
          var A = P[a[$]].length;
          if (A > w)
            switch (a[$]) {
              case "textNode":
                Ge(P);
                break;
              case "cdata":
                Ne(P, "oncdata", P.cdata), P.cdata = "";
                break;
              case "script":
                Ne(P, "onscript", P.script), P.script = "";
                break;
              default:
                wt(P, "Max buffer length exceeded: " + a[$]);
            }
          F = Math.max(F, A);
        }
        var L = i.MAX_BUFFER_LENGTH - F;
        P.bufferCheckPosition = L + P.position;
      }
      function d(P) {
        for (var w = 0, F = a.length; w < F; w++)
          P[a[w]] = "";
      }
      function v(P) {
        Ge(P), P.cdata !== "" && (Ne(P, "oncdata", P.cdata), P.cdata = ""), P.script !== "" && (Ne(P, "onscript", P.script), P.script = "");
      }
      u.prototype = {
        end: function() {
          Ue(this);
        },
        write: pt,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          v(this);
        }
      };
      var x;
      try {
        x = Wa.Stream;
      } catch {
        x = function() {
        };
      }
      x || (x = function() {
      });
      var D = i.EVENTS.filter(function(P) {
        return P !== "error" && P !== "end";
      });
      function W(P, w) {
        return new K(P, w);
      }
      function K(P, w) {
        if (!(this instanceof K))
          return new K(P, w);
        x.apply(this), this._parser = new u(P, w), this.writable = !0, this.readable = !0;
        var F = this;
        this._parser.onend = function() {
          F.emit("end");
        }, this._parser.onerror = function($) {
          F.emit("error", $), F._parser.error = null;
        }, this._decoder = null, D.forEach(function($) {
          Object.defineProperty(F, "on" + $, {
            get: function() {
              return F._parser["on" + $];
            },
            set: function(De) {
              if (!De)
                return F.removeAllListeners($), F._parser["on" + $] = De, De;
              F.on($, De);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      K.prototype = Object.create(x.prototype, {
        constructor: {
          value: K
        }
      }), K.prototype.write = function(P) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(P)) {
          if (!this._decoder) {
            var w = Wa.StringDecoder;
            this._decoder = new w("utf8");
          }
          P = this._decoder.write(P);
        }
        return this._parser.write(P.toString()), this.emit("data", P), !0;
      }, K.prototype.end = function(P) {
        return P && P.length && this.write(P), this._parser.end(), !0;
      }, K.prototype.on = function(P, w) {
        var F = this;
        return !F._parser["on" + P] && D.indexOf(P) !== -1 && (F._parser["on" + P] = function() {
          var $ = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          $.splice(0, 0, P), F.emit.apply(F, $);
        }), x.prototype.on.call(F, P, w);
      };
      var G = "[CDATA[", re = "DOCTYPE", se = "http://www.w3.org/XML/1998/namespace", de = "http://www.w3.org/2000/xmlns/", he = { xml: se, xmlns: de }, Ce = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, ae = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, ye = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, ke = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function pe(P) {
        return P === " " || P === `
` || P === "\r" || P === "	";
      }
      function Fe(P) {
        return P === '"' || P === "'";
      }
      function ie(P) {
        return P === ">" || pe(P);
      }
      function oe(P, w) {
        return P.test(w);
      }
      function Ee(P, w) {
        return !oe(P, w);
      }
      var B = 0;
      i.STATE = {
        BEGIN: B++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: B++,
        // leading whitespace
        TEXT: B++,
        // general stuff
        TEXT_ENTITY: B++,
        // &amp and such.
        OPEN_WAKA: B++,
        // <
        SGML_DECL: B++,
        // <!BLARG
        SGML_DECL_QUOTED: B++,
        // <!BLARG foo "bar
        DOCTYPE: B++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: B++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: B++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: B++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: B++,
        // <!-
        COMMENT: B++,
        // <!--
        COMMENT_ENDING: B++,
        // <!-- blah -
        COMMENT_ENDED: B++,
        // <!-- blah --
        CDATA: B++,
        // <![CDATA[ something
        CDATA_ENDING: B++,
        // ]
        CDATA_ENDING_2: B++,
        // ]]
        PROC_INST: B++,
        // <?hi
        PROC_INST_BODY: B++,
        // <?hi there
        PROC_INST_ENDING: B++,
        // <?hi "there" ?
        OPEN_TAG: B++,
        // <strong
        OPEN_TAG_SLASH: B++,
        // <strong /
        ATTRIB: B++,
        // <a
        ATTRIB_NAME: B++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: B++,
        // <a foo _
        ATTRIB_VALUE: B++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: B++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: B++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: B++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: B++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: B++,
        // <foo bar=&quot
        CLOSE_TAG: B++,
        // </a
        CLOSE_TAG_SAW_WHITE: B++,
        // </a   >
        SCRIPT: B++,
        // <script> ...
        SCRIPT_ENDING: B++
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
        var w = i.ENTITIES[P], F = typeof w == "number" ? String.fromCharCode(w) : w;
        i.ENTITIES[P] = F;
      });
      for (var et in i.STATE)
        i.STATE[i.STATE[et]] = et;
      B = i.STATE;
      function it(P, w, F) {
        P[w] && P[w](F);
      }
      function Ne(P, w, F) {
        P.textNode && Ge(P), it(P, w, F);
      }
      function Ge(P) {
        P.textNode = At(P.opt, P.textNode), P.textNode && it(P, "ontext", P.textNode), P.textNode = "";
      }
      function At(P, w) {
        return P.trim && (w = w.trim()), P.normalize && (w = w.replace(/\s+/g, " ")), w;
      }
      function wt(P, w) {
        return Ge(P), P.trackPosition && (w += `
Line: ` + P.line + `
Column: ` + P.column + `
Char: ` + P.c), w = new Error(w), P.error = w, it(P, "onerror", w), P;
      }
      function Ue(P) {
        return P.sawRoot && !P.closedRoot && be(P, "Unclosed root tag"), P.state !== B.BEGIN && P.state !== B.BEGIN_WHITESPACE && P.state !== B.TEXT && wt(P, "Unexpected end"), Ge(P), P.c = "", P.closed = !0, it(P, "onend"), u.call(P, P.strict, P.opt), P;
      }
      function be(P, w) {
        if (typeof P != "object" || !(P instanceof u))
          throw new Error("bad call to strictFail");
        P.strict && wt(P, w);
      }
      function Pe(P) {
        P.strict || (P.tagName = P.tagName[P.looseCase]());
        var w = P.tags[P.tags.length - 1] || P, F = P.tag = { name: P.tagName, attributes: {} };
        P.opt.xmlns && (F.ns = w.ns), P.attribList.length = 0, Ne(P, "onopentagstart", F);
      }
      function tt(P, w) {
        var F = P.indexOf(":"), $ = F < 0 ? ["", P] : P.split(":"), De = $[0], A = $[1];
        return w && P === "xmlns" && (De = "xmlns", A = ""), { prefix: De, local: A };
      }
      function ze(P) {
        if (P.strict || (P.attribName = P.attribName[P.looseCase]()), P.attribList.indexOf(P.attribName) !== -1 || P.tag.attributes.hasOwnProperty(P.attribName)) {
          P.attribName = P.attribValue = "";
          return;
        }
        if (P.opt.xmlns) {
          var w = tt(P.attribName, !0), F = w.prefix, $ = w.local;
          if (F === "xmlns")
            if ($ === "xml" && P.attribValue !== se)
              be(
                P,
                "xml: prefix must be bound to " + se + `
Actual: ` + P.attribValue
              );
            else if ($ === "xmlns" && P.attribValue !== de)
              be(
                P,
                "xmlns: prefix must be bound to " + de + `
Actual: ` + P.attribValue
              );
            else {
              var De = P.tag, A = P.tags[P.tags.length - 1] || P;
              De.ns === A.ns && (De.ns = Object.create(A.ns)), De.ns[$] = P.attribValue;
            }
          P.attribList.push([P.attribName, P.attribValue]);
        } else
          P.tag.attributes[P.attribName] = P.attribValue, Ne(P, "onattribute", {
            name: P.attribName,
            value: P.attribValue
          });
        P.attribName = P.attribValue = "";
      }
      function at(P, w) {
        if (P.opt.xmlns) {
          var F = P.tag, $ = tt(P.tagName);
          F.prefix = $.prefix, F.local = $.local, F.uri = F.ns[$.prefix] || "", F.prefix && !F.uri && (be(P, "Unbound namespace prefix: " + JSON.stringify(P.tagName)), F.uri = $.prefix);
          var De = P.tags[P.tags.length - 1] || P;
          F.ns && De.ns !== F.ns && Object.keys(F.ns).forEach(function(me) {
            Ne(P, "onopennamespace", {
              prefix: me,
              uri: F.ns[me]
            });
          });
          for (var A = 0, L = P.attribList.length; A < L; A++) {
            var Z = P.attribList[A], I = Z[0], k = Z[1], j = tt(I, !0), V = j.prefix, M = j.local, te = V === "" ? "" : F.ns[V] || "", Q = {
              name: I,
              value: k,
              prefix: V,
              local: M,
              uri: te
            };
            V && V !== "xmlns" && !te && (be(P, "Unbound namespace prefix: " + JSON.stringify(V)), Q.uri = V), P.tag.attributes[I] = Q, Ne(P, "onattribute", Q);
          }
          P.attribList.length = 0;
        }
        P.tag.isSelfClosing = !!w, P.sawRoot = !0, P.tags.push(P.tag), Ne(P, "onopentag", P.tag), w || (!P.noscript && P.tagName.toLowerCase() === "script" ? P.state = B.SCRIPT : P.state = B.TEXT, P.tag = null, P.tagName = ""), P.attribName = P.attribValue = "", P.attribList.length = 0;
      }
      function ot(P) {
        if (!P.tagName) {
          be(P, "Weird empty close tag."), P.textNode += "</>", P.state = B.TEXT;
          return;
        }
        if (P.script) {
          if (P.tagName !== "script") {
            P.script += "</" + P.tagName + ">", P.tagName = "", P.state = B.SCRIPT;
            return;
          }
          Ne(P, "onscript", P.script), P.script = "";
        }
        var w = P.tags.length, F = P.tagName;
        P.strict || (F = F[P.looseCase]());
        for (var $ = F; w--; ) {
          var De = P.tags[w];
          if (De.name !== $)
            be(P, "Unexpected close tag");
          else
            break;
        }
        if (w < 0) {
          be(P, "Unmatched closing tag: " + P.tagName), P.textNode += "</" + P.tagName + ">", P.state = B.TEXT;
          return;
        }
        P.tagName = F;
        for (var A = P.tags.length; A-- > w; ) {
          var L = P.tag = P.tags.pop();
          P.tagName = P.tag.name, Ne(P, "onclosetag", P.tagName);
          var Z = {};
          for (var I in L.ns)
            Z[I] = L.ns[I];
          var k = P.tags[P.tags.length - 1] || P;
          P.opt.xmlns && L.ns !== k.ns && Object.keys(L.ns).forEach(function(j) {
            var V = L.ns[j];
            Ne(P, "onclosenamespace", { prefix: j, uri: V });
          });
        }
        w === 0 && (P.closedRoot = !0), P.tagName = P.attribValue = P.attribName = "", P.attribList.length = 0, P.state = B.TEXT;
      }
      function ht(P) {
        var w = P.entity, F = w.toLowerCase(), $, De = "";
        return P.ENTITIES[w] ? P.ENTITIES[w] : P.ENTITIES[F] ? P.ENTITIES[F] : (w = F, w.charAt(0) === "#" && (w.charAt(1) === "x" ? (w = w.slice(2), $ = parseInt(w, 16), De = $.toString(16)) : (w = w.slice(1), $ = parseInt(w, 10), De = $.toString(10))), w = w.replace(/^0+/, ""), isNaN($) || De.toLowerCase() !== w ? (be(P, "Invalid character entity"), "&" + P.entity + ";") : String.fromCodePoint($));
      }
      function rn(P, w) {
        w === "<" ? (P.state = B.OPEN_WAKA, P.startTagPosition = P.position) : pe(w) || (be(P, "Non-whitespace before first tag."), P.textNode = w, P.state = B.TEXT);
      }
      function It(P, w) {
        var F = "";
        return w < P.length && (F = P.charAt(w)), F;
      }
      function pt(P) {
        var w = this;
        if (this.error)
          throw this.error;
        if (w.closed)
          return wt(
            w,
            "Cannot write after close. Assign an onready handler."
          );
        if (P === null)
          return Ue(w);
        typeof P == "object" && (P = P.toString());
        for (var F = 0, $ = ""; $ = It(P, F++), w.c = $, !!$; )
          switch (w.trackPosition && (w.position++, $ === `
` ? (w.line++, w.column = 0) : w.column++), w.state) {
            case B.BEGIN:
              if (w.state = B.BEGIN_WHITESPACE, $ === "\uFEFF")
                continue;
              rn(w, $);
              continue;
            case B.BEGIN_WHITESPACE:
              rn(w, $);
              continue;
            case B.TEXT:
              if (w.sawRoot && !w.closedRoot) {
                for (var De = F - 1; $ && $ !== "<" && $ !== "&"; )
                  $ = It(P, F++), $ && w.trackPosition && (w.position++, $ === `
` ? (w.line++, w.column = 0) : w.column++);
                w.textNode += P.substring(De, F - 1);
              }
              $ === "<" && !(w.sawRoot && w.closedRoot && !w.strict) ? (w.state = B.OPEN_WAKA, w.startTagPosition = w.position) : (!pe($) && (!w.sawRoot || w.closedRoot) && be(w, "Text data outside of root node."), $ === "&" ? w.state = B.TEXT_ENTITY : w.textNode += $);
              continue;
            case B.SCRIPT:
              $ === "<" ? w.state = B.SCRIPT_ENDING : w.script += $;
              continue;
            case B.SCRIPT_ENDING:
              $ === "/" ? w.state = B.CLOSE_TAG : (w.script += "<" + $, w.state = B.SCRIPT);
              continue;
            case B.OPEN_WAKA:
              if ($ === "!")
                w.state = B.SGML_DECL, w.sgmlDecl = "";
              else if (!pe($)) if (oe(Ce, $))
                w.state = B.OPEN_TAG, w.tagName = $;
              else if ($ === "/")
                w.state = B.CLOSE_TAG, w.tagName = "";
              else if ($ === "?")
                w.state = B.PROC_INST, w.procInstName = w.procInstBody = "";
              else {
                if (be(w, "Unencoded <"), w.startTagPosition + 1 < w.position) {
                  var A = w.position - w.startTagPosition;
                  $ = new Array(A).join(" ") + $;
                }
                w.textNode += "<" + $, w.state = B.TEXT;
              }
              continue;
            case B.SGML_DECL:
              if (w.sgmlDecl + $ === "--") {
                w.state = B.COMMENT, w.comment = "", w.sgmlDecl = "";
                continue;
              }
              w.doctype && w.doctype !== !0 && w.sgmlDecl ? (w.state = B.DOCTYPE_DTD, w.doctype += "<!" + w.sgmlDecl + $, w.sgmlDecl = "") : (w.sgmlDecl + $).toUpperCase() === G ? (Ne(w, "onopencdata"), w.state = B.CDATA, w.sgmlDecl = "", w.cdata = "") : (w.sgmlDecl + $).toUpperCase() === re ? (w.state = B.DOCTYPE, (w.doctype || w.sawRoot) && be(
                w,
                "Inappropriately located doctype declaration"
              ), w.doctype = "", w.sgmlDecl = "") : $ === ">" ? (Ne(w, "onsgmldeclaration", w.sgmlDecl), w.sgmlDecl = "", w.state = B.TEXT) : (Fe($) && (w.state = B.SGML_DECL_QUOTED), w.sgmlDecl += $);
              continue;
            case B.SGML_DECL_QUOTED:
              $ === w.q && (w.state = B.SGML_DECL, w.q = ""), w.sgmlDecl += $;
              continue;
            case B.DOCTYPE:
              $ === ">" ? (w.state = B.TEXT, Ne(w, "ondoctype", w.doctype), w.doctype = !0) : (w.doctype += $, $ === "[" ? w.state = B.DOCTYPE_DTD : Fe($) && (w.state = B.DOCTYPE_QUOTED, w.q = $));
              continue;
            case B.DOCTYPE_QUOTED:
              w.doctype += $, $ === w.q && (w.q = "", w.state = B.DOCTYPE);
              continue;
            case B.DOCTYPE_DTD:
              $ === "]" ? (w.doctype += $, w.state = B.DOCTYPE) : $ === "<" ? (w.state = B.OPEN_WAKA, w.startTagPosition = w.position) : Fe($) ? (w.doctype += $, w.state = B.DOCTYPE_DTD_QUOTED, w.q = $) : w.doctype += $;
              continue;
            case B.DOCTYPE_DTD_QUOTED:
              w.doctype += $, $ === w.q && (w.state = B.DOCTYPE_DTD, w.q = "");
              continue;
            case B.COMMENT:
              $ === "-" ? w.state = B.COMMENT_ENDING : w.comment += $;
              continue;
            case B.COMMENT_ENDING:
              $ === "-" ? (w.state = B.COMMENT_ENDED, w.comment = At(w.opt, w.comment), w.comment && Ne(w, "oncomment", w.comment), w.comment = "") : (w.comment += "-" + $, w.state = B.COMMENT);
              continue;
            case B.COMMENT_ENDED:
              $ !== ">" ? (be(w, "Malformed comment"), w.comment += "--" + $, w.state = B.COMMENT) : w.doctype && w.doctype !== !0 ? w.state = B.DOCTYPE_DTD : w.state = B.TEXT;
              continue;
            case B.CDATA:
              $ === "]" ? w.state = B.CDATA_ENDING : w.cdata += $;
              continue;
            case B.CDATA_ENDING:
              $ === "]" ? w.state = B.CDATA_ENDING_2 : (w.cdata += "]" + $, w.state = B.CDATA);
              continue;
            case B.CDATA_ENDING_2:
              $ === ">" ? (w.cdata && Ne(w, "oncdata", w.cdata), Ne(w, "onclosecdata"), w.cdata = "", w.state = B.TEXT) : $ === "]" ? w.cdata += "]" : (w.cdata += "]]" + $, w.state = B.CDATA);
              continue;
            case B.PROC_INST:
              $ === "?" ? w.state = B.PROC_INST_ENDING : pe($) ? w.state = B.PROC_INST_BODY : w.procInstName += $;
              continue;
            case B.PROC_INST_BODY:
              if (!w.procInstBody && pe($))
                continue;
              $ === "?" ? w.state = B.PROC_INST_ENDING : w.procInstBody += $;
              continue;
            case B.PROC_INST_ENDING:
              $ === ">" ? (Ne(w, "onprocessinginstruction", {
                name: w.procInstName,
                body: w.procInstBody
              }), w.procInstName = w.procInstBody = "", w.state = B.TEXT) : (w.procInstBody += "?" + $, w.state = B.PROC_INST_BODY);
              continue;
            case B.OPEN_TAG:
              oe(ae, $) ? w.tagName += $ : (Pe(w), $ === ">" ? at(w) : $ === "/" ? w.state = B.OPEN_TAG_SLASH : (pe($) || be(w, "Invalid character in tag name"), w.state = B.ATTRIB));
              continue;
            case B.OPEN_TAG_SLASH:
              $ === ">" ? (at(w, !0), ot(w)) : (be(w, "Forward-slash in opening tag not followed by >"), w.state = B.ATTRIB);
              continue;
            case B.ATTRIB:
              if (pe($))
                continue;
              $ === ">" ? at(w) : $ === "/" ? w.state = B.OPEN_TAG_SLASH : oe(Ce, $) ? (w.attribName = $, w.attribValue = "", w.state = B.ATTRIB_NAME) : be(w, "Invalid attribute name");
              continue;
            case B.ATTRIB_NAME:
              $ === "=" ? w.state = B.ATTRIB_VALUE : $ === ">" ? (be(w, "Attribute without value"), w.attribValue = w.attribName, ze(w), at(w)) : pe($) ? w.state = B.ATTRIB_NAME_SAW_WHITE : oe(ae, $) ? w.attribName += $ : be(w, "Invalid attribute name");
              continue;
            case B.ATTRIB_NAME_SAW_WHITE:
              if ($ === "=")
                w.state = B.ATTRIB_VALUE;
              else {
                if (pe($))
                  continue;
                be(w, "Attribute without value"), w.tag.attributes[w.attribName] = "", w.attribValue = "", Ne(w, "onattribute", {
                  name: w.attribName,
                  value: ""
                }), w.attribName = "", $ === ">" ? at(w) : oe(Ce, $) ? (w.attribName = $, w.state = B.ATTRIB_NAME) : (be(w, "Invalid attribute name"), w.state = B.ATTRIB);
              }
              continue;
            case B.ATTRIB_VALUE:
              if (pe($))
                continue;
              Fe($) ? (w.q = $, w.state = B.ATTRIB_VALUE_QUOTED) : (w.opt.unquotedAttributeValues || wt(w, "Unquoted attribute value"), w.state = B.ATTRIB_VALUE_UNQUOTED, w.attribValue = $);
              continue;
            case B.ATTRIB_VALUE_QUOTED:
              if ($ !== w.q) {
                $ === "&" ? w.state = B.ATTRIB_VALUE_ENTITY_Q : w.attribValue += $;
                continue;
              }
              ze(w), w.q = "", w.state = B.ATTRIB_VALUE_CLOSED;
              continue;
            case B.ATTRIB_VALUE_CLOSED:
              pe($) ? w.state = B.ATTRIB : $ === ">" ? at(w) : $ === "/" ? w.state = B.OPEN_TAG_SLASH : oe(Ce, $) ? (be(w, "No whitespace between attributes"), w.attribName = $, w.attribValue = "", w.state = B.ATTRIB_NAME) : be(w, "Invalid attribute name");
              continue;
            case B.ATTRIB_VALUE_UNQUOTED:
              if (!ie($)) {
                $ === "&" ? w.state = B.ATTRIB_VALUE_ENTITY_U : w.attribValue += $;
                continue;
              }
              ze(w), $ === ">" ? at(w) : w.state = B.ATTRIB;
              continue;
            case B.CLOSE_TAG:
              if (w.tagName)
                $ === ">" ? ot(w) : oe(ae, $) ? w.tagName += $ : w.script ? (w.script += "</" + w.tagName, w.tagName = "", w.state = B.SCRIPT) : (pe($) || be(w, "Invalid tagname in closing tag"), w.state = B.CLOSE_TAG_SAW_WHITE);
              else {
                if (pe($))
                  continue;
                Ee(Ce, $) ? w.script ? (w.script += "</" + $, w.state = B.SCRIPT) : be(w, "Invalid tagname in closing tag.") : w.tagName = $;
              }
              continue;
            case B.CLOSE_TAG_SAW_WHITE:
              if (pe($))
                continue;
              $ === ">" ? ot(w) : be(w, "Invalid characters in closing tag");
              continue;
            case B.TEXT_ENTITY:
            case B.ATTRIB_VALUE_ENTITY_Q:
            case B.ATTRIB_VALUE_ENTITY_U:
              var L, Z;
              switch (w.state) {
                case B.TEXT_ENTITY:
                  L = B.TEXT, Z = "textNode";
                  break;
                case B.ATTRIB_VALUE_ENTITY_Q:
                  L = B.ATTRIB_VALUE_QUOTED, Z = "attribValue";
                  break;
                case B.ATTRIB_VALUE_ENTITY_U:
                  L = B.ATTRIB_VALUE_UNQUOTED, Z = "attribValue";
                  break;
              }
              if ($ === ";") {
                var I = ht(w);
                w.opt.unparsedEntities && !Object.values(i.XML_ENTITIES).includes(I) ? (w.entity = "", w.state = L, w.write(I)) : (w[Z] += I, w.entity = "", w.state = L);
              } else oe(w.entity.length ? ke : ye, $) ? w.entity += $ : (be(w, "Invalid character in entity name"), w[Z] += "&" + w.entity + $, w.entity = "", w.state = L);
              continue;
            default:
              throw new Error(w, "Unknown state: " + w.state);
          }
        return w.position >= w.bufferCheckPosition && l(w), w;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var P = String.fromCharCode, w = Math.floor, F = function() {
          var $ = 16384, De = [], A, L, Z = -1, I = arguments.length;
          if (!I)
            return "";
          for (var k = ""; ++Z < I; ) {
            var j = Number(arguments[Z]);
            if (!isFinite(j) || // `NaN`, `+Infinity`, or `-Infinity`
            j < 0 || // not a valid Unicode code point
            j > 1114111 || // not a valid Unicode code point
            w(j) !== j)
              throw RangeError("Invalid code point: " + j);
            j <= 65535 ? De.push(j) : (j -= 65536, A = (j >> 10) + 55296, L = j % 1024 + 56320, De.push(A, L)), (Z + 1 === I || De.length > $) && (k += P.apply(null, De), De.length = 0);
          }
          return k;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: F,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = F;
      }();
    })(n);
  }(Ha)), Ha;
}
vd();
const zt = "sclElements", ha = {
  default: {
    prefix: "",
    uri: "http://www.iec.ch/61850/2003/SCL"
  }
};
function gd(n) {
  return n !== null && typeof n == "object" && "namespace" in n && n.namespace !== null;
}
var Ls = { exports: {} }, bd = Ls.exports, Qa;
function wd() {
  return Qa || (Qa = 1, function(n, i) {
    (function(a, u) {
      n.exports = u();
    })(bd, function() {
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
      var d = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : dd, v = Object.keys, x = Array.isArray;
      function D(e, t) {
        return typeof t != "object" || v(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || d.Promise || (d.Promise = Promise);
      var W = Object.getPrototypeOf, K = {}.hasOwnProperty;
      function G(e, t) {
        return K.call(e, t);
      }
      function re(e, t) {
        typeof t == "function" && (t = t(W(e))), (typeof Reflect > "u" ? v : Reflect.ownKeys)(t).forEach(function(r) {
          de(e, r, t[r]);
        });
      }
      var se = Object.defineProperty;
      function de(e, t, r, o) {
        se(e, t, D(r && G(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function he(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), de(e.prototype, "constructor", e), { extend: re.bind(null, e.prototype) };
        } };
      }
      var Ce = Object.getOwnPropertyDescriptor, ae = [].slice;
      function ye(e, t, r) {
        return ae.call(e, t, r);
      }
      function ke(e, t) {
        return t(e);
      }
      function pe(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Fe(e) {
        d.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function ie(e, t) {
        if (typeof t == "string" && G(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var r = [], o = 0, s = t.length; o < s; ++o) {
            var c = ie(e, t[o]);
            r.push(c);
          }
          return r;
        }
        var f = t.indexOf(".");
        if (f !== -1) {
          var p = e[t.substr(0, f)];
          return p == null ? void 0 : ie(p, t.substr(f + 1));
        }
      }
      function oe(e, t, r) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          pe(typeof r != "string" && "length" in r);
          for (var o = 0, s = t.length; o < s; ++o) oe(e, t[o], r[o]);
        } else {
          var c, f, p = t.indexOf(".");
          p !== -1 ? (c = t.substr(0, p), (f = t.substr(p + 1)) === "" ? r === void 0 ? x(e) && !isNaN(parseInt(c)) ? e.splice(c, 1) : delete e[c] : e[c] = r : oe(p = !(p = e[c]) || !G(e, c) ? e[c] = {} : p, f, r)) : r === void 0 ? x(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function Ee(e) {
        var t, r = {};
        for (t in e) G(e, t) && (r[t] = e[t]);
        return r;
      }
      var B = [].concat;
      function et(e) {
        return B.apply([], e);
      }
      var Ie = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(et([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return d[e];
      }), it = new Set(Ie.map(function(e) {
        return d[e];
      })), Ne = null;
      function Ge(e) {
        return Ne = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var o = Ne.get(r);
          if (o) return o;
          if (x(r)) {
            o = [], Ne.set(r, o);
            for (var s = 0, c = r.length; s < c; ++s) o.push(t(r[s]));
          } else if (it.has(r.constructor)) o = r;
          else {
            var f, p = W(r);
            for (f in o = p === Object.prototype ? {} : Object.create(p), Ne.set(r, o), r) G(r, f) && (o[f] = t(r[f]));
          }
          return o;
        }(e), Ne = null, e;
      }
      var At = {}.toString;
      function wt(e) {
        return At.call(e).slice(8, -1);
      }
      var Ue = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", be = typeof Ue == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Ue]) && t.apply(e);
      } : function() {
        return null;
      };
      function Pe(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var tt = {};
      function ze(e) {
        var t, r, o, s;
        if (arguments.length === 1) {
          if (x(e)) return e.slice();
          if (this === tt && typeof e == "string") return [e];
          if (s = be(e)) {
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
      var at = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Te = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], dt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Te), ot = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function ht(e, t) {
        this.name = e, this.message = t;
      }
      function rn(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(r) {
          return t[r].toString();
        }).filter(function(r, o, s) {
          return s.indexOf(r) === o;
        }).join(`
`);
      }
      function It(e, t, r, o) {
        this.failures = t, this.failedKeys = o, this.successCount = r, this.message = rn(e, t);
      }
      function pt(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(r) {
          return t[r];
        }), this.failuresByPos = t, this.message = rn(e, this.failures);
      }
      he(ht).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), he(It).from(ht), he(pt).from(ht);
      var P = dt.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), w = ht, F = dt.reduce(function(e, t) {
        var r = t + "Error";
        function o(s, c) {
          this.name = r, s ? typeof s == "string" ? (this.message = "".concat(s).concat(c ? `
 ` + c : ""), this.inner = c || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = ot[t] || r, this.inner = null);
        }
        return he(o).from(w), e[t] = o, e;
      }, {});
      F.Syntax = SyntaxError, F.Type = TypeError, F.Range = RangeError;
      var $ = Te.reduce(function(e, t) {
        return e[t + "Error"] = F[t], e;
      }, {}), De = dt.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = F[t]), e;
      }, {});
      function A() {
      }
      function L(e) {
        return e;
      }
      function Z(e, t) {
        return e == null || e === L ? t : function(r) {
          return t(e(r));
        };
      }
      function I(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function k(e, t) {
        return e === A ? t : function() {
          var r = e.apply(this, arguments);
          r !== void 0 && (arguments[0] = r);
          var o = this.onsuccess, s = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var c = t.apply(this, arguments);
          return o && (this.onsuccess = this.onsuccess ? I(o, this.onsuccess) : o), s && (this.onerror = this.onerror ? I(s, this.onerror) : s), c !== void 0 ? c : r;
        };
      }
      function j(e, t) {
        return e === A ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? I(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? I(o, this.onerror) : o);
        };
      }
      function V(e, t) {
        return e === A ? t : function(r) {
          var o = e.apply(this, arguments);
          D(r, o);
          var s = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? I(s, this.onsuccess) : s), c && (this.onerror = this.onerror ? I(c, this.onerror) : c), o === void 0 ? r === void 0 ? void 0 : r : D(o, r);
        };
      }
      function M(e, t) {
        return e === A ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function te(e, t) {
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
      De.ModifyError = It, De.DexieError = ht, De.BulkError = pt;
      var Q = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function me(e) {
        Q = e;
      }
      var ce = {}, xe = 100, Ie = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, W(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, W(t), e];
      }(), Te = Ie[0], dt = Ie[1], Ie = Ie[2], dt = dt && dt.then, Me = Te && Te.constructor, Be = !!Ie, ut = function(e, t) {
        tn.push([e, t]), _t && (queueMicrotask(Vo), _t = !1);
      }, mt = !0, _t = !0, ct = [], $t = [], Cn = L, Je = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: A, pgp: !1, env: {}, finalize: A }, ne = Je, tn = [], Vt = 0, Rn = [];
      function J(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = ne;
        if (typeof e != "function") {
          if (e !== ce) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && br(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function r(o, s) {
          try {
            s(function(c) {
              if (o._state === null) {
                if (c === o) throw new TypeError("A promise cannot be resolved with itself.");
                var f = o._lib && on();
                c && typeof c.then == "function" ? r(o, function(p, m) {
                  c instanceof J ? c._then(p, m) : c.then(p, m);
                }) : (o._state = !0, o._value = c, di(o)), f && sn();
              }
            }, br.bind(null, o));
          } catch (c) {
            br(o, c);
          }
        }(this, e);
      }
      var gr = { get: function() {
        var e = ne, t = Ln;
        function r(o, s) {
          var c = this, f = !e.global && (e !== ne || t !== Ln), p = f && !Dt(), m = new J(function(g, _) {
            wr(c, new fi(hi(o, e, f, p), hi(s, e, f, p), g, _, e));
          });
          return this._consoleTask && (m._consoleTask = this._consoleTask), m;
        }
        return r.prototype = ce, r;
      }, set: function(e) {
        de(this, "then", e && e.prototype === ce ? gr : { get: function() {
          return e;
        }, set: gr.set });
      } };
      function fi(e, t, r, o, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = r, this.reject = o, this.psd = s;
      }
      function br(e, t) {
        var r, o;
        $t.push(t), e._state === null && (r = e._lib && on(), t = Cn(t), e._state = !1, e._value = t, o = e, ct.some(function(s) {
          return s._value === o._value;
        }) || ct.push(o), di(e), r && sn());
      }
      function di(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var r = 0, o = t.length; r < o; ++r) wr(e, t[r]);
        var s = e._PSD;
        --s.ref || s.finalize(), Vt === 0 && (++Vt, ut(function() {
          --Vt == 0 && _r();
        }, []));
      }
      function wr(e, t) {
        if (e._state !== null) {
          var r = e._state ? t.onFulfilled : t.onRejected;
          if (r === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++Vt, ut($o, [r, e, t]);
        } else e._listeners.push(t);
      }
      function $o(e, t, r) {
        try {
          var o, s = t._value;
          !t._state && $t.length && ($t = []), o = Q && t._consoleTask ? t._consoleTask.run(function() {
            return e(s);
          }) : e(s), t._state || $t.indexOf(s) !== -1 || function(c) {
            for (var f = ct.length; f; ) if (ct[--f]._value === c._value) return ct.splice(f, 1);
          }(t), r.resolve(o);
        } catch (c) {
          r.reject(c);
        } finally {
          --Vt == 0 && _r(), --r.psd.ref || r.psd.finalize();
        }
      }
      function Vo() {
        Ut(Je, function() {
          on() && sn();
        });
      }
      function on() {
        var e = mt;
        return _t = mt = !1, e;
      }
      function sn() {
        var e, t, r;
        do
          for (; 0 < tn.length; ) for (e = tn, tn = [], r = e.length, t = 0; t < r; ++t) {
            var o = e[t];
            o[0].apply(null, o[1]);
          }
        while (0 < tn.length);
        _t = mt = !0;
      }
      function _r() {
        var e = ct;
        ct = [], e.forEach(function(o) {
          o._PSD.onunhandled.call(null, o._value, o);
        });
        for (var t = Rn.slice(0), r = t.length; r; ) t[--r]();
      }
      function kn(e) {
        return new J(ce, !1, e);
      }
      function Oe(e, t) {
        var r = ne;
        return function() {
          var o = on(), s = ne;
          try {
            return Nt(r, !0), e.apply(this, arguments);
          } catch (c) {
            t && t(c);
          } finally {
            Nt(s, !1), o && sn();
          }
        };
      }
      re(J.prototype, { then: gr, _then: function(e, t) {
        wr(this, new fi(null, null, e, t, ne));
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
          return J.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return J.resolve(e()).then(function() {
            return kn(t);
          });
        });
      }, timeout: function(e, t) {
        var r = this;
        return e < 1 / 0 ? new J(function(o, s) {
          var c = setTimeout(function() {
            return s(new F.Timeout(t));
          }, e);
          r.then(o, s).finally(clearTimeout.bind(null, c));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && de(J.prototype, Symbol.toStringTag, "Dexie.Promise"), Je.env = pi(), re(J, { all: function() {
        var e = ze.apply(null, arguments).map(Mn);
        return new J(function(t, r) {
          e.length === 0 && t([]);
          var o = e.length;
          e.forEach(function(s, c) {
            return J.resolve(s).then(function(f) {
              e[c] = f, --o || t(e);
            }, r);
          });
        });
      }, resolve: function(e) {
        return e instanceof J ? e : e && typeof e.then == "function" ? new J(function(t, r) {
          e.then(t, r);
        }) : new J(ce, !0, e);
      }, reject: kn, race: function() {
        var e = ze.apply(null, arguments).map(Mn);
        return new J(function(t, r) {
          e.map(function(o) {
            return J.resolve(o).then(t, r);
          });
        });
      }, PSD: { get: function() {
        return ne;
      }, set: function(e) {
        return ne = e;
      } }, totalEchoes: { get: function() {
        return Ln;
      } }, newPSD: Ot, usePSD: Ut, scheduler: { get: function() {
        return ut;
      }, set: function(e) {
        ut = e;
      } }, rejectionMapper: { get: function() {
        return Cn;
      }, set: function(e) {
        Cn = e;
      } }, follow: function(e, t) {
        return new J(function(r, o) {
          return Ot(function(s, c) {
            var f = ne;
            f.unhandleds = [], f.onunhandled = c, f.finalize = I(function() {
              var p, m = this;
              p = function() {
                m.unhandleds.length === 0 ? s() : c(m.unhandleds[0]);
              }, Rn.push(function g() {
                p(), Rn.splice(Rn.indexOf(g), 1);
              }), ++Vt, ut(function() {
                --Vt == 0 && _r();
              }, []);
            }, f.finalize), e();
          }, t, r, o);
        });
      } }), Me && (Me.allSettled && de(J, "allSettled", function() {
        var e = ze.apply(null, arguments).map(Mn);
        return new J(function(t) {
          e.length === 0 && t([]);
          var r = e.length, o = new Array(r);
          e.forEach(function(s, c) {
            return J.resolve(s).then(function(f) {
              return o[c] = { status: "fulfilled", value: f };
            }, function(f) {
              return o[c] = { status: "rejected", reason: f };
            }).then(function() {
              return --r || t(o);
            });
          });
        });
      }), Me.any && typeof AggregateError < "u" && de(J, "any", function() {
        var e = ze.apply(null, arguments).map(Mn);
        return new J(function(t, r) {
          e.length === 0 && r(new AggregateError([]));
          var o = e.length, s = new Array(o);
          e.forEach(function(c, f) {
            return J.resolve(c).then(function(p) {
              return t(p);
            }, function(p) {
              s[f] = p, --o || r(new AggregateError(s));
            });
          });
        });
      }), Me.withResolvers && (J.withResolvers = Me.withResolvers));
      var $e = { awaits: 0, echoes: 0, id: 0 }, Uo = 0, Fn = [], jn = 0, Ln = 0, Go = 0;
      function Ot(e, t, r, o) {
        var s = ne, c = Object.create(s);
        return c.parent = s, c.ref = 0, c.global = !1, c.id = ++Go, Je.env, c.env = Be ? { Promise: J, PromiseProp: { value: J, configurable: !0, writable: !0 }, all: J.all, race: J.race, allSettled: J.allSettled, any: J.any, resolve: J.resolve, reject: J.reject } : {}, t && D(c, t), ++s.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = Ut(c, e, r, o), c.ref === 0 && c.finalize(), o;
      }
      function an() {
        return $e.id || ($e.id = ++Uo), ++$e.awaits, $e.echoes += xe, $e.id;
      }
      function Dt() {
        return !!$e.awaits && (--$e.awaits == 0 && ($e.id = 0), $e.echoes = $e.awaits * xe, !0);
      }
      function Mn(e) {
        return $e.echoes && e && e.constructor === Me ? (an(), e.then(function(t) {
          return Dt(), t;
        }, function(t) {
          return Dt(), je(t);
        })) : e;
      }
      function Ho() {
        var e = Fn[Fn.length - 1];
        Fn.pop(), Nt(e, !1);
      }
      function Nt(e, t) {
        var r, o = ne;
        (t ? !$e.echoes || jn++ && e === ne : !jn || --jn && e === ne) || queueMicrotask(t ? (function(s) {
          ++Ln, $e.echoes && --$e.echoes != 0 || ($e.echoes = $e.awaits = $e.id = 0), Fn.push(ne), Nt(s, !0);
        }).bind(null, e) : Ho), e !== ne && (ne = e, o === Je && (Je.env = pi()), Be && (r = Je.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(d, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function pi() {
        var e = d.Promise;
        return Be ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(d, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Ut(e, t, r, o, s) {
        var c = ne;
        try {
          return Nt(e, !0), t(r, o, s);
        } finally {
          Nt(c, !1);
        }
      }
      function hi(e, t, r, o) {
        return typeof e != "function" ? e : function() {
          var s = ne;
          r && an(), Nt(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Nt(s, !1), o && queueMicrotask(Dt);
          }
        };
      }
      function Sr(e) {
        Promise === Me && $e.echoes === 0 ? jn === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + dt).indexOf("[native code]") === -1 && (an = Dt = A);
      var je = J.reject, Gt = "￿", xt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", mi = "String expected.", un = [], Kn = "__dbnames", xr = "readonly", Er = "readwrite";
      function Ht(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var yi = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function qn(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = Ge(t))[e], t;
        };
      }
      function vi() {
        throw F.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function ve(e, t) {
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
                for (var f = s.length, p = c.length, m = f < p ? f : p, g = 0; g < m; ++g) if (s[g] !== c[g]) return s[g] < c[g] ? -1 : 1;
                return f === p ? 0 : f < p ? -1 : 1;
              }(bi(e), bi(t));
            case "Array":
              return function(s, c) {
                for (var f = s.length, p = c.length, m = f < p ? f : p, g = 0; g < m; ++g) {
                  var _ = ve(s[g], c[g]);
                  if (_ !== 0) return _;
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
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = wt(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function bi(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function Bn(e, t, r) {
        var o = e.schema.yProps;
        return o ? (t && 0 < r.numFailures && (t = t.filter(function(s, c) {
          return !r.failures[c];
        })), Promise.all(o.map(function(s) {
          return s = s.updatesTable, t ? e.db.table(s).where("k").anyOf(t).delete() : e.db.table(s).clear();
        })).then(function() {
          return r;
        })) : r;
      }
      var wi = (Ae.prototype._trans = function(e, t, r) {
        var o = this._tx || ne.trans, s = this.name, c = Q && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function f(g, _, h) {
          if (!h.schema[s]) throw new F.NotFound("Table " + s + " not part of transaction");
          return t(h.idbtrans, h);
        }
        var p = on();
        try {
          var m = o && o.db._novip === this.db._novip ? o === ne.trans ? o._promise(e, f, r) : Ot(function() {
            return o._promise(e, f, r);
          }, { trans: o, transless: ne.transless || ne }) : function g(_, h, T, y) {
            if (_.idbdb && (_._state.openComplete || ne.letThrough || _._vip)) {
              var b = _._createTransaction(h, T, _._dbSchema);
              try {
                b.create(), _._state.PR1398_maxLoop = 3;
              } catch (E) {
                return E.name === P.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                  return g(_, h, T, y);
                })) : je(E);
              }
              return b._promise(h, function(E, S) {
                return Ot(function() {
                  return ne.trans = b, y(E, S, b);
                });
              }).then(function(E) {
                if (h === "readwrite") try {
                  b.idbtrans.commit();
                } catch {
                }
                return h === "readonly" ? E : b._completion.then(function() {
                  return E;
                });
              });
            }
            if (_._state.openComplete) return je(new F.DatabaseClosed(_._state.dbOpenError));
            if (!_._state.isBeingOpened) {
              if (!_._state.autoOpen) return je(new F.DatabaseClosed());
              _.open().catch(A);
            }
            return _._state.dbReadyPromise.then(function() {
              return g(_, h, T, y);
            });
          }(this.db, e, [this.name], f);
          return c && (m._consoleTask = c, m = m.catch(function(g) {
            return console.trace(g), je(g);
          })), m;
        } finally {
          p && sn();
        }
      }, Ae.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? je(new F.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(s) {
            return r.hook.reading.fire(s);
          });
        }).then(t);
      }, Ae.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (x(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = v(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var r = this.schema.indexes.concat(this.schema.primKey).filter(function(p) {
          if (p.compound && t.every(function(g) {
            return 0 <= p.keyPath.indexOf(g);
          })) {
            for (var m = 0; m < t.length; ++m) if (t.indexOf(p.keyPath[m]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(p, m) {
          return p.keyPath.length - m.keyPath.length;
        })[0];
        if (r && this.db._maxKey !== Gt) {
          var c = r.keyPath.slice(0, t.length);
          return this.where(c).equals(c.map(function(m) {
            return e[m];
          }));
        }
        !r && Q && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var o = this.schema.idxByName;
        function s(p, m) {
          return ve(p, m) === 0;
        }
        var f = t.reduce(function(h, m) {
          var g = h[0], _ = h[1], h = o[m], T = e[m];
          return [g || h, g || !h ? Ht(_, h && h.multi ? function(y) {
            return y = ie(y, m), x(y) && y.some(function(b) {
              return s(T, b);
            });
          } : function(y) {
            return s(T, ie(y, m));
          }) : _];
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
        return new this.db.Collection(new this.db.WhereClause(this, x(e) ? "[".concat(e.join("+"), "]") : e));
      }, Ae.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Ae.prototype.mapToClass = function(e) {
        var t, r = this.db, o = this.name;
        function s() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof vi && (function(m, g) {
          if (typeof g != "function" && g !== null) throw new TypeError("Class extends value " + String(g) + " is not a constructor or null");
          function _() {
            this.constructor = m;
          }
          a(m, g), m.prototype = g === null ? Object.create(g) : (_.prototype = g.prototype, new _());
        }(s, t = e), Object.defineProperty(s.prototype, "db", { get: function() {
          return r;
        }, enumerable: !1, configurable: !0 }), s.prototype.table = function() {
          return o;
        }, e = s);
        for (var c = /* @__PURE__ */ new Set(), f = e.prototype; f; f = W(f)) Object.getOwnPropertyNames(f).forEach(function(m) {
          return c.add(m);
        });
        function p(m) {
          if (!m) return m;
          var g, _ = Object.create(e.prototype);
          for (g in m) if (!c.has(g)) try {
            _[g] = m[g];
          } catch {
          }
          return _;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = p, this.hook("reading", p), e;
      }, Ae.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          D(this, e);
        });
      }, Ae.prototype.add = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, f = e;
        return c && s && (f = qn(c)(e)), this._trans("readwrite", function(p) {
          return r.core.mutate({ trans: p, type: "add", keys: t != null ? [t] : null, values: [f] });
        }).then(function(p) {
          return p.numFailures ? J.reject(p.failures[0]) : p.lastResult;
        }).then(function(p) {
          if (c) try {
            oe(e, c, p);
          } catch {
          }
          return p;
        });
      }, Ae.prototype.update = function(e, t) {
        return typeof e != "object" || x(e) ? this.where(":id").equals(e).modify(t) : (e = ie(e, this.schema.primKey.keyPath), e === void 0 ? je(new F.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, Ae.prototype.put = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, f = e;
        return c && s && (f = qn(c)(e)), this._trans("readwrite", function(p) {
          return r.core.mutate({ trans: p, type: "put", values: [f], keys: t != null ? [t] : null });
        }).then(function(p) {
          return p.numFailures ? J.reject(p.failures[0]) : p.lastResult;
        }).then(function(p) {
          if (c) try {
            oe(e, c, p);
          } catch {
          }
          return p;
        });
      }, Ae.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: [e] }).then(function(o) {
            return Bn(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? J.reject(o.failures[0]) : void 0;
          });
        });
      }, Ae.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: yi }).then(function(r) {
            return Bn(e, null, r);
          });
        }).then(function(t) {
          return t.numFailures ? J.reject(t.failures[0]) : void 0;
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
          var g = o.schema.primKey, p = g.auto, g = g.keyPath;
          if (g && s) throw new F.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new F.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, g = g && p ? e.map(qn(g)) : e;
          return o.core.mutate({ trans: f, type: "add", keys: s, values: g, wantResults: c }).then(function(b) {
            var h = b.numFailures, T = b.results, y = b.lastResult, b = b.failures;
            if (h === 0) return c ? T : y;
            throw new pt("".concat(o.name, ".bulkAdd(): ").concat(h, " of ").concat(m, " operations failed"), b);
          });
        });
      }, Ae.prototype.bulkPut = function(e, t, r) {
        var o = this, s = Array.isArray(t) ? t : void 0, c = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(f) {
          var g = o.schema.primKey, p = g.auto, g = g.keyPath;
          if (g && s) throw new F.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new F.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, g = g && p ? e.map(qn(g)) : e;
          return o.core.mutate({ trans: f, type: "put", keys: s, values: g, wantResults: c }).then(function(b) {
            var h = b.numFailures, T = b.results, y = b.lastResult, b = b.failures;
            if (h === 0) return c ? T : y;
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
            var m = [], g = [];
            e.forEach(function(h, T) {
              var y = h.key, b = h.changes, E = p[T];
              if (E) {
                for (var S = 0, C = Object.keys(b); S < C.length; S++) {
                  var O = C[S], N = b[O];
                  if (O === t.schema.primKey.keyPath) {
                    if (ve(N, y) !== 0) throw new F.Constraint("Cannot update primary key in bulkUpdate()");
                  } else oe(E, O, N);
                }
                c.push(T), m.push(y), g.push(E);
              }
            });
            var _ = m.length;
            return r.mutate({ trans: f, type: "put", keys: m, values: g, updates: { keys: o, changeSpecs: s } }).then(function(h) {
              var T = h.numFailures, y = h.failures;
              if (T === 0) return _;
              for (var b = 0, E = Object.keys(y); b < E.length; b++) {
                var S, C = E[b], O = c[Number(C)];
                O != null && (S = y[C], delete y[C], y[O] = S);
              }
              throw new pt("".concat(t.name, ".bulkUpdate(): ").concat(T, " of ").concat(_, " operations failed"), y);
            });
          });
        });
      }, Ae.prototype.bulkDelete = function(e) {
        var t = this, r = e.length;
        return this._trans("readwrite", function(o) {
          return t.core.mutate({ trans: o, type: "delete", keys: e }).then(function(s) {
            return Bn(t, e, s);
          });
        }).then(function(f) {
          var s = f.numFailures, c = f.lastResult, f = f.failures;
          if (s === 0) return c;
          throw new pt("".concat(t.name, ".bulkDelete(): ").concat(s, " of ").concat(r, " operations failed"), f);
        });
      }, Ae);
      function Ae() {
      }
      function mn(e) {
        function t(f, p) {
          if (p) {
            for (var m = arguments.length, g = new Array(m - 1); --m; ) g[m - 1] = arguments[m];
            return r[f].subscribe.apply(null, g), e;
          }
          if (typeof f == "string") return r[f];
        }
        var r = {};
        t.addEventType = c;
        for (var o = 1, s = arguments.length; o < s; ++o) c(arguments[o]);
        return t;
        function c(f, p, m) {
          if (typeof f != "object") {
            var g;
            p = p || M;
            var _ = { subscribers: [], fire: m = m || A, subscribe: function(h) {
              _.subscribers.indexOf(h) === -1 && (_.subscribers.push(h), _.fire = p(_.fire, h));
            }, unsubscribe: function(h) {
              _.subscribers = _.subscribers.filter(function(T) {
                return T !== h;
              }), _.fire = _.subscribers.reduce(p, m);
            } };
            return r[f] = t[f] = _;
          }
          v(g = f).forEach(function(h) {
            var T = g[h];
            if (x(T)) c(h, g[h][0], g[h][1]);
            else {
              if (T !== "asap") throw new F.InvalidArgument("Invalid event config");
              var y = c(h, L, function() {
                for (var b = arguments.length, E = new Array(b); b--; ) E[b] = arguments[b];
                y.subscribers.forEach(function(S) {
                  Fe(function() {
                    S.apply(null, E);
                  });
                });
              });
            }
          });
        }
      }
      function yn(e, t) {
        return he(t).from({ prototype: e }), t;
      }
      function cn(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function Tr(e, t) {
        e.filter = Ht(e.filter, t);
      }
      function Cr(e, t, r) {
        var o = e.replayFilter;
        e.replayFilter = o ? function() {
          return Ht(o(), t());
        } : t, e.justLimit = r && !o;
      }
      function $n(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var r = t.getIndexByKeyPath(e.index);
        if (!r) throw new F.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return r;
      }
      function _i(e, t, r) {
        var o = $n(e, t.schema);
        return t.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: o, range: e.range } });
      }
      function Vn(e, t, r, o) {
        var s = e.replayFilter ? Ht(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var c = {}, f = function(p, m, g) {
            var _, h;
            s && !s(m, g, function(T) {
              return m.stop(T);
            }, function(T) {
              return m.fail(T);
            }) || ((h = "" + (_ = m.primaryKey)) == "[object ArrayBuffer]" && (h = "" + new Uint8Array(_)), G(c, h) || (c[h] = !0, t(p, m, g)));
          };
          return Promise.all([e.or._iterate(f, r), Si(_i(e, o, r), e.algorithm, f, !e.keysOnly && e.valueMapper)]);
        }
        return Si(_i(e, o, r), Ht(e.algorithm, s), t, !e.keysOnly && e.valueMapper);
      }
      function Si(e, t, r, o) {
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
      var vn = (xi.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var r = t.add;
          if (x(r)) return l(l([], x(e) ? e : [], !0), r).sort();
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
          if (x(o)) return x(e) ? e.filter(function(s) {
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
      }, xi);
      function xi(e) {
        this["@@propmod"] = e;
      }
      var Wo = (we.prototype._read = function(e, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, je.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, we.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, je.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, we.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Ht(t.algorithm, e);
      }, we.prototype._iterate = function(e, t) {
        return Vn(this._ctx, e, t, this._ctx.table.core);
      }, we.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && D(r, e), t._ctx = r, t;
      }, we.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, we.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(r) {
          return Vn(t, e, r, t.table.core);
        });
      }, we.prototype.count = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx, s = o.table.core;
          if (cn(o, !0)) return s.count({ trans: r, query: { index: $n(o, s.schema), range: o.range } }).then(function(f) {
            return Math.min(f, o.limit);
          });
          var c = 0;
          return Vn(o, function() {
            return ++c, !1;
          }, r, s).then(function() {
            return c;
          });
        }).then(e);
      }, we.prototype.sortBy = function(e, t) {
        var r = e.split(".").reverse(), o = r[0], s = r.length - 1;
        function c(m, g) {
          return g ? c(m[r[g]], g - 1) : m[o];
        }
        var f = this._ctx.dir === "next" ? 1 : -1;
        function p(m, g) {
          return ve(c(m, s), c(g, s)) * f;
        }
        return this.toArray(function(m) {
          return m.sort(p);
        }).then(t);
      }, we.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx;
          if (o.dir === "next" && cn(o, !0) && 0 < o.limit) {
            var s = o.valueMapper, c = $n(o, o.table.core.schema);
            return o.table.core.query({ trans: r, limit: o.limit, values: !0, query: { index: c, range: o.range } }).then(function(p) {
              return p = p.result, s ? p.map(s) : p;
            });
          }
          var f = [];
          return Vn(o, function(p) {
            return f.push(p);
          }, r, o.table.core).then(function() {
            return f;
          });
        }, e);
      }, we.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, cn(t) ? Cr(t, function() {
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
      }, we.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Cr(this._ctx, function() {
          var t = e;
          return function(r, o, s) {
            return --t <= 0 && o(s), 0 <= t;
          };
        }, !0), this;
      }, we.prototype.until = function(e, t) {
        return Tr(this._ctx, function(r, o, s) {
          return !e(r.value) || (o(s), t);
        }), this;
      }, we.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, we.prototype.last = function(e) {
        return this.reverse().first(e);
      }, we.prototype.filter = function(e) {
        var t;
        return Tr(this._ctx, function(r) {
          return e(r.value);
        }), (t = this._ctx).isMatch = Ht(t.isMatch, e), this;
      }, we.prototype.and = function(e) {
        return this.filter(e);
      }, we.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, we.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, we.prototype.desc = function() {
        return this.reverse();
      }, we.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.key, o);
        });
      }, we.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, we.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.primaryKey, o);
        });
      }, we.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(o, s) {
          r.push(s.key);
        }).then(function() {
          return r;
        }).then(e);
      }, we.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && cn(t, !0) && 0 < t.limit) return this._read(function(o) {
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
      }, we.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, we.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, we.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, we.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return Tr(this._ctx, function(s) {
          var o = s.primaryKey.toString(), s = G(t, o);
          return t[o] = !0, !s;
        }), this;
      }, we.prototype.modify = function(e) {
        var t = this, r = this._ctx;
        return this._write(function(o) {
          var s, c, f;
          f = typeof e == "function" ? e : (s = v(e), c = s.length, function(C) {
            for (var O = !1, N = 0; N < c; ++N) {
              var R = s[N], q = e[R], Y = ie(C, R);
              q instanceof vn ? (oe(C, R, q.execute(Y)), O = !0) : Y !== q && (oe(C, R, q), O = !0);
            }
            return O;
          });
          var p = r.table.core, h = p.schema.primaryKey, m = h.outbound, g = h.extractKey, _ = 200, h = t.db._options.modifyChunkSize;
          h && (_ = typeof h == "object" ? h[p.name] || h["*"] || 200 : h);
          function T(C, R) {
            var N = R.failures, R = R.numFailures;
            b += C - R;
            for (var q = 0, Y = v(N); q < Y.length; q++) {
              var U = Y[q];
              y.push(N[U]);
            }
          }
          var y = [], b = 0, E = [], S = e === Ei;
          return t.clone().primaryKeys().then(function(C) {
            function O(R) {
              var q = Math.min(_, C.length - R), Y = C.slice(R, R + q);
              return (S ? Promise.resolve([]) : p.getMany({ trans: o, keys: Y, cache: "immutable" })).then(function(U) {
                var H = [], z = [], X = m ? [] : null, ee = S ? Y : [];
                if (!S) for (var fe = 0; fe < q; ++fe) {
                  var ge = U[fe], le = { value: Ge(ge), primKey: C[R + fe] };
                  f.call(le, le.value, le) !== !1 && (le.value == null ? ee.push(C[R + fe]) : m || ve(g(ge), g(le.value)) === 0 ? (z.push(le.value), m && X.push(C[R + fe])) : (ee.push(C[R + fe]), H.push(le.value)));
                }
                return Promise.resolve(0 < H.length && p.mutate({ trans: o, type: "add", values: H }).then(function(Re) {
                  for (var ue in Re.failures) ee.splice(parseInt(ue), 1);
                  T(H.length, Re);
                })).then(function() {
                  return (0 < z.length || N && typeof e == "object") && p.mutate({ trans: o, type: "put", keys: X, values: z, criteria: N, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < R }).then(function(Re) {
                    return T(z.length, Re);
                  });
                }).then(function() {
                  return (0 < ee.length || N && S) && p.mutate({ trans: o, type: "delete", keys: ee, criteria: N, isAdditionalChunk: 0 < R }).then(function(Re) {
                    return Bn(r.table, ee, Re);
                  }).then(function(Re) {
                    return T(ee.length, Re);
                  });
                }).then(function() {
                  return C.length > R + q && O(R + _);
                });
              });
            }
            var N = cn(r) && r.limit === 1 / 0 && (typeof e != "function" || S) && { index: r.index, range: r.range };
            return O(0).then(function() {
              if (0 < y.length) throw new It("Error modifying one or more objects", y, b, E);
              return C.length;
            });
          });
        });
      }, we.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !cn(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(Ei) : this._write(function(r) {
          var o = e.table.core.schema.primaryKey, s = t;
          return e.table.core.count({ trans: r, query: { index: o, range: s } }).then(function(c) {
            return e.table.core.mutate({ trans: r, type: "deleteRange", range: s }).then(function(m) {
              var p = m.failures, m = m.numFailures;
              if (m) throw new It("Could not delete some values", Object.keys(p).map(function(g) {
                return p[g];
              }), c - m);
              return c - m;
            });
          });
        });
      }, we);
      function we() {
      }
      var Ei = function(e, t) {
        return t.value = null;
      };
      function Yo(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function Qo(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function st(e, t, r) {
        return e = e instanceof Ci ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function ln(e) {
        return new e.Collection(e, function() {
          return Ti("");
        }).limit(0);
      }
      function Un(e, t, r, o) {
        var s, c, f, p, m, g, _, h = r.length;
        if (!r.every(function(b) {
          return typeof b == "string";
        })) return st(e, mi);
        function T(b) {
          s = b === "next" ? function(S) {
            return S.toUpperCase();
          } : function(S) {
            return S.toLowerCase();
          }, c = b === "next" ? function(S) {
            return S.toLowerCase();
          } : function(S) {
            return S.toUpperCase();
          }, f = b === "next" ? Yo : Qo;
          var E = r.map(function(S) {
            return { lower: c(S), upper: s(S) };
          }).sort(function(S, C) {
            return f(S.lower, C.lower);
          });
          p = E.map(function(S) {
            return S.upper;
          }), m = E.map(function(S) {
            return S.lower;
          }), _ = (g = b) === "next" ? "" : o;
        }
        T("next"), e = new e.Collection(e, function() {
          return Rt(p[0], m[h - 1] + o);
        }), e._ondirectionchange = function(b) {
          T(b);
        };
        var y = 0;
        return e._addAlgorithm(function(b, E, S) {
          var C = b.key;
          if (typeof C != "string") return !1;
          var O = c(C);
          if (t(O, m, y)) return !0;
          for (var N = null, R = y; R < h; ++R) {
            var q = function(Y, U, H, z, X, ee) {
              for (var fe = Math.min(Y.length, z.length), ge = -1, le = 0; le < fe; ++le) {
                var Re = U[le];
                if (Re !== z[le]) return X(Y[le], H[le]) < 0 ? Y.substr(0, le) + H[le] + H.substr(le + 1) : X(Y[le], z[le]) < 0 ? Y.substr(0, le) + z[le] + H.substr(le + 1) : 0 <= ge ? Y.substr(0, ge) + U[ge] + H.substr(ge + 1) : null;
                X(Y[le], Re) < 0 && (ge = le);
              }
              return fe < z.length && ee === "next" ? Y + H.substr(Y.length) : fe < Y.length && ee === "prev" ? Y.substr(0, H.length) : ge < 0 ? null : Y.substr(0, ge) + z[ge] + H.substr(ge + 1);
            }(C, O, p[R], m[R], f, g);
            q === null && N === null ? y = R + 1 : (N === null || 0 < f(N, q)) && (N = q);
          }
          return E(N !== null ? function() {
            b.continue(N + _);
          } : S), !1;
        }), e;
      }
      function Rt(e, t, r, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: o };
      }
      function Ti(e) {
        return { type: 1, lower: e, upper: e };
      }
      var Ci = (Object.defineProperty(Ve.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Ve.prototype.between = function(e, t, r, o) {
        r = r !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || o) && (!r || !o) ? ln(this) : new this.Collection(this, function() {
            return Rt(e, t, !r, !o);
          });
        } catch {
          return st(this, xt);
        }
      }, Ve.prototype.equals = function(e) {
        return e == null ? st(this, xt) : new this.Collection(this, function() {
          return Ti(e);
        });
      }, Ve.prototype.above = function(e) {
        return e == null ? st(this, xt) : new this.Collection(this, function() {
          return Rt(e, void 0, !0);
        });
      }, Ve.prototype.aboveOrEqual = function(e) {
        return e == null ? st(this, xt) : new this.Collection(this, function() {
          return Rt(e, void 0, !1);
        });
      }, Ve.prototype.below = function(e) {
        return e == null ? st(this, xt) : new this.Collection(this, function() {
          return Rt(void 0, e, !1, !0);
        });
      }, Ve.prototype.belowOrEqual = function(e) {
        return e == null ? st(this, xt) : new this.Collection(this, function() {
          return Rt(void 0, e);
        });
      }, Ve.prototype.startsWith = function(e) {
        return typeof e != "string" ? st(this, mi) : this.between(e, e + Gt, !0, !0);
      }, Ve.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Un(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], Gt);
      }, Ve.prototype.equalsIgnoreCase = function(e) {
        return Un(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, Ve.prototype.anyOfIgnoreCase = function() {
        var e = ze.apply(tt, arguments);
        return e.length === 0 ? ln(this) : Un(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, Ve.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = ze.apply(tt, arguments);
        return e.length === 0 ? ln(this) : Un(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, Gt);
      }, Ve.prototype.anyOf = function() {
        var e = this, t = ze.apply(tt, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return st(this, xt);
        }
        if (t.length === 0) return ln(this);
        var o = new this.Collection(this, function() {
          return Rt(t[0], t[t.length - 1]);
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
      }, Ve.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Ve.prototype.noneOf = function() {
        var e = ze.apply(tt, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return st(this, xt);
        }
        var t = e.reduce(function(r, o) {
          return r ? r.concat([[r[r.length - 1][1], o]]) : [[-1 / 0, o]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, Ve.prototype.inAnyRange = function(C, t) {
        var r = this, o = this._cmp, s = this._ascending, c = this._descending, f = this._min, p = this._max;
        if (C.length === 0) return ln(this);
        if (!C.every(function(O) {
          return O[0] !== void 0 && O[1] !== void 0 && s(O[0], O[1]) <= 0;
        })) return st(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", F.InvalidArgument);
        var m = !t || t.includeLowers !== !1, g = t && t.includeUppers === !0, _, h = s;
        function T(O, N) {
          return h(O[0], N[0]);
        }
        try {
          (_ = C.reduce(function(O, N) {
            for (var R = 0, q = O.length; R < q; ++R) {
              var Y = O[R];
              if (o(N[0], Y[1]) < 0 && 0 < o(N[1], Y[0])) {
                Y[0] = f(Y[0], N[0]), Y[1] = p(Y[1], N[1]);
                break;
              }
            }
            return R === q && O.push(N), O;
          }, [])).sort(T);
        } catch {
          return st(this, xt);
        }
        var y = 0, b = g ? function(O) {
          return 0 < s(O, _[y][1]);
        } : function(O) {
          return 0 <= s(O, _[y][1]);
        }, E = m ? function(O) {
          return 0 < c(O, _[y][0]);
        } : function(O) {
          return 0 <= c(O, _[y][0]);
        }, S = b, C = new this.Collection(this, function() {
          return Rt(_[0][0], _[_.length - 1][1], !m, !g);
        });
        return C._ondirectionchange = function(O) {
          h = O === "next" ? (S = b, s) : (S = E, c), _.sort(T);
        }, C._addAlgorithm(function(O, N, R) {
          for (var q, Y = O.key; S(Y); ) if (++y === _.length) return N(R), !1;
          return !b(q = Y) && !E(q) || (r._cmp(Y, _[y][1]) === 0 || r._cmp(Y, _[y][0]) === 0 || N(function() {
            h === s ? O.continue(_[y][0]) : O.continue(_[y][1]);
          }), !1);
        }), C;
      }, Ve.prototype.startsWithAnyOf = function() {
        var e = ze.apply(tt, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? ln(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + Gt];
        })) : st(this, "startsWithAnyOf() only works with strings");
      }, Ve);
      function Ve() {
      }
      function yt(e) {
        return Oe(function(t) {
          return gn(t), e(t.target.error), !1;
        });
      }
      function gn(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var bn = "storagemutated", Ar = "x-storagemutated-1", kt = mn(null, bn), Xo = (vt.prototype._lock = function() {
        return pe(!ne.global), ++this._reculock, this._reculock !== 1 || ne.global || (ne.lockOwnerFor = this), this;
      }, vt.prototype._unlock = function() {
        if (pe(!ne.global), --this._reculock == 0) for (ne.global || (ne.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Ut(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, vt.prototype._locked = function() {
        return this._reculock && ne.lockOwnerFor !== this;
      }, vt.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var r = this.db.idbdb, o = this.db._state.dbOpenError;
        if (pe(!this.idbtrans), !e && !r) switch (o && o.name) {
          case "DatabaseClosedError":
            throw new F.DatabaseClosed(o);
          case "MissingAPIError":
            throw new F.MissingAPI(o.message, o);
          default:
            throw new F.OpenFailed(o);
        }
        if (!this.active) throw new F.TransactionInactive();
        return pe(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Oe(function(s) {
          gn(s), t._reject(e.error);
        }), e.onabort = Oe(function(s) {
          gn(s), t.active && t._reject(new F.Abort(e.error)), t.active = !1, t.on("abort").fire(s);
        }), e.oncomplete = Oe(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && kt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, vt.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return je(new F.ReadOnly("Transaction is readonly"));
        if (!this.active) return je(new F.TransactionInactive());
        if (this._locked()) return new J(function(c, f) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, r).then(c, f);
          }, ne]);
        });
        if (r) return Ot(function() {
          var c = new J(function(f, p) {
            o._lock();
            var m = t(f, p, o);
            m && m.then && m.then(f, p);
          });
          return c.finally(function() {
            return o._unlock();
          }), c._lib = !0, c;
        });
        var s = new J(function(c, f) {
          var p = t(c, f, o);
          p && p.then && p.then(c, f);
        });
        return s._lib = !0, s;
      }, vt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, vt.prototype.waitFor = function(e) {
        var t, r = this._root(), o = J.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return o;
        }) : (r._waitingFor = o, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function c() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (t.get(-1 / 0).onsuccess = c);
        }());
        var s = r._waitingFor;
        return new J(function(c, f) {
          o.then(function(p) {
            return r._waitingQueue.push(Oe(c.bind(null, p)));
          }, function(p) {
            return r._waitingQueue.push(Oe(f.bind(null, p)));
          }).finally(function() {
            r._waitingFor === s && (r._waitingFor = null);
          });
        });
      }, vt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new F.Abort()));
      }, vt.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (G(t, e)) return t[e];
        var r = this.schema[e];
        if (!r) throw new F.NotFound("Table " + e + " not part of transaction");
        return r = new this.db.Table(e, r, this), r.core = this.db.core.table(e), t[e] = r;
      }, vt);
      function vt() {
      }
      function Pr(e, t, r, o, s, c, f, p) {
        return { name: e, keyPath: t, unique: r, multi: o, auto: s, compound: c, src: (r && !f ? "&" : "") + (o ? "*" : "") + (s ? "++" : "") + Ai(t), type: p };
      }
      function Ai(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Ir(e, t, r) {
        return { name: e, primKey: t, indexes: r, mappedClass: null, idxByName: (o = function(s) {
          return [s.name, s];
        }, r.reduce(function(s, c, f) {
          return f = o(c, f), f && (s[f[0]] = f[1]), s;
        }, {})) };
        var o;
      }
      var wn = function(e) {
        try {
          return e.only([[]]), wn = function() {
            return [[]];
          }, [[]];
        } catch {
          return wn = function() {
            return Gt;
          }, Gt;
        }
      };
      function Or(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(r) {
          return r[t];
        } : function(r) {
          return ie(r, t);
        } : function(r) {
          return ie(r, e);
        };
        var t;
      }
      function Pi(e) {
        return [].slice.call(e);
      }
      var zo = 0;
      function _n(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Jo(e, t, m) {
        function o(S) {
          if (S.type === 3) return null;
          if (S.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var y = S.lower, b = S.upper, E = S.lowerOpen, S = S.upperOpen;
          return y === void 0 ? b === void 0 ? null : t.upperBound(b, !!S) : b === void 0 ? t.lowerBound(y, !!E) : t.bound(y, b, !!E, !!S);
        }
        function s(T) {
          var y, b = T.name;
          return { name: b, schema: T, mutate: function(E) {
            var S = E.trans, C = E.type, O = E.keys, N = E.values, R = E.range;
            return new Promise(function(q, Y) {
              q = Oe(q);
              var U = S.objectStore(b), H = U.keyPath == null, z = C === "put" || C === "add";
              if (!z && C !== "delete" && C !== "deleteRange") throw new Error("Invalid operation type: " + C);
              var X, ee = (O || N || { length: 1 }).length;
              if (O && N && O.length !== N.length) throw new Error("Given keys array must have same length as given values array.");
              if (ee === 0) return q({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function fe(Ze) {
                ++Re, gn(Ze);
              }
              var ge = [], le = [], Re = 0;
              if (C === "deleteRange") {
                if (R.type === 4) return q({ numFailures: Re, failures: le, results: [], lastResult: void 0 });
                R.type === 3 ? ge.push(X = U.clear()) : ge.push(X = U.delete(o(R)));
              } else {
                var H = z ? H ? [N, O] : [N, null] : [O, null], ue = H[0], We = H[1];
                if (z) for (var Ye = 0; Ye < ee; ++Ye) ge.push(X = We && We[Ye] !== void 0 ? U[C](ue[Ye], We[Ye]) : U[C](ue[Ye])), X.onerror = fe;
                else for (Ye = 0; Ye < ee; ++Ye) ge.push(X = U[C](ue[Ye])), X.onerror = fe;
              }
              function nr(Ze) {
                Ze = Ze.target.result, ge.forEach(function(Qt, Yr) {
                  return Qt.error != null && (le[Yr] = Qt.error);
                }), q({ numFailures: Re, failures: le, results: C === "delete" ? O : ge.map(function(Qt) {
                  return Qt.result;
                }), lastResult: Ze });
              }
              X.onerror = function(Ze) {
                fe(Ze), nr(Ze);
              }, X.onsuccess = nr;
            });
          }, getMany: function(E) {
            var S = E.trans, C = E.keys;
            return new Promise(function(O, N) {
              O = Oe(O);
              for (var R, q = S.objectStore(b), Y = C.length, U = new Array(Y), H = 0, z = 0, X = function(ge) {
                ge = ge.target, U[ge._pos] = ge.result, ++z === H && O(U);
              }, ee = yt(N), fe = 0; fe < Y; ++fe) C[fe] != null && ((R = q.get(C[fe]))._pos = fe, R.onsuccess = X, R.onerror = ee, ++H);
              H === 0 && O(U);
            });
          }, get: function(E) {
            var S = E.trans, C = E.key;
            return new Promise(function(O, N) {
              O = Oe(O);
              var R = S.objectStore(b).get(C);
              R.onsuccess = function(q) {
                return O(q.target.result);
              }, R.onerror = yt(N);
            });
          }, query: (y = g, function(E) {
            return new Promise(function(S, C) {
              S = Oe(S);
              var O, N, R, H = E.trans, q = E.values, Y = E.limit, X = E.query, U = Y === 1 / 0 ? void 0 : Y, z = X.index, X = X.range, H = H.objectStore(b), z = z.isPrimaryKey ? H : H.index(z.name), X = o(X);
              if (Y === 0) return S({ result: [] });
              y ? ((U = q ? z.getAll(X, U) : z.getAllKeys(X, U)).onsuccess = function(ee) {
                return S({ result: ee.target.result });
              }, U.onerror = yt(C)) : (O = 0, N = !q && "openKeyCursor" in z ? z.openKeyCursor(X) : z.openCursor(X), R = [], N.onsuccess = function(ee) {
                var fe = N.result;
                return fe ? (R.push(q ? fe.value : fe.primaryKey), ++O === Y ? S({ result: R }) : void fe.continue()) : S({ result: R });
              }, N.onerror = yt(C));
            });
          }), openCursor: function(E) {
            var S = E.trans, C = E.values, O = E.query, N = E.reverse, R = E.unique;
            return new Promise(function(q, Y) {
              q = Oe(q);
              var z = O.index, U = O.range, H = S.objectStore(b), H = z.isPrimaryKey ? H : H.index(z.name), z = N ? R ? "prevunique" : "prev" : R ? "nextunique" : "next", X = !C && "openKeyCursor" in H ? H.openKeyCursor(o(U), z) : H.openCursor(o(U), z);
              X.onerror = yt(Y), X.onsuccess = Oe(function(ee) {
                var fe, ge, le, Re, ue = X.result;
                ue ? (ue.___id = ++zo, ue.done = !1, fe = ue.continue.bind(ue), ge = (ge = ue.continuePrimaryKey) && ge.bind(ue), le = ue.advance.bind(ue), Re = function() {
                  throw new Error("Cursor not stopped");
                }, ue.trans = S, ue.stop = ue.continue = ue.continuePrimaryKey = ue.advance = function() {
                  throw new Error("Cursor not started");
                }, ue.fail = Oe(Y), ue.next = function() {
                  var We = this, Ye = 1;
                  return this.start(function() {
                    return Ye-- ? We.continue() : We.stop();
                  }).then(function() {
                    return We;
                  });
                }, ue.start = function(We) {
                  function Ye() {
                    if (X.result) try {
                      We();
                    } catch (Ze) {
                      ue.fail(Ze);
                    }
                    else ue.done = !0, ue.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ue.stop();
                  }
                  var nr = new Promise(function(Ze, Qt) {
                    Ze = Oe(Ze), X.onerror = yt(Qt), ue.fail = Qt, ue.stop = function(Yr) {
                      ue.stop = ue.continue = ue.continuePrimaryKey = ue.advance = Re, Ze(Yr);
                    };
                  });
                  return X.onsuccess = Oe(function(Ze) {
                    X.onsuccess = Ye, Ye();
                  }), ue.continue = fe, ue.continuePrimaryKey = ge, ue.advance = le, Ye(), nr;
                }, q(ue)) : q(null);
              }, Y);
            });
          }, count: function(E) {
            var S = E.query, C = E.trans, O = S.index, N = S.range;
            return new Promise(function(R, q) {
              var Y = C.objectStore(b), U = O.isPrimaryKey ? Y : Y.index(O.name), Y = o(N), U = Y ? U.count(Y) : U.count();
              U.onsuccess = Oe(function(H) {
                return R(H.target.result);
              }), U.onerror = yt(q);
            });
          } };
        }
        var c, f, p, _ = (f = m, p = Pi((c = e).objectStoreNames), { schema: { name: c.name, tables: p.map(function(T) {
          return f.objectStore(T);
        }).map(function(T) {
          var y = T.keyPath, S = T.autoIncrement, b = x(y), E = {}, S = { name: T.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: y == null, compound: b, keyPath: y, autoIncrement: S, unique: !0, extractKey: Or(y) }, indexes: Pi(T.indexNames).map(function(C) {
            return T.index(C);
          }).map(function(R) {
            var O = R.name, N = R.unique, q = R.multiEntry, R = R.keyPath, q = { name: O, compound: x(R), keyPath: R, unique: N, multiEntry: q, extractKey: Or(R) };
            return E[_n(R)] = q;
          }), getIndexByKeyPath: function(C) {
            return E[_n(C)];
          } };
          return E[":id"] = S.primaryKey, y != null && (E[_n(y)] = S.primaryKey), S;
        }) }, hasGetAll: 0 < p.length && "getAll" in f.objectStore(p[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), m = _.schema, g = _.hasGetAll, _ = m.tables.map(s), h = {};
        return _.forEach(function(T) {
          return h[T.name] = T;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(T) {
          if (!h[T]) throw new Error("Table '".concat(T, "' not found"));
          return h[T];
        }, MIN_KEY: -1 / 0, MAX_KEY: wn(t), schema: m };
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
            var p = function m(g, _) {
              return Ce(g, _) || (g = W(g)) && m(g, _);
            }(f, s);
            (!p || "value" in p && p.value === void 0) && (f === e.Transaction.prototype || f instanceof e.Transaction ? de(f, s, { get: function() {
              return this.table(s);
            }, set: function(m) {
              se(this, s, { value: m, writable: !0, configurable: !0, enumerable: !0 });
            } }) : f[s] = new e.Table(s, c));
          });
        });
      }
      function Dr(e, t) {
        t.forEach(function(r) {
          for (var o in r) r[o] instanceof e.Table && delete r[o];
        });
      }
      function es(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function ts(e, t, r, o) {
        var s = e._dbSchema;
        r.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = Ir("$meta", Oi("")[0], []), e._storeNames.push("$meta"));
        var c = e._createTransaction("readwrite", e._storeNames, s);
        c.create(r), c._completion.catch(o);
        var f = c._reject.bind(c), p = ne.transless || ne;
        Ot(function() {
          return ne.trans = c, ne.transless = p, t !== 0 ? (Gn(e, r), g = t, ((m = c).storeNames.includes("$meta") ? m.table("$meta").get("version").then(function(_) {
            return _ ?? g;
          }) : J.resolve(g)).then(function(_) {
            return T = _, y = c, b = r, E = [], _ = (h = e)._versions, S = h._dbSchema = Yn(0, h.idbdb, b), (_ = _.filter(function(C) {
              return C._cfg.version >= T;
            })).length !== 0 ? (_.forEach(function(C) {
              E.push(function() {
                var O = S, N = C._cfg.dbschema;
                Qn(h, O, b), Qn(h, N, b), S = h._dbSchema = N;
                var R = Nr(O, N);
                R.add.forEach(function(z) {
                  Rr(b, z[0], z[1].primKey, z[1].indexes);
                }), R.change.forEach(function(z) {
                  if (z.recreate) throw new F.Upgrade("Not yet support for changing primary key");
                  var X = b.objectStore(z.name);
                  z.add.forEach(function(ee) {
                    return Wn(X, ee);
                  }), z.change.forEach(function(ee) {
                    X.deleteIndex(ee.name), Wn(X, ee);
                  }), z.del.forEach(function(ee) {
                    return X.deleteIndex(ee);
                  });
                });
                var q = C._cfg.contentUpgrade;
                if (q && C._cfg.version > T) {
                  Gn(h, b), y._memoizedTables = {};
                  var Y = Ee(N);
                  R.del.forEach(function(z) {
                    Y[z] = O[z];
                  }), Dr(h, [h.Transaction.prototype]), Hn(h, [h.Transaction.prototype], v(Y), Y), y.schema = Y;
                  var U, H = at(q);
                  return H && an(), R = J.follow(function() {
                    var z;
                    (U = q(y)) && H && (z = Dt.bind(null, null), U.then(z, z));
                  }), U && typeof U.then == "function" ? J.resolve(U) : R.then(function() {
                    return U;
                  });
                }
              }), E.push(function(O) {
                var N, R, q = C._cfg.dbschema;
                N = q, R = O, [].slice.call(R.db.objectStoreNames).forEach(function(Y) {
                  return N[Y] == null && R.db.deleteObjectStore(Y);
                }), Dr(h, [h.Transaction.prototype]), Hn(h, [h.Transaction.prototype], h._storeNames, h._dbSchema), y.schema = h._dbSchema;
              }), E.push(function(O) {
                h.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(h.idbdb.version / 10) === C._cfg.version ? (h.idbdb.deleteObjectStore("$meta"), delete h._dbSchema.$meta, h._storeNames = h._storeNames.filter(function(N) {
                  return N !== "$meta";
                })) : O.objectStore("$meta").put(C._cfg.version, "version"));
              });
            }), function C() {
              return E.length ? J.resolve(E.shift()(y.idbtrans)).then(C) : J.resolve();
            }().then(function() {
              Ii(S, b);
            })) : J.resolve();
            var h, T, y, b, E, S;
          }).catch(f)) : (v(s).forEach(function(_) {
            Rr(r, _, s[_].primKey, s[_].indexes);
          }), Gn(e, r), void J.follow(function() {
            return e.on.populate.fire(c);
          }).catch(f));
          var m, g;
        });
      }
      function ns(e, t) {
        Ii(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var r = Yn(0, e.idbdb, t);
        Qn(e, e._dbSchema, t);
        for (var o = 0, s = Nr(r, e._dbSchema).change; o < s.length; o++) {
          var c = function(f) {
            if (f.change.length || f.recreate) return console.warn("Unable to patch indexes of table ".concat(f.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var p = t.objectStore(f.name);
            f.add.forEach(function(m) {
              Q && console.debug("Dexie upgrade patch: Creating missing index ".concat(f.name, ".").concat(m.src)), Wn(p, m);
            });
          }(s[o]);
          if (typeof c == "object") return c.value;
        }
      }
      function Nr(e, t) {
        var r, o = { del: [], add: [], change: [] };
        for (r in e) t[r] || o.del.push(r);
        for (r in t) {
          var s = e[r], c = t[r];
          if (s) {
            var f = { name: r, def: c, recreate: !1, del: [], add: [], change: [] };
            if ("" + (s.primKey.keyPath || "") != "" + (c.primKey.keyPath || "") || s.primKey.auto !== c.primKey.auto) f.recreate = !0, o.change.push(f);
            else {
              var p = s.idxByName, m = c.idxByName, g = void 0;
              for (g in p) m[g] || f.del.push(g);
              for (g in m) {
                var _ = p[g], h = m[g];
                _ ? _.src !== h.src && f.change.push(h) : f.add.push(h);
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
      function Ii(e, t) {
        v(e).forEach(function(r) {
          t.db.objectStoreNames.contains(r) || (Q && console.debug("Dexie: Creating missing table", r), Rr(t, r, e[r].primKey, e[r].indexes));
        });
      }
      function Wn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function Yn(e, t, r) {
        var o = {};
        return ye(t.objectStoreNames, 0).forEach(function(s) {
          for (var c = r.objectStore(s), f = Pr(Ai(g = c.keyPath), g || "", !0, !1, !!c.autoIncrement, g && typeof g != "string", !0), p = [], m = 0; m < c.indexNames.length; ++m) {
            var _ = c.index(c.indexNames[m]), g = _.keyPath, _ = Pr(_.name, g, !!_.unique, !!_.multiEntry, !1, g && typeof g != "string", !1);
            p.push(_);
          }
          o[s] = Ir(s, f, p);
        }), o;
      }
      function Qn(e, t, r) {
        for (var o = r.db.objectStoreNames, s = 0; s < o.length; ++s) {
          var c = o[s], f = r.objectStore(c);
          e._hasGetAll = "getAll" in f;
          for (var p = 0; p < f.indexNames.length; ++p) {
            var m = f.indexNames[p], g = f.index(m).keyPath, _ = typeof g == "string" ? g : "[" + ye(g).join("+") + "]";
            !t[c] || (g = t[c].idxByName[_]) && (g.name = m, delete t[c].idxByName[_], t[c].idxByName[m] = g);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && d.WorkerGlobalScope && d instanceof d.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Oi(e) {
        return e.split(",").map(function(t, r) {
          var c = t.split(":"), o = (s = c[1]) === null || s === void 0 ? void 0 : s.trim(), s = (t = c[0].trim()).replace(/([&*]|\+\+)/g, ""), c = /^\[/.test(s) ? s.match(/^\[(.*)\]$/)[1].split("+") : s;
          return Pr(s, c || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), x(c), r === 0, o);
        });
      }
      var rs = (fn.prototype._createTableSchema = Ir, fn.prototype._parseIndexSyntax = Oi, fn.prototype._parseStoresSpec = function(e, t) {
        var r = this;
        v(e).forEach(function(o) {
          if (e[o] !== null) {
            var s = r._parseIndexSyntax(e[o]), c = s.shift();
            if (!c) throw new F.Schema("Invalid schema for table " + o + ": " + e[o]);
            if (c.unique = !0, c.multi) throw new F.Schema("Primary key cannot be multiEntry*");
            s.forEach(function(f) {
              if (f.auto) throw new F.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!f.keyPath) throw new F.Schema("Index must have a name and cannot be an empty string");
            }), s = r._createTableSchema(o, c, s), t[o] = s;
          }
        });
      }, fn.prototype.stores = function(r) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? D(this._cfg.storesSource, r) : r;
        var r = t._versions, o = {}, s = {};
        return r.forEach(function(c) {
          D(o, c._cfg.storesSource), s = c._cfg.dbschema = {}, c._parseStoresSpec(o, s);
        }), t._dbSchema = s, Dr(t, [t._allTables, t, t.Transaction.prototype]), Hn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], v(s), s), t._storeNames = v(s), this;
      }, fn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = te(this._cfg.contentUpgrade || A, e), this;
      }, fn);
      function fn() {
      }
      function kr(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new Et(Kn, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function Fr(e) {
        return e && typeof e.databases == "function";
      }
      function jr(e) {
        return Ot(function() {
          return ne.letThrough = !0, e();
        });
      }
      function Lr(e) {
        return !("from" in e);
      }
      var He = function(e, t) {
        if (!this) {
          var r = new He();
          return e && "d" in e && D(r, e), r;
        }
        D(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function Sn(e, t, r) {
        var o = ve(t, r);
        if (!isNaN(o)) {
          if (0 < o) throw RangeError();
          if (Lr(e)) return D(e, { from: t, to: r, d: 1 });
          var s = e.l, o = e.r;
          if (ve(r, e.from) < 0) return s ? Sn(s, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, Ni(e);
          if (0 < ve(t, e.to)) return o ? Sn(o, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, Ni(e);
          ve(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < ve(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, s && !e.l && xn(e, s), o && r && xn(e, o);
        }
      }
      function xn(e, t) {
        Lr(t) || function r(o, m) {
          var c = m.from, f = m.to, p = m.l, m = m.r;
          Sn(o, c, f), p && r(o, p), m && r(o, m);
        }(e, t);
      }
      function Di(e, t) {
        var r = Xn(t), o = r.next();
        if (o.done) return !1;
        for (var s = o.value, c = Xn(e), f = c.next(s.from), p = f.value; !o.done && !f.done; ) {
          if (ve(p.from, s.to) <= 0 && 0 <= ve(p.to, s.from)) return !0;
          ve(s.from, p.from) < 0 ? s = (o = r.next(p.from)).value : p = (f = c.next(s.from)).value;
        }
        return !1;
      }
      function Xn(e) {
        var t = Lr(e) ? null : { s: 0, n: e };
        return { next: function(r) {
          for (var o = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, o) for (; t.n.l && ve(r, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !o || ve(r, t.n.to) <= 0) return { value: t.n, done: !1 };
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
      function Ni(e) {
        var t, r, o = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((r = e.l) === null || r === void 0 ? void 0 : r.d) || 0), s = 1 < o ? "r" : o < -1 ? "l" : "";
        s && (t = s == "r" ? "l" : "r", r = u({}, e), o = e[s], e.from = o.from, e.to = o.to, e[s] = o[s], r[s] = o[t], (e[t] = r).d = Ri(r)), e.d = Ri(e);
      }
      function Ri(r) {
        var t = r.r, r = r.l;
        return (t ? r ? Math.max(t.d, r.d) : t.d : r ? r.d : 0) + 1;
      }
      function zn(e, t) {
        return v(t).forEach(function(r) {
          e[r] ? xn(e[r], t[r]) : e[r] = function o(s) {
            var c, f, p = {};
            for (c in s) G(s, c) && (f = s[c], p[c] = !f || typeof f != "object" || it.has(f.constructor) ? f : o(f));
            return p;
          }(t[r]);
        }), e;
      }
      function Mr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && Di(t[r], e[r]);
        });
      }
      re(He.prototype, ((dt = { add: function(e) {
        return xn(this, e), this;
      }, addKey: function(e) {
        return Sn(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(r) {
          return Sn(t, r, r);
        }), this;
      }, hasKey: function(e) {
        var t = Xn(this).next(e).value;
        return t && ve(t.from, e) <= 0 && 0 <= ve(t.to, e);
      } })[Ue] = function() {
        return Xn(this);
      }, dt));
      var Wt = {}, Kr = {}, qr = !1;
      function Jn(e) {
        zn(Kr, e), qr || (qr = !0, setTimeout(function() {
          qr = !1, Br(Kr, !(Kr = {}));
        }, 0));
      }
      function Br(e, t) {
        t === void 0 && (t = !1);
        var r = /* @__PURE__ */ new Set();
        if (e.all) for (var o = 0, s = Object.values(Wt); o < s.length; o++) ki(f = s[o], e, r, t);
        else for (var c in e) {
          var f, p = /^idb\:\/\/(.*)\/(.*)\//.exec(c);
          p && (c = p[1], p = p[2], (f = Wt["idb://".concat(c, "/").concat(p)]) && ki(f, e, r, t));
        }
        r.forEach(function(m) {
          return m();
        });
      }
      function ki(e, t, r, o) {
        for (var s = [], c = 0, f = Object.entries(e.queries.query); c < f.length; c++) {
          for (var p = f[c], m = p[0], g = [], _ = 0, h = p[1]; _ < h.length; _++) {
            var T = h[_];
            Mr(t, T.obsSet) ? T.subscribers.forEach(function(S) {
              return r.add(S);
            }) : o && g.push(T);
          }
          o && s.push([m, g]);
        }
        if (o) for (var y = 0, b = s; y < b.length; y++) {
          var E = b[y], m = E[0], g = E[1];
          e.queries.query[m] = g;
        }
      }
      function is(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? je(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, s = Math.round(10 * e.verno), c = !1;
        function f() {
          if (t.openCanceller !== o) throw new F.DatabaseClosed("db.open() was cancelled");
        }
        function p() {
          return new J(function(T, y) {
            if (f(), !r) throw new F.MissingAPI();
            var b = e.name, E = t.autoSchema || !s ? r.open(b) : r.open(b, s);
            if (!E) throw new F.MissingAPI();
            E.onerror = yt(y), E.onblocked = Oe(e._fireOnBlocked), E.onupgradeneeded = Oe(function(S) {
              var C;
              _ = E.transaction, t.autoSchema && !e._options.allowEmptyDB ? (E.onerror = gn, _.abort(), E.result.close(), (C = r.deleteDatabase(b)).onsuccess = C.onerror = Oe(function() {
                y(new F.NoSuchDatabase("Database ".concat(b, " doesnt exist")));
              })) : (_.onerror = yt(y), S = S.oldVersion > Math.pow(2, 62) ? 0 : S.oldVersion, h = S < 1, e.idbdb = E.result, c && ns(e, _), ts(e, S / 10, _, y));
            }, y), E.onsuccess = Oe(function() {
              _ = null;
              var S, C, O, N, R, q = e.idbdb = E.result, Y = ye(q.objectStoreNames);
              if (0 < Y.length) try {
                var U = q.transaction((N = Y).length === 1 ? N[0] : N, "readonly");
                if (t.autoSchema) C = q, O = U, (S = e).verno = C.version / 10, O = S._dbSchema = Yn(0, C, O), S._storeNames = ye(C.objectStoreNames, 0), Hn(S, [S._allTables], v(O), O);
                else if (Qn(e, e._dbSchema, U), ((R = Nr(Yn(0, (R = e).idbdb, U), R._dbSchema)).add.length || R.change.some(function(H) {
                  return H.add.length || H.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), q.close(), s = q.version + 1, c = !0, T(p());
                Gn(e, U);
              } catch {
              }
              un.push(e), q.onversionchange = Oe(function(H) {
                t.vcFired = !0, e.on("versionchange").fire(H);
              }), q.onclose = Oe(function(H) {
                e.on("close").fire(H);
              }), h && (R = e._deps, U = b, q = R.indexedDB, R = R.IDBKeyRange, Fr(q) || U === Kn || kr(q, R).put({ name: U }).catch(A)), T();
            }, y);
          }).catch(function(T) {
            switch (T?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), p();
                break;
              case "VersionError":
                if (0 < s) return s = 0, p();
            }
            return J.reject(T);
          });
        }
        var m, g = t.dbReadyResolve, _ = null, h = !1;
        return J.race([o, (typeof navigator > "u" ? J.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(T) {
          function y() {
            return indexedDB.databases().finally(T);
          }
          m = setInterval(y, 100), y();
        }).finally(function() {
          return clearInterval(m);
        }) : Promise.resolve()).then(p)]).then(function() {
          return f(), t.onReadyBeingFired = [], J.resolve(jr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function T() {
            if (0 < t.onReadyBeingFired.length) {
              var y = t.onReadyBeingFired.reduce(te, A);
              return t.onReadyBeingFired = [], J.resolve(jr(function() {
                return y(e.vip);
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
          return o === t.openCanceller && e._close(), je(T);
        }).finally(function() {
          t.openComplete = !0, g();
        }).then(function() {
          var T;
          return h && (T = {}, e.tables.forEach(function(y) {
            y.schema.indexes.forEach(function(b) {
              b.name && (T["idb://".concat(e.name, "/").concat(y.name, "/").concat(b.name)] = new He(-1 / 0, [[[]]]));
            }), T["idb://".concat(e.name, "/").concat(y.name, "/")] = T["idb://".concat(e.name, "/").concat(y.name, "/:dels")] = new He(-1 / 0, [[[]]]);
          }), kt(bn).fire(T), Br(T, !0)), e;
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
            return p.done ? m : m && typeof m.then == "function" ? m.then(r, o) : x(m) ? Promise.all(m).then(r, o) : r(m);
          };
        }
        return s(t)();
      }
      function Zn(e, t, r) {
        for (var o = x(e) ? e.slice() : [e], s = 0; s < r; ++s) o.push(t);
        return o;
      }
      var os = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema, s = {}, c = [];
          function f(h, T, y) {
            var b = _n(h), E = s[b] = s[b] || [], S = h == null ? 0 : typeof h == "string" ? 1 : h.length, C = 0 < T, C = u(u({}, y), { name: C ? "".concat(b, "(virtual-from:").concat(y.name, ")") : y.name, lowLevelIndex: y, isVirtual: C, keyTail: T, keyLength: S, extractKey: Or(h), unique: !C && y.unique });
            return E.push(C), C.isPrimaryKey || c.push(C), 1 < S && f(S === 2 ? h[0] : h.slice(0, S - 1), T + 1, y), E.sort(function(O, N) {
              return O.keyTail - N.keyTail;
            }), C;
          }
          t = f(o.primaryKey.keyPath, 0, o.primaryKey), s[":id"] = [t];
          for (var p = 0, m = o.indexes; p < m.length; p++) {
            var g = m[p];
            f(g.keyPath, 0, g);
          }
          function _(h) {
            var T, y = h.query.index;
            return y.isVirtual ? u(u({}, h), { query: { index: y.lowLevelIndex, range: (T = h.query.range, y = y.keyTail, { type: T.type === 1 ? 2 : T.type, lower: Zn(T.lower, T.lowerOpen ? e.MAX_KEY : e.MIN_KEY, y), lowerOpen: !0, upper: Zn(T.upper, T.upperOpen ? e.MIN_KEY : e.MAX_KEY, y), upperOpen: !0 }) } }) : h;
          }
          return u(u({}, r), { schema: u(u({}, o), { primaryKey: t, indexes: c, getIndexByKeyPath: function(h) {
            return (h = s[_n(h)]) && h[0];
          } }), count: function(h) {
            return r.count(_(h));
          }, query: function(h) {
            return r.query(_(h));
          }, openCursor: function(h) {
            var T = h.query.index, y = T.keyTail, b = T.isVirtual, E = T.keyLength;
            return b ? r.openCursor(_(h)).then(function(C) {
              return C && S(C);
            }) : r.openCursor(h);
            function S(C) {
              return Object.create(C, { continue: { value: function(O) {
                O != null ? C.continue(Zn(O, h.reverse ? e.MAX_KEY : e.MIN_KEY, y)) : h.unique ? C.continue(C.key.slice(0, E).concat(h.reverse ? e.MIN_KEY : e.MAX_KEY, y)) : C.continue();
              } }, continuePrimaryKey: { value: function(O, N) {
                C.continuePrimaryKey(Zn(O, e.MAX_KEY, y), N);
              } }, primaryKey: { get: function() {
                return C.primaryKey;
              } }, key: { get: function() {
                var O = C.key;
                return E === 1 ? O[0] : O.slice(0, E);
              } }, value: { get: function() {
                return C.value;
              } } });
            }
          } });
        } });
      } };
      function Vr(e, t, r, o) {
        return r = r || {}, o = o || "", v(e).forEach(function(s) {
          var c, f, p;
          G(t, s) ? (c = e[s], f = t[s], typeof c == "object" && typeof f == "object" && c && f ? (p = wt(c)) !== wt(f) ? r[o + s] = t[s] : p === "Object" ? Vr(c, f, r, o + s + ".") : c !== f && (r[o + s] = t[s]) : c !== f && (r[o + s] = t[s])) : r[o + s] = void 0;
        }), v(t).forEach(function(s) {
          G(e, s) || (r[o + s] = t[s]);
        }), r;
      }
      function Ur(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var ss = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema.primaryKey;
          return u(u({}, r), { mutate: function(s) {
            var c = ne.trans, f = c.table(t).hook, p = f.deleting, m = f.creating, g = f.updating;
            switch (s.type) {
              case "add":
                if (m.fire === A) break;
                return c._promise("readwrite", function() {
                  return _(s);
                }, !0);
              case "put":
                if (m.fire === A && g.fire === A) break;
                return c._promise("readwrite", function() {
                  return _(s);
                }, !0);
              case "delete":
                if (p.fire === A) break;
                return c._promise("readwrite", function() {
                  return _(s);
                }, !0);
              case "deleteRange":
                if (p.fire === A) break;
                return c._promise("readwrite", function() {
                  return function h(T, y, b) {
                    return r.query({ trans: T, values: !1, query: { index: o, range: y }, limit: b }).then(function(E) {
                      var S = E.result;
                      return _({ type: "delete", keys: S, trans: T }).then(function(C) {
                        return 0 < C.numFailures ? Promise.reject(C.failures[0]) : S.length < b ? { failures: [], numFailures: 0, lastResult: void 0 } : h(T, u(u({}, y), { lower: S[S.length - 1], lowerOpen: !0 }), b);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return r.mutate(s);
            function _(h) {
              var T, y, b, E = ne.trans, S = h.keys || Ur(o, h);
              if (!S) throw new Error("Keys missing");
              return (h = h.type === "add" || h.type === "put" ? u(u({}, h), { keys: S }) : u({}, h)).type !== "delete" && (h.values = l([], h.values)), h.keys && (h.keys = l([], h.keys)), T = r, b = S, ((y = h).type === "add" ? Promise.resolve([]) : T.getMany({ trans: y.trans, keys: b, cache: "immutable" })).then(function(C) {
                var O = S.map(function(N, R) {
                  var q, Y, U, H = C[R], z = { onerror: null, onsuccess: null };
                  return h.type === "delete" ? p.fire.call(z, N, H, E) : h.type === "add" || H === void 0 ? (q = m.fire.call(z, N, h.values[R], E), N == null && q != null && (h.keys[R] = N = q, o.outbound || oe(h.values[R], o.keyPath, N))) : (q = Vr(H, h.values[R]), (Y = g.fire.call(z, q, N, H, E)) && (U = h.values[R], Object.keys(Y).forEach(function(X) {
                    G(U, X) ? U[X] = Y[X] : oe(U, X, Y[X]);
                  }))), z;
                });
                return r.mutate(h).then(function(N) {
                  for (var R = N.failures, q = N.results, Y = N.numFailures, N = N.lastResult, U = 0; U < S.length; ++U) {
                    var H = (q || S)[U], z = O[U];
                    H == null ? z.onerror && z.onerror(R[U]) : z.onsuccess && z.onsuccess(h.type === "put" && C[U] ? h.values[U] : H);
                  }
                  return { failures: R, results: q, numFailures: Y, lastResult: N };
                }).catch(function(N) {
                  return O.forEach(function(R) {
                    return R.onerror && R.onerror(N);
                  }), Promise.reject(N);
                });
              });
            }
          } });
        } });
      } };
      function Fi(e, t, r) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var o = [], s = 0, c = 0; s < t.keys.length && c < e.length; ++s) ve(t.keys[s], e[c]) === 0 && (o.push(r ? Ge(t.values[s]) : t.values[s]), ++c);
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
            var s = Fi(o.keys, o.trans._cache, o.cache === "clone");
            return s ? J.resolve(s) : r.getMany(o).then(function(c) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? Ge(c) : c }, c;
            });
          }, mutate: function(o) {
            return o.type !== "add" && (o.trans._cache = null), r.mutate(o);
          } });
        } };
      } };
      function ji(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Li(e, t) {
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
        var t = e.schema.name, r = new He(e.MIN_KEY, e.MAX_KEY);
        return u(u({}, e), { transaction: function(o, s, c) {
          if (ne.subscr && s !== "readonly") throw new F.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ne.querier));
          return e.transaction(o, s, c);
        }, table: function(o) {
          var s = e.table(o), c = s.schema, f = c.primaryKey, h = c.indexes, p = f.extractKey, m = f.outbound, g = f.autoIncrement && h.filter(function(y) {
            return y.compound && y.keyPath.includes(f.keyPath);
          }), _ = u(u({}, s), { mutate: function(y) {
            function b(X) {
              return X = "idb://".concat(t, "/").concat(o, "/").concat(X), N[X] || (N[X] = new He());
            }
            var E, S, C, O = y.trans, N = y.mutatedParts || (y.mutatedParts = {}), R = b(""), q = b(":dels"), Y = y.type, z = y.type === "deleteRange" ? [y.range] : y.type === "delete" ? [y.keys] : y.values.length < 50 ? [Ur(f, y).filter(function(X) {
              return X;
            }), y.values] : [], U = z[0], H = z[1], z = y.trans._cache;
            return x(U) ? (R.addKeys(U), (z = Y === "delete" || U.length === H.length ? Fi(U, z) : null) || q.addKeys(U), (z || H) && (E = b, S = z, C = H, c.indexes.forEach(function(X) {
              var ee = E(X.name || "");
              function fe(le) {
                return le != null ? X.extractKey(le) : null;
              }
              function ge(le) {
                return X.multiEntry && x(le) ? le.forEach(function(Re) {
                  return ee.addKey(Re);
                }) : ee.addKey(le);
              }
              (S || C).forEach(function(le, We) {
                var ue = S && fe(S[We]), We = C && fe(C[We]);
                ve(ue, We) !== 0 && (ue != null && ge(ue), We != null && ge(We));
              });
            }))) : U ? (H = { from: (H = U.lower) !== null && H !== void 0 ? H : e.MIN_KEY, to: (H = U.upper) !== null && H !== void 0 ? H : e.MAX_KEY }, q.add(H), R.add(H)) : (R.add(r), q.add(r), c.indexes.forEach(function(X) {
              return b(X.name).add(r);
            })), s.mutate(y).then(function(X) {
              return !U || y.type !== "add" && y.type !== "put" || (R.addKeys(X.results), g && g.forEach(function(ee) {
                for (var fe = y.values.map(function(ue) {
                  return ee.extractKey(ue);
                }), ge = ee.keyPath.findIndex(function(ue) {
                  return ue === f.keyPath;
                }), le = 0, Re = X.results.length; le < Re; ++le) fe[le][ge] = X.results[le];
                b(ee.name).addKeys(fe);
              })), O.mutatedParts = zn(O.mutatedParts || {}, N), X;
            });
          } }), h = function(b) {
            var E = b.query, b = E.index, E = E.range;
            return [b, new He((b = E.lower) !== null && b !== void 0 ? b : e.MIN_KEY, (E = E.upper) !== null && E !== void 0 ? E : e.MAX_KEY)];
          }, T = { get: function(y) {
            return [f, new He(y.key)];
          }, getMany: function(y) {
            return [f, new He().addKeys(y.keys)];
          }, count: h, query: h, openCursor: h };
          return v(T).forEach(function(y) {
            _[y] = function(b) {
              var E = ne.subscr, S = !!E, C = ji(ne, s) && Li(y, b) ? b.obsSet = {} : E;
              if (S) {
                var O = function(H) {
                  return H = "idb://".concat(t, "/").concat(o, "/").concat(H), C[H] || (C[H] = new He());
                }, N = O(""), R = O(":dels"), E = T[y](b), S = E[0], E = E[1];
                if ((y === "query" && S.isPrimaryKey && !b.values ? R : O(S.name || "")).add(E), !S.isPrimaryKey) {
                  if (y !== "count") {
                    var q = y === "query" && m && b.values && s.query(u(u({}, b), { values: !1 }));
                    return s[y].apply(this, arguments).then(function(H) {
                      if (y === "query") {
                        if (m && b.values) return q.then(function(fe) {
                          return fe = fe.result, N.addKeys(fe), H;
                        });
                        var z = b.values ? H.result.map(p) : H.result;
                        (b.values ? N : R).addKeys(z);
                      } else if (y === "openCursor") {
                        var X = H, ee = b.values;
                        return X && Object.create(X, { key: { get: function() {
                          return R.addKey(X.primaryKey), X.key;
                        } }, primaryKey: { get: function() {
                          var fe = X.primaryKey;
                          return R.addKey(fe), fe;
                        } }, value: { get: function() {
                          return ee && N.addKey(X.primaryKey), X.value;
                        } } });
                      }
                      return H;
                    });
                  }
                  R.add(r);
                }
              }
              return s[y].apply(this, arguments);
            };
          }), _;
        } });
      } };
      function Mi(e, t, r) {
        if (r.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var o = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return r.numFailures === o ? null : (t = u({}, t), x(t.keys) && (t.keys = t.keys.filter(function(s, c) {
          return !(c in r.failures);
        })), "values" in t && x(t.values) && (t.values = t.values.filter(function(s, c) {
          return !(c in r.failures);
        })), t);
      }
      function Gr(e, t) {
        return r = e, ((o = t).lower === void 0 || (o.lowerOpen ? 0 < ve(r, o.lower) : 0 <= ve(r, o.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? ve(e, t.upper) < 0 : ve(e, t.upper) <= 0));
        var r, o;
      }
      function Ki(e, t, T, o, s, c) {
        if (!T || T.length === 0) return e;
        var f = t.query.index, p = f.multiEntry, m = t.query.range, g = o.schema.primaryKey.extractKey, _ = f.extractKey, h = (f.lowLevelIndex || f).extractKey, T = T.reduce(function(y, b) {
          var E = y, S = [];
          if (b.type === "add" || b.type === "put") for (var C = new He(), O = b.values.length - 1; 0 <= O; --O) {
            var N, R = b.values[O], q = g(R);
            C.hasKey(q) || (N = _(R), (p && x(N) ? N.some(function(X) {
              return Gr(X, m);
            }) : Gr(N, m)) && (C.addKey(q), S.push(R)));
          }
          switch (b.type) {
            case "add":
              var Y = new He().addKeys(t.values ? y.map(function(ee) {
                return g(ee);
              }) : y), E = y.concat(t.values ? S.filter(function(ee) {
                return ee = g(ee), !Y.hasKey(ee) && (Y.addKey(ee), !0);
              }) : S.map(function(ee) {
                return g(ee);
              }).filter(function(ee) {
                return !Y.hasKey(ee) && (Y.addKey(ee), !0);
              }));
              break;
            case "put":
              var U = new He().addKeys(b.values.map(function(ee) {
                return g(ee);
              }));
              E = y.filter(function(ee) {
                return !U.hasKey(t.values ? g(ee) : ee);
              }).concat(t.values ? S : S.map(function(ee) {
                return g(ee);
              }));
              break;
            case "delete":
              var H = new He().addKeys(b.keys);
              E = y.filter(function(ee) {
                return !H.hasKey(t.values ? g(ee) : ee);
              });
              break;
            case "deleteRange":
              var z = b.range;
              E = y.filter(function(ee) {
                return !Gr(g(ee), z);
              });
          }
          return E;
        }, e);
        return T === e ? e : (T.sort(function(y, b) {
          return ve(h(y), h(b)) || ve(g(y), g(b));
        }), t.limit && t.limit < 1 / 0 && (T.length > t.limit ? T.length = t.limit : e.length === t.limit && T.length < t.limit && (s.dirty = !0)), c ? Object.freeze(T) : T);
      }
      function qi(e, t) {
        return ve(e.lower, t.lower) === 0 && ve(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function cs(e, t) {
        return function(r, o, s, c) {
          if (r === void 0) return o !== void 0 ? -1 : 0;
          if (o === void 0) return 1;
          if ((o = ve(r, o)) === 0) {
            if (s && c) return 0;
            if (s) return 1;
            if (c) return -1;
          }
          return o;
        }(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function(r, o, s, c) {
          if (r === void 0) return o !== void 0 ? 1 : 0;
          if (o === void 0) return -1;
          if ((o = ve(r, o)) === 0) {
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
            s.subscribers.size === 0 && Pe(c, s);
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
                for (var g = /* @__PURE__ */ new Set(), _ = 0, h = r; _ < h.length; _++) {
                  var T = h[_], y = Wt["idb://".concat(t, "/").concat(T)];
                  if (y) {
                    var b = e.table(T), E = y.optimisticOps.filter(function(ee) {
                      return ee.trans === p;
                    });
                    if (p._explicit && m && p.mutatedParts) for (var S = 0, C = Object.values(y.queries.query); S < C.length; S++) for (var O = 0, N = (Y = C[S]).slice(); O < N.length; O++) Mr((U = N[O]).obsSet, p.mutatedParts) && (Pe(Y, U), U.subscribers.forEach(function(ee) {
                      return g.add(ee);
                    }));
                    else if (0 < E.length) {
                      y.optimisticOps = y.optimisticOps.filter(function(ee) {
                        return ee.trans !== p;
                      });
                      for (var R = 0, q = Object.values(y.queries.query); R < q.length; R++) for (var Y, U, H, z = 0, X = (Y = q[R]).slice(); z < X.length; z++) (U = X[z]).res != null && p.mutatedParts && (m && !U.dirty ? (H = Object.isFrozen(U.res), H = Ki(U.res, U.req, E, b, U, H), U.dirty ? (Pe(Y, U), U.subscribers.forEach(function(ee) {
                        return g.add(ee);
                      })) : H !== U.res && (U.res = H, U.promise = J.resolve({ result: H }))) : (U.dirty && Pe(Y, U), U.subscribers.forEach(function(ee) {
                        return g.add(ee);
                      })));
                    }
                  }
                }
                g.forEach(function(ee) {
                  return ee();
                });
              }
            };
          }, p.addEventListener("abort", s(!1), { signal: f }), p.addEventListener("error", s(!1), { signal: f }), p.addEventListener("complete", s(!0), { signal: f })), p;
        }, table: function(r) {
          var o = e.table(r), s = o.schema.primaryKey;
          return u(u({}, o), { mutate: function(c) {
            var f = ne.trans;
            if (s.outbound || f.db._options.cache === "disabled" || f.explicit || f.idbtrans.mode !== "readwrite") return o.mutate(c);
            var p = Wt["idb://".concat(t, "/").concat(r)];
            return p ? (f = o.mutate(c), c.type !== "add" && c.type !== "put" || !(50 <= c.values.length || Ur(s, c).some(function(m) {
              return m == null;
            })) ? (p.optimisticOps.push(c), c.mutatedParts && Jn(c.mutatedParts), f.then(function(m) {
              0 < m.numFailures && (Pe(p.optimisticOps, c), (m = Mi(0, c, m)) && p.optimisticOps.push(m), c.mutatedParts && Jn(c.mutatedParts));
            }), f.catch(function() {
              Pe(p.optimisticOps, c), c.mutatedParts && Jn(c.mutatedParts);
            })) : f.then(function(m) {
              var g = Mi(0, u(u({}, c), { values: c.values.map(function(_, h) {
                var T;
                return m.failures[h] || (_ = (T = s.keyPath) !== null && T !== void 0 && T.includes(".") ? Ge(_) : u({}, _), oe(_, s.keyPath, m.results[h])), _;
              }) }), m);
              p.optimisticOps.push(g), queueMicrotask(function() {
                return c.mutatedParts && Jn(c.mutatedParts);
              });
            }), f) : o.mutate(c);
          }, query: function(c) {
            if (!ji(ne, o) || !Li("query", c)) return o.query(c);
            var f = ((g = ne.trans) === null || g === void 0 ? void 0 : g.db._options.cache) === "immutable", h = ne, p = h.requery, m = h.signal, g = function(b, E, S, C) {
              var O = Wt["idb://".concat(b, "/").concat(E)];
              if (!O) return [];
              if (!(E = O.queries[S])) return [null, !1, O, null];
              var N = E[(C.query ? C.query.index.name : null) || ""];
              if (!N) return [null, !1, O, null];
              switch (S) {
                case "query":
                  var R = N.find(function(q) {
                    return q.req.limit === C.limit && q.req.values === C.values && qi(q.req.query.range, C.query.range);
                  });
                  return R ? [R, !0, O, N] : [N.find(function(q) {
                    return ("limit" in q.req ? q.req.limit : 1 / 0) >= C.limit && (!C.values || q.req.values) && cs(q.req.query.range, C.query.range);
                  }), !1, O, N];
                case "count":
                  return R = N.find(function(q) {
                    return qi(q.req.query.range, C.query.range);
                  }), [R, !!R, O, N];
              }
            }(t, r, "query", c), _ = g[0], h = g[1], T = g[2], y = g[3];
            return _ && h ? _.obsSet = c.obsSet : (h = o.query(c).then(function(b) {
              var E = b.result;
              if (_ && (_.res = E), f) {
                for (var S = 0, C = E.length; S < C; ++S) Object.freeze(E[S]);
                Object.freeze(E);
              } else b.result = Ge(E);
              return b;
            }).catch(function(b) {
              return y && _ && Pe(y, _), Promise.reject(b);
            }), _ = { obsSet: c.obsSet, promise: h, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, y ? y.push(_) : (y = [_], (T = T || (Wt["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = y)), ls(_, y, p, m), _.promise.then(function(b) {
              return { result: Ki(b.result, c, T?.optimisticOps, o, _, f) };
            });
          } });
        } });
      } };
      function er(e, t) {
        return new Proxy(e, { get: function(r, o, s) {
          return o === "db" ? t : Reflect.get(r, o, s);
        } });
      }
      var Et = (Le.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new F.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new F.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(es), r.stores({}), this._state.autoSchema = !1, r);
      }, Le.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || ne.letThrough || this._vip) ? e() : new J(function(r, o) {
          if (t._state.openComplete) return o(new F.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new F.DatabaseClosed());
            t.open().catch(A);
          }
          t._state.dbReadyPromise.then(r, o);
        }).then(e);
      }, Le.prototype.use = function(e) {
        var t = e.stack, r = e.create, o = e.level, s = e.name;
        return s && this.unuse({ stack: t, name: s }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: r, level: o ?? 10, name: s }), e.sort(function(c, f) {
          return c.level - f.level;
        }), this;
      }, Le.prototype.unuse = function(e) {
        var t = e.stack, r = e.name, o = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(s) {
          return o ? s.create !== o : !!r && s.name !== r;
        })), this;
      }, Le.prototype.open = function() {
        var e = this;
        return Ut(Je, function() {
          return is(e);
        });
      }, Le.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, t = un.indexOf(this);
        if (0 <= t && un.splice(t, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new J(function(r) {
          e.dbReadyResolve = r;
        }), e.openCanceller = new J(function(r, o) {
          e.cancelOpen = o;
        }));
      }, Le.prototype.close = function(r) {
        var t = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        t ? (r.isBeingOpened && r.cancelOpen(new F.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new F.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, Le.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", o = this._state;
        return new J(function(s, c) {
          function f() {
            t.close(e);
            var p = t._deps.indexedDB.deleteDatabase(t.name);
            p.onsuccess = Oe(function() {
              var m, g, _;
              m = t._deps, g = t.name, _ = m.indexedDB, m = m.IDBKeyRange, Fr(_) || g === Kn || kr(_, m).delete(g).catch(A), s();
            }), p.onerror = yt(c), p.onblocked = t._fireOnBlocked;
          }
          if (r) throw new F.InvalidArgument("Invalid closeOptions argument to db.delete()");
          o.isBeingOpened ? o.dbReadyPromise.then(f) : f();
        });
      }, Le.prototype.backendDB = function() {
        return this.idbdb;
      }, Le.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Le.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, Le.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Le.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Le.prototype, "tables", { get: function() {
        var e = this;
        return v(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), Le.prototype.transaction = function() {
        var e = (function(t, r, o) {
          var s = arguments.length;
          if (s < 2) throw new F.InvalidArgument("Too few arguments");
          for (var c = new Array(s - 1); --s; ) c[s - 1] = arguments[s];
          return o = c.pop(), [t, et(c), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Le.prototype._transaction = function(e, t, r) {
        var o = this, s = ne.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var c, f, p = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (f = t.map(function(g) {
            if (g = g instanceof o.Table ? g.name : g, typeof g != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return g;
          }), e == "r" || e === xr) c = xr;
          else {
            if (e != "rw" && e != Er) throw new F.InvalidArgument("Invalid transaction mode: " + e);
            c = Er;
          }
          if (s) {
            if (s.mode === xr && c === Er) {
              if (!p) throw new F.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              s = null;
            }
            s && f.forEach(function(g) {
              if (s && s.storeNames.indexOf(g) === -1) {
                if (!p) throw new F.SubTransaction("Table " + g + " not included in parent transaction.");
                s = null;
              }
            }), p && s && !s.active && (s = null);
          }
        } catch (g) {
          return s ? s._promise(null, function(_, h) {
            h(g);
          }) : je(g);
        }
        var m = (function g(_, h, T, y, b) {
          return J.resolve().then(function() {
            var E = ne.transless || ne, S = _._createTransaction(h, T, _._dbSchema, y);
            if (S.explicit = !0, E = { trans: S, transless: E }, y) S.idbtrans = y.idbtrans;
            else try {
              S.create(), S.idbtrans._explicit = !0, _._state.PR1398_maxLoop = 3;
            } catch (N) {
              return N.name === P.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                return g(_, h, T, null, b);
              })) : je(N);
            }
            var C, O = at(b);
            return O && an(), E = J.follow(function() {
              var N;
              (C = b.call(S, S)) && (O ? (N = Dt.bind(null, null), C.then(N, N)) : typeof C.next == "function" && typeof C.throw == "function" && (C = $r(C)));
            }, E), (C && typeof C.then == "function" ? J.resolve(C).then(function(N) {
              return S.active ? N : je(new F.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : E.then(function() {
              return C;
            })).then(function(N) {
              return y && S._resolve(), S._completion.then(function() {
                return N;
              });
            }).catch(function(N) {
              return S._reject(N), je(N);
            });
          });
        }).bind(null, this, c, f, s, r);
        return s ? s._promise(c, m, "lock") : ne.trans ? Ut(ne.transless, function() {
          return o._whenReady(m);
        }) : this._whenReady(m);
      }, Le.prototype.table = function(e) {
        if (!G(this._allTables, e)) throw new F.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Le);
      function Le(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var o = Le.dependencies;
        this._options = t = u({ addons: Le.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, c, f, p, m, g = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: A, dbReadyPromise: null, cancelOpen: A, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        g.dbReadyPromise = new J(function(h) {
          g.dbReadyResolve = h;
        }), g.openCanceller = new J(function(h, T) {
          g.cancelOpen = T;
        }), this._state = g, this.name = e, this.on = mn(this, "populate", "blocked", "versionchange", "close", { ready: [te, A] }), this.once = function(h, T) {
          var y = function() {
            for (var b = [], E = 0; E < arguments.length; E++) b[E] = arguments[E];
            r.on(h).unsubscribe(y), T.apply(r, b);
          };
          return r.on(h, y);
        }, this.on.ready.subscribe = ke(this.on.ready.subscribe, function(h) {
          return function(T, y) {
            Le.vip(function() {
              var b, E = r._state;
              E.openComplete ? (E.dbOpenError || J.resolve().then(T), y && h(T)) : E.onReadyBeingFired ? (E.onReadyBeingFired.push(T), y && h(T)) : (h(T), b = r, y || h(function S() {
                b.on.ready.unsubscribe(T), b.on.ready.unsubscribe(S);
              }));
            });
          };
        }), this.Collection = (s = this, yn(Wo.prototype, function(C, S) {
          this.db = s;
          var y = yi, b = null;
          if (S) try {
            y = S();
          } catch (O) {
            b = O;
          }
          var E = C._ctx, S = E.table, C = S.hook.reading.fire;
          this._ctx = { table: S, index: E.index, isPrimKey: !E.index || S.schema.primKey.keyPath && E.index === S.schema.primKey.name, range: y, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: b, or: E.or, valueMapper: C !== L ? C : null };
        })), this.Table = (c = this, yn(wi.prototype, function(h, T, y) {
          this.db = c, this._tx = y, this.name = h, this.schema = T, this.hook = c._allTables[h] ? c._allTables[h].hook : mn(null, { creating: [k, A], reading: [Z, L], updating: [V, A], deleting: [j, A] });
        })), this.Transaction = (f = this, yn(Xo.prototype, function(h, T, y, b, E) {
          var S = this;
          h !== "readonly" && T.forEach(function(C) {
            C = (C = y[C]) === null || C === void 0 ? void 0 : C.yProps, C && (T = T.concat(C.map(function(O) {
              return O.updatesTable;
            })));
          }), this.db = f, this.mode = h, this.storeNames = T, this.schema = y, this.chromeTransactionDurability = b, this.idbtrans = null, this.on = mn(this, "complete", "error", "abort"), this.parent = E || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new J(function(C, O) {
            S._resolve = C, S._reject = O;
          }), this._completion.then(function() {
            S.active = !1, S.on.complete.fire();
          }, function(C) {
            var O = S.active;
            return S.active = !1, S.on.error.fire(C), S.parent ? S.parent._reject(C) : O && S.idbtrans && S.idbtrans.abort(), je(C);
          });
        })), this.Version = (p = this, yn(rs.prototype, function(h) {
          this.db = p, this._cfg = { version: h, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (m = this, yn(Ci.prototype, function(h, T, y) {
          if (this.db = m, this._ctx = { table: h, index: T === ":id" ? null : T, or: y }, this._cmp = this._ascending = ve, this._descending = function(b, E) {
            return ve(E, b);
          }, this._max = function(b, E) {
            return 0 < ve(b, E) ? b : E;
          }, this._min = function(b, E) {
            return ve(b, E) < 0 ? b : E;
          }, this._IDBKeyRange = m._deps.IDBKeyRange, !this._IDBKeyRange) throw new F.MissingAPI();
        })), this.on("versionchange", function(h) {
          0 < h.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(h) {
          !h.newVersion || h.newVersion < h.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(h.oldVersion / 10));
        }), this._maxKey = wn(t.IDBKeyRange), this._createTransaction = function(h, T, y, b) {
          return new r.Transaction(h, T, y, r._options.chromeTransactionDurability, b);
        }, this._fireOnBlocked = function(h) {
          r.on("blocked").fire(h), un.filter(function(T) {
            return T.name === r.name && T !== r && !T._state.vcFired;
          }).map(function(T) {
            return T.on("versionchange").fire(h);
          });
        }, this.use(as), this.use(fs), this.use(us), this.use(os), this.use(ss);
        var _ = new Proxy(this, { get: function(h, T, y) {
          if (T === "_vip") return !0;
          if (T === "table") return function(E) {
            return er(r.table(E), _);
          };
          var b = Reflect.get(h, T, y);
          return b instanceof wi ? er(b, _) : T === "tables" ? b.map(function(E) {
            return er(E, _);
          }) : T === "_createTransaction" ? function() {
            return er(b.apply(this, arguments), _);
          } : b;
        } });
        this.vip = _, o.forEach(function(h) {
          return h(r);
        });
      }
      var tr, dt = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ds = (Hr.prototype.subscribe = function(e, t, r) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: r });
      }, Hr.prototype[dt] = function() {
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
      function Bi(e) {
        var t, r = !1, o = new ds(function(s) {
          var c = at(e), f, p = !1, m = {}, g = {}, _ = { get closed() {
            return p;
          }, unsubscribe: function() {
            p || (p = !0, f && f.abort(), h && kt.storagemutated.unsubscribe(y));
          } };
          s.start && s.start(_);
          var h = !1, T = function() {
            return Sr(b);
          }, y = function(E) {
            zn(m, E), Mr(g, m) && T();
          }, b = function() {
            var E, S, C;
            !p && tr.indexedDB && (m = {}, E = {}, f && f.abort(), f = new AbortController(), C = function(O) {
              var N = on();
              try {
                c && an();
                var R = Ot(e, O);
                return R = c ? R.finally(Dt) : R;
              } finally {
                N && sn();
              }
            }(S = { subscr: E, signal: f.signal, requery: T, querier: e, trans: null }), Promise.resolve(C).then(function(O) {
              r = !0, t = O, p || S.signal.aborted || (m = {}, function(N) {
                for (var R in N) if (G(N, R)) return;
                return 1;
              }(g = E) || h || (kt(bn, y), h = !0), Sr(function() {
                return !p && s.next && s.next(O);
              }));
            }, function(O) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(O?.name) || p || Sr(function() {
                p || s.error && s.error(O);
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
      var Yt = Et;
      function Wr(e) {
        var t = Ft;
        try {
          Ft = !0, kt.storagemutated.fire(e), Br(e, !0);
        } finally {
          Ft = t;
        }
      }
      re(Yt, u(u({}, De), { delete: function(e) {
        return new Yt(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new Yt(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = Yt.dependencies, r = t.indexedDB, t = t.IDBKeyRange, (Fr(r) ? Promise.resolve(r.databases()).then(function(o) {
            return o.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== Kn;
            });
          }) : kr(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return je(new F.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          D(this, e);
        };
      }, ignoreTransaction: function(e) {
        return ne.trans ? Ut(ne.transless, e) : e();
      }, vip: jr, async: function(e) {
        return function() {
          try {
            var t = $r(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : J.resolve(t);
          } catch (r) {
            return je(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = $r(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : J.resolve(o);
        } catch (s) {
          return je(s);
        }
      }, currentTransaction: { get: function() {
        return ne.trans || null;
      } }, waitFor: function(e, t) {
        return t = J.resolve(typeof e == "function" ? Yt.ignoreTransaction(e) : e).timeout(t || 6e4), ne.trans ? ne.trans.waitFor(t) : t;
      }, Promise: J, debug: { get: function() {
        return Q;
      }, set: function(e) {
        me(e);
      } }, derive: he, extend: D, props: re, override: ke, Events: mn, on: kt, liveQuery: Bi, extendObservabilitySet: zn, getByKeyPath: ie, setByKeyPath: oe, delByKeyPath: function(e, t) {
        typeof t == "string" ? oe(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          oe(e, r, void 0);
        });
      }, shallowClone: Ee, deepClone: Ge, getObjectDiff: Vr, cmp: ve, asap: Fe, minKey: -1 / 0, addons: [], connections: un, errnames: P, dependencies: tr, cache: Wt, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), Yt.maxKey = wn(Yt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (kt(bn, function(e) {
        Ft || (e = new CustomEvent(Ar, { detail: e }), Ft = !0, dispatchEvent(e), Ft = !1);
      }), addEventListener(Ar, function(e) {
        e = e.detail, Ft || Wr(e);
      }));
      var hn, Ft = !1, $i = function() {
      };
      return typeof BroadcastChannel < "u" && (($i = function() {
        (hn = new BroadcastChannel(Ar)).onmessage = function(e) {
          return e.data && Wr(e.data);
        };
      })(), typeof hn.unref == "function" && hn.unref(), kt(bn, function(e) {
        Ft || hn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Et.disableBfCache && e.persisted) {
          Q && console.debug("Dexie: handling persisted pagehide"), hn?.close();
          for (var t = 0, r = un; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Et.disableBfCache && e.persisted && (Q && console.debug("Dexie: handling persisted pageshow"), $i(), Wr({ all: new He(-1 / 0, [[]]) }));
      })), J.rejectionMapper = function(e, t) {
        return !e || e instanceof ht || e instanceof TypeError || e instanceof SyntaxError || !e.name || !$[e.name] ? e : (t = new $[e.name](t || e.message, e), "stack" in e && de(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, me(Q), u(Et, Object.freeze({ __proto__: null, Dexie: Et, liveQuery: Bi, Entity: vi, cmp: ve, PropModification: vn, replacePrefix: function(e, t) {
        return new vn({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new vn({ add: e });
      }, remove: function(e) {
        return new vn({ remove: e });
      }, default: Et, RangeSet: He, mergeRanges: xn, rangesOverlap: Di }), { default: Et }), Et;
    });
  }(Ls)), Ls.exports;
}
var _d = wd();
const Ms = /* @__PURE__ */ pd(_d), Xa = Symbol.for("Dexie"), Do = globalThis[Xa] || (globalThis[Xa] = Ms);
if (Ms.semVer !== Do.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Ms.semVer} and ${Do.semVer}`);
const {
  liveQuery: Ph,
  mergeRanges: Ih,
  rangesOverlap: Oh,
  RangeSet: Dh,
  cmp: Nh,
  Entity: Rh,
  PropModification: kh,
  replacePrefix: Fh,
  add: jh,
  remove: Lh,
  DexieYProvider: Mh
} = Do, li = "_temp-idb-id", Sd = {
  AccessControl: [],
  AccessPoint: [
    "Text",
    "Private",
    "Server",
    "LN",
    "ServerAt",
    "Services",
    "GOOSESecurity",
    "SMVSecurity",
    "Labels"
  ],
  Address: ["P"],
  AllocationRole: ["Text", "FunctionRef"],
  AllocationRoleRef: ["Text", "FunctionalVariantRef"],
  AnalogueWiringParameters: ["Text"],
  AnalogueWiringParametersRef: ["Text"],
  Application: [
    "Text",
    "FunctionRole",
    "FunctionalVariant",
    "FunctionalVariantGroup",
    "AllocationRoleRef",
    "ApplicationSclRef"
  ],
  ApplicationSclRef: ["Text", "SclFileReference"],
  Association: [],
  Authentication: [],
  BDA: ["Text", "Private", "Val", "Labels"],
  Bay: [
    "Text",
    "Private",
    "Labels",
    "LNode",
    "PowerTransformer",
    "GeneralEquipment",
    "ConductingEquipment",
    "ConnectivityNode",
    "Function"
  ],
  BayType: [],
  BehaviorDescription: ["Text", "InputVar", "OutputVar", "BehaviorReference"],
  BehaviorDescriptionRef: ["Text", "FunctionalVariantRef", "InputVarRef", "OutputVarRef"],
  BehaviorReference: ["Text"],
  BinaryWiringParameters: ["Text"],
  BinaryWiringParametersRef: ["Text"],
  BitRate: [],
  CheckoutID: ["SubCheckoutID"],
  ClientLN: [],
  ClientServices: ["TimeSyncProt", "GOOSEMcSecurity", "SVMcSecurity", "Security"],
  CommProt: [],
  Communication: ["Text", "Private", "SubNetwork"],
  CommunicationServiceSpecifications: [
    "Text",
    "GooseParameters",
    "SMVParameters",
    "ReportParameters"
  ],
  ConductingEquipment: [
    "Text",
    "Private",
    "Labels",
    "LNode",
    "Terminal",
    "SubEquipment",
    "EqFunction"
  ],
  ConfDataSet: [],
  ConfLNs: [],
  ConfLdName: [],
  ConfLogControl: [],
  ConfReportControl: [],
  ConfSG: [],
  ConfSigRef: [],
  ConnectedAP: ["Text", "Private", "Address", "GSE", "SMV", "PhysConn"],
  ConnectivityNode: ["Text", "Private", "Labels", "LNode"],
  ControlRef: ["Text", "BinaryWiringParametersRef", "AnalogueWiringParametersRef"],
  ControllingLNode: ["Text", "BinaryWiringParametersRef", "AnalogueWiringParametersRef"],
  DA: ["Text", "Private", "Val", "Labels", "ProtNs"],
  DAI: ["Text", "Private", "Val", "Labels"],
  DAS: [
    "Text",
    "SubscriberLNode",
    "ControllingLNode",
    "ProcessEcho",
    "LogParametersRef",
    "Val",
    "Labels"
  ],
  DAType: ["Text", "Private", "BDA", "ProtNs", "Labels"],
  DO: ["Text", "Private", "Labels"],
  DOI: ["Text", "Private", "SDI", "DAI", "Labels"],
  DOS: [
    "Text",
    "SDS",
    "DAS",
    "SubscriberLNode",
    "ControllingLNode",
    "ProcessEcho",
    "LogParametersRef",
    "Labels"
  ],
  DOType: ["Text", "Private", "SDO", "DA", "Labels"],
  DataObjectDirectory: [],
  DataSet: ["Text", "Private", "FCDA"],
  DataSetDirectory: [],
  DataTypeTemplates: ["LNodeType", "DOType", "DAType", "EnumType"],
  DynAssociation: [],
  DynDataSet: [],
  EnumType: ["Text", "Private", "EnumVal"],
  EnumVal: [],
  EqFunction: ["Text", "Private", "Labels", "LNode", "GeneralEquipment", "EqSubFunction"],
  EqSubFunction: [
    "Text",
    "Private",
    "Labels",
    "LNode",
    "GeneralEquipment",
    "EqSubFunction"
  ],
  ExtCtrl: ["Text", "Private"],
  ExtRef: ["Text", "Private"],
  FCDA: [],
  FileHandling: [],
  Function: [
    "Text",
    "Private",
    "Labels",
    "LNode",
    "SubFunction",
    "GeneralEquipment",
    "ConductingEquipment"
  ],
  FunctionCatRef: ["Text"],
  FunctionCategory: ["Text", "SubCategory", "FunctionCatRef"],
  FunctionCategoryRef: ["Text", "FunctionalVariantRef"],
  FunctionRef: ["Text", "FunctionalVariantRef", "SignalRole"],
  FunctionRole: ["Text", "FunctionalVariantRef", "FunctionRoleContent"],
  FunctionRoleContent: [
    "Text",
    "FunctionRef",
    "BehaviorDescriptionRef",
    "ProcessResourceRef",
    "VariableRef",
    "FunctionCategoryRef",
    "PowerSystemRelationRef"
  ],
  FunctionSclRef: ["Text", "SclFileReference"],
  FunctionTemplate: [
    "Text",
    "LNode",
    "SubFunctionTemplate",
    "GeneralEquipment",
    "ConductingEquipment"
  ],
  FunctionalSubVariant: ["Text", "FunctionalSubVariant", "VariableRef"],
  FunctionalVariant: ["Text", "FunctionalSubVariant", "VariableRef"],
  FunctionalVariantGroup: ["Text", "FunctionalVariant"],
  FunctionalVariantRef: ["Text"],
  GOOSE: [],
  GOOSEMcSecurity: [],
  GOOSESecurity: ["Text", "Private", "Labels", "Subject", "IssuerName"],
  GSE: ["Text", "Private", "Address", "MinTime", "MaxTime"],
  GSEControl: ["Text", "Private", "IEDName", "Protocol"],
  GSEDir: [],
  GSESettings: ["McSecurity"],
  GSSE: [],
  GeneralEquipment: ["Text", "Private", "Labels", "LNode", "EqFunction"],
  GetCBValues: [],
  GetDataObjectDefinition: [],
  GetDataSetValue: [],
  GetDirectory: [],
  GooseParameters: [
    "Text",
    "L2CommParameters",
    "L3IPv4CommParameters",
    "L3IPv6CommParameters"
  ],
  GooseParametersRef: ["Text"],
  Header: ["Text", "History", "SourceFiles"],
  History: ["Hitem"],
  Hitem: ["SourceFiles"],
  IED: [
    "Text",
    "Private",
    "Services",
    "AccessPoint",
    "KDC",
    "IEDSourceFiles",
    "MinRequestedSCDFiles",
    "Labels"
  ],
  IEDName: [],
  IEDSourceFiles: ["Text", "Private", "SclFileReference"],
  InputVar: ["Text"],
  InputVarRef: ["Text", "FunctionalVariantRef"],
  Inputs: ["Text", "Private", "ExtRef"],
  IssuerName: [],
  KDC: [],
  L2CommParameters: ["Text"],
  L3IPv4CommParameters: ["Text"],
  L3IPv6CommParameters: ["Text"],
  LDevice: ["Text", "Private", "LN0", "LN", "AccessControl", "Labels"],
  LN: [
    "Text",
    "Private",
    "DataSet",
    "ReportControl",
    "LogControl",
    "DOI",
    "Inputs",
    "Outputs",
    "Log",
    "Labels"
  ],
  LN0: [
    "Text",
    "Private",
    "DataSet",
    "ReportControl",
    "LogControl",
    "DOI",
    "Inputs",
    "Outputs",
    "Log",
    "Labels",
    "GSEControl",
    "SampledValueControl",
    "SettingControl"
  ],
  LNode: ["Text", "Private", "Labels"],
  LNodeDataRef: ["Text", "FunctionalVariantRef"],
  LNodeInputRef: ["Text", "FunctionalVariantRef"],
  LNodeInputs: ["Text", "SourceRef"],
  LNodeOutputRef: ["Text", "FunctionalVariantRef"],
  LNodeOutputs: ["Text", "ControlRef"],
  LNodeSpecNaming: ["Text"],
  LNodeType: ["Text", "Private", "DO", "Labels"],
  Label: [],
  Labels: ["Text", "Private", "Label"],
  Line: [
    "Text",
    "Private",
    "Labels",
    "LNode",
    "GeneralEquipment",
    "Function",
    "Voltage",
    "ConductingEquipment",
    "ConnectivityNode"
  ],
  Log: ["Text", "Private"],
  LogControl: ["Text", "Private", "TrgOps"],
  LogParameters: ["Text"],
  LogParametersRef: ["Text"],
  LogSettings: [],
  MaxTime: [],
  McSecurity: [],
  MinRequestedSCDFile: [],
  MinRequestedSCDFiles: ["Text", "Private", "MinRequestedSCDFile"],
  MinTime: [],
  MultiAPPerSubNet: [],
  NeutralPoint: ["Text", "Private"],
  OptFields: [],
  OutputVar: ["Text"],
  OutputVarRef: ["Text", "FunctionalVariantRef"],
  Outputs: ["Text", "Private", "ExtCtrl"],
  P: [],
  PhysConn: ["Text", "Private", "P"],
  PowerSystemRelation: ["Text"],
  PowerSystemRelationRef: ["Text", "FunctionalVariantRef"],
  PowerSystemRelations: ["Text", "PowerSystemRelation"],
  PowerTransformer: [
    "Text",
    "Private",
    "Labels",
    "LNode",
    "TransformerWinding",
    "SubEquipment",
    "EqFunction"
  ],
  Private: [],
  Process: [
    "Text",
    "Private",
    "Labels",
    "LNode",
    "GeneralEquipment",
    "Function",
    "ConductingEquipment",
    "Substation",
    "Line",
    "Process"
  ],
  ProcessEcho: ["Text"],
  ProcessResource: ["Text", "Resource"],
  ProcessResourceRef: ["Text", "FunctionalVariantRef"],
  ProcessResources: ["Text", "ProcessResource"],
  Project: ["Text", "ProjectProcessReference"],
  ProjectProcessReference: ["Text"],
  ProtNs: [],
  Protocol: [],
  ReadWrite: [],
  RedProt: [],
  ReportControl: ["Text", "Private", "TrgOps", "OptFields", "RptEnabled"],
  ReportParameters: ["Text"],
  ReportParametersRef: ["Text"],
  ReportSettings: [],
  Resource: [],
  RptEnabled: ["Text", "Private", "ClientLN"],
  SCL: [
    "Text",
    "Private",
    "Header",
    "Substation",
    "Communication",
    "IED",
    "DataTypeTemplates",
    "Line",
    "Process"
  ],
  SCSM: [],
  SDI: ["Text", "Private", "SDI", "DAI", "Labels"],
  SDO: ["Text", "Private", "Labels"],
  SDS: [
    "Text",
    "SDS",
    "DAS",
    "SubscriberLNode",
    "ControllingLNode",
    "ProcessEcho",
    "LogParametersRef",
    "Labels"
  ],
  SGEdit: [],
  SMV: ["Text", "Private", "Address"],
  SMVParameters: [
    "Text",
    "L2CommParameters",
    "L3IPv4CommParameters",
    "L3IPv6CommParameters"
  ],
  SMVParametersRef: ["Text"],
  SMVSecurity: ["Text", "Private", "Labels", "Subject", "IssuerName"],
  SMVSettings: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"],
  SMVsc: [],
  SVMcSecurity: [],
  SampledValueControl: ["Text", "Private", "IEDName", "SmvOpts", "Protocol"],
  SamplesPerSec: [],
  SclFileReference: ["Text", "Private"],
  SecPerSamples: [],
  Security: [],
  Server: ["Text", "Private", "Authentication", "LDevice", "Association"],
  ServerAt: ["Text", "Private"],
  ServiceSpecifications: [
    "Text",
    "GooseParameters",
    "SMVParameters",
    "ReportParameters",
    "BinaryWiringParameters",
    "AnalogueWiringParameters",
    "LogParameters"
  ],
  Services: [
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
    "CommProt",
    "SCSM",
    "Security",
    "MultiAPPerSubNet"
  ],
  SetDataSetValue: [],
  SettingControl: ["Text", "Private"],
  SettingGroups: ["SGEdit", "ConfSG"],
  SignalRole: [
    "Text",
    "FunctionalVariantRef",
    "LNodeInputRef",
    "LNodeOutputRef",
    "LNodeDataRef"
  ],
  SmpRate: [],
  SmvOpts: [],
  SourceFiles: ["Text", "Private", "SclFileReference"],
  SourceRef: [
    "Text",
    "GooseParametersRef",
    "SMVParametersRef",
    "ReportParametersRef",
    "BinaryWiringParametersRef",
    "AnalogueWiringParametersRef"
  ],
  SubCategory: ["Text", "SubCategory", "FunctionCatRef"],
  SubCheckoutID: ["SubCheckoutID"],
  SubEquipment: ["Text", "Private", "Labels", "LNode", "EqFunction"],
  SubFunction: [
    "Text",
    "Private",
    "Labels",
    "LNode",
    "GeneralEquipment",
    "ConductingEquipment",
    "SubFunction"
  ],
  SubFunctionTemplate: [
    "Text",
    "LNode",
    "GeneralEquipment",
    "ConductingEquipment",
    "SubFunctionTemplate"
  ],
  SubNetwork: ["Text", "Private", "Labels", "BitRate", "ConnectedAP"],
  Subject: [],
  SubscriberLNode: [
    "Text",
    "GooseParametersRef",
    "SMVParametersRef",
    "ReportParametersRef",
    "BinaryWiringParametersRef"
  ],
  Substation: [
    "Text",
    "Private",
    "Labels",
    "LNode",
    "PowerTransformer",
    "GeneralEquipment",
    "VoltageLevel",
    "Function"
  ],
  SupSubscription: [],
  TapChanger: ["Text", "Private", "Labels", "LNode", "SubEquipment", "EqFunction"],
  Terminal: ["Text", "Private"],
  Text: [],
  TimeSyncProt: [],
  TimerActivatedControl: [],
  TransformerWinding: [
    "Text",
    "Private",
    "Labels",
    "LNode",
    "Terminal",
    "SubEquipment",
    "TapChanger",
    "NeutralPoint",
    "EqFunction"
  ],
  TrgOps: [],
  Val: [],
  ValueHandling: [],
  Variable: ["Text", "VariableApplyTo"],
  VariableApplyTo: ["Text"],
  VariableRef: ["Text", "FunctionalVariantRef"],
  Voltage: [],
  VoltageLevel: [
    "Text",
    "Private",
    "Labels",
    "LNode",
    "PowerTransformer",
    "GeneralEquipment",
    "Voltage",
    "Bay",
    "Function"
  ]
};
async function xd(n) {
  return Ed({
    databaseName: n.databaseName,
    withDatabaseIds: !0
  });
}
async function Ed(n) {
  const { databaseName: i, withDatabaseIds: a } = n, u = new Do(i);
  await u.open();
  const l = await Td({
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
async function Td(n) {
  const { databaseInstance: i, withDatabaseIds: a } = n;
  {
    const u = document.implementation.createDocument(
      "http://www.iec.ch/61850/2003/SCL",
      null,
      null
    ), l = await i.table(zt).where({ tagName: "SCL" }).first();
    if (!l) throw new Error("No SCL root element found in DB");
    const d = u.createElementNS(
      l.namespace.uri,
      l.tagName
    );
    return d.setAttribute("xmlns", l.namespace.uri), l.attributes && vc({
      document: u,
      element: d,
      attributes: l.attributes,
      isRoot: !0
    }), l.value && (d.textContent = l.value.trim()), d.setAttribute(li, l.id), u.appendChild(d), await yc({
      databaseInstance: i,
      withDatabaseIds: a,
      xmlDocument: u,
      databaseRecord: l,
      parentDomElement: d
    });
  }
}
async function yc(n) {
  const { databaseInstance: i, withDatabaseIds: a, xmlDocument: u, databaseRecord: l, parentDomElement: d } = n;
  if (!l.children) return;
  const v = l.children.map((W) => W.id), x = await i.table(zt).bulkGet(v);
  Pd({
    childrenRecords: x,
    parentRecord: l
  });
  const D = Ad({
    parentTagName: l.tagName,
    childrenRecords: x
  });
  for (const W of D) {
    const K = Cd({
      document: u,
      record: W,
      withDatabaseIds: a
    });
    d.appendChild(K), await yc({
      databaseInstance: i,
      withDatabaseIds: a,
      xmlDocument: u,
      databaseRecord: W,
      parentDomElement: K
    });
  }
  return n.xmlDocument;
}
function Cd(n) {
  const { document: i, record: a, withDatabaseIds: u } = n;
  let l;
  return a.namespace.uri === ha.default.uri ? l = i.createElementNS(a.namespace.uri, a.tagName) : (gc({
    document: i,
    namespace: a.namespace
  }), l = i.createElementNS(
    a.namespace.uri,
    `${a.namespace.prefix}:${a.tagName}`
  )), a.attributes && vc({ document: i, element: l, attributes: a.attributes, isRoot: !1 }), a.value && (l.textContent = a.value.trim()), u && l.setAttribute(li, a.id), l;
}
function vc(n) {
  const { document: i, element: a, attributes: u, isRoot: l } = n;
  for (const d of u)
    if (!(d.name === "xmlns" || d.name.startsWith("xmlns:")))
      if (gd(d)) {
        const v = d.namespace?.prefix || "";
        if (v === "xmlns") continue;
        !l && v && gc({
          document: i,
          namespace: d.namespace
        });
        const x = d.name.includes(":") && d.name.split(":").pop() || d.name, D = v ? `${v}:${x}` : x;
        a.setAttributeNS(d.namespace.uri, D, String(d.value));
      } else a.setAttribute(d.name, String(d.value));
}
function gc(n) {
  const { document: i, namespace: a } = n, u = i.documentElement;
  if (!u) return;
  const l = "http://www.w3.org/2000/xmlns/";
  u.getAttributeNS(l, a.prefix) === null && u.setAttributeNS(l, `xmlns:${a.prefix}`, a.uri);
}
function Ad(n) {
  const { parentTagName: i, childrenRecords: a } = n, u = [], l = new Set(Sd[i]);
  if (!l.size) return a;
  const d = /* @__PURE__ */ new Map(), v = [];
  for (const x of l)
    d.set(x, []);
  for (const x of a)
    l.has(x.tagName) ? d.get(x.tagName)?.push(x) : v.push(x);
  for (const x of l) {
    const D = d.get(x);
    D && D.length && u.push(...D);
  }
  return u.push(...v), u;
}
function Pd(n) {
  const { childrenRecords: i, parentRecord: a } = n, u = i.map((l, d) => l === void 0 ? d : -1).filter((l) => l !== -1);
  if (u.length > 0) {
    const l = u.map((d) => {
      const v = a.children[d];
      return `'${v.tagName}' (id: ${v.id})`;
    });
    throw new Error(
      `Database corruption detected: Parent element '${a.tagName}' (id: ${a.id}) references ${u.length} non-existent child record(s): ${l.join(", ")}`
    );
  }
}
function Id(n) {
  return n.old === void 0 && n.new?.parent !== void 0 && n.new?.element !== void 0;
}
function Od(n) {
  return n.old?.parent !== void 0 && n.old?.element !== void 0 && n.new === void 0;
}
function Dd(n) {
  return n.old?.parent !== void 0 && n.old?.element !== void 0 && n.new?.parent !== void 0 && n.new?.element == null;
}
function Nd(n) {
  return n.old?.parent === void 0 && n.old?.element !== void 0 && n.new?.parent === void 0 && n.new?.element !== void 0;
}
function Rd(n) {
  return n.old === void 0 && n.new === void 0 && n.element !== void 0 && n.newAttributes !== void 0 && n.oldAttributes !== void 0;
}
function kd(n) {
  return !(n.actions instanceof Array);
}
function Bt(n) {
  const i = n.split(">"), a = i.pop() ?? "";
  return [i.join(">"), a];
}
const bt = ":not(*)";
function Fd(n) {
  return `${n.getAttribute("version")}	${n.getAttribute("revision")}`;
}
function jd(n, i) {
  const [a, u] = i.split("	");
  return !a || !u ? bt : `${n}[version="${a}"][revision="${u}"]`;
}
function za(n) {
  return Ct(n.parentElement) + ">" + n.getAttribute("connectivityNode");
}
function Ja(n, i) {
  const [a, u] = Bt(i), l = Tt[n].parents.flatMap(
    (d) => jt(d, a).split(",")
  );
  return qt(
    l,
    [">"],
    [`${n}[connectivityNode="${u}"]`]
  ).map((d) => d.join("")).join(",");
}
function Ld(n) {
  const [i, a, u, l, d, v] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((x) => n.getAttribute(x));
  return i === "None" ? `${Ct(n.parentElement)}>(${l} ${v} ${d})` : `${i} ${a || "(Client)"}/${u ?? ""} ${l} ${d ?? ""}`;
}
function Md(n, i) {
  if (i.endsWith(")")) {
    const [re, se] = Bt(i), [de, he, Ce] = se.substring(1, se.length - 1).split(" ");
    if (!de || !he) return bt;
    const ae = Tt[n].parents.flatMap(
      (ye) => jt(ye, re).split(",")
    );
    return qt(
      ae,
      [">"],
      [`${n}[iedName="None"][lnClass="${de}"][lnType="${he}"][lnInst="${Ce}"]`]
    ).map((ye) => ye.join("")).join(",");
  }
  const [a, u, l, d, v] = i.split(/[ /]/);
  if (!a || !u || !d) return bt;
  const [x, D, W, K, G] = [
    [`[iedName="${a}"]`],
    u === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${u}"]`],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    v ? [`[lnInst="${v}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return qt(
    [n],
    x,
    D,
    W,
    K,
    G
  ).map((re) => re.join("")).join(",");
}
function Kd(n) {
  return `${Ct(n.parentElement)}>${n.getAttribute("iedName")} ${n.getAttribute("apName")}`;
}
function qd(n, i) {
  const [a, u] = Bt(i), [l, d] = u.split(" ");
  return `${jt("IED", a)}>${n}[iedName="${l}"][apName="${d}"]`;
}
function Bd(n) {
  return `${Ct(n.parentElement)}>${n.getAttribute("associationID") ?? ""}`;
}
function $d(n, i) {
  const [a, u] = Bt(i);
  return u ? `${jt("Server", a)}>${n}[associationID="${u}"]` : bt;
}
function Vd(n) {
  return `${Ct(n.closest("IED"))}>>${n.getAttribute("inst")}`;
}
function Ud(n, i) {
  const [a, u] = i.split(">>");
  return u ? `IED[name="${a}"] ${n}[inst="${u}"]` : bt;
}
function Gd(n) {
  const i = n.textContent, [a, u, l, d, v] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((x) => n.getAttribute(x));
  return `${Ct(n.parentElement)}>${i} ${a || ""} ${u || ""}/${l ?? ""} ${d ?? ""} ${v ?? ""}`;
}
function Hd(n, i) {
  const [a, u] = Bt(i), [l, d, v, x, D, W] = u.split(/[ /]/), [
    K,
    G,
    re,
    se,
    de,
    he
  ] = [
    Tt[n].parents.flatMap((Ce) => jt(Ce, a).split(",")),
    [`${l}`],
    d ? [`[apRef="${d}"]`] : [":not([apRef])", '[apRef=""]'],
    v ? [`[ldInst="${v}"]`] : [":not([ldInst])", '[ldInst=""]'],
    x ? [`[prefix="${x}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${D}"]`],
    W ? [`[lnInst="${W}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return qt(
    K,
    [">"],
    [n],
    G,
    re,
    se,
    de,
    he
  ).map((Ce) => Ce.join("")).join(",");
}
function Wd(n) {
  const [i, a, u, l, d, v, x, D] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((K) => n.getAttribute(K)), W = `${i}/${a ?? ""} ${u} ${l ?? ""}.${d} ${v || ""}`;
  return `${Ct(n.parentElement)}>${W} (${x}${D ? " [" + D + "]" : ""})`;
}
function Yd(n, i) {
  const [a, u] = Bt(i), [l, d, v, x] = u.split(/[ /.]/), D = u.match(/.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/), W = D && D[1] ? D[1] : "", K = D && D[2] ? D[2] : "", G = u.match(/\(([A-Z]{2})/), re = u.match(/ \[([0-9]{1,2})\]/), se = G && G[1] ? G[1] : "", de = re && re[1] ? re[1] : "", [
    he,
    Ce,
    ae,
    ye,
    ke,
    pe,
    Fe,
    ie,
    oe
  ] = [
    Tt[n].parents.flatMap((Ee) => jt(Ee, a).split(",")),
    [`[ldInst="${l}"]`],
    d ? [`[prefix="${d}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${v}"]`],
    x ? [`[lnInst="${x}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${W}"]`],
    K ? [`[daName="${K}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${se}"]`],
    de ? [`[ix="${de}"]`] : [":not([ix])", '[ix=""]']
  ];
  return qt(
    he,
    [">"],
    [n],
    Ce,
    ae,
    ye,
    ke,
    pe,
    Fe,
    ie,
    oe
  ).map((Ee) => Ee.join("")).join(",");
}
function Qd(n) {
  if (!n.parentElement) return NaN;
  const i = Ct(n.parentElement), a = n.getAttribute("iedName"), u = n.getAttribute("intAddr"), l = Array.from(
    n.parentElement.querySelectorAll(`ExtRef[intAddr="${u}"]`)
  ).indexOf(n);
  if (u) return `${i}>${u}[${l}]`;
  const [
    d,
    v,
    x,
    D,
    W,
    K,
    G,
    re,
    se,
    de,
    he,
    Ce
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
  ].map((ke) => n.getAttribute(ke)), ae = Ce ? `${G}:${Ce} ${re ?? ""}/${se ?? ""} ${de ?? ""} ${he ?? ""}` : "", ye = `${a} ${d}/${v ?? ""} ${x} ${D ?? ""} ${W} ${K || ""}`;
  return `${i}>${ae ? ae + " " : ""}${ye}${u ? `@${u}` : ""}`;
}
function Xd(n, i) {
  const [a, u] = Bt(i), l = Tt[n].parents.flatMap(
    (be) => jt(be, a).split(",")
  );
  if (u.endsWith("]")) {
    const [be] = u.split("["), Pe = [`[intAddr="${be}"]`];
    return qt(l, [">"], [n], Pe).map((tt) => tt.join("")).join(",");
  }
  let d, v, x, D, W, K, G, re, se, de, he, Ce, ae, ye;
  !u.includes(":") && !u.includes("@") ? [d, v, x, D, W, K, G] = u.split(/[ /]/) : u.includes(":") && !u.includes("@") ? [
    re,
    se,
    de,
    he,
    Ce,
    ae,
    d,
    v,
    x,
    D,
    W,
    K,
    G
  ] = u.split(/[ /:]/) : !u.includes(":") && u.includes("@") ? [d, v, x, D, W, K, G, ye] = u.split(/[ /@]/) : [
    re,
    se,
    de,
    he,
    Ce,
    ae,
    d,
    v,
    x,
    D,
    W,
    K,
    G,
    ye
  ] = u.split(/[ /:@]/);
  const [
    ke,
    pe,
    Fe,
    ie,
    oe,
    Ee,
    B,
    et,
    it,
    Ne,
    Ge,
    At,
    wt,
    Ue
  ] = [
    d ? [`[iedName="${d}"]`] : [":not([iedName])"],
    v ? [`[ldInst="${v}"]`] : [":not([ldInst])", '[ldInst=""]'],
    x ? [`[prefix="${x}"]`] : [":not([prefix])", '[prefix=""]'],
    D ? [`[lnClass="${D}"]`] : [":not([lnClass])"],
    W ? [`[lnInst="${W}"]`] : [":not([lnInst])", '[lnInst=""]'],
    K ? [`[doName="${K}"]`] : [":not([doName])"],
    G ? [`[daName="${G}"]`] : [":not([daName])", '[daName=""]'],
    re ? [`[serviceType="${re}"]`] : [":not([serviceType])", '[serviceType=""]'],
    se ? [`[srcCBName="${se}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    de ? [`[srcLDInst="${de}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    he ? [`[srcPrefix="${he}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    Ce ? [`[srcLNClass="${Ce}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    ae ? [`[srcLNInst="${ae}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    ye ? [`[intAddr="${ye}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return qt(
    l,
    [">"],
    [n],
    ke,
    pe,
    Fe,
    ie,
    oe,
    Ee,
    B,
    et,
    it,
    Ne,
    Ge,
    At,
    wt,
    Ue
  ).map((be) => be.join("")).join(",");
}
function zd(n) {
  const [i, a, u] = ["prefix", "lnClass", "inst"].map((l) => n.getAttribute(l));
  return `${Ct(n.parentElement)}>${i ?? ""} ${a} ${u}`;
}
function Jd(n, i) {
  const [a, u] = Bt(i), l = Tt[n].parents.flatMap(
    (G) => jt(G, a).split(",")
  ), [d, v, x] = u.split(" ");
  if (!v) return bt;
  const [D, W, K] = [
    d ? [`[prefix="${d}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${v}"]`],
    [`[inst="${x}"]`]
  ];
  return qt(
    l,
    [">"],
    [n],
    D,
    W,
    K
  ).map((G) => G.join("")).join(",");
}
function Zd(n) {
  const [i, a, u, l, d, v] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((x) => n.getAttribute(x));
  return `${Ct(n.parentElement)}>${a} ${i || ""} ${u}/${l ?? ""} ${d} ${v}`;
}
function ep(n, i) {
  const [a, u] = Bt(i), l = Tt[n].parents.flatMap(
    (ae) => jt(ae, a).split(",")
  ), [d, v, x, D, W, K] = u.split(/[ /]/), [
    G,
    re,
    se,
    de,
    he,
    Ce
  ] = [
    d ? [`[iedName="${d}"]`] : [":not([iedName])", '[iedName=""]'],
    v ? [`[apRef="${v}"]`] : [":not([apRef])", '[apRef=""]'],
    x ? [`[ldInst="${x}"]`] : [":not([ldInst])", '[ldInst=""]'],
    D ? [`[prefix="${D}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${W}"]`],
    K ? [`[lnInst="${K}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return qt(
    l,
    [">"],
    [n],
    G,
    re,
    se,
    de,
    he,
    Ce
  ).map((ae) => ae.join("")).join(",");
}
function Za(n) {
  const [i, a] = ["name", "ix"].map((u) => n.getAttribute(u));
  return `${Ct(n.parentElement)}>${i}${a ? "[" + a + "]" : ""}`;
}
function Ks(n, i, a = -1) {
  a === -1 && (a = i.split(">").length);
  const [u, l] = Bt(i), [d, v, x, D] = l.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!v) return bt;
  if (a === 0) return `${n}[name="${v}"]`;
  const W = Tt[n].parents.flatMap(
    (re) => re === "SDI" ? Ks(re, u, a - 1).split(",") : jt(re, u).split(",")
  ).filter((re) => !re.startsWith(bt));
  if (W.length === 0) return bt;
  const [K, G] = [
    [`[name="${v}"]`],
    D ? [`[ix="${D}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return qt(W, [">"], [n], K, G).map((re) => re.join("")).join(",");
}
function tp(n) {
  if (!n.parentElement) return NaN;
  const i = n.getAttribute("sGroup"), a = Array.from(n.parentElement.children).filter((u) => u.getAttribute("sGroup") === i).findIndex((u) => u.isSameNode(n));
  return `${Ct(n.parentElement)}>${i ? i + "." : ""} ${a}`;
}
function np(n, i) {
  const [a, u] = Bt(i), [l, d] = u.split(" "), v = parseFloat(d), x = Tt[n].parents.flatMap(
    (K) => jt(K, a).split(",")
  ), [D, W] = [
    l ? [`[sGroup="${l}"]`] : [""],
    v ? [`:nth-child(${v + 1})`] : [""]
  ];
  return qt(x, [">"], [n], D, W).map((K) => K.join("")).join(",");
}
function rp(n) {
  const [i, a] = ["iedName", "apName"].map((u) => n.getAttribute(u));
  return `${i} ${a}`;
}
function ip(n, i) {
  const [a, u] = i.split(" ");
  return !a || !u ? bt : `${n}[iedName="${a}"][apName="${u}"]`;
}
function eu(n) {
  const [i, a] = ["ldInst", "cbName"].map((u) => n.getAttribute(u));
  return `${i} ${a}`;
}
function tu(n, i) {
  const [a, u] = i.split(" ");
  return !a || !u ? bt : `${n}[ldInst="${a}"][cbName="${u}"]`;
}
function op(n) {
  if (!n.parentElement) return NaN;
  if (!n.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const i = n.getAttribute("type");
  return n.parentElement.children.length > 1 && i !== "Connection" && i !== "RedConn" ? NaN : `${Ct(n.parentElement)}>${i}`;
}
function sp(n, i) {
  const [a, u] = Bt(i), [l, d] = [
    Tt[n].parents.flatMap((v) => jt(v, a).split(",")),
    u ? [`[type="${u}"]`] : [""]
  ];
  return qt(l, [">"], [n], d).map((v) => v.join("")).join(",");
}
function ap(n) {
  if (!n.parentElement) return NaN;
  const i = n.parentElement, a = n.getAttribute("type");
  if (i.tagName === "PhysConn") return `${Ct(n.parentElement)}>${a}`;
  const u = Array.from(n.parentElement.children).filter((l) => l.getAttribute("type") === a).findIndex((l) => l.isSameNode(n));
  return `${Ct(n.parentElement)}>${a} [${u}]`;
}
function up(n, i) {
  const [a, u] = Bt(i), [l] = u.split(" "), d = u && u.match(/\[([0-9]+)\]/) && u.match(/\[([0-9]+)\]/)[1] ? parseFloat(u.match(/\[([0-9]+)\]/)[1]) : NaN, [v, x, D] = [
    Tt[n].parents.flatMap((W) => jt(W, a).split(",")),
    [`[type="${l}"]`],
    d ? [`:nth-child(${d + 1})`] : [""]
  ];
  return qt(v, [">"], [n], x, D).map((W) => W.join("")).join(",");
}
function cp(n) {
  return `${Ct(n.parentElement)}>${n.getAttribute("ord")}`;
}
function lp(n, i) {
  const [a, u] = Bt(i);
  return `${jt("EnumType", a)}>${n}[ord="${u}"]`;
}
function fp(n) {
  return `${Ct(n.parentElement)}>${n.getAttribute("type") || "8-MMS"}	${n.textContent}`;
}
function dp(n, i) {
  const [a, u] = Bt(i), [l, d] = u.split("	"), [v] = [
    Tt[n].parents.flatMap((x) => jt(x, a).split(","))
  ];
  return qt(v, [">"], [n], [`[type="${l}"]`], [">"], [d]).map((x) => x.join("")).join(",");
}
function pp() {
  return "";
}
function hp() {
  return ":root";
}
function Xe(n) {
  return n.parentElement.tagName === "SCL" ? n.getAttribute("name") : `${Ct(n.parentElement)}>${n.getAttribute("name")}`;
}
function Qe(n, i, a = -1) {
  a === -1 && (a = i.split(">").length);
  const [u, l] = Bt(i);
  if (!l) return bt;
  if (a === 0) return `${n}[name="${l}"]`;
  const d = Tt[n].parents;
  if (!d) return bt;
  const v = d.flatMap(
    (x) => Tt[x].selector === Tt.Substation.selector ? Qe(x, u, a - 1).split(",") : jt(x, u).split(",")
  ).filter((x) => !x.startsWith(bt));
  return v.length === 0 ? bt : qt(v, [">"], [n], [`[name="${l}"]`]).map((x) => x.join("")).join(",");
}
function _e(n) {
  return Ct(n.parentElement).toString();
}
function Se(n, i) {
  const a = Tt[n].parents;
  if (!a) return bt;
  const u = a.flatMap((l) => jt(l, i).split(",")).filter((l) => !l.startsWith(bt));
  return u.length === 0 ? bt : qt(u, [">"], [n]).map((l) => l.join("")).join(",");
}
function yo(n) {
  return `#${n.id}`;
}
function vo(n, i) {
  const a = i.replace(/^#/, "");
  return a ? `${n}[id="${a}"]` : bt;
}
const bc = ["TransformerWinding", "ConductingEquipment"], wc = [
  "GeneralEquipment",
  "PowerTransformer",
  ...bc
], qs = ["Substation", "VoltageLevel", "Bay"], _c = ["Process", "Line"], Sc = ["EqSubFunction", "EqFunction"], mp = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...wc,
  ...qs,
  ..._c,
  ...Sc
], xc = ["ConnectivityNode", ...mp], yp = ["GOOSESecurity", "SMVSecurity"], vp = ["SubNetwork", ...yp, ...xc], gp = ["BDA", "DA"], bp = ["SampledValueControl", "GSEControl"], wp = ["LogControl", "ReportControl"], _p = [...bp, ...wp], Sp = ["GSE", "SMV"], xp = [
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
  ..._p,
  ...Sp,
  ...gp
], Jr = ["LN0", "LN"], Ep = ["Text", "Private", "Hitem", "AccessControl"], Tp = ["Subject", "IssuerName"], Cp = ["MinTime", "MaxTime"], Ap = ["LNodeType", "DOType", "DAType", "EnumType"], Pp = [
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
], Ip = ["DynDataSet", "ConfDataSet"], Op = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Ip
], Dp = ["ConfLogControl", "ConfSigRef"], Np = ["ReportSettings", "LogSettings", "GSESettings", "SMVSettings"], Rp = ["SCL", ...vp, ...xp, ...Ap], Ec = [
  ...Rp,
  ...Ep,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Tp,
  ...Cp,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Jr,
  ...Pp,
  "DynAssociation",
  "SettingGroups",
  ...Op,
  ...Dp,
  ...Np,
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
], kp = new Set(Ec);
function ma(n) {
  return kp.has(n);
}
const Bo = ["Text", "Private"], dr = [...Bo], gt = [...Bo], go = [...Bo], nu = [...gt, "Val"], Tc = [...dr, "LNode"], hr = [...Tc], Bs = [...hr], xs = [
  ...hr,
  "PowerTransformer",
  "GeneralEquipment"
], ru = [...Bs, "Terminal"], iu = [...gt, "Address"], Cc = [...dr], ou = [...Cc, "IEDName"], su = [
  ...gt,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], au = [
  ...hr,
  "GeneralEquipment",
  "Function"
], uu = [...Cc, "TrgOps"], cu = [
  ...hr,
  "GeneralEquipment",
  "EqSubFunction"
], Tt = {
  AccessControl: {
    identity: _e,
    selector: Se,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: Xe,
    selector: Qe,
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
    identity: _e,
    selector: Se,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Bd,
    selector: $d,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: _e,
    selector: Se,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: Xe,
    selector: Qe,
    parents: ["DAType"],
    children: [...nu]
  },
  BitRate: {
    identity: _e,
    selector: Se,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: Xe,
    selector: Qe,
    parents: ["VoltageLevel"],
    children: [
      ...xs,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Zd,
    selector: ep,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: _e,
    selector: Se,
    parents: ["SCL"],
    children: [...gt, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: Xe,
    selector: Qe,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [...ru, "EqFunction", "SubEquipment"]
  },
  ConfDataSet: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: _e,
    selector: Se,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: rp,
    selector: ip,
    parents: ["SubNetwork"],
    children: [...gt, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: Xe,
    selector: Qe,
    parents: ["Bay", "Line"],
    children: [...Tc]
  },
  DA: {
    identity: Xe,
    selector: Qe,
    parents: ["DOType"],
    children: [...nu]
  },
  DAI: {
    identity: Za,
    selector: Ks,
    parents: ["DOI", "SDI"],
    children: [...gt, "Val"]
  },
  DAType: {
    identity: yo,
    selector: vo,
    parents: ["DataTypeTemplates"],
    children: [...go, "BDA", "ProtNs"]
  },
  DO: {
    identity: Xe,
    selector: Qe,
    parents: ["LNodeType"],
    children: [...gt]
  },
  DOI: {
    identity: Xe,
    selector: Qe,
    parents: [...Jr],
    children: [...gt, "SDI", "DAI"]
  },
  DOType: {
    identity: yo,
    selector: vo,
    parents: ["DataTypeTemplates"],
    children: [...go, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: Xe,
    selector: Qe,
    parents: [...Jr],
    children: [...dr, "FCDA"]
  },
  DataSetDirectory: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: _e,
    selector: Se,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: _e,
    selector: Se,
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
    identity: cp,
    selector: lp,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: Xe,
    selector: Qe,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...cu]
  },
  EqSubFunction: {
    identity: Xe,
    selector: Qe,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...cu]
  },
  ExtRef: {
    identity: Qd,
    selector: Xd,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Wd,
    selector: Yd,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: Xe,
    selector: Qe,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...hr,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: Xe,
    selector: Qe,
    parents: [
      "SubFunction",
      "Function",
      ..._c,
      ...Sc,
      ...qs
    ],
    children: [...Bs, "EqFunction"]
  },
  GetCBValues: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: Xe,
    selector: Qe,
    parents: ["AccessPoint"],
    children: [...dr, "Subject", "IssuerName"]
  },
  GSE: {
    identity: eu,
    selector: tu,
    parents: ["ConnectedAP"],
    children: [...iu, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: Xe,
    selector: Qe,
    parents: ["LN0"],
    children: [...ou, "Protocol"]
  },
  GSESettings: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: _e,
    selector: Se,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: _e,
    selector: Se,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Fd,
    selector: jd,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: Xe,
    selector: Qe,
    parents: ["SCL"],
    children: [...gt, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Gd,
    selector: Hd,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: _e,
    selector: Se,
    parents: [...Jr],
    children: [...gt, "ExtRef"]
  },
  IssuerName: {
    identity: _e,
    selector: Se,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Kd,
    selector: qd,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Vd,
    selector: Ud,
    parents: ["Server"],
    children: [...gt, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: zd,
    selector: Jd,
    parents: ["AccessPoint", "LDevice"],
    children: [...su]
  },
  LN0: {
    identity: _e,
    selector: Se,
    parents: ["LDevice"],
    children: [...su, "GSEControl", "SampledValueControl", "SettingControl"]
  },
  LNode: {
    identity: Ld,
    selector: Md,
    parents: [...xc],
    children: [...gt]
  },
  LNodeType: {
    identity: yo,
    selector: vo,
    parents: ["DataTypeTemplates"],
    children: [...go, "DO"]
  },
  Line: {
    identity: Xe,
    selector: Qe,
    parents: ["Process", "SCL"],
    children: [...au, "Voltage", "ConductingEquipment"]
  },
  Log: {
    identity: Xe,
    selector: Qe,
    parents: [...Jr],
    children: [...gt]
  },
  LogControl: {
    identity: Xe,
    selector: Qe,
    parents: [...Jr],
    children: [...uu]
  },
  LogSettings: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: _e,
    selector: Se,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: _e,
    selector: Se,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: _e,
    selector: Se,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: za,
    selector: Ja,
    parents: ["TransformerWinding"],
    children: [...gt]
  },
  OptFields: {
    identity: _e,
    selector: Se,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: ap,
    selector: up,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: op,
    selector: sp,
    parents: ["ConnectedAP"],
    children: [...gt, "P"]
  },
  PowerTransformer: {
    identity: Xe,
    selector: Qe,
    parents: [...qs],
    children: [...Bs, "TransformerWinding", "SubEquipment", "EqFunction"]
  },
  Private: {
    identity: () => NaN,
    selector: () => bt,
    parents: [],
    children: []
  },
  Process: {
    identity: Xe,
    selector: Qe,
    parents: ["Process", "SCL"],
    children: [
      ...au,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: fp,
    selector: dp,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: _e,
    selector: Se,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: Xe,
    selector: Qe,
    parents: [...Jr],
    children: [...uu, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: _e,
    selector: Se,
    parents: ["ReportControl"],
    children: [...gt, "ClientLN"]
  },
  SamplesPerSec: {
    identity: _e,
    selector: Se,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: Xe,
    selector: Qe,
    parents: ["LN0"],
    children: [...ou, "SmvOpts"]
  },
  SecPerSamples: {
    identity: _e,
    selector: Se,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: pp,
    selector: hp,
    parents: [],
    children: [
      ...Bo,
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
    identity: Za,
    selector: Ks,
    parents: ["DOI", "SDI"],
    children: [...gt, "SDI", "DAI"]
  },
  SDO: {
    identity: Xe,
    selector: Qe,
    parents: ["DOType"],
    children: [...dr]
  },
  Server: {
    identity: _e,
    selector: Se,
    parents: ["AccessPoint"],
    children: [...gt, "Authentication", "LDevice", "Association"]
  },
  ServerAt: {
    identity: _e,
    selector: Se,
    parents: ["AccessPoint"],
    children: [...gt]
  },
  Services: {
    identity: _e,
    selector: Se,
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
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: _e,
    selector: Se,
    parents: ["LN0"],
    children: [...gt]
  },
  SettingGroups: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: _e,
    selector: Se,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: _e,
    selector: Se,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: eu,
    selector: tu,
    parents: ["ConnectedAP"],
    children: [...iu]
  },
  SmvOpts: {
    identity: _e,
    selector: Se,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: Xe,
    selector: Qe,
    parents: ["AccessPoint"],
    children: [...dr, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: Xe,
    selector: Qe,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...bc
    ],
    children: [...hr, "EqFunction"]
  },
  SubFunction: {
    identity: Xe,
    selector: Qe,
    parents: ["SubFunction", "Function"],
    children: [
      ...hr,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: Xe,
    selector: Qe,
    parents: ["Communication"],
    children: [...dr, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: _e,
    selector: Se,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: Xe,
    selector: Qe,
    parents: ["SCL"],
    children: [...xs, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: Xe,
    selector: Qe,
    parents: ["TransformerWinding"],
    children: [...hr, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: za,
    selector: Ja,
    parents: [...wc],
    children: [...gt]
  },
  Text: {
    identity: _e,
    selector: Se,
    parents: Ec.filter((n) => n !== "Text" && n !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: _e,
    selector: Se,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: Xe,
    selector: Qe,
    parents: ["PowerTransformer"],
    children: [
      ...ru,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: _e,
    selector: Se,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: tp,
    selector: np,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: _e,
    selector: Se,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: _e,
    selector: Se,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: Xe,
    selector: Qe,
    parents: ["Substation"],
    children: [...xs, "Voltage", "Bay", "Function"]
  }
};
function Ac(n, i) {
  const a = n.tagName, u = Array.from(n.children);
  if (a === "Services" || a === "SettingGroups" || !ma(a))
    return u.find((x) => x.tagName === i) ?? null;
  const l = Tt[a]?.children ?? [];
  let d = l.findIndex((x) => x === i);
  if (d < 0) return null;
  let v;
  for (; d < l.length && !v; )
    v = u.find((x) => x.tagName === l[d]), d++;
  return v ?? null;
}
function jt(n, i) {
  return typeof i != "string" ? bt : ma(n) ? Tt[n].selector(n, i) : n;
}
function Ct(n) {
  if (n === null) return NaN;
  if (n.closest("Private")) return NaN;
  const i = n.tagName;
  return ma(i) ? Tt[i].identity(n) : NaN;
}
function qt(...n) {
  return n.reduce((i, a) => i.flatMap((u) => a.map((l) => [u, l].flat())), [[]]);
}
const Fp = 99;
Array(Fp).fill(1).map((n, i) => `${i + 1}`);
function jp(n) {
  return kd(n) ? lu(n) : n.actions.map(lu);
}
function lu(n) {
  if (Id(n))
    return Lp(n);
  if (Od(n))
    return Mp(n);
  if (Rd(n))
    return Kp(n);
  if (Dd(n))
    return qp(n);
  if (Nd(n))
    return Bp(n);
  throw console.error("Unknown action type", n), new Error("Unknown action type");
}
function Lp(n) {
  let i = null;
  return n.new.reference === void 0 && n.new.element instanceof Element && n.new.parent instanceof Element ? i = Ac(n.new.parent, n.new.element.tagName) : i = n.new.reference ?? null, {
    parent: n.new.parent,
    node: n.new.element,
    reference: i
  };
}
function Mp(n) {
  return {
    node: n.old.element
  };
}
function Kp(n) {
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
function qp(n) {
  return n.new.reference === void 0 && (n.new.reference = Ac(n.new.parent, n.old.element.tagName)), {
    parent: n.new.parent,
    node: n.old.element,
    reference: n.new.reference ?? null
  };
}
function Bp(n) {
  const i = n.old.element.children, a = Array.from(i).map((D) => D.cloneNode(!0)), u = n.new.element.cloneNode(!0);
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
function $p(n) {
  return n instanceof Array;
}
function Vp(n) {
  return n.parent !== void 0;
}
function Up(n) {
  return n !== null && typeof n != "string";
}
function Gp(n) {
  return n.element !== void 0;
}
function Hp(n) {
  return n.parent === void 0 && n.node !== void 0;
}
function Pc(n) {
  if ($p(n))
    return n.map(Pc);
  if (Hp(n))
    return n;
  if (Vp(n))
    return n;
  if (Gp(n))
    return Wp(n);
  throw new Error("Unknown edit type");
}
function Wp(n) {
  const i = {}, a = {};
  return Object.entries(n.attributes).forEach(([u, l]) => {
    if (Up(l)) {
      const d = l.namespaceURI;
      if (!d) return;
      a[d] || (a[d] = {}), a[d][u] = l.value;
    } else i[u] = l;
  }), { element: n.element, attributes: i, attributesNS: a };
}
function Ic(n) {
  return typeof n != "object" || n === null ? !1 : Object.entries(n).every(([i, a]) => typeof i == "string" && (a === null || typeof a == "string"));
}
function Yp(n) {
  return typeof n != "object" || n === null ? !1 : Object.entries(n).every(([i, a]) => typeof i == "string" && Ic(a));
}
function ya(n) {
  return n instanceof Array && n.every((i) => Qp(i));
}
function va(n) {
  return n.element instanceof Element && typeof n.textContent == "string";
}
function lo(n) {
  return n.parent === void 0 && n.node instanceof Node;
}
function ga(n) {
  const i = n;
  return i.element instanceof Element && (Ic(i.attributes) || Yp(i.attributesNS));
}
function fo(n) {
  return (n.parent instanceof Element || n.parent instanceof Document || n.parent instanceof DocumentFragment) && n.node instanceof Node && (n.reference instanceof Node || n.reference === null);
}
function Qp(n) {
  return ya(n) ? !0 : ga(n) || va(n) || fo(n) || lo(n);
}
function Oc(n) {
  return n !== null && typeof n == "object" && "namespaceURI" in n && typeof n.namespaceURI == "string" && "value" in n && typeof n.value == "string";
}
function Xp(n) {
  return n === null || typeof n != "object" ? !1 : Object.entries(n).every(([i, a]) => typeof i == "string" && (a === null || typeof a == "string" || Oc(a)));
}
function Dc(n) {
  return n instanceof Array && n.every(zp);
}
function Nc(n) {
  return n.element instanceof Element && Xp(n.attributes);
}
function zp(n) {
  return Dc(n) ? !0 : Nc(n) || fo(n) || lo(n);
}
function Jp(n) {
  let i = {};
  const a = {};
  return Object.entries(n.attributes).forEach(([u, l]) => {
    if (Oc(l)) {
      const d = l.namespaceURI;
      if (!d)
        return;
      a[d] || (a[d] = {}), a[d] = { ...a[d], [u]: l.value };
    } else
      i = { ...i, [u]: l };
  }), { element: n.element, attributes: i, attributesNS: a };
}
function Rc(n) {
  return lo(n) || fo(n) ? n : Nc(n) ? Jp(n) : Dc(n) ? n.map(Rc) : [];
}
function Zp({
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
function eh({
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
        const [v, x] = d;
        x === null ? n.removeAttribute(v) : n.setAttribute(v, x);
      } catch {
        delete u[d[0]];
      }
  if (a && Object.entries(a).forEach(([d, v]) => {
    Object.keys(v).reverse().forEach((x) => {
      l[d] = {
        ...l[d],
        [x]: n.getAttributeNS(d, x.split(":").pop())
      };
    });
  }), a)
    for (const d of Object.entries(a)) {
      const [v, x] = d;
      for (const D of Object.entries(x))
        try {
          const [W, K] = D;
          K === null ? n.removeAttributeNS(v, W.split(":").pop()) : n.setAttributeNS(v, W, K);
        } catch {
          delete l[v][D[0]];
        }
    }
  return {
    element: n,
    attributes: u,
    attributesNS: l
  };
}
function th({ node: n }) {
  const { parentNode: i, nextSibling: a } = n;
  return i ? (i.removeChild(n), {
    node: n,
    parent: i,
    reference: a
  }) : [];
}
function nh({ parent: n, node: i, reference: a }) {
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
function xo(n) {
  return fo(n) ? nh(n) : lo(n) ? th(n) : ga(n) ? eh(n) : va(n) ? Zp(n) : ya(n) ? n.map((i) => xo(i)).reverse().flat(1 / 0) : [];
}
class rh {
  past = [];
  future = [];
  commit(i, { title: a, squash: u } = {}) {
    const l = u && this.past.length ? this.past[this.past.length - 1] : { undo: [], redo: [] }, d = xo(i);
    return l.undo.unshift(...[d].flat(1 / 0)), l.redo.push(...[i].flat(1 / 0)), a && (l.title = a), u && this.past.length && this.past.pop(), this.past.push(l), this.future = [], this.#e.forEach((v) => v(l)), l;
  }
  undo() {
    const i = this.past.pop();
    if (i)
      return xo(i.undo), this.future.unshift(i), i;
  }
  redo() {
    const i = this.future.shift();
    if (i)
      return xo(i.redo), this.past.push(i), i;
  }
  #e = [];
  subscribe(i) {
    const a = this.#e.length;
    return this.#e.push(i), () => (this.#e.splice(a, 1), i);
  }
}
async function kc(n, i) {
  if (fo(n))
    await ih(n, i);
  else if (lo(n))
    await oh(n, i);
  else if (ga(n))
    await sh(n, i);
  else if (va(n))
    await ah(n, i);
  else if (ya(n))
    for (const a of n)
      await kc(a, i);
  else
    console.error("could not determine edit type", { edit: n });
}
async function ih(n, i) {
  const { parent: a, node: u } = n;
  await Fc(u, a, i);
}
async function Fc(n, i, a) {
  const u = n, l = i;
  let d = ao(u);
  const v = ao(l), x = await dh(a);
  d || (d = crypto.randomUUID(), u.setAttribute(li, d));
  const D = uh(u);
  let W = u.tagName;
  D.prefix && (W = W.replace(`${D.prefix}:`, ""));
  let K = {
    id: d,
    tagName: W,
    namespace: D,
    attributes: fh(u, x),
    value: u.children.length ? "" : u.textContent || "",
    parent: null,
    // Will be set by `ensureRelationship`
    children: []
  }, G;
  const re = await a.findRecordById(d);
  if (re)
    G = re;
  else {
    const de = jc(K);
    G = await a.addRecord({ ...de });
  }
  let se;
  if (v) {
    if (se = await a.findRecordById(v), !se)
      throw new Error(`parentId present: ${v}, but no record found`);
    await a.ensureRelationship(se, G);
  }
  for (const de of Array.from(n.children))
    await Fc(de, u, a);
}
async function oh(n, i) {
  const { node: a } = n, l = ao(a);
  if (!l)
    throw new Error("Element must have a temp ID attribute for database operations");
  const d = await i.findRecordById(l);
  d && await i.deleteRecord(d);
}
async function sh(n, i) {
  const { element: a, attributes: u = {}, attributesNS: l = {} } = n, d = ao(a);
  if (!d)
    throw new Error("Element must have a temp ID attribute for database operations");
  const v = await i.findRecordById(d);
  if (!v)
    throw new Error(`Record with ID ${d} not found`);
  const D = [...jc(v).attributes || []];
  for (const [K, G] of Object.entries(u))
    if (G == null)
      Es(D, K);
    else {
      const se = $s(K, G);
      du(D, se);
    }
  for (const [K, G] of Object.entries(l))
    if (G)
      for (const [re, se] of Object.entries(G))
        if (se == null) {
          const he = await fu(K, i), Ce = he ? `${he}:${re}` : re;
          Es(D, Ce) || Es(D, re);
        } else {
          const he = await fu(K, i), Ce = $s(
            re,
            se,
            he ? K : void 0,
            he
          );
          du(D, Ce);
        }
  const W = {
    ...v,
    attributes: D
  };
  await i.updateRecord(W);
}
async function ah(n, i) {
  const { element: a, textContent: u } = n, l = ao(a);
  if (!l)
    throw new Error("Element must have a temp ID attribute for database operations");
  const d = await i.findRecordById(l);
  if (!d)
    throw new Error(`Record with ID ${l} not found`);
  const v = {
    ...d,
    value: u || ""
  };
  await i.updateRecord(v);
}
function ao(n) {
  return n.getAttribute(li);
}
function uh(n) {
  return n.namespaceURI && n.prefix ? {
    prefix: n.prefix,
    uri: n.namespaceURI
  } : ha.default;
}
async function ch(n, i) {
  const u = (await i.findRootSCL()).attributes.find((l) => l.value === n);
  if (!u)
    throw new Error("could not find namespace by uri:" + n);
  return u.name;
}
async function fu(n, i) {
  try {
    return await ch(n, i);
  } catch (a) {
    return console.warn(`Could not resolve namespace prefix for ${n}:`, a), "";
  }
}
function $s(n, i, a, u) {
  return a && a !== ph ? {
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
function lh(n, i) {
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
function du(n, i) {
  const a = n.findIndex((l) => l.name === i.name);
  a !== -1 ? n[a] = i : n.push(i);
}
function Es(n, i) {
  const a = n.findIndex((l) => l.name === i);
  return a !== -1 ? (n.splice(a, 1), !0) : !1;
}
function fh(n, i) {
  const a = [];
  for (let u = 0; u < n.attributes.length; u++) {
    const l = n.attributes[u];
    if (l.name === li)
      continue;
    const v = $s(
      l.name,
      l.value,
      l.namespaceURI,
      l.prefix || void 0
    ), x = lh(v, i);
    a.push(x);
  }
  return a;
}
function jc(n) {
  const i = n.attributes.filter(
    (a) => a.name !== li
  );
  return {
    ...n,
    attributes: i
  };
}
async function dh(n) {
  const i = {};
  try {
    const a = await n.findRootSCL();
    for (const u of a.attributes)
      u.namespace?.uri === "http://www.w3.org/2000/xmlns/" && (i[u.value] = u.name);
  } catch (a) {
    console.warn("Could not gather namespaces from SCL root:", a);
  }
  return i;
}
const ph = "http://www.w3.org/1999/xhtml";
function hh(n) {
  return {
    addRecord: i,
    createRecord: l,
    updateRecord: a,
    deleteRecord: u,
    findRecordById: K,
    findRecordsByTagName: G,
    findChildRecords: ae,
    findChildRecordsByTagName: ye,
    findChildRecordsWithinDepthAndGivenTagName: pe,
    instantiate: re,
    ensureRelationship: v,
    ensurePrivateElement: x,
    findRootSCL: W,
    recordExists: d,
    findOneRecordByAttribute: he,
    findAllRecordsByAttribute: Ce,
    close: Fe,
    db: n
  };
  async function i(ie) {
    const oe = { ...ie, id: ie.id ?? crypto.randomUUID() }, Ee = await K(oe.id);
    if (Ee) {
      const B = {
        msg: "could not add record, record with same id already exists",
        db: n.name,
        newRecord: oe,
        existingRecord: Ee
      };
      throw console.error(B), new Error(JSON.stringify(B));
    }
    try {
      return await n.table(zt).add(oe), oe;
    } catch (B) {
      const et = {
        msg: "could not add record",
        db: n.name,
        newRecord: oe,
        err: B
      };
      throw console.error(et), new Error(JSON.stringify(et));
    }
  }
  async function a(ie) {
    try {
      if (await n.table(zt).update(ie.id, ie) < 1) {
        const Ee = { msg: "nothing has been updated", record: ie };
        throw console.error(Ee), new Error(JSON.stringify(Ee));
      }
    } catch (oe) {
      console.error(oe);
    }
  }
  async function u(ie) {
    try {
      if (ie.children)
        for (const oe of ie.children) {
          const Ee = await K(oe.id);
          if (!Ee) {
            console.warn({
              msg: "deleteRecord: child relationship found but not child record, continuing",
              child: oe
            });
            continue;
          }
          await u(Ee);
        }
      if (ie.parent?.id) {
        const oe = await K(ie.parent.id);
        if (!oe) throw new Error("parent relationship found but not parent record");
        await D(oe, ie);
      }
      await n.table(zt).delete(ie.id);
    } catch (oe) {
      console.error(oe);
    }
  }
  async function l(ie, oe) {
    try {
      const Ee = { ...ie, id: crypto.randomUUID() };
      return await n.table(zt).add(Ee), oe && await v(oe, Ee), {
        ...Ee,
        parent: oe ? { id: oe.id, tagName: oe.tagName } : null
      };
    } catch (Ee) {
      const B = {
        msg: "could not add record",
        db: n.name,
        table: ie.tagName,
        recordToCreate: ie,
        err: Ee
      };
      throw console.error(B), new Error(JSON.stringify(B));
    }
  }
  async function d(ie) {
    return await n.table(zt).where({ id: ie.id }).count() > 0;
  }
  async function v(ie, oe) {
    const Ee = ie.children?.some((et) => et.id === oe.id), B = oe.parent?.id === ie.id;
    Ee || await n.table(zt).update(ie.id, {
      children: [...ie.children, { id: oe.id, tagName: oe.tagName }]
    }), B || (oe.parent = {
      id: ie.id,
      tagName: ie.tagName
    }, await n.table(zt).update(oe.id, { parent: oe.parent }));
  }
  async function x(ie) {
    let Ee = (await Ce("Private", {
      name: "type",
      value: "eIEC61850-6-100"
    })).find((B) => B.parent?.id === ie.id);
    if (!Ee) {
      const B = {
        tagName: "Private",
        attributes: [{ name: "type", value: "eIEC61850-6-100" }],
        parent: null,
        namespace: ha.default,
        value: "",
        children: []
      };
      Ee = await l(B), await v(ie, Ee);
    }
    return Ee;
  }
  async function D(ie, oe) {
    oe.parent = null, await a(oe), ie.children && (ie.children = ie.children.filter((Ee) => Ee.id !== oe.id), await a(ie));
  }
  async function W() {
    const ie = await n.table(zt).where({ tagName: "SCL" }).toArray();
    if (ie.length === 0) throw new Error("there is no SCL element");
    if (ie.length > 1)
      throw new Error("there are multiple SCL elements; there can be only one");
    const oe = ie[0];
    if (oe.parent)
      throw new Error("the SCL element has a parent; the SCL should be the root element");
    return oe;
  }
  async function K(ie) {
    return await n.table(zt).get(ie);
  }
  async function G(ie) {
    return await n.table(zt).where({ tagName: ie }).toArray();
  }
  function re(ie) {
    const oe = se(ie);
    if (!oe)
      throw console.error('record does not have a "uuid" to move to "templateUUID"', ie), new Error('record does not have a "uuid" to move to "templateUUID"');
    ie.attributes?.push({ name: "templateUuid", value: oe }), de(ie);
  }
  function se(ie) {
    const oe = ie.attributes?.find((Ee) => Ee.name === "uuid");
    if (oe)
      return oe.value;
  }
  function de(ie) {
    ie.attributes || (ie.attributes = []);
    const oe = crypto.randomUUID(), Ee = ie.attributes.findIndex((et) => et.name === "uuid");
    Ee >= 0 ? ie.attributes[Ee].value = oe : ie.attributes.push({ name: "uuid", value: oe });
  }
  async function he(ie, oe) {
    return mh(n, ie, oe);
  }
  async function Ce(ie, oe) {
    return yh(n, ie, oe);
  }
  async function ae(ie) {
    return ie.children?.length ? await n.table(zt).where({ "parent.id": ie.id }).toArray() : [];
  }
  async function ye(ie, oe) {
    return (await ae(ie)).filter((B) => oe.includes(B.tagName));
  }
  async function pe(ie, oe = ke, Ee = []) {
    const B = [];
    let et = [ie];
    for (let it = 0; it < oe; it++) {
      const Ne = [];
      for (const Ge of et) {
        const At = await ye(Ge, Ee);
        At.length !== 0 && (Ne.push(...At), B.push(...At));
      }
      et = [...Ne];
    }
    return B;
  }
  function Fe() {
    n.close();
  }
}
async function mh(n, i, a) {
  try {
    return await n.table(zt).where({ tagName: i }).filter(
      (l) => !!l.attributes?.some((d) => d.name === a.name && d.value === a.value)
    ).first();
  } catch (u) {
    console.error({ msg: "could not find record by attribute", tagName: i, attr: a, err: u });
  }
}
async function yh(n, i, a) {
  try {
    return await n.table(zt).where({ tagName: i }).filter(
      (l) => !!l.attributes?.some((d) => d.name === a.name && d.value === a.value)
    ).toArray();
  } catch (u) {
    console.error({ msg: "could not find record by attribute", tagName: i, attr: a, err: u });
  }
  return [];
}
const vh = zi("");
function Lc() {
  return vh;
}
var Vs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gh(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Eo = { exports: {} }, bh = Eo.exports, pu;
function wh() {
  return pu || (pu = 1, function(n, i) {
    (function(a, u) {
      n.exports = u();
    })(bh, function() {
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
      var d = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Vs, v = Object.keys, x = Array.isArray;
      function D(e, t) {
        return typeof t != "object" || v(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || d.Promise || (d.Promise = Promise);
      var W = Object.getPrototypeOf, K = {}.hasOwnProperty;
      function G(e, t) {
        return K.call(e, t);
      }
      function re(e, t) {
        typeof t == "function" && (t = t(W(e))), (typeof Reflect > "u" ? v : Reflect.ownKeys)(t).forEach(function(r) {
          de(e, r, t[r]);
        });
      }
      var se = Object.defineProperty;
      function de(e, t, r, o) {
        se(e, t, D(r && G(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function he(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), de(e.prototype, "constructor", e), { extend: re.bind(null, e.prototype) };
        } };
      }
      var Ce = Object.getOwnPropertyDescriptor, ae = [].slice;
      function ye(e, t, r) {
        return ae.call(e, t, r);
      }
      function ke(e, t) {
        return t(e);
      }
      function pe(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Fe(e) {
        d.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function ie(e, t) {
        if (typeof t == "string" && G(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var r = [], o = 0, s = t.length; o < s; ++o) {
            var c = ie(e, t[o]);
            r.push(c);
          }
          return r;
        }
        var f = t.indexOf(".");
        if (f !== -1) {
          var p = e[t.substr(0, f)];
          return p == null ? void 0 : ie(p, t.substr(f + 1));
        }
      }
      function oe(e, t, r) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          pe(typeof r != "string" && "length" in r);
          for (var o = 0, s = t.length; o < s; ++o) oe(e, t[o], r[o]);
        } else {
          var c, f, p = t.indexOf(".");
          p !== -1 ? (c = t.substr(0, p), (f = t.substr(p + 1)) === "" ? r === void 0 ? x(e) && !isNaN(parseInt(c)) ? e.splice(c, 1) : delete e[c] : e[c] = r : oe(p = !(p = e[c]) || !G(e, c) ? e[c] = {} : p, f, r)) : r === void 0 ? x(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function Ee(e) {
        var t, r = {};
        for (t in e) G(e, t) && (r[t] = e[t]);
        return r;
      }
      var B = [].concat;
      function et(e) {
        return B.apply([], e);
      }
      var Ie = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(et([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return d[e];
      }), it = new Set(Ie.map(function(e) {
        return d[e];
      })), Ne = null;
      function Ge(e) {
        return Ne = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var o = Ne.get(r);
          if (o) return o;
          if (x(r)) {
            o = [], Ne.set(r, o);
            for (var s = 0, c = r.length; s < c; ++s) o.push(t(r[s]));
          } else if (it.has(r.constructor)) o = r;
          else {
            var f, p = W(r);
            for (f in o = p === Object.prototype ? {} : Object.create(p), Ne.set(r, o), r) G(r, f) && (o[f] = t(r[f]));
          }
          return o;
        }(e), Ne = null, e;
      }
      var At = {}.toString;
      function wt(e) {
        return At.call(e).slice(8, -1);
      }
      var Ue = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", be = typeof Ue == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Ue]) && t.apply(e);
      } : function() {
        return null;
      };
      function Pe(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var tt = {};
      function ze(e) {
        var t, r, o, s;
        if (arguments.length === 1) {
          if (x(e)) return e.slice();
          if (this === tt && typeof e == "string") return [e];
          if (s = be(e)) {
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
      var at = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Te = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], dt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Te), ot = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function ht(e, t) {
        this.name = e, this.message = t;
      }
      function rn(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(r) {
          return t[r].toString();
        }).filter(function(r, o, s) {
          return s.indexOf(r) === o;
        }).join(`
`);
      }
      function It(e, t, r, o) {
        this.failures = t, this.failedKeys = o, this.successCount = r, this.message = rn(e, t);
      }
      function pt(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(r) {
          return t[r];
        }), this.failuresByPos = t, this.message = rn(e, this.failures);
      }
      he(ht).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), he(It).from(ht), he(pt).from(ht);
      var P = dt.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), w = ht, F = dt.reduce(function(e, t) {
        var r = t + "Error";
        function o(s, c) {
          this.name = r, s ? typeof s == "string" ? (this.message = "".concat(s).concat(c ? `
 ` + c : ""), this.inner = c || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = ot[t] || r, this.inner = null);
        }
        return he(o).from(w), e[t] = o, e;
      }, {});
      F.Syntax = SyntaxError, F.Type = TypeError, F.Range = RangeError;
      var $ = Te.reduce(function(e, t) {
        return e[t + "Error"] = F[t], e;
      }, {}), De = dt.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = F[t]), e;
      }, {});
      function A() {
      }
      function L(e) {
        return e;
      }
      function Z(e, t) {
        return e == null || e === L ? t : function(r) {
          return t(e(r));
        };
      }
      function I(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function k(e, t) {
        return e === A ? t : function() {
          var r = e.apply(this, arguments);
          r !== void 0 && (arguments[0] = r);
          var o = this.onsuccess, s = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var c = t.apply(this, arguments);
          return o && (this.onsuccess = this.onsuccess ? I(o, this.onsuccess) : o), s && (this.onerror = this.onerror ? I(s, this.onerror) : s), c !== void 0 ? c : r;
        };
      }
      function j(e, t) {
        return e === A ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? I(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? I(o, this.onerror) : o);
        };
      }
      function V(e, t) {
        return e === A ? t : function(r) {
          var o = e.apply(this, arguments);
          D(r, o);
          var s = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? I(s, this.onsuccess) : s), c && (this.onerror = this.onerror ? I(c, this.onerror) : c), o === void 0 ? r === void 0 ? void 0 : r : D(o, r);
        };
      }
      function M(e, t) {
        return e === A ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function te(e, t) {
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
      De.ModifyError = It, De.DexieError = ht, De.BulkError = pt;
      var Q = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function me(e) {
        Q = e;
      }
      var ce = {}, xe = 100, Ie = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, W(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, W(t), e];
      }(), Te = Ie[0], dt = Ie[1], Ie = Ie[2], dt = dt && dt.then, Me = Te && Te.constructor, Be = !!Ie, ut = function(e, t) {
        tn.push([e, t]), _t && (queueMicrotask(Vo), _t = !1);
      }, mt = !0, _t = !0, ct = [], $t = [], Cn = L, Je = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: A, pgp: !1, env: {}, finalize: A }, ne = Je, tn = [], Vt = 0, Rn = [];
      function J(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = ne;
        if (typeof e != "function") {
          if (e !== ce) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && br(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function r(o, s) {
          try {
            s(function(c) {
              if (o._state === null) {
                if (c === o) throw new TypeError("A promise cannot be resolved with itself.");
                var f = o._lib && on();
                c && typeof c.then == "function" ? r(o, function(p, m) {
                  c instanceof J ? c._then(p, m) : c.then(p, m);
                }) : (o._state = !0, o._value = c, di(o)), f && sn();
              }
            }, br.bind(null, o));
          } catch (c) {
            br(o, c);
          }
        }(this, e);
      }
      var gr = { get: function() {
        var e = ne, t = Ln;
        function r(o, s) {
          var c = this, f = !e.global && (e !== ne || t !== Ln), p = f && !Dt(), m = new J(function(g, _) {
            wr(c, new fi(hi(o, e, f, p), hi(s, e, f, p), g, _, e));
          });
          return this._consoleTask && (m._consoleTask = this._consoleTask), m;
        }
        return r.prototype = ce, r;
      }, set: function(e) {
        de(this, "then", e && e.prototype === ce ? gr : { get: function() {
          return e;
        }, set: gr.set });
      } };
      function fi(e, t, r, o, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = r, this.reject = o, this.psd = s;
      }
      function br(e, t) {
        var r, o;
        $t.push(t), e._state === null && (r = e._lib && on(), t = Cn(t), e._state = !1, e._value = t, o = e, ct.some(function(s) {
          return s._value === o._value;
        }) || ct.push(o), di(e), r && sn());
      }
      function di(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var r = 0, o = t.length; r < o; ++r) wr(e, t[r]);
        var s = e._PSD;
        --s.ref || s.finalize(), Vt === 0 && (++Vt, ut(function() {
          --Vt == 0 && _r();
        }, []));
      }
      function wr(e, t) {
        if (e._state !== null) {
          var r = e._state ? t.onFulfilled : t.onRejected;
          if (r === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++Vt, ut($o, [r, e, t]);
        } else e._listeners.push(t);
      }
      function $o(e, t, r) {
        try {
          var o, s = t._value;
          !t._state && $t.length && ($t = []), o = Q && t._consoleTask ? t._consoleTask.run(function() {
            return e(s);
          }) : e(s), t._state || $t.indexOf(s) !== -1 || function(c) {
            for (var f = ct.length; f; ) if (ct[--f]._value === c._value) return ct.splice(f, 1);
          }(t), r.resolve(o);
        } catch (c) {
          r.reject(c);
        } finally {
          --Vt == 0 && _r(), --r.psd.ref || r.psd.finalize();
        }
      }
      function Vo() {
        Ut(Je, function() {
          on() && sn();
        });
      }
      function on() {
        var e = mt;
        return _t = mt = !1, e;
      }
      function sn() {
        var e, t, r;
        do
          for (; 0 < tn.length; ) for (e = tn, tn = [], r = e.length, t = 0; t < r; ++t) {
            var o = e[t];
            o[0].apply(null, o[1]);
          }
        while (0 < tn.length);
        _t = mt = !0;
      }
      function _r() {
        var e = ct;
        ct = [], e.forEach(function(o) {
          o._PSD.onunhandled.call(null, o._value, o);
        });
        for (var t = Rn.slice(0), r = t.length; r; ) t[--r]();
      }
      function kn(e) {
        return new J(ce, !1, e);
      }
      function Oe(e, t) {
        var r = ne;
        return function() {
          var o = on(), s = ne;
          try {
            return Nt(r, !0), e.apply(this, arguments);
          } catch (c) {
            t && t(c);
          } finally {
            Nt(s, !1), o && sn();
          }
        };
      }
      re(J.prototype, { then: gr, _then: function(e, t) {
        wr(this, new fi(null, null, e, t, ne));
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
          return J.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return J.resolve(e()).then(function() {
            return kn(t);
          });
        });
      }, timeout: function(e, t) {
        var r = this;
        return e < 1 / 0 ? new J(function(o, s) {
          var c = setTimeout(function() {
            return s(new F.Timeout(t));
          }, e);
          r.then(o, s).finally(clearTimeout.bind(null, c));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && de(J.prototype, Symbol.toStringTag, "Dexie.Promise"), Je.env = pi(), re(J, { all: function() {
        var e = ze.apply(null, arguments).map(Mn);
        return new J(function(t, r) {
          e.length === 0 && t([]);
          var o = e.length;
          e.forEach(function(s, c) {
            return J.resolve(s).then(function(f) {
              e[c] = f, --o || t(e);
            }, r);
          });
        });
      }, resolve: function(e) {
        return e instanceof J ? e : e && typeof e.then == "function" ? new J(function(t, r) {
          e.then(t, r);
        }) : new J(ce, !0, e);
      }, reject: kn, race: function() {
        var e = ze.apply(null, arguments).map(Mn);
        return new J(function(t, r) {
          e.map(function(o) {
            return J.resolve(o).then(t, r);
          });
        });
      }, PSD: { get: function() {
        return ne;
      }, set: function(e) {
        return ne = e;
      } }, totalEchoes: { get: function() {
        return Ln;
      } }, newPSD: Ot, usePSD: Ut, scheduler: { get: function() {
        return ut;
      }, set: function(e) {
        ut = e;
      } }, rejectionMapper: { get: function() {
        return Cn;
      }, set: function(e) {
        Cn = e;
      } }, follow: function(e, t) {
        return new J(function(r, o) {
          return Ot(function(s, c) {
            var f = ne;
            f.unhandleds = [], f.onunhandled = c, f.finalize = I(function() {
              var p, m = this;
              p = function() {
                m.unhandleds.length === 0 ? s() : c(m.unhandleds[0]);
              }, Rn.push(function g() {
                p(), Rn.splice(Rn.indexOf(g), 1);
              }), ++Vt, ut(function() {
                --Vt == 0 && _r();
              }, []);
            }, f.finalize), e();
          }, t, r, o);
        });
      } }), Me && (Me.allSettled && de(J, "allSettled", function() {
        var e = ze.apply(null, arguments).map(Mn);
        return new J(function(t) {
          e.length === 0 && t([]);
          var r = e.length, o = new Array(r);
          e.forEach(function(s, c) {
            return J.resolve(s).then(function(f) {
              return o[c] = { status: "fulfilled", value: f };
            }, function(f) {
              return o[c] = { status: "rejected", reason: f };
            }).then(function() {
              return --r || t(o);
            });
          });
        });
      }), Me.any && typeof AggregateError < "u" && de(J, "any", function() {
        var e = ze.apply(null, arguments).map(Mn);
        return new J(function(t, r) {
          e.length === 0 && r(new AggregateError([]));
          var o = e.length, s = new Array(o);
          e.forEach(function(c, f) {
            return J.resolve(c).then(function(p) {
              return t(p);
            }, function(p) {
              s[f] = p, --o || r(new AggregateError(s));
            });
          });
        });
      }), Me.withResolvers && (J.withResolvers = Me.withResolvers));
      var $e = { awaits: 0, echoes: 0, id: 0 }, Uo = 0, Fn = [], jn = 0, Ln = 0, Go = 0;
      function Ot(e, t, r, o) {
        var s = ne, c = Object.create(s);
        return c.parent = s, c.ref = 0, c.global = !1, c.id = ++Go, Je.env, c.env = Be ? { Promise: J, PromiseProp: { value: J, configurable: !0, writable: !0 }, all: J.all, race: J.race, allSettled: J.allSettled, any: J.any, resolve: J.resolve, reject: J.reject } : {}, t && D(c, t), ++s.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = Ut(c, e, r, o), c.ref === 0 && c.finalize(), o;
      }
      function an() {
        return $e.id || ($e.id = ++Uo), ++$e.awaits, $e.echoes += xe, $e.id;
      }
      function Dt() {
        return !!$e.awaits && (--$e.awaits == 0 && ($e.id = 0), $e.echoes = $e.awaits * xe, !0);
      }
      function Mn(e) {
        return $e.echoes && e && e.constructor === Me ? (an(), e.then(function(t) {
          return Dt(), t;
        }, function(t) {
          return Dt(), je(t);
        })) : e;
      }
      function Ho() {
        var e = Fn[Fn.length - 1];
        Fn.pop(), Nt(e, !1);
      }
      function Nt(e, t) {
        var r, o = ne;
        (t ? !$e.echoes || jn++ && e === ne : !jn || --jn && e === ne) || queueMicrotask(t ? (function(s) {
          ++Ln, $e.echoes && --$e.echoes != 0 || ($e.echoes = $e.awaits = $e.id = 0), Fn.push(ne), Nt(s, !0);
        }).bind(null, e) : Ho), e !== ne && (ne = e, o === Je && (Je.env = pi()), Be && (r = Je.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(d, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function pi() {
        var e = d.Promise;
        return Be ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(d, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Ut(e, t, r, o, s) {
        var c = ne;
        try {
          return Nt(e, !0), t(r, o, s);
        } finally {
          Nt(c, !1);
        }
      }
      function hi(e, t, r, o) {
        return typeof e != "function" ? e : function() {
          var s = ne;
          r && an(), Nt(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Nt(s, !1), o && queueMicrotask(Dt);
          }
        };
      }
      function Sr(e) {
        Promise === Me && $e.echoes === 0 ? jn === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + dt).indexOf("[native code]") === -1 && (an = Dt = A);
      var je = J.reject, Gt = "￿", xt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", mi = "String expected.", un = [], Kn = "__dbnames", xr = "readonly", Er = "readwrite";
      function Ht(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var yi = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function qn(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = Ge(t))[e], t;
        };
      }
      function vi() {
        throw F.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function ve(e, t) {
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
                for (var f = s.length, p = c.length, m = f < p ? f : p, g = 0; g < m; ++g) if (s[g] !== c[g]) return s[g] < c[g] ? -1 : 1;
                return f === p ? 0 : f < p ? -1 : 1;
              }(bi(e), bi(t));
            case "Array":
              return function(s, c) {
                for (var f = s.length, p = c.length, m = f < p ? f : p, g = 0; g < m; ++g) {
                  var _ = ve(s[g], c[g]);
                  if (_ !== 0) return _;
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
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = wt(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function bi(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function Bn(e, t, r) {
        var o = e.schema.yProps;
        return o ? (t && 0 < r.numFailures && (t = t.filter(function(s, c) {
          return !r.failures[c];
        })), Promise.all(o.map(function(s) {
          return s = s.updatesTable, t ? e.db.table(s).where("k").anyOf(t).delete() : e.db.table(s).clear();
        })).then(function() {
          return r;
        })) : r;
      }
      var wi = (Ae.prototype._trans = function(e, t, r) {
        var o = this._tx || ne.trans, s = this.name, c = Q && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function f(g, _, h) {
          if (!h.schema[s]) throw new F.NotFound("Table " + s + " not part of transaction");
          return t(h.idbtrans, h);
        }
        var p = on();
        try {
          var m = o && o.db._novip === this.db._novip ? o === ne.trans ? o._promise(e, f, r) : Ot(function() {
            return o._promise(e, f, r);
          }, { trans: o, transless: ne.transless || ne }) : function g(_, h, T, y) {
            if (_.idbdb && (_._state.openComplete || ne.letThrough || _._vip)) {
              var b = _._createTransaction(h, T, _._dbSchema);
              try {
                b.create(), _._state.PR1398_maxLoop = 3;
              } catch (E) {
                return E.name === P.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                  return g(_, h, T, y);
                })) : je(E);
              }
              return b._promise(h, function(E, S) {
                return Ot(function() {
                  return ne.trans = b, y(E, S, b);
                });
              }).then(function(E) {
                if (h === "readwrite") try {
                  b.idbtrans.commit();
                } catch {
                }
                return h === "readonly" ? E : b._completion.then(function() {
                  return E;
                });
              });
            }
            if (_._state.openComplete) return je(new F.DatabaseClosed(_._state.dbOpenError));
            if (!_._state.isBeingOpened) {
              if (!_._state.autoOpen) return je(new F.DatabaseClosed());
              _.open().catch(A);
            }
            return _._state.dbReadyPromise.then(function() {
              return g(_, h, T, y);
            });
          }(this.db, e, [this.name], f);
          return c && (m._consoleTask = c, m = m.catch(function(g) {
            return console.trace(g), je(g);
          })), m;
        } finally {
          p && sn();
        }
      }, Ae.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? je(new F.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(s) {
            return r.hook.reading.fire(s);
          });
        }).then(t);
      }, Ae.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (x(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = v(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var r = this.schema.indexes.concat(this.schema.primKey).filter(function(p) {
          if (p.compound && t.every(function(g) {
            return 0 <= p.keyPath.indexOf(g);
          })) {
            for (var m = 0; m < t.length; ++m) if (t.indexOf(p.keyPath[m]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(p, m) {
          return p.keyPath.length - m.keyPath.length;
        })[0];
        if (r && this.db._maxKey !== Gt) {
          var c = r.keyPath.slice(0, t.length);
          return this.where(c).equals(c.map(function(m) {
            return e[m];
          }));
        }
        !r && Q && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var o = this.schema.idxByName;
        function s(p, m) {
          return ve(p, m) === 0;
        }
        var f = t.reduce(function(h, m) {
          var g = h[0], _ = h[1], h = o[m], T = e[m];
          return [g || h, g || !h ? Ht(_, h && h.multi ? function(y) {
            return y = ie(y, m), x(y) && y.some(function(b) {
              return s(T, b);
            });
          } : function(y) {
            return s(T, ie(y, m));
          }) : _];
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
        return new this.db.Collection(new this.db.WhereClause(this, x(e) ? "[".concat(e.join("+"), "]") : e));
      }, Ae.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Ae.prototype.mapToClass = function(e) {
        var t, r = this.db, o = this.name;
        function s() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof vi && (function(m, g) {
          if (typeof g != "function" && g !== null) throw new TypeError("Class extends value " + String(g) + " is not a constructor or null");
          function _() {
            this.constructor = m;
          }
          a(m, g), m.prototype = g === null ? Object.create(g) : (_.prototype = g.prototype, new _());
        }(s, t = e), Object.defineProperty(s.prototype, "db", { get: function() {
          return r;
        }, enumerable: !1, configurable: !0 }), s.prototype.table = function() {
          return o;
        }, e = s);
        for (var c = /* @__PURE__ */ new Set(), f = e.prototype; f; f = W(f)) Object.getOwnPropertyNames(f).forEach(function(m) {
          return c.add(m);
        });
        function p(m) {
          if (!m) return m;
          var g, _ = Object.create(e.prototype);
          for (g in m) if (!c.has(g)) try {
            _[g] = m[g];
          } catch {
          }
          return _;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = p, this.hook("reading", p), e;
      }, Ae.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          D(this, e);
        });
      }, Ae.prototype.add = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, f = e;
        return c && s && (f = qn(c)(e)), this._trans("readwrite", function(p) {
          return r.core.mutate({ trans: p, type: "add", keys: t != null ? [t] : null, values: [f] });
        }).then(function(p) {
          return p.numFailures ? J.reject(p.failures[0]) : p.lastResult;
        }).then(function(p) {
          if (c) try {
            oe(e, c, p);
          } catch {
          }
          return p;
        });
      }, Ae.prototype.update = function(e, t) {
        return typeof e != "object" || x(e) ? this.where(":id").equals(e).modify(t) : (e = ie(e, this.schema.primKey.keyPath), e === void 0 ? je(new F.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, Ae.prototype.put = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, f = e;
        return c && s && (f = qn(c)(e)), this._trans("readwrite", function(p) {
          return r.core.mutate({ trans: p, type: "put", values: [f], keys: t != null ? [t] : null });
        }).then(function(p) {
          return p.numFailures ? J.reject(p.failures[0]) : p.lastResult;
        }).then(function(p) {
          if (c) try {
            oe(e, c, p);
          } catch {
          }
          return p;
        });
      }, Ae.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: [e] }).then(function(o) {
            return Bn(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? J.reject(o.failures[0]) : void 0;
          });
        });
      }, Ae.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: yi }).then(function(r) {
            return Bn(e, null, r);
          });
        }).then(function(t) {
          return t.numFailures ? J.reject(t.failures[0]) : void 0;
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
          var g = o.schema.primKey, p = g.auto, g = g.keyPath;
          if (g && s) throw new F.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new F.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, g = g && p ? e.map(qn(g)) : e;
          return o.core.mutate({ trans: f, type: "add", keys: s, values: g, wantResults: c }).then(function(b) {
            var h = b.numFailures, T = b.results, y = b.lastResult, b = b.failures;
            if (h === 0) return c ? T : y;
            throw new pt("".concat(o.name, ".bulkAdd(): ").concat(h, " of ").concat(m, " operations failed"), b);
          });
        });
      }, Ae.prototype.bulkPut = function(e, t, r) {
        var o = this, s = Array.isArray(t) ? t : void 0, c = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(f) {
          var g = o.schema.primKey, p = g.auto, g = g.keyPath;
          if (g && s) throw new F.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new F.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, g = g && p ? e.map(qn(g)) : e;
          return o.core.mutate({ trans: f, type: "put", keys: s, values: g, wantResults: c }).then(function(b) {
            var h = b.numFailures, T = b.results, y = b.lastResult, b = b.failures;
            if (h === 0) return c ? T : y;
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
            var m = [], g = [];
            e.forEach(function(h, T) {
              var y = h.key, b = h.changes, E = p[T];
              if (E) {
                for (var S = 0, C = Object.keys(b); S < C.length; S++) {
                  var O = C[S], N = b[O];
                  if (O === t.schema.primKey.keyPath) {
                    if (ve(N, y) !== 0) throw new F.Constraint("Cannot update primary key in bulkUpdate()");
                  } else oe(E, O, N);
                }
                c.push(T), m.push(y), g.push(E);
              }
            });
            var _ = m.length;
            return r.mutate({ trans: f, type: "put", keys: m, values: g, updates: { keys: o, changeSpecs: s } }).then(function(h) {
              var T = h.numFailures, y = h.failures;
              if (T === 0) return _;
              for (var b = 0, E = Object.keys(y); b < E.length; b++) {
                var S, C = E[b], O = c[Number(C)];
                O != null && (S = y[C], delete y[C], y[O] = S);
              }
              throw new pt("".concat(t.name, ".bulkUpdate(): ").concat(T, " of ").concat(_, " operations failed"), y);
            });
          });
        });
      }, Ae.prototype.bulkDelete = function(e) {
        var t = this, r = e.length;
        return this._trans("readwrite", function(o) {
          return t.core.mutate({ trans: o, type: "delete", keys: e }).then(function(s) {
            return Bn(t, e, s);
          });
        }).then(function(f) {
          var s = f.numFailures, c = f.lastResult, f = f.failures;
          if (s === 0) return c;
          throw new pt("".concat(t.name, ".bulkDelete(): ").concat(s, " of ").concat(r, " operations failed"), f);
        });
      }, Ae);
      function Ae() {
      }
      function mn(e) {
        function t(f, p) {
          if (p) {
            for (var m = arguments.length, g = new Array(m - 1); --m; ) g[m - 1] = arguments[m];
            return r[f].subscribe.apply(null, g), e;
          }
          if (typeof f == "string") return r[f];
        }
        var r = {};
        t.addEventType = c;
        for (var o = 1, s = arguments.length; o < s; ++o) c(arguments[o]);
        return t;
        function c(f, p, m) {
          if (typeof f != "object") {
            var g;
            p = p || M;
            var _ = { subscribers: [], fire: m = m || A, subscribe: function(h) {
              _.subscribers.indexOf(h) === -1 && (_.subscribers.push(h), _.fire = p(_.fire, h));
            }, unsubscribe: function(h) {
              _.subscribers = _.subscribers.filter(function(T) {
                return T !== h;
              }), _.fire = _.subscribers.reduce(p, m);
            } };
            return r[f] = t[f] = _;
          }
          v(g = f).forEach(function(h) {
            var T = g[h];
            if (x(T)) c(h, g[h][0], g[h][1]);
            else {
              if (T !== "asap") throw new F.InvalidArgument("Invalid event config");
              var y = c(h, L, function() {
                for (var b = arguments.length, E = new Array(b); b--; ) E[b] = arguments[b];
                y.subscribers.forEach(function(S) {
                  Fe(function() {
                    S.apply(null, E);
                  });
                });
              });
            }
          });
        }
      }
      function yn(e, t) {
        return he(t).from({ prototype: e }), t;
      }
      function cn(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function Tr(e, t) {
        e.filter = Ht(e.filter, t);
      }
      function Cr(e, t, r) {
        var o = e.replayFilter;
        e.replayFilter = o ? function() {
          return Ht(o(), t());
        } : t, e.justLimit = r && !o;
      }
      function $n(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var r = t.getIndexByKeyPath(e.index);
        if (!r) throw new F.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return r;
      }
      function _i(e, t, r) {
        var o = $n(e, t.schema);
        return t.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: o, range: e.range } });
      }
      function Vn(e, t, r, o) {
        var s = e.replayFilter ? Ht(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var c = {}, f = function(p, m, g) {
            var _, h;
            s && !s(m, g, function(T) {
              return m.stop(T);
            }, function(T) {
              return m.fail(T);
            }) || ((h = "" + (_ = m.primaryKey)) == "[object ArrayBuffer]" && (h = "" + new Uint8Array(_)), G(c, h) || (c[h] = !0, t(p, m, g)));
          };
          return Promise.all([e.or._iterate(f, r), Si(_i(e, o, r), e.algorithm, f, !e.keysOnly && e.valueMapper)]);
        }
        return Si(_i(e, o, r), Ht(e.algorithm, s), t, !e.keysOnly && e.valueMapper);
      }
      function Si(e, t, r, o) {
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
      var vn = (xi.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var r = t.add;
          if (x(r)) return l(l([], x(e) ? e : [], !0), r).sort();
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
          if (x(o)) return x(e) ? e.filter(function(s) {
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
      }, xi);
      function xi(e) {
        this["@@propmod"] = e;
      }
      var Wo = (we.prototype._read = function(e, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, je.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, we.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, je.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, we.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Ht(t.algorithm, e);
      }, we.prototype._iterate = function(e, t) {
        return Vn(this._ctx, e, t, this._ctx.table.core);
      }, we.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && D(r, e), t._ctx = r, t;
      }, we.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, we.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(r) {
          return Vn(t, e, r, t.table.core);
        });
      }, we.prototype.count = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx, s = o.table.core;
          if (cn(o, !0)) return s.count({ trans: r, query: { index: $n(o, s.schema), range: o.range } }).then(function(f) {
            return Math.min(f, o.limit);
          });
          var c = 0;
          return Vn(o, function() {
            return ++c, !1;
          }, r, s).then(function() {
            return c;
          });
        }).then(e);
      }, we.prototype.sortBy = function(e, t) {
        var r = e.split(".").reverse(), o = r[0], s = r.length - 1;
        function c(m, g) {
          return g ? c(m[r[g]], g - 1) : m[o];
        }
        var f = this._ctx.dir === "next" ? 1 : -1;
        function p(m, g) {
          return ve(c(m, s), c(g, s)) * f;
        }
        return this.toArray(function(m) {
          return m.sort(p);
        }).then(t);
      }, we.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx;
          if (o.dir === "next" && cn(o, !0) && 0 < o.limit) {
            var s = o.valueMapper, c = $n(o, o.table.core.schema);
            return o.table.core.query({ trans: r, limit: o.limit, values: !0, query: { index: c, range: o.range } }).then(function(p) {
              return p = p.result, s ? p.map(s) : p;
            });
          }
          var f = [];
          return Vn(o, function(p) {
            return f.push(p);
          }, r, o.table.core).then(function() {
            return f;
          });
        }, e);
      }, we.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, cn(t) ? Cr(t, function() {
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
      }, we.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Cr(this._ctx, function() {
          var t = e;
          return function(r, o, s) {
            return --t <= 0 && o(s), 0 <= t;
          };
        }, !0), this;
      }, we.prototype.until = function(e, t) {
        return Tr(this._ctx, function(r, o, s) {
          return !e(r.value) || (o(s), t);
        }), this;
      }, we.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, we.prototype.last = function(e) {
        return this.reverse().first(e);
      }, we.prototype.filter = function(e) {
        var t;
        return Tr(this._ctx, function(r) {
          return e(r.value);
        }), (t = this._ctx).isMatch = Ht(t.isMatch, e), this;
      }, we.prototype.and = function(e) {
        return this.filter(e);
      }, we.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, we.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, we.prototype.desc = function() {
        return this.reverse();
      }, we.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.key, o);
        });
      }, we.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, we.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.primaryKey, o);
        });
      }, we.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(o, s) {
          r.push(s.key);
        }).then(function() {
          return r;
        }).then(e);
      }, we.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && cn(t, !0) && 0 < t.limit) return this._read(function(o) {
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
      }, we.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, we.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, we.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, we.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return Tr(this._ctx, function(s) {
          var o = s.primaryKey.toString(), s = G(t, o);
          return t[o] = !0, !s;
        }), this;
      }, we.prototype.modify = function(e) {
        var t = this, r = this._ctx;
        return this._write(function(o) {
          var s, c, f;
          f = typeof e == "function" ? e : (s = v(e), c = s.length, function(C) {
            for (var O = !1, N = 0; N < c; ++N) {
              var R = s[N], q = e[R], Y = ie(C, R);
              q instanceof vn ? (oe(C, R, q.execute(Y)), O = !0) : Y !== q && (oe(C, R, q), O = !0);
            }
            return O;
          });
          var p = r.table.core, h = p.schema.primaryKey, m = h.outbound, g = h.extractKey, _ = 200, h = t.db._options.modifyChunkSize;
          h && (_ = typeof h == "object" ? h[p.name] || h["*"] || 200 : h);
          function T(C, R) {
            var N = R.failures, R = R.numFailures;
            b += C - R;
            for (var q = 0, Y = v(N); q < Y.length; q++) {
              var U = Y[q];
              y.push(N[U]);
            }
          }
          var y = [], b = 0, E = [], S = e === Ei;
          return t.clone().primaryKeys().then(function(C) {
            function O(R) {
              var q = Math.min(_, C.length - R), Y = C.slice(R, R + q);
              return (S ? Promise.resolve([]) : p.getMany({ trans: o, keys: Y, cache: "immutable" })).then(function(U) {
                var H = [], z = [], X = m ? [] : null, ee = S ? Y : [];
                if (!S) for (var fe = 0; fe < q; ++fe) {
                  var ge = U[fe], le = { value: Ge(ge), primKey: C[R + fe] };
                  f.call(le, le.value, le) !== !1 && (le.value == null ? ee.push(C[R + fe]) : m || ve(g(ge), g(le.value)) === 0 ? (z.push(le.value), m && X.push(C[R + fe])) : (ee.push(C[R + fe]), H.push(le.value)));
                }
                return Promise.resolve(0 < H.length && p.mutate({ trans: o, type: "add", values: H }).then(function(Re) {
                  for (var ue in Re.failures) ee.splice(parseInt(ue), 1);
                  T(H.length, Re);
                })).then(function() {
                  return (0 < z.length || N && typeof e == "object") && p.mutate({ trans: o, type: "put", keys: X, values: z, criteria: N, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < R }).then(function(Re) {
                    return T(z.length, Re);
                  });
                }).then(function() {
                  return (0 < ee.length || N && S) && p.mutate({ trans: o, type: "delete", keys: ee, criteria: N, isAdditionalChunk: 0 < R }).then(function(Re) {
                    return Bn(r.table, ee, Re);
                  }).then(function(Re) {
                    return T(ee.length, Re);
                  });
                }).then(function() {
                  return C.length > R + q && O(R + _);
                });
              });
            }
            var N = cn(r) && r.limit === 1 / 0 && (typeof e != "function" || S) && { index: r.index, range: r.range };
            return O(0).then(function() {
              if (0 < y.length) throw new It("Error modifying one or more objects", y, b, E);
              return C.length;
            });
          });
        });
      }, we.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !cn(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(Ei) : this._write(function(r) {
          var o = e.table.core.schema.primaryKey, s = t;
          return e.table.core.count({ trans: r, query: { index: o, range: s } }).then(function(c) {
            return e.table.core.mutate({ trans: r, type: "deleteRange", range: s }).then(function(m) {
              var p = m.failures, m = m.numFailures;
              if (m) throw new It("Could not delete some values", Object.keys(p).map(function(g) {
                return p[g];
              }), c - m);
              return c - m;
            });
          });
        });
      }, we);
      function we() {
      }
      var Ei = function(e, t) {
        return t.value = null;
      };
      function Yo(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function Qo(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function st(e, t, r) {
        return e = e instanceof Ci ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function ln(e) {
        return new e.Collection(e, function() {
          return Ti("");
        }).limit(0);
      }
      function Un(e, t, r, o) {
        var s, c, f, p, m, g, _, h = r.length;
        if (!r.every(function(b) {
          return typeof b == "string";
        })) return st(e, mi);
        function T(b) {
          s = b === "next" ? function(S) {
            return S.toUpperCase();
          } : function(S) {
            return S.toLowerCase();
          }, c = b === "next" ? function(S) {
            return S.toLowerCase();
          } : function(S) {
            return S.toUpperCase();
          }, f = b === "next" ? Yo : Qo;
          var E = r.map(function(S) {
            return { lower: c(S), upper: s(S) };
          }).sort(function(S, C) {
            return f(S.lower, C.lower);
          });
          p = E.map(function(S) {
            return S.upper;
          }), m = E.map(function(S) {
            return S.lower;
          }), _ = (g = b) === "next" ? "" : o;
        }
        T("next"), e = new e.Collection(e, function() {
          return Rt(p[0], m[h - 1] + o);
        }), e._ondirectionchange = function(b) {
          T(b);
        };
        var y = 0;
        return e._addAlgorithm(function(b, E, S) {
          var C = b.key;
          if (typeof C != "string") return !1;
          var O = c(C);
          if (t(O, m, y)) return !0;
          for (var N = null, R = y; R < h; ++R) {
            var q = function(Y, U, H, z, X, ee) {
              for (var fe = Math.min(Y.length, z.length), ge = -1, le = 0; le < fe; ++le) {
                var Re = U[le];
                if (Re !== z[le]) return X(Y[le], H[le]) < 0 ? Y.substr(0, le) + H[le] + H.substr(le + 1) : X(Y[le], z[le]) < 0 ? Y.substr(0, le) + z[le] + H.substr(le + 1) : 0 <= ge ? Y.substr(0, ge) + U[ge] + H.substr(ge + 1) : null;
                X(Y[le], Re) < 0 && (ge = le);
              }
              return fe < z.length && ee === "next" ? Y + H.substr(Y.length) : fe < Y.length && ee === "prev" ? Y.substr(0, H.length) : ge < 0 ? null : Y.substr(0, ge) + z[ge] + H.substr(ge + 1);
            }(C, O, p[R], m[R], f, g);
            q === null && N === null ? y = R + 1 : (N === null || 0 < f(N, q)) && (N = q);
          }
          return E(N !== null ? function() {
            b.continue(N + _);
          } : S), !1;
        }), e;
      }
      function Rt(e, t, r, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: o };
      }
      function Ti(e) {
        return { type: 1, lower: e, upper: e };
      }
      var Ci = (Object.defineProperty(Ve.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Ve.prototype.between = function(e, t, r, o) {
        r = r !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || o) && (!r || !o) ? ln(this) : new this.Collection(this, function() {
            return Rt(e, t, !r, !o);
          });
        } catch {
          return st(this, xt);
        }
      }, Ve.prototype.equals = function(e) {
        return e == null ? st(this, xt) : new this.Collection(this, function() {
          return Ti(e);
        });
      }, Ve.prototype.above = function(e) {
        return e == null ? st(this, xt) : new this.Collection(this, function() {
          return Rt(e, void 0, !0);
        });
      }, Ve.prototype.aboveOrEqual = function(e) {
        return e == null ? st(this, xt) : new this.Collection(this, function() {
          return Rt(e, void 0, !1);
        });
      }, Ve.prototype.below = function(e) {
        return e == null ? st(this, xt) : new this.Collection(this, function() {
          return Rt(void 0, e, !1, !0);
        });
      }, Ve.prototype.belowOrEqual = function(e) {
        return e == null ? st(this, xt) : new this.Collection(this, function() {
          return Rt(void 0, e);
        });
      }, Ve.prototype.startsWith = function(e) {
        return typeof e != "string" ? st(this, mi) : this.between(e, e + Gt, !0, !0);
      }, Ve.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Un(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], Gt);
      }, Ve.prototype.equalsIgnoreCase = function(e) {
        return Un(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, Ve.prototype.anyOfIgnoreCase = function() {
        var e = ze.apply(tt, arguments);
        return e.length === 0 ? ln(this) : Un(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, Ve.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = ze.apply(tt, arguments);
        return e.length === 0 ? ln(this) : Un(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, Gt);
      }, Ve.prototype.anyOf = function() {
        var e = this, t = ze.apply(tt, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return st(this, xt);
        }
        if (t.length === 0) return ln(this);
        var o = new this.Collection(this, function() {
          return Rt(t[0], t[t.length - 1]);
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
      }, Ve.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Ve.prototype.noneOf = function() {
        var e = ze.apply(tt, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return st(this, xt);
        }
        var t = e.reduce(function(r, o) {
          return r ? r.concat([[r[r.length - 1][1], o]]) : [[-1 / 0, o]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, Ve.prototype.inAnyRange = function(C, t) {
        var r = this, o = this._cmp, s = this._ascending, c = this._descending, f = this._min, p = this._max;
        if (C.length === 0) return ln(this);
        if (!C.every(function(O) {
          return O[0] !== void 0 && O[1] !== void 0 && s(O[0], O[1]) <= 0;
        })) return st(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", F.InvalidArgument);
        var m = !t || t.includeLowers !== !1, g = t && t.includeUppers === !0, _, h = s;
        function T(O, N) {
          return h(O[0], N[0]);
        }
        try {
          (_ = C.reduce(function(O, N) {
            for (var R = 0, q = O.length; R < q; ++R) {
              var Y = O[R];
              if (o(N[0], Y[1]) < 0 && 0 < o(N[1], Y[0])) {
                Y[0] = f(Y[0], N[0]), Y[1] = p(Y[1], N[1]);
                break;
              }
            }
            return R === q && O.push(N), O;
          }, [])).sort(T);
        } catch {
          return st(this, xt);
        }
        var y = 0, b = g ? function(O) {
          return 0 < s(O, _[y][1]);
        } : function(O) {
          return 0 <= s(O, _[y][1]);
        }, E = m ? function(O) {
          return 0 < c(O, _[y][0]);
        } : function(O) {
          return 0 <= c(O, _[y][0]);
        }, S = b, C = new this.Collection(this, function() {
          return Rt(_[0][0], _[_.length - 1][1], !m, !g);
        });
        return C._ondirectionchange = function(O) {
          h = O === "next" ? (S = b, s) : (S = E, c), _.sort(T);
        }, C._addAlgorithm(function(O, N, R) {
          for (var q, Y = O.key; S(Y); ) if (++y === _.length) return N(R), !1;
          return !b(q = Y) && !E(q) || (r._cmp(Y, _[y][1]) === 0 || r._cmp(Y, _[y][0]) === 0 || N(function() {
            h === s ? O.continue(_[y][0]) : O.continue(_[y][1]);
          }), !1);
        }), C;
      }, Ve.prototype.startsWithAnyOf = function() {
        var e = ze.apply(tt, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? ln(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + Gt];
        })) : st(this, "startsWithAnyOf() only works with strings");
      }, Ve);
      function Ve() {
      }
      function yt(e) {
        return Oe(function(t) {
          return gn(t), e(t.target.error), !1;
        });
      }
      function gn(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var bn = "storagemutated", Ar = "x-storagemutated-1", kt = mn(null, bn), Xo = (vt.prototype._lock = function() {
        return pe(!ne.global), ++this._reculock, this._reculock !== 1 || ne.global || (ne.lockOwnerFor = this), this;
      }, vt.prototype._unlock = function() {
        if (pe(!ne.global), --this._reculock == 0) for (ne.global || (ne.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Ut(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, vt.prototype._locked = function() {
        return this._reculock && ne.lockOwnerFor !== this;
      }, vt.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var r = this.db.idbdb, o = this.db._state.dbOpenError;
        if (pe(!this.idbtrans), !e && !r) switch (o && o.name) {
          case "DatabaseClosedError":
            throw new F.DatabaseClosed(o);
          case "MissingAPIError":
            throw new F.MissingAPI(o.message, o);
          default:
            throw new F.OpenFailed(o);
        }
        if (!this.active) throw new F.TransactionInactive();
        return pe(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Oe(function(s) {
          gn(s), t._reject(e.error);
        }), e.onabort = Oe(function(s) {
          gn(s), t.active && t._reject(new F.Abort(e.error)), t.active = !1, t.on("abort").fire(s);
        }), e.oncomplete = Oe(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && kt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, vt.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return je(new F.ReadOnly("Transaction is readonly"));
        if (!this.active) return je(new F.TransactionInactive());
        if (this._locked()) return new J(function(c, f) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, r).then(c, f);
          }, ne]);
        });
        if (r) return Ot(function() {
          var c = new J(function(f, p) {
            o._lock();
            var m = t(f, p, o);
            m && m.then && m.then(f, p);
          });
          return c.finally(function() {
            return o._unlock();
          }), c._lib = !0, c;
        });
        var s = new J(function(c, f) {
          var p = t(c, f, o);
          p && p.then && p.then(c, f);
        });
        return s._lib = !0, s;
      }, vt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, vt.prototype.waitFor = function(e) {
        var t, r = this._root(), o = J.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return o;
        }) : (r._waitingFor = o, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function c() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (t.get(-1 / 0).onsuccess = c);
        }());
        var s = r._waitingFor;
        return new J(function(c, f) {
          o.then(function(p) {
            return r._waitingQueue.push(Oe(c.bind(null, p)));
          }, function(p) {
            return r._waitingQueue.push(Oe(f.bind(null, p)));
          }).finally(function() {
            r._waitingFor === s && (r._waitingFor = null);
          });
        });
      }, vt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new F.Abort()));
      }, vt.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (G(t, e)) return t[e];
        var r = this.schema[e];
        if (!r) throw new F.NotFound("Table " + e + " not part of transaction");
        return r = new this.db.Table(e, r, this), r.core = this.db.core.table(e), t[e] = r;
      }, vt);
      function vt() {
      }
      function Pr(e, t, r, o, s, c, f, p) {
        return { name: e, keyPath: t, unique: r, multi: o, auto: s, compound: c, src: (r && !f ? "&" : "") + (o ? "*" : "") + (s ? "++" : "") + Ai(t), type: p };
      }
      function Ai(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Ir(e, t, r) {
        return { name: e, primKey: t, indexes: r, mappedClass: null, idxByName: (o = function(s) {
          return [s.name, s];
        }, r.reduce(function(s, c, f) {
          return f = o(c, f), f && (s[f[0]] = f[1]), s;
        }, {})) };
        var o;
      }
      var wn = function(e) {
        try {
          return e.only([[]]), wn = function() {
            return [[]];
          }, [[]];
        } catch {
          return wn = function() {
            return Gt;
          }, Gt;
        }
      };
      function Or(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(r) {
          return r[t];
        } : function(r) {
          return ie(r, t);
        } : function(r) {
          return ie(r, e);
        };
        var t;
      }
      function Pi(e) {
        return [].slice.call(e);
      }
      var zo = 0;
      function _n(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Jo(e, t, m) {
        function o(S) {
          if (S.type === 3) return null;
          if (S.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var y = S.lower, b = S.upper, E = S.lowerOpen, S = S.upperOpen;
          return y === void 0 ? b === void 0 ? null : t.upperBound(b, !!S) : b === void 0 ? t.lowerBound(y, !!E) : t.bound(y, b, !!E, !!S);
        }
        function s(T) {
          var y, b = T.name;
          return { name: b, schema: T, mutate: function(E) {
            var S = E.trans, C = E.type, O = E.keys, N = E.values, R = E.range;
            return new Promise(function(q, Y) {
              q = Oe(q);
              var U = S.objectStore(b), H = U.keyPath == null, z = C === "put" || C === "add";
              if (!z && C !== "delete" && C !== "deleteRange") throw new Error("Invalid operation type: " + C);
              var X, ee = (O || N || { length: 1 }).length;
              if (O && N && O.length !== N.length) throw new Error("Given keys array must have same length as given values array.");
              if (ee === 0) return q({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function fe(Ze) {
                ++Re, gn(Ze);
              }
              var ge = [], le = [], Re = 0;
              if (C === "deleteRange") {
                if (R.type === 4) return q({ numFailures: Re, failures: le, results: [], lastResult: void 0 });
                R.type === 3 ? ge.push(X = U.clear()) : ge.push(X = U.delete(o(R)));
              } else {
                var H = z ? H ? [N, O] : [N, null] : [O, null], ue = H[0], We = H[1];
                if (z) for (var Ye = 0; Ye < ee; ++Ye) ge.push(X = We && We[Ye] !== void 0 ? U[C](ue[Ye], We[Ye]) : U[C](ue[Ye])), X.onerror = fe;
                else for (Ye = 0; Ye < ee; ++Ye) ge.push(X = U[C](ue[Ye])), X.onerror = fe;
              }
              function nr(Ze) {
                Ze = Ze.target.result, ge.forEach(function(Qt, Yr) {
                  return Qt.error != null && (le[Yr] = Qt.error);
                }), q({ numFailures: Re, failures: le, results: C === "delete" ? O : ge.map(function(Qt) {
                  return Qt.result;
                }), lastResult: Ze });
              }
              X.onerror = function(Ze) {
                fe(Ze), nr(Ze);
              }, X.onsuccess = nr;
            });
          }, getMany: function(E) {
            var S = E.trans, C = E.keys;
            return new Promise(function(O, N) {
              O = Oe(O);
              for (var R, q = S.objectStore(b), Y = C.length, U = new Array(Y), H = 0, z = 0, X = function(ge) {
                ge = ge.target, U[ge._pos] = ge.result, ++z === H && O(U);
              }, ee = yt(N), fe = 0; fe < Y; ++fe) C[fe] != null && ((R = q.get(C[fe]))._pos = fe, R.onsuccess = X, R.onerror = ee, ++H);
              H === 0 && O(U);
            });
          }, get: function(E) {
            var S = E.trans, C = E.key;
            return new Promise(function(O, N) {
              O = Oe(O);
              var R = S.objectStore(b).get(C);
              R.onsuccess = function(q) {
                return O(q.target.result);
              }, R.onerror = yt(N);
            });
          }, query: (y = g, function(E) {
            return new Promise(function(S, C) {
              S = Oe(S);
              var O, N, R, H = E.trans, q = E.values, Y = E.limit, X = E.query, U = Y === 1 / 0 ? void 0 : Y, z = X.index, X = X.range, H = H.objectStore(b), z = z.isPrimaryKey ? H : H.index(z.name), X = o(X);
              if (Y === 0) return S({ result: [] });
              y ? ((U = q ? z.getAll(X, U) : z.getAllKeys(X, U)).onsuccess = function(ee) {
                return S({ result: ee.target.result });
              }, U.onerror = yt(C)) : (O = 0, N = !q && "openKeyCursor" in z ? z.openKeyCursor(X) : z.openCursor(X), R = [], N.onsuccess = function(ee) {
                var fe = N.result;
                return fe ? (R.push(q ? fe.value : fe.primaryKey), ++O === Y ? S({ result: R }) : void fe.continue()) : S({ result: R });
              }, N.onerror = yt(C));
            });
          }), openCursor: function(E) {
            var S = E.trans, C = E.values, O = E.query, N = E.reverse, R = E.unique;
            return new Promise(function(q, Y) {
              q = Oe(q);
              var z = O.index, U = O.range, H = S.objectStore(b), H = z.isPrimaryKey ? H : H.index(z.name), z = N ? R ? "prevunique" : "prev" : R ? "nextunique" : "next", X = !C && "openKeyCursor" in H ? H.openKeyCursor(o(U), z) : H.openCursor(o(U), z);
              X.onerror = yt(Y), X.onsuccess = Oe(function(ee) {
                var fe, ge, le, Re, ue = X.result;
                ue ? (ue.___id = ++zo, ue.done = !1, fe = ue.continue.bind(ue), ge = (ge = ue.continuePrimaryKey) && ge.bind(ue), le = ue.advance.bind(ue), Re = function() {
                  throw new Error("Cursor not stopped");
                }, ue.trans = S, ue.stop = ue.continue = ue.continuePrimaryKey = ue.advance = function() {
                  throw new Error("Cursor not started");
                }, ue.fail = Oe(Y), ue.next = function() {
                  var We = this, Ye = 1;
                  return this.start(function() {
                    return Ye-- ? We.continue() : We.stop();
                  }).then(function() {
                    return We;
                  });
                }, ue.start = function(We) {
                  function Ye() {
                    if (X.result) try {
                      We();
                    } catch (Ze) {
                      ue.fail(Ze);
                    }
                    else ue.done = !0, ue.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ue.stop();
                  }
                  var nr = new Promise(function(Ze, Qt) {
                    Ze = Oe(Ze), X.onerror = yt(Qt), ue.fail = Qt, ue.stop = function(Yr) {
                      ue.stop = ue.continue = ue.continuePrimaryKey = ue.advance = Re, Ze(Yr);
                    };
                  });
                  return X.onsuccess = Oe(function(Ze) {
                    X.onsuccess = Ye, Ye();
                  }), ue.continue = fe, ue.continuePrimaryKey = ge, ue.advance = le, Ye(), nr;
                }, q(ue)) : q(null);
              }, Y);
            });
          }, count: function(E) {
            var S = E.query, C = E.trans, O = S.index, N = S.range;
            return new Promise(function(R, q) {
              var Y = C.objectStore(b), U = O.isPrimaryKey ? Y : Y.index(O.name), Y = o(N), U = Y ? U.count(Y) : U.count();
              U.onsuccess = Oe(function(H) {
                return R(H.target.result);
              }), U.onerror = yt(q);
            });
          } };
        }
        var c, f, p, _ = (f = m, p = Pi((c = e).objectStoreNames), { schema: { name: c.name, tables: p.map(function(T) {
          return f.objectStore(T);
        }).map(function(T) {
          var y = T.keyPath, S = T.autoIncrement, b = x(y), E = {}, S = { name: T.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: y == null, compound: b, keyPath: y, autoIncrement: S, unique: !0, extractKey: Or(y) }, indexes: Pi(T.indexNames).map(function(C) {
            return T.index(C);
          }).map(function(R) {
            var O = R.name, N = R.unique, q = R.multiEntry, R = R.keyPath, q = { name: O, compound: x(R), keyPath: R, unique: N, multiEntry: q, extractKey: Or(R) };
            return E[_n(R)] = q;
          }), getIndexByKeyPath: function(C) {
            return E[_n(C)];
          } };
          return E[":id"] = S.primaryKey, y != null && (E[_n(y)] = S.primaryKey), S;
        }) }, hasGetAll: 0 < p.length && "getAll" in f.objectStore(p[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), m = _.schema, g = _.hasGetAll, _ = m.tables.map(s), h = {};
        return _.forEach(function(T) {
          return h[T.name] = T;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(T) {
          if (!h[T]) throw new Error("Table '".concat(T, "' not found"));
          return h[T];
        }, MIN_KEY: -1 / 0, MAX_KEY: wn(t), schema: m };
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
            var p = function m(g, _) {
              return Ce(g, _) || (g = W(g)) && m(g, _);
            }(f, s);
            (!p || "value" in p && p.value === void 0) && (f === e.Transaction.prototype || f instanceof e.Transaction ? de(f, s, { get: function() {
              return this.table(s);
            }, set: function(m) {
              se(this, s, { value: m, writable: !0, configurable: !0, enumerable: !0 });
            } }) : f[s] = new e.Table(s, c));
          });
        });
      }
      function Dr(e, t) {
        t.forEach(function(r) {
          for (var o in r) r[o] instanceof e.Table && delete r[o];
        });
      }
      function es(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function ts(e, t, r, o) {
        var s = e._dbSchema;
        r.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = Ir("$meta", Oi("")[0], []), e._storeNames.push("$meta"));
        var c = e._createTransaction("readwrite", e._storeNames, s);
        c.create(r), c._completion.catch(o);
        var f = c._reject.bind(c), p = ne.transless || ne;
        Ot(function() {
          return ne.trans = c, ne.transless = p, t !== 0 ? (Gn(e, r), g = t, ((m = c).storeNames.includes("$meta") ? m.table("$meta").get("version").then(function(_) {
            return _ ?? g;
          }) : J.resolve(g)).then(function(_) {
            return T = _, y = c, b = r, E = [], _ = (h = e)._versions, S = h._dbSchema = Yn(0, h.idbdb, b), (_ = _.filter(function(C) {
              return C._cfg.version >= T;
            })).length !== 0 ? (_.forEach(function(C) {
              E.push(function() {
                var O = S, N = C._cfg.dbschema;
                Qn(h, O, b), Qn(h, N, b), S = h._dbSchema = N;
                var R = Nr(O, N);
                R.add.forEach(function(z) {
                  Rr(b, z[0], z[1].primKey, z[1].indexes);
                }), R.change.forEach(function(z) {
                  if (z.recreate) throw new F.Upgrade("Not yet support for changing primary key");
                  var X = b.objectStore(z.name);
                  z.add.forEach(function(ee) {
                    return Wn(X, ee);
                  }), z.change.forEach(function(ee) {
                    X.deleteIndex(ee.name), Wn(X, ee);
                  }), z.del.forEach(function(ee) {
                    return X.deleteIndex(ee);
                  });
                });
                var q = C._cfg.contentUpgrade;
                if (q && C._cfg.version > T) {
                  Gn(h, b), y._memoizedTables = {};
                  var Y = Ee(N);
                  R.del.forEach(function(z) {
                    Y[z] = O[z];
                  }), Dr(h, [h.Transaction.prototype]), Hn(h, [h.Transaction.prototype], v(Y), Y), y.schema = Y;
                  var U, H = at(q);
                  return H && an(), R = J.follow(function() {
                    var z;
                    (U = q(y)) && H && (z = Dt.bind(null, null), U.then(z, z));
                  }), U && typeof U.then == "function" ? J.resolve(U) : R.then(function() {
                    return U;
                  });
                }
              }), E.push(function(O) {
                var N, R, q = C._cfg.dbschema;
                N = q, R = O, [].slice.call(R.db.objectStoreNames).forEach(function(Y) {
                  return N[Y] == null && R.db.deleteObjectStore(Y);
                }), Dr(h, [h.Transaction.prototype]), Hn(h, [h.Transaction.prototype], h._storeNames, h._dbSchema), y.schema = h._dbSchema;
              }), E.push(function(O) {
                h.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(h.idbdb.version / 10) === C._cfg.version ? (h.idbdb.deleteObjectStore("$meta"), delete h._dbSchema.$meta, h._storeNames = h._storeNames.filter(function(N) {
                  return N !== "$meta";
                })) : O.objectStore("$meta").put(C._cfg.version, "version"));
              });
            }), function C() {
              return E.length ? J.resolve(E.shift()(y.idbtrans)).then(C) : J.resolve();
            }().then(function() {
              Ii(S, b);
            })) : J.resolve();
            var h, T, y, b, E, S;
          }).catch(f)) : (v(s).forEach(function(_) {
            Rr(r, _, s[_].primKey, s[_].indexes);
          }), Gn(e, r), void J.follow(function() {
            return e.on.populate.fire(c);
          }).catch(f));
          var m, g;
        });
      }
      function ns(e, t) {
        Ii(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var r = Yn(0, e.idbdb, t);
        Qn(e, e._dbSchema, t);
        for (var o = 0, s = Nr(r, e._dbSchema).change; o < s.length; o++) {
          var c = function(f) {
            if (f.change.length || f.recreate) return console.warn("Unable to patch indexes of table ".concat(f.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var p = t.objectStore(f.name);
            f.add.forEach(function(m) {
              Q && console.debug("Dexie upgrade patch: Creating missing index ".concat(f.name, ".").concat(m.src)), Wn(p, m);
            });
          }(s[o]);
          if (typeof c == "object") return c.value;
        }
      }
      function Nr(e, t) {
        var r, o = { del: [], add: [], change: [] };
        for (r in e) t[r] || o.del.push(r);
        for (r in t) {
          var s = e[r], c = t[r];
          if (s) {
            var f = { name: r, def: c, recreate: !1, del: [], add: [], change: [] };
            if ("" + (s.primKey.keyPath || "") != "" + (c.primKey.keyPath || "") || s.primKey.auto !== c.primKey.auto) f.recreate = !0, o.change.push(f);
            else {
              var p = s.idxByName, m = c.idxByName, g = void 0;
              for (g in p) m[g] || f.del.push(g);
              for (g in m) {
                var _ = p[g], h = m[g];
                _ ? _.src !== h.src && f.change.push(h) : f.add.push(h);
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
      function Ii(e, t) {
        v(e).forEach(function(r) {
          t.db.objectStoreNames.contains(r) || (Q && console.debug("Dexie: Creating missing table", r), Rr(t, r, e[r].primKey, e[r].indexes));
        });
      }
      function Wn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function Yn(e, t, r) {
        var o = {};
        return ye(t.objectStoreNames, 0).forEach(function(s) {
          for (var c = r.objectStore(s), f = Pr(Ai(g = c.keyPath), g || "", !0, !1, !!c.autoIncrement, g && typeof g != "string", !0), p = [], m = 0; m < c.indexNames.length; ++m) {
            var _ = c.index(c.indexNames[m]), g = _.keyPath, _ = Pr(_.name, g, !!_.unique, !!_.multiEntry, !1, g && typeof g != "string", !1);
            p.push(_);
          }
          o[s] = Ir(s, f, p);
        }), o;
      }
      function Qn(e, t, r) {
        for (var o = r.db.objectStoreNames, s = 0; s < o.length; ++s) {
          var c = o[s], f = r.objectStore(c);
          e._hasGetAll = "getAll" in f;
          for (var p = 0; p < f.indexNames.length; ++p) {
            var m = f.indexNames[p], g = f.index(m).keyPath, _ = typeof g == "string" ? g : "[" + ye(g).join("+") + "]";
            !t[c] || (g = t[c].idxByName[_]) && (g.name = m, delete t[c].idxByName[_], t[c].idxByName[m] = g);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && d.WorkerGlobalScope && d instanceof d.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Oi(e) {
        return e.split(",").map(function(t, r) {
          var c = t.split(":"), o = (s = c[1]) === null || s === void 0 ? void 0 : s.trim(), s = (t = c[0].trim()).replace(/([&*]|\+\+)/g, ""), c = /^\[/.test(s) ? s.match(/^\[(.*)\]$/)[1].split("+") : s;
          return Pr(s, c || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), x(c), r === 0, o);
        });
      }
      var rs = (fn.prototype._createTableSchema = Ir, fn.prototype._parseIndexSyntax = Oi, fn.prototype._parseStoresSpec = function(e, t) {
        var r = this;
        v(e).forEach(function(o) {
          if (e[o] !== null) {
            var s = r._parseIndexSyntax(e[o]), c = s.shift();
            if (!c) throw new F.Schema("Invalid schema for table " + o + ": " + e[o]);
            if (c.unique = !0, c.multi) throw new F.Schema("Primary key cannot be multiEntry*");
            s.forEach(function(f) {
              if (f.auto) throw new F.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!f.keyPath) throw new F.Schema("Index must have a name and cannot be an empty string");
            }), s = r._createTableSchema(o, c, s), t[o] = s;
          }
        });
      }, fn.prototype.stores = function(r) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? D(this._cfg.storesSource, r) : r;
        var r = t._versions, o = {}, s = {};
        return r.forEach(function(c) {
          D(o, c._cfg.storesSource), s = c._cfg.dbschema = {}, c._parseStoresSpec(o, s);
        }), t._dbSchema = s, Dr(t, [t._allTables, t, t.Transaction.prototype]), Hn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], v(s), s), t._storeNames = v(s), this;
      }, fn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = te(this._cfg.contentUpgrade || A, e), this;
      }, fn);
      function fn() {
      }
      function kr(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new Et(Kn, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function Fr(e) {
        return e && typeof e.databases == "function";
      }
      function jr(e) {
        return Ot(function() {
          return ne.letThrough = !0, e();
        });
      }
      function Lr(e) {
        return !("from" in e);
      }
      var He = function(e, t) {
        if (!this) {
          var r = new He();
          return e && "d" in e && D(r, e), r;
        }
        D(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function Sn(e, t, r) {
        var o = ve(t, r);
        if (!isNaN(o)) {
          if (0 < o) throw RangeError();
          if (Lr(e)) return D(e, { from: t, to: r, d: 1 });
          var s = e.l, o = e.r;
          if (ve(r, e.from) < 0) return s ? Sn(s, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, Ni(e);
          if (0 < ve(t, e.to)) return o ? Sn(o, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, Ni(e);
          ve(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < ve(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, s && !e.l && xn(e, s), o && r && xn(e, o);
        }
      }
      function xn(e, t) {
        Lr(t) || function r(o, m) {
          var c = m.from, f = m.to, p = m.l, m = m.r;
          Sn(o, c, f), p && r(o, p), m && r(o, m);
        }(e, t);
      }
      function Di(e, t) {
        var r = Xn(t), o = r.next();
        if (o.done) return !1;
        for (var s = o.value, c = Xn(e), f = c.next(s.from), p = f.value; !o.done && !f.done; ) {
          if (ve(p.from, s.to) <= 0 && 0 <= ve(p.to, s.from)) return !0;
          ve(s.from, p.from) < 0 ? s = (o = r.next(p.from)).value : p = (f = c.next(s.from)).value;
        }
        return !1;
      }
      function Xn(e) {
        var t = Lr(e) ? null : { s: 0, n: e };
        return { next: function(r) {
          for (var o = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, o) for (; t.n.l && ve(r, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !o || ve(r, t.n.to) <= 0) return { value: t.n, done: !1 };
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
      function Ni(e) {
        var t, r, o = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((r = e.l) === null || r === void 0 ? void 0 : r.d) || 0), s = 1 < o ? "r" : o < -1 ? "l" : "";
        s && (t = s == "r" ? "l" : "r", r = u({}, e), o = e[s], e.from = o.from, e.to = o.to, e[s] = o[s], r[s] = o[t], (e[t] = r).d = Ri(r)), e.d = Ri(e);
      }
      function Ri(r) {
        var t = r.r, r = r.l;
        return (t ? r ? Math.max(t.d, r.d) : t.d : r ? r.d : 0) + 1;
      }
      function zn(e, t) {
        return v(t).forEach(function(r) {
          e[r] ? xn(e[r], t[r]) : e[r] = function o(s) {
            var c, f, p = {};
            for (c in s) G(s, c) && (f = s[c], p[c] = !f || typeof f != "object" || it.has(f.constructor) ? f : o(f));
            return p;
          }(t[r]);
        }), e;
      }
      function Mr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && Di(t[r], e[r]);
        });
      }
      re(He.prototype, ((dt = { add: function(e) {
        return xn(this, e), this;
      }, addKey: function(e) {
        return Sn(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(r) {
          return Sn(t, r, r);
        }), this;
      }, hasKey: function(e) {
        var t = Xn(this).next(e).value;
        return t && ve(t.from, e) <= 0 && 0 <= ve(t.to, e);
      } })[Ue] = function() {
        return Xn(this);
      }, dt));
      var Wt = {}, Kr = {}, qr = !1;
      function Jn(e) {
        zn(Kr, e), qr || (qr = !0, setTimeout(function() {
          qr = !1, Br(Kr, !(Kr = {}));
        }, 0));
      }
      function Br(e, t) {
        t === void 0 && (t = !1);
        var r = /* @__PURE__ */ new Set();
        if (e.all) for (var o = 0, s = Object.values(Wt); o < s.length; o++) ki(f = s[o], e, r, t);
        else for (var c in e) {
          var f, p = /^idb\:\/\/(.*)\/(.*)\//.exec(c);
          p && (c = p[1], p = p[2], (f = Wt["idb://".concat(c, "/").concat(p)]) && ki(f, e, r, t));
        }
        r.forEach(function(m) {
          return m();
        });
      }
      function ki(e, t, r, o) {
        for (var s = [], c = 0, f = Object.entries(e.queries.query); c < f.length; c++) {
          for (var p = f[c], m = p[0], g = [], _ = 0, h = p[1]; _ < h.length; _++) {
            var T = h[_];
            Mr(t, T.obsSet) ? T.subscribers.forEach(function(S) {
              return r.add(S);
            }) : o && g.push(T);
          }
          o && s.push([m, g]);
        }
        if (o) for (var y = 0, b = s; y < b.length; y++) {
          var E = b[y], m = E[0], g = E[1];
          e.queries.query[m] = g;
        }
      }
      function is(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? je(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, s = Math.round(10 * e.verno), c = !1;
        function f() {
          if (t.openCanceller !== o) throw new F.DatabaseClosed("db.open() was cancelled");
        }
        function p() {
          return new J(function(T, y) {
            if (f(), !r) throw new F.MissingAPI();
            var b = e.name, E = t.autoSchema || !s ? r.open(b) : r.open(b, s);
            if (!E) throw new F.MissingAPI();
            E.onerror = yt(y), E.onblocked = Oe(e._fireOnBlocked), E.onupgradeneeded = Oe(function(S) {
              var C;
              _ = E.transaction, t.autoSchema && !e._options.allowEmptyDB ? (E.onerror = gn, _.abort(), E.result.close(), (C = r.deleteDatabase(b)).onsuccess = C.onerror = Oe(function() {
                y(new F.NoSuchDatabase("Database ".concat(b, " doesnt exist")));
              })) : (_.onerror = yt(y), S = S.oldVersion > Math.pow(2, 62) ? 0 : S.oldVersion, h = S < 1, e.idbdb = E.result, c && ns(e, _), ts(e, S / 10, _, y));
            }, y), E.onsuccess = Oe(function() {
              _ = null;
              var S, C, O, N, R, q = e.idbdb = E.result, Y = ye(q.objectStoreNames);
              if (0 < Y.length) try {
                var U = q.transaction((N = Y).length === 1 ? N[0] : N, "readonly");
                if (t.autoSchema) C = q, O = U, (S = e).verno = C.version / 10, O = S._dbSchema = Yn(0, C, O), S._storeNames = ye(C.objectStoreNames, 0), Hn(S, [S._allTables], v(O), O);
                else if (Qn(e, e._dbSchema, U), ((R = Nr(Yn(0, (R = e).idbdb, U), R._dbSchema)).add.length || R.change.some(function(H) {
                  return H.add.length || H.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), q.close(), s = q.version + 1, c = !0, T(p());
                Gn(e, U);
              } catch {
              }
              un.push(e), q.onversionchange = Oe(function(H) {
                t.vcFired = !0, e.on("versionchange").fire(H);
              }), q.onclose = Oe(function(H) {
                e.on("close").fire(H);
              }), h && (R = e._deps, U = b, q = R.indexedDB, R = R.IDBKeyRange, Fr(q) || U === Kn || kr(q, R).put({ name: U }).catch(A)), T();
            }, y);
          }).catch(function(T) {
            switch (T?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), p();
                break;
              case "VersionError":
                if (0 < s) return s = 0, p();
            }
            return J.reject(T);
          });
        }
        var m, g = t.dbReadyResolve, _ = null, h = !1;
        return J.race([o, (typeof navigator > "u" ? J.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(T) {
          function y() {
            return indexedDB.databases().finally(T);
          }
          m = setInterval(y, 100), y();
        }).finally(function() {
          return clearInterval(m);
        }) : Promise.resolve()).then(p)]).then(function() {
          return f(), t.onReadyBeingFired = [], J.resolve(jr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function T() {
            if (0 < t.onReadyBeingFired.length) {
              var y = t.onReadyBeingFired.reduce(te, A);
              return t.onReadyBeingFired = [], J.resolve(jr(function() {
                return y(e.vip);
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
          return o === t.openCanceller && e._close(), je(T);
        }).finally(function() {
          t.openComplete = !0, g();
        }).then(function() {
          var T;
          return h && (T = {}, e.tables.forEach(function(y) {
            y.schema.indexes.forEach(function(b) {
              b.name && (T["idb://".concat(e.name, "/").concat(y.name, "/").concat(b.name)] = new He(-1 / 0, [[[]]]));
            }), T["idb://".concat(e.name, "/").concat(y.name, "/")] = T["idb://".concat(e.name, "/").concat(y.name, "/:dels")] = new He(-1 / 0, [[[]]]);
          }), kt(bn).fire(T), Br(T, !0)), e;
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
            return p.done ? m : m && typeof m.then == "function" ? m.then(r, o) : x(m) ? Promise.all(m).then(r, o) : r(m);
          };
        }
        return s(t)();
      }
      function Zn(e, t, r) {
        for (var o = x(e) ? e.slice() : [e], s = 0; s < r; ++s) o.push(t);
        return o;
      }
      var os = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema, s = {}, c = [];
          function f(h, T, y) {
            var b = _n(h), E = s[b] = s[b] || [], S = h == null ? 0 : typeof h == "string" ? 1 : h.length, C = 0 < T, C = u(u({}, y), { name: C ? "".concat(b, "(virtual-from:").concat(y.name, ")") : y.name, lowLevelIndex: y, isVirtual: C, keyTail: T, keyLength: S, extractKey: Or(h), unique: !C && y.unique });
            return E.push(C), C.isPrimaryKey || c.push(C), 1 < S && f(S === 2 ? h[0] : h.slice(0, S - 1), T + 1, y), E.sort(function(O, N) {
              return O.keyTail - N.keyTail;
            }), C;
          }
          t = f(o.primaryKey.keyPath, 0, o.primaryKey), s[":id"] = [t];
          for (var p = 0, m = o.indexes; p < m.length; p++) {
            var g = m[p];
            f(g.keyPath, 0, g);
          }
          function _(h) {
            var T, y = h.query.index;
            return y.isVirtual ? u(u({}, h), { query: { index: y.lowLevelIndex, range: (T = h.query.range, y = y.keyTail, { type: T.type === 1 ? 2 : T.type, lower: Zn(T.lower, T.lowerOpen ? e.MAX_KEY : e.MIN_KEY, y), lowerOpen: !0, upper: Zn(T.upper, T.upperOpen ? e.MIN_KEY : e.MAX_KEY, y), upperOpen: !0 }) } }) : h;
          }
          return u(u({}, r), { schema: u(u({}, o), { primaryKey: t, indexes: c, getIndexByKeyPath: function(h) {
            return (h = s[_n(h)]) && h[0];
          } }), count: function(h) {
            return r.count(_(h));
          }, query: function(h) {
            return r.query(_(h));
          }, openCursor: function(h) {
            var T = h.query.index, y = T.keyTail, b = T.isVirtual, E = T.keyLength;
            return b ? r.openCursor(_(h)).then(function(C) {
              return C && S(C);
            }) : r.openCursor(h);
            function S(C) {
              return Object.create(C, { continue: { value: function(O) {
                O != null ? C.continue(Zn(O, h.reverse ? e.MAX_KEY : e.MIN_KEY, y)) : h.unique ? C.continue(C.key.slice(0, E).concat(h.reverse ? e.MIN_KEY : e.MAX_KEY, y)) : C.continue();
              } }, continuePrimaryKey: { value: function(O, N) {
                C.continuePrimaryKey(Zn(O, e.MAX_KEY, y), N);
              } }, primaryKey: { get: function() {
                return C.primaryKey;
              } }, key: { get: function() {
                var O = C.key;
                return E === 1 ? O[0] : O.slice(0, E);
              } }, value: { get: function() {
                return C.value;
              } } });
            }
          } });
        } });
      } };
      function Vr(e, t, r, o) {
        return r = r || {}, o = o || "", v(e).forEach(function(s) {
          var c, f, p;
          G(t, s) ? (c = e[s], f = t[s], typeof c == "object" && typeof f == "object" && c && f ? (p = wt(c)) !== wt(f) ? r[o + s] = t[s] : p === "Object" ? Vr(c, f, r, o + s + ".") : c !== f && (r[o + s] = t[s]) : c !== f && (r[o + s] = t[s])) : r[o + s] = void 0;
        }), v(t).forEach(function(s) {
          G(e, s) || (r[o + s] = t[s]);
        }), r;
      }
      function Ur(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var ss = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema.primaryKey;
          return u(u({}, r), { mutate: function(s) {
            var c = ne.trans, f = c.table(t).hook, p = f.deleting, m = f.creating, g = f.updating;
            switch (s.type) {
              case "add":
                if (m.fire === A) break;
                return c._promise("readwrite", function() {
                  return _(s);
                }, !0);
              case "put":
                if (m.fire === A && g.fire === A) break;
                return c._promise("readwrite", function() {
                  return _(s);
                }, !0);
              case "delete":
                if (p.fire === A) break;
                return c._promise("readwrite", function() {
                  return _(s);
                }, !0);
              case "deleteRange":
                if (p.fire === A) break;
                return c._promise("readwrite", function() {
                  return function h(T, y, b) {
                    return r.query({ trans: T, values: !1, query: { index: o, range: y }, limit: b }).then(function(E) {
                      var S = E.result;
                      return _({ type: "delete", keys: S, trans: T }).then(function(C) {
                        return 0 < C.numFailures ? Promise.reject(C.failures[0]) : S.length < b ? { failures: [], numFailures: 0, lastResult: void 0 } : h(T, u(u({}, y), { lower: S[S.length - 1], lowerOpen: !0 }), b);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return r.mutate(s);
            function _(h) {
              var T, y, b, E = ne.trans, S = h.keys || Ur(o, h);
              if (!S) throw new Error("Keys missing");
              return (h = h.type === "add" || h.type === "put" ? u(u({}, h), { keys: S }) : u({}, h)).type !== "delete" && (h.values = l([], h.values)), h.keys && (h.keys = l([], h.keys)), T = r, b = S, ((y = h).type === "add" ? Promise.resolve([]) : T.getMany({ trans: y.trans, keys: b, cache: "immutable" })).then(function(C) {
                var O = S.map(function(N, R) {
                  var q, Y, U, H = C[R], z = { onerror: null, onsuccess: null };
                  return h.type === "delete" ? p.fire.call(z, N, H, E) : h.type === "add" || H === void 0 ? (q = m.fire.call(z, N, h.values[R], E), N == null && q != null && (h.keys[R] = N = q, o.outbound || oe(h.values[R], o.keyPath, N))) : (q = Vr(H, h.values[R]), (Y = g.fire.call(z, q, N, H, E)) && (U = h.values[R], Object.keys(Y).forEach(function(X) {
                    G(U, X) ? U[X] = Y[X] : oe(U, X, Y[X]);
                  }))), z;
                });
                return r.mutate(h).then(function(N) {
                  for (var R = N.failures, q = N.results, Y = N.numFailures, N = N.lastResult, U = 0; U < S.length; ++U) {
                    var H = (q || S)[U], z = O[U];
                    H == null ? z.onerror && z.onerror(R[U]) : z.onsuccess && z.onsuccess(h.type === "put" && C[U] ? h.values[U] : H);
                  }
                  return { failures: R, results: q, numFailures: Y, lastResult: N };
                }).catch(function(N) {
                  return O.forEach(function(R) {
                    return R.onerror && R.onerror(N);
                  }), Promise.reject(N);
                });
              });
            }
          } });
        } });
      } };
      function Fi(e, t, r) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var o = [], s = 0, c = 0; s < t.keys.length && c < e.length; ++s) ve(t.keys[s], e[c]) === 0 && (o.push(r ? Ge(t.values[s]) : t.values[s]), ++c);
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
            var s = Fi(o.keys, o.trans._cache, o.cache === "clone");
            return s ? J.resolve(s) : r.getMany(o).then(function(c) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? Ge(c) : c }, c;
            });
          }, mutate: function(o) {
            return o.type !== "add" && (o.trans._cache = null), r.mutate(o);
          } });
        } };
      } };
      function ji(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Li(e, t) {
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
        var t = e.schema.name, r = new He(e.MIN_KEY, e.MAX_KEY);
        return u(u({}, e), { transaction: function(o, s, c) {
          if (ne.subscr && s !== "readonly") throw new F.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ne.querier));
          return e.transaction(o, s, c);
        }, table: function(o) {
          var s = e.table(o), c = s.schema, f = c.primaryKey, h = c.indexes, p = f.extractKey, m = f.outbound, g = f.autoIncrement && h.filter(function(y) {
            return y.compound && y.keyPath.includes(f.keyPath);
          }), _ = u(u({}, s), { mutate: function(y) {
            function b(X) {
              return X = "idb://".concat(t, "/").concat(o, "/").concat(X), N[X] || (N[X] = new He());
            }
            var E, S, C, O = y.trans, N = y.mutatedParts || (y.mutatedParts = {}), R = b(""), q = b(":dels"), Y = y.type, z = y.type === "deleteRange" ? [y.range] : y.type === "delete" ? [y.keys] : y.values.length < 50 ? [Ur(f, y).filter(function(X) {
              return X;
            }), y.values] : [], U = z[0], H = z[1], z = y.trans._cache;
            return x(U) ? (R.addKeys(U), (z = Y === "delete" || U.length === H.length ? Fi(U, z) : null) || q.addKeys(U), (z || H) && (E = b, S = z, C = H, c.indexes.forEach(function(X) {
              var ee = E(X.name || "");
              function fe(le) {
                return le != null ? X.extractKey(le) : null;
              }
              function ge(le) {
                return X.multiEntry && x(le) ? le.forEach(function(Re) {
                  return ee.addKey(Re);
                }) : ee.addKey(le);
              }
              (S || C).forEach(function(le, We) {
                var ue = S && fe(S[We]), We = C && fe(C[We]);
                ve(ue, We) !== 0 && (ue != null && ge(ue), We != null && ge(We));
              });
            }))) : U ? (H = { from: (H = U.lower) !== null && H !== void 0 ? H : e.MIN_KEY, to: (H = U.upper) !== null && H !== void 0 ? H : e.MAX_KEY }, q.add(H), R.add(H)) : (R.add(r), q.add(r), c.indexes.forEach(function(X) {
              return b(X.name).add(r);
            })), s.mutate(y).then(function(X) {
              return !U || y.type !== "add" && y.type !== "put" || (R.addKeys(X.results), g && g.forEach(function(ee) {
                for (var fe = y.values.map(function(ue) {
                  return ee.extractKey(ue);
                }), ge = ee.keyPath.findIndex(function(ue) {
                  return ue === f.keyPath;
                }), le = 0, Re = X.results.length; le < Re; ++le) fe[le][ge] = X.results[le];
                b(ee.name).addKeys(fe);
              })), O.mutatedParts = zn(O.mutatedParts || {}, N), X;
            });
          } }), h = function(b) {
            var E = b.query, b = E.index, E = E.range;
            return [b, new He((b = E.lower) !== null && b !== void 0 ? b : e.MIN_KEY, (E = E.upper) !== null && E !== void 0 ? E : e.MAX_KEY)];
          }, T = { get: function(y) {
            return [f, new He(y.key)];
          }, getMany: function(y) {
            return [f, new He().addKeys(y.keys)];
          }, count: h, query: h, openCursor: h };
          return v(T).forEach(function(y) {
            _[y] = function(b) {
              var E = ne.subscr, S = !!E, C = ji(ne, s) && Li(y, b) ? b.obsSet = {} : E;
              if (S) {
                var O = function(H) {
                  return H = "idb://".concat(t, "/").concat(o, "/").concat(H), C[H] || (C[H] = new He());
                }, N = O(""), R = O(":dels"), E = T[y](b), S = E[0], E = E[1];
                if ((y === "query" && S.isPrimaryKey && !b.values ? R : O(S.name || "")).add(E), !S.isPrimaryKey) {
                  if (y !== "count") {
                    var q = y === "query" && m && b.values && s.query(u(u({}, b), { values: !1 }));
                    return s[y].apply(this, arguments).then(function(H) {
                      if (y === "query") {
                        if (m && b.values) return q.then(function(fe) {
                          return fe = fe.result, N.addKeys(fe), H;
                        });
                        var z = b.values ? H.result.map(p) : H.result;
                        (b.values ? N : R).addKeys(z);
                      } else if (y === "openCursor") {
                        var X = H, ee = b.values;
                        return X && Object.create(X, { key: { get: function() {
                          return R.addKey(X.primaryKey), X.key;
                        } }, primaryKey: { get: function() {
                          var fe = X.primaryKey;
                          return R.addKey(fe), fe;
                        } }, value: { get: function() {
                          return ee && N.addKey(X.primaryKey), X.value;
                        } } });
                      }
                      return H;
                    });
                  }
                  R.add(r);
                }
              }
              return s[y].apply(this, arguments);
            };
          }), _;
        } });
      } };
      function Mi(e, t, r) {
        if (r.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var o = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return r.numFailures === o ? null : (t = u({}, t), x(t.keys) && (t.keys = t.keys.filter(function(s, c) {
          return !(c in r.failures);
        })), "values" in t && x(t.values) && (t.values = t.values.filter(function(s, c) {
          return !(c in r.failures);
        })), t);
      }
      function Gr(e, t) {
        return r = e, ((o = t).lower === void 0 || (o.lowerOpen ? 0 < ve(r, o.lower) : 0 <= ve(r, o.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? ve(e, t.upper) < 0 : ve(e, t.upper) <= 0));
        var r, o;
      }
      function Ki(e, t, T, o, s, c) {
        if (!T || T.length === 0) return e;
        var f = t.query.index, p = f.multiEntry, m = t.query.range, g = o.schema.primaryKey.extractKey, _ = f.extractKey, h = (f.lowLevelIndex || f).extractKey, T = T.reduce(function(y, b) {
          var E = y, S = [];
          if (b.type === "add" || b.type === "put") for (var C = new He(), O = b.values.length - 1; 0 <= O; --O) {
            var N, R = b.values[O], q = g(R);
            C.hasKey(q) || (N = _(R), (p && x(N) ? N.some(function(X) {
              return Gr(X, m);
            }) : Gr(N, m)) && (C.addKey(q), S.push(R)));
          }
          switch (b.type) {
            case "add":
              var Y = new He().addKeys(t.values ? y.map(function(ee) {
                return g(ee);
              }) : y), E = y.concat(t.values ? S.filter(function(ee) {
                return ee = g(ee), !Y.hasKey(ee) && (Y.addKey(ee), !0);
              }) : S.map(function(ee) {
                return g(ee);
              }).filter(function(ee) {
                return !Y.hasKey(ee) && (Y.addKey(ee), !0);
              }));
              break;
            case "put":
              var U = new He().addKeys(b.values.map(function(ee) {
                return g(ee);
              }));
              E = y.filter(function(ee) {
                return !U.hasKey(t.values ? g(ee) : ee);
              }).concat(t.values ? S : S.map(function(ee) {
                return g(ee);
              }));
              break;
            case "delete":
              var H = new He().addKeys(b.keys);
              E = y.filter(function(ee) {
                return !H.hasKey(t.values ? g(ee) : ee);
              });
              break;
            case "deleteRange":
              var z = b.range;
              E = y.filter(function(ee) {
                return !Gr(g(ee), z);
              });
          }
          return E;
        }, e);
        return T === e ? e : (T.sort(function(y, b) {
          return ve(h(y), h(b)) || ve(g(y), g(b));
        }), t.limit && t.limit < 1 / 0 && (T.length > t.limit ? T.length = t.limit : e.length === t.limit && T.length < t.limit && (s.dirty = !0)), c ? Object.freeze(T) : T);
      }
      function qi(e, t) {
        return ve(e.lower, t.lower) === 0 && ve(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function cs(e, t) {
        return function(r, o, s, c) {
          if (r === void 0) return o !== void 0 ? -1 : 0;
          if (o === void 0) return 1;
          if ((o = ve(r, o)) === 0) {
            if (s && c) return 0;
            if (s) return 1;
            if (c) return -1;
          }
          return o;
        }(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function(r, o, s, c) {
          if (r === void 0) return o !== void 0 ? 1 : 0;
          if (o === void 0) return -1;
          if ((o = ve(r, o)) === 0) {
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
            s.subscribers.size === 0 && Pe(c, s);
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
                for (var g = /* @__PURE__ */ new Set(), _ = 0, h = r; _ < h.length; _++) {
                  var T = h[_], y = Wt["idb://".concat(t, "/").concat(T)];
                  if (y) {
                    var b = e.table(T), E = y.optimisticOps.filter(function(ee) {
                      return ee.trans === p;
                    });
                    if (p._explicit && m && p.mutatedParts) for (var S = 0, C = Object.values(y.queries.query); S < C.length; S++) for (var O = 0, N = (Y = C[S]).slice(); O < N.length; O++) Mr((U = N[O]).obsSet, p.mutatedParts) && (Pe(Y, U), U.subscribers.forEach(function(ee) {
                      return g.add(ee);
                    }));
                    else if (0 < E.length) {
                      y.optimisticOps = y.optimisticOps.filter(function(ee) {
                        return ee.trans !== p;
                      });
                      for (var R = 0, q = Object.values(y.queries.query); R < q.length; R++) for (var Y, U, H, z = 0, X = (Y = q[R]).slice(); z < X.length; z++) (U = X[z]).res != null && p.mutatedParts && (m && !U.dirty ? (H = Object.isFrozen(U.res), H = Ki(U.res, U.req, E, b, U, H), U.dirty ? (Pe(Y, U), U.subscribers.forEach(function(ee) {
                        return g.add(ee);
                      })) : H !== U.res && (U.res = H, U.promise = J.resolve({ result: H }))) : (U.dirty && Pe(Y, U), U.subscribers.forEach(function(ee) {
                        return g.add(ee);
                      })));
                    }
                  }
                }
                g.forEach(function(ee) {
                  return ee();
                });
              }
            };
          }, p.addEventListener("abort", s(!1), { signal: f }), p.addEventListener("error", s(!1), { signal: f }), p.addEventListener("complete", s(!0), { signal: f })), p;
        }, table: function(r) {
          var o = e.table(r), s = o.schema.primaryKey;
          return u(u({}, o), { mutate: function(c) {
            var f = ne.trans;
            if (s.outbound || f.db._options.cache === "disabled" || f.explicit || f.idbtrans.mode !== "readwrite") return o.mutate(c);
            var p = Wt["idb://".concat(t, "/").concat(r)];
            return p ? (f = o.mutate(c), c.type !== "add" && c.type !== "put" || !(50 <= c.values.length || Ur(s, c).some(function(m) {
              return m == null;
            })) ? (p.optimisticOps.push(c), c.mutatedParts && Jn(c.mutatedParts), f.then(function(m) {
              0 < m.numFailures && (Pe(p.optimisticOps, c), (m = Mi(0, c, m)) && p.optimisticOps.push(m), c.mutatedParts && Jn(c.mutatedParts));
            }), f.catch(function() {
              Pe(p.optimisticOps, c), c.mutatedParts && Jn(c.mutatedParts);
            })) : f.then(function(m) {
              var g = Mi(0, u(u({}, c), { values: c.values.map(function(_, h) {
                var T;
                return m.failures[h] ? _ : (_ = (T = s.keyPath) !== null && T !== void 0 && T.includes(".") ? Ge(_) : u({}, _), oe(_, s.keyPath, m.results[h]), _);
              }) }), m);
              p.optimisticOps.push(g), queueMicrotask(function() {
                return c.mutatedParts && Jn(c.mutatedParts);
              });
            }), f) : o.mutate(c);
          }, query: function(c) {
            if (!ji(ne, o) || !Li("query", c)) return o.query(c);
            var f = ((g = ne.trans) === null || g === void 0 ? void 0 : g.db._options.cache) === "immutable", h = ne, p = h.requery, m = h.signal, g = function(b, E, S, C) {
              var O = Wt["idb://".concat(b, "/").concat(E)];
              if (!O) return [];
              if (!(E = O.queries[S])) return [null, !1, O, null];
              var N = E[(C.query ? C.query.index.name : null) || ""];
              if (!N) return [null, !1, O, null];
              switch (S) {
                case "query":
                  var R = N.find(function(q) {
                    return q.req.limit === C.limit && q.req.values === C.values && qi(q.req.query.range, C.query.range);
                  });
                  return R ? [R, !0, O, N] : [N.find(function(q) {
                    return ("limit" in q.req ? q.req.limit : 1 / 0) >= C.limit && (!C.values || q.req.values) && cs(q.req.query.range, C.query.range);
                  }), !1, O, N];
                case "count":
                  return R = N.find(function(q) {
                    return qi(q.req.query.range, C.query.range);
                  }), [R, !!R, O, N];
              }
            }(t, r, "query", c), _ = g[0], h = g[1], T = g[2], y = g[3];
            return _ && h ? _.obsSet = c.obsSet : (h = o.query(c).then(function(b) {
              var E = b.result;
              if (_ && (_.res = E), f) {
                for (var S = 0, C = E.length; S < C; ++S) Object.freeze(E[S]);
                Object.freeze(E);
              } else b.result = Ge(E);
              return b;
            }).catch(function(b) {
              return y && _ && Pe(y, _), Promise.reject(b);
            }), _ = { obsSet: c.obsSet, promise: h, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, y ? y.push(_) : (y = [_], (T = T || (Wt["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = y)), ls(_, y, p, m), _.promise.then(function(b) {
              return { result: Ki(b.result, c, T?.optimisticOps, o, _, f) };
            });
          } });
        } });
      } };
      function er(e, t) {
        return new Proxy(e, { get: function(r, o, s) {
          return o === "db" ? t : Reflect.get(r, o, s);
        } });
      }
      var Et = (Le.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new F.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new F.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(es), r.stores({}), this._state.autoSchema = !1, r);
      }, Le.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || ne.letThrough || this._vip) ? e() : new J(function(r, o) {
          if (t._state.openComplete) return o(new F.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new F.DatabaseClosed());
            t.open().catch(A);
          }
          t._state.dbReadyPromise.then(r, o);
        }).then(e);
      }, Le.prototype.use = function(e) {
        var t = e.stack, r = e.create, o = e.level, s = e.name;
        return s && this.unuse({ stack: t, name: s }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: r, level: o ?? 10, name: s }), e.sort(function(c, f) {
          return c.level - f.level;
        }), this;
      }, Le.prototype.unuse = function(e) {
        var t = e.stack, r = e.name, o = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(s) {
          return o ? s.create !== o : !!r && s.name !== r;
        })), this;
      }, Le.prototype.open = function() {
        var e = this;
        return Ut(Je, function() {
          return is(e);
        });
      }, Le.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, t = un.indexOf(this);
        if (0 <= t && un.splice(t, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new J(function(r) {
          e.dbReadyResolve = r;
        }), e.openCanceller = new J(function(r, o) {
          e.cancelOpen = o;
        }));
      }, Le.prototype.close = function(r) {
        var t = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        t ? (r.isBeingOpened && r.cancelOpen(new F.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new F.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, Le.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", o = this._state;
        return new J(function(s, c) {
          function f() {
            t.close(e);
            var p = t._deps.indexedDB.deleteDatabase(t.name);
            p.onsuccess = Oe(function() {
              var m, g, _;
              m = t._deps, g = t.name, _ = m.indexedDB, m = m.IDBKeyRange, Fr(_) || g === Kn || kr(_, m).delete(g).catch(A), s();
            }), p.onerror = yt(c), p.onblocked = t._fireOnBlocked;
          }
          if (r) throw new F.InvalidArgument("Invalid closeOptions argument to db.delete()");
          o.isBeingOpened ? o.dbReadyPromise.then(f) : f();
        });
      }, Le.prototype.backendDB = function() {
        return this.idbdb;
      }, Le.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Le.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, Le.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Le.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Le.prototype, "tables", { get: function() {
        var e = this;
        return v(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), Le.prototype.transaction = function() {
        var e = (function(t, r, o) {
          var s = arguments.length;
          if (s < 2) throw new F.InvalidArgument("Too few arguments");
          for (var c = new Array(s - 1); --s; ) c[s - 1] = arguments[s];
          return o = c.pop(), [t, et(c), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Le.prototype._transaction = function(e, t, r) {
        var o = this, s = ne.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var c, f, p = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (f = t.map(function(g) {
            if (g = g instanceof o.Table ? g.name : g, typeof g != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return g;
          }), e == "r" || e === xr) c = xr;
          else {
            if (e != "rw" && e != Er) throw new F.InvalidArgument("Invalid transaction mode: " + e);
            c = Er;
          }
          if (s) {
            if (s.mode === xr && c === Er) {
              if (!p) throw new F.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              s = null;
            }
            s && f.forEach(function(g) {
              if (s && s.storeNames.indexOf(g) === -1) {
                if (!p) throw new F.SubTransaction("Table " + g + " not included in parent transaction.");
                s = null;
              }
            }), p && s && !s.active && (s = null);
          }
        } catch (g) {
          return s ? s._promise(null, function(_, h) {
            h(g);
          }) : je(g);
        }
        var m = (function g(_, h, T, y, b) {
          return J.resolve().then(function() {
            var E = ne.transless || ne, S = _._createTransaction(h, T, _._dbSchema, y);
            if (S.explicit = !0, E = { trans: S, transless: E }, y) S.idbtrans = y.idbtrans;
            else try {
              S.create(), S.idbtrans._explicit = !0, _._state.PR1398_maxLoop = 3;
            } catch (N) {
              return N.name === P.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                return g(_, h, T, null, b);
              })) : je(N);
            }
            var C, O = at(b);
            return O && an(), E = J.follow(function() {
              var N;
              (C = b.call(S, S)) && (O ? (N = Dt.bind(null, null), C.then(N, N)) : typeof C.next == "function" && typeof C.throw == "function" && (C = $r(C)));
            }, E), (C && typeof C.then == "function" ? J.resolve(C).then(function(N) {
              return S.active ? N : je(new F.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : E.then(function() {
              return C;
            })).then(function(N) {
              return y && S._resolve(), S._completion.then(function() {
                return N;
              });
            }).catch(function(N) {
              return S._reject(N), je(N);
            });
          });
        }).bind(null, this, c, f, s, r);
        return s ? s._promise(c, m, "lock") : ne.trans ? Ut(ne.transless, function() {
          return o._whenReady(m);
        }) : this._whenReady(m);
      }, Le.prototype.table = function(e) {
        if (!G(this._allTables, e)) throw new F.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Le);
      function Le(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var o = Le.dependencies;
        this._options = t = u({ addons: Le.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, c, f, p, m, g = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: A, dbReadyPromise: null, cancelOpen: A, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        g.dbReadyPromise = new J(function(h) {
          g.dbReadyResolve = h;
        }), g.openCanceller = new J(function(h, T) {
          g.cancelOpen = T;
        }), this._state = g, this.name = e, this.on = mn(this, "populate", "blocked", "versionchange", "close", { ready: [te, A] }), this.once = function(h, T) {
          var y = function() {
            for (var b = [], E = 0; E < arguments.length; E++) b[E] = arguments[E];
            r.on(h).unsubscribe(y), T.apply(r, b);
          };
          return r.on(h, y);
        }, this.on.ready.subscribe = ke(this.on.ready.subscribe, function(h) {
          return function(T, y) {
            Le.vip(function() {
              var b, E = r._state;
              E.openComplete ? (E.dbOpenError || J.resolve().then(T), y && h(T)) : E.onReadyBeingFired ? (E.onReadyBeingFired.push(T), y && h(T)) : (h(T), b = r, y || h(function S() {
                b.on.ready.unsubscribe(T), b.on.ready.unsubscribe(S);
              }));
            });
          };
        }), this.Collection = (s = this, yn(Wo.prototype, function(C, S) {
          this.db = s;
          var y = yi, b = null;
          if (S) try {
            y = S();
          } catch (O) {
            b = O;
          }
          var E = C._ctx, S = E.table, C = S.hook.reading.fire;
          this._ctx = { table: S, index: E.index, isPrimKey: !E.index || S.schema.primKey.keyPath && E.index === S.schema.primKey.name, range: y, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: b, or: E.or, valueMapper: C !== L ? C : null };
        })), this.Table = (c = this, yn(wi.prototype, function(h, T, y) {
          this.db = c, this._tx = y, this.name = h, this.schema = T, this.hook = c._allTables[h] ? c._allTables[h].hook : mn(null, { creating: [k, A], reading: [Z, L], updating: [V, A], deleting: [j, A] });
        })), this.Transaction = (f = this, yn(Xo.prototype, function(h, T, y, b, E) {
          var S = this;
          h !== "readonly" && T.forEach(function(C) {
            C = (C = y[C]) === null || C === void 0 ? void 0 : C.yProps, C && (T = T.concat(C.map(function(O) {
              return O.updatesTable;
            })));
          }), this.db = f, this.mode = h, this.storeNames = T, this.schema = y, this.chromeTransactionDurability = b, this.idbtrans = null, this.on = mn(this, "complete", "error", "abort"), this.parent = E || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new J(function(C, O) {
            S._resolve = C, S._reject = O;
          }), this._completion.then(function() {
            S.active = !1, S.on.complete.fire();
          }, function(C) {
            var O = S.active;
            return S.active = !1, S.on.error.fire(C), S.parent ? S.parent._reject(C) : O && S.idbtrans && S.idbtrans.abort(), je(C);
          });
        })), this.Version = (p = this, yn(rs.prototype, function(h) {
          this.db = p, this._cfg = { version: h, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (m = this, yn(Ci.prototype, function(h, T, y) {
          if (this.db = m, this._ctx = { table: h, index: T === ":id" ? null : T, or: y }, this._cmp = this._ascending = ve, this._descending = function(b, E) {
            return ve(E, b);
          }, this._max = function(b, E) {
            return 0 < ve(b, E) ? b : E;
          }, this._min = function(b, E) {
            return ve(b, E) < 0 ? b : E;
          }, this._IDBKeyRange = m._deps.IDBKeyRange, !this._IDBKeyRange) throw new F.MissingAPI();
        })), this.on("versionchange", function(h) {
          0 < h.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(h) {
          !h.newVersion || h.newVersion < h.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(h.oldVersion / 10));
        }), this._maxKey = wn(t.IDBKeyRange), this._createTransaction = function(h, T, y, b) {
          return new r.Transaction(h, T, y, r._options.chromeTransactionDurability, b);
        }, this._fireOnBlocked = function(h) {
          r.on("blocked").fire(h), un.filter(function(T) {
            return T.name === r.name && T !== r && !T._state.vcFired;
          }).map(function(T) {
            return T.on("versionchange").fire(h);
          });
        }, this.use(as), this.use(fs), this.use(us), this.use(os), this.use(ss);
        var _ = new Proxy(this, { get: function(h, T, y) {
          if (T === "_vip") return !0;
          if (T === "table") return function(E) {
            return er(r.table(E), _);
          };
          var b = Reflect.get(h, T, y);
          return b instanceof wi ? er(b, _) : T === "tables" ? b.map(function(E) {
            return er(E, _);
          }) : T === "_createTransaction" ? function() {
            return er(b.apply(this, arguments), _);
          } : b;
        } });
        this.vip = _, o.forEach(function(h) {
          return h(r);
        });
      }
      var tr, dt = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ds = (Hr.prototype.subscribe = function(e, t, r) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: r });
      }, Hr.prototype[dt] = function() {
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
      function Bi(e) {
        var t, r = !1, o = new ds(function(s) {
          var c = at(e), f, p = !1, m = {}, g = {}, _ = { get closed() {
            return p;
          }, unsubscribe: function() {
            p || (p = !0, f && f.abort(), h && kt.storagemutated.unsubscribe(y));
          } };
          s.start && s.start(_);
          var h = !1, T = function() {
            return Sr(b);
          }, y = function(E) {
            zn(m, E), Mr(g, m) && T();
          }, b = function() {
            var E, S, C;
            !p && tr.indexedDB && (m = {}, E = {}, f && f.abort(), f = new AbortController(), C = function(O) {
              var N = on();
              try {
                c && an();
                var R = Ot(e, O);
                return R = c ? R.finally(Dt) : R;
              } finally {
                N && sn();
              }
            }(S = { subscr: E, signal: f.signal, requery: T, querier: e, trans: null }), Promise.resolve(C).then(function(O) {
              r = !0, t = O, p || S.signal.aborted || (m = {}, function(N) {
                for (var R in N) if (G(N, R)) return;
                return 1;
              }(g = E) || h || (kt(bn, y), h = !0), Sr(function() {
                return !p && s.next && s.next(O);
              }));
            }, function(O) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(O?.name) || p || Sr(function() {
                p || s.error && s.error(O);
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
      var Yt = Et;
      function Wr(e) {
        var t = Ft;
        try {
          Ft = !0, kt.storagemutated.fire(e), Br(e, !0);
        } finally {
          Ft = t;
        }
      }
      re(Yt, u(u({}, De), { delete: function(e) {
        return new Yt(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new Yt(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = Yt.dependencies, r = t.indexedDB, t = t.IDBKeyRange, (Fr(r) ? Promise.resolve(r.databases()).then(function(o) {
            return o.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== Kn;
            });
          }) : kr(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return je(new F.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          D(this, e);
        };
      }, ignoreTransaction: function(e) {
        return ne.trans ? Ut(ne.transless, e) : e();
      }, vip: jr, async: function(e) {
        return function() {
          try {
            var t = $r(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : J.resolve(t);
          } catch (r) {
            return je(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = $r(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : J.resolve(o);
        } catch (s) {
          return je(s);
        }
      }, currentTransaction: { get: function() {
        return ne.trans || null;
      } }, waitFor: function(e, t) {
        return t = J.resolve(typeof e == "function" ? Yt.ignoreTransaction(e) : e).timeout(t || 6e4), ne.trans ? ne.trans.waitFor(t) : t;
      }, Promise: J, debug: { get: function() {
        return Q;
      }, set: function(e) {
        me(e);
      } }, derive: he, extend: D, props: re, override: ke, Events: mn, on: kt, liveQuery: Bi, extendObservabilitySet: zn, getByKeyPath: ie, setByKeyPath: oe, delByKeyPath: function(e, t) {
        typeof t == "string" ? oe(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          oe(e, r, void 0);
        });
      }, shallowClone: Ee, deepClone: Ge, getObjectDiff: Vr, cmp: ve, asap: Fe, minKey: -1 / 0, addons: [], connections: un, errnames: P, dependencies: tr, cache: Wt, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), Yt.maxKey = wn(Yt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (kt(bn, function(e) {
        Ft || (e = new CustomEvent(Ar, { detail: e }), Ft = !0, dispatchEvent(e), Ft = !1);
      }), addEventListener(Ar, function(e) {
        e = e.detail, Ft || Wr(e);
      }));
      var hn, Ft = !1, $i = function() {
      };
      return typeof BroadcastChannel < "u" && (($i = function() {
        (hn = new BroadcastChannel(Ar)).onmessage = function(e) {
          return e.data && Wr(e.data);
        };
      })(), typeof hn.unref == "function" && hn.unref(), kt(bn, function(e) {
        Ft || hn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Et.disableBfCache && e.persisted) {
          Q && console.debug("Dexie: handling persisted pagehide"), hn?.close();
          for (var t = 0, r = un; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Et.disableBfCache && e.persisted && (Q && console.debug("Dexie: handling persisted pageshow"), $i(), Wr({ all: new He(-1 / 0, [[]]) }));
      })), J.rejectionMapper = function(e, t) {
        return !e || e instanceof ht || e instanceof TypeError || e instanceof SyntaxError || !e.name || !$[e.name] ? e : (t = new $[e.name](t || e.message, e), "stack" in e && de(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, me(Q), u(Et, Object.freeze({ __proto__: null, Dexie: Et, liveQuery: Bi, Entity: vi, cmp: ve, PropModification: vn, replacePrefix: function(e, t) {
        return new vn({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new vn({ add: e });
      }, remove: function(e) {
        return new vn({ remove: e });
      }, default: Et, RangeSet: He, mergeRanges: xn, rangesOverlap: Di }), { default: Et }), Et;
    });
  }(Eo)), Eo.exports;
}
var _h = wh();
const Us = /* @__PURE__ */ gh(_h), hu = Symbol.for("Dexie"), No = globalThis[hu] || (globalThis[hu] = Us);
if (Us.semVer !== No.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Us.semVer} and ${No.semVer}`);
const {
  liveQuery: Kh,
  mergeRanges: qh,
  rangesOverlap: Bh,
  RangeSet: $h,
  cmp: Vh,
  Entity: Uh,
  PropModification: Gh,
  replacePrefix: Hh,
  add: Wh,
  remove: Yh,
  DexieYProvider: Qh
} = No, Sh = /* @__PURE__ */ $u({
  __name: "oscd-loader",
  props: {
    doc: {},
    pluginLocation: {}
  },
  setup(n) {
    const i = n, a = zi(0), u = zi(), l = new rh(), d = Lc(), v = zi();
    Po(W), Po(D), mf(() => {
      i.doc && de(i.doc);
    }), wo(
      () => d.value,
      (ae) => {
        ae && x(ae);
      },
      { immediate: !0 }
    );
    async function x(ae) {
      const ye = new No(ae);
      await ye.open(), v.value = hh(ye);
    }
    async function D() {
      try {
        if (!u.value)
          return;
        const ke = (await import(i.pluginLocation)).default;
        class pe extends ke {
        }
        const Fe = `oscd-plugin-${Date.now()}`;
        customElements.define(Fe, pe);
        const ie = document.createElement(Fe);
        u.value.innerHTML = "", u.value.appendChild(ie), Ce(l), re(document.head), i.doc && (de(i.doc), he(a.value));
      } catch (ae) {
        console.error("Failed to load plugin:", ae);
      }
    }
    function W() {
      u.value && (u.value.addEventListener("editor-action", (ae) => {
        G(Pc(jp(ae.detail.action)));
      }), u.value.addEventListener("oscd-edit", (ae) => {
        const ye = ae.detail.edit ?? ae.detail, ke = Rc(ye);
        if (G(ke), !v.value) {
          console.warn("sdk is needed to translate and apply events");
          return;
        }
      }), u.value.addEventListener("oscd-edit-v2", (ae) => K(ae)));
    }
    function K(ae) {
      const ye = ae.detail.edit;
      G(ye);
    }
    function G(ae) {
      if (!v.value) {
        console.warn("sdk is needed to translate and apply events");
        return;
      }
      l.commit(ae), a.value += 1, he(a.value), kc(ae, v.value);
    }
    function re(ae) {
      ae.appendChild(
        se(
          "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&family=Roboto+Mono:wght@400;500&display=swap"
        )
      ), ae.appendChild(
        se("https://fonts.googleapis.com/icon?family=Material+Icons+Outlined")
      ), ae.appendChild(
        se(
          "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&family=Roboto:wght@300;400;500&display=swap"
        )
      ), ae.appendChild(
        se("https://fonts.googleapis.com/css?family=Material+Icons&display=block")
      ), ae.appendChild(
        se("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined")
      );
    }
    function se(ae) {
      const ye = document.createElement("link");
      return ye.href = ae, ye.rel = "stylesheet", ye;
    }
    function de(ae) {
      const ye = u.value?.firstElementChild;
      ye && (ye.doc = ae);
    }
    function he(ae) {
      const ye = u.value?.firstElementChild;
      ye && (ye.editCount = a.value, ye.docVersion = a.value);
    }
    function Ce(ae) {
      const ye = u.value?.firstElementChild;
      ye && (ye.editor = ae);
    }
    return (ae, ye) => (uc(), Tf("div", {
      ref_key: "pluginContainerRef",
      ref: u
    }, null, 512));
  }
});
var mu = {}, yu;
function xh() {
  return yu || (yu = 1, (function() {
    function n(I) {
      var k = 0;
      return function() {
        return k < I.length ? { done: !1, value: I[k++] } : { done: !0 };
      };
    }
    var i = typeof Object.defineProperties == "function" ? Object.defineProperty : function(I, k, j) {
      return I == Array.prototype || I == Object.prototype || (I[k] = j.value), I;
    };
    function a(I) {
      I = [typeof globalThis == "object" && globalThis, I, typeof window == "object" && window, typeof self == "object" && self, typeof Vs == "object" && Vs];
      for (var k = 0; k < I.length; ++k) {
        var j = I[k];
        if (j && j.Math == Math) return j;
      }
      throw Error("Cannot find global object");
    }
    var u = a(this);
    function l(I, k) {
      if (k) e: {
        var j = u;
        I = I.split(".");
        for (var V = 0; V < I.length - 1; V++) {
          var M = I[V];
          if (!(M in j)) break e;
          j = j[M];
        }
        I = I[I.length - 1], V = j[I], k = k(V), k != V && k != null && i(j, I, { configurable: !0, writable: !0, value: k });
      }
    }
    l("Symbol", function(I) {
      function k(M) {
        if (this instanceof k) throw new TypeError("Symbol is not a constructor");
        return new j("jscomp_symbol_" + (M || "") + "_" + V++, M);
      }
      function j(M, te) {
        this.l = M, i(this, "description", { configurable: !0, writable: !0, value: te });
      }
      if (I) return I;
      j.prototype.toString = function() {
        return this.l;
      };
      var V = 0;
      return k;
    }), l("Symbol.iterator", function(I) {
      if (I) return I;
      I = Symbol("Symbol.iterator");
      for (var k = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), j = 0; j < k.length; j++) {
        var V = u[k[j]];
        typeof V == "function" && typeof V.prototype[I] != "function" && i(V.prototype, I, { configurable: !0, writable: !0, value: function() {
          return d(n(this));
        } });
      }
      return I;
    });
    function d(I) {
      return I = { next: I }, I[Symbol.iterator] = function() {
        return this;
      }, I;
    }
    function v(I) {
      var k = typeof Symbol < "u" && Symbol.iterator && I[Symbol.iterator];
      return k ? k.call(I) : { next: n(I) };
    }
    function x(I) {
      if (!(I instanceof Array)) {
        I = v(I);
        for (var k, j = []; !(k = I.next()).done; ) j.push(k.value);
        I = j;
      }
      return I;
    }
    var D = typeof Object.create == "function" ? Object.create : function(I) {
      function k() {
      }
      return k.prototype = I, new k();
    }, W = function() {
      function I() {
        function j() {
        }
        return Reflect.construct(j, [], function() {
        }), new j() instanceof j;
      }
      if (typeof Reflect < "u" && Reflect.construct) {
        if (I()) return Reflect.construct;
        var k = Reflect.construct;
        return function(j, V, M) {
          return j = k(j, V), M && Reflect.setPrototypeOf(j, M.prototype), j;
        };
      }
      return function(j, V, M) {
        return M === void 0 && (M = j), M = D(M.prototype || Object.prototype), Function.prototype.apply.call(
          j,
          M,
          V
        ) || M;
      };
    }(), K;
    if (typeof Object.setPrototypeOf == "function") K = Object.setPrototypeOf;
    else {
      var G;
      e: {
        var re = { a: !0 }, se = {};
        try {
          se.__proto__ = re, G = se.a;
          break e;
        } catch {
        }
        G = !1;
      }
      K = G ? function(I, k) {
        if (I.__proto__ = k, I.__proto__ !== k) throw new TypeError(I + " is not extensible");
        return I;
      } : null;
    }
    var de = K, he = window, Ce;
    if (((Ce = he.CustomElementRegistryPolyfill) == null ? void 0 : Ce.formAssociated) === void 0) {
      var ae = {};
      he.CustomElementRegistryPolyfill = (ae.formAssociated = /* @__PURE__ */ new Set(), ae);
    }
    var ye = window.HTMLElement, ke = window.customElements.define, pe = window.customElements.get, Fe = window.customElements, ie = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), Ee = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap();
    function et() {
      var I;
      this.promise = new Promise(function(k) {
        I = k;
      }), this.resolve = I;
    }
    function it() {
      this.h = /* @__PURE__ */ new Map(), this.m = /* @__PURE__ */ new Map(), this.j = /* @__PURE__ */ new Map(), this.i = /* @__PURE__ */ new Map();
    }
    it.prototype.define = function(I, k) {
      if (I = I.toLowerCase(), this.h.get(I) !== void 0) throw new DOMException(`Failed to execute 'define' on 'CustomElementRegistry': the name "` + I + '" has already been used with this registry');
      if (this.m.get(k) !== void 0) throw new DOMException("Failed to execute 'define' on 'CustomElementRegistry': this constructor has already been used with this registry");
      var j = k.prototype.attributeChangedCallback, V = new Set(k.observedAttributes || []);
      wt(k, V, j);
      var M = pe.call(Fe, I), te, Q, me = (Q = (te = M) == null ? void 0 : te.s) != null ? Q : k.formAssociated || he.CustomElementRegistryPolyfill.formAssociated.has(I);
      if (me && he.CustomElementRegistryPolyfill.formAssociated.add(I), me != k.formAssociated) try {
        k.formAssociated = me;
      } catch {
      }
      if (j = {
        tagName: I,
        g: k,
        connectedCallback: k.prototype.connectedCallback,
        disconnectedCallback: k.prototype.disconnectedCallback,
        adoptedCallback: k.prototype.adoptedCallback,
        attributeChangedCallback: j,
        formAssociated: me,
        formAssociatedCallback: k.prototype.formAssociatedCallback,
        formDisabledCallback: k.prototype.formDisabledCallback,
        formResetCallback: k.prototype.formResetCallback,
        formStateRestoreCallback: k.prototype.formStateRestoreCallback,
        observedAttributes: V
      }, this.h.set(I, j), this.m.set(k, j), M || (M = At(I), ke.call(Fe, I, M)), this === window.customElements && (Ee.set(k, j), j.o = M), M = this.i.get(I)) for (this.i.delete(I), M = v(M), V = M.next(); !V.done; V = M.next()) V = V.value, oe.delete(V), ze(V, j, !0);
      return M = this.j.get(I), M !== void 0 && (M.resolve(k), this.j.delete(I)), k;
    }, it.prototype.upgrade = function(I) {
      for (var k = [], j = 0; j < arguments.length; ++j) k[j] = arguments[j];
      ot.push(this), Fe.upgrade.apply(Fe, x(k)), ot.pop();
    }, it.prototype.get = function(I) {
      var k;
      return (k = this.h.get(I)) == null ? void 0 : k.g;
    }, it.prototype.whenDefined = function(I) {
      var k = this.h.get(I);
      return k !== void 0 ? Promise.resolve(k.g) : (k = this.j.get(I), k === void 0 && (k = new et(), this.j.set(I, k)), k.promise);
    };
    function Ne(I, k, j, V) {
      var M = I.i.get(j);
      M || I.i.set(j, M = /* @__PURE__ */ new Set()), V ? M.add(k) : M.delete(k);
    }
    var Ge;
    window.HTMLElement = function() {
      var I = Ge;
      if (I) return Ge = void 0, I;
      var k = Ee.get(this.constructor);
      if (!k) throw new TypeError("Illegal constructor (custom element class must be registered with global customElements registry to be newable)");
      return I = Reflect.construct(ye, [], k.o), Object.setPrototypeOf(I, this.constructor.prototype), ie.set(I, k), I;
    }, window.HTMLElement.prototype = ye.prototype;
    function At(I) {
      function k() {
        var j = Reflect.construct(ye, [], this.constructor);
        Object.setPrototypeOf(j, HTMLElement.prototype);
        e: {
          var V = j.getRootNode();
          if (!(V === document || V instanceof ShadowRoot)) {
            if (V = ot[ot.length - 1], V instanceof CustomElementRegistry) {
              var M = V;
              break e;
            }
            V = V.getRootNode(), V === document || V instanceof ShadowRoot || (V = ((M = B.get(V)) == null ? void 0 : M.getRootNode()) || document);
          }
          M = V.registry;
        }
        return M = M || window.customElements, (V = M.h.get(I)) ? ze(j, V) : oe.set(j, M), j;
      }
      return u.Object.defineProperty(
        k,
        "formAssociated",
        { configurable: !0, enumerable: !0, get: function() {
          return he.CustomElementRegistryPolyfill.formAssociated.has(I);
        } }
      ), k.prototype.connectedCallback = function(j) {
        for (var V = [], M = 0; M < arguments.length; ++M) V[M] = arguments[M];
        be(this), (M = ie.get(this)) ? M.connectedCallback && M.connectedCallback.apply(this, V) : Ne(oe.get(this), this, I, !0);
      }, k.prototype.disconnectedCallback = function(j) {
        for (var V = [], M = 0; M < arguments.length; ++M) V[M] = arguments[M];
        (M = ie.get(this)) ? M.disconnectedCallback && M.disconnectedCallback.apply(this, V) : Ne(
          oe.get(this),
          this,
          I,
          !1
        );
      }, k.prototype.adoptedCallback = function(j) {
        for (var V = [], M = 0; M < arguments.length; ++M) V[M] = arguments[M];
        var te, Q;
        (te = ie.get(this)) == null || (Q = te.adoptedCallback) == null || Q.apply(this, V);
      }, k.prototype.formAssociatedCallback = function(j) {
        for (var V = [], M = 0; M < arguments.length; ++M) V[M] = arguments[M];
        if (M = ie.get(this), M != null && M.formAssociated) {
          var te;
          M == null || (te = M.formAssociatedCallback) == null || te.apply(this, V);
        }
      }, k.prototype.formDisabledCallback = function(j) {
        for (var V = [], M = 0; M < arguments.length; ++M) V[M] = arguments[M];
        if (M = ie.get(this), M != null && M.formAssociated) {
          var te;
          M == null || (te = M.formDisabledCallback) == null || te.apply(this, V);
        }
      }, k.prototype.formResetCallback = function(j) {
        for (var V = [], M = 0; M < arguments.length; ++M) V[M] = arguments[M];
        if (M = ie.get(this), M != null && M.formAssociated) {
          var te;
          M == null || (te = M.formResetCallback) == null || te.apply(this, V);
        }
      }, k.prototype.formStateRestoreCallback = function(j) {
        for (var V = [], M = 0; M < arguments.length; ++M) V[M] = arguments[M];
        if (M = ie.get(this), M != null && M.formAssociated) {
          var te;
          M == null || (te = M.formStateRestoreCallback) == null || te.apply(this, V);
        }
      }, k;
    }
    window.CustomElementRegistry = it;
    function wt(I, k, j) {
      if (k.size !== 0 && j !== void 0) {
        var V = I.prototype.setAttribute;
        V && (I.prototype.setAttribute = function(Q, me) {
          if (be(this), Q = Q.toLowerCase(), k.has(Q)) {
            var ce = this.getAttribute(Q);
            V.call(this, Q, me), j.call(this, Q, ce, me);
          } else V.call(this, Q, me);
        });
        var M = I.prototype.removeAttribute;
        M && (I.prototype.removeAttribute = function(Q) {
          if (be(this), Q = Q.toLowerCase(), k.has(Q)) {
            var me = this.getAttribute(Q);
            M.call(this, Q), j.call(this, Q, me, null);
          } else M.call(this, Q);
        });
        var te = I.prototype.toggleAttribute;
        te && (I.prototype.toggleAttribute = function(Q, me) {
          if (be(this), Q = Q.toLowerCase(), k.has(Q)) {
            var ce = this.getAttribute(Q);
            te.call(this, Q, me), me = this.getAttribute(Q), ce !== me && j.call(this, Q, ce, me);
          } else te.call(this, Q, me);
        });
      }
    }
    var Ue;
    document.readyState === "loading" && (Ue = /* @__PURE__ */ new Set(), document.addEventListener("readystatechange", function() {
      Ue.forEach(function(I) {
        return Pe(I, ie.get(I));
      });
    }, { once: !0 }));
    function be(I) {
      var k;
      (k = Ue) != null && k.has(I) && Pe(I, ie.get(I));
    }
    function Pe(I, k) {
      var j;
      (j = Ue) == null || j.delete(I), k.attributeChangedCallback && k.observedAttributes.forEach(function(V) {
        I.hasAttribute(V) && k.attributeChangedCallback.call(I, V, null, I.getAttribute(V));
      });
    }
    function tt(I) {
      var k = Object.getPrototypeOf(I);
      if (k !== window.HTMLElement) return k === ye ? Object.setPrototypeOf(I, window.HTMLElement) : tt(k);
    }
    function ze(I, k, j) {
      j = j === void 0 ? !1 : j, Object.setPrototypeOf(I, k.g.prototype), ie.set(I, k), Ge = I;
      try {
        new k.g();
      } catch {
        tt(k.g), new k.g();
      }
      k.attributeChangedCallback && (Ue === void 0 || I.hasAttributes() ? Pe(I, k) : Ue.add(I)), j && k.connectedCallback && I.isConnected && k.connectedCallback.call(I);
    }
    var at = Element.prototype.attachShadow;
    Element.prototype.attachShadow = function(I, k) {
      for (var j = [], V = 1; V < arguments.length; ++V) j[V - 1] = arguments[V];
      var M = Object.assign({}, I);
      return V = I.customElements, V = I.registry === void 0 ? V : I.registry, M = (delete M.customElements, delete M.registry, M), j = at.call.apply(at, [this, M].concat(x(j))), V !== void 0 && (j.customElements = j.registry = V), j;
    };
    var ot = [document];
    function ht(I, k, j) {
      var V = (j ? Object.getPrototypeOf(j) : I.prototype)[k];
      I.prototype[k] = function(M) {
        for (var te = [], Q = 0; Q < arguments.length; ++Q) te[Q] = arguments[Q];
        return ot.push(this), te = V.apply(j || this, te), te !== void 0 && B.set(te, this), ot.pop(), te;
      };
    }
    ht(ShadowRoot, "createElement", document), ht(ShadowRoot, "createElementNS", document), ht(ShadowRoot, "importNode", document), ht(Element, "insertAdjacentHTML");
    function rn(I) {
      var k = Object.getOwnPropertyDescriptor(I.prototype, "innerHTML");
      Object.defineProperty(I.prototype, "innerHTML", Object.assign({}, k, { set: function(j) {
        ot.push(this), k.set.call(this, j), ot.pop();
      } }));
    }
    if (rn(Element), rn(ShadowRoot), Object.defineProperty(window, "customElements", { value: new CustomElementRegistry(), configurable: !0, writable: !0 }), window.ElementInternals && window.ElementInternals.prototype.setFormValue) {
      var It = /* @__PURE__ */ new WeakMap(), pt = HTMLElement.prototype.attachInternals, P = ["setFormValue", "setValidity", "checkValidity", "reportValidity"];
      HTMLElement.prototype.attachInternals = function(I) {
        for (var k = [], j = 0; j < arguments.length; ++j) k[j] = arguments[j];
        return k = pt.call.apply(pt, [this].concat(x(k))), It.set(k, this), k;
      }, P.forEach(function(I) {
        var k = window.ElementInternals.prototype, j = k[I];
        k[I] = function(V) {
          for (var M = [], te = 0; te < arguments.length; ++te) M[te] = arguments[te];
          if (te = It.get(this), ie.get(te).formAssociated === !0) return j?.call.apply(j, [this].concat(x(M)));
          throw new DOMException("Failed to execute " + j + " on 'ElementInternals': The target element is not a form-associated custom element.");
        };
      });
      var w = function(I) {
        var k = W(Array, [].concat(x(I)), this.constructor);
        return k.l = I, k;
      }, F = w, $ = Array;
      if (F.prototype = D($.prototype), F.prototype.constructor = F, de) de(F, $);
      else for (var De in $) if (De != "prototype") if (Object.defineProperties) {
        var A = Object.getOwnPropertyDescriptor($, De);
        A && Object.defineProperty(F, De, A);
      } else F[De] = $[De];
      F.u = $.prototype, u.Object.defineProperty(w.prototype, "value", { configurable: !0, enumerable: !0, get: function() {
        var I;
        return ((I = this.l.find(function(k) {
          return k.checked === !0;
        })) == null ? void 0 : I.value) || "";
      } });
      var L = function(I) {
        var k = this, j = /* @__PURE__ */ new Map();
        I.forEach(function(V, M) {
          var te = V.getAttribute("name"), Q = j.get(te) || [];
          k[+M] = V, Q.push(V), j.set(te, Q);
        }), this.length = I.length, j.forEach(function(V, M) {
          V && M !== "length" && M !== "item" && M !== "namedItem" && (k[M] = V.length === 1 ? V[0] : new w(V));
        });
      };
      L.prototype.item = function(I) {
        var k;
        return (k = this[I]) != null ? k : null;
      }, L.prototype[Symbol.iterator] = function() {
        throw Error("Method not implemented.");
      }, L.prototype.namedItem = function(I) {
        var k;
        return (k = this[I]) != null ? k : null;
      };
      var Z = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, "elements");
      Object.defineProperty(
        HTMLFormElement.prototype,
        "elements",
        { get: function() {
          var I = Z.get.call(this), k = [];
          I = v(I);
          for (var j = I.next(); !j.done; j = I.next()) {
            j = j.value;
            var V = ie.get(j);
            V && V.formAssociated !== !0 || k.push(j);
          }
          return new L(k);
        } }
      );
    }
  }).call(typeof globalThis == "object" ? globalThis : window)), mu;
}
xh();
const Eh = /* @__PURE__ */ $u({
  __name: "app",
  props: {
    api: {},
    pluginLocation: {}
  },
  setup(n) {
    const i = n;
    let a = zi(), u = () => {
    };
    const l = Lc();
    Po(() => {
      u = i.api.activeFileName.subscribe(async (v, x) => {
        d(v), l.value = v;
      }), i.api.activeFileName.value && (l.value = i.api.activeFileName.value, d(i.api.activeFileName.value));
    }), ua(() => {
      u();
    });
    async function d(v) {
      if (!v)
        return;
      const { xmlDocument: x } = await xd({ databaseName: v });
      a.value = x;
    }
    return (v, x) => (uc(), Cf(Sh, {
      doc: Fu(a),
      pluginLocation: i.pluginLocation
    }, null, 8, ["doc", "pluginLocation"]));
  }
}), Th = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [u, l] of i)
    a[u] = l;
  return a;
}, Ch = /* @__PURE__ */ Th(Eh, [["__scopeId", "data-v-fd2ca7ba"]]);
function Xh(n, i) {
  const a = Ah(import.meta.url);
  if (!document.getElementById(n)) {
    console.error({ msg: "could not found root element", rootId: n });
    return;
  }
  const l = cd(Ch, { api: i, pluginLocation: a });
  return l.mount(`#${n}`), l.unmount;
}
function Ah(n) {
  const a = new URL(n).searchParams.get("plugin");
  if (a === "")
    throw new Error(`could not extract plugin location from url:${n}`);
  return a;
}
export {
  Xh as default
};
