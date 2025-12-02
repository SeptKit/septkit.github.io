(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(`:host{display:block;font-family:var(--oscd-text-font, "Roboto");color:var(--mdc-theme-on-surface);background-color:var(--mdc-theme-surface)}h3{color:var(--primary)}#root-container{padding:16px}*{--base03: #002b36;--base02: #073642;--base01: #586e75;--base00: #657b83;--base0: #839496;--base1: #93a1a1;--base2: #eee8d5;--base3: #fdf6e3;--yellow: #b58900;--orange: #cb4b16;--red: #dc322f;--magenta: #d33682;--violet: #6c71c4;--blue: #268bd2;--cyan: #2aa198;--green: #859900;--primary: var(--cyan);--secondary: var(--violet);--mdc-theme-primary: var(--primary);--mdc-theme-secondary: var(--secondary);--mdc-theme-background: var(--base3);--mdc-theme-surface: var(--base3);--mdc-theme-on-primary: var(--base2);--mdc-theme-on-secondary: var(--base2);--mdc-theme-on-background: var(--base00);--mdc-theme-on-surface: var(--base00);--mdc-theme-text-primary-on-background: var(--base01);--mdc-theme-text-secondary-on-background: var(--base00);--mdc-theme-text-icon-on-background: var(--base00);--mdc-theme-error: var(--red);--mdc-button-disabled-ink-color: var(--base1);--mdc-drawer-heading-ink-color: var(--base00);--mdc-text-field-fill-color: var(--base2);--mdc-text-field-disabled-fill-color: var(--base3);--mdc-text-field-ink-color: var(--base00);--mdc-text-field-label-ink-color: var(--base00);--mdc-select-fill-color: var(--base2);--mdc-select-disabled-fill-color: var(--base3);--mdc-select-ink-color: var(--base00);--mdc-dialog-heading-ink-color: var(--base00);--mdc-icon-font: "Material Icons Outlined";--oscd-primary: var(--oscd-theme-primary, var(--cyan));--oscd-secondary: var(--oscd-theme-secondary, var(--violet));--oscd-error: var(--oscd-theme-error, var(--red));--oscd-base03: var(--oscd-theme-base03, var(--base03));--oscd-base02: var(--oscd-theme-base02, var(--base02));--oscd-base01: var(--oscd-theme-base01, var(--base01));--oscd-base00: var(--oscd-theme-base00, var(--base00));--oscd-base0: var(--oscd-theme-base0, var(--base0));--oscd-base1: var(--oscd-theme-base1, var(--base1));--oscd-base2: var(--oscd-theme-base2, var(--base2));--oscd-base3: var(--oscd-theme-base3, var(--base3));--oscd-text-font: var(--oscd-theme-text-font, "Roboto");--oscd-icon-font: var(--oscd-theme-icon-font, "Material Icons")}.mdc-drawer span.mdc-drawer__title{color:var(--mdc-theme-text-primary-on-background)!important}abbr{text-decoration:none;border-bottom:none}mwc-textfield[iconTrailing=search]{--mdc-shape-small: 28px}/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */@layer theme{[data-v-fd2ca7ba]:root,[data-v-fd2ca7ba]:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{[data-v-fd2ca7ba],[data-v-fd2ca7ba]:after,[data-v-fd2ca7ba]:before,[data-v-fd2ca7ba]::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-v-fd2ca7ba]::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html[data-v-fd2ca7ba],[data-v-fd2ca7ba]:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr[data-v-fd2ca7ba]{height:0;color:inherit;border-top-width:1px}abbr[data-v-fd2ca7ba]:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1[data-v-fd2ca7ba],h2[data-v-fd2ca7ba],h3[data-v-fd2ca7ba],h4[data-v-fd2ca7ba],h5[data-v-fd2ca7ba],h6[data-v-fd2ca7ba]{font-size:inherit;font-weight:inherit}a[data-v-fd2ca7ba]{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b[data-v-fd2ca7ba],strong[data-v-fd2ca7ba]{font-weight:bolder}code[data-v-fd2ca7ba],kbd[data-v-fd2ca7ba],samp[data-v-fd2ca7ba],pre[data-v-fd2ca7ba]{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small[data-v-fd2ca7ba]{font-size:80%}sub[data-v-fd2ca7ba],sup[data-v-fd2ca7ba]{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub[data-v-fd2ca7ba]{bottom:-.25em}sup[data-v-fd2ca7ba]{top:-.5em}table[data-v-fd2ca7ba]{text-indent:0;border-color:inherit;border-collapse:collapse}[data-v-fd2ca7ba]:-moz-focusring{outline:auto}progress[data-v-fd2ca7ba]{vertical-align:baseline}summary[data-v-fd2ca7ba]{display:list-item}ol[data-v-fd2ca7ba],ul[data-v-fd2ca7ba],menu[data-v-fd2ca7ba]{list-style:none}img[data-v-fd2ca7ba],svg[data-v-fd2ca7ba],video[data-v-fd2ca7ba],canvas[data-v-fd2ca7ba],audio[data-v-fd2ca7ba],iframe[data-v-fd2ca7ba],embed[data-v-fd2ca7ba],object[data-v-fd2ca7ba]{vertical-align:middle;display:block}img[data-v-fd2ca7ba],video[data-v-fd2ca7ba]{max-width:100%;height:auto}button[data-v-fd2ca7ba],input[data-v-fd2ca7ba],select[data-v-fd2ca7ba],optgroup[data-v-fd2ca7ba],textarea[data-v-fd2ca7ba]{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-v-fd2ca7ba]::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup[data-v-fd2ca7ba]{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option[data-v-fd2ca7ba]{padding-inline-start:20px}[data-v-fd2ca7ba]::file-selector-button{margin-inline-end:4px}[data-v-fd2ca7ba]::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){[data-v-fd2ca7ba]::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-v-fd2ca7ba]::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea[data-v-fd2ca7ba]{resize:vertical}[data-v-fd2ca7ba]::-webkit-search-decoration{-webkit-appearance:none}[data-v-fd2ca7ba]::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-v-fd2ca7ba]::-webkit-datetime-edit{display:inline-flex}[data-v-fd2ca7ba]::-webkit-datetime-edit-fields-wrapper{padding:0}[data-v-fd2ca7ba]::-webkit-datetime-edit{padding-block:0}[data-v-fd2ca7ba]::-webkit-datetime-edit-year-field{padding-block:0}[data-v-fd2ca7ba]::-webkit-datetime-edit-month-field{padding-block:0}[data-v-fd2ca7ba]::-webkit-datetime-edit-day-field{padding-block:0}[data-v-fd2ca7ba]::-webkit-datetime-edit-hour-field{padding-block:0}[data-v-fd2ca7ba]::-webkit-datetime-edit-minute-field{padding-block:0}[data-v-fd2ca7ba]::-webkit-datetime-edit-second-field{padding-block:0}[data-v-fd2ca7ba]::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-v-fd2ca7ba]::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-v-fd2ca7ba]::-webkit-calendar-picker-indicator{line-height:1}[data-v-fd2ca7ba]:-moz-ui-invalid{box-shadow:none}button[data-v-fd2ca7ba],input[data-v-fd2ca7ba]:where([type=button],[type=reset],[type=submit]){appearance:button}[data-v-fd2ca7ba]::file-selector-button{appearance:button}[data-v-fd2ca7ba]::-webkit-inner-spin-button{height:auto}[data-v-fd2ca7ba]::-webkit-outer-spin-button{height:auto}[hidden][data-v-fd2ca7ba]:where(:not([hidden=until-found])){display:none!important}:where([data-v-fd2ca7ba]:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where([data-v-fd2ca7ba]:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open][data-v-fd2ca7ba],.modal-open[data-v-fd2ca7ba],.modal-toggle:checked+.modal[data-v-fd2ca7ba]):not(.modal-start,.modal-end){scrollbar-gutter:stable}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}[data-v-fd2ca7ba]:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}[data-v-fd2ca7ba]:root,[data-theme][data-v-fd2ca7ba]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}[data-v-fd2ca7ba]:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){[data-v-fd2ca7ba]:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}[data-v-fd2ca7ba]:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}:where([data-v-fd2ca7ba]:root),[data-v-fd2ca7ba]:root:has(input.theme-controller[value=ocean-light]:checked),[data-theme=ocean-light][data-v-fd2ca7ba]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(37% 0 0);--color-primary:oklch(58.13% .0903 209.8);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(65.24% .0821 207.95);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(98% .001 106.423);--color-neutral:oklch(55% .013 58.071);--color-neutral-content:oklch(98% .031 120.757);--color-info:oklch(70% .165 254.624);--color-info-content:oklch(98% .001 106.423);--color-success:oklch(72% .219 149.579);--color-success-content:oklch(98% .001 106.423);--color-warning:oklch(87% .169 91.605);--color-warning-content:oklch(98% .001 106.423);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(98% .001 106.423);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.21875rem;--size-field:.21875rem;--border:1.5px;--depth:1;--noise:1;--border-color:var(--color-base-content)}}@layer components;@layer utilities{.table[data-v-fd2ca7ba]{border-radius:var(--radius-box);text-align:left;width:100%;font-size:.875rem;position:relative}.table[data-v-fd2ca7ba]:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media (hover:hover){:is(.table tr.row-hover[data-v-fd2ca7ba],.table tr.row-hover[data-v-fd2ca7ba]:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table[data-v-fd2ca7ba] :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table[data-v-fd2ca7ba] :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table[data-v-fd2ca7ba] :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.table[data-v-fd2ca7ba] :where(thead,tfoot){font-size:.875rem;font-weight:600}.table[data-v-fd2ca7ba] :where(tfoot){border-top:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table[data-v-fd2ca7ba] :where(tfoot){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.table[data-v-fd2ca7ba] :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table[data-v-fd2ca7ba] :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table[data-v-fd2ca7ba] :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table[data-v-fd2ca7ba] :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table[data-v-fd2ca7ba] :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.inline[data-v-fd2ca7ba]{display:inline}.table[data-v-fd2ca7ba]{display:table}.link[data-v-fd2ca7ba]{cursor:pointer;text-decoration-line:underline}.link[data-v-fd2ca7ba]:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link[data-v-fd2ca7ba]:focus{outline-offset:2px;outline:2px solid #0000}}.link[data-v-fd2ca7ba]:focus-visible{outline-offset:2px;outline:2px solid}.flex-wrap[data-v-fd2ca7ba]{flex-wrap:wrap}}[data-v-fd2ca7ba]:root{--color-ocean-gray-00:#fff;--color-ocean-gray-25:#fafbfb;--color-ocean-gray-50:#f5f6f7;--color-ocean-gray-75:#eaeeef;--color-ocean-gray-100:#e1e4e6;--color-ocean-gray-150:#c6ced1;--color-ocean-gray-200:#bac1c4;--color-ocean-gray-250:#9fadb2;--color-ocean-gray-300:#889499;--color-ocean-gray-350:#72858c;--color-ocean-gray-400:#617177;--color-ocean-gray-450:#3f555e;--color-ocean-gray-500:#394d55;--color-ocean-gray-550:#34464d;--color-ocean-gray-600:#2e3e44;--color-ocean-gray-650:#27353b;--color-ocean-gray-700:#222e33;--color-ocean-gray-750:#1f272b;--color-ocean-gray-800:#171f22;--color-ocean-gray-850:#11171a;--color-ocean-gray-900:#0b0f11;--color-chart-1:#f7931e;--color-chart-2:#40535b;--color-chart-3:#2798aa;--color-chart-4:#6da89c;--color-chart-5:#a4cadd;--color-chart-6:#97b42d;--color-chart-7:#ffcb05;--color-chart-8:#ee652e;--color-chart-9:#528694;--color-chart-10:#a10f3b}header[data-v-fd2ca7ba]{line-height:1.5}.logo[data-v-fd2ca7ba]{margin:0 auto 2rem;display:block}@media (min-width:1024px){header[data-v-fd2ca7ba]{padding-right:calc(var(--section-gap)/2);place-items:center;display:flex}.logo[data-v-fd2ca7ba]{margin:0 2rem 0 0}header .wrapper[data-v-fd2ca7ba]{flex-wrap:wrap;place-items:flex-start;display:flex}}@keyframes dropdown-fd2ca7ba{0%{opacity:0}}@keyframes radio-fd2ca7ba{0%{padding:5px}50%{padding:3px}}@keyframes toast-fd2ca7ba{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes rating-fd2ca7ba{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes skeleton-fd2ca7ba{0%{background-position:150%}to{background-position:-50%}}@keyframes progress-fd2ca7ba{50%{background-position-x:-115%}}`)),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
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
const ft = {}, ii = [], Nn = () => {
}, Mc = () => !1, Ro = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // uppercase letter
(n.charCodeAt(2) > 122 || n.charCodeAt(2) < 97), Hs = (n) => n.startsWith("onUpdate:"), Bt = Object.assign, Ws = (n, i) => {
  const a = n.indexOf(i);
  a > -1 && n.splice(a, 1);
}, Bc = Object.prototype.hasOwnProperty, nt = (n, i) => Bc.call(n, i), Be = Array.isArray, Hi = (n) => ko(n) === "[object Map]", Kc = (n) => ko(n) === "[object Set]", Ke = (n) => typeof n == "function", Pt = (n) => typeof n == "string", ci = (n) => typeof n == "symbol", St = (n) => n !== null && typeof n == "object", vu = (n) => (St(n) || Ke(n)) && Ke(n.then) && Ke(n.catch), qc = Object.prototype.toString, ko = (n) => qc.call(n), $c = (n) => ko(n).slice(8, -1), Vc = (n) => ko(n) === "[object Object]", Ys = (n) => Pt(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, Wi = /* @__PURE__ */ Gs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), jo = (n) => {
  const i = /* @__PURE__ */ Object.create(null);
  return (a) => i[a] || (i[a] = n(a));
}, Uc = /-(\w)/g, vr = jo(
  (n) => n.replace(Uc, (i, a) => a ? a.toUpperCase() : "")
), Gc = /\B([A-Z])/g, ti = jo(
  (n) => n.replace(Gc, "-$1").toLowerCase()
), gu = jo((n) => n.charAt(0).toUpperCase() + n.slice(1)), ps = jo(
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
const Fo = () => ba || (ba = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Qs(n) {
  if (Be(n)) {
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
  else if (Be(n))
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
  const y = As.get(n);
  if (!y) {
    no++;
    return;
  }
  const S = (N) => {
    N && N.trigger();
  };
  if (zs(), i === "clear")
    y.forEach(S);
  else {
    const N = Be(n), W = N && Ys(a);
    if (N && a === "length") {
      const B = Number(u);
      y.forEach((G, re) => {
        (re === "length" || re === ro || !ci(re) && re >= B) && S(G);
      });
    } else
      switch ((a !== void 0 || y.has(void 0)) && S(y.get(a)), W && S(y.get(ro)), i) {
        case "add":
          N ? W && S(y.get("length")) : (S(y.get(Zr)), Hi(n) && S(y.get(Ps)));
          break;
        case "delete":
          N || (S(y.get(Zr)), Hi(n) && S(y.get(Ps)));
          break;
        case "set":
          Hi(n) && S(y.get(Zr));
          break;
      }
  }
  Js();
}
function ni(n) {
  const i = tt(n);
  return i === n ? i : (Lt(i, "iterate", ro), Tn(n) ? i : i.map(Jt));
}
function ta(n) {
  return Lt(n = tt(n), "iterate", ro), n;
}
const rl = {
  __proto__: null,
  [Symbol.iterator]() {
    return ys(this, Symbol.iterator, Jt);
  },
  concat(...n) {
    return ni(this).concat(
      ...n.map((i) => Be(i) ? ni(i) : i)
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
  const y = ta(n), S = y !== n && !Tn(n), N = y[i];
  if (N !== il[i]) {
    const G = N.apply(n, d);
    return S ? Jt(G) : G;
  }
  let W = a;
  y !== n && (S ? W = function(G, re) {
    return a.call(this, Jt(G), re, n);
  } : a.length > 2 && (W = function(G, re) {
    return a.call(this, G, re, n);
  }));
  const B = N.call(y, W, u);
  return S && l ? l(B) : B;
}
function _a(n, i, a, u) {
  const l = ta(n);
  let d = a;
  return l !== n && (Tn(n) ? a.length > 3 && (d = function(y, S, N) {
    return a.call(this, y, S, N, n);
  }) : d = function(y, S, N) {
    return a.call(this, y, Jt(S), N, n);
  }), l[i](d, ...u);
}
function vs(n, i, a) {
  const u = tt(n);
  Lt(u, "iterate", ro);
  const l = u[i](...a);
  return (l === -1 || l === !1) && oa(a[0]) ? (a[0] = tt(a[0]), u[i](...a)) : l;
}
function Vi(n, i, a = []) {
  ar(), zs();
  const u = tt(n)[i].apply(n, a);
  return Js(), ur(), u;
}
const ol = /* @__PURE__ */ Gs("__proto__,__v_isRef,__isVue"), Pu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(ci)
);
function sl(n) {
  ci(n) || (n = String(n));
  const i = tt(this);
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
      return u === (l ? d ? yl : Ru : d ? Du : Nu).get(i) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(i) === Object.getPrototypeOf(u) ? i : void 0;
    const y = Be(i);
    if (!l) {
      let N;
      if (y && (N = rl[a]))
        return N;
      if (a === "hasOwnProperty")
        return sl;
    }
    const S = Reflect.get(
      i,
      a,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Mt(i) ? i : u
    );
    return (ci(a) ? Pu.has(a) : ol(a)) || (l || Lt(i, "get", a), d) ? S : Mt(S) ? y && Ys(a) ? S : S.value : St(S) ? l ? ku(S) : ra(S) : S;
  }
}
class Ou extends Iu {
  constructor(i = !1) {
    super(!1, i);
  }
  set(i, a, u, l) {
    let d = i[a];
    if (!this._isShallow) {
      const N = ei(d);
      if (!Tn(u) && !ei(u) && (d = tt(d), u = tt(u)), !Be(i) && Mt(d) && !Mt(u))
        return N ? !1 : (d.value = u, !0);
    }
    const y = Be(i) && Ys(a) ? Number(a) < i.length : nt(i, a), S = Reflect.set(
      i,
      a,
      u,
      Mt(i) ? i : l
    );
    return i === tt(l) && (y ? mr(u, d) && sr(i, "set", a, u) : sr(i, "add", a, u)), S;
  }
  deleteProperty(i, a) {
    const u = nt(i, a);
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
      Be(i) ? "length" : Zr
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
    const l = this.__v_raw, d = tt(l), y = Hi(d), S = n === "entries" || n === Symbol.iterator && y, N = n === "keys" && y, W = l[n](...u), B = a ? Is : i ? Os : Jt;
    return !i && Lt(
      d,
      "iterate",
      N ? Ps : Zr
    ), {
      // iterator protocol
      next() {
        const { value: G, done: re } = W.next();
        return re ? { value: G, done: re } : {
          value: S ? [B(G[0]), B(G[1])] : B(G),
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
      const d = this.__v_raw, y = tt(d), S = tt(l);
      n || (mr(l, S) && Lt(y, "get", l), Lt(y, "get", S));
      const { has: N } = po(y), W = i ? Is : n ? Os : Jt;
      if (N.call(y, l))
        return W(d.get(l));
      if (N.call(y, S))
        return W(d.get(S));
      d !== y && d.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !n && Lt(tt(l), "iterate", Zr), Reflect.get(l, "size", l);
    },
    has(l) {
      const d = this.__v_raw, y = tt(d), S = tt(l);
      return n || (mr(l, S) && Lt(y, "has", l), Lt(y, "has", S)), l === S ? d.has(l) : d.has(l) || d.has(S);
    },
    forEach(l, d) {
      const y = this, S = y.__v_raw, N = tt(S), W = i ? Is : n ? Os : Jt;
      return !n && Lt(N, "iterate", Zr), S.forEach((B, G) => l.call(d, W(B), W(G), y));
    }
  };
  return Bt(
    a,
    n ? {
      add: ho("add"),
      set: ho("set"),
      delete: ho("delete"),
      clear: ho("clear")
    } : {
      add(l) {
        !i && !Tn(l) && !ei(l) && (l = tt(l));
        const d = tt(this);
        return po(d).has.call(d, l) || (d.add(l), sr(d, "add", l, l)), this;
      },
      set(l, d) {
        !i && !Tn(d) && !ei(d) && (d = tt(d));
        const y = tt(this), { has: S, get: N } = po(y);
        let W = S.call(y, l);
        W || (l = tt(l), W = S.call(y, l));
        const B = N.call(y, l);
        return y.set(l, d), W ? mr(d, B) && sr(y, "set", l, d) : sr(y, "add", l, d), this;
      },
      delete(l) {
        const d = tt(this), { has: y, get: S } = po(d);
        let N = y.call(d, l);
        N || (l = tt(l), N = y.call(d, l)), S && S.call(d, l);
        const W = d.delete(l);
        return N && sr(d, "delete", l, void 0), W;
      },
      clear() {
        const l = tt(this), d = l.size !== 0, y = l.clear();
        return d && sr(
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
    a[l] = fl(l, n, i);
  }), a;
}
function na(n, i) {
  const a = dl(n, i);
  return (u, l, d) => l === "__v_isReactive" ? !n : l === "__v_isReadonly" ? n : l === "__v_raw" ? u : Reflect.get(
    nt(a, l) && l in u ? a : u,
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
const Nu = /* @__PURE__ */ new WeakMap(), Du = /* @__PURE__ */ new WeakMap(), Ru = /* @__PURE__ */ new WeakMap(), yl = /* @__PURE__ */ new WeakMap();
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
    Nu
  );
}
function bl(n) {
  return ia(
    n,
    !1,
    ll,
    hl,
    Du
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
  const y = l.get(n);
  if (y)
    return y;
  const S = new Proxy(
    n,
    d === 2 ? u : a
  );
  return l.set(n, S), S;
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
function tt(n) {
  const i = n && n.__v_raw;
  return i ? tt(i) : n;
}
function wl(n) {
  return !nt(n, "__v_skip") && Object.isExtensible(n) && Ts(n, "__v_skip", !0), n;
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
    this.dep = new ea(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = a ? i : tt(i), this._value = a ? i : Jt(i), this.__v_isShallow = a;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(i) {
    const a = this._rawValue, u = this.__v_isShallow || Tn(i) || ei(i);
    i = u ? i : tt(i), mr(i, a) && (this._rawValue = i, this._value = u ? i : Jt(i), this.dep.trigger());
  }
}
function ju(n) {
  return Mt(n) ? n.value : n;
}
const xl = {
  get: (n, i, a) => i === "__v_raw" ? n : ju(Reflect.get(n, i, a)),
  set: (n, i, a, u) => {
    const l = n[i];
    return Mt(l) && !Mt(a) ? (l.value = a, !0) : Reflect.set(n, i, a, u);
  }
};
function Fu(n) {
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
  return Ke(n) ? u = n : (u = n.get, l = n.set), new El(u, l, a);
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
  const { immediate: u, deep: l, once: d, scheduler: y, augmentJob: S, call: N } = a, W = (pe) => l ? pe : Tn(pe) || l === !1 || l === 0 ? pr(pe, 1) : pr(pe);
  let B, G, re, se, he = !1, de = !1;
  if (Mt(n) ? (G = () => n.value, he = Tn(n)) : Xi(n) ? (G = () => W(n), he = !0) : Be(n) ? (de = !0, he = n.some((pe) => Xi(pe) || Tn(pe)), G = () => n.map((pe) => {
    if (Mt(pe))
      return pe.value;
    if (Xi(pe))
      return W(pe);
    if (Ke(pe))
      return N ? N(pe, 2) : pe();
  })) : Ke(n) ? i ? G = N ? () => N(n, 2) : n : G = () => {
    if (re) {
      ar();
      try {
        re();
      } finally {
        ur();
      }
    }
    const pe = zr;
    zr = B;
    try {
      return N ? N(n, 3, [se]) : n(se);
    } finally {
      zr = pe;
    }
  } : G = Nn, i && l) {
    const pe = G, je = l === !0 ? 1 / 0 : l;
    G = () => pr(pe(), je);
  }
  const Ce = el(), ae = () => {
    B.stop(), Ce && Ce.active && Ws(Ce.effects, B);
  };
  if (d && i) {
    const pe = i;
    i = (...je) => {
      pe(...je), ae();
    };
  }
  let ye = de ? new Array(n.length).fill(mo) : mo;
  const ke = (pe) => {
    if (!(!(B.flags & 1) || !B.dirty && !pe))
      if (i) {
        const je = B.run();
        if (l || he || (de ? je.some((ie, oe) => mr(ie, ye[oe])) : mr(je, ye))) {
          re && re();
          const ie = zr;
          zr = B;
          try {
            const oe = [
              je,
              // pass undefined as the old value when it's changed for the first time
              ye === mo ? void 0 : de && ye[0] === mo ? [] : ye,
              se
            ];
            ye = je, N ? N(i, 3, oe) : (
              // @ts-expect-error
              i(...oe)
            );
          } finally {
            zr = ie;
          }
        }
      } else
        B.run();
  };
  return S && S(ke), B = new wu(G), B.scheduler = y ? () => y(ke, !1) : ke, se = (pe) => Cl(pe, !1, B), re = B.onStop = () => {
    const pe = To.get(B);
    if (pe) {
      if (N)
        N(pe, 4);
      else
        for (const je of pe) je();
      To.delete(B);
    }
  }, i ? u ? ke(!0) : ye = B.run() : y ? y(ke.bind(null, !0), !0) : B.run(), ae.pause = B.pause.bind(B), ae.resume = B.resume.bind(B), ae.stop = ae, ae;
}
function pr(n, i = 1 / 0, a) {
  if (i <= 0 || !St(n) || n.__v_skip || (a = a || /* @__PURE__ */ new Set(), a.has(n)))
    return n;
  if (a.add(n), i--, Mt(n))
    pr(n.value, i, a);
  else if (Be(n))
    for (let u = 0; u < n.length; u++)
      pr(n[u], i, a);
  else if (Kc(n) || Hi(n))
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
function Dn(n, i, a, u) {
  if (Ke(n)) {
    const l = uo(n, i, a, u);
    return l && vu(l) && l.catch((d) => {
      Lo(d, i, a);
    }), l;
  }
  if (Be(n)) {
    const l = [];
    for (let d = 0; d < n.length; d++)
      l.push(Dn(n[d], i, a, u));
    return l;
  }
}
function Lo(n, i, a, u = !0) {
  const l = i ? i.vnode : null, { errorHandler: d, throwUnhandledErrorInProduction: y } = i && i.appContext.config || ft;
  if (i) {
    let S = i.parent;
    const N = i.proxy, W = `https://vuejs.org/error-reference/#runtime-${a}`;
    for (; S; ) {
      const B = S.ec;
      if (B) {
        for (let G = 0; G < B.length; G++)
          if (B[G](n, N, W) === !1)
            return;
      }
      S = S.parent;
    }
    if (d) {
      ar(), uo(d, null, 10, [
        n,
        N,
        W
      ]), ur();
      return;
    }
  }
  Pl(n, a, l, u, y);
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
  Co || (Co = Lu.then(Ku));
}
function Nl(n) {
  Be(n) ? oi.push(...n) : lr && n.id === -1 ? lr.splice(ri + 1, 0, n) : n.flags & 1 || (oi.push(n), n.flags |= 1), Mu();
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
function Bu(n) {
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
    Pn = -1, Zt.length = 0, Bu(), Co = null, (Zt.length || oi.length) && Ku();
  }
}
let On = null, qu = null;
function Ao(n) {
  const i = On;
  return On = n, qu = n && n.type.__scopeId || null, i;
}
function Dl(n, i = On, a) {
  if (!i || n._n)
    return n;
  const u = (...l) => {
    u._d && Na(-1);
    const d = Ao(i);
    let y;
    try {
      y = n(...l);
    } finally {
      Ao(d), u._d && Na(1);
    }
    return y;
  };
  return u._n = !0, u._c = !0, u._d = !0, u;
}
function Qr(n, i, a, u) {
  const l = n.dirs, d = i && i.dirs;
  for (let y = 0; y < l.length; y++) {
    const S = l[y];
    d && (S.oldValue = d[y].value);
    let N = S.dir[u];
    N && (ar(), Dn(N, a, 8, [
      n.el,
      S,
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
  return Ke(n) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Bt({ name: n.name }, i, { setup: n })
  ) : n;
}
function Vu(n) {
  n.ids = [n.ids[0] + n.ids[2]++ + "-", 0, 0];
}
function Ji(n, i, a, u, l = !1) {
  if (Be(n)) {
    n.forEach(
      (he, de) => Ji(
        he,
        i && (Be(i) ? i[de] : i),
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
  const d = u.shapeFlag & 4 ? pa(u.component) : u.el, y = l ? null : d, { i: S, r: N } = n, W = i && i.r, B = S.refs === ft ? S.refs = {} : S.refs, G = S.setupState, re = tt(G), se = G === ft ? () => !1 : (he) => nt(re, he);
  if (W != null && W !== N && (Pt(W) ? (B[W] = null, se(W) && (G[W] = null)) : Mt(W) && (W.value = null)), Ke(N))
    uo(N, S, 12, [y, B]);
  else {
    const he = Pt(N), de = Mt(N);
    if (he || de) {
      const Ce = () => {
        if (n.f) {
          const ae = he ? se(N) ? G[N] : B[N] : N.value;
          l ? Be(ae) && Ws(ae, d) : Be(ae) ? ae.includes(d) || ae.push(d) : he ? (B[N] = [d], se(N) && (G[N] = B[N])) : (N.value = [d], n.k && (B[n.k] = N.value));
        } else he ? (B[N] = y, se(N) && (G[N] = y)) : de && (N.value = y, n.k && (B[n.k] = y));
      };
      y ? (Ce.id = -1, dn(Ce, a)) : Ce();
    }
  }
}
Fo().requestIdleCallback;
Fo().cancelIdleCallback;
const Zi = (n) => !!n.type.__asyncLoader, Uu = (n) => n.type.__isKeepAlive;
function jl(n, i) {
  Gu(n, "a", i);
}
function Fl(n, i) {
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
    const l = a[n] || (a[n] = []), d = i.__weh || (i.__weh = (...y) => {
      ar();
      const S = co(a), N = Dn(i, a, n, y);
      return S(), ur(), N;
    });
    return u ? l.unshift(d) : l.push(d), d;
  }
}
const cr = (n) => (i, a = en) => {
  (!so || n === "sp") && Mo(n, (...u) => i(...u), a);
}, Ml = cr("bm"), Po = cr("m"), Bl = cr(
  "bu"
), Kl = cr("u"), ql = cr(
  "bum"
), ua = cr("um"), $l = cr(
  "sp"
), Vl = cr("rtg"), Ul = cr("rtc");
function Gl(n, i = en) {
  Mo("ec", n, i);
}
const Hl = Symbol.for("v-ndc"), Ns = (n) => n ? pc(n) ? pa(n) : Ns(n.parent) : null, eo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Bt(/* @__PURE__ */ Object.create(null), {
    $: (n) => n,
    $el: (n) => n.vnode.el,
    $data: (n) => n.data,
    $props: (n) => n.props,
    $attrs: (n) => n.attrs,
    $slots: (n) => n.slots,
    $refs: (n) => n.refs,
    $parent: (n) => Ns(n.parent),
    $root: (n) => Ns(n.root),
    $host: (n) => n.ce,
    $emit: (n) => n.emit,
    $options: (n) => Wu(n),
    $forceUpdate: (n) => n.f || (n.f = () => {
      sa(n.update);
    }),
    $nextTick: (n) => n.n || (n.n = Il.bind(n.proxy)),
    $watch: (n) => yf.bind(n)
  })
), gs = (n, i) => n !== ft && !n.__isScriptSetup && nt(n, i), Wl = {
  get({ _: n }, i) {
    if (i === "__v_skip")
      return !0;
    const { ctx: a, setupState: u, data: l, props: d, accessCache: y, type: S, appContext: N } = n;
    let W;
    if (i[0] !== "$") {
      const se = y[i];
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
          return y[i] = 1, u[i];
        if (l !== ft && nt(l, i))
          return y[i] = 2, l[i];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (W = n.propsOptions[0]) && nt(W, i)
        )
          return y[i] = 3, d[i];
        if (a !== ft && nt(a, i))
          return y[i] = 4, a[i];
        Ds && (y[i] = 0);
      }
    }
    const B = eo[i];
    let G, re;
    if (B)
      return i === "$attrs" && Lt(n.attrs, "get", ""), B(n);
    if (
      // css module (injected by vue-loader)
      (G = S.__cssModules) && (G = G[i])
    )
      return G;
    if (a !== ft && nt(a, i))
      return y[i] = 4, a[i];
    if (
      // global properties
      re = N.config.globalProperties, nt(re, i)
    )
      return re[i];
  },
  set({ _: n }, i, a) {
    const { data: u, setupState: l, ctx: d } = n;
    return gs(l, i) ? (l[i] = a, !0) : u !== ft && nt(u, i) ? (u[i] = a, !0) : nt(n.props, i) || i[0] === "$" && i.slice(1) in n ? !1 : (d[i] = a, !0);
  },
  has({
    _: { data: n, setupState: i, accessCache: a, ctx: u, appContext: l, propsOptions: d }
  }, y) {
    let S;
    return !!a[y] || n !== ft && nt(n, y) || gs(i, y) || (S = d[0]) && nt(S, y) || nt(u, y) || nt(eo, y) || nt(l.config.globalProperties, y);
  },
  defineProperty(n, i, a) {
    return a.get != null ? n._.accessCache[i] = 0 : nt(a, "value") && this.set(n, i, a.value, null), Reflect.defineProperty(n, i, a);
  }
};
function xa(n) {
  return Be(n) ? n.reduce(
    (i, a) => (i[a] = null, i),
    {}
  ) : n;
}
let Ds = !0;
function Yl(n) {
  const i = Wu(n), a = n.proxy, u = n.ctx;
  Ds = !1, i.beforeCreate && Ea(i.beforeCreate, n, "bc");
  const {
    // state
    data: l,
    computed: d,
    methods: y,
    watch: S,
    provide: N,
    inject: W,
    // lifecycle
    created: B,
    beforeMount: G,
    mounted: re,
    beforeUpdate: se,
    updated: he,
    activated: de,
    deactivated: Ce,
    beforeDestroy: ae,
    beforeUnmount: ye,
    destroyed: ke,
    unmounted: pe,
    render: je,
    renderTracked: ie,
    renderTriggered: oe,
    errorCaptured: Ee,
    serverPrefetch: q,
    // public API
    expose: it,
    inheritAttrs: rt,
    // assets
    components: De,
    directives: Ge,
    filters: At
  } = i;
  if (W && Ql(W, u, null), y)
    for (const be in y) {
      const Pe = y[be];
      Ke(Pe) && (u[be] = Pe.bind(a));
    }
  if (l) {
    const be = l.call(a, a);
    St(be) && (n.data = ra(be));
  }
  if (Ds = !0, d)
    for (const be in d) {
      const Pe = d[be], et = Ke(Pe) ? Pe.bind(a, a) : Ke(Pe.get) ? Pe.get.bind(a, a) : Nn, ze = !Ke(Pe) && Ke(Pe.set) ? Pe.set.bind(a) : Nn, at = Bf({
        get: et,
        set: ze
      });
      Object.defineProperty(u, be, {
        enumerable: !0,
        configurable: !0,
        get: () => at.value,
        set: (ot) => at.value = ot
      });
    }
  if (S)
    for (const be in S)
      Hu(S[be], u, a, be);
  if (N) {
    const be = Ke(N) ? N.call(a) : N;
    Reflect.ownKeys(be).forEach((Pe) => {
      tf(Pe, be[Pe]);
    });
  }
  B && Ea(B, n, "c");
  function Ue(be, Pe) {
    Be(Pe) ? Pe.forEach((et) => be(et.bind(a))) : Pe && be(Pe.bind(a));
  }
  if (Ue(Ml, G), Ue(Po, re), Ue(Bl, se), Ue(Kl, he), Ue(jl, de), Ue(Fl, Ce), Ue(Gl, Ee), Ue(Ul, ie), Ue(Vl, oe), Ue(ql, ye), Ue(ua, pe), Ue($l, q), Be(it))
    if (it.length) {
      const be = n.exposed || (n.exposed = {});
      it.forEach((Pe) => {
        Object.defineProperty(be, Pe, {
          get: () => a[Pe],
          set: (et) => a[Pe] = et
        });
      });
    } else n.exposed || (n.exposed = {});
  je && n.render === Nn && (n.render = je), rt != null && (n.inheritAttrs = rt), De && (n.components = De), Ge && (n.directives = Ge), q && Vu(n);
}
function Ql(n, i, a = Nn) {
  Be(n) && (n = Rs(n));
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
      set: (y) => d.value = y
    }) : i[u] = d;
  }
}
function Ea(n, i, a) {
  Dn(
    Be(n) ? n.map((u) => u.bind(i.proxy)) : n.bind(i.proxy),
    i,
    a
  );
}
function Hu(n, i, a, u) {
  let l = u.includes(".") ? oc(a, u) : () => a[u];
  if (Pt(n)) {
    const d = i[n];
    Ke(d) && wo(l, d);
  } else if (Ke(n))
    wo(l, n.bind(a));
  else if (St(n))
    if (Be(n))
      n.forEach((d) => Hu(d, i, a, u));
    else {
      const d = Ke(n.handler) ? n.handler.bind(a) : i[n.handler];
      Ke(d) && wo(l, d, n);
    }
}
function Wu(n) {
  const i = n.type, { mixins: a, extends: u } = i, {
    mixins: l,
    optionsCache: d,
    config: { optionMergeStrategies: y }
  } = n.appContext, S = d.get(i);
  let N;
  return S ? N = S : !l.length && !a && !u ? N = i : (N = {}, l.length && l.forEach(
    (W) => Io(N, W, y, !0)
  ), Io(N, i, y)), St(i) && d.set(i, N), N;
}
function Io(n, i, a, u = !1) {
  const { mixins: l, extends: d } = i;
  d && Io(n, d, a, !0), l && l.forEach(
    (y) => Io(n, y, a, !0)
  );
  for (const y in i)
    if (!(u && y === "expose")) {
      const S = Xl[y] || a && a[y];
      n[y] = S ? S(n[y], i[y]) : i[y];
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
    return Bt(
      Ke(n) ? n.call(this, this) : n,
      Ke(i) ? i.call(this, this) : i
    );
  } : i : n;
}
function zl(n, i) {
  return Gi(Rs(n), Rs(i));
}
function Rs(n) {
  if (Be(n)) {
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
  return n ? Bt(/* @__PURE__ */ Object.create(null), n, i) : i;
}
function Ca(n, i) {
  return n ? Be(n) && Be(i) ? [.../* @__PURE__ */ new Set([...n, ...i])] : Bt(
    /* @__PURE__ */ Object.create(null),
    xa(n),
    xa(i ?? {})
  ) : i;
}
function Jl(n, i) {
  if (!n) return i;
  if (!i) return n;
  const a = Bt(/* @__PURE__ */ Object.create(null), n);
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
    Ke(u) || (u = Bt({}, u)), l != null && !St(l) && (l = null);
    const d = Yu(), y = /* @__PURE__ */ new WeakSet(), S = [];
    let N = !1;
    const W = d.app = {
      _uid: Zl++,
      _component: u,
      _props: l,
      _container: null,
      _context: d,
      _instance: null,
      version: Kf,
      get config() {
        return d.config;
      },
      set config(B) {
      },
      use(B, ...G) {
        return y.has(B) || (B && Ke(B.install) ? (y.add(B), B.install(W, ...G)) : Ke(B) && (y.add(B), B(W, ...G))), W;
      },
      mixin(B) {
        return d.mixins.includes(B) || d.mixins.push(B), W;
      },
      component(B, G) {
        return G ? (d.components[B] = G, W) : d.components[B];
      },
      directive(B, G) {
        return G ? (d.directives[B] = G, W) : d.directives[B];
      },
      mount(B, G, re) {
        if (!N) {
          const se = W._ceVNode || yr(u, l);
          return se.appContext = d, re === !0 ? re = "svg" : re === !1 && (re = void 0), n(se, B, re), N = !0, W._container = B, B.__vue_app__ = W, pa(se.component);
        }
      },
      onUnmount(B) {
        S.push(B);
      },
      unmount() {
        N && (Dn(
          S,
          W._instance,
          16
        ), n(null, W._container), delete W._container.__vue_app__);
      },
      provide(B, G) {
        return d.provides[B] = G, W;
      },
      runWithContext(B) {
        const G = si;
        si = W;
        try {
          return B();
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
      return a && Ke(i) ? i.call(u && u.proxy) : i;
  }
}
const Qu = {}, Xu = () => Object.create(Qu), zu = (n) => Object.getPrototypeOf(n) === Qu;
function nf(n, i, a, u = !1) {
  const l = {}, d = Xu();
  n.propsDefaults = /* @__PURE__ */ Object.create(null), Ju(n, i, l, d);
  for (const y in n.propsOptions[0])
    y in l || (l[y] = void 0);
  a ? n.props = u ? l : bl(l) : n.type.props ? n.props = l : n.props = d, n.attrs = d;
}
function rf(n, i, a, u) {
  const {
    props: l,
    attrs: d,
    vnode: { patchFlag: y }
  } = n, S = tt(l), [N] = n.propsOptions;
  let W = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (u || y > 0) && !(y & 16)
  ) {
    if (y & 8) {
      const B = n.vnode.dynamicProps;
      for (let G = 0; G < B.length; G++) {
        let re = B[G];
        if (Bo(n.emitsOptions, re))
          continue;
        const se = i[re];
        if (N)
          if (nt(d, re))
            se !== d[re] && (d[re] = se, W = !0);
          else {
            const he = vr(re);
            l[he] = ks(
              N,
              S,
              he,
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
    let B;
    for (const G in S)
      (!i || // for camelCase
      !nt(i, G) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((B = ti(G)) === G || !nt(i, B))) && (N ? a && // for camelCase
      (a[G] !== void 0 || // for kebab-case
      a[B] !== void 0) && (l[G] = ks(
        N,
        S,
        G,
        void 0,
        n,
        !0
      )) : delete l[G]);
    if (d !== S)
      for (const G in d)
        (!i || !nt(i, G)) && (delete d[G], W = !0);
  }
  W && sr(n.attrs, "set", "");
}
function Ju(n, i, a, u) {
  const [l, d] = n.propsOptions;
  let y = !1, S;
  if (i)
    for (let N in i) {
      if (Wi(N))
        continue;
      const W = i[N];
      let B;
      l && nt(l, B = vr(N)) ? !d || !d.includes(B) ? a[B] = W : (S || (S = {}))[B] = W : Bo(n.emitsOptions, N) || (!(N in u) || W !== u[N]) && (u[N] = W, y = !0);
    }
  if (d) {
    const N = tt(a), W = S || ft;
    for (let B = 0; B < d.length; B++) {
      const G = d[B];
      a[G] = ks(
        l,
        N,
        G,
        W[G],
        n,
        !nt(W, G)
      );
    }
  }
  return y;
}
function ks(n, i, a, u, l, d) {
  const y = n[a];
  if (y != null) {
    const S = nt(y, "default");
    if (S && u === void 0) {
      const N = y.default;
      if (y.type !== Function && !y.skipFactory && Ke(N)) {
        const { propsDefaults: W } = l;
        if (a in W)
          u = W[a];
        else {
          const B = co(l);
          u = W[a] = N.call(
            null,
            i
          ), B();
        }
      } else
        u = N;
      l.ce && l.ce._setProp(a, u);
    }
    y[
      0
      /* shouldCast */
    ] && (d && !S ? u = !1 : y[
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
  const d = n.props, y = {}, S = [];
  let N = !1;
  if (!Ke(n)) {
    const B = (G) => {
      N = !0;
      const [re, se] = Zu(G, i, !0);
      Bt(y, re), se && S.push(...se);
    };
    !a && i.mixins.length && i.mixins.forEach(B), n.extends && B(n.extends), n.mixins && n.mixins.forEach(B);
  }
  if (!d && !N)
    return St(n) && u.set(n, ii), ii;
  if (Be(d))
    for (let B = 0; B < d.length; B++) {
      const G = vr(d[B]);
      Aa(G) && (y[G] = ft);
    }
  else if (d)
    for (const B in d) {
      const G = vr(B);
      if (Aa(G)) {
        const re = d[B], se = y[G] = Be(re) || Ke(re) ? { type: re } : Bt({}, re), he = se.type;
        let de = !1, Ce = !0;
        if (Be(he))
          for (let ae = 0; ae < he.length; ++ae) {
            const ye = he[ae], ke = Ke(ye) && ye.name;
            if (ke === "Boolean") {
              de = !0;
              break;
            } else ke === "String" && (Ce = !1);
          }
        else
          de = Ke(he) && he.name === "Boolean";
        se[
          0
          /* shouldCast */
        ] = de, se[
          1
          /* shouldCastTrue */
        ] = Ce, (de || nt(se, "default")) && S.push(G);
      }
    }
  const W = [y, S];
  return St(n) && u.set(n, W), W;
}
function Aa(n) {
  return n[0] !== "$" && !Wi(n);
}
const ca = (n) => n[0] === "_" || n === "$stable", la = (n) => Be(n) ? n.map(In) : [In(n)], sf = (n, i, a) => {
  if (i._n)
    return i;
  const u = Dl((...l) => la(i(...l)), a);
  return u._c = !1, u;
}, ec = (n, i, a) => {
  const u = n._ctx;
  for (const l in n) {
    if (ca(l)) continue;
    const d = n[l];
    if (Ke(d))
      i[l] = sf(l, d, u);
    else if (d != null) {
      const y = la(d);
      i[l] = () => y;
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
  let d = !0, y = ft;
  if (u.shapeFlag & 32) {
    const S = i._;
    S ? a && S === 1 ? d = !1 : nc(l, i, a) : (d = !i.$stable, ec(i, l)), y = i;
  } else i && (tc(n, i), y = { default: 1 });
  if (d)
    for (const S in l)
      !ca(S) && y[S] == null && delete l[S];
}, dn = xf;
function cf(n) {
  return lf(n);
}
function lf(n, i) {
  const a = Fo();
  a.__VUE__ = !0;
  const {
    insert: u,
    remove: l,
    patchProp: d,
    createElement: y,
    createText: S,
    createComment: N,
    setText: W,
    setElementText: B,
    parentNode: G,
    nextSibling: re,
    setScopeId: se = Nn,
    insertStaticContent: he
  } = n, de = (A, L, Z, I = null, k = null, F = null, V = void 0, M = null, te = !!L.dynamicChildren) => {
    if (A === L)
      return;
    A && !Ui(A, L) && (I = P(A), ot(A, k, F, !0), A = null), L.patchFlag === -2 && (te = !1, L.dynamicChildren = null);
    const { type: Q, ref: me, shapeFlag: ce } = L;
    switch (Q) {
      case Ko:
        Ce(A, L, Z, I);
        break;
      case ai:
        ae(A, L, Z, I);
        break;
      case ws:
        A == null && ye(L, Z, I, V);
        break;
      case or:
        De(
          A,
          L,
          Z,
          I,
          k,
          F,
          V,
          M,
          te
        );
        break;
      default:
        ce & 1 ? je(
          A,
          L,
          Z,
          I,
          k,
          F,
          V,
          M,
          te
        ) : ce & 6 ? Ge(
          A,
          L,
          Z,
          I,
          k,
          F,
          V,
          M,
          te
        ) : (ce & 64 || ce & 128) && Q.process(
          A,
          L,
          Z,
          I,
          k,
          F,
          V,
          M,
          te,
          $
        );
    }
    me != null && k ? Ji(me, A && A.ref, F, L || A, !L) : me == null && A && A.ref != null && Ji(A.ref, null, F, A, !0);
  }, Ce = (A, L, Z, I) => {
    if (A == null)
      u(
        L.el = S(L.children),
        Z,
        I
      );
    else {
      const k = L.el = A.el;
      L.children !== A.children && W(k, L.children);
    }
  }, ae = (A, L, Z, I) => {
    A == null ? u(
      L.el = N(L.children || ""),
      Z,
      I
    ) : L.el = A.el;
  }, ye = (A, L, Z, I) => {
    [A.el, A.anchor] = he(
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
  }, je = (A, L, Z, I, k, F, V, M, te) => {
    L.type === "svg" ? V = "svg" : L.type === "math" && (V = "mathml"), A == null ? ie(
      L,
      Z,
      I,
      k,
      F,
      V,
      M,
      te
    ) : q(
      A,
      L,
      k,
      F,
      V,
      M,
      te
    );
  }, ie = (A, L, Z, I, k, F, V, M) => {
    let te, Q;
    const { props: me, shapeFlag: ce, transition: xe, dirs: Te } = A;
    if (te = A.el = y(
      A.type,
      F,
      me && me.is,
      me
    ), ce & 8 ? B(te, A.children) : ce & 16 && Ee(
      A.children,
      te,
      null,
      I,
      k,
      bs(A, F),
      V,
      M
    ), Te && Qr(A, null, I, "created"), oe(te, A, A.scopeId, V, I), me) {
      for (const Me in me)
        Me !== "value" && !Wi(Me) && d(te, Me, null, me[Me], F, I);
      "value" in me && d(te, "value", null, me.value, F), (Q = me.onVnodeBeforeMount) && An(Q, I, A);
    }
    Te && Qr(A, null, I, "beforeMount");
    const Ie = ff(k, xe);
    Ie && xe.beforeEnter(te), u(te, L, Z), ((Q = me && me.onVnodeMounted) || Ie || Te) && dn(() => {
      Q && An(Q, I, A), Ie && xe.enter(te), Te && Qr(A, null, I, "mounted");
    }, k);
  }, oe = (A, L, Z, I, k) => {
    if (Z && se(A, Z), I)
      for (let F = 0; F < I.length; F++)
        se(A, I[F]);
    if (k) {
      let F = k.subTree;
      if (L === F || ac(F.type) && (F.ssContent === L || F.ssFallback === L)) {
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
  }, Ee = (A, L, Z, I, k, F, V, M, te = 0) => {
    for (let Q = te; Q < A.length; Q++) {
      const me = A[Q] = M ? fr(A[Q]) : In(A[Q]);
      de(
        null,
        me,
        L,
        Z,
        I,
        k,
        F,
        V,
        M
      );
    }
  }, q = (A, L, Z, I, k, F, V) => {
    const M = L.el = A.el;
    let { patchFlag: te, dynamicChildren: Q, dirs: me } = L;
    te |= A.patchFlag & 16;
    const ce = A.props || ft, xe = L.props || ft;
    let Te;
    if (Z && Xr(Z, !1), (Te = xe.onVnodeBeforeUpdate) && An(Te, Z, L, A), me && Qr(L, A, Z, "beforeUpdate"), Z && Xr(Z, !0), (ce.innerHTML && xe.innerHTML == null || ce.textContent && xe.textContent == null) && B(M, ""), Q ? it(
      A.dynamicChildren,
      Q,
      M,
      Z,
      I,
      bs(L, k),
      F
    ) : V || Pe(
      A,
      L,
      M,
      null,
      Z,
      I,
      bs(L, k),
      F,
      !1
    ), te > 0) {
      if (te & 16)
        rt(M, ce, xe, Z, k);
      else if (te & 2 && ce.class !== xe.class && d(M, "class", null, xe.class, k), te & 4 && d(M, "style", ce.style, xe.style, k), te & 8) {
        const Ie = L.dynamicProps;
        for (let Me = 0; Me < Ie.length; Me++) {
          const qe = Ie[Me], ut = ce[qe], mt = xe[qe];
          (mt !== ut || qe === "value") && d(M, qe, ut, mt, k, Z);
        }
      }
      te & 1 && A.children !== L.children && B(M, L.children);
    } else !V && Q == null && rt(M, ce, xe, Z, k);
    ((Te = xe.onVnodeUpdated) || me) && dn(() => {
      Te && An(Te, Z, L, A), me && Qr(L, A, Z, "updated");
    }, I);
  }, it = (A, L, Z, I, k, F, V) => {
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
      de(
        te,
        Q,
        me,
        null,
        I,
        k,
        F,
        V,
        !0
      );
    }
  }, rt = (A, L, Z, I, k) => {
    if (L !== Z) {
      if (L !== ft)
        for (const F in L)
          !Wi(F) && !(F in Z) && d(
            A,
            F,
            L[F],
            null,
            k,
            I
          );
      for (const F in Z) {
        if (Wi(F)) continue;
        const V = Z[F], M = L[F];
        V !== M && F !== "value" && d(A, F, M, V, k, I);
      }
      "value" in Z && d(A, "value", L.value, Z.value, k);
    }
  }, De = (A, L, Z, I, k, F, V, M, te) => {
    const Q = L.el = A ? A.el : S(""), me = L.anchor = A ? A.anchor : S("");
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
      F,
      V,
      M,
      te
    )) : ce > 0 && ce & 64 && xe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    A.dynamicChildren ? (it(
      A.dynamicChildren,
      xe,
      Z,
      k,
      F,
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
      F,
      V,
      M,
      te
    );
  }, Ge = (A, L, Z, I, k, F, V, M, te) => {
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
      F,
      V,
      te
    ) : wt(A, L, te);
  }, At = (A, L, Z, I, k, F, V) => {
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
        F,
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
  }, Ue = (A, L, Z, I, k, F, V) => {
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
        let qe = ce, ut;
        Xr(A, !1), ce ? (ce.el = Me.el, be(A, ce, V)) : ce = Me, xe && hs(xe), (ut = ce.props && ce.props.onVnodeBeforeUpdate) && An(ut, Ie, ce, Me), Xr(A, !0);
        const mt = Ia(A), _t = A.subTree;
        A.subTree = mt, de(
          _t,
          mt,
          // parent may have changed if it's in a teleport
          G(_t.el),
          // anchor may have changed if it's in a fragment
          P(_t),
          A,
          k,
          F
        ), ce.el = mt.el, qe === null && Sf(A, mt.el), Te && dn(Te, k), (ut = ce.props && ce.props.onVnodeUpdated) && dn(
          () => An(ut, Ie, ce, Me),
          k
        );
      } else {
        let ce;
        const { el: xe, props: Te } = L, { bm: Ie, m: Me, parent: qe, root: ut, type: mt } = A, _t = Zi(L);
        Xr(A, !1), Ie && hs(Ie), !_t && (ce = Te && Te.onVnodeBeforeMount) && An(ce, qe, L), Xr(A, !0);
        {
          ut.ce && // @ts-expect-error _def is private
          ut.ce._def.shadowRoot !== !1 && ut.ce._injectChildStyle(mt);
          const ct = A.subTree = Ia(A);
          de(
            null,
            ct,
            Z,
            I,
            A,
            k,
            F
          ), L.el = ct.el;
        }
        if (Me && dn(Me, k), !_t && (ce = Te && Te.onVnodeMounted)) {
          const ct = L;
          dn(
            () => An(ce, qe, ct),
            k
          );
        }
        (L.shapeFlag & 256 || qe && Zi(qe.vnode) && qe.vnode.shapeFlag & 256) && A.a && dn(A.a, k), A.isMounted = !0, L = Z = I = null;
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
  }, Pe = (A, L, Z, I, k, F, V, M, te = !1) => {
    const Q = A && A.children, me = A ? A.shapeFlag : 0, ce = L.children, { patchFlag: xe, shapeFlag: Te } = L;
    if (xe > 0) {
      if (xe & 128) {
        ze(
          Q,
          ce,
          Z,
          I,
          k,
          F,
          V,
          M,
          te
        );
        return;
      } else if (xe & 256) {
        et(
          Q,
          ce,
          Z,
          I,
          k,
          F,
          V,
          M,
          te
        );
        return;
      }
    }
    Te & 8 ? (me & 16 && pt(Q, k, F), ce !== Q && B(Z, ce)) : me & 16 ? Te & 16 ? ze(
      Q,
      ce,
      Z,
      I,
      k,
      F,
      V,
      M,
      te
    ) : pt(Q, k, F, !0) : (me & 8 && B(Z, ""), Te & 16 && Ee(
      ce,
      Z,
      I,
      k,
      F,
      V,
      M,
      te
    ));
  }, et = (A, L, Z, I, k, F, V, M, te) => {
    A = A || ii, L = L || ii;
    const Q = A.length, me = L.length, ce = Math.min(Q, me);
    let xe;
    for (xe = 0; xe < ce; xe++) {
      const Te = L[xe] = te ? fr(L[xe]) : In(L[xe]);
      de(
        A[xe],
        Te,
        Z,
        null,
        k,
        F,
        V,
        M,
        te
      );
    }
    Q > me ? pt(
      A,
      k,
      F,
      !0,
      !1,
      ce
    ) : Ee(
      L,
      Z,
      I,
      k,
      F,
      V,
      M,
      te,
      ce
    );
  }, ze = (A, L, Z, I, k, F, V, M, te) => {
    let Q = 0;
    const me = L.length;
    let ce = A.length - 1, xe = me - 1;
    for (; Q <= ce && Q <= xe; ) {
      const Te = A[Q], Ie = L[Q] = te ? fr(L[Q]) : In(L[Q]);
      if (Ui(Te, Ie))
        de(
          Te,
          Ie,
          Z,
          null,
          k,
          F,
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
        de(
          Te,
          Ie,
          Z,
          null,
          k,
          F,
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
          de(
            null,
            L[Q] = te ? fr(L[Q]) : In(L[Q]),
            Z,
            Ie,
            k,
            F,
            V,
            M,
            te
          ), Q++;
      }
    } else if (Q > xe)
      for (; Q <= ce; )
        ot(A[Q], k, F, !0), Q++;
    else {
      const Te = Q, Ie = Q, Me = /* @__PURE__ */ new Map();
      for (Q = Ie; Q <= xe; Q++) {
        const Je = L[Q] = te ? fr(L[Q]) : In(L[Q]);
        Je.key != null && Me.set(Je.key, Q);
      }
      let qe, ut = 0;
      const mt = xe - Ie + 1;
      let _t = !1, ct = 0;
      const $t = new Array(mt);
      for (Q = 0; Q < mt; Q++) $t[Q] = 0;
      for (Q = Te; Q <= ce; Q++) {
        const Je = A[Q];
        if (ut >= mt) {
          ot(Je, k, F, !0);
          continue;
        }
        let ne;
        if (Je.key != null)
          ne = Me.get(Je.key);
        else
          for (qe = Ie; qe <= xe; qe++)
            if ($t[qe - Ie] === 0 && Ui(Je, L[qe])) {
              ne = qe;
              break;
            }
        ne === void 0 ? ot(Je, k, F, !0) : ($t[ne - Ie] = Q + 1, ne >= ct ? ct = ne : _t = !0, de(
          Je,
          L[ne],
          Z,
          null,
          k,
          F,
          V,
          M,
          te
        ), ut++);
      }
      const Cn = _t ? df($t) : ii;
      for (qe = Cn.length - 1, Q = mt - 1; Q >= 0; Q--) {
        const Je = Ie + Q, ne = L[Je], tn = Je + 1 < me ? L[Je + 1].el : I;
        $t[Q] === 0 ? de(
          null,
          ne,
          Z,
          tn,
          k,
          F,
          V,
          M,
          te
        ) : _t && (qe < 0 || Q !== Cn[qe] ? at(ne, Z, tn, 2) : qe--);
      }
    }
  }, at = (A, L, Z, I, k = null) => {
    const { el: F, type: V, transition: M, children: te, shapeFlag: Q } = A;
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
      u(F, L, Z);
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
        M.beforeEnter(F), u(F, L, Z), dn(() => M.enter(F), k);
      else {
        const { leave: ce, delayLeave: xe, afterLeave: Te } = M, Ie = () => {
          A.ctx.isUnmounted ? l(F) : u(F, L, Z);
        }, Me = () => {
          ce(F, () => {
            Ie(), Te && Te();
          });
        };
        xe ? xe(F, Ie, Me) : Me();
      }
    else
      u(F, L, Z);
  }, ot = (A, L, Z, I = !1, k = !1) => {
    const {
      type: F,
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
    let qe;
    if (Me && (qe = V && V.onVnodeBeforeUnmount) && An(qe, L, A), me & 6)
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
      (F !== or || ce > 0 && ce & 64) ? pt(
        Q,
        L,
        Z,
        !1,
        !0
      ) : (F === or && ce & 384 || !k && me & 16) && pt(te, L, Z), I && ht(A);
    }
    (Me && (qe = V && V.onVnodeUnmounted) || Ie) && dn(() => {
      qe && An(qe, L, A), Ie && Qr(A, null, L, "unmounted");
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
    const F = () => {
      l(Z), k && !k.persisted && k.afterLeave && k.afterLeave();
    };
    if (A.shapeFlag & 1 && k && !k.persisted) {
      const { leave: V, delayLeave: M } = k, te = () => V(Z, F);
      M ? M(A.el, F, te) : te();
    } else
      F();
  }, rn = (A, L) => {
    let Z;
    for (; A !== L; )
      Z = re(A), l(A), A = Z;
    l(L);
  }, It = (A, L, Z) => {
    const {
      bum: I,
      scope: k,
      job: F,
      subTree: V,
      um: M,
      m: te,
      a: Q,
      parent: me,
      slots: { __: ce }
    } = A;
    Pa(te), Pa(Q), I && hs(I), me && Be(ce) && ce.forEach((xe) => {
      me.renderCache[xe] = void 0;
    }), k.stop(), F && (F.flags |= 8, ot(V, A, L, Z)), M && dn(M, L), dn(() => {
      A.isUnmounted = !0;
    }, L), L && L.pendingBranch && !L.isUnmounted && A.asyncDep && !A.asyncResolved && A.suspenseId === L.pendingId && (L.deps--, L.deps === 0 && L.resolve());
  }, pt = (A, L, Z, I = !1, k = !1, F = 0) => {
    for (let V = F; V < A.length; V++)
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
  const j = (A, L, Z) => {
    A == null ? L._vnode && ot(L._vnode, null, null, !0) : de(
      L._vnode || null,
      A,
      L,
      null,
      null,
      null,
      Z
    ), L._vnode = A, w || (w = !0, Sa(), Bu(), w = !1);
  }, $ = {
    p: de,
    um: ot,
    m: at,
    r: ht,
    mt: At,
    mc: Ee,
    pc: Pe,
    pbc: it,
    n: P,
    o: n
  };
  return {
    render: j,
    hydrate: void 0,
    createApp: ef(j)
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
  if (Be(u) && Be(l))
    for (let d = 0; d < u.length; d++) {
      const y = u[d];
      let S = l[d];
      S.shapeFlag & 1 && !S.dynamicChildren && ((S.patchFlag <= 0 || S.patchFlag === 32) && (S = l[d] = fr(l[d]), S.el = y.el), !a && S.patchFlag !== -2 && rc(y, S)), S.type === Ko && (S.el = y.el), S.type === ai && !S.el && (S.el = y.el);
    }
}
function df(n) {
  const i = n.slice(), a = [0];
  let u, l, d, y, S;
  const N = n.length;
  for (u = 0; u < N; u++) {
    const W = n[u];
    if (W !== 0) {
      if (l = a[a.length - 1], n[l] < W) {
        i[u] = l, a.push(u);
        continue;
      }
      for (d = 0, y = a.length - 1; d < y; )
        S = d + y >> 1, n[a[S]] < W ? d = S + 1 : y = S;
      W < n[a[d]] && (d > 0 && (i[u] = a[d - 1]), a[d] = u);
    }
  }
  for (d = a.length, y = a[d - 1]; d-- > 0; )
    a[d] = y, y = i[y];
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
  const { immediate: u, deep: l, flush: d, once: y } = a, S = Bt({}, a), N = i && u || !i && d !== "post";
  let W;
  if (so) {
    if (d === "sync") {
      const se = hf();
      W = se.__watcherHandles || (se.__watcherHandles = []);
    } else if (!N) {
      const se = () => {
      };
      return se.stop = Nn, se.resume = Nn, se.pause = Nn, se;
    }
  }
  const B = en;
  S.call = (se, he, de) => Dn(se, B, he, de);
  let G = !1;
  d === "post" ? S.scheduler = (se) => {
    dn(se, B && B.suspense);
  } : d !== "sync" && (G = !0, S.scheduler = (se, he) => {
    he ? se() : sa(se);
  }), S.augmentJob = (se) => {
    i && (se.flags |= 4), G && (se.flags |= 2, B && (se.id = B.uid, se.i = B));
  };
  const re = Al(n, i, S);
  return so && (W ? W.push(re) : N && re()), re;
}
function yf(n, i, a) {
  const u = this.proxy, l = Pt(n) ? n.includes(".") ? oc(u, n) : () => u[n] : n.bind(u, u);
  let d;
  Ke(i) ? d = i : (d = i.handler, a = i);
  const y = co(this), S = fa(l, d.bind(u), a);
  return y(), S;
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
  const d = i.startsWith("update:"), y = d && vf(u, i.slice(7));
  y && (y.trim && (l = a.map((B) => Pt(B) ? B.trim() : B)), y.number && (l = a.map(Hc)));
  let S, N = u[S = ps(i)] || // also try camelCase event handler (#2249)
  u[S = ps(vr(i))];
  !N && d && (N = u[S = ps(ti(i))]), N && Dn(
    N,
    n,
    6,
    l
  );
  const W = u[S + "Once"];
  if (W) {
    if (!n.emitted)
      n.emitted = {};
    else if (n.emitted[S])
      return;
    n.emitted[S] = !0, Dn(
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
  let y = {}, S = !1;
  if (!Ke(n)) {
    const N = (W) => {
      const B = sc(W, i, !0);
      B && (S = !0, Bt(y, B));
    };
    !a && i.mixins.length && i.mixins.forEach(N), n.extends && N(n.extends), n.mixins && n.mixins.forEach(N);
  }
  return !d && !S ? (St(n) && u.set(n, null), null) : (Be(d) ? d.forEach((N) => y[N] = null) : Bt(y, d), St(n) && u.set(n, y), y);
}
function Bo(n, i) {
  return !n || !Ro(i) ? !1 : (i = i.slice(2).replace(/Once$/, ""), nt(n, i[0].toLowerCase() + i.slice(1)) || nt(n, ti(i)) || nt(n, i));
}
function Ia(n) {
  const {
    type: i,
    vnode: a,
    proxy: u,
    withProxy: l,
    propsOptions: [d],
    slots: y,
    attrs: S,
    emit: N,
    render: W,
    renderCache: B,
    props: G,
    data: re,
    setupState: se,
    ctx: he,
    inheritAttrs: de
  } = n, Ce = Ao(n);
  let ae, ye;
  try {
    if (a.shapeFlag & 4) {
      const pe = l || u, je = pe;
      ae = In(
        W.call(
          je,
          pe,
          B,
          G,
          se,
          re,
          he
        )
      ), ye = S;
    } else {
      const pe = i;
      ae = In(
        pe.length > 1 ? pe(
          G,
          { attrs: S, slots: y, emit: N }
        ) : pe(
          G,
          null
        )
      ), ye = i.props ? S : bf(S);
    }
  } catch (pe) {
    to.length = 0, Lo(pe, n, 1), ae = yr(ai);
  }
  let ke = ae;
  if (ye && de !== !1) {
    const pe = Object.keys(ye), { shapeFlag: je } = ke;
    pe.length && je & 7 && (d && pe.some(Hs) && (ye = wf(
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
  const { props: u, children: l, component: d } = n, { props: y, children: S, patchFlag: N } = i, W = d.emitsOptions;
  if (i.dirs || i.transition)
    return !0;
  if (a && N >= 0) {
    if (N & 1024)
      return !0;
    if (N & 16)
      return u ? Oa(u, y, W) : !!y;
    if (N & 8) {
      const B = i.dynamicProps;
      for (let G = 0; G < B.length; G++) {
        const re = B[G];
        if (y[re] !== u[re] && !Bo(W, re))
          return !0;
      }
    }
  } else
    return (l || S) && (!S || !S.$stable) ? !0 : u === y ? !1 : u ? y ? Oa(u, y, W) : !0 : !!y;
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
  i && i.pendingBranch ? Be(n) ? i.effects.push(...n) : i.effects.push(n) : Nl(n);
}
const or = Symbol.for("v-fgt"), Ko = Symbol.for("v-txt"), ai = Symbol.for("v-cmt"), ws = Symbol.for("v-stc"), to = [];
let pn = null;
function uc(n = !1) {
  to.push(pn = n ? null : []);
}
function Ef() {
  to.pop(), pn = to[to.length - 1] || null;
}
let oo = 1;
function Na(n, i = !1) {
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
}) => (typeof n == "number" && (n = "" + n), n != null ? Pt(n) || Mt(n) || Ke(n) ? { i: On, r: n, k: i, f: !!a } : n : null);
function dc(n, i = null, a = null, u = 0, l = null, d = n === or ? 0 : 1, y = !1, S = !1) {
  const N = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n,
    props: i,
    key: i && fc(i),
    ref: i && _o(i),
    scopeId: qu,
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
  return S ? (da(N, a), d & 128 && n.normalize(N)) : a && (N.shapeFlag |= Pt(a) ? 8 : 16), oo > 0 && // avoid a block node from tracking itself
  !y && // has current parent block
  pn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (N.patchFlag > 0 || d & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  N.patchFlag !== 32 && pn.push(N), N;
}
const yr = Af;
function Af(n, i = null, a = null, u = 0, l = null, d = !1) {
  if ((!n || n === Hl) && (n = ai), lc(n)) {
    const S = ui(
      n,
      i,
      !0
      /* mergeRef: true */
    );
    return a && da(S, a), oo > 0 && !d && pn && (S.shapeFlag & 6 ? pn[pn.indexOf(n)] = S : pn.push(S)), S.patchFlag = -2, S;
  }
  if (Mf(n) && (n = n.__vccOpts), i) {
    i = Pf(i);
    let { class: S, style: N } = i;
    S && !Pt(S) && (i.class = Xs(S)), St(N) && (oa(N) && !Be(N) && (N = Bt({}, N)), i.style = Qs(N));
  }
  const y = Pt(n) ? 1 : ac(n) ? 128 : kl(n) ? 64 : St(n) ? 4 : Ke(n) ? 2 : 0;
  return dc(
    n,
    i,
    a,
    u,
    l,
    y,
    d,
    !0
  );
}
function Pf(n) {
  return n ? oa(n) || zu(n) ? Bt({}, n) : n : null;
}
function ui(n, i, a = !1, u = !1) {
  const { props: l, ref: d, patchFlag: y, children: S, transition: N } = n, W = i ? Of(l || {}, i) : l, B = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n.type,
    props: W,
    key: W && fc(W),
    ref: i && i.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      a && d ? Be(d) ? d.concat(_o(i)) : [d, _o(i)] : _o(i)
    ) : d,
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
    patchFlag: i && n.type !== or ? y === -1 ? 16 : y | 16 : y,
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
  return N && u && aa(
    B,
    N.clone(B)
  ), B;
}
function If(n = " ", i = 0) {
  return yr(Ko, null, n, i);
}
function In(n) {
  return n == null || typeof n == "boolean" ? yr(ai) : Be(n) ? yr(
    or,
    null,
    // #3666, avoid reference pollution when reusing vnode
    n.slice()
  ) : lc(n) ? fr(n) : yr(Ko, null, String(n));
}
function fr(n) {
  return n.el === null && n.patchFlag !== -1 || n.memo ? n : ui(n);
}
function da(n, i) {
  let a = 0;
  const { shapeFlag: u } = n;
  if (i == null)
    i = null;
  else if (Be(i))
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
  else Ke(i) ? (i = { default: i, _ctx: On }, a = 32) : (i = String(i), u & 64 ? (a = 16, i = [If(i)]) : a = 8);
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
        const d = i[l], y = u[l];
        y && d !== y && !(Be(d) && d.includes(y)) && (i[l] = d ? [].concat(d, y) : y);
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
const Nf = Yu();
let Df = 0;
function Rf(n, i, a) {
  const u = n.type, l = (i ? i.appContext : n.appContext) || Nf, d = {
    uid: Df++,
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
let en = null, Oo, js;
{
  const n = Fo(), i = (a, u) => {
    let l;
    return (l = n[a]) || (l = n[a] = []), l.push(u), (d) => {
      l.length > 1 ? l.forEach((y) => y(d)) : l[0](d);
    };
  };
  Oo = i(
    "__VUE_INSTANCE_SETTERS__",
    (a) => en = a
  ), js = i(
    "__VUE_SSR_SETTERS__",
    (a) => so = a
  );
}
const co = (n) => {
  const i = en;
  return Oo(n), n.scope.on(), () => {
    n.scope.off(), Oo(i);
  };
}, Da = () => {
  en && en.scope.off(), Oo(null);
};
function pc(n) {
  return n.vnode.shapeFlag & 4;
}
let so = !1;
function kf(n, i = !1, a = !1) {
  i && js(i);
  const { props: u, children: l } = n.vnode, d = pc(n);
  nf(n, u, d, i), af(n, l, a || i);
  const y = d ? jf(n, i) : void 0;
  return i && js(!1), y;
}
function jf(n, i) {
  const a = n.type;
  n.accessCache = /* @__PURE__ */ Object.create(null), n.proxy = new Proxy(n.ctx, Wl);
  const { setup: u } = a;
  if (u) {
    ar();
    const l = n.setupContext = u.length > 1 ? Lf(n) : null, d = co(n), y = uo(
      u,
      n,
      0,
      [
        n.props,
        l
      ]
    ), S = vu(y);
    if (ur(), d(), (S || n.sp) && !Zi(n) && Vu(n), S) {
      if (y.then(Da, Da), i)
        return y.then((N) => {
          Ra(n, N);
        }).catch((N) => {
          Lo(N, n, 0);
        });
      n.asyncDep = y;
    } else
      Ra(n, y);
  } else
    hc(n);
}
function Ra(n, i, a) {
  Ke(i) ? n.type.__ssrInlineRender ? n.ssrRender = i : n.render = i : St(i) && (n.setupState = Fu(i)), hc(n);
}
function hc(n, i, a) {
  const u = n.type;
  n.render || (n.render = u.render || Nn);
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
const Ff = {
  get(n, i) {
    return Lt(n, "get", ""), n[i];
  }
};
function Lf(n) {
  const i = (a) => {
    n.exposed = a || {};
  };
  return {
    attrs: new Proxy(n.attrs, Ff),
    slots: n.slots,
    emit: n.emit,
    expose: i
  };
}
function pa(n) {
  return n.exposed ? n.exposeProxy || (n.exposeProxy = new Proxy(Fu(wl(n.exposed)), {
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
  return Ke(n) && "__vccOpts" in n;
}
const Bf = (n, i) => Tl(n, i, so), Kf = "3.5.17";
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Fs;
const ka = typeof window < "u" && window.trustedTypes;
if (ka)
  try {
    Fs = /* @__PURE__ */ ka.createPolicy("vue", {
      createHTML: (n) => n
    });
  } catch {
  }
const mc = Fs ? (n) => Fs.createHTML(n) : (n) => n, qf = "http://www.w3.org/2000/svg", $f = "http://www.w3.org/1998/Math/MathML", ir = typeof document < "u" ? document : null, ja = ir && /* @__PURE__ */ ir.createElement("template"), Vf = {
  insert: (n, i, a) => {
    i.insertBefore(n, a || null);
  },
  remove: (n) => {
    const i = n.parentNode;
    i && i.removeChild(n);
  },
  createElement: (n, i, a, u) => {
    const l = i === "svg" ? ir.createElementNS(qf, n) : i === "mathml" ? ir.createElementNS($f, n) : a ? ir.createElement(n, { is: a }) : ir.createElement(n);
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
    const y = a ? a.previousSibling : i.lastChild;
    if (l && (l === d || l.nextSibling))
      for (; i.insertBefore(l.cloneNode(!0), a), !(l === d || !(l = l.nextSibling)); )
        ;
    else {
      ja.innerHTML = mc(
        u === "svg" ? `<svg>${n}</svg>` : u === "mathml" ? `<math>${n}</math>` : n
      );
      const S = ja.content;
      if (u === "svg" || u === "mathml") {
        const N = S.firstChild;
        for (; N.firstChild; )
          S.appendChild(N.firstChild);
        S.removeChild(N);
      }
      i.insertBefore(S, a);
    }
    return [
      // first
      y ? y.nextSibling : i.firstChild,
      // last
      a ? a.previousSibling : i.lastChild
    ];
  }
}, Uf = Symbol("_vtc");
function Gf(n, i, a) {
  const u = n[Uf];
  u && (i = (i ? [i, ...u] : [...u]).join(" ")), i == null ? n.removeAttribute("class") : a ? n.setAttribute("class", i) : n.className = i;
}
const Fa = Symbol("_vod"), Hf = Symbol("_vsh"), Wf = Symbol(""), Yf = /(^|;)\s*display\s*:/;
function Qf(n, i, a) {
  const u = n.style, l = Pt(a);
  let d = !1;
  if (a && !l) {
    if (i)
      if (Pt(i))
        for (const y of i.split(";")) {
          const S = y.slice(0, y.indexOf(":")).trim();
          a[S] == null && So(u, S, "");
        }
      else
        for (const y in i)
          a[y] == null && So(u, y, "");
    for (const y in a)
      y === "display" && (d = !0), So(u, y, a[y]);
  } else if (l) {
    if (i !== a) {
      const y = u[Wf];
      y && (a += ";" + y), u.cssText = a, d = Yf.test(a);
    }
  } else i && n.removeAttribute("style");
  Fa in n && (n[Fa] = d ? u.display : "", n[Hf] && (u.display = "none"));
}
const La = /\s*!important$/;
function So(n, i, a) {
  if (Be(a))
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
const Ba = "http://www.w3.org/1999/xlink";
function Ka(n, i, a, u, l, d = Jc(i)) {
  u && i.startsWith("xlink:") ? a == null ? n.removeAttributeNS(Ba, i.slice(6, i.length)) : n.setAttributeNS(Ba, i, a) : a == null || d && !bu(a) ? n.removeAttribute(i) : n.setAttribute(
    i,
    d ? "" : ci(a) ? String(a) : a
  );
}
function qa(n, i, a, u, l) {
  if (i === "innerHTML" || i === "textContent") {
    a != null && (n[i] = i === "innerHTML" ? mc(a) : a);
    return;
  }
  const d = n.tagName;
  if (i === "value" && d !== "PROGRESS" && // custom elements may use _value internally
  !d.includes("-")) {
    const S = d === "OPTION" ? n.getAttribute("value") || "" : n.value, N = a == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      n.type === "checkbox" ? "on" : ""
    ) : String(a);
    (S !== N || !("_value" in n)) && (n.value = N), a == null && n.removeAttribute(i), n._value = a;
    return;
  }
  let y = !1;
  if (a === "" || a == null) {
    const S = typeof n[i];
    S === "boolean" ? a = bu(a) : a == null && S === "string" ? (a = "", y = !0) : S === "number" && (a = 0, y = !0);
  }
  try {
    n[i] = a;
  } catch {
  }
  y && n.removeAttribute(l || i);
}
function zf(n, i, a, u) {
  n.addEventListener(i, a, u);
}
function Jf(n, i, a, u) {
  n.removeEventListener(i, a, u);
}
const $a = Symbol("_vei");
function Zf(n, i, a, u, l = null) {
  const d = n[$a] || (n[$a] = {}), y = d[i];
  if (u && y)
    y.value = u;
  else {
    const [S, N] = ed(i);
    if (u) {
      const W = d[i] = rd(
        u,
        l
      );
      zf(n, S, W, N);
    } else y && (Jf(n, S, y, N), d[i] = void 0);
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
    Dn(
      id(u, a.value),
      i,
      5,
      [u]
    );
  };
  return a.value = n, a.attached = nd(), a;
}
function id(n, i) {
  if (Be(i)) {
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
  const y = l === "svg";
  i === "class" ? Gf(n, u, y) : i === "style" ? Qf(n, a, u) : Ro(i) ? Hs(i) || Zf(n, i, a, u, d) : (i[0] === "." ? (i = i.slice(1), !0) : i[0] === "^" ? (i = i.slice(1), !1) : sd(n, i, u, y)) ? (qa(n, i, u), !n.tagName.includes("-") && (i === "value" || i === "checked" || i === "selected") && Ka(n, i, u, y, d, i !== "value")) : /* #11081 force set props for possible async custom element */ n._isVueCE && (/[A-Z]/.test(i) || !Pt(u)) ? qa(n, vr(i), u, d, i) : (i === "true-value" ? n._trueValue = u : i === "false-value" && (n._falseValue = u), Ka(n, i, u, y));
};
function sd(n, i, a, u) {
  if (u)
    return !!(i === "innerHTML" || i === "textContent" || i in n && Ua(i) && Ke(a));
  if (i === "spellcheck" || i === "draggable" || i === "translate" || i === "autocorrect" || i === "form" || i === "list" && n.tagName === "INPUT" || i === "type" && n.tagName === "TEXTAREA")
    return !1;
  if (i === "width" || i === "height") {
    const l = n.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Ua(i) && Pt(a) ? !1 : i in n;
}
const ad = /* @__PURE__ */ Bt({ patchProp: od }, Vf);
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
    !Ke(d) && !d.render && !d.template && (d.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const y = a(l, !1, ld(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), y;
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
      }, i.SAXParser = u, i.SAXStream = B, i.createStream = W, i.MAX_BUFFER_LENGTH = 64 * 1024;
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
        var j = this;
        d(j), j.q = j.c = "", j.bufferCheckPosition = i.MAX_BUFFER_LENGTH, j.opt = w || {}, j.opt.lowercase = j.opt.lowercase || j.opt.lowercasetags, j.looseCase = j.opt.lowercase ? "toLowerCase" : "toUpperCase", j.tags = [], j.closed = j.closedRoot = j.sawRoot = !1, j.tag = j.error = null, j.strict = !!P, j.noscript = !!(P || j.opt.noscript), j.state = q.BEGIN, j.strictEntities = j.opt.strictEntities, j.ENTITIES = j.strictEntities ? Object.create(i.XML_ENTITIES) : Object.create(i.ENTITIES), j.attribList = [], j.opt.xmlns && (j.ns = Object.create(de)), j.opt.unquotedAttributeValues === void 0 && (j.opt.unquotedAttributeValues = !P), j.trackPosition = j.opt.position !== !1, j.trackPosition && (j.position = j.line = j.column = 0), rt(j, "onready");
      }
      Object.create || (Object.create = function(P) {
        function w() {
        }
        w.prototype = P;
        var j = new w();
        return j;
      }), Object.keys || (Object.keys = function(P) {
        var w = [];
        for (var j in P) P.hasOwnProperty(j) && w.push(j);
        return w;
      });
      function l(P) {
        for (var w = Math.max(i.MAX_BUFFER_LENGTH, 10), j = 0, $ = 0, Ne = a.length; $ < Ne; $++) {
          var A = P[a[$]].length;
          if (A > w)
            switch (a[$]) {
              case "textNode":
                Ge(P);
                break;
              case "cdata":
                De(P, "oncdata", P.cdata), P.cdata = "";
                break;
              case "script":
                De(P, "onscript", P.script), P.script = "";
                break;
              default:
                wt(P, "Max buffer length exceeded: " + a[$]);
            }
          j = Math.max(j, A);
        }
        var L = i.MAX_BUFFER_LENGTH - j;
        P.bufferCheckPosition = L + P.position;
      }
      function d(P) {
        for (var w = 0, j = a.length; w < j; w++)
          P[a[w]] = "";
      }
      function y(P) {
        Ge(P), P.cdata !== "" && (De(P, "oncdata", P.cdata), P.cdata = ""), P.script !== "" && (De(P, "onscript", P.script), P.script = "");
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
          y(this);
        }
      };
      var S;
      try {
        S = Wa.Stream;
      } catch {
        S = function() {
        };
      }
      S || (S = function() {
      });
      var N = i.EVENTS.filter(function(P) {
        return P !== "error" && P !== "end";
      });
      function W(P, w) {
        return new B(P, w);
      }
      function B(P, w) {
        if (!(this instanceof B))
          return new B(P, w);
        S.apply(this), this._parser = new u(P, w), this.writable = !0, this.readable = !0;
        var j = this;
        this._parser.onend = function() {
          j.emit("end");
        }, this._parser.onerror = function($) {
          j.emit("error", $), j._parser.error = null;
        }, this._decoder = null, N.forEach(function($) {
          Object.defineProperty(j, "on" + $, {
            get: function() {
              return j._parser["on" + $];
            },
            set: function(Ne) {
              if (!Ne)
                return j.removeAllListeners($), j._parser["on" + $] = Ne, Ne;
              j.on($, Ne);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      B.prototype = Object.create(S.prototype, {
        constructor: {
          value: B
        }
      }), B.prototype.write = function(P) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(P)) {
          if (!this._decoder) {
            var w = Wa.StringDecoder;
            this._decoder = new w("utf8");
          }
          P = this._decoder.write(P);
        }
        return this._parser.write(P.toString()), this.emit("data", P), !0;
      }, B.prototype.end = function(P) {
        return P && P.length && this.write(P), this._parser.end(), !0;
      }, B.prototype.on = function(P, w) {
        var j = this;
        return !j._parser["on" + P] && N.indexOf(P) !== -1 && (j._parser["on" + P] = function() {
          var $ = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          $.splice(0, 0, P), j.emit.apply(j, $);
        }), S.prototype.on.call(j, P, w);
      };
      var G = "[CDATA[", re = "DOCTYPE", se = "http://www.w3.org/XML/1998/namespace", he = "http://www.w3.org/2000/xmlns/", de = { xml: se, xmlns: he }, Ce = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, ae = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, ye = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, ke = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function pe(P) {
        return P === " " || P === `
` || P === "\r" || P === "	";
      }
      function je(P) {
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
      var q = 0;
      i.STATE = {
        BEGIN: q++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: q++,
        // leading whitespace
        TEXT: q++,
        // general stuff
        TEXT_ENTITY: q++,
        // &amp and such.
        OPEN_WAKA: q++,
        // <
        SGML_DECL: q++,
        // <!BLARG
        SGML_DECL_QUOTED: q++,
        // <!BLARG foo "bar
        DOCTYPE: q++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: q++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: q++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: q++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: q++,
        // <!-
        COMMENT: q++,
        // <!--
        COMMENT_ENDING: q++,
        // <!-- blah -
        COMMENT_ENDED: q++,
        // <!-- blah --
        CDATA: q++,
        // <![CDATA[ something
        CDATA_ENDING: q++,
        // ]
        CDATA_ENDING_2: q++,
        // ]]
        PROC_INST: q++,
        // <?hi
        PROC_INST_BODY: q++,
        // <?hi there
        PROC_INST_ENDING: q++,
        // <?hi "there" ?
        OPEN_TAG: q++,
        // <strong
        OPEN_TAG_SLASH: q++,
        // <strong /
        ATTRIB: q++,
        // <a
        ATTRIB_NAME: q++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: q++,
        // <a foo _
        ATTRIB_VALUE: q++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: q++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: q++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: q++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: q++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: q++,
        // <foo bar=&quot
        CLOSE_TAG: q++,
        // </a
        CLOSE_TAG_SAW_WHITE: q++,
        // </a   >
        SCRIPT: q++,
        // <script> ...
        SCRIPT_ENDING: q++
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
        var w = i.ENTITIES[P], j = typeof w == "number" ? String.fromCharCode(w) : w;
        i.ENTITIES[P] = j;
      });
      for (var it in i.STATE)
        i.STATE[i.STATE[it]] = it;
      q = i.STATE;
      function rt(P, w, j) {
        P[w] && P[w](j);
      }
      function De(P, w, j) {
        P.textNode && Ge(P), rt(P, w, j);
      }
      function Ge(P) {
        P.textNode = At(P.opt, P.textNode), P.textNode && rt(P, "ontext", P.textNode), P.textNode = "";
      }
      function At(P, w) {
        return P.trim && (w = w.trim()), P.normalize && (w = w.replace(/\s+/g, " ")), w;
      }
      function wt(P, w) {
        return Ge(P), P.trackPosition && (w += `
Line: ` + P.line + `
Column: ` + P.column + `
Char: ` + P.c), w = new Error(w), P.error = w, rt(P, "onerror", w), P;
      }
      function Ue(P) {
        return P.sawRoot && !P.closedRoot && be(P, "Unclosed root tag"), P.state !== q.BEGIN && P.state !== q.BEGIN_WHITESPACE && P.state !== q.TEXT && wt(P, "Unexpected end"), Ge(P), P.c = "", P.closed = !0, rt(P, "onend"), u.call(P, P.strict, P.opt), P;
      }
      function be(P, w) {
        if (typeof P != "object" || !(P instanceof u))
          throw new Error("bad call to strictFail");
        P.strict && wt(P, w);
      }
      function Pe(P) {
        P.strict || (P.tagName = P.tagName[P.looseCase]());
        var w = P.tags[P.tags.length - 1] || P, j = P.tag = { name: P.tagName, attributes: {} };
        P.opt.xmlns && (j.ns = w.ns), P.attribList.length = 0, De(P, "onopentagstart", j);
      }
      function et(P, w) {
        var j = P.indexOf(":"), $ = j < 0 ? ["", P] : P.split(":"), Ne = $[0], A = $[1];
        return w && P === "xmlns" && (Ne = "xmlns", A = ""), { prefix: Ne, local: A };
      }
      function ze(P) {
        if (P.strict || (P.attribName = P.attribName[P.looseCase]()), P.attribList.indexOf(P.attribName) !== -1 || P.tag.attributes.hasOwnProperty(P.attribName)) {
          P.attribName = P.attribValue = "";
          return;
        }
        if (P.opt.xmlns) {
          var w = et(P.attribName, !0), j = w.prefix, $ = w.local;
          if (j === "xmlns")
            if ($ === "xml" && P.attribValue !== se)
              be(
                P,
                "xml: prefix must be bound to " + se + `
Actual: ` + P.attribValue
              );
            else if ($ === "xmlns" && P.attribValue !== he)
              be(
                P,
                "xmlns: prefix must be bound to " + he + `
Actual: ` + P.attribValue
              );
            else {
              var Ne = P.tag, A = P.tags[P.tags.length - 1] || P;
              Ne.ns === A.ns && (Ne.ns = Object.create(A.ns)), Ne.ns[$] = P.attribValue;
            }
          P.attribList.push([P.attribName, P.attribValue]);
        } else
          P.tag.attributes[P.attribName] = P.attribValue, De(P, "onattribute", {
            name: P.attribName,
            value: P.attribValue
          });
        P.attribName = P.attribValue = "";
      }
      function at(P, w) {
        if (P.opt.xmlns) {
          var j = P.tag, $ = et(P.tagName);
          j.prefix = $.prefix, j.local = $.local, j.uri = j.ns[$.prefix] || "", j.prefix && !j.uri && (be(P, "Unbound namespace prefix: " + JSON.stringify(P.tagName)), j.uri = $.prefix);
          var Ne = P.tags[P.tags.length - 1] || P;
          j.ns && Ne.ns !== j.ns && Object.keys(j.ns).forEach(function(me) {
            De(P, "onopennamespace", {
              prefix: me,
              uri: j.ns[me]
            });
          });
          for (var A = 0, L = P.attribList.length; A < L; A++) {
            var Z = P.attribList[A], I = Z[0], k = Z[1], F = et(I, !0), V = F.prefix, M = F.local, te = V === "" ? "" : j.ns[V] || "", Q = {
              name: I,
              value: k,
              prefix: V,
              local: M,
              uri: te
            };
            V && V !== "xmlns" && !te && (be(P, "Unbound namespace prefix: " + JSON.stringify(V)), Q.uri = V), P.tag.attributes[I] = Q, De(P, "onattribute", Q);
          }
          P.attribList.length = 0;
        }
        P.tag.isSelfClosing = !!w, P.sawRoot = !0, P.tags.push(P.tag), De(P, "onopentag", P.tag), w || (!P.noscript && P.tagName.toLowerCase() === "script" ? P.state = q.SCRIPT : P.state = q.TEXT, P.tag = null, P.tagName = ""), P.attribName = P.attribValue = "", P.attribList.length = 0;
      }
      function ot(P) {
        if (!P.tagName) {
          be(P, "Weird empty close tag."), P.textNode += "</>", P.state = q.TEXT;
          return;
        }
        if (P.script) {
          if (P.tagName !== "script") {
            P.script += "</" + P.tagName + ">", P.tagName = "", P.state = q.SCRIPT;
            return;
          }
          De(P, "onscript", P.script), P.script = "";
        }
        var w = P.tags.length, j = P.tagName;
        P.strict || (j = j[P.looseCase]());
        for (var $ = j; w--; ) {
          var Ne = P.tags[w];
          if (Ne.name !== $)
            be(P, "Unexpected close tag");
          else
            break;
        }
        if (w < 0) {
          be(P, "Unmatched closing tag: " + P.tagName), P.textNode += "</" + P.tagName + ">", P.state = q.TEXT;
          return;
        }
        P.tagName = j;
        for (var A = P.tags.length; A-- > w; ) {
          var L = P.tag = P.tags.pop();
          P.tagName = P.tag.name, De(P, "onclosetag", P.tagName);
          var Z = {};
          for (var I in L.ns)
            Z[I] = L.ns[I];
          var k = P.tags[P.tags.length - 1] || P;
          P.opt.xmlns && L.ns !== k.ns && Object.keys(L.ns).forEach(function(F) {
            var V = L.ns[F];
            De(P, "onclosenamespace", { prefix: F, uri: V });
          });
        }
        w === 0 && (P.closedRoot = !0), P.tagName = P.attribValue = P.attribName = "", P.attribList.length = 0, P.state = q.TEXT;
      }
      function ht(P) {
        var w = P.entity, j = w.toLowerCase(), $, Ne = "";
        return P.ENTITIES[w] ? P.ENTITIES[w] : P.ENTITIES[j] ? P.ENTITIES[j] : (w = j, w.charAt(0) === "#" && (w.charAt(1) === "x" ? (w = w.slice(2), $ = parseInt(w, 16), Ne = $.toString(16)) : (w = w.slice(1), $ = parseInt(w, 10), Ne = $.toString(10))), w = w.replace(/^0+/, ""), isNaN($) || Ne.toLowerCase() !== w ? (be(P, "Invalid character entity"), "&" + P.entity + ";") : String.fromCodePoint($));
      }
      function rn(P, w) {
        w === "<" ? (P.state = q.OPEN_WAKA, P.startTagPosition = P.position) : pe(w) || (be(P, "Non-whitespace before first tag."), P.textNode = w, P.state = q.TEXT);
      }
      function It(P, w) {
        var j = "";
        return w < P.length && (j = P.charAt(w)), j;
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
        for (var j = 0, $ = ""; $ = It(P, j++), w.c = $, !!$; )
          switch (w.trackPosition && (w.position++, $ === `
` ? (w.line++, w.column = 0) : w.column++), w.state) {
            case q.BEGIN:
              if (w.state = q.BEGIN_WHITESPACE, $ === "\uFEFF")
                continue;
              rn(w, $);
              continue;
            case q.BEGIN_WHITESPACE:
              rn(w, $);
              continue;
            case q.TEXT:
              if (w.sawRoot && !w.closedRoot) {
                for (var Ne = j - 1; $ && $ !== "<" && $ !== "&"; )
                  $ = It(P, j++), $ && w.trackPosition && (w.position++, $ === `
` ? (w.line++, w.column = 0) : w.column++);
                w.textNode += P.substring(Ne, j - 1);
              }
              $ === "<" && !(w.sawRoot && w.closedRoot && !w.strict) ? (w.state = q.OPEN_WAKA, w.startTagPosition = w.position) : (!pe($) && (!w.sawRoot || w.closedRoot) && be(w, "Text data outside of root node."), $ === "&" ? w.state = q.TEXT_ENTITY : w.textNode += $);
              continue;
            case q.SCRIPT:
              $ === "<" ? w.state = q.SCRIPT_ENDING : w.script += $;
              continue;
            case q.SCRIPT_ENDING:
              $ === "/" ? w.state = q.CLOSE_TAG : (w.script += "<" + $, w.state = q.SCRIPT);
              continue;
            case q.OPEN_WAKA:
              if ($ === "!")
                w.state = q.SGML_DECL, w.sgmlDecl = "";
              else if (!pe($)) if (oe(Ce, $))
                w.state = q.OPEN_TAG, w.tagName = $;
              else if ($ === "/")
                w.state = q.CLOSE_TAG, w.tagName = "";
              else if ($ === "?")
                w.state = q.PROC_INST, w.procInstName = w.procInstBody = "";
              else {
                if (be(w, "Unencoded <"), w.startTagPosition + 1 < w.position) {
                  var A = w.position - w.startTagPosition;
                  $ = new Array(A).join(" ") + $;
                }
                w.textNode += "<" + $, w.state = q.TEXT;
              }
              continue;
            case q.SGML_DECL:
              if (w.sgmlDecl + $ === "--") {
                w.state = q.COMMENT, w.comment = "", w.sgmlDecl = "";
                continue;
              }
              w.doctype && w.doctype !== !0 && w.sgmlDecl ? (w.state = q.DOCTYPE_DTD, w.doctype += "<!" + w.sgmlDecl + $, w.sgmlDecl = "") : (w.sgmlDecl + $).toUpperCase() === G ? (De(w, "onopencdata"), w.state = q.CDATA, w.sgmlDecl = "", w.cdata = "") : (w.sgmlDecl + $).toUpperCase() === re ? (w.state = q.DOCTYPE, (w.doctype || w.sawRoot) && be(
                w,
                "Inappropriately located doctype declaration"
              ), w.doctype = "", w.sgmlDecl = "") : $ === ">" ? (De(w, "onsgmldeclaration", w.sgmlDecl), w.sgmlDecl = "", w.state = q.TEXT) : (je($) && (w.state = q.SGML_DECL_QUOTED), w.sgmlDecl += $);
              continue;
            case q.SGML_DECL_QUOTED:
              $ === w.q && (w.state = q.SGML_DECL, w.q = ""), w.sgmlDecl += $;
              continue;
            case q.DOCTYPE:
              $ === ">" ? (w.state = q.TEXT, De(w, "ondoctype", w.doctype), w.doctype = !0) : (w.doctype += $, $ === "[" ? w.state = q.DOCTYPE_DTD : je($) && (w.state = q.DOCTYPE_QUOTED, w.q = $));
              continue;
            case q.DOCTYPE_QUOTED:
              w.doctype += $, $ === w.q && (w.q = "", w.state = q.DOCTYPE);
              continue;
            case q.DOCTYPE_DTD:
              $ === "]" ? (w.doctype += $, w.state = q.DOCTYPE) : $ === "<" ? (w.state = q.OPEN_WAKA, w.startTagPosition = w.position) : je($) ? (w.doctype += $, w.state = q.DOCTYPE_DTD_QUOTED, w.q = $) : w.doctype += $;
              continue;
            case q.DOCTYPE_DTD_QUOTED:
              w.doctype += $, $ === w.q && (w.state = q.DOCTYPE_DTD, w.q = "");
              continue;
            case q.COMMENT:
              $ === "-" ? w.state = q.COMMENT_ENDING : w.comment += $;
              continue;
            case q.COMMENT_ENDING:
              $ === "-" ? (w.state = q.COMMENT_ENDED, w.comment = At(w.opt, w.comment), w.comment && De(w, "oncomment", w.comment), w.comment = "") : (w.comment += "-" + $, w.state = q.COMMENT);
              continue;
            case q.COMMENT_ENDED:
              $ !== ">" ? (be(w, "Malformed comment"), w.comment += "--" + $, w.state = q.COMMENT) : w.doctype && w.doctype !== !0 ? w.state = q.DOCTYPE_DTD : w.state = q.TEXT;
              continue;
            case q.CDATA:
              $ === "]" ? w.state = q.CDATA_ENDING : w.cdata += $;
              continue;
            case q.CDATA_ENDING:
              $ === "]" ? w.state = q.CDATA_ENDING_2 : (w.cdata += "]" + $, w.state = q.CDATA);
              continue;
            case q.CDATA_ENDING_2:
              $ === ">" ? (w.cdata && De(w, "oncdata", w.cdata), De(w, "onclosecdata"), w.cdata = "", w.state = q.TEXT) : $ === "]" ? w.cdata += "]" : (w.cdata += "]]" + $, w.state = q.CDATA);
              continue;
            case q.PROC_INST:
              $ === "?" ? w.state = q.PROC_INST_ENDING : pe($) ? w.state = q.PROC_INST_BODY : w.procInstName += $;
              continue;
            case q.PROC_INST_BODY:
              if (!w.procInstBody && pe($))
                continue;
              $ === "?" ? w.state = q.PROC_INST_ENDING : w.procInstBody += $;
              continue;
            case q.PROC_INST_ENDING:
              $ === ">" ? (De(w, "onprocessinginstruction", {
                name: w.procInstName,
                body: w.procInstBody
              }), w.procInstName = w.procInstBody = "", w.state = q.TEXT) : (w.procInstBody += "?" + $, w.state = q.PROC_INST_BODY);
              continue;
            case q.OPEN_TAG:
              oe(ae, $) ? w.tagName += $ : (Pe(w), $ === ">" ? at(w) : $ === "/" ? w.state = q.OPEN_TAG_SLASH : (pe($) || be(w, "Invalid character in tag name"), w.state = q.ATTRIB));
              continue;
            case q.OPEN_TAG_SLASH:
              $ === ">" ? (at(w, !0), ot(w)) : (be(w, "Forward-slash in opening tag not followed by >"), w.state = q.ATTRIB);
              continue;
            case q.ATTRIB:
              if (pe($))
                continue;
              $ === ">" ? at(w) : $ === "/" ? w.state = q.OPEN_TAG_SLASH : oe(Ce, $) ? (w.attribName = $, w.attribValue = "", w.state = q.ATTRIB_NAME) : be(w, "Invalid attribute name");
              continue;
            case q.ATTRIB_NAME:
              $ === "=" ? w.state = q.ATTRIB_VALUE : $ === ">" ? (be(w, "Attribute without value"), w.attribValue = w.attribName, ze(w), at(w)) : pe($) ? w.state = q.ATTRIB_NAME_SAW_WHITE : oe(ae, $) ? w.attribName += $ : be(w, "Invalid attribute name");
              continue;
            case q.ATTRIB_NAME_SAW_WHITE:
              if ($ === "=")
                w.state = q.ATTRIB_VALUE;
              else {
                if (pe($))
                  continue;
                be(w, "Attribute without value"), w.tag.attributes[w.attribName] = "", w.attribValue = "", De(w, "onattribute", {
                  name: w.attribName,
                  value: ""
                }), w.attribName = "", $ === ">" ? at(w) : oe(Ce, $) ? (w.attribName = $, w.state = q.ATTRIB_NAME) : (be(w, "Invalid attribute name"), w.state = q.ATTRIB);
              }
              continue;
            case q.ATTRIB_VALUE:
              if (pe($))
                continue;
              je($) ? (w.q = $, w.state = q.ATTRIB_VALUE_QUOTED) : (w.opt.unquotedAttributeValues || wt(w, "Unquoted attribute value"), w.state = q.ATTRIB_VALUE_UNQUOTED, w.attribValue = $);
              continue;
            case q.ATTRIB_VALUE_QUOTED:
              if ($ !== w.q) {
                $ === "&" ? w.state = q.ATTRIB_VALUE_ENTITY_Q : w.attribValue += $;
                continue;
              }
              ze(w), w.q = "", w.state = q.ATTRIB_VALUE_CLOSED;
              continue;
            case q.ATTRIB_VALUE_CLOSED:
              pe($) ? w.state = q.ATTRIB : $ === ">" ? at(w) : $ === "/" ? w.state = q.OPEN_TAG_SLASH : oe(Ce, $) ? (be(w, "No whitespace between attributes"), w.attribName = $, w.attribValue = "", w.state = q.ATTRIB_NAME) : be(w, "Invalid attribute name");
              continue;
            case q.ATTRIB_VALUE_UNQUOTED:
              if (!ie($)) {
                $ === "&" ? w.state = q.ATTRIB_VALUE_ENTITY_U : w.attribValue += $;
                continue;
              }
              ze(w), $ === ">" ? at(w) : w.state = q.ATTRIB;
              continue;
            case q.CLOSE_TAG:
              if (w.tagName)
                $ === ">" ? ot(w) : oe(ae, $) ? w.tagName += $ : w.script ? (w.script += "</" + w.tagName, w.tagName = "", w.state = q.SCRIPT) : (pe($) || be(w, "Invalid tagname in closing tag"), w.state = q.CLOSE_TAG_SAW_WHITE);
              else {
                if (pe($))
                  continue;
                Ee(Ce, $) ? w.script ? (w.script += "</" + $, w.state = q.SCRIPT) : be(w, "Invalid tagname in closing tag.") : w.tagName = $;
              }
              continue;
            case q.CLOSE_TAG_SAW_WHITE:
              if (pe($))
                continue;
              $ === ">" ? ot(w) : be(w, "Invalid characters in closing tag");
              continue;
            case q.TEXT_ENTITY:
            case q.ATTRIB_VALUE_ENTITY_Q:
            case q.ATTRIB_VALUE_ENTITY_U:
              var L, Z;
              switch (w.state) {
                case q.TEXT_ENTITY:
                  L = q.TEXT, Z = "textNode";
                  break;
                case q.ATTRIB_VALUE_ENTITY_Q:
                  L = q.ATTRIB_VALUE_QUOTED, Z = "attribValue";
                  break;
                case q.ATTRIB_VALUE_ENTITY_U:
                  L = q.ATTRIB_VALUE_UNQUOTED, Z = "attribValue";
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
        var P = String.fromCharCode, w = Math.floor, j = function() {
          var $ = 16384, Ne = [], A, L, Z = -1, I = arguments.length;
          if (!I)
            return "";
          for (var k = ""; ++Z < I; ) {
            var F = Number(arguments[Z]);
            if (!isFinite(F) || // `NaN`, `+Infinity`, or `-Infinity`
            F < 0 || // not a valid Unicode code point
            F > 1114111 || // not a valid Unicode code point
            w(F) !== F)
              throw RangeError("Invalid code point: " + F);
            F <= 65535 ? Ne.push(F) : (F -= 65536, A = (F >> 10) + 55296, L = F % 1024 + 56320, Ne.push(A, L)), (Z + 1 === I || Ne.length > $) && (k += P.apply(null, Ne), Ne.length = 0);
          }
          return k;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: j,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = j;
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
      var d = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : dd, y = Object.keys, S = Array.isArray;
      function N(e, t) {
        return typeof t != "object" || y(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || d.Promise || (d.Promise = Promise);
      var W = Object.getPrototypeOf, B = {}.hasOwnProperty;
      function G(e, t) {
        return B.call(e, t);
      }
      function re(e, t) {
        typeof t == "function" && (t = t(W(e))), (typeof Reflect > "u" ? y : Reflect.ownKeys)(t).forEach(function(r) {
          he(e, r, t[r]);
        });
      }
      var se = Object.defineProperty;
      function he(e, t, r, o) {
        se(e, t, N(r && G(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function de(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), he(e.prototype, "constructor", e), { extend: re.bind(null, e.prototype) };
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
      function je(e) {
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
          p !== -1 ? (c = t.substr(0, p), (f = t.substr(p + 1)) === "" ? r === void 0 ? S(e) && !isNaN(parseInt(c)) ? e.splice(c, 1) : delete e[c] : e[c] = r : oe(p = !(p = e[c]) || !G(e, c) ? e[c] = {} : p, f, r)) : r === void 0 ? S(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function Ee(e) {
        var t, r = {};
        for (t in e) G(e, t) && (r[t] = e[t]);
        return r;
      }
      var q = [].concat;
      function it(e) {
        return q.apply([], e);
      }
      var Ie = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(it([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return d[e];
      }), rt = new Set(Ie.map(function(e) {
        return d[e];
      })), De = null;
      function Ge(e) {
        return De = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var o = De.get(r);
          if (o) return o;
          if (S(r)) {
            o = [], De.set(r, o);
            for (var s = 0, c = r.length; s < c; ++s) o.push(t(r[s]));
          } else if (rt.has(r.constructor)) o = r;
          else {
            var f, p = W(r);
            for (f in o = p === Object.prototype ? {} : Object.create(p), De.set(r, o), r) G(r, f) && (o[f] = t(r[f]));
          }
          return o;
        }(e), De = null, e;
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
      var et = {};
      function ze(e) {
        var t, r, o, s;
        if (arguments.length === 1) {
          if (S(e)) return e.slice();
          if (this === et && typeof e == "string") return [e];
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
      de(ht).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), de(It).from(ht), de(pt).from(ht);
      var P = dt.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), w = ht, j = dt.reduce(function(e, t) {
        var r = t + "Error";
        function o(s, c) {
          this.name = r, s ? typeof s == "string" ? (this.message = "".concat(s).concat(c ? `
 ` + c : ""), this.inner = c || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = ot[t] || r, this.inner = null);
        }
        return de(o).from(w), e[t] = o, e;
      }, {});
      j.Syntax = SyntaxError, j.Type = TypeError, j.Range = RangeError;
      var $ = Te.reduce(function(e, t) {
        return e[t + "Error"] = j[t], e;
      }, {}), Ne = dt.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = j[t]), e;
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
      function F(e, t) {
        return e === A ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? I(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? I(o, this.onerror) : o);
        };
      }
      function V(e, t) {
        return e === A ? t : function(r) {
          var o = e.apply(this, arguments);
          N(r, o);
          var s = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? I(s, this.onsuccess) : s), c && (this.onerror = this.onerror ? I(c, this.onerror) : c), o === void 0 ? r === void 0 ? void 0 : r : N(o, r);
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
      Ne.ModifyError = It, Ne.DexieError = ht, Ne.BulkError = pt;
      var Q = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function me(e) {
        Q = e;
      }
      var ce = {}, xe = 100, Ie = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, W(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, W(t), e];
      }(), Te = Ie[0], dt = Ie[1], Ie = Ie[2], dt = dt && dt.then, Me = Te && Te.constructor, qe = !!Ie, ut = function(e, t) {
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
          var c = this, f = !e.global && (e !== ne || t !== Ln), p = f && !Nt(), m = new J(function(g, _) {
            wr(c, new fi(hi(o, e, f, p), hi(s, e, f, p), g, _, e));
          });
          return this._consoleTask && (m._consoleTask = this._consoleTask), m;
        }
        return r.prototype = ce, r;
      }, set: function(e) {
        he(this, "then", e && e.prototype === ce ? gr : { get: function() {
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
            return Dt(r, !0), e.apply(this, arguments);
          } catch (c) {
            t && t(c);
          } finally {
            Dt(s, !1), o && sn();
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
            return s(new j.Timeout(t));
          }, e);
          r.then(o, s).finally(clearTimeout.bind(null, c));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && he(J.prototype, Symbol.toStringTag, "Dexie.Promise"), Je.env = pi(), re(J, { all: function() {
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
      } }), Me && (Me.allSettled && he(J, "allSettled", function() {
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
      }), Me.any && typeof AggregateError < "u" && he(J, "any", function() {
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
      var $e = { awaits: 0, echoes: 0, id: 0 }, Uo = 0, jn = [], Fn = 0, Ln = 0, Go = 0;
      function Ot(e, t, r, o) {
        var s = ne, c = Object.create(s);
        return c.parent = s, c.ref = 0, c.global = !1, c.id = ++Go, Je.env, c.env = qe ? { Promise: J, PromiseProp: { value: J, configurable: !0, writable: !0 }, all: J.all, race: J.race, allSettled: J.allSettled, any: J.any, resolve: J.resolve, reject: J.reject } : {}, t && N(c, t), ++s.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = Ut(c, e, r, o), c.ref === 0 && c.finalize(), o;
      }
      function an() {
        return $e.id || ($e.id = ++Uo), ++$e.awaits, $e.echoes += xe, $e.id;
      }
      function Nt() {
        return !!$e.awaits && (--$e.awaits == 0 && ($e.id = 0), $e.echoes = $e.awaits * xe, !0);
      }
      function Mn(e) {
        return $e.echoes && e && e.constructor === Me ? (an(), e.then(function(t) {
          return Nt(), t;
        }, function(t) {
          return Nt(), Fe(t);
        })) : e;
      }
      function Ho() {
        var e = jn[jn.length - 1];
        jn.pop(), Dt(e, !1);
      }
      function Dt(e, t) {
        var r, o = ne;
        (t ? !$e.echoes || Fn++ && e === ne : !Fn || --Fn && e === ne) || queueMicrotask(t ? (function(s) {
          ++Ln, $e.echoes && --$e.echoes != 0 || ($e.echoes = $e.awaits = $e.id = 0), jn.push(ne), Dt(s, !0);
        }).bind(null, e) : Ho), e !== ne && (ne = e, o === Je && (Je.env = pi()), qe && (r = Je.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(d, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function pi() {
        var e = d.Promise;
        return qe ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(d, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Ut(e, t, r, o, s) {
        var c = ne;
        try {
          return Dt(e, !0), t(r, o, s);
        } finally {
          Dt(c, !1);
        }
      }
      function hi(e, t, r, o) {
        return typeof e != "function" ? e : function() {
          var s = ne;
          r && an(), Dt(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Dt(s, !1), o && queueMicrotask(Nt);
          }
        };
      }
      function Sr(e) {
        Promise === Me && $e.echoes === 0 ? Fn === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + dt).indexOf("[native code]") === -1 && (an = Nt = A);
      var Fe = J.reject, Gt = "￿", xt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", mi = "String expected.", un = [], Bn = "__dbnames", xr = "readonly", Er = "readwrite";
      function Ht(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var yi = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Kn(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = Ge(t))[e], t;
        };
      }
      function vi() {
        throw j.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
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
      function qn(e, t, r) {
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
          if (!h.schema[s]) throw new j.NotFound("Table " + s + " not part of transaction");
          return t(h.idbtrans, h);
        }
        var p = on();
        try {
          var m = o && o.db._novip === this.db._novip ? o === ne.trans ? o._promise(e, f, r) : Ot(function() {
            return o._promise(e, f, r);
          }, { trans: o, transless: ne.transless || ne }) : function g(_, h, T, v) {
            if (_.idbdb && (_._state.openComplete || ne.letThrough || _._vip)) {
              var b = _._createTransaction(h, T, _._dbSchema);
              try {
                b.create(), _._state.PR1398_maxLoop = 3;
              } catch (E) {
                return E.name === P.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                  return g(_, h, T, v);
                })) : Fe(E);
              }
              return b._promise(h, function(E, x) {
                return Ot(function() {
                  return ne.trans = b, v(E, x, b);
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
            if (_._state.openComplete) return Fe(new j.DatabaseClosed(_._state.dbOpenError));
            if (!_._state.isBeingOpened) {
              if (!_._state.autoOpen) return Fe(new j.DatabaseClosed());
              _.open().catch(A);
            }
            return _._state.dbReadyPromise.then(function() {
              return g(_, h, T, v);
            });
          }(this.db, e, [this.name], f);
          return c && (m._consoleTask = c, m = m.catch(function(g) {
            return console.trace(g), Fe(g);
          })), m;
        } finally {
          p && sn();
        }
      }, Ae.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? Fe(new j.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(s) {
            return r.hook.reading.fire(s);
          });
        }).then(t);
      }, Ae.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (S(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = y(e);
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
          return [g || h, g || !h ? Ht(_, h && h.multi ? function(v) {
            return v = ie(v, m), S(v) && v.some(function(b) {
              return s(T, b);
            });
          } : function(v) {
            return s(T, ie(v, m));
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
        return new this.db.Collection(new this.db.WhereClause(this, S(e) ? "[".concat(e.join("+"), "]") : e));
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
          N(this, e);
        });
      }, Ae.prototype.add = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, f = e;
        return c && s && (f = Kn(c)(e)), this._trans("readwrite", function(p) {
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
        return typeof e != "object" || S(e) ? this.where(":id").equals(e).modify(t) : (e = ie(e, this.schema.primKey.keyPath), e === void 0 ? Fe(new j.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, Ae.prototype.put = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, f = e;
        return c && s && (f = Kn(c)(e)), this._trans("readwrite", function(p) {
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
            return qn(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? J.reject(o.failures[0]) : void 0;
          });
        });
      }, Ae.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: yi }).then(function(r) {
            return qn(e, null, r);
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
          if (g && s) throw new j.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new j.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, g = g && p ? e.map(Kn(g)) : e;
          return o.core.mutate({ trans: f, type: "add", keys: s, values: g, wantResults: c }).then(function(b) {
            var h = b.numFailures, T = b.results, v = b.lastResult, b = b.failures;
            if (h === 0) return c ? T : v;
            throw new pt("".concat(o.name, ".bulkAdd(): ").concat(h, " of ").concat(m, " operations failed"), b);
          });
        });
      }, Ae.prototype.bulkPut = function(e, t, r) {
        var o = this, s = Array.isArray(t) ? t : void 0, c = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(f) {
          var g = o.schema.primKey, p = g.auto, g = g.keyPath;
          if (g && s) throw new j.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new j.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, g = g && p ? e.map(Kn(g)) : e;
          return o.core.mutate({ trans: f, type: "put", keys: s, values: g, wantResults: c }).then(function(b) {
            var h = b.numFailures, T = b.results, v = b.lastResult, b = b.failures;
            if (h === 0) return c ? T : v;
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
              var v = h.key, b = h.changes, E = p[T];
              if (E) {
                for (var x = 0, C = Object.keys(b); x < C.length; x++) {
                  var O = C[x], D = b[O];
                  if (O === t.schema.primKey.keyPath) {
                    if (ve(D, v) !== 0) throw new j.Constraint("Cannot update primary key in bulkUpdate()");
                  } else oe(E, O, D);
                }
                c.push(T), m.push(v), g.push(E);
              }
            });
            var _ = m.length;
            return r.mutate({ trans: f, type: "put", keys: m, values: g, updates: { keys: o, changeSpecs: s } }).then(function(h) {
              var T = h.numFailures, v = h.failures;
              if (T === 0) return _;
              for (var b = 0, E = Object.keys(v); b < E.length; b++) {
                var x, C = E[b], O = c[Number(C)];
                O != null && (x = v[C], delete v[C], v[O] = x);
              }
              throw new pt("".concat(t.name, ".bulkUpdate(): ").concat(T, " of ").concat(_, " operations failed"), v);
            });
          });
        });
      }, Ae.prototype.bulkDelete = function(e) {
        var t = this, r = e.length;
        return this._trans("readwrite", function(o) {
          return t.core.mutate({ trans: o, type: "delete", keys: e }).then(function(s) {
            return qn(t, e, s);
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
          y(g = f).forEach(function(h) {
            var T = g[h];
            if (S(T)) c(h, g[h][0], g[h][1]);
            else {
              if (T !== "asap") throw new j.InvalidArgument("Invalid event config");
              var v = c(h, L, function() {
                for (var b = arguments.length, E = new Array(b); b--; ) E[b] = arguments[b];
                v.subscribers.forEach(function(x) {
                  je(function() {
                    x.apply(null, E);
                  });
                });
              });
            }
          });
        }
      }
      function yn(e, t) {
        return de(t).from({ prototype: e }), t;
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
        if (!r) throw new j.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
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
          if (S(r)) return l(l([], S(e) ? e : [], !0), r).sort();
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
          if (S(o)) return S(e) ? e.filter(function(s) {
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
        return r.error ? r.table._trans(null, Fe.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, we.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, Fe.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, we.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Ht(t.algorithm, e);
      }, we.prototype._iterate = function(e, t) {
        return Vn(this._ctx, e, t, this._ctx.table.core);
      }, we.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && N(r, e), t._ctx = r, t;
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
          f = typeof e == "function" ? e : (s = y(e), c = s.length, function(C) {
            for (var O = !1, D = 0; D < c; ++D) {
              var R = s[D], K = e[R], Y = ie(C, R);
              K instanceof vn ? (oe(C, R, K.execute(Y)), O = !0) : Y !== K && (oe(C, R, K), O = !0);
            }
            return O;
          });
          var p = r.table.core, h = p.schema.primaryKey, m = h.outbound, g = h.extractKey, _ = 200, h = t.db._options.modifyChunkSize;
          h && (_ = typeof h == "object" ? h[p.name] || h["*"] || 200 : h);
          function T(C, R) {
            var D = R.failures, R = R.numFailures;
            b += C - R;
            for (var K = 0, Y = y(D); K < Y.length; K++) {
              var U = Y[K];
              v.push(D[U]);
            }
          }
          var v = [], b = 0, E = [], x = e === Ei;
          return t.clone().primaryKeys().then(function(C) {
            function O(R) {
              var K = Math.min(_, C.length - R), Y = C.slice(R, R + K);
              return (x ? Promise.resolve([]) : p.getMany({ trans: o, keys: Y, cache: "immutable" })).then(function(U) {
                var H = [], z = [], X = m ? [] : null, ee = x ? Y : [];
                if (!x) for (var fe = 0; fe < K; ++fe) {
                  var ge = U[fe], le = { value: Ge(ge), primKey: C[R + fe] };
                  f.call(le, le.value, le) !== !1 && (le.value == null ? ee.push(C[R + fe]) : m || ve(g(ge), g(le.value)) === 0 ? (z.push(le.value), m && X.push(C[R + fe])) : (ee.push(C[R + fe]), H.push(le.value)));
                }
                return Promise.resolve(0 < H.length && p.mutate({ trans: o, type: "add", values: H }).then(function(Re) {
                  for (var ue in Re.failures) ee.splice(parseInt(ue), 1);
                  T(H.length, Re);
                })).then(function() {
                  return (0 < z.length || D && typeof e == "object") && p.mutate({ trans: o, type: "put", keys: X, values: z, criteria: D, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < R }).then(function(Re) {
                    return T(z.length, Re);
                  });
                }).then(function() {
                  return (0 < ee.length || D && x) && p.mutate({ trans: o, type: "delete", keys: ee, criteria: D, isAdditionalChunk: 0 < R }).then(function(Re) {
                    return qn(r.table, ee, Re);
                  }).then(function(Re) {
                    return T(ee.length, Re);
                  });
                }).then(function() {
                  return C.length > R + K && O(R + _);
                });
              });
            }
            var D = cn(r) && r.limit === 1 / 0 && (typeof e != "function" || x) && { index: r.index, range: r.range };
            return O(0).then(function() {
              if (0 < v.length) throw new It("Error modifying one or more objects", v, b, E);
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
          s = b === "next" ? function(x) {
            return x.toUpperCase();
          } : function(x) {
            return x.toLowerCase();
          }, c = b === "next" ? function(x) {
            return x.toLowerCase();
          } : function(x) {
            return x.toUpperCase();
          }, f = b === "next" ? Yo : Qo;
          var E = r.map(function(x) {
            return { lower: c(x), upper: s(x) };
          }).sort(function(x, C) {
            return f(x.lower, C.lower);
          });
          p = E.map(function(x) {
            return x.upper;
          }), m = E.map(function(x) {
            return x.lower;
          }), _ = (g = b) === "next" ? "" : o;
        }
        T("next"), e = new e.Collection(e, function() {
          return Rt(p[0], m[h - 1] + o);
        }), e._ondirectionchange = function(b) {
          T(b);
        };
        var v = 0;
        return e._addAlgorithm(function(b, E, x) {
          var C = b.key;
          if (typeof C != "string") return !1;
          var O = c(C);
          if (t(O, m, v)) return !0;
          for (var D = null, R = v; R < h; ++R) {
            var K = function(Y, U, H, z, X, ee) {
              for (var fe = Math.min(Y.length, z.length), ge = -1, le = 0; le < fe; ++le) {
                var Re = U[le];
                if (Re !== z[le]) return X(Y[le], H[le]) < 0 ? Y.substr(0, le) + H[le] + H.substr(le + 1) : X(Y[le], z[le]) < 0 ? Y.substr(0, le) + z[le] + H.substr(le + 1) : 0 <= ge ? Y.substr(0, ge) + U[ge] + H.substr(ge + 1) : null;
                X(Y[le], Re) < 0 && (ge = le);
              }
              return fe < z.length && ee === "next" ? Y + H.substr(Y.length) : fe < Y.length && ee === "prev" ? Y.substr(0, H.length) : ge < 0 ? null : Y.substr(0, ge) + z[ge] + H.substr(ge + 1);
            }(C, O, p[R], m[R], f, g);
            K === null && D === null ? v = R + 1 : (D === null || 0 < f(D, K)) && (D = K);
          }
          return E(D !== null ? function() {
            b.continue(D + _);
          } : x), !1;
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
        var e = ze.apply(et, arguments);
        return e.length === 0 ? ln(this) : Un(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, Ve.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = ze.apply(et, arguments);
        return e.length === 0 ? ln(this) : Un(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, Gt);
      }, Ve.prototype.anyOf = function() {
        var e = this, t = ze.apply(et, arguments), r = this._cmp;
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
        var e = ze.apply(et, arguments);
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
        })) return st(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", j.InvalidArgument);
        var m = !t || t.includeLowers !== !1, g = t && t.includeUppers === !0, _, h = s;
        function T(O, D) {
          return h(O[0], D[0]);
        }
        try {
          (_ = C.reduce(function(O, D) {
            for (var R = 0, K = O.length; R < K; ++R) {
              var Y = O[R];
              if (o(D[0], Y[1]) < 0 && 0 < o(D[1], Y[0])) {
                Y[0] = f(Y[0], D[0]), Y[1] = p(Y[1], D[1]);
                break;
              }
            }
            return R === K && O.push(D), O;
          }, [])).sort(T);
        } catch {
          return st(this, xt);
        }
        var v = 0, b = g ? function(O) {
          return 0 < s(O, _[v][1]);
        } : function(O) {
          return 0 <= s(O, _[v][1]);
        }, E = m ? function(O) {
          return 0 < c(O, _[v][0]);
        } : function(O) {
          return 0 <= c(O, _[v][0]);
        }, x = b, C = new this.Collection(this, function() {
          return Rt(_[0][0], _[_.length - 1][1], !m, !g);
        });
        return C._ondirectionchange = function(O) {
          h = O === "next" ? (x = b, s) : (x = E, c), _.sort(T);
        }, C._addAlgorithm(function(O, D, R) {
          for (var K, Y = O.key; x(Y); ) if (++v === _.length) return D(R), !1;
          return !b(K = Y) && !E(K) || (r._cmp(Y, _[v][1]) === 0 || r._cmp(Y, _[v][0]) === 0 || D(function() {
            h === s ? O.continue(_[v][0]) : O.continue(_[v][1]);
          }), !1);
        }), C;
      }, Ve.prototype.startsWithAnyOf = function() {
        var e = ze.apply(et, arguments);
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
            throw new j.DatabaseClosed(o);
          case "MissingAPIError":
            throw new j.MissingAPI(o.message, o);
          default:
            throw new j.OpenFailed(o);
        }
        if (!this.active) throw new j.TransactionInactive();
        return pe(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Oe(function(s) {
          gn(s), t._reject(e.error);
        }), e.onabort = Oe(function(s) {
          gn(s), t.active && t._reject(new j.Abort(e.error)), t.active = !1, t.on("abort").fire(s);
        }), e.oncomplete = Oe(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && kt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, vt.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Fe(new j.ReadOnly("Transaction is readonly"));
        if (!this.active) return Fe(new j.TransactionInactive());
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
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new j.Abort()));
      }, vt.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (G(t, e)) return t[e];
        var r = this.schema[e];
        if (!r) throw new j.NotFound("Table " + e + " not part of transaction");
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
        function o(x) {
          if (x.type === 3) return null;
          if (x.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var v = x.lower, b = x.upper, E = x.lowerOpen, x = x.upperOpen;
          return v === void 0 ? b === void 0 ? null : t.upperBound(b, !!x) : b === void 0 ? t.lowerBound(v, !!E) : t.bound(v, b, !!E, !!x);
        }
        function s(T) {
          var v, b = T.name;
          return { name: b, schema: T, mutate: function(E) {
            var x = E.trans, C = E.type, O = E.keys, D = E.values, R = E.range;
            return new Promise(function(K, Y) {
              K = Oe(K);
              var U = x.objectStore(b), H = U.keyPath == null, z = C === "put" || C === "add";
              if (!z && C !== "delete" && C !== "deleteRange") throw new Error("Invalid operation type: " + C);
              var X, ee = (O || D || { length: 1 }).length;
              if (O && D && O.length !== D.length) throw new Error("Given keys array must have same length as given values array.");
              if (ee === 0) return K({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function fe(Ze) {
                ++Re, gn(Ze);
              }
              var ge = [], le = [], Re = 0;
              if (C === "deleteRange") {
                if (R.type === 4) return K({ numFailures: Re, failures: le, results: [], lastResult: void 0 });
                R.type === 3 ? ge.push(X = U.clear()) : ge.push(X = U.delete(o(R)));
              } else {
                var H = z ? H ? [D, O] : [D, null] : [O, null], ue = H[0], We = H[1];
                if (z) for (var Ye = 0; Ye < ee; ++Ye) ge.push(X = We && We[Ye] !== void 0 ? U[C](ue[Ye], We[Ye]) : U[C](ue[Ye])), X.onerror = fe;
                else for (Ye = 0; Ye < ee; ++Ye) ge.push(X = U[C](ue[Ye])), X.onerror = fe;
              }
              function nr(Ze) {
                Ze = Ze.target.result, ge.forEach(function(Qt, Yr) {
                  return Qt.error != null && (le[Yr] = Qt.error);
                }), K({ numFailures: Re, failures: le, results: C === "delete" ? O : ge.map(function(Qt) {
                  return Qt.result;
                }), lastResult: Ze });
              }
              X.onerror = function(Ze) {
                fe(Ze), nr(Ze);
              }, X.onsuccess = nr;
            });
          }, getMany: function(E) {
            var x = E.trans, C = E.keys;
            return new Promise(function(O, D) {
              O = Oe(O);
              for (var R, K = x.objectStore(b), Y = C.length, U = new Array(Y), H = 0, z = 0, X = function(ge) {
                ge = ge.target, U[ge._pos] = ge.result, ++z === H && O(U);
              }, ee = yt(D), fe = 0; fe < Y; ++fe) C[fe] != null && ((R = K.get(C[fe]))._pos = fe, R.onsuccess = X, R.onerror = ee, ++H);
              H === 0 && O(U);
            });
          }, get: function(E) {
            var x = E.trans, C = E.key;
            return new Promise(function(O, D) {
              O = Oe(O);
              var R = x.objectStore(b).get(C);
              R.onsuccess = function(K) {
                return O(K.target.result);
              }, R.onerror = yt(D);
            });
          }, query: (v = g, function(E) {
            return new Promise(function(x, C) {
              x = Oe(x);
              var O, D, R, H = E.trans, K = E.values, Y = E.limit, X = E.query, U = Y === 1 / 0 ? void 0 : Y, z = X.index, X = X.range, H = H.objectStore(b), z = z.isPrimaryKey ? H : H.index(z.name), X = o(X);
              if (Y === 0) return x({ result: [] });
              v ? ((U = K ? z.getAll(X, U) : z.getAllKeys(X, U)).onsuccess = function(ee) {
                return x({ result: ee.target.result });
              }, U.onerror = yt(C)) : (O = 0, D = !K && "openKeyCursor" in z ? z.openKeyCursor(X) : z.openCursor(X), R = [], D.onsuccess = function(ee) {
                var fe = D.result;
                return fe ? (R.push(K ? fe.value : fe.primaryKey), ++O === Y ? x({ result: R }) : void fe.continue()) : x({ result: R });
              }, D.onerror = yt(C));
            });
          }), openCursor: function(E) {
            var x = E.trans, C = E.values, O = E.query, D = E.reverse, R = E.unique;
            return new Promise(function(K, Y) {
              K = Oe(K);
              var z = O.index, U = O.range, H = x.objectStore(b), H = z.isPrimaryKey ? H : H.index(z.name), z = D ? R ? "prevunique" : "prev" : R ? "nextunique" : "next", X = !C && "openKeyCursor" in H ? H.openKeyCursor(o(U), z) : H.openCursor(o(U), z);
              X.onerror = yt(Y), X.onsuccess = Oe(function(ee) {
                var fe, ge, le, Re, ue = X.result;
                ue ? (ue.___id = ++zo, ue.done = !1, fe = ue.continue.bind(ue), ge = (ge = ue.continuePrimaryKey) && ge.bind(ue), le = ue.advance.bind(ue), Re = function() {
                  throw new Error("Cursor not stopped");
                }, ue.trans = x, ue.stop = ue.continue = ue.continuePrimaryKey = ue.advance = function() {
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
                }, K(ue)) : K(null);
              }, Y);
            });
          }, count: function(E) {
            var x = E.query, C = E.trans, O = x.index, D = x.range;
            return new Promise(function(R, K) {
              var Y = C.objectStore(b), U = O.isPrimaryKey ? Y : Y.index(O.name), Y = o(D), U = Y ? U.count(Y) : U.count();
              U.onsuccess = Oe(function(H) {
                return R(H.target.result);
              }), U.onerror = yt(K);
            });
          } };
        }
        var c, f, p, _ = (f = m, p = Pi((c = e).objectStoreNames), { schema: { name: c.name, tables: p.map(function(T) {
          return f.objectStore(T);
        }).map(function(T) {
          var v = T.keyPath, x = T.autoIncrement, b = S(v), E = {}, x = { name: T.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: v == null, compound: b, keyPath: v, autoIncrement: x, unique: !0, extractKey: Or(v) }, indexes: Pi(T.indexNames).map(function(C) {
            return T.index(C);
          }).map(function(R) {
            var O = R.name, D = R.unique, K = R.multiEntry, R = R.keyPath, K = { name: O, compound: S(R), keyPath: R, unique: D, multiEntry: K, extractKey: Or(R) };
            return E[_n(R)] = K;
          }), getIndexByKeyPath: function(C) {
            return E[_n(C)];
          } };
          return E[":id"] = x.primaryKey, v != null && (E[_n(v)] = x.primaryKey), x;
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
            (!p || "value" in p && p.value === void 0) && (f === e.Transaction.prototype || f instanceof e.Transaction ? he(f, s, { get: function() {
              return this.table(s);
            }, set: function(m) {
              se(this, s, { value: m, writable: !0, configurable: !0, enumerable: !0 });
            } }) : f[s] = new e.Table(s, c));
          });
        });
      }
      function Nr(e, t) {
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
            return T = _, v = c, b = r, E = [], _ = (h = e)._versions, x = h._dbSchema = Yn(0, h.idbdb, b), (_ = _.filter(function(C) {
              return C._cfg.version >= T;
            })).length !== 0 ? (_.forEach(function(C) {
              E.push(function() {
                var O = x, D = C._cfg.dbschema;
                Qn(h, O, b), Qn(h, D, b), x = h._dbSchema = D;
                var R = Dr(O, D);
                R.add.forEach(function(z) {
                  Rr(b, z[0], z[1].primKey, z[1].indexes);
                }), R.change.forEach(function(z) {
                  if (z.recreate) throw new j.Upgrade("Not yet support for changing primary key");
                  var X = b.objectStore(z.name);
                  z.add.forEach(function(ee) {
                    return Wn(X, ee);
                  }), z.change.forEach(function(ee) {
                    X.deleteIndex(ee.name), Wn(X, ee);
                  }), z.del.forEach(function(ee) {
                    return X.deleteIndex(ee);
                  });
                });
                var K = C._cfg.contentUpgrade;
                if (K && C._cfg.version > T) {
                  Gn(h, b), v._memoizedTables = {};
                  var Y = Ee(D);
                  R.del.forEach(function(z) {
                    Y[z] = O[z];
                  }), Nr(h, [h.Transaction.prototype]), Hn(h, [h.Transaction.prototype], y(Y), Y), v.schema = Y;
                  var U, H = at(K);
                  return H && an(), R = J.follow(function() {
                    var z;
                    (U = K(v)) && H && (z = Nt.bind(null, null), U.then(z, z));
                  }), U && typeof U.then == "function" ? J.resolve(U) : R.then(function() {
                    return U;
                  });
                }
              }), E.push(function(O) {
                var D, R, K = C._cfg.dbschema;
                D = K, R = O, [].slice.call(R.db.objectStoreNames).forEach(function(Y) {
                  return D[Y] == null && R.db.deleteObjectStore(Y);
                }), Nr(h, [h.Transaction.prototype]), Hn(h, [h.Transaction.prototype], h._storeNames, h._dbSchema), v.schema = h._dbSchema;
              }), E.push(function(O) {
                h.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(h.idbdb.version / 10) === C._cfg.version ? (h.idbdb.deleteObjectStore("$meta"), delete h._dbSchema.$meta, h._storeNames = h._storeNames.filter(function(D) {
                  return D !== "$meta";
                })) : O.objectStore("$meta").put(C._cfg.version, "version"));
              });
            }), function C() {
              return E.length ? J.resolve(E.shift()(v.idbtrans)).then(C) : J.resolve();
            }().then(function() {
              Ii(x, b);
            })) : J.resolve();
            var h, T, v, b, E, x;
          }).catch(f)) : (y(s).forEach(function(_) {
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
        for (var o = 0, s = Dr(r, e._dbSchema).change; o < s.length; o++) {
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
      function Dr(e, t) {
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
        y(e).forEach(function(r) {
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
          return Pr(s, c || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), S(c), r === 0, o);
        });
      }
      var rs = (fn.prototype._createTableSchema = Ir, fn.prototype._parseIndexSyntax = Oi, fn.prototype._parseStoresSpec = function(e, t) {
        var r = this;
        y(e).forEach(function(o) {
          if (e[o] !== null) {
            var s = r._parseIndexSyntax(e[o]), c = s.shift();
            if (!c) throw new j.Schema("Invalid schema for table " + o + ": " + e[o]);
            if (c.unique = !0, c.multi) throw new j.Schema("Primary key cannot be multiEntry*");
            s.forEach(function(f) {
              if (f.auto) throw new j.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!f.keyPath) throw new j.Schema("Index must have a name and cannot be an empty string");
            }), s = r._createTableSchema(o, c, s), t[o] = s;
          }
        });
      }, fn.prototype.stores = function(r) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? N(this._cfg.storesSource, r) : r;
        var r = t._versions, o = {}, s = {};
        return r.forEach(function(c) {
          N(o, c._cfg.storesSource), s = c._cfg.dbschema = {}, c._parseStoresSpec(o, s);
        }), t._dbSchema = s, Nr(t, [t._allTables, t, t.Transaction.prototype]), Hn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], y(s), s), t._storeNames = y(s), this;
      }, fn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = te(this._cfg.contentUpgrade || A, e), this;
      }, fn);
      function fn() {
      }
      function kr(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new Et(Bn, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function jr(e) {
        return e && typeof e.databases == "function";
      }
      function Fr(e) {
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
          return e && "d" in e && N(r, e), r;
        }
        N(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function Sn(e, t, r) {
        var o = ve(t, r);
        if (!isNaN(o)) {
          if (0 < o) throw RangeError();
          if (Lr(e)) return N(e, { from: t, to: r, d: 1 });
          var s = e.l, o = e.r;
          if (ve(r, e.from) < 0) return s ? Sn(s, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, Di(e);
          if (0 < ve(t, e.to)) return o ? Sn(o, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, Di(e);
          ve(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < ve(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, s && !e.l && xn(e, s), o && r && xn(e, o);
        }
      }
      function xn(e, t) {
        Lr(t) || function r(o, m) {
          var c = m.from, f = m.to, p = m.l, m = m.r;
          Sn(o, c, f), p && r(o, p), m && r(o, m);
        }(e, t);
      }
      function Ni(e, t) {
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
      function Di(e) {
        var t, r, o = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((r = e.l) === null || r === void 0 ? void 0 : r.d) || 0), s = 1 < o ? "r" : o < -1 ? "l" : "";
        s && (t = s == "r" ? "l" : "r", r = u({}, e), o = e[s], e.from = o.from, e.to = o.to, e[s] = o[s], r[s] = o[t], (e[t] = r).d = Ri(r)), e.d = Ri(e);
      }
      function Ri(r) {
        var t = r.r, r = r.l;
        return (t ? r ? Math.max(t.d, r.d) : t.d : r ? r.d : 0) + 1;
      }
      function zn(e, t) {
        return y(t).forEach(function(r) {
          e[r] ? xn(e[r], t[r]) : e[r] = function o(s) {
            var c, f, p = {};
            for (c in s) G(s, c) && (f = s[c], p[c] = !f || typeof f != "object" || rt.has(f.constructor) ? f : o(f));
            return p;
          }(t[r]);
        }), e;
      }
      function Mr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && Ni(t[r], e[r]);
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
      var Wt = {}, Br = {}, Kr = !1;
      function Jn(e) {
        zn(Br, e), Kr || (Kr = !0, setTimeout(function() {
          Kr = !1, qr(Br, !(Br = {}));
        }, 0));
      }
      function qr(e, t) {
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
            Mr(t, T.obsSet) ? T.subscribers.forEach(function(x) {
              return r.add(x);
            }) : o && g.push(T);
          }
          o && s.push([m, g]);
        }
        if (o) for (var v = 0, b = s; v < b.length; v++) {
          var E = b[v], m = E[0], g = E[1];
          e.queries.query[m] = g;
        }
      }
      function is(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? Fe(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, s = Math.round(10 * e.verno), c = !1;
        function f() {
          if (t.openCanceller !== o) throw new j.DatabaseClosed("db.open() was cancelled");
        }
        function p() {
          return new J(function(T, v) {
            if (f(), !r) throw new j.MissingAPI();
            var b = e.name, E = t.autoSchema || !s ? r.open(b) : r.open(b, s);
            if (!E) throw new j.MissingAPI();
            E.onerror = yt(v), E.onblocked = Oe(e._fireOnBlocked), E.onupgradeneeded = Oe(function(x) {
              var C;
              _ = E.transaction, t.autoSchema && !e._options.allowEmptyDB ? (E.onerror = gn, _.abort(), E.result.close(), (C = r.deleteDatabase(b)).onsuccess = C.onerror = Oe(function() {
                v(new j.NoSuchDatabase("Database ".concat(b, " doesnt exist")));
              })) : (_.onerror = yt(v), x = x.oldVersion > Math.pow(2, 62) ? 0 : x.oldVersion, h = x < 1, e.idbdb = E.result, c && ns(e, _), ts(e, x / 10, _, v));
            }, v), E.onsuccess = Oe(function() {
              _ = null;
              var x, C, O, D, R, K = e.idbdb = E.result, Y = ye(K.objectStoreNames);
              if (0 < Y.length) try {
                var U = K.transaction((D = Y).length === 1 ? D[0] : D, "readonly");
                if (t.autoSchema) C = K, O = U, (x = e).verno = C.version / 10, O = x._dbSchema = Yn(0, C, O), x._storeNames = ye(C.objectStoreNames, 0), Hn(x, [x._allTables], y(O), O);
                else if (Qn(e, e._dbSchema, U), ((R = Dr(Yn(0, (R = e).idbdb, U), R._dbSchema)).add.length || R.change.some(function(H) {
                  return H.add.length || H.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), K.close(), s = K.version + 1, c = !0, T(p());
                Gn(e, U);
              } catch {
              }
              un.push(e), K.onversionchange = Oe(function(H) {
                t.vcFired = !0, e.on("versionchange").fire(H);
              }), K.onclose = Oe(function(H) {
                e.on("close").fire(H);
              }), h && (R = e._deps, U = b, K = R.indexedDB, R = R.IDBKeyRange, jr(K) || U === Bn || kr(K, R).put({ name: U }).catch(A)), T();
            }, v);
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
          function v() {
            return indexedDB.databases().finally(T);
          }
          m = setInterval(v, 100), v();
        }).finally(function() {
          return clearInterval(m);
        }) : Promise.resolve()).then(p)]).then(function() {
          return f(), t.onReadyBeingFired = [], J.resolve(Fr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function T() {
            if (0 < t.onReadyBeingFired.length) {
              var v = t.onReadyBeingFired.reduce(te, A);
              return t.onReadyBeingFired = [], J.resolve(Fr(function() {
                return v(e.vip);
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
          return o === t.openCanceller && e._close(), Fe(T);
        }).finally(function() {
          t.openComplete = !0, g();
        }).then(function() {
          var T;
          return h && (T = {}, e.tables.forEach(function(v) {
            v.schema.indexes.forEach(function(b) {
              b.name && (T["idb://".concat(e.name, "/").concat(v.name, "/").concat(b.name)] = new He(-1 / 0, [[[]]]));
            }), T["idb://".concat(e.name, "/").concat(v.name, "/")] = T["idb://".concat(e.name, "/").concat(v.name, "/:dels")] = new He(-1 / 0, [[[]]]);
          }), kt(bn).fire(T), qr(T, !0)), e;
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
            return p.done ? m : m && typeof m.then == "function" ? m.then(r, o) : S(m) ? Promise.all(m).then(r, o) : r(m);
          };
        }
        return s(t)();
      }
      function Zn(e, t, r) {
        for (var o = S(e) ? e.slice() : [e], s = 0; s < r; ++s) o.push(t);
        return o;
      }
      var os = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema, s = {}, c = [];
          function f(h, T, v) {
            var b = _n(h), E = s[b] = s[b] || [], x = h == null ? 0 : typeof h == "string" ? 1 : h.length, C = 0 < T, C = u(u({}, v), { name: C ? "".concat(b, "(virtual-from:").concat(v.name, ")") : v.name, lowLevelIndex: v, isVirtual: C, keyTail: T, keyLength: x, extractKey: Or(h), unique: !C && v.unique });
            return E.push(C), C.isPrimaryKey || c.push(C), 1 < x && f(x === 2 ? h[0] : h.slice(0, x - 1), T + 1, v), E.sort(function(O, D) {
              return O.keyTail - D.keyTail;
            }), C;
          }
          t = f(o.primaryKey.keyPath, 0, o.primaryKey), s[":id"] = [t];
          for (var p = 0, m = o.indexes; p < m.length; p++) {
            var g = m[p];
            f(g.keyPath, 0, g);
          }
          function _(h) {
            var T, v = h.query.index;
            return v.isVirtual ? u(u({}, h), { query: { index: v.lowLevelIndex, range: (T = h.query.range, v = v.keyTail, { type: T.type === 1 ? 2 : T.type, lower: Zn(T.lower, T.lowerOpen ? e.MAX_KEY : e.MIN_KEY, v), lowerOpen: !0, upper: Zn(T.upper, T.upperOpen ? e.MIN_KEY : e.MAX_KEY, v), upperOpen: !0 }) } }) : h;
          }
          return u(u({}, r), { schema: u(u({}, o), { primaryKey: t, indexes: c, getIndexByKeyPath: function(h) {
            return (h = s[_n(h)]) && h[0];
          } }), count: function(h) {
            return r.count(_(h));
          }, query: function(h) {
            return r.query(_(h));
          }, openCursor: function(h) {
            var T = h.query.index, v = T.keyTail, b = T.isVirtual, E = T.keyLength;
            return b ? r.openCursor(_(h)).then(function(C) {
              return C && x(C);
            }) : r.openCursor(h);
            function x(C) {
              return Object.create(C, { continue: { value: function(O) {
                O != null ? C.continue(Zn(O, h.reverse ? e.MAX_KEY : e.MIN_KEY, v)) : h.unique ? C.continue(C.key.slice(0, E).concat(h.reverse ? e.MIN_KEY : e.MAX_KEY, v)) : C.continue();
              } }, continuePrimaryKey: { value: function(O, D) {
                C.continuePrimaryKey(Zn(O, e.MAX_KEY, v), D);
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
        return r = r || {}, o = o || "", y(e).forEach(function(s) {
          var c, f, p;
          G(t, s) ? (c = e[s], f = t[s], typeof c == "object" && typeof f == "object" && c && f ? (p = wt(c)) !== wt(f) ? r[o + s] = t[s] : p === "Object" ? Vr(c, f, r, o + s + ".") : c !== f && (r[o + s] = t[s]) : c !== f && (r[o + s] = t[s])) : r[o + s] = void 0;
        }), y(t).forEach(function(s) {
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
                  return function h(T, v, b) {
                    return r.query({ trans: T, values: !1, query: { index: o, range: v }, limit: b }).then(function(E) {
                      var x = E.result;
                      return _({ type: "delete", keys: x, trans: T }).then(function(C) {
                        return 0 < C.numFailures ? Promise.reject(C.failures[0]) : x.length < b ? { failures: [], numFailures: 0, lastResult: void 0 } : h(T, u(u({}, v), { lower: x[x.length - 1], lowerOpen: !0 }), b);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return r.mutate(s);
            function _(h) {
              var T, v, b, E = ne.trans, x = h.keys || Ur(o, h);
              if (!x) throw new Error("Keys missing");
              return (h = h.type === "add" || h.type === "put" ? u(u({}, h), { keys: x }) : u({}, h)).type !== "delete" && (h.values = l([], h.values)), h.keys && (h.keys = l([], h.keys)), T = r, b = x, ((v = h).type === "add" ? Promise.resolve([]) : T.getMany({ trans: v.trans, keys: b, cache: "immutable" })).then(function(C) {
                var O = x.map(function(D, R) {
                  var K, Y, U, H = C[R], z = { onerror: null, onsuccess: null };
                  return h.type === "delete" ? p.fire.call(z, D, H, E) : h.type === "add" || H === void 0 ? (K = m.fire.call(z, D, h.values[R], E), D == null && K != null && (h.keys[R] = D = K, o.outbound || oe(h.values[R], o.keyPath, D))) : (K = Vr(H, h.values[R]), (Y = g.fire.call(z, K, D, H, E)) && (U = h.values[R], Object.keys(Y).forEach(function(X) {
                    G(U, X) ? U[X] = Y[X] : oe(U, X, Y[X]);
                  }))), z;
                });
                return r.mutate(h).then(function(D) {
                  for (var R = D.failures, K = D.results, Y = D.numFailures, D = D.lastResult, U = 0; U < x.length; ++U) {
                    var H = (K || x)[U], z = O[U];
                    H == null ? z.onerror && z.onerror(R[U]) : z.onsuccess && z.onsuccess(h.type === "put" && C[U] ? h.values[U] : H);
                  }
                  return { failures: R, results: K, numFailures: Y, lastResult: D };
                }).catch(function(D) {
                  return O.forEach(function(R) {
                    return R.onerror && R.onerror(D);
                  }), Promise.reject(D);
                });
              });
            }
          } });
        } });
      } };
      function ji(e, t, r) {
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
            var s = ji(o.keys, o.trans._cache, o.cache === "clone");
            return s ? J.resolve(s) : r.getMany(o).then(function(c) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? Ge(c) : c }, c;
            });
          }, mutate: function(o) {
            return o.type !== "add" && (o.trans._cache = null), r.mutate(o);
          } });
        } };
      } };
      function Fi(e, t) {
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
          if (ne.subscr && s !== "readonly") throw new j.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ne.querier));
          return e.transaction(o, s, c);
        }, table: function(o) {
          var s = e.table(o), c = s.schema, f = c.primaryKey, h = c.indexes, p = f.extractKey, m = f.outbound, g = f.autoIncrement && h.filter(function(v) {
            return v.compound && v.keyPath.includes(f.keyPath);
          }), _ = u(u({}, s), { mutate: function(v) {
            function b(X) {
              return X = "idb://".concat(t, "/").concat(o, "/").concat(X), D[X] || (D[X] = new He());
            }
            var E, x, C, O = v.trans, D = v.mutatedParts || (v.mutatedParts = {}), R = b(""), K = b(":dels"), Y = v.type, z = v.type === "deleteRange" ? [v.range] : v.type === "delete" ? [v.keys] : v.values.length < 50 ? [Ur(f, v).filter(function(X) {
              return X;
            }), v.values] : [], U = z[0], H = z[1], z = v.trans._cache;
            return S(U) ? (R.addKeys(U), (z = Y === "delete" || U.length === H.length ? ji(U, z) : null) || K.addKeys(U), (z || H) && (E = b, x = z, C = H, c.indexes.forEach(function(X) {
              var ee = E(X.name || "");
              function fe(le) {
                return le != null ? X.extractKey(le) : null;
              }
              function ge(le) {
                return X.multiEntry && S(le) ? le.forEach(function(Re) {
                  return ee.addKey(Re);
                }) : ee.addKey(le);
              }
              (x || C).forEach(function(le, We) {
                var ue = x && fe(x[We]), We = C && fe(C[We]);
                ve(ue, We) !== 0 && (ue != null && ge(ue), We != null && ge(We));
              });
            }))) : U ? (H = { from: (H = U.lower) !== null && H !== void 0 ? H : e.MIN_KEY, to: (H = U.upper) !== null && H !== void 0 ? H : e.MAX_KEY }, K.add(H), R.add(H)) : (R.add(r), K.add(r), c.indexes.forEach(function(X) {
              return b(X.name).add(r);
            })), s.mutate(v).then(function(X) {
              return !U || v.type !== "add" && v.type !== "put" || (R.addKeys(X.results), g && g.forEach(function(ee) {
                for (var fe = v.values.map(function(ue) {
                  return ee.extractKey(ue);
                }), ge = ee.keyPath.findIndex(function(ue) {
                  return ue === f.keyPath;
                }), le = 0, Re = X.results.length; le < Re; ++le) fe[le][ge] = X.results[le];
                b(ee.name).addKeys(fe);
              })), O.mutatedParts = zn(O.mutatedParts || {}, D), X;
            });
          } }), h = function(b) {
            var E = b.query, b = E.index, E = E.range;
            return [b, new He((b = E.lower) !== null && b !== void 0 ? b : e.MIN_KEY, (E = E.upper) !== null && E !== void 0 ? E : e.MAX_KEY)];
          }, T = { get: function(v) {
            return [f, new He(v.key)];
          }, getMany: function(v) {
            return [f, new He().addKeys(v.keys)];
          }, count: h, query: h, openCursor: h };
          return y(T).forEach(function(v) {
            _[v] = function(b) {
              var E = ne.subscr, x = !!E, C = Fi(ne, s) && Li(v, b) ? b.obsSet = {} : E;
              if (x) {
                var O = function(H) {
                  return H = "idb://".concat(t, "/").concat(o, "/").concat(H), C[H] || (C[H] = new He());
                }, D = O(""), R = O(":dels"), E = T[v](b), x = E[0], E = E[1];
                if ((v === "query" && x.isPrimaryKey && !b.values ? R : O(x.name || "")).add(E), !x.isPrimaryKey) {
                  if (v !== "count") {
                    var K = v === "query" && m && b.values && s.query(u(u({}, b), { values: !1 }));
                    return s[v].apply(this, arguments).then(function(H) {
                      if (v === "query") {
                        if (m && b.values) return K.then(function(fe) {
                          return fe = fe.result, D.addKeys(fe), H;
                        });
                        var z = b.values ? H.result.map(p) : H.result;
                        (b.values ? D : R).addKeys(z);
                      } else if (v === "openCursor") {
                        var X = H, ee = b.values;
                        return X && Object.create(X, { key: { get: function() {
                          return R.addKey(X.primaryKey), X.key;
                        } }, primaryKey: { get: function() {
                          var fe = X.primaryKey;
                          return R.addKey(fe), fe;
                        } }, value: { get: function() {
                          return ee && D.addKey(X.primaryKey), X.value;
                        } } });
                      }
                      return H;
                    });
                  }
                  R.add(r);
                }
              }
              return s[v].apply(this, arguments);
            };
          }), _;
        } });
      } };
      function Mi(e, t, r) {
        if (r.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var o = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return r.numFailures === o ? null : (t = u({}, t), S(t.keys) && (t.keys = t.keys.filter(function(s, c) {
          return !(c in r.failures);
        })), "values" in t && S(t.values) && (t.values = t.values.filter(function(s, c) {
          return !(c in r.failures);
        })), t);
      }
      function Gr(e, t) {
        return r = e, ((o = t).lower === void 0 || (o.lowerOpen ? 0 < ve(r, o.lower) : 0 <= ve(r, o.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? ve(e, t.upper) < 0 : ve(e, t.upper) <= 0));
        var r, o;
      }
      function Bi(e, t, T, o, s, c) {
        if (!T || T.length === 0) return e;
        var f = t.query.index, p = f.multiEntry, m = t.query.range, g = o.schema.primaryKey.extractKey, _ = f.extractKey, h = (f.lowLevelIndex || f).extractKey, T = T.reduce(function(v, b) {
          var E = v, x = [];
          if (b.type === "add" || b.type === "put") for (var C = new He(), O = b.values.length - 1; 0 <= O; --O) {
            var D, R = b.values[O], K = g(R);
            C.hasKey(K) || (D = _(R), (p && S(D) ? D.some(function(X) {
              return Gr(X, m);
            }) : Gr(D, m)) && (C.addKey(K), x.push(R)));
          }
          switch (b.type) {
            case "add":
              var Y = new He().addKeys(t.values ? v.map(function(ee) {
                return g(ee);
              }) : v), E = v.concat(t.values ? x.filter(function(ee) {
                return ee = g(ee), !Y.hasKey(ee) && (Y.addKey(ee), !0);
              }) : x.map(function(ee) {
                return g(ee);
              }).filter(function(ee) {
                return !Y.hasKey(ee) && (Y.addKey(ee), !0);
              }));
              break;
            case "put":
              var U = new He().addKeys(b.values.map(function(ee) {
                return g(ee);
              }));
              E = v.filter(function(ee) {
                return !U.hasKey(t.values ? g(ee) : ee);
              }).concat(t.values ? x : x.map(function(ee) {
                return g(ee);
              }));
              break;
            case "delete":
              var H = new He().addKeys(b.keys);
              E = v.filter(function(ee) {
                return !H.hasKey(t.values ? g(ee) : ee);
              });
              break;
            case "deleteRange":
              var z = b.range;
              E = v.filter(function(ee) {
                return !Gr(g(ee), z);
              });
          }
          return E;
        }, e);
        return T === e ? e : (T.sort(function(v, b) {
          return ve(h(v), h(b)) || ve(g(v), g(b));
        }), t.limit && t.limit < 1 / 0 && (T.length > t.limit ? T.length = t.limit : e.length === t.limit && T.length < t.limit && (s.dirty = !0)), c ? Object.freeze(T) : T);
      }
      function Ki(e, t) {
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
                  var T = h[_], v = Wt["idb://".concat(t, "/").concat(T)];
                  if (v) {
                    var b = e.table(T), E = v.optimisticOps.filter(function(ee) {
                      return ee.trans === p;
                    });
                    if (p._explicit && m && p.mutatedParts) for (var x = 0, C = Object.values(v.queries.query); x < C.length; x++) for (var O = 0, D = (Y = C[x]).slice(); O < D.length; O++) Mr((U = D[O]).obsSet, p.mutatedParts) && (Pe(Y, U), U.subscribers.forEach(function(ee) {
                      return g.add(ee);
                    }));
                    else if (0 < E.length) {
                      v.optimisticOps = v.optimisticOps.filter(function(ee) {
                        return ee.trans !== p;
                      });
                      for (var R = 0, K = Object.values(v.queries.query); R < K.length; R++) for (var Y, U, H, z = 0, X = (Y = K[R]).slice(); z < X.length; z++) (U = X[z]).res != null && p.mutatedParts && (m && !U.dirty ? (H = Object.isFrozen(U.res), H = Bi(U.res, U.req, E, b, U, H), U.dirty ? (Pe(Y, U), U.subscribers.forEach(function(ee) {
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
            if (!Fi(ne, o) || !Li("query", c)) return o.query(c);
            var f = ((g = ne.trans) === null || g === void 0 ? void 0 : g.db._options.cache) === "immutable", h = ne, p = h.requery, m = h.signal, g = function(b, E, x, C) {
              var O = Wt["idb://".concat(b, "/").concat(E)];
              if (!O) return [];
              if (!(E = O.queries[x])) return [null, !1, O, null];
              var D = E[(C.query ? C.query.index.name : null) || ""];
              if (!D) return [null, !1, O, null];
              switch (x) {
                case "query":
                  var R = D.find(function(K) {
                    return K.req.limit === C.limit && K.req.values === C.values && Ki(K.req.query.range, C.query.range);
                  });
                  return R ? [R, !0, O, D] : [D.find(function(K) {
                    return ("limit" in K.req ? K.req.limit : 1 / 0) >= C.limit && (!C.values || K.req.values) && cs(K.req.query.range, C.query.range);
                  }), !1, O, D];
                case "count":
                  return R = D.find(function(K) {
                    return Ki(K.req.query.range, C.query.range);
                  }), [R, !!R, O, D];
              }
            }(t, r, "query", c), _ = g[0], h = g[1], T = g[2], v = g[3];
            return _ && h ? _.obsSet = c.obsSet : (h = o.query(c).then(function(b) {
              var E = b.result;
              if (_ && (_.res = E), f) {
                for (var x = 0, C = E.length; x < C; ++x) Object.freeze(E[x]);
                Object.freeze(E);
              } else b.result = Ge(E);
              return b;
            }).catch(function(b) {
              return v && _ && Pe(v, _), Promise.reject(b);
            }), _ = { obsSet: c.obsSet, promise: h, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, v ? v.push(_) : (v = [_], (T = T || (Wt["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = v)), ls(_, v, p, m), _.promise.then(function(b) {
              return { result: Bi(b.result, c, T?.optimisticOps, o, _, f) };
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
        if (isNaN(e) || e < 0.1) throw new j.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new j.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(es), r.stores({}), this._state.autoSchema = !1, r);
      }, Le.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || ne.letThrough || this._vip) ? e() : new J(function(r, o) {
          if (t._state.openComplete) return o(new j.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new j.DatabaseClosed());
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
        t ? (r.isBeingOpened && r.cancelOpen(new j.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new j.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
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
              m = t._deps, g = t.name, _ = m.indexedDB, m = m.IDBKeyRange, jr(_) || g === Bn || kr(_, m).delete(g).catch(A), s();
            }), p.onerror = yt(c), p.onblocked = t._fireOnBlocked;
          }
          if (r) throw new j.InvalidArgument("Invalid closeOptions argument to db.delete()");
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
        return y(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), Le.prototype.transaction = function() {
        var e = (function(t, r, o) {
          var s = arguments.length;
          if (s < 2) throw new j.InvalidArgument("Too few arguments");
          for (var c = new Array(s - 1); --s; ) c[s - 1] = arguments[s];
          return o = c.pop(), [t, it(c), o];
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
            if (e != "rw" && e != Er) throw new j.InvalidArgument("Invalid transaction mode: " + e);
            c = Er;
          }
          if (s) {
            if (s.mode === xr && c === Er) {
              if (!p) throw new j.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              s = null;
            }
            s && f.forEach(function(g) {
              if (s && s.storeNames.indexOf(g) === -1) {
                if (!p) throw new j.SubTransaction("Table " + g + " not included in parent transaction.");
                s = null;
              }
            }), p && s && !s.active && (s = null);
          }
        } catch (g) {
          return s ? s._promise(null, function(_, h) {
            h(g);
          }) : Fe(g);
        }
        var m = (function g(_, h, T, v, b) {
          return J.resolve().then(function() {
            var E = ne.transless || ne, x = _._createTransaction(h, T, _._dbSchema, v);
            if (x.explicit = !0, E = { trans: x, transless: E }, v) x.idbtrans = v.idbtrans;
            else try {
              x.create(), x.idbtrans._explicit = !0, _._state.PR1398_maxLoop = 3;
            } catch (D) {
              return D.name === P.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                return g(_, h, T, null, b);
              })) : Fe(D);
            }
            var C, O = at(b);
            return O && an(), E = J.follow(function() {
              var D;
              (C = b.call(x, x)) && (O ? (D = Nt.bind(null, null), C.then(D, D)) : typeof C.next == "function" && typeof C.throw == "function" && (C = $r(C)));
            }, E), (C && typeof C.then == "function" ? J.resolve(C).then(function(D) {
              return x.active ? D : Fe(new j.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : E.then(function() {
              return C;
            })).then(function(D) {
              return v && x._resolve(), x._completion.then(function() {
                return D;
              });
            }).catch(function(D) {
              return x._reject(D), Fe(D);
            });
          });
        }).bind(null, this, c, f, s, r);
        return s ? s._promise(c, m, "lock") : ne.trans ? Ut(ne.transless, function() {
          return o._whenReady(m);
        }) : this._whenReady(m);
      }, Le.prototype.table = function(e) {
        if (!G(this._allTables, e)) throw new j.InvalidTable("Table ".concat(e, " does not exist"));
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
          var v = function() {
            for (var b = [], E = 0; E < arguments.length; E++) b[E] = arguments[E];
            r.on(h).unsubscribe(v), T.apply(r, b);
          };
          return r.on(h, v);
        }, this.on.ready.subscribe = ke(this.on.ready.subscribe, function(h) {
          return function(T, v) {
            Le.vip(function() {
              var b, E = r._state;
              E.openComplete ? (E.dbOpenError || J.resolve().then(T), v && h(T)) : E.onReadyBeingFired ? (E.onReadyBeingFired.push(T), v && h(T)) : (h(T), b = r, v || h(function x() {
                b.on.ready.unsubscribe(T), b.on.ready.unsubscribe(x);
              }));
            });
          };
        }), this.Collection = (s = this, yn(Wo.prototype, function(C, x) {
          this.db = s;
          var v = yi, b = null;
          if (x) try {
            v = x();
          } catch (O) {
            b = O;
          }
          var E = C._ctx, x = E.table, C = x.hook.reading.fire;
          this._ctx = { table: x, index: E.index, isPrimKey: !E.index || x.schema.primKey.keyPath && E.index === x.schema.primKey.name, range: v, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: b, or: E.or, valueMapper: C !== L ? C : null };
        })), this.Table = (c = this, yn(wi.prototype, function(h, T, v) {
          this.db = c, this._tx = v, this.name = h, this.schema = T, this.hook = c._allTables[h] ? c._allTables[h].hook : mn(null, { creating: [k, A], reading: [Z, L], updating: [V, A], deleting: [F, A] });
        })), this.Transaction = (f = this, yn(Xo.prototype, function(h, T, v, b, E) {
          var x = this;
          h !== "readonly" && T.forEach(function(C) {
            C = (C = v[C]) === null || C === void 0 ? void 0 : C.yProps, C && (T = T.concat(C.map(function(O) {
              return O.updatesTable;
            })));
          }), this.db = f, this.mode = h, this.storeNames = T, this.schema = v, this.chromeTransactionDurability = b, this.idbtrans = null, this.on = mn(this, "complete", "error", "abort"), this.parent = E || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new J(function(C, O) {
            x._resolve = C, x._reject = O;
          }), this._completion.then(function() {
            x.active = !1, x.on.complete.fire();
          }, function(C) {
            var O = x.active;
            return x.active = !1, x.on.error.fire(C), x.parent ? x.parent._reject(C) : O && x.idbtrans && x.idbtrans.abort(), Fe(C);
          });
        })), this.Version = (p = this, yn(rs.prototype, function(h) {
          this.db = p, this._cfg = { version: h, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (m = this, yn(Ci.prototype, function(h, T, v) {
          if (this.db = m, this._ctx = { table: h, index: T === ":id" ? null : T, or: v }, this._cmp = this._ascending = ve, this._descending = function(b, E) {
            return ve(E, b);
          }, this._max = function(b, E) {
            return 0 < ve(b, E) ? b : E;
          }, this._min = function(b, E) {
            return ve(b, E) < 0 ? b : E;
          }, this._IDBKeyRange = m._deps.IDBKeyRange, !this._IDBKeyRange) throw new j.MissingAPI();
        })), this.on("versionchange", function(h) {
          0 < h.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(h) {
          !h.newVersion || h.newVersion < h.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(h.oldVersion / 10));
        }), this._maxKey = wn(t.IDBKeyRange), this._createTransaction = function(h, T, v, b) {
          return new r.Transaction(h, T, v, r._options.chromeTransactionDurability, b);
        }, this._fireOnBlocked = function(h) {
          r.on("blocked").fire(h), un.filter(function(T) {
            return T.name === r.name && T !== r && !T._state.vcFired;
          }).map(function(T) {
            return T.on("versionchange").fire(h);
          });
        }, this.use(as), this.use(fs), this.use(us), this.use(os), this.use(ss);
        var _ = new Proxy(this, { get: function(h, T, v) {
          if (T === "_vip") return !0;
          if (T === "table") return function(E) {
            return er(r.table(E), _);
          };
          var b = Reflect.get(h, T, v);
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
      function qi(e) {
        var t, r = !1, o = new ds(function(s) {
          var c = at(e), f, p = !1, m = {}, g = {}, _ = { get closed() {
            return p;
          }, unsubscribe: function() {
            p || (p = !0, f && f.abort(), h && kt.storagemutated.unsubscribe(v));
          } };
          s.start && s.start(_);
          var h = !1, T = function() {
            return Sr(b);
          }, v = function(E) {
            zn(m, E), Mr(g, m) && T();
          }, b = function() {
            var E, x, C;
            !p && tr.indexedDB && (m = {}, E = {}, f && f.abort(), f = new AbortController(), C = function(O) {
              var D = on();
              try {
                c && an();
                var R = Ot(e, O);
                return R = c ? R.finally(Nt) : R;
              } finally {
                D && sn();
              }
            }(x = { subscr: E, signal: f.signal, requery: T, querier: e, trans: null }), Promise.resolve(C).then(function(O) {
              r = !0, t = O, p || x.signal.aborted || (m = {}, function(D) {
                for (var R in D) if (G(D, R)) return;
                return 1;
              }(g = E) || h || (kt(bn, v), h = !0), Sr(function() {
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
        var t = jt;
        try {
          jt = !0, kt.storagemutated.fire(e), qr(e, !0);
        } finally {
          jt = t;
        }
      }
      re(Yt, u(u({}, Ne), { delete: function(e) {
        return new Yt(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new Yt(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = Yt.dependencies, r = t.indexedDB, t = t.IDBKeyRange, (jr(r) ? Promise.resolve(r.databases()).then(function(o) {
            return o.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== Bn;
            });
          }) : kr(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return Fe(new j.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          N(this, e);
        };
      }, ignoreTransaction: function(e) {
        return ne.trans ? Ut(ne.transless, e) : e();
      }, vip: Fr, async: function(e) {
        return function() {
          try {
            var t = $r(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : J.resolve(t);
          } catch (r) {
            return Fe(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = $r(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : J.resolve(o);
        } catch (s) {
          return Fe(s);
        }
      }, currentTransaction: { get: function() {
        return ne.trans || null;
      } }, waitFor: function(e, t) {
        return t = J.resolve(typeof e == "function" ? Yt.ignoreTransaction(e) : e).timeout(t || 6e4), ne.trans ? ne.trans.waitFor(t) : t;
      }, Promise: J, debug: { get: function() {
        return Q;
      }, set: function(e) {
        me(e);
      } }, derive: de, extend: N, props: re, override: ke, Events: mn, on: kt, liveQuery: qi, extendObservabilitySet: zn, getByKeyPath: ie, setByKeyPath: oe, delByKeyPath: function(e, t) {
        typeof t == "string" ? oe(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          oe(e, r, void 0);
        });
      }, shallowClone: Ee, deepClone: Ge, getObjectDiff: Vr, cmp: ve, asap: je, minKey: -1 / 0, addons: [], connections: un, errnames: P, dependencies: tr, cache: Wt, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), Yt.maxKey = wn(Yt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (kt(bn, function(e) {
        jt || (e = new CustomEvent(Ar, { detail: e }), jt = !0, dispatchEvent(e), jt = !1);
      }), addEventListener(Ar, function(e) {
        e = e.detail, jt || Wr(e);
      }));
      var hn, jt = !1, $i = function() {
      };
      return typeof BroadcastChannel < "u" && (($i = function() {
        (hn = new BroadcastChannel(Ar)).onmessage = function(e) {
          return e.data && Wr(e.data);
        };
      })(), typeof hn.unref == "function" && hn.unref(), kt(bn, function(e) {
        jt || hn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Et.disableBfCache && e.persisted) {
          Q && console.debug("Dexie: handling persisted pagehide"), hn?.close();
          for (var t = 0, r = un; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Et.disableBfCache && e.persisted && (Q && console.debug("Dexie: handling persisted pageshow"), $i(), Wr({ all: new He(-1 / 0, [[]]) }));
      })), J.rejectionMapper = function(e, t) {
        return !e || e instanceof ht || e instanceof TypeError || e instanceof SyntaxError || !e.name || !$[e.name] ? e : (t = new $[e.name](t || e.message, e), "stack" in e && he(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, me(Q), u(Et, Object.freeze({ __proto__: null, Dexie: Et, liveQuery: qi, Entity: vi, cmp: ve, PropModification: vn, replacePrefix: function(e, t) {
        return new vn({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new vn({ add: e });
      }, remove: function(e) {
        return new vn({ remove: e });
      }, default: Et, RangeSet: He, mergeRanges: xn, rangesOverlap: Ni }), { default: Et }), Et;
    });
  }(Ls)), Ls.exports;
}
var _d = wd();
const Ms = /* @__PURE__ */ pd(_d), Xa = Symbol.for("Dexie"), No = globalThis[Xa] || (globalThis[Xa] = Ms);
if (Ms.semVer !== No.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Ms.semVer} and ${No.semVer}`);
const {
  liveQuery: Ph,
  mergeRanges: Ih,
  rangesOverlap: Oh,
  RangeSet: Nh,
  cmp: Dh,
  Entity: Rh,
  PropModification: kh,
  replacePrefix: jh,
  add: Fh,
  remove: Lh,
  DexieYProvider: Mh
} = No, li = "_temp-idb-id", Sd = {
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
  const { databaseName: i, withDatabaseIds: a } = n, u = new No(i);
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
  const y = l.children.map((W) => W.id), S = await i.table(zt).bulkGet(y);
  Pd({
    childrenIds: y,
    childrenRecords: S,
    databaseRecord: l
  });
  const N = Ad({
    parentTagName: l.tagName,
    childrenRecords: S
  });
  for (const W of N) {
    const B = Cd({
      document: u,
      record: W,
      withDatabaseIds: a
    });
    d.appendChild(B), await yc({
      databaseInstance: i,
      withDatabaseIds: a,
      xmlDocument: u,
      databaseRecord: W,
      parentDomElement: B
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
        const y = d.namespace?.prefix || "";
        if (y === "xmlns") continue;
        !l && y && gc({
          document: i,
          namespace: d.namespace
        });
        const S = d.name.includes(":") && d.name.split(":").pop() || d.name, N = y ? `${y}:${S}` : S;
        a.setAttributeNS(d.namespace.uri, N, String(d.value));
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
  const d = /* @__PURE__ */ new Map(), y = [];
  for (const S of l)
    d.set(S, []);
  for (const S of a)
    l.has(S.tagName) ? d.get(S.tagName)?.push(S) : y.push(S);
  for (const S of l) {
    const N = d.get(S);
    N && N.length && u.push(...N);
  }
  return u.push(...y), u;
}
function Pd(n) {
  const { childrenIds: i, childrenRecords: a, databaseRecord: u } = n, l = a.map((d, y) => d === void 0 ? y : -1).filter((d) => d !== -1);
  if (l.length > 0) {
    const d = l.map((y) => i[y]);
    throw new Error(
      `Database corruption detected: Parent element '${u.tagName}' (id: ${u.id}) references ${l.length} non-existent child record(s) with IDs: ${d.join(", ")}`
    );
  }
}
function Id(n) {
  return n.old === void 0 && n.new?.parent !== void 0 && n.new?.element !== void 0;
}
function Od(n) {
  return n.old?.parent !== void 0 && n.old?.element !== void 0 && n.new === void 0;
}
function Nd(n) {
  return n.old?.parent !== void 0 && n.old?.element !== void 0 && n.new?.parent !== void 0 && n.new?.element == null;
}
function Dd(n) {
  return n.old?.parent === void 0 && n.old?.element !== void 0 && n.new?.parent === void 0 && n.new?.element !== void 0;
}
function Rd(n) {
  return n.old === void 0 && n.new === void 0 && n.element !== void 0 && n.newAttributes !== void 0 && n.oldAttributes !== void 0;
}
function kd(n) {
  return !(n.actions instanceof Array);
}
function qt(n) {
  const i = n.split(">"), a = i.pop() ?? "";
  return [i.join(">"), a];
}
const bt = ":not(*)";
function jd(n) {
  return `${n.getAttribute("version")}	${n.getAttribute("revision")}`;
}
function Fd(n, i) {
  const [a, u] = i.split("	");
  return !a || !u ? bt : `${n}[version="${a}"][revision="${u}"]`;
}
function za(n) {
  return Ct(n.parentElement) + ">" + n.getAttribute("connectivityNode");
}
function Ja(n, i) {
  const [a, u] = qt(i), l = Tt[n].parents.flatMap(
    (d) => Ft(d, a).split(",")
  );
  return Kt(
    l,
    [">"],
    [`${n}[connectivityNode="${u}"]`]
  ).map((d) => d.join("")).join(",");
}
function Ld(n) {
  const [i, a, u, l, d, y] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((S) => n.getAttribute(S));
  return i === "None" ? `${Ct(n.parentElement)}>(${l} ${y} ${d})` : `${i} ${a || "(Client)"}/${u ?? ""} ${l} ${d ?? ""}`;
}
function Md(n, i) {
  if (i.endsWith(")")) {
    const [re, se] = qt(i), [he, de, Ce] = se.substring(1, se.length - 1).split(" ");
    if (!he || !de) return bt;
    const ae = Tt[n].parents.flatMap(
      (ye) => Ft(ye, re).split(",")
    );
    return Kt(
      ae,
      [">"],
      [`${n}[iedName="None"][lnClass="${he}"][lnType="${de}"][lnInst="${Ce}"]`]
    ).map((ye) => ye.join("")).join(",");
  }
  const [a, u, l, d, y] = i.split(/[ /]/);
  if (!a || !u || !d) return bt;
  const [S, N, W, B, G] = [
    [`[iedName="${a}"]`],
    u === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${u}"]`],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    y ? [`[lnInst="${y}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return Kt(
    [n],
    S,
    N,
    W,
    B,
    G
  ).map((re) => re.join("")).join(",");
}
function Bd(n) {
  return `${Ct(n.parentElement)}>${n.getAttribute("iedName")} ${n.getAttribute("apName")}`;
}
function Kd(n, i) {
  const [a, u] = qt(i), [l, d] = u.split(" ");
  return `${Ft("IED", a)}>${n}[iedName="${l}"][apName="${d}"]`;
}
function qd(n) {
  return `${Ct(n.parentElement)}>${n.getAttribute("associationID") ?? ""}`;
}
function $d(n, i) {
  const [a, u] = qt(i);
  return u ? `${Ft("Server", a)}>${n}[associationID="${u}"]` : bt;
}
function Vd(n) {
  return `${Ct(n.closest("IED"))}>>${n.getAttribute("inst")}`;
}
function Ud(n, i) {
  const [a, u] = i.split(">>");
  return u ? `IED[name="${a}"] ${n}[inst="${u}"]` : bt;
}
function Gd(n) {
  const i = n.textContent, [a, u, l, d, y] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((S) => n.getAttribute(S));
  return `${Ct(n.parentElement)}>${i} ${a || ""} ${u || ""}/${l ?? ""} ${d ?? ""} ${y ?? ""}`;
}
function Hd(n, i) {
  const [a, u] = qt(i), [l, d, y, S, N, W] = u.split(/[ /]/), [
    B,
    G,
    re,
    se,
    he,
    de
  ] = [
    Tt[n].parents.flatMap((Ce) => Ft(Ce, a).split(",")),
    [`${l}`],
    d ? [`[apRef="${d}"]`] : [":not([apRef])", '[apRef=""]'],
    y ? [`[ldInst="${y}"]`] : [":not([ldInst])", '[ldInst=""]'],
    S ? [`[prefix="${S}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${N}"]`],
    W ? [`[lnInst="${W}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return Kt(
    B,
    [">"],
    [n],
    G,
    re,
    se,
    he,
    de
  ).map((Ce) => Ce.join("")).join(",");
}
function Wd(n) {
  const [i, a, u, l, d, y, S, N] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((B) => n.getAttribute(B)), W = `${i}/${a ?? ""} ${u} ${l ?? ""}.${d} ${y || ""}`;
  return `${Ct(n.parentElement)}>${W} (${S}${N ? " [" + N + "]" : ""})`;
}
function Yd(n, i) {
  const [a, u] = qt(i), [l, d, y, S] = u.split(/[ /.]/), N = u.match(/.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/), W = N && N[1] ? N[1] : "", B = N && N[2] ? N[2] : "", G = u.match(/\(([A-Z]{2})/), re = u.match(/ \[([0-9]{1,2})\]/), se = G && G[1] ? G[1] : "", he = re && re[1] ? re[1] : "", [
    de,
    Ce,
    ae,
    ye,
    ke,
    pe,
    je,
    ie,
    oe
  ] = [
    Tt[n].parents.flatMap((Ee) => Ft(Ee, a).split(",")),
    [`[ldInst="${l}"]`],
    d ? [`[prefix="${d}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${y}"]`],
    S ? [`[lnInst="${S}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${W}"]`],
    B ? [`[daName="${B}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${se}"]`],
    he ? [`[ix="${he}"]`] : [":not([ix])", '[ix=""]']
  ];
  return Kt(
    de,
    [">"],
    [n],
    Ce,
    ae,
    ye,
    ke,
    pe,
    je,
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
    y,
    S,
    N,
    W,
    B,
    G,
    re,
    se,
    he,
    de,
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
  ].map((ke) => n.getAttribute(ke)), ae = Ce ? `${G}:${Ce} ${re ?? ""}/${se ?? ""} ${he ?? ""} ${de ?? ""}` : "", ye = `${a} ${d}/${y ?? ""} ${S} ${N ?? ""} ${W} ${B || ""}`;
  return `${i}>${ae ? ae + " " : ""}${ye}${u ? `@${u}` : ""}`;
}
function Xd(n, i) {
  const [a, u] = qt(i), l = Tt[n].parents.flatMap(
    (be) => Ft(be, a).split(",")
  );
  if (u.endsWith("]")) {
    const [be] = u.split("["), Pe = [`[intAddr="${be}"]`];
    return Kt(l, [">"], [n], Pe).map((et) => et.join("")).join(",");
  }
  let d, y, S, N, W, B, G, re, se, he, de, Ce, ae, ye;
  !u.includes(":") && !u.includes("@") ? [d, y, S, N, W, B, G] = u.split(/[ /]/) : u.includes(":") && !u.includes("@") ? [
    re,
    se,
    he,
    de,
    Ce,
    ae,
    d,
    y,
    S,
    N,
    W,
    B,
    G
  ] = u.split(/[ /:]/) : !u.includes(":") && u.includes("@") ? [d, y, S, N, W, B, G, ye] = u.split(/[ /@]/) : [
    re,
    se,
    he,
    de,
    Ce,
    ae,
    d,
    y,
    S,
    N,
    W,
    B,
    G,
    ye
  ] = u.split(/[ /:@]/);
  const [
    ke,
    pe,
    je,
    ie,
    oe,
    Ee,
    q,
    it,
    rt,
    De,
    Ge,
    At,
    wt,
    Ue
  ] = [
    d ? [`[iedName="${d}"]`] : [":not([iedName])"],
    y ? [`[ldInst="${y}"]`] : [":not([ldInst])", '[ldInst=""]'],
    S ? [`[prefix="${S}"]`] : [":not([prefix])", '[prefix=""]'],
    N ? [`[lnClass="${N}"]`] : [":not([lnClass])"],
    W ? [`[lnInst="${W}"]`] : [":not([lnInst])", '[lnInst=""]'],
    B ? [`[doName="${B}"]`] : [":not([doName])"],
    G ? [`[daName="${G}"]`] : [":not([daName])", '[daName=""]'],
    re ? [`[serviceType="${re}"]`] : [":not([serviceType])", '[serviceType=""]'],
    se ? [`[srcCBName="${se}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    he ? [`[srcLDInst="${he}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    de ? [`[srcPrefix="${de}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    Ce ? [`[srcLNClass="${Ce}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    ae ? [`[srcLNInst="${ae}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    ye ? [`[intAddr="${ye}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return Kt(
    l,
    [">"],
    [n],
    ke,
    pe,
    je,
    ie,
    oe,
    Ee,
    q,
    it,
    rt,
    De,
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
  const [a, u] = qt(i), l = Tt[n].parents.flatMap(
    (G) => Ft(G, a).split(",")
  ), [d, y, S] = u.split(" ");
  if (!y) return bt;
  const [N, W, B] = [
    d ? [`[prefix="${d}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${y}"]`],
    [`[inst="${S}"]`]
  ];
  return Kt(
    l,
    [">"],
    [n],
    N,
    W,
    B
  ).map((G) => G.join("")).join(",");
}
function Zd(n) {
  const [i, a, u, l, d, y] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((S) => n.getAttribute(S));
  return `${Ct(n.parentElement)}>${a} ${i || ""} ${u}/${l ?? ""} ${d} ${y}`;
}
function ep(n, i) {
  const [a, u] = qt(i), l = Tt[n].parents.flatMap(
    (ae) => Ft(ae, a).split(",")
  ), [d, y, S, N, W, B] = u.split(/[ /]/), [
    G,
    re,
    se,
    he,
    de,
    Ce
  ] = [
    d ? [`[iedName="${d}"]`] : [":not([iedName])", '[iedName=""]'],
    y ? [`[apRef="${y}"]`] : [":not([apRef])", '[apRef=""]'],
    S ? [`[ldInst="${S}"]`] : [":not([ldInst])", '[ldInst=""]'],
    N ? [`[prefix="${N}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${W}"]`],
    B ? [`[lnInst="${B}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return Kt(
    l,
    [">"],
    [n],
    G,
    re,
    se,
    he,
    de,
    Ce
  ).map((ae) => ae.join("")).join(",");
}
function Za(n) {
  const [i, a] = ["name", "ix"].map((u) => n.getAttribute(u));
  return `${Ct(n.parentElement)}>${i}${a ? "[" + a + "]" : ""}`;
}
function Bs(n, i, a = -1) {
  a === -1 && (a = i.split(">").length);
  const [u, l] = qt(i), [d, y, S, N] = l.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!y) return bt;
  if (a === 0) return `${n}[name="${y}"]`;
  const W = Tt[n].parents.flatMap(
    (re) => re === "SDI" ? Bs(re, u, a - 1).split(",") : Ft(re, u).split(",")
  ).filter((re) => !re.startsWith(bt));
  if (W.length === 0) return bt;
  const [B, G] = [
    [`[name="${y}"]`],
    N ? [`[ix="${N}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return Kt(W, [">"], [n], B, G).map((re) => re.join("")).join(",");
}
function tp(n) {
  if (!n.parentElement) return NaN;
  const i = n.getAttribute("sGroup"), a = Array.from(n.parentElement.children).filter((u) => u.getAttribute("sGroup") === i).findIndex((u) => u.isSameNode(n));
  return `${Ct(n.parentElement)}>${i ? i + "." : ""} ${a}`;
}
function np(n, i) {
  const [a, u] = qt(i), [l, d] = u.split(" "), y = parseFloat(d), S = Tt[n].parents.flatMap(
    (B) => Ft(B, a).split(",")
  ), [N, W] = [
    l ? [`[sGroup="${l}"]`] : [""],
    y ? [`:nth-child(${y + 1})`] : [""]
  ];
  return Kt(S, [">"], [n], N, W).map((B) => B.join("")).join(",");
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
  const [a, u] = qt(i), [l, d] = [
    Tt[n].parents.flatMap((y) => Ft(y, a).split(",")),
    u ? [`[type="${u}"]`] : [""]
  ];
  return Kt(l, [">"], [n], d).map((y) => y.join("")).join(",");
}
function ap(n) {
  if (!n.parentElement) return NaN;
  const i = n.parentElement, a = n.getAttribute("type");
  if (i.tagName === "PhysConn") return `${Ct(n.parentElement)}>${a}`;
  const u = Array.from(n.parentElement.children).filter((l) => l.getAttribute("type") === a).findIndex((l) => l.isSameNode(n));
  return `${Ct(n.parentElement)}>${a} [${u}]`;
}
function up(n, i) {
  const [a, u] = qt(i), [l] = u.split(" "), d = u && u.match(/\[([0-9]+)\]/) && u.match(/\[([0-9]+)\]/)[1] ? parseFloat(u.match(/\[([0-9]+)\]/)[1]) : NaN, [y, S, N] = [
    Tt[n].parents.flatMap((W) => Ft(W, a).split(",")),
    [`[type="${l}"]`],
    d ? [`:nth-child(${d + 1})`] : [""]
  ];
  return Kt(y, [">"], [n], S, N).map((W) => W.join("")).join(",");
}
function cp(n) {
  return `${Ct(n.parentElement)}>${n.getAttribute("ord")}`;
}
function lp(n, i) {
  const [a, u] = qt(i);
  return `${Ft("EnumType", a)}>${n}[ord="${u}"]`;
}
function fp(n) {
  return `${Ct(n.parentElement)}>${n.getAttribute("type") || "8-MMS"}	${n.textContent}`;
}
function dp(n, i) {
  const [a, u] = qt(i), [l, d] = u.split("	"), [y] = [
    Tt[n].parents.flatMap((S) => Ft(S, a).split(","))
  ];
  return Kt(y, [">"], [n], [`[type="${l}"]`], [">"], [d]).map((S) => S.join("")).join(",");
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
  const [u, l] = qt(i);
  if (!l) return bt;
  if (a === 0) return `${n}[name="${l}"]`;
  const d = Tt[n].parents;
  if (!d) return bt;
  const y = d.flatMap(
    (S) => Tt[S].selector === Tt.Substation.selector ? Qe(S, u, a - 1).split(",") : Ft(S, u).split(",")
  ).filter((S) => !S.startsWith(bt));
  return y.length === 0 ? bt : Kt(y, [">"], [n], [`[name="${l}"]`]).map((S) => S.join("")).join(",");
}
function _e(n) {
  return Ct(n.parentElement).toString();
}
function Se(n, i) {
  const a = Tt[n].parents;
  if (!a) return bt;
  const u = a.flatMap((l) => Ft(l, i).split(",")).filter((l) => !l.startsWith(bt));
  return u.length === 0 ? bt : Kt(u, [">"], [n]).map((l) => l.join("")).join(",");
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
], Ks = ["Substation", "VoltageLevel", "Bay"], _c = ["Process", "Line"], Sc = ["EqSubFunction", "EqFunction"], mp = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...wc,
  ...Ks,
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
], Np = ["ConfLogControl", "ConfSigRef"], Dp = ["ReportSettings", "LogSettings", "GSESettings", "SMVSettings"], Rp = ["SCL", ...vp, ...xp, ...Ap], Ec = [
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
  ...Np,
  ...Dp,
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
const qo = ["Text", "Private"], dr = [...qo], gt = [...qo], go = [...qo], nu = [...gt, "Val"], Tc = [...dr, "LNode"], hr = [...Tc], qs = [...hr], xs = [
  ...hr,
  "PowerTransformer",
  "GeneralEquipment"
], ru = [...qs, "Terminal"], iu = [...gt, "Address"], Cc = [...dr], ou = [...Cc, "IEDName"], su = [
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
    identity: qd,
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
    selector: Bs,
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
      ...Ks
    ],
    children: [...qs, "EqFunction"]
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
    identity: jd,
    selector: Fd,
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
    identity: Bd,
    selector: Kd,
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
    parents: [...Ks],
    children: [...qs, "TransformerWinding", "SubEquipment", "EqFunction"]
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
      ...qo,
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
    selector: Bs,
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
    return u.find((S) => S.tagName === i) ?? null;
  const l = Tt[a]?.children ?? [];
  let d = l.findIndex((S) => S === i);
  if (d < 0) return null;
  let y;
  for (; d < l.length && !y; )
    y = u.find((S) => S.tagName === l[d]), d++;
  return y ?? null;
}
function Ft(n, i) {
  return typeof i != "string" ? bt : ma(n) ? Tt[n].selector(n, i) : n;
}
function Ct(n) {
  if (n === null) return NaN;
  if (n.closest("Private")) return NaN;
  const i = n.tagName;
  return ma(i) ? Tt[i].identity(n) : NaN;
}
function Kt(...n) {
  return n.reduce((i, a) => i.flatMap((u) => a.map((l) => [u, l].flat())), [[]]);
}
const jp = 99;
Array(jp).fill(1).map((n, i) => `${i + 1}`);
function Fp(n) {
  return kd(n) ? lu(n) : n.actions.map(lu);
}
function lu(n) {
  if (Id(n))
    return Lp(n);
  if (Od(n))
    return Mp(n);
  if (Rd(n))
    return Bp(n);
  if (Nd(n))
    return Kp(n);
  if (Dd(n))
    return qp(n);
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
function Bp(n) {
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
function Kp(n) {
  return n.new.reference === void 0 && (n.new.reference = Ac(n.new.parent, n.old.element.tagName)), {
    parent: n.new.parent,
    node: n.old.element,
    reference: n.new.reference ?? null
  };
}
function qp(n) {
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
function Nc(n) {
  return n instanceof Array && n.every(zp);
}
function Dc(n) {
  return n.element instanceof Element && Xp(n.attributes);
}
function zp(n) {
  return Nc(n) ? !0 : Dc(n) || fo(n) || lo(n);
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
  return lo(n) || fo(n) ? n : Dc(n) ? Jp(n) : Nc(n) ? n.map(Rc) : [];
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
        const [y, S] = d;
        S === null ? n.removeAttribute(y) : n.setAttribute(y, S);
      } catch {
        delete u[d[0]];
      }
  if (a && Object.entries(a).forEach(([d, y]) => {
    Object.keys(y).reverse().forEach((S) => {
      l[d] = {
        ...l[d],
        [S]: n.getAttributeNS(d, S.split(":").pop())
      };
    });
  }), a)
    for (const d of Object.entries(a)) {
      const [y, S] = d;
      for (const N of Object.entries(S))
        try {
          const [W, B] = N;
          B === null ? n.removeAttributeNS(y, W.split(":").pop()) : n.setAttributeNS(y, W, B);
        } catch {
          delete l[y][N[0]];
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
    return l.undo.unshift(...[d].flat(1 / 0)), l.redo.push(...[i].flat(1 / 0)), a && (l.title = a), u && this.past.length && this.past.pop(), this.past.push(l), this.future = [], this.#e.forEach((y) => y(l)), l;
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
  await jc(u, a, i);
}
async function jc(n, i, a) {
  const u = n, l = i;
  let d = ao(u);
  const y = ao(l), S = await dh(a);
  d || (d = crypto.randomUUID(), u.setAttribute(li, d));
  const N = uh(u), W = {
    id: d,
    tagName: u.tagName,
    namespace: N,
    attributes: fh(u, S),
    value: u.children.length ? "" : u.textContent || "",
    parent: null,
    // Will be set by `ensureRelationship`
    children: []
  }, B = Fc(W), G = await a.addRecord({ ...B });
  let re;
  if (y) {
    if (re = await a.findRecordById(y), !re)
      throw new Error(`parentId present: ${y}, but no record found`);
    await a.ensureRelationship(re, G);
  }
  for (const se of Array.from(n.children))
    await jc(se, u, a);
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
  const y = await i.findRecordById(d);
  if (!y)
    throw new Error(`Record with ID ${d} not found`);
  const N = [...Fc(y).attributes || []];
  for (const [B, G] of Object.entries(u))
    if (G == null)
      Es(N, B);
    else {
      const se = $s(B, G);
      du(N, se);
    }
  for (const [B, G] of Object.entries(l))
    if (G)
      for (const [re, se] of Object.entries(G))
        if (se == null) {
          const de = await fu(B, i), Ce = de ? `${de}:${re}` : re;
          Es(N, Ce) || Es(N, re);
        } else {
          const de = await fu(B, i), Ce = de ? `${de}:${re}` : re, ae = $s(
            Ce,
            se,
            de ? B : void 0,
            de
          );
          du(N, ae);
        }
  const W = {
    ...y,
    attributes: N
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
  const y = {
    ...d,
    value: u || ""
  };
  await i.updateRecord(y);
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
  const u = (await i.findRootSCL()).attributes.find((d) => d.value === n);
  if (!u)
    throw new Error("could not find namespace by uri:" + n);
  const l = u.name.split(":");
  if (l.length < 2 || l[0] !== "xmlns")
    throw new Error("invalid namespace attribute format:" + u.name);
  return l[1];
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
    const y = $s(
      l.name,
      l.value,
      l.namespaceURI,
      l.prefix || void 0
    ), S = lh(y, i);
    a.push(S);
  }
  return a;
}
function Fc(n) {
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
      if (u.name.startsWith("xmlns:")) {
        const d = u.name.split(":");
        if (d.length === 2) {
          const S = d[1], N = u.value;
          i[N] = S;
        } else
          console.warn(`Invalid namespace declaration format: ${u.name}`);
      }
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
    findRecordById: B,
    findRecordsByTagName: G,
    findChildRecords: ae,
    findChildRecordsByTagName: ye,
    findChildRecordsWithinDepthAndGivenTagName: pe,
    instantiate: re,
    ensureRelationship: y,
    ensurePrivateElement: S,
    findRootSCL: W,
    recordExists: d,
    findOneRecordByAttribute: de,
    findAllRecordsByAttribute: Ce,
    close: je,
    db: n
  };
  async function i(ie) {
    const oe = { ...ie, id: ie.id ?? crypto.randomUUID() };
    try {
      return await n.table(zt).add(oe), oe;
    } catch (Ee) {
      const q = {
        msg: "could not add record",
        db: n.name,
        newRecord: oe,
        err: Ee
      };
      throw console.error(q), new Error(JSON.stringify(q));
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
          const Ee = await B(oe.id);
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
        const oe = await B(ie.parent.id);
        if (!oe) throw new Error("parent relationship found but not parent record");
        await N(oe, ie);
      }
      await n.table(zt).delete(ie.id);
    } catch (oe) {
      console.error(oe);
    }
  }
  async function l(ie, oe) {
    try {
      const Ee = { ...ie, id: crypto.randomUUID() };
      return await n.table(zt).add(Ee), oe && await y(oe, Ee), {
        ...Ee,
        parent: oe ? { id: oe.id, tagName: oe.tagName } : null
      };
    } catch (Ee) {
      const q = {
        msg: "could not add record",
        db: n.name,
        table: ie.tagName,
        recordToCreate: ie,
        err: Ee
      };
      throw console.error(q), new Error(JSON.stringify(q));
    }
  }
  async function d(ie) {
    return await n.table(zt).where({ id: ie.id }).count() > 0;
  }
  async function y(ie, oe) {
    const Ee = ie.children?.some((it) => it.id === oe.id), q = oe.parent?.id === ie.id;
    Ee || await n.table(zt).update(ie.id, {
      children: [...ie.children, { id: oe.id, tagName: oe.tagName }]
    }), q || (oe.parent = {
      id: ie.id,
      tagName: ie.tagName
    }, await n.table(zt).update(oe.id, { parent: oe.parent }));
  }
  async function S(ie) {
    let Ee = (await Ce("Private", {
      name: "type",
      value: "eIEC61850-6-100"
    })).find((q) => q.parent?.id === ie.id);
    if (!Ee) {
      const q = {
        tagName: "Private",
        attributes: [{ name: "type", value: "eIEC61850-6-100" }],
        parent: null,
        namespace: ha.default,
        value: "",
        children: []
      };
      Ee = await l(q), await y(ie, Ee);
    }
    return Ee;
  }
  async function N(ie, oe) {
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
  async function B(ie) {
    return await n.table(zt).get(ie);
  }
  async function G(ie) {
    return await n.table(zt).where({ tagName: ie }).toArray();
  }
  function re(ie) {
    const oe = se(ie);
    if (!oe)
      throw console.error('record does not have a "uuid" to move to "templateUUID"', ie), new Error('record does not have a "uuid" to move to "templateUUID"');
    ie.attributes?.push({ name: "templateUuid", value: oe }), he(ie);
  }
  function se(ie) {
    const oe = ie.attributes?.find((Ee) => Ee.name === "uuid");
    if (oe)
      return oe.value;
  }
  function he(ie) {
    ie.attributes || (ie.attributes = []);
    const oe = crypto.randomUUID(), Ee = ie.attributes.findIndex((it) => it.name === "uuid");
    Ee >= 0 ? ie.attributes[Ee].value = oe : ie.attributes.push({ name: "uuid", value: oe });
  }
  async function de(ie, oe) {
    return mh(n, ie, oe);
  }
  async function Ce(ie, oe) {
    return yh(n, ie, oe);
  }
  async function ae(ie) {
    return ie.children?.length ? await n.table(zt).where({ "parent.id": ie.id }).toArray() : [];
  }
  async function ye(ie, oe) {
    return (await ae(ie)).filter((q) => oe.includes(q.tagName));
  }
  async function pe(ie, oe = ke, Ee = []) {
    const q = [];
    let it = [ie];
    for (let rt = 0; rt < oe; rt++) {
      const De = [];
      for (const Ge of it) {
        const At = await ye(Ge, Ee);
        At.length !== 0 && (De.push(...At), q.push(...At));
      }
      it = [...De];
    }
    return q;
  }
  function je() {
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
      var d = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Vs, y = Object.keys, S = Array.isArray;
      function N(e, t) {
        return typeof t != "object" || y(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || d.Promise || (d.Promise = Promise);
      var W = Object.getPrototypeOf, B = {}.hasOwnProperty;
      function G(e, t) {
        return B.call(e, t);
      }
      function re(e, t) {
        typeof t == "function" && (t = t(W(e))), (typeof Reflect > "u" ? y : Reflect.ownKeys)(t).forEach(function(r) {
          he(e, r, t[r]);
        });
      }
      var se = Object.defineProperty;
      function he(e, t, r, o) {
        se(e, t, N(r && G(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function de(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), he(e.prototype, "constructor", e), { extend: re.bind(null, e.prototype) };
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
      function je(e) {
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
          p !== -1 ? (c = t.substr(0, p), (f = t.substr(p + 1)) === "" ? r === void 0 ? S(e) && !isNaN(parseInt(c)) ? e.splice(c, 1) : delete e[c] : e[c] = r : oe(p = !(p = e[c]) || !G(e, c) ? e[c] = {} : p, f, r)) : r === void 0 ? S(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function Ee(e) {
        var t, r = {};
        for (t in e) G(e, t) && (r[t] = e[t]);
        return r;
      }
      var q = [].concat;
      function it(e) {
        return q.apply([], e);
      }
      var Ie = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(it([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return d[e];
      }), rt = new Set(Ie.map(function(e) {
        return d[e];
      })), De = null;
      function Ge(e) {
        return De = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var o = De.get(r);
          if (o) return o;
          if (S(r)) {
            o = [], De.set(r, o);
            for (var s = 0, c = r.length; s < c; ++s) o.push(t(r[s]));
          } else if (rt.has(r.constructor)) o = r;
          else {
            var f, p = W(r);
            for (f in o = p === Object.prototype ? {} : Object.create(p), De.set(r, o), r) G(r, f) && (o[f] = t(r[f]));
          }
          return o;
        }(e), De = null, e;
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
      var et = {};
      function ze(e) {
        var t, r, o, s;
        if (arguments.length === 1) {
          if (S(e)) return e.slice();
          if (this === et && typeof e == "string") return [e];
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
      de(ht).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), de(It).from(ht), de(pt).from(ht);
      var P = dt.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), w = ht, j = dt.reduce(function(e, t) {
        var r = t + "Error";
        function o(s, c) {
          this.name = r, s ? typeof s == "string" ? (this.message = "".concat(s).concat(c ? `
 ` + c : ""), this.inner = c || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = ot[t] || r, this.inner = null);
        }
        return de(o).from(w), e[t] = o, e;
      }, {});
      j.Syntax = SyntaxError, j.Type = TypeError, j.Range = RangeError;
      var $ = Te.reduce(function(e, t) {
        return e[t + "Error"] = j[t], e;
      }, {}), Ne = dt.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = j[t]), e;
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
      function F(e, t) {
        return e === A ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? I(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? I(o, this.onerror) : o);
        };
      }
      function V(e, t) {
        return e === A ? t : function(r) {
          var o = e.apply(this, arguments);
          N(r, o);
          var s = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? I(s, this.onsuccess) : s), c && (this.onerror = this.onerror ? I(c, this.onerror) : c), o === void 0 ? r === void 0 ? void 0 : r : N(o, r);
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
      Ne.ModifyError = It, Ne.DexieError = ht, Ne.BulkError = pt;
      var Q = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function me(e) {
        Q = e;
      }
      var ce = {}, xe = 100, Ie = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, W(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, W(t), e];
      }(), Te = Ie[0], dt = Ie[1], Ie = Ie[2], dt = dt && dt.then, Me = Te && Te.constructor, qe = !!Ie, ut = function(e, t) {
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
          var c = this, f = !e.global && (e !== ne || t !== Ln), p = f && !Nt(), m = new J(function(g, _) {
            wr(c, new fi(hi(o, e, f, p), hi(s, e, f, p), g, _, e));
          });
          return this._consoleTask && (m._consoleTask = this._consoleTask), m;
        }
        return r.prototype = ce, r;
      }, set: function(e) {
        he(this, "then", e && e.prototype === ce ? gr : { get: function() {
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
            return Dt(r, !0), e.apply(this, arguments);
          } catch (c) {
            t && t(c);
          } finally {
            Dt(s, !1), o && sn();
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
            return s(new j.Timeout(t));
          }, e);
          r.then(o, s).finally(clearTimeout.bind(null, c));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && he(J.prototype, Symbol.toStringTag, "Dexie.Promise"), Je.env = pi(), re(J, { all: function() {
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
      } }), Me && (Me.allSettled && he(J, "allSettled", function() {
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
      }), Me.any && typeof AggregateError < "u" && he(J, "any", function() {
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
      var $e = { awaits: 0, echoes: 0, id: 0 }, Uo = 0, jn = [], Fn = 0, Ln = 0, Go = 0;
      function Ot(e, t, r, o) {
        var s = ne, c = Object.create(s);
        return c.parent = s, c.ref = 0, c.global = !1, c.id = ++Go, Je.env, c.env = qe ? { Promise: J, PromiseProp: { value: J, configurable: !0, writable: !0 }, all: J.all, race: J.race, allSettled: J.allSettled, any: J.any, resolve: J.resolve, reject: J.reject } : {}, t && N(c, t), ++s.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = Ut(c, e, r, o), c.ref === 0 && c.finalize(), o;
      }
      function an() {
        return $e.id || ($e.id = ++Uo), ++$e.awaits, $e.echoes += xe, $e.id;
      }
      function Nt() {
        return !!$e.awaits && (--$e.awaits == 0 && ($e.id = 0), $e.echoes = $e.awaits * xe, !0);
      }
      function Mn(e) {
        return $e.echoes && e && e.constructor === Me ? (an(), e.then(function(t) {
          return Nt(), t;
        }, function(t) {
          return Nt(), Fe(t);
        })) : e;
      }
      function Ho() {
        var e = jn[jn.length - 1];
        jn.pop(), Dt(e, !1);
      }
      function Dt(e, t) {
        var r, o = ne;
        (t ? !$e.echoes || Fn++ && e === ne : !Fn || --Fn && e === ne) || queueMicrotask(t ? (function(s) {
          ++Ln, $e.echoes && --$e.echoes != 0 || ($e.echoes = $e.awaits = $e.id = 0), jn.push(ne), Dt(s, !0);
        }).bind(null, e) : Ho), e !== ne && (ne = e, o === Je && (Je.env = pi()), qe && (r = Je.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(d, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function pi() {
        var e = d.Promise;
        return qe ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(d, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Ut(e, t, r, o, s) {
        var c = ne;
        try {
          return Dt(e, !0), t(r, o, s);
        } finally {
          Dt(c, !1);
        }
      }
      function hi(e, t, r, o) {
        return typeof e != "function" ? e : function() {
          var s = ne;
          r && an(), Dt(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Dt(s, !1), o && queueMicrotask(Nt);
          }
        };
      }
      function Sr(e) {
        Promise === Me && $e.echoes === 0 ? Fn === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + dt).indexOf("[native code]") === -1 && (an = Nt = A);
      var Fe = J.reject, Gt = "￿", xt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", mi = "String expected.", un = [], Bn = "__dbnames", xr = "readonly", Er = "readwrite";
      function Ht(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var yi = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Kn(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = Ge(t))[e], t;
        };
      }
      function vi() {
        throw j.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
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
      function qn(e, t, r) {
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
          if (!h.schema[s]) throw new j.NotFound("Table " + s + " not part of transaction");
          return t(h.idbtrans, h);
        }
        var p = on();
        try {
          var m = o && o.db._novip === this.db._novip ? o === ne.trans ? o._promise(e, f, r) : Ot(function() {
            return o._promise(e, f, r);
          }, { trans: o, transless: ne.transless || ne }) : function g(_, h, T, v) {
            if (_.idbdb && (_._state.openComplete || ne.letThrough || _._vip)) {
              var b = _._createTransaction(h, T, _._dbSchema);
              try {
                b.create(), _._state.PR1398_maxLoop = 3;
              } catch (E) {
                return E.name === P.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                  return g(_, h, T, v);
                })) : Fe(E);
              }
              return b._promise(h, function(E, x) {
                return Ot(function() {
                  return ne.trans = b, v(E, x, b);
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
            if (_._state.openComplete) return Fe(new j.DatabaseClosed(_._state.dbOpenError));
            if (!_._state.isBeingOpened) {
              if (!_._state.autoOpen) return Fe(new j.DatabaseClosed());
              _.open().catch(A);
            }
            return _._state.dbReadyPromise.then(function() {
              return g(_, h, T, v);
            });
          }(this.db, e, [this.name], f);
          return c && (m._consoleTask = c, m = m.catch(function(g) {
            return console.trace(g), Fe(g);
          })), m;
        } finally {
          p && sn();
        }
      }, Ae.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? Fe(new j.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(s) {
            return r.hook.reading.fire(s);
          });
        }).then(t);
      }, Ae.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (S(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = y(e);
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
          return [g || h, g || !h ? Ht(_, h && h.multi ? function(v) {
            return v = ie(v, m), S(v) && v.some(function(b) {
              return s(T, b);
            });
          } : function(v) {
            return s(T, ie(v, m));
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
        return new this.db.Collection(new this.db.WhereClause(this, S(e) ? "[".concat(e.join("+"), "]") : e));
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
          N(this, e);
        });
      }, Ae.prototype.add = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, f = e;
        return c && s && (f = Kn(c)(e)), this._trans("readwrite", function(p) {
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
        return typeof e != "object" || S(e) ? this.where(":id").equals(e).modify(t) : (e = ie(e, this.schema.primKey.keyPath), e === void 0 ? Fe(new j.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, Ae.prototype.put = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, f = e;
        return c && s && (f = Kn(c)(e)), this._trans("readwrite", function(p) {
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
            return qn(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? J.reject(o.failures[0]) : void 0;
          });
        });
      }, Ae.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: yi }).then(function(r) {
            return qn(e, null, r);
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
          if (g && s) throw new j.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new j.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, g = g && p ? e.map(Kn(g)) : e;
          return o.core.mutate({ trans: f, type: "add", keys: s, values: g, wantResults: c }).then(function(b) {
            var h = b.numFailures, T = b.results, v = b.lastResult, b = b.failures;
            if (h === 0) return c ? T : v;
            throw new pt("".concat(o.name, ".bulkAdd(): ").concat(h, " of ").concat(m, " operations failed"), b);
          });
        });
      }, Ae.prototype.bulkPut = function(e, t, r) {
        var o = this, s = Array.isArray(t) ? t : void 0, c = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(f) {
          var g = o.schema.primKey, p = g.auto, g = g.keyPath;
          if (g && s) throw new j.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new j.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, g = g && p ? e.map(Kn(g)) : e;
          return o.core.mutate({ trans: f, type: "put", keys: s, values: g, wantResults: c }).then(function(b) {
            var h = b.numFailures, T = b.results, v = b.lastResult, b = b.failures;
            if (h === 0) return c ? T : v;
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
              var v = h.key, b = h.changes, E = p[T];
              if (E) {
                for (var x = 0, C = Object.keys(b); x < C.length; x++) {
                  var O = C[x], D = b[O];
                  if (O === t.schema.primKey.keyPath) {
                    if (ve(D, v) !== 0) throw new j.Constraint("Cannot update primary key in bulkUpdate()");
                  } else oe(E, O, D);
                }
                c.push(T), m.push(v), g.push(E);
              }
            });
            var _ = m.length;
            return r.mutate({ trans: f, type: "put", keys: m, values: g, updates: { keys: o, changeSpecs: s } }).then(function(h) {
              var T = h.numFailures, v = h.failures;
              if (T === 0) return _;
              for (var b = 0, E = Object.keys(v); b < E.length; b++) {
                var x, C = E[b], O = c[Number(C)];
                O != null && (x = v[C], delete v[C], v[O] = x);
              }
              throw new pt("".concat(t.name, ".bulkUpdate(): ").concat(T, " of ").concat(_, " operations failed"), v);
            });
          });
        });
      }, Ae.prototype.bulkDelete = function(e) {
        var t = this, r = e.length;
        return this._trans("readwrite", function(o) {
          return t.core.mutate({ trans: o, type: "delete", keys: e }).then(function(s) {
            return qn(t, e, s);
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
          y(g = f).forEach(function(h) {
            var T = g[h];
            if (S(T)) c(h, g[h][0], g[h][1]);
            else {
              if (T !== "asap") throw new j.InvalidArgument("Invalid event config");
              var v = c(h, L, function() {
                for (var b = arguments.length, E = new Array(b); b--; ) E[b] = arguments[b];
                v.subscribers.forEach(function(x) {
                  je(function() {
                    x.apply(null, E);
                  });
                });
              });
            }
          });
        }
      }
      function yn(e, t) {
        return de(t).from({ prototype: e }), t;
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
        if (!r) throw new j.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
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
          if (S(r)) return l(l([], S(e) ? e : [], !0), r).sort();
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
          if (S(o)) return S(e) ? e.filter(function(s) {
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
        return r.error ? r.table._trans(null, Fe.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, we.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, Fe.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, we.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Ht(t.algorithm, e);
      }, we.prototype._iterate = function(e, t) {
        return Vn(this._ctx, e, t, this._ctx.table.core);
      }, we.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && N(r, e), t._ctx = r, t;
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
          f = typeof e == "function" ? e : (s = y(e), c = s.length, function(C) {
            for (var O = !1, D = 0; D < c; ++D) {
              var R = s[D], K = e[R], Y = ie(C, R);
              K instanceof vn ? (oe(C, R, K.execute(Y)), O = !0) : Y !== K && (oe(C, R, K), O = !0);
            }
            return O;
          });
          var p = r.table.core, h = p.schema.primaryKey, m = h.outbound, g = h.extractKey, _ = 200, h = t.db._options.modifyChunkSize;
          h && (_ = typeof h == "object" ? h[p.name] || h["*"] || 200 : h);
          function T(C, R) {
            var D = R.failures, R = R.numFailures;
            b += C - R;
            for (var K = 0, Y = y(D); K < Y.length; K++) {
              var U = Y[K];
              v.push(D[U]);
            }
          }
          var v = [], b = 0, E = [], x = e === Ei;
          return t.clone().primaryKeys().then(function(C) {
            function O(R) {
              var K = Math.min(_, C.length - R), Y = C.slice(R, R + K);
              return (x ? Promise.resolve([]) : p.getMany({ trans: o, keys: Y, cache: "immutable" })).then(function(U) {
                var H = [], z = [], X = m ? [] : null, ee = x ? Y : [];
                if (!x) for (var fe = 0; fe < K; ++fe) {
                  var ge = U[fe], le = { value: Ge(ge), primKey: C[R + fe] };
                  f.call(le, le.value, le) !== !1 && (le.value == null ? ee.push(C[R + fe]) : m || ve(g(ge), g(le.value)) === 0 ? (z.push(le.value), m && X.push(C[R + fe])) : (ee.push(C[R + fe]), H.push(le.value)));
                }
                return Promise.resolve(0 < H.length && p.mutate({ trans: o, type: "add", values: H }).then(function(Re) {
                  for (var ue in Re.failures) ee.splice(parseInt(ue), 1);
                  T(H.length, Re);
                })).then(function() {
                  return (0 < z.length || D && typeof e == "object") && p.mutate({ trans: o, type: "put", keys: X, values: z, criteria: D, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < R }).then(function(Re) {
                    return T(z.length, Re);
                  });
                }).then(function() {
                  return (0 < ee.length || D && x) && p.mutate({ trans: o, type: "delete", keys: ee, criteria: D, isAdditionalChunk: 0 < R }).then(function(Re) {
                    return qn(r.table, ee, Re);
                  }).then(function(Re) {
                    return T(ee.length, Re);
                  });
                }).then(function() {
                  return C.length > R + K && O(R + _);
                });
              });
            }
            var D = cn(r) && r.limit === 1 / 0 && (typeof e != "function" || x) && { index: r.index, range: r.range };
            return O(0).then(function() {
              if (0 < v.length) throw new It("Error modifying one or more objects", v, b, E);
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
          s = b === "next" ? function(x) {
            return x.toUpperCase();
          } : function(x) {
            return x.toLowerCase();
          }, c = b === "next" ? function(x) {
            return x.toLowerCase();
          } : function(x) {
            return x.toUpperCase();
          }, f = b === "next" ? Yo : Qo;
          var E = r.map(function(x) {
            return { lower: c(x), upper: s(x) };
          }).sort(function(x, C) {
            return f(x.lower, C.lower);
          });
          p = E.map(function(x) {
            return x.upper;
          }), m = E.map(function(x) {
            return x.lower;
          }), _ = (g = b) === "next" ? "" : o;
        }
        T("next"), e = new e.Collection(e, function() {
          return Rt(p[0], m[h - 1] + o);
        }), e._ondirectionchange = function(b) {
          T(b);
        };
        var v = 0;
        return e._addAlgorithm(function(b, E, x) {
          var C = b.key;
          if (typeof C != "string") return !1;
          var O = c(C);
          if (t(O, m, v)) return !0;
          for (var D = null, R = v; R < h; ++R) {
            var K = function(Y, U, H, z, X, ee) {
              for (var fe = Math.min(Y.length, z.length), ge = -1, le = 0; le < fe; ++le) {
                var Re = U[le];
                if (Re !== z[le]) return X(Y[le], H[le]) < 0 ? Y.substr(0, le) + H[le] + H.substr(le + 1) : X(Y[le], z[le]) < 0 ? Y.substr(0, le) + z[le] + H.substr(le + 1) : 0 <= ge ? Y.substr(0, ge) + U[ge] + H.substr(ge + 1) : null;
                X(Y[le], Re) < 0 && (ge = le);
              }
              return fe < z.length && ee === "next" ? Y + H.substr(Y.length) : fe < Y.length && ee === "prev" ? Y.substr(0, H.length) : ge < 0 ? null : Y.substr(0, ge) + z[ge] + H.substr(ge + 1);
            }(C, O, p[R], m[R], f, g);
            K === null && D === null ? v = R + 1 : (D === null || 0 < f(D, K)) && (D = K);
          }
          return E(D !== null ? function() {
            b.continue(D + _);
          } : x), !1;
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
        var e = ze.apply(et, arguments);
        return e.length === 0 ? ln(this) : Un(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, Ve.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = ze.apply(et, arguments);
        return e.length === 0 ? ln(this) : Un(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, Gt);
      }, Ve.prototype.anyOf = function() {
        var e = this, t = ze.apply(et, arguments), r = this._cmp;
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
        var e = ze.apply(et, arguments);
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
        })) return st(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", j.InvalidArgument);
        var m = !t || t.includeLowers !== !1, g = t && t.includeUppers === !0, _, h = s;
        function T(O, D) {
          return h(O[0], D[0]);
        }
        try {
          (_ = C.reduce(function(O, D) {
            for (var R = 0, K = O.length; R < K; ++R) {
              var Y = O[R];
              if (o(D[0], Y[1]) < 0 && 0 < o(D[1], Y[0])) {
                Y[0] = f(Y[0], D[0]), Y[1] = p(Y[1], D[1]);
                break;
              }
            }
            return R === K && O.push(D), O;
          }, [])).sort(T);
        } catch {
          return st(this, xt);
        }
        var v = 0, b = g ? function(O) {
          return 0 < s(O, _[v][1]);
        } : function(O) {
          return 0 <= s(O, _[v][1]);
        }, E = m ? function(O) {
          return 0 < c(O, _[v][0]);
        } : function(O) {
          return 0 <= c(O, _[v][0]);
        }, x = b, C = new this.Collection(this, function() {
          return Rt(_[0][0], _[_.length - 1][1], !m, !g);
        });
        return C._ondirectionchange = function(O) {
          h = O === "next" ? (x = b, s) : (x = E, c), _.sort(T);
        }, C._addAlgorithm(function(O, D, R) {
          for (var K, Y = O.key; x(Y); ) if (++v === _.length) return D(R), !1;
          return !b(K = Y) && !E(K) || (r._cmp(Y, _[v][1]) === 0 || r._cmp(Y, _[v][0]) === 0 || D(function() {
            h === s ? O.continue(_[v][0]) : O.continue(_[v][1]);
          }), !1);
        }), C;
      }, Ve.prototype.startsWithAnyOf = function() {
        var e = ze.apply(et, arguments);
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
            throw new j.DatabaseClosed(o);
          case "MissingAPIError":
            throw new j.MissingAPI(o.message, o);
          default:
            throw new j.OpenFailed(o);
        }
        if (!this.active) throw new j.TransactionInactive();
        return pe(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Oe(function(s) {
          gn(s), t._reject(e.error);
        }), e.onabort = Oe(function(s) {
          gn(s), t.active && t._reject(new j.Abort(e.error)), t.active = !1, t.on("abort").fire(s);
        }), e.oncomplete = Oe(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && kt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, vt.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Fe(new j.ReadOnly("Transaction is readonly"));
        if (!this.active) return Fe(new j.TransactionInactive());
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
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new j.Abort()));
      }, vt.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (G(t, e)) return t[e];
        var r = this.schema[e];
        if (!r) throw new j.NotFound("Table " + e + " not part of transaction");
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
        function o(x) {
          if (x.type === 3) return null;
          if (x.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var v = x.lower, b = x.upper, E = x.lowerOpen, x = x.upperOpen;
          return v === void 0 ? b === void 0 ? null : t.upperBound(b, !!x) : b === void 0 ? t.lowerBound(v, !!E) : t.bound(v, b, !!E, !!x);
        }
        function s(T) {
          var v, b = T.name;
          return { name: b, schema: T, mutate: function(E) {
            var x = E.trans, C = E.type, O = E.keys, D = E.values, R = E.range;
            return new Promise(function(K, Y) {
              K = Oe(K);
              var U = x.objectStore(b), H = U.keyPath == null, z = C === "put" || C === "add";
              if (!z && C !== "delete" && C !== "deleteRange") throw new Error("Invalid operation type: " + C);
              var X, ee = (O || D || { length: 1 }).length;
              if (O && D && O.length !== D.length) throw new Error("Given keys array must have same length as given values array.");
              if (ee === 0) return K({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function fe(Ze) {
                ++Re, gn(Ze);
              }
              var ge = [], le = [], Re = 0;
              if (C === "deleteRange") {
                if (R.type === 4) return K({ numFailures: Re, failures: le, results: [], lastResult: void 0 });
                R.type === 3 ? ge.push(X = U.clear()) : ge.push(X = U.delete(o(R)));
              } else {
                var H = z ? H ? [D, O] : [D, null] : [O, null], ue = H[0], We = H[1];
                if (z) for (var Ye = 0; Ye < ee; ++Ye) ge.push(X = We && We[Ye] !== void 0 ? U[C](ue[Ye], We[Ye]) : U[C](ue[Ye])), X.onerror = fe;
                else for (Ye = 0; Ye < ee; ++Ye) ge.push(X = U[C](ue[Ye])), X.onerror = fe;
              }
              function nr(Ze) {
                Ze = Ze.target.result, ge.forEach(function(Qt, Yr) {
                  return Qt.error != null && (le[Yr] = Qt.error);
                }), K({ numFailures: Re, failures: le, results: C === "delete" ? O : ge.map(function(Qt) {
                  return Qt.result;
                }), lastResult: Ze });
              }
              X.onerror = function(Ze) {
                fe(Ze), nr(Ze);
              }, X.onsuccess = nr;
            });
          }, getMany: function(E) {
            var x = E.trans, C = E.keys;
            return new Promise(function(O, D) {
              O = Oe(O);
              for (var R, K = x.objectStore(b), Y = C.length, U = new Array(Y), H = 0, z = 0, X = function(ge) {
                ge = ge.target, U[ge._pos] = ge.result, ++z === H && O(U);
              }, ee = yt(D), fe = 0; fe < Y; ++fe) C[fe] != null && ((R = K.get(C[fe]))._pos = fe, R.onsuccess = X, R.onerror = ee, ++H);
              H === 0 && O(U);
            });
          }, get: function(E) {
            var x = E.trans, C = E.key;
            return new Promise(function(O, D) {
              O = Oe(O);
              var R = x.objectStore(b).get(C);
              R.onsuccess = function(K) {
                return O(K.target.result);
              }, R.onerror = yt(D);
            });
          }, query: (v = g, function(E) {
            return new Promise(function(x, C) {
              x = Oe(x);
              var O, D, R, H = E.trans, K = E.values, Y = E.limit, X = E.query, U = Y === 1 / 0 ? void 0 : Y, z = X.index, X = X.range, H = H.objectStore(b), z = z.isPrimaryKey ? H : H.index(z.name), X = o(X);
              if (Y === 0) return x({ result: [] });
              v ? ((U = K ? z.getAll(X, U) : z.getAllKeys(X, U)).onsuccess = function(ee) {
                return x({ result: ee.target.result });
              }, U.onerror = yt(C)) : (O = 0, D = !K && "openKeyCursor" in z ? z.openKeyCursor(X) : z.openCursor(X), R = [], D.onsuccess = function(ee) {
                var fe = D.result;
                return fe ? (R.push(K ? fe.value : fe.primaryKey), ++O === Y ? x({ result: R }) : void fe.continue()) : x({ result: R });
              }, D.onerror = yt(C));
            });
          }), openCursor: function(E) {
            var x = E.trans, C = E.values, O = E.query, D = E.reverse, R = E.unique;
            return new Promise(function(K, Y) {
              K = Oe(K);
              var z = O.index, U = O.range, H = x.objectStore(b), H = z.isPrimaryKey ? H : H.index(z.name), z = D ? R ? "prevunique" : "prev" : R ? "nextunique" : "next", X = !C && "openKeyCursor" in H ? H.openKeyCursor(o(U), z) : H.openCursor(o(U), z);
              X.onerror = yt(Y), X.onsuccess = Oe(function(ee) {
                var fe, ge, le, Re, ue = X.result;
                ue ? (ue.___id = ++zo, ue.done = !1, fe = ue.continue.bind(ue), ge = (ge = ue.continuePrimaryKey) && ge.bind(ue), le = ue.advance.bind(ue), Re = function() {
                  throw new Error("Cursor not stopped");
                }, ue.trans = x, ue.stop = ue.continue = ue.continuePrimaryKey = ue.advance = function() {
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
                }, K(ue)) : K(null);
              }, Y);
            });
          }, count: function(E) {
            var x = E.query, C = E.trans, O = x.index, D = x.range;
            return new Promise(function(R, K) {
              var Y = C.objectStore(b), U = O.isPrimaryKey ? Y : Y.index(O.name), Y = o(D), U = Y ? U.count(Y) : U.count();
              U.onsuccess = Oe(function(H) {
                return R(H.target.result);
              }), U.onerror = yt(K);
            });
          } };
        }
        var c, f, p, _ = (f = m, p = Pi((c = e).objectStoreNames), { schema: { name: c.name, tables: p.map(function(T) {
          return f.objectStore(T);
        }).map(function(T) {
          var v = T.keyPath, x = T.autoIncrement, b = S(v), E = {}, x = { name: T.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: v == null, compound: b, keyPath: v, autoIncrement: x, unique: !0, extractKey: Or(v) }, indexes: Pi(T.indexNames).map(function(C) {
            return T.index(C);
          }).map(function(R) {
            var O = R.name, D = R.unique, K = R.multiEntry, R = R.keyPath, K = { name: O, compound: S(R), keyPath: R, unique: D, multiEntry: K, extractKey: Or(R) };
            return E[_n(R)] = K;
          }), getIndexByKeyPath: function(C) {
            return E[_n(C)];
          } };
          return E[":id"] = x.primaryKey, v != null && (E[_n(v)] = x.primaryKey), x;
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
            (!p || "value" in p && p.value === void 0) && (f === e.Transaction.prototype || f instanceof e.Transaction ? he(f, s, { get: function() {
              return this.table(s);
            }, set: function(m) {
              se(this, s, { value: m, writable: !0, configurable: !0, enumerable: !0 });
            } }) : f[s] = new e.Table(s, c));
          });
        });
      }
      function Nr(e, t) {
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
            return T = _, v = c, b = r, E = [], _ = (h = e)._versions, x = h._dbSchema = Yn(0, h.idbdb, b), (_ = _.filter(function(C) {
              return C._cfg.version >= T;
            })).length !== 0 ? (_.forEach(function(C) {
              E.push(function() {
                var O = x, D = C._cfg.dbschema;
                Qn(h, O, b), Qn(h, D, b), x = h._dbSchema = D;
                var R = Dr(O, D);
                R.add.forEach(function(z) {
                  Rr(b, z[0], z[1].primKey, z[1].indexes);
                }), R.change.forEach(function(z) {
                  if (z.recreate) throw new j.Upgrade("Not yet support for changing primary key");
                  var X = b.objectStore(z.name);
                  z.add.forEach(function(ee) {
                    return Wn(X, ee);
                  }), z.change.forEach(function(ee) {
                    X.deleteIndex(ee.name), Wn(X, ee);
                  }), z.del.forEach(function(ee) {
                    return X.deleteIndex(ee);
                  });
                });
                var K = C._cfg.contentUpgrade;
                if (K && C._cfg.version > T) {
                  Gn(h, b), v._memoizedTables = {};
                  var Y = Ee(D);
                  R.del.forEach(function(z) {
                    Y[z] = O[z];
                  }), Nr(h, [h.Transaction.prototype]), Hn(h, [h.Transaction.prototype], y(Y), Y), v.schema = Y;
                  var U, H = at(K);
                  return H && an(), R = J.follow(function() {
                    var z;
                    (U = K(v)) && H && (z = Nt.bind(null, null), U.then(z, z));
                  }), U && typeof U.then == "function" ? J.resolve(U) : R.then(function() {
                    return U;
                  });
                }
              }), E.push(function(O) {
                var D, R, K = C._cfg.dbschema;
                D = K, R = O, [].slice.call(R.db.objectStoreNames).forEach(function(Y) {
                  return D[Y] == null && R.db.deleteObjectStore(Y);
                }), Nr(h, [h.Transaction.prototype]), Hn(h, [h.Transaction.prototype], h._storeNames, h._dbSchema), v.schema = h._dbSchema;
              }), E.push(function(O) {
                h.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(h.idbdb.version / 10) === C._cfg.version ? (h.idbdb.deleteObjectStore("$meta"), delete h._dbSchema.$meta, h._storeNames = h._storeNames.filter(function(D) {
                  return D !== "$meta";
                })) : O.objectStore("$meta").put(C._cfg.version, "version"));
              });
            }), function C() {
              return E.length ? J.resolve(E.shift()(v.idbtrans)).then(C) : J.resolve();
            }().then(function() {
              Ii(x, b);
            })) : J.resolve();
            var h, T, v, b, E, x;
          }).catch(f)) : (y(s).forEach(function(_) {
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
        for (var o = 0, s = Dr(r, e._dbSchema).change; o < s.length; o++) {
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
      function Dr(e, t) {
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
        y(e).forEach(function(r) {
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
          return Pr(s, c || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), S(c), r === 0, o);
        });
      }
      var rs = (fn.prototype._createTableSchema = Ir, fn.prototype._parseIndexSyntax = Oi, fn.prototype._parseStoresSpec = function(e, t) {
        var r = this;
        y(e).forEach(function(o) {
          if (e[o] !== null) {
            var s = r._parseIndexSyntax(e[o]), c = s.shift();
            if (!c) throw new j.Schema("Invalid schema for table " + o + ": " + e[o]);
            if (c.unique = !0, c.multi) throw new j.Schema("Primary key cannot be multiEntry*");
            s.forEach(function(f) {
              if (f.auto) throw new j.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!f.keyPath) throw new j.Schema("Index must have a name and cannot be an empty string");
            }), s = r._createTableSchema(o, c, s), t[o] = s;
          }
        });
      }, fn.prototype.stores = function(r) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? N(this._cfg.storesSource, r) : r;
        var r = t._versions, o = {}, s = {};
        return r.forEach(function(c) {
          N(o, c._cfg.storesSource), s = c._cfg.dbschema = {}, c._parseStoresSpec(o, s);
        }), t._dbSchema = s, Nr(t, [t._allTables, t, t.Transaction.prototype]), Hn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], y(s), s), t._storeNames = y(s), this;
      }, fn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = te(this._cfg.contentUpgrade || A, e), this;
      }, fn);
      function fn() {
      }
      function kr(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new Et(Bn, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function jr(e) {
        return e && typeof e.databases == "function";
      }
      function Fr(e) {
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
          return e && "d" in e && N(r, e), r;
        }
        N(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function Sn(e, t, r) {
        var o = ve(t, r);
        if (!isNaN(o)) {
          if (0 < o) throw RangeError();
          if (Lr(e)) return N(e, { from: t, to: r, d: 1 });
          var s = e.l, o = e.r;
          if (ve(r, e.from) < 0) return s ? Sn(s, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, Di(e);
          if (0 < ve(t, e.to)) return o ? Sn(o, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, Di(e);
          ve(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < ve(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, s && !e.l && xn(e, s), o && r && xn(e, o);
        }
      }
      function xn(e, t) {
        Lr(t) || function r(o, m) {
          var c = m.from, f = m.to, p = m.l, m = m.r;
          Sn(o, c, f), p && r(o, p), m && r(o, m);
        }(e, t);
      }
      function Ni(e, t) {
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
      function Di(e) {
        var t, r, o = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((r = e.l) === null || r === void 0 ? void 0 : r.d) || 0), s = 1 < o ? "r" : o < -1 ? "l" : "";
        s && (t = s == "r" ? "l" : "r", r = u({}, e), o = e[s], e.from = o.from, e.to = o.to, e[s] = o[s], r[s] = o[t], (e[t] = r).d = Ri(r)), e.d = Ri(e);
      }
      function Ri(r) {
        var t = r.r, r = r.l;
        return (t ? r ? Math.max(t.d, r.d) : t.d : r ? r.d : 0) + 1;
      }
      function zn(e, t) {
        return y(t).forEach(function(r) {
          e[r] ? xn(e[r], t[r]) : e[r] = function o(s) {
            var c, f, p = {};
            for (c in s) G(s, c) && (f = s[c], p[c] = !f || typeof f != "object" || rt.has(f.constructor) ? f : o(f));
            return p;
          }(t[r]);
        }), e;
      }
      function Mr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && Ni(t[r], e[r]);
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
      var Wt = {}, Br = {}, Kr = !1;
      function Jn(e) {
        zn(Br, e), Kr || (Kr = !0, setTimeout(function() {
          Kr = !1, qr(Br, !(Br = {}));
        }, 0));
      }
      function qr(e, t) {
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
            Mr(t, T.obsSet) ? T.subscribers.forEach(function(x) {
              return r.add(x);
            }) : o && g.push(T);
          }
          o && s.push([m, g]);
        }
        if (o) for (var v = 0, b = s; v < b.length; v++) {
          var E = b[v], m = E[0], g = E[1];
          e.queries.query[m] = g;
        }
      }
      function is(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? Fe(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, s = Math.round(10 * e.verno), c = !1;
        function f() {
          if (t.openCanceller !== o) throw new j.DatabaseClosed("db.open() was cancelled");
        }
        function p() {
          return new J(function(T, v) {
            if (f(), !r) throw new j.MissingAPI();
            var b = e.name, E = t.autoSchema || !s ? r.open(b) : r.open(b, s);
            if (!E) throw new j.MissingAPI();
            E.onerror = yt(v), E.onblocked = Oe(e._fireOnBlocked), E.onupgradeneeded = Oe(function(x) {
              var C;
              _ = E.transaction, t.autoSchema && !e._options.allowEmptyDB ? (E.onerror = gn, _.abort(), E.result.close(), (C = r.deleteDatabase(b)).onsuccess = C.onerror = Oe(function() {
                v(new j.NoSuchDatabase("Database ".concat(b, " doesnt exist")));
              })) : (_.onerror = yt(v), x = x.oldVersion > Math.pow(2, 62) ? 0 : x.oldVersion, h = x < 1, e.idbdb = E.result, c && ns(e, _), ts(e, x / 10, _, v));
            }, v), E.onsuccess = Oe(function() {
              _ = null;
              var x, C, O, D, R, K = e.idbdb = E.result, Y = ye(K.objectStoreNames);
              if (0 < Y.length) try {
                var U = K.transaction((D = Y).length === 1 ? D[0] : D, "readonly");
                if (t.autoSchema) C = K, O = U, (x = e).verno = C.version / 10, O = x._dbSchema = Yn(0, C, O), x._storeNames = ye(C.objectStoreNames, 0), Hn(x, [x._allTables], y(O), O);
                else if (Qn(e, e._dbSchema, U), ((R = Dr(Yn(0, (R = e).idbdb, U), R._dbSchema)).add.length || R.change.some(function(H) {
                  return H.add.length || H.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), K.close(), s = K.version + 1, c = !0, T(p());
                Gn(e, U);
              } catch {
              }
              un.push(e), K.onversionchange = Oe(function(H) {
                t.vcFired = !0, e.on("versionchange").fire(H);
              }), K.onclose = Oe(function(H) {
                e.on("close").fire(H);
              }), h && (R = e._deps, U = b, K = R.indexedDB, R = R.IDBKeyRange, jr(K) || U === Bn || kr(K, R).put({ name: U }).catch(A)), T();
            }, v);
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
          function v() {
            return indexedDB.databases().finally(T);
          }
          m = setInterval(v, 100), v();
        }).finally(function() {
          return clearInterval(m);
        }) : Promise.resolve()).then(p)]).then(function() {
          return f(), t.onReadyBeingFired = [], J.resolve(Fr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function T() {
            if (0 < t.onReadyBeingFired.length) {
              var v = t.onReadyBeingFired.reduce(te, A);
              return t.onReadyBeingFired = [], J.resolve(Fr(function() {
                return v(e.vip);
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
          return o === t.openCanceller && e._close(), Fe(T);
        }).finally(function() {
          t.openComplete = !0, g();
        }).then(function() {
          var T;
          return h && (T = {}, e.tables.forEach(function(v) {
            v.schema.indexes.forEach(function(b) {
              b.name && (T["idb://".concat(e.name, "/").concat(v.name, "/").concat(b.name)] = new He(-1 / 0, [[[]]]));
            }), T["idb://".concat(e.name, "/").concat(v.name, "/")] = T["idb://".concat(e.name, "/").concat(v.name, "/:dels")] = new He(-1 / 0, [[[]]]);
          }), kt(bn).fire(T), qr(T, !0)), e;
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
            return p.done ? m : m && typeof m.then == "function" ? m.then(r, o) : S(m) ? Promise.all(m).then(r, o) : r(m);
          };
        }
        return s(t)();
      }
      function Zn(e, t, r) {
        for (var o = S(e) ? e.slice() : [e], s = 0; s < r; ++s) o.push(t);
        return o;
      }
      var os = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema, s = {}, c = [];
          function f(h, T, v) {
            var b = _n(h), E = s[b] = s[b] || [], x = h == null ? 0 : typeof h == "string" ? 1 : h.length, C = 0 < T, C = u(u({}, v), { name: C ? "".concat(b, "(virtual-from:").concat(v.name, ")") : v.name, lowLevelIndex: v, isVirtual: C, keyTail: T, keyLength: x, extractKey: Or(h), unique: !C && v.unique });
            return E.push(C), C.isPrimaryKey || c.push(C), 1 < x && f(x === 2 ? h[0] : h.slice(0, x - 1), T + 1, v), E.sort(function(O, D) {
              return O.keyTail - D.keyTail;
            }), C;
          }
          t = f(o.primaryKey.keyPath, 0, o.primaryKey), s[":id"] = [t];
          for (var p = 0, m = o.indexes; p < m.length; p++) {
            var g = m[p];
            f(g.keyPath, 0, g);
          }
          function _(h) {
            var T, v = h.query.index;
            return v.isVirtual ? u(u({}, h), { query: { index: v.lowLevelIndex, range: (T = h.query.range, v = v.keyTail, { type: T.type === 1 ? 2 : T.type, lower: Zn(T.lower, T.lowerOpen ? e.MAX_KEY : e.MIN_KEY, v), lowerOpen: !0, upper: Zn(T.upper, T.upperOpen ? e.MIN_KEY : e.MAX_KEY, v), upperOpen: !0 }) } }) : h;
          }
          return u(u({}, r), { schema: u(u({}, o), { primaryKey: t, indexes: c, getIndexByKeyPath: function(h) {
            return (h = s[_n(h)]) && h[0];
          } }), count: function(h) {
            return r.count(_(h));
          }, query: function(h) {
            return r.query(_(h));
          }, openCursor: function(h) {
            var T = h.query.index, v = T.keyTail, b = T.isVirtual, E = T.keyLength;
            return b ? r.openCursor(_(h)).then(function(C) {
              return C && x(C);
            }) : r.openCursor(h);
            function x(C) {
              return Object.create(C, { continue: { value: function(O) {
                O != null ? C.continue(Zn(O, h.reverse ? e.MAX_KEY : e.MIN_KEY, v)) : h.unique ? C.continue(C.key.slice(0, E).concat(h.reverse ? e.MIN_KEY : e.MAX_KEY, v)) : C.continue();
              } }, continuePrimaryKey: { value: function(O, D) {
                C.continuePrimaryKey(Zn(O, e.MAX_KEY, v), D);
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
        return r = r || {}, o = o || "", y(e).forEach(function(s) {
          var c, f, p;
          G(t, s) ? (c = e[s], f = t[s], typeof c == "object" && typeof f == "object" && c && f ? (p = wt(c)) !== wt(f) ? r[o + s] = t[s] : p === "Object" ? Vr(c, f, r, o + s + ".") : c !== f && (r[o + s] = t[s]) : c !== f && (r[o + s] = t[s])) : r[o + s] = void 0;
        }), y(t).forEach(function(s) {
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
                  return function h(T, v, b) {
                    return r.query({ trans: T, values: !1, query: { index: o, range: v }, limit: b }).then(function(E) {
                      var x = E.result;
                      return _({ type: "delete", keys: x, trans: T }).then(function(C) {
                        return 0 < C.numFailures ? Promise.reject(C.failures[0]) : x.length < b ? { failures: [], numFailures: 0, lastResult: void 0 } : h(T, u(u({}, v), { lower: x[x.length - 1], lowerOpen: !0 }), b);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return r.mutate(s);
            function _(h) {
              var T, v, b, E = ne.trans, x = h.keys || Ur(o, h);
              if (!x) throw new Error("Keys missing");
              return (h = h.type === "add" || h.type === "put" ? u(u({}, h), { keys: x }) : u({}, h)).type !== "delete" && (h.values = l([], h.values)), h.keys && (h.keys = l([], h.keys)), T = r, b = x, ((v = h).type === "add" ? Promise.resolve([]) : T.getMany({ trans: v.trans, keys: b, cache: "immutable" })).then(function(C) {
                var O = x.map(function(D, R) {
                  var K, Y, U, H = C[R], z = { onerror: null, onsuccess: null };
                  return h.type === "delete" ? p.fire.call(z, D, H, E) : h.type === "add" || H === void 0 ? (K = m.fire.call(z, D, h.values[R], E), D == null && K != null && (h.keys[R] = D = K, o.outbound || oe(h.values[R], o.keyPath, D))) : (K = Vr(H, h.values[R]), (Y = g.fire.call(z, K, D, H, E)) && (U = h.values[R], Object.keys(Y).forEach(function(X) {
                    G(U, X) ? U[X] = Y[X] : oe(U, X, Y[X]);
                  }))), z;
                });
                return r.mutate(h).then(function(D) {
                  for (var R = D.failures, K = D.results, Y = D.numFailures, D = D.lastResult, U = 0; U < x.length; ++U) {
                    var H = (K || x)[U], z = O[U];
                    H == null ? z.onerror && z.onerror(R[U]) : z.onsuccess && z.onsuccess(h.type === "put" && C[U] ? h.values[U] : H);
                  }
                  return { failures: R, results: K, numFailures: Y, lastResult: D };
                }).catch(function(D) {
                  return O.forEach(function(R) {
                    return R.onerror && R.onerror(D);
                  }), Promise.reject(D);
                });
              });
            }
          } });
        } });
      } };
      function ji(e, t, r) {
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
            var s = ji(o.keys, o.trans._cache, o.cache === "clone");
            return s ? J.resolve(s) : r.getMany(o).then(function(c) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? Ge(c) : c }, c;
            });
          }, mutate: function(o) {
            return o.type !== "add" && (o.trans._cache = null), r.mutate(o);
          } });
        } };
      } };
      function Fi(e, t) {
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
          if (ne.subscr && s !== "readonly") throw new j.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ne.querier));
          return e.transaction(o, s, c);
        }, table: function(o) {
          var s = e.table(o), c = s.schema, f = c.primaryKey, h = c.indexes, p = f.extractKey, m = f.outbound, g = f.autoIncrement && h.filter(function(v) {
            return v.compound && v.keyPath.includes(f.keyPath);
          }), _ = u(u({}, s), { mutate: function(v) {
            function b(X) {
              return X = "idb://".concat(t, "/").concat(o, "/").concat(X), D[X] || (D[X] = new He());
            }
            var E, x, C, O = v.trans, D = v.mutatedParts || (v.mutatedParts = {}), R = b(""), K = b(":dels"), Y = v.type, z = v.type === "deleteRange" ? [v.range] : v.type === "delete" ? [v.keys] : v.values.length < 50 ? [Ur(f, v).filter(function(X) {
              return X;
            }), v.values] : [], U = z[0], H = z[1], z = v.trans._cache;
            return S(U) ? (R.addKeys(U), (z = Y === "delete" || U.length === H.length ? ji(U, z) : null) || K.addKeys(U), (z || H) && (E = b, x = z, C = H, c.indexes.forEach(function(X) {
              var ee = E(X.name || "");
              function fe(le) {
                return le != null ? X.extractKey(le) : null;
              }
              function ge(le) {
                return X.multiEntry && S(le) ? le.forEach(function(Re) {
                  return ee.addKey(Re);
                }) : ee.addKey(le);
              }
              (x || C).forEach(function(le, We) {
                var ue = x && fe(x[We]), We = C && fe(C[We]);
                ve(ue, We) !== 0 && (ue != null && ge(ue), We != null && ge(We));
              });
            }))) : U ? (H = { from: (H = U.lower) !== null && H !== void 0 ? H : e.MIN_KEY, to: (H = U.upper) !== null && H !== void 0 ? H : e.MAX_KEY }, K.add(H), R.add(H)) : (R.add(r), K.add(r), c.indexes.forEach(function(X) {
              return b(X.name).add(r);
            })), s.mutate(v).then(function(X) {
              return !U || v.type !== "add" && v.type !== "put" || (R.addKeys(X.results), g && g.forEach(function(ee) {
                for (var fe = v.values.map(function(ue) {
                  return ee.extractKey(ue);
                }), ge = ee.keyPath.findIndex(function(ue) {
                  return ue === f.keyPath;
                }), le = 0, Re = X.results.length; le < Re; ++le) fe[le][ge] = X.results[le];
                b(ee.name).addKeys(fe);
              })), O.mutatedParts = zn(O.mutatedParts || {}, D), X;
            });
          } }), h = function(b) {
            var E = b.query, b = E.index, E = E.range;
            return [b, new He((b = E.lower) !== null && b !== void 0 ? b : e.MIN_KEY, (E = E.upper) !== null && E !== void 0 ? E : e.MAX_KEY)];
          }, T = { get: function(v) {
            return [f, new He(v.key)];
          }, getMany: function(v) {
            return [f, new He().addKeys(v.keys)];
          }, count: h, query: h, openCursor: h };
          return y(T).forEach(function(v) {
            _[v] = function(b) {
              var E = ne.subscr, x = !!E, C = Fi(ne, s) && Li(v, b) ? b.obsSet = {} : E;
              if (x) {
                var O = function(H) {
                  return H = "idb://".concat(t, "/").concat(o, "/").concat(H), C[H] || (C[H] = new He());
                }, D = O(""), R = O(":dels"), E = T[v](b), x = E[0], E = E[1];
                if ((v === "query" && x.isPrimaryKey && !b.values ? R : O(x.name || "")).add(E), !x.isPrimaryKey) {
                  if (v !== "count") {
                    var K = v === "query" && m && b.values && s.query(u(u({}, b), { values: !1 }));
                    return s[v].apply(this, arguments).then(function(H) {
                      if (v === "query") {
                        if (m && b.values) return K.then(function(fe) {
                          return fe = fe.result, D.addKeys(fe), H;
                        });
                        var z = b.values ? H.result.map(p) : H.result;
                        (b.values ? D : R).addKeys(z);
                      } else if (v === "openCursor") {
                        var X = H, ee = b.values;
                        return X && Object.create(X, { key: { get: function() {
                          return R.addKey(X.primaryKey), X.key;
                        } }, primaryKey: { get: function() {
                          var fe = X.primaryKey;
                          return R.addKey(fe), fe;
                        } }, value: { get: function() {
                          return ee && D.addKey(X.primaryKey), X.value;
                        } } });
                      }
                      return H;
                    });
                  }
                  R.add(r);
                }
              }
              return s[v].apply(this, arguments);
            };
          }), _;
        } });
      } };
      function Mi(e, t, r) {
        if (r.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var o = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return r.numFailures === o ? null : (t = u({}, t), S(t.keys) && (t.keys = t.keys.filter(function(s, c) {
          return !(c in r.failures);
        })), "values" in t && S(t.values) && (t.values = t.values.filter(function(s, c) {
          return !(c in r.failures);
        })), t);
      }
      function Gr(e, t) {
        return r = e, ((o = t).lower === void 0 || (o.lowerOpen ? 0 < ve(r, o.lower) : 0 <= ve(r, o.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? ve(e, t.upper) < 0 : ve(e, t.upper) <= 0));
        var r, o;
      }
      function Bi(e, t, T, o, s, c) {
        if (!T || T.length === 0) return e;
        var f = t.query.index, p = f.multiEntry, m = t.query.range, g = o.schema.primaryKey.extractKey, _ = f.extractKey, h = (f.lowLevelIndex || f).extractKey, T = T.reduce(function(v, b) {
          var E = v, x = [];
          if (b.type === "add" || b.type === "put") for (var C = new He(), O = b.values.length - 1; 0 <= O; --O) {
            var D, R = b.values[O], K = g(R);
            C.hasKey(K) || (D = _(R), (p && S(D) ? D.some(function(X) {
              return Gr(X, m);
            }) : Gr(D, m)) && (C.addKey(K), x.push(R)));
          }
          switch (b.type) {
            case "add":
              var Y = new He().addKeys(t.values ? v.map(function(ee) {
                return g(ee);
              }) : v), E = v.concat(t.values ? x.filter(function(ee) {
                return ee = g(ee), !Y.hasKey(ee) && (Y.addKey(ee), !0);
              }) : x.map(function(ee) {
                return g(ee);
              }).filter(function(ee) {
                return !Y.hasKey(ee) && (Y.addKey(ee), !0);
              }));
              break;
            case "put":
              var U = new He().addKeys(b.values.map(function(ee) {
                return g(ee);
              }));
              E = v.filter(function(ee) {
                return !U.hasKey(t.values ? g(ee) : ee);
              }).concat(t.values ? x : x.map(function(ee) {
                return g(ee);
              }));
              break;
            case "delete":
              var H = new He().addKeys(b.keys);
              E = v.filter(function(ee) {
                return !H.hasKey(t.values ? g(ee) : ee);
              });
              break;
            case "deleteRange":
              var z = b.range;
              E = v.filter(function(ee) {
                return !Gr(g(ee), z);
              });
          }
          return E;
        }, e);
        return T === e ? e : (T.sort(function(v, b) {
          return ve(h(v), h(b)) || ve(g(v), g(b));
        }), t.limit && t.limit < 1 / 0 && (T.length > t.limit ? T.length = t.limit : e.length === t.limit && T.length < t.limit && (s.dirty = !0)), c ? Object.freeze(T) : T);
      }
      function Ki(e, t) {
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
                  var T = h[_], v = Wt["idb://".concat(t, "/").concat(T)];
                  if (v) {
                    var b = e.table(T), E = v.optimisticOps.filter(function(ee) {
                      return ee.trans === p;
                    });
                    if (p._explicit && m && p.mutatedParts) for (var x = 0, C = Object.values(v.queries.query); x < C.length; x++) for (var O = 0, D = (Y = C[x]).slice(); O < D.length; O++) Mr((U = D[O]).obsSet, p.mutatedParts) && (Pe(Y, U), U.subscribers.forEach(function(ee) {
                      return g.add(ee);
                    }));
                    else if (0 < E.length) {
                      v.optimisticOps = v.optimisticOps.filter(function(ee) {
                        return ee.trans !== p;
                      });
                      for (var R = 0, K = Object.values(v.queries.query); R < K.length; R++) for (var Y, U, H, z = 0, X = (Y = K[R]).slice(); z < X.length; z++) (U = X[z]).res != null && p.mutatedParts && (m && !U.dirty ? (H = Object.isFrozen(U.res), H = Bi(U.res, U.req, E, b, U, H), U.dirty ? (Pe(Y, U), U.subscribers.forEach(function(ee) {
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
            if (!Fi(ne, o) || !Li("query", c)) return o.query(c);
            var f = ((g = ne.trans) === null || g === void 0 ? void 0 : g.db._options.cache) === "immutable", h = ne, p = h.requery, m = h.signal, g = function(b, E, x, C) {
              var O = Wt["idb://".concat(b, "/").concat(E)];
              if (!O) return [];
              if (!(E = O.queries[x])) return [null, !1, O, null];
              var D = E[(C.query ? C.query.index.name : null) || ""];
              if (!D) return [null, !1, O, null];
              switch (x) {
                case "query":
                  var R = D.find(function(K) {
                    return K.req.limit === C.limit && K.req.values === C.values && Ki(K.req.query.range, C.query.range);
                  });
                  return R ? [R, !0, O, D] : [D.find(function(K) {
                    return ("limit" in K.req ? K.req.limit : 1 / 0) >= C.limit && (!C.values || K.req.values) && cs(K.req.query.range, C.query.range);
                  }), !1, O, D];
                case "count":
                  return R = D.find(function(K) {
                    return Ki(K.req.query.range, C.query.range);
                  }), [R, !!R, O, D];
              }
            }(t, r, "query", c), _ = g[0], h = g[1], T = g[2], v = g[3];
            return _ && h ? _.obsSet = c.obsSet : (h = o.query(c).then(function(b) {
              var E = b.result;
              if (_ && (_.res = E), f) {
                for (var x = 0, C = E.length; x < C; ++x) Object.freeze(E[x]);
                Object.freeze(E);
              } else b.result = Ge(E);
              return b;
            }).catch(function(b) {
              return v && _ && Pe(v, _), Promise.reject(b);
            }), _ = { obsSet: c.obsSet, promise: h, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, v ? v.push(_) : (v = [_], (T = T || (Wt["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = v)), ls(_, v, p, m), _.promise.then(function(b) {
              return { result: Bi(b.result, c, T?.optimisticOps, o, _, f) };
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
        if (isNaN(e) || e < 0.1) throw new j.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new j.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(es), r.stores({}), this._state.autoSchema = !1, r);
      }, Le.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || ne.letThrough || this._vip) ? e() : new J(function(r, o) {
          if (t._state.openComplete) return o(new j.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new j.DatabaseClosed());
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
        t ? (r.isBeingOpened && r.cancelOpen(new j.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new j.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
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
              m = t._deps, g = t.name, _ = m.indexedDB, m = m.IDBKeyRange, jr(_) || g === Bn || kr(_, m).delete(g).catch(A), s();
            }), p.onerror = yt(c), p.onblocked = t._fireOnBlocked;
          }
          if (r) throw new j.InvalidArgument("Invalid closeOptions argument to db.delete()");
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
        return y(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), Le.prototype.transaction = function() {
        var e = (function(t, r, o) {
          var s = arguments.length;
          if (s < 2) throw new j.InvalidArgument("Too few arguments");
          for (var c = new Array(s - 1); --s; ) c[s - 1] = arguments[s];
          return o = c.pop(), [t, it(c), o];
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
            if (e != "rw" && e != Er) throw new j.InvalidArgument("Invalid transaction mode: " + e);
            c = Er;
          }
          if (s) {
            if (s.mode === xr && c === Er) {
              if (!p) throw new j.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              s = null;
            }
            s && f.forEach(function(g) {
              if (s && s.storeNames.indexOf(g) === -1) {
                if (!p) throw new j.SubTransaction("Table " + g + " not included in parent transaction.");
                s = null;
              }
            }), p && s && !s.active && (s = null);
          }
        } catch (g) {
          return s ? s._promise(null, function(_, h) {
            h(g);
          }) : Fe(g);
        }
        var m = (function g(_, h, T, v, b) {
          return J.resolve().then(function() {
            var E = ne.transless || ne, x = _._createTransaction(h, T, _._dbSchema, v);
            if (x.explicit = !0, E = { trans: x, transless: E }, v) x.idbtrans = v.idbtrans;
            else try {
              x.create(), x.idbtrans._explicit = !0, _._state.PR1398_maxLoop = 3;
            } catch (D) {
              return D.name === P.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                return g(_, h, T, null, b);
              })) : Fe(D);
            }
            var C, O = at(b);
            return O && an(), E = J.follow(function() {
              var D;
              (C = b.call(x, x)) && (O ? (D = Nt.bind(null, null), C.then(D, D)) : typeof C.next == "function" && typeof C.throw == "function" && (C = $r(C)));
            }, E), (C && typeof C.then == "function" ? J.resolve(C).then(function(D) {
              return x.active ? D : Fe(new j.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : E.then(function() {
              return C;
            })).then(function(D) {
              return v && x._resolve(), x._completion.then(function() {
                return D;
              });
            }).catch(function(D) {
              return x._reject(D), Fe(D);
            });
          });
        }).bind(null, this, c, f, s, r);
        return s ? s._promise(c, m, "lock") : ne.trans ? Ut(ne.transless, function() {
          return o._whenReady(m);
        }) : this._whenReady(m);
      }, Le.prototype.table = function(e) {
        if (!G(this._allTables, e)) throw new j.InvalidTable("Table ".concat(e, " does not exist"));
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
          var v = function() {
            for (var b = [], E = 0; E < arguments.length; E++) b[E] = arguments[E];
            r.on(h).unsubscribe(v), T.apply(r, b);
          };
          return r.on(h, v);
        }, this.on.ready.subscribe = ke(this.on.ready.subscribe, function(h) {
          return function(T, v) {
            Le.vip(function() {
              var b, E = r._state;
              E.openComplete ? (E.dbOpenError || J.resolve().then(T), v && h(T)) : E.onReadyBeingFired ? (E.onReadyBeingFired.push(T), v && h(T)) : (h(T), b = r, v || h(function x() {
                b.on.ready.unsubscribe(T), b.on.ready.unsubscribe(x);
              }));
            });
          };
        }), this.Collection = (s = this, yn(Wo.prototype, function(C, x) {
          this.db = s;
          var v = yi, b = null;
          if (x) try {
            v = x();
          } catch (O) {
            b = O;
          }
          var E = C._ctx, x = E.table, C = x.hook.reading.fire;
          this._ctx = { table: x, index: E.index, isPrimKey: !E.index || x.schema.primKey.keyPath && E.index === x.schema.primKey.name, range: v, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: b, or: E.or, valueMapper: C !== L ? C : null };
        })), this.Table = (c = this, yn(wi.prototype, function(h, T, v) {
          this.db = c, this._tx = v, this.name = h, this.schema = T, this.hook = c._allTables[h] ? c._allTables[h].hook : mn(null, { creating: [k, A], reading: [Z, L], updating: [V, A], deleting: [F, A] });
        })), this.Transaction = (f = this, yn(Xo.prototype, function(h, T, v, b, E) {
          var x = this;
          h !== "readonly" && T.forEach(function(C) {
            C = (C = v[C]) === null || C === void 0 ? void 0 : C.yProps, C && (T = T.concat(C.map(function(O) {
              return O.updatesTable;
            })));
          }), this.db = f, this.mode = h, this.storeNames = T, this.schema = v, this.chromeTransactionDurability = b, this.idbtrans = null, this.on = mn(this, "complete", "error", "abort"), this.parent = E || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new J(function(C, O) {
            x._resolve = C, x._reject = O;
          }), this._completion.then(function() {
            x.active = !1, x.on.complete.fire();
          }, function(C) {
            var O = x.active;
            return x.active = !1, x.on.error.fire(C), x.parent ? x.parent._reject(C) : O && x.idbtrans && x.idbtrans.abort(), Fe(C);
          });
        })), this.Version = (p = this, yn(rs.prototype, function(h) {
          this.db = p, this._cfg = { version: h, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (m = this, yn(Ci.prototype, function(h, T, v) {
          if (this.db = m, this._ctx = { table: h, index: T === ":id" ? null : T, or: v }, this._cmp = this._ascending = ve, this._descending = function(b, E) {
            return ve(E, b);
          }, this._max = function(b, E) {
            return 0 < ve(b, E) ? b : E;
          }, this._min = function(b, E) {
            return ve(b, E) < 0 ? b : E;
          }, this._IDBKeyRange = m._deps.IDBKeyRange, !this._IDBKeyRange) throw new j.MissingAPI();
        })), this.on("versionchange", function(h) {
          0 < h.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(h) {
          !h.newVersion || h.newVersion < h.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(h.oldVersion / 10));
        }), this._maxKey = wn(t.IDBKeyRange), this._createTransaction = function(h, T, v, b) {
          return new r.Transaction(h, T, v, r._options.chromeTransactionDurability, b);
        }, this._fireOnBlocked = function(h) {
          r.on("blocked").fire(h), un.filter(function(T) {
            return T.name === r.name && T !== r && !T._state.vcFired;
          }).map(function(T) {
            return T.on("versionchange").fire(h);
          });
        }, this.use(as), this.use(fs), this.use(us), this.use(os), this.use(ss);
        var _ = new Proxy(this, { get: function(h, T, v) {
          if (T === "_vip") return !0;
          if (T === "table") return function(E) {
            return er(r.table(E), _);
          };
          var b = Reflect.get(h, T, v);
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
      function qi(e) {
        var t, r = !1, o = new ds(function(s) {
          var c = at(e), f, p = !1, m = {}, g = {}, _ = { get closed() {
            return p;
          }, unsubscribe: function() {
            p || (p = !0, f && f.abort(), h && kt.storagemutated.unsubscribe(v));
          } };
          s.start && s.start(_);
          var h = !1, T = function() {
            return Sr(b);
          }, v = function(E) {
            zn(m, E), Mr(g, m) && T();
          }, b = function() {
            var E, x, C;
            !p && tr.indexedDB && (m = {}, E = {}, f && f.abort(), f = new AbortController(), C = function(O) {
              var D = on();
              try {
                c && an();
                var R = Ot(e, O);
                return R = c ? R.finally(Nt) : R;
              } finally {
                D && sn();
              }
            }(x = { subscr: E, signal: f.signal, requery: T, querier: e, trans: null }), Promise.resolve(C).then(function(O) {
              r = !0, t = O, p || x.signal.aborted || (m = {}, function(D) {
                for (var R in D) if (G(D, R)) return;
                return 1;
              }(g = E) || h || (kt(bn, v), h = !0), Sr(function() {
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
        var t = jt;
        try {
          jt = !0, kt.storagemutated.fire(e), qr(e, !0);
        } finally {
          jt = t;
        }
      }
      re(Yt, u(u({}, Ne), { delete: function(e) {
        return new Yt(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new Yt(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = Yt.dependencies, r = t.indexedDB, t = t.IDBKeyRange, (jr(r) ? Promise.resolve(r.databases()).then(function(o) {
            return o.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== Bn;
            });
          }) : kr(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return Fe(new j.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          N(this, e);
        };
      }, ignoreTransaction: function(e) {
        return ne.trans ? Ut(ne.transless, e) : e();
      }, vip: Fr, async: function(e) {
        return function() {
          try {
            var t = $r(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : J.resolve(t);
          } catch (r) {
            return Fe(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = $r(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : J.resolve(o);
        } catch (s) {
          return Fe(s);
        }
      }, currentTransaction: { get: function() {
        return ne.trans || null;
      } }, waitFor: function(e, t) {
        return t = J.resolve(typeof e == "function" ? Yt.ignoreTransaction(e) : e).timeout(t || 6e4), ne.trans ? ne.trans.waitFor(t) : t;
      }, Promise: J, debug: { get: function() {
        return Q;
      }, set: function(e) {
        me(e);
      } }, derive: de, extend: N, props: re, override: ke, Events: mn, on: kt, liveQuery: qi, extendObservabilitySet: zn, getByKeyPath: ie, setByKeyPath: oe, delByKeyPath: function(e, t) {
        typeof t == "string" ? oe(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          oe(e, r, void 0);
        });
      }, shallowClone: Ee, deepClone: Ge, getObjectDiff: Vr, cmp: ve, asap: je, minKey: -1 / 0, addons: [], connections: un, errnames: P, dependencies: tr, cache: Wt, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), Yt.maxKey = wn(Yt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (kt(bn, function(e) {
        jt || (e = new CustomEvent(Ar, { detail: e }), jt = !0, dispatchEvent(e), jt = !1);
      }), addEventListener(Ar, function(e) {
        e = e.detail, jt || Wr(e);
      }));
      var hn, jt = !1, $i = function() {
      };
      return typeof BroadcastChannel < "u" && (($i = function() {
        (hn = new BroadcastChannel(Ar)).onmessage = function(e) {
          return e.data && Wr(e.data);
        };
      })(), typeof hn.unref == "function" && hn.unref(), kt(bn, function(e) {
        jt || hn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Et.disableBfCache && e.persisted) {
          Q && console.debug("Dexie: handling persisted pagehide"), hn?.close();
          for (var t = 0, r = un; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Et.disableBfCache && e.persisted && (Q && console.debug("Dexie: handling persisted pageshow"), $i(), Wr({ all: new He(-1 / 0, [[]]) }));
      })), J.rejectionMapper = function(e, t) {
        return !e || e instanceof ht || e instanceof TypeError || e instanceof SyntaxError || !e.name || !$[e.name] ? e : (t = new $[e.name](t || e.message, e), "stack" in e && he(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, me(Q), u(Et, Object.freeze({ __proto__: null, Dexie: Et, liveQuery: qi, Entity: vi, cmp: ve, PropModification: vn, replacePrefix: function(e, t) {
        return new vn({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new vn({ add: e });
      }, remove: function(e) {
        return new vn({ remove: e });
      }, default: Et, RangeSet: He, mergeRanges: xn, rangesOverlap: Ni }), { default: Et }), Et;
    });
  }(Eo)), Eo.exports;
}
var _h = wh();
const Us = /* @__PURE__ */ gh(_h), hu = Symbol.for("Dexie"), Do = globalThis[hu] || (globalThis[hu] = Us);
if (Us.semVer !== Do.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Us.semVer} and ${Do.semVer}`);
const {
  liveQuery: Bh,
  mergeRanges: Kh,
  rangesOverlap: qh,
  RangeSet: $h,
  cmp: Vh,
  Entity: Uh,
  PropModification: Gh,
  replacePrefix: Hh,
  add: Wh,
  remove: Yh,
  DexieYProvider: Qh
} = Do, Sh = /* @__PURE__ */ $u({
  __name: "oscd-loader",
  props: {
    doc: {},
    pluginLocation: {}
  },
  setup(n) {
    const i = n, a = zi(0), u = zi(), l = new rh(), d = Lc(), y = zi();
    Po(W), Po(N), mf(() => {
      i.doc && he(i.doc);
    }), wo(
      () => d.value,
      (ae) => {
        ae && S(ae);
      },
      { immediate: !0 }
    );
    async function S(ae) {
      const ye = new Do(ae);
      await ye.open(), y.value = hh(ye);
    }
    async function N() {
      try {
        if (!u.value)
          return;
        const ke = (await import(i.pluginLocation)).default;
        class pe extends ke {
        }
        const je = `oscd-plugin-${Date.now()}`;
        customElements.define(je, pe);
        const ie = document.createElement(je);
        u.value.innerHTML = "", u.value.appendChild(ie), Ce(l), re(document.head), i.doc && (he(i.doc), de(a.value));
      } catch (ae) {
        console.error("Failed to load plugin:", ae);
      }
    }
    function W() {
      u.value && (u.value.addEventListener("editor-action", (ae) => {
        G(Pc(Fp(ae.detail.action)));
      }), u.value.addEventListener("oscd-edit", (ae) => {
        const ye = ae.detail.edit ?? ae.detail, ke = Rc(ye);
        if (G(ke), !y.value) {
          console.warn("sdk is needed to translate and apply events");
          return;
        }
      }), u.value.addEventListener("oscd-edit-v2", (ae) => B(ae)));
    }
    function B(ae) {
      const ye = ae.detail.edit;
      G(ye);
    }
    function G(ae) {
      if (!y.value) {
        console.warn("sdk is needed to translate and apply events");
        return;
      }
      l.commit(ae), a.value += 1, de(a.value), kc(ae, y.value);
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
    function he(ae) {
      const ye = u.value?.firstElementChild;
      ye && (ye.doc = ae);
    }
    function de(ae) {
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
    var i = typeof Object.defineProperties == "function" ? Object.defineProperty : function(I, k, F) {
      return I == Array.prototype || I == Object.prototype || (I[k] = F.value), I;
    };
    function a(I) {
      I = [typeof globalThis == "object" && globalThis, I, typeof window == "object" && window, typeof self == "object" && self, typeof Vs == "object" && Vs];
      for (var k = 0; k < I.length; ++k) {
        var F = I[k];
        if (F && F.Math == Math) return F;
      }
      throw Error("Cannot find global object");
    }
    var u = a(this);
    function l(I, k) {
      if (k) e: {
        var F = u;
        I = I.split(".");
        for (var V = 0; V < I.length - 1; V++) {
          var M = I[V];
          if (!(M in F)) break e;
          F = F[M];
        }
        I = I[I.length - 1], V = F[I], k = k(V), k != V && k != null && i(F, I, { configurable: !0, writable: !0, value: k });
      }
    }
    l("Symbol", function(I) {
      function k(M) {
        if (this instanceof k) throw new TypeError("Symbol is not a constructor");
        return new F("jscomp_symbol_" + (M || "") + "_" + V++, M);
      }
      function F(M, te) {
        this.l = M, i(this, "description", { configurable: !0, writable: !0, value: te });
      }
      if (I) return I;
      F.prototype.toString = function() {
        return this.l;
      };
      var V = 0;
      return k;
    }), l("Symbol.iterator", function(I) {
      if (I) return I;
      I = Symbol("Symbol.iterator");
      for (var k = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), F = 0; F < k.length; F++) {
        var V = u[k[F]];
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
    function y(I) {
      var k = typeof Symbol < "u" && Symbol.iterator && I[Symbol.iterator];
      return k ? k.call(I) : { next: n(I) };
    }
    function S(I) {
      if (!(I instanceof Array)) {
        I = y(I);
        for (var k, F = []; !(k = I.next()).done; ) F.push(k.value);
        I = F;
      }
      return I;
    }
    var N = typeof Object.create == "function" ? Object.create : function(I) {
      function k() {
      }
      return k.prototype = I, new k();
    }, W = function() {
      function I() {
        function F() {
        }
        return Reflect.construct(F, [], function() {
        }), new F() instanceof F;
      }
      if (typeof Reflect < "u" && Reflect.construct) {
        if (I()) return Reflect.construct;
        var k = Reflect.construct;
        return function(F, V, M) {
          return F = k(F, V), M && Reflect.setPrototypeOf(F, M.prototype), F;
        };
      }
      return function(F, V, M) {
        return M === void 0 && (M = F), M = N(M.prototype || Object.prototype), Function.prototype.apply.call(
          F,
          M,
          V
        ) || M;
      };
    }(), B;
    if (typeof Object.setPrototypeOf == "function") B = Object.setPrototypeOf;
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
      B = G ? function(I, k) {
        if (I.__proto__ = k, I.__proto__ !== k) throw new TypeError(I + " is not extensible");
        return I;
      } : null;
    }
    var he = B, de = window, Ce;
    if (((Ce = de.CustomElementRegistryPolyfill) == null ? void 0 : Ce.formAssociated) === void 0) {
      var ae = {};
      de.CustomElementRegistryPolyfill = (ae.formAssociated = /* @__PURE__ */ new Set(), ae);
    }
    var ye = window.HTMLElement, ke = window.customElements.define, pe = window.customElements.get, je = window.customElements, ie = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), Ee = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakMap();
    function it() {
      var I;
      this.promise = new Promise(function(k) {
        I = k;
      }), this.resolve = I;
    }
    function rt() {
      this.h = /* @__PURE__ */ new Map(), this.m = /* @__PURE__ */ new Map(), this.j = /* @__PURE__ */ new Map(), this.i = /* @__PURE__ */ new Map();
    }
    rt.prototype.define = function(I, k) {
      if (I = I.toLowerCase(), this.h.get(I) !== void 0) throw new DOMException(`Failed to execute 'define' on 'CustomElementRegistry': the name "` + I + '" has already been used with this registry');
      if (this.m.get(k) !== void 0) throw new DOMException("Failed to execute 'define' on 'CustomElementRegistry': this constructor has already been used with this registry");
      var F = k.prototype.attributeChangedCallback, V = new Set(k.observedAttributes || []);
      wt(k, V, F);
      var M = pe.call(je, I), te, Q, me = (Q = (te = M) == null ? void 0 : te.s) != null ? Q : k.formAssociated || de.CustomElementRegistryPolyfill.formAssociated.has(I);
      if (me && de.CustomElementRegistryPolyfill.formAssociated.add(I), me != k.formAssociated) try {
        k.formAssociated = me;
      } catch {
      }
      if (F = {
        tagName: I,
        g: k,
        connectedCallback: k.prototype.connectedCallback,
        disconnectedCallback: k.prototype.disconnectedCallback,
        adoptedCallback: k.prototype.adoptedCallback,
        attributeChangedCallback: F,
        formAssociated: me,
        formAssociatedCallback: k.prototype.formAssociatedCallback,
        formDisabledCallback: k.prototype.formDisabledCallback,
        formResetCallback: k.prototype.formResetCallback,
        formStateRestoreCallback: k.prototype.formStateRestoreCallback,
        observedAttributes: V
      }, this.h.set(I, F), this.m.set(k, F), M || (M = At(I), ke.call(je, I, M)), this === window.customElements && (Ee.set(k, F), F.o = M), M = this.i.get(I)) for (this.i.delete(I), M = y(M), V = M.next(); !V.done; V = M.next()) V = V.value, oe.delete(V), ze(V, F, !0);
      return M = this.j.get(I), M !== void 0 && (M.resolve(k), this.j.delete(I)), k;
    }, rt.prototype.upgrade = function(I) {
      for (var k = [], F = 0; F < arguments.length; ++F) k[F] = arguments[F];
      ot.push(this), je.upgrade.apply(je, S(k)), ot.pop();
    }, rt.prototype.get = function(I) {
      var k;
      return (k = this.h.get(I)) == null ? void 0 : k.g;
    }, rt.prototype.whenDefined = function(I) {
      var k = this.h.get(I);
      return k !== void 0 ? Promise.resolve(k.g) : (k = this.j.get(I), k === void 0 && (k = new it(), this.j.set(I, k)), k.promise);
    };
    function De(I, k, F, V) {
      var M = I.i.get(F);
      M || I.i.set(F, M = /* @__PURE__ */ new Set()), V ? M.add(k) : M.delete(k);
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
        var F = Reflect.construct(ye, [], this.constructor);
        Object.setPrototypeOf(F, HTMLElement.prototype);
        e: {
          var V = F.getRootNode();
          if (!(V === document || V instanceof ShadowRoot)) {
            if (V = ot[ot.length - 1], V instanceof CustomElementRegistry) {
              var M = V;
              break e;
            }
            V = V.getRootNode(), V === document || V instanceof ShadowRoot || (V = ((M = q.get(V)) == null ? void 0 : M.getRootNode()) || document);
          }
          M = V.registry;
        }
        return M = M || window.customElements, (V = M.h.get(I)) ? ze(F, V) : oe.set(F, M), F;
      }
      return u.Object.defineProperty(
        k,
        "formAssociated",
        { configurable: !0, enumerable: !0, get: function() {
          return de.CustomElementRegistryPolyfill.formAssociated.has(I);
        } }
      ), k.prototype.connectedCallback = function(F) {
        for (var V = [], M = 0; M < arguments.length; ++M) V[M] = arguments[M];
        be(this), (M = ie.get(this)) ? M.connectedCallback && M.connectedCallback.apply(this, V) : De(oe.get(this), this, I, !0);
      }, k.prototype.disconnectedCallback = function(F) {
        for (var V = [], M = 0; M < arguments.length; ++M) V[M] = arguments[M];
        (M = ie.get(this)) ? M.disconnectedCallback && M.disconnectedCallback.apply(this, V) : De(
          oe.get(this),
          this,
          I,
          !1
        );
      }, k.prototype.adoptedCallback = function(F) {
        for (var V = [], M = 0; M < arguments.length; ++M) V[M] = arguments[M];
        var te, Q;
        (te = ie.get(this)) == null || (Q = te.adoptedCallback) == null || Q.apply(this, V);
      }, k.prototype.formAssociatedCallback = function(F) {
        for (var V = [], M = 0; M < arguments.length; ++M) V[M] = arguments[M];
        if (M = ie.get(this), M != null && M.formAssociated) {
          var te;
          M == null || (te = M.formAssociatedCallback) == null || te.apply(this, V);
        }
      }, k.prototype.formDisabledCallback = function(F) {
        for (var V = [], M = 0; M < arguments.length; ++M) V[M] = arguments[M];
        if (M = ie.get(this), M != null && M.formAssociated) {
          var te;
          M == null || (te = M.formDisabledCallback) == null || te.apply(this, V);
        }
      }, k.prototype.formResetCallback = function(F) {
        for (var V = [], M = 0; M < arguments.length; ++M) V[M] = arguments[M];
        if (M = ie.get(this), M != null && M.formAssociated) {
          var te;
          M == null || (te = M.formResetCallback) == null || te.apply(this, V);
        }
      }, k.prototype.formStateRestoreCallback = function(F) {
        for (var V = [], M = 0; M < arguments.length; ++M) V[M] = arguments[M];
        if (M = ie.get(this), M != null && M.formAssociated) {
          var te;
          M == null || (te = M.formStateRestoreCallback) == null || te.apply(this, V);
        }
      }, k;
    }
    window.CustomElementRegistry = rt;
    function wt(I, k, F) {
      if (k.size !== 0 && F !== void 0) {
        var V = I.prototype.setAttribute;
        V && (I.prototype.setAttribute = function(Q, me) {
          if (be(this), Q = Q.toLowerCase(), k.has(Q)) {
            var ce = this.getAttribute(Q);
            V.call(this, Q, me), F.call(this, Q, ce, me);
          } else V.call(this, Q, me);
        });
        var M = I.prototype.removeAttribute;
        M && (I.prototype.removeAttribute = function(Q) {
          if (be(this), Q = Q.toLowerCase(), k.has(Q)) {
            var me = this.getAttribute(Q);
            M.call(this, Q), F.call(this, Q, me, null);
          } else M.call(this, Q);
        });
        var te = I.prototype.toggleAttribute;
        te && (I.prototype.toggleAttribute = function(Q, me) {
          if (be(this), Q = Q.toLowerCase(), k.has(Q)) {
            var ce = this.getAttribute(Q);
            te.call(this, Q, me), me = this.getAttribute(Q), ce !== me && F.call(this, Q, ce, me);
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
      var F;
      (F = Ue) == null || F.delete(I), k.attributeChangedCallback && k.observedAttributes.forEach(function(V) {
        I.hasAttribute(V) && k.attributeChangedCallback.call(I, V, null, I.getAttribute(V));
      });
    }
    function et(I) {
      var k = Object.getPrototypeOf(I);
      if (k !== window.HTMLElement) return k === ye ? Object.setPrototypeOf(I, window.HTMLElement) : et(k);
    }
    function ze(I, k, F) {
      F = F === void 0 ? !1 : F, Object.setPrototypeOf(I, k.g.prototype), ie.set(I, k), Ge = I;
      try {
        new k.g();
      } catch {
        et(k.g), new k.g();
      }
      k.attributeChangedCallback && (Ue === void 0 || I.hasAttributes() ? Pe(I, k) : Ue.add(I)), F && k.connectedCallback && I.isConnected && k.connectedCallback.call(I);
    }
    var at = Element.prototype.attachShadow;
    Element.prototype.attachShadow = function(I, k) {
      for (var F = [], V = 1; V < arguments.length; ++V) F[V - 1] = arguments[V];
      var M = Object.assign({}, I);
      return V = I.customElements, V = I.registry === void 0 ? V : I.registry, M = (delete M.customElements, delete M.registry, M), F = at.call.apply(at, [this, M].concat(S(F))), V !== void 0 && (F.customElements = F.registry = V), F;
    };
    var ot = [document];
    function ht(I, k, F) {
      var V = (F ? Object.getPrototypeOf(F) : I.prototype)[k];
      I.prototype[k] = function(M) {
        for (var te = [], Q = 0; Q < arguments.length; ++Q) te[Q] = arguments[Q];
        return ot.push(this), te = V.apply(F || this, te), te !== void 0 && q.set(te, this), ot.pop(), te;
      };
    }
    ht(ShadowRoot, "createElement", document), ht(ShadowRoot, "createElementNS", document), ht(ShadowRoot, "importNode", document), ht(Element, "insertAdjacentHTML");
    function rn(I) {
      var k = Object.getOwnPropertyDescriptor(I.prototype, "innerHTML");
      Object.defineProperty(I.prototype, "innerHTML", Object.assign({}, k, { set: function(F) {
        ot.push(this), k.set.call(this, F), ot.pop();
      } }));
    }
    if (rn(Element), rn(ShadowRoot), Object.defineProperty(window, "customElements", { value: new CustomElementRegistry(), configurable: !0, writable: !0 }), window.ElementInternals && window.ElementInternals.prototype.setFormValue) {
      var It = /* @__PURE__ */ new WeakMap(), pt = HTMLElement.prototype.attachInternals, P = ["setFormValue", "setValidity", "checkValidity", "reportValidity"];
      HTMLElement.prototype.attachInternals = function(I) {
        for (var k = [], F = 0; F < arguments.length; ++F) k[F] = arguments[F];
        return k = pt.call.apply(pt, [this].concat(S(k))), It.set(k, this), k;
      }, P.forEach(function(I) {
        var k = window.ElementInternals.prototype, F = k[I];
        k[I] = function(V) {
          for (var M = [], te = 0; te < arguments.length; ++te) M[te] = arguments[te];
          if (te = It.get(this), ie.get(te).formAssociated === !0) return F?.call.apply(F, [this].concat(S(M)));
          throw new DOMException("Failed to execute " + F + " on 'ElementInternals': The target element is not a form-associated custom element.");
        };
      });
      var w = function(I) {
        var k = W(Array, [].concat(S(I)), this.constructor);
        return k.l = I, k;
      }, j = w, $ = Array;
      if (j.prototype = N($.prototype), j.prototype.constructor = j, he) he(j, $);
      else for (var Ne in $) if (Ne != "prototype") if (Object.defineProperties) {
        var A = Object.getOwnPropertyDescriptor($, Ne);
        A && Object.defineProperty(j, Ne, A);
      } else j[Ne] = $[Ne];
      j.u = $.prototype, u.Object.defineProperty(w.prototype, "value", { configurable: !0, enumerable: !0, get: function() {
        var I;
        return ((I = this.l.find(function(k) {
          return k.checked === !0;
        })) == null ? void 0 : I.value) || "";
      } });
      var L = function(I) {
        var k = this, F = /* @__PURE__ */ new Map();
        I.forEach(function(V, M) {
          var te = V.getAttribute("name"), Q = F.get(te) || [];
          k[+M] = V, Q.push(V), F.set(te, Q);
        }), this.length = I.length, F.forEach(function(V, M) {
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
          I = y(I);
          for (var F = I.next(); !F.done; F = I.next()) {
            F = F.value;
            var V = ie.get(F);
            V && V.formAssociated !== !0 || k.push(F);
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
      u = i.api.activeFileName.subscribe(async (y, S) => {
        d(y), l.value = y;
      }), i.api.activeFileName.value && (l.value = i.api.activeFileName.value, d(i.api.activeFileName.value));
    }), ua(() => {
      u();
    });
    async function d(y) {
      if (!y)
        return;
      const { xmlDocument: S } = await xd({ databaseName: y });
      a.value = S;
    }
    return (y, S) => (uc(), Cf(Sh, {
      doc: ju(a),
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
