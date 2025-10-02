(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`:host{display:block;font-family:var(--oscd-text-font, "Roboto");color:var(--mdc-theme-on-surface);background-color:var(--mdc-theme-surface)}h3{color:var(--primary)}#root-container{padding:16px}*{--base03: #002b36;--base02: #073642;--base01: #586e75;--base00: #657b83;--base0: #839496;--base1: #93a1a1;--base2: #eee8d5;--base3: #fdf6e3;--yellow: #b58900;--orange: #cb4b16;--red: #dc322f;--magenta: #d33682;--violet: #6c71c4;--blue: #268bd2;--cyan: #2aa198;--green: #859900;--primary: var(--cyan);--secondary: var(--violet);--mdc-theme-primary: var(--primary);--mdc-theme-secondary: var(--secondary);--mdc-theme-background: var(--base3);--mdc-theme-surface: var(--base3);--mdc-theme-on-primary: var(--base2);--mdc-theme-on-secondary: var(--base2);--mdc-theme-on-background: var(--base00);--mdc-theme-on-surface: var(--base00);--mdc-theme-text-primary-on-background: var(--base01);--mdc-theme-text-secondary-on-background: var(--base00);--mdc-theme-text-icon-on-background: var(--base00);--mdc-theme-error: var(--red);--mdc-button-disabled-ink-color: var(--base1);--mdc-drawer-heading-ink-color: var(--base00);--mdc-text-field-fill-color: var(--base2);--mdc-text-field-disabled-fill-color: var(--base3);--mdc-text-field-ink-color: var(--base00);--mdc-text-field-label-ink-color: var(--base00);--mdc-select-fill-color: var(--base2);--mdc-select-disabled-fill-color: var(--base3);--mdc-select-ink-color: var(--base00);--mdc-dialog-heading-ink-color: var(--base00);--mdc-icon-font: "Material Icons Outlined";--oscd-primary: var(--oscd-theme-primary, var(--cyan));--oscd-secondary: var(--oscd-theme-secondary, var(--violet));--oscd-error: var(--oscd-theme-error, var(--red));--oscd-base03: var(--oscd-theme-base03, var(--base03));--oscd-base02: var(--oscd-theme-base02, var(--base02));--oscd-base01: var(--oscd-theme-base01, var(--base01));--oscd-base00: var(--oscd-theme-base00, var(--base00));--oscd-base0: var(--oscd-theme-base0, var(--base0));--oscd-base1: var(--oscd-theme-base1, var(--base1));--oscd-base2: var(--oscd-theme-base2, var(--base2));--oscd-base3: var(--oscd-theme-base3, var(--base3));--oscd-text-font: var(--oscd-theme-text-font, "Roboto");--oscd-icon-font: var(--oscd-theme-icon-font, "Material Icons")}.mdc-drawer span.mdc-drawer__title{color:var(--mdc-theme-text-primary-on-background)!important}abbr{text-decoration:none;border-bottom:none}mwc-textfield[iconTrailing=search]{--mdc-shape-small: 28px}/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-ed807d70],[data-v-ed807d70]:before,[data-v-ed807d70]:after,[data-v-ed807d70]::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial}}}@layer theme{[data-v-ed807d70]:root,[data-v-ed807d70]:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{[data-v-ed807d70],[data-v-ed807d70]:after,[data-v-ed807d70]:before,[data-v-ed807d70]::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-v-ed807d70]::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html[data-v-ed807d70],[data-v-ed807d70]:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr[data-v-ed807d70]{height:0;color:inherit;border-top-width:1px}abbr[data-v-ed807d70]:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1[data-v-ed807d70],h2[data-v-ed807d70],h3[data-v-ed807d70],h4[data-v-ed807d70],h5[data-v-ed807d70],h6[data-v-ed807d70]{font-size:inherit;font-weight:inherit}a[data-v-ed807d70]{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b[data-v-ed807d70],strong[data-v-ed807d70]{font-weight:bolder}code[data-v-ed807d70],kbd[data-v-ed807d70],samp[data-v-ed807d70],pre[data-v-ed807d70]{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small[data-v-ed807d70]{font-size:80%}sub[data-v-ed807d70],sup[data-v-ed807d70]{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub[data-v-ed807d70]{bottom:-.25em}sup[data-v-ed807d70]{top:-.5em}table[data-v-ed807d70]{text-indent:0;border-color:inherit;border-collapse:collapse}[data-v-ed807d70]:-moz-focusring{outline:auto}progress[data-v-ed807d70]{vertical-align:baseline}summary[data-v-ed807d70]{display:list-item}ol[data-v-ed807d70],ul[data-v-ed807d70],menu[data-v-ed807d70]{list-style:none}img[data-v-ed807d70],svg[data-v-ed807d70],video[data-v-ed807d70],canvas[data-v-ed807d70],audio[data-v-ed807d70],iframe[data-v-ed807d70],embed[data-v-ed807d70],object[data-v-ed807d70]{vertical-align:middle;display:block}img[data-v-ed807d70],video[data-v-ed807d70]{max-width:100%;height:auto}button[data-v-ed807d70],input[data-v-ed807d70],select[data-v-ed807d70],optgroup[data-v-ed807d70],textarea[data-v-ed807d70]{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-v-ed807d70]::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup[data-v-ed807d70]{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option[data-v-ed807d70]{padding-inline-start:20px}[data-v-ed807d70]::file-selector-button{margin-inline-end:4px}[data-v-ed807d70]::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){[data-v-ed807d70]::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-v-ed807d70]::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea[data-v-ed807d70]{resize:vertical}[data-v-ed807d70]::-webkit-search-decoration{-webkit-appearance:none}[data-v-ed807d70]::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-v-ed807d70]::-webkit-datetime-edit{display:inline-flex}[data-v-ed807d70]::-webkit-datetime-edit-fields-wrapper{padding:0}[data-v-ed807d70]::-webkit-datetime-edit{padding-block:0}[data-v-ed807d70]::-webkit-datetime-edit-year-field{padding-block:0}[data-v-ed807d70]::-webkit-datetime-edit-month-field{padding-block:0}[data-v-ed807d70]::-webkit-datetime-edit-day-field{padding-block:0}[data-v-ed807d70]::-webkit-datetime-edit-hour-field{padding-block:0}[data-v-ed807d70]::-webkit-datetime-edit-minute-field{padding-block:0}[data-v-ed807d70]::-webkit-datetime-edit-second-field{padding-block:0}[data-v-ed807d70]::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-v-ed807d70]::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-v-ed807d70]::-webkit-calendar-picker-indicator{line-height:1}[data-v-ed807d70]:-moz-ui-invalid{box-shadow:none}button[data-v-ed807d70],input[data-v-ed807d70]:where([type=button],[type=reset],[type=submit]){appearance:button}[data-v-ed807d70]::file-selector-button{appearance:button}[data-v-ed807d70]::-webkit-inner-spin-button{height:auto}[data-v-ed807d70]::-webkit-outer-spin-button{height:auto}[hidden][data-v-ed807d70]:where(:not([hidden=until-found])){display:none!important}:where([data-v-ed807d70]:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where([data-v-ed807d70]:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open][data-v-ed807d70],.modal-open[data-v-ed807d70],.modal-toggle:checked+.modal[data-v-ed807d70]):not(.modal-start,.modal-end){scrollbar-gutter:stable}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}[data-v-ed807d70]:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}[data-v-ed807d70]:root,[data-theme][data-v-ed807d70]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}[data-v-ed807d70]:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){[data-v-ed807d70]:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}[data-v-ed807d70]:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}:where([data-v-ed807d70]:root),[data-v-ed807d70]:root:has(input.theme-controller[value=ocean-light]:checked),[data-theme=ocean-light][data-v-ed807d70]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(37% 0 0);--color-primary:oklch(58.13% .0903 209.8);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(65.24% .0821 207.95);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(98% .001 106.423);--color-neutral:oklch(55% .013 58.071);--color-neutral-content:oklch(98% .031 120.757);--color-info:oklch(70% .165 254.624);--color-info-content:oklch(98% .001 106.423);--color-success:oklch(72% .219 149.579);--color-success-content:oklch(98% .001 106.423);--color-warning:oklch(87% .169 91.605);--color-warning-content:oklch(98% .001 106.423);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(98% .001 106.423);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.21875rem;--size-field:.21875rem;--border:1.5px;--depth:1;--noise:1;--border-color:var(--color-base-content)}}@layer components;@layer utilities{.loading[data-v-ed807d70]{pointer-events:none;aspect-ratio:1;vertical-align:middle;width:calc(var(--size-selector,.25rem)*6);background-color:currentColor;display:inline-block;-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:100%;mask-size:100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.relative[data-v-ed807d70]{position:relative}.inline[data-v-ed807d70]{display:inline}.transform[data-v-ed807d70]{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.link[data-v-ed807d70]{cursor:pointer;text-decoration-line:underline}.link[data-v-ed807d70]:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link[data-v-ed807d70]:focus{outline-offset:2px;outline:2px solid #0000}}.link[data-v-ed807d70]:focus-visible{outline-offset:2px;outline:2px solid}.flex-wrap[data-v-ed807d70]{flex-wrap:wrap}}[data-v-ed807d70]:root{--color-ocean-gray-00:#fff;--color-ocean-gray-25:#fafbfb;--color-ocean-gray-50:#f5f6f7;--color-ocean-gray-75:#eaeeef;--color-ocean-gray-100:#e1e4e6;--color-ocean-gray-150:#c6ced1;--color-ocean-gray-200:#bac1c4;--color-ocean-gray-250:#9fadb2;--color-ocean-gray-300:#889499;--color-ocean-gray-350:#72858c;--color-ocean-gray-400:#617177;--color-ocean-gray-450:#3f555e;--color-ocean-gray-500:#394d55;--color-ocean-gray-550:#34464d;--color-ocean-gray-600:#2e3e44;--color-ocean-gray-650:#27353b;--color-ocean-gray-700:#222e33;--color-ocean-gray-750:#1f272b;--color-ocean-gray-800:#171f22;--color-ocean-gray-850:#11171a;--color-ocean-gray-900:#0b0f11;--color-chart-1:#f7931e;--color-chart-2:#40535b;--color-chart-3:#2798aa;--color-chart-4:#6da89c;--color-chart-5:#a4cadd;--color-chart-6:#97b42d;--color-chart-7:#ffcb05;--color-chart-8:#ee652e;--color-chart-9:#528694;--color-chart-10:#a10f3b}header[data-v-ed807d70]{line-height:1.5}.logo[data-v-ed807d70]{margin:0 auto 2rem;display:block}@media (min-width:1024px){header[data-v-ed807d70]{padding-right:calc(var(--section-gap)/2);place-items:center;display:flex}.logo[data-v-ed807d70]{margin:0 2rem 0 0}header .wrapper[data-v-ed807d70]{flex-wrap:wrap;place-items:flex-start;display:flex}}@keyframes dropdown-ed807d70{0%{opacity:0}}@keyframes radio-ed807d70{0%{padding:5px}50%{padding:3px}}@keyframes toast-ed807d70{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes rating-ed807d70{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes skeleton-ed807d70{0%{background-position:150%}to{background-position:-50%}}@keyframes progress-ed807d70{50%{background-position-x:-115%}}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}`)),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ro(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const i of e.split(",")) t[i] = 1;
  return (i) => i in t;
}
const Be = {}, Hn = [], Wt = () => {
}, bu = () => !1, hi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Fo = (e) => e.startsWith("onUpdate:"), bt = Object.assign, Mo = (e, t) => {
  const i = e.indexOf(t);
  i > -1 && e.splice(i, 1);
}, _u = Object.prototype.hasOwnProperty, $e = (e, t) => _u.call(e, t), Ee = Array.isArray, fr = (e) => mi(e) === "[object Map]", Su = (e) => mi(e) === "[object Set]", we = (e) => typeof e == "function", lt = (e) => typeof e == "string", Jn = (e) => typeof e == "symbol", et = (e) => e !== null && typeof e == "object", Aa = (e) => (et(e) || we(e)) && we(e.then) && we(e.catch), Eu = Object.prototype.toString, mi = (e) => Eu.call(e), wu = (e) => mi(e).slice(8, -1), xu = (e) => mi(e) === "[object Object]", jo = (e) => lt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, dr = /* @__PURE__ */ Ro(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), yi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (i) => t[i] || (t[i] = e(i));
}, Tu = /-(\w)/g, _n = yi(
  (e) => e.replace(Tu, (t, i) => i ? i.toUpperCase() : "")
), Cu = /\B([A-Z])/g, Mn = yi(
  (e) => e.replace(Cu, "-$1").toLowerCase()
), Na = yi((e) => e.charAt(0).toUpperCase() + e.slice(1)), no = yi(
  (e) => e ? `on${Na(e)}` : ""
), vn = (e, t) => !Object.is(e, t), ro = (e, ...t) => {
  for (let i = 0; i < e.length; i++)
    e[i](...t);
}, mo = (e, t, i, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: i
  });
}, Iu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ms;
const gi = () => Ms || (Ms = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Lo(e) {
  if (Ee(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const o = e[i], a = lt(o) ? Ou(o) : Lo(o);
      if (a)
        for (const l in a)
          t[l] = a[l];
    }
    return t;
  } else if (lt(e) || et(e))
    return e;
}
const Au = /;(?![^(]*\))/g, Nu = /:([^]+)/, Du = /\/\*[^]*?\*\//g;
function Ou(e) {
  const t = {};
  return e.replace(Du, "").split(Au).forEach((i) => {
    if (i) {
      const o = i.split(Nu);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function $o(e) {
  let t = "";
  if (lt(e))
    t = e;
  else if (Ee(e))
    for (let i = 0; i < e.length; i++) {
      const o = $o(e[i]);
      o && (t += o + " ");
    }
  else if (et(e))
    for (const i in e)
      e[i] && (t += i + " ");
  return t.trim();
}
const Pu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ru = /* @__PURE__ */ Ro(Pu);
function Da(e) {
  return !!e || e === "";
}
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ot;
class Fu {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ot, !t && Ot && (this.index = (Ot.scopes || (Ot.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, i;
      if (this.scopes)
        for (t = 0, i = this.scopes.length; t < i; t++)
          this.scopes[t].pause();
      for (t = 0, i = this.effects.length; t < i; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, i;
      if (this.scopes)
        for (t = 0, i = this.scopes.length; t < i; t++)
          this.scopes[t].resume();
      for (t = 0, i = this.effects.length; t < i; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const i = Ot;
      try {
        return Ot = this, t();
      } finally {
        Ot = i;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ot, Ot = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ot = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let i, o;
      for (i = 0, o = this.effects.length; i < o; i++)
        this.effects[i].stop();
      for (this.effects.length = 0, i = 0, o = this.cleanups.length; i < o; i++)
        this.cleanups[i]();
      if (this.cleanups.length = 0, this.scopes) {
        for (i = 0, o = this.scopes.length; i < o; i++)
          this.scopes[i].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const a = this.parent.scopes.pop();
        a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Mu() {
  return Ot;
}
let ke;
const io = /* @__PURE__ */ new WeakSet();
class Oa {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ot && Ot.active && Ot.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, io.has(this) && (io.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ra(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, js(this), Fa(this);
    const t = ke, i = Lt;
    ke = this, Lt = !0;
    try {
      return this.fn();
    } finally {
      Ma(this), ke = t, Lt = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        qo(t);
      this.deps = this.depsTail = void 0, js(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? io.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    yo(this) && this.run();
  }
  get dirty() {
    return yo(this);
  }
}
let Pa = 0, pr, hr;
function Ra(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = hr, hr = e;
    return;
  }
  e.next = pr, pr = e;
}
function ko() {
  Pa++;
}
function Bo() {
  if (--Pa > 0)
    return;
  if (hr) {
    let t = hr;
    for (hr = void 0; t; ) {
      const i = t.next;
      t.next = void 0, t.flags &= -9, t = i;
    }
  }
  let e;
  for (; pr; ) {
    let t = pr;
    for (pr = void 0; t; ) {
      const i = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = i;
    }
  }
  if (e) throw e;
}
function Fa(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ma(e) {
  let t, i = e.depsTail, o = i;
  for (; o; ) {
    const a = o.prevDep;
    o.version === -1 ? (o === i && (i = a), qo(o), ju(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = a;
  }
  e.deps = t, e.depsTail = i;
}
function yo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ja(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ja(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === _r) || (e.globalVersion = _r, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !yo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, i = ke, o = Lt;
  ke = e, Lt = !0;
  try {
    Fa(e);
    const a = e.fn(e._value);
    (t.version === 0 || vn(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    ke = i, Lt = o, Ma(e), e.flags &= -3;
  }
}
function qo(e, t = !1) {
  const { dep: i, prevSub: o, nextSub: a } = e;
  if (o && (o.nextSub = a, e.prevSub = void 0), a && (a.prevSub = o, e.nextSub = void 0), i.subs === e && (i.subs = o, !o && i.computed)) {
    i.computed.flags &= -5;
    for (let l = i.computed.deps; l; l = l.nextDep)
      qo(l, !0);
  }
  !t && !--i.sc && i.map && i.map.delete(i.key);
}
function ju(e) {
  const { prevDep: t, nextDep: i } = e;
  t && (t.nextDep = i, e.prevDep = void 0), i && (i.prevDep = t, e.nextDep = void 0);
}
let Lt = !0;
const La = [];
function nn() {
  La.push(Lt), Lt = !1;
}
function rn() {
  const e = La.pop();
  Lt = e === void 0 ? !0 : e;
}
function js(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const i = ke;
    ke = void 0;
    try {
      t();
    } finally {
      ke = i;
    }
  }
}
let _r = 0;
class Lu {
  constructor(t, i) {
    this.sub = t, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ko {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ke || !Lt || ke === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== ke)
      i = this.activeLink = new Lu(ke, this), ke.deps ? (i.prevDep = ke.depsTail, ke.depsTail.nextDep = i, ke.depsTail = i) : ke.deps = ke.depsTail = i, $a(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const o = i.nextDep;
      o.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = o), i.prevDep = ke.depsTail, i.nextDep = void 0, ke.depsTail.nextDep = i, ke.depsTail = i, ke.deps === i && (ke.deps = o);
    }
    return i;
  }
  trigger(t) {
    this.version++, _r++, this.notify(t);
  }
  notify(t) {
    ko();
    try {
      for (let i = this.subs; i; i = i.prevSub)
        i.sub.notify() && i.sub.dep.notify();
    } finally {
      Bo();
    }
  }
}
function $a(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        $a(o);
    }
    const i = e.dep.subs;
    i !== e && (e.prevSub = i, i && (i.nextSub = e)), e.dep.subs = e;
  }
}
const go = /* @__PURE__ */ new WeakMap(), Rn = Symbol(
  ""
), vo = Symbol(
  ""
), Sr = Symbol(
  ""
);
function gt(e, t, i) {
  if (Lt && ke) {
    let o = go.get(e);
    o || go.set(e, o = /* @__PURE__ */ new Map());
    let a = o.get(i);
    a || (o.set(i, a = new Ko()), a.map = o, a.key = i), a.track();
  }
}
function tn(e, t, i, o, a, l) {
  const p = go.get(e);
  if (!p) {
    _r++;
    return;
  }
  const h = (b) => {
    b && b.trigger();
  };
  if (ko(), t === "clear")
    p.forEach(h);
  else {
    const b = Ee(e), M = b && jo(i);
    if (b && i === "length") {
      const T = Number(o);
      p.forEach((j, q) => {
        (q === "length" || q === Sr || !Jn(q) && q >= T) && h(j);
      });
    } else
      switch ((i !== void 0 || p.has(void 0)) && h(p.get(i)), M && h(p.get(Sr)), t) {
        case "add":
          b ? M && h(p.get("length")) : (h(p.get(Rn)), fr(e) && h(p.get(vo)));
          break;
        case "delete":
          b || (h(p.get(Rn)), fr(e) && h(p.get(vo)));
          break;
        case "set":
          fr(e) && h(p.get(Rn));
          break;
      }
  }
  Bo();
}
function Un(e) {
  const t = Le(e);
  return t === e ? t : (gt(t, "iterate", Sr), $t(e) ? t : t.map(Ct));
}
function Vo(e) {
  return gt(e = Le(e), "iterate", Sr), e;
}
const $u = {
  __proto__: null,
  [Symbol.iterator]() {
    return oo(this, Symbol.iterator, Ct);
  },
  concat(...e) {
    return Un(this).concat(
      ...e.map((t) => Ee(t) ? Un(t) : t)
    );
  },
  entries() {
    return oo(this, "entries", (e) => (e[1] = Ct(e[1]), e));
  },
  every(e, t) {
    return zt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return zt(this, "filter", e, t, (i) => i.map(Ct), arguments);
  },
  find(e, t) {
    return zt(this, "find", e, t, Ct, arguments);
  },
  findIndex(e, t) {
    return zt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return zt(this, "findLast", e, t, Ct, arguments);
  },
  findLastIndex(e, t) {
    return zt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return zt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return so(this, "includes", e);
  },
  indexOf(...e) {
    return so(this, "indexOf", e);
  },
  join(e) {
    return Un(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return so(this, "lastIndexOf", e);
  },
  map(e, t) {
    return zt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return cr(this, "pop");
  },
  push(...e) {
    return cr(this, "push", e);
  },
  reduce(e, ...t) {
    return Ls(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ls(this, "reduceRight", e, t);
  },
  shift() {
    return cr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return zt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return cr(this, "splice", e);
  },
  toReversed() {
    return Un(this).toReversed();
  },
  toSorted(e) {
    return Un(this).toSorted(e);
  },
  toSpliced(...e) {
    return Un(this).toSpliced(...e);
  },
  unshift(...e) {
    return cr(this, "unshift", e);
  },
  values() {
    return oo(this, "values", Ct);
  }
};
function oo(e, t, i) {
  const o = Vo(e), a = o[t]();
  return o !== e && !$t(e) && (a._next = a.next, a.next = () => {
    const l = a._next();
    return l.value && (l.value = i(l.value)), l;
  }), a;
}
const ku = Array.prototype;
function zt(e, t, i, o, a, l) {
  const p = Vo(e), h = p !== e && !$t(e), b = p[t];
  if (b !== ku[t]) {
    const j = b.apply(e, l);
    return h ? Ct(j) : j;
  }
  let M = i;
  p !== e && (h ? M = function(j, q) {
    return i.call(this, Ct(j), q, e);
  } : i.length > 2 && (M = function(j, q) {
    return i.call(this, j, q, e);
  }));
  const T = b.call(p, M, o);
  return h && a ? a(T) : T;
}
function Ls(e, t, i, o) {
  const a = Vo(e);
  let l = i;
  return a !== e && ($t(e) ? i.length > 3 && (l = function(p, h, b) {
    return i.call(this, p, h, b, e);
  }) : l = function(p, h, b) {
    return i.call(this, p, Ct(h), b, e);
  }), a[t](l, ...o);
}
function so(e, t, i) {
  const o = Le(e);
  gt(o, "iterate", Sr);
  const a = o[t](...i);
  return (a === -1 || a === !1) && Wo(i[0]) ? (i[0] = Le(i[0]), o[t](...i)) : a;
}
function cr(e, t, i = []) {
  nn(), ko();
  const o = Le(e)[t].apply(e, i);
  return Bo(), rn(), o;
}
const Bu = /* @__PURE__ */ Ro("__proto__,__v_isRef,__isVue"), ka = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Jn)
);
function qu(e) {
  Jn(e) || (e = String(e));
  const t = Le(this);
  return gt(t, "has", e), t.hasOwnProperty(e);
}
class Ba {
  constructor(t = !1, i = !1) {
    this._isReadonly = t, this._isShallow = i;
  }
  get(t, i, o) {
    if (i === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, l = this._isShallow;
    if (i === "__v_isReactive")
      return !a;
    if (i === "__v_isReadonly")
      return a;
    if (i === "__v_isShallow")
      return l;
    if (i === "__v_raw")
      return o === (a ? l ? Ju : Ua : l ? Va : Ka).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const p = Ee(t);
    if (!a) {
      let b;
      if (p && (b = $u[i]))
        return b;
      if (i === "hasOwnProperty")
        return qu;
    }
    const h = Reflect.get(
      t,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      vt(t) ? t : o
    );
    return (Jn(i) ? ka.has(i) : Bu(i)) || (a || gt(t, "get", i), l) ? h : vt(h) ? p && jo(i) ? h : h.value : et(h) ? a ? Ga(h) : Go(h) : h;
  }
}
class qa extends Ba {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, i, o, a) {
    let l = t[i];
    if (!this._isShallow) {
      const b = Fn(l);
      if (!$t(o) && !Fn(o) && (l = Le(l), o = Le(o)), !Ee(t) && vt(l) && !vt(o))
        return b ? !1 : (l.value = o, !0);
    }
    const p = Ee(t) && jo(i) ? Number(i) < t.length : $e(t, i), h = Reflect.set(
      t,
      i,
      o,
      vt(t) ? t : a
    );
    return t === Le(a) && (p ? vn(o, l) && tn(t, "set", i, o) : tn(t, "add", i, o)), h;
  }
  deleteProperty(t, i) {
    const o = $e(t, i);
    t[i];
    const a = Reflect.deleteProperty(t, i);
    return a && o && tn(t, "delete", i, void 0), a;
  }
  has(t, i) {
    const o = Reflect.has(t, i);
    return (!Jn(i) || !ka.has(i)) && gt(t, "has", i), o;
  }
  ownKeys(t) {
    return gt(
      t,
      "iterate",
      Ee(t) ? "length" : Rn
    ), Reflect.ownKeys(t);
  }
}
class Ku extends Ba {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, i) {
    return !0;
  }
  deleteProperty(t, i) {
    return !0;
  }
}
const Vu = /* @__PURE__ */ new qa(), Uu = /* @__PURE__ */ new Ku(), Gu = /* @__PURE__ */ new qa(!0);
const bo = (e) => e, Jr = (e) => Reflect.getPrototypeOf(e);
function Hu(e, t, i) {
  return function(...o) {
    const a = this.__v_raw, l = Le(a), p = fr(l), h = e === "entries" || e === Symbol.iterator && p, b = e === "keys" && p, M = a[e](...o), T = i ? bo : t ? _o : Ct;
    return !t && gt(
      l,
      "iterate",
      b ? vo : Rn
    ), {
      // iterator protocol
      next() {
        const { value: j, done: q } = M.next();
        return q ? { value: j, done: q } : {
          value: h ? [T(j[0]), T(j[1])] : T(j),
          done: q
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function zr(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Wu(e, t) {
  const i = {
    get(a) {
      const l = this.__v_raw, p = Le(l), h = Le(a);
      e || (vn(a, h) && gt(p, "get", a), gt(p, "get", h));
      const { has: b } = Jr(p), M = t ? bo : e ? _o : Ct;
      if (b.call(p, a))
        return M(l.get(a));
      if (b.call(p, h))
        return M(l.get(h));
      l !== p && l.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && gt(Le(a), "iterate", Rn), Reflect.get(a, "size", a);
    },
    has(a) {
      const l = this.__v_raw, p = Le(l), h = Le(a);
      return e || (vn(a, h) && gt(p, "has", a), gt(p, "has", h)), a === h ? l.has(a) : l.has(a) || l.has(h);
    },
    forEach(a, l) {
      const p = this, h = p.__v_raw, b = Le(h), M = t ? bo : e ? _o : Ct;
      return !e && gt(b, "iterate", Rn), h.forEach((T, j) => a.call(l, M(T), M(j), p));
    }
  };
  return bt(
    i,
    e ? {
      add: zr("add"),
      set: zr("set"),
      delete: zr("delete"),
      clear: zr("clear")
    } : {
      add(a) {
        !t && !$t(a) && !Fn(a) && (a = Le(a));
        const l = Le(this);
        return Jr(l).has.call(l, a) || (l.add(a), tn(l, "add", a, a)), this;
      },
      set(a, l) {
        !t && !$t(l) && !Fn(l) && (l = Le(l));
        const p = Le(this), { has: h, get: b } = Jr(p);
        let M = h.call(p, a);
        M || (a = Le(a), M = h.call(p, a));
        const T = b.call(p, a);
        return p.set(a, l), M ? vn(l, T) && tn(p, "set", a, l) : tn(p, "add", a, l), this;
      },
      delete(a) {
        const l = Le(this), { has: p, get: h } = Jr(l);
        let b = p.call(l, a);
        b || (a = Le(a), b = p.call(l, a)), h && h.call(l, a);
        const M = l.delete(a);
        return b && tn(l, "delete", a, void 0), M;
      },
      clear() {
        const a = Le(this), l = a.size !== 0, p = a.clear();
        return l && tn(
          a,
          "clear",
          void 0,
          void 0
        ), p;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    i[a] = Hu(a, e, t);
  }), i;
}
function Uo(e, t) {
  const i = Wu(e, t);
  return (o, a, l) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? o : Reflect.get(
    $e(i, a) && a in o ? i : o,
    a,
    l
  );
}
const Yu = {
  get: /* @__PURE__ */ Uo(!1, !1)
}, Xu = {
  get: /* @__PURE__ */ Uo(!1, !0)
}, Qu = {
  get: /* @__PURE__ */ Uo(!0, !1)
};
const Ka = /* @__PURE__ */ new WeakMap(), Va = /* @__PURE__ */ new WeakMap(), Ua = /* @__PURE__ */ new WeakMap(), Ju = /* @__PURE__ */ new WeakMap();
function zu(e) {
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
function Zu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : zu(wu(e));
}
function Go(e) {
  return Fn(e) ? e : Ho(
    e,
    !1,
    Vu,
    Yu,
    Ka
  );
}
function el(e) {
  return Ho(
    e,
    !1,
    Gu,
    Xu,
    Va
  );
}
function Ga(e) {
  return Ho(
    e,
    !0,
    Uu,
    Qu,
    Ua
  );
}
function Ho(e, t, i, o, a) {
  if (!et(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = Zu(e);
  if (l === 0)
    return e;
  const p = a.get(e);
  if (p)
    return p;
  const h = new Proxy(
    e,
    l === 2 ? o : i
  );
  return a.set(e, h), h;
}
function mr(e) {
  return Fn(e) ? mr(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Fn(e) {
  return !!(e && e.__v_isReadonly);
}
function $t(e) {
  return !!(e && e.__v_isShallow);
}
function Wo(e) {
  return e ? !!e.__v_raw : !1;
}
function Le(e) {
  const t = e && e.__v_raw;
  return t ? Le(t) : e;
}
function tl(e) {
  return !$e(e, "__v_skip") && Object.isExtensible(e) && mo(e, "__v_skip", !0), e;
}
const Ct = (e) => et(e) ? Go(e) : e, _o = (e) => et(e) ? Ga(e) : e;
function vt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function So(e) {
  return nl(e, !1);
}
function nl(e, t) {
  return vt(e) ? e : new rl(e, t);
}
class rl {
  constructor(t, i) {
    this.dep = new Ko(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? t : Le(t), this._value = i ? t : Ct(t), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const i = this._rawValue, o = this.__v_isShallow || $t(t) || Fn(t);
    t = o ? t : Le(t), vn(t, i) && (this._rawValue = t, this._value = o ? t : Ct(t), this.dep.trigger());
  }
}
function Ha(e) {
  return vt(e) ? e.value : e;
}
const il = {
  get: (e, t, i) => t === "__v_raw" ? e : Ha(Reflect.get(e, t, i)),
  set: (e, t, i, o) => {
    const a = e[t];
    return vt(a) && !vt(i) ? (a.value = i, !0) : Reflect.set(e, t, i, o);
  }
};
function Wa(e) {
  return mr(e) ? e : new Proxy(e, il);
}
class ol {
  constructor(t, i, o) {
    this.fn = t, this.setter = i, this._value = void 0, this.dep = new Ko(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = _r - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ke !== this)
      return Ra(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ja(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function sl(e, t, i = !1) {
  let o, a;
  return we(e) ? o = e : (o = e.get, a = e.set), new ol(o, a, i);
}
const Zr = {}, ai = /* @__PURE__ */ new WeakMap();
let On;
function al(e, t = !1, i = On) {
  if (i) {
    let o = ai.get(i);
    o || ai.set(i, o = []), o.push(e);
  }
}
function cl(e, t, i = Be) {
  const { immediate: o, deep: a, once: l, scheduler: p, augmentJob: h, call: b } = i, M = (oe) => a ? oe : $t(oe) || a === !1 || a === 0 ? yn(oe, 1) : yn(oe);
  let T, j, q, H, ae = !1, le = !1;
  if (vt(e) ? (j = () => e.value, ae = $t(e)) : mr(e) ? (j = () => M(e), ae = !0) : Ee(e) ? (le = !0, ae = e.some((oe) => mr(oe) || $t(oe)), j = () => e.map((oe) => {
    if (vt(oe))
      return oe.value;
    if (mr(oe))
      return M(oe);
    if (we(oe))
      return b ? b(oe, 2) : oe();
  })) : we(e) ? t ? j = b ? () => b(e, 2) : e : j = () => {
    if (q) {
      nn();
      try {
        q();
      } finally {
        rn();
      }
    }
    const oe = On;
    On = T;
    try {
      return b ? b(e, 3, [H]) : e(H);
    } finally {
      On = oe;
    }
  } : j = Wt, t && a) {
    const oe = j, je = a === !0 ? 1 / 0 : a;
    j = () => yn(oe(), je);
  }
  const ye = Mu(), he = () => {
    T.stop(), ye && ye.active && Mo(ye.effects, T);
  };
  if (l && t) {
    const oe = t;
    t = (...je) => {
      oe(...je), he();
    };
  }
  let be = le ? new Array(e.length).fill(Zr) : Zr;
  const De = (oe) => {
    if (!(!(T.flags & 1) || !T.dirty && !oe))
      if (t) {
        const je = T.run();
        if (a || ae || (le ? je.some((Ke, xe) => vn(Ke, be[xe])) : vn(je, be))) {
          q && q();
          const Ke = On;
          On = T;
          try {
            const xe = [
              je,
              // pass undefined as the old value when it's changed for the first time
              be === Zr ? void 0 : le && be[0] === Zr ? [] : be,
              H
            ];
            be = je, b ? b(t, 3, xe) : (
              // @ts-expect-error
              t(...xe)
            );
          } finally {
            On = Ke;
          }
        }
      } else
        T.run();
  };
  return h && h(De), T = new Oa(j), T.scheduler = p ? () => p(De, !1) : De, H = (oe) => al(oe, !1, T), q = T.onStop = () => {
    const oe = ai.get(T);
    if (oe) {
      if (b)
        b(oe, 4);
      else
        for (const je of oe) je();
      ai.delete(T);
    }
  }, t ? o ? De(!0) : be = T.run() : p ? p(De.bind(null, !0), !0) : T.run(), he.pause = T.pause.bind(T), he.resume = T.resume.bind(T), he.stop = he, he;
}
function yn(e, t = 1 / 0, i) {
  if (t <= 0 || !et(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Set(), i.has(e)))
    return e;
  if (i.add(e), t--, vt(e))
    yn(e.value, t, i);
  else if (Ee(e))
    for (let o = 0; o < e.length; o++)
      yn(e[o], t, i);
  else if (Su(e) || fr(e))
    e.forEach((o) => {
      yn(o, t, i);
    });
  else if (xu(e)) {
    for (const o in e)
      yn(e[o], t, i);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && yn(e[o], t, i);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Tr(e, t, i, o) {
  try {
    return o ? e(...o) : e();
  } catch (a) {
    vi(a, t, i);
  }
}
function Yt(e, t, i, o) {
  if (we(e)) {
    const a = Tr(e, t, i, o);
    return a && Aa(a) && a.catch((l) => {
      vi(l, t, i);
    }), a;
  }
  if (Ee(e)) {
    const a = [];
    for (let l = 0; l < e.length; l++)
      a.push(Yt(e[l], t, i, o));
    return a;
  }
}
function vi(e, t, i, o = !0) {
  const a = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: p } = t && t.appContext.config || Be;
  if (t) {
    let h = t.parent;
    const b = t.proxy, M = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; h; ) {
      const T = h.ec;
      if (T) {
        for (let j = 0; j < T.length; j++)
          if (T[j](e, b, M) === !1)
            return;
      }
      h = h.parent;
    }
    if (l) {
      nn(), Tr(l, null, 10, [
        e,
        b,
        M
      ]), rn();
      return;
    }
  }
  ul(e, i, a, o, p);
}
function ul(e, t, i, o = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const It = [];
let Ut = -1;
const Wn = [];
let pn = null, Gn = 0;
const Ya = /* @__PURE__ */ Promise.resolve();
let ci = null;
function ll(e) {
  const t = ci || Ya;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function fl(e) {
  let t = Ut + 1, i = It.length;
  for (; t < i; ) {
    const o = t + i >>> 1, a = It[o], l = Er(a);
    l < e || l === e && a.flags & 2 ? t = o + 1 : i = o;
  }
  return t;
}
function Yo(e) {
  if (!(e.flags & 1)) {
    const t = Er(e), i = It[It.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Er(i) ? It.push(e) : It.splice(fl(t), 0, e), e.flags |= 1, Xa();
  }
}
function Xa() {
  ci || (ci = Ya.then(Ja));
}
function dl(e) {
  Ee(e) ? Wn.push(...e) : pn && e.id === -1 ? pn.splice(Gn + 1, 0, e) : e.flags & 1 || (Wn.push(e), e.flags |= 1), Xa();
}
function $s(e, t, i = Ut + 1) {
  for (; i < It.length; i++) {
    const o = It[i];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid)
        continue;
      It.splice(i, 1), i--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Qa(e) {
  if (Wn.length) {
    const t = [...new Set(Wn)].sort(
      (i, o) => Er(i) - Er(o)
    );
    if (Wn.length = 0, pn) {
      pn.push(...t);
      return;
    }
    for (pn = t, Gn = 0; Gn < pn.length; Gn++) {
      const i = pn[Gn];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    pn = null, Gn = 0;
  }
}
const Er = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ja(e) {
  try {
    for (Ut = 0; Ut < It.length; Ut++) {
      const t = It[Ut];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Tr(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ut < It.length; Ut++) {
      const t = It[Ut];
      t && (t.flags &= -2);
    }
    Ut = -1, It.length = 0, Qa(), ci = null, (It.length || Wn.length) && Ja();
  }
}
let Ht = null, za = null;
function ui(e) {
  const t = Ht;
  return Ht = e, za = e && e.type.__scopeId || null, t;
}
function pl(e, t = Ht, i) {
  if (!t || e._n)
    return e;
  const o = (...a) => {
    o._d && Ws(-1);
    const l = ui(t);
    let p;
    try {
      p = e(...a);
    } finally {
      ui(l), o._d && Ws(1);
    }
    return p;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Nn(e, t, i, o) {
  const a = e.dirs, l = t && t.dirs;
  for (let p = 0; p < a.length; p++) {
    const h = a[p];
    l && (h.oldValue = l[p].value);
    let b = h.dir[o];
    b && (nn(), Yt(b, i, 8, [
      e.el,
      h,
      e,
      t
    ]), rn());
  }
}
const hl = Symbol("_vte"), ml = (e) => e.__isTeleport;
function Xo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Xo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Za(e, t) {
  return we(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    bt({ name: e.name }, t, { setup: e })
  ) : e;
}
function ec(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function yr(e, t, i, o, a = !1) {
  if (Ee(e)) {
    e.forEach(
      (ae, le) => yr(
        ae,
        t && (Ee(t) ? t[le] : t),
        i,
        o,
        a
      )
    );
    return;
  }
  if (gr(o) && !a) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && yr(e, t, i, o.component.subTree);
    return;
  }
  const l = o.shapeFlag & 4 ? ts(o.component) : o.el, p = a ? null : l, { i: h, r: b } = e, M = t && t.r, T = h.refs === Be ? h.refs = {} : h.refs, j = h.setupState, q = Le(j), H = j === Be ? () => !1 : (ae) => $e(q, ae);
  if (M != null && M !== b && (lt(M) ? (T[M] = null, H(M) && (j[M] = null)) : vt(M) && (M.value = null)), we(b))
    Tr(b, h, 12, [p, T]);
  else {
    const ae = lt(b), le = vt(b);
    if (ae || le) {
      const ye = () => {
        if (e.f) {
          const he = ae ? H(b) ? j[b] : T[b] : b.value;
          a ? Ee(he) && Mo(he, l) : Ee(he) ? he.includes(l) || he.push(l) : ae ? (T[b] = [l], H(b) && (j[b] = T[b])) : (b.value = [l], e.k && (T[e.k] = b.value));
        } else ae ? (T[b] = p, H(b) && (j[b] = p)) : le && (b.value = p, e.k && (T[e.k] = p));
      };
      p ? (ye.id = -1, Rt(ye, i)) : ye();
    }
  }
}
gi().requestIdleCallback;
gi().cancelIdleCallback;
const gr = (e) => !!e.type.__asyncLoader, tc = (e) => e.type.__isKeepAlive;
function yl(e, t) {
  nc(e, "a", t);
}
function gl(e, t) {
  nc(e, "da", t);
}
function nc(e, t, i = At) {
  const o = e.__wdc || (e.__wdc = () => {
    let a = i;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (bi(t, o, i), i) {
    let a = i.parent;
    for (; a && a.parent; )
      tc(a.parent.vnode) && vl(o, t, i, a), a = a.parent;
  }
}
function vl(e, t, i, o) {
  const a = bi(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Qo(() => {
    Mo(o[t], a);
  }, i);
}
function bi(e, t, i = At, o = !1) {
  if (i) {
    const a = i[e] || (i[e] = []), l = t.__weh || (t.__weh = (...p) => {
      nn();
      const h = Cr(i), b = Yt(t, i, e, p);
      return h(), rn(), b;
    });
    return o ? a.unshift(l) : a.push(l), l;
  }
}
const on = (e) => (t, i = At) => {
  (!xr || e === "sp") && bi(e, (...o) => t(...o), i);
}, bl = on("bm"), li = on("m"), _l = on(
  "bu"
), Sl = on("u"), El = on(
  "bum"
), Qo = on("um"), wl = on(
  "sp"
), xl = on("rtg"), Tl = on("rtc");
function Cl(e, t = At) {
  bi("ec", e, t);
}
const Il = Symbol.for("v-ndc"), Eo = (e) => e ? xc(e) ? ts(e) : Eo(e.parent) : null, vr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ bt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Eo(e.parent),
    $root: (e) => Eo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ic(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Yo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ll.bind(e.proxy)),
    $watch: (e) => Ql.bind(e)
  })
), ao = (e, t) => e !== Be && !e.__isScriptSetup && $e(e, t), Al = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: i, setupState: o, data: a, props: l, accessCache: p, type: h, appContext: b } = e;
    let M;
    if (t[0] !== "$") {
      const H = p[t];
      if (H !== void 0)
        switch (H) {
          case 1:
            return o[t];
          case 2:
            return a[t];
          case 4:
            return i[t];
          case 3:
            return l[t];
        }
      else {
        if (ao(o, t))
          return p[t] = 1, o[t];
        if (a !== Be && $e(a, t))
          return p[t] = 2, a[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (M = e.propsOptions[0]) && $e(M, t)
        )
          return p[t] = 3, l[t];
        if (i !== Be && $e(i, t))
          return p[t] = 4, i[t];
        wo && (p[t] = 0);
      }
    }
    const T = vr[t];
    let j, q;
    if (T)
      return t === "$attrs" && gt(e.attrs, "get", ""), T(e);
    if (
      // css module (injected by vue-loader)
      (j = h.__cssModules) && (j = j[t])
    )
      return j;
    if (i !== Be && $e(i, t))
      return p[t] = 4, i[t];
    if (
      // global properties
      q = b.config.globalProperties, $e(q, t)
    )
      return q[t];
  },
  set({ _: e }, t, i) {
    const { data: o, setupState: a, ctx: l } = e;
    return ao(a, t) ? (a[t] = i, !0) : o !== Be && $e(o, t) ? (o[t] = i, !0) : $e(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = i, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: i, ctx: o, appContext: a, propsOptions: l }
  }, p) {
    let h;
    return !!i[p] || e !== Be && $e(e, p) || ao(t, p) || (h = l[0]) && $e(h, p) || $e(o, p) || $e(vr, p) || $e(a.config.globalProperties, p);
  },
  defineProperty(e, t, i) {
    return i.get != null ? e._.accessCache[t] = 0 : $e(i, "value") && this.set(e, t, i.value, null), Reflect.defineProperty(e, t, i);
  }
};
function ks(e) {
  return Ee(e) ? e.reduce(
    (t, i) => (t[i] = null, t),
    {}
  ) : e;
}
let wo = !0;
function Nl(e) {
  const t = ic(e), i = e.proxy, o = e.ctx;
  wo = !1, t.beforeCreate && Bs(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: l,
    methods: p,
    watch: h,
    provide: b,
    inject: M,
    // lifecycle
    created: T,
    beforeMount: j,
    mounted: q,
    beforeUpdate: H,
    updated: ae,
    activated: le,
    deactivated: ye,
    beforeDestroy: he,
    beforeUnmount: be,
    destroyed: De,
    unmounted: oe,
    render: je,
    renderTracked: Ke,
    renderTriggered: xe,
    errorCaptured: tt,
    serverPrefetch: F,
    // public API
    expose: Et,
    inheritAttrs: dt,
    // assets
    components: Oe,
    directives: Je,
    filters: kt
  } = t;
  if (M && Dl(M, o, null), p)
    for (const fe in p) {
      const Te = p[fe];
      we(Te) && (o[fe] = Te.bind(i));
    }
  if (a) {
    const fe = a.call(i, i);
    et(fe) && (e.data = Go(fe));
  }
  if (wo = !0, l)
    for (const fe in l) {
      const Te = l[fe], ze = we(Te) ? Te.bind(i, i) : we(Te.get) ? Te.get.bind(i, i) : Wt, ot = !we(Te) && we(Te.set) ? Te.set.bind(i) : Wt, nt = _f({
        get: ze,
        set: ot
      });
      Object.defineProperty(o, fe, {
        enumerable: !0,
        configurable: !0,
        get: () => nt.value,
        set: (pt) => nt.value = pt
      });
    }
  if (h)
    for (const fe in h)
      rc(h[fe], o, i, fe);
  if (b) {
    const fe = we(b) ? b.call(i) : b;
    Reflect.ownKeys(fe).forEach((Te) => {
      jl(Te, fe[Te]);
    });
  }
  T && Bs(T, e, "c");
  function Ve(fe, Te) {
    Ee(Te) ? Te.forEach((ze) => fe(ze.bind(i))) : Te && fe(Te.bind(i));
  }
  if (Ve(bl, j), Ve(li, q), Ve(_l, H), Ve(Sl, ae), Ve(yl, le), Ve(gl, ye), Ve(Cl, tt), Ve(Tl, Ke), Ve(xl, xe), Ve(El, be), Ve(Qo, oe), Ve(wl, F), Ee(Et))
    if (Et.length) {
      const fe = e.exposed || (e.exposed = {});
      Et.forEach((Te) => {
        Object.defineProperty(fe, Te, {
          get: () => i[Te],
          set: (ze) => i[Te] = ze
        });
      });
    } else e.exposed || (e.exposed = {});
  je && e.render === Wt && (e.render = je), dt != null && (e.inheritAttrs = dt), Oe && (e.components = Oe), Je && (e.directives = Je), F && ec(e);
}
function Dl(e, t, i = Wt) {
  Ee(e) && (e = xo(e));
  for (const o in e) {
    const a = e[o];
    let l;
    et(a) ? "default" in a ? l = ri(
      a.from || o,
      a.default,
      !0
    ) : l = ri(a.from || o) : l = ri(a), vt(l) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (p) => l.value = p
    }) : t[o] = l;
  }
}
function Bs(e, t, i) {
  Yt(
    Ee(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    i
  );
}
function rc(e, t, i, o) {
  let a = o.includes(".") ? yc(i, o) : () => i[o];
  if (lt(e)) {
    const l = t[e];
    we(l) && uo(a, l);
  } else if (we(e))
    uo(a, e.bind(i));
  else if (et(e))
    if (Ee(e))
      e.forEach((l) => rc(l, t, i, o));
    else {
      const l = we(e.handler) ? e.handler.bind(i) : t[e.handler];
      we(l) && uo(a, l, e);
    }
}
function ic(e) {
  const t = e.type, { mixins: i, extends: o } = t, {
    mixins: a,
    optionsCache: l,
    config: { optionMergeStrategies: p }
  } = e.appContext, h = l.get(t);
  let b;
  return h ? b = h : !a.length && !i && !o ? b = t : (b = {}, a.length && a.forEach(
    (M) => fi(b, M, p, !0)
  ), fi(b, t, p)), et(t) && l.set(t, b), b;
}
function fi(e, t, i, o = !1) {
  const { mixins: a, extends: l } = t;
  l && fi(e, l, i, !0), a && a.forEach(
    (p) => fi(e, p, i, !0)
  );
  for (const p in t)
    if (!(o && p === "expose")) {
      const h = Ol[p] || i && i[p];
      e[p] = h ? h(e[p], t[p]) : t[p];
    }
  return e;
}
const Ol = {
  data: qs,
  props: Ks,
  emits: Ks,
  // objects
  methods: lr,
  computed: lr,
  // lifecycle
  beforeCreate: Tt,
  created: Tt,
  beforeMount: Tt,
  mounted: Tt,
  beforeUpdate: Tt,
  updated: Tt,
  beforeDestroy: Tt,
  beforeUnmount: Tt,
  destroyed: Tt,
  unmounted: Tt,
  activated: Tt,
  deactivated: Tt,
  errorCaptured: Tt,
  serverPrefetch: Tt,
  // assets
  components: lr,
  directives: lr,
  // watch
  watch: Rl,
  // provide / inject
  provide: qs,
  inject: Pl
};
function qs(e, t) {
  return t ? e ? function() {
    return bt(
      we(e) ? e.call(this, this) : e,
      we(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Pl(e, t) {
  return lr(xo(e), xo(t));
}
function xo(e) {
  if (Ee(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++)
      t[e[i]] = e[i];
    return t;
  }
  return e;
}
function Tt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function lr(e, t) {
  return e ? bt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ks(e, t) {
  return e ? Ee(e) && Ee(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : bt(
    /* @__PURE__ */ Object.create(null),
    ks(e),
    ks(t ?? {})
  ) : t;
}
function Rl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const i = bt(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    i[o] = Tt(e[o], t[o]);
  return i;
}
function oc() {
  return {
    app: null,
    config: {
      isNativeTag: bu,
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
let Fl = 0;
function Ml(e, t) {
  return function(o, a = null) {
    we(o) || (o = bt({}, o)), a != null && !et(a) && (a = null);
    const l = oc(), p = /* @__PURE__ */ new WeakSet(), h = [];
    let b = !1;
    const M = l.app = {
      _uid: Fl++,
      _component: o,
      _props: a,
      _container: null,
      _context: l,
      _instance: null,
      version: Sf,
      get config() {
        return l.config;
      },
      set config(T) {
      },
      use(T, ...j) {
        return p.has(T) || (T && we(T.install) ? (p.add(T), T.install(M, ...j)) : we(T) && (p.add(T), T(M, ...j))), M;
      },
      mixin(T) {
        return l.mixins.includes(T) || l.mixins.push(T), M;
      },
      component(T, j) {
        return j ? (l.components[T] = j, M) : l.components[T];
      },
      directive(T, j) {
        return j ? (l.directives[T] = j, M) : l.directives[T];
      },
      mount(T, j, q) {
        if (!b) {
          const H = M._ceVNode || bn(o, a);
          return H.appContext = l, q === !0 ? q = "svg" : q === !1 && (q = void 0), e(H, T, q), b = !0, M._container = T, T.__vue_app__ = M, ts(H.component);
        }
      },
      onUnmount(T) {
        h.push(T);
      },
      unmount() {
        b && (Yt(
          h,
          M._instance,
          16
        ), e(null, M._container), delete M._container.__vue_app__);
      },
      provide(T, j) {
        return l.provides[T] = j, M;
      },
      runWithContext(T) {
        const j = Yn;
        Yn = M;
        try {
          return T();
        } finally {
          Yn = j;
        }
      }
    };
    return M;
  };
}
let Yn = null;
function jl(e, t) {
  if (At) {
    let i = At.provides;
    const o = At.parent && At.parent.provides;
    o === i && (i = At.provides = Object.create(o)), i[e] = t;
  }
}
function ri(e, t, i = !1) {
  const o = At || Ht;
  if (o || Yn) {
    let a = Yn ? Yn._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return i && we(t) ? t.call(o && o.proxy) : t;
  }
}
const sc = {}, ac = () => Object.create(sc), cc = (e) => Object.getPrototypeOf(e) === sc;
function Ll(e, t, i, o = !1) {
  const a = {}, l = ac();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), uc(e, t, a, l);
  for (const p in e.propsOptions[0])
    p in a || (a[p] = void 0);
  i ? e.props = o ? a : el(a) : e.type.props ? e.props = a : e.props = l, e.attrs = l;
}
function $l(e, t, i, o) {
  const {
    props: a,
    attrs: l,
    vnode: { patchFlag: p }
  } = e, h = Le(a), [b] = e.propsOptions;
  let M = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (o || p > 0) && !(p & 16)
  ) {
    if (p & 8) {
      const T = e.vnode.dynamicProps;
      for (let j = 0; j < T.length; j++) {
        let q = T[j];
        if (_i(e.emitsOptions, q))
          continue;
        const H = t[q];
        if (b)
          if ($e(l, q))
            H !== l[q] && (l[q] = H, M = !0);
          else {
            const ae = _n(q);
            a[ae] = To(
              b,
              h,
              ae,
              H,
              e,
              !1
            );
          }
        else
          H !== l[q] && (l[q] = H, M = !0);
      }
    }
  } else {
    uc(e, t, a, l) && (M = !0);
    let T;
    for (const j in h)
      (!t || // for camelCase
      !$e(t, j) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((T = Mn(j)) === j || !$e(t, T))) && (b ? i && // for camelCase
      (i[j] !== void 0 || // for kebab-case
      i[T] !== void 0) && (a[j] = To(
        b,
        h,
        j,
        void 0,
        e,
        !0
      )) : delete a[j]);
    if (l !== h)
      for (const j in l)
        (!t || !$e(t, j)) && (delete l[j], M = !0);
  }
  M && tn(e.attrs, "set", "");
}
function uc(e, t, i, o) {
  const [a, l] = e.propsOptions;
  let p = !1, h;
  if (t)
    for (let b in t) {
      if (dr(b))
        continue;
      const M = t[b];
      let T;
      a && $e(a, T = _n(b)) ? !l || !l.includes(T) ? i[T] = M : (h || (h = {}))[T] = M : _i(e.emitsOptions, b) || (!(b in o) || M !== o[b]) && (o[b] = M, p = !0);
    }
  if (l) {
    const b = Le(i), M = h || Be;
    for (let T = 0; T < l.length; T++) {
      const j = l[T];
      i[j] = To(
        a,
        b,
        j,
        M[j],
        e,
        !$e(M, j)
      );
    }
  }
  return p;
}
function To(e, t, i, o, a, l) {
  const p = e[i];
  if (p != null) {
    const h = $e(p, "default");
    if (h && o === void 0) {
      const b = p.default;
      if (p.type !== Function && !p.skipFactory && we(b)) {
        const { propsDefaults: M } = a;
        if (i in M)
          o = M[i];
        else {
          const T = Cr(a);
          o = M[i] = b.call(
            null,
            t
          ), T();
        }
      } else
        o = b;
      a.ce && a.ce._setProp(i, o);
    }
    p[
      0
      /* shouldCast */
    ] && (l && !h ? o = !1 : p[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Mn(i)) && (o = !0));
  }
  return o;
}
const kl = /* @__PURE__ */ new WeakMap();
function lc(e, t, i = !1) {
  const o = i ? kl : t.propsCache, a = o.get(e);
  if (a)
    return a;
  const l = e.props, p = {}, h = [];
  let b = !1;
  if (!we(e)) {
    const T = (j) => {
      b = !0;
      const [q, H] = lc(j, t, !0);
      bt(p, q), H && h.push(...H);
    };
    !i && t.mixins.length && t.mixins.forEach(T), e.extends && T(e.extends), e.mixins && e.mixins.forEach(T);
  }
  if (!l && !b)
    return et(e) && o.set(e, Hn), Hn;
  if (Ee(l))
    for (let T = 0; T < l.length; T++) {
      const j = _n(l[T]);
      Vs(j) && (p[j] = Be);
    }
  else if (l)
    for (const T in l) {
      const j = _n(T);
      if (Vs(j)) {
        const q = l[T], H = p[j] = Ee(q) || we(q) ? { type: q } : bt({}, q), ae = H.type;
        let le = !1, ye = !0;
        if (Ee(ae))
          for (let he = 0; he < ae.length; ++he) {
            const be = ae[he], De = we(be) && be.name;
            if (De === "Boolean") {
              le = !0;
              break;
            } else De === "String" && (ye = !1);
          }
        else
          le = we(ae) && ae.name === "Boolean";
        H[
          0
          /* shouldCast */
        ] = le, H[
          1
          /* shouldCastTrue */
        ] = ye, (le || $e(H, "default")) && h.push(j);
      }
    }
  const M = [p, h];
  return et(e) && o.set(e, M), M;
}
function Vs(e) {
  return e[0] !== "$" && !dr(e);
}
const Jo = (e) => e[0] === "_" || e === "$stable", zo = (e) => Ee(e) ? e.map(Gt) : [Gt(e)], Bl = (e, t, i) => {
  if (t._n)
    return t;
  const o = pl((...a) => zo(t(...a)), i);
  return o._c = !1, o;
}, fc = (e, t, i) => {
  const o = e._ctx;
  for (const a in e) {
    if (Jo(a)) continue;
    const l = e[a];
    if (we(l))
      t[a] = Bl(a, l, o);
    else if (l != null) {
      const p = zo(l);
      t[a] = () => p;
    }
  }
}, dc = (e, t) => {
  const i = zo(t);
  e.slots.default = () => i;
}, pc = (e, t, i) => {
  for (const o in t)
    (i || !Jo(o)) && (e[o] = t[o]);
}, ql = (e, t, i) => {
  const o = e.slots = ac();
  if (e.vnode.shapeFlag & 32) {
    const a = t.__;
    a && mo(o, "__", a, !0);
    const l = t._;
    l ? (pc(o, t, i), i && mo(o, "_", l, !0)) : fc(t, o);
  } else t && dc(e, t);
}, Kl = (e, t, i) => {
  const { vnode: o, slots: a } = e;
  let l = !0, p = Be;
  if (o.shapeFlag & 32) {
    const h = t._;
    h ? i && h === 1 ? l = !1 : pc(a, t, i) : (l = !t.$stable, fc(t, a)), p = t;
  } else t && (dc(e, t), p = { default: 1 });
  if (l)
    for (const h in a)
      !Jo(h) && p[h] == null && delete a[h];
}, Rt = rf;
function Vl(e) {
  return Ul(e);
}
function Ul(e, t) {
  const i = gi();
  i.__VUE__ = !0;
  const {
    insert: o,
    remove: a,
    patchProp: l,
    createElement: p,
    createText: h,
    createComment: b,
    setText: M,
    setElementText: T,
    parentNode: j,
    nextSibling: q,
    setScopeId: H = Wt,
    insertStaticContent: ae
  } = e, le = (g, S, L, V = null, U = null, K = null, J = void 0, Z = null, X = !!S.dynamicChildren) => {
    if (g === S)
      return;
    g && !ur(g, S) && (V = m(g), pt(g, U, K, !0), g = null), S.patchFlag === -2 && (X = !1, S.dynamicChildren = null);
    const { type: G, ref: de, shapeFlag: ee } = S;
    switch (G) {
      case Si:
        ye(g, S, L, V);
        break;
      case Xn:
        he(g, S, L, V);
        break;
      case lo:
        g == null && be(S, L, V, J);
        break;
      case en:
        Oe(
          g,
          S,
          L,
          V,
          U,
          K,
          J,
          Z,
          X
        );
        break;
      default:
        ee & 1 ? je(
          g,
          S,
          L,
          V,
          U,
          K,
          J,
          Z,
          X
        ) : ee & 6 ? Je(
          g,
          S,
          L,
          V,
          U,
          K,
          J,
          Z,
          X
        ) : (ee & 64 || ee & 128) && G.process(
          g,
          S,
          L,
          V,
          U,
          K,
          J,
          Z,
          X,
          N
        );
    }
    de != null && U ? yr(de, g && g.ref, K, S || g, !S) : de == null && g && g.ref != null && yr(g.ref, null, K, g, !0);
  }, ye = (g, S, L, V) => {
    if (g == null)
      o(
        S.el = h(S.children),
        L,
        V
      );
    else {
      const U = S.el = g.el;
      S.children !== g.children && M(U, S.children);
    }
  }, he = (g, S, L, V) => {
    g == null ? o(
      S.el = b(S.children || ""),
      L,
      V
    ) : S.el = g.el;
  }, be = (g, S, L, V) => {
    [g.el, g.anchor] = ae(
      g.children,
      S,
      L,
      V,
      g.el,
      g.anchor
    );
  }, De = ({ el: g, anchor: S }, L, V) => {
    let U;
    for (; g && g !== S; )
      U = q(g), o(g, L, V), g = U;
    o(S, L, V);
  }, oe = ({ el: g, anchor: S }) => {
    let L;
    for (; g && g !== S; )
      L = q(g), a(g), g = L;
    a(S);
  }, je = (g, S, L, V, U, K, J, Z, X) => {
    S.type === "svg" ? J = "svg" : S.type === "math" && (J = "mathml"), g == null ? Ke(
      S,
      L,
      V,
      U,
      K,
      J,
      Z,
      X
    ) : F(
      g,
      S,
      U,
      K,
      J,
      Z,
      X
    );
  }, Ke = (g, S, L, V, U, K, J, Z) => {
    let X, G;
    const { props: de, shapeFlag: ee, transition: pe, dirs: me } = g;
    if (X = g.el = p(
      g.type,
      K,
      de && de.is,
      de
    ), ee & 8 ? T(X, g.children) : ee & 16 && tt(
      g.children,
      X,
      null,
      V,
      U,
      co(g, K),
      J,
      Z
    ), me && Nn(g, null, V, "created"), xe(X, g, g.scopeId, J, V), de) {
      for (const Ae in de)
        Ae !== "value" && !dr(Ae) && l(X, Ae, null, de[Ae], K, V);
      "value" in de && l(X, "value", null, de.value, K), (G = de.onVnodeBeforeMount) && Vt(G, V, g);
    }
    me && Nn(g, null, V, "beforeMount");
    const _e = Gl(U, pe);
    _e && pe.beforeEnter(X), o(X, S, L), ((G = de && de.onVnodeMounted) || _e || me) && Rt(() => {
      G && Vt(G, V, g), _e && pe.enter(X), me && Nn(g, null, V, "mounted");
    }, U);
  }, xe = (g, S, L, V, U) => {
    if (L && H(g, L), V)
      for (let K = 0; K < V.length; K++)
        H(g, V[K]);
    if (U) {
      let K = U.subTree;
      if (S === K || vc(K.type) && (K.ssContent === S || K.ssFallback === S)) {
        const J = U.vnode;
        xe(
          g,
          J,
          J.scopeId,
          J.slotScopeIds,
          U.parent
        );
      }
    }
  }, tt = (g, S, L, V, U, K, J, Z, X = 0) => {
    for (let G = X; G < g.length; G++) {
      const de = g[G] = Z ? hn(g[G]) : Gt(g[G]);
      le(
        null,
        de,
        S,
        L,
        V,
        U,
        K,
        J,
        Z
      );
    }
  }, F = (g, S, L, V, U, K, J) => {
    const Z = S.el = g.el;
    let { patchFlag: X, dynamicChildren: G, dirs: de } = S;
    X |= g.patchFlag & 16;
    const ee = g.props || Be, pe = S.props || Be;
    let me;
    if (L && Dn(L, !1), (me = pe.onVnodeBeforeUpdate) && Vt(me, L, S, g), de && Nn(S, g, L, "beforeUpdate"), L && Dn(L, !0), (ee.innerHTML && pe.innerHTML == null || ee.textContent && pe.textContent == null) && T(Z, ""), G ? Et(
      g.dynamicChildren,
      G,
      Z,
      L,
      V,
      co(S, U),
      K
    ) : J || Te(
      g,
      S,
      Z,
      null,
      L,
      V,
      co(S, U),
      K,
      !1
    ), X > 0) {
      if (X & 16)
        dt(Z, ee, pe, L, U);
      else if (X & 2 && ee.class !== pe.class && l(Z, "class", null, pe.class, U), X & 4 && l(Z, "style", ee.style, pe.style, U), X & 8) {
        const _e = S.dynamicProps;
        for (let Ae = 0; Ae < _e.length; Ae++) {
          const Pe = _e[Ae], Ze = ee[Pe], st = pe[Pe];
          (st !== Ze || Pe === "value") && l(Z, Pe, Ze, st, U, L);
        }
      }
      X & 1 && g.children !== S.children && T(Z, S.children);
    } else !J && G == null && dt(Z, ee, pe, L, U);
    ((me = pe.onVnodeUpdated) || de) && Rt(() => {
      me && Vt(me, L, S, g), de && Nn(S, g, L, "updated");
    }, V);
  }, Et = (g, S, L, V, U, K, J) => {
    for (let Z = 0; Z < S.length; Z++) {
      const X = g[Z], G = S[Z], de = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        X.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (X.type === en || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ur(X, G) || // - In the case of a component, it could contain anything.
        X.shapeFlag & 198) ? j(X.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          L
        )
      );
      le(
        X,
        G,
        de,
        null,
        V,
        U,
        K,
        J,
        !0
      );
    }
  }, dt = (g, S, L, V, U) => {
    if (S !== L) {
      if (S !== Be)
        for (const K in S)
          !dr(K) && !(K in L) && l(
            g,
            K,
            S[K],
            null,
            U,
            V
          );
      for (const K in L) {
        if (dr(K)) continue;
        const J = L[K], Z = S[K];
        J !== Z && K !== "value" && l(g, K, Z, J, U, V);
      }
      "value" in L && l(g, "value", S.value, L.value, U);
    }
  }, Oe = (g, S, L, V, U, K, J, Z, X) => {
    const G = S.el = g ? g.el : h(""), de = S.anchor = g ? g.anchor : h("");
    let { patchFlag: ee, dynamicChildren: pe, slotScopeIds: me } = S;
    me && (Z = Z ? Z.concat(me) : me), g == null ? (o(G, L, V), o(de, L, V), tt(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      S.children || [],
      L,
      de,
      U,
      K,
      J,
      Z,
      X
    )) : ee > 0 && ee & 64 && pe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? (Et(
      g.dynamicChildren,
      pe,
      L,
      U,
      K,
      J,
      Z
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (S.key != null || U && S === U.subTree) && hc(
      g,
      S,
      !0
      /* shallow */
    )) : Te(
      g,
      S,
      L,
      de,
      U,
      K,
      J,
      Z,
      X
    );
  }, Je = (g, S, L, V, U, K, J, Z, X) => {
    S.slotScopeIds = Z, g == null ? S.shapeFlag & 512 ? U.ctx.activate(
      S,
      L,
      V,
      J,
      X
    ) : kt(
      S,
      L,
      V,
      U,
      K,
      J,
      X
    ) : Nt(g, S, X);
  }, kt = (g, S, L, V, U, K, J) => {
    const Z = g.component = hf(
      g,
      V,
      U
    );
    if (tc(g) && (Z.ctx.renderer = N), mf(Z, !1, J), Z.asyncDep) {
      if (U && U.registerDep(Z, Ve, J), !g.el) {
        const X = Z.subTree = bn(Xn);
        he(null, X, S, L);
      }
    } else
      Ve(
        Z,
        g,
        S,
        L,
        U,
        K,
        J
      );
  }, Nt = (g, S, L) => {
    const V = S.component = g.component;
    if (tf(g, S, L))
      if (V.asyncDep && !V.asyncResolved) {
        fe(V, S, L);
        return;
      } else
        V.next = S, V.update();
    else
      S.el = g.el, V.vnode = S;
  }, Ve = (g, S, L, V, U, K, J) => {
    const Z = () => {
      if (g.isMounted) {
        let { next: ee, bu: pe, u: me, parent: _e, vnode: Ae } = g;
        {
          const at = mc(g);
          if (at) {
            ee && (ee.el = Ae.el, fe(g, ee, J)), at.asyncDep.then(() => {
              g.isUnmounted || Z();
            });
            return;
          }
        }
        let Pe = ee, Ze;
        Dn(g, !1), ee ? (ee.el = Ae.el, fe(g, ee, J)) : ee = Ae, pe && ro(pe), (Ze = ee.props && ee.props.onVnodeBeforeUpdate) && Vt(Ze, _e, ee, Ae), Dn(g, !0);
        const st = Gs(g), wt = g.subTree;
        g.subTree = st, le(
          wt,
          st,
          // parent may have changed if it's in a teleport
          j(wt.el),
          // anchor may have changed if it's in a fragment
          m(wt),
          g,
          U,
          K
        ), ee.el = st.el, Pe === null && nf(g, st.el), me && Rt(me, U), (Ze = ee.props && ee.props.onVnodeUpdated) && Rt(
          () => Vt(Ze, _e, ee, Ae),
          U
        );
      } else {
        let ee;
        const { el: pe, props: me } = S, { bm: _e, m: Ae, parent: Pe, root: Ze, type: st } = g, wt = gr(S);
        Dn(g, !1), _e && ro(_e), !wt && (ee = me && me.onVnodeBeforeMount) && Vt(ee, Pe, S), Dn(g, !0);
        {
          Ze.ce && // @ts-expect-error _def is private
          Ze.ce._def.shadowRoot !== !1 && Ze.ce._injectChildStyle(st);
          const at = g.subTree = Gs(g);
          le(
            null,
            at,
            L,
            V,
            g,
            U,
            K
          ), S.el = at.el;
        }
        if (Ae && Rt(Ae, U), !wt && (ee = me && me.onVnodeMounted)) {
          const at = S;
          Rt(
            () => Vt(ee, Pe, at),
            U
          );
        }
        (S.shapeFlag & 256 || Pe && gr(Pe.vnode) && Pe.vnode.shapeFlag & 256) && g.a && Rt(g.a, U), g.isMounted = !0, S = L = V = null;
      }
    };
    g.scope.on();
    const X = g.effect = new Oa(Z);
    g.scope.off();
    const G = g.update = X.run.bind(X), de = g.job = X.runIfDirty.bind(X);
    de.i = g, de.id = g.uid, X.scheduler = () => Yo(de), Dn(g, !0), G();
  }, fe = (g, S, L) => {
    S.component = g;
    const V = g.vnode.props;
    g.vnode = S, g.next = null, $l(g, S.props, V, L), Kl(g, S.children, L), nn(), $s(g), rn();
  }, Te = (g, S, L, V, U, K, J, Z, X = !1) => {
    const G = g && g.children, de = g ? g.shapeFlag : 0, ee = S.children, { patchFlag: pe, shapeFlag: me } = S;
    if (pe > 0) {
      if (pe & 128) {
        ot(
          G,
          ee,
          L,
          V,
          U,
          K,
          J,
          Z,
          X
        );
        return;
      } else if (pe & 256) {
        ze(
          G,
          ee,
          L,
          V,
          U,
          K,
          J,
          Z,
          X
        );
        return;
      }
    }
    me & 8 ? (de & 16 && Dt(G, U, K), ee !== G && T(L, ee)) : de & 16 ? me & 16 ? ot(
      G,
      ee,
      L,
      V,
      U,
      K,
      J,
      Z,
      X
    ) : Dt(G, U, K, !0) : (de & 8 && T(L, ""), me & 16 && tt(
      ee,
      L,
      V,
      U,
      K,
      J,
      Z,
      X
    ));
  }, ze = (g, S, L, V, U, K, J, Z, X) => {
    g = g || Hn, S = S || Hn;
    const G = g.length, de = S.length, ee = Math.min(G, de);
    let pe;
    for (pe = 0; pe < ee; pe++) {
      const me = S[pe] = X ? hn(S[pe]) : Gt(S[pe]);
      le(
        g[pe],
        me,
        L,
        null,
        U,
        K,
        J,
        Z,
        X
      );
    }
    G > de ? Dt(
      g,
      U,
      K,
      !0,
      !1,
      ee
    ) : tt(
      S,
      L,
      V,
      U,
      K,
      J,
      Z,
      X,
      ee
    );
  }, ot = (g, S, L, V, U, K, J, Z, X) => {
    let G = 0;
    const de = S.length;
    let ee = g.length - 1, pe = de - 1;
    for (; G <= ee && G <= pe; ) {
      const me = g[G], _e = S[G] = X ? hn(S[G]) : Gt(S[G]);
      if (ur(me, _e))
        le(
          me,
          _e,
          L,
          null,
          U,
          K,
          J,
          Z,
          X
        );
      else
        break;
      G++;
    }
    for (; G <= ee && G <= pe; ) {
      const me = g[ee], _e = S[pe] = X ? hn(S[pe]) : Gt(S[pe]);
      if (ur(me, _e))
        le(
          me,
          _e,
          L,
          null,
          U,
          K,
          J,
          Z,
          X
        );
      else
        break;
      ee--, pe--;
    }
    if (G > ee) {
      if (G <= pe) {
        const me = pe + 1, _e = me < de ? S[me].el : V;
        for (; G <= pe; )
          le(
            null,
            S[G] = X ? hn(S[G]) : Gt(S[G]),
            L,
            _e,
            U,
            K,
            J,
            Z,
            X
          ), G++;
      }
    } else if (G > pe)
      for (; G <= ee; )
        pt(g[G], U, K, !0), G++;
    else {
      const me = G, _e = G, Ae = /* @__PURE__ */ new Map();
      for (G = _e; G <= pe; G++) {
        const Ge = S[G] = X ? hn(S[G]) : Gt(S[G]);
        Ge.key != null && Ae.set(Ge.key, G);
      }
      let Pe, Ze = 0;
      const st = pe - _e + 1;
      let wt = !1, at = 0;
      const Bt = new Array(st);
      for (G = 0; G < st; G++) Bt[G] = 0;
      for (G = me; G <= ee; G++) {
        const Ge = g[G];
        if (Ze >= st) {
          pt(Ge, U, K, !0);
          continue;
        }
        let se;
        if (Ge.key != null)
          se = Ae.get(Ge.key);
        else
          for (Pe = _e; Pe <= pe; Pe++)
            if (Bt[Pe - _e] === 0 && ur(Ge, S[Pe])) {
              se = Pe;
              break;
            }
        se === void 0 ? pt(Ge, U, K, !0) : (Bt[se - _e] = G + 1, se >= at ? at = se : wt = !0, le(
          Ge,
          S[se],
          L,
          null,
          U,
          K,
          J,
          Z,
          X
        ), Ze++);
      }
      const jn = wt ? Hl(Bt) : Hn;
      for (Pe = jn.length - 1, G = st - 1; G >= 0; G--) {
        const Ge = _e + G, se = S[Ge], sn = Ge + 1 < de ? S[Ge + 1].el : V;
        Bt[G] === 0 ? le(
          null,
          se,
          L,
          sn,
          U,
          K,
          J,
          Z,
          X
        ) : wt && (Pe < 0 || G !== jn[Pe] ? nt(se, L, sn, 2) : Pe--);
      }
    }
  }, nt = (g, S, L, V, U = null) => {
    const { el: K, type: J, transition: Z, children: X, shapeFlag: G } = g;
    if (G & 6) {
      nt(g.component.subTree, S, L, V);
      return;
    }
    if (G & 128) {
      g.suspense.move(S, L, V);
      return;
    }
    if (G & 64) {
      J.move(g, S, L, N);
      return;
    }
    if (J === en) {
      o(K, S, L);
      for (let ee = 0; ee < X.length; ee++)
        nt(X[ee], S, L, V);
      o(g.anchor, S, L);
      return;
    }
    if (J === lo) {
      De(g, S, L);
      return;
    }
    if (V !== 2 && G & 1 && Z)
      if (V === 0)
        Z.beforeEnter(K), o(K, S, L), Rt(() => Z.enter(K), U);
      else {
        const { leave: ee, delayLeave: pe, afterLeave: me } = Z, _e = () => {
          g.ctx.isUnmounted ? a(K) : o(K, S, L);
        }, Ae = () => {
          ee(K, () => {
            _e(), me && me();
          });
        };
        pe ? pe(K, _e, Ae) : Ae();
      }
    else
      o(K, S, L);
  }, pt = (g, S, L, V = !1, U = !1) => {
    const {
      type: K,
      props: J,
      ref: Z,
      children: X,
      dynamicChildren: G,
      shapeFlag: de,
      patchFlag: ee,
      dirs: pe,
      cacheIndex: me
    } = g;
    if (ee === -2 && (U = !1), Z != null && (nn(), yr(Z, null, L, g, !0), rn()), me != null && (S.renderCache[me] = void 0), de & 256) {
      S.ctx.deactivate(g);
      return;
    }
    const _e = de & 1 && pe, Ae = !gr(g);
    let Pe;
    if (Ae && (Pe = J && J.onVnodeBeforeUnmount) && Vt(Pe, S, g), de & 6)
      Xt(g.component, L, V);
    else {
      if (de & 128) {
        g.suspense.unmount(L, V);
        return;
      }
      _e && Nn(g, null, S, "beforeUnmount"), de & 64 ? g.type.remove(
        g,
        S,
        L,
        N,
        V
      ) : G && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !G.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (K !== en || ee > 0 && ee & 64) ? Dt(
        G,
        S,
        L,
        !1,
        !0
      ) : (K === en && ee & 384 || !U && de & 16) && Dt(X, S, L), V && jt(g);
    }
    (Ae && (Pe = J && J.onVnodeUnmounted) || _e) && Rt(() => {
      Pe && Vt(Pe, S, g), _e && Nn(g, null, S, "unmounted");
    }, L);
  }, jt = (g) => {
    const { type: S, el: L, anchor: V, transition: U } = g;
    if (S === en) {
      Sn(L, V);
      return;
    }
    if (S === lo) {
      oe(g);
      return;
    }
    const K = () => {
      a(L), U && !U.persisted && U.afterLeave && U.afterLeave();
    };
    if (g.shapeFlag & 1 && U && !U.persisted) {
      const { leave: J, delayLeave: Z } = U, X = () => J(L, K);
      Z ? Z(g.el, K, X) : X();
    } else
      K();
  }, Sn = (g, S) => {
    let L;
    for (; g !== S; )
      L = q(g), a(g), g = L;
    a(S);
  }, Xt = (g, S, L) => {
    const {
      bum: V,
      scope: U,
      job: K,
      subTree: J,
      um: Z,
      m: X,
      a: G,
      parent: de,
      slots: { __: ee }
    } = g;
    Us(X), Us(G), V && ro(V), de && Ee(ee) && ee.forEach((pe) => {
      de.renderCache[pe] = void 0;
    }), U.stop(), K && (K.flags |= 8, pt(J, g, S, L)), Z && Rt(Z, S), Rt(() => {
      g.isUnmounted = !0;
    }, S), S && S.pendingBranch && !S.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === S.pendingId && (S.deps--, S.deps === 0 && S.resolve());
  }, Dt = (g, S, L, V = !1, U = !1, K = 0) => {
    for (let J = K; J < g.length; J++)
      pt(g[J], S, L, V, U);
  }, m = (g) => {
    if (g.shapeFlag & 6)
      return m(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const S = q(g.anchor || g.el), L = S && S[hl];
    return L ? q(L) : S;
  };
  let d = !1;
  const R = (g, S, L) => {
    g == null ? S._vnode && pt(S._vnode, null, null, !0) : le(
      S._vnode || null,
      g,
      S,
      null,
      null,
      null,
      L
    ), S._vnode = g, d || (d = !0, $s(), Qa(), d = !1);
  }, N = {
    p: le,
    um: pt,
    m: nt,
    r: jt,
    mt: kt,
    mc: tt,
    pc: Te,
    pbc: Et,
    n: m,
    o: e
  };
  return {
    render: R,
    hydrate: void 0,
    createApp: Ml(R)
  };
}
function co({ type: e, props: t }, i) {
  return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : i;
}
function Dn({ effect: e, job: t }, i) {
  i ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Gl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function hc(e, t, i = !1) {
  const o = e.children, a = t.children;
  if (Ee(o) && Ee(a))
    for (let l = 0; l < o.length; l++) {
      const p = o[l];
      let h = a[l];
      h.shapeFlag & 1 && !h.dynamicChildren && ((h.patchFlag <= 0 || h.patchFlag === 32) && (h = a[l] = hn(a[l]), h.el = p.el), !i && h.patchFlag !== -2 && hc(p, h)), h.type === Si && (h.el = p.el), h.type === Xn && !h.el && (h.el = p.el);
    }
}
function Hl(e) {
  const t = e.slice(), i = [0];
  let o, a, l, p, h;
  const b = e.length;
  for (o = 0; o < b; o++) {
    const M = e[o];
    if (M !== 0) {
      if (a = i[i.length - 1], e[a] < M) {
        t[o] = a, i.push(o);
        continue;
      }
      for (l = 0, p = i.length - 1; l < p; )
        h = l + p >> 1, e[i[h]] < M ? l = h + 1 : p = h;
      M < e[i[l]] && (l > 0 && (t[o] = i[l - 1]), i[l] = o);
    }
  }
  for (l = i.length, p = i[l - 1]; l-- > 0; )
    i[l] = p, p = t[p];
  return i;
}
function mc(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : mc(t);
}
function Us(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Wl = Symbol.for("v-scx"), Yl = () => ri(Wl);
function Xl(e, t) {
  return Zo(e, null, t);
}
function uo(e, t, i) {
  return Zo(e, t, i);
}
function Zo(e, t, i = Be) {
  const { immediate: o, deep: a, flush: l, once: p } = i, h = bt({}, i), b = t && o || !t && l !== "post";
  let M;
  if (xr) {
    if (l === "sync") {
      const H = Yl();
      M = H.__watcherHandles || (H.__watcherHandles = []);
    } else if (!b) {
      const H = () => {
      };
      return H.stop = Wt, H.resume = Wt, H.pause = Wt, H;
    }
  }
  const T = At;
  h.call = (H, ae, le) => Yt(H, T, ae, le);
  let j = !1;
  l === "post" ? h.scheduler = (H) => {
    Rt(H, T && T.suspense);
  } : l !== "sync" && (j = !0, h.scheduler = (H, ae) => {
    ae ? H() : Yo(H);
  }), h.augmentJob = (H) => {
    t && (H.flags |= 4), j && (H.flags |= 2, T && (H.id = T.uid, H.i = T));
  };
  const q = cl(e, t, h);
  return xr && (M ? M.push(q) : b && q()), q;
}
function Ql(e, t, i) {
  const o = this.proxy, a = lt(e) ? e.includes(".") ? yc(o, e) : () => o[e] : e.bind(o, o);
  let l;
  we(t) ? l = t : (l = t.handler, i = t);
  const p = Cr(this), h = Zo(a, l.bind(o), i);
  return p(), h;
}
function yc(e, t) {
  const i = t.split(".");
  return () => {
    let o = e;
    for (let a = 0; a < i.length && o; a++)
      o = o[i[a]];
    return o;
  };
}
const Jl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_n(t)}Modifiers`] || e[`${Mn(t)}Modifiers`];
function zl(e, t, ...i) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || Be;
  let a = i;
  const l = t.startsWith("update:"), p = l && Jl(o, t.slice(7));
  p && (p.trim && (a = i.map((T) => lt(T) ? T.trim() : T)), p.number && (a = i.map(Iu)));
  let h, b = o[h = no(t)] || // also try camelCase event handler (#2249)
  o[h = no(_n(t))];
  !b && l && (b = o[h = no(Mn(t))]), b && Yt(
    b,
    e,
    6,
    a
  );
  const M = o[h + "Once"];
  if (M) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[h])
      return;
    e.emitted[h] = !0, Yt(
      M,
      e,
      6,
      a
    );
  }
}
function gc(e, t, i = !1) {
  const o = t.emitsCache, a = o.get(e);
  if (a !== void 0)
    return a;
  const l = e.emits;
  let p = {}, h = !1;
  if (!we(e)) {
    const b = (M) => {
      const T = gc(M, t, !0);
      T && (h = !0, bt(p, T));
    };
    !i && t.mixins.length && t.mixins.forEach(b), e.extends && b(e.extends), e.mixins && e.mixins.forEach(b);
  }
  return !l && !h ? (et(e) && o.set(e, null), null) : (Ee(l) ? l.forEach((b) => p[b] = null) : bt(p, l), et(e) && o.set(e, p), p);
}
function _i(e, t) {
  return !e || !hi(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), $e(e, t[0].toLowerCase() + t.slice(1)) || $e(e, Mn(t)) || $e(e, t));
}
function Gs(e) {
  const {
    type: t,
    vnode: i,
    proxy: o,
    withProxy: a,
    propsOptions: [l],
    slots: p,
    attrs: h,
    emit: b,
    render: M,
    renderCache: T,
    props: j,
    data: q,
    setupState: H,
    ctx: ae,
    inheritAttrs: le
  } = e, ye = ui(e);
  let he, be;
  try {
    if (i.shapeFlag & 4) {
      const oe = a || o, je = oe;
      he = Gt(
        M.call(
          je,
          oe,
          T,
          j,
          H,
          q,
          ae
        )
      ), be = h;
    } else {
      const oe = t;
      he = Gt(
        oe.length > 1 ? oe(
          j,
          { attrs: h, slots: p, emit: b }
        ) : oe(
          j,
          null
        )
      ), be = t.props ? h : Zl(h);
    }
  } catch (oe) {
    br.length = 0, vi(oe, e, 1), he = bn(Xn);
  }
  let De = he;
  if (be && le !== !1) {
    const oe = Object.keys(be), { shapeFlag: je } = De;
    oe.length && je & 7 && (l && oe.some(Fo) && (be = ef(
      be,
      l
    )), De = Qn(De, be, !1, !0));
  }
  return i.dirs && (De = Qn(De, null, !1, !0), De.dirs = De.dirs ? De.dirs.concat(i.dirs) : i.dirs), i.transition && Xo(De, i.transition), he = De, ui(ye), he;
}
const Zl = (e) => {
  let t;
  for (const i in e)
    (i === "class" || i === "style" || hi(i)) && ((t || (t = {}))[i] = e[i]);
  return t;
}, ef = (e, t) => {
  const i = {};
  for (const o in e)
    (!Fo(o) || !(o.slice(9) in t)) && (i[o] = e[o]);
  return i;
};
function tf(e, t, i) {
  const { props: o, children: a, component: l } = e, { props: p, children: h, patchFlag: b } = t, M = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (i && b >= 0) {
    if (b & 1024)
      return !0;
    if (b & 16)
      return o ? Hs(o, p, M) : !!p;
    if (b & 8) {
      const T = t.dynamicProps;
      for (let j = 0; j < T.length; j++) {
        const q = T[j];
        if (p[q] !== o[q] && !_i(M, q))
          return !0;
      }
    }
  } else
    return (a || h) && (!h || !h.$stable) ? !0 : o === p ? !1 : o ? p ? Hs(o, p, M) : !0 : !!p;
  return !1;
}
function Hs(e, t, i) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < o.length; a++) {
    const l = o[a];
    if (t[l] !== e[l] && !_i(i, l))
      return !0;
  }
  return !1;
}
function nf({ vnode: e, parent: t }, i) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
}
const vc = (e) => e.__isSuspense;
function rf(e, t) {
  t && t.pendingBranch ? Ee(e) ? t.effects.push(...e) : t.effects.push(e) : dl(e);
}
const en = Symbol.for("v-fgt"), Si = Symbol.for("v-txt"), Xn = Symbol.for("v-cmt"), lo = Symbol.for("v-stc"), br = [];
let Ft = null;
function bc(e = !1) {
  br.push(Ft = e ? null : []);
}
function of() {
  br.pop(), Ft = br[br.length - 1] || null;
}
let wr = 1;
function Ws(e, t = !1) {
  wr += e, e < 0 && Ft && t && (Ft.hasOnce = !0);
}
function _c(e) {
  return e.dynamicChildren = wr > 0 ? Ft || Hn : null, of(), wr > 0 && Ft && Ft.push(e), e;
}
function sf(e, t, i, o, a, l) {
  return _c(
    wc(
      e,
      t,
      i,
      o,
      a,
      l,
      !0
    )
  );
}
function af(e, t, i, o, a) {
  return _c(
    bn(
      e,
      t,
      i,
      o,
      a,
      !0
    )
  );
}
function Sc(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ur(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ec = ({ key: e }) => e ?? null, ii = ({
  ref: e,
  ref_key: t,
  ref_for: i
}) => (typeof e == "number" && (e = "" + e), e != null ? lt(e) || vt(e) || we(e) ? { i: Ht, r: e, k: t, f: !!i } : e : null);
function wc(e, t = null, i = null, o = 0, a = null, l = e === en ? 0 : 1, p = !1, h = !1) {
  const b = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ec(t),
    ref: t && ii(t),
    scopeId: za,
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
    shapeFlag: l,
    patchFlag: o,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: Ht
  };
  return h ? (es(b, i), l & 128 && e.normalize(b)) : i && (b.shapeFlag |= lt(i) ? 8 : 16), wr > 0 && // avoid a block node from tracking itself
  !p && // has current parent block
  Ft && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (b.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  b.patchFlag !== 32 && Ft.push(b), b;
}
const bn = cf;
function cf(e, t = null, i = null, o = 0, a = null, l = !1) {
  if ((!e || e === Il) && (e = Xn), Sc(e)) {
    const h = Qn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return i && es(h, i), wr > 0 && !l && Ft && (h.shapeFlag & 6 ? Ft[Ft.indexOf(e)] = h : Ft.push(h)), h.patchFlag = -2, h;
  }
  if (bf(e) && (e = e.__vccOpts), t) {
    t = uf(t);
    let { class: h, style: b } = t;
    h && !lt(h) && (t.class = $o(h)), et(b) && (Wo(b) && !Ee(b) && (b = bt({}, b)), t.style = Lo(b));
  }
  const p = lt(e) ? 1 : vc(e) ? 128 : ml(e) ? 64 : et(e) ? 4 : we(e) ? 2 : 0;
  return wc(
    e,
    t,
    i,
    o,
    a,
    p,
    l,
    !0
  );
}
function uf(e) {
  return e ? Wo(e) || cc(e) ? bt({}, e) : e : null;
}
function Qn(e, t, i = !1, o = !1) {
  const { props: a, ref: l, patchFlag: p, children: h, transition: b } = e, M = t ? ff(a || {}, t) : a, T = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: M,
    key: M && Ec(M),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && l ? Ee(l) ? l.concat(ii(t)) : [l, ii(t)] : ii(t)
    ) : l,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: h,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== en ? p === -1 ? 16 : p | 16 : p,
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
    ssContent: e.ssContent && Qn(e.ssContent),
    ssFallback: e.ssFallback && Qn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return b && o && Xo(
    T,
    b.clone(T)
  ), T;
}
function lf(e = " ", t = 0) {
  return bn(Si, null, e, t);
}
function Gt(e) {
  return e == null || typeof e == "boolean" ? bn(Xn) : Ee(e) ? bn(
    en,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Sc(e) ? hn(e) : bn(Si, null, String(e));
}
function hn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qn(e);
}
function es(e, t) {
  let i = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (Ee(t))
    i = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), es(e, a()), a._c && (a._d = !0));
      return;
    } else {
      i = 32;
      const a = t._;
      !a && !cc(t) ? t._ctx = Ht : a === 3 && Ht && (Ht.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else we(t) ? (t = { default: t, _ctx: Ht }, i = 32) : (t = String(t), o & 64 ? (i = 16, t = [lf(t)]) : i = 8);
  e.children = t, e.shapeFlag |= i;
}
function ff(...e) {
  const t = {};
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    for (const a in o)
      if (a === "class")
        t.class !== o.class && (t.class = $o([t.class, o.class]));
      else if (a === "style")
        t.style = Lo([t.style, o.style]);
      else if (hi(a)) {
        const l = t[a], p = o[a];
        p && l !== p && !(Ee(l) && l.includes(p)) && (t[a] = l ? [].concat(l, p) : p);
      } else a !== "" && (t[a] = o[a]);
  }
  return t;
}
function Vt(e, t, i, o = null) {
  Yt(e, t, 7, [
    i,
    o
  ]);
}
const df = oc();
let pf = 0;
function hf(e, t, i) {
  const o = e.type, a = (t ? t.appContext : e.appContext) || df, l = {
    uid: pf++,
    vnode: e,
    type: o,
    parent: t,
    appContext: a,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Fu(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(a.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: lc(o, a),
    emitsOptions: gc(o, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Be,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: Be,
    data: Be,
    props: Be,
    attrs: Be,
    slots: Be,
    refs: Be,
    setupState: Be,
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
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = zl.bind(null, l), e.ce && e.ce(l), l;
}
let At = null, di, Co;
{
  const e = gi(), t = (i, o) => {
    let a;
    return (a = e[i]) || (a = e[i] = []), a.push(o), (l) => {
      a.length > 1 ? a.forEach((p) => p(l)) : a[0](l);
    };
  };
  di = t(
    "__VUE_INSTANCE_SETTERS__",
    (i) => At = i
  ), Co = t(
    "__VUE_SSR_SETTERS__",
    (i) => xr = i
  );
}
const Cr = (e) => {
  const t = At;
  return di(e), e.scope.on(), () => {
    e.scope.off(), di(t);
  };
}, Ys = () => {
  At && At.scope.off(), di(null);
};
function xc(e) {
  return e.vnode.shapeFlag & 4;
}
let xr = !1;
function mf(e, t = !1, i = !1) {
  t && Co(t);
  const { props: o, children: a } = e.vnode, l = xc(e);
  Ll(e, o, l, t), ql(e, a, i || t);
  const p = l ? yf(e, t) : void 0;
  return t && Co(!1), p;
}
function yf(e, t) {
  const i = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Al);
  const { setup: o } = i;
  if (o) {
    nn();
    const a = e.setupContext = o.length > 1 ? vf(e) : null, l = Cr(e), p = Tr(
      o,
      e,
      0,
      [
        e.props,
        a
      ]
    ), h = Aa(p);
    if (rn(), l(), (h || e.sp) && !gr(e) && ec(e), h) {
      if (p.then(Ys, Ys), t)
        return p.then((b) => {
          Xs(e, b);
        }).catch((b) => {
          vi(b, e, 0);
        });
      e.asyncDep = p;
    } else
      Xs(e, p);
  } else
    Tc(e);
}
function Xs(e, t, i) {
  we(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : et(t) && (e.setupState = Wa(t)), Tc(e);
}
function Tc(e, t, i) {
  const o = e.type;
  e.render || (e.render = o.render || Wt);
  {
    const a = Cr(e);
    nn();
    try {
      Nl(e);
    } finally {
      rn(), a();
    }
  }
}
const gf = {
  get(e, t) {
    return gt(e, "get", ""), e[t];
  }
};
function vf(e) {
  const t = (i) => {
    e.exposed = i || {};
  };
  return {
    attrs: new Proxy(e.attrs, gf),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ts(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Wa(tl(e.exposed)), {
    get(t, i) {
      if (i in t)
        return t[i];
      if (i in vr)
        return vr[i](e);
    },
    has(t, i) {
      return i in t || i in vr;
    }
  })) : e.proxy;
}
function bf(e) {
  return we(e) && "__vccOpts" in e;
}
const _f = (e, t) => sl(e, t, xr), Sf = "3.5.17";
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Io;
const Qs = typeof window < "u" && window.trustedTypes;
if (Qs)
  try {
    Io = /* @__PURE__ */ Qs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Cc = Io ? (e) => Io.createHTML(e) : (e) => e, Ef = "http://www.w3.org/2000/svg", wf = "http://www.w3.org/1998/Math/MathML", Zt = typeof document < "u" ? document : null, Js = Zt && /* @__PURE__ */ Zt.createElement("template"), xf = {
  insert: (e, t, i) => {
    t.insertBefore(e, i || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, i, o) => {
    const a = t === "svg" ? Zt.createElementNS(Ef, e) : t === "mathml" ? Zt.createElementNS(wf, e) : i ? Zt.createElement(e, { is: i }) : Zt.createElement(e);
    return e === "select" && o && o.multiple != null && a.setAttribute("multiple", o.multiple), a;
  },
  createText: (e) => Zt.createTextNode(e),
  createComment: (e) => Zt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Zt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, i, o, a, l) {
    const p = i ? i.previousSibling : t.lastChild;
    if (a && (a === l || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), i), !(a === l || !(a = a.nextSibling)); )
        ;
    else {
      Js.innerHTML = Cc(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const h = Js.content;
      if (o === "svg" || o === "mathml") {
        const b = h.firstChild;
        for (; b.firstChild; )
          h.appendChild(b.firstChild);
        h.removeChild(b);
      }
      t.insertBefore(h, i);
    }
    return [
      // first
      p ? p.nextSibling : t.firstChild,
      // last
      i ? i.previousSibling : t.lastChild
    ];
  }
}, Tf = Symbol("_vtc");
function Cf(e, t, i) {
  const o = e[Tf];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : i ? e.setAttribute("class", t) : e.className = t;
}
const zs = Symbol("_vod"), If = Symbol("_vsh"), Af = Symbol(""), Nf = /(^|;)\s*display\s*:/;
function Df(e, t, i) {
  const o = e.style, a = lt(i);
  let l = !1;
  if (i && !a) {
    if (t)
      if (lt(t))
        for (const p of t.split(";")) {
          const h = p.slice(0, p.indexOf(":")).trim();
          i[h] == null && oi(o, h, "");
        }
      else
        for (const p in t)
          i[p] == null && oi(o, p, "");
    for (const p in i)
      p === "display" && (l = !0), oi(o, p, i[p]);
  } else if (a) {
    if (t !== i) {
      const p = o[Af];
      p && (i += ";" + p), o.cssText = i, l = Nf.test(i);
    }
  } else t && e.removeAttribute("style");
  zs in e && (e[zs] = l ? o.display : "", e[If] && (o.display = "none"));
}
const Zs = /\s*!important$/;
function oi(e, t, i) {
  if (Ee(i))
    i.forEach((o) => oi(e, t, o));
  else if (i == null && (i = ""), t.startsWith("--"))
    e.setProperty(t, i);
  else {
    const o = Of(e, t);
    Zs.test(i) ? e.setProperty(
      Mn(o),
      i.replace(Zs, ""),
      "important"
    ) : e[o] = i;
  }
}
const ea = ["Webkit", "Moz", "ms"], fo = {};
function Of(e, t) {
  const i = fo[t];
  if (i)
    return i;
  let o = _n(t);
  if (o !== "filter" && o in e)
    return fo[t] = o;
  o = Na(o);
  for (let a = 0; a < ea.length; a++) {
    const l = ea[a] + o;
    if (l in e)
      return fo[t] = l;
  }
  return t;
}
const ta = "http://www.w3.org/1999/xlink";
function na(e, t, i, o, a, l = Ru(t)) {
  o && t.startsWith("xlink:") ? i == null ? e.removeAttributeNS(ta, t.slice(6, t.length)) : e.setAttributeNS(ta, t, i) : i == null || l && !Da(i) ? e.removeAttribute(t) : e.setAttribute(
    t,
    l ? "" : Jn(i) ? String(i) : i
  );
}
function ra(e, t, i, o, a) {
  if (t === "innerHTML" || t === "textContent") {
    i != null && (e[t] = t === "innerHTML" ? Cc(i) : i);
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const h = l === "OPTION" ? e.getAttribute("value") || "" : e.value, b = i == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(i);
    (h !== b || !("_value" in e)) && (e.value = b), i == null && e.removeAttribute(t), e._value = i;
    return;
  }
  let p = !1;
  if (i === "" || i == null) {
    const h = typeof e[t];
    h === "boolean" ? i = Da(i) : i == null && h === "string" ? (i = "", p = !0) : h === "number" && (i = 0, p = !0);
  }
  try {
    e[t] = i;
  } catch {
  }
  p && e.removeAttribute(a || t);
}
function Pf(e, t, i, o) {
  e.addEventListener(t, i, o);
}
function Rf(e, t, i, o) {
  e.removeEventListener(t, i, o);
}
const ia = Symbol("_vei");
function Ff(e, t, i, o, a = null) {
  const l = e[ia] || (e[ia] = {}), p = l[t];
  if (o && p)
    p.value = o;
  else {
    const [h, b] = Mf(t);
    if (o) {
      const M = l[t] = $f(
        o,
        a
      );
      Pf(e, h, M, b);
    } else p && (Rf(e, h, p, b), l[t] = void 0);
  }
}
const oa = /(?:Once|Passive|Capture)$/;
function Mf(e) {
  let t;
  if (oa.test(e)) {
    t = {};
    let o;
    for (; o = e.match(oa); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Mn(e.slice(2)), t];
}
let po = 0;
const jf = /* @__PURE__ */ Promise.resolve(), Lf = () => po || (jf.then(() => po = 0), po = Date.now());
function $f(e, t) {
  const i = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= i.attached)
      return;
    Yt(
      kf(o, i.value),
      t,
      5,
      [o]
    );
  };
  return i.value = e, i.attached = Lf(), i;
}
function kf(e, t) {
  if (Ee(t)) {
    const i = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      i.call(e), e._stopped = !0;
    }, t.map(
      (o) => (a) => !a._stopped && o && o(a)
    );
  } else
    return t;
}
const sa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Bf = (e, t, i, o, a, l) => {
  const p = a === "svg";
  t === "class" ? Cf(e, o, p) : t === "style" ? Df(e, i, o) : hi(t) ? Fo(t) || Ff(e, t, i, o, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qf(e, t, o, p)) ? (ra(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && na(e, t, o, p, l, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !lt(o)) ? ra(e, _n(t), o, l, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), na(e, t, o, p));
};
function qf(e, t, i, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && sa(t) && we(i));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return sa(t) && lt(i) ? !1 : t in e;
}
const Kf = /* @__PURE__ */ bt({ patchProp: Bf }, xf);
let aa;
function Vf() {
  return aa || (aa = Vl(Kf));
}
const Uf = (...e) => {
  const t = Vf().createApp(...e), { mount: i } = t;
  return t.mount = (o) => {
    const a = Hf(o);
    if (!a) return;
    const l = t._component;
    !we(l) && !l.render && !l.template && (l.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const p = i(a, !1, Gf(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), p;
  }, t;
};
function Gf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Hf(e) {
  return lt(e) ? document.querySelector(e) : e;
}
var Wf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Yf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Xf(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var i = function o() {
      var a = !1;
      try {
        a = this instanceof o;
      } catch {
      }
      return a ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    i.prototype = t.prototype;
  } else i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(e).forEach(function(o) {
    var a = Object.getOwnPropertyDescriptor(e, o);
    Object.defineProperty(i, o, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[o];
      }
    });
  }), i;
}
var ca = {};
const Qf = {}, Jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qf
}, Symbol.toStringTag, { value: "Module" })), ua = /* @__PURE__ */ Xf(Jf);
var la;
function zf() {
  return la || (la = 1, function(e) {
    (function(t) {
      t.parser = function(m, d) {
        return new o(m, d);
      }, t.SAXParser = o, t.SAXStream = T, t.createStream = M, t.MAX_BUFFER_LENGTH = 64 * 1024;
      var i = [
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
      t.EVENTS = [
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
      function o(m, d) {
        if (!(this instanceof o))
          return new o(m, d);
        var R = this;
        l(R), R.q = R.c = "", R.bufferCheckPosition = t.MAX_BUFFER_LENGTH, R.opt = d || {}, R.opt.lowercase = R.opt.lowercase || R.opt.lowercasetags, R.looseCase = R.opt.lowercase ? "toLowerCase" : "toUpperCase", R.tags = [], R.closed = R.closedRoot = R.sawRoot = !1, R.tag = R.error = null, R.strict = !!m, R.noscript = !!(m || R.opt.noscript), R.state = F.BEGIN, R.strictEntities = R.opt.strictEntities, R.ENTITIES = R.strictEntities ? Object.create(t.XML_ENTITIES) : Object.create(t.ENTITIES), R.attribList = [], R.opt.xmlns && (R.ns = Object.create(le)), R.opt.unquotedAttributeValues === void 0 && (R.opt.unquotedAttributeValues = !m), R.trackPosition = R.opt.position !== !1, R.trackPosition && (R.position = R.line = R.column = 0), dt(R, "onready");
      }
      Object.create || (Object.create = function(m) {
        function d() {
        }
        d.prototype = m;
        var R = new d();
        return R;
      }), Object.keys || (Object.keys = function(m) {
        var d = [];
        for (var R in m) m.hasOwnProperty(R) && d.push(R);
        return d;
      });
      function a(m) {
        for (var d = Math.max(t.MAX_BUFFER_LENGTH, 10), R = 0, N = 0, Ce = i.length; N < Ce; N++) {
          var g = m[i[N]].length;
          if (g > d)
            switch (i[N]) {
              case "textNode":
                Je(m);
                break;
              case "cdata":
                Oe(m, "oncdata", m.cdata), m.cdata = "";
                break;
              case "script":
                Oe(m, "onscript", m.script), m.script = "";
                break;
              default:
                Nt(m, "Max buffer length exceeded: " + i[N]);
            }
          R = Math.max(R, g);
        }
        var S = t.MAX_BUFFER_LENGTH - R;
        m.bufferCheckPosition = S + m.position;
      }
      function l(m) {
        for (var d = 0, R = i.length; d < R; d++)
          m[i[d]] = "";
      }
      function p(m) {
        Je(m), m.cdata !== "" && (Oe(m, "oncdata", m.cdata), m.cdata = ""), m.script !== "" && (Oe(m, "onscript", m.script), m.script = "");
      }
      o.prototype = {
        end: function() {
          Ve(this);
        },
        write: Dt,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          p(this);
        }
      };
      var h;
      try {
        h = ua.Stream;
      } catch {
        h = function() {
        };
      }
      h || (h = function() {
      });
      var b = t.EVENTS.filter(function(m) {
        return m !== "error" && m !== "end";
      });
      function M(m, d) {
        return new T(m, d);
      }
      function T(m, d) {
        if (!(this instanceof T))
          return new T(m, d);
        h.apply(this), this._parser = new o(m, d), this.writable = !0, this.readable = !0;
        var R = this;
        this._parser.onend = function() {
          R.emit("end");
        }, this._parser.onerror = function(N) {
          R.emit("error", N), R._parser.error = null;
        }, this._decoder = null, b.forEach(function(N) {
          Object.defineProperty(R, "on" + N, {
            get: function() {
              return R._parser["on" + N];
            },
            set: function(Ce) {
              if (!Ce)
                return R.removeAllListeners(N), R._parser["on" + N] = Ce, Ce;
              R.on(N, Ce);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      T.prototype = Object.create(h.prototype, {
        constructor: {
          value: T
        }
      }), T.prototype.write = function(m) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(m)) {
          if (!this._decoder) {
            var d = ua.StringDecoder;
            this._decoder = new d("utf8");
          }
          m = this._decoder.write(m);
        }
        return this._parser.write(m.toString()), this.emit("data", m), !0;
      }, T.prototype.end = function(m) {
        return m && m.length && this.write(m), this._parser.end(), !0;
      }, T.prototype.on = function(m, d) {
        var R = this;
        return !R._parser["on" + m] && b.indexOf(m) !== -1 && (R._parser["on" + m] = function() {
          var N = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          N.splice(0, 0, m), R.emit.apply(R, N);
        }), h.prototype.on.call(R, m, d);
      };
      var j = "[CDATA[", q = "DOCTYPE", H = "http://www.w3.org/XML/1998/namespace", ae = "http://www.w3.org/2000/xmlns/", le = { xml: H, xmlns: ae }, ye = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, he = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, be = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, De = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function oe(m) {
        return m === " " || m === `
` || m === "\r" || m === "	";
      }
      function je(m) {
        return m === '"' || m === "'";
      }
      function Ke(m) {
        return m === ">" || oe(m);
      }
      function xe(m, d) {
        return m.test(d);
      }
      function tt(m, d) {
        return !xe(m, d);
      }
      var F = 0;
      t.STATE = {
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
      }, t.XML_ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'"
      }, t.ENTITIES = {
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
      }, Object.keys(t.ENTITIES).forEach(function(m) {
        var d = t.ENTITIES[m], R = typeof d == "number" ? String.fromCharCode(d) : d;
        t.ENTITIES[m] = R;
      });
      for (var Et in t.STATE)
        t.STATE[t.STATE[Et]] = Et;
      F = t.STATE;
      function dt(m, d, R) {
        m[d] && m[d](R);
      }
      function Oe(m, d, R) {
        m.textNode && Je(m), dt(m, d, R);
      }
      function Je(m) {
        m.textNode = kt(m.opt, m.textNode), m.textNode && dt(m, "ontext", m.textNode), m.textNode = "";
      }
      function kt(m, d) {
        return m.trim && (d = d.trim()), m.normalize && (d = d.replace(/\s+/g, " ")), d;
      }
      function Nt(m, d) {
        return Je(m), m.trackPosition && (d += `
Line: ` + m.line + `
Column: ` + m.column + `
Char: ` + m.c), d = new Error(d), m.error = d, dt(m, "onerror", d), m;
      }
      function Ve(m) {
        return m.sawRoot && !m.closedRoot && fe(m, "Unclosed root tag"), m.state !== F.BEGIN && m.state !== F.BEGIN_WHITESPACE && m.state !== F.TEXT && Nt(m, "Unexpected end"), Je(m), m.c = "", m.closed = !0, dt(m, "onend"), o.call(m, m.strict, m.opt), m;
      }
      function fe(m, d) {
        if (typeof m != "object" || !(m instanceof o))
          throw new Error("bad call to strictFail");
        m.strict && Nt(m, d);
      }
      function Te(m) {
        m.strict || (m.tagName = m.tagName[m.looseCase]());
        var d = m.tags[m.tags.length - 1] || m, R = m.tag = { name: m.tagName, attributes: {} };
        m.opt.xmlns && (R.ns = d.ns), m.attribList.length = 0, Oe(m, "onopentagstart", R);
      }
      function ze(m, d) {
        var R = m.indexOf(":"), N = R < 0 ? ["", m] : m.split(":"), Ce = N[0], g = N[1];
        return d && m === "xmlns" && (Ce = "xmlns", g = ""), { prefix: Ce, local: g };
      }
      function ot(m) {
        if (m.strict || (m.attribName = m.attribName[m.looseCase]()), m.attribList.indexOf(m.attribName) !== -1 || m.tag.attributes.hasOwnProperty(m.attribName)) {
          m.attribName = m.attribValue = "";
          return;
        }
        if (m.opt.xmlns) {
          var d = ze(m.attribName, !0), R = d.prefix, N = d.local;
          if (R === "xmlns")
            if (N === "xml" && m.attribValue !== H)
              fe(
                m,
                "xml: prefix must be bound to " + H + `
Actual: ` + m.attribValue
              );
            else if (N === "xmlns" && m.attribValue !== ae)
              fe(
                m,
                "xmlns: prefix must be bound to " + ae + `
Actual: ` + m.attribValue
              );
            else {
              var Ce = m.tag, g = m.tags[m.tags.length - 1] || m;
              Ce.ns === g.ns && (Ce.ns = Object.create(g.ns)), Ce.ns[N] = m.attribValue;
            }
          m.attribList.push([m.attribName, m.attribValue]);
        } else
          m.tag.attributes[m.attribName] = m.attribValue, Oe(m, "onattribute", {
            name: m.attribName,
            value: m.attribValue
          });
        m.attribName = m.attribValue = "";
      }
      function nt(m, d) {
        if (m.opt.xmlns) {
          var R = m.tag, N = ze(m.tagName);
          R.prefix = N.prefix, R.local = N.local, R.uri = R.ns[N.prefix] || "", R.prefix && !R.uri && (fe(m, "Unbound namespace prefix: " + JSON.stringify(m.tagName)), R.uri = N.prefix);
          var Ce = m.tags[m.tags.length - 1] || m;
          R.ns && Ce.ns !== R.ns && Object.keys(R.ns).forEach(function(de) {
            Oe(m, "onopennamespace", {
              prefix: de,
              uri: R.ns[de]
            });
          });
          for (var g = 0, S = m.attribList.length; g < S; g++) {
            var L = m.attribList[g], V = L[0], U = L[1], K = ze(V, !0), J = K.prefix, Z = K.local, X = J === "" ? "" : R.ns[J] || "", G = {
              name: V,
              value: U,
              prefix: J,
              local: Z,
              uri: X
            };
            J && J !== "xmlns" && !X && (fe(m, "Unbound namespace prefix: " + JSON.stringify(J)), G.uri = J), m.tag.attributes[V] = G, Oe(m, "onattribute", G);
          }
          m.attribList.length = 0;
        }
        m.tag.isSelfClosing = !!d, m.sawRoot = !0, m.tags.push(m.tag), Oe(m, "onopentag", m.tag), d || (!m.noscript && m.tagName.toLowerCase() === "script" ? m.state = F.SCRIPT : m.state = F.TEXT, m.tag = null, m.tagName = ""), m.attribName = m.attribValue = "", m.attribList.length = 0;
      }
      function pt(m) {
        if (!m.tagName) {
          fe(m, "Weird empty close tag."), m.textNode += "</>", m.state = F.TEXT;
          return;
        }
        if (m.script) {
          if (m.tagName !== "script") {
            m.script += "</" + m.tagName + ">", m.tagName = "", m.state = F.SCRIPT;
            return;
          }
          Oe(m, "onscript", m.script), m.script = "";
        }
        var d = m.tags.length, R = m.tagName;
        m.strict || (R = R[m.looseCase]());
        for (var N = R; d--; ) {
          var Ce = m.tags[d];
          if (Ce.name !== N)
            fe(m, "Unexpected close tag");
          else
            break;
        }
        if (d < 0) {
          fe(m, "Unmatched closing tag: " + m.tagName), m.textNode += "</" + m.tagName + ">", m.state = F.TEXT;
          return;
        }
        m.tagName = R;
        for (var g = m.tags.length; g-- > d; ) {
          var S = m.tag = m.tags.pop();
          m.tagName = m.tag.name, Oe(m, "onclosetag", m.tagName);
          var L = {};
          for (var V in S.ns)
            L[V] = S.ns[V];
          var U = m.tags[m.tags.length - 1] || m;
          m.opt.xmlns && S.ns !== U.ns && Object.keys(S.ns).forEach(function(K) {
            var J = S.ns[K];
            Oe(m, "onclosenamespace", { prefix: K, uri: J });
          });
        }
        d === 0 && (m.closedRoot = !0), m.tagName = m.attribValue = m.attribName = "", m.attribList.length = 0, m.state = F.TEXT;
      }
      function jt(m) {
        var d = m.entity, R = d.toLowerCase(), N, Ce = "";
        return m.ENTITIES[d] ? m.ENTITIES[d] : m.ENTITIES[R] ? m.ENTITIES[R] : (d = R, d.charAt(0) === "#" && (d.charAt(1) === "x" ? (d = d.slice(2), N = parseInt(d, 16), Ce = N.toString(16)) : (d = d.slice(1), N = parseInt(d, 10), Ce = N.toString(10))), d = d.replace(/^0+/, ""), isNaN(N) || Ce.toLowerCase() !== d ? (fe(m, "Invalid character entity"), "&" + m.entity + ";") : String.fromCodePoint(N));
      }
      function Sn(m, d) {
        d === "<" ? (m.state = F.OPEN_WAKA, m.startTagPosition = m.position) : oe(d) || (fe(m, "Non-whitespace before first tag."), m.textNode = d, m.state = F.TEXT);
      }
      function Xt(m, d) {
        var R = "";
        return d < m.length && (R = m.charAt(d)), R;
      }
      function Dt(m) {
        var d = this;
        if (this.error)
          throw this.error;
        if (d.closed)
          return Nt(
            d,
            "Cannot write after close. Assign an onready handler."
          );
        if (m === null)
          return Ve(d);
        typeof m == "object" && (m = m.toString());
        for (var R = 0, N = ""; N = Xt(m, R++), d.c = N, !!N; )
          switch (d.trackPosition && (d.position++, N === `
` ? (d.line++, d.column = 0) : d.column++), d.state) {
            case F.BEGIN:
              if (d.state = F.BEGIN_WHITESPACE, N === "\uFEFF")
                continue;
              Sn(d, N);
              continue;
            case F.BEGIN_WHITESPACE:
              Sn(d, N);
              continue;
            case F.TEXT:
              if (d.sawRoot && !d.closedRoot) {
                for (var Ce = R - 1; N && N !== "<" && N !== "&"; )
                  N = Xt(m, R++), N && d.trackPosition && (d.position++, N === `
` ? (d.line++, d.column = 0) : d.column++);
                d.textNode += m.substring(Ce, R - 1);
              }
              N === "<" && !(d.sawRoot && d.closedRoot && !d.strict) ? (d.state = F.OPEN_WAKA, d.startTagPosition = d.position) : (!oe(N) && (!d.sawRoot || d.closedRoot) && fe(d, "Text data outside of root node."), N === "&" ? d.state = F.TEXT_ENTITY : d.textNode += N);
              continue;
            case F.SCRIPT:
              N === "<" ? d.state = F.SCRIPT_ENDING : d.script += N;
              continue;
            case F.SCRIPT_ENDING:
              N === "/" ? d.state = F.CLOSE_TAG : (d.script += "<" + N, d.state = F.SCRIPT);
              continue;
            case F.OPEN_WAKA:
              if (N === "!")
                d.state = F.SGML_DECL, d.sgmlDecl = "";
              else if (!oe(N)) if (xe(ye, N))
                d.state = F.OPEN_TAG, d.tagName = N;
              else if (N === "/")
                d.state = F.CLOSE_TAG, d.tagName = "";
              else if (N === "?")
                d.state = F.PROC_INST, d.procInstName = d.procInstBody = "";
              else {
                if (fe(d, "Unencoded <"), d.startTagPosition + 1 < d.position) {
                  var g = d.position - d.startTagPosition;
                  N = new Array(g).join(" ") + N;
                }
                d.textNode += "<" + N, d.state = F.TEXT;
              }
              continue;
            case F.SGML_DECL:
              if (d.sgmlDecl + N === "--") {
                d.state = F.COMMENT, d.comment = "", d.sgmlDecl = "";
                continue;
              }
              d.doctype && d.doctype !== !0 && d.sgmlDecl ? (d.state = F.DOCTYPE_DTD, d.doctype += "<!" + d.sgmlDecl + N, d.sgmlDecl = "") : (d.sgmlDecl + N).toUpperCase() === j ? (Oe(d, "onopencdata"), d.state = F.CDATA, d.sgmlDecl = "", d.cdata = "") : (d.sgmlDecl + N).toUpperCase() === q ? (d.state = F.DOCTYPE, (d.doctype || d.sawRoot) && fe(
                d,
                "Inappropriately located doctype declaration"
              ), d.doctype = "", d.sgmlDecl = "") : N === ">" ? (Oe(d, "onsgmldeclaration", d.sgmlDecl), d.sgmlDecl = "", d.state = F.TEXT) : (je(N) && (d.state = F.SGML_DECL_QUOTED), d.sgmlDecl += N);
              continue;
            case F.SGML_DECL_QUOTED:
              N === d.q && (d.state = F.SGML_DECL, d.q = ""), d.sgmlDecl += N;
              continue;
            case F.DOCTYPE:
              N === ">" ? (d.state = F.TEXT, Oe(d, "ondoctype", d.doctype), d.doctype = !0) : (d.doctype += N, N === "[" ? d.state = F.DOCTYPE_DTD : je(N) && (d.state = F.DOCTYPE_QUOTED, d.q = N));
              continue;
            case F.DOCTYPE_QUOTED:
              d.doctype += N, N === d.q && (d.q = "", d.state = F.DOCTYPE);
              continue;
            case F.DOCTYPE_DTD:
              N === "]" ? (d.doctype += N, d.state = F.DOCTYPE) : N === "<" ? (d.state = F.OPEN_WAKA, d.startTagPosition = d.position) : je(N) ? (d.doctype += N, d.state = F.DOCTYPE_DTD_QUOTED, d.q = N) : d.doctype += N;
              continue;
            case F.DOCTYPE_DTD_QUOTED:
              d.doctype += N, N === d.q && (d.state = F.DOCTYPE_DTD, d.q = "");
              continue;
            case F.COMMENT:
              N === "-" ? d.state = F.COMMENT_ENDING : d.comment += N;
              continue;
            case F.COMMENT_ENDING:
              N === "-" ? (d.state = F.COMMENT_ENDED, d.comment = kt(d.opt, d.comment), d.comment && Oe(d, "oncomment", d.comment), d.comment = "") : (d.comment += "-" + N, d.state = F.COMMENT);
              continue;
            case F.COMMENT_ENDED:
              N !== ">" ? (fe(d, "Malformed comment"), d.comment += "--" + N, d.state = F.COMMENT) : d.doctype && d.doctype !== !0 ? d.state = F.DOCTYPE_DTD : d.state = F.TEXT;
              continue;
            case F.CDATA:
              N === "]" ? d.state = F.CDATA_ENDING : d.cdata += N;
              continue;
            case F.CDATA_ENDING:
              N === "]" ? d.state = F.CDATA_ENDING_2 : (d.cdata += "]" + N, d.state = F.CDATA);
              continue;
            case F.CDATA_ENDING_2:
              N === ">" ? (d.cdata && Oe(d, "oncdata", d.cdata), Oe(d, "onclosecdata"), d.cdata = "", d.state = F.TEXT) : N === "]" ? d.cdata += "]" : (d.cdata += "]]" + N, d.state = F.CDATA);
              continue;
            case F.PROC_INST:
              N === "?" ? d.state = F.PROC_INST_ENDING : oe(N) ? d.state = F.PROC_INST_BODY : d.procInstName += N;
              continue;
            case F.PROC_INST_BODY:
              if (!d.procInstBody && oe(N))
                continue;
              N === "?" ? d.state = F.PROC_INST_ENDING : d.procInstBody += N;
              continue;
            case F.PROC_INST_ENDING:
              N === ">" ? (Oe(d, "onprocessinginstruction", {
                name: d.procInstName,
                body: d.procInstBody
              }), d.procInstName = d.procInstBody = "", d.state = F.TEXT) : (d.procInstBody += "?" + N, d.state = F.PROC_INST_BODY);
              continue;
            case F.OPEN_TAG:
              xe(he, N) ? d.tagName += N : (Te(d), N === ">" ? nt(d) : N === "/" ? d.state = F.OPEN_TAG_SLASH : (oe(N) || fe(d, "Invalid character in tag name"), d.state = F.ATTRIB));
              continue;
            case F.OPEN_TAG_SLASH:
              N === ">" ? (nt(d, !0), pt(d)) : (fe(d, "Forward-slash in opening tag not followed by >"), d.state = F.ATTRIB);
              continue;
            case F.ATTRIB:
              if (oe(N))
                continue;
              N === ">" ? nt(d) : N === "/" ? d.state = F.OPEN_TAG_SLASH : xe(ye, N) ? (d.attribName = N, d.attribValue = "", d.state = F.ATTRIB_NAME) : fe(d, "Invalid attribute name");
              continue;
            case F.ATTRIB_NAME:
              N === "=" ? d.state = F.ATTRIB_VALUE : N === ">" ? (fe(d, "Attribute without value"), d.attribValue = d.attribName, ot(d), nt(d)) : oe(N) ? d.state = F.ATTRIB_NAME_SAW_WHITE : xe(he, N) ? d.attribName += N : fe(d, "Invalid attribute name");
              continue;
            case F.ATTRIB_NAME_SAW_WHITE:
              if (N === "=")
                d.state = F.ATTRIB_VALUE;
              else {
                if (oe(N))
                  continue;
                fe(d, "Attribute without value"), d.tag.attributes[d.attribName] = "", d.attribValue = "", Oe(d, "onattribute", {
                  name: d.attribName,
                  value: ""
                }), d.attribName = "", N === ">" ? nt(d) : xe(ye, N) ? (d.attribName = N, d.state = F.ATTRIB_NAME) : (fe(d, "Invalid attribute name"), d.state = F.ATTRIB);
              }
              continue;
            case F.ATTRIB_VALUE:
              if (oe(N))
                continue;
              je(N) ? (d.q = N, d.state = F.ATTRIB_VALUE_QUOTED) : (d.opt.unquotedAttributeValues || Nt(d, "Unquoted attribute value"), d.state = F.ATTRIB_VALUE_UNQUOTED, d.attribValue = N);
              continue;
            case F.ATTRIB_VALUE_QUOTED:
              if (N !== d.q) {
                N === "&" ? d.state = F.ATTRIB_VALUE_ENTITY_Q : d.attribValue += N;
                continue;
              }
              ot(d), d.q = "", d.state = F.ATTRIB_VALUE_CLOSED;
              continue;
            case F.ATTRIB_VALUE_CLOSED:
              oe(N) ? d.state = F.ATTRIB : N === ">" ? nt(d) : N === "/" ? d.state = F.OPEN_TAG_SLASH : xe(ye, N) ? (fe(d, "No whitespace between attributes"), d.attribName = N, d.attribValue = "", d.state = F.ATTRIB_NAME) : fe(d, "Invalid attribute name");
              continue;
            case F.ATTRIB_VALUE_UNQUOTED:
              if (!Ke(N)) {
                N === "&" ? d.state = F.ATTRIB_VALUE_ENTITY_U : d.attribValue += N;
                continue;
              }
              ot(d), N === ">" ? nt(d) : d.state = F.ATTRIB;
              continue;
            case F.CLOSE_TAG:
              if (d.tagName)
                N === ">" ? pt(d) : xe(he, N) ? d.tagName += N : d.script ? (d.script += "</" + d.tagName, d.tagName = "", d.state = F.SCRIPT) : (oe(N) || fe(d, "Invalid tagname in closing tag"), d.state = F.CLOSE_TAG_SAW_WHITE);
              else {
                if (oe(N))
                  continue;
                tt(ye, N) ? d.script ? (d.script += "</" + N, d.state = F.SCRIPT) : fe(d, "Invalid tagname in closing tag.") : d.tagName = N;
              }
              continue;
            case F.CLOSE_TAG_SAW_WHITE:
              if (oe(N))
                continue;
              N === ">" ? pt(d) : fe(d, "Invalid characters in closing tag");
              continue;
            case F.TEXT_ENTITY:
            case F.ATTRIB_VALUE_ENTITY_Q:
            case F.ATTRIB_VALUE_ENTITY_U:
              var S, L;
              switch (d.state) {
                case F.TEXT_ENTITY:
                  S = F.TEXT, L = "textNode";
                  break;
                case F.ATTRIB_VALUE_ENTITY_Q:
                  S = F.ATTRIB_VALUE_QUOTED, L = "attribValue";
                  break;
                case F.ATTRIB_VALUE_ENTITY_U:
                  S = F.ATTRIB_VALUE_UNQUOTED, L = "attribValue";
                  break;
              }
              if (N === ";") {
                var V = jt(d);
                d.opt.unparsedEntities && !Object.values(t.XML_ENTITIES).includes(V) ? (d.entity = "", d.state = S, d.write(V)) : (d[L] += V, d.entity = "", d.state = S);
              } else xe(d.entity.length ? De : be, N) ? d.entity += N : (fe(d, "Invalid character in entity name"), d[L] += "&" + d.entity + N, d.entity = "", d.state = S);
              continue;
            default:
              throw new Error(d, "Unknown state: " + d.state);
          }
        return d.position >= d.bufferCheckPosition && a(d), d;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var m = String.fromCharCode, d = Math.floor, R = function() {
          var N = 16384, Ce = [], g, S, L = -1, V = arguments.length;
          if (!V)
            return "";
          for (var U = ""; ++L < V; ) {
            var K = Number(arguments[L]);
            if (!isFinite(K) || // `NaN`, `+Infinity`, or `-Infinity`
            K < 0 || // not a valid Unicode code point
            K > 1114111 || // not a valid Unicode code point
            d(K) !== K)
              throw RangeError("Invalid code point: " + K);
            K <= 65535 ? Ce.push(K) : (K -= 65536, g = (K >> 10) + 55296, S = K % 1024 + 56320, Ce.push(g, S)), (L + 1 === V || Ce.length > N) && (U += m.apply(null, Ce), Ce.length = 0);
          }
          return U;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: R,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = R;
      }();
    })(e);
  }(ca)), ca;
}
zf();
var Ao = { exports: {} }, Zf = Ao.exports, fa;
function ed() {
  return fa || (fa = 1, function(e, t) {
    (function(i, o) {
      e.exports = o();
    })(Zf, function() {
      var i = function(n, r) {
        return (i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, c) {
          s.__proto__ = c;
        } || function(s, c) {
          for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && (s[u] = c[u]);
        })(n, r);
      }, o = function() {
        return (o = Object.assign || function(n) {
          for (var r, s = 1, c = arguments.length; s < c; s++) for (var u in r = arguments[s]) Object.prototype.hasOwnProperty.call(r, u) && (n[u] = r[u]);
          return n;
        }).apply(this, arguments);
      };
      function a(n, r, s) {
        for (var c, u = 0, f = r.length; u < f; u++) !c && u in r || ((c = c || Array.prototype.slice.call(r, 0, u))[u] = r[u]);
        return n.concat(c || Array.prototype.slice.call(r));
      }
      var l = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Wf, p = Object.keys, h = Array.isArray;
      function b(n, r) {
        return typeof r != "object" || p(r).forEach(function(s) {
          n[s] = r[s];
        }), n;
      }
      typeof Promise > "u" || l.Promise || (l.Promise = Promise);
      var M = Object.getPrototypeOf, T = {}.hasOwnProperty;
      function j(n, r) {
        return T.call(n, r);
      }
      function q(n, r) {
        typeof r == "function" && (r = r(M(n))), (typeof Reflect > "u" ? p : Reflect.ownKeys)(r).forEach(function(s) {
          ae(n, s, r[s]);
        });
      }
      var H = Object.defineProperty;
      function ae(n, r, s, c) {
        H(n, r, b(s && j(s, "get") && typeof s.get == "function" ? { get: s.get, set: s.set, configurable: !0 } : { value: s, configurable: !0, writable: !0 }, c));
      }
      function le(n) {
        return { from: function(r) {
          return n.prototype = Object.create(r.prototype), ae(n.prototype, "constructor", n), { extend: q.bind(null, n.prototype) };
        } };
      }
      var ye = Object.getOwnPropertyDescriptor, he = [].slice;
      function be(n, r, s) {
        return he.call(n, r, s);
      }
      function De(n, r) {
        return r(n);
      }
      function oe(n) {
        if (!n) throw new Error("Assertion Failed");
      }
      function je(n) {
        l.setImmediate ? setImmediate(n) : setTimeout(n, 0);
      }
      function Ke(n, r) {
        if (typeof r == "string" && j(n, r)) return n[r];
        if (!r) return n;
        if (typeof r != "string") {
          for (var s = [], c = 0, u = r.length; c < u; ++c) {
            var f = Ke(n, r[c]);
            s.push(f);
          }
          return s;
        }
        var y = r.indexOf(".");
        if (y !== -1) {
          var v = n[r.substr(0, y)];
          return v == null ? void 0 : Ke(v, r.substr(y + 1));
        }
      }
      function xe(n, r, s) {
        if (n && r !== void 0 && !("isFrozen" in Object && Object.isFrozen(n))) if (typeof r != "string" && "length" in r) {
          oe(typeof s != "string" && "length" in s);
          for (var c = 0, u = r.length; c < u; ++c) xe(n, r[c], s[c]);
        } else {
          var f, y, v = r.indexOf(".");
          v !== -1 ? (f = r.substr(0, v), (y = r.substr(v + 1)) === "" ? s === void 0 ? h(n) && !isNaN(parseInt(f)) ? n.splice(f, 1) : delete n[f] : n[f] = s : xe(v = !(v = n[f]) || !j(n, f) ? n[f] = {} : v, y, s)) : s === void 0 ? h(n) && !isNaN(parseInt(r)) ? n.splice(r, 1) : delete n[r] : n[r] = s;
        }
      }
      function tt(n) {
        var r, s = {};
        for (r in n) j(n, r) && (s[r] = n[r]);
        return s;
      }
      var F = [].concat;
      function Et(n) {
        return F.apply([], n);
      }
      var _e = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Et([8, 16, 32, 64].map(function(n) {
        return ["Int", "Uint", "Float"].map(function(r) {
          return r + n + "Array";
        });
      }))).filter(function(n) {
        return l[n];
      }), dt = new Set(_e.map(function(n) {
        return l[n];
      })), Oe = null;
      function Je(n) {
        return Oe = /* @__PURE__ */ new WeakMap(), n = function r(s) {
          if (!s || typeof s != "object") return s;
          var c = Oe.get(s);
          if (c) return c;
          if (h(s)) {
            c = [], Oe.set(s, c);
            for (var u = 0, f = s.length; u < f; ++u) c.push(r(s[u]));
          } else if (dt.has(s.constructor)) c = s;
          else {
            var y, v = M(s);
            for (y in c = v === Object.prototype ? {} : Object.create(v), Oe.set(s, c), s) j(s, y) && (c[y] = r(s[y]));
          }
          return c;
        }(n), Oe = null, n;
      }
      var kt = {}.toString;
      function Nt(n) {
        return kt.call(n).slice(8, -1);
      }
      var Ve = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", fe = typeof Ve == "symbol" ? function(n) {
        var r;
        return n != null && (r = n[Ve]) && r.apply(n);
      } : function() {
        return null;
      };
      function Te(n, r) {
        return r = n.indexOf(r), 0 <= r && n.splice(r, 1), 0 <= r;
      }
      var ze = {};
      function ot(n) {
        var r, s, c, u;
        if (arguments.length === 1) {
          if (h(n)) return n.slice();
          if (this === ze && typeof n == "string") return [n];
          if (u = fe(n)) {
            for (s = []; !(c = u.next()).done; ) s.push(c.value);
            return s;
          }
          if (n == null) return [n];
          if (typeof (r = n.length) != "number") return [n];
          for (s = new Array(r); r--; ) s[r] = n[r];
          return s;
        }
        for (r = arguments.length, s = new Array(r); r--; ) s[r] = arguments[r];
        return s;
      }
      var nt = typeof Symbol < "u" ? function(n) {
        return n[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, me = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Mt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(me), pt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function jt(n, r) {
        this.name = n, this.message = r;
      }
      function Sn(n, r) {
        return n + ". Errors: " + Object.keys(r).map(function(s) {
          return r[s].toString();
        }).filter(function(s, c, u) {
          return u.indexOf(s) === c;
        }).join(`
`);
      }
      function Xt(n, r, s, c) {
        this.failures = r, this.failedKeys = c, this.successCount = s, this.message = Sn(n, r);
      }
      function Dt(n, r) {
        this.name = "BulkError", this.failures = Object.keys(r).map(function(s) {
          return r[s];
        }), this.failuresByPos = r, this.message = Sn(n, this.failures);
      }
      le(jt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), le(Xt).from(jt), le(Dt).from(jt);
      var m = Mt.reduce(function(n, r) {
        return n[r] = r + "Error", n;
      }, {}), d = jt, R = Mt.reduce(function(n, r) {
        var s = r + "Error";
        function c(u, f) {
          this.name = s, u ? typeof u == "string" ? (this.message = "".concat(u).concat(f ? `
 ` + f : ""), this.inner = f || null) : typeof u == "object" && (this.message = "".concat(u.name, " ").concat(u.message), this.inner = u) : (this.message = pt[r] || s, this.inner = null);
        }
        return le(c).from(d), n[r] = c, n;
      }, {});
      R.Syntax = SyntaxError, R.Type = TypeError, R.Range = RangeError;
      var N = me.reduce(function(n, r) {
        return n[r + "Error"] = R[r], n;
      }, {}), Ce = Mt.reduce(function(n, r) {
        return ["Syntax", "Type", "Range"].indexOf(r) === -1 && (n[r + "Error"] = R[r]), n;
      }, {});
      function g() {
      }
      function S(n) {
        return n;
      }
      function L(n, r) {
        return n == null || n === S ? r : function(s) {
          return r(n(s));
        };
      }
      function V(n, r) {
        return function() {
          n.apply(this, arguments), r.apply(this, arguments);
        };
      }
      function U(n, r) {
        return n === g ? r : function() {
          var s = n.apply(this, arguments);
          s !== void 0 && (arguments[0] = s);
          var c = this.onsuccess, u = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var f = r.apply(this, arguments);
          return c && (this.onsuccess = this.onsuccess ? V(c, this.onsuccess) : c), u && (this.onerror = this.onerror ? V(u, this.onerror) : u), f !== void 0 ? f : s;
        };
      }
      function K(n, r) {
        return n === g ? r : function() {
          n.apply(this, arguments);
          var s = this.onsuccess, c = this.onerror;
          this.onsuccess = this.onerror = null, r.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? V(s, this.onsuccess) : s), c && (this.onerror = this.onerror ? V(c, this.onerror) : c);
        };
      }
      function J(n, r) {
        return n === g ? r : function(s) {
          var c = n.apply(this, arguments);
          b(s, c);
          var u = this.onsuccess, f = this.onerror;
          return this.onsuccess = null, this.onerror = null, s = r.apply(this, arguments), u && (this.onsuccess = this.onsuccess ? V(u, this.onsuccess) : u), f && (this.onerror = this.onerror ? V(f, this.onerror) : f), c === void 0 ? s === void 0 ? void 0 : s : b(c, s);
        };
      }
      function Z(n, r) {
        return n === g ? r : function() {
          return r.apply(this, arguments) !== !1 && n.apply(this, arguments);
        };
      }
      function X(n, r) {
        return n === g ? r : function() {
          var s = n.apply(this, arguments);
          if (s && typeof s.then == "function") {
            for (var c = this, u = arguments.length, f = new Array(u); u--; ) f[u] = arguments[u];
            return s.then(function() {
              return r.apply(c, f);
            });
          }
          return r.apply(this, arguments);
        };
      }
      Ce.ModifyError = Xt, Ce.DexieError = jt, Ce.BulkError = Dt;
      var G = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function de(n) {
        G = n;
      }
      var ee = {}, pe = 100, _e = typeof Promise > "u" ? [] : function() {
        var n = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [n, M(n), n];
        var r = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [r, M(r), n];
      }(), me = _e[0], Mt = _e[1], _e = _e[2], Mt = Mt && Mt.then, Ae = me && me.constructor, Pe = !!_e, Ze = function(n, r) {
        sn.push([n, r]), wt && (queueMicrotask(Xc), wt = !1);
      }, st = !0, wt = !0, at = [], Bt = [], jn = S, Ge = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: g, pgp: !1, env: {}, finalize: g }, se = Ge, sn = [], En = 0, Ir = [];
      function re(n) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var r = this._PSD = se;
        if (typeof n != "function") {
          if (n !== ee) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Ci(this, this._value));
        }
        this._state = null, this._value = null, ++r.ref, function s(c, u) {
          try {
            u(function(f) {
              if (c._state === null) {
                if (f === c) throw new TypeError("A promise cannot be resolved with itself.");
                var y = c._lib && Ln();
                f && typeof f.then == "function" ? s(c, function(v, E) {
                  f instanceof re ? f._then(v, E) : f.then(v, E);
                }) : (c._state = !0, c._value = f, is(c)), y && $n();
              }
            }, Ci.bind(null, c));
          } catch (f) {
            Ci(c, f);
          }
        }(this, n);
      }
      var Ti = { get: function() {
        var n = se, r = Or;
        function s(c, u) {
          var f = this, y = !n.global && (n !== se || r !== Or), v = y && !cn(), E = new re(function(x, I) {
            Ii(f, new rs(ss(c, n, y, v), ss(u, n, y, v), x, I, n));
          });
          return this._consoleTask && (E._consoleTask = this._consoleTask), E;
        }
        return s.prototype = ee, s;
      }, set: function(n) {
        ae(this, "then", n && n.prototype === ee ? Ti : { get: function() {
          return n;
        }, set: Ti.set });
      } };
      function rs(n, r, s, c, u) {
        this.onFulfilled = typeof n == "function" ? n : null, this.onRejected = typeof r == "function" ? r : null, this.resolve = s, this.reject = c, this.psd = u;
      }
      function Ci(n, r) {
        var s, c;
        Bt.push(r), n._state === null && (s = n._lib && Ln(), r = jn(r), n._state = !1, n._value = r, c = n, at.some(function(u) {
          return u._value === c._value;
        }) || at.push(c), is(n), s && $n());
      }
      function is(n) {
        var r = n._listeners;
        n._listeners = [];
        for (var s = 0, c = r.length; s < c; ++s) Ii(n, r[s]);
        var u = n._PSD;
        --u.ref || u.finalize(), En === 0 && (++En, Ze(function() {
          --En == 0 && Ai();
        }, []));
      }
      function Ii(n, r) {
        if (n._state !== null) {
          var s = n._state ? r.onFulfilled : r.onRejected;
          if (s === null) return (n._state ? r.resolve : r.reject)(n._value);
          ++r.psd.ref, ++En, Ze(Yc, [s, n, r]);
        } else n._listeners.push(r);
      }
      function Yc(n, r, s) {
        try {
          var c, u = r._value;
          !r._state && Bt.length && (Bt = []), c = G && r._consoleTask ? r._consoleTask.run(function() {
            return n(u);
          }) : n(u), r._state || Bt.indexOf(u) !== -1 || function(f) {
            for (var y = at.length; y; ) if (at[--y]._value === f._value) return at.splice(y, 1);
          }(r), s.resolve(c);
        } catch (f) {
          s.reject(f);
        } finally {
          --En == 0 && Ai(), --s.psd.ref || s.psd.finalize();
        }
      }
      function Xc() {
        wn(Ge, function() {
          Ln() && $n();
        });
      }
      function Ln() {
        var n = st;
        return wt = st = !1, n;
      }
      function $n() {
        var n, r, s;
        do
          for (; 0 < sn.length; ) for (n = sn, sn = [], s = n.length, r = 0; r < s; ++r) {
            var c = n[r];
            c[0].apply(null, c[1]);
          }
        while (0 < sn.length);
        wt = st = !0;
      }
      function Ai() {
        var n = at;
        at = [], n.forEach(function(c) {
          c._PSD.onunhandled.call(null, c._value, c);
        });
        for (var r = Ir.slice(0), s = r.length; s; ) r[--s]();
      }
      function Ar(n) {
        return new re(ee, !1, n);
      }
      function Ue(n, r) {
        var s = se;
        return function() {
          var c = Ln(), u = se;
          try {
            return un(s, !0), n.apply(this, arguments);
          } catch (f) {
            r && r(f);
          } finally {
            un(u, !1), c && $n();
          }
        };
      }
      q(re.prototype, { then: Ti, _then: function(n, r) {
        Ii(this, new rs(null, null, n, r, se));
      }, catch: function(n) {
        if (arguments.length === 1) return this.then(null, n);
        var r = n, s = arguments[1];
        return typeof r == "function" ? this.then(null, function(c) {
          return (c instanceof r ? s : Ar)(c);
        }) : this.then(null, function(c) {
          return (c && c.name === r ? s : Ar)(c);
        });
      }, finally: function(n) {
        return this.then(function(r) {
          return re.resolve(n()).then(function() {
            return r;
          });
        }, function(r) {
          return re.resolve(n()).then(function() {
            return Ar(r);
          });
        });
      }, timeout: function(n, r) {
        var s = this;
        return n < 1 / 0 ? new re(function(c, u) {
          var f = setTimeout(function() {
            return u(new R.Timeout(r));
          }, n);
          s.then(c, u).finally(clearTimeout.bind(null, f));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && ae(re.prototype, Symbol.toStringTag, "Dexie.Promise"), Ge.env = os(), q(re, { all: function() {
        var n = ot.apply(null, arguments).map(Pr);
        return new re(function(r, s) {
          n.length === 0 && r([]);
          var c = n.length;
          n.forEach(function(u, f) {
            return re.resolve(u).then(function(y) {
              n[f] = y, --c || r(n);
            }, s);
          });
        });
      }, resolve: function(n) {
        return n instanceof re ? n : n && typeof n.then == "function" ? new re(function(r, s) {
          n.then(r, s);
        }) : new re(ee, !0, n);
      }, reject: Ar, race: function() {
        var n = ot.apply(null, arguments).map(Pr);
        return new re(function(r, s) {
          n.map(function(c) {
            return re.resolve(c).then(r, s);
          });
        });
      }, PSD: { get: function() {
        return se;
      }, set: function(n) {
        return se = n;
      } }, totalEchoes: { get: function() {
        return Or;
      } }, newPSD: an, usePSD: wn, scheduler: { get: function() {
        return Ze;
      }, set: function(n) {
        Ze = n;
      } }, rejectionMapper: { get: function() {
        return jn;
      }, set: function(n) {
        jn = n;
      } }, follow: function(n, r) {
        return new re(function(s, c) {
          return an(function(u, f) {
            var y = se;
            y.unhandleds = [], y.onunhandled = f, y.finalize = V(function() {
              var v, E = this;
              v = function() {
                E.unhandleds.length === 0 ? u() : f(E.unhandleds[0]);
              }, Ir.push(function x() {
                v(), Ir.splice(Ir.indexOf(x), 1);
              }), ++En, Ze(function() {
                --En == 0 && Ai();
              }, []);
            }, y.finalize), n();
          }, r, s, c);
        });
      } }), Ae && (Ae.allSettled && ae(re, "allSettled", function() {
        var n = ot.apply(null, arguments).map(Pr);
        return new re(function(r) {
          n.length === 0 && r([]);
          var s = n.length, c = new Array(s);
          n.forEach(function(u, f) {
            return re.resolve(u).then(function(y) {
              return c[f] = { status: "fulfilled", value: y };
            }, function(y) {
              return c[f] = { status: "rejected", reason: y };
            }).then(function() {
              return --s || r(c);
            });
          });
        });
      }), Ae.any && typeof AggregateError < "u" && ae(re, "any", function() {
        var n = ot.apply(null, arguments).map(Pr);
        return new re(function(r, s) {
          n.length === 0 && s(new AggregateError([]));
          var c = n.length, u = new Array(c);
          n.forEach(function(f, y) {
            return re.resolve(f).then(function(v) {
              return r(v);
            }, function(v) {
              u[y] = v, --c || s(new AggregateError(u));
            });
          });
        });
      }), Ae.withResolvers && (re.withResolvers = Ae.withResolvers));
      var ct = { awaits: 0, echoes: 0, id: 0 }, Qc = 0, Nr = [], Dr = 0, Or = 0, Jc = 0;
      function an(n, r, s, c) {
        var u = se, f = Object.create(u);
        return f.parent = u, f.ref = 0, f.global = !1, f.id = ++Jc, Ge.env, f.env = Pe ? { Promise: re, PromiseProp: { value: re, configurable: !0, writable: !0 }, all: re.all, race: re.race, allSettled: re.allSettled, any: re.any, resolve: re.resolve, reject: re.reject } : {}, r && b(f, r), ++u.ref, f.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, c = wn(f, n, s, c), f.ref === 0 && f.finalize(), c;
      }
      function kn() {
        return ct.id || (ct.id = ++Qc), ++ct.awaits, ct.echoes += pe, ct.id;
      }
      function cn() {
        return !!ct.awaits && (--ct.awaits == 0 && (ct.id = 0), ct.echoes = ct.awaits * pe, !0);
      }
      function Pr(n) {
        return ct.echoes && n && n.constructor === Ae ? (kn(), n.then(function(r) {
          return cn(), r;
        }, function(r) {
          return cn(), We(r);
        })) : n;
      }
      function zc() {
        var n = Nr[Nr.length - 1];
        Nr.pop(), un(n, !1);
      }
      function un(n, r) {
        var s, c = se;
        (r ? !ct.echoes || Dr++ && n === se : !Dr || --Dr && n === se) || queueMicrotask(r ? (function(u) {
          ++Or, ct.echoes && --ct.echoes != 0 || (ct.echoes = ct.awaits = ct.id = 0), Nr.push(se), un(u, !0);
        }).bind(null, n) : zc), n !== se && (se = n, c === Ge && (Ge.env = os()), Pe && (s = Ge.env.Promise, r = n.env, (c.global || n.global) && (Object.defineProperty(l, "Promise", r.PromiseProp), s.all = r.all, s.race = r.race, s.resolve = r.resolve, s.reject = r.reject, r.allSettled && (s.allSettled = r.allSettled), r.any && (s.any = r.any))));
      }
      function os() {
        var n = l.Promise;
        return Pe ? { Promise: n, PromiseProp: Object.getOwnPropertyDescriptor(l, "Promise"), all: n.all, race: n.race, allSettled: n.allSettled, any: n.any, resolve: n.resolve, reject: n.reject } : {};
      }
      function wn(n, r, s, c, u) {
        var f = se;
        try {
          return un(n, !0), r(s, c, u);
        } finally {
          un(f, !1);
        }
      }
      function ss(n, r, s, c) {
        return typeof n != "function" ? n : function() {
          var u = se;
          s && kn(), un(r, !0);
          try {
            return n.apply(this, arguments);
          } finally {
            un(u, !1), c && queueMicrotask(cn);
          }
        };
      }
      function Ni(n) {
        Promise === Ae && ct.echoes === 0 ? Dr === 0 ? n() : enqueueNativeMicroTask(n) : setTimeout(n, 0);
      }
      ("" + Mt).indexOf("[native code]") === -1 && (kn = cn = g);
      var We = re.reject, xn = "￿", Qt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", as = "String expected.", Bn = [], Rr = "__dbnames", Di = "readonly", Oi = "readwrite";
      function Tn(n, r) {
        return n ? r ? function() {
          return n.apply(this, arguments) && r.apply(this, arguments);
        } : n : r;
      }
      var cs = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Fr(n) {
        return typeof n != "string" || /\./.test(n) ? function(r) {
          return r;
        } : function(r) {
          return r[n] === void 0 && n in r && delete (r = Je(r))[n], r;
        };
      }
      function us() {
        throw R.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function Ie(n, r) {
        try {
          var s = ls(n), c = ls(r);
          if (s !== c) return s === "Array" ? 1 : c === "Array" ? -1 : s === "binary" ? 1 : c === "binary" ? -1 : s === "string" ? 1 : c === "string" ? -1 : s === "Date" ? 1 : c !== "Date" ? NaN : -1;
          switch (s) {
            case "number":
            case "Date":
            case "string":
              return r < n ? 1 : n < r ? -1 : 0;
            case "binary":
              return function(u, f) {
                for (var y = u.length, v = f.length, E = y < v ? y : v, x = 0; x < E; ++x) if (u[x] !== f[x]) return u[x] < f[x] ? -1 : 1;
                return y === v ? 0 : y < v ? -1 : 1;
              }(fs(n), fs(r));
            case "Array":
              return function(u, f) {
                for (var y = u.length, v = f.length, E = y < v ? y : v, x = 0; x < E; ++x) {
                  var I = Ie(u[x], f[x]);
                  if (I !== 0) return I;
                }
                return y === v ? 0 : y < v ? -1 : 1;
              }(n, r);
          }
        } catch {
        }
        return NaN;
      }
      function ls(n) {
        var r = typeof n;
        return r != "object" ? r : ArrayBuffer.isView(n) ? "binary" : (n = Nt(n), n === "ArrayBuffer" ? "binary" : n);
      }
      function fs(n) {
        return n instanceof Uint8Array ? n : ArrayBuffer.isView(n) ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : new Uint8Array(n);
      }
      function Mr(n, r, s) {
        var c = n.schema.yProps;
        return c ? (r && 0 < s.numFailures && (r = r.filter(function(u, f) {
          return !s.failures[f];
        })), Promise.all(c.map(function(u) {
          return u = u.updatesTable, r ? n.db.table(u).where("k").anyOf(r).delete() : n.db.table(u).clear();
        })).then(function() {
          return s;
        })) : s;
      }
      var ds = (qe.prototype._trans = function(n, r, s) {
        var c = this._tx || se.trans, u = this.name, f = G && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(n === "readonly" ? "read" : "write", " ").concat(this.name));
        function y(x, I, _) {
          if (!_.schema[u]) throw new R.NotFound("Table " + u + " not part of transaction");
          return r(_.idbtrans, _);
        }
        var v = Ln();
        try {
          var E = c && c.db._novip === this.db._novip ? c === se.trans ? c._promise(n, y, s) : an(function() {
            return c._promise(n, y, s);
          }, { trans: c, transless: se.transless || se }) : function x(I, _, O, w) {
            if (I.idbdb && (I._state.openComplete || se.letThrough || I._vip)) {
              var C = I._createTransaction(_, O, I._dbSchema);
              try {
                C.create(), I._state.PR1398_maxLoop = 3;
              } catch (D) {
                return D.name === m.InvalidState && I.isOpen() && 0 < --I._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), I.close({ disableAutoOpen: !1 }), I.open().then(function() {
                  return x(I, _, O, w);
                })) : We(D);
              }
              return C._promise(_, function(D, A) {
                return an(function() {
                  return se.trans = C, w(D, A, C);
                });
              }).then(function(D) {
                if (_ === "readwrite") try {
                  C.idbtrans.commit();
                } catch {
                }
                return _ === "readonly" ? D : C._completion.then(function() {
                  return D;
                });
              });
            }
            if (I._state.openComplete) return We(new R.DatabaseClosed(I._state.dbOpenError));
            if (!I._state.isBeingOpened) {
              if (!I._state.autoOpen) return We(new R.DatabaseClosed());
              I.open().catch(g);
            }
            return I._state.dbReadyPromise.then(function() {
              return x(I, _, O, w);
            });
          }(this.db, n, [this.name], y);
          return f && (E._consoleTask = f, E = E.catch(function(x) {
            return console.trace(x), We(x);
          })), E;
        } finally {
          v && $n();
        }
      }, qe.prototype.get = function(n, r) {
        var s = this;
        return n && n.constructor === Object ? this.where(n).first(r) : n == null ? We(new R.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(c) {
          return s.core.get({ trans: c, key: n }).then(function(u) {
            return s.hook.reading.fire(u);
          });
        }).then(r);
      }, qe.prototype.where = function(n) {
        if (typeof n == "string") return new this.db.WhereClause(this, n);
        if (h(n)) return new this.db.WhereClause(this, "[".concat(n.join("+"), "]"));
        var r = p(n);
        if (r.length === 1) return this.where(r[0]).equals(n[r[0]]);
        var s = this.schema.indexes.concat(this.schema.primKey).filter(function(v) {
          if (v.compound && r.every(function(x) {
            return 0 <= v.keyPath.indexOf(x);
          })) {
            for (var E = 0; E < r.length; ++E) if (r.indexOf(v.keyPath[E]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(v, E) {
          return v.keyPath.length - E.keyPath.length;
        })[0];
        if (s && this.db._maxKey !== xn) {
          var f = s.keyPath.slice(0, r.length);
          return this.where(f).equals(f.map(function(E) {
            return n[E];
          }));
        }
        !s && G && console.warn("The query ".concat(JSON.stringify(n), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(r.join("+"), "]"));
        var c = this.schema.idxByName;
        function u(v, E) {
          return Ie(v, E) === 0;
        }
        var y = r.reduce(function(_, E) {
          var x = _[0], I = _[1], _ = c[E], O = n[E];
          return [x || _, x || !_ ? Tn(I, _ && _.multi ? function(w) {
            return w = Ke(w, E), h(w) && w.some(function(C) {
              return u(O, C);
            });
          } : function(w) {
            return u(O, Ke(w, E));
          }) : I];
        }, [null, null]), f = y[0], y = y[1];
        return f ? this.where(f.name).equals(n[f.keyPath]).filter(y) : s ? this.filter(y) : this.where(r).equals("");
      }, qe.prototype.filter = function(n) {
        return this.toCollection().and(n);
      }, qe.prototype.count = function(n) {
        return this.toCollection().count(n);
      }, qe.prototype.offset = function(n) {
        return this.toCollection().offset(n);
      }, qe.prototype.limit = function(n) {
        return this.toCollection().limit(n);
      }, qe.prototype.each = function(n) {
        return this.toCollection().each(n);
      }, qe.prototype.toArray = function(n) {
        return this.toCollection().toArray(n);
      }, qe.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, qe.prototype.orderBy = function(n) {
        return new this.db.Collection(new this.db.WhereClause(this, h(n) ? "[".concat(n.join("+"), "]") : n));
      }, qe.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, qe.prototype.mapToClass = function(n) {
        var r, s = this.db, c = this.name;
        function u() {
          return r !== null && r.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = n).prototype instanceof us && (function(E, x) {
          if (typeof x != "function" && x !== null) throw new TypeError("Class extends value " + String(x) + " is not a constructor or null");
          function I() {
            this.constructor = E;
          }
          i(E, x), E.prototype = x === null ? Object.create(x) : (I.prototype = x.prototype, new I());
        }(u, r = n), Object.defineProperty(u.prototype, "db", { get: function() {
          return s;
        }, enumerable: !1, configurable: !0 }), u.prototype.table = function() {
          return c;
        }, n = u);
        for (var f = /* @__PURE__ */ new Set(), y = n.prototype; y; y = M(y)) Object.getOwnPropertyNames(y).forEach(function(E) {
          return f.add(E);
        });
        function v(E) {
          if (!E) return E;
          var x, I = Object.create(n.prototype);
          for (x in E) if (!f.has(x)) try {
            I[x] = E[x];
          } catch {
          }
          return I;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = v, this.hook("reading", v), n;
      }, qe.prototype.defineClass = function() {
        return this.mapToClass(function(n) {
          b(this, n);
        });
      }, qe.prototype.add = function(n, r) {
        var s = this, c = this.schema.primKey, u = c.auto, f = c.keyPath, y = n;
        return f && u && (y = Fr(f)(n)), this._trans("readwrite", function(v) {
          return s.core.mutate({ trans: v, type: "add", keys: r != null ? [r] : null, values: [y] });
        }).then(function(v) {
          return v.numFailures ? re.reject(v.failures[0]) : v.lastResult;
        }).then(function(v) {
          if (f) try {
            xe(n, f, v);
          } catch {
          }
          return v;
        });
      }, qe.prototype.update = function(n, r) {
        return typeof n != "object" || h(n) ? this.where(":id").equals(n).modify(r) : (n = Ke(n, this.schema.primKey.keyPath), n === void 0 ? We(new R.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(n).modify(r));
      }, qe.prototype.put = function(n, r) {
        var s = this, c = this.schema.primKey, u = c.auto, f = c.keyPath, y = n;
        return f && u && (y = Fr(f)(n)), this._trans("readwrite", function(v) {
          return s.core.mutate({ trans: v, type: "put", values: [y], keys: r != null ? [r] : null });
        }).then(function(v) {
          return v.numFailures ? re.reject(v.failures[0]) : v.lastResult;
        }).then(function(v) {
          if (f) try {
            xe(n, f, v);
          } catch {
          }
          return v;
        });
      }, qe.prototype.delete = function(n) {
        var r = this;
        return this._trans("readwrite", function(s) {
          return r.core.mutate({ trans: s, type: "delete", keys: [n] }).then(function(c) {
            return Mr(r, [n], c);
          }).then(function(c) {
            return c.numFailures ? re.reject(c.failures[0]) : void 0;
          });
        });
      }, qe.prototype.clear = function() {
        var n = this;
        return this._trans("readwrite", function(r) {
          return n.core.mutate({ trans: r, type: "deleteRange", range: cs }).then(function(s) {
            return Mr(n, null, s);
          });
        }).then(function(r) {
          return r.numFailures ? re.reject(r.failures[0]) : void 0;
        });
      }, qe.prototype.bulkGet = function(n) {
        var r = this;
        return this._trans("readonly", function(s) {
          return r.core.getMany({ keys: n, trans: s }).then(function(c) {
            return c.map(function(u) {
              return r.hook.reading.fire(u);
            });
          });
        });
      }, qe.prototype.bulkAdd = function(n, r, s) {
        var c = this, u = Array.isArray(r) ? r : void 0, f = (s = s || (u ? void 0 : r)) ? s.allKeys : void 0;
        return this._trans("readwrite", function(y) {
          var x = c.schema.primKey, v = x.auto, x = x.keyPath;
          if (x && u) throw new R.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (u && u.length !== n.length) throw new R.InvalidArgument("Arguments objects and keys must have the same length");
          var E = n.length, x = x && v ? n.map(Fr(x)) : n;
          return c.core.mutate({ trans: y, type: "add", keys: u, values: x, wantResults: f }).then(function(C) {
            var _ = C.numFailures, O = C.results, w = C.lastResult, C = C.failures;
            if (_ === 0) return f ? O : w;
            throw new Dt("".concat(c.name, ".bulkAdd(): ").concat(_, " of ").concat(E, " operations failed"), C);
          });
        });
      }, qe.prototype.bulkPut = function(n, r, s) {
        var c = this, u = Array.isArray(r) ? r : void 0, f = (s = s || (u ? void 0 : r)) ? s.allKeys : void 0;
        return this._trans("readwrite", function(y) {
          var x = c.schema.primKey, v = x.auto, x = x.keyPath;
          if (x && u) throw new R.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (u && u.length !== n.length) throw new R.InvalidArgument("Arguments objects and keys must have the same length");
          var E = n.length, x = x && v ? n.map(Fr(x)) : n;
          return c.core.mutate({ trans: y, type: "put", keys: u, values: x, wantResults: f }).then(function(C) {
            var _ = C.numFailures, O = C.results, w = C.lastResult, C = C.failures;
            if (_ === 0) return f ? O : w;
            throw new Dt("".concat(c.name, ".bulkPut(): ").concat(_, " of ").concat(E, " operations failed"), C);
          });
        });
      }, qe.prototype.bulkUpdate = function(n) {
        var r = this, s = this.core, c = n.map(function(y) {
          return y.key;
        }), u = n.map(function(y) {
          return y.changes;
        }), f = [];
        return this._trans("readwrite", function(y) {
          return s.getMany({ trans: y, keys: c, cache: "clone" }).then(function(v) {
            var E = [], x = [];
            n.forEach(function(_, O) {
              var w = _.key, C = _.changes, D = v[O];
              if (D) {
                for (var A = 0, P = Object.keys(C); A < P.length; A++) {
                  var $ = P[A], k = C[$];
                  if ($ === r.schema.primKey.keyPath) {
                    if (Ie(k, w) !== 0) throw new R.Constraint("Cannot update primary key in bulkUpdate()");
                  } else xe(D, $, k);
                }
                f.push(O), E.push(w), x.push(D);
              }
            });
            var I = E.length;
            return s.mutate({ trans: y, type: "put", keys: E, values: x, updates: { keys: c, changeSpecs: u } }).then(function(_) {
              var O = _.numFailures, w = _.failures;
              if (O === 0) return I;
              for (var C = 0, D = Object.keys(w); C < D.length; C++) {
                var A, P = D[C], $ = f[Number(P)];
                $ != null && (A = w[P], delete w[P], w[$] = A);
              }
              throw new Dt("".concat(r.name, ".bulkUpdate(): ").concat(O, " of ").concat(I, " operations failed"), w);
            });
          });
        });
      }, qe.prototype.bulkDelete = function(n) {
        var r = this, s = n.length;
        return this._trans("readwrite", function(c) {
          return r.core.mutate({ trans: c, type: "delete", keys: n }).then(function(u) {
            return Mr(r, n, u);
          });
        }).then(function(y) {
          var u = y.numFailures, f = y.lastResult, y = y.failures;
          if (u === 0) return f;
          throw new Dt("".concat(r.name, ".bulkDelete(): ").concat(u, " of ").concat(s, " operations failed"), y);
        });
      }, qe);
      function qe() {
      }
      function zn(n) {
        function r(y, v) {
          if (v) {
            for (var E = arguments.length, x = new Array(E - 1); --E; ) x[E - 1] = arguments[E];
            return s[y].subscribe.apply(null, x), n;
          }
          if (typeof y == "string") return s[y];
        }
        var s = {};
        r.addEventType = f;
        for (var c = 1, u = arguments.length; c < u; ++c) f(arguments[c]);
        return r;
        function f(y, v, E) {
          if (typeof y != "object") {
            var x;
            v = v || Z;
            var I = { subscribers: [], fire: E = E || g, subscribe: function(_) {
              I.subscribers.indexOf(_) === -1 && (I.subscribers.push(_), I.fire = v(I.fire, _));
            }, unsubscribe: function(_) {
              I.subscribers = I.subscribers.filter(function(O) {
                return O !== _;
              }), I.fire = I.subscribers.reduce(v, E);
            } };
            return s[y] = r[y] = I;
          }
          p(x = y).forEach(function(_) {
            var O = x[_];
            if (h(O)) f(_, x[_][0], x[_][1]);
            else {
              if (O !== "asap") throw new R.InvalidArgument("Invalid event config");
              var w = f(_, S, function() {
                for (var C = arguments.length, D = new Array(C); C--; ) D[C] = arguments[C];
                w.subscribers.forEach(function(A) {
                  je(function() {
                    A.apply(null, D);
                  });
                });
              });
            }
          });
        }
      }
      function Zn(n, r) {
        return le(r).from({ prototype: n }), r;
      }
      function qn(n, r) {
        return !(n.filter || n.algorithm || n.or) && (r ? n.justLimit : !n.replayFilter);
      }
      function Pi(n, r) {
        n.filter = Tn(n.filter, r);
      }
      function Ri(n, r, s) {
        var c = n.replayFilter;
        n.replayFilter = c ? function() {
          return Tn(c(), r());
        } : r, n.justLimit = s && !c;
      }
      function jr(n, r) {
        if (n.isPrimKey) return r.primaryKey;
        var s = r.getIndexByKeyPath(n.index);
        if (!s) throw new R.Schema("KeyPath " + n.index + " on object store " + r.name + " is not indexed");
        return s;
      }
      function ps(n, r, s) {
        var c = jr(n, r.schema);
        return r.openCursor({ trans: s, values: !n.keysOnly, reverse: n.dir === "prev", unique: !!n.unique, query: { index: c, range: n.range } });
      }
      function Lr(n, r, s, c) {
        var u = n.replayFilter ? Tn(n.filter, n.replayFilter()) : n.filter;
        if (n.or) {
          var f = {}, y = function(v, E, x) {
            var I, _;
            u && !u(E, x, function(O) {
              return E.stop(O);
            }, function(O) {
              return E.fail(O);
            }) || ((_ = "" + (I = E.primaryKey)) == "[object ArrayBuffer]" && (_ = "" + new Uint8Array(I)), j(f, _) || (f[_] = !0, r(v, E, x)));
          };
          return Promise.all([n.or._iterate(y, s), hs(ps(n, c, s), n.algorithm, y, !n.keysOnly && n.valueMapper)]);
        }
        return hs(ps(n, c, s), Tn(n.algorithm, u), r, !n.keysOnly && n.valueMapper);
      }
      function hs(n, r, s, c) {
        var u = Ue(c ? function(f, y, v) {
          return s(c(f), y, v);
        } : s);
        return n.then(function(f) {
          if (f) return f.start(function() {
            var y = function() {
              return f.continue();
            };
            r && !r(f, function(v) {
              return y = v;
            }, function(v) {
              f.stop(v), y = g;
            }, function(v) {
              f.fail(v), y = g;
            }) || u(f.value, f, function(v) {
              return y = v;
            }), y();
          });
        });
      }
      var er = (ms.prototype.execute = function(n) {
        var r = this["@@propmod"];
        if (r.add !== void 0) {
          var s = r.add;
          if (h(s)) return a(a([], h(n) ? n : [], !0), s).sort();
          if (typeof s == "number") return (Number(n) || 0) + s;
          if (typeof s == "bigint") try {
            return BigInt(n) + s;
          } catch {
            return BigInt(0) + s;
          }
          throw new TypeError("Invalid term ".concat(s));
        }
        if (r.remove !== void 0) {
          var c = r.remove;
          if (h(c)) return h(n) ? n.filter(function(u) {
            return !c.includes(u);
          }).sort() : [];
          if (typeof c == "number") return Number(n) - c;
          if (typeof c == "bigint") try {
            return BigInt(n) - c;
          } catch {
            return BigInt(0) - c;
          }
          throw new TypeError("Invalid subtrahend ".concat(c));
        }
        return s = (s = r.replacePrefix) === null || s === void 0 ? void 0 : s[0], s && typeof n == "string" && n.startsWith(s) ? r.replacePrefix[1] + n.substring(s.length) : n;
      }, ms);
      function ms(n) {
        this["@@propmod"] = n;
      }
      var Zc = (Fe.prototype._read = function(n, r) {
        var s = this._ctx;
        return s.error ? s.table._trans(null, We.bind(null, s.error)) : s.table._trans("readonly", n).then(r);
      }, Fe.prototype._write = function(n) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, We.bind(null, r.error)) : r.table._trans("readwrite", n, "locked");
      }, Fe.prototype._addAlgorithm = function(n) {
        var r = this._ctx;
        r.algorithm = Tn(r.algorithm, n);
      }, Fe.prototype._iterate = function(n, r) {
        return Lr(this._ctx, n, r, this._ctx.table.core);
      }, Fe.prototype.clone = function(n) {
        var r = Object.create(this.constructor.prototype), s = Object.create(this._ctx);
        return n && b(s, n), r._ctx = s, r;
      }, Fe.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Fe.prototype.each = function(n) {
        var r = this._ctx;
        return this._read(function(s) {
          return Lr(r, n, s, r.table.core);
        });
      }, Fe.prototype.count = function(n) {
        var r = this;
        return this._read(function(s) {
          var c = r._ctx, u = c.table.core;
          if (qn(c, !0)) return u.count({ trans: s, query: { index: jr(c, u.schema), range: c.range } }).then(function(y) {
            return Math.min(y, c.limit);
          });
          var f = 0;
          return Lr(c, function() {
            return ++f, !1;
          }, s, u).then(function() {
            return f;
          });
        }).then(n);
      }, Fe.prototype.sortBy = function(n, r) {
        var s = n.split(".").reverse(), c = s[0], u = s.length - 1;
        function f(E, x) {
          return x ? f(E[s[x]], x - 1) : E[c];
        }
        var y = this._ctx.dir === "next" ? 1 : -1;
        function v(E, x) {
          return Ie(f(E, u), f(x, u)) * y;
        }
        return this.toArray(function(E) {
          return E.sort(v);
        }).then(r);
      }, Fe.prototype.toArray = function(n) {
        var r = this;
        return this._read(function(s) {
          var c = r._ctx;
          if (c.dir === "next" && qn(c, !0) && 0 < c.limit) {
            var u = c.valueMapper, f = jr(c, c.table.core.schema);
            return c.table.core.query({ trans: s, limit: c.limit, values: !0, query: { index: f, range: c.range } }).then(function(v) {
              return v = v.result, u ? v.map(u) : v;
            });
          }
          var y = [];
          return Lr(c, function(v) {
            return y.push(v);
          }, s, c.table.core).then(function() {
            return y;
          });
        }, n);
      }, Fe.prototype.offset = function(n) {
        var r = this._ctx;
        return n <= 0 || (r.offset += n, qn(r) ? Ri(r, function() {
          var s = n;
          return function(c, u) {
            return s === 0 || (s === 1 ? --s : u(function() {
              c.advance(s), s = 0;
            }), !1);
          };
        }) : Ri(r, function() {
          var s = n;
          return function() {
            return --s < 0;
          };
        })), this;
      }, Fe.prototype.limit = function(n) {
        return this._ctx.limit = Math.min(this._ctx.limit, n), Ri(this._ctx, function() {
          var r = n;
          return function(s, c, u) {
            return --r <= 0 && c(u), 0 <= r;
          };
        }, !0), this;
      }, Fe.prototype.until = function(n, r) {
        return Pi(this._ctx, function(s, c, u) {
          return !n(s.value) || (c(u), r);
        }), this;
      }, Fe.prototype.first = function(n) {
        return this.limit(1).toArray(function(r) {
          return r[0];
        }).then(n);
      }, Fe.prototype.last = function(n) {
        return this.reverse().first(n);
      }, Fe.prototype.filter = function(n) {
        var r;
        return Pi(this._ctx, function(s) {
          return n(s.value);
        }), (r = this._ctx).isMatch = Tn(r.isMatch, n), this;
      }, Fe.prototype.and = function(n) {
        return this.filter(n);
      }, Fe.prototype.or = function(n) {
        return new this.db.WhereClause(this._ctx.table, n, this);
      }, Fe.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Fe.prototype.desc = function() {
        return this.reverse();
      }, Fe.prototype.eachKey = function(n) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(s, c) {
          n(c.key, c);
        });
      }, Fe.prototype.eachUniqueKey = function(n) {
        return this._ctx.unique = "unique", this.eachKey(n);
      }, Fe.prototype.eachPrimaryKey = function(n) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(s, c) {
          n(c.primaryKey, c);
        });
      }, Fe.prototype.keys = function(n) {
        var r = this._ctx;
        r.keysOnly = !r.isMatch;
        var s = [];
        return this.each(function(c, u) {
          s.push(u.key);
        }).then(function() {
          return s;
        }).then(n);
      }, Fe.prototype.primaryKeys = function(n) {
        var r = this._ctx;
        if (r.dir === "next" && qn(r, !0) && 0 < r.limit) return this._read(function(c) {
          var u = jr(r, r.table.core.schema);
          return r.table.core.query({ trans: c, values: !1, limit: r.limit, query: { index: u, range: r.range } });
        }).then(function(c) {
          return c.result;
        }).then(n);
        r.keysOnly = !r.isMatch;
        var s = [];
        return this.each(function(c, u) {
          s.push(u.primaryKey);
        }).then(function() {
          return s;
        }).then(n);
      }, Fe.prototype.uniqueKeys = function(n) {
        return this._ctx.unique = "unique", this.keys(n);
      }, Fe.prototype.firstKey = function(n) {
        return this.limit(1).keys(function(r) {
          return r[0];
        }).then(n);
      }, Fe.prototype.lastKey = function(n) {
        return this.reverse().firstKey(n);
      }, Fe.prototype.distinct = function() {
        var n = this._ctx, n = n.index && n.table.schema.idxByName[n.index];
        if (!n || !n.multi) return this;
        var r = {};
        return Pi(this._ctx, function(u) {
          var c = u.primaryKey.toString(), u = j(r, c);
          return r[c] = !0, !u;
        }), this;
      }, Fe.prototype.modify = function(n) {
        var r = this, s = this._ctx;
        return this._write(function(c) {
          var u, f, y;
          y = typeof n == "function" ? n : (u = p(n), f = u.length, function(P) {
            for (var $ = !1, k = 0; k < f; ++k) {
              var B = u[k], W = n[B], z = Ke(P, B);
              W instanceof er ? (xe(P, B, W.execute(z)), $ = !0) : z !== W && (xe(P, B, W), $ = !0);
            }
            return $;
          });
          var v = s.table.core, _ = v.schema.primaryKey, E = _.outbound, x = _.extractKey, I = 200, _ = r.db._options.modifyChunkSize;
          _ && (I = typeof _ == "object" ? _[v.name] || _["*"] || 200 : _);
          function O(P, B) {
            var k = B.failures, B = B.numFailures;
            C += P - B;
            for (var W = 0, z = p(k); W < z.length; W++) {
              var Y = z[W];
              w.push(k[Y]);
            }
          }
          var w = [], C = 0, D = [], A = n === ys;
          return r.clone().primaryKeys().then(function(P) {
            function $(B) {
              var W = Math.min(I, P.length - B), z = P.slice(B, B + W);
              return (A ? Promise.resolve([]) : v.getMany({ trans: c, keys: z, cache: "immutable" })).then(function(Y) {
                var Q = [], ne = [], te = E ? [] : null, ie = A ? z : [];
                if (!A) for (var Se = 0; Se < W; ++Se) {
                  var Ne = Y[Se], ve = { value: Je(Ne), primKey: P[B + Se] };
                  y.call(ve, ve.value, ve) !== !1 && (ve.value == null ? ie.push(P[B + Se]) : E || Ie(x(Ne), x(ve.value)) === 0 ? (ne.push(ve.value), E && te.push(P[B + Se])) : (ie.push(P[B + Se]), Q.push(ve.value)));
                }
                return Promise.resolve(0 < Q.length && v.mutate({ trans: c, type: "add", values: Q }).then(function(He) {
                  for (var ge in He.failures) ie.splice(parseInt(ge), 1);
                  O(Q.length, He);
                })).then(function() {
                  return (0 < ne.length || k && typeof n == "object") && v.mutate({ trans: c, type: "put", keys: te, values: ne, criteria: k, changeSpec: typeof n != "function" && n, isAdditionalChunk: 0 < B }).then(function(He) {
                    return O(ne.length, He);
                  });
                }).then(function() {
                  return (0 < ie.length || k && A) && v.mutate({ trans: c, type: "delete", keys: ie, criteria: k, isAdditionalChunk: 0 < B }).then(function(He) {
                    return Mr(s.table, ie, He);
                  }).then(function(He) {
                    return O(ie.length, He);
                  });
                }).then(function() {
                  return P.length > B + W && $(B + I);
                });
              });
            }
            var k = qn(s) && s.limit === 1 / 0 && (typeof n != "function" || A) && { index: s.index, range: s.range };
            return $(0).then(function() {
              if (0 < w.length) throw new Xt("Error modifying one or more objects", w, C, D);
              return P.length;
            });
          });
        });
      }, Fe.prototype.delete = function() {
        var n = this._ctx, r = n.range;
        return !qn(n) || n.table.schema.yProps || !n.isPrimKey && r.type !== 3 ? this.modify(ys) : this._write(function(s) {
          var c = n.table.core.schema.primaryKey, u = r;
          return n.table.core.count({ trans: s, query: { index: c, range: u } }).then(function(f) {
            return n.table.core.mutate({ trans: s, type: "deleteRange", range: u }).then(function(E) {
              var v = E.failures, E = E.numFailures;
              if (E) throw new Xt("Could not delete some values", Object.keys(v).map(function(x) {
                return v[x];
              }), f - E);
              return f - E;
            });
          });
        });
      }, Fe);
      function Fe() {
      }
      var ys = function(n, r) {
        return r.value = null;
      };
      function eu(n, r) {
        return n < r ? -1 : n === r ? 0 : 1;
      }
      function tu(n, r) {
        return r < n ? -1 : n === r ? 0 : 1;
      }
      function Pt(n, r, s) {
        return n = n instanceof vs ? new n.Collection(n) : n, n._ctx.error = new (s || TypeError)(r), n;
      }
      function Kn(n) {
        return new n.Collection(n, function() {
          return gs("");
        }).limit(0);
      }
      function $r(n, r, s, c) {
        var u, f, y, v, E, x, I, _ = s.length;
        if (!s.every(function(C) {
          return typeof C == "string";
        })) return Pt(n, as);
        function O(C) {
          u = C === "next" ? function(A) {
            return A.toUpperCase();
          } : function(A) {
            return A.toLowerCase();
          }, f = C === "next" ? function(A) {
            return A.toLowerCase();
          } : function(A) {
            return A.toUpperCase();
          }, y = C === "next" ? eu : tu;
          var D = s.map(function(A) {
            return { lower: f(A), upper: u(A) };
          }).sort(function(A, P) {
            return y(A.lower, P.lower);
          });
          v = D.map(function(A) {
            return A.upper;
          }), E = D.map(function(A) {
            return A.lower;
          }), I = (x = C) === "next" ? "" : c;
        }
        O("next"), n = new n.Collection(n, function() {
          return ln(v[0], E[_ - 1] + c);
        }), n._ondirectionchange = function(C) {
          O(C);
        };
        var w = 0;
        return n._addAlgorithm(function(C, D, A) {
          var P = C.key;
          if (typeof P != "string") return !1;
          var $ = f(P);
          if (r($, E, w)) return !0;
          for (var k = null, B = w; B < _; ++B) {
            var W = function(z, Y, Q, ne, te, ie) {
              for (var Se = Math.min(z.length, ne.length), Ne = -1, ve = 0; ve < Se; ++ve) {
                var He = Y[ve];
                if (He !== ne[ve]) return te(z[ve], Q[ve]) < 0 ? z.substr(0, ve) + Q[ve] + Q.substr(ve + 1) : te(z[ve], ne[ve]) < 0 ? z.substr(0, ve) + ne[ve] + Q.substr(ve + 1) : 0 <= Ne ? z.substr(0, Ne) + Y[Ne] + Q.substr(Ne + 1) : null;
                te(z[ve], He) < 0 && (Ne = ve);
              }
              return Se < ne.length && ie === "next" ? z + Q.substr(z.length) : Se < z.length && ie === "prev" ? z.substr(0, Q.length) : Ne < 0 ? null : z.substr(0, Ne) + ne[Ne] + Q.substr(Ne + 1);
            }(P, $, v[B], E[B], y, x);
            W === null && k === null ? w = B + 1 : (k === null || 0 < y(k, W)) && (k = W);
          }
          return D(k !== null ? function() {
            C.continue(k + I);
          } : A), !1;
        }), n;
      }
      function ln(n, r, s, c) {
        return { type: 2, lower: n, upper: r, lowerOpen: s, upperOpen: c };
      }
      function gs(n) {
        return { type: 1, lower: n, upper: n };
      }
      var vs = (Object.defineProperty(ut.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), ut.prototype.between = function(n, r, s, c) {
        s = s !== !1, c = c === !0;
        try {
          return 0 < this._cmp(n, r) || this._cmp(n, r) === 0 && (s || c) && (!s || !c) ? Kn(this) : new this.Collection(this, function() {
            return ln(n, r, !s, !c);
          });
        } catch {
          return Pt(this, Qt);
        }
      }, ut.prototype.equals = function(n) {
        return n == null ? Pt(this, Qt) : new this.Collection(this, function() {
          return gs(n);
        });
      }, ut.prototype.above = function(n) {
        return n == null ? Pt(this, Qt) : new this.Collection(this, function() {
          return ln(n, void 0, !0);
        });
      }, ut.prototype.aboveOrEqual = function(n) {
        return n == null ? Pt(this, Qt) : new this.Collection(this, function() {
          return ln(n, void 0, !1);
        });
      }, ut.prototype.below = function(n) {
        return n == null ? Pt(this, Qt) : new this.Collection(this, function() {
          return ln(void 0, n, !1, !0);
        });
      }, ut.prototype.belowOrEqual = function(n) {
        return n == null ? Pt(this, Qt) : new this.Collection(this, function() {
          return ln(void 0, n);
        });
      }, ut.prototype.startsWith = function(n) {
        return typeof n != "string" ? Pt(this, as) : this.between(n, n + xn, !0, !0);
      }, ut.prototype.startsWithIgnoreCase = function(n) {
        return n === "" ? this.startsWith(n) : $r(this, function(r, s) {
          return r.indexOf(s[0]) === 0;
        }, [n], xn);
      }, ut.prototype.equalsIgnoreCase = function(n) {
        return $r(this, function(r, s) {
          return r === s[0];
        }, [n], "");
      }, ut.prototype.anyOfIgnoreCase = function() {
        var n = ot.apply(ze, arguments);
        return n.length === 0 ? Kn(this) : $r(this, function(r, s) {
          return s.indexOf(r) !== -1;
        }, n, "");
      }, ut.prototype.startsWithAnyOfIgnoreCase = function() {
        var n = ot.apply(ze, arguments);
        return n.length === 0 ? Kn(this) : $r(this, function(r, s) {
          return s.some(function(c) {
            return r.indexOf(c) === 0;
          });
        }, n, xn);
      }, ut.prototype.anyOf = function() {
        var n = this, r = ot.apply(ze, arguments), s = this._cmp;
        try {
          r.sort(s);
        } catch {
          return Pt(this, Qt);
        }
        if (r.length === 0) return Kn(this);
        var c = new this.Collection(this, function() {
          return ln(r[0], r[r.length - 1]);
        });
        c._ondirectionchange = function(f) {
          s = f === "next" ? n._ascending : n._descending, r.sort(s);
        };
        var u = 0;
        return c._addAlgorithm(function(f, y, v) {
          for (var E = f.key; 0 < s(E, r[u]); ) if (++u === r.length) return y(v), !1;
          return s(E, r[u]) === 0 || (y(function() {
            f.continue(r[u]);
          }), !1);
        }), c;
      }, ut.prototype.notEqual = function(n) {
        return this.inAnyRange([[-1 / 0, n], [n, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, ut.prototype.noneOf = function() {
        var n = ot.apply(ze, arguments);
        if (n.length === 0) return new this.Collection(this);
        try {
          n.sort(this._ascending);
        } catch {
          return Pt(this, Qt);
        }
        var r = n.reduce(function(s, c) {
          return s ? s.concat([[s[s.length - 1][1], c]]) : [[-1 / 0, c]];
        }, null);
        return r.push([n[n.length - 1], this.db._maxKey]), this.inAnyRange(r, { includeLowers: !1, includeUppers: !1 });
      }, ut.prototype.inAnyRange = function(P, r) {
        var s = this, c = this._cmp, u = this._ascending, f = this._descending, y = this._min, v = this._max;
        if (P.length === 0) return Kn(this);
        if (!P.every(function($) {
          return $[0] !== void 0 && $[1] !== void 0 && u($[0], $[1]) <= 0;
        })) return Pt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", R.InvalidArgument);
        var E = !r || r.includeLowers !== !1, x = r && r.includeUppers === !0, I, _ = u;
        function O($, k) {
          return _($[0], k[0]);
        }
        try {
          (I = P.reduce(function($, k) {
            for (var B = 0, W = $.length; B < W; ++B) {
              var z = $[B];
              if (c(k[0], z[1]) < 0 && 0 < c(k[1], z[0])) {
                z[0] = y(z[0], k[0]), z[1] = v(z[1], k[1]);
                break;
              }
            }
            return B === W && $.push(k), $;
          }, [])).sort(O);
        } catch {
          return Pt(this, Qt);
        }
        var w = 0, C = x ? function($) {
          return 0 < u($, I[w][1]);
        } : function($) {
          return 0 <= u($, I[w][1]);
        }, D = E ? function($) {
          return 0 < f($, I[w][0]);
        } : function($) {
          return 0 <= f($, I[w][0]);
        }, A = C, P = new this.Collection(this, function() {
          return ln(I[0][0], I[I.length - 1][1], !E, !x);
        });
        return P._ondirectionchange = function($) {
          _ = $ === "next" ? (A = C, u) : (A = D, f), I.sort(O);
        }, P._addAlgorithm(function($, k, B) {
          for (var W, z = $.key; A(z); ) if (++w === I.length) return k(B), !1;
          return !C(W = z) && !D(W) || (s._cmp(z, I[w][1]) === 0 || s._cmp(z, I[w][0]) === 0 || k(function() {
            _ === u ? $.continue(I[w][0]) : $.continue(I[w][1]);
          }), !1);
        }), P;
      }, ut.prototype.startsWithAnyOf = function() {
        var n = ot.apply(ze, arguments);
        return n.every(function(r) {
          return typeof r == "string";
        }) ? n.length === 0 ? Kn(this) : this.inAnyRange(n.map(function(r) {
          return [r, r + xn];
        })) : Pt(this, "startsWithAnyOf() only works with strings");
      }, ut);
      function ut() {
      }
      function qt(n) {
        return Ue(function(r) {
          return tr(r), n(r.target.error), !1;
        });
      }
      function tr(n) {
        n.stopPropagation && n.stopPropagation(), n.preventDefault && n.preventDefault();
      }
      var nr = "storagemutated", Fi = "x-storagemutated-1", fn = zn(null, nr), nu = (Kt.prototype._lock = function() {
        return oe(!se.global), ++this._reculock, this._reculock !== 1 || se.global || (se.lockOwnerFor = this), this;
      }, Kt.prototype._unlock = function() {
        if (oe(!se.global), --this._reculock == 0) for (se.global || (se.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var n = this._blockedFuncs.shift();
          try {
            wn(n[1], n[0]);
          } catch {
          }
        }
        return this;
      }, Kt.prototype._locked = function() {
        return this._reculock && se.lockOwnerFor !== this;
      }, Kt.prototype.create = function(n) {
        var r = this;
        if (!this.mode) return this;
        var s = this.db.idbdb, c = this.db._state.dbOpenError;
        if (oe(!this.idbtrans), !n && !s) switch (c && c.name) {
          case "DatabaseClosedError":
            throw new R.DatabaseClosed(c);
          case "MissingAPIError":
            throw new R.MissingAPI(c.message, c);
          default:
            throw new R.OpenFailed(c);
        }
        if (!this.active) throw new R.TransactionInactive();
        return oe(this._completion._state === null), (n = this.idbtrans = n || (this.db.core || s).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Ue(function(u) {
          tr(u), r._reject(n.error);
        }), n.onabort = Ue(function(u) {
          tr(u), r.active && r._reject(new R.Abort(n.error)), r.active = !1, r.on("abort").fire(u);
        }), n.oncomplete = Ue(function() {
          r.active = !1, r._resolve(), "mutatedParts" in n && fn.storagemutated.fire(n.mutatedParts);
        }), this;
      }, Kt.prototype._promise = function(n, r, s) {
        var c = this;
        if (n === "readwrite" && this.mode !== "readwrite") return We(new R.ReadOnly("Transaction is readonly"));
        if (!this.active) return We(new R.TransactionInactive());
        if (this._locked()) return new re(function(f, y) {
          c._blockedFuncs.push([function() {
            c._promise(n, r, s).then(f, y);
          }, se]);
        });
        if (s) return an(function() {
          var f = new re(function(y, v) {
            c._lock();
            var E = r(y, v, c);
            E && E.then && E.then(y, v);
          });
          return f.finally(function() {
            return c._unlock();
          }), f._lib = !0, f;
        });
        var u = new re(function(f, y) {
          var v = r(f, y, c);
          v && v.then && v.then(f, y);
        });
        return u._lib = !0, u;
      }, Kt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Kt.prototype.waitFor = function(n) {
        var r, s = this._root(), c = re.resolve(n);
        s._waitingFor ? s._waitingFor = s._waitingFor.then(function() {
          return c;
        }) : (s._waitingFor = c, s._waitingQueue = [], r = s.idbtrans.objectStore(s.storeNames[0]), function f() {
          for (++s._spinCount; s._waitingQueue.length; ) s._waitingQueue.shift()();
          s._waitingFor && (r.get(-1 / 0).onsuccess = f);
        }());
        var u = s._waitingFor;
        return new re(function(f, y) {
          c.then(function(v) {
            return s._waitingQueue.push(Ue(f.bind(null, v)));
          }, function(v) {
            return s._waitingQueue.push(Ue(y.bind(null, v)));
          }).finally(function() {
            s._waitingFor === u && (s._waitingFor = null);
          });
        });
      }, Kt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new R.Abort()));
      }, Kt.prototype.table = function(n) {
        var r = this._memoizedTables || (this._memoizedTables = {});
        if (j(r, n)) return r[n];
        var s = this.schema[n];
        if (!s) throw new R.NotFound("Table " + n + " not part of transaction");
        return s = new this.db.Table(n, s, this), s.core = this.db.core.table(n), r[n] = s;
      }, Kt);
      function Kt() {
      }
      function Mi(n, r, s, c, u, f, y, v) {
        return { name: n, keyPath: r, unique: s, multi: c, auto: u, compound: f, src: (s && !y ? "&" : "") + (c ? "*" : "") + (u ? "++" : "") + bs(r), type: v };
      }
      function bs(n) {
        return typeof n == "string" ? n : n ? "[" + [].join.call(n, "+") + "]" : "";
      }
      function ji(n, r, s) {
        return { name: n, primKey: r, indexes: s, mappedClass: null, idxByName: (c = function(u) {
          return [u.name, u];
        }, s.reduce(function(u, f, y) {
          return y = c(f, y), y && (u[y[0]] = y[1]), u;
        }, {})) };
        var c;
      }
      var rr = function(n) {
        try {
          return n.only([[]]), rr = function() {
            return [[]];
          }, [[]];
        } catch {
          return rr = function() {
            return xn;
          }, xn;
        }
      };
      function Li(n) {
        return n == null ? function() {
        } : typeof n == "string" ? (r = n).split(".").length === 1 ? function(s) {
          return s[r];
        } : function(s) {
          return Ke(s, r);
        } : function(s) {
          return Ke(s, n);
        };
        var r;
      }
      function _s(n) {
        return [].slice.call(n);
      }
      var ru = 0;
      function ir(n) {
        return n == null ? ":id" : typeof n == "string" ? n : "[".concat(n.join("+"), "]");
      }
      function iu(n, r, E) {
        function c(A) {
          if (A.type === 3) return null;
          if (A.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var w = A.lower, C = A.upper, D = A.lowerOpen, A = A.upperOpen;
          return w === void 0 ? C === void 0 ? null : r.upperBound(C, !!A) : C === void 0 ? r.lowerBound(w, !!D) : r.bound(w, C, !!D, !!A);
        }
        function u(O) {
          var w, C = O.name;
          return { name: C, schema: O, mutate: function(D) {
            var A = D.trans, P = D.type, $ = D.keys, k = D.values, B = D.range;
            return new Promise(function(W, z) {
              W = Ue(W);
              var Y = A.objectStore(C), Q = Y.keyPath == null, ne = P === "put" || P === "add";
              if (!ne && P !== "delete" && P !== "deleteRange") throw new Error("Invalid operation type: " + P);
              var te, ie = ($ || k || { length: 1 }).length;
              if ($ && k && $.length !== k.length) throw new Error("Given keys array must have same length as given values array.");
              if (ie === 0) return W({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function Se(xt) {
                ++He, tr(xt);
              }
              var Ne = [], ve = [], He = 0;
              if (P === "deleteRange") {
                if (B.type === 4) return W({ numFailures: He, failures: ve, results: [], lastResult: void 0 });
                B.type === 3 ? Ne.push(te = Y.clear()) : Ne.push(te = Y.delete(c(B)));
              } else {
                var Q = ne ? Q ? [k, $] : [k, null] : [$, null], ge = Q[0], mt = Q[1];
                if (ne) for (var yt = 0; yt < ie; ++yt) Ne.push(te = mt && mt[yt] !== void 0 ? Y[P](ge[yt], mt[yt]) : Y[P](ge[yt])), te.onerror = Se;
                else for (yt = 0; yt < ie; ++yt) Ne.push(te = Y[P](ge[yt])), te.onerror = Se;
              }
              function Qr(xt) {
                xt = xt.target.result, Ne.forEach(function(An, to) {
                  return An.error != null && (ve[to] = An.error);
                }), W({ numFailures: He, failures: ve, results: P === "delete" ? $ : Ne.map(function(An) {
                  return An.result;
                }), lastResult: xt });
              }
              te.onerror = function(xt) {
                Se(xt), Qr(xt);
              }, te.onsuccess = Qr;
            });
          }, getMany: function(D) {
            var A = D.trans, P = D.keys;
            return new Promise(function($, k) {
              $ = Ue($);
              for (var B, W = A.objectStore(C), z = P.length, Y = new Array(z), Q = 0, ne = 0, te = function(Ne) {
                Ne = Ne.target, Y[Ne._pos] = Ne.result, ++ne === Q && $(Y);
              }, ie = qt(k), Se = 0; Se < z; ++Se) P[Se] != null && ((B = W.get(P[Se]))._pos = Se, B.onsuccess = te, B.onerror = ie, ++Q);
              Q === 0 && $(Y);
            });
          }, get: function(D) {
            var A = D.trans, P = D.key;
            return new Promise(function($, k) {
              $ = Ue($);
              var B = A.objectStore(C).get(P);
              B.onsuccess = function(W) {
                return $(W.target.result);
              }, B.onerror = qt(k);
            });
          }, query: (w = x, function(D) {
            return new Promise(function(A, P) {
              A = Ue(A);
              var $, k, B, Q = D.trans, W = D.values, z = D.limit, te = D.query, Y = z === 1 / 0 ? void 0 : z, ne = te.index, te = te.range, Q = Q.objectStore(C), ne = ne.isPrimaryKey ? Q : Q.index(ne.name), te = c(te);
              if (z === 0) return A({ result: [] });
              w ? ((Y = W ? ne.getAll(te, Y) : ne.getAllKeys(te, Y)).onsuccess = function(ie) {
                return A({ result: ie.target.result });
              }, Y.onerror = qt(P)) : ($ = 0, k = !W && "openKeyCursor" in ne ? ne.openKeyCursor(te) : ne.openCursor(te), B = [], k.onsuccess = function(ie) {
                var Se = k.result;
                return Se ? (B.push(W ? Se.value : Se.primaryKey), ++$ === z ? A({ result: B }) : void Se.continue()) : A({ result: B });
              }, k.onerror = qt(P));
            });
          }), openCursor: function(D) {
            var A = D.trans, P = D.values, $ = D.query, k = D.reverse, B = D.unique;
            return new Promise(function(W, z) {
              W = Ue(W);
              var ne = $.index, Y = $.range, Q = A.objectStore(C), Q = ne.isPrimaryKey ? Q : Q.index(ne.name), ne = k ? B ? "prevunique" : "prev" : B ? "nextunique" : "next", te = !P && "openKeyCursor" in Q ? Q.openKeyCursor(c(Y), ne) : Q.openCursor(c(Y), ne);
              te.onerror = qt(z), te.onsuccess = Ue(function(ie) {
                var Se, Ne, ve, He, ge = te.result;
                ge ? (ge.___id = ++ru, ge.done = !1, Se = ge.continue.bind(ge), Ne = (Ne = ge.continuePrimaryKey) && Ne.bind(ge), ve = ge.advance.bind(ge), He = function() {
                  throw new Error("Cursor not stopped");
                }, ge.trans = A, ge.stop = ge.continue = ge.continuePrimaryKey = ge.advance = function() {
                  throw new Error("Cursor not started");
                }, ge.fail = Ue(z), ge.next = function() {
                  var mt = this, yt = 1;
                  return this.start(function() {
                    return yt-- ? mt.continue() : mt.stop();
                  }).then(function() {
                    return mt;
                  });
                }, ge.start = function(mt) {
                  function yt() {
                    if (te.result) try {
                      mt();
                    } catch (xt) {
                      ge.fail(xt);
                    }
                    else ge.done = !0, ge.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ge.stop();
                  }
                  var Qr = new Promise(function(xt, An) {
                    xt = Ue(xt), te.onerror = qt(An), ge.fail = An, ge.stop = function(to) {
                      ge.stop = ge.continue = ge.continuePrimaryKey = ge.advance = He, xt(to);
                    };
                  });
                  return te.onsuccess = Ue(function(xt) {
                    te.onsuccess = yt, yt();
                  }), ge.continue = Se, ge.continuePrimaryKey = Ne, ge.advance = ve, yt(), Qr;
                }, W(ge)) : W(null);
              }, z);
            });
          }, count: function(D) {
            var A = D.query, P = D.trans, $ = A.index, k = A.range;
            return new Promise(function(B, W) {
              var z = P.objectStore(C), Y = $.isPrimaryKey ? z : z.index($.name), z = c(k), Y = z ? Y.count(z) : Y.count();
              Y.onsuccess = Ue(function(Q) {
                return B(Q.target.result);
              }), Y.onerror = qt(W);
            });
          } };
        }
        var f, y, v, I = (y = E, v = _s((f = n).objectStoreNames), { schema: { name: f.name, tables: v.map(function(O) {
          return y.objectStore(O);
        }).map(function(O) {
          var w = O.keyPath, A = O.autoIncrement, C = h(w), D = {}, A = { name: O.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: w == null, compound: C, keyPath: w, autoIncrement: A, unique: !0, extractKey: Li(w) }, indexes: _s(O.indexNames).map(function(P) {
            return O.index(P);
          }).map(function(B) {
            var $ = B.name, k = B.unique, W = B.multiEntry, B = B.keyPath, W = { name: $, compound: h(B), keyPath: B, unique: k, multiEntry: W, extractKey: Li(B) };
            return D[ir(B)] = W;
          }), getIndexByKeyPath: function(P) {
            return D[ir(P)];
          } };
          return D[":id"] = A.primaryKey, w != null && (D[ir(w)] = A.primaryKey), A;
        }) }, hasGetAll: 0 < v.length && "getAll" in y.objectStore(v[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), E = I.schema, x = I.hasGetAll, I = E.tables.map(u), _ = {};
        return I.forEach(function(O) {
          return _[O.name] = O;
        }), { stack: "dbcore", transaction: n.transaction.bind(n), table: function(O) {
          if (!_[O]) throw new Error("Table '".concat(O, "' not found"));
          return _[O];
        }, MIN_KEY: -1 / 0, MAX_KEY: rr(r), schema: E };
      }
      function ou(n, r, s, c) {
        var u = s.IDBKeyRange;
        return s.indexedDB, { dbcore: (c = iu(r, u, c), n.dbcore.reduce(function(f, y) {
          return y = y.create, o(o({}, f), y(f));
        }, c)) };
      }
      function kr(n, c) {
        var s = c.db, c = ou(n._middlewares, s, n._deps, c);
        n.core = c.dbcore, n.tables.forEach(function(u) {
          var f = u.name;
          n.core.schema.tables.some(function(y) {
            return y.name === f;
          }) && (u.core = n.core.table(f), n[f] instanceof n.Table && (n[f].core = u.core));
        });
      }
      function Br(n, r, s, c) {
        s.forEach(function(u) {
          var f = c[u];
          r.forEach(function(y) {
            var v = function E(x, I) {
              return ye(x, I) || (x = M(x)) && E(x, I);
            }(y, u);
            (!v || "value" in v && v.value === void 0) && (y === n.Transaction.prototype || y instanceof n.Transaction ? ae(y, u, { get: function() {
              return this.table(u);
            }, set: function(E) {
              H(this, u, { value: E, writable: !0, configurable: !0, enumerable: !0 });
            } }) : y[u] = new n.Table(u, f));
          });
        });
      }
      function $i(n, r) {
        r.forEach(function(s) {
          for (var c in s) s[c] instanceof n.Table && delete s[c];
        });
      }
      function su(n, r) {
        return n._cfg.version - r._cfg.version;
      }
      function au(n, r, s, c) {
        var u = n._dbSchema;
        s.objectStoreNames.contains("$meta") && !u.$meta && (u.$meta = ji("$meta", Es("")[0], []), n._storeNames.push("$meta"));
        var f = n._createTransaction("readwrite", n._storeNames, u);
        f.create(s), f._completion.catch(c);
        var y = f._reject.bind(f), v = se.transless || se;
        an(function() {
          return se.trans = f, se.transless = v, r !== 0 ? (kr(n, s), x = r, ((E = f).storeNames.includes("$meta") ? E.table("$meta").get("version").then(function(I) {
            return I ?? x;
          }) : re.resolve(x)).then(function(I) {
            return O = I, w = f, C = s, D = [], I = (_ = n)._versions, A = _._dbSchema = Kr(0, _.idbdb, C), (I = I.filter(function(P) {
              return P._cfg.version >= O;
            })).length !== 0 ? (I.forEach(function(P) {
              D.push(function() {
                var $ = A, k = P._cfg.dbschema;
                Vr(_, $, C), Vr(_, k, C), A = _._dbSchema = k;
                var B = ki($, k);
                B.add.forEach(function(ne) {
                  Bi(C, ne[0], ne[1].primKey, ne[1].indexes);
                }), B.change.forEach(function(ne) {
                  if (ne.recreate) throw new R.Upgrade("Not yet support for changing primary key");
                  var te = C.objectStore(ne.name);
                  ne.add.forEach(function(ie) {
                    return qr(te, ie);
                  }), ne.change.forEach(function(ie) {
                    te.deleteIndex(ie.name), qr(te, ie);
                  }), ne.del.forEach(function(ie) {
                    return te.deleteIndex(ie);
                  });
                });
                var W = P._cfg.contentUpgrade;
                if (W && P._cfg.version > O) {
                  kr(_, C), w._memoizedTables = {};
                  var z = tt(k);
                  B.del.forEach(function(ne) {
                    z[ne] = $[ne];
                  }), $i(_, [_.Transaction.prototype]), Br(_, [_.Transaction.prototype], p(z), z), w.schema = z;
                  var Y, Q = nt(W);
                  return Q && kn(), B = re.follow(function() {
                    var ne;
                    (Y = W(w)) && Q && (ne = cn.bind(null, null), Y.then(ne, ne));
                  }), Y && typeof Y.then == "function" ? re.resolve(Y) : B.then(function() {
                    return Y;
                  });
                }
              }), D.push(function($) {
                var k, B, W = P._cfg.dbschema;
                k = W, B = $, [].slice.call(B.db.objectStoreNames).forEach(function(z) {
                  return k[z] == null && B.db.deleteObjectStore(z);
                }), $i(_, [_.Transaction.prototype]), Br(_, [_.Transaction.prototype], _._storeNames, _._dbSchema), w.schema = _._dbSchema;
              }), D.push(function($) {
                _.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(_.idbdb.version / 10) === P._cfg.version ? (_.idbdb.deleteObjectStore("$meta"), delete _._dbSchema.$meta, _._storeNames = _._storeNames.filter(function(k) {
                  return k !== "$meta";
                })) : $.objectStore("$meta").put(P._cfg.version, "version"));
              });
            }), function P() {
              return D.length ? re.resolve(D.shift()(w.idbtrans)).then(P) : re.resolve();
            }().then(function() {
              Ss(A, C);
            })) : re.resolve();
            var _, O, w, C, D, A;
          }).catch(y)) : (p(u).forEach(function(I) {
            Bi(s, I, u[I].primKey, u[I].indexes);
          }), kr(n, s), void re.follow(function() {
            return n.on.populate.fire(f);
          }).catch(y));
          var E, x;
        });
      }
      function cu(n, r) {
        Ss(n._dbSchema, r), r.db.version % 10 != 0 || r.objectStoreNames.contains("$meta") || r.db.createObjectStore("$meta").add(Math.ceil(r.db.version / 10 - 1), "version");
        var s = Kr(0, n.idbdb, r);
        Vr(n, n._dbSchema, r);
        for (var c = 0, u = ki(s, n._dbSchema).change; c < u.length; c++) {
          var f = function(y) {
            if (y.change.length || y.recreate) return console.warn("Unable to patch indexes of table ".concat(y.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var v = r.objectStore(y.name);
            y.add.forEach(function(E) {
              G && console.debug("Dexie upgrade patch: Creating missing index ".concat(y.name, ".").concat(E.src)), qr(v, E);
            });
          }(u[c]);
          if (typeof f == "object") return f.value;
        }
      }
      function ki(n, r) {
        var s, c = { del: [], add: [], change: [] };
        for (s in n) r[s] || c.del.push(s);
        for (s in r) {
          var u = n[s], f = r[s];
          if (u) {
            var y = { name: s, def: f, recreate: !1, del: [], add: [], change: [] };
            if ("" + (u.primKey.keyPath || "") != "" + (f.primKey.keyPath || "") || u.primKey.auto !== f.primKey.auto) y.recreate = !0, c.change.push(y);
            else {
              var v = u.idxByName, E = f.idxByName, x = void 0;
              for (x in v) E[x] || y.del.push(x);
              for (x in E) {
                var I = v[x], _ = E[x];
                I ? I.src !== _.src && y.change.push(_) : y.add.push(_);
              }
              (0 < y.del.length || 0 < y.add.length || 0 < y.change.length) && c.change.push(y);
            }
          } else c.add.push([s, f]);
        }
        return c;
      }
      function Bi(n, r, s, c) {
        var u = n.db.createObjectStore(r, s.keyPath ? { keyPath: s.keyPath, autoIncrement: s.auto } : { autoIncrement: s.auto });
        return c.forEach(function(f) {
          return qr(u, f);
        }), u;
      }
      function Ss(n, r) {
        p(n).forEach(function(s) {
          r.db.objectStoreNames.contains(s) || (G && console.debug("Dexie: Creating missing table", s), Bi(r, s, n[s].primKey, n[s].indexes));
        });
      }
      function qr(n, r) {
        n.createIndex(r.name, r.keyPath, { unique: r.unique, multiEntry: r.multi });
      }
      function Kr(n, r, s) {
        var c = {};
        return be(r.objectStoreNames, 0).forEach(function(u) {
          for (var f = s.objectStore(u), y = Mi(bs(x = f.keyPath), x || "", !0, !1, !!f.autoIncrement, x && typeof x != "string", !0), v = [], E = 0; E < f.indexNames.length; ++E) {
            var I = f.index(f.indexNames[E]), x = I.keyPath, I = Mi(I.name, x, !!I.unique, !!I.multiEntry, !1, x && typeof x != "string", !1);
            v.push(I);
          }
          c[u] = ji(u, y, v);
        }), c;
      }
      function Vr(n, r, s) {
        for (var c = s.db.objectStoreNames, u = 0; u < c.length; ++u) {
          var f = c[u], y = s.objectStore(f);
          n._hasGetAll = "getAll" in y;
          for (var v = 0; v < y.indexNames.length; ++v) {
            var E = y.indexNames[v], x = y.index(E).keyPath, I = typeof x == "string" ? x : "[" + be(x).join("+") + "]";
            !r[f] || (x = r[f].idxByName[I]) && (x.name = E, delete r[f].idxByName[I], r[f].idxByName[E] = x);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && l.WorkerGlobalScope && l instanceof l.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (n._hasGetAll = !1);
      }
      function Es(n) {
        return n.split(",").map(function(r, s) {
          var f = r.split(":"), c = (u = f[1]) === null || u === void 0 ? void 0 : u.trim(), u = (r = f[0].trim()).replace(/([&*]|\+\+)/g, ""), f = /^\[/.test(u) ? u.match(/^\[(.*)\]$/)[1].split("+") : u;
          return Mi(u, f || null, /\&/.test(r), /\*/.test(r), /\+\+/.test(r), h(f), s === 0, c);
        });
      }
      var uu = (Vn.prototype._createTableSchema = ji, Vn.prototype._parseIndexSyntax = Es, Vn.prototype._parseStoresSpec = function(n, r) {
        var s = this;
        p(n).forEach(function(c) {
          if (n[c] !== null) {
            var u = s._parseIndexSyntax(n[c]), f = u.shift();
            if (!f) throw new R.Schema("Invalid schema for table " + c + ": " + n[c]);
            if (f.unique = !0, f.multi) throw new R.Schema("Primary key cannot be multiEntry*");
            u.forEach(function(y) {
              if (y.auto) throw new R.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!y.keyPath) throw new R.Schema("Index must have a name and cannot be an empty string");
            }), u = s._createTableSchema(c, f, u), r[c] = u;
          }
        });
      }, Vn.prototype.stores = function(s) {
        var r = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? b(this._cfg.storesSource, s) : s;
        var s = r._versions, c = {}, u = {};
        return s.forEach(function(f) {
          b(c, f._cfg.storesSource), u = f._cfg.dbschema = {}, f._parseStoresSpec(c, u);
        }), r._dbSchema = u, $i(r, [r._allTables, r, r.Transaction.prototype]), Br(r, [r._allTables, r, r.Transaction.prototype, this._cfg.tables], p(u), u), r._storeNames = p(u), this;
      }, Vn.prototype.upgrade = function(n) {
        return this._cfg.contentUpgrade = X(this._cfg.contentUpgrade || g, n), this;
      }, Vn);
      function Vn() {
      }
      function qi(n, r) {
        var s = n._dbNamesDB;
        return s || (s = n._dbNamesDB = new Jt(Rr, { addons: [], indexedDB: n, IDBKeyRange: r })).version(1).stores({ dbnames: "name" }), s.table("dbnames");
      }
      function Ki(n) {
        return n && typeof n.databases == "function";
      }
      function Vi(n) {
        return an(function() {
          return se.letThrough = !0, n();
        });
      }
      function Ui(n) {
        return !("from" in n);
      }
      var ht = function(n, r) {
        if (!this) {
          var s = new ht();
          return n && "d" in n && b(s, n), s;
        }
        b(this, arguments.length ? { d: 1, from: n, to: 1 < arguments.length ? r : n } : { d: 0 });
      };
      function or(n, r, s) {
        var c = Ie(r, s);
        if (!isNaN(c)) {
          if (0 < c) throw RangeError();
          if (Ui(n)) return b(n, { from: r, to: s, d: 1 });
          var u = n.l, c = n.r;
          if (Ie(s, n.from) < 0) return u ? or(u, r, s) : n.l = { from: r, to: s, d: 1, l: null, r: null }, xs(n);
          if (0 < Ie(r, n.to)) return c ? or(c, r, s) : n.r = { from: r, to: s, d: 1, l: null, r: null }, xs(n);
          Ie(r, n.from) < 0 && (n.from = r, n.l = null, n.d = c ? c.d + 1 : 1), 0 < Ie(s, n.to) && (n.to = s, n.r = null, n.d = n.l ? n.l.d + 1 : 1), s = !n.r, u && !n.l && sr(n, u), c && s && sr(n, c);
        }
      }
      function sr(n, r) {
        Ui(r) || function s(c, E) {
          var f = E.from, y = E.to, v = E.l, E = E.r;
          or(c, f, y), v && s(c, v), E && s(c, E);
        }(n, r);
      }
      function ws(n, r) {
        var s = Ur(r), c = s.next();
        if (c.done) return !1;
        for (var u = c.value, f = Ur(n), y = f.next(u.from), v = y.value; !c.done && !y.done; ) {
          if (Ie(v.from, u.to) <= 0 && 0 <= Ie(v.to, u.from)) return !0;
          Ie(u.from, v.from) < 0 ? u = (c = s.next(v.from)).value : v = (y = f.next(u.from)).value;
        }
        return !1;
      }
      function Ur(n) {
        var r = Ui(n) ? null : { s: 0, n };
        return { next: function(s) {
          for (var c = 0 < arguments.length; r; ) switch (r.s) {
            case 0:
              if (r.s = 1, c) for (; r.n.l && Ie(s, r.n.from) < 0; ) r = { up: r, n: r.n.l, s: 1 };
              else for (; r.n.l; ) r = { up: r, n: r.n.l, s: 1 };
            case 1:
              if (r.s = 2, !c || Ie(s, r.n.to) <= 0) return { value: r.n, done: !1 };
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
      function xs(n) {
        var r, s, c = (((r = n.r) === null || r === void 0 ? void 0 : r.d) || 0) - (((s = n.l) === null || s === void 0 ? void 0 : s.d) || 0), u = 1 < c ? "r" : c < -1 ? "l" : "";
        u && (r = u == "r" ? "l" : "r", s = o({}, n), c = n[u], n.from = c.from, n.to = c.to, n[u] = c[u], s[u] = c[r], (n[r] = s).d = Ts(s)), n.d = Ts(n);
      }
      function Ts(s) {
        var r = s.r, s = s.l;
        return (r ? s ? Math.max(r.d, s.d) : r.d : s ? s.d : 0) + 1;
      }
      function Gr(n, r) {
        return p(r).forEach(function(s) {
          n[s] ? sr(n[s], r[s]) : n[s] = function c(u) {
            var f, y, v = {};
            for (f in u) j(u, f) && (y = u[f], v[f] = !y || typeof y != "object" || dt.has(y.constructor) ? y : c(y));
            return v;
          }(r[s]);
        }), n;
      }
      function Gi(n, r) {
        return n.all || r.all || Object.keys(n).some(function(s) {
          return r[s] && ws(r[s], n[s]);
        });
      }
      q(ht.prototype, ((Mt = { add: function(n) {
        return sr(this, n), this;
      }, addKey: function(n) {
        return or(this, n, n), this;
      }, addKeys: function(n) {
        var r = this;
        return n.forEach(function(s) {
          return or(r, s, s);
        }), this;
      }, hasKey: function(n) {
        var r = Ur(this).next(n).value;
        return r && Ie(r.from, n) <= 0 && 0 <= Ie(r.to, n);
      } })[Ve] = function() {
        return Ur(this);
      }, Mt));
      var Cn = {}, Hi = {}, Wi = !1;
      function Hr(n) {
        Gr(Hi, n), Wi || (Wi = !0, setTimeout(function() {
          Wi = !1, Yi(Hi, !(Hi = {}));
        }, 0));
      }
      function Yi(n, r) {
        r === void 0 && (r = !1);
        var s = /* @__PURE__ */ new Set();
        if (n.all) for (var c = 0, u = Object.values(Cn); c < u.length; c++) Cs(y = u[c], n, s, r);
        else for (var f in n) {
          var y, v = /^idb\:\/\/(.*)\/(.*)\//.exec(f);
          v && (f = v[1], v = v[2], (y = Cn["idb://".concat(f, "/").concat(v)]) && Cs(y, n, s, r));
        }
        s.forEach(function(E) {
          return E();
        });
      }
      function Cs(n, r, s, c) {
        for (var u = [], f = 0, y = Object.entries(n.queries.query); f < y.length; f++) {
          for (var v = y[f], E = v[0], x = [], I = 0, _ = v[1]; I < _.length; I++) {
            var O = _[I];
            Gi(r, O.obsSet) ? O.subscribers.forEach(function(A) {
              return s.add(A);
            }) : c && x.push(O);
          }
          c && u.push([E, x]);
        }
        if (c) for (var w = 0, C = u; w < C.length; w++) {
          var D = C[w], E = D[0], x = D[1];
          n.queries.query[E] = x;
        }
      }
      function lu(n) {
        var r = n._state, s = n._deps.indexedDB;
        if (r.isBeingOpened || n.idbdb) return r.dbReadyPromise.then(function() {
          return r.dbOpenError ? We(r.dbOpenError) : n;
        });
        r.isBeingOpened = !0, r.dbOpenError = null, r.openComplete = !1;
        var c = r.openCanceller, u = Math.round(10 * n.verno), f = !1;
        function y() {
          if (r.openCanceller !== c) throw new R.DatabaseClosed("db.open() was cancelled");
        }
        function v() {
          return new re(function(O, w) {
            if (y(), !s) throw new R.MissingAPI();
            var C = n.name, D = r.autoSchema || !u ? s.open(C) : s.open(C, u);
            if (!D) throw new R.MissingAPI();
            D.onerror = qt(w), D.onblocked = Ue(n._fireOnBlocked), D.onupgradeneeded = Ue(function(A) {
              var P;
              I = D.transaction, r.autoSchema && !n._options.allowEmptyDB ? (D.onerror = tr, I.abort(), D.result.close(), (P = s.deleteDatabase(C)).onsuccess = P.onerror = Ue(function() {
                w(new R.NoSuchDatabase("Database ".concat(C, " doesnt exist")));
              })) : (I.onerror = qt(w), A = A.oldVersion > Math.pow(2, 62) ? 0 : A.oldVersion, _ = A < 1, n.idbdb = D.result, f && cu(n, I), au(n, A / 10, I, w));
            }, w), D.onsuccess = Ue(function() {
              I = null;
              var A, P, $, k, B, W = n.idbdb = D.result, z = be(W.objectStoreNames);
              if (0 < z.length) try {
                var Y = W.transaction((k = z).length === 1 ? k[0] : k, "readonly");
                if (r.autoSchema) P = W, $ = Y, (A = n).verno = P.version / 10, $ = A._dbSchema = Kr(0, P, $), A._storeNames = be(P.objectStoreNames, 0), Br(A, [A._allTables], p($), $);
                else if (Vr(n, n._dbSchema, Y), ((B = ki(Kr(0, (B = n).idbdb, Y), B._dbSchema)).add.length || B.change.some(function(Q) {
                  return Q.add.length || Q.change.length;
                })) && !f) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), W.close(), u = W.version + 1, f = !0, O(v());
                kr(n, Y);
              } catch {
              }
              Bn.push(n), W.onversionchange = Ue(function(Q) {
                r.vcFired = !0, n.on("versionchange").fire(Q);
              }), W.onclose = Ue(function(Q) {
                n.on("close").fire(Q);
              }), _ && (B = n._deps, Y = C, W = B.indexedDB, B = B.IDBKeyRange, Ki(W) || Y === Rr || qi(W, B).put({ name: Y }).catch(g)), O();
            }, w);
          }).catch(function(O) {
            switch (O?.name) {
              case "UnknownError":
                if (0 < r.PR1398_maxLoop) return r.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), v();
                break;
              case "VersionError":
                if (0 < u) return u = 0, v();
            }
            return re.reject(O);
          });
        }
        var E, x = r.dbReadyResolve, I = null, _ = !1;
        return re.race([c, (typeof navigator > "u" ? re.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(O) {
          function w() {
            return indexedDB.databases().finally(O);
          }
          E = setInterval(w, 100), w();
        }).finally(function() {
          return clearInterval(E);
        }) : Promise.resolve()).then(v)]).then(function() {
          return y(), r.onReadyBeingFired = [], re.resolve(Vi(function() {
            return n.on.ready.fire(n.vip);
          })).then(function O() {
            if (0 < r.onReadyBeingFired.length) {
              var w = r.onReadyBeingFired.reduce(X, g);
              return r.onReadyBeingFired = [], re.resolve(Vi(function() {
                return w(n.vip);
              })).then(O);
            }
          });
        }).finally(function() {
          r.openCanceller === c && (r.onReadyBeingFired = null, r.isBeingOpened = !1);
        }).catch(function(O) {
          r.dbOpenError = O;
          try {
            I && I.abort();
          } catch {
          }
          return c === r.openCanceller && n._close(), We(O);
        }).finally(function() {
          r.openComplete = !0, x();
        }).then(function() {
          var O;
          return _ && (O = {}, n.tables.forEach(function(w) {
            w.schema.indexes.forEach(function(C) {
              C.name && (O["idb://".concat(n.name, "/").concat(w.name, "/").concat(C.name)] = new ht(-1 / 0, [[[]]]));
            }), O["idb://".concat(n.name, "/").concat(w.name, "/")] = O["idb://".concat(n.name, "/").concat(w.name, "/:dels")] = new ht(-1 / 0, [[[]]]);
          }), fn(nr).fire(O), Yi(O, !0)), n;
        });
      }
      function Xi(n) {
        function r(f) {
          return n.next(f);
        }
        var s = u(r), c = u(function(f) {
          return n.throw(f);
        });
        function u(f) {
          return function(E) {
            var v = f(E), E = v.value;
            return v.done ? E : E && typeof E.then == "function" ? E.then(s, c) : h(E) ? Promise.all(E).then(s, c) : s(E);
          };
        }
        return u(r)();
      }
      function Wr(n, r, s) {
        for (var c = h(n) ? n.slice() : [n], u = 0; u < s; ++u) c.push(r);
        return c;
      }
      var fu = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(n) {
        return o(o({}, n), { table: function(r) {
          var s = n.table(r), c = s.schema, u = {}, f = [];
          function y(_, O, w) {
            var C = ir(_), D = u[C] = u[C] || [], A = _ == null ? 0 : typeof _ == "string" ? 1 : _.length, P = 0 < O, P = o(o({}, w), { name: P ? "".concat(C, "(virtual-from:").concat(w.name, ")") : w.name, lowLevelIndex: w, isVirtual: P, keyTail: O, keyLength: A, extractKey: Li(_), unique: !P && w.unique });
            return D.push(P), P.isPrimaryKey || f.push(P), 1 < A && y(A === 2 ? _[0] : _.slice(0, A - 1), O + 1, w), D.sort(function($, k) {
              return $.keyTail - k.keyTail;
            }), P;
          }
          r = y(c.primaryKey.keyPath, 0, c.primaryKey), u[":id"] = [r];
          for (var v = 0, E = c.indexes; v < E.length; v++) {
            var x = E[v];
            y(x.keyPath, 0, x);
          }
          function I(_) {
            var O, w = _.query.index;
            return w.isVirtual ? o(o({}, _), { query: { index: w.lowLevelIndex, range: (O = _.query.range, w = w.keyTail, { type: O.type === 1 ? 2 : O.type, lower: Wr(O.lower, O.lowerOpen ? n.MAX_KEY : n.MIN_KEY, w), lowerOpen: !0, upper: Wr(O.upper, O.upperOpen ? n.MIN_KEY : n.MAX_KEY, w), upperOpen: !0 }) } }) : _;
          }
          return o(o({}, s), { schema: o(o({}, c), { primaryKey: r, indexes: f, getIndexByKeyPath: function(_) {
            return (_ = u[ir(_)]) && _[0];
          } }), count: function(_) {
            return s.count(I(_));
          }, query: function(_) {
            return s.query(I(_));
          }, openCursor: function(_) {
            var O = _.query.index, w = O.keyTail, C = O.isVirtual, D = O.keyLength;
            return C ? s.openCursor(I(_)).then(function(P) {
              return P && A(P);
            }) : s.openCursor(_);
            function A(P) {
              return Object.create(P, { continue: { value: function($) {
                $ != null ? P.continue(Wr($, _.reverse ? n.MAX_KEY : n.MIN_KEY, w)) : _.unique ? P.continue(P.key.slice(0, D).concat(_.reverse ? n.MIN_KEY : n.MAX_KEY, w)) : P.continue();
              } }, continuePrimaryKey: { value: function($, k) {
                P.continuePrimaryKey(Wr($, n.MAX_KEY, w), k);
              } }, primaryKey: { get: function() {
                return P.primaryKey;
              } }, key: { get: function() {
                var $ = P.key;
                return D === 1 ? $[0] : $.slice(0, D);
              } }, value: { get: function() {
                return P.value;
              } } });
            }
          } });
        } });
      } };
      function Qi(n, r, s, c) {
        return s = s || {}, c = c || "", p(n).forEach(function(u) {
          var f, y, v;
          j(r, u) ? (f = n[u], y = r[u], typeof f == "object" && typeof y == "object" && f && y ? (v = Nt(f)) !== Nt(y) ? s[c + u] = r[u] : v === "Object" ? Qi(f, y, s, c + u + ".") : f !== y && (s[c + u] = r[u]) : f !== y && (s[c + u] = r[u])) : s[c + u] = void 0;
        }), p(r).forEach(function(u) {
          j(n, u) || (s[c + u] = r[u]);
        }), s;
      }
      function Ji(n, r) {
        return r.type === "delete" ? r.keys : r.keys || r.values.map(n.extractKey);
      }
      var du = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(n) {
        return o(o({}, n), { table: function(r) {
          var s = n.table(r), c = s.schema.primaryKey;
          return o(o({}, s), { mutate: function(u) {
            var f = se.trans, y = f.table(r).hook, v = y.deleting, E = y.creating, x = y.updating;
            switch (u.type) {
              case "add":
                if (E.fire === g) break;
                return f._promise("readwrite", function() {
                  return I(u);
                }, !0);
              case "put":
                if (E.fire === g && x.fire === g) break;
                return f._promise("readwrite", function() {
                  return I(u);
                }, !0);
              case "delete":
                if (v.fire === g) break;
                return f._promise("readwrite", function() {
                  return I(u);
                }, !0);
              case "deleteRange":
                if (v.fire === g) break;
                return f._promise("readwrite", function() {
                  return function _(O, w, C) {
                    return s.query({ trans: O, values: !1, query: { index: c, range: w }, limit: C }).then(function(D) {
                      var A = D.result;
                      return I({ type: "delete", keys: A, trans: O }).then(function(P) {
                        return 0 < P.numFailures ? Promise.reject(P.failures[0]) : A.length < C ? { failures: [], numFailures: 0, lastResult: void 0 } : _(O, o(o({}, w), { lower: A[A.length - 1], lowerOpen: !0 }), C);
                      });
                    });
                  }(u.trans, u.range, 1e4);
                }, !0);
            }
            return s.mutate(u);
            function I(_) {
              var O, w, C, D = se.trans, A = _.keys || Ji(c, _);
              if (!A) throw new Error("Keys missing");
              return (_ = _.type === "add" || _.type === "put" ? o(o({}, _), { keys: A }) : o({}, _)).type !== "delete" && (_.values = a([], _.values)), _.keys && (_.keys = a([], _.keys)), O = s, C = A, ((w = _).type === "add" ? Promise.resolve([]) : O.getMany({ trans: w.trans, keys: C, cache: "immutable" })).then(function(P) {
                var $ = A.map(function(k, B) {
                  var W, z, Y, Q = P[B], ne = { onerror: null, onsuccess: null };
                  return _.type === "delete" ? v.fire.call(ne, k, Q, D) : _.type === "add" || Q === void 0 ? (W = E.fire.call(ne, k, _.values[B], D), k == null && W != null && (_.keys[B] = k = W, c.outbound || xe(_.values[B], c.keyPath, k))) : (W = Qi(Q, _.values[B]), (z = x.fire.call(ne, W, k, Q, D)) && (Y = _.values[B], Object.keys(z).forEach(function(te) {
                    j(Y, te) ? Y[te] = z[te] : xe(Y, te, z[te]);
                  }))), ne;
                });
                return s.mutate(_).then(function(k) {
                  for (var B = k.failures, W = k.results, z = k.numFailures, k = k.lastResult, Y = 0; Y < A.length; ++Y) {
                    var Q = (W || A)[Y], ne = $[Y];
                    Q == null ? ne.onerror && ne.onerror(B[Y]) : ne.onsuccess && ne.onsuccess(_.type === "put" && P[Y] ? _.values[Y] : Q);
                  }
                  return { failures: B, results: W, numFailures: z, lastResult: k };
                }).catch(function(k) {
                  return $.forEach(function(B) {
                    return B.onerror && B.onerror(k);
                  }), Promise.reject(k);
                });
              });
            }
          } });
        } });
      } };
      function Is(n, r, s) {
        try {
          if (!r || r.keys.length < n.length) return null;
          for (var c = [], u = 0, f = 0; u < r.keys.length && f < n.length; ++u) Ie(r.keys[u], n[f]) === 0 && (c.push(s ? Je(r.values[u]) : r.values[u]), ++f);
          return c.length === n.length ? c : null;
        } catch {
          return null;
        }
      }
      var pu = { stack: "dbcore", level: -1, create: function(n) {
        return { table: function(r) {
          var s = n.table(r);
          return o(o({}, s), { getMany: function(c) {
            if (!c.cache) return s.getMany(c);
            var u = Is(c.keys, c.trans._cache, c.cache === "clone");
            return u ? re.resolve(u) : s.getMany(c).then(function(f) {
              return c.trans._cache = { keys: c.keys, values: c.cache === "clone" ? Je(f) : f }, f;
            });
          }, mutate: function(c) {
            return c.type !== "add" && (c.trans._cache = null), s.mutate(c);
          } });
        } };
      } };
      function As(n, r) {
        return n.trans.mode === "readonly" && !!n.subscr && !n.trans.explicit && n.trans.db._options.cache !== "disabled" && !r.schema.primaryKey.outbound;
      }
      function Ns(n, r) {
        switch (n) {
          case "query":
            return r.values && !r.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return !1;
        }
      }
      var hu = { stack: "dbcore", level: 0, name: "Observability", create: function(n) {
        var r = n.schema.name, s = new ht(n.MIN_KEY, n.MAX_KEY);
        return o(o({}, n), { transaction: function(c, u, f) {
          if (se.subscr && u !== "readonly") throw new R.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(se.querier));
          return n.transaction(c, u, f);
        }, table: function(c) {
          var u = n.table(c), f = u.schema, y = f.primaryKey, _ = f.indexes, v = y.extractKey, E = y.outbound, x = y.autoIncrement && _.filter(function(w) {
            return w.compound && w.keyPath.includes(y.keyPath);
          }), I = o(o({}, u), { mutate: function(w) {
            function C(te) {
              return te = "idb://".concat(r, "/").concat(c, "/").concat(te), k[te] || (k[te] = new ht());
            }
            var D, A, P, $ = w.trans, k = w.mutatedParts || (w.mutatedParts = {}), B = C(""), W = C(":dels"), z = w.type, ne = w.type === "deleteRange" ? [w.range] : w.type === "delete" ? [w.keys] : w.values.length < 50 ? [Ji(y, w).filter(function(te) {
              return te;
            }), w.values] : [], Y = ne[0], Q = ne[1], ne = w.trans._cache;
            return h(Y) ? (B.addKeys(Y), (ne = z === "delete" || Y.length === Q.length ? Is(Y, ne) : null) || W.addKeys(Y), (ne || Q) && (D = C, A = ne, P = Q, f.indexes.forEach(function(te) {
              var ie = D(te.name || "");
              function Se(ve) {
                return ve != null ? te.extractKey(ve) : null;
              }
              function Ne(ve) {
                return te.multiEntry && h(ve) ? ve.forEach(function(He) {
                  return ie.addKey(He);
                }) : ie.addKey(ve);
              }
              (A || P).forEach(function(ve, mt) {
                var ge = A && Se(A[mt]), mt = P && Se(P[mt]);
                Ie(ge, mt) !== 0 && (ge != null && Ne(ge), mt != null && Ne(mt));
              });
            }))) : Y ? (Q = { from: (Q = Y.lower) !== null && Q !== void 0 ? Q : n.MIN_KEY, to: (Q = Y.upper) !== null && Q !== void 0 ? Q : n.MAX_KEY }, W.add(Q), B.add(Q)) : (B.add(s), W.add(s), f.indexes.forEach(function(te) {
              return C(te.name).add(s);
            })), u.mutate(w).then(function(te) {
              return !Y || w.type !== "add" && w.type !== "put" || (B.addKeys(te.results), x && x.forEach(function(ie) {
                for (var Se = w.values.map(function(ge) {
                  return ie.extractKey(ge);
                }), Ne = ie.keyPath.findIndex(function(ge) {
                  return ge === y.keyPath;
                }), ve = 0, He = te.results.length; ve < He; ++ve) Se[ve][Ne] = te.results[ve];
                C(ie.name).addKeys(Se);
              })), $.mutatedParts = Gr($.mutatedParts || {}, k), te;
            });
          } }), _ = function(C) {
            var D = C.query, C = D.index, D = D.range;
            return [C, new ht((C = D.lower) !== null && C !== void 0 ? C : n.MIN_KEY, (D = D.upper) !== null && D !== void 0 ? D : n.MAX_KEY)];
          }, O = { get: function(w) {
            return [y, new ht(w.key)];
          }, getMany: function(w) {
            return [y, new ht().addKeys(w.keys)];
          }, count: _, query: _, openCursor: _ };
          return p(O).forEach(function(w) {
            I[w] = function(C) {
              var D = se.subscr, A = !!D, P = As(se, u) && Ns(w, C) ? C.obsSet = {} : D;
              if (A) {
                var $ = function(Q) {
                  return Q = "idb://".concat(r, "/").concat(c, "/").concat(Q), P[Q] || (P[Q] = new ht());
                }, k = $(""), B = $(":dels"), D = O[w](C), A = D[0], D = D[1];
                if ((w === "query" && A.isPrimaryKey && !C.values ? B : $(A.name || "")).add(D), !A.isPrimaryKey) {
                  if (w !== "count") {
                    var W = w === "query" && E && C.values && u.query(o(o({}, C), { values: !1 }));
                    return u[w].apply(this, arguments).then(function(Q) {
                      if (w === "query") {
                        if (E && C.values) return W.then(function(Se) {
                          return Se = Se.result, k.addKeys(Se), Q;
                        });
                        var ne = C.values ? Q.result.map(v) : Q.result;
                        (C.values ? k : B).addKeys(ne);
                      } else if (w === "openCursor") {
                        var te = Q, ie = C.values;
                        return te && Object.create(te, { key: { get: function() {
                          return B.addKey(te.primaryKey), te.key;
                        } }, primaryKey: { get: function() {
                          var Se = te.primaryKey;
                          return B.addKey(Se), Se;
                        } }, value: { get: function() {
                          return ie && k.addKey(te.primaryKey), te.value;
                        } } });
                      }
                      return Q;
                    });
                  }
                  B.add(s);
                }
              }
              return u[w].apply(this, arguments);
            };
          }), I;
        } });
      } };
      function Ds(n, r, s) {
        if (s.numFailures === 0) return r;
        if (r.type === "deleteRange") return null;
        var c = r.keys ? r.keys.length : "values" in r && r.values ? r.values.length : 1;
        return s.numFailures === c ? null : (r = o({}, r), h(r.keys) && (r.keys = r.keys.filter(function(u, f) {
          return !(f in s.failures);
        })), "values" in r && h(r.values) && (r.values = r.values.filter(function(u, f) {
          return !(f in s.failures);
        })), r);
      }
      function zi(n, r) {
        return s = n, ((c = r).lower === void 0 || (c.lowerOpen ? 0 < Ie(s, c.lower) : 0 <= Ie(s, c.lower))) && (n = n, (r = r).upper === void 0 || (r.upperOpen ? Ie(n, r.upper) < 0 : Ie(n, r.upper) <= 0));
        var s, c;
      }
      function Os(n, r, O, c, u, f) {
        if (!O || O.length === 0) return n;
        var y = r.query.index, v = y.multiEntry, E = r.query.range, x = c.schema.primaryKey.extractKey, I = y.extractKey, _ = (y.lowLevelIndex || y).extractKey, O = O.reduce(function(w, C) {
          var D = w, A = [];
          if (C.type === "add" || C.type === "put") for (var P = new ht(), $ = C.values.length - 1; 0 <= $; --$) {
            var k, B = C.values[$], W = x(B);
            P.hasKey(W) || (k = I(B), (v && h(k) ? k.some(function(te) {
              return zi(te, E);
            }) : zi(k, E)) && (P.addKey(W), A.push(B)));
          }
          switch (C.type) {
            case "add":
              var z = new ht().addKeys(r.values ? w.map(function(ie) {
                return x(ie);
              }) : w), D = w.concat(r.values ? A.filter(function(ie) {
                return ie = x(ie), !z.hasKey(ie) && (z.addKey(ie), !0);
              }) : A.map(function(ie) {
                return x(ie);
              }).filter(function(ie) {
                return !z.hasKey(ie) && (z.addKey(ie), !0);
              }));
              break;
            case "put":
              var Y = new ht().addKeys(C.values.map(function(ie) {
                return x(ie);
              }));
              D = w.filter(function(ie) {
                return !Y.hasKey(r.values ? x(ie) : ie);
              }).concat(r.values ? A : A.map(function(ie) {
                return x(ie);
              }));
              break;
            case "delete":
              var Q = new ht().addKeys(C.keys);
              D = w.filter(function(ie) {
                return !Q.hasKey(r.values ? x(ie) : ie);
              });
              break;
            case "deleteRange":
              var ne = C.range;
              D = w.filter(function(ie) {
                return !zi(x(ie), ne);
              });
          }
          return D;
        }, n);
        return O === n ? n : (O.sort(function(w, C) {
          return Ie(_(w), _(C)) || Ie(x(w), x(C));
        }), r.limit && r.limit < 1 / 0 && (O.length > r.limit ? O.length = r.limit : n.length === r.limit && O.length < r.limit && (u.dirty = !0)), f ? Object.freeze(O) : O);
      }
      function Ps(n, r) {
        return Ie(n.lower, r.lower) === 0 && Ie(n.upper, r.upper) === 0 && !!n.lowerOpen == !!r.lowerOpen && !!n.upperOpen == !!r.upperOpen;
      }
      function mu(n, r) {
        return function(s, c, u, f) {
          if (s === void 0) return c !== void 0 ? -1 : 0;
          if (c === void 0) return 1;
          if ((c = Ie(s, c)) === 0) {
            if (u && f) return 0;
            if (u) return 1;
            if (f) return -1;
          }
          return c;
        }(n.lower, r.lower, n.lowerOpen, r.lowerOpen) <= 0 && 0 <= function(s, c, u, f) {
          if (s === void 0) return c !== void 0 ? 1 : 0;
          if (c === void 0) return -1;
          if ((c = Ie(s, c)) === 0) {
            if (u && f) return 0;
            if (u) return -1;
            if (f) return 1;
          }
          return c;
        }(n.upper, r.upper, n.upperOpen, r.upperOpen);
      }
      function yu(n, r, s, c) {
        n.subscribers.add(s), c.addEventListener("abort", function() {
          var u, f;
          n.subscribers.delete(s), n.subscribers.size === 0 && (u = n, f = r, setTimeout(function() {
            u.subscribers.size === 0 && Te(f, u);
          }, 3e3));
        });
      }
      var gu = { stack: "dbcore", level: 0, name: "Cache", create: function(n) {
        var r = n.schema.name;
        return o(o({}, n), { transaction: function(s, c, u) {
          var f, y, v = n.transaction(s, c, u);
          return c === "readwrite" && (y = (f = new AbortController()).signal, u = function(E) {
            return function() {
              if (f.abort(), c === "readwrite") {
                for (var x = /* @__PURE__ */ new Set(), I = 0, _ = s; I < _.length; I++) {
                  var O = _[I], w = Cn["idb://".concat(r, "/").concat(O)];
                  if (w) {
                    var C = n.table(O), D = w.optimisticOps.filter(function(ie) {
                      return ie.trans === v;
                    });
                    if (v._explicit && E && v.mutatedParts) for (var A = 0, P = Object.values(w.queries.query); A < P.length; A++) for (var $ = 0, k = (z = P[A]).slice(); $ < k.length; $++) Gi((Y = k[$]).obsSet, v.mutatedParts) && (Te(z, Y), Y.subscribers.forEach(function(ie) {
                      return x.add(ie);
                    }));
                    else if (0 < D.length) {
                      w.optimisticOps = w.optimisticOps.filter(function(ie) {
                        return ie.trans !== v;
                      });
                      for (var B = 0, W = Object.values(w.queries.query); B < W.length; B++) for (var z, Y, Q, ne = 0, te = (z = W[B]).slice(); ne < te.length; ne++) (Y = te[ne]).res != null && v.mutatedParts && (E && !Y.dirty ? (Q = Object.isFrozen(Y.res), Q = Os(Y.res, Y.req, D, C, Y, Q), Y.dirty ? (Te(z, Y), Y.subscribers.forEach(function(ie) {
                        return x.add(ie);
                      })) : Q !== Y.res && (Y.res = Q, Y.promise = re.resolve({ result: Q }))) : (Y.dirty && Te(z, Y), Y.subscribers.forEach(function(ie) {
                        return x.add(ie);
                      })));
                    }
                  }
                }
                x.forEach(function(ie) {
                  return ie();
                });
              }
            };
          }, v.addEventListener("abort", u(!1), { signal: y }), v.addEventListener("error", u(!1), { signal: y }), v.addEventListener("complete", u(!0), { signal: y })), v;
        }, table: function(s) {
          var c = n.table(s), u = c.schema.primaryKey;
          return o(o({}, c), { mutate: function(f) {
            var y = se.trans;
            if (u.outbound || y.db._options.cache === "disabled" || y.explicit || y.idbtrans.mode !== "readwrite") return c.mutate(f);
            var v = Cn["idb://".concat(r, "/").concat(s)];
            return v ? (y = c.mutate(f), f.type !== "add" && f.type !== "put" || !(50 <= f.values.length || Ji(u, f).some(function(E) {
              return E == null;
            })) ? (v.optimisticOps.push(f), f.mutatedParts && Hr(f.mutatedParts), y.then(function(E) {
              0 < E.numFailures && (Te(v.optimisticOps, f), (E = Ds(0, f, E)) && v.optimisticOps.push(E), f.mutatedParts && Hr(f.mutatedParts));
            }), y.catch(function() {
              Te(v.optimisticOps, f), f.mutatedParts && Hr(f.mutatedParts);
            })) : y.then(function(E) {
              var x = Ds(0, o(o({}, f), { values: f.values.map(function(I, _) {
                var O;
                return E.failures[_] || (I = (O = u.keyPath) !== null && O !== void 0 && O.includes(".") ? Je(I) : o({}, I), xe(I, u.keyPath, E.results[_])), I;
              }) }), E);
              v.optimisticOps.push(x), queueMicrotask(function() {
                return f.mutatedParts && Hr(f.mutatedParts);
              });
            }), y) : c.mutate(f);
          }, query: function(f) {
            if (!As(se, c) || !Ns("query", f)) return c.query(f);
            var y = ((x = se.trans) === null || x === void 0 ? void 0 : x.db._options.cache) === "immutable", _ = se, v = _.requery, E = _.signal, x = function(C, D, A, P) {
              var $ = Cn["idb://".concat(C, "/").concat(D)];
              if (!$) return [];
              if (!(D = $.queries[A])) return [null, !1, $, null];
              var k = D[(P.query ? P.query.index.name : null) || ""];
              if (!k) return [null, !1, $, null];
              switch (A) {
                case "query":
                  var B = k.find(function(W) {
                    return W.req.limit === P.limit && W.req.values === P.values && Ps(W.req.query.range, P.query.range);
                  });
                  return B ? [B, !0, $, k] : [k.find(function(W) {
                    return ("limit" in W.req ? W.req.limit : 1 / 0) >= P.limit && (!P.values || W.req.values) && mu(W.req.query.range, P.query.range);
                  }), !1, $, k];
                case "count":
                  return B = k.find(function(W) {
                    return Ps(W.req.query.range, P.query.range);
                  }), [B, !!B, $, k];
              }
            }(r, s, "query", f), I = x[0], _ = x[1], O = x[2], w = x[3];
            return I && _ ? I.obsSet = f.obsSet : (_ = c.query(f).then(function(C) {
              var D = C.result;
              if (I && (I.res = D), y) {
                for (var A = 0, P = D.length; A < P; ++A) Object.freeze(D[A]);
                Object.freeze(D);
              } else C.result = Je(D);
              return C;
            }).catch(function(C) {
              return w && I && Te(w, I), Promise.reject(C);
            }), I = { obsSet: f.obsSet, promise: _, subscribers: /* @__PURE__ */ new Set(), type: "query", req: f, dirty: !1 }, w ? w.push(I) : (w = [I], (O = O || (Cn["idb://".concat(r, "/").concat(s)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[f.query.index.name || ""] = w)), yu(I, w, v, E), I.promise.then(function(C) {
              return { result: Os(C.result, f, O?.optimisticOps, c, I, y) };
            });
          } });
        } });
      } };
      function Yr(n, r) {
        return new Proxy(n, { get: function(s, c, u) {
          return c === "db" ? r : Reflect.get(s, c, u);
        } });
      }
      var Jt = (Ye.prototype.version = function(n) {
        if (isNaN(n) || n < 0.1) throw new R.Type("Given version is not a positive number");
        if (n = Math.round(10 * n) / 10, this.idbdb || this._state.isBeingOpened) throw new R.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, n);
        var r = this._versions, s = r.filter(function(c) {
          return c._cfg.version === n;
        })[0];
        return s || (s = new this.Version(n), r.push(s), r.sort(su), s.stores({}), this._state.autoSchema = !1, s);
      }, Ye.prototype._whenReady = function(n) {
        var r = this;
        return this.idbdb && (this._state.openComplete || se.letThrough || this._vip) ? n() : new re(function(s, c) {
          if (r._state.openComplete) return c(new R.DatabaseClosed(r._state.dbOpenError));
          if (!r._state.isBeingOpened) {
            if (!r._state.autoOpen) return void c(new R.DatabaseClosed());
            r.open().catch(g);
          }
          r._state.dbReadyPromise.then(s, c);
        }).then(n);
      }, Ye.prototype.use = function(n) {
        var r = n.stack, s = n.create, c = n.level, u = n.name;
        return u && this.unuse({ stack: r, name: u }), n = this._middlewares[r] || (this._middlewares[r] = []), n.push({ stack: r, create: s, level: c ?? 10, name: u }), n.sort(function(f, y) {
          return f.level - y.level;
        }), this;
      }, Ye.prototype.unuse = function(n) {
        var r = n.stack, s = n.name, c = n.create;
        return r && this._middlewares[r] && (this._middlewares[r] = this._middlewares[r].filter(function(u) {
          return c ? u.create !== c : !!s && u.name !== s;
        })), this;
      }, Ye.prototype.open = function() {
        var n = this;
        return wn(Ge, function() {
          return lu(n);
        });
      }, Ye.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var n = this._state, r = Bn.indexOf(this);
        if (0 <= r && Bn.splice(r, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        n.isBeingOpened || (n.dbReadyPromise = new re(function(s) {
          n.dbReadyResolve = s;
        }), n.openCanceller = new re(function(s, c) {
          n.cancelOpen = c;
        }));
      }, Ye.prototype.close = function(s) {
        var r = (s === void 0 ? { disableAutoOpen: !0 } : s).disableAutoOpen, s = this._state;
        r ? (s.isBeingOpened && s.cancelOpen(new R.DatabaseClosed()), this._close(), s.autoOpen = !1, s.dbOpenError = new R.DatabaseClosed()) : (this._close(), s.autoOpen = this._options.autoOpen || s.isBeingOpened, s.openComplete = !1, s.dbOpenError = null);
      }, Ye.prototype.delete = function(n) {
        var r = this;
        n === void 0 && (n = { disableAutoOpen: !0 });
        var s = 0 < arguments.length && typeof arguments[0] != "object", c = this._state;
        return new re(function(u, f) {
          function y() {
            r.close(n);
            var v = r._deps.indexedDB.deleteDatabase(r.name);
            v.onsuccess = Ue(function() {
              var E, x, I;
              E = r._deps, x = r.name, I = E.indexedDB, E = E.IDBKeyRange, Ki(I) || x === Rr || qi(I, E).delete(x).catch(g), u();
            }), v.onerror = qt(f), v.onblocked = r._fireOnBlocked;
          }
          if (s) throw new R.InvalidArgument("Invalid closeOptions argument to db.delete()");
          c.isBeingOpened ? c.dbReadyPromise.then(y) : y();
        });
      }, Ye.prototype.backendDB = function() {
        return this.idbdb;
      }, Ye.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Ye.prototype.hasBeenClosed = function() {
        var n = this._state.dbOpenError;
        return n && n.name === "DatabaseClosed";
      }, Ye.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Ye.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Ye.prototype, "tables", { get: function() {
        var n = this;
        return p(this._allTables).map(function(r) {
          return n._allTables[r];
        });
      }, enumerable: !1, configurable: !0 }), Ye.prototype.transaction = function() {
        var n = (function(r, s, c) {
          var u = arguments.length;
          if (u < 2) throw new R.InvalidArgument("Too few arguments");
          for (var f = new Array(u - 1); --u; ) f[u - 1] = arguments[u];
          return c = f.pop(), [r, Et(f), c];
        }).apply(this, arguments);
        return this._transaction.apply(this, n);
      }, Ye.prototype._transaction = function(n, r, s) {
        var c = this, u = se.trans;
        u && u.db === this && n.indexOf("!") === -1 || (u = null);
        var f, y, v = n.indexOf("?") !== -1;
        n = n.replace("!", "").replace("?", "");
        try {
          if (y = r.map(function(x) {
            if (x = x instanceof c.Table ? x.name : x, typeof x != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return x;
          }), n == "r" || n === Di) f = Di;
          else {
            if (n != "rw" && n != Oi) throw new R.InvalidArgument("Invalid transaction mode: " + n);
            f = Oi;
          }
          if (u) {
            if (u.mode === Di && f === Oi) {
              if (!v) throw new R.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              u = null;
            }
            u && y.forEach(function(x) {
              if (u && u.storeNames.indexOf(x) === -1) {
                if (!v) throw new R.SubTransaction("Table " + x + " not included in parent transaction.");
                u = null;
              }
            }), v && u && !u.active && (u = null);
          }
        } catch (x) {
          return u ? u._promise(null, function(I, _) {
            _(x);
          }) : We(x);
        }
        var E = (function x(I, _, O, w, C) {
          return re.resolve().then(function() {
            var D = se.transless || se, A = I._createTransaction(_, O, I._dbSchema, w);
            if (A.explicit = !0, D = { trans: A, transless: D }, w) A.idbtrans = w.idbtrans;
            else try {
              A.create(), A.idbtrans._explicit = !0, I._state.PR1398_maxLoop = 3;
            } catch (k) {
              return k.name === m.InvalidState && I.isOpen() && 0 < --I._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), I.close({ disableAutoOpen: !1 }), I.open().then(function() {
                return x(I, _, O, null, C);
              })) : We(k);
            }
            var P, $ = nt(C);
            return $ && kn(), D = re.follow(function() {
              var k;
              (P = C.call(A, A)) && ($ ? (k = cn.bind(null, null), P.then(k, k)) : typeof P.next == "function" && typeof P.throw == "function" && (P = Xi(P)));
            }, D), (P && typeof P.then == "function" ? re.resolve(P).then(function(k) {
              return A.active ? k : We(new R.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : D.then(function() {
              return P;
            })).then(function(k) {
              return w && A._resolve(), A._completion.then(function() {
                return k;
              });
            }).catch(function(k) {
              return A._reject(k), We(k);
            });
          });
        }).bind(null, this, f, y, u, s);
        return u ? u._promise(f, E, "lock") : se.trans ? wn(se.transless, function() {
          return c._whenReady(E);
        }) : this._whenReady(E);
      }, Ye.prototype.table = function(n) {
        if (!j(this._allTables, n)) throw new R.InvalidTable("Table ".concat(n, " does not exist"));
        return this._allTables[n];
      }, Ye);
      function Ye(n, r) {
        var s = this;
        this._middlewares = {}, this.verno = 0;
        var c = Ye.dependencies;
        this._options = r = o({ addons: Ye.addons, autoOpen: !0, indexedDB: c.indexedDB, IDBKeyRange: c.IDBKeyRange, cache: "cloned" }, r), this._deps = { indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange }, c = r.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var u, f, y, v, E, x = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: g, dbReadyPromise: null, cancelOpen: g, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: r.autoOpen };
        x.dbReadyPromise = new re(function(_) {
          x.dbReadyResolve = _;
        }), x.openCanceller = new re(function(_, O) {
          x.cancelOpen = O;
        }), this._state = x, this.name = n, this.on = zn(this, "populate", "blocked", "versionchange", "close", { ready: [X, g] }), this.once = function(_, O) {
          var w = function() {
            for (var C = [], D = 0; D < arguments.length; D++) C[D] = arguments[D];
            s.on(_).unsubscribe(w), O.apply(s, C);
          };
          return s.on(_, w);
        }, this.on.ready.subscribe = De(this.on.ready.subscribe, function(_) {
          return function(O, w) {
            Ye.vip(function() {
              var C, D = s._state;
              D.openComplete ? (D.dbOpenError || re.resolve().then(O), w && _(O)) : D.onReadyBeingFired ? (D.onReadyBeingFired.push(O), w && _(O)) : (_(O), C = s, w || _(function A() {
                C.on.ready.unsubscribe(O), C.on.ready.unsubscribe(A);
              }));
            });
          };
        }), this.Collection = (u = this, Zn(Zc.prototype, function(P, A) {
          this.db = u;
          var w = cs, C = null;
          if (A) try {
            w = A();
          } catch ($) {
            C = $;
          }
          var D = P._ctx, A = D.table, P = A.hook.reading.fire;
          this._ctx = { table: A, index: D.index, isPrimKey: !D.index || A.schema.primKey.keyPath && D.index === A.schema.primKey.name, range: w, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: C, or: D.or, valueMapper: P !== S ? P : null };
        })), this.Table = (f = this, Zn(ds.prototype, function(_, O, w) {
          this.db = f, this._tx = w, this.name = _, this.schema = O, this.hook = f._allTables[_] ? f._allTables[_].hook : zn(null, { creating: [U, g], reading: [L, S], updating: [J, g], deleting: [K, g] });
        })), this.Transaction = (y = this, Zn(nu.prototype, function(_, O, w, C, D) {
          var A = this;
          _ !== "readonly" && O.forEach(function(P) {
            P = (P = w[P]) === null || P === void 0 ? void 0 : P.yProps, P && (O = O.concat(P.map(function($) {
              return $.updatesTable;
            })));
          }), this.db = y, this.mode = _, this.storeNames = O, this.schema = w, this.chromeTransactionDurability = C, this.idbtrans = null, this.on = zn(this, "complete", "error", "abort"), this.parent = D || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new re(function(P, $) {
            A._resolve = P, A._reject = $;
          }), this._completion.then(function() {
            A.active = !1, A.on.complete.fire();
          }, function(P) {
            var $ = A.active;
            return A.active = !1, A.on.error.fire(P), A.parent ? A.parent._reject(P) : $ && A.idbtrans && A.idbtrans.abort(), We(P);
          });
        })), this.Version = (v = this, Zn(uu.prototype, function(_) {
          this.db = v, this._cfg = { version: _, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (E = this, Zn(vs.prototype, function(_, O, w) {
          if (this.db = E, this._ctx = { table: _, index: O === ":id" ? null : O, or: w }, this._cmp = this._ascending = Ie, this._descending = function(C, D) {
            return Ie(D, C);
          }, this._max = function(C, D) {
            return 0 < Ie(C, D) ? C : D;
          }, this._min = function(C, D) {
            return Ie(C, D) < 0 ? C : D;
          }, this._IDBKeyRange = E._deps.IDBKeyRange, !this._IDBKeyRange) throw new R.MissingAPI();
        })), this.on("versionchange", function(_) {
          0 < _.newVersion ? console.warn("Another connection wants to upgrade database '".concat(s.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(s.name, "'. Closing db now to resume the delete request.")), s.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(_) {
          !_.newVersion || _.newVersion < _.oldVersion ? console.warn("Dexie.delete('".concat(s.name, "') was blocked")) : console.warn("Upgrade '".concat(s.name, "' blocked by other connection holding version ").concat(_.oldVersion / 10));
        }), this._maxKey = rr(r.IDBKeyRange), this._createTransaction = function(_, O, w, C) {
          return new s.Transaction(_, O, w, s._options.chromeTransactionDurability, C);
        }, this._fireOnBlocked = function(_) {
          s.on("blocked").fire(_), Bn.filter(function(O) {
            return O.name === s.name && O !== s && !O._state.vcFired;
          }).map(function(O) {
            return O.on("versionchange").fire(_);
          });
        }, this.use(pu), this.use(gu), this.use(hu), this.use(fu), this.use(du);
        var I = new Proxy(this, { get: function(_, O, w) {
          if (O === "_vip") return !0;
          if (O === "table") return function(D) {
            return Yr(s.table(D), I);
          };
          var C = Reflect.get(_, O, w);
          return C instanceof ds ? Yr(C, I) : O === "tables" ? C.map(function(D) {
            return Yr(D, I);
          }) : O === "_createTransaction" ? function() {
            return Yr(C.apply(this, arguments), I);
          } : C;
        } });
        this.vip = I, c.forEach(function(_) {
          return _(s);
        });
      }
      var Xr, Mt = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", vu = (Zi.prototype.subscribe = function(n, r, s) {
        return this._subscribe(n && typeof n != "function" ? n : { next: n, error: r, complete: s });
      }, Zi.prototype[Mt] = function() {
        return this;
      }, Zi);
      function Zi(n) {
        this._subscribe = n;
      }
      try {
        Xr = { indexedDB: l.indexedDB || l.mozIndexedDB || l.webkitIndexedDB || l.msIndexedDB, IDBKeyRange: l.IDBKeyRange || l.webkitIDBKeyRange };
      } catch {
        Xr = { indexedDB: null, IDBKeyRange: null };
      }
      function Rs(n) {
        var r, s = !1, c = new vu(function(u) {
          var f = nt(n), y, v = !1, E = {}, x = {}, I = { get closed() {
            return v;
          }, unsubscribe: function() {
            v || (v = !0, y && y.abort(), _ && fn.storagemutated.unsubscribe(w));
          } };
          u.start && u.start(I);
          var _ = !1, O = function() {
            return Ni(C);
          }, w = function(D) {
            Gr(E, D), Gi(x, E) && O();
          }, C = function() {
            var D, A, P;
            !v && Xr.indexedDB && (E = {}, D = {}, y && y.abort(), y = new AbortController(), P = function($) {
              var k = Ln();
              try {
                f && kn();
                var B = an(n, $);
                return B = f ? B.finally(cn) : B;
              } finally {
                k && $n();
              }
            }(A = { subscr: D, signal: y.signal, requery: O, querier: n, trans: null }), Promise.resolve(P).then(function($) {
              s = !0, r = $, v || A.signal.aborted || (E = {}, function(k) {
                for (var B in k) if (j(k, B)) return;
                return 1;
              }(x = D) || _ || (fn(nr, w), _ = !0), Ni(function() {
                return !v && u.next && u.next($);
              }));
            }, function($) {
              s = !1, ["DatabaseClosedError", "AbortError"].includes($?.name) || v || Ni(function() {
                v || u.error && u.error($);
              });
            }));
          };
          return setTimeout(O, 0), I;
        });
        return c.hasValue = function() {
          return s;
        }, c.getValue = function() {
          return r;
        }, c;
      }
      var In = Jt;
      function eo(n) {
        var r = dn;
        try {
          dn = !0, fn.storagemutated.fire(n), Yi(n, !0);
        } finally {
          dn = r;
        }
      }
      q(In, o(o({}, Ce), { delete: function(n) {
        return new In(n, { addons: [] }).delete();
      }, exists: function(n) {
        return new In(n, { addons: [] }).open().then(function(r) {
          return r.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(n) {
        try {
          return r = In.dependencies, s = r.indexedDB, r = r.IDBKeyRange, (Ki(s) ? Promise.resolve(s.databases()).then(function(c) {
            return c.map(function(u) {
              return u.name;
            }).filter(function(u) {
              return u !== Rr;
            });
          }) : qi(s, r).toCollection().primaryKeys()).then(n);
        } catch {
          return We(new R.MissingAPI());
        }
        var r, s;
      }, defineClass: function() {
        return function(n) {
          b(this, n);
        };
      }, ignoreTransaction: function(n) {
        return se.trans ? wn(se.transless, n) : n();
      }, vip: Vi, async: function(n) {
        return function() {
          try {
            var r = Xi(n.apply(this, arguments));
            return r && typeof r.then == "function" ? r : re.resolve(r);
          } catch (s) {
            return We(s);
          }
        };
      }, spawn: function(n, r, s) {
        try {
          var c = Xi(n.apply(s, r || []));
          return c && typeof c.then == "function" ? c : re.resolve(c);
        } catch (u) {
          return We(u);
        }
      }, currentTransaction: { get: function() {
        return se.trans || null;
      } }, waitFor: function(n, r) {
        return r = re.resolve(typeof n == "function" ? In.ignoreTransaction(n) : n).timeout(r || 6e4), se.trans ? se.trans.waitFor(r) : r;
      }, Promise: re, debug: { get: function() {
        return G;
      }, set: function(n) {
        de(n);
      } }, derive: le, extend: b, props: q, override: De, Events: zn, on: fn, liveQuery: Rs, extendObservabilitySet: Gr, getByKeyPath: Ke, setByKeyPath: xe, delByKeyPath: function(n, r) {
        typeof r == "string" ? xe(n, r, void 0) : "length" in r && [].map.call(r, function(s) {
          xe(n, s, void 0);
        });
      }, shallowClone: tt, deepClone: Je, getObjectDiff: Qi, cmp: Ie, asap: je, minKey: -1 / 0, addons: [], connections: Bn, errnames: m, dependencies: Xr, cache: Cn, semVer: "4.2.0", version: "4.2.0".split(".").map(function(n) {
        return parseInt(n);
      }).reduce(function(n, r, s) {
        return n + r / Math.pow(10, 2 * s);
      }) })), In.maxKey = rr(In.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (fn(nr, function(n) {
        dn || (n = new CustomEvent(Fi, { detail: n }), dn = !0, dispatchEvent(n), dn = !1);
      }), addEventListener(Fi, function(n) {
        n = n.detail, dn || eo(n);
      }));
      var ar, dn = !1, Fs = function() {
      };
      return typeof BroadcastChannel < "u" && ((Fs = function() {
        (ar = new BroadcastChannel(Fi)).onmessage = function(n) {
          return n.data && eo(n.data);
        };
      })(), typeof ar.unref == "function" && ar.unref(), fn(nr, function(n) {
        dn || ar.postMessage(n);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(n) {
        if (!Jt.disableBfCache && n.persisted) {
          G && console.debug("Dexie: handling persisted pagehide"), ar?.close();
          for (var r = 0, s = Bn; r < s.length; r++) s[r].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(n) {
        !Jt.disableBfCache && n.persisted && (G && console.debug("Dexie: handling persisted pageshow"), Fs(), eo({ all: new ht(-1 / 0, [[]]) }));
      })), re.rejectionMapper = function(n, r) {
        return !n || n instanceof jt || n instanceof TypeError || n instanceof SyntaxError || !n.name || !N[n.name] ? n : (r = new N[n.name](r || n.message, n), "stack" in n && ae(r, "stack", { get: function() {
          return this.inner.stack;
        } }), r);
      }, de(G), o(Jt, Object.freeze({ __proto__: null, Dexie: Jt, liveQuery: Rs, Entity: us, cmp: Ie, PropModification: er, replacePrefix: function(n, r) {
        return new er({ replacePrefix: [n, r] });
      }, add: function(n) {
        return new er({ add: n });
      }, remove: function(n) {
        return new er({ remove: n });
      }, default: Jt, RangeSet: ht, mergeRanges: sr, rangesOverlap: ws }), { default: Jt }), Jt;
    });
  }(Ao)), Ao.exports;
}
var td = ed();
const No = /* @__PURE__ */ Yf(td), da = Symbol.for("Dexie"), pi = globalThis[da] || (globalThis[da] = No);
if (No.semVer !== pi.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${No.semVer} and ${pi.semVer}`);
const {
  liveQuery: Bp,
  mergeRanges: qp,
  rangesOverlap: Kp,
  RangeSet: Vp,
  cmp: Up,
  Entity: Gp,
  PropModification: Hp,
  replacePrefix: Wp,
  add: Yp,
  remove: Xp,
  DexieYProvider: Qp
} = pi, Ic = "sclElements";
function nd(e) {
  return e !== null && typeof e == "object" && "namespace" in e && e.namespace !== null;
}
const rd = "_temp-idb-id";
async function id(e) {
  return od({
    databaseName: e.databaseName,
    withDatabaseIds: !1
  });
}
async function od(e) {
  const { databaseName: t, withDatabaseIds: i } = e, o = new pi(t);
  await o.open();
  const a = await sd({
    databaseInstance: o,
    withDatabaseIds: i
  });
  if (!a)
    throw new Error("Failed to rebuild XML document from IndexedDB.");
  return {
    xmlDocument: a,
    filename: o.name + ".scd"
  };
}
async function sd(e) {
  const { databaseInstance: t, withDatabaseIds: i } = e;
  {
    const o = document.implementation.createDocument(
      "http://www.iec.ch/61850/2003/SCL",
      null,
      null
    ), a = await t.table(Ic).where({ tagName: "SCL" }).first();
    if (!a) throw new Error("No SCL root element found in DB");
    const l = Nc({
      document: o,
      record: a,
      withDatabaseIds: i
    });
    return o.appendChild(l), await Ac({
      databaseInstance: t,
      withDatabaseIds: i,
      xmlDocument: o,
      databaseRecord: a,
      parentDomElement: l
    });
  }
}
async function Ac(e) {
  const { databaseInstance: t, withDatabaseIds: i, xmlDocument: o, databaseRecord: a, parentDomElement: l } = e;
  if (!a.children) return;
  const p = a.children.map((b) => b.id), h = await t.table(Ic).bulkGet(p);
  for (const b of h) {
    if (!b) continue;
    const M = Nc({
      document: o,
      record: b,
      withDatabaseIds: i
    });
    l.appendChild(M), await Ac({
      databaseInstance: t,
      withDatabaseIds: i,
      xmlDocument: o,
      databaseRecord: b,
      parentDomElement: M
    });
  }
  return e.xmlDocument;
}
function Nc(e) {
  const { document: t, record: i, withDatabaseIds: o } = e;
  let a;
  if (i.namespace ? (pa({
    document: t,
    namespace: i.namespace
  }), a = t.createElement(`${i.namespace.prefix}:${i.tagName}`)) : a = t.createElement(i.tagName), i.attributes)
    for (const l of i.attributes)
      nd(l) ? (pa({
        document: t,
        namespace: l.namespace
      }), a.setAttributeNS(l.namespace.uri, l.name, String(l.value))) : a.setAttribute(l.name, String(l.value));
  return i.value && (a.textContent = i.value.trim()), o && a.setAttribute(rd, i.id), a;
}
function pa(e) {
  const { document: t, namespace: i } = e, o = t.documentElement;
  if (!o) return;
  const a = i.prefix === "xmlns" && i.uri === "http://www.w3.org/2000/xmlns/";
  o.getAttribute(`xmlns:${i.prefix}`) === null && !a && o.setAttribute(`xmlns:${i.prefix}`, i.uri);
}
function ad(e) {
  return e.old === void 0 && e.new?.parent !== void 0 && e.new?.element !== void 0;
}
function cd(e) {
  return e.old?.parent !== void 0 && e.old?.element !== void 0 && e.new === void 0;
}
function ud(e) {
  return e.old?.parent !== void 0 && e.old?.element !== void 0 && e.new?.parent !== void 0 && e.new?.element == null;
}
function ld(e) {
  return e.old?.parent === void 0 && e.old?.element !== void 0 && e.new?.parent === void 0 && e.new?.element !== void 0;
}
function fd(e) {
  return e.old === void 0 && e.new === void 0 && e.element !== void 0 && e.newAttributes !== void 0 && e.oldAttributes !== void 0;
}
function dd(e) {
  return !(e.actions instanceof Array);
}
function St(e) {
  const t = e.split(">"), i = t.pop() ?? "";
  return [t.join(">"), i];
}
const Qe = ":not(*)";
function pd(e) {
  return `${e.getAttribute("version")}	${e.getAttribute("revision")}`;
}
function hd(e, t) {
  const [i, o] = t.split("	");
  return !i || !o ? Qe : `${e}[version="${i}"][revision="${o}"]`;
}
function ha(e) {
  return it(e.parentElement) + ">" + e.getAttribute("connectivityNode");
}
function ma(e, t) {
  const [i, o] = St(t), a = rt[e].parents.flatMap(
    (l) => ft(l, i).split(",")
  );
  return _t(
    a,
    [">"],
    [`${e}[connectivityNode="${o}"]`]
  ).map((l) => l.join("")).join(",");
}
function md(e) {
  const [t, i, o, a, l, p] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((h) => e.getAttribute(h));
  return t === "None" ? `${it(e.parentElement)}>(${a} ${p} ${l})` : `${t} ${i || "(Client)"}/${o ?? ""} ${a} ${l ?? ""}`;
}
function yd(e, t) {
  if (t.endsWith(")")) {
    const [q, H] = St(t), [ae, le, ye] = H.substring(1, H.length - 1).split(" ");
    if (!ae || !le) return Qe;
    const he = rt[e].parents.flatMap(
      (be) => ft(be, q).split(",")
    );
    return _t(
      he,
      [">"],
      [`${e}[iedName="None"][lnClass="${ae}"][lnType="${le}"][lnInst="${ye}"]`]
    ).map((be) => be.join("")).join(",");
  }
  const [i, o, a, l, p] = t.split(/[ /]/);
  if (!i || !o || !l) return Qe;
  const [h, b, M, T, j] = [
    [`[iedName="${i}"]`],
    o === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${o}"]`],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${l}"]`],
    p ? [`[lnInst="${p}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return _t(
    [e],
    h,
    b,
    M,
    T,
    j
  ).map((q) => q.join("")).join(",");
}
function gd(e) {
  return `${it(e.parentElement)}>${e.getAttribute("iedName")} ${e.getAttribute("apName")}`;
}
function vd(e, t) {
  const [i, o] = St(t), [a, l] = o.split(" ");
  return `${ft("IED", i)}>${e}[iedName="${a}"][apName="${l}"]`;
}
function bd(e) {
  return `${it(e.parentElement)}>${e.getAttribute("associationID") ?? ""}`;
}
function _d(e, t) {
  const [i, o] = St(t);
  return o ? `${ft("Server", i)}>${e}[associationID="${o}"]` : Qe;
}
function Sd(e) {
  return `${it(e.closest("IED"))}>>${e.getAttribute("inst")}`;
}
function Ed(e, t) {
  const [i, o] = t.split(">>");
  return o ? `IED[name="${i}"] ${e}[inst="${o}"]` : Qe;
}
function wd(e) {
  const t = e.textContent, [i, o, a, l, p] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((h) => e.getAttribute(h));
  return `${it(e.parentElement)}>${t} ${i || ""} ${o || ""}/${a ?? ""} ${l ?? ""} ${p ?? ""}`;
}
function xd(e, t) {
  const [i, o] = St(t), [a, l, p, h, b, M] = o.split(/[ /]/), [
    T,
    j,
    q,
    H,
    ae,
    le
  ] = [
    rt[e].parents.flatMap((ye) => ft(ye, i).split(",")),
    [`${a}`],
    l ? [`[apRef="${l}"]`] : [":not([apRef])", '[apRef=""]'],
    p ? [`[ldInst="${p}"]`] : [":not([ldInst])", '[ldInst=""]'],
    h ? [`[prefix="${h}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${b}"]`],
    M ? [`[lnInst="${M}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return _t(
    T,
    [">"],
    [e],
    j,
    q,
    H,
    ae,
    le
  ).map((ye) => ye.join("")).join(",");
}
function Td(e) {
  const [t, i, o, a, l, p, h, b] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((T) => e.getAttribute(T)), M = `${t}/${i ?? ""} ${o} ${a ?? ""}.${l} ${p || ""}`;
  return `${it(e.parentElement)}>${M} (${h}${b ? " [" + b + "]" : ""})`;
}
function Cd(e, t) {
  const [i, o] = St(t), [a, l, p, h] = o.split(/[ /.]/), b = o.match(/.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/), M = b && b[1] ? b[1] : "", T = b && b[2] ? b[2] : "", j = o.match(/\(([A-Z]{2})/), q = o.match(/ \[([0-9]{1,2})\]/), H = j && j[1] ? j[1] : "", ae = q && q[1] ? q[1] : "", [
    le,
    ye,
    he,
    be,
    De,
    oe,
    je,
    Ke,
    xe
  ] = [
    rt[e].parents.flatMap((tt) => ft(tt, i).split(",")),
    [`[ldInst="${a}"]`],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${p}"]`],
    h ? [`[lnInst="${h}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${M}"]`],
    T ? [`[daName="${T}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${H}"]`],
    ae ? [`[ix="${ae}"]`] : [":not([ix])", '[ix=""]']
  ];
  return _t(
    le,
    [">"],
    [e],
    ye,
    he,
    be,
    De,
    oe,
    je,
    Ke,
    xe
  ).map((tt) => tt.join("")).join(",");
}
function Id(e) {
  if (!e.parentElement) return NaN;
  const t = it(e.parentElement), i = e.getAttribute("iedName"), o = e.getAttribute("intAddr"), a = Array.from(
    e.parentElement.querySelectorAll(`ExtRef[intAddr="${o}"]`)
  ).indexOf(e);
  if (o) return `${t}>${o}[${a}]`;
  const [
    l,
    p,
    h,
    b,
    M,
    T,
    j,
    q,
    H,
    ae,
    le,
    ye
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
  ].map((De) => e.getAttribute(De)), he = ye ? `${j}:${ye} ${q ?? ""}/${H ?? ""} ${ae ?? ""} ${le ?? ""}` : "", be = `${i} ${l}/${p ?? ""} ${h} ${b ?? ""} ${M} ${T || ""}`;
  return `${t}>${he ? he + " " : ""}${be}${o ? `@${o}` : ""}`;
}
function Ad(e, t) {
  const [i, o] = St(t), a = rt[e].parents.flatMap(
    (fe) => ft(fe, i).split(",")
  );
  if (o.endsWith("]")) {
    const [fe] = o.split("["), Te = [`[intAddr="${fe}"]`];
    return _t(a, [">"], [e], Te).map((ze) => ze.join("")).join(",");
  }
  let l, p, h, b, M, T, j, q, H, ae, le, ye, he, be;
  !o.includes(":") && !o.includes("@") ? [l, p, h, b, M, T, j] = o.split(/[ /]/) : o.includes(":") && !o.includes("@") ? [
    q,
    H,
    ae,
    le,
    ye,
    he,
    l,
    p,
    h,
    b,
    M,
    T,
    j
  ] = o.split(/[ /:]/) : !o.includes(":") && o.includes("@") ? [l, p, h, b, M, T, j, be] = o.split(/[ /@]/) : [
    q,
    H,
    ae,
    le,
    ye,
    he,
    l,
    p,
    h,
    b,
    M,
    T,
    j,
    be
  ] = o.split(/[ /:@]/);
  const [
    De,
    oe,
    je,
    Ke,
    xe,
    tt,
    F,
    Et,
    dt,
    Oe,
    Je,
    kt,
    Nt,
    Ve
  ] = [
    l ? [`[iedName="${l}"]`] : [":not([iedName])"],
    p ? [`[ldInst="${p}"]`] : [":not([ldInst])", '[ldInst=""]'],
    h ? [`[prefix="${h}"]`] : [":not([prefix])", '[prefix=""]'],
    b ? [`[lnClass="${b}"]`] : [":not([lnClass])"],
    M ? [`[lnInst="${M}"]`] : [":not([lnInst])", '[lnInst=""]'],
    T ? [`[doName="${T}"]`] : [":not([doName])"],
    j ? [`[daName="${j}"]`] : [":not([daName])", '[daName=""]'],
    q ? [`[serviceType="${q}"]`] : [":not([serviceType])", '[serviceType=""]'],
    H ? [`[srcCBName="${H}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    ae ? [`[srcLDInst="${ae}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    le ? [`[srcPrefix="${le}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    ye ? [`[srcLNClass="${ye}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    he ? [`[srcLNInst="${he}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    be ? [`[intAddr="${be}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return _t(
    a,
    [">"],
    [e],
    De,
    oe,
    je,
    Ke,
    xe,
    tt,
    F,
    Et,
    dt,
    Oe,
    Je,
    kt,
    Nt,
    Ve
  ).map((fe) => fe.join("")).join(",");
}
function Nd(e) {
  const [t, i, o] = ["prefix", "lnClass", "inst"].map((a) => e.getAttribute(a));
  return `${it(e.parentElement)}>${t ?? ""} ${i} ${o}`;
}
function Dd(e, t) {
  const [i, o] = St(t), a = rt[e].parents.flatMap(
    (j) => ft(j, i).split(",")
  ), [l, p, h] = o.split(" ");
  if (!p) return Qe;
  const [b, M, T] = [
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${p}"]`],
    [`[inst="${h}"]`]
  ];
  return _t(
    a,
    [">"],
    [e],
    b,
    M,
    T
  ).map((j) => j.join("")).join(",");
}
function Od(e) {
  const [t, i, o, a, l, p] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((h) => e.getAttribute(h));
  return `${it(e.parentElement)}>${i} ${t || ""} ${o}/${a ?? ""} ${l} ${p}`;
}
function Pd(e, t) {
  const [i, o] = St(t), a = rt[e].parents.flatMap(
    (he) => ft(he, i).split(",")
  ), [l, p, h, b, M, T] = o.split(/[ /]/), [
    j,
    q,
    H,
    ae,
    le,
    ye
  ] = [
    l ? [`[iedName="${l}"]`] : [":not([iedName])", '[iedName=""]'],
    p ? [`[apRef="${p}"]`] : [":not([apRef])", '[apRef=""]'],
    h ? [`[ldInst="${h}"]`] : [":not([ldInst])", '[ldInst=""]'],
    b ? [`[prefix="${b}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${M}"]`],
    T ? [`[lnInst="${T}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return _t(
    a,
    [">"],
    [e],
    j,
    q,
    H,
    ae,
    le,
    ye
  ).map((he) => he.join("")).join(",");
}
function ya(e) {
  const [t, i] = ["name", "ix"].map((o) => e.getAttribute(o));
  return `${it(e.parentElement)}>${t}${i ? "[" + i + "]" : ""}`;
}
function Do(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [o, a] = St(t), [l, p, h, b] = a.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!p) return Qe;
  if (i === 0) return `${e}[name="${p}"]`;
  const M = rt[e].parents.flatMap(
    (q) => q === "SDI" ? Do(q, o, i - 1).split(",") : ft(q, o).split(",")
  ).filter((q) => !q.startsWith(Qe));
  if (M.length === 0) return Qe;
  const [T, j] = [
    [`[name="${p}"]`],
    b ? [`[ix="${b}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return _t(M, [">"], [e], T, j).map((q) => q.join("")).join(",");
}
function Rd(e) {
  if (!e.parentElement) return NaN;
  const t = e.getAttribute("sGroup"), i = Array.from(e.parentElement.children).filter((o) => o.getAttribute("sGroup") === t).findIndex((o) => o.isSameNode(e));
  return `${it(e.parentElement)}>${t ? t + "." : ""} ${i}`;
}
function Fd(e, t) {
  const [i, o] = St(t), [a, l] = o.split(" "), p = parseFloat(l), h = rt[e].parents.flatMap(
    (T) => ft(T, i).split(",")
  ), [b, M] = [
    a ? [`[sGroup="${a}"]`] : [""],
    p ? [`:nth-child(${p + 1})`] : [""]
  ];
  return _t(h, [">"], [e], b, M).map((T) => T.join("")).join(",");
}
function Md(e) {
  const [t, i] = ["iedName", "apName"].map((o) => e.getAttribute(o));
  return `${t} ${i}`;
}
function jd(e, t) {
  const [i, o] = t.split(" ");
  return !i || !o ? Qe : `${e}[iedName="${i}"][apName="${o}"]`;
}
function ga(e) {
  const [t, i] = ["ldInst", "cbName"].map((o) => e.getAttribute(o));
  return `${t} ${i}`;
}
function va(e, t) {
  const [i, o] = t.split(" ");
  return !i || !o ? Qe : `${e}[ldInst="${i}"][cbName="${o}"]`;
}
function Ld(e) {
  if (!e.parentElement) return NaN;
  if (!e.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const t = e.getAttribute("type");
  return e.parentElement.children.length > 1 && t !== "Connection" && t !== "RedConn" ? NaN : `${it(e.parentElement)}>${t}`;
}
function $d(e, t) {
  const [i, o] = St(t), [a, l] = [
    rt[e].parents.flatMap((p) => ft(p, i).split(",")),
    o ? [`[type="${o}"]`] : [""]
  ];
  return _t(a, [">"], [e], l).map((p) => p.join("")).join(",");
}
function kd(e) {
  if (!e.parentElement) return NaN;
  const t = e.parentElement, i = e.getAttribute("type");
  if (t.tagName === "PhysConn") return `${it(e.parentElement)}>${i}`;
  const o = Array.from(e.parentElement.children).filter((a) => a.getAttribute("type") === i).findIndex((a) => a.isSameNode(e));
  return `${it(e.parentElement)}>${i} [${o}]`;
}
function Bd(e, t) {
  const [i, o] = St(t), [a] = o.split(" "), l = o && o.match(/\[([0-9]+)\]/) && o.match(/\[([0-9]+)\]/)[1] ? parseFloat(o.match(/\[([0-9]+)\]/)[1]) : NaN, [p, h, b] = [
    rt[e].parents.flatMap((M) => ft(M, i).split(",")),
    [`[type="${a}"]`],
    l ? [`:nth-child(${l + 1})`] : [""]
  ];
  return _t(p, [">"], [e], h, b).map((M) => M.join("")).join(",");
}
function qd(e) {
  return `${it(e.parentElement)}>${e.getAttribute("ord")}`;
}
function Kd(e, t) {
  const [i, o] = St(t);
  return `${ft("EnumType", i)}>${e}[ord="${o}"]`;
}
function Vd(e) {
  return `${it(e.parentElement)}>${e.getAttribute("type") || "8-MMS"}	${e.textContent}`;
}
function Ud(e, t) {
  const [i, o] = St(t), [a, l] = o.split("	"), [p] = [
    rt[e].parents.flatMap((h) => ft(h, i).split(","))
  ];
  return _t(p, [">"], [e], [`[type="${a}"]`], [">"], [l]).map((h) => h.join("")).join(",");
}
function Gd() {
  return "";
}
function Hd() {
  return ":root";
}
function Me(e) {
  return e.parentElement.tagName === "SCL" ? e.getAttribute("name") : `${it(e.parentElement)}>${e.getAttribute("name")}`;
}
function Re(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [o, a] = St(t);
  if (!a) return Qe;
  if (i === 0) return `${e}[name="${a}"]`;
  const l = rt[e].parents;
  if (!l) return Qe;
  const p = l.flatMap(
    (h) => rt[h].selector === rt.Substation.selector ? Re(h, o, i - 1).split(",") : ft(h, o).split(",")
  ).filter((h) => !h.startsWith(Qe));
  return p.length === 0 ? Qe : _t(p, [">"], [e], [`[name="${a}"]`]).map((h) => h.join("")).join(",");
}
function ce(e) {
  return it(e.parentElement).toString();
}
function ue(e, t) {
  const i = rt[e].parents;
  if (!i) return Qe;
  const o = i.flatMap((a) => ft(a, t).split(",")).filter((a) => !a.startsWith(Qe));
  return o.length === 0 ? Qe : _t(o, [">"], [e]).map((a) => a.join("")).join(",");
}
function ei(e) {
  return `#${e.id}`;
}
function ti(e, t) {
  const i = t.replace(/^#/, "");
  return i ? `${e}[id="${i}"]` : Qe;
}
const Dc = ["TransformerWinding", "ConductingEquipment"], Oc = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Dc
], Oo = ["Substation", "VoltageLevel", "Bay"], Pc = ["Process", "Line"], Rc = ["EqSubFunction", "EqFunction"], Wd = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Oc,
  ...Oo,
  ...Pc,
  ...Rc
], Fc = ["ConnectivityNode", ...Wd], Yd = ["GOOSESecurity", "SMVSecurity"], Xd = ["SubNetwork", ...Yd, ...Fc], Qd = ["BDA", "DA"], Jd = ["SampledValueControl", "GSEControl"], zd = ["LogControl", "ReportControl"], Zd = [...Jd, ...zd], ep = ["GSE", "SMV"], tp = [
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
  ...Zd,
  ...ep,
  ...Qd
], Pn = ["LN0", "LN"], np = ["Text", "Private", "Hitem", "AccessControl"], rp = ["Subject", "IssuerName"], ip = ["MinTime", "MaxTime"], op = ["LNodeType", "DOType", "DAType", "EnumType"], sp = [
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
], ap = ["DynDataSet", "ConfDataSet"], cp = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...ap
], up = ["ConfLogControl", "ConfSigRef"], lp = ["ReportSettings", "LogSettings", "GSESettings", "SMVSettings"], fp = ["SCL", ...Xd, ...tp, ...op], Mc = [
  ...fp,
  ...np,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...rp,
  ...ip,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Pn,
  ...sp,
  "DynAssociation",
  "SettingGroups",
  ...cp,
  ...up,
  ...lp,
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
], dp = new Set(Mc);
function ns(e) {
  return dp.has(e);
}
const Ei = ["Text", "Private"], mn = [...Ei], Xe = [...Ei], ni = [...Ei], ba = [...Xe, "Val"], jc = [...mn, "LNode"], gn = [...jc], Po = [...gn], ho = [
  ...gn,
  "PowerTransformer",
  "GeneralEquipment"
], _a = [...Po, "Terminal"], Sa = [...Xe, "Address"], Lc = [...mn], Ea = [...Lc, "IEDName"], wa = [
  ...Xe,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], xa = [
  ...gn,
  "GeneralEquipment",
  "Function"
], Ta = [...Lc, "TrgOps"], Ca = [
  ...gn,
  "GeneralEquipment",
  "EqSubFunction"
], rt = {
  AccessControl: {
    identity: ce,
    selector: ue,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: Me,
    selector: Re,
    parents: ["IED"],
    children: [
      ...mn,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: ce,
    selector: ue,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: bd,
    selector: _d,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: ce,
    selector: ue,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: Me,
    selector: Re,
    parents: ["DAType"],
    children: [...ba]
  },
  BitRate: {
    identity: ce,
    selector: ue,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: Me,
    selector: Re,
    parents: ["VoltageLevel"],
    children: [
      ...ho,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Od,
    selector: Pd,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: ce,
    selector: ue,
    parents: ["SCL"],
    children: [...Xe, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: Me,
    selector: Re,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [..._a, "EqFunction", "SubEquipment"]
  },
  ConfDataSet: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: ce,
    selector: ue,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: Md,
    selector: jd,
    parents: ["SubNetwork"],
    children: [...Xe, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: Me,
    selector: Re,
    parents: ["Bay", "Line"],
    children: [...jc]
  },
  DA: {
    identity: Me,
    selector: Re,
    parents: ["DOType"],
    children: [...ba]
  },
  DAI: {
    identity: ya,
    selector: Do,
    parents: ["DOI", "SDI"],
    children: [...Xe, "Val"]
  },
  DAType: {
    identity: ei,
    selector: ti,
    parents: ["DataTypeTemplates"],
    children: [...ni, "BDA", "ProtNs"]
  },
  DO: {
    identity: Me,
    selector: Re,
    parents: ["LNodeType"],
    children: [...Xe]
  },
  DOI: {
    identity: Me,
    selector: Re,
    parents: [...Pn],
    children: [...Xe, "SDI", "DAI"]
  },
  DOType: {
    identity: ei,
    selector: ti,
    parents: ["DataTypeTemplates"],
    children: [...ni, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: Me,
    selector: Re,
    parents: [...Pn],
    children: [...mn, "FCDA"]
  },
  DataSetDirectory: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: ce,
    selector: ue,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: ei,
    selector: ti,
    parents: ["DataTypeTemplates"],
    children: [...ni, "EnumVal"]
  },
  EnumVal: {
    identity: qd,
    selector: Kd,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: Me,
    selector: Re,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...Ca]
  },
  EqSubFunction: {
    identity: Me,
    selector: Re,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...Ca]
  },
  ExtRef: {
    identity: Id,
    selector: Ad,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Td,
    selector: Cd,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: Me,
    selector: Re,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...gn,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: Me,
    selector: Re,
    parents: [
      "SubFunction",
      "Function",
      ...Pc,
      ...Rc,
      ...Oo
    ],
    children: [...Po, "EqFunction"]
  },
  GetCBValues: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: Me,
    selector: Re,
    parents: ["AccessPoint"],
    children: [...mn, "Subject", "IssuerName"]
  },
  GSE: {
    identity: ga,
    selector: va,
    parents: ["ConnectedAP"],
    children: [...Sa, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: Me,
    selector: Re,
    parents: ["LN0"],
    children: [...Ea, "Protocol"]
  },
  GSESettings: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: ce,
    selector: ue,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: ce,
    selector: ue,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: pd,
    selector: hd,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: Me,
    selector: Re,
    parents: ["SCL"],
    children: [...Xe, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: wd,
    selector: xd,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: ce,
    selector: ue,
    parents: [...Pn],
    children: [...Xe, "ExtRef"]
  },
  IssuerName: {
    identity: ce,
    selector: ue,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: gd,
    selector: vd,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Sd,
    selector: Ed,
    parents: ["Server"],
    children: [...Xe, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Nd,
    selector: Dd,
    parents: ["AccessPoint", "LDevice"],
    children: [...wa]
  },
  LN0: {
    identity: ce,
    selector: ue,
    parents: ["LDevice"],
    children: [...wa, "GSEControl", "SampledValueControl", "SettingControl"]
  },
  LNode: {
    identity: md,
    selector: yd,
    parents: [...Fc],
    children: [...Xe]
  },
  LNodeType: {
    identity: ei,
    selector: ti,
    parents: ["DataTypeTemplates"],
    children: [...ni, "DO"]
  },
  Line: {
    identity: Me,
    selector: Re,
    parents: ["Process", "SCL"],
    children: [...xa, "Voltage", "ConductingEquipment"]
  },
  Log: {
    identity: Me,
    selector: Re,
    parents: [...Pn],
    children: [...Xe]
  },
  LogControl: {
    identity: Me,
    selector: Re,
    parents: [...Pn],
    children: [...Ta]
  },
  LogSettings: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: ce,
    selector: ue,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: ce,
    selector: ue,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: ce,
    selector: ue,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: ha,
    selector: ma,
    parents: ["TransformerWinding"],
    children: [...Xe]
  },
  OptFields: {
    identity: ce,
    selector: ue,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: kd,
    selector: Bd,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: Ld,
    selector: $d,
    parents: ["ConnectedAP"],
    children: [...Xe, "P"]
  },
  PowerTransformer: {
    identity: Me,
    selector: Re,
    parents: [...Oo],
    children: [...Po, "TransformerWinding", "SubEquipment", "EqFunction"]
  },
  Private: {
    identity: () => NaN,
    selector: () => Qe,
    parents: [],
    children: []
  },
  Process: {
    identity: Me,
    selector: Re,
    parents: ["Process", "SCL"],
    children: [
      ...xa,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Vd,
    selector: Ud,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: ce,
    selector: ue,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: Me,
    selector: Re,
    parents: [...Pn],
    children: [...Ta, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: ce,
    selector: ue,
    parents: ["ReportControl"],
    children: [...Xe, "ClientLN"]
  },
  SamplesPerSec: {
    identity: ce,
    selector: ue,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: Me,
    selector: Re,
    parents: ["LN0"],
    children: [...Ea, "SmvOpts"]
  },
  SecPerSamples: {
    identity: ce,
    selector: ue,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Gd,
    selector: Hd,
    parents: [],
    children: [
      ...Ei,
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
    identity: ya,
    selector: Do,
    parents: ["DOI", "SDI"],
    children: [...Xe, "SDI", "DAI"]
  },
  SDO: {
    identity: Me,
    selector: Re,
    parents: ["DOType"],
    children: [...mn]
  },
  Server: {
    identity: ce,
    selector: ue,
    parents: ["AccessPoint"],
    children: [...Xe, "Authentication", "LDevice", "Association"]
  },
  ServerAt: {
    identity: ce,
    selector: ue,
    parents: ["AccessPoint"],
    children: [...Xe]
  },
  Services: {
    identity: ce,
    selector: ue,
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
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: ce,
    selector: ue,
    parents: ["LN0"],
    children: [...Xe]
  },
  SettingGroups: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: ce,
    selector: ue,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: ce,
    selector: ue,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: ga,
    selector: va,
    parents: ["ConnectedAP"],
    children: [...Sa]
  },
  SmvOpts: {
    identity: ce,
    selector: ue,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: Me,
    selector: Re,
    parents: ["AccessPoint"],
    children: [...mn, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: Me,
    selector: Re,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...Dc
    ],
    children: [...gn, "EqFunction"]
  },
  SubFunction: {
    identity: Me,
    selector: Re,
    parents: ["SubFunction", "Function"],
    children: [
      ...gn,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: Me,
    selector: Re,
    parents: ["Communication"],
    children: [...mn, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: ce,
    selector: ue,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: Me,
    selector: Re,
    parents: ["SCL"],
    children: [...ho, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: Me,
    selector: Re,
    parents: ["TransformerWinding"],
    children: [...gn, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: ha,
    selector: ma,
    parents: [...Oc],
    children: [...Xe]
  },
  Text: {
    identity: ce,
    selector: ue,
    parents: Mc.filter((e) => e !== "Text" && e !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: ce,
    selector: ue,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: Me,
    selector: Re,
    parents: ["PowerTransformer"],
    children: [
      ..._a,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: ce,
    selector: ue,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: Rd,
    selector: Fd,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: ce,
    selector: ue,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: ce,
    selector: ue,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: Me,
    selector: Re,
    parents: ["Substation"],
    children: [...ho, "Voltage", "Bay", "Function"]
  }
};
function $c(e, t) {
  const i = e.tagName, o = Array.from(e.children);
  if (i === "Services" || i === "SettingGroups" || !ns(i))
    return o.find((h) => h.tagName === t) ?? null;
  const a = rt[i]?.children ?? [];
  let l = a.findIndex((h) => h === t);
  if (l < 0) return null;
  let p;
  for (; l < a.length && !p; )
    p = o.find((h) => h.tagName === a[l]), l++;
  return p ?? null;
}
function ft(e, t) {
  return typeof t != "string" ? Qe : ns(e) ? rt[e].selector(e, t) : e;
}
function it(e) {
  if (e === null) return NaN;
  if (e.closest("Private")) return NaN;
  const t = e.tagName;
  return ns(t) ? rt[t].identity(e) : NaN;
}
function _t(...e) {
  return e.reduce((t, i) => t.flatMap((o) => i.map((a) => [o, a].flat())), [[]]);
}
const pp = 99;
Array(pp).fill(1).map((e, t) => `${t + 1}`);
function hp(e) {
  return dd(e) ? Ia(e) : e.actions.map(Ia);
}
function Ia(e) {
  if (ad(e))
    return mp(e);
  if (cd(e))
    return yp(e);
  if (fd(e))
    return gp(e);
  if (ud(e))
    return vp(e);
  if (ld(e))
    return bp(e);
  throw console.error("Unknown action type", e), new Error("Unknown action type");
}
function mp(e) {
  let t = null;
  return e.new.reference === void 0 && e.new.element instanceof Element && e.new.parent instanceof Element ? t = $c(e.new.parent, e.new.element.tagName) : t = e.new.reference ?? null, {
    parent: e.new.parent,
    node: e.new.element,
    reference: t
  };
}
function yp(e) {
  return {
    node: e.old.element
  };
}
function gp(e) {
  const t = {};
  Array.from(e.element.attributes).forEach((o) => {
    t[o.name] = null;
  });
  const i = {
    ...t,
    ...e.newAttributes
  };
  return {
    element: e.element,
    attributes: i
  };
}
function vp(e) {
  return e.new.reference === void 0 && (e.new.reference = $c(e.new.parent, e.old.element.tagName)), {
    parent: e.new.parent,
    node: e.old.element,
    reference: e.new.reference ?? null
  };
}
function bp(e) {
  const t = e.old.element.children, i = Array.from(t).map((b) => b.cloneNode(!0)), o = e.new.element.cloneNode(!0);
  o.append(...Array.from(i));
  const a = e.old.element.parentElement;
  if (!a)
    throw new Error("Replace action called without parent in old element");
  const l = e.old.element.nextSibling;
  return [{ node: e.old.element }, {
    parent: a,
    node: o,
    reference: l
  }];
}
function _p(e) {
  return e instanceof Array;
}
function Sp(e) {
  return e.parent !== void 0;
}
function Ep(e) {
  return e !== null && typeof e != "string";
}
function wp(e) {
  return e.element !== void 0;
}
function xp(e) {
  return e.parent === void 0 && e.node !== void 0;
}
function kc(e) {
  if (_p(e))
    return e.map(kc);
  if (xp(e))
    return e;
  if (Sp(e))
    return e;
  if (wp(e))
    return Tp(e);
  throw new Error("Unknown edit type");
}
function Tp(e) {
  const t = {}, i = {};
  return Object.entries(e.attributes).forEach(([o, a]) => {
    if (Ep(a)) {
      const l = a.namespaceURI;
      if (!l) return;
      i[l] || (i[l] = {}), i[l][o] = a.value;
    } else t[o] = a;
  }), { element: e.element, attributes: t, attributesNS: i };
}
function Bc(e) {
  return typeof e != "object" || e === null ? !1 : Object.entries(e).every(([t, i]) => typeof t == "string" && (i === null || typeof i == "string"));
}
function Cp(e) {
  return typeof e != "object" || e === null ? !1 : Object.entries(e).every(([t, i]) => typeof t == "string" && Bc(i));
}
function qc(e) {
  return e instanceof Array && e.every((t) => Ip(t));
}
function Kc(e) {
  return e.element instanceof Element && typeof e.textContent == "string";
}
function wi(e) {
  return e.parent === void 0 && e.node instanceof Node;
}
function Vc(e) {
  const t = e;
  return t.element instanceof Element && (Bc(t.attributes) || Cp(t.attributesNS));
}
function xi(e) {
  return (e.parent instanceof Element || e.parent instanceof Document || e.parent instanceof DocumentFragment) && e.node instanceof Node && (e.reference instanceof Node || e.reference === null);
}
function Ip(e) {
  return qc(e) ? !0 : Vc(e) || Kc(e) || xi(e) || wi(e);
}
function Uc(e) {
  return e !== null && typeof e == "object" && "namespaceURI" in e && typeof e.namespaceURI == "string" && "value" in e && typeof e.value == "string";
}
function Ap(e) {
  return e === null || typeof e != "object" ? !1 : Object.entries(e).every(([t, i]) => typeof t == "string" && (i === null || typeof i == "string" || Uc(i)));
}
function Gc(e) {
  return e instanceof Array && e.every(Np);
}
function Hc(e) {
  return e.element instanceof Element && Ap(e.attributes);
}
function Np(e) {
  return Gc(e) ? !0 : Hc(e) || xi(e) || wi(e);
}
function Dp(e) {
  let t = {};
  const i = {};
  return Object.entries(e.attributes).forEach(([o, a]) => {
    if (Uc(a)) {
      const l = a.namespaceURI;
      if (!l)
        return;
      i[l] || (i[l] = {}), i[l] = { ...i[l], [o]: a.value };
    } else
      t = { ...t, [o]: a };
  }), { element: e.element, attributes: t, attributesNS: i };
}
function Wc(e) {
  return wi(e) || xi(e) ? e : Hc(e) ? Dp(e) : Gc(e) ? e.map(Wc) : [];
}
function Op({
  element: e,
  textContent: t
}) {
  const { childNodes: i } = e, o = Array.from(i).map((l) => ({
    parent: e,
    node: l,
    reference: null
  }));
  return e.textContent = t, [{ element: e, textContent: "" }, ...o];
}
function Pp({
  element: e,
  attributes: t = {},
  attributesNS: i = {}
}) {
  const o = { ...t }, a = { ...i };
  if (t && Object.keys(t).reverse().forEach((l) => {
    o[l] = e.getAttribute(l);
  }), t)
    for (const l of Object.entries(t))
      try {
        const [p, h] = l;
        h === null ? e.removeAttribute(p) : e.setAttribute(p, h);
      } catch {
        delete o[l[0]];
      }
  if (i && Object.entries(i).forEach(([l, p]) => {
    Object.keys(p).reverse().forEach((h) => {
      a[l] = {
        ...a[l],
        [h]: e.getAttributeNS(l, h.split(":").pop())
      };
    });
  }), i)
    for (const l of Object.entries(i)) {
      const [p, h] = l;
      for (const b of Object.entries(h))
        try {
          const [M, T] = b;
          T === null ? e.removeAttributeNS(p, M.split(":").pop()) : e.setAttributeNS(p, M, T);
        } catch {
          delete a[p][b[0]];
        }
    }
  return {
    element: e,
    attributes: o,
    attributesNS: a
  };
}
function Rp({ node: e }) {
  const { parentNode: t, nextSibling: i } = e;
  return t ? (t.removeChild(e), {
    node: e,
    parent: t,
    reference: i
  }) : [];
}
function Fp({ parent: e, node: t, reference: i }) {
  try {
    const { parentNode: o, nextSibling: a } = t;
    return e.insertBefore(t, i), o ? {
      node: t,
      parent: o,
      reference: a
    } : { node: t };
  } catch {
    return [];
  }
}
function si(e) {
  return xi(e) ? Fp(e) : wi(e) ? Rp(e) : Vc(e) ? Pp(e) : Kc(e) ? Op(e) : qc(e) ? e.map((t) => si(t)).reverse().flat(1 / 0) : [];
}
class Mp {
  constructor() {
    this.past = [], this.future = [], this.#e = [];
  }
  commit(t, { title: i, squash: o } = {}) {
    const a = o && this.past.length ? this.past[this.past.length - 1] : { undo: [], redo: [] }, l = si(t);
    return a.undo.unshift(...[l].flat(1 / 0)), a.redo.push(...[t].flat(1 / 0)), i && (a.title = i), o && this.past.length && this.past.pop(), this.past.push(a), this.future = [], this.#e.forEach((p) => p(a)), a;
  }
  undo() {
    const t = this.past.pop();
    if (t)
      return si(t.undo), this.future.unshift(t), t;
  }
  redo() {
    const t = this.future.shift();
    if (t)
      return si(t.redo), this.past.push(t), t;
  }
  #e;
  subscribe(t) {
    const i = this.#e.length;
    return this.#e.push(t), () => (this.#e.splice(i, 1), t);
  }
}
const jp = /* @__PURE__ */ Za({
  __name: "oscd-loader",
  props: {
    doc: {}
  },
  setup(e) {
    const t = e, i = So(0), o = So(), a = new Mp();
    li(p), li(l), Xl(() => {
      t.doc && M(t.doc);
    });
    async function l() {
      try {
        if (!o.value)
          return;
        const ae = (await import("https://omicronenergyoss.github.io/oscd-editor-sld/oscd-editor-sld.js")).default;
        class le extends ae {
        }
        const ye = `oscd-plugin-${Date.now()}`;
        customElements.define(ye, le);
        const he = document.createElement(ye);
        o.value.innerHTML = "", o.value.appendChild(he), j(a), b(document.head), t.doc && (M(t.doc), T(i.value));
      } catch (q) {
        console.error("Failed to load plugin:", q);
      }
    }
    function p() {
      o.value && (o.value.addEventListener("editor-action", (q) => {
        console.debug("editor-action", { event: q }), h(kc(hp(q.detail.action)));
      }), o.value.addEventListener("oscd-edit", (q) => {
        console.debug("oscd-edit-v1", { event: q });
        const H = q.detail.edit ?? q.detail;
        h(Wc(H));
      }), o.value.addEventListener("oscd-edit-v2", (q) => h(q)));
    }
    function h(q) {
      console.debug("oscd-loader-v2", { event: q }), a.commit(q), i.value += 1, T(i.value);
    }
    function b(q) {
      const H = document.createElement("link");
      H.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&family=Roboto+Mono:wght@400;500&display=swap", H.rel = "stylesheet", q.appendChild(H);
      const ae = document.createElement("link");
      ae.href = "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined", ae.rel = "stylesheet", q.appendChild(ae);
    }
    function M(q) {
      const H = o.value?.firstElementChild;
      H && (H.doc = q);
    }
    function T(q) {
      const H = o.value?.firstElementChild;
      H && (H.editCount = i.value, H.docVersion = i.value);
    }
    function j(q) {
      const H = o.value?.firstElementChild;
      H && (H.editor = q);
    }
    return (q, H) => (bc(), sf("div", {
      ref_key: "pluginContainerRef",
      ref: o
    }, null, 512));
  }
}), Lp = /* @__PURE__ */ Za({
  __name: "app",
  props: {
    api: {}
  },
  setup(e) {
    const t = e;
    let i = So(), o = () => {
    };
    li(() => {
      o = t.api.activeFileName.subscribe(async (l, p) => {
        console.debug("oscd-loader", { newFile: l }), a(l);
      }), a(t.api.activeFileName.value);
    }), Qo(() => {
      o();
    });
    async function a(l) {
      if (console.debug("loading filename", { fileName: l }), !l)
        return;
      const { xmlDocument: p } = await id({ databaseName: l });
      i.value = p;
    }
    return (l, p) => (bc(), af(jp, { doc: Ha(i) }, null, 8, ["doc"]));
  }
}), $p = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [o, a] of t)
    i[o] = a;
  return i;
}, kp = /* @__PURE__ */ $p(Lp, [["__scopeId", "data-v-ed807d70"]]);
function Jp(e, t) {
  if (!document.getElementById(e)) {
    console.error({ msg: "could not found root element", rootId: e });
    return;
  }
  Uf(kp, { api: t }).mount(`#${e}`);
}
export {
  Jp as default
};
