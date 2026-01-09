(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`:host{display:block;font-family:var(--oscd-text-font, "Roboto");color:var(--mdc-theme-on-surface);background-color:var(--mdc-theme-surface)}h3{color:var(--primary)}#root-container{padding:16px}*{--base03: #002b36;--base02: #073642;--base01: #586e75;--base00: #657b83;--base0: #839496;--base1: #93a1a1;--base2: #eee8d5;--base3: #fdf6e3;--yellow: #b58900;--orange: #cb4b16;--red: #dc322f;--magenta: #d33682;--violet: #6c71c4;--blue: #268bd2;--cyan: #2aa198;--green: #859900;--primary: var(--cyan);--secondary: var(--violet);--mdc-theme-primary: var(--primary);--mdc-theme-secondary: var(--secondary);--mdc-theme-background: var(--base3);--mdc-theme-surface: var(--base3);--mdc-theme-on-primary: var(--base2);--mdc-theme-on-secondary: var(--base2);--mdc-theme-on-background: var(--base00);--mdc-theme-on-surface: var(--base00);--mdc-theme-text-primary-on-background: var(--base01);--mdc-theme-text-secondary-on-background: var(--base00);--mdc-theme-text-icon-on-background: var(--base00);--mdc-theme-error: var(--red);--mdc-button-disabled-ink-color: var(--base1);--mdc-drawer-heading-ink-color: var(--base00);--mdc-text-field-fill-color: var(--base2);--mdc-text-field-disabled-fill-color: var(--base3);--mdc-text-field-ink-color: var(--base00);--mdc-text-field-label-ink-color: var(--base00);--mdc-select-fill-color: var(--base2);--mdc-select-disabled-fill-color: var(--base3);--mdc-select-ink-color: var(--base00);--mdc-dialog-heading-ink-color: var(--base00);--mdc-icon-font: "Material Icons Outlined";--oscd-primary: var(--oscd-theme-primary, var(--cyan));--oscd-secondary: var(--oscd-theme-secondary, var(--violet));--oscd-error: var(--oscd-theme-error, var(--red));--oscd-base03: var(--oscd-theme-base03, var(--base03));--oscd-base02: var(--oscd-theme-base02, var(--base02));--oscd-base01: var(--oscd-theme-base01, var(--base01));--oscd-base00: var(--oscd-theme-base00, var(--base00));--oscd-base0: var(--oscd-theme-base0, var(--base0));--oscd-base1: var(--oscd-theme-base1, var(--base1));--oscd-base2: var(--oscd-theme-base2, var(--base2));--oscd-base3: var(--oscd-theme-base3, var(--base3));--oscd-text-font: var(--oscd-theme-text-font, "Roboto");--oscd-icon-font: var(--oscd-theme-icon-font, "Material Icons")}.mdc-drawer span.mdc-drawer__title{color:var(--mdc-theme-text-primary-on-background)!important}abbr{text-decoration:none;border-bottom:none}mwc-textfield[iconTrailing=search]{--mdc-shape-small: 28px}/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */@layer theme{[data-v-37ddea6c]:root,[data-v-37ddea6c]:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{[data-v-37ddea6c],[data-v-37ddea6c]:after,[data-v-37ddea6c]:before,[data-v-37ddea6c]::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-v-37ddea6c]::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html[data-v-37ddea6c],[data-v-37ddea6c]:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr[data-v-37ddea6c]{height:0;color:inherit;border-top-width:1px}abbr[data-v-37ddea6c]:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1[data-v-37ddea6c],h2[data-v-37ddea6c],h3[data-v-37ddea6c],h4[data-v-37ddea6c],h5[data-v-37ddea6c],h6[data-v-37ddea6c]{font-size:inherit;font-weight:inherit}a[data-v-37ddea6c]{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b[data-v-37ddea6c],strong[data-v-37ddea6c]{font-weight:bolder}code[data-v-37ddea6c],kbd[data-v-37ddea6c],samp[data-v-37ddea6c],pre[data-v-37ddea6c]{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small[data-v-37ddea6c]{font-size:80%}sub[data-v-37ddea6c],sup[data-v-37ddea6c]{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub[data-v-37ddea6c]{bottom:-.25em}sup[data-v-37ddea6c]{top:-.5em}table[data-v-37ddea6c]{text-indent:0;border-color:inherit;border-collapse:collapse}[data-v-37ddea6c]:-moz-focusring{outline:auto}progress[data-v-37ddea6c]{vertical-align:baseline}summary[data-v-37ddea6c]{display:list-item}ol[data-v-37ddea6c],ul[data-v-37ddea6c],menu[data-v-37ddea6c]{list-style:none}img[data-v-37ddea6c],svg[data-v-37ddea6c],video[data-v-37ddea6c],canvas[data-v-37ddea6c],audio[data-v-37ddea6c],iframe[data-v-37ddea6c],embed[data-v-37ddea6c],object[data-v-37ddea6c]{vertical-align:middle;display:block}img[data-v-37ddea6c],video[data-v-37ddea6c]{max-width:100%;height:auto}button[data-v-37ddea6c],input[data-v-37ddea6c],select[data-v-37ddea6c],optgroup[data-v-37ddea6c],textarea[data-v-37ddea6c]{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-v-37ddea6c]::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup[data-v-37ddea6c]{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option[data-v-37ddea6c]{padding-inline-start:20px}[data-v-37ddea6c]::file-selector-button{margin-inline-end:4px}[data-v-37ddea6c]::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){[data-v-37ddea6c]::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-v-37ddea6c]::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea[data-v-37ddea6c]{resize:vertical}[data-v-37ddea6c]::-webkit-search-decoration{-webkit-appearance:none}[data-v-37ddea6c]::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-v-37ddea6c]::-webkit-datetime-edit{display:inline-flex}[data-v-37ddea6c]::-webkit-datetime-edit-fields-wrapper{padding:0}[data-v-37ddea6c]::-webkit-datetime-edit{padding-block:0}[data-v-37ddea6c]::-webkit-datetime-edit-year-field{padding-block:0}[data-v-37ddea6c]::-webkit-datetime-edit-month-field{padding-block:0}[data-v-37ddea6c]::-webkit-datetime-edit-day-field{padding-block:0}[data-v-37ddea6c]::-webkit-datetime-edit-hour-field{padding-block:0}[data-v-37ddea6c]::-webkit-datetime-edit-minute-field{padding-block:0}[data-v-37ddea6c]::-webkit-datetime-edit-second-field{padding-block:0}[data-v-37ddea6c]::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-v-37ddea6c]::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-v-37ddea6c]::-webkit-calendar-picker-indicator{line-height:1}[data-v-37ddea6c]:-moz-ui-invalid{box-shadow:none}button[data-v-37ddea6c],input[data-v-37ddea6c]:where([type=button],[type=reset],[type=submit]){appearance:button}[data-v-37ddea6c]::file-selector-button{appearance:button}[data-v-37ddea6c]::-webkit-inner-spin-button{height:auto}[data-v-37ddea6c]::-webkit-outer-spin-button{height:auto}[hidden][data-v-37ddea6c]:where(:not([hidden=until-found])){display:none!important}:where([data-v-37ddea6c]:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where([data-v-37ddea6c]:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open][data-v-37ddea6c],.modal-open[data-v-37ddea6c],.modal-toggle:checked+.modal[data-v-37ddea6c]):not(.modal-start,.modal-end){scrollbar-gutter:stable}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}[data-v-37ddea6c]:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}[data-v-37ddea6c]:root,[data-theme][data-v-37ddea6c]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}[data-v-37ddea6c]:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){[data-v-37ddea6c]:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}[data-v-37ddea6c]:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}:where([data-v-37ddea6c]:root),[data-v-37ddea6c]:root:has(input.theme-controller[value=ocean-light]:checked),[data-theme=ocean-light][data-v-37ddea6c]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(37% 0 0);--color-primary:oklch(58.13% .0903 209.8);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(65.24% .0821 207.95);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(98% .001 106.423);--color-neutral:oklch(55% .013 58.071);--color-neutral-content:oklch(98% .031 120.757);--color-info:oklch(70% .165 254.624);--color-info-content:oklch(98% .001 106.423);--color-success:oklch(72% .219 149.579);--color-success-content:oklch(98% .001 106.423);--color-warning:oklch(87% .169 91.605);--color-warning-content:oklch(98% .001 106.423);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(98% .001 106.423);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.21875rem;--size-field:.21875rem;--border:1.5px;--depth:1;--noise:1;--border-color:var(--color-base-300)}}@layer components;@layer utilities{.table[data-v-37ddea6c]{border-radius:var(--radius-box);text-align:left;width:100%;font-size:.875rem;position:relative}.table[data-v-37ddea6c]:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media (hover:hover){:is(.table tr.row-hover[data-v-37ddea6c],.table tr.row-hover[data-v-37ddea6c]:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table[data-v-37ddea6c] :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table[data-v-37ddea6c] :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table[data-v-37ddea6c] :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.table[data-v-37ddea6c] :where(thead,tfoot){font-size:.875rem;font-weight:600}.table[data-v-37ddea6c] :where(tfoot){border-top:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table[data-v-37ddea6c] :where(tfoot){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.table[data-v-37ddea6c] :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table[data-v-37ddea6c] :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table[data-v-37ddea6c] :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table[data-v-37ddea6c] :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table[data-v-37ddea6c] :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.relative[data-v-37ddea6c]{position:relative}.join[data-v-37ddea6c]{--join-ss:0;--join-se:0;--join-es:0;--join-ee:0;align-items:stretch;display:inline-flex}.join[data-v-37ddea6c] :where(.join-item){border-start-start-radius:var(--join-ss,0);border-start-end-radius:var(--join-se,0);border-end-end-radius:var(--join-ee,0);border-end-start-radius:var(--join-es,0)}.join[data-v-37ddea6c] :where(.join-item) *{--join-ss:var(--radius-field);--join-se:var(--radius-field);--join-es:var(--radius-field);--join-ee:var(--radius-field)}.join>.join-item[data-v-37ddea6c]:where(:first-child),.join[data-v-37ddea6c] :first-child:not(:last-child) :where(.join-item){--join-ss:var(--radius-field);--join-se:0;--join-es:var(--radius-field);--join-ee:0}.join>.join-item[data-v-37ddea6c]:where(:last-child),.join[data-v-37ddea6c] :last-child:not(:first-child) :where(.join-item){--join-ss:0;--join-se:var(--radius-field);--join-es:0;--join-ee:var(--radius-field)}.join>.join-item[data-v-37ddea6c]:where(:only-child),.join[data-v-37ddea6c] :only-child :where(.join-item){--join-ss:var(--radius-field);--join-se:var(--radius-field);--join-es:var(--radius-field);--join-ee:var(--radius-field)}.inline[data-v-37ddea6c]{display:inline}.table[data-v-37ddea6c]{display:table}.link[data-v-37ddea6c]{cursor:pointer;text-decoration-line:underline}.link[data-v-37ddea6c]:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link[data-v-37ddea6c]:focus{outline-offset:2px;outline:2px solid #0000}}.link[data-v-37ddea6c]:focus-visible{outline-offset:2px;outline:2px solid}.flex-wrap[data-v-37ddea6c]{flex-wrap:wrap}}[data-v-37ddea6c]:root{--color-ocean-gray-00:#fff;--color-ocean-gray-25:#fafbfb;--color-ocean-gray-50:#f5f6f7;--color-ocean-gray-75:#eaeeef;--color-ocean-gray-100:#e1e4e6;--color-ocean-gray-150:#c6ced1;--color-ocean-gray-200:#bac1c4;--color-ocean-gray-250:#9fadb2;--color-ocean-gray-300:#889499;--color-ocean-gray-350:#72858c;--color-ocean-gray-400:#617177;--color-ocean-gray-450:#3f555e;--color-ocean-gray-500:#394d55;--color-ocean-gray-550:#34464d;--color-ocean-gray-600:#2e3e44;--color-ocean-gray-650:#27353b;--color-ocean-gray-700:#222e33;--color-ocean-gray-750:#1f272b;--color-ocean-gray-800:#171f22;--color-ocean-gray-850:#11171a;--color-ocean-gray-900:#0b0f11;--color-chart-1:#f7931e;--color-chart-2:#40535b;--color-chart-3:#2798aa;--color-chart-4:#6da89c;--color-chart-5:#a4cadd;--color-chart-6:#97b42d;--color-chart-7:#ffcb05;--color-chart-8:#ee652e;--color-chart-9:#528694;--color-chart-10:#a10f3b}header[data-v-37ddea6c]{line-height:1.5}.logo[data-v-37ddea6c]{margin:0 auto 2rem;display:block}@media (min-width:1024px){header[data-v-37ddea6c]{padding-right:calc(var(--section-gap)/2);place-items:center;display:flex}.logo[data-v-37ddea6c]{margin:0 2rem 0 0}header .wrapper[data-v-37ddea6c]{flex-wrap:wrap;place-items:flex-start;display:flex}}@keyframes dropdown-37ddea6c{0%{opacity:0}}@keyframes radio-37ddea6c{0%{padding:5px}50%{padding:3px}}@keyframes toast-37ddea6c{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes rating-37ddea6c{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes skeleton-37ddea6c{0%{background-position:150%}to{background-position:-50%}}@keyframes progress-37ddea6c{50%{background-position-x:-115%}}`)),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Jr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) t[o] = 1;
  return (o) => o in t;
}
const Pt = Object.freeze({}), Ao = Object.freeze([]), Sn = () => {
}, Uf = () => !1, Sa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), us = (e) => e.startsWith("onUpdate:"), sn = Object.assign, xu = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, Gf = Object.prototype.hasOwnProperty, _t = (e, t) => Gf.call(e, t), ut = Array.isArray, Io = (e) => _s(e) === "[object Map]", Hf = (e) => _s(e) === "[object Set]", ct = (e) => typeof e == "function", tn = (e) => typeof e == "string", Ro = (e) => typeof e == "symbol", $t = (e) => e !== null && typeof e == "object", Eu = (e) => ($t(e) || ct(e)) && ct(e.then) && ct(e.catch), Wf = Object.prototype.toString, _s = (e) => Wf.call(e), Tu = (e) => _s(e).slice(8, -1), Yf = (e) => _s(e) === "[object Object]", Cu = (e) => tn(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ua = /* @__PURE__ */ Jr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Qf = /* @__PURE__ */ Jr(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ss = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (o) => t[o] || (t[o] = e(o));
}, zf = /-(\w)/g, fr = Ss(
  (e) => e.replace(zf, (t, o) => o ? o.toUpperCase() : "")
), Xf = /\B([A-Z])/g, Ii = Ss(
  (e) => e.replace(Xf, "-$1").toLowerCase()
), xs = Ss((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ji = Ss(
  (e) => e ? `on${xs(e)}` : ""
), Ci = (e, t) => !Object.is(e, t), na = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, ma = (e, t, o, a = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: o
  });
}, Jf = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ec;
const xa = () => ec || (ec = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Au(e) {
  if (ut(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], c = tn(a) ? nd(a) : Au(a);
      if (c)
        for (const d in c)
          t[d] = c[d];
    }
    return t;
  } else if (tn(e) || $t(e))
    return e;
}
const Zf = /;(?![^(]*\))/g, ed = /:([^]+)/, td = /\/\*[^]*?\*\//g;
function nd(e) {
  const t = {};
  return e.replace(td, "").split(Zf).forEach((o) => {
    if (o) {
      const a = o.split(ed);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function Iu(e) {
  let t = "";
  if (tn(e))
    t = e;
  else if (ut(e))
    for (let o = 0; o < e.length; o++) {
      const a = Iu(e[o]);
      a && (t += a + " ");
    }
  else if ($t(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
const rd = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", id = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", od = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", ad = /* @__PURE__ */ Jr(rd), sd = /* @__PURE__ */ Jr(id), ud = /* @__PURE__ */ Jr(od), cd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ld = /* @__PURE__ */ Jr(cd);
function ol(e) {
  return !!e || e === "";
}
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Rr(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Mn;
class fd {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Mn, !t && Mn && (this.index = (Mn.scopes || (Mn.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, o;
      if (this.scopes)
        for (t = 0, o = this.scopes.length; t < o; t++)
          this.scopes[t].pause();
      for (t = 0, o = this.effects.length; t < o; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, o;
      if (this.scopes)
        for (t = 0, o = this.scopes.length; t < o; t++)
          this.scopes[t].resume();
      for (t = 0, o = this.effects.length; t < o; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const o = Mn;
      try {
        return Mn = this, t();
      } finally {
        Mn = o;
      }
    } else
      Rr("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Mn, Mn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Mn = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let o, a;
      for (o = 0, a = this.effects.length; o < a; o++)
        this.effects[o].stop();
      for (this.effects.length = 0, o = 0, a = this.cleanups.length; o < a; o++)
        this.cleanups[o]();
      if (this.cleanups.length = 0, this.scopes) {
        for (o = 0, a = this.scopes.length; o < a; o++)
          this.scopes[o].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const c = this.parent.scopes.pop();
        c && c !== this && (this.parent.scopes[this.index] = c, c.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function dd() {
  return Mn;
}
let It;
const Vs = /* @__PURE__ */ new WeakSet();
class al {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Mn && Mn.active && Mn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Vs.has(this) && (Vs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ul(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, tc(this), cl(this);
    const t = It, o = dr;
    It = this, dr = !0;
    try {
      return this.fn();
    } finally {
      It !== this && Rr(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), ll(this), It = t, dr = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ou(t);
      this.deps = this.depsTail = void 0, tc(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Vs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Zs(this) && this.run();
  }
  get dirty() {
    return Zs(this);
  }
}
let sl = 0, ca, la;
function ul(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = la, la = e;
    return;
  }
  e.next = ca, ca = e;
}
function Pu() {
  sl++;
}
function Du() {
  if (--sl > 0)
    return;
  if (la) {
    let t = la;
    for (la = void 0; t; ) {
      const o = t.next;
      t.next = void 0, t.flags &= -9, t = o;
    }
  }
  let e;
  for (; ca; ) {
    let t = ca;
    for (ca = void 0; t; ) {
      const o = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (a) {
          e || (e = a);
        }
      t = o;
    }
  }
  if (e) throw e;
}
function cl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ll(e) {
  let t, o = e.depsTail, a = o;
  for (; a; ) {
    const c = a.prevDep;
    a.version === -1 ? (a === o && (o = c), Ou(a), pd(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = c;
  }
  e.deps = t, e.depsTail = o;
}
function Zs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (fl(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function fl(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ya) || (e.globalVersion = ya, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Zs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, o = It, a = dr;
  It = e, dr = !0;
  try {
    cl(e);
    const c = e.fn(e._value);
    (t.version === 0 || Ci(c, e._value)) && (e.flags |= 128, e._value = c, t.version++);
  } catch (c) {
    throw t.version++, c;
  } finally {
    It = o, dr = a, ll(e), e.flags &= -3;
  }
}
function Ou(e, t = !1) {
  const { dep: o, prevSub: a, nextSub: c } = e;
  if (a && (a.nextSub = c, e.prevSub = void 0), c && (c.prevSub = a, e.nextSub = void 0), o.subsHead === e && (o.subsHead = c), o.subs === e && (o.subs = a, !a && o.computed)) {
    o.computed.flags &= -5;
    for (let d = o.computed.deps; d; d = d.nextDep)
      Ou(d, !0);
  }
  !t && !--o.sc && o.map && o.map.delete(o.key);
}
function pd(e) {
  const { prevDep: t, nextDep: o } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
}
let dr = !0;
const dl = [];
function hr() {
  dl.push(dr), dr = !1;
}
function mr() {
  const e = dl.pop();
  dr = e === void 0 ? !0 : e;
}
function tc(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const o = It;
    It = void 0;
    try {
      t();
    } finally {
      It = o;
    }
  }
}
let ya = 0;
class hd {
  constructor(t, o) {
    this.sub = t, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ru {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, this.subsHead = void 0;
  }
  track(t) {
    if (!It || !dr || It === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== It)
      o = this.activeLink = new hd(It, this), It.deps ? (o.prevDep = It.depsTail, It.depsTail.nextDep = o, It.depsTail = o) : It.deps = It.depsTail = o, pl(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = It.depsTail, o.nextDep = void 0, It.depsTail.nextDep = o, It.depsTail = o, It.deps === o && (It.deps = a);
    }
    return It.onTrack && It.onTrack(
      sn(
        {
          effect: It
        },
        t
      )
    ), o;
  }
  trigger(t) {
    this.version++, ya++, this.notify(t);
  }
  notify(t) {
    Pu();
    try {
      for (let o = this.subsHead; o; o = o.nextSub)
        o.sub.onTrigger && !(o.sub.flags & 8) && o.sub.onTrigger(
          sn(
            {
              effect: o.sub
            },
            t
          )
        );
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      Du();
    }
  }
}
function pl(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep)
        pl(a);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const eu = /* @__PURE__ */ new WeakMap(), to = Symbol(
  "Object iterate"
), tu = Symbol(
  "Map keys iterate"
), va = Symbol(
  "Array iterate"
);
function hn(e, t, o) {
  if (dr && It) {
    let a = eu.get(e);
    a || eu.set(e, a = /* @__PURE__ */ new Map());
    let c = a.get(o);
    c || (a.set(o, c = new Ru()), c.map = a, c.key = o), c.track({
      target: e,
      type: t,
      key: o
    });
  }
}
function Ir(e, t, o, a, c, d) {
  const y = eu.get(e);
  if (!y) {
    ya++;
    return;
  }
  const g = (x) => {
    x && x.trigger({
      target: e,
      type: t,
      key: o,
      newValue: a,
      oldValue: c,
      oldTarget: d
    });
  };
  if (Pu(), t === "clear")
    y.forEach(g);
  else {
    const x = ut(e), $ = x && Cu(o);
    if (x && o === "length") {
      const N = Number(a);
      y.forEach((O, ee) => {
        (ee === "length" || ee === va || !Ro(ee) && ee >= N) && g(O);
      });
    } else
      switch ((o !== void 0 || y.has(void 0)) && g(y.get(o)), $ && g(y.get(va)), t) {
        case "add":
          x ? $ && g(y.get("length")) : (g(y.get(to)), Io(e) && g(y.get(tu)));
          break;
        case "delete":
          x || (g(y.get(to)), Io(e) && g(y.get(tu)));
          break;
        case "set":
          Io(e) && g(y.get(to));
          break;
      }
  }
  Du();
}
function xo(e) {
  const t = mt(e);
  return t === e ? t : (hn(t, "iterate", va), jn(e) ? t : t.map(In));
}
function Nu(e) {
  return hn(e = mt(e), "iterate", va), e;
}
const md = {
  __proto__: null,
  [Symbol.iterator]() {
    return qs(this, Symbol.iterator, In);
  },
  concat(...e) {
    return xo(this).concat(
      ...e.map((t) => ut(t) ? xo(t) : t)
    );
  },
  entries() {
    return qs(this, "entries", (e) => (e[1] = In(e[1]), e));
  },
  every(e, t) {
    return Yr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Yr(this, "filter", e, t, (o) => o.map(In), arguments);
  },
  find(e, t) {
    return Yr(this, "find", e, t, In, arguments);
  },
  findIndex(e, t) {
    return Yr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Yr(this, "findLast", e, t, In, arguments);
  },
  findLastIndex(e, t) {
    return Yr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Yr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Us(this, "includes", e);
  },
  indexOf(...e) {
    return Us(this, "indexOf", e);
  },
  join(e) {
    return xo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Us(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Yr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ra(this, "pop");
  },
  push(...e) {
    return ra(this, "push", e);
  },
  reduce(e, ...t) {
    return nc(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return nc(this, "reduceRight", e, t);
  },
  shift() {
    return ra(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Yr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ra(this, "splice", e);
  },
  toReversed() {
    return xo(this).toReversed();
  },
  toSorted(e) {
    return xo(this).toSorted(e);
  },
  toSpliced(...e) {
    return xo(this).toSpliced(...e);
  },
  unshift(...e) {
    return ra(this, "unshift", e);
  },
  values() {
    return qs(this, "values", In);
  }
};
function qs(e, t, o) {
  const a = Nu(e), c = a[t]();
  return a !== e && !jn(e) && (c._next = c.next, c.next = () => {
    const d = c._next();
    return d.value && (d.value = o(d.value)), d;
  }), c;
}
const yd = Array.prototype;
function Yr(e, t, o, a, c, d) {
  const y = Nu(e), g = y !== e && !jn(e), x = y[t];
  if (x !== yd[t]) {
    const O = x.apply(e, d);
    return g ? In(O) : O;
  }
  let $ = o;
  y !== e && (g ? $ = function(O, ee) {
    return o.call(this, In(O), ee, e);
  } : o.length > 2 && ($ = function(O, ee) {
    return o.call(this, O, ee, e);
  }));
  const N = x.call(y, $, a);
  return g && c ? c(N) : N;
}
function nc(e, t, o, a) {
  const c = Nu(e);
  let d = o;
  return c !== e && (jn(e) ? o.length > 3 && (d = function(y, g, x) {
    return o.call(this, y, g, x, e);
  }) : d = function(y, g, x) {
    return o.call(this, y, In(g), x, e);
  }), c[t](d, ...a);
}
function Us(e, t, o) {
  const a = mt(e);
  hn(a, "iterate", va);
  const c = a[t](...o);
  return (c === -1 || c === !1) && cs(o[0]) ? (o[0] = mt(o[0]), a[t](...o)) : c;
}
function ra(e, t, o = []) {
  hr(), Pu();
  const a = mt(e)[t].apply(e, o);
  return Du(), mr(), a;
}
const vd = /* @__PURE__ */ Jr("__proto__,__v_isRef,__isVue"), hl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ro)
);
function gd(e) {
  Ro(e) || (e = String(e));
  const t = mt(this);
  return hn(t, "has", e), t.hasOwnProperty(e);
}
class ml {
  constructor(t = !1, o = !1) {
    this._isReadonly = t, this._isShallow = o;
  }
  get(t, o, a) {
    if (o === "__v_skip") return t.__v_skip;
    const c = this._isReadonly, d = this._isShallow;
    if (o === "__v_isReactive")
      return !c;
    if (o === "__v_isReadonly")
      return c;
    if (o === "__v_isShallow")
      return d;
    if (o === "__v_raw")
      return a === (c ? d ? _l : wl : d ? bl : gl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const y = ut(t);
    if (!c) {
      let x;
      if (y && (x = md[o]))
        return x;
      if (o === "hasOwnProperty")
        return gd;
    }
    const g = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      an(t) ? t : a
    );
    return (Ro(o) ? hl.has(o) : vd(o)) || (c || hn(t, "get", o), d) ? g : an(g) ? y && Cu(o) ? g : g.value : $t(g) ? c ? Sl(g) : ku(g) : g;
  }
}
class yl extends ml {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, a, c) {
    let d = t[o];
    if (!this._isShallow) {
      const x = Xr(d);
      if (!jn(a) && !Xr(a) && (d = mt(d), a = mt(a)), !ut(t) && an(d) && !an(a))
        return x ? !1 : (d.value = a, !0);
    }
    const y = ut(t) && Cu(o) ? Number(o) < t.length : _t(t, o), g = Reflect.set(
      t,
      o,
      a,
      an(t) ? t : c
    );
    return t === mt(c) && (y ? Ci(a, d) && Ir(t, "set", o, a, d) : Ir(t, "add", o, a)), g;
  }
  deleteProperty(t, o) {
    const a = _t(t, o), c = t[o], d = Reflect.deleteProperty(t, o);
    return d && a && Ir(t, "delete", o, void 0, c), d;
  }
  has(t, o) {
    const a = Reflect.has(t, o);
    return (!Ro(o) || !hl.has(o)) && hn(t, "has", o), a;
  }
  ownKeys(t) {
    return hn(
      t,
      "iterate",
      ut(t) ? "length" : to
    ), Reflect.ownKeys(t);
  }
}
class vl extends ml {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, o) {
    return Rr(
      `Set operation on key "${String(o)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, o) {
    return Rr(
      `Delete operation on key "${String(o)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const bd = /* @__PURE__ */ new yl(), wd = /* @__PURE__ */ new vl(), _d = /* @__PURE__ */ new yl(!0), Sd = /* @__PURE__ */ new vl(!0), nu = (e) => e, Ha = (e) => Reflect.getPrototypeOf(e);
function xd(e, t, o) {
  return function(...a) {
    const c = this.__v_raw, d = mt(c), y = Io(d), g = e === "entries" || e === Symbol.iterator && y, x = e === "keys" && y, $ = c[e](...a), N = o ? nu : t ? ru : In;
    return !t && hn(
      d,
      "iterate",
      x ? tu : to
    ), {
      // iterator protocol
      next() {
        const { value: O, done: ee } = $.next();
        return ee ? { value: O, done: ee } : {
          value: g ? [N(O[0]), N(O[1])] : N(O),
          done: ee
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Wa(e) {
  return function(...t) {
    {
      const o = t[0] ? `on key "${t[0]}" ` : "";
      Rr(
        `${xs(e)} operation ${o}failed: target is readonly.`,
        mt(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ed(e, t) {
  const o = {
    get(c) {
      const d = this.__v_raw, y = mt(d), g = mt(c);
      e || (Ci(c, g) && hn(y, "get", c), hn(y, "get", g));
      const { has: x } = Ha(y), $ = t ? nu : e ? ru : In;
      if (x.call(y, c))
        return $(d.get(c));
      if (x.call(y, g))
        return $(d.get(g));
      d !== y && d.get(c);
    },
    get size() {
      const c = this.__v_raw;
      return !e && hn(mt(c), "iterate", to), Reflect.get(c, "size", c);
    },
    has(c) {
      const d = this.__v_raw, y = mt(d), g = mt(c);
      return e || (Ci(c, g) && hn(y, "has", c), hn(y, "has", g)), c === g ? d.has(c) : d.has(c) || d.has(g);
    },
    forEach(c, d) {
      const y = this, g = y.__v_raw, x = mt(g), $ = t ? nu : e ? ru : In;
      return !e && hn(x, "iterate", to), g.forEach((N, O) => c.call(d, $(N), $(O), y));
    }
  };
  return sn(
    o,
    e ? {
      add: Wa("add"),
      set: Wa("set"),
      delete: Wa("delete"),
      clear: Wa("clear")
    } : {
      add(c) {
        !t && !jn(c) && !Xr(c) && (c = mt(c));
        const d = mt(this);
        return Ha(d).has.call(d, c) || (d.add(c), Ir(d, "add", c, c)), this;
      },
      set(c, d) {
        !t && !jn(d) && !Xr(d) && (d = mt(d));
        const y = mt(this), { has: g, get: x } = Ha(y);
        let $ = g.call(y, c);
        $ ? rc(y, g, c) : (c = mt(c), $ = g.call(y, c));
        const N = x.call(y, c);
        return y.set(c, d), $ ? Ci(d, N) && Ir(y, "set", c, d, N) : Ir(y, "add", c, d), this;
      },
      delete(c) {
        const d = mt(this), { has: y, get: g } = Ha(d);
        let x = y.call(d, c);
        x ? rc(d, y, c) : (c = mt(c), x = y.call(d, c));
        const $ = g ? g.call(d, c) : void 0, N = d.delete(c);
        return x && Ir(d, "delete", c, void 0, $), N;
      },
      clear() {
        const c = mt(this), d = c.size !== 0, y = Io(c) ? new Map(c) : new Set(c), g = c.clear();
        return d && Ir(
          c,
          "clear",
          void 0,
          void 0,
          y
        ), g;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((c) => {
    o[c] = xd(c, e, t);
  }), o;
}
function Es(e, t) {
  const o = Ed(e, t);
  return (a, c, d) => c === "__v_isReactive" ? !e : c === "__v_isReadonly" ? e : c === "__v_raw" ? a : Reflect.get(
    _t(o, c) && c in a ? o : a,
    c,
    d
  );
}
const Td = {
  get: /* @__PURE__ */ Es(!1, !1)
}, Cd = {
  get: /* @__PURE__ */ Es(!1, !0)
}, Ad = {
  get: /* @__PURE__ */ Es(!0, !1)
}, Id = {
  get: /* @__PURE__ */ Es(!0, !0)
};
function rc(e, t, o) {
  const a = mt(o);
  if (a !== o && t.call(e, a)) {
    const c = Tu(e);
    Rr(
      `Reactive ${c} contains both the raw and reactive versions of the same object${c === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const gl = /* @__PURE__ */ new WeakMap(), bl = /* @__PURE__ */ new WeakMap(), wl = /* @__PURE__ */ new WeakMap(), _l = /* @__PURE__ */ new WeakMap();
function Pd(e) {
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
function Dd(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Pd(Tu(e));
}
function ku(e) {
  return Xr(e) ? e : Ts(
    e,
    !1,
    bd,
    Td,
    gl
  );
}
function Od(e) {
  return Ts(
    e,
    !1,
    _d,
    Cd,
    bl
  );
}
function Sl(e) {
  return Ts(
    e,
    !0,
    wd,
    Ad,
    wl
  );
}
function Dr(e) {
  return Ts(
    e,
    !0,
    Sd,
    Id,
    _l
  );
}
function Ts(e, t, o, a, c) {
  if (!$t(e))
    return Rr(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const d = Dd(e);
  if (d === 0)
    return e;
  const y = c.get(e);
  if (y)
    return y;
  const g = new Proxy(
    e,
    d === 2 ? a : o
  );
  return c.set(e, g), g;
}
function Po(e) {
  return Xr(e) ? Po(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Xr(e) {
  return !!(e && e.__v_isReadonly);
}
function jn(e) {
  return !!(e && e.__v_isShallow);
}
function cs(e) {
  return e ? !!e.__v_raw : !1;
}
function mt(e) {
  const t = e && e.__v_raw;
  return t ? mt(t) : e;
}
function Rd(e) {
  return !_t(e, "__v_skip") && Object.isExtensible(e) && ma(e, "__v_skip", !0), e;
}
const In = (e) => $t(e) ? ku(e) : e, ru = (e) => $t(e) ? Sl(e) : e;
function an(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function fa(e) {
  return Nd(e, !1);
}
function Nd(e, t) {
  return an(e) ? e : new kd(e, t);
}
class kd {
  constructor(t, o) {
    this.dep = new Ru(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : mt(t), this._value = o ? t : In(t), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }), this._value;
  }
  set value(t) {
    const o = this._rawValue, a = this.__v_isShallow || jn(t) || Xr(t);
    t = a ? t : mt(t), Ci(t, o) && (this._rawValue = t, this._value = a ? t : In(t), this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: o
    }));
  }
}
function Fd(e) {
  return an(e) ? e.value : e;
}
const Md = {
  get: (e, t, o) => t === "__v_raw" ? e : Fd(Reflect.get(e, t, o)),
  set: (e, t, o, a) => {
    const c = e[t];
    return an(c) && !an(o) ? (c.value = o, !0) : Reflect.set(e, t, o, a);
  }
};
function xl(e) {
  return Po(e) ? e : new Proxy(e, Md);
}
class Ld {
  constructor(t, o, a) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new Ru(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ya - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    It !== this)
      return ul(this, !0), !0;
  }
  get value() {
    const t = this.dep.track({
      target: this,
      type: "get",
      key: "value"
    });
    return fl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : Rr("Write operation failed: computed value is readonly");
  }
}
function jd(e, t, o = !1) {
  let a, c;
  return ct(e) ? a = e : (a = e.get, c = e.set), new Ld(a, c, o);
}
const Ya = {}, ls = /* @__PURE__ */ new WeakMap();
let Zi;
function Kd(e, t = !1, o = Zi) {
  if (o) {
    let a = ls.get(o);
    a || ls.set(o, a = []), a.push(e);
  } else t || Rr(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Bd(e, t, o = Pt) {
  const { immediate: a, deep: c, once: d, scheduler: y, augmentJob: g, call: x } = o, $ = (Fe) => {
    (o.onWarn || Rr)(
      "Invalid watch source: ",
      Fe,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, N = (Fe) => c ? Fe : jn(Fe) || c === !1 || c === 0 ? xi(Fe, 1) : xi(Fe);
  let O, ee, le, we, Ee = !1, He = !1;
  if (an(e) ? (ee = () => e.value, Ee = jn(e)) : Po(e) ? (ee = () => N(e), Ee = !0) : ut(e) ? (He = !0, Ee = e.some((Fe) => Po(Fe) || jn(Fe)), ee = () => e.map((Fe) => {
    if (an(Fe))
      return Fe.value;
    if (Po(Fe))
      return N(Fe);
    if (ct(Fe))
      return x ? x(Fe, 2) : Fe();
    $(Fe);
  })) : ct(e) ? t ? ee = x ? () => x(e, 2) : e : ee = () => {
    if (le) {
      hr();
      try {
        le();
      } finally {
        mr();
      }
    }
    const Fe = Zi;
    Zi = O;
    try {
      return x ? x(e, 3, [we]) : e(we);
    } finally {
      Zi = Fe;
    }
  } : (ee = Sn, $(e)), t && c) {
    const Fe = ee, fe = c === !0 ? 1 / 0 : c;
    ee = () => xi(Fe(), fe);
  }
  const Qe = dd(), Je = () => {
    O.stop(), Qe && Qe.active && xu(Qe.effects, O);
  };
  if (d && t) {
    const Fe = t;
    t = (...fe) => {
      Fe(...fe), Je();
    };
  }
  let De = He ? new Array(e.length).fill(Ya) : Ya;
  const $e = (Fe) => {
    if (!(!(O.flags & 1) || !O.dirty && !Fe))
      if (t) {
        const fe = O.run();
        if (c || Ee || (He ? fe.some((ge, qe) => Ci(ge, De[qe])) : Ci(fe, De))) {
          le && le();
          const ge = Zi;
          Zi = O;
          try {
            const qe = [
              fe,
              // pass undefined as the old value when it's changed for the first time
              De === Ya ? void 0 : He && De[0] === Ya ? [] : De,
              we
            ];
            De = fe, x ? x(t, 3, qe) : (
              // @ts-expect-error
              t(...qe)
            );
          } finally {
            Zi = ge;
          }
        }
      } else
        O.run();
  };
  return g && g($e), O = new al(ee), O.scheduler = y ? () => y($e, !1) : $e, we = (Fe) => Kd(Fe, !1, O), le = O.onStop = () => {
    const Fe = ls.get(O);
    if (Fe) {
      if (x)
        x(Fe, 4);
      else
        for (const fe of Fe) fe();
      ls.delete(O);
    }
  }, O.onTrack = o.onTrack, O.onTrigger = o.onTrigger, t ? a ? $e(!0) : De = O.run() : y ? y($e.bind(null, !0), !0) : O.run(), Je.pause = O.pause.bind(O), Je.resume = O.resume.bind(O), Je.stop = Je, Je;
}
function xi(e, t = 1 / 0, o) {
  if (t <= 0 || !$t(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Set(), o.has(e)))
    return e;
  if (o.add(e), t--, an(e))
    xi(e.value, t, o);
  else if (ut(e))
    for (let a = 0; a < e.length; a++)
      xi(e[a], t, o);
  else if (Hf(e) || Io(e))
    e.forEach((a) => {
      xi(a, t, o);
    });
  else if (Yf(e)) {
    for (const a in e)
      xi(e[a], t, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && xi(e[a], t, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const no = [];
function Ja(e) {
  no.push(e);
}
function Za() {
  no.pop();
}
let Gs = !1;
function Pe(e, ...t) {
  if (Gs) return;
  Gs = !0, hr();
  const o = no.length ? no[no.length - 1].component : null, a = o && o.appContext.config.warnHandler, c = $d();
  if (a)
    No(
      a,
      o,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((d) => {
          var y, g;
          return (g = (y = d.toString) == null ? void 0 : y.call(d)) != null ? g : JSON.stringify(d);
        }).join(""),
        o && o.proxy,
        c.map(
          ({ vnode: d }) => `at <${Ds(o, d.type)}>`
        ).join(`
`),
        c
      ]
    );
  else {
    const d = [`[Vue warn]: ${e}`, ...t];
    c.length && d.push(`
`, ...Vd(c)), console.warn(...d);
  }
  mr(), Gs = !1;
}
function $d() {
  let e = no[no.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const o = t[0];
    o && o.vnode === e ? o.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const a = e.component && e.component.parent;
    e = a && a.vnode;
  }
  return t;
}
function Vd(e) {
  const t = [];
  return e.forEach((o, a) => {
    t.push(...a === 0 ? [] : [`
`], ...qd(o));
  }), t;
}
function qd({ vnode: e, recurseCount: t }) {
  const o = t > 0 ? `... (${t} recursive calls)` : "", a = e.component ? e.component.parent == null : !1, c = ` at <${Ds(
    e.component,
    e.type,
    a
  )}`, d = ">" + o;
  return e.props ? [c, ...Ud(e.props), d] : [c + d];
}
function Ud(e) {
  const t = [], o = Object.keys(e);
  return o.slice(0, 3).forEach((a) => {
    t.push(...El(a, e[a]));
  }), o.length > 3 && t.push(" ..."), t;
}
function El(e, t, o) {
  return tn(t) ? (t = JSON.stringify(t), o ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? o ? t : [`${e}=${t}`] : an(t) ? (t = El(e, mt(t.value), !0), o ? t : [`${e}=Ref<`, t, ">"]) : ct(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = mt(t), o ? t : [`${e}=`, t]);
}
const Fu = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function No(e, t, o, a) {
  try {
    return a ? e(...a) : e();
  } catch (c) {
    Ea(c, t, o);
  }
}
function Nr(e, t, o, a) {
  if (ct(e)) {
    const c = No(e, t, o, a);
    return c && Eu(c) && c.catch((d) => {
      Ea(d, t, o);
    }), c;
  }
  if (ut(e)) {
    const c = [];
    for (let d = 0; d < e.length; d++)
      c.push(Nr(e[d], t, o, a));
    return c;
  } else
    Pe(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function Ea(e, t, o, a = !0) {
  const c = t ? t.vnode : null, { errorHandler: d, throwUnhandledErrorInProduction: y } = t && t.appContext.config || Pt;
  if (t) {
    let g = t.parent;
    const x = t.proxy, $ = Fu[o];
    for (; g; ) {
      const N = g.ec;
      if (N) {
        for (let O = 0; O < N.length; O++)
          if (N[O](e, x, $) === !1)
            return;
      }
      g = g.parent;
    }
    if (d) {
      hr(), No(d, null, 10, [
        e,
        x,
        $
      ]), mr();
      return;
    }
  }
  Gd(e, o, c, a, y);
}
function Gd(e, t, o, a = !0, c = !1) {
  {
    const d = Fu[t];
    if (o && Ja(o), Pe(`Unhandled error${d ? ` during execution of ${d}` : ""}`), o && Za(), a)
      throw e;
    console.error(e);
  }
}
const Pn = [];
let Cr = -1;
const Do = [];
let wi = null, Co = 0;
const Tl = /* @__PURE__ */ Promise.resolve();
let fs = null;
const Hd = 100;
function Wd(e) {
  const t = fs || Tl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Yd(e) {
  let t = Cr + 1, o = Pn.length;
  for (; t < o; ) {
    const a = t + o >>> 1, c = Pn[a], d = ga(c);
    d < e || d === e && c.flags & 2 ? t = a + 1 : o = a;
  }
  return t;
}
function Cs(e) {
  if (!(e.flags & 1)) {
    const t = ga(e), o = Pn[Pn.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ga(o) ? Pn.push(e) : Pn.splice(Yd(t), 0, e), e.flags |= 1, Cl();
  }
}
function Cl() {
  fs || (fs = Tl.then(Pl));
}
function Al(e) {
  ut(e) ? Do.push(...e) : wi && e.id === -1 ? wi.splice(Co + 1, 0, e) : e.flags & 1 || (Do.push(e), e.flags |= 1), Cl();
}
function ic(e, t, o = Cr + 1) {
  for (t = t || /* @__PURE__ */ new Map(); o < Pn.length; o++) {
    const a = Pn[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid || Mu(t, a))
        continue;
      Pn.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function Il(e) {
  if (Do.length) {
    const t = [...new Set(Do)].sort(
      (o, a) => ga(o) - ga(a)
    );
    if (Do.length = 0, wi) {
      wi.push(...t);
      return;
    }
    for (wi = t, e = e || /* @__PURE__ */ new Map(), Co = 0; Co < wi.length; Co++) {
      const o = wi[Co];
      Mu(e, o) || (o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2);
    }
    wi = null, Co = 0;
  }
}
const ga = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Pl(e) {
  e = e || /* @__PURE__ */ new Map();
  const t = (o) => Mu(e, o);
  try {
    for (Cr = 0; Cr < Pn.length; Cr++) {
      const o = Pn[Cr];
      if (o && !(o.flags & 8)) {
        if (t(o))
          continue;
        o.flags & 4 && (o.flags &= -2), No(
          o,
          o.i,
          o.i ? 15 : 14
        ), o.flags & 4 || (o.flags &= -2);
      }
    }
  } finally {
    for (; Cr < Pn.length; Cr++) {
      const o = Pn[Cr];
      o && (o.flags &= -2);
    }
    Cr = -1, Pn.length = 0, Il(e), fs = null, (Pn.length || Do.length) && Pl(e);
  }
}
function Mu(e, t) {
  const o = e.get(t) || 0;
  if (o > Hd) {
    const a = t.i, c = a && lf(a.type);
    return Ea(
      `Maximum recursive updates exceeded${c ? ` in component <${c}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, o + 1), !1;
}
let Or = !1;
const es = /* @__PURE__ */ new Map();
xa().__VUE_HMR_RUNTIME__ = {
  createRecord: Hs(Dl),
  rerender: Hs(Xd),
  reload: Hs(Jd)
};
const io = /* @__PURE__ */ new Map();
function Qd(e) {
  const t = e.type.__hmrId;
  let o = io.get(t);
  o || (Dl(t, e.type), o = io.get(t)), o.instances.add(e);
}
function zd(e) {
  io.get(e.type.__hmrId).instances.delete(e);
}
function Dl(e, t) {
  return io.has(e) ? !1 : (io.set(e, {
    initialDef: ds(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ds(e) {
  return ff(e) ? e.__vccOpts : e;
}
function Xd(e, t) {
  const o = io.get(e);
  o && (o.initialDef.render = t, [...o.instances].forEach((a) => {
    t && (a.render = t, ds(a.type).render = t), a.renderCache = [], Or = !0, a.update(), Or = !1;
  }));
}
function Jd(e, t) {
  const o = io.get(e);
  if (!o) return;
  t = ds(t), oc(o.initialDef, t);
  const a = [...o.instances];
  for (let c = 0; c < a.length; c++) {
    const d = a[c], y = ds(d.type);
    let g = es.get(y);
    g || (y !== o.initialDef && oc(y, t), es.set(y, g = /* @__PURE__ */ new Set())), g.add(d), d.appContext.propsCache.delete(d.type), d.appContext.emitsCache.delete(d.type), d.appContext.optionsCache.delete(d.type), d.ceReload ? (g.add(d), d.ceReload(t.styles), g.delete(d)) : d.parent ? Cs(() => {
      Or = !0, d.parent.update(), Or = !1, g.delete(d);
    }) : d.appContext.reload ? d.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), d.root.ce && d !== d.root && d.root.ce._removeChildStyle(y);
  }
  Al(() => {
    es.clear();
  });
}
function oc(e, t) {
  sn(e, t);
  for (const o in e)
    o !== "__file" && !(o in t) && delete e[o];
}
function Hs(e) {
  return (t, o) => {
    try {
      return e(t, o);
    } catch (a) {
      console.error(a), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Pr, aa = [], iu = !1;
function Ta(e, ...t) {
  Pr ? Pr.emit(e, ...t) : iu || aa.push({ event: e, args: t });
}
function Ol(e, t) {
  var o, a;
  Pr = e, Pr ? (Pr.enabled = !0, aa.forEach(({ event: c, args: d }) => Pr.emit(c, ...d)), aa = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((a = (o = window.navigator) == null ? void 0 : o.userAgent) != null && a.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((d) => {
    Ol(d, t);
  }), setTimeout(() => {
    Pr || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, iu = !0, aa = []);
  }, 3e3)) : (iu = !0, aa = []);
}
function Zd(e, t) {
  Ta("app:init", e, t, {
    Fragment: Ar,
    Text: Ca,
    Comment: pr,
    Static: rs
  });
}
function ep(e) {
  Ta("app:unmount", e);
}
const tp = /* @__PURE__ */ Lu(
  "component:added"
  /* COMPONENT_ADDED */
), Rl = /* @__PURE__ */ Lu(
  "component:updated"
  /* COMPONENT_UPDATED */
), np = /* @__PURE__ */ Lu(
  "component:removed"
  /* COMPONENT_REMOVED */
), rp = (e) => {
  Pr && typeof Pr.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Pr.cleanupBuffer(e) && np(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Lu(e) {
  return (t) => {
    Ta(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const ip = /* @__PURE__ */ Nl(
  "perf:start"
  /* PERFORMANCE_START */
), op = /* @__PURE__ */ Nl(
  "perf:end"
  /* PERFORMANCE_END */
);
function Nl(e) {
  return (t, o, a) => {
    Ta(e, t.appContext.app, t.uid, t, o, a);
  };
}
function ap(e, t, o) {
  Ta(
    "component:emit",
    e.appContext.app,
    e,
    t,
    o
  );
}
let Ln = null, kl = null;
function ps(e) {
  const t = Ln;
  return Ln = e, kl = e && e.type.__scopeId || null, t;
}
function sp(e, t = Ln, o) {
  if (!t || e._n)
    return e;
  const a = (...c) => {
    a._d && vc(-1);
    const d = ps(t);
    let y;
    try {
      y = e(...c);
    } finally {
      ps(d), a._d && vc(1);
    }
    return Rl(t), y;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function Fl(e) {
  Qf(e) && Pe("Do not use built-in directive ids as custom directive id: " + e);
}
function zi(e, t, o, a) {
  const c = e.dirs, d = t && t.dirs;
  for (let y = 0; y < c.length; y++) {
    const g = c[y];
    d && (g.oldValue = d[y].value);
    let x = g.dir[a];
    x && (hr(), Nr(x, o, 8, [
      e.el,
      g,
      e,
      t
    ]), mr());
  }
}
const up = Symbol("_vte"), cp = (e) => e.__isTeleport;
function ju(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ju(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ml(e, t) {
  return ct(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    sn({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ll(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const lp = /* @__PURE__ */ new WeakSet();
function da(e, t, o, a, c = !1) {
  if (ut(e)) {
    e.forEach(
      (we, Ee) => da(
        we,
        t && (ut(t) ? t[Ee] : t),
        o,
        a,
        c
      )
    );
    return;
  }
  if (pa(a) && !c) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && da(e, t, o, a.component.subTree);
    return;
  }
  const d = a.shapeFlag & 4 ? Wu(a.component) : a.el, y = c ? null : d, { i: g, r: x } = e;
  if (!g) {
    Pe(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const $ = t && t.r, N = g.refs === Pt ? g.refs = {} : g.refs, O = g.setupState, ee = mt(O), le = O === Pt ? () => !1 : (we) => (_t(ee, we) && !an(ee[we]) && Pe(
    `Template ref "${we}" used on a non-ref value. It will not work in the production build.`
  ), lp.has(ee[we]) ? !1 : _t(ee, we));
  if ($ != null && $ !== x && (tn($) ? (N[$] = null, le($) && (O[$] = null)) : an($) && ($.value = null)), ct(x))
    No(x, g, 12, [y, N]);
  else {
    const we = tn(x), Ee = an(x);
    if (we || Ee) {
      const He = () => {
        if (e.f) {
          const Qe = we ? le(x) ? O[x] : N[x] : x.value;
          c ? ut(Qe) && xu(Qe, d) : ut(Qe) ? Qe.includes(d) || Qe.push(d) : we ? (N[x] = [d], le(x) && (O[x] = N[x])) : (x.value = [d], e.k && (N[e.k] = x.value));
        } else we ? (N[x] = y, le(x) && (O[x] = y)) : Ee ? (x.value = y, e.k && (N[e.k] = y)) : Pe("Invalid template ref type:", x, `(${typeof x})`);
      };
      y ? (He.id = -1, Gn(He, o)) : He();
    } else
      Pe("Invalid template ref type:", x, `(${typeof x})`);
  }
}
xa().requestIdleCallback;
xa().cancelIdleCallback;
const pa = (e) => !!e.type.__asyncLoader, Ku = (e) => e.type.__isKeepAlive;
function fp(e, t) {
  jl(e, "a", t);
}
function dp(e, t) {
  jl(e, "da", t);
}
function jl(e, t, o = mn) {
  const a = e.__wdc || (e.__wdc = () => {
    let c = o;
    for (; c; ) {
      if (c.isDeactivated)
        return;
      c = c.parent;
    }
    return e();
  });
  if (As(t, a, o), o) {
    let c = o.parent;
    for (; c && c.parent; )
      Ku(c.parent.vnode) && pp(a, t, o, c), c = c.parent;
  }
}
function pp(e, t, o, a) {
  const c = As(
    t,
    e,
    a,
    !0
    /* prepend */
  );
  Bu(() => {
    xu(a[t], c);
  }, o);
}
function As(e, t, o = mn, a = !1) {
  if (o) {
    const c = o[e] || (o[e] = []), d = t.__weh || (t.__weh = (...y) => {
      hr();
      const g = Aa(o), x = Nr(t, o, e, y);
      return g(), mr(), x;
    });
    return a ? c.unshift(d) : c.push(d), d;
  } else {
    const c = Ji(Fu[e].replace(/ hook$/, ""));
    Pe(
      `${c} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Zr = (e) => (t, o = mn) => {
  (!wa || e === "sp") && As(e, (...a) => t(...a), o);
}, hp = Zr("bm"), hs = Zr("m"), mp = Zr(
  "bu"
), yp = Zr("u"), vp = Zr(
  "bum"
), Bu = Zr("um"), gp = Zr(
  "sp"
), bp = Zr("rtg"), wp = Zr("rtc");
function _p(e, t = mn) {
  As("ec", e, t);
}
const Sp = Symbol.for("v-ndc"), ou = (e) => e ? uf(e) ? Wu(e) : ou(e.parent) : null, ro = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ sn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => Dr(e.props),
    $attrs: (e) => Dr(e.attrs),
    $slots: (e) => Dr(e.slots),
    $refs: (e) => Dr(e.refs),
    $parent: (e) => ou(e.parent),
    $root: (e) => ou(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => $l(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Cs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Wd.bind(e.proxy)),
    $watch: (e) => nh.bind(e)
  })
), $u = (e) => e === "_" || e === "$", Ws = (e, t) => e !== Pt && !e.__isScriptSetup && _t(e, t), Kl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: o, setupState: a, data: c, props: d, accessCache: y, type: g, appContext: x } = e;
    if (t === "__isVue")
      return !0;
    let $;
    if (t[0] !== "$") {
      const le = y[t];
      if (le !== void 0)
        switch (le) {
          case 1:
            return a[t];
          case 2:
            return c[t];
          case 4:
            return o[t];
          case 3:
            return d[t];
        }
      else {
        if (Ws(a, t))
          return y[t] = 1, a[t];
        if (c !== Pt && _t(c, t))
          return y[t] = 2, c[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          ($ = e.propsOptions[0]) && _t($, t)
        )
          return y[t] = 3, d[t];
        if (o !== Pt && _t(o, t))
          return y[t] = 4, o[t];
        au && (y[t] = 0);
      }
    }
    const N = ro[t];
    let O, ee;
    if (N)
      return t === "$attrs" ? (hn(e.attrs, "get", ""), vs()) : t === "$slots" && hn(e, "get", t), N(e);
    if (
      // css module (injected by vue-loader)
      (O = g.__cssModules) && (O = O[t])
    )
      return O;
    if (o !== Pt && _t(o, t))
      return y[t] = 4, o[t];
    if (
      // global properties
      ee = x.config.globalProperties, _t(ee, t)
    )
      return ee[t];
    Ln && (!tn(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (c !== Pt && $u(t[0]) && _t(c, t) ? Pe(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Ln && Pe(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, o) {
    const { data: a, setupState: c, ctx: d } = e;
    return Ws(c, t) ? (c[t] = o, !0) : c.__isScriptSetup && _t(c, t) ? (Pe(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : a !== Pt && _t(a, t) ? (a[t] = o, !0) : _t(e.props, t) ? (Pe(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (Pe(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (t in e.appContext.config.globalProperties ? Object.defineProperty(d, t, {
      enumerable: !0,
      configurable: !0,
      value: o
    }) : d[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: a, appContext: c, propsOptions: d }
  }, y) {
    let g;
    return !!o[y] || e !== Pt && _t(e, y) || Ws(t, y) || (g = d[0]) && _t(g, y) || _t(a, y) || _t(ro, y) || _t(c.config.globalProperties, y);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : _t(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
Kl.ownKeys = (e) => (Pe(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e));
function xp(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ro).forEach((o) => {
    Object.defineProperty(t, o, {
      configurable: !0,
      enumerable: !1,
      get: () => ro[o](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Sn
    });
  }), t;
}
function Ep(e) {
  const {
    ctx: t,
    propsOptions: [o]
  } = e;
  o && Object.keys(o).forEach((a) => {
    Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[a],
      set: Sn
    });
  });
}
function Tp(e) {
  const { ctx: t, setupState: o } = e;
  Object.keys(mt(o)).forEach((a) => {
    if (!o.__isScriptSetup) {
      if ($u(a[0])) {
        Pe(
          `setup() return property ${JSON.stringify(
            a
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, a, {
        enumerable: !0,
        configurable: !0,
        get: () => o[a],
        set: Sn
      });
    }
  });
}
function ac(e) {
  return ut(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
function Cp() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, o) => {
    e[o] ? Pe(`${t} property "${o}" is already defined in ${e[o]}.`) : e[o] = t;
  };
}
let au = !0;
function Ap(e) {
  const t = $l(e), o = e.proxy, a = e.ctx;
  au = !1, t.beforeCreate && sc(t.beforeCreate, e, "bc");
  const {
    // state
    data: c,
    computed: d,
    methods: y,
    watch: g,
    provide: x,
    inject: $,
    // lifecycle
    created: N,
    beforeMount: O,
    mounted: ee,
    beforeUpdate: le,
    updated: we,
    activated: Ee,
    deactivated: He,
    beforeDestroy: Qe,
    beforeUnmount: Je,
    destroyed: De,
    unmounted: $e,
    render: Fe,
    renderTracked: fe,
    renderTriggered: ge,
    errorCaptured: qe,
    serverPrefetch: K,
    // public API
    expose: dt,
    inheritAttrs: At,
    // assets
    components: it,
    directives: Dt,
    filters: ln
  } = t, Vt = Cp();
  {
    const [Me] = e.propsOptions;
    if (Me)
      for (const et in Me)
        Vt("Props", et);
  }
  if ($ && Ip($, a, Vt), y)
    for (const Me in y) {
      const et = y[Me];
      ct(et) ? (Object.defineProperty(a, Me, {
        value: et.bind(o),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), Vt("Methods", Me)) : Pe(
        `Method "${Me}" has type "${typeof et}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (c) {
    ct(c) || Pe(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const Me = c.call(o, o);
    if (Eu(Me) && Pe(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !$t(Me))
      Pe("data() should return an object.");
    else {
      e.data = ku(Me);
      for (const et in Me)
        Vt("Data", et), $u(et[0]) || Object.defineProperty(a, et, {
          configurable: !0,
          enumerable: !0,
          get: () => Me[et],
          set: Sn
        });
    }
  }
  if (au = !0, d)
    for (const Me in d) {
      const et = d[Me], Tt = ct(et) ? et.bind(o, o) : ct(et.get) ? et.get.bind(o, o) : Sn;
      Tt === Sn && Pe(`Computed property "${Me}" has no getter.`);
      const Ot = !ct(et) && ct(et.set) ? et.set.bind(o) : () => {
        Pe(
          `Write operation failed: computed property "${Me}" is readonly.`
        );
      }, qt = Oh({
        get: Tt,
        set: Ot
      });
      Object.defineProperty(a, Me, {
        enumerable: !0,
        configurable: !0,
        get: () => qt.value,
        set: (Ht) => qt.value = Ht
      }), Vt("Computed", Me);
    }
  if (g)
    for (const Me in g)
      Bl(g[Me], a, o, Me);
  if (x) {
    const Me = ct(x) ? x.call(o) : x;
    Reflect.ownKeys(Me).forEach((et) => {
      kp(et, Me[et]);
    });
  }
  N && sc(N, e, "c");
  function St(Me, et) {
    ut(et) ? et.forEach((Tt) => Me(Tt.bind(o))) : et && Me(et.bind(o));
  }
  if (St(hp, O), St(hs, ee), St(mp, le), St(yp, we), St(fp, Ee), St(dp, He), St(_p, qe), St(wp, fe), St(bp, ge), St(vp, Je), St(Bu, $e), St(gp, K), ut(dt))
    if (dt.length) {
      const Me = e.exposed || (e.exposed = {});
      dt.forEach((et) => {
        Object.defineProperty(Me, et, {
          get: () => o[et],
          set: (Tt) => o[et] = Tt
        });
      });
    } else e.exposed || (e.exposed = {});
  Fe && e.render === Sn && (e.render = Fe), At != null && (e.inheritAttrs = At), it && (e.components = it), Dt && (e.directives = Dt), K && Ll(e);
}
function Ip(e, t, o = Sn) {
  ut(e) && (e = su(e));
  for (const a in e) {
    const c = e[a];
    let d;
    $t(c) ? "default" in c ? d = ts(
      c.from || a,
      c.default,
      !0
    ) : d = ts(c.from || a) : d = ts(c), an(d) ? Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => d.value,
      set: (y) => d.value = y
    }) : t[a] = d, o("Inject", a);
  }
}
function sc(e, t, o) {
  Nr(
    ut(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function Bl(e, t, o, a) {
  let c = a.includes(".") ? Jl(o, a) : () => o[a];
  if (tn(e)) {
    const d = t[e];
    ct(d) ? ns(c, d) : Pe(`Invalid watch handler specified by key "${e}"`, d);
  } else if (ct(e))
    ns(c, e.bind(o));
  else if ($t(e))
    if (ut(e))
      e.forEach((d) => Bl(d, t, o, a));
    else {
      const d = ct(e.handler) ? e.handler.bind(o) : t[e.handler];
      ct(d) ? ns(c, d, e) : Pe(`Invalid watch handler specified by key "${e.handler}"`, d);
    }
  else
    Pe(`Invalid watch option: "${a}"`, e);
}
function $l(e) {
  const t = e.type, { mixins: o, extends: a } = t, {
    mixins: c,
    optionsCache: d,
    config: { optionMergeStrategies: y }
  } = e.appContext, g = d.get(t);
  let x;
  return g ? x = g : !c.length && !o && !a ? x = t : (x = {}, c.length && c.forEach(
    ($) => ms(x, $, y, !0)
  ), ms(x, t, y)), $t(t) && d.set(t, x), x;
}
function ms(e, t, o, a = !1) {
  const { mixins: c, extends: d } = t;
  d && ms(e, d, o, !0), c && c.forEach(
    (y) => ms(e, y, o, !0)
  );
  for (const y in t)
    if (a && y === "expose")
      Pe(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const g = Pp[y] || o && o[y];
      e[y] = g ? g(e[y], t[y]) : t[y];
    }
  return e;
}
const Pp = {
  data: uc,
  props: cc,
  emits: cc,
  // objects
  methods: sa,
  computed: sa,
  // lifecycle
  beforeCreate: Cn,
  created: Cn,
  beforeMount: Cn,
  mounted: Cn,
  beforeUpdate: Cn,
  updated: Cn,
  beforeDestroy: Cn,
  beforeUnmount: Cn,
  destroyed: Cn,
  unmounted: Cn,
  activated: Cn,
  deactivated: Cn,
  errorCaptured: Cn,
  serverPrefetch: Cn,
  // assets
  components: sa,
  directives: sa,
  // watch
  watch: Op,
  // provide / inject
  provide: uc,
  inject: Dp
};
function uc(e, t) {
  return t ? e ? function() {
    return sn(
      ct(e) ? e.call(this, this) : e,
      ct(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Dp(e, t) {
  return sa(su(e), su(t));
}
function su(e) {
  if (ut(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++)
      t[e[o]] = e[o];
    return t;
  }
  return e;
}
function Cn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function sa(e, t) {
  return e ? sn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function cc(e, t) {
  return e ? ut(e) && ut(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : sn(
    /* @__PURE__ */ Object.create(null),
    ac(e),
    ac(t ?? {})
  ) : t;
}
function Op(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = sn(/* @__PURE__ */ Object.create(null), e);
  for (const a in t)
    o[a] = Cn(e[a], t[a]);
  return o;
}
function Vl() {
  return {
    app: null,
    config: {
      isNativeTag: Uf,
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
let Rp = 0;
function Np(e, t) {
  return function(a, c = null) {
    ct(a) || (a = sn({}, a)), c != null && !$t(c) && (Pe("root props passed to app.mount() must be an object."), c = null);
    const d = Vl(), y = /* @__PURE__ */ new WeakSet(), g = [];
    let x = !1;
    const $ = d.app = {
      _uid: Rp++,
      _component: a,
      _props: c,
      _container: null,
      _context: d,
      _instance: null,
      version: wc,
      get config() {
        return d.config;
      },
      set config(N) {
        Pe(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(N, ...O) {
        return y.has(N) ? Pe("Plugin has already been applied to target app.") : N && ct(N.install) ? (y.add(N), N.install($, ...O)) : ct(N) ? (y.add(N), N($, ...O)) : Pe(
          'A plugin must either be a function or an object with an "install" function.'
        ), $;
      },
      mixin(N) {
        return d.mixins.includes(N) ? Pe(
          "Mixin has already been applied to target app" + (N.name ? `: ${N.name}` : "")
        ) : d.mixins.push(N), $;
      },
      component(N, O) {
        return pu(N, d.config), O ? (d.components[N] && Pe(`Component "${N}" has already been registered in target app.`), d.components[N] = O, $) : d.components[N];
      },
      directive(N, O) {
        return Fl(N), O ? (d.directives[N] && Pe(`Directive "${N}" has already been registered in target app.`), d.directives[N] = O, $) : d.directives[N];
      },
      mount(N, O, ee) {
        if (x)
          Pe(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          N.__vue_app__ && Pe(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const le = $._ceVNode || Ai(a, c);
          return le.appContext = d, ee === !0 ? ee = "svg" : ee === !1 && (ee = void 0), d.reload = () => {
            const we = Pi(le);
            we.el = null, e(we, N, ee);
          }, e(le, N, ee), x = !0, $._container = N, N.__vue_app__ = $, $._instance = le.component, Zd($, wc), Wu(le.component);
        }
      },
      onUnmount(N) {
        typeof N != "function" && Pe(
          `Expected function as first argument to app.onUnmount(), but got ${typeof N}`
        ), g.push(N);
      },
      unmount() {
        x ? (Nr(
          g,
          $._instance,
          16
        ), e(null, $._container), $._instance = null, ep($), delete $._container.__vue_app__) : Pe("Cannot unmount an app that is not mounted.");
      },
      provide(N, O) {
        return N in d.provides && (_t(d.provides, N) ? Pe(
          `App already provides property with key "${String(N)}". It will be overwritten with the new value.`
        ) : Pe(
          `App already provides property with key "${String(N)}" inherited from its parent element. It will be overwritten with the new value.`
        )), d.provides[N] = O, $;
      },
      runWithContext(N) {
        const O = Oo;
        Oo = $;
        try {
          return N();
        } finally {
          Oo = O;
        }
      }
    };
    return $;
  };
}
let Oo = null;
function kp(e, t) {
  if (!mn)
    Pe("provide() can only be used inside setup().");
  else {
    let o = mn.provides;
    const a = mn.parent && mn.parent.provides;
    a === o && (o = mn.provides = Object.create(a)), o[e] = t;
  }
}
function ts(e, t, o = !1) {
  const a = mn || Ln;
  if (a || Oo) {
    let c = Oo ? Oo._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (c && e in c)
      return c[e];
    if (arguments.length > 1)
      return o && ct(t) ? t.call(a && a.proxy) : t;
    Pe(`injection "${String(e)}" not found.`);
  } else
    Pe("inject() can only be used inside setup() or functional components.");
}
const ql = {}, Ul = () => Object.create(ql), Gl = (e) => Object.getPrototypeOf(e) === ql;
function Fp(e, t, o, a = !1) {
  const c = {}, d = Ul();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Hl(e, t, c, d);
  for (const y in e.propsOptions[0])
    y in c || (c[y] = void 0);
  Yl(t || {}, c, e), o ? e.props = a ? c : Od(c) : e.type.props ? e.props = c : e.props = d, e.attrs = d;
}
function Mp(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Lp(e, t, o, a) {
  const {
    props: c,
    attrs: d,
    vnode: { patchFlag: y }
  } = e, g = mt(c), [x] = e.propsOptions;
  let $ = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !Mp(e) && (a || y > 0) && !(y & 16)
  ) {
    if (y & 8) {
      const N = e.vnode.dynamicProps;
      for (let O = 0; O < N.length; O++) {
        let ee = N[O];
        if (Is(e.emitsOptions, ee))
          continue;
        const le = t[ee];
        if (x)
          if (_t(d, ee))
            le !== d[ee] && (d[ee] = le, $ = !0);
          else {
            const we = fr(ee);
            c[we] = uu(
              x,
              g,
              we,
              le,
              e,
              !1
            );
          }
        else
          le !== d[ee] && (d[ee] = le, $ = !0);
      }
    }
  } else {
    Hl(e, t, c, d) && ($ = !0);
    let N;
    for (const O in g)
      (!t || // for camelCase
      !_t(t, O) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((N = Ii(O)) === O || !_t(t, N))) && (x ? o && // for camelCase
      (o[O] !== void 0 || // for kebab-case
      o[N] !== void 0) && (c[O] = uu(
        x,
        g,
        O,
        void 0,
        e,
        !0
      )) : delete c[O]);
    if (d !== g)
      for (const O in d)
        (!t || !_t(t, O)) && (delete d[O], $ = !0);
  }
  $ && Ir(e.attrs, "set", ""), Yl(t || {}, c, e);
}
function Hl(e, t, o, a) {
  const [c, d] = e.propsOptions;
  let y = !1, g;
  if (t)
    for (let x in t) {
      if (ua(x))
        continue;
      const $ = t[x];
      let N;
      c && _t(c, N = fr(x)) ? !d || !d.includes(N) ? o[N] = $ : (g || (g = {}))[N] = $ : Is(e.emitsOptions, x) || (!(x in a) || $ !== a[x]) && (a[x] = $, y = !0);
    }
  if (d) {
    const x = mt(o), $ = g || Pt;
    for (let N = 0; N < d.length; N++) {
      const O = d[N];
      o[O] = uu(
        c,
        x,
        O,
        $[O],
        e,
        !_t($, O)
      );
    }
  }
  return y;
}
function uu(e, t, o, a, c, d) {
  const y = e[o];
  if (y != null) {
    const g = _t(y, "default");
    if (g && a === void 0) {
      const x = y.default;
      if (y.type !== Function && !y.skipFactory && ct(x)) {
        const { propsDefaults: $ } = c;
        if (o in $)
          a = $[o];
        else {
          const N = Aa(c);
          a = $[o] = x.call(
            null,
            t
          ), N();
        }
      } else
        a = x;
      c.ce && c.ce._setProp(o, a);
    }
    y[
      0
      /* shouldCast */
    ] && (d && !g ? a = !1 : y[
      1
      /* shouldCastTrue */
    ] && (a === "" || a === Ii(o)) && (a = !0));
  }
  return a;
}
const jp = /* @__PURE__ */ new WeakMap();
function Wl(e, t, o = !1) {
  const a = o ? jp : t.propsCache, c = a.get(e);
  if (c)
    return c;
  const d = e.props, y = {}, g = [];
  let x = !1;
  if (!ct(e)) {
    const N = (O) => {
      x = !0;
      const [ee, le] = Wl(O, t, !0);
      sn(y, ee), le && g.push(...le);
    };
    !o && t.mixins.length && t.mixins.forEach(N), e.extends && N(e.extends), e.mixins && e.mixins.forEach(N);
  }
  if (!d && !x)
    return $t(e) && a.set(e, Ao), Ao;
  if (ut(d))
    for (let N = 0; N < d.length; N++) {
      tn(d[N]) || Pe("props must be strings when using array syntax.", d[N]);
      const O = fr(d[N]);
      lc(O) && (y[O] = Pt);
    }
  else if (d) {
    $t(d) || Pe("invalid props options", d);
    for (const N in d) {
      const O = fr(N);
      if (lc(O)) {
        const ee = d[N], le = y[O] = ut(ee) || ct(ee) ? { type: ee } : sn({}, ee), we = le.type;
        let Ee = !1, He = !0;
        if (ut(we))
          for (let Qe = 0; Qe < we.length; ++Qe) {
            const Je = we[Qe], De = ct(Je) && Je.name;
            if (De === "Boolean") {
              Ee = !0;
              break;
            } else De === "String" && (He = !1);
          }
        else
          Ee = ct(we) && we.name === "Boolean";
        le[
          0
          /* shouldCast */
        ] = Ee, le[
          1
          /* shouldCastTrue */
        ] = He, (Ee || _t(le, "default")) && g.push(O);
      }
    }
  }
  const $ = [y, g];
  return $t(e) && a.set(e, $), $;
}
function lc(e) {
  return e[0] !== "$" && !ua(e) ? !0 : (Pe(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Kp(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Yl(e, t, o) {
  const a = mt(t), c = o.propsOptions[0], d = Object.keys(e).map((y) => fr(y));
  for (const y in c) {
    let g = c[y];
    g != null && Bp(
      y,
      a[y],
      g,
      Dr(a),
      !d.includes(y)
    );
  }
}
function Bp(e, t, o, a, c) {
  const { type: d, required: y, validator: g, skipCheck: x } = o;
  if (y && c) {
    Pe('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !y)) {
    if (d != null && d !== !0 && !x) {
      let $ = !1;
      const N = ut(d) ? d : [d], O = [];
      for (let ee = 0; ee < N.length && !$; ee++) {
        const { valid: le, expectedType: we } = Vp(t, N[ee]);
        O.push(we || ""), $ = le;
      }
      if (!$) {
        Pe(qp(e, t, O));
        return;
      }
    }
    g && !g(t, a) && Pe('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const $p = /* @__PURE__ */ Jr(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Vp(e, t) {
  let o;
  const a = Kp(t);
  if (a === "null")
    o = e === null;
  else if ($p(a)) {
    const c = typeof e;
    o = c === a.toLowerCase(), !o && c === "object" && (o = e instanceof t);
  } else a === "Object" ? o = $t(e) : a === "Array" ? o = ut(e) : o = e instanceof t;
  return {
    valid: o,
    expectedType: a
  };
}
function qp(e, t, o) {
  if (o.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let a = `Invalid prop: type check failed for prop "${e}". Expected ${o.map(xs).join(" | ")}`;
  const c = o[0], d = Tu(t), y = fc(t, c), g = fc(t, d);
  return o.length === 1 && dc(c) && !Up(c, d) && (a += ` with value ${y}`), a += `, got ${d} `, dc(d) && (a += `with value ${g}.`), a;
}
function fc(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function dc(e) {
  return ["string", "number", "boolean"].some((o) => e.toLowerCase() === o);
}
function Up(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Vu = (e) => e[0] === "_" || e === "$stable", qu = (e) => ut(e) ? e.map(lr) : [lr(e)], Gp = (e, t, o) => {
  if (t._n)
    return t;
  const a = sp((...c) => (mn && !(o === null && Ln) && !(o && o.root !== mn.root) && Pe(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), qu(t(...c))), o);
  return a._c = !1, a;
}, Ql = (e, t, o) => {
  const a = e._ctx;
  for (const c in e) {
    if (Vu(c)) continue;
    const d = e[c];
    if (ct(d))
      t[c] = Gp(c, d, a);
    else if (d != null) {
      Pe(
        `Non-function value encountered for slot "${c}". Prefer function slots for better performance.`
      );
      const y = qu(d);
      t[c] = () => y;
    }
  }
}, zl = (e, t) => {
  Ku(e.vnode) || Pe(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const o = qu(t);
  e.slots.default = () => o;
}, cu = (e, t, o) => {
  for (const a in t)
    (o || !Vu(a)) && (e[a] = t[a]);
}, Hp = (e, t, o) => {
  const a = e.slots = Ul();
  if (e.vnode.shapeFlag & 32) {
    const c = t.__;
    c && ma(a, "__", c, !0);
    const d = t._;
    d ? (cu(a, t, o), o && ma(a, "_", d, !0)) : Ql(t, a);
  } else t && zl(e, t);
}, Wp = (e, t, o) => {
  const { vnode: a, slots: c } = e;
  let d = !0, y = Pt;
  if (a.shapeFlag & 32) {
    const g = t._;
    g ? Or ? (cu(c, t, o), Ir(e, "set", "$slots")) : o && g === 1 ? d = !1 : cu(c, t, o) : (d = !t.$stable, Ql(t, c)), y = t;
  } else t && (zl(e, t), y = { default: 1 });
  if (d)
    for (const g in c)
      !Vu(g) && y[g] == null && delete c[g];
};
let ia, Ei;
function Eo(e, t) {
  e.appContext.config.performance && ys() && Ei.mark(`vue-${t}-${e.uid}`), ip(e, t, ys() ? Ei.now() : Date.now());
}
function To(e, t) {
  if (e.appContext.config.performance && ys()) {
    const o = `vue-${t}-${e.uid}`, a = o + ":end";
    Ei.mark(a), Ei.measure(
      `<${Ds(e, e.type)}> ${t}`,
      o,
      a
    ), Ei.clearMarks(o), Ei.clearMarks(a);
  }
  op(e, t, ys() ? Ei.now() : Date.now());
}
function ys() {
  return ia !== void 0 || (typeof window < "u" && window.performance ? (ia = !0, Ei = window.performance) : ia = !1), ia;
}
function Yp() {
  const e = [];
  if (e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Gn = ch;
function Qp(e) {
  return zp(e);
}
function zp(e, t) {
  Yp();
  const o = xa();
  o.__VUE__ = !0, Ol(o.__VUE_DEVTOOLS_GLOBAL_HOOK__, o);
  const {
    insert: a,
    remove: c,
    patchProp: d,
    createElement: y,
    createText: g,
    createComment: x,
    setText: $,
    setElementText: N,
    parentNode: O,
    nextSibling: ee,
    setScopeId: le = Sn,
    insertStaticContent: we
  } = e, Ee = (T, F, S, P = null, R = null, L = null, j = void 0, H = null, ie = Or ? !1 : !!F.dynamicChildren) => {
    if (T === F)
      return;
    T && !oa(T, F) && (P = b(T), Ft(T, R, L, !0), T = null), F.patchFlag === -2 && (ie = !1, F.dynamicChildren = null);
    const { type: pe, ref: Ve, shapeFlag: ve } = F;
    switch (pe) {
      case Ca:
        He(T, F, S, P);
        break;
      case pr:
        Qe(T, F, S, P);
        break;
      case rs:
        T == null ? Je(F, S, P, j) : De(T, F, S, j);
        break;
      case Ar:
        Dt(
          T,
          F,
          S,
          P,
          R,
          L,
          j,
          H,
          ie
        );
        break;
      default:
        ve & 1 ? fe(
          T,
          F,
          S,
          P,
          R,
          L,
          j,
          H,
          ie
        ) : ve & 6 ? ln(
          T,
          F,
          S,
          P,
          R,
          L,
          j,
          H,
          ie
        ) : ve & 64 || ve & 128 ? pe.process(
          T,
          F,
          S,
          P,
          R,
          L,
          j,
          H,
          ie,
          ot
        ) : Pe("Invalid VNode type:", pe, `(${typeof pe})`);
    }
    Ve != null && R ? da(Ve, T && T.ref, L, F || T, !F) : Ve == null && T && T.ref != null && da(T.ref, null, L, T, !0);
  }, He = (T, F, S, P) => {
    if (T == null)
      a(
        F.el = g(F.children),
        S,
        P
      );
    else {
      const R = F.el = T.el;
      F.children !== T.children && $(R, F.children);
    }
  }, Qe = (T, F, S, P) => {
    T == null ? a(
      F.el = x(F.children || ""),
      S,
      P
    ) : F.el = T.el;
  }, Je = (T, F, S, P) => {
    [T.el, T.anchor] = we(
      T.children,
      F,
      S,
      P,
      T.el,
      T.anchor
    );
  }, De = (T, F, S, P) => {
    if (F.children !== T.children) {
      const R = ee(T.anchor);
      Fe(T), [F.el, F.anchor] = we(
        F.children,
        S,
        R,
        P
      );
    } else
      F.el = T.el, F.anchor = T.anchor;
  }, $e = ({ el: T, anchor: F }, S, P) => {
    let R;
    for (; T && T !== F; )
      R = ee(T), a(T, S, P), T = R;
    a(F, S, P);
  }, Fe = ({ el: T, anchor: F }) => {
    let S;
    for (; T && T !== F; )
      S = ee(T), c(T), T = S;
    c(F);
  }, fe = (T, F, S, P, R, L, j, H, ie) => {
    F.type === "svg" ? j = "svg" : F.type === "math" && (j = "mathml"), T == null ? ge(
      F,
      S,
      P,
      R,
      L,
      j,
      H,
      ie
    ) : dt(
      T,
      F,
      R,
      L,
      j,
      H,
      ie
    );
  }, ge = (T, F, S, P, R, L, j, H) => {
    let ie, pe;
    const { props: Ve, shapeFlag: ve, transition: Ue, dirs: Ze } = T;
    if (ie = T.el = y(
      T.type,
      L,
      Ve && Ve.is,
      Ve
    ), ve & 8 ? N(ie, T.children) : ve & 16 && K(
      T.children,
      ie,
      null,
      P,
      R,
      Ys(T, L),
      j,
      H
    ), Ze && zi(T, null, P, "created"), qe(ie, T, T.scopeId, j, P), Ve) {
      for (const xt in Ve)
        xt !== "value" && !ua(xt) && d(ie, xt, null, Ve[xt], L, P);
      "value" in Ve && d(ie, "value", null, Ve.value, L), (pe = Ve.onVnodeBeforeMount) && Tr(pe, P, T);
    }
    ma(ie, "__vnode", T, !0), ma(ie, "__vueParentComponent", P, !0), Ze && zi(T, null, P, "beforeMount");
    const nt = Xp(R, Ue);
    nt && Ue.beforeEnter(ie), a(ie, F, S), ((pe = Ve && Ve.onVnodeMounted) || nt || Ze) && Gn(() => {
      pe && Tr(pe, P, T), nt && Ue.enter(ie), Ze && zi(T, null, P, "mounted");
    }, R);
  }, qe = (T, F, S, P, R) => {
    if (S && le(T, S), P)
      for (let L = 0; L < P.length; L++)
        le(T, P[L]);
    if (R) {
      let L = R.subTree;
      if (L.patchFlag > 0 && L.patchFlag & 2048 && (L = Gu(L.children) || L), F === L || tf(L.type) && (L.ssContent === F || L.ssFallback === F)) {
        const j = R.vnode;
        qe(
          T,
          j,
          j.scopeId,
          j.slotScopeIds,
          R.parent
        );
      }
    }
  }, K = (T, F, S, P, R, L, j, H, ie = 0) => {
    for (let pe = ie; pe < T.length; pe++) {
      const Ve = T[pe] = H ? _i(T[pe]) : lr(T[pe]);
      Ee(
        null,
        Ve,
        F,
        S,
        P,
        R,
        L,
        j,
        H
      );
    }
  }, dt = (T, F, S, P, R, L, j) => {
    const H = F.el = T.el;
    H.__vnode = F;
    let { patchFlag: ie, dynamicChildren: pe, dirs: Ve } = F;
    ie |= T.patchFlag & 16;
    const ve = T.props || Pt, Ue = F.props || Pt;
    let Ze;
    if (S && Xi(S, !1), (Ze = Ue.onVnodeBeforeUpdate) && Tr(Ze, S, F, T), Ve && zi(F, T, S, "beforeUpdate"), S && Xi(S, !0), Or && (ie = 0, j = !1, pe = null), (ve.innerHTML && Ue.innerHTML == null || ve.textContent && Ue.textContent == null) && N(H, ""), pe ? (At(
      T.dynamicChildren,
      pe,
      H,
      S,
      P,
      Ys(F, R),
      L
    ), lu(T, F)) : j || Tt(
      T,
      F,
      H,
      null,
      S,
      P,
      Ys(F, R),
      L,
      !1
    ), ie > 0) {
      if (ie & 16)
        it(H, ve, Ue, S, R);
      else if (ie & 2 && ve.class !== Ue.class && d(H, "class", null, Ue.class, R), ie & 4 && d(H, "style", ve.style, Ue.style, R), ie & 8) {
        const nt = F.dynamicProps;
        for (let xt = 0; xt < nt.length; xt++) {
          const yt = nt[xt], nn = ve[yt], Xt = Ue[yt];
          (Xt !== nn || yt === "value") && d(H, yt, nn, Xt, R, S);
        }
      }
      ie & 1 && T.children !== F.children && N(H, F.children);
    } else !j && pe == null && it(H, ve, Ue, S, R);
    ((Ze = Ue.onVnodeUpdated) || Ve) && Gn(() => {
      Ze && Tr(Ze, S, F, T), Ve && zi(F, T, S, "updated");
    }, P);
  }, At = (T, F, S, P, R, L, j) => {
    for (let H = 0; H < F.length; H++) {
      const ie = T[H], pe = F[H], Ve = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ie.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ie.type === Ar || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !oa(ie, pe) || // - In the case of a component, it could contain anything.
        ie.shapeFlag & 198) ? O(ie.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          S
        )
      );
      Ee(
        ie,
        pe,
        Ve,
        null,
        P,
        R,
        L,
        j,
        !0
      );
    }
  }, it = (T, F, S, P, R) => {
    if (F !== S) {
      if (F !== Pt)
        for (const L in F)
          !ua(L) && !(L in S) && d(
            T,
            L,
            F[L],
            null,
            R,
            P
          );
      for (const L in S) {
        if (ua(L)) continue;
        const j = S[L], H = F[L];
        j !== H && L !== "value" && d(T, L, H, j, R, P);
      }
      "value" in S && d(T, "value", F.value, S.value, R);
    }
  }, Dt = (T, F, S, P, R, L, j, H, ie) => {
    const pe = F.el = T ? T.el : g(""), Ve = F.anchor = T ? T.anchor : g("");
    let { patchFlag: ve, dynamicChildren: Ue, slotScopeIds: Ze } = F;
    // #5523 dev root fragment may inherit directives
    (Or || ve & 2048) && (ve = 0, ie = !1, Ue = null), Ze && (H = H ? H.concat(Ze) : Ze), T == null ? (a(pe, S, P), a(Ve, S, P), K(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      F.children || [],
      S,
      Ve,
      R,
      L,
      j,
      H,
      ie
    )) : ve > 0 && ve & 64 && Ue && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    T.dynamicChildren ? (At(
      T.dynamicChildren,
      Ue,
      S,
      R,
      L,
      j,
      H
    ), lu(T, F)) : Tt(
      T,
      F,
      S,
      Ve,
      R,
      L,
      j,
      H,
      ie
    );
  }, ln = (T, F, S, P, R, L, j, H, ie) => {
    F.slotScopeIds = H, T == null ? F.shapeFlag & 512 ? R.ctx.activate(
      F,
      S,
      P,
      j,
      ie
    ) : Vt(
      F,
      S,
      P,
      R,
      L,
      j,
      ie
    ) : St(T, F, ie);
  }, Vt = (T, F, S, P, R, L, j) => {
    const H = T.component = wh(
      T,
      P,
      R
    );
    if (H.type.__hmrId && Qd(H), Ja(T), Eo(H, "mount"), Ku(T) && (H.ctx.renderer = ot), Eo(H, "init"), xh(H, !1, j), To(H, "init"), Or && (T.el = null), H.asyncDep) {
      if (R && R.registerDep(H, Me, j), !T.el) {
        const ie = H.subTree = Ai(pr);
        Qe(null, ie, F, S);
      }
    } else
      Me(
        H,
        T,
        F,
        S,
        R,
        L,
        j
      );
    Za(), To(H, "mount");
  }, St = (T, F, S) => {
    const P = F.component = T.component;
    if (sh(T, F, S))
      if (P.asyncDep && !P.asyncResolved) {
        Ja(F), et(P, F, S), Za();
        return;
      } else
        P.next = F, P.update();
    else
      F.el = T.el, P.vnode = F;
  }, Me = (T, F, S, P, R, L, j) => {
    const H = () => {
      if (T.isMounted) {
        let { next: ve, bu: Ue, u: Ze, parent: nt, vnode: xt } = T;
        {
          const Mt = Xl(T);
          if (Mt) {
            ve && (ve.el = xt.el, et(T, ve, j)), Mt.asyncDep.then(() => {
              T.isUnmounted || H();
            });
            return;
          }
        }
        let yt = ve, nn;
        Ja(ve || T.vnode), Xi(T, !1), ve ? (ve.el = xt.el, et(T, ve, j)) : ve = xt, Ue && na(Ue), (nn = ve.props && ve.props.onVnodeBeforeUpdate) && Tr(nn, nt, ve, xt), Xi(T, !0), Eo(T, "render");
        const Xt = hc(T);
        To(T, "render");
        const Qt = T.subTree;
        T.subTree = Xt, Eo(T, "patch"), Ee(
          Qt,
          Xt,
          // parent may have changed if it's in a teleport
          O(Qt.el),
          // anchor may have changed if it's in a fragment
          b(Qt),
          T,
          R,
          L
        ), To(T, "patch"), ve.el = Xt.el, yt === null && uh(T, Xt.el), Ze && Gn(Ze, R), (nn = ve.props && ve.props.onVnodeUpdated) && Gn(
          () => Tr(nn, nt, ve, xt),
          R
        ), Rl(T), Za();
      } else {
        let ve;
        const { el: Ue, props: Ze } = F, { bm: nt, m: xt, parent: yt, root: nn, type: Xt } = T, Qt = pa(F);
        Xi(T, !1), nt && na(nt), !Qt && (ve = Ze && Ze.onVnodeBeforeMount) && Tr(ve, yt, F), Xi(T, !0);
        {
          nn.ce && // @ts-expect-error _def is private
          nn.ce._def.shadowRoot !== !1 && nn.ce._injectChildStyle(Xt), Eo(T, "render");
          const Mt = T.subTree = hc(T);
          To(T, "render"), Eo(T, "patch"), Ee(
            null,
            Mt,
            S,
            P,
            T,
            R,
            L
          ), To(T, "patch"), F.el = Mt.el;
        }
        if (xt && Gn(xt, R), !Qt && (ve = Ze && Ze.onVnodeMounted)) {
          const Mt = F;
          Gn(
            () => Tr(ve, yt, Mt),
            R
          );
        }
        (F.shapeFlag & 256 || yt && pa(yt.vnode) && yt.vnode.shapeFlag & 256) && T.a && Gn(T.a, R), T.isMounted = !0, tp(T), F = S = P = null;
      }
    };
    T.scope.on();
    const ie = T.effect = new al(H);
    T.scope.off();
    const pe = T.update = ie.run.bind(ie), Ve = T.job = ie.runIfDirty.bind(ie);
    Ve.i = T, Ve.id = T.uid, ie.scheduler = () => Cs(Ve), Xi(T, !0), ie.onTrack = T.rtc ? (ve) => na(T.rtc, ve) : void 0, ie.onTrigger = T.rtg ? (ve) => na(T.rtg, ve) : void 0, pe();
  }, et = (T, F, S) => {
    F.component = T;
    const P = T.vnode.props;
    T.vnode = F, T.next = null, Lp(T, F.props, P, S), Wp(T, F.children, S), hr(), ic(T), mr();
  }, Tt = (T, F, S, P, R, L, j, H, ie = !1) => {
    const pe = T && T.children, Ve = T ? T.shapeFlag : 0, ve = F.children, { patchFlag: Ue, shapeFlag: Ze } = F;
    if (Ue > 0) {
      if (Ue & 128) {
        qt(
          pe,
          ve,
          S,
          P,
          R,
          L,
          j,
          H,
          ie
        );
        return;
      } else if (Ue & 256) {
        Ot(
          pe,
          ve,
          S,
          P,
          R,
          L,
          j,
          H,
          ie
        );
        return;
      }
    }
    Ze & 8 ? (Ve & 16 && E(pe, R, L), ve !== pe && N(S, ve)) : Ve & 16 ? Ze & 16 ? qt(
      pe,
      ve,
      S,
      P,
      R,
      L,
      j,
      H,
      ie
    ) : E(pe, R, L, !0) : (Ve & 8 && N(S, ""), Ze & 16 && K(
      ve,
      S,
      P,
      R,
      L,
      j,
      H,
      ie
    ));
  }, Ot = (T, F, S, P, R, L, j, H, ie) => {
    T = T || Ao, F = F || Ao;
    const pe = T.length, Ve = F.length, ve = Math.min(pe, Ve);
    let Ue;
    for (Ue = 0; Ue < ve; Ue++) {
      const Ze = F[Ue] = ie ? _i(F[Ue]) : lr(F[Ue]);
      Ee(
        T[Ue],
        Ze,
        S,
        null,
        R,
        L,
        j,
        H,
        ie
      );
    }
    pe > Ve ? E(
      T,
      R,
      L,
      !0,
      !1,
      ve
    ) : K(
      F,
      S,
      P,
      R,
      L,
      j,
      H,
      ie,
      ve
    );
  }, qt = (T, F, S, P, R, L, j, H, ie) => {
    let pe = 0;
    const Ve = F.length;
    let ve = T.length - 1, Ue = Ve - 1;
    for (; pe <= ve && pe <= Ue; ) {
      const Ze = T[pe], nt = F[pe] = ie ? _i(F[pe]) : lr(F[pe]);
      if (oa(Ze, nt))
        Ee(
          Ze,
          nt,
          S,
          null,
          R,
          L,
          j,
          H,
          ie
        );
      else
        break;
      pe++;
    }
    for (; pe <= ve && pe <= Ue; ) {
      const Ze = T[ve], nt = F[Ue] = ie ? _i(F[Ue]) : lr(F[Ue]);
      if (oa(Ze, nt))
        Ee(
          Ze,
          nt,
          S,
          null,
          R,
          L,
          j,
          H,
          ie
        );
      else
        break;
      ve--, Ue--;
    }
    if (pe > ve) {
      if (pe <= Ue) {
        const Ze = Ue + 1, nt = Ze < Ve ? F[Ze].el : P;
        for (; pe <= Ue; )
          Ee(
            null,
            F[pe] = ie ? _i(F[pe]) : lr(F[pe]),
            S,
            nt,
            R,
            L,
            j,
            H,
            ie
          ), pe++;
      }
    } else if (pe > Ue)
      for (; pe <= ve; )
        Ft(T[pe], R, L, !0), pe++;
    else {
      const Ze = pe, nt = pe, xt = /* @__PURE__ */ new Map();
      for (pe = nt; pe <= Ue; pe++) {
        const Le = F[pe] = ie ? _i(F[pe]) : lr(F[pe]);
        Le.key != null && (xt.has(Le.key) && Pe(
          "Duplicate keys found during update:",
          JSON.stringify(Le.key),
          "Make sure keys are unique."
        ), xt.set(Le.key, pe));
      }
      let yt, nn = 0;
      const Xt = Ue - nt + 1;
      let Qt = !1, Mt = 0;
      const Wn = new Array(Xt);
      for (pe = 0; pe < Xt; pe++) Wn[pe] = 0;
      for (pe = Ze; pe <= ve; pe++) {
        const Le = T[pe];
        if (nn >= Xt) {
          Ft(Le, R, L, !0);
          continue;
        }
        let rn;
        if (Le.key != null)
          rn = xt.get(Le.key);
        else
          for (yt = nt; yt <= Ue; yt++)
            if (Wn[yt - nt] === 0 && oa(Le, F[yt])) {
              rn = yt;
              break;
            }
        rn === void 0 ? Ft(Le, R, L, !0) : (Wn[rn - nt] = pe + 1, rn >= Mt ? Mt = rn : Qt = !0, Ee(
          Le,
          F[rn],
          S,
          null,
          R,
          L,
          j,
          H,
          ie
        ), nn++);
      }
      const yn = Qt ? Jp(Wn) : Ao;
      for (yt = yn.length - 1, pe = Xt - 1; pe >= 0; pe--) {
        const Le = nt + pe, rn = F[Le], Kn = Le + 1 < Ve ? F[Le + 1].el : P;
        Wn[pe] === 0 ? Ee(
          null,
          rn,
          S,
          Kn,
          R,
          L,
          j,
          H,
          ie
        ) : Qt && (yt < 0 || pe !== yn[yt] ? Ht(rn, S, Kn, 2) : yt--);
      }
    }
  }, Ht = (T, F, S, P, R = null) => {
    const { el: L, type: j, transition: H, children: ie, shapeFlag: pe } = T;
    if (pe & 6) {
      Ht(T.component.subTree, F, S, P);
      return;
    }
    if (pe & 128) {
      T.suspense.move(F, S, P);
      return;
    }
    if (pe & 64) {
      j.move(T, F, S, ot);
      return;
    }
    if (j === Ar) {
      a(L, F, S);
      for (let ve = 0; ve < ie.length; ve++)
        Ht(ie[ve], F, S, P);
      a(T.anchor, F, S);
      return;
    }
    if (j === rs) {
      $e(T, F, S);
      return;
    }
    if (P !== 2 && pe & 1 && H)
      if (P === 0)
        H.beforeEnter(L), a(L, F, S), Gn(() => H.enter(L), R);
      else {
        const { leave: ve, delayLeave: Ue, afterLeave: Ze } = H, nt = () => {
          T.ctx.isUnmounted ? c(L) : a(L, F, S);
        }, xt = () => {
          ve(L, () => {
            nt(), Ze && Ze();
          });
        };
        Ue ? Ue(L, nt, xt) : xt();
      }
    else
      a(L, F, S);
  }, Ft = (T, F, S, P = !1, R = !1) => {
    const {
      type: L,
      props: j,
      ref: H,
      children: ie,
      dynamicChildren: pe,
      shapeFlag: Ve,
      patchFlag: ve,
      dirs: Ue,
      cacheIndex: Ze
    } = T;
    if (ve === -2 && (R = !1), H != null && (hr(), da(H, null, S, T, !0), mr()), Ze != null && (F.renderCache[Ze] = void 0), Ve & 256) {
      F.ctx.deactivate(T);
      return;
    }
    const nt = Ve & 1 && Ue, xt = !pa(T);
    let yt;
    if (xt && (yt = j && j.onVnodeBeforeUnmount) && Tr(yt, F, T), Ve & 6)
      zt(T.component, S, P);
    else {
      if (Ve & 128) {
        T.suspense.unmount(S, P);
        return;
      }
      nt && zi(T, null, F, "beforeUnmount"), Ve & 64 ? T.type.remove(
        T,
        F,
        S,
        ot,
        P
      ) : pe && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !pe.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (L !== Ar || ve > 0 && ve & 64) ? E(
        pe,
        F,
        S,
        !1,
        !0
      ) : (L === Ar && ve & 384 || !R && Ve & 16) && E(ie, F, S), P && wn(T);
    }
    (xt && (yt = j && j.onVnodeUnmounted) || nt) && Gn(() => {
      yt && Tr(yt, F, T), nt && zi(T, null, F, "unmounted");
    }, S);
  }, wn = (T) => {
    const { type: F, el: S, anchor: P, transition: R } = T;
    if (F === Ar) {
      T.patchFlag > 0 && T.patchFlag & 2048 && R && !R.persisted ? T.children.forEach((j) => {
        j.type === pr ? c(j.el) : wn(j);
      }) : Dn(S, P);
      return;
    }
    if (F === rs) {
      Fe(T);
      return;
    }
    const L = () => {
      c(S), R && !R.persisted && R.afterLeave && R.afterLeave();
    };
    if (T.shapeFlag & 1 && R && !R.persisted) {
      const { leave: j, delayLeave: H } = R, ie = () => j(S, L);
      H ? H(T.el, L, ie) : ie();
    } else
      L();
  }, Dn = (T, F) => {
    let S;
    for (; T !== F; )
      S = ee(T), c(T), T = S;
    c(F);
  }, zt = (T, F, S) => {
    T.type.__hmrId && zd(T);
    const {
      bum: P,
      scope: R,
      job: L,
      subTree: j,
      um: H,
      m: ie,
      a: pe,
      parent: Ve,
      slots: { __: ve }
    } = T;
    pc(ie), pc(pe), P && na(P), Ve && ut(ve) && ve.forEach((Ue) => {
      Ve.renderCache[Ue] = void 0;
    }), R.stop(), L && (L.flags |= 8, Ft(j, T, F, S)), H && Gn(H, F), Gn(() => {
      T.isUnmounted = !0;
    }, F), F && F.pendingBranch && !F.isUnmounted && T.asyncDep && !T.asyncResolved && T.suspenseId === F.pendingId && (F.deps--, F.deps === 0 && F.resolve()), rp(T);
  }, E = (T, F, S, P = !1, R = !1, L = 0) => {
    for (let j = L; j < T.length; j++)
      Ft(T[j], F, S, P, R);
  }, b = (T) => {
    if (T.shapeFlag & 6)
      return b(T.component.subTree);
    if (T.shapeFlag & 128)
      return T.suspense.next();
    const F = ee(T.anchor || T.el), S = F && F[up];
    return S ? ee(S) : F;
  };
  let z = !1;
  const W = (T, F, S) => {
    T == null ? F._vnode && Ft(F._vnode, null, null, !0) : Ee(
      F._vnode || null,
      T,
      F,
      null,
      null,
      null,
      S
    ), F._vnode = T, z || (z = !0, ic(), Il(), z = !1);
  }, ot = {
    p: Ee,
    um: Ft,
    m: Ht,
    r: wn,
    mt: Vt,
    mc: K,
    pc: Tt,
    pbc: At,
    n: b,
    o: e
  };
  return {
    render: W,
    hydrate: void 0,
    createApp: Np(W)
  };
}
function Ys({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function Xi({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Xp(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function lu(e, t, o = !1) {
  const a = e.children, c = t.children;
  if (ut(a) && ut(c))
    for (let d = 0; d < a.length; d++) {
      const y = a[d];
      let g = c[d];
      g.shapeFlag & 1 && !g.dynamicChildren && ((g.patchFlag <= 0 || g.patchFlag === 32) && (g = c[d] = _i(c[d]), g.el = y.el), !o && g.patchFlag !== -2 && lu(y, g)), g.type === Ca && (g.el = y.el), g.type === pr && !g.el && (g.el = y.el), g.el && (g.el.__vnode = g);
    }
}
function Jp(e) {
  const t = e.slice(), o = [0];
  let a, c, d, y, g;
  const x = e.length;
  for (a = 0; a < x; a++) {
    const $ = e[a];
    if ($ !== 0) {
      if (c = o[o.length - 1], e[c] < $) {
        t[a] = c, o.push(a);
        continue;
      }
      for (d = 0, y = o.length - 1; d < y; )
        g = d + y >> 1, e[o[g]] < $ ? d = g + 1 : y = g;
      $ < e[o[d]] && (d > 0 && (t[a] = o[d - 1]), o[d] = a);
    }
  }
  for (d = o.length, y = o[d - 1]; d-- > 0; )
    o[d] = y, y = t[y];
  return o;
}
function Xl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Xl(t);
}
function pc(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Zp = Symbol.for("v-scx"), eh = () => {
  {
    const e = ts(Zp);
    return e || Pe(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function th(e, t) {
  return Uu(e, null, t);
}
function ns(e, t, o) {
  return ct(t) || Pe(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Uu(e, t, o);
}
function Uu(e, t, o = Pt) {
  const { immediate: a, deep: c, flush: d, once: y } = o;
  t || (a !== void 0 && Pe(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), c !== void 0 && Pe(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), y !== void 0 && Pe(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const g = sn({}, o);
  g.onWarn = Pe;
  const x = t && a || !t && d !== "post";
  let $;
  if (wa) {
    if (d === "sync") {
      const le = eh();
      $ = le.__watcherHandles || (le.__watcherHandles = []);
    } else if (!x) {
      const le = () => {
      };
      return le.stop = Sn, le.resume = Sn, le.pause = Sn, le;
    }
  }
  const N = mn;
  g.call = (le, we, Ee) => Nr(le, N, we, Ee);
  let O = !1;
  d === "post" ? g.scheduler = (le) => {
    Gn(le, N && N.suspense);
  } : d !== "sync" && (O = !0, g.scheduler = (le, we) => {
    we ? le() : Cs(le);
  }), g.augmentJob = (le) => {
    t && (le.flags |= 4), O && (le.flags |= 2, N && (le.id = N.uid, le.i = N));
  };
  const ee = Bd(e, t, g);
  return wa && ($ ? $.push(ee) : x && ee()), ee;
}
function nh(e, t, o) {
  const a = this.proxy, c = tn(e) ? e.includes(".") ? Jl(a, e) : () => a[e] : e.bind(a, a);
  let d;
  ct(t) ? d = t : (d = t.handler, o = t);
  const y = Aa(this), g = Uu(c, d.bind(a), o);
  return y(), g;
}
function Jl(e, t) {
  const o = t.split(".");
  return () => {
    let a = e;
    for (let c = 0; c < o.length && a; c++)
      a = a[o[c]];
    return a;
  };
}
const rh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${fr(t)}Modifiers`] || e[`${Ii(t)}Modifiers`];
function ih(e, t, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || Pt;
  {
    const {
      emitsOptions: N,
      propsOptions: [O]
    } = e;
    if (N)
      if (!(t in N))
        (!O || !(Ji(fr(t)) in O)) && Pe(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ji(fr(t))}" prop.`
        );
      else {
        const ee = N[t];
        ct(ee) && (ee(...o) || Pe(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let c = o;
  const d = t.startsWith("update:"), y = d && rh(a, t.slice(7));
  y && (y.trim && (c = o.map((N) => tn(N) ? N.trim() : N)), y.number && (c = o.map(Jf))), ap(e, t, c);
  {
    const N = t.toLowerCase();
    N !== t && a[Ji(N)] && Pe(
      `Event "${N}" is emitted in component ${Ds(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ii(
        t
      )}" instead of "${t}".`
    );
  }
  let g, x = a[g = Ji(t)] || // also try camelCase event handler (#2249)
  a[g = Ji(fr(t))];
  !x && d && (x = a[g = Ji(Ii(t))]), x && Nr(
    x,
    e,
    6,
    c
  );
  const $ = a[g + "Once"];
  if ($) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[g])
      return;
    e.emitted[g] = !0, Nr(
      $,
      e,
      6,
      c
    );
  }
}
function Zl(e, t, o = !1) {
  const a = t.emitsCache, c = a.get(e);
  if (c !== void 0)
    return c;
  const d = e.emits;
  let y = {}, g = !1;
  if (!ct(e)) {
    const x = ($) => {
      const N = Zl($, t, !0);
      N && (g = !0, sn(y, N));
    };
    !o && t.mixins.length && t.mixins.forEach(x), e.extends && x(e.extends), e.mixins && e.mixins.forEach(x);
  }
  return !d && !g ? ($t(e) && a.set(e, null), null) : (ut(d) ? d.forEach((x) => y[x] = null) : sn(y, d), $t(e) && a.set(e, y), y);
}
function Is(e, t) {
  return !e || !Sa(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), _t(e, t[0].toLowerCase() + t.slice(1)) || _t(e, Ii(t)) || _t(e, t));
}
let fu = !1;
function vs() {
  fu = !0;
}
function hc(e) {
  const {
    type: t,
    vnode: o,
    proxy: a,
    withProxy: c,
    propsOptions: [d],
    slots: y,
    attrs: g,
    emit: x,
    render: $,
    renderCache: N,
    props: O,
    data: ee,
    setupState: le,
    ctx: we,
    inheritAttrs: Ee
  } = e, He = ps(e);
  let Qe, Je;
  fu = !1;
  try {
    if (o.shapeFlag & 4) {
      const Fe = c || a, fe = le.__isScriptSetup ? new Proxy(Fe, {
        get(ge, qe, K) {
          return Pe(
            `Property '${String(
              qe
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ge, qe, K);
        }
      }) : Fe;
      Qe = lr(
        $.call(
          fe,
          Fe,
          N,
          Dr(O),
          le,
          ee,
          we
        )
      ), Je = g;
    } else {
      const Fe = t;
      g === O && vs(), Qe = lr(
        Fe.length > 1 ? Fe(
          Dr(O),
          {
            get attrs() {
              return vs(), Dr(g);
            },
            slots: y,
            emit: x
          }
        ) : Fe(
          Dr(O),
          null
        )
      ), Je = t.props ? g : oh(g);
    }
  } catch (Fe) {
    ha.length = 0, Ea(Fe, e, 1), Qe = Ai(pr);
  }
  let De = Qe, $e;
  if (Qe.patchFlag > 0 && Qe.patchFlag & 2048 && ([De, $e] = ef(Qe)), Je && Ee !== !1) {
    const Fe = Object.keys(Je), { shapeFlag: fe } = De;
    if (Fe.length) {
      if (fe & 7)
        d && Fe.some(us) && (Je = ah(
          Je,
          d
        )), De = Pi(De, Je, !1, !0);
      else if (!fu && De.type !== pr) {
        const ge = Object.keys(g), qe = [], K = [];
        for (let dt = 0, At = ge.length; dt < At; dt++) {
          const it = ge[dt];
          Sa(it) ? us(it) || qe.push(it[2].toLowerCase() + it.slice(3)) : K.push(it);
        }
        K.length && Pe(
          `Extraneous non-props attributes (${K.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), qe.length && Pe(
          `Extraneous non-emits event listeners (${qe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return o.dirs && (mc(De) || Pe(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), De = Pi(De, null, !1, !0), De.dirs = De.dirs ? De.dirs.concat(o.dirs) : o.dirs), o.transition && (mc(De) || Pe(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), ju(De, o.transition)), $e ? $e(De) : Qe = De, ps(He), Qe;
}
const ef = (e) => {
  const t = e.children, o = e.dynamicChildren, a = Gu(t, !1);
  if (a) {
    if (a.patchFlag > 0 && a.patchFlag & 2048)
      return ef(a);
  } else return [e, void 0];
  const c = t.indexOf(a), d = o ? o.indexOf(a) : -1, y = (g) => {
    t[c] = g, o && (d > -1 ? o[d] = g : g.patchFlag > 0 && (e.dynamicChildren = [...o, g]));
  };
  return [lr(a), y];
};
function Gu(e, t = !0) {
  let o;
  for (let a = 0; a < e.length; a++) {
    const c = e[a];
    if (Ps(c)) {
      if (c.type !== pr || c.children === "v-if") {
        if (o)
          return;
        if (o = c, t && o.patchFlag > 0 && o.patchFlag & 2048)
          return Gu(o.children);
      }
    } else
      return;
  }
  return o;
}
const oh = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || Sa(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, ah = (e, t) => {
  const o = {};
  for (const a in e)
    (!us(a) || !(a.slice(9) in t)) && (o[a] = e[a]);
  return o;
}, mc = (e) => e.shapeFlag & 7 || e.type === pr;
function sh(e, t, o) {
  const { props: a, children: c, component: d } = e, { props: y, children: g, patchFlag: x } = t, $ = d.emitsOptions;
  if ((c || g) && Or || t.dirs || t.transition)
    return !0;
  if (o && x >= 0) {
    if (x & 1024)
      return !0;
    if (x & 16)
      return a ? yc(a, y, $) : !!y;
    if (x & 8) {
      const N = t.dynamicProps;
      for (let O = 0; O < N.length; O++) {
        const ee = N[O];
        if (y[ee] !== a[ee] && !Is($, ee))
          return !0;
      }
    }
  } else
    return (c || g) && (!g || !g.$stable) ? !0 : a === y ? !1 : a ? y ? yc(a, y, $) : !0 : !!y;
  return !1;
}
function yc(e, t, o) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let c = 0; c < a.length; c++) {
    const d = a[c];
    if (t[d] !== e[d] && !Is(o, d))
      return !0;
  }
  return !1;
}
function uh({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const tf = (e) => e.__isSuspense;
function ch(e, t) {
  t && t.pendingBranch ? ut(e) ? t.effects.push(...e) : t.effects.push(e) : Al(e);
}
const Ar = Symbol.for("v-fgt"), Ca = Symbol.for("v-txt"), pr = Symbol.for("v-cmt"), rs = Symbol.for("v-stc"), ha = [];
let Hn = null;
function nf(e = !1) {
  ha.push(Hn = e ? null : []);
}
function lh() {
  ha.pop(), Hn = ha[ha.length - 1] || null;
}
let ba = 1;
function vc(e, t = !1) {
  ba += e, e < 0 && Hn && t && (Hn.hasOnce = !0);
}
function rf(e) {
  return e.dynamicChildren = ba > 0 ? Hn || Ao : null, lh(), ba > 0 && Hn && Hn.push(e), e;
}
function fh(e, t, o, a, c, d) {
  return rf(
    af(
      e,
      t,
      o,
      a,
      c,
      d,
      !0
    )
  );
}
function dh(e, t, o, a, c) {
  return rf(
    Ai(
      e,
      t,
      o,
      a,
      c,
      !0
    )
  );
}
function Ps(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function oa(e, t) {
  if (t.shapeFlag & 6 && e.component) {
    const o = es.get(t.type);
    if (o && o.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const ph = (...e) => hh(
  ...e
), of = ({ key: e }) => e ?? null, is = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? tn(e) || an(e) || ct(e) ? { i: Ln, r: e, k: t, f: !!o } : e : null);
function af(e, t = null, o = null, a = 0, c = null, d = e === Ar ? 0 : 1, y = !1, g = !1) {
  const x = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && of(t),
    ref: t && is(t),
    scopeId: kl,
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
    shapeFlag: d,
    patchFlag: a,
    dynamicProps: c,
    dynamicChildren: null,
    appContext: null,
    ctx: Ln
  };
  return g ? (Hu(x, o), d & 128 && e.normalize(x)) : o && (x.shapeFlag |= tn(o) ? 8 : 16), x.key !== x.key && Pe("VNode created with invalid key (NaN). VNode type:", x.type), ba > 0 && // avoid a block node from tracking itself
  !y && // has current parent block
  Hn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (x.patchFlag > 0 || d & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  x.patchFlag !== 32 && Hn.push(x), x;
}
const Ai = ph;
function hh(e, t = null, o = null, a = 0, c = null, d = !1) {
  if ((!e || e === Sp) && (e || Pe(`Invalid vnode type when creating vnode: ${e}.`), e = pr), Ps(e)) {
    const g = Pi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && Hu(g, o), ba > 0 && !d && Hn && (g.shapeFlag & 6 ? Hn[Hn.indexOf(e)] = g : Hn.push(g)), g.patchFlag = -2, g;
  }
  if (ff(e) && (e = e.__vccOpts), t) {
    t = mh(t);
    let { class: g, style: x } = t;
    g && !tn(g) && (t.class = Iu(g)), $t(x) && (cs(x) && !ut(x) && (x = sn({}, x)), t.style = Au(x));
  }
  const y = tn(e) ? 1 : tf(e) ? 128 : cp(e) ? 64 : $t(e) ? 4 : ct(e) ? 2 : 0;
  return y & 4 && cs(e) && (e = mt(e), Pe(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), af(
    e,
    t,
    o,
    a,
    c,
    y,
    d,
    !0
  );
}
function mh(e) {
  return e ? cs(e) || Gl(e) ? sn({}, e) : e : null;
}
function Pi(e, t, o = !1, a = !1) {
  const { props: c, ref: d, patchFlag: y, children: g, transition: x } = e, $ = t ? vh(c || {}, t) : c, N = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: $,
    key: $ && of($),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && d ? ut(d) ? d.concat(is(t)) : [d, is(t)] : is(t)
    ) : d,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: y === -1 && ut(g) ? g.map(sf) : g,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ar ? y === -1 ? 16 : y | 16 : y,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: x,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Pi(e.ssContent),
    ssFallback: e.ssFallback && Pi(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return x && a && ju(
    N,
    x.clone(N)
  ), N;
}
function sf(e) {
  const t = Pi(e);
  return ut(e.children) && (t.children = e.children.map(sf)), t;
}
function yh(e = " ", t = 0) {
  return Ai(Ca, null, e, t);
}
function lr(e) {
  return e == null || typeof e == "boolean" ? Ai(pr) : ut(e) ? Ai(
    Ar,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ps(e) ? _i(e) : Ai(Ca, null, String(e));
}
function _i(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Pi(e);
}
function Hu(e, t) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (t == null)
    t = null;
  else if (ut(t))
    o = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const c = t.default;
      c && (c._c && (c._d = !1), Hu(e, c()), c._c && (c._d = !0));
      return;
    } else {
      o = 32;
      const c = t._;
      !c && !Gl(t) ? t._ctx = Ln : c === 3 && Ln && (Ln.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ct(t) ? (t = { default: t, _ctx: Ln }, o = 32) : (t = String(t), a & 64 ? (o = 16, t = [yh(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function vh(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const c in a)
      if (c === "class")
        t.class !== a.class && (t.class = Iu([t.class, a.class]));
      else if (c === "style")
        t.style = Au([t.style, a.style]);
      else if (Sa(c)) {
        const d = t[c], y = a[c];
        y && d !== y && !(ut(d) && d.includes(y)) && (t[c] = d ? [].concat(d, y) : y);
      } else c !== "" && (t[c] = a[c]);
  }
  return t;
}
function Tr(e, t, o, a = null) {
  Nr(e, t, 7, [
    o,
    a
  ]);
}
const gh = Vl();
let bh = 0;
function wh(e, t, o) {
  const a = e.type, c = (t ? t.appContext : e.appContext) || gh, d = {
    uid: bh++,
    vnode: e,
    type: a,
    parent: t,
    appContext: c,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new fd(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(c.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Wl(a, c),
    emitsOptions: Zl(a, c),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Pt,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: Pt,
    data: Pt,
    props: Pt,
    attrs: Pt,
    slots: Pt,
    refs: Pt,
    setupState: Pt,
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
  return d.ctx = xp(d), d.root = t ? t.root : d, d.emit = ih.bind(null, d), e.ce && e.ce(d), d;
}
let mn = null;
const _h = () => mn || Ln;
let gs, du;
{
  const e = xa(), t = (o, a) => {
    let c;
    return (c = e[o]) || (c = e[o] = []), c.push(a), (d) => {
      c.length > 1 ? c.forEach((y) => y(d)) : c[0](d);
    };
  };
  gs = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => mn = o
  ), du = t(
    "__VUE_SSR_SETTERS__",
    (o) => wa = o
  );
}
const Aa = (e) => {
  const t = mn;
  return gs(e), e.scope.on(), () => {
    e.scope.off(), gs(t);
  };
}, gc = () => {
  mn && mn.scope.off(), gs(null);
}, Sh = /* @__PURE__ */ Jr("slot,component");
function pu(e, { isNativeTag: t }) {
  (Sh(e) || t(e)) && Pe(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function uf(e) {
  return e.vnode.shapeFlag & 4;
}
let wa = !1;
function xh(e, t = !1, o = !1) {
  t && du(t);
  const { props: a, children: c } = e.vnode, d = uf(e);
  Fp(e, a, d, t), Hp(e, c, o || t);
  const y = d ? Eh(e, t) : void 0;
  return t && du(!1), y;
}
function Eh(e, t) {
  var o;
  const a = e.type;
  {
    if (a.name && pu(a.name, e.appContext.config), a.components) {
      const d = Object.keys(a.components);
      for (let y = 0; y < d.length; y++)
        pu(d[y], e.appContext.config);
    }
    if (a.directives) {
      const d = Object.keys(a.directives);
      for (let y = 0; y < d.length; y++)
        Fl(d[y]);
    }
    a.compilerOptions && Th() && Pe(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Kl), Ep(e);
  const { setup: c } = a;
  if (c) {
    hr();
    const d = e.setupContext = c.length > 1 ? Ih(e) : null, y = Aa(e), g = No(
      c,
      e,
      0,
      [
        Dr(e.props),
        d
      ]
    ), x = Eu(g);
    if (mr(), y(), (x || e.sp) && !pa(e) && Ll(e), x) {
      if (g.then(gc, gc), t)
        return g.then(($) => {
          bc(e, $, t);
        }).catch(($) => {
          Ea($, e, 0);
        });
      if (e.asyncDep = g, !e.suspense) {
        const $ = (o = a.name) != null ? o : "Anonymous";
        Pe(
          `Component <${$}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      bc(e, g, t);
  } else
    cf(e, t);
}
function bc(e, t, o) {
  ct(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : $t(t) ? (Ps(t) && Pe(
    "setup() should not return VNodes directly - return a render function instead."
  ), e.devtoolsRawSetupState = t, e.setupState = xl(t), Tp(e)) : t !== void 0 && Pe(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), cf(e, o);
}
const Th = () => !0;
function cf(e, t, o) {
  const a = e.type;
  e.render || (e.render = a.render || Sn);
  {
    const c = Aa(e);
    hr();
    try {
      Ap(e);
    } finally {
      mr(), c();
    }
  }
  !a.render && e.render === Sn && !t && (a.template ? Pe(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : Pe("Component is missing template or render function: ", a));
}
const Ch = {
  get(e, t) {
    return vs(), hn(e, "get", ""), e[t];
  },
  set() {
    return Pe("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return Pe("setupContext.attrs is readonly."), !1;
  }
};
function Ah(e) {
  return new Proxy(e.slots, {
    get(t, o) {
      return hn(e, "get", "$slots"), t[o];
    }
  });
}
function Ih(e) {
  const t = (o) => {
    if (e.exposed && Pe("expose() should be called only once per setup()."), o != null) {
      let a = typeof o;
      a === "object" && (ut(o) ? a = "array" : an(o) && (a = "ref")), a !== "object" && Pe(
        `expose() should be passed a plain object, received ${a}.`
      );
    }
    e.exposed = o || {};
  };
  {
    let o, a;
    return Object.freeze({
      get attrs() {
        return o || (o = new Proxy(e.attrs, Ch));
      },
      get slots() {
        return a || (a = Ah(e));
      },
      get emit() {
        return (c, ...d) => e.emit(c, ...d);
      },
      expose: t
    });
  }
}
function Wu(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(xl(Rd(e.exposed)), {
    get(t, o) {
      if (o in t)
        return t[o];
      if (o in ro)
        return ro[o](e);
    },
    has(t, o) {
      return o in t || o in ro;
    }
  })) : e.proxy;
}
const Ph = /(?:^|[-_])(\w)/g, Dh = (e) => e.replace(Ph, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function lf(e, t = !0) {
  return ct(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ds(e, t, o = !1) {
  let a = lf(t);
  if (!a && t.__file) {
    const c = t.__file.match(/([^/\\]+)\.\w+$/);
    c && (a = c[1]);
  }
  if (!a && e && e.parent) {
    const c = (d) => {
      for (const y in d)
        if (d[y] === t)
          return y;
    };
    a = c(
      e.components || e.parent.type.components
    ) || c(e.appContext.components);
  }
  return a ? Dh(a) : o ? "App" : "Anonymous";
}
function ff(e) {
  return ct(e) && "__vccOpts" in e;
}
const Oh = (e, t) => {
  const o = jd(e, t, wa);
  {
    const a = _h();
    a && a.appContext.config.warnRecursiveComputed && (o._warnRecursive = !0);
  }
  return o;
};
function Rh() {
  if (typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, o = { style: "color:#f5222d" }, a = { style: "color:#eb2f96" }, c = {
    __vue_custom_formatter: !0,
    header(O) {
      if (!$t(O))
        return null;
      if (O.__isVue)
        return ["div", e, "VueInstance"];
      if (an(O)) {
        hr();
        const ee = O.value;
        return mr(), [
          "div",
          {},
          ["span", e, N(O)],
          "<",
          g(ee),
          ">"
        ];
      } else {
        if (Po(O))
          return [
            "div",
            {},
            ["span", e, jn(O) ? "ShallowReactive" : "Reactive"],
            "<",
            g(O),
            `>${Xr(O) ? " (readonly)" : ""}`
          ];
        if (Xr(O))
          return [
            "div",
            {},
            ["span", e, jn(O) ? "ShallowReadonly" : "Readonly"],
            "<",
            g(O),
            ">"
          ];
      }
      return null;
    },
    hasBody(O) {
      return O && O.__isVue;
    },
    body(O) {
      if (O && O.__isVue)
        return [
          "div",
          {},
          ...d(O.$)
        ];
    }
  };
  function d(O) {
    const ee = [];
    O.type.props && O.props && ee.push(y("props", mt(O.props))), O.setupState !== Pt && ee.push(y("setup", O.setupState)), O.data !== Pt && ee.push(y("data", mt(O.data)));
    const le = x(O, "computed");
    le && ee.push(y("computed", le));
    const we = x(O, "inject");
    return we && ee.push(y("injected", we)), ee.push([
      "div",
      {},
      [
        "span",
        {
          style: a.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: O }]
    ]), ee;
  }
  function y(O, ee) {
    return ee = sn({}, ee), Object.keys(ee).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        O
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(ee).map((le) => [
          "div",
          {},
          ["span", a, le + ": "],
          g(ee[le], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function g(O, ee = !0) {
    return typeof O == "number" ? ["span", t, O] : typeof O == "string" ? ["span", o, JSON.stringify(O)] : typeof O == "boolean" ? ["span", a, O] : $t(O) ? ["object", { object: ee ? mt(O) : O }] : ["span", o, String(O)];
  }
  function x(O, ee) {
    const le = O.type;
    if (ct(le))
      return;
    const we = {};
    for (const Ee in O.ctx)
      $(le, Ee, ee) && (we[Ee] = O.ctx[Ee]);
    return we;
  }
  function $(O, ee, le) {
    const we = O[le];
    if (ut(we) && we.includes(ee) || $t(we) && ee in we || O.extends && $(O.extends, ee, le) || O.mixins && O.mixins.some((Ee) => $(Ee, ee, le)))
      return !0;
  }
  function N(O) {
    return jn(O) ? "ShallowRef" : O.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(c) : window.devtoolsFormatters = [c];
}
const wc = "3.5.17", zr = Pe;
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let hu;
const _c = typeof window < "u" && window.trustedTypes;
if (_c)
  try {
    hu = /* @__PURE__ */ _c.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    zr(`Error creating trusted types policy: ${e}`);
  }
const df = hu ? (e) => hu.createHTML(e) : (e) => e, Nh = "http://www.w3.org/2000/svg", kh = "http://www.w3.org/1998/Math/MathML", Qr = typeof document < "u" ? document : null, Sc = Qr && /* @__PURE__ */ Qr.createElement("template"), Fh = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, a) => {
    const c = t === "svg" ? Qr.createElementNS(Nh, e) : t === "mathml" ? Qr.createElementNS(kh, e) : o ? Qr.createElement(e, { is: o }) : Qr.createElement(e);
    return e === "select" && a && a.multiple != null && c.setAttribute("multiple", a.multiple), c;
  },
  createText: (e) => Qr.createTextNode(e),
  createComment: (e) => Qr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Qr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, o, a, c, d) {
    const y = o ? o.previousSibling : t.lastChild;
    if (c && (c === d || c.nextSibling))
      for (; t.insertBefore(c.cloneNode(!0), o), !(c === d || !(c = c.nextSibling)); )
        ;
    else {
      Sc.innerHTML = df(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const g = Sc.content;
      if (a === "svg" || a === "mathml") {
        const x = g.firstChild;
        for (; x.firstChild; )
          g.appendChild(x.firstChild);
        g.removeChild(x);
      }
      t.insertBefore(g, o);
    }
    return [
      // first
      y ? y.nextSibling : t.firstChild,
      // last
      o ? o.previousSibling : t.lastChild
    ];
  }
}, Mh = Symbol("_vtc");
function Lh(e, t, o) {
  const a = e[Mh];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const xc = Symbol("_vod"), jh = Symbol("_vsh"), Kh = Symbol("CSS_VAR_TEXT"), Bh = /(^|;)\s*display\s*:/;
function $h(e, t, o) {
  const a = e.style, c = tn(o);
  let d = !1;
  if (o && !c) {
    if (t)
      if (tn(t))
        for (const y of t.split(";")) {
          const g = y.slice(0, y.indexOf(":")).trim();
          o[g] == null && os(a, g, "");
        }
      else
        for (const y in t)
          o[y] == null && os(a, y, "");
    for (const y in o)
      y === "display" && (d = !0), os(a, y, o[y]);
  } else if (c) {
    if (t !== o) {
      const y = a[Kh];
      y && (o += ";" + y), a.cssText = o, d = Bh.test(o);
    }
  } else t && e.removeAttribute("style");
  xc in e && (e[xc] = d ? a.display : "", e[jh] && (a.display = "none"));
}
const Vh = /[^\\];\s*$/, Ec = /\s*!important$/;
function os(e, t, o) {
  if (ut(o))
    o.forEach((a) => os(e, t, a));
  else if (o == null && (o = ""), Vh.test(o) && zr(
    `Unexpected semicolon at the end of '${t}' style value: '${o}'`
  ), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const a = qh(e, t);
    Ec.test(o) ? e.setProperty(
      Ii(a),
      o.replace(Ec, ""),
      "important"
    ) : e[a] = o;
  }
}
const Tc = ["Webkit", "Moz", "ms"], Qs = {};
function qh(e, t) {
  const o = Qs[t];
  if (o)
    return o;
  let a = fr(t);
  if (a !== "filter" && a in e)
    return Qs[t] = a;
  a = xs(a);
  for (let c = 0; c < Tc.length; c++) {
    const d = Tc[c] + a;
    if (d in e)
      return Qs[t] = d;
  }
  return t;
}
const Cc = "http://www.w3.org/1999/xlink";
function Ac(e, t, o, a, c, d = ld(t)) {
  a && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Cc, t.slice(6, t.length)) : e.setAttributeNS(Cc, t, o) : o == null || d && !ol(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    d ? "" : Ro(o) ? String(o) : o
  );
}
function Ic(e, t, o, a, c) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? df(o) : o);
    return;
  }
  const d = e.tagName;
  if (t === "value" && d !== "PROGRESS" && // custom elements may use _value internally
  !d.includes("-")) {
    const g = d === "OPTION" ? e.getAttribute("value") || "" : e.value, x = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (g !== x || !("_value" in e)) && (e.value = x), o == null && e.removeAttribute(t), e._value = o;
    return;
  }
  let y = !1;
  if (o === "" || o == null) {
    const g = typeof e[t];
    g === "boolean" ? o = ol(o) : o == null && g === "string" ? (o = "", y = !0) : g === "number" && (o = 0, y = !0);
  }
  try {
    e[t] = o;
  } catch (g) {
    y || zr(
      `Failed setting prop "${t}" on <${d.toLowerCase()}>: value ${o} is invalid.`,
      g
    );
  }
  y && e.removeAttribute(c || t);
}
function Uh(e, t, o, a) {
  e.addEventListener(t, o, a);
}
function Gh(e, t, o, a) {
  e.removeEventListener(t, o, a);
}
const Pc = Symbol("_vei");
function Hh(e, t, o, a, c = null) {
  const d = e[Pc] || (e[Pc] = {}), y = d[t];
  if (a && y)
    y.value = Oc(a, t);
  else {
    const [g, x] = Wh(t);
    if (a) {
      const $ = d[t] = zh(
        Oc(a, t),
        c
      );
      Uh(e, g, $, x);
    } else y && (Gh(e, g, y, x), d[t] = void 0);
  }
}
const Dc = /(?:Once|Passive|Capture)$/;
function Wh(e) {
  let t;
  if (Dc.test(e)) {
    t = {};
    let a;
    for (; a = e.match(Dc); )
      e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ii(e.slice(2)), t];
}
let zs = 0;
const Yh = /* @__PURE__ */ Promise.resolve(), Qh = () => zs || (Yh.then(() => zs = 0), zs = Date.now());
function zh(e, t) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    Nr(
      Xh(a, o.value),
      t,
      5,
      [a]
    );
  };
  return o.value = e, o.attached = Qh(), o;
}
function Oc(e, t) {
  return ct(e) || ut(e) ? e : (zr(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Sn);
}
function Xh(e, t) {
  if (ut(t)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, t.map(
      (a) => (c) => !c._stopped && a && a(c)
    );
  } else
    return t;
}
const Rc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Jh = (e, t, o, a, c, d) => {
  const y = c === "svg";
  t === "class" ? Lh(e, a, y) : t === "style" ? $h(e, o, a) : Sa(t) ? us(t) || Hh(e, t, o, a, d) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Zh(e, t, a, y)) ? (Ic(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ac(e, t, a, y, d, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !tn(a)) ? Ic(e, fr(t), a, d, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), Ac(e, t, a, y));
};
function Zh(e, t, o, a) {
  if (a)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Rc(t) && ct(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const c = e.tagName;
    if (c === "IMG" || c === "VIDEO" || c === "CANVAS" || c === "SOURCE")
      return !1;
  }
  return Rc(t) && tn(o) ? !1 : t in e;
}
const em = /* @__PURE__ */ sn({ patchProp: Jh }, Fh);
let Nc;
function tm() {
  return Nc || (Nc = Qp(em));
}
const nm = (...e) => {
  const t = tm().createApp(...e);
  im(t), om(t);
  const { mount: o } = t;
  return t.mount = (a) => {
    const c = am(a);
    if (!c) return;
    const d = t._component;
    !ct(d) && !d.render && !d.template && (d.template = c.innerHTML), c.nodeType === 1 && (c.textContent = "");
    const y = o(c, !1, rm(c));
    return c instanceof Element && (c.removeAttribute("v-cloak"), c.setAttribute("data-v-app", "")), y;
  }, t;
};
function rm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function im(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => ad(t) || sd(t) || ud(t),
    writable: !1
  });
}
function om(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        zr(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const o = e.config.compilerOptions, a = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return zr(a), o;
      },
      set() {
        zr(a);
      }
    });
  }
}
function am(e) {
  if (tn(e)) {
    const t = document.querySelector(e);
    return t || zr(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && zr(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function sm() {
  Rh();
}
sm();
var um = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function lm(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var o = function a() {
      var c = !1;
      try {
        c = this instanceof a;
      } catch {
      }
      return c ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    o.prototype = t.prototype;
  } else o = {};
  return Object.defineProperty(o, "__esModule", { value: !0 }), Object.keys(e).forEach(function(a) {
    var c = Object.getOwnPropertyDescriptor(e, a);
    Object.defineProperty(o, a, c.get ? c : {
      enumerable: !0,
      get: function() {
        return e[a];
      }
    });
  }), o;
}
var kc = {};
const fm = {}, dm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fm
}, Symbol.toStringTag, { value: "Module" })), Fc = /* @__PURE__ */ lm(dm);
var Mc;
function pm() {
  return Mc || (Mc = 1, function(e) {
    (function(t) {
      t.parser = function(E, b) {
        return new a(E, b);
      }, t.SAXParser = a, t.SAXStream = N, t.createStream = $, t.MAX_BUFFER_LENGTH = 64 * 1024;
      var o = [
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
      function a(E, b) {
        if (!(this instanceof a))
          return new a(E, b);
        var z = this;
        d(z), z.q = z.c = "", z.bufferCheckPosition = t.MAX_BUFFER_LENGTH, z.opt = b || {}, z.opt.lowercase = z.opt.lowercase || z.opt.lowercasetags, z.looseCase = z.opt.lowercase ? "toLowerCase" : "toUpperCase", z.tags = [], z.closed = z.closedRoot = z.sawRoot = !1, z.tag = z.error = null, z.strict = !!E, z.noscript = !!(E || z.opt.noscript), z.state = K.BEGIN, z.strictEntities = z.opt.strictEntities, z.ENTITIES = z.strictEntities ? Object.create(t.XML_ENTITIES) : Object.create(t.ENTITIES), z.attribList = [], z.opt.xmlns && (z.ns = Object.create(Ee)), z.opt.unquotedAttributeValues === void 0 && (z.opt.unquotedAttributeValues = !E), z.trackPosition = z.opt.position !== !1, z.trackPosition && (z.position = z.line = z.column = 0), At(z, "onready");
      }
      Object.create || (Object.create = function(E) {
        function b() {
        }
        b.prototype = E;
        var z = new b();
        return z;
      }), Object.keys || (Object.keys = function(E) {
        var b = [];
        for (var z in E) E.hasOwnProperty(z) && b.push(z);
        return b;
      });
      function c(E) {
        for (var b = Math.max(t.MAX_BUFFER_LENGTH, 10), z = 0, W = 0, ot = o.length; W < ot; W++) {
          var ze = E[o[W]].length;
          if (ze > b)
            switch (o[W]) {
              case "textNode":
                Dt(E);
                break;
              case "cdata":
                it(E, "oncdata", E.cdata), E.cdata = "";
                break;
              case "script":
                it(E, "onscript", E.script), E.script = "";
                break;
              default:
                Vt(E, "Max buffer length exceeded: " + o[W]);
            }
          z = Math.max(z, ze);
        }
        var T = t.MAX_BUFFER_LENGTH - z;
        E.bufferCheckPosition = T + E.position;
      }
      function d(E) {
        for (var b = 0, z = o.length; b < z; b++)
          E[o[b]] = "";
      }
      function y(E) {
        Dt(E), E.cdata !== "" && (it(E, "oncdata", E.cdata), E.cdata = ""), E.script !== "" && (it(E, "onscript", E.script), E.script = "");
      }
      a.prototype = {
        end: function() {
          St(this);
        },
        write: zt,
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
      var g;
      try {
        g = Fc.Stream;
      } catch {
        g = function() {
        };
      }
      g || (g = function() {
      });
      var x = t.EVENTS.filter(function(E) {
        return E !== "error" && E !== "end";
      });
      function $(E, b) {
        return new N(E, b);
      }
      function N(E, b) {
        if (!(this instanceof N))
          return new N(E, b);
        g.apply(this), this._parser = new a(E, b), this.writable = !0, this.readable = !0;
        var z = this;
        this._parser.onend = function() {
          z.emit("end");
        }, this._parser.onerror = function(W) {
          z.emit("error", W), z._parser.error = null;
        }, this._decoder = null, x.forEach(function(W) {
          Object.defineProperty(z, "on" + W, {
            get: function() {
              return z._parser["on" + W];
            },
            set: function(ot) {
              if (!ot)
                return z.removeAllListeners(W), z._parser["on" + W] = ot, ot;
              z.on(W, ot);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      N.prototype = Object.create(g.prototype, {
        constructor: {
          value: N
        }
      }), N.prototype.write = function(E) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(E)) {
          if (!this._decoder) {
            var b = Fc.StringDecoder;
            this._decoder = new b("utf8");
          }
          E = this._decoder.write(E);
        }
        return this._parser.write(E.toString()), this.emit("data", E), !0;
      }, N.prototype.end = function(E) {
        return E && E.length && this.write(E), this._parser.end(), !0;
      }, N.prototype.on = function(E, b) {
        var z = this;
        return !z._parser["on" + E] && x.indexOf(E) !== -1 && (z._parser["on" + E] = function() {
          var W = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          W.splice(0, 0, E), z.emit.apply(z, W);
        }), g.prototype.on.call(z, E, b);
      };
      var O = "[CDATA[", ee = "DOCTYPE", le = "http://www.w3.org/XML/1998/namespace", we = "http://www.w3.org/2000/xmlns/", Ee = { xml: le, xmlns: we }, He = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Qe = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, Je = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, De = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function $e(E) {
        return E === " " || E === `
` || E === "\r" || E === "	";
      }
      function Fe(E) {
        return E === '"' || E === "'";
      }
      function fe(E) {
        return E === ">" || $e(E);
      }
      function ge(E, b) {
        return E.test(b);
      }
      function qe(E, b) {
        return !ge(E, b);
      }
      var K = 0;
      t.STATE = {
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
      }, Object.keys(t.ENTITIES).forEach(function(E) {
        var b = t.ENTITIES[E], z = typeof b == "number" ? String.fromCharCode(b) : b;
        t.ENTITIES[E] = z;
      });
      for (var dt in t.STATE)
        t.STATE[t.STATE[dt]] = dt;
      K = t.STATE;
      function At(E, b, z) {
        E[b] && E[b](z);
      }
      function it(E, b, z) {
        E.textNode && Dt(E), At(E, b, z);
      }
      function Dt(E) {
        E.textNode = ln(E.opt, E.textNode), E.textNode && At(E, "ontext", E.textNode), E.textNode = "";
      }
      function ln(E, b) {
        return E.trim && (b = b.trim()), E.normalize && (b = b.replace(/\s+/g, " ")), b;
      }
      function Vt(E, b) {
        return Dt(E), E.trackPosition && (b += `
Line: ` + E.line + `
Column: ` + E.column + `
Char: ` + E.c), b = new Error(b), E.error = b, At(E, "onerror", b), E;
      }
      function St(E) {
        return E.sawRoot && !E.closedRoot && Me(E, "Unclosed root tag"), E.state !== K.BEGIN && E.state !== K.BEGIN_WHITESPACE && E.state !== K.TEXT && Vt(E, "Unexpected end"), Dt(E), E.c = "", E.closed = !0, At(E, "onend"), a.call(E, E.strict, E.opt), E;
      }
      function Me(E, b) {
        if (typeof E != "object" || !(E instanceof a))
          throw new Error("bad call to strictFail");
        E.strict && Vt(E, b);
      }
      function et(E) {
        E.strict || (E.tagName = E.tagName[E.looseCase]());
        var b = E.tags[E.tags.length - 1] || E, z = E.tag = { name: E.tagName, attributes: {} };
        E.opt.xmlns && (z.ns = b.ns), E.attribList.length = 0, it(E, "onopentagstart", z);
      }
      function Tt(E, b) {
        var z = E.indexOf(":"), W = z < 0 ? ["", E] : E.split(":"), ot = W[0], ze = W[1];
        return b && E === "xmlns" && (ot = "xmlns", ze = ""), { prefix: ot, local: ze };
      }
      function Ot(E) {
        if (E.strict || (E.attribName = E.attribName[E.looseCase]()), E.attribList.indexOf(E.attribName) !== -1 || E.tag.attributes.hasOwnProperty(E.attribName)) {
          E.attribName = E.attribValue = "";
          return;
        }
        if (E.opt.xmlns) {
          var b = Tt(E.attribName, !0), z = b.prefix, W = b.local;
          if (z === "xmlns")
            if (W === "xml" && E.attribValue !== le)
              Me(
                E,
                "xml: prefix must be bound to " + le + `
Actual: ` + E.attribValue
              );
            else if (W === "xmlns" && E.attribValue !== we)
              Me(
                E,
                "xmlns: prefix must be bound to " + we + `
Actual: ` + E.attribValue
              );
            else {
              var ot = E.tag, ze = E.tags[E.tags.length - 1] || E;
              ot.ns === ze.ns && (ot.ns = Object.create(ze.ns)), ot.ns[W] = E.attribValue;
            }
          E.attribList.push([E.attribName, E.attribValue]);
        } else
          E.tag.attributes[E.attribName] = E.attribValue, it(E, "onattribute", {
            name: E.attribName,
            value: E.attribValue
          });
        E.attribName = E.attribValue = "";
      }
      function qt(E, b) {
        if (E.opt.xmlns) {
          var z = E.tag, W = Tt(E.tagName);
          z.prefix = W.prefix, z.local = W.local, z.uri = z.ns[W.prefix] || "", z.prefix && !z.uri && (Me(E, "Unbound namespace prefix: " + JSON.stringify(E.tagName)), z.uri = W.prefix);
          var ot = E.tags[E.tags.length - 1] || E;
          z.ns && ot.ns !== z.ns && Object.keys(z.ns).forEach(function(pe) {
            it(E, "onopennamespace", {
              prefix: pe,
              uri: z.ns[pe]
            });
          });
          for (var ze = 0, T = E.attribList.length; ze < T; ze++) {
            var F = E.attribList[ze], S = F[0], P = F[1], R = Tt(S, !0), L = R.prefix, j = R.local, H = L === "" ? "" : z.ns[L] || "", ie = {
              name: S,
              value: P,
              prefix: L,
              local: j,
              uri: H
            };
            L && L !== "xmlns" && !H && (Me(E, "Unbound namespace prefix: " + JSON.stringify(L)), ie.uri = L), E.tag.attributes[S] = ie, it(E, "onattribute", ie);
          }
          E.attribList.length = 0;
        }
        E.tag.isSelfClosing = !!b, E.sawRoot = !0, E.tags.push(E.tag), it(E, "onopentag", E.tag), b || (!E.noscript && E.tagName.toLowerCase() === "script" ? E.state = K.SCRIPT : E.state = K.TEXT, E.tag = null, E.tagName = ""), E.attribName = E.attribValue = "", E.attribList.length = 0;
      }
      function Ht(E) {
        if (!E.tagName) {
          Me(E, "Weird empty close tag."), E.textNode += "</>", E.state = K.TEXT;
          return;
        }
        if (E.script) {
          if (E.tagName !== "script") {
            E.script += "</" + E.tagName + ">", E.tagName = "", E.state = K.SCRIPT;
            return;
          }
          it(E, "onscript", E.script), E.script = "";
        }
        var b = E.tags.length, z = E.tagName;
        E.strict || (z = z[E.looseCase]());
        for (var W = z; b--; ) {
          var ot = E.tags[b];
          if (ot.name !== W)
            Me(E, "Unexpected close tag");
          else
            break;
        }
        if (b < 0) {
          Me(E, "Unmatched closing tag: " + E.tagName), E.textNode += "</" + E.tagName + ">", E.state = K.TEXT;
          return;
        }
        E.tagName = z;
        for (var ze = E.tags.length; ze-- > b; ) {
          var T = E.tag = E.tags.pop();
          E.tagName = E.tag.name, it(E, "onclosetag", E.tagName);
          var F = {};
          for (var S in T.ns)
            F[S] = T.ns[S];
          var P = E.tags[E.tags.length - 1] || E;
          E.opt.xmlns && T.ns !== P.ns && Object.keys(T.ns).forEach(function(R) {
            var L = T.ns[R];
            it(E, "onclosenamespace", { prefix: R, uri: L });
          });
        }
        b === 0 && (E.closedRoot = !0), E.tagName = E.attribValue = E.attribName = "", E.attribList.length = 0, E.state = K.TEXT;
      }
      function Ft(E) {
        var b = E.entity, z = b.toLowerCase(), W, ot = "";
        return E.ENTITIES[b] ? E.ENTITIES[b] : E.ENTITIES[z] ? E.ENTITIES[z] : (b = z, b.charAt(0) === "#" && (b.charAt(1) === "x" ? (b = b.slice(2), W = parseInt(b, 16), ot = W.toString(16)) : (b = b.slice(1), W = parseInt(b, 10), ot = W.toString(10))), b = b.replace(/^0+/, ""), isNaN(W) || ot.toLowerCase() !== b ? (Me(E, "Invalid character entity"), "&" + E.entity + ";") : String.fromCodePoint(W));
      }
      function wn(E, b) {
        b === "<" ? (E.state = K.OPEN_WAKA, E.startTagPosition = E.position) : $e(b) || (Me(E, "Non-whitespace before first tag."), E.textNode = b, E.state = K.TEXT);
      }
      function Dn(E, b) {
        var z = "";
        return b < E.length && (z = E.charAt(b)), z;
      }
      function zt(E) {
        var b = this;
        if (this.error)
          throw this.error;
        if (b.closed)
          return Vt(
            b,
            "Cannot write after close. Assign an onready handler."
          );
        if (E === null)
          return St(b);
        typeof E == "object" && (E = E.toString());
        for (var z = 0, W = ""; W = Dn(E, z++), b.c = W, !!W; )
          switch (b.trackPosition && (b.position++, W === `
` ? (b.line++, b.column = 0) : b.column++), b.state) {
            case K.BEGIN:
              if (b.state = K.BEGIN_WHITESPACE, W === "\uFEFF")
                continue;
              wn(b, W);
              continue;
            case K.BEGIN_WHITESPACE:
              wn(b, W);
              continue;
            case K.TEXT:
              if (b.sawRoot && !b.closedRoot) {
                for (var ot = z - 1; W && W !== "<" && W !== "&"; )
                  W = Dn(E, z++), W && b.trackPosition && (b.position++, W === `
` ? (b.line++, b.column = 0) : b.column++);
                b.textNode += E.substring(ot, z - 1);
              }
              W === "<" && !(b.sawRoot && b.closedRoot && !b.strict) ? (b.state = K.OPEN_WAKA, b.startTagPosition = b.position) : (!$e(W) && (!b.sawRoot || b.closedRoot) && Me(b, "Text data outside of root node."), W === "&" ? b.state = K.TEXT_ENTITY : b.textNode += W);
              continue;
            case K.SCRIPT:
              W === "<" ? b.state = K.SCRIPT_ENDING : b.script += W;
              continue;
            case K.SCRIPT_ENDING:
              W === "/" ? b.state = K.CLOSE_TAG : (b.script += "<" + W, b.state = K.SCRIPT);
              continue;
            case K.OPEN_WAKA:
              if (W === "!")
                b.state = K.SGML_DECL, b.sgmlDecl = "";
              else if (!$e(W)) if (ge(He, W))
                b.state = K.OPEN_TAG, b.tagName = W;
              else if (W === "/")
                b.state = K.CLOSE_TAG, b.tagName = "";
              else if (W === "?")
                b.state = K.PROC_INST, b.procInstName = b.procInstBody = "";
              else {
                if (Me(b, "Unencoded <"), b.startTagPosition + 1 < b.position) {
                  var ze = b.position - b.startTagPosition;
                  W = new Array(ze).join(" ") + W;
                }
                b.textNode += "<" + W, b.state = K.TEXT;
              }
              continue;
            case K.SGML_DECL:
              if (b.sgmlDecl + W === "--") {
                b.state = K.COMMENT, b.comment = "", b.sgmlDecl = "";
                continue;
              }
              b.doctype && b.doctype !== !0 && b.sgmlDecl ? (b.state = K.DOCTYPE_DTD, b.doctype += "<!" + b.sgmlDecl + W, b.sgmlDecl = "") : (b.sgmlDecl + W).toUpperCase() === O ? (it(b, "onopencdata"), b.state = K.CDATA, b.sgmlDecl = "", b.cdata = "") : (b.sgmlDecl + W).toUpperCase() === ee ? (b.state = K.DOCTYPE, (b.doctype || b.sawRoot) && Me(
                b,
                "Inappropriately located doctype declaration"
              ), b.doctype = "", b.sgmlDecl = "") : W === ">" ? (it(b, "onsgmldeclaration", b.sgmlDecl), b.sgmlDecl = "", b.state = K.TEXT) : (Fe(W) && (b.state = K.SGML_DECL_QUOTED), b.sgmlDecl += W);
              continue;
            case K.SGML_DECL_QUOTED:
              W === b.q && (b.state = K.SGML_DECL, b.q = ""), b.sgmlDecl += W;
              continue;
            case K.DOCTYPE:
              W === ">" ? (b.state = K.TEXT, it(b, "ondoctype", b.doctype), b.doctype = !0) : (b.doctype += W, W === "[" ? b.state = K.DOCTYPE_DTD : Fe(W) && (b.state = K.DOCTYPE_QUOTED, b.q = W));
              continue;
            case K.DOCTYPE_QUOTED:
              b.doctype += W, W === b.q && (b.q = "", b.state = K.DOCTYPE);
              continue;
            case K.DOCTYPE_DTD:
              W === "]" ? (b.doctype += W, b.state = K.DOCTYPE) : W === "<" ? (b.state = K.OPEN_WAKA, b.startTagPosition = b.position) : Fe(W) ? (b.doctype += W, b.state = K.DOCTYPE_DTD_QUOTED, b.q = W) : b.doctype += W;
              continue;
            case K.DOCTYPE_DTD_QUOTED:
              b.doctype += W, W === b.q && (b.state = K.DOCTYPE_DTD, b.q = "");
              continue;
            case K.COMMENT:
              W === "-" ? b.state = K.COMMENT_ENDING : b.comment += W;
              continue;
            case K.COMMENT_ENDING:
              W === "-" ? (b.state = K.COMMENT_ENDED, b.comment = ln(b.opt, b.comment), b.comment && it(b, "oncomment", b.comment), b.comment = "") : (b.comment += "-" + W, b.state = K.COMMENT);
              continue;
            case K.COMMENT_ENDED:
              W !== ">" ? (Me(b, "Malformed comment"), b.comment += "--" + W, b.state = K.COMMENT) : b.doctype && b.doctype !== !0 ? b.state = K.DOCTYPE_DTD : b.state = K.TEXT;
              continue;
            case K.CDATA:
              W === "]" ? b.state = K.CDATA_ENDING : b.cdata += W;
              continue;
            case K.CDATA_ENDING:
              W === "]" ? b.state = K.CDATA_ENDING_2 : (b.cdata += "]" + W, b.state = K.CDATA);
              continue;
            case K.CDATA_ENDING_2:
              W === ">" ? (b.cdata && it(b, "oncdata", b.cdata), it(b, "onclosecdata"), b.cdata = "", b.state = K.TEXT) : W === "]" ? b.cdata += "]" : (b.cdata += "]]" + W, b.state = K.CDATA);
              continue;
            case K.PROC_INST:
              W === "?" ? b.state = K.PROC_INST_ENDING : $e(W) ? b.state = K.PROC_INST_BODY : b.procInstName += W;
              continue;
            case K.PROC_INST_BODY:
              if (!b.procInstBody && $e(W))
                continue;
              W === "?" ? b.state = K.PROC_INST_ENDING : b.procInstBody += W;
              continue;
            case K.PROC_INST_ENDING:
              W === ">" ? (it(b, "onprocessinginstruction", {
                name: b.procInstName,
                body: b.procInstBody
              }), b.procInstName = b.procInstBody = "", b.state = K.TEXT) : (b.procInstBody += "?" + W, b.state = K.PROC_INST_BODY);
              continue;
            case K.OPEN_TAG:
              ge(Qe, W) ? b.tagName += W : (et(b), W === ">" ? qt(b) : W === "/" ? b.state = K.OPEN_TAG_SLASH : ($e(W) || Me(b, "Invalid character in tag name"), b.state = K.ATTRIB));
              continue;
            case K.OPEN_TAG_SLASH:
              W === ">" ? (qt(b, !0), Ht(b)) : (Me(b, "Forward-slash in opening tag not followed by >"), b.state = K.ATTRIB);
              continue;
            case K.ATTRIB:
              if ($e(W))
                continue;
              W === ">" ? qt(b) : W === "/" ? b.state = K.OPEN_TAG_SLASH : ge(He, W) ? (b.attribName = W, b.attribValue = "", b.state = K.ATTRIB_NAME) : Me(b, "Invalid attribute name");
              continue;
            case K.ATTRIB_NAME:
              W === "=" ? b.state = K.ATTRIB_VALUE : W === ">" ? (Me(b, "Attribute without value"), b.attribValue = b.attribName, Ot(b), qt(b)) : $e(W) ? b.state = K.ATTRIB_NAME_SAW_WHITE : ge(Qe, W) ? b.attribName += W : Me(b, "Invalid attribute name");
              continue;
            case K.ATTRIB_NAME_SAW_WHITE:
              if (W === "=")
                b.state = K.ATTRIB_VALUE;
              else {
                if ($e(W))
                  continue;
                Me(b, "Attribute without value"), b.tag.attributes[b.attribName] = "", b.attribValue = "", it(b, "onattribute", {
                  name: b.attribName,
                  value: ""
                }), b.attribName = "", W === ">" ? qt(b) : ge(He, W) ? (b.attribName = W, b.state = K.ATTRIB_NAME) : (Me(b, "Invalid attribute name"), b.state = K.ATTRIB);
              }
              continue;
            case K.ATTRIB_VALUE:
              if ($e(W))
                continue;
              Fe(W) ? (b.q = W, b.state = K.ATTRIB_VALUE_QUOTED) : (b.opt.unquotedAttributeValues || Vt(b, "Unquoted attribute value"), b.state = K.ATTRIB_VALUE_UNQUOTED, b.attribValue = W);
              continue;
            case K.ATTRIB_VALUE_QUOTED:
              if (W !== b.q) {
                W === "&" ? b.state = K.ATTRIB_VALUE_ENTITY_Q : b.attribValue += W;
                continue;
              }
              Ot(b), b.q = "", b.state = K.ATTRIB_VALUE_CLOSED;
              continue;
            case K.ATTRIB_VALUE_CLOSED:
              $e(W) ? b.state = K.ATTRIB : W === ">" ? qt(b) : W === "/" ? b.state = K.OPEN_TAG_SLASH : ge(He, W) ? (Me(b, "No whitespace between attributes"), b.attribName = W, b.attribValue = "", b.state = K.ATTRIB_NAME) : Me(b, "Invalid attribute name");
              continue;
            case K.ATTRIB_VALUE_UNQUOTED:
              if (!fe(W)) {
                W === "&" ? b.state = K.ATTRIB_VALUE_ENTITY_U : b.attribValue += W;
                continue;
              }
              Ot(b), W === ">" ? qt(b) : b.state = K.ATTRIB;
              continue;
            case K.CLOSE_TAG:
              if (b.tagName)
                W === ">" ? Ht(b) : ge(Qe, W) ? b.tagName += W : b.script ? (b.script += "</" + b.tagName, b.tagName = "", b.state = K.SCRIPT) : ($e(W) || Me(b, "Invalid tagname in closing tag"), b.state = K.CLOSE_TAG_SAW_WHITE);
              else {
                if ($e(W))
                  continue;
                qe(He, W) ? b.script ? (b.script += "</" + W, b.state = K.SCRIPT) : Me(b, "Invalid tagname in closing tag.") : b.tagName = W;
              }
              continue;
            case K.CLOSE_TAG_SAW_WHITE:
              if ($e(W))
                continue;
              W === ">" ? Ht(b) : Me(b, "Invalid characters in closing tag");
              continue;
            case K.TEXT_ENTITY:
            case K.ATTRIB_VALUE_ENTITY_Q:
            case K.ATTRIB_VALUE_ENTITY_U:
              var T, F;
              switch (b.state) {
                case K.TEXT_ENTITY:
                  T = K.TEXT, F = "textNode";
                  break;
                case K.ATTRIB_VALUE_ENTITY_Q:
                  T = K.ATTRIB_VALUE_QUOTED, F = "attribValue";
                  break;
                case K.ATTRIB_VALUE_ENTITY_U:
                  T = K.ATTRIB_VALUE_UNQUOTED, F = "attribValue";
                  break;
              }
              if (W === ";") {
                var S = Ft(b);
                b.opt.unparsedEntities && !Object.values(t.XML_ENTITIES).includes(S) ? (b.entity = "", b.state = T, b.write(S)) : (b[F] += S, b.entity = "", b.state = T);
              } else ge(b.entity.length ? De : Je, W) ? b.entity += W : (Me(b, "Invalid character in entity name"), b[F] += "&" + b.entity + W, b.entity = "", b.state = T);
              continue;
            default:
              throw new Error(b, "Unknown state: " + b.state);
          }
        return b.position >= b.bufferCheckPosition && c(b), b;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var E = String.fromCharCode, b = Math.floor, z = function() {
          var W = 16384, ot = [], ze, T, F = -1, S = arguments.length;
          if (!S)
            return "";
          for (var P = ""; ++F < S; ) {
            var R = Number(arguments[F]);
            if (!isFinite(R) || // `NaN`, `+Infinity`, or `-Infinity`
            R < 0 || // not a valid Unicode code point
            R > 1114111 || // not a valid Unicode code point
            b(R) !== R)
              throw RangeError("Invalid code point: " + R);
            R <= 65535 ? ot.push(R) : (R -= 65536, ze = (R >> 10) + 55296, T = R % 1024 + 56320, ot.push(ze, T)), (F + 1 === S || ot.length > W) && (P += E.apply(null, ot), ot.length = 0);
          }
          return P;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: z,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = z;
      }();
    })(e);
  }(kc)), kc;
}
pm();
const An = "sclElements", Yu = {
  default: {
    prefix: "",
    uri: "http://www.iec.ch/61850/2003/SCL"
  }
};
function hm(e) {
  return e !== null && typeof e == "object" && "namespace" in e && e.namespace !== null;
}
var mu = { exports: {} }, mm = mu.exports, Lc;
function ym() {
  return Lc || (Lc = 1, function(e, t) {
    (function(o, a) {
      e.exports = a();
    })(mm, function() {
      var o = function(n, s) {
        return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, p) {
          l.__proto__ = p;
        } || function(l, p) {
          for (var m in p) Object.prototype.hasOwnProperty.call(p, m) && (l[m] = p[m]);
        })(n, s);
      }, a = function() {
        return (a = Object.assign || function(n) {
          for (var s, l = 1, p = arguments.length; l < p; l++) for (var m in s = arguments[l]) Object.prototype.hasOwnProperty.call(s, m) && (n[m] = s[m]);
          return n;
        }).apply(this, arguments);
      };
      function c(n, s, l) {
        for (var p, m = 0, w = s.length; m < w; m++) !p && m in s || ((p = p || Array.prototype.slice.call(s, 0, m))[m] = s[m]);
        return n.concat(p || Array.prototype.slice.call(s));
      }
      var d = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : um, y = Object.keys, g = Array.isArray;
      function x(n, s) {
        return typeof s != "object" || y(s).forEach(function(l) {
          n[l] = s[l];
        }), n;
      }
      typeof Promise > "u" || d.Promise || (d.Promise = Promise);
      var $ = Object.getPrototypeOf, N = {}.hasOwnProperty;
      function O(n, s) {
        return N.call(n, s);
      }
      function ee(n, s) {
        typeof s == "function" && (s = s($(n))), (typeof Reflect > "u" ? y : Reflect.ownKeys)(s).forEach(function(l) {
          we(n, l, s[l]);
        });
      }
      var le = Object.defineProperty;
      function we(n, s, l, p) {
        le(n, s, x(l && O(l, "get") && typeof l.get == "function" ? { get: l.get, set: l.set, configurable: !0 } : { value: l, configurable: !0, writable: !0 }, p));
      }
      function Ee(n) {
        return { from: function(s) {
          return n.prototype = Object.create(s.prototype), we(n.prototype, "constructor", n), { extend: ee.bind(null, n.prototype) };
        } };
      }
      var He = Object.getOwnPropertyDescriptor, Qe = [].slice;
      function Je(n, s, l) {
        return Qe.call(n, s, l);
      }
      function De(n, s) {
        return s(n);
      }
      function $e(n) {
        if (!n) throw new Error("Assertion Failed");
      }
      function Fe(n) {
        d.setImmediate ? setImmediate(n) : setTimeout(n, 0);
      }
      function fe(n, s) {
        if (typeof s == "string" && O(n, s)) return n[s];
        if (!s) return n;
        if (typeof s != "string") {
          for (var l = [], p = 0, m = s.length; p < m; ++p) {
            var w = fe(n, s[p]);
            l.push(w);
          }
          return l;
        }
        var A = s.indexOf(".");
        if (A !== -1) {
          var D = n[s.substr(0, A)];
          return D == null ? void 0 : fe(D, s.substr(A + 1));
        }
      }
      function ge(n, s, l) {
        if (n && s !== void 0 && !("isFrozen" in Object && Object.isFrozen(n))) if (typeof s != "string" && "length" in s) {
          $e(typeof l != "string" && "length" in l);
          for (var p = 0, m = s.length; p < m; ++p) ge(n, s[p], l[p]);
        } else {
          var w, A, D = s.indexOf(".");
          D !== -1 ? (w = s.substr(0, D), (A = s.substr(D + 1)) === "" ? l === void 0 ? g(n) && !isNaN(parseInt(w)) ? n.splice(w, 1) : delete n[w] : n[w] = l : ge(D = !(D = n[w]) || !O(n, w) ? n[w] = {} : D, A, l)) : l === void 0 ? g(n) && !isNaN(parseInt(s)) ? n.splice(s, 1) : delete n[s] : n[s] = l;
        }
      }
      function qe(n) {
        var s, l = {};
        for (s in n) O(n, s) && (l[s] = n[s]);
        return l;
      }
      var K = [].concat;
      function dt(n) {
        return K.apply([], n);
      }
      var Ze = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(dt([8, 16, 32, 64].map(function(n) {
        return ["Int", "Uint", "Float"].map(function(s) {
          return s + n + "Array";
        });
      }))).filter(function(n) {
        return d[n];
      }), At = new Set(Ze.map(function(n) {
        return d[n];
      })), it = null;
      function Dt(n) {
        return it = /* @__PURE__ */ new WeakMap(), n = function s(l) {
          if (!l || typeof l != "object") return l;
          var p = it.get(l);
          if (p) return p;
          if (g(l)) {
            p = [], it.set(l, p);
            for (var m = 0, w = l.length; m < w; ++m) p.push(s(l[m]));
          } else if (At.has(l.constructor)) p = l;
          else {
            var A, D = $(l);
            for (A in p = D === Object.prototype ? {} : Object.create(D), it.set(l, p), l) O(l, A) && (p[A] = s(l[A]));
          }
          return p;
        }(n), it = null, n;
      }
      var ln = {}.toString;
      function Vt(n) {
        return ln.call(n).slice(8, -1);
      }
      var St = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Me = typeof St == "symbol" ? function(n) {
        var s;
        return n != null && (s = n[St]) && s.apply(n);
      } : function() {
        return null;
      };
      function et(n, s) {
        return s = n.indexOf(s), 0 <= s && n.splice(s, 1), 0 <= s;
      }
      var Tt = {};
      function Ot(n) {
        var s, l, p, m;
        if (arguments.length === 1) {
          if (g(n)) return n.slice();
          if (this === Tt && typeof n == "string") return [n];
          if (m = Me(n)) {
            for (l = []; !(p = m.next()).done; ) l.push(p.value);
            return l;
          }
          if (n == null) return [n];
          if (typeof (s = n.length) != "number") return [n];
          for (l = new Array(s); s--; ) l[s] = n[s];
          return l;
        }
        for (s = arguments.length, l = new Array(s); s--; ) l[s] = arguments[s];
        return l;
      }
      var qt = typeof Symbol < "u" ? function(n) {
        return n[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Ue = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], _n = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Ue), Ht = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Ft(n, s) {
        this.name = n, this.message = s;
      }
      function wn(n, s) {
        return n + ". Errors: " + Object.keys(s).map(function(l) {
          return s[l].toString();
        }).filter(function(l, p, m) {
          return m.indexOf(l) === p;
        }).join(`
`);
      }
      function Dn(n, s, l, p) {
        this.failures = s, this.failedKeys = p, this.successCount = l, this.message = wn(n, s);
      }
      function zt(n, s) {
        this.name = "BulkError", this.failures = Object.keys(s).map(function(l) {
          return s[l];
        }), this.failuresByPos = s, this.message = wn(n, this.failures);
      }
      Ee(Ft).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), Ee(Dn).from(Ft), Ee(zt).from(Ft);
      var E = _n.reduce(function(n, s) {
        return n[s] = s + "Error", n;
      }, {}), b = Ft, z = _n.reduce(function(n, s) {
        var l = s + "Error";
        function p(m, w) {
          this.name = l, m ? typeof m == "string" ? (this.message = "".concat(m).concat(w ? `
 ` + w : ""), this.inner = w || null) : typeof m == "object" && (this.message = "".concat(m.name, " ").concat(m.message), this.inner = m) : (this.message = Ht[s] || l, this.inner = null);
        }
        return Ee(p).from(b), n[s] = p, n;
      }, {});
      z.Syntax = SyntaxError, z.Type = TypeError, z.Range = RangeError;
      var W = Ue.reduce(function(n, s) {
        return n[s + "Error"] = z[s], n;
      }, {}), ot = _n.reduce(function(n, s) {
        return ["Syntax", "Type", "Range"].indexOf(s) === -1 && (n[s + "Error"] = z[s]), n;
      }, {});
      function ze() {
      }
      function T(n) {
        return n;
      }
      function F(n, s) {
        return n == null || n === T ? s : function(l) {
          return s(n(l));
        };
      }
      function S(n, s) {
        return function() {
          n.apply(this, arguments), s.apply(this, arguments);
        };
      }
      function P(n, s) {
        return n === ze ? s : function() {
          var l = n.apply(this, arguments);
          l !== void 0 && (arguments[0] = l);
          var p = this.onsuccess, m = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var w = s.apply(this, arguments);
          return p && (this.onsuccess = this.onsuccess ? S(p, this.onsuccess) : p), m && (this.onerror = this.onerror ? S(m, this.onerror) : m), w !== void 0 ? w : l;
        };
      }
      function R(n, s) {
        return n === ze ? s : function() {
          n.apply(this, arguments);
          var l = this.onsuccess, p = this.onerror;
          this.onsuccess = this.onerror = null, s.apply(this, arguments), l && (this.onsuccess = this.onsuccess ? S(l, this.onsuccess) : l), p && (this.onerror = this.onerror ? S(p, this.onerror) : p);
        };
      }
      function L(n, s) {
        return n === ze ? s : function(l) {
          var p = n.apply(this, arguments);
          x(l, p);
          var m = this.onsuccess, w = this.onerror;
          return this.onsuccess = null, this.onerror = null, l = s.apply(this, arguments), m && (this.onsuccess = this.onsuccess ? S(m, this.onsuccess) : m), w && (this.onerror = this.onerror ? S(w, this.onerror) : w), p === void 0 ? l === void 0 ? void 0 : l : x(p, l);
        };
      }
      function j(n, s) {
        return n === ze ? s : function() {
          return s.apply(this, arguments) !== !1 && n.apply(this, arguments);
        };
      }
      function H(n, s) {
        return n === ze ? s : function() {
          var l = n.apply(this, arguments);
          if (l && typeof l.then == "function") {
            for (var p = this, m = arguments.length, w = new Array(m); m--; ) w[m] = arguments[m];
            return l.then(function() {
              return s.apply(p, w);
            });
          }
          return s.apply(this, arguments);
        };
      }
      ot.ModifyError = Dn, ot.DexieError = Ft, ot.BulkError = zt;
      var ie = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function pe(n) {
        ie = n;
      }
      var Ve = {}, ve = 100, Ze = typeof Promise > "u" ? [] : function() {
        var n = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [n, $(n), n];
        var s = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [s, $(s), n];
      }(), Ue = Ze[0], _n = Ze[1], Ze = Ze[2], _n = _n && _n.then, nt = Ue && Ue.constructor, xt = !!Ze, yt = function(n, s) {
        rn.push([n, s]), Xt && (queueMicrotask(oo), Xt = !1);
      }, nn = !0, Xt = !0, Qt = [], Mt = [], Wn = T, yn = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: ze, pgp: !1, env: {}, finalize: ze }, Le = yn, rn = [], Kn = 0, Di = [];
      function Ke(n) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var s = this._PSD = Le;
        if (typeof n != "function") {
          if (n !== Ve) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Oi(this, this._value));
        }
        this._state = null, this._value = null, ++s.ref, function l(p, m) {
          try {
            m(function(w) {
              if (p._state === null) {
                if (w === p) throw new TypeError("A promise cannot be resolved with itself.");
                var A = p._lib && On();
                w && typeof w.then == "function" ? l(p, function(D, B) {
                  w instanceof Ke ? w._then(D, B) : w.then(D, B);
                }) : (p._state = !0, p._value = w, Da(p)), A && er();
              }
            }, Oi.bind(null, p));
          } catch (w) {
            Oi(p, w);
          }
        }(this, n);
      }
      var Fo = { get: function() {
        var n = Le, s = ei;
        function l(p, m) {
          var w = this, A = !n.global && (n !== Le || s !== ei), D = A && !nr(), B = new Ke(function(q, Q) {
            kr(w, new yr(ao(p, n, A, D), ao(m, n, A, D), q, Q, n));
          });
          return this._consoleTask && (B._consoleTask = this._consoleTask), B;
        }
        return l.prototype = Ve, l;
      }, set: function(n) {
        we(this, "then", n && n.prototype === Ve ? Fo : { get: function() {
          return n;
        }, set: Fo.set });
      } };
      function yr(n, s, l, p, m) {
        this.onFulfilled = typeof n == "function" ? n : null, this.onRejected = typeof s == "function" ? s : null, this.resolve = l, this.reject = p, this.psd = m;
      }
      function Oi(n, s) {
        var l, p;
        Mt.push(s), n._state === null && (l = n._lib && On(), s = Wn(s), n._state = !1, n._value = s, p = n, Qt.some(function(m) {
          return m._value === p._value;
        }) || Qt.push(p), Da(n), l && er());
      }
      function Da(n) {
        var s = n._listeners;
        n._listeners = [];
        for (var l = 0, p = s.length; l < p; ++l) kr(n, s[l]);
        var m = n._PSD;
        --m.ref || m.finalize(), Kn === 0 && (++Kn, yt(function() {
          --Kn == 0 && Ri();
        }, []));
      }
      function kr(n, s) {
        if (n._state !== null) {
          var l = n._state ? s.onFulfilled : s.onRejected;
          if (l === null) return (n._state ? s.resolve : s.reject)(n._value);
          ++s.psd.ref, ++Kn, yt(Mo, [l, n, s]);
        } else n._listeners.push(s);
      }
      function Mo(n, s, l) {
        try {
          var p, m = s._value;
          !s._state && Mt.length && (Mt = []), p = ie && s._consoleTask ? s._consoleTask.run(function() {
            return n(m);
          }) : n(m), s._state || Mt.indexOf(m) !== -1 || function(w) {
            for (var A = Qt.length; A; ) if (Qt[--A]._value === w._value) return Qt.splice(A, 1);
          }(s), l.resolve(p);
        } catch (w) {
          l.reject(w);
        } finally {
          --Kn == 0 && Ri(), --l.psd.ref || l.psd.finalize();
        }
      }
      function oo() {
        Rn(yn, function() {
          On() && er();
        });
      }
      function On() {
        var n = nn;
        return Xt = nn = !1, n;
      }
      function er() {
        var n, s, l;
        do
          for (; 0 < rn.length; ) for (n = rn, rn = [], l = n.length, s = 0; s < l; ++s) {
            var p = n[s];
            p[0].apply(null, p[1]);
          }
        while (0 < rn.length);
        Xt = nn = !0;
      }
      function Ri() {
        var n = Qt;
        Qt = [], n.forEach(function(p) {
          p._PSD.onunhandled.call(null, p._value, p);
        });
        for (var s = Di.slice(0), l = s.length; l; ) s[--l]();
      }
      function Bn(n) {
        return new Ke(Ve, !1, n);
      }
      function Ie(n, s) {
        var l = Le;
        return function() {
          var p = On(), m = Le;
          try {
            return gr(l, !0), n.apply(this, arguments);
          } catch (w) {
            s && s(w);
          } finally {
            gr(m, !1), p && er();
          }
        };
      }
      ee(Ke.prototype, { then: Fo, _then: function(n, s) {
        kr(this, new yr(null, null, n, s, Le));
      }, catch: function(n) {
        if (arguments.length === 1) return this.then(null, n);
        var s = n, l = arguments[1];
        return typeof s == "function" ? this.then(null, function(p) {
          return (p instanceof s ? l : Bn)(p);
        }) : this.then(null, function(p) {
          return (p && p.name === s ? l : Bn)(p);
        });
      }, finally: function(n) {
        return this.then(function(s) {
          return Ke.resolve(n()).then(function() {
            return s;
          });
        }, function(s) {
          return Ke.resolve(n()).then(function() {
            return Bn(s);
          });
        });
      }, timeout: function(n, s) {
        var l = this;
        return n < 1 / 0 ? new Ke(function(p, m) {
          var w = setTimeout(function() {
            return m(new z.Timeout(s));
          }, n);
          l.then(p, m).finally(clearTimeout.bind(null, w));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && we(Ke.prototype, Symbol.toStringTag, "Dexie.Promise"), yn.env = Lr(), ee(Ke, { all: function() {
        var n = Ot.apply(null, arguments).map(ti);
        return new Ke(function(s, l) {
          n.length === 0 && s([]);
          var p = n.length;
          n.forEach(function(m, w) {
            return Ke.resolve(m).then(function(A) {
              n[w] = A, --p || s(n);
            }, l);
          });
        });
      }, resolve: function(n) {
        return n instanceof Ke ? n : n && typeof n.then == "function" ? new Ke(function(s, l) {
          n.then(s, l);
        }) : new Ke(Ve, !0, n);
      }, reject: Bn, race: function() {
        var n = Ot.apply(null, arguments).map(ti);
        return new Ke(function(s, l) {
          n.map(function(p) {
            return Ke.resolve(p).then(s, l);
          });
        });
      }, PSD: { get: function() {
        return Le;
      }, set: function(n) {
        return Le = n;
      } }, totalEchoes: { get: function() {
        return ei;
      } }, newPSD: tr, usePSD: Rn, scheduler: { get: function() {
        return yt;
      }, set: function(n) {
        yt = n;
      } }, rejectionMapper: { get: function() {
        return Wn;
      }, set: function(n) {
        Wn = n;
      } }, follow: function(n, s) {
        return new Ke(function(l, p) {
          return tr(function(m, w) {
            var A = Le;
            A.unhandleds = [], A.onunhandled = w, A.finalize = S(function() {
              var D, B = this;
              D = function() {
                B.unhandleds.length === 0 ? m() : w(B.unhandleds[0]);
              }, Di.push(function q() {
                D(), Di.splice(Di.indexOf(q), 1);
              }), ++Kn, yt(function() {
                --Kn == 0 && Ri();
              }, []);
            }, A.finalize), n();
          }, s, l, p);
        });
      } }), nt && (nt.allSettled && we(Ke, "allSettled", function() {
        var n = Ot.apply(null, arguments).map(ti);
        return new Ke(function(s) {
          n.length === 0 && s([]);
          var l = n.length, p = new Array(l);
          n.forEach(function(m, w) {
            return Ke.resolve(m).then(function(A) {
              return p[w] = { status: "fulfilled", value: A };
            }, function(A) {
              return p[w] = { status: "rejected", reason: A };
            }).then(function() {
              return --l || s(p);
            });
          });
        });
      }), nt.any && typeof AggregateError < "u" && we(Ke, "any", function() {
        var n = Ot.apply(null, arguments).map(ti);
        return new Ke(function(s, l) {
          n.length === 0 && l(new AggregateError([]));
          var p = n.length, m = new Array(p);
          n.forEach(function(w, A) {
            return Ke.resolve(w).then(function(D) {
              return s(D);
            }, function(D) {
              m[A] = D, --p || l(new AggregateError(m));
            });
          });
        });
      }), nt.withResolvers && (Ke.withResolvers = nt.withResolvers));
      var Ut = { awaits: 0, echoes: 0, id: 0 }, Fr = 0, Mr = [], Ne = 0, ei = 0, Oa = 0;
      function tr(n, s, l, p) {
        var m = Le, w = Object.create(m);
        return w.parent = m, w.ref = 0, w.global = !1, w.id = ++Oa, yn.env, w.env = xt ? { Promise: Ke, PromiseProp: { value: Ke, configurable: !0, writable: !0 }, all: Ke.all, race: Ke.race, allSettled: Ke.allSettled, any: Ke.any, resolve: Ke.resolve, reject: Ke.reject } : {}, s && x(w, s), ++m.ref, w.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, p = Rn(w, n, l, p), w.ref === 0 && w.finalize(), p;
      }
      function vr() {
        return Ut.id || (Ut.id = ++Fr), ++Ut.awaits, Ut.echoes += ve, Ut.id;
      }
      function nr() {
        return !!Ut.awaits && (--Ut.awaits == 0 && (Ut.id = 0), Ut.echoes = Ut.awaits * ve, !0);
      }
      function ti(n) {
        return Ut.echoes && n && n.constructor === nt ? (vr(), n.then(function(s) {
          return nr(), s;
        }, function(s) {
          return nr(), Wt(s);
        })) : n;
      }
      function Rs() {
        var n = Mr[Mr.length - 1];
        Mr.pop(), gr(n, !1);
      }
      function gr(n, s) {
        var l, p = Le;
        (s ? !Ut.echoes || Ne++ && n === Le : !Ne || --Ne && n === Le) || queueMicrotask(s ? (function(m) {
          ++ei, Ut.echoes && --Ut.echoes != 0 || (Ut.echoes = Ut.awaits = Ut.id = 0), Mr.push(Le), gr(m, !0);
        }).bind(null, n) : Rs), n !== Le && (Le = n, p === yn && (yn.env = Lr()), xt && (l = yn.env.Promise, s = n.env, (p.global || n.global) && (Object.defineProperty(d, "Promise", s.PromiseProp), l.all = s.all, l.race = s.race, l.resolve = s.resolve, l.reject = s.reject, s.allSettled && (l.allSettled = s.allSettled), s.any && (l.any = s.any))));
      }
      function Lr() {
        var n = d.Promise;
        return xt ? { Promise: n, PromiseProp: Object.getOwnPropertyDescriptor(d, "Promise"), all: n.all, race: n.race, allSettled: n.allSettled, any: n.any, resolve: n.resolve, reject: n.reject } : {};
      }
      function Rn(n, s, l, p, m) {
        var w = Le;
        try {
          return gr(n, !0), s(l, p, m);
        } finally {
          gr(w, !1);
        }
      }
      function ao(n, s, l, p) {
        return typeof n != "function" ? n : function() {
          var m = Le;
          l && vr(), gr(s, !0);
          try {
            return n.apply(this, arguments);
          } finally {
            gr(m, !1), p && queueMicrotask(nr);
          }
        };
      }
      function Lo(n) {
        Promise === nt && Ut.echoes === 0 ? Ne === 0 ? n() : enqueueNativeMicroTask(n) : setTimeout(n, 0);
      }
      ("" + _n).indexOf("[native code]") === -1 && (vr = nr = ze);
      var Wt = Ke.reject, jr = "￿", Nn = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", kt = "String expected.", Lt = [], so = "__dbnames", ni = "readonly", ri = "readwrite";
      function Yn(n, s) {
        return n ? s ? function() {
          return n.apply(this, arguments) && s.apply(this, arguments);
        } : n : s;
      }
      var Ra = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function $n(n) {
        return typeof n != "string" || /\./.test(n) ? function(s) {
          return s;
        } : function(s) {
          return s[n] === void 0 && n in s && delete (s = Dt(s))[n], s;
        };
      }
      function Kr() {
        throw z.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function lt(n, s) {
        try {
          var l = Ni(n), p = Ni(s);
          if (l !== p) return l === "Array" ? 1 : p === "Array" ? -1 : l === "binary" ? 1 : p === "binary" ? -1 : l === "string" ? 1 : p === "string" ? -1 : l === "Date" ? 1 : p !== "Date" ? NaN : -1;
          switch (l) {
            case "number":
            case "Date":
            case "string":
              return s < n ? 1 : n < s ? -1 : 0;
            case "binary":
              return function(m, w) {
                for (var A = m.length, D = w.length, B = A < D ? A : D, q = 0; q < B; ++q) if (m[q] !== w[q]) return m[q] < w[q] ? -1 : 1;
                return A === D ? 0 : A < D ? -1 : 1;
              }(Na(n), Na(s));
            case "Array":
              return function(m, w) {
                for (var A = m.length, D = w.length, B = A < D ? A : D, q = 0; q < B; ++q) {
                  var Q = lt(m[q], w[q]);
                  if (Q !== 0) return Q;
                }
                return A === D ? 0 : A < D ? -1 : 1;
              }(n, s);
          }
        } catch {
        }
        return NaN;
      }
      function Ni(n) {
        var s = typeof n;
        return s != "object" ? s : ArrayBuffer.isView(n) ? "binary" : (n = Vt(n), n === "ArrayBuffer" ? "binary" : n);
      }
      function Na(n) {
        return n instanceof Uint8Array ? n : ArrayBuffer.isView(n) ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : new Uint8Array(n);
      }
      function uo(n, s, l) {
        var p = n.schema.yProps;
        return p ? (s && 0 < l.numFailures && (s = s.filter(function(m, w) {
          return !l.failures[w];
        })), Promise.all(p.map(function(m) {
          return m = m.updatesTable, s ? n.db.table(m).where("k").anyOf(s).delete() : n.db.table(m).clear();
        })).then(function() {
          return l;
        })) : l;
      }
      var rr = (Rt.prototype._trans = function(n, s, l) {
        var p = this._tx || Le.trans, m = this.name, w = ie && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(n === "readonly" ? "read" : "write", " ").concat(this.name));
        function A(q, Q, k) {
          if (!k.schema[m]) throw new z.NotFound("Table " + m + " not part of transaction");
          return s(k.idbtrans, k);
        }
        var D = On();
        try {
          var B = p && p.db._novip === this.db._novip ? p === Le.trans ? p._promise(n, A, l) : tr(function() {
            return p._promise(n, A, l);
          }, { trans: p, transless: Le.transless || Le }) : function q(Q, k, te, V) {
            if (Q.idbdb && (Q._state.openComplete || Le.letThrough || Q._vip)) {
              var G = Q._createTransaction(k, te, Q._dbSchema);
              try {
                G.create(), Q._state.PR1398_maxLoop = 3;
              } catch (J) {
                return J.name === E.InvalidState && Q.isOpen() && 0 < --Q._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), Q.close({ disableAutoOpen: !1 }), Q.open().then(function() {
                  return q(Q, k, te, V);
                })) : Wt(J);
              }
              return G._promise(k, function(J, X) {
                return tr(function() {
                  return Le.trans = G, V(J, X, G);
                });
              }).then(function(J) {
                if (k === "readwrite") try {
                  G.idbtrans.commit();
                } catch {
                }
                return k === "readonly" ? J : G._completion.then(function() {
                  return J;
                });
              });
            }
            if (Q._state.openComplete) return Wt(new z.DatabaseClosed(Q._state.dbOpenError));
            if (!Q._state.isBeingOpened) {
              if (!Q._state.autoOpen) return Wt(new z.DatabaseClosed());
              Q.open().catch(ze);
            }
            return Q._state.dbReadyPromise.then(function() {
              return q(Q, k, te, V);
            });
          }(this.db, n, [this.name], A);
          return w && (B._consoleTask = w, B = B.catch(function(q) {
            return console.trace(q), Wt(q);
          })), B;
        } finally {
          D && er();
        }
      }, Rt.prototype.get = function(n, s) {
        var l = this;
        return n && n.constructor === Object ? this.where(n).first(s) : n == null ? Wt(new z.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(p) {
          return l.core.get({ trans: p, key: n }).then(function(m) {
            return l.hook.reading.fire(m);
          });
        }).then(s);
      }, Rt.prototype.where = function(n) {
        if (typeof n == "string") return new this.db.WhereClause(this, n);
        if (g(n)) return new this.db.WhereClause(this, "[".concat(n.join("+"), "]"));
        var s = y(n);
        if (s.length === 1) return this.where(s[0]).equals(n[s[0]]);
        var l = this.schema.indexes.concat(this.schema.primKey).filter(function(D) {
          if (D.compound && s.every(function(q) {
            return 0 <= D.keyPath.indexOf(q);
          })) {
            for (var B = 0; B < s.length; ++B) if (s.indexOf(D.keyPath[B]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(D, B) {
          return D.keyPath.length - B.keyPath.length;
        })[0];
        if (l && this.db._maxKey !== jr) {
          var w = l.keyPath.slice(0, s.length);
          return this.where(w).equals(w.map(function(B) {
            return n[B];
          }));
        }
        !l && ie && console.warn("The query ".concat(JSON.stringify(n), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(s.join("+"), "]"));
        var p = this.schema.idxByName;
        function m(D, B) {
          return lt(D, B) === 0;
        }
        var A = s.reduce(function(k, B) {
          var q = k[0], Q = k[1], k = p[B], te = n[B];
          return [q || k, q || !k ? Yn(Q, k && k.multi ? function(V) {
            return V = fe(V, B), g(V) && V.some(function(G) {
              return m(te, G);
            });
          } : function(V) {
            return m(te, fe(V, B));
          }) : Q];
        }, [null, null]), w = A[0], A = A[1];
        return w ? this.where(w.name).equals(n[w.keyPath]).filter(A) : l ? this.filter(A) : this.where(s).equals("");
      }, Rt.prototype.filter = function(n) {
        return this.toCollection().and(n);
      }, Rt.prototype.count = function(n) {
        return this.toCollection().count(n);
      }, Rt.prototype.offset = function(n) {
        return this.toCollection().offset(n);
      }, Rt.prototype.limit = function(n) {
        return this.toCollection().limit(n);
      }, Rt.prototype.each = function(n) {
        return this.toCollection().each(n);
      }, Rt.prototype.toArray = function(n) {
        return this.toCollection().toArray(n);
      }, Rt.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Rt.prototype.orderBy = function(n) {
        return new this.db.Collection(new this.db.WhereClause(this, g(n) ? "[".concat(n.join("+"), "]") : n));
      }, Rt.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Rt.prototype.mapToClass = function(n) {
        var s, l = this.db, p = this.name;
        function m() {
          return s !== null && s.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = n).prototype instanceof Kr && (function(B, q) {
          if (typeof q != "function" && q !== null) throw new TypeError("Class extends value " + String(q) + " is not a constructor or null");
          function Q() {
            this.constructor = B;
          }
          o(B, q), B.prototype = q === null ? Object.create(q) : (Q.prototype = q.prototype, new Q());
        }(m, s = n), Object.defineProperty(m.prototype, "db", { get: function() {
          return l;
        }, enumerable: !1, configurable: !0 }), m.prototype.table = function() {
          return p;
        }, n = m);
        for (var w = /* @__PURE__ */ new Set(), A = n.prototype; A; A = $(A)) Object.getOwnPropertyNames(A).forEach(function(B) {
          return w.add(B);
        });
        function D(B) {
          if (!B) return B;
          var q, Q = Object.create(n.prototype);
          for (q in B) if (!w.has(q)) try {
            Q[q] = B[q];
          } catch {
          }
          return Q;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = D, this.hook("reading", D), n;
      }, Rt.prototype.defineClass = function() {
        return this.mapToClass(function(n) {
          x(this, n);
        });
      }, Rt.prototype.add = function(n, s) {
        var l = this, p = this.schema.primKey, m = p.auto, w = p.keyPath, A = n;
        return w && m && (A = $n(w)(n)), this._trans("readwrite", function(D) {
          return l.core.mutate({ trans: D, type: "add", keys: s != null ? [s] : null, values: [A] });
        }).then(function(D) {
          return D.numFailures ? Ke.reject(D.failures[0]) : D.lastResult;
        }).then(function(D) {
          if (w) try {
            ge(n, w, D);
          } catch {
          }
          return D;
        });
      }, Rt.prototype.update = function(n, s) {
        return typeof n != "object" || g(n) ? this.where(":id").equals(n).modify(s) : (n = fe(n, this.schema.primKey.keyPath), n === void 0 ? Wt(new z.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(n).modify(s));
      }, Rt.prototype.put = function(n, s) {
        var l = this, p = this.schema.primKey, m = p.auto, w = p.keyPath, A = n;
        return w && m && (A = $n(w)(n)), this._trans("readwrite", function(D) {
          return l.core.mutate({ trans: D, type: "put", values: [A], keys: s != null ? [s] : null });
        }).then(function(D) {
          return D.numFailures ? Ke.reject(D.failures[0]) : D.lastResult;
        }).then(function(D) {
          if (w) try {
            ge(n, w, D);
          } catch {
          }
          return D;
        });
      }, Rt.prototype.delete = function(n) {
        var s = this;
        return this._trans("readwrite", function(l) {
          return s.core.mutate({ trans: l, type: "delete", keys: [n] }).then(function(p) {
            return uo(s, [n], p);
          }).then(function(p) {
            return p.numFailures ? Ke.reject(p.failures[0]) : void 0;
          });
        });
      }, Rt.prototype.clear = function() {
        var n = this;
        return this._trans("readwrite", function(s) {
          return n.core.mutate({ trans: s, type: "deleteRange", range: Ra }).then(function(l) {
            return uo(n, null, l);
          });
        }).then(function(s) {
          return s.numFailures ? Ke.reject(s.failures[0]) : void 0;
        });
      }, Rt.prototype.bulkGet = function(n) {
        var s = this;
        return this._trans("readonly", function(l) {
          return s.core.getMany({ keys: n, trans: l }).then(function(p) {
            return p.map(function(m) {
              return s.hook.reading.fire(m);
            });
          });
        });
      }, Rt.prototype.bulkAdd = function(n, s, l) {
        var p = this, m = Array.isArray(s) ? s : void 0, w = (l = l || (m ? void 0 : s)) ? l.allKeys : void 0;
        return this._trans("readwrite", function(A) {
          var q = p.schema.primKey, D = q.auto, q = q.keyPath;
          if (q && m) throw new z.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (m && m.length !== n.length) throw new z.InvalidArgument("Arguments objects and keys must have the same length");
          var B = n.length, q = q && D ? n.map($n(q)) : n;
          return p.core.mutate({ trans: A, type: "add", keys: m, values: q, wantResults: w }).then(function(G) {
            var k = G.numFailures, te = G.results, V = G.lastResult, G = G.failures;
            if (k === 0) return w ? te : V;
            throw new zt("".concat(p.name, ".bulkAdd(): ").concat(k, " of ").concat(B, " operations failed"), G);
          });
        });
      }, Rt.prototype.bulkPut = function(n, s, l) {
        var p = this, m = Array.isArray(s) ? s : void 0, w = (l = l || (m ? void 0 : s)) ? l.allKeys : void 0;
        return this._trans("readwrite", function(A) {
          var q = p.schema.primKey, D = q.auto, q = q.keyPath;
          if (q && m) throw new z.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (m && m.length !== n.length) throw new z.InvalidArgument("Arguments objects and keys must have the same length");
          var B = n.length, q = q && D ? n.map($n(q)) : n;
          return p.core.mutate({ trans: A, type: "put", keys: m, values: q, wantResults: w }).then(function(G) {
            var k = G.numFailures, te = G.results, V = G.lastResult, G = G.failures;
            if (k === 0) return w ? te : V;
            throw new zt("".concat(p.name, ".bulkPut(): ").concat(k, " of ").concat(B, " operations failed"), G);
          });
        });
      }, Rt.prototype.bulkUpdate = function(n) {
        var s = this, l = this.core, p = n.map(function(A) {
          return A.key;
        }), m = n.map(function(A) {
          return A.changes;
        }), w = [];
        return this._trans("readwrite", function(A) {
          return l.getMany({ trans: A, keys: p, cache: "clone" }).then(function(D) {
            var B = [], q = [];
            n.forEach(function(k, te) {
              var V = k.key, G = k.changes, J = D[te];
              if (J) {
                for (var X = 0, ne = Object.keys(G); X < ne.length; X++) {
                  var oe = ne[X], ae = G[oe];
                  if (oe === s.schema.primKey.keyPath) {
                    if (lt(ae, V) !== 0) throw new z.Constraint("Cannot update primary key in bulkUpdate()");
                  } else ge(J, oe, ae);
                }
                w.push(te), B.push(V), q.push(J);
              }
            });
            var Q = B.length;
            return l.mutate({ trans: A, type: "put", keys: B, values: q, updates: { keys: p, changeSpecs: m } }).then(function(k) {
              var te = k.numFailures, V = k.failures;
              if (te === 0) return Q;
              for (var G = 0, J = Object.keys(V); G < J.length; G++) {
                var X, ne = J[G], oe = w[Number(ne)];
                oe != null && (X = V[ne], delete V[ne], V[oe] = X);
              }
              throw new zt("".concat(s.name, ".bulkUpdate(): ").concat(te, " of ").concat(Q, " operations failed"), V);
            });
          });
        });
      }, Rt.prototype.bulkDelete = function(n) {
        var s = this, l = n.length;
        return this._trans("readwrite", function(p) {
          return s.core.mutate({ trans: p, type: "delete", keys: n }).then(function(m) {
            return uo(s, n, m);
          });
        }).then(function(A) {
          var m = A.numFailures, w = A.lastResult, A = A.failures;
          if (m === 0) return w;
          throw new zt("".concat(s.name, ".bulkDelete(): ").concat(m, " of ").concat(l, " operations failed"), A);
        });
      }, Rt);
      function Rt() {
      }
      function Vn(n) {
        function s(A, D) {
          if (D) {
            for (var B = arguments.length, q = new Array(B - 1); --B; ) q[B - 1] = arguments[B];
            return l[A].subscribe.apply(null, q), n;
          }
          if (typeof A == "string") return l[A];
        }
        var l = {};
        s.addEventType = w;
        for (var p = 1, m = arguments.length; p < m; ++p) w(arguments[p]);
        return s;
        function w(A, D, B) {
          if (typeof A != "object") {
            var q;
            D = D || j;
            var Q = { subscribers: [], fire: B = B || ze, subscribe: function(k) {
              Q.subscribers.indexOf(k) === -1 && (Q.subscribers.push(k), Q.fire = D(Q.fire, k));
            }, unsubscribe: function(k) {
              Q.subscribers = Q.subscribers.filter(function(te) {
                return te !== k;
              }), Q.fire = Q.subscribers.reduce(D, B);
            } };
            return l[A] = s[A] = Q;
          }
          y(q = A).forEach(function(k) {
            var te = q[k];
            if (g(te)) w(k, q[k][0], q[k][1]);
            else {
              if (te !== "asap") throw new z.InvalidArgument("Invalid event config");
              var V = w(k, T, function() {
                for (var G = arguments.length, J = new Array(G); G--; ) J[G] = arguments[G];
                V.subscribers.forEach(function(X) {
                  Fe(function() {
                    X.apply(null, J);
                  });
                });
              });
            }
          });
        }
      }
      function ii(n, s) {
        return Ee(s).from({ prototype: n }), s;
      }
      function br(n, s) {
        return !(n.filter || n.algorithm || n.or) && (s ? n.justLimit : !n.replayFilter);
      }
      function jt(n, s) {
        n.filter = Yn(n.filter, s);
      }
      function ki(n, s, l) {
        var p = n.replayFilter;
        n.replayFilter = p ? function() {
          return Yn(p(), s());
        } : s, n.justLimit = l && !p;
      }
      function Fi(n, s) {
        if (n.isPrimKey) return s.primaryKey;
        var l = s.getIndexByKeyPath(n.index);
        if (!l) throw new z.Schema("KeyPath " + n.index + " on object store " + s.name + " is not indexed");
        return l;
      }
      function wr(n, s, l) {
        var p = Fi(n, s.schema);
        return s.openCursor({ trans: l, values: !n.keysOnly, reverse: n.dir === "prev", unique: !!n.unique, query: { index: p, range: n.range } });
      }
      function oi(n, s, l, p) {
        var m = n.replayFilter ? Yn(n.filter, n.replayFilter()) : n.filter;
        if (n.or) {
          var w = {}, A = function(D, B, q) {
            var Q, k;
            m && !m(B, q, function(te) {
              return B.stop(te);
            }, function(te) {
              return B.fail(te);
            }) || ((k = "" + (Q = B.primaryKey)) == "[object ArrayBuffer]" && (k = "" + new Uint8Array(Q)), O(w, k) || (w[k] = !0, s(D, B, q)));
          };
          return Promise.all([n.or._iterate(A, l), Qn(wr(n, p, l), n.algorithm, A, !n.keysOnly && n.valueMapper)]);
        }
        return Qn(wr(n, p, l), Yn(n.algorithm, m), s, !n.keysOnly && n.valueMapper);
      }
      function Qn(n, s, l, p) {
        var m = Ie(p ? function(w, A, D) {
          return l(p(w), A, D);
        } : l);
        return n.then(function(w) {
          if (w) return w.start(function() {
            var A = function() {
              return w.continue();
            };
            s && !s(w, function(D) {
              return A = D;
            }, function(D) {
              w.stop(D), A = ze;
            }, function(D) {
              w.fail(D), A = ze;
            }) || m(w.value, w, function(D) {
              return A = D;
            }), A();
          });
        });
      }
      var ai = (Br.prototype.execute = function(n) {
        var s = this["@@propmod"];
        if (s.add !== void 0) {
          var l = s.add;
          if (g(l)) return c(c([], g(n) ? n : [], !0), l).sort();
          if (typeof l == "number") return (Number(n) || 0) + l;
          if (typeof l == "bigint") try {
            return BigInt(n) + l;
          } catch {
            return BigInt(0) + l;
          }
          throw new TypeError("Invalid term ".concat(l));
        }
        if (s.remove !== void 0) {
          var p = s.remove;
          if (g(p)) return g(n) ? n.filter(function(m) {
            return !p.includes(m);
          }).sort() : [];
          if (typeof p == "number") return Number(n) - p;
          if (typeof p == "bigint") try {
            return BigInt(n) - p;
          } catch {
            return BigInt(0) - p;
          }
          throw new TypeError("Invalid subtrahend ".concat(p));
        }
        return l = (l = s.replacePrefix) === null || l === void 0 ? void 0 : l[0], l && typeof n == "string" && n.startsWith(l) ? s.replacePrefix[1] + n.substring(l.length) : n;
      }, Br);
      function Br(n) {
        this["@@propmod"] = n;
      }
      var co = (vt.prototype._read = function(n, s) {
        var l = this._ctx;
        return l.error ? l.table._trans(null, Wt.bind(null, l.error)) : l.table._trans("readonly", n).then(s);
      }, vt.prototype._write = function(n) {
        var s = this._ctx;
        return s.error ? s.table._trans(null, Wt.bind(null, s.error)) : s.table._trans("readwrite", n, "locked");
      }, vt.prototype._addAlgorithm = function(n) {
        var s = this._ctx;
        s.algorithm = Yn(s.algorithm, n);
      }, vt.prototype._iterate = function(n, s) {
        return oi(this._ctx, n, s, this._ctx.table.core);
      }, vt.prototype.clone = function(n) {
        var s = Object.create(this.constructor.prototype), l = Object.create(this._ctx);
        return n && x(l, n), s._ctx = l, s;
      }, vt.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, vt.prototype.each = function(n) {
        var s = this._ctx;
        return this._read(function(l) {
          return oi(s, n, l, s.table.core);
        });
      }, vt.prototype.count = function(n) {
        var s = this;
        return this._read(function(l) {
          var p = s._ctx, m = p.table.core;
          if (br(p, !0)) return m.count({ trans: l, query: { index: Fi(p, m.schema), range: p.range } }).then(function(A) {
            return Math.min(A, p.limit);
          });
          var w = 0;
          return oi(p, function() {
            return ++w, !1;
          }, l, m).then(function() {
            return w;
          });
        }).then(n);
      }, vt.prototype.sortBy = function(n, s) {
        var l = n.split(".").reverse(), p = l[0], m = l.length - 1;
        function w(B, q) {
          return q ? w(B[l[q]], q - 1) : B[p];
        }
        var A = this._ctx.dir === "next" ? 1 : -1;
        function D(B, q) {
          return lt(w(B, m), w(q, m)) * A;
        }
        return this.toArray(function(B) {
          return B.sort(D);
        }).then(s);
      }, vt.prototype.toArray = function(n) {
        var s = this;
        return this._read(function(l) {
          var p = s._ctx;
          if (p.dir === "next" && br(p, !0) && 0 < p.limit) {
            var m = p.valueMapper, w = Fi(p, p.table.core.schema);
            return p.table.core.query({ trans: l, limit: p.limit, values: !0, query: { index: w, range: p.range } }).then(function(D) {
              return D = D.result, m ? D.map(m) : D;
            });
          }
          var A = [];
          return oi(p, function(D) {
            return A.push(D);
          }, l, p.table.core).then(function() {
            return A;
          });
        }, n);
      }, vt.prototype.offset = function(n) {
        var s = this._ctx;
        return n <= 0 || (s.offset += n, br(s) ? ki(s, function() {
          var l = n;
          return function(p, m) {
            return l === 0 || (l === 1 ? --l : m(function() {
              p.advance(l), l = 0;
            }), !1);
          };
        }) : ki(s, function() {
          var l = n;
          return function() {
            return --l < 0;
          };
        })), this;
      }, vt.prototype.limit = function(n) {
        return this._ctx.limit = Math.min(this._ctx.limit, n), ki(this._ctx, function() {
          var s = n;
          return function(l, p, m) {
            return --s <= 0 && p(m), 0 <= s;
          };
        }, !0), this;
      }, vt.prototype.until = function(n, s) {
        return jt(this._ctx, function(l, p, m) {
          return !n(l.value) || (p(m), s);
        }), this;
      }, vt.prototype.first = function(n) {
        return this.limit(1).toArray(function(s) {
          return s[0];
        }).then(n);
      }, vt.prototype.last = function(n) {
        return this.reverse().first(n);
      }, vt.prototype.filter = function(n) {
        var s;
        return jt(this._ctx, function(l) {
          return n(l.value);
        }), (s = this._ctx).isMatch = Yn(s.isMatch, n), this;
      }, vt.prototype.and = function(n) {
        return this.filter(n);
      }, vt.prototype.or = function(n) {
        return new this.db.WhereClause(this._ctx.table, n, this);
      }, vt.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, vt.prototype.desc = function() {
        return this.reverse();
      }, vt.prototype.eachKey = function(n) {
        var s = this._ctx;
        return s.keysOnly = !s.isMatch, this.each(function(l, p) {
          n(p.key, p);
        });
      }, vt.prototype.eachUniqueKey = function(n) {
        return this._ctx.unique = "unique", this.eachKey(n);
      }, vt.prototype.eachPrimaryKey = function(n) {
        var s = this._ctx;
        return s.keysOnly = !s.isMatch, this.each(function(l, p) {
          n(p.primaryKey, p);
        });
      }, vt.prototype.keys = function(n) {
        var s = this._ctx;
        s.keysOnly = !s.isMatch;
        var l = [];
        return this.each(function(p, m) {
          l.push(m.key);
        }).then(function() {
          return l;
        }).then(n);
      }, vt.prototype.primaryKeys = function(n) {
        var s = this._ctx;
        if (s.dir === "next" && br(s, !0) && 0 < s.limit) return this._read(function(p) {
          var m = Fi(s, s.table.core.schema);
          return s.table.core.query({ trans: p, values: !1, limit: s.limit, query: { index: m, range: s.range } });
        }).then(function(p) {
          return p.result;
        }).then(n);
        s.keysOnly = !s.isMatch;
        var l = [];
        return this.each(function(p, m) {
          l.push(m.primaryKey);
        }).then(function() {
          return l;
        }).then(n);
      }, vt.prototype.uniqueKeys = function(n) {
        return this._ctx.unique = "unique", this.keys(n);
      }, vt.prototype.firstKey = function(n) {
        return this.limit(1).keys(function(s) {
          return s[0];
        }).then(n);
      }, vt.prototype.lastKey = function(n) {
        return this.reverse().firstKey(n);
      }, vt.prototype.distinct = function() {
        var n = this._ctx, n = n.index && n.table.schema.idxByName[n.index];
        if (!n || !n.multi) return this;
        var s = {};
        return jt(this._ctx, function(m) {
          var p = m.primaryKey.toString(), m = O(s, p);
          return s[p] = !0, !m;
        }), this;
      }, vt.prototype.modify = function(n) {
        var s = this, l = this._ctx;
        return this._write(function(p) {
          var m, w, A;
          A = typeof n == "function" ? n : (m = y(n), w = m.length, function(ne) {
            for (var oe = !1, ae = 0; ae < w; ++ae) {
              var ue = m[ae], _e = n[ue], Ae = fe(ne, ue);
              _e instanceof ai ? (ge(ne, ue, _e.execute(Ae)), oe = !0) : Ae !== _e && (ge(ne, ue, _e), oe = !0);
            }
            return oe;
          });
          var D = l.table.core, k = D.schema.primaryKey, B = k.outbound, q = k.extractKey, Q = 200, k = s.db._options.modifyChunkSize;
          k && (Q = typeof k == "object" ? k[D.name] || k["*"] || 200 : k);
          function te(ne, ue) {
            var ae = ue.failures, ue = ue.numFailures;
            G += ne - ue;
            for (var _e = 0, Ae = y(ae); _e < Ae.length; _e++) {
              var xe = Ae[_e];
              V.push(ae[xe]);
            }
          }
          var V = [], G = 0, J = [], X = n === lo;
          return s.clone().primaryKeys().then(function(ne) {
            function oe(ue) {
              var _e = Math.min(Q, ne.length - ue), Ae = ne.slice(ue, ue + _e);
              return (X ? Promise.resolve([]) : D.getMany({ trans: p, keys: Ae, cache: "immutable" })).then(function(xe) {
                var Te = [], je = [], Oe = B ? [] : null, Be = X ? Ae : [];
                if (!X) for (var ft = 0; ft < _e; ++ft) {
                  var gt = xe[ft], at = { value: Dt(gt), primKey: ne[ue + ft] };
                  A.call(at, at.value, at) !== !1 && (at.value == null ? Be.push(ne[ue + ft]) : B || lt(q(gt), q(at.value)) === 0 ? (je.push(at.value), B && Oe.push(ne[ue + ft])) : (Be.push(ne[ue + ft]), Te.push(at.value)));
                }
                return Promise.resolve(0 < Te.length && D.mutate({ trans: p, type: "add", values: Te }).then(function(Kt) {
                  for (var st in Kt.failures) Be.splice(parseInt(st), 1);
                  te(Te.length, Kt);
                })).then(function() {
                  return (0 < je.length || ae && typeof n == "object") && D.mutate({ trans: p, type: "put", keys: Oe, values: je, criteria: ae, changeSpec: typeof n != "function" && n, isAdditionalChunk: 0 < ue }).then(function(Kt) {
                    return te(je.length, Kt);
                  });
                }).then(function() {
                  return (0 < Be.length || ae && X) && D.mutate({ trans: p, type: "delete", keys: Be, criteria: ae, isAdditionalChunk: 0 < ue }).then(function(Kt) {
                    return uo(l.table, Be, Kt);
                  }).then(function(Kt) {
                    return te(Be.length, Kt);
                  });
                }).then(function() {
                  return ne.length > ue + _e && oe(ue + Q);
                });
              });
            }
            var ae = br(l) && l.limit === 1 / 0 && (typeof n != "function" || X) && { index: l.index, range: l.range };
            return oe(0).then(function() {
              if (0 < V.length) throw new Dn("Error modifying one or more objects", V, G, J);
              return ne.length;
            });
          });
        });
      }, vt.prototype.delete = function() {
        var n = this._ctx, s = n.range;
        return !br(n) || n.table.schema.yProps || !n.isPrimKey && s.type !== 3 ? this.modify(lo) : this._write(function(l) {
          var p = n.table.core.schema.primaryKey, m = s;
          return n.table.core.count({ trans: l, query: { index: p, range: m } }).then(function(w) {
            return n.table.core.mutate({ trans: l, type: "deleteRange", range: m }).then(function(B) {
              var D = B.failures, B = B.numFailures;
              if (B) throw new Dn("Could not delete some values", Object.keys(D).map(function(q) {
                return D[q];
              }), w - B);
              return w - B;
            });
          });
        });
      }, vt);
      function vt() {
      }
      var lo = function(n, s) {
        return s.value = null;
      };
      function $r(n, s) {
        return n < s ? -1 : n === s ? 0 : 1;
      }
      function ka(n, s) {
        return s < n ? -1 : n === s ? 0 : 1;
      }
      function fn(n, s, l) {
        return n = n instanceof jo ? new n.Collection(n) : n, n._ctx.error = new (l || TypeError)(s), n;
      }
      function Vr(n) {
        return new n.Collection(n, function() {
          return Fa("");
        }).limit(0);
      }
      function ht(n, s, l, p) {
        var m, w, A, D, B, q, Q, k = l.length;
        if (!l.every(function(G) {
          return typeof G == "string";
        })) return fn(n, kt);
        function te(G) {
          m = G === "next" ? function(X) {
            return X.toUpperCase();
          } : function(X) {
            return X.toLowerCase();
          }, w = G === "next" ? function(X) {
            return X.toLowerCase();
          } : function(X) {
            return X.toUpperCase();
          }, A = G === "next" ? $r : ka;
          var J = l.map(function(X) {
            return { lower: w(X), upper: m(X) };
          }).sort(function(X, ne) {
            return A(X.lower, ne.lower);
          });
          D = J.map(function(X) {
            return X.upper;
          }), B = J.map(function(X) {
            return X.lower;
          }), Q = (q = G) === "next" ? "" : p;
        }
        te("next"), n = new n.Collection(n, function() {
          return _r(D[0], B[k - 1] + p);
        }), n._ondirectionchange = function(G) {
          te(G);
        };
        var V = 0;
        return n._addAlgorithm(function(G, J, X) {
          var ne = G.key;
          if (typeof ne != "string") return !1;
          var oe = w(ne);
          if (s(oe, B, V)) return !0;
          for (var ae = null, ue = V; ue < k; ++ue) {
            var _e = function(Ae, xe, Te, je, Oe, Be) {
              for (var ft = Math.min(Ae.length, je.length), gt = -1, at = 0; at < ft; ++at) {
                var Kt = xe[at];
                if (Kt !== je[at]) return Oe(Ae[at], Te[at]) < 0 ? Ae.substr(0, at) + Te[at] + Te.substr(at + 1) : Oe(Ae[at], je[at]) < 0 ? Ae.substr(0, at) + je[at] + Te.substr(at + 1) : 0 <= gt ? Ae.substr(0, gt) + xe[gt] + Te.substr(gt + 1) : null;
                Oe(Ae[at], Kt) < 0 && (gt = at);
              }
              return ft < je.length && Be === "next" ? Ae + Te.substr(Ae.length) : ft < Ae.length && Be === "prev" ? Ae.substr(0, Te.length) : gt < 0 ? null : Ae.substr(0, gt) + je[gt] + Te.substr(gt + 1);
            }(ne, oe, D[ue], B[ue], A, q);
            _e === null && ae === null ? V = ue + 1 : (ae === null || 0 < A(ae, _e)) && (ae = _e);
          }
          return J(ae !== null ? function() {
            G.continue(ae + Q);
          } : X), !1;
        }), n;
      }
      function _r(n, s, l, p) {
        return { type: 2, lower: n, upper: s, lowerOpen: l, upperOpen: p };
      }
      function Fa(n) {
        return { type: 1, lower: n, upper: n };
      }
      var jo = (Object.defineProperty(Jt.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Jt.prototype.between = function(n, s, l, p) {
        l = l !== !1, p = p === !0;
        try {
          return 0 < this._cmp(n, s) || this._cmp(n, s) === 0 && (l || p) && (!l || !p) ? Vr(this) : new this.Collection(this, function() {
            return _r(n, s, !l, !p);
          });
        } catch {
          return fn(this, Nn);
        }
      }, Jt.prototype.equals = function(n) {
        return n == null ? fn(this, Nn) : new this.Collection(this, function() {
          return Fa(n);
        });
      }, Jt.prototype.above = function(n) {
        return n == null ? fn(this, Nn) : new this.Collection(this, function() {
          return _r(n, void 0, !0);
        });
      }, Jt.prototype.aboveOrEqual = function(n) {
        return n == null ? fn(this, Nn) : new this.Collection(this, function() {
          return _r(n, void 0, !1);
        });
      }, Jt.prototype.below = function(n) {
        return n == null ? fn(this, Nn) : new this.Collection(this, function() {
          return _r(void 0, n, !1, !0);
        });
      }, Jt.prototype.belowOrEqual = function(n) {
        return n == null ? fn(this, Nn) : new this.Collection(this, function() {
          return _r(void 0, n);
        });
      }, Jt.prototype.startsWith = function(n) {
        return typeof n != "string" ? fn(this, kt) : this.between(n, n + jr, !0, !0);
      }, Jt.prototype.startsWithIgnoreCase = function(n) {
        return n === "" ? this.startsWith(n) : ht(this, function(s, l) {
          return s.indexOf(l[0]) === 0;
        }, [n], jr);
      }, Jt.prototype.equalsIgnoreCase = function(n) {
        return ht(this, function(s, l) {
          return s === l[0];
        }, [n], "");
      }, Jt.prototype.anyOfIgnoreCase = function() {
        var n = Ot.apply(Tt, arguments);
        return n.length === 0 ? Vr(this) : ht(this, function(s, l) {
          return l.indexOf(s) !== -1;
        }, n, "");
      }, Jt.prototype.startsWithAnyOfIgnoreCase = function() {
        var n = Ot.apply(Tt, arguments);
        return n.length === 0 ? Vr(this) : ht(this, function(s, l) {
          return l.some(function(p) {
            return s.indexOf(p) === 0;
          });
        }, n, jr);
      }, Jt.prototype.anyOf = function() {
        var n = this, s = Ot.apply(Tt, arguments), l = this._cmp;
        try {
          s.sort(l);
        } catch {
          return fn(this, Nn);
        }
        if (s.length === 0) return Vr(this);
        var p = new this.Collection(this, function() {
          return _r(s[0], s[s.length - 1]);
        });
        p._ondirectionchange = function(w) {
          l = w === "next" ? n._ascending : n._descending, s.sort(l);
        };
        var m = 0;
        return p._addAlgorithm(function(w, A, D) {
          for (var B = w.key; 0 < l(B, s[m]); ) if (++m === s.length) return A(D), !1;
          return l(B, s[m]) === 0 || (A(function() {
            w.continue(s[m]);
          }), !1);
        }), p;
      }, Jt.prototype.notEqual = function(n) {
        return this.inAnyRange([[-1 / 0, n], [n, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Jt.prototype.noneOf = function() {
        var n = Ot.apply(Tt, arguments);
        if (n.length === 0) return new this.Collection(this);
        try {
          n.sort(this._ascending);
        } catch {
          return fn(this, Nn);
        }
        var s = n.reduce(function(l, p) {
          return l ? l.concat([[l[l.length - 1][1], p]]) : [[-1 / 0, p]];
        }, null);
        return s.push([n[n.length - 1], this.db._maxKey]), this.inAnyRange(s, { includeLowers: !1, includeUppers: !1 });
      }, Jt.prototype.inAnyRange = function(ne, s) {
        var l = this, p = this._cmp, m = this._ascending, w = this._descending, A = this._min, D = this._max;
        if (ne.length === 0) return Vr(this);
        if (!ne.every(function(oe) {
          return oe[0] !== void 0 && oe[1] !== void 0 && m(oe[0], oe[1]) <= 0;
        })) return fn(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", z.InvalidArgument);
        var B = !s || s.includeLowers !== !1, q = s && s.includeUppers === !0, Q, k = m;
        function te(oe, ae) {
          return k(oe[0], ae[0]);
        }
        try {
          (Q = ne.reduce(function(oe, ae) {
            for (var ue = 0, _e = oe.length; ue < _e; ++ue) {
              var Ae = oe[ue];
              if (p(ae[0], Ae[1]) < 0 && 0 < p(ae[1], Ae[0])) {
                Ae[0] = A(Ae[0], ae[0]), Ae[1] = D(Ae[1], ae[1]);
                break;
              }
            }
            return ue === _e && oe.push(ae), oe;
          }, [])).sort(te);
        } catch {
          return fn(this, Nn);
        }
        var V = 0, G = q ? function(oe) {
          return 0 < m(oe, Q[V][1]);
        } : function(oe) {
          return 0 <= m(oe, Q[V][1]);
        }, J = B ? function(oe) {
          return 0 < w(oe, Q[V][0]);
        } : function(oe) {
          return 0 <= w(oe, Q[V][0]);
        }, X = G, ne = new this.Collection(this, function() {
          return _r(Q[0][0], Q[Q.length - 1][1], !B, !q);
        });
        return ne._ondirectionchange = function(oe) {
          k = oe === "next" ? (X = G, m) : (X = J, w), Q.sort(te);
        }, ne._addAlgorithm(function(oe, ae, ue) {
          for (var _e, Ae = oe.key; X(Ae); ) if (++V === Q.length) return ae(ue), !1;
          return !G(_e = Ae) && !J(_e) || (l._cmp(Ae, Q[V][1]) === 0 || l._cmp(Ae, Q[V][0]) === 0 || ae(function() {
            k === m ? oe.continue(Q[V][0]) : oe.continue(Q[V][1]);
          }), !1);
        }), ne;
      }, Jt.prototype.startsWithAnyOf = function() {
        var n = Ot.apply(Tt, arguments);
        return n.every(function(s) {
          return typeof s == "string";
        }) ? n.length === 0 ? Vr(this) : this.inAnyRange(n.map(function(s) {
          return [s, s + jr];
        })) : fn(this, "startsWithAnyOf() only works with strings");
      }, Jt);
      function Jt() {
      }
      function Tn(n) {
        return Ie(function(s) {
          return si(s), n(s.target.error), !1;
        });
      }
      function si(n) {
        n.stopPropagation && n.stopPropagation(), n.preventDefault && n.preventDefault();
      }
      var ir = "storagemutated", qr = "x-storagemutated-1", Sr = Vn(null, ir), ui = (kn.prototype._lock = function() {
        return $e(!Le.global), ++this._reculock, this._reculock !== 1 || Le.global || (Le.lockOwnerFor = this), this;
      }, kn.prototype._unlock = function() {
        if ($e(!Le.global), --this._reculock == 0) for (Le.global || (Le.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var n = this._blockedFuncs.shift();
          try {
            Rn(n[1], n[0]);
          } catch {
          }
        }
        return this;
      }, kn.prototype._locked = function() {
        return this._reculock && Le.lockOwnerFor !== this;
      }, kn.prototype.create = function(n) {
        var s = this;
        if (!this.mode) return this;
        var l = this.db.idbdb, p = this.db._state.dbOpenError;
        if ($e(!this.idbtrans), !n && !l) switch (p && p.name) {
          case "DatabaseClosedError":
            throw new z.DatabaseClosed(p);
          case "MissingAPIError":
            throw new z.MissingAPI(p.message, p);
          default:
            throw new z.OpenFailed(p);
        }
        if (!this.active) throw new z.TransactionInactive();
        return $e(this._completion._state === null), (n = this.idbtrans = n || (this.db.core || l).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Ie(function(m) {
          si(m), s._reject(n.error);
        }), n.onabort = Ie(function(m) {
          si(m), s.active && s._reject(new z.Abort(n.error)), s.active = !1, s.on("abort").fire(m);
        }), n.oncomplete = Ie(function() {
          s.active = !1, s._resolve(), "mutatedParts" in n && Sr.storagemutated.fire(n.mutatedParts);
        }), this;
      }, kn.prototype._promise = function(n, s, l) {
        var p = this;
        if (n === "readwrite" && this.mode !== "readwrite") return Wt(new z.ReadOnly("Transaction is readonly"));
        if (!this.active) return Wt(new z.TransactionInactive());
        if (this._locked()) return new Ke(function(w, A) {
          p._blockedFuncs.push([function() {
            p._promise(n, s, l).then(w, A);
          }, Le]);
        });
        if (l) return tr(function() {
          var w = new Ke(function(A, D) {
            p._lock();
            var B = s(A, D, p);
            B && B.then && B.then(A, D);
          });
          return w.finally(function() {
            return p._unlock();
          }), w._lib = !0, w;
        });
        var m = new Ke(function(w, A) {
          var D = s(w, A, p);
          D && D.then && D.then(w, A);
        });
        return m._lib = !0, m;
      }, kn.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, kn.prototype.waitFor = function(n) {
        var s, l = this._root(), p = Ke.resolve(n);
        l._waitingFor ? l._waitingFor = l._waitingFor.then(function() {
          return p;
        }) : (l._waitingFor = p, l._waitingQueue = [], s = l.idbtrans.objectStore(l.storeNames[0]), function w() {
          for (++l._spinCount; l._waitingQueue.length; ) l._waitingQueue.shift()();
          l._waitingFor && (s.get(-1 / 0).onsuccess = w);
        }());
        var m = l._waitingFor;
        return new Ke(function(w, A) {
          p.then(function(D) {
            return l._waitingQueue.push(Ie(w.bind(null, D)));
          }, function(D) {
            return l._waitingQueue.push(Ie(A.bind(null, D)));
          }).finally(function() {
            l._waitingFor === m && (l._waitingFor = null);
          });
        });
      }, kn.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new z.Abort()));
      }, kn.prototype.table = function(n) {
        var s = this._memoizedTables || (this._memoizedTables = {});
        if (O(s, n)) return s[n];
        var l = this.schema[n];
        if (!l) throw new z.NotFound("Table " + n + " not part of transaction");
        return l = new this.db.Table(n, l, this), l.core = this.db.core.table(n), s[n] = l;
      }, kn);
      function kn() {
      }
      function Mi(n, s, l, p, m, w, A, D) {
        return { name: n, keyPath: s, unique: l, multi: p, auto: m, compound: w, src: (l && !A ? "&" : "") + (p ? "*" : "") + (m ? "++" : "") + Ma(s), type: D };
      }
      function Ma(n) {
        return typeof n == "string" ? n : n ? "[" + [].join.call(n, "+") + "]" : "";
      }
      function ci(n, s, l) {
        return { name: n, primKey: s, indexes: l, mappedClass: null, idxByName: (p = function(m) {
          return [m.name, m];
        }, l.reduce(function(m, w, A) {
          return A = p(w, A), A && (m[A[0]] = A[1]), m;
        }, {})) };
        var p;
      }
      var li = function(n) {
        try {
          return n.only([[]]), li = function() {
            return [[]];
          }, [[]];
        } catch {
          return li = function() {
            return jr;
          }, jr;
        }
      };
      function fi(n) {
        return n == null ? function() {
        } : typeof n == "string" ? (s = n).split(".").length === 1 ? function(l) {
          return l[s];
        } : function(l) {
          return fe(l, s);
        } : function(l) {
          return fe(l, n);
        };
        var s;
      }
      function Ko(n) {
        return [].slice.call(n);
      }
      var Li = 0;
      function ji(n) {
        return n == null ? ":id" : typeof n == "string" ? n : "[".concat(n.join("+"), "]");
      }
      function La(n, s, B) {
        function p(X) {
          if (X.type === 3) return null;
          if (X.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var V = X.lower, G = X.upper, J = X.lowerOpen, X = X.upperOpen;
          return V === void 0 ? G === void 0 ? null : s.upperBound(G, !!X) : G === void 0 ? s.lowerBound(V, !!J) : s.bound(V, G, !!J, !!X);
        }
        function m(te) {
          var V, G = te.name;
          return { name: G, schema: te, mutate: function(J) {
            var X = J.trans, ne = J.type, oe = J.keys, ae = J.values, ue = J.range;
            return new Promise(function(_e, Ae) {
              _e = Ie(_e);
              var xe = X.objectStore(G), Te = xe.keyPath == null, je = ne === "put" || ne === "add";
              if (!je && ne !== "delete" && ne !== "deleteRange") throw new Error("Invalid operation type: " + ne);
              var Oe, Be = (oe || ae || { length: 1 }).length;
              if (oe && ae && oe.length !== ae.length) throw new Error("Given keys array must have same length as given values array.");
              if (Be === 0) return _e({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function ft(gn) {
                ++Kt, si(gn);
              }
              var gt = [], at = [], Kt = 0;
              if (ne === "deleteRange") {
                if (ue.type === 4) return _e({ numFailures: Kt, failures: at, results: [], lastResult: void 0 });
                ue.type === 3 ? gt.push(Oe = xe.clear()) : gt.push(Oe = xe.delete(p(ue)));
              } else {
                var Te = je ? Te ? [ae, oe] : [ae, null] : [oe, null], st = Te[0], dn = Te[1];
                if (je) for (var pn = 0; pn < Be; ++pn) gt.push(Oe = dn && dn[pn] !== void 0 ? xe[ne](st[pn], dn[pn]) : xe[ne](st[pn])), Oe.onerror = ft;
                else for (pn = 0; pn < Be; ++pn) gt.push(Oe = xe[ne](st[pn])), Oe.onerror = ft;
              }
              function So(gn) {
                gn = gn.target.result, gt.forEach(function(Hr, ea) {
                  return Hr.error != null && (at[ea] = Hr.error);
                }), _e({ numFailures: Kt, failures: at, results: ne === "delete" ? oe : gt.map(function(Hr) {
                  return Hr.result;
                }), lastResult: gn });
              }
              Oe.onerror = function(gn) {
                ft(gn), So(gn);
              }, Oe.onsuccess = So;
            });
          }, getMany: function(J) {
            var X = J.trans, ne = J.keys;
            return new Promise(function(oe, ae) {
              oe = Ie(oe);
              for (var ue, _e = X.objectStore(G), Ae = ne.length, xe = new Array(Ae), Te = 0, je = 0, Oe = function(gt) {
                gt = gt.target, xe[gt._pos] = gt.result, ++je === Te && oe(xe);
              }, Be = Tn(ae), ft = 0; ft < Ae; ++ft) ne[ft] != null && ((ue = _e.get(ne[ft]))._pos = ft, ue.onsuccess = Oe, ue.onerror = Be, ++Te);
              Te === 0 && oe(xe);
            });
          }, get: function(J) {
            var X = J.trans, ne = J.key;
            return new Promise(function(oe, ae) {
              oe = Ie(oe);
              var ue = X.objectStore(G).get(ne);
              ue.onsuccess = function(_e) {
                return oe(_e.target.result);
              }, ue.onerror = Tn(ae);
            });
          }, query: (V = q, function(J) {
            return new Promise(function(X, ne) {
              X = Ie(X);
              var oe, ae, ue, Te = J.trans, _e = J.values, Ae = J.limit, Oe = J.query, xe = Ae === 1 / 0 ? void 0 : Ae, je = Oe.index, Oe = Oe.range, Te = Te.objectStore(G), je = je.isPrimaryKey ? Te : Te.index(je.name), Oe = p(Oe);
              if (Ae === 0) return X({ result: [] });
              V ? ((xe = _e ? je.getAll(Oe, xe) : je.getAllKeys(Oe, xe)).onsuccess = function(Be) {
                return X({ result: Be.target.result });
              }, xe.onerror = Tn(ne)) : (oe = 0, ae = !_e && "openKeyCursor" in je ? je.openKeyCursor(Oe) : je.openCursor(Oe), ue = [], ae.onsuccess = function(Be) {
                var ft = ae.result;
                return ft ? (ue.push(_e ? ft.value : ft.primaryKey), ++oe === Ae ? X({ result: ue }) : void ft.continue()) : X({ result: ue });
              }, ae.onerror = Tn(ne));
            });
          }), openCursor: function(J) {
            var X = J.trans, ne = J.values, oe = J.query, ae = J.reverse, ue = J.unique;
            return new Promise(function(_e, Ae) {
              _e = Ie(_e);
              var je = oe.index, xe = oe.range, Te = X.objectStore(G), Te = je.isPrimaryKey ? Te : Te.index(je.name), je = ae ? ue ? "prevunique" : "prev" : ue ? "nextunique" : "next", Oe = !ne && "openKeyCursor" in Te ? Te.openKeyCursor(p(xe), je) : Te.openCursor(p(xe), je);
              Oe.onerror = Tn(Ae), Oe.onsuccess = Ie(function(Be) {
                var ft, gt, at, Kt, st = Oe.result;
                st ? (st.___id = ++Li, st.done = !1, ft = st.continue.bind(st), gt = (gt = st.continuePrimaryKey) && gt.bind(st), at = st.advance.bind(st), Kt = function() {
                  throw new Error("Cursor not stopped");
                }, st.trans = X, st.stop = st.continue = st.continuePrimaryKey = st.advance = function() {
                  throw new Error("Cursor not started");
                }, st.fail = Ie(Ae), st.next = function() {
                  var dn = this, pn = 1;
                  return this.start(function() {
                    return pn-- ? dn.continue() : dn.stop();
                  }).then(function() {
                    return dn;
                  });
                }, st.start = function(dn) {
                  function pn() {
                    if (Oe.result) try {
                      dn();
                    } catch (gn) {
                      st.fail(gn);
                    }
                    else st.done = !0, st.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, st.stop();
                  }
                  var So = new Promise(function(gn, Hr) {
                    gn = Ie(gn), Oe.onerror = Tn(Hr), st.fail = Hr, st.stop = function(ea) {
                      st.stop = st.continue = st.continuePrimaryKey = st.advance = Kt, gn(ea);
                    };
                  });
                  return Oe.onsuccess = Ie(function(gn) {
                    Oe.onsuccess = pn, pn();
                  }), st.continue = ft, st.continuePrimaryKey = gt, st.advance = at, pn(), So;
                }, _e(st)) : _e(null);
              }, Ae);
            });
          }, count: function(J) {
            var X = J.query, ne = J.trans, oe = X.index, ae = X.range;
            return new Promise(function(ue, _e) {
              var Ae = ne.objectStore(G), xe = oe.isPrimaryKey ? Ae : Ae.index(oe.name), Ae = p(ae), xe = Ae ? xe.count(Ae) : xe.count();
              xe.onsuccess = Ie(function(Te) {
                return ue(Te.target.result);
              }), xe.onerror = Tn(_e);
            });
          } };
        }
        var w, A, D, Q = (A = B, D = Ko((w = n).objectStoreNames), { schema: { name: w.name, tables: D.map(function(te) {
          return A.objectStore(te);
        }).map(function(te) {
          var V = te.keyPath, X = te.autoIncrement, G = g(V), J = {}, X = { name: te.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: V == null, compound: G, keyPath: V, autoIncrement: X, unique: !0, extractKey: fi(V) }, indexes: Ko(te.indexNames).map(function(ne) {
            return te.index(ne);
          }).map(function(ue) {
            var oe = ue.name, ae = ue.unique, _e = ue.multiEntry, ue = ue.keyPath, _e = { name: oe, compound: g(ue), keyPath: ue, unique: ae, multiEntry: _e, extractKey: fi(ue) };
            return J[ji(ue)] = _e;
          }), getIndexByKeyPath: function(ne) {
            return J[ji(ne)];
          } };
          return J[":id"] = X.primaryKey, V != null && (J[ji(V)] = X.primaryKey), X;
        }) }, hasGetAll: 0 < D.length && "getAll" in A.objectStore(D[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), B = Q.schema, q = Q.hasGetAll, Q = B.tables.map(m), k = {};
        return Q.forEach(function(te) {
          return k[te.name] = te;
        }), { stack: "dbcore", transaction: n.transaction.bind(n), table: function(te) {
          if (!k[te]) throw new Error("Table '".concat(te, "' not found"));
          return k[te];
        }, MIN_KEY: -1 / 0, MAX_KEY: li(s), schema: B };
      }
      function Ns(n, s, l, p) {
        var m = l.IDBKeyRange;
        return l.indexedDB, { dbcore: (p = La(s, m, p), n.dbcore.reduce(function(w, A) {
          return A = A.create, a(a({}, w), A(w));
        }, p)) };
      }
      function fo(n, p) {
        var l = p.db, p = Ns(n._middlewares, l, n._deps, p);
        n.core = p.dbcore, n.tables.forEach(function(m) {
          var w = m.name;
          n.core.schema.tables.some(function(A) {
            return A.name === w;
          }) && (m.core = n.core.table(w), n[w] instanceof n.Table && (n[w].core = m.core));
        });
      }
      function po(n, s, l, p) {
        l.forEach(function(m) {
          var w = p[m];
          s.forEach(function(A) {
            var D = function B(q, Q) {
              return He(q, Q) || (q = $(q)) && B(q, Q);
            }(A, m);
            (!D || "value" in D && D.value === void 0) && (A === n.Transaction.prototype || A instanceof n.Transaction ? we(A, m, { get: function() {
              return this.table(m);
            }, set: function(B) {
              le(this, m, { value: B, writable: !0, configurable: !0, enumerable: !0 });
            } }) : A[m] = new n.Table(m, w));
          });
        });
      }
      function vn(n, s) {
        s.forEach(function(l) {
          for (var p in l) l[p] instanceof n.Table && delete l[p];
        });
      }
      function di(n, s) {
        return n._cfg.version - s._cfg.version;
      }
      function ks(n, s, l, p) {
        var m = n._dbSchema;
        l.objectStoreNames.contains("$meta") && !m.$meta && (m.$meta = ci("$meta", qn("")[0], []), n._storeNames.push("$meta"));
        var w = n._createTransaction("readwrite", n._storeNames, m);
        w.create(l), w._completion.catch(p);
        var A = w._reject.bind(w), D = Le.transless || Le;
        tr(function() {
          return Le.trans = w, Le.transless = D, s !== 0 ? (fo(n, l), q = s, ((B = w).storeNames.includes("$meta") ? B.table("$meta").get("version").then(function(Q) {
            return Q ?? q;
          }) : Ke.resolve(q)).then(function(Q) {
            return te = Q, V = w, G = l, J = [], Q = (k = n)._versions, X = k._dbSchema = Bi(0, k.idbdb, G), (Q = Q.filter(function(ne) {
              return ne._cfg.version >= te;
            })).length !== 0 ? (Q.forEach(function(ne) {
              J.push(function() {
                var oe = X, ae = ne._cfg.dbschema;
                ho(k, oe, G), ho(k, ae, G), X = k._dbSchema = ae;
                var ue = Bo(oe, ae);
                ue.add.forEach(function(je) {
                  pi(G, je[0], je[1].primKey, je[1].indexes);
                }), ue.change.forEach(function(je) {
                  if (je.recreate) throw new z.Upgrade("Not yet support for changing primary key");
                  var Oe = G.objectStore(je.name);
                  je.add.forEach(function(Be) {
                    return Ki(Oe, Be);
                  }), je.change.forEach(function(Be) {
                    Oe.deleteIndex(Be.name), Ki(Oe, Be);
                  }), je.del.forEach(function(Be) {
                    return Oe.deleteIndex(Be);
                  });
                });
                var _e = ne._cfg.contentUpgrade;
                if (_e && ne._cfg.version > te) {
                  fo(k, G), V._memoizedTables = {};
                  var Ae = qe(ae);
                  ue.del.forEach(function(je) {
                    Ae[je] = oe[je];
                  }), vn(k, [k.Transaction.prototype]), po(k, [k.Transaction.prototype], y(Ae), Ae), V.schema = Ae;
                  var xe, Te = qt(_e);
                  return Te && vr(), ue = Ke.follow(function() {
                    var je;
                    (xe = _e(V)) && Te && (je = nr.bind(null, null), xe.then(je, je));
                  }), xe && typeof xe.then == "function" ? Ke.resolve(xe) : ue.then(function() {
                    return xe;
                  });
                }
              }), J.push(function(oe) {
                var ae, ue, _e = ne._cfg.dbschema;
                ae = _e, ue = oe, [].slice.call(ue.db.objectStoreNames).forEach(function(Ae) {
                  return ae[Ae] == null && ue.db.deleteObjectStore(Ae);
                }), vn(k, [k.Transaction.prototype]), po(k, [k.Transaction.prototype], k._storeNames, k._dbSchema), V.schema = k._dbSchema;
              }), J.push(function(oe) {
                k.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(k.idbdb.version / 10) === ne._cfg.version ? (k.idbdb.deleteObjectStore("$meta"), delete k._dbSchema.$meta, k._storeNames = k._storeNames.filter(function(ae) {
                  return ae !== "$meta";
                })) : oe.objectStore("$meta").put(ne._cfg.version, "version"));
              });
            }), function ne() {
              return J.length ? Ke.resolve(J.shift()(V.idbtrans)).then(ne) : Ke.resolve();
            }().then(function() {
              or(X, G);
            })) : Ke.resolve();
            var k, te, V, G, J, X;
          }).catch(A)) : (y(m).forEach(function(Q) {
            pi(l, Q, m[Q].primKey, m[Q].indexes);
          }), fo(n, l), void Ke.follow(function() {
            return n.on.populate.fire(w);
          }).catch(A));
          var B, q;
        });
      }
      function Fs(n, s) {
        or(n._dbSchema, s), s.db.version % 10 != 0 || s.objectStoreNames.contains("$meta") || s.db.createObjectStore("$meta").add(Math.ceil(s.db.version / 10 - 1), "version");
        var l = Bi(0, n.idbdb, s);
        ho(n, n._dbSchema, s);
        for (var p = 0, m = Bo(l, n._dbSchema).change; p < m.length; p++) {
          var w = function(A) {
            if (A.change.length || A.recreate) return console.warn("Unable to patch indexes of table ".concat(A.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var D = s.objectStore(A.name);
            A.add.forEach(function(B) {
              ie && console.debug("Dexie upgrade patch: Creating missing index ".concat(A.name, ".").concat(B.src)), Ki(D, B);
            });
          }(m[p]);
          if (typeof w == "object") return w.value;
        }
      }
      function Bo(n, s) {
        var l, p = { del: [], add: [], change: [] };
        for (l in n) s[l] || p.del.push(l);
        for (l in s) {
          var m = n[l], w = s[l];
          if (m) {
            var A = { name: l, def: w, recreate: !1, del: [], add: [], change: [] };
            if ("" + (m.primKey.keyPath || "") != "" + (w.primKey.keyPath || "") || m.primKey.auto !== w.primKey.auto) A.recreate = !0, p.change.push(A);
            else {
              var D = m.idxByName, B = w.idxByName, q = void 0;
              for (q in D) B[q] || A.del.push(q);
              for (q in B) {
                var Q = D[q], k = B[q];
                Q ? Q.src !== k.src && A.change.push(k) : A.add.push(k);
              }
              (0 < A.del.length || 0 < A.add.length || 0 < A.change.length) && p.change.push(A);
            }
          } else p.add.push([l, w]);
        }
        return p;
      }
      function pi(n, s, l, p) {
        var m = n.db.createObjectStore(s, l.keyPath ? { keyPath: l.keyPath, autoIncrement: l.auto } : { autoIncrement: l.auto });
        return p.forEach(function(w) {
          return Ki(m, w);
        }), m;
      }
      function or(n, s) {
        y(n).forEach(function(l) {
          s.db.objectStoreNames.contains(l) || (ie && console.debug("Dexie: Creating missing table", l), pi(s, l, n[l].primKey, n[l].indexes));
        });
      }
      function Ki(n, s) {
        n.createIndex(s.name, s.keyPath, { unique: s.unique, multiEntry: s.multi });
      }
      function Bi(n, s, l) {
        var p = {};
        return Je(s.objectStoreNames, 0).forEach(function(m) {
          for (var w = l.objectStore(m), A = Mi(Ma(q = w.keyPath), q || "", !0, !1, !!w.autoIncrement, q && typeof q != "string", !0), D = [], B = 0; B < w.indexNames.length; ++B) {
            var Q = w.index(w.indexNames[B]), q = Q.keyPath, Q = Mi(Q.name, q, !!Q.unique, !!Q.multiEntry, !1, q && typeof q != "string", !1);
            D.push(Q);
          }
          p[m] = ci(m, A, D);
        }), p;
      }
      function ho(n, s, l) {
        for (var p = l.db.objectStoreNames, m = 0; m < p.length; ++m) {
          var w = p[m], A = l.objectStore(w);
          n._hasGetAll = "getAll" in A;
          for (var D = 0; D < A.indexNames.length; ++D) {
            var B = A.indexNames[D], q = A.index(B).keyPath, Q = typeof q == "string" ? q : "[" + Je(q).join("+") + "]";
            !s[w] || (q = s[w].idxByName[Q]) && (q.name = B, delete s[w].idxByName[Q], s[w].idxByName[B] = q);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && d.WorkerGlobalScope && d instanceof d.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (n._hasGetAll = !1);
      }
      function qn(n) {
        return n.split(",").map(function(s, l) {
          var w = s.split(":"), p = (m = w[1]) === null || m === void 0 ? void 0 : m.trim(), m = (s = w[0].trim()).replace(/([&*]|\+\+)/g, ""), w = /^\[/.test(m) ? m.match(/^\[(.*)\]$/)[1].split("+") : m;
          return Mi(m, w || null, /\&/.test(s), /\*/.test(s), /\+\+/.test(s), g(w), l === 0, p);
        });
      }
      var $i = (zn.prototype._createTableSchema = ci, zn.prototype._parseIndexSyntax = qn, zn.prototype._parseStoresSpec = function(n, s) {
        var l = this;
        y(n).forEach(function(p) {
          if (n[p] !== null) {
            var m = l._parseIndexSyntax(n[p]), w = m.shift();
            if (!w) throw new z.Schema("Invalid schema for table " + p + ": " + n[p]);
            if (w.unique = !0, w.multi) throw new z.Schema("Primary key cannot be multiEntry*");
            m.forEach(function(A) {
              if (A.auto) throw new z.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!A.keyPath) throw new z.Schema("Index must have a name and cannot be an empty string");
            }), m = l._createTableSchema(p, w, m), s[p] = m;
          }
        });
      }, zn.prototype.stores = function(l) {
        var s = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? x(this._cfg.storesSource, l) : l;
        var l = s._versions, p = {}, m = {};
        return l.forEach(function(w) {
          x(p, w._cfg.storesSource), m = w._cfg.dbschema = {}, w._parseStoresSpec(p, m);
        }), s._dbSchema = m, vn(s, [s._allTables, s, s.Transaction.prototype]), po(s, [s._allTables, s, s.Transaction.prototype, this._cfg.tables], y(m), m), s._storeNames = y(m), this;
      }, zn.prototype.upgrade = function(n) {
        return this._cfg.contentUpgrade = H(this._cfg.contentUpgrade || ze, n), this;
      }, zn);
      function zn() {
      }
      function Vi(n, s) {
        var l = n._dbNamesDB;
        return l || (l = n._dbNamesDB = new ar(so, { addons: [], indexedDB: n, IDBKeyRange: s })).version(1).stores({ dbnames: "name" }), l.table("dbnames");
      }
      function Xn(n) {
        return n && typeof n.databases == "function";
      }
      function $o(n) {
        return tr(function() {
          return Le.letThrough = !0, n();
        });
      }
      function Vo(n) {
        return !("from" in n);
      }
      var on = function(n, s) {
        if (!this) {
          var l = new on();
          return n && "d" in n && x(l, n), l;
        }
        x(this, arguments.length ? { d: 1, from: n, to: 1 < arguments.length ? s : n } : { d: 0 });
      };
      function hi(n, s, l) {
        var p = lt(s, l);
        if (!isNaN(p)) {
          if (0 < p) throw RangeError();
          if (Vo(n)) return x(n, { from: s, to: l, d: 1 });
          var m = n.l, p = n.r;
          if (lt(l, n.from) < 0) return m ? hi(m, s, l) : n.l = { from: s, to: l, d: 1, l: null, r: null }, mo(n);
          if (0 < lt(s, n.to)) return p ? hi(p, s, l) : n.r = { from: s, to: l, d: 1, l: null, r: null }, mo(n);
          lt(s, n.from) < 0 && (n.from = s, n.l = null, n.d = p ? p.d + 1 : 1), 0 < lt(l, n.to) && (n.to = l, n.r = null, n.d = n.l ? n.l.d + 1 : 1), l = !n.r, m && !n.l && Ur(n, m), p && l && Ur(n, p);
        }
      }
      function Ur(n, s) {
        Vo(s) || function l(p, B) {
          var w = B.from, A = B.to, D = B.l, B = B.r;
          hi(p, w, A), D && l(p, D), B && l(p, B);
        }(n, s);
      }
      function ja(n, s) {
        var l = xr(s), p = l.next();
        if (p.done) return !1;
        for (var m = p.value, w = xr(n), A = w.next(m.from), D = A.value; !p.done && !A.done; ) {
          if (lt(D.from, m.to) <= 0 && 0 <= lt(D.to, m.from)) return !0;
          lt(m.from, D.from) < 0 ? m = (p = l.next(D.from)).value : D = (A = w.next(m.from)).value;
        }
        return !1;
      }
      function xr(n) {
        var s = Vo(n) ? null : { s: 0, n };
        return { next: function(l) {
          for (var p = 0 < arguments.length; s; ) switch (s.s) {
            case 0:
              if (s.s = 1, p) for (; s.n.l && lt(l, s.n.from) < 0; ) s = { up: s, n: s.n.l, s: 1 };
              else for (; s.n.l; ) s = { up: s, n: s.n.l, s: 1 };
            case 1:
              if (s.s = 2, !p || lt(l, s.n.to) <= 0) return { value: s.n, done: !1 };
            case 2:
              if (s.n.r) {
                s.s = 3, s = { up: s, n: s.n.r, s: 0 };
                continue;
              }
            case 3:
              s = s.up;
          }
          return { done: !0 };
        } };
      }
      function mo(n) {
        var s, l, p = (((s = n.r) === null || s === void 0 ? void 0 : s.d) || 0) - (((l = n.l) === null || l === void 0 ? void 0 : l.d) || 0), m = 1 < p ? "r" : p < -1 ? "l" : "";
        m && (s = m == "r" ? "l" : "r", l = a({}, n), p = n[m], n.from = p.from, n.to = p.to, n[m] = p[m], l[m] = p[s], (n[s] = l).d = Ka(l)), n.d = Ka(n);
      }
      function Ka(l) {
        var s = l.r, l = l.l;
        return (s ? l ? Math.max(s.d, l.d) : s.d : l ? l.d : 0) + 1;
      }
      function qi(n, s) {
        return y(s).forEach(function(l) {
          n[l] ? Ur(n[l], s[l]) : n[l] = function p(m) {
            var w, A, D = {};
            for (w in m) O(m, w) && (A = m[w], D[w] = !A || typeof A != "object" || At.has(A.constructor) ? A : p(A));
            return D;
          }(s[l]);
        }), n;
      }
      function qo(n, s) {
        return n.all || s.all || Object.keys(n).some(function(l) {
          return s[l] && ja(s[l], n[l]);
        });
      }
      ee(on.prototype, ((_n = { add: function(n) {
        return Ur(this, n), this;
      }, addKey: function(n) {
        return hi(this, n, n), this;
      }, addKeys: function(n) {
        var s = this;
        return n.forEach(function(l) {
          return hi(s, l, l);
        }), this;
      }, hasKey: function(n) {
        var s = xr(this).next(n).value;
        return s && lt(s.from, n) <= 0 && 0 <= lt(s.to, n);
      } })[St] = function() {
        return xr(this);
      }, _n));
      var Un = {}, Uo = {}, Go = !1;
      function yo(n) {
        qi(Uo, n), Go || (Go = !0, setTimeout(function() {
          Go = !1, mi(Uo, !(Uo = {}));
        }, 0));
      }
      function mi(n, s) {
        s === void 0 && (s = !1);
        var l = /* @__PURE__ */ new Set();
        if (n.all) for (var p = 0, m = Object.values(Un); p < m.length; p++) Ui(A = m[p], n, l, s);
        else for (var w in n) {
          var A, D = /^idb\:\/\/(.*)\/(.*)\//.exec(w);
          D && (w = D[1], D = D[2], (A = Un["idb://".concat(w, "/").concat(D)]) && Ui(A, n, l, s));
        }
        l.forEach(function(B) {
          return B();
        });
      }
      function Ui(n, s, l, p) {
        for (var m = [], w = 0, A = Object.entries(n.queries.query); w < A.length; w++) {
          for (var D = A[w], B = D[0], q = [], Q = 0, k = D[1]; Q < k.length; Q++) {
            var te = k[Q];
            qo(s, te.obsSet) ? te.subscribers.forEach(function(X) {
              return l.add(X);
            }) : p && q.push(te);
          }
          p && m.push([B, q]);
        }
        if (p) for (var V = 0, G = m; V < G.length; V++) {
          var J = G[V], B = J[0], q = J[1];
          n.queries.query[B] = q;
        }
      }
      function Ho(n) {
        var s = n._state, l = n._deps.indexedDB;
        if (s.isBeingOpened || n.idbdb) return s.dbReadyPromise.then(function() {
          return s.dbOpenError ? Wt(s.dbOpenError) : n;
        });
        s.isBeingOpened = !0, s.dbOpenError = null, s.openComplete = !1;
        var p = s.openCanceller, m = Math.round(10 * n.verno), w = !1;
        function A() {
          if (s.openCanceller !== p) throw new z.DatabaseClosed("db.open() was cancelled");
        }
        function D() {
          return new Ke(function(te, V) {
            if (A(), !l) throw new z.MissingAPI();
            var G = n.name, J = s.autoSchema || !m ? l.open(G) : l.open(G, m);
            if (!J) throw new z.MissingAPI();
            J.onerror = Tn(V), J.onblocked = Ie(n._fireOnBlocked), J.onupgradeneeded = Ie(function(X) {
              var ne;
              Q = J.transaction, s.autoSchema && !n._options.allowEmptyDB ? (J.onerror = si, Q.abort(), J.result.close(), (ne = l.deleteDatabase(G)).onsuccess = ne.onerror = Ie(function() {
                V(new z.NoSuchDatabase("Database ".concat(G, " doesnt exist")));
              })) : (Q.onerror = Tn(V), X = X.oldVersion > Math.pow(2, 62) ? 0 : X.oldVersion, k = X < 1, n.idbdb = J.result, w && Fs(n, Q), ks(n, X / 10, Q, V));
            }, V), J.onsuccess = Ie(function() {
              Q = null;
              var X, ne, oe, ae, ue, _e = n.idbdb = J.result, Ae = Je(_e.objectStoreNames);
              if (0 < Ae.length) try {
                var xe = _e.transaction((ae = Ae).length === 1 ? ae[0] : ae, "readonly");
                if (s.autoSchema) ne = _e, oe = xe, (X = n).verno = ne.version / 10, oe = X._dbSchema = Bi(0, ne, oe), X._storeNames = Je(ne.objectStoreNames, 0), po(X, [X._allTables], y(oe), oe);
                else if (ho(n, n._dbSchema, xe), ((ue = Bo(Bi(0, (ue = n).idbdb, xe), ue._dbSchema)).add.length || ue.change.some(function(Te) {
                  return Te.add.length || Te.change.length;
                })) && !w) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), _e.close(), m = _e.version + 1, w = !0, te(D());
                fo(n, xe);
              } catch {
              }
              Lt.push(n), _e.onversionchange = Ie(function(Te) {
                s.vcFired = !0, n.on("versionchange").fire(Te);
              }), _e.onclose = Ie(function(Te) {
                n.on("close").fire(Te);
              }), k && (ue = n._deps, xe = G, _e = ue.indexedDB, ue = ue.IDBKeyRange, Xn(_e) || xe === so || Vi(_e, ue).put({ name: xe }).catch(ze)), te();
            }, V);
          }).catch(function(te) {
            switch (te?.name) {
              case "UnknownError":
                if (0 < s.PR1398_maxLoop) return s.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), D();
                break;
              case "VersionError":
                if (0 < m) return m = 0, D();
            }
            return Ke.reject(te);
          });
        }
        var B, q = s.dbReadyResolve, Q = null, k = !1;
        return Ke.race([p, (typeof navigator > "u" ? Ke.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(te) {
          function V() {
            return indexedDB.databases().finally(te);
          }
          B = setInterval(V, 100), V();
        }).finally(function() {
          return clearInterval(B);
        }) : Promise.resolve()).then(D)]).then(function() {
          return A(), s.onReadyBeingFired = [], Ke.resolve($o(function() {
            return n.on.ready.fire(n.vip);
          })).then(function te() {
            if (0 < s.onReadyBeingFired.length) {
              var V = s.onReadyBeingFired.reduce(H, ze);
              return s.onReadyBeingFired = [], Ke.resolve($o(function() {
                return V(n.vip);
              })).then(te);
            }
          });
        }).finally(function() {
          s.openCanceller === p && (s.onReadyBeingFired = null, s.isBeingOpened = !1);
        }).catch(function(te) {
          s.dbOpenError = te;
          try {
            Q && Q.abort();
          } catch {
          }
          return p === s.openCanceller && n._close(), Wt(te);
        }).finally(function() {
          s.openComplete = !0, q();
        }).then(function() {
          var te;
          return k && (te = {}, n.tables.forEach(function(V) {
            V.schema.indexes.forEach(function(G) {
              G.name && (te["idb://".concat(n.name, "/").concat(V.name, "/").concat(G.name)] = new on(-1 / 0, [[[]]]));
            }), te["idb://".concat(n.name, "/").concat(V.name, "/")] = te["idb://".concat(n.name, "/").concat(V.name, "/:dels")] = new on(-1 / 0, [[[]]]);
          }), Sr(ir).fire(te), mi(te, !0)), n;
        });
      }
      function Wo(n) {
        function s(w) {
          return n.next(w);
        }
        var l = m(s), p = m(function(w) {
          return n.throw(w);
        });
        function m(w) {
          return function(B) {
            var D = w(B), B = D.value;
            return D.done ? B : B && typeof B.then == "function" ? B.then(l, p) : g(B) ? Promise.all(B).then(l, p) : l(B);
          };
        }
        return m(s)();
      }
      function vo(n, s, l) {
        for (var p = g(n) ? n.slice() : [n], m = 0; m < l; ++m) p.push(s);
        return p;
      }
      var Ms = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(n) {
        return a(a({}, n), { table: function(s) {
          var l = n.table(s), p = l.schema, m = {}, w = [];
          function A(k, te, V) {
            var G = ji(k), J = m[G] = m[G] || [], X = k == null ? 0 : typeof k == "string" ? 1 : k.length, ne = 0 < te, ne = a(a({}, V), { name: ne ? "".concat(G, "(virtual-from:").concat(V.name, ")") : V.name, lowLevelIndex: V, isVirtual: ne, keyTail: te, keyLength: X, extractKey: fi(k), unique: !ne && V.unique });
            return J.push(ne), ne.isPrimaryKey || w.push(ne), 1 < X && A(X === 2 ? k[0] : k.slice(0, X - 1), te + 1, V), J.sort(function(oe, ae) {
              return oe.keyTail - ae.keyTail;
            }), ne;
          }
          s = A(p.primaryKey.keyPath, 0, p.primaryKey), m[":id"] = [s];
          for (var D = 0, B = p.indexes; D < B.length; D++) {
            var q = B[D];
            A(q.keyPath, 0, q);
          }
          function Q(k) {
            var te, V = k.query.index;
            return V.isVirtual ? a(a({}, k), { query: { index: V.lowLevelIndex, range: (te = k.query.range, V = V.keyTail, { type: te.type === 1 ? 2 : te.type, lower: vo(te.lower, te.lowerOpen ? n.MAX_KEY : n.MIN_KEY, V), lowerOpen: !0, upper: vo(te.upper, te.upperOpen ? n.MIN_KEY : n.MAX_KEY, V), upperOpen: !0 }) } }) : k;
          }
          return a(a({}, l), { schema: a(a({}, p), { primaryKey: s, indexes: w, getIndexByKeyPath: function(k) {
            return (k = m[ji(k)]) && k[0];
          } }), count: function(k) {
            return l.count(Q(k));
          }, query: function(k) {
            return l.query(Q(k));
          }, openCursor: function(k) {
            var te = k.query.index, V = te.keyTail, G = te.isVirtual, J = te.keyLength;
            return G ? l.openCursor(Q(k)).then(function(ne) {
              return ne && X(ne);
            }) : l.openCursor(k);
            function X(ne) {
              return Object.create(ne, { continue: { value: function(oe) {
                oe != null ? ne.continue(vo(oe, k.reverse ? n.MAX_KEY : n.MIN_KEY, V)) : k.unique ? ne.continue(ne.key.slice(0, J).concat(k.reverse ? n.MIN_KEY : n.MAX_KEY, V)) : ne.continue();
              } }, continuePrimaryKey: { value: function(oe, ae) {
                ne.continuePrimaryKey(vo(oe, n.MAX_KEY, V), ae);
              } }, primaryKey: { get: function() {
                return ne.primaryKey;
              } }, key: { get: function() {
                var oe = ne.key;
                return J === 1 ? oe[0] : oe.slice(0, J);
              } }, value: { get: function() {
                return ne.value;
              } } });
            }
          } });
        } });
      } };
      function Yo(n, s, l, p) {
        return l = l || {}, p = p || "", y(n).forEach(function(m) {
          var w, A, D;
          O(s, m) ? (w = n[m], A = s[m], typeof w == "object" && typeof A == "object" && w && A ? (D = Vt(w)) !== Vt(A) ? l[p + m] = s[m] : D === "Object" ? Yo(w, A, l, p + m + ".") : w !== A && (l[p + m] = s[m]) : w !== A && (l[p + m] = s[m])) : l[p + m] = void 0;
        }), y(s).forEach(function(m) {
          O(n, m) || (l[p + m] = s[m]);
        }), l;
      }
      function Qo(n, s) {
        return s.type === "delete" ? s.keys : s.keys || s.values.map(n.extractKey);
      }
      var zo = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(n) {
        return a(a({}, n), { table: function(s) {
          var l = n.table(s), p = l.schema.primaryKey;
          return a(a({}, l), { mutate: function(m) {
            var w = Le.trans, A = w.table(s).hook, D = A.deleting, B = A.creating, q = A.updating;
            switch (m.type) {
              case "add":
                if (B.fire === ze) break;
                return w._promise("readwrite", function() {
                  return Q(m);
                }, !0);
              case "put":
                if (B.fire === ze && q.fire === ze) break;
                return w._promise("readwrite", function() {
                  return Q(m);
                }, !0);
              case "delete":
                if (D.fire === ze) break;
                return w._promise("readwrite", function() {
                  return Q(m);
                }, !0);
              case "deleteRange":
                if (D.fire === ze) break;
                return w._promise("readwrite", function() {
                  return function k(te, V, G) {
                    return l.query({ trans: te, values: !1, query: { index: p, range: V }, limit: G }).then(function(J) {
                      var X = J.result;
                      return Q({ type: "delete", keys: X, trans: te }).then(function(ne) {
                        return 0 < ne.numFailures ? Promise.reject(ne.failures[0]) : X.length < G ? { failures: [], numFailures: 0, lastResult: void 0 } : k(te, a(a({}, V), { lower: X[X.length - 1], lowerOpen: !0 }), G);
                      });
                    });
                  }(m.trans, m.range, 1e4);
                }, !0);
            }
            return l.mutate(m);
            function Q(k) {
              var te, V, G, J = Le.trans, X = k.keys || Qo(p, k);
              if (!X) throw new Error("Keys missing");
              return (k = k.type === "add" || k.type === "put" ? a(a({}, k), { keys: X }) : a({}, k)).type !== "delete" && (k.values = c([], k.values)), k.keys && (k.keys = c([], k.keys)), te = l, G = X, ((V = k).type === "add" ? Promise.resolve([]) : te.getMany({ trans: V.trans, keys: G, cache: "immutable" })).then(function(ne) {
                var oe = X.map(function(ae, ue) {
                  var _e, Ae, xe, Te = ne[ue], je = { onerror: null, onsuccess: null };
                  return k.type === "delete" ? D.fire.call(je, ae, Te, J) : k.type === "add" || Te === void 0 ? (_e = B.fire.call(je, ae, k.values[ue], J), ae == null && _e != null && (k.keys[ue] = ae = _e, p.outbound || ge(k.values[ue], p.keyPath, ae))) : (_e = Yo(Te, k.values[ue]), (Ae = q.fire.call(je, _e, ae, Te, J)) && (xe = k.values[ue], Object.keys(Ae).forEach(function(Oe) {
                    O(xe, Oe) ? xe[Oe] = Ae[Oe] : ge(xe, Oe, Ae[Oe]);
                  }))), je;
                });
                return l.mutate(k).then(function(ae) {
                  for (var ue = ae.failures, _e = ae.results, Ae = ae.numFailures, ae = ae.lastResult, xe = 0; xe < X.length; ++xe) {
                    var Te = (_e || X)[xe], je = oe[xe];
                    Te == null ? je.onerror && je.onerror(ue[xe]) : je.onsuccess && je.onsuccess(k.type === "put" && ne[xe] ? k.values[xe] : Te);
                  }
                  return { failures: ue, results: _e, numFailures: Ae, lastResult: ae };
                }).catch(function(ae) {
                  return oe.forEach(function(ue) {
                    return ue.onerror && ue.onerror(ae);
                  }), Promise.reject(ae);
                });
              });
            }
          } });
        } });
      } };
      function go(n, s, l) {
        try {
          if (!s || s.keys.length < n.length) return null;
          for (var p = [], m = 0, w = 0; m < s.keys.length && w < n.length; ++m) lt(s.keys[m], n[w]) === 0 && (p.push(l ? Dt(s.values[m]) : s.values[m]), ++w);
          return p.length === n.length ? p : null;
        } catch {
          return null;
        }
      }
      var Ba = { stack: "dbcore", level: -1, create: function(n) {
        return { table: function(s) {
          var l = n.table(s);
          return a(a({}, l), { getMany: function(p) {
            if (!p.cache) return l.getMany(p);
            var m = go(p.keys, p.trans._cache, p.cache === "clone");
            return m ? Ke.resolve(m) : l.getMany(p).then(function(w) {
              return p.trans._cache = { keys: p.keys, values: p.cache === "clone" ? Dt(w) : w }, w;
            });
          }, mutate: function(p) {
            return p.type !== "add" && (p.trans._cache = null), l.mutate(p);
          } });
        } };
      } };
      function $a(n, s) {
        return n.trans.mode === "readonly" && !!n.subscr && !n.trans.explicit && n.trans.db._options.cache !== "disabled" && !s.schema.primaryKey.outbound;
      }
      function Gi(n, s) {
        switch (n) {
          case "query":
            return s.values && !s.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return !1;
        }
      }
      var bo = { stack: "dbcore", level: 0, name: "Observability", create: function(n) {
        var s = n.schema.name, l = new on(n.MIN_KEY, n.MAX_KEY);
        return a(a({}, n), { transaction: function(p, m, w) {
          if (Le.subscr && m !== "readonly") throw new z.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Le.querier));
          return n.transaction(p, m, w);
        }, table: function(p) {
          var m = n.table(p), w = m.schema, A = w.primaryKey, k = w.indexes, D = A.extractKey, B = A.outbound, q = A.autoIncrement && k.filter(function(V) {
            return V.compound && V.keyPath.includes(A.keyPath);
          }), Q = a(a({}, m), { mutate: function(V) {
            function G(Oe) {
              return Oe = "idb://".concat(s, "/").concat(p, "/").concat(Oe), ae[Oe] || (ae[Oe] = new on());
            }
            var J, X, ne, oe = V.trans, ae = V.mutatedParts || (V.mutatedParts = {}), ue = G(""), _e = G(":dels"), Ae = V.type, je = V.type === "deleteRange" ? [V.range] : V.type === "delete" ? [V.keys] : V.values.length < 50 ? [Qo(A, V).filter(function(Oe) {
              return Oe;
            }), V.values] : [], xe = je[0], Te = je[1], je = V.trans._cache;
            return g(xe) ? (ue.addKeys(xe), (je = Ae === "delete" || xe.length === Te.length ? go(xe, je) : null) || _e.addKeys(xe), (je || Te) && (J = G, X = je, ne = Te, w.indexes.forEach(function(Oe) {
              var Be = J(Oe.name || "");
              function ft(at) {
                return at != null ? Oe.extractKey(at) : null;
              }
              function gt(at) {
                return Oe.multiEntry && g(at) ? at.forEach(function(Kt) {
                  return Be.addKey(Kt);
                }) : Be.addKey(at);
              }
              (X || ne).forEach(function(at, dn) {
                var st = X && ft(X[dn]), dn = ne && ft(ne[dn]);
                lt(st, dn) !== 0 && (st != null && gt(st), dn != null && gt(dn));
              });
            }))) : xe ? (Te = { from: (Te = xe.lower) !== null && Te !== void 0 ? Te : n.MIN_KEY, to: (Te = xe.upper) !== null && Te !== void 0 ? Te : n.MAX_KEY }, _e.add(Te), ue.add(Te)) : (ue.add(l), _e.add(l), w.indexes.forEach(function(Oe) {
              return G(Oe.name).add(l);
            })), m.mutate(V).then(function(Oe) {
              return !xe || V.type !== "add" && V.type !== "put" || (ue.addKeys(Oe.results), q && q.forEach(function(Be) {
                for (var ft = V.values.map(function(st) {
                  return Be.extractKey(st);
                }), gt = Be.keyPath.findIndex(function(st) {
                  return st === A.keyPath;
                }), at = 0, Kt = Oe.results.length; at < Kt; ++at) ft[at][gt] = Oe.results[at];
                G(Be.name).addKeys(ft);
              })), oe.mutatedParts = qi(oe.mutatedParts || {}, ae), Oe;
            });
          } }), k = function(G) {
            var J = G.query, G = J.index, J = J.range;
            return [G, new on((G = J.lower) !== null && G !== void 0 ? G : n.MIN_KEY, (J = J.upper) !== null && J !== void 0 ? J : n.MAX_KEY)];
          }, te = { get: function(V) {
            return [A, new on(V.key)];
          }, getMany: function(V) {
            return [A, new on().addKeys(V.keys)];
          }, count: k, query: k, openCursor: k };
          return y(te).forEach(function(V) {
            Q[V] = function(G) {
              var J = Le.subscr, X = !!J, ne = $a(Le, m) && Gi(V, G) ? G.obsSet = {} : J;
              if (X) {
                var oe = function(Te) {
                  return Te = "idb://".concat(s, "/").concat(p, "/").concat(Te), ne[Te] || (ne[Te] = new on());
                }, ae = oe(""), ue = oe(":dels"), J = te[V](G), X = J[0], J = J[1];
                if ((V === "query" && X.isPrimaryKey && !G.values ? ue : oe(X.name || "")).add(J), !X.isPrimaryKey) {
                  if (V !== "count") {
                    var _e = V === "query" && B && G.values && m.query(a(a({}, G), { values: !1 }));
                    return m[V].apply(this, arguments).then(function(Te) {
                      if (V === "query") {
                        if (B && G.values) return _e.then(function(ft) {
                          return ft = ft.result, ae.addKeys(ft), Te;
                        });
                        var je = G.values ? Te.result.map(D) : Te.result;
                        (G.values ? ae : ue).addKeys(je);
                      } else if (V === "openCursor") {
                        var Oe = Te, Be = G.values;
                        return Oe && Object.create(Oe, { key: { get: function() {
                          return ue.addKey(Oe.primaryKey), Oe.key;
                        } }, primaryKey: { get: function() {
                          var ft = Oe.primaryKey;
                          return ue.addKey(ft), ft;
                        } }, value: { get: function() {
                          return Be && ae.addKey(Oe.primaryKey), Oe.value;
                        } } });
                      }
                      return Te;
                    });
                  }
                  ue.add(l);
                }
              }
              return m[V].apply(this, arguments);
            };
          }), Q;
        } });
      } };
      function Va(n, s, l) {
        if (l.numFailures === 0) return s;
        if (s.type === "deleteRange") return null;
        var p = s.keys ? s.keys.length : "values" in s && s.values ? s.values.length : 1;
        return l.numFailures === p ? null : (s = a({}, s), g(s.keys) && (s.keys = s.keys.filter(function(m, w) {
          return !(w in l.failures);
        })), "values" in s && g(s.values) && (s.values = s.values.filter(function(m, w) {
          return !(w in l.failures);
        })), s);
      }
      function Xo(n, s) {
        return l = n, ((p = s).lower === void 0 || (p.lowerOpen ? 0 < lt(l, p.lower) : 0 <= lt(l, p.lower))) && (n = n, (s = s).upper === void 0 || (s.upperOpen ? lt(n, s.upper) < 0 : lt(n, s.upper) <= 0));
        var l, p;
      }
      function Hi(n, s, te, p, m, w) {
        if (!te || te.length === 0) return n;
        var A = s.query.index, D = A.multiEntry, B = s.query.range, q = p.schema.primaryKey.extractKey, Q = A.extractKey, k = (A.lowLevelIndex || A).extractKey, te = te.reduce(function(V, G) {
          var J = V, X = [];
          if (G.type === "add" || G.type === "put") for (var ne = new on(), oe = G.values.length - 1; 0 <= oe; --oe) {
            var ae, ue = G.values[oe], _e = q(ue);
            ne.hasKey(_e) || (ae = Q(ue), (D && g(ae) ? ae.some(function(Oe) {
              return Xo(Oe, B);
            }) : Xo(ae, B)) && (ne.addKey(_e), X.push(ue)));
          }
          switch (G.type) {
            case "add":
              var Ae = new on().addKeys(s.values ? V.map(function(Be) {
                return q(Be);
              }) : V), J = V.concat(s.values ? X.filter(function(Be) {
                return Be = q(Be), !Ae.hasKey(Be) && (Ae.addKey(Be), !0);
              }) : X.map(function(Be) {
                return q(Be);
              }).filter(function(Be) {
                return !Ae.hasKey(Be) && (Ae.addKey(Be), !0);
              }));
              break;
            case "put":
              var xe = new on().addKeys(G.values.map(function(Be) {
                return q(Be);
              }));
              J = V.filter(function(Be) {
                return !xe.hasKey(s.values ? q(Be) : Be);
              }).concat(s.values ? X : X.map(function(Be) {
                return q(Be);
              }));
              break;
            case "delete":
              var Te = new on().addKeys(G.keys);
              J = V.filter(function(Be) {
                return !Te.hasKey(s.values ? q(Be) : Be);
              });
              break;
            case "deleteRange":
              var je = G.range;
              J = V.filter(function(Be) {
                return !Xo(q(Be), je);
              });
          }
          return J;
        }, n);
        return te === n ? n : (te.sort(function(V, G) {
          return lt(k(V), k(G)) || lt(q(V), q(G));
        }), s.limit && s.limit < 1 / 0 && (te.length > s.limit ? te.length = s.limit : n.length === s.limit && te.length < s.limit && (m.dirty = !0)), w ? Object.freeze(te) : te);
      }
      function Jo(n, s) {
        return lt(n.lower, s.lower) === 0 && lt(n.upper, s.upper) === 0 && !!n.lowerOpen == !!s.lowerOpen && !!n.upperOpen == !!s.upperOpen;
      }
      function Ls(n, s) {
        return function(l, p, m, w) {
          if (l === void 0) return p !== void 0 ? -1 : 0;
          if (p === void 0) return 1;
          if ((p = lt(l, p)) === 0) {
            if (m && w) return 0;
            if (m) return 1;
            if (w) return -1;
          }
          return p;
        }(n.lower, s.lower, n.lowerOpen, s.lowerOpen) <= 0 && 0 <= function(l, p, m, w) {
          if (l === void 0) return p !== void 0 ? 1 : 0;
          if (p === void 0) return -1;
          if ((p = lt(l, p)) === 0) {
            if (m && w) return 0;
            if (m) return -1;
            if (w) return 1;
          }
          return p;
        }(n.upper, s.upper, n.upperOpen, s.upperOpen);
      }
      function js(n, s, l, p) {
        n.subscribers.add(l), p.addEventListener("abort", function() {
          var m, w;
          n.subscribers.delete(l), n.subscribers.size === 0 && (m = n, w = s, setTimeout(function() {
            m.subscribers.size === 0 && et(w, m);
          }, 3e3));
        });
      }
      var Zo = { stack: "dbcore", level: 0, name: "Cache", create: function(n) {
        var s = n.schema.name;
        return a(a({}, n), { transaction: function(l, p, m) {
          var w, A, D = n.transaction(l, p, m);
          return p === "readwrite" && (A = (w = new AbortController()).signal, m = function(B) {
            return function() {
              if (w.abort(), p === "readwrite") {
                for (var q = /* @__PURE__ */ new Set(), Q = 0, k = l; Q < k.length; Q++) {
                  var te = k[Q], V = Un["idb://".concat(s, "/").concat(te)];
                  if (V) {
                    var G = n.table(te), J = V.optimisticOps.filter(function(Be) {
                      return Be.trans === D;
                    });
                    if (D._explicit && B && D.mutatedParts) for (var X = 0, ne = Object.values(V.queries.query); X < ne.length; X++) for (var oe = 0, ae = (Ae = ne[X]).slice(); oe < ae.length; oe++) qo((xe = ae[oe]).obsSet, D.mutatedParts) && (et(Ae, xe), xe.subscribers.forEach(function(Be) {
                      return q.add(Be);
                    }));
                    else if (0 < J.length) {
                      V.optimisticOps = V.optimisticOps.filter(function(Be) {
                        return Be.trans !== D;
                      });
                      for (var ue = 0, _e = Object.values(V.queries.query); ue < _e.length; ue++) for (var Ae, xe, Te, je = 0, Oe = (Ae = _e[ue]).slice(); je < Oe.length; je++) (xe = Oe[je]).res != null && D.mutatedParts && (B && !xe.dirty ? (Te = Object.isFrozen(xe.res), Te = Hi(xe.res, xe.req, J, G, xe, Te), xe.dirty ? (et(Ae, xe), xe.subscribers.forEach(function(Be) {
                        return q.add(Be);
                      })) : Te !== xe.res && (xe.res = Te, xe.promise = Ke.resolve({ result: Te }))) : (xe.dirty && et(Ae, xe), xe.subscribers.forEach(function(Be) {
                        return q.add(Be);
                      })));
                    }
                  }
                }
                q.forEach(function(Be) {
                  return Be();
                });
              }
            };
          }, D.addEventListener("abort", m(!1), { signal: A }), D.addEventListener("error", m(!1), { signal: A }), D.addEventListener("complete", m(!0), { signal: A })), D;
        }, table: function(l) {
          var p = n.table(l), m = p.schema.primaryKey;
          return a(a({}, p), { mutate: function(w) {
            var A = Le.trans;
            if (m.outbound || A.db._options.cache === "disabled" || A.explicit || A.idbtrans.mode !== "readwrite") return p.mutate(w);
            var D = Un["idb://".concat(s, "/").concat(l)];
            return D ? (A = p.mutate(w), w.type !== "add" && w.type !== "put" || !(50 <= w.values.length || Qo(m, w).some(function(B) {
              return B == null;
            })) ? (D.optimisticOps.push(w), w.mutatedParts && yo(w.mutatedParts), A.then(function(B) {
              0 < B.numFailures && (et(D.optimisticOps, w), (B = Va(0, w, B)) && D.optimisticOps.push(B), w.mutatedParts && yo(w.mutatedParts));
            }), A.catch(function() {
              et(D.optimisticOps, w), w.mutatedParts && yo(w.mutatedParts);
            })) : A.then(function(B) {
              var q = Va(0, a(a({}, w), { values: w.values.map(function(Q, k) {
                var te;
                return B.failures[k] || (Q = (te = m.keyPath) !== null && te !== void 0 && te.includes(".") ? Dt(Q) : a({}, Q), ge(Q, m.keyPath, B.results[k])), Q;
              }) }), B);
              D.optimisticOps.push(q), queueMicrotask(function() {
                return w.mutatedParts && yo(w.mutatedParts);
              });
            }), A) : p.mutate(w);
          }, query: function(w) {
            if (!$a(Le, p) || !Gi("query", w)) return p.query(w);
            var A = ((q = Le.trans) === null || q === void 0 ? void 0 : q.db._options.cache) === "immutable", k = Le, D = k.requery, B = k.signal, q = function(G, J, X, ne) {
              var oe = Un["idb://".concat(G, "/").concat(J)];
              if (!oe) return [];
              if (!(J = oe.queries[X])) return [null, !1, oe, null];
              var ae = J[(ne.query ? ne.query.index.name : null) || ""];
              if (!ae) return [null, !1, oe, null];
              switch (X) {
                case "query":
                  var ue = ae.find(function(_e) {
                    return _e.req.limit === ne.limit && _e.req.values === ne.values && Jo(_e.req.query.range, ne.query.range);
                  });
                  return ue ? [ue, !0, oe, ae] : [ae.find(function(_e) {
                    return ("limit" in _e.req ? _e.req.limit : 1 / 0) >= ne.limit && (!ne.values || _e.req.values) && Ls(_e.req.query.range, ne.query.range);
                  }), !1, oe, ae];
                case "count":
                  return ue = ae.find(function(_e) {
                    return Jo(_e.req.query.range, ne.query.range);
                  }), [ue, !!ue, oe, ae];
              }
            }(s, l, "query", w), Q = q[0], k = q[1], te = q[2], V = q[3];
            return Q && k ? Q.obsSet = w.obsSet : (k = p.query(w).then(function(G) {
              var J = G.result;
              if (Q && (Q.res = J), A) {
                for (var X = 0, ne = J.length; X < ne; ++X) Object.freeze(J[X]);
                Object.freeze(J);
              } else G.result = Dt(J);
              return G;
            }).catch(function(G) {
              return V && Q && et(V, Q), Promise.reject(G);
            }), Q = { obsSet: w.obsSet, promise: k, subscribers: /* @__PURE__ */ new Set(), type: "query", req: w, dirty: !1 }, V ? V.push(Q) : (V = [Q], (te = te || (Un["idb://".concat(s, "/").concat(l)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[w.query.index.name || ""] = V)), js(Q, V, D, B), Q.promise.then(function(G) {
              return { result: Hi(G.result, w, te?.optimisticOps, p, Q, A) };
            });
          } });
        } });
      } };
      function yi(n, s) {
        return new Proxy(n, { get: function(l, p, m) {
          return p === "db" ? s : Reflect.get(l, p, m);
        } });
      }
      var ar = (Yt.prototype.version = function(n) {
        if (isNaN(n) || n < 0.1) throw new z.Type("Given version is not a positive number");
        if (n = Math.round(10 * n) / 10, this.idbdb || this._state.isBeingOpened) throw new z.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, n);
        var s = this._versions, l = s.filter(function(p) {
          return p._cfg.version === n;
        })[0];
        return l || (l = new this.Version(n), s.push(l), s.sort(di), l.stores({}), this._state.autoSchema = !1, l);
      }, Yt.prototype._whenReady = function(n) {
        var s = this;
        return this.idbdb && (this._state.openComplete || Le.letThrough || this._vip) ? n() : new Ke(function(l, p) {
          if (s._state.openComplete) return p(new z.DatabaseClosed(s._state.dbOpenError));
          if (!s._state.isBeingOpened) {
            if (!s._state.autoOpen) return void p(new z.DatabaseClosed());
            s.open().catch(ze);
          }
          s._state.dbReadyPromise.then(l, p);
        }).then(n);
      }, Yt.prototype.use = function(n) {
        var s = n.stack, l = n.create, p = n.level, m = n.name;
        return m && this.unuse({ stack: s, name: m }), n = this._middlewares[s] || (this._middlewares[s] = []), n.push({ stack: s, create: l, level: p ?? 10, name: m }), n.sort(function(w, A) {
          return w.level - A.level;
        }), this;
      }, Yt.prototype.unuse = function(n) {
        var s = n.stack, l = n.name, p = n.create;
        return s && this._middlewares[s] && (this._middlewares[s] = this._middlewares[s].filter(function(m) {
          return p ? m.create !== p : !!l && m.name !== l;
        })), this;
      }, Yt.prototype.open = function() {
        var n = this;
        return Rn(yn, function() {
          return Ho(n);
        });
      }, Yt.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var n = this._state, s = Lt.indexOf(this);
        if (0 <= s && Lt.splice(s, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        n.isBeingOpened || (n.dbReadyPromise = new Ke(function(l) {
          n.dbReadyResolve = l;
        }), n.openCanceller = new Ke(function(l, p) {
          n.cancelOpen = p;
        }));
      }, Yt.prototype.close = function(l) {
        var s = (l === void 0 ? { disableAutoOpen: !0 } : l).disableAutoOpen, l = this._state;
        s ? (l.isBeingOpened && l.cancelOpen(new z.DatabaseClosed()), this._close(), l.autoOpen = !1, l.dbOpenError = new z.DatabaseClosed()) : (this._close(), l.autoOpen = this._options.autoOpen || l.isBeingOpened, l.openComplete = !1, l.dbOpenError = null);
      }, Yt.prototype.delete = function(n) {
        var s = this;
        n === void 0 && (n = { disableAutoOpen: !0 });
        var l = 0 < arguments.length && typeof arguments[0] != "object", p = this._state;
        return new Ke(function(m, w) {
          function A() {
            s.close(n);
            var D = s._deps.indexedDB.deleteDatabase(s.name);
            D.onsuccess = Ie(function() {
              var B, q, Q;
              B = s._deps, q = s.name, Q = B.indexedDB, B = B.IDBKeyRange, Xn(Q) || q === so || Vi(Q, B).delete(q).catch(ze), m();
            }), D.onerror = Tn(w), D.onblocked = s._fireOnBlocked;
          }
          if (l) throw new z.InvalidArgument("Invalid closeOptions argument to db.delete()");
          p.isBeingOpened ? p.dbReadyPromise.then(A) : A();
        });
      }, Yt.prototype.backendDB = function() {
        return this.idbdb;
      }, Yt.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Yt.prototype.hasBeenClosed = function() {
        var n = this._state.dbOpenError;
        return n && n.name === "DatabaseClosed";
      }, Yt.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Yt.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Yt.prototype, "tables", { get: function() {
        var n = this;
        return y(this._allTables).map(function(s) {
          return n._allTables[s];
        });
      }, enumerable: !1, configurable: !0 }), Yt.prototype.transaction = function() {
        var n = (function(s, l, p) {
          var m = arguments.length;
          if (m < 2) throw new z.InvalidArgument("Too few arguments");
          for (var w = new Array(m - 1); --m; ) w[m - 1] = arguments[m];
          return p = w.pop(), [s, dt(w), p];
        }).apply(this, arguments);
        return this._transaction.apply(this, n);
      }, Yt.prototype._transaction = function(n, s, l) {
        var p = this, m = Le.trans;
        m && m.db === this && n.indexOf("!") === -1 || (m = null);
        var w, A, D = n.indexOf("?") !== -1;
        n = n.replace("!", "").replace("?", "");
        try {
          if (A = s.map(function(q) {
            if (q = q instanceof p.Table ? q.name : q, typeof q != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return q;
          }), n == "r" || n === ni) w = ni;
          else {
            if (n != "rw" && n != ri) throw new z.InvalidArgument("Invalid transaction mode: " + n);
            w = ri;
          }
          if (m) {
            if (m.mode === ni && w === ri) {
              if (!D) throw new z.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              m = null;
            }
            m && A.forEach(function(q) {
              if (m && m.storeNames.indexOf(q) === -1) {
                if (!D) throw new z.SubTransaction("Table " + q + " not included in parent transaction.");
                m = null;
              }
            }), D && m && !m.active && (m = null);
          }
        } catch (q) {
          return m ? m._promise(null, function(Q, k) {
            k(q);
          }) : Wt(q);
        }
        var B = (function q(Q, k, te, V, G) {
          return Ke.resolve().then(function() {
            var J = Le.transless || Le, X = Q._createTransaction(k, te, Q._dbSchema, V);
            if (X.explicit = !0, J = { trans: X, transless: J }, V) X.idbtrans = V.idbtrans;
            else try {
              X.create(), X.idbtrans._explicit = !0, Q._state.PR1398_maxLoop = 3;
            } catch (ae) {
              return ae.name === E.InvalidState && Q.isOpen() && 0 < --Q._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), Q.close({ disableAutoOpen: !1 }), Q.open().then(function() {
                return q(Q, k, te, null, G);
              })) : Wt(ae);
            }
            var ne, oe = qt(G);
            return oe && vr(), J = Ke.follow(function() {
              var ae;
              (ne = G.call(X, X)) && (oe ? (ae = nr.bind(null, null), ne.then(ae, ae)) : typeof ne.next == "function" && typeof ne.throw == "function" && (ne = Wo(ne)));
            }, J), (ne && typeof ne.then == "function" ? Ke.resolve(ne).then(function(ae) {
              return X.active ? ae : Wt(new z.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : J.then(function() {
              return ne;
            })).then(function(ae) {
              return V && X._resolve(), X._completion.then(function() {
                return ae;
              });
            }).catch(function(ae) {
              return X._reject(ae), Wt(ae);
            });
          });
        }).bind(null, this, w, A, m, l);
        return m ? m._promise(w, B, "lock") : Le.trans ? Rn(Le.transless, function() {
          return p._whenReady(B);
        }) : this._whenReady(B);
      }, Yt.prototype.table = function(n) {
        if (!O(this._allTables, n)) throw new z.InvalidTable("Table ".concat(n, " does not exist"));
        return this._allTables[n];
      }, Yt);
      function Yt(n, s) {
        var l = this;
        this._middlewares = {}, this.verno = 0;
        var p = Yt.dependencies;
        this._options = s = a({ addons: Yt.addons, autoOpen: !0, indexedDB: p.indexedDB, IDBKeyRange: p.IDBKeyRange, cache: "cloned" }, s), this._deps = { indexedDB: s.indexedDB, IDBKeyRange: s.IDBKeyRange }, p = s.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var m, w, A, D, B, q = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: ze, dbReadyPromise: null, cancelOpen: ze, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: s.autoOpen };
        q.dbReadyPromise = new Ke(function(k) {
          q.dbReadyResolve = k;
        }), q.openCanceller = new Ke(function(k, te) {
          q.cancelOpen = te;
        }), this._state = q, this.name = n, this.on = Vn(this, "populate", "blocked", "versionchange", "close", { ready: [H, ze] }), this.once = function(k, te) {
          var V = function() {
            for (var G = [], J = 0; J < arguments.length; J++) G[J] = arguments[J];
            l.on(k).unsubscribe(V), te.apply(l, G);
          };
          return l.on(k, V);
        }, this.on.ready.subscribe = De(this.on.ready.subscribe, function(k) {
          return function(te, V) {
            Yt.vip(function() {
              var G, J = l._state;
              J.openComplete ? (J.dbOpenError || Ke.resolve().then(te), V && k(te)) : J.onReadyBeingFired ? (J.onReadyBeingFired.push(te), V && k(te)) : (k(te), G = l, V || k(function X() {
                G.on.ready.unsubscribe(te), G.on.ready.unsubscribe(X);
              }));
            });
          };
        }), this.Collection = (m = this, ii(co.prototype, function(ne, X) {
          this.db = m;
          var V = Ra, G = null;
          if (X) try {
            V = X();
          } catch (oe) {
            G = oe;
          }
          var J = ne._ctx, X = J.table, ne = X.hook.reading.fire;
          this._ctx = { table: X, index: J.index, isPrimKey: !J.index || X.schema.primKey.keyPath && J.index === X.schema.primKey.name, range: V, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: G, or: J.or, valueMapper: ne !== T ? ne : null };
        })), this.Table = (w = this, ii(rr.prototype, function(k, te, V) {
          this.db = w, this._tx = V, this.name = k, this.schema = te, this.hook = w._allTables[k] ? w._allTables[k].hook : Vn(null, { creating: [P, ze], reading: [F, T], updating: [L, ze], deleting: [R, ze] });
        })), this.Transaction = (A = this, ii(ui.prototype, function(k, te, V, G, J) {
          var X = this;
          k !== "readonly" && te.forEach(function(ne) {
            ne = (ne = V[ne]) === null || ne === void 0 ? void 0 : ne.yProps, ne && (te = te.concat(ne.map(function(oe) {
              return oe.updatesTable;
            })));
          }), this.db = A, this.mode = k, this.storeNames = te, this.schema = V, this.chromeTransactionDurability = G, this.idbtrans = null, this.on = Vn(this, "complete", "error", "abort"), this.parent = J || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Ke(function(ne, oe) {
            X._resolve = ne, X._reject = oe;
          }), this._completion.then(function() {
            X.active = !1, X.on.complete.fire();
          }, function(ne) {
            var oe = X.active;
            return X.active = !1, X.on.error.fire(ne), X.parent ? X.parent._reject(ne) : oe && X.idbtrans && X.idbtrans.abort(), Wt(ne);
          });
        })), this.Version = (D = this, ii($i.prototype, function(k) {
          this.db = D, this._cfg = { version: k, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (B = this, ii(jo.prototype, function(k, te, V) {
          if (this.db = B, this._ctx = { table: k, index: te === ":id" ? null : te, or: V }, this._cmp = this._ascending = lt, this._descending = function(G, J) {
            return lt(J, G);
          }, this._max = function(G, J) {
            return 0 < lt(G, J) ? G : J;
          }, this._min = function(G, J) {
            return lt(G, J) < 0 ? G : J;
          }, this._IDBKeyRange = B._deps.IDBKeyRange, !this._IDBKeyRange) throw new z.MissingAPI();
        })), this.on("versionchange", function(k) {
          0 < k.newVersion ? console.warn("Another connection wants to upgrade database '".concat(l.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(l.name, "'. Closing db now to resume the delete request.")), l.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(k) {
          !k.newVersion || k.newVersion < k.oldVersion ? console.warn("Dexie.delete('".concat(l.name, "') was blocked")) : console.warn("Upgrade '".concat(l.name, "' blocked by other connection holding version ").concat(k.oldVersion / 10));
        }), this._maxKey = li(s.IDBKeyRange), this._createTransaction = function(k, te, V, G) {
          return new l.Transaction(k, te, V, l._options.chromeTransactionDurability, G);
        }, this._fireOnBlocked = function(k) {
          l.on("blocked").fire(k), Lt.filter(function(te) {
            return te.name === l.name && te !== l && !te._state.vcFired;
          }).map(function(te) {
            return te.on("versionchange").fire(k);
          });
        }, this.use(Ba), this.use(Zo), this.use(bo), this.use(Ms), this.use(zo);
        var Q = new Proxy(this, { get: function(k, te, V) {
          if (te === "_vip") return !0;
          if (te === "table") return function(J) {
            return yi(l.table(J), Q);
          };
          var G = Reflect.get(k, te, V);
          return G instanceof rr ? yi(G, Q) : te === "tables" ? G.map(function(J) {
            return yi(J, Q);
          }) : te === "_createTransaction" ? function() {
            return yi(G.apply(this, arguments), Q);
          } : G;
        } });
        this.vip = Q, p.forEach(function(k) {
          return k(l);
        });
      }
      var wo, _n = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Ks = (Wi.prototype.subscribe = function(n, s, l) {
        return this._subscribe(n && typeof n != "function" ? n : { next: n, error: s, complete: l });
      }, Wi.prototype[_n] = function() {
        return this;
      }, Wi);
      function Wi(n) {
        this._subscribe = n;
      }
      try {
        wo = { indexedDB: d.indexedDB || d.mozIndexedDB || d.webkitIndexedDB || d.msIndexedDB, IDBKeyRange: d.IDBKeyRange || d.webkitIDBKeyRange };
      } catch {
        wo = { indexedDB: null, IDBKeyRange: null };
      }
      function _o(n) {
        var s, l = !1, p = new Ks(function(m) {
          var w = qt(n), A, D = !1, B = {}, q = {}, Q = { get closed() {
            return D;
          }, unsubscribe: function() {
            D || (D = !0, A && A.abort(), k && Sr.storagemutated.unsubscribe(V));
          } };
          m.start && m.start(Q);
          var k = !1, te = function() {
            return Lo(G);
          }, V = function(J) {
            qi(B, J), qo(q, B) && te();
          }, G = function() {
            var J, X, ne;
            !D && wo.indexedDB && (B = {}, J = {}, A && A.abort(), A = new AbortController(), ne = function(oe) {
              var ae = On();
              try {
                w && vr();
                var ue = tr(n, oe);
                return ue = w ? ue.finally(nr) : ue;
              } finally {
                ae && er();
              }
            }(X = { subscr: J, signal: A.signal, requery: te, querier: n, trans: null }), Promise.resolve(ne).then(function(oe) {
              l = !0, s = oe, D || X.signal.aborted || (B = {}, function(ae) {
                for (var ue in ae) if (O(ae, ue)) return;
                return 1;
              }(q = J) || k || (Sr(ir, V), k = !0), Lo(function() {
                return !D && m.next && m.next(oe);
              }));
            }, function(oe) {
              l = !1, ["DatabaseClosedError", "AbortError"].includes(oe?.name) || D || Lo(function() {
                D || m.error && m.error(oe);
              });
            }));
          };
          return setTimeout(te, 0), Q;
        });
        return p.hasValue = function() {
          return l;
        }, p.getValue = function() {
          return s;
        }, p;
      }
      var Gt = ar;
      function Gr(n) {
        var s = ur;
        try {
          ur = !0, Sr.storagemutated.fire(n), mi(n, !0);
        } finally {
          ur = s;
        }
      }
      ee(Gt, a(a({}, ot), { delete: function(n) {
        return new Gt(n, { addons: [] }).delete();
      }, exists: function(n) {
        return new Gt(n, { addons: [] }).open().then(function(s) {
          return s.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(n) {
        try {
          return s = Gt.dependencies, l = s.indexedDB, s = s.IDBKeyRange, (Xn(l) ? Promise.resolve(l.databases()).then(function(p) {
            return p.map(function(m) {
              return m.name;
            }).filter(function(m) {
              return m !== so;
            });
          }) : Vi(l, s).toCollection().primaryKeys()).then(n);
        } catch {
          return Wt(new z.MissingAPI());
        }
        var s, l;
      }, defineClass: function() {
        return function(n) {
          x(this, n);
        };
      }, ignoreTransaction: function(n) {
        return Le.trans ? Rn(Le.transless, n) : n();
      }, vip: $o, async: function(n) {
        return function() {
          try {
            var s = Wo(n.apply(this, arguments));
            return s && typeof s.then == "function" ? s : Ke.resolve(s);
          } catch (l) {
            return Wt(l);
          }
        };
      }, spawn: function(n, s, l) {
        try {
          var p = Wo(n.apply(l, s || []));
          return p && typeof p.then == "function" ? p : Ke.resolve(p);
        } catch (m) {
          return Wt(m);
        }
      }, currentTransaction: { get: function() {
        return Le.trans || null;
      } }, waitFor: function(n, s) {
        return s = Ke.resolve(typeof n == "function" ? Gt.ignoreTransaction(n) : n).timeout(s || 6e4), Le.trans ? Le.trans.waitFor(s) : s;
      }, Promise: Ke, debug: { get: function() {
        return ie;
      }, set: function(n) {
        pe(n);
      } }, derive: Ee, extend: x, props: ee, override: De, Events: Vn, on: Sr, liveQuery: _o, extendObservabilitySet: qi, getByKeyPath: fe, setByKeyPath: ge, delByKeyPath: function(n, s) {
        typeof s == "string" ? ge(n, s, void 0) : "length" in s && [].map.call(s, function(l) {
          ge(n, l, void 0);
        });
      }, shallowClone: qe, deepClone: Dt, getObjectDiff: Yo, cmp: lt, asap: Fe, minKey: -1 / 0, addons: [], connections: Lt, errnames: E, dependencies: wo, cache: Un, semVer: "4.2.0", version: "4.2.0".split(".").map(function(n) {
        return parseInt(n);
      }).reduce(function(n, s, l) {
        return n + s / Math.pow(10, 2 * l);
      }) })), Gt.maxKey = li(Gt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Sr(ir, function(n) {
        ur || (n = new CustomEvent(qr, { detail: n }), ur = !0, dispatchEvent(n), ur = !1);
      }), addEventListener(qr, function(n) {
        n = n.detail, ur || Gr(n);
      }));
      var sr, ur = !1, Yi = function() {
      };
      return typeof BroadcastChannel < "u" && ((Yi = function() {
        (sr = new BroadcastChannel(qr)).onmessage = function(n) {
          return n.data && Gr(n.data);
        };
      })(), typeof sr.unref == "function" && sr.unref(), Sr(ir, function(n) {
        ur || sr.postMessage(n);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(n) {
        if (!ar.disableBfCache && n.persisted) {
          ie && console.debug("Dexie: handling persisted pagehide"), sr?.close();
          for (var s = 0, l = Lt; s < l.length; s++) l[s].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(n) {
        !ar.disableBfCache && n.persisted && (ie && console.debug("Dexie: handling persisted pageshow"), Yi(), Gr({ all: new on(-1 / 0, [[]]) }));
      })), Ke.rejectionMapper = function(n, s) {
        return !n || n instanceof Ft || n instanceof TypeError || n instanceof SyntaxError || !n.name || !W[n.name] ? n : (s = new W[n.name](s || n.message, n), "stack" in n && we(s, "stack", { get: function() {
          return this.inner.stack;
        } }), s);
      }, pe(ie), a(ar, Object.freeze({ __proto__: null, Dexie: ar, liveQuery: _o, Entity: Kr, cmp: lt, PropModification: ai, replacePrefix: function(n, s) {
        return new ai({ replacePrefix: [n, s] });
      }, add: function(n) {
        return new ai({ add: n });
      }, remove: function(n) {
        return new ai({ remove: n });
      }, default: ar, RangeSet: on, mergeRanges: Ur, rangesOverlap: ja }), { default: ar }), ar;
    });
  }(mu)), mu.exports;
}
var vm = ym();
const yu = /* @__PURE__ */ cm(vm), jc = Symbol.for("Dexie"), bs = globalThis[jc] || (globalThis[jc] = yu);
if (yu.semVer !== bs.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${yu.semVer} and ${bs.semVer}`);
const {
  liveQuery: Pv,
  mergeRanges: Dv,
  rangesOverlap: Ov,
  RangeSet: Rv,
  cmp: Nv,
  Entity: kv,
  PropModification: Fv,
  replacePrefix: Mv,
  add: Lv,
  remove: jv,
  DexieYProvider: Kv
} = bs, ko = "_temp-idb-id", gm = {
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
async function bm(e) {
  return wm({
    databaseName: e.databaseName,
    withDatabaseIds: !0
  });
}
async function wm(e) {
  const { databaseName: t, withDatabaseIds: o } = e, a = new bs(t);
  await a.open();
  const c = await _m({
    databaseInstance: a,
    withDatabaseIds: o
  });
  if (!c)
    throw new Error("Failed to rebuild XML document from IndexedDB.");
  return {
    xmlDocument: c,
    filename: a.name + ".scd"
  };
}
async function _m(e) {
  const { databaseInstance: t, withDatabaseIds: o } = e;
  {
    const a = document.implementation.createDocument(
      "http://www.iec.ch/61850/2003/SCL",
      null,
      null
    ), c = await t.table(An).where({ tagName: "SCL" }).first();
    if (!c) throw new Error("No SCL root element found in DB");
    const d = a.createElementNS(
      c.namespace.uri,
      c.tagName
    );
    return d.setAttribute("xmlns", c.namespace.uri), c.attributes && hf({
      document: a,
      element: d,
      attributes: c.attributes,
      isRoot: !0
    }), c.value && (d.textContent = c.value.trim()), d.setAttribute(ko, c.id), a.appendChild(d), await pf({
      databaseInstance: t,
      withDatabaseIds: o,
      xmlDocument: a,
      databaseRecord: c,
      parentDomElement: d
    });
  }
}
async function pf(e) {
  const { databaseInstance: t, withDatabaseIds: o, xmlDocument: a, databaseRecord: c, parentDomElement: d } = e;
  if (!c.children) return;
  const y = c.children.map(($) => $.id), g = await t.table(An).bulkGet(y);
  Em({
    childrenRecords: g,
    parentRecord: c
  });
  const x = xm({
    parentTagName: c.tagName,
    childrenRecords: g
  });
  for (const $ of x) {
    const N = Sm({
      document: a,
      record: $,
      withDatabaseIds: o
    });
    d.appendChild(N), await pf({
      databaseInstance: t,
      withDatabaseIds: o,
      xmlDocument: a,
      databaseRecord: $,
      parentDomElement: N
    });
  }
  return e.xmlDocument;
}
function Sm(e) {
  const { document: t, record: o, withDatabaseIds: a } = e;
  let c;
  return o.namespace.uri === Yu.default.uri ? c = t.createElementNS(o.namespace.uri, o.tagName) : (mf({
    document: t,
    namespace: o.namespace
  }), c = t.createElementNS(
    o.namespace.uri,
    `${o.namespace.prefix}:${o.tagName}`
  )), o.attributes && hf({ document: t, element: c, attributes: o.attributes, isRoot: !1 }), o.value && (c.textContent = o.value.trim()), a && c.setAttribute(ko, o.id), c;
}
function hf(e) {
  const { document: t, element: o, attributes: a, isRoot: c } = e;
  for (const d of a)
    if (!(d.name === "xmlns" || d.name.startsWith("xmlns:")))
      if (hm(d)) {
        const y = d.namespace?.prefix || "";
        if (y === "xmlns") continue;
        !c && y && mf({
          document: t,
          namespace: d.namespace
        });
        const g = d.name.includes(":") && d.name.split(":").pop() || d.name, x = y ? `${y}:${g}` : g;
        o.setAttributeNS(d.namespace.uri, x, String(d.value));
      } else o.setAttribute(d.name, String(d.value));
}
function mf(e) {
  const { document: t, namespace: o } = e, a = t.documentElement;
  if (!a) return;
  const c = "http://www.w3.org/2000/xmlns/";
  a.getAttributeNS(c, o.prefix) === null && a.setAttributeNS(c, `xmlns:${o.prefix}`, o.uri);
}
function xm(e) {
  const { parentTagName: t, childrenRecords: o } = e, a = [], c = new Set(gm[t]);
  if (!c.size) return o;
  const d = /* @__PURE__ */ new Map(), y = [];
  for (const g of c)
    d.set(g, []);
  for (const g of o)
    c.has(g.tagName) ? d.get(g.tagName)?.push(g) : y.push(g);
  for (const g of c) {
    const x = d.get(g);
    x && x.length && a.push(...x);
  }
  return a.push(...y), a;
}
function Em(e) {
  const { childrenRecords: t, parentRecord: o } = e, a = t.map((c, d) => c === void 0 ? d : -1).filter((c) => c !== -1);
  if (a.length > 0) {
    const c = a.map((d) => {
      const y = o.children[d];
      return `'${y.tagName}' (id: ${y.id})`;
    });
    throw new Error(
      `Database corruption detected: Parent element '${o.tagName}' (id: ${o.id}) references ${a.length} non-existent child record(s): ${c.join(", ")}`
    );
  }
}
function yf(e) {
  return typeof e != "object" || e === null ? !1 : Object.entries(e).every(([t, o]) => typeof t == "string" && (o === null || typeof o == "string"));
}
function Tm(e) {
  return typeof e != "object" || e === null ? !1 : Object.entries(e).every(([t, o]) => typeof t == "string" && yf(o));
}
function Qu(e) {
  return e instanceof Array && e.every((t) => Cm(t));
}
function zu(e) {
  return e.element instanceof Element && typeof e.textContent == "string";
}
function Ia(e) {
  return e.parent === void 0 && e.node instanceof Node;
}
function Xu(e) {
  const t = e;
  return t.element instanceof Element && (yf(t.attributes) || Tm(t.attributesNS));
}
function Pa(e) {
  return (e.parent instanceof Element || e.parent instanceof Document || e.parent instanceof DocumentFragment) && e.node instanceof Node && (e.reference instanceof Node || e.reference === null);
}
function Cm(e) {
  return Qu(e) ? !0 : Xu(e) || zu(e) || Pa(e) || Ia(e);
}
function vf(e) {
  return e !== null && typeof e == "object" && "namespaceURI" in e && typeof e.namespaceURI == "string" && "value" in e && typeof e.value == "string";
}
function Am(e) {
  return e === null || typeof e != "object" ? !1 : Object.entries(e).every(([t, o]) => typeof t == "string" && (o === null || typeof o == "string" || vf(o)));
}
function gf(e) {
  return e instanceof Array && e.every(Im);
}
function bf(e) {
  return e.element instanceof Element && Am(e.attributes);
}
function Im(e) {
  return gf(e) ? !0 : bf(e) || Pa(e) || Ia(e);
}
function Pm(e) {
  let t = {};
  const o = {};
  return Object.entries(e.attributes).forEach(([a, c]) => {
    if (vf(c)) {
      const d = c.namespaceURI;
      if (!d)
        return;
      o[d] || (o[d] = {}), o[d] = { ...o[d], [a]: c.value };
    } else
      t = { ...t, [a]: c };
  }), { element: e.element, attributes: t, attributesNS: o };
}
function wf(e) {
  return Ia(e) || Pa(e) ? e : bf(e) ? Pm(e) : gf(e) ? e.map(wf) : [];
}
var vu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var as = { exports: {} }, Om = as.exports, Kc;
function Rm() {
  return Kc || (Kc = 1, function(e, t) {
    (function(o, a) {
      e.exports = a();
    })(Om, function() {
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
      var o = function(r, i) {
        return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, f) {
          u.__proto__ = f;
        } || function(u, f) {
          for (var h in f) Object.prototype.hasOwnProperty.call(f, h) && (u[h] = f[h]);
        }, o(r, i);
      };
      function a(r, i) {
        if (typeof i != "function" && i !== null)
          throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
        o(r, i);
        function u() {
          this.constructor = r;
        }
        r.prototype = i === null ? Object.create(i) : (u.prototype = i.prototype, new u());
      }
      var c = function() {
        return c = Object.assign || function(i) {
          for (var u, f = 1, h = arguments.length; f < h; f++) {
            u = arguments[f];
            for (var v in u) Object.prototype.hasOwnProperty.call(u, v) && (i[v] = u[v]);
          }
          return i;
        }, c.apply(this, arguments);
      };
      function d(r, i, u) {
        for (var f = 0, h = i.length, v; f < h; f++)
          (v || !(f in i)) && (v || (v = Array.prototype.slice.call(i, 0, f)), v[f] = i[f]);
        return r.concat(v || Array.prototype.slice.call(i));
      }
      var y = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : vu, g = Object.keys, x = Array.isArray;
      typeof Promise < "u" && !y.Promise && (y.Promise = Promise);
      function $(r, i) {
        return typeof i != "object" || g(i).forEach(function(u) {
          r[u] = i[u];
        }), r;
      }
      var N = Object.getPrototypeOf, O = {}.hasOwnProperty;
      function ee(r, i) {
        return O.call(r, i);
      }
      function le(r, i) {
        typeof i == "function" && (i = i(N(r))), (typeof Reflect > "u" ? g : Reflect.ownKeys)(i).forEach(function(u) {
          Ee(r, u, i[u]);
        });
      }
      var we = Object.defineProperty;
      function Ee(r, i, u, f) {
        we(r, i, $(u && ee(u, "get") && typeof u.get == "function" ? { get: u.get, set: u.set, configurable: !0 } : { value: u, configurable: !0, writable: !0 }, f));
      }
      function He(r) {
        return {
          from: function(i) {
            return r.prototype = Object.create(i.prototype), Ee(r.prototype, "constructor", r), {
              extend: le.bind(null, r.prototype)
            };
          }
        };
      }
      var Qe = Object.getOwnPropertyDescriptor;
      function Je(r, i) {
        var u = Qe(r, i), f;
        return u || (f = N(r)) && Je(f, i);
      }
      var De = [].slice;
      function $e(r, i, u) {
        return De.call(r, i, u);
      }
      function Fe(r, i) {
        return i(r);
      }
      function fe(r) {
        if (!r)
          throw new Error("Assertion Failed");
      }
      function ge(r) {
        y.setImmediate ? setImmediate(r) : setTimeout(r, 0);
      }
      function qe(r, i) {
        return r.reduce(function(u, f, h) {
          var v = i(f, h);
          return v && (u[v[0]] = v[1]), u;
        }, {});
      }
      function K(r, i) {
        if (typeof i == "string" && ee(r, i))
          return r[i];
        if (!i)
          return r;
        if (typeof i != "string") {
          for (var u = [], f = 0, h = i.length; f < h; ++f) {
            var v = K(r, i[f]);
            u.push(v);
          }
          return u;
        }
        var _ = i.indexOf(".");
        if (_ !== -1) {
          var C = r[i.substr(0, _)];
          return C == null ? void 0 : K(C, i.substr(_ + 1));
        }
      }
      function dt(r, i, u) {
        if (!(!r || i === void 0) && !("isFrozen" in Object && Object.isFrozen(r)))
          if (typeof i != "string" && "length" in i) {
            fe(typeof u != "string" && "length" in u);
            for (var f = 0, h = i.length; f < h; ++f)
              dt(r, i[f], u[f]);
          } else {
            var v = i.indexOf(".");
            if (v !== -1) {
              var _ = i.substr(0, v), C = i.substr(v + 1);
              if (C === "")
                u === void 0 ? x(r) && !isNaN(parseInt(_)) ? r.splice(_, 1) : delete r[_] : r[_] = u;
              else {
                var I = r[_];
                (!I || !ee(r, _)) && (I = r[_] = {}), dt(I, C, u);
              }
            } else
              u === void 0 ? x(r) && !isNaN(parseInt(i)) ? r.splice(i, 1) : delete r[i] : r[i] = u;
          }
      }
      function At(r, i) {
        typeof i == "string" ? dt(r, i, void 0) : "length" in i && [].map.call(i, function(u) {
          dt(r, u, void 0);
        });
      }
      function it(r) {
        var i = {};
        for (var u in r)
          ee(r, u) && (i[u] = r[u]);
        return i;
      }
      var Dt = [].concat;
      function ln(r) {
        return Dt.apply([], r);
      }
      var Vt = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ln([8, 16, 32, 64].map(function(r) {
        return ["Int", "Uint", "Float"].map(function(i) {
          return i + r + "Array";
        });
      }))).filter(function(r) {
        return y[r];
      }), St = new Set(Vt.map(function(r) {
        return y[r];
      }));
      function Me(r) {
        var i = {};
        for (var u in r)
          if (ee(r, u)) {
            var f = r[u];
            i[u] = !f || typeof f != "object" || St.has(f.constructor) ? f : Me(f);
          }
        return i;
      }
      function et(r) {
        for (var i in r)
          if (ee(r, i))
            return !1;
        return !0;
      }
      var Tt = null;
      function Ot(r) {
        Tt = /* @__PURE__ */ new WeakMap();
        var i = qt(r);
        return Tt = null, i;
      }
      function qt(r) {
        if (!r || typeof r != "object")
          return r;
        var i = Tt.get(r);
        if (i)
          return i;
        if (x(r)) {
          i = [], Tt.set(r, i);
          for (var u = 0, f = r.length; u < f; ++u)
            i.push(qt(r[u]));
        } else if (St.has(r.constructor))
          i = r;
        else {
          var h = N(r);
          i = h === Object.prototype ? {} : Object.create(h), Tt.set(r, i);
          for (var v in r)
            ee(r, v) && (i[v] = qt(r[v]));
        }
        return i;
      }
      var Ht = {}.toString;
      function Ft(r) {
        return Ht.call(r).slice(8, -1);
      }
      var wn = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Dn = typeof wn == "symbol" ? function(r) {
        var i;
        return r != null && (i = r[wn]) && i.apply(r);
      } : function() {
        return null;
      };
      function zt(r, i) {
        var u = r.indexOf(i);
        return u >= 0 && r.splice(u, 1), u >= 0;
      }
      var E = {};
      function b(r) {
        var i, u, f, h;
        if (arguments.length === 1) {
          if (x(r))
            return r.slice();
          if (this === E && typeof r == "string")
            return [r];
          if (h = Dn(r)) {
            for (u = []; f = h.next(), !f.done; )
              u.push(f.value);
            return u;
          }
          if (r == null)
            return [r];
          if (i = r.length, typeof i == "number") {
            for (u = new Array(i); i--; )
              u[i] = r[i];
            return u;
          }
          return [r];
        }
        for (i = arguments.length, u = new Array(i); i--; )
          u[i] = arguments[i];
        return u;
      }
      var z = typeof Symbol < "u" ? function(r) {
        return r[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, W = [
        "Modify",
        "Bulk",
        "OpenFailed",
        "VersionChange",
        "Schema",
        "Upgrade",
        "InvalidTable",
        "MissingAPI",
        "NoSuchDatabase",
        "InvalidArgument",
        "SubTransaction",
        "Unsupported",
        "Internal",
        "DatabaseClosed",
        "PrematureCommit",
        "ForeignAwait"
      ], ot = [
        "Unknown",
        "Constraint",
        "Data",
        "TransactionInactive",
        "ReadOnly",
        "Version",
        "NotFound",
        "InvalidState",
        "InvalidAccess",
        "Abort",
        "Timeout",
        "QuotaExceeded",
        "Syntax",
        "DataClone"
      ], ze = W.concat(ot), T = {
        VersionChanged: "Database version changed by other database connection",
        DatabaseClosed: "Database has been closed",
        Abort: "Transaction aborted",
        TransactionInactive: "Transaction has already completed or failed",
        MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
      };
      function F(r, i) {
        this.name = r, this.message = i;
      }
      He(F).from(Error).extend({
        toString: function() {
          return this.name + ": " + this.message;
        }
      });
      function S(r, i) {
        return r + ". Errors: " + Object.keys(i).map(function(u) {
          return i[u].toString();
        }).filter(function(u, f, h) {
          return h.indexOf(u) === f;
        }).join(`
`);
      }
      function P(r, i, u, f) {
        this.failures = i, this.failedKeys = f, this.successCount = u, this.message = S(r, i);
      }
      He(P).from(F);
      function R(r, i) {
        this.name = "BulkError", this.failures = Object.keys(i).map(function(u) {
          return i[u];
        }), this.failuresByPos = i, this.message = S(r, this.failures);
      }
      He(R).from(F);
      var L = ze.reduce(function(r, i) {
        return r[i] = i + "Error", r;
      }, {}), j = F, H = ze.reduce(function(r, i) {
        var u = i + "Error";
        function f(h, v) {
          this.name = u, h ? typeof h == "string" ? (this.message = "".concat(h).concat(v ? `
 ` + v : ""), this.inner = v || null) : typeof h == "object" && (this.message = "".concat(h.name, " ").concat(h.message), this.inner = h) : (this.message = T[i] || u, this.inner = null);
        }
        return He(f).from(j), r[i] = f, r;
      }, {});
      H.Syntax = SyntaxError, H.Type = TypeError, H.Range = RangeError;
      var ie = ot.reduce(function(r, i) {
        return r[i + "Error"] = H[i], r;
      }, {});
      function pe(r, i) {
        if (!r || r instanceof F || r instanceof TypeError || r instanceof SyntaxError || !r.name || !ie[r.name])
          return r;
        var u = new ie[r.name](i || r.message, r);
        return "stack" in r && Ee(u, "stack", { get: function() {
          return this.inner.stack;
        } }), u;
      }
      var Ve = ze.reduce(function(r, i) {
        return ["Syntax", "Type", "Range"].indexOf(i) === -1 && (r[i + "Error"] = H[i]), r;
      }, {});
      Ve.ModifyError = P, Ve.DexieError = F, Ve.BulkError = R;
      function ve() {
      }
      function Ue(r) {
        return r;
      }
      function Ze(r, i) {
        return r == null || r === Ue ? i : function(u) {
          return i(r(u));
        };
      }
      function nt(r, i) {
        return function() {
          r.apply(this, arguments), i.apply(this, arguments);
        };
      }
      function xt(r, i) {
        return r === ve ? i : function() {
          var u = r.apply(this, arguments);
          u !== void 0 && (arguments[0] = u);
          var f = this.onsuccess, h = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var v = i.apply(this, arguments);
          return f && (this.onsuccess = this.onsuccess ? nt(f, this.onsuccess) : f), h && (this.onerror = this.onerror ? nt(h, this.onerror) : h), v !== void 0 ? v : u;
        };
      }
      function yt(r, i) {
        return r === ve ? i : function() {
          r.apply(this, arguments);
          var u = this.onsuccess, f = this.onerror;
          this.onsuccess = this.onerror = null, i.apply(this, arguments), u && (this.onsuccess = this.onsuccess ? nt(u, this.onsuccess) : u), f && (this.onerror = this.onerror ? nt(f, this.onerror) : f);
        };
      }
      function nn(r, i) {
        return r === ve ? i : function(u) {
          var f = r.apply(this, arguments);
          $(u, f);
          var h = this.onsuccess, v = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var _ = i.apply(this, arguments);
          return h && (this.onsuccess = this.onsuccess ? nt(h, this.onsuccess) : h), v && (this.onerror = this.onerror ? nt(v, this.onerror) : v), f === void 0 ? _ === void 0 ? void 0 : _ : $(f, _);
        };
      }
      function Xt(r, i) {
        return r === ve ? i : function() {
          return i.apply(this, arguments) === !1 ? !1 : r.apply(this, arguments);
        };
      }
      function Qt(r, i) {
        return r === ve ? i : function() {
          var u = r.apply(this, arguments);
          if (u && typeof u.then == "function") {
            for (var f = this, h = arguments.length, v = new Array(h); h--; )
              v[h] = arguments[h];
            return u.then(function() {
              return i.apply(f, v);
            });
          }
          return i.apply(this, arguments);
        };
      }
      var Mt = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Wn(r, i) {
        Mt = r;
      }
      var yn = {}, Le = 100, rn = typeof Promise > "u" ? [] : function() {
        var r = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle)
          return [r, N(r), r];
        var i = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [
          i,
          N(i),
          r
        ];
      }(), Kn = rn[0], Di = rn[1], Ke = rn[2], Fo = Di && Di.then, yr = Kn && Kn.constructor, Oi = !!Ke;
      function Da() {
        queueMicrotask(gr);
      }
      var kr = function(r, i) {
        Ut.push([r, i]), oo && (Da(), oo = !1);
      }, Mo = !0, oo = !0, On = [], er = [], Ri = Ue, Bn = {
        id: "global",
        global: !0,
        ref: 0,
        unhandleds: [],
        onunhandled: ve,
        pgp: !1,
        env: {},
        finalize: ve
      }, Ie = Bn, Ut = [], Fr = 0, Mr = [];
      function Ne(r) {
        if (typeof this != "object")
          throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var i = this._PSD = Ie;
        if (typeof r != "function") {
          if (r !== yn)
            throw new TypeError("Not a function");
          this._state = arguments[1], this._value = arguments[2], this._state === !1 && vr(this, this._value);
          return;
        }
        this._state = null, this._value = null, ++i.ref, tr(this, r);
      }
      var ei = {
        get: function() {
          var r = Ie, i = Yn;
          function u(f, h) {
            var v = this, _ = !r.global && (r !== Ie || i !== Yn), C = _ && !lt(), I = new Ne(function(M, Z) {
              ti(v, new Oa(ii(f, r, _, C), ii(h, r, _, C), M, Z, r));
            });
            return this._consoleTask && (I._consoleTask = this._consoleTask), I;
          }
          return u.prototype = yn, u;
        },
        set: function(r) {
          Ee(this, "then", r && r.prototype === yn ? ei : {
            get: function() {
              return r;
            },
            set: ei.set
          });
        }
      };
      le(Ne.prototype, {
        then: ei,
        _then: function(r, i) {
          ti(this, new Oa(null, null, r, i, Ie));
        },
        catch: function(r) {
          if (arguments.length === 1)
            return this.then(null, r);
          var i = arguments[0], u = arguments[1];
          return typeof i == "function" ? this.then(null, function(f) {
            return f instanceof i ? u(f) : Nn(f);
          }) : this.then(null, function(f) {
            return f && f.name === i ? u(f) : Nn(f);
          });
        },
        finally: function(r) {
          return this.then(function(i) {
            return Ne.resolve(r()).then(function() {
              return i;
            });
          }, function(i) {
            return Ne.resolve(r()).then(function() {
              return Nn(i);
            });
          });
        },
        timeout: function(r, i) {
          var u = this;
          return r < 1 / 0 ? new Ne(function(f, h) {
            var v = setTimeout(function() {
              return h(new H.Timeout(i));
            }, r);
            u.then(f, h).finally(clearTimeout.bind(null, v));
          }) : this;
        }
      }), typeof Symbol < "u" && Symbol.toStringTag && Ee(Ne.prototype, Symbol.toStringTag, "Dexie.Promise"), Bn.env = Rt();
      function Oa(r, i, u, f, h) {
        this.onFulfilled = typeof r == "function" ? r : null, this.onRejected = typeof i == "function" ? i : null, this.resolve = u, this.reject = f, this.psd = h;
      }
      le(Ne, {
        all: function() {
          var r = b.apply(null, arguments).map(Ni);
          return new Ne(function(i, u) {
            r.length === 0 && i([]);
            var f = r.length;
            r.forEach(function(h, v) {
              return Ne.resolve(h).then(function(_) {
                r[v] = _, --f || i(r);
              }, u);
            });
          });
        },
        resolve: function(r) {
          if (r instanceof Ne)
            return r;
          if (r && typeof r.then == "function")
            return new Ne(function(u, f) {
              r.then(u, f);
            });
          var i = new Ne(yn, !0, r);
          return i;
        },
        reject: Nn,
        race: function() {
          var r = b.apply(null, arguments).map(Ni);
          return new Ne(function(i, u) {
            r.map(function(f) {
              return Ne.resolve(f).then(i, u);
            });
          });
        },
        PSD: {
          get: function() {
            return Ie;
          },
          set: function(r) {
            return Ie = r;
          }
        },
        totalEchoes: { get: function() {
          return Yn;
        } },
        newPSD: $n,
        usePSD: Vn,
        scheduler: {
          get: function() {
            return kr;
          },
          set: function(r) {
            kr = r;
          }
        },
        rejectionMapper: {
          get: function() {
            return Ri;
          },
          set: function(r) {
            Ri = r;
          }
        },
        follow: function(r, i) {
          return new Ne(function(u, f) {
            return $n(function(h, v) {
              var _ = Ie;
              _.unhandleds = [], _.onunhandled = v, _.finalize = nt(function() {
                var C = this;
                Lo(function() {
                  C.unhandleds.length === 0 ? h() : v(C.unhandleds[0]);
                });
              }, _.finalize), r();
            }, i, u, f);
          });
        }
      }), yr && (yr.allSettled && Ee(Ne, "allSettled", function() {
        var r = b.apply(null, arguments).map(Ni);
        return new Ne(function(i) {
          r.length === 0 && i([]);
          var u = r.length, f = new Array(u);
          r.forEach(function(h, v) {
            return Ne.resolve(h).then(function(_) {
              return f[v] = { status: "fulfilled", value: _ };
            }, function(_) {
              return f[v] = { status: "rejected", reason: _ };
            }).then(function() {
              return --u || i(f);
            });
          });
        });
      }), yr.any && typeof AggregateError < "u" && Ee(Ne, "any", function() {
        var r = b.apply(null, arguments).map(Ni);
        return new Ne(function(i, u) {
          r.length === 0 && u(new AggregateError([]));
          var f = r.length, h = new Array(f);
          r.forEach(function(v, _) {
            return Ne.resolve(v).then(function(C) {
              return i(C);
            }, function(C) {
              h[_] = C, --f || u(new AggregateError(h));
            });
          });
        });
      }), yr.withResolvers && (Ne.withResolvers = yr.withResolvers));
      function tr(r, i) {
        try {
          i(function(u) {
            if (r._state === null) {
              if (u === r)
                throw new TypeError("A promise cannot be resolved with itself.");
              var f = r._lib && Lr();
              u && typeof u.then == "function" ? tr(r, function(h, v) {
                u instanceof Ne ? u._then(h, v) : u.then(h, v);
              }) : (r._state = !0, r._value = u, nr(r)), f && Rn();
            }
          }, vr.bind(null, r));
        } catch (u) {
          vr(r, u);
        }
      }
      function vr(r, i) {
        if (er.push(i), r._state === null) {
          var u = r._lib && Lr();
          i = Ri(i), r._state = !1, r._value = i, Wt(r), nr(r), u && Rn();
        }
      }
      function nr(r) {
        var i = r._listeners;
        r._listeners = [];
        for (var u = 0, f = i.length; u < f; ++u)
          ti(r, i[u]);
        var h = r._PSD;
        --h.ref || h.finalize(), Fr === 0 && (++Fr, kr(function() {
          --Fr === 0 && ao();
        }, []));
      }
      function ti(r, i) {
        if (r._state === null) {
          r._listeners.push(i);
          return;
        }
        var u = r._state ? i.onFulfilled : i.onRejected;
        if (u === null)
          return (r._state ? i.resolve : i.reject)(r._value);
        ++i.psd.ref, ++Fr, kr(Rs, [u, r, i]);
      }
      function Rs(r, i, u) {
        try {
          var f, h = i._value;
          !i._state && er.length && (er = []), f = Mt && i._consoleTask ? i._consoleTask.run(function() {
            return r(h);
          }) : r(h), !i._state && er.indexOf(h) === -1 && jr(i), u.resolve(f);
        } catch (v) {
          u.reject(v);
        } finally {
          --Fr === 0 && ao(), --u.psd.ref || u.psd.finalize();
        }
      }
      function gr() {
        Vn(Bn, function() {
          Lr() && Rn();
        });
      }
      function Lr() {
        var r = Mo;
        return Mo = !1, oo = !1, r;
      }
      function Rn() {
        var r, i, u;
        do
          for (; Ut.length > 0; )
            for (r = Ut, Ut = [], u = r.length, i = 0; i < u; ++i) {
              var f = r[i];
              f[0].apply(null, f[1]);
            }
        while (Ut.length > 0);
        Mo = !0, oo = !0;
      }
      function ao() {
        var r = On;
        On = [], r.forEach(function(f) {
          f._PSD.onunhandled.call(null, f._value, f);
        });
        for (var i = Mr.slice(0), u = i.length; u; )
          i[--u]();
      }
      function Lo(r) {
        function i() {
          r(), Mr.splice(Mr.indexOf(i), 1);
        }
        Mr.push(i), ++Fr, kr(function() {
          --Fr === 0 && ao();
        }, []);
      }
      function Wt(r) {
        On.some(function(i) {
          return i._value === r._value;
        }) || On.push(r);
      }
      function jr(r) {
        for (var i = On.length; i; )
          if (On[--i]._value === r._value) {
            On.splice(i, 1);
            return;
          }
      }
      function Nn(r) {
        return new Ne(yn, !1, r);
      }
      function kt(r, i) {
        var u = Ie;
        return function() {
          var f = Lr(), h = Ie;
          try {
            return rr(u, !0), r.apply(this, arguments);
          } catch (v) {
            i && i(v);
          } finally {
            rr(h, !1), f && Rn();
          }
        };
      }
      var Lt = { awaits: 0, echoes: 0, id: 0 }, so = 0, ni = [], ri = 0, Yn = 0, Ra = 0;
      function $n(r, i, u, f) {
        var h = Ie, v = Object.create(h);
        v.parent = h, v.ref = 0, v.global = !1, v.id = ++Ra, Bn.env, v.env = Oi ? {
          Promise: Ne,
          PromiseProp: { value: Ne, configurable: !0, writable: !0 },
          all: Ne.all,
          race: Ne.race,
          allSettled: Ne.allSettled,
          any: Ne.any,
          resolve: Ne.resolve,
          reject: Ne.reject
        } : {}, i && $(v, i), ++h.ref, v.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        };
        var _ = Vn(v, r, u, f);
        return v.ref === 0 && v.finalize(), _;
      }
      function Kr() {
        return Lt.id || (Lt.id = ++so), ++Lt.awaits, Lt.echoes += Le, Lt.id;
      }
      function lt() {
        return Lt.awaits ? (--Lt.awaits === 0 && (Lt.id = 0), Lt.echoes = Lt.awaits * Le, !0) : !1;
      }
      ("" + Fo).indexOf("[native code]") === -1 && (Kr = lt = ve);
      function Ni(r) {
        return Lt.echoes && r && r.constructor === yr ? (Kr(), r.then(function(i) {
          return lt(), i;
        }, function(i) {
          return lt(), jt(i);
        })) : r;
      }
      function Na(r) {
        ++Yn, (!Lt.echoes || --Lt.echoes === 0) && (Lt.echoes = Lt.awaits = Lt.id = 0), ni.push(Ie), rr(r, !0);
      }
      function uo() {
        var r = ni[ni.length - 1];
        ni.pop(), rr(r, !1);
      }
      function rr(r, i) {
        var u = Ie;
        if ((i ? Lt.echoes && (!ri++ || r !== Ie) : ri && (!--ri || r !== Ie)) && queueMicrotask(i ? Na.bind(null, r) : uo), r !== Ie && (Ie = r, u === Bn && (Bn.env = Rt()), Oi)) {
          var f = Bn.env.Promise, h = r.env;
          (u.global || r.global) && (Object.defineProperty(y, "Promise", h.PromiseProp), f.all = h.all, f.race = h.race, f.resolve = h.resolve, f.reject = h.reject, h.allSettled && (f.allSettled = h.allSettled), h.any && (f.any = h.any));
        }
      }
      function Rt() {
        var r = y.Promise;
        return Oi ? {
          Promise: r,
          PromiseProp: Object.getOwnPropertyDescriptor(y, "Promise"),
          all: r.all,
          race: r.race,
          allSettled: r.allSettled,
          any: r.any,
          resolve: r.resolve,
          reject: r.reject
        } : {};
      }
      function Vn(r, i, u, f, h) {
        var v = Ie;
        try {
          return rr(r, !0), i(u, f, h);
        } finally {
          rr(v, !1);
        }
      }
      function ii(r, i, u, f) {
        return typeof r != "function" ? r : function() {
          var h = Ie;
          u && Kr(), rr(i, !0);
          try {
            return r.apply(this, arguments);
          } finally {
            rr(h, !1), f && queueMicrotask(lt);
          }
        };
      }
      function br(r) {
        Promise === yr && Lt.echoes === 0 ? ri === 0 ? r() : enqueueNativeMicroTask(r) : setTimeout(r, 0);
      }
      var jt = Ne.reject;
      function ki(r, i, u, f) {
        if (!r.idbdb || !r._state.openComplete && !Ie.letThrough && !r._vip) {
          if (r._state.openComplete)
            return jt(new H.DatabaseClosed(r._state.dbOpenError));
          if (!r._state.isBeingOpened) {
            if (!r._state.autoOpen)
              return jt(new H.DatabaseClosed());
            r.open().catch(ve);
          }
          return r._state.dbReadyPromise.then(function() {
            return ki(r, i, u, f);
          });
        } else {
          var h = r._createTransaction(i, u, r._dbSchema);
          try {
            h.create(), r._state.PR1398_maxLoop = 3;
          } catch (v) {
            return v.name === L.InvalidState && r.isOpen() && --r._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), r.close({ disableAutoOpen: !1 }), r.open().then(function() {
              return ki(r, i, u, f);
            })) : jt(v);
          }
          return h._promise(i, function(v, _) {
            return $n(function() {
              return Ie.trans = h, f(v, _, h);
            });
          }).then(function(v) {
            if (i === "readwrite")
              try {
                h.idbtrans.commit();
              } catch {
              }
            return i === "readonly" ? v : h._completion.then(function() {
              return v;
            });
          });
        }
      }
      var Fi = "4.2.0", wr = "￿", oi = -1 / 0, Qn = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", ai = "String expected.", Br = [], co = "__dbnames", vt = "readonly", lo = "readwrite";
      function $r(r, i) {
        return r ? i ? function() {
          return r.apply(this, arguments) && i.apply(this, arguments);
        } : r : i;
      }
      var ka = {
        type: 3,
        lower: -1 / 0,
        lowerOpen: !1,
        upper: [[]],
        upperOpen: !1
      };
      function fn(r) {
        return typeof r == "string" && !/\./.test(r) ? function(i) {
          return i[r] === void 0 && r in i && (i = Ot(i), delete i[r]), i;
        } : function(i) {
          return i;
        };
      }
      function Vr() {
        throw H.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function ht(r, i) {
        try {
          var u = jo(r), f = jo(i);
          if (u !== f)
            return u === "Array" ? 1 : f === "Array" ? -1 : u === "binary" ? 1 : f === "binary" ? -1 : u === "string" ? 1 : f === "string" ? -1 : u === "Date" ? 1 : f !== "Date" ? NaN : -1;
          switch (u) {
            case "number":
            case "Date":
            case "string":
              return r > i ? 1 : r < i ? -1 : 0;
            case "binary":
              return Fa(Jt(r), Jt(i));
            case "Array":
              return _r(r, i);
          }
        } catch {
        }
        return NaN;
      }
      function _r(r, i) {
        for (var u = r.length, f = i.length, h = u < f ? u : f, v = 0; v < h; ++v) {
          var _ = ht(r[v], i[v]);
          if (_ !== 0)
            return _;
        }
        return u === f ? 0 : u < f ? -1 : 1;
      }
      function Fa(r, i) {
        for (var u = r.length, f = i.length, h = u < f ? u : f, v = 0; v < h; ++v)
          if (r[v] !== i[v])
            return r[v] < i[v] ? -1 : 1;
        return u === f ? 0 : u < f ? -1 : 1;
      }
      function jo(r) {
        var i = typeof r;
        if (i !== "object")
          return i;
        if (ArrayBuffer.isView(r))
          return "binary";
        var u = Ft(r);
        return u === "ArrayBuffer" ? "binary" : u;
      }
      function Jt(r) {
        return r instanceof Uint8Array ? r : ArrayBuffer.isView(r) ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength) : new Uint8Array(r);
      }
      function Tn(r, i, u) {
        var f = r.schema.yProps;
        return f ? (i && u.numFailures > 0 && (i = i.filter(function(h, v) {
          return !u.failures[v];
        })), Promise.all(f.map(function(h) {
          var v = h.updatesTable;
          return i ? r.db.table(v).where("k").anyOf(i).delete() : r.db.table(v).clear();
        })).then(function() {
          return u;
        })) : u;
      }
      var si = function() {
        function r() {
        }
        return r.prototype._trans = function(i, u, f) {
          var h = this._tx || Ie.trans, v = this.name, _ = Mt && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(i === "readonly" ? "read" : "write", " ").concat(this.name));
          function C(Z, U, se) {
            if (!se.schema[v])
              throw new H.NotFound("Table " + v + " not part of transaction");
            return u(se.idbtrans, se);
          }
          var I = Lr();
          try {
            var M = h && h.db._novip === this.db._novip ? h === Ie.trans ? h._promise(i, C, f) : $n(function() {
              return h._promise(i, C, f);
            }, { trans: h, transless: Ie.transless || Ie }) : ki(this.db, i, [this.name], C);
            return _ && (M._consoleTask = _, M = M.catch(function(Z) {
              return console.trace(Z), jt(Z);
            })), M;
          } finally {
            I && Rn();
          }
        }, r.prototype.get = function(i, u) {
          var f = this;
          return i && i.constructor === Object ? this.where(i).first(u) : i == null ? jt(new H.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(h) {
            return f.core.get({ trans: h, key: i }).then(function(v) {
              return f.hook.reading.fire(v);
            });
          }).then(u);
        }, r.prototype.where = function(i) {
          if (typeof i == "string")
            return new this.db.WhereClause(this, i);
          if (x(i))
            return new this.db.WhereClause(this, "[".concat(i.join("+"), "]"));
          var u = g(i);
          if (u.length === 1)
            return this.where(u[0]).equals(i[u[0]]);
          var f = this.schema.indexes.concat(this.schema.primKey).filter(function(Z) {
            if (Z.compound && u.every(function(se) {
              return Z.keyPath.indexOf(se) >= 0;
            })) {
              for (var U = 0; U < u.length; ++U)
                if (u.indexOf(Z.keyPath[U]) === -1)
                  return !1;
              return !0;
            }
            return !1;
          }).sort(function(Z, U) {
            return Z.keyPath.length - U.keyPath.length;
          })[0];
          if (f && this.db._maxKey !== wr) {
            var h = f.keyPath.slice(0, u.length);
            return this.where(h).equals(h.map(function(Z) {
              return i[Z];
            }));
          }
          !f && Mt && console.warn("The query ".concat(JSON.stringify(i), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(u.join("+"), "]"));
          var v = this.schema.idxByName;
          function _(Z, U) {
            return ht(Z, U) === 0;
          }
          var C = u.reduce(function(Z, U) {
            var se = Z[0], Se = Z[1], Y = v[U], re = i[U];
            return [
              se || Y,
              se || !Y ? $r(Se, Y && Y.multi ? function(ce) {
                var me = K(ce, U);
                return x(me) && me.some(function(ye) {
                  return _(re, ye);
                });
              } : function(ce) {
                return _(re, K(ce, U));
              }) : Se
            ];
          }, [null, null]), I = C[0], M = C[1];
          return I ? this.where(I.name).equals(i[I.keyPath]).filter(M) : f ? this.filter(M) : this.where(u).equals("");
        }, r.prototype.filter = function(i) {
          return this.toCollection().and(i);
        }, r.prototype.count = function(i) {
          return this.toCollection().count(i);
        }, r.prototype.offset = function(i) {
          return this.toCollection().offset(i);
        }, r.prototype.limit = function(i) {
          return this.toCollection().limit(i);
        }, r.prototype.each = function(i) {
          return this.toCollection().each(i);
        }, r.prototype.toArray = function(i) {
          return this.toCollection().toArray(i);
        }, r.prototype.toCollection = function() {
          return new this.db.Collection(new this.db.WhereClause(this));
        }, r.prototype.orderBy = function(i) {
          return new this.db.Collection(new this.db.WhereClause(this, x(i) ? "[".concat(i.join("+"), "]") : i));
        }, r.prototype.reverse = function() {
          return this.toCollection().reverse();
        }, r.prototype.mapToClass = function(i) {
          var u = this, f = u.db, h = u.name;
          this.schema.mappedClass = i, i.prototype instanceof Vr && (i = function(I) {
            a(M, I);
            function M() {
              return I !== null && I.apply(this, arguments) || this;
            }
            return Object.defineProperty(M.prototype, "db", {
              get: function() {
                return f;
              },
              enumerable: !1,
              configurable: !0
            }), M.prototype.table = function() {
              return h;
            }, M;
          }(i));
          for (var v = /* @__PURE__ */ new Set(), _ = i.prototype; _; _ = N(_))
            Object.getOwnPropertyNames(_).forEach(function(I) {
              return v.add(I);
            });
          var C = function(I) {
            if (!I)
              return I;
            var M = Object.create(i.prototype);
            for (var Z in I)
              if (!v.has(Z))
                try {
                  M[Z] = I[Z];
                } catch {
                }
            return M;
          };
          return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = C, this.hook("reading", C), i;
        }, r.prototype.defineClass = function() {
          function i(u) {
            $(this, u);
          }
          return this.mapToClass(i);
        }, r.prototype.add = function(i, u) {
          var f = this, h = this.schema.primKey, v = h.auto, _ = h.keyPath, C = i;
          return _ && v && (C = fn(_)(i)), this._trans("readwrite", function(I) {
            return f.core.mutate({ trans: I, type: "add", keys: u != null ? [u] : null, values: [C] });
          }).then(function(I) {
            return I.numFailures ? Ne.reject(I.failures[0]) : I.lastResult;
          }).then(function(I) {
            if (_)
              try {
                dt(i, _, I);
              } catch {
              }
            return I;
          });
        }, r.prototype.update = function(i, u) {
          if (typeof i == "object" && !x(i)) {
            var f = K(i, this.schema.primKey.keyPath);
            return f === void 0 ? jt(new H.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(f).modify(u);
          } else
            return this.where(":id").equals(i).modify(u);
        }, r.prototype.put = function(i, u) {
          var f = this, h = this.schema.primKey, v = h.auto, _ = h.keyPath, C = i;
          return _ && v && (C = fn(_)(i)), this._trans("readwrite", function(I) {
            return f.core.mutate({ trans: I, type: "put", values: [C], keys: u != null ? [u] : null });
          }).then(function(I) {
            return I.numFailures ? Ne.reject(I.failures[0]) : I.lastResult;
          }).then(function(I) {
            if (_)
              try {
                dt(i, _, I);
              } catch {
              }
            return I;
          });
        }, r.prototype.delete = function(i) {
          var u = this;
          return this._trans("readwrite", function(f) {
            return u.core.mutate({ trans: f, type: "delete", keys: [i] }).then(function(h) {
              return Tn(u, [i], h);
            }).then(function(h) {
              return h.numFailures ? Ne.reject(h.failures[0]) : void 0;
            });
          });
        }, r.prototype.clear = function() {
          var i = this;
          return this._trans("readwrite", function(u) {
            return i.core.mutate({ trans: u, type: "deleteRange", range: ka }).then(function(f) {
              return Tn(i, null, f);
            });
          }).then(function(u) {
            return u.numFailures ? Ne.reject(u.failures[0]) : void 0;
          });
        }, r.prototype.bulkGet = function(i) {
          var u = this;
          return this._trans("readonly", function(f) {
            return u.core.getMany({
              keys: i,
              trans: f
            }).then(function(h) {
              return h.map(function(v) {
                return u.hook.reading.fire(v);
              });
            });
          });
        }, r.prototype.bulkAdd = function(i, u, f) {
          var h = this, v = Array.isArray(u) ? u : void 0;
          f = f || (v ? void 0 : u);
          var _ = f ? f.allKeys : void 0;
          return this._trans("readwrite", function(C) {
            var I = h.schema.primKey, M = I.auto, Z = I.keyPath;
            if (Z && v)
              throw new H.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
            if (v && v.length !== i.length)
              throw new H.InvalidArgument("Arguments objects and keys must have the same length");
            var U = i.length, se = Z && M ? i.map(fn(Z)) : i;
            return h.core.mutate({ trans: C, type: "add", keys: v, values: se, wantResults: _ }).then(function(Se) {
              var Y = Se.numFailures, re = Se.results, ce = Se.lastResult, me = Se.failures, ye = _ ? re : ce;
              if (Y === 0)
                return ye;
              throw new R("".concat(h.name, ".bulkAdd(): ").concat(Y, " of ").concat(U, " operations failed"), me);
            });
          });
        }, r.prototype.bulkPut = function(i, u, f) {
          var h = this, v = Array.isArray(u) ? u : void 0;
          f = f || (v ? void 0 : u);
          var _ = f ? f.allKeys : void 0;
          return this._trans("readwrite", function(C) {
            var I = h.schema.primKey, M = I.auto, Z = I.keyPath;
            if (Z && v)
              throw new H.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
            if (v && v.length !== i.length)
              throw new H.InvalidArgument("Arguments objects and keys must have the same length");
            var U = i.length, se = Z && M ? i.map(fn(Z)) : i;
            return h.core.mutate({ trans: C, type: "put", keys: v, values: se, wantResults: _ }).then(function(Se) {
              var Y = Se.numFailures, re = Se.results, ce = Se.lastResult, me = Se.failures, ye = _ ? re : ce;
              if (Y === 0)
                return ye;
              throw new R("".concat(h.name, ".bulkPut(): ").concat(Y, " of ").concat(U, " operations failed"), me);
            });
          });
        }, r.prototype.bulkUpdate = function(i) {
          var u = this, f = this.core, h = i.map(function(C) {
            return C.key;
          }), v = i.map(function(C) {
            return C.changes;
          }), _ = [];
          return this._trans("readwrite", function(C) {
            return f.getMany({ trans: C, keys: h, cache: "clone" }).then(function(I) {
              var M = [], Z = [];
              i.forEach(function(se, Se) {
                var Y = se.key, re = se.changes, ce = I[Se];
                if (ce) {
                  for (var me = 0, ye = Object.keys(re); me < ye.length; me++) {
                    var de = ye[me], be = re[de];
                    if (de === u.schema.primKey.keyPath) {
                      if (ht(be, Y) !== 0)
                        throw new H.Constraint("Cannot update primary key in bulkUpdate()");
                    } else
                      dt(ce, de, be);
                  }
                  _.push(Se), M.push(Y), Z.push(ce);
                }
              });
              var U = M.length;
              return f.mutate({
                trans: C,
                type: "put",
                keys: M,
                values: Z,
                updates: {
                  keys: h,
                  changeSpecs: v
                }
              }).then(function(se) {
                var Se = se.numFailures, Y = se.failures;
                if (Se === 0)
                  return U;
                for (var re = 0, ce = Object.keys(Y); re < ce.length; re++) {
                  var me = ce[re], ye = _[Number(me)];
                  if (ye != null) {
                    var de = Y[me];
                    delete Y[me], Y[ye] = de;
                  }
                }
                throw new R("".concat(u.name, ".bulkUpdate(): ").concat(Se, " of ").concat(U, " operations failed"), Y);
              });
            });
          });
        }, r.prototype.bulkDelete = function(i) {
          var u = this, f = i.length;
          return this._trans("readwrite", function(h) {
            return u.core.mutate({ trans: h, type: "delete", keys: i }).then(function(v) {
              return Tn(u, i, v);
            });
          }).then(function(h) {
            var v = h.numFailures, _ = h.lastResult, C = h.failures;
            if (v === 0)
              return _;
            throw new R("".concat(u.name, ".bulkDelete(): ").concat(v, " of ").concat(f, " operations failed"), C);
          });
        }, r;
      }();
      function ir(r) {
        var i = {}, u = function(C, I) {
          if (I) {
            for (var M = arguments.length, Z = new Array(M - 1); --M; )
              Z[M - 1] = arguments[M];
            return i[C].subscribe.apply(null, Z), r;
          } else if (typeof C == "string")
            return i[C];
        };
        u.addEventType = v;
        for (var f = 1, h = arguments.length; f < h; ++f)
          v(arguments[f]);
        return u;
        function v(C, I, M) {
          if (typeof C == "object")
            return _(C);
          I || (I = Xt), M || (M = ve);
          var Z = {
            subscribers: [],
            fire: M,
            subscribe: function(U) {
              Z.subscribers.indexOf(U) === -1 && (Z.subscribers.push(U), Z.fire = I(Z.fire, U));
            },
            unsubscribe: function(U) {
              Z.subscribers = Z.subscribers.filter(function(se) {
                return se !== U;
              }), Z.fire = Z.subscribers.reduce(I, M);
            }
          };
          return i[C] = u[C] = Z, Z;
        }
        function _(C) {
          g(C).forEach(function(I) {
            var M = C[I];
            if (x(M))
              v(I, C[I][0], C[I][1]);
            else if (M === "asap")
              var Z = v(I, Ue, function() {
                for (var se = arguments.length, Se = new Array(se); se--; )
                  Se[se] = arguments[se];
                Z.subscribers.forEach(function(Y) {
                  ge(function() {
                    Y.apply(null, Se);
                  });
                });
              });
            else
              throw new H.InvalidArgument("Invalid event config");
          });
        }
      }
      function qr(r, i) {
        return He(i).from({ prototype: r }), i;
      }
      function Sr(r) {
        return qr(si.prototype, function(u, f, h) {
          this.db = r, this._tx = h, this.name = u, this.schema = f, this.hook = r._allTables[u] ? r._allTables[u].hook : ir(null, {
            creating: [xt, ve],
            reading: [Ze, Ue],
            updating: [nn, ve],
            deleting: [yt, ve]
          });
        });
      }
      function ui(r, i) {
        return !(r.filter || r.algorithm || r.or) && (i ? r.justLimit : !r.replayFilter);
      }
      function kn(r, i) {
        r.filter = $r(r.filter, i);
      }
      function Mi(r, i, u) {
        var f = r.replayFilter;
        r.replayFilter = f ? function() {
          return $r(f(), i());
        } : i, r.justLimit = u && !f;
      }
      function Ma(r, i) {
        r.isMatch = $r(r.isMatch, i);
      }
      function ci(r, i) {
        if (r.isPrimKey)
          return i.primaryKey;
        var u = i.getIndexByKeyPath(r.index);
        if (!u)
          throw new H.Schema("KeyPath " + r.index + " on object store " + i.name + " is not indexed");
        return u;
      }
      function li(r, i, u) {
        var f = ci(r, i.schema);
        return i.openCursor({
          trans: u,
          values: !r.keysOnly,
          reverse: r.dir === "prev",
          unique: !!r.unique,
          query: {
            index: f,
            range: r.range
          }
        });
      }
      function fi(r, i, u, f) {
        var h = r.replayFilter ? $r(r.filter, r.replayFilter()) : r.filter;
        if (r.or) {
          var v = {}, _ = function(C, I, M) {
            if (!h || h(I, M, function(se) {
              return I.stop(se);
            }, function(se) {
              return I.fail(se);
            })) {
              var Z = I.primaryKey, U = "" + Z;
              U === "[object ArrayBuffer]" && (U = "" + new Uint8Array(Z)), ee(v, U) || (v[U] = !0, i(C, I, M));
            }
          };
          return Promise.all([
            r.or._iterate(_, u),
            Ko(li(r, f, u), r.algorithm, _, !r.keysOnly && r.valueMapper)
          ]);
        } else
          return Ko(li(r, f, u), $r(r.algorithm, h), i, !r.keysOnly && r.valueMapper);
      }
      function Ko(r, i, u, f) {
        var h = f ? function(_, C, I) {
          return u(f(_), C, I);
        } : u, v = kt(h);
        return r.then(function(_) {
          if (_)
            return _.start(function() {
              var C = function() {
                return _.continue();
              };
              (!i || i(_, function(I) {
                return C = I;
              }, function(I) {
                _.stop(I), C = ve;
              }, function(I) {
                _.fail(I), C = ve;
              })) && v(_.value, _, function(I) {
                return C = I;
              }), C();
            });
        });
      }
      var Li = function() {
        function r(i) {
          this["@@propmod"] = i;
        }
        return r.prototype.execute = function(i) {
          var u, f = this["@@propmod"];
          if (f.add !== void 0) {
            var h = f.add;
            if (x(h))
              return d(d([], x(i) ? i : [], !0), h).sort();
            if (typeof h == "number")
              return (Number(i) || 0) + h;
            if (typeof h == "bigint")
              try {
                return BigInt(i) + h;
              } catch {
                return BigInt(0) + h;
              }
            throw new TypeError("Invalid term ".concat(h));
          }
          if (f.remove !== void 0) {
            var v = f.remove;
            if (x(v))
              return x(i) ? i.filter(function(C) {
                return !v.includes(C);
              }).sort() : [];
            if (typeof v == "number")
              return Number(i) - v;
            if (typeof v == "bigint")
              try {
                return BigInt(i) - v;
              } catch {
                return BigInt(0) - v;
              }
            throw new TypeError("Invalid subtrahend ".concat(v));
          }
          var _ = (u = f.replacePrefix) === null || u === void 0 ? void 0 : u[0];
          return _ && typeof i == "string" && i.startsWith(_) ? f.replacePrefix[1] + i.substring(_.length) : i;
        }, r;
      }(), ji = function() {
        function r() {
        }
        return r.prototype._read = function(i, u) {
          var f = this._ctx;
          return f.error ? f.table._trans(null, jt.bind(null, f.error)) : f.table._trans("readonly", i).then(u);
        }, r.prototype._write = function(i) {
          var u = this._ctx;
          return u.error ? u.table._trans(null, jt.bind(null, u.error)) : u.table._trans("readwrite", i, "locked");
        }, r.prototype._addAlgorithm = function(i) {
          var u = this._ctx;
          u.algorithm = $r(u.algorithm, i);
        }, r.prototype._iterate = function(i, u) {
          return fi(this._ctx, i, u, this._ctx.table.core);
        }, r.prototype.clone = function(i) {
          var u = Object.create(this.constructor.prototype), f = Object.create(this._ctx);
          return i && $(f, i), u._ctx = f, u;
        }, r.prototype.raw = function() {
          return this._ctx.valueMapper = null, this;
        }, r.prototype.each = function(i) {
          var u = this._ctx;
          return this._read(function(f) {
            return fi(u, i, f, u.table.core);
          });
        }, r.prototype.count = function(i) {
          var u = this;
          return this._read(function(f) {
            var h = u._ctx, v = h.table.core;
            if (ui(h, !0))
              return v.count({
                trans: f,
                query: {
                  index: ci(h, v.schema),
                  range: h.range
                }
              }).then(function(C) {
                return Math.min(C, h.limit);
              });
            var _ = 0;
            return fi(h, function() {
              return ++_, !1;
            }, f, v).then(function() {
              return _;
            });
          }).then(i);
        }, r.prototype.sortBy = function(i, u) {
          var f = i.split(".").reverse(), h = f[0], v = f.length - 1;
          function _(M, Z) {
            return Z ? _(M[f[Z]], Z - 1) : M[h];
          }
          var C = this._ctx.dir === "next" ? 1 : -1;
          function I(M, Z) {
            var U = _(M, v), se = _(Z, v);
            return ht(U, se) * C;
          }
          return this.toArray(function(M) {
            return M.sort(I);
          }).then(u);
        }, r.prototype.toArray = function(i) {
          var u = this;
          return this._read(function(f) {
            var h = u._ctx;
            if (h.dir === "next" && ui(h, !0) && h.limit > 0) {
              var v = h.valueMapper, _ = ci(h, h.table.core.schema);
              return h.table.core.query({
                trans: f,
                limit: h.limit,
                values: !0,
                query: {
                  index: _,
                  range: h.range
                }
              }).then(function(I) {
                var M = I.result;
                return v ? M.map(v) : M;
              });
            } else {
              var C = [];
              return fi(h, function(I) {
                return C.push(I);
              }, f, h.table.core).then(function() {
                return C;
              });
            }
          }, i);
        }, r.prototype.offset = function(i) {
          var u = this._ctx;
          return i <= 0 ? this : (u.offset += i, ui(u) ? Mi(u, function() {
            var f = i;
            return function(h, v) {
              return f === 0 ? !0 : f === 1 ? (--f, !1) : (v(function() {
                h.advance(f), f = 0;
              }), !1);
            };
          }) : Mi(u, function() {
            var f = i;
            return function() {
              return --f < 0;
            };
          }), this);
        }, r.prototype.limit = function(i) {
          return this._ctx.limit = Math.min(this._ctx.limit, i), Mi(this._ctx, function() {
            var u = i;
            return function(f, h, v) {
              return --u <= 0 && h(v), u >= 0;
            };
          }, !0), this;
        }, r.prototype.until = function(i, u) {
          return kn(this._ctx, function(f, h, v) {
            return i(f.value) ? (h(v), u) : !0;
          }), this;
        }, r.prototype.first = function(i) {
          return this.limit(1).toArray(function(u) {
            return u[0];
          }).then(i);
        }, r.prototype.last = function(i) {
          return this.reverse().first(i);
        }, r.prototype.filter = function(i) {
          return kn(this._ctx, function(u) {
            return i(u.value);
          }), Ma(this._ctx, i), this;
        }, r.prototype.and = function(i) {
          return this.filter(i);
        }, r.prototype.or = function(i) {
          return new this.db.WhereClause(this._ctx.table, i, this);
        }, r.prototype.reverse = function() {
          return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
        }, r.prototype.desc = function() {
          return this.reverse();
        }, r.prototype.eachKey = function(i) {
          var u = this._ctx;
          return u.keysOnly = !u.isMatch, this.each(function(f, h) {
            i(h.key, h);
          });
        }, r.prototype.eachUniqueKey = function(i) {
          return this._ctx.unique = "unique", this.eachKey(i);
        }, r.prototype.eachPrimaryKey = function(i) {
          var u = this._ctx;
          return u.keysOnly = !u.isMatch, this.each(function(f, h) {
            i(h.primaryKey, h);
          });
        }, r.prototype.keys = function(i) {
          var u = this._ctx;
          u.keysOnly = !u.isMatch;
          var f = [];
          return this.each(function(h, v) {
            f.push(v.key);
          }).then(function() {
            return f;
          }).then(i);
        }, r.prototype.primaryKeys = function(i) {
          var u = this._ctx;
          if (u.dir === "next" && ui(u, !0) && u.limit > 0)
            return this._read(function(h) {
              var v = ci(u, u.table.core.schema);
              return u.table.core.query({
                trans: h,
                values: !1,
                limit: u.limit,
                query: {
                  index: v,
                  range: u.range
                }
              });
            }).then(function(h) {
              var v = h.result;
              return v;
            }).then(i);
          u.keysOnly = !u.isMatch;
          var f = [];
          return this.each(function(h, v) {
            f.push(v.primaryKey);
          }).then(function() {
            return f;
          }).then(i);
        }, r.prototype.uniqueKeys = function(i) {
          return this._ctx.unique = "unique", this.keys(i);
        }, r.prototype.firstKey = function(i) {
          return this.limit(1).keys(function(u) {
            return u[0];
          }).then(i);
        }, r.prototype.lastKey = function(i) {
          return this.reverse().firstKey(i);
        }, r.prototype.distinct = function() {
          var i = this._ctx, u = i.index && i.table.schema.idxByName[i.index];
          if (!u || !u.multi)
            return this;
          var f = {};
          return kn(this._ctx, function(h) {
            var v = h.primaryKey.toString(), _ = ee(f, v);
            return f[v] = !0, !_;
          }), this;
        }, r.prototype.modify = function(i) {
          var u = this, f = this._ctx;
          return this._write(function(h) {
            var v;
            if (typeof i == "function")
              v = i;
            else {
              var _ = g(i), C = _.length;
              v = function(de) {
                for (var be = !1, he = 0; he < C; ++he) {
                  var Ce = _[he], ke = i[Ce], Re = K(de, Ce);
                  ke instanceof Li ? (dt(de, Ce, ke.execute(Re)), be = !0) : Re !== ke && (dt(de, Ce, ke), be = !0);
                }
                return be;
              };
            }
            var I = f.table.core, M = I.schema.primaryKey, Z = M.outbound, U = M.extractKey, se = 200, Se = u.db._options.modifyChunkSize;
            Se && (typeof Se == "object" ? se = Se[I.name] || Se["*"] || 200 : se = Se);
            var Y = [], re = 0, ce = [], me = function(de, be) {
              var he = be.failures, Ce = be.numFailures;
              re += de - Ce;
              for (var ke = 0, Re = g(he); ke < Re.length; ke++) {
                var tt = Re[ke];
                Y.push(he[tt]);
              }
            }, ye = i === La;
            return u.clone().primaryKeys().then(function(de) {
              var be = ui(f) && f.limit === 1 / 0 && (typeof i != "function" || ye) && {
                index: f.index,
                range: f.range
              }, he = function(Ce) {
                var ke = Math.min(se, de.length - Ce), Re = de.slice(Ce, Ce + ke);
                return (ye ? Promise.resolve([]) : I.getMany({
                  trans: h,
                  keys: Re,
                  cache: "immutable"
                })).then(function(tt) {
                  var pt = [], Ge = [], bt = Z ? [] : null, Xe = ye ? Re : [];
                  if (!ye)
                    for (var wt = 0; wt < ke; ++wt) {
                      var rt = tt[wt], Nt = {
                        value: Ot(rt),
                        primKey: de[Ce + wt]
                      };
                      v.call(Nt, Nt.value, Nt) !== !1 && (Nt.value == null ? Xe.push(de[Ce + wt]) : !Z && ht(U(rt), U(Nt.value)) !== 0 ? (Xe.push(de[Ce + wt]), pt.push(Nt.value)) : (Ge.push(Nt.value), Z && bt.push(de[Ce + wt])));
                    }
                  return Promise.resolve(pt.length > 0 && I.mutate({ trans: h, type: "add", values: pt }).then(function(Bt) {
                    for (var Jn in Bt.failures)
                      Xe.splice(parseInt(Jn), 1);
                    me(pt.length, Bt);
                  })).then(function() {
                    return (Ge.length > 0 || be && typeof i == "object") && I.mutate({
                      trans: h,
                      type: "put",
                      keys: bt,
                      values: Ge,
                      criteria: be,
                      changeSpec: typeof i != "function" && i,
                      isAdditionalChunk: Ce > 0
                    }).then(function(Bt) {
                      return me(Ge.length, Bt);
                    });
                  }).then(function() {
                    return (Xe.length > 0 || be && ye) && I.mutate({
                      trans: h,
                      type: "delete",
                      keys: Xe,
                      criteria: be,
                      isAdditionalChunk: Ce > 0
                    }).then(function(Bt) {
                      return Tn(f.table, Xe, Bt);
                    }).then(function(Bt) {
                      return me(Xe.length, Bt);
                    });
                  }).then(function() {
                    return de.length > Ce + ke && he(Ce + se);
                  });
                });
              };
              return he(0).then(function() {
                if (Y.length > 0)
                  throw new P("Error modifying one or more objects", Y, re, ce);
                return de.length;
              });
            });
          });
        }, r.prototype.delete = function() {
          var i = this._ctx, u = i.range;
          return ui(i) && !i.table.schema.yProps && (i.isPrimKey || u.type === 3) ? this._write(function(f) {
            var h = i.table.core.schema.primaryKey, v = u;
            return i.table.core.count({ trans: f, query: { index: h, range: v } }).then(function(_) {
              return i.table.core.mutate({ trans: f, type: "deleteRange", range: v }).then(function(C) {
                var I = C.failures, M = C.numFailures;
                if (M)
                  throw new P("Could not delete some values", Object.keys(I).map(function(Z) {
                    return I[Z];
                  }), _ - M);
                return _ - M;
              });
            });
          }) : this.modify(La);
        }, r;
      }(), La = function(r, i) {
        return i.value = null;
      };
      function Ns(r) {
        return qr(ji.prototype, function(u, f) {
          this.db = r;
          var h = ka, v = null;
          if (f)
            try {
              h = f();
            } catch (M) {
              v = M;
            }
          var _ = u._ctx, C = _.table, I = C.hook.reading.fire;
          this._ctx = {
            table: C,
            index: _.index,
            isPrimKey: !_.index || C.schema.primKey.keyPath && _.index === C.schema.primKey.name,
            range: h,
            keysOnly: !1,
            dir: "next",
            unique: "",
            algorithm: null,
            filter: null,
            replayFilter: null,
            justLimit: !0,
            isMatch: null,
            offset: 0,
            limit: 1 / 0,
            error: v,
            or: _.or,
            valueMapper: I !== Ue ? I : null
          };
        });
      }
      function fo(r, i) {
        return r < i ? -1 : r === i ? 0 : 1;
      }
      function po(r, i) {
        return r > i ? -1 : r === i ? 0 : 1;
      }
      function vn(r, i, u) {
        var f = r instanceof Bi ? new r.Collection(r) : r;
        return f._ctx.error = u ? new u(i) : new TypeError(i), f;
      }
      function di(r) {
        return new r.Collection(r, function() {
          return Ki("");
        }).limit(0);
      }
      function ks(r) {
        return r === "next" ? function(i) {
          return i.toUpperCase();
        } : function(i) {
          return i.toLowerCase();
        };
      }
      function Fs(r) {
        return r === "next" ? function(i) {
          return i.toLowerCase();
        } : function(i) {
          return i.toUpperCase();
        };
      }
      function Bo(r, i, u, f, h, v) {
        for (var _ = Math.min(r.length, f.length), C = -1, I = 0; I < _; ++I) {
          var M = i[I];
          if (M !== f[I])
            return h(r[I], u[I]) < 0 ? r.substr(0, I) + u[I] + u.substr(I + 1) : h(r[I], f[I]) < 0 ? r.substr(0, I) + f[I] + u.substr(I + 1) : C >= 0 ? r.substr(0, C) + i[C] + u.substr(C + 1) : null;
          h(r[I], M) < 0 && (C = I);
        }
        return _ < f.length && v === "next" ? r + u.substr(r.length) : _ < r.length && v === "prev" ? r.substr(0, u.length) : C < 0 ? null : r.substr(0, C) + f[C] + u.substr(C + 1);
      }
      function pi(r, i, u, f) {
        var h, v, _, C, I, M, Z, U = u.length;
        if (!u.every(function(re) {
          return typeof re == "string";
        }))
          return vn(r, ai);
        function se(re) {
          h = ks(re), v = Fs(re), _ = re === "next" ? fo : po;
          var ce = u.map(function(me) {
            return { lower: v(me), upper: h(me) };
          }).sort(function(me, ye) {
            return _(me.lower, ye.lower);
          });
          C = ce.map(function(me) {
            return me.upper;
          }), I = ce.map(function(me) {
            return me.lower;
          }), M = re, Z = re === "next" ? "" : f;
        }
        se("next");
        var Se = new r.Collection(r, function() {
          return or(C[0], I[U - 1] + f);
        });
        Se._ondirectionchange = function(re) {
          se(re);
        };
        var Y = 0;
        return Se._addAlgorithm(function(re, ce, me) {
          var ye = re.key;
          if (typeof ye != "string")
            return !1;
          var de = v(ye);
          if (i(de, I, Y))
            return !0;
          for (var be = null, he = Y; he < U; ++he) {
            var Ce = Bo(ye, de, C[he], I[he], _, M);
            Ce === null && be === null ? Y = he + 1 : (be === null || _(be, Ce) > 0) && (be = Ce);
          }
          return ce(be !== null ? function() {
            re.continue(be + Z);
          } : me), !1;
        }), Se;
      }
      function or(r, i, u, f) {
        return {
          type: 2,
          lower: r,
          upper: i,
          lowerOpen: u,
          upperOpen: f
        };
      }
      function Ki(r) {
        return {
          type: 1,
          lower: r,
          upper: r
        };
      }
      var Bi = function() {
        function r() {
        }
        return Object.defineProperty(r.prototype, "Collection", {
          get: function() {
            return this._ctx.table.db.Collection;
          },
          enumerable: !1,
          configurable: !0
        }), r.prototype.between = function(i, u, f, h) {
          f = f !== !1, h = h === !0;
          try {
            return this._cmp(i, u) > 0 || this._cmp(i, u) === 0 && (f || h) && !(f && h) ? di(this) : new this.Collection(this, function() {
              return or(i, u, !f, !h);
            });
          } catch {
            return vn(this, Qn);
          }
        }, r.prototype.equals = function(i) {
          return i == null ? vn(this, Qn) : new this.Collection(this, function() {
            return Ki(i);
          });
        }, r.prototype.above = function(i) {
          return i == null ? vn(this, Qn) : new this.Collection(this, function() {
            return or(i, void 0, !0);
          });
        }, r.prototype.aboveOrEqual = function(i) {
          return i == null ? vn(this, Qn) : new this.Collection(this, function() {
            return or(i, void 0, !1);
          });
        }, r.prototype.below = function(i) {
          return i == null ? vn(this, Qn) : new this.Collection(this, function() {
            return or(void 0, i, !1, !0);
          });
        }, r.prototype.belowOrEqual = function(i) {
          return i == null ? vn(this, Qn) : new this.Collection(this, function() {
            return or(void 0, i);
          });
        }, r.prototype.startsWith = function(i) {
          return typeof i != "string" ? vn(this, ai) : this.between(i, i + wr, !0, !0);
        }, r.prototype.startsWithIgnoreCase = function(i) {
          return i === "" ? this.startsWith(i) : pi(this, function(u, f) {
            return u.indexOf(f[0]) === 0;
          }, [i], wr);
        }, r.prototype.equalsIgnoreCase = function(i) {
          return pi(this, function(u, f) {
            return u === f[0];
          }, [i], "");
        }, r.prototype.anyOfIgnoreCase = function() {
          var i = b.apply(E, arguments);
          return i.length === 0 ? di(this) : pi(this, function(u, f) {
            return f.indexOf(u) !== -1;
          }, i, "");
        }, r.prototype.startsWithAnyOfIgnoreCase = function() {
          var i = b.apply(E, arguments);
          return i.length === 0 ? di(this) : pi(this, function(u, f) {
            return f.some(function(h) {
              return u.indexOf(h) === 0;
            });
          }, i, wr);
        }, r.prototype.anyOf = function() {
          var i = this, u = b.apply(E, arguments), f = this._cmp;
          try {
            u.sort(f);
          } catch {
            return vn(this, Qn);
          }
          if (u.length === 0)
            return di(this);
          var h = new this.Collection(this, function() {
            return or(u[0], u[u.length - 1]);
          });
          h._ondirectionchange = function(_) {
            f = _ === "next" ? i._ascending : i._descending, u.sort(f);
          };
          var v = 0;
          return h._addAlgorithm(function(_, C, I) {
            for (var M = _.key; f(M, u[v]) > 0; )
              if (++v, v === u.length)
                return C(I), !1;
            return f(M, u[v]) === 0 ? !0 : (C(function() {
              _.continue(u[v]);
            }), !1);
          }), h;
        }, r.prototype.notEqual = function(i) {
          return this.inAnyRange([[oi, i], [i, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
        }, r.prototype.noneOf = function() {
          var i = b.apply(E, arguments);
          if (i.length === 0)
            return new this.Collection(this);
          try {
            i.sort(this._ascending);
          } catch {
            return vn(this, Qn);
          }
          var u = i.reduce(function(f, h) {
            return f ? f.concat([[f[f.length - 1][1], h]]) : [[oi, h]];
          }, null);
          return u.push([i[i.length - 1], this.db._maxKey]), this.inAnyRange(u, { includeLowers: !1, includeUppers: !1 });
        }, r.prototype.inAnyRange = function(i, u) {
          var f = this, h = this._cmp, v = this._ascending, _ = this._descending, C = this._min, I = this._max;
          if (i.length === 0)
            return di(this);
          if (!i.every(function(he) {
            return he[0] !== void 0 && he[1] !== void 0 && v(he[0], he[1]) <= 0;
          }))
            return vn(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", H.InvalidArgument);
          var M = !u || u.includeLowers !== !1, Z = u && u.includeUppers === !0;
          function U(he, Ce) {
            for (var ke = 0, Re = he.length; ke < Re; ++ke) {
              var tt = he[ke];
              if (h(Ce[0], tt[1]) < 0 && h(Ce[1], tt[0]) > 0) {
                tt[0] = C(tt[0], Ce[0]), tt[1] = I(tt[1], Ce[1]);
                break;
              }
            }
            return ke === Re && he.push(Ce), he;
          }
          var se = v;
          function Se(he, Ce) {
            return se(he[0], Ce[0]);
          }
          var Y;
          try {
            Y = i.reduce(U, []), Y.sort(Se);
          } catch {
            return vn(this, Qn);
          }
          var re = 0, ce = Z ? function(he) {
            return v(he, Y[re][1]) > 0;
          } : function(he) {
            return v(he, Y[re][1]) >= 0;
          }, me = M ? function(he) {
            return _(he, Y[re][0]) > 0;
          } : function(he) {
            return _(he, Y[re][0]) >= 0;
          };
          function ye(he) {
            return !ce(he) && !me(he);
          }
          var de = ce, be = new this.Collection(this, function() {
            return or(Y[0][0], Y[Y.length - 1][1], !M, !Z);
          });
          return be._ondirectionchange = function(he) {
            he === "next" ? (de = ce, se = v) : (de = me, se = _), Y.sort(Se);
          }, be._addAlgorithm(function(he, Ce, ke) {
            for (var Re = he.key; de(Re); )
              if (++re, re === Y.length)
                return Ce(ke), !1;
            return ye(Re) ? !0 : (f._cmp(Re, Y[re][1]) === 0 || f._cmp(Re, Y[re][0]) === 0 || Ce(function() {
              se === v ? he.continue(Y[re][0]) : he.continue(Y[re][1]);
            }), !1);
          }), be;
        }, r.prototype.startsWithAnyOf = function() {
          var i = b.apply(E, arguments);
          return i.every(function(u) {
            return typeof u == "string";
          }) ? i.length === 0 ? di(this) : this.inAnyRange(i.map(function(u) {
            return [u, u + wr];
          })) : vn(this, "startsWithAnyOf() only works with strings");
        }, r;
      }();
      function ho(r) {
        return qr(Bi.prototype, function(u, f, h) {
          if (this.db = r, this._ctx = {
            table: u,
            index: f === ":id" ? null : f,
            or: h
          }, this._cmp = this._ascending = ht, this._descending = function(v, _) {
            return ht(_, v);
          }, this._max = function(v, _) {
            return ht(v, _) > 0 ? v : _;
          }, this._min = function(v, _) {
            return ht(v, _) < 0 ? v : _;
          }, this._IDBKeyRange = r._deps.IDBKeyRange, !this._IDBKeyRange)
            throw new H.MissingAPI();
        });
      }
      function qn(r) {
        return kt(function(i) {
          return $i(i), r(i.target.error), !1;
        });
      }
      function $i(r) {
        r.stopPropagation && r.stopPropagation(), r.preventDefault && r.preventDefault();
      }
      var zn = "storagemutated", Vi = "x-storagemutated-1", Xn = ir(null, zn), $o = function() {
        function r() {
        }
        return r.prototype._lock = function() {
          return fe(!Ie.global), ++this._reculock, this._reculock === 1 && !Ie.global && (Ie.lockOwnerFor = this), this;
        }, r.prototype._unlock = function() {
          if (fe(!Ie.global), --this._reculock === 0)
            for (Ie.global || (Ie.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked(); ) {
              var i = this._blockedFuncs.shift();
              try {
                Vn(i[1], i[0]);
              } catch {
              }
            }
          return this;
        }, r.prototype._locked = function() {
          return this._reculock && Ie.lockOwnerFor !== this;
        }, r.prototype.create = function(i) {
          var u = this;
          if (!this.mode)
            return this;
          var f = this.db.idbdb, h = this.db._state.dbOpenError;
          if (fe(!this.idbtrans), !i && !f)
            switch (h && h.name) {
              case "DatabaseClosedError":
                throw new H.DatabaseClosed(h);
              case "MissingAPIError":
                throw new H.MissingAPI(h.message, h);
              default:
                throw new H.OpenFailed(h);
            }
          if (!this.active)
            throw new H.TransactionInactive();
          return fe(this._completion._state === null), i = this.idbtrans = i || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }) : f.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })), i.onerror = kt(function(v) {
            $i(v), u._reject(i.error);
          }), i.onabort = kt(function(v) {
            $i(v), u.active && u._reject(new H.Abort(i.error)), u.active = !1, u.on("abort").fire(v);
          }), i.oncomplete = kt(function() {
            u.active = !1, u._resolve(), "mutatedParts" in i && Xn.storagemutated.fire(i.mutatedParts);
          }), this;
        }, r.prototype._promise = function(i, u, f) {
          var h = this;
          if (i === "readwrite" && this.mode !== "readwrite")
            return jt(new H.ReadOnly("Transaction is readonly"));
          if (!this.active)
            return jt(new H.TransactionInactive());
          if (this._locked())
            return new Ne(function(_, C) {
              h._blockedFuncs.push([function() {
                h._promise(i, u, f).then(_, C);
              }, Ie]);
            });
          if (f)
            return $n(function() {
              var _ = new Ne(function(C, I) {
                h._lock();
                var M = u(C, I, h);
                M && M.then && M.then(C, I);
              });
              return _.finally(function() {
                return h._unlock();
              }), _._lib = !0, _;
            });
          var v = new Ne(function(_, C) {
            var I = u(_, C, h);
            I && I.then && I.then(_, C);
          });
          return v._lib = !0, v;
        }, r.prototype._root = function() {
          return this.parent ? this.parent._root() : this;
        }, r.prototype.waitFor = function(i) {
          var u = this._root(), f = Ne.resolve(i);
          if (u._waitingFor)
            u._waitingFor = u._waitingFor.then(function() {
              return f;
            });
          else {
            u._waitingFor = f, u._waitingQueue = [];
            var h = u.idbtrans.objectStore(u.storeNames[0]);
            (function _() {
              for (++u._spinCount; u._waitingQueue.length; )
                u._waitingQueue.shift()();
              u._waitingFor && (h.get(-1 / 0).onsuccess = _);
            })();
          }
          var v = u._waitingFor;
          return new Ne(function(_, C) {
            f.then(function(I) {
              return u._waitingQueue.push(kt(_.bind(null, I)));
            }, function(I) {
              return u._waitingQueue.push(kt(C.bind(null, I)));
            }).finally(function() {
              u._waitingFor === v && (u._waitingFor = null);
            });
          });
        }, r.prototype.abort = function() {
          this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new H.Abort()));
        }, r.prototype.table = function(i) {
          var u = this._memoizedTables || (this._memoizedTables = {});
          if (ee(u, i))
            return u[i];
          var f = this.schema[i];
          if (!f)
            throw new H.NotFound("Table " + i + " not part of transaction");
          var h = new this.db.Table(i, f, this);
          return h.core = this.db.core.table(i), u[i] = h, h;
        }, r;
      }();
      function Vo(r) {
        return qr($o.prototype, function(u, f, h, v, _) {
          var C = this;
          u !== "readonly" && f.forEach(function(I) {
            var M, Z = (M = h[I]) === null || M === void 0 ? void 0 : M.yProps;
            Z && (f = f.concat(Z.map(function(U) {
              return U.updatesTable;
            })));
          }), this.db = r, this.mode = u, this.storeNames = f, this.schema = h, this.chromeTransactionDurability = v, this.idbtrans = null, this.on = ir(this, "complete", "error", "abort"), this.parent = _ || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Ne(function(I, M) {
            C._resolve = I, C._reject = M;
          }), this._completion.then(function() {
            C.active = !1, C.on.complete.fire();
          }, function(I) {
            var M = C.active;
            return C.active = !1, C.on.error.fire(I), C.parent ? C.parent._reject(I) : M && C.idbtrans && C.idbtrans.abort(), jt(I);
          });
        });
      }
      function on(r, i, u, f, h, v, _, C) {
        return {
          name: r,
          keyPath: i,
          unique: u,
          multi: f,
          auto: h,
          compound: v,
          src: (u && !_ ? "&" : "") + (f ? "*" : "") + (h ? "++" : "") + hi(i),
          type: C
        };
      }
      function hi(r) {
        return typeof r == "string" ? r : r ? "[" + [].join.call(r, "+") + "]" : "";
      }
      function Ur(r, i, u) {
        return {
          name: r,
          primKey: i,
          indexes: u,
          mappedClass: null,
          idxByName: qe(u, function(f) {
            return [f.name, f];
          })
        };
      }
      function ja(r) {
        return r.length === 1 ? r[0] : r;
      }
      var xr = function(r) {
        try {
          return r.only([[]]), xr = function() {
            return [[]];
          }, [[]];
        } catch {
          return xr = function() {
            return wr;
          }, wr;
        }
      };
      function mo(r) {
        return r == null ? function() {
        } : typeof r == "string" ? Ka(r) : function(i) {
          return K(i, r);
        };
      }
      function Ka(r) {
        var i = r.split(".");
        return i.length === 1 ? function(u) {
          return u[r];
        } : function(u) {
          return K(u, r);
        };
      }
      function qi(r) {
        return [].slice.call(r);
      }
      var qo = 0;
      function Un(r) {
        return r == null ? ":id" : typeof r == "string" ? r : "[".concat(r.join("+"), "]");
      }
      function Uo(r, i, u) {
        function f(U, se) {
          var Se = qi(U.objectStoreNames);
          return {
            schema: {
              name: U.name,
              tables: Se.map(function(Y) {
                return se.objectStore(Y);
              }).map(function(Y) {
                var re = Y.keyPath, ce = Y.autoIncrement, me = x(re), ye = re == null, de = {}, be = {
                  name: Y.name,
                  primaryKey: {
                    name: null,
                    isPrimaryKey: !0,
                    outbound: ye,
                    compound: me,
                    keyPath: re,
                    autoIncrement: ce,
                    unique: !0,
                    extractKey: mo(re)
                  },
                  indexes: qi(Y.indexNames).map(function(he) {
                    return Y.index(he);
                  }).map(function(he) {
                    var Ce = he.name, ke = he.unique, Re = he.multiEntry, tt = he.keyPath, pt = x(tt), Ge = {
                      name: Ce,
                      compound: pt,
                      keyPath: tt,
                      unique: ke,
                      multiEntry: Re,
                      extractKey: mo(tt)
                    };
                    return de[Un(tt)] = Ge, Ge;
                  }),
                  getIndexByKeyPath: function(he) {
                    return de[Un(he)];
                  }
                };
                return de[":id"] = be.primaryKey, re != null && (de[Un(re)] = be.primaryKey), be;
              })
            },
            hasGetAll: Se.length > 0 && "getAll" in se.objectStore(Se[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
          };
        }
        function h(U) {
          if (U.type === 3)
            return null;
          if (U.type === 4)
            throw new Error("Cannot convert never type to IDBKeyRange");
          var se = U.lower, Se = U.upper, Y = U.lowerOpen, re = U.upperOpen, ce = se === void 0 ? Se === void 0 ? null : i.upperBound(Se, !!re) : Se === void 0 ? i.lowerBound(se, !!Y) : i.bound(se, Se, !!Y, !!re);
          return ce;
        }
        function v(U) {
          var se = U.name;
          function Se(ce) {
            var me = ce.trans, ye = ce.type, de = ce.keys, be = ce.values, he = ce.range;
            return new Promise(function(Ce, ke) {
              Ce = kt(Ce);
              var Re = me.objectStore(se), tt = Re.keyPath == null, pt = ye === "put" || ye === "add";
              if (!pt && ye !== "delete" && ye !== "deleteRange")
                throw new Error("Invalid operation type: " + ye);
              var Ge = (de || be || { length: 1 }).length;
              if (de && be && de.length !== be.length)
                throw new Error("Given keys array must have same length as given values array.");
              if (Ge === 0)
                return Ce({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              var bt, Xe = [], wt = [], rt = 0, Nt = function(Er) {
                ++rt, $i(Er);
              };
              if (ye === "deleteRange") {
                if (he.type === 4)
                  return Ce({ numFailures: rt, failures: wt, results: [], lastResult: void 0 });
                he.type === 3 ? Xe.push(bt = Re.clear()) : Xe.push(bt = Re.delete(h(he)));
              } else {
                var Bt = pt ? tt ? [be, de] : [be, null] : [de, null], Jn = Bt[0], Fn = Bt[1];
                if (pt)
                  for (var Zn = 0; Zn < Ge; ++Zn)
                    Xe.push(bt = Fn && Fn[Zn] !== void 0 ? Re[ye](Jn[Zn], Fn[Zn]) : Re[ye](Jn[Zn])), bt.onerror = Nt;
                else
                  for (var Zn = 0; Zn < Ge; ++Zn)
                    Xe.push(bt = Re[ye](Jn[Zn])), bt.onerror = Nt;
              }
              var bi = function(Er) {
                var ta = Er.target.result;
                Xe.forEach(function(cr, Ga) {
                  return cr.error != null && (wt[Ga] = cr.error);
                }), Ce({
                  numFailures: rt,
                  failures: wt,
                  results: ye === "delete" ? de : Xe.map(function(cr) {
                    return cr.result;
                  }),
                  lastResult: ta
                });
              };
              bt.onerror = function(Er) {
                Nt(Er), bi(Er);
              }, bt.onsuccess = bi;
            });
          }
          function Y(ce) {
            var me = ce.trans, ye = ce.values, de = ce.query, be = ce.reverse, he = ce.unique;
            return new Promise(function(Ce, ke) {
              Ce = kt(Ce);
              var Re = de.index, tt = de.range, pt = me.objectStore(se), Ge = Re.isPrimaryKey ? pt : pt.index(Re.name), bt = be ? he ? "prevunique" : "prev" : he ? "nextunique" : "next", Xe = ye || !("openKeyCursor" in Ge) ? Ge.openCursor(h(tt), bt) : Ge.openKeyCursor(h(tt), bt);
              Xe.onerror = qn(ke), Xe.onsuccess = kt(function(wt) {
                var rt = Xe.result;
                if (!rt) {
                  Ce(null);
                  return;
                }
                rt.___id = ++qo, rt.done = !1;
                var Nt = rt.continue.bind(rt), Bt = rt.continuePrimaryKey;
                Bt && (Bt = Bt.bind(rt));
                var Jn = rt.advance.bind(rt), Fn = function() {
                  throw new Error("Cursor not started");
                }, Zn = function() {
                  throw new Error("Cursor not stopped");
                };
                rt.trans = me, rt.stop = rt.continue = rt.continuePrimaryKey = rt.advance = Fn, rt.fail = kt(ke), rt.next = function() {
                  var bi = this, Er = 1;
                  return this.start(function() {
                    return Er-- ? bi.continue() : bi.stop();
                  }).then(function() {
                    return bi;
                  });
                }, rt.start = function(bi) {
                  var Er = new Promise(function(cr, Ga) {
                    cr = kt(cr), Xe.onerror = qn(Ga), rt.fail = Ga, rt.stop = function(qf) {
                      rt.stop = rt.continue = rt.continuePrimaryKey = rt.advance = Zn, cr(qf);
                    };
                  }), ta = function() {
                    if (Xe.result)
                      try {
                        bi();
                      } catch (cr) {
                        rt.fail(cr);
                      }
                    else
                      rt.done = !0, rt.start = function() {
                        throw new Error("Cursor behind last entry");
                      }, rt.stop();
                  };
                  return Xe.onsuccess = kt(function(cr) {
                    Xe.onsuccess = ta, ta();
                  }), rt.continue = Nt, rt.continuePrimaryKey = Bt, rt.advance = Jn, ta(), Er;
                }, Ce(rt);
              }, ke);
            });
          }
          function re(ce) {
            return function(me) {
              return new Promise(function(ye, de) {
                ye = kt(ye);
                var be = me.trans, he = me.values, Ce = me.limit, ke = me.query, Re = Ce === 1 / 0 ? void 0 : Ce, tt = ke.index, pt = ke.range, Ge = be.objectStore(se), bt = tt.isPrimaryKey ? Ge : Ge.index(tt.name), Xe = h(pt);
                if (Ce === 0)
                  return ye({ result: [] });
                if (ce) {
                  var wt = he ? bt.getAll(Xe, Re) : bt.getAllKeys(Xe, Re);
                  wt.onsuccess = function(Jn) {
                    return ye({ result: Jn.target.result });
                  }, wt.onerror = qn(de);
                } else {
                  var rt = 0, Nt = he || !("openKeyCursor" in bt) ? bt.openCursor(Xe) : bt.openKeyCursor(Xe), Bt = [];
                  Nt.onsuccess = function(Jn) {
                    var Fn = Nt.result;
                    if (!Fn)
                      return ye({ result: Bt });
                    if (Bt.push(he ? Fn.value : Fn.primaryKey), ++rt === Ce)
                      return ye({ result: Bt });
                    Fn.continue();
                  }, Nt.onerror = qn(de);
                }
              });
            };
          }
          return {
            name: se,
            schema: U,
            mutate: Se,
            getMany: function(ce) {
              var me = ce.trans, ye = ce.keys;
              return new Promise(function(de, be) {
                de = kt(de);
                for (var he = me.objectStore(se), Ce = ye.length, ke = new Array(Ce), Re = 0, tt = 0, pt, Ge = function(rt) {
                  var Nt = rt.target;
                  (ke[Nt._pos] = Nt.result) != null, ++tt === Re && de(ke);
                }, bt = qn(be), Xe = 0; Xe < Ce; ++Xe) {
                  var wt = ye[Xe];
                  wt != null && (pt = he.get(ye[Xe]), pt._pos = Xe, pt.onsuccess = Ge, pt.onerror = bt, ++Re);
                }
                Re === 0 && de(ke);
              });
            },
            get: function(ce) {
              var me = ce.trans, ye = ce.key;
              return new Promise(function(de, be) {
                de = kt(de);
                var he = me.objectStore(se), Ce = he.get(ye);
                Ce.onsuccess = function(ke) {
                  return de(ke.target.result);
                }, Ce.onerror = qn(be);
              });
            },
            query: re(I),
            openCursor: Y,
            count: function(ce) {
              var me = ce.query, ye = ce.trans, de = me.index, be = me.range;
              return new Promise(function(he, Ce) {
                var ke = ye.objectStore(se), Re = de.isPrimaryKey ? ke : ke.index(de.name), tt = h(be), pt = tt ? Re.count(tt) : Re.count();
                pt.onsuccess = kt(function(Ge) {
                  return he(Ge.target.result);
                }), pt.onerror = qn(Ce);
              });
            }
          };
        }
        var _ = f(r, u), C = _.schema, I = _.hasGetAll, M = C.tables.map(function(U) {
          return v(U);
        }), Z = {};
        return M.forEach(function(U) {
          return Z[U.name] = U;
        }), {
          stack: "dbcore",
          transaction: r.transaction.bind(r),
          table: function(U) {
            var se = Z[U];
            if (!se)
              throw new Error("Table '".concat(U, "' not found"));
            return Z[U];
          },
          MIN_KEY: -1 / 0,
          MAX_KEY: xr(i),
          schema: C
        };
      }
      function Go(r, i) {
        return i.reduce(function(u, f) {
          var h = f.create;
          return c(c({}, u), h(u));
        }, r);
      }
      function yo(r, i, u, f) {
        var h = u.IDBKeyRange;
        u.indexedDB;
        var v = Go(Uo(i, h, f), r.dbcore);
        return {
          dbcore: v
        };
      }
      function mi(r, i) {
        var u = i.db, f = yo(r._middlewares, u, r._deps, i);
        r.core = f.dbcore, r.tables.forEach(function(h) {
          var v = h.name;
          r.core.schema.tables.some(function(_) {
            return _.name === v;
          }) && (h.core = r.core.table(v), r[v] instanceof r.Table && (r[v].core = h.core));
        });
      }
      function Ui(r, i, u, f) {
        u.forEach(function(h) {
          var v = f[h];
          i.forEach(function(_) {
            var C = Je(_, h);
            (!C || "value" in C && C.value === void 0) && (_ === r.Transaction.prototype || _ instanceof r.Transaction ? Ee(_, h, {
              get: function() {
                return this.table(h);
              },
              set: function(I) {
                we(this, h, { value: I, writable: !0, configurable: !0, enumerable: !0 });
              }
            }) : _[h] = new r.Table(h, v));
          });
        });
      }
      function Ho(r, i) {
        i.forEach(function(u) {
          for (var f in u)
            u[f] instanceof r.Table && delete u[f];
        });
      }
      function Wo(r, i) {
        return r._cfg.version - i._cfg.version;
      }
      function vo(r, i, u, f) {
        var h = r._dbSchema;
        u.objectStoreNames.contains("$meta") && !h.$meta && (h.$meta = Ur("$meta", Jo("")[0], []), r._storeNames.push("$meta"));
        var v = r._createTransaction("readwrite", r._storeNames, h);
        v.create(u), v._completion.catch(f);
        var _ = v._reject.bind(v), C = Ie.transless || Ie;
        $n(function() {
          if (Ie.trans = v, Ie.transless = C, i === 0)
            g(h).forEach(function(I) {
              go(u, I, h[I].primKey, h[I].indexes);
            }), mi(r, u), Ne.follow(function() {
              return r.on.populate.fire(v);
            }).catch(_);
          else
            return mi(r, u), Yo(r, v, i).then(function(I) {
              return Qo(r, I, v, u);
            }).catch(_);
        });
      }
      function Ms(r, i) {
        Ba(r._dbSchema, i), i.db.version % 10 === 0 && !i.objectStoreNames.contains("$meta") && i.db.createObjectStore("$meta").add(Math.ceil(i.db.version / 10 - 1), "version");
        var u = bo(r, r.idbdb, i);
        Hi(r, r._dbSchema, i);
        for (var f = zo(u, r._dbSchema), h = function(M) {
          if (M.change.length || M.recreate)
            return console.warn("Unable to patch indexes of table ".concat(M.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
          var Z = i.objectStore(M.name);
          M.add.forEach(function(U) {
            Mt && console.debug("Dexie upgrade patch: Creating missing index ".concat(M.name, ".").concat(U.src)), Gi(Z, U);
          });
        }, v = 0, _ = f.change; v < _.length; v++) {
          var C = _[v], I = h(C);
          if (typeof I == "object")
            return I.value;
        }
      }
      function Yo(r, i, u) {
        return i.storeNames.includes("$meta") ? i.table("$meta").get("version").then(function(f) {
          return f ?? u;
        }) : Ne.resolve(u);
      }
      function Qo(r, i, u, f) {
        var h = [], v = r._versions, _ = r._dbSchema = bo(r, r.idbdb, f), C = v.filter(function(M) {
          return M._cfg.version >= i;
        });
        if (C.length === 0)
          return Ne.resolve();
        C.forEach(function(M) {
          h.push(function() {
            var Z = _, U = M._cfg.dbschema;
            Hi(r, Z, f), Hi(r, U, f), _ = r._dbSchema = U;
            var se = zo(Z, U);
            se.add.forEach(function(ye) {
              go(f, ye[0], ye[1].primKey, ye[1].indexes);
            }), se.change.forEach(function(ye) {
              if (ye.recreate)
                throw new H.Upgrade("Not yet support for changing primary key");
              var de = f.objectStore(ye.name);
              ye.add.forEach(function(be) {
                return Gi(de, be);
              }), ye.change.forEach(function(be) {
                de.deleteIndex(be.name), Gi(de, be);
              }), ye.del.forEach(function(be) {
                return de.deleteIndex(be);
              });
            });
            var Se = M._cfg.contentUpgrade;
            if (Se && M._cfg.version > i) {
              mi(r, f), u._memoizedTables = {};
              var Y = it(U);
              se.del.forEach(function(ye) {
                Y[ye] = Z[ye];
              }), Ho(r, [r.Transaction.prototype]), Ui(r, [r.Transaction.prototype], g(Y), Y), u.schema = Y;
              var re = z(Se);
              re && Kr();
              var ce, me = Ne.follow(function() {
                if (ce = Se(u), ce && re) {
                  var ye = lt.bind(null, null);
                  ce.then(ye, ye);
                }
              });
              return ce && typeof ce.then == "function" ? Ne.resolve(ce) : me.then(function() {
                return ce;
              });
            }
          }), h.push(function(Z) {
            var U = M._cfg.dbschema;
            $a(U, Z), Ho(r, [r.Transaction.prototype]), Ui(r, [r.Transaction.prototype], r._storeNames, r._dbSchema), u.schema = r._dbSchema;
          }), h.push(function(Z) {
            r.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(r.idbdb.version / 10) === M._cfg.version ? (r.idbdb.deleteObjectStore("$meta"), delete r._dbSchema.$meta, r._storeNames = r._storeNames.filter(function(U) {
              return U !== "$meta";
            })) : Z.objectStore("$meta").put(M._cfg.version, "version"));
          });
        });
        function I() {
          return h.length ? Ne.resolve(h.shift()(u.idbtrans)).then(I) : Ne.resolve();
        }
        return I().then(function() {
          Ba(_, f);
        });
      }
      function zo(r, i) {
        var u = {
          del: [],
          add: [],
          change: []
        }, f;
        for (f in r)
          i[f] || u.del.push(f);
        for (f in i) {
          var h = r[f], v = i[f];
          if (!h)
            u.add.push([f, v]);
          else {
            var _ = {
              name: f,
              def: v,
              recreate: !1,
              del: [],
              add: [],
              change: []
            };
            if ("" + (h.primKey.keyPath || "") != "" + (v.primKey.keyPath || "") || h.primKey.auto !== v.primKey.auto)
              _.recreate = !0, u.change.push(_);
            else {
              var C = h.idxByName, I = v.idxByName, M = void 0;
              for (M in C)
                I[M] || _.del.push(M);
              for (M in I) {
                var Z = C[M], U = I[M];
                Z ? Z.src !== U.src && _.change.push(U) : _.add.push(U);
              }
              (_.del.length > 0 || _.add.length > 0 || _.change.length > 0) && u.change.push(_);
            }
          }
        }
        return u;
      }
      function go(r, i, u, f) {
        var h = r.db.createObjectStore(i, u.keyPath ? { keyPath: u.keyPath, autoIncrement: u.auto } : { autoIncrement: u.auto });
        return f.forEach(function(v) {
          return Gi(h, v);
        }), h;
      }
      function Ba(r, i) {
        g(r).forEach(function(u) {
          i.db.objectStoreNames.contains(u) || (Mt && console.debug("Dexie: Creating missing table", u), go(i, u, r[u].primKey, r[u].indexes));
        });
      }
      function $a(r, i) {
        [].slice.call(i.db.objectStoreNames).forEach(function(u) {
          return r[u] == null && i.db.deleteObjectStore(u);
        });
      }
      function Gi(r, i) {
        r.createIndex(i.name, i.keyPath, { unique: i.unique, multiEntry: i.multi });
      }
      function bo(r, i, u) {
        var f = {}, h = $e(i.objectStoreNames, 0);
        return h.forEach(function(v) {
          for (var _ = u.objectStore(v), C = _.keyPath, I = on(hi(C), C || "", !0, !1, !!_.autoIncrement, C && typeof C != "string", !0), M = [], Z = 0; Z < _.indexNames.length; ++Z) {
            var U = _.index(_.indexNames[Z]);
            C = U.keyPath;
            var se = on(U.name, C, !!U.unique, !!U.multiEntry, !1, C && typeof C != "string", !1);
            M.push(se);
          }
          f[v] = Ur(v, I, M);
        }), f;
      }
      function Va(r, i, u) {
        r.verno = i.version / 10;
        var f = r._dbSchema = bo(r, i, u);
        r._storeNames = $e(i.objectStoreNames, 0), Ui(r, [r._allTables], g(f), f);
      }
      function Xo(r, i) {
        var u = bo(r, r.idbdb, i), f = zo(u, r._dbSchema);
        return !(f.add.length || f.change.some(function(h) {
          return h.add.length || h.change.length;
        }));
      }
      function Hi(r, i, u) {
        for (var f = u.db.objectStoreNames, h = 0; h < f.length; ++h) {
          var v = f[h], _ = u.objectStore(v);
          r._hasGetAll = "getAll" in _;
          for (var C = 0; C < _.indexNames.length; ++C) {
            var I = _.indexNames[C], M = _.index(I).keyPath, Z = typeof M == "string" ? M : "[" + $e(M).join("+") + "]";
            if (i[v]) {
              var U = i[v].idxByName[Z];
              U && (U.name = I, delete i[v].idxByName[Z], i[v].idxByName[I] = U);
            }
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && y.WorkerGlobalScope && y instanceof y.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (r._hasGetAll = !1);
      }
      function Jo(r) {
        return r.split(",").map(function(i, u) {
          var f, h = i.split(":"), v = (f = h[1]) === null || f === void 0 ? void 0 : f.trim();
          i = h[0].trim();
          var _ = i.replace(/([&*]|\+\+)/g, ""), C = /^\[/.test(_) ? _.match(/^\[(.*)\]$/)[1].split("+") : _;
          return on(_, C || null, /\&/.test(i), /\*/.test(i), /\+\+/.test(i), x(C), u === 0, v);
        });
      }
      var Ls = function() {
        function r() {
        }
        return r.prototype._createTableSchema = function(i, u, f) {
          return Ur(i, u, f);
        }, r.prototype._parseIndexSyntax = function(i) {
          return Jo(i);
        }, r.prototype._parseStoresSpec = function(i, u) {
          var f = this;
          g(i).forEach(function(h) {
            if (i[h] !== null) {
              var v = f._parseIndexSyntax(i[h]), _ = v.shift();
              if (!_)
                throw new H.Schema("Invalid schema for table " + h + ": " + i[h]);
              if (_.unique = !0, _.multi)
                throw new H.Schema("Primary key cannot be multiEntry*");
              v.forEach(function(I) {
                if (I.auto)
                  throw new H.Schema("Only primary key can be marked as autoIncrement (++)");
                if (!I.keyPath)
                  throw new H.Schema("Index must have a name and cannot be an empty string");
              });
              var C = f._createTableSchema(h, _, v);
              u[h] = C;
            }
          });
        }, r.prototype.stores = function(i) {
          var u = this.db;
          this._cfg.storesSource = this._cfg.storesSource ? $(this._cfg.storesSource, i) : i;
          var f = u._versions, h = {}, v = {};
          return f.forEach(function(_) {
            $(h, _._cfg.storesSource), v = _._cfg.dbschema = {}, _._parseStoresSpec(h, v);
          }), u._dbSchema = v, Ho(u, [u._allTables, u, u.Transaction.prototype]), Ui(u, [u._allTables, u, u.Transaction.prototype, this._cfg.tables], g(v), v), u._storeNames = g(v), this;
        }, r.prototype.upgrade = function(i) {
          return this._cfg.contentUpgrade = Qt(this._cfg.contentUpgrade || ve, i), this;
        }, r;
      }();
      function js(r) {
        return qr(Ls.prototype, function(u) {
          this.db = r, this._cfg = {
            version: u,
            storesSource: null,
            dbschema: {},
            tables: {},
            contentUpgrade: null
          };
        });
      }
      function Zo(r, i) {
        var u = r._dbNamesDB;
        return u || (u = r._dbNamesDB = new Wr(co, {
          addons: [],
          indexedDB: r,
          IDBKeyRange: i
        }), u.version(1).stores({ dbnames: "name" })), u.table("dbnames");
      }
      function yi(r) {
        return r && typeof r.databases == "function";
      }
      function ar(r) {
        var i = r.indexedDB, u = r.IDBKeyRange;
        return yi(i) ? Promise.resolve(i.databases()).then(function(f) {
          return f.map(function(h) {
            return h.name;
          }).filter(function(h) {
            return h !== co;
          });
        }) : Zo(i, u).toCollection().primaryKeys();
      }
      function Yt(r, i) {
        var u = r.indexedDB, f = r.IDBKeyRange;
        !yi(u) && i !== co && Zo(u, f).put({ name: i }).catch(ve);
      }
      function wo(r, i) {
        var u = r.indexedDB, f = r.IDBKeyRange;
        !yi(u) && i !== co && Zo(u, f).delete(i).catch(ve);
      }
      function _n(r) {
        return $n(function() {
          return Ie.letThrough = !0, r();
        });
      }
      function Ks() {
        var r = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
        if (!r || !indexedDB.databases)
          return Promise.resolve();
        var i;
        return new Promise(function(u) {
          var f = function() {
            return indexedDB.databases().finally(u);
          };
          i = setInterval(f, 100), f();
        }).finally(function() {
          return clearInterval(i);
        });
      }
      var Wi;
      function _o(r) {
        return !("from" in r);
      }
      var Gt = function(r, i) {
        if (this)
          $(this, arguments.length ? { d: 1, from: r, to: arguments.length > 1 ? i : r } : { d: 0 });
        else {
          var u = new Gt();
          return r && "d" in r && $(u, r), u;
        }
      };
      le(Gt.prototype, (Wi = {
        add: function(r) {
          return sr(this, r), this;
        },
        addKey: function(r) {
          return Gr(this, r, r), this;
        },
        addKeys: function(r) {
          var i = this;
          return r.forEach(function(u) {
            return Gr(i, u, u);
          }), this;
        },
        hasKey: function(r) {
          var i = Yi(this).next(r).value;
          return i && ht(i.from, r) <= 0 && ht(i.to, r) >= 0;
        }
      }, Wi[wn] = function() {
        return Yi(this);
      }, Wi));
      function Gr(r, i, u) {
        var f = ht(i, u);
        if (!isNaN(f)) {
          if (f > 0)
            throw RangeError();
          if (_o(r))
            return $(r, { from: i, to: u, d: 1 });
          var h = r.l, v = r.r;
          if (ht(u, r.from) < 0)
            return h ? Gr(h, i, u) : r.l = { from: i, to: u, d: 1, l: null, r: null }, n(r);
          if (ht(i, r.to) > 0)
            return v ? Gr(v, i, u) : r.r = { from: i, to: u, d: 1, l: null, r: null }, n(r);
          ht(i, r.from) < 0 && (r.from = i, r.l = null, r.d = v ? v.d + 1 : 1), ht(u, r.to) > 0 && (r.to = u, r.r = null, r.d = r.l ? r.l.d + 1 : 1);
          var _ = !r.r;
          h && !r.l && sr(r, h), v && _ && sr(r, v);
        }
      }
      function sr(r, i) {
        function u(f, h) {
          var v = h.from, _ = h.to, C = h.l, I = h.r;
          Gr(f, v, _), C && u(f, C), I && u(f, I);
        }
        _o(i) || u(r, i);
      }
      function ur(r, i) {
        var u = Yi(i), f = u.next();
        if (f.done)
          return !1;
        for (var h = f.value, v = Yi(r), _ = v.next(h.from), C = _.value; !f.done && !_.done; ) {
          if (ht(C.from, h.to) <= 0 && ht(C.to, h.from) >= 0)
            return !0;
          ht(h.from, C.from) < 0 ? h = (f = u.next(C.from)).value : C = (_ = v.next(h.from)).value;
        }
        return !1;
      }
      function Yi(r) {
        var i = _o(r) ? null : { s: 0, n: r };
        return {
          next: function(u) {
            for (var f = arguments.length > 0; i; )
              switch (i.s) {
                case 0:
                  if (i.s = 1, f)
                    for (; i.n.l && ht(u, i.n.from) < 0; )
                      i = { up: i, n: i.n.l, s: 1 };
                  else
                    for (; i.n.l; )
                      i = { up: i, n: i.n.l, s: 1 };
                case 1:
                  if (i.s = 2, !f || ht(u, i.n.to) <= 0)
                    return { value: i.n, done: !1 };
                case 2:
                  if (i.n.r) {
                    i.s = 3, i = { up: i, n: i.n.r, s: 0 };
                    continue;
                  }
                case 3:
                  i = i.up;
              }
            return { done: !0 };
          }
        };
      }
      function n(r) {
        var i, u, f = (((i = r.r) === null || i === void 0 ? void 0 : i.d) || 0) - (((u = r.l) === null || u === void 0 ? void 0 : u.d) || 0), h = f > 1 ? "r" : f < -1 ? "l" : "";
        if (h) {
          var v = h === "r" ? "l" : "r", _ = c({}, r), C = r[h];
          r.from = C.from, r.to = C.to, r[h] = C[h], _[h] = C[v], r[v] = _, _.d = s(_);
        }
        r.d = s(r);
      }
      function s(r) {
        var i = r.r, u = r.l;
        return (i ? u ? Math.max(i.d, u.d) : i.d : u ? u.d : 0) + 1;
      }
      function l(r, i) {
        return g(i).forEach(function(u) {
          r[u] ? sr(r[u], i[u]) : r[u] = Me(i[u]);
        }), r;
      }
      function p(r, i) {
        return r.all || i.all || Object.keys(r).some(function(u) {
          return i[u] && ur(i[u], r[u]);
        });
      }
      var m = {}, w = {}, A = !1;
      function D(r, i) {
        l(w, r), A || (A = !0, setTimeout(function() {
          A = !1;
          var u = w;
          w = {}, B(u, !1);
        }, 0));
      }
      function B(r, i) {
        i === void 0 && (i = !1);
        var u = /* @__PURE__ */ new Set();
        if (r.all)
          for (var f = 0, h = Object.values(m); f < h.length; f++) {
            var v = h[f];
            q(v, r, u, i);
          }
        else
          for (var _ in r) {
            var C = /^idb\:\/\/(.*)\/(.*)\//.exec(_);
            if (C) {
              var I = C[1], M = C[2], v = m["idb://".concat(I, "/").concat(M)];
              v && q(v, r, u, i);
            }
          }
        u.forEach(function(Z) {
          return Z();
        });
      }
      function q(r, i, u, f) {
        for (var h = [], v = 0, _ = Object.entries(r.queries.query); v < _.length; v++) {
          for (var C = _[v], I = C[0], M = C[1], Z = [], U = 0, se = M; U < se.length; U++) {
            var Se = se[U];
            p(i, Se.obsSet) ? Se.subscribers.forEach(function(me) {
              return u.add(me);
            }) : f && Z.push(Se);
          }
          f && h.push([I, Z]);
        }
        if (f)
          for (var Y = 0, re = h; Y < re.length; Y++) {
            var ce = re[Y], I = ce[0], Z = ce[1];
            r.queries.query[I] = Z;
          }
      }
      function Q(r) {
        var i = r._state, u = r._deps.indexedDB;
        if (i.isBeingOpened || r.idbdb)
          return i.dbReadyPromise.then(function() {
            return i.dbOpenError ? jt(i.dbOpenError) : r;
          });
        i.isBeingOpened = !0, i.dbOpenError = null, i.openComplete = !1;
        var f = i.openCanceller, h = Math.round(r.verno * 10), v = !1;
        function _() {
          if (i.openCanceller !== f)
            throw new H.DatabaseClosed("db.open() was cancelled");
        }
        var C = i.dbReadyResolve, I = null, M = !1, Z = function() {
          return new Ne(function(U, se) {
            if (_(), !u)
              throw new H.MissingAPI();
            var Se = r.name, Y = i.autoSchema || !h ? u.open(Se) : u.open(Se, h);
            if (!Y)
              throw new H.MissingAPI();
            Y.onerror = qn(se), Y.onblocked = kt(r._fireOnBlocked), Y.onupgradeneeded = kt(function(re) {
              if (I = Y.transaction, i.autoSchema && !r._options.allowEmptyDB) {
                Y.onerror = $i, I.abort(), Y.result.close();
                var ce = u.deleteDatabase(Se);
                ce.onsuccess = ce.onerror = kt(function() {
                  se(new H.NoSuchDatabase("Database ".concat(Se, " doesnt exist")));
                });
              } else {
                I.onerror = qn(se);
                var me = re.oldVersion > Math.pow(2, 62) ? 0 : re.oldVersion;
                M = me < 1, r.idbdb = Y.result, v && Ms(r, I), vo(r, me / 10, I, se);
              }
            }, se), Y.onsuccess = kt(function() {
              I = null;
              var re = r.idbdb = Y.result, ce = $e(re.objectStoreNames);
              if (ce.length > 0)
                try {
                  var me = re.transaction(ja(ce), "readonly");
                  if (i.autoSchema)
                    Va(r, re, me);
                  else if (Hi(r, r._dbSchema, me), !Xo(r, me) && !v)
                    return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), re.close(), h = re.version + 1, v = !0, U(Z());
                  mi(r, me);
                } catch {
                }
              Br.push(r), re.onversionchange = kt(function(ye) {
                i.vcFired = !0, r.on("versionchange").fire(ye);
              }), re.onclose = kt(function(ye) {
                r.on("close").fire(ye);
              }), M && Yt(r._deps, Se), U();
            }, se);
          }).catch(function(U) {
            switch (U?.name) {
              case "UnknownError":
                if (i.PR1398_maxLoop > 0)
                  return i.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), Z();
                break;
              case "VersionError":
                if (h > 0)
                  return h = 0, Z();
                break;
            }
            return Ne.reject(U);
          });
        };
        return Ne.race([
          f,
          (typeof navigator > "u" ? Ne.resolve() : Ks()).then(Z)
        ]).then(function() {
          return _(), i.onReadyBeingFired = [], Ne.resolve(_n(function() {
            return r.on.ready.fire(r.vip);
          })).then(function U() {
            if (i.onReadyBeingFired.length > 0) {
              var se = i.onReadyBeingFired.reduce(Qt, ve);
              return i.onReadyBeingFired = [], Ne.resolve(_n(function() {
                return se(r.vip);
              })).then(U);
            }
          });
        }).finally(function() {
          i.openCanceller === f && (i.onReadyBeingFired = null, i.isBeingOpened = !1);
        }).catch(function(U) {
          i.dbOpenError = U;
          try {
            I && I.abort();
          } catch {
          }
          return f === i.openCanceller && r._close(), jt(U);
        }).finally(function() {
          i.openComplete = !0, C();
        }).then(function() {
          if (M) {
            var U = {};
            r.tables.forEach(function(se) {
              se.schema.indexes.forEach(function(Se) {
                Se.name && (U["idb://".concat(r.name, "/").concat(se.name, "/").concat(Se.name)] = new Gt(-1 / 0, [[[]]]));
              }), U["idb://".concat(r.name, "/").concat(se.name, "/")] = U["idb://".concat(r.name, "/").concat(se.name, "/:dels")] = new Gt(-1 / 0, [[[]]]);
            }), Xn(zn).fire(U), B(U, !0);
          }
          return r;
        });
      }
      function k(r) {
        var i = function(_) {
          return r.next(_);
        }, u = function(_) {
          return r.throw(_);
        }, f = v(i), h = v(u);
        function v(_) {
          return function(C) {
            var I = _(C), M = I.value;
            return I.done ? M : !M || typeof M.then != "function" ? x(M) ? Promise.all(M).then(f, h) : f(M) : M.then(f, h);
          };
        }
        return v(i)();
      }
      function te(r, i, u) {
        var f = arguments.length;
        if (f < 2)
          throw new H.InvalidArgument("Too few arguments");
        for (var h = new Array(f - 1); --f; )
          h[f - 1] = arguments[f];
        u = h.pop();
        var v = ln(h);
        return [r, v, u];
      }
      function V(r, i, u, f, h) {
        return Ne.resolve().then(function() {
          var v = Ie.transless || Ie, _ = r._createTransaction(i, u, r._dbSchema, f);
          _.explicit = !0;
          var C = {
            trans: _,
            transless: v
          };
          if (f)
            _.idbtrans = f.idbtrans;
          else
            try {
              _.create(), _.idbtrans._explicit = !0, r._state.PR1398_maxLoop = 3;
            } catch (U) {
              return U.name === L.InvalidState && r.isOpen() && --r._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), r.close({ disableAutoOpen: !1 }), r.open().then(function() {
                return V(r, i, u, null, h);
              })) : jt(U);
            }
          var I = z(h);
          I && Kr();
          var M, Z = Ne.follow(function() {
            if (M = h.call(_, _), M)
              if (I) {
                var U = lt.bind(null, null);
                M.then(U, U);
              } else typeof M.next == "function" && typeof M.throw == "function" && (M = k(M));
          }, C);
          return (M && typeof M.then == "function" ? Ne.resolve(M).then(function(U) {
            return _.active ? U : jt(new H.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
          }) : Z.then(function() {
            return M;
          })).then(function(U) {
            return f && _._resolve(), _._completion.then(function() {
              return U;
            });
          }).catch(function(U) {
            return _._reject(U), jt(U);
          });
        });
      }
      function G(r, i, u) {
        for (var f = x(r) ? r.slice() : [r], h = 0; h < u; ++h)
          f.push(i);
        return f;
      }
      function J(r) {
        return c(c({}, r), { table: function(i) {
          var u = r.table(i), f = u.schema, h = {}, v = [];
          function _(re, ce, me) {
            var ye = Un(re), de = h[ye] = h[ye] || [], be = re == null ? 0 : typeof re == "string" ? 1 : re.length, he = ce > 0, Ce = c(c({}, me), { name: he ? "".concat(ye, "(virtual-from:").concat(me.name, ")") : me.name, lowLevelIndex: me, isVirtual: he, keyTail: ce, keyLength: be, extractKey: mo(re), unique: !he && me.unique });
            if (de.push(Ce), Ce.isPrimaryKey || v.push(Ce), be > 1) {
              var ke = be === 2 ? re[0] : re.slice(0, be - 1);
              _(ke, ce + 1, me);
            }
            return de.sort(function(Re, tt) {
              return Re.keyTail - tt.keyTail;
            }), Ce;
          }
          var C = _(f.primaryKey.keyPath, 0, f.primaryKey);
          h[":id"] = [C];
          for (var I = 0, M = f.indexes; I < M.length; I++) {
            var Z = M[I];
            _(Z.keyPath, 0, Z);
          }
          function U(re) {
            var ce = h[Un(re)];
            return ce && ce[0];
          }
          function se(re, ce) {
            return {
              type: re.type === 1 ? 2 : re.type,
              lower: G(re.lower, re.lowerOpen ? r.MAX_KEY : r.MIN_KEY, ce),
              lowerOpen: !0,
              upper: G(re.upper, re.upperOpen ? r.MIN_KEY : r.MAX_KEY, ce),
              upperOpen: !0
            };
          }
          function Se(re) {
            var ce = re.query.index;
            return ce.isVirtual ? c(c({}, re), { query: {
              index: ce.lowLevelIndex,
              range: se(re.query.range, ce.keyTail)
            } }) : re;
          }
          var Y = c(c({}, u), { schema: c(c({}, f), { primaryKey: C, indexes: v, getIndexByKeyPath: U }), count: function(re) {
            return u.count(Se(re));
          }, query: function(re) {
            return u.query(Se(re));
          }, openCursor: function(re) {
            var ce = re.query.index, me = ce.keyTail, ye = ce.isVirtual, de = ce.keyLength;
            if (!ye)
              return u.openCursor(re);
            function be(he) {
              function Ce(Re) {
                Re != null ? he.continue(G(Re, re.reverse ? r.MAX_KEY : r.MIN_KEY, me)) : re.unique ? he.continue(he.key.slice(0, de).concat(re.reverse ? r.MIN_KEY : r.MAX_KEY, me)) : he.continue();
              }
              var ke = Object.create(he, {
                continue: { value: Ce },
                continuePrimaryKey: {
                  value: function(Re, tt) {
                    he.continuePrimaryKey(G(Re, r.MAX_KEY, me), tt);
                  }
                },
                primaryKey: {
                  get: function() {
                    return he.primaryKey;
                  }
                },
                key: {
                  get: function() {
                    var Re = he.key;
                    return de === 1 ? Re[0] : Re.slice(0, de);
                  }
                },
                value: {
                  get: function() {
                    return he.value;
                  }
                }
              });
              return ke;
            }
            return u.openCursor(Se(re)).then(function(he) {
              return he && be(he);
            });
          } });
          return Y;
        } });
      }
      var X = {
        stack: "dbcore",
        name: "VirtualIndexMiddleware",
        level: 1,
        create: J
      };
      function ne(r, i, u, f) {
        return u = u || {}, f = f || "", g(r).forEach(function(h) {
          if (!ee(i, h))
            u[f + h] = void 0;
          else {
            var v = r[h], _ = i[h];
            if (typeof v == "object" && typeof _ == "object" && v && _) {
              var C = Ft(v), I = Ft(_);
              C !== I ? u[f + h] = i[h] : C === "Object" ? ne(v, _, u, f + h + ".") : v !== _ && (u[f + h] = i[h]);
            } else v !== _ && (u[f + h] = i[h]);
          }
        }), g(i).forEach(function(h) {
          ee(r, h) || (u[f + h] = i[h]);
        }), u;
      }
      function oe(r, i) {
        return i.type === "delete" ? i.keys : i.keys || i.values.map(r.extractKey);
      }
      var ae = {
        stack: "dbcore",
        name: "HooksMiddleware",
        level: 2,
        create: function(r) {
          return c(c({}, r), { table: function(i) {
            var u = r.table(i), f = u.schema.primaryKey, h = c(c({}, u), { mutate: function(v) {
              var _ = Ie.trans, C = _.table(i).hook, I = C.deleting, M = C.creating, Z = C.updating;
              switch (v.type) {
                case "add":
                  if (M.fire === ve)
                    break;
                  return _._promise("readwrite", function() {
                    return U(v);
                  }, !0);
                case "put":
                  if (M.fire === ve && Z.fire === ve)
                    break;
                  return _._promise("readwrite", function() {
                    return U(v);
                  }, !0);
                case "delete":
                  if (I.fire === ve)
                    break;
                  return _._promise("readwrite", function() {
                    return U(v);
                  }, !0);
                case "deleteRange":
                  if (I.fire === ve)
                    break;
                  return _._promise("readwrite", function() {
                    return se(v);
                  }, !0);
              }
              return u.mutate(v);
              function U(Y) {
                var re = Ie.trans, ce = Y.keys || oe(f, Y);
                if (!ce)
                  throw new Error("Keys missing");
                return Y = Y.type === "add" || Y.type === "put" ? c(c({}, Y), { keys: ce }) : c({}, Y), Y.type !== "delete" && (Y.values = d([], Y.values)), Y.keys && (Y.keys = d([], Y.keys)), ue(u, Y, ce).then(function(me) {
                  var ye = ce.map(function(de, be) {
                    var he = me[be], Ce = { onerror: null, onsuccess: null };
                    if (Y.type === "delete")
                      I.fire.call(Ce, de, he, re);
                    else if (Y.type === "add" || he === void 0) {
                      var ke = M.fire.call(Ce, de, Y.values[be], re);
                      de == null && ke != null && (de = ke, Y.keys[be] = de, f.outbound || dt(Y.values[be], f.keyPath, de));
                    } else {
                      var Re = ne(he, Y.values[be]), tt = Z.fire.call(Ce, Re, de, he, re);
                      if (tt) {
                        var pt = Y.values[be];
                        Object.keys(tt).forEach(function(Ge) {
                          ee(pt, Ge) ? pt[Ge] = tt[Ge] : dt(pt, Ge, tt[Ge]);
                        });
                      }
                    }
                    return Ce;
                  });
                  return u.mutate(Y).then(function(de) {
                    for (var be = de.failures, he = de.results, Ce = de.numFailures, ke = de.lastResult, Re = 0; Re < ce.length; ++Re) {
                      var tt = he ? he[Re] : ce[Re], pt = ye[Re];
                      tt == null ? pt.onerror && pt.onerror(be[Re]) : pt.onsuccess && pt.onsuccess(
                        Y.type === "put" && me[Re] ? Y.values[Re] : tt
                      );
                    }
                    return { failures: be, results: he, numFailures: Ce, lastResult: ke };
                  }).catch(function(de) {
                    return ye.forEach(function(be) {
                      return be.onerror && be.onerror(de);
                    }), Promise.reject(de);
                  });
                });
              }
              function se(Y) {
                return Se(Y.trans, Y.range, 1e4);
              }
              function Se(Y, re, ce) {
                return u.query({ trans: Y, values: !1, query: { index: f, range: re }, limit: ce }).then(function(me) {
                  var ye = me.result;
                  return U({ type: "delete", keys: ye, trans: Y }).then(function(de) {
                    return de.numFailures > 0 ? Promise.reject(de.failures[0]) : ye.length < ce ? { failures: [], numFailures: 0, lastResult: void 0 } : Se(Y, c(c({}, re), { lower: ye[ye.length - 1], lowerOpen: !0 }), ce);
                  });
                });
              }
            } });
            return h;
          } });
        }
      };
      function ue(r, i, u) {
        return i.type === "add" ? Promise.resolve([]) : r.getMany({ trans: i.trans, keys: u, cache: "immutable" });
      }
      function _e(r, i, u) {
        try {
          if (!i || i.keys.length < r.length)
            return null;
          for (var f = [], h = 0, v = 0; h < i.keys.length && v < r.length; ++h)
            ht(i.keys[h], r[v]) === 0 && (f.push(u ? Ot(i.values[h]) : i.values[h]), ++v);
          return f.length === r.length ? f : null;
        } catch {
          return null;
        }
      }
      var Ae = {
        stack: "dbcore",
        level: -1,
        create: function(r) {
          return {
            table: function(i) {
              var u = r.table(i);
              return c(c({}, u), { getMany: function(f) {
                if (!f.cache)
                  return u.getMany(f);
                var h = _e(f.keys, f.trans._cache, f.cache === "clone");
                return h ? Ne.resolve(h) : u.getMany(f).then(function(v) {
                  return f.trans._cache = {
                    keys: f.keys,
                    values: f.cache === "clone" ? Ot(v) : v
                  }, v;
                });
              }, mutate: function(f) {
                return f.type !== "add" && (f.trans._cache = null), u.mutate(f);
              } });
            }
          };
        }
      };
      function xe(r, i) {
        return r.trans.mode === "readonly" && !!r.subscr && !r.trans.explicit && r.trans.db._options.cache !== "disabled" && !i.schema.primaryKey.outbound;
      }
      function Te(r, i) {
        switch (r) {
          case "query":
            return i.values && !i.unique;
          case "get":
            return !1;
          case "getMany":
            return !1;
          case "count":
            return !1;
          case "openCursor":
            return !1;
        }
      }
      var je = {
        stack: "dbcore",
        level: 0,
        name: "Observability",
        create: function(r) {
          var i = r.schema.name, u = new Gt(r.MIN_KEY, r.MAX_KEY);
          return c(c({}, r), { transaction: function(f, h, v) {
            if (Ie.subscr && h !== "readonly")
              throw new H.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Ie.querier));
            return r.transaction(f, h, v);
          }, table: function(f) {
            var h = r.table(f), v = h.schema, _ = v.primaryKey, C = v.indexes, I = _.extractKey, M = _.outbound, Z = _.autoIncrement && C.filter(function(Y) {
              return Y.compound && Y.keyPath.includes(_.keyPath);
            }), U = c(c({}, h), { mutate: function(Y) {
              var re, ce, me = Y.trans, ye = Y.mutatedParts || (Y.mutatedParts = {}), de = function(Xe) {
                var wt = "idb://".concat(i, "/").concat(f, "/").concat(Xe);
                return ye[wt] || (ye[wt] = new Gt());
              }, be = de(""), he = de(":dels"), Ce = Y.type, ke = Y.type === "deleteRange" ? [Y.range] : Y.type === "delete" ? [Y.keys] : Y.values.length < 50 ? [oe(_, Y).filter(function(Xe) {
                return Xe;
              }), Y.values] : [], Re = ke[0], tt = ke[1], pt = Y.trans._cache;
              if (x(Re)) {
                be.addKeys(Re);
                var Ge = Ce === "delete" || Re.length === tt.length ? _e(Re, pt) : null;
                Ge || he.addKeys(Re), (Ge || tt) && Oe(de, v, Ge, tt);
              } else if (Re) {
                var bt = {
                  from: (re = Re.lower) !== null && re !== void 0 ? re : r.MIN_KEY,
                  to: (ce = Re.upper) !== null && ce !== void 0 ? ce : r.MAX_KEY
                };
                he.add(bt), be.add(bt);
              } else
                be.add(u), he.add(u), v.indexes.forEach(function(Xe) {
                  return de(Xe.name).add(u);
                });
              return h.mutate(Y).then(function(Xe) {
                return Re && (Y.type === "add" || Y.type === "put") && (be.addKeys(Xe.results), Z && Z.forEach(function(wt) {
                  for (var rt = Y.values.map(function(Fn) {
                    return wt.extractKey(Fn);
                  }), Nt = wt.keyPath.findIndex(function(Fn) {
                    return Fn === _.keyPath;
                  }), Bt = 0, Jn = Xe.results.length; Bt < Jn; ++Bt)
                    rt[Bt][Nt] = Xe.results[Bt];
                  de(wt.name).addKeys(rt);
                })), me.mutatedParts = l(me.mutatedParts || {}, ye), Xe;
              });
            } }), se = function(Y) {
              var re, ce, me = Y.query, ye = me.index, de = me.range;
              return [
                ye,
                new Gt((re = de.lower) !== null && re !== void 0 ? re : r.MIN_KEY, (ce = de.upper) !== null && ce !== void 0 ? ce : r.MAX_KEY)
              ];
            }, Se = {
              get: function(Y) {
                return [_, new Gt(Y.key)];
              },
              getMany: function(Y) {
                return [_, new Gt().addKeys(Y.keys)];
              },
              count: se,
              query: se,
              openCursor: se
            };
            return g(Se).forEach(function(Y) {
              U[Y] = function(re) {
                var ce = Ie.subscr, me = !!ce, ye = xe(Ie, h) && Te(Y, re), de = ye ? re.obsSet = {} : ce;
                if (me) {
                  var be = function(Ge) {
                    var bt = "idb://".concat(i, "/").concat(f, "/").concat(Ge);
                    return de[bt] || (de[bt] = new Gt());
                  }, he = be(""), Ce = be(":dels"), ke = Se[Y](re), Re = ke[0], tt = ke[1];
                  if (Y === "query" && Re.isPrimaryKey && !re.values ? Ce.add(tt) : be(Re.name || "").add(tt), !Re.isPrimaryKey)
                    if (Y === "count")
                      Ce.add(u);
                    else {
                      var pt = Y === "query" && M && re.values && h.query(c(c({}, re), { values: !1 }));
                      return h[Y].apply(this, arguments).then(function(Ge) {
                        if (Y === "query") {
                          if (M && re.values)
                            return pt.then(function(rt) {
                              var Nt = rt.result;
                              return he.addKeys(Nt), Ge;
                            });
                          var bt = re.values ? Ge.result.map(I) : Ge.result;
                          re.values ? he.addKeys(bt) : Ce.addKeys(bt);
                        } else if (Y === "openCursor") {
                          var Xe = Ge, wt = re.values;
                          return Xe && Object.create(Xe, {
                            key: {
                              get: function() {
                                return Ce.addKey(Xe.primaryKey), Xe.key;
                              }
                            },
                            primaryKey: {
                              get: function() {
                                var rt = Xe.primaryKey;
                                return Ce.addKey(rt), rt;
                              }
                            },
                            value: {
                              get: function() {
                                return wt && he.addKey(Xe.primaryKey), Xe.value;
                              }
                            }
                          });
                        }
                        return Ge;
                      });
                    }
                }
                return h[Y].apply(this, arguments);
              };
            }), U;
          } });
        }
      };
      function Oe(r, i, u, f) {
        function h(v) {
          var _ = r(v.name || "");
          function C(M) {
            return M != null ? v.extractKey(M) : null;
          }
          var I = function(M) {
            return v.multiEntry && x(M) ? M.forEach(function(Z) {
              return _.addKey(Z);
            }) : _.addKey(M);
          };
          (u || f).forEach(function(M, Z) {
            var U = u && C(u[Z]), se = f && C(f[Z]);
            ht(U, se) !== 0 && (U != null && I(U), se != null && I(se));
          });
        }
        i.indexes.forEach(h);
      }
      function Be(r, i, u) {
        if (u.numFailures === 0)
          return i;
        if (i.type === "deleteRange")
          return null;
        var f = i.keys ? i.keys.length : "values" in i && i.values ? i.values.length : 1;
        if (u.numFailures === f)
          return null;
        var h = c({}, i);
        return x(h.keys) && (h.keys = h.keys.filter(function(v, _) {
          return !(_ in u.failures);
        })), "values" in h && x(h.values) && (h.values = h.values.filter(function(v, _) {
          return !(_ in u.failures);
        })), h;
      }
      function ft(r, i) {
        return i.lower === void 0 ? !0 : i.lowerOpen ? ht(r, i.lower) > 0 : ht(r, i.lower) >= 0;
      }
      function gt(r, i) {
        return i.upper === void 0 ? !0 : i.upperOpen ? ht(r, i.upper) < 0 : ht(r, i.upper) <= 0;
      }
      function at(r, i) {
        return ft(r, i) && gt(r, i);
      }
      function Kt(r, i, u, f, h, v) {
        if (!u || u.length === 0)
          return r;
        var _ = i.query.index, C = _.multiEntry, I = i.query.range, M = f.schema.primaryKey, Z = M.extractKey, U = _.extractKey, se = (_.lowLevelIndex || _).extractKey, Se = u.reduce(function(Y, re) {
          var ce = Y, me = [];
          if (re.type === "add" || re.type === "put")
            for (var ye = new Gt(), de = re.values.length - 1; de >= 0; --de) {
              var be = re.values[de], he = Z(be);
              if (!ye.hasKey(he)) {
                var Ce = U(be);
                (C && x(Ce) ? Ce.some(function(Ge) {
                  return at(Ge, I);
                }) : at(Ce, I)) && (ye.addKey(he), me.push(be));
              }
            }
          switch (re.type) {
            case "add": {
              var ke = new Gt().addKeys(i.values ? Y.map(function(Ge) {
                return Z(Ge);
              }) : Y);
              ce = Y.concat(i.values ? me.filter(function(Ge) {
                var bt = Z(Ge);
                return ke.hasKey(bt) ? !1 : (ke.addKey(bt), !0);
              }) : me.map(function(Ge) {
                return Z(Ge);
              }).filter(function(Ge) {
                return ke.hasKey(Ge) ? !1 : (ke.addKey(Ge), !0);
              }));
              break;
            }
            case "put": {
              var Re = new Gt().addKeys(re.values.map(function(Ge) {
                return Z(Ge);
              }));
              ce = Y.filter(
                function(Ge) {
                  return !Re.hasKey(i.values ? Z(Ge) : Ge);
                }
              ).concat(
                i.values ? me : me.map(function(Ge) {
                  return Z(Ge);
                })
              );
              break;
            }
            case "delete":
              var tt = new Gt().addKeys(re.keys);
              ce = Y.filter(function(Ge) {
                return !tt.hasKey(i.values ? Z(Ge) : Ge);
              });
              break;
            case "deleteRange":
              var pt = re.range;
              ce = Y.filter(function(Ge) {
                return !at(Z(Ge), pt);
              });
              break;
          }
          return ce;
        }, r);
        return Se === r ? r : (Se.sort(function(Y, re) {
          return ht(se(Y), se(re)) || ht(Z(Y), Z(re));
        }), i.limit && i.limit < 1 / 0 && (Se.length > i.limit ? Se.length = i.limit : r.length === i.limit && Se.length < i.limit && (h.dirty = !0)), v ? Object.freeze(Se) : Se);
      }
      function st(r, i) {
        return ht(r.lower, i.lower) === 0 && ht(r.upper, i.upper) === 0 && !!r.lowerOpen == !!i.lowerOpen && !!r.upperOpen == !!i.upperOpen;
      }
      function dn(r, i, u, f) {
        if (r === void 0)
          return i !== void 0 ? -1 : 0;
        if (i === void 0)
          return 1;
        var h = ht(r, i);
        if (h === 0) {
          if (u && f)
            return 0;
          if (u)
            return 1;
          if (f)
            return -1;
        }
        return h;
      }
      function pn(r, i, u, f) {
        if (r === void 0)
          return i !== void 0 ? 1 : 0;
        if (i === void 0)
          return -1;
        var h = ht(r, i);
        if (h === 0) {
          if (u && f)
            return 0;
          if (u)
            return -1;
          if (f)
            return 1;
        }
        return h;
      }
      function So(r, i) {
        return dn(r.lower, i.lower, r.lowerOpen, i.lowerOpen) <= 0 && pn(r.upper, i.upper, r.upperOpen, i.upperOpen) >= 0;
      }
      function gn(r, i, u, f) {
        var h = m["idb://".concat(r, "/").concat(i)];
        if (!h)
          return [];
        var v = h.queries[u];
        if (!v)
          return [null, !1, h, null];
        var _ = f.query ? f.query.index.name : null, C = v[_ || ""];
        if (!C)
          return [null, !1, h, null];
        switch (u) {
          case "query":
            var I = C.find(function(U) {
              return U.req.limit === f.limit && U.req.values === f.values && st(U.req.query.range, f.query.range);
            });
            if (I)
              return [
                I,
                !0,
                h,
                C
              ];
            var M = C.find(function(U) {
              var se = "limit" in U.req ? U.req.limit : 1 / 0;
              return se >= f.limit && (f.values ? U.req.values : !0) && So(U.req.query.range, f.query.range);
            });
            return [M, !1, h, C];
          case "count":
            var Z = C.find(function(U) {
              return st(U.req.query.range, f.query.range);
            });
            return [Z, !!Z, h, C];
        }
      }
      function Hr(r, i, u, f) {
        r.subscribers.add(u), f.addEventListener("abort", function() {
          r.subscribers.delete(u), r.subscribers.size === 0 && ea(r, i);
        });
      }
      function ea(r, i) {
        setTimeout(function() {
          r.subscribers.size === 0 && zt(i, r);
        }, 3e3);
      }
      var Mf = {
        stack: "dbcore",
        level: 0,
        name: "Cache",
        create: function(r) {
          var i = r.schema.name, u = c(c({}, r), { transaction: function(f, h, v) {
            var _ = r.transaction(f, h, v);
            if (h === "readwrite") {
              var C = new AbortController(), I = C.signal, M = function(Z) {
                return function() {
                  if (C.abort(), h === "readwrite") {
                    for (var U = /* @__PURE__ */ new Set(), se = 0, Se = f; se < Se.length; se++) {
                      var Y = Se[se], re = m["idb://".concat(i, "/").concat(Y)];
                      if (re) {
                        var ce = r.table(Y), me = re.optimisticOps.filter(function(wt) {
                          return wt.trans === _;
                        });
                        if (_._explicit && Z && _.mutatedParts)
                          for (var ye = 0, de = Object.values(re.queries.query); ye < de.length; ye++)
                            for (var be = de[ye], he = 0, Ce = be.slice(); he < Ce.length; he++) {
                              var ke = Ce[he];
                              p(ke.obsSet, _.mutatedParts) && (zt(be, ke), ke.subscribers.forEach(function(wt) {
                                return U.add(wt);
                              }));
                            }
                        else if (me.length > 0) {
                          re.optimisticOps = re.optimisticOps.filter(function(wt) {
                            return wt.trans !== _;
                          });
                          for (var Re = 0, tt = Object.values(re.queries.query); Re < tt.length; Re++)
                            for (var be = tt[Re], pt = 0, Ge = be.slice(); pt < Ge.length; pt++) {
                              var ke = Ge[pt];
                              if (ke.res != null && _.mutatedParts)
                                if (Z && !ke.dirty) {
                                  var bt = Object.isFrozen(ke.res), Xe = Kt(ke.res, ke.req, me, ce, ke, bt);
                                  ke.dirty ? (zt(be, ke), ke.subscribers.forEach(function(Nt) {
                                    return U.add(Nt);
                                  })) : Xe !== ke.res && (ke.res = Xe, ke.promise = Ne.resolve({ result: Xe }));
                                } else
                                  ke.dirty && zt(be, ke), ke.subscribers.forEach(function(Nt) {
                                    return U.add(Nt);
                                  });
                            }
                        }
                      }
                    }
                    U.forEach(function(wt) {
                      return wt();
                    });
                  }
                };
              };
              _.addEventListener("abort", M(!1), {
                signal: I
              }), _.addEventListener("error", M(!1), {
                signal: I
              }), _.addEventListener("complete", M(!0), {
                signal: I
              });
            }
            return _;
          }, table: function(f) {
            var h = r.table(f), v = h.schema.primaryKey, _ = c(c({}, h), { mutate: function(C) {
              var I = Ie.trans;
              if (v.outbound || I.db._options.cache === "disabled" || I.explicit || I.idbtrans.mode !== "readwrite")
                return h.mutate(C);
              var M = m["idb://".concat(i, "/").concat(f)];
              if (!M)
                return h.mutate(C);
              var Z = h.mutate(C);
              return (C.type === "add" || C.type === "put") && (C.values.length >= 50 || oe(v, C).some(function(U) {
                return U == null;
              })) ? Z.then(function(U) {
                var se = c(c({}, C), { values: C.values.map(function(Y, re) {
                  var ce;
                  if (U.failures[re])
                    return Y;
                  var me = !((ce = v.keyPath) === null || ce === void 0) && ce.includes(".") ? Ot(Y) : c({}, Y);
                  return dt(me, v.keyPath, U.results[re]), me;
                }) }), Se = Be(M, se, U);
                M.optimisticOps.push(Se), queueMicrotask(function() {
                  return C.mutatedParts && D(C.mutatedParts);
                });
              }) : (M.optimisticOps.push(C), C.mutatedParts && D(C.mutatedParts), Z.then(function(U) {
                if (U.numFailures > 0) {
                  zt(M.optimisticOps, C);
                  var se = Be(M, C, U);
                  se && M.optimisticOps.push(se), C.mutatedParts && D(C.mutatedParts);
                }
              }), Z.catch(function() {
                zt(M.optimisticOps, C), C.mutatedParts && D(C.mutatedParts);
              })), Z;
            }, query: function(C) {
              var I;
              if (!xe(Ie, h) || !Te("query", C))
                return h.query(C);
              var M = ((I = Ie.trans) === null || I === void 0 ? void 0 : I.db._options.cache) === "immutable", Z = Ie, U = Z.requery, se = Z.signal, Se = gn(i, f, "query", C), Y = Se[0], re = Se[1], ce = Se[2], me = Se[3];
              if (Y && re)
                Y.obsSet = C.obsSet;
              else {
                var ye = h.query(C).then(function(de) {
                  var be = de.result;
                  if (Y && (Y.res = be), M) {
                    for (var he = 0, Ce = be.length; he < Ce; ++he)
                      Object.freeze(be[he]);
                    Object.freeze(be);
                  } else
                    de.result = Ot(be);
                  return de;
                }).catch(function(de) {
                  return me && Y && zt(me, Y), Promise.reject(de);
                });
                Y = {
                  obsSet: C.obsSet,
                  promise: ye,
                  subscribers: /* @__PURE__ */ new Set(),
                  type: "query",
                  req: C,
                  dirty: !1
                }, me ? me.push(Y) : (me = [Y], ce || (ce = m["idb://".concat(i, "/").concat(f)] = {
                  queries: {
                    query: {},
                    count: {}
                  },
                  objs: /* @__PURE__ */ new Map(),
                  optimisticOps: [],
                  unsignaledParts: {}
                }), ce.queries.query[C.query.index.name || ""] = me);
              }
              return Hr(Y, me, U, se), Y.promise.then(function(de) {
                return {
                  result: Kt(de.result, C, ce?.optimisticOps, h, Y, M)
                };
              });
            } });
            return _;
          } });
          return u;
        }
      };
      function qa(r, i) {
        return new Proxy(r, {
          get: function(u, f, h) {
            return f === "db" ? i : Reflect.get(u, f, h);
          }
        });
      }
      var Wr = function() {
        function r(i, u) {
          var f = this;
          this._middlewares = {}, this.verno = 0;
          var h = r.dependencies;
          this._options = u = c({
            addons: r.addons,
            autoOpen: !0,
            indexedDB: h.indexedDB,
            IDBKeyRange: h.IDBKeyRange,
            cache: "cloned"
          }, u), this._deps = {
            indexedDB: u.indexedDB,
            IDBKeyRange: u.IDBKeyRange
          };
          var v = u.addons;
          this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
          var _ = {
            dbOpenError: null,
            isBeingOpened: !1,
            onReadyBeingFired: null,
            openComplete: !1,
            dbReadyResolve: ve,
            dbReadyPromise: null,
            cancelOpen: ve,
            openCanceller: null,
            autoSchema: !0,
            PR1398_maxLoop: 3,
            autoOpen: u.autoOpen
          };
          _.dbReadyPromise = new Ne(function(I) {
            _.dbReadyResolve = I;
          }), _.openCanceller = new Ne(function(I, M) {
            _.cancelOpen = M;
          }), this._state = _, this.name = i, this.on = ir(this, "populate", "blocked", "versionchange", "close", { ready: [Qt, ve] }), this.once = function(I, M) {
            var Z = function() {
              for (var U = [], se = 0; se < arguments.length; se++)
                U[se] = arguments[se];
              f.on(I).unsubscribe(Z), M.apply(f, U);
            };
            return f.on(I, Z);
          }, this.on.ready.subscribe = Fe(this.on.ready.subscribe, function(I) {
            return function(M, Z) {
              r.vip(function() {
                var U = f._state;
                if (U.openComplete)
                  U.dbOpenError || Ne.resolve().then(M), Z && I(M);
                else if (U.onReadyBeingFired)
                  U.onReadyBeingFired.push(M), Z && I(M);
                else {
                  I(M);
                  var se = f;
                  Z || I(function Se() {
                    se.on.ready.unsubscribe(M), se.on.ready.unsubscribe(Se);
                  });
                }
              });
            };
          }), this.Collection = Ns(this), this.Table = Sr(this), this.Transaction = Vo(this), this.Version = js(this), this.WhereClause = ho(this), this.on("versionchange", function(I) {
            I.newVersion > 0 ? console.warn("Another connection wants to upgrade database '".concat(f.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(f.name, "'. Closing db now to resume the delete request.")), f.close({ disableAutoOpen: !1 });
          }), this.on("blocked", function(I) {
            !I.newVersion || I.newVersion < I.oldVersion ? console.warn("Dexie.delete('".concat(f.name, "') was blocked")) : console.warn("Upgrade '".concat(f.name, "' blocked by other connection holding version ").concat(I.oldVersion / 10));
          }), this._maxKey = xr(u.IDBKeyRange), this._createTransaction = function(I, M, Z, U) {
            return new f.Transaction(I, M, Z, f._options.chromeTransactionDurability, U);
          }, this._fireOnBlocked = function(I) {
            f.on("blocked").fire(I), Br.filter(function(M) {
              return M.name === f.name && M !== f && !M._state.vcFired;
            }).map(function(M) {
              return M.on("versionchange").fire(I);
            });
          }, this.use(Ae), this.use(Mf), this.use(je), this.use(X), this.use(ae);
          var C = new Proxy(this, {
            get: function(I, M, Z) {
              if (M === "_vip")
                return !0;
              if (M === "table")
                return function(se) {
                  return qa(f.table(se), C);
                };
              var U = Reflect.get(I, M, Z);
              return U instanceof si ? qa(U, C) : M === "tables" ? U.map(function(se) {
                return qa(se, C);
              }) : M === "_createTransaction" ? function() {
                var se = U.apply(this, arguments);
                return qa(se, C);
              } : U;
            }
          });
          this.vip = C, v.forEach(function(I) {
            return I(f);
          });
        }
        return r.prototype.version = function(i) {
          if (isNaN(i) || i < 0.1)
            throw new H.Type("Given version is not a positive number");
          if (i = Math.round(i * 10) / 10, this.idbdb || this._state.isBeingOpened)
            throw new H.Schema("Cannot add version when database is open");
          this.verno = Math.max(this.verno, i);
          var u = this._versions, f = u.filter(function(h) {
            return h._cfg.version === i;
          })[0];
          return f || (f = new this.Version(i), u.push(f), u.sort(Wo), f.stores({}), this._state.autoSchema = !1, f);
        }, r.prototype._whenReady = function(i) {
          var u = this;
          return this.idbdb && (this._state.openComplete || Ie.letThrough || this._vip) ? i() : new Ne(function(f, h) {
            if (u._state.openComplete)
              return h(new H.DatabaseClosed(u._state.dbOpenError));
            if (!u._state.isBeingOpened) {
              if (!u._state.autoOpen) {
                h(new H.DatabaseClosed());
                return;
              }
              u.open().catch(ve);
            }
            u._state.dbReadyPromise.then(f, h);
          }).then(i);
        }, r.prototype.use = function(i) {
          var u = i.stack, f = i.create, h = i.level, v = i.name;
          v && this.unuse({ stack: u, name: v });
          var _ = this._middlewares[u] || (this._middlewares[u] = []);
          return _.push({ stack: u, create: f, level: h ?? 10, name: v }), _.sort(function(C, I) {
            return C.level - I.level;
          }), this;
        }, r.prototype.unuse = function(i) {
          var u = i.stack, f = i.name, h = i.create;
          return u && this._middlewares[u] && (this._middlewares[u] = this._middlewares[u].filter(function(v) {
            return h ? v.create !== h : f ? v.name !== f : !1;
          })), this;
        }, r.prototype.open = function() {
          var i = this;
          return Vn(
            Bn,
            function() {
              return Q(i);
            }
          );
        }, r.prototype._close = function() {
          this.on.close.fire(new CustomEvent("close"));
          var i = this._state, u = Br.indexOf(this);
          if (u >= 0 && Br.splice(u, 1), this.idbdb) {
            try {
              this.idbdb.close();
            } catch {
            }
            this.idbdb = null;
          }
          i.isBeingOpened || (i.dbReadyPromise = new Ne(function(f) {
            i.dbReadyResolve = f;
          }), i.openCanceller = new Ne(function(f, h) {
            i.cancelOpen = h;
          }));
        }, r.prototype.close = function(i) {
          var u = i === void 0 ? { disableAutoOpen: !0 } : i, f = u.disableAutoOpen, h = this._state;
          f ? (h.isBeingOpened && h.cancelOpen(new H.DatabaseClosed()), this._close(), h.autoOpen = !1, h.dbOpenError = new H.DatabaseClosed()) : (this._close(), h.autoOpen = this._options.autoOpen || h.isBeingOpened, h.openComplete = !1, h.dbOpenError = null);
        }, r.prototype.delete = function(i) {
          var u = this;
          i === void 0 && (i = { disableAutoOpen: !0 });
          var f = arguments.length > 0 && typeof arguments[0] != "object", h = this._state;
          return new Ne(function(v, _) {
            var C = function() {
              u.close(i);
              var I = u._deps.indexedDB.deleteDatabase(u.name);
              I.onsuccess = kt(function() {
                wo(u._deps, u.name), v();
              }), I.onerror = qn(_), I.onblocked = u._fireOnBlocked;
            };
            if (f)
              throw new H.InvalidArgument("Invalid closeOptions argument to db.delete()");
            h.isBeingOpened ? h.dbReadyPromise.then(C) : C();
          });
        }, r.prototype.backendDB = function() {
          return this.idbdb;
        }, r.prototype.isOpen = function() {
          return this.idbdb !== null;
        }, r.prototype.hasBeenClosed = function() {
          var i = this._state.dbOpenError;
          return i && i.name === "DatabaseClosed";
        }, r.prototype.hasFailed = function() {
          return this._state.dbOpenError !== null;
        }, r.prototype.dynamicallyOpened = function() {
          return this._state.autoSchema;
        }, Object.defineProperty(r.prototype, "tables", {
          get: function() {
            var i = this;
            return g(this._allTables).map(function(u) {
              return i._allTables[u];
            });
          },
          enumerable: !1,
          configurable: !0
        }), r.prototype.transaction = function() {
          var i = te.apply(this, arguments);
          return this._transaction.apply(this, i);
        }, r.prototype._transaction = function(i, u, f) {
          var h = this, v = Ie.trans;
          (!v || v.db !== this || i.indexOf("!") !== -1) && (v = null);
          var _ = i.indexOf("?") !== -1;
          i = i.replace("!", "").replace("?", "");
          var C, I;
          try {
            if (I = u.map(function(Z) {
              var U = Z instanceof h.Table ? Z.name : Z;
              if (typeof U != "string")
                throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
              return U;
            }), i == "r" || i === vt)
              C = vt;
            else if (i == "rw" || i == lo)
              C = lo;
            else
              throw new H.InvalidArgument("Invalid transaction mode: " + i);
            if (v) {
              if (v.mode === vt && C === lo)
                if (_)
                  v = null;
                else
                  throw new H.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              v && I.forEach(function(Z) {
                if (v && v.storeNames.indexOf(Z) === -1)
                  if (_)
                    v = null;
                  else
                    throw new H.SubTransaction("Table " + Z + " not included in parent transaction.");
              }), _ && v && !v.active && (v = null);
            }
          } catch (Z) {
            return v ? v._promise(null, function(U, se) {
              se(Z);
            }) : jt(Z);
          }
          var M = V.bind(null, this, C, I, v, f);
          return v ? v._promise(C, M, "lock") : Ie.trans ? Vn(Ie.transless, function() {
            return h._whenReady(M);
          }) : this._whenReady(M);
        }, r.prototype.table = function(i) {
          if (!ee(this._allTables, i))
            throw new H.InvalidTable("Table ".concat(i, " does not exist"));
          return this._allTables[i];
        }, r;
      }(), Lf = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", jf = function() {
        function r(i) {
          this._subscribe = i;
        }
        return r.prototype.subscribe = function(i, u, f) {
          return this._subscribe(!i || typeof i == "function" ? { next: i, error: u, complete: f } : i);
        }, r.prototype[Lf] = function() {
          return this;
        }, r;
      }(), Ua;
      try {
        Ua = {
          indexedDB: y.indexedDB || y.mozIndexedDB || y.webkitIndexedDB || y.msIndexedDB,
          IDBKeyRange: y.IDBKeyRange || y.webkitIDBKeyRange
        };
      } catch {
        Ua = { indexedDB: null, IDBKeyRange: null };
      }
      function Zu(r) {
        var i = !1, u, f = new jf(function(h) {
          var v = z(r);
          function _(me) {
            var ye = Lr();
            try {
              v && Kr();
              var de = $n(r, me);
              return v && (de = de.finally(lt)), de;
            } finally {
              ye && Rn();
            }
          }
          var C = !1, I, M = {}, Z = {}, U = {
            get closed() {
              return C;
            },
            unsubscribe: function() {
              C || (C = !0, I && I.abort(), se && Xn.storagemutated.unsubscribe(re));
            }
          };
          h.start && h.start(U);
          var se = !1, Se = function() {
            return br(ce);
          };
          function Y() {
            return p(Z, M);
          }
          var re = function(me) {
            l(M, me), Y() && Se();
          }, ce = function() {
            if (!(C || !Ua.indexedDB)) {
              M = {};
              var me = {};
              I && I.abort(), I = new AbortController();
              var ye = {
                subscr: me,
                signal: I.signal,
                requery: Se,
                querier: r,
                trans: null
              }, de = _(ye);
              Promise.resolve(de).then(function(be) {
                i = !0, u = be, !(C || ye.signal.aborted) && (M = {}, Z = me, !et(Z) && !se && (Xn(zn, re), se = !0), br(function() {
                  return !C && h.next && h.next(be);
                }));
              }, function(be) {
                i = !1, ["DatabaseClosedError", "AbortError"].includes(be?.name) || C || br(function() {
                  C || h.error && h.error(be);
                });
              });
            }
          };
          return setTimeout(Se, 0), U;
        });
        return f.hasValue = function() {
          return i;
        }, f.getValue = function() {
          return u;
        }, f;
      }
      var Qi = Wr;
      le(Qi, c(c({}, Ve), {
        delete: function(r) {
          var i = new Qi(r, { addons: [] });
          return i.delete();
        },
        exists: function(r) {
          return new Qi(r, { addons: [] }).open().then(function(i) {
            return i.close(), !0;
          }).catch("NoSuchDatabaseError", function() {
            return !1;
          });
        },
        getDatabaseNames: function(r) {
          try {
            return ar(Qi.dependencies).then(r);
          } catch {
            return jt(new H.MissingAPI());
          }
        },
        defineClass: function() {
          function r(i) {
            $(this, i);
          }
          return r;
        },
        ignoreTransaction: function(r) {
          return Ie.trans ? Vn(Ie.transless, r) : r();
        },
        vip: _n,
        async: function(r) {
          return function() {
            try {
              var i = k(r.apply(this, arguments));
              return !i || typeof i.then != "function" ? Ne.resolve(i) : i;
            } catch (u) {
              return jt(u);
            }
          };
        },
        spawn: function(r, i, u) {
          try {
            var f = k(r.apply(u, i || []));
            return !f || typeof f.then != "function" ? Ne.resolve(f) : f;
          } catch (h) {
            return jt(h);
          }
        },
        currentTransaction: {
          get: function() {
            return Ie.trans || null;
          }
        },
        waitFor: function(r, i) {
          var u = Ne.resolve(typeof r == "function" ? Qi.ignoreTransaction(r) : r).timeout(i || 6e4);
          return Ie.trans ? Ie.trans.waitFor(u) : u;
        },
        Promise: Ne,
        debug: {
          get: function() {
            return Mt;
          },
          set: function(r) {
            Wn(r);
          }
        },
        derive: He,
        extend: $,
        props: le,
        override: Fe,
        Events: ir,
        on: Xn,
        liveQuery: Zu,
        extendObservabilitySet: l,
        getByKeyPath: K,
        setByKeyPath: dt,
        delByKeyPath: At,
        shallowClone: it,
        deepClone: Ot,
        getObjectDiff: ne,
        cmp: ht,
        asap: ge,
        minKey: oi,
        addons: [],
        connections: Br,
        errnames: L,
        dependencies: Ua,
        cache: m,
        semVer: Fi,
        version: Fi.split(".").map(function(r) {
          return parseInt(r);
        }).reduce(function(r, i, u) {
          return r + i / Math.pow(10, u * 2);
        })
      })), Qi.maxKey = xr(Qi.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Xn(zn, function(r) {
        if (!vi) {
          var i;
          i = new CustomEvent(Vi, {
            detail: r
          }), vi = !0, dispatchEvent(i), vi = !1;
        }
      }), addEventListener(Vi, function(r) {
        var i = r.detail;
        vi || Bs(i);
      }));
      function Bs(r) {
        var i = vi;
        try {
          vi = !0, Xn.storagemutated.fire(r), B(r, !0);
        } finally {
          vi = i;
        }
      }
      var vi = !1, gi, $s = function() {
      };
      typeof BroadcastChannel < "u" && ($s = function() {
        gi = new BroadcastChannel(Vi), gi.onmessage = function(r) {
          return r.data && Bs(r.data);
        };
      }, $s(), typeof gi.unref == "function" && gi.unref(), Xn(zn, function(r) {
        vi || gi.postMessage(r);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(r) {
        if (!Wr.disableBfCache && r.persisted) {
          Mt && console.debug("Dexie: handling persisted pagehide"), gi?.close();
          for (var i = 0, u = Br; i < u.length; i++) {
            var f = u[i];
            f.close({ disableAutoOpen: !1 });
          }
        }
      }), addEventListener("pageshow", function(r) {
        !Wr.disableBfCache && r.persisted && (Mt && console.debug("Dexie: handling persisted pageshow"), $s(), Bs({ all: new Gt(-1 / 0, [[]]) }));
      }));
      function Kf(r) {
        return new Li({ add: r });
      }
      function Bf(r) {
        return new Li({ remove: r });
      }
      function $f(r, i) {
        return new Li({ replacePrefix: [r, i] });
      }
      Ne.rejectionMapper = pe, Wn(Mt);
      var Vf = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        Dexie: Wr,
        liveQuery: Zu,
        Entity: Vr,
        cmp: ht,
        PropModification: Li,
        replacePrefix: $f,
        add: Kf,
        remove: Bf,
        default: Wr,
        RangeSet: Gt,
        mergeRanges: sr,
        rangesOverlap: ur
      });
      return c(Wr, Vf, { default: Wr }), Wr;
    });
  }(as)), as.exports;
}
var Nm = Rm();
const gu = /* @__PURE__ */ Dm(Nm), Bc = Symbol.for("Dexie"), ws = globalThis[Bc] || (globalThis[Bc] = gu);
if (gu.semVer !== ws.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${gu.semVer} and ${ws.semVer}`);
const {
  liveQuery: Bv,
  mergeRanges: $v,
  rangesOverlap: Vv,
  RangeSet: qv,
  cmp: Uv,
  Entity: Gv,
  PropModification: Hv,
  replacePrefix: Wv,
  add: Yv,
  remove: Qv,
  DexieYProvider: zv
} = ws, km = fa("");
function _f() {
  return km;
}
function Fm(e) {
  return e.old === void 0 && e.new?.parent !== void 0 && e.new?.element !== void 0;
}
function Mm(e) {
  return e.old?.parent !== void 0 && e.old?.element !== void 0 && e.new === void 0;
}
function Lm(e) {
  return e.old?.parent !== void 0 && e.old?.element !== void 0 && e.new?.parent !== void 0 && e.new?.element == null;
}
function jm(e) {
  return e.old?.parent === void 0 && e.old?.element !== void 0 && e.new?.parent === void 0 && e.new?.element !== void 0;
}
function Km(e) {
  return e.old === void 0 && e.new === void 0 && e.element !== void 0 && e.newAttributes !== void 0 && e.oldAttributes !== void 0;
}
function Bm(e) {
  return !(e.actions instanceof Array);
}
function En(e) {
  const t = e.split(">"), o = t.pop() ?? "";
  return [t.join(">"), o];
}
const en = ":not(*)";
function $m(e) {
  return `${e.getAttribute("version")}	${e.getAttribute("revision")}`;
}
function Vm(e, t) {
  const [o, a] = t.split("	");
  return !o || !a ? en : `${e}[version="${o}"][revision="${a}"]`;
}
function $c(e) {
  return cn(e.parentElement) + ">" + e.getAttribute("connectivityNode");
}
function Vc(e, t) {
  const [o, a] = En(t), c = un[e].parents.flatMap(
    (d) => bn(d, o).split(",")
  );
  return xn(
    c,
    [">"],
    [`${e}[connectivityNode="${a}"]`]
  ).map((d) => d.join("")).join(",");
}
function qm(e) {
  const [t, o, a, c, d, y] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((g) => e.getAttribute(g));
  return t === "None" ? `${cn(e.parentElement)}>(${c} ${y} ${d})` : `${t} ${o || "(Client)"}/${a ?? ""} ${c} ${d ?? ""}`;
}
function Um(e, t) {
  if (t.endsWith(")")) {
    const [ee, le] = En(t), [we, Ee, He] = le.substring(1, le.length - 1).split(" ");
    if (!we || !Ee) return en;
    const Qe = un[e].parents.flatMap(
      (Je) => bn(Je, ee).split(",")
    );
    return xn(
      Qe,
      [">"],
      [`${e}[iedName="None"][lnClass="${we}"][lnType="${Ee}"][lnInst="${He}"]`]
    ).map((Je) => Je.join("")).join(",");
  }
  const [o, a, c, d, y] = t.split(/[ /]/);
  if (!o || !a || !d) return en;
  const [g, x, $, N, O] = [
    [`[iedName="${o}"]`],
    a === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${a}"]`],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    y ? [`[lnInst="${y}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return xn(
    [e],
    g,
    x,
    $,
    N,
    O
  ).map((ee) => ee.join("")).join(",");
}
function Gm(e) {
  return `${cn(e.parentElement)}>${e.getAttribute("iedName")} ${e.getAttribute("apName")}`;
}
function Hm(e, t) {
  const [o, a] = En(t), [c, d] = a.split(" ");
  return `${bn("IED", o)}>${e}[iedName="${c}"][apName="${d}"]`;
}
function Wm(e) {
  return `${cn(e.parentElement)}>${e.getAttribute("associationID") ?? ""}`;
}
function Ym(e, t) {
  const [o, a] = En(t);
  return a ? `${bn("Server", o)}>${e}[associationID="${a}"]` : en;
}
function Qm(e) {
  return `${cn(e.closest("IED"))}>>${e.getAttribute("inst")}`;
}
function zm(e, t) {
  const [o, a] = t.split(">>");
  return a ? `IED[name="${o}"] ${e}[inst="${a}"]` : en;
}
function Xm(e) {
  const t = e.textContent, [o, a, c, d, y] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((g) => e.getAttribute(g));
  return `${cn(e.parentElement)}>${t} ${o || ""} ${a || ""}/${c ?? ""} ${d ?? ""} ${y ?? ""}`;
}
function Jm(e, t) {
  const [o, a] = En(t), [c, d, y, g, x, $] = a.split(/[ /]/), [
    N,
    O,
    ee,
    le,
    we,
    Ee
  ] = [
    un[e].parents.flatMap((He) => bn(He, o).split(",")),
    [`${c}`],
    d ? [`[apRef="${d}"]`] : [":not([apRef])", '[apRef=""]'],
    y ? [`[ldInst="${y}"]`] : [":not([ldInst])", '[ldInst=""]'],
    g ? [`[prefix="${g}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${x}"]`],
    $ ? [`[lnInst="${$}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return xn(
    N,
    [">"],
    [e],
    O,
    ee,
    le,
    we,
    Ee
  ).map((He) => He.join("")).join(",");
}
function Zm(e) {
  const [t, o, a, c, d, y, g, x] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((N) => e.getAttribute(N)), $ = `${t}/${o ?? ""} ${a} ${c ?? ""}.${d} ${y || ""}`;
  return `${cn(e.parentElement)}>${$} (${g}${x ? " [" + x + "]" : ""})`;
}
function ey(e, t) {
  const [o, a] = En(t), [c, d, y, g] = a.split(/[ /.]/), x = a.match(/.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/), $ = x && x[1] ? x[1] : "", N = x && x[2] ? x[2] : "", O = a.match(/\(([A-Z]{2})/), ee = a.match(/ \[([0-9]{1,2})\]/), le = O && O[1] ? O[1] : "", we = ee && ee[1] ? ee[1] : "", [
    Ee,
    He,
    Qe,
    Je,
    De,
    $e,
    Fe,
    fe,
    ge
  ] = [
    un[e].parents.flatMap((qe) => bn(qe, o).split(",")),
    [`[ldInst="${c}"]`],
    d ? [`[prefix="${d}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${y}"]`],
    g ? [`[lnInst="${g}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${$}"]`],
    N ? [`[daName="${N}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${le}"]`],
    we ? [`[ix="${we}"]`] : [":not([ix])", '[ix=""]']
  ];
  return xn(
    Ee,
    [">"],
    [e],
    He,
    Qe,
    Je,
    De,
    $e,
    Fe,
    fe,
    ge
  ).map((qe) => qe.join("")).join(",");
}
function ty(e) {
  if (!e.parentElement) return NaN;
  const t = cn(e.parentElement), o = e.getAttribute("iedName"), a = e.getAttribute("intAddr"), c = Array.from(
    e.parentElement.querySelectorAll(`ExtRef[intAddr="${a}"]`)
  ).indexOf(e);
  if (a) return `${t}>${a}[${c}]`;
  const [
    d,
    y,
    g,
    x,
    $,
    N,
    O,
    ee,
    le,
    we,
    Ee,
    He
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
  ].map((De) => e.getAttribute(De)), Qe = He ? `${O}:${He} ${ee ?? ""}/${le ?? ""} ${we ?? ""} ${Ee ?? ""}` : "", Je = `${o} ${d}/${y ?? ""} ${g} ${x ?? ""} ${$} ${N || ""}`;
  return `${t}>${Qe ? Qe + " " : ""}${Je}${a ? `@${a}` : ""}`;
}
function ny(e, t) {
  const [o, a] = En(t), c = un[e].parents.flatMap(
    (Me) => bn(Me, o).split(",")
  );
  if (a.endsWith("]")) {
    const [Me] = a.split("["), et = [`[intAddr="${Me}"]`];
    return xn(c, [">"], [e], et).map((Tt) => Tt.join("")).join(",");
  }
  let d, y, g, x, $, N, O, ee, le, we, Ee, He, Qe, Je;
  !a.includes(":") && !a.includes("@") ? [d, y, g, x, $, N, O] = a.split(/[ /]/) : a.includes(":") && !a.includes("@") ? [
    ee,
    le,
    we,
    Ee,
    He,
    Qe,
    d,
    y,
    g,
    x,
    $,
    N,
    O
  ] = a.split(/[ /:]/) : !a.includes(":") && a.includes("@") ? [d, y, g, x, $, N, O, Je] = a.split(/[ /@]/) : [
    ee,
    le,
    we,
    Ee,
    He,
    Qe,
    d,
    y,
    g,
    x,
    $,
    N,
    O,
    Je
  ] = a.split(/[ /:@]/);
  const [
    De,
    $e,
    Fe,
    fe,
    ge,
    qe,
    K,
    dt,
    At,
    it,
    Dt,
    ln,
    Vt,
    St
  ] = [
    d ? [`[iedName="${d}"]`] : [":not([iedName])"],
    y ? [`[ldInst="${y}"]`] : [":not([ldInst])", '[ldInst=""]'],
    g ? [`[prefix="${g}"]`] : [":not([prefix])", '[prefix=""]'],
    x ? [`[lnClass="${x}"]`] : [":not([lnClass])"],
    $ ? [`[lnInst="${$}"]`] : [":not([lnInst])", '[lnInst=""]'],
    N ? [`[doName="${N}"]`] : [":not([doName])"],
    O ? [`[daName="${O}"]`] : [":not([daName])", '[daName=""]'],
    ee ? [`[serviceType="${ee}"]`] : [":not([serviceType])", '[serviceType=""]'],
    le ? [`[srcCBName="${le}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    we ? [`[srcLDInst="${we}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    Ee ? [`[srcPrefix="${Ee}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    He ? [`[srcLNClass="${He}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    Qe ? [`[srcLNInst="${Qe}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    Je ? [`[intAddr="${Je}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return xn(
    c,
    [">"],
    [e],
    De,
    $e,
    Fe,
    fe,
    ge,
    qe,
    K,
    dt,
    At,
    it,
    Dt,
    ln,
    Vt,
    St
  ).map((Me) => Me.join("")).join(",");
}
function ry(e) {
  const [t, o, a] = ["prefix", "lnClass", "inst"].map((c) => e.getAttribute(c));
  return `${cn(e.parentElement)}>${t ?? ""} ${o} ${a}`;
}
function iy(e, t) {
  const [o, a] = En(t), c = un[e].parents.flatMap(
    (O) => bn(O, o).split(",")
  ), [d, y, g] = a.split(" ");
  if (!y) return en;
  const [x, $, N] = [
    d ? [`[prefix="${d}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${y}"]`],
    [`[inst="${g}"]`]
  ];
  return xn(
    c,
    [">"],
    [e],
    x,
    $,
    N
  ).map((O) => O.join("")).join(",");
}
function oy(e) {
  const [t, o, a, c, d, y] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((g) => e.getAttribute(g));
  return `${cn(e.parentElement)}>${o} ${t || ""} ${a}/${c ?? ""} ${d} ${y}`;
}
function ay(e, t) {
  const [o, a] = En(t), c = un[e].parents.flatMap(
    (Qe) => bn(Qe, o).split(",")
  ), [d, y, g, x, $, N] = a.split(/[ /]/), [
    O,
    ee,
    le,
    we,
    Ee,
    He
  ] = [
    d ? [`[iedName="${d}"]`] : [":not([iedName])", '[iedName=""]'],
    y ? [`[apRef="${y}"]`] : [":not([apRef])", '[apRef=""]'],
    g ? [`[ldInst="${g}"]`] : [":not([ldInst])", '[ldInst=""]'],
    x ? [`[prefix="${x}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${$}"]`],
    N ? [`[lnInst="${N}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return xn(
    c,
    [">"],
    [e],
    O,
    ee,
    le,
    we,
    Ee,
    He
  ).map((Qe) => Qe.join("")).join(",");
}
function qc(e) {
  const [t, o] = ["name", "ix"].map((a) => e.getAttribute(a));
  return `${cn(e.parentElement)}>${t}${o ? "[" + o + "]" : ""}`;
}
function bu(e, t, o = -1) {
  o === -1 && (o = t.split(">").length);
  const [a, c] = En(t), [d, y, g, x] = c.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!y) return en;
  if (o === 0) return `${e}[name="${y}"]`;
  const $ = un[e].parents.flatMap(
    (ee) => ee === "SDI" ? bu(ee, a, o - 1).split(",") : bn(ee, a).split(",")
  ).filter((ee) => !ee.startsWith(en));
  if ($.length === 0) return en;
  const [N, O] = [
    [`[name="${y}"]`],
    x ? [`[ix="${x}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return xn($, [">"], [e], N, O).map((ee) => ee.join("")).join(",");
}
function sy(e) {
  if (!e.parentElement) return NaN;
  const t = e.getAttribute("sGroup"), o = Array.from(e.parentElement.children).filter((a) => a.getAttribute("sGroup") === t).findIndex((a) => a.isSameNode(e));
  return `${cn(e.parentElement)}>${t ? t + "." : ""} ${o}`;
}
function uy(e, t) {
  const [o, a] = En(t), [c, d] = a.split(" "), y = parseFloat(d), g = un[e].parents.flatMap(
    (N) => bn(N, o).split(",")
  ), [x, $] = [
    c ? [`[sGroup="${c}"]`] : [""],
    y ? [`:nth-child(${y + 1})`] : [""]
  ];
  return xn(g, [">"], [e], x, $).map((N) => N.join("")).join(",");
}
function cy(e) {
  const [t, o] = ["iedName", "apName"].map((a) => e.getAttribute(a));
  return `${t} ${o}`;
}
function ly(e, t) {
  const [o, a] = t.split(" ");
  return !o || !a ? en : `${e}[iedName="${o}"][apName="${a}"]`;
}
function Uc(e) {
  const [t, o] = ["ldInst", "cbName"].map((a) => e.getAttribute(a));
  return `${t} ${o}`;
}
function Gc(e, t) {
  const [o, a] = t.split(" ");
  return !o || !a ? en : `${e}[ldInst="${o}"][cbName="${a}"]`;
}
function fy(e) {
  if (!e.parentElement) return NaN;
  if (!e.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const t = e.getAttribute("type");
  return e.parentElement.children.length > 1 && t !== "Connection" && t !== "RedConn" ? NaN : `${cn(e.parentElement)}>${t}`;
}
function dy(e, t) {
  const [o, a] = En(t), [c, d] = [
    un[e].parents.flatMap((y) => bn(y, o).split(",")),
    a ? [`[type="${a}"]`] : [""]
  ];
  return xn(c, [">"], [e], d).map((y) => y.join("")).join(",");
}
function py(e) {
  if (!e.parentElement) return NaN;
  const t = e.parentElement, o = e.getAttribute("type");
  if (t.tagName === "PhysConn") return `${cn(e.parentElement)}>${o}`;
  const a = Array.from(e.parentElement.children).filter((c) => c.getAttribute("type") === o).findIndex((c) => c.isSameNode(e));
  return `${cn(e.parentElement)}>${o} [${a}]`;
}
function hy(e, t) {
  const [o, a] = En(t), [c] = a.split(" "), d = a && a.match(/\[([0-9]+)\]/) && a.match(/\[([0-9]+)\]/)[1] ? parseFloat(a.match(/\[([0-9]+)\]/)[1]) : NaN, [y, g, x] = [
    un[e].parents.flatMap(($) => bn($, o).split(",")),
    [`[type="${c}"]`],
    d ? [`:nth-child(${d + 1})`] : [""]
  ];
  return xn(y, [">"], [e], g, x).map(($) => $.join("")).join(",");
}
function my(e) {
  return `${cn(e.parentElement)}>${e.getAttribute("ord")}`;
}
function yy(e, t) {
  const [o, a] = En(t);
  return `${bn("EnumType", o)}>${e}[ord="${a}"]`;
}
function vy(e) {
  return `${cn(e.parentElement)}>${e.getAttribute("type") || "8-MMS"}	${e.textContent}`;
}
function gy(e, t) {
  const [o, a] = En(t), [c, d] = a.split("	"), [y] = [
    un[e].parents.flatMap((g) => bn(g, o).split(","))
  ];
  return xn(y, [">"], [e], [`[type="${c}"]`], [">"], [d]).map((g) => g.join("")).join(",");
}
function by() {
  return "";
}
function wy() {
  return ":root";
}
function Ct(e) {
  return e.parentElement.tagName === "SCL" ? e.getAttribute("name") : `${cn(e.parentElement)}>${e.getAttribute("name")}`;
}
function Et(e, t, o = -1) {
  o === -1 && (o = t.split(">").length);
  const [a, c] = En(t);
  if (!c) return en;
  if (o === 0) return `${e}[name="${c}"]`;
  const d = un[e].parents;
  if (!d) return en;
  const y = d.flatMap(
    (g) => un[g].selector === un.Substation.selector ? Et(g, a, o - 1).split(",") : bn(g, a).split(",")
  ).filter((g) => !g.startsWith(en));
  return y.length === 0 ? en : xn(y, [">"], [e], [`[name="${c}"]`]).map((g) => g.join("")).join(",");
}
function We(e) {
  return cn(e.parentElement).toString();
}
function Ye(e, t) {
  const o = un[e].parents;
  if (!o) return en;
  const a = o.flatMap((c) => bn(c, t).split(",")).filter((c) => !c.startsWith(en));
  return a.length === 0 ? en : xn(a, [">"], [e]).map((c) => c.join("")).join(",");
}
function Qa(e) {
  return `#${e.id}`;
}
function za(e, t) {
  const o = t.replace(/^#/, "");
  return o ? `${e}[id="${o}"]` : en;
}
const Sf = ["TransformerWinding", "ConductingEquipment"], xf = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Sf
], wu = ["Substation", "VoltageLevel", "Bay"], Ef = ["Process", "Line"], Tf = ["EqSubFunction", "EqFunction"], _y = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...xf,
  ...wu,
  ...Ef,
  ...Tf
], Cf = ["ConnectivityNode", ..._y], Sy = ["GOOSESecurity", "SMVSecurity"], xy = ["SubNetwork", ...Sy, ...Cf], Ey = ["BDA", "DA"], Ty = ["SampledValueControl", "GSEControl"], Cy = ["LogControl", "ReportControl"], Ay = [...Ty, ...Cy], Iy = ["GSE", "SMV"], Py = [
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
  ...Ay,
  ...Iy,
  ...Ey
], eo = ["LN0", "LN"], Dy = ["Text", "Private", "Hitem", "AccessControl"], Oy = ["Subject", "IssuerName"], Ry = ["MinTime", "MaxTime"], Ny = ["LNodeType", "DOType", "DAType", "EnumType"], ky = [
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
], Fy = ["DynDataSet", "ConfDataSet"], My = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Fy
], Ly = ["ConfLogControl", "ConfSigRef"], jy = ["ReportSettings", "LogSettings", "GSESettings", "SMVSettings"], Ky = ["SCL", ...xy, ...Py, ...Ny], Af = [
  ...Ky,
  ...Dy,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Oy,
  ...Ry,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...eo,
  ...ky,
  "DynAssociation",
  "SettingGroups",
  ...My,
  ...Ly,
  ...jy,
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
], By = new Set(Af);
function Ju(e) {
  return By.has(e);
}
const Os = ["Text", "Private"], Si = [...Os], Zt = [...Os], Xa = [...Os], Hc = [...Zt, "Val"], If = [...Si, "LNode"], Ti = [...If], _u = [...Ti], Xs = [
  ...Ti,
  "PowerTransformer",
  "GeneralEquipment"
], Wc = [..._u, "Terminal"], Yc = [...Zt, "Address"], Pf = [...Si], Qc = [...Pf, "IEDName"], zc = [
  ...Zt,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], Xc = [
  ...Ti,
  "GeneralEquipment",
  "Function"
], Jc = [...Pf, "TrgOps"], Zc = [
  ...Ti,
  "GeneralEquipment",
  "EqSubFunction"
], un = {
  AccessControl: {
    identity: We,
    selector: Ye,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: Ct,
    selector: Et,
    parents: ["IED"],
    children: [
      ...Si,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: We,
    selector: Ye,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Wm,
    selector: Ym,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: We,
    selector: Ye,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: Ct,
    selector: Et,
    parents: ["DAType"],
    children: [...Hc]
  },
  BitRate: {
    identity: We,
    selector: Ye,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: Ct,
    selector: Et,
    parents: ["VoltageLevel"],
    children: [
      ...Xs,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: oy,
    selector: ay,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: We,
    selector: Ye,
    parents: ["SCL"],
    children: [...Zt, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: Ct,
    selector: Et,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [...Wc, "EqFunction", "SubEquipment"]
  },
  ConfDataSet: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: We,
    selector: Ye,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: cy,
    selector: ly,
    parents: ["SubNetwork"],
    children: [...Zt, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: Ct,
    selector: Et,
    parents: ["Bay", "Line"],
    children: [...If]
  },
  DA: {
    identity: Ct,
    selector: Et,
    parents: ["DOType"],
    children: [...Hc]
  },
  DAI: {
    identity: qc,
    selector: bu,
    parents: ["DOI", "SDI"],
    children: [...Zt, "Val"]
  },
  DAType: {
    identity: Qa,
    selector: za,
    parents: ["DataTypeTemplates"],
    children: [...Xa, "BDA", "ProtNs"]
  },
  DO: {
    identity: Ct,
    selector: Et,
    parents: ["LNodeType"],
    children: [...Zt]
  },
  DOI: {
    identity: Ct,
    selector: Et,
    parents: [...eo],
    children: [...Zt, "SDI", "DAI"]
  },
  DOType: {
    identity: Qa,
    selector: za,
    parents: ["DataTypeTemplates"],
    children: [...Xa, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: Ct,
    selector: Et,
    parents: [...eo],
    children: [...Si, "FCDA"]
  },
  DataSetDirectory: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: We,
    selector: Ye,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: Qa,
    selector: za,
    parents: ["DataTypeTemplates"],
    children: [...Xa, "EnumVal"]
  },
  EnumVal: {
    identity: my,
    selector: yy,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: Ct,
    selector: Et,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...Zc]
  },
  EqSubFunction: {
    identity: Ct,
    selector: Et,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...Zc]
  },
  ExtRef: {
    identity: ty,
    selector: ny,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Zm,
    selector: ey,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: Ct,
    selector: Et,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...Ti,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: Ct,
    selector: Et,
    parents: [
      "SubFunction",
      "Function",
      ...Ef,
      ...Tf,
      ...wu
    ],
    children: [..._u, "EqFunction"]
  },
  GetCBValues: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: Ct,
    selector: Et,
    parents: ["AccessPoint"],
    children: [...Si, "Subject", "IssuerName"]
  },
  GSE: {
    identity: Uc,
    selector: Gc,
    parents: ["ConnectedAP"],
    children: [...Yc, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: Ct,
    selector: Et,
    parents: ["LN0"],
    children: [...Qc, "Protocol"]
  },
  GSESettings: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: We,
    selector: Ye,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: We,
    selector: Ye,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: $m,
    selector: Vm,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: Ct,
    selector: Et,
    parents: ["SCL"],
    children: [...Zt, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Xm,
    selector: Jm,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: We,
    selector: Ye,
    parents: [...eo],
    children: [...Zt, "ExtRef"]
  },
  IssuerName: {
    identity: We,
    selector: Ye,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Gm,
    selector: Hm,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Qm,
    selector: zm,
    parents: ["Server"],
    children: [...Zt, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: ry,
    selector: iy,
    parents: ["AccessPoint", "LDevice"],
    children: [...zc]
  },
  LN0: {
    identity: We,
    selector: Ye,
    parents: ["LDevice"],
    children: [...zc, "GSEControl", "SampledValueControl", "SettingControl"]
  },
  LNode: {
    identity: qm,
    selector: Um,
    parents: [...Cf],
    children: [...Zt]
  },
  LNodeType: {
    identity: Qa,
    selector: za,
    parents: ["DataTypeTemplates"],
    children: [...Xa, "DO"]
  },
  Line: {
    identity: Ct,
    selector: Et,
    parents: ["Process", "SCL"],
    children: [...Xc, "Voltage", "ConductingEquipment"]
  },
  Log: {
    identity: Ct,
    selector: Et,
    parents: [...eo],
    children: [...Zt]
  },
  LogControl: {
    identity: Ct,
    selector: Et,
    parents: [...eo],
    children: [...Jc]
  },
  LogSettings: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: We,
    selector: Ye,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: We,
    selector: Ye,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: We,
    selector: Ye,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: $c,
    selector: Vc,
    parents: ["TransformerWinding"],
    children: [...Zt]
  },
  OptFields: {
    identity: We,
    selector: Ye,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: py,
    selector: hy,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: fy,
    selector: dy,
    parents: ["ConnectedAP"],
    children: [...Zt, "P"]
  },
  PowerTransformer: {
    identity: Ct,
    selector: Et,
    parents: [...wu],
    children: [..._u, "TransformerWinding", "SubEquipment", "EqFunction"]
  },
  Private: {
    identity: () => NaN,
    selector: () => en,
    parents: [],
    children: []
  },
  Process: {
    identity: Ct,
    selector: Et,
    parents: ["Process", "SCL"],
    children: [
      ...Xc,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: vy,
    selector: gy,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: We,
    selector: Ye,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: Ct,
    selector: Et,
    parents: [...eo],
    children: [...Jc, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: We,
    selector: Ye,
    parents: ["ReportControl"],
    children: [...Zt, "ClientLN"]
  },
  SamplesPerSec: {
    identity: We,
    selector: Ye,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: Ct,
    selector: Et,
    parents: ["LN0"],
    children: [...Qc, "SmvOpts"]
  },
  SecPerSamples: {
    identity: We,
    selector: Ye,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: by,
    selector: wy,
    parents: [],
    children: [
      ...Os,
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
    identity: qc,
    selector: bu,
    parents: ["DOI", "SDI"],
    children: [...Zt, "SDI", "DAI"]
  },
  SDO: {
    identity: Ct,
    selector: Et,
    parents: ["DOType"],
    children: [...Si]
  },
  Server: {
    identity: We,
    selector: Ye,
    parents: ["AccessPoint"],
    children: [...Zt, "Authentication", "LDevice", "Association"]
  },
  ServerAt: {
    identity: We,
    selector: Ye,
    parents: ["AccessPoint"],
    children: [...Zt]
  },
  Services: {
    identity: We,
    selector: Ye,
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
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: We,
    selector: Ye,
    parents: ["LN0"],
    children: [...Zt]
  },
  SettingGroups: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: We,
    selector: Ye,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: We,
    selector: Ye,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: Uc,
    selector: Gc,
    parents: ["ConnectedAP"],
    children: [...Yc]
  },
  SmvOpts: {
    identity: We,
    selector: Ye,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: Ct,
    selector: Et,
    parents: ["AccessPoint"],
    children: [...Si, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: Ct,
    selector: Et,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...Sf
    ],
    children: [...Ti, "EqFunction"]
  },
  SubFunction: {
    identity: Ct,
    selector: Et,
    parents: ["SubFunction", "Function"],
    children: [
      ...Ti,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: Ct,
    selector: Et,
    parents: ["Communication"],
    children: [...Si, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: We,
    selector: Ye,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: Ct,
    selector: Et,
    parents: ["SCL"],
    children: [...Xs, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: Ct,
    selector: Et,
    parents: ["TransformerWinding"],
    children: [...Ti, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: $c,
    selector: Vc,
    parents: [...xf],
    children: [...Zt]
  },
  Text: {
    identity: We,
    selector: Ye,
    parents: Af.filter((e) => e !== "Text" && e !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: We,
    selector: Ye,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: Ct,
    selector: Et,
    parents: ["PowerTransformer"],
    children: [
      ...Wc,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: We,
    selector: Ye,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: sy,
    selector: uy,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: We,
    selector: Ye,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: We,
    selector: Ye,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: Ct,
    selector: Et,
    parents: ["Substation"],
    children: [...Xs, "Voltage", "Bay", "Function"]
  }
};
function Df(e, t) {
  const o = e.tagName, a = Array.from(e.children);
  if (o === "Services" || o === "SettingGroups" || !Ju(o))
    return a.find((g) => g.tagName === t) ?? null;
  const c = un[o]?.children ?? [];
  let d = c.findIndex((g) => g === t);
  if (d < 0) return null;
  let y;
  for (; d < c.length && !y; )
    y = a.find((g) => g.tagName === c[d]), d++;
  return y ?? null;
}
function bn(e, t) {
  return typeof t != "string" ? en : Ju(e) ? un[e].selector(e, t) : e;
}
function cn(e) {
  if (e === null) return NaN;
  if (e.closest("Private")) return NaN;
  const t = e.tagName;
  return Ju(t) ? un[t].identity(e) : NaN;
}
function xn(...e) {
  return e.reduce((t, o) => t.flatMap((a) => o.map((c) => [a, c].flat())), [[]]);
}
const $y = 99;
Array($y).fill(1).map((e, t) => `${t + 1}`);
function Vy(e) {
  return Bm(e) ? el(e) : e.actions.map(el);
}
function el(e) {
  if (Fm(e))
    return qy(e);
  if (Mm(e))
    return Uy(e);
  if (Km(e))
    return Gy(e);
  if (Lm(e))
    return Hy(e);
  if (jm(e))
    return Wy(e);
  throw console.error("Unknown action type", e), new Error("Unknown action type");
}
function qy(e) {
  let t = null;
  return e.new.reference === void 0 && e.new.element instanceof Element && e.new.parent instanceof Element ? t = Df(e.new.parent, e.new.element.tagName) : t = e.new.reference ?? null, {
    parent: e.new.parent,
    node: e.new.element,
    reference: t
  };
}
function Uy(e) {
  return {
    node: e.old.element
  };
}
function Gy(e) {
  const t = {};
  Array.from(e.element.attributes).forEach((a) => {
    t[a.name] = null;
  });
  const o = {
    ...t,
    ...e.newAttributes
  };
  return {
    element: e.element,
    attributes: o
  };
}
function Hy(e) {
  return e.new.reference === void 0 && (e.new.reference = Df(e.new.parent, e.old.element.tagName)), {
    parent: e.new.parent,
    node: e.old.element,
    reference: e.new.reference ?? null
  };
}
function Wy(e) {
  const t = e.old.element.children, o = Array.from(t).map((x) => x.cloneNode(!0)), a = e.new.element.cloneNode(!0);
  a.append(...Array.from(o));
  const c = e.old.element.parentElement;
  if (!c)
    throw new Error("Replace action called without parent in old element");
  const d = e.old.element.nextSibling;
  return [{ node: e.old.element }, {
    parent: c,
    node: a,
    reference: d
  }];
}
function Yy(e) {
  return e instanceof Array;
}
function Qy(e) {
  return e.parent !== void 0;
}
function zy(e) {
  return e !== null && typeof e != "string";
}
function Xy(e) {
  return e.element !== void 0;
}
function Jy(e) {
  return e.parent === void 0 && e.node !== void 0;
}
function Of(e) {
  if (Yy(e))
    return e.map(Of);
  if (Jy(e))
    return e;
  if (Qy(e))
    return e;
  if (Xy(e))
    return Zy(e);
  throw new Error("Unknown edit type");
}
function Zy(e) {
  const t = {}, o = {};
  return Object.entries(e.attributes).forEach(([a, c]) => {
    if (zy(c)) {
      const d = c.namespaceURI;
      if (!d) return;
      o[d] || (o[d] = {}), o[d][a] = c.value;
    } else t[a] = c;
  }), { element: e.element, attributes: t, attributesNS: o };
}
function ev({
  element: e,
  textContent: t
}) {
  const { childNodes: o } = e, a = Array.from(o).map((d) => ({
    parent: e,
    node: d,
    reference: null
  }));
  return e.textContent = t, [{ element: e, textContent: "" }, ...a];
}
function tv({
  element: e,
  attributes: t = {},
  attributesNS: o = {}
}) {
  const a = { ...t }, c = { ...o };
  if (t && Object.keys(t).reverse().forEach((d) => {
    a[d] = e.getAttribute(d);
  }), t)
    for (const d of Object.entries(t))
      try {
        const [y, g] = d;
        g === null ? e.removeAttribute(y) : e.setAttribute(y, g);
      } catch {
        delete a[d[0]];
      }
  if (o && Object.entries(o).forEach(([d, y]) => {
    Object.keys(y).reverse().forEach((g) => {
      c[d] = {
        ...c[d],
        [g]: e.getAttributeNS(d, g.split(":").pop())
      };
    });
  }), o)
    for (const d of Object.entries(o)) {
      const [y, g] = d;
      for (const x of Object.entries(g))
        try {
          const [$, N] = x;
          N === null ? e.removeAttributeNS(y, $.split(":").pop()) : e.setAttributeNS(y, $, N);
        } catch {
          delete c[y][x[0]];
        }
    }
  return {
    element: e,
    attributes: a,
    attributesNS: c
  };
}
function nv({ node: e }) {
  const { parentNode: t, nextSibling: o } = e;
  return t ? (t.removeChild(e), {
    node: e,
    parent: t,
    reference: o
  }) : [];
}
function rv({ parent: e, node: t, reference: o }) {
  try {
    const { parentNode: a, nextSibling: c } = t;
    return e.insertBefore(t, o), a ? {
      node: t,
      parent: a,
      reference: c
    } : { node: t };
  } catch {
    return [];
  }
}
function ss(e) {
  return Pa(e) ? rv(e) : Ia(e) ? nv(e) : Xu(e) ? tv(e) : zu(e) ? ev(e) : Qu(e) ? e.map((t) => ss(t)).reverse().flat(1 / 0) : [];
}
class iv {
  past = [];
  future = [];
  commit(t, { title: o, squash: a } = {}) {
    const c = a && this.past.length ? this.past[this.past.length - 1] : { undo: [], redo: [] }, d = ss(t);
    return c.undo.unshift(...[d].flat(1 / 0)), c.redo.push(...[t].flat(1 / 0)), o && (c.title = o), a && this.past.length && this.past.pop(), this.past.push(c), this.future = [], this.#e.forEach((y) => y(c)), c;
  }
  undo() {
    const t = this.past.pop();
    if (t)
      return ss(t.undo), this.future.unshift(t), t;
  }
  redo() {
    const t = this.future.shift();
    if (t)
      return ss(t.redo), this.past.push(t), t;
  }
  #e = [];
  subscribe(t) {
    const o = this.#e.length;
    return this.#e.push(t), () => (this.#e.splice(o, 1), t);
  }
}
function ov(e) {
  return {
    addRecord: t,
    createRecord: c,
    updateRecord: o,
    deleteRecord: a,
    findRecordById: N,
    findRecordsByTagName: O,
    findChildRecords: Qe,
    findChildRecordsByTagName: Je,
    findChildRecordsWithinDepthAndGivenTagName: $e,
    instantiate: ee,
    ensureRelationship: y,
    ensurePrivateElement: g,
    findRootSCL: $,
    recordExists: d,
    findOneRecordByAttribute: Ee,
    findAllRecordsByAttribute: He,
    close: Fe,
    db: e
  };
  async function t(fe) {
    const ge = { ...fe, id: fe.id ?? crypto.randomUUID() }, qe = await N(ge.id);
    if (qe) {
      const K = {
        msg: "could not add record, record with same id already exists",
        db: e.name,
        newRecord: ge,
        existingRecord: qe
      };
      throw console.error(K), new Error(JSON.stringify(K));
    }
    try {
      return await e.table(An).add(ge), ge;
    } catch (K) {
      const dt = {
        msg: "could not add record",
        db: e.name,
        newRecord: ge,
        err: K
      };
      throw console.error(dt), new Error(JSON.stringify(dt));
    }
  }
  async function o(fe) {
    try {
      if (await e.table(An).update(fe.id, fe) < 1) {
        const qe = { msg: "nothing has been updated", record: fe };
        throw console.error(qe), new Error(JSON.stringify(qe));
      }
    } catch (ge) {
      console.error(ge);
    }
  }
  async function a(fe) {
    try {
      if (fe.children)
        for (const ge of fe.children) {
          const qe = await N(ge.id);
          if (!qe) {
            console.warn({
              msg: "deleteRecord: child relationship found but not child record, continuing",
              child: ge
            });
            continue;
          }
          await a(qe);
        }
      if (fe.parent?.id) {
        const ge = await N(fe.parent.id);
        if (!ge) throw new Error("parent relationship found but not parent record");
        await x(ge, fe);
      }
      await e.table(An).delete(fe.id);
    } catch (ge) {
      console.error(ge);
    }
  }
  async function c(fe, ge) {
    try {
      const qe = { ...fe, id: crypto.randomUUID() };
      return await e.table(An).add(qe), ge && await y(ge, qe), {
        ...qe,
        parent: ge ? { id: ge.id, tagName: ge.tagName } : null
      };
    } catch (qe) {
      const K = {
        msg: "could not add record",
        db: e.name,
        table: fe.tagName,
        recordToCreate: fe,
        err: qe
      };
      throw console.error(K), new Error(JSON.stringify(K));
    }
  }
  async function d(fe) {
    return await e.table(An).where({ id: fe.id }).count() > 0;
  }
  async function y(fe, ge) {
    const qe = fe.children?.some((dt) => dt.id === ge.id), K = ge.parent?.id === fe.id;
    qe || await e.table(An).update(fe.id, {
      children: [...fe.children, { id: ge.id, tagName: ge.tagName }]
    }), K || (ge.parent = {
      id: fe.id,
      tagName: fe.tagName
    }, await e.table(An).update(ge.id, { parent: ge.parent }));
  }
  async function g(fe) {
    let qe = (await He("Private", {
      name: "type",
      value: "eIEC61850-6-100"
    })).find((K) => K.parent?.id === fe.id);
    if (!qe) {
      const K = {
        tagName: "Private",
        attributes: [{ name: "type", value: "eIEC61850-6-100" }],
        parent: null,
        namespace: Yu.default,
        value: "",
        children: []
      };
      qe = await c(K), await y(fe, qe);
    }
    return qe;
  }
  async function x(fe, ge) {
    ge.parent = null, await o(ge), fe.children && (fe.children = fe.children.filter((qe) => qe.id !== ge.id), await o(fe));
  }
  async function $() {
    const fe = await e.table(An).where({ tagName: "SCL" }).toArray();
    if (fe.length === 0) throw new Error("there is no SCL element");
    if (fe.length > 1)
      throw new Error("there are multiple SCL elements; there can be only one");
    const ge = fe[0];
    if (ge.parent)
      throw new Error("the SCL element has a parent; the SCL should be the root element");
    return ge;
  }
  async function N(fe) {
    return await e.table(An).get(fe);
  }
  async function O(fe) {
    return await e.table(An).where({ tagName: fe }).toArray();
  }
  function ee(fe) {
    const ge = le(fe);
    if (!ge)
      throw console.error('record does not have a "uuid" to move to "templateUUID"', fe), new Error('record does not have a "uuid" to move to "templateUUID"');
    fe.attributes?.push({ name: "templateUuid", value: ge }), we(fe);
  }
  function le(fe) {
    const ge = fe.attributes?.find((qe) => qe.name === "uuid");
    if (ge)
      return ge.value;
  }
  function we(fe) {
    fe.attributes || (fe.attributes = []);
    const ge = crypto.randomUUID(), qe = fe.attributes.findIndex((dt) => dt.name === "uuid");
    qe >= 0 ? fe.attributes[qe].value = ge : fe.attributes.push({ name: "uuid", value: ge });
  }
  async function Ee(fe, ge) {
    return av(e, fe, ge);
  }
  async function He(fe, ge) {
    return sv(e, fe, ge);
  }
  async function Qe(fe) {
    return fe.children?.length ? await e.table(An).where({ "parent.id": fe.id }).toArray() : [];
  }
  async function Je(fe, ge) {
    return (await Qe(fe)).filter((K) => ge.includes(K.tagName));
  }
  async function $e(fe, ge = De, qe = []) {
    const K = [];
    let dt = [fe];
    for (let At = 0; At < ge; At++) {
      const it = [];
      for (const Dt of dt) {
        const ln = await Je(Dt, qe);
        ln.length !== 0 && (it.push(...ln), K.push(...ln));
      }
      dt = [...it];
    }
    return K;
  }
  function Fe() {
    e.close();
  }
}
async function av(e, t, o) {
  try {
    return await e.table(An).where({ tagName: t }).filter(
      (c) => !!c.attributes?.some((d) => d.name === o.name && d.value === o.value)
    ).first();
  } catch (a) {
    console.error({ msg: "could not find record by attribute", tagName: t, attr: o, err: a });
  }
}
async function sv(e, t, o) {
  try {
    return await e.table(An).where({ tagName: t }).filter(
      (c) => !!c.attributes?.some((d) => d.name === o.name && d.value === o.value)
    ).toArray();
  } catch (a) {
    console.error({ msg: "could not find record by attribute", tagName: t, attr: o, err: a });
  }
  return [];
}
async function Rf(e, t) {
  if (Pa(e))
    await uv(e, t);
  else if (Ia(e))
    await cv(e, t);
  else if (Xu(e))
    await lv(e, t);
  else if (zu(e))
    await fv(e, t);
  else if (Qu(e))
    for (const o of e)
      await Rf(o, t);
  else
    console.error("could not determine edit type", { edit: e });
}
async function uv(e, t) {
  const { parent: o, node: a } = e;
  await Nf(a, o, t);
}
async function Nf(e, t, o) {
  const a = e, c = t;
  let d = _a(a);
  const y = _a(c), g = await yv(o);
  d || (d = crypto.randomUUID(), a.setAttribute(ko, d));
  const x = dv(a);
  let $ = a.tagName;
  x.prefix && ($ = $.replace(`${x.prefix}:`, ""));
  let N = {
    id: d,
    tagName: $,
    namespace: x,
    attributes: mv(a, g),
    value: a.children.length ? "" : a.textContent || "",
    parent: null,
    // Will be set by `ensureRelationship`
    children: []
  }, O;
  const ee = await o.findRecordById(d);
  if (ee)
    O = ee;
  else {
    const we = kf(N);
    O = await o.addRecord({ ...we });
  }
  let le;
  if (y) {
    if (le = await o.findRecordById(y), !le)
      throw new Error(`parentId present: ${y}, but no record found`);
    await o.ensureRelationship(le, O);
  }
  for (const we of Array.from(e.children))
    await Nf(we, a, o);
}
async function cv(e, t) {
  const { node: o } = e, c = _a(o);
  if (!c)
    throw new Error("Element must have a temp ID attribute for database operations");
  const d = await t.findRecordById(c);
  d && await t.deleteRecord(d);
}
async function lv(e, t) {
  const { element: o, attributes: a = {}, attributesNS: c = {} } = e, d = _a(o);
  if (!d)
    throw new Error("Element must have a temp ID attribute for database operations");
  const y = await t.findRecordById(d);
  if (!y)
    throw new Error(`Record with ID ${d} not found`);
  const x = [...kf(y).attributes || []];
  for (const [N, O] of Object.entries(a))
    if (O == null)
      Js(x, N);
    else {
      const le = Su(N, O);
      nl(x, le);
    }
  for (const [N, O] of Object.entries(c))
    if (O)
      for (const [ee, le] of Object.entries(O))
        if (le == null) {
          const Ee = await tl(N, t), He = Ee ? `${Ee}:${ee}` : ee;
          Js(x, He) || Js(x, ee);
        } else {
          const Ee = await tl(N, t), He = Su(
            ee,
            le,
            Ee ? N : void 0,
            Ee
          );
          nl(x, He);
        }
  const $ = {
    ...y,
    attributes: x
  };
  await t.updateRecord($);
}
async function fv(e, t) {
  const { element: o, textContent: a } = e, c = _a(o);
  if (!c)
    throw new Error("Element must have a temp ID attribute for database operations");
  const d = await t.findRecordById(c);
  if (!d)
    throw new Error(`Record with ID ${c} not found`);
  const y = {
    ...d,
    value: a || ""
  };
  await t.updateRecord(y);
}
function _a(e) {
  return e.getAttribute(ko);
}
function dv(e) {
  return e.namespaceURI && e.prefix ? {
    prefix: e.prefix,
    uri: e.namespaceURI
  } : Yu.default;
}
async function pv(e, t) {
  const a = (await t.findRootSCL()).attributes.find((c) => c.value === e);
  if (!a)
    throw new Error("could not find namespace by uri:" + e);
  return a.name;
}
async function tl(e, t) {
  try {
    return await pv(e, t);
  } catch (o) {
    return console.warn(`Could not resolve namespace prefix for ${e}:`, o), "";
  }
}
function Su(e, t, o, a) {
  return o && o !== vv ? {
    name: e,
    value: t,
    namespace: {
      prefix: a || "",
      uri: o
    }
  } : {
    name: e,
    value: t
  };
}
function hv(e, t) {
  if (!("namespace" in e && e.namespace.uri))
    return e;
  const a = t[e.namespace.uri];
  if (!a)
    return console.warn("no definition found for namespace", { uri: e.namespace.uri }), e;
  const c = e.name.split(":");
  return c.length === 2 && c[0] === a ? e : {
    name: `${a}:${e.name}`,
    value: e.value,
    namespace: {
      uri: e.namespace.uri,
      prefix: a
    }
  };
}
function nl(e, t) {
  const o = e.findIndex((c) => c.name === t.name);
  o !== -1 ? e[o] = t : e.push(t);
}
function Js(e, t) {
  const o = e.findIndex((c) => c.name === t);
  return o !== -1 ? (e.splice(o, 1), !0) : !1;
}
function mv(e, t) {
  const o = [];
  for (let a = 0; a < e.attributes.length; a++) {
    const c = e.attributes[a];
    if (c.name === ko)
      continue;
    const y = Su(
      c.name,
      c.value,
      c.namespaceURI,
      c.prefix || void 0
    ), g = hv(y, t);
    o.push(g);
  }
  return o;
}
function kf(e) {
  const t = e.attributes.filter(
    (o) => o.name !== ko
  );
  return {
    ...e,
    attributes: t
  };
}
async function yv(e) {
  const t = {};
  try {
    const o = await e.findRootSCL();
    for (const a of o.attributes)
      a.namespace?.uri === "http://www.w3.org/2000/xmlns/" && (t[a.value] = a.name);
  } catch (o) {
    console.warn("Could not gather namespaces from SCL root:", o);
  }
  return t;
}
const vv = "http://www.w3.org/1999/xhtml", gv = /* @__PURE__ */ Ml({
  __name: "oscd-loader",
  props: {
    doc: { type: null, required: !1 },
    pluginLocation: { type: String, required: !0 }
  },
  setup(e, { expose: t }) {
    t();
    const o = e, a = fa(0), c = fa(), d = new iv(), y = _f(), g = fa();
    hs(N), hs($), th(() => {
      o.doc && Ee(o.doc);
    }), ns(
      () => y.value,
      (De) => {
        De && x(De);
      },
      { immediate: !0 }
    );
    async function x(De) {
      const $e = new ws(De);
      await $e.open(), g.value = ov($e);
    }
    async function $() {
      try {
        if (!c.value)
          return;
        const Fe = (await import(o.pluginLocation)).default;
        class fe extends Fe {
        }
        const ge = `oscd-plugin-${Date.now()}`;
        customElements.define(ge, fe);
        const qe = document.createElement(ge);
        c.value.innerHTML = "", c.value.appendChild(qe), Qe(d), le(document.head), o.doc && (Ee(o.doc), He(a.value));
      } catch (De) {
        console.error("Failed to load plugin:", De);
      }
    }
    function N() {
      c.value && (c.value.addEventListener("editor-action", (De) => {
        ee(Of(Vy(De.detail.action)));
      }), c.value.addEventListener("oscd-edit", (De) => {
        const $e = De.detail.edit ?? De.detail, Fe = wf($e);
        if (ee(Fe), !g.value) {
          console.warn("sdk is needed to translate and apply events");
          return;
        }
      }), c.value.addEventListener("oscd-edit-v2", (De) => O(De)));
    }
    function O(De) {
      const $e = De.detail.edit;
      ee($e);
    }
    function ee(De) {
      if (!g.value) {
        console.warn("sdk is needed to translate and apply events");
        return;
      }
      d.commit(De), a.value += 1, He(a.value), Rf(De, g.value);
    }
    function le(De) {
      De.appendChild(
        we(
          "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&family=Roboto+Mono:wght@400;500&display=swap"
        )
      ), De.appendChild(
        we("https://fonts.googleapis.com/icon?family=Material+Icons+Outlined")
      ), De.appendChild(
        we(
          "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&family=Roboto:wght@300;400;500&display=swap"
        )
      ), De.appendChild(
        we("https://fonts.googleapis.com/css?family=Material+Icons&display=block")
      ), De.appendChild(
        we("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined")
      );
    }
    function we(De) {
      const $e = document.createElement("link");
      return $e.href = De, $e.rel = "stylesheet", $e;
    }
    function Ee(De) {
      const $e = c.value?.firstElementChild;
      $e && ($e.doc = De);
    }
    function He(De) {
      const $e = c.value?.firstElementChild;
      $e && ($e.editCount = a.value, $e.docVersion = a.value);
    }
    function Qe(De) {
      const $e = c.value?.firstElementChild;
      $e && ($e.editor = De);
    }
    const Je = { props: o, editCount: a, pluginContainerRef: c, editor: d, filename: y, sdk: g, initSDK: x, loadOscdPlugin: $, registerEditAPIEvents: N, handleOscdEditEvent: O, handleOscdEdit: ee, injectCss: le, createStyleSheet: we, updatePluginDocument: Ee, updatePluginEditCount: He, updatePluginEditor: Qe };
    return Object.defineProperty(Je, "__isScriptSetup", { enumerable: !1, value: !0 }), Je;
  }
}), Ff = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, c] of t)
    o[a] = c;
  return o;
}, bv = { ref: "pluginContainerRef" };
function wv(e, t, o, a, c, d) {
  return nf(), fh(
    "div",
    bv,
    null,
    512
    /* NEED_PATCH */
  );
}
const _v = /* @__PURE__ */ Ff(gv, [["render", wv], ["__file", "/home/runner/work/set/set/packages/extensions/openscd-plugin-loader/src/oscd-loader/oscd-loader.vue"]]);
var rl = {}, il;
function Sv() {
  return il || (il = 1, (function() {
    function e(S) {
      var P = 0;
      return function() {
        return P < S.length ? { done: !1, value: S[P++] } : { done: !0 };
      };
    }
    var t = typeof Object.defineProperties == "function" ? Object.defineProperty : function(S, P, R) {
      return S == Array.prototype || S == Object.prototype || (S[P] = R.value), S;
    };
    function o(S) {
      S = [typeof globalThis == "object" && globalThis, S, typeof window == "object" && window, typeof self == "object" && self, typeof vu == "object" && vu];
      for (var P = 0; P < S.length; ++P) {
        var R = S[P];
        if (R && R.Math == Math) return R;
      }
      throw Error("Cannot find global object");
    }
    var a = o(this);
    function c(S, P) {
      if (P) e: {
        var R = a;
        S = S.split(".");
        for (var L = 0; L < S.length - 1; L++) {
          var j = S[L];
          if (!(j in R)) break e;
          R = R[j];
        }
        S = S[S.length - 1], L = R[S], P = P(L), P != L && P != null && t(R, S, { configurable: !0, writable: !0, value: P });
      }
    }
    c("Symbol", function(S) {
      function P(j) {
        if (this instanceof P) throw new TypeError("Symbol is not a constructor");
        return new R("jscomp_symbol_" + (j || "") + "_" + L++, j);
      }
      function R(j, H) {
        this.l = j, t(this, "description", { configurable: !0, writable: !0, value: H });
      }
      if (S) return S;
      R.prototype.toString = function() {
        return this.l;
      };
      var L = 0;
      return P;
    }), c("Symbol.iterator", function(S) {
      if (S) return S;
      S = Symbol("Symbol.iterator");
      for (var P = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), R = 0; R < P.length; R++) {
        var L = a[P[R]];
        typeof L == "function" && typeof L.prototype[S] != "function" && t(L.prototype, S, { configurable: !0, writable: !0, value: function() {
          return d(e(this));
        } });
      }
      return S;
    });
    function d(S) {
      return S = { next: S }, S[Symbol.iterator] = function() {
        return this;
      }, S;
    }
    function y(S) {
      var P = typeof Symbol < "u" && Symbol.iterator && S[Symbol.iterator];
      return P ? P.call(S) : { next: e(S) };
    }
    function g(S) {
      if (!(S instanceof Array)) {
        S = y(S);
        for (var P, R = []; !(P = S.next()).done; ) R.push(P.value);
        S = R;
      }
      return S;
    }
    var x = typeof Object.create == "function" ? Object.create : function(S) {
      function P() {
      }
      return P.prototype = S, new P();
    }, $ = function() {
      function S() {
        function R() {
        }
        return Reflect.construct(R, [], function() {
        }), new R() instanceof R;
      }
      if (typeof Reflect < "u" && Reflect.construct) {
        if (S()) return Reflect.construct;
        var P = Reflect.construct;
        return function(R, L, j) {
          return R = P(R, L), j && Reflect.setPrototypeOf(R, j.prototype), R;
        };
      }
      return function(R, L, j) {
        return j === void 0 && (j = R), j = x(j.prototype || Object.prototype), Function.prototype.apply.call(
          R,
          j,
          L
        ) || j;
      };
    }(), N;
    if (typeof Object.setPrototypeOf == "function") N = Object.setPrototypeOf;
    else {
      var O;
      e: {
        var ee = { a: !0 }, le = {};
        try {
          le.__proto__ = ee, O = le.a;
          break e;
        } catch {
        }
        O = !1;
      }
      N = O ? function(S, P) {
        if (S.__proto__ = P, S.__proto__ !== P) throw new TypeError(S + " is not extensible");
        return S;
      } : null;
    }
    var we = N, Ee = window, He;
    if (((He = Ee.CustomElementRegistryPolyfill) == null ? void 0 : He.formAssociated) === void 0) {
      var Qe = {};
      Ee.CustomElementRegistryPolyfill = (Qe.formAssociated = /* @__PURE__ */ new Set(), Qe);
    }
    var Je = window.HTMLElement, De = window.customElements.define, $e = window.customElements.get, Fe = window.customElements, fe = /* @__PURE__ */ new WeakMap(), ge = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakMap(), K = /* @__PURE__ */ new WeakMap();
    function dt() {
      var S;
      this.promise = new Promise(function(P) {
        S = P;
      }), this.resolve = S;
    }
    function At() {
      this.h = /* @__PURE__ */ new Map(), this.m = /* @__PURE__ */ new Map(), this.j = /* @__PURE__ */ new Map(), this.i = /* @__PURE__ */ new Map();
    }
    At.prototype.define = function(S, P) {
      if (S = S.toLowerCase(), this.h.get(S) !== void 0) throw new DOMException(`Failed to execute 'define' on 'CustomElementRegistry': the name "` + S + '" has already been used with this registry');
      if (this.m.get(P) !== void 0) throw new DOMException("Failed to execute 'define' on 'CustomElementRegistry': this constructor has already been used with this registry");
      var R = P.prototype.attributeChangedCallback, L = new Set(P.observedAttributes || []);
      Vt(P, L, R);
      var j = $e.call(Fe, S), H, ie, pe = (ie = (H = j) == null ? void 0 : H.s) != null ? ie : P.formAssociated || Ee.CustomElementRegistryPolyfill.formAssociated.has(S);
      if (pe && Ee.CustomElementRegistryPolyfill.formAssociated.add(S), pe != P.formAssociated) try {
        P.formAssociated = pe;
      } catch {
      }
      if (R = {
        tagName: S,
        g: P,
        connectedCallback: P.prototype.connectedCallback,
        disconnectedCallback: P.prototype.disconnectedCallback,
        adoptedCallback: P.prototype.adoptedCallback,
        attributeChangedCallback: R,
        formAssociated: pe,
        formAssociatedCallback: P.prototype.formAssociatedCallback,
        formDisabledCallback: P.prototype.formDisabledCallback,
        formResetCallback: P.prototype.formResetCallback,
        formStateRestoreCallback: P.prototype.formStateRestoreCallback,
        observedAttributes: L
      }, this.h.set(S, R), this.m.set(P, R), j || (j = ln(S), De.call(Fe, S, j)), this === window.customElements && (qe.set(P, R), R.o = j), j = this.i.get(S)) for (this.i.delete(S), j = y(j), L = j.next(); !L.done; L = j.next()) L = L.value, ge.delete(L), Ot(L, R, !0);
      return j = this.j.get(S), j !== void 0 && (j.resolve(P), this.j.delete(S)), P;
    }, At.prototype.upgrade = function(S) {
      for (var P = [], R = 0; R < arguments.length; ++R) P[R] = arguments[R];
      Ht.push(this), Fe.upgrade.apply(Fe, g(P)), Ht.pop();
    }, At.prototype.get = function(S) {
      var P;
      return (P = this.h.get(S)) == null ? void 0 : P.g;
    }, At.prototype.whenDefined = function(S) {
      var P = this.h.get(S);
      return P !== void 0 ? Promise.resolve(P.g) : (P = this.j.get(S), P === void 0 && (P = new dt(), this.j.set(S, P)), P.promise);
    };
    function it(S, P, R, L) {
      var j = S.i.get(R);
      j || S.i.set(R, j = /* @__PURE__ */ new Set()), L ? j.add(P) : j.delete(P);
    }
    var Dt;
    window.HTMLElement = function() {
      var S = Dt;
      if (S) return Dt = void 0, S;
      var P = qe.get(this.constructor);
      if (!P) throw new TypeError("Illegal constructor (custom element class must be registered with global customElements registry to be newable)");
      return S = Reflect.construct(Je, [], P.o), Object.setPrototypeOf(S, this.constructor.prototype), fe.set(S, P), S;
    }, window.HTMLElement.prototype = Je.prototype;
    function ln(S) {
      function P() {
        var R = Reflect.construct(Je, [], this.constructor);
        Object.setPrototypeOf(R, HTMLElement.prototype);
        e: {
          var L = R.getRootNode();
          if (!(L === document || L instanceof ShadowRoot)) {
            if (L = Ht[Ht.length - 1], L instanceof CustomElementRegistry) {
              var j = L;
              break e;
            }
            L = L.getRootNode(), L === document || L instanceof ShadowRoot || (L = ((j = K.get(L)) == null ? void 0 : j.getRootNode()) || document);
          }
          j = L.registry;
        }
        return j = j || window.customElements, (L = j.h.get(S)) ? Ot(R, L) : ge.set(R, j), R;
      }
      return a.Object.defineProperty(
        P,
        "formAssociated",
        { configurable: !0, enumerable: !0, get: function() {
          return Ee.CustomElementRegistryPolyfill.formAssociated.has(S);
        } }
      ), P.prototype.connectedCallback = function(R) {
        for (var L = [], j = 0; j < arguments.length; ++j) L[j] = arguments[j];
        Me(this), (j = fe.get(this)) ? j.connectedCallback && j.connectedCallback.apply(this, L) : it(ge.get(this), this, S, !0);
      }, P.prototype.disconnectedCallback = function(R) {
        for (var L = [], j = 0; j < arguments.length; ++j) L[j] = arguments[j];
        (j = fe.get(this)) ? j.disconnectedCallback && j.disconnectedCallback.apply(this, L) : it(
          ge.get(this),
          this,
          S,
          !1
        );
      }, P.prototype.adoptedCallback = function(R) {
        for (var L = [], j = 0; j < arguments.length; ++j) L[j] = arguments[j];
        var H, ie;
        (H = fe.get(this)) == null || (ie = H.adoptedCallback) == null || ie.apply(this, L);
      }, P.prototype.formAssociatedCallback = function(R) {
        for (var L = [], j = 0; j < arguments.length; ++j) L[j] = arguments[j];
        if (j = fe.get(this), j != null && j.formAssociated) {
          var H;
          j == null || (H = j.formAssociatedCallback) == null || H.apply(this, L);
        }
      }, P.prototype.formDisabledCallback = function(R) {
        for (var L = [], j = 0; j < arguments.length; ++j) L[j] = arguments[j];
        if (j = fe.get(this), j != null && j.formAssociated) {
          var H;
          j == null || (H = j.formDisabledCallback) == null || H.apply(this, L);
        }
      }, P.prototype.formResetCallback = function(R) {
        for (var L = [], j = 0; j < arguments.length; ++j) L[j] = arguments[j];
        if (j = fe.get(this), j != null && j.formAssociated) {
          var H;
          j == null || (H = j.formResetCallback) == null || H.apply(this, L);
        }
      }, P.prototype.formStateRestoreCallback = function(R) {
        for (var L = [], j = 0; j < arguments.length; ++j) L[j] = arguments[j];
        if (j = fe.get(this), j != null && j.formAssociated) {
          var H;
          j == null || (H = j.formStateRestoreCallback) == null || H.apply(this, L);
        }
      }, P;
    }
    window.CustomElementRegistry = At;
    function Vt(S, P, R) {
      if (P.size !== 0 && R !== void 0) {
        var L = S.prototype.setAttribute;
        L && (S.prototype.setAttribute = function(ie, pe) {
          if (Me(this), ie = ie.toLowerCase(), P.has(ie)) {
            var Ve = this.getAttribute(ie);
            L.call(this, ie, pe), R.call(this, ie, Ve, pe);
          } else L.call(this, ie, pe);
        });
        var j = S.prototype.removeAttribute;
        j && (S.prototype.removeAttribute = function(ie) {
          if (Me(this), ie = ie.toLowerCase(), P.has(ie)) {
            var pe = this.getAttribute(ie);
            j.call(this, ie), R.call(this, ie, pe, null);
          } else j.call(this, ie);
        });
        var H = S.prototype.toggleAttribute;
        H && (S.prototype.toggleAttribute = function(ie, pe) {
          if (Me(this), ie = ie.toLowerCase(), P.has(ie)) {
            var Ve = this.getAttribute(ie);
            H.call(this, ie, pe), pe = this.getAttribute(ie), Ve !== pe && R.call(this, ie, Ve, pe);
          } else H.call(this, ie, pe);
        });
      }
    }
    var St;
    document.readyState === "loading" && (St = /* @__PURE__ */ new Set(), document.addEventListener("readystatechange", function() {
      St.forEach(function(S) {
        return et(S, fe.get(S));
      });
    }, { once: !0 }));
    function Me(S) {
      var P;
      (P = St) != null && P.has(S) && et(S, fe.get(S));
    }
    function et(S, P) {
      var R;
      (R = St) == null || R.delete(S), P.attributeChangedCallback && P.observedAttributes.forEach(function(L) {
        S.hasAttribute(L) && P.attributeChangedCallback.call(S, L, null, S.getAttribute(L));
      });
    }
    function Tt(S) {
      var P = Object.getPrototypeOf(S);
      if (P !== window.HTMLElement) return P === Je ? Object.setPrototypeOf(S, window.HTMLElement) : Tt(P);
    }
    function Ot(S, P, R) {
      R = R === void 0 ? !1 : R, Object.setPrototypeOf(S, P.g.prototype), fe.set(S, P), Dt = S;
      try {
        new P.g();
      } catch {
        Tt(P.g), new P.g();
      }
      P.attributeChangedCallback && (St === void 0 || S.hasAttributes() ? et(S, P) : St.add(S)), R && P.connectedCallback && S.isConnected && P.connectedCallback.call(S);
    }
    var qt = Element.prototype.attachShadow;
    Element.prototype.attachShadow = function(S, P) {
      for (var R = [], L = 1; L < arguments.length; ++L) R[L - 1] = arguments[L];
      var j = Object.assign({}, S);
      return L = S.customElements, L = S.registry === void 0 ? L : S.registry, j = (delete j.customElements, delete j.registry, j), R = qt.call.apply(qt, [this, j].concat(g(R))), L !== void 0 && (R.customElements = R.registry = L), R;
    };
    var Ht = [document];
    function Ft(S, P, R) {
      var L = (R ? Object.getPrototypeOf(R) : S.prototype)[P];
      S.prototype[P] = function(j) {
        for (var H = [], ie = 0; ie < arguments.length; ++ie) H[ie] = arguments[ie];
        return Ht.push(this), H = L.apply(R || this, H), H !== void 0 && K.set(H, this), Ht.pop(), H;
      };
    }
    Ft(ShadowRoot, "createElement", document), Ft(ShadowRoot, "createElementNS", document), Ft(ShadowRoot, "importNode", document), Ft(Element, "insertAdjacentHTML");
    function wn(S) {
      var P = Object.getOwnPropertyDescriptor(S.prototype, "innerHTML");
      Object.defineProperty(S.prototype, "innerHTML", Object.assign({}, P, { set: function(R) {
        Ht.push(this), P.set.call(this, R), Ht.pop();
      } }));
    }
    if (wn(Element), wn(ShadowRoot), Object.defineProperty(window, "customElements", { value: new CustomElementRegistry(), configurable: !0, writable: !0 }), window.ElementInternals && window.ElementInternals.prototype.setFormValue) {
      var Dn = /* @__PURE__ */ new WeakMap(), zt = HTMLElement.prototype.attachInternals, E = ["setFormValue", "setValidity", "checkValidity", "reportValidity"];
      HTMLElement.prototype.attachInternals = function(S) {
        for (var P = [], R = 0; R < arguments.length; ++R) P[R] = arguments[R];
        return P = zt.call.apply(zt, [this].concat(g(P))), Dn.set(P, this), P;
      }, E.forEach(function(S) {
        var P = window.ElementInternals.prototype, R = P[S];
        P[S] = function(L) {
          for (var j = [], H = 0; H < arguments.length; ++H) j[H] = arguments[H];
          if (H = Dn.get(this), fe.get(H).formAssociated === !0) return R?.call.apply(R, [this].concat(g(j)));
          throw new DOMException("Failed to execute " + R + " on 'ElementInternals': The target element is not a form-associated custom element.");
        };
      });
      var b = function(S) {
        var P = $(Array, [].concat(g(S)), this.constructor);
        return P.l = S, P;
      }, z = b, W = Array;
      if (z.prototype = x(W.prototype), z.prototype.constructor = z, we) we(z, W);
      else for (var ot in W) if (ot != "prototype") if (Object.defineProperties) {
        var ze = Object.getOwnPropertyDescriptor(W, ot);
        ze && Object.defineProperty(z, ot, ze);
      } else z[ot] = W[ot];
      z.u = W.prototype, a.Object.defineProperty(b.prototype, "value", { configurable: !0, enumerable: !0, get: function() {
        var S;
        return ((S = this.l.find(function(P) {
          return P.checked === !0;
        })) == null ? void 0 : S.value) || "";
      } });
      var T = function(S) {
        var P = this, R = /* @__PURE__ */ new Map();
        S.forEach(function(L, j) {
          var H = L.getAttribute("name"), ie = R.get(H) || [];
          P[+j] = L, ie.push(L), R.set(H, ie);
        }), this.length = S.length, R.forEach(function(L, j) {
          L && j !== "length" && j !== "item" && j !== "namedItem" && (P[j] = L.length === 1 ? L[0] : new b(L));
        });
      };
      T.prototype.item = function(S) {
        var P;
        return (P = this[S]) != null ? P : null;
      }, T.prototype[Symbol.iterator] = function() {
        throw Error("Method not implemented.");
      }, T.prototype.namedItem = function(S) {
        var P;
        return (P = this[S]) != null ? P : null;
      };
      var F = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, "elements");
      Object.defineProperty(
        HTMLFormElement.prototype,
        "elements",
        { get: function() {
          var S = F.get.call(this), P = [];
          S = y(S);
          for (var R = S.next(); !R.done; R = S.next()) {
            R = R.value;
            var L = fe.get(R);
            L && L.formAssociated !== !0 || P.push(R);
          }
          return new T(P);
        } }
      );
    }
  }).call(typeof globalThis == "object" ? globalThis : window)), rl;
}
Sv();
const xv = /* @__PURE__ */ Ml({
  __name: "app",
  props: {
    api: { type: Object, required: !0 },
    pluginLocation: { type: String, required: !0 }
  },
  setup(e, { expose: t }) {
    t();
    const o = e;
    let a = fa(), c = () => {
    };
    const d = _f();
    hs(() => {
      c = o.api.activeFileName.subscribe(async (x, $) => {
        y(x), d.value = x;
      }), o.api.activeFileName.value && (d.value = o.api.activeFileName.value, y(o.api.activeFileName.value));
    }), Bu(() => {
      c();
    });
    async function y(x) {
      if (!x)
        return;
      const { xmlDocument: $ } = await bm({ databaseName: x });
      a.value = $;
    }
    const g = { props: o, get xmlDocument() {
      return a;
    }, set xmlDocument(x) {
      a = x;
    }, get unsubscribe() {
      return c;
    }, set unsubscribe(x) {
      c = x;
    }, filename: d, loadXMLDocument: y, OscdLoader: _v };
    return Object.defineProperty(g, "__isScriptSetup", { enumerable: !1, value: !0 }), g;
  }
});
function Ev(e, t, o, a, c, d) {
  return nf(), dh(a.OscdLoader, {
    doc: a.xmlDocument,
    pluginLocation: a.props.pluginLocation
  }, null, 8, ["doc", "pluginLocation"]);
}
const Tv = /* @__PURE__ */ Ff(xv, [["render", Ev], ["__scopeId", "data-v-37ddea6c"], ["__file", "/home/runner/work/set/set/packages/extensions/openscd-plugin-loader/src/app.vue"]]);
function Xv(e, t) {
  const o = Cv(import.meta.url);
  if (!document.getElementById(e)) {
    console.error({ msg: "could not found root element", rootId: e });
    return;
  }
  const c = nm(Tv, { api: t, pluginLocation: o });
  return c.mount(`#${e}`), c.unmount;
}
function Cv(e) {
  const o = new URL(e).searchParams.get("plugin");
  if (o === "")
    throw new Error(`could not extract plugin location from url:${e}`);
  return console.debug("Extracted plugin location:", o), Av(import.meta.url, o);
}
function Av(e, t) {
  if (Iv(t)) {
    const o = new URL(e);
    return new URL(t, o.origin).toString();
  } else
    return t;
}
function Iv(e) {
  return e.startsWith("/");
}
export {
  Xv as default
};
