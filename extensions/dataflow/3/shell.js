(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`/*! tailwindcss v4.1.12 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-white:#fff;--spacing:.25rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-bold:700;--radius-sm:.25rem;--radius-xl:.75rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open],.modal-open,.modal-toggle:checked+.modal):not(.modal-start,.modal-end){scrollbar-gutter:stable}:root,[data-theme]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}:where(:root),:root:has(input.theme-controller[value=ocean-light]:checked),[data-theme=ocean-light]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(37% 0 0);--color-primary:oklch(58.13% .0903 209.8);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(65.24% .0821 207.95);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(98% .001 106.423);--color-neutral:oklch(55% .013 58.071);--color-neutral-content:oklch(98% .031 120.757);--color-info:oklch(70% .165 254.624);--color-info-content:oklch(98% .001 106.423);--color-success:oklch(72% .219 149.579);--color-success-content:oklch(98% .001 106.423);--color-warning:oklch(87% .169 91.605);--color-warning-content:oklch(98% .001 106.423);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(98% .001 106.423);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.21875rem;--size-field:.21875rem;--border:1.5px;--depth:1;--noise:1;--border-color:var(--color-base-content)}}@layer components;@layer utilities{.modal{pointer-events:none;visibility:hidden;width:100%;max-width:none;height:100%;max-height:none;color:inherit;transition:translate .3s ease-out,visibility .3s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;overscroll-behavior:contain;z-index:999;background-color:#0000;place-items:center;margin:0;padding:0;display:grid;position:fixed;inset:0;overflow:hidden}.modal::backdrop{display:none}.modal.modal-open,.modal[open],.modal:target{pointer-events:auto;visibility:visible;opacity:1;background-color:#0006}:is(.modal.modal-open,.modal[open],.modal:target) .modal-box{opacity:1;translate:0;scale:1}@starting-style{.modal.modal-open,.modal[open],.modal:target{visibility:hidden;opacity:0}}.menu{--menu-active-fg:var(--color-neutral-content);--menu-active-bg:var(--color-neutral);flex-flow:column wrap;width:fit-content;padding:.5rem;font-size:.875rem;display:flex}.menu :where(li ul){white-space:nowrap;margin-inline-start:1rem;padding-inline-start:.5rem;position:relative}.menu :where(li ul):before{background-color:var(--color-base-content);opacity:.1;width:var(--border);content:"";inset-inline-start:0;position:absolute;top:.75rem;bottom:.75rem}.menu :where(li>.menu-dropdown:not(.menu-dropdown-show)){display:none}.menu :where(li:not(.menu-title)>:not(ul,details,.menu-title,.btn)),.menu :where(li:not(.menu-title)>details>summary:not(.menu-title)){border-radius:var(--radius-field);text-align:start;text-wrap:balance;-webkit-user-select:none;user-select:none;grid-auto-columns:minmax(auto,max-content) auto max-content;grid-auto-flow:column;align-content:flex-start;align-items:center;gap:.5rem;padding-block:.375rem;padding-inline:.75rem;transition-property:color,background-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:grid}.menu :where(li>details>summary){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li>details>summary){outline-offset:2px;outline:2px solid #0000}}.menu :where(li>details>summary)::-webkit-details-marker{display:none}:is(.menu :where(li>details>summary),.menu :where(li>.menu-dropdown-toggle)):after{content:"";transform-origin:50%;pointer-events:none;justify-self:flex-end;width:.375rem;height:.375rem;transition-property:rotate,translate;transition-duration:.2s;display:block;translate:0 -1px;rotate:-135deg;box-shadow:inset 2px 2px}.menu :where(li>details[open]>summary):after,.menu :where(li>.menu-dropdown-toggle.menu-dropdown-show):after{translate:0 1px;rotate:45deg}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{color:var(--color-base-content);--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){box-shadow:inset 0 1px #00000003,inset 0 -1px #ffffff03}.menu :where(li:empty){background-color:var(--color-base-content);opacity:.1;height:1px;margin:.5rem 1rem}.menu :where(li){flex-flow:column wrap;flex-shrink:0;align-items:stretch;display:flex;position:relative}.menu :where(li) .badge{justify-self:flex-end}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{outline-offset:2px;outline:2px solid #0000}}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{color:var(--menu-active-fg);background-color:var(--menu-active-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):not(:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):active){box-shadow:0 2px calc(var(--depth)*3px) -2px var(--menu-active-bg)}.menu :where(li).menu-disabled{pointer-events:none;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li).menu-disabled{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.menu .dropdown:focus-within .menu-dropdown-toggle:after{translate:0 1px;rotate:45deg}.menu .dropdown-content{margin-top:.5rem;padding:.5rem}.menu .dropdown-content:before{display:none}.dropdown{position-area:var(--anchor-v,bottom)var(--anchor-h,span-right);display:inline-block;position:relative}.dropdown>:not(summary):focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.dropdown>:not(summary):focus{outline-offset:2px;outline:2px solid #0000}}.dropdown .dropdown-content{position:absolute}.dropdown:not(details,.dropdown-open,.dropdown-hover:hover,:focus-within) .dropdown-content{transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover],.dropdown .dropdown-content{z-index:999;transition-behavior:allow-discrete;transition-property:opacity,scale,display;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);animation:.2s dropdown}@starting-style{.dropdown[popover],.dropdown .dropdown-content{opacity:0;scale:95%}}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within)>[tabindex]:first-child{pointer-events:none}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within) .dropdown-content{opacity:1}.dropdown.dropdown-hover:hover .dropdown-content{opacity:1;scale:100%}.dropdown:is(details) summary::-webkit-details-marker{display:none}:is(.dropdown.dropdown-open,.dropdown:focus,.dropdown:focus-within) .dropdown-content{scale:100%}.dropdown:where([popover]){background:0 0}.dropdown[popover]{color:inherit;position:fixed}@supports not (position-area:bottom){.dropdown[popover]{margin:auto}.dropdown[popover].dropdown-open:not(:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover]::backdrop{background-color:oklab(0% none none/.3)}}.dropdown[popover]:not(.dropdown-open,:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}.prose .btn{text-decoration-line:none}@media (hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){box-shadow:none}.btn:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.btn:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-block}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input{cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input{color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input)::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input)::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input{box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.table{border-radius:var(--radius-box);text-align:left;width:100%;font-size:.875rem;position:relative}.table:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media (hover:hover){:is(.table tr.row-hover,.table tr.row-hover:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.table :where(thead,tfoot){font-size:.875rem;font-weight:600}.table :where(tfoot){border-top:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(tfoot){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.table :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.select{border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;text-overflow:ellipsis;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:1rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.select{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.select{border-color:var(--input-color);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.select{--size:calc(var(--size-field,.25rem)*10)}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}.select select{appearance:none;background:inherit;border-radius:inherit;border-style:none;width:calc(100% + 2.75rem);height:calc(100% - 2px);margin-inline:-1rem -1.75rem;padding-inline:1rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.select select:focus,.select select:focus-within{outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.select:focus,.select:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.select:focus,.select:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select{cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select{color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select)::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select)::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}.checkbox{border:var(--border)solid var(--input-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.checkbox{border:var(--border)solid var(--input-color,color-mix(in oklab,var(--color-base-content)20%,#0000))}}.checkbox{cursor:pointer;appearance:none;border-radius:var(--radius-selector);vertical-align:middle;color:var(--color-base-content);box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 0 #0000 inset,0 0 #0000;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);flex-shrink:0;padding:.25rem;transition:background-color .2s,box-shadow .2s;display:inline-block;position:relative}.checkbox:before{--tw-content:"";content:var(--tw-content);opacity:0;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,70% 80%,70% 100%);width:100%;height:100%;box-shadow:0 3px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-color:currentColor;font-size:1rem;line-height:.75;transition:clip-path .3s .1s,opacity .1s .1s,rotate .3s .1s,translate .3s .1s;display:block;rotate:45deg}.checkbox:focus-visible{outline:2px solid var(--input-color,currentColor);outline-offset:2px}.checkbox:checked,.checkbox[aria-checked=true]{background-color:var(--input-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.checkbox:checked,.checkbox[aria-checked=true]{background-color:var(--input-color,color-mix(in oklab,var(--color-base-content)20%,#0000))}}.checkbox:checked,.checkbox[aria-checked=true]{box-shadow:0 0 #0000 inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1))}:is(.checkbox:checked,.checkbox[aria-checked=true]):before{clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 0%,70% 0%,70% 100%);opacity:1}@media (forced-colors:active){:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}@media print{:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}.checkbox:indeterminate{background-color:var(--input-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.checkbox:indeterminate{background-color:var(--input-color,color-mix(in oklab,var(--color-base-content)20%,#0000))}}.checkbox:indeterminate:before{opacity:1;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,80% 80%,80% 100%);translate:0 -35%;rotate:none}.checkbox:disabled{cursor:not-allowed;opacity:.2}.absolute{position:absolute}.relative{position:relative}.top-\\[1\\.5rem\\]{top:1.5rem}.right-\\[1\\.5rem\\]{right:1.5rem}.btn-active{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn-active{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn-active{--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0);isolation:isolate}.-z-1{z-index:-1}.z-1{z-index:1}.col-span-1{grid-column:span 1/span 1}.col-span-2{grid-column:span 2/span 2}.modal-box{background-color:var(--color-base-100);border-top-left-radius:var(--modal-tl,var(--radius-box));border-top-right-radius:var(--modal-tr,var(--radius-box));border-bottom-left-radius:var(--modal-bl,var(--radius-box));border-bottom-right-radius:var(--modal-br,var(--radius-box));opacity:0;overscroll-behavior:contain;grid-row-start:1;grid-column-start:1;width:91.6667%;max-width:32rem;max-height:100vh;padding:1.5rem;transition:translate .3s ease-out,scale .3s ease-out,opacity .2s ease-out 50ms,box-shadow .3s ease-out;overflow-y:auto;scale:95%;box-shadow:0 25px 50px -12px #00000040}.col-start-1{grid-column-start:1}.col-start-2{grid-column-start:2}.col-start-3{grid-column-start:3}.col-start-4{grid-column-start:4}.col-start-5{grid-column-start:5}.row-span-full{grid-row:1/-1}.row-start-1{grid-row-start:1}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.label{white-space:nowrap;color:currentColor;align-items:center;gap:.375rem;display:inline-flex}@supports (color:color-mix(in lab,red,red)){.label{color:color-mix(in oklab,currentColor 60%,transparent)}}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid currentColor;margin-inline:-.75rem .75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid currentColor;margin-inline:.75rem -.75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.modal-action{justify-content:flex-end;gap:.5rem;margin-top:1.5rem;display:flex}.mt-4{margin-top:calc(var(--spacing)*4)}.-mr-\\[9px\\]{margin-right:-9px}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-\\[9px\\]{margin-right:9px}.mb-8{margin-bottom:calc(var(--spacing)*8)}.-ml-\\[9px\\]{margin-left:-9px}.alert{border-radius:var(--radius-box);color:var(--color-base-content);background-color:var(--alert-color,var(--color-base-200));text-align:start;border:var(--border)solid var(--color-base-200);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px #000,0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08));grid-template-columns:auto;grid-auto-flow:column;justify-content:start;place-items:center start;gap:1rem;padding-block:.75rem;padding-inline:1rem;font-size:.875rem;line-height:1.25rem;display:grid}@supports (color:color-mix(in lab,red,red)){.alert{box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px color-mix(in oklab,color-mix(in oklab,#000 20%,var(--alert-color,var(--color-base-200)))calc(var(--depth)*20%),#0000),0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08))}}.alert:has(:nth-child(2)){grid-template-columns:auto minmax(auto,1fr)}.alert.alert-outline{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none}.alert.alert-dash{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none;border-style:dashed}.alert.alert-soft{color:var(--alert-color,var(--color-base-content));background:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{background:color-mix(in oklab,var(--alert-color,var(--color-base-content))8%,var(--color-base-100))}}.alert.alert-soft{border-color:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{border-color:color-mix(in oklab,var(--alert-color,var(--color-base-content))10%,var(--color-base-100))}}.alert.alert-soft{box-shadow:none;background-image:none}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.table{display:table}.btn-circle{width:var(--size);height:var(--size);border-radius:3.40282e38px;padding-inline:0}.btn-square{width:var(--size);height:var(--size);padding-inline:0}.h-\\[2px\\]{height:2px}.h-\\[20px\\]{height:20px}.min-h-\\[500px\\]{min-height:500px}.btn-wide{width:100%;max-width:16rem}.btn-block{width:100%}.w-52{width:calc(var(--spacing)*52)}.w-\\[20px\\]{width:20px}.w-full{width:100%}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-\\[1fr_20px_1fr_20px_1fr\\]{grid-template-columns:1fr 20px 1fr 20px 1fr}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.gap-4{gap:calc(var(--spacing)*4)}.self-center{align-self:center}.justify-self-center{justify-self:center}.justify-self-end{justify-self:flex-end}.justify-self-start{justify-self:flex-start}.rounded-full{border-radius:3.40282e38px}.rounded-sm{border-radius:var(--radius-sm)}.rounded-xl{border-radius:var(--radius-xl)}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-3{border-style:var(--tw-border-style);border-width:3px}.btn-dash:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none;border-style:dashed}@media (hover:none){.btn-dash:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none;border-style:dashed}}.border-none{--tw-border-style:none;border-style:none}.border-\\(--color-ocean-gray-100\\){border-color:var(--color-ocean-gray-100)}.bg-\\(--color-ocean-gray-50\\){background-color:var(--color-ocean-gray-50)}.bg-\\(--color-ocean-gray-100\\){background-color:var(--color-ocean-gray-100)}.bg-\\(--color-primary\\){background-color:var(--color-primary)}.bg-base-100{background-color:var(--color-base-100)}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-10{padding:calc(var(--spacing)*10)}.px-2{padding-inline:calc(var(--spacing)*2)}.py-1{padding-block:calc(var(--spacing)*1)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.text-white{color:var(--color-white)}.btn-link{--btn-border:#0000;--btn-bg:#0000;--btn-fg:var(--color-primary);--btn-noise:none;--btn-shadow:"";outline-color:currentColor;text-decoration-line:underline}.btn-link:is(.btn-active,:hover,:active:focus,:focus-visible){--btn-border:#0000;--btn-bg:#0000;text-decoration-line:underline}@media (hover:none){.btn-link:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){text-decoration-line:none}}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible):not(:disabled,[disabled],.btn-disabled){--btn-fg:currentColor;outline-color:currentColor}@media (hover:none){.btn-ghost:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none;--btn-fg:currentColor}}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.btn-outline:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none}@media (hover:none){.btn-outline:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-fg:var(--btn-color,var(--color-base-content));--btn-bg:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-content))8%,var(--color-base-100))}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-content))10%,var(--color-base-100))}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-noise:none}@media (hover:none){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-fg:var(--btn-color,var(--color-base-content));--btn-bg:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-content))8%,var(--color-base-100))}}.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-content))10%,var(--color-base-100))}}.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-noise:none}}.btn-lg{--fontsize:1.125rem;--btn-p:1.25rem;--size:calc(var(--size-field,.25rem)*12)}.btn-md{--fontsize:.875rem;--btn-p:1rem;--size:calc(var(--size-field,.25rem)*10)}.btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}.btn-xl{--fontsize:1.375rem;--btn-p:1.5rem;--size:calc(var(--size-field,.25rem)*14)}.btn-xs{--fontsize:.6875rem;--btn-p:.5rem;--size:calc(var(--size-field,.25rem)*6)}.btn-accent{--btn-color:var(--color-accent);--btn-fg:var(--color-accent-content)}.btn-error{--btn-color:var(--color-error);--btn-fg:var(--color-error-content)}.btn-info{--btn-color:var(--color-info);--btn-fg:var(--color-info-content)}.btn-neutral{--btn-color:var(--color-neutral);--btn-fg:var(--color-neutral-content)}.btn-primary{--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content)}.btn-secondary{--btn-color:var(--color-secondary);--btn-fg:var(--color-secondary-content)}.btn-success{--btn-color:var(--color-success);--btn-fg:var(--color-success-content)}.btn-warning{--btn-color:var(--color-warning);--btn-fg:var(--color-warning-content)}.disabled\\:text-\\(--color-ocean-gray-300\\):disabled{color:var(--color-ocean-gray-300)}}:root{--color-ocean-gray-00:#fff;--color-ocean-gray-25:#fafbfb;--color-ocean-gray-50:#f5f6f7;--color-ocean-gray-75:#eaeeef;--color-ocean-gray-100:#e1e4e6;--color-ocean-gray-150:#c6ced1;--color-ocean-gray-200:#bac1c4;--color-ocean-gray-250:#9fadb2;--color-ocean-gray-300:#889499;--color-ocean-gray-350:#72858c;--color-ocean-gray-400:#617177;--color-ocean-gray-450:#3f555e;--color-ocean-gray-500:#394d55;--color-ocean-gray-550:#34464d;--color-ocean-gray-600:#2e3e44;--color-ocean-gray-650:#27353b;--color-ocean-gray-700:#222e33;--color-ocean-gray-750:#1f272b;--color-ocean-gray-800:#171f22;--color-ocean-gray-850:#11171a;--color-ocean-gray-900:#0b0f11;--color-chart-1:#f7931e;--color-chart-2:#40535b;--color-chart-3:#2798aa;--color-chart-4:#6da89c;--color-chart-5:#a4cadd;--color-chart-6:#97b42d;--color-chart-7:#ffcb05;--color-chart-8:#ee652e;--color-chart-9:#528694;--color-chart-10:#a10f3b}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes progress{50%{background-position-x:-115%}}@keyframes dropdown{0%{opacity:0}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}`)),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
/**
* @vue/shared v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Bo(e) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const i of e.split(",")) n[i] = 1;
  return (i) => i in n;
}
const Se = {}, qn = [], Rt = () => {
}, ma = () => !1, xi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ko = (e) => e.startsWith("onUpdate:"), it = Object.assign, Lo = (e, n) => {
  const i = e.indexOf(n);
  i > -1 && e.splice(i, 1);
}, el = Object.prototype.hasOwnProperty, Re = (e, n) => el.call(e, n), le = Array.isArray, Wn = (e) => Pr(e) === "[object Map]", er = (e) => Pr(e) === "[object Set]", Ds = (e) => Pr(e) === "[object Date]", pe = (e) => typeof e == "function", He = (e) => typeof e == "string", Kt = (e) => typeof e == "symbol", De = (e) => e !== null && typeof e == "object", ga = (e) => (De(e) || pe(e)) && pe(e.then) && pe(e.catch), ya = Object.prototype.toString, Pr = (e) => ya.call(e), tl = (e) => Pr(e).slice(8, -1), _a = (e) => Pr(e) === "[object Object]", Uo = (e) => He(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, _r = /* @__PURE__ */ Bo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ti = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return ((i) => n[i] || (n[i] = e(i)));
}, nl = /-(\w)/g, gn = Ti(
  (e) => e.replace(nl, (n, i) => i ? i.toUpperCase() : "")
), rl = /\B([A-Z])/g, In = Ti(
  (e) => e.replace(rl, "-$1").toLowerCase()
), va = Ti((e) => e.charAt(0).toUpperCase() + e.slice(1)), ho = Ti(
  (e) => e ? `on${va(e)}` : ""
), hn = (e, n) => !Object.is(e, n), ci = (e, ...n) => {
  for (let i = 0; i < e.length; i++)
    e[i](...n);
}, ba = (e, n, i, s = !1) => {
  Object.defineProperty(e, n, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: i
  });
}, mi = (e) => {
  const n = parseFloat(e);
  return isNaN(n) ? e : n;
};
let ks;
const Ri = () => ks || (ks = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function xt(e) {
  if (le(e)) {
    const n = {};
    for (let i = 0; i < e.length; i++) {
      const s = e[i], a = He(s) ? al(s) : xt(s);
      if (a)
        for (const c in a)
          n[c] = a[c];
    }
    return n;
  } else if (He(e) || De(e))
    return e;
}
const il = /;(?![^(]*\))/g, ol = /:([^]+)/, sl = /\/\*[^]*?\*\//g;
function al(e) {
  const n = {};
  return e.replace(sl, "").split(il).forEach((i) => {
    if (i) {
      const s = i.split(ol);
      s.length > 1 && (n[s[0].trim()] = s[1].trim());
    }
  }), n;
}
function Ho(e) {
  let n = "";
  if (He(e))
    n = e;
  else if (le(e))
    for (let i = 0; i < e.length; i++) {
      const s = Ho(e[i]);
      s && (n += s + " ");
    }
  else if (De(e))
    for (const i in e)
      e[i] && (n += i + " ");
  return n.trim();
}
const ul = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ll = /* @__PURE__ */ Bo(ul);
function wa(e) {
  return !!e || e === "";
}
function cl(e, n) {
  if (e.length !== n.length) return !1;
  let i = !0;
  for (let s = 0; i && s < e.length; s++)
    i = Dr(e[s], n[s]);
  return i;
}
function Dr(e, n) {
  if (e === n) return !0;
  let i = Ds(e), s = Ds(n);
  if (i || s)
    return i && s ? e.getTime() === n.getTime() : !1;
  if (i = Kt(e), s = Kt(n), i || s)
    return e === n;
  if (i = le(e), s = le(n), i || s)
    return i && s ? cl(e, n) : !1;
  if (i = De(e), s = De(n), i || s) {
    if (!i || !s)
      return !1;
    const a = Object.keys(e).length, c = Object.keys(n).length;
    if (a !== c)
      return !1;
    for (const d in e) {
      const p = e.hasOwnProperty(d), m = n.hasOwnProperty(d);
      if (p && !m || !p && m || !Dr(e[d], n[d]))
        return !1;
    }
  }
  return String(e) === String(n);
}
function Fo(e, n) {
  return e.findIndex((i) => Dr(i, n));
}
const Ea = (e) => !!(e && e.__v_isRef === !0), ht = (e) => He(e) ? e : e == null ? "" : le(e) || De(e) && (e.toString === ya || !pe(e.toString)) ? Ea(e) ? ht(e.value) : JSON.stringify(e, Oa, 2) : String(e), Oa = (e, n) => Ea(n) ? Oa(e, n.value) : Wn(n) ? {
  [`Map(${n.size})`]: [...n.entries()].reduce(
    (i, [s, a], c) => (i[mo(s, c) + " =>"] = a, i),
    {}
  )
} : er(n) ? {
  [`Set(${n.size})`]: [...n.values()].map((i) => mo(i))
} : Kt(n) ? mo(n) : De(n) && !le(n) && !_a(n) ? String(n) : n, mo = (e, n = "") => {
  var i;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Kt(e) ? `Symbol(${(i = e.description) != null ? i : n})` : e
  );
};
var fl = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_13ba4977-2dec-469f-8127-fc7a7e4511bc", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "pnpm/10.10.0 npm/? node/v20.19.4 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_13ba4977-2dec-469f-8127-fc7a7e4511bc", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/usr/local/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/set/set/packages/extensions/dataflow/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "SeptKit", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-9.0.0", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.2.13676358", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "210705285", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_shared_workspace_lockfile: "", SYSTEMD_EXEC_PID: "1891", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250818.1.0", LOGNAME: "runner", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", npm_config_catalog: '{"@septkit/fileio":"0.0.3","@septkit/ui":"0.0.7","dexie":"^4.2.0"}', CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.12/x64", JOURNAL_STREAM: "9:11636", GITHUB_WORKFLOW: "Deploy Ext. Dataflow", _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure", GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.6/x64", npm_config_registry: "https://registry.npmjs.org/", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", GITHUB_RUN_ID: "17265629086", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "2218280cce85120d1067fd605e74111d058873c8", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "SeptKit/set/.github/workflows/deploy-ext-dataflow.yml@refs/heads/main", GITHUB_ACTION_REPOSITORY: "", ENABLE_RUNNER_TRACING: "true", npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node-gyp-bin:/home/runner/work/set/set/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_7b8f2f1b-77c5-460c-8502-75f87bb048dc", INVOCATION_ID: "8d05b2d0ad714a6f830cf88d23a53222", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", npm_package_name: "Dataflow Extension", NODE: "/usr/local/bin/node", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "8", GITHUB_TRIGGERING_ACTOR: "NgoEva", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", npm_config_frozen_lockfile: "", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 1000004875", XDG_CONFIG_HOME: "/home/runner/.config", GITHUB_REF_NAME: "main", GITHUB_REPOSITORY: "SeptKit/set", npm_lifecycle_script: "vite build", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", SHELL: "/bin/bash", GITHUB_REPOSITORY_ID: "1003638225", GITHUB_ACTIONS: "true", NODE_PATH: "/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.1.3_@types+node@22.18.0_jiti@2.5.1_lightningcss@1.30.1/node_modules/vite/bin/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.1.3_@types+node@22.18.0_jiti@2.5.1_lightningcss@1.30.1/node_modules/vite/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.1.3_@types+node@22.18.0_jiti@2.5.1_lightningcss@1.30.1/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/node_modules", npm_package_version: "3", npm_lifecycle_event: "build", npm_config_verify_deps_before_run: "false", GITHUB_REF_PROTECTED: "true", GITHUB_WORKSPACE: "/home/runner/work/set/set", ACCEPT_EULA: "Y", GITHUB_JOB: "build", npm_config_sharedWorkspaceLockfile: "", GITHUB_SHA: "2218280cce85120d1067fd605e74111d058873c8", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/main", GITHUB_ACTOR: "NgoEva", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_13ba4977-2dec-469f-8127-fc7a7e4511bc", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/set/set/packages/extensions/dataflow", GITHUB_ACTOR_ID: "32981638", RUNNER_WORKSPACE: "/home/runner/work/set", npm_config_link_workspace_packages: "true", npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/pnpm.cjs", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_13ba4977-2dec-469f-8127-fc7a7e4511bc", EDGEWEBDRIVER: "/usr/local/share/edge_driver", npm_config__jsr_registry: "https://npm.jsr.io/", npm_command: "run-script", PNPM_SCRIPT_SRC_DIR: "/home/runner/work/set/set/packages/extensions/dataflow", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_13ba4977-2dec-469f-8127-fc7a7e4511bc", INIT_CWD: "/home/runner/work/set/set/packages/extensions/dataflow", NODE_ENV: "production", LAUNCH_EDITOR: "code" };
let ft;
class dl {
  constructor(n = !1) {
    this.detached = n, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ft, !n && ft && (this.index = (ft.scopes || (ft.scopes = [])).push(
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
      const i = ft;
      try {
        return ft = this, n();
      } finally {
        ft = i;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ft, ft = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ft = this.prevScope, this.prevScope = void 0);
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
        const a = this.parent.scopes.pop();
        a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function pl() {
  return ft;
}
let Ie;
const go = /* @__PURE__ */ new WeakSet();
class xa {
  constructor(n) {
    this.fn = n, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ft && ft.active && ft.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, go.has(this) && (go.delete(this), this.trigger()));
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
    this.flags |= 2, Ms(this), Sa(this);
    const n = Ie, i = St;
    Ie = this, St = !0;
    try {
      return this.fn();
    } finally {
      Aa(this), Ie = n, St = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let n = this.deps; n; n = n.nextDep)
        qo(n);
      this.deps = this.depsTail = void 0, Ms(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? go.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ro(this) && this.run();
  }
  get dirty() {
    return Ro(this);
  }
}
let Ta = 0, vr, br;
function Ra(e, n = !1) {
  if (e.flags |= 8, n) {
    e.next = br, br = e;
    return;
  }
  e.next = vr, vr = e;
}
function Vo() {
  Ta++;
}
function Go() {
  if (--Ta > 0)
    return;
  if (br) {
    let n = br;
    for (br = void 0; n; ) {
      const i = n.next;
      n.next = void 0, n.flags &= -9, n = i;
    }
  }
  let e;
  for (; vr; ) {
    let n = vr;
    for (vr = void 0; n; ) {
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
function Sa(e) {
  for (let n = e.deps; n; n = n.nextDep)
    n.version = -1, n.prevActiveLink = n.dep.activeLink, n.dep.activeLink = n;
}
function Aa(e) {
  let n, i = e.depsTail, s = i;
  for (; s; ) {
    const a = s.prevDep;
    s.version === -1 ? (s === i && (i = a), qo(s), hl(s)) : n = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = a;
  }
  e.deps = n, e.depsTail = i;
}
function Ro(e) {
  for (let n = e.deps; n; n = n.nextDep)
    if (n.dep.version !== n.version || n.dep.computed && (Na(n.dep.computed) || n.dep.version !== n.version))
      return !0;
  return !!e._dirty;
}
function Na(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Rr) || (e.globalVersion = Rr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ro(e))))
    return;
  e.flags |= 2;
  const n = e.dep, i = Ie, s = St;
  Ie = e, St = !0;
  try {
    Sa(e);
    const a = e.fn(e._value);
    (n.version === 0 || hn(a, e._value)) && (e.flags |= 128, e._value = a, n.version++);
  } catch (a) {
    throw n.version++, a;
  } finally {
    Ie = i, St = s, Aa(e), e.flags &= -3;
  }
}
function qo(e, n = !1) {
  const { dep: i, prevSub: s, nextSub: a } = e;
  if (s && (s.nextSub = a, e.prevSub = void 0), a && (a.prevSub = s, e.nextSub = void 0), i.subs === e && (i.subs = s, !s && i.computed)) {
    i.computed.flags &= -5;
    for (let c = i.computed.deps; c; c = c.nextDep)
      qo(c, !0);
  }
  !n && !--i.sc && i.map && i.map.delete(i.key);
}
function hl(e) {
  const { prevDep: n, nextDep: i } = e;
  n && (n.nextDep = i, e.prevDep = void 0), i && (i.prevDep = n, e.nextDep = void 0);
}
let St = !0;
const Ia = [];
function Lt() {
  Ia.push(St), St = !1;
}
function Ut() {
  const e = Ia.pop();
  St = e === void 0 ? !0 : e;
}
function Ms(e) {
  const { cleanup: n } = e;
  if (e.cleanup = void 0, n) {
    const i = Ie;
    Ie = void 0;
    try {
      n();
    } finally {
      Ie = i;
    }
  }
}
let Rr = 0;
class ml {
  constructor(n, i) {
    this.sub = n, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Wo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(n) {
    this.computed = n, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(n) {
    if (!Ie || !St || Ie === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== Ie)
      i = this.activeLink = new ml(Ie, this), Ie.deps ? (i.prevDep = Ie.depsTail, Ie.depsTail.nextDep = i, Ie.depsTail = i) : Ie.deps = Ie.depsTail = i, Ca(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const s = i.nextDep;
      s.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = s), i.prevDep = Ie.depsTail, i.nextDep = void 0, Ie.depsTail.nextDep = i, Ie.depsTail = i, Ie.deps === i && (Ie.deps = s);
    }
    return i;
  }
  trigger(n) {
    this.version++, Rr++, this.notify(n);
  }
  notify(n) {
    Vo();
    try {
      fl.NODE_ENV;
      for (let i = this.subs; i; i = i.prevSub)
        i.sub.notify() && i.sub.dep.notify();
    } finally {
      Go();
    }
  }
}
function Ca(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const n = e.dep.computed;
    if (n && !e.dep.subs) {
      n.flags |= 20;
      for (let s = n.deps; s; s = s.nextDep)
        Ca(s);
    }
    const i = e.dep.subs;
    i !== e && (e.prevSub = i, i && (i.nextSub = e)), e.dep.subs = e;
  }
}
const So = /* @__PURE__ */ new WeakMap(), An = Symbol(
  ""
), Ao = Symbol(
  ""
), Sr = Symbol(
  ""
);
function nt(e, n, i) {
  if (St && Ie) {
    let s = So.get(e);
    s || So.set(e, s = /* @__PURE__ */ new Map());
    let a = s.get(i);
    a || (s.set(i, a = new Wo()), a.map = s, a.key = i), a.track();
  }
}
function Yt(e, n, i, s, a, c) {
  const d = So.get(e);
  if (!d) {
    Rr++;
    return;
  }
  const p = (m) => {
    m && m.trigger();
  };
  if (Vo(), n === "clear")
    d.forEach(p);
  else {
    const m = le(e), I = m && Uo(i);
    if (m && i === "length") {
      const S = Number(s);
      d.forEach((C, K) => {
        (K === "length" || K === Sr || !Kt(K) && K >= S) && p(C);
      });
    } else
      switch ((i !== void 0 || d.has(void 0)) && p(d.get(i)), I && p(d.get(Sr)), n) {
        case "add":
          m ? I && p(d.get("length")) : (p(d.get(An)), Wn(e) && p(d.get(Ao)));
          break;
        case "delete":
          m || (p(d.get(An)), Wn(e) && p(d.get(Ao)));
          break;
        case "set":
          Wn(e) && p(d.get(An));
          break;
      }
  }
  Go();
}
function Vn(e) {
  const n = we(e);
  return n === e ? n : (nt(n, "iterate", Sr), Et(e) ? n : n.map(ze));
}
function Si(e) {
  return nt(e = we(e), "iterate", Sr), e;
}
const gl = {
  __proto__: null,
  [Symbol.iterator]() {
    return yo(this, Symbol.iterator, ze);
  },
  concat(...e) {
    return Vn(this).concat(
      ...e.map((n) => le(n) ? Vn(n) : n)
    );
  },
  entries() {
    return yo(this, "entries", (e) => (e[1] = ze(e[1]), e));
  },
  every(e, n) {
    return qt(this, "every", e, n, void 0, arguments);
  },
  filter(e, n) {
    return qt(this, "filter", e, n, (i) => i.map(ze), arguments);
  },
  find(e, n) {
    return qt(this, "find", e, n, ze, arguments);
  },
  findIndex(e, n) {
    return qt(this, "findIndex", e, n, void 0, arguments);
  },
  findLast(e, n) {
    return qt(this, "findLast", e, n, ze, arguments);
  },
  findLastIndex(e, n) {
    return qt(this, "findLastIndex", e, n, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, n) {
    return qt(this, "forEach", e, n, void 0, arguments);
  },
  includes(...e) {
    return _o(this, "includes", e);
  },
  indexOf(...e) {
    return _o(this, "indexOf", e);
  },
  join(e) {
    return Vn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return _o(this, "lastIndexOf", e);
  },
  map(e, n) {
    return qt(this, "map", e, n, void 0, arguments);
  },
  pop() {
    return hr(this, "pop");
  },
  push(...e) {
    return hr(this, "push", e);
  },
  reduce(e, ...n) {
    return js(this, "reduce", e, n);
  },
  reduceRight(e, ...n) {
    return js(this, "reduceRight", e, n);
  },
  shift() {
    return hr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, n) {
    return qt(this, "some", e, n, void 0, arguments);
  },
  splice(...e) {
    return hr(this, "splice", e);
  },
  toReversed() {
    return Vn(this).toReversed();
  },
  toSorted(e) {
    return Vn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Vn(this).toSpliced(...e);
  },
  unshift(...e) {
    return hr(this, "unshift", e);
  },
  values() {
    return yo(this, "values", ze);
  }
};
function yo(e, n, i) {
  const s = Si(e), a = s[n]();
  return s !== e && !Et(e) && (a._next = a.next, a.next = () => {
    const c = a._next();
    return c.value && (c.value = i(c.value)), c;
  }), a;
}
const yl = Array.prototype;
function qt(e, n, i, s, a, c) {
  const d = Si(e), p = d !== e && !Et(e), m = d[n];
  if (m !== yl[n]) {
    const C = m.apply(e, c);
    return p ? ze(C) : C;
  }
  let I = i;
  d !== e && (p ? I = function(C, K) {
    return i.call(this, ze(C), K, e);
  } : i.length > 2 && (I = function(C, K) {
    return i.call(this, C, K, e);
  }));
  const S = m.call(d, I, s);
  return p && a ? a(S) : S;
}
function js(e, n, i, s) {
  const a = Si(e);
  let c = i;
  return a !== e && (Et(e) ? i.length > 3 && (c = function(d, p, m) {
    return i.call(this, d, p, m, e);
  }) : c = function(d, p, m) {
    return i.call(this, d, ze(p), m, e);
  }), a[n](c, ...s);
}
function _o(e, n, i) {
  const s = we(e);
  nt(s, "iterate", Sr);
  const a = s[n](...i);
  return (a === -1 || a === !1) && Yo(i[0]) ? (i[0] = we(i[0]), s[n](...i)) : a;
}
function hr(e, n, i = []) {
  Lt(), Vo();
  const s = we(e)[n].apply(e, i);
  return Go(), Ut(), s;
}
const _l = /* @__PURE__ */ Bo("__proto__,__v_isRef,__isVue"), Pa = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Kt)
);
function vl(e) {
  Kt(e) || (e = String(e));
  const n = we(this);
  return nt(n, "has", e), n.hasOwnProperty(e);
}
class Da {
  constructor(n = !1, i = !1) {
    this._isReadonly = n, this._isShallow = i;
  }
  get(n, i, s) {
    if (i === "__v_skip") return n.__v_skip;
    const a = this._isReadonly, c = this._isShallow;
    if (i === "__v_isReactive")
      return !a;
    if (i === "__v_isReadonly")
      return a;
    if (i === "__v_isShallow")
      return c;
    if (i === "__v_raw")
      return s === (a ? c ? La : Ka : c ? Ba : ja).get(n) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(n) === Object.getPrototypeOf(s) ? n : void 0;
    const d = le(n);
    if (!a) {
      let m;
      if (d && (m = gl[i]))
        return m;
      if (i === "hasOwnProperty")
        return vl;
    }
    const p = Reflect.get(
      n,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Qe(n) ? n : s
    );
    return (Kt(i) ? Pa.has(i) : _l(i)) || (a || nt(n, "get", i), c) ? p : Qe(p) ? d && Uo(i) ? p : p.value : De(p) ? a ? Ua(p) : $o(p) : p;
  }
}
class ka extends Da {
  constructor(n = !1) {
    super(!1, n);
  }
  set(n, i, s, a) {
    let c = n[i];
    if (!this._isShallow) {
      const m = yn(c);
      if (!Et(s) && !yn(s) && (c = we(c), s = we(s)), !le(n) && Qe(c) && !Qe(s))
        return m || (c.value = s), !0;
    }
    const d = le(n) && Uo(i) ? Number(i) < n.length : Re(n, i), p = Reflect.set(
      n,
      i,
      s,
      Qe(n) ? n : a
    );
    return n === we(a) && (d ? hn(s, c) && Yt(n, "set", i, s) : Yt(n, "add", i, s)), p;
  }
  deleteProperty(n, i) {
    const s = Re(n, i);
    n[i];
    const a = Reflect.deleteProperty(n, i);
    return a && s && Yt(n, "delete", i, void 0), a;
  }
  has(n, i) {
    const s = Reflect.has(n, i);
    return (!Kt(i) || !Pa.has(i)) && nt(n, "has", i), s;
  }
  ownKeys(n) {
    return nt(
      n,
      "iterate",
      le(n) ? "length" : An
    ), Reflect.ownKeys(n);
  }
}
class Ma extends Da {
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
const bl = /* @__PURE__ */ new ka(), wl = /* @__PURE__ */ new Ma(), El = /* @__PURE__ */ new ka(!0), Ol = /* @__PURE__ */ new Ma(!0), No = (e) => e, si = (e) => Reflect.getPrototypeOf(e);
function xl(e, n, i) {
  return function(...s) {
    const a = this.__v_raw, c = we(a), d = Wn(c), p = e === "entries" || e === Symbol.iterator && d, m = e === "keys" && d, I = a[e](...s), S = i ? No : n ? gi : ze;
    return !n && nt(
      c,
      "iterate",
      m ? Ao : An
    ), {
      // iterator protocol
      next() {
        const { value: C, done: K } = I.next();
        return K ? { value: C, done: K } : {
          value: p ? [S(C[0]), S(C[1])] : S(C),
          done: K
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ai(e) {
  return function(...n) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Tl(e, n) {
  const i = {
    get(a) {
      const c = this.__v_raw, d = we(c), p = we(a);
      e || (hn(a, p) && nt(d, "get", a), nt(d, "get", p));
      const { has: m } = si(d), I = n ? No : e ? gi : ze;
      if (m.call(d, a))
        return I(c.get(a));
      if (m.call(d, p))
        return I(c.get(p));
      c !== d && c.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && nt(we(a), "iterate", An), a.size;
    },
    has(a) {
      const c = this.__v_raw, d = we(c), p = we(a);
      return e || (hn(a, p) && nt(d, "has", a), nt(d, "has", p)), a === p ? c.has(a) : c.has(a) || c.has(p);
    },
    forEach(a, c) {
      const d = this, p = d.__v_raw, m = we(p), I = n ? No : e ? gi : ze;
      return !e && nt(m, "iterate", An), p.forEach((S, C) => a.call(c, I(S), I(C), d));
    }
  };
  return it(
    i,
    e ? {
      add: ai("add"),
      set: ai("set"),
      delete: ai("delete"),
      clear: ai("clear")
    } : {
      add(a) {
        !n && !Et(a) && !yn(a) && (a = we(a));
        const c = we(this);
        return si(c).has.call(c, a) || (c.add(a), Yt(c, "add", a, a)), this;
      },
      set(a, c) {
        !n && !Et(c) && !yn(c) && (c = we(c));
        const d = we(this), { has: p, get: m } = si(d);
        let I = p.call(d, a);
        I || (a = we(a), I = p.call(d, a));
        const S = m.call(d, a);
        return d.set(a, c), I ? hn(c, S) && Yt(d, "set", a, c) : Yt(d, "add", a, c), this;
      },
      delete(a) {
        const c = we(this), { has: d, get: p } = si(c);
        let m = d.call(c, a);
        m || (a = we(a), m = d.call(c, a)), p && p.call(c, a);
        const I = c.delete(a);
        return m && Yt(c, "delete", a, void 0), I;
      },
      clear() {
        const a = we(this), c = a.size !== 0, d = a.clear();
        return c && Yt(
          a,
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
  ].forEach((a) => {
    i[a] = xl(a, e, n);
  }), i;
}
function Ai(e, n) {
  const i = Tl(e, n);
  return (s, a, c) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? s : Reflect.get(
    Re(i, a) && a in s ? i : s,
    a,
    c
  );
}
const Rl = {
  get: /* @__PURE__ */ Ai(!1, !1)
}, Sl = {
  get: /* @__PURE__ */ Ai(!1, !0)
}, Al = {
  get: /* @__PURE__ */ Ai(!0, !1)
}, Nl = {
  get: /* @__PURE__ */ Ai(!0, !0)
}, ja = /* @__PURE__ */ new WeakMap(), Ba = /* @__PURE__ */ new WeakMap(), Ka = /* @__PURE__ */ new WeakMap(), La = /* @__PURE__ */ new WeakMap();
function Il(e) {
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
function Cl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Il(tl(e));
}
function $o(e) {
  return yn(e) ? e : Ni(
    e,
    !1,
    bl,
    Rl,
    ja
  );
}
function Pl(e) {
  return Ni(
    e,
    !1,
    El,
    Sl,
    Ba
  );
}
function Ua(e) {
  return Ni(
    e,
    !0,
    wl,
    Al,
    Ka
  );
}
function ui(e) {
  return Ni(
    e,
    !0,
    Ol,
    Nl,
    La
  );
}
function Ni(e, n, i, s, a) {
  if (!De(e) || e.__v_raw && !(n && e.__v_isReactive))
    return e;
  const c = Cl(e);
  if (c === 0)
    return e;
  const d = a.get(e);
  if (d)
    return d;
  const p = new Proxy(
    e,
    c === 2 ? s : i
  );
  return a.set(e, p), p;
}
function $n(e) {
  return yn(e) ? $n(e.__v_raw) : !!(e && e.__v_isReactive);
}
function yn(e) {
  return !!(e && e.__v_isReadonly);
}
function Et(e) {
  return !!(e && e.__v_isShallow);
}
function Yo(e) {
  return e ? !!e.__v_raw : !1;
}
function we(e) {
  const n = e && e.__v_raw;
  return n ? we(n) : e;
}
function Dl(e) {
  return !Re(e, "__v_skip") && Object.isExtensible(e) && ba(e, "__v_skip", !0), e;
}
const ze = (e) => De(e) ? $o(e) : e, gi = (e) => De(e) ? Ua(e) : e;
function Qe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Xt(e) {
  return kl(e, !1);
}
function kl(e, n) {
  return Qe(e) ? e : new Ml(e, n);
}
class Ml {
  constructor(n, i) {
    this.dep = new Wo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? n : we(n), this._value = i ? n : ze(n), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(n) {
    const i = this._rawValue, s = this.__v_isShallow || Et(n) || yn(n);
    n = s ? n : we(n), hn(n, i) && (this._rawValue = n, this._value = s ? n : ze(n), this.dep.trigger());
  }
}
function Nn(e) {
  return Qe(e) ? e.value : e;
}
const jl = {
  get: (e, n, i) => n === "__v_raw" ? e : Nn(Reflect.get(e, n, i)),
  set: (e, n, i, s) => {
    const a = e[n];
    return Qe(a) && !Qe(i) ? (a.value = i, !0) : Reflect.set(e, n, i, s);
  }
};
function Ha(e) {
  return $n(e) ? e : new Proxy(e, jl);
}
class Bl {
  constructor(n, i, s) {
    this.fn = n, this.setter = i, this._value = void 0, this.dep = new Wo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Rr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ie !== this)
      return Ra(this, !0), !0;
  }
  get value() {
    const n = this.dep.track();
    return Na(this), n && (n.version = this.dep.version), this._value;
  }
  set value(n) {
    this.setter && this.setter(n);
  }
}
function Kl(e, n, i = !1) {
  let s, a;
  return pe(e) ? s = e : (s = e.get, a = e.set), new Bl(s, a, i);
}
const li = {}, yi = /* @__PURE__ */ new WeakMap();
let Sn;
function Ll(e, n = !1, i = Sn) {
  if (i) {
    let s = yi.get(i);
    s || yi.set(i, s = []), s.push(e);
  }
}
function Ul(e, n, i = Se) {
  const { immediate: s, deep: a, once: c, scheduler: d, augmentJob: p, call: m } = i, I = (ie) => a ? ie : Et(ie) || a === !1 || a === 0 ? zt(ie, 1) : zt(ie);
  let S, C, K, k, D = !1, q = !1;
  if (Qe(e) ? (C = () => e.value, D = Et(e)) : $n(e) ? (C = () => I(e), D = !0) : le(e) ? (q = !0, D = e.some((ie) => $n(ie) || Et(ie)), C = () => e.map((ie) => {
    if (Qe(ie))
      return ie.value;
    if ($n(ie))
      return I(ie);
    if (pe(ie))
      return m ? m(ie, 2) : ie();
  })) : pe(e) ? n ? C = m ? () => m(e, 2) : e : C = () => {
    if (K) {
      Lt();
      try {
        K();
      } finally {
        Ut();
      }
    }
    const ie = Sn;
    Sn = S;
    try {
      return m ? m(e, 3, [k]) : e(k);
    } finally {
      Sn = ie;
    }
  } : C = Rt, n && a) {
    const ie = C, Te = a === !0 ? 1 / 0 : a;
    C = () => zt(ie(), Te);
  }
  const Ae = pl(), fe = () => {
    S.stop(), Ae && Ae.active && Lo(Ae.effects, S);
  };
  if (c && n) {
    const ie = n;
    n = (...Te) => {
      ie(...Te), fe();
    };
  }
  let ge = q ? new Array(e.length).fill(li) : li;
  const xe = (ie) => {
    if (!(!(S.flags & 1) || !S.dirty && !ie))
      if (n) {
        const Te = S.run();
        if (a || D || (q ? Te.some((Ke, Ne) => hn(Ke, ge[Ne])) : hn(Te, ge))) {
          K && K();
          const Ke = Sn;
          Sn = S;
          try {
            const Ne = [
              Te,
              // pass undefined as the old value when it's changed for the first time
              ge === li ? void 0 : q && ge[0] === li ? [] : ge,
              k
            ];
            ge = Te, m ? m(n, 3, Ne) : (
              // @ts-expect-error
              n(...Ne)
            );
          } finally {
            Sn = Ke;
          }
        }
      } else
        S.run();
  };
  return p && p(xe), S = new xa(C), S.scheduler = d ? () => d(xe, !1) : xe, k = (ie) => Ll(ie, !1, S), K = S.onStop = () => {
    const ie = yi.get(S);
    if (ie) {
      if (m)
        m(ie, 4);
      else
        for (const Te of ie) Te();
      yi.delete(S);
    }
  }, n ? s ? xe(!0) : ge = S.run() : d ? d(xe.bind(null, !0), !0) : S.run(), fe.pause = S.pause.bind(S), fe.resume = S.resume.bind(S), fe.stop = fe, fe;
}
function zt(e, n = 1 / 0, i) {
  if (n <= 0 || !De(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Set(), i.has(e)))
    return e;
  if (i.add(e), n--, Qe(e))
    zt(e.value, n, i);
  else if (le(e))
    for (let s = 0; s < e.length; s++)
      zt(e[s], n, i);
  else if (er(e) || Wn(e))
    e.forEach((s) => {
      zt(s, n, i);
    });
  else if (_a(e)) {
    for (const s in e)
      zt(e[s], n, i);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && zt(e[s], n, i);
  }
  return e;
}
var cn = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_13ba4977-2dec-469f-8127-fc7a7e4511bc", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "pnpm/10.10.0 npm/? node/v20.19.4 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_13ba4977-2dec-469f-8127-fc7a7e4511bc", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/usr/local/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/set/set/packages/extensions/dataflow/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "SeptKit", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-9.0.0", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.2.13676358", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "210705285", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_shared_workspace_lockfile: "", SYSTEMD_EXEC_PID: "1891", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250818.1.0", LOGNAME: "runner", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", npm_config_catalog: '{"@septkit/fileio":"0.0.3","@septkit/ui":"0.0.7","dexie":"^4.2.0"}', CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.12/x64", JOURNAL_STREAM: "9:11636", GITHUB_WORKFLOW: "Deploy Ext. Dataflow", _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure", GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.6/x64", npm_config_registry: "https://registry.npmjs.org/", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", GITHUB_RUN_ID: "17265629086", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "2218280cce85120d1067fd605e74111d058873c8", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "SeptKit/set/.github/workflows/deploy-ext-dataflow.yml@refs/heads/main", GITHUB_ACTION_REPOSITORY: "", ENABLE_RUNNER_TRACING: "true", npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node-gyp-bin:/home/runner/work/set/set/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_7b8f2f1b-77c5-460c-8502-75f87bb048dc", INVOCATION_ID: "8d05b2d0ad714a6f830cf88d23a53222", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", npm_package_name: "Dataflow Extension", NODE: "/usr/local/bin/node", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "8", GITHUB_TRIGGERING_ACTOR: "NgoEva", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", npm_config_frozen_lockfile: "", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 1000004875", XDG_CONFIG_HOME: "/home/runner/.config", GITHUB_REF_NAME: "main", GITHUB_REPOSITORY: "SeptKit/set", npm_lifecycle_script: "vite build", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", SHELL: "/bin/bash", GITHUB_REPOSITORY_ID: "1003638225", GITHUB_ACTIONS: "true", NODE_PATH: "/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.1.3_@types+node@22.18.0_jiti@2.5.1_lightningcss@1.30.1/node_modules/vite/bin/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.1.3_@types+node@22.18.0_jiti@2.5.1_lightningcss@1.30.1/node_modules/vite/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.1.3_@types+node@22.18.0_jiti@2.5.1_lightningcss@1.30.1/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/node_modules", npm_package_version: "3", npm_lifecycle_event: "build", npm_config_verify_deps_before_run: "false", GITHUB_REF_PROTECTED: "true", GITHUB_WORKSPACE: "/home/runner/work/set/set", ACCEPT_EULA: "Y", GITHUB_JOB: "build", npm_config_sharedWorkspaceLockfile: "", GITHUB_SHA: "2218280cce85120d1067fd605e74111d058873c8", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/main", GITHUB_ACTOR: "NgoEva", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_13ba4977-2dec-469f-8127-fc7a7e4511bc", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/set/set/packages/extensions/dataflow", GITHUB_ACTOR_ID: "32981638", RUNNER_WORKSPACE: "/home/runner/work/set", npm_config_link_workspace_packages: "true", npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/pnpm.cjs", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_13ba4977-2dec-469f-8127-fc7a7e4511bc", EDGEWEBDRIVER: "/usr/local/share/edge_driver", npm_config__jsr_registry: "https://npm.jsr.io/", npm_command: "run-script", PNPM_SCRIPT_SRC_DIR: "/home/runner/work/set/set/packages/extensions/dataflow", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_13ba4977-2dec-469f-8127-fc7a7e4511bc", INIT_CWD: "/home/runner/work/set/set/packages/extensions/dataflow", NODE_ENV: "production", LAUNCH_EDITOR: "code" };
const wr = [];
let vo = !1;
function Hl(e, ...n) {
  if (vo) return;
  vo = !0, Lt();
  const i = wr.length ? wr[wr.length - 1].component : null, s = i && i.appContext.config.warnHandler, a = Fl();
  if (s)
    tr(
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
        a.map(
          ({ vnode: c }) => `at <${Ou(i, c.type)}>`
        ).join(`
`),
        a
      ]
    );
  else {
    const c = [`[Vue warn]: ${e}`, ...n];
    a.length && c.push(`
`, ...Vl(a)), console.warn(...c);
  }
  Ut(), vo = !1;
}
function Fl() {
  let e = wr[wr.length - 1];
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
function Vl(e) {
  const n = [];
  return e.forEach((i, s) => {
    n.push(...s === 0 ? [] : [`
`], ...Gl(i));
  }), n;
}
function Gl({ vnode: e, recurseCount: n }) {
  const i = n > 0 ? `... (${n} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, a = ` at <${Ou(
    e.component,
    e.type,
    s
  )}`, c = ">" + i;
  return e.props ? [a, ...ql(e.props), c] : [a + c];
}
function ql(e) {
  const n = [], i = Object.keys(e);
  return i.slice(0, 3).forEach((s) => {
    n.push(...Fa(s, e[s]));
  }), i.length > 3 && n.push(" ..."), n;
}
function Fa(e, n, i) {
  return He(n) ? (n = JSON.stringify(n), i ? n : [`${e}=${n}`]) : typeof n == "number" || typeof n == "boolean" || n == null ? i ? n : [`${e}=${n}`] : Qe(n) ? (n = Fa(e, we(n.value), !0), i ? n : [`${e}=Ref<`, n, ">"]) : pe(n) ? [`${e}=fn${n.name ? `<${n.name}>` : ""}`] : (n = we(n), i ? n : [`${e}=`, n]);
}
function tr(e, n, i, s) {
  try {
    return s ? e(...s) : e();
  } catch (a) {
    Ii(a, n, i);
  }
}
function Ht(e, n, i, s) {
  if (pe(e)) {
    const a = tr(e, n, i, s);
    return a && ga(a) && a.catch((c) => {
      Ii(c, n, i);
    }), a;
  }
  if (le(e)) {
    const a = [];
    for (let c = 0; c < e.length; c++)
      a.push(Ht(e[c], n, i, s));
    return a;
  }
}
function Ii(e, n, i, s = !0) {
  const a = n ? n.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: d } = n && n.appContext.config || Se;
  if (n) {
    let p = n.parent;
    const m = n.proxy, I = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; p; ) {
      const S = p.ec;
      if (S) {
        for (let C = 0; C < S.length; C++)
          if (S[C](e, m, I) === !1)
            return;
      }
      p = p.parent;
    }
    if (c) {
      Lt(), tr(c, null, 10, [
        e,
        m,
        I
      ]), Ut();
      return;
    }
  }
  Wl(e, i, a, s, d);
}
function Wl(e, n, i, s = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const ut = [];
let jt = -1;
const Yn = [];
let fn = null, Gn = 0;
const Va = /* @__PURE__ */ Promise.resolve();
let _i = null;
function Ga(e) {
  const n = _i || Va;
  return e ? n.then(this ? e.bind(this) : e) : n;
}
function $l(e) {
  let n = jt + 1, i = ut.length;
  for (; n < i; ) {
    const s = n + i >>> 1, a = ut[s], c = Ar(a);
    c < e || c === e && a.flags & 2 ? n = s + 1 : i = s;
  }
  return n;
}
function Xo(e) {
  if (!(e.flags & 1)) {
    const n = Ar(e), i = ut[ut.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(e.flags & 2) && n >= Ar(i) ? ut.push(e) : ut.splice($l(n), 0, e), e.flags |= 1, qa();
  }
}
function qa() {
  _i || (_i = Va.then($a));
}
function Yl(e) {
  le(e) ? Yn.push(...e) : fn && e.id === -1 ? fn.splice(Gn + 1, 0, e) : e.flags & 1 || (Yn.push(e), e.flags |= 1), qa();
}
function Bs(e, n, i = jt + 1) {
  for (; i < ut.length; i++) {
    const s = ut[i];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ut.splice(i, 1), i--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Wa(e) {
  if (Yn.length) {
    const n = [...new Set(Yn)].sort(
      (i, s) => Ar(i) - Ar(s)
    );
    if (Yn.length = 0, fn) {
      fn.push(...n);
      return;
    }
    for (fn = n, Gn = 0; Gn < fn.length; Gn++) {
      const i = fn[Gn];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    fn = null, Gn = 0;
  }
}
const Ar = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function $a(e) {
  const n = Rt;
  try {
    for (jt = 0; jt < ut.length; jt++) {
      const i = ut[jt];
      i && !(i.flags & 8) && (cn.NODE_ENV !== "production" && n(i), i.flags & 4 && (i.flags &= -2), tr(
        i,
        i.i,
        i.i ? 15 : 14
      ), i.flags & 4 || (i.flags &= -2));
    }
  } finally {
    for (; jt < ut.length; jt++) {
      const i = ut[jt];
      i && (i.flags &= -2);
    }
    jt = -1, ut.length = 0, Wa(), _i = null, (ut.length || Yn.length) && $a();
  }
}
let mt = null, Ya = null;
function vi(e) {
  const n = mt;
  return mt = e, Ya = e && e.type.__scopeId || null, n;
}
function Xl(e, n = mt, i) {
  if (!n || e._n)
    return e;
  const s = (...a) => {
    s._d && Ws(-1);
    const c = vi(n);
    let d;
    try {
      d = e(...a);
    } finally {
      vi(c), s._d && Ws(1);
    }
    return d;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Wt(e, n) {
  if (mt === null)
    return e;
  const i = Mi(mt), s = e.dirs || (e.dirs = []);
  for (let a = 0; a < n.length; a++) {
    let [c, d, p, m = Se] = n[a];
    c && (pe(c) && (c = {
      mounted: c,
      updated: c
    }), c.deep && zt(d), s.push({
      dir: c,
      instance: i,
      value: d,
      oldValue: void 0,
      arg: p,
      modifiers: m
    }));
  }
  return e;
}
function Tn(e, n, i, s) {
  const a = e.dirs, c = n && n.dirs;
  for (let d = 0; d < a.length; d++) {
    const p = a[d];
    c && (p.oldValue = c[d].value);
    let m = p.dir[s];
    m && (Lt(), Ht(m, i, 8, [
      e.el,
      p,
      e,
      n
    ]), Ut());
  }
}
const zl = Symbol("_vte"), Jl = (e) => e.__isTeleport, Ql = Symbol("_leaveCb");
function zo(e, n) {
  e.shapeFlag & 6 && e.component ? (e.transition = n, zo(e.component.subTree, n)) : e.shapeFlag & 128 ? (e.ssContent.transition = n.clone(e.ssContent), e.ssFallback.transition = n.clone(e.ssFallback)) : e.transition = n;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ci(e, n) {
  return pe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    it({ name: e.name }, n, { setup: e })
  ) : e;
}
function Xa(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Er(e, n, i, s, a = !1) {
  if (le(e)) {
    e.forEach(
      (D, q) => Er(
        D,
        n && (le(n) ? n[q] : n),
        i,
        s,
        a
      )
    );
    return;
  }
  if (Or(s) && !a) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Er(e, n, i, s.component.subTree);
    return;
  }
  const c = s.shapeFlag & 4 ? Mi(s.component) : s.el, d = a ? null : c, { i: p, r: m } = e, I = n && n.r, S = p.refs === Se ? p.refs = {} : p.refs, C = p.setupState, K = we(C), k = C === Se ? ma : (D) => Re(K, D);
  if (I != null && I !== m) {
    if (He(I))
      S[I] = null, k(I) && (C[I] = null);
    else if (Qe(I)) {
      I.value = null;
      const D = n;
      D.k && (S[D.k] = null);
    }
  }
  if (pe(m))
    tr(m, p, 12, [d, S]);
  else {
    const D = He(m), q = Qe(m);
    if (D || q) {
      const Ae = () => {
        if (e.f) {
          const fe = D ? k(m) ? C[m] : S[m] : m.value;
          if (a)
            le(fe) && Lo(fe, c);
          else if (le(fe))
            fe.includes(c) || fe.push(c);
          else if (D)
            S[m] = [c], k(m) && (C[m] = S[m]);
          else {
            const ge = [c];
            m.value = ge, e.k && (S[e.k] = ge);
          }
        } else D ? (S[m] = d, k(m) && (C[m] = d)) : q && (m.value = d, e.k && (S[e.k] = d));
      };
      d ? (Ae.id = -1, pt(Ae, i)) : Ae();
    }
  }
}
Ri().requestIdleCallback;
Ri().cancelIdleCallback;
const Or = (e) => !!e.type.__asyncLoader, za = (e) => e.type.__isKeepAlive;
function Zl(e, n) {
  Ja(e, "a", n);
}
function ec(e, n) {
  Ja(e, "da", n);
}
function Ja(e, n, i = Je) {
  const s = e.__wdc || (e.__wdc = () => {
    let a = i;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Pi(n, s, i), i) {
    let a = i.parent;
    for (; a && a.parent; )
      za(a.parent.vnode) && tc(s, n, i, a), a = a.parent;
  }
}
function tc(e, n, i, s) {
  const a = Pi(
    n,
    e,
    s,
    !0
    /* prepend */
  );
  Jo(() => {
    Lo(s[n], a);
  }, i);
}
function Pi(e, n, i = Je, s = !1) {
  if (i) {
    const a = i[e] || (i[e] = []), c = n.__weh || (n.__weh = (...d) => {
      Lt();
      const p = kr(i), m = Ht(n, i, e, d);
      return p(), Ut(), m;
    });
    return s ? a.unshift(c) : a.push(c), c;
  }
}
const Qt = (e) => (n, i = Je) => {
  (!Ir || e === "sp") && Pi(e, (...s) => n(...s), i);
}, nc = Qt("bm"), Qa = Qt("m"), rc = Qt(
  "bu"
), ic = Qt("u"), oc = Qt(
  "bum"
), Jo = Qt("um"), sc = Qt(
  "sp"
), ac = Qt("rtg"), uc = Qt("rtc");
function lc(e, n = Je) {
  Pi("ec", e, n);
}
const cc = Symbol.for("v-ndc");
function Xn(e, n, i, s) {
  let a;
  const c = i, d = le(e);
  if (d || He(e)) {
    const p = d && $n(e);
    let m = !1, I = !1;
    p && (m = !Et(e), I = yn(e), e = Si(e)), a = new Array(e.length);
    for (let S = 0, C = e.length; S < C; S++)
      a[S] = n(
        m ? I ? gi(ze(e[S])) : ze(e[S]) : e[S],
        S,
        void 0,
        c
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let p = 0; p < e; p++)
      a[p] = n(p + 1, p, void 0, c);
  } else if (De(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (p, m) => n(p, m, void 0, c)
      );
    else {
      const p = Object.keys(e);
      a = new Array(p.length);
      for (let m = 0, I = p.length; m < I; m++) {
        const S = p[m];
        a[m] = n(e[S], S, m, c);
      }
    }
  else
    a = [];
  return a;
}
const Io = (e) => e ? wu(e) ? Mi(e) : Io(e.parent) : null, xr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ it(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Io(e.parent),
    $root: (e) => Io(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => eu(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Xo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ga.bind(e.proxy)),
    $watch: (e) => Pc.bind(e)
  })
), bo = (e, n) => e !== Se && !e.__isScriptSetup && Re(e, n), fc = {
  get({ _: e }, n) {
    if (n === "__v_skip")
      return !0;
    const { ctx: i, setupState: s, data: a, props: c, accessCache: d, type: p, appContext: m } = e;
    let I;
    if (n[0] !== "$") {
      const k = d[n];
      if (k !== void 0)
        switch (k) {
          case 1:
            return s[n];
          case 2:
            return a[n];
          case 4:
            return i[n];
          case 3:
            return c[n];
        }
      else {
        if (bo(s, n))
          return d[n] = 1, s[n];
        if (a !== Se && Re(a, n))
          return d[n] = 2, a[n];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (I = e.propsOptions[0]) && Re(I, n)
        )
          return d[n] = 3, c[n];
        if (i !== Se && Re(i, n))
          return d[n] = 4, i[n];
        Co && (d[n] = 0);
      }
    }
    const S = xr[n];
    let C, K;
    if (S)
      return n === "$attrs" && nt(e.attrs, "get", ""), S(e);
    if (
      // css module (injected by vue-loader)
      (C = p.__cssModules) && (C = C[n])
    )
      return C;
    if (i !== Se && Re(i, n))
      return d[n] = 4, i[n];
    if (
      // global properties
      K = m.config.globalProperties, Re(K, n)
    )
      return K[n];
  },
  set({ _: e }, n, i) {
    const { data: s, setupState: a, ctx: c } = e;
    return bo(a, n) ? (a[n] = i, !0) : s !== Se && Re(s, n) ? (s[n] = i, !0) : Re(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (c[n] = i, !0);
  },
  has({
    _: { data: e, setupState: n, accessCache: i, ctx: s, appContext: a, propsOptions: c, type: d }
  }, p) {
    let m, I;
    return !!(i[p] || e !== Se && p[0] !== "$" && Re(e, p) || bo(n, p) || (m = c[0]) && Re(m, p) || Re(s, p) || Re(xr, p) || Re(a.config.globalProperties, p) || (I = d.__cssModules) && I[p]);
  },
  defineProperty(e, n, i) {
    return i.get != null ? e._.accessCache[n] = 0 : Re(i, "value") && this.set(e, n, i.value, null), Reflect.defineProperty(e, n, i);
  }
};
function Ks(e) {
  return le(e) ? e.reduce(
    (n, i) => (n[i] = null, n),
    {}
  ) : e;
}
let Co = !0;
function dc(e) {
  const n = eu(e), i = e.proxy, s = e.ctx;
  Co = !1, n.beforeCreate && Ls(n.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: c,
    methods: d,
    watch: p,
    provide: m,
    inject: I,
    // lifecycle
    created: S,
    beforeMount: C,
    mounted: K,
    beforeUpdate: k,
    updated: D,
    activated: q,
    deactivated: Ae,
    beforeDestroy: fe,
    beforeUnmount: ge,
    destroyed: xe,
    unmounted: ie,
    render: Te,
    renderTracked: Ke,
    renderTriggered: Ne,
    errorCaptured: yt,
    serverPrefetch: Cn,
    // public API
    expose: Nt,
    inheritAttrs: Zt,
    // assets
    components: It,
    directives: _t,
    filters: nr
  } = n;
  if (I && pc(I, s, null), d)
    for (const Ce in d) {
      const _e = d[Ce];
      pe(_e) && (s[Ce] = _e.bind(i));
    }
  if (a) {
    const Ce = a.call(i, i);
    De(Ce) && (e.data = $o(Ce));
  }
  if (Co = !0, c)
    for (const Ce in c) {
      const _e = c[Ce], lt = pe(_e) ? _e.bind(i, i) : pe(_e.get) ? _e.get.bind(i, i) : Rt, ct = !pe(_e) && pe(_e.set) ? _e.set.bind(i) : Rt, Ot = Jn({
        get: lt,
        set: ct
      });
      Object.defineProperty(s, Ce, {
        enumerable: !0,
        configurable: !0,
        get: () => Ot.value,
        set: (vt) => Ot.value = vt
      });
    }
  if (p)
    for (const Ce in p)
      Za(p[Ce], s, i, Ce);
  if (m) {
    const Ce = pe(m) ? m.call(i) : m;
    Reflect.ownKeys(Ce).forEach((_e) => {
      vc(_e, Ce[_e]);
    });
  }
  S && Ls(S, e, "c");
  function Ve(Ce, _e) {
    le(_e) ? _e.forEach((lt) => Ce(lt.bind(i))) : _e && Ce(_e.bind(i));
  }
  if (Ve(nc, C), Ve(Qa, K), Ve(rc, k), Ve(ic, D), Ve(Zl, q), Ve(ec, Ae), Ve(lc, yt), Ve(uc, Ke), Ve(ac, Ne), Ve(oc, ge), Ve(Jo, ie), Ve(sc, Cn), le(Nt))
    if (Nt.length) {
      const Ce = e.exposed || (e.exposed = {});
      Nt.forEach((_e) => {
        Object.defineProperty(Ce, _e, {
          get: () => i[_e],
          set: (lt) => i[_e] = lt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  Te && e.render === Rt && (e.render = Te), Zt != null && (e.inheritAttrs = Zt), It && (e.components = It), _t && (e.directives = _t), Cn && Xa(e);
}
function pc(e, n, i = Rt) {
  le(e) && (e = Po(e));
  for (const s in e) {
    const a = e[s];
    let c;
    De(a) ? "default" in a ? c = fi(
      a.from || s,
      a.default,
      !0
    ) : c = fi(a.from || s) : c = fi(a), Qe(c) ? Object.defineProperty(n, s, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (d) => c.value = d
    }) : n[s] = c;
  }
}
function Ls(e, n, i) {
  Ht(
    le(e) ? e.map((s) => s.bind(n.proxy)) : e.bind(n.proxy),
    n,
    i
  );
}
function Za(e, n, i, s) {
  let a = s.includes(".") ? pu(i, s) : () => i[s];
  if (He(e)) {
    const c = n[e];
    pe(c) && mn(a, c);
  } else if (pe(e))
    mn(a, e.bind(i));
  else if (De(e))
    if (le(e))
      e.forEach((c) => Za(c, n, i, s));
    else {
      const c = pe(e.handler) ? e.handler.bind(i) : n[e.handler];
      pe(c) && mn(a, c, e);
    }
}
function eu(e) {
  const n = e.type, { mixins: i, extends: s } = n, {
    mixins: a,
    optionsCache: c,
    config: { optionMergeStrategies: d }
  } = e.appContext, p = c.get(n);
  let m;
  return p ? m = p : !a.length && !i && !s ? m = n : (m = {}, a.length && a.forEach(
    (I) => bi(m, I, d, !0)
  ), bi(m, n, d)), De(n) && c.set(n, m), m;
}
function bi(e, n, i, s = !1) {
  const { mixins: a, extends: c } = n;
  c && bi(e, c, i, !0), a && a.forEach(
    (d) => bi(e, d, i, !0)
  );
  for (const d in n)
    if (!(s && d === "expose")) {
      const p = hc[d] || i && i[d];
      e[d] = p ? p(e[d], n[d]) : n[d];
    }
  return e;
}
const hc = {
  data: Us,
  props: Hs,
  emits: Hs,
  // objects
  methods: yr,
  computed: yr,
  // lifecycle
  beforeCreate: at,
  created: at,
  beforeMount: at,
  mounted: at,
  beforeUpdate: at,
  updated: at,
  beforeDestroy: at,
  beforeUnmount: at,
  destroyed: at,
  unmounted: at,
  activated: at,
  deactivated: at,
  errorCaptured: at,
  serverPrefetch: at,
  // assets
  components: yr,
  directives: yr,
  // watch
  watch: gc,
  // provide / inject
  provide: Us,
  inject: mc
};
function Us(e, n) {
  return n ? e ? function() {
    return it(
      pe(e) ? e.call(this, this) : e,
      pe(n) ? n.call(this, this) : n
    );
  } : n : e;
}
function mc(e, n) {
  return yr(Po(e), Po(n));
}
function Po(e) {
  if (le(e)) {
    const n = {};
    for (let i = 0; i < e.length; i++)
      n[e[i]] = e[i];
    return n;
  }
  return e;
}
function at(e, n) {
  return e ? [...new Set([].concat(e, n))] : n;
}
function yr(e, n) {
  return e ? it(/* @__PURE__ */ Object.create(null), e, n) : n;
}
function Hs(e, n) {
  return e ? le(e) && le(n) ? [.../* @__PURE__ */ new Set([...e, ...n])] : it(
    /* @__PURE__ */ Object.create(null),
    Ks(e),
    Ks(n ?? {})
  ) : n;
}
function gc(e, n) {
  if (!e) return n;
  if (!n) return e;
  const i = it(/* @__PURE__ */ Object.create(null), e);
  for (const s in n)
    i[s] = at(e[s], n[s]);
  return i;
}
function tu() {
  return {
    app: null,
    config: {
      isNativeTag: ma,
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
let yc = 0;
function _c(e, n) {
  return function(s, a = null) {
    pe(s) || (s = it({}, s)), a != null && !De(a) && (a = null);
    const c = tu(), d = /* @__PURE__ */ new WeakSet(), p = [];
    let m = !1;
    const I = c.app = {
      _uid: yc++,
      _component: s,
      _props: a,
      _container: null,
      _context: c,
      _instance: null,
      version: rf,
      get config() {
        return c.config;
      },
      set config(S) {
      },
      use(S, ...C) {
        return d.has(S) || (S && pe(S.install) ? (d.add(S), S.install(I, ...C)) : pe(S) && (d.add(S), S(I, ...C))), I;
      },
      mixin(S) {
        return c.mixins.includes(S) || c.mixins.push(S), I;
      },
      component(S, C) {
        return C ? (c.components[S] = C, I) : c.components[S];
      },
      directive(S, C) {
        return C ? (c.directives[S] = C, I) : c.directives[S];
      },
      mount(S, C, K) {
        if (!m) {
          const k = I._ceVNode || At(s, a);
          return k.appContext = c, K === !0 ? K = "svg" : K === !1 && (K = void 0), e(k, S, K), m = !0, I._container = S, S.__vue_app__ = I, Mi(k.component);
        }
      },
      onUnmount(S) {
        p.push(S);
      },
      unmount() {
        m && (Ht(
          p,
          I._instance,
          16
        ), e(null, I._container), delete I._container.__vue_app__);
      },
      provide(S, C) {
        return c.provides[S] = C, I;
      },
      runWithContext(S) {
        const C = zn;
        zn = I;
        try {
          return S();
        } finally {
          zn = C;
        }
      }
    };
    return I;
  };
}
let zn = null;
function vc(e, n) {
  if (Je) {
    let i = Je.provides;
    const s = Je.parent && Je.parent.provides;
    s === i && (i = Je.provides = Object.create(s)), i[e] = n;
  }
}
function fi(e, n, i = !1) {
  const s = Yc();
  if (s || zn) {
    let a = zn ? zn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return i && pe(n) ? n.call(s && s.proxy) : n;
  }
}
const nu = {}, ru = () => Object.create(nu), iu = (e) => Object.getPrototypeOf(e) === nu;
function bc(e, n, i, s = !1) {
  const a = {}, c = ru();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ou(e, n, a, c);
  for (const d in e.propsOptions[0])
    d in a || (a[d] = void 0);
  i ? e.props = s ? a : Pl(a) : e.type.props ? e.props = a : e.props = c, e.attrs = c;
}
function wc(e, n, i, s) {
  const {
    props: a,
    attrs: c,
    vnode: { patchFlag: d }
  } = e, p = we(a), [m] = e.propsOptions;
  let I = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || d > 0) && !(d & 16)
  ) {
    if (d & 8) {
      const S = e.vnode.dynamicProps;
      for (let C = 0; C < S.length; C++) {
        let K = S[C];
        if (Di(e.emitsOptions, K))
          continue;
        const k = n[K];
        if (m)
          if (Re(c, K))
            k !== c[K] && (c[K] = k, I = !0);
          else {
            const D = gn(K);
            a[D] = Do(
              m,
              p,
              D,
              k,
              e,
              !1
            );
          }
        else
          k !== c[K] && (c[K] = k, I = !0);
      }
    }
  } else {
    ou(e, n, a, c) && (I = !0);
    let S;
    for (const C in p)
      (!n || // for camelCase
      !Re(n, C) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((S = In(C)) === C || !Re(n, S))) && (m ? i && // for camelCase
      (i[C] !== void 0 || // for kebab-case
      i[S] !== void 0) && (a[C] = Do(
        m,
        p,
        C,
        void 0,
        e,
        !0
      )) : delete a[C]);
    if (c !== p)
      for (const C in c)
        (!n || !Re(n, C)) && (delete c[C], I = !0);
  }
  I && Yt(e.attrs, "set", "");
}
function ou(e, n, i, s) {
  const [a, c] = e.propsOptions;
  let d = !1, p;
  if (n)
    for (let m in n) {
      if (_r(m))
        continue;
      const I = n[m];
      let S;
      a && Re(a, S = gn(m)) ? !c || !c.includes(S) ? i[S] = I : (p || (p = {}))[S] = I : Di(e.emitsOptions, m) || (!(m in s) || I !== s[m]) && (s[m] = I, d = !0);
    }
  if (c) {
    const m = we(i), I = p || Se;
    for (let S = 0; S < c.length; S++) {
      const C = c[S];
      i[C] = Do(
        a,
        m,
        C,
        I[C],
        e,
        !Re(I, C)
      );
    }
  }
  return d;
}
function Do(e, n, i, s, a, c) {
  const d = e[i];
  if (d != null) {
    const p = Re(d, "default");
    if (p && s === void 0) {
      const m = d.default;
      if (d.type !== Function && !d.skipFactory && pe(m)) {
        const { propsDefaults: I } = a;
        if (i in I)
          s = I[i];
        else {
          const S = kr(a);
          s = I[i] = m.call(
            null,
            n
          ), S();
        }
      } else
        s = m;
      a.ce && a.ce._setProp(i, s);
    }
    d[
      0
      /* shouldCast */
    ] && (c && !p ? s = !1 : d[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === In(i)) && (s = !0));
  }
  return s;
}
const Ec = /* @__PURE__ */ new WeakMap();
function su(e, n, i = !1) {
  const s = i ? Ec : n.propsCache, a = s.get(e);
  if (a)
    return a;
  const c = e.props, d = {}, p = [];
  let m = !1;
  if (!pe(e)) {
    const S = (C) => {
      m = !0;
      const [K, k] = su(C, n, !0);
      it(d, K), k && p.push(...k);
    };
    !i && n.mixins.length && n.mixins.forEach(S), e.extends && S(e.extends), e.mixins && e.mixins.forEach(S);
  }
  if (!c && !m)
    return De(e) && s.set(e, qn), qn;
  if (le(c))
    for (let S = 0; S < c.length; S++) {
      const C = gn(c[S]);
      Fs(C) && (d[C] = Se);
    }
  else if (c)
    for (const S in c) {
      const C = gn(S);
      if (Fs(C)) {
        const K = c[S], k = d[C] = le(K) || pe(K) ? { type: K } : it({}, K), D = k.type;
        let q = !1, Ae = !0;
        if (le(D))
          for (let fe = 0; fe < D.length; ++fe) {
            const ge = D[fe], xe = pe(ge) && ge.name;
            if (xe === "Boolean") {
              q = !0;
              break;
            } else xe === "String" && (Ae = !1);
          }
        else
          q = pe(D) && D.name === "Boolean";
        k[
          0
          /* shouldCast */
        ] = q, k[
          1
          /* shouldCastTrue */
        ] = Ae, (q || Re(k, "default")) && p.push(C);
      }
    }
  const I = [d, p];
  return De(e) && s.set(e, I), I;
}
function Fs(e) {
  return e[0] !== "$" && !_r(e);
}
const Qo = (e) => e === "_" || e === "_ctx" || e === "$stable", Zo = (e) => le(e) ? e.map(Bt) : [Bt(e)], Oc = (e, n, i) => {
  if (n._n)
    return n;
  const s = Xl((...a) => (cn.NODE_ENV !== "production" && Je && !(i === null && mt) && (i && (i.root, Je.root)), Zo(n(...a))), i);
  return s._c = !1, s;
}, au = (e, n, i) => {
  const s = e._ctx;
  for (const a in e) {
    if (Qo(a)) continue;
    const c = e[a];
    if (pe(c))
      n[a] = Oc(a, c, s);
    else if (c != null) {
      const d = Zo(c);
      n[a] = () => d;
    }
  }
}, uu = (e, n) => {
  const i = Zo(n);
  e.slots.default = () => i;
}, lu = (e, n, i) => {
  for (const s in n)
    (i || !Qo(s)) && (e[s] = n[s]);
}, xc = (e, n, i) => {
  const s = e.slots = ru();
  if (e.vnode.shapeFlag & 32) {
    const a = n._;
    a ? (lu(s, n, i), i && ba(s, "_", a, !0)) : au(n, s);
  } else n && uu(e, n);
}, Tc = (e, n, i) => {
  const { vnode: s, slots: a } = e;
  let c = !0, d = Se;
  if (s.shapeFlag & 32) {
    const p = n._;
    p ? i && p === 1 ? c = !1 : lu(a, n, i) : (c = !n.$stable, au(n, a)), d = n;
  } else n && (uu(e, n), d = { default: 1 });
  if (c)
    for (const p in a)
      !Qo(p) && d[p] == null && delete a[p];
}, pt = Lc;
function Rc(e) {
  return Sc(e);
}
function Sc(e, n) {
  const i = Ri();
  i.__VUE__ = !0;
  const {
    insert: s,
    remove: a,
    patchProp: c,
    createElement: d,
    createText: p,
    createComment: m,
    setText: I,
    setElementText: S,
    parentNode: C,
    nextSibling: K,
    setScopeId: k = Rt,
    insertStaticContent: D
  } = e, q = (g, E, B, H = null, U = null, F = null, J = void 0, X = null, $ = !!E.dynamicChildren) => {
    if (g === E)
      return;
    g && !mr(g, E) && (H = en(g), vt(g, U, F, !0), g = null), E.patchFlag === -2 && ($ = !1, E.dynamicChildren = null);
    const { type: L, ref: ae, shapeFlag: Q } = E;
    switch (L) {
      case ki:
        Ae(g, E, B, H);
        break;
      case _n:
        fe(g, E, B, H);
        break;
      case Eo:
        g == null && ge(E, B, H, J);
        break;
      case rt:
        It(
          g,
          E,
          B,
          H,
          U,
          F,
          J,
          X,
          $
        );
        break;
      default:
        Q & 1 ? Te(
          g,
          E,
          B,
          H,
          U,
          F,
          J,
          X,
          $
        ) : Q & 6 ? _t(
          g,
          E,
          B,
          H,
          U,
          F,
          J,
          X,
          $
        ) : (Q & 64 || Q & 128) && L.process(
          g,
          E,
          B,
          H,
          U,
          F,
          J,
          X,
          $,
          tn
        );
    }
    ae != null && U ? Er(ae, g && g.ref, F, E || g, !E) : ae == null && g && g.ref != null && Er(g.ref, null, F, g, !0);
  }, Ae = (g, E, B, H) => {
    if (g == null)
      s(
        E.el = p(E.children),
        B,
        H
      );
    else {
      const U = E.el = g.el;
      E.children !== g.children && I(U, E.children);
    }
  }, fe = (g, E, B, H) => {
    g == null ? s(
      E.el = m(E.children || ""),
      B,
      H
    ) : E.el = g.el;
  }, ge = (g, E, B, H) => {
    [g.el, g.anchor] = D(
      g.children,
      E,
      B,
      H,
      g.el,
      g.anchor
    );
  }, xe = ({ el: g, anchor: E }, B, H) => {
    let U;
    for (; g && g !== E; )
      U = K(g), s(g, B, H), g = U;
    s(E, B, H);
  }, ie = ({ el: g, anchor: E }) => {
    let B;
    for (; g && g !== E; )
      B = K(g), a(g), g = B;
    a(E);
  }, Te = (g, E, B, H, U, F, J, X, $) => {
    E.type === "svg" ? J = "svg" : E.type === "math" && (J = "mathml"), g == null ? Ke(
      E,
      B,
      H,
      U,
      F,
      J,
      X,
      $
    ) : Cn(
      g,
      E,
      U,
      F,
      J,
      X,
      $
    );
  }, Ke = (g, E, B, H, U, F, J, X) => {
    let $, L;
    const { props: ae, shapeFlag: Q, transition: se, dirs: ue } = g;
    if ($ = g.el = d(
      g.type,
      F,
      ae && ae.is,
      ae
    ), Q & 8 ? S($, g.children) : Q & 16 && yt(
      g.children,
      $,
      null,
      H,
      U,
      wo(g, F),
      J,
      X
    ), ue && Tn(g, null, H, "created"), Ne($, g, g.scopeId, J, H), ae) {
      for (const ve in ae)
        ve !== "value" && !_r(ve) && c($, ve, null, ae[ve], F, H);
      "value" in ae && c($, "value", null, ae.value, F), (L = ae.onVnodeBeforeMount) && Mt(L, H, g);
    }
    ue && Tn(g, null, H, "beforeMount");
    const he = Ac(U, se);
    he && se.beforeEnter($), s($, E, B), ((L = ae && ae.onVnodeMounted) || he || ue) && pt(() => {
      L && Mt(L, H, g), he && se.enter($), ue && Tn(g, null, H, "mounted");
    }, U);
  }, Ne = (g, E, B, H, U) => {
    if (B && k(g, B), H)
      for (let F = 0; F < H.length; F++)
        k(g, H[F]);
    if (U) {
      let F = U.subTree;
      if (E === F || mu(F.type) && (F.ssContent === E || F.ssFallback === E)) {
        const J = U.vnode;
        Ne(
          g,
          J,
          J.scopeId,
          J.slotScopeIds,
          U.parent
        );
      }
    }
  }, yt = (g, E, B, H, U, F, J, X, $ = 0) => {
    for (let L = $; L < g.length; L++) {
      const ae = g[L] = X ? dn(g[L]) : Bt(g[L]);
      q(
        null,
        ae,
        E,
        B,
        H,
        U,
        F,
        J,
        X
      );
    }
  }, Cn = (g, E, B, H, U, F, J) => {
    const X = E.el = g.el;
    let { patchFlag: $, dynamicChildren: L, dirs: ae } = E;
    $ |= g.patchFlag & 16;
    const Q = g.props || Se, se = E.props || Se;
    let ue;
    if (B && Rn(B, !1), (ue = se.onVnodeBeforeUpdate) && Mt(ue, B, E, g), ae && Tn(E, g, B, "beforeUpdate"), B && Rn(B, !0), (Q.innerHTML && se.innerHTML == null || Q.textContent && se.textContent == null) && S(X, ""), L ? Nt(
      g.dynamicChildren,
      L,
      X,
      B,
      H,
      wo(E, U),
      F
    ) : J || _e(
      g,
      E,
      X,
      null,
      B,
      H,
      wo(E, U),
      F,
      !1
    ), $ > 0) {
      if ($ & 16)
        Zt(X, Q, se, B, U);
      else if ($ & 2 && Q.class !== se.class && c(X, "class", null, se.class, U), $ & 4 && c(X, "style", Q.style, se.style, U), $ & 8) {
        const he = E.dynamicProps;
        for (let ve = 0; ve < he.length; ve++) {
          const Ee = he[ve], Fe = Q[Ee], qe = se[Ee];
          (qe !== Fe || Ee === "value") && c(X, Ee, Fe, qe, U, B);
        }
      }
      $ & 1 && g.children !== E.children && S(X, E.children);
    } else !J && L == null && Zt(X, Q, se, B, U);
    ((ue = se.onVnodeUpdated) || ae) && pt(() => {
      ue && Mt(ue, B, E, g), ae && Tn(E, g, B, "updated");
    }, H);
  }, Nt = (g, E, B, H, U, F, J) => {
    for (let X = 0; X < E.length; X++) {
      const $ = g[X], L = E[X], ae = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        $.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        ($.type === rt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !mr($, L) || // - In the case of a component, it could contain anything.
        $.shapeFlag & 198) ? C($.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          B
        )
      );
      q(
        $,
        L,
        ae,
        null,
        H,
        U,
        F,
        J,
        !0
      );
    }
  }, Zt = (g, E, B, H, U) => {
    if (E !== B) {
      if (E !== Se)
        for (const F in E)
          !_r(F) && !(F in B) && c(
            g,
            F,
            E[F],
            null,
            U,
            H
          );
      for (const F in B) {
        if (_r(F)) continue;
        const J = B[F], X = E[F];
        J !== X && F !== "value" && c(g, F, X, J, U, H);
      }
      "value" in B && c(g, "value", E.value, B.value, U);
    }
  }, It = (g, E, B, H, U, F, J, X, $) => {
    const L = E.el = g ? g.el : p(""), ae = E.anchor = g ? g.anchor : p("");
    let { patchFlag: Q, dynamicChildren: se, slotScopeIds: ue } = E;
    ue && (X = X ? X.concat(ue) : ue), g == null ? (s(L, B, H), s(ae, B, H), yt(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      E.children || [],
      B,
      ae,
      U,
      F,
      J,
      X,
      $
    )) : Q > 0 && Q & 64 && se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? (Nt(
      g.dynamicChildren,
      se,
      B,
      U,
      F,
      J,
      X
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (E.key != null || U && E === U.subTree) && cu(
      g,
      E,
      !0
      /* shallow */
    )) : _e(
      g,
      E,
      B,
      ae,
      U,
      F,
      J,
      X,
      $
    );
  }, _t = (g, E, B, H, U, F, J, X, $) => {
    E.slotScopeIds = X, g == null ? E.shapeFlag & 512 ? U.ctx.activate(
      E,
      B,
      H,
      J,
      $
    ) : nr(
      E,
      B,
      H,
      U,
      F,
      J,
      $
    ) : Pn(g, E, $);
  }, nr = (g, E, B, H, U, F, J) => {
    const X = g.component = $c(
      g,
      H,
      U
    );
    if (za(g) && (X.ctx.renderer = tn), Xc(X, !1, J), X.asyncDep) {
      if (U && U.registerDep(X, Ve, J), !g.el) {
        const $ = X.subTree = At(_n);
        fe(null, $, E, B), g.placeholder = $.el;
      }
    } else
      Ve(
        X,
        g,
        E,
        B,
        U,
        F,
        J
      );
  }, Pn = (g, E, B) => {
    const H = E.component = g.component;
    if (Bc(g, E, B))
      if (H.asyncDep && !H.asyncResolved) {
        Ce(H, E, B);
        return;
      } else
        H.next = E, H.update();
    else
      E.el = g.el, H.vnode = E;
  }, Ve = (g, E, B, H, U, F, J) => {
    const X = () => {
      if (g.isMounted) {
        let { next: Q, bu: se, u: ue, parent: he, vnode: ve } = g;
        {
          const We = fu(g);
          if (We) {
            Q && (Q.el = ve.el, Ce(g, Q, J)), We.asyncDep.then(() => {
              g.isUnmounted || X();
            });
            return;
          }
        }
        let Ee = Q, Fe;
        Rn(g, !1), Q ? (Q.el = ve.el, Ce(g, Q, J)) : Q = ve, se && ci(se), (Fe = Q.props && Q.props.onVnodeBeforeUpdate) && Mt(Fe, he, Q, ve), Rn(g, !0);
        const qe = Gs(g), ot = g.subTree;
        g.subTree = qe, q(
          ot,
          qe,
          // parent may have changed if it's in a teleport
          C(ot.el),
          // anchor may have changed if it's in a fragment
          en(ot),
          g,
          U,
          F
        ), Q.el = qe.el, Ee === null && Kc(g, qe.el), ue && pt(ue, U), (Fe = Q.props && Q.props.onVnodeUpdated) && pt(
          () => Mt(Fe, he, Q, ve),
          U
        );
      } else {
        let Q;
        const { el: se, props: ue } = E, { bm: he, m: ve, parent: Ee, root: Fe, type: qe } = g, ot = Or(E);
        Rn(g, !1), he && ci(he), !ot && (Q = ue && ue.onVnodeBeforeMount) && Mt(Q, Ee, E), Rn(g, !0);
        {
          Fe.ce && // @ts-expect-error _def is private
          Fe.ce._def.shadowRoot !== !1 && Fe.ce._injectChildStyle(qe);
          const We = g.subTree = Gs(g);
          q(
            null,
            We,
            B,
            H,
            g,
            U,
            F
          ), E.el = We.el;
        }
        if (ve && pt(ve, U), !ot && (Q = ue && ue.onVnodeMounted)) {
          const We = E;
          pt(
            () => Mt(Q, Ee, We),
            U
          );
        }
        (E.shapeFlag & 256 || Ee && Or(Ee.vnode) && Ee.vnode.shapeFlag & 256) && g.a && pt(g.a, U), g.isMounted = !0, E = B = H = null;
      }
    };
    g.scope.on();
    const $ = g.effect = new xa(X);
    g.scope.off();
    const L = g.update = $.run.bind($), ae = g.job = $.runIfDirty.bind($);
    ae.i = g, ae.id = g.uid, $.scheduler = () => Xo(ae), Rn(g, !0), L();
  }, Ce = (g, E, B) => {
    E.component = g;
    const H = g.vnode.props;
    g.vnode = E, g.next = null, wc(g, E.props, H, B), Tc(g, E.children, B), Lt(), Bs(g), Ut();
  }, _e = (g, E, B, H, U, F, J, X, $ = !1) => {
    const L = g && g.children, ae = g ? g.shapeFlag : 0, Q = E.children, { patchFlag: se, shapeFlag: ue } = E;
    if (se > 0) {
      if (se & 128) {
        ct(
          L,
          Q,
          B,
          H,
          U,
          F,
          J,
          X,
          $
        );
        return;
      } else if (se & 256) {
        lt(
          L,
          Q,
          B,
          H,
          U,
          F,
          J,
          X,
          $
        );
        return;
      }
    }
    ue & 8 ? (ae & 16 && bt(L, U, F), Q !== L && S(B, Q)) : ae & 16 ? ue & 16 ? ct(
      L,
      Q,
      B,
      H,
      U,
      F,
      J,
      X,
      $
    ) : bt(L, U, F, !0) : (ae & 8 && S(B, ""), ue & 16 && yt(
      Q,
      B,
      H,
      U,
      F,
      J,
      X,
      $
    ));
  }, lt = (g, E, B, H, U, F, J, X, $) => {
    g = g || qn, E = E || qn;
    const L = g.length, ae = E.length, Q = Math.min(L, ae);
    let se;
    for (se = 0; se < Q; se++) {
      const ue = E[se] = $ ? dn(E[se]) : Bt(E[se]);
      q(
        g[se],
        ue,
        B,
        null,
        U,
        F,
        J,
        X,
        $
      );
    }
    L > ae ? bt(
      g,
      U,
      F,
      !0,
      !1,
      Q
    ) : yt(
      E,
      B,
      H,
      U,
      F,
      J,
      X,
      $,
      Q
    );
  }, ct = (g, E, B, H, U, F, J, X, $) => {
    let L = 0;
    const ae = E.length;
    let Q = g.length - 1, se = ae - 1;
    for (; L <= Q && L <= se; ) {
      const ue = g[L], he = E[L] = $ ? dn(E[L]) : Bt(E[L]);
      if (mr(ue, he))
        q(
          ue,
          he,
          B,
          null,
          U,
          F,
          J,
          X,
          $
        );
      else
        break;
      L++;
    }
    for (; L <= Q && L <= se; ) {
      const ue = g[Q], he = E[se] = $ ? dn(E[se]) : Bt(E[se]);
      if (mr(ue, he))
        q(
          ue,
          he,
          B,
          null,
          U,
          F,
          J,
          X,
          $
        );
      else
        break;
      Q--, se--;
    }
    if (L > Q) {
      if (L <= se) {
        const ue = se + 1, he = ue < ae ? E[ue].el : H;
        for (; L <= se; )
          q(
            null,
            E[L] = $ ? dn(E[L]) : Bt(E[L]),
            B,
            he,
            U,
            F,
            J,
            X,
            $
          ), L++;
      }
    } else if (L > se)
      for (; L <= Q; )
        vt(g[L], U, F, !0), L++;
    else {
      const ue = L, he = L, ve = /* @__PURE__ */ new Map();
      for (L = he; L <= se; L++) {
        const je = E[L] = $ ? dn(E[L]) : Bt(E[L]);
        je.key != null && ve.set(je.key, L);
      }
      let Ee, Fe = 0;
      const qe = se - he + 1;
      let ot = !1, We = 0;
      const Ct = new Array(qe);
      for (L = 0; L < qe; L++) Ct[L] = 0;
      for (L = ue; L <= Q; L++) {
        const je = g[L];
        if (Fe >= qe) {
          vt(je, U, F, !0);
          continue;
        }
        let ne;
        if (je.key != null)
          ne = ve.get(je.key);
        else
          for (Ee = he; Ee <= se; Ee++)
            if (Ct[Ee - he] === 0 && mr(je, E[Ee])) {
              ne = Ee;
              break;
            }
        ne === void 0 ? vt(je, U, F, !0) : (Ct[ne - he] = L + 1, ne >= We ? We = ne : ot = !0, q(
          je,
          E[ne],
          B,
          null,
          U,
          F,
          J,
          X,
          $
        ), Fe++);
      }
      const kn = ot ? Nc(Ct) : qn;
      for (Ee = kn.length - 1, L = qe - 1; L >= 0; L--) {
        const je = he + L, ne = E[je], nn = E[je + 1], Pt = je + 1 < ae ? (
          // #13559, fallback to el placeholder for unresolved async component
          nn.el || nn.placeholder
        ) : H;
        Ct[L] === 0 ? q(
          null,
          ne,
          B,
          Pt,
          U,
          F,
          J,
          X,
          $
        ) : ot && (Ee < 0 || L !== kn[Ee] ? Ot(ne, B, Pt, 2) : Ee--);
      }
    }
  }, Ot = (g, E, B, H, U = null) => {
    const { el: F, type: J, transition: X, children: $, shapeFlag: L } = g;
    if (L & 6) {
      Ot(g.component.subTree, E, B, H);
      return;
    }
    if (L & 128) {
      g.suspense.move(E, B, H);
      return;
    }
    if (L & 64) {
      J.move(g, E, B, tn);
      return;
    }
    if (J === rt) {
      s(F, E, B);
      for (let Q = 0; Q < $.length; Q++)
        Ot($[Q], E, B, H);
      s(g.anchor, E, B);
      return;
    }
    if (J === Eo) {
      xe(g, E, B);
      return;
    }
    if (H !== 2 && L & 1 && X)
      if (H === 0)
        X.beforeEnter(F), s(F, E, B), pt(() => X.enter(F), U);
      else {
        const { leave: Q, delayLeave: se, afterLeave: ue } = X, he = () => {
          g.ctx.isUnmounted ? a(F) : s(F, E, B);
        }, ve = () => {
          F._isLeaving && F[Ql](
            !0
            /* cancelled */
          ), Q(F, () => {
            he(), ue && ue();
          });
        };
        se ? se(F, he, ve) : ve();
      }
    else
      s(F, E, B);
  }, vt = (g, E, B, H = !1, U = !1) => {
    const {
      type: F,
      props: J,
      ref: X,
      children: $,
      dynamicChildren: L,
      shapeFlag: ae,
      patchFlag: Q,
      dirs: se,
      cacheIndex: ue
    } = g;
    if (Q === -2 && (U = !1), X != null && (Lt(), Er(X, null, B, g, !0), Ut()), ue != null && (E.renderCache[ue] = void 0), ae & 256) {
      E.ctx.deactivate(g);
      return;
    }
    const he = ae & 1 && se, ve = !Or(g);
    let Ee;
    if (ve && (Ee = J && J.onVnodeBeforeUnmount) && Mt(Ee, E, g), ae & 6)
      Dn(g.component, B, H);
    else {
      if (ae & 128) {
        g.suspense.unmount(B, H);
        return;
      }
      he && Tn(g, null, E, "beforeUnmount"), ae & 64 ? g.type.remove(
        g,
        E,
        B,
        tn,
        H
      ) : L && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !L.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (F !== rt || Q > 0 && Q & 64) ? bt(
        L,
        E,
        B,
        !1,
        !0
      ) : (F === rt && Q & 384 || !U && ae & 16) && bt($, E, B), H && Ft(g);
    }
    (ve && (Ee = J && J.onVnodeUnmounted) || he) && pt(() => {
      Ee && Mt(Ee, E, g), he && Tn(g, null, E, "unmounted");
    }, B);
  }, Ft = (g) => {
    const { type: E, el: B, anchor: H, transition: U } = g;
    if (E === rt) {
      Mr(B, H);
      return;
    }
    if (E === Eo) {
      ie(g);
      return;
    }
    const F = () => {
      a(B), U && !U.persisted && U.afterLeave && U.afterLeave();
    };
    if (g.shapeFlag & 1 && U && !U.persisted) {
      const { leave: J, delayLeave: X } = U, $ = () => J(B, F);
      X ? X(g.el, F, $) : $();
    } else
      F();
  }, Mr = (g, E) => {
    let B;
    for (; g !== E; )
      B = K(g), a(g), g = B;
    a(E);
  }, Dn = (g, E, B) => {
    const { bum: H, scope: U, job: F, subTree: J, um: X, m: $, a: L } = g;
    Vs($), Vs(L), H && ci(H), U.stop(), F && (F.flags |= 8, vt(J, g, E, B)), X && pt(X, E), pt(() => {
      g.isUnmounted = !0;
    }, E);
  }, bt = (g, E, B, H = !1, U = !1, F = 0) => {
    for (let J = F; J < g.length; J++)
      vt(g[J], E, B, H, U);
  }, en = (g) => {
    if (g.shapeFlag & 6)
      return en(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const E = K(g.anchor || g.el), B = E && E[zl];
    return B ? K(B) : E;
  };
  let rr = !1;
  const oe = (g, E, B) => {
    g == null ? E._vnode && vt(E._vnode, null, null, !0) : q(
      E._vnode || null,
      g,
      E,
      null,
      null,
      null,
      B
    ), E._vnode = g, rr || (rr = !0, Bs(), Wa(), rr = !1);
  }, tn = {
    p: q,
    um: vt,
    m: Ot,
    r: Ft,
    mt: nr,
    mc: yt,
    pc: _e,
    pbc: Nt,
    n: en,
    o: e
  };
  return {
    render: oe,
    hydrate: void 0,
    createApp: _c(oe)
  };
}
function wo({ type: e, props: n }, i) {
  return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && n && n.encoding && n.encoding.includes("html") ? void 0 : i;
}
function Rn({ effect: e, job: n }, i) {
  i ? (e.flags |= 32, n.flags |= 4) : (e.flags &= -33, n.flags &= -5);
}
function Ac(e, n) {
  return (!e || e && !e.pendingBranch) && n && !n.persisted;
}
function cu(e, n, i = !1) {
  const s = e.children, a = n.children;
  if (le(s) && le(a))
    for (let c = 0; c < s.length; c++) {
      const d = s[c];
      let p = a[c];
      p.shapeFlag & 1 && !p.dynamicChildren && ((p.patchFlag <= 0 || p.patchFlag === 32) && (p = a[c] = dn(a[c]), p.el = d.el), !i && p.patchFlag !== -2 && cu(d, p)), p.type === ki && // avoid cached text nodes retaining detached dom nodes
      p.patchFlag !== -1 && (p.el = d.el), p.type === _n && !p.el && (p.el = d.el);
    }
}
function Nc(e) {
  const n = e.slice(), i = [0];
  let s, a, c, d, p;
  const m = e.length;
  for (s = 0; s < m; s++) {
    const I = e[s];
    if (I !== 0) {
      if (a = i[i.length - 1], e[a] < I) {
        n[s] = a, i.push(s);
        continue;
      }
      for (c = 0, d = i.length - 1; c < d; )
        p = c + d >> 1, e[i[p]] < I ? c = p + 1 : d = p;
      I < e[i[c]] && (c > 0 && (n[s] = i[c - 1]), i[c] = s);
    }
  }
  for (c = i.length, d = i[c - 1]; c-- > 0; )
    i[c] = d, d = n[d];
  return i;
}
function fu(e) {
  const n = e.subTree.component;
  if (n)
    return n.asyncDep && !n.asyncResolved ? n : fu(n);
}
function Vs(e) {
  if (e)
    for (let n = 0; n < e.length; n++)
      e[n].flags |= 8;
}
const Ic = Symbol.for("v-scx"), Cc = () => fi(Ic);
function mn(e, n, i) {
  return du(e, n, i);
}
function du(e, n, i = Se) {
  const { immediate: s, deep: a, flush: c, once: d } = i, p = it({}, i), m = n && s || !n && c !== "post";
  let I;
  if (Ir) {
    if (c === "sync") {
      const k = Cc();
      I = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!m) {
      const k = () => {
      };
      return k.stop = Rt, k.resume = Rt, k.pause = Rt, k;
    }
  }
  const S = Je;
  p.call = (k, D, q) => Ht(k, S, D, q);
  let C = !1;
  c === "post" ? p.scheduler = (k) => {
    pt(k, S && S.suspense);
  } : c !== "sync" && (C = !0, p.scheduler = (k, D) => {
    D ? k() : Xo(k);
  }), p.augmentJob = (k) => {
    n && (k.flags |= 4), C && (k.flags |= 2, S && (k.id = S.uid, k.i = S));
  };
  const K = Ul(e, n, p);
  return Ir && (I ? I.push(K) : m && K()), K;
}
function Pc(e, n, i) {
  const s = this.proxy, a = He(e) ? e.includes(".") ? pu(s, e) : () => s[e] : e.bind(s, s);
  let c;
  pe(n) ? c = n : (c = n.handler, i = n);
  const d = kr(this), p = du(a, c.bind(s), i);
  return d(), p;
}
function pu(e, n) {
  const i = n.split(".");
  return () => {
    let s = e;
    for (let a = 0; a < i.length && s; a++)
      s = s[i[a]];
    return s;
  };
}
const Dc = (e, n) => n === "modelValue" || n === "model-value" ? e.modelModifiers : e[`${n}Modifiers`] || e[`${gn(n)}Modifiers`] || e[`${In(n)}Modifiers`];
function kc(e, n, ...i) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Se;
  let a = i;
  const c = n.startsWith("update:"), d = c && Dc(s, n.slice(7));
  d && (d.trim && (a = i.map((S) => He(S) ? S.trim() : S)), d.number && (a = i.map(mi)));
  let p, m = s[p = ho(n)] || // also try camelCase event handler (#2249)
  s[p = ho(gn(n))];
  !m && c && (m = s[p = ho(In(n))]), m && Ht(
    m,
    e,
    6,
    a
  );
  const I = s[p + "Once"];
  if (I) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[p])
      return;
    e.emitted[p] = !0, Ht(
      I,
      e,
      6,
      a
    );
  }
}
function hu(e, n, i = !1) {
  const s = n.emitsCache, a = s.get(e);
  if (a !== void 0)
    return a;
  const c = e.emits;
  let d = {}, p = !1;
  if (!pe(e)) {
    const m = (I) => {
      const S = hu(I, n, !0);
      S && (p = !0, it(d, S));
    };
    !i && n.mixins.length && n.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  return !c && !p ? (De(e) && s.set(e, null), null) : (le(c) ? c.forEach((m) => d[m] = null) : it(d, c), De(e) && s.set(e, d), d);
}
function Di(e, n) {
  return !e || !xi(n) ? !1 : (n = n.slice(2).replace(/Once$/, ""), Re(e, n[0].toLowerCase() + n.slice(1)) || Re(e, In(n)) || Re(e, n));
}
function Gs(e) {
  const {
    type: n,
    vnode: i,
    proxy: s,
    withProxy: a,
    propsOptions: [c],
    slots: d,
    attrs: p,
    emit: m,
    render: I,
    renderCache: S,
    props: C,
    data: K,
    setupState: k,
    ctx: D,
    inheritAttrs: q
  } = e, Ae = vi(e);
  let fe, ge;
  try {
    if (i.shapeFlag & 4) {
      const ie = a || s, Te = cn.NODE_ENV !== "production" && k.__isScriptSetup ? new Proxy(ie, {
        get(Ke, Ne, yt) {
          return Hl(
            `Property '${String(
              Ne
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Ke, Ne, yt);
        }
      }) : ie;
      fe = Bt(
        I.call(
          Te,
          ie,
          S,
          cn.NODE_ENV !== "production" ? ui(C) : C,
          k,
          K,
          D
        )
      ), ge = p;
    } else {
      const ie = n;
      cn.NODE_ENV, fe = Bt(
        ie.length > 1 ? ie(
          cn.NODE_ENV !== "production" ? ui(C) : C,
          cn.NODE_ENV !== "production" ? {
            get attrs() {
              return ui(p);
            },
            slots: d,
            emit: m
          } : { attrs: p, slots: d, emit: m }
        ) : ie(
          cn.NODE_ENV !== "production" ? ui(C) : C,
          null
        )
      ), ge = n.props ? p : Mc(p);
    }
  } catch (ie) {
    Tr.length = 0, Ii(ie, e, 1), fe = At(_n);
  }
  let xe = fe;
  if (ge && q !== !1) {
    const ie = Object.keys(ge), { shapeFlag: Te } = xe;
    ie.length && Te & 7 && (c && ie.some(Ko) && (ge = jc(
      ge,
      c
    )), xe = Qn(xe, ge, !1, !0));
  }
  return i.dirs && (xe = Qn(xe, null, !1, !0), xe.dirs = xe.dirs ? xe.dirs.concat(i.dirs) : i.dirs), i.transition && zo(xe, i.transition), fe = xe, vi(Ae), fe;
}
const Mc = (e) => {
  let n;
  for (const i in e)
    (i === "class" || i === "style" || xi(i)) && ((n || (n = {}))[i] = e[i]);
  return n;
}, jc = (e, n) => {
  const i = {};
  for (const s in e)
    (!Ko(s) || !(s.slice(9) in n)) && (i[s] = e[s]);
  return i;
};
function Bc(e, n, i) {
  const { props: s, children: a, component: c } = e, { props: d, children: p, patchFlag: m } = n, I = c.emitsOptions;
  if (n.dirs || n.transition)
    return !0;
  if (i && m >= 0) {
    if (m & 1024)
      return !0;
    if (m & 16)
      return s ? qs(s, d, I) : !!d;
    if (m & 8) {
      const S = n.dynamicProps;
      for (let C = 0; C < S.length; C++) {
        const K = S[C];
        if (d[K] !== s[K] && !Di(I, K))
          return !0;
      }
    }
  } else
    return (a || p) && (!p || !p.$stable) ? !0 : s === d ? !1 : s ? d ? qs(s, d, I) : !0 : !!d;
  return !1;
}
function qs(e, n, i) {
  const s = Object.keys(n);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < s.length; a++) {
    const c = s[a];
    if (n[c] !== e[c] && !Di(i, c))
      return !0;
  }
  return !1;
}
function Kc({ vnode: e, parent: n }, i) {
  for (; n; ) {
    const s = n.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = n.vnode).el = i, n = n.parent;
    else
      break;
  }
}
const mu = (e) => e.__isSuspense;
function Lc(e, n) {
  n && n.pendingBranch ? le(e) ? n.effects.push(...e) : n.effects.push(e) : Yl(e);
}
const rt = Symbol.for("v-fgt"), ki = Symbol.for("v-txt"), _n = Symbol.for("v-cmt"), Eo = Symbol.for("v-stc"), Tr = [];
let gt = null;
function Ge(e = !1) {
  Tr.push(gt = e ? null : []);
}
function Uc() {
  Tr.pop(), gt = Tr[Tr.length - 1] || null;
}
let Nr = 1;
function Ws(e, n = !1) {
  Nr += e, e < 0 && gt && n && (gt.hasOnce = !0);
}
function gu(e) {
  return e.dynamicChildren = Nr > 0 ? gt || qn : null, Uc(), Nr > 0 && gt && gt.push(e), e;
}
function Xe(e, n, i, s, a, c) {
  return gu(
    re(
      e,
      n,
      i,
      s,
      a,
      c,
      !0
    )
  );
}
function yu(e, n, i, s, a) {
  return gu(
    At(
      e,
      n,
      i,
      s,
      a,
      !0
    )
  );
}
function _u(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function mr(e, n) {
  return e.type === n.type && e.key === n.key;
}
const vu = ({ key: e }) => e ?? null, di = ({
  ref: e,
  ref_key: n,
  ref_for: i
}) => (typeof e == "number" && (e = "" + e), e != null ? He(e) || Qe(e) || pe(e) ? { i: mt, r: e, k: n, f: !!i } : e : null);
function re(e, n = null, i = null, s = 0, a = null, c = e === rt ? 0 : 1, d = !1, p = !1) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: n,
    key: n && vu(n),
    ref: n && di(n),
    scopeId: Ya,
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
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: mt
  };
  return p ? (es(m, i), c & 128 && e.normalize(m)) : i && (m.shapeFlag |= He(i) ? 8 : 16), Nr > 0 && // avoid a block node from tracking itself
  !d && // has current parent block
  gt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || c & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && gt.push(m), m;
}
const At = Hc;
function Hc(e, n = null, i = null, s = 0, a = null, c = !1) {
  if ((!e || e === cc) && (e = _n), _u(e)) {
    const p = Qn(
      e,
      n,
      !0
      /* mergeRef: true */
    );
    return i && es(p, i), Nr > 0 && !c && gt && (p.shapeFlag & 6 ? gt[gt.indexOf(e)] = p : gt.push(p)), p.patchFlag = -2, p;
  }
  if (nf(e) && (e = e.__vccOpts), n) {
    n = Fc(n);
    let { class: p, style: m } = n;
    p && !He(p) && (n.class = Ho(p)), De(m) && (Yo(m) && !le(m) && (m = it({}, m)), n.style = xt(m));
  }
  const d = He(e) ? 1 : mu(e) ? 128 : Jl(e) ? 64 : De(e) ? 4 : pe(e) ? 2 : 0;
  return re(
    e,
    n,
    i,
    s,
    a,
    d,
    c,
    !0
  );
}
function Fc(e) {
  return e ? Yo(e) || iu(e) ? it({}, e) : e : null;
}
function Qn(e, n, i = !1, s = !1) {
  const { props: a, ref: c, patchFlag: d, children: p, transition: m } = e, I = n ? Gc(a || {}, n) : a, S = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: I,
    key: I && vu(I),
    ref: n && n.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && c ? le(c) ? c.concat(di(n)) : [c, di(n)] : di(n)
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
    patchFlag: n && e.type !== rt ? d === -1 ? 16 : d | 16 : d,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: m,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Qn(e.ssContent),
    ssFallback: e.ssFallback && Qn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return m && s && zo(
    S,
    m.clone(S)
  ), S;
}
function bu(e = " ", n = 0) {
  return At(ki, null, e, n);
}
function Vc(e = "", n = !1) {
  return n ? (Ge(), yu(_n, null, e)) : At(_n, null, e);
}
function Bt(e) {
  return e == null || typeof e == "boolean" ? At(_n) : le(e) ? At(
    rt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : _u(e) ? dn(e) : At(ki, null, String(e));
}
function dn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qn(e);
}
function es(e, n) {
  let i = 0;
  const { shapeFlag: s } = e;
  if (n == null)
    n = null;
  else if (le(n))
    i = 16;
  else if (typeof n == "object")
    if (s & 65) {
      const a = n.default;
      a && (a._c && (a._d = !1), es(e, a()), a._c && (a._d = !0));
      return;
    } else {
      i = 32;
      const a = n._;
      !a && !iu(n) ? n._ctx = mt : a === 3 && mt && (mt.slots._ === 1 ? n._ = 1 : (n._ = 2, e.patchFlag |= 1024));
    }
  else pe(n) ? (n = { default: n, _ctx: mt }, i = 32) : (n = String(n), s & 64 ? (i = 16, n = [bu(n)]) : i = 8);
  e.children = n, e.shapeFlag |= i;
}
function Gc(...e) {
  const n = {};
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    for (const a in s)
      if (a === "class")
        n.class !== s.class && (n.class = Ho([n.class, s.class]));
      else if (a === "style")
        n.style = xt([n.style, s.style]);
      else if (xi(a)) {
        const c = n[a], d = s[a];
        d && c !== d && !(le(c) && c.includes(d)) && (n[a] = c ? [].concat(c, d) : d);
      } else a !== "" && (n[a] = s[a]);
  }
  return n;
}
function Mt(e, n, i, s = null) {
  Ht(e, n, 7, [
    i,
    s
  ]);
}
const qc = tu();
let Wc = 0;
function $c(e, n, i) {
  const s = e.type, a = (n ? n.appContext : e.appContext) || qc, c = {
    uid: Wc++,
    vnode: e,
    type: s,
    parent: n,
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
    scope: new dl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: n ? n.provides : Object.create(a.provides),
    ids: n ? n.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: su(s, a),
    emitsOptions: hu(s, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Se,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
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
  return c.ctx = { _: c }, c.root = n ? n.root : c, c.emit = kc.bind(null, c), e.ce && e.ce(c), c;
}
let Je = null;
const Yc = () => Je || mt;
let wi, ko;
{
  const e = Ri(), n = (i, s) => {
    let a;
    return (a = e[i]) || (a = e[i] = []), a.push(s), (c) => {
      a.length > 1 ? a.forEach((d) => d(c)) : a[0](c);
    };
  };
  wi = n(
    "__VUE_INSTANCE_SETTERS__",
    (i) => Je = i
  ), ko = n(
    "__VUE_SSR_SETTERS__",
    (i) => Ir = i
  );
}
const kr = (e) => {
  const n = Je;
  return wi(e), e.scope.on(), () => {
    e.scope.off(), wi(n);
  };
}, $s = () => {
  Je && Je.scope.off(), wi(null);
};
function wu(e) {
  return e.vnode.shapeFlag & 4;
}
let Ir = !1;
function Xc(e, n = !1, i = !1) {
  n && ko(n);
  const { props: s, children: a } = e.vnode, c = wu(e);
  bc(e, s, c, n), xc(e, a, i || n);
  const d = c ? zc(e, n) : void 0;
  return n && ko(!1), d;
}
function zc(e, n) {
  const i = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, fc);
  const { setup: s } = i;
  if (s) {
    Lt();
    const a = e.setupContext = s.length > 1 ? Qc(e) : null, c = kr(e), d = tr(
      s,
      e,
      0,
      [
        e.props,
        a
      ]
    ), p = ga(d);
    if (Ut(), c(), (p || e.sp) && !Or(e) && Xa(e), p) {
      if (d.then($s, $s), n)
        return d.then((m) => {
          Ys(e, m);
        }).catch((m) => {
          Ii(m, e, 0);
        });
      e.asyncDep = d;
    } else
      Ys(e, d);
  } else
    Eu(e);
}
function Ys(e, n, i) {
  pe(n) ? e.type.__ssrInlineRender ? e.ssrRender = n : e.render = n : De(n) && (e.setupState = Ha(n)), Eu(e);
}
function Eu(e, n, i) {
  const s = e.type;
  e.render || (e.render = s.render || Rt);
  {
    const a = kr(e);
    Lt();
    try {
      dc(e);
    } finally {
      Ut(), a();
    }
  }
}
const Jc = {
  get(e, n) {
    return nt(e, "get", ""), e[n];
  }
};
function Qc(e) {
  const n = (i) => {
    e.exposed = i || {};
  };
  return {
    attrs: new Proxy(e.attrs, Jc),
    slots: e.slots,
    emit: e.emit,
    expose: n
  };
}
function Mi(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ha(Dl(e.exposed)), {
    get(n, i) {
      if (i in n)
        return n[i];
      if (i in xr)
        return xr[i](e);
    },
    has(n, i) {
      return i in n || i in xr;
    }
  })) : e.proxy;
}
const Zc = /(?:^|[-_])(\w)/g, ef = (e) => e.replace(Zc, (n) => n.toUpperCase()).replace(/[-_]/g, "");
function tf(e, n = !0) {
  return pe(e) ? e.displayName || e.name : e.name || n && e.__name;
}
function Ou(e, n, i = !1) {
  let s = tf(n);
  if (!s && n.__file) {
    const a = n.__file.match(/([^/\\]+)\.\w+$/);
    a && (s = a[1]);
  }
  if (!s && e && e.parent) {
    const a = (c) => {
      for (const d in c)
        if (c[d] === n)
          return d;
    };
    s = a(
      e.components || e.parent.type.components
    ) || a(e.appContext.components);
  }
  return s ? ef(s) : i ? "App" : "Anonymous";
}
function nf(e) {
  return pe(e) && "__vccOpts" in e;
}
const Jn = (e, n) => Kl(e, n, Ir), rf = "3.5.20";
let Mo;
const Xs = typeof window < "u" && window.trustedTypes;
if (Xs)
  try {
    Mo = /* @__PURE__ */ Xs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const xu = Mo ? (e) => Mo.createHTML(e) : (e) => e, of = "http://www.w3.org/2000/svg", sf = "http://www.w3.org/1998/Math/MathML", $t = typeof document < "u" ? document : null, zs = $t && /* @__PURE__ */ $t.createElement("template"), af = {
  insert: (e, n, i) => {
    n.insertBefore(e, i || null);
  },
  remove: (e) => {
    const n = e.parentNode;
    n && n.removeChild(e);
  },
  createElement: (e, n, i, s) => {
    const a = n === "svg" ? $t.createElementNS(of, e) : n === "mathml" ? $t.createElementNS(sf, e) : i ? $t.createElement(e, { is: i }) : $t.createElement(e);
    return e === "select" && s && s.multiple != null && a.setAttribute("multiple", s.multiple), a;
  },
  createText: (e) => $t.createTextNode(e),
  createComment: (e) => $t.createComment(e),
  setText: (e, n) => {
    e.nodeValue = n;
  },
  setElementText: (e, n) => {
    e.textContent = n;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => $t.querySelector(e),
  setScopeId(e, n) {
    e.setAttribute(n, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, n, i, s, a, c) {
    const d = i ? i.previousSibling : n.lastChild;
    if (a && (a === c || a.nextSibling))
      for (; n.insertBefore(a.cloneNode(!0), i), !(a === c || !(a = a.nextSibling)); )
        ;
    else {
      zs.innerHTML = xu(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const p = zs.content;
      if (s === "svg" || s === "mathml") {
        const m = p.firstChild;
        for (; m.firstChild; )
          p.appendChild(m.firstChild);
        p.removeChild(m);
      }
      n.insertBefore(p, i);
    }
    return [
      // first
      d ? d.nextSibling : n.firstChild,
      // last
      i ? i.previousSibling : n.lastChild
    ];
  }
}, uf = Symbol("_vtc");
function lf(e, n, i) {
  const s = e[uf];
  s && (n = (n ? [n, ...s] : [...s]).join(" ")), n == null ? e.removeAttribute("class") : i ? e.setAttribute("class", n) : e.className = n;
}
const Js = Symbol("_vod"), cf = Symbol("_vsh"), ff = Symbol(""), df = /(^|;)\s*display\s*:/;
function pf(e, n, i) {
  const s = e.style, a = He(i);
  let c = !1;
  if (i && !a) {
    if (n)
      if (He(n))
        for (const d of n.split(";")) {
          const p = d.slice(0, d.indexOf(":")).trim();
          i[p] == null && pi(s, p, "");
        }
      else
        for (const d in n)
          i[d] == null && pi(s, d, "");
    for (const d in i)
      d === "display" && (c = !0), pi(s, d, i[d]);
  } else if (a) {
    if (n !== i) {
      const d = s[ff];
      d && (i += ";" + d), s.cssText = i, c = df.test(i);
    }
  } else n && e.removeAttribute("style");
  Js in e && (e[Js] = c ? s.display : "", e[cf] && (s.display = "none"));
}
const Qs = /\s*!important$/;
function pi(e, n, i) {
  if (le(i))
    i.forEach((s) => pi(e, n, s));
  else if (i == null && (i = ""), n.startsWith("--"))
    e.setProperty(n, i);
  else {
    const s = hf(e, n);
    Qs.test(i) ? e.setProperty(
      In(s),
      i.replace(Qs, ""),
      "important"
    ) : e[s] = i;
  }
}
const Zs = ["Webkit", "Moz", "ms"], Oo = {};
function hf(e, n) {
  const i = Oo[n];
  if (i)
    return i;
  let s = gn(n);
  if (s !== "filter" && s in e)
    return Oo[n] = s;
  s = va(s);
  for (let a = 0; a < Zs.length; a++) {
    const c = Zs[a] + s;
    if (c in e)
      return Oo[n] = c;
  }
  return n;
}
const ea = "http://www.w3.org/1999/xlink";
function ta(e, n, i, s, a, c = ll(n)) {
  s && n.startsWith("xlink:") ? i == null ? e.removeAttributeNS(ea, n.slice(6, n.length)) : e.setAttributeNS(ea, n, i) : i == null || c && !wa(i) ? e.removeAttribute(n) : e.setAttribute(
    n,
    c ? "" : Kt(i) ? String(i) : i
  );
}
function na(e, n, i, s, a) {
  if (n === "innerHTML" || n === "textContent") {
    i != null && (e[n] = n === "innerHTML" ? xu(i) : i);
    return;
  }
  const c = e.tagName;
  if (n === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const p = c === "OPTION" ? e.getAttribute("value") || "" : e.value, m = i == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(i);
    (p !== m || !("_value" in e)) && (e.value = m), i == null && e.removeAttribute(n), e._value = i;
    return;
  }
  let d = !1;
  if (i === "" || i == null) {
    const p = typeof e[n];
    p === "boolean" ? i = wa(i) : i == null && p === "string" ? (i = "", d = !0) : p === "number" && (i = 0, d = !0);
  }
  try {
    e[n] = i;
  } catch {
  }
  d && e.removeAttribute(a || n);
}
function pn(e, n, i, s) {
  e.addEventListener(n, i, s);
}
function mf(e, n, i, s) {
  e.removeEventListener(n, i, s);
}
const ra = Symbol("_vei");
function gf(e, n, i, s, a = null) {
  const c = e[ra] || (e[ra] = {}), d = c[n];
  if (s && d)
    d.value = s;
  else {
    const [p, m] = yf(n);
    if (s) {
      const I = c[n] = bf(
        s,
        a
      );
      pn(e, p, I, m);
    } else d && (mf(e, p, d, m), c[n] = void 0);
  }
}
const ia = /(?:Once|Passive|Capture)$/;
function yf(e) {
  let n;
  if (ia.test(e)) {
    n = {};
    let s;
    for (; s = e.match(ia); )
      e = e.slice(0, e.length - s[0].length), n[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : In(e.slice(2)), n];
}
let xo = 0;
const _f = /* @__PURE__ */ Promise.resolve(), vf = () => xo || (_f.then(() => xo = 0), xo = Date.now());
function bf(e, n) {
  const i = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= i.attached)
      return;
    Ht(
      wf(s, i.value),
      n,
      5,
      [s]
    );
  };
  return i.value = e, i.attached = vf(), i;
}
function wf(e, n) {
  if (le(n)) {
    const i = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      i.call(e), e._stopped = !0;
    }, n.map(
      (s) => (a) => !a._stopped && s && s(a)
    );
  } else
    return n;
}
const oa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ef = (e, n, i, s, a, c) => {
  const d = a === "svg";
  n === "class" ? lf(e, s, d) : n === "style" ? pf(e, i, s) : xi(n) ? Ko(n) || gf(e, n, i, s, c) : (n[0] === "." ? (n = n.slice(1), !0) : n[0] === "^" ? (n = n.slice(1), !1) : Of(e, n, s, d)) ? (na(e, n, s), !e.tagName.includes("-") && (n === "value" || n === "checked" || n === "selected") && ta(e, n, s, d, c, n !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(n) || !He(s)) ? na(e, gn(n), s, c, n) : (n === "true-value" ? e._trueValue = s : n === "false-value" && (e._falseValue = s), ta(e, n, s, d));
};
function Of(e, n, i, s) {
  if (s)
    return !!(n === "innerHTML" || n === "textContent" || n in e && oa(n) && pe(i));
  if (n === "spellcheck" || n === "draggable" || n === "translate" || n === "autocorrect" || n === "form" || n === "list" && e.tagName === "INPUT" || n === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (n === "width" || n === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return oa(n) && He(i) ? !1 : n in e;
}
const Zn = (e) => {
  const n = e.props["onUpdate:modelValue"] || !1;
  return le(n) ? (i) => ci(n, i) : n;
};
function xf(e) {
  e.target.composing = !0;
}
function sa(e) {
  const n = e.target;
  n.composing && (n.composing = !1, n.dispatchEvent(new Event("input")));
}
const Jt = Symbol("_assign"), aa = {
  created(e, { modifiers: { lazy: n, trim: i, number: s } }, a) {
    e[Jt] = Zn(a);
    const c = s || a.props && a.props.type === "number";
    pn(e, n ? "change" : "input", (d) => {
      if (d.target.composing) return;
      let p = e.value;
      i && (p = p.trim()), c && (p = mi(p)), e[Jt](p);
    }), i && pn(e, "change", () => {
      e.value = e.value.trim();
    }), n || (pn(e, "compositionstart", xf), pn(e, "compositionend", sa), pn(e, "change", sa));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: n }) {
    e.value = n ?? "";
  },
  beforeUpdate(e, { value: n, oldValue: i, modifiers: { lazy: s, trim: a, number: c } }, d) {
    if (e[Jt] = Zn(d), e.composing) return;
    const p = (c || e.type === "number") && !/^0\d/.test(e.value) ? mi(e.value) : e.value, m = n ?? "";
    p !== m && (document.activeElement === e && e.type !== "range" && (s && n === i || a && e.value.trim() === m) || (e.value = m));
  }
}, ua = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, n, i) {
    e[Jt] = Zn(i), pn(e, "change", () => {
      const s = e._modelValue, a = Cr(e), c = e.checked, d = e[Jt];
      if (le(s)) {
        const p = Fo(s, a), m = p !== -1;
        if (c && !m)
          d(s.concat(a));
        else if (!c && m) {
          const I = [...s];
          I.splice(p, 1), d(I);
        }
      } else if (er(s)) {
        const p = new Set(s);
        c ? p.add(a) : p.delete(a), d(p);
      } else
        d(Tu(e, c));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: la,
  beforeUpdate(e, n, i) {
    e[Jt] = Zn(i), la(e, n, i);
  }
};
function la(e, { value: n, oldValue: i }, s) {
  e._modelValue = n;
  let a;
  if (le(n))
    a = Fo(n, s.props.value) > -1;
  else if (er(n))
    a = n.has(s.props.value);
  else {
    if (n === i) return;
    a = Dr(n, Tu(e, !0));
  }
  e.checked !== a && (e.checked = a);
}
const gr = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: n, modifiers: { number: i } }, s) {
    const a = er(n);
    pn(e, "change", () => {
      const c = Array.prototype.filter.call(e.options, (d) => d.selected).map(
        (d) => i ? mi(Cr(d)) : Cr(d)
      );
      e[Jt](
        e.multiple ? a ? new Set(c) : c : c[0]
      ), e._assigning = !0, Ga(() => {
        e._assigning = !1;
      });
    }), e[Jt] = Zn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: n }) {
    ca(e, n);
  },
  beforeUpdate(e, n, i) {
    e[Jt] = Zn(i);
  },
  updated(e, { value: n }) {
    e._assigning || ca(e, n);
  }
};
function ca(e, n) {
  const i = e.multiple, s = le(n);
  if (!(i && !s && !er(n))) {
    for (let a = 0, c = e.options.length; a < c; a++) {
      const d = e.options[a], p = Cr(d);
      if (i)
        if (s) {
          const m = typeof p;
          m === "string" || m === "number" ? d.selected = n.some((I) => String(I) === String(p)) : d.selected = Fo(n, p) > -1;
        } else
          d.selected = n.has(p);
      else if (Dr(Cr(d), n)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !i && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Cr(e) {
  return "_value" in e ? e._value : e.value;
}
function Tu(e, n) {
  const i = n ? "_trueValue" : "_falseValue";
  return i in e ? e[i] : n;
}
const Tf = /* @__PURE__ */ it({ patchProp: Ef }, af);
let fa;
function Rf() {
  return fa || (fa = Rc(Tf));
}
const Sf = ((...e) => {
  const n = Rf().createApp(...e), { mount: i } = n;
  return n.mount = (s) => {
    const a = Nf(s);
    if (!a) return;
    const c = n._component;
    !pe(c) && !c.render && !c.template && (c.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const d = i(a, !1, Af(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), d;
  }, n;
});
function Af(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Nf(e) {
  return He(e) ? document.querySelector(e) : e;
}
var If = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Cf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hi = { exports: {} }, Pf = hi.exports, da;
function Df() {
  return da || (da = 1, (function(e, n) {
    (function(i, s) {
      e.exports = s();
    })(Pf, function() {
      var i = function(t, r) {
        return (i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, u) {
          o.__proto__ = u;
        } || function(o, u) {
          for (var l in u) Object.prototype.hasOwnProperty.call(u, l) && (o[l] = u[l]);
        })(t, r);
      }, s = function() {
        return (s = Object.assign || function(t) {
          for (var r, o = 1, u = arguments.length; o < u; o++) for (var l in r = arguments[o]) Object.prototype.hasOwnProperty.call(r, l) && (t[l] = r[l]);
          return t;
        }).apply(this, arguments);
      };
      function a(t, r, o) {
        for (var u, l = 0, f = r.length; l < f; l++) !u && l in r || ((u = u || Array.prototype.slice.call(r, 0, l))[l] = r[l]);
        return t.concat(u || Array.prototype.slice.call(r));
      }
      var c = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : If, d = Object.keys, p = Array.isArray;
      function m(t, r) {
        return typeof r != "object" || d(r).forEach(function(o) {
          t[o] = r[o];
        }), t;
      }
      typeof Promise > "u" || c.Promise || (c.Promise = Promise);
      var I = Object.getPrototypeOf, S = {}.hasOwnProperty;
      function C(t, r) {
        return S.call(t, r);
      }
      function K(t, r) {
        typeof r == "function" && (r = r(I(t))), (typeof Reflect > "u" ? d : Reflect.ownKeys)(r).forEach(function(o) {
          D(t, o, r[o]);
        });
      }
      var k = Object.defineProperty;
      function D(t, r, o, u) {
        k(t, r, m(o && C(o, "get") && typeof o.get == "function" ? { get: o.get, set: o.set, configurable: !0 } : { value: o, configurable: !0, writable: !0 }, u));
      }
      function q(t) {
        return { from: function(r) {
          return t.prototype = Object.create(r.prototype), D(t.prototype, "constructor", t), { extend: K.bind(null, t.prototype) };
        } };
      }
      var Ae = Object.getOwnPropertyDescriptor, fe = [].slice;
      function ge(t, r, o) {
        return fe.call(t, r, o);
      }
      function xe(t, r) {
        return r(t);
      }
      function ie(t) {
        if (!t) throw new Error("Assertion Failed");
      }
      function Te(t) {
        c.setImmediate ? setImmediate(t) : setTimeout(t, 0);
      }
      function Ke(t, r) {
        if (typeof r == "string" && C(t, r)) return t[r];
        if (!r) return t;
        if (typeof r != "string") {
          for (var o = [], u = 0, l = r.length; u < l; ++u) {
            var f = Ke(t, r[u]);
            o.push(f);
          }
          return o;
        }
        var h = r.indexOf(".");
        if (h !== -1) {
          var y = t[r.substr(0, h)];
          return y == null ? void 0 : Ke(y, r.substr(h + 1));
        }
      }
      function Ne(t, r, o) {
        if (t && r !== void 0 && !("isFrozen" in Object && Object.isFrozen(t))) if (typeof r != "string" && "length" in r) {
          ie(typeof o != "string" && "length" in o);
          for (var u = 0, l = r.length; u < l; ++u) Ne(t, r[u], o[u]);
        } else {
          var f, h, y = r.indexOf(".");
          y !== -1 ? (f = r.substr(0, y), (h = r.substr(y + 1)) === "" ? o === void 0 ? p(t) && !isNaN(parseInt(f)) ? t.splice(f, 1) : delete t[f] : t[f] = o : Ne(y = !(y = t[f]) || !C(t, f) ? t[f] = {} : y, h, o)) : o === void 0 ? p(t) && !isNaN(parseInt(r)) ? t.splice(r, 1) : delete t[r] : t[r] = o;
        }
      }
      function yt(t) {
        var r, o = {};
        for (r in t) C(t, r) && (o[r] = t[r]);
        return o;
      }
      var Cn = [].concat;
      function Nt(t) {
        return Cn.apply([], t);
      }
      var he = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Nt([8, 16, 32, 64].map(function(t) {
        return ["Int", "Uint", "Float"].map(function(r) {
          return r + t + "Array";
        });
      }))).filter(function(t) {
        return c[t];
      }), Zt = new Set(he.map(function(t) {
        return c[t];
      })), It = null;
      function _t(t) {
        return It = /* @__PURE__ */ new WeakMap(), t = (function r(o) {
          if (!o || typeof o != "object") return o;
          var u = It.get(o);
          if (u) return u;
          if (p(o)) {
            u = [], It.set(o, u);
            for (var l = 0, f = o.length; l < f; ++l) u.push(r(o[l]));
          } else if (Zt.has(o.constructor)) u = o;
          else {
            var h, y = I(o);
            for (h in u = y === Object.prototype ? {} : Object.create(y), It.set(o, u), o) C(o, h) && (u[h] = r(o[h]));
          }
          return u;
        })(t), It = null, t;
      }
      var nr = {}.toString;
      function Pn(t) {
        return nr.call(t).slice(8, -1);
      }
      var Ve = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Ce = typeof Ve == "symbol" ? function(t) {
        var r;
        return t != null && (r = t[Ve]) && r.apply(t);
      } : function() {
        return null;
      };
      function _e(t, r) {
        return r = t.indexOf(r), 0 <= r && t.splice(r, 1), 0 <= r;
      }
      var lt = {};
      function ct(t) {
        var r, o, u, l;
        if (arguments.length === 1) {
          if (p(t)) return t.slice();
          if (this === lt && typeof t == "string") return [t];
          if (l = Ce(t)) {
            for (o = []; !(u = l.next()).done; ) o.push(u.value);
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
      var Ot = typeof Symbol < "u" ? function(t) {
        return t[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, ue = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], wt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(ue), vt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Ft(t, r) {
        this.name = t, this.message = r;
      }
      function Mr(t, r) {
        return t + ". Errors: " + Object.keys(r).map(function(o) {
          return r[o].toString();
        }).filter(function(o, u, l) {
          return l.indexOf(o) === u;
        }).join(`
`);
      }
      function Dn(t, r, o, u) {
        this.failures = r, this.failedKeys = u, this.successCount = o, this.message = Mr(t, r);
      }
      function bt(t, r) {
        this.name = "BulkError", this.failures = Object.keys(r).map(function(o) {
          return r[o];
        }), this.failuresByPos = r, this.message = Mr(t, this.failures);
      }
      q(Ft).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), q(Dn).from(Ft), q(bt).from(Ft);
      var en = wt.reduce(function(t, r) {
        return t[r] = r + "Error", t;
      }, {}), rr = Ft, oe = wt.reduce(function(t, r) {
        var o = r + "Error";
        function u(l, f) {
          this.name = o, l ? typeof l == "string" ? (this.message = "".concat(l).concat(f ? `
 ` + f : ""), this.inner = f || null) : typeof l == "object" && (this.message = "".concat(l.name, " ").concat(l.message), this.inner = l) : (this.message = vt[r] || o, this.inner = null);
        }
        return q(u).from(rr), t[r] = u, t;
      }, {});
      oe.Syntax = SyntaxError, oe.Type = TypeError, oe.Range = RangeError;
      var tn = ue.reduce(function(t, r) {
        return t[r + "Error"] = oe[r], t;
      }, {}), ir = wt.reduce(function(t, r) {
        return ["Syntax", "Type", "Range"].indexOf(r) === -1 && (t[r + "Error"] = oe[r]), t;
      }, {});
      function g() {
      }
      function E(t) {
        return t;
      }
      function B(t, r) {
        return t == null || t === E ? r : function(o) {
          return r(t(o));
        };
      }
      function H(t, r) {
        return function() {
          t.apply(this, arguments), r.apply(this, arguments);
        };
      }
      function U(t, r) {
        return t === g ? r : function() {
          var o = t.apply(this, arguments);
          o !== void 0 && (arguments[0] = o);
          var u = this.onsuccess, l = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var f = r.apply(this, arguments);
          return u && (this.onsuccess = this.onsuccess ? H(u, this.onsuccess) : u), l && (this.onerror = this.onerror ? H(l, this.onerror) : l), f !== void 0 ? f : o;
        };
      }
      function F(t, r) {
        return t === g ? r : function() {
          t.apply(this, arguments);
          var o = this.onsuccess, u = this.onerror;
          this.onsuccess = this.onerror = null, r.apply(this, arguments), o && (this.onsuccess = this.onsuccess ? H(o, this.onsuccess) : o), u && (this.onerror = this.onerror ? H(u, this.onerror) : u);
        };
      }
      function J(t, r) {
        return t === g ? r : function(o) {
          var u = t.apply(this, arguments);
          m(o, u);
          var l = this.onsuccess, f = this.onerror;
          return this.onsuccess = null, this.onerror = null, o = r.apply(this, arguments), l && (this.onsuccess = this.onsuccess ? H(l, this.onsuccess) : l), f && (this.onerror = this.onerror ? H(f, this.onerror) : f), u === void 0 ? o === void 0 ? void 0 : o : m(u, o);
        };
      }
      function X(t, r) {
        return t === g ? r : function() {
          return r.apply(this, arguments) !== !1 && t.apply(this, arguments);
        };
      }
      function $(t, r) {
        return t === g ? r : function() {
          var o = t.apply(this, arguments);
          if (o && typeof o.then == "function") {
            for (var u = this, l = arguments.length, f = new Array(l); l--; ) f[l] = arguments[l];
            return o.then(function() {
              return r.apply(u, f);
            });
          }
          return r.apply(this, arguments);
        };
      }
      ir.ModifyError = Dn, ir.DexieError = Ft, ir.BulkError = bt;
      var L = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function ae(t) {
        L = t;
      }
      var Q = {}, se = 100, he = typeof Promise > "u" ? [] : (function() {
        var t = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [t, I(t), t];
        var r = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [r, I(r), t];
      })(), ue = he[0], wt = he[1], he = he[2], wt = wt && wt.then, ve = ue && ue.constructor, Ee = !!he, Fe = function(t, r) {
        nn.push([t, r]), ot && (queueMicrotask(Iu), ot = !1);
      }, qe = !0, ot = !0, We = [], Ct = [], kn = E, je = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: g, pgp: !1, env: {}, finalize: g }, ne = je, nn = [], Pt = 0, jr = [];
      function ee(t) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var r = this._PSD = ne;
        if (typeof t != "function") {
          if (t !== Q) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Bi(this, this._value));
        }
        this._state = null, this._value = null, ++r.ref, (function o(u, l) {
          try {
            l(function(f) {
              if (u._state === null) {
                if (f === u) throw new TypeError("A promise cannot be resolved with itself.");
                var h = u._lib && Mn();
                f && typeof f.then == "function" ? o(u, function(y, v) {
                  f instanceof ee ? f._then(y, v) : f.then(y, v);
                }) : (u._state = !0, u._value = f, ns(u)), h && jn();
              }
            }, Bi.bind(null, u));
          } catch (f) {
            Bi(u, f);
          }
        })(this, t);
      }
      var ji = { get: function() {
        var t = ne, r = Ur;
        function o(u, l) {
          var f = this, h = !t.global && (t !== ne || r !== Ur), y = h && !on(), v = new ee(function(w, x) {
            Ki(f, new ts(is(u, t, h, y), is(l, t, h, y), w, x, t));
          });
          return this._consoleTask && (v._consoleTask = this._consoleTask), v;
        }
        return o.prototype = Q, o;
      }, set: function(t) {
        D(this, "then", t && t.prototype === Q ? ji : { get: function() {
          return t;
        }, set: ji.set });
      } };
      function ts(t, r, o, u, l) {
        this.onFulfilled = typeof t == "function" ? t : null, this.onRejected = typeof r == "function" ? r : null, this.resolve = o, this.reject = u, this.psd = l;
      }
      function Bi(t, r) {
        var o, u;
        Ct.push(r), t._state === null && (o = t._lib && Mn(), r = kn(r), t._state = !1, t._value = r, u = t, We.some(function(l) {
          return l._value === u._value;
        }) || We.push(u), ns(t), o && jn());
      }
      function ns(t) {
        var r = t._listeners;
        t._listeners = [];
        for (var o = 0, u = r.length; o < u; ++o) Ki(t, r[o]);
        var l = t._PSD;
        --l.ref || l.finalize(), Pt === 0 && (++Pt, Fe(function() {
          --Pt == 0 && Li();
        }, []));
      }
      function Ki(t, r) {
        if (t._state !== null) {
          var o = t._state ? r.onFulfilled : r.onRejected;
          if (o === null) return (t._state ? r.resolve : r.reject)(t._value);
          ++r.psd.ref, ++Pt, Fe(Nu, [o, t, r]);
        } else t._listeners.push(r);
      }
      function Nu(t, r, o) {
        try {
          var u, l = r._value;
          !r._state && Ct.length && (Ct = []), u = L && r._consoleTask ? r._consoleTask.run(function() {
            return t(l);
          }) : t(l), r._state || Ct.indexOf(l) !== -1 || (function(f) {
            for (var h = We.length; h; ) if (We[--h]._value === f._value) return We.splice(h, 1);
          })(r), o.resolve(u);
        } catch (f) {
          o.reject(f);
        } finally {
          --Pt == 0 && Li(), --o.psd.ref || o.psd.finalize();
        }
      }
      function Iu() {
        vn(je, function() {
          Mn() && jn();
        });
      }
      function Mn() {
        var t = qe;
        return ot = qe = !1, t;
      }
      function jn() {
        var t, r, o;
        do
          for (; 0 < nn.length; ) for (t = nn, nn = [], o = t.length, r = 0; r < o; ++r) {
            var u = t[r];
            u[0].apply(null, u[1]);
          }
        while (0 < nn.length);
        ot = qe = !0;
      }
      function Li() {
        var t = We;
        We = [], t.forEach(function(u) {
          u._PSD.onunhandled.call(null, u._value, u);
        });
        for (var r = jr.slice(0), o = r.length; o; ) r[--o]();
      }
      function Br(t) {
        return new ee(Q, !1, t);
      }
      function ke(t, r) {
        var o = ne;
        return function() {
          var u = Mn(), l = ne;
          try {
            return sn(o, !0), t.apply(this, arguments);
          } catch (f) {
            r && r(f);
          } finally {
            sn(l, !1), u && jn();
          }
        };
      }
      K(ee.prototype, { then: ji, _then: function(t, r) {
        Ki(this, new ts(null, null, t, r, ne));
      }, catch: function(t) {
        if (arguments.length === 1) return this.then(null, t);
        var r = t, o = arguments[1];
        return typeof r == "function" ? this.then(null, function(u) {
          return (u instanceof r ? o : Br)(u);
        }) : this.then(null, function(u) {
          return (u && u.name === r ? o : Br)(u);
        });
      }, finally: function(t) {
        return this.then(function(r) {
          return ee.resolve(t()).then(function() {
            return r;
          });
        }, function(r) {
          return ee.resolve(t()).then(function() {
            return Br(r);
          });
        });
      }, timeout: function(t, r) {
        var o = this;
        return t < 1 / 0 ? new ee(function(u, l) {
          var f = setTimeout(function() {
            return l(new oe.Timeout(r));
          }, t);
          o.then(u, l).finally(clearTimeout.bind(null, f));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && D(ee.prototype, Symbol.toStringTag, "Dexie.Promise"), je.env = rs(), K(ee, { all: function() {
        var t = ct.apply(null, arguments).map(Hr);
        return new ee(function(r, o) {
          t.length === 0 && r([]);
          var u = t.length;
          t.forEach(function(l, f) {
            return ee.resolve(l).then(function(h) {
              t[f] = h, --u || r(t);
            }, o);
          });
        });
      }, resolve: function(t) {
        return t instanceof ee ? t : t && typeof t.then == "function" ? new ee(function(r, o) {
          t.then(r, o);
        }) : new ee(Q, !0, t);
      }, reject: Br, race: function() {
        var t = ct.apply(null, arguments).map(Hr);
        return new ee(function(r, o) {
          t.map(function(u) {
            return ee.resolve(u).then(r, o);
          });
        });
      }, PSD: { get: function() {
        return ne;
      }, set: function(t) {
        return ne = t;
      } }, totalEchoes: { get: function() {
        return Ur;
      } }, newPSD: rn, usePSD: vn, scheduler: { get: function() {
        return Fe;
      }, set: function(t) {
        Fe = t;
      } }, rejectionMapper: { get: function() {
        return kn;
      }, set: function(t) {
        kn = t;
      } }, follow: function(t, r) {
        return new ee(function(o, u) {
          return rn(function(l, f) {
            var h = ne;
            h.unhandleds = [], h.onunhandled = f, h.finalize = H(function() {
              var y, v = this;
              y = function() {
                v.unhandleds.length === 0 ? l() : f(v.unhandleds[0]);
              }, jr.push(function w() {
                y(), jr.splice(jr.indexOf(w), 1);
              }), ++Pt, Fe(function() {
                --Pt == 0 && Li();
              }, []);
            }, h.finalize), t();
          }, r, o, u);
        });
      } }), ve && (ve.allSettled && D(ee, "allSettled", function() {
        var t = ct.apply(null, arguments).map(Hr);
        return new ee(function(r) {
          t.length === 0 && r([]);
          var o = t.length, u = new Array(o);
          t.forEach(function(l, f) {
            return ee.resolve(l).then(function(h) {
              return u[f] = { status: "fulfilled", value: h };
            }, function(h) {
              return u[f] = { status: "rejected", reason: h };
            }).then(function() {
              return --o || r(u);
            });
          });
        });
      }), ve.any && typeof AggregateError < "u" && D(ee, "any", function() {
        var t = ct.apply(null, arguments).map(Hr);
        return new ee(function(r, o) {
          t.length === 0 && o(new AggregateError([]));
          var u = t.length, l = new Array(u);
          t.forEach(function(f, h) {
            return ee.resolve(f).then(function(y) {
              return r(y);
            }, function(y) {
              l[h] = y, --u || o(new AggregateError(l));
            });
          });
        });
      }), ve.withResolvers && (ee.withResolvers = ve.withResolvers));
      var $e = { awaits: 0, echoes: 0, id: 0 }, Cu = 0, Kr = [], Lr = 0, Ur = 0, Pu = 0;
      function rn(t, r, o, u) {
        var l = ne, f = Object.create(l);
        return f.parent = l, f.ref = 0, f.global = !1, f.id = ++Pu, je.env, f.env = Ee ? { Promise: ee, PromiseProp: { value: ee, configurable: !0, writable: !0 }, all: ee.all, race: ee.race, allSettled: ee.allSettled, any: ee.any, resolve: ee.resolve, reject: ee.reject } : {}, r && m(f, r), ++l.ref, f.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, u = vn(f, t, o, u), f.ref === 0 && f.finalize(), u;
      }
      function Bn() {
        return $e.id || ($e.id = ++Cu), ++$e.awaits, $e.echoes += se, $e.id;
      }
      function on() {
        return !!$e.awaits && (--$e.awaits == 0 && ($e.id = 0), $e.echoes = $e.awaits * se, !0);
      }
      function Hr(t) {
        return $e.echoes && t && t.constructor === ve ? (Bn(), t.then(function(r) {
          return on(), r;
        }, function(r) {
          return on(), Le(r);
        })) : t;
      }
      function Du() {
        var t = Kr[Kr.length - 1];
        Kr.pop(), sn(t, !1);
      }
      function sn(t, r) {
        var o, u = ne;
        (r ? !$e.echoes || Lr++ && t === ne : !Lr || --Lr && t === ne) || queueMicrotask(r ? (function(l) {
          ++Ur, $e.echoes && --$e.echoes != 0 || ($e.echoes = $e.awaits = $e.id = 0), Kr.push(ne), sn(l, !0);
        }).bind(null, t) : Du), t !== ne && (ne = t, u === je && (je.env = rs()), Ee && (o = je.env.Promise, r = t.env, (u.global || t.global) && (Object.defineProperty(c, "Promise", r.PromiseProp), o.all = r.all, o.race = r.race, o.resolve = r.resolve, o.reject = r.reject, r.allSettled && (o.allSettled = r.allSettled), r.any && (o.any = r.any))));
      }
      function rs() {
        var t = c.Promise;
        return Ee ? { Promise: t, PromiseProp: Object.getOwnPropertyDescriptor(c, "Promise"), all: t.all, race: t.race, allSettled: t.allSettled, any: t.any, resolve: t.resolve, reject: t.reject } : {};
      }
      function vn(t, r, o, u, l) {
        var f = ne;
        try {
          return sn(t, !0), r(o, u, l);
        } finally {
          sn(f, !1);
        }
      }
      function is(t, r, o, u) {
        return typeof t != "function" ? t : function() {
          var l = ne;
          o && Bn(), sn(r, !0);
          try {
            return t.apply(this, arguments);
          } finally {
            sn(l, !1), u && queueMicrotask(on);
          }
        };
      }
      function Ui(t) {
        Promise === ve && $e.echoes === 0 ? Lr === 0 ? t() : enqueueNativeMicroTask(t) : setTimeout(t, 0);
      }
      ("" + wt).indexOf("[native code]") === -1 && (Bn = on = g);
      var Le = ee.reject, bn = "￿", Vt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", os = "String expected.", Kn = [], Fr = "__dbnames", Hi = "readonly", Fi = "readwrite";
      function wn(t, r) {
        return t ? r ? function() {
          return t.apply(this, arguments) && r.apply(this, arguments);
        } : t : r;
      }
      var ss = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Vr(t) {
        return typeof t != "string" || /\./.test(t) ? function(r) {
          return r;
        } : function(r) {
          return r[t] === void 0 && t in r && delete (r = _t(r))[t], r;
        };
      }
      function as() {
        throw oe.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function ye(t, r) {
        try {
          var o = us(t), u = us(r);
          if (o !== u) return o === "Array" ? 1 : u === "Array" ? -1 : o === "binary" ? 1 : u === "binary" ? -1 : o === "string" ? 1 : u === "string" ? -1 : o === "Date" ? 1 : u !== "Date" ? NaN : -1;
          switch (o) {
            case "number":
            case "Date":
            case "string":
              return r < t ? 1 : t < r ? -1 : 0;
            case "binary":
              return (function(l, f) {
                for (var h = l.length, y = f.length, v = h < y ? h : y, w = 0; w < v; ++w) if (l[w] !== f[w]) return l[w] < f[w] ? -1 : 1;
                return h === y ? 0 : h < y ? -1 : 1;
              })(ls(t), ls(r));
            case "Array":
              return (function(l, f) {
                for (var h = l.length, y = f.length, v = h < y ? h : y, w = 0; w < v; ++w) {
                  var x = ye(l[w], f[w]);
                  if (x !== 0) return x;
                }
                return h === y ? 0 : h < y ? -1 : 1;
              })(t, r);
          }
        } catch {
        }
        return NaN;
      }
      function us(t) {
        var r = typeof t;
        return r != "object" ? r : ArrayBuffer.isView(t) ? "binary" : (t = Pn(t), t === "ArrayBuffer" ? "binary" : t);
      }
      function ls(t) {
        return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t);
      }
      function Gr(t, r, o) {
        var u = t.schema.yProps;
        return u ? (r && 0 < o.numFailures && (r = r.filter(function(l, f) {
          return !o.failures[f];
        })), Promise.all(u.map(function(l) {
          return l = l.updatesTable, r ? t.db.table(l).where("k").anyOf(r).delete() : t.db.table(l).clear();
        })).then(function() {
          return o;
        })) : o;
      }
      var cs = (Pe.prototype._trans = function(t, r, o) {
        var u = this._tx || ne.trans, l = this.name, f = L && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(t === "readonly" ? "read" : "write", " ").concat(this.name));
        function h(w, x, _) {
          if (!_.schema[l]) throw new oe.NotFound("Table " + l + " not part of transaction");
          return r(_.idbtrans, _);
        }
        var y = Mn();
        try {
          var v = u && u.db._novip === this.db._novip ? u === ne.trans ? u._promise(t, h, o) : rn(function() {
            return u._promise(t, h, o);
          }, { trans: u, transless: ne.transless || ne }) : (function w(x, _, A, b) {
            if (x.idbdb && (x._state.openComplete || ne.letThrough || x._vip)) {
              var O = x._createTransaction(_, A, x._dbSchema);
              try {
                O.create(), x._state.PR1398_maxLoop = 3;
              } catch (R) {
                return R.name === en.InvalidState && x.isOpen() && 0 < --x._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), x.close({ disableAutoOpen: !1 }), x.open().then(function() {
                  return w(x, _, A, b);
                })) : Le(R);
              }
              return O._promise(_, function(R, T) {
                return rn(function() {
                  return ne.trans = O, b(R, T, O);
                });
              }).then(function(R) {
                if (_ === "readwrite") try {
                  O.idbtrans.commit();
                } catch {
                }
                return _ === "readonly" ? R : O._completion.then(function() {
                  return R;
                });
              });
            }
            if (x._state.openComplete) return Le(new oe.DatabaseClosed(x._state.dbOpenError));
            if (!x._state.isBeingOpened) {
              if (!x._state.autoOpen) return Le(new oe.DatabaseClosed());
              x.open().catch(g);
            }
            return x._state.dbReadyPromise.then(function() {
              return w(x, _, A, b);
            });
          })(this.db, t, [this.name], h);
          return f && (v._consoleTask = f, v = v.catch(function(w) {
            return console.trace(w), Le(w);
          })), v;
        } finally {
          y && jn();
        }
      }, Pe.prototype.get = function(t, r) {
        var o = this;
        return t && t.constructor === Object ? this.where(t).first(r) : t == null ? Le(new oe.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(u) {
          return o.core.get({ trans: u, key: t }).then(function(l) {
            return o.hook.reading.fire(l);
          });
        }).then(r);
      }, Pe.prototype.where = function(t) {
        if (typeof t == "string") return new this.db.WhereClause(this, t);
        if (p(t)) return new this.db.WhereClause(this, "[".concat(t.join("+"), "]"));
        var r = d(t);
        if (r.length === 1) return this.where(r[0]).equals(t[r[0]]);
        var o = this.schema.indexes.concat(this.schema.primKey).filter(function(y) {
          if (y.compound && r.every(function(w) {
            return 0 <= y.keyPath.indexOf(w);
          })) {
            for (var v = 0; v < r.length; ++v) if (r.indexOf(y.keyPath[v]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(y, v) {
          return y.keyPath.length - v.keyPath.length;
        })[0];
        if (o && this.db._maxKey !== bn) {
          var f = o.keyPath.slice(0, r.length);
          return this.where(f).equals(f.map(function(v) {
            return t[v];
          }));
        }
        !o && L && console.warn("The query ".concat(JSON.stringify(t), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(r.join("+"), "]"));
        var u = this.schema.idxByName;
        function l(y, v) {
          return ye(y, v) === 0;
        }
        var h = r.reduce(function(_, v) {
          var w = _[0], x = _[1], _ = u[v], A = t[v];
          return [w || _, w || !_ ? wn(x, _ && _.multi ? function(b) {
            return b = Ke(b, v), p(b) && b.some(function(O) {
              return l(A, O);
            });
          } : function(b) {
            return l(A, Ke(b, v));
          }) : x];
        }, [null, null]), f = h[0], h = h[1];
        return f ? this.where(f.name).equals(t[f.keyPath]).filter(h) : o ? this.filter(h) : this.where(r).equals("");
      }, Pe.prototype.filter = function(t) {
        return this.toCollection().and(t);
      }, Pe.prototype.count = function(t) {
        return this.toCollection().count(t);
      }, Pe.prototype.offset = function(t) {
        return this.toCollection().offset(t);
      }, Pe.prototype.limit = function(t) {
        return this.toCollection().limit(t);
      }, Pe.prototype.each = function(t) {
        return this.toCollection().each(t);
      }, Pe.prototype.toArray = function(t) {
        return this.toCollection().toArray(t);
      }, Pe.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Pe.prototype.orderBy = function(t) {
        return new this.db.Collection(new this.db.WhereClause(this, p(t) ? "[".concat(t.join("+"), "]") : t));
      }, Pe.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Pe.prototype.mapToClass = function(t) {
        var r, o = this.db, u = this.name;
        function l() {
          return r !== null && r.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = t).prototype instanceof as && ((function(v, w) {
          if (typeof w != "function" && w !== null) throw new TypeError("Class extends value " + String(w) + " is not a constructor or null");
          function x() {
            this.constructor = v;
          }
          i(v, w), v.prototype = w === null ? Object.create(w) : (x.prototype = w.prototype, new x());
        })(l, r = t), Object.defineProperty(l.prototype, "db", { get: function() {
          return o;
        }, enumerable: !1, configurable: !0 }), l.prototype.table = function() {
          return u;
        }, t = l);
        for (var f = /* @__PURE__ */ new Set(), h = t.prototype; h; h = I(h)) Object.getOwnPropertyNames(h).forEach(function(v) {
          return f.add(v);
        });
        function y(v) {
          if (!v) return v;
          var w, x = Object.create(t.prototype);
          for (w in v) if (!f.has(w)) try {
            x[w] = v[w];
          } catch {
          }
          return x;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = y, this.hook("reading", y), t;
      }, Pe.prototype.defineClass = function() {
        return this.mapToClass(function(t) {
          m(this, t);
        });
      }, Pe.prototype.add = function(t, r) {
        var o = this, u = this.schema.primKey, l = u.auto, f = u.keyPath, h = t;
        return f && l && (h = Vr(f)(t)), this._trans("readwrite", function(y) {
          return o.core.mutate({ trans: y, type: "add", keys: r != null ? [r] : null, values: [h] });
        }).then(function(y) {
          return y.numFailures ? ee.reject(y.failures[0]) : y.lastResult;
        }).then(function(y) {
          if (f) try {
            Ne(t, f, y);
          } catch {
          }
          return y;
        });
      }, Pe.prototype.update = function(t, r) {
        return typeof t != "object" || p(t) ? this.where(":id").equals(t).modify(r) : (t = Ke(t, this.schema.primKey.keyPath), t === void 0 ? Le(new oe.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(t).modify(r));
      }, Pe.prototype.put = function(t, r) {
        var o = this, u = this.schema.primKey, l = u.auto, f = u.keyPath, h = t;
        return f && l && (h = Vr(f)(t)), this._trans("readwrite", function(y) {
          return o.core.mutate({ trans: y, type: "put", values: [h], keys: r != null ? [r] : null });
        }).then(function(y) {
          return y.numFailures ? ee.reject(y.failures[0]) : y.lastResult;
        }).then(function(y) {
          if (f) try {
            Ne(t, f, y);
          } catch {
          }
          return y;
        });
      }, Pe.prototype.delete = function(t) {
        var r = this;
        return this._trans("readwrite", function(o) {
          return r.core.mutate({ trans: o, type: "delete", keys: [t] }).then(function(u) {
            return Gr(r, [t], u);
          }).then(function(u) {
            return u.numFailures ? ee.reject(u.failures[0]) : void 0;
          });
        });
      }, Pe.prototype.clear = function() {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "deleteRange", range: ss }).then(function(o) {
            return Gr(t, null, o);
          });
        }).then(function(r) {
          return r.numFailures ? ee.reject(r.failures[0]) : void 0;
        });
      }, Pe.prototype.bulkGet = function(t) {
        var r = this;
        return this._trans("readonly", function(o) {
          return r.core.getMany({ keys: t, trans: o }).then(function(u) {
            return u.map(function(l) {
              return r.hook.reading.fire(l);
            });
          });
        });
      }, Pe.prototype.bulkAdd = function(t, r, o) {
        var u = this, l = Array.isArray(r) ? r : void 0, f = (o = o || (l ? void 0 : r)) ? o.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var w = u.schema.primKey, y = w.auto, w = w.keyPath;
          if (w && l) throw new oe.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (l && l.length !== t.length) throw new oe.InvalidArgument("Arguments objects and keys must have the same length");
          var v = t.length, w = w && y ? t.map(Vr(w)) : t;
          return u.core.mutate({ trans: h, type: "add", keys: l, values: w, wantResults: f }).then(function(O) {
            var _ = O.numFailures, A = O.results, b = O.lastResult, O = O.failures;
            if (_ === 0) return f ? A : b;
            throw new bt("".concat(u.name, ".bulkAdd(): ").concat(_, " of ").concat(v, " operations failed"), O);
          });
        });
      }, Pe.prototype.bulkPut = function(t, r, o) {
        var u = this, l = Array.isArray(r) ? r : void 0, f = (o = o || (l ? void 0 : r)) ? o.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var w = u.schema.primKey, y = w.auto, w = w.keyPath;
          if (w && l) throw new oe.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (l && l.length !== t.length) throw new oe.InvalidArgument("Arguments objects and keys must have the same length");
          var v = t.length, w = w && y ? t.map(Vr(w)) : t;
          return u.core.mutate({ trans: h, type: "put", keys: l, values: w, wantResults: f }).then(function(O) {
            var _ = O.numFailures, A = O.results, b = O.lastResult, O = O.failures;
            if (_ === 0) return f ? A : b;
            throw new bt("".concat(u.name, ".bulkPut(): ").concat(_, " of ").concat(v, " operations failed"), O);
          });
        });
      }, Pe.prototype.bulkUpdate = function(t) {
        var r = this, o = this.core, u = t.map(function(h) {
          return h.key;
        }), l = t.map(function(h) {
          return h.changes;
        }), f = [];
        return this._trans("readwrite", function(h) {
          return o.getMany({ trans: h, keys: u, cache: "clone" }).then(function(y) {
            var v = [], w = [];
            t.forEach(function(_, A) {
              var b = _.key, O = _.changes, R = y[A];
              if (R) {
                for (var T = 0, N = Object.keys(O); T < N.length; T++) {
                  var P = N[T], M = O[P];
                  if (P === r.schema.primKey.keyPath) {
                    if (ye(M, b) !== 0) throw new oe.Constraint("Cannot update primary key in bulkUpdate()");
                  } else Ne(R, P, M);
                }
                f.push(A), v.push(b), w.push(R);
              }
            });
            var x = v.length;
            return o.mutate({ trans: h, type: "put", keys: v, values: w, updates: { keys: u, changeSpecs: l } }).then(function(_) {
              var A = _.numFailures, b = _.failures;
              if (A === 0) return x;
              for (var O = 0, R = Object.keys(b); O < R.length; O++) {
                var T, N = R[O], P = f[Number(N)];
                P != null && (T = b[N], delete b[N], b[P] = T);
              }
              throw new bt("".concat(r.name, ".bulkUpdate(): ").concat(A, " of ").concat(x, " operations failed"), b);
            });
          });
        });
      }, Pe.prototype.bulkDelete = function(t) {
        var r = this, o = t.length;
        return this._trans("readwrite", function(u) {
          return r.core.mutate({ trans: u, type: "delete", keys: t }).then(function(l) {
            return Gr(r, t, l);
          });
        }).then(function(h) {
          var l = h.numFailures, f = h.lastResult, h = h.failures;
          if (l === 0) return f;
          throw new bt("".concat(r.name, ".bulkDelete(): ").concat(l, " of ").concat(o, " operations failed"), h);
        });
      }, Pe);
      function Pe() {
      }
      function or(t) {
        function r(h, y) {
          if (y) {
            for (var v = arguments.length, w = new Array(v - 1); --v; ) w[v - 1] = arguments[v];
            return o[h].subscribe.apply(null, w), t;
          }
          if (typeof h == "string") return o[h];
        }
        var o = {};
        r.addEventType = f;
        for (var u = 1, l = arguments.length; u < l; ++u) f(arguments[u]);
        return r;
        function f(h, y, v) {
          if (typeof h != "object") {
            var w;
            y = y || X;
            var x = { subscribers: [], fire: v = v || g, subscribe: function(_) {
              x.subscribers.indexOf(_) === -1 && (x.subscribers.push(_), x.fire = y(x.fire, _));
            }, unsubscribe: function(_) {
              x.subscribers = x.subscribers.filter(function(A) {
                return A !== _;
              }), x.fire = x.subscribers.reduce(y, v);
            } };
            return o[h] = r[h] = x;
          }
          d(w = h).forEach(function(_) {
            var A = w[_];
            if (p(A)) f(_, w[_][0], w[_][1]);
            else {
              if (A !== "asap") throw new oe.InvalidArgument("Invalid event config");
              var b = f(_, E, function() {
                for (var O = arguments.length, R = new Array(O); O--; ) R[O] = arguments[O];
                b.subscribers.forEach(function(T) {
                  Te(function() {
                    T.apply(null, R);
                  });
                });
              });
            }
          });
        }
      }
      function sr(t, r) {
        return q(r).from({ prototype: t }), r;
      }
      function Ln(t, r) {
        return !(t.filter || t.algorithm || t.or) && (r ? t.justLimit : !t.replayFilter);
      }
      function Vi(t, r) {
        t.filter = wn(t.filter, r);
      }
      function Gi(t, r, o) {
        var u = t.replayFilter;
        t.replayFilter = u ? function() {
          return wn(u(), r());
        } : r, t.justLimit = o && !u;
      }
      function qr(t, r) {
        if (t.isPrimKey) return r.primaryKey;
        var o = r.getIndexByKeyPath(t.index);
        if (!o) throw new oe.Schema("KeyPath " + t.index + " on object store " + r.name + " is not indexed");
        return o;
      }
      function fs(t, r, o) {
        var u = qr(t, r.schema);
        return r.openCursor({ trans: o, values: !t.keysOnly, reverse: t.dir === "prev", unique: !!t.unique, query: { index: u, range: t.range } });
      }
      function Wr(t, r, o, u) {
        var l = t.replayFilter ? wn(t.filter, t.replayFilter()) : t.filter;
        if (t.or) {
          var f = {}, h = function(y, v, w) {
            var x, _;
            l && !l(v, w, function(A) {
              return v.stop(A);
            }, function(A) {
              return v.fail(A);
            }) || ((_ = "" + (x = v.primaryKey)) == "[object ArrayBuffer]" && (_ = "" + new Uint8Array(x)), C(f, _) || (f[_] = !0, r(y, v, w)));
          };
          return Promise.all([t.or._iterate(h, o), ds(fs(t, u, o), t.algorithm, h, !t.keysOnly && t.valueMapper)]);
        }
        return ds(fs(t, u, o), wn(t.algorithm, l), r, !t.keysOnly && t.valueMapper);
      }
      function ds(t, r, o, u) {
        var l = ke(u ? function(f, h, y) {
          return o(u(f), h, y);
        } : o);
        return t.then(function(f) {
          if (f) return f.start(function() {
            var h = function() {
              return f.continue();
            };
            r && !r(f, function(y) {
              return h = y;
            }, function(y) {
              f.stop(y), h = g;
            }, function(y) {
              f.fail(y), h = g;
            }) || l(f.value, f, function(y) {
              return h = y;
            }), h();
          });
        });
      }
      var ar = (ps.prototype.execute = function(t) {
        var r = this["@@propmod"];
        if (r.add !== void 0) {
          var o = r.add;
          if (p(o)) return a(a([], p(t) ? t : [], !0), o).sort();
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
          if (p(u)) return p(t) ? t.filter(function(l) {
            return !u.includes(l);
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
      }, ps);
      function ps(t) {
        this["@@propmod"] = t;
      }
      var ku = (Oe.prototype._read = function(t, r) {
        var o = this._ctx;
        return o.error ? o.table._trans(null, Le.bind(null, o.error)) : o.table._trans("readonly", t).then(r);
      }, Oe.prototype._write = function(t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, Le.bind(null, r.error)) : r.table._trans("readwrite", t, "locked");
      }, Oe.prototype._addAlgorithm = function(t) {
        var r = this._ctx;
        r.algorithm = wn(r.algorithm, t);
      }, Oe.prototype._iterate = function(t, r) {
        return Wr(this._ctx, t, r, this._ctx.table.core);
      }, Oe.prototype.clone = function(t) {
        var r = Object.create(this.constructor.prototype), o = Object.create(this._ctx);
        return t && m(o, t), r._ctx = o, r;
      }, Oe.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Oe.prototype.each = function(t) {
        var r = this._ctx;
        return this._read(function(o) {
          return Wr(r, t, o, r.table.core);
        });
      }, Oe.prototype.count = function(t) {
        var r = this;
        return this._read(function(o) {
          var u = r._ctx, l = u.table.core;
          if (Ln(u, !0)) return l.count({ trans: o, query: { index: qr(u, l.schema), range: u.range } }).then(function(h) {
            return Math.min(h, u.limit);
          });
          var f = 0;
          return Wr(u, function() {
            return ++f, !1;
          }, o, l).then(function() {
            return f;
          });
        }).then(t);
      }, Oe.prototype.sortBy = function(t, r) {
        var o = t.split(".").reverse(), u = o[0], l = o.length - 1;
        function f(v, w) {
          return w ? f(v[o[w]], w - 1) : v[u];
        }
        var h = this._ctx.dir === "next" ? 1 : -1;
        function y(v, w) {
          return ye(f(v, l), f(w, l)) * h;
        }
        return this.toArray(function(v) {
          return v.sort(y);
        }).then(r);
      }, Oe.prototype.toArray = function(t) {
        var r = this;
        return this._read(function(o) {
          var u = r._ctx;
          if (u.dir === "next" && Ln(u, !0) && 0 < u.limit) {
            var l = u.valueMapper, f = qr(u, u.table.core.schema);
            return u.table.core.query({ trans: o, limit: u.limit, values: !0, query: { index: f, range: u.range } }).then(function(y) {
              return y = y.result, l ? y.map(l) : y;
            });
          }
          var h = [];
          return Wr(u, function(y) {
            return h.push(y);
          }, o, u.table.core).then(function() {
            return h;
          });
        }, t);
      }, Oe.prototype.offset = function(t) {
        var r = this._ctx;
        return t <= 0 || (r.offset += t, Ln(r) ? Gi(r, function() {
          var o = t;
          return function(u, l) {
            return o === 0 || (o === 1 ? --o : l(function() {
              u.advance(o), o = 0;
            }), !1);
          };
        }) : Gi(r, function() {
          var o = t;
          return function() {
            return --o < 0;
          };
        })), this;
      }, Oe.prototype.limit = function(t) {
        return this._ctx.limit = Math.min(this._ctx.limit, t), Gi(this._ctx, function() {
          var r = t;
          return function(o, u, l) {
            return --r <= 0 && u(l), 0 <= r;
          };
        }, !0), this;
      }, Oe.prototype.until = function(t, r) {
        return Vi(this._ctx, function(o, u, l) {
          return !t(o.value) || (u(l), r);
        }), this;
      }, Oe.prototype.first = function(t) {
        return this.limit(1).toArray(function(r) {
          return r[0];
        }).then(t);
      }, Oe.prototype.last = function(t) {
        return this.reverse().first(t);
      }, Oe.prototype.filter = function(t) {
        var r;
        return Vi(this._ctx, function(o) {
          return t(o.value);
        }), (r = this._ctx).isMatch = wn(r.isMatch, t), this;
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
        return r.keysOnly = !r.isMatch, this.each(function(o, u) {
          t(u.key, u);
        });
      }, Oe.prototype.eachUniqueKey = function(t) {
        return this._ctx.unique = "unique", this.eachKey(t);
      }, Oe.prototype.eachPrimaryKey = function(t) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(o, u) {
          t(u.primaryKey, u);
        });
      }, Oe.prototype.keys = function(t) {
        var r = this._ctx;
        r.keysOnly = !r.isMatch;
        var o = [];
        return this.each(function(u, l) {
          o.push(l.key);
        }).then(function() {
          return o;
        }).then(t);
      }, Oe.prototype.primaryKeys = function(t) {
        var r = this._ctx;
        if (r.dir === "next" && Ln(r, !0) && 0 < r.limit) return this._read(function(u) {
          var l = qr(r, r.table.core.schema);
          return r.table.core.query({ trans: u, values: !1, limit: r.limit, query: { index: l, range: r.range } });
        }).then(function(u) {
          return u.result;
        }).then(t);
        r.keysOnly = !r.isMatch;
        var o = [];
        return this.each(function(u, l) {
          o.push(l.primaryKey);
        }).then(function() {
          return o;
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
        return Vi(this._ctx, function(l) {
          var u = l.primaryKey.toString(), l = C(r, u);
          return r[u] = !0, !l;
        }), this;
      }, Oe.prototype.modify = function(t) {
        var r = this, o = this._ctx;
        return this._write(function(u) {
          var l, f, h;
          h = typeof t == "function" ? t : (l = d(t), f = l.length, function(N) {
            for (var P = !1, M = 0; M < f; ++M) {
              var j = l[M], V = t[j], Y = Ke(N, j);
              V instanceof ar ? (Ne(N, j, V.execute(Y)), P = !0) : Y !== V && (Ne(N, j, V), P = !0);
            }
            return P;
          });
          var y = o.table.core, _ = y.schema.primaryKey, v = _.outbound, w = _.extractKey, x = 200, _ = r.db._options.modifyChunkSize;
          _ && (x = typeof _ == "object" ? _[y.name] || _["*"] || 200 : _);
          function A(N, j) {
            var M = j.failures, j = j.numFailures;
            O += N - j;
            for (var V = 0, Y = d(M); V < Y.length; V++) {
              var G = Y[V];
              b.push(M[G]);
            }
          }
          var b = [], O = 0, R = [], T = t === hs;
          return r.clone().primaryKeys().then(function(N) {
            function P(j) {
              var V = Math.min(x, N.length - j), Y = N.slice(j, j + V);
              return (T ? Promise.resolve([]) : y.getMany({ trans: u, keys: Y, cache: "immutable" })).then(function(G) {
                var W = [], Z = [], z = v ? [] : null, te = T ? Y : [];
                if (!T) for (var me = 0; me < V; ++me) {
                  var be = G[me], de = { value: _t(be), primKey: N[j + me] };
                  h.call(de, de.value, de) !== !1 && (de.value == null ? te.push(N[j + me]) : v || ye(w(be), w(de.value)) === 0 ? (Z.push(de.value), v && z.push(N[j + me])) : (te.push(N[j + me]), W.push(de.value)));
                }
                return Promise.resolve(0 < W.length && y.mutate({ trans: u, type: "add", values: W }).then(function(Be) {
                  for (var ce in Be.failures) te.splice(parseInt(ce), 1);
                  A(W.length, Be);
                })).then(function() {
                  return (0 < Z.length || M && typeof t == "object") && y.mutate({ trans: u, type: "put", keys: z, values: Z, criteria: M, changeSpec: typeof t != "function" && t, isAdditionalChunk: 0 < j }).then(function(Be) {
                    return A(Z.length, Be);
                  });
                }).then(function() {
                  return (0 < te.length || M && T) && y.mutate({ trans: u, type: "delete", keys: te, criteria: M, isAdditionalChunk: 0 < j }).then(function(Be) {
                    return Gr(o.table, te, Be);
                  }).then(function(Be) {
                    return A(te.length, Be);
                  });
                }).then(function() {
                  return N.length > j + V && P(j + x);
                });
              });
            }
            var M = Ln(o) && o.limit === 1 / 0 && (typeof t != "function" || T) && { index: o.index, range: o.range };
            return P(0).then(function() {
              if (0 < b.length) throw new Dn("Error modifying one or more objects", b, O, R);
              return N.length;
            });
          });
        });
      }, Oe.prototype.delete = function() {
        var t = this._ctx, r = t.range;
        return !Ln(t) || t.table.schema.yProps || !t.isPrimKey && r.type !== 3 ? this.modify(hs) : this._write(function(o) {
          var u = t.table.core.schema.primaryKey, l = r;
          return t.table.core.count({ trans: o, query: { index: u, range: l } }).then(function(f) {
            return t.table.core.mutate({ trans: o, type: "deleteRange", range: l }).then(function(v) {
              var y = v.failures, v = v.numFailures;
              if (v) throw new Dn("Could not delete some values", Object.keys(y).map(function(w) {
                return y[w];
              }), f - v);
              return f - v;
            });
          });
        });
      }, Oe);
      function Oe() {
      }
      var hs = function(t, r) {
        return r.value = null;
      };
      function Mu(t, r) {
        return t < r ? -1 : t === r ? 0 : 1;
      }
      function ju(t, r) {
        return r < t ? -1 : t === r ? 0 : 1;
      }
      function dt(t, r, o) {
        return t = t instanceof gs ? new t.Collection(t) : t, t._ctx.error = new (o || TypeError)(r), t;
      }
      function Un(t) {
        return new t.Collection(t, function() {
          return ms("");
        }).limit(0);
      }
      function $r(t, r, o, u) {
        var l, f, h, y, v, w, x, _ = o.length;
        if (!o.every(function(O) {
          return typeof O == "string";
        })) return dt(t, os);
        function A(O) {
          l = O === "next" ? function(T) {
            return T.toUpperCase();
          } : function(T) {
            return T.toLowerCase();
          }, f = O === "next" ? function(T) {
            return T.toLowerCase();
          } : function(T) {
            return T.toUpperCase();
          }, h = O === "next" ? Mu : ju;
          var R = o.map(function(T) {
            return { lower: f(T), upper: l(T) };
          }).sort(function(T, N) {
            return h(T.lower, N.lower);
          });
          y = R.map(function(T) {
            return T.upper;
          }), v = R.map(function(T) {
            return T.lower;
          }), x = (w = O) === "next" ? "" : u;
        }
        A("next"), t = new t.Collection(t, function() {
          return an(y[0], v[_ - 1] + u);
        }), t._ondirectionchange = function(O) {
          A(O);
        };
        var b = 0;
        return t._addAlgorithm(function(O, R, T) {
          var N = O.key;
          if (typeof N != "string") return !1;
          var P = f(N);
          if (r(P, v, b)) return !0;
          for (var M = null, j = b; j < _; ++j) {
            var V = (function(Y, G, W, Z, z, te) {
              for (var me = Math.min(Y.length, Z.length), be = -1, de = 0; de < me; ++de) {
                var Be = G[de];
                if (Be !== Z[de]) return z(Y[de], W[de]) < 0 ? Y.substr(0, de) + W[de] + W.substr(de + 1) : z(Y[de], Z[de]) < 0 ? Y.substr(0, de) + Z[de] + W.substr(de + 1) : 0 <= be ? Y.substr(0, be) + G[be] + W.substr(be + 1) : null;
                z(Y[de], Be) < 0 && (be = de);
              }
              return me < Z.length && te === "next" ? Y + W.substr(Y.length) : me < Y.length && te === "prev" ? Y.substr(0, W.length) : be < 0 ? null : Y.substr(0, be) + Z[be] + W.substr(be + 1);
            })(N, P, y[j], v[j], h, w);
            V === null && M === null ? b = j + 1 : (M === null || 0 < h(M, V)) && (M = V);
          }
          return R(M !== null ? function() {
            O.continue(M + x);
          } : T), !1;
        }), t;
      }
      function an(t, r, o, u) {
        return { type: 2, lower: t, upper: r, lowerOpen: o, upperOpen: u };
      }
      function ms(t) {
        return { type: 1, lower: t, upper: t };
      }
      var gs = (Object.defineProperty(Ye.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Ye.prototype.between = function(t, r, o, u) {
        o = o !== !1, u = u === !0;
        try {
          return 0 < this._cmp(t, r) || this._cmp(t, r) === 0 && (o || u) && (!o || !u) ? Un(this) : new this.Collection(this, function() {
            return an(t, r, !o, !u);
          });
        } catch {
          return dt(this, Vt);
        }
      }, Ye.prototype.equals = function(t) {
        return t == null ? dt(this, Vt) : new this.Collection(this, function() {
          return ms(t);
        });
      }, Ye.prototype.above = function(t) {
        return t == null ? dt(this, Vt) : new this.Collection(this, function() {
          return an(t, void 0, !0);
        });
      }, Ye.prototype.aboveOrEqual = function(t) {
        return t == null ? dt(this, Vt) : new this.Collection(this, function() {
          return an(t, void 0, !1);
        });
      }, Ye.prototype.below = function(t) {
        return t == null ? dt(this, Vt) : new this.Collection(this, function() {
          return an(void 0, t, !1, !0);
        });
      }, Ye.prototype.belowOrEqual = function(t) {
        return t == null ? dt(this, Vt) : new this.Collection(this, function() {
          return an(void 0, t);
        });
      }, Ye.prototype.startsWith = function(t) {
        return typeof t != "string" ? dt(this, os) : this.between(t, t + bn, !0, !0);
      }, Ye.prototype.startsWithIgnoreCase = function(t) {
        return t === "" ? this.startsWith(t) : $r(this, function(r, o) {
          return r.indexOf(o[0]) === 0;
        }, [t], bn);
      }, Ye.prototype.equalsIgnoreCase = function(t) {
        return $r(this, function(r, o) {
          return r === o[0];
        }, [t], "");
      }, Ye.prototype.anyOfIgnoreCase = function() {
        var t = ct.apply(lt, arguments);
        return t.length === 0 ? Un(this) : $r(this, function(r, o) {
          return o.indexOf(r) !== -1;
        }, t, "");
      }, Ye.prototype.startsWithAnyOfIgnoreCase = function() {
        var t = ct.apply(lt, arguments);
        return t.length === 0 ? Un(this) : $r(this, function(r, o) {
          return o.some(function(u) {
            return r.indexOf(u) === 0;
          });
        }, t, bn);
      }, Ye.prototype.anyOf = function() {
        var t = this, r = ct.apply(lt, arguments), o = this._cmp;
        try {
          r.sort(o);
        } catch {
          return dt(this, Vt);
        }
        if (r.length === 0) return Un(this);
        var u = new this.Collection(this, function() {
          return an(r[0], r[r.length - 1]);
        });
        u._ondirectionchange = function(f) {
          o = f === "next" ? t._ascending : t._descending, r.sort(o);
        };
        var l = 0;
        return u._addAlgorithm(function(f, h, y) {
          for (var v = f.key; 0 < o(v, r[l]); ) if (++l === r.length) return h(y), !1;
          return o(v, r[l]) === 0 || (h(function() {
            f.continue(r[l]);
          }), !1);
        }), u;
      }, Ye.prototype.notEqual = function(t) {
        return this.inAnyRange([[-1 / 0, t], [t, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Ye.prototype.noneOf = function() {
        var t = ct.apply(lt, arguments);
        if (t.length === 0) return new this.Collection(this);
        try {
          t.sort(this._ascending);
        } catch {
          return dt(this, Vt);
        }
        var r = t.reduce(function(o, u) {
          return o ? o.concat([[o[o.length - 1][1], u]]) : [[-1 / 0, u]];
        }, null);
        return r.push([t[t.length - 1], this.db._maxKey]), this.inAnyRange(r, { includeLowers: !1, includeUppers: !1 });
      }, Ye.prototype.inAnyRange = function(N, r) {
        var o = this, u = this._cmp, l = this._ascending, f = this._descending, h = this._min, y = this._max;
        if (N.length === 0) return Un(this);
        if (!N.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && l(P[0], P[1]) <= 0;
        })) return dt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", oe.InvalidArgument);
        var v = !r || r.includeLowers !== !1, w = r && r.includeUppers === !0, x, _ = l;
        function A(P, M) {
          return _(P[0], M[0]);
        }
        try {
          (x = N.reduce(function(P, M) {
            for (var j = 0, V = P.length; j < V; ++j) {
              var Y = P[j];
              if (u(M[0], Y[1]) < 0 && 0 < u(M[1], Y[0])) {
                Y[0] = h(Y[0], M[0]), Y[1] = y(Y[1], M[1]);
                break;
              }
            }
            return j === V && P.push(M), P;
          }, [])).sort(A);
        } catch {
          return dt(this, Vt);
        }
        var b = 0, O = w ? function(P) {
          return 0 < l(P, x[b][1]);
        } : function(P) {
          return 0 <= l(P, x[b][1]);
        }, R = v ? function(P) {
          return 0 < f(P, x[b][0]);
        } : function(P) {
          return 0 <= f(P, x[b][0]);
        }, T = O, N = new this.Collection(this, function() {
          return an(x[0][0], x[x.length - 1][1], !v, !w);
        });
        return N._ondirectionchange = function(P) {
          _ = P === "next" ? (T = O, l) : (T = R, f), x.sort(A);
        }, N._addAlgorithm(function(P, M, j) {
          for (var V, Y = P.key; T(Y); ) if (++b === x.length) return M(j), !1;
          return !O(V = Y) && !R(V) || (o._cmp(Y, x[b][1]) === 0 || o._cmp(Y, x[b][0]) === 0 || M(function() {
            _ === l ? P.continue(x[b][0]) : P.continue(x[b][1]);
          }), !1);
        }), N;
      }, Ye.prototype.startsWithAnyOf = function() {
        var t = ct.apply(lt, arguments);
        return t.every(function(r) {
          return typeof r == "string";
        }) ? t.length === 0 ? Un(this) : this.inAnyRange(t.map(function(r) {
          return [r, r + bn];
        })) : dt(this, "startsWithAnyOf() only works with strings");
      }, Ye);
      function Ye() {
      }
      function Dt(t) {
        return ke(function(r) {
          return ur(r), t(r.target.error), !1;
        });
      }
      function ur(t) {
        t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault();
      }
      var lr = "storagemutated", qi = "x-storagemutated-1", un = or(null, lr), Bu = (kt.prototype._lock = function() {
        return ie(!ne.global), ++this._reculock, this._reculock !== 1 || ne.global || (ne.lockOwnerFor = this), this;
      }, kt.prototype._unlock = function() {
        if (ie(!ne.global), --this._reculock == 0) for (ne.global || (ne.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var t = this._blockedFuncs.shift();
          try {
            vn(t[1], t[0]);
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
        if (ie(!this.idbtrans), !t && !o) switch (u && u.name) {
          case "DatabaseClosedError":
            throw new oe.DatabaseClosed(u);
          case "MissingAPIError":
            throw new oe.MissingAPI(u.message, u);
          default:
            throw new oe.OpenFailed(u);
        }
        if (!this.active) throw new oe.TransactionInactive();
        return ie(this._completion._state === null), (t = this.idbtrans = t || (this.db.core || o).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = ke(function(l) {
          ur(l), r._reject(t.error);
        }), t.onabort = ke(function(l) {
          ur(l), r.active && r._reject(new oe.Abort(t.error)), r.active = !1, r.on("abort").fire(l);
        }), t.oncomplete = ke(function() {
          r.active = !1, r._resolve(), "mutatedParts" in t && un.storagemutated.fire(t.mutatedParts);
        }), this;
      }, kt.prototype._promise = function(t, r, o) {
        var u = this;
        if (t === "readwrite" && this.mode !== "readwrite") return Le(new oe.ReadOnly("Transaction is readonly"));
        if (!this.active) return Le(new oe.TransactionInactive());
        if (this._locked()) return new ee(function(f, h) {
          u._blockedFuncs.push([function() {
            u._promise(t, r, o).then(f, h);
          }, ne]);
        });
        if (o) return rn(function() {
          var f = new ee(function(h, y) {
            u._lock();
            var v = r(h, y, u);
            v && v.then && v.then(h, y);
          });
          return f.finally(function() {
            return u._unlock();
          }), f._lib = !0, f;
        });
        var l = new ee(function(f, h) {
          var y = r(f, h, u);
          y && y.then && y.then(f, h);
        });
        return l._lib = !0, l;
      }, kt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, kt.prototype.waitFor = function(t) {
        var r, o = this._root(), u = ee.resolve(t);
        o._waitingFor ? o._waitingFor = o._waitingFor.then(function() {
          return u;
        }) : (o._waitingFor = u, o._waitingQueue = [], r = o.idbtrans.objectStore(o.storeNames[0]), (function f() {
          for (++o._spinCount; o._waitingQueue.length; ) o._waitingQueue.shift()();
          o._waitingFor && (r.get(-1 / 0).onsuccess = f);
        })());
        var l = o._waitingFor;
        return new ee(function(f, h) {
          u.then(function(y) {
            return o._waitingQueue.push(ke(f.bind(null, y)));
          }, function(y) {
            return o._waitingQueue.push(ke(h.bind(null, y)));
          }).finally(function() {
            o._waitingFor === l && (o._waitingFor = null);
          });
        });
      }, kt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new oe.Abort()));
      }, kt.prototype.table = function(t) {
        var r = this._memoizedTables || (this._memoizedTables = {});
        if (C(r, t)) return r[t];
        var o = this.schema[t];
        if (!o) throw new oe.NotFound("Table " + t + " not part of transaction");
        return o = new this.db.Table(t, o, this), o.core = this.db.core.table(t), r[t] = o;
      }, kt);
      function kt() {
      }
      function Wi(t, r, o, u, l, f, h, y) {
        return { name: t, keyPath: r, unique: o, multi: u, auto: l, compound: f, src: (o && !h ? "&" : "") + (u ? "*" : "") + (l ? "++" : "") + ys(r), type: y };
      }
      function ys(t) {
        return typeof t == "string" ? t : t ? "[" + [].join.call(t, "+") + "]" : "";
      }
      function $i(t, r, o) {
        return { name: t, primKey: r, indexes: o, mappedClass: null, idxByName: (u = function(l) {
          return [l.name, l];
        }, o.reduce(function(l, f, h) {
          return h = u(f, h), h && (l[h[0]] = h[1]), l;
        }, {})) };
        var u;
      }
      var cr = function(t) {
        try {
          return t.only([[]]), cr = function() {
            return [[]];
          }, [[]];
        } catch {
          return cr = function() {
            return bn;
          }, bn;
        }
      };
      function Yi(t) {
        return t == null ? function() {
        } : typeof t == "string" ? (r = t).split(".").length === 1 ? function(o) {
          return o[r];
        } : function(o) {
          return Ke(o, r);
        } : function(o) {
          return Ke(o, t);
        };
        var r;
      }
      function _s(t) {
        return [].slice.call(t);
      }
      var Ku = 0;
      function fr(t) {
        return t == null ? ":id" : typeof t == "string" ? t : "[".concat(t.join("+"), "]");
      }
      function Lu(t, r, v) {
        function u(T) {
          if (T.type === 3) return null;
          if (T.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var b = T.lower, O = T.upper, R = T.lowerOpen, T = T.upperOpen;
          return b === void 0 ? O === void 0 ? null : r.upperBound(O, !!T) : O === void 0 ? r.lowerBound(b, !!R) : r.bound(b, O, !!R, !!T);
        }
        function l(A) {
          var b, O = A.name;
          return { name: O, schema: A, mutate: function(R) {
            var T = R.trans, N = R.type, P = R.keys, M = R.values, j = R.range;
            return new Promise(function(V, Y) {
              V = ke(V);
              var G = T.objectStore(O), W = G.keyPath == null, Z = N === "put" || N === "add";
              if (!Z && N !== "delete" && N !== "deleteRange") throw new Error("Invalid operation type: " + N);
              var z, te = (P || M || { length: 1 }).length;
              if (P && M && P.length !== M.length) throw new Error("Given keys array must have same length as given values array.");
              if (te === 0) return V({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function me(st) {
                ++Be, ur(st);
              }
              var be = [], de = [], Be = 0;
              if (N === "deleteRange") {
                if (j.type === 4) return V({ numFailures: Be, failures: de, results: [], lastResult: void 0 });
                j.type === 3 ? be.push(z = G.clear()) : be.push(z = G.delete(u(j)));
              } else {
                var W = Z ? W ? [M, P] : [M, null] : [P, null], ce = W[0], et = W[1];
                if (Z) for (var tt = 0; tt < te; ++tt) be.push(z = et && et[tt] !== void 0 ? G[N](ce[tt], et[tt]) : G[N](ce[tt])), z.onerror = me;
                else for (tt = 0; tt < te; ++tt) be.push(z = G[N](ce[tt])), z.onerror = me;
              }
              function oi(st) {
                st = st.target.result, be.forEach(function(xn, po) {
                  return xn.error != null && (de[po] = xn.error);
                }), V({ numFailures: Be, failures: de, results: N === "delete" ? P : be.map(function(xn) {
                  return xn.result;
                }), lastResult: st });
              }
              z.onerror = function(st) {
                me(st), oi(st);
              }, z.onsuccess = oi;
            });
          }, getMany: function(R) {
            var T = R.trans, N = R.keys;
            return new Promise(function(P, M) {
              P = ke(P);
              for (var j, V = T.objectStore(O), Y = N.length, G = new Array(Y), W = 0, Z = 0, z = function(be) {
                be = be.target, G[be._pos] = be.result, ++Z === W && P(G);
              }, te = Dt(M), me = 0; me < Y; ++me) N[me] != null && ((j = V.get(N[me]))._pos = me, j.onsuccess = z, j.onerror = te, ++W);
              W === 0 && P(G);
            });
          }, get: function(R) {
            var T = R.trans, N = R.key;
            return new Promise(function(P, M) {
              P = ke(P);
              var j = T.objectStore(O).get(N);
              j.onsuccess = function(V) {
                return P(V.target.result);
              }, j.onerror = Dt(M);
            });
          }, query: (b = w, function(R) {
            return new Promise(function(T, N) {
              T = ke(T);
              var P, M, j, W = R.trans, V = R.values, Y = R.limit, z = R.query, G = Y === 1 / 0 ? void 0 : Y, Z = z.index, z = z.range, W = W.objectStore(O), Z = Z.isPrimaryKey ? W : W.index(Z.name), z = u(z);
              if (Y === 0) return T({ result: [] });
              b ? ((G = V ? Z.getAll(z, G) : Z.getAllKeys(z, G)).onsuccess = function(te) {
                return T({ result: te.target.result });
              }, G.onerror = Dt(N)) : (P = 0, M = !V && "openKeyCursor" in Z ? Z.openKeyCursor(z) : Z.openCursor(z), j = [], M.onsuccess = function(te) {
                var me = M.result;
                return me ? (j.push(V ? me.value : me.primaryKey), ++P === Y ? T({ result: j }) : void me.continue()) : T({ result: j });
              }, M.onerror = Dt(N));
            });
          }), openCursor: function(R) {
            var T = R.trans, N = R.values, P = R.query, M = R.reverse, j = R.unique;
            return new Promise(function(V, Y) {
              V = ke(V);
              var Z = P.index, G = P.range, W = T.objectStore(O), W = Z.isPrimaryKey ? W : W.index(Z.name), Z = M ? j ? "prevunique" : "prev" : j ? "nextunique" : "next", z = !N && "openKeyCursor" in W ? W.openKeyCursor(u(G), Z) : W.openCursor(u(G), Z);
              z.onerror = Dt(Y), z.onsuccess = ke(function(te) {
                var me, be, de, Be, ce = z.result;
                ce ? (ce.___id = ++Ku, ce.done = !1, me = ce.continue.bind(ce), be = (be = ce.continuePrimaryKey) && be.bind(ce), de = ce.advance.bind(ce), Be = function() {
                  throw new Error("Cursor not stopped");
                }, ce.trans = T, ce.stop = ce.continue = ce.continuePrimaryKey = ce.advance = function() {
                  throw new Error("Cursor not started");
                }, ce.fail = ke(Y), ce.next = function() {
                  var et = this, tt = 1;
                  return this.start(function() {
                    return tt-- ? et.continue() : et.stop();
                  }).then(function() {
                    return et;
                  });
                }, ce.start = function(et) {
                  function tt() {
                    if (z.result) try {
                      et();
                    } catch (st) {
                      ce.fail(st);
                    }
                    else ce.done = !0, ce.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ce.stop();
                  }
                  var oi = new Promise(function(st, xn) {
                    st = ke(st), z.onerror = Dt(xn), ce.fail = xn, ce.stop = function(po) {
                      ce.stop = ce.continue = ce.continuePrimaryKey = ce.advance = Be, st(po);
                    };
                  });
                  return z.onsuccess = ke(function(st) {
                    z.onsuccess = tt, tt();
                  }), ce.continue = me, ce.continuePrimaryKey = be, ce.advance = de, tt(), oi;
                }, V(ce)) : V(null);
              }, Y);
            });
          }, count: function(R) {
            var T = R.query, N = R.trans, P = T.index, M = T.range;
            return new Promise(function(j, V) {
              var Y = N.objectStore(O), G = P.isPrimaryKey ? Y : Y.index(P.name), Y = u(M), G = Y ? G.count(Y) : G.count();
              G.onsuccess = ke(function(W) {
                return j(W.target.result);
              }), G.onerror = Dt(V);
            });
          } };
        }
        var f, h, y, x = (h = v, y = _s((f = t).objectStoreNames), { schema: { name: f.name, tables: y.map(function(A) {
          return h.objectStore(A);
        }).map(function(A) {
          var b = A.keyPath, T = A.autoIncrement, O = p(b), R = {}, T = { name: A.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: b == null, compound: O, keyPath: b, autoIncrement: T, unique: !0, extractKey: Yi(b) }, indexes: _s(A.indexNames).map(function(N) {
            return A.index(N);
          }).map(function(j) {
            var P = j.name, M = j.unique, V = j.multiEntry, j = j.keyPath, V = { name: P, compound: p(j), keyPath: j, unique: M, multiEntry: V, extractKey: Yi(j) };
            return R[fr(j)] = V;
          }), getIndexByKeyPath: function(N) {
            return R[fr(N)];
          } };
          return R[":id"] = T.primaryKey, b != null && (R[fr(b)] = T.primaryKey), T;
        }) }, hasGetAll: 0 < y.length && "getAll" in h.objectStore(y[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), v = x.schema, w = x.hasGetAll, x = v.tables.map(l), _ = {};
        return x.forEach(function(A) {
          return _[A.name] = A;
        }), { stack: "dbcore", transaction: t.transaction.bind(t), table: function(A) {
          if (!_[A]) throw new Error("Table '".concat(A, "' not found"));
          return _[A];
        }, MIN_KEY: -1 / 0, MAX_KEY: cr(r), schema: v };
      }
      function Uu(t, r, o, u) {
        var l = o.IDBKeyRange;
        return o.indexedDB, { dbcore: (u = Lu(r, l, u), t.dbcore.reduce(function(f, h) {
          return h = h.create, s(s({}, f), h(f));
        }, u)) };
      }
      function Yr(t, u) {
        var o = u.db, u = Uu(t._middlewares, o, t._deps, u);
        t.core = u.dbcore, t.tables.forEach(function(l) {
          var f = l.name;
          t.core.schema.tables.some(function(h) {
            return h.name === f;
          }) && (l.core = t.core.table(f), t[f] instanceof t.Table && (t[f].core = l.core));
        });
      }
      function Xr(t, r, o, u) {
        o.forEach(function(l) {
          var f = u[l];
          r.forEach(function(h) {
            var y = (function v(w, x) {
              return Ae(w, x) || (w = I(w)) && v(w, x);
            })(h, l);
            (!y || "value" in y && y.value === void 0) && (h === t.Transaction.prototype || h instanceof t.Transaction ? D(h, l, { get: function() {
              return this.table(l);
            }, set: function(v) {
              k(this, l, { value: v, writable: !0, configurable: !0, enumerable: !0 });
            } }) : h[l] = new t.Table(l, f));
          });
        });
      }
      function Xi(t, r) {
        r.forEach(function(o) {
          for (var u in o) o[u] instanceof t.Table && delete o[u];
        });
      }
      function Hu(t, r) {
        return t._cfg.version - r._cfg.version;
      }
      function Fu(t, r, o, u) {
        var l = t._dbSchema;
        o.objectStoreNames.contains("$meta") && !l.$meta && (l.$meta = $i("$meta", bs("")[0], []), t._storeNames.push("$meta"));
        var f = t._createTransaction("readwrite", t._storeNames, l);
        f.create(o), f._completion.catch(u);
        var h = f._reject.bind(f), y = ne.transless || ne;
        rn(function() {
          return ne.trans = f, ne.transless = y, r !== 0 ? (Yr(t, o), w = r, ((v = f).storeNames.includes("$meta") ? v.table("$meta").get("version").then(function(x) {
            return x ?? w;
          }) : ee.resolve(w)).then(function(x) {
            return A = x, b = f, O = o, R = [], x = (_ = t)._versions, T = _._dbSchema = Jr(0, _.idbdb, O), (x = x.filter(function(N) {
              return N._cfg.version >= A;
            })).length !== 0 ? (x.forEach(function(N) {
              R.push(function() {
                var P = T, M = N._cfg.dbschema;
                Qr(_, P, O), Qr(_, M, O), T = _._dbSchema = M;
                var j = zi(P, M);
                j.add.forEach(function(Z) {
                  Ji(O, Z[0], Z[1].primKey, Z[1].indexes);
                }), j.change.forEach(function(Z) {
                  if (Z.recreate) throw new oe.Upgrade("Not yet support for changing primary key");
                  var z = O.objectStore(Z.name);
                  Z.add.forEach(function(te) {
                    return zr(z, te);
                  }), Z.change.forEach(function(te) {
                    z.deleteIndex(te.name), zr(z, te);
                  }), Z.del.forEach(function(te) {
                    return z.deleteIndex(te);
                  });
                });
                var V = N._cfg.contentUpgrade;
                if (V && N._cfg.version > A) {
                  Yr(_, O), b._memoizedTables = {};
                  var Y = yt(M);
                  j.del.forEach(function(Z) {
                    Y[Z] = P[Z];
                  }), Xi(_, [_.Transaction.prototype]), Xr(_, [_.Transaction.prototype], d(Y), Y), b.schema = Y;
                  var G, W = Ot(V);
                  return W && Bn(), j = ee.follow(function() {
                    var Z;
                    (G = V(b)) && W && (Z = on.bind(null, null), G.then(Z, Z));
                  }), G && typeof G.then == "function" ? ee.resolve(G) : j.then(function() {
                    return G;
                  });
                }
              }), R.push(function(P) {
                var M, j, V = N._cfg.dbschema;
                M = V, j = P, [].slice.call(j.db.objectStoreNames).forEach(function(Y) {
                  return M[Y] == null && j.db.deleteObjectStore(Y);
                }), Xi(_, [_.Transaction.prototype]), Xr(_, [_.Transaction.prototype], _._storeNames, _._dbSchema), b.schema = _._dbSchema;
              }), R.push(function(P) {
                _.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(_.idbdb.version / 10) === N._cfg.version ? (_.idbdb.deleteObjectStore("$meta"), delete _._dbSchema.$meta, _._storeNames = _._storeNames.filter(function(M) {
                  return M !== "$meta";
                })) : P.objectStore("$meta").put(N._cfg.version, "version"));
              });
            }), (function N() {
              return R.length ? ee.resolve(R.shift()(b.idbtrans)).then(N) : ee.resolve();
            })().then(function() {
              vs(T, O);
            })) : ee.resolve();
            var _, A, b, O, R, T;
          }).catch(h)) : (d(l).forEach(function(x) {
            Ji(o, x, l[x].primKey, l[x].indexes);
          }), Yr(t, o), void ee.follow(function() {
            return t.on.populate.fire(f);
          }).catch(h));
          var v, w;
        });
      }
      function Vu(t, r) {
        vs(t._dbSchema, r), r.db.version % 10 != 0 || r.objectStoreNames.contains("$meta") || r.db.createObjectStore("$meta").add(Math.ceil(r.db.version / 10 - 1), "version");
        var o = Jr(0, t.idbdb, r);
        Qr(t, t._dbSchema, r);
        for (var u = 0, l = zi(o, t._dbSchema).change; u < l.length; u++) {
          var f = (function(h) {
            if (h.change.length || h.recreate) return console.warn("Unable to patch indexes of table ".concat(h.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var y = r.objectStore(h.name);
            h.add.forEach(function(v) {
              L && console.debug("Dexie upgrade patch: Creating missing index ".concat(h.name, ".").concat(v.src)), zr(y, v);
            });
          })(l[u]);
          if (typeof f == "object") return f.value;
        }
      }
      function zi(t, r) {
        var o, u = { del: [], add: [], change: [] };
        for (o in t) r[o] || u.del.push(o);
        for (o in r) {
          var l = t[o], f = r[o];
          if (l) {
            var h = { name: o, def: f, recreate: !1, del: [], add: [], change: [] };
            if ("" + (l.primKey.keyPath || "") != "" + (f.primKey.keyPath || "") || l.primKey.auto !== f.primKey.auto) h.recreate = !0, u.change.push(h);
            else {
              var y = l.idxByName, v = f.idxByName, w = void 0;
              for (w in y) v[w] || h.del.push(w);
              for (w in v) {
                var x = y[w], _ = v[w];
                x ? x.src !== _.src && h.change.push(_) : h.add.push(_);
              }
              (0 < h.del.length || 0 < h.add.length || 0 < h.change.length) && u.change.push(h);
            }
          } else u.add.push([o, f]);
        }
        return u;
      }
      function Ji(t, r, o, u) {
        var l = t.db.createObjectStore(r, o.keyPath ? { keyPath: o.keyPath, autoIncrement: o.auto } : { autoIncrement: o.auto });
        return u.forEach(function(f) {
          return zr(l, f);
        }), l;
      }
      function vs(t, r) {
        d(t).forEach(function(o) {
          r.db.objectStoreNames.contains(o) || (L && console.debug("Dexie: Creating missing table", o), Ji(r, o, t[o].primKey, t[o].indexes));
        });
      }
      function zr(t, r) {
        t.createIndex(r.name, r.keyPath, { unique: r.unique, multiEntry: r.multi });
      }
      function Jr(t, r, o) {
        var u = {};
        return ge(r.objectStoreNames, 0).forEach(function(l) {
          for (var f = o.objectStore(l), h = Wi(ys(w = f.keyPath), w || "", !0, !1, !!f.autoIncrement, w && typeof w != "string", !0), y = [], v = 0; v < f.indexNames.length; ++v) {
            var x = f.index(f.indexNames[v]), w = x.keyPath, x = Wi(x.name, w, !!x.unique, !!x.multiEntry, !1, w && typeof w != "string", !1);
            y.push(x);
          }
          u[l] = $i(l, h, y);
        }), u;
      }
      function Qr(t, r, o) {
        for (var u = o.db.objectStoreNames, l = 0; l < u.length; ++l) {
          var f = u[l], h = o.objectStore(f);
          t._hasGetAll = "getAll" in h;
          for (var y = 0; y < h.indexNames.length; ++y) {
            var v = h.indexNames[y], w = h.index(v).keyPath, x = typeof w == "string" ? w : "[" + ge(w).join("+") + "]";
            !r[f] || (w = r[f].idxByName[x]) && (w.name = v, delete r[f].idxByName[x], r[f].idxByName[v] = w);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && c.WorkerGlobalScope && c instanceof c.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (t._hasGetAll = !1);
      }
      function bs(t) {
        return t.split(",").map(function(r, o) {
          var f = r.split(":"), u = (l = f[1]) === null || l === void 0 ? void 0 : l.trim(), l = (r = f[0].trim()).replace(/([&*]|\+\+)/g, ""), f = /^\[/.test(l) ? l.match(/^\[(.*)\]$/)[1].split("+") : l;
          return Wi(l, f || null, /\&/.test(r), /\*/.test(r), /\+\+/.test(r), p(f), o === 0, u);
        });
      }
      var Gu = (Hn.prototype._createTableSchema = $i, Hn.prototype._parseIndexSyntax = bs, Hn.prototype._parseStoresSpec = function(t, r) {
        var o = this;
        d(t).forEach(function(u) {
          if (t[u] !== null) {
            var l = o._parseIndexSyntax(t[u]), f = l.shift();
            if (!f) throw new oe.Schema("Invalid schema for table " + u + ": " + t[u]);
            if (f.unique = !0, f.multi) throw new oe.Schema("Primary key cannot be multiEntry*");
            l.forEach(function(h) {
              if (h.auto) throw new oe.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!h.keyPath) throw new oe.Schema("Index must have a name and cannot be an empty string");
            }), l = o._createTableSchema(u, f, l), r[u] = l;
          }
        });
      }, Hn.prototype.stores = function(o) {
        var r = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? m(this._cfg.storesSource, o) : o;
        var o = r._versions, u = {}, l = {};
        return o.forEach(function(f) {
          m(u, f._cfg.storesSource), l = f._cfg.dbschema = {}, f._parseStoresSpec(u, l);
        }), r._dbSchema = l, Xi(r, [r._allTables, r, r.Transaction.prototype]), Xr(r, [r._allTables, r, r.Transaction.prototype, this._cfg.tables], d(l), l), r._storeNames = d(l), this;
      }, Hn.prototype.upgrade = function(t) {
        return this._cfg.contentUpgrade = $(this._cfg.contentUpgrade || g, t), this;
      }, Hn);
      function Hn() {
      }
      function Qi(t, r) {
        var o = t._dbNamesDB;
        return o || (o = t._dbNamesDB = new Gt(Fr, { addons: [], indexedDB: t, IDBKeyRange: r })).version(1).stores({ dbnames: "name" }), o.table("dbnames");
      }
      function Zi(t) {
        return t && typeof t.databases == "function";
      }
      function eo(t) {
        return rn(function() {
          return ne.letThrough = !0, t();
        });
      }
      function to(t) {
        return !("from" in t);
      }
      var Ze = function(t, r) {
        if (!this) {
          var o = new Ze();
          return t && "d" in t && m(o, t), o;
        }
        m(this, arguments.length ? { d: 1, from: t, to: 1 < arguments.length ? r : t } : { d: 0 });
      };
      function dr(t, r, o) {
        var u = ye(r, o);
        if (!isNaN(u)) {
          if (0 < u) throw RangeError();
          if (to(t)) return m(t, { from: r, to: o, d: 1 });
          var l = t.l, u = t.r;
          if (ye(o, t.from) < 0) return l ? dr(l, r, o) : t.l = { from: r, to: o, d: 1, l: null, r: null }, Es(t);
          if (0 < ye(r, t.to)) return u ? dr(u, r, o) : t.r = { from: r, to: o, d: 1, l: null, r: null }, Es(t);
          ye(r, t.from) < 0 && (t.from = r, t.l = null, t.d = u ? u.d + 1 : 1), 0 < ye(o, t.to) && (t.to = o, t.r = null, t.d = t.l ? t.l.d + 1 : 1), o = !t.r, l && !t.l && pr(t, l), u && o && pr(t, u);
        }
      }
      function pr(t, r) {
        to(r) || (function o(u, v) {
          var f = v.from, h = v.to, y = v.l, v = v.r;
          dr(u, f, h), y && o(u, y), v && o(u, v);
        })(t, r);
      }
      function ws(t, r) {
        var o = Zr(r), u = o.next();
        if (u.done) return !1;
        for (var l = u.value, f = Zr(t), h = f.next(l.from), y = h.value; !u.done && !h.done; ) {
          if (ye(y.from, l.to) <= 0 && 0 <= ye(y.to, l.from)) return !0;
          ye(l.from, y.from) < 0 ? l = (u = o.next(y.from)).value : y = (h = f.next(l.from)).value;
        }
        return !1;
      }
      function Zr(t) {
        var r = to(t) ? null : { s: 0, n: t };
        return { next: function(o) {
          for (var u = 0 < arguments.length; r; ) switch (r.s) {
            case 0:
              if (r.s = 1, u) for (; r.n.l && ye(o, r.n.from) < 0; ) r = { up: r, n: r.n.l, s: 1 };
              else for (; r.n.l; ) r = { up: r, n: r.n.l, s: 1 };
            case 1:
              if (r.s = 2, !u || ye(o, r.n.to) <= 0) return { value: r.n, done: !1 };
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
      function Es(t) {
        var r, o, u = (((r = t.r) === null || r === void 0 ? void 0 : r.d) || 0) - (((o = t.l) === null || o === void 0 ? void 0 : o.d) || 0), l = 1 < u ? "r" : u < -1 ? "l" : "";
        l && (r = l == "r" ? "l" : "r", o = s({}, t), u = t[l], t.from = u.from, t.to = u.to, t[l] = u[l], o[l] = u[r], (t[r] = o).d = Os(o)), t.d = Os(t);
      }
      function Os(o) {
        var r = o.r, o = o.l;
        return (r ? o ? Math.max(r.d, o.d) : r.d : o ? o.d : 0) + 1;
      }
      function ei(t, r) {
        return d(r).forEach(function(o) {
          t[o] ? pr(t[o], r[o]) : t[o] = (function u(l) {
            var f, h, y = {};
            for (f in l) C(l, f) && (h = l[f], y[f] = !h || typeof h != "object" || Zt.has(h.constructor) ? h : u(h));
            return y;
          })(r[o]);
        }), t;
      }
      function no(t, r) {
        return t.all || r.all || Object.keys(t).some(function(o) {
          return r[o] && ws(r[o], t[o]);
        });
      }
      K(Ze.prototype, ((wt = { add: function(t) {
        return pr(this, t), this;
      }, addKey: function(t) {
        return dr(this, t, t), this;
      }, addKeys: function(t) {
        var r = this;
        return t.forEach(function(o) {
          return dr(r, o, o);
        }), this;
      }, hasKey: function(t) {
        var r = Zr(this).next(t).value;
        return r && ye(r.from, t) <= 0 && 0 <= ye(r.to, t);
      } })[Ve] = function() {
        return Zr(this);
      }, wt));
      var En = {}, ro = {}, io = !1;
      function ti(t) {
        ei(ro, t), io || (io = !0, setTimeout(function() {
          io = !1, oo(ro, !(ro = {}));
        }, 0));
      }
      function oo(t, r) {
        r === void 0 && (r = !1);
        var o = /* @__PURE__ */ new Set();
        if (t.all) for (var u = 0, l = Object.values(En); u < l.length; u++) xs(h = l[u], t, o, r);
        else for (var f in t) {
          var h, y = /^idb\:\/\/(.*)\/(.*)\//.exec(f);
          y && (f = y[1], y = y[2], (h = En["idb://".concat(f, "/").concat(y)]) && xs(h, t, o, r));
        }
        o.forEach(function(v) {
          return v();
        });
      }
      function xs(t, r, o, u) {
        for (var l = [], f = 0, h = Object.entries(t.queries.query); f < h.length; f++) {
          for (var y = h[f], v = y[0], w = [], x = 0, _ = y[1]; x < _.length; x++) {
            var A = _[x];
            no(r, A.obsSet) ? A.subscribers.forEach(function(T) {
              return o.add(T);
            }) : u && w.push(A);
          }
          u && l.push([v, w]);
        }
        if (u) for (var b = 0, O = l; b < O.length; b++) {
          var R = O[b], v = R[0], w = R[1];
          t.queries.query[v] = w;
        }
      }
      function qu(t) {
        var r = t._state, o = t._deps.indexedDB;
        if (r.isBeingOpened || t.idbdb) return r.dbReadyPromise.then(function() {
          return r.dbOpenError ? Le(r.dbOpenError) : t;
        });
        r.isBeingOpened = !0, r.dbOpenError = null, r.openComplete = !1;
        var u = r.openCanceller, l = Math.round(10 * t.verno), f = !1;
        function h() {
          if (r.openCanceller !== u) throw new oe.DatabaseClosed("db.open() was cancelled");
        }
        function y() {
          return new ee(function(A, b) {
            if (h(), !o) throw new oe.MissingAPI();
            var O = t.name, R = r.autoSchema || !l ? o.open(O) : o.open(O, l);
            if (!R) throw new oe.MissingAPI();
            R.onerror = Dt(b), R.onblocked = ke(t._fireOnBlocked), R.onupgradeneeded = ke(function(T) {
              var N;
              x = R.transaction, r.autoSchema && !t._options.allowEmptyDB ? (R.onerror = ur, x.abort(), R.result.close(), (N = o.deleteDatabase(O)).onsuccess = N.onerror = ke(function() {
                b(new oe.NoSuchDatabase("Database ".concat(O, " doesnt exist")));
              })) : (x.onerror = Dt(b), T = T.oldVersion > Math.pow(2, 62) ? 0 : T.oldVersion, _ = T < 1, t.idbdb = R.result, f && Vu(t, x), Fu(t, T / 10, x, b));
            }, b), R.onsuccess = ke(function() {
              x = null;
              var T, N, P, M, j, V = t.idbdb = R.result, Y = ge(V.objectStoreNames);
              if (0 < Y.length) try {
                var G = V.transaction((M = Y).length === 1 ? M[0] : M, "readonly");
                if (r.autoSchema) N = V, P = G, (T = t).verno = N.version / 10, P = T._dbSchema = Jr(0, N, P), T._storeNames = ge(N.objectStoreNames, 0), Xr(T, [T._allTables], d(P), P);
                else if (Qr(t, t._dbSchema, G), ((j = zi(Jr(0, (j = t).idbdb, G), j._dbSchema)).add.length || j.change.some(function(W) {
                  return W.add.length || W.change.length;
                })) && !f) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), V.close(), l = V.version + 1, f = !0, A(y());
                Yr(t, G);
              } catch {
              }
              Kn.push(t), V.onversionchange = ke(function(W) {
                r.vcFired = !0, t.on("versionchange").fire(W);
              }), V.onclose = ke(function(W) {
                t.on("close").fire(W);
              }), _ && (j = t._deps, G = O, V = j.indexedDB, j = j.IDBKeyRange, Zi(V) || G === Fr || Qi(V, j).put({ name: G }).catch(g)), A();
            }, b);
          }).catch(function(A) {
            switch (A?.name) {
              case "UnknownError":
                if (0 < r.PR1398_maxLoop) return r.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), y();
                break;
              case "VersionError":
                if (0 < l) return l = 0, y();
            }
            return ee.reject(A);
          });
        }
        var v, w = r.dbReadyResolve, x = null, _ = !1;
        return ee.race([u, (typeof navigator > "u" ? ee.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(A) {
          function b() {
            return indexedDB.databases().finally(A);
          }
          v = setInterval(b, 100), b();
        }).finally(function() {
          return clearInterval(v);
        }) : Promise.resolve()).then(y)]).then(function() {
          return h(), r.onReadyBeingFired = [], ee.resolve(eo(function() {
            return t.on.ready.fire(t.vip);
          })).then(function A() {
            if (0 < r.onReadyBeingFired.length) {
              var b = r.onReadyBeingFired.reduce($, g);
              return r.onReadyBeingFired = [], ee.resolve(eo(function() {
                return b(t.vip);
              })).then(A);
            }
          });
        }).finally(function() {
          r.openCanceller === u && (r.onReadyBeingFired = null, r.isBeingOpened = !1);
        }).catch(function(A) {
          r.dbOpenError = A;
          try {
            x && x.abort();
          } catch {
          }
          return u === r.openCanceller && t._close(), Le(A);
        }).finally(function() {
          r.openComplete = !0, w();
        }).then(function() {
          var A;
          return _ && (A = {}, t.tables.forEach(function(b) {
            b.schema.indexes.forEach(function(O) {
              O.name && (A["idb://".concat(t.name, "/").concat(b.name, "/").concat(O.name)] = new Ze(-1 / 0, [[[]]]));
            }), A["idb://".concat(t.name, "/").concat(b.name, "/")] = A["idb://".concat(t.name, "/").concat(b.name, "/:dels")] = new Ze(-1 / 0, [[[]]]);
          }), un(lr).fire(A), oo(A, !0)), t;
        });
      }
      function so(t) {
        function r(f) {
          return t.next(f);
        }
        var o = l(r), u = l(function(f) {
          return t.throw(f);
        });
        function l(f) {
          return function(v) {
            var y = f(v), v = y.value;
            return y.done ? v : v && typeof v.then == "function" ? v.then(o, u) : p(v) ? Promise.all(v).then(o, u) : o(v);
          };
        }
        return l(r)();
      }
      function ni(t, r, o) {
        for (var u = p(t) ? t.slice() : [t], l = 0; l < o; ++l) u.push(r);
        return u;
      }
      var Wu = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(t) {
        return s(s({}, t), { table: function(r) {
          var o = t.table(r), u = o.schema, l = {}, f = [];
          function h(_, A, b) {
            var O = fr(_), R = l[O] = l[O] || [], T = _ == null ? 0 : typeof _ == "string" ? 1 : _.length, N = 0 < A, N = s(s({}, b), { name: N ? "".concat(O, "(virtual-from:").concat(b.name, ")") : b.name, lowLevelIndex: b, isVirtual: N, keyTail: A, keyLength: T, extractKey: Yi(_), unique: !N && b.unique });
            return R.push(N), N.isPrimaryKey || f.push(N), 1 < T && h(T === 2 ? _[0] : _.slice(0, T - 1), A + 1, b), R.sort(function(P, M) {
              return P.keyTail - M.keyTail;
            }), N;
          }
          r = h(u.primaryKey.keyPath, 0, u.primaryKey), l[":id"] = [r];
          for (var y = 0, v = u.indexes; y < v.length; y++) {
            var w = v[y];
            h(w.keyPath, 0, w);
          }
          function x(_) {
            var A, b = _.query.index;
            return b.isVirtual ? s(s({}, _), { query: { index: b.lowLevelIndex, range: (A = _.query.range, b = b.keyTail, { type: A.type === 1 ? 2 : A.type, lower: ni(A.lower, A.lowerOpen ? t.MAX_KEY : t.MIN_KEY, b), lowerOpen: !0, upper: ni(A.upper, A.upperOpen ? t.MIN_KEY : t.MAX_KEY, b), upperOpen: !0 }) } }) : _;
          }
          return s(s({}, o), { schema: s(s({}, u), { primaryKey: r, indexes: f, getIndexByKeyPath: function(_) {
            return (_ = l[fr(_)]) && _[0];
          } }), count: function(_) {
            return o.count(x(_));
          }, query: function(_) {
            return o.query(x(_));
          }, openCursor: function(_) {
            var A = _.query.index, b = A.keyTail, O = A.isVirtual, R = A.keyLength;
            return O ? o.openCursor(x(_)).then(function(N) {
              return N && T(N);
            }) : o.openCursor(_);
            function T(N) {
              return Object.create(N, { continue: { value: function(P) {
                P != null ? N.continue(ni(P, _.reverse ? t.MAX_KEY : t.MIN_KEY, b)) : _.unique ? N.continue(N.key.slice(0, R).concat(_.reverse ? t.MIN_KEY : t.MAX_KEY, b)) : N.continue();
              } }, continuePrimaryKey: { value: function(P, M) {
                N.continuePrimaryKey(ni(P, t.MAX_KEY, b), M);
              } }, primaryKey: { get: function() {
                return N.primaryKey;
              } }, key: { get: function() {
                var P = N.key;
                return R === 1 ? P[0] : P.slice(0, R);
              } }, value: { get: function() {
                return N.value;
              } } });
            }
          } });
        } });
      } };
      function ao(t, r, o, u) {
        return o = o || {}, u = u || "", d(t).forEach(function(l) {
          var f, h, y;
          C(r, l) ? (f = t[l], h = r[l], typeof f == "object" && typeof h == "object" && f && h ? (y = Pn(f)) !== Pn(h) ? o[u + l] = r[l] : y === "Object" ? ao(f, h, o, u + l + ".") : f !== h && (o[u + l] = r[l]) : f !== h && (o[u + l] = r[l])) : o[u + l] = void 0;
        }), d(r).forEach(function(l) {
          C(t, l) || (o[u + l] = r[l]);
        }), o;
      }
      function uo(t, r) {
        return r.type === "delete" ? r.keys : r.keys || r.values.map(t.extractKey);
      }
      var $u = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(t) {
        return s(s({}, t), { table: function(r) {
          var o = t.table(r), u = o.schema.primaryKey;
          return s(s({}, o), { mutate: function(l) {
            var f = ne.trans, h = f.table(r).hook, y = h.deleting, v = h.creating, w = h.updating;
            switch (l.type) {
              case "add":
                if (v.fire === g) break;
                return f._promise("readwrite", function() {
                  return x(l);
                }, !0);
              case "put":
                if (v.fire === g && w.fire === g) break;
                return f._promise("readwrite", function() {
                  return x(l);
                }, !0);
              case "delete":
                if (y.fire === g) break;
                return f._promise("readwrite", function() {
                  return x(l);
                }, !0);
              case "deleteRange":
                if (y.fire === g) break;
                return f._promise("readwrite", function() {
                  return (function _(A, b, O) {
                    return o.query({ trans: A, values: !1, query: { index: u, range: b }, limit: O }).then(function(R) {
                      var T = R.result;
                      return x({ type: "delete", keys: T, trans: A }).then(function(N) {
                        return 0 < N.numFailures ? Promise.reject(N.failures[0]) : T.length < O ? { failures: [], numFailures: 0, lastResult: void 0 } : _(A, s(s({}, b), { lower: T[T.length - 1], lowerOpen: !0 }), O);
                      });
                    });
                  })(l.trans, l.range, 1e4);
                }, !0);
            }
            return o.mutate(l);
            function x(_) {
              var A, b, O, R = ne.trans, T = _.keys || uo(u, _);
              if (!T) throw new Error("Keys missing");
              return (_ = _.type === "add" || _.type === "put" ? s(s({}, _), { keys: T }) : s({}, _)).type !== "delete" && (_.values = a([], _.values)), _.keys && (_.keys = a([], _.keys)), A = o, O = T, ((b = _).type === "add" ? Promise.resolve([]) : A.getMany({ trans: b.trans, keys: O, cache: "immutable" })).then(function(N) {
                var P = T.map(function(M, j) {
                  var V, Y, G, W = N[j], Z = { onerror: null, onsuccess: null };
                  return _.type === "delete" ? y.fire.call(Z, M, W, R) : _.type === "add" || W === void 0 ? (V = v.fire.call(Z, M, _.values[j], R), M == null && V != null && (_.keys[j] = M = V, u.outbound || Ne(_.values[j], u.keyPath, M))) : (V = ao(W, _.values[j]), (Y = w.fire.call(Z, V, M, W, R)) && (G = _.values[j], Object.keys(Y).forEach(function(z) {
                    C(G, z) ? G[z] = Y[z] : Ne(G, z, Y[z]);
                  }))), Z;
                });
                return o.mutate(_).then(function(M) {
                  for (var j = M.failures, V = M.results, Y = M.numFailures, M = M.lastResult, G = 0; G < T.length; ++G) {
                    var W = (V || T)[G], Z = P[G];
                    W == null ? Z.onerror && Z.onerror(j[G]) : Z.onsuccess && Z.onsuccess(_.type === "put" && N[G] ? _.values[G] : W);
                  }
                  return { failures: j, results: V, numFailures: Y, lastResult: M };
                }).catch(function(M) {
                  return P.forEach(function(j) {
                    return j.onerror && j.onerror(M);
                  }), Promise.reject(M);
                });
              });
            }
          } });
        } });
      } };
      function Ts(t, r, o) {
        try {
          if (!r || r.keys.length < t.length) return null;
          for (var u = [], l = 0, f = 0; l < r.keys.length && f < t.length; ++l) ye(r.keys[l], t[f]) === 0 && (u.push(o ? _t(r.values[l]) : r.values[l]), ++f);
          return u.length === t.length ? u : null;
        } catch {
          return null;
        }
      }
      var Yu = { stack: "dbcore", level: -1, create: function(t) {
        return { table: function(r) {
          var o = t.table(r);
          return s(s({}, o), { getMany: function(u) {
            if (!u.cache) return o.getMany(u);
            var l = Ts(u.keys, u.trans._cache, u.cache === "clone");
            return l ? ee.resolve(l) : o.getMany(u).then(function(f) {
              return u.trans._cache = { keys: u.keys, values: u.cache === "clone" ? _t(f) : f }, f;
            });
          }, mutate: function(u) {
            return u.type !== "add" && (u.trans._cache = null), o.mutate(u);
          } });
        } };
      } };
      function Rs(t, r) {
        return t.trans.mode === "readonly" && !!t.subscr && !t.trans.explicit && t.trans.db._options.cache !== "disabled" && !r.schema.primaryKey.outbound;
      }
      function Ss(t, r) {
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
      var Xu = { stack: "dbcore", level: 0, name: "Observability", create: function(t) {
        var r = t.schema.name, o = new Ze(t.MIN_KEY, t.MAX_KEY);
        return s(s({}, t), { transaction: function(u, l, f) {
          if (ne.subscr && l !== "readonly") throw new oe.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ne.querier));
          return t.transaction(u, l, f);
        }, table: function(u) {
          var l = t.table(u), f = l.schema, h = f.primaryKey, _ = f.indexes, y = h.extractKey, v = h.outbound, w = h.autoIncrement && _.filter(function(b) {
            return b.compound && b.keyPath.includes(h.keyPath);
          }), x = s(s({}, l), { mutate: function(b) {
            function O(z) {
              return z = "idb://".concat(r, "/").concat(u, "/").concat(z), M[z] || (M[z] = new Ze());
            }
            var R, T, N, P = b.trans, M = b.mutatedParts || (b.mutatedParts = {}), j = O(""), V = O(":dels"), Y = b.type, Z = b.type === "deleteRange" ? [b.range] : b.type === "delete" ? [b.keys] : b.values.length < 50 ? [uo(h, b).filter(function(z) {
              return z;
            }), b.values] : [], G = Z[0], W = Z[1], Z = b.trans._cache;
            return p(G) ? (j.addKeys(G), (Z = Y === "delete" || G.length === W.length ? Ts(G, Z) : null) || V.addKeys(G), (Z || W) && (R = O, T = Z, N = W, f.indexes.forEach(function(z) {
              var te = R(z.name || "");
              function me(de) {
                return de != null ? z.extractKey(de) : null;
              }
              function be(de) {
                return z.multiEntry && p(de) ? de.forEach(function(Be) {
                  return te.addKey(Be);
                }) : te.addKey(de);
              }
              (T || N).forEach(function(de, et) {
                var ce = T && me(T[et]), et = N && me(N[et]);
                ye(ce, et) !== 0 && (ce != null && be(ce), et != null && be(et));
              });
            }))) : G ? (W = { from: (W = G.lower) !== null && W !== void 0 ? W : t.MIN_KEY, to: (W = G.upper) !== null && W !== void 0 ? W : t.MAX_KEY }, V.add(W), j.add(W)) : (j.add(o), V.add(o), f.indexes.forEach(function(z) {
              return O(z.name).add(o);
            })), l.mutate(b).then(function(z) {
              return !G || b.type !== "add" && b.type !== "put" || (j.addKeys(z.results), w && w.forEach(function(te) {
                for (var me = b.values.map(function(ce) {
                  return te.extractKey(ce);
                }), be = te.keyPath.findIndex(function(ce) {
                  return ce === h.keyPath;
                }), de = 0, Be = z.results.length; de < Be; ++de) me[de][be] = z.results[de];
                O(te.name).addKeys(me);
              })), P.mutatedParts = ei(P.mutatedParts || {}, M), z;
            });
          } }), _ = function(O) {
            var R = O.query, O = R.index, R = R.range;
            return [O, new Ze((O = R.lower) !== null && O !== void 0 ? O : t.MIN_KEY, (R = R.upper) !== null && R !== void 0 ? R : t.MAX_KEY)];
          }, A = { get: function(b) {
            return [h, new Ze(b.key)];
          }, getMany: function(b) {
            return [h, new Ze().addKeys(b.keys)];
          }, count: _, query: _, openCursor: _ };
          return d(A).forEach(function(b) {
            x[b] = function(O) {
              var R = ne.subscr, T = !!R, N = Rs(ne, l) && Ss(b, O) ? O.obsSet = {} : R;
              if (T) {
                var P = function(W) {
                  return W = "idb://".concat(r, "/").concat(u, "/").concat(W), N[W] || (N[W] = new Ze());
                }, M = P(""), j = P(":dels"), R = A[b](O), T = R[0], R = R[1];
                if ((b === "query" && T.isPrimaryKey && !O.values ? j : P(T.name || "")).add(R), !T.isPrimaryKey) {
                  if (b !== "count") {
                    var V = b === "query" && v && O.values && l.query(s(s({}, O), { values: !1 }));
                    return l[b].apply(this, arguments).then(function(W) {
                      if (b === "query") {
                        if (v && O.values) return V.then(function(me) {
                          return me = me.result, M.addKeys(me), W;
                        });
                        var Z = O.values ? W.result.map(y) : W.result;
                        (O.values ? M : j).addKeys(Z);
                      } else if (b === "openCursor") {
                        var z = W, te = O.values;
                        return z && Object.create(z, { key: { get: function() {
                          return j.addKey(z.primaryKey), z.key;
                        } }, primaryKey: { get: function() {
                          var me = z.primaryKey;
                          return j.addKey(me), me;
                        } }, value: { get: function() {
                          return te && M.addKey(z.primaryKey), z.value;
                        } } });
                      }
                      return W;
                    });
                  }
                  j.add(o);
                }
              }
              return l[b].apply(this, arguments);
            };
          }), x;
        } });
      } };
      function As(t, r, o) {
        if (o.numFailures === 0) return r;
        if (r.type === "deleteRange") return null;
        var u = r.keys ? r.keys.length : "values" in r && r.values ? r.values.length : 1;
        return o.numFailures === u ? null : (r = s({}, r), p(r.keys) && (r.keys = r.keys.filter(function(l, f) {
          return !(f in o.failures);
        })), "values" in r && p(r.values) && (r.values = r.values.filter(function(l, f) {
          return !(f in o.failures);
        })), r);
      }
      function lo(t, r) {
        return o = t, ((u = r).lower === void 0 || (u.lowerOpen ? 0 < ye(o, u.lower) : 0 <= ye(o, u.lower))) && (t = t, (r = r).upper === void 0 || (r.upperOpen ? ye(t, r.upper) < 0 : ye(t, r.upper) <= 0));
        var o, u;
      }
      function Ns(t, r, A, u, l, f) {
        if (!A || A.length === 0) return t;
        var h = r.query.index, y = h.multiEntry, v = r.query.range, w = u.schema.primaryKey.extractKey, x = h.extractKey, _ = (h.lowLevelIndex || h).extractKey, A = A.reduce(function(b, O) {
          var R = b, T = [];
          if (O.type === "add" || O.type === "put") for (var N = new Ze(), P = O.values.length - 1; 0 <= P; --P) {
            var M, j = O.values[P], V = w(j);
            N.hasKey(V) || (M = x(j), (y && p(M) ? M.some(function(z) {
              return lo(z, v);
            }) : lo(M, v)) && (N.addKey(V), T.push(j)));
          }
          switch (O.type) {
            case "add":
              var Y = new Ze().addKeys(r.values ? b.map(function(te) {
                return w(te);
              }) : b), R = b.concat(r.values ? T.filter(function(te) {
                return te = w(te), !Y.hasKey(te) && (Y.addKey(te), !0);
              }) : T.map(function(te) {
                return w(te);
              }).filter(function(te) {
                return !Y.hasKey(te) && (Y.addKey(te), !0);
              }));
              break;
            case "put":
              var G = new Ze().addKeys(O.values.map(function(te) {
                return w(te);
              }));
              R = b.filter(function(te) {
                return !G.hasKey(r.values ? w(te) : te);
              }).concat(r.values ? T : T.map(function(te) {
                return w(te);
              }));
              break;
            case "delete":
              var W = new Ze().addKeys(O.keys);
              R = b.filter(function(te) {
                return !W.hasKey(r.values ? w(te) : te);
              });
              break;
            case "deleteRange":
              var Z = O.range;
              R = b.filter(function(te) {
                return !lo(w(te), Z);
              });
          }
          return R;
        }, t);
        return A === t ? t : (A.sort(function(b, O) {
          return ye(_(b), _(O)) || ye(w(b), w(O));
        }), r.limit && r.limit < 1 / 0 && (A.length > r.limit ? A.length = r.limit : t.length === r.limit && A.length < r.limit && (l.dirty = !0)), f ? Object.freeze(A) : A);
      }
      function Is(t, r) {
        return ye(t.lower, r.lower) === 0 && ye(t.upper, r.upper) === 0 && !!t.lowerOpen == !!r.lowerOpen && !!t.upperOpen == !!r.upperOpen;
      }
      function zu(t, r) {
        return (function(o, u, l, f) {
          if (o === void 0) return u !== void 0 ? -1 : 0;
          if (u === void 0) return 1;
          if ((u = ye(o, u)) === 0) {
            if (l && f) return 0;
            if (l) return 1;
            if (f) return -1;
          }
          return u;
        })(t.lower, r.lower, t.lowerOpen, r.lowerOpen) <= 0 && 0 <= (function(o, u, l, f) {
          if (o === void 0) return u !== void 0 ? 1 : 0;
          if (u === void 0) return -1;
          if ((u = ye(o, u)) === 0) {
            if (l && f) return 0;
            if (l) return -1;
            if (f) return 1;
          }
          return u;
        })(t.upper, r.upper, t.upperOpen, r.upperOpen);
      }
      function Ju(t, r, o, u) {
        t.subscribers.add(o), u.addEventListener("abort", function() {
          var l, f;
          t.subscribers.delete(o), t.subscribers.size === 0 && (l = t, f = r, setTimeout(function() {
            l.subscribers.size === 0 && _e(f, l);
          }, 3e3));
        });
      }
      var Qu = { stack: "dbcore", level: 0, name: "Cache", create: function(t) {
        var r = t.schema.name;
        return s(s({}, t), { transaction: function(o, u, l) {
          var f, h, y = t.transaction(o, u, l);
          return u === "readwrite" && (h = (f = new AbortController()).signal, l = function(v) {
            return function() {
              if (f.abort(), u === "readwrite") {
                for (var w = /* @__PURE__ */ new Set(), x = 0, _ = o; x < _.length; x++) {
                  var A = _[x], b = En["idb://".concat(r, "/").concat(A)];
                  if (b) {
                    var O = t.table(A), R = b.optimisticOps.filter(function(te) {
                      return te.trans === y;
                    });
                    if (y._explicit && v && y.mutatedParts) for (var T = 0, N = Object.values(b.queries.query); T < N.length; T++) for (var P = 0, M = (Y = N[T]).slice(); P < M.length; P++) no((G = M[P]).obsSet, y.mutatedParts) && (_e(Y, G), G.subscribers.forEach(function(te) {
                      return w.add(te);
                    }));
                    else if (0 < R.length) {
                      b.optimisticOps = b.optimisticOps.filter(function(te) {
                        return te.trans !== y;
                      });
                      for (var j = 0, V = Object.values(b.queries.query); j < V.length; j++) for (var Y, G, W, Z = 0, z = (Y = V[j]).slice(); Z < z.length; Z++) (G = z[Z]).res != null && y.mutatedParts && (v && !G.dirty ? (W = Object.isFrozen(G.res), W = Ns(G.res, G.req, R, O, G, W), G.dirty ? (_e(Y, G), G.subscribers.forEach(function(te) {
                        return w.add(te);
                      })) : W !== G.res && (G.res = W, G.promise = ee.resolve({ result: W }))) : (G.dirty && _e(Y, G), G.subscribers.forEach(function(te) {
                        return w.add(te);
                      })));
                    }
                  }
                }
                w.forEach(function(te) {
                  return te();
                });
              }
            };
          }, y.addEventListener("abort", l(!1), { signal: h }), y.addEventListener("error", l(!1), { signal: h }), y.addEventListener("complete", l(!0), { signal: h })), y;
        }, table: function(o) {
          var u = t.table(o), l = u.schema.primaryKey;
          return s(s({}, u), { mutate: function(f) {
            var h = ne.trans;
            if (l.outbound || h.db._options.cache === "disabled" || h.explicit || h.idbtrans.mode !== "readwrite") return u.mutate(f);
            var y = En["idb://".concat(r, "/").concat(o)];
            return y ? (h = u.mutate(f), f.type !== "add" && f.type !== "put" || !(50 <= f.values.length || uo(l, f).some(function(v) {
              return v == null;
            })) ? (y.optimisticOps.push(f), f.mutatedParts && ti(f.mutatedParts), h.then(function(v) {
              0 < v.numFailures && (_e(y.optimisticOps, f), (v = As(0, f, v)) && y.optimisticOps.push(v), f.mutatedParts && ti(f.mutatedParts));
            }), h.catch(function() {
              _e(y.optimisticOps, f), f.mutatedParts && ti(f.mutatedParts);
            })) : h.then(function(v) {
              var w = As(0, s(s({}, f), { values: f.values.map(function(x, _) {
                var A;
                return v.failures[_] ? x : (x = (A = l.keyPath) !== null && A !== void 0 && A.includes(".") ? _t(x) : s({}, x), Ne(x, l.keyPath, v.results[_]), x);
              }) }), v);
              y.optimisticOps.push(w), queueMicrotask(function() {
                return f.mutatedParts && ti(f.mutatedParts);
              });
            }), h) : u.mutate(f);
          }, query: function(f) {
            if (!Rs(ne, u) || !Ss("query", f)) return u.query(f);
            var h = ((w = ne.trans) === null || w === void 0 ? void 0 : w.db._options.cache) === "immutable", _ = ne, y = _.requery, v = _.signal, w = (function(O, R, T, N) {
              var P = En["idb://".concat(O, "/").concat(R)];
              if (!P) return [];
              if (!(R = P.queries[T])) return [null, !1, P, null];
              var M = R[(N.query ? N.query.index.name : null) || ""];
              if (!M) return [null, !1, P, null];
              switch (T) {
                case "query":
                  var j = M.find(function(V) {
                    return V.req.limit === N.limit && V.req.values === N.values && Is(V.req.query.range, N.query.range);
                  });
                  return j ? [j, !0, P, M] : [M.find(function(V) {
                    return ("limit" in V.req ? V.req.limit : 1 / 0) >= N.limit && (!N.values || V.req.values) && zu(V.req.query.range, N.query.range);
                  }), !1, P, M];
                case "count":
                  return j = M.find(function(V) {
                    return Is(V.req.query.range, N.query.range);
                  }), [j, !!j, P, M];
              }
            })(r, o, "query", f), x = w[0], _ = w[1], A = w[2], b = w[3];
            return x && _ ? x.obsSet = f.obsSet : (_ = u.query(f).then(function(O) {
              var R = O.result;
              if (x && (x.res = R), h) {
                for (var T = 0, N = R.length; T < N; ++T) Object.freeze(R[T]);
                Object.freeze(R);
              } else O.result = _t(R);
              return O;
            }).catch(function(O) {
              return b && x && _e(b, x), Promise.reject(O);
            }), x = { obsSet: f.obsSet, promise: _, subscribers: /* @__PURE__ */ new Set(), type: "query", req: f, dirty: !1 }, b ? b.push(x) : (b = [x], (A = A || (En["idb://".concat(r, "/").concat(o)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[f.query.index.name || ""] = b)), Ju(x, b, y, v), x.promise.then(function(O) {
              return { result: Ns(O.result, f, A?.optimisticOps, u, x, h) };
            });
          } });
        } });
      } };
      function ri(t, r) {
        return new Proxy(t, { get: function(o, u, l) {
          return u === "db" ? r : Reflect.get(o, u, l);
        } });
      }
      var Gt = (Ue.prototype.version = function(t) {
        if (isNaN(t) || t < 0.1) throw new oe.Type("Given version is not a positive number");
        if (t = Math.round(10 * t) / 10, this.idbdb || this._state.isBeingOpened) throw new oe.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, t);
        var r = this._versions, o = r.filter(function(u) {
          return u._cfg.version === t;
        })[0];
        return o || (o = new this.Version(t), r.push(o), r.sort(Hu), o.stores({}), this._state.autoSchema = !1, o);
      }, Ue.prototype._whenReady = function(t) {
        var r = this;
        return this.idbdb && (this._state.openComplete || ne.letThrough || this._vip) ? t() : new ee(function(o, u) {
          if (r._state.openComplete) return u(new oe.DatabaseClosed(r._state.dbOpenError));
          if (!r._state.isBeingOpened) {
            if (!r._state.autoOpen) return void u(new oe.DatabaseClosed());
            r.open().catch(g);
          }
          r._state.dbReadyPromise.then(o, u);
        }).then(t);
      }, Ue.prototype.use = function(t) {
        var r = t.stack, o = t.create, u = t.level, l = t.name;
        return l && this.unuse({ stack: r, name: l }), t = this._middlewares[r] || (this._middlewares[r] = []), t.push({ stack: r, create: o, level: u ?? 10, name: l }), t.sort(function(f, h) {
          return f.level - h.level;
        }), this;
      }, Ue.prototype.unuse = function(t) {
        var r = t.stack, o = t.name, u = t.create;
        return r && this._middlewares[r] && (this._middlewares[r] = this._middlewares[r].filter(function(l) {
          return u ? l.create !== u : !!o && l.name !== o;
        })), this;
      }, Ue.prototype.open = function() {
        var t = this;
        return vn(je, function() {
          return qu(t);
        });
      }, Ue.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var t = this._state, r = Kn.indexOf(this);
        if (0 <= r && Kn.splice(r, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        t.isBeingOpened || (t.dbReadyPromise = new ee(function(o) {
          t.dbReadyResolve = o;
        }), t.openCanceller = new ee(function(o, u) {
          t.cancelOpen = u;
        }));
      }, Ue.prototype.close = function(o) {
        var r = (o === void 0 ? { disableAutoOpen: !0 } : o).disableAutoOpen, o = this._state;
        r ? (o.isBeingOpened && o.cancelOpen(new oe.DatabaseClosed()), this._close(), o.autoOpen = !1, o.dbOpenError = new oe.DatabaseClosed()) : (this._close(), o.autoOpen = this._options.autoOpen || o.isBeingOpened, o.openComplete = !1, o.dbOpenError = null);
      }, Ue.prototype.delete = function(t) {
        var r = this;
        t === void 0 && (t = { disableAutoOpen: !0 });
        var o = 0 < arguments.length && typeof arguments[0] != "object", u = this._state;
        return new ee(function(l, f) {
          function h() {
            r.close(t);
            var y = r._deps.indexedDB.deleteDatabase(r.name);
            y.onsuccess = ke(function() {
              var v, w, x;
              v = r._deps, w = r.name, x = v.indexedDB, v = v.IDBKeyRange, Zi(x) || w === Fr || Qi(x, v).delete(w).catch(g), l();
            }), y.onerror = Dt(f), y.onblocked = r._fireOnBlocked;
          }
          if (o) throw new oe.InvalidArgument("Invalid closeOptions argument to db.delete()");
          u.isBeingOpened ? u.dbReadyPromise.then(h) : h();
        });
      }, Ue.prototype.backendDB = function() {
        return this.idbdb;
      }, Ue.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Ue.prototype.hasBeenClosed = function() {
        var t = this._state.dbOpenError;
        return t && t.name === "DatabaseClosed";
      }, Ue.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Ue.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Ue.prototype, "tables", { get: function() {
        var t = this;
        return d(this._allTables).map(function(r) {
          return t._allTables[r];
        });
      }, enumerable: !1, configurable: !0 }), Ue.prototype.transaction = function() {
        var t = (function(r, o, u) {
          var l = arguments.length;
          if (l < 2) throw new oe.InvalidArgument("Too few arguments");
          for (var f = new Array(l - 1); --l; ) f[l - 1] = arguments[l];
          return u = f.pop(), [r, Nt(f), u];
        }).apply(this, arguments);
        return this._transaction.apply(this, t);
      }, Ue.prototype._transaction = function(t, r, o) {
        var u = this, l = ne.trans;
        l && l.db === this && t.indexOf("!") === -1 || (l = null);
        var f, h, y = t.indexOf("?") !== -1;
        t = t.replace("!", "").replace("?", "");
        try {
          if (h = r.map(function(w) {
            if (w = w instanceof u.Table ? w.name : w, typeof w != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return w;
          }), t == "r" || t === Hi) f = Hi;
          else {
            if (t != "rw" && t != Fi) throw new oe.InvalidArgument("Invalid transaction mode: " + t);
            f = Fi;
          }
          if (l) {
            if (l.mode === Hi && f === Fi) {
              if (!y) throw new oe.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              l = null;
            }
            l && h.forEach(function(w) {
              if (l && l.storeNames.indexOf(w) === -1) {
                if (!y) throw new oe.SubTransaction("Table " + w + " not included in parent transaction.");
                l = null;
              }
            }), y && l && !l.active && (l = null);
          }
        } catch (w) {
          return l ? l._promise(null, function(x, _) {
            _(w);
          }) : Le(w);
        }
        var v = (function w(x, _, A, b, O) {
          return ee.resolve().then(function() {
            var R = ne.transless || ne, T = x._createTransaction(_, A, x._dbSchema, b);
            if (T.explicit = !0, R = { trans: T, transless: R }, b) T.idbtrans = b.idbtrans;
            else try {
              T.create(), T.idbtrans._explicit = !0, x._state.PR1398_maxLoop = 3;
            } catch (M) {
              return M.name === en.InvalidState && x.isOpen() && 0 < --x._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), x.close({ disableAutoOpen: !1 }), x.open().then(function() {
                return w(x, _, A, null, O);
              })) : Le(M);
            }
            var N, P = Ot(O);
            return P && Bn(), R = ee.follow(function() {
              var M;
              (N = O.call(T, T)) && (P ? (M = on.bind(null, null), N.then(M, M)) : typeof N.next == "function" && typeof N.throw == "function" && (N = so(N)));
            }, R), (N && typeof N.then == "function" ? ee.resolve(N).then(function(M) {
              return T.active ? M : Le(new oe.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : R.then(function() {
              return N;
            })).then(function(M) {
              return b && T._resolve(), T._completion.then(function() {
                return M;
              });
            }).catch(function(M) {
              return T._reject(M), Le(M);
            });
          });
        }).bind(null, this, f, h, l, o);
        return l ? l._promise(f, v, "lock") : ne.trans ? vn(ne.transless, function() {
          return u._whenReady(v);
        }) : this._whenReady(v);
      }, Ue.prototype.table = function(t) {
        if (!C(this._allTables, t)) throw new oe.InvalidTable("Table ".concat(t, " does not exist"));
        return this._allTables[t];
      }, Ue);
      function Ue(t, r) {
        var o = this;
        this._middlewares = {}, this.verno = 0;
        var u = Ue.dependencies;
        this._options = r = s({ addons: Ue.addons, autoOpen: !0, indexedDB: u.indexedDB, IDBKeyRange: u.IDBKeyRange, cache: "cloned" }, r), this._deps = { indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange }, u = r.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var l, f, h, y, v, w = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: g, dbReadyPromise: null, cancelOpen: g, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: r.autoOpen };
        w.dbReadyPromise = new ee(function(_) {
          w.dbReadyResolve = _;
        }), w.openCanceller = new ee(function(_, A) {
          w.cancelOpen = A;
        }), this._state = w, this.name = t, this.on = or(this, "populate", "blocked", "versionchange", "close", { ready: [$, g] }), this.once = function(_, A) {
          var b = function() {
            for (var O = [], R = 0; R < arguments.length; R++) O[R] = arguments[R];
            o.on(_).unsubscribe(b), A.apply(o, O);
          };
          return o.on(_, b);
        }, this.on.ready.subscribe = xe(this.on.ready.subscribe, function(_) {
          return function(A, b) {
            Ue.vip(function() {
              var O, R = o._state;
              R.openComplete ? (R.dbOpenError || ee.resolve().then(A), b && _(A)) : R.onReadyBeingFired ? (R.onReadyBeingFired.push(A), b && _(A)) : (_(A), O = o, b || _(function T() {
                O.on.ready.unsubscribe(A), O.on.ready.unsubscribe(T);
              }));
            });
          };
        }), this.Collection = (l = this, sr(ku.prototype, function(N, T) {
          this.db = l;
          var b = ss, O = null;
          if (T) try {
            b = T();
          } catch (P) {
            O = P;
          }
          var R = N._ctx, T = R.table, N = T.hook.reading.fire;
          this._ctx = { table: T, index: R.index, isPrimKey: !R.index || T.schema.primKey.keyPath && R.index === T.schema.primKey.name, range: b, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: O, or: R.or, valueMapper: N !== E ? N : null };
        })), this.Table = (f = this, sr(cs.prototype, function(_, A, b) {
          this.db = f, this._tx = b, this.name = _, this.schema = A, this.hook = f._allTables[_] ? f._allTables[_].hook : or(null, { creating: [U, g], reading: [B, E], updating: [J, g], deleting: [F, g] });
        })), this.Transaction = (h = this, sr(Bu.prototype, function(_, A, b, O, R) {
          var T = this;
          _ !== "readonly" && A.forEach(function(N) {
            N = (N = b[N]) === null || N === void 0 ? void 0 : N.yProps, N && (A = A.concat(N.map(function(P) {
              return P.updatesTable;
            })));
          }), this.db = h, this.mode = _, this.storeNames = A, this.schema = b, this.chromeTransactionDurability = O, this.idbtrans = null, this.on = or(this, "complete", "error", "abort"), this.parent = R || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new ee(function(N, P) {
            T._resolve = N, T._reject = P;
          }), this._completion.then(function() {
            T.active = !1, T.on.complete.fire();
          }, function(N) {
            var P = T.active;
            return T.active = !1, T.on.error.fire(N), T.parent ? T.parent._reject(N) : P && T.idbtrans && T.idbtrans.abort(), Le(N);
          });
        })), this.Version = (y = this, sr(Gu.prototype, function(_) {
          this.db = y, this._cfg = { version: _, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (v = this, sr(gs.prototype, function(_, A, b) {
          if (this.db = v, this._ctx = { table: _, index: A === ":id" ? null : A, or: b }, this._cmp = this._ascending = ye, this._descending = function(O, R) {
            return ye(R, O);
          }, this._max = function(O, R) {
            return 0 < ye(O, R) ? O : R;
          }, this._min = function(O, R) {
            return ye(O, R) < 0 ? O : R;
          }, this._IDBKeyRange = v._deps.IDBKeyRange, !this._IDBKeyRange) throw new oe.MissingAPI();
        })), this.on("versionchange", function(_) {
          0 < _.newVersion ? console.warn("Another connection wants to upgrade database '".concat(o.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(o.name, "'. Closing db now to resume the delete request.")), o.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(_) {
          !_.newVersion || _.newVersion < _.oldVersion ? console.warn("Dexie.delete('".concat(o.name, "') was blocked")) : console.warn("Upgrade '".concat(o.name, "' blocked by other connection holding version ").concat(_.oldVersion / 10));
        }), this._maxKey = cr(r.IDBKeyRange), this._createTransaction = function(_, A, b, O) {
          return new o.Transaction(_, A, b, o._options.chromeTransactionDurability, O);
        }, this._fireOnBlocked = function(_) {
          o.on("blocked").fire(_), Kn.filter(function(A) {
            return A.name === o.name && A !== o && !A._state.vcFired;
          }).map(function(A) {
            return A.on("versionchange").fire(_);
          });
        }, this.use(Yu), this.use(Qu), this.use(Xu), this.use(Wu), this.use($u);
        var x = new Proxy(this, { get: function(_, A, b) {
          if (A === "_vip") return !0;
          if (A === "table") return function(R) {
            return ri(o.table(R), x);
          };
          var O = Reflect.get(_, A, b);
          return O instanceof cs ? ri(O, x) : A === "tables" ? O.map(function(R) {
            return ri(R, x);
          }) : A === "_createTransaction" ? function() {
            return ri(O.apply(this, arguments), x);
          } : O;
        } });
        this.vip = x, u.forEach(function(_) {
          return _(o);
        });
      }
      var ii, wt = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Zu = (co.prototype.subscribe = function(t, r, o) {
        return this._subscribe(t && typeof t != "function" ? t : { next: t, error: r, complete: o });
      }, co.prototype[wt] = function() {
        return this;
      }, co);
      function co(t) {
        this._subscribe = t;
      }
      try {
        ii = { indexedDB: c.indexedDB || c.mozIndexedDB || c.webkitIndexedDB || c.msIndexedDB, IDBKeyRange: c.IDBKeyRange || c.webkitIDBKeyRange };
      } catch {
        ii = { indexedDB: null, IDBKeyRange: null };
      }
      function Cs(t) {
        var r, o = !1, u = new Zu(function(l) {
          var f = Ot(t), h, y = !1, v = {}, w = {}, x = { get closed() {
            return y;
          }, unsubscribe: function() {
            y || (y = !0, h && h.abort(), _ && un.storagemutated.unsubscribe(b));
          } };
          l.start && l.start(x);
          var _ = !1, A = function() {
            return Ui(O);
          }, b = function(R) {
            ei(v, R), no(w, v) && A();
          }, O = function() {
            var R, T, N;
            !y && ii.indexedDB && (v = {}, R = {}, h && h.abort(), h = new AbortController(), N = (function(P) {
              var M = Mn();
              try {
                f && Bn();
                var j = rn(t, P);
                return j = f ? j.finally(on) : j;
              } finally {
                M && jn();
              }
            })(T = { subscr: R, signal: h.signal, requery: A, querier: t, trans: null }), Promise.resolve(N).then(function(P) {
              o = !0, r = P, y || T.signal.aborted || (v = {}, (function(M) {
                for (var j in M) if (C(M, j)) return;
                return 1;
              })(w = R) || _ || (un(lr, b), _ = !0), Ui(function() {
                return !y && l.next && l.next(P);
              }));
            }, function(P) {
              o = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || y || Ui(function() {
                y || l.error && l.error(P);
              });
            }));
          };
          return setTimeout(A, 0), x;
        });
        return u.hasValue = function() {
          return o;
        }, u.getValue = function() {
          return r;
        }, u;
      }
      var On = Gt;
      function fo(t) {
        var r = ln;
        try {
          ln = !0, un.storagemutated.fire(t), oo(t, !0);
        } finally {
          ln = r;
        }
      }
      K(On, s(s({}, ir), { delete: function(t) {
        return new On(t, { addons: [] }).delete();
      }, exists: function(t) {
        return new On(t, { addons: [] }).open().then(function(r) {
          return r.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(t) {
        try {
          return r = On.dependencies, o = r.indexedDB, r = r.IDBKeyRange, (Zi(o) ? Promise.resolve(o.databases()).then(function(u) {
            return u.map(function(l) {
              return l.name;
            }).filter(function(l) {
              return l !== Fr;
            });
          }) : Qi(o, r).toCollection().primaryKeys()).then(t);
        } catch {
          return Le(new oe.MissingAPI());
        }
        var r, o;
      }, defineClass: function() {
        return function(t) {
          m(this, t);
        };
      }, ignoreTransaction: function(t) {
        return ne.trans ? vn(ne.transless, t) : t();
      }, vip: eo, async: function(t) {
        return function() {
          try {
            var r = so(t.apply(this, arguments));
            return r && typeof r.then == "function" ? r : ee.resolve(r);
          } catch (o) {
            return Le(o);
          }
        };
      }, spawn: function(t, r, o) {
        try {
          var u = so(t.apply(o, r || []));
          return u && typeof u.then == "function" ? u : ee.resolve(u);
        } catch (l) {
          return Le(l);
        }
      }, currentTransaction: { get: function() {
        return ne.trans || null;
      } }, waitFor: function(t, r) {
        return r = ee.resolve(typeof t == "function" ? On.ignoreTransaction(t) : t).timeout(r || 6e4), ne.trans ? ne.trans.waitFor(r) : r;
      }, Promise: ee, debug: { get: function() {
        return L;
      }, set: function(t) {
        ae(t);
      } }, derive: q, extend: m, props: K, override: xe, Events: or, on: un, liveQuery: Cs, extendObservabilitySet: ei, getByKeyPath: Ke, setByKeyPath: Ne, delByKeyPath: function(t, r) {
        typeof r == "string" ? Ne(t, r, void 0) : "length" in r && [].map.call(r, function(o) {
          Ne(t, o, void 0);
        });
      }, shallowClone: yt, deepClone: _t, getObjectDiff: ao, cmp: ye, asap: Te, minKey: -1 / 0, addons: [], connections: Kn, errnames: en, dependencies: ii, cache: En, semVer: "4.2.0", version: "4.2.0".split(".").map(function(t) {
        return parseInt(t);
      }).reduce(function(t, r, o) {
        return t + r / Math.pow(10, 2 * o);
      }) })), On.maxKey = cr(On.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (un(lr, function(t) {
        ln || (t = new CustomEvent(qi, { detail: t }), ln = !0, dispatchEvent(t), ln = !1);
      }), addEventListener(qi, function(t) {
        t = t.detail, ln || fo(t);
      }));
      var Fn, ln = !1, Ps = function() {
      };
      return typeof BroadcastChannel < "u" && ((Ps = function() {
        (Fn = new BroadcastChannel(qi)).onmessage = function(t) {
          return t.data && fo(t.data);
        };
      })(), typeof Fn.unref == "function" && Fn.unref(), un(lr, function(t) {
        ln || Fn.postMessage(t);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(t) {
        if (!Gt.disableBfCache && t.persisted) {
          L && console.debug("Dexie: handling persisted pagehide"), Fn?.close();
          for (var r = 0, o = Kn; r < o.length; r++) o[r].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(t) {
        !Gt.disableBfCache && t.persisted && (L && console.debug("Dexie: handling persisted pageshow"), Ps(), fo({ all: new Ze(-1 / 0, [[]]) }));
      })), ee.rejectionMapper = function(t, r) {
        return !t || t instanceof Ft || t instanceof TypeError || t instanceof SyntaxError || !t.name || !tn[t.name] ? t : (r = new tn[t.name](r || t.message, t), "stack" in t && D(r, "stack", { get: function() {
          return this.inner.stack;
        } }), r);
      }, ae(L), s(Gt, Object.freeze({ __proto__: null, Dexie: Gt, liveQuery: Cs, Entity: as, cmp: ye, PropModification: ar, replacePrefix: function(t, r) {
        return new ar({ replacePrefix: [t, r] });
      }, add: function(t) {
        return new ar({ add: t });
      }, remove: function(t) {
        return new ar({ remove: t });
      }, default: Gt, RangeSet: Ze, mergeRanges: pr, rangesOverlap: ws }), { default: Gt }), Gt;
    });
  })(hi)), hi.exports;
}
var kf = Df();
const jo = /* @__PURE__ */ Cf(kf), pa = Symbol.for("Dexie"), Ei = globalThis[pa] || (globalThis[pa] = jo);
if (jo.semVer !== Ei.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${jo.semVer} and ${Ei.semVer}`);
const {
  liveQuery: vd,
  mergeRanges: bd,
  rangesOverlap: wd,
  RangeSet: Ed,
  cmp: Od,
  Entity: xd,
  PropModification: Td,
  replacePrefix: Rd,
  add: Sd,
  remove: Ad,
  DexieYProvider: Nd
} = Ei;
var Tt = /* @__PURE__ */ ((e) => (e.GOOSE = "GOOSE", e.SMV = "SMV", e.REPORT = "Report", e.INTERNAL = "Internal", e.WIRED = "Wired", e.CONTROL = "Control", e))(Tt || {});
const ha = {
  GOOSE: ["ST", "MX", "SP", "OR"],
  SMV: ["ST", "MX"],
  Report: ["ST", "MX", "SP", "SV", "CF", "DC", "SG", "SE", "SR", "OR", "BL", "EX"],
  Internal: ["ST", "MX", "SP", "SV", "CF", "DC", "SG", "SE", "SR", "OR", "BL", "EX"],
  Wired: ["ST", "MX", "SP", "SV", "CF", "DC", "SG", "SE", "SR", "OR", "BL", "EX"],
  Control: []
  // TODO
};
function Ru(e) {
  return {
    addRecord: n,
    findChildRecordsByTagName: s,
    ensureRelationship: i,
    findParentRecordsWithinDepthAndGivenTagName: a,
    db: e
  };
  async function n(c) {
    const d = {
      ...c,
      id: crypto.randomUUID()
    };
    try {
      const p = await e.table(d.tagName).add(d), m = await e.table(d.tagName).get(p);
      if (!m) {
        const I = { msg: "could not find added record", table: d.tagName, addedId: p };
        throw console.error(I), new Error(JSON.stringify(I));
      }
      return m;
    } catch (p) {
      const m = {
        msg: "could not add record",
        db: e.name,
        table: d.tagName,
        recordToAdd: d,
        err: p
      };
      throw console.error(m), new Error(JSON.stringify(m));
    }
  }
  async function i(c, d) {
    const p = c.children?.some(
      (I) => I.id === d.id && I.tagName === d.tagName
    ), m = d.parent?.id === c.id && d.parent?.tagName === c.tagName;
    p || (c.children || (c.children = []), c.children.push({
      id: d.id,
      tagName: d.tagName
    }), await e.table(c.tagName).update(c.id, c)), m || (d.parent = {
      id: c.id,
      tagName: c.tagName
    }, await e.table(d.tagName).update(d.id, d));
  }
  async function s(c, d) {
    return !c.children || c.children.length === 0 ? [] : await Promise.all(
      c.children.filter((m) => m.tagName === d).map(async (m) => {
        const I = m.tagName, S = m.id;
        return await e.table(I).get({ id: S });
      })
    );
  }
  async function a(c, d, p = []) {
    const m = [];
    let I = c;
    for (let S = 0; S < d; S++) {
      if (!I.parent)
        return m;
      const C = await e.table(I.parent.tagName).get(I.parent.id);
      if (!C) {
        const K = {
          msg: "Parent record not found",
          table: I.parent.tagName,
          id: I.parent.id
        };
        throw console.error(K), new Error(JSON.stringify(K));
      }
      (p.length == 0 || p.length > 0 && p.includes(C.tagName)) && m.push(C), I = C;
    }
    return m;
  }
}
function Mf(e, n) {
  return e.attributes?.find((i) => i.name === n);
}
function Me(e, n) {
  return e?.attributes?.find((i) => i.name === n)?.value;
}
function jf(e) {
  return {
    findAllEnrichedFromDB: n,
    enrichWithDataObjects: i,
    enrichWithDataAttributes: s,
    enrichWithDataObjectSpecifications: a
  };
  async function n() {
    const d = await c();
    if (!d.length) return [];
    const p = await i(d), m = await s(p);
    return await a(m);
  }
  async function i(d) {
    const p = await e.table("LNodeType").toArray();
    return Promise.all(
      d.map(async (m) => {
        if (!m.lnType) return { ...m, dataObjects: [] };
        const I = p.find(
          (C) => C.attributes?.find((K) => K.name === "id" && K.value === m.lnType)
        ), S = [];
        if (I?.children)
          for (const C of I.children) {
            if (C.tagName !== "DO") continue;
            const K = await e.table("DO").get(C.id);
            K && S.push({
              id: K.id,
              uuid: Me(K, "uuid") ?? "",
              name: K.attributes?.find((k) => k.name === "name")?.value ?? K.id,
              lNodeId: m.id,
              dataAttributes: []
            });
          }
        return { ...m, dataObjects: S };
      })
    );
  }
  async function s(d) {
    const p = await e.table("DOType").toArray(), m = await e.table("DA").toArray();
    return Promise.all(
      d.map(async (I) => {
        const S = I.dataObjects;
        if (!S.length) return { ...I, dataObjects: [] };
        const C = await Promise.all(
          S.map(async (K) => {
            const k = K ? Me(
              await e.table("DO").get(K.id),
              "type"
            ) : void 0;
            if (!k) return { ...K, dataAttributes: [] };
            const D = p.find(
              (Ae) => Ae.attributes?.find((fe) => fe.name === "id" && fe.value === k)
            );
            if (!D || !D.children) return { ...K, dataAttributes: [] };
            const q = [];
            for (const Ae of D.children) {
              if (Ae.tagName !== "DA") continue;
              const fe = m.find((ie) => ie.id === Ae.id);
              if (!fe) continue;
              const ge = Me(fe, "name") ?? fe.id, xe = Me(fe, "fc") ?? "";
              q.push({
                id: fe.id,
                uuid: Me(fe, "uuid") ?? "",
                name: ge,
                dataObjectId: K.id,
                fc: xe
              });
            }
            return { ...K, dataAttributes: q };
          })
        );
        return { ...I, dataObjects: C };
      })
    );
  }
  async function a(d) {
    const p = await e.table("Private").toArray(), m = await e.table("DOS").toArray(), I = await e.table("DAS").toArray(), S = await e.table("SubscriberLNode").toArray();
    return Promise.all(
      d.map(async (C) => {
        const K = p.find(
          (D) => D.parent?.id === C.id && D.parent?.tagName === "LNode" && Me(D, "type") === "eIEC61850-6-100"
        );
        if (!K || !K.children)
          return { ...C, dataObjectSpecifications: [] };
        const k = [];
        for (const D of K.children) {
          if (D.tagName !== "DOS") continue;
          const q = m.find((fe) => fe.id === D.id);
          if (!q) continue;
          const Ae = [];
          if (q.children)
            for (const fe of q.children) {
              if (fe.tagName !== "DAS") continue;
              const ge = I.find((ie) => ie.id === fe.id);
              if (!ge) continue;
              let xe;
              if (ge.children) {
                const ie = ge.children.find((Te) => Te.tagName === "SubscriberLNode");
                if (ie) {
                  const Te = S.find((Ke) => Ke.id === ie.id);
                  Te && (xe = {
                    id: Te.id,
                    inputName: Me(Te, "inputName") ?? "",
                    service: Su(Te, "service"),
                    pLN: Me(Te, "pLN") ?? ""
                  });
                }
              }
              Ae.push({
                id: ge.id,
                name: Me(ge, "name") ?? "",
                desc: Me(ge, "desc") ?? "",
                dataObjectSpecificationId: q.id,
                subscriberLNode: xe
              });
            }
          k.push({
            id: q.id,
            name: Me(q, "name") ?? "",
            desc: Me(q, "desc") ?? "",
            dataAttributeSpecifications: Ae,
            lNodeId: C.id
          });
        }
        return { ...C, dataObjectSpecifications: k };
      })
    );
  }
  async function c() {
    return (await e.table("LNode").toArray()).map((p) => ({
      id: p.id,
      uuid: Me(p, "uuid") ?? "",
      iedName: Me(p, "iedName") ?? "",
      prefix: Me(p, "prefix") ?? "",
      lnClass: Me(p, "lnClass") ?? "",
      lnInst: Me(p, "lnInst") ?? "",
      lnType: Me(p, "lnType"),
      dataObjects: []
    }));
  }
}
function Su(e, n) {
  const i = e?.attributes?.find((a) => a.name === n)?.value;
  if (!i) return;
  switch (i.toUpperCase()) {
    case "GOOSE":
      return Tt.GOOSE;
    case "SMV":
      return Tt.SMV;
    case "REPORT":
      return Tt.REPORT;
    case "INTERNAL":
      return Tt.INTERNAL;
    case "WIRED":
      return Tt.WIRED;
    case "CONTROL":
      return Tt.CONTROL;
    default:
      return;
  }
}
async function Au(e) {
  try {
    const n = new Ei(e);
    return await n.open(), n;
  } catch (n) {
    throw console.error("Error opening database:", n), n;
  }
}
function Bf(e) {
  const n = Ru(e);
  return {
    findAllExistingFromDB: i
  };
  async function i() {
    const s = await e.table("SourceRef").toArray();
    if (!s.length) return [];
    const a = [];
    for (const c of s) {
      if (!c.attributes) continue;
      const d = Me(c, "sourceLNodeUuid"), p = Me(c, "sourceDoName"), m = Me(c, "sourceDaName"), I = await e.table("LNode").toArray().then(
        (k) => k.find(
          (D) => D.attributes?.some(
            (q) => q.name === "uuid" && q.value === d
          )
        )?.id
      ) || null, S = [d, p, m, I];
      if (S.some((k) => !k)) {
        console.log(`source attribute from SourceRef missing: ${S.join(", ")}`);
        continue;
      }
      const C = await n.findParentRecordsWithinDepthAndGivenTagName(
        c,
        3,
        ["LNode"]
      );
      if (C.length != 1) {
        const k = {
          msg: "LNode record not found for SourceRef id",
          id: c.id
        };
        throw console.error(k), new Error(JSON.stringify(k));
      }
      const K = {
        sourceLNodeId: I,
        destinationLNodeId: C[0].id,
        sourceDataObject: p,
        sourceDataAttribute: m,
        dataflowType: Su(c, "service"),
        inputInstance: Me(c, "inputInst") || "",
        input: Me(c, "input") || ""
      };
      a.push(K);
    }
    return a;
  }
}
function Oi(e) {
  return `${e.prefix} ${e.lnClass} ${e.lnInst}`;
}
const Kf = ["value"], Lf = ["value"], Uf = ["value"], Hf = ["value"], Ff = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Vf = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, Gf = ["data-testid"], qf = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Wf = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, $f = /* @__PURE__ */ Ci({
  __name: "dataflow-visualisation",
  props: {
    lnodes: {},
    connections: {}
  },
  emits: ["sourceLNodeChange", "destinationLNodeChange"],
  setup(e, { emit: n }) {
    const i = n, s = e;
    mn(
      () => s.lnodes,
      () => {
        a.value = void 0, c.value = void 0;
      }
    );
    const a = Xt(), c = Xt(), d = Jn(
      () => s.lnodes.filter((C) => C.id !== c.value)
    ), p = Jn(
      () => s.lnodes.filter((C) => C.id !== a.value)
    ), m = Jn(() => !a.value || !c.value ? [] : s.connections.filter(
      (C) => C.sourceLNodeId === a.value && C.destinationLNodeId === c.value
    ));
    function I(C) {
      a.value = C, i("sourceLNodeChange", C);
    }
    function S(C) {
      c.value = C, i("destinationLNodeChange", C);
    }
    return (C, K) => (Ge(), Xe("div", {
      class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] w-full min-h-[500px] mb-8",
      style: xt({ gridTemplateRows: `100px repeat(${m.value.length + 1}, 50px)` })
    }, [
      K[6] || (K[6] = re("div", { class: "col-start-1 col-span-2 row-span-full bg-(--color-ocean-gray-50) relative rounded-xl -z-1 border-(--color-ocean-gray-100) border-3 min-h-[500px]" }, null, -1)),
      re("select", {
        value: a.value ?? "",
        onChange: K[0] || (K[0] = (k) => I(k.target.value)),
        "data-testid": "select-source-lnode",
        class: "col-start-1 col-span-2 self-center justify-self-center row-start-1 text-2xl text-center"
      }, [
        K[2] || (K[2] = bu(" > ", -1)),
        K[3] || (K[3] = re("option", {
          key: "null",
          value: ""
        }, "Select LNode", -1)),
        (Ge(!0), Xe(rt, null, Xn(d.value, (k) => (Ge(), Xe("option", {
          key: k.id,
          value: k.id
        }, ht(Nn(Oi)(k)), 9, Lf))), 128))
      ], 40, Kf),
      K[7] || (K[7] = re("div", { class: "col-start-4 col-span-2 row-span-full bg-(--color-ocean-gray-50) relative rounded-xl -z-1 border-(--color-ocean-gray-100) border-3 min-h-[500px]" }, null, -1)),
      re("select", {
        value: c.value ?? "",
        onChange: K[1] || (K[1] = (k) => S(k.target.value)),
        "data-testid": "select-destination-lnode",
        class: "col-start-4 col-span-2 self-center justify-self-center row-start-1 text-2xl text-center"
      }, [
        K[4] || (K[4] = re("option", {
          key: "null",
          value: ""
        }, "Select LNode", -1)),
        (Ge(!0), Xe(rt, null, Xn(p.value, (k) => (Ge(), Xe("option", {
          key: k.id,
          value: k.id
        }, ht(Nn(Oi)(k)), 9, Hf))), 128))
      ], 40, Uf),
      (Ge(!0), Xe(rt, null, Xn(m.value, (k, D) => (Ge(), Xe(rt, null, [
        re("div", {
          class: "col-start-1 col-span-1 self-center justify-self-end",
          style: xt({ gridRowStart: D + 2 })
        }, [
          re("span", Ff, ht(k.sourceDataObject), 1),
          re("span", Vf, ht(k.sourceDataAttribute), 1)
        ], 4),
        re("div", {
          class: "rounded-full w-[20px] h-[20px] col-start-2 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-end -mr-[9px]",
          style: xt({ gridRowStart: D + 2 })
        }, null, 4),
        re("div", {
          class: "col-start-3 col-span-1 h-[2px] bg-(--color-ocean-gray-100) self-center",
          style: xt({ gridRowStart: D + 2 }),
          "data-testid": `dataflow-line-${D}`
        }, null, 12, Gf),
        (Ge(), Xe("svg", {
          height: "12",
          width: "8",
          class: "col-start-3 col-span-1 self-center justify-self-end mr-[9px]",
          style: xt({ gridRowStart: D + 2 }),
          xmlns: "http://www.w3.org/2000/svg"
        }, [...K[5] || (K[5] = [
          re("polygon", {
            points: "0,0 8,6 0,12",
            style: { fill: "var(--color-ocean-gray-100)" }
          }, null, -1)
        ])], 4)),
        re("div", {
          class: "bg-(--color-primary) text-white col-start-3 self-center justify-self-center z-1 relative p-1 rounded-sm text-sm",
          style: xt({ gridRowStart: D + 2 })
        }, ht(k.dataflowType), 5),
        re("div", {
          class: "rounded-full w-[20px] h-[20px] col-start-4 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-start -ml-[9px]",
          style: xt({ gridRowStart: D + 2 })
        }, null, 4),
        re("div", {
          class: "col-start-5 col-span-1 self-center justify-self-start",
          style: xt({ gridRowStart: D + 2 })
        }, [
          re("span", qf, ht(k.input), 1),
          re("span", Wf, ht(k.inputInstance), 1)
        ], 4)
      ], 64))), 256))
    ], 4));
  }
});
function Yf(e) {
  const n = Ru(e);
  return {
    create: i
  };
  async function i(s, a, c) {
    const d = await Xf(e, n, c);
    await zf(n, a, d, s);
  }
}
async function Xf(e, n, i) {
  const s = await e.table("LNode").get({ id: i.id });
  if (!s || !s.children || s.children.length == 0) {
    const p = {
      msg: `LNode element with uuid ${i.uuid} not found or empty`
    };
    throw console.error(p), new Error(JSON.stringify(p));
  }
  const a = await n.findChildRecordsByTagName(s, "Private");
  if (!a.filter((p) => Mf(p, "type")?.value === "eIEC61850-6-100").at(0)) {
    const p = {
      msg: `Private element of type 'eIEC61850-6-100' not found in LNode with uuid ${i.uuid}`
    };
    throw console.error(p), new Error(JSON.stringify(p));
  }
  const d = await n.findChildRecordsByTagName(
    a[0],
    "LNodeInputs"
  );
  if (d.length != 1) {
    const p = {
      msg: `LNodeInputs element not found or more than one element found in LNode with uuid ${i.uuid}`
    };
    throw console.error(p), new Error(JSON.stringify(p));
  }
  return d[0];
}
async function zf(e, n, i, s) {
  const a = await To(
    e,
    s,
    n,
    i.namespace
  );
  if (await e.ensureRelationship(i, a), s.includeQuality) {
    let c = structuredClone(we(s));
    c.attribute = "q";
    const d = await To(
      e,
      c,
      n,
      i.namespace
    );
    await e.ensureRelationship(i, d);
  }
  if (s.includeTimestamp) {
    let c = structuredClone(we(s));
    c.attribute = "t";
    const d = await To(
      e,
      c,
      n,
      i.namespace
    );
    await e.ensureRelationship(i, d);
  }
}
async function To(e, n, i, s) {
  const a = {
    tagName: "SourceRef",
    namespace: s,
    attributes: [
      {
        name: "pDO",
        value: n.signal
      },
      {
        name: "pLN",
        value: i.lnClass
      },
      {
        name: "pDA",
        value: n.attribute
      },
      {
        name: "input",
        value: n.inputName
      },
      {
        name: "inputInst",
        value: n.inputInstance
      },
      {
        name: "service",
        value: n.type
      },
      {
        name: "sourceLNodeUuid",
        value: i.uuid
      },
      {
        name: "sourceDoName",
        value: n.signal
      },
      {
        name: "sourceDaName",
        value: n.attribute
        // TODO: in the example SSD this was a combination fo SDS and DA name
      },
      {
        name: "uuid",
        value: crypto.randomUUID()
      }
      // TODO: resourceName, source, templateUUID (?) attributes (https://github.com/SeptKit/set/issues/163)
    ],
    parent: null,
    value: null,
    children: null
  };
  return await e.addRecord(a);
}
const Jf = ["open"], Qf = { class: "modal-box" }, Zf = { class: "grid grid-cols-2 gap-4 mt-4" }, ed = ["value"], td = { class: "grid grid-cols-2 gap-4 mt-4" }, nd = ["value"], rd = { class: "grid grid-cols-2 gap-4 mt-4" }, id = ["value"], od = { class: "grid grid-cols-2 gap-4 mt-4" }, sd = ["value"], ad = { class: "grid grid-cols-2 gap-4 mt-4" }, ud = ["value"], ld = { class: "grid grid-cols-2 gap-4 mt-4" }, cd = { class: "grid grid-cols-2 gap-4 mt-4" }, fd = { class: "mt-4" }, dd = { class: "mt-4" }, pd = /* @__PURE__ */ Ci({
  __name: "dataflow-creation-form",
  props: {
    sourceLNode: {},
    destinationLNode: {},
    isOpen: { type: Boolean }
  },
  emits: ["update:isOpen", "connectionCreated"],
  setup(e, { emit: n }) {
    const i = e, s = n, a = Xt(p()), c = Jn(() => a.value.type ? i.sourceLNode.dataObjects.filter(
      (k) => k.dataAttributes.some(
        (D) => ha[a.value.type].includes(
          D.fc
        )
      )
    ).map((k) => k.name) : []), d = Jn(() => a.value.type ? i.sourceLNode.dataObjects.find((k) => k.name === a.value.signal)?.dataAttributes.filter(
      (k) => ha[a.value.type].includes(
        k.fc
      )
    ).filter((k) => k.name !== "t" && k.name !== "q").map((k) => k.name) || [] : []);
    mn(
      () => a.value.signal,
      (k, D) => {
        a.value.inputName = k;
      }
    ), mn(
      () => a.value.inputName,
      () => {
        a.value.inputInstance = "1";
      }
    ), mn(
      () => a.value.type,
      () => {
        switch (a.value.type) {
          case Tt.GOOSE:
          case Tt.SMV:
            a.value.includeQuality = !0, a.value.includeTimestamp = !1;
            break;
          case Tt.REPORT:
            a.value.includeQuality = !0, a.value.includeTimestamp = !0;
            break;
          default:
            a.value.includeQuality = !1, a.value.includeTimestamp = !1;
        }
      }
    );
    function p() {
      return {
        type: null,
        signal: "",
        attribute: "",
        inputName: "",
        inputInstance: "",
        includeQuality: !1,
        includeTimestamp: !1
      };
    }
    function m(k) {
      for (const D of k)
        a.value[D] = "";
    }
    function I() {
      K(), s("update:isOpen", !1);
    }
    async function S() {
      try {
        if (!C(a.value))
          return;
        const k = localStorage.getItem("currentActiveFileDatabaseName");
        if (!k)
          throw new Error("no active file");
        const D = await Au(k);
        await Yf(D).create(
          a.value,
          i.sourceLNode,
          i.destinationLNode
        ), D.close(), s("connectionCreated"), I();
      } catch (k) {
        console.error("Error creating dataflow:", k), alert(`Error creating dataflow: ${k instanceof Error ? k.message : "Unknown error"}`);
      }
    }
    function C(k) {
      return k.type ? k.signal ? k.attribute ? k.inputName ? !0 : (alert("Please enter an input name."), !1) : (alert("Please select an attribute (DA)."), !1) : (alert("Please select a signal (DO)."), !1) : (alert("Please select a dataflow type."), !1);
    }
    function K() {
      a.value = p();
    }
    return (k, D) => (Ge(), Xe("dialog", {
      class: "modal",
      open: k.isOpen
    }, [
      re("div", Qf, [
        D[24] || (D[24] = re("h3", { class: "text-lg font-bold" }, "Create Connection", -1)),
        re("button", {
          class: "absolute top-[1.5rem] right-[1.5rem] cursor-pointer",
          onClick: I,
          "aria-label": "Close"
        }, [...D[11] || (D[11] = [
          re("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            viewBox: "0 0 64 64"
          }, [
            re("path", { d: "M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z" })
          ], -1)
        ])]),
        re("div", Zf, [
          D[13] || (D[13] = re("label", {
            for: "dataflow-type-select",
            class: "col-start-1 self-center"
          }, "Dataflow Type", -1)),
          Wt(re("select", {
            id: "dataflow-type-select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": D[0] || (D[0] = (q) => a.value.type = q),
            onChange: D[1] || (D[1] = (q) => m(["signal", "attribute"]))
          }, [
            (Ge(!0), Xe(rt, null, Xn(Object.values(Nn(Tt)), (q) => (Ge(), Xe("option", {
              key: q,
              value: q
            }, ht(q), 9, ed))), 128)),
            D[12] || (D[12] = re("option", {
              key: "empty",
              value: null
            }, "-", -1))
          ], 544), [
            [gr, a.value.type]
          ])
        ]),
        D[25] || (D[25] = re("hr", { class: "solid mt-4" }, null, -1)),
        re("div", td, [
          D[14] || (D[14] = re("label", {
            for: "source-select",
            class: "col-start-1 self-center"
          }, "Source", -1)),
          Wt(re("select", {
            id: "source-select",
            required: "",
            disabled: "",
            class: "select col-start-2",
            "onUpdate:modelValue": D[2] || (D[2] = (q) => i.sourceLNode.id = q)
          }, [
            re("option", {
              value: i.sourceLNode.id
            }, ht(Nn(Oi)(k.sourceLNode)), 9, nd)
          ], 512), [
            [gr, i.sourceLNode.id]
          ])
        ]),
        re("div", rd, [
          D[16] || (D[16] = re("label", {
            for: "data-object-select",
            class: "col-start-1 self-center"
          }, "Signal (DO)", -1)),
          Wt(re("select", {
            id: "data-object-select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": D[3] || (D[3] = (q) => a.value.signal = q),
            onChange: D[4] || (D[4] = (q) => m(["attribute"]))
          }, [
            (Ge(!0), Xe(rt, null, Xn(c.value, (q) => (Ge(), Xe("option", {
              key: q,
              value: q
            }, ht(q), 9, id))), 128)),
            D[15] || (D[15] = re("option", {
              key: "empty",
              value: ""
            }, "-", -1))
          ], 544), [
            [gr, a.value.signal]
          ])
        ]),
        re("div", od, [
          D[18] || (D[18] = re("label", {
            for: "data-attribute-select",
            class: "col-start-1 self-center"
          }, "Attribute (DA)", -1)),
          Wt(re("select", {
            id: "data-attribute-select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": D[5] || (D[5] = (q) => a.value.attribute = q)
          }, [
            (Ge(!0), Xe(rt, null, Xn(d.value, (q) => (Ge(), Xe("option", {
              key: q,
              value: q
            }, ht(q), 9, sd))), 128)),
            D[17] || (D[17] = re("option", {
              key: "empty",
              value: ""
            }, "-", -1))
          ], 512), [
            [gr, a.value.attribute]
          ])
        ]),
        D[26] || (D[26] = re("hr", { class: "solid mt-4" }, null, -1)),
        re("div", ad, [
          D[19] || (D[19] = re("label", {
            for: "destination-select",
            class: "col-start-1 self-center"
          }, "Destination", -1)),
          Wt(re("select", {
            id: "destination-select",
            required: "",
            disabled: "",
            class: "select col-start-2",
            "onUpdate:modelValue": D[6] || (D[6] = (q) => i.destinationLNode.id = q)
          }, [
            re("option", {
              value: i.destinationLNode.id
            }, ht(Nn(Oi)(k.destinationLNode)), 9, ud)
          ], 512), [
            [gr, i.destinationLNode.id]
          ])
        ]),
        re("div", ld, [
          D[20] || (D[20] = re("label", {
            for: "input-name-input",
            class: "col-start-1 self-center"
          }, "Input Name", -1)),
          Wt(re("input", {
            id: "input-name-input",
            required: "",
            type: "text",
            placeholder: "Input Name",
            class: "input col-start-2",
            "onUpdate:modelValue": D[7] || (D[7] = (q) => a.value.inputName = q)
          }, null, 512), [
            [aa, a.value.inputName]
          ])
        ]),
        re("div", cd, [
          D[21] || (D[21] = re("label", {
            for: "input-instance-input",
            class: "col-start-1 self-center"
          }, "Input Instance", -1)),
          Wt(re("input", {
            id: "input-instance-input",
            required: "",
            disabled: "",
            type: "text",
            class: "input col-start-2",
            "onUpdate:modelValue": D[8] || (D[8] = (q) => a.value.inputInstance = q)
          }, null, 512), [
            [aa, a.value.inputInstance]
          ])
        ]),
        D[27] || (D[27] = re("hr", { class: "solid mt-4" }, null, -1)),
        re("div", fd, [
          Wt(re("input", {
            type: "checkbox",
            "onUpdate:modelValue": D[9] || (D[9] = (q) => a.value.includeQuality = q),
            class: "checkbox mr-2",
            id: "checkbox-include-quality"
          }, null, 512), [
            [ua, a.value.includeQuality]
          ]),
          D[22] || (D[22] = re("label", { for: "checkbox-include-quality" }, "Include Quality", -1))
        ]),
        re("div", dd, [
          Wt(re("input", {
            type: "checkbox",
            "onUpdate:modelValue": D[10] || (D[10] = (q) => a.value.includeTimestamp = q),
            class: "checkbox mr-2",
            id: "checkbox-include-timestamp"
          }, null, 512), [
            [ua, a.value.includeTimestamp]
          ]),
          D[23] || (D[23] = re("label", { for: "checkbox-include-timestamp" }, "Include Timestamp", -1))
        ]),
        re("div", { class: "modal-action" }, [
          re("button", {
            class: "btn bg-(--color-primary) border-none text-white",
            onClick: S
          }, " Save ")
        ])
      ])
    ], 8, Jf));
  }
}), hd = { class: "flex flex-col items-center justify-center w-full" }, md = ["disabled"], gd = /* @__PURE__ */ Ci({
  __name: "dataflow-view",
  props: {
    sdks: {}
  },
  setup(e) {
    const n = e, i = Xt(), s = Xt(), a = Xt(!1), c = Xt([]), d = Xt([]);
    mn(
      () => n.sdks,
      () => {
        p(), m();
      },
      { immediate: !0 }
    );
    async function p() {
      n.sdks && (c.value = await n.sdks.lnodeSDK.findAllEnrichedFromDB());
    }
    async function m() {
      n.sdks && (d.value = await n.sdks.connectionSDK.findAllExistingFromDB());
    }
    function I(k) {
      i.value = C(k);
    }
    function S(k) {
      s.value = C(k);
    }
    function C(k) {
      return c.value.find((D) => D.id === k) ?? void 0;
    }
    function K() {
      a.value = !0;
    }
    return (k, D) => (Ge(), Xe("div", hd, [
      At($f, {
        connections: d.value,
        lnodes: c.value,
        onSourceLNodeChange: I,
        onDestinationLNodeChange: S
      }, null, 8, ["connections", "lnodes"]),
      re("button", {
        disabled: !i.value || !s.value,
        class: "btn bg-(--color-primary) border-none text-white disabled:text-(--color-ocean-gray-300)",
        onClick: K
      }, " + ", 8, md),
      i.value && s.value ? (Ge(), yu(pd, {
        key: 0,
        isOpen: a.value,
        "onUpdate:isOpen": D[0] || (D[0] = (q) => a.value = q),
        sourceLNode: i.value,
        destinationLNode: s.value,
        onConnectionCreated: m
      }, null, 8, ["isOpen", "sourceLNode", "destinationLNode"])) : Vc("", !0)
    ]));
  }
}), yd = { class: "p-10" }, _d = /* @__PURE__ */ Ci({
  __name: "app",
  props: {
    api: {}
  },
  setup(e) {
    let n = Xt();
    Qa(() => {
      window.addEventListener("storage", i), s();
    }), Jo(() => {
      window.removeEventListener("storage", i);
    });
    async function i(c) {
      if (c.key !== "currentActiveFileDatabaseName")
        return;
      const d = c.newValue;
      if (!d)
        throw new Error("incorrect active file name: " + d);
      await a(d);
    }
    async function s() {
      const c = localStorage.getItem("currentActiveFileDatabaseName");
      c && await a(c);
    }
    async function a(c) {
      n.value && n.value.db.close();
      const d = await Au(c);
      if (!d) throw new Error("database is not initialized.");
      n.value = {
        db: d,
        lnodeSDK: jf(d),
        connectionSDK: Bf(d)
      };
    }
    return (c, d) => (Ge(), Xe("div", yd, [
      At(gd, { sdks: Nn(n) }, null, 8, ["sdks"])
    ]));
  }
});
function Id(e, n) {
  if (!document.getElementById(e)) {
    console.error({ msg: "could not found root element", rootId: e });
    return;
  }
  Sf(_d, { api: n }).mount(`#${e}`);
}
export {
  Id as default
};
