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
const ft = {}, ii = [], Dn = () => {
}, Mc = () => !1, Ro = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // uppercase letter
(n.charCodeAt(2) > 122 || n.charCodeAt(2) < 97), Hs = (n) => n.startsWith("onUpdate:"), Bt = Object.assign, Ws = (n, i) => {
  const a = n.indexOf(i);
  a > -1 && n.splice(a, 1);
}, Fc = Object.prototype.hasOwnProperty, nt = (n, i) => Fc.call(n, i), Be = Array.isArray, Hi = (n) => ko(n) === "[object Map]", Kc = (n) => ko(n) === "[object Set]", qe = (n) => typeof n == "function", Ot = (n) => typeof n == "string", ci = (n) => typeof n == "symbol", Et = (n) => n !== null && typeof n == "object", vu = (n) => (Et(n) || qe(n)) && qe(n.then) && qe(n.catch), Bc = Object.prototype.toString, ko = (n) => Bc.call(n), qc = (n) => ko(n).slice(8, -1), Lc = (n) => ko(n) === "[object Object]", Ys = (n) => Ot(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, Wi = /* @__PURE__ */ Gs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), jo = (n) => {
  const i = /* @__PURE__ */ Object.create(null);
  return (a) => i[a] || (i[a] = n(a));
}, $c = /-(\w)/g, vr = jo(
  (n) => n.replace($c, (i, a) => a ? a.toUpperCase() : "")
), Uc = /\B([A-Z])/g, ti = jo(
  (n) => n.replace(Uc, "-$1").toLowerCase()
), gu = jo((n) => n.charAt(0).toUpperCase() + n.slice(1)), ps = jo(
  (n) => n ? `on${gu(n)}` : ""
), mr = (n, i) => !Object.is(n, i), hs = (n, ...i) => {
  for (let a = 0; a < n.length; a++)
    n[a](...i);
}, Cs = (n, i, a, u = !1) => {
  Object.defineProperty(n, i, {
    configurable: !0,
    enumerable: !1,
    writable: u,
    value: a
  });
}, Vc = (n) => {
  const i = parseFloat(n);
  return isNaN(i) ? n : i;
};
let ba;
const Mo = () => ba || (ba = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Qs(n) {
  if (Be(n)) {
    const i = {};
    for (let a = 0; a < n.length; a++) {
      const u = n[a], l = Ot(u) ? Yc(u) : Qs(u);
      if (l)
        for (const d in l)
          i[d] = l[d];
    }
    return i;
  } else if (Ot(n) || Et(n))
    return n;
}
const Gc = /;(?![^(]*\))/g, Hc = /:([^]+)/, Wc = /\/\*[^]*?\*\//g;
function Yc(n) {
  const i = {};
  return n.replace(Wc, "").split(Gc).forEach((a) => {
    if (a) {
      const u = a.split(Hc);
      u.length > 1 && (i[u[0].trim()] = u[1].trim());
    }
  }), i;
}
function Xs(n) {
  let i = "";
  if (Ot(n))
    i = n;
  else if (Be(n))
    for (let a = 0; a < n.length; a++) {
      const u = Xs(n[a]);
      u && (i += u + " ");
    }
  else if (Et(n))
    for (const a in n)
      n[a] && (i += a + " ");
  return i.trim();
}
const Qc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xc = /* @__PURE__ */ Gs(Qc);
function bu(n) {
  return !!n || n === "";
}
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let nn;
class zc {
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
function Jc() {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Eu(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, wa(this), Su(this);
    const i = lt, a = xn;
    lt = this, xn = !0;
    try {
      return this.fn();
    } finally {
      xu(this), lt = i, xn = a, this.flags &= -3;
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
    Ts(this) && this.run();
  }
  get dirty() {
    return Ts(this);
  }
}
let _u = 0, Yi, Qi;
function Eu(n, i = !1) {
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
function Su(n) {
  for (let i = n.deps; i; i = i.nextDep)
    i.version = -1, i.prevActiveLink = i.dep.activeLink, i.dep.activeLink = i;
}
function xu(n) {
  let i, a = n.depsTail, u = a;
  for (; u; ) {
    const l = u.prevDep;
    u.version === -1 ? (u === a && (a = l), Zs(u), Zc(u)) : i = u, u.dep.activeLink = u.prevActiveLink, u.prevActiveLink = void 0, u = l;
  }
  n.deps = i, n.depsTail = a;
}
function Ts(n) {
  for (let i = n.deps; i; i = i.nextDep)
    if (i.dep.version !== i.version || i.dep.computed && (Cu(i.dep.computed) || i.dep.version !== i.version))
      return !0;
  return !!n._dirty;
}
function Cu(n) {
  if (n.flags & 4 && !(n.flags & 16) || (n.flags &= -17, n.globalVersion === no) || (n.globalVersion = no, !n.isSSR && n.flags & 128 && (!n.deps && !n._dirty || !Ts(n))))
    return;
  n.flags |= 2;
  const i = n.dep, a = lt, u = xn;
  lt = n, xn = !0;
  try {
    Su(n);
    const l = n.fn(n._value);
    (i.version === 0 || mr(l, n._value)) && (n.flags |= 128, n._value = l, i.version++);
  } catch (l) {
    throw i.version++, l;
  } finally {
    lt = a, xn = u, xu(n), n.flags &= -3;
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
function Zc(n) {
  const { prevDep: i, nextDep: a } = n;
  i && (i.nextDep = a, n.prevDep = void 0), a && (a.prevDep = i, n.nextDep = void 0);
}
let xn = !0;
const Tu = [];
function ar() {
  Tu.push(xn), xn = !1;
}
function ur() {
  const n = Tu.pop();
  xn = n === void 0 ? !0 : n;
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
class el {
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
    if (!lt || !xn || lt === this.computed)
      return;
    let a = this.activeLink;
    if (a === void 0 || a.sub !== lt)
      a = this.activeLink = new el(lt, this), lt.deps ? (a.prevDep = lt.depsTail, lt.depsTail.nextDep = a, lt.depsTail = a) : lt.deps = lt.depsTail = a, Au(a);
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
), Os = Symbol(
  ""
), ro = Symbol(
  ""
);
function Ft(n, i, a) {
  if (xn && lt) {
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
  const C = (D) => {
    D && D.trigger();
  };
  if (zs(), i === "clear")
    v.forEach(C);
  else {
    const D = Be(n), W = D && Ys(a);
    if (D && a === "length") {
      const B = Number(u);
      v.forEach((G, re) => {
        (re === "length" || re === ro || !ci(re) && re >= B) && C(G);
      });
    } else
      switch ((a !== void 0 || v.has(void 0)) && C(v.get(a)), W && C(v.get(ro)), i) {
        case "add":
          D ? W && C(v.get("length")) : (C(v.get(Zr)), Hi(n) && C(v.get(Os)));
          break;
        case "delete":
          D || (C(v.get(Zr)), Hi(n) && C(v.get(Os)));
          break;
        case "set":
          Hi(n) && C(v.get(Zr));
          break;
      }
  }
  Js();
}
function ni(n) {
  const i = tt(n);
  return i === n ? i : (Ft(i, "iterate", ro), Cn(n) ? i : i.map(Jt));
}
function ta(n) {
  return Ft(n = tt(n), "iterate", ro), n;
}
const tl = {
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
    return ys(this, "values", Jt);
  }
};
function ys(n, i, a) {
  const u = ta(n), l = u[i]();
  return u !== n && !Cn(n) && (l._next = l.next, l.next = () => {
    const d = l._next();
    return d.value && (d.value = a(d.value)), d;
  }), l;
}
const nl = Array.prototype;
function rr(n, i, a, u, l, d) {
  const v = ta(n), C = v !== n && !Cn(n), D = v[i];
  if (D !== nl[i]) {
    const G = D.apply(n, d);
    return C ? Jt(G) : G;
  }
  let W = a;
  v !== n && (C ? W = function(G, re) {
    return a.call(this, Jt(G), re, n);
  } : a.length > 2 && (W = function(G, re) {
    return a.call(this, G, re, n);
  }));
  const B = D.call(v, W, u);
  return C && l ? l(B) : B;
}
function _a(n, i, a, u) {
  const l = ta(n);
  let d = a;
  return l !== n && (Cn(n) ? a.length > 3 && (d = function(v, C, D) {
    return a.call(this, v, C, D, n);
  }) : d = function(v, C, D) {
    return a.call(this, v, Jt(C), D, n);
  }), l[i](d, ...u);
}
function vs(n, i, a) {
  const u = tt(n);
  Ft(u, "iterate", ro);
  const l = u[i](...a);
  return (l === -1 || l === !1) && oa(a[0]) ? (a[0] = tt(a[0]), u[i](...a)) : l;
}
function Ui(n, i, a = []) {
  ar(), zs();
  const u = tt(n)[i].apply(n, a);
  return Js(), ur(), u;
}
const rl = /* @__PURE__ */ Gs("__proto__,__v_isRef,__isVue"), Ou = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(ci)
);
function il(n) {
  ci(n) || (n = String(n));
  const i = tt(this);
  return Ft(i, "has", n), i.hasOwnProperty(n);
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
      return u === (l ? d ? hl : Ru : d ? Nu : Du).get(i) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(i) === Object.getPrototypeOf(u) ? i : void 0;
    const v = Be(i);
    if (!l) {
      let D;
      if (v && (D = tl[a]))
        return D;
      if (a === "hasOwnProperty")
        return il;
    }
    const C = Reflect.get(
      i,
      a,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Kt(i) ? i : u
    );
    return (ci(a) ? Ou.has(a) : rl(a)) || (l || Ft(i, "get", a), d) ? C : Kt(C) ? v && Ys(a) ? C : C.value : Et(C) ? l ? ku(C) : ra(C) : C;
  }
}
class Pu extends Iu {
  constructor(i = !1) {
    super(!1, i);
  }
  set(i, a, u, l) {
    let d = i[a];
    if (!this._isShallow) {
      const D = ei(d);
      if (!Cn(u) && !ei(u) && (d = tt(d), u = tt(u)), !Be(i) && Kt(d) && !Kt(u))
        return D ? !1 : (d.value = u, !0);
    }
    const v = Be(i) && Ys(a) ? Number(a) < i.length : nt(i, a), C = Reflect.set(
      i,
      a,
      u,
      Kt(i) ? i : l
    );
    return i === tt(l) && (v ? mr(u, d) && sr(i, "set", a, u) : sr(i, "add", a, u)), C;
  }
  deleteProperty(i, a) {
    const u = nt(i, a);
    i[a];
    const l = Reflect.deleteProperty(i, a);
    return l && u && sr(i, "delete", a, void 0), l;
  }
  has(i, a) {
    const u = Reflect.has(i, a);
    return (!ci(a) || !Ou.has(a)) && Ft(i, "has", a), u;
  }
  ownKeys(i) {
    return Ft(
      i,
      "iterate",
      Be(i) ? "length" : Zr
    ), Reflect.ownKeys(i);
  }
}
class ol extends Iu {
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
const sl = /* @__PURE__ */ new Pu(), al = /* @__PURE__ */ new ol(), ul = /* @__PURE__ */ new Pu(!0);
const Is = (n) => n, po = (n) => Reflect.getPrototypeOf(n);
function cl(n, i, a) {
  return function(...u) {
    const l = this.__v_raw, d = tt(l), v = Hi(d), C = n === "entries" || n === Symbol.iterator && v, D = n === "keys" && v, W = l[n](...u), B = a ? Is : i ? Ps : Jt;
    return !i && Ft(
      d,
      "iterate",
      D ? Os : Zr
    ), {
      // iterator protocol
      next() {
        const { value: G, done: re } = W.next();
        return re ? { value: G, done: re } : {
          value: C ? [B(G[0]), B(G[1])] : B(G),
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
function ll(n, i) {
  const a = {
    get(l) {
      const d = this.__v_raw, v = tt(d), C = tt(l);
      n || (mr(l, C) && Ft(v, "get", l), Ft(v, "get", C));
      const { has: D } = po(v), W = i ? Is : n ? Ps : Jt;
      if (D.call(v, l))
        return W(d.get(l));
      if (D.call(v, C))
        return W(d.get(C));
      d !== v && d.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !n && Ft(tt(l), "iterate", Zr), Reflect.get(l, "size", l);
    },
    has(l) {
      const d = this.__v_raw, v = tt(d), C = tt(l);
      return n || (mr(l, C) && Ft(v, "has", l), Ft(v, "has", C)), l === C ? d.has(l) : d.has(l) || d.has(C);
    },
    forEach(l, d) {
      const v = this, C = v.__v_raw, D = tt(C), W = i ? Is : n ? Ps : Jt;
      return !n && Ft(D, "iterate", Zr), C.forEach((B, G) => l.call(d, W(B), W(G), v));
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
        !i && !Cn(l) && !ei(l) && (l = tt(l));
        const d = tt(this);
        return po(d).has.call(d, l) || (d.add(l), sr(d, "add", l, l)), this;
      },
      set(l, d) {
        !i && !Cn(d) && !ei(d) && (d = tt(d));
        const v = tt(this), { has: C, get: D } = po(v);
        let W = C.call(v, l);
        W || (l = tt(l), W = C.call(v, l));
        const B = D.call(v, l);
        return v.set(l, d), W ? mr(d, B) && sr(v, "set", l, d) : sr(v, "add", l, d), this;
      },
      delete(l) {
        const d = tt(this), { has: v, get: C } = po(d);
        let D = v.call(d, l);
        D || (l = tt(l), D = v.call(d, l)), C && C.call(d, l);
        const W = d.delete(l);
        return D && sr(d, "delete", l, void 0), W;
      },
      clear() {
        const l = tt(this), d = l.size !== 0, v = l.clear();
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
    a[l] = cl(l, n, i);
  }), a;
}
function na(n, i) {
  const a = ll(n, i);
  return (u, l, d) => l === "__v_isReactive" ? !n : l === "__v_isReadonly" ? n : l === "__v_raw" ? u : Reflect.get(
    nt(a, l) && l in u ? a : u,
    l,
    d
  );
}
const fl = {
  get: /* @__PURE__ */ na(!1, !1)
}, dl = {
  get: /* @__PURE__ */ na(!1, !0)
}, pl = {
  get: /* @__PURE__ */ na(!0, !1)
};
const Du = /* @__PURE__ */ new WeakMap(), Nu = /* @__PURE__ */ new WeakMap(), Ru = /* @__PURE__ */ new WeakMap(), hl = /* @__PURE__ */ new WeakMap();
function ml(n) {
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
function yl(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : ml(qc(n));
}
function ra(n) {
  return ei(n) ? n : ia(
    n,
    !1,
    sl,
    fl,
    Du
  );
}
function vl(n) {
  return ia(
    n,
    !1,
    ul,
    dl,
    Nu
  );
}
function ku(n) {
  return ia(
    n,
    !0,
    al,
    pl,
    Ru
  );
}
function ia(n, i, a, u, l) {
  if (!Et(n) || n.__v_raw && !(i && n.__v_isReactive))
    return n;
  const d = yl(n);
  if (d === 0)
    return n;
  const v = l.get(n);
  if (v)
    return v;
  const C = new Proxy(
    n,
    d === 2 ? u : a
  );
  return l.set(n, C), C;
}
function Xi(n) {
  return ei(n) ? Xi(n.__v_raw) : !!(n && n.__v_isReactive);
}
function ei(n) {
  return !!(n && n.__v_isReadonly);
}
function Cn(n) {
  return !!(n && n.__v_isShallow);
}
function oa(n) {
  return n ? !!n.__v_raw : !1;
}
function tt(n) {
  const i = n && n.__v_raw;
  return i ? tt(i) : n;
}
function gl(n) {
  return !nt(n, "__v_skip") && Object.isExtensible(n) && Cs(n, "__v_skip", !0), n;
}
const Jt = (n) => Et(n) ? ra(n) : n, Ps = (n) => Et(n) ? ku(n) : n;
function Kt(n) {
  return n ? n.__v_isRef === !0 : !1;
}
function zi(n) {
  return bl(n, !1);
}
function bl(n, i) {
  return Kt(n) ? n : new wl(n, i);
}
class wl {
  constructor(i, a) {
    this.dep = new ea(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = a ? i : tt(i), this._value = a ? i : Jt(i), this.__v_isShallow = a;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(i) {
    const a = this._rawValue, u = this.__v_isShallow || Cn(i) || ei(i);
    i = u ? i : tt(i), mr(i, a) && (this._rawValue = i, this._value = u ? i : Jt(i), this.dep.trigger());
  }
}
function ju(n) {
  return Kt(n) ? n.value : n;
}
const _l = {
  get: (n, i, a) => i === "__v_raw" ? n : ju(Reflect.get(n, i, a)),
  set: (n, i, a, u) => {
    const l = n[i];
    return Kt(l) && !Kt(a) ? (l.value = a, !0) : Reflect.set(n, i, a, u);
  }
};
function Mu(n) {
  return Xi(n) ? n : new Proxy(n, _l);
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
      return Eu(this, !0), !0;
  }
  get value() {
    const i = this.dep.track();
    return Cu(this), i && (i.version = this.dep.version), this._value;
  }
  set value(i) {
    this.setter && this.setter(i);
  }
}
function Sl(n, i, a = !1) {
  let u, l;
  return qe(n) ? u = n : (u = n.get, l = n.set), new El(u, l, a);
}
const mo = {}, Co = /* @__PURE__ */ new WeakMap();
let zr;
function xl(n, i = !1, a = zr) {
  if (a) {
    let u = Co.get(a);
    u || Co.set(a, u = []), u.push(n);
  }
}
function Cl(n, i, a = ft) {
  const { immediate: u, deep: l, once: d, scheduler: v, augmentJob: C, call: D } = a, W = (pe) => l ? pe : Cn(pe) || l === !1 || l === 0 ? pr(pe, 1) : pr(pe);
  let B, G, re, se, he = !1, de = !1;
  if (Kt(n) ? (G = () => n.value, he = Cn(n)) : Xi(n) ? (G = () => W(n), he = !0) : Be(n) ? (de = !0, he = n.some((pe) => Xi(pe) || Cn(pe)), G = () => n.map((pe) => {
    if (Kt(pe))
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
    zr = B;
    try {
      return D ? D(n, 3, [se]) : n(se);
    } finally {
      zr = pe;
    }
  } : G = Dn, i && l) {
    const pe = G, je = l === !0 ? 1 / 0 : l;
    G = () => pr(pe(), je);
  }
  const Te = Jc(), ae = () => {
    B.stop(), Te && Te.active && Ws(Te.effects, B);
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
            ye = je, D ? D(i, 3, oe) : (
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
  return C && C(ke), B = new wu(G), B.scheduler = v ? () => v(ke, !1) : ke, se = (pe) => xl(pe, !1, B), re = B.onStop = () => {
    const pe = Co.get(B);
    if (pe) {
      if (D)
        D(pe, 4);
      else
        for (const je of pe) je();
      Co.delete(B);
    }
  }, i ? u ? ke(!0) : ye = B.run() : v ? v(ke.bind(null, !0), !0) : B.run(), ae.pause = B.pause.bind(B), ae.resume = B.resume.bind(B), ae.stop = ae, ae;
}
function pr(n, i = 1 / 0, a) {
  if (i <= 0 || !Et(n) || n.__v_skip || (a = a || /* @__PURE__ */ new Set(), a.has(n)))
    return n;
  if (a.add(n), i--, Kt(n))
    pr(n.value, i, a);
  else if (Be(n))
    for (let u = 0; u < n.length; u++)
      pr(n[u], i, a);
  else if (Kc(n) || Hi(n))
    n.forEach((u) => {
      pr(u, i, a);
    });
  else if (Lc(n)) {
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
    Fo(l, i, a);
  }
}
function Nn(n, i, a, u) {
  if (qe(n)) {
    const l = uo(n, i, a, u);
    return l && vu(l) && l.catch((d) => {
      Fo(d, i, a);
    }), l;
  }
  if (Be(n)) {
    const l = [];
    for (let d = 0; d < n.length; d++)
      l.push(Nn(n[d], i, a, u));
    return l;
  }
}
function Fo(n, i, a, u = !0) {
  const l = i ? i.vnode : null, { errorHandler: d, throwUnhandledErrorInProduction: v } = i && i.appContext.config || ft;
  if (i) {
    let C = i.parent;
    const D = i.proxy, W = `https://vuejs.org/error-reference/#runtime-${a}`;
    for (; C; ) {
      const B = C.ec;
      if (B) {
        for (let G = 0; G < B.length; G++)
          if (B[G](n, D, W) === !1)
            return;
      }
      C = C.parent;
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
  Tl(n, a, l, u, v);
}
function Tl(n, i, a, u = !0, l = !1) {
  if (l)
    throw n;
  console.error(n);
}
const Zt = [];
let On = -1;
const oi = [];
let lr = null, ri = 0;
const Fu = /* @__PURE__ */ Promise.resolve();
let To = null;
function Al(n) {
  const i = To || Fu;
  return n ? i.then(this ? n.bind(this) : n) : i;
}
function Ol(n) {
  let i = On + 1, a = Zt.length;
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
    !(n.flags & 2) && i >= io(a) ? Zt.push(n) : Zt.splice(Ol(i), 0, n), n.flags |= 1, Ku();
  }
}
function Ku() {
  To || (To = Fu.then(qu));
}
function Il(n) {
  Be(n) ? oi.push(...n) : lr && n.id === -1 ? lr.splice(ri + 1, 0, n) : n.flags & 1 || (oi.push(n), n.flags |= 1), Ku();
}
function Ea(n, i, a = On + 1) {
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
function qu(n) {
  try {
    for (On = 0; On < Zt.length; On++) {
      const i = Zt[On];
      i && !(i.flags & 8) && (i.flags & 4 && (i.flags &= -2), uo(
        i,
        i.i,
        i.i ? 15 : 14
      ), i.flags & 4 || (i.flags &= -2));
    }
  } finally {
    for (; On < Zt.length; On++) {
      const i = Zt[On];
      i && (i.flags &= -2);
    }
    On = -1, Zt.length = 0, Bu(), To = null, (Zt.length || oi.length) && qu();
  }
}
let Pn = null, Lu = null;
function Ao(n) {
  const i = Pn;
  return Pn = n, Lu = n && n.type.__scopeId || null, i;
}
function Pl(n, i = Pn, a) {
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
    const C = l[v];
    d && (C.oldValue = d[v].value);
    let D = C.dir[u];
    D && (ar(), Nn(D, a, 8, [
      n.el,
      C,
      n,
      i
    ]), ur());
  }
}
const Dl = Symbol("_vte"), Nl = (n) => n.__isTeleport;
function aa(n, i) {
  n.shapeFlag & 6 && n.component ? (n.transition = i, aa(n.component.subTree, i)) : n.shapeFlag & 128 ? (n.ssContent.transition = i.clone(n.ssContent), n.ssFallback.transition = i.clone(n.ssFallback)) : n.transition = i;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function $u(n, i) {
  return qe(n) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Bt({ name: n.name }, i, { setup: n })
  ) : n;
}
function Uu(n) {
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
  const d = u.shapeFlag & 4 ? pa(u.component) : u.el, v = l ? null : d, { i: C, r: D } = n, W = i && i.r, B = C.refs === ft ? C.refs = {} : C.refs, G = C.setupState, re = tt(G), se = G === ft ? () => !1 : (he) => nt(re, he);
  if (W != null && W !== D && (Ot(W) ? (B[W] = null, se(W) && (G[W] = null)) : Kt(W) && (W.value = null)), qe(D))
    uo(D, C, 12, [v, B]);
  else {
    const he = Ot(D), de = Kt(D);
    if (he || de) {
      const Te = () => {
        if (n.f) {
          const ae = he ? se(D) ? G[D] : B[D] : D.value;
          l ? Be(ae) && Ws(ae, d) : Be(ae) ? ae.includes(d) || ae.push(d) : he ? (B[D] = [d], se(D) && (G[D] = B[D])) : (D.value = [d], n.k && (B[n.k] = D.value));
        } else he ? (B[D] = v, se(D) && (G[D] = v)) : de && (D.value = v, n.k && (B[n.k] = v));
      };
      v ? (Te.id = -1, dn(Te, a)) : Te();
    }
  }
}
Mo().requestIdleCallback;
Mo().cancelIdleCallback;
const Zi = (n) => !!n.type.__asyncLoader, Vu = (n) => n.type.__isKeepAlive;
function Rl(n, i) {
  Gu(n, "a", i);
}
function kl(n, i) {
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
  if (Ko(i, u, a), a) {
    let l = a.parent;
    for (; l && l.parent; )
      Vu(l.parent.vnode) && jl(u, i, a, l), l = l.parent;
  }
}
function jl(n, i, a, u) {
  const l = Ko(
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
function Ko(n, i, a = en, u = !1) {
  if (a) {
    const l = a[n] || (a[n] = []), d = i.__weh || (i.__weh = (...v) => {
      ar();
      const C = co(a), D = Nn(i, a, n, v);
      return C(), ur(), D;
    });
    return u ? l.unshift(d) : l.push(d), d;
  }
}
const cr = (n) => (i, a = en) => {
  (!so || n === "sp") && Ko(n, (...u) => i(...u), a);
}, Ml = cr("bm"), Oo = cr("m"), Fl = cr(
  "bu"
), Kl = cr("u"), Bl = cr(
  "bum"
), ua = cr("um"), ql = cr(
  "sp"
), Ll = cr("rtg"), $l = cr("rtc");
function Ul(n, i = en) {
  Ko("ec", n, i);
}
const Vl = Symbol.for("v-ndc"), Ds = (n) => n ? pc(n) ? pa(n) : Ds(n.parent) : null, eo = (
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
    $parent: (n) => Ds(n.parent),
    $root: (n) => Ds(n.root),
    $host: (n) => n.ce,
    $emit: (n) => n.emit,
    $options: (n) => Wu(n),
    $forceUpdate: (n) => n.f || (n.f = () => {
      sa(n.update);
    }),
    $nextTick: (n) => n.n || (n.n = Al.bind(n.proxy)),
    $watch: (n) => hf.bind(n)
  })
), gs = (n, i) => n !== ft && !n.__isScriptSetup && nt(n, i), Gl = {
  get({ _: n }, i) {
    if (i === "__v_skip")
      return !0;
    const { ctx: a, setupState: u, data: l, props: d, accessCache: v, type: C, appContext: D } = n;
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
        if (l !== ft && nt(l, i))
          return v[i] = 2, l[i];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (W = n.propsOptions[0]) && nt(W, i)
        )
          return v[i] = 3, d[i];
        if (a !== ft && nt(a, i))
          return v[i] = 4, a[i];
        Ns && (v[i] = 0);
      }
    }
    const B = eo[i];
    let G, re;
    if (B)
      return i === "$attrs" && Ft(n.attrs, "get", ""), B(n);
    if (
      // css module (injected by vue-loader)
      (G = C.__cssModules) && (G = G[i])
    )
      return G;
    if (a !== ft && nt(a, i))
      return v[i] = 4, a[i];
    if (
      // global properties
      re = D.config.globalProperties, nt(re, i)
    )
      return re[i];
  },
  set({ _: n }, i, a) {
    const { data: u, setupState: l, ctx: d } = n;
    return gs(l, i) ? (l[i] = a, !0) : u !== ft && nt(u, i) ? (u[i] = a, !0) : nt(n.props, i) || i[0] === "$" && i.slice(1) in n ? !1 : (d[i] = a, !0);
  },
  has({
    _: { data: n, setupState: i, accessCache: a, ctx: u, appContext: l, propsOptions: d }
  }, v) {
    let C;
    return !!a[v] || n !== ft && nt(n, v) || gs(i, v) || (C = d[0]) && nt(C, v) || nt(u, v) || nt(eo, v) || nt(l.config.globalProperties, v);
  },
  defineProperty(n, i, a) {
    return a.get != null ? n._.accessCache[i] = 0 : nt(a, "value") && this.set(n, i, a.value, null), Reflect.defineProperty(n, i, a);
  }
};
function Sa(n) {
  return Be(n) ? n.reduce(
    (i, a) => (i[a] = null, i),
    {}
  ) : n;
}
let Ns = !0;
function Hl(n) {
  const i = Wu(n), a = n.proxy, u = n.ctx;
  Ns = !1, i.beforeCreate && xa(i.beforeCreate, n, "bc");
  const {
    // state
    data: l,
    computed: d,
    methods: v,
    watch: C,
    provide: D,
    inject: W,
    // lifecycle
    created: B,
    beforeMount: G,
    mounted: re,
    beforeUpdate: se,
    updated: he,
    activated: de,
    deactivated: Te,
    beforeDestroy: ae,
    beforeUnmount: ye,
    destroyed: ke,
    unmounted: pe,
    render: je,
    renderTracked: ie,
    renderTriggered: oe,
    errorCaptured: xe,
    serverPrefetch: L,
    // public API
    expose: it,
    inheritAttrs: rt,
    // assets
    components: Ne,
    directives: Ge,
    filters: At
  } = i;
  if (W && Wl(W, u, null), v)
    for (const be in v) {
      const Oe = v[be];
      qe(Oe) && (u[be] = Oe.bind(a));
    }
  if (l) {
    const be = l.call(a, a);
    Et(be) && (n.data = ra(be));
  }
  if (Ns = !0, d)
    for (const be in d) {
      const Oe = d[be], et = qe(Oe) ? Oe.bind(a, a) : qe(Oe.get) ? Oe.get.bind(a, a) : Dn, ze = !qe(Oe) && qe(Oe.set) ? Oe.set.bind(a) : Dn, at = Ff({
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
  if (C)
    for (const be in C)
      Hu(C[be], u, a, be);
  if (D) {
    const be = qe(D) ? D.call(a) : D;
    Reflect.ownKeys(be).forEach((Oe) => {
      Zl(Oe, be[Oe]);
    });
  }
  B && xa(B, n, "c");
  function Ve(be, Oe) {
    Be(Oe) ? Oe.forEach((et) => be(et.bind(a))) : Oe && be(Oe.bind(a));
  }
  if (Ve(Ml, G), Ve(Oo, re), Ve(Fl, se), Ve(Kl, he), Ve(Rl, de), Ve(kl, Te), Ve(Ul, xe), Ve($l, ie), Ve(Ll, oe), Ve(Bl, ye), Ve(ua, pe), Ve(ql, L), Be(it))
    if (it.length) {
      const be = n.exposed || (n.exposed = {});
      it.forEach((Oe) => {
        Object.defineProperty(be, Oe, {
          get: () => a[Oe],
          set: (et) => a[Oe] = et
        });
      });
    } else n.exposed || (n.exposed = {});
  je && n.render === Dn && (n.render = je), rt != null && (n.inheritAttrs = rt), Ne && (n.components = Ne), Ge && (n.directives = Ge), L && Uu(n);
}
function Wl(n, i, a = Dn) {
  Be(n) && (n = Rs(n));
  for (const u in n) {
    const l = n[u];
    let d;
    Et(l) ? "default" in l ? d = bo(
      l.from || u,
      l.default,
      !0
    ) : d = bo(l.from || u) : d = bo(l), Kt(d) ? Object.defineProperty(i, u, {
      enumerable: !0,
      configurable: !0,
      get: () => d.value,
      set: (v) => d.value = v
    }) : i[u] = d;
  }
}
function xa(n, i, a) {
  Nn(
    Be(n) ? n.map((u) => u.bind(i.proxy)) : n.bind(i.proxy),
    i,
    a
  );
}
function Hu(n, i, a, u) {
  let l = u.includes(".") ? oc(a, u) : () => a[u];
  if (Ot(n)) {
    const d = i[n];
    qe(d) && wo(l, d);
  } else if (qe(n))
    wo(l, n.bind(a));
  else if (Et(n))
    if (Be(n))
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
  } = n.appContext, C = d.get(i);
  let D;
  return C ? D = C : !l.length && !a && !u ? D = i : (D = {}, l.length && l.forEach(
    (W) => Io(D, W, v, !0)
  ), Io(D, i, v)), Et(i) && d.set(i, D), D;
}
function Io(n, i, a, u = !1) {
  const { mixins: l, extends: d } = i;
  d && Io(n, d, a, !0), l && l.forEach(
    (v) => Io(n, v, a, !0)
  );
  for (const v in i)
    if (!(u && v === "expose")) {
      const C = Yl[v] || a && a[v];
      n[v] = C ? C(n[v], i[v]) : i[v];
    }
  return n;
}
const Yl = {
  data: Ca,
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
  watch: Xl,
  // provide / inject
  provide: Ca,
  inject: Ql
};
function Ca(n, i) {
  return i ? n ? function() {
    return Bt(
      qe(n) ? n.call(this, this) : n,
      qe(i) ? i.call(this, this) : i
    );
  } : i : n;
}
function Ql(n, i) {
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
function Ta(n, i) {
  return n ? Be(n) && Be(i) ? [.../* @__PURE__ */ new Set([...n, ...i])] : Bt(
    /* @__PURE__ */ Object.create(null),
    Sa(n),
    Sa(i ?? {})
  ) : i;
}
function Xl(n, i) {
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
let zl = 0;
function Jl(n, i) {
  return function(u, l = null) {
    qe(u) || (u = Bt({}, u)), l != null && !Et(l) && (l = null);
    const d = Yu(), v = /* @__PURE__ */ new WeakSet(), C = [];
    let D = !1;
    const W = d.app = {
      _uid: zl++,
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
        return v.has(B) || (B && qe(B.install) ? (v.add(B), B.install(W, ...G)) : qe(B) && (v.add(B), B(W, ...G))), W;
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
        if (!D) {
          const se = W._ceVNode || yr(u, l);
          return se.appContext = d, re === !0 ? re = "svg" : re === !1 && (re = void 0), n(se, B, re), D = !0, W._container = B, B.__vue_app__ = W, pa(se.component);
        }
      },
      onUnmount(B) {
        C.push(B);
      },
      unmount() {
        D && (Nn(
          C,
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
function Zl(n, i) {
  if (en) {
    let a = en.provides;
    const u = en.parent && en.parent.provides;
    u === a && (a = en.provides = Object.create(u)), a[n] = i;
  }
}
function bo(n, i, a = !1) {
  const u = en || Pn;
  if (u || si) {
    let l = si ? si._context.provides : u ? u.parent == null || u.ce ? u.vnode.appContext && u.vnode.appContext.provides : u.parent.provides : void 0;
    if (l && n in l)
      return l[n];
    if (arguments.length > 1)
      return a && qe(i) ? i.call(u && u.proxy) : i;
  }
}
const Qu = {}, Xu = () => Object.create(Qu), zu = (n) => Object.getPrototypeOf(n) === Qu;
function ef(n, i, a, u = !1) {
  const l = {}, d = Xu();
  n.propsDefaults = /* @__PURE__ */ Object.create(null), Ju(n, i, l, d);
  for (const v in n.propsOptions[0])
    v in l || (l[v] = void 0);
  a ? n.props = u ? l : vl(l) : n.type.props ? n.props = l : n.props = d, n.attrs = d;
}
function tf(n, i, a, u) {
  const {
    props: l,
    attrs: d,
    vnode: { patchFlag: v }
  } = n, C = tt(l), [D] = n.propsOptions;
  let W = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (u || v > 0) && !(v & 16)
  ) {
    if (v & 8) {
      const B = n.vnode.dynamicProps;
      for (let G = 0; G < B.length; G++) {
        let re = B[G];
        if (Bo(n.emitsOptions, re))
          continue;
        const se = i[re];
        if (D)
          if (nt(d, re))
            se !== d[re] && (d[re] = se, W = !0);
          else {
            const he = vr(re);
            l[he] = ks(
              D,
              C,
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
    for (const G in C)
      (!i || // for camelCase
      !nt(i, G) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((B = ti(G)) === G || !nt(i, B))) && (D ? a && // for camelCase
      (a[G] !== void 0 || // for kebab-case
      a[B] !== void 0) && (l[G] = ks(
        D,
        C,
        G,
        void 0,
        n,
        !0
      )) : delete l[G]);
    if (d !== C)
      for (const G in d)
        (!i || !nt(i, G)) && (delete d[G], W = !0);
  }
  W && sr(n.attrs, "set", "");
}
function Ju(n, i, a, u) {
  const [l, d] = n.propsOptions;
  let v = !1, C;
  if (i)
    for (let D in i) {
      if (Wi(D))
        continue;
      const W = i[D];
      let B;
      l && nt(l, B = vr(D)) ? !d || !d.includes(B) ? a[B] = W : (C || (C = {}))[B] = W : Bo(n.emitsOptions, D) || (!(D in u) || W !== u[D]) && (u[D] = W, v = !0);
    }
  if (d) {
    const D = tt(a), W = C || ft;
    for (let B = 0; B < d.length; B++) {
      const G = d[B];
      a[G] = ks(
        l,
        D,
        G,
        W[G],
        n,
        !nt(W, G)
      );
    }
  }
  return v;
}
function ks(n, i, a, u, l, d) {
  const v = n[a];
  if (v != null) {
    const C = nt(v, "default");
    if (C && u === void 0) {
      const D = v.default;
      if (v.type !== Function && !v.skipFactory && qe(D)) {
        const { propsDefaults: W } = l;
        if (a in W)
          u = W[a];
        else {
          const B = co(l);
          u = W[a] = D.call(
            null,
            i
          ), B();
        }
      } else
        u = D;
      l.ce && l.ce._setProp(a, u);
    }
    v[
      0
      /* shouldCast */
    ] && (d && !C ? u = !1 : v[
      1
      /* shouldCastTrue */
    ] && (u === "" || u === ti(a)) && (u = !0));
  }
  return u;
}
const nf = /* @__PURE__ */ new WeakMap();
function Zu(n, i, a = !1) {
  const u = a ? nf : i.propsCache, l = u.get(n);
  if (l)
    return l;
  const d = n.props, v = {}, C = [];
  let D = !1;
  if (!qe(n)) {
    const B = (G) => {
      D = !0;
      const [re, se] = Zu(G, i, !0);
      Bt(v, re), se && C.push(...se);
    };
    !a && i.mixins.length && i.mixins.forEach(B), n.extends && B(n.extends), n.mixins && n.mixins.forEach(B);
  }
  if (!d && !D)
    return Et(n) && u.set(n, ii), ii;
  if (Be(d))
    for (let B = 0; B < d.length; B++) {
      const G = vr(d[B]);
      Aa(G) && (v[G] = ft);
    }
  else if (d)
    for (const B in d) {
      const G = vr(B);
      if (Aa(G)) {
        const re = d[B], se = v[G] = Be(re) || qe(re) ? { type: re } : Bt({}, re), he = se.type;
        let de = !1, Te = !0;
        if (Be(he))
          for (let ae = 0; ae < he.length; ++ae) {
            const ye = he[ae], ke = qe(ye) && ye.name;
            if (ke === "Boolean") {
              de = !0;
              break;
            } else ke === "String" && (Te = !1);
          }
        else
          de = qe(he) && he.name === "Boolean";
        se[
          0
          /* shouldCast */
        ] = de, se[
          1
          /* shouldCastTrue */
        ] = Te, (de || nt(se, "default")) && C.push(G);
      }
    }
  const W = [v, C];
  return Et(n) && u.set(n, W), W;
}
function Aa(n) {
  return n[0] !== "$" && !Wi(n);
}
const ca = (n) => n[0] === "_" || n === "$stable", la = (n) => Be(n) ? n.map(In) : [In(n)], rf = (n, i, a) => {
  if (i._n)
    return i;
  const u = Pl((...l) => la(i(...l)), a);
  return u._c = !1, u;
}, ec = (n, i, a) => {
  const u = n._ctx;
  for (const l in n) {
    if (ca(l)) continue;
    const d = n[l];
    if (qe(d))
      i[l] = rf(l, d, u);
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
}, of = (n, i, a) => {
  const u = n.slots = Xu();
  if (n.vnode.shapeFlag & 32) {
    const l = i.__;
    l && Cs(u, "__", l, !0);
    const d = i._;
    d ? (nc(u, i, a), a && Cs(u, "_", d, !0)) : ec(i, u);
  } else i && tc(n, i);
}, sf = (n, i, a) => {
  const { vnode: u, slots: l } = n;
  let d = !0, v = ft;
  if (u.shapeFlag & 32) {
    const C = i._;
    C ? a && C === 1 ? d = !1 : nc(l, i, a) : (d = !i.$stable, ec(i, l)), v = i;
  } else i && (tc(n, i), v = { default: 1 });
  if (d)
    for (const C in l)
      !ca(C) && v[C] == null && delete l[C];
}, dn = _f;
function af(n) {
  return uf(n);
}
function uf(n, i) {
  const a = Mo();
  a.__VUE__ = !0;
  const {
    insert: u,
    remove: l,
    patchProp: d,
    createElement: v,
    createText: C,
    createComment: D,
    setText: W,
    setElementText: B,
    parentNode: G,
    nextSibling: re,
    setScopeId: se = Dn,
    insertStaticContent: he
  } = n, de = (A, F, Z, I = null, k = null, M = null, U = void 0, K = null, te = !!F.dynamicChildren) => {
    if (A === F)
      return;
    A && !Vi(A, F) && (I = O(A), ot(A, k, M, !0), A = null), F.patchFlag === -2 && (te = !1, F.dynamicChildren = null);
    const { type: Q, ref: me, shapeFlag: ce } = F;
    switch (Q) {
      case qo:
        Te(A, F, Z, I);
        break;
      case ai:
        ae(A, F, Z, I);
        break;
      case ws:
        A == null && ye(F, Z, I, U);
        break;
      case or:
        Ne(
          A,
          F,
          Z,
          I,
          k,
          M,
          U,
          K,
          te
        );
        break;
      default:
        ce & 1 ? je(
          A,
          F,
          Z,
          I,
          k,
          M,
          U,
          K,
          te
        ) : ce & 6 ? Ge(
          A,
          F,
          Z,
          I,
          k,
          M,
          U,
          K,
          te
        ) : (ce & 64 || ce & 128) && Q.process(
          A,
          F,
          Z,
          I,
          k,
          M,
          U,
          K,
          te,
          $
        );
    }
    me != null && k ? Ji(me, A && A.ref, M, F || A, !F) : me == null && A && A.ref != null && Ji(A.ref, null, M, A, !0);
  }, Te = (A, F, Z, I) => {
    if (A == null)
      u(
        F.el = C(F.children),
        Z,
        I
      );
    else {
      const k = F.el = A.el;
      F.children !== A.children && W(k, F.children);
    }
  }, ae = (A, F, Z, I) => {
    A == null ? u(
      F.el = D(F.children || ""),
      Z,
      I
    ) : F.el = A.el;
  }, ye = (A, F, Z, I) => {
    [A.el, A.anchor] = he(
      A.children,
      F,
      Z,
      I,
      A.el,
      A.anchor
    );
  }, ke = ({ el: A, anchor: F }, Z, I) => {
    let k;
    for (; A && A !== F; )
      k = re(A), u(A, Z, I), A = k;
    u(F, Z, I);
  }, pe = ({ el: A, anchor: F }) => {
    let Z;
    for (; A && A !== F; )
      Z = re(A), l(A), A = Z;
    l(F);
  }, je = (A, F, Z, I, k, M, U, K, te) => {
    F.type === "svg" ? U = "svg" : F.type === "math" && (U = "mathml"), A == null ? ie(
      F,
      Z,
      I,
      k,
      M,
      U,
      K,
      te
    ) : L(
      A,
      F,
      k,
      M,
      U,
      K,
      te
    );
  }, ie = (A, F, Z, I, k, M, U, K) => {
    let te, Q;
    const { props: me, shapeFlag: ce, transition: Se, dirs: Ce } = A;
    if (te = A.el = v(
      A.type,
      M,
      me && me.is,
      me
    ), ce & 8 ? B(te, A.children) : ce & 16 && xe(
      A.children,
      te,
      null,
      I,
      k,
      bs(A, M),
      U,
      K
    ), Ce && Qr(A, null, I, "created"), oe(te, A, A.scopeId, U, I), me) {
      for (const Ke in me)
        Ke !== "value" && !Wi(Ke) && d(te, Ke, null, me[Ke], M, I);
      "value" in me && d(te, "value", null, me.value, M), (Q = me.onVnodeBeforeMount) && An(Q, I, A);
    }
    Ce && Qr(A, null, I, "beforeMount");
    const Ie = cf(k, Se);
    Ie && Se.beforeEnter(te), u(te, F, Z), ((Q = me && me.onVnodeMounted) || Ie || Ce) && dn(() => {
      Q && An(Q, I, A), Ie && Se.enter(te), Ce && Qr(A, null, I, "mounted");
    }, k);
  }, oe = (A, F, Z, I, k) => {
    if (Z && se(A, Z), I)
      for (let M = 0; M < I.length; M++)
        se(A, I[M]);
    if (k) {
      let M = k.subTree;
      if (F === M || ac(M.type) && (M.ssContent === F || M.ssFallback === F)) {
        const U = k.vnode;
        oe(
          A,
          U,
          U.scopeId,
          U.slotScopeIds,
          k.parent
        );
      }
    }
  }, xe = (A, F, Z, I, k, M, U, K, te = 0) => {
    for (let Q = te; Q < A.length; Q++) {
      const me = A[Q] = K ? fr(A[Q]) : In(A[Q]);
      de(
        null,
        me,
        F,
        Z,
        I,
        k,
        M,
        U,
        K
      );
    }
  }, L = (A, F, Z, I, k, M, U) => {
    const K = F.el = A.el;
    let { patchFlag: te, dynamicChildren: Q, dirs: me } = F;
    te |= A.patchFlag & 16;
    const ce = A.props || ft, Se = F.props || ft;
    let Ce;
    if (Z && Xr(Z, !1), (Ce = Se.onVnodeBeforeUpdate) && An(Ce, Z, F, A), me && Qr(F, A, Z, "beforeUpdate"), Z && Xr(Z, !0), (ce.innerHTML && Se.innerHTML == null || ce.textContent && Se.textContent == null) && B(K, ""), Q ? it(
      A.dynamicChildren,
      Q,
      K,
      Z,
      I,
      bs(F, k),
      M
    ) : U || Oe(
      A,
      F,
      K,
      null,
      Z,
      I,
      bs(F, k),
      M,
      !1
    ), te > 0) {
      if (te & 16)
        rt(K, ce, Se, Z, k);
      else if (te & 2 && ce.class !== Se.class && d(K, "class", null, Se.class, k), te & 4 && d(K, "style", ce.style, Se.style, k), te & 8) {
        const Ie = F.dynamicProps;
        for (let Ke = 0; Ke < Ie.length; Ke++) {
          const Le = Ie[Ke], ut = ce[Le], mt = Se[Le];
          (mt !== ut || Le === "value") && d(K, Le, ut, mt, k, Z);
        }
      }
      te & 1 && A.children !== F.children && B(K, F.children);
    } else !U && Q == null && rt(K, ce, Se, Z, k);
    ((Ce = Se.onVnodeUpdated) || me) && dn(() => {
      Ce && An(Ce, Z, F, A), me && Qr(F, A, Z, "updated");
    }, I);
  }, it = (A, F, Z, I, k, M, U) => {
    for (let K = 0; K < F.length; K++) {
      const te = A[K], Q = F[K], me = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        te.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (te.type === or || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Vi(te, Q) || // - In the case of a component, it could contain anything.
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
        M,
        U,
        !0
      );
    }
  }, rt = (A, F, Z, I, k) => {
    if (F !== Z) {
      if (F !== ft)
        for (const M in F)
          !Wi(M) && !(M in Z) && d(
            A,
            M,
            F[M],
            null,
            k,
            I
          );
      for (const M in Z) {
        if (Wi(M)) continue;
        const U = Z[M], K = F[M];
        U !== K && M !== "value" && d(A, M, K, U, k, I);
      }
      "value" in Z && d(A, "value", F.value, Z.value, k);
    }
  }, Ne = (A, F, Z, I, k, M, U, K, te) => {
    const Q = F.el = A ? A.el : C(""), me = F.anchor = A ? A.anchor : C("");
    let { patchFlag: ce, dynamicChildren: Se, slotScopeIds: Ce } = F;
    Ce && (K = K ? K.concat(Ce) : Ce), A == null ? (u(Q, Z, I), u(me, Z, I), xe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      F.children || [],
      Z,
      me,
      k,
      M,
      U,
      K,
      te
    )) : ce > 0 && ce & 64 && Se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    A.dynamicChildren ? (it(
      A.dynamicChildren,
      Se,
      Z,
      k,
      M,
      U,
      K
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (F.key != null || k && F === k.subTree) && rc(
      A,
      F,
      !0
      /* shallow */
    )) : Oe(
      A,
      F,
      Z,
      me,
      k,
      M,
      U,
      K,
      te
    );
  }, Ge = (A, F, Z, I, k, M, U, K, te) => {
    F.slotScopeIds = K, A == null ? F.shapeFlag & 512 ? k.ctx.activate(
      F,
      Z,
      I,
      U,
      te
    ) : At(
      F,
      Z,
      I,
      k,
      M,
      U,
      te
    ) : wt(A, F, te);
  }, At = (A, F, Z, I, k, M, U) => {
    const K = A.component = Df(
      A,
      I,
      k
    );
    if (Vu(A) && (K.ctx.renderer = $), Nf(K, !1, U), K.asyncDep) {
      if (k && k.registerDep(K, Ve, U), !A.el) {
        const te = K.subTree = yr(ai);
        ae(null, te, F, Z);
      }
    } else
      Ve(
        K,
        A,
        F,
        Z,
        k,
        M,
        U
      );
  }, wt = (A, F, Z) => {
    const I = F.component = A.component;
    if (bf(A, F, Z))
      if (I.asyncDep && !I.asyncResolved) {
        be(I, F, Z);
        return;
      } else
        I.next = F, I.update();
    else
      F.el = A.el, I.vnode = F;
  }, Ve = (A, F, Z, I, k, M, U) => {
    const K = () => {
      if (A.isMounted) {
        let { next: ce, bu: Se, u: Ce, parent: Ie, vnode: Ke } = A;
        {
          const ct = ic(A);
          if (ct) {
            ce && (ce.el = Ke.el, be(A, ce, U)), ct.asyncDep.then(() => {
              A.isUnmounted || K();
            });
            return;
          }
        }
        let Le = ce, ut;
        Xr(A, !1), ce ? (ce.el = Ke.el, be(A, ce, U)) : ce = Ke, Se && hs(Se), (ut = ce.props && ce.props.onVnodeBeforeUpdate) && An(ut, Ie, ce, Ke), Xr(A, !0);
        const mt = Ia(A), _t = A.subTree;
        A.subTree = mt, de(
          _t,
          mt,
          // parent may have changed if it's in a teleport
          G(_t.el),
          // anchor may have changed if it's in a fragment
          O(_t),
          A,
          k,
          M
        ), ce.el = mt.el, Le === null && wf(A, mt.el), Ce && dn(Ce, k), (ut = ce.props && ce.props.onVnodeUpdated) && dn(
          () => An(ut, Ie, ce, Ke),
          k
        );
      } else {
        let ce;
        const { el: Se, props: Ce } = F, { bm: Ie, m: Ke, parent: Le, root: ut, type: mt } = A, _t = Zi(F);
        Xr(A, !1), Ie && hs(Ie), !_t && (ce = Ce && Ce.onVnodeBeforeMount) && An(ce, Le, F), Xr(A, !0);
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
            M
          ), F.el = ct.el;
        }
        if (Ke && dn(Ke, k), !_t && (ce = Ce && Ce.onVnodeMounted)) {
          const ct = F;
          dn(
            () => An(ce, Le, ct),
            k
          );
        }
        (F.shapeFlag & 256 || Le && Zi(Le.vnode) && Le.vnode.shapeFlag & 256) && A.a && dn(A.a, k), A.isMounted = !0, F = Z = I = null;
      }
    };
    A.scope.on();
    const te = A.effect = new wu(K);
    A.scope.off();
    const Q = A.update = te.run.bind(te), me = A.job = te.runIfDirty.bind(te);
    me.i = A, me.id = A.uid, te.scheduler = () => sa(me), Xr(A, !0), Q();
  }, be = (A, F, Z) => {
    F.component = A;
    const I = A.vnode.props;
    A.vnode = F, A.next = null, tf(A, F.props, I, Z), sf(A, F.children, Z), ar(), Ea(A), ur();
  }, Oe = (A, F, Z, I, k, M, U, K, te = !1) => {
    const Q = A && A.children, me = A ? A.shapeFlag : 0, ce = F.children, { patchFlag: Se, shapeFlag: Ce } = F;
    if (Se > 0) {
      if (Se & 128) {
        ze(
          Q,
          ce,
          Z,
          I,
          k,
          M,
          U,
          K,
          te
        );
        return;
      } else if (Se & 256) {
        et(
          Q,
          ce,
          Z,
          I,
          k,
          M,
          U,
          K,
          te
        );
        return;
      }
    }
    Ce & 8 ? (me & 16 && pt(Q, k, M), ce !== Q && B(Z, ce)) : me & 16 ? Ce & 16 ? ze(
      Q,
      ce,
      Z,
      I,
      k,
      M,
      U,
      K,
      te
    ) : pt(Q, k, M, !0) : (me & 8 && B(Z, ""), Ce & 16 && xe(
      ce,
      Z,
      I,
      k,
      M,
      U,
      K,
      te
    ));
  }, et = (A, F, Z, I, k, M, U, K, te) => {
    A = A || ii, F = F || ii;
    const Q = A.length, me = F.length, ce = Math.min(Q, me);
    let Se;
    for (Se = 0; Se < ce; Se++) {
      const Ce = F[Se] = te ? fr(F[Se]) : In(F[Se]);
      de(
        A[Se],
        Ce,
        Z,
        null,
        k,
        M,
        U,
        K,
        te
      );
    }
    Q > me ? pt(
      A,
      k,
      M,
      !0,
      !1,
      ce
    ) : xe(
      F,
      Z,
      I,
      k,
      M,
      U,
      K,
      te,
      ce
    );
  }, ze = (A, F, Z, I, k, M, U, K, te) => {
    let Q = 0;
    const me = F.length;
    let ce = A.length - 1, Se = me - 1;
    for (; Q <= ce && Q <= Se; ) {
      const Ce = A[Q], Ie = F[Q] = te ? fr(F[Q]) : In(F[Q]);
      if (Vi(Ce, Ie))
        de(
          Ce,
          Ie,
          Z,
          null,
          k,
          M,
          U,
          K,
          te
        );
      else
        break;
      Q++;
    }
    for (; Q <= ce && Q <= Se; ) {
      const Ce = A[ce], Ie = F[Se] = te ? fr(F[Se]) : In(F[Se]);
      if (Vi(Ce, Ie))
        de(
          Ce,
          Ie,
          Z,
          null,
          k,
          M,
          U,
          K,
          te
        );
      else
        break;
      ce--, Se--;
    }
    if (Q > ce) {
      if (Q <= Se) {
        const Ce = Se + 1, Ie = Ce < me ? F[Ce].el : I;
        for (; Q <= Se; )
          de(
            null,
            F[Q] = te ? fr(F[Q]) : In(F[Q]),
            Z,
            Ie,
            k,
            M,
            U,
            K,
            te
          ), Q++;
      }
    } else if (Q > Se)
      for (; Q <= ce; )
        ot(A[Q], k, M, !0), Q++;
    else {
      const Ce = Q, Ie = Q, Ke = /* @__PURE__ */ new Map();
      for (Q = Ie; Q <= Se; Q++) {
        const Je = F[Q] = te ? fr(F[Q]) : In(F[Q]);
        Je.key != null && Ke.set(Je.key, Q);
      }
      let Le, ut = 0;
      const mt = Se - Ie + 1;
      let _t = !1, ct = 0;
      const $t = new Array(mt);
      for (Q = 0; Q < mt; Q++) $t[Q] = 0;
      for (Q = Ce; Q <= ce; Q++) {
        const Je = A[Q];
        if (ut >= mt) {
          ot(Je, k, M, !0);
          continue;
        }
        let ne;
        if (Je.key != null)
          ne = Ke.get(Je.key);
        else
          for (Le = Ie; Le <= Se; Le++)
            if ($t[Le - Ie] === 0 && Vi(Je, F[Le])) {
              ne = Le;
              break;
            }
        ne === void 0 ? ot(Je, k, M, !0) : ($t[ne - Ie] = Q + 1, ne >= ct ? ct = ne : _t = !0, de(
          Je,
          F[ne],
          Z,
          null,
          k,
          M,
          U,
          K,
          te
        ), ut++);
      }
      const Tn = _t ? lf($t) : ii;
      for (Le = Tn.length - 1, Q = mt - 1; Q >= 0; Q--) {
        const Je = Ie + Q, ne = F[Je], tn = Je + 1 < me ? F[Je + 1].el : I;
        $t[Q] === 0 ? de(
          null,
          ne,
          Z,
          tn,
          k,
          M,
          U,
          K,
          te
        ) : _t && (Le < 0 || Q !== Tn[Le] ? at(ne, Z, tn, 2) : Le--);
      }
    }
  }, at = (A, F, Z, I, k = null) => {
    const { el: M, type: U, transition: K, children: te, shapeFlag: Q } = A;
    if (Q & 6) {
      at(A.component.subTree, F, Z, I);
      return;
    }
    if (Q & 128) {
      A.suspense.move(F, Z, I);
      return;
    }
    if (Q & 64) {
      U.move(A, F, Z, $);
      return;
    }
    if (U === or) {
      u(M, F, Z);
      for (let ce = 0; ce < te.length; ce++)
        at(te[ce], F, Z, I);
      u(A.anchor, F, Z);
      return;
    }
    if (U === ws) {
      ke(A, F, Z);
      return;
    }
    if (I !== 2 && Q & 1 && K)
      if (I === 0)
        K.beforeEnter(M), u(M, F, Z), dn(() => K.enter(M), k);
      else {
        const { leave: ce, delayLeave: Se, afterLeave: Ce } = K, Ie = () => {
          A.ctx.isUnmounted ? l(M) : u(M, F, Z);
        }, Ke = () => {
          ce(M, () => {
            Ie(), Ce && Ce();
          });
        };
        Se ? Se(M, Ie, Ke) : Ke();
      }
    else
      u(M, F, Z);
  }, ot = (A, F, Z, I = !1, k = !1) => {
    const {
      type: M,
      props: U,
      ref: K,
      children: te,
      dynamicChildren: Q,
      shapeFlag: me,
      patchFlag: ce,
      dirs: Se,
      cacheIndex: Ce
    } = A;
    if (ce === -2 && (k = !1), K != null && (ar(), Ji(K, null, Z, A, !0), ur()), Ce != null && (F.renderCache[Ce] = void 0), me & 256) {
      F.ctx.deactivate(A);
      return;
    }
    const Ie = me & 1 && Se, Ke = !Zi(A);
    let Le;
    if (Ke && (Le = U && U.onVnodeBeforeUnmount) && An(Le, F, A), me & 6)
      It(A.component, Z, I);
    else {
      if (me & 128) {
        A.suspense.unmount(Z, I);
        return;
      }
      Ie && Qr(A, null, F, "beforeUnmount"), me & 64 ? A.type.remove(
        A,
        F,
        Z,
        $,
        I
      ) : Q && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Q.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== or || ce > 0 && ce & 64) ? pt(
        Q,
        F,
        Z,
        !1,
        !0
      ) : (M === or && ce & 384 || !k && me & 16) && pt(te, F, Z), I && ht(A);
    }
    (Ke && (Le = U && U.onVnodeUnmounted) || Ie) && dn(() => {
      Le && An(Le, F, A), Ie && Qr(A, null, F, "unmounted");
    }, Z);
  }, ht = (A) => {
    const { type: F, el: Z, anchor: I, transition: k } = A;
    if (F === or) {
      rn(Z, I);
      return;
    }
    if (F === ws) {
      pe(A);
      return;
    }
    const M = () => {
      l(Z), k && !k.persisted && k.afterLeave && k.afterLeave();
    };
    if (A.shapeFlag & 1 && k && !k.persisted) {
      const { leave: U, delayLeave: K } = k, te = () => U(Z, M);
      K ? K(A.el, M, te) : te();
    } else
      M();
  }, rn = (A, F) => {
    let Z;
    for (; A !== F; )
      Z = re(A), l(A), A = Z;
    l(F);
  }, It = (A, F, Z) => {
    const {
      bum: I,
      scope: k,
      job: M,
      subTree: U,
      um: K,
      m: te,
      a: Q,
      parent: me,
      slots: { __: ce }
    } = A;
    Oa(te), Oa(Q), I && hs(I), me && Be(ce) && ce.forEach((Se) => {
      me.renderCache[Se] = void 0;
    }), k.stop(), M && (M.flags |= 8, ot(U, A, F, Z)), K && dn(K, F), dn(() => {
      A.isUnmounted = !0;
    }, F), F && F.pendingBranch && !F.isUnmounted && A.asyncDep && !A.asyncResolved && A.suspenseId === F.pendingId && (F.deps--, F.deps === 0 && F.resolve());
  }, pt = (A, F, Z, I = !1, k = !1, M = 0) => {
    for (let U = M; U < A.length; U++)
      ot(A[U], F, Z, I, k);
  }, O = (A) => {
    if (A.shapeFlag & 6)
      return O(A.component.subTree);
    if (A.shapeFlag & 128)
      return A.suspense.next();
    const F = re(A.anchor || A.el), Z = F && F[Dl];
    return Z ? re(Z) : F;
  };
  let w = !1;
  const j = (A, F, Z) => {
    A == null ? F._vnode && ot(F._vnode, null, null, !0) : de(
      F._vnode || null,
      A,
      F,
      null,
      null,
      null,
      Z
    ), F._vnode = A, w || (w = !0, Ea(), Bu(), w = !1);
  }, $ = {
    p: de,
    um: ot,
    m: at,
    r: ht,
    mt: At,
    mc: xe,
    pc: Oe,
    pbc: it,
    n: O,
    o: n
  };
  return {
    render: j,
    hydrate: void 0,
    createApp: Jl(j)
  };
}
function bs({ type: n, props: i }, a) {
  return a === "svg" && n === "foreignObject" || a === "mathml" && n === "annotation-xml" && i && i.encoding && i.encoding.includes("html") ? void 0 : a;
}
function Xr({ effect: n, job: i }, a) {
  a ? (n.flags |= 32, i.flags |= 4) : (n.flags &= -33, i.flags &= -5);
}
function cf(n, i) {
  return (!n || n && !n.pendingBranch) && i && !i.persisted;
}
function rc(n, i, a = !1) {
  const u = n.children, l = i.children;
  if (Be(u) && Be(l))
    for (let d = 0; d < u.length; d++) {
      const v = u[d];
      let C = l[d];
      C.shapeFlag & 1 && !C.dynamicChildren && ((C.patchFlag <= 0 || C.patchFlag === 32) && (C = l[d] = fr(l[d]), C.el = v.el), !a && C.patchFlag !== -2 && rc(v, C)), C.type === qo && (C.el = v.el), C.type === ai && !C.el && (C.el = v.el);
    }
}
function lf(n) {
  const i = n.slice(), a = [0];
  let u, l, d, v, C;
  const D = n.length;
  for (u = 0; u < D; u++) {
    const W = n[u];
    if (W !== 0) {
      if (l = a[a.length - 1], n[l] < W) {
        i[u] = l, a.push(u);
        continue;
      }
      for (d = 0, v = a.length - 1; d < v; )
        C = d + v >> 1, n[a[C]] < W ? d = C + 1 : v = C;
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
function Oa(n) {
  if (n)
    for (let i = 0; i < n.length; i++)
      n[i].flags |= 8;
}
const ff = Symbol.for("v-scx"), df = () => bo(ff);
function pf(n, i) {
  return fa(n, null, i);
}
function wo(n, i, a) {
  return fa(n, i, a);
}
function fa(n, i, a = ft) {
  const { immediate: u, deep: l, flush: d, once: v } = a, C = Bt({}, a), D = i && u || !i && d !== "post";
  let W;
  if (so) {
    if (d === "sync") {
      const se = df();
      W = se.__watcherHandles || (se.__watcherHandles = []);
    } else if (!D) {
      const se = () => {
      };
      return se.stop = Dn, se.resume = Dn, se.pause = Dn, se;
    }
  }
  const B = en;
  C.call = (se, he, de) => Nn(se, B, he, de);
  let G = !1;
  d === "post" ? C.scheduler = (se) => {
    dn(se, B && B.suspense);
  } : d !== "sync" && (G = !0, C.scheduler = (se, he) => {
    he ? se() : sa(se);
  }), C.augmentJob = (se) => {
    i && (se.flags |= 4), G && (se.flags |= 2, B && (se.id = B.uid, se.i = B));
  };
  const re = Cl(n, i, C);
  return so && (W ? W.push(re) : D && re()), re;
}
function hf(n, i, a) {
  const u = this.proxy, l = Ot(n) ? n.includes(".") ? oc(u, n) : () => u[n] : n.bind(u, u);
  let d;
  qe(i) ? d = i : (d = i.handler, a = i);
  const v = co(this), C = fa(l, d.bind(u), a);
  return v(), C;
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
const mf = (n, i) => i === "modelValue" || i === "model-value" ? n.modelModifiers : n[`${i}Modifiers`] || n[`${vr(i)}Modifiers`] || n[`${ti(i)}Modifiers`];
function yf(n, i, ...a) {
  if (n.isUnmounted) return;
  const u = n.vnode.props || ft;
  let l = a;
  const d = i.startsWith("update:"), v = d && mf(u, i.slice(7));
  v && (v.trim && (l = a.map((B) => Ot(B) ? B.trim() : B)), v.number && (l = a.map(Vc)));
  let C, D = u[C = ps(i)] || // also try camelCase event handler (#2249)
  u[C = ps(vr(i))];
  !D && d && (D = u[C = ps(ti(i))]), D && Nn(
    D,
    n,
    6,
    l
  );
  const W = u[C + "Once"];
  if (W) {
    if (!n.emitted)
      n.emitted = {};
    else if (n.emitted[C])
      return;
    n.emitted[C] = !0, Nn(
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
  let v = {}, C = !1;
  if (!qe(n)) {
    const D = (W) => {
      const B = sc(W, i, !0);
      B && (C = !0, Bt(v, B));
    };
    !a && i.mixins.length && i.mixins.forEach(D), n.extends && D(n.extends), n.mixins && n.mixins.forEach(D);
  }
  return !d && !C ? (Et(n) && u.set(n, null), null) : (Be(d) ? d.forEach((D) => v[D] = null) : Bt(v, d), Et(n) && u.set(n, v), v);
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
    slots: v,
    attrs: C,
    emit: D,
    render: W,
    renderCache: B,
    props: G,
    data: re,
    setupState: se,
    ctx: he,
    inheritAttrs: de
  } = n, Te = Ao(n);
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
      ), ye = C;
    } else {
      const pe = i;
      ae = In(
        pe.length > 1 ? pe(
          G,
          { attrs: C, slots: v, emit: D }
        ) : pe(
          G,
          null
        )
      ), ye = i.props ? C : vf(C);
    }
  } catch (pe) {
    to.length = 0, Fo(pe, n, 1), ae = yr(ai);
  }
  let ke = ae;
  if (ye && de !== !1) {
    const pe = Object.keys(ye), { shapeFlag: je } = ke;
    pe.length && je & 7 && (d && pe.some(Hs) && (ye = gf(
      ye,
      d
    )), ke = ui(ke, ye, !1, !0));
  }
  return a.dirs && (ke = ui(ke, null, !1, !0), ke.dirs = ke.dirs ? ke.dirs.concat(a.dirs) : a.dirs), a.transition && aa(ke, a.transition), ae = ke, Ao(Te), ae;
}
const vf = (n) => {
  let i;
  for (const a in n)
    (a === "class" || a === "style" || Ro(a)) && ((i || (i = {}))[a] = n[a]);
  return i;
}, gf = (n, i) => {
  const a = {};
  for (const u in n)
    (!Hs(u) || !(u.slice(9) in i)) && (a[u] = n[u]);
  return a;
};
function bf(n, i, a) {
  const { props: u, children: l, component: d } = n, { props: v, children: C, patchFlag: D } = i, W = d.emitsOptions;
  if (i.dirs || i.transition)
    return !0;
  if (a && D >= 0) {
    if (D & 1024)
      return !0;
    if (D & 16)
      return u ? Pa(u, v, W) : !!v;
    if (D & 8) {
      const B = i.dynamicProps;
      for (let G = 0; G < B.length; G++) {
        const re = B[G];
        if (v[re] !== u[re] && !Bo(W, re))
          return !0;
      }
    }
  } else
    return (l || C) && (!C || !C.$stable) ? !0 : u === v ? !1 : u ? v ? Pa(u, v, W) : !0 : !!v;
  return !1;
}
function Pa(n, i, a) {
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
function wf({ vnode: n, parent: i }, a) {
  for (; i; ) {
    const u = i.subTree;
    if (u.suspense && u.suspense.activeBranch === n && (u.el = n.el), u === n)
      (n = i.vnode).el = a, i = i.parent;
    else
      break;
  }
}
const ac = (n) => n.__isSuspense;
function _f(n, i) {
  i && i.pendingBranch ? Be(n) ? i.effects.push(...n) : i.effects.push(n) : Il(n);
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
function Sf(n, i, a, u, l, d) {
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
function xf(n, i, a, u, l) {
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
function Vi(n, i) {
  return n.type === i.type && n.key === i.key;
}
const fc = ({ key: n }) => n ?? null, _o = ({
  ref: n,
  ref_key: i,
  ref_for: a
}) => (typeof n == "number" && (n = "" + n), n != null ? Ot(n) || Kt(n) || qe(n) ? { i: Pn, r: n, k: i, f: !!a } : n : null);
function dc(n, i = null, a = null, u = 0, l = null, d = n === or ? 0 : 1, v = !1, C = !1) {
  const D = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n,
    props: i,
    key: i && fc(i),
    ref: i && _o(i),
    scopeId: Lu,
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
    ctx: Pn
  };
  return C ? (da(D, a), d & 128 && n.normalize(D)) : a && (D.shapeFlag |= Ot(a) ? 8 : 16), oo > 0 && // avoid a block node from tracking itself
  !v && // has current parent block
  pn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (D.patchFlag > 0 || d & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  D.patchFlag !== 32 && pn.push(D), D;
}
const yr = Cf;
function Cf(n, i = null, a = null, u = 0, l = null, d = !1) {
  if ((!n || n === Vl) && (n = ai), lc(n)) {
    const C = ui(
      n,
      i,
      !0
      /* mergeRef: true */
    );
    return a && da(C, a), oo > 0 && !d && pn && (C.shapeFlag & 6 ? pn[pn.indexOf(n)] = C : pn.push(C)), C.patchFlag = -2, C;
  }
  if (Mf(n) && (n = n.__vccOpts), i) {
    i = Tf(i);
    let { class: C, style: D } = i;
    C && !Ot(C) && (i.class = Xs(C)), Et(D) && (oa(D) && !Be(D) && (D = Bt({}, D)), i.style = Qs(D));
  }
  const v = Ot(n) ? 1 : ac(n) ? 128 : Nl(n) ? 64 : Et(n) ? 4 : qe(n) ? 2 : 0;
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
function Tf(n) {
  return n ? oa(n) || zu(n) ? Bt({}, n) : n : null;
}
function ui(n, i, a = !1, u = !1) {
  const { props: l, ref: d, patchFlag: v, children: C, transition: D } = n, W = i ? Of(l || {}, i) : l, B = {
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
    children: C,
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
    B,
    D.clone(B)
  ), B;
}
function Af(n = " ", i = 0) {
  return yr(qo, null, n, i);
}
function In(n) {
  return n == null || typeof n == "boolean" ? yr(ai) : Be(n) ? yr(
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
      !l && !zu(i) ? i._ctx = Pn : l === 3 && Pn && (Pn.slots._ === 1 ? i._ = 1 : (i._ = 2, n.patchFlag |= 1024));
    }
  else qe(i) ? (i = { default: i, _ctx: Pn }, a = 32) : (i = String(i), u & 64 ? (a = 16, i = [Af(i)]) : a = 8);
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
        v && d !== v && !(Be(d) && d.includes(v)) && (i[l] = d ? [].concat(d, v) : v);
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
const If = Yu();
let Pf = 0;
function Df(n, i, a) {
  const u = n.type, l = (i ? i.appContext : n.appContext) || If, d = {
    uid: Pf++,
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
    scope: new zc(
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
  return d.ctx = { _: d }, d.root = i ? i.root : d, d.emit = yf.bind(null, d), n.ce && n.ce(d), d;
}
let en = null, Po, js;
{
  const n = Mo(), i = (a, u) => {
    let l;
    return (l = n[a]) || (l = n[a] = []), l.push(u), (d) => {
      l.length > 1 ? l.forEach((v) => v(d)) : l[0](d);
    };
  };
  Po = i(
    "__VUE_INSTANCE_SETTERS__",
    (a) => en = a
  ), js = i(
    "__VUE_SSR_SETTERS__",
    (a) => so = a
  );
}
const co = (n) => {
  const i = en;
  return Po(n), n.scope.on(), () => {
    n.scope.off(), Po(i);
  };
}, Na = () => {
  en && en.scope.off(), Po(null);
};
function pc(n) {
  return n.vnode.shapeFlag & 4;
}
let so = !1;
function Nf(n, i = !1, a = !1) {
  i && js(i);
  const { props: u, children: l } = n.vnode, d = pc(n);
  ef(n, u, d, i), of(n, l, a || i);
  const v = d ? Rf(n, i) : void 0;
  return i && js(!1), v;
}
function Rf(n, i) {
  const a = n.type;
  n.accessCache = /* @__PURE__ */ Object.create(null), n.proxy = new Proxy(n.ctx, Gl);
  const { setup: u } = a;
  if (u) {
    ar();
    const l = n.setupContext = u.length > 1 ? jf(n) : null, d = co(n), v = uo(
      u,
      n,
      0,
      [
        n.props,
        l
      ]
    ), C = vu(v);
    if (ur(), d(), (C || n.sp) && !Zi(n) && Uu(n), C) {
      if (v.then(Na, Na), i)
        return v.then((D) => {
          Ra(n, D);
        }).catch((D) => {
          Fo(D, n, 0);
        });
      n.asyncDep = v;
    } else
      Ra(n, v);
  } else
    hc(n);
}
function Ra(n, i, a) {
  qe(i) ? n.type.__ssrInlineRender ? n.ssrRender = i : n.render = i : Et(i) && (n.setupState = Mu(i)), hc(n);
}
function hc(n, i, a) {
  const u = n.type;
  n.render || (n.render = u.render || Dn);
  {
    const l = co(n);
    ar();
    try {
      Hl(n);
    } finally {
      ur(), l();
    }
  }
}
const kf = {
  get(n, i) {
    return Ft(n, "get", ""), n[i];
  }
};
function jf(n) {
  const i = (a) => {
    n.exposed = a || {};
  };
  return {
    attrs: new Proxy(n.attrs, kf),
    slots: n.slots,
    emit: n.emit,
    expose: i
  };
}
function pa(n) {
  return n.exposed ? n.exposeProxy || (n.exposeProxy = new Proxy(Mu(gl(n.exposed)), {
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
const Ff = (n, i) => Sl(n, i, so), Kf = "3.5.17";
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ms;
const ka = typeof window < "u" && window.trustedTypes;
if (ka)
  try {
    Ms = /* @__PURE__ */ ka.createPolicy("vue", {
      createHTML: (n) => n
    });
  } catch {
  }
const mc = Ms ? (n) => Ms.createHTML(n) : (n) => n, Bf = "http://www.w3.org/2000/svg", qf = "http://www.w3.org/1998/Math/MathML", ir = typeof document < "u" ? document : null, ja = ir && /* @__PURE__ */ ir.createElement("template"), Lf = {
  insert: (n, i, a) => {
    i.insertBefore(n, a || null);
  },
  remove: (n) => {
    const i = n.parentNode;
    i && i.removeChild(n);
  },
  createElement: (n, i, a, u) => {
    const l = i === "svg" ? ir.createElementNS(Bf, n) : i === "mathml" ? ir.createElementNS(qf, n) : a ? ir.createElement(n, { is: a }) : ir.createElement(n);
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
      ja.innerHTML = mc(
        u === "svg" ? `<svg>${n}</svg>` : u === "mathml" ? `<math>${n}</math>` : n
      );
      const C = ja.content;
      if (u === "svg" || u === "mathml") {
        const D = C.firstChild;
        for (; D.firstChild; )
          C.appendChild(D.firstChild);
        C.removeChild(D);
      }
      i.insertBefore(C, a);
    }
    return [
      // first
      v ? v.nextSibling : i.firstChild,
      // last
      a ? a.previousSibling : i.lastChild
    ];
  }
}, $f = Symbol("_vtc");
function Uf(n, i, a) {
  const u = n[$f];
  u && (i = (i ? [i, ...u] : [...u]).join(" ")), i == null ? n.removeAttribute("class") : a ? n.setAttribute("class", i) : n.className = i;
}
const Ma = Symbol("_vod"), Vf = Symbol("_vsh"), Gf = Symbol(""), Hf = /(^|;)\s*display\s*:/;
function Wf(n, i, a) {
  const u = n.style, l = Ot(a);
  let d = !1;
  if (a && !l) {
    if (i)
      if (Ot(i))
        for (const v of i.split(";")) {
          const C = v.slice(0, v.indexOf(":")).trim();
          a[C] == null && Eo(u, C, "");
        }
      else
        for (const v in i)
          a[v] == null && Eo(u, v, "");
    for (const v in a)
      v === "display" && (d = !0), Eo(u, v, a[v]);
  } else if (l) {
    if (i !== a) {
      const v = u[Gf];
      v && (a += ";" + v), u.cssText = a, d = Hf.test(a);
    }
  } else i && n.removeAttribute("style");
  Ma in n && (n[Ma] = d ? u.display : "", n[Vf] && (u.display = "none"));
}
const Fa = /\s*!important$/;
function Eo(n, i, a) {
  if (Be(a))
    a.forEach((u) => Eo(n, i, u));
  else if (a == null && (a = ""), i.startsWith("--"))
    n.setProperty(i, a);
  else {
    const u = Yf(n, i);
    Fa.test(a) ? n.setProperty(
      ti(u),
      a.replace(Fa, ""),
      "important"
    ) : n[u] = a;
  }
}
const Ka = ["Webkit", "Moz", "ms"], _s = {};
function Yf(n, i) {
  const a = _s[i];
  if (a)
    return a;
  let u = vr(i);
  if (u !== "filter" && u in n)
    return _s[i] = u;
  u = gu(u);
  for (let l = 0; l < Ka.length; l++) {
    const d = Ka[l] + u;
    if (d in n)
      return _s[i] = d;
  }
  return i;
}
const Ba = "http://www.w3.org/1999/xlink";
function qa(n, i, a, u, l, d = Xc(i)) {
  u && i.startsWith("xlink:") ? a == null ? n.removeAttributeNS(Ba, i.slice(6, i.length)) : n.setAttributeNS(Ba, i, a) : a == null || d && !bu(a) ? n.removeAttribute(i) : n.setAttribute(
    i,
    d ? "" : ci(a) ? String(a) : a
  );
}
function La(n, i, a, u, l) {
  if (i === "innerHTML" || i === "textContent") {
    a != null && (n[i] = i === "innerHTML" ? mc(a) : a);
    return;
  }
  const d = n.tagName;
  if (i === "value" && d !== "PROGRESS" && // custom elements may use _value internally
  !d.includes("-")) {
    const C = d === "OPTION" ? n.getAttribute("value") || "" : n.value, D = a == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      n.type === "checkbox" ? "on" : ""
    ) : String(a);
    (C !== D || !("_value" in n)) && (n.value = D), a == null && n.removeAttribute(i), n._value = a;
    return;
  }
  let v = !1;
  if (a === "" || a == null) {
    const C = typeof n[i];
    C === "boolean" ? a = bu(a) : a == null && C === "string" ? (a = "", v = !0) : C === "number" && (a = 0, v = !0);
  }
  try {
    n[i] = a;
  } catch {
  }
  v && n.removeAttribute(l || i);
}
function Qf(n, i, a, u) {
  n.addEventListener(i, a, u);
}
function Xf(n, i, a, u) {
  n.removeEventListener(i, a, u);
}
const $a = Symbol("_vei");
function zf(n, i, a, u, l = null) {
  const d = n[$a] || (n[$a] = {}), v = d[i];
  if (u && v)
    v.value = u;
  else {
    const [C, D] = Jf(i);
    if (u) {
      const W = d[i] = td(
        u,
        l
      );
      Qf(n, C, W, D);
    } else v && (Xf(n, C, v, D), d[i] = void 0);
  }
}
const Ua = /(?:Once|Passive|Capture)$/;
function Jf(n) {
  let i;
  if (Ua.test(n)) {
    i = {};
    let u;
    for (; u = n.match(Ua); )
      n = n.slice(0, n.length - u[0].length), i[u[0].toLowerCase()] = !0;
  }
  return [n[2] === ":" ? n.slice(3) : ti(n.slice(2)), i];
}
let Es = 0;
const Zf = /* @__PURE__ */ Promise.resolve(), ed = () => Es || (Zf.then(() => Es = 0), Es = Date.now());
function td(n, i) {
  const a = (u) => {
    if (!u._vts)
      u._vts = Date.now();
    else if (u._vts <= a.attached)
      return;
    Nn(
      nd(u, a.value),
      i,
      5,
      [u]
    );
  };
  return a.value = n, a.attached = ed(), a;
}
function nd(n, i) {
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
const Va = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // lowercase letter
n.charCodeAt(2) > 96 && n.charCodeAt(2) < 123, rd = (n, i, a, u, l, d) => {
  const v = l === "svg";
  i === "class" ? Uf(n, u, v) : i === "style" ? Wf(n, a, u) : Ro(i) ? Hs(i) || zf(n, i, a, u, d) : (i[0] === "." ? (i = i.slice(1), !0) : i[0] === "^" ? (i = i.slice(1), !1) : id(n, i, u, v)) ? (La(n, i, u), !n.tagName.includes("-") && (i === "value" || i === "checked" || i === "selected") && qa(n, i, u, v, d, i !== "value")) : /* #11081 force set props for possible async custom element */ n._isVueCE && (/[A-Z]/.test(i) || !Ot(u)) ? La(n, vr(i), u, d, i) : (i === "true-value" ? n._trueValue = u : i === "false-value" && (n._falseValue = u), qa(n, i, u, v));
};
function id(n, i, a, u) {
  if (u)
    return !!(i === "innerHTML" || i === "textContent" || i in n && Va(i) && qe(a));
  if (i === "spellcheck" || i === "draggable" || i === "translate" || i === "autocorrect" || i === "form" || i === "list" && n.tagName === "INPUT" || i === "type" && n.tagName === "TEXTAREA")
    return !1;
  if (i === "width" || i === "height") {
    const l = n.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Va(i) && Ot(a) ? !1 : i in n;
}
const od = /* @__PURE__ */ Bt({ patchProp: rd }, Lf);
let Ga;
function sd() {
  return Ga || (Ga = af(od));
}
const ad = (...n) => {
  const i = sd().createApp(...n), { mount: a } = i;
  return i.mount = (u) => {
    const l = cd(u);
    if (!l) return;
    const d = i._component;
    !qe(d) && !d.render && !d.template && (d.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const v = a(l, !1, ud(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), v;
  }, i;
};
function ud(n) {
  if (n instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && n instanceof MathMLElement)
    return "mathml";
}
function cd(n) {
  return Ot(n) ? document.querySelector(n) : n;
}
var ld = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fd(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function dd(n) {
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
const pd = {}, hd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pd
}, Symbol.toStringTag, { value: "Module" })), Wa = /* @__PURE__ */ dd(hd);
var Ya;
function md() {
  return Ya || (Ya = 1, function(n) {
    (function(i) {
      i.parser = function(O, w) {
        return new u(O, w);
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
      function u(O, w) {
        if (!(this instanceof u))
          return new u(O, w);
        var j = this;
        d(j), j.q = j.c = "", j.bufferCheckPosition = i.MAX_BUFFER_LENGTH, j.opt = w || {}, j.opt.lowercase = j.opt.lowercase || j.opt.lowercasetags, j.looseCase = j.opt.lowercase ? "toLowerCase" : "toUpperCase", j.tags = [], j.closed = j.closedRoot = j.sawRoot = !1, j.tag = j.error = null, j.strict = !!O, j.noscript = !!(O || j.opt.noscript), j.state = L.BEGIN, j.strictEntities = j.opt.strictEntities, j.ENTITIES = j.strictEntities ? Object.create(i.XML_ENTITIES) : Object.create(i.ENTITIES), j.attribList = [], j.opt.xmlns && (j.ns = Object.create(de)), j.opt.unquotedAttributeValues === void 0 && (j.opt.unquotedAttributeValues = !O), j.trackPosition = j.opt.position !== !1, j.trackPosition && (j.position = j.line = j.column = 0), rt(j, "onready");
      }
      Object.create || (Object.create = function(O) {
        function w() {
        }
        w.prototype = O;
        var j = new w();
        return j;
      }), Object.keys || (Object.keys = function(O) {
        var w = [];
        for (var j in O) O.hasOwnProperty(j) && w.push(j);
        return w;
      });
      function l(O) {
        for (var w = Math.max(i.MAX_BUFFER_LENGTH, 10), j = 0, $ = 0, De = a.length; $ < De; $++) {
          var A = O[a[$]].length;
          if (A > w)
            switch (a[$]) {
              case "textNode":
                Ge(O);
                break;
              case "cdata":
                Ne(O, "oncdata", O.cdata), O.cdata = "";
                break;
              case "script":
                Ne(O, "onscript", O.script), O.script = "";
                break;
              default:
                wt(O, "Max buffer length exceeded: " + a[$]);
            }
          j = Math.max(j, A);
        }
        var F = i.MAX_BUFFER_LENGTH - j;
        O.bufferCheckPosition = F + O.position;
      }
      function d(O) {
        for (var w = 0, j = a.length; w < j; w++)
          O[a[w]] = "";
      }
      function v(O) {
        Ge(O), O.cdata !== "" && (Ne(O, "oncdata", O.cdata), O.cdata = ""), O.script !== "" && (Ne(O, "onscript", O.script), O.script = "");
      }
      u.prototype = {
        end: function() {
          Ve(this);
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
      var C;
      try {
        C = Wa.Stream;
      } catch {
        C = function() {
        };
      }
      C || (C = function() {
      });
      var D = i.EVENTS.filter(function(O) {
        return O !== "error" && O !== "end";
      });
      function W(O, w) {
        return new B(O, w);
      }
      function B(O, w) {
        if (!(this instanceof B))
          return new B(O, w);
        C.apply(this), this._parser = new u(O, w), this.writable = !0, this.readable = !0;
        var j = this;
        this._parser.onend = function() {
          j.emit("end");
        }, this._parser.onerror = function($) {
          j.emit("error", $), j._parser.error = null;
        }, this._decoder = null, D.forEach(function($) {
          Object.defineProperty(j, "on" + $, {
            get: function() {
              return j._parser["on" + $];
            },
            set: function(De) {
              if (!De)
                return j.removeAllListeners($), j._parser["on" + $] = De, De;
              j.on($, De);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      B.prototype = Object.create(C.prototype, {
        constructor: {
          value: B
        }
      }), B.prototype.write = function(O) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(O)) {
          if (!this._decoder) {
            var w = Wa.StringDecoder;
            this._decoder = new w("utf8");
          }
          O = this._decoder.write(O);
        }
        return this._parser.write(O.toString()), this.emit("data", O), !0;
      }, B.prototype.end = function(O) {
        return O && O.length && this.write(O), this._parser.end(), !0;
      }, B.prototype.on = function(O, w) {
        var j = this;
        return !j._parser["on" + O] && D.indexOf(O) !== -1 && (j._parser["on" + O] = function() {
          var $ = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          $.splice(0, 0, O), j.emit.apply(j, $);
        }), C.prototype.on.call(j, O, w);
      };
      var G = "[CDATA[", re = "DOCTYPE", se = "http://www.w3.org/XML/1998/namespace", he = "http://www.w3.org/2000/xmlns/", de = { xml: se, xmlns: he }, Te = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, ae = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, ye = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, ke = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function pe(O) {
        return O === " " || O === `
` || O === "\r" || O === "	";
      }
      function je(O) {
        return O === '"' || O === "'";
      }
      function ie(O) {
        return O === ">" || pe(O);
      }
      function oe(O, w) {
        return O.test(w);
      }
      function xe(O, w) {
        return !oe(O, w);
      }
      var L = 0;
      i.STATE = {
        BEGIN: L++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: L++,
        // leading whitespace
        TEXT: L++,
        // general stuff
        TEXT_ENTITY: L++,
        // &amp and such.
        OPEN_WAKA: L++,
        // <
        SGML_DECL: L++,
        // <!BLARG
        SGML_DECL_QUOTED: L++,
        // <!BLARG foo "bar
        DOCTYPE: L++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: L++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: L++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: L++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: L++,
        // <!-
        COMMENT: L++,
        // <!--
        COMMENT_ENDING: L++,
        // <!-- blah -
        COMMENT_ENDED: L++,
        // <!-- blah --
        CDATA: L++,
        // <![CDATA[ something
        CDATA_ENDING: L++,
        // ]
        CDATA_ENDING_2: L++,
        // ]]
        PROC_INST: L++,
        // <?hi
        PROC_INST_BODY: L++,
        // <?hi there
        PROC_INST_ENDING: L++,
        // <?hi "there" ?
        OPEN_TAG: L++,
        // <strong
        OPEN_TAG_SLASH: L++,
        // <strong /
        ATTRIB: L++,
        // <a
        ATTRIB_NAME: L++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: L++,
        // <a foo _
        ATTRIB_VALUE: L++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: L++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: L++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: L++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: L++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: L++,
        // <foo bar=&quot
        CLOSE_TAG: L++,
        // </a
        CLOSE_TAG_SAW_WHITE: L++,
        // </a   >
        SCRIPT: L++,
        // <script> ...
        SCRIPT_ENDING: L++
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
      }, Object.keys(i.ENTITIES).forEach(function(O) {
        var w = i.ENTITIES[O], j = typeof w == "number" ? String.fromCharCode(w) : w;
        i.ENTITIES[O] = j;
      });
      for (var it in i.STATE)
        i.STATE[i.STATE[it]] = it;
      L = i.STATE;
      function rt(O, w, j) {
        O[w] && O[w](j);
      }
      function Ne(O, w, j) {
        O.textNode && Ge(O), rt(O, w, j);
      }
      function Ge(O) {
        O.textNode = At(O.opt, O.textNode), O.textNode && rt(O, "ontext", O.textNode), O.textNode = "";
      }
      function At(O, w) {
        return O.trim && (w = w.trim()), O.normalize && (w = w.replace(/\s+/g, " ")), w;
      }
      function wt(O, w) {
        return Ge(O), O.trackPosition && (w += `
Line: ` + O.line + `
Column: ` + O.column + `
Char: ` + O.c), w = new Error(w), O.error = w, rt(O, "onerror", w), O;
      }
      function Ve(O) {
        return O.sawRoot && !O.closedRoot && be(O, "Unclosed root tag"), O.state !== L.BEGIN && O.state !== L.BEGIN_WHITESPACE && O.state !== L.TEXT && wt(O, "Unexpected end"), Ge(O), O.c = "", O.closed = !0, rt(O, "onend"), u.call(O, O.strict, O.opt), O;
      }
      function be(O, w) {
        if (typeof O != "object" || !(O instanceof u))
          throw new Error("bad call to strictFail");
        O.strict && wt(O, w);
      }
      function Oe(O) {
        O.strict || (O.tagName = O.tagName[O.looseCase]());
        var w = O.tags[O.tags.length - 1] || O, j = O.tag = { name: O.tagName, attributes: {} };
        O.opt.xmlns && (j.ns = w.ns), O.attribList.length = 0, Ne(O, "onopentagstart", j);
      }
      function et(O, w) {
        var j = O.indexOf(":"), $ = j < 0 ? ["", O] : O.split(":"), De = $[0], A = $[1];
        return w && O === "xmlns" && (De = "xmlns", A = ""), { prefix: De, local: A };
      }
      function ze(O) {
        if (O.strict || (O.attribName = O.attribName[O.looseCase]()), O.attribList.indexOf(O.attribName) !== -1 || O.tag.attributes.hasOwnProperty(O.attribName)) {
          O.attribName = O.attribValue = "";
          return;
        }
        if (O.opt.xmlns) {
          var w = et(O.attribName, !0), j = w.prefix, $ = w.local;
          if (j === "xmlns")
            if ($ === "xml" && O.attribValue !== se)
              be(
                O,
                "xml: prefix must be bound to " + se + `
Actual: ` + O.attribValue
              );
            else if ($ === "xmlns" && O.attribValue !== he)
              be(
                O,
                "xmlns: prefix must be bound to " + he + `
Actual: ` + O.attribValue
              );
            else {
              var De = O.tag, A = O.tags[O.tags.length - 1] || O;
              De.ns === A.ns && (De.ns = Object.create(A.ns)), De.ns[$] = O.attribValue;
            }
          O.attribList.push([O.attribName, O.attribValue]);
        } else
          O.tag.attributes[O.attribName] = O.attribValue, Ne(O, "onattribute", {
            name: O.attribName,
            value: O.attribValue
          });
        O.attribName = O.attribValue = "";
      }
      function at(O, w) {
        if (O.opt.xmlns) {
          var j = O.tag, $ = et(O.tagName);
          j.prefix = $.prefix, j.local = $.local, j.uri = j.ns[$.prefix] || "", j.prefix && !j.uri && (be(O, "Unbound namespace prefix: " + JSON.stringify(O.tagName)), j.uri = $.prefix);
          var De = O.tags[O.tags.length - 1] || O;
          j.ns && De.ns !== j.ns && Object.keys(j.ns).forEach(function(me) {
            Ne(O, "onopennamespace", {
              prefix: me,
              uri: j.ns[me]
            });
          });
          for (var A = 0, F = O.attribList.length; A < F; A++) {
            var Z = O.attribList[A], I = Z[0], k = Z[1], M = et(I, !0), U = M.prefix, K = M.local, te = U === "" ? "" : j.ns[U] || "", Q = {
              name: I,
              value: k,
              prefix: U,
              local: K,
              uri: te
            };
            U && U !== "xmlns" && !te && (be(O, "Unbound namespace prefix: " + JSON.stringify(U)), Q.uri = U), O.tag.attributes[I] = Q, Ne(O, "onattribute", Q);
          }
          O.attribList.length = 0;
        }
        O.tag.isSelfClosing = !!w, O.sawRoot = !0, O.tags.push(O.tag), Ne(O, "onopentag", O.tag), w || (!O.noscript && O.tagName.toLowerCase() === "script" ? O.state = L.SCRIPT : O.state = L.TEXT, O.tag = null, O.tagName = ""), O.attribName = O.attribValue = "", O.attribList.length = 0;
      }
      function ot(O) {
        if (!O.tagName) {
          be(O, "Weird empty close tag."), O.textNode += "</>", O.state = L.TEXT;
          return;
        }
        if (O.script) {
          if (O.tagName !== "script") {
            O.script += "</" + O.tagName + ">", O.tagName = "", O.state = L.SCRIPT;
            return;
          }
          Ne(O, "onscript", O.script), O.script = "";
        }
        var w = O.tags.length, j = O.tagName;
        O.strict || (j = j[O.looseCase]());
        for (var $ = j; w--; ) {
          var De = O.tags[w];
          if (De.name !== $)
            be(O, "Unexpected close tag");
          else
            break;
        }
        if (w < 0) {
          be(O, "Unmatched closing tag: " + O.tagName), O.textNode += "</" + O.tagName + ">", O.state = L.TEXT;
          return;
        }
        O.tagName = j;
        for (var A = O.tags.length; A-- > w; ) {
          var F = O.tag = O.tags.pop();
          O.tagName = O.tag.name, Ne(O, "onclosetag", O.tagName);
          var Z = {};
          for (var I in F.ns)
            Z[I] = F.ns[I];
          var k = O.tags[O.tags.length - 1] || O;
          O.opt.xmlns && F.ns !== k.ns && Object.keys(F.ns).forEach(function(M) {
            var U = F.ns[M];
            Ne(O, "onclosenamespace", { prefix: M, uri: U });
          });
        }
        w === 0 && (O.closedRoot = !0), O.tagName = O.attribValue = O.attribName = "", O.attribList.length = 0, O.state = L.TEXT;
      }
      function ht(O) {
        var w = O.entity, j = w.toLowerCase(), $, De = "";
        return O.ENTITIES[w] ? O.ENTITIES[w] : O.ENTITIES[j] ? O.ENTITIES[j] : (w = j, w.charAt(0) === "#" && (w.charAt(1) === "x" ? (w = w.slice(2), $ = parseInt(w, 16), De = $.toString(16)) : (w = w.slice(1), $ = parseInt(w, 10), De = $.toString(10))), w = w.replace(/^0+/, ""), isNaN($) || De.toLowerCase() !== w ? (be(O, "Invalid character entity"), "&" + O.entity + ";") : String.fromCodePoint($));
      }
      function rn(O, w) {
        w === "<" ? (O.state = L.OPEN_WAKA, O.startTagPosition = O.position) : pe(w) || (be(O, "Non-whitespace before first tag."), O.textNode = w, O.state = L.TEXT);
      }
      function It(O, w) {
        var j = "";
        return w < O.length && (j = O.charAt(w)), j;
      }
      function pt(O) {
        var w = this;
        if (this.error)
          throw this.error;
        if (w.closed)
          return wt(
            w,
            "Cannot write after close. Assign an onready handler."
          );
        if (O === null)
          return Ve(w);
        typeof O == "object" && (O = O.toString());
        for (var j = 0, $ = ""; $ = It(O, j++), w.c = $, !!$; )
          switch (w.trackPosition && (w.position++, $ === `
` ? (w.line++, w.column = 0) : w.column++), w.state) {
            case L.BEGIN:
              if (w.state = L.BEGIN_WHITESPACE, $ === "\uFEFF")
                continue;
              rn(w, $);
              continue;
            case L.BEGIN_WHITESPACE:
              rn(w, $);
              continue;
            case L.TEXT:
              if (w.sawRoot && !w.closedRoot) {
                for (var De = j - 1; $ && $ !== "<" && $ !== "&"; )
                  $ = It(O, j++), $ && w.trackPosition && (w.position++, $ === `
` ? (w.line++, w.column = 0) : w.column++);
                w.textNode += O.substring(De, j - 1);
              }
              $ === "<" && !(w.sawRoot && w.closedRoot && !w.strict) ? (w.state = L.OPEN_WAKA, w.startTagPosition = w.position) : (!pe($) && (!w.sawRoot || w.closedRoot) && be(w, "Text data outside of root node."), $ === "&" ? w.state = L.TEXT_ENTITY : w.textNode += $);
              continue;
            case L.SCRIPT:
              $ === "<" ? w.state = L.SCRIPT_ENDING : w.script += $;
              continue;
            case L.SCRIPT_ENDING:
              $ === "/" ? w.state = L.CLOSE_TAG : (w.script += "<" + $, w.state = L.SCRIPT);
              continue;
            case L.OPEN_WAKA:
              if ($ === "!")
                w.state = L.SGML_DECL, w.sgmlDecl = "";
              else if (!pe($)) if (oe(Te, $))
                w.state = L.OPEN_TAG, w.tagName = $;
              else if ($ === "/")
                w.state = L.CLOSE_TAG, w.tagName = "";
              else if ($ === "?")
                w.state = L.PROC_INST, w.procInstName = w.procInstBody = "";
              else {
                if (be(w, "Unencoded <"), w.startTagPosition + 1 < w.position) {
                  var A = w.position - w.startTagPosition;
                  $ = new Array(A).join(" ") + $;
                }
                w.textNode += "<" + $, w.state = L.TEXT;
              }
              continue;
            case L.SGML_DECL:
              if (w.sgmlDecl + $ === "--") {
                w.state = L.COMMENT, w.comment = "", w.sgmlDecl = "";
                continue;
              }
              w.doctype && w.doctype !== !0 && w.sgmlDecl ? (w.state = L.DOCTYPE_DTD, w.doctype += "<!" + w.sgmlDecl + $, w.sgmlDecl = "") : (w.sgmlDecl + $).toUpperCase() === G ? (Ne(w, "onopencdata"), w.state = L.CDATA, w.sgmlDecl = "", w.cdata = "") : (w.sgmlDecl + $).toUpperCase() === re ? (w.state = L.DOCTYPE, (w.doctype || w.sawRoot) && be(
                w,
                "Inappropriately located doctype declaration"
              ), w.doctype = "", w.sgmlDecl = "") : $ === ">" ? (Ne(w, "onsgmldeclaration", w.sgmlDecl), w.sgmlDecl = "", w.state = L.TEXT) : (je($) && (w.state = L.SGML_DECL_QUOTED), w.sgmlDecl += $);
              continue;
            case L.SGML_DECL_QUOTED:
              $ === w.q && (w.state = L.SGML_DECL, w.q = ""), w.sgmlDecl += $;
              continue;
            case L.DOCTYPE:
              $ === ">" ? (w.state = L.TEXT, Ne(w, "ondoctype", w.doctype), w.doctype = !0) : (w.doctype += $, $ === "[" ? w.state = L.DOCTYPE_DTD : je($) && (w.state = L.DOCTYPE_QUOTED, w.q = $));
              continue;
            case L.DOCTYPE_QUOTED:
              w.doctype += $, $ === w.q && (w.q = "", w.state = L.DOCTYPE);
              continue;
            case L.DOCTYPE_DTD:
              $ === "]" ? (w.doctype += $, w.state = L.DOCTYPE) : $ === "<" ? (w.state = L.OPEN_WAKA, w.startTagPosition = w.position) : je($) ? (w.doctype += $, w.state = L.DOCTYPE_DTD_QUOTED, w.q = $) : w.doctype += $;
              continue;
            case L.DOCTYPE_DTD_QUOTED:
              w.doctype += $, $ === w.q && (w.state = L.DOCTYPE_DTD, w.q = "");
              continue;
            case L.COMMENT:
              $ === "-" ? w.state = L.COMMENT_ENDING : w.comment += $;
              continue;
            case L.COMMENT_ENDING:
              $ === "-" ? (w.state = L.COMMENT_ENDED, w.comment = At(w.opt, w.comment), w.comment && Ne(w, "oncomment", w.comment), w.comment = "") : (w.comment += "-" + $, w.state = L.COMMENT);
              continue;
            case L.COMMENT_ENDED:
              $ !== ">" ? (be(w, "Malformed comment"), w.comment += "--" + $, w.state = L.COMMENT) : w.doctype && w.doctype !== !0 ? w.state = L.DOCTYPE_DTD : w.state = L.TEXT;
              continue;
            case L.CDATA:
              $ === "]" ? w.state = L.CDATA_ENDING : w.cdata += $;
              continue;
            case L.CDATA_ENDING:
              $ === "]" ? w.state = L.CDATA_ENDING_2 : (w.cdata += "]" + $, w.state = L.CDATA);
              continue;
            case L.CDATA_ENDING_2:
              $ === ">" ? (w.cdata && Ne(w, "oncdata", w.cdata), Ne(w, "onclosecdata"), w.cdata = "", w.state = L.TEXT) : $ === "]" ? w.cdata += "]" : (w.cdata += "]]" + $, w.state = L.CDATA);
              continue;
            case L.PROC_INST:
              $ === "?" ? w.state = L.PROC_INST_ENDING : pe($) ? w.state = L.PROC_INST_BODY : w.procInstName += $;
              continue;
            case L.PROC_INST_BODY:
              if (!w.procInstBody && pe($))
                continue;
              $ === "?" ? w.state = L.PROC_INST_ENDING : w.procInstBody += $;
              continue;
            case L.PROC_INST_ENDING:
              $ === ">" ? (Ne(w, "onprocessinginstruction", {
                name: w.procInstName,
                body: w.procInstBody
              }), w.procInstName = w.procInstBody = "", w.state = L.TEXT) : (w.procInstBody += "?" + $, w.state = L.PROC_INST_BODY);
              continue;
            case L.OPEN_TAG:
              oe(ae, $) ? w.tagName += $ : (Oe(w), $ === ">" ? at(w) : $ === "/" ? w.state = L.OPEN_TAG_SLASH : (pe($) || be(w, "Invalid character in tag name"), w.state = L.ATTRIB));
              continue;
            case L.OPEN_TAG_SLASH:
              $ === ">" ? (at(w, !0), ot(w)) : (be(w, "Forward-slash in opening tag not followed by >"), w.state = L.ATTRIB);
              continue;
            case L.ATTRIB:
              if (pe($))
                continue;
              $ === ">" ? at(w) : $ === "/" ? w.state = L.OPEN_TAG_SLASH : oe(Te, $) ? (w.attribName = $, w.attribValue = "", w.state = L.ATTRIB_NAME) : be(w, "Invalid attribute name");
              continue;
            case L.ATTRIB_NAME:
              $ === "=" ? w.state = L.ATTRIB_VALUE : $ === ">" ? (be(w, "Attribute without value"), w.attribValue = w.attribName, ze(w), at(w)) : pe($) ? w.state = L.ATTRIB_NAME_SAW_WHITE : oe(ae, $) ? w.attribName += $ : be(w, "Invalid attribute name");
              continue;
            case L.ATTRIB_NAME_SAW_WHITE:
              if ($ === "=")
                w.state = L.ATTRIB_VALUE;
              else {
                if (pe($))
                  continue;
                be(w, "Attribute without value"), w.tag.attributes[w.attribName] = "", w.attribValue = "", Ne(w, "onattribute", {
                  name: w.attribName,
                  value: ""
                }), w.attribName = "", $ === ">" ? at(w) : oe(Te, $) ? (w.attribName = $, w.state = L.ATTRIB_NAME) : (be(w, "Invalid attribute name"), w.state = L.ATTRIB);
              }
              continue;
            case L.ATTRIB_VALUE:
              if (pe($))
                continue;
              je($) ? (w.q = $, w.state = L.ATTRIB_VALUE_QUOTED) : (w.opt.unquotedAttributeValues || wt(w, "Unquoted attribute value"), w.state = L.ATTRIB_VALUE_UNQUOTED, w.attribValue = $);
              continue;
            case L.ATTRIB_VALUE_QUOTED:
              if ($ !== w.q) {
                $ === "&" ? w.state = L.ATTRIB_VALUE_ENTITY_Q : w.attribValue += $;
                continue;
              }
              ze(w), w.q = "", w.state = L.ATTRIB_VALUE_CLOSED;
              continue;
            case L.ATTRIB_VALUE_CLOSED:
              pe($) ? w.state = L.ATTRIB : $ === ">" ? at(w) : $ === "/" ? w.state = L.OPEN_TAG_SLASH : oe(Te, $) ? (be(w, "No whitespace between attributes"), w.attribName = $, w.attribValue = "", w.state = L.ATTRIB_NAME) : be(w, "Invalid attribute name");
              continue;
            case L.ATTRIB_VALUE_UNQUOTED:
              if (!ie($)) {
                $ === "&" ? w.state = L.ATTRIB_VALUE_ENTITY_U : w.attribValue += $;
                continue;
              }
              ze(w), $ === ">" ? at(w) : w.state = L.ATTRIB;
              continue;
            case L.CLOSE_TAG:
              if (w.tagName)
                $ === ">" ? ot(w) : oe(ae, $) ? w.tagName += $ : w.script ? (w.script += "</" + w.tagName, w.tagName = "", w.state = L.SCRIPT) : (pe($) || be(w, "Invalid tagname in closing tag"), w.state = L.CLOSE_TAG_SAW_WHITE);
              else {
                if (pe($))
                  continue;
                xe(Te, $) ? w.script ? (w.script += "</" + $, w.state = L.SCRIPT) : be(w, "Invalid tagname in closing tag.") : w.tagName = $;
              }
              continue;
            case L.CLOSE_TAG_SAW_WHITE:
              if (pe($))
                continue;
              $ === ">" ? ot(w) : be(w, "Invalid characters in closing tag");
              continue;
            case L.TEXT_ENTITY:
            case L.ATTRIB_VALUE_ENTITY_Q:
            case L.ATTRIB_VALUE_ENTITY_U:
              var F, Z;
              switch (w.state) {
                case L.TEXT_ENTITY:
                  F = L.TEXT, Z = "textNode";
                  break;
                case L.ATTRIB_VALUE_ENTITY_Q:
                  F = L.ATTRIB_VALUE_QUOTED, Z = "attribValue";
                  break;
                case L.ATTRIB_VALUE_ENTITY_U:
                  F = L.ATTRIB_VALUE_UNQUOTED, Z = "attribValue";
                  break;
              }
              if ($ === ";") {
                var I = ht(w);
                w.opt.unparsedEntities && !Object.values(i.XML_ENTITIES).includes(I) ? (w.entity = "", w.state = F, w.write(I)) : (w[Z] += I, w.entity = "", w.state = F);
              } else oe(w.entity.length ? ke : ye, $) ? w.entity += $ : (be(w, "Invalid character in entity name"), w[Z] += "&" + w.entity + $, w.entity = "", w.state = F);
              continue;
            default:
              throw new Error(w, "Unknown state: " + w.state);
          }
        return w.position >= w.bufferCheckPosition && l(w), w;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var O = String.fromCharCode, w = Math.floor, j = function() {
          var $ = 16384, De = [], A, F, Z = -1, I = arguments.length;
          if (!I)
            return "";
          for (var k = ""; ++Z < I; ) {
            var M = Number(arguments[Z]);
            if (!isFinite(M) || // `NaN`, `+Infinity`, or `-Infinity`
            M < 0 || // not a valid Unicode code point
            M > 1114111 || // not a valid Unicode code point
            w(M) !== M)
              throw RangeError("Invalid code point: " + M);
            M <= 65535 ? De.push(M) : (M -= 65536, A = (M >> 10) + 55296, F = M % 1024 + 56320, De.push(A, F)), (Z + 1 === I || De.length > $) && (k += O.apply(null, De), De.length = 0);
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
md();
const zt = "sclElements", ha = {
  default: {
    prefix: "",
    uri: "http://www.iec.ch/61850/2003/SCL"
  }
};
function yd(n) {
  return n !== null && typeof n == "object" && "namespace" in n && n.namespace !== null;
}
var Fs = { exports: {} }, vd = Fs.exports, Qa;
function gd() {
  return Qa || (Qa = 1, function(n, i) {
    (function(a, u) {
      n.exports = u();
    })(vd, function() {
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
      var d = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : ld, v = Object.keys, C = Array.isArray;
      function D(e, t) {
        return typeof t != "object" || v(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || d.Promise || (d.Promise = Promise);
      var W = Object.getPrototypeOf, B = {}.hasOwnProperty;
      function G(e, t) {
        return B.call(e, t);
      }
      function re(e, t) {
        typeof t == "function" && (t = t(W(e))), (typeof Reflect > "u" ? v : Reflect.ownKeys)(t).forEach(function(r) {
          he(e, r, t[r]);
        });
      }
      var se = Object.defineProperty;
      function he(e, t, r, o) {
        se(e, t, D(r && G(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function de(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), he(e.prototype, "constructor", e), { extend: re.bind(null, e.prototype) };
        } };
      }
      var Te = Object.getOwnPropertyDescriptor, ae = [].slice;
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
          p !== -1 ? (c = t.substr(0, p), (f = t.substr(p + 1)) === "" ? r === void 0 ? C(e) && !isNaN(parseInt(c)) ? e.splice(c, 1) : delete e[c] : e[c] = r : oe(p = !(p = e[c]) || !G(e, c) ? e[c] = {} : p, f, r)) : r === void 0 ? C(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function xe(e) {
        var t, r = {};
        for (t in e) G(e, t) && (r[t] = e[t]);
        return r;
      }
      var L = [].concat;
      function it(e) {
        return L.apply([], e);
      }
      var Ie = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(it([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return d[e];
      }), rt = new Set(Ie.map(function(e) {
        return d[e];
      })), Ne = null;
      function Ge(e) {
        return Ne = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var o = Ne.get(r);
          if (o) return o;
          if (C(r)) {
            o = [], Ne.set(r, o);
            for (var s = 0, c = r.length; s < c; ++s) o.push(t(r[s]));
          } else if (rt.has(r.constructor)) o = r;
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
      var Ve = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", be = typeof Ve == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Ve]) && t.apply(e);
      } : function() {
        return null;
      };
      function Oe(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var et = {};
      function ze(e) {
        var t, r, o, s;
        if (arguments.length === 1) {
          if (C(e)) return e.slice();
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
      }, Ce = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], dt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Ce), ot = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
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
      var O = dt.reduce(function(e, t) {
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
      var $ = Ce.reduce(function(e, t) {
        return e[t + "Error"] = j[t], e;
      }, {}), De = dt.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = j[t]), e;
      }, {});
      function A() {
      }
      function F(e) {
        return e;
      }
      function Z(e, t) {
        return e == null || e === F ? t : function(r) {
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
      function M(e, t) {
        return e === A ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? I(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? I(o, this.onerror) : o);
        };
      }
      function U(e, t) {
        return e === A ? t : function(r) {
          var o = e.apply(this, arguments);
          D(r, o);
          var s = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? I(s, this.onsuccess) : s), c && (this.onerror = this.onerror ? I(c, this.onerror) : c), o === void 0 ? r === void 0 ? void 0 : r : D(o, r);
        };
      }
      function K(e, t) {
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
      var ce = {}, Se = 100, Ie = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, W(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, W(t), e];
      }(), Ce = Ie[0], dt = Ie[1], Ie = Ie[2], dt = dt && dt.then, Ke = Ce && Ce.constructor, Le = !!Ie, ut = function(e, t) {
        tn.push([e, t]), _t && (queueMicrotask(Uo), _t = !1);
      }, mt = !0, _t = !0, ct = [], $t = [], Tn = F, Je = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: A, pgp: !1, env: {}, finalize: A }, ne = Je, tn = [], Ut = 0, Rn = [];
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
        var e = ne, t = Fn;
        function r(o, s) {
          var c = this, f = !e.global && (e !== ne || t !== Fn), p = f && !Dt(), m = new J(function(g, _) {
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
        $t.push(t), e._state === null && (r = e._lib && on(), t = Tn(t), e._state = !1, e._value = t, o = e, ct.some(function(s) {
          return s._value === o._value;
        }) || ct.push(o), di(e), r && sn());
      }
      function di(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var r = 0, o = t.length; r < o; ++r) wr(e, t[r]);
        var s = e._PSD;
        --s.ref || s.finalize(), Ut === 0 && (++Ut, ut(function() {
          --Ut == 0 && _r();
        }, []));
      }
      function wr(e, t) {
        if (e._state !== null) {
          var r = e._state ? t.onFulfilled : t.onRejected;
          if (r === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++Ut, ut($o, [r, e, t]);
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
          --Ut == 0 && _r(), --r.psd.ref || r.psd.finalize();
        }
      }
      function Uo() {
        Vt(Je, function() {
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
      function Pe(e, t) {
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
            return s(new j.Timeout(t));
          }, e);
          r.then(o, s).finally(clearTimeout.bind(null, c));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && he(J.prototype, Symbol.toStringTag, "Dexie.Promise"), Je.env = pi(), re(J, { all: function() {
        var e = ze.apply(null, arguments).map(Kn);
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
        var e = ze.apply(null, arguments).map(Kn);
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
        return Fn;
      } }, newPSD: Pt, usePSD: Vt, scheduler: { get: function() {
        return ut;
      }, set: function(e) {
        ut = e;
      } }, rejectionMapper: { get: function() {
        return Tn;
      }, set: function(e) {
        Tn = e;
      } }, follow: function(e, t) {
        return new J(function(r, o) {
          return Pt(function(s, c) {
            var f = ne;
            f.unhandleds = [], f.onunhandled = c, f.finalize = I(function() {
              var p, m = this;
              p = function() {
                m.unhandleds.length === 0 ? s() : c(m.unhandleds[0]);
              }, Rn.push(function g() {
                p(), Rn.splice(Rn.indexOf(g), 1);
              }), ++Ut, ut(function() {
                --Ut == 0 && _r();
              }, []);
            }, f.finalize), e();
          }, t, r, o);
        });
      } }), Ke && (Ke.allSettled && he(J, "allSettled", function() {
        var e = ze.apply(null, arguments).map(Kn);
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
      }), Ke.any && typeof AggregateError < "u" && he(J, "any", function() {
        var e = ze.apply(null, arguments).map(Kn);
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
      }), Ke.withResolvers && (J.withResolvers = Ke.withResolvers));
      var $e = { awaits: 0, echoes: 0, id: 0 }, Vo = 0, jn = [], Mn = 0, Fn = 0, Go = 0;
      function Pt(e, t, r, o) {
        var s = ne, c = Object.create(s);
        return c.parent = s, c.ref = 0, c.global = !1, c.id = ++Go, Je.env, c.env = Le ? { Promise: J, PromiseProp: { value: J, configurable: !0, writable: !0 }, all: J.all, race: J.race, allSettled: J.allSettled, any: J.any, resolve: J.resolve, reject: J.reject } : {}, t && D(c, t), ++s.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = Vt(c, e, r, o), c.ref === 0 && c.finalize(), o;
      }
      function an() {
        return $e.id || ($e.id = ++Vo), ++$e.awaits, $e.echoes += Se, $e.id;
      }
      function Dt() {
        return !!$e.awaits && (--$e.awaits == 0 && ($e.id = 0), $e.echoes = $e.awaits * Se, !0);
      }
      function Kn(e) {
        return $e.echoes && e && e.constructor === Ke ? (an(), e.then(function(t) {
          return Dt(), t;
        }, function(t) {
          return Dt(), Me(t);
        })) : e;
      }
      function Ho() {
        var e = jn[jn.length - 1];
        jn.pop(), Nt(e, !1);
      }
      function Nt(e, t) {
        var r, o = ne;
        (t ? !$e.echoes || Mn++ && e === ne : !Mn || --Mn && e === ne) || queueMicrotask(t ? (function(s) {
          ++Fn, $e.echoes && --$e.echoes != 0 || ($e.echoes = $e.awaits = $e.id = 0), jn.push(ne), Nt(s, !0);
        }).bind(null, e) : Ho), e !== ne && (ne = e, o === Je && (Je.env = pi()), Le && (r = Je.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(d, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function pi() {
        var e = d.Promise;
        return Le ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(d, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Vt(e, t, r, o, s) {
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
      function Er(e) {
        Promise === Ke && $e.echoes === 0 ? Mn === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + dt).indexOf("[native code]") === -1 && (an = Dt = A);
      var Me = J.reject, Gt = "￿", St = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", mi = "String expected.", un = [], Bn = "__dbnames", Sr = "readonly", xr = "readwrite";
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
      var wi = (Ae.prototype._trans = function(e, t, r) {
        var o = this._tx || ne.trans, s = this.name, c = Q && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function f(g, _, h) {
          if (!h.schema[s]) throw new j.NotFound("Table " + s + " not part of transaction");
          return t(h.idbtrans, h);
        }
        var p = on();
        try {
          var m = o && o.db._novip === this.db._novip ? o === ne.trans ? o._promise(e, f, r) : Pt(function() {
            return o._promise(e, f, r);
          }, { trans: o, transless: ne.transless || ne }) : function g(_, h, x, y) {
            if (_.idbdb && (_._state.openComplete || ne.letThrough || _._vip)) {
              var b = _._createTransaction(h, x, _._dbSchema);
              try {
                b.create(), _._state.PR1398_maxLoop = 3;
              } catch (S) {
                return S.name === O.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                  return g(_, h, x, y);
                })) : Me(S);
              }
              return b._promise(h, function(S, E) {
                return Pt(function() {
                  return ne.trans = b, y(S, E, b);
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
            if (_._state.openComplete) return Me(new j.DatabaseClosed(_._state.dbOpenError));
            if (!_._state.isBeingOpened) {
              if (!_._state.autoOpen) return Me(new j.DatabaseClosed());
              _.open().catch(A);
            }
            return _._state.dbReadyPromise.then(function() {
              return g(_, h, x, y);
            });
          }(this.db, e, [this.name], f);
          return c && (m._consoleTask = c, m = m.catch(function(g) {
            return console.trace(g), Me(g);
          })), m;
        } finally {
          p && sn();
        }
      }, Ae.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? Me(new j.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(s) {
            return r.hook.reading.fire(s);
          });
        }).then(t);
      }, Ae.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (C(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
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
          var g = h[0], _ = h[1], h = o[m], x = e[m];
          return [g || h, g || !h ? Ht(_, h && h.multi ? function(y) {
            return y = ie(y, m), C(y) && y.some(function(b) {
              return s(x, b);
            });
          } : function(y) {
            return s(x, ie(y, m));
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
        return new this.db.Collection(new this.db.WhereClause(this, C(e) ? "[".concat(e.join("+"), "]") : e));
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
        return typeof e != "object" || C(e) ? this.where(":id").equals(e).modify(t) : (e = ie(e, this.schema.primKey.keyPath), e === void 0 ? Me(new j.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
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
            return Ln(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? J.reject(o.failures[0]) : void 0;
          });
        });
      }, Ae.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: yi }).then(function(r) {
            return Ln(e, null, r);
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
          var m = e.length, g = g && p ? e.map(qn(g)) : e;
          return o.core.mutate({ trans: f, type: "add", keys: s, values: g, wantResults: c }).then(function(b) {
            var h = b.numFailures, x = b.results, y = b.lastResult, b = b.failures;
            if (h === 0) return c ? x : y;
            throw new pt("".concat(o.name, ".bulkAdd(): ").concat(h, " of ").concat(m, " operations failed"), b);
          });
        });
      }, Ae.prototype.bulkPut = function(e, t, r) {
        var o = this, s = Array.isArray(t) ? t : void 0, c = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(f) {
          var g = o.schema.primKey, p = g.auto, g = g.keyPath;
          if (g && s) throw new j.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new j.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, g = g && p ? e.map(qn(g)) : e;
          return o.core.mutate({ trans: f, type: "put", keys: s, values: g, wantResults: c }).then(function(b) {
            var h = b.numFailures, x = b.results, y = b.lastResult, b = b.failures;
            if (h === 0) return c ? x : y;
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
            e.forEach(function(h, x) {
              var y = h.key, b = h.changes, S = p[x];
              if (S) {
                for (var E = 0, T = Object.keys(b); E < T.length; E++) {
                  var P = T[E], N = b[P];
                  if (P === t.schema.primKey.keyPath) {
                    if (ve(N, y) !== 0) throw new j.Constraint("Cannot update primary key in bulkUpdate()");
                  } else oe(S, P, N);
                }
                c.push(x), m.push(y), g.push(S);
              }
            });
            var _ = m.length;
            return r.mutate({ trans: f, type: "put", keys: m, values: g, updates: { keys: o, changeSpecs: s } }).then(function(h) {
              var x = h.numFailures, y = h.failures;
              if (x === 0) return _;
              for (var b = 0, S = Object.keys(y); b < S.length; b++) {
                var E, T = S[b], P = c[Number(T)];
                P != null && (E = y[T], delete y[T], y[P] = E);
              }
              throw new pt("".concat(t.name, ".bulkUpdate(): ").concat(x, " of ").concat(_, " operations failed"), y);
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
            p = p || K;
            var _ = { subscribers: [], fire: m = m || A, subscribe: function(h) {
              _.subscribers.indexOf(h) === -1 && (_.subscribers.push(h), _.fire = p(_.fire, h));
            }, unsubscribe: function(h) {
              _.subscribers = _.subscribers.filter(function(x) {
                return x !== h;
              }), _.fire = _.subscribers.reduce(p, m);
            } };
            return r[f] = t[f] = _;
          }
          v(g = f).forEach(function(h) {
            var x = g[h];
            if (C(x)) c(h, g[h][0], g[h][1]);
            else {
              if (x !== "asap") throw new j.InvalidArgument("Invalid event config");
              var y = c(h, F, function() {
                for (var b = arguments.length, S = new Array(b); b--; ) S[b] = arguments[b];
                y.subscribers.forEach(function(E) {
                  je(function() {
                    E.apply(null, S);
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
      function Cr(e, t) {
        e.filter = Ht(e.filter, t);
      }
      function Tr(e, t, r) {
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
      function Un(e, t, r, o) {
        var s = e.replayFilter ? Ht(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var c = {}, f = function(p, m, g) {
            var _, h;
            s && !s(m, g, function(x) {
              return m.stop(x);
            }, function(x) {
              return m.fail(x);
            }) || ((h = "" + (_ = m.primaryKey)) == "[object ArrayBuffer]" && (h = "" + new Uint8Array(_)), G(c, h) || (c[h] = !0, t(p, m, g)));
          };
          return Promise.all([e.or._iterate(f, r), Ei(_i(e, o, r), e.algorithm, f, !e.keysOnly && e.valueMapper)]);
        }
        return Ei(_i(e, o, r), Ht(e.algorithm, s), t, !e.keysOnly && e.valueMapper);
      }
      function Ei(e, t, r, o) {
        var s = Pe(o ? function(c, f, p) {
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
      var vn = (Si.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var r = t.add;
          if (C(r)) return l(l([], C(e) ? e : [], !0), r).sort();
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
          if (C(o)) return C(e) ? e.filter(function(s) {
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
      var Wo = (we.prototype._read = function(e, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, Me.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, we.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, Me.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, we.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Ht(t.algorithm, e);
      }, we.prototype._iterate = function(e, t) {
        return Un(this._ctx, e, t, this._ctx.table.core);
      }, we.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && D(r, e), t._ctx = r, t;
      }, we.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, we.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(r) {
          return Un(t, e, r, t.table.core);
        });
      }, we.prototype.count = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx, s = o.table.core;
          if (cn(o, !0)) return s.count({ trans: r, query: { index: $n(o, s.schema), range: o.range } }).then(function(f) {
            return Math.min(f, o.limit);
          });
          var c = 0;
          return Un(o, function() {
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
          return Un(o, function(p) {
            return f.push(p);
          }, r, o.table.core).then(function() {
            return f;
          });
        }, e);
      }, we.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, cn(t) ? Tr(t, function() {
          var r = e;
          return function(o, s) {
            return r === 0 || (r === 1 ? --r : s(function() {
              o.advance(r), r = 0;
            }), !1);
          };
        }) : Tr(t, function() {
          var r = e;
          return function() {
            return --r < 0;
          };
        })), this;
      }, we.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Tr(this._ctx, function() {
          var t = e;
          return function(r, o, s) {
            return --t <= 0 && o(s), 0 <= t;
          };
        }, !0), this;
      }, we.prototype.until = function(e, t) {
        return Cr(this._ctx, function(r, o, s) {
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
        return Cr(this._ctx, function(r) {
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
        return Cr(this._ctx, function(s) {
          var o = s.primaryKey.toString(), s = G(t, o);
          return t[o] = !0, !s;
        }), this;
      }, we.prototype.modify = function(e) {
        var t = this, r = this._ctx;
        return this._write(function(o) {
          var s, c, f;
          f = typeof e == "function" ? e : (s = v(e), c = s.length, function(T) {
            for (var P = !1, N = 0; N < c; ++N) {
              var R = s[N], q = e[R], Y = ie(T, R);
              q instanceof vn ? (oe(T, R, q.execute(Y)), P = !0) : Y !== q && (oe(T, R, q), P = !0);
            }
            return P;
          });
          var p = r.table.core, h = p.schema.primaryKey, m = h.outbound, g = h.extractKey, _ = 200, h = t.db._options.modifyChunkSize;
          h && (_ = typeof h == "object" ? h[p.name] || h["*"] || 200 : h);
          function x(T, R) {
            var N = R.failures, R = R.numFailures;
            b += T - R;
            for (var q = 0, Y = v(N); q < Y.length; q++) {
              var V = Y[q];
              y.push(N[V]);
            }
          }
          var y = [], b = 0, S = [], E = e === xi;
          return t.clone().primaryKeys().then(function(T) {
            function P(R) {
              var q = Math.min(_, T.length - R), Y = T.slice(R, R + q);
              return (E ? Promise.resolve([]) : p.getMany({ trans: o, keys: Y, cache: "immutable" })).then(function(V) {
                var H = [], z = [], X = m ? [] : null, ee = E ? Y : [];
                if (!E) for (var fe = 0; fe < q; ++fe) {
                  var ge = V[fe], le = { value: Ge(ge), primKey: T[R + fe] };
                  f.call(le, le.value, le) !== !1 && (le.value == null ? ee.push(T[R + fe]) : m || ve(g(ge), g(le.value)) === 0 ? (z.push(le.value), m && X.push(T[R + fe])) : (ee.push(T[R + fe]), H.push(le.value)));
                }
                return Promise.resolve(0 < H.length && p.mutate({ trans: o, type: "add", values: H }).then(function(Re) {
                  for (var ue in Re.failures) ee.splice(parseInt(ue), 1);
                  x(H.length, Re);
                })).then(function() {
                  return (0 < z.length || N && typeof e == "object") && p.mutate({ trans: o, type: "put", keys: X, values: z, criteria: N, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < R }).then(function(Re) {
                    return x(z.length, Re);
                  });
                }).then(function() {
                  return (0 < ee.length || N && E) && p.mutate({ trans: o, type: "delete", keys: ee, criteria: N, isAdditionalChunk: 0 < R }).then(function(Re) {
                    return Ln(r.table, ee, Re);
                  }).then(function(Re) {
                    return x(ee.length, Re);
                  });
                }).then(function() {
                  return T.length > R + q && P(R + _);
                });
              });
            }
            var N = cn(r) && r.limit === 1 / 0 && (typeof e != "function" || E) && { index: r.index, range: r.range };
            return P(0).then(function() {
              if (0 < y.length) throw new It("Error modifying one or more objects", y, b, S);
              return T.length;
            });
          });
        });
      }, we.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !cn(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(xi) : this._write(function(r) {
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
      var xi = function(e, t) {
        return t.value = null;
      };
      function Yo(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function Qo(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function st(e, t, r) {
        return e = e instanceof Ti ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function ln(e) {
        return new e.Collection(e, function() {
          return Ci("");
        }).limit(0);
      }
      function Vn(e, t, r, o) {
        var s, c, f, p, m, g, _, h = r.length;
        if (!r.every(function(b) {
          return typeof b == "string";
        })) return st(e, mi);
        function x(b) {
          s = b === "next" ? function(E) {
            return E.toUpperCase();
          } : function(E) {
            return E.toLowerCase();
          }, c = b === "next" ? function(E) {
            return E.toLowerCase();
          } : function(E) {
            return E.toUpperCase();
          }, f = b === "next" ? Yo : Qo;
          var S = r.map(function(E) {
            return { lower: c(E), upper: s(E) };
          }).sort(function(E, T) {
            return f(E.lower, T.lower);
          });
          p = S.map(function(E) {
            return E.upper;
          }), m = S.map(function(E) {
            return E.lower;
          }), _ = (g = b) === "next" ? "" : o;
        }
        x("next"), e = new e.Collection(e, function() {
          return Rt(p[0], m[h - 1] + o);
        }), e._ondirectionchange = function(b) {
          x(b);
        };
        var y = 0;
        return e._addAlgorithm(function(b, S, E) {
          var T = b.key;
          if (typeof T != "string") return !1;
          var P = c(T);
          if (t(P, m, y)) return !0;
          for (var N = null, R = y; R < h; ++R) {
            var q = function(Y, V, H, z, X, ee) {
              for (var fe = Math.min(Y.length, z.length), ge = -1, le = 0; le < fe; ++le) {
                var Re = V[le];
                if (Re !== z[le]) return X(Y[le], H[le]) < 0 ? Y.substr(0, le) + H[le] + H.substr(le + 1) : X(Y[le], z[le]) < 0 ? Y.substr(0, le) + z[le] + H.substr(le + 1) : 0 <= ge ? Y.substr(0, ge) + V[ge] + H.substr(ge + 1) : null;
                X(Y[le], Re) < 0 && (ge = le);
              }
              return fe < z.length && ee === "next" ? Y + H.substr(Y.length) : fe < Y.length && ee === "prev" ? Y.substr(0, H.length) : ge < 0 ? null : Y.substr(0, ge) + z[ge] + H.substr(ge + 1);
            }(T, P, p[R], m[R], f, g);
            q === null && N === null ? y = R + 1 : (N === null || 0 < f(N, q)) && (N = q);
          }
          return S(N !== null ? function() {
            b.continue(N + _);
          } : E), !1;
        }), e;
      }
      function Rt(e, t, r, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: o };
      }
      function Ci(e) {
        return { type: 1, lower: e, upper: e };
      }
      var Ti = (Object.defineProperty(Ue.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Ue.prototype.between = function(e, t, r, o) {
        r = r !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || o) && (!r || !o) ? ln(this) : new this.Collection(this, function() {
            return Rt(e, t, !r, !o);
          });
        } catch {
          return st(this, St);
        }
      }, Ue.prototype.equals = function(e) {
        return e == null ? st(this, St) : new this.Collection(this, function() {
          return Ci(e);
        });
      }, Ue.prototype.above = function(e) {
        return e == null ? st(this, St) : new this.Collection(this, function() {
          return Rt(e, void 0, !0);
        });
      }, Ue.prototype.aboveOrEqual = function(e) {
        return e == null ? st(this, St) : new this.Collection(this, function() {
          return Rt(e, void 0, !1);
        });
      }, Ue.prototype.below = function(e) {
        return e == null ? st(this, St) : new this.Collection(this, function() {
          return Rt(void 0, e, !1, !0);
        });
      }, Ue.prototype.belowOrEqual = function(e) {
        return e == null ? st(this, St) : new this.Collection(this, function() {
          return Rt(void 0, e);
        });
      }, Ue.prototype.startsWith = function(e) {
        return typeof e != "string" ? st(this, mi) : this.between(e, e + Gt, !0, !0);
      }, Ue.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Vn(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], Gt);
      }, Ue.prototype.equalsIgnoreCase = function(e) {
        return Vn(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, Ue.prototype.anyOfIgnoreCase = function() {
        var e = ze.apply(et, arguments);
        return e.length === 0 ? ln(this) : Vn(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, Ue.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = ze.apply(et, arguments);
        return e.length === 0 ? ln(this) : Vn(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, Gt);
      }, Ue.prototype.anyOf = function() {
        var e = this, t = ze.apply(et, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return st(this, St);
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
      }, Ue.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Ue.prototype.noneOf = function() {
        var e = ze.apply(et, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return st(this, St);
        }
        var t = e.reduce(function(r, o) {
          return r ? r.concat([[r[r.length - 1][1], o]]) : [[-1 / 0, o]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, Ue.prototype.inAnyRange = function(T, t) {
        var r = this, o = this._cmp, s = this._ascending, c = this._descending, f = this._min, p = this._max;
        if (T.length === 0) return ln(this);
        if (!T.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && s(P[0], P[1]) <= 0;
        })) return st(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", j.InvalidArgument);
        var m = !t || t.includeLowers !== !1, g = t && t.includeUppers === !0, _, h = s;
        function x(P, N) {
          return h(P[0], N[0]);
        }
        try {
          (_ = T.reduce(function(P, N) {
            for (var R = 0, q = P.length; R < q; ++R) {
              var Y = P[R];
              if (o(N[0], Y[1]) < 0 && 0 < o(N[1], Y[0])) {
                Y[0] = f(Y[0], N[0]), Y[1] = p(Y[1], N[1]);
                break;
              }
            }
            return R === q && P.push(N), P;
          }, [])).sort(x);
        } catch {
          return st(this, St);
        }
        var y = 0, b = g ? function(P) {
          return 0 < s(P, _[y][1]);
        } : function(P) {
          return 0 <= s(P, _[y][1]);
        }, S = m ? function(P) {
          return 0 < c(P, _[y][0]);
        } : function(P) {
          return 0 <= c(P, _[y][0]);
        }, E = b, T = new this.Collection(this, function() {
          return Rt(_[0][0], _[_.length - 1][1], !m, !g);
        });
        return T._ondirectionchange = function(P) {
          h = P === "next" ? (E = b, s) : (E = S, c), _.sort(x);
        }, T._addAlgorithm(function(P, N, R) {
          for (var q, Y = P.key; E(Y); ) if (++y === _.length) return N(R), !1;
          return !b(q = Y) && !S(q) || (r._cmp(Y, _[y][1]) === 0 || r._cmp(Y, _[y][0]) === 0 || N(function() {
            h === s ? P.continue(_[y][0]) : P.continue(_[y][1]);
          }), !1);
        }), T;
      }, Ue.prototype.startsWithAnyOf = function() {
        var e = ze.apply(et, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? ln(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + Gt];
        })) : st(this, "startsWithAnyOf() only works with strings");
      }, Ue);
      function Ue() {
      }
      function yt(e) {
        return Pe(function(t) {
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
            Vt(e[1], e[0]);
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
        return pe(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Pe(function(s) {
          gn(s), t._reject(e.error);
        }), e.onabort = Pe(function(s) {
          gn(s), t.active && t._reject(new j.Abort(e.error)), t.active = !1, t.on("abort").fire(s);
        }), e.oncomplete = Pe(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && kt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, vt.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Me(new j.ReadOnly("Transaction is readonly"));
        if (!this.active) return Me(new j.TransactionInactive());
        if (this._locked()) return new J(function(c, f) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, r).then(c, f);
          }, ne]);
        });
        if (r) return Pt(function() {
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
            return r._waitingQueue.push(Pe(c.bind(null, p)));
          }, function(p) {
            return r._waitingQueue.push(Pe(f.bind(null, p)));
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
      function Or(e, t, r, o, s, c, f, p) {
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
      function Pr(e) {
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
      function Oi(e) {
        return [].slice.call(e);
      }
      var zo = 0;
      function _n(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Jo(e, t, m) {
        function o(E) {
          if (E.type === 3) return null;
          if (E.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var y = E.lower, b = E.upper, S = E.lowerOpen, E = E.upperOpen;
          return y === void 0 ? b === void 0 ? null : t.upperBound(b, !!E) : b === void 0 ? t.lowerBound(y, !!S) : t.bound(y, b, !!S, !!E);
        }
        function s(x) {
          var y, b = x.name;
          return { name: b, schema: x, mutate: function(S) {
            var E = S.trans, T = S.type, P = S.keys, N = S.values, R = S.range;
            return new Promise(function(q, Y) {
              q = Pe(q);
              var V = E.objectStore(b), H = V.keyPath == null, z = T === "put" || T === "add";
              if (!z && T !== "delete" && T !== "deleteRange") throw new Error("Invalid operation type: " + T);
              var X, ee = (P || N || { length: 1 }).length;
              if (P && N && P.length !== N.length) throw new Error("Given keys array must have same length as given values array.");
              if (ee === 0) return q({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function fe(Ze) {
                ++Re, gn(Ze);
              }
              var ge = [], le = [], Re = 0;
              if (T === "deleteRange") {
                if (R.type === 4) return q({ numFailures: Re, failures: le, results: [], lastResult: void 0 });
                R.type === 3 ? ge.push(X = V.clear()) : ge.push(X = V.delete(o(R)));
              } else {
                var H = z ? H ? [N, P] : [N, null] : [P, null], ue = H[0], We = H[1];
                if (z) for (var Ye = 0; Ye < ee; ++Ye) ge.push(X = We && We[Ye] !== void 0 ? V[T](ue[Ye], We[Ye]) : V[T](ue[Ye])), X.onerror = fe;
                else for (Ye = 0; Ye < ee; ++Ye) ge.push(X = V[T](ue[Ye])), X.onerror = fe;
              }
              function nr(Ze) {
                Ze = Ze.target.result, ge.forEach(function(Qt, Yr) {
                  return Qt.error != null && (le[Yr] = Qt.error);
                }), q({ numFailures: Re, failures: le, results: T === "delete" ? P : ge.map(function(Qt) {
                  return Qt.result;
                }), lastResult: Ze });
              }
              X.onerror = function(Ze) {
                fe(Ze), nr(Ze);
              }, X.onsuccess = nr;
            });
          }, getMany: function(S) {
            var E = S.trans, T = S.keys;
            return new Promise(function(P, N) {
              P = Pe(P);
              for (var R, q = E.objectStore(b), Y = T.length, V = new Array(Y), H = 0, z = 0, X = function(ge) {
                ge = ge.target, V[ge._pos] = ge.result, ++z === H && P(V);
              }, ee = yt(N), fe = 0; fe < Y; ++fe) T[fe] != null && ((R = q.get(T[fe]))._pos = fe, R.onsuccess = X, R.onerror = ee, ++H);
              H === 0 && P(V);
            });
          }, get: function(S) {
            var E = S.trans, T = S.key;
            return new Promise(function(P, N) {
              P = Pe(P);
              var R = E.objectStore(b).get(T);
              R.onsuccess = function(q) {
                return P(q.target.result);
              }, R.onerror = yt(N);
            });
          }, query: (y = g, function(S) {
            return new Promise(function(E, T) {
              E = Pe(E);
              var P, N, R, H = S.trans, q = S.values, Y = S.limit, X = S.query, V = Y === 1 / 0 ? void 0 : Y, z = X.index, X = X.range, H = H.objectStore(b), z = z.isPrimaryKey ? H : H.index(z.name), X = o(X);
              if (Y === 0) return E({ result: [] });
              y ? ((V = q ? z.getAll(X, V) : z.getAllKeys(X, V)).onsuccess = function(ee) {
                return E({ result: ee.target.result });
              }, V.onerror = yt(T)) : (P = 0, N = !q && "openKeyCursor" in z ? z.openKeyCursor(X) : z.openCursor(X), R = [], N.onsuccess = function(ee) {
                var fe = N.result;
                return fe ? (R.push(q ? fe.value : fe.primaryKey), ++P === Y ? E({ result: R }) : void fe.continue()) : E({ result: R });
              }, N.onerror = yt(T));
            });
          }), openCursor: function(S) {
            var E = S.trans, T = S.values, P = S.query, N = S.reverse, R = S.unique;
            return new Promise(function(q, Y) {
              q = Pe(q);
              var z = P.index, V = P.range, H = E.objectStore(b), H = z.isPrimaryKey ? H : H.index(z.name), z = N ? R ? "prevunique" : "prev" : R ? "nextunique" : "next", X = !T && "openKeyCursor" in H ? H.openKeyCursor(o(V), z) : H.openCursor(o(V), z);
              X.onerror = yt(Y), X.onsuccess = Pe(function(ee) {
                var fe, ge, le, Re, ue = X.result;
                ue ? (ue.___id = ++zo, ue.done = !1, fe = ue.continue.bind(ue), ge = (ge = ue.continuePrimaryKey) && ge.bind(ue), le = ue.advance.bind(ue), Re = function() {
                  throw new Error("Cursor not stopped");
                }, ue.trans = E, ue.stop = ue.continue = ue.continuePrimaryKey = ue.advance = function() {
                  throw new Error("Cursor not started");
                }, ue.fail = Pe(Y), ue.next = function() {
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
                    Ze = Pe(Ze), X.onerror = yt(Qt), ue.fail = Qt, ue.stop = function(Yr) {
                      ue.stop = ue.continue = ue.continuePrimaryKey = ue.advance = Re, Ze(Yr);
                    };
                  });
                  return X.onsuccess = Pe(function(Ze) {
                    X.onsuccess = Ye, Ye();
                  }), ue.continue = fe, ue.continuePrimaryKey = ge, ue.advance = le, Ye(), nr;
                }, q(ue)) : q(null);
              }, Y);
            });
          }, count: function(S) {
            var E = S.query, T = S.trans, P = E.index, N = E.range;
            return new Promise(function(R, q) {
              var Y = T.objectStore(b), V = P.isPrimaryKey ? Y : Y.index(P.name), Y = o(N), V = Y ? V.count(Y) : V.count();
              V.onsuccess = Pe(function(H) {
                return R(H.target.result);
              }), V.onerror = yt(q);
            });
          } };
        }
        var c, f, p, _ = (f = m, p = Oi((c = e).objectStoreNames), { schema: { name: c.name, tables: p.map(function(x) {
          return f.objectStore(x);
        }).map(function(x) {
          var y = x.keyPath, E = x.autoIncrement, b = C(y), S = {}, E = { name: x.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: y == null, compound: b, keyPath: y, autoIncrement: E, unique: !0, extractKey: Pr(y) }, indexes: Oi(x.indexNames).map(function(T) {
            return x.index(T);
          }).map(function(R) {
            var P = R.name, N = R.unique, q = R.multiEntry, R = R.keyPath, q = { name: P, compound: C(R), keyPath: R, unique: N, multiEntry: q, extractKey: Pr(R) };
            return S[_n(R)] = q;
          }), getIndexByKeyPath: function(T) {
            return S[_n(T)];
          } };
          return S[":id"] = E.primaryKey, y != null && (S[_n(y)] = E.primaryKey), E;
        }) }, hasGetAll: 0 < p.length && "getAll" in f.objectStore(p[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), m = _.schema, g = _.hasGetAll, _ = m.tables.map(s), h = {};
        return _.forEach(function(x) {
          return h[x.name] = x;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(x) {
          if (!h[x]) throw new Error("Table '".concat(x, "' not found"));
          return h[x];
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
              return Te(g, _) || (g = W(g)) && m(g, _);
            }(f, s);
            (!p || "value" in p && p.value === void 0) && (f === e.Transaction.prototype || f instanceof e.Transaction ? he(f, s, { get: function() {
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
        r.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = Ir("$meta", Pi("")[0], []), e._storeNames.push("$meta"));
        var c = e._createTransaction("readwrite", e._storeNames, s);
        c.create(r), c._completion.catch(o);
        var f = c._reject.bind(c), p = ne.transless || ne;
        Pt(function() {
          return ne.trans = c, ne.transless = p, t !== 0 ? (Gn(e, r), g = t, ((m = c).storeNames.includes("$meta") ? m.table("$meta").get("version").then(function(_) {
            return _ ?? g;
          }) : J.resolve(g)).then(function(_) {
            return x = _, y = c, b = r, S = [], _ = (h = e)._versions, E = h._dbSchema = Yn(0, h.idbdb, b), (_ = _.filter(function(T) {
              return T._cfg.version >= x;
            })).length !== 0 ? (_.forEach(function(T) {
              S.push(function() {
                var P = E, N = T._cfg.dbschema;
                Qn(h, P, b), Qn(h, N, b), E = h._dbSchema = N;
                var R = Nr(P, N);
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
                var q = T._cfg.contentUpgrade;
                if (q && T._cfg.version > x) {
                  Gn(h, b), y._memoizedTables = {};
                  var Y = xe(N);
                  R.del.forEach(function(z) {
                    Y[z] = P[z];
                  }), Dr(h, [h.Transaction.prototype]), Hn(h, [h.Transaction.prototype], v(Y), Y), y.schema = Y;
                  var V, H = at(q);
                  return H && an(), R = J.follow(function() {
                    var z;
                    (V = q(y)) && H && (z = Dt.bind(null, null), V.then(z, z));
                  }), V && typeof V.then == "function" ? J.resolve(V) : R.then(function() {
                    return V;
                  });
                }
              }), S.push(function(P) {
                var N, R, q = T._cfg.dbschema;
                N = q, R = P, [].slice.call(R.db.objectStoreNames).forEach(function(Y) {
                  return N[Y] == null && R.db.deleteObjectStore(Y);
                }), Dr(h, [h.Transaction.prototype]), Hn(h, [h.Transaction.prototype], h._storeNames, h._dbSchema), y.schema = h._dbSchema;
              }), S.push(function(P) {
                h.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(h.idbdb.version / 10) === T._cfg.version ? (h.idbdb.deleteObjectStore("$meta"), delete h._dbSchema.$meta, h._storeNames = h._storeNames.filter(function(N) {
                  return N !== "$meta";
                })) : P.objectStore("$meta").put(T._cfg.version, "version"));
              });
            }), function T() {
              return S.length ? J.resolve(S.shift()(y.idbtrans)).then(T) : J.resolve();
            }().then(function() {
              Ii(E, b);
            })) : J.resolve();
            var h, x, y, b, S, E;
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
          for (var c = r.objectStore(s), f = Or(Ai(g = c.keyPath), g || "", !0, !1, !!c.autoIncrement, g && typeof g != "string", !0), p = [], m = 0; m < c.indexNames.length; ++m) {
            var _ = c.index(c.indexNames[m]), g = _.keyPath, _ = Or(_.name, g, !!_.unique, !!_.multiEntry, !1, g && typeof g != "string", !1);
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
      function Pi(e) {
        return e.split(",").map(function(t, r) {
          var c = t.split(":"), o = (s = c[1]) === null || s === void 0 ? void 0 : s.trim(), s = (t = c[0].trim()).replace(/([&*]|\+\+)/g, ""), c = /^\[/.test(s) ? s.match(/^\[(.*)\]$/)[1].split("+") : s;
          return Or(s, c || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), C(c), r === 0, o);
        });
      }
      var rs = (fn.prototype._createTableSchema = Ir, fn.prototype._parseIndexSyntax = Pi, fn.prototype._parseStoresSpec = function(e, t) {
        var r = this;
        v(e).forEach(function(o) {
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
        return r || (r = e._dbNamesDB = new xt(Bn, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function jr(e) {
        return e && typeof e.databases == "function";
      }
      function Mr(e) {
        return Pt(function() {
          return ne.letThrough = !0, e();
        });
      }
      function Fr(e) {
        return !("from" in e);
      }
      var He = function(e, t) {
        if (!this) {
          var r = new He();
          return e && "d" in e && D(r, e), r;
        }
        D(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function En(e, t, r) {
        var o = ve(t, r);
        if (!isNaN(o)) {
          if (0 < o) throw RangeError();
          if (Fr(e)) return D(e, { from: t, to: r, d: 1 });
          var s = e.l, o = e.r;
          if (ve(r, e.from) < 0) return s ? En(s, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, Ni(e);
          if (0 < ve(t, e.to)) return o ? En(o, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, Ni(e);
          ve(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < ve(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, s && !e.l && Sn(e, s), o && r && Sn(e, o);
        }
      }
      function Sn(e, t) {
        Fr(t) || function r(o, m) {
          var c = m.from, f = m.to, p = m.l, m = m.r;
          En(o, c, f), p && r(o, p), m && r(o, m);
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
        var t = Fr(e) ? null : { s: 0, n: e };
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
          e[r] ? Sn(e[r], t[r]) : e[r] = function o(s) {
            var c, f, p = {};
            for (c in s) G(s, c) && (f = s[c], p[c] = !f || typeof f != "object" || rt.has(f.constructor) ? f : o(f));
            return p;
          }(t[r]);
        }), e;
      }
      function Kr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && Di(t[r], e[r]);
        });
      }
      re(He.prototype, ((dt = { add: function(e) {
        return Sn(this, e), this;
      }, addKey: function(e) {
        return En(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(r) {
          return En(t, r, r);
        }), this;
      }, hasKey: function(e) {
        var t = Xn(this).next(e).value;
        return t && ve(t.from, e) <= 0 && 0 <= ve(t.to, e);
      } })[Ve] = function() {
        return Xn(this);
      }, dt));
      var Wt = {}, Br = {}, qr = !1;
      function Jn(e) {
        zn(Br, e), qr || (qr = !0, setTimeout(function() {
          qr = !1, Lr(Br, !(Br = {}));
        }, 0));
      }
      function Lr(e, t) {
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
            var x = h[_];
            Kr(t, x.obsSet) ? x.subscribers.forEach(function(E) {
              return r.add(E);
            }) : o && g.push(x);
          }
          o && s.push([m, g]);
        }
        if (o) for (var y = 0, b = s; y < b.length; y++) {
          var S = b[y], m = S[0], g = S[1];
          e.queries.query[m] = g;
        }
      }
      function is(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? Me(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, s = Math.round(10 * e.verno), c = !1;
        function f() {
          if (t.openCanceller !== o) throw new j.DatabaseClosed("db.open() was cancelled");
        }
        function p() {
          return new J(function(x, y) {
            if (f(), !r) throw new j.MissingAPI();
            var b = e.name, S = t.autoSchema || !s ? r.open(b) : r.open(b, s);
            if (!S) throw new j.MissingAPI();
            S.onerror = yt(y), S.onblocked = Pe(e._fireOnBlocked), S.onupgradeneeded = Pe(function(E) {
              var T;
              _ = S.transaction, t.autoSchema && !e._options.allowEmptyDB ? (S.onerror = gn, _.abort(), S.result.close(), (T = r.deleteDatabase(b)).onsuccess = T.onerror = Pe(function() {
                y(new j.NoSuchDatabase("Database ".concat(b, " doesnt exist")));
              })) : (_.onerror = yt(y), E = E.oldVersion > Math.pow(2, 62) ? 0 : E.oldVersion, h = E < 1, e.idbdb = S.result, c && ns(e, _), ts(e, E / 10, _, y));
            }, y), S.onsuccess = Pe(function() {
              _ = null;
              var E, T, P, N, R, q = e.idbdb = S.result, Y = ye(q.objectStoreNames);
              if (0 < Y.length) try {
                var V = q.transaction((N = Y).length === 1 ? N[0] : N, "readonly");
                if (t.autoSchema) T = q, P = V, (E = e).verno = T.version / 10, P = E._dbSchema = Yn(0, T, P), E._storeNames = ye(T.objectStoreNames, 0), Hn(E, [E._allTables], v(P), P);
                else if (Qn(e, e._dbSchema, V), ((R = Nr(Yn(0, (R = e).idbdb, V), R._dbSchema)).add.length || R.change.some(function(H) {
                  return H.add.length || H.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), q.close(), s = q.version + 1, c = !0, x(p());
                Gn(e, V);
              } catch {
              }
              un.push(e), q.onversionchange = Pe(function(H) {
                t.vcFired = !0, e.on("versionchange").fire(H);
              }), q.onclose = Pe(function(H) {
                e.on("close").fire(H);
              }), h && (R = e._deps, V = b, q = R.indexedDB, R = R.IDBKeyRange, jr(q) || V === Bn || kr(q, R).put({ name: V }).catch(A)), x();
            }, y);
          }).catch(function(x) {
            switch (x?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), p();
                break;
              case "VersionError":
                if (0 < s) return s = 0, p();
            }
            return J.reject(x);
          });
        }
        var m, g = t.dbReadyResolve, _ = null, h = !1;
        return J.race([o, (typeof navigator > "u" ? J.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(x) {
          function y() {
            return indexedDB.databases().finally(x);
          }
          m = setInterval(y, 100), y();
        }).finally(function() {
          return clearInterval(m);
        }) : Promise.resolve()).then(p)]).then(function() {
          return f(), t.onReadyBeingFired = [], J.resolve(Mr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function x() {
            if (0 < t.onReadyBeingFired.length) {
              var y = t.onReadyBeingFired.reduce(te, A);
              return t.onReadyBeingFired = [], J.resolve(Mr(function() {
                return y(e.vip);
              })).then(x);
            }
          });
        }).finally(function() {
          t.openCanceller === o && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(x) {
          t.dbOpenError = x;
          try {
            _ && _.abort();
          } catch {
          }
          return o === t.openCanceller && e._close(), Me(x);
        }).finally(function() {
          t.openComplete = !0, g();
        }).then(function() {
          var x;
          return h && (x = {}, e.tables.forEach(function(y) {
            y.schema.indexes.forEach(function(b) {
              b.name && (x["idb://".concat(e.name, "/").concat(y.name, "/").concat(b.name)] = new He(-1 / 0, [[[]]]));
            }), x["idb://".concat(e.name, "/").concat(y.name, "/")] = x["idb://".concat(e.name, "/").concat(y.name, "/:dels")] = new He(-1 / 0, [[[]]]);
          }), kt(bn).fire(x), Lr(x, !0)), e;
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
            return p.done ? m : m && typeof m.then == "function" ? m.then(r, o) : C(m) ? Promise.all(m).then(r, o) : r(m);
          };
        }
        return s(t)();
      }
      function Zn(e, t, r) {
        for (var o = C(e) ? e.slice() : [e], s = 0; s < r; ++s) o.push(t);
        return o;
      }
      var os = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema, s = {}, c = [];
          function f(h, x, y) {
            var b = _n(h), S = s[b] = s[b] || [], E = h == null ? 0 : typeof h == "string" ? 1 : h.length, T = 0 < x, T = u(u({}, y), { name: T ? "".concat(b, "(virtual-from:").concat(y.name, ")") : y.name, lowLevelIndex: y, isVirtual: T, keyTail: x, keyLength: E, extractKey: Pr(h), unique: !T && y.unique });
            return S.push(T), T.isPrimaryKey || c.push(T), 1 < E && f(E === 2 ? h[0] : h.slice(0, E - 1), x + 1, y), S.sort(function(P, N) {
              return P.keyTail - N.keyTail;
            }), T;
          }
          t = f(o.primaryKey.keyPath, 0, o.primaryKey), s[":id"] = [t];
          for (var p = 0, m = o.indexes; p < m.length; p++) {
            var g = m[p];
            f(g.keyPath, 0, g);
          }
          function _(h) {
            var x, y = h.query.index;
            return y.isVirtual ? u(u({}, h), { query: { index: y.lowLevelIndex, range: (x = h.query.range, y = y.keyTail, { type: x.type === 1 ? 2 : x.type, lower: Zn(x.lower, x.lowerOpen ? e.MAX_KEY : e.MIN_KEY, y), lowerOpen: !0, upper: Zn(x.upper, x.upperOpen ? e.MIN_KEY : e.MAX_KEY, y), upperOpen: !0 }) } }) : h;
          }
          return u(u({}, r), { schema: u(u({}, o), { primaryKey: t, indexes: c, getIndexByKeyPath: function(h) {
            return (h = s[_n(h)]) && h[0];
          } }), count: function(h) {
            return r.count(_(h));
          }, query: function(h) {
            return r.query(_(h));
          }, openCursor: function(h) {
            var x = h.query.index, y = x.keyTail, b = x.isVirtual, S = x.keyLength;
            return b ? r.openCursor(_(h)).then(function(T) {
              return T && E(T);
            }) : r.openCursor(h);
            function E(T) {
              return Object.create(T, { continue: { value: function(P) {
                P != null ? T.continue(Zn(P, h.reverse ? e.MAX_KEY : e.MIN_KEY, y)) : h.unique ? T.continue(T.key.slice(0, S).concat(h.reverse ? e.MIN_KEY : e.MAX_KEY, y)) : T.continue();
              } }, continuePrimaryKey: { value: function(P, N) {
                T.continuePrimaryKey(Zn(P, e.MAX_KEY, y), N);
              } }, primaryKey: { get: function() {
                return T.primaryKey;
              } }, key: { get: function() {
                var P = T.key;
                return S === 1 ? P[0] : P.slice(0, S);
              } }, value: { get: function() {
                return T.value;
              } } });
            }
          } });
        } });
      } };
      function Ur(e, t, r, o) {
        return r = r || {}, o = o || "", v(e).forEach(function(s) {
          var c, f, p;
          G(t, s) ? (c = e[s], f = t[s], typeof c == "object" && typeof f == "object" && c && f ? (p = wt(c)) !== wt(f) ? r[o + s] = t[s] : p === "Object" ? Ur(c, f, r, o + s + ".") : c !== f && (r[o + s] = t[s]) : c !== f && (r[o + s] = t[s])) : r[o + s] = void 0;
        }), v(t).forEach(function(s) {
          G(e, s) || (r[o + s] = t[s]);
        }), r;
      }
      function Vr(e, t) {
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
                  return function h(x, y, b) {
                    return r.query({ trans: x, values: !1, query: { index: o, range: y }, limit: b }).then(function(S) {
                      var E = S.result;
                      return _({ type: "delete", keys: E, trans: x }).then(function(T) {
                        return 0 < T.numFailures ? Promise.reject(T.failures[0]) : E.length < b ? { failures: [], numFailures: 0, lastResult: void 0 } : h(x, u(u({}, y), { lower: E[E.length - 1], lowerOpen: !0 }), b);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return r.mutate(s);
            function _(h) {
              var x, y, b, S = ne.trans, E = h.keys || Vr(o, h);
              if (!E) throw new Error("Keys missing");
              return (h = h.type === "add" || h.type === "put" ? u(u({}, h), { keys: E }) : u({}, h)).type !== "delete" && (h.values = l([], h.values)), h.keys && (h.keys = l([], h.keys)), x = r, b = E, ((y = h).type === "add" ? Promise.resolve([]) : x.getMany({ trans: y.trans, keys: b, cache: "immutable" })).then(function(T) {
                var P = E.map(function(N, R) {
                  var q, Y, V, H = T[R], z = { onerror: null, onsuccess: null };
                  return h.type === "delete" ? p.fire.call(z, N, H, S) : h.type === "add" || H === void 0 ? (q = m.fire.call(z, N, h.values[R], S), N == null && q != null && (h.keys[R] = N = q, o.outbound || oe(h.values[R], o.keyPath, N))) : (q = Ur(H, h.values[R]), (Y = g.fire.call(z, q, N, H, S)) && (V = h.values[R], Object.keys(Y).forEach(function(X) {
                    G(V, X) ? V[X] = Y[X] : oe(V, X, Y[X]);
                  }))), z;
                });
                return r.mutate(h).then(function(N) {
                  for (var R = N.failures, q = N.results, Y = N.numFailures, N = N.lastResult, V = 0; V < E.length; ++V) {
                    var H = (q || E)[V], z = P[V];
                    H == null ? z.onerror && z.onerror(R[V]) : z.onsuccess && z.onsuccess(h.type === "put" && T[V] ? h.values[V] : H);
                  }
                  return { failures: R, results: q, numFailures: Y, lastResult: N };
                }).catch(function(N) {
                  return P.forEach(function(R) {
                    return R.onerror && R.onerror(N);
                  }), Promise.reject(N);
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
      function Mi(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Fi(e, t) {
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
          var s = e.table(o), c = s.schema, f = c.primaryKey, h = c.indexes, p = f.extractKey, m = f.outbound, g = f.autoIncrement && h.filter(function(y) {
            return y.compound && y.keyPath.includes(f.keyPath);
          }), _ = u(u({}, s), { mutate: function(y) {
            function b(X) {
              return X = "idb://".concat(t, "/").concat(o, "/").concat(X), N[X] || (N[X] = new He());
            }
            var S, E, T, P = y.trans, N = y.mutatedParts || (y.mutatedParts = {}), R = b(""), q = b(":dels"), Y = y.type, z = y.type === "deleteRange" ? [y.range] : y.type === "delete" ? [y.keys] : y.values.length < 50 ? [Vr(f, y).filter(function(X) {
              return X;
            }), y.values] : [], V = z[0], H = z[1], z = y.trans._cache;
            return C(V) ? (R.addKeys(V), (z = Y === "delete" || V.length === H.length ? ji(V, z) : null) || q.addKeys(V), (z || H) && (S = b, E = z, T = H, c.indexes.forEach(function(X) {
              var ee = S(X.name || "");
              function fe(le) {
                return le != null ? X.extractKey(le) : null;
              }
              function ge(le) {
                return X.multiEntry && C(le) ? le.forEach(function(Re) {
                  return ee.addKey(Re);
                }) : ee.addKey(le);
              }
              (E || T).forEach(function(le, We) {
                var ue = E && fe(E[We]), We = T && fe(T[We]);
                ve(ue, We) !== 0 && (ue != null && ge(ue), We != null && ge(We));
              });
            }))) : V ? (H = { from: (H = V.lower) !== null && H !== void 0 ? H : e.MIN_KEY, to: (H = V.upper) !== null && H !== void 0 ? H : e.MAX_KEY }, q.add(H), R.add(H)) : (R.add(r), q.add(r), c.indexes.forEach(function(X) {
              return b(X.name).add(r);
            })), s.mutate(y).then(function(X) {
              return !V || y.type !== "add" && y.type !== "put" || (R.addKeys(X.results), g && g.forEach(function(ee) {
                for (var fe = y.values.map(function(ue) {
                  return ee.extractKey(ue);
                }), ge = ee.keyPath.findIndex(function(ue) {
                  return ue === f.keyPath;
                }), le = 0, Re = X.results.length; le < Re; ++le) fe[le][ge] = X.results[le];
                b(ee.name).addKeys(fe);
              })), P.mutatedParts = zn(P.mutatedParts || {}, N), X;
            });
          } }), h = function(b) {
            var S = b.query, b = S.index, S = S.range;
            return [b, new He((b = S.lower) !== null && b !== void 0 ? b : e.MIN_KEY, (S = S.upper) !== null && S !== void 0 ? S : e.MAX_KEY)];
          }, x = { get: function(y) {
            return [f, new He(y.key)];
          }, getMany: function(y) {
            return [f, new He().addKeys(y.keys)];
          }, count: h, query: h, openCursor: h };
          return v(x).forEach(function(y) {
            _[y] = function(b) {
              var S = ne.subscr, E = !!S, T = Mi(ne, s) && Fi(y, b) ? b.obsSet = {} : S;
              if (E) {
                var P = function(H) {
                  return H = "idb://".concat(t, "/").concat(o, "/").concat(H), T[H] || (T[H] = new He());
                }, N = P(""), R = P(":dels"), S = x[y](b), E = S[0], S = S[1];
                if ((y === "query" && E.isPrimaryKey && !b.values ? R : P(E.name || "")).add(S), !E.isPrimaryKey) {
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
      function Ki(e, t, r) {
        if (r.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var o = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return r.numFailures === o ? null : (t = u({}, t), C(t.keys) && (t.keys = t.keys.filter(function(s, c) {
          return !(c in r.failures);
        })), "values" in t && C(t.values) && (t.values = t.values.filter(function(s, c) {
          return !(c in r.failures);
        })), t);
      }
      function Gr(e, t) {
        return r = e, ((o = t).lower === void 0 || (o.lowerOpen ? 0 < ve(r, o.lower) : 0 <= ve(r, o.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? ve(e, t.upper) < 0 : ve(e, t.upper) <= 0));
        var r, o;
      }
      function Bi(e, t, x, o, s, c) {
        if (!x || x.length === 0) return e;
        var f = t.query.index, p = f.multiEntry, m = t.query.range, g = o.schema.primaryKey.extractKey, _ = f.extractKey, h = (f.lowLevelIndex || f).extractKey, x = x.reduce(function(y, b) {
          var S = y, E = [];
          if (b.type === "add" || b.type === "put") for (var T = new He(), P = b.values.length - 1; 0 <= P; --P) {
            var N, R = b.values[P], q = g(R);
            T.hasKey(q) || (N = _(R), (p && C(N) ? N.some(function(X) {
              return Gr(X, m);
            }) : Gr(N, m)) && (T.addKey(q), E.push(R)));
          }
          switch (b.type) {
            case "add":
              var Y = new He().addKeys(t.values ? y.map(function(ee) {
                return g(ee);
              }) : y), S = y.concat(t.values ? E.filter(function(ee) {
                return ee = g(ee), !Y.hasKey(ee) && (Y.addKey(ee), !0);
              }) : E.map(function(ee) {
                return g(ee);
              }).filter(function(ee) {
                return !Y.hasKey(ee) && (Y.addKey(ee), !0);
              }));
              break;
            case "put":
              var V = new He().addKeys(b.values.map(function(ee) {
                return g(ee);
              }));
              S = y.filter(function(ee) {
                return !V.hasKey(t.values ? g(ee) : ee);
              }).concat(t.values ? E : E.map(function(ee) {
                return g(ee);
              }));
              break;
            case "delete":
              var H = new He().addKeys(b.keys);
              S = y.filter(function(ee) {
                return !H.hasKey(t.values ? g(ee) : ee);
              });
              break;
            case "deleteRange":
              var z = b.range;
              S = y.filter(function(ee) {
                return !Gr(g(ee), z);
              });
          }
          return S;
        }, e);
        return x === e ? e : (x.sort(function(y, b) {
          return ve(h(y), h(b)) || ve(g(y), g(b));
        }), t.limit && t.limit < 1 / 0 && (x.length > t.limit ? x.length = t.limit : e.length === t.limit && x.length < t.limit && (s.dirty = !0)), c ? Object.freeze(x) : x);
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
            s.subscribers.size === 0 && Oe(c, s);
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
                  var x = h[_], y = Wt["idb://".concat(t, "/").concat(x)];
                  if (y) {
                    var b = e.table(x), S = y.optimisticOps.filter(function(ee) {
                      return ee.trans === p;
                    });
                    if (p._explicit && m && p.mutatedParts) for (var E = 0, T = Object.values(y.queries.query); E < T.length; E++) for (var P = 0, N = (Y = T[E]).slice(); P < N.length; P++) Kr((V = N[P]).obsSet, p.mutatedParts) && (Oe(Y, V), V.subscribers.forEach(function(ee) {
                      return g.add(ee);
                    }));
                    else if (0 < S.length) {
                      y.optimisticOps = y.optimisticOps.filter(function(ee) {
                        return ee.trans !== p;
                      });
                      for (var R = 0, q = Object.values(y.queries.query); R < q.length; R++) for (var Y, V, H, z = 0, X = (Y = q[R]).slice(); z < X.length; z++) (V = X[z]).res != null && p.mutatedParts && (m && !V.dirty ? (H = Object.isFrozen(V.res), H = Bi(V.res, V.req, S, b, V, H), V.dirty ? (Oe(Y, V), V.subscribers.forEach(function(ee) {
                        return g.add(ee);
                      })) : H !== V.res && (V.res = H, V.promise = J.resolve({ result: H }))) : (V.dirty && Oe(Y, V), V.subscribers.forEach(function(ee) {
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
            return p ? (f = o.mutate(c), c.type !== "add" && c.type !== "put" || !(50 <= c.values.length || Vr(s, c).some(function(m) {
              return m == null;
            })) ? (p.optimisticOps.push(c), c.mutatedParts && Jn(c.mutatedParts), f.then(function(m) {
              0 < m.numFailures && (Oe(p.optimisticOps, c), (m = Ki(0, c, m)) && p.optimisticOps.push(m), c.mutatedParts && Jn(c.mutatedParts));
            }), f.catch(function() {
              Oe(p.optimisticOps, c), c.mutatedParts && Jn(c.mutatedParts);
            })) : f.then(function(m) {
              var g = Ki(0, u(u({}, c), { values: c.values.map(function(_, h) {
                var x;
                return m.failures[h] || (_ = (x = s.keyPath) !== null && x !== void 0 && x.includes(".") ? Ge(_) : u({}, _), oe(_, s.keyPath, m.results[h])), _;
              }) }), m);
              p.optimisticOps.push(g), queueMicrotask(function() {
                return c.mutatedParts && Jn(c.mutatedParts);
              });
            }), f) : o.mutate(c);
          }, query: function(c) {
            if (!Mi(ne, o) || !Fi("query", c)) return o.query(c);
            var f = ((g = ne.trans) === null || g === void 0 ? void 0 : g.db._options.cache) === "immutable", h = ne, p = h.requery, m = h.signal, g = function(b, S, E, T) {
              var P = Wt["idb://".concat(b, "/").concat(S)];
              if (!P) return [];
              if (!(S = P.queries[E])) return [null, !1, P, null];
              var N = S[(T.query ? T.query.index.name : null) || ""];
              if (!N) return [null, !1, P, null];
              switch (E) {
                case "query":
                  var R = N.find(function(q) {
                    return q.req.limit === T.limit && q.req.values === T.values && qi(q.req.query.range, T.query.range);
                  });
                  return R ? [R, !0, P, N] : [N.find(function(q) {
                    return ("limit" in q.req ? q.req.limit : 1 / 0) >= T.limit && (!T.values || q.req.values) && cs(q.req.query.range, T.query.range);
                  }), !1, P, N];
                case "count":
                  return R = N.find(function(q) {
                    return qi(q.req.query.range, T.query.range);
                  }), [R, !!R, P, N];
              }
            }(t, r, "query", c), _ = g[0], h = g[1], x = g[2], y = g[3];
            return _ && h ? _.obsSet = c.obsSet : (h = o.query(c).then(function(b) {
              var S = b.result;
              if (_ && (_.res = S), f) {
                for (var E = 0, T = S.length; E < T; ++E) Object.freeze(S[E]);
                Object.freeze(S);
              } else b.result = Ge(S);
              return b;
            }).catch(function(b) {
              return y && _ && Oe(y, _), Promise.reject(b);
            }), _ = { obsSet: c.obsSet, promise: h, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, y ? y.push(_) : (y = [_], (x = x || (Wt["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = y)), ls(_, y, p, m), _.promise.then(function(b) {
              return { result: Bi(b.result, c, x?.optimisticOps, o, _, f) };
            });
          } });
        } });
      } };
      function er(e, t) {
        return new Proxy(e, { get: function(r, o, s) {
          return o === "db" ? t : Reflect.get(r, o, s);
        } });
      }
      var xt = (Fe.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new j.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new j.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(es), r.stores({}), this._state.autoSchema = !1, r);
      }, Fe.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || ne.letThrough || this._vip) ? e() : new J(function(r, o) {
          if (t._state.openComplete) return o(new j.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new j.DatabaseClosed());
            t.open().catch(A);
          }
          t._state.dbReadyPromise.then(r, o);
        }).then(e);
      }, Fe.prototype.use = function(e) {
        var t = e.stack, r = e.create, o = e.level, s = e.name;
        return s && this.unuse({ stack: t, name: s }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: r, level: o ?? 10, name: s }), e.sort(function(c, f) {
          return c.level - f.level;
        }), this;
      }, Fe.prototype.unuse = function(e) {
        var t = e.stack, r = e.name, o = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(s) {
          return o ? s.create !== o : !!r && s.name !== r;
        })), this;
      }, Fe.prototype.open = function() {
        var e = this;
        return Vt(Je, function() {
          return is(e);
        });
      }, Fe.prototype._close = function() {
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
      }, Fe.prototype.close = function(r) {
        var t = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        t ? (r.isBeingOpened && r.cancelOpen(new j.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new j.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, Fe.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", o = this._state;
        return new J(function(s, c) {
          function f() {
            t.close(e);
            var p = t._deps.indexedDB.deleteDatabase(t.name);
            p.onsuccess = Pe(function() {
              var m, g, _;
              m = t._deps, g = t.name, _ = m.indexedDB, m = m.IDBKeyRange, jr(_) || g === Bn || kr(_, m).delete(g).catch(A), s();
            }), p.onerror = yt(c), p.onblocked = t._fireOnBlocked;
          }
          if (r) throw new j.InvalidArgument("Invalid closeOptions argument to db.delete()");
          o.isBeingOpened ? o.dbReadyPromise.then(f) : f();
        });
      }, Fe.prototype.backendDB = function() {
        return this.idbdb;
      }, Fe.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Fe.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, Fe.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Fe.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Fe.prototype, "tables", { get: function() {
        var e = this;
        return v(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), Fe.prototype.transaction = function() {
        var e = (function(t, r, o) {
          var s = arguments.length;
          if (s < 2) throw new j.InvalidArgument("Too few arguments");
          for (var c = new Array(s - 1); --s; ) c[s - 1] = arguments[s];
          return o = c.pop(), [t, it(c), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Fe.prototype._transaction = function(e, t, r) {
        var o = this, s = ne.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var c, f, p = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (f = t.map(function(g) {
            if (g = g instanceof o.Table ? g.name : g, typeof g != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return g;
          }), e == "r" || e === Sr) c = Sr;
          else {
            if (e != "rw" && e != xr) throw new j.InvalidArgument("Invalid transaction mode: " + e);
            c = xr;
          }
          if (s) {
            if (s.mode === Sr && c === xr) {
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
          }) : Me(g);
        }
        var m = (function g(_, h, x, y, b) {
          return J.resolve().then(function() {
            var S = ne.transless || ne, E = _._createTransaction(h, x, _._dbSchema, y);
            if (E.explicit = !0, S = { trans: E, transless: S }, y) E.idbtrans = y.idbtrans;
            else try {
              E.create(), E.idbtrans._explicit = !0, _._state.PR1398_maxLoop = 3;
            } catch (N) {
              return N.name === O.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                return g(_, h, x, null, b);
              })) : Me(N);
            }
            var T, P = at(b);
            return P && an(), S = J.follow(function() {
              var N;
              (T = b.call(E, E)) && (P ? (N = Dt.bind(null, null), T.then(N, N)) : typeof T.next == "function" && typeof T.throw == "function" && (T = $r(T)));
            }, S), (T && typeof T.then == "function" ? J.resolve(T).then(function(N) {
              return E.active ? N : Me(new j.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : S.then(function() {
              return T;
            })).then(function(N) {
              return y && E._resolve(), E._completion.then(function() {
                return N;
              });
            }).catch(function(N) {
              return E._reject(N), Me(N);
            });
          });
        }).bind(null, this, c, f, s, r);
        return s ? s._promise(c, m, "lock") : ne.trans ? Vt(ne.transless, function() {
          return o._whenReady(m);
        }) : this._whenReady(m);
      }, Fe.prototype.table = function(e) {
        if (!G(this._allTables, e)) throw new j.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Fe);
      function Fe(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var o = Fe.dependencies;
        this._options = t = u({ addons: Fe.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, c, f, p, m, g = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: A, dbReadyPromise: null, cancelOpen: A, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        g.dbReadyPromise = new J(function(h) {
          g.dbReadyResolve = h;
        }), g.openCanceller = new J(function(h, x) {
          g.cancelOpen = x;
        }), this._state = g, this.name = e, this.on = mn(this, "populate", "blocked", "versionchange", "close", { ready: [te, A] }), this.once = function(h, x) {
          var y = function() {
            for (var b = [], S = 0; S < arguments.length; S++) b[S] = arguments[S];
            r.on(h).unsubscribe(y), x.apply(r, b);
          };
          return r.on(h, y);
        }, this.on.ready.subscribe = ke(this.on.ready.subscribe, function(h) {
          return function(x, y) {
            Fe.vip(function() {
              var b, S = r._state;
              S.openComplete ? (S.dbOpenError || J.resolve().then(x), y && h(x)) : S.onReadyBeingFired ? (S.onReadyBeingFired.push(x), y && h(x)) : (h(x), b = r, y || h(function E() {
                b.on.ready.unsubscribe(x), b.on.ready.unsubscribe(E);
              }));
            });
          };
        }), this.Collection = (s = this, yn(Wo.prototype, function(T, E) {
          this.db = s;
          var y = yi, b = null;
          if (E) try {
            y = E();
          } catch (P) {
            b = P;
          }
          var S = T._ctx, E = S.table, T = E.hook.reading.fire;
          this._ctx = { table: E, index: S.index, isPrimKey: !S.index || E.schema.primKey.keyPath && S.index === E.schema.primKey.name, range: y, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: b, or: S.or, valueMapper: T !== F ? T : null };
        })), this.Table = (c = this, yn(wi.prototype, function(h, x, y) {
          this.db = c, this._tx = y, this.name = h, this.schema = x, this.hook = c._allTables[h] ? c._allTables[h].hook : mn(null, { creating: [k, A], reading: [Z, F], updating: [U, A], deleting: [M, A] });
        })), this.Transaction = (f = this, yn(Xo.prototype, function(h, x, y, b, S) {
          var E = this;
          h !== "readonly" && x.forEach(function(T) {
            T = (T = y[T]) === null || T === void 0 ? void 0 : T.yProps, T && (x = x.concat(T.map(function(P) {
              return P.updatesTable;
            })));
          }), this.db = f, this.mode = h, this.storeNames = x, this.schema = y, this.chromeTransactionDurability = b, this.idbtrans = null, this.on = mn(this, "complete", "error", "abort"), this.parent = S || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new J(function(T, P) {
            E._resolve = T, E._reject = P;
          }), this._completion.then(function() {
            E.active = !1, E.on.complete.fire();
          }, function(T) {
            var P = E.active;
            return E.active = !1, E.on.error.fire(T), E.parent ? E.parent._reject(T) : P && E.idbtrans && E.idbtrans.abort(), Me(T);
          });
        })), this.Version = (p = this, yn(rs.prototype, function(h) {
          this.db = p, this._cfg = { version: h, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (m = this, yn(Ti.prototype, function(h, x, y) {
          if (this.db = m, this._ctx = { table: h, index: x === ":id" ? null : x, or: y }, this._cmp = this._ascending = ve, this._descending = function(b, S) {
            return ve(S, b);
          }, this._max = function(b, S) {
            return 0 < ve(b, S) ? b : S;
          }, this._min = function(b, S) {
            return ve(b, S) < 0 ? b : S;
          }, this._IDBKeyRange = m._deps.IDBKeyRange, !this._IDBKeyRange) throw new j.MissingAPI();
        })), this.on("versionchange", function(h) {
          0 < h.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(h) {
          !h.newVersion || h.newVersion < h.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(h.oldVersion / 10));
        }), this._maxKey = wn(t.IDBKeyRange), this._createTransaction = function(h, x, y, b) {
          return new r.Transaction(h, x, y, r._options.chromeTransactionDurability, b);
        }, this._fireOnBlocked = function(h) {
          r.on("blocked").fire(h), un.filter(function(x) {
            return x.name === r.name && x !== r && !x._state.vcFired;
          }).map(function(x) {
            return x.on("versionchange").fire(h);
          });
        }, this.use(as), this.use(fs), this.use(us), this.use(os), this.use(ss);
        var _ = new Proxy(this, { get: function(h, x, y) {
          if (x === "_vip") return !0;
          if (x === "table") return function(S) {
            return er(r.table(S), _);
          };
          var b = Reflect.get(h, x, y);
          return b instanceof wi ? er(b, _) : x === "tables" ? b.map(function(S) {
            return er(S, _);
          }) : x === "_createTransaction" ? function() {
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
      function Li(e) {
        var t, r = !1, o = new ds(function(s) {
          var c = at(e), f, p = !1, m = {}, g = {}, _ = { get closed() {
            return p;
          }, unsubscribe: function() {
            p || (p = !0, f && f.abort(), h && kt.storagemutated.unsubscribe(y));
          } };
          s.start && s.start(_);
          var h = !1, x = function() {
            return Er(b);
          }, y = function(S) {
            zn(m, S), Kr(g, m) && x();
          }, b = function() {
            var S, E, T;
            !p && tr.indexedDB && (m = {}, S = {}, f && f.abort(), f = new AbortController(), T = function(P) {
              var N = on();
              try {
                c && an();
                var R = Pt(e, P);
                return R = c ? R.finally(Dt) : R;
              } finally {
                N && sn();
              }
            }(E = { subscr: S, signal: f.signal, requery: x, querier: e, trans: null }), Promise.resolve(T).then(function(P) {
              r = !0, t = P, p || E.signal.aborted || (m = {}, function(N) {
                for (var R in N) if (G(N, R)) return;
                return 1;
              }(g = S) || h || (kt(bn, y), h = !0), Er(function() {
                return !p && s.next && s.next(P);
              }));
            }, function(P) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || p || Er(function() {
                p || s.error && s.error(P);
              });
            }));
          };
          return setTimeout(x, 0), _;
        });
        return o.hasValue = function() {
          return r;
        }, o.getValue = function() {
          return t;
        }, o;
      }
      var Yt = xt;
      function Wr(e) {
        var t = jt;
        try {
          jt = !0, kt.storagemutated.fire(e), Lr(e, !0);
        } finally {
          jt = t;
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
          return t = Yt.dependencies, r = t.indexedDB, t = t.IDBKeyRange, (jr(r) ? Promise.resolve(r.databases()).then(function(o) {
            return o.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== Bn;
            });
          }) : kr(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return Me(new j.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          D(this, e);
        };
      }, ignoreTransaction: function(e) {
        return ne.trans ? Vt(ne.transless, e) : e();
      }, vip: Mr, async: function(e) {
        return function() {
          try {
            var t = $r(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : J.resolve(t);
          } catch (r) {
            return Me(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = $r(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : J.resolve(o);
        } catch (s) {
          return Me(s);
        }
      }, currentTransaction: { get: function() {
        return ne.trans || null;
      } }, waitFor: function(e, t) {
        return t = J.resolve(typeof e == "function" ? Yt.ignoreTransaction(e) : e).timeout(t || 6e4), ne.trans ? ne.trans.waitFor(t) : t;
      }, Promise: J, debug: { get: function() {
        return Q;
      }, set: function(e) {
        me(e);
      } }, derive: de, extend: D, props: re, override: ke, Events: mn, on: kt, liveQuery: Li, extendObservabilitySet: zn, getByKeyPath: ie, setByKeyPath: oe, delByKeyPath: function(e, t) {
        typeof t == "string" ? oe(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          oe(e, r, void 0);
        });
      }, shallowClone: xe, deepClone: Ge, getObjectDiff: Ur, cmp: ve, asap: je, minKey: -1 / 0, addons: [], connections: un, errnames: O, dependencies: tr, cache: Wt, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
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
        if (!xt.disableBfCache && e.persisted) {
          Q && console.debug("Dexie: handling persisted pagehide"), hn?.close();
          for (var t = 0, r = un; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !xt.disableBfCache && e.persisted && (Q && console.debug("Dexie: handling persisted pageshow"), $i(), Wr({ all: new He(-1 / 0, [[]]) }));
      })), J.rejectionMapper = function(e, t) {
        return !e || e instanceof ht || e instanceof TypeError || e instanceof SyntaxError || !e.name || !$[e.name] ? e : (t = new $[e.name](t || e.message, e), "stack" in e && he(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, me(Q), u(xt, Object.freeze({ __proto__: null, Dexie: xt, liveQuery: Li, Entity: vi, cmp: ve, PropModification: vn, replacePrefix: function(e, t) {
        return new vn({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new vn({ add: e });
      }, remove: function(e) {
        return new vn({ remove: e });
      }, default: xt, RangeSet: He, mergeRanges: Sn, rangesOverlap: Di }), { default: xt }), xt;
    });
  }(Fs)), Fs.exports;
}
var bd = gd();
const Ks = /* @__PURE__ */ fd(bd), Xa = Symbol.for("Dexie"), Do = globalThis[Xa] || (globalThis[Xa] = Ks);
if (Ks.semVer !== Do.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Ks.semVer} and ${Do.semVer}`);
const {
  liveQuery: xh,
  mergeRanges: Ch,
  rangesOverlap: Th,
  RangeSet: Ah,
  cmp: Oh,
  Entity: Ih,
  PropModification: Ph,
  replacePrefix: Dh,
  add: Nh,
  remove: Rh,
  DexieYProvider: kh
} = Do, li = "_temp-idb-id";
async function wd(n) {
  return _d({
    databaseName: n.databaseName,
    withDatabaseIds: !0
  });
}
async function _d(n) {
  const { databaseName: i, withDatabaseIds: a } = n, u = new Do(i);
  await u.open();
  const l = await Ed({
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
async function Ed(n) {
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
  const v = l.children.map((D) => D.id), C = await i.table(zt).bulkGet(v);
  for (const D of C) {
    if (!D) continue;
    const W = Sd({
      document: u,
      record: D,
      withDatabaseIds: a
    });
    d.appendChild(W), await yc({
      databaseInstance: i,
      withDatabaseIds: a,
      xmlDocument: u,
      databaseRecord: D,
      parentDomElement: W
    });
  }
  return n.xmlDocument;
}
function Sd(n) {
  const { document: i, record: a, withDatabaseIds: u } = n;
  let l;
  return a.namespace.uri === ha.default.uri ? l = i.createElementNS(a.namespace.uri, a.tagName) : l = i.createElementNS(
    a.namespace.uri,
    `${a.namespace.prefix}:${a.tagName}`
  ), a.attributes && vc({ document: i, element: l, attributes: a.attributes, isRoot: !1 }), a.value && (l.textContent = a.value.trim()), u && l.setAttribute(li, a.id), l;
}
function vc(n) {
  const { document: i, element: a, attributes: u, isRoot: l } = n;
  for (const d of u)
    d.name !== "xmlns" && (yd(d) ? (l || xd({
      document: i,
      namespace: d.namespace
    }), a.setAttributeNS(d.namespace.uri, d.name, String(d.value))) : a.setAttribute(d.name, String(d.value)));
}
function xd(n) {
  const { document: i, namespace: a } = n, u = i.documentElement;
  u && (u.getAttribute(`xmlns:${a.prefix}`) !== null || u.setAttribute(`xmlns:${a.prefix}`, a.uri));
}
function Cd(n) {
  return n.old === void 0 && n.new?.parent !== void 0 && n.new?.element !== void 0;
}
function Td(n) {
  return n.old?.parent !== void 0 && n.old?.element !== void 0 && n.new === void 0;
}
function Ad(n) {
  return n.old?.parent !== void 0 && n.old?.element !== void 0 && n.new?.parent !== void 0 && n.new?.element == null;
}
function Od(n) {
  return n.old?.parent === void 0 && n.old?.element !== void 0 && n.new?.parent === void 0 && n.new?.element !== void 0;
}
function Id(n) {
  return n.old === void 0 && n.new === void 0 && n.element !== void 0 && n.newAttributes !== void 0 && n.oldAttributes !== void 0;
}
function Pd(n) {
  return !(n.actions instanceof Array);
}
function Lt(n) {
  const i = n.split(">"), a = i.pop() ?? "";
  return [i.join(">"), a];
}
const bt = ":not(*)";
function Dd(n) {
  return `${n.getAttribute("version")}	${n.getAttribute("revision")}`;
}
function Nd(n, i) {
  const [a, u] = i.split("	");
  return !a || !u ? bt : `${n}[version="${a}"][revision="${u}"]`;
}
function za(n) {
  return Tt(n.parentElement) + ">" + n.getAttribute("connectivityNode");
}
function Ja(n, i) {
  const [a, u] = Lt(i), l = Ct[n].parents.flatMap(
    (d) => Mt(d, a).split(",")
  );
  return qt(
    l,
    [">"],
    [`${n}[connectivityNode="${u}"]`]
  ).map((d) => d.join("")).join(",");
}
function Rd(n) {
  const [i, a, u, l, d, v] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((C) => n.getAttribute(C));
  return i === "None" ? `${Tt(n.parentElement)}>(${l} ${v} ${d})` : `${i} ${a || "(Client)"}/${u ?? ""} ${l} ${d ?? ""}`;
}
function kd(n, i) {
  if (i.endsWith(")")) {
    const [re, se] = Lt(i), [he, de, Te] = se.substring(1, se.length - 1).split(" ");
    if (!he || !de) return bt;
    const ae = Ct[n].parents.flatMap(
      (ye) => Mt(ye, re).split(",")
    );
    return qt(
      ae,
      [">"],
      [`${n}[iedName="None"][lnClass="${he}"][lnType="${de}"][lnInst="${Te}"]`]
    ).map((ye) => ye.join("")).join(",");
  }
  const [a, u, l, d, v] = i.split(/[ /]/);
  if (!a || !u || !d) return bt;
  const [C, D, W, B, G] = [
    [`[iedName="${a}"]`],
    u === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${u}"]`],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    v ? [`[lnInst="${v}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return qt(
    [n],
    C,
    D,
    W,
    B,
    G
  ).map((re) => re.join("")).join(",");
}
function jd(n) {
  return `${Tt(n.parentElement)}>${n.getAttribute("iedName")} ${n.getAttribute("apName")}`;
}
function Md(n, i) {
  const [a, u] = Lt(i), [l, d] = u.split(" ");
  return `${Mt("IED", a)}>${n}[iedName="${l}"][apName="${d}"]`;
}
function Fd(n) {
  return `${Tt(n.parentElement)}>${n.getAttribute("associationID") ?? ""}`;
}
function Kd(n, i) {
  const [a, u] = Lt(i);
  return u ? `${Mt("Server", a)}>${n}[associationID="${u}"]` : bt;
}
function Bd(n) {
  return `${Tt(n.closest("IED"))}>>${n.getAttribute("inst")}`;
}
function qd(n, i) {
  const [a, u] = i.split(">>");
  return u ? `IED[name="${a}"] ${n}[inst="${u}"]` : bt;
}
function Ld(n) {
  const i = n.textContent, [a, u, l, d, v] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((C) => n.getAttribute(C));
  return `${Tt(n.parentElement)}>${i} ${a || ""} ${u || ""}/${l ?? ""} ${d ?? ""} ${v ?? ""}`;
}
function $d(n, i) {
  const [a, u] = Lt(i), [l, d, v, C, D, W] = u.split(/[ /]/), [
    B,
    G,
    re,
    se,
    he,
    de
  ] = [
    Ct[n].parents.flatMap((Te) => Mt(Te, a).split(",")),
    [`${l}`],
    d ? [`[apRef="${d}"]`] : [":not([apRef])", '[apRef=""]'],
    v ? [`[ldInst="${v}"]`] : [":not([ldInst])", '[ldInst=""]'],
    C ? [`[prefix="${C}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${D}"]`],
    W ? [`[lnInst="${W}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return qt(
    B,
    [">"],
    [n],
    G,
    re,
    se,
    he,
    de
  ).map((Te) => Te.join("")).join(",");
}
function Ud(n) {
  const [i, a, u, l, d, v, C, D] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((B) => n.getAttribute(B)), W = `${i}/${a ?? ""} ${u} ${l ?? ""}.${d} ${v || ""}`;
  return `${Tt(n.parentElement)}>${W} (${C}${D ? " [" + D + "]" : ""})`;
}
function Vd(n, i) {
  const [a, u] = Lt(i), [l, d, v, C] = u.split(/[ /.]/), D = u.match(/.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/), W = D && D[1] ? D[1] : "", B = D && D[2] ? D[2] : "", G = u.match(/\(([A-Z]{2})/), re = u.match(/ \[([0-9]{1,2})\]/), se = G && G[1] ? G[1] : "", he = re && re[1] ? re[1] : "", [
    de,
    Te,
    ae,
    ye,
    ke,
    pe,
    je,
    ie,
    oe
  ] = [
    Ct[n].parents.flatMap((xe) => Mt(xe, a).split(",")),
    [`[ldInst="${l}"]`],
    d ? [`[prefix="${d}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${v}"]`],
    C ? [`[lnInst="${C}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${W}"]`],
    B ? [`[daName="${B}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${se}"]`],
    he ? [`[ix="${he}"]`] : [":not([ix])", '[ix=""]']
  ];
  return qt(
    de,
    [">"],
    [n],
    Te,
    ae,
    ye,
    ke,
    pe,
    je,
    ie,
    oe
  ).map((xe) => xe.join("")).join(",");
}
function Gd(n) {
  if (!n.parentElement) return NaN;
  const i = Tt(n.parentElement), a = n.getAttribute("iedName"), u = n.getAttribute("intAddr"), l = Array.from(
    n.parentElement.querySelectorAll(`ExtRef[intAddr="${u}"]`)
  ).indexOf(n);
  if (u) return `${i}>${u}[${l}]`;
  const [
    d,
    v,
    C,
    D,
    W,
    B,
    G,
    re,
    se,
    he,
    de,
    Te
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
  ].map((ke) => n.getAttribute(ke)), ae = Te ? `${G}:${Te} ${re ?? ""}/${se ?? ""} ${he ?? ""} ${de ?? ""}` : "", ye = `${a} ${d}/${v ?? ""} ${C} ${D ?? ""} ${W} ${B || ""}`;
  return `${i}>${ae ? ae + " " : ""}${ye}${u ? `@${u}` : ""}`;
}
function Hd(n, i) {
  const [a, u] = Lt(i), l = Ct[n].parents.flatMap(
    (be) => Mt(be, a).split(",")
  );
  if (u.endsWith("]")) {
    const [be] = u.split("["), Oe = [`[intAddr="${be}"]`];
    return qt(l, [">"], [n], Oe).map((et) => et.join("")).join(",");
  }
  let d, v, C, D, W, B, G, re, se, he, de, Te, ae, ye;
  !u.includes(":") && !u.includes("@") ? [d, v, C, D, W, B, G] = u.split(/[ /]/) : u.includes(":") && !u.includes("@") ? [
    re,
    se,
    he,
    de,
    Te,
    ae,
    d,
    v,
    C,
    D,
    W,
    B,
    G
  ] = u.split(/[ /:]/) : !u.includes(":") && u.includes("@") ? [d, v, C, D, W, B, G, ye] = u.split(/[ /@]/) : [
    re,
    se,
    he,
    de,
    Te,
    ae,
    d,
    v,
    C,
    D,
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
    xe,
    L,
    it,
    rt,
    Ne,
    Ge,
    At,
    wt,
    Ve
  ] = [
    d ? [`[iedName="${d}"]`] : [":not([iedName])"],
    v ? [`[ldInst="${v}"]`] : [":not([ldInst])", '[ldInst=""]'],
    C ? [`[prefix="${C}"]`] : [":not([prefix])", '[prefix=""]'],
    D ? [`[lnClass="${D}"]`] : [":not([lnClass])"],
    W ? [`[lnInst="${W}"]`] : [":not([lnInst])", '[lnInst=""]'],
    B ? [`[doName="${B}"]`] : [":not([doName])"],
    G ? [`[daName="${G}"]`] : [":not([daName])", '[daName=""]'],
    re ? [`[serviceType="${re}"]`] : [":not([serviceType])", '[serviceType=""]'],
    se ? [`[srcCBName="${se}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    he ? [`[srcLDInst="${he}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    de ? [`[srcPrefix="${de}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    Te ? [`[srcLNClass="${Te}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    ae ? [`[srcLNInst="${ae}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    ye ? [`[intAddr="${ye}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return qt(
    l,
    [">"],
    [n],
    ke,
    pe,
    je,
    ie,
    oe,
    xe,
    L,
    it,
    rt,
    Ne,
    Ge,
    At,
    wt,
    Ve
  ).map((be) => be.join("")).join(",");
}
function Wd(n) {
  const [i, a, u] = ["prefix", "lnClass", "inst"].map((l) => n.getAttribute(l));
  return `${Tt(n.parentElement)}>${i ?? ""} ${a} ${u}`;
}
function Yd(n, i) {
  const [a, u] = Lt(i), l = Ct[n].parents.flatMap(
    (G) => Mt(G, a).split(",")
  ), [d, v, C] = u.split(" ");
  if (!v) return bt;
  const [D, W, B] = [
    d ? [`[prefix="${d}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${v}"]`],
    [`[inst="${C}"]`]
  ];
  return qt(
    l,
    [">"],
    [n],
    D,
    W,
    B
  ).map((G) => G.join("")).join(",");
}
function Qd(n) {
  const [i, a, u, l, d, v] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((C) => n.getAttribute(C));
  return `${Tt(n.parentElement)}>${a} ${i || ""} ${u}/${l ?? ""} ${d} ${v}`;
}
function Xd(n, i) {
  const [a, u] = Lt(i), l = Ct[n].parents.flatMap(
    (ae) => Mt(ae, a).split(",")
  ), [d, v, C, D, W, B] = u.split(/[ /]/), [
    G,
    re,
    se,
    he,
    de,
    Te
  ] = [
    d ? [`[iedName="${d}"]`] : [":not([iedName])", '[iedName=""]'],
    v ? [`[apRef="${v}"]`] : [":not([apRef])", '[apRef=""]'],
    C ? [`[ldInst="${C}"]`] : [":not([ldInst])", '[ldInst=""]'],
    D ? [`[prefix="${D}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${W}"]`],
    B ? [`[lnInst="${B}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return qt(
    l,
    [">"],
    [n],
    G,
    re,
    se,
    he,
    de,
    Te
  ).map((ae) => ae.join("")).join(",");
}
function Za(n) {
  const [i, a] = ["name", "ix"].map((u) => n.getAttribute(u));
  return `${Tt(n.parentElement)}>${i}${a ? "[" + a + "]" : ""}`;
}
function Bs(n, i, a = -1) {
  a === -1 && (a = i.split(">").length);
  const [u, l] = Lt(i), [d, v, C, D] = l.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!v) return bt;
  if (a === 0) return `${n}[name="${v}"]`;
  const W = Ct[n].parents.flatMap(
    (re) => re === "SDI" ? Bs(re, u, a - 1).split(",") : Mt(re, u).split(",")
  ).filter((re) => !re.startsWith(bt));
  if (W.length === 0) return bt;
  const [B, G] = [
    [`[name="${v}"]`],
    D ? [`[ix="${D}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return qt(W, [">"], [n], B, G).map((re) => re.join("")).join(",");
}
function zd(n) {
  if (!n.parentElement) return NaN;
  const i = n.getAttribute("sGroup"), a = Array.from(n.parentElement.children).filter((u) => u.getAttribute("sGroup") === i).findIndex((u) => u.isSameNode(n));
  return `${Tt(n.parentElement)}>${i ? i + "." : ""} ${a}`;
}
function Jd(n, i) {
  const [a, u] = Lt(i), [l, d] = u.split(" "), v = parseFloat(d), C = Ct[n].parents.flatMap(
    (B) => Mt(B, a).split(",")
  ), [D, W] = [
    l ? [`[sGroup="${l}"]`] : [""],
    v ? [`:nth-child(${v + 1})`] : [""]
  ];
  return qt(C, [">"], [n], D, W).map((B) => B.join("")).join(",");
}
function Zd(n) {
  const [i, a] = ["iedName", "apName"].map((u) => n.getAttribute(u));
  return `${i} ${a}`;
}
function ep(n, i) {
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
function tp(n) {
  if (!n.parentElement) return NaN;
  if (!n.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const i = n.getAttribute("type");
  return n.parentElement.children.length > 1 && i !== "Connection" && i !== "RedConn" ? NaN : `${Tt(n.parentElement)}>${i}`;
}
function np(n, i) {
  const [a, u] = Lt(i), [l, d] = [
    Ct[n].parents.flatMap((v) => Mt(v, a).split(",")),
    u ? [`[type="${u}"]`] : [""]
  ];
  return qt(l, [">"], [n], d).map((v) => v.join("")).join(",");
}
function rp(n) {
  if (!n.parentElement) return NaN;
  const i = n.parentElement, a = n.getAttribute("type");
  if (i.tagName === "PhysConn") return `${Tt(n.parentElement)}>${a}`;
  const u = Array.from(n.parentElement.children).filter((l) => l.getAttribute("type") === a).findIndex((l) => l.isSameNode(n));
  return `${Tt(n.parentElement)}>${a} [${u}]`;
}
function ip(n, i) {
  const [a, u] = Lt(i), [l] = u.split(" "), d = u && u.match(/\[([0-9]+)\]/) && u.match(/\[([0-9]+)\]/)[1] ? parseFloat(u.match(/\[([0-9]+)\]/)[1]) : NaN, [v, C, D] = [
    Ct[n].parents.flatMap((W) => Mt(W, a).split(",")),
    [`[type="${l}"]`],
    d ? [`:nth-child(${d + 1})`] : [""]
  ];
  return qt(v, [">"], [n], C, D).map((W) => W.join("")).join(",");
}
function op(n) {
  return `${Tt(n.parentElement)}>${n.getAttribute("ord")}`;
}
function sp(n, i) {
  const [a, u] = Lt(i);
  return `${Mt("EnumType", a)}>${n}[ord="${u}"]`;
}
function ap(n) {
  return `${Tt(n.parentElement)}>${n.getAttribute("type") || "8-MMS"}	${n.textContent}`;
}
function up(n, i) {
  const [a, u] = Lt(i), [l, d] = u.split("	"), [v] = [
    Ct[n].parents.flatMap((C) => Mt(C, a).split(","))
  ];
  return qt(v, [">"], [n], [`[type="${l}"]`], [">"], [d]).map((C) => C.join("")).join(",");
}
function cp() {
  return "";
}
function lp() {
  return ":root";
}
function Xe(n) {
  return n.parentElement.tagName === "SCL" ? n.getAttribute("name") : `${Tt(n.parentElement)}>${n.getAttribute("name")}`;
}
function Qe(n, i, a = -1) {
  a === -1 && (a = i.split(">").length);
  const [u, l] = Lt(i);
  if (!l) return bt;
  if (a === 0) return `${n}[name="${l}"]`;
  const d = Ct[n].parents;
  if (!d) return bt;
  const v = d.flatMap(
    (C) => Ct[C].selector === Ct.Substation.selector ? Qe(C, u, a - 1).split(",") : Mt(C, u).split(",")
  ).filter((C) => !C.startsWith(bt));
  return v.length === 0 ? bt : qt(v, [">"], [n], [`[name="${l}"]`]).map((C) => C.join("")).join(",");
}
function _e(n) {
  return Tt(n.parentElement).toString();
}
function Ee(n, i) {
  const a = Ct[n].parents;
  if (!a) return bt;
  const u = a.flatMap((l) => Mt(l, i).split(",")).filter((l) => !l.startsWith(bt));
  return u.length === 0 ? bt : qt(u, [">"], [n]).map((l) => l.join("")).join(",");
}
function yo(n) {
  return `#${n.id}`;
}
function vo(n, i) {
  const a = i.replace(/^#/, "");
  return a ? `${n}[id="${a}"]` : bt;
}
const gc = ["TransformerWinding", "ConductingEquipment"], bc = [
  "GeneralEquipment",
  "PowerTransformer",
  ...gc
], qs = ["Substation", "VoltageLevel", "Bay"], wc = ["Process", "Line"], _c = ["EqSubFunction", "EqFunction"], fp = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...bc,
  ...qs,
  ...wc,
  ..._c
], Ec = ["ConnectivityNode", ...fp], dp = ["GOOSESecurity", "SMVSecurity"], pp = ["SubNetwork", ...dp, ...Ec], hp = ["BDA", "DA"], mp = ["SampledValueControl", "GSEControl"], yp = ["LogControl", "ReportControl"], vp = [...mp, ...yp], gp = ["GSE", "SMV"], bp = [
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
  ...vp,
  ...gp,
  ...hp
], Jr = ["LN0", "LN"], wp = ["Text", "Private", "Hitem", "AccessControl"], _p = ["Subject", "IssuerName"], Ep = ["MinTime", "MaxTime"], Sp = ["LNodeType", "DOType", "DAType", "EnumType"], xp = [
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
], Cp = ["DynDataSet", "ConfDataSet"], Tp = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Cp
], Ap = ["ConfLogControl", "ConfSigRef"], Op = ["ReportSettings", "LogSettings", "GSESettings", "SMVSettings"], Ip = ["SCL", ...pp, ...bp, ...Sp], Sc = [
  ...Ip,
  ...wp,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ..._p,
  ...Ep,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Jr,
  ...xp,
  "DynAssociation",
  "SettingGroups",
  ...Tp,
  ...Ap,
  ...Op,
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
], Pp = new Set(Sc);
function ma(n) {
  return Pp.has(n);
}
const Lo = ["Text", "Private"], dr = [...Lo], gt = [...Lo], go = [...Lo], nu = [...gt, "Val"], xc = [...dr, "LNode"], hr = [...xc], Ls = [...hr], Ss = [
  ...hr,
  "PowerTransformer",
  "GeneralEquipment"
], ru = [...Ls, "Terminal"], iu = [...gt, "Address"], Cc = [...dr], ou = [...Cc, "IEDName"], su = [
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
], Ct = {
  AccessControl: {
    identity: _e,
    selector: Ee,
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
    selector: Ee,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Fd,
    selector: Kd,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: _e,
    selector: Ee,
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
    selector: Ee,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: Xe,
    selector: Qe,
    parents: ["VoltageLevel"],
    children: [
      ...Ss,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Qd,
    selector: Xd,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: _e,
    selector: Ee,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: _e,
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: _e,
    selector: Ee,
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
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: _e,
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: _e,
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: _e,
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: _e,
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: _e,
    selector: Ee,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: _e,
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: Zd,
    selector: ep,
    parents: ["SubNetwork"],
    children: [...gt, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: Xe,
    selector: Qe,
    parents: ["Bay", "Line"],
    children: [...xc]
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
    selector: Ee,
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
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: _e,
    selector: Ee,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: _e,
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: _e,
    selector: Ee,
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
    identity: op,
    selector: sp,
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
    identity: Gd,
    selector: Hd,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Ud,
    selector: Vd,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: _e,
    selector: Ee,
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
      ...wc,
      ..._c,
      ...qs
    ],
    children: [...Ls, "EqFunction"]
  },
  GetCBValues: {
    identity: _e,
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: _e,
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: _e,
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: _e,
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: _e,
    selector: Ee,
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
    selector: Ee,
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
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: _e,
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: _e,
    selector: Ee,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: _e,
    selector: Ee,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Dd,
    selector: Nd,
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
    identity: Ld,
    selector: $d,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: _e,
    selector: Ee,
    parents: [...Jr],
    children: [...gt, "ExtRef"]
  },
  IssuerName: {
    identity: _e,
    selector: Ee,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: jd,
    selector: Md,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Bd,
    selector: qd,
    parents: ["Server"],
    children: [...gt, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Wd,
    selector: Yd,
    parents: ["AccessPoint", "LDevice"],
    children: [...su]
  },
  LN0: {
    identity: _e,
    selector: Ee,
    parents: ["LDevice"],
    children: [...su, "GSEControl", "SampledValueControl", "SettingControl"]
  },
  LNode: {
    identity: Rd,
    selector: kd,
    parents: [...Ec],
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
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: _e,
    selector: Ee,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: _e,
    selector: Ee,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: _e,
    selector: Ee,
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
    selector: Ee,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: rp,
    selector: ip,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: tp,
    selector: np,
    parents: ["ConnectedAP"],
    children: [...gt, "P"]
  },
  PowerTransformer: {
    identity: Xe,
    selector: Qe,
    parents: [...qs],
    children: [...Ls, "TransformerWinding", "SubEquipment", "EqFunction"]
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
    identity: ap,
    selector: up,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: _e,
    selector: Ee,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: _e,
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: _e,
    selector: Ee,
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
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: _e,
    selector: Ee,
    parents: ["ReportControl"],
    children: [...gt, "ClientLN"]
  },
  SamplesPerSec: {
    identity: _e,
    selector: Ee,
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
    selector: Ee,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: cp,
    selector: lp,
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
    selector: Ee,
    parents: ["AccessPoint"],
    children: [...gt, "Authentication", "LDevice", "Association"]
  },
  ServerAt: {
    identity: _e,
    selector: Ee,
    parents: ["AccessPoint"],
    children: [...gt]
  },
  Services: {
    identity: _e,
    selector: Ee,
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
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: _e,
    selector: Ee,
    parents: ["LN0"],
    children: [...gt]
  },
  SettingGroups: {
    identity: _e,
    selector: Ee,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: _e,
    selector: Ee,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: _e,
    selector: Ee,
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
    selector: Ee,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: _e,
    selector: Ee,
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
    selector: Ee,
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
      ...gc
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
    selector: Ee,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: Xe,
    selector: Qe,
    parents: ["SCL"],
    children: [...Ss, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: _e,
    selector: Ee,
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
    parents: [...bc],
    children: [...gt]
  },
  Text: {
    identity: _e,
    selector: Ee,
    parents: Sc.filter((n) => n !== "Text" && n !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: _e,
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: _e,
    selector: Ee,
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
    selector: Ee,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: zd,
    selector: Jd,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: _e,
    selector: Ee,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: _e,
    selector: Ee,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: Xe,
    selector: Qe,
    parents: ["Substation"],
    children: [...Ss, "Voltage", "Bay", "Function"]
  }
};
function Tc(n, i) {
  const a = n.tagName, u = Array.from(n.children);
  if (a === "Services" || a === "SettingGroups" || !ma(a))
    return u.find((C) => C.tagName === i) ?? null;
  const l = Ct[a]?.children ?? [];
  let d = l.findIndex((C) => C === i);
  if (d < 0) return null;
  let v;
  for (; d < l.length && !v; )
    v = u.find((C) => C.tagName === l[d]), d++;
  return v ?? null;
}
function Mt(n, i) {
  return typeof i != "string" ? bt : ma(n) ? Ct[n].selector(n, i) : n;
}
function Tt(n) {
  if (n === null) return NaN;
  if (n.closest("Private")) return NaN;
  const i = n.tagName;
  return ma(i) ? Ct[i].identity(n) : NaN;
}
function qt(...n) {
  return n.reduce((i, a) => i.flatMap((u) => a.map((l) => [u, l].flat())), [[]]);
}
const Dp = 99;
Array(Dp).fill(1).map((n, i) => `${i + 1}`);
function Np(n) {
  return Pd(n) ? lu(n) : n.actions.map(lu);
}
function lu(n) {
  if (Cd(n))
    return Rp(n);
  if (Td(n))
    return kp(n);
  if (Id(n))
    return jp(n);
  if (Ad(n))
    return Mp(n);
  if (Od(n))
    return Fp(n);
  throw console.error("Unknown action type", n), new Error("Unknown action type");
}
function Rp(n) {
  let i = null;
  return n.new.reference === void 0 && n.new.element instanceof Element && n.new.parent instanceof Element ? i = Tc(n.new.parent, n.new.element.tagName) : i = n.new.reference ?? null, {
    parent: n.new.parent,
    node: n.new.element,
    reference: i
  };
}
function kp(n) {
  return {
    node: n.old.element
  };
}
function jp(n) {
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
function Mp(n) {
  return n.new.reference === void 0 && (n.new.reference = Tc(n.new.parent, n.old.element.tagName)), {
    parent: n.new.parent,
    node: n.old.element,
    reference: n.new.reference ?? null
  };
}
function Fp(n) {
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
function Kp(n) {
  return n instanceof Array;
}
function Bp(n) {
  return n.parent !== void 0;
}
function qp(n) {
  return n !== null && typeof n != "string";
}
function Lp(n) {
  return n.element !== void 0;
}
function $p(n) {
  return n.parent === void 0 && n.node !== void 0;
}
function Ac(n) {
  if (Kp(n))
    return n.map(Ac);
  if ($p(n))
    return n;
  if (Bp(n))
    return n;
  if (Lp(n))
    return Up(n);
  throw new Error("Unknown edit type");
}
function Up(n) {
  const i = {}, a = {};
  return Object.entries(n.attributes).forEach(([u, l]) => {
    if (qp(l)) {
      const d = l.namespaceURI;
      if (!d) return;
      a[d] || (a[d] = {}), a[d][u] = l.value;
    } else i[u] = l;
  }), { element: n.element, attributes: i, attributesNS: a };
}
function Oc(n) {
  return typeof n != "object" || n === null ? !1 : Object.entries(n).every(([i, a]) => typeof i == "string" && (a === null || typeof a == "string"));
}
function Vp(n) {
  return typeof n != "object" || n === null ? !1 : Object.entries(n).every(([i, a]) => typeof i == "string" && Oc(a));
}
function ya(n) {
  return n instanceof Array && n.every((i) => Gp(i));
}
function va(n) {
  return n.element instanceof Element && typeof n.textContent == "string";
}
function lo(n) {
  return n.parent === void 0 && n.node instanceof Node;
}
function ga(n) {
  const i = n;
  return i.element instanceof Element && (Oc(i.attributes) || Vp(i.attributesNS));
}
function fo(n) {
  return (n.parent instanceof Element || n.parent instanceof Document || n.parent instanceof DocumentFragment) && n.node instanceof Node && (n.reference instanceof Node || n.reference === null);
}
function Gp(n) {
  return ya(n) ? !0 : ga(n) || va(n) || fo(n) || lo(n);
}
function Ic(n) {
  return n !== null && typeof n == "object" && "namespaceURI" in n && typeof n.namespaceURI == "string" && "value" in n && typeof n.value == "string";
}
function Hp(n) {
  return n === null || typeof n != "object" ? !1 : Object.entries(n).every(([i, a]) => typeof i == "string" && (a === null || typeof a == "string" || Ic(a)));
}
function Pc(n) {
  return n instanceof Array && n.every(Wp);
}
function Dc(n) {
  return n.element instanceof Element && Hp(n.attributes);
}
function Wp(n) {
  return Pc(n) ? !0 : Dc(n) || fo(n) || lo(n);
}
function Yp(n) {
  let i = {};
  const a = {};
  return Object.entries(n.attributes).forEach(([u, l]) => {
    if (Ic(l)) {
      const d = l.namespaceURI;
      if (!d)
        return;
      a[d] || (a[d] = {}), a[d] = { ...a[d], [u]: l.value };
    } else
      i = { ...i, [u]: l };
  }), { element: n.element, attributes: i, attributesNS: a };
}
function Nc(n) {
  return lo(n) || fo(n) ? n : Dc(n) ? Yp(n) : Pc(n) ? n.map(Nc) : [];
}
function Qp({
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
function Xp({
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
        const [v, C] = d;
        C === null ? n.removeAttribute(v) : n.setAttribute(v, C);
      } catch {
        delete u[d[0]];
      }
  if (a && Object.entries(a).forEach(([d, v]) => {
    Object.keys(v).reverse().forEach((C) => {
      l[d] = {
        ...l[d],
        [C]: n.getAttributeNS(d, C.split(":").pop())
      };
    });
  }), a)
    for (const d of Object.entries(a)) {
      const [v, C] = d;
      for (const D of Object.entries(C))
        try {
          const [W, B] = D;
          B === null ? n.removeAttributeNS(v, W.split(":").pop()) : n.setAttributeNS(v, W, B);
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
function zp({ node: n }) {
  const { parentNode: i, nextSibling: a } = n;
  return i ? (i.removeChild(n), {
    node: n,
    parent: i,
    reference: a
  }) : [];
}
function Jp({ parent: n, node: i, reference: a }) {
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
  return fo(n) ? Jp(n) : lo(n) ? zp(n) : ga(n) ? Xp(n) : va(n) ? Qp(n) : ya(n) ? n.map((i) => So(i)).reverse().flat(1 / 0) : [];
}
class Zp {
  past = [];
  future = [];
  commit(i, { title: a, squash: u } = {}) {
    const l = u && this.past.length ? this.past[this.past.length - 1] : { undo: [], redo: [] }, d = So(i);
    return l.undo.unshift(...[d].flat(1 / 0)), l.redo.push(...[i].flat(1 / 0)), a && (l.title = a), u && this.past.length && this.past.pop(), this.past.push(l), this.future = [], this.#e.forEach((v) => v(l)), l;
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
async function Rc(n, i) {
  if (fo(n))
    await eh(n, i);
  else if (lo(n))
    await th(n, i);
  else if (ga(n))
    await nh(n, i);
  else if (va(n))
    await rh(n, i);
  else if (ya(n))
    for (const a of n)
      await Rc(a, i);
  else
    console.error("could not determine edit type", { edit: n });
}
async function eh(n, i) {
  const { parent: a, node: u } = n, l = u, d = a;
  let v = ao(l);
  const C = ao(d), D = await uh(i);
  v || (v = crypto.randomUUID(), l.setAttribute(li, v));
  const W = ih(l), B = {
    id: v,
    tagName: l.tagName,
    namespace: W,
    attributes: ah(l, D),
    value: l.textContent || "",
    parent: null,
    // Will be set by `ensureRelationship`
    children: []
  }, G = kc(B), re = await i.addRecord({ ...G });
  let se;
  if (C) {
    if (se = await i.findRecordById(C), !se)
      throw new Error(`parentId present: ${C}, but no record found`);
    await i.ensureRelationship(se, re);
  }
}
async function th(n, i) {
  const { node: a } = n, l = ao(a);
  if (!l)
    throw new Error("Element must have a temp ID attribute for database operations");
  const d = await i.findRecordById(l);
  d && await i.deleteRecord(d);
}
async function nh(n, i) {
  const { element: a, attributes: u = {}, attributesNS: l = {} } = n, d = ao(a);
  if (!d)
    throw new Error("Element must have a temp ID attribute for database operations");
  const v = await i.findRecordById(d);
  if (!v)
    throw new Error(`Record with ID ${d} not found`);
  const D = [...kc(v).attributes || []];
  for (const [B, G] of Object.entries(u))
    if (G == null)
      xs(D, B);
    else {
      const se = $s(B, G);
      du(D, se);
    }
  for (const [B, G] of Object.entries(l))
    if (G)
      for (const [re, se] of Object.entries(G))
        if (se == null) {
          const de = await fu(B, i), Te = de ? `${de}:${re}` : re;
          xs(D, Te) || xs(D, re);
        } else {
          const de = await fu(B, i), Te = de ? `${de}:${re}` : re, ae = $s(
            Te,
            se,
            de ? B : void 0,
            de
          );
          du(D, ae);
        }
  const W = {
    ...v,
    attributes: D
  };
  await i.updateRecord(W);
}
async function rh(n, i) {
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
function ih(n) {
  return n.namespaceURI && n.prefix ? {
    prefix: n.prefix,
    uri: n.namespaceURI
  } : ha.default;
}
async function oh(n, i) {
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
    return await oh(n, i);
  } catch (a) {
    return console.warn(`Could not resolve namespace prefix for ${n}:`, a), "";
  }
}
function $s(n, i, a, u) {
  return a && a !== ch ? {
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
function sh(n, i) {
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
function xs(n, i) {
  const a = n.findIndex((l) => l.name === i);
  return a !== -1 ? (n.splice(a, 1), !0) : !1;
}
function ah(n, i) {
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
    ), C = sh(v, i);
    a.push(C);
  }
  return a;
}
function kc(n) {
  const i = n.attributes.filter(
    (a) => a.name !== li
  );
  return {
    ...n,
    attributes: i
  };
}
async function uh(n) {
  const i = {};
  try {
    const a = await n.findRootSCL();
    for (const u of a.attributes)
      if (u.name.startsWith("xmlns:")) {
        const d = u.name.split(":");
        if (d.length === 2) {
          const C = d[1], D = u.value;
          i[D] = C;
        } else
          console.warn(`Invalid namespace declaration format: ${u.name}`);
      }
  } catch (a) {
    console.warn("Could not gather namespaces from SCL root:", a);
  }
  return i;
}
const ch = "http://www.w3.org/1999/xhtml";
function lh(n) {
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
    ensureRelationship: v,
    ensurePrivateElement: C,
    findRootSCL: W,
    recordExists: d,
    findOneRecordByAttribute: de,
    findAllRecordsByAttribute: Te,
    close: je,
    db: n
  };
  async function i(ie) {
    const oe = { ...ie, id: ie.id ?? crypto.randomUUID() };
    try {
      return await n.table(zt).add(oe), oe;
    } catch (xe) {
      const L = {
        msg: "could not add record",
        db: n.name,
        newRecord: oe,
        err: xe
      };
      throw console.error(L), new Error(JSON.stringify(L));
    }
  }
  async function a(ie) {
    try {
      if (await n.table(zt).update(ie.id, ie) < 1) {
        const xe = { msg: "nothing has been updated", record: ie };
        throw console.error(xe), new Error(JSON.stringify(xe));
      }
    } catch (oe) {
      console.error(oe);
    }
  }
  async function u(ie) {
    try {
      if (ie.children)
        for (const oe of ie.children) {
          const xe = await B(oe.id);
          if (!xe) {
            console.warn({
              msg: "deleteRecord: child relationship found but not child record, continuing",
              child: oe
            });
            continue;
          }
          await u(xe);
        }
      if (ie.parent?.id) {
        const oe = await B(ie.parent.id);
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
      const xe = { ...ie, id: crypto.randomUUID() };
      return await n.table(zt).add(xe), oe && await v(oe, xe), {
        ...xe,
        parent: oe ? { id: oe.id, tagName: oe.tagName } : null
      };
    } catch (xe) {
      const L = {
        msg: "could not add record",
        db: n.name,
        table: ie.tagName,
        recordToCreate: ie,
        err: xe
      };
      throw console.error(L), new Error(JSON.stringify(L));
    }
  }
  async function d(ie) {
    return await n.table(zt).where({ id: ie.id }).count() > 0;
  }
  async function v(ie, oe) {
    const xe = ie.children?.some((it) => it.id === oe.id), L = oe.parent?.id === ie.id;
    xe || await n.table(zt).update(ie.id, {
      children: [...ie.children, { id: oe.id, tagName: oe.tagName }]
    }), L || (oe.parent = {
      id: ie.id,
      tagName: ie.tagName
    }, await n.table(zt).update(oe.id, { parent: oe.parent }));
  }
  async function C(ie) {
    let xe = (await Te("Private", {
      name: "type",
      value: "eIEC61850-6-100"
    })).find((L) => L.parent?.id === ie.id);
    if (!xe) {
      const L = {
        tagName: "Private",
        attributes: [{ name: "type", value: "eIEC61850-6-100" }],
        parent: null,
        namespace: ha.default,
        value: "",
        children: []
      };
      xe = await l(L), await v(ie, xe);
    }
    return xe;
  }
  async function D(ie, oe) {
    oe.parent = null, await a(oe), ie.children && (ie.children = ie.children.filter((xe) => xe.id !== oe.id), await a(ie));
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
    const oe = ie.attributes?.find((xe) => xe.name === "uuid");
    if (oe)
      return oe.value;
  }
  function he(ie) {
    ie.attributes || (ie.attributes = []);
    const oe = crypto.randomUUID(), xe = ie.attributes.findIndex((it) => it.name === "uuid");
    xe >= 0 ? ie.attributes[xe].value = oe : ie.attributes.push({ name: "uuid", value: oe });
  }
  async function de(ie, oe) {
    return fh(n, ie, oe);
  }
  async function Te(ie, oe) {
    return dh(n, ie, oe);
  }
  async function ae(ie) {
    return ie.children?.length ? await n.table(zt).where({ "parent.id": ie.id }).toArray() : [];
  }
  async function ye(ie, oe) {
    return (await ae(ie)).filter((L) => oe.includes(L.tagName));
  }
  async function pe(ie, oe = ke, xe = []) {
    const L = [];
    let it = [ie];
    for (let rt = 0; rt < oe; rt++) {
      const Ne = [];
      for (const Ge of it) {
        const At = await ye(Ge, xe);
        At.length !== 0 && (Ne.push(...At), L.push(...At));
      }
      it = [...Ne];
    }
    return L;
  }
  function je() {
    n.close();
  }
}
async function fh(n, i, a) {
  try {
    return await n.table(zt).where({ tagName: i }).filter(
      (l) => !!l.attributes?.some((d) => d.name === a.name && d.value === a.value)
    ).first();
  } catch (u) {
    console.error({ msg: "could not find record by attribute", tagName: i, attr: a, err: u });
  }
}
async function dh(n, i, a) {
  try {
    return await n.table(zt).where({ tagName: i }).filter(
      (l) => !!l.attributes?.some((d) => d.name === a.name && d.value === a.value)
    ).toArray();
  } catch (u) {
    console.error({ msg: "could not find record by attribute", tagName: i, attr: a, err: u });
  }
  return [];
}
const ph = zi("");
function jc() {
  return ph;
}
var Us = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hh(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var xo = { exports: {} }, mh = xo.exports, pu;
function yh() {
  return pu || (pu = 1, function(n, i) {
    (function(a, u) {
      n.exports = u();
    })(mh, function() {
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
      var d = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Us, v = Object.keys, C = Array.isArray;
      function D(e, t) {
        return typeof t != "object" || v(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || d.Promise || (d.Promise = Promise);
      var W = Object.getPrototypeOf, B = {}.hasOwnProperty;
      function G(e, t) {
        return B.call(e, t);
      }
      function re(e, t) {
        typeof t == "function" && (t = t(W(e))), (typeof Reflect > "u" ? v : Reflect.ownKeys)(t).forEach(function(r) {
          he(e, r, t[r]);
        });
      }
      var se = Object.defineProperty;
      function he(e, t, r, o) {
        se(e, t, D(r && G(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function de(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), he(e.prototype, "constructor", e), { extend: re.bind(null, e.prototype) };
        } };
      }
      var Te = Object.getOwnPropertyDescriptor, ae = [].slice;
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
          p !== -1 ? (c = t.substr(0, p), (f = t.substr(p + 1)) === "" ? r === void 0 ? C(e) && !isNaN(parseInt(c)) ? e.splice(c, 1) : delete e[c] : e[c] = r : oe(p = !(p = e[c]) || !G(e, c) ? e[c] = {} : p, f, r)) : r === void 0 ? C(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function xe(e) {
        var t, r = {};
        for (t in e) G(e, t) && (r[t] = e[t]);
        return r;
      }
      var L = [].concat;
      function it(e) {
        return L.apply([], e);
      }
      var Ie = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(it([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return d[e];
      }), rt = new Set(Ie.map(function(e) {
        return d[e];
      })), Ne = null;
      function Ge(e) {
        return Ne = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var o = Ne.get(r);
          if (o) return o;
          if (C(r)) {
            o = [], Ne.set(r, o);
            for (var s = 0, c = r.length; s < c; ++s) o.push(t(r[s]));
          } else if (rt.has(r.constructor)) o = r;
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
      var Ve = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", be = typeof Ve == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Ve]) && t.apply(e);
      } : function() {
        return null;
      };
      function Oe(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var et = {};
      function ze(e) {
        var t, r, o, s;
        if (arguments.length === 1) {
          if (C(e)) return e.slice();
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
      }, Ce = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], dt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Ce), ot = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
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
      var O = dt.reduce(function(e, t) {
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
      var $ = Ce.reduce(function(e, t) {
        return e[t + "Error"] = j[t], e;
      }, {}), De = dt.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = j[t]), e;
      }, {});
      function A() {
      }
      function F(e) {
        return e;
      }
      function Z(e, t) {
        return e == null || e === F ? t : function(r) {
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
      function M(e, t) {
        return e === A ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? I(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? I(o, this.onerror) : o);
        };
      }
      function U(e, t) {
        return e === A ? t : function(r) {
          var o = e.apply(this, arguments);
          D(r, o);
          var s = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? I(s, this.onsuccess) : s), c && (this.onerror = this.onerror ? I(c, this.onerror) : c), o === void 0 ? r === void 0 ? void 0 : r : D(o, r);
        };
      }
      function K(e, t) {
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
      var ce = {}, Se = 100, Ie = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, W(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, W(t), e];
      }(), Ce = Ie[0], dt = Ie[1], Ie = Ie[2], dt = dt && dt.then, Ke = Ce && Ce.constructor, Le = !!Ie, ut = function(e, t) {
        tn.push([e, t]), _t && (queueMicrotask(Uo), _t = !1);
      }, mt = !0, _t = !0, ct = [], $t = [], Tn = F, Je = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: A, pgp: !1, env: {}, finalize: A }, ne = Je, tn = [], Ut = 0, Rn = [];
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
        var e = ne, t = Fn;
        function r(o, s) {
          var c = this, f = !e.global && (e !== ne || t !== Fn), p = f && !Dt(), m = new J(function(g, _) {
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
        $t.push(t), e._state === null && (r = e._lib && on(), t = Tn(t), e._state = !1, e._value = t, o = e, ct.some(function(s) {
          return s._value === o._value;
        }) || ct.push(o), di(e), r && sn());
      }
      function di(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var r = 0, o = t.length; r < o; ++r) wr(e, t[r]);
        var s = e._PSD;
        --s.ref || s.finalize(), Ut === 0 && (++Ut, ut(function() {
          --Ut == 0 && _r();
        }, []));
      }
      function wr(e, t) {
        if (e._state !== null) {
          var r = e._state ? t.onFulfilled : t.onRejected;
          if (r === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++Ut, ut($o, [r, e, t]);
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
          --Ut == 0 && _r(), --r.psd.ref || r.psd.finalize();
        }
      }
      function Uo() {
        Vt(Je, function() {
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
      function Pe(e, t) {
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
            return s(new j.Timeout(t));
          }, e);
          r.then(o, s).finally(clearTimeout.bind(null, c));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && he(J.prototype, Symbol.toStringTag, "Dexie.Promise"), Je.env = pi(), re(J, { all: function() {
        var e = ze.apply(null, arguments).map(Kn);
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
        var e = ze.apply(null, arguments).map(Kn);
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
        return Fn;
      } }, newPSD: Pt, usePSD: Vt, scheduler: { get: function() {
        return ut;
      }, set: function(e) {
        ut = e;
      } }, rejectionMapper: { get: function() {
        return Tn;
      }, set: function(e) {
        Tn = e;
      } }, follow: function(e, t) {
        return new J(function(r, o) {
          return Pt(function(s, c) {
            var f = ne;
            f.unhandleds = [], f.onunhandled = c, f.finalize = I(function() {
              var p, m = this;
              p = function() {
                m.unhandleds.length === 0 ? s() : c(m.unhandleds[0]);
              }, Rn.push(function g() {
                p(), Rn.splice(Rn.indexOf(g), 1);
              }), ++Ut, ut(function() {
                --Ut == 0 && _r();
              }, []);
            }, f.finalize), e();
          }, t, r, o);
        });
      } }), Ke && (Ke.allSettled && he(J, "allSettled", function() {
        var e = ze.apply(null, arguments).map(Kn);
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
      }), Ke.any && typeof AggregateError < "u" && he(J, "any", function() {
        var e = ze.apply(null, arguments).map(Kn);
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
      }), Ke.withResolvers && (J.withResolvers = Ke.withResolvers));
      var $e = { awaits: 0, echoes: 0, id: 0 }, Vo = 0, jn = [], Mn = 0, Fn = 0, Go = 0;
      function Pt(e, t, r, o) {
        var s = ne, c = Object.create(s);
        return c.parent = s, c.ref = 0, c.global = !1, c.id = ++Go, Je.env, c.env = Le ? { Promise: J, PromiseProp: { value: J, configurable: !0, writable: !0 }, all: J.all, race: J.race, allSettled: J.allSettled, any: J.any, resolve: J.resolve, reject: J.reject } : {}, t && D(c, t), ++s.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = Vt(c, e, r, o), c.ref === 0 && c.finalize(), o;
      }
      function an() {
        return $e.id || ($e.id = ++Vo), ++$e.awaits, $e.echoes += Se, $e.id;
      }
      function Dt() {
        return !!$e.awaits && (--$e.awaits == 0 && ($e.id = 0), $e.echoes = $e.awaits * Se, !0);
      }
      function Kn(e) {
        return $e.echoes && e && e.constructor === Ke ? (an(), e.then(function(t) {
          return Dt(), t;
        }, function(t) {
          return Dt(), Me(t);
        })) : e;
      }
      function Ho() {
        var e = jn[jn.length - 1];
        jn.pop(), Nt(e, !1);
      }
      function Nt(e, t) {
        var r, o = ne;
        (t ? !$e.echoes || Mn++ && e === ne : !Mn || --Mn && e === ne) || queueMicrotask(t ? (function(s) {
          ++Fn, $e.echoes && --$e.echoes != 0 || ($e.echoes = $e.awaits = $e.id = 0), jn.push(ne), Nt(s, !0);
        }).bind(null, e) : Ho), e !== ne && (ne = e, o === Je && (Je.env = pi()), Le && (r = Je.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(d, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function pi() {
        var e = d.Promise;
        return Le ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(d, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Vt(e, t, r, o, s) {
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
      function Er(e) {
        Promise === Ke && $e.echoes === 0 ? Mn === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + dt).indexOf("[native code]") === -1 && (an = Dt = A);
      var Me = J.reject, Gt = "￿", St = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", mi = "String expected.", un = [], Bn = "__dbnames", Sr = "readonly", xr = "readwrite";
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
      var wi = (Ae.prototype._trans = function(e, t, r) {
        var o = this._tx || ne.trans, s = this.name, c = Q && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function f(g, _, h) {
          if (!h.schema[s]) throw new j.NotFound("Table " + s + " not part of transaction");
          return t(h.idbtrans, h);
        }
        var p = on();
        try {
          var m = o && o.db._novip === this.db._novip ? o === ne.trans ? o._promise(e, f, r) : Pt(function() {
            return o._promise(e, f, r);
          }, { trans: o, transless: ne.transless || ne }) : function g(_, h, x, y) {
            if (_.idbdb && (_._state.openComplete || ne.letThrough || _._vip)) {
              var b = _._createTransaction(h, x, _._dbSchema);
              try {
                b.create(), _._state.PR1398_maxLoop = 3;
              } catch (S) {
                return S.name === O.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                  return g(_, h, x, y);
                })) : Me(S);
              }
              return b._promise(h, function(S, E) {
                return Pt(function() {
                  return ne.trans = b, y(S, E, b);
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
            if (_._state.openComplete) return Me(new j.DatabaseClosed(_._state.dbOpenError));
            if (!_._state.isBeingOpened) {
              if (!_._state.autoOpen) return Me(new j.DatabaseClosed());
              _.open().catch(A);
            }
            return _._state.dbReadyPromise.then(function() {
              return g(_, h, x, y);
            });
          }(this.db, e, [this.name], f);
          return c && (m._consoleTask = c, m = m.catch(function(g) {
            return console.trace(g), Me(g);
          })), m;
        } finally {
          p && sn();
        }
      }, Ae.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? Me(new j.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(s) {
            return r.hook.reading.fire(s);
          });
        }).then(t);
      }, Ae.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (C(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
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
          var g = h[0], _ = h[1], h = o[m], x = e[m];
          return [g || h, g || !h ? Ht(_, h && h.multi ? function(y) {
            return y = ie(y, m), C(y) && y.some(function(b) {
              return s(x, b);
            });
          } : function(y) {
            return s(x, ie(y, m));
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
        return new this.db.Collection(new this.db.WhereClause(this, C(e) ? "[".concat(e.join("+"), "]") : e));
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
        return typeof e != "object" || C(e) ? this.where(":id").equals(e).modify(t) : (e = ie(e, this.schema.primKey.keyPath), e === void 0 ? Me(new j.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
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
            return Ln(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? J.reject(o.failures[0]) : void 0;
          });
        });
      }, Ae.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: yi }).then(function(r) {
            return Ln(e, null, r);
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
          var m = e.length, g = g && p ? e.map(qn(g)) : e;
          return o.core.mutate({ trans: f, type: "add", keys: s, values: g, wantResults: c }).then(function(b) {
            var h = b.numFailures, x = b.results, y = b.lastResult, b = b.failures;
            if (h === 0) return c ? x : y;
            throw new pt("".concat(o.name, ".bulkAdd(): ").concat(h, " of ").concat(m, " operations failed"), b);
          });
        });
      }, Ae.prototype.bulkPut = function(e, t, r) {
        var o = this, s = Array.isArray(t) ? t : void 0, c = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(f) {
          var g = o.schema.primKey, p = g.auto, g = g.keyPath;
          if (g && s) throw new j.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new j.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, g = g && p ? e.map(qn(g)) : e;
          return o.core.mutate({ trans: f, type: "put", keys: s, values: g, wantResults: c }).then(function(b) {
            var h = b.numFailures, x = b.results, y = b.lastResult, b = b.failures;
            if (h === 0) return c ? x : y;
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
            e.forEach(function(h, x) {
              var y = h.key, b = h.changes, S = p[x];
              if (S) {
                for (var E = 0, T = Object.keys(b); E < T.length; E++) {
                  var P = T[E], N = b[P];
                  if (P === t.schema.primKey.keyPath) {
                    if (ve(N, y) !== 0) throw new j.Constraint("Cannot update primary key in bulkUpdate()");
                  } else oe(S, P, N);
                }
                c.push(x), m.push(y), g.push(S);
              }
            });
            var _ = m.length;
            return r.mutate({ trans: f, type: "put", keys: m, values: g, updates: { keys: o, changeSpecs: s } }).then(function(h) {
              var x = h.numFailures, y = h.failures;
              if (x === 0) return _;
              for (var b = 0, S = Object.keys(y); b < S.length; b++) {
                var E, T = S[b], P = c[Number(T)];
                P != null && (E = y[T], delete y[T], y[P] = E);
              }
              throw new pt("".concat(t.name, ".bulkUpdate(): ").concat(x, " of ").concat(_, " operations failed"), y);
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
            p = p || K;
            var _ = { subscribers: [], fire: m = m || A, subscribe: function(h) {
              _.subscribers.indexOf(h) === -1 && (_.subscribers.push(h), _.fire = p(_.fire, h));
            }, unsubscribe: function(h) {
              _.subscribers = _.subscribers.filter(function(x) {
                return x !== h;
              }), _.fire = _.subscribers.reduce(p, m);
            } };
            return r[f] = t[f] = _;
          }
          v(g = f).forEach(function(h) {
            var x = g[h];
            if (C(x)) c(h, g[h][0], g[h][1]);
            else {
              if (x !== "asap") throw new j.InvalidArgument("Invalid event config");
              var y = c(h, F, function() {
                for (var b = arguments.length, S = new Array(b); b--; ) S[b] = arguments[b];
                y.subscribers.forEach(function(E) {
                  je(function() {
                    E.apply(null, S);
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
      function Cr(e, t) {
        e.filter = Ht(e.filter, t);
      }
      function Tr(e, t, r) {
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
      function Un(e, t, r, o) {
        var s = e.replayFilter ? Ht(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var c = {}, f = function(p, m, g) {
            var _, h;
            s && !s(m, g, function(x) {
              return m.stop(x);
            }, function(x) {
              return m.fail(x);
            }) || ((h = "" + (_ = m.primaryKey)) == "[object ArrayBuffer]" && (h = "" + new Uint8Array(_)), G(c, h) || (c[h] = !0, t(p, m, g)));
          };
          return Promise.all([e.or._iterate(f, r), Ei(_i(e, o, r), e.algorithm, f, !e.keysOnly && e.valueMapper)]);
        }
        return Ei(_i(e, o, r), Ht(e.algorithm, s), t, !e.keysOnly && e.valueMapper);
      }
      function Ei(e, t, r, o) {
        var s = Pe(o ? function(c, f, p) {
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
      var vn = (Si.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var r = t.add;
          if (C(r)) return l(l([], C(e) ? e : [], !0), r).sort();
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
          if (C(o)) return C(e) ? e.filter(function(s) {
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
      var Wo = (we.prototype._read = function(e, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, Me.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, we.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, Me.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, we.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Ht(t.algorithm, e);
      }, we.prototype._iterate = function(e, t) {
        return Un(this._ctx, e, t, this._ctx.table.core);
      }, we.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && D(r, e), t._ctx = r, t;
      }, we.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, we.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(r) {
          return Un(t, e, r, t.table.core);
        });
      }, we.prototype.count = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx, s = o.table.core;
          if (cn(o, !0)) return s.count({ trans: r, query: { index: $n(o, s.schema), range: o.range } }).then(function(f) {
            return Math.min(f, o.limit);
          });
          var c = 0;
          return Un(o, function() {
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
          return Un(o, function(p) {
            return f.push(p);
          }, r, o.table.core).then(function() {
            return f;
          });
        }, e);
      }, we.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, cn(t) ? Tr(t, function() {
          var r = e;
          return function(o, s) {
            return r === 0 || (r === 1 ? --r : s(function() {
              o.advance(r), r = 0;
            }), !1);
          };
        }) : Tr(t, function() {
          var r = e;
          return function() {
            return --r < 0;
          };
        })), this;
      }, we.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Tr(this._ctx, function() {
          var t = e;
          return function(r, o, s) {
            return --t <= 0 && o(s), 0 <= t;
          };
        }, !0), this;
      }, we.prototype.until = function(e, t) {
        return Cr(this._ctx, function(r, o, s) {
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
        return Cr(this._ctx, function(r) {
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
        return Cr(this._ctx, function(s) {
          var o = s.primaryKey.toString(), s = G(t, o);
          return t[o] = !0, !s;
        }), this;
      }, we.prototype.modify = function(e) {
        var t = this, r = this._ctx;
        return this._write(function(o) {
          var s, c, f;
          f = typeof e == "function" ? e : (s = v(e), c = s.length, function(T) {
            for (var P = !1, N = 0; N < c; ++N) {
              var R = s[N], q = e[R], Y = ie(T, R);
              q instanceof vn ? (oe(T, R, q.execute(Y)), P = !0) : Y !== q && (oe(T, R, q), P = !0);
            }
            return P;
          });
          var p = r.table.core, h = p.schema.primaryKey, m = h.outbound, g = h.extractKey, _ = 200, h = t.db._options.modifyChunkSize;
          h && (_ = typeof h == "object" ? h[p.name] || h["*"] || 200 : h);
          function x(T, R) {
            var N = R.failures, R = R.numFailures;
            b += T - R;
            for (var q = 0, Y = v(N); q < Y.length; q++) {
              var V = Y[q];
              y.push(N[V]);
            }
          }
          var y = [], b = 0, S = [], E = e === xi;
          return t.clone().primaryKeys().then(function(T) {
            function P(R) {
              var q = Math.min(_, T.length - R), Y = T.slice(R, R + q);
              return (E ? Promise.resolve([]) : p.getMany({ trans: o, keys: Y, cache: "immutable" })).then(function(V) {
                var H = [], z = [], X = m ? [] : null, ee = E ? Y : [];
                if (!E) for (var fe = 0; fe < q; ++fe) {
                  var ge = V[fe], le = { value: Ge(ge), primKey: T[R + fe] };
                  f.call(le, le.value, le) !== !1 && (le.value == null ? ee.push(T[R + fe]) : m || ve(g(ge), g(le.value)) === 0 ? (z.push(le.value), m && X.push(T[R + fe])) : (ee.push(T[R + fe]), H.push(le.value)));
                }
                return Promise.resolve(0 < H.length && p.mutate({ trans: o, type: "add", values: H }).then(function(Re) {
                  for (var ue in Re.failures) ee.splice(parseInt(ue), 1);
                  x(H.length, Re);
                })).then(function() {
                  return (0 < z.length || N && typeof e == "object") && p.mutate({ trans: o, type: "put", keys: X, values: z, criteria: N, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < R }).then(function(Re) {
                    return x(z.length, Re);
                  });
                }).then(function() {
                  return (0 < ee.length || N && E) && p.mutate({ trans: o, type: "delete", keys: ee, criteria: N, isAdditionalChunk: 0 < R }).then(function(Re) {
                    return Ln(r.table, ee, Re);
                  }).then(function(Re) {
                    return x(ee.length, Re);
                  });
                }).then(function() {
                  return T.length > R + q && P(R + _);
                });
              });
            }
            var N = cn(r) && r.limit === 1 / 0 && (typeof e != "function" || E) && { index: r.index, range: r.range };
            return P(0).then(function() {
              if (0 < y.length) throw new It("Error modifying one or more objects", y, b, S);
              return T.length;
            });
          });
        });
      }, we.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !cn(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(xi) : this._write(function(r) {
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
      var xi = function(e, t) {
        return t.value = null;
      };
      function Yo(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function Qo(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function st(e, t, r) {
        return e = e instanceof Ti ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function ln(e) {
        return new e.Collection(e, function() {
          return Ci("");
        }).limit(0);
      }
      function Vn(e, t, r, o) {
        var s, c, f, p, m, g, _, h = r.length;
        if (!r.every(function(b) {
          return typeof b == "string";
        })) return st(e, mi);
        function x(b) {
          s = b === "next" ? function(E) {
            return E.toUpperCase();
          } : function(E) {
            return E.toLowerCase();
          }, c = b === "next" ? function(E) {
            return E.toLowerCase();
          } : function(E) {
            return E.toUpperCase();
          }, f = b === "next" ? Yo : Qo;
          var S = r.map(function(E) {
            return { lower: c(E), upper: s(E) };
          }).sort(function(E, T) {
            return f(E.lower, T.lower);
          });
          p = S.map(function(E) {
            return E.upper;
          }), m = S.map(function(E) {
            return E.lower;
          }), _ = (g = b) === "next" ? "" : o;
        }
        x("next"), e = new e.Collection(e, function() {
          return Rt(p[0], m[h - 1] + o);
        }), e._ondirectionchange = function(b) {
          x(b);
        };
        var y = 0;
        return e._addAlgorithm(function(b, S, E) {
          var T = b.key;
          if (typeof T != "string") return !1;
          var P = c(T);
          if (t(P, m, y)) return !0;
          for (var N = null, R = y; R < h; ++R) {
            var q = function(Y, V, H, z, X, ee) {
              for (var fe = Math.min(Y.length, z.length), ge = -1, le = 0; le < fe; ++le) {
                var Re = V[le];
                if (Re !== z[le]) return X(Y[le], H[le]) < 0 ? Y.substr(0, le) + H[le] + H.substr(le + 1) : X(Y[le], z[le]) < 0 ? Y.substr(0, le) + z[le] + H.substr(le + 1) : 0 <= ge ? Y.substr(0, ge) + V[ge] + H.substr(ge + 1) : null;
                X(Y[le], Re) < 0 && (ge = le);
              }
              return fe < z.length && ee === "next" ? Y + H.substr(Y.length) : fe < Y.length && ee === "prev" ? Y.substr(0, H.length) : ge < 0 ? null : Y.substr(0, ge) + z[ge] + H.substr(ge + 1);
            }(T, P, p[R], m[R], f, g);
            q === null && N === null ? y = R + 1 : (N === null || 0 < f(N, q)) && (N = q);
          }
          return S(N !== null ? function() {
            b.continue(N + _);
          } : E), !1;
        }), e;
      }
      function Rt(e, t, r, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: o };
      }
      function Ci(e) {
        return { type: 1, lower: e, upper: e };
      }
      var Ti = (Object.defineProperty(Ue.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Ue.prototype.between = function(e, t, r, o) {
        r = r !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || o) && (!r || !o) ? ln(this) : new this.Collection(this, function() {
            return Rt(e, t, !r, !o);
          });
        } catch {
          return st(this, St);
        }
      }, Ue.prototype.equals = function(e) {
        return e == null ? st(this, St) : new this.Collection(this, function() {
          return Ci(e);
        });
      }, Ue.prototype.above = function(e) {
        return e == null ? st(this, St) : new this.Collection(this, function() {
          return Rt(e, void 0, !0);
        });
      }, Ue.prototype.aboveOrEqual = function(e) {
        return e == null ? st(this, St) : new this.Collection(this, function() {
          return Rt(e, void 0, !1);
        });
      }, Ue.prototype.below = function(e) {
        return e == null ? st(this, St) : new this.Collection(this, function() {
          return Rt(void 0, e, !1, !0);
        });
      }, Ue.prototype.belowOrEqual = function(e) {
        return e == null ? st(this, St) : new this.Collection(this, function() {
          return Rt(void 0, e);
        });
      }, Ue.prototype.startsWith = function(e) {
        return typeof e != "string" ? st(this, mi) : this.between(e, e + Gt, !0, !0);
      }, Ue.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Vn(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], Gt);
      }, Ue.prototype.equalsIgnoreCase = function(e) {
        return Vn(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, Ue.prototype.anyOfIgnoreCase = function() {
        var e = ze.apply(et, arguments);
        return e.length === 0 ? ln(this) : Vn(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, Ue.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = ze.apply(et, arguments);
        return e.length === 0 ? ln(this) : Vn(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, Gt);
      }, Ue.prototype.anyOf = function() {
        var e = this, t = ze.apply(et, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return st(this, St);
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
      }, Ue.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Ue.prototype.noneOf = function() {
        var e = ze.apply(et, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return st(this, St);
        }
        var t = e.reduce(function(r, o) {
          return r ? r.concat([[r[r.length - 1][1], o]]) : [[-1 / 0, o]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, Ue.prototype.inAnyRange = function(T, t) {
        var r = this, o = this._cmp, s = this._ascending, c = this._descending, f = this._min, p = this._max;
        if (T.length === 0) return ln(this);
        if (!T.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && s(P[0], P[1]) <= 0;
        })) return st(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", j.InvalidArgument);
        var m = !t || t.includeLowers !== !1, g = t && t.includeUppers === !0, _, h = s;
        function x(P, N) {
          return h(P[0], N[0]);
        }
        try {
          (_ = T.reduce(function(P, N) {
            for (var R = 0, q = P.length; R < q; ++R) {
              var Y = P[R];
              if (o(N[0], Y[1]) < 0 && 0 < o(N[1], Y[0])) {
                Y[0] = f(Y[0], N[0]), Y[1] = p(Y[1], N[1]);
                break;
              }
            }
            return R === q && P.push(N), P;
          }, [])).sort(x);
        } catch {
          return st(this, St);
        }
        var y = 0, b = g ? function(P) {
          return 0 < s(P, _[y][1]);
        } : function(P) {
          return 0 <= s(P, _[y][1]);
        }, S = m ? function(P) {
          return 0 < c(P, _[y][0]);
        } : function(P) {
          return 0 <= c(P, _[y][0]);
        }, E = b, T = new this.Collection(this, function() {
          return Rt(_[0][0], _[_.length - 1][1], !m, !g);
        });
        return T._ondirectionchange = function(P) {
          h = P === "next" ? (E = b, s) : (E = S, c), _.sort(x);
        }, T._addAlgorithm(function(P, N, R) {
          for (var q, Y = P.key; E(Y); ) if (++y === _.length) return N(R), !1;
          return !b(q = Y) && !S(q) || (r._cmp(Y, _[y][1]) === 0 || r._cmp(Y, _[y][0]) === 0 || N(function() {
            h === s ? P.continue(_[y][0]) : P.continue(_[y][1]);
          }), !1);
        }), T;
      }, Ue.prototype.startsWithAnyOf = function() {
        var e = ze.apply(et, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? ln(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + Gt];
        })) : st(this, "startsWithAnyOf() only works with strings");
      }, Ue);
      function Ue() {
      }
      function yt(e) {
        return Pe(function(t) {
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
            Vt(e[1], e[0]);
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
        return pe(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Pe(function(s) {
          gn(s), t._reject(e.error);
        }), e.onabort = Pe(function(s) {
          gn(s), t.active && t._reject(new j.Abort(e.error)), t.active = !1, t.on("abort").fire(s);
        }), e.oncomplete = Pe(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && kt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, vt.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Me(new j.ReadOnly("Transaction is readonly"));
        if (!this.active) return Me(new j.TransactionInactive());
        if (this._locked()) return new J(function(c, f) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, r).then(c, f);
          }, ne]);
        });
        if (r) return Pt(function() {
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
            return r._waitingQueue.push(Pe(c.bind(null, p)));
          }, function(p) {
            return r._waitingQueue.push(Pe(f.bind(null, p)));
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
      function Or(e, t, r, o, s, c, f, p) {
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
      function Pr(e) {
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
      function Oi(e) {
        return [].slice.call(e);
      }
      var zo = 0;
      function _n(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Jo(e, t, m) {
        function o(E) {
          if (E.type === 3) return null;
          if (E.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var y = E.lower, b = E.upper, S = E.lowerOpen, E = E.upperOpen;
          return y === void 0 ? b === void 0 ? null : t.upperBound(b, !!E) : b === void 0 ? t.lowerBound(y, !!S) : t.bound(y, b, !!S, !!E);
        }
        function s(x) {
          var y, b = x.name;
          return { name: b, schema: x, mutate: function(S) {
            var E = S.trans, T = S.type, P = S.keys, N = S.values, R = S.range;
            return new Promise(function(q, Y) {
              q = Pe(q);
              var V = E.objectStore(b), H = V.keyPath == null, z = T === "put" || T === "add";
              if (!z && T !== "delete" && T !== "deleteRange") throw new Error("Invalid operation type: " + T);
              var X, ee = (P || N || { length: 1 }).length;
              if (P && N && P.length !== N.length) throw new Error("Given keys array must have same length as given values array.");
              if (ee === 0) return q({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function fe(Ze) {
                ++Re, gn(Ze);
              }
              var ge = [], le = [], Re = 0;
              if (T === "deleteRange") {
                if (R.type === 4) return q({ numFailures: Re, failures: le, results: [], lastResult: void 0 });
                R.type === 3 ? ge.push(X = V.clear()) : ge.push(X = V.delete(o(R)));
              } else {
                var H = z ? H ? [N, P] : [N, null] : [P, null], ue = H[0], We = H[1];
                if (z) for (var Ye = 0; Ye < ee; ++Ye) ge.push(X = We && We[Ye] !== void 0 ? V[T](ue[Ye], We[Ye]) : V[T](ue[Ye])), X.onerror = fe;
                else for (Ye = 0; Ye < ee; ++Ye) ge.push(X = V[T](ue[Ye])), X.onerror = fe;
              }
              function nr(Ze) {
                Ze = Ze.target.result, ge.forEach(function(Qt, Yr) {
                  return Qt.error != null && (le[Yr] = Qt.error);
                }), q({ numFailures: Re, failures: le, results: T === "delete" ? P : ge.map(function(Qt) {
                  return Qt.result;
                }), lastResult: Ze });
              }
              X.onerror = function(Ze) {
                fe(Ze), nr(Ze);
              }, X.onsuccess = nr;
            });
          }, getMany: function(S) {
            var E = S.trans, T = S.keys;
            return new Promise(function(P, N) {
              P = Pe(P);
              for (var R, q = E.objectStore(b), Y = T.length, V = new Array(Y), H = 0, z = 0, X = function(ge) {
                ge = ge.target, V[ge._pos] = ge.result, ++z === H && P(V);
              }, ee = yt(N), fe = 0; fe < Y; ++fe) T[fe] != null && ((R = q.get(T[fe]))._pos = fe, R.onsuccess = X, R.onerror = ee, ++H);
              H === 0 && P(V);
            });
          }, get: function(S) {
            var E = S.trans, T = S.key;
            return new Promise(function(P, N) {
              P = Pe(P);
              var R = E.objectStore(b).get(T);
              R.onsuccess = function(q) {
                return P(q.target.result);
              }, R.onerror = yt(N);
            });
          }, query: (y = g, function(S) {
            return new Promise(function(E, T) {
              E = Pe(E);
              var P, N, R, H = S.trans, q = S.values, Y = S.limit, X = S.query, V = Y === 1 / 0 ? void 0 : Y, z = X.index, X = X.range, H = H.objectStore(b), z = z.isPrimaryKey ? H : H.index(z.name), X = o(X);
              if (Y === 0) return E({ result: [] });
              y ? ((V = q ? z.getAll(X, V) : z.getAllKeys(X, V)).onsuccess = function(ee) {
                return E({ result: ee.target.result });
              }, V.onerror = yt(T)) : (P = 0, N = !q && "openKeyCursor" in z ? z.openKeyCursor(X) : z.openCursor(X), R = [], N.onsuccess = function(ee) {
                var fe = N.result;
                return fe ? (R.push(q ? fe.value : fe.primaryKey), ++P === Y ? E({ result: R }) : void fe.continue()) : E({ result: R });
              }, N.onerror = yt(T));
            });
          }), openCursor: function(S) {
            var E = S.trans, T = S.values, P = S.query, N = S.reverse, R = S.unique;
            return new Promise(function(q, Y) {
              q = Pe(q);
              var z = P.index, V = P.range, H = E.objectStore(b), H = z.isPrimaryKey ? H : H.index(z.name), z = N ? R ? "prevunique" : "prev" : R ? "nextunique" : "next", X = !T && "openKeyCursor" in H ? H.openKeyCursor(o(V), z) : H.openCursor(o(V), z);
              X.onerror = yt(Y), X.onsuccess = Pe(function(ee) {
                var fe, ge, le, Re, ue = X.result;
                ue ? (ue.___id = ++zo, ue.done = !1, fe = ue.continue.bind(ue), ge = (ge = ue.continuePrimaryKey) && ge.bind(ue), le = ue.advance.bind(ue), Re = function() {
                  throw new Error("Cursor not stopped");
                }, ue.trans = E, ue.stop = ue.continue = ue.continuePrimaryKey = ue.advance = function() {
                  throw new Error("Cursor not started");
                }, ue.fail = Pe(Y), ue.next = function() {
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
                    Ze = Pe(Ze), X.onerror = yt(Qt), ue.fail = Qt, ue.stop = function(Yr) {
                      ue.stop = ue.continue = ue.continuePrimaryKey = ue.advance = Re, Ze(Yr);
                    };
                  });
                  return X.onsuccess = Pe(function(Ze) {
                    X.onsuccess = Ye, Ye();
                  }), ue.continue = fe, ue.continuePrimaryKey = ge, ue.advance = le, Ye(), nr;
                }, q(ue)) : q(null);
              }, Y);
            });
          }, count: function(S) {
            var E = S.query, T = S.trans, P = E.index, N = E.range;
            return new Promise(function(R, q) {
              var Y = T.objectStore(b), V = P.isPrimaryKey ? Y : Y.index(P.name), Y = o(N), V = Y ? V.count(Y) : V.count();
              V.onsuccess = Pe(function(H) {
                return R(H.target.result);
              }), V.onerror = yt(q);
            });
          } };
        }
        var c, f, p, _ = (f = m, p = Oi((c = e).objectStoreNames), { schema: { name: c.name, tables: p.map(function(x) {
          return f.objectStore(x);
        }).map(function(x) {
          var y = x.keyPath, E = x.autoIncrement, b = C(y), S = {}, E = { name: x.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: y == null, compound: b, keyPath: y, autoIncrement: E, unique: !0, extractKey: Pr(y) }, indexes: Oi(x.indexNames).map(function(T) {
            return x.index(T);
          }).map(function(R) {
            var P = R.name, N = R.unique, q = R.multiEntry, R = R.keyPath, q = { name: P, compound: C(R), keyPath: R, unique: N, multiEntry: q, extractKey: Pr(R) };
            return S[_n(R)] = q;
          }), getIndexByKeyPath: function(T) {
            return S[_n(T)];
          } };
          return S[":id"] = E.primaryKey, y != null && (S[_n(y)] = E.primaryKey), E;
        }) }, hasGetAll: 0 < p.length && "getAll" in f.objectStore(p[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), m = _.schema, g = _.hasGetAll, _ = m.tables.map(s), h = {};
        return _.forEach(function(x) {
          return h[x.name] = x;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(x) {
          if (!h[x]) throw new Error("Table '".concat(x, "' not found"));
          return h[x];
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
              return Te(g, _) || (g = W(g)) && m(g, _);
            }(f, s);
            (!p || "value" in p && p.value === void 0) && (f === e.Transaction.prototype || f instanceof e.Transaction ? he(f, s, { get: function() {
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
        r.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = Ir("$meta", Pi("")[0], []), e._storeNames.push("$meta"));
        var c = e._createTransaction("readwrite", e._storeNames, s);
        c.create(r), c._completion.catch(o);
        var f = c._reject.bind(c), p = ne.transless || ne;
        Pt(function() {
          return ne.trans = c, ne.transless = p, t !== 0 ? (Gn(e, r), g = t, ((m = c).storeNames.includes("$meta") ? m.table("$meta").get("version").then(function(_) {
            return _ ?? g;
          }) : J.resolve(g)).then(function(_) {
            return x = _, y = c, b = r, S = [], _ = (h = e)._versions, E = h._dbSchema = Yn(0, h.idbdb, b), (_ = _.filter(function(T) {
              return T._cfg.version >= x;
            })).length !== 0 ? (_.forEach(function(T) {
              S.push(function() {
                var P = E, N = T._cfg.dbschema;
                Qn(h, P, b), Qn(h, N, b), E = h._dbSchema = N;
                var R = Nr(P, N);
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
                var q = T._cfg.contentUpgrade;
                if (q && T._cfg.version > x) {
                  Gn(h, b), y._memoizedTables = {};
                  var Y = xe(N);
                  R.del.forEach(function(z) {
                    Y[z] = P[z];
                  }), Dr(h, [h.Transaction.prototype]), Hn(h, [h.Transaction.prototype], v(Y), Y), y.schema = Y;
                  var V, H = at(q);
                  return H && an(), R = J.follow(function() {
                    var z;
                    (V = q(y)) && H && (z = Dt.bind(null, null), V.then(z, z));
                  }), V && typeof V.then == "function" ? J.resolve(V) : R.then(function() {
                    return V;
                  });
                }
              }), S.push(function(P) {
                var N, R, q = T._cfg.dbschema;
                N = q, R = P, [].slice.call(R.db.objectStoreNames).forEach(function(Y) {
                  return N[Y] == null && R.db.deleteObjectStore(Y);
                }), Dr(h, [h.Transaction.prototype]), Hn(h, [h.Transaction.prototype], h._storeNames, h._dbSchema), y.schema = h._dbSchema;
              }), S.push(function(P) {
                h.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(h.idbdb.version / 10) === T._cfg.version ? (h.idbdb.deleteObjectStore("$meta"), delete h._dbSchema.$meta, h._storeNames = h._storeNames.filter(function(N) {
                  return N !== "$meta";
                })) : P.objectStore("$meta").put(T._cfg.version, "version"));
              });
            }), function T() {
              return S.length ? J.resolve(S.shift()(y.idbtrans)).then(T) : J.resolve();
            }().then(function() {
              Ii(E, b);
            })) : J.resolve();
            var h, x, y, b, S, E;
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
          for (var c = r.objectStore(s), f = Or(Ai(g = c.keyPath), g || "", !0, !1, !!c.autoIncrement, g && typeof g != "string", !0), p = [], m = 0; m < c.indexNames.length; ++m) {
            var _ = c.index(c.indexNames[m]), g = _.keyPath, _ = Or(_.name, g, !!_.unique, !!_.multiEntry, !1, g && typeof g != "string", !1);
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
      function Pi(e) {
        return e.split(",").map(function(t, r) {
          var c = t.split(":"), o = (s = c[1]) === null || s === void 0 ? void 0 : s.trim(), s = (t = c[0].trim()).replace(/([&*]|\+\+)/g, ""), c = /^\[/.test(s) ? s.match(/^\[(.*)\]$/)[1].split("+") : s;
          return Or(s, c || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), C(c), r === 0, o);
        });
      }
      var rs = (fn.prototype._createTableSchema = Ir, fn.prototype._parseIndexSyntax = Pi, fn.prototype._parseStoresSpec = function(e, t) {
        var r = this;
        v(e).forEach(function(o) {
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
        return r || (r = e._dbNamesDB = new xt(Bn, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function jr(e) {
        return e && typeof e.databases == "function";
      }
      function Mr(e) {
        return Pt(function() {
          return ne.letThrough = !0, e();
        });
      }
      function Fr(e) {
        return !("from" in e);
      }
      var He = function(e, t) {
        if (!this) {
          var r = new He();
          return e && "d" in e && D(r, e), r;
        }
        D(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function En(e, t, r) {
        var o = ve(t, r);
        if (!isNaN(o)) {
          if (0 < o) throw RangeError();
          if (Fr(e)) return D(e, { from: t, to: r, d: 1 });
          var s = e.l, o = e.r;
          if (ve(r, e.from) < 0) return s ? En(s, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, Ni(e);
          if (0 < ve(t, e.to)) return o ? En(o, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, Ni(e);
          ve(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < ve(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, s && !e.l && Sn(e, s), o && r && Sn(e, o);
        }
      }
      function Sn(e, t) {
        Fr(t) || function r(o, m) {
          var c = m.from, f = m.to, p = m.l, m = m.r;
          En(o, c, f), p && r(o, p), m && r(o, m);
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
        var t = Fr(e) ? null : { s: 0, n: e };
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
          e[r] ? Sn(e[r], t[r]) : e[r] = function o(s) {
            var c, f, p = {};
            for (c in s) G(s, c) && (f = s[c], p[c] = !f || typeof f != "object" || rt.has(f.constructor) ? f : o(f));
            return p;
          }(t[r]);
        }), e;
      }
      function Kr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && Di(t[r], e[r]);
        });
      }
      re(He.prototype, ((dt = { add: function(e) {
        return Sn(this, e), this;
      }, addKey: function(e) {
        return En(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(r) {
          return En(t, r, r);
        }), this;
      }, hasKey: function(e) {
        var t = Xn(this).next(e).value;
        return t && ve(t.from, e) <= 0 && 0 <= ve(t.to, e);
      } })[Ve] = function() {
        return Xn(this);
      }, dt));
      var Wt = {}, Br = {}, qr = !1;
      function Jn(e) {
        zn(Br, e), qr || (qr = !0, setTimeout(function() {
          qr = !1, Lr(Br, !(Br = {}));
        }, 0));
      }
      function Lr(e, t) {
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
            var x = h[_];
            Kr(t, x.obsSet) ? x.subscribers.forEach(function(E) {
              return r.add(E);
            }) : o && g.push(x);
          }
          o && s.push([m, g]);
        }
        if (o) for (var y = 0, b = s; y < b.length; y++) {
          var S = b[y], m = S[0], g = S[1];
          e.queries.query[m] = g;
        }
      }
      function is(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? Me(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, s = Math.round(10 * e.verno), c = !1;
        function f() {
          if (t.openCanceller !== o) throw new j.DatabaseClosed("db.open() was cancelled");
        }
        function p() {
          return new J(function(x, y) {
            if (f(), !r) throw new j.MissingAPI();
            var b = e.name, S = t.autoSchema || !s ? r.open(b) : r.open(b, s);
            if (!S) throw new j.MissingAPI();
            S.onerror = yt(y), S.onblocked = Pe(e._fireOnBlocked), S.onupgradeneeded = Pe(function(E) {
              var T;
              _ = S.transaction, t.autoSchema && !e._options.allowEmptyDB ? (S.onerror = gn, _.abort(), S.result.close(), (T = r.deleteDatabase(b)).onsuccess = T.onerror = Pe(function() {
                y(new j.NoSuchDatabase("Database ".concat(b, " doesnt exist")));
              })) : (_.onerror = yt(y), E = E.oldVersion > Math.pow(2, 62) ? 0 : E.oldVersion, h = E < 1, e.idbdb = S.result, c && ns(e, _), ts(e, E / 10, _, y));
            }, y), S.onsuccess = Pe(function() {
              _ = null;
              var E, T, P, N, R, q = e.idbdb = S.result, Y = ye(q.objectStoreNames);
              if (0 < Y.length) try {
                var V = q.transaction((N = Y).length === 1 ? N[0] : N, "readonly");
                if (t.autoSchema) T = q, P = V, (E = e).verno = T.version / 10, P = E._dbSchema = Yn(0, T, P), E._storeNames = ye(T.objectStoreNames, 0), Hn(E, [E._allTables], v(P), P);
                else if (Qn(e, e._dbSchema, V), ((R = Nr(Yn(0, (R = e).idbdb, V), R._dbSchema)).add.length || R.change.some(function(H) {
                  return H.add.length || H.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), q.close(), s = q.version + 1, c = !0, x(p());
                Gn(e, V);
              } catch {
              }
              un.push(e), q.onversionchange = Pe(function(H) {
                t.vcFired = !0, e.on("versionchange").fire(H);
              }), q.onclose = Pe(function(H) {
                e.on("close").fire(H);
              }), h && (R = e._deps, V = b, q = R.indexedDB, R = R.IDBKeyRange, jr(q) || V === Bn || kr(q, R).put({ name: V }).catch(A)), x();
            }, y);
          }).catch(function(x) {
            switch (x?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), p();
                break;
              case "VersionError":
                if (0 < s) return s = 0, p();
            }
            return J.reject(x);
          });
        }
        var m, g = t.dbReadyResolve, _ = null, h = !1;
        return J.race([o, (typeof navigator > "u" ? J.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(x) {
          function y() {
            return indexedDB.databases().finally(x);
          }
          m = setInterval(y, 100), y();
        }).finally(function() {
          return clearInterval(m);
        }) : Promise.resolve()).then(p)]).then(function() {
          return f(), t.onReadyBeingFired = [], J.resolve(Mr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function x() {
            if (0 < t.onReadyBeingFired.length) {
              var y = t.onReadyBeingFired.reduce(te, A);
              return t.onReadyBeingFired = [], J.resolve(Mr(function() {
                return y(e.vip);
              })).then(x);
            }
          });
        }).finally(function() {
          t.openCanceller === o && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(x) {
          t.dbOpenError = x;
          try {
            _ && _.abort();
          } catch {
          }
          return o === t.openCanceller && e._close(), Me(x);
        }).finally(function() {
          t.openComplete = !0, g();
        }).then(function() {
          var x;
          return h && (x = {}, e.tables.forEach(function(y) {
            y.schema.indexes.forEach(function(b) {
              b.name && (x["idb://".concat(e.name, "/").concat(y.name, "/").concat(b.name)] = new He(-1 / 0, [[[]]]));
            }), x["idb://".concat(e.name, "/").concat(y.name, "/")] = x["idb://".concat(e.name, "/").concat(y.name, "/:dels")] = new He(-1 / 0, [[[]]]);
          }), kt(bn).fire(x), Lr(x, !0)), e;
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
            return p.done ? m : m && typeof m.then == "function" ? m.then(r, o) : C(m) ? Promise.all(m).then(r, o) : r(m);
          };
        }
        return s(t)();
      }
      function Zn(e, t, r) {
        for (var o = C(e) ? e.slice() : [e], s = 0; s < r; ++s) o.push(t);
        return o;
      }
      var os = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema, s = {}, c = [];
          function f(h, x, y) {
            var b = _n(h), S = s[b] = s[b] || [], E = h == null ? 0 : typeof h == "string" ? 1 : h.length, T = 0 < x, T = u(u({}, y), { name: T ? "".concat(b, "(virtual-from:").concat(y.name, ")") : y.name, lowLevelIndex: y, isVirtual: T, keyTail: x, keyLength: E, extractKey: Pr(h), unique: !T && y.unique });
            return S.push(T), T.isPrimaryKey || c.push(T), 1 < E && f(E === 2 ? h[0] : h.slice(0, E - 1), x + 1, y), S.sort(function(P, N) {
              return P.keyTail - N.keyTail;
            }), T;
          }
          t = f(o.primaryKey.keyPath, 0, o.primaryKey), s[":id"] = [t];
          for (var p = 0, m = o.indexes; p < m.length; p++) {
            var g = m[p];
            f(g.keyPath, 0, g);
          }
          function _(h) {
            var x, y = h.query.index;
            return y.isVirtual ? u(u({}, h), { query: { index: y.lowLevelIndex, range: (x = h.query.range, y = y.keyTail, { type: x.type === 1 ? 2 : x.type, lower: Zn(x.lower, x.lowerOpen ? e.MAX_KEY : e.MIN_KEY, y), lowerOpen: !0, upper: Zn(x.upper, x.upperOpen ? e.MIN_KEY : e.MAX_KEY, y), upperOpen: !0 }) } }) : h;
          }
          return u(u({}, r), { schema: u(u({}, o), { primaryKey: t, indexes: c, getIndexByKeyPath: function(h) {
            return (h = s[_n(h)]) && h[0];
          } }), count: function(h) {
            return r.count(_(h));
          }, query: function(h) {
            return r.query(_(h));
          }, openCursor: function(h) {
            var x = h.query.index, y = x.keyTail, b = x.isVirtual, S = x.keyLength;
            return b ? r.openCursor(_(h)).then(function(T) {
              return T && E(T);
            }) : r.openCursor(h);
            function E(T) {
              return Object.create(T, { continue: { value: function(P) {
                P != null ? T.continue(Zn(P, h.reverse ? e.MAX_KEY : e.MIN_KEY, y)) : h.unique ? T.continue(T.key.slice(0, S).concat(h.reverse ? e.MIN_KEY : e.MAX_KEY, y)) : T.continue();
              } }, continuePrimaryKey: { value: function(P, N) {
                T.continuePrimaryKey(Zn(P, e.MAX_KEY, y), N);
              } }, primaryKey: { get: function() {
                return T.primaryKey;
              } }, key: { get: function() {
                var P = T.key;
                return S === 1 ? P[0] : P.slice(0, S);
              } }, value: { get: function() {
                return T.value;
              } } });
            }
          } });
        } });
      } };
      function Ur(e, t, r, o) {
        return r = r || {}, o = o || "", v(e).forEach(function(s) {
          var c, f, p;
          G(t, s) ? (c = e[s], f = t[s], typeof c == "object" && typeof f == "object" && c && f ? (p = wt(c)) !== wt(f) ? r[o + s] = t[s] : p === "Object" ? Ur(c, f, r, o + s + ".") : c !== f && (r[o + s] = t[s]) : c !== f && (r[o + s] = t[s])) : r[o + s] = void 0;
        }), v(t).forEach(function(s) {
          G(e, s) || (r[o + s] = t[s]);
        }), r;
      }
      function Vr(e, t) {
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
                  return function h(x, y, b) {
                    return r.query({ trans: x, values: !1, query: { index: o, range: y }, limit: b }).then(function(S) {
                      var E = S.result;
                      return _({ type: "delete", keys: E, trans: x }).then(function(T) {
                        return 0 < T.numFailures ? Promise.reject(T.failures[0]) : E.length < b ? { failures: [], numFailures: 0, lastResult: void 0 } : h(x, u(u({}, y), { lower: E[E.length - 1], lowerOpen: !0 }), b);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return r.mutate(s);
            function _(h) {
              var x, y, b, S = ne.trans, E = h.keys || Vr(o, h);
              if (!E) throw new Error("Keys missing");
              return (h = h.type === "add" || h.type === "put" ? u(u({}, h), { keys: E }) : u({}, h)).type !== "delete" && (h.values = l([], h.values)), h.keys && (h.keys = l([], h.keys)), x = r, b = E, ((y = h).type === "add" ? Promise.resolve([]) : x.getMany({ trans: y.trans, keys: b, cache: "immutable" })).then(function(T) {
                var P = E.map(function(N, R) {
                  var q, Y, V, H = T[R], z = { onerror: null, onsuccess: null };
                  return h.type === "delete" ? p.fire.call(z, N, H, S) : h.type === "add" || H === void 0 ? (q = m.fire.call(z, N, h.values[R], S), N == null && q != null && (h.keys[R] = N = q, o.outbound || oe(h.values[R], o.keyPath, N))) : (q = Ur(H, h.values[R]), (Y = g.fire.call(z, q, N, H, S)) && (V = h.values[R], Object.keys(Y).forEach(function(X) {
                    G(V, X) ? V[X] = Y[X] : oe(V, X, Y[X]);
                  }))), z;
                });
                return r.mutate(h).then(function(N) {
                  for (var R = N.failures, q = N.results, Y = N.numFailures, N = N.lastResult, V = 0; V < E.length; ++V) {
                    var H = (q || E)[V], z = P[V];
                    H == null ? z.onerror && z.onerror(R[V]) : z.onsuccess && z.onsuccess(h.type === "put" && T[V] ? h.values[V] : H);
                  }
                  return { failures: R, results: q, numFailures: Y, lastResult: N };
                }).catch(function(N) {
                  return P.forEach(function(R) {
                    return R.onerror && R.onerror(N);
                  }), Promise.reject(N);
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
      function Mi(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Fi(e, t) {
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
          var s = e.table(o), c = s.schema, f = c.primaryKey, h = c.indexes, p = f.extractKey, m = f.outbound, g = f.autoIncrement && h.filter(function(y) {
            return y.compound && y.keyPath.includes(f.keyPath);
          }), _ = u(u({}, s), { mutate: function(y) {
            function b(X) {
              return X = "idb://".concat(t, "/").concat(o, "/").concat(X), N[X] || (N[X] = new He());
            }
            var S, E, T, P = y.trans, N = y.mutatedParts || (y.mutatedParts = {}), R = b(""), q = b(":dels"), Y = y.type, z = y.type === "deleteRange" ? [y.range] : y.type === "delete" ? [y.keys] : y.values.length < 50 ? [Vr(f, y).filter(function(X) {
              return X;
            }), y.values] : [], V = z[0], H = z[1], z = y.trans._cache;
            return C(V) ? (R.addKeys(V), (z = Y === "delete" || V.length === H.length ? ji(V, z) : null) || q.addKeys(V), (z || H) && (S = b, E = z, T = H, c.indexes.forEach(function(X) {
              var ee = S(X.name || "");
              function fe(le) {
                return le != null ? X.extractKey(le) : null;
              }
              function ge(le) {
                return X.multiEntry && C(le) ? le.forEach(function(Re) {
                  return ee.addKey(Re);
                }) : ee.addKey(le);
              }
              (E || T).forEach(function(le, We) {
                var ue = E && fe(E[We]), We = T && fe(T[We]);
                ve(ue, We) !== 0 && (ue != null && ge(ue), We != null && ge(We));
              });
            }))) : V ? (H = { from: (H = V.lower) !== null && H !== void 0 ? H : e.MIN_KEY, to: (H = V.upper) !== null && H !== void 0 ? H : e.MAX_KEY }, q.add(H), R.add(H)) : (R.add(r), q.add(r), c.indexes.forEach(function(X) {
              return b(X.name).add(r);
            })), s.mutate(y).then(function(X) {
              return !V || y.type !== "add" && y.type !== "put" || (R.addKeys(X.results), g && g.forEach(function(ee) {
                for (var fe = y.values.map(function(ue) {
                  return ee.extractKey(ue);
                }), ge = ee.keyPath.findIndex(function(ue) {
                  return ue === f.keyPath;
                }), le = 0, Re = X.results.length; le < Re; ++le) fe[le][ge] = X.results[le];
                b(ee.name).addKeys(fe);
              })), P.mutatedParts = zn(P.mutatedParts || {}, N), X;
            });
          } }), h = function(b) {
            var S = b.query, b = S.index, S = S.range;
            return [b, new He((b = S.lower) !== null && b !== void 0 ? b : e.MIN_KEY, (S = S.upper) !== null && S !== void 0 ? S : e.MAX_KEY)];
          }, x = { get: function(y) {
            return [f, new He(y.key)];
          }, getMany: function(y) {
            return [f, new He().addKeys(y.keys)];
          }, count: h, query: h, openCursor: h };
          return v(x).forEach(function(y) {
            _[y] = function(b) {
              var S = ne.subscr, E = !!S, T = Mi(ne, s) && Fi(y, b) ? b.obsSet = {} : S;
              if (E) {
                var P = function(H) {
                  return H = "idb://".concat(t, "/").concat(o, "/").concat(H), T[H] || (T[H] = new He());
                }, N = P(""), R = P(":dels"), S = x[y](b), E = S[0], S = S[1];
                if ((y === "query" && E.isPrimaryKey && !b.values ? R : P(E.name || "")).add(S), !E.isPrimaryKey) {
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
      function Ki(e, t, r) {
        if (r.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var o = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return r.numFailures === o ? null : (t = u({}, t), C(t.keys) && (t.keys = t.keys.filter(function(s, c) {
          return !(c in r.failures);
        })), "values" in t && C(t.values) && (t.values = t.values.filter(function(s, c) {
          return !(c in r.failures);
        })), t);
      }
      function Gr(e, t) {
        return r = e, ((o = t).lower === void 0 || (o.lowerOpen ? 0 < ve(r, o.lower) : 0 <= ve(r, o.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? ve(e, t.upper) < 0 : ve(e, t.upper) <= 0));
        var r, o;
      }
      function Bi(e, t, x, o, s, c) {
        if (!x || x.length === 0) return e;
        var f = t.query.index, p = f.multiEntry, m = t.query.range, g = o.schema.primaryKey.extractKey, _ = f.extractKey, h = (f.lowLevelIndex || f).extractKey, x = x.reduce(function(y, b) {
          var S = y, E = [];
          if (b.type === "add" || b.type === "put") for (var T = new He(), P = b.values.length - 1; 0 <= P; --P) {
            var N, R = b.values[P], q = g(R);
            T.hasKey(q) || (N = _(R), (p && C(N) ? N.some(function(X) {
              return Gr(X, m);
            }) : Gr(N, m)) && (T.addKey(q), E.push(R)));
          }
          switch (b.type) {
            case "add":
              var Y = new He().addKeys(t.values ? y.map(function(ee) {
                return g(ee);
              }) : y), S = y.concat(t.values ? E.filter(function(ee) {
                return ee = g(ee), !Y.hasKey(ee) && (Y.addKey(ee), !0);
              }) : E.map(function(ee) {
                return g(ee);
              }).filter(function(ee) {
                return !Y.hasKey(ee) && (Y.addKey(ee), !0);
              }));
              break;
            case "put":
              var V = new He().addKeys(b.values.map(function(ee) {
                return g(ee);
              }));
              S = y.filter(function(ee) {
                return !V.hasKey(t.values ? g(ee) : ee);
              }).concat(t.values ? E : E.map(function(ee) {
                return g(ee);
              }));
              break;
            case "delete":
              var H = new He().addKeys(b.keys);
              S = y.filter(function(ee) {
                return !H.hasKey(t.values ? g(ee) : ee);
              });
              break;
            case "deleteRange":
              var z = b.range;
              S = y.filter(function(ee) {
                return !Gr(g(ee), z);
              });
          }
          return S;
        }, e);
        return x === e ? e : (x.sort(function(y, b) {
          return ve(h(y), h(b)) || ve(g(y), g(b));
        }), t.limit && t.limit < 1 / 0 && (x.length > t.limit ? x.length = t.limit : e.length === t.limit && x.length < t.limit && (s.dirty = !0)), c ? Object.freeze(x) : x);
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
            s.subscribers.size === 0 && Oe(c, s);
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
                  var x = h[_], y = Wt["idb://".concat(t, "/").concat(x)];
                  if (y) {
                    var b = e.table(x), S = y.optimisticOps.filter(function(ee) {
                      return ee.trans === p;
                    });
                    if (p._explicit && m && p.mutatedParts) for (var E = 0, T = Object.values(y.queries.query); E < T.length; E++) for (var P = 0, N = (Y = T[E]).slice(); P < N.length; P++) Kr((V = N[P]).obsSet, p.mutatedParts) && (Oe(Y, V), V.subscribers.forEach(function(ee) {
                      return g.add(ee);
                    }));
                    else if (0 < S.length) {
                      y.optimisticOps = y.optimisticOps.filter(function(ee) {
                        return ee.trans !== p;
                      });
                      for (var R = 0, q = Object.values(y.queries.query); R < q.length; R++) for (var Y, V, H, z = 0, X = (Y = q[R]).slice(); z < X.length; z++) (V = X[z]).res != null && p.mutatedParts && (m && !V.dirty ? (H = Object.isFrozen(V.res), H = Bi(V.res, V.req, S, b, V, H), V.dirty ? (Oe(Y, V), V.subscribers.forEach(function(ee) {
                        return g.add(ee);
                      })) : H !== V.res && (V.res = H, V.promise = J.resolve({ result: H }))) : (V.dirty && Oe(Y, V), V.subscribers.forEach(function(ee) {
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
            return p ? (f = o.mutate(c), c.type !== "add" && c.type !== "put" || !(50 <= c.values.length || Vr(s, c).some(function(m) {
              return m == null;
            })) ? (p.optimisticOps.push(c), c.mutatedParts && Jn(c.mutatedParts), f.then(function(m) {
              0 < m.numFailures && (Oe(p.optimisticOps, c), (m = Ki(0, c, m)) && p.optimisticOps.push(m), c.mutatedParts && Jn(c.mutatedParts));
            }), f.catch(function() {
              Oe(p.optimisticOps, c), c.mutatedParts && Jn(c.mutatedParts);
            })) : f.then(function(m) {
              var g = Ki(0, u(u({}, c), { values: c.values.map(function(_, h) {
                var x;
                return m.failures[h] ? _ : (_ = (x = s.keyPath) !== null && x !== void 0 && x.includes(".") ? Ge(_) : u({}, _), oe(_, s.keyPath, m.results[h]), _);
              }) }), m);
              p.optimisticOps.push(g), queueMicrotask(function() {
                return c.mutatedParts && Jn(c.mutatedParts);
              });
            }), f) : o.mutate(c);
          }, query: function(c) {
            if (!Mi(ne, o) || !Fi("query", c)) return o.query(c);
            var f = ((g = ne.trans) === null || g === void 0 ? void 0 : g.db._options.cache) === "immutable", h = ne, p = h.requery, m = h.signal, g = function(b, S, E, T) {
              var P = Wt["idb://".concat(b, "/").concat(S)];
              if (!P) return [];
              if (!(S = P.queries[E])) return [null, !1, P, null];
              var N = S[(T.query ? T.query.index.name : null) || ""];
              if (!N) return [null, !1, P, null];
              switch (E) {
                case "query":
                  var R = N.find(function(q) {
                    return q.req.limit === T.limit && q.req.values === T.values && qi(q.req.query.range, T.query.range);
                  });
                  return R ? [R, !0, P, N] : [N.find(function(q) {
                    return ("limit" in q.req ? q.req.limit : 1 / 0) >= T.limit && (!T.values || q.req.values) && cs(q.req.query.range, T.query.range);
                  }), !1, P, N];
                case "count":
                  return R = N.find(function(q) {
                    return qi(q.req.query.range, T.query.range);
                  }), [R, !!R, P, N];
              }
            }(t, r, "query", c), _ = g[0], h = g[1], x = g[2], y = g[3];
            return _ && h ? _.obsSet = c.obsSet : (h = o.query(c).then(function(b) {
              var S = b.result;
              if (_ && (_.res = S), f) {
                for (var E = 0, T = S.length; E < T; ++E) Object.freeze(S[E]);
                Object.freeze(S);
              } else b.result = Ge(S);
              return b;
            }).catch(function(b) {
              return y && _ && Oe(y, _), Promise.reject(b);
            }), _ = { obsSet: c.obsSet, promise: h, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, y ? y.push(_) : (y = [_], (x = x || (Wt["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = y)), ls(_, y, p, m), _.promise.then(function(b) {
              return { result: Bi(b.result, c, x?.optimisticOps, o, _, f) };
            });
          } });
        } });
      } };
      function er(e, t) {
        return new Proxy(e, { get: function(r, o, s) {
          return o === "db" ? t : Reflect.get(r, o, s);
        } });
      }
      var xt = (Fe.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new j.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new j.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(es), r.stores({}), this._state.autoSchema = !1, r);
      }, Fe.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || ne.letThrough || this._vip) ? e() : new J(function(r, o) {
          if (t._state.openComplete) return o(new j.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new j.DatabaseClosed());
            t.open().catch(A);
          }
          t._state.dbReadyPromise.then(r, o);
        }).then(e);
      }, Fe.prototype.use = function(e) {
        var t = e.stack, r = e.create, o = e.level, s = e.name;
        return s && this.unuse({ stack: t, name: s }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: r, level: o ?? 10, name: s }), e.sort(function(c, f) {
          return c.level - f.level;
        }), this;
      }, Fe.prototype.unuse = function(e) {
        var t = e.stack, r = e.name, o = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(s) {
          return o ? s.create !== o : !!r && s.name !== r;
        })), this;
      }, Fe.prototype.open = function() {
        var e = this;
        return Vt(Je, function() {
          return is(e);
        });
      }, Fe.prototype._close = function() {
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
      }, Fe.prototype.close = function(r) {
        var t = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        t ? (r.isBeingOpened && r.cancelOpen(new j.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new j.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, Fe.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", o = this._state;
        return new J(function(s, c) {
          function f() {
            t.close(e);
            var p = t._deps.indexedDB.deleteDatabase(t.name);
            p.onsuccess = Pe(function() {
              var m, g, _;
              m = t._deps, g = t.name, _ = m.indexedDB, m = m.IDBKeyRange, jr(_) || g === Bn || kr(_, m).delete(g).catch(A), s();
            }), p.onerror = yt(c), p.onblocked = t._fireOnBlocked;
          }
          if (r) throw new j.InvalidArgument("Invalid closeOptions argument to db.delete()");
          o.isBeingOpened ? o.dbReadyPromise.then(f) : f();
        });
      }, Fe.prototype.backendDB = function() {
        return this.idbdb;
      }, Fe.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Fe.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, Fe.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Fe.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Fe.prototype, "tables", { get: function() {
        var e = this;
        return v(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), Fe.prototype.transaction = function() {
        var e = (function(t, r, o) {
          var s = arguments.length;
          if (s < 2) throw new j.InvalidArgument("Too few arguments");
          for (var c = new Array(s - 1); --s; ) c[s - 1] = arguments[s];
          return o = c.pop(), [t, it(c), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Fe.prototype._transaction = function(e, t, r) {
        var o = this, s = ne.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var c, f, p = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (f = t.map(function(g) {
            if (g = g instanceof o.Table ? g.name : g, typeof g != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return g;
          }), e == "r" || e === Sr) c = Sr;
          else {
            if (e != "rw" && e != xr) throw new j.InvalidArgument("Invalid transaction mode: " + e);
            c = xr;
          }
          if (s) {
            if (s.mode === Sr && c === xr) {
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
          }) : Me(g);
        }
        var m = (function g(_, h, x, y, b) {
          return J.resolve().then(function() {
            var S = ne.transless || ne, E = _._createTransaction(h, x, _._dbSchema, y);
            if (E.explicit = !0, S = { trans: E, transless: S }, y) E.idbtrans = y.idbtrans;
            else try {
              E.create(), E.idbtrans._explicit = !0, _._state.PR1398_maxLoop = 3;
            } catch (N) {
              return N.name === O.InvalidState && _.isOpen() && 0 < --_._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), _.close({ disableAutoOpen: !1 }), _.open().then(function() {
                return g(_, h, x, null, b);
              })) : Me(N);
            }
            var T, P = at(b);
            return P && an(), S = J.follow(function() {
              var N;
              (T = b.call(E, E)) && (P ? (N = Dt.bind(null, null), T.then(N, N)) : typeof T.next == "function" && typeof T.throw == "function" && (T = $r(T)));
            }, S), (T && typeof T.then == "function" ? J.resolve(T).then(function(N) {
              return E.active ? N : Me(new j.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : S.then(function() {
              return T;
            })).then(function(N) {
              return y && E._resolve(), E._completion.then(function() {
                return N;
              });
            }).catch(function(N) {
              return E._reject(N), Me(N);
            });
          });
        }).bind(null, this, c, f, s, r);
        return s ? s._promise(c, m, "lock") : ne.trans ? Vt(ne.transless, function() {
          return o._whenReady(m);
        }) : this._whenReady(m);
      }, Fe.prototype.table = function(e) {
        if (!G(this._allTables, e)) throw new j.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Fe);
      function Fe(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var o = Fe.dependencies;
        this._options = t = u({ addons: Fe.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, c, f, p, m, g = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: A, dbReadyPromise: null, cancelOpen: A, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        g.dbReadyPromise = new J(function(h) {
          g.dbReadyResolve = h;
        }), g.openCanceller = new J(function(h, x) {
          g.cancelOpen = x;
        }), this._state = g, this.name = e, this.on = mn(this, "populate", "blocked", "versionchange", "close", { ready: [te, A] }), this.once = function(h, x) {
          var y = function() {
            for (var b = [], S = 0; S < arguments.length; S++) b[S] = arguments[S];
            r.on(h).unsubscribe(y), x.apply(r, b);
          };
          return r.on(h, y);
        }, this.on.ready.subscribe = ke(this.on.ready.subscribe, function(h) {
          return function(x, y) {
            Fe.vip(function() {
              var b, S = r._state;
              S.openComplete ? (S.dbOpenError || J.resolve().then(x), y && h(x)) : S.onReadyBeingFired ? (S.onReadyBeingFired.push(x), y && h(x)) : (h(x), b = r, y || h(function E() {
                b.on.ready.unsubscribe(x), b.on.ready.unsubscribe(E);
              }));
            });
          };
        }), this.Collection = (s = this, yn(Wo.prototype, function(T, E) {
          this.db = s;
          var y = yi, b = null;
          if (E) try {
            y = E();
          } catch (P) {
            b = P;
          }
          var S = T._ctx, E = S.table, T = E.hook.reading.fire;
          this._ctx = { table: E, index: S.index, isPrimKey: !S.index || E.schema.primKey.keyPath && S.index === E.schema.primKey.name, range: y, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: b, or: S.or, valueMapper: T !== F ? T : null };
        })), this.Table = (c = this, yn(wi.prototype, function(h, x, y) {
          this.db = c, this._tx = y, this.name = h, this.schema = x, this.hook = c._allTables[h] ? c._allTables[h].hook : mn(null, { creating: [k, A], reading: [Z, F], updating: [U, A], deleting: [M, A] });
        })), this.Transaction = (f = this, yn(Xo.prototype, function(h, x, y, b, S) {
          var E = this;
          h !== "readonly" && x.forEach(function(T) {
            T = (T = y[T]) === null || T === void 0 ? void 0 : T.yProps, T && (x = x.concat(T.map(function(P) {
              return P.updatesTable;
            })));
          }), this.db = f, this.mode = h, this.storeNames = x, this.schema = y, this.chromeTransactionDurability = b, this.idbtrans = null, this.on = mn(this, "complete", "error", "abort"), this.parent = S || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new J(function(T, P) {
            E._resolve = T, E._reject = P;
          }), this._completion.then(function() {
            E.active = !1, E.on.complete.fire();
          }, function(T) {
            var P = E.active;
            return E.active = !1, E.on.error.fire(T), E.parent ? E.parent._reject(T) : P && E.idbtrans && E.idbtrans.abort(), Me(T);
          });
        })), this.Version = (p = this, yn(rs.prototype, function(h) {
          this.db = p, this._cfg = { version: h, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (m = this, yn(Ti.prototype, function(h, x, y) {
          if (this.db = m, this._ctx = { table: h, index: x === ":id" ? null : x, or: y }, this._cmp = this._ascending = ve, this._descending = function(b, S) {
            return ve(S, b);
          }, this._max = function(b, S) {
            return 0 < ve(b, S) ? b : S;
          }, this._min = function(b, S) {
            return ve(b, S) < 0 ? b : S;
          }, this._IDBKeyRange = m._deps.IDBKeyRange, !this._IDBKeyRange) throw new j.MissingAPI();
        })), this.on("versionchange", function(h) {
          0 < h.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(h) {
          !h.newVersion || h.newVersion < h.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(h.oldVersion / 10));
        }), this._maxKey = wn(t.IDBKeyRange), this._createTransaction = function(h, x, y, b) {
          return new r.Transaction(h, x, y, r._options.chromeTransactionDurability, b);
        }, this._fireOnBlocked = function(h) {
          r.on("blocked").fire(h), un.filter(function(x) {
            return x.name === r.name && x !== r && !x._state.vcFired;
          }).map(function(x) {
            return x.on("versionchange").fire(h);
          });
        }, this.use(as), this.use(fs), this.use(us), this.use(os), this.use(ss);
        var _ = new Proxy(this, { get: function(h, x, y) {
          if (x === "_vip") return !0;
          if (x === "table") return function(S) {
            return er(r.table(S), _);
          };
          var b = Reflect.get(h, x, y);
          return b instanceof wi ? er(b, _) : x === "tables" ? b.map(function(S) {
            return er(S, _);
          }) : x === "_createTransaction" ? function() {
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
      function Li(e) {
        var t, r = !1, o = new ds(function(s) {
          var c = at(e), f, p = !1, m = {}, g = {}, _ = { get closed() {
            return p;
          }, unsubscribe: function() {
            p || (p = !0, f && f.abort(), h && kt.storagemutated.unsubscribe(y));
          } };
          s.start && s.start(_);
          var h = !1, x = function() {
            return Er(b);
          }, y = function(S) {
            zn(m, S), Kr(g, m) && x();
          }, b = function() {
            var S, E, T;
            !p && tr.indexedDB && (m = {}, S = {}, f && f.abort(), f = new AbortController(), T = function(P) {
              var N = on();
              try {
                c && an();
                var R = Pt(e, P);
                return R = c ? R.finally(Dt) : R;
              } finally {
                N && sn();
              }
            }(E = { subscr: S, signal: f.signal, requery: x, querier: e, trans: null }), Promise.resolve(T).then(function(P) {
              r = !0, t = P, p || E.signal.aborted || (m = {}, function(N) {
                for (var R in N) if (G(N, R)) return;
                return 1;
              }(g = S) || h || (kt(bn, y), h = !0), Er(function() {
                return !p && s.next && s.next(P);
              }));
            }, function(P) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || p || Er(function() {
                p || s.error && s.error(P);
              });
            }));
          };
          return setTimeout(x, 0), _;
        });
        return o.hasValue = function() {
          return r;
        }, o.getValue = function() {
          return t;
        }, o;
      }
      var Yt = xt;
      function Wr(e) {
        var t = jt;
        try {
          jt = !0, kt.storagemutated.fire(e), Lr(e, !0);
        } finally {
          jt = t;
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
          return t = Yt.dependencies, r = t.indexedDB, t = t.IDBKeyRange, (jr(r) ? Promise.resolve(r.databases()).then(function(o) {
            return o.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== Bn;
            });
          }) : kr(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return Me(new j.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          D(this, e);
        };
      }, ignoreTransaction: function(e) {
        return ne.trans ? Vt(ne.transless, e) : e();
      }, vip: Mr, async: function(e) {
        return function() {
          try {
            var t = $r(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : J.resolve(t);
          } catch (r) {
            return Me(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = $r(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : J.resolve(o);
        } catch (s) {
          return Me(s);
        }
      }, currentTransaction: { get: function() {
        return ne.trans || null;
      } }, waitFor: function(e, t) {
        return t = J.resolve(typeof e == "function" ? Yt.ignoreTransaction(e) : e).timeout(t || 6e4), ne.trans ? ne.trans.waitFor(t) : t;
      }, Promise: J, debug: { get: function() {
        return Q;
      }, set: function(e) {
        me(e);
      } }, derive: de, extend: D, props: re, override: ke, Events: mn, on: kt, liveQuery: Li, extendObservabilitySet: zn, getByKeyPath: ie, setByKeyPath: oe, delByKeyPath: function(e, t) {
        typeof t == "string" ? oe(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          oe(e, r, void 0);
        });
      }, shallowClone: xe, deepClone: Ge, getObjectDiff: Ur, cmp: ve, asap: je, minKey: -1 / 0, addons: [], connections: un, errnames: O, dependencies: tr, cache: Wt, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
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
        if (!xt.disableBfCache && e.persisted) {
          Q && console.debug("Dexie: handling persisted pagehide"), hn?.close();
          for (var t = 0, r = un; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !xt.disableBfCache && e.persisted && (Q && console.debug("Dexie: handling persisted pageshow"), $i(), Wr({ all: new He(-1 / 0, [[]]) }));
      })), J.rejectionMapper = function(e, t) {
        return !e || e instanceof ht || e instanceof TypeError || e instanceof SyntaxError || !e.name || !$[e.name] ? e : (t = new $[e.name](t || e.message, e), "stack" in e && he(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, me(Q), u(xt, Object.freeze({ __proto__: null, Dexie: xt, liveQuery: Li, Entity: vi, cmp: ve, PropModification: vn, replacePrefix: function(e, t) {
        return new vn({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new vn({ add: e });
      }, remove: function(e) {
        return new vn({ remove: e });
      }, default: xt, RangeSet: He, mergeRanges: Sn, rangesOverlap: Di }), { default: xt }), xt;
    });
  }(xo)), xo.exports;
}
var vh = yh();
const Vs = /* @__PURE__ */ hh(vh), hu = Symbol.for("Dexie"), No = globalThis[hu] || (globalThis[hu] = Vs);
if (Vs.semVer !== No.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Vs.semVer} and ${No.semVer}`);
const {
  liveQuery: jh,
  mergeRanges: Mh,
  rangesOverlap: Fh,
  RangeSet: Kh,
  cmp: Bh,
  Entity: qh,
  PropModification: Lh,
  replacePrefix: $h,
  add: Uh,
  remove: Vh,
  DexieYProvider: Gh
} = No, gh = /* @__PURE__ */ $u({
  __name: "oscd-loader",
  props: {
    doc: {},
    pluginLocation: {}
  },
  setup(n) {
    const i = n, a = zi(0), u = zi(), l = new Zp(), d = jc(), v = zi();
    Oo(W), Oo(D), pf(() => {
      i.doc && he(i.doc);
    }), wo(
      () => d.value,
      (ae) => {
        ae && C(ae);
      },
      { immediate: !0 }
    );
    async function C(ae) {
      const ye = new No(ae);
      await ye.open(), v.value = lh(ye);
    }
    async function D() {
      try {
        if (!u.value)
          return;
        const ke = (await import(i.pluginLocation)).default;
        class pe extends ke {
        }
        const je = `oscd-plugin-${Date.now()}`;
        customElements.define(je, pe);
        const ie = document.createElement(je);
        u.value.innerHTML = "", u.value.appendChild(ie), Te(l), re(document.head), i.doc && (he(i.doc), de(a.value));
      } catch (ae) {
        console.error("Failed to load plugin:", ae);
      }
    }
    function W() {
      u.value && (u.value.addEventListener("editor-action", (ae) => {
        G(Ac(Np(ae.detail.action)));
      }), u.value.addEventListener("oscd-edit", (ae) => {
        const ye = ae.detail.edit ?? ae.detail, ke = Nc(ye);
        if (G(ke), !v.value) {
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
      if (!v.value) {
        console.warn("sdk is needed to translate and apply events");
        return;
      }
      l.commit(ae), a.value += 1, de(a.value), Rc(ae, v.value);
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
    function Te(ae) {
      const ye = u.value?.firstElementChild;
      ye && (ye.editor = ae);
    }
    return (ae, ye) => (uc(), Sf("div", {
      ref_key: "pluginContainerRef",
      ref: u
    }, null, 512));
  }
});
var mu = {}, yu;
function bh() {
  return yu || (yu = 1, (function() {
    function n(I) {
      var k = 0;
      return function() {
        return k < I.length ? { done: !1, value: I[k++] } : { done: !0 };
      };
    }
    var i = typeof Object.defineProperties == "function" ? Object.defineProperty : function(I, k, M) {
      return I == Array.prototype || I == Object.prototype || (I[k] = M.value), I;
    };
    function a(I) {
      I = [typeof globalThis == "object" && globalThis, I, typeof window == "object" && window, typeof self == "object" && self, typeof Us == "object" && Us];
      for (var k = 0; k < I.length; ++k) {
        var M = I[k];
        if (M && M.Math == Math) return M;
      }
      throw Error("Cannot find global object");
    }
    var u = a(this);
    function l(I, k) {
      if (k) e: {
        var M = u;
        I = I.split(".");
        for (var U = 0; U < I.length - 1; U++) {
          var K = I[U];
          if (!(K in M)) break e;
          M = M[K];
        }
        I = I[I.length - 1], U = M[I], k = k(U), k != U && k != null && i(M, I, { configurable: !0, writable: !0, value: k });
      }
    }
    l("Symbol", function(I) {
      function k(K) {
        if (this instanceof k) throw new TypeError("Symbol is not a constructor");
        return new M("jscomp_symbol_" + (K || "") + "_" + U++, K);
      }
      function M(K, te) {
        this.l = K, i(this, "description", { configurable: !0, writable: !0, value: te });
      }
      if (I) return I;
      M.prototype.toString = function() {
        return this.l;
      };
      var U = 0;
      return k;
    }), l("Symbol.iterator", function(I) {
      if (I) return I;
      I = Symbol("Symbol.iterator");
      for (var k = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), M = 0; M < k.length; M++) {
        var U = u[k[M]];
        typeof U == "function" && typeof U.prototype[I] != "function" && i(U.prototype, I, { configurable: !0, writable: !0, value: function() {
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
    function C(I) {
      if (!(I instanceof Array)) {
        I = v(I);
        for (var k, M = []; !(k = I.next()).done; ) M.push(k.value);
        I = M;
      }
      return I;
    }
    var D = typeof Object.create == "function" ? Object.create : function(I) {
      function k() {
      }
      return k.prototype = I, new k();
    }, W = function() {
      function I() {
        function M() {
        }
        return Reflect.construct(M, [], function() {
        }), new M() instanceof M;
      }
      if (typeof Reflect < "u" && Reflect.construct) {
        if (I()) return Reflect.construct;
        var k = Reflect.construct;
        return function(M, U, K) {
          return M = k(M, U), K && Reflect.setPrototypeOf(M, K.prototype), M;
        };
      }
      return function(M, U, K) {
        return K === void 0 && (K = M), K = D(K.prototype || Object.prototype), Function.prototype.apply.call(
          M,
          K,
          U
        ) || K;
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
    var he = B, de = window, Te;
    if (((Te = de.CustomElementRegistryPolyfill) == null ? void 0 : Te.formAssociated) === void 0) {
      var ae = {};
      de.CustomElementRegistryPolyfill = (ae.formAssociated = /* @__PURE__ */ new Set(), ae);
    }
    var ye = window.HTMLElement, ke = window.customElements.define, pe = window.customElements.get, je = window.customElements, ie = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), xe = /* @__PURE__ */ new WeakMap(), L = /* @__PURE__ */ new WeakMap();
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
      var M = k.prototype.attributeChangedCallback, U = new Set(k.observedAttributes || []);
      wt(k, U, M);
      var K = pe.call(je, I), te, Q, me = (Q = (te = K) == null ? void 0 : te.s) != null ? Q : k.formAssociated || de.CustomElementRegistryPolyfill.formAssociated.has(I);
      if (me && de.CustomElementRegistryPolyfill.formAssociated.add(I), me != k.formAssociated) try {
        k.formAssociated = me;
      } catch {
      }
      if (M = {
        tagName: I,
        g: k,
        connectedCallback: k.prototype.connectedCallback,
        disconnectedCallback: k.prototype.disconnectedCallback,
        adoptedCallback: k.prototype.adoptedCallback,
        attributeChangedCallback: M,
        formAssociated: me,
        formAssociatedCallback: k.prototype.formAssociatedCallback,
        formDisabledCallback: k.prototype.formDisabledCallback,
        formResetCallback: k.prototype.formResetCallback,
        formStateRestoreCallback: k.prototype.formStateRestoreCallback,
        observedAttributes: U
      }, this.h.set(I, M), this.m.set(k, M), K || (K = At(I), ke.call(je, I, K)), this === window.customElements && (xe.set(k, M), M.o = K), K = this.i.get(I)) for (this.i.delete(I), K = v(K), U = K.next(); !U.done; U = K.next()) U = U.value, oe.delete(U), ze(U, M, !0);
      return K = this.j.get(I), K !== void 0 && (K.resolve(k), this.j.delete(I)), k;
    }, rt.prototype.upgrade = function(I) {
      for (var k = [], M = 0; M < arguments.length; ++M) k[M] = arguments[M];
      ot.push(this), je.upgrade.apply(je, C(k)), ot.pop();
    }, rt.prototype.get = function(I) {
      var k;
      return (k = this.h.get(I)) == null ? void 0 : k.g;
    }, rt.prototype.whenDefined = function(I) {
      var k = this.h.get(I);
      return k !== void 0 ? Promise.resolve(k.g) : (k = this.j.get(I), k === void 0 && (k = new it(), this.j.set(I, k)), k.promise);
    };
    function Ne(I, k, M, U) {
      var K = I.i.get(M);
      K || I.i.set(M, K = /* @__PURE__ */ new Set()), U ? K.add(k) : K.delete(k);
    }
    var Ge;
    window.HTMLElement = function() {
      var I = Ge;
      if (I) return Ge = void 0, I;
      var k = xe.get(this.constructor);
      if (!k) throw new TypeError("Illegal constructor (custom element class must be registered with global customElements registry to be newable)");
      return I = Reflect.construct(ye, [], k.o), Object.setPrototypeOf(I, this.constructor.prototype), ie.set(I, k), I;
    }, window.HTMLElement.prototype = ye.prototype;
    function At(I) {
      function k() {
        var M = Reflect.construct(ye, [], this.constructor);
        Object.setPrototypeOf(M, HTMLElement.prototype);
        e: {
          var U = M.getRootNode();
          if (!(U === document || U instanceof ShadowRoot)) {
            if (U = ot[ot.length - 1], U instanceof CustomElementRegistry) {
              var K = U;
              break e;
            }
            U = U.getRootNode(), U === document || U instanceof ShadowRoot || (U = ((K = L.get(U)) == null ? void 0 : K.getRootNode()) || document);
          }
          K = U.registry;
        }
        return K = K || window.customElements, (U = K.h.get(I)) ? ze(M, U) : oe.set(M, K), M;
      }
      return u.Object.defineProperty(
        k,
        "formAssociated",
        { configurable: !0, enumerable: !0, get: function() {
          return de.CustomElementRegistryPolyfill.formAssociated.has(I);
        } }
      ), k.prototype.connectedCallback = function(M) {
        for (var U = [], K = 0; K < arguments.length; ++K) U[K] = arguments[K];
        be(this), (K = ie.get(this)) ? K.connectedCallback && K.connectedCallback.apply(this, U) : Ne(oe.get(this), this, I, !0);
      }, k.prototype.disconnectedCallback = function(M) {
        for (var U = [], K = 0; K < arguments.length; ++K) U[K] = arguments[K];
        (K = ie.get(this)) ? K.disconnectedCallback && K.disconnectedCallback.apply(this, U) : Ne(
          oe.get(this),
          this,
          I,
          !1
        );
      }, k.prototype.adoptedCallback = function(M) {
        for (var U = [], K = 0; K < arguments.length; ++K) U[K] = arguments[K];
        var te, Q;
        (te = ie.get(this)) == null || (Q = te.adoptedCallback) == null || Q.apply(this, U);
      }, k.prototype.formAssociatedCallback = function(M) {
        for (var U = [], K = 0; K < arguments.length; ++K) U[K] = arguments[K];
        if (K = ie.get(this), K != null && K.formAssociated) {
          var te;
          K == null || (te = K.formAssociatedCallback) == null || te.apply(this, U);
        }
      }, k.prototype.formDisabledCallback = function(M) {
        for (var U = [], K = 0; K < arguments.length; ++K) U[K] = arguments[K];
        if (K = ie.get(this), K != null && K.formAssociated) {
          var te;
          K == null || (te = K.formDisabledCallback) == null || te.apply(this, U);
        }
      }, k.prototype.formResetCallback = function(M) {
        for (var U = [], K = 0; K < arguments.length; ++K) U[K] = arguments[K];
        if (K = ie.get(this), K != null && K.formAssociated) {
          var te;
          K == null || (te = K.formResetCallback) == null || te.apply(this, U);
        }
      }, k.prototype.formStateRestoreCallback = function(M) {
        for (var U = [], K = 0; K < arguments.length; ++K) U[K] = arguments[K];
        if (K = ie.get(this), K != null && K.formAssociated) {
          var te;
          K == null || (te = K.formStateRestoreCallback) == null || te.apply(this, U);
        }
      }, k;
    }
    window.CustomElementRegistry = rt;
    function wt(I, k, M) {
      if (k.size !== 0 && M !== void 0) {
        var U = I.prototype.setAttribute;
        U && (I.prototype.setAttribute = function(Q, me) {
          if (be(this), Q = Q.toLowerCase(), k.has(Q)) {
            var ce = this.getAttribute(Q);
            U.call(this, Q, me), M.call(this, Q, ce, me);
          } else U.call(this, Q, me);
        });
        var K = I.prototype.removeAttribute;
        K && (I.prototype.removeAttribute = function(Q) {
          if (be(this), Q = Q.toLowerCase(), k.has(Q)) {
            var me = this.getAttribute(Q);
            K.call(this, Q), M.call(this, Q, me, null);
          } else K.call(this, Q);
        });
        var te = I.prototype.toggleAttribute;
        te && (I.prototype.toggleAttribute = function(Q, me) {
          if (be(this), Q = Q.toLowerCase(), k.has(Q)) {
            var ce = this.getAttribute(Q);
            te.call(this, Q, me), me = this.getAttribute(Q), ce !== me && M.call(this, Q, ce, me);
          } else te.call(this, Q, me);
        });
      }
    }
    var Ve;
    document.readyState === "loading" && (Ve = /* @__PURE__ */ new Set(), document.addEventListener("readystatechange", function() {
      Ve.forEach(function(I) {
        return Oe(I, ie.get(I));
      });
    }, { once: !0 }));
    function be(I) {
      var k;
      (k = Ve) != null && k.has(I) && Oe(I, ie.get(I));
    }
    function Oe(I, k) {
      var M;
      (M = Ve) == null || M.delete(I), k.attributeChangedCallback && k.observedAttributes.forEach(function(U) {
        I.hasAttribute(U) && k.attributeChangedCallback.call(I, U, null, I.getAttribute(U));
      });
    }
    function et(I) {
      var k = Object.getPrototypeOf(I);
      if (k !== window.HTMLElement) return k === ye ? Object.setPrototypeOf(I, window.HTMLElement) : et(k);
    }
    function ze(I, k, M) {
      M = M === void 0 ? !1 : M, Object.setPrototypeOf(I, k.g.prototype), ie.set(I, k), Ge = I;
      try {
        new k.g();
      } catch {
        et(k.g), new k.g();
      }
      k.attributeChangedCallback && (Ve === void 0 || I.hasAttributes() ? Oe(I, k) : Ve.add(I)), M && k.connectedCallback && I.isConnected && k.connectedCallback.call(I);
    }
    var at = Element.prototype.attachShadow;
    Element.prototype.attachShadow = function(I, k) {
      for (var M = [], U = 1; U < arguments.length; ++U) M[U - 1] = arguments[U];
      var K = Object.assign({}, I);
      return U = I.customElements, U = I.registry === void 0 ? U : I.registry, K = (delete K.customElements, delete K.registry, K), M = at.call.apply(at, [this, K].concat(C(M))), U !== void 0 && (M.customElements = M.registry = U), M;
    };
    var ot = [document];
    function ht(I, k, M) {
      var U = (M ? Object.getPrototypeOf(M) : I.prototype)[k];
      I.prototype[k] = function(K) {
        for (var te = [], Q = 0; Q < arguments.length; ++Q) te[Q] = arguments[Q];
        return ot.push(this), te = U.apply(M || this, te), te !== void 0 && L.set(te, this), ot.pop(), te;
      };
    }
    ht(ShadowRoot, "createElement", document), ht(ShadowRoot, "createElementNS", document), ht(ShadowRoot, "importNode", document), ht(Element, "insertAdjacentHTML");
    function rn(I) {
      var k = Object.getOwnPropertyDescriptor(I.prototype, "innerHTML");
      Object.defineProperty(I.prototype, "innerHTML", Object.assign({}, k, { set: function(M) {
        ot.push(this), k.set.call(this, M), ot.pop();
      } }));
    }
    if (rn(Element), rn(ShadowRoot), Object.defineProperty(window, "customElements", { value: new CustomElementRegistry(), configurable: !0, writable: !0 }), window.ElementInternals && window.ElementInternals.prototype.setFormValue) {
      var It = /* @__PURE__ */ new WeakMap(), pt = HTMLElement.prototype.attachInternals, O = ["setFormValue", "setValidity", "checkValidity", "reportValidity"];
      HTMLElement.prototype.attachInternals = function(I) {
        for (var k = [], M = 0; M < arguments.length; ++M) k[M] = arguments[M];
        return k = pt.call.apply(pt, [this].concat(C(k))), It.set(k, this), k;
      }, O.forEach(function(I) {
        var k = window.ElementInternals.prototype, M = k[I];
        k[I] = function(U) {
          for (var K = [], te = 0; te < arguments.length; ++te) K[te] = arguments[te];
          if (te = It.get(this), ie.get(te).formAssociated === !0) return M?.call.apply(M, [this].concat(C(K)));
          throw new DOMException("Failed to execute " + M + " on 'ElementInternals': The target element is not a form-associated custom element.");
        };
      });
      var w = function(I) {
        var k = W(Array, [].concat(C(I)), this.constructor);
        return k.l = I, k;
      }, j = w, $ = Array;
      if (j.prototype = D($.prototype), j.prototype.constructor = j, he) he(j, $);
      else for (var De in $) if (De != "prototype") if (Object.defineProperties) {
        var A = Object.getOwnPropertyDescriptor($, De);
        A && Object.defineProperty(j, De, A);
      } else j[De] = $[De];
      j.u = $.prototype, u.Object.defineProperty(w.prototype, "value", { configurable: !0, enumerable: !0, get: function() {
        var I;
        return ((I = this.l.find(function(k) {
          return k.checked === !0;
        })) == null ? void 0 : I.value) || "";
      } });
      var F = function(I) {
        var k = this, M = /* @__PURE__ */ new Map();
        I.forEach(function(U, K) {
          var te = U.getAttribute("name"), Q = M.get(te) || [];
          k[+K] = U, Q.push(U), M.set(te, Q);
        }), this.length = I.length, M.forEach(function(U, K) {
          U && K !== "length" && K !== "item" && K !== "namedItem" && (k[K] = U.length === 1 ? U[0] : new w(U));
        });
      };
      F.prototype.item = function(I) {
        var k;
        return (k = this[I]) != null ? k : null;
      }, F.prototype[Symbol.iterator] = function() {
        throw Error("Method not implemented.");
      }, F.prototype.namedItem = function(I) {
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
          for (var M = I.next(); !M.done; M = I.next()) {
            M = M.value;
            var U = ie.get(M);
            U && U.formAssociated !== !0 || k.push(M);
          }
          return new F(k);
        } }
      );
    }
  }).call(typeof globalThis == "object" ? globalThis : window)), mu;
}
bh();
const wh = /* @__PURE__ */ $u({
  __name: "app",
  props: {
    api: {},
    pluginLocation: {}
  },
  setup(n) {
    const i = n;
    let a = zi(), u = () => {
    };
    const l = jc();
    Oo(() => {
      u = i.api.activeFileName.subscribe(async (v, C) => {
        d(v), l.value = v;
      }), i.api.activeFileName.value && (l.value = i.api.activeFileName.value, d(i.api.activeFileName.value));
    }), ua(() => {
      u();
    });
    async function d(v) {
      if (!v)
        return;
      const { xmlDocument: C } = await wd({ databaseName: v });
      a.value = C;
    }
    return (v, C) => (uc(), xf(gh, {
      doc: ju(a),
      pluginLocation: i.pluginLocation
    }, null, 8, ["doc", "pluginLocation"]));
  }
}), _h = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [u, l] of i)
    a[u] = l;
  return a;
}, Eh = /* @__PURE__ */ _h(wh, [["__scopeId", "data-v-fd2ca7ba"]]);
function Hh(n, i) {
  const a = Sh(import.meta.url);
  if (!document.getElementById(n)) {
    console.error({ msg: "could not found root element", rootId: n });
    return;
  }
  ad(Eh, { api: i, pluginLocation: a }).mount(`#${n}`);
}
function Sh(n) {
  const a = new URL(n).searchParams.get("plugin");
  if (a === "")
    throw new Error(`could not extract plugin location from url:${n}`);
  return a;
}
export {
  Hh as default
};
